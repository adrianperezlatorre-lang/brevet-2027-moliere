window.FICHES = (window.FICHES || []).concat([
{
  id:'svt-adn-genetique', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'ADN, chromosomes et information génétique',
  motsCles:['adn','chromosome','gène','noyau','caryotype','allèle','information génétique','cellule'],
  contenu:{
    objectifs:['Situer l’information génétique dans la cellule.','Relier gène, allèle et caractère.'],
    notions:[
      {terme:'Chromosome', def:'structure du noyau portant l’information génétique ; 23 paires chez l’humain.'},
      {terme:'ADN', def:'molécule qui constitue les chromosomes et porte les gènes.'},
      {terme:'Gène', def:'portion d’ADN responsable d’un caractère.'},
      {terme:'Allèle', def:'version différente d’un même gène.'}
    ],
    essentiel:'<p>L’<b>information génétique</b> est dans le <b>noyau</b> des cellules, portée par les <b>chromosomes</b> faits d’<b>ADN</b>. Chaque <b>gène</b> commande un caractère et existe en plusieurs <b>allèles</b>.</p>',
    exemple:'<p>Le gène du groupe sanguin existe en allèles A, B et O.</p>',
    retenir:'Ordre d’emboîtement : <b>cellule → noyau → chromosome → ADN → gène</b>.'
  }
},
{
  id:'svt-herdite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'La transmission des caractères héréditaires',
  motsCles:['hérédité','gamète','fécondation','méiose','cellule-œuf','23 chromosomes','reproduction sexuée'],
  contenu:{
    objectifs:['Comprendre la transmission des chromosomes.','Expliquer la diversité des individus.'],
    notions:[
      {terme:'Cellule reproductrice (gamète)', def:'spermatozoïde ou ovule ; contient 23 chromosomes.'},
      {terme:'Fécondation', def:'union des deux gamètes → cellule-œuf à 46 chromosomes.'},
      {terme:'Brassage', def:'chaque gamète est unique → enfants tous différents.'}
    ],
    essentiel:'<p>Lors de la <b>reproduction sexuée</b>, chaque parent transmet <b>la moitié</b> de ses chromosomes via un <b>gamète</b>. La <b>fécondation</b> réunit ces moitiés : l’enfant a un patrimoine <b>unique</b>.</p>',
    retenir:'23 + 23 = <b>46 chromosomes</b> : moitié du père, moitié de la mère.'
  }
},
{
  id:'svt-evolution', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'L’évolution des êtres vivants',
  motsCles:['évolution','sélection naturelle','darwin','espèce','fossile','ancêtre commun','mutation','biodiversité'],
  contenu:{
    objectifs:['Comprendre le mécanisme de l’évolution.','Utiliser les fossiles comme preuves.'],
    notions:[
      {terme:'Évolution', def:'transformation des espèces au cours du temps.'},
      {terme:'Sélection naturelle', def:'les individus les mieux adaptés survivent et se reproduisent davantage.'},
      {terme:'Ancêtre commun', def:'espèces parentes qui partagent un ancêtre.'}
    ],
    essentiel:'<p>Les espèces <b>évoluent</b> au fil du temps. Sous l’effet de la <b>sélection naturelle</b>, les caractères <b>avantageux</b> se transmettent. Les <b>fossiles</b> témoignent de cette histoire de la vie.</p>',
    retenir:'Évolution = <b>variation</b> + <b>sélection naturelle</b> sur de longues durées.'
  }
},
{
  id:'svt-biodiversite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'La biodiversité et ses crises',
  motsCles:['biodiversité','extinction','crise biologique','écosystème','espèces','dinosaures','environnement'],
  contenu:{
    objectifs:['Définir la biodiversité.','Comprendre les crises et l’impact humain.'],
    notions:[
      {terme:'Biodiversité', def:'ensemble des espèces, des gènes et des écosystèmes.'},
      {terme:'Crise biologique', def:'disparition massive d’espèces (ex. fin des dinosaures, −66 Ma).'},
      {terme:'Impact humain', def:'destruction des milieux, pollution, réchauffement → érosion de la biodiversité.'}
    ],
    essentiel:'<p>La <b>biodiversité</b> a varié au cours des temps, avec de grandes <b>crises</b> suivies de renouvellements. Aujourd’hui, l’<b>activité humaine</b> accélère la disparition des espèces.</p>',
    retenir:'La biodiversité se mesure à <b>3 niveaux</b> : <b>gènes, espèces, écosystèmes</b>.'
  }
},
{
  id:'svt-systeme-nerveux', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Le système nerveux : de la stimulation au mouvement',
  motsCles:['nerf','cerveau','neurone','message nerveux','organe des sens','réflexe','moelle épinière'],
  contenu:{
    objectifs:['Décrire le trajet d’un message nerveux.','Comprendre la commande du mouvement.'],
    notions:[
      {terme:'Récepteur', def:'organe des sens qui capte un stimulus (œil, peau…).'},
      {terme:'Nerf', def:'conduit le message nerveux vers/depuis le centre nerveux.'},
      {terme:'Centre nerveux', def:'cerveau et moelle épinière ; traitent l’information.'},
      {terme:'Effecteur', def:'muscle qui exécute la réponse (mouvement).'}
    ],
    essentiel:'<p>Un <b>stimulus</b> est capté par un <b>récepteur</b>, transformé en <b>message nerveux</b> transmis par les <b>nerfs</b> jusqu’au <b>cerveau</b>, qui commande une <b>réponse</b> (mouvement d’un muscle).</p>',
    retenir:'Trajet : <b>récepteur → nerf → centre nerveux → nerf → muscle</b>.'
  }
},
{
  id:'svt-immunite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'Le sang et le système immunitaire',
  motsCles:['immunité','microbe','anticorps','globules blancs','vaccin','antigène','défense','infection'],
  contenu:{
    objectifs:['Comprendre les défenses de l’organisme.','Distinguer vaccination et antibiotique.'],
    notions:[
      {terme:'Micro-organismes', def:'bactéries, virus… pouvant provoquer des maladies.'},
      {terme:'Globules blancs', def:'cellules du sang qui défendent l’organisme (phagocytose, anticorps).'},
      {terme:'Vaccin', def:'prépare le corps à réagir vite grâce à la mémoire immunitaire.'},
      {terme:'Antibiotique', def:'médicament qui détruit les bactéries (inefficace sur les virus).'}
    ],
    essentiel:'<p>Le corps se défend contre les <b>micro-organismes</b> grâce aux <b>globules blancs</b> qui produisent des <b>anticorps</b>. La <b>vaccination</b> est une protection préventive ; les <b>antibiotiques</b> soignent les infections bactériennes.</p>',
    retenir:'Antibiotique = <b>bactéries</b> ; il est <b>inutile contre un virus</b>.'
  }
},
{
  id:'svt-reproduction', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'La reproduction humaine et les hormones',
  motsCles:['puberté','hormone','cycle','ovule','spermatozoïde','contraception','reproduction'],
  contenu:{
    objectifs:['Comprendre les changements de la puberté.','Connaître le rôle des hormones.'],
    notions:[
      {terme:'Puberté', def:'ensemble des transformations menant à la capacité de se reproduire.'},
      {terme:'Hormone', def:'message chimique transporté par le sang qui agit sur des organes.'},
      {terme:'Cycle', def:'chez la femme, fonctionnement rythmé des ovaires et de l’utérus (~28 jours).'}
    ],
    essentiel:'<p>À la <b>puberté</b>, sous l’effet des <b>hormones</b>, l’appareil reproducteur devient fonctionnel. Chez la femme, un <b>cycle</b> prépare une éventuelle grossesse ; la <b>contraception</b> permet de la maîtriser.</p>',
    retenir:'Une <b>hormone</b> voyage par le <b>sang</b> et agit à distance sur un organe cible.'
  }
},
{
  id:'svt-digestion', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La digestion et la nutrition',
  motsCles:['digestion','nutriment','tube digestif','enzyme','absorption','intestin','aliments'],
  contenu:{
    objectifs:['Décrire le trajet des aliments.','Comprendre le passage des nutriments dans le sang.'],
    notions:[
      {terme:'Digestion', def:'transformation des aliments en nutriments assimilables.'},
      {terme:'Enzymes', def:'substances qui découpent les aliments (dans la salive, l’estomac…).'},
      {terme:'Absorption', def:'passage des nutriments dans le sang au niveau de l’intestin grêle.'}
    ],
    essentiel:'<p>Les aliments parcourent le <b>tube digestif</b> et sont transformés en <b>nutriments</b> grâce aux <b>enzymes</b>. Ces nutriments passent dans le <b>sang</b> (absorption intestinale) pour nourrir les organes.</p>',
    retenir:'L’<b>absorption</b> a lieu dans l’<b>intestin grêle</b> (riche en villosités).'
  }
},
{
  id:'svt-tectonique', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'La tectonique des plaques',
  motsCles:['plaque','séisme','volcan','dorsale','subduction','lithosphère','magma'],
  contenu:{
    objectifs:['Expliquer les mouvements des plaques.','Relier plaques, séismes et volcans.'],
    notions:[
      {terme:'Plaques', def:'grands morceaux de la lithosphère qui se déplacent lentement.'},
      {terme:'Limites', def:'zones où les plaques s’écartent (dorsales) ou se rapprochent (subduction).'},
      {terme:'Conséquences', def:'séismes et volcans se concentrent aux frontières de plaques.'}
    ],
    essentiel:'<p>La surface de la Terre est découpée en <b>plaques</b> mobiles. Leurs mouvements provoquent l’essentiel des <b>séismes</b> et du <b>volcanisme</b>, localisés à leurs <b>frontières</b>.</p>',
    retenir:'Séismes et volcans se répartissent surtout <b>aux limites des plaques</b> (ceinture de feu du Pacifique).'
  }
},
{
  id:'svt-volcans-seismes', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Séismes et éruptions volcaniques',
  motsCles:['séisme','magnitude','faille','volcan','lave','éruption','risque','aléa'],
  contenu:{
    objectifs:['Expliquer l’origine des séismes et éruptions.','Distinguer aléa et risque.'],
    notions:[
      {terme:'Séisme', def:'libération brutale d’énergie le long d’une faille → secousses.'},
      {terme:'Éruption', def:'remontée de magma ; effusive (lave fluide) ou explosive.'},
      {terme:'Risque', def:'aléa (phénomène) × enjeux (population, bâtiments).'}
    ],
    essentiel:'<p>Les <b>séismes</b> naissent de ruptures dans les roches ; les <b>éruptions</b> de la remontée du <b>magma</b>. Le <b>risque</b> dépend du danger <b>et</b> de la présence humaine ; on s’en protège par la prévention.</p>',
    retenir:'<b>Risque = aléa × enjeux</b> : prévoir et construire pour limiter les dégâts.'
  }
},
{
  id:'svt-respiration', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La respiration et les échanges gazeux',
  motsCles:['respiration','poumon','dioxygène','dioxyde de carbone','alvéole','sang','échanges gazeux'],
  contenu:{
    objectifs:['Comprendre les échanges gazeux respiratoires.','Relier respiration et besoins des organes.'],
    notions:[
      {terme:'Respiration', def:'l’organisme absorbe du dioxygène (O₂) et rejette du dioxyde de carbone (CO₂).'},
      {terme:'Alvéoles', def:'petits sacs des poumons où se font les échanges avec le sang.'},
      {terme:'Rôle du sang', def:'transporte O₂ vers les organes et ramène le CO₂ aux poumons.'}
    ],
    essentiel:'<p>Au niveau des <b>alvéoles pulmonaires</b>, le sang se charge en <b>dioxygène</b> et se décharge en <b>dioxyde de carbone</b>. Le sang distribue ensuite l’O₂ aux <b>organes</b> qui en ont besoin.</p>',
    retenir:'Échange : le sang <b>prend l’O₂</b> et <b>rejette le CO₂</b> dans les poumons.'
  }
},
{
  id:'svt-microscope', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'La cellule et le microscope',
  motsCles:['cellule','microscope','membrane','noyau','cytoplasme','unité du vivant','observation'],
  contenu:{
    objectifs:['Décrire l’organisation d’une cellule.','Savoir utiliser un microscope.'],
    notions:[
      {terme:'Cellule', def:'unité de base de tous les êtres vivants.'},
      {terme:'Parties', def:'membrane (limite), cytoplasme (contenu), noyau (commande, chez beaucoup).'},
      {terme:'Microscope', def:'instrument qui grossit pour observer les cellules.'}
    ],
    essentiel:'<p>Tous les êtres vivants sont faits de <b>cellules</b>. Grâce au <b>microscope</b>, on observe leur organisation : <b>membrane</b>, <b>cytoplasme</b> et <b>noyau</b>.</p>',
    retenir:'La <b>cellule</b> est l’<b>unité du vivant</b> ; le grossissement = oculaire × objectif.'
  }
},
{
  id:'svt-climat', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'Météo, climats et changement climatique',
  motsCles:['climat','météo','effet de serre','réchauffement','co2','gaz à effet de serre','changement climatique'],
  contenu:{
    objectifs:['Distinguer météo et climat.','Comprendre le réchauffement climatique.'],
    notions:[
      {terme:'Météo', def:'état de l’atmosphère à court terme et en un lieu donné.'},
      {terme:'Climat', def:'conditions moyennes sur une longue durée et une grande région.'},
      {terme:'Effet de serre', def:'certains gaz (CO₂…) retiennent la chaleur ; leur excès réchauffe la planète.'}
    ],
    essentiel:'<p>Le <b>climat</b> se mesure sur le <b>long terme</b>, la <b>météo</b> au jour le jour. Les activités humaines augmentent les <b>gaz à effet de serre</b>, ce qui provoque un <b>réchauffement climatique</b>.</p>',
    retenir:'Le <b>CO₂</b> issu des énergies fossiles renforce l’<b>effet de serre</b> → réchauffement.'
  }
},
{
  id:'svt-peuplement', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Reproduction et peuplement des milieux',
  motsCles:['reproduction sexuée','reproduction asexuée','peuplement','graine','spore','colonisation','milieu'],
  contenu:{
    objectifs:['Distinguer reproduction sexuée et asexuée.','Comprendre comment les espèces occupent un milieu.'],
    notions:[
      {terme:'Reproduction sexuée', def:'nécessite deux cellules reproductrices → descendants variés.'},
      {terme:'Reproduction asexuée', def:'un seul individu → descendants identiques (bouture, division).'},
      {terme:'Peuplement', def:'les milieux sont colonisés grâce aux graines, spores, œufs, déplacements.'}
    ],
    essentiel:'<p>Les êtres vivants se reproduisent de façon <b>sexuée</b> (diversité) ou <b>asexuée</b> (clones). Ils <b>colonisent</b> les milieux au fil des saisons grâce à divers modes de dispersion.</p>',
    retenir:'Sexuée = <b>descendants différents</b> ; asexuée = <b>descendants identiques</b>.'
  }
},
{
  id:'svt-photosynthese', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La production de matière : nutrition et photosynthèse',
  motsCles:['photosynthèse','matière organique','producteur','chlorophylle','nutrition','plante','co2','lumière'],
  contenu:{
    objectifs:['Comprendre comment les végétaux produisent leur matière.','Situer les végétaux dans les chaînes alimentaires.'],
    notions:[
      {terme:'Photosynthèse', def:'les plantes fabriquent leur matière à partir de CO₂, d’eau et de lumière.'},
      {terme:'Producteurs', def:'les végétaux verts, à la base des chaînes alimentaires.'},
      {terme:'Chlorophylle', def:'pigment vert qui capte la lumière.'}
    ],
    essentiel:'<p>Grâce à la <b>photosynthèse</b>, les <b>végétaux</b> produisent leur propre matière à partir de <b>lumière</b>, d’<b>eau</b> et de <b>CO₂</b>. Ce sont les <b>producteurs</b> dont dépendent tous les autres êtres vivants.</p>',
    retenir:'Seuls les <b>végétaux verts</b> produisent leur matière : ils sont à la <b>base</b> des chaînes alimentaires.'
  }
},
{
  id:'svt-circulation', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La circulation sanguine et le cœur',
  motsCles:['cœur','sang','artère','veine','circulation','organes','nutriments','dioxygène'],
  contenu:{
    objectifs:['Décrire la circulation du sang.','Comprendre le rôle du cœur.'],
    notions:[
      {terme:'Cœur', def:'muscle qui pompe le sang en se contractant.'},
      {terme:'Artères / veines', def:'les artères éloignent le sang du cœur, les veines le ramènent.'},
      {terme:'Rôle du sang', def:'apporter dioxygène et nutriments aux organes, évacuer les déchets.'}
    ],
    essentiel:'<p>Le <b>cœur</b> fait circuler le <b>sang</b> en boucle dans tout le corps. Le sang <b>distribue</b> le dioxygène et les nutriments aux <b>organes</b> et récupère leurs déchets.</p>',
    retenir:'<b>Artères = partent</b> du cœur ; <b>veines = reviennent</b> au cœur.'
  }
},
{
  id:'svt-effort', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Les muscles et l’effort physique',
  motsCles:['muscle','effort','fréquence cardiaque','respiration','énergie','entraînement','besoins'],
  contenu:{
    objectifs:['Comprendre les besoins de l’organisme à l’effort.','Relier effort, cœur et respiration.'],
    notions:[
      {terme:'Effort', def:'les muscles consomment plus de dioxygène et de nutriments.'},
      {terme:'Adaptations', def:'le rythme cardiaque et respiratoire augmentent pour fournir plus d’O₂.'},
      {terme:'Entraînement', def:'améliore les performances et la récupération.'}
    ],
    essentiel:'<p>Lors d’un <b>effort</b>, les <b>muscles</b> ont besoin de plus d’<b>énergie</b> et de <b>dioxygène</b>. Le corps s’adapte : le <b>cœur</b> et la <b>respiration</b> accélèrent.</p>',
    retenir:'À l’effort : <b>fréquence cardiaque</b> et <b>respiratoire augmentent</b> pour nourrir les muscles.'
  }
},
{
  id:'svt-alimentation', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Alimentation équilibrée et santé',
  motsCles:['alimentation','équilibre alimentaire','nutriments','besoins','santé','obésité','énergie','apports'],
  contenu:{
    objectifs:['Comprendre les besoins alimentaires.','Relier alimentation et santé.'],
    notions:[
      {terme:'Groupes d’aliments', def:'chacun apporte des nutriments différents (protéines, glucides, lipides, vitamines).'},
      {terme:'Équilibre alimentaire', def:'apports adaptés aux besoins (âge, activité).'},
      {terme:'Risques', def:'un déséquilibre favorise carences ou maladies (obésité, diabète).'}
    ],
    essentiel:'<p>Une <b>alimentation équilibrée</b> apporte tous les <b>nutriments</b> nécessaires, en quantités adaptées aux <b>besoins</b>. Un mauvais équilibre nuit à la <b>santé</b>.</p>',
    retenir:'Équilibre = <b>variété</b> + quantités adaptées à l’<b>activité physique</b>.'
  }
},
{
  id:'svt-classification', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Classer les êtres vivants',
  motsCles:['classification','espèce','groupes emboîtés','caractères','parenté','biodiversité','vertébrés'],
  contenu:{
    objectifs:['Classer un être vivant selon ses caractères.','Comprendre les groupes emboîtés.'],
    notions:[
      {terme:'Classification', def:'regrouper les êtres vivants selon leurs caractères communs.'},
      {terme:'Groupes emboîtés', def:'chaque groupe est inclus dans un plus grand (ex. vertébrés ⊃ mammifères).'},
      {terme:'Parenté', def:'des caractères communs révèlent un ancêtre commun.'}
    ],
    essentiel:'<p>On <b>classe</b> les êtres vivants d’après leurs <b>caractères communs</b>, en <b>groupes emboîtés</b>. Cette classification traduit des liens de <b>parenté</b> et l’histoire évolutive.</p>',
    retenir:'On classe par <b>ce que les êtres vivants ont</b>, pas par ce qu’ils n’ont pas.'
  }
},
{
  id:'svt-chaines-alimentaires', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'Chaînes et réseaux alimentaires',
  motsCles:['chaîne alimentaire','réseau alimentaire','producteur','consommateur','prédateur','maillon','écosystème'],
  contenu:{
    objectifs:['Construire une chaîne alimentaire.','Comprendre les relations dans un milieu.'],
    notions:[
      {terme:'Chaîne alimentaire', def:'suite d’êtres vivants qui se mangent (« est mangé par »).'},
      {terme:'Producteurs', def:'les végétaux, au début de la chaîne.'},
      {terme:'Consommateurs', def:'animaux qui mangent d’autres êtres vivants.'}
    ],
    essentiel:'<p>Dans un milieu, les êtres vivants sont reliés par des <b>relations alimentaires</b>. Une <b>chaîne alimentaire</b> commence toujours par un <b>végétal</b> (producteur) ; plusieurs chaînes forment un <b>réseau</b>.</p>',
    exemple:'<p>Herbe → sauterelle → grenouille → couleuvre.</p>',
    retenir:'La flèche « → » se lit « <b>est mangé par</b> » ; tout part des <b>végétaux</b>.'
  }
},
{
  id:'svt-sol-recyclage', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Le sol et le recyclage de la matière',
  motsCles:['sol','décomposeur','matière organique','humus','recyclage','ver de terre','champignon','micro-organisme'],
  contenu:{
    objectifs:['Comprendre le recyclage de la matière.','Connaître le rôle des décomposeurs.'],
    notions:[
      {terme:'Matière organique', def:'restes d’êtres vivants (feuilles mortes, cadavres).'},
      {terme:'Décomposeurs', def:'vers, champignons, bactéries qui transforment cette matière.'},
      {terme:'Recyclage', def:'la matière est transformée en éléments réutilisables par les plantes.'}
    ],
    essentiel:'<p>Dans le <b>sol</b>, les <b>décomposeurs</b> transforment la <b>matière organique</b> morte en éléments minéraux. Cette matière est ainsi <b>recyclée</b> et sert de nouveau aux végétaux.</p>',
    retenir:'Rien ne se perd : les <b>décomposeurs</b> recyclent la matière dans le sol.'
  }
},
{
  id:'svt-squelette-muscles', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Squelette, muscles et articulations',
  motsCles:['squelette','muscle','articulation','os','tendon','mouvement','levier','locomotion'],
  contenu:{
    objectifs:['Décrire ce qui permet le mouvement du corps.','Comprendre le rôle des articulations.'],
    notions:[
      {terme:'Squelette', def:'ensemble des os qui soutient le corps.'},
      {terme:'Articulation', def:'zone de contact entre deux os qui permet le mouvement.'},
      {terme:'Muscles', def:'reliés aux os par des tendons, ils se contractent pour produire le mouvement.'}
    ],
    essentiel:'<p>Le <b>mouvement</b> repose sur le <b>squelette</b>, les <b>articulations</b> et les <b>muscles</b>. En se contractant, un muscle tire sur l’<b>os</b> par un <b>tendon</b> et provoque le mouvement.</p>',
    retenir:'Muscle contracté = il <b>tire</b> sur l’os (il ne pousse jamais) ; les muscles agissent par paires.'
  }
},
{
  id:'svt-erosion-paysages', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'L’érosion et l’évolution des paysages',
  motsCles:['érosion','paysage','roche','eau','transport','sédiment','altération','géologie'],
  contenu:{
    objectifs:['Comprendre comment évolue un paysage.','Décrire les étapes de l’érosion.'],
    notions:[
      {terme:'Érosion', def:'usure des roches par l’eau, le vent, le gel, la végétation.'},
      {terme:'Transport', def:'les débris (sédiments) sont emportés, souvent par l’eau.'},
      {terme:'Sédimentation', def:'les débris se déposent plus loin et forment de nouvelles roches.'}
    ],
    essentiel:'<p>Les <b>paysages</b> évoluent lentement sous l’effet de l’<b>érosion</b> : les roches sont <b>altérées</b>, les débris <b>transportés</b> par l’eau puis <b>déposés</b> ailleurs.</p>',
    retenir:'Trois étapes : <b>altération → transport → sédimentation</b>.'
  }
},
{
  id:'svt-reproduction-plantes', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'La reproduction des plantes à fleurs',
  motsCles:['fleur','pollinisation','fruit','graine','pollen','fécondation','abeille','reproduction végétale'],
  contenu:{
    objectifs:['Comprendre la reproduction des plantes à fleurs.','Connaître le rôle de la pollinisation.'],
    notions:[
      {terme:'Pollinisation', def:'transport du pollen (par le vent ou les insectes) vers le pistil.'},
      {terme:'Fécondation', def:'union du pollen et de l’ovule → formation d’une graine.'},
      {terme:'Fruit', def:'issu de la transformation de la fleur ; il protège les graines.'}
    ],
    essentiel:'<p>La <b>fleur</b> est l’organe de reproduction. Après la <b>pollinisation</b> et la <b>fécondation</b>, elle se transforme en <b>fruit</b> contenant des <b>graines</b> qui donneront de nouvelles plantes.</p>',
    retenir:'Fleur → pollinisation → fécondation → <b>fruit + graines</b>.'
  }
}
]);
