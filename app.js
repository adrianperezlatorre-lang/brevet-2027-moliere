/* ============================================================
   Révisions Brevet 2027 — Lycée Français Molière (Saragosse)
   App statique : navigation, recherche, fiche du jour, progression.
   ============================================================ */

const FICHES = (window.FICHES || []).slice();

/* Métadonnées des matières : ordre, couleur, emoji */
const MATIERES = [
  { key:'maths',      nom:'Mathématiques', emoji:'📐', color:'var(--maths)' },
  { key:'francais',   nom:'Français',      emoji:'📖', color:'var(--francais)' },
  { key:'histoire',   nom:'Histoire',      emoji:'🏛️', color:'var(--histoire)' },
  { key:'geographie', nom:'Géographie',    emoji:'🌍', color:'var(--geographie)' },
  { key:'emc',        nom:'EMC',           emoji:'⚖️', color:'var(--emc)' },
  { key:'svt',        nom:'SVT',           emoji:'🧬', color:'var(--svt)' },
  { key:'physique',   nom:'Physique-Chimie', emoji:'⚗️', color:'var(--physique)' },
  { key:'techno',     nom:'Technologie',   emoji:'🔧', color:'var(--techno)' },
];
const M_BY_KEY = Object.fromEntries(MATIERES.map(m => [m.key, m]));

/* ---------- Utilitaires ---------- */
const $ = sel => document.querySelector(sel);
const app = $('#app');

function normalize(str){
  return (str || '')
    .toString().toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g,'') // enleve les accents
    .replace(/[^a-z0-9]+/g,' ').trim();
}

/* index de recherche (titre + mots-clés + notions + matière) */
function ficheHaystack(f){
  const notions = (f.contenu?.notions || []).map(n => n.terme + ' ' + n.def).join(' ');
  const obj = (f.contenu?.objectifs || []).join(' ');
  return normalize([f.titre, (f.motsCles||[]).join(' '), M_BY_KEY[f.matiereKey]?.nom,
                    f.niveau, notions, obj, f.contenu?.essentiel].join(' '));
}
FICHES.forEach(f => { f._hay = ficheHaystack(f); f._nt = normalize(f.titre); });

function searchFiches(q){
  const terms = normalize(q).split(' ').filter(Boolean);
  if(!terms.length) return [];
  return FICHES
    .map(f => {
      let score = 0;
      for(const t of terms){
        if(!f._hay.includes(t)) return null; // tous les termes doivent matcher
        if(f._nt.includes(t)) score += 3;           // bonus titre
        if((f.motsCles||[]).some(k => normalize(k).includes(t))) score += 2; // bonus mot-clé
        score += 1;
      }
      return { f, score };
    })
    .filter(Boolean)
    .sort((a,b) => b.score - a.score)
    .map(x => x.f);
}

/* ============================================================
   COMPTES UTILISATEURS (cloud Supabase + cache local)
   Comptes pseudo + mot de passe (haché en bcrypt côté serveur),
   progression synchronisée automatiquement entre appareils.
   Sans compte → mode « invité » (local uniquement).
   ============================================================ */
const BM_SYNC = {
  url: 'https://dygwcehqjzbduphiiybf.supabase.co',
  key: 'sb_publishable_Z8UAoZ94YvS-vLcsu7rfUA_GVYgV81r'   // clé publique (côté client par conception)
};
const SSTORE = 'bm_session';   // pseudo connecté
const TSTORE = 'bm_token';     // jeton de session cloud
const KSTORE = 'bm_known';     // pseudos déjà connectés sur cet appareil (pour les puces de la page compte)
const DSTORE = 'bm_dirty';     // progression locale pas encore poussée au cloud

function currentUser(){ return localStorage.getItem(SSTORE) || null; }
function knownUsers(){ try{ return JSON.parse(localStorage.getItem(KSTORE)||'[]'); }catch{ return []; } }
function rememberUser(p){ const k = knownUsers(); if(!k.includes(p)){ k.push(p); localStorage.setItem(KSTORE, JSON.stringify(k)); } }

const BM_ERREURS = {
  PSEUDO_PRIS:'Ce pseudo est déjà pris.',
  PSEUDO_INVALIDE:'Pseudo : 2 à 20 caractères (lettres, chiffres, . - _).',
  MDP_INVALIDE:'Mot de passe : 4 caractères minimum.',
  IDENTIFIANTS_INCORRECTS:'Pseudo ou mot de passe incorrect.',
  SESSION_INVALIDE:'Session expirée : reconnecte-toi.'
};
async function bmRpc(fn, args){
  let res;
  try{
    res = await fetch(BM_SYNC.url + '/rest/v1/rpc/' + fn, {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'apikey':BM_SYNC.key, 'Authorization':'Bearer '+BM_SYNC.key },
      body: JSON.stringify(args)
    });
  }catch{ throw 'Pas de connexion internet — réessaie.'; }
  const data = await res.json().catch(()=>({}));
  if(!res.ok){
    const code = Object.keys(BM_ERREURS).find(c => (data.message||'').includes(c));
    throw code ? BM_ERREURS[code] : 'Erreur serveur — réessaie dans un instant.';
  }
  return data;
}

