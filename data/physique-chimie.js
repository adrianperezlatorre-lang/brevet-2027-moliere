window.FICHES = (window.FICHES || []).concat([
{
  id:'pc-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La constitution de la matière (atomes, molécules, ions)',
  motsCles:['atome','molécule','ion','élément','symbole','noyau','électron','proton','neutron','conservation'],
  contenu:{
    objectifs:['Décrire la constitution d’un atome.','Distinguer atome, molécule et ion.','Comprendre la conservation des atomes.'],
    notions:[
      {terme:'Atome', def:'plus petit constituant de la matière : un noyau central (protons chargés +, neutrons neutres) entouré d’électrons (chargés −). Globalement neutre.'},
      {terme:'Élément chimique', def:'représenté par un symbole (H, O, C, Fe, Na…) ; il en existe une centaine.'},
      {terme:'Molécule', def:'assemblage d’au moins deux atomes liés (H₂O, CO₂, O₂, N₂).'},
      {terme:'Ion', def:'atome (ou groupe d’atomes) ayant gagné ou perdu un ou plusieurs électrons ; il devient chargé.'},
      {terme:'Ion positif / négatif', def:'un atome qui PERD des électrons devient un ion + (Na⁺) ; s’il en GAGNE, un ion − (Cl⁻).'}
    ],
    essentiel:'<p>Toute la matière (solide, liquide ou gaz) est faite de particules extrêmement petites : les <b>atomes</b>. Un atome est constitué d’un <b>noyau</b> (protons + et neutrons) autour duquel se déplacent des <b>électrons</b> (−). Comme il y a autant de protons que d’électrons, l’atome est <b>neutre</b>. Chaque type d’atome correspond à un <b>élément chimique</b> désigné par un <b>symbole</b>.</p><p>Les atomes s’assemblent pour former des <b>molécules</b> (l’eau H₂O contient 2 H et 1 O). Un atome peut aussi devenir un <b>ion</b> en gagnant ou perdant des électrons : il n’est alors plus neutre mais <b>chargé</b>. Beaucoup de solutions (eau salée, eau du robinet) contiennent des ions.</p><p>Lors d’une transformation chimique, les atomes se <b>réorganisent</b> mais ne sont ni créés ni détruits : ils se <b>conservent</b>. C’est pourquoi la masse totale se conserve aussi.</p>',
    exemple:'<p>Le sel de table (NaCl) dissous dans l’eau libère des ions <b>Na⁺</b> (sodium ayant perdu 1 électron) et <b>Cl⁻</b> (chlore ayant gagné 1 électron).</p>',
    retenir:'Atome = <b>neutre</b> (noyau + / électrons −) ; ion = <b>chargé</b> (+ s’il perd des électrons, − s’il en gagne). Les atomes se <b>conservent</b> dans une réaction.'
  }
},
{
  id:'pc-transformation-chimique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les transformations chimiques',
  motsCles:['réaction chimique','réactif','produit','équation','conservation de la masse','combustion','équilibrer','transformation'],
  contenu:{
    objectifs:['Reconnaître une transformation chimique.','Identifier réactifs et produits.','Équilibrer une équation et utiliser la conservation de la masse.'],
    notions:[
      {terme:'Transformation chimique', def:'des espèces disparaissent et de nouvelles apparaissent (contrairement à une transformation physique où l’espèce reste la même, ex. fusion de la glace).'},
      {terme:'Réactifs', def:'espèces présentes au départ, qui sont consommées.'},
      {terme:'Produits', def:'espèces formées à la fin.'},
      {terme:'Équation de réaction', def:'écriture symbolique : réactifs → produits.'},
      {terme:'Conservation', def:'les atomes se conservent : autant de chaque type avant et après → la masse totale se conserve.'}
    ],
    essentiel:'<p>Lors d’une <b>transformation chimique</b>, certaines espèces (les <b>réactifs</b>) sont consommées et de nouvelles espèces (les <b>produits</b>) apparaissent : la matière change de nature. On la distingue d’une transformation physique (comme un changement d’état) où l’espèce chimique reste la même.</p><p>On la décrit par une <b>équation de réaction</b>. Comme les <b>atomes se conservent</b> (ni créés, ni détruits), il faut « <b>équilibrer</b> » l’équation : il doit y avoir autant d’atomes de chaque élément à gauche et à droite. Par conséquent, la <b>masse totale se conserve</b> : masse des réactifs = masse des produits.</p><p>Attention : lors d’une combustion à l’air libre, un des réactifs est le dioxygène de l’air ; si on ne pèse que le solide, on peut croire à tort que la masse a changé.</p>',
    exemple:'<p>Combustion du carbone : <b>C + O₂ → CO₂</b>. À gauche : 1 C et 2 O ; à droite : 1 C et 2 O → équation équilibrée, masse conservée.</p>',
    retenir:'Réactifs → produits. Les <b>atomes se conservent</b> → équation <b>équilibrée</b> et <b>masse des réactifs = masse des produits</b>.'
  }
},
{
  id:'pc-melanges', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Mélanges, solutions et corps purs',
  motsCles:['mélange','solution','soluté','solvant','corps pur','filtration','décantation','évaporation','homogène','hétérogène'],
  contenu:{
    objectifs:['Distinguer corps pur et mélange (homogène/hétérogène).','Choisir une technique pour séparer les constituants.'],
    notions:[
      {terme:'Corps pur', def:'constitué d’une seule espèce chimique (eau distillée, dioxygène, cuivre).'},
      {terme:'Mélange homogène', def:'on ne distingue pas les constituants à l’œil (eau salée, air).'},
      {terme:'Mélange hétérogène', def:'on distingue les constituants (eau + sable, vinaigrette).'},
      {terme:'Solution', def:'mélange homogène d’un soluté (ce qui est dissous) dans un solvant (souvent l’eau).'},
      {terme:'Techniques de séparation', def:'décantation (le solide se dépose), filtration (retient le solide non dissous), évaporation (récupère le solide dissous).'}
    ],
    essentiel:'<p>Un <b>corps pur</b> ne contient qu’une seule espèce chimique, tandis qu’un <b>mélange</b> en contient plusieurs. Un mélange est <b>homogène</b> quand on ne distingue pas ses constituants (une <b>solution</b> comme l’eau salée) et <b>hétérogène</b> quand on les distingue (eau + huile, eau + sable).</p><p>Dans une solution, le corps dissous est le <b>soluté</b> et le liquide qui dissout est le <b>solvant</b>. Pour séparer les constituants d’un mélange, on choisit la technique adaptée : la <b>décantation</b> (on laisse déposer), la <b>filtration</b> (le filtre retient le solide non dissous mais laisse passer l’eau et ce qui est dissous), ou l’<b>évaporation</b> (l’eau s’évapore et laisse le solide dissous).</p>',
    exemple:'<p>Eau salée = solution (homogène). Une <b>filtration</b> ne retire pas le sel (il est dissous) ; il faut une <b>évaporation</b> pour récupérer le sel. Eau + sable = hétérogène → la <b>filtration</b> retient le sable.</p>',
    retenir:'Homogène = <b>on ne distingue pas</b> ; hétérogène = <b>on distingue</b>. Filtration = solides non dissous ; évaporation = solides dissous.'
  }
},
{
  id:'pc-ph', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Acides, bases et pH',
  motsCles:['pH','acide','base','neutre','dilution','indicateur','ion H+','ion HO-','échelle','sécurité'],
  contenu:{
    objectifs:['Utiliser l’échelle de pH.','Relier acidité et ions H⁺.','Comprendre l’effet d’une dilution.'],
    notions:[
      {terme:'pH', def:'grandeur sans unité qui mesure l’acidité d’une solution, de 0 à 14.'},
      {terme:'Échelle', def:'pH < 7 : solution acide ; pH = 7 : neutre ; pH > 7 : basique.'},
      {terme:'Ions responsables', def:'plus une solution est acide, plus elle contient d’ions H⁺ ; plus elle est basique, plus elle contient d’ions HO⁻.'},
      {terme:'Mesure', def:'papier pH (couleur) ou pH-mètre (valeur précise).'},
      {terme:'Dilution', def:'ajouter de l’eau à une solution acide fait augmenter son pH (vers 7) ; à une solution basique, il diminue (vers 7).'}
    ],
    essentiel:'<p>Le <b>pH</b> indique si une solution est <b>acide</b>, <b>neutre</b> ou <b>basique</b>, sur une échelle de 0 à 14. On le mesure avec du papier pH ou un pH-mètre. Une solution est d’autant plus <b>acide</b> que son pH est <b>bas</b> et qu’elle contient beaucoup d’ions <b>H⁺</b> ; elle est d’autant plus <b>basique</b> que son pH est élevé (beaucoup d’ions <b>HO⁻</b>).</p><p>Quand on <b>dilue</b> une solution (on ajoute de l’eau), son pH se <b>rapproche de 7</b> : une solution acide devient moins acide. Les acides et les bases concentrés sont <b>dangereux</b> (corrosifs) : ils nécessitent des précautions (gants, lunettes).</p>',
    exemple:'<p>Jus de citron : pH ≈ 2 (acide) ; eau pure : pH = 7 (neutre) ; eau savonneuse : pH ≈ 9 (basique). En ajoutant de l’eau au jus de citron, son pH monte vers 7.</p>',
    retenir:'pH < 7 <b>acide</b> (ions H⁺), = 7 <b>neutre</b>, > 7 <b>basique</b> (ions HO⁻). La <b>dilution</b> rapproche le pH de 7.'
  }
},
{
  id:'pc-energie', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'L’énergie : formes et conversions',
  motsCles:['énergie','chaîne énergétique','conversion','joule','watt','renouvelable','conservation','pertes','cinétique'],
  contenu:{
    objectifs:['Identifier les formes d’énergie.','Construire une chaîne énergétique.','Comprendre la conservation et les pertes.'],
    notions:[
      {terme:'Formes d’énergie', def:'cinétique (mouvement), de position (hauteur), thermique (chaleur), électrique, chimique (piles, aliments, carburants), lumineuse, nucléaire.'},
      {terme:'Conversion', def:'l’énergie passe d’une forme à une autre dans un convertisseur (moteur, lampe, panneau solaire).'},
      {terme:'Chaîne énergétique', def:'schéma : source d’énergie → convertisseur → énergie utile (+ pertes, souvent thermiques).'},
      {terme:'Conservation', def:'l’énergie totale se conserve : elle ne se crée pas et ne disparaît pas, elle se transforme.'},
      {terme:'Unités', def:'énergie en joules (J) ou kWh ; puissance en watts (W).'}
    ],
    essentiel:'<p>L’<b>énergie</b> existe sous plusieurs <b>formes</b> et se <b>convertit</b> de l’une à l’autre grâce à des convertisseurs. Une <b>chaîne énergétique</b> décrit ce parcours : une <b>source</b> fournit de l’énergie, un <b>convertisseur</b> la transforme en énergie <b>utile</b>, avec toujours une partie <b>perdue</b> (souvent sous forme de chaleur).</p><p>L’énergie totale se <b>conserve</b> : elle ne disparaît jamais, elle change seulement de forme. C’est pourquoi on cherche à limiter les <b>pertes</b> pour économiser l’énergie. Les sources sont <b>renouvelables</b> (soleil, vent, eau) ou <b>non renouvelables</b> (charbon, pétrole, gaz, uranium).</p>',
    exemple:'<p>Lampe : énergie <b>électrique</b> → énergie <b>lumineuse</b> (utile) + énergie <b>thermique</b> (pertes). Barrage : énergie de position de l’eau → cinétique → électrique.</p>',
    retenir:'L’énergie se <b>conserve</b> (elle se transforme). Chaîne : source → convertisseur → utile + <b>pertes</b>. Unités : <b>joule (J)</b>, puissance <b>watt (W)</b>.'
  }
},
{
  id:'pc-electricite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les circuits électriques',
  motsCles:['circuit','tension','intensité','volt','ampère','résistance','loi d’Ohm','série','dérivation','ampèremètre'],
  contenu:{
    objectifs:['Distinguer tension et intensité et savoir les mesurer.','Utiliser la loi d’Ohm.'],
    notions:[
      {terme:'Circuit', def:'boucle comprenant un générateur (fournit l’énergie) et des récepteurs (lampe, moteur, résistance). Le courant ne circule que si le circuit est fermé.'},
      {terme:'Intensité (I)', def:'« débit » du courant électrique, en ampères (A) ; mesurée par un ampèremètre branché EN SÉRIE.'},
      {terme:'Tension (U)', def:'en volts (V) ; mesurée aux bornes d’un dipôle par un voltmètre branché EN DÉRIVATION.'},
      {terme:'Résistance (R)', def:'dipôle qui s’oppose au passage du courant, en ohms (Ω).'},
      {terme:'Loi d’Ohm', def:'pour une résistance : U = R × I.'}
    ],
    essentiel:'<p>Un <b>circuit électrique</b> comporte un <b>générateur</b> et des <b>récepteurs</b> reliés par des fils. Le courant ne passe que si le circuit est <b>fermé</b>. On distingue deux grandeurs : l’<b>intensité</b> I (le débit du courant, en A, mesurée <b>en série</b>) et la <b>tension</b> U (aux bornes d’un dipôle, en V, mesurée <b>en dérivation</b>).</p><p>Dans un circuit en <b>série</b>, tous les composants sont sur une même boucle : si l’un cesse de fonctionner, tout s’arrête, et l’intensité est la même partout. Dans un circuit en <b>dérivation</b>, les composants sont sur des branches séparées et fonctionnent indépendamment.</p><p>Pour une <b>résistance</b>, la <b>loi d’Ohm</b> relie ces grandeurs : <b>U = R × I</b>. Plus la résistance est grande, plus l’intensité est faible pour une même tension.</p>',
    exemple:'<p>Une résistance R = 20 Ω parcourue par I = 0,5 A : U = R × I = 20 × 0,5 = <b>10 V</b>.</p>',
    retenir:'Ampèremètre <b>en série</b>, voltmètre <b>en dérivation</b>. En série tout dépend de tout ; en dérivation, branches indépendantes. <b>U = R × I</b>.'
  }
},
{
  id:'pc-lumiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La lumière et la vision',
  motsCles:['lumière','source primaire','objet diffusant','propagation','ligne droite','spectre','vision','rayon','vitesse de la lumière'],
  contenu:{
    objectifs:['Comprendre les conditions de la vision.','Distinguer sources et objets diffusants.','Connaître la propagation et la décomposition de la lumière.'],
    notions:[
      {terme:'Source primaire', def:'objet qui produit sa propre lumière (Soleil, étoile, lampe, flamme, écran).'},
      {terme:'Objet diffusant', def:'objet qui renvoie la lumière qu’il reçoit (la Lune, un mur, un livre).'},
      {terme:'Propagation rectiligne', def:'dans un milieu transparent et homogène, la lumière se propage en ligne droite.'},
      {terme:'Vitesse de la lumière', def:'très grande, environ 300 000 km/s dans le vide (bien plus rapide que le son).'},
      {terme:'Spectre', def:'la lumière blanche est composée de plusieurs couleurs, que l’on sépare avec un prisme (arc-en-ciel).'}
    ],
    essentiel:'<p>Pour <b>voir</b> un objet, deux conditions sont nécessaires : de la <b>lumière</b> doit partir de cet objet (parce qu’il est une <b>source</b> ou parce qu’il <b>diffuse</b> une lumière reçue) et cette lumière doit <b>entrer dans notre œil</b>. On ne voit rien dans le noir complet, même les yeux ouverts.</p><p>La lumière se propage en <b>ligne droite</b> dans un milieu transparent, à une vitesse énorme (~300 000 km/s). C’est pourquoi, lors d’un orage, on voit l’éclair bien avant d’entendre le tonnerre. La <b>lumière blanche</b> est en réalité un mélange de couleurs (son <b>spectre</b>), que l’on peut séparer avec un prisme ou dans un arc-en-ciel.</p>',
    exemple:'<p>On voit la <b>Lune</b> parce qu’elle <b>diffuse</b> la lumière du Soleil : ce n’est pas une source primaire, contrairement au Soleil.</p>',
    retenir:'Voir un objet = de la lumière <b>venue de l’objet</b> atteint l’œil. Propagation <b>rectiligne</b>, vitesse ~300 000 km/s. Lumière blanche = <b>toutes les couleurs</b>.'
  }
},
{
  id:'pc-son', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Le son',
  motsCles:['son','fréquence','vitesse du son','vibration','hertz','aigu','grave','milieu','340 m/s','audition'],
  contenu:{
    objectifs:['Comprendre la nature et la propagation du son.','Relier fréquence et hauteur, amplitude et intensité.'],
    notions:[
      {terme:'Son', def:'vibration de la matière qui se propage de proche en proche ; il a besoin d’un milieu matériel (air, eau, solide).'},
      {terme:'Pas de son dans le vide', def:'sans matière, le son ne peut pas se propager (contrairement à la lumière).'},
      {terme:'Vitesse', def:'environ 340 m/s dans l’air, plus rapide dans l’eau et les solides.'},
      {terme:'Fréquence', def:'en hertz (Hz) ; plus elle est élevée, plus le son est aigu ; plus elle est basse, plus le son est grave.'},
      {terme:'Amplitude', def:'plus l’amplitude est grande, plus le son est fort.'}
    ],
    essentiel:'<p>Le <b>son</b> est une <b>vibration</b> qui se propage de proche en proche dans un <b>milieu matériel</b>. C’est pourquoi il ne peut <b>pas se propager dans le vide</b> (dans l’espace, il n’y a pas de son). Sa vitesse est d’environ <b>340 m/s dans l’air</b>, beaucoup plus lente que la lumière.</p><p>Deux caractéristiques décrivent un son : sa <b>fréquence</b> (en hertz) détermine s’il est <b>aigu</b> (fréquence élevée) ou <b>grave</b> (fréquence basse) ; son <b>amplitude</b> détermine s’il est <b>fort</b> ou <b>faible</b>. Les sons trop forts ou l’écoute prolongée au casque <b>endommagent l’audition</b> de façon irréversible : il faut protéger ses oreilles.</p>',
    exemple:'<p>Orage : on voit l’éclair, puis on entend le tonnerre quelques secondes plus tard, car le son (340 m/s) est bien plus lent que la lumière.</p>',
    retenir:'Le son a besoin de <b>matière</b> (pas de son dans le vide). Vitesse ≈ <b>340 m/s</b> dans l’air. Fréquence → grave/aigu ; amplitude → faible/fort.'
  }
},
{
  id:'pc-mouvement', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Mouvement et vitesse',
  motsCles:['mouvement','vitesse','trajectoire','référentiel','uniforme','accéléré','ralenti','relatif','m/s','km/h'],
  contenu:{
    objectifs:['Décrire un mouvement par rapport à un référentiel.','Calculer une vitesse et convertir les unités.'],
    notions:[
      {terme:'Référentiel', def:'objet par rapport auquel on étudie le mouvement (le sol, un train, la Terre).'},
      {terme:'Relativité du mouvement', def:'un même objet peut être immobile dans un référentiel et en mouvement dans un autre.'},
      {terme:'Trajectoire', def:'ligne décrite par l’objet (rectiligne, circulaire, quelconque).'},
      {terme:'Vitesse', def:'v = distance ÷ durée. Unités : m/s ou km/h.'},
      {terme:'Types de mouvement', def:'uniforme (vitesse constante), accéléré (vitesse augmente), ralenti (vitesse diminue).'}
    ],
    essentiel:'<p>Décrire un <b>mouvement</b> n’a de sens que par rapport à un <b>référentiel</b> : le mouvement est <b>relatif</b>. Par exemple, un passager assis dans un train est immobile par rapport au train, mais en mouvement par rapport au sol.</p><p>On caractérise un mouvement par sa <b>trajectoire</b> (la ligne suivie) et sa <b>vitesse</b>. La vitesse se calcule en divisant la <b>distance</b> parcourue par la <b>durée</b> : v = d ÷ t. Selon que la vitesse reste constante, augmente ou diminue, le mouvement est dit <b>uniforme</b>, <b>accéléré</b> ou <b>ralenti</b>.</p><p>Pour convertir : de m/s vers km/h, on multiplie par 3,6 ; de km/h vers m/s, on divise par 3,6.</p>',
    exemple:'<p>Un coureur parcourt 100 m en 20 s : v = 100 ÷ 20 = <b>5 m/s</b>, soit 5 × 3,6 = <b>18 km/h</b>.</p>',
    retenir:'Le mouvement est <b>relatif</b> (dépend du référentiel). <b>v = distance ÷ durée</b>. m/s → km/h : ×3,6.'
  }
},
{
  id:'pc-forces', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Les forces et la gravitation',
  motsCles:['force','poids','gravitation','newton','masse','attraction','P=m×g','interaction','effet'],
  contenu:{
    objectifs:['Caractériser une force et ses effets.','Distinguer poids et masse et appliquer P = m × g.'],
    notions:[
      {terme:'Force', def:'action mécanique exercée sur un objet ; elle peut le mettre en mouvement, modifier son mouvement ou le déformer.'},
      {terme:'Interaction', def:'une force résulte toujours d’une action entre deux objets (contact ou à distance).'},
      {terme:'Masse', def:'quantité de matière d’un objet, en kilogrammes (kg) ; elle ne change pas selon le lieu.'},
      {terme:'Poids', def:'force d’attraction exercée par un astre sur un objet, en newtons (N).'},
      {terme:'Relation', def:'P = m × g, avec g ≈ 10 N/kg sur Terre (l’intensité de la pesanteur, plus faible sur la Lune).'}
    ],
    essentiel:'<p>Une <b>force</b> traduit une action exercée sur un objet ; elle peut <b>mettre en mouvement</b>, <b>arrêter</b>, changer la direction ou <b>déformer</b> cet objet. Une force résulte toujours d’une <b>interaction</b> entre deux objets, par contact ou à distance (comme la gravitation).</p><p>Il ne faut pas confondre <b>masse</b> et <b>poids</b>. La <b>masse</b> (en kg) mesure la quantité de matière et ne change pas d’un lieu à l’autre. Le <b>poids</b> (en N) est la <b>force de gravitation</b> exercée par un astre : il dépend du lieu. Sur Terre, il se calcule par <b>P = m × g</b> avec g ≈ 10 N/kg.</p><p>La <b>gravitation</b> est l’attraction entre tous les objets ayant une masse ; c’est elle qui nous maintient au sol et qui maintient les planètes autour du Soleil.</p>',
    exemple:'<p>Un objet de 2 kg sur Terre : P = m × g = 2 × 10 = <b>20 N</b>. Sur la Lune, sa masse reste 2 kg, mais son poids est environ 6 fois plus faible.</p>',
    retenir:'La <b>masse</b> (kg) ne change pas ; le <b>poids</b> (N) dépend de l’astre. <b>P = m × g</b> (g ≈ 10 N/kg sur Terre).'
  }
},
{
  id:'pc-etats-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Les états et changements d’état de l’eau',
  motsCles:['solide','liquide','gaz','fusion','vaporisation','solidification','condensation','changement d’état','masse','volume'],
  contenu:{
    objectifs:['Nommer les états et changements d’état.','Comprendre la conservation de la masse.'],
    notions:[
      {terme:'Trois états', def:'solide (forme propre, incompressible), liquide (prend la forme du récipient), gazeux (occupe tout l’espace, compressible).'},
      {terme:'Changements d’état', def:'fusion (S→L), solidification (L→S), vaporisation (L→G), liquéfaction (G→L), sublimation (S→G).'},
      {terme:'Températures de l’eau', def:'fusion/solidification à 0 °C, ébullition à 100 °C (sous pression normale).'},
      {terme:'Palier de température', def:'pendant un changement d’état, la température reste constante.'}
    ],
    essentiel:'<p>L’eau, comme toute matière, peut exister sous trois <b>états</b> : <b>solide</b> (glace), <b>liquide</b> et <b>gazeux</b> (vapeur d’eau invisible). Le passage d’un état à un autre est un <b>changement d’état</b>, provoqué par un changement de température : fusion, solidification, vaporisation, liquéfaction.</p><p>Lors d’un changement d’état, la <b>masse se conserve</b> (la même quantité de matière) mais le <b>volume change</b> : la glace occupe <b>plus de place</b> que l’eau liquide (l’eau se dilate en gelant). Pendant tout le changement d’état, la <b>température reste constante</b> (palier) : par exemple, un mélange eau + glace reste à 0 °C tant qu’il reste de la glace.</p>',
    exemple:'<p>La glace fond à 0 °C, l’eau bout à 100 °C. Une bouteille d’eau pleine mise au congélateur peut éclater car la glace occupe plus de volume que l’eau.</p>',
    retenir:'Changement d’état : <b>masse conservée</b>, <b>volume modifié</b>, <b>température constante</b> (palier). Eau : fusion 0 °C, ébullition 100 °C.'
  }
},
{
  id:'pc-masse-volumique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La masse volumique',
  motsCles:['masse volumique','densité','masse','volume','flotte','coule','g/cm3','identifier','ρ'],
  contenu:{
    objectifs:['Calculer une masse volumique.','Identifier un matériau et prévoir s’il flotte ou coule.'],
    notions:[
      {terme:'Masse volumique (ρ)', def:'masse d’un matériau divisée par son volume : ρ = m ÷ V. Unités : g/cm³ ou kg/m³.'},
      {terme:'Valeur pour l’eau', def:'ρ(eau) = 1 g/cm³ = 1000 kg/m³.'},
      {terme:'Identification', def:'chaque matériau a sa propre masse volumique : elle permet de l’identifier.'},
      {terme:'Flotter / couler', def:'un corps flotte sur l’eau si sa masse volumique est inférieure à celle de l’eau (1 g/cm³).'}
    ],
    essentiel:'<p>La <b>masse volumique</b> compare la <b>masse</b> d’un matériau à son <b>volume</b> : ρ = m ÷ V. Elle est caractéristique de chaque matériau (le fer, le bois ou le liège ont des masses volumiques très différentes), ce qui permet de les <b>identifier</b>.</p><p>Elle permet aussi de prévoir si un corps <b>flotte</b> ou <b>coule</b> dans un liquide : un corps <b>flotte</b> sur l’eau si sa masse volumique est <b>inférieure</b> à celle de l’eau (1 g/cm³), il <b>coule</b> si elle est <b>supérieure</b>. Il faut bien veiller aux <b>unités</b> (mesurer le volume, souvent avec une éprouvette graduée).</p>',
    exemple:'<p>Un objet de masse 200 g et de volume 250 cm³ : ρ = 200 ÷ 250 = <b>0,8 g/cm³</b> < 1 → il <b>flotte</b> sur l’eau.</p>',
    retenir:'ρ = m ÷ V. ρ < 1 g/cm³ → <b>flotte</b> ; ρ > 1 g/cm³ → <b>coule</b> (dans l’eau). Chaque matériau a sa masse volumique.'
  }
},
{
  id:'pc-energie-electrique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Puissance et énergie électrique',
  motsCles:['puissance','énergie','watt','joule','kWh','P=UI','E=Pt','facture','consommation','économies'],
  contenu:{
    objectifs:['Calculer la puissance d’un appareil.','Calculer l’énergie consommée et comprendre la facture.'],
    notions:[
      {terme:'Puissance (P)', def:'P = U × I, en watts (W) ; elle indique « à quelle vitesse » un appareil consomme.'},
      {terme:'Énergie (E)', def:'E = P × t, en joules (J) ou en kilowattheures (kWh).'},
      {terme:'kWh', def:'énergie consommée par un appareil de 1 kW pendant 1 h ; c’est l’unité de la facture d’électricité.'},
      {terme:'Puissance nominale', def:'valeur indiquée sur l’appareil (ex. 2000 W pour un radiateur).'}
    ],
    essentiel:'<p>La <b>puissance</b> d’un appareil électrique (en watts) indique la « vitesse » à laquelle il consomme de l’énergie ; elle se calcule par <b>P = U × I</b>. L’<b>énergie</b> réellement consommée dépend en plus de la <b>durée</b> d’utilisation : <b>E = P × t</b>.</p><p>Deux appareils de même puissance ne consomment pas la même énergie si on ne les utilise pas aussi longtemps. La facture d’électricité se compte en <b>kilowattheures (kWh)</b>. Pour <b>économiser</b> l’énergie, on peut réduire la durée d’utilisation ou choisir des appareils moins puissants (basse consommation).</p>',
    exemple:'<p>Radiateur de 2000 W (= 2 kW) utilisé 3 h : E = P × t = 2 × 3 = <b>6 kWh</b>.</p>',
    retenir:'<b>P = U × I</b> (watts) ; <b>E = P × t</b> (joules ou kWh). Plus l’utilisation dure, plus l’énergie et la facture augmentent.'
  }
},
{
  id:'pc-solubilite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Miscibilité et solubilité',
  motsCles:['miscible','non miscible','soluble','saturation','dissolution','solvant','soluté','conservation','couches'],
  contenu:{
    objectifs:['Distinguer miscibilité (liquides) et solubilité (solide).','Comprendre la saturation et la conservation de la masse.'],
    notions:[
      {terme:'Liquides miscibles', def:'deux liquides qui se mélangent totalement et forment un mélange homogène (eau + sirop, eau + alcool).'},
      {terme:'Liquides non miscibles', def:'liquides qui ne se mélangent pas et forment deux couches séparées (eau + huile).'},
      {terme:'Dissolution', def:'un solide (le soluté) se dissout dans un liquide (le solvant) et « disparaît » à l’œil, mais reste présent.'},
      {terme:'Solubilité', def:'masse maximale de soluté dissoluble dans un volume de solvant ; au-delà, la solution est saturée et le surplus se dépose.'}
    ],
    essentiel:'<p>La <b>miscibilité</b> concerne deux <b>liquides</b> : ils sont <b>miscibles</b> s’ils se mélangent totalement, <b>non miscibles</b> s’ils forment deux couches (l’huile flotte sur l’eau car sa masse volumique est plus faible). La <b>solubilité</b> concerne la <b>dissolution d’un solide</b> dans un liquide.</p><p>Quand on dissout un solide (le <b>soluté</b>) dans un liquide (le <b>solvant</b>), le solide disparaît à l’œil mais il est toujours là : la <b>masse se conserve</b> (masse de la solution = masse du solvant + masse du soluté). On ne peut pas dissoudre une quantité illimitée : au-delà d’une certaine masse, la solution est <b>saturée</b> et le surplus se dépose au fond.</p>',
    exemple:'<p>On dissout du sel dans l’eau : la masse de l’eau salée = masse de l’eau + masse du sel. En ajoutant trop de sel, il ne se dissout plus (saturation) et reste au fond.</p>',
    retenir:'Miscible = <b>liquides</b> ; solubilité = <b>solide dans un liquide</b>. Dissoudre ne fait pas disparaître la matière : la <b>masse se conserve</b> (saturation au-delà d’une limite).'
  }
},
{
  id:'pc-combustion', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La combustion',
  motsCles:['combustion','combustible','comburant','dioxygène','triangle du feu','transformation chimique','CO2','monoxyde de carbone','sécurité'],
  contenu:{
    objectifs:['Identifier les conditions d’une combustion.','Reconnaître réactifs et produits et les dangers.'],
    notions:[
      {terme:'Combustible', def:'ce qui brûle (bois, papier, gaz, essence, carbone).'},
      {terme:'Comburant', def:'le dioxygène (O₂) de l’air, indispensable à la combustion.'},
      {terme:'Triangle du feu', def:'trois éléments nécessaires : combustible + comburant (O₂) + énergie d’activation (chaleur). Enlever un côté éteint le feu.'},
      {terme:'Produits', def:'une combustion complète du carbone produit du dioxyde de carbone (CO₂) et souvent de l’eau.'},
      {terme:'Danger', def:'une combustion incomplète (manque d’O₂) produit du monoxyde de carbone (CO), gaz toxique et mortel.'}
    ],
    essentiel:'<p>Une <b>combustion</b> est une <b>transformation chimique</b> au cours de laquelle un <b>combustible</b> réagit avec un <b>comburant</b> (le dioxygène de l’air) en dégageant de la chaleur et de la lumière. Elle nécessite trois éléments réunis, résumés par le <b>triangle du feu</b> : combustible, dioxygène et chaleur.</p><p>La combustion complète du carbone produit du <b>CO₂</b> : C + O₂ → CO₂. Pour <b>éteindre</b> un feu, il suffit de supprimer un des trois éléments (couvrir pour priver de dioxygène, refroidir avec de l’eau, retirer le combustible). Attention : une combustion incomplète, par manque d’air, dégage du <b>monoxyde de carbone (CO)</b>, un gaz <b>invisible, inodore et mortel</b> (d’où la nécessité d’aérer et d’entretenir les appareils de chauffage).</p>',
    exemple:'<p>Combustion du carbone : <b>C + O₂ → CO₂</b>. Pour éteindre une bougie, on la couvre : on la prive de dioxygène (on « casse » le triangle du feu).</p>',
    retenir:'Pas de feu sans les <b>3 éléments</b> (combustible + dioxygène + chaleur). Combustion incomplète → <b>CO</b> (monoxyde de carbone), toxique.'
  }
},
{
  id:'pc-conducteurs-circuits', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Circuits électriques : conducteurs, série et dérivation',
  motsCles:['conducteur','isolant','circuit','série','dérivation','court-circuit','courant','sécurité','fusible','boucle'],
  contenu:{
    objectifs:['Distinguer conducteurs et isolants.','Comparer circuit série et dérivation, comprendre les dangers.'],
    notions:[
      {terme:'Conducteur', def:'matériau qui laisse passer le courant électrique : les métaux, l’eau salée, le corps humain.'},
      {terme:'Isolant', def:'matériau qui ne laisse pas passer le courant : plastique, verre, bois sec, air.'},
      {terme:'Circuit en série', def:'tous les composants sont sur une seule boucle ; si l’un s’éteint, tous s’éteignent.'},
      {terme:'Circuit en dérivation', def:'les composants sont sur des branches séparées et fonctionnent indépendamment.'},
      {terme:'Court-circuit', def:'chemin de très faible résistance qui provoque une forte intensité et un échauffement dangereux.'}
    ],
    essentiel:'<p>Le courant ne circule que dans un circuit <b>fermé</b> constitué de <b>conducteurs</b> (les métaux). Les <b>isolants</b> (plastique, verre) empêchent le passage du courant : ils servent à nous protéger (gaine des fils).</p><p>Dans un circuit en <b>série</b>, tous les composants sont branchés à la suite : si une lampe grille, tout s’éteint, et l’intensité est la même partout. Dans un circuit en <b>dérivation</b>, les composants sont sur des branches indépendantes : une lampe peut s’éteindre sans arrêter les autres (comme dans une maison).</p><p>Un <b>court-circuit</b> (contact direct entre les bornes) provoque une intensité très élevée et un <b>échauffement</b> dangereux (risque d’incendie). Les <b>fusibles</b> et <b>disjoncteurs</b> coupent alors le courant pour protéger l’installation. L’électricité est un vrai danger : il ne faut jamais toucher un fil dénudé ni manipuler d’appareils avec les mains mouillées.</p>',
    exemple:'<p>Guirlande en série : si une ampoule grille, toute la guirlande s’éteint. Les lampes d’une maison sont en dérivation : chacune s’allume indépendamment.</p>',
    retenir:'Métaux = conducteurs, plastique = isolant. Série = tout dépend de tout ; dérivation = indépendant. Le <b>court-circuit</b> est dangereux (fusible/disjoncteur).'
  }
},
{
  id:'pc-lumiere-ombres', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Lumière, ombres et système Soleil-Terre-Lune',
  motsCles:['ombre','lumière','Soleil','Terre','Lune','phases','éclipse','jour et nuit','opaque','propagation'],
  contenu:{
    objectifs:['Expliquer la formation des ombres.','Comprendre jour/nuit, phases de la Lune et éclipses.'],
    notions:[
      {terme:'Objet opaque', def:'objet qui ne laisse pas passer la lumière ; il crée une ombre.'},
      {terme:'Ombre propre / portée', def:'l’ombre propre est la face non éclairée de l’objet ; l’ombre portée est projetée sur un écran.'},
      {terme:'Jour et nuit', def:'dus à la rotation de la Terre sur elle-même en 24 h : la face éclairée par le Soleil est dans le jour.'},
      {terme:'Phases de la Lune', def:'la Lune n’émet pas de lumière : on en voit la partie éclairée par le Soleil, qui varie selon sa position.'},
      {terme:'Éclipse', def:'alignement Soleil-Terre-Lune : la Lune passe dans l’ombre de la Terre (éclipse de Lune) ou cache le Soleil (éclipse de Soleil).'}
    ],
    essentiel:'<p>La lumière se propageant en <b>ligne droite</b>, un objet <b>opaque</b> éclairé crée une <b>ombre</b> derrière lui. On distingue l’<b>ombre propre</b> (la partie sombre de l’objet lui-même) et l’<b>ombre portée</b> (projetée sur un mur ou le sol).</p><p>Ces principes expliquent des phénomènes astronomiques. La <b>rotation de la Terre</b> sur elle-même (en 24 h) crée l’alternance <b>jour/nuit</b>. La <b>Lune</b>, qui ne produit pas de lumière, nous montre différentes <b>phases</b> selon la portion éclairée par le Soleil que l’on voit. Enfin, quand le Soleil, la Terre et la Lune sont <b>alignés</b>, une <b>éclipse</b> se produit.</p>',
    exemple:'<p>Éclipse de Soleil : la Lune se place entre le Soleil et la Terre et projette son ombre sur la Terre, cachant le Soleil.</p>',
    retenir:'Ombre = lumière <b>bloquée</b> par un objet opaque. Jour/nuit = <b>rotation de la Terre</b>. Phases et éclipses = positions relatives <b>Soleil-Terre-Lune</b>.'
  }
},
{
  id:'pc-air', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'L’air : composition et masse',
  motsCles:['air','gaz','diazote','dioxygène','masse','compressible','atmosphère','N2','O2','pollution'],
  contenu:{
    objectifs:['Connaître la composition de l’air.','Montrer que l’air a une masse et qu’un gaz est compressible.'],
    notions:[
      {terme:'Composition', def:'l’air est un mélange de gaz : environ 78 % de diazote (N₂) et 21 % de dioxygène (O₂), plus d’autres gaz (dont le CO₂).'},
      {terme:'L’air a une masse', def:'comme toute matière, l’air possède une masse (environ 1,2 g pour 1 L).'},
      {terme:'Compressible', def:'un gaz peut être comprimé (on réduit son volume) ou dilaté, contrairement à un liquide.'},
      {terme:'Pollution de l’air', def:'l’ajout de gaz nocifs et de particules dégrade la qualité de l’air.'}
    ],
    essentiel:'<p>L’<b>air</b> qui nous entoure est un <b>mélange de gaz</b>, principalement du <b>diazote</b> (78 %) et du <b>dioxygène</b> (21 %), ce dernier étant indispensable à la respiration et aux combustions. Bien qu’invisible, l’air est de la <b>matière</b> : il possède une <b>masse</b> (environ 1,2 g par litre), ce que l’on peut vérifier en pesant un ballon gonflé.</p><p>Contrairement aux solides et aux liquides, un <b>gaz</b> est <b>compressible</b> et <b>expansible</b> : on peut réduire ou augmenter son volume (par exemple en appuyant sur une seringue bouchée). Les activités humaines peuvent <b>polluer</b> l’air en y rejetant des gaz nocifs.</p>',
    exemple:'<p>En pesant un ballon dégonflé puis gonflé, on constate que le ballon gonflé est plus lourd : l’air a bien une masse.</p>',
    retenir:'Air ≈ <b>78 % diazote + 21 % dioxygène</b>. Un gaz a une <b>masse</b> et est <b>compressible</b>.'
  }
},
{
  id:'pc-systeme-solaire', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Le système solaire et la gravitation',
  motsCles:['système solaire','planète','Soleil','étoile','gravitation','orbite','satellite','univers','attraction'],
  contenu:{
    objectifs:['Décrire l’organisation du système solaire.','Comprendre le rôle de la gravitation.'],
    notions:[
      {terme:'Système solaire', def:'le Soleil (une étoile) et les 8 planètes qui tournent autour, ainsi que leurs satellites, astéroïdes et comètes.'},
      {terme:'Planètes', def:'de la plus proche à la plus lointaine : Mercure, Vénus, Terre, Mars, Jupiter, Saturne, Uranus, Neptune.'},
      {terme:'Satellite', def:'astre qui tourne autour d’une planète (la Lune est le satellite de la Terre).'},
      {terme:'Gravitation', def:'attraction entre tous les objets ayant une masse ; elle maintient les astres en orbite.'},
      {terme:'Orbite', def:'trajectoire (presque circulaire) d’un astre autour d’un autre.'}
    ],
    essentiel:'<p>Le <b>système solaire</b> est organisé autour du <b>Soleil</b>, une <b>étoile</b> qui produit sa propre lumière. Autour de lui gravitent <b>8 planètes</b> (dont la Terre), elles-mêmes parfois entourées de <b>satellites</b> comme la Lune. Les planètes ne produisent pas de lumière : on les voit parce qu’elles diffusent celle du Soleil.</p><p>Ce qui maintient les planètes autour du Soleil et les satellites autour des planètes, c’est la <b>gravitation</b> : une force d’<b>attraction</b> qui s’exerce entre tous les objets possédant une masse. C’est la même force qui fait tomber les objets sur Terre (le poids). Chaque astre décrit ainsi une <b>orbite</b>.</p>',
    exemple:'<p>La Lune reste en orbite autour de la Terre car la Terre l’attire par gravitation ; de même, la Terre reste en orbite autour du Soleil.</p>',
    retenir:'Système solaire = <b>Soleil (étoile) + 8 planètes + satellites</b>. La <b>gravitation</b> (attraction des masses) maintient les astres en orbite et cause le poids.'
  }
}
]);
