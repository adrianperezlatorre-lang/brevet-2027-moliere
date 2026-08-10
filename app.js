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

/* ---------- Progression (localStorage) ---------- */
const STORE = 'brevet_moliere_vues';
function getSeen(){
  try{ return new Set(JSON.parse(localStorage.getItem(STORE) || '[]')); }
  catch{ return new Set(); }
}
function setSeen(set){ localStorage.setItem(STORE, JSON.stringify([...set])); }
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

/* ---- Vidéos de révision (recherche YouTube ciblée par matière/chaîne) ---- */
const VIDEO_CHAINE = {
  svt:'Mme SVT',           // chaîne de révision SVT collège
  maths:'maths',
  francais:'français brevet',
  histoire:'histoire brevet',
  geographie:'géographie brevet',
  emc:'EMC brevet',
  physique:'physique chimie brevet',
  techno:'technologie brevet'
};
function videoBlock(f){
  // recherche YouTube préremplie : toujours valide, jamais de lien mort
  const chaine = VIDEO_CHAINE[f.matiereKey] || 'brevet';
  const requete = `${chaine} ${f.titre} ${f.niveau}`;
  const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(requete);
  const label = f.matiereKey==='svt' ? 'Voir les vidéos (Mme SVT) ↗' : 'Voir des vidéos de révision ↗';
  return `<div class="block"><h2>📺 Vidéos de révision</h2>
    <a class="btn-video" href="${url}" target="_blank" rel="noopener">▶ ${label}</a>
    <p class="video-note">Ouvre une sélection de vidéos YouTube sur ce thème${f.matiereKey==='svt'?' (chaîne Mme SVT)':''}.</p>
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
  $('#subjectnav').innerHTML =
    `<a href="#accueil" class="${active==='accueil'?'active':''}">🏠 Accueil</a>` +
    `<a href="#pratique" class="navpratique ${active==='pratique'?'active':''}">📝 Pratique</a>` +
    MATIERES.map(m =>
      `<a href="#matiere/${m.key}" class="${active===m.key?'active':''}">${m.emoji} ${m.nom}</a>`
    ).join('');
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
