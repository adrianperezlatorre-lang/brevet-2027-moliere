/* Parcours façon Duolingo : blocs ordonnés du plus facile au plus difficile.
   Chaque leçon = questions flash (QCM: choix+sol index ; ou saisie: réponses acceptées).
   Fin de bloc = un examen plus gros qui mélange les matières du bloc. */
window.PARCOURS = [

/* ===================== BLOC 1 — Échauffement (facile) ===================== */
{
  id:'bloc1', titre:'Bloc 1 — Échauffement', sousTitre:'Les bases · 5ᵉ-4ᵉ',
  lecons:[
    { id:'l1', titre:'Calcul & fractions', matiereKey:'maths', questions:[
      { q:'Combien font 2/3 + 1/3 ?', choix:['1','2/6','3/6','5/3'], sol:0, expl:'2/3 + 1/3 = 3/3 = 1.' },
      { q:'7 × 8 = ?', saisie:['56'], expl:'7 × 8 = 56.' },
      { q:'Simplifie la fraction 6/9.', choix:['2/3','3/6','1/2','6/9'], sol:0, expl:'On divise par 3 : 6/9 = 2/3.' },
      { q:'Calcule : 3 + 4 × 2', choix:['14','11','10','24'], sol:1, expl:'× avant + : 3 + 8 = 11.' },
      { q:'Quelle est la moitié de 50 ?', saisie:['25'], expl:'50 ÷ 2 = 25.' },
      { q:'Calcule : −3 + 8', choix:['5','−5','11','−11'], sol:0, expl:'Signes différents : 8 − 3 = 5, signe du plus grand (+).' }
    ]},
    { id:'l2', titre:'La nature des mots', matiereKey:'francais', questions:[
      { q:'Dans « le chat noir », quelle est la nature de « noir » ?', choix:['nom','adjectif','verbe','adverbe'], sol:1, expl:'« noir » qualifie le nom : c’est un adjectif.' },
      { q:'« rapidement » est un…', choix:['adjectif','adverbe','nom','pronom'], sol:1, expl:'Les mots en -ment sont souvent des adverbes.' },
      { q:'« le », « la », « un » sont des…', choix:['pronoms','déterminants','conjonctions','prépositions'], sol:1, expl:'Ils accompagnent le nom : ce sont des déterminants.' },
      { q:'Quel est le verbe dans « Elle mange une pomme » ?', saisie:['mange'], expl:'Le verbe conjugué est « mange ».' },
      { q:'« et », « mais », « ou » sont des conjonctions de…', choix:['subordination','coordination'], sol:1, expl:'Mais, ou, et, donc, or, ni, car = coordination.' }
    ]},
    { id:'l3', titre:'Le vivant', matiereKey:'svt', questions:[
      { q:'Quelle est l’unité de base de tous les êtres vivants ?', choix:['l’atome','la cellule','la molécule','l’organe'], sol:1, expl:'Tous les êtres vivants sont faits de cellules.' },
      { q:'Où se trouve l’information génétique dans la cellule ?', choix:['la membrane','le cytoplasme','le noyau','la paroi'], sol:2, expl:'Elle est dans le noyau, portée par les chromosomes.' },
      { q:'Les plantes vertes fabriquent leur matière grâce à la…', choix:['respiration','photosynthèse','digestion','fermentation'], sol:1, expl:'La photosynthèse utilise lumière, eau et CO₂.' },
      { q:'Combien de chromosomes possède l’espèce humaine ?', choix:['23','46','48','44'], sol:1, expl:'46 chromosomes, soit 23 paires.' },
      { q:'Une chaîne alimentaire commence toujours par…', choix:['un animal','un végétal','un prédateur','un décomposeur'], sol:1, expl:'Les végétaux (producteurs) sont à la base.' }
    ]}
  ],
  examen:{ titre:'Examen — Bloc 1', questions:[
    { q:'2/3 + 1/3 = ?', choix:['1','2/6','5/3','3/6'], sol:0 },
    { q:'Simplifie 6/9.', choix:['2/3','1/2','3/6','6/9'], sol:0 },
    { q:'3 + 4 × 2 = ?', saisie:['11'] },
    { q:'« rapidement » est un…', choix:['adverbe','adjectif','nom','verbe'], sol:0 },
    { q:'« le », « un », « des » sont des…', choix:['déterminants','pronoms','adverbes','verbes'], sol:0 },
    { q:'Unité de base du vivant ?', choix:['la cellule','l’atome','l’organe','la molécule'], sol:0 },
    { q:'La photosynthèse est faite par…', choix:['les végétaux verts','les animaux','les champignons','les bactéries'], sol:0 },
    { q:'−3 + 8 = ?', saisie:['5'] },
    { q:'Combien de chromosomes chez l’humain ?', choix:['46','23','44','48'], sol:0 },
    { q:'« et », « mais », « ou » = conjonctions de…', choix:['coordination','subordination'], sol:0 }
  ]}
},

/* ===================== BLOC 2 — En route (moyen) ===================== */
{
  id:'bloc2', titre:'Bloc 2 — En route', sousTitre:'On monte · 4ᵉ-3ᵉ',
  lecons:[
    { id:'l1', titre:'Équations & calcul littéral', matiereKey:'maths', questions:[
      { q:'Résous 3x + 5 = 20. x = ?', saisie:['5'], expl:'3x = 15 → x = 5.' },
      { q:'Développe (x + 3)(x − 2).', choix:['x²+x−6','x²−x−6','x²+5x−6','x²−6'], sol:0, expl:'x²−2x+3x−6 = x²+x−6.' },
      { q:'Factorise 5x + 35.', choix:['5(x+7)','5x+7','x(5+35)','5(x+35)'], sol:0, expl:'Facteur commun 5 : 5(x+7).' },
      { q:'(a + b)² = ?', choix:['a²+b²','a²+2ab+b²','a²−2ab+b²','2a+2b'], sol:1, expl:'Identité remarquable : a²+2ab+b².' },
      { q:'(x − 2)(x + 7) = 0. Une solution est…', choix:['2','−2','7','5'], sol:0, expl:'x−2=0 → x=2 (ou x=−7).' },
      { q:'Calcule (−4) × (−2).', saisie:['8'], expl:'Moins par moins = plus : +8.' }
    ]},
    { id:'l2', titre:'Le XXᵉ siècle en dates', matiereKey:'histoire', questions:[
      { q:'En quelle année se termine la Première Guerre mondiale ?', choix:['1914','1916','1918','1920'], sol:2, expl:'Armistice le 11 novembre 1918.' },
      { q:'Qui dirige l’URSS totalitaire des années 1930 ?', choix:['Lénine','Staline','Trotski','Gorbatchev'], sol:1, expl:'Staline (parti unique, terreur, goulag).' },
      { q:'La Seconde Guerre mondiale commence en…', choix:['1936','1939','1940','1945'], sol:1, expl:'1er septembre 1939 (invasion de la Pologne).' },
      { q:'Le Débarquement de Normandie a lieu le…', choix:['6 juin 1944','8 mai 1945','11 nov. 1918','14 juillet 1789'], sol:0, expl:'6 juin 1944.' },
      { q:'Le Mur de Berlin tombe en…', choix:['1961','1989','1991','1945'], sol:1, expl:'9 novembre 1989.' }
    ]},
    { id:'l3', titre:'Matière & énergie', matiereKey:'physique', questions:[
      { q:'Quelle est la formule chimique de l’eau ?', choix:['CO₂','H₂O','O₂','H₂'], sol:1, expl:'H₂O : 2 hydrogènes + 1 oxygène.' },
      { q:'Un atome qui perd un électron devient un ion…', choix:['négatif','positif','neutre','stable'], sol:1, expl:'Perdre des électrons (−) → charge positive.' },
      { q:'Quelle est l’unité de l’énergie ?', choix:['le watt','le joule','le newton','le volt'], sol:1, expl:'Le joule (J). Le watt est la puissance.' },
      { q:'Loi d’Ohm : U = ?', choix:['R + I','R × I','R − I','R ÷ I'], sol:1, expl:'U = R × I.' },
      { q:'Le son se propage-t-il dans le vide ?', choix:['oui','non'], sol:1, expl:'Non : le son a besoin d’un milieu matériel.' },
      { q:'Poids d’un objet de 2 kg (g = 10 N/kg) ?', choix:['2 N','10 N','20 N','200 N'], sol:2, expl:'P = m × g = 2 × 10 = 20 N.' }
    ]},
    { id:'l4', titre:'Conjugaison & accords', matiereKey:'francais', questions:[
      { q:'« Elles sont ___ » (partir, passé composé)', choix:['parti','partie','parties','partis'], sol:2, expl:'Avec être : accord avec le sujet (elles → parties).' },
      { q:'« Il ___ mangé » — quel homophone ?', choix:['a','à','as','ah'], sol:0, expl:'« a » (avait) → auxiliaire avoir.' },
      { q:'Quel temps exprime une action soudaine dans un récit ?', choix:['imparfait','passé simple','présent','futur'], sol:1, expl:'Passé simple = actions brèves de premier plan.' },
      { q:'« Je veux que tu ___ à l’heure »', choix:['es','sois','seras','étais'], sol:1, expl:'Après « que » (volonté) → subjonctif : sois.' },
      { q:'Voix passive : « La souris ___ mangée par le chat »', choix:['a','est','avait','sera'], sol:1, expl:'Passif = être + participe passé : est mangée.' }
    ]}
  ],
  examen:{ titre:'Examen — Bloc 2', questions:[
    { q:'Résous 3x + 5 = 20. x = ?', saisie:['5'] },
    { q:'Développe (x+3)(x−2).', choix:['x²+x−6','x²−x−6','x²−6','x²+6'], sol:0 },
    { q:'Fin de la Première Guerre mondiale ?', choix:['1918','1914','1945','1939'], sol:0 },
    { q:'Débarquement de Normandie ?', choix:['6 juin 1944','8 mai 1945','1918','1789'], sol:0 },
    { q:'Formule de l’eau ?', choix:['H₂O','CO₂','O₂','H₂'], sol:0 },
    { q:'Loi d’Ohm : U = ?', choix:['R × I','R + I','R − I','R ÷ I'], sol:0 },
    { q:'Poids de 2 kg (g=10) ?', choix:['20 N','2 N','10 N','200 N'], sol:0 },
    { q:'« Elles sont ___ » (partir) :', choix:['parties','parti','partis','partie'], sol:0 },
    { q:'Action soudaine dans un récit → temps :', choix:['passé simple','imparfait','présent','futur'], sol:0 },
    { q:'(−4) × (−2) = ?', saisie:['8'] },
    { q:'Chute du Mur de Berlin ?', choix:['1989','1961','1991','1945'], sol:0 },
    { q:'Un atome qui perd un électron devient un ion…', choix:['positif','négatif','neutre','stable'], sol:0 }
  ]}
},

/* ===================== BLOC 3 — Niveau brevet (difficile) ===================== */
{
  id:'bloc3', titre:'Bloc 3 — Niveau brevet', sousTitre:'Le grand test · 3ᵉ',
  lecons:[
    { id:'l1', titre:'Géométrie (Pythagore, Thalès, trigo)', matiereKey:'maths', questions:[
      { q:'Triangle rectangle en A, AB = 3, AC = 4. BC = ?', saisie:['5'], expl:'BC² = 3² + 4² = 25 → BC = 5.' },
      { q:'Quel théorème prouve qu’un triangle est rectangle ?', choix:['Thalès','la réciproque de Pythagore','la trigonométrie','la somme des angles'], sol:1, expl:'On compare le plus grand côté² à la somme des deux autres².' },
      { q:'cos(60°) = ?', choix:['0','0,5','1','60'], sol:1, expl:'Valeur à connaître : cos(60°) = 0,5.' },
      { q:'La somme des angles d’un triangle vaut…', choix:['90°','180°','270°','360°'], sol:1, expl:'Toujours 180°.' },
      { q:'Thalès s’utilise avec des droites…', choix:['perpendiculaires','parallèles','sécantes seulement','quelconques'], sol:1, expl:'Il faut deux droites parallèles + points alignés.' }
    ]},
    { id:'l2', titre:'Génétique & évolution', matiereKey:'svt', questions:[
      { q:'Les versions différentes d’un même gène s’appellent des…', choix:['chromosomes','allèles','gamètes','cellules'], sol:1, expl:'Un gène existe en plusieurs allèles.' },
      { q:'Le moteur de l’évolution décrit par Darwin est…', choix:['la mutation','la sélection naturelle','la respiration','la digestion'], sol:1, expl:'Les mieux adaptés survivent et se reproduisent plus.' },
      { q:'Un gamète humain contient combien de chromosomes ?', choix:['23','46','48','22'], sol:0, expl:'23 (la moitié) ; la fécondation redonne 46.' },
      { q:'Les vrais jumeaux ont un patrimoine génétique…', choix:['différent','identique','partiel','aléatoire'], sol:1, expl:'Ils viennent de la même cellule-œuf.' },
      { q:'Preuve de l’évolution conservée dans les roches ?', choix:['l’ADN','le fossile','la cellule','le gène'], sol:1, expl:'Les fossiles témoignent des espèces passées.' }
    ]},
    { id:'l3', titre:'Histoire-Géo-EMC', matiereKey:'histoire', questions:[
      { q:'La devise de la République française est…', choix:['Liberté, Égalité, Fraternité','Un pour tous','Paix et Travail','Dieu et mon droit'], sol:0, expl:'Liberté, Égalité, Fraternité.' },
      { q:'La loi de séparation des Églises et de l’État date de…', choix:['1789','1848','1905','1958'], sol:2, expl:'Loi de laïcité de 1905.' },
      { q:'L’IDH mesure…', choix:['la richesse seule','le développement humain','la population','la surface'], sol:1, expl:'Santé + éducation + niveau de vie.' },
      { q:'Combien d’États compte l’Union européenne ?', choix:['12','15','27','50'], sol:2, expl:'27 États membres.' },
      { q:'La Vᵉ République est fondée en…', choix:['1945','1958','1962','1968'], sol:1, expl:'1958, avec De Gaulle.' }
    ]},
    { id:'l4', titre:'Grammaire & analyse', matiereKey:'francais', questions:[
      { q:'« parce que » introduit une subordonnée de…', choix:['temps','cause','lieu','condition'], sol:1, expl:'Parce que = cause.' },
      { q:'Dans « le livre que je lis », « que je lis » est une proposition…', choix:['conjonctive','relative','indépendante','principale'], sol:1, expl:'Relative (introduite par « que »), complète « livre ».' },
      { q:'« fort comme un lion » est une…', choix:['métaphore','comparaison','personnification','hyperbole'], sol:1, expl:'Il y a un outil (« comme ») → comparaison.' },
      { q:'Le registre qui suscite la pitié est le…', choix:['comique','tragique','pathétique','épique'], sol:2, expl:'Pathétique = pitié, émotion, souffrance.' },
      { q:'Dans une autobiographie, l’auteur = le narrateur = …', choix:['le lecteur','le personnage principal','un témoin','un héros de fiction'], sol:1, expl:'Pacte autobiographique : les trois sont la même personne.' }
    ]}
  ],
  examen:{ titre:'Examen final — Bloc 3', questions:[
    { q:'Triangle rectangle en A, AB=3, AC=4. BC = ?', saisie:['5'] },
    { q:'cos(60°) = ?', choix:['0,5','0','1','60'], sol:0 },
    { q:'Somme des angles d’un triangle ?', choix:['180°','90°','360°','270°'], sol:0 },
    { q:'Thalès s’utilise avec des droites…', choix:['parallèles','perpendiculaires','sécantes','quelconques'], sol:0 },
    { q:'Versions d’un même gène ?', choix:['allèles','chromosomes','gamètes','cellules'], sol:0 },
    { q:'Moteur de l’évolution (Darwin) ?', choix:['la sélection naturelle','la digestion','la respiration','la photosynthèse'], sol:0 },
    { q:'Devise de la République ?', choix:['Liberté, Égalité, Fraternité','Paix et Travail','Un pour tous','Dieu et mon droit'], sol:0 },
    { q:'Loi de laïcité ?', choix:['1905','1789','1958','1848'], sol:0 },
    { q:'Nombre d’États de l’UE ?', choix:['27','15','12','50'], sol:0 },
    { q:'Fondation de la Vᵉ République ?', choix:['1958','1945','1962','1968'], sol:0 },
    { q:'« parce que » introduit une cause. Vrai ?', choix:['Vrai','Faux'], sol:0 },
    { q:'« fort comme un lion » est une…', choix:['comparaison','métaphore','hyperbole','personnification'], sol:0 },
    { q:'Registre qui suscite la pitié ?', choix:['pathétique','comique','épique','lyrique'], sol:0 },
    { q:'Un gamète humain a combien de chromosomes ?', choix:['23','46','48','22'], sol:0 },
    { q:'Théorème pour prouver un angle droit ?', choix:['réciproque de Pythagore','Thalès','trigonométrie','somme des angles'], sol:0 }
  ]}
}

];
