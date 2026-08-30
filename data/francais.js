window.FICHES = (window.FICHES || []).concat([
{
  id:'fr-phrase-complexe', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'La phrase complexe et la subordination',
  motsCles:['proposition','subordonnée','juxtaposition','coordination','conjonction','relative','conjonctive','complexe'],
  contenu:{
    objectifs:['Distinguer phrase simple et complexe.','Reconnaître juxtaposition, coordination et subordination.','Identifier le type de subordonnée.'],
    notions:[
      {terme:'Phrase simple', def:'une seule proposition, donc un seul verbe conjugué.'},
      {terme:'Phrase complexe', def:'plusieurs propositions, donc plusieurs verbes conjugués.'},
      {terme:'Juxtaposition', def:'propositions séparées par une virgule, un point-virgule ou deux-points.'},
      {terme:'Coordination', def:'propositions reliées par une conjonction de coordination : mais, ou, et, donc, or, ni, car.'},
      {terme:'Subordination', def:'une proposition (subordonnée) dépend d’une autre (principale), introduite par un mot subordonnant (que, qui, quand, parce que, si…).'}
    ],
    essentiel:'<p>Pour analyser une phrase, on compte les <b>verbes conjugués</b> : il y a autant de propositions que de verbes conjugués. On identifie ensuite comment elles sont reliées : <b>juxtaposées</b> (par une ponctuation), <b>coordonnées</b> (par mais, ou, et, donc, or, ni, car) — dans ces deux cas les propositions sont au même niveau — ou <b>subordonnées</b> (l’une dépend de l’autre).</p><p>Les principales subordonnées sont : la <b>relative</b> (introduite par qui, que, dont, où ; elle complète un nom) et la <b>conjonctive</b> (introduite par « que » après un verbe, ou par une conjonction : parce que, quand, si… ; elle complète le verbe). Repérer le <b>mot subordonnant</b> permet d’identifier son type.</p>',
    exemple:'<p>« Je révise <b>parce que</b> le brevet approche. » → subordonnée conjonctive de cause.<br>« Le livre <b>que</b> je lis est passionnant. » → subordonnée relative (complète « livre »).</p>',
    retenir:'Autant de <b>verbes conjugués</b> = autant de propositions. Une subordonnée ne peut pas exister seule. Repère le <b>mot subordonnant</b> pour son type.'
  }
},
{
  id:'fr-classes-grammaticales', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Les classes grammaticales (natures de mots)',
  motsCles:['nom','verbe','adjectif','déterminant','pronom','adverbe','préposition','conjonction','nature'],
  contenu:{
    objectifs:['Identifier la nature (classe) de chaque mot.','Ne pas confondre nature et fonction.'],
    notions:[
      {terme:'Classes variables', def:'nom, déterminant, adjectif, pronom, verbe : ils changent de forme (genre, nombre, personne, temps).'},
      {terme:'Classes invariables', def:'adverbe, préposition, conjonction, interjection : ils ne changent jamais de forme.'},
      {terme:'Nature vs fonction', def:'la nature est fixe (donnée par le dictionnaire) ; la fonction dépend du rôle du mot dans la phrase.'}
    ],
    essentiel:'<p>Chaque mot appartient à une <b>classe grammaticale</b> (sa nature), qui est la base de toute analyse. On distingue les classes <b>variables</b> (qui changent de forme) des classes <b>invariables</b>. Un même mot garde toujours la même nature, quelle que soit la phrase.</p><p>Il ne faut pas confondre la <b>nature</b> (« qu’est-ce que ce mot ? » — un nom, un verbe…) avec la <b>fonction</b> (« à quoi sert-il dans la phrase ? » — sujet, COD…). Un même mot peut avoir des fonctions différentes selon la phrase, mais sa nature reste la même.</p>',
    exemple:'<p>« Le petit chat dort tranquillement » : <b>Le</b> (déterminant), <b>petit</b> (adjectif), <b>chat</b> (nom), <b>dort</b> (verbe), <b>tranquillement</b> (adverbe).</p>',
    retenir:'Nature = <b>toujours la même</b> (dictionnaire) ; fonction = <b>dépend de la phrase</b>. Ne pas confondre les deux.'
  }
},
{
  id:'fr-fonctions', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les fonctions dans la phrase',
  motsCles:['sujet','cod','coi','attribut','complément circonstanciel','épithète','fonction'],
  contenu:{
    objectifs:['Identifier les fonctions liées au verbe.','Distinguer COD, COI et compléments circonstanciels.'],
    notions:[
      {terme:'Sujet', def:'fait ou subit l’action (« qui est-ce qui… ? ») ; il commande l’accord du verbe.'},
      {terme:'COD', def:'complète le verbe sans préposition (« qui ? quoi ? » après le verbe).'},
      {terme:'COI', def:'complète le verbe avec une préposition (« à qui ? de quoi ? »).'},
      {terme:'Attribut du sujet', def:'donne une qualité au sujet, après un verbe d’état (être, sembler, paraître, devenir…).'},
      {terme:'Complément circonstanciel', def:'précise les circonstances (temps, lieu, manière, cause…) ; il est déplaçable et souvent supprimable.'}
    ],
    essentiel:'<p>La <b>fonction</b> décrit le <b>rôle</b> d’un mot dans la phrase. Autour du verbe, on distingue les compléments <b>essentiels</b> (COD, COI), qu’on ne peut ni déplacer ni supprimer, des compléments <b>circonstanciels</b>, qui sont mobiles et souvent supprimables.</p><p>Le <b>COD</b> répond à « qui ? quoi ? » sans préposition ; le <b>COI</b> répond à « à qui ? de quoi ? » avec une préposition. L’<b>attribut du sujet</b> apparaît après un verbe d’état et donne une qualité au sujet.</p>',
    exemple:'<p>« Hier, Léa offre un livre à son frère. » → <b>Hier</b> (CC de temps), <b>Léa</b> (sujet), <b>un livre</b> (COD), <b>à son frère</b> (COI).<br>« Ce chien semble <b>fatigué</b> » → attribut du sujet.</p>',
    retenir:'COD/COI = essentiels (ni déplaçables ni supprimables) ; CC = <b>déplaçable et supprimable</b>. Attribut = après un verbe d’état.'
  }
},
{
  id:'fr-conjugaison', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les temps de l’indicatif',
  motsCles:['présent','imparfait','passé simple','passé composé','futur','plus-que-parfait','conjugaison','indicatif'],
  contenu:{
    objectifs:['Employer les temps du récit.','Distinguer imparfait et passé simple.','Reconnaître l’antériorité (plus-que-parfait).'],
    notions:[
      {terme:'Présent', def:'action actuelle, vérité générale, ou présent de narration.'},
      {terme:'Imparfait', def:'arrière-plan du récit : description, habitude, action qui dure.'},
      {terme:'Passé simple', def:'premier plan du récit : actions brèves, soudaines, successives.'},
      {terme:'Passé composé', def:'action passée achevée, souvent en lien avec le présent (récit oral, lettre).'},
      {terme:'Plus-que-parfait', def:'action antérieure à une autre action passée.'}
    ],
    essentiel:'<p>Dans un <b>récit au passé</b>, deux temps se combinent : l’<b>imparfait</b> plante le décor et exprime ce qui dure ou se répète (« il faisait nuit »), tandis que le <b>passé simple</b> raconte les actions de premier plan, brèves et successives (« soudain, un cri retentit »). Le <b>plus-que-parfait</b> exprime une action qui s’est passée <b>encore avant</b>.</p><p>Pour distinguer imparfait et passé simple, on se demande si l’action <b>dure/se répète</b> (imparfait) ou si elle est <b>ponctuelle et fait avancer l’histoire</b> (passé simple).</p>',
    exemple:'<p>« Il <b>faisait</b> nuit (imparfait) quand un cri <b>retentit</b> (passé simple). Il <b>avait fermé</b> (plus-que-parfait) la porte une heure plus tôt. »</p>',
    retenir:'Imparfait = <b>décor / durée / habitude</b> ; passé simple = <b>action soudaine et brève</b> ; plus-que-parfait = action <b>encore avant</b>.'
  }
},
{
  id:'fr-accords', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Orthographe : accords et homophones',
  motsCles:['accord','participe passé','homophone','a/à','et/est','son/sont','ces/ses','ou/où','orthographe','dictée'],
  contenu:{
    objectifs:['Accorder le participe passé.','Ne plus confondre les homophones courants.'],
    notions:[
      {terme:'Participe passé avec être', def:'il s’accorde avec le sujet (« elles sont parties »).'},
      {terme:'Participe passé avec avoir', def:'il s’accorde avec le COD seulement si le COD est placé AVANT le verbe (« les fleurs que j’ai cueillies »).'},
      {terme:'Homophones à tester', def:'a/à (→ avait) ; et/est (→ était) ; son/sont (→ étaient) ; on/ont (→ avaient) ; ces/ses ; ou/où ; ce/se.'}
    ],
    essentiel:'<p>La plupart des fautes de <b>dictée</b> viennent des <b>accords</b> et des <b>homophones</b>. C’est justement là que le nouveau barème du brevet retire (ou accorde) des points, donc il faut être vigilant.</p><p>Pour les <b>participes passés</b> : avec <b>être</b>, on accorde avec le sujet ; avec <b>avoir</b>, on accorde seulement si le COD est <b>placé avant</b> le verbe. Pour les <b>homophones</b>, une astuce simple : on remplace par l’imparfait (« a » → « avait », « est » → « était », « ont » → « avaient »).</p>',
    exemple:'<p>« Il <b>a</b> (avait) mangé » ≠ « Il va <b>à</b> l’école ».<br>« Elles <b>sont</b> (étaient) prêtes » ≠ « <b>son</b> sac ».<br>« Les lettres qu’il a <b>écrites</b> » (COD « qu’ » placé avant → accord).</p>',
    retenir:'Avec <b>avoir</b> : accord seulement si le COD est <b>avant</b>. Homophones : <b>remplace par l’imparfait</b> pour trancher.'
  }
},
{
  id:'fr-figures-style', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les figures de style',
  motsCles:['comparaison','métaphore','personnification','hyperbole','antithèse','énumération','gradation','image'],
  contenu:{
    objectifs:['Identifier les principales figures de style.','Analyser leur effet dans un texte.'],
    notions:[
      {terme:'Comparaison', def:'rapproche deux éléments avec un outil de comparaison (comme, tel, pareil à, ressembler à).'},
      {terme:'Métaphore', def:'rapproche deux éléments SANS outil de comparaison.'},
      {terme:'Personnification', def:'attribue des traits humains à une chose, un animal ou une idée.'},
      {terme:'Hyperbole', def:'exagération pour frapper l’esprit.'},
      {terme:'Antithèse', def:'oppose deux mots ou deux idées.'},
      {terme:'Gradation', def:'énumération d’intensité croissante (ou décroissante).'}
    ],
    essentiel:'<p>Les figures de style créent des <b>images</b> et produisent des <b>effets</b> sur le lecteur (frapper, embellir, opposer, exagérer). Au brevet, il ne suffit pas de les <b>nommer</b> : il faut aussi expliquer l’<b>effet produit</b> et, si possible, <b>citer le texte</b>.</p><p>La distinction la plus demandée est celle entre <b>comparaison</b> (il y a un outil : comme, tel…) et <b>métaphore</b> (il n’y en a pas). La <b>personnification</b> et l’<b>hyperbole</b> sont aussi très fréquentes.</p>',
    exemple:'<p>« Cet homme est un lion » → <b>métaphore</b> (force, courage).<br>« Fort comme un lion » → <b>comparaison</b> (outil : comme).<br>« Le vent hurlait » → <b>personnification</b>.</p>',
    retenir:'Toujours associer la figure à son <b>effet</b> (+ citer le texte). Comparaison = avec un outil (comme…) ; métaphore = sans outil.'
  }
},
{
  id:'fr-schema-narratif', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le schéma narratif',
  motsCles:['situation initiale','élément perturbateur','péripéties','dénouement','situation finale','récit'],
  contenu:{
    objectifs:['Repérer les étapes d’un récit.','Résumer une histoire de façon structurée.'],
    notions:[
      {terme:'Situation initiale', def:'l’équilibre de départ (décor, personnages), souvent à l’imparfait.'},
      {terme:'Élément perturbateur', def:'l’événement qui déclenche l’action (« un jour… », « soudain… »).'},
      {terme:'Péripéties', def:'les actions et rebondissements qui suivent.'},
      {terme:'Dénouement', def:'l’événement qui résout le problème.'},
      {terme:'Situation finale', def:'le nouvel équilibre, la fin de l’histoire.'}
    ],
    essentiel:'<p>La plupart des récits suivent ces <b>cinq étapes</b>. Elles aident à la fois à <b>comprendre</b> un texte et à <b>rédiger</b> une histoire cohérente. La situation initiale, souvent à l’<b>imparfait</b>, installe le calme ; l’<b>élément perturbateur</b> le rompt et lance l’intrigue.</p><p>Il ne faut pas confondre le schéma <b>narratif</b> (les étapes de l’histoire) avec le schéma <b>actanciel</b> (les rôles : le héros, ce qu’il cherche, ses adjuvants et ses opposants).</p>',
    exemple:'<p>Conte : un roi vit heureux (initiale) → un dragon attaque (perturbateur) → épreuves et combats (péripéties) → le héros tue le dragon (dénouement) → le royaume retrouve la paix (finale).</p>',
    retenir:'Cinq étapes ; l’élément perturbateur <b>déclenche</b> l’action (souvent « soudain », « un jour »). Ne pas confondre schéma narratif et actanciel.'
  }
},
{
  id:'fr-discours-rapporte', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les paroles rapportées (discours direct/indirect)',
  motsCles:['discours direct','discours indirect','ponctuation du dialogue','verbe de parole','transposition'],
  contenu:{
    objectifs:['Distinguer discours direct et indirect.','Transposer de l’un à l’autre.'],
    notions:[
      {terme:'Discours direct', def:'les paroles rapportées telles quelles, avec guillemets/tirets, verbe de parole et ponctuation expressive.'},
      {terme:'Discours indirect', def:'les paroles intégrées au récit dans une subordonnée (« il dit que… »).'},
      {terme:'Transposition', def:'en passant au discours indirect, on change les pronoms (je→il), les temps (présent→imparfait) et les indicateurs de temps (demain→le lendemain).'}
    ],
    essentiel:'<p>Le <b>discours direct</b> rapporte les paroles telles qu’elles sont prononcées : il rend le dialogue vivant et se reconnaît à sa <b>ponctuation</b> (guillemets, tirets) et à ses verbes de parole. Le <b>discours indirect</b>, lui, intègre les paroles dans le récit à l’aide d’une <b>subordonnée</b> introduite par « que ».</p><p>Passer de l’un à l’autre demande de la rigueur : il faut modifier les <b>pronoms</b>, les <b>temps</b> et les <b>marqueurs de temps</b>, et supprimer la ponctuation du dialogue.</p>',
    exemple:'<p>Direct : Il dit : « <b>Je</b> pars <b>demain</b>. »<br>Indirect : Il dit qu’<b>il</b> partait <b>le lendemain</b>.</p>',
    retenir:'Direct = <b>ponctuation forte</b> (guillemets/tirets) ; indirect = <b>subordonnée « que »</b> + changement des pronoms, temps et marqueurs de temps.'
  }
},
{
  id:'fr-poesie', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'La poésie et la versification',
  motsCles:['vers','strophe','rime','alexandrin','octosyllabe','sonnet','syllabe','e muet'],
  contenu:{
    objectifs:['Compter les syllabes d’un vers.','Reconnaître les types de strophes et de rimes.'],
    notions:[
      {terme:'Vers et mètres', def:'8 syllabes = octosyllabe ; 10 = décasyllabe ; 12 = alexandrin.'},
      {terme:'Le « e » muet', def:'ne se compte pas en fin de vers ni devant une voyelle ; se compte entre deux consonnes prononcées.'},
      {terme:'Rimes', def:'plates/suivies (AABB), croisées (ABAB), embrassées (ABBA).'},
      {terme:'Strophes', def:'tercet = 3 vers, quatrain = 4 vers. Un sonnet = 2 quatrains + 2 tercets (14 vers).'}
    ],
    essentiel:'<p>La poésie joue sur les <b>sons</b> et le <b>rythme</b>. Pour analyser un poème, on compte les <b>syllabes</b> de chaque vers (en tenant compte du « e » muet), on identifie le type de <b>strophe</b> et la disposition des <b>rimes</b>, et on étudie les <b>images</b> (comparaisons, métaphores).</p><p>La règle du « e » muet est délicate : en fin de vers ou devant une voyelle, il ne se compte pas ; entre deux consonnes prononcées, il compte. Cela change le décompte des syllabes.</p>',
    exemple:'<p>« Demain, dès l’aube… » : De-main-dès-l’au-be → le « e » de « aube » en fin de groupe ne se compte pas.</p>',
    retenir:'Le « e » en fin de vers <b>ne compte pas</b>. Sonnet = <b>14 vers</b> (2 quatrains + 2 tercets), souvent en alexandrins.'
  }
},
{
  id:'fr-theatre', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Le théâtre',
  motsCles:['réplique','tirade','monologue','didascalie','acte','scène','comédie','tragédie','double énonciation'],
  contenu:{
    objectifs:['Connaître le vocabulaire du théâtre.','Distinguer comédie et tragédie.'],
    notions:[
      {terme:'Didascalie', def:'indication scénique (décor, gestes, ton) donnée par l’auteur, en dehors du dialogue.'},
      {terme:'Réplique / tirade', def:'ce que dit un personnage ; une longue réplique s’appelle une tirade.'},
      {terme:'Monologue', def:'un personnage seul se parle à lui-même (ou au public).'},
      {terme:'Double énonciation', def:'les paroles s’adressent à la fois à un personnage ET au spectateur.'},
      {terme:'Aparté', def:'parole que seul le spectateur est censé entendre.'}
    ],
    essentiel:'<p>Un texte de théâtre est fait pour être <b>joué</b>. Il se découpe en <b>actes</b> puis en <b>scènes</b>, et les <b>didascalies</b> (souvent en italique) guident la mise en scène. Une particularité du théâtre est la <b>double énonciation</b> : un personnage parle à un autre, mais aussi, en réalité, au spectateur.</p><p>On distingue deux grands genres : la <b>comédie</b>, qui fait rire et corrige les mœurs (Molière critique l’hypocrisie, l’avarice…), et la <b>tragédie</b>, qui met en scène un destin funeste et provoque de fortes émotions.</p>',
    exemple:'<p>Molière écrit des <b>comédies</b> qui dénoncent les défauts humains : l’hypocrisie dans <i>Tartuffe</i>, l’avarice dans <i>L’Avare</i>.</p>',
    retenir:'Comédie = rire + critique des mœurs ; tragédie = destin funeste. Les <b>didascalies</b> guident le jeu ; <b>double énonciation</b> = au personnage ET au public.'
  }
},
{
  id:'fr-argumentation', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’argumentation',
  motsCles:['thèse','argument','exemple','connecteur logique','convaincre','persuader','réfuter','opinion'],
  contenu:{
    objectifs:['Construire un raisonnement argumenté.','Utiliser des connecteurs logiques.'],
    notions:[
      {terme:'Thèse', def:'l’opinion que l’on défend.'},
      {terme:'Argument', def:'une idée qui soutient la thèse.'},
      {terme:'Exemple', def:'un cas concret qui illustre l’argument.'},
      {terme:'Connecteurs logiques', def:'d’abord, ensuite, de plus, en effet, cependant, donc, par conséquent.'},
      {terme:'Convaincre / persuader', def:'convaincre = par la raison et les arguments ; persuader = par les émotions.'}
    ],
    essentiel:'<p>Argumenter, c’est <b>défendre une thèse</b> à l’aide d’<b>arguments</b>, chacun illustré par un <b>exemple</b>, le tout organisé par des <b>connecteurs logiques</b>. On peut aussi <b>réfuter</b> la thèse adverse pour renforcer la sienne.</p><p>On distingue deux façons d’agir sur le lecteur : le <b>convaincre</b> par la raison (arguments, logique) ou le <b>persuader</b> par les émotions (registres, images fortes). Un bon paragraphe argumentatif enchaîne un argument, un exemple, et se relie au suivant par un connecteur.</p>',
    exemple:'<p>Thèse : lire est utile. Argument : cela enrichit le vocabulaire. Exemple : on mémorise l’orthographe des mots vus souvent. Connecteur : « <b>en effet</b> ».</p>',
    retenir:'Un paragraphe = <b>1 argument + 1 exemple</b>, introduit par un connecteur. Convaincre (raison) ≠ persuader (émotions).'
  }
},
{
  id:'fr-redaction', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'La rédaction du brevet (réflexion / imagination)',
  motsCles:['sujet de réflexion','sujet d’imagination','rédaction','brouillon','plan','paragraphe','relecture','méthode'],
  contenu:{
    objectifs:['Choisir et traiter un sujet de rédaction.','Structurer et relire son texte.'],
    notions:[
      {terme:'Sujet d’imagination', def:'inventer un récit (suite de texte, description, dialogue…) cohérent avec le texte donné.'},
      {terme:'Sujet de réflexion', def:'donner un avis argumenté sur une question (thèse, arguments, exemples).'},
      {terme:'Plan', def:'introduction, développement en paragraphes, conclusion.'}
    ],
    essentiel:'<p>À l’écrit du brevet, tu choisis entre un sujet d’<b>imagination</b> et un sujet de <b>réflexion</b>. Dans les deux cas, la méthode est la même : analyser le sujet, faire un <b>brouillon</b> et un <b>plan</b>, puis rédiger en paragraphes reliés par des connecteurs.</p><p>Avec le <b>nouveau barème</b>, la <b>qualité de la langue</b> (orthographe, syntaxe, ponctuation) compte beaucoup : il faut donc garder du temps pour la <b>relecture</b>. C’est elle qui fait souvent la différence entre une note correcte et une bonne note.</p>',
    methode:[
      'Analyse le sujet : consignes, temps demandé, longueur attendue.',
      'Fais un brouillon d’idées, puis un plan.',
      'Rédige en soignant connecteurs et paragraphes.',
      'Relis : accords, participes passés, ponctuation, répétitions.'
    ],
    retenir:'Garde <b>10 minutes</b> pour la <b>relecture</b> : avec le nouveau barème, la qualité de la langue rapporte beaucoup de points.'
  }
},
{
  id:'fr-realisme', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le récit réaliste (XIXᵉ siècle)',
  motsCles:['réalisme','naturalisme','Balzac','Maupassant','Zola','description','société','portrait'],
  contenu:{
    objectifs:['Connaître les caractéristiques du réalisme.','Analyser une description réaliste.'],
    notions:[
      {terme:'Réalisme', def:'mouvement littéraire du XIXᵉ siècle qui cherche à peindre la société telle qu’elle est, sans l’idéaliser.'},
      {terme:'Naturalisme', def:'prolongement du réalisme (Zola) qui étudie l’influence du milieu social et de l’hérédité, comme une « science ».'},
      {terme:'Auteurs', def:'Balzac, Flaubert, Maupassant (réalisme) ; Zola (naturalisme).'},
      {terme:'Procédés', def:'descriptions précises, détails concrets, milieux sociaux variés, vocabulaire du quotidien.'}
    ],
    essentiel:'<p>Le <b>réalisme</b> cherche à représenter fidèlement la vie quotidienne et la <b>société</b> du XIXᵉ siècle (travail, argent, classes sociales), sans l’embellir. Les auteurs multiplient les <b>descriptions</b> détaillées et les <b>portraits</b> précis.</p><p>Dans un texte réaliste, les <b>objets</b>, les <b>lieux</b> et l’<b>apparence</b> des personnages ne sont pas là par hasard : ils <b>révèlent</b> le milieu social et la personnalité. Lorsqu’on analyse une description, on explique donc ce que ces détails concrets nous apprennent.</p>',
    exemple:'<p>Dans <i>La Peau de chagrin</i> (Balzac), la description minutieuse des lieux et des objets révèle la condition sociale des personnages.</p>',
    retenir:'Réalisme = <b>miroir de la société</b> (XIXᵉ s.). Les <b>détails concrets</b> d’une description ont un sens : ils révèlent le milieu social.'
  }
},
{
  id:'fr-modes', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les modes verbaux (conditionnel, subjonctif, impératif)',
  motsCles:['mode','conditionnel','subjonctif','impératif','indicatif','ordre','hypothèse','souhait'],
  contenu:{
    objectifs:['Distinguer les modes et leurs valeurs.','Employer le bon mode selon le sens.'],
    notions:[
      {terme:'Indicatif', def:'mode du réel, des faits présentés comme certains.'},
      {terme:'Conditionnel', def:'mode de l’hypothèse, de l’imaginaire, du souhait ou de la politesse (« je voudrais »).'},
      {terme:'Subjonctif', def:'mode du souhait, de la volonté, du doute ; il apparaît souvent après « que » (« il faut que tu viennes »).'},
      {terme:'Impératif', def:'mode de l’ordre et du conseil, sans sujet exprimé (« viens ! »).'}
    ],
    essentiel:'<p>Le <b>mode</b> traduit la manière dont on présente l’action : comme <b>réelle</b> (indicatif), comme <b>envisagée</b> (conditionnel, subjonctif) ou comme <b>commandée</b> (impératif). Reconnaître le mode aide à comprendre l’intention de l’auteur.</p><p>Deux repères utiles : le <b>conditionnel</b> exprime souvent une hypothèse (« si… je ferais ») ou la politesse ; le <b>subjonctif</b> apparaît souvent après « que » quand on exprime une volonté, un souhait ou un doute. Le conditionnel présent se forme sur le futur avec les terminaisons de l’imparfait.</p>',
    exemple:'<p>« Si j’avais le temps, je <b>lirais</b> » → conditionnel (hypothèse).<br>« Je veux que tu <b>sois</b> à l’heure » → subjonctif (volonté).<br>« <b>Écoute</b>-moi ! » → impératif (ordre).</p>',
    retenir:'Conditionnel = <b>hypothèse / politesse</b> ; subjonctif = souvent après « <b>que</b> » (volonté, doute) ; impératif = <b>ordre sans sujet</b>.'
  }
},
{
  id:'fr-voix-passive', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'La voix active et la voix passive',
  motsCles:['voix active','voix passive','complément d’agent','sujet','transformation','auxiliaire être'],
  contenu:{
    objectifs:['Distinguer voix active et passive.','Transformer une phrase d’une voix à l’autre.'],
    notions:[
      {terme:'Voix active', def:'le sujet fait l’action (« le chat mange la souris »).'},
      {terme:'Voix passive', def:'le sujet subit l’action (« la souris est mangée par le chat »).'},
      {terme:'Complément d’agent', def:'celui qui fait réellement l’action, introduit par « par » (parfois « de »).'}
    ],
    essentiel:'<p>À la <b>voix active</b>, le sujet <b>fait</b> l’action ; à la <b>voix passive</b>, le sujet <b>subit</b> l’action. La transformation suit une règle précise : le <b>COD</b> de la phrase active devient le <b>sujet</b> de la phrase passive, et le sujet actif devient le <b>complément d’agent</b> (introduit par « par »).</p><p>Le verbe passif se conjugue toujours avec l’auxiliaire <b>être</b>, au même temps que le verbe actif ; le participe passé s’accorde alors avec le sujet.</p>',
    exemple:'<p>Actif : « Le jury <b>récompense</b> l’élève. »<br>Passif : « L’élève <b>est récompensé</b> par le jury. »</p>',
    retenir:'Passif = <b>être + participe passé</b> (+ « par » pour l’agent). Le COD actif devient sujet ; le participe passé s’accorde avec le sujet.'
  }
},
{
  id:'fr-types-phrases', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Les types et formes de phrases',
  motsCles:['déclarative','interrogative','exclamative','injonctive','négation','forme affirmative','ponctuation'],
  contenu:{
    objectifs:['Reconnaître les types de phrases.','Maîtriser la forme négative.'],
    notions:[
      {terme:'Types de phrases', def:'déclarative (.), interrogative ( ?), exclamative ( !), injonctive (ordre/conseil).'},
      {terme:'Formes', def:'affirmative ou négative. La négation encadre le verbe : ne… pas, ne… jamais, ne… plus, ne… rien, ne… personne.'}
    ],
    essentiel:'<p>Chaque phrase possède un <b>type</b> (selon son but : affirmer, interroger, s’exclamer, ordonner) et une <b>forme</b> (affirmative ou négative). Ces deux notions sont indépendantes : une phrase peut cumuler plusieurs caractéristiques (injonctive + négative + exclamative).</p><p>À l’écrit, la <b>négation</b> comporte deux mots (« ne… pas »), et l’oubli du « ne » est une faute fréquente. Bien ponctuer selon le type est aussi important (point d’interrogation pour une question, etc.).</p>',
    exemple:'<p>« Viens ici. » (injonctive) ; « Ne bouge pas ! » (injonctive, négative, exclamative) ; « Où vas-tu ? » (interrogative).</p>',
    retenir:'Ne pas confondre <b>type</b> (but) et <b>forme</b> (affirmatif/négatif). À l’écrit, la négation a <b>deux mots</b> : ne pas oublier le « ne ».'
  }
},
{
  id:'fr-groupe-nominal', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le groupe nominal et ses expansions',
  motsCles:['groupe nominal','épithète','complément du nom','proposition relative','déterminant','expansion','nom noyau'],
  contenu:{
    objectifs:['Identifier le nom noyau et ses expansions.','Enrichir un groupe nominal.'],
    notions:[
      {terme:'Nom noyau', def:'le nom principal autour duquel s’organise le groupe.'},
      {terme:'Épithète', def:'adjectif qualificatif qui qualifie directement le nom (« un chat noir »).'},
      {terme:'Complément du nom', def:'introduit par une préposition (« un chat de gouttière »).'},
      {terme:'Proposition subordonnée relative', def:'introduite par qui, que, dont, où (« le chat qui dort »).'}
    ],
    essentiel:'<p>Le <b>groupe nominal</b> s’organise autour d’un <b>nom noyau</b>. Autour de lui, on peut ajouter des <b>expansions</b> qui précisent son sens : l’adjectif <b>épithète</b> (directement lié au nom), le <b>complément du nom</b> (introduit par une préposition : de, à, en…) et la <b>proposition relative</b> (introduite par qui, que, dont, où).</p><p>Reconnaître ces expansions permet d’analyser une phrase, mais aussi d’<b>enrichir</b> ses propres textes en rédaction, pour éviter des phrases trop pauvres.</p>',
    exemple:'<p>« Un grand livre de contes qui fascine les enfants » : <b>grand</b> (épithète) + <b>de contes</b> (complément du nom) + <b>qui fascine les enfants</b> (relative).</p>',
    retenir:'Trois expansions du nom : <b>épithète</b>, <b>complément du nom</b>, <b>relative</b>. Toutes se rapportent au nom noyau.'
  }
},
{
  id:'fr-lexique', matiereKey:'francais', matiere:'Français', niveau:'5e',
  titre:'Le lexique : sens, champ lexical, formation des mots',
  motsCles:['sens propre','sens figuré','champ lexical','synonyme','antonyme','préfixe','suffixe','radical'],
  contenu:{
    objectifs:['Distinguer sens propre et figuré.','Analyser la formation d’un mot.','Repérer un champ lexical.'],
    notions:[
      {terme:'Sens propre / figuré', def:'sens premier et concret / sens imagé.'},
      {terme:'Champ lexical', def:'ensemble de mots se rapportant à un même thème.'},
      {terme:'Formation des mots', def:'radical + préfixe (avant) + suffixe (après).'},
      {terme:'Synonyme / antonyme', def:'mot de sens proche / mot de sens contraire.'}
    ],
    essentiel:'<p>Un mot peut être employé au <b>sens propre</b> (concret, premier) ou au <b>sens figuré</b> (imagé). Le <b>champ lexical</b> d’un texte (ensemble des mots liés à un même thème) permet d’en repérer le <b>thème</b> et l’<b>atmosphère</b> — un outil très utile pour la compréhension.</p><p>La <b>formation des mots</b> aide à comprendre leur sens : un mot est construit à partir d’un <b>radical</b>, auquel on ajoute un <b>préfixe</b> (devant) et/ou un <b>suffixe</b> (derrière). Repérer ces éléments permet de deviner le sens d’un mot inconnu.</p>',
    exemple:'<p>« Dévisser » = préfixe <b>dé-</b> + radical <b>viss-</b> + suffixe <b>-er</b>.<br>« Une mer de sable » = sens <b>figuré</b>. Champ lexical de la peur : « angoisse, trembler, cri, ombre ».</p>',
    retenir:'Repérer un <b>champ lexical</b> révèle le <b>thème</b> et le <b>ton</b>. Un mot = <b>radical</b> + préfixe (avant) + suffixe (après).'
  }
},
{
  id:'fr-point-de-vue', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le narrateur et les points de vue',
  motsCles:['narrateur','point de vue','focalisation','interne','externe','omniscient','récit'],
  contenu:{
    objectifs:['Identifier le type de narrateur.','Reconnaître le point de vue (focalisation).'],
    notions:[
      {terme:'Narrateur', def:'celui qui raconte ; il peut être un personnage (récit à la 1ʳᵉ personne) ou extérieur à l’histoire (3ᵉ personne).'},
      {terme:'Point de vue interne', def:'on voit à travers les yeux d’un personnage (ses pensées, ses sensations).'},
      {terme:'Point de vue externe', def:'on voit seulement de l’extérieur, comme une caméra, sans accès aux pensées.'},
      {terme:'Point de vue omniscient', def:'le narrateur sait tout de tous les personnages (pensées, passé, avenir).'}
    ],
    essentiel:'<p>Il faut distinguer le <b>narrateur</b> (qui raconte) du <b>point de vue</b> (ce que l’on voit et sait). Le choix du point de vue oriente ce que le lecteur apprend, et crée des effets : du <b>suspense</b> (on ignore ce que sait un personnage), de l’<b>identification</b> (on partage ses émotions) ou de la <b>distance</b>.</p><p>On repère le point de vue grâce aux <b>verbes de perception et de pensée</b> : s’ils révèlent l’intérieur d’un personnage, le point de vue est <b>interne</b> ; si le narrateur sait tout de tous, il est <b>omniscient</b> ; s’il décrit seulement l’extérieur, il est <b>externe</b>.</p>',
    exemple:'<p>« Il ignorait ce qui l’attendait » → point de vue <b>interne</b>.<br>« Un homme entra ; personne ne savait qui il était » → point de vue <b>externe</b>.</p>',
    retenir:'Omniscient = <b>sait tout</b> ; interne = <b>un seul regard</b> (pensées d’un personnage) ; externe = <b>vue extérieure</b> sans les pensées.'
  }
},
{
  id:'fr-registres', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les registres (tonalités) d’un texte',
  motsCles:['registre','comique','tragique','pathétique','épique','lyrique','fantastique','ton'],
  contenu:{
    objectifs:['Identifier le registre d’un texte.','Relier registre et émotion produite.'],
    notions:[
      {terme:'Comique', def:'fait rire (jeux de mots, situations, exagérations).'},
      {terme:'Tragique', def:'évoque la fatalité, la mort, un destin inévitable.'},
      {terme:'Pathétique', def:'suscite la pitié, l’émotion, la souffrance.'},
      {terme:'Épique', def:'exagère pour glorifier un héros ou un exploit.'},
      {terme:'Lyrique', def:'exprime des sentiments personnels (amour, tristesse, joie).'}
    ],
    essentiel:'<p>Le <b>registre</b> (ou tonalité) est l’<b>émotion</b> que le texte cherche à provoquer chez le lecteur. Un même thème (par exemple la mort) peut être traité sur un ton comique, tragique ou pathétique selon l’effet recherché.</p><p>On identifie le registre grâce au <b>vocabulaire</b> et aux <b>procédés</b> employés : champ lexical de la souffrance pour le pathétique, exagérations et vocabulaire héroïque pour l’épique, expression du « je » et des sentiments pour le lyrique.</p>',
    exemple:'<p>Un combat raconté avec des exagérations et un héros surhumain → registre <b>épique</b>.<br>Un poème sur un chagrin d’amour → registre <b>lyrique</b>.</p>',
    retenir:'Le registre = l’<b>effet émotionnel</b> recherché (rire, pitié, peur, admiration…). On le repère au vocabulaire et aux procédés.'
  }
},
{
  id:'fr-autobiographie', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’autobiographie',
  motsCles:['autobiographie','récit de soi','première personne','pacte autobiographique','mémoires','souvenir','je'],
  contenu:{
    objectifs:['Définir l’autobiographie.','Repérer ses marques d’écriture.'],
    notions:[
      {terme:'Autobiographie', def:'récit de sa propre vie, écrit par l’auteur lui-même.'},
      {terme:'Pacte autobiographique', def:'l’auteur, le narrateur et le personnage principal sont une seule et même personne.'},
      {terme:'Marques d’écriture', def:'emploi du « je », temps du passé, souvenirs, émotions, regard rétrospectif sur soi.'}
    ],
    essentiel:'<p>Dans une <b>autobiographie</b>, l’auteur raconte <b>sa propre vie</b> à la première personne. Ce qui la distingue de la fiction, c’est le <b>pacte autobiographique</b> : l’auteur, le narrateur et le personnage principal sont la <b>même personne</b>.</p><p>On la reconnaît à plusieurs marques : l’emploi du « <b>je</b> », les temps du <b>passé</b>, l’évocation de <b>souvenirs</b> et d’<b>émotions</b>, et un regard rétrospectif de l’adulte sur son passé. Il ne faut pas la confondre avec la <b>biographie</b> (récit de la vie d’une autre personne).</p>',
    exemple:'<p>« Je me souviens de la maison où je suis né… » : emploi du « je », souvenir d’enfance, temps du passé.</p>',
    retenir:'Autobiographie : <b>auteur = narrateur = personnage</b>, récit à la <b>1ʳᵉ personne</b> de sa propre vie. À distinguer de la biographie.'
  }
}
]);