async function registerUser(name, pass){
  const r = await bmRpc('bm_inscrire', { p_pseudo:(name||'').trim(), p_mdp:pass||'' });
  const premier = knownUsers().length === 0;
  localStorage.setItem(SSTORE, r.pseudo);
  localStorage.setItem(TSTORE, r.token);
  rememberUser(r.pseudo);
  // 1er compte sur cet appareil → il adopte la progression « invité » existante, puis on la pousse au cloud
  if(premier){
    const vues = localStorage.getItem(STORE), sc = localStorage.getItem(PSTORE);
    if(vues) localStorage.setItem(STORE+'::'+r.pseudo, vues);
    if(sc) localStorage.setItem(PSTORE+'::'+r.pseudo, sc);
    if(vues || sc) planifierSync();
  }
}
async function loginUser(name, pass){
  const r = await bmRpc('bm_connecter', { p_pseudo:(name||'').trim(), p_mdp:pass||'' });
  localStorage.setItem(SSTORE, r.pseudo);
  localStorage.setItem(TSTORE, r.token);
  rememberUser(r.pseudo);
  // la progression cloud remplace le cache local de ce pseudo
  localStorage.setItem(STORE+'::'+r.pseudo, JSON.stringify(r.vues||[]));
  localStorage.setItem(PSTORE+'::'+r.pseudo, JSON.stringify(r.parcours||{}));
  localStorage.removeItem(DSTORE);
}
function logoutUser(){
  const t = localStorage.getItem(TSTORE);
  if(t) bmRpc('bm_deconnecter', { p_token:t }).catch(()=>{});
  localStorage.removeItem(SSTORE);
  localStorage.removeItem(TSTORE);
}
/* clé de stockage propre à l'utilisateur connecté (sinon clé « invité ») */
function skey(base){ const u = currentUser(); return u ? base + '::' + u : base; }

/* ---- synchronisation automatique (avec léger différé pour grouper) ---- */
let bmSyncTimer = null;
function planifierSync(){
  if(!localStorage.getItem(TSTORE)) return;          // invité : rien à pousser
  localStorage.setItem(DSTORE, '1');
  clearTimeout(bmSyncTimer);
  bmSyncTimer = setTimeout(pousserProgression, 1200);
}
async function pousserProgression(){
  const t = localStorage.getItem(TSTORE);
  if(!t) return;
  try{
    await bmRpc('bm_sauvegarder', {
      p_token:t,
      p_vues: JSON.parse(localStorage.getItem(skey(STORE))||'[]'),
      p_parcours: JSON.parse(localStorage.getItem(skey(PSTORE))||'{}')
    });
    localStorage.removeItem(DSTORE);
  }catch(e){
    if(String(e) === BM_ERREURS.SESSION_INVALIDE){ localStorage.removeItem(TSTORE); localStorage.removeItem(SSTORE); }
    /* sinon : hors ligne → on réessaiera (drapeau bm_dirty) */
  }
}
/* au démarrage : pousser ce qui n'a pas pu l'être */
if(localStorage.getItem(DSTORE)) setTimeout(pousserProgression, 800);
window.addEventListener('online', () => { if(localStorage.getItem(DSTORE)) pousserProgression(); });

/* ---------- Progression (localStorage, par utilisateur) ---------- */
const STORE = 'brevet_moliere_vues';
function getSeen(){
  try{ return new Set(JSON.parse(localStorage.getItem(skey(STORE)) || '[]')); }
  catch{ return new Set(); }
}
function setSeen(set){ localStorage.setItem(skey(STORE), JSON.stringify([...set])); planifierSync(); }
function toggleSeen(id){
  const s = getSeen();
  s.has(id) ? s.delete(id) : s.add(id);
  setSeen(s);
  return s.has(id);
}

/* ---------- Fiche du jour (déterministe, tourne chaque jour) ---------- */
function dayNumber(){ return Math.floor(Date.now() / 86400000); }
function ficheDuJour(){
  if(!FICHES.length) return null;
  return FICHES[dayNumber() % FICHES.length];
}

/* ============================================================
   RENDU
   ============================================================ */

function tagMatiere(f){
  const m = M_BY_KEY[f.matiereKey];
  return `<span class="tag matiere" style="--c:${m.color}">${m.emoji} ${m.nom}</span>`;
}
function ficheCard(f){
  const m = M_BY_KEY[f.matiereKey];
  const seen = getSeen().has(f.id);
  const kw = (f.motsCles||[]).slice(0,4).join(' · ');
  return `<article class="fiche-card ${seen?'is-seen':''}" style="--c:${m.color}" data-fiche="${f.id}">
    <span class="seen" title="Révisée">✓</span>
    <div class="tags">${tagMatiere(f)}<span class="tag niveau">${f.niveau}</span></div>
    <h3>${f.titre}</h3>
    <div class="kw">${kw}</div>
  </article>`;
}

