/* ============================================================
   EXERCICES PRATIQUES du parcours.
   - G : générateurs (nombres aléatoires → exercice nouveau à CHAQUE tentative)
   - B : bancs de questions d'application (situations, drills)
   Clés = id de fiche. Consommé par data/parcours.js.
   ============================================================ */
window.EXOS = (function(){
  const R = (a,b) => a + Math.floor(Math.random()*(b-a+1));      // entier [a,b]
  const pick = arr => arr[Math.floor(Math.random()*arr.length)];
  const pgcd = (a,b) => b ? pgcd(b, a%b) : a;
  function qcm(q, bonne, faux, expl){
    const opts = [bonne].concat(faux);
    return { q, choix: opts, sol: 0, expl };                      // (l'appli mélange les options)
  }
  const G = {}, B = {};

  /* ================= MATHS : générateurs ================= */
  G['maths-pythagore'] = () => {
    const t = pick([[3,4,5],[6,8,10],[5,12,13],[9,12,15],[8,15,17],[12,16,20],[7,24,25]]);
    if(Math.random()<0.5)
      return { q:`ABC est rectangle en A, AB = ${t[0]} cm et AC = ${t[1]} cm. Calcule l’hypoténuse BC (en cm).`,
               saisie:[String(t[2])], expl:`BC² = ${t[0]}² + ${t[1]}² = ${t[0]*t[0]+t[1]*t[1]} → BC = ${t[2]} cm.` };
    return { q:`ABC est rectangle en A, BC = ${t[2]} cm (hypoténuse) et AB = ${t[0]} cm. Calcule AC (en cm).`,
             saisie:[String(t[1])], expl:`AC² = ${t[2]}² − ${t[0]}² = ${t[2]*t[2]-t[0]*t[0]} → AC = ${t[1]} cm.` };
  };
  G['maths-thales'] = () => {
    const ad = R(2,5), k = R(2,3), ae = R(2,6);
    const ab = ad*k, ac = ae*k;
    return { q:`(DE) // (BC), D∈[AB], E∈[AC]. AD = ${ad}, AB = ${ab}, AE = ${ae}. Calcule AC.`,
             saisie:[String(ac)], expl:`AD/AB = AE/AC → ${ad}/${ab} = ${ae}/AC → AC = ${ae}×${ab}÷${ad} = ${ac}.` };
  };
  G['maths-trigonometrie'] = () => {
    const m = pick([
      {a:30, f:'sin', v:0.5}, {a:60, f:'cos', v:0.5}
    ]);
    const hyp = R(4,12)*2;
    const res = hyp*m.v;
    return { q:`Dans un triangle rectangle, l’angle vaut ${m.a}° et l’hypoténuse ${hyp} cm. ` +
               (m.f==='sin' ? `Calcule le côté opposé (sin ${m.a}° = 0,5).` : `Calcule le côté adjacent (cos ${m.a}° = 0,5).`),
             saisie:[String(res)], expl:`${m.f}(${m.a}°) × ${hyp} = 0,5 × ${hyp} = ${res} cm.` };
  };
  G['maths-fractions'] = () => {
    if(Math.random()<0.5){
      const b = pick([2,3,4]), d = pick([3,4,5,6]);
      const a = R(1,b-1), c = R(1,d-1);
      const num = a*d + c*b, den = b*d, g = pgcd(num,den);
      return { q:`Calcule ${a}/${b} + ${c}/${d} (fraction irréductible).`,
               saisie:[`${num/g}/${den/g}`], expl:`${a*d}/${den} + ${c*b}/${den} = ${num}/${den} = ${num/g}/${den/g}.` };
    }
    const a = R(1,5), b = R(2,6), c = R(1,5), d = R(2,6);
    const num = a*d, den = b*c, g = pgcd(num,den);
    return { q:`Calcule ${a}/${b} ÷ ${c}/${d} (fraction irréductible).`,
             saisie:[`${num/g}/${den/g}`], expl:`= ${a}/${b} × ${d}/${c} = ${num}/${den} = ${num/g}/${den/g}.` };
  };
  G['maths-puissances'] = () => {
    if(Math.random()<0.5){
      const a = R(2,6); let b = R(2,5); if(b===a) b++;
      return qcm(`10${expos(a)} × 10${expos(b)} = ?`, `10${expos(a+b)}`,
                 [`10${expos(a*b)}`, `10${expos(Math.abs(a-b))}`, `20${expos(a+b)}`],
                 `On additionne les exposants : ${a}+${b} = ${a+b}.`);
    }
    const d = R(2,9), k = R(3,5);
    const n = d * Math.pow(10,k);
    return qcm(`Écris ${n.toLocaleString('fr-FR')} en notation scientifique.`,
               `${d} × 10${expos(k)}`,
               [`${d} × 10${expos(k+1)}`, `${d*10} × 10${expos(k-1)}`, `0,${d} × 10${expos(k+1)}`],
               `Un seul chiffre avant la virgule : ${d} × 10^${k}.`);
  };
  function expos(n){ const sup={0:'⁰',1:'¹',2:'²',3:'³',4:'⁴',5:'⁵',6:'⁶',7:'⁷',8:'⁸',9:'⁹'}; return String(n).split('').map(c=>sup[c]).join(''); }
  G['maths-equations'] = () => {
    if(Math.random()<0.5){
      const a = R(2,9), x = R(2,12), b = R(1,15);
      return { q:`Résous : ${a}x + ${b} = ${a*x+b}. x = ?`, saisie:[String(x)],
               expl:`${a}x = ${a*x} → x = ${x}.` };
    }
    const x = R(2,9), c = R(1,4), a = c + R(1,5), b = R(1,10), d = b + (a-c)*x;
    return { q:`Résous : ${a}x + ${b} = ${c}x + ${d}. x = ?`, saisie:[String(x)],
             expl:`${a-c}x = ${d-b} → x = ${x}.` };
  };
  G['maths-calcul-litteral'] = () => {
    const m = Math.random();
    if(m<0.34){
      const k = R(2,7), a = R(1,9);
      return qcm(`Développe : ${k}(x + ${a})`, `${k}x + ${k*a}`,
                 [`${k}x + ${a}`, `${k+a}x`, `${k}x − ${k*a}`], `Distributivité : ${k}×x + ${k}×${a}.`);
    }
    if(m<0.67){
      const a = R(1,5), b = a + R(1,4);
      return qcm(`Développe : (x + ${a})(x + ${b})`, `x² + ${a+b}x + ${a*b}`,
                 [`x² + ${a*b}x + ${a+b}`, `x² + ${a+b}x − ${a*b}`, `x² + ${a*b}`],
                 `x² + ${b}x + ${a}x + ${a*b}.`);
    }
    const a = R(2,9);
    return qcm(`Factorise : x² − ${a*a}`, `(x − ${a})(x + ${a})`,
               [`(x − ${a})²`, `(x + ${a})²`, `x(x − ${a*a})`], `a² − b² = (a−b)(a+b) avec b = ${a}.`);
  };
  G['maths-systemes'] = () => {
    const x = R(2,9), y = R(1,x-1);
    return { q:`Résous le système : x + y = ${x+y} et x − y = ${x-y}. Donne x.`,
             saisie:[String(x)], expl:`En additionnant : 2x = ${2*x} → x = ${x} (et y = ${y}).` };
  };
  G['maths-fonctions'] = () => {
    const a = R(2,6), b = R(1,9), x = R(2,8);
    if(Math.random()<0.5)
      return { q:`f(x) = ${a}x + ${b}. Calcule l’image de ${x}.`, saisie:[String(a*x+b)],
               expl:`f(${x}) = ${a}×${x}+${b} = ${a*x+b}.` };
    return { q:`f(x) = ${a}x + ${b}. Trouve l’antécédent de ${a*x+b}.`, saisie:[String(x)],
             expl:`${a}x+${b} = ${a*x+b} → x = ${x}.` };
  };
  G['maths-fonctions-affines'] = () => {
    const a = R(2,6), b = R(1,8), x1 = R(1,4), dx = R(1,4);
    const y1 = a*x1+b, y2 = a*(x1+dx)+b;
    return { q:`Une droite passe par A(${x1} ; ${y1}) et B(${x1+dx} ; ${y2}). Calcule son coefficient directeur.`,
             saisie:[String(a)], expl:`a = (${y2}−${y1})/(${x1+dx}−${x1}) = ${y2-y1}/${dx} = ${a}.` };
  };
  G['maths-proportionnalite'] = () => {
    if(Math.random()<0.5){
      const p = R(2,9)*10, t = pick([10,20,25,50]);
      const res = p*(100-t)/100;
      return { q:`Un article coûte ${p} €. Il est soldé à −${t} %. Prix final (en €) ?`,
               saisie:[String(res)], expl:`${p} × ${(100-t)/100} = ${res} €.` };
    }
    const k = R(2,6), q1 = R(2,5), q2 = q1 + R(1,4);
    return { q:`${q1} kg de pommes coûtent ${q1*k} €. Combien coûtent ${q2} kg ?`,
             saisie:[String(q2*k)], expl:`Produit en croix : ${q1*k}×${q2}÷${q1} = ${q2*k} €.` };
  };
  G['maths-statistiques'] = () => {
    const base = R(3,10), vals = [base, base+2, base+4, base+6, base+8];
    if(Math.random()<0.5)
      return { q:`Série : ${vals.join(' ; ')}. Calcule la moyenne.`, saisie:[String(base+4)],
               expl:`Somme = ${vals.reduce((a,b)=>a+b,0)} ÷ 5 = ${base+4}.` };
    return { q:`Série : ${vals.join(' ; ')}. Calcule l’étendue.`, saisie:[String(8)],
             expl:`${base+8} − ${base} = 8.` };
  };
  G['maths-probabilites'] = () => {
    const r = R(1,4), v = R(2,5);
    const g = pgcd(r, r+v);
    return { q:`Un sac contient ${r} boule${r>1?'s':''} rouge${r>1?'s':''} et ${v} vertes. P(tirer une rouge) ? (fraction irréductible)`,
             saisie:[`${r/g}/${(r+v)/g}`], expl:`${r} cas favorables sur ${r+v} → ${r/g}/${(r+v)/g}.` };
  };
  G['maths-volumes'] = () => {
    if(Math.random()<0.5){
      const L = R(3,8), l = R(2,6), h = R(2,5);
      return { q:`Volume d’un pavé droit de ${L} × ${l} × ${h} cm (en cm³) ?`,
               saisie:[String(L*l*h)], expl:`V = ${L}×${l}×${h} = ${L*l*h} cm³.` };
    }
    const k = pick([2,3]);
    return { q:`On multiplie toutes les dimensions d’un solide par ${k}. Le volume est multiplié par… ?`,
             saisie:[String(k*k*k)], expl:`Volumes ×k³ = ${k}³ = ${k*k*k}.` };
  };
  G['maths-grandeurs-composees'] = () => {
    const t = R(2,4), v = pick([60,75,80,90,100]);
    if(Math.random()<0.5)
      return { q:`Une voiture parcourt ${v*t} km en ${t} h. Calcule sa vitesse (km/h).`,
               saisie:[String(v)], expl:`v = ${v*t} ÷ ${t} = ${v} km/h.` };
    const ms = pick([10,15,20,25]);
    return { q:`Convertis ${ms} m/s en km/h.`, saisie:[String(ms*3.6).replace('.',','), String(ms*3.6)],
             expl:`${ms} × 3,6 = ${ms*3.6} km/h.` };
  };
  G['maths-arithmetique'] = () => {
    const g = pick([6,8,12,15]), m1 = R(2,5), m2 = m1 + R(1,3);
    const a = g*m1, b = g*m2, vrai = pgcd(a,b);
    if(Math.random()<0.5)
      return { q:`Calcule PGCD(${a} ; ${b}).`, saisie:[String(vrai)],
               expl:`Diviseurs communs → PGCD = ${vrai}.` };
    return { q:`Rends la fraction ${a}/${b} irréductible.`, saisie:[`${a/vrai}/${b/vrai}`],
             expl:`On divise par PGCD = ${vrai} → ${a/vrai}/${b/vrai}.` };
  };
  G['maths-relatifs'] = () => {
    const a = R(2,9), b = R(2,9);
    const m = Math.random();
    if(m<0.33) return { q:`Calcule : (−${a}) + ${a+b}`, saisie:[String(b)], expl:`= ${a+b} − ${a} = ${b}.` };
    if(m<0.66) return { q:`Calcule : ${a} − (−${b})`, saisie:[String(a+b)], expl:`= ${a} + ${b} = ${a+b}.` };
    return { q:`Calcule : (−${a}) × (−${b})`, saisie:[String(a*b), '+'+String(a*b)], expl:`Moins par moins = plus : ${a*b}.` };
  };
  G['maths-priorites'] = () => {
    const a = R(2,9), b = R(2,6), c = R(2,5);
    if(Math.random()<0.5)
      return { q:`Calcule : ${a} + ${b} × ${c}`, saisie:[String(a+b*c)], expl:`× d’abord : ${a} + ${b*c} = ${a+b*c}.` };
    return { q:`Calcule : (${a} + ${b}) × ${c}`, saisie:[String((a+b)*c)], expl:`Parenthèses d’abord : ${a+b} × ${c} = ${(a+b)*c}.` };
  };
  G['maths-racine-carree'] = () => {
    const n = R(4,12);
    if(Math.random()<0.5) return { q:`Calcule √${n*n}.`, saisie:[String(n)], expl:`${n}² = ${n*n}.` };
    let k = pick([2,3,5]); if(k===n) k = 2 + (n===2?1:0);
    return qcm(`Simplifie √${n*n*k}.`, `${n}√${k}`, [`${k}√${n}`, `√${n*k}`, `${n*k}`],
               `√(${n*n}×${k}) = ${n}√${k}.`);
  };
  G['maths-angles-triangles'] = () => {
    if(Math.random()<0.5){
      const a = R(30,80), b = R(30,80);
      return { q:`Un triangle a deux angles de ${a}° et ${b}°. Calcule le troisième (en degrés).`,
               saisie:[String(180-a-b)], expl:`180 − ${a} − ${b} = ${180-a-b}°.` };
    }
    const s = pick([20,30,40,50,60,80]);
    return { q:`Triangle isocèle : l’angle au sommet vaut ${s}°. Calcule chaque angle à la base.`,
             saisie:[String((180-s)/2)], expl:`(180 − ${s}) ÷ 2 = ${(180-s)/2}°.` };
  };
  G['maths-angles-cercle'] = () => {
    const a = pick([30,40,50,60,70,80])
    if(Math.random()<0.5)
      return { q:`Un angle au centre vaut ${2*a}°. Que vaut l’angle inscrit qui intercepte le même arc ?`,
               saisie:[String(a)], expl:`Inscrit = centre ÷ 2 = ${a}°.` };
    const n = pick([5,6,8,9,10,12]);
    return { q:`Polygone régulier à ${n} côtés : angle au centre entre deux sommets ?`,
             saisie:[String(360/n)], expl:`360 ÷ ${n} = ${360/n}°.` };
  };
  G['maths-perimetres-aires'] = () => {
    const m = Math.random();
    if(m<0.34){ const L=R(4,12), l=R(2,8);
      return { q:`Aire d’un rectangle de ${L} cm sur ${l} cm (en cm²) ?`, saisie:[String(L*l)], expl:`${L}×${l} = ${L*l} cm².` }; }
    if(m<0.67){ const b=R(4,12), h=R(2,8)*2;
      return { q:`Aire d’un triangle de base ${b} cm et hauteur ${h} cm (en cm²) ?`, saisie:[String(b*h/2)], expl:`(${b}×${h})÷2 = ${b*h/2} cm².` }; }
    const L=R(4,10), l=R(2,6);
    return { q:`Périmètre d’un rectangle de ${L} cm sur ${l} cm ?`, saisie:[String(2*(L+l))], expl:`2×(${L}+${l}) = ${2*(L+l)} cm.` };
  };
  G['maths-reperage'] = () => {
    const x = R(-5,5); let y = R(-5,5); while(y===x || y===-x) y = R(-5,5);
    return qcm(`Pour placer le point A(${x} ; ${y}), on part de l’origine et on va…`,
      `${Math.abs(x)} vers la ${x>=0?'droite':'gauche'}, puis ${Math.abs(y)} vers le ${y>=0?'haut':'bas'}`,
      [`${Math.abs(y)} vers la ${y>=0?'droite':'gauche'}, puis ${Math.abs(x)} vers le ${x>=0?'haut':'bas'}`,
       `${Math.abs(x)} vers la ${x>=0?'gauche':'droite'}, puis ${Math.abs(y)} vers le ${y>=0?'bas':'haut'}`,
       `${Math.abs(x)} vers le haut, puis ${Math.abs(y)} vers la droite`],
      `(abscisse ; ordonnée) : d’abord horizontal, puis vertical.`);
  };

  /* ================= PHYSIQUE : générateurs ================= */
  G['pc-forces'] = () => {
    const m = R(2,15);
    if(Math.random()<0.5)
      return { q:`Sur Terre (g = 10 N/kg), calcule le poids d’un objet de ${m} kg (en N).`,
               saisie:[String(m*10)], expl:`P = m × g = ${m} × 10 = ${m*10} N.` };
    return { q:`Sur Terre (g = 10 N/kg), un objet pèse ${m*10} N. Quelle est sa masse (en kg) ?`,
             saisie:[String(m)], expl:`m = P ÷ g = ${m*10} ÷ 10 = ${m} kg.` };
  };
  G['pc-electricite'] = () => {
    const rr = pick([5,10,20,25,50]), i = pick([0.2,0.5,1,2]);
    const u = rr*i;
    if(Math.random()<0.5)
      return { q:`Une résistance R = ${rr} Ω est traversée par I = ${String(i).replace('.',',')} A. Calcule U (en V).`,
               saisie:[String(u), String(u).replace('.',',')], expl:`U = R×I = ${rr}×${i} = ${u} V.` };
    return { q:`U = ${u} V aux bornes d’une résistance R = ${rr} Ω. Calcule I (en A).`,
             saisie:[String(i), String(i).replace('.',',')], expl:`I = U÷R = ${u}÷${rr} = ${i} A.` };
  };
  G['pc-energie-electrique'] = () => {
    const p = pick([1,2,3]), t = R(2,6);
    return { q:`Un radiateur de ${p} kW fonctionne ${t} h. Énergie consommée (en kWh) ?`,
             saisie:[String(p*t)], expl:`E = P×t = ${p}×${t} = ${p*t} kWh.` };
  };
  G['pc-mouvement'] = () => {
    const t = R(2,5), v = pick([15,20,60,80,90]);
    return { q:`Un véhicule parcourt ${v*t} km en ${t} h. Calcule sa vitesse (km/h).`,
             saisie:[String(v)], expl:`v = d÷t = ${v*t}÷${t} = ${v} km/h.` };
  };
  G['pc-masse-volumique'] = () => {
    const V = pick([50,100,200,250]), rho = pick([0.5,0.8,1.2,2]);
    const m = V*rho;
    if(Math.random()<0.5)
      return { q:`Un objet a une masse de ${m} g pour un volume de ${V} cm³. Calcule sa masse volumique (g/cm³).`,
               saisie:[String(rho), String(rho).replace('.',',')], expl:`ρ = m÷V = ${m}÷${V} = ${rho} g/cm³.` };
    return qcm(`ρ(objet) = ${String(rho).replace('.',',')} g/cm³. Dans l’eau (1 g/cm³), il…`,
               rho<1 ? 'flotte' : 'coule', [rho<1?'coule':'flotte','reste entre deux eaux','se dissout'],
               `ρ ${rho<1?'<':'>'} 1 g/cm³ → il ${rho<1?'flotte':'coule'}.`);
  };
  G['pc-energie'] = () => {
    const m = pick([0.02,0.1,0.5,1,2]), v = pick([10,20,30]);
    const ec = 0.5*m*v*v;
    return { q:`Calcule l’énergie cinétique d’un objet de ${String(m).replace('.',',')} kg à ${v} m/s (Ec = ½ × m × v², en J).`,
             saisie:[String(ec), String(ec).replace('.',',')], expl:`Ec = 0,5 × ${m} × ${v}² = ${ec} J.` };
  };

  /* ================= FRANÇAIS : drills d'application ================= */
  B['fr-conjugaison'] = [
    { q:'« Hier, il ___ (chanter, passé simple) toute la soirée. »', saisie:['chanta'], expl:'Passé simple, 3ᵉ pers. : il chanta.' },
    { q:'« Quand j’étais petit, je ___ (jouer, imparfait) au parc. »', saisie:['jouais'], expl:'Imparfait : je jouais.' },
    { q:'« Soudain, elle ___ (voir, passé simple) une ombre. »', saisie:['vit'], expl:'Passé simple : elle vit.' },
    { q:'« Demain, nous ___ (finir, futur) le projet. »', saisie:['finirons'], expl:'Futur : nous finirons.' },
    { q:'« Il faisait beau et les oiseaux ___ (chanter, imparfait). »', saisie:['chantaient'], expl:'Imparfait, pluriel : chantaient.' },
    { q:'« Ils ___ (prendre, passé simple) la fuite aussitôt. »', saisie:['prirent'], expl:'Passé simple : ils prirent.' },
    { q:'« Avant ton arrivée, il ___ déjà ___ (fermer, plus-que-parfait) la porte. » (2 mots)', saisie:['avait ferme','avait fermé'], expl:'Plus-que-parfait : avait fermé.' },
    { q:'« Vous ___ (être, imparfait) en retard chaque matin. »', saisie:['etiez','étiez'], expl:'Imparfait : vous étiez.' }
  ];
  B['fr-accords'] = [
    { q:'« Il ___ mangé une pomme. » (a / à)', choix:['a','à'], sol:0, expl:'On peut dire « avait mangé » → a.' },
    { q:'« Elle va ___ l’école. » (a / à)', choix:['à','a'], sol:0, expl:'« avait l’école » impossible → à.' },
    { q:'« Les fleurs que j’ai ___ » (cueillir)', choix:['cueillies','cueilli','cueillis','cueillie'], sol:0, expl:'COD « que » (les fleurs) avant le verbe → accord féminin pluriel.' },
    { q:'« Elles sont ___ hier soir. » (partir)', saisie:['parties'], expl:'Avec être → accord avec le sujet : parties.' },
    { q:'« ___ chaussures sont neuves. » (ces / ses)', choix:['Ces','Ses'], sol:0, expl:'On montre → ces (démonstratif). « Ses » = possession.' },
    { q:'« Ils ___ contents. » (son / sont)', choix:['sont','son'], sol:0, expl:'« étaient contents » → sont (verbe être).' },
    { q:'« J’ai ___ des lettres toute la journée. » (écrire)', saisie:['ecrit','écrit'], expl:'COD après le verbe → pas d’accord : écrit.' },
    { q:'« ___ vas-tu ce soir ? » (ou / où)', choix:['Où','Ou'], sol:0, expl:'Lieu → où (avec accent).' }
  ];
  B['fr-figures-style'] = [
    { q:'« La neige étend son manteau blanc. » Quelle figure ?', choix:['métaphore','comparaison','hyperbole','antithèse'], sol:0, expl:'Image sans outil de comparaison → métaphore.' },
    { q:'« Il est rusé comme un renard. » Quelle figure ?', choix:['comparaison','métaphore','personnification','gradation'], sol:0, expl:'Outil « comme » → comparaison.' },
    { q:'« Je meurs de faim ! » Quelle figure ?', choix:['hyperbole','litote','métaphore','antithèse'], sol:0, expl:'Exagération → hyperbole.' },
    { q:'« Le soleil souriait aux promeneurs. » Quelle figure ?', choix:['personnification','comparaison','hyperbole','énumération'], sol:0, expl:'Trait humain donné au soleil.' },
    { q:'« Cette obscure clarté qui tombe des étoiles. » Quelle figure ?', choix:['antithèse','comparaison','personnification','hyperbole'], sol:0, expl:'« obscure » ⟷ « clarté » : opposition.' },
    { q:'« Va, cours, vole et nous venge ! » Quelle figure ?', choix:['gradation','antithèse','métaphore','litote'], sol:0, expl:'Intensité croissante → gradation.' }
  ];
  B['fr-fonctions'] = [
    { q:'« Le chat dort sur le canapé. » Fonction de « sur le canapé » ?', choix:['CC de lieu','COD','COI','sujet'], sol:0, expl:'Déplaçable/supprimable, indique le lieu.' },
    { q:'« Marie écrit une lettre. » Fonction de « une lettre » ?', choix:['COD','COI','attribut','CC de manière'], sol:0, expl:'« écrit quoi ? » sans préposition → COD.' },
    { q:'« Il parle à son voisin. » Fonction de « à son voisin » ?', choix:['COI','COD','CC de lieu','sujet'], sol:0, expl:'« parle à qui ? » → COI.' },
    { q:'« Ce gâteau semble délicieux. » Fonction de « délicieux » ?', choix:['attribut du sujet','épithète','COD','CC'], sol:0, expl:'Après un verbe d’état (sembler).' },
    { q:'« Le soir, Paul lit. » Fonction de « Le soir » ?', choix:['CC de temps','sujet','COD','attribut'], sol:0, expl:'Indique quand, déplaçable.' }
  ];
  B['fr-phrase-complexe'] = [
    { q:'« Je pense que tu réussiras. » La subordonnée est…', choix:['conjonctive','relative','interrogative','principale'], sol:0, expl:'Introduite par « que » après un verbe → conjonctive.' },
    { q:'« Le film que j’ai vu était long. » La subordonnée est…', choix:['relative','conjonctive','circonstancielle','indépendante'], sol:0, expl:'« que » complète le nom « film » → relative.' },
    { q:'Combien de propositions dans : « Il pleut, je reste, nous lisons » ?', saisie:['3','trois'], expl:'3 verbes conjugués = 3 propositions (juxtaposées).' },
    { q:'« Il travaille dur, donc il réussit. » Les propositions sont…', choix:['coordonnées','juxtaposées','subordonnées','enchâssées'], sol:0, expl:'« donc » = conjonction de coordination.' },
    { q:'« Quand il pleut, je lis. » La subordonnée exprime…', choix:['le temps','la cause','le but','la conséquence'], sol:0, expl:'« Quand » → circonstancielle de temps.' }
  ];
  B['fr-voix-passive'] = [
    { q:'Mets au passif : « Le chat mange la souris. »', choix:['La souris est mangée par le chat.','La souris mange le chat.','Le chat est mangé par la souris.','La souris a mangé le chat.'], sol:0, expl:'COD → sujet ; être + participe accordé.' },
    { q:'« La maison a été construite par des ouvriers. » Le complément d’agent est…', choix:['par des ouvriers','la maison','a été construite','construite'], sol:0, expl:'Introduit par « par ».' },
    { q:'Mets au passif : « Le jury récompensera l’élève. »', choix:['L’élève sera récompensé par le jury.','L’élève est récompensé par le jury.','Le jury sera récompensé.','L’élève récompensera le jury.'], sol:0, expl:'On garde le temps (futur) : sera récompensé.' },
    { q:'Quelle phrase est à la voix passive ?', choix:['Le gâteau a été partagé par les enfants.','Les enfants partagent le gâteau.','Les enfants ont partagé le gâteau.','Le gâteau plaît aux enfants.'], sol:0, expl:'Être + participe passé + agent.' }
  ];
  B['fr-types-phrases'] = [
    { q:'« Comme ce paysage est beau ! » Type de phrase ?', choix:['exclamative','interrogative','déclarative','injonctive'], sol:0, expl:'Émotion + « ! ».' },
    { q:'« Range ta chambre. » Type de phrase ?', choix:['injonctive','déclarative','interrogative','exclamative'], sol:0, expl:'Ordre → injonctive.' },
    { q:'Mets à la forme négative : « Il mange toujours ici. »', choix:['Il ne mange jamais ici.','Il mange jamais ici.','Il ne mange toujours ici.','Il mange pas ici.'], sol:0, expl:'toujours → ne… jamais (2 mots).' },
    { q:'« Est-ce que tu viens ? » Type ?', choix:['interrogative','injonctive','exclamative','négative'], sol:0, expl:'Question → interrogative.' }
  ];
  B['fr-groupe-nominal'] = [
    { q:'« Une maison de pierre » : « de pierre » est…', choix:['un complément du nom','une épithète','une relative','un COD'], sol:0, expl:'Préposition + nom → complément du nom.' },
    { q:'« Un élève sérieux » : « sérieux » est…', choix:['une épithète','un attribut','un complément du nom','un adverbe'], sol:0, expl:'Adjectif directement lié au nom.' },
    { q:'« Le livre dont je t’ai parlé » : la subordonnée est introduite par…', choix:['dont','que','qui','où'], sol:0, expl:'Pronom relatif « dont ».' },
    { q:'Enrichis « un chien » avec une relative :', choix:['un chien qui aboie','un chien noir','un chien de chasse','un gros chien'], sol:0, expl:'Relative = qui/que/dont/où + verbe.' }
  ];
  B['fr-lexique'] = [
    { q:'« Il a un cœur de pierre. » Sens…', choix:['figuré','propre'], sol:0, expl:'Image : il est insensible.' },
    { q:'Dans « relire », « re- » signifie…', choix:['à nouveau','avant','contre','à moitié'], sol:0, expl:'Préfixe de répétition.' },
    { q:'« peur, effroi, trembler, hurler » forment un champ lexical de…', choix:['la peur','la joie','la nature','la guerre'], sol:0, expl:'Tous liés à la peur.' },
    { q:'Un antonyme de « généreux » :', choix:['avare','gentil','riche','poli'], sol:0, expl:'Sens contraire.' },
    { q:'Dans « impossible », « im- » exprime…', choix:['la négation','la répétition','l’intensité','le lieu'], sol:0, expl:'Préfixe négatif.' }
  ];
  B['fr-modes'] = [
    { q:'« Si j’étais riche, je ___ (voyager). »', saisie:['voyagerais'], expl:'Hypothèse → conditionnel : voyagerais.' },
    { q:'« Il faut que tu ___ (faire) tes devoirs. »', saisie:['fasses'], expl:'« il faut que » → subjonctif : fasses.' },
    { q:'« ___ (finir, impératif, 2ᵉ pers. sing.) ton assiette ! »', saisie:['finis'], expl:'Impératif : Finis !' },
    { q:'« Je voudrais un renseignement. » Le conditionnel exprime ici…', choix:['la politesse','un ordre','une certitude','un regret'], sol:0, expl:'Demande polie.' },
    { q:'« Pourvu qu’il ___ (venir) ! »', saisie:['vienne'], expl:'Souhait → subjonctif : vienne.' }
  ];
  B['fr-discours-rapporte'] = [
    { q:'Mets au discours indirect : Il dit : « Je suis fatigué. »', choix:['Il dit qu’il est fatigué.','Il dit que je suis fatigué.','Il dit : il est fatigué.','Il dit être je fatigué.'], sol:0, expl:'je → il ; « que » introduit la subordonnée.' },
    { q:'Mets au discours indirect : Elle a dit : « Je partirai demain. »', choix:['Elle a dit qu’elle partirait le lendemain.','Elle a dit qu’elle partira demain.','Elle a dit : elle partira demain.','Elle a dit que je partirai demain.'], sol:0, expl:'futur→conditionnel ; demain→le lendemain.' },
    { q:'Quel indice signale un discours direct ?', choix:['les guillemets','la conjonction « que »','l’imparfait','le pronom « il »'], sol:0, expl:'Guillemets/tirets + verbe de parole.' }
  ];
  B['fr-point-de-vue'] = [
    { q:'« Marie sentit son cœur battre : que faire ? » Point de vue…', choix:['interne','externe','omniscient','neutre'], sol:0, expl:'On lit ses sensations et pensées.' },
    { q:'« L’homme entra. Nul ne savait d’où il venait. » Point de vue…', choix:['externe','interne','omniscient','lyrique'], sol:0, expl:'Vue de l’extérieur, sans accès aux pensées.' },
    { q:'« Paul ignorait que Léa, à l’autre bout de la ville, pensait à lui. » Point de vue…', choix:['omniscient','interne','externe','direct'], sol:0, expl:'Le narrateur sait tout de tous.' }
  ];
  B['fr-registres'] = [
    { q:'Un texte plein de jeux de mots qui fait rire relève du registre…', choix:['comique','tragique','lyrique','épique'], sol:0, expl:'But : faire rire.' },
    { q:'« Ô ma douleur, mon amour perdu… » Registre…', choix:['lyrique','comique','épique','fantastique'], sol:0, expl:'Sentiments personnels exprimés.' },
    { q:'Un héros surhumain fendant des armées entières : registre…', choix:['épique','pathétique','comique','réaliste'], sol:0, expl:'Exagération glorifiante.' },
    { q:'La mort inévitable d’un personnage marqué par le destin : registre…', choix:['tragique','comique','lyrique','satirique'], sol:0, expl:'Fatalité → tragique.' }
  ];
  B['fr-argumentation'] = [
    { q:'« Le sport est bon pour la santé. » C’est…', choix:['une thèse','un exemple','un connecteur','une objection'], sol:0, expl:'L’opinion défendue.' },
    { q:'« Par exemple, courir 30 min améliore le cœur. » C’est…', choix:['un exemple','une thèse','un argument','une conclusion'], sol:0, expl:'Cas concret illustrant l’argument.' },
    { q:'Quel connecteur introduit une opposition ?', choix:['cependant','de plus','ainsi','ensuite'], sol:0, expl:'Cependant = opposition/concession.' },
    { q:'Faire pleurer le lecteur pour le rallier, c’est…', choix:['persuader','convaincre','démontrer','réfuter'], sol:0, expl:'Appel aux émotions → persuader.' }
  ];
  B['fr-redaction'] = [
    { q:'Au brouillon, la première étape est…', choix:['analyser le sujet et ses consignes','écrire la conclusion','compter les lignes','recopier le texte'], sol:0, expl:'Comprendre ce qui est demandé avant tout.' },
    { q:'Un paragraphe argumentatif idéal contient…', choix:['1 argument + 1 exemple','3 thèses','uniquement des exemples','une question'], sol:0, expl:'Argument illustré, relié par un connecteur.' },
    { q:'Les 10 dernières minutes servent à…', choix:['relire orthographe et accords','ajouter des lignes','recopier au propre la question','dessiner'], sol:0, expl:'La relecture rapporte des points (nouveau barème).' }
  ];
  B['fr-schema-narratif'] = [
    { q:'« Un matin, un dragon surgit au village. » Quelle étape ?', choix:['élément perturbateur','situation initiale','dénouement','situation finale'], sol:0, expl:'L’événement déclencheur.' },
    { q:'« Depuis, le royaume vit en paix. » Quelle étape ?', choix:['situation finale','péripétie','élément perturbateur','dilemme'], sol:0, expl:'Nouvel équilibre → situation finale.' },
    { q:'Les combats et rebondissements successifs sont…', choix:['les péripéties','le dénouement','la situation initiale','le prologue'], sol:0, expl:'Actions du milieu du récit.' }
  ];
  B['fr-poesie'] = [
    { q:'Un vers de 8 syllabes est un…', choix:['octosyllabe','alexandrin','décasyllabe','tercet'], sol:0, expl:'8 = octosyllabe.' },
    { q:'Rimes disposées en ABAB :', choix:['croisées','plates','embrassées','libres'], sol:0, expl:'ABAB = croisées.' },
    { q:'Un sonnet compte…', choix:['14 vers','12 vers','16 vers','10 vers'], sol:0, expl:'2 quatrains + 2 tercets.' },
    { q:'Rimes en AABB :', choix:['plates','croisées','embrassées','riches'], sol:0, expl:'AABB = plates (suivies).' }
  ];
  B['fr-theatre'] = [
    { q:'« (Il sort en claquant la porte.) » C’est…', choix:['une didascalie','une réplique','une tirade','un aparté'], sol:0, expl:'Indication scénique hors dialogue.' },
    { q:'Un personnage seul en scène qui se parle :', choix:['monologue','dialogue','aparté','tirade'], sol:0, expl:'Monologue.' },
    { q:'Une remarque que seul le public entend :', choix:['un aparté','une didascalie','une scène','un acte'], sol:0, expl:'Aparté.' }
  ];
  B['fr-realisme'] = [
    { q:'Décrire précisément un intérieur pauvre pour montrer la misère, c’est typique du…', choix:['réalisme','fantastique','merveilleux','lyrisme'], sol:0, expl:'Peindre la société telle qu’elle est.' },
    { q:'Zola observant les mineurs comme un « scientifique » relève du…', choix:['naturalisme','romantisme','classicisme','surréalisme'], sol:0, expl:'Prolongement scientifique du réalisme.' },
    { q:'Dans une description réaliste, les objets servent à…', choix:['révéler le milieu social','faire rêver','créer du suspense','rimer'], sol:0, expl:'Les détails ont un sens social.' }
  ];
  B['fr-autobiographie'] = [
    { q:'« Je me souviens de mon premier jour d’école… » indique…', choix:['une autobiographie','une biographie','un conte','une fable'], sol:0, expl:'« Je » + souvenir personnel.' },
    { q:'Dans l’autobiographie, auteur = narrateur = …', saisie:['personnage','personnage principal'], expl:'Pacte autobiographique.' },
    { q:'Un livre sur la vie de Napoléon écrit par un historien est…', choix:['une biographie','une autobiographie','des mémoires','un journal intime'], sol:0, expl:'La vie d’un AUTRE → biographie.' }
  ];
  B['fr-classes-grammaticales'] = [
    { q:'« Nous mangeons lentement. » Nature de « lentement » ?', choix:['adverbe','adjectif','verbe','nom'], sol:0, expl:'Invariable, en -ment.' },
    { q:'« Cette idée me plaît. » Nature de « Cette » ?', choix:['déterminant','pronom','adjectif','adverbe'], sol:0, expl:'Déterminant démonstratif.' },
    { q:'« Ils partent avec nous. » Nature de « avec » ?', choix:['préposition','conjonction','adverbe','pronom'], sol:0, expl:'Introduit un complément.' },
    { q:'« Marcher est bon pour la santé. » Nature de « Marcher » ?', choix:['verbe (infinitif)','nom','adjectif','adverbe'], sol:0, expl:'Verbe à l’infinitif (ici sujet).' }
  ];

  return { G, B };
})();
