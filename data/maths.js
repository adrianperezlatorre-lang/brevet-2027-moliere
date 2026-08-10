window.FICHES = (window.FICHES || []).concat([
{
  id:'maths-pythagore', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Le théorème de Pythagore',
  motsCles:['triangle rectangle','hypoténuse','longueur','distance','racine carrée','réciproque','angle droit'],
  contenu:{
    objectifs:[
      'Calculer la longueur d’un côté dans un triangle rectangle.',
      'Démontrer qu’un triangle est rectangle (ou non) avec la réciproque.'
    ],
    notions:[
      {terme:'Hypoténuse', def:'le côté le plus long, opposé à l’angle droit.'},
      {terme:'Théorème', def:'si ABC est rectangle en A, alors BC² = AB² + AC².'},
      {terme:'Réciproque', def:'si BC² = AB² + AC², alors le triangle est rectangle en A.'}
    ],
    essentiel:'<p>Le théorème de Pythagore relie les trois côtés d’un <b>triangle rectangle</b>. On l’utilise pour <b>calculer une longueur</b> (on connaît deux côtés) et sa <b>réciproque</b> pour <b>prouver un angle droit</b>. La <b>contraposée</b> sert à montrer qu’un triangle n’est <i>pas</i> rectangle.</p>',
    methode:[
      'Repère l’angle droit et nomme l’hypoténuse.',
      'Écris l’égalité : (hypoténuse)² = (côté)² + (côté)².',
      'Remplace par les valeurs connues et isole l’inconnue.',
      'Utilise la racine carrée pour trouver la longueur.'
    ],
    exemple:'<p>Triangle rectangle en A, AB = 3 cm, AC = 4 cm.<br>BC² = 3² + 4² = 9 + 16 = 25, donc BC = √25 = <b>5 cm</b>.</p>',
    retenir:'Toujours vérifier <b>où est l’angle droit</b> : l’hypoténuse est <b>face</b> à lui et c’est le plus grand côté.'
  }
},
{
  id:'maths-thales', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Le théorème de Thalès',
  motsCles:['droites parallèles','triangle','proportionnalité','rapport','agrandissement','longueurs'],
  contenu:{
    objectifs:[
      'Calculer une longueur avec des droites parallèles.',
      'Montrer que deux droites sont parallèles (réciproque).'
    ],
    notions:[
      {terme:'Configuration', def:'deux droites sécantes en A coupées par deux parallèles (BC) // (DE).'},
      {terme:'Égalité de Thalès', def:'AD/AB = AE/AC = DE/BC (rapports égaux).'},
      {terme:'Réciproque', def:'si AD/AB = AE/AC (et points alignés dans le même ordre), alors (DE)//(BC).'}
    ],
    essentiel:'<p>Le théorème de Thalès traduit une situation de <b>proportionnalité</b> créée par des <b>droites parallèles</b> dans un triangle. Il sert à <b>calculer des longueurs</b> ; sa réciproque sert à <b>prouver le parallélisme</b>.</p>',
    methode:[
      'Vérifie la configuration (points alignés, deux parallèles).',
      'Écris la triple égalité des rapports.',
      'Garde les deux rapports utiles et fais un produit en croix.'
    ],
    exemple:'<p>Si AD = 2, AB = 6 et AE = 3, alors AC = (AE×AB)/AD = (3×6)/2 = <b>9</b>.</p>',
    retenir:'Les rapports se lisent <b>dans le même ordre</b> : petit triangle sur grand triangle.'
  }
},
{
  id:'maths-trigonometrie', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'La trigonométrie (cosinus, sinus, tangente)',
  motsCles:['cosinus','sinus','tangente','triangle rectangle','angle','soh cah toa','côté adjacent','opposé'],
  contenu:{
    objectifs:[
      'Calculer une longueur ou un angle dans un triangle rectangle.',
      'Choisir la bonne formule selon les données.'
    ],
    notions:[
      {terme:'Cosinus', def:'cos(angle) = côté adjacent / hypoténuse.'},
      {terme:'Sinus', def:'sin(angle) = côté opposé / hypoténuse.'},
      {terme:'Tangente', def:'tan(angle) = côté opposé / côté adjacent.'}
    ],
    essentiel:'<p>La trigonométrie relie un <b>angle aigu</b> et deux côtés d’un triangle rectangle. Moyen mnémotechnique : <b>SOH-CAH-TOA</b>. Pour trouver un angle, on utilise les touches <kbd>cos⁻¹</kbd>, <kbd>sin⁻¹</kbd>, <kbd>tan⁻¹</kbd>.</p>',
    methode:[
      'Repère l’angle utilisé, puis nomme les côtés (adjacent, opposé, hypoténuse).',
      'Choisis la formule qui utilise les 2 côtés connus/cherchés.',
      'Résous (produit en croix pour une longueur, touche inverse pour un angle).'
    ],
    exemple:'<p>Angle = 30°, hypoténuse = 10. Côté opposé = sin(30°)×10 = 0,5×10 = <b>5</b>.</p>',
    retenir:'Calculatrice en mode <b>degré (DEG)</b> !'
  }
},
{
  id:'maths-fractions', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les opérations sur les fractions',
  motsCles:['addition','soustraction','multiplication','division','dénominateur commun','simplifier','inverse'],
  contenu:{
    objectifs:['Additionner, soustraire, multiplier et diviser des fractions.','Simplifier un résultat.'],
    notions:[
      {terme:'Même dénominateur', def:'pour + et − : on met au même dénominateur, on additionne les numérateurs.'},
      {terme:'Multiplication', def:'numérateurs entre eux, dénominateurs entre eux.'},
      {terme:'Division', def:'multiplier par l’inverse : a/b ÷ c/d = a/b × d/c.'}
    ],
    essentiel:'<p>Pour <b>+ et −</b>, il faut un <b>dénominateur commun</b>. Pour <b>× </b>, on multiplie « en ligne ». Pour <b>÷</b>, on multiplie par l’<b>inverse</b>. On <b>simplifie</b> toujours à la fin.</p>',
    exemple:'<p>2/3 + 1/4 = 8/12 + 3/12 = <b>11/12</b>.<br>2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = <b>5/6</b>.</p>',
    retenir:'Ne jamais additionner les dénominateurs ! On les rend d’abord <b>identiques</b>.'
  }
},
{
  id:'maths-puissances', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les puissances',
  motsCles:['exposant','puissance de 10','notation scientifique','carré','cube','négatif'],
  contenu:{
    objectifs:['Utiliser les règles de calcul des puissances.','Écrire un nombre en notation scientifique.'],
    notions:[
      {terme:'Définition', def:'aⁿ = a×a×…×a (n facteurs). a⁻ⁿ = 1/aⁿ.'},
      {terme:'Règles', def:'aⁿ×aᵐ = aⁿ⁺ᵐ ; aⁿ/aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ.'},
      {terme:'Notation scientifique', def:'a×10ⁿ avec 1 ≤ a < 10.'}
    ],
    essentiel:'<p>Une puissance est une multiplication répétée. Les <b>puissances de 10</b> servent à écrire les très grands et très petits nombres en <b>notation scientifique</b>.</p>',
    exemple:'<p>10³ = 1000 ; 10⁻² = 0,01.<br>52 000 = <b>5,2 × 10⁴</b> ; 0,00047 = <b>4,7 × 10⁻⁴</b>.</p>',
    retenir:'Exposant <b>positif</b> = grand nombre ; exposant <b>négatif</b> = petit nombre (< 1).'
  }
},
{
  id:'maths-calcul-litteral', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Le calcul littéral : développer et factoriser',
  motsCles:['développer','factoriser','distributivité','identités remarquables','réduire','expression'],
  contenu:{
    objectifs:['Développer un produit.','Factoriser une expression.','Utiliser les identités remarquables.'],
    notions:[
      {terme:'Développer', def:'transformer un produit en somme : k(a+b) = ka + kb.'},
      {terme:'Double distributivité', def:'(a+b)(c+d) = ac + ad + bc + bd.'},
      {terme:'Identités remarquables', def:'(a+b)² = a²+2ab+b² ; (a−b)² = a²−2ab+b² ; (a+b)(a−b) = a²−b².'}
    ],
    essentiel:'<p><b>Développer</b> = enlever les parenthèses (produit → somme). <b>Factoriser</b> = faire apparaître un produit (somme → produit), en cherchant un <b>facteur commun</b> ou une identité remarquable.</p>',
    exemple:'<p>Développer : (x+3)(x−2) = x²−2x+3x−6 = <b>x²+x−6</b>.<br>Factoriser : 5x + 5×7 = <b>5(x+7)</b>.</p>',
    retenir:'Pour factoriser, on cherche ce qui est <b>en commun</b> dans tous les termes.'
  }
},
{
  id:'maths-equations', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les équations du premier degré',
  motsCles:['équation','inconnue','résoudre','x','produit nul','mise en équation'],
  contenu:{
    objectifs:['Résoudre une équation à une inconnue.','Résoudre une équation produit-nul.'],
    notions:[
      {terme:'Équation', def:'égalité contenant une inconnue (souvent x) à trouver.'},
      {terme:'Règle', def:'on peut ajouter/soustraire ou multiplier/diviser les deux membres par un même nombre (≠0).'},
      {terme:'Produit nul', def:'A×B = 0 équivaut à A = 0 ou B = 0.'}
    ],
    essentiel:'<p>Résoudre, c’est <b>isoler x</b>. On regroupe les x d’un côté, les nombres de l’autre. Une <b>équation produit</b> se résout en annulant chaque facteur.</p>',
    exemple:'<p>3x + 5 = 20 → 3x = 15 → x = <b>5</b>.<br>(x−2)(x+7) = 0 → x = 2 ou x = <b>−7</b>.</p>',
    retenir:'Ce qui « change de côté » <b>change d’opération</b> (le + devient −, le × devient ÷).'
  }
},
{
  id:'maths-systemes', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les systèmes de deux équations',
  motsCles:['système','deux inconnues','substitution','combinaison','problème','x et y'],
  contenu:{
    objectifs:['Résoudre un système de 2 équations à 2 inconnues.','Modéliser un problème par un système.'],
    notions:[
      {terme:'Substitution', def:'exprimer une inconnue puis la remplacer dans l’autre équation.'},
      {terme:'Combinaison', def:'additionner/soustraire les équations pour éliminer une inconnue.'}
    ],
    essentiel:'<p>Un <b>système</b> cherche deux nombres (x et y) vérifiant <b>deux conditions</b> en même temps. On utilise la <b>substitution</b> ou la <b>combinaison linéaire</b>. Très utile pour les problèmes (prix, quantités…).</p>',
    exemple:'<p>{ x + y = 10 ; x − y = 4 }. En additionnant : 2x = 14 → x = 7, donc y = <b>3</b>.</p>',
    retenir:'Une solution = un <b>couple (x ; y)</b>. On peut vérifier en remplaçant dans les deux équations.'
  }
},
{
  id:'maths-fonctions', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Notion de fonction',
  motsCles:['fonction','image','antécédent','tableau de valeurs','courbe','graphique','f(x)'],
  contenu:{
    objectifs:['Comprendre image et antécédent.','Lire une fonction sur un graphique ou un tableau.'],
    notions:[
      {terme:'Fonction', def:'un procédé qui associe à un nombre x un unique nombre f(x).'},
      {terme:'Image', def:'f(x) est l’image de x.'},
      {terme:'Antécédent', def:'x est un antécédent de f(x). Un nombre peut avoir plusieurs antécédents.'}
    ],
    essentiel:'<p>Une fonction, c’est une <b>machine</b> : on entre x, elle renvoie f(x). On la représente par une <b>formule</b>, un <b>tableau de valeurs</b> ou une <b>courbe</b>.</p>',
    exemple:'<p>f(x)=2x+1. L’image de 3 est f(3)=7. Un antécédent de 5 : 2x+1=5 → x=<b>2</b>.</p>',
    retenir:'<b>Image</b> = on part de x (axe horizontal). <b>Antécédent</b> = on part de y (axe vertical).'
  }
},
{
  id:'maths-fonctions-affines', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Fonctions linéaires et affines',
  motsCles:['fonction linéaire','fonction affine','coefficient directeur','ordonnée à l’origine','droite','proportionnalité'],
  contenu:{
    objectifs:['Distinguer fonction linéaire et affine.','Tracer et exploiter leur représentation.'],
    notions:[
      {terme:'Fonction linéaire', def:'f(x)=ax. Représente une situation de proportionnalité, droite passant par l’origine.'},
      {terme:'Fonction affine', def:'f(x)=ax+b. Droite ne passant (en général) pas par l’origine.'},
      {terme:'Coefficients', def:'a = coefficient directeur (pente) ; b = ordonnée à l’origine.'}
    ],
    essentiel:'<p>Ces fonctions sont représentées par des <b>droites</b>. <b>a</b> donne l’inclinaison, <b>b</b> le point où la droite coupe l’axe des ordonnées. La fonction <b>linéaire</b> est un cas particulier (b=0) lié à la <b>proportionnalité</b>.</p>',
    exemple:'<p>f(x)=3x+2 : pente 3, coupe l’axe vertical en 2. f(0)=2, f(1)=5.</p>',
    retenir:'a = <b>combien on monte</b> quand x augmente de 1 ; b = <b>valeur de départ</b> (x=0).'
  }
},
{
  id:'maths-proportionnalite', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Proportionnalité et pourcentages',
  motsCles:['proportionnalité','pourcentage','coefficient','produit en croix','vitesse','échelle','ratio'],
  contenu:{
    objectifs:['Reconnaître une situation de proportionnalité.','Appliquer et calculer des pourcentages.'],
    notions:[
      {terme:'Coefficient', def:'nombre par lequel on multiplie pour passer d’une grandeur à l’autre.'},
      {terme:'Produit en croix', def:'méthode pour trouver une 4ᵉ valeur (règle de trois).'},
      {terme:'Pourcentage', def:'t % d’une valeur = valeur × t/100. Augmenter de t % : ×(1+t/100).'}
    ],
    essentiel:'<p>Il y a proportionnalité quand on passe d’une colonne à l’autre en <b>multipliant par le même nombre</b>. Les <b>pourcentages</b>, <b>vitesses</b> et <b>échelles</b> en sont des applications.</p>',
    exemple:'<p>Réduction de 20 % sur 50 € : 50×(1−0,20) = <b>40 €</b>.</p>',
    retenir:'Augmentation/diminution en % se fait avec un <b>coefficient multiplicateur</b>.'
  }
},
{
  id:'maths-statistiques', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les statistiques',
  motsCles:['moyenne','médiane','étendue','effectif','fréquence','série','données'],
  contenu:{
    objectifs:['Calculer moyenne, médiane et étendue.','Interpréter une série de données.'],
    notions:[
      {terme:'Moyenne', def:'somme des valeurs ÷ nombre de valeurs.'},
      {terme:'Médiane', def:'valeur qui partage la série ordonnée en deux moitiés.'},
      {terme:'Étendue', def:'plus grande valeur − plus petite valeur.'}
    ],
    essentiel:'<p>Ces <b>indicateurs</b> résument une série. La <b>moyenne</b> tient compte de toutes les valeurs, la <b>médiane</b> du « milieu », l’<b>étendue</b> de la dispersion.</p>',
    exemple:'<p>Série 4 ; 6 ; 8 ; 10 ; 12 : moyenne = 40/5 = 8, médiane = 8, étendue = 12−4 = <b>8</b>.</p>',
    retenir:'Pour la médiane, il faut d’abord <b>ranger les valeurs</b> dans l’ordre croissant.'
  }
},
{
  id:'maths-probabilites', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les probabilités',
  motsCles:['probabilité','hasard','issue','événement','équiprobable','dé','arbre'],
  contenu:{
    objectifs:['Calculer la probabilité d’un événement.','Utiliser un arbre pour deux épreuves.'],
    notions:[
      {terme:'Probabilité', def:'nombre entre 0 et 1 mesurant la chance qu’un événement se produise.'},
      {terme:'Équiprobabilité', def:'P = nombre de cas favorables / nombre de cas possibles.'},
      {terme:'Événement contraire', def:'P(contraire) = 1 − P(événement).'}
    ],
    essentiel:'<p>Une probabilité mesure le <b>hasard</b> : 0 = impossible, 1 = certain. Dans un cas <b>équiprobable</b>, on compte les cas favorables sur les cas possibles.</p>',
    exemple:'<p>Un dé : P(obtenir un 6) = <b>1/6</b>. P(nombre pair) = 3/6 = <b>1/2</b>.</p>',
    retenir:'La somme des probabilités de <b>toutes les issues</b> vaut toujours <b>1</b>.'
  }
},
{
  id:'maths-volumes', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Volumes et agrandissement-réduction',
  motsCles:['volume','cylindre','pyramide','cône','sphère','boule','coefficient','solide'],
  contenu:{
    objectifs:['Calculer le volume des solides usuels.','Gérer les effets d’un agrandissement/réduction.'],
    notions:[
      {terme:'Prisme/cylindre', def:'V = aire de base × hauteur.'},
      {terme:'Pyramide/cône', def:'V = (aire de base × hauteur) / 3.'},
      {terme:'Boule', def:'V = 4/3 × π × R³.'},
      {terme:'Agrandissement de rapport k', def:'les longueurs ×k, les aires ×k², les volumes ×k³.'}
    ],
    essentiel:'<p>Chaque solide a sa <b>formule de volume</b>. Lors d’un <b>agrandissement/réduction</b> de rapport k, attention : les aires évoluent en <b>k²</b> et les volumes en <b>k³</b>.</p>',
    exemple:'<p>Si on double les dimensions (k=2), le volume est ×2³ = <b>×8</b>.</p>',
    retenir:'Vérifie toujours les <b>unités</b> (cm³, L…) : 1 L = 1 dm³ = 1000 cm³.'
  }
},
{
  id:'maths-grandeurs-composees', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Grandeurs composées et conversions',
  motsCles:['vitesse','débit','masse volumique','conversion','unités','km/h','grandeur produit'],
  contenu:{
    objectifs:['Utiliser des grandeurs composées (vitesse, débit…).','Convertir des unités.'],
    notions:[
      {terme:'Grandeur quotient', def:'obtenue en divisant deux grandeurs : vitesse = distance/temps.'},
      {terme:'Grandeur produit', def:'obtenue en multipliant : énergie (kWh) = puissance × temps.'},
      {terme:'Conversion', def:'passer d’une unité à une autre (m/s ↔ km/h, etc.).'}
    ],
    essentiel:'<p>Beaucoup de grandeurs du quotidien sont <b>composées</b> : vitesse (km/h), débit (L/min), masse volumique (g/cm³). On les manipule comme des <b>proportionnalités</b>.</p>',
    exemple:'<p>150 km en 2 h → vitesse = 150/2 = <b>75 km/h</b>. Pour passer en m/s : ÷3,6.</p>',
    retenir:'Note toujours l’<b>unité au bon endroit</b> : « par » signifie une division.'
  }
},
{
  id:'maths-arithmetique', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Arithmétique : diviseurs, nombres premiers, PGCD',
  motsCles:['diviseur','multiple','nombre premier','pgcd','fraction irréductible','décomposition'],
  contenu:{
    objectifs:['Reconnaître un nombre premier.','Calculer un PGCD et rendre une fraction irréductible.'],
    notions:[
      {terme:'Nombre premier', def:'n’a que deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11…).'},
      {terme:'PGCD', def:'plus grand commun diviseur de deux nombres.'},
      {terme:'Fraction irréductible', def:'obtenue en divisant numérateur et dénominateur par leur PGCD.'}
    ],
    essentiel:'<p>Tout entier se <b>décompose en produit de facteurs premiers</b>. Le <b>PGCD</b> sert à <b>simplifier</b> une fraction jusqu’à la rendre irréductible.</p>',
    exemple:'<p>PGCD(24 ; 36) = 12, donc 24/36 = <b>2/3</b>.</p>',
    retenir:'Une fraction est <b>irréductible</b> quand le PGCD du numérateur et du dénominateur vaut <b>1</b>.'
  }
},
{
  id:'maths-scratch', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Algorithmique et programmation (Scratch)',
  motsCles:['algorithme','scratch','programme','boucle','variable','instruction','déplacement'],
  contenu:{
    objectifs:['Lire et compléter un programme.','Comprendre boucles, variables et conditions.'],
    notions:[
      {terme:'Algorithme', def:'suite d’instructions précises pour obtenir un résultat.'},
      {terme:'Boucle', def:'« répéter … fois » exécute plusieurs fois un bloc.'},
      {terme:'Condition', def:'« si … alors » exécute selon un test (vrai/faux).'},
      {terme:'Variable', def:'case mémoire qui stocke une valeur (score, position…).'}
    ],
    essentiel:'<p>Un programme exécute les instructions <b>dans l’ordre</b>. Les <b>boucles</b> évitent les répétitions, les <b>conditions</b> permettent des choix, les <b>variables</b> gardent des valeurs en mémoire.</p>',
    exemple:'<p>« Avancer de 10, tourner de 90° » répété 4 fois trace un <b>carré</b>.</p>',
    retenir:'Repère bien le <b>repère (x ; y)</b> et le sens des <b>angles</b> pour les déplacements.'
  }
},
{
  id:'maths-angles-cercle', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Angles inscrits et angles au centre',
  motsCles:['angle inscrit','angle au centre','cercle','arc','polygone régulier','géométrie'],
  contenu:{
    objectifs:['Relier angle inscrit et angle au centre.','Calculer des angles dans un cercle.'],
    notions:[
      {terme:'Angle au centre', def:'sommet au centre du cercle.'},
      {terme:'Angle inscrit', def:'sommet sur le cercle interceptant le même arc.'},
      {terme:'Propriété', def:'l’angle au centre est le double de l’angle inscrit qui intercepte le même arc.'}
    ],
    essentiel:'<p>Dans un cercle, un <b>angle au centre</b> vaut <b>2 fois</b> l’angle inscrit qui « voit » le même arc. Deux angles inscrits interceptant le même arc sont <b>égaux</b>.</p>',
    exemple:'<p>Angle au centre de 80° → angle inscrit correspondant = <b>40°</b>.</p>',
    retenir:'Même arc → angle au centre = <b>2 ×</b> angle inscrit.'
  }
},
{
  id:'maths-relatifs', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Les nombres relatifs',
  motsCles:['nombre relatif','négatif','positif','addition','soustraction','signe','opposé','règle des signes'],
  contenu:{
    objectifs:['Additionner et soustraire des relatifs.','Multiplier et diviser avec la règle des signes.'],
    notions:[
      {terme:'Nombre relatif', def:'nombre positif ou négatif (ex. −5 ; +3).'},
      {terme:'Somme', def:'mêmes signes : on additionne et on garde le signe ; signes différents : on soustrait et on prend le signe du plus grand.'},
      {terme:'Règle des signes', def:'(+)(+)=+ ; (−)(−)=+ ; (+)(−)=− ; (−)(+)=−.'}
    ],
    essentiel:'<p>Les <b>relatifs</b> comportent un <b>signe</b>. Pour × et ÷ : <b>deux mêmes signes → positif</b>, <b>deux signes différents → négatif</b>. Soustraire, c’est ajouter l’<b>opposé</b>.</p>',
    exemple:'<p>−3 + 8 = +5 ; (−4) × (−2) = +8 ; 5 − (−3) = 5 + 3 = <b>8</b>.</p>',
    retenir:'Soustraire un nombre = <b>ajouter son opposé</b> ; « moins par moins = plus ».'
  }
},
{
  id:'maths-priorites', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Priorités opératoires et calculs',
  motsCles:['priorité','parenthèses','multiplication','addition','distributivité','calcul','ordre des opérations'],
  contenu:{
    objectifs:['Respecter les priorités de calcul.','Mener un calcul par étapes.'],
    notions:[
      {terme:'Règle', def:'d’abord les parenthèses, puis × et ÷, enfin + et −.'},
      {terme:'De gauche à droite', def:'à priorité égale, on calcule dans l’ordre de lecture.'}
    ],
    essentiel:'<p>Dans un calcul, on effectue en priorité les <b>parenthèses</b>, puis les <b>multiplications/divisions</b>, et enfin les <b>additions/soustractions</b>.</p>',
    exemple:'<p>3 + 4 × 2 = 3 + 8 = <b>11</b> (et non 14).<br>(3 + 4) × 2 = 7 × 2 = <b>14</b>.</p>',
    retenir:'× et ÷ passent <b>avant</b> + et − ; les parenthèses d’abord.'
  }
},
{
  id:'maths-racine-carree', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'La racine carrée',
  motsCles:['racine carrée','carré','radical','nombre irrationnel','pythagore','calcul'],
  contenu:{
    objectifs:['Comprendre la notion de racine carrée.','Simplifier des expressions simples.'],
    notions:[
      {terme:'Racine carrée', def:'√a est le nombre positif dont le carré vaut a (√a × √a = a).'},
      {terme:'Carrés parfaits', def:'√1=1, √4=2, √9=3, √16=4, √25=5, √36=6…'},
      {terme:'Propriété', def:'√(a×b) = √a × √b.'}
    ],
    essentiel:'<p>La <b>racine carrée</b> est l’opération inverse du <b>carré</b>. Elle apparaît souvent avec le théorème de <b>Pythagore</b>. Certains résultats ne « tombent pas juste » (nombres irrationnels).</p>',
    exemple:'<p>√49 = 7 car 7² = 49. √50 = √(25×2) = <b>5√2</b>.</p>',
    retenir:'√a existe seulement si <b>a ≥ 0</b> ; (√a)² = a.'
  }
},
{
  id:'maths-angles-triangles', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Angles et triangles',
  motsCles:['somme des angles','triangle','angles alternes-internes','angles correspondants','parallèles','180 degrés'],
  contenu:{
    objectifs:['Utiliser la somme des angles d’un triangle.','Reconnaître les angles formés par des parallèles.'],
    notions:[
      {terme:'Somme des angles', def:'dans tout triangle, la somme des trois angles vaut 180°.'},
      {terme:'Angles alternes-internes', def:'égaux si les droites coupées sont parallèles.'},
      {terme:'Angles correspondants', def:'égaux si les droites sont parallèles.'}
    ],
    essentiel:'<p>La <b>somme des angles</b> d’un triangle est toujours <b>180°</b>. Deux droites <b>parallèles</b> coupées par une sécante forment des angles <b>alternes-internes</b> et <b>correspondants</b> égaux.</p>',
    exemple:'<p>Triangle avec deux angles de 60° et 70° : le troisième = 180 − 60 − 70 = <b>50°</b>.</p>',
    retenir:'Triangle → <b>180°</b> ; parallèles → angles alternes-internes <b>égaux</b>.'
  }
},
{
  id:'maths-transformations', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les transformations géométriques',
  motsCles:['symétrie','translation','rotation','homothétie','image','figure','géométrie'],
  contenu:{
    objectifs:['Reconnaître et construire des transformations.','Comprendre ce qu’elles conservent.'],
    notions:[
      {terme:'Symétrie axiale', def:'« pliage » par rapport à un axe (effet miroir).'},
      {terme:'Symétrie centrale', def:'demi-tour autour d’un point.'},
      {terme:'Translation', def:'glissement selon une direction, un sens, une longueur.'},
      {terme:'Rotation', def:'tourner autour d’un point d’un certain angle.'},
      {terme:'Homothétie', def:'agrandissement/réduction d’un rapport k depuis un centre.'}
    ],
    essentiel:'<p>Une <b>transformation</b> déplace ou modifie une figure. Symétries, translation et rotation <b>conservent les longueurs</b> (isométries) ; l’<b>homothétie</b> agrandit ou réduit.</p>',
    retenir:'Seule l’<b>homothétie</b> change la taille ; les autres conservent la forme ET les longueurs.'
  }
},
{
  id:'maths-perimetres-aires', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Périmètres et aires',
  motsCles:['périmètre','aire','rectangle','triangle','disque','cercle','pi','surface'],
  contenu:{
    objectifs:['Calculer périmètres et aires des figures usuelles.','Ne pas confondre longueur et surface.'],
    notions:[
      {terme:'Rectangle', def:'périmètre = 2×(L+l) ; aire = L×l.'},
      {terme:'Triangle', def:'aire = (base × hauteur) / 2.'},
      {terme:'Disque', def:'périmètre (circonférence) = 2×π×R ; aire = π×R².'}
    ],
    essentiel:'<p>Le <b>périmètre</b> est une <b>longueur</b> (le tour) ; l’<b>aire</b> est une <b>surface</b>. Attention aux <b>unités</b> : cm pour le périmètre, cm² pour l’aire.</p>',
    exemple:'<p>Disque de rayon 5 : circonférence = 2π×5 ≈ 31,4 ; aire = π×5² ≈ <b>78,5 cm²</b>.</p>',
    retenir:'Périmètre = <b>cm</b> ; aire = <b>cm²</b> ; ne pas les mélanger.'
  }
},
{
  id:'maths-reperage', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Repérage et coordonnées',
  motsCles:['repère','coordonnées','abscisse','ordonnée','point','axe','plan'],
  contenu:{
    objectifs:['Lire et placer un point dans un repère.','Comprendre abscisse et ordonnée.'],
    notions:[
      {terme:'Repère', def:'deux axes gradués perpendiculaires (horizontal et vertical).'},
      {terme:'Abscisse', def:'position horizontale (axe des x).'},
      {terme:'Ordonnée', def:'position verticale (axe des y).'}
    ],
    essentiel:'<p>Un point est repéré par un couple <b>(x ; y)</b> : l’<b>abscisse</b> (horizontale) puis l’<b>ordonnée</b> (verticale). C’est la base pour tracer des <b>fonctions</b>.</p>',
    exemple:'<p>Le point A(3 ; 2) : on avance de 3 vers la droite, puis de 2 vers le haut.</p>',
    retenir:'Toujours dans l’ordre <b>(abscisse ; ordonnée)</b> = (x ; y).'
  }
}
]);