/* ---- Accueil ---- */
function renderAccueil(){
  const seen = getSeen();
  const total = FICHES.length;
  const pct = total ? Math.round(seen.size/total*100) : 0;
  const fdj = ficheDuJour();

  const subjectCards = MATIERES.map(m => {
    const n = FICHES.filter(f => f.matiereKey===m.key).length;
    return `<div class="subject-card" style="--c:${m.color}" data-goto="matiere/${m.key}">
      <div class="emoji">${m.emoji}</div>
      <h3>${m.nom}</h3>
      <small>${n} fiche${n>1?'s':''}</small>
    </div>`;
  }).join('');

  app.innerHTML = `
    <section class="hero">
      <h1>Prêt·e pour le Brevet 2027 ?</h1>
      <p>Une fiche par jour, tous les thèmes de la 5<sup>e</sup> à la 3<sup>e</sup> — pour avoir tout revu avant l'épreuve.</p>
      <span class="countdown" id="countdown"></span>
    </section>

    <div class="progresswrap">
      <div class="progressbar"><span style="width:${pct}%"></span></div>
      <small><b>${seen.size}/${total}</b> fiches révisées · ${pct}% du programme</small>
    </div>

    <div class="daily-label">
      <h2>Fiche du jour</h2>
      <span class="pill">🎲 change chaque jour</span>
    </div>
    ${fdj ? ficheFull(fdj, {compact:true}) : '<p class="empty">Aucune fiche disponible.</p>'}

    <div class="daily-label"><h2>Réviser par matière</h2></div>
    <div class="subject-grid">${subjectCards}</div>
  `;

  // compte à rebours (épreuves centres étrangers groupe 1 : ~mi-juin 2027)
  const target = new Date(2027, 5, 15); // 15 juin 2027 (indicatif)
  const days = Math.max(0, Math.ceil((target - new Date()) / 86400000));
  const cd = $('#countdown');
  if(cd) cd.textContent = `⏳ ~${days} jours avant les épreuves écrites (mi-juin 2027, indicatif)`;
}

/* ---- Page matière ---- */
let currentFilter = 'tous';
function renderMatiere(key){
  const m = M_BY_KEY[key];
  if(!m){ renderAccueil(); return; }
  let list = FICHES.filter(f => f.matiereKey===key);
  const niveaux = [...new Set(list.map(f => f.niveau))].sort();

  const draw = () => {
    const filtered = currentFilter==='tous' ? list : list.filter(f => f.niveau===currentFilter);
    $('#matiereList').innerHTML = filtered.length
      ? filtered.map(ficheCard).join('')
      : '<p class="empty">Aucune fiche pour ce niveau.</p>';
    document.querySelectorAll('.filters button').forEach(b =>
      b.classList.toggle('active', b.dataset.f===currentFilter));
  };

  app.innerHTML = `
    <div class="section-title" style="--c:${m.color}">
      <h1>${m.emoji} ${m.nom}</h1><span class="count">${list.length} fiches</span>
    </div>
    <div class="filters">
      <button data-f="tous">Tous les niveaux</button>
      ${niveaux.map(n => `<button data-f="${n}">${n}</button>`).join('')}
    </div>
    <div class="fiche-grid" id="matiereList"></div>
  `;
  document.querySelectorAll('.filters button').forEach(b =>
    b.addEventListener('click', () => { currentFilter = b.dataset.f; draw(); }));
  draw();
}

/* ---- Conseil de rédaction (nouveau barème 2026 : la qualité de la langue compte) ---- */
const REDAC_FAMILLE = {
  maths:'Justifie chaque réponse par une <b>propriété</b> ou un <b>théorème</b> (« d’après…, donc… »), détaille les <b>étapes du calcul</b> et n’oublie pas les <b>unités</b> et une phrase de conclusion.',
  francais:'Appuie-toi sur le texte : <b>cite entre guillemets</b>, <b>nomme les procédés</b> et explique leur <b>effet</b>. Rédige des paragraphes organisés par des <b>connecteurs logiques</b>.',
  histoire:'<b>Situe</b> dans le temps et l’espace, donne des <b>exemples précis</b> (dates, lieux, acteurs, chiffres) et <b>explique</b> chaque idée en une phrase développée.',
  geographie:'<b>Localise</b> et <b>situe</b>, appuie-toi sur des <b>exemples précis</b> (lieux, chiffres, acteurs) et rédige une réponse <b>organisée</b> et justifiée.',
  emc:'Emploie le <b>vocabulaire civique</b>, donne des <b>exemples concrets</b> et <b>argumente</b> ton point de vue de façon nuancée.',
  svt:'Suis la démarche <b>observation → interprétation → conclusion</b>, utilise le <b>vocabulaire scientifique</b> exact et <b>justifie</b> avec les données du document.',
  physique:'Explique ta <b>démarche</b>, écris les <b>relations utilisées</b> (formules), justifie avec les <b>données</b> et conclus par une phrase avec les <b>unités</b>.',
  techno:'Explique le <b>fonctionnement</b> avec le <b>vocabulaire technique</b> exact, justifie tes choix et rédige des réponses <b>claires et structurées</b>.'
};
function redacBlock(f){
  const c = f.contenu || {};
  const conseil = c.redac || REDAC_FAMILLE[f.matiereKey] || '';
  const vocab = (f.motsCles||[]).map(k=>`<span>${k}</span>`).join('');
  return `<div class="redac"><h2>✍️ Rédiger &amp; justifier</h2>
    <p><b>Nouveau barème :</b> la <b>qualité de la rédaction</b> compte. Fais des <b>phrases complètes</b>, <b>justifie</b> tes réponses et soigne l’<b>orthographe</b> et la <b>syntaxe</b>.</p>
    <p>${conseil}</p>
    <div class="redac-vocab"><span class="lbl">Vocabulaire attendu :</span> ${vocab}</div>
  </div>`;
}

