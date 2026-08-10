window.FICHES = (window.FICHES || []).concat([
{
  id:'tech-objet-technique', matiereKey:'techno', matiere:'Technologie', niveau:'5e',
  titre:'L’objet technique et ses fonctions',
  motsCles:['objet technique','besoin','fonction d’usage','fonction d’estime','fonction technique','cahier des charges'],
  contenu:{
    objectifs:['Analyser un objet technique.','Distinguer ses différentes fonctions.'],
    notions:[
      {terme:'Besoin', def:'ce à quoi l’objet doit répondre pour l’utilisateur.'},
      {terme:'Fonction d’usage', def:'à quoi sert l’objet (son utilité principale).'},
      {terme:'Fonction d’estime', def:'ce qui plaît et donne envie de l’acheter (esthétique, image, marque).'},
      {terme:'Cahier des charges', def:'document qui liste les fonctions et les contraintes à respecter.'}
    ],
    essentiel:'<p>Un <b>objet technique</b> est créé pour répondre à un <b>besoin</b>. On l’analyse par sa <b>fonction d’usage</b>, sa <b>fonction d’estime</b> et ses <b>fonctions techniques</b> (comment il remplit sa mission). Le <b>cahier des charges</b> fixe les contraintes.</p>',
    exemple:'<p>Un parapluie : fonction d’usage = protéger de la pluie ; fonction d’estime = son design, sa couleur.</p>',
    retenir:'Fonction d’usage = <b>à quoi ça sert</b> ; fonction d’estime = <b>ce qui plaît</b>. Le cahier des charges liste les contraintes.'
  }
},
{
  id:'tech-invention-innovation', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Invention, innovation et évolution des objets',
  motsCles:['invention','innovation','évolution technique','progrès','veille','design','marché'],
  contenu:{
    objectifs:['Distinguer invention et innovation.','Comprendre l’évolution des objets techniques.'],
    notions:[
      {terme:'Invention', def:'création d’une idée ou d’un objet nouveau qui n’existait pas.'},
      {terme:'Innovation', def:'amélioration d’un objet existant, mise sur le marché et adoptée par les utilisateurs.'},
      {terme:'Évolution', def:'les objets se transforment au fil du temps selon les progrès techniques et les besoins.'}
    ],
    essentiel:'<p>Une <b>invention</b> crée quelque chose de nouveau ; l’<b>innovation</b> l’améliore et la diffuse. Les objets techniques <b>évoluent</b> avec les progrès scientifiques, les nouveaux matériaux et les besoins de la société.</p>',
    exemple:'<p>Le téléphone (invention) → téléphone portable → smartphone (innovations successives).</p>',
    retenir:'Invention = <b>nouveau</b> ; innovation = <b>amélioration diffusée</b> sur le marché.'
  }
},
{
  id:'tech-materiaux', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les matériaux',
  motsCles:['matériau','métal','plastique','composite','recyclage','propriétés','impact environnemental','choix'],
  contenu:{
    objectifs:['Classer les familles de matériaux.','Choisir un matériau selon ses propriétés.'],
    notions:[
      {terme:'Familles', def:'métaux, plastiques (polymères), céramiques/verres, matériaux composites, matériaux organiques (bois).'},
      {terme:'Propriétés', def:'résistance, dureté, légèreté, coût, conductivité, recyclabilité.'},
      {terme:'Impact environnemental', def:'l’extraction, la fabrication et le recyclage ont un effet sur l’environnement.'}
    ],
    essentiel:'<p>Le choix d’un <b>matériau</b> dépend de ses <b>propriétés</b> et de son <b>coût</b>, mais aussi de son <b>impact environnemental</b>. Le <b>recyclage</b> permet de limiter le gaspillage des ressources.</p>',
    exemple:'<p>Pour un vélo, l’aluminium est choisi pour sa légèreté et sa résistance à un coût raisonnable.</p>',
    retenir:'On choisit un matériau selon <b>propriétés + coût + impact environnemental</b>.'
  }
},
{
  id:'tech-chaine-energie-info', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Chaîne d’énergie et chaîne d’information',
  motsCles:['chaîne d’énergie','chaîne d’information','capteur','actionneur','alimenter','commander','système automatisé'],
  contenu:{
    objectifs:['Décrire un système automatisé.','Distinguer chaîne d’énergie et chaîne d’information.'],
    notions:[
      {terme:'Chaîne d’énergie', def:'alimenter → distribuer → convertir → transmettre : elle fait AGIR le système.'},
      {terme:'Chaîne d’information', def:'acquérir → traiter → communiquer : elle fait DÉCIDER le système.'},
      {terme:'Capteur / actionneur', def:'le capteur mesure une information ; l’actionneur agit (moteur, lampe…).'}
    ],
    essentiel:'<p>Un <b>système automatisé</b> associe une <b>chaîne d’énergie</b> (qui agit) et une <b>chaîne d’information</b> (qui commande). Les <b>capteurs</b> renseignent le système, le programme décide, les <b>actionneurs</b> exécutent.</p>',
    exemple:'<p>Porte automatique : capteur de présence (info) → programme → moteur/actionneur (énergie) qui ouvre la porte.</p>',
    retenir:'Chaîne d’information = <b>décider</b> ; chaîne d’énergie = <b>agir</b>.'
  }
},
{
  id:'tech-programmation', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'La programmation d’un système',
  motsCles:['programme','algorithme','capteur','condition','boucle','automatisme','organigramme','actionneur'],
  contenu:{
    objectifs:['Lire un programme de système.','Utiliser conditions et boucles.'],
    notions:[
      {terme:'Programme', def:'suite d’instructions qui pilote un système automatisé.'},
      {terme:'Condition', def:'« si … alors … sinon » : le système réagit à l’information d’un capteur.'},
      {terme:'Boucle', def:'répétition d’une série d’actions.'}
    ],
    essentiel:'<p>Un <b>programme</b> pilote un système à partir des informations des <b>capteurs</b>. Grâce aux <b>conditions</b> et aux <b>boucles</b>, le système <b>réagit automatiquement</b> à son environnement en commandant des actionneurs.</p>',
    exemple:'<p>« Si température < 19 °C alors allumer le chauffage, sinon l’éteindre » : condition portant sur un capteur de température.</p>',
    retenir:'Le programme relie <b>capteurs</b> (entrées) et <b>actionneurs</b> (sorties) grâce à des conditions et des boucles.'
  }
},
{
  id:'tech-reseaux', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les réseaux informatiques et internet',
  motsCles:['réseau','internet','serveur','client','adresse IP','données','wifi','protocole','partage'],
  contenu:{
    objectifs:['Comprendre le fonctionnement d’un réseau.','Distinguer réseau local et internet.'],
    notions:[
      {terme:'Réseau', def:'ensemble d’appareils connectés qui échangent des données.'},
      {terme:'Internet', def:'réseau mondial reliant des millions de réseaux entre eux.'},
      {terme:'Serveur / client', def:'le serveur stocke et fournit les données ; le client (ton appareil) les demande.'}
    ],
    essentiel:'<p>Un <b>réseau</b> permet à des appareils de <b>partager des données</b>. <b>Internet</b> est le réseau mondial. Les <b>données</b> circulent entre <b>clients</b> et <b>serveurs</b> grâce à des <b>protocoles</b>, chaque appareil ayant une adresse (IP).</p>',
    retenir:'Internet = <b>réseau de réseaux</b> mondial. Modèle : le <b>client</b> demande, le <b>serveur</b> fournit.'
  }
},
{
  id:'tech-cao-prototypage', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Conception, CAO et prototypage',
  motsCles:['CAO','prototype','maquette','conception','impression 3D','projet','simulation','test'],
  contenu:{
    objectifs:['Comprendre la démarche de projet.','Connaître la CAO et le prototypage.'],
    notions:[
      {terme:'CAO', def:'Conception Assistée par Ordinateur : concevoir un objet en 3D sur un logiciel.'},
      {terme:'Prototype', def:'premier exemplaire réalisé pour tester l’objet avant sa fabrication en série.'},
      {terme:'Démarche de projet', def:'besoin → recherche d’idées → conception → réalisation → tests.'}
    ],
    essentiel:'<p>Pour créer un objet, on suit une <b>démarche de projet</b>. La <b>CAO</b> permet de le modéliser en 3D et de le <b>simuler</b> ; le <b>prototype</b> (souvent par impression 3D) sert à <b>tester</b> avant la fabrication.</p>',
    retenir:'Le <b>prototype</b> sert à <b>vérifier</b> que l’objet répond bien au cahier des charges.'
  }
},
{
  id:'tech-energies', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les sources d’énergie',
  motsCles:['énergie','renouvelable','fossile','solaire','éolien','électricité','ressources','transition énergétique'],
  contenu:{
    objectifs:['Distinguer énergies renouvelables et non renouvelables.','Comprendre les enjeux énergétiques.'],
    notions:[
      {terme:'Énergies fossiles', def:'charbon, pétrole, gaz : non renouvelables (elles s’épuisent) et émettrices de CO₂.'},
      {terme:'Énergies renouvelables', def:'solaire, éolien, hydraulique, biomasse : inépuisables à notre échelle et peu polluantes.'},
      {terme:'Transition énergétique', def:'passage progressif des énergies fossiles vers des énergies plus propres.'}
    ],
    essentiel:'<p>Les objets techniques ont besoin d’<b>énergie</b>. Les sources <b>fossiles</b> s’épuisent et polluent ; les <b>renouvelables</b> sont plus durables. D’où l’enjeu de la <b>transition énergétique</b>.</p>',
    retenir:'Renouvelable = <b>inépuisable et plus propre</b> ; fossile = <b>limité et polluant</b>.'
  }
},
{
  id:'tech-objets-connectes', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Les objets connectés et la domotique',
  motsCles:['objet connecté','domotique','capteur','internet','automatisation','données personnelles','sécurité'],
  contenu:{
    objectifs:['Comprendre le fonctionnement d’un objet connecté.','Identifier les usages et les limites.'],
    notions:[
      {terme:'Objet connecté', def:'objet relié à internet qui capte et échange des données (montre, thermostat, enceinte).'},
      {terme:'Domotique', def:'automatisation de la maison (éclairage, chauffage, sécurité, volets).'},
      {terme:'Limites', def:'protection des données personnelles, sécurité (piratage), dépendance.'}
    ],
    essentiel:'<p>Un <b>objet connecté</b> capte des informations et les échange via <b>internet</b> pour rendre un service. La <b>domotique</b> applique ce principe à la maison, mais pose des questions de <b>données personnelles</b> et de <b>sécurité</b>.</p>',
    retenir:'Objet connecté = <b>capteurs + internet + traitement de données</b>. Attention à la protection des données.'
  }
},
{
  id:'tech-cycle-de-vie', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Développement durable et cycle de vie d’un produit',
  motsCles:['cycle de vie','développement durable','recyclage','impact environnemental','écoconception','déchets','ressources'],
  contenu:{
    objectifs:['Décrire le cycle de vie d’un produit.','Comprendre l’écoconception.'],
    notions:[
      {terme:'Cycle de vie', def:'extraction des matières → fabrication → transport → utilisation → fin de vie (recyclage ou déchet).'},
      {terme:'Impact environnemental', def:'effets de chaque étape sur les ressources, l’énergie et la pollution.'},
      {terme:'Écoconception', def:'concevoir un objet en limitant son impact (matériaux durables, réparabilité, recyclage).'}
    ],
    essentiel:'<p>Chaque produit a un <b>cycle de vie</b> qui consomme des ressources et génère des <b>déchets</b>. L’<b>écoconception</b> vise à réduire cet <b>impact</b> à toutes les étapes, de la fabrication à la fin de vie.</p>',
    retenir:'Concevoir un objet, c’est aussi penser sa <b>fin de vie</b> (réparation, recyclage) pour limiter les déchets.'
  }
},
{
  id:'tech-analyse-besoin', matiereKey:'techno', matiere:'Technologie', niveau:'5e',
  titre:'Analyser le besoin (bête à cornes, pieuvre)',
  motsCles:['besoin','bête à cornes','diagramme pieuvre','fonction','contrainte','utilisateur','analyse fonctionnelle'],
  contenu:{
    objectifs:['Identifier le besoin auquel répond un objet.','Utiliser les outils d’analyse fonctionnelle.'],
    notions:[
      {terme:'Bête à cornes', def:'outil qui exprime le besoin : à qui l’objet rend service, sur quoi il agit, dans quel but.'},
      {terme:'Diagramme pieuvre', def:'représente les fonctions de service qui relient l’objet à son environnement.'},
      {terme:'Contrainte', def:'exigence à respecter (coût, sécurité, dimensions, environnement).'}
    ],
    essentiel:'<p>Avant de concevoir un objet, on <b>analyse le besoin</b>. La <b>bête à cornes</b> précise à qui et à quoi il sert ; le <b>diagramme pieuvre</b> liste les <b>fonctions</b> et les <b>contraintes</b> liées à l’environnement de l’objet.</p>',
    retenir:'On conçoit un objet à partir d’un <b>besoin</b> précis, pas l’inverse. La bête à cornes répond à « pour qui ? sur quoi ? pourquoi ? ».'
  }
},
{
  id:'tech-representer-objet', matiereKey:'techno', matiere:'Technologie', niveau:'5e',
  titre:'Représenter un objet (croquis, schéma, dessin technique)',
  motsCles:['croquis','schéma','dessin technique','cotation','échelle','représentation','plan','vues'],
  contenu:{
    objectifs:['Distinguer les modes de représentation.','Comprendre échelle et cotation.'],
    notions:[
      {terme:'Croquis', def:'dessin rapide à main levée pour exprimer une idée.'},
      {terme:'Schéma', def:'représentation simplifiée qui explique le fonctionnement.'},
      {terme:'Dessin technique', def:'plan précis, à l’échelle, avec cotation (dimensions exactes).'}
    ],
    essentiel:'<p>Pour communiquer une idée d’objet, on utilise le <b>croquis</b> (idée), le <b>schéma</b> (fonctionnement) ou le <b>dessin technique</b> (plan précis à l’<b>échelle</b> avec <b>cotation</b>).</p>',
    exemple:'<p>Une échelle 1:10 signifie que 1 cm sur le plan représente 10 cm sur l’objet réel.</p>',
    retenir:'Une <b>échelle</b> indique le rapport entre le dessin et l’objet réel ; la <b>cotation</b> donne les dimensions.'
  }
},
{
  id:'tech-transmission-mouvement', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'La transmission de mouvement',
  motsCles:['engrenage','poulie','courroie','transmission','mouvement','rotation','vitesse','mécanisme'],
  contenu:{
    objectifs:['Décrire des systèmes de transmission.','Comprendre l’effet sur la vitesse.'],
    notions:[
      {terme:'Engrenages', def:'roues dentées qui transmettent la rotation (en inversant le sens).'},
      {terme:'Poulies-courroie', def:'transmettent le mouvement à distance, dans le même sens.'},
      {terme:'Rapport de transmission', def:'selon la taille des roues, on modifie la vitesse et la force.'}
    ],
    essentiel:'<p>Les <b>mécanismes</b> (engrenages, poulies-courroie, chaîne) <b>transmettent</b> un mouvement d’une pièce à une autre. En changeant la taille des roues, on modifie la <b>vitesse</b> de rotation et la force.</p>',
    exemple:'<p>Sur un vélo, la chaîne relie le pédalier à la roue ; changer de plateau/pignon change la vitesse et l’effort.</p>',
    retenir:'Une petite roue qui entraîne une grande roue → la grande tourne <b>moins vite</b> mais avec plus de force.'
  }
},
{
  id:'tech-ordinateur', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Le fonctionnement d’un ordinateur',
  motsCles:['ordinateur','processeur','mémoire','entrée','sortie','binaire','stockage','composant'],
  contenu:{
    objectifs:['Identifier les composants d’un ordinateur.','Comprendre entrées, traitement et sorties.'],
    notions:[
      {terme:'Processeur (CPU)', def:'exécute les instructions ; c’est le « cerveau » de l’ordinateur.'},
      {terme:'Mémoire', def:'la RAM stocke les données en cours d’utilisation ; le disque (SSD/HDD) stocke durablement.'},
      {terme:'Entrées / sorties', def:'entrées (clavier, souris, micro) ; sorties (écran, imprimante, haut-parleurs).'}
    ],
    essentiel:'<p>Un <b>ordinateur</b> reçoit des données par ses <b>entrées</b>, les <b>traite</b> avec le <b>processeur</b> et la <b>mémoire</b>, puis renvoie un résultat par ses <b>sorties</b>. Les données sont codées en <b>binaire</b> (0 et 1).</p>',
    retenir:'Schéma d’un système informatique : <b>entrée → traitement (processeur) → sortie</b>. Données codées en <b>binaire</b>.'
  }
},
{
  id:'tech-capteurs-actionneurs', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Capteurs et actionneurs',
  motsCles:['capteur','actionneur','information','signal','moteur','automatisme','commande','entrée','sortie'],
  contenu:{
    objectifs:['Distinguer capteur et actionneur.','Situer leur rôle dans un système automatisé.'],
    notions:[
      {terme:'Capteur', def:'détecte une information (température, lumière, présence, distance) et l’envoie au système. C’est une entrée.'},
      {terme:'Actionneur', def:'agit sur le réel (moteur, lampe, buzzer, vérin). C’est une sortie.'},
      {terme:'Programme', def:'traite l’information du capteur pour commander l’actionneur.'}
    ],
    essentiel:'<p>Dans un système automatisé, le <b>capteur</b> fournit une <b>information</b> (entrée), le <b>programme</b> décide, et l’<b>actionneur</b> exécute l’action (sortie). C’est la base de tout <b>automatisme</b>.</p>',
    exemple:'<p>Éclairage automatique : capteur de luminosité → programme → lampe (actionneur).</p>',
    retenir:'Capteur = <b>il mesure</b> (entrée) ; actionneur = <b>il agit</b> (sortie).'
  }
}
]);
