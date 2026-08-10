window.FICHES = (window.FICHES || []).concat([
{
  id:'fr-phrase-complexe', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'La phrase complexe et la subordination',
  motsCles:['proposition','subordonnée','juxtaposition','coordination','conjonction','relative','complexe'],
  contenu:{
    objectifs:['Distinguer phrase simple et complexe.','Reconnaître juxtaposition, coordination, subordination.'],
    notions:[
      {terme:'Phrase simple', def:'une seule proposition (un seul verbe conjugué).'},
      {terme:'Phrase complexe', def:'plusieurs propositions (plusieurs verbes conjugués).'},
      {terme:'Juxtaposition', def:'propositions séparées par une virgule, un point-virgule…'},
      {terme:'Coordination', def:'reliées par « mais, ou, et, donc, or, ni, car ».'},
      {terme:'Subordination', def:'une proposition dépend d’une autre (mot subordonnant : que, qui, quand, parce que…).'}
    ],
    essentiel:'<p>On compte les <b>verbes conjugués</b> : autant de propositions. Elles peuvent être <b>juxtaposées</b>, <b>coordonnées</b> (même niveau) ou <b>subordonnées</b> (l’une dépend de l’autre).</p>',
    exemple:'<p>« Je révise <b>parce que</b> le brevet approche » → subordonnée conjonctive (cause).</p>',
    retenir:'Subordonnée = elle <b>ne peut pas exister seule</b> ; elle complète la principale.'
  }
},
{
  id:'fr-classes-grammaticales', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Les classes grammaticales (natures de mots)',
  motsCles:['nom','verbe','adjectif','déterminant','pronom','adverbe','préposition','conjonction','nature'],
  contenu:{
    objectifs:['Identifier la nature (classe) de chaque mot.','Ne pas confondre nature et fonction.'],
    notions:[
      {terme:'Classes variables', def:'nom, déterminant, adjectif, pronom, verbe (ils changent de forme).'},
      {terme:'Classes invariables', def:'adverbe, préposition, conjonction, interjection.'},
      {terme:'Nature ≠ fonction', def:'la nature est fixe (dictionnaire) ; la fonction dépend de la phrase.'}
    ],
    essentiel:'<p>Chaque mot appartient à une <b>classe grammaticale</b> (sa nature). Certaines sont <b>variables</b>, d’autres <b>invariables</b>. C’est la base pour analyser une phrase.</p>',
    exemple:'<p>« Le petit chat dort tranquillement » : <b>Le</b> (dét.), <b>petit</b> (adj.), <b>chat</b> (nom), <b>dort</b> (verbe), <b>tranquillement</b> (adverbe).</p>',
    retenir:'La <b>nature</b> répond à « qu’est-ce que c’est ? », la <b>fonction</b> à « à quoi ça sert ? ».'
  }
},
{
  id:'fr-fonctions', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les fonctions dans la phrase',
  motsCles:['sujet','cod','coi','attribut','complément circonstanciel','épithète','fonction'],
  contenu:{
    objectifs:['Identifier les fonctions liées au verbe.','Distinguer COD, COI et compléments circonstanciels.'],
    notions:[
      {terme:'Sujet', def:'fait l’action (qui est-ce qui… ?).'},
      {terme:'COD', def:'complète le verbe sans préposition (qui ? quoi ?).'},
      {terme:'COI', def:'complète le verbe avec préposition (à qui ? de quoi ?).'},
      {terme:'Compl. circonstanciel', def:'temps, lieu, manière, cause… (déplaçable, supprimable).'}
    ],
    essentiel:'<p>La <b>fonction</b> décrit le <b>rôle</b> d’un mot dans la phrase. Les compléments <b>essentiels</b> (COD/COI) ne se déplacent pas ; les <b>circonstanciels</b> sont mobiles et souvent supprimables.</p>',
    exemple:'<p>« Hier, Léa offre un livre à son frère. » → CCT (hier), sujet (Léa), COD (un livre), COI (à son frère).</p>',
    retenir:'COD/COI = <b>on ne peut pas les enlever</b> ; CC = déplaçable et supprimable.'
  }
},
{
  id:'fr-conjugaison', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les temps de l’indicatif',
  motsCles:['présent','imparfait','passé simple','passé composé','futur','plus-que-parfait','conjugaison','indicatif'],
  contenu:{
    objectifs:['Employer les temps du récit.','Distinguer imparfait et passé simple.'],
    notions:[
      {terme:'Présent', def:'action actuelle, vérité générale, présent de narration.'},
      {terme:'Imparfait', def:'arrière-plan, description, habitude, action qui dure.'},
      {terme:'Passé simple', def:'actions de premier plan, brèves, successives (récit).'},
      {terme:'Passé composé', def:'action passée achevée, lien avec le présent (à l’oral, dans les lettres).'}
    ],
    essentiel:'<p>Dans un <b>récit au passé</b>, l’<b>imparfait</b> plante le décor (ça durait) et le <b>passé simple</b> raconte les actions (soudain…). Le <b>plus-que-parfait</b> exprime une action antérieure.</p>',
    exemple:'<p>« Il <b>faisait</b> nuit (imparfait) quand un cri <b>retentit</b> (passé simple). »</p>',
    retenir:'Imparfait = <b>décor / durée</b> ; passé simple = <b>action soudaine</b>.'
  }
},
{
  id:'fr-accords', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Orthographe : accords et homophones',
  motsCles:['accord','participe passé','homophone','a/à','et/est','son/sont','ces/ses','orthographe','dictée'],
  contenu:{
    objectifs:['Accorder le participe passé.','Ne plus confondre les homophones courants.'],
    notions:[
      {terme:'Accord avec être', def:'le participe passé s’accorde avec le sujet (elle est partie).'},
      {terme:'Accord avec avoir', def:'accord avec le COD seulement s’il est placé avant (les fleurs que j’ai cueillies).'},
      {terme:'Homophones', def:'a/à, et/est, son/sont, on/ont, ces/ses, ou/où, ce/se.'}
    ],
    essentiel:'<p>Les fautes de la <b>dictée</b> viennent souvent des <b>accords</b> et des <b>homophones</b>. Astuce : remplace pour tester (a→avait ; est→était ; ont→avaient).</p>',
    exemple:'<p>« Il <b>a</b> (avait) mangé » ≠ « Il va <b>à</b> l’école ». « Elles <b>sont</b> (étaient) prêtes » ≠ « <b>son</b> sac ».</p>',
    retenir:'En cas de doute : essaie de <b>remplacer par l’imparfait</b> pour distinguer les homophones.'
  }
},
{
  id:'fr-figures-style', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les figures de style',
  motsCles:['comparaison','métaphore','personnification','hyperbole','antithèse','énumération','image'],
  contenu:{
    objectifs:['Identifier les principales figures de style.','Analyser leur effet dans un texte.'],
    notions:[
      {terme:'Comparaison', def:'rapproche deux éléments avec un outil (comme, tel, pareil à…).'},
      {terme:'Métaphore', def:'comparaison sans outil de comparaison.'},
      {terme:'Personnification', def:'donne des traits humains à une chose ou un animal.'},
      {terme:'Hyperbole', def:'exagération pour marquer les esprits.'},
      {terme:'Antithèse', def:'oppose deux termes ou idées.'}
    ],
    essentiel:'<p>Les figures de style créent des <b>images</b> et des <b>effets</b> (insister, embellir, opposer…). Il faut savoir les <b>nommer</b> et surtout expliquer <b>l’effet produit</b>.</p>',
    exemple:'<p>« Cet homme est un lion » → <b>métaphore</b> (courage). « Fort comme un lion » → <b>comparaison</b>.</p>',
    retenir:'Toujours associer la figure à son <b>effet</b> sur le lecteur.'
  }
},
{
  id:'fr-schema-narratif', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le schéma narratif',
  motsCles:['situation initiale','élément perturbateur','péripéties','dénouement','situation finale','récit'],
  contenu:{
    objectifs:['Repérer les étapes d’un récit.','Résumer une histoire de façon structurée.'],
    notions:[
      {terme:'Situation initiale', def:'l’équilibre de départ, le décor et les personnages.'},
      {terme:'Élément perturbateur', def:'l’événement qui déclenche l’histoire.'},
      {terme:'Péripéties', def:'les actions et rebondissements.'},
      {terme:'Dénouement', def:'l’événement qui résout le problème.'},
      {terme:'Situation finale', def:'le nouvel équilibre.'}
    ],
    essentiel:'<p>La plupart des récits suivent ces <b>5 étapes</b>. Elles aident à <b>comprendre</b> et à <b>rédiger</b> une histoire cohérente.</p>',
    exemple:'<p>Conte : un roi heureux (initiale) → un dragon attaque (perturbateur) → combats (péripéties) → le héros gagne (dénouement) → paix (finale).</p>',
    retenir:'L’élément perturbateur commence souvent par « <b>soudain</b> », « <b>un jour</b> »…'
  }
},
{
  id:'fr-discours-rapporte', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les paroles rapportées (discours direct/indirect)',
  motsCles:['discours direct','discours indirect','ponctuation du dialogue','verbe de parole','style'],
  contenu:{
    objectifs:['Distinguer discours direct et indirect.','Transposer de l’un à l’autre.'],
    notions:[
      {terme:'Discours direct', def:'les paroles telles quelles, avec guillemets/tirets et verbe de parole.'},
      {terme:'Discours indirect', def:'les paroles intégrées dans le récit via une subordonnée (« il dit que… »).'},
      {terme:'Transposition', def:'changement des pronoms, temps et marques (« je »→« il », présent→imparfait…).'}
    ],
    essentiel:'<p>Le <b>discours direct</b> rend le dialogue vivant ; le <b>discours indirect</b> l’intègre au récit. Passer de l’un à l’autre demande de modifier <b>pronoms</b> et <b>temps</b>.</p>',
    exemple:'<p>Direct : Il dit : « <b>Je</b> pars demain. » → Indirect : Il dit qu’<b>il</b> partait le lendemain.</p>',
    retenir:'Discours direct = <b>ponctuation forte</b> (guillemets, tirets) ; indirect = <b>« que » + subordonnée</b>.'
  }
},
{
  id:'fr-poesie', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'La poésie et la versification',
  motsCles:['vers','strophe','rime','alexandrin','octosyllabe','sonnet','poésie','syllabe'],
  contenu:{
    objectifs:['Compter les syllabes d’un vers.','Reconnaître les types de strophes et de rimes.'],
    notions:[
      {terme:'Vers', def:'une ligne de poème ; on compte les syllabes.'},
      {terme:'Mètres', def:'8 syllabes = octosyllabe ; 10 = décasyllabe ; 12 = alexandrin.'},
      {terme:'Rimes', def:'plates (AABB), croisées (ABAB), embrassées (ABBA).'},
      {terme:'Strophe', def:'groupe de vers (tercet = 3, quatrain = 4).'}
    ],
    essentiel:'<p>La poésie joue sur les <b>sons</b> et le <b>rythme</b>. On compte les <b>syllabes</b> (attention au « e » muet et aux diérèses) et on analyse les <b>rimes</b> et leur disposition.</p>',
    exemple:'<p>« Un sonnet » = 2 quatrains + 2 tercets, souvent en <b>alexandrins</b>.</p>',
    retenir:'Le « e » en fin de vers ne se compte pas ; entre deux consonnes prononcées, il compte.'
  }
},
{
  id:'fr-theatre', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Le théâtre',
  motsCles:['réplique','tirade','monologue','didascalie','acte','scène','comédie','tragédie'],
  contenu:{
    objectifs:['Connaître le vocabulaire du théâtre.','Distinguer comédie et tragédie.'],
    notions:[
      {terme:'Didascalie', def:'indication scénique (décor, geste, ton) écrite par l’auteur.'},
      {terme:'Réplique / tirade', def:'ce que dit un personnage ; longue réplique = tirade.'},
      {terme:'Monologue', def:'un personnage seul se parle à lui-même.'},
      {terme:'Double énonciation', def:'les paroles s’adressent à un personnage ET au spectateur.'}
    ],
    essentiel:'<p>Un texte de théâtre est fait pour être <b>joué</b>. Il se découpe en <b>actes</b> et <b>scènes</b>. Les <b>didascalies</b> guident la mise en scène.</p>',
    exemple:'<p>Molière écrit des <b>comédies</b> qui critiquent les défauts humains (l’hypocrisie dans <i>Tartuffe</i>).</p>',
    retenir:'La <b>comédie</b> fait rire et corrige les mœurs ; la <b>tragédie</b> montre un destin funeste.'
  }
},
{
  id:'fr-argumentation', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’argumentation',
  motsCles:['thèse','argument','exemple','connecteur logique','convaincre','persuader','opinion'],
  contenu:{
    objectifs:['Construire un raisonnement argumenté.','Utiliser des connecteurs logiques.'],
    notions:[
      {terme:'Thèse', def:'l’opinion défendue.'},
      {terme:'Argument', def:'une idée qui soutient la thèse.'},
      {terme:'Exemple', def:'un cas concret qui illustre l’argument.'},
      {terme:'Connecteurs', def:'d’abord, ensuite, de plus, en effet, cependant, donc…'}
    ],
    essentiel:'<p>Argumenter, c’est <b>défendre une thèse</b> avec des <b>arguments</b> illustrés d’<b>exemples</b>, reliés par des <b>connecteurs logiques</b>. On peut <b>convaincre</b> (raison) ou <b>persuader</b> (émotion).</p>',
    exemple:'<p>Thèse : lire est utile. Argument : ça enrichit le vocabulaire. Exemple : on retient l’orthographe des mots vus souvent.</p>',
    retenir:'Un bon paragraphe = <b>1 argument + 1 exemple</b>, introduit par un connecteur.'
  }
},
{
  id:'fr-redaction', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'La rédaction du brevet (réflexion / imagination)',
  motsCles:['sujet de réflexion','sujet d’imagination','rédaction','brouillon','plan','paragraphe','méthode'],
  contenu:{
    objectifs:['Choisir et traiter un sujet de rédaction.','Structurer et relire son texte.'],
    notions:[
      {terme:'Sujet d’imagination', def:'inventer un récit (suite de texte, description, dialogue…).'},
      {terme:'Sujet de réflexion', def:'donner un avis argumenté sur une question.'},
      {terme:'Plan', def:'introduction, développement en paragraphes, conclusion.'}
    ],
    essentiel:'<p>À l’écrit du brevet, tu choisis entre <b>imagination</b> et <b>réflexion</b>. Dans les deux cas : <b>brouillon</b>, <b>paragraphes</b> organisés, et surtout une <b>relecture</b> orthographe/ponctuation.</p>',
    methode:[
      'Analyse le sujet (mots-clés, consignes, temps demandé).',
      'Fais un brouillon d’idées et un plan.',
      'Rédige en soignant les connecteurs et les paragraphes.',
      'Relis : accords, ponctuation, temps, répétitions.'
    ],
    retenir:'Garde <b>10 minutes</b> pour la <b>relecture</b> : c’est ce qui fait gagner des points.'
  }
},
{
  id:'fr-realisme', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le récit réaliste (XIXᵉ siècle)',
  motsCles:['réalisme','Balzac','Maupassant','Zola','description','société','narrateur','portrait'],
  contenu:{
    objectifs:['Connaître les caractéristiques du réalisme.','Analyser une description réaliste.'],
    notions:[
      {terme:'Réalisme', def:'mouvement du XIXᵉ qui peint la société telle qu’elle est, sans l’idéaliser.'},
      {terme:'Auteurs', def:'Balzac, Flaubert, Maupassant ; Zola pour le naturalisme.'},
      {terme:'Procédés', def:'descriptions précises, détails concrets, milieux sociaux variés.'}
    ],
    essentiel:'<p>Le <b>réalisme</b> cherche à représenter fidèlement la vie quotidienne et la <b>société</b> (travail, argent, classes sociales). Les <b>descriptions</b> et <b>portraits</b> y sont détaillés.</p>',
    exemple:'<p>Dans <i>La Peau de chagrin</i> (Balzac), les lieux et objets traduisent le milieu social des personnages.</p>',
    retenir:'Réalisme = <b>miroir de la société</b> ; observe les <b>détails concrets</b> et leur sens.'
  }
},
{
  id:'fr-modes', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les modes verbaux (conditionnel, subjonctif, impératif)',
  motsCles:['mode','conditionnel','subjonctif','impératif','indicatif','ordre','hypothèse','souhait'],
  contenu:{
    objectifs:['Distinguer les modes et leurs valeurs.','Employer le bon mode selon le sens.'],
    notions:[
      {terme:'Indicatif', def:'mode du réel, des faits.'},
      {terme:'Conditionnel', def:'mode de l’hypothèse, de l’imaginaire, du souhait (« je voudrais »).'},
      {terme:'Subjonctif', def:'mode du souhait, de l’ordre, du doute ; souvent après « que » (« il faut que tu viennes »).'},
      {terme:'Impératif', def:'mode de l’ordre et du conseil, sans sujet exprimé (« viens ! »).'}
    ],
    essentiel:'<p>Le <b>mode</b> traduit la façon dont on présente l’action : réelle (<b>indicatif</b>), envisagée (<b>conditionnel</b>, <b>subjonctif</b>) ou commandée (<b>impératif</b>).</p>',
    exemple:'<p>« Si j’avais le temps, je <b>lirais</b> » (conditionnel) ; « Je veux que tu <b>sois</b> à l’heure » (subjonctif).</p>',
    retenir:'Conditionnel = <b>hypothèse/politesse</b> ; subjonctif = souvent après « <b>que</b> » (volonté, doute).'
  }
},
{
  id:'fr-voix-passive', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'La voix active et la voix passive',
  motsCles:['voix active','voix passive','complément d’agent','sujet','transformation','par'],
  contenu:{
    objectifs:['Distinguer voix active et passive.','Transformer une phrase d’une voix à l’autre.'],
    notions:[
      {terme:'Voix active', def:'le sujet fait l’action (« le chat mange la souris »).'},
      {terme:'Voix passive', def:'le sujet subit l’action (« la souris est mangée par le chat »).'},
      {terme:'Complément d’agent', def:'celui qui fait réellement l’action, introduit par « par ».'}
    ],
    essentiel:'<p>À la <b>voix passive</b>, le COD de l’actif devient <b>sujet</b>, et le sujet devient <b>complément d’agent</b> (introduit par « par »). Le verbe se conjugue avec l’auxiliaire <b>être</b>.</p>',
    exemple:'<p>Actif : « Le jury <b>récompense</b> l’élève. » → Passif : « L’élève <b>est récompensé</b> par le jury. »</p>',
    retenir:'Passif = <b>être + participe passé</b> + éventuel « <b>par</b> » (agent).'
  }
},
{
  id:'fr-types-phrases', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Les types et formes de phrases',
  motsCles:['déclarative','interrogative','exclamative','injonctive','négation','forme affirmative','ponctuation'],
  contenu:{
    objectifs:['Reconnaître les types de phrases.','Maîtriser la forme négative.'],
    notions:[
      {terme:'Types', def:'déclarative (.), interrogative ( ?), exclamative ( !), injonctive (ordre).'},
      {terme:'Formes', def:'affirmative / négative (ne… pas, ne… jamais, ne… plus…).'}
    ],
    essentiel:'<p>Chaque phrase a un <b>type</b> (selon son but) et une <b>forme</b> (affirmative ou négative). La <b>négation</b> encadre le verbe : <b>ne … pas</b>.</p>',
    exemple:'<p>« Viens ici. » (injonctive) ; « Ne bouge pas ! » (injonctive, négative, exclamative).</p>',
    retenir:'Ne pas oublier le « <b>ne</b> » à l’écrit : la négation a <b>deux mots</b>.'
  }
},
{
  id:'fr-groupe-nominal', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le groupe nominal et ses expansions',
  motsCles:['groupe nominal','épithète','complément du nom','proposition relative','déterminant','expansion','nom noyau'],
  contenu:{
    objectifs:['Identifier le nom noyau et ses expansions.','Enrichir un groupe nominal.'],
    notions:[
      {terme:'Nom noyau', def:'le nom principal du groupe.'},
      {terme:'Épithète', def:'adjectif qui qualifie directement le nom (« un chat noir »).'},
      {terme:'Complément du nom', def:'introduit par une préposition (« un chat de gouttière »).'},
      {terme:'Proposition relative', def:'introduite par qui, que, dont, où (« le chat qui dort »).'}
    ],
    essentiel:'<p>Le <b>groupe nominal</b> s’organise autour d’un <b>nom noyau</b> qu’on enrichit par des <b>expansions</b> : adjectif <b>épithète</b>, <b>complément du nom</b> ou <b>proposition relative</b>.</p>',
    exemple:'<p>« Un grand livre de contes qui fascine les enfants » : épithète + compl. du nom + relative.</p>',
    retenir:'Trois expansions du nom : <b>épithète</b>, <b>complément du nom</b>, <b>relative</b>.'
  }
},
{
  id:'fr-lexique', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le lexique : sens, champ lexical, formation des mots',
  motsCles:['sens propre','sens figuré','champ lexical','synonyme','préfixe','suffixe','radical','vocabulaire'],
  contenu:{
    objectifs:['Distinguer sens propre et figuré.','Analyser la formation d’un mot.'],
    notions:[
      {terme:'Sens propre / figuré', def:'sens premier et concret / sens imagé.'},
      {terme:'Champ lexical', def:'ensemble de mots se rapportant à un même thème.'},
      {terme:'Formation', def:'radical + préfixe (avant) + suffixe (après).'}
    ],
    essentiel:'<p>Un mot peut avoir un <b>sens propre</b> ou <b>figuré</b>. Le <b>champ lexical</b> révèle le thème d’un texte. Les mots se forment par <b>préfixes</b> et <b>suffixes</b> ajoutés à un <b>radical</b>.</p>',
    exemple:'<p>« Dévisser » = préfixe <b>dé-</b> + radical <b>viss</b> + suffixe <b>-er</b>. « Une mer de sable » = sens <b>figuré</b>.</p>',
    retenir:'Repérer un <b>champ lexical</b> aide à trouver le <b>thème</b> et le <b>ton</b> du texte.'
  }
},
{
  id:'fr-point-de-vue', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le narrateur et les points de vue',
  motsCles:['narrateur','point de vue','focalisation','interne','externe','omniscient','récit'],
  contenu:{
    objectifs:['Identifier le type de narrateur.','Reconnaître le point de vue adopté.'],
    notions:[
      {terme:'Narrateur', def:'celui qui raconte (peut être un personnage ou extérieur à l’histoire).'},
      {terme:'Point de vue interne', def:'on voit à travers les yeux d’un personnage (ses pensées).'},
      {terme:'Point de vue externe', def:'on voit seulement de l’extérieur, comme une caméra.'},
      {terme:'Point de vue omniscient', def:'le narrateur sait tout de tous les personnages.'}
    ],
    essentiel:'<p>Le <b>narrateur</b> choisit un <b>point de vue</b> (focalisation) qui oriente ce que le lecteur sait. Cela crée du <b>suspense</b>, de l’<b>identification</b> ou de la distance.</p>',
    exemple:'<p>« Il ignorait ce qui l’attendait » : point de vue <b>interne</b> (on suit ses pensées).</p>',
    retenir:'Omniscient = <b>sait tout</b> ; interne = <b>un seul regard</b> ; externe = <b>de l’extérieur</b>.'
  }
},
{
  id:'fr-registres', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les registres (tonalités) d’un texte',
  motsCles:['registre','comique','tragique','pathétique','épique','lyrique','fantastique','ton'],
  contenu:{
    objectifs:['Identifier le registre d’un texte.','Relier registre et émotion produite.'],
    notions:[
      {terme:'Comique', def:'fait rire (jeux de mots, situations…).'},
      {terme:'Tragique', def:'fatalité, mort, destin inévitable.'},
      {terme:'Pathétique', def:'suscite la pitié, l’émotion, la souffrance.'},
      {terme:'Épique', def:'exagère pour glorifier un héros ou un exploit.'},
      {terme:'Lyrique', def:'exprime des sentiments personnels (amour, tristesse).'}
    ],
    essentiel:'<p>Le <b>registre</b> (ou tonalité) est l’<b>émotion</b> que le texte cherche à provoquer. Un même thème peut être traité sur un ton <b>comique</b>, <b>tragique</b>, <b>pathétique</b>…</p>',
    exemple:'<p>Un combat raconté avec des exagérations et des héros → registre <b>épique</b>.</p>',
    retenir:'Le registre = l’<b>effet émotionnel</b> recherché sur le lecteur.'
  }
},
{
  id:'fr-autobiographie', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’autobiographie',
  motsCles:['autobiographie','récit de soi','première personne','mémoire','pacte autobiographique','souvenir','je'],
  contenu:{
    objectifs:['Définir l’autobiographie.','Repérer ses marques d’écriture.'],
    notions:[
      {terme:'Autobiographie', def:'récit de sa propre vie par l’auteur lui-même.'},
      {terme:'Pacte autobiographique', def:'auteur = narrateur = personnage principal.'},
      {terme:'Marques', def:'emploi du « je », temps du passé, souvenirs et émotions.'}
    ],
    essentiel:'<p>Dans une <b>autobiographie</b>, l’auteur raconte <b>sa propre vie</b> à la première personne. Auteur, narrateur et personnage sont la <b>même personne</b> (pacte autobiographique).</p>',
    exemple:'<p>Un auteur évoque son enfance : « Je me souviens de la maison où je suis né… »</p>',
    retenir:'Autobiographie : <b>auteur = narrateur = personnage</b>, récit à la <b>1ʳᵉ personne</b>.'
  }
}
]);