/* ---- Vidéos de révision : un·e YouTubeur·euse français·e de référence par matière.
   La recherche est préremplie (chaîne + thème) : toujours valide, jamais de lien mort. ---- */
const VIDEO_CHAINE = {
  maths:      { nom:'Yvan Monka',    q:'Yvan Monka' },              // M@ths et tiques
  francais:   { nom:'Les Bons Profs', q:'Les Bons Profs français' },
  histoire:   { nom:'Les Bons Profs', q:'Les Bons Profs histoire' },
  geographie: { nom:'Les Bons Profs', q:'Les Bons Profs géographie' },
  emc:        { nom:'Les Bons Profs', q:'Les Bons Profs EMC' },
  svt:        { nom:'Mme SVT',        q:'Mme SVT' },
  physique:   { nom:'Mathrix',        q:'Mathrix physique chimie' },
  techno:     { nom:'',               q:'technologie collège brevet' }
};
function videoBlock(f){
  const c = VIDEO_CHAINE[f.matiereKey] || { nom:'', q:'brevet' };
  const requete = `${c.q} ${f.titre} ${f.niveau}`;
  const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(requete);
  const label = c.nom ? `Voir une vidéo de ${c.nom} ↗` : 'Voir des vidéos de révision ↗';
  const note = c.nom
    ? `Ouvre une recherche YouTube d’une vidéo de <b>${c.nom}</b> sur ce thème.`
    : `Ouvre une recherche YouTube de vidéos de technologie sur ce thème.`;
  return `<div class="block"><h2>📺 Vidéos de révision</h2>
    <a class="btn-video" href="${url}" target="_blank" rel="noopener">▶ ${label}</a>
    <p class="video-note">${note}</p>
  </div>`;
}

/* ---- Contenu d'une fiche ---- */
function ficheFull(f, {compact=false}={}){
  const m = M_BY_KEY[f.matiereKey];
  const c = f.contenu || {};
  const seen = getSeen().has(f.id);
  const block = (title, icon, html) => html ? `<div class="block"><h2>${icon} ${title}</h2>${html}</div>` : '';

  const objectifs = c.objectifs?.length
    ? `<ul>${c.objectifs.map(o=>`<li>${o}</li>`).join('')}</ul>` : '';
  const notions = c.notions?.length
    ? c.notions.map(n=>`<div class="notion"><b>${n.terme}</b> — ${n.def}</div>`).join('') : '';
  const essentiel = c.essentiel ? `<div>${c.essentiel}</div>` : '';
  const methode = c.methode?.length
    ? `<ol class="methode">${c.methode.map(s=>`<li>${s}</li>`).join('')}</ol>` : '';
  const exemple = c.exemple ? `<div class="exemple">${c.exemple}</div>` : '';
  const retenir = c.retenir ? `<div class="retenir"><h2>⭐ À retenir</h2><div>${c.retenir}</div></div>` : '';
  const chips = (f.motsCles||[]).map(k=>`<span data-kw="${k}">${k}</span>`).join('');

  return `<article class="fiche" style="--c:${m.color}" data-ficheroot="${f.id}">
    <div class="fiche-head">
      <div class="tags">${tagMatiere(f)}<span class="tag niveau">${f.niveau}</span></div>
      <h1>${f.titre}</h1>
    </div>
    <div class="fiche-body">
      ${block('Objectifs','🎯',objectifs)}
      ${block('Notions clés','📖',notions)}
      ${block("L'essentiel",'📚',essentiel)}
      ${block('Méthode','🛠️',methode)}
      ${block('Exemple','✏️',exemple)}
      ${retenir}
      ${redacBlock(f)}
      ${videoBlock(f)}
      ${block('Mots-clés','🔖',`<div class="chips">${chips}</div>`)}
    </div>
    <div class="fiche-foot">
      <button class="btn btn-check ${seen?'done':''}" data-check="${f.id}">
        ${seen?'✓ Fiche révisée':'Marquer comme révisée'}
      </button>
      ${compact ? `<button class="btn btn-ghost" data-goto="fiche/${f.id}">Ouvrir en grand →</button>`
                : `<button class="btn btn-random" data-random>🎲 Fiche au hasard</button>`}
    </div>
  </article>`;
}

function renderFiche(id){
  const f = FICHES.find(x=>x.id===id);
  if(!f){ renderAccueil(); return; }
  app.innerHTML = `<div class="backlink" data-back>← Retour</div>${ficheFull(f)}`;
}

/* ---- Résultats de recherche ---- */
function renderRecherche(q){
  const res = searchFiches(q);
  $('#searchInput').value = q;
  app.innerHTML = `
    <div class="section-title"><h1>Recherche</h1>
      <span class="count">${res.length} résultat${res.length>1?'s':''} pour « ${q} »</span></div>
    ${res.length
      ? `<div class="fiche-grid">${res.map(ficheCard).join('')}</div>`
      : `<div class="empty"><div class="big">🔍</div>
          <p>Aucune fiche trouvée pour « <b>${q}</b> ».<br>
          Essaie un autre mot-clé (ex. « triangle », « nazi », « énergie », « adn »…).</p></div>`}
  `;
}

