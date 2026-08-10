window.FICHES = (window.FICHES || []).concat([
{
  id:'pc-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La constitution de la matière (atomes, molécules, ions)',
  motsCles:['atome','molécule','ion','élément','symbole','noyau','électron','proton','neutron'],
  contenu:{
    objectifs:['Décrire la constitution d’un atome.','Distinguer atome, molécule et ion.'],
    notions:[
      {terme:'Atome', def:'constitué d’un noyau (protons chargés + et neutrons) entouré d’électrons (chargés −). Il est globalement neutre.'},
      {terme:'Molécule', def:'assemblage de plusieurs atomes liés (ex. H₂O, CO₂, O₂).'},
      {terme:'Ion', def:'atome (ou groupe d’atomes) qui a gagné ou perdu des électrons → il devient chargé (Na⁺, Cl⁻).'}
    ],
    essentiel:'<p>La matière est faite d’<b>atomes</b>, représentés par des <b>symboles</b> (H, O, C, Na…). Les atomes s’assemblent en <b>molécules</b>. Un atome qui perd des électrons devient un ion <b>positif</b> ; s’il en gagne, un ion <b>négatif</b>.</p>',
    exemple:'<p>H₂O = 2 atomes d’hydrogène + 1 atome d’oxygène. Na⁺ = atome de sodium ayant perdu 1 électron.</p>',
    retenir:'Atome = <b>neutre</b> ; ion = <b>chargé</b> (+ s’il perd des électrons, − s’il en gagne). Les atomes se conservent dans une réaction.'
  }
},
{
  id:'pc-transformation-chimique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les transformations chimiques',
  motsCles:['réaction chimique','réactif','produit','équation','conservation de la masse','combustion','atomes','équilibrer'],
  contenu:{
    objectifs:['Distinguer réactifs et produits.','Équilibrer une équation simple.','Utiliser la conservation de la masse.'],
    notions:[
      {terme:'Réactifs', def:'espèces présentes au départ, qui sont consommées.'},
      {terme:'Produits', def:'espèces formées à la fin de la réaction.'},
      {terme:'Conservation', def:'les atomes ne sont ni créés ni détruits : il y a autant de chaque type avant et après → la masse se conserve.'}
    ],
    essentiel:'<p>Lors d’une <b>transformation chimique</b>, des <b>réactifs</b> se transforment en <b>produits</b>. Comme les <b>atomes se conservent</b>, l’équation doit être <b>équilibrée</b> et la <b>masse totale</b> est conservée (une transformation chimique n’est pas une simple modification d’apparence).</p>',
    exemple:'<p>Combustion du carbone : C + O₂ → CO₂ (1 C et 2 O de chaque côté : équation équilibrée).</p>',
    retenir:'Masse conservée : <b>masse des réactifs = masse des produits</b>. On équilibre en ajustant les nombres devant les formules.'
  }
},
{
  id:'pc-melanges', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Mélanges, solutions et corps purs',
  motsCles:['mélange','solution','soluté','solvant','corps pur','filtration','décantation','évaporation','homogène'],
  contenu:{
    objectifs:['Distinguer corps pur et mélange.','Séparer les constituants d’un mélange.'],
    notions:[
      {terme:'Corps pur', def:'une seule espèce chimique (eau distillée, cuivre pur).'},
      {terme:'Mélange', def:'plusieurs espèces ; homogène (on ne distingue pas les constituants) ou hétérogène (on les distingue).'},
      {terme:'Techniques de séparation', def:'décantation, filtration, évaporation.'}
    ],
    essentiel:'<p>Un <b>mélange homogène</b> (une solution) est fait d’un <b>soluté</b> dissous dans un <b>solvant</b>. On sépare les constituants par <b>filtration</b> (retient le solide), <b>décantation</b> (dépôt) ou <b>évaporation</b> (récupère le solide dissous).</p>',
    exemple:'<p>Eau + sel = solution homogène ; l’évaporation de l’eau laisse le sel.<br>Eau + sable = mélange hétérogène ; la filtration retient le sable.</p>',
    retenir:'Homogène = <b>on ne distingue pas</b> les constituants ; hétérogène = <b>on les voit</b>. Filtration pour les solides non dissous.'
  }
},
{
  id:'pc-ph', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Acides, bases et pH',
  motsCles:['pH','acide','base','neutre','dilution','indicateur','ion H+','ion OH-','échelle'],
  contenu:{
    objectifs:['Utiliser l’échelle de pH.','Comprendre l’effet d’une dilution.'],
    notions:[
      {terme:'pH', def:'mesure l’acidité d’une solution, sur une échelle de 0 à 14.'},
      {terme:'Échelle', def:'pH < 7 : acide ; pH = 7 : neutre ; pH > 7 : basique.'},
      {terme:'Ions', def:'une solution acide contient beaucoup d’ions H⁺ ; une solution basique beaucoup d’ions OH⁻.'},
      {terme:'Dilution', def:'ajouter de l’eau rapproche le pH de 7.'}
    ],
    essentiel:'<p>Le <b>pH</b> indique si une solution est <b>acide</b>, <b>neutre</b> ou <b>basique</b>. On le mesure avec du papier pH ou un pH-mètre. <b>Diluer</b> une solution acide (ajouter de l’eau) fait <b>augmenter</b> son pH vers 7.</p>',
    exemple:'<p>Jus de citron : pH ≈ 2 (acide) ; eau pure : pH = 7 (neutre) ; eau savonneuse : pH ≈ 9 (basique).</p>',
    retenir:'Plus le pH est <b>bas</b>, plus c’est <b>acide</b>. La <b>dilution</b> rapproche le pH de 7. Les acides et bases concentrés sont dangereux.'
  }
},
{
  id:'pc-energie', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'L’énergie : formes et conversions',
  motsCles:['énergie','chaîne énergétique','conversion','joule','watt','renouvelable','conservation','cinétique'],
  contenu:{
    objectifs:['Identifier les formes d’énergie.','Construire une chaîne énergétique.'],
    notions:[
      {terme:'Formes d’énergie', def:'cinétique (mouvement), thermique (chaleur), électrique, chimique, lumineuse, nucléaire…'},
      {terme:'Conservation', def:'l’énergie se transforme mais ne disparaît pas (elle se conserve).'},
      {terme:'Chaîne énergétique', def:'suite des conversions : source → convertisseur → forme utilisée (+ pertes, souvent thermiques).'}
    ],
    essentiel:'<p>L’<b>énergie</b> existe sous plusieurs <b>formes</b> et se <b>convertit</b> de l’une à l’autre. Une <b>chaîne énergétique</b> décrit ces conversions ; l’énergie totale se <b>conserve</b> (mais une partie est souvent perdue en chaleur).</p>',
    exemple:'<p>Lampe : énergie électrique → énergie lumineuse + énergie thermique (pertes).<br>Barrage : énergie de position de l’eau → cinétique → électrique.</p>',
    retenir:'Unité d’énergie : le <b>joule (J)</b> ; unité de puissance : le <b>watt (W)</b>. L’énergie se conserve.'
  }
},
{
  id:'pc-electricite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les circuits électriques',
  motsCles:['circuit','tension','intensité','volt','ampère','résistance','loi d’Ohm','série','dérivation'],
  contenu:{
    objectifs:['Distinguer tension et intensité.','Utiliser la loi d’Ohm.'],
    notions:[
      {terme:'Intensité (I)', def:'débit du courant, en ampères (A) ; mesurée par un ampèremètre branché EN SÉRIE.'},
      {terme:'Tension (U)', def:'en volts (V) ; mesurée par un voltmètre branché EN DÉRIVATION.'},
      {terme:'Loi d’Ohm', def:'pour une résistance : U = R × I (R en ohms Ω).'}
    ],
    essentiel:'<p>Un <b>circuit</b> comporte un générateur et des récepteurs. L’<b>intensité</b> se mesure <b>en série</b>, la <b>tension en dérivation</b>. Pour une résistance, la <b>loi d’Ohm</b> relie tension, résistance et intensité : <b>U = R × I</b>.</p>',
    exemple:'<p>R = 20 Ω et I = 0,5 A → U = 20 × 0,5 = <b>10 V</b>.</p>',
    retenir:'En <b>série</b>, si un composant s’arrête tout s’arrête ; en <b>dérivation</b>, non. Ampèremètre en série, voltmètre en dérivation.'
  }
},
{
  id:'pc-lumiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La lumière et la vision',
  motsCles:['lumière','source','propagation','spectre','vision','rayon','ligne droite','objet diffusant'],
  contenu:{
    objectifs:['Comprendre les conditions de la vision.','Distinguer sources et objets diffusants.'],
    notions:[
      {terme:'Source primaire', def:'produit sa propre lumière (Soleil, lampe, flamme).'},
      {terme:'Objet diffusant', def:'renvoie la lumière qu’il reçoit (la Lune, un mur, cette page).'},
      {terme:'Propagation', def:'la lumière se propage en ligne droite dans un milieu transparent et homogène.'}
    ],
    essentiel:'<p>Pour <b>voir</b> un objet, il faut que de la <b>lumière</b> parte de lui (source ou objet diffusant) et entre dans notre <b>œil</b>. La lumière voyage en <b>ligne droite</b>. La lumière blanche se décompose en un <b>spectre</b> de couleurs.</p>',
    exemple:'<p>On voit la Lune parce qu’elle <b>diffuse</b> la lumière du Soleil (ce n’est pas une source primaire).</p>',
    retenir:'Voir un objet = de la lumière <b>venue de l’objet</b> atteint l’œil. Propagation <b>rectiligne</b>.'
  }
},
{
  id:'pc-son', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Le son',
  motsCles:['son','fréquence','vitesse du son','vibration','hertz','aigu','grave','milieu','340 m/s'],
  contenu:{
    objectifs:['Comprendre la propagation du son.','Relier fréquence et hauteur.'],
    notions:[
      {terme:'Son', def:'vibration qui se propage dans un milieu matériel (air, eau, solide) ; pas dans le vide.'},
      {terme:'Vitesse', def:'≈ 340 m/s dans l’air ; plus rapide dans l’eau et les solides.'},
      {terme:'Fréquence', def:'en hertz (Hz) ; plus la fréquence est élevée, plus le son est aigu (grave si elle est basse).'}
    ],
    essentiel:'<p>Le <b>son</b> est une <b>vibration</b> qui a besoin d’un <b>milieu matériel</b> pour se propager. Sa <b>fréquence</b> détermine s’il est <b>grave ou aigu</b>, son amplitude s’il est <b>fort ou faible</b>. Les sons très forts endommagent l’oreille.</p>',
    exemple:'<p>Orage : on voit l’éclair avant d’entendre le tonnerre, car la lumière est bien plus rapide que le son.</p>',
    retenir:'Le son <b>ne se propage pas dans le vide</b> (contrairement à la lumière). Vitesse ≈ <b>340 m/s</b> dans l’air.'
  }
},
{
  id:'pc-mouvement', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Mouvement et vitesse',
  motsCles:['mouvement','vitesse','trajectoire','référentiel','uniforme','accéléré','relatif','m/s'],
  contenu:{
    objectifs:['Décrire un mouvement par rapport à un référentiel.','Calculer une vitesse.'],
    notions:[
      {terme:'Référentiel', def:'objet par rapport auquel on étudie le mouvement (le sol, un train…).'},
      {terme:'Trajectoire', def:'ligne décrite par l’objet au cours de son mouvement.'},
      {terme:'Vitesse', def:'v = distance ÷ durée (en m/s ou km/h).'},
      {terme:'Types de mouvement', def:'uniforme (vitesse constante), accéléré (vitesse augmente), ralenti (vitesse diminue).'}
    ],
    essentiel:'<p>Un mouvement se décrit <b>toujours par rapport à un référentiel</b> : il est <b>relatif</b>. La <b>vitesse</b> = distance ÷ durée. Un mouvement est <b>uniforme</b>, <b>accéléré</b> ou <b>ralenti</b> selon l’évolution de la vitesse.</p>',
    exemple:'<p>100 m parcourus en 20 s → v = 100 ÷ 20 = <b>5 m/s</b>.</p>',
    retenir:'Le mouvement est <b>relatif</b> (dépend du référentiel). Vitesse = <b>distance ÷ durée</b>.'
  }
},
{
  id:'pc-forces', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Les forces et la gravitation',
  motsCles:['force','poids','gravitation','newton','masse','attraction','P=m×g','interaction'],
  contenu:{
    objectifs:['Caractériser une force.','Distinguer poids et masse.'],
    notions:[
      {terme:'Force', def:'action capable de mettre en mouvement, d’arrêter ou de déformer un objet.'},
      {terme:'Poids', def:'force d’attraction exercée par un astre, en newtons (N) : P = m × g.'},
      {terme:'Masse', def:'quantité de matière, en kg ; elle ne change pas d’un lieu à l’autre.'},
      {terme:'Gravitation', def:'attraction entre tous les objets qui ont une masse.'}
    ],
    essentiel:'<p>Une <b>force</b> peut modifier le mouvement ou la forme d’un objet. Le <b>poids</b> est la force de <b>gravitation</b> exercée par la Terre : il dépend du lieu, contrairement à la <b>masse</b>.</p>',
    exemple:'<p>Sur Terre, g ≈ 10 N/kg : un objet de 2 kg a un poids P = 2 × 10 = <b>20 N</b>. Sur la Lune, sa masse reste 2 kg mais son poids est plus faible.</p>',
    retenir:'La <b>masse</b> (kg) ne change pas ; le <b>poids</b> (N) dépend de l’astre. <b>P = m × g</b>.'
  }
},
{
  id:'pc-etats-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Les états et changements d’état de l’eau',
  motsCles:['solide','liquide','gaz','fusion','vaporisation','solidification','condensation','changement d’état'],
  contenu:{
    objectifs:['Nommer les changements d’état.','Comprendre la conservation de la masse.'],
    notions:[
      {terme:'Trois états', def:'solide, liquide, gazeux.'},
      {terme:'Changements', def:'fusion (S→L), solidification (L→S), vaporisation (L→G), liquéfaction/condensation (G→L).'},
      {terme:'Températures de l’eau', def:'fusion à 0 °C, ébullition à 100 °C (sous pression normale).'}
    ],
    essentiel:'<p>L’eau change d’<b>état</b> selon la température. Lors d’un changement d’état, la <b>masse se conserve</b> mais le <b>volume</b> change (la glace occupe plus de place que l’eau liquide).</p>',
    exemple:'<p>Fusion de la glace à 0 °C ; ébullition de l’eau à 100 °C. Pendant un changement d’état, la température reste constante.</p>',
    retenir:'Changement d’état : <b>masse conservée</b>, <b>volume modifié</b>. Eau : fusion à 0 °C, ébullition à 100 °C.'
  }
},
{
  id:'pc-masse-volumique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La masse volumique',
  motsCles:['masse volumique','densité','masse','volume','flotte','coule','g/cm3','ρ'],
  contenu:{
    objectifs:['Calculer une masse volumique.','Prévoir si un corps flotte ou coule.'],
    notions:[
      {terme:'Masse volumique', def:'ρ = masse ÷ volume (en g/cm³ ou kg/m³).'},
      {terme:'Eau', def:'ρ(eau) = 1 g/cm³ (soit 1000 kg/m³).'},
      {terme:'Flotter / couler', def:'un corps flotte sur l’eau si sa masse volumique est inférieure à celle de l’eau.'}
    ],
    essentiel:'<p>La <b>masse volumique</b> compare la masse d’un corps à son <b>volume</b>. Elle permet d’<b>identifier</b> un matériau et de prévoir s’il <b>flotte</b> ou <b>coule</b> dans un liquide.</p>',
    exemple:'<p>200 g pour 250 cm³ → ρ = 200 ÷ 250 = <b>0,8 g/cm³</b> : ce corps flotte sur l’eau.</p>',
    retenir:'ρ < 1 g/cm³ → <b>flotte</b> ; ρ > 1 g/cm³ → <b>coule</b> (dans l’eau). Bien penser aux unités.'
  }
},
{
  id:'pc-energie-electrique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Puissance et énergie électrique',
  motsCles:['puissance','énergie','watt','joule','kWh','P=UI','E=Pt','facture','consommation'],
  contenu:{
    objectifs:['Calculer la puissance d’un appareil.','Calculer l’énergie consommée.'],
    notions:[
      {terme:'Puissance', def:'P = U × I, en watts (W).'},
      {terme:'Énergie', def:'E = P × t, en joules (J) ou en kilowattheures (kWh).'},
      {terme:'kWh', def:'unité de la facture d’électricité : énergie consommée par un appareil de 1 kW pendant 1 h.'}
    ],
    essentiel:'<p>La <b>puissance</b> (W) indique la « rapidité » de consommation ; l’<b>énergie</b> (J ou kWh) dépend en plus de la <b>durée</b>. La facture d’électricité se compte en <b>kWh</b>.</p>',
    exemple:'<p>Radiateur de 2000 W (= 2 kW) pendant 3 h : E = P × t = 2 × 3 = <b>6 kWh</b>.</p>',
    retenir:'<b>P = U × I</b> ; <b>E = P × t</b>. Plus on utilise longtemps un appareil, plus l’énergie (et la facture) augmente.'
  }
},
{
  id:'pc-solubilite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Miscibilité et solubilité',
  motsCles:['miscible','soluble','saturation','dissolution','solvant','soluté','mélange','conservation'],
  contenu:{
    objectifs:['Distinguer miscibilité et solubilité.','Comprendre la saturation.'],
    notions:[
      {terme:'Liquides miscibles', def:'deux liquides qui se mélangent totalement (eau + sirop).'},
      {terme:'Liquides non miscibles', def:'liquides qui ne se mélangent pas et forment deux couches (eau + huile).'},
      {terme:'Solubilité', def:'masse maximale de soluté dissoluble dans un solvant ; au-delà, la solution est saturée.'}
    ],
    essentiel:'<p>La <b>miscibilité</b> concerne deux <b>liquides</b> ; la <b>solubilité</b> la quantité de <b>solide</b> qu’un solvant peut dissoudre. Au-delà d’une certaine masse, la solution est <b>saturée</b> et le surplus se dépose.</p>',
    exemple:'<p>On ne peut plus dissoudre de sel dans l’eau une fois la <b>saturation</b> atteinte.</p>',
    retenir:'Dissoudre <b>ne fait pas disparaître</b> la matière : la masse se conserve. Miscible = pour des liquides.'
  }
},
{
  id:'pc-combustion', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La combustion',
  motsCles:['combustion','combustible','comburant','dioxygène','triangle du feu','transformation chimique','CO2','sécurité'],
  contenu:{
    objectifs:['Identifier les éléments d’une combustion.','Reconnaître réactifs et produits.'],
    notions:[
      {terme:'Combustible', def:'ce qui brûle (bois, gaz, papier, essence).'},
      {terme:'Comburant', def:'le dioxygène (O₂) de l’air, indispensable à la combustion.'},
      {terme:'Triangle du feu', def:'combustible + comburant + énergie d’activation (chaleur) : les trois sont nécessaires.'}
    ],
    essentiel:'<p>Une <b>combustion</b> est une <b>transformation chimique</b> qui nécessite un <b>combustible</b>, un <b>comburant</b> (le dioxygène) et une source de chaleur. Elle produit souvent du <b>CO₂</b> et de l’eau. Une combustion incomplète produit du monoxyde de carbone (CO), très dangereux.</p>',
    exemple:'<p>Combustion du carbone : C + O₂ → CO₂. Pour éteindre un feu, on supprime un côté du <b>triangle du feu</b> (ex. couvrir pour priver de dioxygène).</p>',
    retenir:'Pas de feu sans les <b>3 éléments</b> : combustible + dioxygène + chaleur.'
  }
},
{
  id:'pc-conducteurs-circuits', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Circuits électriques : conducteurs, série et dérivation',
  motsCles:['conducteur','isolant','circuit','série','dérivation','court-circuit','courant','sécurité','fusible'],
  contenu:{
    objectifs:['Distinguer conducteurs et isolants.','Comparer circuit série et circuit en dérivation.'],
    notions:[
      {terme:'Conducteur', def:'laisse passer le courant électrique (les métaux, le corps humain).'},
      {terme:'Isolant', def:'ne laisse pas passer le courant (plastique, verre, bois sec).'},
      {terme:'Série / dérivation', def:'en série, tous les composants sont sur une seule boucle ; en dérivation, ils sont sur des branches séparées.'}
    ],
    essentiel:'<p>Le courant ne circule que dans un circuit <b>fermé</b> constitué de <b>conducteurs</b>. En <b>série</b>, si une lampe s’éteint, tout s’arrête ; en <b>dérivation</b>, les lampes sont indépendantes. Un <b>court-circuit</b> provoque un fort échauffement, d’où fusibles et disjoncteurs.</p>',
    retenir:'Métaux = conducteurs, plastique = isolant. Un <b>court-circuit</b> est dangereux ; l’électricité est un risque à respecter.'
  }
},
{
  id:'pc-lumiere-ombres', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Lumière, ombres et système Soleil-Terre-Lune',
  motsCles:['ombre','lumière','Soleil','Terre','Lune','phases','éclipse','jour et nuit','opaque'],
  contenu:{
    objectifs:['Expliquer la formation des ombres.','Comprendre jour/nuit et phases de la Lune.'],
    notions:[
      {terme:'Ombre', def:'zone sans lumière derrière un objet opaque éclairé (la lumière se propage en ligne droite).'},
      {terme:'Jour / nuit', def:'dus à la rotation de la Terre sur elle-même (24 h).'},
      {terme:'Phases de la Lune', def:'on voit la partie éclairée de la Lune selon sa position autour de la Terre.'}
    ],
    essentiel:'<p>La lumière se propageant en <b>ligne droite</b>, un objet <b>opaque</b> crée une <b>ombre</b>. La rotation de la <b>Terre</b> explique le <b>jour et la nuit</b> ; les positions relatives Soleil-Terre-Lune expliquent les <b>phases</b> lunaires et les <b>éclipses</b>.</p>',
    retenir:'Ombre = lumière <b>bloquée</b> par un objet opaque. Jour/nuit = <b>rotation de la Terre</b> sur elle-même.'
  }
},
{
  id:'pc-air', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'L’air : composition et masse',
  motsCles:['air','gaz','diazote','dioxygène','masse','compressible','atmosphère','N2','O2'],
  contenu:{
    objectifs:['Connaître la composition de l’air.','Montrer que l’air possède une masse.'],
    notions:[
      {terme:'Composition', def:'l’air est un mélange d’environ 78 % de diazote (N₂) et 21 % de dioxygène (O₂).'},
      {terme:'L’air a une masse', def:'comme toute matière, l’air a une masse (1 L d’air ≈ 1,2 g).'},
      {terme:'Compressible', def:'contrairement aux liquides, un gaz peut être comprimé (réduit) ou dilaté.'}
    ],
    essentiel:'<p>L’<b>air</b> est un mélange de <b>gaz</b>, surtout du <b>diazote</b> et du <b>dioxygène</b>. Comme toute matière, l’air possède une <b>masse</b>. Un gaz est <b>compressible</b> et <b>expansible</b>.</p>',
    retenir:'Air ≈ <b>78 % diazote + 21 % dioxygène</b>. Un gaz a une <b>masse</b> et est <b>compressible</b>.'
  }
},
{
  id:'pc-systeme-solaire', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Le système solaire et la gravitation',
  motsCles:['système solaire','planète','Soleil','gravitation','orbite','attraction','satellite','univers'],
  contenu:{
    objectifs:['Décrire le système solaire.','Comprendre le rôle de la gravitation.'],
    notions:[
      {terme:'Système solaire', def:'le Soleil (une étoile) et les 8 planètes qui tournent autour, ainsi que leurs satellites.'},
      {terme:'Gravitation', def:'attraction entre tous les objets qui ont une masse ; elle maintient les planètes en orbite.'},
      {terme:'Orbite', def:'trajectoire d’une planète autour du Soleil (ou d’un satellite autour d’une planète).'}
    ],
    essentiel:'<p>Le <b>système solaire</b> est organisé autour du <b>Soleil</b>. La <b>gravitation</b> attire les planètes et les maintient sur leur <b>orbite</b>. C’est la même force qui fait tomber les objets sur Terre (le poids).</p>',
    retenir:'La <b>gravitation</b> gouverne aussi bien la chute des corps que le mouvement des planètes et des satellites.'
  }
}
]);
