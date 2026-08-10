window.FICHES = (window.FICHES || []).concat([
{
  id:'pc-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La constitution de la matière (atomes, molécules, ions)',
  motsCles:['atome','molécule','ion','élément','symbole','noyau','électron','matière'],
  contenu:{
    objectifs:['Décrire l’atome.','Distinguer atome, molécule et ion.'],
    notions:[
      {terme:'Atome', def:'noyau (protons +, neutrons) entouré d’électrons (−). Globalement neutre.'},
      {terme:'Molécule', def:'assemblage d’atomes liés (ex. H₂O, CO₂).'},
      {terme:'Ion', def:'atome qui a gagné ou perdu des électrons → chargé (Na⁺, Cl⁻).'}
    ],
    essentiel:'<p>La matière est faite d’<b>atomes</b>, représentés par des <b>symboles</b> (H, O, C…). Les atomes s’assemblent en <b>molécules</b>. Un atome qui perd/gagne des électrons devient un <b>ion</b>.</p>',
    exemple:'<p>H₂O = 2 atomes d’hydrogène + 1 atome d’oxygène.</p>',
    retenir:'Atome = <b>neutre</b> ; ion = <b>chargé</b> (+ s’il perd des électrons, − s’il en gagne).'
  }
},
{
  id:'pc-transformation-chimique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les transformations chimiques',
  motsCles:['réaction chimique','réactif','produit','équation','conservation','combustion','atomes'],
  contenu:{
    objectifs:['Distinguer réactifs et produits.','Équilibrer une équation simple.'],
    notions:[
      {terme:'Réactifs', def:'espèces présentes au départ, qui disparaissent.'},
      {terme:'Produits', def:'espèces formées à la fin.'},
      {terme:'Conservation', def:'les atomes se conservent : autant de chaque type avant et après.'}
    ],
    essentiel:'<p>Lors d’une <b>transformation chimique</b>, des <b>réactifs</b> se transforment en <b>produits</b>. Les <b>atomes se conservent</b> (ni créés ni détruits), donc l’équation doit être <b>équilibrée</b> et la masse est conservée.</p>',
    exemple:'<p>Combustion du carbone : C + O₂ → CO₂.</p>',
    retenir:'Masse conservée : <b>masse des réactifs = masse des produits</b>.'
  }
},
{
  id:'pc-melanges', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Mélanges, solutions et corps purs',
  motsCles:['mélange','solution','soluté','solvant','corps pur','filtration','décantation','concentration'],
  contenu:{
    objectifs:['Distinguer corps pur et mélange.','Séparer les constituants d’un mélange.'],
    notions:[
      {terme:'Corps pur', def:'une seule espèce chimique (eau distillée).'},
      {terme:'Mélange', def:'plusieurs espèces ; homogène (on ne distingue rien) ou hétérogène.'},
      {terme:'Techniques', def:'décantation, filtration, évaporation pour séparer.'}
    ],
    essentiel:'<p>Un <b>mélange homogène</b> (une solution) est fait d’un <b>soluté</b> dissous dans un <b>solvant</b>. On sépare les constituants par <b>filtration</b>, <b>décantation</b> ou <b>évaporation</b>.</p>',
    exemple:'<p>Eau + sel = solution ; l’évaporation laisse le sel.</p>',
    retenir:'Homogène = <b>on ne distingue pas</b> les constituants ; hétérogène = <b>on les voit</b>.'
  }
},
{
  id:'pc-ph', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Acides, bases et pH',
  motsCles:['ph','acide','base','neutre','dilution','indicateur','ion h+','ion oh-'],
  contenu:{
    objectifs:['Utiliser l’échelle de pH.','Comprendre l’effet d’une dilution.'],
    notions:[
      {terme:'pH', def:'mesure l’acidité, de 0 à 14.'},
      {terme:'Échelle', def:'pH < 7 acide ; pH = 7 neutre ; pH > 7 basique.'},
      {terme:'Dilution', def:'ajouter de l’eau rapproche le pH de 7.'}
    ],
    essentiel:'<p>Le <b>pH</b> indique si une solution est <b>acide</b>, <b>neutre</b> ou <b>basique</b>. Les solutions acides contiennent beaucoup d’ions <b>H⁺</b>. Diluer avec de l’eau <b>rapproche le pH de 7</b>.</p>',
    exemple:'<p>Jus de citron pH≈2 (acide) ; eau savonneuse pH≈9 (basique).</p>',
    retenir:'Plus le pH est <b>bas</b>, plus c’est <b>acide</b> ; la dilution atténue l’acidité.'
  }
},
{
  id:'pc-energie', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'L’énergie : formes et conversions',
  motsCles:['énergie','chaîne énergétique','conversion','joule','puissance','renouvelable','centrale'],
  contenu:{
    objectifs:['Identifier les formes d’énergie.','Construire une chaîne énergétique.'],
    notions:[
      {terme:'Formes', def:'cinétique, thermique, électrique, chimique, lumineuse, nucléaire…'},
      {terme:'Conservation', def:'l’énergie se transforme mais ne disparaît pas.'},
      {terme:'Chaîne énergétique', def:'suite des conversions d’un système (source → convertisseur → utilisation).'}
    ],
    essentiel:'<p>L’<b>énergie</b> existe sous plusieurs <b>formes</b> et se <b>convertit</b> de l’une à l’autre. Une <b>chaîne énergétique</b> décrit ces conversions ; l’énergie totale se <b>conserve</b>.</p>',
    exemple:'<p>Lampe : électrique → lumineuse + thermique.</p>',
    retenir:'Unité d’énergie : le <b>joule (J)</b> ; puissance : le <b>watt (W)</b>.'
  }
},
{
  id:'pc-electricite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Les circuits électriques',
  motsCles:['circuit','tension','intensité','volt','ampère','résistance','loi d’ohm','série','dérivation'],
  contenu:{
    objectifs:['Distinguer tension et intensité.','Utiliser la loi d’Ohm.'],
    notions:[
      {terme:'Intensité (I)', def:'débit du courant, en ampères (A), mesurée par un ampèremètre (en série).'},
      {terme:'Tension (U)', def:'en volts (V), mesurée par un voltmètre (en dérivation).'},
      {terme:'Loi d’Ohm', def:'U = R × I (R = résistance en ohms Ω).'}
    ],
    essentiel:'<p>Un <b>circuit</b> comporte un générateur et des récepteurs. L’<b>intensité</b> se mesure <b>en série</b>, la <b>tension en dérivation</b>. Pour une résistance : <b>U = R × I</b>.</p>',
    exemple:'<p>R = 20 Ω, I = 0,5 A → U = 20 × 0,5 = <b>10 V</b>.</p>',
    retenir:'En <b>série</b>, si un composant s’arrête, tout s’arrête ; en <b>dérivation</b>, non.'
  }
},
{
  id:'pc-lumiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La lumière et la vision',
  motsCles:['lumière','source','propagation','spectre','vision','rayon','objet diffusant'],
  contenu:{
    objectifs:['Comprendre les conditions de la vision.','Distinguer sources et objets diffusants.'],
    notions:[
      {terme:'Source primaire', def:'produit sa lumière (Soleil, lampe).'},
      {terme:'Objet diffusant', def:'renvoie la lumière reçue (la Lune, un mur).'},
      {terme:'Propagation', def:'la lumière se propage en ligne droite dans un milieu homogène.'}
    ],
    essentiel:'<p>Pour <b>voir</b> un objet, il faut que de la <b>lumière</b> parte de lui (source ou objet diffusant) et entre dans notre <b>œil</b>. La lumière voyage en <b>ligne droite</b>.</p>',
    exemple:'<p>La lumière blanche se décompose en un <b>spectre</b> de couleurs (arc-en-ciel).</p>',
    retenir:'Voir un objet = de la lumière <b>venue de l’objet</b> atteint l’œil.'
  }
},
{
  id:'pc-son', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Le son',
  motsCles:['son','fréquence','vitesse du son','vibration','hertz','fort','aigu','milieu'],
  contenu:{
    objectifs:['Comprendre la propagation du son.','Relier fréquence et hauteur.'],
    notions:[
      {terme:'Son', def:'vibration qui se propage dans un milieu matériel (pas dans le vide).'},
      {terme:'Vitesse', def:'≈ 340 m/s dans l’air (plus rapide dans l’eau et les solides).'},
      {terme:'Fréquence', def:'en hertz (Hz) ; plus elle est élevée, plus le son est aigu.'}
    ],
    essentiel:'<p>Le <b>son</b> est une <b>vibration</b> qui a besoin d’un <b>milieu matériel</b>. Sa <b>fréquence</b> détermine s’il est <b>grave ou aigu</b>, son amplitude s’il est <b>fort ou faible</b>.</p>',
    exemple:'<p>Éclair puis tonnerre : la lumière arrive avant le son (le son est bien plus lent).</p>',
    retenir:'Le son <b>ne se propage pas dans le vide</b> (contrairement à la lumière).'
  }
},
{
  id:'pc-mouvement', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'Mouvement et vitesse',
  motsCles:['mouvement','vitesse','trajectoire','référentiel','uniforme','accéléré','relatif'],
  contenu:{
    objectifs:['Décrire un mouvement.','Calculer une vitesse.'],
    notions:[
      {terme:'Référentiel', def:'objet par rapport auquel on étudie le mouvement.'},
      {terme:'Trajectoire', def:'ligne suivie par l’objet.'},
      {terme:'Vitesse', def:'v = distance / durée (m/s ou km/h).'},
      {terme:'Types', def:'uniforme (v constante), accéléré, ralenti.'}
    ],
    essentiel:'<p>Un mouvement se décrit <b>toujours par rapport à un référentiel</b>. La <b>vitesse</b> = distance ÷ durée. Un mouvement est <b>uniforme</b>, <b>accéléré</b> ou <b>ralenti</b> selon l’évolution de la vitesse.</p>',
    exemple:'<p>100 m en 20 s → v = 100/20 = <b>5 m/s</b>.</p>',
    retenir:'Le mouvement est <b>relatif</b> : il dépend du référentiel choisi.'
  }
},
{
  id:'pc-forces', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Les forces et la gravitation',
  motsCles:['force','poids','gravitation','newton','attraction','masse','interaction'],
  contenu:{
    objectifs:['Caractériser une force.','Distinguer poids et masse.'],
    notions:[
      {terme:'Force', def:'action capable de modifier le mouvement ou la forme d’un objet.'},
      {terme:'Poids', def:'force d’attraction de la Terre, en newtons (N) : P = m × g.'},
      {terme:'Gravitation', def:'attraction entre tous les objets ayant une masse.'}
    ],
    essentiel:'<p>Une <b>force</b> peut mettre en mouvement, arrêter ou déformer un objet. Le <b>poids</b> est la force de <b>gravitation</b> exercée par la Terre : il dépend du lieu, contrairement à la <b>masse</b>.</p>',
    exemple:'<p>Sur Terre, g ≈ 10 N/kg : un objet de 2 kg a un poids de <b>20 N</b>.</p>',
    retenir:'La <b>masse</b> (kg) ne change pas ; le <b>poids</b> (N) dépend de l’astre.'
  }
},
{
  id:'pc-etats-matiere', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Les états et changements d’état de l’eau',
  motsCles:['solide','liquide','gaz','fusion','vaporisation','solidification','changement d’état','masse'],
  contenu:{
    objectifs:['Nommer les changements d’état.','Comprendre la conservation de la masse.'],
    notions:[
      {terme:'États', def:'solide, liquide, gazeux.'},
      {terme:'Changements', def:'fusion (S→L), solidification (L→S), vaporisation (L→G), condensation (G→L).'},
      {terme:'Conservation', def:'la masse se conserve lors d’un changement d’état (le volume, non).'}
    ],
    essentiel:'<p>L’eau change d’<b>état</b> selon la température. Lors de ces changements, la <b>masse se conserve</b> même si le <b>volume</b> varie (la glace occupe plus de place que l’eau).</p>',
    exemple:'<p>Fusion de la glace à 0 °C ; ébullition de l’eau à 100 °C.</p>',
    retenir:'Changement d’état : <b>masse conservée</b>, <b>volume modifié</b>.'
  }
},
{
  id:'pc-masse-volumique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'4e',
  titre:'La masse volumique',
  motsCles:['masse volumique','densité','masse','volume','flotte','coule','g/cm3'],
  contenu:{
    objectifs:['Calculer une masse volumique.','Prévoir si un corps flotte ou coule.'],
    notions:[
      {terme:'Masse volumique', def:'ρ = masse / volume (en g/cm³ ou kg/m³).'},
      {terme:'Eau', def:'ρ(eau) = 1 g/cm³ (soit 1000 kg/m³).'},
      {terme:'Flotter', def:'un corps flotte sur l’eau si sa masse volumique est inférieure à celle de l’eau.'}
    ],
    essentiel:'<p>La <b>masse volumique</b> compare la masse d’un objet à son <b>volume</b>. Elle permet d’<b>identifier</b> un matériau et de savoir s’il <b>flotte</b> ou <b>coule</b>.</p>',
    exemple:'<p>200 g pour 250 cm³ → ρ = 200/250 = <b>0,8 g/cm³</b> : ce corps flotte sur l’eau.</p>',
    retenir:'ρ < 1 g/cm³ → <b>flotte</b> ; ρ > 1 g/cm³ → <b>coule</b> (dans l’eau).'
  }
},
{
  id:'pc-energie-electrique', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'3e',
  titre:'Puissance et énergie électrique',
  motsCles:['puissance','énergie','watt','joule','kwh','p=ui','facture','consommation'],
  contenu:{
    objectifs:['Calculer la puissance d’un appareil.','Calculer l’énergie consommée.'],
    notions:[
      {terme:'Puissance', def:'P = U × I (en watts W).'},
      {terme:'Énergie', def:'E = P × t (en joules J, ou en kWh).'},
      {terme:'kWh', def:'unité de la facture d’électricité : 1 kWh = énergie d’un appareil de 1 kW pendant 1 h.'}
    ],
    essentiel:'<p>La <b>puissance</b> (W) indique la « rapidité » de consommation ; l’<b>énergie</b> (J ou kWh) dépend en plus de la <b>durée</b>. La facture d’électricité se compte en <b>kWh</b>.</p>',
    exemple:'<p>Radiateur de 2000 W pendant 3 h : E = 2 kW × 3 h = <b>6 kWh</b>.</p>',
    retenir:'<b>P = U × I</b> ; <b>E = P × t</b>. Plus on utilise longtemps, plus l’énergie augmente.'
  }
},
{
  id:'pc-solubilite', matiereKey:'physique', matiere:'Physique-Chimie', niveau:'5e',
  titre:'Miscibilité et solubilité',
  motsCles:['miscible','soluble','saturation','dissolution','solvant','soluté','mélange'],
  contenu:{
    objectifs:['Distinguer miscibilité et solubilité.','Comprendre la saturation.'],
    notions:[
      {terme:'Miscibles', def:'deux liquides qui se mélangent totalement (eau + sirop).'},
      {terme:'Non miscibles', def:'liquides qui ne se mélangent pas (eau + huile).'},
      {terme:'Solubilité', def:'masse maximale de soluté qu’on peut dissoudre ; au-delà, la solution est saturée.'}
    ],
    essentiel:'<p>La <b>miscibilité</b> concerne deux <b>liquides</b> ; la <b>solubilité</b> la quantité de <b>solide</b> qu’un solvant peut dissoudre. Au-delà d’une limite, la solution est <b>saturée</b>.</p>',
    exemple:'<p>On ne peut plus dissoudre de sel dans l’eau une fois la <b>saturation</b> atteinte : le surplus se dépose.</p>',
    retenir:'Dissoudre <b>ne fait pas disparaître</b> la matière : la masse se conserve.'
  }
}
]);
