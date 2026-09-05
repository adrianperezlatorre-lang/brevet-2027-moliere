/* Exercices pratiques (suite) : situations d'application pour
   Histoire, Géographie, EMC, SVT, Physique-Chimie (thèmes non calculatoires) et Technologie. */
(function(){
  const B = window.EXOS.B;

  /* ================= HISTOIRE : documents & situations ================= */
  B['hist-1gm'] = [
    { q:'Une lettre de poilu décrit « la boue, les rats et l’attente sous les obus ». Quelle phase de la guerre illustre-t-elle ?', choix:['la guerre de position (tranchées)','la guerre de mouvement','l’après-guerre','la guerre navale'], sol:0, expl:'Front figé 1915-1917 : la vie des tranchées.' },
    { q:'Une affiche de 1915 appelle les Français à prêter leur or à l’État. Que montre-t-elle ?', choix:['la mobilisation de l’économie (guerre totale)','la fin de la guerre','la neutralité française','la révolution russe'], sol:0, expl:'La guerre totale mobilise aussi l’argent des civils.' },
    { q:'Classe dans l’ordre : armistice · bataille de Verdun · attentat de Sarajevo', choix:['Sarajevo → Verdun → armistice','Verdun → Sarajevo → armistice','armistice → Verdun → Sarajevo','Sarajevo → armistice → Verdun'], sol:0, expl:'1914 → 1916 → 11 nov. 1918.' },
    { q:'En 1916, une usine Renault produit des obus et emploie des femmes. Pourquoi ?', choix:['les hommes sont au front, l’économie est convertie à la guerre','les femmes sont mieux payées','la paix approche','les usines sont vides'], sol:0, expl:'Guerre totale : « munitionnettes » à l’arrière.' }
  ];
  B['hist-revolution-russe'] = [
    { q:'Une affiche soviétique montre Staline en « guide génial ». C’est un exemple de…', choix:['culte de la personnalité','liberté de la presse','démocratie','fédéralisme'], sol:0, expl:'Propagande glorifiant le chef.' },
    { q:'Un paysan refuse de rejoindre le kolkhoze : que risque-t-il dans l’URSS de Staline ?', choix:['la déportation au goulag','une amende légère','rien','une médaille'], sol:0, expl:'La collectivisation est imposée par la terreur.' },
    { q:'En URSS, un plan fixe la production d’acier pour 5 ans. Comment appelle-t-on cela ?', choix:['la planification (plans quinquennaux)','le libre marché','le capitalisme','l’autogestion'], sol:0, expl:'L’État décide de toute l’économie.' }
  ];
  B['hist-nazisme'] = [
    { q:'En 1936, un élève allemand passe ses jeudis aux Jeunesses hitlériennes. Cela illustre…', choix:['l’embrigadement de la jeunesse','la liberté scolaire','la démocratie','le pacifisme'], sol:0, expl:'Le régime encadre les enfants dès le plus jeune âge.' },
    { q:'En 1935, un médecin juif perd sa citoyenneté allemande. Quelle mesure l’explique ?', choix:['les lois de Nuremberg','le traité de Versailles','la nuit de Cristal','le plan quinquennal'], sol:0, expl:'Lois de Nuremberg (1935) : exclusion des Juifs.' },
    { q:'Quel point commun entre l’URSS de Staline et l’Allemagne nazie ?', choix:['parti unique, terreur et propagande','la même idéologie raciste','des élections libres','l’économie de marché'], sol:0, expl:'Deux régimes totalitaires (idéologies différentes).' }
  ];
  B['hist-2gm'] = [
    { q:'Classe dans l’ordre : Débarquement de Normandie · Stalingrad · invasion de la Pologne', choix:['Pologne → Stalingrad → Débarquement','Stalingrad → Pologne → Débarquement','Débarquement → Stalingrad → Pologne','Pologne → Débarquement → Stalingrad'], sol:0, expl:'1939 → 1942-43 → 6 juin 1944.' },
    { q:'En 1943, un cheminot français sabote un train allemand. Il appartient à…', choix:['la Résistance','la collaboration','la Wehrmacht','la SDN'], sol:0, expl:'Actions clandestines contre l’occupant.' },
    { q:'Le bombardement de villes entières et le massacre de civils montrent que la 2GM est une guerre…', choix:['d’anéantissement','de position','courtoise','uniquement navale'], sol:0, expl:'On vise aussi les populations.' }
  ];
  B['hist-shoah'] = [
    { q:'En 1942, une famille juive de Paris reçoit l’ordre de porter l’étoile jaune. Quelle étape du processus est-ce ?', choix:['l’exclusion et le marquage','la libération','l’exil volontaire','la naturalisation'], sol:0, expl:'Étape d’exclusion avant les déportations.' },
    { q:'Des trains partent de toute l’Europe vers Auschwitz. Cela montre que le génocide est…', choix:['planifié et organisé à l’échelle du continent','spontané','local','improvisé'], sol:0, expl:'Une extermination industrielle et coordonnée.' },
    { q:'Un déporté est sélectionné pour le travail forcé, un autre envoyé aussitôt à la mort : où cela se passe-t-il ?', choix:['dans un camp d’extermination comme Auschwitz-Birkenau','dans un ghetto','à Versailles','dans un camp de vacances'], sol:0, expl:'La « sélection » à l’arrivée au camp.' }
  ];
  B['hist-guerre-froide'] = [
    { q:'En 1961, un Berlinois ne peut plus rejoindre sa famille à l’Ouest. Pourquoi ?', choix:['le Mur de Berlin vient d’être construit','la ville est bombardée','les ponts sont détruits','le métro est fermé'], sol:0, expl:'Le Mur coupe Berlin en deux (1961-1989).' },
    { q:'USA et URSS s’affrontent au Vietnam et en Corée sans jamais se déclarer la guerre. On parle de…', choix:['conflits par procuration (guerre froide)','guerre mondiale','alliances','croisades'], sol:0, expl:'Affrontement indirect entre les deux blocs.' },
    { q:'1962 : des missiles soviétiques sont découverts à Cuba. Quelle est la conséquence ?', choix:['le monde frôle la guerre nucléaire','la guerre éclate','l’URSS envahit les USA','rien ne se passe'], sol:0, expl:'Crise de Cuba : tension maximale puis recul négocié.' }
  ];
  B['hist-decolonisation'] = [
    { q:'Gandhi organise une marche pacifique contre l’impôt sur le sel. Quelle voie d’indépendance illustre-t-il ?', choix:['la voie négociée et non violente','la guerre d’indépendance','le terrorisme','l’annexion'], sol:0, expl:'L’Inde obtient l’indépendance en 1947 par la non-violence.' },
    { q:'De 1954 à 1962, la France affronte le FLN. De quel pays s’agit-il ?', saisie:['algerie','algérie','l algerie','l’algérie'], expl:'La guerre d’Algérie (indépendance en 1962).' },
    { q:'Les nouveaux États indépendants, souvent pauvres et non alignés, forment…', choix:['le Tiers-Monde','le bloc de l’Est','l’OTAN','l’Union européenne'], sol:0, expl:'Ni Ouest ni Est : le « Tiers-Monde ».' }
  ];
  B['hist-ve-republique'] = [
    { q:'1962 : les Français votent pour élire directement leur président. Quelle conséquence ?', choix:['le président gagne une forte légitimité','le président perd ses pouvoirs','le Sénat disparaît','la monarchie revient'], sol:0, expl:'Le suffrage universel direct renforce le chef de l’État.' },
    { q:'Quelle crise provoque le retour de De Gaulle en 1958 ?', choix:['la guerre d’Algérie','Mai 68','la crise de 1929','la chute du Mur'], sol:0, expl:'La IVe République ne parvient pas à la régler.' },
    { q:'Sous la Ve République, qui vote la loi ?', choix:['le Parlement','le président seul','les préfets','les juges'], sol:0, expl:'Assemblée nationale + Sénat.' }
  ];
  B['hist-construction-europeenne'] = [
    { q:'1951 : la France et l’Allemagne mettent en commun charbon et acier. Objectif ?', choix:['rendre une nouvelle guerre impossible','créer l’euro','conquérir l’Est','isoler le Royaume-Uni'], sol:0, expl:'La CECA lie les économies pour garantir la paix.' },
    { q:'Classe dans l’ordre : euro en circulation · traité de Rome · traité de Maastricht', choix:['Rome → Maastricht → euro','euro → Rome → Maastricht','Maastricht → Rome → euro','Rome → euro → Maastricht'], sol:0, expl:'1957 → 1992 → 2002.' },
    { q:'Un Espagnol travaille à Paris sans permis de travail. Quel principe le permet ?', choix:['la libre circulation dans l’UE','le droit d’asile','la colonisation','le traité de Versailles'], sol:0, expl:'Marché unique : libre circulation des personnes.' }
  ];
  B['hist-france-1945'] = [
    { q:'En avril 1945, des Françaises votent pour la première fois. Quand ce droit a-t-il été accordé ?', saisie:['1944'], expl:'Droit de vote des femmes : 1944.' },
    { q:'Dans les années 1960, les familles s’équipent en voitures et téléviseurs. Quelle période économique ?', choix:['les Trente Glorieuses','la Grande Dépression','l’Occupation','la Restauration'], sol:0, expl:'1945-1975 : croissance et consommation.' },
    { q:'Mai 68 débute par…', choix:['une contestation étudiante rejointe par les ouvriers','un coup d’État','une guerre','une élection'], sol:0, expl:'Étudiants puis grève générale.' }
  ];
  B['hist-front-populaire'] = [
    { q:'Été 1936 : des ouvriers partent en vacances à la mer pour la première fois. Grâce à quoi ?', choix:['aux congés payés du Front populaire','au plan Marshall','à la Sécurité sociale','aux 35 heures'], sol:0, expl:'2 semaines de congés payés (1936).' },
    { q:'En mai-juin 1936, les usines sont occupées par les ouvriers en grève. Que réclament-ils ?', choix:['de meilleures conditions (salaires, temps de travail)','la guerre','la fermeture des usines','la monarchie'], sol:0, expl:'La victoire du Front populaire libère les revendications.' },
    { q:'Qui dirige le gouvernement du Front populaire ?', saisie:['blum','leon blum','léon blum'], expl:'Léon Blum.' }
  ];
  B['hist-refondation-republique'] = [
    { q:'1945 : un salarié malade est remboursé de ses soins. Quelle création le permet ?', choix:['la Sécurité sociale','les congés payés','l’euro','la CECA'], sol:0, expl:'Créée en 1945 (programme du CNR).' },
    { q:'À la Libération, qui dirige le Gouvernement provisoire (GPRF) ?', saisie:['de gaulle','charles de gaulle'], expl:'Le général De Gaulle.' },
    { q:'Le programme de réformes de 1944-45 a été préparé pendant la guerre par…', choix:['le Conseil national de la Résistance','le régime de Vichy','la SDN','l’OTAN'], sol:0, expl:'Le CNR unifie la Résistance et prépare l’après-guerre.' }
  ];
  B['hist-monde-1990'] = [
    { q:'11 septembre 2001 : des avions frappent New York. Quel nouveau défi mondial cela révèle-t-il ?', choix:['le terrorisme international','la guerre froide','la décolonisation','la crise de 1929'], sol:0, expl:'Le terrorisme devient un enjeu majeur.' },
    { q:'La Chine devient « l’usine du monde » : le monde devient…', choix:['multipolaire','bipolaire','unipolaire','sans puissances'], sol:0, expl:'De nouvelles puissances émergent.' },
    { q:'Après 1991, quel pays reste un temps la seule superpuissance ?', saisie:['etats-unis','états-unis','les etats-unis','usa','etats unis','états unis'], expl:'Les États-Unis (« hyperpuissance »).' }
  ];
  B['hist-revolution-francaise'] = [
    { q:'Classe dans l’ordre : Ire République · prise de la Bastille · sacre de Napoléon', choix:['Bastille → République → Napoléon','République → Bastille → Napoléon','Napoléon → Bastille → République','Bastille → Napoléon → République'], sol:0, expl:'1789 → 1792 → 1804.' },
    { q:'Août 1789 : « Les hommes naissent libres et égaux en droits. » D’où vient cette phrase ?', choix:['de la Déclaration des droits de l’Homme et du citoyen','du Code civil','du traité de Versailles','de la Constitution de 1958'], sol:0, expl:'DDHC, 26 août 1789.' },
    { q:'Nuit du 4 août 1789 : les nobles renoncent à leurs droits seigneuriaux. C’est…', choix:['l’abolition des privilèges','le sacre du roi','la Terreur','le coup d’État'], sol:0, expl:'Fin de la société d’ordres privilégiés.' }
  ];
  B['hist-revolution-industrielle'] = [
    { q:'Un paysan quitte son village pour travailler dans une filature à Lille. Ce phénomène s’appelle…', choix:['l’exode rural','la colonisation','l’émigration lointaine','la transhumance'], sol:0, expl:'Des campagnes vers les villes-usines.' },
    { q:'Un enfant de 10 ans travaille 12 h dans une mine. Que révèle ce cas ?', choix:['les dures conditions ouvrières du XIXᵉ','le confort ouvrier','l’école obligatoire','les congés payés'], sol:0, expl:'Avant les lois sociales, le travail des enfants est courant.' },
    { q:'Des ouvriers créent une caisse commune et font grève. C’est la naissance…', choix:['du mouvement ouvrier','du capitalisme','de la bourgeoisie','de l’artisanat'], sol:0, expl:'Syndicats et luttes sociales.' }
  ];
  B['hist-colonisation'] = [
    { q:'1885 : à Berlin, les Européens tracent des frontières en Afrique sans les Africains. Cela illustre…', choix:['le partage colonial','la décolonisation','l’alliance égalitaire','le commerce équitable'], sol:0, expl:'Conférence de Berlin : partage de l’Afrique.' },
    { q:'Dans une colonie, un « indigène » n’a pas les mêmes droits qu’un colon. La société coloniale est donc…', choix:['inégalitaire','démocratique','égalitaire','libre'], sol:0, expl:'Domination et discrimination des colonisés.' },
    { q:'« Nous apportons la civilisation » disaient les colonisateurs. C’est…', choix:['une justification idéologique de la domination','une réalité prouvée','un traité','une loi de la République'], sol:0, expl:'La « mission civilisatrice » masque l’exploitation.' }
  ];
  B['hist-moyen-age'] = [
    { q:'Un chevalier s’agenouille et jure fidélité à un seigneur qui lui remet une terre. Cette cérémonie crée…', choix:['un lien vassal-suzerain (hommage)','un mariage','un baptême','un procès'], sol:0, expl:'Fidélité contre fief : la féodalité.' },
    { q:'Un paysan donne des journées de travail gratuites à son seigneur. Comment cela s’appelle-t-il ?', choix:['la corvée','la dîme','l’impôt sur le revenu','le tribut romain'], sol:0, expl:'Corvées + redevances contre protection.' },
    { q:'Qui prie, qui combat, qui travaille ? Associe : clergé / nobles / paysans', choix:['clergé prie, nobles combattent, paysans travaillent','nobles prient, clergé combat, paysans travaillent','paysans prient, nobles travaillent, clergé combat','clergé travaille, paysans combattent, nobles prient'], sol:0, expl:'La société des trois ordres.' }
  ];
  B['hist-islam-medieval'] = [
    { q:'À Cordoue au Xᵉ siècle, des savants traduisent des textes grecs. Que montre cet exemple ?', choix:['les échanges de savoirs en Méditerranée','l’isolement du monde musulman','la fin des sciences','les croisades'], sol:0, expl:'Le monde musulman transmet et enrichit les savoirs.' },
    { q:'Des marchands italiens achètent des épices à Alexandrie. Cela illustre…', choix:['le commerce entre chrétiens et musulmans','la guerre permanente','le blocus total','l’autarcie'], sol:0, expl:'Malgré les conflits, le commerce est intense.' },
    { q:'Les croisades visent surtout le contrôle de quelle ville ?', saisie:['jerusalem','jérusalem'], expl:'Jérusalem, ville sainte disputée.' }
  ];
  B['hist-renaissance'] = [
    { q:'Vers 1500, un imprimeur vend des centaines de livres identiques. Quelle invention le permet ?', choix:['l’imprimerie de Gutenberg','la boussole','la caravelle','le télescope'], sol:0, expl:'~1450 : diffusion massive des idées.' },
    { q:'Léonard de Vinci étudie l’anatomie et peint la Joconde. Il incarne…', choix:['l’esprit de la Renaissance','le Moyen Âge','l’absolutisme','le romantisme'], sol:0, expl:'Art + science : l’idéal de la Renaissance.' },
    { q:'En 1517, Luther critique la vente des indulgences. Quelle conséquence ?', choix:['la naissance du protestantisme','la fin de l’Église','la paix religieuse','l’unité chrétienne renforcée'], sol:0, expl:'Les Réformes divisent la chrétienté.' }
  ];
  B['hist-grandes-decouvertes'] = [
    { q:'1492 : Colomb croit arriver aux Indes. Où est-il en réalité ?', choix:['en Amérique','en Chine','en Afrique','en Australie'], sol:0, expl:'Il touche les Caraïbes : le « Nouveau Monde ».' },
    { q:'Après la conquête, la population aztèque s’effondre. Cause principale ?', choix:['guerres et maladies apportées d’Europe','le climat','les famines locales seulement','les volcans'], sol:0, expl:'Variole et violence déciment les Amérindiens.' },
    { q:'Quels progrès rendent possibles les grands voyages du XVᵉ siècle ?', choix:['caravelle, boussole, cartes améliorées','avion, radio, radar','train, télégraphe','GPS et satellites'], sol:0, expl:'Progrès techniques de la navigation.' }
  ];
  B['hist-louis-xiv'] = [
    { q:'Chaque matin, des nobles assistent au lever du roi à Versailles. Pourquoi Louis XIV l’impose-t-il ?', choix:['pour contrôler la noblesse et magnifier son pouvoir','par amitié','pour économiser','par religion'], sol:0, expl:'La Cour domestique les grands seigneurs.' },
    { q:'« L’État, c’est moi. » Quelle conception du pouvoir cette formule résume-t-elle ?', choix:['la monarchie absolue','la démocratie','la séparation des pouvoirs','la république'], sol:0, expl:'Tous les pouvoirs concentrés dans le roi.' },
    { q:'De qui Louis XIV affirme-t-il tenir son pouvoir ?', choix:['de Dieu (droit divin)','du peuple','du Parlement','de l’armée'], sol:0, expl:'Monarchie de droit divin.' }
  ];
  B['hist-lumieres'] = [
    { q:'Voltaire défend un protestant condamné à tort (affaire Calas). Quelle valeur des Lumières illustre-t-il ?', choix:['la tolérance','l’absolutisme','le mercantilisme','la censure'], sol:0, expl:'Combat contre le fanatisme et l’injustice.' },
    { q:'Un salon parisien discute de l’Encyclopédie. Quel est le rôle de ces salons ?', choix:['diffuser les idées nouvelles','préparer la guerre','vendre des terres','élire le roi'], sol:0, expl:'Lieux de circulation des idées des Lumières.' },
    { q:'Montesquieu propose que celui qui fait la loi ne soit pas celui qui juge. C’est…', choix:['la séparation des pouvoirs','le droit divin','la monarchie absolue','le suffrage censitaire'], sol:0, expl:'Base de nos démocraties.' }
  ];
  B['hist-traite-esclavage'] = [
    { q:'Un navire part de Nantes avec des tissus, échange des captifs en Afrique, les vend aux Antilles et revient avec du sucre. C’est…', choix:['le commerce triangulaire','le commerce équitable','la route de la soie','le libre-échange'], sol:0, expl:'Europe → Afrique → Amérique → Europe.' },
    { q:'Dans une plantation, un homme est vendu avec la terre, comme un outil. Quel statut le permet ?', choix:['l’esclavage','le servage','le salariat','l’apprentissage'], sol:0, expl:'L’esclave est traité comme une marchandise.' },
    { q:'En quelle année l’esclavage est-il définitivement aboli en France ?', saisie:['1848'], expl:'Abolition définitive : 1848.' }
  ];

  /* ================= GÉOGRAPHIE : études de cas ================= */
  B['geo-aires-urbaines'] = [
    { q:'Chaque matin, Lucas quitte son village à 30 km pour travailler à Toulouse. Il habite…', choix:['la couronne périurbaine','la ville-centre','un bidonville','une métropole étrangère'], sol:0, expl:'Navetteur du périurbain vers le pôle.' },
    { q:'Des champs deviennent un lotissement en périphérie de Lyon. Ce phénomène s’appelle…', choix:['l’étalement urbain','l’exode rural','la métropolisation inverse','la déprise'], sol:0, expl:'La ville s’étend sur les campagnes.' },
    { q:'Quel problème principal pose la vie périurbaine quotidienne ?', choix:['la dépendance à la voiture','le manque d’air','l’absence d’écoles en ville','le bruit des ports'], sol:0, expl:'Déplacements domicile-travail quotidiens.' }
  ];
  B['geo-espaces-productifs'] = [
    { q:'À Sophia-Antipolis, entreprises high-tech et chercheurs travaillent ensemble. C’est un…', choix:['technopôle','port de pêche','bassin minier','marché de gros'], sol:0, expl:'Espace productif innovant.' },
    { q:'La Beauce produit massivement des céréales exportées. C’est un espace…', choix:['agricole productiviste','touristique','industriel lourd','en friche'], sol:0, expl:'Grande culture mécanisée.' },
    { q:'Pourquoi beaucoup d’usines récentes s’installent-elles près des ports ?', choix:['pour importer/exporter facilement (mondialisation)','pour la vue','pour éviter les impôts','pour le climat'], sol:0, expl:'Littoralisation des activités.' }
  ];
  B['geo-faible-densite'] = [
    { q:'Dans un village de Lozère, l’école ferme faute d’élèves. Quel processus ?', choix:['le déclin des espaces de faible densité','la métropolisation','l’étalement urbain','la littoralisation'], sol:0, expl:'Départ des jeunes → fermeture des services.' },
    { q:'Un village du Cantal mise sur les gîtes et la randonnée. Quelle stratégie ?', choix:['valoriser le tourisme vert','construire des gratte-ciel','ouvrir une mine','attirer des usines chimiques'], sol:0, expl:'Les atouts naturels comme ressource.' },
    { q:'Le télétravail permet à une graphiste de s’installer dans la Creuse. Quel effet pour ce territoire ?', choix:['une revitalisation possible','un déclin certain','aucun','une pollution accrue'], sol:0, expl:'De nouveaux habitants pour les campagnes.' }
  ];
  B['geo-france-ue'] = [
    { q:'Un routier passe d’Espagne en France sans contrôle à la frontière. Grâce à quoi ?', choix:['l’espace Schengen','un visa spécial','la ZEE','le traité de Versailles'], sol:0, expl:'Libre circulation aux frontières intérieures.' },
    { q:'Une région défavorisée reçoit des fonds européens pour rénover ses transports. Objectif de l’UE ?', choix:['réduire les inégalités régionales','punir la région','créer des frontières','financer l’armée'], sol:0, expl:'Politique de cohésion.' },
    { q:'Combien d’États composent l’UE ?', saisie:['27'], expl:'27 États membres.' }
  ];
  B['geo-outre-mer'] = [
    { q:'Un cyclone menace la Guadeloupe. Quelle contrainte des Outre-mer illustre-t-il ?', choix:['l’exposition aux risques naturels','l’excès de tourisme','le froid','la surpopulation'], sol:0, expl:'Cyclones, séismes, volcans.' },
    { q:'Ariane décolle de Kourou. Quel atout ce site donne-t-il à la France ?', choix:['une base spatiale stratégique','une station de ski','un port pétrolier','une mine d’or légale'], sol:0, expl:'Atout scientifique et stratégique en Guyane.' },
    { q:'Grâce à ses îles, la France contrôle d’immenses zones de pêche. Comment s’appelle cet espace maritime ?', saisie:['zee','la zee','zone economique exclusive','zone économique exclusive'], expl:'2ᵉ ZEE mondiale.' }
  ];
  B['geo-amenagement'] = [
    { q:'Une LGV met Bordeaux à 2 h de Paris. Quel objectif d’aménagement ?', choix:['améliorer l’accessibilité du territoire','isoler Bordeaux','réduire le tourisme','fermer des gares'], sol:0, expl:'Rapprocher les territoires.' },
    { q:'L’État installe la fibre optique dans les campagnes. Pourquoi ?', choix:['réduire la fracture numérique','décorer les villages','remplacer les routes','créer des frontières'], sol:0, expl:'Égalité d’accès aux services.' },
    { q:'Qui participe à l’aménagement du territoire ?', choix:['État, collectivités, UE, entreprises','uniquement l’État','uniquement les maires','personne'], sol:0, expl:'Une multitude d’acteurs à plusieurs échelles.' }
  ];
  B['geo-mondialisation'] = [
    { q:'Au Havre, des porte-conteneurs déchargent des produits d’Asie. Le port est…', choix:['une porte d’entrée de la mondialisation','une zone interdite','un espace en friche','une station balnéaire'], sol:0, expl:'Interface majeure des échanges.' },
    { q:'Des touristes du monde entier visitent le Louvre. Quel aspect du rayonnement français ?', choix:['culturel et touristique','militaire','agricole','minier'], sol:0, expl:'1ʳᵉ destination touristique mondiale.' },
    { q:'Une entreprise française délocalise une usine. Quel visage de la mondialisation ?', choix:['la concurrence mondiale','le rayonnement culturel','l’autarcie','la décroissance des échanges'], sol:0, expl:'La mondialisation met les territoires en concurrence.' }
  ];
  B['geo-urbanisation-monde'] = [
    { q:'À Mumbai, un quartier d’affaires côtoie le bidonville de Dharavi. Que révèle ce contraste ?', choix:['les inégalités urbaines des pays du Sud','l’égalité parfaite','le déclin urbain','la fin des villes'], sol:0, expl:'Richesse et pauvreté se côtoient.' },
    { q:'Tokyo dépasse 35 millions d’habitants. C’est une…', choix:['mégapole','petite ville','commune rurale','station balnéaire'], sol:0, expl:'> 10 millions = mégapole.' },
    { q:'Où la croissance urbaine est-elle la plus rapide aujourd’hui ?', choix:['dans les pays du Sud','en Europe','au Japon','nulle part'], sol:0, expl:'Afrique et Asie s’urbanisent à grande vitesse.' }
  ];
  B['geo-mobilites'] = [
    { q:'Un ingénieur indien part travailler au Canada. Quel type de migration ?', choix:['migration économique (de travail)','tourisme','pèlerinage','migration forcée'], sol:0, expl:'Recherche d’emploi et de meilleures conditions.' },
    { q:'Une famille fuit une guerre et demande l’asile en Europe. Ce sont des…', choix:['réfugiés','touristes','navetteurs','expatriés de loisir'], sol:0, expl:'Migration forcée par un conflit.' },
    { q:'Venise limite les paquebots de croisière. Quel problème cherche-t-elle à gérer ?', choix:['le tourisme de masse','le manque de touristes','la sécheresse','l’exode rural'], sol:0, expl:'Pression du surtourisme sur les lieux.' }
  ];
  B['geo-mers-oceans'] = [
    { q:'2021 : un porte-conteneurs bloque le canal de Suez et le commerce mondial ralentit. Que montre cet événement ?', choix:['l’importance des routes maritimes','l’inutilité des canaux','la fin du commerce','la pêche excessive'], sol:0, expl:'Des points de passage stratégiques vitaux.' },
    { q:'Des États se disputent des îlots riches en poissons et en gaz. Que convoitent-ils ?', choix:['les ressources des ZEE','le sable des plages','les phares','les coraux décoratifs'], sol:0, expl:'Ressources halieutiques et énergétiques.' },
    { q:'Un « continent de plastique » dérive dans le Pacifique. Quel enjeu ?', choix:['la pollution des océans','le tourisme','la navigation rapide','la pêche au thon'], sol:0, expl:'Déchets et dégradation des milieux marins.' }
  ];
  B['geo-production-monde'] = [
    { q:'Un smartphone est conçu en Californie, ses puces viennent de Taïwan, il est assemblé en Chine. C’est…', choix:['la division internationale du travail','l’autarcie','le circuit court','l’artisanat'], sol:0, expl:'Chaque étape là où elle coûte le moins.' },
    { q:'Une FTN ferme son usine en France pour produire au Vietnam. C’est…', choix:['une délocalisation','une relocalisation','une nationalisation','une fusion'], sol:0, expl:'Chercher des coûts plus bas.' },
    { q:'Qui organise ces chaînes mondiales de production ?', choix:['les firmes transnationales','les mairies','les syndicats','les écoles'], sol:0, expl:'Les FTN pilotent la production mondiale.' }
  ];
  B['geo-demographie'] = [
    { q:'La planète dépasse 8 milliards d’habitants ; où la croissance est-elle la plus forte ?', choix:['en Afrique et en Asie','en Europe','en Amérique du Nord','en Océanie'], sol:0, expl:'Croissance concentrée dans les Suds.' },
    { q:'Un pays gaspille un tiers de sa nourriture pendant qu’un autre connaît la sous-nutrition. Le défi alimentaire est donc aussi un problème de…', choix:['répartition','production uniquement','goût','conservation uniquement'], sol:0, expl:'Produire ET mieux répartir.' },
    { q:'Cultiver sans épuiser les sols ni la ressource en eau, c’est une agriculture…', saisie:['durable'], expl:'Agriculture durable.' }
  ];
  B['geo-inegalites-developpement'] = [
    { q:'Deux pays ont le même PIB mais l’un a une espérance de vie bien plus faible. Quel indicateur révèle cette différence ?', choix:['l’IDH','le PIB','la superficie','la population'], sol:0, expl:'L’IDH combine santé, éducation, revenu.' },
    { q:'Dans une même métropole, quartiers riches et bidonvilles coexistent. Que montre ce cas ?', choix:['des inégalités À L’INTÉRIEUR des pays','l’égalité mondiale','la fin de la pauvreté','une erreur de carte'], sol:0, expl:'Les écarts existent aussi dans chaque pays.' },
    { q:'Un IDH proche de 1 signifie…', choix:['un développement humain élevé','un pays pauvre','une population jeune','un grand territoire'], sol:0, expl:'Plus proche de 1 = plus développé.' }
  ];
  B['geo-ressources'] = [
    { q:'Une nappe phréatique baisse car on l’utilise plus vite qu’elle ne se recharge. Cette gestion est…', choix:['non durable','durable','équitable','impossible'], sol:0, expl:'On épuise la ressource.' },
    { q:'Plusieurs pays se partagent l’eau du Nil, sources de tensions. Quel enjeu ?', choix:['le partage des ressources','le tourisme fluvial','la pêche sportive','la navigation de plaisance'], sol:0, expl:'L’eau, ressource stratégique disputée.' },
    { q:'Remplacer le pétrole par l’éolien, c’est passer à une énergie…', saisie:['renouvelable'], expl:'Inépuisable à notre échelle.' }
  ];
  B['geo-changement-climatique'] = [
    { q:'Des îles du Pacifique risquent d’être submergées. Quelle conséquence humaine possible ?', choix:['des réfugiés climatiques','plus de tourisme','aucun impact','des récoltes doublées'], sol:0, expl:'Déplacements forcés par la montée des eaux.' },
    { q:'Une ville construit des digues contre la montée de la mer. C’est de l’…', choix:['adaptation','atténuation','urbanisation','irrigation'], sol:0, expl:'Limiter les conséquences déjà en cours.' },
    { q:'Développer les transports en commun pour réduire le CO₂, c’est de l’…', choix:['atténuation','adaptation','industrialisation','importation'], sol:0, expl:'Réduire les causes (émissions).' }
  ];
  B['geo-risques'] = [
    { q:'Un séisme identique fait 10 victimes au Japon et des milliers ailleurs. Pourquoi cette différence ?', choix:['la prévention et les normes de construction','la chance','la taille du pays','la météo'], sol:0, expl:'Préparation et bâtiments parasismiques réduisent la vulnérabilité.' },
    { q:'Interdire de construire en zone inondable, c’est…', choix:['de la prévention','de la réparation','de l’aléa','du hasard'], sol:0, expl:'Réduire les enjeux exposés.' },
    { q:'Une usine chimique explose près d’une ville : quel type de risque ?', choix:['technologique','naturel','climatique','sismique'], sol:0, expl:'Risque industriel (technologique).' }
  ];

  /* ================= EMC : que faire ? qui décide ? ================= */
  B['emc-republique'] = [
    { q:'Sur la façade d’une mairie, on lit trois mots. Lesquels ?', choix:['Liberté, Égalité, Fraternité','Travail, Famille, Patrie','Paix, Pain, Liberté','Unité, Force, Honneur'], sol:0, expl:'La devise républicaine.' },
    { q:'Le 14 juillet, des feux d’artifice partout en France. Que commémore-t-on ?', choix:['la fête nationale (prise de la Bastille)','Noël','la fin de la 2GM','l’armistice de 1918'], sol:0, expl:'Fête nationale française.' },
    { q:'La loi est la même à Lille, Marseille et en Guadeloupe. Quel principe ?', choix:['la République indivisible','le fédéralisme','la décentralisation totale','la coutume locale'], sol:0, expl:'Indivisible : une seule loi pour tous.' }
  ];
  B['emc-laicite'] = [
    { q:'Dans un collège public, un cours traite toutes les religions à égalité, sans en promouvoir aucune. Quel principe ?', choix:['la laïcité','le blasphème','la censure','l’athéisme d’État'], sol:0, expl:'Neutralité de l’école publique.' },
    { q:'Un agent public peut-il afficher ses convictions religieuses pendant son service ?', choix:['non, il doit rester neutre','oui, toujours','oui, s’il est chef','seulement le vendredi'], sol:0, expl:'Neutralité des services publics.' },
    { q:'La laïcité garantit-elle le droit de croire ?', choix:['oui, et aussi de ne pas croire','non, elle l’interdit','seulement à la maison','seulement aux adultes'], sol:0, expl:'Liberté de conscience pour tous.' }
  ];
  B['emc-institutions'] = [
    { q:'Une loi est votée. Qui l’a votée ?', choix:['les députés et sénateurs','le président seul','les juges','les préfets'], sol:0, expl:'Le Parlement (pouvoir législatif).' },
    { q:'Un décret d’application est signé par le gouvernement. Quel pouvoir exerce-t-il ?', choix:['exécutif','législatif','judiciaire','médiatique'], sol:0, expl:'L’exécutif applique les lois.' },
    { q:'Pourquoi séparer les trois pouvoirs ?', choix:['pour éviter les abus et la tyrannie','pour ralentir le pays','par tradition seulement','pour créer des emplois'], sol:0, expl:'Idée de Montesquieu : le pouvoir arrête le pouvoir.' }
  ];
  B['emc-justice'] = [
    { q:'Ton voisin refuse de rembourser une dette : quelle justice saisir ?', choix:['la justice civile','la justice pénale','l’armée','la police des frontières'], sol:0, expl:'Conflit entre particuliers → civil.' },
    { q:'Un accusé attend son procès. Est-il coupable ?', choix:['non : présomption d’innocence','oui, sinon il ne serait pas accusé','à moitié','c’est aux journaux de décider'], sol:0, expl:'Innocent jusqu’au jugement.' },
    { q:'Un mineur de 14 ans commet un vol. La justice privilégie…', choix:['des mesures éducatives','la même peine qu’un adulte','la prison à vie','l’exil'], sol:0, expl:'Justice des mineurs : éduquer d’abord.' }
  ];
  B['emc-defense'] = [
    { q:'Tu viens d’avoir 16 ans. Quelle démarche obligatoire dois-tu faire ?', choix:['te faire recenser à la mairie','passer le permis','voter','signer un contrat militaire'], sol:0, expl:'Recensement à 16 ans, puis JDC.' },
    { q:'L’armée française participe à une mission de paix de l’ONU. Quelle mission de la Défense ?', choix:['contribuer à la sécurité collective internationale','envahir des pays','faire du tourisme','remplacer la police locale'], sol:0, expl:'Maintien de la paix avec l’ONU/OTAN/UE.' },
    { q:'À quoi sert la Journée Défense et Citoyenneté ?', choix:['informer sur la défense et les devoirs du citoyen','apprendre à tirer','recruter de force','passer le bac'], sol:0, expl:'Information et sensibilisation.' }
  ];
  B['emc-engagement'] = [
    { q:'Élire les délégués de classe, c’est déjà pratiquer…', choix:['la démocratie représentative','la monarchie','le tirage au sort','l’anarchie'], sol:0, expl:'On choisit ses représentants.' },
    { q:'Donner 2 h par semaine aux Restos du Cœur, c’est…', choix:['du bénévolat (engagement)','un travail salarié','une punition','un impôt'], sol:0, expl:'Engagement volontaire et gratuit.' },
    { q:'À quel âge peut-on voter en France ?', saisie:['18','18 ans'], expl:'Majorité électorale : 18 ans.' }
  ];
  B['emc-medias'] = [
    { q:'Une photo choc circule sans source ni date. Que fais-tu avant de la partager ?', choix:['vérifier origine, date et recouper les sources','la partager vite','ajouter un emoji','la modifier'], sol:0, expl:'Esprit critique contre les fake news.' },
    { q:'Un journal critique le gouvernement sans être censuré. Quel principe le permet ?', choix:['la liberté de la presse','le monopole d’État','la loi martiale','le secret défense'], sol:0, expl:'Pilier de la démocratie.' },
    { q:'Un influenceur est payé pour vanter un produit sans le dire. Quel problème ?', choix:['publicité cachée : information trompeuse','aucun','trop d’abonnés','mauvaise lumière'], sol:0, expl:'L’info doit être honnête et transparente.' }
  ];
  B['emc-citoyennete-europeenne'] = [
    { q:'Une étudiante française vote aux municipales à Berlin où elle vit. Quel droit utilise-t-elle ?', choix:['un droit de citoyenne européenne','le droit d’asile','un passe-droit','le droit du sol'], sol:0, expl:'Vote municipal dans le pays de résidence UE.' },
    { q:'Erasmus permet d’étudier à Madrid sans visa. Grâce à…', choix:['la libre circulation dans l’UE','un accord bilatéral secret','la ZEE','l’OTAN'], sol:0, expl:'Citoyenneté européenne + libre circulation.' },
    { q:'Perd-on sa nationalité française en devenant « citoyen européen » ?', choix:['non, elle s’y ajoute','oui','seulement à l’étranger','après 10 ans'], sol:0, expl:'La citoyenneté européenne s’ajoute.' }
  ];
  B['emc-egalite-discriminations'] = [
    { q:'Un employeur écarte un CV à cause du nom de famille « étranger ». Que dit la loi ?', choix:['c’est une discrimination, un délit puni','c’est son droit','c’est légal si discret','ce n’est rien'], sol:0, expl:'Discrimination à l’embauche interdite.' },
    { q:'À travail égal, une femme est payée moins qu’un homme. Quel principe est violé ?', choix:['l’égalité femmes-hommes','la liberté d’entreprise','le droit de grève','la laïcité'], sol:0, expl:'Égalité salariale obligatoire.' },
    { q:'Un collège installe une rampe pour un élève en fauteuil. Quel principe applique-t-il ?', choix:['l’égalité d’accès (inclusion)','la charité facultative','le règlement intérieur','la esthétique'], sol:0, expl:'Rendre l’école accessible à tous.' }
  ];
  B['emc-environnement'] = [
    { q:'Les éco-délégués organisent le tri à la cantine. Quel type d’action ?', choix:['un engagement collectif écocitoyen','une punition','une compétition','une obligation légale individuelle'], sol:0, expl:'Agir ensemble pour l’environnement.' },
    { q:'Prendre le vélo plutôt que la voiture pour de courts trajets…', choix:['réduit les émissions de gaz à effet de serre','pollue davantage','ne change rien','est interdit'], sol:0, expl:'Geste individuel à impact réel.' },
    { q:'Le développement durable pense aux besoins de qui ?', choix:['d’aujourd’hui ET des générations futures','d’aujourd’hui seulement','des entreprises seulement','du passé'], sol:0, expl:'Ne pas compromettre l’avenir.' }
  ];
  B['emc-harcelement'] = [
    { q:'Tu vois un camarade moqué chaque jour dans un groupe. Que fais-tu ?', choix:['je le soutiens et j’alerte un adulte','je rigole','je partage les captures','je quitte le groupe sans rien dire'], sol:0, expl:'Le témoin peut faire cesser le harcèlement.' },
    { q:'Une rumeur humiliante circule sur les réseaux à propos d’une élève. C’est du…', choix:['cyberharcèlement','débat','jeu','journalisme'], sol:0, expl:'Violence répétée en ligne : punie par la loi.' },
    { q:'Quel numéro appeler contre le harcèlement entre élèves ?', saisie:['3018'], expl:'Le 3018 (aussi 3020).' }
  ];
  B['emc-libertes'] = [
    { q:'Des lycéens manifestent pacifiquement, déclarés en préfecture. Quelle liberté exercent-ils ?', choix:['la liberté de manifestation','le droit de veto','l’immunité','le droit de grève des élèves'], sol:0, expl:'Liberté collective encadrée par la loi.' },
    { q:'Sur un forum, un internaute appelle à la violence contre un groupe. La liberté d’expression le protège-t-elle ?', choix:['non : l’incitation à la haine est un délit','oui, tout est permis','oui, sur internet','seulement s’il est anonyme'], sol:0, expl:'La loi limite l’expression pour protéger autrui.' },
    { q:'Critiquer une loi dans un journal est…', choix:['permis : liberté d’expression','interdit','réservé aux députés','passible de prison'], sol:0, expl:'On peut critiquer des idées et des décisions.' }
  ];
  B['emc-regle-loi'] = [
    { q:'Le règlement intérieur interdit le téléphone en classe. Pourquoi cette règle ?', choix:['protéger les conditions d’apprentissage de tous','embêter les élèves','vendre plus de montres','tradition ancienne'], sol:0, expl:'Les règles protègent l’intérêt commun.' },
    { q:'Qui vote les lois qui s’appliquent à tous les Français ?', choix:['le Parlement','le principal du collège','chaque commune','les entreprises'], sol:0, expl:'Assemblée nationale + Sénat.' },
    { q:'Un arbitre siffle une faute : à quoi sert la règle dans un jeu ?', choix:['permettre un jeu équitable pour tous','favoriser les forts','ralentir le match','décorer'], sol:0, expl:'Comme la loi : garantir l’équité.' }
  ];
  B['emc-vie-privee'] = [
    { q:'Un ami veut poster une photo de toi sans te demander. Que peux-tu invoquer ?', choix:['ton droit à l’image','le droit d’auteur','la liberté de la presse','rien'], sol:0, expl:'Publier l’image d’autrui exige son accord.' },
    { q:'Une appli gratuite demande accès à tes contacts, ta position et ton micro. Que faire ?', choix:['s’interroger et limiter les autorisations','tout accepter vite','donner aussi son mot de passe','la noter 5 étoiles'], sol:0, expl:'Protéger ses données personnelles.' },
    { q:'Une photo gênante postée à 14 ans peut-elle ressortir à 20 ans ?', choix:['oui : les traces en ligne sont durables','non, tout s’efface','seulement si on la cherche','uniquement sur un vieux téléphone'], sol:0, expl:'L’identité numérique reste.' }
  ];

  /* ================= SVT : observer, interpréter, conclure ================= */
  B['svt-adn-genetique'] = [
    { q:'Un caryotype montre 47 chromosomes avec trois chromosomes 21. Que peut-on conclure ?', choix:['une trisomie 21','un caryotype normal','un garçon','une mutation invisible'], sol:0, expl:'Un chromosome 21 en trop.' },
    { q:'Père A//O et mère O//O : quel groupe sanguin est IMPOSSIBLE pour l’enfant ?', choix:['AB','A','O','aucun'], sol:0, expl:'Personne ne transmet B → AB impossible.' },
    { q:'Sur un caryotype, on lit XY en 23ᵉ paire. Conclusion ?', choix:['c’est un garçon','c’est une fille','c’est un jumeau','erreur de lecture'], sol:0, expl:'XY = garçon, XX = fille.' }
  ];
  B['svt-herdite'] = [
    { q:'Deux parents aux yeux marron ont un enfant aux yeux bleus. Explication ?', choix:['chacun portait un allèle « bleu » récessif','l’enfant a muté','c’est impossible','les yeux changent au soleil'], sol:0, expl:'bleu//bleu transmis par les deux parents.' },
    { q:'Des vrais jumeaux ont le même ADN. Pourquoi ?', choix:['ils viennent d’une même cellule-œuf','ils ont mangé pareil','leurs gamètes étaient identiques par hasard','ils sont nés le même jour'], sol:0, expl:'Une cellule-œuf qui s’est séparée en deux.' },
    { q:'Un bronzage se transmet-il aux enfants ?', choix:['non : caractère acquis, non héréditaire','oui, toujours','oui, si les deux parents bronzent','seulement l’été'], sol:0, expl:'Seuls les caractères génétiques se transmettent.' }
  ];
  B['svt-evolution'] = [
    { q:'Sur troncs noircis par la pollution, les phalènes sombres deviennent majoritaires. Pourquoi ?', choix:['mieux camouflées, elles survivent et se reproduisent plus','elles décident de changer','les claires migrent','la suie les teint'], sol:0, expl:'Sélection naturelle en action.' },
    { q:'Le bras humain, l’aile de chauve-souris et la nageoire de baleine ont les mêmes os. Conclusion ?', choix:['un ancêtre commun','une coïncidence','un même régime alimentaire','le même habitat'], sol:0, expl:'Structure héritée d’un ancêtre commun.' },
    { q:'Des bactéries survivent à un antibiotique et se multiplient. C’est un exemple de…', choix:['sélection naturelle (résistance)','vaccination','digestion','photosynthèse'], sol:0, expl:'Les résistantes sont sélectionnées.' }
  ];
  B['svt-biodiversite'] = [
    { q:'Après destruction d’une haie, les oiseaux disparaissent du champ. Quel niveau de biodiversité est touché d’abord ?', choix:['l’écosystème (le milieu de vie)','les gènes','les océans','aucun'], sol:0, expl:'Détruire l’habitat détruit les espèces qui en vivent.' },
    { q:'Il y a 66 Ma, les dinosaures disparaissent en masse. Comment appelle-t-on cet événement ?', choix:['une crise biologique','une migration','une hibernation','une éclipse'], sol:0, expl:'Extinction massive (crise Crétacé-Paléogène).' },
    { q:'Planter des haies et créer des réserves sert à…', choix:['protéger la biodiversité','augmenter le CO₂','chasser plus','décorer'], sol:0, expl:'Préserver habitats et espèces.' }
  ];
  B['svt-systeme-nerveux'] = [
    { q:'Tu touches une casserole brûlante et retires la main aussitôt. Quel trajet a suivi le message ?', choix:['récepteur → nerf → centre nerveux → nerf → muscle','muscle → cerveau → peau','cœur → main','poumon → cerveau'], sol:0, expl:'Chaîne stimulus → réponse.' },
    { q:'L’alcool ralentit les réflexes d’un conducteur. Sur quoi agit-il ?', choix:['le système nerveux','les os','la digestion seulement','les cheveux'], sol:0, expl:'Il perturbe le traitement nerveux.' },
    { q:'Une lésion de la moelle épinière peut paralyser les jambes. Pourquoi ?', choix:['les messages nerveux ne passent plus','les muscles fondent','le sang ne circule plus','les os cassent'], sol:0, expl:'La moelle transmet les messages moteurs.' }
  ];
  B['svt-immunite'] = [
    { q:'Ton médecin refuse un antibiotique pour ta grippe. Pourquoi ?', choix:['la grippe est virale : antibiotique inefficace','il est pressé','les antibiotiques sont interdits','la grippe est imaginaire'], sol:0, expl:'Antibiotiques = bactéries uniquement.' },
    { q:'Après un vaccin, tu croises le vrai microbe et ne tombes pas malade. Pourquoi ?', choix:['ta mémoire immunitaire réagit vite','le microbe a disparu','tu as de la chance','le vaccin te rend invisible'], sol:0, expl:'Défense rapide grâce à la mémoire.' },
    { q:'Une plaie gonfle et rougit : des cellules « mangent » les microbes. Ce mécanisme s’appelle…', choix:['la phagocytose','la photosynthèse','la fermentation','l’osmose'], sol:0, expl:'Globules blancs phagocytes.' }
  ];
  B['svt-reproduction'] = [
    { q:'À la puberté, la voix d’un garçon mue. Qu’est-ce qui déclenche ces transformations ?', choix:['des hormones','la nourriture','le sport','le climat'], sol:0, expl:'Hormones sexuelles via le sang.' },
    { q:'La pilule contraceptive agit en…', choix:['bloquant l’ovulation par des hormones','tuant les microbes','vitaminant le corps','chauffant le corps'], sol:0, expl:'Contraception hormonale.' },
    { q:'Le cycle menstruel dure environ…', saisie:['28','28 jours'], expl:'~28 jours.' }
  ];
  B['svt-digestion'] = [
    { q:'Dans un tube, de la viande + suc gastrique à 37 °C se liquéfie ; sans suc, rien. Conclusion ?', choix:['les enzymes digèrent les aliments','la chaleur seule digère','la viande fond toujours','le tube est magique'], sol:0, expl:'Expérience type : rôle des enzymes.' },
    { q:'Les nutriments passent dans le sang au niveau de…', choix:['l’intestin grêle','l’estomac','l’œsophage','le gros intestin'], sol:0, expl:'Absorption par les villosités.' },
    { q:'Pourquoi mastiquer aide-t-il la digestion ?', choix:['des morceaux plus petits sont mieux attaqués par les enzymes','les dents chauffent','ça muscle le ventre','ça change le goût'], sol:0, expl:'Plus de surface d’action pour les enzymes.' }
  ];
  B['svt-tectonique'] = [
    { q:'L’Atlantique s’élargit de quelques cm par an. Quelle structure en est responsable ?', choix:['la dorsale océanique','un canal','la Lune','les marées'], sol:0, expl:'Écartement des plaques à la dorsale.' },
    { q:'Les séismes dessinent des lignes sur la carte du monde. Que suivent ces lignes ?', choix:['les limites des plaques','l’équateur','les routes maritimes','les fleuves'], sol:0, expl:'Activité concentrée aux frontières de plaques.' },
    { q:'L’Himalaya s’élève encore. Pourquoi ?', choix:['deux plaques continentales se rapprochent','le vent l’érode','la neige le gonfle','les fleuves le soulèvent'], sol:0, expl:'Collision Inde-Asie.' }
  ];
  B['svt-volcans-seismes'] = [
    { q:'Avant une éruption, des capteurs détectent gonflement et petits séismes. À quoi servent-ils ?', choix:['prévoir et évacuer à temps','empêcher l’éruption','refroidir le magma','faire du tourisme'], sol:0, expl:'Surveillance = prévention.' },
    { q:'Même magnitude : 5 morts au Japon, des milliers ailleurs. Explication ?', choix:['constructions parasismiques et préparation','chance','météo','altitude'], sol:0, expl:'La prévention réduit le risque.' },
    { q:'Une lave très fluide s’écoule doucement : éruption…', saisie:['effusive'], expl:'Effusive (explosive = dangereuse).' }
  ];
  B['svt-respiration'] = [
    { q:'À l’effort, ta fréquence respiratoire augmente. Pourquoi ?', choix:['les muscles réclament plus de dioxygène','les poumons rétrécissent','l’air devient rare','pour transpirer'], sol:0, expl:'Apporter plus d’O₂ au sang et aux muscles.' },
    { q:'Le tabac détruit les alvéoles. Conséquence directe ?', choix:['moins d’échanges gazeux, essoufflement','meilleure endurance','dents blanches','plus d’appétit'], sol:0, expl:'Surface d’échange réduite.' },
    { q:'Dans les alvéoles, le sang rejette quel gaz ?', saisie:['co2','le co2','dioxyde de carbone','le dioxyde de carbone'], expl:'Il rejette le CO₂ et prend l’O₂.' }
  ];
  B['svt-microscope'] = [
    { q:'Oculaire ×10, objectif ×40 : grossissement total ?', saisie:['400','x400','×400'], expl:'10 × 40 = 400.' },
    { q:'Au microscope, une cellule d’oignon montre paroi et noyau. Quelle structure commande la cellule ?', choix:['le noyau','la paroi','l’eau','la lamelle'], sol:0, expl:'Le noyau contient l’information génétique.' },
    { q:'Pour observer, on pose l’échantillon sur…', choix:['une lame, sous une lamelle','le miroir','l’oculaire','la vis'], sol:0, expl:'Préparation entre lame et lamelle.' }
  ];
  B['svt-climat'] = [
    { q:'« Il a neigé hier » relève de… et « les hivers se réchauffent depuis 50 ans » de…', choix:['la météo / le climat','le climat / la météo','la météo / la météo','le climat / le climat'], sol:0, expl:'Court terme = météo ; long terme = climat.' },
    { q:'Les glaciers alpins reculent décennie après décennie. C’est un indice de…', choix:['réchauffement climatique','météo capricieuse','séismes','marées'], sol:0, expl:'Tendance longue = climat.' },
    { q:'Quel gaz issu des énergies fossiles renforce l’effet de serre ?', saisie:['co2','le co2','dioxyde de carbone'], expl:'Le CO₂.' }
  ];
  B['svt-peuplement'] = [
    { q:'Au printemps, un mur nu se couvre de mousses puis d’herbes. Comment sont-elles arrivées ?', choix:['spores et graines transportées (vent, animaux)','générées par la pierre','plantées la nuit','par la pluie seule'], sol:0, expl:'Dispersion et colonisation des milieux.' },
    { q:'Un fraisier produit des stolons qui donnent des plants identiques : reproduction…', saisie:['asexuee','asexuée'], expl:'Asexuée : clones.' },
    { q:'Pissenlit : graines à aigrettes plumeuses. Quel agent les disperse ?', choix:['le vent','les poissons','la lave','la lune'], sol:0, expl:'Anémochorie (vent).' }
  ];
  B['svt-photosynthese'] = [
    { q:'Une plante privée de lumière jaunit et meurt. Pourquoi ?', choix:['sans lumière, pas de photosynthèse','trop d’eau','le noir fait peur','le pot est petit'], sol:0, expl:'La lumière est indispensable à la production de matière.' },
    { q:'Dans une chaîne alimentaire, qui produit la matière initiale ?', choix:['les végétaux verts','les carnivores','les champignons','les bactéries uniquement'], sol:0, expl:'Producteurs primaires.' },
    { q:'Quel gaz la plante absorbe-t-elle pour la photosynthèse ?', saisie:['co2','le co2','dioxyde de carbone'], expl:'CO₂ + eau + lumière → matière + O₂.' }
  ];
  B['svt-circulation'] = [
    { q:'Une artère coronaire se bouche : le cœur souffre. Pourquoi ?', choix:['le muscle cardiaque ne reçoit plus O₂ et nutriments','le sang devient bleu','le cœur rétrécit','les poumons gonflent'], sol:0, expl:'Infarctus : privation d’oxygène.' },
    { q:'Le sang qui part du cœur circule dans…', choix:['les artères','les veines','les nerfs','les alvéoles'], sol:0, expl:'Artères = départ ; veines = retour.' },
    { q:'Quel organe pompe le sang en continu ?', saisie:['coeur','le coeur','cœur','le cœur'], expl:'Le cœur, un muscle.' }
  ];
  B['svt-effort'] = [
    { q:'Pendant un 100 m, ton cœur passe de 70 à 160 battements/min. Pourquoi ?', choix:['livrer plus d’O₂ et de nutriments aux muscles','par peur','pour transpirer','pour digérer'], sol:0, expl:'Adaptation cardiaque à l’effort.' },
    { q:'Après l’effort, l’entraînement régulier permet…', choix:['de récupérer plus vite','de ne plus respirer','d’éviter de boire','de grandir plus'], sol:0, expl:'Le corps s’adapte à l’entraînement.' },
    { q:'Les muscles tirent leur énergie des nutriments et du…', saisie:['dioxygene','dioxygène','o2','l o2'], expl:'Glucose + O₂ → énergie.' }
  ];
  B['svt-alimentation'] = [
    { q:'Un sportif d’endurance a des besoins énergétiques…', choix:['plus élevés qu’une personne sédentaire','plus faibles','identiques','nuls'], sol:0, expl:'Les besoins dépendent de l’activité.' },
    { q:'Repas quotidien : sodas + frites uniquement. Quel risque à long terme ?', choix:['obésité et maladies (diabète…)','aucune conséquence','meilleure vue','os plus solides'], sol:0, expl:'Déséquilibre alimentaire.' },
    { q:'Pourquoi varier les aliments ?', choix:['chaque groupe apporte des nutriments différents','pour la couleur','par tradition','pour manger plus'], sol:0, expl:'Protéines, glucides, lipides, vitamines…' }
  ];
  B['svt-classification'] = [
    { q:'Le dauphin a des poumons et allaite ses petits. C’est donc…', choix:['un mammifère','un poisson','un amphibien','un reptile'], sol:0, expl:'On classe selon les attributs (poumons, mamelles).' },
    { q:'On classe les êtres vivants selon…', choix:['les caractères qu’ils POSSÈDENT','leur utilité','leur beauté','leur taille'], sol:0, expl:'Attributs partagés → groupes emboîtés.' },
    { q:'Mouche et moineau volent. Sont-ils du même groupe ?', choix:['non : le vol est apparu séparément','oui, forcément','oui, s’ils volent pareil','question impossible'], sol:0, expl:'Un caractère semblable ne suffit pas (convergence).' }
  ];
  B['svt-chaines-alimentaires'] = [
    { q:'Complète : herbe → lapin → …', choix:['renard','carotte','champignon','soleil'], sol:0, expl:'Le renard mange le lapin.' },
    { q:'Si les renards disparaissent, que risque-t-il d’arriver aux lapins ?', choix:['leur nombre explose puis l’herbe manque','rien','ils disparaissent aussi immédiatement','ils deviennent carnivores'], sol:0, expl:'Déséquilibre de la chaîne.' },
    { q:'Tout réseau alimentaire commence par…', choix:['les végétaux (producteurs)','les loups','les décomposeurs','les hommes'], sol:0, expl:'La photosynthèse produit la matière initiale.' }
  ];
  B['svt-sol-recyclage'] = [
    { q:'Des feuilles mortes disparaissent en quelques mois en forêt. Qui les a transformées ?', choix:['les décomposeurs (vers, champignons, bactéries)','le vent','la pluie seule','les oiseaux'], sol:0, expl:'Recyclage de la matière organique.' },
    { q:'Le compost transforme les épluchures en terreau. Quel processus naturel imite-t-il ?', choix:['la décomposition','la photosynthèse','l’érosion','la fécondation'], sol:0, expl:'Décomposeurs au travail.' },
    { q:'Les minéraux issus de la décomposition sont réutilisés par…', choix:['les plantes','les nuages','les rochers','le vent'], sol:0, expl:'La boucle de la matière.' }
  ];
  B['svt-squelette-muscles'] = [
    { q:'Quand tu plies le bras, le biceps se contracte. Que fait-il à l’os ?', choix:['il TIRE dessus via le tendon','il le pousse','il le tord','rien'], sol:0, expl:'Un muscle ne fait que tirer.' },
    { q:'Biceps et triceps agissent en sens opposés. On dit qu’ils sont…', choix:['antagonistes','jumeaux','parallèles','inutiles'], sol:0, expl:'Paire de muscles antagonistes.' },
    { q:'Une entorse touche l’articulation. Quels éléments y relient les os entre eux ?', choix:['les ligaments','les veines','les nerfs','les poils'], sol:0, expl:'Ligaments (os-os) ; tendons (muscle-os).' }
  ];
  B['svt-erosion-paysages'] = [
    { q:'Un gouffre s’est creusé dans le calcaire en milliers d’années. Quel agent principal ?', choix:['l’eau','le feu','les animaux','la lumière'], sol:0, expl:'L’eau dissout et creuse le calcaire.' },
    { q:'Les galets d’une rivière sont ronds et lisses. Pourquoi ?', choix:['usés par le transport dans l’eau','nés ronds','polis par les poissons','fondus au soleil'], sol:0, expl:'Usure pendant le transport.' },
    { q:'Le sable se dépose à l’embouchure du fleuve. Cette étape s’appelle…', saisie:['sedimentation','sédimentation','la sedimentation','la sédimentation'], expl:'Altération → transport → sédimentation.' }
  ];
  B['svt-reproduction-plantes'] = [
    { q:'Sans abeilles, la production de pommes chute. Pourquoi ?', choix:['moins de pollinisation → moins de fécondation','les pommes ont peur','le vent s’arrête','les fleurs fanent plus tôt'], sol:0, expl:'Les insectes transportent le pollen.' },
    { q:'Après la fécondation, que devient la fleur ?', choix:['un fruit contenant des graines','une racine','une feuille','un bourgeon'], sol:0, expl:'Fleur → fruit + graines.' },
    { q:'Une cerise mangée par un oiseau, noyau rejeté plus loin : quel intérêt pour le cerisier ?', choix:['disperser ses graines','nourrir l’oiseau par bonté','perdre ses fruits','attirer les insectes'], sol:0, expl:'Dispersion par les animaux.' }
  ];

  /* ================= PHYSIQUE-CHIMIE : situations (thèmes non calculatoires) ================= */
  B['pc-matiere'] = [
    { q:'Le sel (NaCl) dissous dans l’eau conduit le courant. Pourquoi ?', choix:['il libère des ions Na⁺ et Cl⁻','il chauffe l’eau','il colore l’eau','il crée des bulles'], sol:0, expl:'Les ions en solution conduisent le courant.' },
    { q:'Combien d’atomes dans une molécule de CO₂ ?', saisie:['3','trois'], expl:'1 carbone + 2 oxygènes.' },
    { q:'Un atome perd 2 électrons. Quelle est sa charge ?', choix:['2+','2−','neutre','impossible'], sol:0, expl:'Perdre du négatif → ion positif (ex. Ca²⁺).' }
  ];
  B['pc-transformation-chimique'] = [
    { q:'Équilibre : CH₄ + 2 O₂ → CO₂ + ? H₂O', saisie:['2','2 h2o'], expl:'4 H à gauche → 2 H₂O.' },
    { q:'On brûle 12 g de carbone dans 32 g de dioxygène : masse de CO₂ formé ?', saisie:['44','44g','44 g'], expl:'Conservation de la masse : 12+32 = 44 g.' },
    { q:'Faire fondre du beurre est-il une transformation chimique ?', choix:['non : changement d’état (physique)','oui','oui si c’est chaud','à moitié'], sol:0, expl:'Même espèce chimique → physique.' }
  ];
  B['pc-melanges'] = [
    { q:'Eau boueuse : quelle technique pour retirer la boue ?', choix:['filtration','évaporation','aimantation','congélation'], sol:0, expl:'Le filtre retient les particules solides.' },
    { q:'Pour récupérer le sel de l’eau salée, la filtration marche-t-elle ?', choix:['non : le sel est dissous, il faut évaporer','oui parfaitement','oui avec 2 filtres','le sel disparaît'], sol:0, expl:'Un solide dissous passe le filtre.' },
    { q:'Le jus d’orange avec pulpe est un mélange…', saisie:['heterogene','hétérogène'], expl:'On distingue la pulpe : hétérogène.' }
  ];
  B['pc-ph'] = [
    { q:'Un déboucheur affiche pH 13. Il est…', choix:['très basique (corrosif)','acide','neutre','sucré'], sol:0, expl:'pH > 7 = basique ; 13 = danger.' },
    { q:'Tu dilues du vinaigre (pH 3) dans l’eau. Son pH…', choix:['monte vers 7','descend vers 0','ne bouge pas','devient 14'], sol:0, expl:'La dilution rapproche de la neutralité.' },
    { q:'Pour manipuler un acide concentré, il faut…', choix:['gants et lunettes','les mains nues','le goûter','le sentir de près'], sol:0, expl:'Produits corrosifs : protection obligatoire.' }
  ];
  B['pc-lumiere'] = [
    { q:'Tu vois un arbre car…', choix:['il diffuse la lumière du Soleil vers tes yeux','tes yeux émettent des rayons','l’arbre brille la nuit','l’air est lumineux'], sol:0, expl:'Objet diffusant → lumière vers l’œil.' },
    { q:'Éclair vu, tonnerre entendu 3 s après. Pourquoi ce décalage ?', choix:['la lumière est bien plus rapide que le son','le son part avant','l’éclair est plus loin que le bruit','nos oreilles sont lentes'], sol:0, expl:'300 000 km/s contre 340 m/s.' },
    { q:'Un arc-en-ciel montre que la lumière blanche est…', choix:['un mélange de couleurs','une seule couleur','de l’eau colorée','une illusion'], sol:0, expl:'Décomposition en spectre.' }
  ];
  B['pc-son'] = [
    { q:'Sur la Lune (sans air), une explosion serait…', choix:['inaudible','assourdissante','aiguë','en écho'], sol:0, expl:'Pas de milieu matériel → pas de son.' },
    { q:'Écouter très fort au casque chaque jour risque de…', choix:['endommager l’audition de façon irréversible','muscler l’oreille','rien du tout','améliorer l’ouïe'], sol:0, expl:'Les cellules auditives ne se régénèrent pas.' },
    { q:'Une guitare : corde fine tendue → son plus…', choix:['aigu','grave','fort','lent'], sol:0, expl:'Fréquence plus élevée = plus aigu.' }
  ];
  B['pc-etats-matiere'] = [
    { q:'Une bouteille d’eau pleine éclate au congélateur. Pourquoi ?', choix:['la glace occupe plus de volume que l’eau','la masse augmente','le froid casse le plastique','l’eau disparaît'], sol:0, expl:'Volume ↑ à la solidification (masse constante).' },
    { q:'Pendant toute la fusion de la glace, la température…', choix:['reste à 0 °C','monte vite','descend','oscille'], sol:0, expl:'Palier de changement d’état.' },
    { q:'De la buée se forme sur un miroir froid après la douche : quel changement d’état ?', choix:['condensation (gaz → liquide)','fusion','évaporation','solidification'], sol:0, expl:'La vapeur d’eau se liquéfie sur le froid.' }
  ];
  B['pc-solubilite'] = [
    { q:'Tu ajoutes du sucre dans l’eau : au bout d’un moment il ne se dissout plus. La solution est…', saisie:['saturee','saturée'], expl:'Limite de solubilité atteinte.' },
    { q:'Huile + eau : que se passe-t-il ?', choix:['deux couches (non miscibles)','mélange homogène','l’huile se dissout','l’eau s’évapore'], sol:0, expl:'Liquides non miscibles.' },
    { q:'10 g de sel dans 100 g d’eau : masse de la solution ?', saisie:['110','110g','110 g'], expl:'Conservation de la masse.' }
  ];
  B['pc-combustion'] = [
    { q:'On couvre une bougie d’un verre : elle s’éteint. Quel côté du triangle du feu a-t-on supprimé ?', choix:['le comburant (dioxygène)','le combustible','la chaleur','la mèche'], sol:0, expl:'Sans O₂, pas de combustion.' },
    { q:'Un chauffe-eau mal réglé dans une pièce fermée peut produire un gaz mortel :', choix:['le monoxyde de carbone (CO)','le CO₂','l’azote','l’hélium'], sol:0, expl:'Combustion incomplète → CO inodore et toxique.' },
    { q:'Feu de friteuse : faut-il jeter de l’eau ?', choix:['non : couvrir pour étouffer les flammes','oui, beaucoup','oui, glacée','peu importe'], sol:0, expl:'L’eau projette l’huile enflammée ; on prive d’O₂.' }
  ];
  B['pc-conducteurs-circuits'] = [
    { q:'Guirlande où TOUT s’éteint quand une ampoule grille : montage…', choix:['en série','en dérivation','mixte','sans fil'], sol:0, expl:'Une seule boucle.' },
    { q:'Pourquoi les fils électriques sont-ils gainés de plastique ?', choix:['le plastique est isolant : il protège','pour la couleur','pour le poids','pour le prix'], sol:0, expl:'Isolant = sécurité.' },
    { q:'Sèche-cheveux près de la baignoire : quel danger ?', choix:['électrocution (l’eau conduit le courant)','aucun','brûlure du mur','court-circuit sans risque'], sol:0, expl:'Eau + électricité = danger mortel.' }
  ];
  B['pc-lumiere-ombres'] = [
    { q:'Ton ombre est devant toi : où est le Soleil ?', choix:['derrière toi','devant toi','au zénith','sous terre'], sol:0, expl:'L’ombre est à l’opposé de la source.' },
    { q:'Éclipse de Soleil : quel astre cache le Soleil ?', saisie:['la lune','lune'], expl:'La Lune passe entre Soleil et Terre.' },
    { q:'La Lune brille la nuit car…', choix:['elle diffuse la lumière du Soleil','elle brûle','elle est électrique','elle reflète les villes'], sol:0, expl:'Ce n’est pas une source primaire.' }
  ];
  B['pc-air'] = [
    { q:'Ballon pesé dégonflé puis gonflé : la balance monte. Conclusion ?', choix:['l’air a une masse','la balance est cassée','le ballon rétrécit','l’air est vide'], sol:0, expl:'≈1,2 g par litre d’air.' },
    { q:'Tu bouches une seringue et pousses le piston : l’air…', choix:['se comprime','disparaît','devient liquide','explose'], sol:0, expl:'Un gaz est compressible.' },
    { q:'Quel gaz de l’air permet les combustions et la respiration ?', saisie:['dioxygene','dioxygène','o2','le dioxygene','le dioxygène'], expl:'Le dioxygène (21 %).' }
  ];
  B['pc-systeme-solaire'] = [
    { q:'La Lune tourne autour de la Terre sans s’échapper. Quelle force la retient ?', choix:['la gravitation','le magnétisme','le vent solaire','la lumière'], sol:0, expl:'Attraction gravitationnelle.' },
    { q:'Le Soleil est…', choix:['une étoile','une planète','un satellite','une comète'], sol:0, expl:'Il produit sa propre lumière.' },
    { q:'Sur Mars, ton poids serait plus faible mais ta masse…', choix:['identique','plus faible','plus forte','nulle'], sol:0, expl:'La masse ne dépend pas de l’astre.' }
  ];

  /* ================= TECHNOLOGIE : cas concrets ================= */
  B['tech-objet-technique'] = [
    { q:'Tu choisis ce vélo pour sa couleur et sa marque. Quelle fonction te séduit ?', choix:['la fonction d’estime','la fonction d’usage','la fonction technique','le cahier des charges'], sol:0, expl:'Ce qui plaît = estime.' },
    { q:'« Le casque doit peser moins de 400 g et coûter moins de 50 € » : où écrit-on ces exigences ?', choix:['dans le cahier des charges','dans la publicité','sur la facture','dans la notice'], sol:0, expl:'Contraintes du cahier des charges.' },
    { q:'La fonction d’usage d’un réfrigérateur est…', choix:['conserver les aliments au frais','décorer la cuisine','faire du bruit','consommer de l’électricité'], sol:0, expl:'À quoi il sert.' }
  ];
  B['tech-invention-innovation'] = [
    { q:'Le premier téléphone de Bell était une…, le passage au smartphone tactile une suite d’…', choix:['invention / innovations','innovation / inventions','copie / copies','mode / modes'], sol:0, expl:'Créer ≠ améliorer et diffuser.' },
    { q:'Une marque sort chaque année un modèle amélioré. Pourquoi ?', choix:['innover pour rester compétitive','par ennui','pour tout casser','par hasard'], sol:0, expl:'Veille et innovation continue.' },
    { q:'Un objet évolue aussi grâce aux nouveaux…', choix:['matériaux et progrès scientifiques','logos','magasins','emballages'], sol:0, expl:'Matériaux, énergie, besoins.' }
  ];
  B['tech-materiaux'] = [
    { q:'Cadre de vélo : pourquoi choisir l’aluminium plutôt que l’acier ?', choix:['plus léger à résistance suffisante','plus lourd','plus cher toujours','magnétique'], sol:0, expl:'Compromis propriétés/poids.' },
    { q:'Gourde inox vs bouteille plastique jetable : avantage environnemental ?', choix:['réutilisable et durable','plus jolie','plus lourde','plus froide'], sol:0, expl:'Moins de déchets.' },
    { q:'Le manche d’une casserole est en plastique car ce matériau est…', choix:['isolant thermique','conducteur','comestible','aimanté'], sol:0, expl:'Il ne brûle pas la main.' }
  ];
  B['tech-chaine-energie-info'] = [
    { q:'Volet roulant automatique : le capteur de lumière appartient à la chaîne…', choix:['d’information','d’énergie','alimentaire','de montage'], sol:0, expl:'Acquérir l’information.' },
    { q:'Le moteur qui monte le volet appartient à la chaîne…', choix:['d’énergie','d’information','du froid','de secours'], sol:0, expl:'Agir : actionneur.' },
    { q:'Qui décide d’activer le moteur ?', choix:['le programme (traitement)','le voisin','la pluie','le hasard'], sol:0, expl:'L’information pilote l’énergie.' }
  ];
  B['tech-programmation'] = [
    { q:'« SI distance < 10 cm ALORS stopper le robot » : quel élément fournit la distance ?', choix:['un capteur','un moteur','une roue','une pile'], sol:0, expl:'Capteur à ultrasons par ex.' },
    { q:'Ton programme doit répéter 10 fois « avancer-tourner ». Quelle structure utiliser ?', choix:['une boucle','une condition','une variable','un commentaire'], sol:0, expl:'Répéter → boucle.' },
    { q:'Le robot compte les passages : où stocke-t-il ce nombre ?', choix:['dans une variable','dans la roue','dans l’écran','nulle part'], sol:0, expl:'Variable = mémoire.' }
  ];
  B['tech-reseaux'] = [
    { q:'Tu ouvres une page web : ton téléphone joue le rôle de…', choix:['client','serveur','routeur central','antenne'], sol:0, expl:'Le client demande, le serveur fournit.' },
    { q:'Chaque appareil du réseau est identifié par…', choix:['une adresse IP','un prénom','une couleur','un mot de passe wifi'], sol:0, expl:'Adresse IP unique.' },
    { q:'Mot de passe wifi « 1234 » : quel risque ?', choix:['intrusion facile sur le réseau','débit plus lent','écran cassé','surchauffe'], sol:0, expl:'Sécuriser l’accès au réseau.' }
  ];
  B['tech-cao-prototypage'] = [
    { q:'Avant d’imprimer la pièce en 3D, tu la dessines sur un logiciel. Cette étape s’appelle…', choix:['la CAO','le SAV','le marketing','la vente'], sol:0, expl:'Conception Assistée par Ordinateur.' },
    { q:'Le premier exemplaire imprimé casse au test. Que fais-tu ?', choix:['modifier le modèle et refaire un prototype','abandonner','le vendre quand même','le coller'], sol:0, expl:'Boucle conception → test → amélioration.' },
    { q:'À quoi sert la simulation numérique avant fabrication ?', choix:['tester sans matériaux ni risques','remplacer les clients','décorer','imprimer plus vite'], sol:0, expl:'Gagner temps et sécurité.' }
  ];
  B['tech-energies'] = [
    { q:'Panneau solaire sur le toit : quelle conversion d’énergie ?', choix:['lumineuse → électrique','électrique → lumineuse','thermique → chimique','sonore → électrique'], sol:0, expl:'Photovoltaïque.' },
    { q:'Remplacer une centrale à charbon par un parc éolien réduit surtout…', choix:['les émissions de CO₂','le vent','la pluie','le bruit des villes'], sol:0, expl:'Transition énergétique.' },
    { q:'Le pétrole est dit « non renouvelable » car…', choix:['il se forme sur des millions d’années','il coûte cher','il sent fort','il est liquide'], sol:0, expl:'Stock limité à notre échelle.' }
  ];
  B['tech-objets-connectes'] = [
    { q:'Ta montre connectée envoie ton sommeil à une appli. Quelle question dois-tu te poser ?', choix:['où vont mes données personnelles ?','quelle est sa couleur ?','combien pèse-t-elle ?','est-elle étanche ?'], sol:0, expl:'Protection des données.' },
    { q:'Le thermostat baisse le chauffage quand la maison est vide. Avantage ?', choix:['économies d’énergie','plus de bruit','plus de poussière','wifi plus rapide'], sol:0, expl:'Domotique intelligente.' },
    { q:'Un objet connecté mal sécurisé risque…', choix:['d’être piraté','de rétrécir','de rouiller','de chauffer'], sol:0, expl:'Sécurité indispensable.' }
  ];
  B['tech-cycle-de-vie'] = [
    { q:'Quelle étape du cycle de vie d’un jean consomme énormément d’eau ?', choix:['la production (culture du coton)','la vente','l’essayage','le pliage'], sol:0, expl:'Matières premières très gourmandes.' },
    { q:'Réparer son téléphone plutôt qu’en racheter un :', choix:['prolonge la vie du produit et réduit les déchets','coûte toujours plus cher','est interdit','abîme la planète'], sol:0, expl:'Allonger l’usage = moins d’impact.' },
    { q:'Concevoir un objet démontable et recyclable dès le départ, c’est…', saisie:['ecoconception','l ecoconception','éco-conception','ecoconception','l’écoconception','ecoconcevoir'], expl:'L’écoconception.' }
  ];
  B['tech-analyse-besoin'] = [
    { q:'« À qui rend-il service ? Sur quoi agit-il ? Dans quel but ? » Quel outil pose ces questions ?', choix:['la bête à cornes','le diagramme pieuvre','le planning','le devis'], sol:0, expl:'Expression du besoin.' },
    { q:'Le diagramme pieuvre relie l’objet à…', choix:['les éléments de son environnement','ses couleurs','son prix','ses ventes'], sol:0, expl:'Fonctions de service et contraintes.' },
    { q:'Concevoir un cartable : par quoi commencer ?', choix:['analyser le besoin des élèves','choisir le logo','fixer le prix de vente','imprimer la pub'], sol:0, expl:'Le besoin d’abord.' }
  ];
  B['tech-representer-objet'] = [
    { q:'Pour qu’un artisan fabrique ta pièce à l’identique, tu lui donnes…', choix:['un dessin technique coté à l’échelle','un croquis rapide','une photo floue','une description orale'], sol:0, expl:'Précision = dessin technique.' },
    { q:'Plan à l’échelle 1:50 : 2 cm sur le plan = … en vrai', choix:['1 m','50 cm','2 cm','50 m'], sol:0, expl:'2 × 50 = 100 cm = 1 m.' },
    { q:'Pour expliquer le FONCTIONNEMENT d’un vélo, le plus adapté est…', choix:['un schéma','un dessin technique complet','un selfie','un tableau de prix'], sol:0, expl:'Le schéma simplifie et explique.' }
  ];
  B['tech-transmission-mouvement'] = [
    { q:'Sur ton vélo, tu passes sur un petit pignon arrière : la roue tourne…', choix:['plus vite mais plus dur à pédaler','moins vite','pareil','à l’envers'], sol:0, expl:'Rapport de transmission.' },
    { q:'Deux engrenages en contact tournent…', choix:['en sens inverses','dans le même sens','sans lien','par à-coups'], sol:0, expl:'Les dents inversent le sens.' },
    { q:'Pour transmettre un mouvement entre deux axes éloignés, on utilise…', choix:['une courroie ou une chaîne','un aimant','un ressort','une vis seule'], sol:0, expl:'Transmission à distance.' }
  ];
  B['tech-ordinateur'] = [
    { q:'Tu tapes un texte non sauvegardé et l’ordi s’éteint : le texte est perdu. Où était-il ?', choix:['dans la RAM (mémoire vive, temporaire)','sur le disque dur','dans l’écran','dans le clavier'], sol:0, expl:'La RAM s’efface sans alimentation.' },
    { q:'Clavier et souris sont des périphériques…', choix:['d’entrée','de sortie','de stockage','décoratifs'], sol:0, expl:'Ils envoient des données à l’ordinateur.' },
    { q:'Toutes les données d’un ordinateur sont codées en…', choix:['binaire (0 et 1)','lettres','couleurs','sons'], sol:0, expl:'Le langage machine.' }
  ];
  B['tech-capteurs-actionneurs'] = [
    { q:'Lampadaire qui s’allume à la nuit tombée : quel capteur ?', choix:['de luminosité','de température','de son','d’humidité'], sol:0, expl:'Capteur de lumière → programme → lampe.' },
    { q:'Dans un store automatique, le moteur est…', choix:['l’actionneur','le capteur','le programme','l’écran'], sol:0, expl:'Il agit sur le réel.' },
    { q:'Porte de garage : « SI télécommande pressée ALORS ouvrir ». Le bouton joue le rôle de…', choix:['capteur (entrée)','actionneur','moteur','alarme'], sol:0, expl:'Entrée d’information.' }
  ];
})();
