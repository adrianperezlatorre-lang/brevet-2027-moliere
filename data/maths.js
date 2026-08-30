window.FICHES = (window.FICHES || []).concat([
{
  id:'maths-pythagore', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Le théorème de Pythagore',
  motsCles:['triangle rectangle','hypoténuse','longueur','distance','racine carrée','réciproque','contraposée','angle droit'],
  contenu:{
    objectifs:['Calculer la longueur d’un côté dans un triangle rectangle.','Démontrer qu’un triangle est rectangle (réciproque) ou non (contraposée).'],
    notions:[
      {terme:'Hypoténuse', def:'le côté le plus long, toujours opposé à l’angle droit.'},
      {terme:'Théorème (sens direct)', def:'si ABC est rectangle en A, alors BC² = AB² + AC² (hypoténuse² = somme des carrés des deux autres côtés).'},
      {terme:'Réciproque', def:'si BC² = AB² + AC² (BC étant le plus grand côté), alors le triangle est rectangle en A.'},
      {terme:'Contraposée', def:'si BC² ≠ AB² + AC², alors le triangle n’est pas rectangle.'}
    ],
    essentiel:'<p>Le théorème de Pythagore relie les trois côtés d’un <b>triangle rectangle</b>. On l’utilise dans trois situations. Le <b>sens direct</b> sert à <b>calculer une longueur</b> quand on connaît les deux autres côtés. La <b>réciproque</b> sert à <b>démontrer qu’un triangle est rectangle</b>. La <b>contraposée</b> sert à prouver qu’un triangle <b>n’est pas</b> rectangle.</p><p>Attention à ce qu’on cherche : pour calculer l’<b>hypoténuse</b>, on <b>additionne</b> ; pour calculer un côté de l’angle droit, on <b>soustrait</b>. L’hypoténuse est toujours le plus grand côté et se trouve en face de l’angle droit.</p>',
    methode:[
      'Repère l’angle droit et nomme l’hypoténuse (côté opposé, le plus grand).',
      'Écris l’égalité : hypoténuse² = côté² + côté².',
      'Remplace les valeurs connues ; pour un côté de l’angle droit, isole-le (soustraction).',
      'Prends la racine carrée et conclus avec l’unité (valeur arrondie si besoin).'
    ],
    exemple:'<p><b>Calcul de l’hypoténuse</b> — ABC rectangle en A, AB = 3 cm, AC = 4 cm :<br>BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25 → BC = √25 = <b>5 cm</b>.</p><p><b>Calcul d’un côté</b> — rectangle en A, BC = 13, AB = 5 :<br>AC² = BC² − AB² = 169 − 25 = 144 → AC = √144 = <b>12</b>.</p><p><b>Réciproque</b> — côtés 6, 8, 10 : 10² = 100 et 6² + 8² = 36 + 64 = 100. Comme c’est égal, le triangle <b>est rectangle</b>.</p>',
    retenir:'Hypoténuse² = somme des carrés. Chercher l’hypoténuse → <b>on additionne</b> ; chercher un côté de l’angle droit → <b>on soustrait</b>. Réciproque = prouver un angle droit.'
  }
},
{
  id:'maths-thales', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Le théorème de Thalès',
  motsCles:['droites parallèles','triangle','papillon','proportionnalité','rapport','réciproque','contraposée','longueurs'],
  contenu:{
    objectifs:['Calculer une longueur manquante dans une configuration de Thalès.','Démontrer que deux droites sont parallèles (réciproque) ou non (contraposée).'],
    notions:[
      {terme:'Conditions d’application', def:'deux droites sécantes en A, coupées par deux parallèles ; points alignés — configuration « triangle » (D∈[AB], E∈[AC]) ou « papillon » (D et E de part et d’autre de A).'},
      {terme:'Théorème (sens direct)', def:'si (DE) // (BC), alors AD/AB = AE/AC = DE/BC (les trois rapports sont égaux).'},
      {terme:'Réciproque', def:'si AD/AB = AE/AC ET si A, D, B et A, E, C sont alignés dans le même ordre, alors (DE) // (BC).'},
      {terme:'Contraposée', def:'si AD/AB ≠ AE/AC (points alignés), alors (DE) et (BC) ne sont pas parallèles.'}
    ],
    essentiel:'<p>Le théorème de Thalès traduit la <b>proportionnalité</b> des longueurs entre deux triangles emboîtés (ou opposés par le sommet A : configuration « <b>papillon</b> ») formés par deux <b>parallèles</b>. On écrit les rapports <b>dans le même ordre</b> : « segment du petit triangle / segment du grand triangle », le sommet commun A cité en premier.</p><p>⚠️ Le rapport <b>DE/BC</b> ne sert qu’à calculer <b>DE</b> ou <b>BC</b> (les segments portés par les parallèles), jamais une longueur située sur les droites sécantes. La <b>réciproque</b> sert à prouver le parallélisme ; la <b>contraposée</b> à prouver le non-parallélisme.</p>',
    methode:[
      'Vérifie les conditions : sommet commun A, points alignés, (DE) // (BC).',
      'Écris la triple égalité en respectant l’ordre : AD/AB = AE/AC = DE/BC.',
      'Ne garde que les deux rapports contenant la longueur cherchée.',
      'Résous par produit en croix, puis conclus avec l’unité.'
    ],
    exemple:'<p>Triangle ABC, D∈[AB] et E∈[AC] avec (DE)//(BC). AD = 2 cm, AB = 6 cm, AE = 3 cm ; on cherche AC.<br>D’après Thalès : AD/AB = AE/AC, soit 2/6 = 3/AC.<br>Produit en croix : AC = (3 × 6) ÷ 2 = 18 ÷ 2 = <b>9 cm</b>.</p>',
    retenir:'Vérifie <b>toujours</b> les conditions (parallèles + points alignés). Rapports <b>dans le même ordre</b>. Réciproque → prouver le parallélisme ; contraposée → le non-parallélisme.'
  }
},
{
  id:'maths-trigonometrie', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'La trigonométrie (cosinus, sinus, tangente)',
  motsCles:['cosinus','sinus','tangente','triangle rectangle','angle','soh cah toa','adjacent','opposé','hypoténuse'],
  contenu:{
    objectifs:['Calculer une longueur à partir d’un angle.','Calculer un angle à partir de deux longueurs.'],
    notions:[
      {terme:'Cosinus', def:'cos(angle) = côté adjacent ÷ hypoténuse.'},
      {terme:'Sinus', def:'sin(angle) = côté opposé ÷ hypoténuse.'},
      {terme:'Tangente', def:'tan(angle) = côté opposé ÷ côté adjacent.'},
      {terme:'Repérer les côtés', def:'l’adjacent touche l’angle, l’opposé est en face de l’angle, l’hypoténuse est face à l’angle droit.'}
    ],
    essentiel:'<p>Dans un <b>triangle rectangle</b>, un <b>angle aigu</b> et deux côtés sont reliés par le cosinus, le sinus ou la tangente. Moyen mnémotechnique : <b>SOH-CAH-TOA</b> (Sin = Opp/Hyp, Cos = Adj/Hyp, Tan = Opp/Adj).</p><p>Pour calculer une <b>longueur</b>, on choisit la formule qui relie le côté connu et le côté cherché, puis on isole l’inconnue. Pour calculer un <b>angle</b>, on utilise les touches inverses <kbd>cos⁻¹</kbd>, <kbd>sin⁻¹</kbd>, <kbd>tan⁻¹</kbd>. La calculatrice doit être en mode <b>degré (DEG)</b>.</p>',
    methode:[
      'Place-toi sur l’angle utilisé et nomme les côtés (adjacent, opposé, hypoténuse).',
      'Choisis la formule reliant les deux côtés connus/cherchés (SOH-CAH-TOA).',
      'Longueur : produit en croix. Angle : touche inverse (cos⁻¹…).'
    ],
    exemple:'<p><b>Longueur</b> — angle B = 30°, hypoténuse BC = 10, côté opposé AC cherché :<br>sin(30°) = AC ÷ BC → AC = sin(30°) × 10 = 0,5 × 10 = <b>5</b>.</p><p><b>Angle</b> — adjacent = 4, hypoténuse = 8 :<br>cos(x) = 4 ÷ 8 = 0,5 → x = cos⁻¹(0,5) = <b>60°</b>.</p>',
    retenir:'<b>SOH-CAH-TOA</b>. Calculatrice en mode <b>degré (DEG)</b>. À connaître : cos(60°) = 0,5 ; sin(30°) = 0,5.'
  }
},
{
  id:'maths-fractions', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les opérations sur les fractions',
  motsCles:['addition','soustraction','multiplication','division','dénominateur commun','simplifier','inverse','fraction'],
  contenu:{
    objectifs:['Additionner, soustraire, multiplier et diviser des fractions.','Simplifier une fraction.'],
    notions:[
      {terme:'Addition / soustraction', def:'même dénominateur → on additionne (ou soustrait) les numérateurs et on garde le dénominateur. Sinon, on réduit d’abord au même dénominateur.'},
      {terme:'Multiplication', def:'numérateurs entre eux, dénominateurs entre eux : a/b × c/d = (a×c)/(b×d).'},
      {terme:'Division', def:'multiplier par l’inverse : a/b ÷ c/d = a/b × d/c.'},
      {terme:'Simplifier', def:'diviser numérateur et dénominateur par un même nombre (leur PGCD).'}
    ],
    essentiel:'<p>Pour <b>additionner ou soustraire</b>, il faut un <b>dénominateur commun</b> (souvent un multiple commun des dénominateurs). Pour <b>multiplier</b>, on multiplie « en ligne » ; on peut simplifier avant de calculer. Pour <b>diviser</b>, on multiplie par l’<b>inverse</b> de la deuxième fraction. On <b>simplifie</b> toujours le résultat final.</p><p>Erreur fréquente : ne jamais additionner les dénominateurs. Pour 2/3 + 1/4, on ne fait pas 3/7 !</p>',
    exemple:'<p><b>Addition</b> : 2/3 + 1/4 = 8/12 + 3/12 = <b>11/12</b>.<br><b>Multiplication</b> : 3/5 × 10/9 = 30/45 = <b>2/3</b> (simplifié).<br><b>Division</b> : 2/3 ÷ 4/5 = 2/3 × 5/4 = 10/12 = <b>5/6</b>.</p>',
    retenir:'Pour + et − : <b>dénominateur commun</b> (jamais additionner les dénominateurs). Diviser = multiplier par l’<b>inverse</b>. Toujours <b>simplifier</b>.'
  }
},
{
  id:'maths-puissances', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les puissances',
  motsCles:['exposant','puissance de 10','notation scientifique','carré','cube','négatif','règles'],
  contenu:{
    objectifs:['Utiliser les règles de calcul des puissances.','Écrire un nombre en notation scientifique.'],
    notions:[
      {terme:'Définition', def:'aⁿ = a×a×…×a (n facteurs). a¹ = a ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ.'},
      {terme:'Règles', def:'aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ ÷ aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ.'},
      {terme:'Puissances de 10', def:'10ⁿ = 1 suivi de n zéros ; 10⁻ⁿ = 0,0…01 (n chiffres après la virgule).'},
      {terme:'Notation scientifique', def:'écriture a × 10ⁿ avec 1 ≤ a < 10 (un seul chiffre non nul avant la virgule).'}
    ],
    essentiel:'<p>Une puissance est une multiplication répétée. Les <b>puissances de 10</b> servent à écrire simplement les très grands et très petits nombres, sous forme de <b>notation scientifique</b> a × 10ⁿ.</p><p>Attention aux signes : (−2)² = 4 (le carré d’un négatif est positif), mais −2² = −4 (ici la puissance s’applique avant le signe). Un exposant <b>négatif</b> ne donne pas un nombre négatif, mais un nombre entre 0 et 1.</p>',
    exemple:'<p>10³ = 1000 ; 10⁻² = 0,01.<br>52 000 = <b>5,2 × 10⁴</b> ; 0,00047 = <b>4,7 × 10⁻⁴</b>.<br>10⁵ × 10³ = 10⁸ ; (10²)³ = 10⁶.</p>',
    retenir:'Exposant <b>positif</b> → grand nombre ; exposant <b>négatif</b> → nombre entre 0 et 1. Notation scientifique : <b>1 ≤ a < 10</b>.'
  }
},
{
  id:'maths-calcul-litteral', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Le calcul littéral : développer et factoriser',
  motsCles:['développer','factoriser','distributivité','identités remarquables','réduire','facteur commun','expression'],
  contenu:{
    objectifs:['Développer un produit.','Factoriser une expression.','Utiliser les identités remarquables.'],
    notions:[
      {terme:'Développer', def:'transformer un produit en somme : k(a+b) = ka + kb (distributivité).'},
      {terme:'Double distributivité', def:'(a+b)(c+d) = ac + ad + bc + bd.'},
      {terme:'Identités remarquables', def:'(a+b)² = a²+2ab+b² ; (a−b)² = a²−2ab+b² ; (a+b)(a−b) = a²−b².'},
      {terme:'Factoriser', def:'transformer une somme en produit, avec un facteur commun ou une identité remarquable.'}
    ],
    essentiel:'<p><b>Développer</b>, c’est enlever les parenthèses (passer d’un produit à une somme), puis <b>réduire</b> les termes semblables. <b>Factoriser</b>, c’est l’opération inverse : faire apparaître un produit (passer d’une somme à un produit).</p><p>Pour factoriser, deux méthodes : chercher un <b>facteur commun</b> à tous les termes, ou reconnaître une <b>identité remarquable</b> (surtout a²−b² = (a−b)(a+b)). La factorisation est utile pour résoudre des équations avec l’équation-produit.</p>',
    exemple:'<p><b>Développer</b> : (x+3)(x−2) = x²−2x+3x−6 = <b>x²+x−6</b>.<br>(2x+5)² = (2x)²+2×2x×5+5² = <b>4x²+20x+25</b>.<br><b>Factoriser</b> (facteur commun) : 5x + 35 = <b>5(x+7)</b>.<br><b>Factoriser</b> (identité) : x²−9 = x²−3² = <b>(x−3)(x+3)</b>.</p>',
    retenir:'Développer = produit → somme ; factoriser = somme → produit. Pour factoriser : <b>facteur commun</b> ou <b>identité remarquable</b> (surtout a²−b²).'
  }
},
{
  id:'maths-equations', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Les équations du premier degré',
  motsCles:['équation','inconnue','résoudre','x','produit nul','mise en équation','solution'],
  contenu:{
    objectifs:['Résoudre une équation à une inconnue.','Résoudre une équation-produit.','Mettre un problème en équation.'],
    notions:[
      {terme:'Équation', def:'égalité contenant une inconnue (souvent x). La résoudre = trouver la (les) valeur(s) qui rendent l’égalité vraie.'},
      {terme:'Règles', def:'on peut ajouter/soustraire un même nombre aux deux membres, ou multiplier/diviser par un même nombre non nul.'},
      {terme:'Équation-produit', def:'A × B = 0 équivaut à A = 0 OU B = 0.'}
    ],
    essentiel:'<p>Résoudre une équation, c’est <b>isoler x</b> : on regroupe les termes en x d’un côté et les nombres de l’autre, puis on divise par le coefficient de x. Astuce : un terme qui « change de côté » <b>change d’opération</b>.</p><p>Une <b>équation-produit</b> (de la forme A × B = 0) se résout en annulant chaque facteur séparément : elle a en général <b>deux</b> solutions. On peut toujours <b>vérifier</b> en remplaçant x par la solution trouvée.</p>',
    methode:[
      'Développe et réduis chaque membre si besoin.',
      'Regroupe les x d’un côté, les nombres de l’autre.',
      'Divise par le coefficient de x.',
      'Vérifie en remplaçant x par la solution.'
    ],
    exemple:'<p>3x + 5 = 20 → 3x = 15 → x = <b>5</b>.<br>5x − 3 = 2x + 9 → 3x = 12 → x = <b>4</b>.<br>(x−2)(x+7) = 0 → x = 2 <b>ou</b> x = <b>−7</b>.</p>',
    retenir:'Isoler x : ce qui change de côté <b>change d’opération</b>. Équation-produit A×B=0 → A=0 ou B=0 (deux solutions). Penser à <b>vérifier</b>.'
  }
},
{
  id:'maths-systemes', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les systèmes de deux équations',
  motsCles:['système','deux inconnues','substitution','combinaison','problème','couple solution','x et y'],
  contenu:{
    objectifs:['Résoudre un système de 2 équations à 2 inconnues.','Modéliser un problème par un système.'],
    notions:[
      {terme:'Substitution', def:'on exprime une inconnue en fonction de l’autre, puis on la remplace dans la seconde équation.'},
      {terme:'Combinaison', def:'on additionne ou soustrait les équations (après multiplication éventuelle) pour éliminer une inconnue.'},
      {terme:'Solution', def:'un couple (x ; y) qui vérifie les DEUX équations en même temps.'}
    ],
    essentiel:'<p>Un <b>système</b> cherche deux nombres (x et y) qui vérifient <b>deux conditions simultanément</b>. On l’utilise beaucoup pour les problèmes à deux inconnues (prix de deux articles, quantités…). Bien <b>définir les inconnues</b> au départ est essentiel.</p><p>Deux méthodes : la <b>substitution</b> (pratique quand une inconnue est déjà isolée) et la <b>combinaison linéaire</b> (on additionne ou soustrait les lignes pour faire disparaître une inconnue). La solution est un <b>couple (x ; y)</b> que l’on peut vérifier dans les deux équations.</p>',
    exemple:'<p>Système { x + y = 10 ; x − y = 4 }.<br><b>Combinaison</b> : on additionne les deux lignes → 2x = 14 → x = 7. Puis 7 + y = 10 → y = 3.<br>Solution : le couple <b>(7 ; 3)</b>.</p>',
    retenir:'La solution est un <b>couple (x ; y)</b> valable dans les <b>deux</b> équations. Méthodes : <b>substitution</b> ou <b>combinaison</b>.'
  }
},
{
  id:'maths-fonctions', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Notion de fonction',
  motsCles:['fonction','image','antécédent','tableau de valeurs','courbe','graphique','f(x)','lecture graphique'],
  contenu:{
    objectifs:['Comprendre image et antécédent.','Lire une fonction sur un graphique ou un tableau.'],
    notions:[
      {terme:'Fonction', def:'procédé qui associe à un nombre x un unique nombre noté f(x).'},
      {terme:'Image', def:'f(x) est l’image de x. Un nombre x a une seule image.'},
      {terme:'Antécédent', def:'x est un antécédent de f(x). Un nombre peut avoir plusieurs antécédents (ou aucun).'},
      {terme:'Lecture graphique', def:'pour une image, on part de l’axe horizontal (x) ; pour un antécédent, on part de l’axe vertical (y).'}
    ],
    essentiel:'<p>Une fonction est comme une <b>machine</b> : on entre un nombre x, elle renvoie f(x). On peut la décrire par une <b>formule</b>, un <b>tableau de valeurs</b> ou une <b>courbe</b>.</p><p>Il faut bien distinguer <b>image</b> et <b>antécédent</b>. Calculer l’<b>image</b> de x, c’est remplacer x dans la formule. Trouver un <b>antécédent</b> d’un nombre, c’est résoudre une équation (f(x) = ce nombre). Graphiquement, l’image se lit verticalement, l’antécédent horizontalement.</p>',
    exemple:'<p>f(x) = 2x + 1.<br>Image de 3 : f(3) = 2×3+1 = <b>7</b>.<br>Antécédent de 5 : on résout 2x+1 = 5 → 2x = 4 → x = <b>2</b>.</p>',
    retenir:'<b>Image</b> = je pars de x (on calcule f(x)). <b>Antécédent</b> = je pars de y (on résout une équation). Un x a UNE image ; un y peut avoir plusieurs antécédents.'
  }
},
{
  id:'maths-fonctions-affines', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Fonctions linéaires et affines',
  motsCles:['fonction linéaire','fonction affine','coefficient directeur','ordonnée à l’origine','droite','proportionnalité','pente'],
  contenu:{
    objectifs:['Distinguer fonction linéaire et affine.','Tracer, lire et déterminer a et b.'],
    notions:[
      {terme:'Fonction affine', def:'f(x) = ax + b ; sa représentation graphique est une droite.'},
      {terme:'Fonction linéaire', def:'cas où b = 0 : f(x) = ax. Droite passant par l’origine, liée à la proportionnalité.'},
      {terme:'Coefficient directeur a', def:'la pente ; a = (variation de y) ÷ (variation de x) = Δy/Δx.'},
      {terme:'Ordonnée à l’origine b', def:'valeur de f(0) ; c’est là où la droite coupe l’axe des ordonnées.'}
    ],
    essentiel:'<p>Les fonctions affines et linéaires sont représentées par des <b>droites</b>. Le coefficient <b>a</b> donne l’inclinaison (de combien y monte quand x augmente de 1) ; <b>b</b> est la valeur de départ, en x = 0. La fonction <b>linéaire</b> (b = 0) traduit une situation de <b>proportionnalité</b> : sa droite passe par l’origine.</p><p>Pour tracer une droite, il suffit de <b>2 points</b>. Pour trouver <b>a</b> à partir de deux points A et B, on calcule Δy/Δx ; pour trouver <b>b</b>, on utilise f(0) ou un point connu.</p>',
    exemple:'<p>f(x) = 3x + 2 : pente 3, coupe l’axe vertical en 2. f(0)=2, f(1)=5.<br>Coefficient directeur entre A(1;5) et B(3;11) : a = (11−5)/(3−1) = 6/2 = <b>3</b>.</p>',
    retenir:'a = <b>ce que monte y</b> quand x augmente de 1 (pente) ; b = <b>f(0)</b>. Linéaire ⟺ b = 0 ⟺ proportionnalité (droite par l’origine).'
  }
},
{
  id:'maths-proportionnalite', matiereKey:'maths', matiere:'Mathématiques', niveau:'4e',
  titre:'Proportionnalité et pourcentages',
  motsCles:['proportionnalité','pourcentage','coefficient','produit en croix','coefficient multiplicateur','échelle','vitesse'],
  contenu:{
    objectifs:['Reconnaître une situation de proportionnalité.','Appliquer et calculer des pourcentages.','Utiliser le produit en croix.'],
    notions:[
      {terme:'Coefficient de proportionnalité', def:'nombre par lequel on multiplie pour passer d’une grandeur à l’autre.'},
      {terme:'Produit en croix', def:'pour trouver une 4ᵉ valeur : si a/b = c/d, alors a×d = b×c.'},
      {terme:'Pourcentage', def:'prendre t % d’une valeur = valeur × t/100.'},
      {terme:'Coefficient multiplicateur', def:'augmenter de t % : ×(1 + t/100) ; diminuer de t % : ×(1 − t/100).'}
    ],
    essentiel:'<p>Il y a proportionnalité quand on passe d’une grandeur à l’autre en <b>multipliant par un même nombre</b> (le coefficient). Les <b>pourcentages</b>, <b>échelles</b> et <b>vitesses</b> en sont des applications, ainsi que le <b>produit en croix</b> (règle de trois).</p><p>Les hausses et baisses se calculent avec un <b>coefficient multiplicateur</b> : +20 % revient à ×1,20, −20 % à ×0,80. Attention : deux hausses successives se <b>multiplient</b>, elles ne s’additionnent pas (deux hausses de 10 % ne font pas +20 %).</p>',
    exemple:'<p>Réduction de 20 % sur 50 € : 50 × 0,80 = <b>40 €</b>.<br>Hausse de 15 % sur 200 € : 200 × 1,15 = <b>230 €</b>.<br>Produit en croix : si 3 kg coûtent 12 €, alors 5 kg coûtent (12×5)/3 = <b>20 €</b>.</p>',
    retenir:'Hausse/baisse → <b>coefficient multiplicateur</b> (×1,2 pour +20 %). Deux hausses se <b>multiplient</b>. Produit en croix pour une 4ᵉ valeur.'
  }
},
{
  id:'maths-statistiques', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les statistiques',
  motsCles:['moyenne','médiane','étendue','effectif','fréquence','série','moyenne pondérée','données'],
  contenu:{
    objectifs:['Calculer moyenne, médiane et étendue.','Interpréter une série de données.'],
    notions:[
      {terme:'Moyenne', def:'somme des valeurs ÷ nombre de valeurs. Pondérée : Σ(valeur × effectif) ÷ effectif total.'},
      {terme:'Médiane', def:'valeur qui partage la série ORDONNÉE en deux moitiés (autant de valeurs avant qu’après).'},
      {terme:'Étendue', def:'plus grande valeur − plus petite valeur (mesure la dispersion).'},
      {terme:'Fréquence', def:'effectif d’une valeur ÷ effectif total (souvent exprimée en %).'}
    ],
    essentiel:'<p>Ces indicateurs résument une série de données. La <b>moyenne</b> tient compte de toutes les valeurs ; la <b>médiane</b> représente la valeur « du milieu » et est moins sensible aux valeurs extrêmes ; l’<b>étendue</b> mesure la dispersion.</p><p>Attention : pour la médiane, il faut d’abord <b>ranger</b> les valeurs dans l’ordre croissant. Avec un nombre <b>impair</b> de valeurs, la médiane est la valeur centrale ; avec un nombre <b>pair</b>, c’est la moyenne des deux valeurs centrales.</p>',
    exemple:'<p>Série 4 ; 6 ; 8 ; 10 ; 12 (5 valeurs, déjà rangée).<br>Moyenne = 40 ÷ 5 = <b>8</b> ; médiane = valeur du milieu = <b>8</b> ; étendue = 12 − 4 = <b>8</b>.</p>',
    retenir:'Toujours <b>ranger</b> la série avant la médiane. Nombre pair de valeurs → médiane = moyenne des deux valeurs centrales.'
  }
},
{
  id:'maths-probabilites', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les probabilités',
  motsCles:['probabilité','hasard','issue','événement','équiprobable','événement contraire','arbre','dé'],
  contenu:{
    objectifs:['Calculer la probabilité d’un événement.','Utiliser l’événement contraire et un arbre.'],
    notions:[
      {terme:'Probabilité', def:'nombre entre 0 (impossible) et 1 (certain) qui mesure la chance qu’un événement se produise.'},
      {terme:'Équiprobabilité', def:'P(événement) = nombre de cas favorables ÷ nombre de cas possibles.'},
      {terme:'Événement contraire', def:'P(contraire) = 1 − P(événement).'},
      {terme:'Deux épreuves (arbre)', def:'on multiplie les probabilités le long d’un chemin.'}
    ],
    essentiel:'<p>Une probabilité mesure le <b>hasard</b> sur une échelle de 0 à 1. En situation <b>équiprobable</b> (dé équilibré, pièce non truquée), on compte les cas favorables sur le nombre de cas possibles. La somme des probabilités de toutes les issues vaut toujours <b>1</b>.</p><p>L’<b>événement contraire</b> simplifie souvent les calculs (« au moins un… » = 1 − « aucun »). Pour deux épreuves successives, on utilise un <b>arbre</b> : on multiplie les probabilités le long d’un chemin.</p>',
    exemple:'<p>Un dé équilibré : P(6) = <b>1/6</b> ; P(nombre pair) = 3/6 = <b>1/2</b> ; P(ne pas faire 6) = 1 − 1/6 = <b>5/6</b>.</p>',
    retenir:'0 ≤ P ≤ 1 ; somme des probabilités = <b>1</b>. Contraire : 1 − P. Sur un arbre, on <b>multiplie</b> le long d’un chemin.'
  }
},
{
  id:'maths-volumes', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Volumes et agrandissement-réduction',
  motsCles:['volume','cylindre','pyramide','cône','sphère','boule','coefficient','k²','k³','unités'],
  contenu:{
    objectifs:['Calculer le volume des solides usuels.','Gérer les effets d’un agrandissement ou d’une réduction.'],
    notions:[
      {terme:'Prisme / cylindre', def:'V = aire de base × hauteur.'},
      {terme:'Pyramide / cône', def:'V = (aire de base × hauteur) ÷ 3.'},
      {terme:'Boule', def:'V = 4/3 × π × R³ (aire de la sphère = 4πR²).'},
      {terme:'Agrandissement de rapport k', def:'les longueurs sont ×k, les aires ×k², les volumes ×k³.'}
    ],
    essentiel:'<p>Chaque solide a sa <b>formule de volume</b> : penser à diviser par 3 pour les pyramides et cônes. Il faut faire attention aux <b>unités</b> : 1 L = 1 dm³ = 1000 cm³.</p><p>Lors d’un <b>agrandissement ou d’une réduction</b> de rapport k, l’erreur classique est de tout multiplier par k. En réalité, seules les <b>longueurs</b> sont ×k ; les <b>aires</b> sont ×<b>k²</b> et les <b>volumes</b> ×<b>k³</b>.</p>',
    exemple:'<p>Cylindre R = 3 cm, h = 10 cm : V = π × 3² × 10 = 90π ≈ <b>283 cm³</b>.<br>Si on double toutes les dimensions (k = 2), le volume est ×2³ = <b>×8</b>.</p>',
    retenir:'Pyramide/cône : ÷3. Unités : 1 L = 1000 cm³. Agrandissement k → longueurs ×k, aires ×<b>k²</b>, volumes ×<b>k³</b>.'
  }
},
{
  id:'maths-grandeurs-composees', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Grandeurs composées et conversions',
  motsCles:['vitesse','débit','masse volumique','conversion','km/h','m/s','grandeur quotient','unités'],
  contenu:{
    objectifs:['Utiliser des grandeurs composées (vitesse, débit…).','Convertir des unités.'],
    notions:[
      {terme:'Grandeur quotient', def:'obtenue en divisant deux grandeurs : vitesse = distance ÷ temps ; masse volumique = masse ÷ volume.'},
      {terme:'Grandeur produit', def:'obtenue en multipliant : énergie (kWh) = puissance × durée.'},
      {terme:'Conversion m/s ↔ km/h', def:'de m/s vers km/h : ×3,6 ; de km/h vers m/s : ÷3,6.'}
    ],
    essentiel:'<p>De nombreuses grandeurs du quotidien sont <b>composées</b> : la vitesse (km/h), le débit (L/min), la masse volumique (g/cm³). Le mot « <b>par</b> » indique une <b>division</b>. On les manipule comme des <b>proportionnalités</b>, en veillant à la cohérence des <b>unités</b>.</p>',
    exemple:'<p>150 km parcourus en 2 h → v = 150 ÷ 2 = <b>75 km/h</b>.<br>Conversion en m/s : 75 ÷ 3,6 ≈ <b>20,8 m/s</b>.</p>',
    retenir:'« par » = division. Vérifie les <b>unités</b>. m/s → km/h : <b>×3,6</b> ; km/h → m/s : <b>÷3,6</b>.'
  }
},
{
  id:'maths-arithmetique', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Arithmétique : diviseurs, nombres premiers, PGCD',
  motsCles:['diviseur','multiple','nombre premier','pgcd','fraction irréductible','décomposition','euclide'],
  contenu:{
    objectifs:['Reconnaître un nombre premier et décomposer un entier.','Calculer un PGCD et rendre une fraction irréductible.'],
    notions:[
      {terme:'Nombre premier', def:'entier ayant exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13…). 1 n’est pas premier ; 2 est le seul pair.'},
      {terme:'Décomposition', def:'écrire un entier comme produit de facteurs premiers (ex. 24 = 2³ × 3).'},
      {terme:'PGCD', def:'plus grand diviseur commun à deux nombres (algorithme d’Euclide ou des soustractions).'},
      {terme:'Fraction irréductible', def:'obtenue en divisant numérateur et dénominateur par leur PGCD.'}
    ],
    essentiel:'<p>Tout entier se <b>décompose</b> de façon unique en produit de facteurs premiers. Le <b>PGCD</b> de deux nombres est leur plus grand diviseur commun ; on peut le trouver par la décomposition ou par l’algorithme d’Euclide (divisions successives).</p><p>Le PGCD sert à <b>simplifier</b> une fraction jusqu’à la rendre <b>irréductible</b> : une fraction est irréductible lorsque le PGCD du numérateur et du dénominateur vaut 1.</p>',
    exemple:'<p>PGCD(24 ; 36) : 24 = 2³×3 et 36 = 2²×3² → PGCD = 2²×3 = <b>12</b>.<br>Donc 24/36 = (24÷12)/(36÷12) = <b>2/3</b> (irréductible).</p>',
    retenir:'Nombre premier = 2 diviseurs (1 et lui-même). Une fraction est <b>irréductible</b> quand PGCD(numérateur ; dénominateur) = 1.'
  }
},
{
  id:'maths-scratch', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Algorithmique et programmation (Scratch)',
  motsCles:['algorithme','scratch','programme','boucle','variable','condition','coordonnées','déplacement'],
  contenu:{
    objectifs:['Lire et compléter un programme.','Comprendre boucles, variables et conditions.'],
    notions:[
      {terme:'Algorithme', def:'suite d’instructions précises et ordonnées pour obtenir un résultat.'},
      {terme:'Boucle', def:'« répéter … fois » exécute plusieurs fois un bloc d’instructions.'},
      {terme:'Condition', def:'« si … alors … sinon » : le programme choisit selon un test (vrai/faux).'},
      {terme:'Variable', def:'case mémoire qui stocke une valeur (score, position, compteur…).'}
    ],
    essentiel:'<p>Un programme exécute les instructions <b>dans l’ordre</b>. Les <b>boucles</b> évitent de répéter le même bloc, les <b>conditions</b> permettent des choix selon un test, et les <b>variables</b> gardent des valeurs en mémoire.</p><p>Sur Scratch, pour prédire ce que fait un lutin, il faut suivre pas à pas ses <b>coordonnées (x ; y)</b> et le sens des <b>angles</b> (« s’orienter à 90° », « tourner de 90° »). On lit le script instruction par instruction.</p>',
    exemple:'<p>« Aller à x:0 y:0 ; répéter 4 fois [avancer de 100 ; tourner de 90°] » trace un <b>carré</b> de côté 100.</p>',
    retenir:'Suivre les instructions <b>dans l’ordre</b>. Compter les <b>répétitions</b> et suivre les <b>coordonnées/angles</b> pour prédire le tracé.'
  }
},
{
  id:'maths-angles-cercle', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Angles inscrits et angles au centre',
  motsCles:['angle inscrit','angle au centre','cercle','arc','polygone régulier','géométrie'],
  contenu:{
    objectifs:['Relier angle inscrit et angle au centre.','Calculer des angles dans un cercle et un polygone régulier.'],
    notions:[
      {terme:'Angle au centre', def:'angle dont le sommet est le centre du cercle.'},
      {terme:'Angle inscrit', def:'angle dont le sommet est sur le cercle et qui intercepte un arc.'},
      {terme:'Propriété principale', def:'l’angle au centre vaut le double de l’angle inscrit qui intercepte le même arc.'},
      {terme:'Angles inscrits', def:'deux angles inscrits interceptant le même arc sont égaux.'}
    ],
    essentiel:'<p>Dans un cercle, un <b>angle au centre</b> vaut <b>2 fois</b> l’angle inscrit qui « voit » le même arc. Réciproquement, l’angle inscrit vaut la moitié de l’angle au centre correspondant. De plus, deux angles inscrits interceptant le même arc sont <b>égaux</b>.</p><p>Ces propriétés s’appliquent aussi aux <b>polygones réguliers</b> inscrits dans un cercle : l’angle au centre entre deux sommets consécutifs vaut 360° ÷ n (n = nombre de côtés).</p>',
    exemple:'<p>Angle au centre de 80° → angle inscrit correspondant = 80 ÷ 2 = <b>40°</b>.<br>Hexagone régulier : angle au centre = 360 ÷ 6 = <b>60°</b>.</p>',
    retenir:'Même arc → angle au centre = <b>2 ×</b> angle inscrit. Polygone régulier à n côtés : angle au centre = <b>360°/n</b>.'
  }
},
{
  id:'maths-relatifs', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Les nombres relatifs',
  motsCles:['nombre relatif','négatif','positif','addition','soustraction','règle des signes','opposé'],
  contenu:{
    objectifs:['Additionner et soustraire des relatifs.','Multiplier et diviser avec la règle des signes.'],
    notions:[
      {terme:'Nombre relatif', def:'nombre positif ou négatif (ex. −5 ; +3). L’opposé d’un nombre a le signe contraire.'},
      {terme:'Somme', def:'mêmes signes → on additionne les distances et on garde le signe ; signes différents → on soustrait et on prend le signe du plus grand.'},
      {terme:'Soustraction', def:'soustraire = ajouter l’opposé : a − (−b) = a + b.'},
      {terme:'Règle des signes (× et ÷)', def:'(+)(+) = + ; (−)(−) = + ; (+)(−) = − ; (−)(+) = −.'}
    ],
    essentiel:'<p>Les <b>relatifs</b> possèdent un <b>signe</b>. Pour la <b>multiplication</b> et la <b>division</b>, on applique la règle des signes : <b>deux mêmes signes → positif</b>, <b>deux signes différents → négatif</b> (« moins par moins = plus »).</p><p>Pour l’<b>addition</b> et la <b>soustraction</b>, attention aux signes devant les parenthèses : soustraire un nombre revient à <b>ajouter son opposé</b>.</p>',
    exemple:'<p>−3 + 8 = +5 ; −3 − 8 = −11 ; 5 − (−3) = 5 + 3 = <b>8</b>.<br>(−4) × (−2) = <b>+8</b> ; (−12) ÷ 3 = <b>−4</b>.</p>',
    retenir:'« Moins par moins = plus ». Soustraire = <b>ajouter l’opposé</b>. Bien gérer les signes devant les parenthèses.'
  }
},
{
  id:'maths-priorites', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Priorités opératoires et calculs',
  motsCles:['priorité','parenthèses','multiplication','addition','ordre des opérations','calcul'],
  contenu:{
    objectifs:['Respecter les priorités de calcul.','Mener un calcul par étapes.'],
    notions:[
      {terme:'Règle des priorités', def:'1) les parenthèses ; 2) les puissances ; 3) les × et ÷ ; 4) les + et −.'},
      {terme:'À priorité égale', def:'on calcule de gauche à droite.'}
    ],
    essentiel:'<p>Dans un calcul, on effectue en priorité les <b>parenthèses</b>, puis les <b>puissances</b>, puis les <b>× et ÷</b>, et enfin les <b>+ et −</b>. À priorité égale (par exemple plusieurs × et ÷), on calcule de <b>gauche à droite</b>.</p><p>Erreur classique : 3 + 4 × 2 n’est pas 14 mais 11, car la multiplication passe avant l’addition.</p>',
    exemple:'<p>3 + 4 × 2 = 3 + 8 = <b>11</b> (et non 14).<br>(3 + 4) × 2 = 7 × 2 = <b>14</b>.<br>20 − 2 × 3² = 20 − 2 × 9 = 20 − 18 = <b>2</b>.</p>',
    retenir:'Ordre : <b>parenthèses → puissances → × et ÷ → + et −</b>. À priorité égale, de gauche à droite.'
  }
},
{
  id:'maths-racine-carree', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'La racine carrée',
  motsCles:['racine carrée','carré','radical','carrés parfaits','pythagore','simplifier'],
  contenu:{
    objectifs:['Comprendre la notion de racine carrée.','Simplifier des expressions simples.'],
    notions:[
      {terme:'Racine carrée', def:'√a est le nombre POSITIF dont le carré vaut a. Elle existe seulement si a ≥ 0.'},
      {terme:'Propriétés', def:'(√a)² = a ; √a × √a = a ; √(a×b) = √a × √b.'},
      {terme:'Carrés parfaits', def:'√1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.'}
    ],
    essentiel:'<p>La <b>racine carrée</b> est l’opération inverse du <b>carré</b>. Elle apparaît souvent avec le théorème de <b>Pythagore</b>. Certaines racines « tombent juste » (carrés parfaits), d’autres non (nombres irrationnels comme √2).</p><p>Pour <b>simplifier</b> une racine, on cherche le plus grand <b>carré parfait</b> qui divise le nombre sous la racine, puis on utilise √(a×b) = √a × √b.</p>',
    exemple:'<p>√49 = 7 (car 7² = 49).<br>√50 = √(25 × 2) = √25 × √2 = <b>5√2</b>.<br>(√7)² = <b>7</b>.</p>',
    retenir:'√a existe seulement si <b>a ≥ 0</b> et donne un résultat positif. Pour simplifier : sortir le plus grand <b>carré parfait</b>.'
  }
},
{
  id:'maths-angles-triangles', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Angles et triangles',
  motsCles:['somme des angles','triangle','alternes-internes','correspondants','parallèles','isocèle','équilatéral','180 degrés'],
  contenu:{
    objectifs:['Utiliser la somme des angles d’un triangle.','Reconnaître les angles formés par des parallèles.'],
    notions:[
      {terme:'Somme des angles', def:'dans tout triangle, la somme des trois angles vaut 180°.'},
      {terme:'Triangles particuliers', def:'équilatéral → 3 angles de 60° ; isocèle → les deux angles à la base sont égaux.'},
      {terme:'Angles alternes-internes', def:'égaux lorsque les deux droites coupées sont parallèles.'},
      {terme:'Angles correspondants', def:'égaux lorsque les deux droites sont parallèles.'}
    ],
    essentiel:'<p>La <b>somme des angles</b> d’un triangle vaut toujours <b>180°</b> : cela permet de calculer un angle manquant. Les triangles particuliers ont des propriétés utiles : l’<b>équilatéral</b> a trois angles de 60°, l’<b>isocèle</b> a deux angles égaux à la base.</p><p>Deux droites <b>parallèles</b> coupées par une sécante forment des angles <b>alternes-internes</b> et <b>correspondants</b> égaux : c’est très utile pour justifier une égalité d’angles dans une démonstration.</p>',
    exemple:'<p>Triangle avec deux angles de 60° et 70° : le troisième = 180 − 60 − 70 = <b>50°</b>.<br>Triangle isocèle avec un angle au sommet de 40° : chaque angle à la base = (180 − 40) ÷ 2 = <b>70°</b>.</p>',
    retenir:'Triangle → <b>180°</b> ; équilatéral → <b>60°</b> partout. Parallèles → angles alternes-internes et correspondants <b>égaux</b>.'
  }
},
{
  id:'maths-transformations', matiereKey:'maths', matiere:'Mathématiques', niveau:'3e',
  titre:'Les transformations géométriques',
  motsCles:['symétrie axiale','symétrie centrale','translation','rotation','homothétie','image','isométrie'],
  contenu:{
    objectifs:['Reconnaître et construire des transformations.','Savoir ce que chaque transformation conserve.'],
    notions:[
      {terme:'Symétrie axiale', def:'« pliage » par rapport à un axe (effet miroir).'},
      {terme:'Symétrie centrale', def:'demi-tour autour d’un point (rotation de 180°).'},
      {terme:'Translation', def:'glissement défini par une direction, un sens et une longueur.'},
      {terme:'Rotation', def:'rotation autour d’un point (le centre), d’un certain angle et dans un sens donné.'},
      {terme:'Homothétie', def:'agrandissement ou réduction de rapport k depuis un centre ; les longueurs sont multipliées par |k|.'}
    ],
    essentiel:'<p>Une <b>transformation</b> déplace ou modifie une figure. Les symétries (axiale et centrale), la translation et la rotation <b>conservent les longueurs</b> : ce sont des <b>isométries</b> (la figure garde la même taille et la même forme).</p><p>Seule l’<b>homothétie</b> change la <b>taille</b> : elle agrandit (|k| > 1) ou réduit (|k| < 1). Comme pour l’agrandissement-réduction, les longueurs sont ×|k|, les aires ×k².</p>',
    exemple:'<p>Symétrie centrale de centre O : chaque point A a une image A’ telle que O est le milieu de [AA’].<br>Homothétie de rapport k = 2 : la figure devient 2 fois plus grande (aires ×4, volumes ×8).</p>',
    retenir:'Isométries (symétries, translation, rotation) → <b>mêmes longueurs</b>. Homothétie de rapport k → longueurs ×|k|, aires ×k².'
  }
},
{
  id:'maths-perimetres-aires', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Périmètres et aires',
  motsCles:['périmètre','aire','rectangle','triangle','disque','cercle','parallélogramme','pi','surface'],
  contenu:{
    objectifs:['Calculer périmètres et aires des figures usuelles.','Ne pas confondre longueur et surface.'],
    notions:[
      {terme:'Rectangle', def:'périmètre = 2 × (L + l) ; aire = L × l.'},
      {terme:'Triangle', def:'aire = (base × hauteur) ÷ 2.'},
      {terme:'Parallélogramme', def:'aire = base × hauteur.'},
      {terme:'Disque', def:'circonférence = 2 × π × R ; aire = π × R² (R = rayon).'}
    ],
    essentiel:'<p>Le <b>périmètre</b> est une <b>longueur</b> (le contour, en cm), tandis que l’<b>aire</b> est une <b>surface</b> (en cm²) : il ne faut pas les confondre, ni mélanger leurs unités.</p><p>Pour le disque, l’erreur fréquente est de confondre <b>rayon</b> et <b>diamètre</b> : dans les formules, on utilise toujours le <b>rayon</b> (D = 2R). On garde π ou on utilise une valeur approchée (3,14) selon la consigne.</p>',
    exemple:'<p>Disque de rayon 5 cm : circonférence = 2π × 5 ≈ 31,4 cm ; aire = π × 5² = 25π ≈ <b>78,5 cm²</b>.<br>Triangle base 6, hauteur 4 : aire = (6 × 4) ÷ 2 = <b>12</b>.</p>',
    retenir:'Périmètre en <b>cm</b>, aire en <b>cm²</b>. Formules du disque avec le <b>rayon</b> (pas le diamètre).'
  }
},
{
  id:'maths-reperage', matiereKey:'maths', matiere:'Mathématiques', niveau:'5e',
  titre:'Repérage et coordonnées',
  motsCles:['repère','coordonnées','abscisse','ordonnée','point','axe','plan','origine'],
  contenu:{
    objectifs:['Lire et placer un point dans un repère.','Comprendre abscisse et ordonnée.'],
    notions:[
      {terme:'Repère', def:'deux axes gradués perpendiculaires (horizontal = abscisses, vertical = ordonnées) qui se croisent à l’origine O(0 ; 0).'},
      {terme:'Abscisse', def:'la première coordonnée (position horizontale, axe des x).'},
      {terme:'Ordonnée', def:'la seconde coordonnée (position verticale, axe des y).'}
    ],
    essentiel:'<p>Un point est repéré par un couple <b>(x ; y)</b> : d’abord l’<b>abscisse</b> (déplacement horizontal), puis l’<b>ordonnée</b> (déplacement vertical), à partir de l’origine O. C’est la base pour tracer et lire des <b>fonctions</b> et des graphiques.</p><p>Attention à l’ordre : toujours l’abscisse en premier. Un nombre négatif signifie qu’on va à gauche (abscisse) ou vers le bas (ordonnée).</p>',
    exemple:'<p>Placer A(3 ; 2) : depuis O, on avance de 3 vers la droite, puis de 2 vers le haut.<br>Point B(−1 ; 4) : 1 vers la gauche, 4 vers le haut.</p>',
    retenir:'Toujours l’ordre <b>(abscisse ; ordonnée)</b> = (x ; y). L’origine est le point O(0 ; 0).'
  }
}
]);
