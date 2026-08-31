/* Parcours façon Duolingo couvrant les 157 fiches, du plus facile au plus difficile.
   6 blocs (6e/5e → 4e → 3e), leçons multi-matières de questions flash.
   L'examen de fin de bloc est construit automatiquement en mélangeant 2 questions de chaque leçon. */
window.PARCOURS = [

/* ===================== BLOC 1 — Découverte (6e-5e · bases) ===================== */
{
  id:'bloc1', titre:'Bloc 1 — Découverte', sousTitre:'Les bases · 6ᵉ-5ᵉ',
  lecons:[
    { id:'l1', titre:'Nombres relatifs & priorités', matiereKey:'maths', questions:[
      { q:'Calcule : −3 + 8', choix:['5','−5','11','−11'], sol:0, expl:'Signes différents : 8 − 3 = 5, signe du plus grand.' },
      { q:'Calcule : (−4) × (−2)', saisie:['8','+8'], expl:'Moins par moins = plus : +8.' },
      { q:'Calcule : 5 − (−3)', choix:['2','8','−8','15'], sol:1, expl:'Soustraire = ajouter l’opposé : 5 + 3 = 8.' },
      { q:'Calcule : 3 + 4 × 2', choix:['14','11','10','24'], sol:1, expl:'× avant + : 3 + 8 = 11.' },
      { q:'Calcule : (3 + 4) × 2', saisie:['14'], expl:'Parenthèses d’abord : 7 × 2 = 14.' },
      { q:'Calcule : 20 − 2 × 3²', choix:['2','54','162','14'], sol:0, expl:'Puissance puis × : 20 − 2×9 = 20 − 18 = 2.' }
    ]},
    { id:'l2', titre:'Géométrie de base', matiereKey:'maths', questions:[
      { q:'La somme des angles d’un triangle vaut…', choix:['90°','180°','270°','360°'], sol:1, expl:'Toujours 180°.' },
      { q:'Un triangle équilatéral a trois angles de…', saisie:['60','60°'], expl:'180 ÷ 3 = 60°.' },
      { q:'Aire d’un rectangle de 5 cm sur 3 cm ?', saisie:['15','15 cm2','15 cm²'], expl:'A = L × l = 5 × 3 = 15 cm².' },
      { q:'Aire d’un triangle = ?', choix:['base × hauteur','(base × hauteur) ÷ 2','base + hauteur','base² × hauteur'], sol:1, expl:'A = (b × h) ÷ 2.' },
      { q:'Dans un repère, le point (3 ; 2) : que vaut l’abscisse ?', saisie:['3'], expl:'L’abscisse est la 1ʳᵉ coordonnée (horizontale).' },
      { q:'Circonférence d’un cercle = ?', choix:['π × R','2 × π × R','π × R²','2 × R'], sol:1, expl:'Périmètre du cercle = 2πR.' }
    ]},
    { id:'l3', titre:'La nature des mots', matiereKey:'francais', questions:[
      { q:'Dans « le chat noir », « noir » est un…', choix:['nom','adjectif','verbe','adverbe'], sol:1, expl:'Il qualifie le nom : adjectif.' },
      { q:'« rapidement » est un…', choix:['adjectif','adverbe','nom','pronom'], sol:1, expl:'Les mots en -ment sont souvent des adverbes (invariables).' },
      { q:'« le », « la », « un » sont des…', choix:['pronoms','déterminants','conjonctions','prépositions'], sol:1, expl:'Ils accompagnent le nom.' },
      { q:'Dans « un chat de gouttière », « de gouttière » est…', choix:['une épithète','un complément du nom','une relative','un COD'], sol:1, expl:'Introduit par une préposition → complément du nom.' },
      { q:'Dans « le chat qui dort », « qui dort » est une proposition…', choix:['relative','conjonctive','principale','indépendante'], sol:0, expl:'Introduite par « qui », elle complète le nom.' }
    ]},
    { id:'l4', titre:'Phrases, lexique & récit', matiereKey:'francais', questions:[
      { q:'« Ne bouge pas ! » : la négation s’écrit avec…', choix:['un seul mot','deux mots (ne… pas)','trois mots','aucun mot'], sol:1, expl:'À l’écrit : ne… pas (deux mots).' },
      { q:'« Où vas-tu ? » est une phrase de type…', choix:['déclaratif','interrogatif','exclamatif','injonctif'], sol:1, expl:'Elle pose une question.' },
      { q:'« Une mer de sable » est employé au sens…', choix:['propre','figuré'], sol:1, expl:'C’est une image : sens figuré.' },
      { q:'Dans « dévisser », « dé- » est un…', choix:['suffixe','radical','préfixe','adverbe'], sol:2, expl:'Il se place avant le radical : préfixe.' },
      { q:'L’événement qui déclenche l’action d’un récit s’appelle…', choix:['la situation initiale','l’élément perturbateur','le dénouement','la péripétie'], sol:1, expl:'Souvent introduit par « soudain », « un jour ».' },
      { q:'La situation initiale d’un conte est souvent au…', choix:['passé simple','imparfait','futur','présent'], sol:1, expl:'L’imparfait plante le décor.' }
    ]},
    { id:'l5', titre:'La cellule & le vivant', matiereKey:'svt', questions:[
      { q:'L’unité de base de tous les êtres vivants est…', choix:['l’atome','la cellule','l’organe','la molécule'], sol:1, expl:'Tous les êtres vivants sont faits de cellules.' },
      { q:'Grossissement du microscope = oculaire ×10 et objectif ×40 → ?', saisie:['400','x400','×400'], expl:'10 × 40 = ×400.' },
      { q:'Une chaîne alimentaire commence toujours par…', choix:['un animal','un végétal','un prédateur','un champignon'], sol:1, expl:'Les végétaux (producteurs) sont à la base.' },
      { q:'La flèche « → » d’une chaîne alimentaire se lit…', choix:['« mange »','« est mangé par »','« vit avec »','« ressemble à »'], sol:1, expl:'Herbe → sauterelle = l’herbe est mangée par la sauterelle.' },
      { q:'Après la fécondation, la fleur se transforme en…', choix:['racine','fruit','feuille','tige'], sol:1, expl:'Le fruit contient les graines.' },
      { q:'Le transport du pollen s’appelle la…', saisie:['pollinisation'], expl:'Par le vent ou les insectes (abeilles).' }
    ]},
    { id:'l6', titre:'Le corps humain', matiereKey:'svt', questions:[
      { q:'L’absorption des nutriments a lieu dans…', choix:['l’estomac','l’intestin grêle','le foie','l’œsophage'], sol:1, expl:'L’intestin grêle, riche en villosités.' },
      { q:'Dans les poumons, le sang se charge en…', choix:['CO₂','dioxygène','azote','eau'], sol:1, expl:'Il prend l’O₂ et rejette le CO₂.' },
      { q:'Les artères transportent le sang…', choix:['vers le cœur','loin du cœur'], sol:1, expl:'Artères = partent du cœur ; veines = reviennent.' },
      { q:'Le cœur est un…', choix:['os','muscle','nerf','organe des sens'], sol:1, expl:'Un muscle qui pompe le sang.' },
      { q:'Les aliments sont découpés en nutriments grâce aux…', choix:['enzymes','globules','hormones','vitamines'], sol:0, expl:'Les enzymes digestives découpent les aliments.' },
      { q:'Une alimentation équilibrée doit être adaptée à…', choix:['la mode','l’activité physique et l’âge','la couleur des aliments','la saison uniquement'], sol:1, expl:'Les besoins dépendent de l’âge et de l’activité.' }
    ]}
  ]
},

/* ===================== BLOC 2 — Fondations (5e · monde & matière) ===================== */
{
  id:'bloc2', titre:'Bloc 2 — Fondations', sousTitre:'Monde & matière · 5ᵉ',
  lecons:[
    { id:'l1', titre:'États, mélanges & solutions', matiereKey:'physique', questions:[
      { q:'La glace fond à quelle température ?', saisie:['0','0°c','0 °c','0 degres','0 degrés'], expl:'Fusion de l’eau à 0 °C.' },
      { q:'Lors d’un changement d’état, la masse…', choix:['augmente','diminue','se conserve','disparaît'], sol:2, expl:'Masse conservée, volume modifié.' },
      { q:'Eau + huile forment un mélange…', choix:['homogène','hétérogène'], sol:1, expl:'Non miscibles : deux couches visibles.' },
      { q:'Pour récupérer le sel dissous dans l’eau, on utilise…', choix:['la filtration','la décantation','l’évaporation','un aimant'], sol:2, expl:'Le sel est dissous : seule l’évaporation le récupère.' },
      { q:'Quand on ne peut plus dissoudre de sel, la solution est…', saisie:['saturee','saturée'], expl:'Au-delà de la solubilité, saturation.' },
      { q:'L’eau bout à quelle température (pression normale) ?', choix:['90 °C','100 °C','110 °C','120 °C'], sol:1, expl:'Ébullition à 100 °C.' }
    ]},
    { id:'l2', titre:'Électricité & lumière (bases)', matiereKey:'physique', questions:[
      { q:'Les métaux sont des…', choix:['isolants','conducteurs'], sol:1, expl:'Ils laissent passer le courant.' },
      { q:'En série, si une lampe grille…', choix:['les autres restent allumées','tout s’éteint'], sol:1, expl:'Une seule boucle : tout s’arrête.' },
      { q:'Un court-circuit est dangereux car il provoque…', choix:['un refroidissement','un fort échauffement','une panne de pile','rien'], sol:1, expl:'Forte intensité → échauffement → incendie possible.' },
      { q:'Le jour et la nuit sont dus à…', choix:['la rotation de la Terre sur elle-même','la Lune','les saisons','les nuages'], sol:0, expl:'Rotation en 24 h.' },
      { q:'Une éclipse a lieu quand Soleil, Terre et Lune sont…', saisie:['alignes','alignés'], expl:'Alignement des trois astres.' }
    ]},
    { id:'l3', titre:'Le Moyen Âge & l’islam', matiereKey:'histoire', questions:[
      { q:'Au Moyen Âge, la société est divisée en…', choix:['deux ordres','trois ordres','quatre castes','classes sociales'], sol:1, expl:'Ceux qui prient, combattent, travaillent.' },
      { q:'Le vassal jure fidélité à son…', saisie:['suzerain'], expl:'En échange d’un fief (une terre).' },
      { q:'L’islam apparaît au…', choix:['Vᵉ siècle','VIIᵉ siècle','Xᵉ siècle','XVᵉ siècle'], sol:1, expl:'VIIᵉ siècle, en Arabie.' },
      { q:'Le livre saint de l’islam est…', choix:['la Bible','la Torah','le Coran','l’Énéide'], sol:2, expl:'Le Coran.' },
      { q:'La Méditerranée médiévale est un espace de…', choix:['conflits uniquement','échanges uniquement','conflits ET échanges','isolement'], sol:2, expl:'Croisades mais aussi commerce et savoirs.' }
    ]},
    { id:'l4', titre:'Renaissance, découvertes & Louis XIV', matiereKey:'histoire', questions:[
      { q:'Christophe Colomb atteint l’Amérique en…', saisie:['1492'], expl:'1492.' },
      { q:'L’imprimerie est inventée par…', choix:['Colomb','Gutenberg','Luther','Léonard de Vinci'], sol:1, expl:'Gutenberg, vers 1450.' },
      { q:'Luther est à l’origine du…', choix:['catholicisme','protestantisme','islam','judaïsme'], sol:1, expl:'Les Réformes divisent la chrétienté.' },
      { q:'Louis XIV incarne la monarchie…', choix:['parlementaire','absolue de droit divin','constitutionnelle','élective'], sol:1, expl:'Tous les pouvoirs, tenus de Dieu.' },
      { q:'Le château symbole du pouvoir de Louis XIV est…', saisie:['versailles'], expl:'Versailles, où il contrôle la noblesse.' },
      { q:'Le mouvement qui place l’Homme et le savoir au centre (XVᵉ-XVIᵉ) est…', choix:['l’humanisme','le romantisme','le réalisme','le classicisme'], sol:0, expl:'L’humanisme, lié à la Renaissance.' }
    ]},
    { id:'l5', titre:'Population & développement', matiereKey:'geographie', questions:[
      { q:'La population mondiale dépasse…', choix:['5 milliards','6 milliards','8 milliards','10 milliards'], sol:2, expl:'Plus de 8 milliards d’habitants.' },
      { q:'L’IDH mesure…', choix:['la richesse seule','le développement humain','la population','la superficie'], sol:1, expl:'Santé + éducation + niveau de vie.' },
      { q:'L’IDH est compris entre…', choix:['0 et 1','0 et 100','1 et 10','0 et 20'], sol:0, expl:'Plus il est proche de 1, plus le pays est développé.' },
      { q:'Utiliser une ressource sans l’épuiser, c’est la gestion…', saisie:['durable'], expl:'Pour les générations futures.' },
      { q:'Le manque d’eau dans une région s’appelle le stress…', saisie:['hydrique'], expl:'Stress hydrique.' },
      { q:'Le défi alimentaire consiste à nourrir tous les humains de façon…', choix:['rapide','durable et équitable','industrielle','importée'], sol:1, expl:'Quantité + durabilité + répartition.' }
    ]},
    { id:'l6', titre:'Climat, risques & vivre ensemble', matiereKey:'geographie', questions:[
      { q:'Réduire les émissions de CO₂, c’est…', choix:['l’adaptation','l’atténuation','la prévention','la migration'], sol:1, expl:'Atténuer = réduire les causes ; s’adapter = gérer les effets.' },
      { q:'Risque = aléa × …', saisie:['enjeux'], expl:'Un aléa sans population exposée n’est pas un risque.' },
      { q:'Construire des digues face à la montée des eaux, c’est…', choix:['l’atténuation','l’adaptation'], sol:1, expl:'On limite les conséquences : adaptation.' },
      { q:'Face au harcèlement, le numéro national est le…', choix:['15','17','3018','112'], sol:2, expl:'3018, et en parler à un adulte.' },
      { q:'La loi est votée par…', choix:['le président seul','le Parlement','les juges','la police'], sol:1, expl:'Les représentants du peuple (Assemblée + Sénat).' },
      { q:'Le règlement intérieur du collège fixe…', choix:['seulement des devoirs','seulement des droits','des droits et des devoirs','les programmes'], sol:2, expl:'Droits ET devoirs pour le vivre-ensemble.' }
    ]},
    { id:'l7', titre:'Végétaux, sol & paysages', matiereKey:'svt', questions:[
      { q:'Les plantes vertes fabriquent leur matière grâce à la…', saisie:['photosynthese','photosynthèse'], expl:'Avec lumière, eau, CO₂ et sels minéraux.' },
      { q:'Les végétaux verts sont appelés…', choix:['consommateurs','producteurs','décomposeurs','prédateurs'], sol:1, expl:'À la base des chaînes alimentaires.' },
      { q:'Vers, champignons et bactéries du sol sont des…', choix:['producteurs','décomposeurs','prédateurs','parasites'], sol:1, expl:'Ils recyclent la matière organique morte.' },
      { q:'Les 3 étapes de l’érosion : altération → transport → …', saisie:['sedimentation','sédimentation'], expl:'Les débris se déposent ailleurs.' },
      { q:'On classe les êtres vivants selon…', choix:['leur taille','les caractères qu’ils possèdent','leur couleur','leur lieu de vie'], sol:1, expl:'Attributs communs → groupes emboîtés.' },
      { q:'Une bouture est une reproduction…', choix:['sexuée','asexuée'], sol:1, expl:'Un seul individu → descendants identiques.' }
    ]},
    { id:'l8', titre:'L’objet technique', matiereKey:'techno', questions:[
      { q:'« À quoi sert l’objet ? » définit sa fonction…', choix:['d’estime','d’usage','technique','esthétique'], sol:1, expl:'Fonction d’usage = utilité.' },
      { q:'Ce qui plaît (design, marque) est la fonction…', saisie:['d estime','destime','d’estime','estime'], expl:'Fonction d’estime.' },
      { q:'Le document qui liste fonctions et contraintes est le…', choix:['mode d’emploi','cahier des charges','plan','devis'], sol:1, expl:'Cahier des charges.' },
      { q:'La bête à cornes exprime…', choix:['le prix','le besoin','la couleur','la vitesse'], sol:1, expl:'À qui ? Sur quoi ? Pourquoi ?' },
      { q:'Le dessin précis à l’échelle avec les dimensions est le…', choix:['croquis','schéma','dessin technique','logo'], sol:2, expl:'Il permet de fabriquer l’objet.' },
      { q:'À l’échelle 1:10, 1 cm sur le plan = … cm en vrai', saisie:['10'], expl:'1 cm représente 10 cm.' }
    ]}
  ]
},

/* ===================== BLOC 3 — Progression (4e · calcul & récits) ===================== */
{
  id:'bloc3', titre:'Bloc 3 — Progression', sousTitre:'Calcul & récits · 4ᵉ',
  lecons:[
    { id:'l1', titre:'Fractions & puissances', matiereKey:'maths', questions:[
      { q:'2/3 + 1/4 = ?', choix:['3/7','11/12','2/12','8/12'], sol:1, expl:'8/12 + 3/12 = 11/12.' },
      { q:'2/3 ÷ 4/5 = ?', choix:['8/15','5/6','10/12','2/5'], sol:1, expl:'× l’inverse : 2/3 × 5/4 = 10/12 = 5/6.' },
      { q:'Simplifie 24/36.', saisie:['2/3'], expl:'PGCD 12 : 2/3.' },
      { q:'10³ = ?', saisie:['1000'], expl:'1 suivi de 3 zéros.' },
      { q:'52 000 en notation scientifique = ?', choix:['52 × 10³','5,2 × 10⁴','0,52 × 10⁵','5,2 × 10³'], sol:1, expl:'1 ≤ a < 10 : 5,2 × 10⁴.' },
      { q:'10⁵ × 10³ = ?', choix:['10⁸','10¹⁵','10²','20⁸'], sol:0, expl:'On additionne les exposants.' }
    ]},
    { id:'l2', titre:'Équations & proportionnalité', matiereKey:'maths', questions:[
      { q:'Résous 3x + 5 = 20. x = ?', saisie:['5'], expl:'3x = 15 → x = 5.' },
      { q:'Résous 5x − 3 = 2x + 9. x = ?', saisie:['4'], expl:'3x = 12 → x = 4.' },
      { q:'Augmenter de 20 % revient à multiplier par…', choix:['1,2','0,2','1,02','2'], sol:0, expl:'×(1 + 20/100) = ×1,20.' },
      { q:'Réduction de 20 % sur 50 € → prix final ?', saisie:['40','40€','40 €','40 euros'], expl:'50 × 0,80 = 40 €.' },
      { q:'3 kg coûtent 12 €. Combien pour 5 kg ?', saisie:['20','20€','20 €','20 euros'], expl:'Produit en croix : 12×5÷3 = 20 €.' },
      { q:'Deux hausses de 10 % font au total…', choix:['+20 % exactement','+21 %','+10 %','+19 %'], sol:1, expl:'1,1 × 1,1 = 1,21 → +21 %.' }
    ]},
    { id:'l3', titre:'Pythagore', matiereKey:'maths', questions:[
      { q:'Triangle rectangle en A, AB = 3, AC = 4. BC = ?', saisie:['5'], expl:'BC² = 9 + 16 = 25 → BC = 5.' },
      { q:'L’hypoténuse est le côté…', choix:['le plus court','opposé à l’angle droit','adjacent à l’angle droit','vertical'], sol:1, expl:'Le plus grand, face à l’angle droit.' },
      { q:'Rectangle en A, BC = 13, AB = 5. AC = ?', saisie:['12'], expl:'AC² = 169 − 25 = 144 → 12.' },
      { q:'Pour prouver qu’un triangle est rectangle, on utilise…', choix:['le théorème direct','la réciproque de Pythagore','Thalès','la trigonométrie'], sol:1, expl:'On compare BC² à AB² + AC².' },
      { q:'Côtés 6, 8, 10 : le triangle est-il rectangle ?', choix:['oui','non'], sol:0, expl:'10² = 100 = 6² + 8² → oui.' }
    ]},
    { id:'l4', titre:'Fonctions dans la phrase & conjugaison', matiereKey:'francais', questions:[
      { q:'Dans « Léa offre un livre à son frère », « un livre » est…', choix:['sujet','COD','COI','CC'], sol:1, expl:'« offre quoi ? » sans préposition → COD.' },
      { q:'« à son frère » est un…', choix:['COD','COI','CC de lieu','attribut'], sol:1, expl:'« offre à qui ? » avec préposition → COI.' },
      { q:'Un complément circonstanciel est…', choix:['essentiel','déplaçable et supprimable','toujours en tête','un verbe'], sol:1, expl:'C’est sa caractéristique.' },
      { q:'Dans un récit, le décor et la durée s’expriment à…', choix:['l’imparfait','au passé simple','au futur','au conditionnel'], sol:0, expl:'Imparfait = arrière-plan.' },
      { q:'« Soudain, un cri _____ » (retentir, temps du 1er plan)', choix:['retentissait','retentit','retentira','retentirait'], sol:1, expl:'Action soudaine → passé simple.' },
      { q:'Le plus-que-parfait exprime une action…', choix:['future','simultanée','antérieure à une action passée','hypothétique'], sol:2, expl:'Encore avant dans le passé.' }
    ]},
    { id:'l5', titre:'Figures, poésie, théâtre & passif', matiereKey:'francais', questions:[
      { q:'« Fort comme un lion » est une…', choix:['métaphore','comparaison','hyperbole','antithèse'], sol:1, expl:'Outil « comme » → comparaison.' },
      { q:'« Cet homme est un lion » est une…', choix:['comparaison','métaphore','personnification','gradation'], sol:1, expl:'Sans outil → métaphore.' },
      { q:'« Le vent hurlait » est une…', saisie:['personnification'], expl:'Trait humain donné au vent.' },
      { q:'Un vers de 12 syllabes est un…', choix:['octosyllabe','décasyllabe','alexandrin','tercet'], sol:2, expl:'Alexandrin = 12 syllabes.' },
      { q:'Les indications de mise en scène s’appellent les…', saisie:['didascalies','didascalie'], expl:'Décor, gestes, ton (souvent en italique).' },
      { q:'Au passif : « La souris ___ mangée par le chat. »', choix:['a','est','avait','fut donc'], sol:1, expl:'Être + participe passé.' }
    ]},
    { id:'l6', titre:'Nerfs, muscles & effort', matiereKey:'svt', questions:[
      { q:'Les centres nerveux sont le cerveau et…', choix:['le cœur','la moelle épinière','les poumons','les nerfs'], sol:1, expl:'Cerveau + moelle épinière.' },
      { q:'Trajet du message : récepteur → nerf → … → nerf → muscle', saisie:['centre nerveux','cerveau'], expl:'Le centre nerveux traite et commande.' },
      { q:'Un muscle qui se contracte…', choix:['pousse l’os','tire sur l’os','casse l’os','allonge l’os'], sol:1, expl:'Il tire via le tendon (jamais pousser).' },
      { q:'Muscles et os sont reliés par les…', saisie:['tendons','tendon'], expl:'Les tendons.' },
      { q:'À l’effort, la fréquence cardiaque…', choix:['diminue','reste stable','augmente'], sol:2, expl:'Pour apporter plus d’O₂ aux muscles.' },
      { q:'La zone de contact entre deux os est…', choix:['le tendon','l’articulation','le cartilage seul','le nerf'], sol:1, expl:'L’articulation permet le mouvement.' }
    ]},
    { id:'l7', titre:'Hormones, plaques & volcans', matiereKey:'svt', questions:[
      { q:'Une hormone est transportée par…', choix:['les nerfs','le sang','l’air','la lymphe seulement'], sol:1, expl:'Message chimique via le sang.' },
      { q:'Les transformations de la puberté sont déclenchées par les…', saisie:['hormones','hormone'], expl:'Messages chimiques des glandes.' },
      { q:'Les plaques se déplacent de quelques…', choix:['mm/an','cm/an','m/an','km/an'], sol:1, expl:'Quelques centimètres par an.' },
      { q:'Séismes et volcans se concentrent…', choix:['au centre des plaques','aux limites des plaques','aux pôles','dans les déserts'], sol:1, expl:'Ex. la « ceinture de feu » du Pacifique.' },
      { q:'Une éruption avec lave fluide est dite…', choix:['explosive','effusive'], sol:1, expl:'Effusive = coulées ; explosive = dangereuse.' },
      { q:'Un séisme est une rupture le long d’une…', saisie:['faille'], expl:'Libération brutale d’énergie.' }
    ]}
  ]
},

/* ===================== BLOC 4 — Confirmé (4e · monde technique) ===================== */
{
  id:'bloc4', titre:'Bloc 4 — Confirmé', sousTitre:'Sciences & sociétés · 4ᵉ',
  lecons:[
    { id:'l1', titre:'Atomes & transformations', matiereKey:'physique', questions:[
      { q:'La formule de l’eau est…', choix:['CO₂','H₂O','O₂','H₂'], sol:1, expl:'2 H + 1 O.' },
      { q:'Un atome qui perd un électron devient un ion…', choix:['négatif','positif','neutre','instable'], sol:1, expl:'Perdre du − → charge +.' },
      { q:'Dans une réaction, les espèces de départ sont les…', saisie:['reactifs','réactifs','reactif','réactif'], expl:'Réactifs → produits.' },
      { q:'Masse des réactifs vs masse des produits :', choix:['plus grande','plus petite','égale'], sol:2, expl:'Les atomes se conservent → masse conservée.' },
      { q:'C + O₂ → ?', choix:['CO','CO₂','H₂O','O₃'], sol:1, expl:'Combustion du carbone → dioxyde de carbone.' },
      { q:'Une combustion incomplète produit un gaz mortel :', choix:['le CO₂','le CO','l’O₂','le N₂'], sol:1, expl:'Le monoxyde de carbone (invisible, inodore).' }
    ]},
    { id:'l2', titre:'Électricité, son & lumière', matiereKey:'physique', questions:[
      { q:'Loi d’Ohm : U = ?', choix:['R + I','R × I','R − I','R ÷ I'], sol:1, expl:'U = R × I.' },
      { q:'R = 20 Ω, I = 0,5 A → U = ?', saisie:['10','10v','10 v'], expl:'20 × 0,5 = 10 V.' },
      { q:'L’ampèremètre se branche…', choix:['en dérivation','en série'], sol:1, expl:'Ampèremètre en série ; voltmètre en dérivation.' },
      { q:'Le son se propage-t-il dans le vide ?', choix:['oui','non'], sol:1, expl:'Il a besoin d’un milieu matériel.' },
      { q:'Vitesse du son dans l’air ≈ ?', choix:['34 m/s','340 m/s','3 400 m/s','300 000 km/s'], sol:1, expl:'≈ 340 m/s (la lumière : 300 000 km/s).' },
      { q:'Plus la fréquence est élevée, plus le son est…', choix:['grave','aigu','fort','faible'], sol:1, expl:'Fréquence → hauteur (grave/aigu).' }
    ]},
    { id:'l3', titre:'Mouvement, masse volumique & espace', matiereKey:'physique', questions:[
      { q:'v = distance ÷ …', saisie:['duree','durée','temps'], expl:'v = d ÷ t.' },
      { q:'100 m en 20 s → v = ?', choix:['2 m/s','5 m/s','20 m/s','2000 m/s'], sol:1, expl:'100 ÷ 20 = 5 m/s.' },
      { q:'Le mouvement dépend du…', saisie:['referentiel','référentiel'], expl:'Il est relatif au référentiel choisi.' },
      { q:'ρ = 0,8 g/cm³ : le corps flotte-t-il sur l’eau ?', choix:['oui','non'], sol:0, expl:'ρ < 1 g/cm³ → il flotte.' },
      { q:'L’air contient environ 78 % de…', choix:['dioxygène','diazote','CO₂','vapeur d’eau'], sol:1, expl:'78 % N₂ + 21 % O₂.' },
      { q:'Ce qui maintient les planètes autour du Soleil :', choix:['le magnétisme','la gravitation','le vent solaire','la lumière'], sol:1, expl:'L’attraction gravitationnelle.' }
    ]},
    { id:'l4', titre:'Révolution française & Lumières', matiereKey:'histoire', questions:[
      { q:'La prise de la Bastille a lieu le…', choix:['14 juillet 1789','26 août 1789','21 sept. 1792','1804'], sol:0, expl:'14 juillet 1789.' },
      { q:'La Déclaration des droits de l’Homme date de…', saisie:['1789'], expl:'26 août 1789.' },
      { q:'La Première République est proclamée en…', choix:['1789','1792','1799','1804'], sol:1, expl:'1792, après la chute de la monarchie.' },
      { q:'Napoléon devient empereur en…', saisie:['1804'], expl:'1804 (Code civil, préfets, lycées).' },
      { q:'Montesquieu propose la séparation des…', saisie:['pouvoirs'], expl:'Législatif, exécutif, judiciaire.' },
      { q:'L’Encyclopédie est dirigée par…', choix:['Voltaire','Rousseau','Diderot','Molière'], sol:2, expl:'Diderot (et d’Alembert).' }
    ]},
    { id:'l5', titre:'Industrialisation, colonies & traite', matiereKey:'histoire', questions:[
      { q:'La machine emblématique du XIXᵉ siècle est la machine…', saisie:['a vapeur','à vapeur','vapeur'], expl:'Alimentée au charbon.' },
      { q:'Les deux classes nées de l’industrialisation :', choix:['nobles et clergé','bourgeoisie et ouvriers','paysans et serfs','rois et sujets'], sol:1, expl:'Bourgeoisie / prolétariat.' },
      { q:'Le départ des campagnes vers les villes est…', choix:['l’émigration','l’exode rural','la colonisation','la migration pendulaire'], sol:1, expl:'Exode rural.' },
      { q:'Le commerce triangulaire relie Europe, Afrique et…', saisie:['amerique','amérique'], expl:'Europe → Afrique → Amérique.' },
      { q:'L’esclavage est définitivement aboli en France en…', choix:['1789','1794','1848','1905'], sol:2, expl:'1848.' },
      { q:'La « mission civilisatrice » servait à justifier…', choix:['l’école','la colonisation','la République','l’industrie'], sol:1, expl:'Idéologie de la colonisation.' }
    ]},
    { id:'l6', titre:'Villes, migrations & océans', matiereKey:'geographie', questions:[
      { q:'Plus de la moitié de l’humanité vit…', choix:['à la campagne','en ville'], sol:1, expl:'Urbanisation mondiale croissante.' },
      { q:'Une agglomération de plus de 10 millions d’habitants est une…', saisie:['megapole','mégapole'], expl:'Ex. Tokyo, Delhi.' },
      { q:'Quitter son pays, c’est…', choix:['immigrer','émigrer','naviguer','voyager'], sol:1, expl:'Émigrer (on immigre dans le pays d’accueil).' },
      { q:'Part du commerce mondial passant par la mer ≈', choix:['20 %','50 %','80 %','100 %'], sol:2, expl:'≈ 80 % (porte-conteneurs).' },
      { q:'Une entreprise implantée dans plusieurs pays est une…', choix:['PME','FTN','ONG','coopérative'], sol:1, expl:'Firme transnationale.' },
      { q:'Déplacer la production où elle coûte moins cher, c’est…', saisie:['delocaliser','délocaliser','la delocalisation','la délocalisation','delocalisation','délocalisation'], expl:'La délocalisation.' }
    ]},
    { id:'l7', titre:'Justice, libertés & vie privée', matiereKey:'emc', questions:[
      { q:'La justice qui règle les conflits entre particuliers est…', choix:['pénale','civile','militaire','administrative'], sol:1, expl:'Civile = conflits ; pénale = infractions.' },
      { q:'On est innocent tant qu’on n’est pas jugé coupable : c’est la…', choix:['récidive','présomption d’innocence','plaidoirie','garde à vue'], sol:1, expl:'Principe fondamental.' },
      { q:'La justice des mineurs privilégie…', choix:['la prison','l’éducation','l’amende','le travail'], sol:1, expl:'Éduquer avant de punir.' },
      { q:'La liberté d’expression permet-elle d’insulter ?', choix:['oui','non'], sol:1, expl:'La loi interdit injure, diffamation, haine.' },
      { q:'Discriminer à l’embauche est…', choix:['toléré','un délit puni par la loi','une opinion','légal si justifié'], sol:1, expl:'La discrimination est un délit.' },
      { q:'Publier la photo de quelqu’un sans accord viole le droit…', choix:['de vote','à l’image','du travail','de réunion'], sol:1, expl:'Droit à l’image (vie privée).' }
    ]},
    { id:'l8', titre:'Technologie : systèmes & réseaux', matiereKey:'techno', questions:[
      { q:'Le capteur…', choix:['agit','mesure','alimente','stocke'], sol:1, expl:'Capteur = entrée (il mesure) ; actionneur = sortie (il agit).' },
      { q:'Le moteur d’une porte automatique est un…', saisie:['actionneur'], expl:'Il exécute l’action.' },
      { q:'La chaîne d’information sert à…', choix:['agir','décider','chauffer','peser'], sol:1, expl:'Acquérir → traiter → communiquer.' },
      { q:'Internet fonctionne sur le modèle…', choix:['maître-esclave','client-serveur','pair unique','hors ligne'], sol:1, expl:'Le client demande, le serveur fournit.' },
      { q:'Le « cerveau » de l’ordinateur est le…', saisie:['processeur','cpu'], expl:'Il exécute les instructions.' },
      { q:'Petite roue qui entraîne une grande roue → la grande tourne…', choix:['plus vite','moins vite','pareil','en sens inverse uniquement'], sol:1, expl:'Moins vite mais avec plus de force.' },
      { q:'Charbon, pétrole et gaz sont des énergies…', choix:['renouvelables','fossiles','propres','solaires'], sol:1, expl:'Non renouvelables, émettrices de CO₂.' }
    ]}
  ]
},

/* ===================== BLOC 5 — Objectif brevet I (3e · maths & lettres) ===================== */
{
  id:'bloc5', titre:'Bloc 5 — Objectif brevet I', sousTitre:'Maths & lettres · 3ᵉ',
  lecons:[
    { id:'l1', titre:'Thalès & trigonométrie', matiereKey:'maths', questions:[
      { q:'Thalès exige des droites…', choix:['perpendiculaires','parallèles','égales','courbes'], sol:1, expl:'+ points alignés.' },
      { q:'AD=2, AB=6, AE=3, (DE)//(BC). AC = ?', saisie:['9'], expl:'2/6 = 3/AC → AC = 9.' },
      { q:'Pour prouver que deux droites sont parallèles, on utilise…', choix:['Thalès direct','la réciproque de Thalès','Pythagore','le produit en croix'], sol:1, expl:'Rapports égaux + points alignés dans le même ordre.' },
      { q:'cos(60°) = ?', choix:['0','0,5','1','60'], sol:1, expl:'À connaître.' },
      { q:'cos = adjacent ÷ …', saisie:['hypotenuse','hypoténuse'], expl:'CAH : cos = adj/hyp.' },
      { q:'Pour trouver un angle, on utilise la touche…', choix:['cos','cos⁻¹','π','x²'], sol:1, expl:'cos⁻¹, sin⁻¹ ou tan⁻¹.' }
    ]},
    { id:'l2', titre:'Calcul littéral & systèmes', matiereKey:'maths', questions:[
      { q:'Développe (x+3)(x−2).', choix:['x²+x−6','x²−x−6','x²−6','x²+5x−6'], sol:0, expl:'x²−2x+3x−6.' },
      { q:'Factorise x² − 9.', choix:['(x−3)(x+3)','(x−9)(x+1)','(x−3)²','x(x−9)'], sol:0, expl:'a²−b² = (a−b)(a+b).' },
      { q:'(a+b)² = ?', choix:['a²+b²','a²+2ab+b²','a²−2ab+b²','2a+2b'], sol:1, expl:'Identité remarquable.' },
      { q:'{x+y=10 ; x−y=4} → x = ?', saisie:['7'], expl:'2x = 14 → x = 7 (et y = 3).' },
      { q:'√50 se simplifie en…', choix:['5√2','2√5','25√2','√25'], sol:0, expl:'√(25×2) = 5√2.' },
      { q:'√49 = ?', saisie:['7'], expl:'7² = 49.' }
    ]},
    { id:'l3', titre:'Fonctions', matiereKey:'maths', questions:[
      { q:'f(x) = 2x + 1. Image de 3 ?', saisie:['7'], expl:'2×3+1 = 7.' },
      { q:'f(x) = 2x + 1. Antécédent de 5 ?', saisie:['2'], expl:'2x+1 = 5 → x = 2.' },
      { q:'Une fonction affine s’écrit…', choix:['ax','ax + b','x²','a/x'], sol:1, expl:'f(x) = ax + b (droite).' },
      { q:'Une fonction linéaire traduit une situation de…', saisie:['proportionnalite','proportionnalité'], expl:'f(x) = ax, droite par l’origine.' },
      { q:'Dans f(x) = 3x + 2, l’ordonnée à l’origine est…', choix:['3','2','x','5'], sol:1, expl:'b = 2 = f(0).' }
    ]},
    { id:'l4', titre:'Statistiques & probabilités', matiereKey:'maths', questions:[
      { q:'Moyenne de 4 ; 6 ; 8 ; 10 ; 12 ?', saisie:['8'], expl:'40 ÷ 5 = 8.' },
      { q:'Avant de chercher la médiane, il faut…', choix:['additionner','ranger les valeurs','arrondir','multiplier'], sol:1, expl:'Série ordonnée obligatoire.' },
      { q:'Étendue de la série 4…12 ?', saisie:['8'], expl:'12 − 4 = 8.' },
      { q:'P(obtenir 6) avec un dé équilibré ?', choix:['1/2','1/6','1/3','6'], sol:1, expl:'1 cas sur 6.' },
      { q:'P(ne pas faire 6) = ?', choix:['1/6','5/6','1/2','0'], sol:1, expl:'1 − 1/6 = 5/6 (événement contraire).' },
      { q:'La somme des probabilités de toutes les issues vaut…', saisie:['1'], expl:'Toujours 1.' }
    ]},
    { id:'l5', titre:'Volumes, grandeurs & algorithmique', matiereKey:'maths', questions:[
      { q:'Volume d’un cylindre = ?', choix:['aire de base × hauteur','(base×h)÷3','4/3 πR³','2πR'], sol:0, expl:'Pyramide/cône : ÷3 ; boule : 4/3πR³.' },
      { q:'Si on double les dimensions (k=2), le volume est ×…', saisie:['8'], expl:'k³ = 2³ = 8.' },
      { q:'150 km en 2 h → vitesse ?', choix:['50 km/h','75 km/h','100 km/h','300 km/h'], sol:1, expl:'150 ÷ 2 = 75 km/h.' },
      { q:'De m/s vers km/h, on multiplie par…', saisie:['3.6','3,6'], expl:'×3,6.' },
      { q:'PGCD(24 ; 36) = ?', saisie:['12'], expl:'24/36 = 2/3 après division par 12.' },
      { q:'« Répéter 4 fois [avancer 100, tourner 90°] » trace un…', saisie:['carre','carré'], expl:'Un carré de côté 100.' },
      { q:'L’angle au centre vaut … l’angle inscrit (même arc)', choix:['la moitié de','le double de','le triple de','autant que'], sol:1, expl:'Angle au centre = 2 × angle inscrit.' }
    ]},
    { id:'l6', titre:'Grammaire de 3ᵉ', matiereKey:'francais', questions:[
      { q:'« parce que » introduit une subordonnée de…', choix:['temps','cause','but','lieu'], sol:1, expl:'Cause.' },
      { q:'Combien de propositions dans « Je révise quand je peux » ?', saisie:['2','deux'], expl:'2 verbes conjugués = 2 propositions.' },
      { q:'« Les fleurs que j’ai ___ » (cueillir)', choix:['cueilli','cueillie','cueillies','cueillis'], sol:2, expl:'COD « que » (les fleurs) placé avant → accord.' },
      { q:'« Elles sont ___ » (partir)', saisie:['parties'], expl:'Avec être → accord avec le sujet.' },
      { q:'« Il dit qu’il partait le lendemain » est au discours…', choix:['direct','indirect'], sol:1, expl:'Subordonnée en « que », pronoms et temps transposés.' },
      { q:'« Je veux que tu ___ là » (être)', choix:['es','sois','seras','serais'], sol:1, expl:'Volonté + « que » → subjonctif.' }
    ]},
    { id:'l7', titre:'Textes & rédaction', matiereKey:'francais', questions:[
      { q:'Une thèse est défendue par des…', saisie:['arguments','argument'], expl:'Arguments illustrés d’exemples.' },
      { q:'Convaincre fait appel à…', choix:['les émotions','la raison','la peur','la musique'], sol:1, expl:'Persuader = émotions ; convaincre = raison.' },
      { q:'Au brevet, il faut garder 10 minutes pour…', choix:['dessiner','la relecture','compter les mots','recopier'], sol:1, expl:'La qualité de la langue compte au barème.' },
      { q:'Balzac, Maupassant, Zola appartiennent au…', choix:['romantisme','réalisme/naturalisme','surréalisme','classicisme'], sol:1, expl:'Peindre la société telle qu’elle est.' },
      { q:'Le narrateur qui sait tout de tous est…', choix:['interne','externe','omniscient','témoin'], sol:2, expl:'Point de vue omniscient.' },
      { q:'Le registre qui suscite la pitié est le…', saisie:['pathetique','pathétique'], expl:'Pathétique.' },
      { q:'Dans l’autobiographie, auteur = narrateur = …', choix:['lecteur','personnage principal','éditeur','héros fictif'], sol:1, expl:'Pacte autobiographique.' }
    ]}
  ]
},

/* ===================== BLOC 6 — Objectif brevet II (3e · sciences & monde) ===================== */
{
  id:'bloc6', titre:'Bloc 6 — Objectif brevet II', sousTitre:'Sciences & monde · 3ᵉ',
  examenParLecon:2, examenTitre:'Examen final du parcours',
  lecons:[
    { id:'l1', titre:'ADN & hérédité', matiereKey:'svt', questions:[
      { q:'L’information génétique se trouve dans…', choix:['la membrane','le cytoplasme','le noyau','le sang'], sol:2, expl:'Portée par les chromosomes.' },
      { q:'L’espèce humaine possède … chromosomes', saisie:['46'], expl:'23 paires.' },
      { q:'Les versions d’un même gène sont des…', saisie:['alleles','allèles','allele','allèle'], expl:'Ex. A, B, O pour le groupe sanguin.' },
      { q:'Un gamète humain contient…', choix:['46 chromosomes','23 chromosomes','92 chromosomes','12 chromosomes'], sol:1, expl:'La moitié ; la fécondation redonne 46.' },
      { q:'XX correspond à…', choix:['un garçon','une fille'], sol:1, expl:'XX = fille, XY = garçon.' },
      { q:'Les vrais jumeaux ont un patrimoine génétique…', choix:['différent','identique'], sol:1, expl:'Même cellule-œuf.' }
    ]},
    { id:'l2', titre:'Évolution, immunité & climat', matiereKey:'svt', questions:[
      { q:'Le moteur de l’évolution (Darwin) est la sélection…', saisie:['naturelle'], expl:'Les mieux adaptés se reproduisent plus.' },
      { q:'Les restes d’êtres vivants dans les roches sont des…', saisie:['fossiles','fossile'], expl:'Preuves de l’évolution.' },
      { q:'Un antibiotique agit contre…', choix:['les virus','les bactéries','les deux','aucun'], sol:1, expl:'Inefficace contre les virus.' },
      { q:'Le vaccin crée une…', choix:['infection','mémoire immunitaire','allergie','mutation'], sol:1, expl:'Prévention grâce à la mémoire immunitaire.' },
      { q:'Les anticorps sont produits par les…', choix:['globules rouges','globules blancs','plaquettes','neurones'], sol:1, expl:'Défense de l’organisme.' },
      { q:'La météo est à court terme, le climat sur…', choix:['une semaine','un mois','le long terme (≈30 ans)','un jour'], sol:2, expl:'Climat = moyennes longues.' }
    ]},
    { id:'l3', titre:'pH, énergie & forces', matiereKey:'physique', questions:[
      { q:'pH = 2 → la solution est…', choix:['basique','neutre','acide'], sol:2, expl:'pH < 7 = acide.' },
      { q:'Diluer un acide fait ___ son pH', choix:['baisser','monter vers 7','disparaître','doubler'], sol:1, expl:'La dilution rapproche de 7.' },
      { q:'Une solution acide contient beaucoup d’ions…', choix:['HO⁻','H⁺','Na⁺','Cl⁻'], sol:1, expl:'H⁺ (les basiques : HO⁻).' },
      { q:'Poids d’un objet de 2 kg (g = 10 N/kg) ?', saisie:['20','20n','20 n'], expl:'P = m × g = 20 N.' },
      { q:'Sur la Lune, la masse d’un objet…', choix:['diminue','augmente','ne change pas'], sol:2, expl:'La masse est invariable ; le poids change.' },
      { q:'E = P × t. Radiateur de 2 kW pendant 3 h → ?', choix:['5 kWh','6 kWh','1,5 kWh','8 kWh'], sol:1, expl:'2 × 3 = 6 kWh.' }
    ]},
    { id:'l4', titre:'Guerres mondiales & totalitarismes', matiereKey:'histoire', questions:[
      { q:'La Première Guerre mondiale : …-1918', saisie:['1914'], expl:'1914-1918.' },
      { q:'La bataille de Verdun a lieu en…', choix:['1914','1916','1918','1939'], sol:1, expl:'1916, symbole des tranchées.' },
      { q:'L’armistice est signé le…', choix:['11 novembre 1918','8 mai 1945','14 juillet 1789','6 juin 1944'], sol:0, expl:'11 novembre 1918.' },
      { q:'Le régime totalitaire soviétique est dirigé par…', saisie:['staline'], expl:'Parti unique, goulag, propagande.' },
      { q:'Hitler arrive au pouvoir en…', saisie:['1933'], expl:'Chancelier en janvier 1933.' },
      { q:'Les lois de Nuremberg (1935) privent les Juifs de…', choix:['travail seulement','leur citoyenneté et leurs droits','leurs maisons seulement','rien'], sol:1, expl:'Exclusion de la nation.' }
    ]},
    { id:'l5', titre:'2GM, Shoah & Guerre froide', matiereKey:'histoire', questions:[
      { q:'Le Débarquement de Normandie a lieu le…', choix:['6 juin 1944','8 mai 1945','1er sept. 1939','11 nov. 1918'], sol:0, expl:'6 juin 1944.' },
      { q:'La « Solution finale » est décidée à la conférence de…', choix:['Versailles','Wannsee','Munich','Yalta'], sol:1, expl:'Janvier 1942.' },
      { q:'Environ … millions de Juifs sont assassinés pendant la Shoah', choix:['2','4','6','10'], sol:2, expl:'≈ 6 millions.' },
      { q:'Auschwitz-Birkenau est un camp…', choix:['de vacances','d’extermination','militaire','de réfugiés'], sol:1, expl:'Mise à mort industrielle.' },
      { q:'Pendant la Guerre froide, le bloc de l’Ouest est mené par…', choix:['l’URSS','les États-Unis','la Chine','la France'], sol:1, expl:'USA (OTAN) vs URSS (Varsovie).' },
      { q:'Le Mur de Berlin tombe en…', saisie:['1989'], expl:'9 novembre 1989.' }
    ]},
    { id:'l6', titre:'France & monde depuis 1945', matiereKey:'histoire', questions:[
      { q:'Les femmes obtiennent le droit de vote en…', saisie:['1944'], expl:'1944 (premier vote en 1945).' },
      { q:'La Sécurité sociale est créée en…', choix:['1936','1945','1958','1975'], sol:1, expl:'Programme du CNR.' },
      { q:'Les congés payés datent du Front populaire, en…', saisie:['1936'], expl:'2 semaines + semaine de 40 h.' },
      { q:'La Vᵉ République naît en…', choix:['1946','1958','1962','1968'], sol:1, expl:'Avec De Gaulle.' },
      { q:'L’Inde devient indépendante en 1947 grâce à la lutte non violente de…', saisie:['gandhi'], expl:'Voie négociée (l’Algérie : guerre 1954-62).' },
      { q:'Le traité de Maastricht (1992) crée…', choix:['la CECA','la CEE','l’Union européenne','l’ONU'], sol:2, expl:'La dimension politique de l’Europe.' },
      { q:'Après 1991, le monde devient…', choix:['bipolaire','multipolaire','unipolaire pour toujours','sans conflits'], sol:1, expl:'Montée de nouvelles puissances.' }
    ]},
    { id:'l7', titre:'La France : territoires', matiereKey:'geographie', questions:[
      { q:'Plus de 8 Français sur 10 vivent dans une aire…', saisie:['urbaine'], expl:'Ville-centre + banlieue + couronne périurbaine.' },
      { q:'L’aire urbaine = ville-centre + banlieue + …', choix:['campagne','couronne périurbaine','montagne','littoral'], sol:1, expl:'Les trois composantes.' },
      { q:'Le secteur le plus dynamique en France est…', choix:['l’agriculture','l’industrie','les services','la pêche'], sol:2, expl:'Dont le tourisme (1ʳᵉ destination mondiale).' },
      { q:'La « diagonale du vide » désigne des espaces de…', choix:['forte densité','faible densité','littoraux','montagnes uniquement'], sol:1, expl:'Espaces peu peuplés du Nord-Est au Sud-Ouest.' },
      { q:'Un technopôle associe entreprises et…', choix:['plages','recherche/universités','mines','ports de pêche'], sol:1, expl:'Ex. Sophia-Antipolis.' },
      { q:'Sophia-Antipolis est un exemple de…', choix:['station balnéaire','technopôle','ZEE','bidonville'], sol:1, expl:'Espace productif high-tech.' }
    ]},
    { id:'l8', titre:'La France : UE, outre-mer & monde', matiereKey:'geographie', questions:[
      { q:'L’Union européenne compte … États', saisie:['27'], expl:'27 États membres.' },
      { q:'L’espace de libre circulation sans contrôle aux frontières est…', choix:['l’ONU','Schengen','l’OTAN','l’euro'], sol:1, expl:'Espace Schengen.' },
      { q:'Grâce aux Outre-mer, la France a la 2ᵉ … du monde', choix:['population','ZEE','armée','superficie terrestre'], sol:1, expl:'Zone économique exclusive.' },
      { q:'La base spatiale française est à Kourou, en…', saisie:['guyane'], expl:'Lancement des fusées Ariane.' },
      { q:'Aménager le territoire vise à réduire les…', saisie:['inegalites','inégalités'], expl:'Entre territoires dynamiques et fragiles.' },
      { q:'La ville mondiale française est…', saisie:['paris'], expl:'Fonctions de commandement mondial.' }
    ]},
    { id:'l9', titre:'République & institutions', matiereKey:'emc', questions:[
      { q:'La devise de la République est…', choix:['Liberté, Égalité, Fraternité','Paix et Justice','Dieu et Patrie','Unie dans la diversité'], sol:0, expl:'Les trois valeurs.' },
      { q:'La loi de laïcité date de…', saisie:['1905'], expl:'Séparation des Églises et de l’État.' },
      { q:'La République est indivisible, laïque, démocratique et…', saisie:['sociale'], expl:'Article 1 de la Constitution.' },
      { q:'Le président est élu pour…', choix:['4 ans','5 ans','7 ans','10 ans'], sol:1, expl:'5 ans, au suffrage universel direct.' },
      { q:'Le Parlement = Assemblée nationale + …', saisie:['senat','sénat'], expl:'Les deux chambres votent la loi.' },
      { q:'Qui vote les lois ?', choix:['le président','le Parlement','les juges','les maires'], sol:1, expl:'Pouvoir législatif.' }
    ]},
    { id:'l10', titre:'Citoyenneté & engagement', matiereKey:'emc', questions:[
      { q:'On peut voter à partir de…', choix:['16 ans','18 ans','21 ans','25 ans'], sol:1, expl:'18 ans.' },
      { q:'Le recensement est obligatoire à…', saisie:['16','16 ans'], expl:'Puis Journée Défense et Citoyenneté.' },
      { q:'Avant de partager une info, il faut vérifier…', choix:['le nombre de likes','la source, l’auteur, la date','la longueur','les emojis'], sol:1, expl:'Esprit critique contre les fake news.' },
      { q:'La citoyenneté européenne … la nationalité', choix:['remplace','s’ajoute à','supprime','contredit'], sol:1, expl:'Elle s’y ajoute.' },
      { q:'Le développement durable concilie économie, société et…', saisie:['environnement'], expl:'Les trois piliers.' },
      { q:'Au collège, l’élève engagé pour l’environnement est l’…', choix:['arbitre','éco-délégué','surveillant','tuteur'], sol:1, expl:'Éco-délégué.' }
    ]},
    { id:'l11', titre:'Technologie de 3ᵉ', matiereKey:'techno', questions:[
      { q:'Améliorer un objet existant et le diffuser, c’est une…', choix:['invention','innovation','copie','réparation'], sol:1, expl:'Invention = nouveau ; innovation = amélioration diffusée.' },
      { q:'« Si température < 19° alors chauffer » est une…', saisie:['condition'], expl:'Structure si… alors… (avec un capteur).' },
      { q:'Concevoir un objet en 3D sur logiciel, c’est la…', choix:['PAO','CAO','VOD','CNC'], sol:1, expl:'Conception Assistée par Ordinateur.' },
      { q:'Le premier exemplaire test d’un objet est le…', saisie:['prototype'], expl:'Souvent imprimé en 3D.' },
      { q:'Un objet connecté combine capteurs, traitement et…', choix:['essence','internet','papier','vapeur'], sol:1, expl:'Il échange des données en ligne.' },
      { q:'Extraction → fabrication → transport → utilisation → fin de vie : c’est le…', choix:['recyclage','cycle de vie','commerce','circuit court'], sol:1, expl:'Le cycle de vie du produit.' }
    ]}
  ]
}
];

