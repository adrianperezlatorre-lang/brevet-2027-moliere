window.FICHES = (window.FICHES || []).concat([
{
  id:'tech-objet-technique', matiereKey:'techno', matiere:'Technologie', niveau:'5e',
  titre:'L’objet technique et ses fonctions',
  motsCles:['objet technique','besoin','fonction d’usage','fonction technique','fonction d’estime','cahier des charges'],
  contenu:{
    objectifs:['Analyser un objet technique.','Distinguer ses différentes fonctions.'],
    notions:[
      {terme:'Besoin', def:'ce à quoi l’objet doit répondre pour l’utilisateur.'},
      {terme:'Fonction d’usage', def:'à quoi sert l’objet.'},
      {terme:'Fonction d’estime', def:'ce qui plaît (esthétique, image).'},
      {terme:'Cahier des charges', def:'document listant les contraintes à respecter.'}
    ],
    essentiel:'<p>Un <b>objet technique</b> répond à un <b>besoin</b>. On l’analyse par sa <b>fonction d’usage</b>, sa <b>fonction d’estime</b> et ses <b>fonctions techniques</b>. Le <b>cahier des charges</b> fixe les contraintes.</p>',
    retenir:'Fonction d’usage = <b>à quoi ça sert</b> ; fonction d’estime = <b>ce qui plaît</b>.'
  }
},
{
  id:'tech-invention-innovation', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Invention, innovation et évolution des objets',
  motsCles:['invention','innovation','évolution technique','veille','progrès','objet','design'],
  contenu:{
    objectifs:['Distinguer invention et innovation.','Comprendre l’évolution des objets techniques.'],
    notions:[
      {terme:'Invention', def:'idée ou objet nouveau qui n’existait pas.'},
      {terme:'Innovation', def:'amélioration d’un objet existant, mise sur le marché.'},
      {terme:'Évolution', def:'les objets se transforment avec les progrès techniques et les besoins.'}
    ],
    essentiel:'<p>Une <b>invention</b> crée quelque chose de nouveau ; l’<b>innovation</b> l’améliore et la diffuse. Les objets techniques <b>évoluent</b> selon les progrès scientifiques et les besoins de la société.</p>',
    exemple:'<p>Le téléphone (invention) → smartphone (innovations successives).</p>',
    retenir:'Invention = <b>nouveau</b> ; innovation = <b>amélioration diffusée</b>.'
  }
},
{
  id:'tech-materiaux', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les matériaux',
  motsCles:['matériau','métal','plastique','recyclage','propriétés','impact environnemental','choix'],
  contenu:{
    objectifs:['Classer les familles de matériaux.','Choisir un matériau selon ses propriétés.'],
    notions:[
      {terme:'Familles', def:'métaux, plastiques, céramiques, matériaux composites, organiques.'},
      {terme:'Propriétés', def:'résistance, légèreté, coût, conductivité, recyclabilité.'},
      {terme:'Impact', def:'extraction, fabrication et recyclage ont un effet sur l’environnement.'}
    ],
    essentiel:'<p>Le choix d’un <b>matériau</b> dépend de ses <b>propriétés</b> et de son <b>coût</b>, mais aussi de son <b>impact environnemental</b>. Le <b>recyclage</b> limite le gaspillage des ressources.</p>',
    retenir:'On choisit un matériau selon <b>propriétés + coût + impact environnemental</b>.'
  }
},
{
  id:'tech-chaine-energie-info', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Chaîne d’énergie et chaîne d’information',
  motsCles:['chaîne d’énergie','chaîne d’information','capteur','actionneur','alimenter','commander','système'],
  contenu:{
    objectifs:['Décrire un système automatisé.','Distinguer chaîne d’énergie et d’information.'],
    notions:[
      {terme:'Chaîne d’énergie', def:'alimenter → distribuer → convertir → transmettre (fait agir).'},
      {terme:'Chaîne d’information', def:'acquérir → traiter → communiquer (capteurs, programme).'},
      {terme:'Capteur / actionneur', def:'le capteur mesure ; l’actionneur agit (moteur, lampe…).'}
    ],
    essentiel:'<p>Un <b>système automatisé</b> associe une <b>chaîne d’énergie</b> (qui agit) et une <b>chaîne d’information</b> (qui commande). Les <b>capteurs</b> renseignent le système ; les <b>actionneurs</b> exécutent.</p>',
    exemple:'<p>Porte automatique : capteur de présence → programme → moteur (actionneur).</p>',
    retenir:'Information = <b>décider</b> ; énergie = <b>agir</b>.'
  }
},
{
  id:'tech-programmation', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'La programmation d’un système',
  motsCles:['programme','algorithme','capteur','condition','boucle','automatisme','organigramme'],
  contenu:{
    objectifs:['Lire un programme de système.','Utiliser conditions et boucles.'],
    notions:[
      {terme:'Programme', def:'suite d’instructions qui pilote un système.'},
      {terme:'Condition', def:'« si… alors… » : le système réagit à un capteur.'},
      {terme:'Boucle', def:'répétition d’actions.'}
    ],
    essentiel:'<p>Un <b>programme</b> pilote un système à partir des <b>capteurs</b>. Grâce aux <b>conditions</b> et aux <b>boucles</b>, le système réagit automatiquement à son environnement.</p>',
    exemple:'<p>« Si température < 19 °C alors allumer le chauffage » : condition sur un capteur.</p>',
    retenir:'Le programme relie <b>capteurs</b> (entrées) et <b>actionneurs</b> (sorties).'
  }
},
{
  id:'tech-reseaux', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les réseaux informatiques et internet',
  motsCles:['réseau','internet','serveur','adresse ip','données','wifi','protocole','partage'],
  contenu:{
    objectifs:['Comprendre le fonctionnement d’un réseau.','Distinguer réseau local et internet.'],
    notions:[
      {terme:'Réseau', def:'ensemble d’appareils connectés qui échangent des données.'},
      {terme:'Internet', def:'réseau mondial reliant des millions de réseaux.'},
      {terme:'Serveur / client', def:'le serveur stocke/fournit les données, le client les demande.'}
    ],
    essentiel:'<p>Un <b>réseau</b> permet à des appareils de <b>partager des données</b>. <b>Internet</b> est le réseau mondial. Les <b>données</b> circulent entre <b>clients</b> et <b>serveurs</b> grâce à des protocoles.</p>',
    retenir:'Internet = <b>réseau de réseaux</b> à l’échelle mondiale.'
  }
},
{
  id:'tech-cao-prototypage', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Conception, CAO et prototypage',
  motsCles:['cao','prototype','maquette','conception','impression 3d','projet','simulation'],
  contenu:{
    objectifs:['Comprendre la démarche de projet.','Connaître la CAO et le prototypage.'],
    notions:[
      {terme:'CAO', def:'Conception Assistée par Ordinateur : dessiner un objet en 3D sur logiciel.'},
      {terme:'Prototype', def:'premier exemplaire réalisé pour tester l’objet.'},
      {terme:'Démarche de projet', def:'besoin → recherche → conception → réalisation → test.'}
    ],
    essentiel:'<p>Pour créer un objet, on suit une <b>démarche de projet</b>. La <b>CAO</b> permet de le modéliser en 3D ; le <b>prototype</b> (ex. impression 3D) sert à <b>tester</b> avant la fabrication.</p>',
    retenir:'Le <b>prototype</b> sert à <b>vérifier</b> que l’objet répond au cahier des charges.'
  }
},
{
  id:'tech-energies', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Les sources d’énergie',
  motsCles:['énergie','renouvelable','fossile','solaire','éolien','électricité','ressources','transition'],
  contenu:{
    objectifs:['Distinguer énergies renouvelables et non renouvelables.','Comprendre les enjeux énergétiques.'],
    notions:[
      {terme:'Énergies fossiles', def:'charbon, pétrole, gaz : non renouvelables, émettent du CO₂.'},
      {terme:'Énergies renouvelables', def:'solaire, éolien, hydraulique : inépuisables à notre échelle.'},
      {terme:'Transition énergétique', def:'passage progressif vers des énergies plus propres.'}
    ],
    essentiel:'<p>Les objets techniques ont besoin d’<b>énergie</b>. Les sources <b>fossiles</b> s’épuisent et polluent ; les <b>renouvelables</b> sont plus durables. D’où l’enjeu de la <b>transition énergétique</b>.</p>',
    retenir:'Renouvelable = <b>inépuisable et plus propre</b> ; fossile = <b>limité et polluant</b>.'
  }
},
{
  id:'tech-objets-connectes', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Les objets connectés et la domotique',
  motsCles:['objet connecté','domotique','capteur','internet','automatisation','maison intelligente','données'],
  contenu:{
    objectifs:['Comprendre le fonctionnement d’un objet connecté.','Identifier les usages et les limites.'],
    notions:[
      {terme:'Objet connecté', def:'objet relié à internet qui échange des données (montre, thermostat…).'},
      {terme:'Domotique', def:'automatisation de la maison (éclairage, chauffage, sécurité).'},
      {terme:'Limites', def:'protection des données personnelles, sécurité, dépendance.'}
    ],
    essentiel:'<p>Un <b>objet connecté</b> capte des informations et les échange via <b>internet</b> pour rendre un service. La <b>domotique</b> applique ce principe à la maison, mais pose des questions de <b>données</b> et de <b>sécurité</b>.</p>',
    retenir:'Objet connecté = <b>capteurs + internet + traitement de données</b>.'
  }
},
{
  id:'tech-cycle-de-vie', matiereKey:'techno', matiere:'Technologie', niveau:'3e',
  titre:'Développement durable et cycle de vie d’un produit',
  motsCles:['cycle de vie','développement durable','recyclage','impact environnemental','écoconception','déchets','ressources'],
  contenu:{
    objectifs:['Décrire le cycle de vie d’un produit.','Comprendre l’écoconception.'],
    notions:[
      {terme:'Cycle de vie', def:'extraction → fabrication → transport → utilisation → fin de vie (recyclage).'},
      {terme:'Impact environnemental', def:'effets de chaque étape sur les ressources et la pollution.'},
      {terme:'Écoconception', def:'concevoir un objet en limitant son impact (matériaux, énergie, recyclage).'}
    ],
    essentiel:'<p>Chaque produit a un <b>cycle de vie</b> qui consomme des ressources et génère des <b>déchets</b>. L’<b>écoconception</b> vise à réduire cet <b>impact</b> à toutes les étapes.</p>',
    retenir:'Penser un objet, c’est aussi penser sa <b>fin de vie</b> (réparation, recyclage).'
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
      {terme:'Diagramme pieuvre', def:'représente les fonctions de service reliant l’objet à son environnement.'},
      {terme:'Contrainte', def:'exigence à respecter (coût, sécurité, dimensions…).'}
    ],
    essentiel:'<p>Avant de concevoir un objet, on <b>analyse le besoin</b>. La <b>bête à cornes</b> précise le but ; le <b>diagramme pieuvre</b> liste les <b>fonctions</b> et les <b>contraintes</b> liées à l’environnement.</p>',
    retenir:'On conçoit un objet à partir d’un <b>besoin</b> précis, pas l’inverse.'
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
      {terme:'Schéma', def:'représentation simplifiée du fonctionnement.'},
      {terme:'Dessin technique', def:'plan précis, à l’échelle, avec cotation (dimensions).'}
    ],
    essentiel:'<p>Pour communiquer une idée d’objet, on utilise le <b>croquis</b> (idée), le <b>schéma</b> (fonctionnement) ou le <b>dessin technique</b> (plan précis à l’<b>échelle</b> avec <b>cotation</b>).</p>',
    retenir:'Une <b>échelle</b> indique le rapport entre le dessin et l’objet réel.'
  }
},
{
  id:'tech-transmission-mouvement', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'La transmission de mouvement',
  motsCles:['engrenage','poulie','courroie','transmission','mouvement','rotation','vitesse','mécanisme'],
  contenu:{
    objectifs:['Décrire des systèmes de transmission.','Comprendre l’effet sur la vitesse.'],
    notions:[
      {terme:'Engrenages', def:'roues dentées qui transmettent la rotation (sens inversé).'},
      {terme:'Poulies-courroie', def:'transmettent le mouvement à distance (même sens).'},
      {terme:'Rapport', def:'selon la taille des roues, on modifie la vitesse et la force.'}
    ],
    essentiel:'<p>Les <b>mécanismes</b> (engrenages, poulies-courroie, chaîne) <b>transmettent</b> un mouvement d’une pièce à une autre. En changeant la taille des roues, on modifie la <b>vitesse</b> de rotation.</p>',
    exemple:'<p>Sur un vélo, la chaîne relie le pédalier à la roue ; changer de plateau change la vitesse.</p>',
    retenir:'Petite roue menant une grande roue → la grande tourne <b>moins vite</b>.'
  }
},
{
  id:'tech-ordinateur', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Le fonctionnement d’un ordinateur',
  motsCles:['ordinateur','processeur','mémoire','entrée','sortie','composant','binaire','stockage'],
  contenu:{
    objectifs:['Identifier les composants d’un ordinateur.','Comprendre entrées et sorties.'],
    notions:[
      {terme:'Processeur (CPU)', def:'exécute les instructions, « cerveau » de l’ordinateur.'},
      {terme:'Mémoire', def:'stocke les données (RAM temporaire, disque pour le stockage durable).'},
      {terme:'Entrées / sorties', def:'entrées (clavier, souris) ; sorties (écran, imprimante).'}
    ],
    essentiel:'<p>Un <b>ordinateur</b> reçoit des données par ses <b>entrées</b>, les traite avec le <b>processeur</b> et la <b>mémoire</b>, puis renvoie un résultat par ses <b>sorties</b>. Les données sont codées en <b>binaire</b> (0 et 1).</p>',
    retenir:'Schéma : <b>entrée → traitement (processeur) → sortie</b>.'
  }
},
{
  id:'tech-capteurs-actionneurs', matiereKey:'techno', matiere:'Technologie', niveau:'4e',
  titre:'Capteurs et actionneurs',
  motsCles:['capteur','actionneur','information','signal','moteur','automatisme','commande','système'],
  contenu:{
    objectifs:['Distinguer capteur et actionneur.','Situer leur rôle dans un système automatisé.'],
    notions:[
      {terme:'Capteur', def:'détecte une information (température, lumière, présence) et l’envoie au système.'},
      {terme:'Actionneur', def:'agit sur le réel (moteur, lampe, buzzer).'},
      {terme:'Programme', def:'traite l’information du capteur pour commander l’actionneur.'}
    ],
    essentiel:'<p>Dans un système automatisé, le <b>capteur</b> fournit une <b>information</b>, le <b>programme</b> décide, et l’<b>actionneur</b> exécute l’action. C’est la base de tout automatisme.</p>',
    exemple:'<p>Éclairage automatique : capteur de luminosité → programme → lampe (actionneur).</p>',
    retenir:'Capteur = <b>il mesure</b> ; actionneur = <b>il agit</b>.'
  }
}
]);