/* ============================================================
   NAVIGATION (hash router)
   ============================================================ */
function renderNav(active){
  const u = currentUser();
  const logo = document.getElementById('brandLogo');
  if(logo){
    logo.textContent = u ? u[0].toUpperCase() : 'M';
    logo.classList.toggle('logged', !!u);
    logo.title = u ? ('Mon compte — ' + u) : 'Se connecter';
  }
  $('#subjectnav').innerHTML =
    `<a href="#accueil" class="${active==='accueil'?'active':''}">🏠 Accueil</a>` +
    `<a href="#parcours" class="${active==='parcours'?'active':''}">🦉 Parcours</a>` +
    `<a href="#pratique" class="navpratique ${active==='pratique'?'active':''}">📝 Pratique</a>` +
    MATIERES.map(m =>
      `<a href="#matiere/${m.key}" class="${active===m.key?'active':''}">${m.emoji} ${m.nom}</a>`
    ).join('') +
    `<a href="#compte" class="navuser ${active==='compte'?'active':''}">👤 ${u || 'Se connecter'}</a>`;
}

/* ============================================================
   COMPTE : connexion / création / profil
   ============================================================ */
function renderCompte(msg, nomPrefill){
  const u = currentUser();
  const users = knownUsers();
  if(u){
    const vues = getSeen().size;
    const scores = getParcoursScores();
    const valides = Object.values(scores).filter(p=>p>=PASS).length;
    const totalSteps = parcoursSteps().length;
    app.innerHTML = `
      <div class="section-title"><h1>👤 Mon compte</h1></div>
      <div class="compte-card">
        <div class="compte-avatar">${u[0].toUpperCase()}</div>
        <h2>${u}</h2>
        <p class="lead" style="margin:0 auto 4px">☁️ Progression enregistrée automatiquement et <b>synchronisée entre tes appareils</b>.</p>
        <div class="compte-stats">
          <div><b>${vues}</b><span>fiches révisées</span></div>
          <div><b>${valides}/${totalSteps}</b><span>étapes du parcours</span></div>
        </div>
        <div class="compte-actions">
          <button class="btn btn-ghost" data-logout>Se déconnecter</button>
          <button class="btn btn-random" data-goto="parcours">Continuer le parcours →</button>
        </div>
        ${users.length>1?`<p class="compte-switch">Changer d’utilisateur : ${users.filter(x=>x!==u).map(x=>`<span class="uchip" data-user="${x}">${x}</span>`).join(' ')}</p>`:''}
      </div>`;
    return;
  }
  app.innerHTML = `
    <div class="section-title"><h1>👤 Connexion</h1></div>
    <div class="compte-card">
      <p class="lead" style="margin:0 auto">Crée ton compte : ta progression (fiches + parcours) est <b>enregistrée automatiquement</b> et te suit <b>sur tous tes appareils</b>.</p>
      ${users.length?`<p class="compte-switch">Déjà venus sur cet appareil : ${users.map(x=>`<span class="uchip" data-user="${x}">${x}</span>`).join(' ')}</p>`:''}
      <form id="authForm" autocomplete="off">
        <label>Pseudo<input id="authName" type="text" maxlength="20" placeholder="ex. adrian" value="${nomPrefill||''}" /></label>
        <label>Mot de passe<input id="authPass" type="password" placeholder="••••••" /></label>
        ${msg?`<p class="auth-msg">${msg}</p>`:''}
        <div class="compte-actions">
          <button class="btn btn-check" type="submit">Se connecter</button>
          <button class="btn btn-random" data-register type="button">Créer un compte</button>
        </div>
      </form>
      <p class="video-note">Connexion internet nécessaire pour se connecter ; ensuite la progression est aussi gardée en local et poussée dès que possible.</p>
    </div>`;
  const val = id => document.getElementById(id).value;
  document.getElementById('authForm').addEventListener('submit', async e => {
    e.preventDefault();
    try{ await loginUser(val('authName').trim(), val('authPass')); renderNav('compte'); renderCompte(); }
    catch(err){ const n=val('authName'); renderCompte(String(err), n); }
  });
  document.querySelector('[data-register]').addEventListener('click', async () => {
    try{ await registerUser(val('authName'), val('authPass')); renderNav('compte'); renderCompte(); }
    catch(err){ const n=val('authName'); renderCompte(String(err), n); }
  });
}

/* ============================================================
   PARCOURS (façon Duolingo) : chemin de leçons + examens de bloc
   ============================================================ */
const PARCOURS = window.PARCOURS || [];
const PSTORE = 'brevet_moliere_parcours';   // { "bloc1/l1": 85, "bloc1/examen": 90, ... } meilleur score %
function getParcoursScores(){ try{ return JSON.parse(localStorage.getItem(skey(PSTORE))||'{}'); }catch{ return {}; } }
function setParcoursScore(key, pct){
  const s = getParcoursScores();
  if(!(key in s) || pct > s[key]) s[key] = pct;
  localStorage.setItem(skey(PSTORE), JSON.stringify(s));
  planifierSync();
}
const PASS = 60; // % minimum pour valider une étape

