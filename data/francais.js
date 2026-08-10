window.FICHES = (window.FICHES || []).concat([
{
  id:'fr-phrase-complexe', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'La phrase complexe et la subordination',
  motsCles:['proposition','subordonnée','juxtaposition','coordination','conjonction','relative','conjonctive','complexe'],
  contenu:{
    objectifs:['Distinguer phrase simple et phrase complexe.','Reconnaître juxtaposition, coordination et subordination.','Identifier le type de subordonnée.'],
    notions:[
      {terme:'Phrase simple', def:'une seule proposition, donc un seul verbe conjugué.'},
      {terme:'Phrase complexe', def:'plusieurs propositions, donc plusieurs verbes conjugués.'},
      {terme:'Juxtaposition', def:'propositions séparées par une virgule, un point-virgule ou deux-points.'},
      {terme:'Coordination', def:'propositions reliées par une conjonction de coordination : mais, ou, et, donc, or, ni, car.'},
      {terme:'Subordination', def:'une proposition (subordonnée) dépend d’une autre (principale), introduite par un mot subordonnant (que, qui, quand, parce que, si…).'}
    ],
    essentiel:'<p>On compte les <b>verbes conjugués</b> : autant de propositions. Elles sont <b>juxtaposées</b>, <b>coordonnées</b> (même niveau) ou <b>subordonnées</b> (dépendance). Types de subordonnées : <b>relative</b> (introduite par qui, que, dont, où), <b>conjonctive</b> (par « que » après un verbe, ou par une conjonction : parce que, quand, si…).</p>',
    exemple:'<p>« Je révise <b>parce que</b> le brevet approche. » → subordonnée conjonctive circonstancielle de cause.<br>« Le livre <b>que</b> je lis est passionnant. » → subordonnée relative (complète le nom « livre »).</p>',
    retenir:'Une subordonnée ne peut <b>pas exister seule</b> : elle complète la principale. Repère le <b>mot subordonnant</b> pour identifier son type.'
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
      {terme:'Classes invariables', def:'adverbe, préposition, conjonction, interjection : ils ne changent jamais.'},
      {terme:'Nature vs fonction', def:'la nature est fixe (donnée par le dictionnaire) ; la fonction dépend du rôle dans la phrase.'}
    ],
    essentiel:'<p>Chaque mot appartient à une <b>classe grammaticale</b> (sa nature). C’est la base de toute analyse : on ne confond pas la <b>nature</b> (« qu’est-ce que c’est ? ») avec la <b>fonction</b> (« à quoi ça sert dans la phrase ? »).</p>',
    exemple:'<p>« Le petit chat dort tranquillement » : <b>Le</b> (déterminant), <b>petit</b> (adjectif), <b>chat</b> (nom), <b>dort</b> (verbe), <b>tranquillement</b> (adverbe).</p>',
    retenir:'Nature = <b>toujours la même</b> (dictionnaire) ; fonction = <b>dépend de la phrase</b>. Un même mot peut avoir des fonctions différentes.'
  }
},
{
  id:'fr-fonctions', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Les fonctions dans la phrase',
  motsCles:['sujet','cod','coi','attribut','complément circonstanciel','épithète','fonction'],
  contenu:{
    objectifs:['Identifier les fonctions liées au verbe.','Distinguer COD, COI et compléments circonstanciels.'],
    notions:[
      {terme:'Sujet', def:'fait ou subit l’action (« qui est-ce qui… ? »). Il commande l’accord du verbe.'},
      {terme:'COD', def:'complète le verbe sans préposition (« qui ? quoi ? » après le verbe).'},
      {terme:'COI', def:'complète le verbe avec une préposition (« à qui ? de quoi ? »).'},
      {terme:'Attribut du sujet', def:'donne une qualité au sujet, après un verbe d’état (être, sembler, paraître…).'},
      {terme:'Complément circonstanciel', def:'temps, lieu, manière, cause… : déplaçable et souvent supprimable.'}
    ],
    essentiel:'<p>La <b>fonction</b> décrit le <b>rôle</b> d’un mot. Les compléments <b>essentiels</b> (COD, COI) ne se déplacent pas et ne se suppriment pas ; les <b>circonstanciels</b> sont mobiles et supprimables.</p>',
    exemple:'<p>« Hier, Léa offre un livre à son frère. » → <b>Hier</b> (CC temps), <b>Léa</b> (sujet), <b>un livre</b> (COD), <b>à son frère</b> (COI).<br>« Ce chien semble <b>fatigué</b> » → attribut du sujet.</p>',
    retenir:'COD/COI = <b>on ne peut pas les enlever</b> ni les déplacer ; CC = <b>déplaçable et supprimable</b>. Attribut = après un verbe d’état.'
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
      {terme:'Passé composé', def:'action passée achevée, en lien avec le présent (récits à l’oral, lettres).'},
      {terme:'Plus-que-parfait', def:'action antérieure à une autre action passée.'}
    ],
    essentiel:'<p>Dans un <b>récit au passé</b>, l’<b>imparfait</b> plante le décor (« il faisait nuit ») et le <b>passé simple</b> raconte les actions (« soudain, un cri retentit »). Le <b>plus-que-parfait</b> exprime ce qui s’est passé <b>avant</b>.</p>',
    exemple:'<p>« Il <b>faisait</b> nuit (imparfait) quand un cri <b>retentit</b> (passé simple). Il <b>avait fermé</b> (plus-que-parfait) la porte une heure plus tôt. »</p>',
    retenir:'Imparfait = <b>décor / durée / habitude</b> ; passé simple = <b>action soudaine et brève</b> ; plus-que-parfait = <b>action encore avant</b>.'
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
      {terme:'Participe passé avec avoir', def:'il s’accorde avec le COD seulement s’il est placé AVANT le verbe (« les fleurs que j’ai cueillies »).'},
      {terme:'Homophones à tester', def:'a/à (→ avait) ; et/est (→ était) ; son/sont (→ étaient) ; on/ont (→ avaient) ; ces/ses ; ou/où ; ce/se.'}
    ],
    essentiel:'<p>La plupart des fautes de <b>dictée</b> viennent des <b>accords</b> et des <b>homophones</b>. Astuce : on <b>remplace par l’imparfait</b> pour trancher (a→avait, est→était, ont→avaient).</p>',
    exemple:'<p>« Il <b>a</b> (avait) mangé » ≠ « Il va <b>à</b> l’école ».<br>« Elles <b>sont</b> (étaient) prêtes » ≠ « <b>son</b> sac ».<br>« Les lettres qu’il a <b>écrites</b> » (COD « qu’ » placé avant → accord).</p>',
    retenir:'Avec <b>avoir</b> : accord seulement si le COD est <b>avant</b>. Pour les homophones : <b>remplace par l’imparfait</b> pour vérifier.'
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
      {terme:'Métaphore', def:'comparaison SANS outil de comparaison.'},
      {terme:'Personnification', def:'attribue des traits humains à une chose, un animal ou une idée.'},
      {terme:'Hyperbole', def:'exagération pour frapper l’esprit.'},
      {terme:'Antithèse', def:'oppose deux mots ou deux idées.'},
      {terme:'Gradation', def:'énumération en intensité croissante (ou décroissante).'}
    ],
    essentiel:'<p>Les figures de style créent des <b>images</b> et des <b>effets</b>. Au brevet, il faut savoir les <b>nommer</b> ET expliquer l’<b>effet produit</b> sur le lecteur (insister, embellir, opposer, exagérer…).</p>',
    exemple:'<p>« Cet homme est un lion » → <b>métaphore</b> (courage, force).<br>« Fort comme un lion » → <b>comparaison</b> (outil : comme).<br>« Le vent hurlait » → <b>personnification</b>.</p>',
    retenir:'Toujours associer la figure à son <b>effet</b>. Différence clé : <b>comparaison</b> a un outil (comme…), la <b>métaphore</b> non.'
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
    essentiel:'<p>La plupart des récits suivent ces <b>5 étapes</b>. Elles aident à <b>comprendre</b> un texte et à <b>rédiger</b> une histoire cohérente. À ne pas confondre avec le <b>schéma actanciel</b> (les rôles : héros, adjuvants, opposants).</p>',
    exemple:'<p>Conte : un roi vit heureux (initiale) → un dragon attaque (perturbateur) → combats et épreuves (péripéties) → le héros tue le dragon (dénouement) → le royaume retrouve la paix (finale).</p>',
    retenir:'L’élément perturbateur <b>déclenche</b> l’action ; il est souvent marqué par « <b>soudain</b> », « <b>un jour</b> ».'
  }
},
{
  id:'fr-discours-rapporte', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les paroles rapportées (discours direct/indirect)',
  motsCles:['discours direct','discours indirect','discours indirect libre','ponctuation du dialogue','verbe de parole'],
  contenu:{
    objectifs:['Distinguer discours direct et indirect.','Transposer de l’un à l’autre.'],
    notions:[
      {terme:'Discours direct', def:'les paroles telles quelles, avec guillemets/tirets, verbe de parole et ponctuation expressive.'},
      {terme:'Discours indirect', def:'les paroles intégrées au récit dans une subordonnée (« il dit que… »).'},
      {terme:'Transposition', def:'on modifie les pronoms (je→il), les temps (présent→imparfait) et les marqueurs de temps (demain→le lendemain).'}
    ],
    essentiel:'<p>Le <b>discours direct</b> rend le dialogue vivant ; le <b>discours indirect</b> l’intègre au récit. Passer de l’un à l’autre exige de changer <b>pronoms</b>, <b>temps</b> et parfois la <b>ponctuation</b>.</p>',
    exemple:'<p>Direct : Il dit : « <b>Je</b> pars <b>demain</b>. »<br>Indirect : Il dit qu’<b>il</b> partait <b>le lendemain</b>.</p>',
    retenir:'Discours direct = <b>ponctuation forte</b> (guillemets, tirets) ; indirect = <b>subordonnée</b> introduite par « que » + changement des pronoms/temps.'
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
      {terme:'Le « e » muet', def:'ne se compte pas en fin de vers ; se compte s’il est entre deux consonnes prononcées.'},
      {terme:'Rimes', def:'plates/suivies (AABB), croisées (ABAB), embrassées (ABBA).'},
      {terme:'Strophes', def:'tercet = 3 vers, quatrain = 4 vers. Un sonnet = 2 quatrains + 2 tercets.'}
    ],
    essentiel:'<p>La poésie joue sur les <b>sons</b> et le <b>rythme</b>. On compte les <b>syllabes</b> (attention au « e » muet), on identifie les <b>rimes</b> et leur disposition, et on analyse les <b>images</b> (comparaisons, métaphores).</p>',
    exemple:'<p>« Demain, dès l’aube… » : compter les syllabes De-main-dès-l’au-be → le « e » de « aube » ne compte pas en fin de groupe.</p>',
    retenir:'Le « e » en fin de vers <b>ne compte pas</b>. Un <b>sonnet</b> = 14 vers (2 quatrains + 2 tercets), souvent en alexandrins.'
  }
},
{
  id:'fr-theatre', matiereKey:'francais', matiere:'Français', niveau:'4e',
  titre:'Le théâtre',
  motsCles:['réplique','tirade','monologue','didascalie','acte','scène','comédie','tragédie','double énonciation'],
  contenu:{
    objectifs:['Connaître le vocabulaire du théâtre.','Distinguer comédie et tragédie.'],
    notions:[
      {terme:'Didascalie', def:'indication scénique (décor, gestes, ton) donnée par l’auteur, hors dialogue.'},
      {terme:'Réplique / tirade', def:'ce que dit un personnage ; une longue réplique s’appelle une tirade.'},
      {terme:'Monologue', def:'un personnage seul se parle à lui-même (ou au public).'},
      {terme:'Double énonciation', def:'les paroles s’adressent à la fois à un personnage ET au spectateur.'},
      {terme:'Aparté', def:'parole que seul le spectateur est censé entendre.'}
    ],
    essentiel:'<p>Un texte de théâtre est fait pour être <b>joué</b> ; il se découpe en <b>actes</b> et <b>scènes</b>. Les <b>didascalies</b> guident la mise en scène. La <b>comédie</b> fait rire et corrige les mœurs ; la <b>tragédie</b> montre un destin funeste.</p>',
    exemple:'<p>Molière écrit des <b>comédies</b> qui critiquent les défauts humains (l’hypocrisie dans <i>Tartuffe</i>, l’avarice dans <i>L’Avare</i>).</p>',
    retenir:'Comédie = rire + critique des mœurs ; tragédie = fatalité et mort. Repère les <b>didascalies</b> (souvent en italique).'
  }
},
{
  id:'fr-argumentation', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’argumentation',
  motsCles:['thèse','argument','exemple','connecteur logique','convaincre','persuader','réfuter','opinion'],
  contenu:{
    objectifs:['Construire un raisonnement argumenté.','Utiliser des connecteurs logiques.'],
    notions:[
      {terme:'Thèse', def:'l’opinion défendue.'},
      {terme:'Argument', def:'une idée qui soutient la thèse.'},
      {terme:'Exemple', def:'un cas concret qui illustre l’argument.'},
      {terme:'Connecteurs logiques', def:'d’abord, ensuite, de plus, en effet, cependant, donc, par conséquent.'},
      {terme:'Convaincre / persuader', def:'convaincre = par la raison et les arguments ; persuader = par les émotions.'}
    ],
    essentiel:'<p>Argumenter, c’est <b>défendre une thèse</b> avec des <b>arguments</b> illustrés d’<b>exemples</b>, organisés par des <b>connecteurs logiques</b>. On peut aussi <b>réfuter</b> la thèse adverse.</p>',
    exemple:'<p>Thèse : lire est utile. Argument : cela enrichit le vocabulaire. Exemple : on mémorise l’orthographe des mots rencontrés souvent. Connecteur : « <b>en effet</b> ».</p>',
    retenir:'Un bon paragraphe = <b>1 argument + 1 exemple</b>, introduit par un connecteur logique.'
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
    essentiel:'<p>À l’écrit, tu choisis entre <b>imagination</b> et <b>réflexion</b>. Dans les deux cas : <b>brouillon</b>, <b>plan</b>, paragraphes organisés, et surtout une <b>relecture</b> orthographe/ponctuation — car avec le nouveau barème, la <b>qualité de la langue</b> compte beaucoup.</p>',
    methode:[
      'Analyse le sujet : consignes, temps demandé, longueur.',
      'Fais un brouillon d’idées, puis un plan.',
      'Rédige en soignant connecteurs et paragraphes.',
      'Relis : accords, participes passés, ponctuation, répétitions.'
    ],
    retenir:'Garde <b>10 minutes</b> pour la <b>relecture</b> : c’est ce qui rapporte le plus de points au nouveau barème.'
  }
},
{
  id:'fr-realisme', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le récit réaliste (XIXᵉ siècle)',
  motsCles:['réalisme','naturalisme','Balzac','Maupassant','Zola','description','société','portrait'],
  contenu:{
    objectifs:['Connaître les caractéristiques du réalisme.','Analyser une description réaliste.'],
    notions:[
      {terme:'Réalisme', def:'mouvement du XIXᵉ siècle qui peint la société telle qu’elle est, sans l’idéaliser.'},
      {terme:'Auteurs', def:'Balzac, Flaubert, Maupassant ; Zola pour le naturalisme (une version « scientifique » du réalisme).'},
      {terme:'Procédés', def:'descriptions précises, détails concrets, milieux sociaux variés, vocabulaire du quotidien.'}
    ],
    essentiel:'<p>Le <b>réalisme</b> cherche à représenter fidèlement la vie quotidienne et la <b>société</b> (travail, argent, classes sociales). Les <b>descriptions</b> et <b>portraits</b> sont détaillés : les objets et les lieux traduisent le milieu social des personnages.</p>',
    exemple:'<p>Dans <i>La Peau de chagrin</i> (Balzac), la description des lieux et des objets révèle la condition sociale des personnages.</p>',
    retenir:'Réalisme = <b>miroir de la société</b>. Observe les <b>détails concrets</b> d’une description et explique ce qu’ils révèlent.'
  }
},
{
  id:'fr-modes', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Les modes verbaux (conditionnel, subjonctif, impératif)',
  motsCles:['mode','conditionnel','subjonctif','impératif','indicatif','ordre','hypothèse','souhait'],
  contenu:{
    objectifs:['Distinguer les modes et leurs valeurs.','Employer le bon mode selon le sens.'],
    notions:[
      {terme:'Indicatif', def:'mode du réel, des faits certains.'},
      {terme:'Conditionnel', def:'mode de l’hypothèse, de l’imaginaire, du souhait ou de la politesse (« je voudrais »).'},
      {terme:'Subjonctif', def:'mode du souhait, de l’ordre, du doute ; souvent après « que » (« il faut que tu viennes »).'},
      {terme:'Impératif', def:'mode de l’ordre et du conseil, sans sujet exprimé (« viens ! »).'}
    ],
    essentiel:'<p>Le <b>mode</b> traduit la façon de présenter l’action : <b>réelle</b> (indicatif), <b>envisagée</b> (conditionnel, subjonctif) ou <b>commandée</b> (impératif). Le conditionnel présent se forme sur le futur + terminaisons de l’imparfait.</p>',
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
    essentiel:'<p>À la <b>voix passive</b>, le COD de l’actif devient <b>sujet</b>, et le sujet de l’actif devient <b>complément d’agent</b> (introduit par « par »). Le verbe se conjugue avec l’auxiliaire <b>être</b>, au temps du verbe actif.</p>',
    exemple:'<p>Actif : « Le jury <b>récompense</b> l’élève. »<br>Passif : « L’élève <b>est récompensé</b> par le jury. »</p>',
    retenir:'Passif = <b>être + participe passé</b> (+ « par » pour l’agent). Le participe passé s’accorde avec le sujet.'
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
      {terme:'Formes', def:'affirmative ou négative. La négation encadre le verbe : ne… pas, ne… jamais, ne… plus, ne… rien.'}
    ],
    essentiel:'<p>Chaque phrase a un <b>type</b> (selon son but) et une <b>forme</b> (affirmative ou négative). Une phrase peut cumuler : par exemple injonctive ET négative ET exclamative.</p>',
    exemple:'<p>« Viens ici. » (injonctive) ; « Ne bouge pas ! » (injonctive, négative, exclamative) ; « Où vas-tu ? » (interrogative).</p>',
    retenir:'À l’écrit, ne pas oublier le « <b>ne</b> » : la négation a <b>deux mots</b>. Ne pas confondre <b>type</b> (but) et <b>forme</b> (affirmatif/négatif).'
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
    essentiel:'<p>Le <b>groupe nominal</b> s’organise autour d’un <b>nom noyau</b> qu’on enrichit par des <b>expansions</b> : adjectif <b>épithète</b>, <b>complément du nom</b> ou <b>proposition relative</b>. Elles précisent le sens du nom.</p>',
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
    essentiel:'<p>Un mot peut avoir un <b>sens propre</b> ou <b>figuré</b>. Le <b>champ lexical</b> révèle le <b>thème</b> d’un texte (et son atmosphère). Les mots se forment par <b>préfixes</b> et <b>suffixes</b> ajoutés à un <b>radical</b>.</p>',
    exemple:'<p>« Dévisser » = préfixe <b>dé-</b> + radical <b>viss-</b> + suffixe <b>-er</b>.<br>« Une mer de sable » = sens <b>figuré</b>. Champ lexical de la peur : « angoisse, trembler, cri, ombre ».</p>',
    retenir:'Repérer un <b>champ lexical</b> aide à trouver le <b>thème</b> et le <b>ton</b>. Préfixe = avant, suffixe = après le radical.'
  }
},
{
  id:'fr-point-de-vue', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'Le narrateur et les points de vue',
  motsCles:['narrateur','point de vue','focalisation','interne','externe','omniscient','récit'],
  contenu:{
    objectifs:['Identifier le type de narrateur.','Reconnaître le point de vue (focalisation).'],
    notions:[
      {terme:'Narrateur', def:'celui qui raconte ; il peut être un personnage (récit à la 1ʳᵉ personne) ou extérieur.'},
      {terme:'Point de vue interne', def:'on voit à travers les yeux d’un personnage (ses pensées, ses sensations).'},
      {terme:'Point de vue externe', def:'on voit seulement de l’extérieur, comme une caméra, sans accès aux pensées.'},
      {terme:'Point de vue omniscient', def:'le narrateur sait tout de tous les personnages (pensées, passé, futur).'}
    ],
    essentiel:'<p>Le <b>narrateur</b> choisit un <b>point de vue</b> (focalisation) qui oriente ce que le lecteur sait. Cela crée du <b>suspense</b>, de l’<b>identification</b> ou de la distance. On le repère grâce aux <b>verbes de perception et de pensée</b>.</p>',
    exemple:'<p>« Il ignorait ce qui l’attendait » → point de vue <b>interne</b>.<br>« Un homme entra ; personne ne savait qui il était » → point de vue <b>externe</b>.</p>',
    retenir:'Omniscient = <b>sait tout</b> ; interne = <b>un seul regard</b> ; externe = <b>vue extérieure</b> sans les pensées.'
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
      {terme:'Tragique', def:'fatalité, mort, destin inévitable.'},
      {terme:'Pathétique', def:'suscite la pitié, l’émotion, la souffrance.'},
      {terme:'Épique', def:'exagère pour glorifier un héros ou un exploit.'},
      {terme:'Lyrique', def:'exprime des sentiments personnels (amour, tristesse, joie).'}
    ],
    essentiel:'<p>Le <b>registre</b> (ou tonalité) est l’<b>émotion</b> que le texte cherche à provoquer. Un même thème peut être traité sur un ton comique, tragique, pathétique… On le repère au <b>vocabulaire</b> et aux <b>procédés</b> employés.</p>',
    exemple:'<p>Un combat raconté avec des exagérations et un héros surhumain → registre <b>épique</b>.<br>Un poème sur un chagrin d’amour → registre <b>lyrique</b>.</p>',
    retenir:'Le registre = l’<b>effet émotionnel</b> recherché sur le lecteur (rire, pitié, peur, admiration…).'
  }
},
{
  id:'fr-autobiographie', matiereKey:'francais', matiere:'Français', niveau:'3e',
  titre:'L’autobiographie',
  motsCles:['autobiographie','récit de soi','première personne','pacte autobiographique','mémoires','souvenir','je'],
  contenu:{
    objectifs:['Définir l’autobiographie.','Repérer ses marques d’écriture.'],
    notions:[
      {terme:'Autobiographie', def:'récit de sa propre vie par l’auteur lui-même.'},
      {terme:'Pacte autobiographique', def:'l’auteur, le narrateur et le personnage principal sont une seule et même personne.'},
      {terme:'Marques', def:'emploi du « je », temps du passé, souvenirs, émotions, regard rétrospectif.'}
    ],
    essentiel:'<p>Dans une <b>autobiographie</b>, l’auteur raconte <b>sa propre vie</b> à la première personne. Le <b>pacte autobiographique</b> le distingue de la fiction : auteur = narrateur = personnage. À ne pas confondre avec la <b>biographie</b> (vie d’une autre personne).</p>',
    exemple:'<p>« Je me souviens de la maison où je suis né… » : emploi du « je », souvenir d’enfance, temps du passé.</p>',
    retenir:'Autobiographie : <b>auteur = narrateur = personnage</b>, récit à la <b>1ʳᵉ personne</b>, regard sur son propre passé.'
  }
}
]);