/* ============================================================
   Construction du chemin complet :
   1) découpe les leçons manuelles en mini-leçons de 3 questions ;
   2) génère un nœud « Révision » par fiche (questions terme ↔ définition
      créées à partir des notions de la fiche) ;
   3) entrelace le tout et construit l'examen de bloc (échantillonné).
   ============================================================ */
(function(){
  var F = window.FICHES || [];

  /* 2) leçons auto générées depuis les fiches : 2 questions par notion
        (définition → terme ET terme → définition), toutes les notions. */
  function tronc(s){ s=(s||'').replace(/<[^>]+>/g,''); return s.length>110 ? s.slice(0,107)+'…' : s; }
  function fichesLecons(matieres, niveaux){
    var pool = F.filter(function(f){ return matieres.indexOf(f.matiereKey)>=0 && niveaux.indexOf(f.niveau)>=0; });
    return pool.map(function(f, fi){
      var notions = (f.contenu && f.contenu.notions) || [];
      var autres = F.filter(function(g){ return g.matiereKey===f.matiereKey && g!==f && g.contenu && g.contenu.notions && g.contenu.notions.length; });
      var qs = [];
      function fabrique(n, i, sens){   // sens 0 : terme→définition ; sens 1 : définition→terme
        var bonne = sens ? n.terme : tronc(n.def);
        var dist = [];
        notions.forEach(function(m){
          if(m!==n){ var v = sens ? m.terme : tronc(m.def); if(v!==bonne && dist.indexOf(v)<0) dist.push(v); }
        });
        var k=1;
        while(dist.length<3 && autres.length && k<=12){
          var g = autres[(fi+k)%autres.length]; k++;
          var gn = g.contenu.notions[(fi+i)%g.contenu.notions.length];
          var v2 = sens ? gn.terme : tronc(gn.def);
          if(v2!==bonne && dist.indexOf(v2)<0) dist.push(v2);
        }
        dist = dist.slice(0,3);
        if(dist.length<2) return;                       // pas assez de distracteurs → on saute
        var pos = (fi+i+sens) % (dist.length+1);
        var choix = dist.slice(); choix.splice(pos,0,bonne);
        qs.push(sens
          ? { q:'Quel terme correspond à : « '+tronc(n.def)+' » ?', choix:choix, sol:pos, expl:'Fiche « '+f.titre+' » : '+n.terme+' — '+tronc(n.def) }
          : { q:'Que signifie « '+n.terme+' » ? ('+f.titre+')', choix:choix, sol:pos, expl:'Fiche « '+f.titre+' » : '+n.terme+' — '+tronc(n.def) });
      }
      notions.forEach(function(n,i){ fabrique(n,i,0); });          // toutes : terme → définition
      notions.forEach(function(n,i){ fabrique(n,i+notions.length,1); }); // puis : définition → terme
      if(qs.length < 4) return null;
      var tirage = Math.min(6, qs.length);
      // pool = banc complet ; à chaque tentative, l'appli tire `tirage` questions au hasard
      return { id:'f-'+f.id, titre:'Révision : '+f.titre, matiereKey:f.matiereKey,
               pool: qs, tirage: tirage, questions: qs.slice(0, tirage), fiche: f.id };
    }).filter(Boolean);
  }

  /* 3) entrelacement : 2 mini-leçons, puis 1 révision de fiche, etc. */
  function meler(minis, fiches){
    var out=[], i=0, j=0;
    while(i<minis.length || j<fiches.length){
      if(i<minis.length) out.push(minis[i++]);
      if(j<fiches.length) out.push(fiches[j++]);
      if(j<fiches.length) out.push(fiches[j++]);
    }
    return out;
  }

  var PLAN = {
    bloc1:{ mat:['maths','francais','svt'],                                niv:['6e','5e'] },
    bloc2:{ mat:['physique','histoire','geographie','emc','techno'],       niv:['6e','5e'] },
    bloc3:{ mat:['maths','francais','svt'],                                niv:['4e'] },
    bloc4:{ mat:['physique','histoire','geographie','emc','techno'],       niv:['4e'] },
    bloc5:{ mat:['maths','francais'],                                      niv:['3e'] },
    bloc6:{ mat:['svt','physique','histoire','geographie','emc','techno'], niv:['3e'] }
  };

  window.PARCOURS.forEach(function(b){
    var plan = PLAN[b.id] || { mat:[], niv:[] };
    var fiches = fichesLecons(plan.mat, plan.niv);
    var manuelles = b.lecons;
    b.lecons = meler(manuelles, fiches);

    /* leçons manuelles : questions « extra » du même thème (banc des fiches de la matière) —
       à chaque tentative, ~1/3 du quiz est remplacé par des questions différentes */
    manuelles.forEach(function(l){
      var lie = fiches.filter(function(f){ return f.matiereKey === l.matiereKey; });
      var ex = [];
      lie.forEach(function(f){ ex = ex.concat(f.pool); });
      if(ex.length) l.extra = ex;
    });

    /* examen : banc = toutes les questions du bloc ; tirage aléatoire à chaque tentative */
    var cap = b.id==='bloc6' ? 20 : 14;
    var banc = [];
    b.lecons.forEach(function(l){ banc = banc.concat(l.pool || l.questions); });
    b.examen = {
      titre: b.examenTitre || ('Examen — ' + b.titre.replace(/ —.*$/,'').trim()),
      pool: banc, tirage: cap, questions: banc.slice(0, cap)
    };
  });
})();