/* une étape est débloquée si toutes les étapes précédentes sont validées */
function parcoursSteps(){
  const steps = [];
  PARCOURS.forEach(b => {
    b.lecons.forEach(l => steps.push({ bloc:b, lecon:l, key:`${b.id}/${l.id}`, type:'lecon' }));
    steps.push({ bloc:b, lecon:null, key:`${b.id}/examen`, type:'examen' });
  });
  return steps;
}
function stepUnlocked(key){
  const scores = getParcoursScores();
  const steps = parcoursSteps();
  for(const st of steps){
    if(st.key === key) return true;                 // toutes les précédentes étaient validées
    if((scores[st.key]||0) < PASS) return false;    // une étape précédente non validée
  }
  return false;
}

function renderParcours(){
  const scores = getParcoursScores();
  let unlockedReached = false;
  const blocsHtml = PARCOURS.map(b => {
    const nodes = [];
    b.lecons.forEach(l => {
      const key = `${b.id}/${l.id}`;
      const score = scores[key];
      const done = (score||0) >= PASS;
      const unlocked = stepUnlocked(key);
      const m = M_BY_KEY[l.matiereKey];
      let cls = done ? 'done' : (unlocked ? 'open' : 'locked');
      if(unlocked && !done && !unlockedReached){ cls += ' current'; unlockedReached = true; }
      nodes.push(`<div class="pnode ${cls}" ${unlocked?`data-goto="parcours/${b.id}/${l.id}"`:''} style="--c:${m.color}">
        <div class="pnode-circle">${done?'✓':(unlocked?m.emoji:'🔒')}</div>
        <div class="pnode-label"><b>${l.titre}</b><small>${m.nom}${score!=null?` · ${score}%`:''}</small></div>
      </div>`);
    });
    const ekey = `${b.id}/examen`;
    const escore = scores[ekey];
    const edone = (escore||0) >= PASS;
    const eunlocked = stepUnlocked(ekey);
    let ecls = edone ? 'done' : (eunlocked ? 'open' : 'locked');
    if(eunlocked && !edone && !unlockedReached){ ecls += ' current'; unlockedReached = true; }
    nodes.push(`<div class="pnode examen ${ecls}" ${eunlocked?`data-goto="parcours/${b.id}/examen"`:''}>
      <div class="pnode-circle">${edone?'🏆':(eunlocked?'⭐':'🔒')}</div>
      <div class="pnode-label"><b>${b.examen.titre}</b><small>${b.examen.questions.length} questions${escore!=null?` · ${escore}%`:''}</small></div>
    </div>`);
    return `<section class="pbloc">
      <header class="pbloc-head"><h2>${b.titre}</h2><span>${b.sousTitre}</span></header>
      <div class="pchemin">${nodes.join('<div class="plink"></div>')}</div>
    </section>`;
  }).join('');

  app.innerHTML = `
    <div class="section-title"><h1>🦉 Parcours</h1>
      <span class="count">Avance leçon par leçon · ${PASS}% pour valider</span></div>
    <p class="lead">Comme sur Duolingo : suis le chemin dans l’ordre, du plus facile au plus difficile.
      Chaque leçon = des questions flash. À la fin d’un bloc : un <b>examen</b> qui mélange tout.
      Il faut <b>${PASS}%</b> pour débloquer l’étape suivante.</p>
    ${blocsHtml}`;
}

/* ---- Moteur de leçon / examen ---- */
let quizState = null; // { questions, idx, bonnes, key, titre, retourHash }

function startQuiz(bloc, leconId){
  const isExam = leconId === 'examen';
  const source = isExam ? bloc.examen : bloc.lecons.find(l=>l.id===leconId);
  if(!source) { renderParcours(); return; }
  quizState = {
    questions: source.questions,
    idx: 0, bonnes: 0,
    key: `${bloc.id}/${leconId}`,
    titre: isExam ? bloc.examen.titre : source.titre,
    isExam
  };
  renderQuizQuestion();
}

function renderQuizQuestion(){
  const s = quizState;
  const q = s.questions[s.idx];
  const pct = Math.round(s.idx / s.questions.length * 100);
  let corps;
  if(q.choix){
    corps = `<div class="quiz-choix">${q.choix.map((c,i)=>
      `<button class="quiz-opt" data-quiz-opt="${i}">${c}</button>`).join('')}</div>`;
  } else {
    corps = `<div class="quiz-saisie">
      <input id="quizInput" type="text" autocomplete="off" placeholder="Ta réponse…" />
      <button class="btn btn-check" data-quiz-valider>Valider</button></div>`;
  }
  app.innerHTML = `
    <div class="quiz">
      <div class="quiz-top">
        <span class="backlink" data-goto="parcours">✕ Quitter</span>
        <div class="quiz-bar"><span style="width:${pct}%"></span></div>
        <span class="quiz-count">${s.idx+1}/${s.questions.length}</span>
      </div>
      <h1 class="quiz-titre">${s.isExam?'⭐ ':''}${s.titre}</h1>
      <div class="quiz-q">${q.q}</div>
      ${corps}
      <div id="quizFeedback"></div>
    </div>`;
  const inp = document.getElementById('quizInput');
  if(inp){ inp.focus(); inp.addEventListener('keydown', e => { if(e.key==='Enter') validerSaisie(); }); }
}

