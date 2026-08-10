window.FICHES = (window.FICHES || []).concat([
{
  id:'svt-adn-genetique', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'ADN, chromosomes et information génétique',
  motsCles:['adn','chromosome','gène','noyau','caryotype','allèle','information génétique','cellule','mutation','génome'],
  contenu:{
    objectifs:['Localiser l’information génétique dans la cellule.','Relier cellule, noyau, chromosome, ADN, gène et allèle.','Comprendre l’origine de la diversité des individus.'],
    notions:[
      {terme:'Noyau', def:'partie de la cellule qui contient l’information génétique et commande son fonctionnement.'},
      {terme:'Chromosome', def:'structure formée d’ADN enroulé ; l’espèce humaine en possède 23 paires (46 au total), dont la 23ᵉ détermine le sexe (XX = fille, XY = garçon).'},
      {terme:'Caryotype', def:'photographie classée des chromosomes d’une cellule ; il permet de repérer une anomalie (ex. trisomie 21 = un chromosome 21 en trop).'},
      {terme:'ADN', def:'molécule en forme de double hélice, support universel de l’information génétique chez tous les êtres vivants.'},
      {terme:'Gène', def:'portion d’ADN qui détermine un caractère héréditaire.'},
      {terme:'Allèle', def:'version différente d’un même gène ; un allèle peut être dominant (il s’exprime toujours) ou récessif (seulement s’il est en double).'},
      {terme:'Mutation', def:'modification de l’ADN ; source de nouveaux allèles et de diversité.'}
    ],
    essentiel:'<p>Toutes les cellules d’un individu possèdent la même <b>information génétique</b>, située dans le <b>noyau</b>, portée par les <b>chromosomes</b> constitués d’<b>ADN</b>. Cet ADN est un « programme » écrit avec un langage universel : c’est pourquoi on peut le comparer d’une espèce à l’autre.</p><p>Chaque <b>gène</b> commande un caractère (couleur des yeux, groupe sanguin…) et existe sous plusieurs <b>allèles</b>. Comme chaque individu possède deux exemplaires de chaque chromosome (un du père, un de la mère), il possède <b>deux allèles</b> par gène. Selon qu’ils sont <b>dominants</b> ou <b>récessifs</b>, le caractère observé (phénotype) varie.</p><p>Les <b>mutations</b> (modifications de l’ADN) créent de nouveaux allèles : elles sont à l’origine de la <b>diversité</b> des individus et, sur de longues durées, de l’évolution.</p>',
    exemple:'<p>Groupe sanguin : le gène existe sous les allèles A, B (dominants) et O (récessif). Un individu « A//O » est de groupe A car A domine O ; il faut « O//O » pour être du groupe O.</p>',
    retenir:'Emboîtement : <b>cellule → noyau → chromosome → ADN → gène → allèle</b>. Espèce humaine : <b>46 chromosomes</b> (23 paires) ; 23ᵉ paire = sexe (XX / XY).'
  }
},
{
  id:'svt-herdite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'La transmission des caractères héréditaires',
  motsCles:['hérédité','gamète','fécondation','cellule-œuf','23 chromosomes','reproduction sexuée','brassage','jumeaux','dominant','récessif'],
  contenu:{
    objectifs:['Comprendre la transmission des chromosomes des parents à l’enfant.','Expliquer la diversité et la ressemblance familiale.'],
    notions:[
      {terme:'Gamètes', def:'cellules reproductrices (spermatozoïde chez l’homme, ovule chez la femme) ne contenant que 23 chromosomes (moitié de l’information).'},
      {terme:'Fécondation', def:'union d’un spermatozoïde et d’un ovule qui forme la cellule-œuf à 46 chromosomes, première cellule du nouvel individu.'},
      {terme:'Brassage génétique', def:'lors de la formation des gamètes, les chromosomes se répartissent au hasard : chaque gamète est unique.'},
      {terme:'Caractère héréditaire', def:'transmis par les gènes (couleur des yeux) ; à distinguer d’un caractère acquis (bronzage, cicatrice).'}
    ],
    essentiel:'<p>Lors de la <b>reproduction sexuée</b>, chaque parent transmet <b>la moitié</b> de son information génétique par un <b>gamète</b> (23 chromosomes). La <b>fécondation</b> réunit les deux moitiés : l’enfant obtient 46 chromosomes, donc <b>un allèle de chaque parent</b> pour chaque gène.</p><p>Comme la répartition des chromosomes dans les gamètes se fait <b>au hasard</b> et qu’un homme produit des millions de spermatozoïdes tous différents, chaque enfant reçoit une <b>combinaison unique</b> d’allèles. Cela explique à la fois les <b>ressemblances</b> avec les parents et le fait que les frères et sœurs soient <b>différents</b>.</p><p>Cas particulier : les <b>vrais jumeaux</b> proviennent d’une même cellule-œuf → ils ont le même patrimoine génétique.</p>',
    exemple:'<p>Un enfant peut avoir les yeux bleus alors que ses parents ont les yeux marron : chacun portait un allèle « bleu » récessif, transmis ensemble à l’enfant (bleu//bleu).</p>',
    retenir:'23 (père) + 23 (mère) = <b>46 chromosomes</b>. Le <b>brassage</b> au hasard explique que les enfants soient tous différents (sauf vrais jumeaux).'
  }
},
{
  id:'svt-evolution', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'L’évolution des êtres vivants',
  motsCles:['évolution','sélection naturelle','Darwin','espèce','fossile','ancêtre commun','mutation','adaptation','variabilité'],
  contenu:{
    objectifs:['Expliquer le mécanisme de la sélection naturelle.','Utiliser fossiles et parentés comme preuves de l’évolution.'],
    notions:[
      {terme:'Évolution', def:'transformation des espèces au cours des temps géologiques (millions d’années).'},
      {terme:'Variabilité', def:'au sein d’une espèce, les individus présentent des différences (dues aux mutations et au brassage).'},
      {terme:'Sélection naturelle', def:'dans un milieu donné, les individus les mieux adaptés survivent et se reproduisent davantage : leurs allèles deviennent plus fréquents au fil des générations.'},
      {terme:'Ancêtre commun', def:'des espèces qui partagent des caractères descendent d’un même ancêtre (ex. tous les vertébrés ont un squelette interne).'},
      {terme:'Fossiles', def:'restes ou traces d’êtres vivants du passé, conservés dans les roches ; ils montrent que des espèces ont disparu et que d’autres sont apparues.'}
    ],
    essentiel:'<p>Les espèces ne sont pas fixes : elles <b>évoluent</b>. Le moteur principal est la <b>sélection naturelle</b>, décrite par Charles <b>Darwin</b>. Comme les individus d’une même espèce sont <b>variés</b> (variabilité génétique), certains possèdent des caractères plus <b>avantageux</b> dans leur milieu (mieux se nourrir, échapper aux prédateurs, résister au froid).</p><p>Ces individus survivent mieux et se reproduisent davantage : ils transmettent leurs allèles avantageux. Génération après génération, ces caractères deviennent plus fréquents : l’espèce <b>s’adapte</b> à son milieu. Si un milieu change, les caractères sélectionnés changent aussi.</p><p>Les preuves de l’évolution sont les <b>fossiles</b> (histoire des espèces passées), les <b>ressemblances anatomiques</b> (mêmes os dans le bras humain, l’aile d’oiseau, la nageoire) et les similitudes de l’<b>ADN</b> entre espèces proches.</p>',
    exemple:'<p>Phalène du bouleau : lors de la pollution industrielle, les papillons foncés, mieux camouflés sur les troncs noircis, ont été moins mangés par les oiseaux et sont devenus majoritaires.</p>',
    retenir:'Évolution = <b>variabilité (mutations)</b> + <b>sélection naturelle</b> sur de très longues durées. Fossiles et ADN sont des preuves.'
  }
},
{
  id:'svt-biodiversite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'La biodiversité et ses crises',
  motsCles:['biodiversité','extinction','crise biologique','écosystème','espèces','dinosaures','activité humaine','gènes','espèces invasives'],
  contenu:{
    objectifs:['Définir la biodiversité à ses trois niveaux.','Comprendre les crises passées et l’érosion actuelle.'],
    notions:[
      {terme:'Biodiversité', def:'diversité du vivant à trois niveaux : diversité des écosystèmes, diversité des espèces et diversité génétique (des gènes) au sein d’une espèce.'},
      {terme:'Écosystème', def:'ensemble formé par un milieu et les êtres vivants qui y vivent et interagissent.'},
      {terme:'Crise biologique', def:'disparition massive et rapide d’un grand nombre d’espèces ; la Terre en a connu cinq grandes.'},
      {terme:'Espèce invasive', def:'espèce introduite par l’Homme qui se développe au détriment des espèces locales.'}
    ],
    essentiel:'<p>La <b>biodiversité</b> désigne toute la richesse du vivant, à <b>trois niveaux</b> : les milieux (écosystèmes), les espèces, et les gènes à l’intérieur de chaque espèce. Elle rend des services essentiels : pollinisation, épuration de l’eau, fertilité des sols, ressources alimentaires.</p><p>Au cours des temps géologiques, la biodiversité a beaucoup <b>varié</b> : cinq grandes <b>crises</b> ont fait disparaître de nombreuses espèces (ex. la disparition des <b>dinosaures</b> il y a ~66 millions d’années). Après chaque crise, de nouvelles espèces se sont diversifiées.</p><p>Aujourd’hui, l’<b>activité humaine</b> provoque une <b>érosion rapide</b> de la biodiversité. Les causes principales sont : la <b>destruction des habitats</b>, la <b>pollution</b>, le <b>réchauffement climatique</b>, la <b>surexploitation</b> (chasse, pêche) et les <b>espèces invasives</b>. Protéger la biodiversité (réserves, gestes durables) est un enjeu majeur.</p>',
    exemple:'<p>La disparition des abeilles (pesticides, maladies) menace la pollinisation de nombreuses plantes cultivées, donc notre alimentation.</p>',
    retenir:'Biodiversité = <b>3 niveaux</b> (écosystèmes, espèces, gènes). L’humain est aujourd’hui la principale cause de son déclin.'
  }
},
{
  id:'svt-systeme-nerveux', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Le système nerveux : de la stimulation au mouvement',
  motsCles:['nerf','cerveau','neurone','message nerveux','récepteur','effecteur','moelle épinière','synapse','réflexe','drogues'],
  contenu:{
    objectifs:['Décrire le trajet d’un message nerveux.','Comprendre la commande d’un mouvement et les dangers pour ce système.'],
    notions:[
      {terme:'Récepteur sensoriel', def:'organe des sens (œil, oreille, peau…) qui détecte un stimulus et crée un message nerveux.'},
      {terme:'Message nerveux', def:'signal de nature électrique qui circule dans les nerfs, toujours dans un seul sens.'},
      {terme:'Nerfs', def:'câbles reliant récepteurs, centres nerveux et muscles ; nerfs sensitifs (vers le centre) et moteurs (vers les muscles).'},
      {terme:'Centres nerveux', def:'cerveau (analyse, décisions volontaires) et moelle épinière (réflexes) ; ils reçoivent, traitent l’information et commandent la réponse.'},
      {terme:'Neurone', def:'cellule nerveuse ; les neurones communiquent entre eux au niveau des synapses grâce à des messagers chimiques.'},
      {terme:'Effecteur', def:'muscle qui exécute la réponse (le mouvement).'}
    ],
    essentiel:'<p>Face à un <b>stimulus</b>, un <b>récepteur sensoriel</b> crée un <b>message nerveux</b> (électrique). Ce message est transmis par un <b>nerf sensitif</b> jusqu’à un <b>centre nerveux</b> (cerveau ou moelle épinière). Le centre analyse l’information et élabore une réponse, transmise par un <b>nerf moteur</b> jusqu’au <b>muscle</b> (effecteur) qui se contracte : c’est le mouvement.</p><p>Le trajet complet est donc : <b>récepteur → nerf sensitif → centre nerveux → nerf moteur → muscle</b>. Les neurones communiquent entre eux au niveau des <b>synapses</b>. Certains mouvements sont <b>volontaires</b> (commandés par le cerveau), d’autres sont des <b>réflexes</b> (très rapides, gérés par la moelle épinière, ex. retirer sa main d’une source de chaleur).</p><p>Ce système est <b>fragile</b> : l’<b>alcool</b>, les <b>drogues</b>, la <b>fatigue</b> ou un choc ralentissent la transmission des messages, augmentent le temps de réaction et peuvent provoquer des accidents. Le port du casque protège le cerveau.</p>',
    exemple:'<p>Au volant, l’alcool allonge le temps de réaction : la distance parcourue avant de freiner augmente fortement.</p>',
    retenir:'Trajet : <b>récepteur → nerf → centre nerveux → nerf → muscle</b>. Alcool, drogues et fatigue <b>allongent le temps de réaction</b>.'
  }
},
{
  id:'svt-immunite', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'Le sang et le système immunitaire',
  motsCles:['immunité','micro-organisme','anticorps','globules blancs','vaccin','antibiotique','antigène','phagocytose','lymphocyte','mémoire'],
  contenu:{
    objectifs:['Comprendre comment l’organisme se défend contre les microbes.','Distinguer vaccination et traitement antibiotique.'],
    notions:[
      {terme:'Micro-organismes', def:'bactéries, virus, champignons ; ceux qui provoquent des maladies sont dits pathogènes.'},
      {terme:'Contamination / infection', def:'contamination = entrée du microbe dans le corps ; infection = sa multiplication.'},
      {terme:'Phagocytose', def:'des globules blancs (phagocytes) « avalent » et digèrent les microbes ; réaction rapide et générale.'},
      {terme:'Lymphocytes', def:'globules blancs spécifiques : les lymphocytes B produisent des anticorps, les lymphocytes T détruisent les cellules infectées.'},
      {terme:'Anticorps', def:'molécules qui se fixent précisément sur un microbe (son antigène) pour le neutraliser.'},
      {terme:'Mémoire immunitaire', def:'après un premier contact, l’organisme réagit plus vite et plus fort lors d’un second contact.'}
    ],
    essentiel:'<p>La <b>peau</b> et les <b>muqueuses</b> forment une première barrière contre les microbes. Si un microbe pénètre, l’organisme réagit d’abord par la <b>phagocytose</b> (des globules blancs détruisent le microbe) : c’est une défense rapide et non spécifique.</p><p>Si cela ne suffit pas, une réponse plus lente et <b>spécifique</b> se met en place grâce aux <b>lymphocytes</b> : les lymphocytes B fabriquent des <b>anticorps</b> adaptés au microbe, les lymphocytes T détruisent les cellules infectées. Après la guérison, une <b>mémoire immunitaire</b> subsiste.</p><p>La <b>vaccination</b> exploite cette mémoire : on introduit un microbe inoffensif (ou une partie) pour que le corps fabrique des anticorps et garde la mémoire, sans être malade → il est protégé (immunisé). Les <b>antibiotiques</b>, eux, sont des médicaments qui <b>détruisent les bactéries</b> ; ils sont <b>inefficaces contre les virus</b>. Le VIH (SIDA) attaque justement les lymphocytes et affaiblit les défenses.</p>',
    exemple:'<p>Le vaccin contre le tétanos fait produire des anticorps à l’avance : en cas de blessure, le corps réagit immédiatement.</p>',
    retenir:'Défenses : <b>phagocytose</b> (rapide) puis <b>anticorps/lymphocytes</b> (spécifiques). Vaccin = <b>préventif</b> (mémoire) ; antibiotique = contre les <b>bactéries</b>, jamais les virus.'
  }
},
{
  id:'svt-reproduction', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'La reproduction humaine et les hormones',
  motsCles:['puberté','hormone','cycle','ovule','spermatozoïde','ovulation','règles','contraception','IST','organe cible'],
  contenu:{
    objectifs:['Comprendre les transformations de la puberté.','Expliquer le rôle des hormones et le cycle féminin.'],
    notions:[
      {terme:'Puberté', def:'ensemble des transformations (déclenchées par des hormones) qui rendent l’appareil reproducteur fonctionnel.'},
      {terme:'Hormone', def:'message chimique fabriqué par un organe, transporté par le sang, qui agit à distance sur un organe cible.'},
      {terme:'Gamètes', def:'spermatozoïdes (produits en continu par les testicules dès la puberté) et ovules (un libéré par cycle chez la femme).'},
      {terme:'Cycle menstruel', def:'d’environ 28 jours : les règles (règles = élimination de la muqueuse utérine) au début, l’ovulation vers le 14ᵉ jour.'},
      {terme:'Ovulation', def:'libération d’un ovule par un ovaire ; période de fécondité maximale.'},
      {terme:'Contraception', def:'méthodes empêchant la grossesse (pilule, préservatif…) ; le préservatif protège aussi des IST.'}
    ],
    essentiel:'<p>À la <b>puberté</b>, le cerveau commande la production d’<b>hormones</b> (par les ovaires et les testicules). Ces hormones, transportées par le <b>sang</b>, provoquent les changements du corps et rendent la reproduction possible : les testicules produisent des <b>spermatozoïdes</b>, les ovaires libèrent des <b>ovules</b>.</p><p>Chez la femme, le fonctionnement est <b>cyclique</b> (~28 jours) : au début, les <b>règles</b> (la muqueuse de l’utérus est éliminée) ; vers le milieu du cycle, l’<b>ovulation</b> ; puis l’utérus se prépare à accueillir un éventuel embryon. S’il y a <b>fécondation</b> (rencontre spermatozoïde + ovule), l’œuf s’implante dans l’utérus : c’est le début d’une grossesse.</p><p>La <b>contraception</b> permet de choisir d’avoir ou non un enfant. Le <b>préservatif</b> a un double rôle : contraception et protection contre les <b>IST</b> (infections sexuellement transmissibles, dont le VIH).</p>',
    exemple:'<p>La pilule contraceptive apporte des hormones qui bloquent l’ovulation : sans ovule libéré, la fécondation est impossible.</p>',
    retenir:'Une <b>hormone</b> voyage par le <b>sang</b> et agit sur un <b>organe cible</b>. Le <b>préservatif</b> protège à la fois de la grossesse et des <b>IST</b>.'
  }
},
{
  id:'svt-digestion', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La digestion et la nutrition',
  motsCles:['digestion','nutriment','tube digestif','enzyme','absorption','intestin grêle','villosités','estomac','glucose'],
  contenu:{
    objectifs:['Décrire le trajet et la transformation des aliments.','Comprendre le passage des nutriments dans le sang.'],
    notions:[
      {terme:'Tube digestif', def:'bouche → œsophage → estomac → intestin grêle → gros intestin ; les aliments non digérés forment les excréments.'},
      {terme:'Digestion mécanique', def:'broyage des aliments par les dents et brassage par l’estomac.'},
      {terme:'Digestion chimique', def:'action des enzymes (dans la salive, l’estomac, l’intestin) qui découpent les aliments en petites molécules.'},
      {terme:'Nutriments', def:'petites molécules issues de la digestion (glucose, acides aminés, acides gras…) utilisables par les cellules.'},
      {terme:'Absorption', def:'passage des nutriments à travers la paroi de l’intestin grêle vers le sang.'}
    ],
    essentiel:'<p>Les aliments parcourent le <b>tube digestif</b>. Ils subissent d’abord une <b>digestion mécanique</b> (mastication, brassage) puis une <b>digestion chimique</b> grâce aux <b>enzymes</b> qui les découpent en <b>nutriments</b> (molécules simples comme le glucose).</p><p>Ces nutriments sont ensuite <b>absorbés</b> au niveau de l’<b>intestin grêle</b>, dont la paroi couverte de <b>villosités</b> offre une très grande surface d’échange. Ils passent dans le <b>sang</b>, qui les distribue à toutes les cellules de l’organisme pour les nourrir et leur fournir de l’énergie.</p><p>Ce qui n’est pas digéré ni absorbé continue vers le <b>gros intestin</b> et forme les déchets. Une alimentation variée apporte tous les nutriments nécessaires.</p>',
    exemple:'<p>Un morceau de pain (amidon) est découpé par des enzymes en <b>glucose</b>, absorbé par l’intestin puis distribué aux muscles comme source d’énergie.</p>',
    retenir:'Digestion = <b>mécanique + chimique (enzymes)</b> → nutriments. L’<b>absorption</b> se fait dans l’<b>intestin grêle</b> (villosités).'
  }
},
{
  id:'svt-tectonique', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'La tectonique des plaques',
  motsCles:['plaque','séisme','volcan','dorsale','subduction','lithosphère','manteau','Wegener','montagne','ceinture de feu'],
  contenu:{
    objectifs:['Décrire la structure de la Terre et les mouvements des plaques.','Relier les plaques aux séismes, volcans et montagnes.'],
    notions:[
      {terme:'Structure de la Terre', def:'de l’extérieur vers l’intérieur : croûte, manteau, noyau.'},
      {terme:'Lithosphère', def:'couche externe rigide (croûte + haut du manteau), découpée en plaques.'},
      {terme:'Plaques tectoniques', def:'grands morceaux rigides qui se déplacent lentement (quelques cm/an) sur une couche plus souple.'},
      {terme:'Dorsale (divergence)', def:'limite où deux plaques s’écartent ; du magma remonte et crée de la nouvelle croûte océanique.'},
      {terme:'Subduction (convergence)', def:'limite où une plaque plonge sous une autre ; à l’origine de séismes puissants et de volcans.'},
      {terme:'Collision', def:'deux plaques continentales se rencontrent et forment des chaînes de montagnes (ex. Himalaya, Alpes).'}
    ],
    essentiel:'<p>La Terre est formée de couches : une <b>croûte</b> superficielle, un <b>manteau</b> épais et un <b>noyau</b> central. La partie externe rigide, la <b>lithosphère</b>, est découpée en <b>plaques</b> qui se déplacent de quelques centimètres par an, portées par les mouvements du manteau.</p><p>Aux <b>frontières</b> des plaques, trois situations existent : les plaques <b>s’écartent</b> (dorsales océaniques, création de croûte), se <b>rapprochent</b> (subduction : une plaque plonge sous l’autre) ou <b>entrent en collision</b> (formation de montagnes). C’est là que se concentrent l’essentiel des <b>séismes</b> et du <b>volcanisme</b>.</p><p>Cette théorie prolonge l’idée de la <b>dérive des continents</b> proposée par Alfred <b>Wegener</b> (formes des côtes qui s’emboîtent, mêmes fossiles et mêmes roches de part et d’autre de l’Atlantique).</p>',
    exemple:'<p>La « <b>ceinture de feu</b> » du Pacifique concentre la majorité des volcans et séismes du monde : elle correspond aux limites de plaques (subductions).</p>',
    retenir:'Séismes, volcans et montagnes se situent aux <b>limites des plaques</b>. Trois types de limites : <b>écartement</b> (dorsale), <b>subduction</b>, <b>collision</b>.'
  }
},
{
  id:'svt-volcans-seismes', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Le volcanisme et les séismes',
  motsCles:['volcan','magma','lave','éruption effusive','éruption explosive','séisme','faille','foyer','épicentre','magnitude','risque','aléa'],
  contenu:{
    objectifs:['Distinguer les deux types de volcanisme.','Expliquer l’origine des séismes.','Comprendre la notion de risque et la prévention.'],
    notions:[
      {terme:'Magma', def:'roche fondue, riche en gaz, contenue dans une chambre magmatique en profondeur.'},
      {terme:'Éruption effusive', def:'magma fluide et pauvre en gaz : la lave s’écoule en coulées (ex. Piton de la Fournaise, Hawaï). Peu explosive.'},
      {terme:'Éruption explosive', def:'magma visqueux et riche en gaz : il forme un bouchon qui explose, projetant cendres, blocs et nuées ardentes (ex. Vésuve, Montagne Pelée). Très dangereuse.'},
      {terme:'Produits émis', def:'lave, gaz, cendres et projections (bombes, blocs) ; les nuées ardentes sont mortelles.'},
      {terme:'Séisme', def:'vibrations du sol dues à la rupture brutale de roches en profondeur, le long d’une faille.'},
      {terme:'Foyer et épicentre', def:'le foyer est le lieu de la rupture en profondeur ; l’épicentre est le point de la surface juste au-dessus.'},
      {terme:'Magnitude', def:'mesure de l’énergie libérée par un séisme (échelle de Richter) ; l’intensité mesure les dégâts observés.'}
    ],
    essentiel:'<p>Un volcan est une ouverture par laquelle du <b>magma</b> (roche fondue riche en gaz) remonte depuis une <b>chambre magmatique</b>, à travers une <b>cheminée</b>, jusqu’au cratère. En surface, le magma dégazé devient de la <b>lave</b>.</p><p>Il existe deux grands types d’éruptions. Le volcanisme <b>effusif</b> émet un magma <b>fluide</b> et pauvre en gaz : la lave s’écoule en <b>coulées</b>, l’éruption est spectaculaire mais peu meurtrière. Le volcanisme <b>explosif</b> met en jeu un magma <b>visqueux</b> et riche en gaz : celui-ci forme un bouchon, la pression augmente puis <b>explose</b>, projetant cendres, blocs et surtout des <b>nuées ardentes</b> (nuages brûlants) très dangereuses.</p><p>Les <b>séismes</b> ont une autre origine : sous l’effet des mouvements des plaques, des <b>contraintes</b> s’accumulent dans les roches jusqu’à une <b>rupture brutale</b> le long d’une <b>faille</b>. L’énergie libérée au <b>foyer</b> se propage en <b>ondes sismiques</b> qui font trembler le sol ; l’<b>épicentre</b> subit les secousses les plus fortes. La <b>magnitude</b> mesure l’énergie du séisme.</p><p>Un <b>risque</b> naît quand un <b>aléa</b> (éruption, séisme) menace des <b>enjeux</b> (population, bâtiments). On s’en protège par la <b>prévention</b> : surveillance des volcans, constructions parasismiques, plans d’évacuation, information de la population.</p>',
    exemple:'<p>1902, Montagne Pelée (Martinique) : une éruption explosive et une <b>nuée ardente</b> détruisent la ville de Saint-Pierre en quelques minutes → volcanisme explosif = danger majeur.</p>',
    retenir:'Effusif = lave fluide qui coule ; explosif = gaz + magma visqueux → explosions et nuées ardentes. Séisme = rupture le long d’une <b>faille</b> (foyer → ondes → épicentre). <b>Risque = aléa × enjeux</b>.'
  }
},
{
  id:'svt-respiration', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La respiration et les échanges gazeux',
  motsCles:['respiration','poumon','dioxygène','dioxyde de carbone','alvéole','sang','ventilation','O2','CO2','tabac'],
  contenu:{
    objectifs:['Comprendre les échanges gazeux au niveau des poumons.','Relier respiration, sang et besoins des organes.'],
    notions:[
      {terme:'Ventilation', def:'entrée et sortie de l’air dans les poumons (inspiration / expiration).'},
      {terme:'Alvéoles pulmonaires', def:'minuscules sacs des poumons ; leur très grande surface et leur paroi fine permettent les échanges gazeux avec le sang.'},
      {terme:'Échanges gazeux', def:'le sang se charge en dioxygène (O₂) et se décharge en dioxyde de carbone (CO₂).'},
      {terme:'Rôle du sang', def:'transporte l’O₂ des poumons vers les organes, et ramène le CO₂ des organes vers les poumons.'}
    ],
    essentiel:'<p>En respirant, on fait entrer de l’air dans les <b>poumons</b> (ventilation). Au niveau des <b>alvéoles pulmonaires</b>, l’air est en contact étroit avec le sang à travers une paroi très fine : le sang se charge en <b>dioxygène</b> (O₂) et rejette du <b>dioxyde de carbone</b> (CO₂). C’est l’échange gazeux respiratoire.</p><p>Le <b>sang</b> distribue ensuite l’O₂ à tous les <b>organes</b>. Chaque organe utilise ce dioxygène pour « brûler » les nutriments (comme le glucose) et produire l’<b>énergie</b> dont il a besoin : c’est la respiration cellulaire, qui produit du CO₂ rejeté dans le sang.</p><p>Plus un organe est actif (ex. un muscle à l’effort), plus il consomme d’O₂. Le <b>tabac</b> encrasse et détruit les alvéoles, réduit les échanges et provoque des maladies graves (cancers, essoufflement).</p>',
    exemple:'<p>À l’effort, la respiration s’accélère pour apporter plus de dioxygène aux muscles qui en consomment davantage.</p>',
    retenir:'Dans les poumons, le sang <b>prend l’O₂</b> et <b>rejette le CO₂</b>. Les organes utilisent l’O₂ pour produire de l’énergie. Le tabac détruit les alvéoles.'
  }
},
{
  id:'svt-microscope', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'La cellule et le microscope',
  motsCles:['cellule','microscope','membrane','noyau','cytoplasme','unité du vivant','grossissement','végétale','animale'],
  contenu:{
    objectifs:['Décrire l’organisation d’une cellule.','Utiliser un microscope et calculer un grossissement.'],
    notions:[
      {terme:'Cellule', def:'unité de base qui constitue tous les êtres vivants ; certains êtres sont formés d’une seule cellule, d’autres de milliards.'},
      {terme:'Parties communes', def:'membrane (limite la cellule), cytoplasme (contenu gélatineux), noyau (commande, présent chez beaucoup de cellules).'},
      {terme:'Cellule végétale', def:'possède en plus une paroi rigide, des chloroplastes (verts) et une grande vacuole.'},
      {terme:'Grossissement', def:'grossissement total = grossissement de l’oculaire × grossissement de l’objectif.'}
    ],
    essentiel:'<p>Tous les êtres vivants sont constitués de <b>cellules</b> : c’est l’<b>unité du vivant</b>. Une cellule comporte généralement une <b>membrane</b> (sa limite), du <b>cytoplasme</b> (son contenu) et un <b>noyau</b> qui contient l’information génétique et commande la cellule.</p><p>Les cellules sont invisibles à l’œil nu : on les observe au <b>microscope</b>, qui grossit l’image. Les <b>cellules végétales</b> se distinguent des cellules animales par une <b>paroi</b> rigide, des <b>chloroplastes</b> (qui captent la lumière) et une grande <b>vacuole</b>.</p><p>Le <b>grossissement</b> obtenu se calcule en multipliant le grossissement de l’oculaire par celui de l’objectif utilisé.</p>',
    exemple:'<p>Oculaire ×10 et objectif ×40 → grossissement total = 10 × 40 = <b>×400</b> : la cellule apparaît 400 fois plus grande.</p>',
    retenir:'La <b>cellule</b> est l’<b>unité du vivant</b> : membrane, cytoplasme, noyau. Grossissement total = <b>oculaire × objectif</b>.'
  }
},
{
  id:'svt-climat', matiereKey:'svt', matiere:'SVT', niveau:'3e',
  titre:'Météo, climats et changement climatique',
  motsCles:['climat','météo','effet de serre','réchauffement','CO2','gaz à effet de serre','énergies fossiles','carottes de glace','conséquences'],
  contenu:{
    objectifs:['Distinguer météo et climat.','Comprendre l’effet de serre et le réchauffement d’origine humaine.'],
    notions:[
      {terme:'Météo', def:'état de l’atmosphère à court terme (jour, semaine) et en un lieu précis.'},
      {terme:'Climat', def:'conditions moyennes de l’atmosphère sur une longue durée (≥ 30 ans) et une grande région.'},
      {terme:'Effet de serre', def:'phénomène naturel : certains gaz (CO₂, méthane, vapeur d’eau) retiennent une partie de la chaleur et maintiennent la Terre habitable.'},
      {terme:'Gaz à effet de serre (GES)', def:'gaz responsables de l’effet de serre ; leur augmentation renforce le réchauffement.'},
      {terme:'Origine humaine', def:'combustion des énergies fossiles (charbon, pétrole, gaz), déforestation, élevage → hausse du CO₂.'}
    ],
    essentiel:'<p>Il ne faut pas confondre <b>météo</b> (temps qu’il fait aujourd’hui, à court terme) et <b>climat</b> (moyennes sur des dizaines d’années). L’<b>effet de serre</b> est un phénomène <b>naturel</b> indispensable : sans lui, la Terre serait gelée. Les <b>gaz à effet de serre</b> retiennent une partie de la chaleur reçue du Soleil.</p><p>Depuis l’industrialisation, les activités humaines (surtout la combustion des <b>énergies fossiles</b>) rejettent d’énormes quantités de <b>CO₂</b>. Cela <b>renforce</b> l’effet de serre et provoque un <b>réchauffement climatique</b> global, mesuré et prévu par les scientifiques.</p><p>Les <b>conséquences</b> sont nombreuses : fonte des glaciers, montée du niveau des mers, événements extrêmes (sécheresses, tempêtes), déplacements d’espèces. Les scientifiques reconstituent les climats passés grâce aux <b>carottes de glace</b> et confirment le rôle des GES.</p>',
    exemple:'<p>Les bulles d’air piégées dans les <b>carottes de glace</b> montrent que la température et la teneur en CO₂ ont évolué ensemble au cours du temps.</p>',
    retenir:'Ne pas confondre <b>météo</b> (court terme) et <b>climat</b> (long terme). Le <b>CO₂</b> des énergies fossiles renforce l’effet de serre → réchauffement.'
  }
},
{
  id:'svt-peuplement', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Reproduction et peuplement des milieux',
  motsCles:['reproduction sexuée','reproduction asexuée','peuplement','graine','spore','bouturage','colonisation','saisons','dispersion'],
  contenu:{
    objectifs:['Distinguer reproduction sexuée et asexuée.','Comprendre comment les espèces occupent et recolonisent un milieu.'],
    notions:[
      {terme:'Reproduction sexuée', def:'nécessite deux cellules reproductrices (mâle et femelle) ; les descendants sont variés.'},
      {terme:'Reproduction asexuée', def:'un seul individu suffit ; les descendants sont identiques (clones). Ex. bouturage, division, stolon des fraisiers.'},
      {terme:'Formes de résistance', def:'graines, bulbes, spores, œufs : elles permettent de survivre à l’hiver et de coloniser un milieu au printemps.'},
      {terme:'Dispersion', def:'transport des graines ou des jeunes par le vent, l’eau ou les animaux.'}
    ],
    essentiel:'<p>Les êtres vivants se reproduisent de deux façons. La <b>reproduction sexuée</b> fait intervenir deux parents et produit des descendants <b>tous différents</b> (source de diversité). La <b>reproduction asexuée</b> ne fait intervenir qu’un seul individu et produit des <b>clones identiques</b> (bouturage d’une plante, division d’une bactérie).</p><p>L’occupation d’un milieu (le <b>peuplement</b>) varie avec les <b>saisons</b>. Beaucoup d’espèces passent l’hiver sous des <b>formes de résistance</b> (graines, bulbes, œufs) qui redonnent des individus au printemps. Les jeunes ou les graines colonisent de nouveaux espaces grâce à la <b>dispersion</b> (vent, eau, animaux).</p>',
    exemple:'<p>Le fraisier se multiplie par <b>stolons</b> (tiges rampantes) : chaque nouveau plant est un clone du pied de départ (reproduction asexuée).</p>',
    retenir:'Sexuée = <b>descendants différents</b> (diversité) ; asexuée = <b>clones identiques</b>. Graines et spores permettent de résister et de coloniser.'
  }
},
{
  id:'svt-photosynthese', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La production de matière : nutrition et photosynthèse',
  motsCles:['photosynthèse','matière organique','producteur','chlorophylle','CO2','lumière','sels minéraux','dioxygène','respiration'],
  contenu:{
    objectifs:['Expliquer comment les végétaux produisent leur matière.','Situer les végétaux à la base des chaînes alimentaires.'],
    notions:[
      {terme:'Photosynthèse', def:'fabrication de matière organique par les végétaux verts, à partir d’eau, de CO₂ et de sels minéraux, en présence de lumière.'},
      {terme:'Chlorophylle', def:'pigment vert des feuilles qui capte l’énergie lumineuse.'},
      {terme:'Producteurs', def:'les végétaux verts fabriquent leur propre matière ; ils sont à la base de toutes les chaînes alimentaires.'},
      {terme:'Rejet de dioxygène', def:'la photosynthèse produit et libère du dioxygène (O₂) dans l’air.'}
    ],
    essentiel:'<p>Contrairement aux animaux, les <b>végétaux verts</b> fabriquent eux-mêmes leur matière : ce sont des <b>producteurs</b>. Grâce à la <b>chlorophylle</b> de leurs feuilles, ils captent l’énergie de la <b>lumière</b> et réalisent la <b>photosynthèse</b> : à partir d’<b>eau</b>, de <b>CO₂</b> (prélevé dans l’air) et de <b>sels minéraux</b> (prélevés dans le sol par les racines), ils produisent de la <b>matière organique</b> (comme le glucose) et rejettent du <b>dioxygène</b>.</p><p>La photosynthèse n’a lieu qu’à la <b>lumière</b>. Jour et nuit, la plante <b>respire</b> aussi (elle consomme de l’O₂ et rejette du CO₂), mais le jour la photosynthèse l’emporte largement.</p><p>Comme les végétaux sont les seuls à produire leur matière, tous les autres êtres vivants (herbivores, carnivores) en dépendent directement ou indirectement.</p>',
    exemple:'<p>Une plante placée à la lumière produit de l’amidon dans ses feuilles ; à l’obscurité, elle n’en produit pas → la lumière est indispensable à la photosynthèse.</p>',
    retenir:'Photosynthèse : eau + CO₂ + sels minéraux + <b>lumière</b> → matière organique + <b>O₂</b>. Les végétaux verts sont les <b>producteurs</b>, à la base des chaînes alimentaires.'
  }
},
{
  id:'svt-circulation', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'La circulation sanguine et le cœur',
  motsCles:['cœur','sang','artère','veine','capillaire','circulation','organes','fréquence cardiaque','double circulation'],
  contenu:{
    objectifs:['Décrire la circulation du sang dans le corps.','Comprendre le rôle du cœur et des vaisseaux.'],
    notions:[
      {terme:'Cœur', def:'muscle creux qui se contracte régulièrement pour propulser le sang ; c’est la « pompe » de la circulation.'},
      {terme:'Vaisseaux sanguins', def:'artères (partent du cœur), veines (reviennent au cœur), capillaires (minuscules vaisseaux au contact des organes).'},
      {terme:'Échanges', def:'au niveau des capillaires, le sang cède aux organes O₂ et nutriments, et récupère leurs déchets (CO₂).'},
      {terme:'Fréquence cardiaque', def:'nombre de battements du cœur par minute ; elle augmente à l’effort.'}
    ],
    essentiel:'<p>Le <b>cœur</b> est un muscle qui se contracte en permanence pour faire circuler le <b>sang</b> dans tout le corps, en boucle. Le sang quitte le cœur par les <b>artères</b>, circule jusqu’aux organes où il passe dans de fins <b>capillaires</b>, puis revient au cœur par les <b>veines</b>.</p><p>Au niveau des <b>capillaires</b>, le sang réalise des <b>échanges</b> avec les organes : il leur apporte le <b>dioxygène</b> (venu des poumons) et les <b>nutriments</b> (venus de l’intestin), et récupère leurs <b>déchets</b> (dont le CO₂). Ainsi, le sang relie entre eux les poumons, l’intestin et tous les organes.</p><p>À l’<b>effort</b>, les muscles ont besoin de plus d’O₂ : le cœur bat plus vite (la <b>fréquence cardiaque</b> augmente) pour envoyer plus de sang.</p>',
    exemple:'<p>Après une course, on sent son cœur battre vite : il envoie davantage de sang oxygéné aux muscles très actifs.</p>',
    retenir:'<b>Artères = partent</b> du cœur ; <b>veines = reviennent</b> ; <b>capillaires</b> = lieu des échanges. Le cœur est un <b>muscle</b> qui bat plus vite à l’effort.'
  }
},
{
  id:'svt-effort', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Les muscles et l’effort physique',
  motsCles:['muscle','effort','fréquence cardiaque','respiration','énergie','glucose','dioxygène','entraînement','échauffement'],
  contenu:{
    objectifs:['Comprendre les besoins des muscles à l’effort.','Relier effort, cœur, respiration et entraînement.'],
    notions:[
      {terme:'Besoins des muscles', def:'à l’effort, les muscles consomment plus de dioxygène et de nutriments (glucose) pour produire de l’énergie.'},
      {terme:'Adaptations immédiates', def:'la fréquence cardiaque et la fréquence respiratoire augmentent pour apporter plus d’O₂ et de glucose aux muscles.'},
      {terme:'Entraînement', def:'à long terme, il améliore les performances, la récupération et la santé du cœur.'},
      {terme:'Échauffement', def:'prépare les muscles à l’effort et limite les blessures.'}
    ],
    essentiel:'<p>Un muscle qui travaille a besoin d’<b>énergie</b>. Pour la produire, il « brûle » du <b>glucose</b> en présence de <b>dioxygène</b> : il consomme donc plus d’O₂ et de nutriments à l’effort, et rejette plus de CO₂ et de chaleur.</p><p>Le corps s’adapte <b>immédiatement</b> : la <b>respiration</b> s’accélère (plus d’O₂ dans le sang) et le <b>cœur</b> bat plus vite (le sang circule plus vite pour livrer O₂ et glucose aux muscles). C’est pourquoi on est essoufflé et le cœur bat fort pendant un effort intense.</p><p>À long terme, l’<b>entraînement</b> régulier renforce le cœur et les muscles, améliore l’endurance et la récupération. Un bon <b>échauffement</b> et une alimentation adaptée limitent les blessures.</p>',
    exemple:'<p>Un sportif entraîné a un cœur plus efficace : au repos, son cœur bat plus lentement, et il récupère plus vite après l’effort.</p>',
    retenir:'À l’effort : <b>fréquence cardiaque</b> et <b>fréquence respiratoire augmentent</b> pour apporter O₂ et glucose. L’entraînement améliore le cœur et l’endurance.'
  }
},
{
  id:'svt-alimentation', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Alimentation équilibrée et santé',
  motsCles:['alimentation','équilibre alimentaire','nutriments','besoins','énergie','protéines','glucides','lipides','obésité'],
  contenu:{
    objectifs:['Comprendre les besoins alimentaires et les rôles des nutriments.','Relier alimentation et santé.'],
    notions:[
      {terme:'Groupes d’aliments', def:'chaque groupe apporte des nutriments particuliers (produits laitiers → calcium, viandes/poissons → protéines, féculents → glucides, fruits/légumes → vitamines et fibres).'},
      {terme:'Rôles des nutriments', def:'glucides et lipides = énergie ; protéines = construction du corps ; vitamines, minéraux, eau = fonctionnement.'},
      {terme:'Besoins', def:'ils varient selon l’âge, le sexe et l’activité physique ; ils se mesurent en énergie (kilojoules).'},
      {terme:'Déséquilibres', def:'trop de sucres et de graisses ou pas assez d’activité → surpoids, obésité, diabète, maladies cardiovasculaires.'}
    ],
    essentiel:'<p>Une <b>alimentation équilibrée</b> apporte, en bonnes proportions, tous les <b>nutriments</b> dont le corps a besoin. Certains fournissent de l’<b>énergie</b> (glucides, lipides), d’autres servent à <b>construire</b> le corps (protéines), d’autres encore au bon <b>fonctionnement</b> (vitamines, minéraux, eau, fibres).</p><p>Les <b>besoins</b> dépendent de l’<b>âge</b> et de l’<b>activité physique</b> : un sportif ou un adolescent en croissance a des besoins plus élevés. Manger équilibré, c’est varier les aliments et adapter les quantités à ses besoins.</p><p>Un <b>déséquilibre</b> durable a des conséquences sur la <b>santé</b> : excès de sucres et de graisses et manque d’activité favorisent l’<b>obésité</b>, le diabète et les maladies du cœur ; à l’inverse, des apports insuffisants provoquent des carences.</p>',
    exemple:'<p>Un petit-déjeuner équilibré combine un féculent (énergie), un produit laitier (calcium) et un fruit (vitamines) → apports variés pour la matinée.</p>',
    retenir:'Équilibre = <b>variété</b> + quantités adaptées à l’<b>âge et à l’activité</b>. Glucides/lipides = énergie, protéines = construction.'
  }
},
{
  id:'svt-classification', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Classer les êtres vivants',
  motsCles:['classification','espèce','groupes emboîtés','caractères','attributs','parenté','vertébrés','ancêtre commun'],
  contenu:{
    objectifs:['Classer un être vivant selon ses attributs.','Comprendre les groupes emboîtés et la parenté.'],
    notions:[
      {terme:'Attribut', def:'caractère que possède un être vivant (poils, plumes, 4 membres, squelette interne…).'},
      {terme:'Classification', def:'regrouper les êtres vivants selon les attributs qu’ils ont en commun.'},
      {terme:'Groupes emboîtés', def:'chaque groupe est inclus dans un groupe plus grand (les mammifères ⊂ les vertébrés).'},
      {terme:'Parenté', def:'plus deux espèces partagent d’attributs, plus elles sont proches parentes (ancêtre commun récent).'},
      {terme:'Espèce', def:'ensemble d’individus qui se ressemblent et peuvent se reproduire entre eux en donnant une descendance féconde.'}
    ],
    essentiel:'<p>Pour <b>classer</b> les êtres vivants, on repère les <b>attributs</b> qu’ils <b>possèdent</b> (et non ce qu’ils n’ont pas). On regroupe ensuite ceux qui partagent les mêmes attributs, en <b>groupes emboîtés</b> : par exemple, le groupe des mammifères (poils, mamelles) est inclus dans celui des vertébrés (squelette interne).</p><p>Cette classification n’est pas arbitraire : elle traduit des liens de <b>parenté</b>. Plus deux espèces partagent d’attributs, plus elles ont un <b>ancêtre commun récent</b>. La classification raconte donc l’histoire de l’<b>évolution</b> du vivant.</p>',
    exemple:'<p>Le chat a « squelette interne + 4 membres + poils + mamelles » : il est dans le groupe des mammifères, lui-même inclus dans celui des vertébrés.</p>',
    retenir:'On classe par ce que les êtres vivants <b>ont</b> (attributs). Groupes <b>emboîtés</b> = liens de <b>parenté</b> (ancêtre commun).'
  }
},
{
  id:'svt-chaines-alimentaires', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'Chaînes et réseaux alimentaires',
  motsCles:['chaîne alimentaire','réseau alimentaire','producteur','consommateur','décomposeur','maillon','écosystème','matière'],
  contenu:{
    objectifs:['Construire une chaîne alimentaire.','Comprendre les relations et la circulation de la matière dans un milieu.'],
    notions:[
      {terme:'Producteurs', def:'les végétaux verts, qui fabriquent leur matière par photosynthèse ; ils sont au début des chaînes.'},
      {terme:'Consommateurs', def:'les animaux, qui mangent d’autres êtres vivants : herbivores (mangent des végétaux), carnivores (mangent des animaux).'},
      {terme:'Décomposeurs', def:'champignons, bactéries, vers qui transforment la matière morte en éléments minéraux réutilisables.'},
      {terme:'Chaîne alimentaire', def:'suite d’êtres vivants reliés par « est mangé par ».'},
      {terme:'Réseau alimentaire', def:'ensemble de plusieurs chaînes reliées entre elles dans un milieu.'}
    ],
    essentiel:'<p>Dans un milieu, les êtres vivants sont reliés par des <b>relations alimentaires</b>. Une <b>chaîne alimentaire</b> commence toujours par un <b>producteur</b> (un végétal), suivi de <b>consommateurs</b> (herbivore puis carnivore). La flèche « → » se lit « <b>est mangé par</b> ».</p><p>Dans la réalité, un même être vivant peut manger plusieurs proies et être mangé par plusieurs prédateurs : les chaînes se croisent et forment un <b>réseau alimentaire</b>. Les <b>décomposeurs</b> recyclent la matière morte : la matière circule ainsi en boucle dans l’écosystème.</p><p>Toute la matière et l’énergie d’un milieu proviennent au départ des <b>végétaux</b> (grâce à la lumière). Faire disparaître un maillon déséquilibre tout le réseau.</p>',
    exemple:'<p>Herbe → sauterelle → grenouille → couleuvre → rapace. Si les grenouilles disparaissent, les sauterelles pullulent et les couleuvres manquent de nourriture.</p>',
    retenir:'Producteurs → consommateurs → (décomposeurs). La flèche = « <b>est mangé par</b> ». Tout part des <b>végétaux</b>.'
  }
},
{
  id:'svt-sol-recyclage', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'Le sol et le recyclage de la matière',
  motsCles:['sol','décomposeur','matière organique','humus','recyclage','ver de terre','champignon','bactérie','minéraux'],
  contenu:{
    objectifs:['Comprendre comment la matière est recyclée dans le sol.','Connaître le rôle des décomposeurs.'],
    notions:[
      {terme:'Sol', def:'couche superficielle vivante, mélange de particules minérales, d’eau, d’air et de matière organique.'},
      {terme:'Matière organique morte', def:'restes d’êtres vivants (feuilles mortes, cadavres, déjections).'},
      {terme:'Décomposeurs', def:'vers de terre, champignons, bactéries qui découpent et transforment cette matière.'},
      {terme:'Humus', def:'matière organique décomposée qui enrichit et rend le sol fertile.'}
    ],
    essentiel:'<p>Le <b>sol</b> est un milieu vivant qui abrite de nombreux organismes. À sa surface s’accumule la <b>matière organique morte</b> (feuilles, cadavres). Les <b>décomposeurs</b> (vers de terre, champignons, bactéries) la fragmentent puis la transforment.</p><p>Peu à peu, cette matière est <b>recyclée</b> : elle est transformée en <b>éléments minéraux</b> (sels minéraux) que les racines des plantes peuvent absorber. La matière décomposée forme l’<b>humus</b>, qui rend le sol <b>fertile</b>.</p><p>Ainsi, dans un écosystème, <b>rien ne se perd</b> : la matière circule en boucle des êtres vivants vers le sol, puis de nouveau vers les plantes (grâce à la photosynthèse).</p>',
    exemple:'<p>En forêt, les feuilles tombées en automne disparaissent au fil des mois : les décomposeurs les recyclent en humus qui nourrit les arbres.</p>',
    retenir:'Les <b>décomposeurs</b> transforment la matière morte en <b>minéraux</b> réutilisables par les plantes : la matière est <b>recyclée</b> (rien ne se perd).'
  }
},
{
  id:'svt-squelette-muscles', matiereKey:'svt', matiere:'SVT', niveau:'4e',
  titre:'Squelette, muscles et articulations',
  motsCles:['squelette','muscle','articulation','os','tendon','ligament','mouvement','antagonistes','locomotion'],
  contenu:{
    objectifs:['Décrire ce qui permet le mouvement.','Comprendre le rôle des muscles antagonistes.'],
    notions:[
      {terme:'Squelette', def:'ensemble des os ; il soutient le corps, protège les organes (crâne, cage thoracique) et permet le mouvement.'},
      {terme:'Articulation', def:'zone de contact mobile entre deux os, maintenue par des ligaments.'},
      {terme:'Muscles', def:'reliés aux os par des tendons ; en se contractant, ils tirent sur les os.'},
      {terme:'Muscles antagonistes', def:'muscles qui agissent en sens opposé (biceps/triceps) : l’un plie, l’autre étend le membre.'}
    ],
    essentiel:'<p>Le <b>mouvement</b> du corps repose sur trois éléments : le <b>squelette</b> (les os), les <b>articulations</b> (zones mobiles entre les os) et les <b>muscles</b>. Le squelette soutient le corps et protège les organes ; les articulations permettent aux os de bouger les uns par rapport aux autres.</p><p>Les <b>muscles</b> sont attachés aux os par des <b>tendons</b>. Quand un muscle se <b>contracte</b>, il se raccourcit et <b>tire</b> sur l’os (il ne pousse jamais). Comme un muscle ne peut que tirer, les muscles fonctionnent par <b>paires antagonistes</b> : par exemple, le <b>biceps</b> plie le bras, le <b>triceps</b> l’étend.</p><p>Des efforts excessifs ou de mauvais gestes peuvent provoquer des accidents : entorse (ligaments), déchirure (muscle), fracture (os).</p>',
    exemple:'<p>Pour plier le bras, le biceps se contracte (tire) pendant que le triceps se relâche ; pour l’étendre, c’est l’inverse.</p>',
    retenir:'Mouvement = <b>squelette + articulations + muscles</b>. Un muscle contracté <b>tire</b> (jamais ne pousse) → muscles <b>antagonistes</b> par paires.'
  }
},
{
  id:'svt-erosion-paysages', matiereKey:'svt', matiere:'SVT', niveau:'5e',
  titre:'L’érosion et l’évolution des paysages',
  motsCles:['érosion','paysage','roche','altération','transport','sédiment','sédimentation','roche sédimentaire','eau'],
  contenu:{
    objectifs:['Décrire les étapes de l’érosion.','Comprendre la formation des roches sédimentaires.'],
    notions:[
      {terme:'Altération', def:'usure et fragmentation des roches par l’eau, le gel, le vent, les racines et les variations de température.'},
      {terme:'Transport', def:'les débris (sédiments) sont emportés, surtout par l’eau (ruisseaux, rivières).'},
      {terme:'Sédimentation', def:'les débris finissent par se déposer là où l’eau ralentit (lac, mer).'},
      {terme:'Roche sédimentaire', def:'roche formée par l’accumulation et le compactage des sédiments au fil du temps (grès, calcaire).'}
    ],
    essentiel:'<p>Les <b>paysages</b> ne sont pas figés : ils évoluent lentement sous l’effet de l’<b>érosion</b>. D’abord, les roches sont <b>altérées</b> (fragmentées) par l’eau, le gel, le vent et les êtres vivants. Les débris ainsi produits sont ensuite <b>transportés</b>, principalement par l’<b>eau</b>.</p><p>Lorsque l’eau ralentit (dans un lac, à l’embouchure d’un fleuve, en mer), les débris se <b>déposent</b> : c’est la <b>sédimentation</b>. Au fil de très longues durées, ces sédiments s’accumulent, se compactent et forment de nouvelles <b>roches sédimentaires</b> (grès, calcaire).</p><p>Ainsi, la matière des reliefs est peu à peu arrachée, transportée puis déposée ailleurs : les montagnes s’usent et de nouvelles roches se forment.</p>',
    exemple:'<p>Une rivière arrache des grains aux montagnes, les transporte, puis les dépose en aval : ces sables et boues formeront plus tard des roches sédimentaires.</p>',
    retenir:'Trois étapes : <b>altération → transport → sédimentation</b>. L’accumulation des sédiments forme les <b>roches sédimentaires</b>.'
  }
},
{
  id:'svt-reproduction-plantes', matiereKey:'svt', matiere:'SVT', niveau:'6e',
  titre:'La reproduction des plantes à fleurs',
  motsCles:['fleur','pollinisation','fruit','graine','pollen','étamine','pistil','fécondation','abeille','dispersion'],
  contenu:{
    objectifs:['Décrire la reproduction sexuée des plantes à fleurs.','Comprendre pollinisation, fécondation et dispersion.'],
    notions:[
      {terme:'Fleur', def:'organe de reproduction ; les étamines produisent le pollen (mâle), le pistil contient les ovules (femelle).'},
      {terme:'Pollinisation', def:'transport du pollen jusqu’au pistil, par le vent ou par les animaux (abeilles, papillons).'},
      {terme:'Fécondation', def:'union du pollen et de l’ovule ; elle donne une graine.'},
      {terme:'Fruit et graine', def:'après la fécondation, la fleur se transforme : l’ovaire devient un fruit qui protège les graines.'},
      {terme:'Dispersion', def:'les graines sont disséminées (vent, animaux, eau) pour coloniser de nouveaux lieux.'}
    ],
    essentiel:'<p>La <b>fleur</b> est l’organe de reproduction des plantes à fleurs. Elle contient des parties mâles, les <b>étamines</b> (qui produisent le <b>pollen</b>), et une partie femelle, le <b>pistil</b> (qui contient les <b>ovules</b>).</p><p>La reproduction se déroule en plusieurs étapes : la <b>pollinisation</b> (le pollen est transporté jusqu’au pistil par le vent ou les insectes), puis la <b>fécondation</b> (le pollen féconde un ovule). L’ovule fécondé devient une <b>graine</b>, et l’ovaire de la fleur se transforme en <b>fruit</b> qui protège les graines.</p><p>Enfin, les graines sont <b>dispersées</b> (par le vent, l’eau ou les animaux) : elles germeront ailleurs pour donner de nouvelles plantes. Les <b>abeilles</b> jouent un rôle essentiel dans la pollinisation de nombreuses cultures.</p>',
    exemple:'<p>Une abeille butine une fleur, se couvre de pollen, puis le dépose sur une autre fleur : elle assure la pollinisation, indispensable à la formation des fruits.</p>',
    retenir:'Fleur (étamines + pistil) → <b>pollinisation → fécondation → fruit + graines → dispersion</b>. Les abeilles sont des pollinisateurs essentiels.'
  }
}
]);
