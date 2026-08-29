
(function(){
"use strict";

/* ---------- i18n ---------- */
const TR = {
nl: {
title:"Geboortekaartje",
subtitle:"Kondig een geboorte aan — kies een stijl, voeg tot 3 foto's toe, een gedichtje of eigen tekst, en laat het kaartje zelfs voorlezen.",
backLink:"← Terug naar Cartolina",
infoTitle:"Over deze geboortekaartjes",
infoBody:"Tien stijlen om uit te kiezen — vier voor een jongetje, vier voor een meisje en twee genderneutrale stijlen. Kies een voorgedrukt gedichtje of schrijf je eigen tekst, vul de gegevens in (naam is genoeg — datum, gewicht en lengte zijn leuk maar niet verplicht) en voeg tot drie foto's toe. Je kunt het kaartje ook laten voorlezen. En, geheel Nederlands: er wordt hier en daar gedacht aan een beschuitje met muisjes.",
frontTab:"Voorzijde", backTab:"Achterzijde",
catAll:"Alle", catBoy:"Jongen", catGirl:"Meisje", catNeutral:"Neutraal",
stijlHeading:"Stijl",
layoutNames:{j1:"Blauwe Wolkjes", j2:"Kleine Zeebonk", j3:"Beertje Blauw", j4:"Maan &amp; Sterren", m1:"Roze Wolkjes", m2:"Bloesem &amp; Vlinders", m3:"Vosje Perzik", m4:"Maan &amp; Sterren", n1:"Regenboog &amp; Zon", n2:"Botanisch Groen"},
gegevensHeading:"Gegevens", genderQuestion:"Is het een jongen of een meisje?", genderBoy:"Jongen", genderGirl:"Meisje",
lblName:"Naam", namePh:"Naam van de baby",
lblDate:"Geboortedatum (optioneel)",
lblWeight:"Gewicht in gram (optioneel)", weightPh:"bijv. 3400",
lblLength:"Lengte in cm (optioneel)", lengthPh:"bijv. 51",
muisjesLabel:"🐭 Beschuit met muisjes-motief toevoegen (achterzijde)",
tekstHeading:"Tekst", tekstHint:"Kies een voorgedrukte tekst, of schrijf je eigen tekst",
poemKlassiek:"Klassiek", poemSpeels:"Speels", poemSprookje:"Sprookjesachtig", poemKort:"Kort &amp; krachtig", poemEigen:"Eigen tekst",
lblCardText:"Tekst op het kaartje",
poems:{
klassiek:"Met grote vreugde en dankbaarheid\ngeven wij kennis van de geboorte\nvan onze {zoondochter}\n\n{NAAM}",
speels:"Tien vingertjes, tien teentjes klein,\nwat zullen we blij met {hemhaar} zijn!\n\nWelkom, lieve {NAAM}",
sprookje:"Er was eens... een klein geluk,\ndat viel zomaar uit de lucht.\nWelkom op deze mooie aarde,\n{NAAM}, wat ben je ons dierbaar!",
kort:"{NAAM}\nis er!"
},
gendered:{ zoondochter:{jongen:"zoon", meisje:"dochter"}, hemhaar:{jongen:"hem", meisje:"haar"} },
welcomeText:"WELKOM OP DE WERELD",
fotoHeading:"Foto's", addPhoto:"+ Foto toevoegen", photoHint:"Eén foto — verschijnt gedimd op de achtergrond van de voorzijde, met het motief en de naam erover.",
lblBrightness:"Helderheid van de foto", lblPracticalInfo:"Praktische informatie (optioneel)", practicalInfoPh:"bijv. mama en baby rusten thuis, bezoek na overleg — of: kraamafdeling, kamer 4, ingang B",
speakHeading:"Laten voorlezen", speakHint:"Alleen bij dit kaartje: laat de aankondiging en de tekst hardop voorlezen door je toestel.",
speakBtn:"🔊 Kaartje voorlezen", speakBtnStop:"⏹ Stop met voorlezen", speakUnsupported:"Voorlezen wordt niet ondersteund op dit toestel.", speakBusy:"Bezig met voorlezen…", speakFail:"Voorlezen mislukt.",
speakAnnounceSon:"Met trots geven wij kennis van de geboorte van onze zoon {NAAM}.",
speakAnnounceDaughter:"Met trots geven wij kennis van de geboorte van onze dochter {NAAM}.",
speakBornOn:"Geboren op {DATUM}.", speakWeight:"Gewicht: {GEWICHT} gram.", speakLength:"Lengte: {LENGTE} centimeter.",
sendHeading:"Versturen", lblWatermark:"Kleine copyright-vermelding op de kaart tonen",
exportBtn:"Opslaan als afbeelding", shareBtn:"Direct delen",
exportOk:"Voor- en achterzijde opgeslagen in je galerij.", exportFail:"Opslaan is niet gelukt.",
shareOk:"Deelvenster geopend.", shareFail:"Direct delen wordt niet ondersteund op dit toestel.",
printFail:"Kon niet doorschakelen naar de print-pagina. Probeer het nog eens.",
footerFree:"Gratis · niet-commercieel · ongewijzigd", footerLicense:"Licentie", licenseClose:"Sluiten",
licenseBody:"Dit hulpmiddel is gratis en mag vrij worden gedeeld, uitsluitend ongewijzigd en voor niet-commerciële doeleinden, met bronvermelding van de oorspronkelijke auteur. Commercieel gebruik, wijziging, verkoop of integratie in betaalde producten is uitdrukkelijk verboden zonder schriftelijke toestemming. Hulp is en blijft gratis.",
localeCode:"nl-NL", speechLang:"nl-NL"
},
en: {
title:"Birth Announcement",
subtitle:"Announce a new arrival — choose a style, add up to 3 photos, a verse or your own text, and even have the card read aloud.",
backLink:"← Back to Cartolina",
infoTitle:"About these birth announcement cards",
infoBody:"Ten styles to choose from — four for a boy, four for a girl, and two gender-neutral styles. Pick a preprinted verse or write your own text, fill in the details (a name is enough — date, weight and length are nice but not required) and add up to three photos. You can also have the card read aloud. And, a very Dutch touch: there's a nod here and there to 'beschuit met muisjes' (rusk with aniseed sprinkles), the traditional Dutch birth treat.",
frontTab:"Front", backTab:"Back",
catAll:"All", catBoy:"Boy", catGirl:"Girl", catNeutral:"Neutral",
stijlHeading:"Style",
layoutNames:{j1:"Blue Clouds", j2:"Little Sailor", j3:"Blue Teddy Bear", j4:"Moon &amp; Stars", m1:"Pink Clouds", m2:"Blossom &amp; Butterflies", m3:"Peach Fox", m4:"Moon &amp; Stars", n1:"Rainbow &amp; Sun", n2:"Botanical Green"},
gegevensHeading:"Details", genderQuestion:"Is it a boy or a girl?", genderBoy:"Boy", genderGirl:"Girl",
lblName:"Name", namePh:"Baby's name",
lblDate:"Date of birth (optional)",
lblWeight:"Weight in grams (optional)", weightPh:"e.g. 3400",
lblLength:"Length in cm (optional)", lengthPh:"e.g. 51",
muisjesLabel:"🐭 Add a 'beschuit met muisjes' motif (back)",
tekstHeading:"Text", tekstHint:"Choose a preprinted text, or write your own",
poemKlassiek:"Classic", poemSpeels:"Playful", poemSprookje:"Fairy-tale", poemKort:"Short &amp; sweet", poemEigen:"Own text",
lblCardText:"Text on the card",
poems:{
klassiek:"With great joy and gratitude\nwe announce the birth\nof our {zoondochter}\n\n{NAAM}",
speels:"Ten tiny fingers, ten tiny toes,\nhow happy we'll be with {hemhaar}!\n\nWelcome, dear {NAAM}",
sprookje:"Once upon a time... a small piece of happiness\nfell straight out of the sky.\nWelcome to this beautiful world,\n{NAAM}, how dear you already are to us!",
kort:"{NAAM}\nis here!"
},
gendered:{ zoondochter:{jongen:"son", meisje:"daughter"}, hemhaar:{jongen:"him", meisje:"her"} },
welcomeText:"WELCOME TO THE WORLD",
fotoHeading:"Photos", addPhoto:"+ Add photo", photoHint:"One photo — appears dimmed in the background of the front, with the motif and name over it.",
lblBrightness:"Photo brightness", lblPracticalInfo:"Practical information (optional)", practicalInfoPh:"e.g. mother and baby resting at home, visits by arrangement — or: maternity ward, room 4, entrance B",
speakHeading:"Read aloud", speakHint:"Only on this card: have the announcement and text read aloud by your device.",
speakBtn:"🔊 Read card aloud", speakBtnStop:"⏹ Stop reading", speakUnsupported:"Reading aloud isn't supported on this device.", speakBusy:"Reading aloud…", speakFail:"Reading aloud failed.",
speakAnnounceSon:"With great pride we announce the birth of our son {NAAM}.",
speakAnnounceDaughter:"With great pride we announce the birth of our daughter {NAAM}.",
speakBornOn:"Born on {DATUM}.", speakWeight:"Weight: {GEWICHT} grams.", speakLength:"Length: {LENGTE} centimetres.",
sendHeading:"Send", lblWatermark:"Show a small copyright note on the card",
exportBtn:"Save as image", shareBtn:"Share directly",
exportOk:"Front and back saved to your gallery.", exportFail:"Couldn't save.",
shareOk:"Share sheet opened.", shareFail:"Direct sharing isn't supported on this device.",
printFail:"Couldn't switch to the print page. Please try again.",
footerFree:"Free · non-commercial · unmodified", footerLicense:"License", licenseClose:"Close",
licenseBody:"This tool is free and may be shared freely, in unmodified form, for non-commercial purposes only, with attribution to the original author. Commercial use, modification, sale or integration into paid products is strictly prohibited without written consent. Help is and remains free.",
localeCode:"en-GB", speechLang:"en-GB"
},
it: {
title:"Biglietto di Nascita",
subtitle:"Annuncia una nascita — scegli uno stile, aggiungi fino a 3 foto, una poesia o un testo tuo, e fai persino leggere il biglietto ad alta voce.",
backLink:"← Torna a Cartolina",
infoTitle:"Su questi biglietti di nascita",
infoBody:"Dieci stili tra cui scegliere — quattro per un maschietto, quattro per una femminuccia e due stili neutri. Scegli un testo prestampato o scrivi il tuo, inserisci i dati (basta il nome — data, peso e lunghezza sono graditi ma non obbligatori) e aggiungi fino a tre foto. Puoi anche far leggere il biglietto ad alta voce. E, tocco tutto olandese: qua e là si pensa al 'beschuit met muisjes' (fetta biscottata con codette all'anice), il tradizionale dolcetto olandese per le nascite.",
frontTab:"Fronte", backTab:"Retro",
catAll:"Tutti", catBoy:"Maschio", catGirl:"Femmina", catNeutral:"Neutro",
stijlHeading:"Stile",
layoutNames:{j1:"Nuvolette Blu", j2:"Piccolo Marinaio", j3:"Orsetto Blu", j4:"Luna e Stelle", m1:"Nuvolette Rosa", m2:"Fiori e Farfalle", m3:"Volpina Pesca", m4:"Luna e Stelle", n1:"Arcobaleno e Sole", n2:"Verde Botanico"},
gegevensHeading:"Dati", genderQuestion:"È un maschietto o una femminuccia?", genderBoy:"Maschio", genderGirl:"Femmina",
lblName:"Nome", namePh:"Nome del bebè",
lblDate:"Data di nascita (facoltativo)",
lblWeight:"Peso in grammi (facoltativo)", weightPh:"es. 3400",
lblLength:"Lunghezza in cm (facoltativo)", lengthPh:"es. 51",
muisjesLabel:"🐭 Aggiungi un motivo 'beschuit met muisjes' (retro)",
tekstHeading:"Testo", tekstHint:"Scegli un testo prestampato, oppure scrivi il tuo",
poemKlassiek:"Classico", poemSpeels:"Giocoso", poemSprookje:"Fiabesco", poemKort:"Breve e diretto", poemEigen:"Testo personale",
lblCardText:"Testo sul biglietto",
poems:{
klassiek:"Con grande gioia e gratitudine\nannunciamo la nascita\ndi {zoondochter}\n\n{NAAM}",
speels:"Dieci piccole dita, dieci piedini,\nquanto saremo felici con {hemhaar}!\n\nBenvenuto/a, caro/a {NAAM}",
sprookje:"C'era una volta... una piccola felicità,\ncaduta proprio dal cielo.\n{welcome} in questo bel mondo,\n{NAAM}, quanto sei già il nostro tesoro!",
kort:"{NAAM}\nè qui!"
},
gendered:{ zoondochter:{jongen:"nostro figlio", meisje:"nostra figlia"}, hemhaar:{jongen:"lui", meisje:"lei"}, welcome:{jongen:"Benvenuto", meisje:"Benvenuta"} },
welcomeText:{jongen:"BENVENUTO NEL MONDO", meisje:"BENVENUTA NEL MONDO"},
fotoHeading:"Foto", addPhoto:"+ Aggiungi foto", photoHint:"Una foto — appare sfumata sullo sfondo del fronte, con il motivo e il nome sopra.",
lblBrightness:"Luminosità della foto", lblPracticalInfo:"Informazioni pratiche (facoltativo)", practicalInfoPh:"es. mamma e bebè riposano a casa, visite su appuntamento — oppure: reparto maternità, stanza 4, ingresso B",
speakHeading:"Lettura ad alta voce", speakHint:"Solo su questo biglietto: fai leggere l'annuncio e il testo ad alta voce dal tuo dispositivo.",
speakBtn:"🔊 Leggi il biglietto", speakBtnStop:"⏹ Interrompi lettura", speakUnsupported:"La lettura ad alta voce non è supportata su questo dispositivo.", speakBusy:"Lettura in corso…", speakFail:"Lettura non riuscita.",
speakAnnounceSon:"Con grande orgoglio annunciamo la nascita di nostro figlio {NAAM}.",
speakAnnounceDaughter:"Con grande orgoglio annunciamo la nascita di nostra figlia {NAAM}.",
speakBornOn:{jongen:"Nato il {DATUM}.", meisje:"Nata il {DATUM}."}, speakWeight:"Peso: {GEWICHT} grammi.", speakLength:"Lunghezza: {LENGTE} centimetri.",
sendHeading:"Invia", lblWatermark:"Mostra una piccola nota di copyright sul biglietto",
exportBtn:"Salva come immagine", shareBtn:"Condividi subito",
exportOk:"Fronte e retro salvati nella galleria.", exportFail:"Salvataggio non riuscito.",
shareOk:"Finestra di condivisione aperta.", shareFail:"La condivisione diretta non è supportata su questo dispositivo.",
printFail:"Impossibile passare alla pagina di stampa. Riprova.",
footerFree:"Gratuito · non commerciale · non modificato", footerLicense:"Licenza", licenseClose:"Chiudi",
licenseBody:"Questo strumento è gratuito e può essere condiviso liberamente, in forma non modificata, esclusivamente per scopi non commerciali, con attribuzione all'autore originale. L'uso commerciale, la modifica, la vendita o l'integrazione in prodotti a pagamento sono vietati senza consenso scritto. L'aiuto è e rimane gratuito.",
localeCode:"it-IT", speechLang:"it-IT"
},
fr: {
title:"Faire-part de Naissance",
subtitle:"Annonce une naissance — choisis un style, ajoute jusqu'à 3 photos, un poème ou ton propre texte, et fais même lire la carte à voix haute.",
backLink:"← Retour à Cartolina",
infoTitle:"À propos de ces faire-part de naissance",
infoBody:"Dix styles au choix — quatre pour un garçon, quatre pour une fille et deux styles neutres. Choisis un texte préimprimé ou écris le tien, indique les informations (le prénom suffit — la date, le poids et la taille sont appréciés mais pas obligatoires) et ajoute jusqu'à trois photos. Tu peux aussi faire lire la carte à voix haute. Et, touche bien néerlandaise : on pense ici et là au 'beschuit met muisjes' (biscotte aux petites graines d'anis colorées), la douceur traditionnelle néerlandaise pour fêter une naissance.",
frontTab:"Recto", backTab:"Verso",
catAll:"Tous", catBoy:"Garçon", catGirl:"Fille", catNeutral:"Neutre",
stijlHeading:"Style",
layoutNames:{j1:"Nuages Bleus", j2:"Petit Marin", j3:"Ourson Bleu", j4:"Lune et Étoiles", m1:"Nuages Roses", m2:"Fleurs et Papillons", m3:"Renarde Pêche", m4:"Lune et Étoiles", n1:"Arc-en-ciel et Soleil", n2:"Vert Botanique"},
gegevensHeading:"Informations", genderQuestion:"Est-ce un garçon ou une fille ?", genderBoy:"Garçon", genderGirl:"Fille",
lblName:"Prénom", namePh:"Prénom du bébé",
lblDate:"Date de naissance (facultatif)",
lblWeight:"Poids en grammes (facultatif)", weightPh:"p. ex. 3400",
lblLength:"Taille en cm (facultatif)", lengthPh:"p. ex. 51",
muisjesLabel:"🐭 Ajouter un motif 'beschuit met muisjes' (verso)",
tekstHeading:"Texte", tekstHint:"Choisis un texte préimprimé, ou écris le tien",
poemKlassiek:"Classique", poemSpeels:"Espiègle", poemSprookje:"Conte de fées", poemKort:"Court et efficace", poemEigen:"Texte personnel",
lblCardText:"Texte sur la carte",
poems:{
klassiek:"Avec grande joie et gratitude,\nnous annonçons la naissance\nde notre {zoondochter}\n\n{NAAM}",
speels:"Dix petits doigts, dix petits orteils,\ncomme nous serons heureux avec {hemhaar} !\n\nBienvenue, cher/chère {NAAM}",
sprookje:"Il était une fois... un petit bonheur\ntombé tout droit du ciel.\nBienvenue dans ce beau monde,\n{NAAM}, comme tu es déjà notre trésor !",
kort:"{NAAM}\nest là !"
},
gendered:{ zoondochter:{jongen:"fils", meisje:"fille"}, hemhaar:{jongen:"lui", meisje:"elle"} },
welcomeText:"BIENVENUE DANS CE MONDE",
fotoHeading:"Photos", addPhoto:"+ Ajouter une photo", photoHint:"Une photo — apparaît estompée en arrière-plan du recto, avec le motif et le prénom par-dessus.",
lblBrightness:"Luminosité de la photo", lblPracticalInfo:"Informations pratiques (facultatif)", practicalInfoPh:"p. ex. maman et bébé se reposent à la maison, visites sur rendez-vous — ou : maternité, chambre 4, entrée B",
speakHeading:"Lecture à voix haute", speakHint:"Uniquement sur cette carte : fais lire l'annonce et le texte à voix haute par ton appareil.",
speakBtn:"🔊 Lire la carte à voix haute", speakBtnStop:"⏹ Arrêter la lecture", speakUnsupported:"La lecture à voix haute n'est pas prise en charge sur cet appareil.", speakBusy:"Lecture en cours…", speakFail:"Échec de la lecture.",
speakAnnounceSon:"Avec grande fierté, nous annonçons la naissance de notre fils {NAAM}.",
speakAnnounceDaughter:"Avec grande fierté, nous annonçons la naissance de notre fille {NAAM}.",
speakBornOn:{jongen:"Né le {DATUM}.", meisje:"Née le {DATUM}."}, speakWeight:"Poids : {GEWICHT} grammes.", speakLength:"Taille : {LENGTE} centimètres.",
sendHeading:"Envoyer", lblWatermark:"Afficher une petite mention de copyright sur la carte",
exportBtn:"Enregistrer comme image", shareBtn:"Partager directement",
exportOk:"Recto et verso enregistrés dans ta galerie.", exportFail:"Échec de l'enregistrement.",
shareOk:"Fenêtre de partage ouverte.", shareFail:"Le partage direct n'est pas pris en charge sur cet appareil.",
printFail:"Impossible de passer à la page d'impression. Réessaie.",
footerFree:"Gratuit · non commercial · non modifié", footerLicense:"Licence", licenseClose:"Fermer",
licenseBody:"Cet outil est gratuit et peut être partagé librement, sous forme non modifiée, à des fins non commerciales uniquement, avec attribution à l'auteur original. Toute utilisation commerciale, modification, vente ou intégration dans des produits payants est strictement interdite sans autorisation écrite. L'aide est et reste gratuite.",
localeCode:"fr-FR", speechLang:"fr-FR"
},
de: {
title:"Geburtskarte",
subtitle:"Kündige eine Geburt an — wähle einen Stil, füge bis zu 3 Fotos hinzu, ein Gedicht oder deinen eigenen Text, und lass die Karte sogar vorlesen.",
backLink:"← Zurück zu Cartolina",
infoTitle:"Über diese Geburtskarten",
infoBody:"Zehn Stile zur Auswahl — vier für einen Jungen, vier für ein Mädchen und zwei geschlechtsneutrale Stile. Wähle einen vorgedruckten Text oder schreibe deinen eigenen, gib die Angaben ein (der Name genügt — Datum, Gewicht und Größe sind schön, aber nicht Pflicht) und füge bis zu drei Fotos hinzu. Du kannst die Karte auch vorlesen lassen. Und, ganz niederländisch: hier und da wird an 'beschuit met muisjes' gedacht (Zwieback mit bunten Anisstreuseln), die traditionelle niederländische Geburtsnascherei.",
frontTab:"Vorderseite", backTab:"Rückseite",
catAll:"Alle", catBoy:"Junge", catGirl:"Mädchen", catNeutral:"Neutral",
stijlHeading:"Stil",
layoutNames:{j1:"Blaue Wölkchen", j2:"Kleiner Seemann", j3:"Blauer Teddybär", j4:"Mond und Sterne", m1:"Rosa Wölkchen", m2:"Blüten und Schmetterlinge", m3:"Pfirsichfüchsin", m4:"Mond und Sterne", n1:"Regenbogen und Sonne", n2:"Botanisches Grün"},
gegevensHeading:"Angaben", genderQuestion:"Ist es ein Junge oder ein Mädchen?", genderBoy:"Junge", genderGirl:"Mädchen",
lblName:"Name", namePh:"Name des Babys",
lblDate:"Geburtsdatum (optional)",
lblWeight:"Gewicht in Gramm (optional)", weightPh:"z. B. 3400",
lblLength:"Größe in cm (optional)", lengthPh:"z. B. 51",
muisjesLabel:"🐭 'Beschuit met muisjes'-Motiv hinzufügen (Rückseite)",
tekstHeading:"Text", tekstHint:"Wähle einen vorgedruckten Text oder schreibe deinen eigenen",
poemKlassiek:"Klassisch", poemSpeels:"Verspielt", poemSprookje:"Märchenhaft", poemKort:"Kurz &amp; knackig", poemEigen:"Eigener Text",
lblCardText:"Text auf der Karte",
poems:{
klassiek:"Mit großer Freude und Dankbarkeit\ngeben wir die Geburt bekannt\n{zoondochter}\n\n{NAAM}",
speels:"Zehn kleine Finger, zehn kleine Zehen,\nwie glücklich werden wir mit {hemhaar} sein!\n\nWillkommen, liebe(r) {NAAM}",
sprookje:"Es war einmal... ein kleines Glück,\ndas einfach vom Himmel fiel.\nWillkommen auf dieser schönen Welt,\n{NAAM}, wie sehr du schon unser Schatz bist!",
kort:"{NAAM}\nist da!"
},
gendered:{ zoondochter:{jongen:"unseres Sohnes", meisje:"unserer Tochter"}, hemhaar:{jongen:"ihm", meisje:"ihr"} },
welcomeText:"WILLKOMMEN AUF DER WELT",
fotoHeading:"Fotos", addPhoto:"+ Foto hinzufügen", photoHint:"Ein Foto — erscheint abgedunkelt im Hintergrund der Vorderseite, mit dem Motiv und dem Namen darüber.",
lblBrightness:"Helligkeit des Fotos", lblPracticalInfo:"Praktische Informationen (optional)", practicalInfoPh:"z. B. Mutter und Baby ruhen zu Hause, Besuch nach Absprache — oder: Wochenbettstation, Zimmer 4, Eingang B",
speakHeading:"Vorlesen lassen", speakHint:"Nur bei dieser Karte: lass die Ankündigung und den Text von deinem Gerät vorlesen.",
speakBtn:"🔊 Karte vorlesen", speakBtnStop:"⏹ Vorlesen stoppen", speakUnsupported:"Vorlesen wird auf diesem Gerät nicht unterstützt.", speakBusy:"Wird vorgelesen…", speakFail:"Vorlesen fehlgeschlagen.",
speakAnnounceSon:"Mit großem Stolz geben wir die Geburt unseres Sohnes {NAAM} bekannt.",
speakAnnounceDaughter:"Mit großem Stolz geben wir die Geburt unserer Tochter {NAAM} bekannt.",
speakBornOn:"Geboren am {DATUM}.", speakWeight:"Gewicht: {GEWICHT} Gramm.", speakLength:"Größe: {LENGTE} Zentimeter.",
sendHeading:"Senden", lblWatermark:"Kleinen Copyright-Hinweis auf der Karte zeigen",
exportBtn:"Als Bild speichern", shareBtn:"Direkt teilen",
exportOk:"Vorder- und Rückseite in deiner Galerie gespeichert.", exportFail:"Speichern fehlgeschlagen.",
shareOk:"Teilen-Menü geöffnet.", shareFail:"Direktes Teilen wird auf diesem Gerät nicht unterstützt.",
printFail:"Konnte nicht zur Druckseite wechseln. Versuch es noch einmal.",
footerFree:"Kostenlos · nicht-kommerziell · unverändert", footerLicense:"Lizenz", licenseClose:"Schließen",
licenseBody:"Dieses Werkzeug ist kostenlos und darf frei geteilt werden, unverändert und ausschließlich für nicht-kommerzielle Zwecke, mit Namensnennung des ursprünglichen Autors. Kommerzielle Nutzung, Änderung, Verkauf oder Einbindung in kostenpflichtige Produkte ist ohne schriftliche Zustimmung ausdrücklich untersagt. Hilfe ist und bleibt kostenlos.",
localeCode:"de-DE", speechLang:"de-DE"
},
es: {
title:"Tarjeta de Nacimiento",
subtitle:"Anuncia un nacimiento — elige un estilo, añade hasta 3 fotos, un poema o tu propio texto, e incluso haz que lean la tarjeta en voz alta.",
backLink:"← Volver a Cartolina",
infoTitle:"Sobre estas tarjetas de nacimiento",
infoBody:"Diez estilos para elegir — cuatro para un niño, cuatro para una niña y dos estilos neutros. Elige un texto preimpreso o escribe el tuyo, rellena los datos (basta con el nombre — la fecha, el peso y la longitud son un detalle bonito pero no obligatorio) y añade hasta tres fotos. También puedes hacer que la tarjeta se lea en voz alta. Y, un toque muy neerlandés: aquí y allá se piensa en el 'beschuit met muisjes' (galleta tostada con virutas de anís de colores), el dulce tradicional neerlandés para celebrar un nacimiento.",
frontTab:"Anverso", backTab:"Reverso",
catAll:"Todos", catBoy:"Niño", catGirl:"Niña", catNeutral:"Neutro",
stijlHeading:"Estilo",
layoutNames:{j1:"Nubes Azules", j2:"Pequeño Marinero", j3:"Osito Azul", j4:"Luna y Estrellas", m1:"Nubes Rosas", m2:"Flores y Mariposas", m3:"Zorrita Melocotón", m4:"Luna y Estrellas", n1:"Arcoíris y Sol", n2:"Verde Botánico"},
gegevensHeading:"Datos", genderQuestion:"¿Es un niño o una niña?", genderBoy:"Niño", genderGirl:"Niña",
lblName:"Nombre", namePh:"Nombre del bebé",
lblDate:"Fecha de nacimiento (opcional)",
lblWeight:"Peso en gramos (opcional)", weightPh:"p. ej. 3400",
lblLength:"Longitud en cm (opcional)", lengthPh:"p. ej. 51",
muisjesLabel:"🐭 Añadir un motivo 'beschuit met muisjes' (reverso)",
tekstHeading:"Texto", tekstHint:"Elige un texto preimpreso, o escribe el tuyo",
poemKlassiek:"Clásico", poemSpeels:"Divertido", poemSprookje:"De cuento de hadas", poemKort:"Corto y directo", poemEigen:"Texto propio",
lblCardText:"Texto en la tarjeta",
poems:{
klassiek:"Con gran alegría y gratitud\nanunciamos el nacimiento\nde {zoondochter}\n\n{NAAM}",
speels:"Diez deditos de la mano, diez del pie,\n¡qué felices seremos con {hemhaar}!\n\nBienvenido/a, querido/a {NAAM}",
sprookje:"Érase una vez... una pequeña felicidad\nque cayó directamente del cielo.\n{welcome} a este hermoso mundo,\n{NAAM}, ¡cuánto eres ya nuestro tesoro!",
kort:"{NAAM}\n¡ya está aquí!"
},
gendered:{ zoondochter:{jongen:"nuestro hijo", meisje:"nuestra hija"}, hemhaar:{jongen:"él", meisje:"ella"}, welcome:{jongen:"Bienvenido", meisje:"Bienvenida"} },
welcomeText:{jongen:"BIENVENIDO AL MUNDO", meisje:"BIENVENIDA AL MUNDO"},
fotoHeading:"Fotos", addPhoto:"+ Añadir foto", photoHint:"Una foto — aparece atenuada en el fondo del anverso, con el motivo y el nombre encima.",
lblBrightness:"Brillo de la foto", lblPracticalInfo:"Información práctica (opcional)", practicalInfoPh:"p. ej. mamá y bebé descansan en casa, visitas con cita previa — o: planta de maternidad, habitación 4, entrada B",
speakHeading:"Leer en voz alta", speakHint:"Solo en esta tarjeta: haz que tu dispositivo lea el anuncio y el texto en voz alta.",
speakBtn:"🔊 Leer la tarjeta en voz alta", speakBtnStop:"⏹ Detener lectura", speakUnsupported:"La lectura en voz alta no es compatible con este dispositivo.", speakBusy:"Leyendo en voz alta…", speakFail:"La lectura ha fallado.",
speakAnnounceSon:"Con gran orgullo anunciamos el nacimiento de nuestro hijo {NAAM}.",
speakAnnounceDaughter:"Con gran orgullo anunciamos el nacimiento de nuestra hija {NAAM}.",
speakBornOn:{jongen:"Nacido el {DATUM}.", meisje:"Nacida el {DATUM}."}, speakWeight:"Peso: {GEWICHT} gramos.", speakLength:"Longitud: {LENGTE} centímetros.",
sendHeading:"Enviar", lblWatermark:"Mostrar una pequeña nota de copyright en la tarjeta",
exportBtn:"Guardar como imagen", shareBtn:"Compartir directamente",
exportOk:"Anverso y reverso guardados en tu galería.", exportFail:"No se pudo guardar.",
shareOk:"Ventana de compartir abierta.", shareFail:"Compartir directamente no es compatible con este dispositivo.",
printFail:"No se pudo cambiar a la página de impresión. Inténtalo de nuevo.",
footerFree:"Gratuito · no comercial · sin modificar", footerLicense:"Licencia", licenseClose:"Cerrar",
licenseBody:"Esta herramienta es gratuita y puede compartirse libremente, sin modificar y solo con fines no comerciales, con atribución al autor original. El uso comercial, la modificación, la venta o la integración en productos de pago están estrictamente prohibidos sin autorización escrita. La ayuda es y seguirá siendo gratuita.",
localeCode:"es-ES", speechLang:"es-ES"
},
uk: {
title:"Листівка про народження",
subtitle:"Оголоси про народження — обери стиль, додай до 3 фото, вірш або власний текст, і навіть дай листівці прочитати вголос.",
backLink:"← Назад до Cartolina",
infoTitle:"Про ці листівки про народження",
infoBody:"Десять стилів на вибір — чотири для хлопчика, чотири для дівчинки і два гендерно нейтральні стилі. Обери готовий текст або напиши власний, заповни дані (достатньо імені — дата, вага і зріст приємні, але не обов'язкові) і додай до трьох фото. Листівку можна також прослухати вголос. І, суто голландська деталь: подекуди згадується 'beschuit met muisjes' (сухарик з кольоровою анісовою посипкою) — традиційна голландська святкова страва з нагоди народження дитини.",
frontTab:"Лицьова сторона", backTab:"Зворотна сторона",
catAll:"Усі", catBoy:"Хлопчик", catGirl:"Дівчинка", catNeutral:"Нейтральний",
stijlHeading:"Стиль",
layoutNames:{j1:"Блакитні хмаринки", j2:"Маленький моряк", j3:"Блакитний ведмедик", j4:"Місяць і зорі", m1:"Рожеві хмаринки", m2:"Квіти й метелики", m3:"Персикова лисичка", m4:"Місяць і зорі", n1:"Веселка і сонце", n2:"Ботанічна зелень"},
gegevensHeading:"Дані", genderQuestion:"Хлопчик чи дівчинка?", genderBoy:"Хлопчик", genderGirl:"Дівчинка",
lblName:"Ім'я", namePh:"Ім'я малюка",
lblDate:"Дата народження (необов'язково)",
lblWeight:"Вага в грамах (необов'язково)", weightPh:"напр. 3400",
lblLength:"Зріст у см (необов'язково)", lengthPh:"напр. 51",
muisjesLabel:"🐭 Додати мотив 'beschuit met muisjes' (зворотна сторона)",
tekstHeading:"Текст", tekstHint:"Обери готовий текст або напиши власний",
poemKlassiek:"Класичний", poemSpeels:"Грайливий", poemSprookje:"Казковий", poemKort:"Коротко і по суті", poemEigen:"Власний текст",
lblCardText:"Текст на листівці",
poems:{
klassiek:"З великою радістю та вдячністю\nоголошуємо про народження\n{zoondochter}\n\n{NAAM}",
speels:"Десять маленьких пальчиків на руках, десять на ніжках,\nяк ми будемо щасливі з {hemhaar}!\n\nЛаскаво просимо, любий/люба {NAAM}",
sprookje:"Колись давно... трохи щастя\nупало просто з неба.\nЛаскаво просимо у цей чудовий світ,\n{NAAM}, яке ж ти вже для нас щастя!",
kort:"{NAAM}\nвже тут!"
},
gendered:{ zoondochter:{jongen:"нашого сина", meisje:"нашої доньки"}, hemhaar:{jongen:"ним", meisje:"нею"} },
welcomeText:"ЛАСКАВО ПРОСИМО У СВІТ",
fotoHeading:"Фото", addPhoto:"+ Додати фото", photoHint:"Одне фото — з'являється затемненим на фоні лицьової сторони, з мотивом та ім'ям поверх нього.",
lblBrightness:"Яскравість фото", lblPracticalInfo:"Практична інформація (необов'язково)", practicalInfoPh:"напр. мама і малюк відпочивають вдома, візити за домовленістю — або: пологове відділення, палата 4, вхід B",
speakHeading:"Прочитати вголос", speakHint:"Лише для цієї листівки: дай своєму пристрою прочитати оголошення й текст уголос.",
speakBtn:"🔊 Прочитати листівку", speakBtnStop:"⏹ Зупинити читання", speakUnsupported:"Читання вголос не підтримується на цьому пристрої.", speakBusy:"Читання вголос…", speakFail:"Не вдалося прочитати вголос.",
speakAnnounceSon:"З великою гордістю повідомляємо про народження нашого сина {NAAM}.",
speakAnnounceDaughter:"З великою гордістю повідомляємо про народження нашої доньки {NAAM}.",
speakBornOn:{jongen:"Народився {DATUM}.", meisje:"Народилася {DATUM}."}, speakWeight:"Вага: {GEWICHT} грамів.", speakLength:"Зріст: {LENGTE} сантиметрів.",
sendHeading:"Надіслати", lblWatermark:"Показати невеликий напис про авторські права на листівці",
exportBtn:"Зберегти як зображення", shareBtn:"Поділитися напряму",
exportOk:"Лицьову та зворотну сторони збережено в галереї.", exportFail:"Не вдалося зберегти.",
shareOk:"Вікно поширення відкрито.", shareFail:"Пряме поширення не підтримується на цьому пристрої.",
printFail:"Не вдалося перейти на сторінку друку. Спробуй ще раз.",
footerFree:"Безкоштовно · некомерційно · без змін", footerLicense:"Ліцензія", licenseClose:"Закрити",
licenseBody:"Цей інструмент безкоштовний і може вільно поширюватися в незмінному вигляді виключно з некомерційною метою, з посиланням на автора. Комерційне використання, зміна, продаж або інтеграція в платні продукти категорично заборонені без письмової згоди. Допомога є і залишається безкоштовною.",
localeCode:"uk-UA", speechLang:"uk-UA"
},
zh: {
title:"出生贺卡",
subtitle:"宣布喜讯——选择一种风格，添加最多3张照片、一首诗或自己的文字，还可以让贺卡朗读出来。",
backLink:"← 返回 Cartolina",
infoTitle:"关于这些出生贺卡",
infoBody:"十种风格可供选择——四种男孩风格，四种女孩风格，两种中性风格。选择预设文字，或写下自己的文字，填写信息（只需姓名即可——出生日期、体重和身长很不错，但不是必须的），并添加最多三张照片。你还可以让贺卡朗读出来。还有一个非常荷兰的小细节：这里悄悄提到了 'beschuit met muisjes'（撒了彩色茴香糖粒的干面包片），这是荷兰传统的报喜甜点。",
frontTab:"正面", backTab:"背面",
catAll:"全部", catBoy:"男孩", catGirl:"女孩", catNeutral:"中性",
stijlHeading:"风格",
layoutNames:{j1:"蓝色云朵", j2:"小小水手", j3:"蓝色小熊", j4:"月亮与星星", m1:"粉色云朵", m2:"花朵与蝴蝶", m3:"桃色小狐狸", m4:"月亮与星星", n1:"彩虹与太阳", n2:"植物绿意"},
gegevensHeading:"信息", genderQuestion:"是男孩还是女孩？", genderBoy:"男孩", genderGirl:"女孩",
lblName:"姓名", namePh:"宝宝的名字",
lblDate:"出生日期（可选）",
lblWeight:"体重，单位克（可选）", weightPh:"例如 3400",
lblLength:"身长，单位厘米（可选）", lengthPh:"例如 51",
muisjesLabel:"🐭 添加 'beschuit met muisjes' 图案（背面）",
tekstHeading:"文字", tekstHint:"选择预设文字，或写下自己的文字",
poemKlassiek:"经典", poemSpeels:"俏皮", poemSprookje:"童话风", poemKort:"简短有力", poemEigen:"自定义文字",
lblCardText:"贺卡上的文字",
poems:{
klassiek:"怀着无比的喜悦与感激\n我们宣布\n我们的{zoondochter}诞生了\n\n{NAAM}",
speels:"十个小手指，十个小脚趾，\n有{hemhaar}我们该多幸福！\n\n欢迎你，亲爱的{NAAM}",
sprookje:"从前……有一份小小的幸福，\n从天而降。\n欢迎来到这个美丽的世界，\n{NAAM}，你已经如此珍贵！",
kort:"{NAAM}\n到啦！"
},
gendered:{ zoondochter:{jongen:"儿子", meisje:"女儿"}, hemhaar:{jongen:"他", meisje:"她"} },
welcomeText:"欢迎来到这个世界",
fotoHeading:"照片", addPhoto:"+ 添加照片", photoHint:"一张照片——会以调暗的方式显示在正面背景中，图案和姓名叠加在上面。",
lblBrightness:"照片亮度", lblPracticalInfo:"实用信息（可选）", practicalInfoPh:"例如：妈妈和宝宝在家休养，探访请提前联系——或：产科病房，4号房，B入口",
speakHeading:"朗读", speakHint:"仅此贺卡支持：让你的设备大声朗读出生宣告和文字。",
speakBtn:"🔊 朗读贺卡", speakBtnStop:"⏹ 停止朗读", speakUnsupported:"此设备不支持朗读功能。", speakBusy:"正在朗读……", speakFail:"朗读失败。",
speakAnnounceSon:"我们无比自豪地宣布，我们的儿子{NAAM}出生了。",
speakAnnounceDaughter:"我们无比自豪地宣布，我们的女儿{NAAM}出生了。",
speakBornOn:"出生于{DATUM}。", speakWeight:"体重：{GEWICHT}克。", speakLength:"身长：{LENGTE}厘米。",
sendHeading:"发送", lblWatermark:"在贺卡上显示小版权说明",
exportBtn:"保存为图片", shareBtn:"直接分享",
exportOk:"正面和背面已保存到相册。", exportFail:"保存失败。",
shareOk:"分享窗口已打开。", shareFail:"此设备不支持直接分享。",
printFail:"无法跳转到打印页面，请重试。",
footerFree:"免费·非商业性质·未经修改", footerLicense:"许可", licenseClose:"关闭",
licenseBody:"此工具免费提供，仅可在未经修改、非商业用途下自由分享，并须注明原作者。未经书面许可，严禁将其用于商业用途、修改、出售或整合到付费产品中。帮助始终免费。",
localeCode:"zh-CN", speechLang:"zh-CN"
}
};

let currentLang = "nl";
function t(){ return TR[currentLang]; }
function gval(v){ return (v && typeof v === "object") ? v[state.gender] : v; }

/* ---------- layouts ---------- */
const LAYOUTS = [
{id:"j1", cat:"jongen", motif:"clouds", emoji:"☁️", bg:["#DCEEFB","#BFE0F5"], accent:"#3E7CB8", ink:"#1f2a44"},
{id:"j2", cat:"jongen", motif:"nautical", emoji:"⚓", bg:["#EAF4F4","#CFE7E4"], accent:"#2E6B6B", ink:"#12343B"},
{id:"j3", cat:"jongen", motif:"critter", earType:"round", furColor:"#8a6a4c", emoji:"🧸", bg:["#EFF6EC","#D8ECD0"], accent:"#5B8A52", ink:"#2f4a2a"},
{id:"j4", cat:"jongen", motif:"moon", emoji:"🌙", bg:["#1B2A4A","#0E1830"], accent:"#D8A34E", ink:"#F5EBE0", dark:true},
{id:"m1", cat:"meisje", motif:"clouds", emoji:"☁️", bg:["#FDECF1","#F8D3E0"], accent:"#D0708F", ink:"#5A2A38"},
{id:"m2", cat:"meisje", motif:"blossom", emoji:"🌸", bg:["#FFF3E9","#FADFEA"], accent:"#E08BAE", ink:"#5A2A38"},
{id:"m3", cat:"meisje", motif:"critter", earType:"pointy", furColor:"#D97B4A", emoji:"🦊", bg:["#FFF1E6","#FBDFCB"], accent:"#D97B4A", ink:"#5a3620"},
{id:"m4", cat:"meisje", motif:"moon", emoji:"🌙", bg:["#3A2140","#241226"], accent:"#E8A9C4", ink:"#F5EBE0", dark:true},
{id:"n1", cat:"neutraal", motif:"rainbow", emoji:"🌈", bg:["#FFF9E8","#FDEFC7"], accent:"#D8A34E", ink:"#3a3020"},
{id:"n2", cat:"neutraal", motif:"botanical", emoji:"🌿", bg:["#EFF3EA","#DCE6D2"], accent:"#5C7A4E", ink:"#2c3a22"}
];

const state = {
gender:"jongen",
layoutId:"j1",
catFilter:"alle",
name:"",
date:"",
weight:"",
length:"",
poemKey:"klassiek",
freeText:"",
photos:[],
photoOpacity:0.38,
practicalInfo:"",
muisjes:false,
watermark:true
};

function layoutById(id){ return LAYOUTS.find(l=>l.id===id) || LAYOUTS[0]; }

function resolvedText(){
const tr = t();
let raw = state.poemKey === "eigen" ? state.freeText : (tr.poems[state.poemKey] || "");
raw = raw.replaceAll("{NAAM}", state.name || "...");
if(tr.gendered.zoondochter) raw = raw.replaceAll("{zoondochter}", tr.gendered.zoondochter[state.gender]);
if(tr.gendered.hemhaar) raw = raw.replaceAll("{hemhaar}", tr.gendered.hemhaar[state.gender]);
if(tr.gendered.welcome) raw = raw.replaceAll("{welcome}", tr.gendered.welcome[state.gender]);
return raw;
}

/* ---------- taal selector ---------- */
document.getElementById("langRow").addEventListener("click",(e)=>{
const b = e.target.closest(".langbtn");
if(!b) return;
document.querySelectorAll(".langbtn").forEach(x=>x.setAttribute("aria-pressed", String(x===b)));
currentLang = b.dataset.lang;
applyI18n();
});

/* ---------- layout gallery UI ---------- */
const layoutGrid = document.getElementById("layoutGrid");
function catLabel(cat){
const tr = t();
if(cat === "jongen") return tr.catBoy;
if(cat === "meisje") return tr.catGirl;
return tr.catNeutral;
}
function renderLayoutGrid(){
const tr = t();
layoutGrid.innerHTML = "";
LAYOUTS.filter(l => state.catFilter === "alle" || l.cat === state.catFilter).forEach(l=>{
const btn = document.createElement("button");
btn.type = "button";
btn.className = "layoutcard";
btn.setAttribute("aria-pressed", String(l.id === state.layoutId));
btn.innerHTML = `<div class="swatch" style="background:linear-gradient(160deg,${l.bg[0]},${l.bg[1]});">${l.emoji}</div>
<div class="meta"><div class="nm">${tr.layoutNames[l.id]}</div><div class="cat">${catLabel(l.cat)}</div></div>`;
btn.addEventListener("click", ()=>{
state.layoutId = l.id;
if(l.cat === "jongen") setGender("jongen");
if(l.cat === "meisje") setGender("meisje");
renderLayoutGrid();
redraw();
});
layoutGrid.appendChild(btn);
});
}
document.getElementById("catRow").addEventListener("click", (e)=>{
const b = e.target.closest(".catchip");
if(!b) return;
document.querySelectorAll(".catchip").forEach(x=>x.setAttribute("aria-pressed", String(x===b)));
state.catFilter = b.dataset.cat;
renderLayoutGrid();
});

/* ---------- gender chips ---------- */
function setGender(g){
state.gender = g;
document.querySelectorAll("#genderChips .chip").forEach(c=>c.setAttribute("aria-pressed", String(c.dataset.gender===g)));
if(state.poemKey !== "eigen") msgEl.value = resolvedText();
redraw();
}
document.getElementById("genderChips").addEventListener("click",(e)=>{
const b = e.target.closest(".chip");
if(!b) return;
setGender(b.dataset.gender);
});

/* ---------- poem chips ---------- */
const msgEl = document.getElementById("msg");
document.getElementById("poemChips").addEventListener("click",(e)=>{
const b = e.target.closest(".chip");
if(!b) return;
document.querySelectorAll("#poemChips .chip").forEach(c=>c.setAttribute("aria-pressed", String(c===b)));
state.poemKey = b.dataset.poem;
msgEl.value = state.poemKey === "eigen" ? state.freeText : resolvedText();
redraw();
});
msgEl.addEventListener("input", ()=>{
state.freeText = msgEl.value;
if(state.poemKey !== "eigen"){
state.poemKey = "eigen";
document.querySelectorAll("#poemChips .chip").forEach(c=>c.setAttribute("aria-pressed", String(c.dataset.poem==="eigen")));
}
redrawSoon();
});

/* ---------- basisvelden ---------- */
let redrawTimer = null;
function redrawSoon(){
if(redrawTimer) clearTimeout(redrawTimer);
redrawTimer = setTimeout(()=>{ redrawTimer = null; redraw(); }, 60);
}

document.getElementById("childName").addEventListener("input", (e)=>{
state.name = e.target.value;
if(state.poemKey !== "eigen") msgEl.value = resolvedText();
redrawSoon();
});
document.getElementById("childDate").addEventListener("input", (e)=>{ state.date = e.target.value; redrawSoon(); });
document.getElementById("childWeight").addEventListener("input", (e)=>{ state.weight = e.target.value; redrawSoon(); });
document.getElementById("childLength").addEventListener("input", (e)=>{ state.length = e.target.value; redrawSoon(); });
document.getElementById("muisjes").addEventListener("change", (e)=>{ state.muisjes = e.target.checked; redraw(); });
document.getElementById("watermark").addEventListener("change", (e)=>{ state.watermark = e.target.checked; redraw(); });
document.getElementById("photoOpacity").addEventListener("input", (e)=>{ state.photoOpacity = Number(e.target.value)/100; redrawSoon(); });
document.getElementById("practicalInfo").addEventListener("input", (e)=>{ state.practicalInfo = e.target.value; redrawSoon(); });

/* ---------- foto's ---------- */
const MAX_PHOTOS = 1;
const photoInput = document.getElementById("photoInput");
const thumbsEl = document.getElementById("thumbs");
photoInput.addEventListener("change", (e)=>{
const files = Array.from(e.target.files || []);
if(files.length && state.photos.length >= MAX_PHOTOS){ state.photos = []; }
files.forEach(file=>{
if(state.photos.length >= MAX_PHOTOS) return;
const reader = new FileReader();
reader.onload = (ev)=>{
const img = new Image();
img.onload = ()=>{
state.photos.push({src:ev.target.result, img});
renderThumbs();
redraw();
};
img.src = ev.target.result;
};
reader.readAsDataURL(file);
});
photoInput.value = "";
});
function renderThumbs(){
thumbsEl.innerHTML = "";
state.photos.forEach((p, i)=>{
const div = document.createElement("div");
div.className = "thumb";
div.innerHTML = `<img src="${p.src}" alt=""><button type="button" aria-label="x">&times;</button>`;
div.querySelector("button").addEventListener("click", ()=>{
state.photos.splice(i,1);
renderThumbs();
redraw();
});
thumbsEl.appendChild(div);
});
}

/* ---------- canvas tekenen ---------- */
const canvas = document.getElementById("postcard");
const ctx = canvas.getContext("2d");
const CW = 1200, CH = 800, PAD = 50;
let currentSide = "front";

function drawCoverImage(img, x, y, w, h){
const scale = Math.max(w / img.width, h / img.height);
const sw = w / scale, sh = h / scale;
const sx = (img.width - sw) / 2, sy = (img.height - sh) / 2;
ctx.drawImage(img, sx, sy, sw, sh, x, y, w, h);
}

function roundRectPath(x,y,w,h,r){
ctx.beginPath();
ctx.moveTo(x+r,y);
ctx.arcTo(x+w,y,x+w,y+h,r);
ctx.arcTo(x+w,y+h,x,y+h,r);
ctx.arcTo(x,y+h,x,y,r);
ctx.arcTo(x,y,x+w,y,r);
ctx.closePath();
}

function drawPhotoBackground(){
if(!state.photos.length) return;
const p = state.photos[0];
ctx.save();
roundRectPath(20, 20, CW-40, CH-40, 22);
ctx.clip();
ctx.globalAlpha = state.photoOpacity;
drawCoverImage(p.img, 0, 0, CW, CH);
ctx.globalAlpha = 1;
ctx.restore();
}

function wrapAndDraw(text, x, y, maxWidth, lineHeight, align){
align = align || "left";
ctx.textAlign = align;
const paragraphs = String(text || "").split("\n");
let cy = y;
paragraphs.forEach(par=>{
if(par === ""){ cy += lineHeight; return; }
const words = par.split(" ");
let line = "";
words.forEach(w=>{
const test = line ? line + " " + w : w;
if(ctx.measureText(test).width > maxWidth && line){
ctx.fillText(line, x, cy);
cy += lineHeight;
line = w;
} else {
line = test;
}
});
ctx.fillText(line, x, cy);
cy += lineHeight;
});
return cy;
}

/* ---------- motieven ---------- */
function drawClouds(l){
ctx.fillStyle = l.accent;
ctx.globalAlpha = 0.28;
const clouds = [[160,110,60],[900,90,50],[1040,220,40],[90,240,36],[560,70,44]];
clouds.forEach(([cx,cy,r])=>{
ctx.beginPath();
ctx.arc(cx-r*0.6, cy, r*0.6, 0, Math.PI*2);
ctx.arc(cx, cy-r*0.3, r*0.7, 0, Math.PI*2);
ctx.arc(cx+r*0.6, cy, r*0.6, 0, Math.PI*2);
ctx.arc(cx, cy+r*0.2, r*0.75, 0, Math.PI*2);
ctx.fill();
});
ctx.globalAlpha = 1;
drawStars(l, [[260,60],[760,140],[1000,60],[60,140]], 6);
}
function drawStars(l, pts, size){
ctx.fillStyle = l.accent;
pts.forEach(([x,y])=>{
ctx.save();
ctx.translate(x,y);
ctx.beginPath();
for(let i=0;i<5;i++){
ctx.lineTo(Math.cos((18+i*72)*Math.PI/180)*size, -Math.sin((18+i*72)*Math.PI/180)*size);
ctx.lineTo(Math.cos((54+i*72)*Math.PI/180)*size*0.45, -Math.sin((54+i*72)*Math.PI/180)*size*0.45);
}
ctx.closePath();
ctx.fill();
ctx.restore();
});
}
function drawNautical(l){
ctx.save();
ctx.globalAlpha = 0.5;
ctx.fillStyle = l.accent;
for(let y=0;y<CH;y+=46){
ctx.fillRect(0,y,CW,20);
}
ctx.restore();
ctx.strokeStyle = l.accent;
ctx.lineWidth = 8;
ctx.beginPath();
ctx.arc(1000, 130, 46, 0, Math.PI*2);
ctx.moveTo(1000,90); ctx.lineTo(1000,176);
ctx.moveTo(966,150); ctx.quadraticCurveTo(1000,200,1034,150);
ctx.moveTo(978,104); ctx.lineTo(1022,104);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(100,220); ctx.lineTo(220,220); ctx.lineTo(190,260); ctx.lineTo(130,260); ctx.closePath();
ctx.fillStyle = l.accent;
ctx.fill();
ctx.beginPath();
ctx.moveTo(160,220); ctx.lineTo(160,160); ctx.lineTo(210,220); ctx.closePath();
ctx.fill();
}
function drawCritter(l){
const cx = 1020, cy = 170, r = 90;
ctx.fillStyle = l.furColor;
ctx.beginPath();
ctx.arc(cx,cy,r,0,Math.PI*2);
ctx.fill();
const earOffset = 78, earR = 34;
[-1,1].forEach(dir=>{
ctx.beginPath();
if(l.earType === "pointy"){
ctx.moveTo(cx+dir*earOffset, cy-r*0.6);
ctx.lineTo(cx+dir*(earOffset+30), cy-r*1.35);
ctx.lineTo(cx+dir*(earOffset-20), cy-r*0.75);
ctx.closePath();
} else {
ctx.arc(cx+dir*earOffset, cy-r*0.7, earR, 0, Math.PI*2);
}
ctx.fill();
});
ctx.fillStyle = l.ink;
ctx.beginPath(); ctx.arc(cx-28,cy-6,7,0,Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx+28,cy-6,7,0,Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.arc(cx,cy+20,10,0,Math.PI*2); ctx.fill();
ctx.strokeStyle = l.ink;
ctx.lineWidth = 4;
ctx.beginPath();
ctx.moveTo(cx-18,cy+36); ctx.quadraticCurveTo(cx,cy+52,cx+18,cy+36);
ctx.stroke();
}
function drawMoon(l){
ctx.fillStyle = l.accent;
ctx.beginPath();
ctx.arc(1010, 150, 70, 0, Math.PI*2);
ctx.fill();
ctx.fillStyle = "#0E1830";
ctx.beginPath();
ctx.arc(1040, 130, 66, 0, Math.PI*2);
ctx.fill();
drawStars(l, [[120,90],[220,180],[340,70],[860,240],[70,230],[500,60],[650,190]], 5);
}
function drawBlossom(l){
function flower(cx,cy,r,color){
ctx.fillStyle = color;
for(let i=0;i<5;i++){
const a = i*72*Math.PI/180;
ctx.beginPath();
ctx.ellipse(cx+Math.cos(a)*r*0.6, cy+Math.sin(a)*r*0.6, r*0.55, r*0.32, a, 0, Math.PI*2);
ctx.fill();
}
ctx.fillStyle = l.ink;
ctx.beginPath(); ctx.arc(cx,cy,r*0.22,0,Math.PI*2); ctx.fill();
}
flower(1010,120,42,l.accent);
flower(920,220,26,l.accent);
flower(1090,240,30,l.accent);
flower(140,90,28,l.accent);
ctx.save();
ctx.translate(260,190);
ctx.fillStyle = l.accent;
ctx.globalAlpha = 0.85;
ctx.beginPath(); ctx.ellipse(-14,-6,20,14,0.4,0,Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(14,-6,20,14,-0.4,0,Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(-12,14,14,10,0.4,0,Math.PI*2); ctx.fill();
ctx.beginPath(); ctx.ellipse(12,14,14,10,-0.4,0,Math.PI*2); ctx.fill();
ctx.globalAlpha = 1;
ctx.strokeStyle = l.ink; ctx.lineWidth = 3;
ctx.beginPath(); ctx.moveTo(0,-16); ctx.lineTo(0,20); ctx.stroke();
ctx.restore();
}
function drawRainbow(l){
const cx = CW/2, cy = 300;
const colors = ["#E08B5B","#D8A34E","#C9C24E","#7DAF6E","#5C9AB8","#7C7FC9"];
colors.forEach((c,i)=>{
const r = 260 - i*22;
ctx.strokeStyle = c;
ctx.lineWidth = 20;
ctx.beginPath();
ctx.arc(cx, cy+140, r, Math.PI, Math.PI*2);
ctx.stroke();
});
ctx.fillStyle = l.accent;
ctx.beginPath(); ctx.arc(150,100,50,0,Math.PI*2); ctx.fill();
for(let i=0;i<8;i++){
const a = i*45*Math.PI/180;
ctx.strokeStyle = l.accent; ctx.lineWidth = 6;
ctx.beginPath();
ctx.moveTo(150+Math.cos(a)*62, 100+Math.sin(a)*62);
ctx.lineTo(150+Math.cos(a)*80, 100+Math.sin(a)*80);
ctx.stroke();
}
}
function drawBotanical(l){
function leaf(cx,cy,len,ang,color){
ctx.save();
ctx.translate(cx,cy);
ctx.rotate(ang);
ctx.fillStyle = color;
ctx.beginPath();
ctx.ellipse(0,0,len*0.28,len,0,0,Math.PI*2);
ctx.fill();
ctx.strokeStyle = l.ink; ctx.globalAlpha = 0.25; ctx.lineWidth = 2;
ctx.beginPath(); ctx.moveTo(0,-len); ctx.lineTo(0,len); ctx.stroke();
ctx.globalAlpha = 1;
ctx.restore();
}
const stems = [[1000,220,-0.3],[1000,220,0],[1000,220,0.3],[1000,220,0.55],[1000,220,-0.55]];
stems.forEach(([x,y,a],i)=>leaf(x, y - i*36, 70 - i*4, a, l.accent));
leaf(120,120,60,0.4,l.accent);
leaf(150,150,50,-0.2,l.accent);
}

function drawMuisjes(x,y){
ctx.save();
ctx.translate(x,y);
ctx.fillStyle = "#F0E7D6";
ctx.beginPath(); ctx.ellipse(0,0,46,30,0,0,Math.PI*2); ctx.fill();
ctx.strokeStyle = "#C9AFA0"; ctx.lineWidth = 2; ctx.stroke();
const colors = state.gender === "jongen" ? ["#3E63B8","#F5EBE0","#3E7CB8"] : ["#D0405A","#F5EBE0","#E08BAE"];
for(let i=0;i<28;i++){
const rx = (Math.random()-0.5)*80;
const ry = (Math.random()-0.5)*48;
if((rx*rx)/(46*46) + (ry*ry)/(30*30) > 1) continue;
ctx.save();
ctx.translate(rx,ry);
ctx.rotate(Math.random()*Math.PI);
ctx.fillStyle = colors[i % colors.length];
ctx.fillRect(-4,-1.2,8,2.4);
ctx.restore();
}
ctx.restore();
}

function drawBackgroundGradient(l){
const grad = ctx.createLinearGradient(0,0,0,CH);
grad.addColorStop(0, l.bg[0]);
grad.addColorStop(1, l.bg[1]);
ctx.fillStyle = grad;
ctx.fillRect(0,0,CW,CH);
ctx.strokeStyle = l.accent;
ctx.globalAlpha = 0.5;
ctx.lineWidth = 3;
ctx.strokeRect(18,18,CW-36,CH-36);
ctx.globalAlpha = 1;
}

function drawMotif(l){
switch(l.motif){
case "clouds": drawClouds(l); break;
case "nautical": drawNautical(l); break;
case "critter": drawCritter(l); break;
case "moon": drawMoon(l); break;
case "blossom": drawBlossom(l); break;
case "rainbow": drawRainbow(l); break;
case "botanical": drawBotanical(l); break;
}
}

function drawWatermark(){
if(!state.watermark) return;
ctx.font = "italic 16px 'Fraunces', serif";
ctx.textAlign = "right";
ctx.fillStyle = "rgba(0,0,0,0.35)";
ctx.fillText("© Jan den Hollander · Cartolina", CW-30, CH-24);
}

function formatDate(){
if(!state.date) return "";
const d = new Date(state.date + "T00:00:00");
if(isNaN(d)) return "";
try{
return d.toLocaleDateString(t().localeCode, {day:"numeric", month:"long", year:"numeric"});
} catch(e){ return state.date; }
}

function drawFront(){
const l = layoutById(state.layoutId);
drawBackgroundGradient(l);
drawPhotoBackground();
drawMotif(l);
const nameY = 380;
ctx.textAlign = "center";
ctx.fillStyle = l.accent;
ctx.font = "600 26px 'IBM Plex Mono', monospace";
ctx.fillText(gval(t().welcomeText), CW/2, nameY - 46);
ctx.fillStyle = l.ink;
ctx.font = "italic 700 76px 'Dancing Script', cursive";
ctx.fillText(state.name || "...", CW/2, nameY + 24);
const details = [];
const dateStr = formatDate();
if(dateStr) details.push(dateStr);
if(state.weight) details.push(state.weight + " g");
if(state.length) details.push(state.length + " cm");
if(details.length){
ctx.font = "500 22px 'IBM Plex Mono', monospace";
ctx.fillStyle = l.ink;
ctx.globalAlpha = 0.85;
ctx.fillText(details.join("  ·  "), CW/2, nameY + 78);
ctx.globalAlpha = 1;
}
drawWatermark();
}

function drawBack(){
const l = layoutById(state.layoutId);
drawBackgroundGradient(l);
ctx.globalAlpha = 0.14;
drawMotif(l);
ctx.globalAlpha = 1;
ctx.fillStyle = l.ink;
ctx.font = "italic 500 40px 'Fraunces', serif";
ctx.textAlign = "left";
wrapAndDraw(resolvedText(), PAD, 130, CW - PAD*2, 54, "left");
if(state.practicalInfo && state.practicalInfo.trim()){
ctx.font = "500 24px 'IBM Plex Mono', monospace";
ctx.fillStyle = l.ink;
ctx.globalAlpha = 0.8;
wrapAndDraw(state.practicalInfo, CW - PAD, CH - 190, CW - PAD*2 - 220, 32, "right");
ctx.globalAlpha = 1;
}
if(state.muisjes){
drawMuisjes(CW-PAD-60, CH-PAD-50);
}
drawWatermark();
}

function redraw(){
if(currentSide === "front") drawFront(); else drawBack();
}

document.getElementById("sideTabs").addEventListener("click",(e)=>{
const b = e.target.closest(".sidetab");
if(!b) return;
document.querySelectorAll(".sidetab").forEach(x=>x.setAttribute("aria-pressed", String(x===b)));
currentSide = b.dataset.side;
redraw();
});

/* ---------- voorlezen (TTS) ---------- */
const speakBtn = document.getElementById("speakBtn");
const speakStatus = document.getElementById("speakStatus");
function buildSpokenText(){
const tr = t();
let parts = [];
parts.push((state.gender === "jongen" ? tr.speakAnnounceSon : tr.speakAnnounceDaughter).replaceAll("{NAAM}", state.name || ""));
const dateStr = formatDate();
if(dateStr){
const bornTpl = gval(tr.speakBornOn);
parts.push(bornTpl.replaceAll("{DATUM}", dateStr));
}
if(state.weight) parts.push(tr.speakWeight.replaceAll("{GEWICHT}", state.weight));
if(state.length) parts.push(tr.speakLength.replaceAll("{LENGTE}", state.length));
const txt = resolvedText();
if(txt && txt.trim()) parts.push(txt.replaceAll("\n", ". "));
return parts.join(" ");
}
let speaking = false;
speakBtn.addEventListener("click", ()=>{
const tr = t();
if(!("speechSynthesis" in window)){
speakStatus.textContent = tr.speakUnsupported;
return;
}
if(speaking){
window.speechSynthesis.cancel();
speaking = false;
speakBtn.textContent = tr.speakBtn;
speakStatus.textContent = "";
return;
}
const utter = new SpeechSynthesisUtterance(buildSpokenText());
utter.lang = tr.speechLang;
const voices = window.speechSynthesis.getVoices();
const prefix = tr.speechLang.split("-")[0];
const voice = voices.find(v=>v.lang && v.lang.startsWith(prefix));
if(voice) utter.voice = voice;
utter.onstart = ()=>{ speaking = true; speakBtn.textContent = tr.speakBtnStop; speakStatus.textContent = tr.speakBusy; };
utter.onend = ()=>{ speaking = false; speakBtn.textContent = tr.speakBtn; speakStatus.textContent = ""; };
utter.onerror = ()=>{ speaking = false; speakBtn.textContent = tr.speakBtn; speakStatus.textContent = tr.speakFail; };
window.speechSynthesis.cancel();
window.speechSynthesis.speak(utter);
});

/* ---------- opslaan / delen ---------- */
const exportBtn = document.getElementById("exportBtn");
const shareBtn = document.getElementById("shareBtn");
const exportMsgEl = document.getElementById("exportMsg");
function showExportMsg(text, isErr){
exportMsgEl.textContent = text;
exportMsgEl.style.color = isErr ? "#D0405A" : "var(--muted)";
}
function downloadCanvasAs(filename, onDone, onFail){
canvas.toBlob((blob)=>{
if(!blob){ onFail && onFail(); return; }
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url; a.download = filename;
document.body.appendChild(a); a.click(); document.body.removeChild(a);
setTimeout(()=>URL.revokeObjectURL(url), 4000);
onDone && onDone();
}, "image/png", 0.95);
}
function canvasBlob(){
return new Promise((resolve)=>{ canvas.toBlob((blob)=>resolve(blob), "image/png", 0.95); });
}
function dateStamp(){
const d = new Date();
return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
exportBtn.addEventListener("click", ()=>{
const tr = t();
try{
const restoreSide = currentSide;
const stamp = dateStamp();
currentSide = "front"; redraw();
downloadCanvasAs(`geboortekaartje-voorzijde-${stamp}.png`, ()=>{
setTimeout(()=>{
currentSide = "back"; redraw();
downloadCanvasAs(`geboortekaartje-achterzijde-${stamp}.png`, ()=>{
currentSide = restoreSide; redraw();
showExportMsg(tr.exportOk, false);
}, ()=>{ currentSide = restoreSide; redraw(); showExportMsg(tr.exportFail, true); });
}, 400);
}, ()=>{ currentSide = restoreSide; redraw(); showExportMsg(tr.exportFail, true); });
} catch(err){ showExportMsg(tr.exportFail, true); }
});

let shareSupported = false;
try{
if(navigator.share && navigator.canShare){
const probe = new File([new Blob(["x"])], "probe.png", {type:"image/png"});
shareSupported = navigator.canShare({files:[probe]});
}
} catch(err){ shareSupported = false; }
if(shareSupported){ shareBtn.style.display = "block"; }
shareBtn.addEventListener("click", async ()=>{
const tr = t();
const restoreSide = currentSide;
try{
const stamp = dateStamp();
currentSide = "front"; redraw();
const frontBlob = await canvasBlob();
currentSide = "back"; redraw();
const backBlob = await canvasBlob();
currentSide = restoreSide; redraw();
if(!frontBlob || !backBlob) throw new Error("no-blob");
const files = [
new File([frontBlob], `geboortekaartje-voorzijde-${stamp}.png`, {type:"image/png"}),
new File([backBlob], `geboortekaartje-achterzijde-${stamp}.png`, {type:"image/png"})
];
if(navigator.canShare && navigator.canShare({files})){
await navigator.share({files, title:"Geboortekaartje · Cartolina"});
showExportMsg(tr.shareOk, false);
} else {
showExportMsg(tr.shareFail, true);
}
} catch(err){
currentSide = restoreSide; redraw();
if(err && err.name === "AbortError") return;
showExportMsg(tr.shareFail, true);
}
});

/* ---------- print-pdf handoff (zelfde print.html als de cartolina) ---------- */
const printBtn = document.getElementById("printBtn");
printBtn.addEventListener("click", ()=>{
const restoreSide = currentSide;
try{
currentSide = "front"; redraw();
const frontData = canvas.toDataURL("image/png");
currentSide = "back"; redraw();
const backData = canvas.toDataURL("image/png");
const savedName = state.name;
state.name = "";
const l = layoutById(state.layoutId);
drawBackgroundGradient(l);
drawPhotoBackground();
drawMotif(l);
drawWatermark();
const frontBlankData = canvas.toDataURL("image/png");
state.name = savedName;
currentSide = restoreSide; redraw();
localStorage.setItem("briefkaart_print_front", frontData);
localStorage.setItem("briefkaart_print_back", backData);
localStorage.setItem("briefkaart_print_frontblank", frontBlankData);
localStorage.setItem("briefkaart_print_ts", String(Date.now()));
window.location.href = "print.html";
} catch(err){
currentSide = restoreSide; redraw();
exportMsgEl.textContent = t().printFail;
exportMsgEl.style.color = "#D0405A";
}
});

/* ---------- copyright integrity ---------- */
const overlay = document.getElementById("blockOverlay");
function blockApp(){
document.querySelectorAll("main, header, #copyFooter, #licenseModal").forEach(el=>el.style.display = "none");
overlay.style.display = "flex";
}
const notice = document.getElementById("copyFooter");
if(notice){
const observer = new MutationObserver(()=>{
if(!document.body.contains(notice) || !notice.textContent.includes("Jan den Hollander") || !notice.textContent.includes("Geboortekaartje")){
blockApp();
}
});
observer.observe(notice, {childList:true, subtree:true, characterData:true});
} else {
blockApp();
}

/* ---------- licentie-modal ---------- */
const licenseModal = document.getElementById("licenseModal");
document.getElementById("licenseOpenBtn").addEventListener("click", ()=>{ licenseModal.style.display = "flex"; });
document.getElementById("licenseCloseBtn").addEventListener("click", ()=>{ licenseModal.style.display = "none"; });
licenseModal.addEventListener("click", (e)=>{ if(e.target === licenseModal) licenseModal.style.display = "none"; });

/* ---------- i18n toepassen ---------- */
function applyI18n(){
const tr = t();
document.documentElement.lang = currentLang;
document.querySelectorAll("[data-i18n]").forEach(el=>{
const key = el.dataset.i18n;
if(tr[key] !== undefined) el.innerHTML = tr[key];
});
document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
const key = el.dataset.i18nPh;
if(tr[key] !== undefined) el.placeholder = tr[key];
});
if(!speaking) speakBtn.textContent = tr.speakBtn;
renderLayoutGrid();
if(state.poemKey !== "eigen") msgEl.value = resolvedText();
redraw();
}

/* ---------- init ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
if("speechSynthesis" in window){
window.speechSynthesis.onvoiceschanged = ()=>{};
}
renderLayoutGrid();
msgEl.value = resolvedText();
applyI18n();
})();