function normaliserRep(str){
  return (str||'').toString().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
    .replace(/\s+/g,' ').replace(',', '.').trim();
}

function afficherFeedback(ok, expl, solTexte){
  const s = quizState;
  if(ok) s.bonnes++;
  const fb = document.getElementById('quizFeedback');
  fb.innerHTML = `<div class="quiz-fb ${ok?'ok':'ko'}">
    <b>${ok?'✅ Correct !':'❌ Raté…'}</b>
    ${!ok && solTexte ? `<div>La bonne réponse était : <b>${solTexte}</b></div>` : ''}
    ${expl ? `<div class="quiz-expl">${expl}</div>` : ''}
    <button class="btn ${ok?'btn-check':'btn-random'}" data-quiz-suivant>${s.idx+1 < s.questions.length ? 'Continuer →' : 'Voir le résultat 🏁'}</button>
  </div>`;
  // désactiver les options
  document.querySelectorAll('.quiz-opt').forEach(b => b.disabled = true);
  fb.querySelector('[data-quiz-suivant]').focus();
}

function validerChoix(i){
  const q = quizState.questions[quizState.idx];
  const ok = i === q.sol;
  document.querySelectorAll('.quiz-opt').forEach((b,bi)=>{
    if(bi===q.sol) b.classList.add('good');
    else if(bi===i && !ok) b.classList.add('bad');
  });
  afficherFeedback(ok, q.expl, q.choix[q.sol]);
}
function validerSaisie(){
  const q = quizState.questions[quizState.idx];
  const val = normaliserRep(document.getElementById('quizInput')?.value);
  if(!val) return;
  const ok = (q.saisie||[]).some(r => normaliserRep(r) === val);
  afficherFeedback(ok, q.expl, (q.saisie||[])[0]);
}

function quizSuivant(){
  const s = quizState;
  s.idx++;
  if(s.idx < s.questions.length){ renderQuizQuestion(); return; }
  // fin : score
  const pct = Math.round(s.bonnes / s.questions.length * 100);
  setParcoursScore(s.key, pct);
  const reussi = pct >= PASS;
  app.innerHTML = `
    <div class="quiz quiz-fin">
      <div class="quiz-resultat ${reussi?'win':'lose'}">
        <div class="quiz-emoji">${reussi ? (s.isExam?'🏆':'🎉') : '😅'}</div>
        <h1>${reussi ? (s.isExam?'Examen réussi !':'Leçon validée !') : 'Presque…'}</h1>
        <p class="quiz-score">${s.bonnes}/${s.questions.length} bonnes réponses · <b>${pct}%</b></p>
        <p>${reussi ? 'L’étape suivante est débloquée. Continue sur ta lancée !'
                    : `Il faut ${PASS}% pour valider. Revois la notion puis réessaie !`}</p>
        <div class="quiz-fin-btns">
          ${!reussi ? `<button class="btn btn-random" data-quiz-retry>🔁 Réessayer</button>` : ''}
          <button class="btn ${reussi?'btn-check':'btn-ghost'}" data-goto="parcours">← Retour au parcours</button>
        </div>
      </div>
    </div>`;
}

/* ---- Pratique : annales « centre étranger – groupe 1 » 2026 ---- */
const PRATIQUE = window.PRATIQUE || [];

function renderPratiqueList(){
  const cards = PRATIQUE.map(ex => {
    const m = M_BY_KEY[ex.matiereKey];
    const themes = ex.themes.map(t=>`<span>${t}</span>`).join('');
    return `<div class="prat-card" style="--c:${m.color}" data-goto="pratique/${ex.id}">
      <div class="tags"><span class="tag matiere" style="--c:${m.color}">${m.emoji} ${ex.matiere}</span>
        <span class="tag niveau">${ex.date}</span></div>
      <h3>${ex.titre}</h3>
      <div class="prat-themes">${themes}</div>
    </div>`;
  }).join('');
  app.innerHTML = `
    <div class="section-title"><h1>📝 Pratique</h1>
      <span class="count">Annales 2026 · Centre étranger — groupe 1</span></div>
    <p class="lead">Les épreuves telles qu’elles sont tombées au Lycée Molière (groupe 1, mi-juin 2026).
      Entraîne-toi sur les <b>thèmes officiels</b> : chaque question a sa <b>correction en vert</b> juste en dessous.
      Le <b>sujet officiel complet</b> (avec le corrigé) est lié dans chaque épreuve.</p>
    <div class="fiche-grid">${cards}</div>`;
}

function renderPratiqueExam(id){
  const ex = PRATIQUE.find(x=>x.id===id);
  if(!ex){ renderPratiqueList(); return; }
  const m = M_BY_KEY[ex.matiereKey];
  let qn = 0;
  const exos = ex.exercices.map(exo => {
    const qs = exo.questions.map(item => {
      qn++;
      return `<div class="prat-q">
        <p class="prat-enonce"><span class="prat-num">${qn}</span> ${item.q}</p>
        <div class="prat-sol"><span class="prat-sol-lbl">✅ Correction</span> ${item.sol}</div>
      </div>`;
    }).join('');
    return `<div class="prat-exo"><h2>${exo.titre}</h2>${qs}</div>`;
  }).join('');
  app.innerHTML = `
    <div class="backlink" data-goto="pratique">← Toutes les épreuves</div>
    <article class="fiche prat" style="--c:${m.color}">
      <div class="fiche-head">
        <div class="tags"><span class="tag matiere" style="--c:${m.color}">${m.emoji} ${ex.matiere}</span>
          <span class="tag niveau">${ex.date} · groupe 1</span></div>
        <h1>${ex.titre} — Brevet 2026</h1>
      </div>
      <div class="fiche-body">
        <p>${ex.intro}</p>
        <p><a class="prat-officiel" href="${ex.officiel}" target="_blank" rel="noopener">📄 Sujet officiel + corrigé complet ↗</a></p>
        <div class="prat-toolbar"><button class="btn btn-ghost" data-toggle-sol>🙈 Masquer les corrections</button></div>
        <div class="prat-exos">${exos}</div>
      </div>
    </article>`;
}

function route(){
  const hash = decodeURIComponent(location.hash.slice(1));
  window.scrollTo(0,0);
  if(hash.startsWith('matiere/')){ const k=hash.split('/')[1]; renderNav(k); renderMatiere(k); }
  else if(hash.startsWith('fiche/')){ renderNav(''); renderFiche(hash.split('/')[1]); }
  else if(hash.startsWith('pratique/')){ renderNav('pratique'); renderPratiqueExam(hash.split('/')[1]); }
  else if(hash==='pratique'){ renderNav('pratique'); renderPratiqueList(); }
  else if(hash.startsWith('parcours/')){
    const [,blocId,leconId] = hash.split('/');
    const bloc = PARCOURS.find(b=>b.id===blocId);
    renderNav('parcours');
    if(bloc && stepUnlocked(`${blocId}/${leconId}`)) startQuiz(bloc, leconId);
    else renderParcours();
  }
  else if(hash==='parcours'){ renderNav('parcours'); renderParcours(); }
  else if(hash==='compte'){ renderNav('compte'); renderCompte(); }
  else if(hash.startsWith('q/')){ renderNav(''); renderRecherche(hash.slice(2)); }
  else { renderNav('accueil'); renderAccueil(); }
}

/* ---------- Événements globaux ---------- */
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const q = $('#searchInput').value.trim();
  if(q) location.hash = 'q/' + encodeURIComponent(q);
});

document.addEventListener('click', e => {
  const lg = e.target.closest('[data-logout]');
  if(lg){ logoutUser(); renderNav('compte'); renderCompte(); return; }

  const uc = e.target.closest('.uchip[data-user]');
  if(uc){
    if(currentUser()) logoutUser();
    renderNav('compte'); renderCompte(null, uc.dataset.user);
    const p = document.getElementById('authPass'); if(p) p.focus();
    return;
  }

  const goto = e.target.closest('[data-goto]');
  if(goto){ location.hash = goto.dataset.goto; return; }

  const card = e.target.closest('[data-fiche]');
  if(card){ location.hash = 'fiche/' + card.dataset.fiche; return; }

  if(e.target.closest('[data-back]')){ history.back(); return; }

  const rnd = e.target.closest('[data-random]');
  if(rnd){
    const f = FICHES[Math.floor(Math.random()*FICHES.length)];
    location.hash = 'fiche/' + f.id; return;
  }

  const kw = e.target.closest('[data-kw]');
  if(kw){ location.hash = 'q/' + encodeURIComponent(kw.dataset.kw); return; }

  const tsol = e.target.closest('[data-toggle-sol]');
  if(tsol){
    const hidden = document.querySelector('.prat-exos')?.classList.toggle('hide-sol');
    tsol.textContent = hidden ? '👁 Afficher les corrections' : '🙈 Masquer les corrections';
    return;
  }

  /* --- Parcours / quiz --- */
  const opt = e.target.closest('[data-quiz-opt]');
  if(opt && !opt.disabled){ validerChoix(parseInt(opt.dataset.quizOpt,10)); return; }
  if(e.target.closest('[data-quiz-valider]')){ validerSaisie(); return; }
  if(e.target.closest('[data-quiz-suivant]')){ quizSuivant(); return; }
  const retry = e.target.closest('[data-quiz-retry]');
  if(retry && quizState){ quizState.idx=0; quizState.bonnes=0; renderQuizQuestion(); return; }

  const check = e.target.closest('[data-check]');
  if(check){
    const nowSeen = toggleSeen(check.dataset.check);
    check.classList.toggle('done', nowSeen);
    check.textContent = nowSeen ? '✓ Fiche révisée' : 'Marquer comme révisée';
    // rafraîchir les pastilles visibles
    document.querySelectorAll(`[data-fiche="${check.dataset.check}"]`)
      .forEach(c => c.classList.toggle('is-seen', nowSeen));
  }
});

window.addEventListener('hashchange', route);
route();
