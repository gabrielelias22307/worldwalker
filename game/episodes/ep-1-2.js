/* WORLDWALKER · Episode 1.2 · Regional Tour (WG.1 / WG.2)
   Formal, functional and perceptual regions. The valley shows all three:
   the Wheat Belt (formal, north-west), Hub Town where every stream meets (functional, north-east),
   and the Whispering Woods that nobody can agree on (perceptual, south-west). */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'WG.1',
  title: { en: 'Regional Tour', es: 'Gira por las regiones', fa: 'سفر به منطقه‌ها' },
  place: { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
  intro: [
    { en: 'Oh no! The Grump ate every region line in Mapmaker\'s Valley.', es: '¡Oh, no! El Gruñón se comió todas las líneas de las regiones del Valle del Cartógrafo.', fa: 'وای! غرغرو همهٔ خط‌های منطقه‌ها را در درهٔ نقشه‌کش خورد.' },
    { en: 'Talk to the farmer, the boat pilot and the ranger. Then fix the compass stone.', es: 'Habla con la agricultora, el piloto del bote y la guardabosques. Luego arregla la piedra de la brújula.', fa: 'با دهقان، رانندهٔ کشتی و جنگلبان گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the Wheat Belt, every field is wheat (formal region).
     NE: Hub Town, where the streams join one river, with a market and a dock (functional region).
     SW: the Whispering Woods, thick in the corner and thin at the edges, so nobody agrees where they start (perceptual region).
     SE: an open meadow by the river where the Grump hides. */
  map: [
    'TTTTTTTTTTTTTTTTTT~TTT~~TTTTTTTT',
    'T.RRR.wwwwwFwwww..~.T.~~.RRR.QQT',
    'T.hdh.wwwwwFwwww..~...~~.hdh.dhT',
    'T.....wwwwwFwwww..~.,.~~.......T',
    'T.....FFFFFFFFFF..~...~~kk.mmm.T',
    'T.::::::::::::::::b:::bb:::::..T',
    'T.wwwwFwwwwwF.:...~...~~.mmm.x.T',
    'T.wwwwFwwwwwF.:...~~~~~~.......T',
    'T.wwwwFwwwwwF.:.......~~...RRR.T',
    'T.wwwwFwwwwwF.:.......~~.T.hdh.T',
    'T.............:.......~~.......T',
    'T.......,.....:.......~~.......T',
    'T..P...T......:...T...~~..K....T',
    'TP...P...".x..:....,..~~.......T',
    'TPP.P..P..."..:.......~~...T...T',
    'TPPP.P.:::::::::::::::bb:::::..T',
    'TPPPP.:"PP.P"P....T...~~.......T',
    'TPPP..:..PP.P.........~~..,....T',
    'TPPPP.:::..P.."..,....~~...T...T',
    'TPPPPP.P::...P....T...~~.....K.T',
    'TPPPPPPP..P...........~~.......T',
    'TTTTTTTTTTTTTTTTTTTTTT~~TTTTTTTT'
  ],
  start: [3, 5],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): fence the wheat region — a formal region has one trait everywhere and a clear border */
  build: [
    { id: 'fence', kind: 'place', board: [1, 4], tile: 'F', ok: [[5, 1], [5, 3], [16, 1], [16, 3]], cost: { wood: 1 },
      name: { en: 'Fence for the wheat region', es: 'Cerca para la región del trigo', fa: 'کتاره برای ساحهٔ گندم' },
      ask: { en: 'Wheat grows on every field up here, so this is a [[formal region|formal region]]: one trait is true everywhere. Its border is clear. Close the gaps in the fence on the west and east edges of the wheat. Leave the middle gap on each side open as a gate.',
        es: 'Aquí arriba crece trigo en todos los campos, así que es una [[formal region|región formal]]: un rasgo es igual en todas partes. Su borde es claro. Cierra los huecos de la cerca en los bordes oeste y este del trigo. Deja abierto el hueco del medio de cada lado como portón.',
        fa: 'این بالا در همهٔ کشتزارها گندم می‌روید، پس این یک [[formal region|ساحهٔ رسمی]] است: یک ویژگی در همه جا یکسان است. مرزش روشن است. شکاف‌های کتاره را در لبهٔ غربی و شرقی گندم ببند. شکاف وسط هر طرف را به عنوان دروازه باز بگذار.' },
      why: { en: 'Right on the edge of the wheat region!', es: '¡Justo en el borde de la región del trigo!', fa: 'درست در لبهٔ ساحهٔ گندم!' },
      wrong: { en: 'This spot is not on the edge of the wheat. A formal region\'s border runs along the edge of the land that shares its trait.', es: 'Este lugar no está en el borde del trigo. El borde de una región formal va por la orilla de la tierra que comparte el rasgo.', fa: 'این جا در لبهٔ گندم نیست. مرز ساحهٔ رسمی در لبهٔ زمینی می‌رود که آن ویژگی را دارد.' },
      done: { en: 'The wheat region has a clear border now, with a gate on each side. Every field inside grows wheat: a formal region.', es: 'La región del trigo ya tiene un borde claro, con un portón a cada lado. Todos los campos de adentro tienen trigo: una región formal.', fa: 'ساحهٔ گندم حالا مرز روشن دارد، با یک دروازه در هر طرف. همهٔ کشتزارهای داخل گندم دارند: یک ساحهٔ رسمی.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [25, 10], at: [29, 13], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps south, then 4 steps east. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al sur y luego 4 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۴ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! Here, south is down and east is right. A shiny gem was in the grass.', es: '¡Seguiste las direcciones de la brújula! Aquí el sur está abajo y el este a la derecha. Había una gema en el pasto.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! این جا جنوب پایین و شرق طرف راست است. یک سنگ قیمتی در سبزه بود.' } },
    { clueAt: [13, 8], at: [11, 10], decor: 'flower',
      clue: { en: 'Find where the [[formal region|formal region]] of wheat ends. Find the most southern wheat row. Step south off its east end.', es: 'Busca dónde termina la [[formal region|región formal]] del trigo. Ve a la fila de trigo más al sur. Da un paso al sur desde su punta este.', fa: 'پیدا کن [[formal region|منطقهٔ رسمی]] گندم کجا تمام می‌شود. به جنوبی‌ترین ردیف گندم برو. از سر شرقی آن یک قدم به جنوب برو.' },
      text: { en: 'You found the edge! A formal region ends where the shared thing stops. A wild flower grew here.', es: '¡Encontraste el borde! Una región formal termina donde se acaba lo que comparte. Aquí crecía una flor silvestre.', fa: 'تو کناره را پیدا کردی! منطقهٔ رسمی جایی تمام می‌شود که چیز مشترکش تمام شود. یک گل وحشی این جا روییده بود.' } }
  ],

  words: {
    region: { en: 'a group of places that share something', es: 'un grupo de lugares que comparten algo', fa: 'گروهی از جاها که یک چیز مشترک دارند' },
    'formal region': { en: 'a region where one trait is true across the whole area, like the Corn Belt', es: 'una región donde una característica se cumple en toda el área, como el Cinturón del Maíz', fa: 'منطقه‌ای که یک ویژگی در تمام آن درست است، مثل کمربند جواری' },
    'functional region': { en: 'a region built around one center, or hub, like all the streams that flow into one river', es: 'una región formada alrededor de un centro, como todos los arroyos que llegan a un mismo río', fa: 'منطقه‌ای که دور یک مرکز ساخته شده، مثل همهٔ جوی‌هایی که به یک دریا می‌ریزند' },
    'perceptual region': { en: 'a region that is real because people believe in it, but nobody agrees on its edges', es: 'una región que existe porque la gente cree en ella, pero nadie se pone de acuerdo en sus bordes', fa: 'منطقه‌ای که چون مردم به آن باور دارند وجود دارد، اما کسی سر کناره‌هایش موافق نیست' },
    boundary: { en: 'the edge of a place, whether it is a real line or one people agreed on', es: 'el borde de un lugar, sea una línea real o una que la gente acordó', fa: 'کنارهٔ یک جا، چه خط واقعی باشد چه خطی که مردم سرش موافقه کرده‌اند' },
    hub: { en: 'the center that a functional region is built around', es: 'el centro alrededor del cual se forma una región funcional', fa: 'مرکزی که منطقهٔ کارکردی دور آن ساخته می‌شود' }
  },

  npcs: [
    {
      x: 4, y: 3,
      name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      role: { en: 'Wheat farmer', es: 'Agricultora de trigo', fa: 'دهقان گندم' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#d9a43a', pants: '#3a4a6a' },
      lines: [
        { en: 'Welcome to the Wheat Belt! Every farm here grows wheat, field after field.', es: '¡Bienvenido al Cinturón del Trigo! Todas las granjas aquí siembran trigo, campo tras campo.', fa: 'به کمربند گندم خوش آمدی! همهٔ فارم‌های اینجا گندم می‌کارند، زمین پشت زمین.' },
        { en: 'A [[region|region]] is a group of places that share something. Here, we share wheat.', es: 'Una [[region|región]] es un grupo de lugares que comparten algo. Aquí compartimos el trigo.', fa: '[[region|منطقه]] گروهی از جاهاست که یک چیز مشترک دارند. اینجا همه گندم داریم.' },
        { en: 'When one trait is true across the whole area, it is a [[formal region|formal region]].', es: 'Cuando una característica se cumple en toda el área, es una [[formal region|región formal]].', fa: 'وقتی یک ویژگی در تمام ساحه درست باشد، آن یک [[formal region|منطقهٔ رسمی]] است.' },
        { en: 'Test it! Any field you walk into has wheat. The [[boundary|boundary]] is where wheat stops.', es: '¡Compruébalo! Cualquier campo tiene trigo. El [[boundary|límite]] está donde se acaba el trigo.', fa: 'امتحان کن! هر زمینی گندم دارد. [[boundary|سرحد]] جایی است که گندم تمام می‌شود.' },
        { en: 'The United States has a real one: the Corn Belt.', es: 'Estados Unidos tiene una de verdad: el Cinturón del Maíz.', fa: 'امریکا یک منطقهٔ واقعی دارد: کمربند جواری.' },
        { en: 'Farmers in Iowa, Illinois and Nebraska grow huge amounts of corn, year after year.', es: 'Los agricultores de Iowa, Illinois y Nebraska siembran muchísimo maíz, año tras año.', fa: 'دهقانان در آیووا، ایلینوی و نبراسکا هر سال جواری بسیار زیاد می‌کارند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What makes the Wheat Belt a formal region?', es: '¿Qué hace que el Cinturón del Trigo sea una región formal?', fa: 'چه چیز کمربند گندم را یک منطقهٔ رسمی می‌سازد؟' },
        choices: [
          { ok: true, t: { en: 'One trait, wheat farms, is true across the whole area', es: 'Una característica, las granjas de trigo, se cumple en toda el área', fa: 'یک ویژگی، یعنی فارم گندم، در تمام ساحه درست است' },
            why: { en: 'Yes! You can test it in any field. The trait does not fade in and out.', es: '¡Sí! Puedes comprobarlo en cualquier campo. La característica no aparece y desaparece.', fa: 'بله! در هر زمین می‌توانی امتحانش کنی. این ویژگی کم و زیاد نمی‌شود.' } },
          { t: { en: 'It is built around one town in the middle', es: 'Está formada alrededor de un pueblo en el medio', fa: 'دور یک شهرک در وسط ساخته شده' },
            why: { en: 'A region built around one center is a functional region. The Wheat Belt shares one trait instead.', es: 'Una región formada alrededor de un centro es funcional. El Cinturón del Trigo, en cambio, comparte una característica.', fa: 'منطقه‌ای که دور یک مرکز ساخته شود کارکردی است. کمربند گندم یک ویژگی مشترک دارد.' } },
          { t: { en: 'People feel it is real, but nobody agrees where it ends', es: 'La gente siente que es real, pero nadie sabe dónde termina', fa: 'مردم حس می‌کنند واقعی است، اما کسی نمی‌داند کجا تمام می‌شود' },
            why: { en: 'That is a perceptual region. Here you can see exactly where the wheat stops.', es: 'Esa es una región perceptual. Aquí puedes ver justo dónde se acaba el trigo.', fa: 'آن منطقهٔ ادراکی است. اینجا دقیق می‌بینی که گندم کجا تمام می‌شود.' } }
        ]
      }
    },
    {
      x: 25, y: 4,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Boat pilot at Hub Town', es: 'Piloto de bote en Pueblo Centro', fa: 'رانندهٔ کشتی در شهرک مرکز' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2f6fd6', pants: '#2a2a2a' },
      lines: [
        { en: 'I steer the river boat here at Hub Town.', es: 'Yo manejo el bote del río aquí en Pueblo Centro.', fa: 'من کشتی دریایی را اینجا در شهرک مرکز می‌رانم.' },
        { en: 'Every stream in this valley flows into one river. It flows right past our dock.', es: 'Todos los arroyos del valle llegan a un mismo río. Ese río pasa justo por nuestro muelle.', fa: 'همهٔ جوی‌های این دره به یک دریا می‌ریزند. آن دریا درست از کنار اسکلهٔ ما می‌گذرد.' },
        { en: 'A [[functional region|functional region]] forms around one [[hub|hub]].', es: 'Una [[functional region|región funcional]] se forma alrededor de un [[hub|centro]].', fa: '[[functional region|منطقهٔ کارکردی]] دور یک [[hub|مرکز]] ساخته می‌شود.' },
        { en: 'Every stream that drains into the Mississippi River is in its functional region.', es: 'Cada arroyo que desemboca en el río Misisipi está en su región funcional.', fa: 'هر جویی که به دریای میسی‌سی‌پی می‌ریزد، جزء منطقهٔ کارکردی آن است.' },
        { en: 'A cell phone tower makes one too. Our valley works the same way, just smaller.', es: 'Una torre de celulares también forma una. Nuestro valle funciona igual, solo que más pequeño.', fa: 'یک برج موبایل هم یکی می‌سازد. درهٔ ما هم همین‌طور است، فقط کوچک‌تر.' },
        { en: 'Every phone that connects to one tower is inside that tower\'s region.', es: 'Cada teléfono que se conecta a una torre está dentro de la región de esa torre.', fa: 'هر موبایلی که به یک برج وصل شود، داخل منطقهٔ همان برج است.' },
        { en: 'The edge is where the pull of the hub ends.', es: 'El borde está donde termina la fuerza del centro.', fa: 'کنارهٔ آن جایی است که کشش مرکز تمام می‌شود.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which one is a functional region?', es: '¿Cuál es una región funcional?', fa: 'کدام یک منطقهٔ کارکردی است؟' },
        choices: [
          { ok: true, t: { en: 'All the homes that get the Hub Town newspaper', es: 'Todas las casas que reciben el periódico de Pueblo Centro', fa: 'همهٔ خانه‌هایی که روزنامهٔ شهرک مرکز را می‌گیرند' },
            why: { en: 'Right! It is built around one center: the newspaper office.', es: '¡Correcto! Se forma alrededor de un centro: la oficina del periódico.', fa: 'درست! دور یک مرکز ساخته شده: دفتر روزنامه.' } },
          { t: { en: 'Every farm in the valley that grows wheat', es: 'Cada granja del valle que siembra trigo', fa: 'هر فارم دره که گندم می‌کارد' },
            why: { en: 'That is a formal region. The farms share one trait, but they are not tied to one center.', es: 'Esa es una región formal. Las granjas comparten una característica, pero no dependen de un centro.', fa: 'آن منطقهٔ رسمی است. فارم‌ها یک ویژگی مشترک دارند، اما به یک مرکز بسته نیستند.' } },
          { t: { en: 'The woods that everyone calls spooky', es: 'El bosque que todos llaman tenebroso', fa: 'جنگلی که همه آن را ترسناک می‌گویند' },
            why: { en: 'That is a perceptual region. It lives in people\'s minds, not around one hub.', es: 'Esa es una región perceptual. Vive en la mente de la gente, no alrededor de un centro.', fa: 'آن منطقهٔ ادراکی است. در ذهن مردم است، نه دور یک مرکز.' } }
        ]
      }
    },
    {
      x: 4, y: 17,
      name: { en: 'Ranger Aisha', es: 'Guardabosques Aisha', fa: 'جنگلبان عایشه' },
      role: { en: 'Forest ranger', es: 'Guardabosques', fa: 'جنگلبان' },
      look: { skin: 5, hair: '#120c08', shirt: '#4f7a3a', pants: '#5a4630' },
      lines: [
        { en: 'Shh! You are in the Whispering Woods. Well... maybe. Everyone calls this place spooky.', es: '¡Shh! Estás en el Bosque de los Susurros. Bueno... tal vez. Todos dicen que este lugar da miedo.', fa: 'هیس! تو در جنگل زمزمه هستی. خوب... شاید. همه این جا را ترسناک می‌گویند.' },
        { en: 'But ask five people where the woods begin, and you get five answers.', es: 'Pero si preguntas a cinco personas dónde empieza el bosque, tendrás cinco respuestas.', fa: 'اما اگر از پنج نفر بپرسی جنگل از کجا شروع می‌شود، پنج جواب می‌گیری.' },
        { en: 'That makes it a [[perceptual region|perceptual region]]. It is real because people agree it exists.', es: 'Eso la hace una [[perceptual region|región perceptual]]. Es real porque la gente cree que existe.', fa: 'همین آن را یک [[perceptual region|منطقهٔ ادراکی]] می‌سازد. واقعی است چون مردم قبول دارند که هست.' },
        { en: 'But no test can prove where its edges are.', es: 'Pero ninguna prueba puede mostrar dónde están sus bordes.', fa: 'اما هیچ امتحانی نمی‌تواند نشان دهد کناره‌هایش کجاست.' },
        { en: 'Tornado Alley in the middle of the United States is like this.', es: 'El Callejón de los Tornados, en el centro de Estados Unidos, es así.', fa: 'کوچهٔ تورنادو در وسط امریکا هم همین‌طور است.' },
        { en: 'It covers parts of Texas, Oklahoma and Kansas. Storms strike there often.', es: 'Cubre partes de Texas, Oklahoma y Kansas. Allí caen tormentas seguido.', fa: 'بخش‌هایی از تگزاس، اوکلاهوما و کانزاس را می‌گیرد. آنجا طوفان زیاد می‌آید.' },
        { en: 'But weather experts do not draw one official line around it.', es: 'Pero los expertos del clima no dibujan una línea oficial a su alrededor.', fa: 'اما کارشناسان هوا یک خط رسمی دور آن نمی‌کشند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why is the edge of a perceptual region hard to draw?', es: '¿Por qué es difícil dibujar el borde de una región perceptual?', fa: 'چرا کشیدن کنارهٔ یک منطقهٔ ادراکی سخت است؟' },
        choices: [
          { ok: true, t: { en: 'Each person puts the edge in a different place', es: 'Cada persona pone el borde en un lugar distinto', fa: 'هر کس کناره را در جای دیگری می‌گذارد' },
            why: { en: 'Yes. The region lives in people\'s minds, so each person draws it a little differently.', es: 'Sí. La región vive en la mente de la gente, así que cada persona la dibuja un poco distinta.', fa: 'بله. این منطقه در ذهن مردم است، پس هر کس آن را کمی فرق می‌کشد.' } },
          { t: { en: 'A fence marks it, but the fence keeps moving around', es: 'Una cerca la marca, pero la cerca se mueve de lugar', fa: 'یک کتاره آن را نشان می‌دهد، اما کتاره جابه‌جا می‌شود' },
            why: { en: 'No fence marks a perceptual region. It has no line on the ground at all.', es: 'Ninguna cerca marca una región perceptual. No tiene ninguna línea en el suelo.', fa: 'هیچ کتاره‌ای منطقهٔ ادراکی را نشان نمی‌دهد. هیچ خطی روی زمین ندارد.' } },
          { t: { en: 'It is built around one town that keeps moving', es: 'Se forma alrededor de un pueblo que se mueve', fa: 'دور یک شهرک ساخته شده که جابه‌جا می‌شود' },
            why: { en: 'A region built around one center is functional, not perceptual.', es: 'Una región formada alrededor de un centro es funcional, no perceptual.', fa: 'منطقه‌ای که دور یک مرکز ساخته شود کارکردی است، نه ادراکی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 29, y: 6, text: { en: 'HUB TOWN · All streams flow to this river. Farmers sell wheat here. Boats leave here. One [[hub|hub]], one [[functional region|functional region]].', es: 'PUEBLO CENTRO · Todos los arroyos llegan a este río. Aquí se vende trigo. De aquí salen botes. Un [[hub|centro]], una [[functional region|región funcional]].', fa: 'شهرک مرکز · همهٔ جوی‌ها به این دریا می‌ریزند. دهقانان گندم را این جا می‌فروشند. کشتی‌ها از این جا می‌روند. یک [[hub|مرکز]]، یک [[functional region|منطقهٔ کارکردی]].' } },
    { x: 11, y: 13, text: { en: 'THE WHISPERING WOODS START HERE? Or at the first pine? The path? The river? Nobody can prove it.', es: '¿EL BOSQUE DE LOS SUSURROS EMPIEZA AQUÍ? ¿O en el primer pino? ¿En el camino? ¿En el río? Nadie puede probarlo.', fa: 'جنگل زمزمه از اینجا شروع می‌شود؟ یا از اولین درخت ناجو؟ از راه؟ از دریا؟ هیچ کس نمی‌تواند ثابت کند.' } }
  ],

  /* the quest: Ms. Lin the printer (gold !) -> Kwame the paper rider -> follow the Ink Thief's riddles to 3 kinds of region, then catch it -> back to Ms. Lin */
  quest: {
    stat: 'reg',
    title: { en: 'The Paper Route Map', es: 'El mapa de la ruta del periódico', fa: 'نقشهٔ مسیر روزنامه' },
    giver: {
      x: 27, y: 7,
      name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      role: { en: 'Newspaper printer', es: 'Impresora del periódico', fa: 'چاپ‌کنندهٔ روزنامه' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#c0392b', pants: '#2f3b4a', style: 'bun' },
      lines: [
        { en: 'Help! I print the Hub Town newspaper.', es: '¡Ayuda! Yo imprimo el periódico de Pueblo Centro.', fa: 'کمک! من روزنامهٔ شهرک مرکز را چاپ می‌کنم.' },
        { en: 'An Ink Thief just ran off with my paper route map!', es: '¡Un Ladrón de Tinta acaba de llevarse mi mapa de reparto!', fa: 'یک دزد رنگ همین حالا نقشهٔ رساندن روزنامه‌ام را برد!' },
        { en: 'Kwame delivers my papers. He saw where the thief went.', es: 'Kwame reparte mis periódicos. Él vio adónde fue el ladrón.', fa: 'کوامی روزنامه‌هایم را می‌رساند. او دید که دزد به کجا رفت.' },
        { en: 'He is west of the river, just south of the wheat. Will you ask him?', es: 'Está al oeste del río, justo al sur del trigo. ¿Le preguntas?', fa: 'او در غرب دریا، درست جنوبِ گندم است. از او می‌پرسی؟' }
      ],
      wait: { en: 'Kwame is west of the river, south of the wheat. Cross the bridge, walk west.', es: 'Kwame está al oeste del río, al sur del trigo. Cruza el puente y camina al oeste.', fa: 'کوامی در غرب دریا، جنوبِ گندم است. از پل بگذر و به غرب برو.' },
      thanks: { en: 'My map! My shop is the [[hub|hub]] of a [[functional region|functional region]]. Thank you!', es: '¡Mi mapa! Mi imprenta es el [[hub|centro]] de una [[functional region|región funcional]]. ¡Gracias!', fa: 'نقشهٔ من! چاپخانهٔ من [[hub|مرکز]] یک [[functional region|منطقهٔ کارکردی]] است. تشکر!' }
    },
    contact: {
      x: 9, y: 10,
      name: { en: 'Kwame', es: 'Kwame', fa: 'کوامی' },
      role: { en: 'Paper delivery rider', es: 'Repartidor de periódicos', fa: 'روزنامه‌رسان' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a9d8f', pants: '#3a3a3a', style: 'short', hat: '#e9c46a' },
      lines: [
        { en: 'Yes, I saw it! That map shows every home on my route.', es: '¡Sí, lo vi! Ese mapa muestra cada casa de mi ruta.', fa: 'بله، دیدمش! آن نقشه هر خانهٔ مسیر مرا نشان می‌دهد.' },
        { en: 'All the routes start at one [[hub|hub]]: Ms. Lin\'s print shop.', es: 'Todas las rutas empiezan en un [[hub|centro]]: la imprenta de la Sra. Lin.', fa: 'همهٔ مسیرها از یک [[hub|مرکز]] شروع می‌شوند: چاپخانهٔ خانم لین.' },
        { en: 'The thief tore the map. Each piece is in a different kind of region.', es: 'El ladrón rompió el mapa. Cada pedazo está en un tipo distinto de región.', fa: 'دزد نقشه را پاره کرد. هر تکه در یک نوع منطقهٔ دیگر است.' },
        { en: 'Follow the riddles to each piece, then catch the thief!', es: 'Sigue los acertijos hasta cada pedazo. ¡Después atrapa al ladrón!', fa: 'چیستان‌ها را تا هر تکه دنبال کن، بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [3, 14],
      hops: [[12, 19], [8, 17]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "Hee hee! I hid 3 map pieces in the valley. Follow my riddles!"', es: 'El Ladrón de Tinta se ríe: "¡Ji ji! Escondí 3 pedazos del mapa en el valle. ¡Sigue mis acertijos!"', fa: 'دزد رنگ می‌خندد: «هی هی! سه تکهٔ نقشه را در دره پنهان کردم. چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1 is at the [[hub|hub]] of a [[functional region|functional region]]. All streams flow there. Boats leave from it.', es: 'El pedazo 1 está en el [[hub|centro]] de una [[functional region|región funcional]]. Los arroyos llegan allí. De allí salen los botes.', fa: 'تکهٔ ۱ در [[hub|مرکز]] یک [[functional region|منطقهٔ کارکردی]] است. همهٔ جوی‌ها آن جا می‌ریزند. کشتی‌ها از آن جا می‌روند.' },
          zones: [{ x: 24, y: 3, w: 7, h: 5 }],
          noBy: [{ x: 2, y: 6, w: 10, h: 4, t: { en: 'Every field here grows wheat. That is a formal region, not a hub. Look for the place where the streams and boats meet.', es: 'Aquí todos los campos tienen trigo. Eso es una región formal, no un centro. Busca el lugar donde se juntan los arroyos y los botes.', fa: 'این جا در همهٔ زمین‌ها گندم است. این یک منطقهٔ رسمی است، نه مرکز. جایی را پیدا کن که جوی‌ها و کشتی‌ها به هم می‌رسند.' } },
            { x: 1, y: 16, w: 12, h: 5, t: { en: 'These are the Whispering Woods. Nothing flows to them. A hub is where everything comes together.', es: 'Este es el Bosque de los Susurros. Nada llega aquí. Un centro es donde todo se junta.', fa: 'این جنگل زمزمه است. چیزی به این جا نمی‌آید. مرکز جایی است که همه چیز به هم می‌رسد.' } }],
          found: { en: 'Piece 1 was in Hub Town! Streams and boats meet here, at the hub.', es: '¡El pedazo 1 estaba en Pueblo Centro! Aquí, en el centro, se juntan los arroyos y los botes.', fa: 'تکهٔ ۱ در شهرک مرکز بود! جوی‌ها و کشتی‌ها این جا در مرکز به هم می‌رسند.' } },
        { t: { en: 'Piece 2 is in a [[formal region|formal region]], where one trait is true everywhere. Find fields with one crop.', es: 'El pedazo 2 está en una [[formal region|región formal]], donde una característica está en todas partes. Busca campos con un solo cultivo.', fa: 'تکهٔ ۲ در یک [[formal region|منطقهٔ رسمی]] است، جایی که یک ویژگی همه جا هست. زمین‌هایی با یک کشت را پیدا کن.' },
          zones: [{ x: 2, y: 6, w: 10, h: 4 }, { x: 6, y: 1, w: 10, h: 3 }],
          noBy: [{ x: 24, y: 1, w: 7, h: 11, t: { en: 'Hub Town is a hub. Many different things meet here. A formal region has one trait that is the same everywhere.', es: 'Pueblo Centro es un centro. Aquí se juntan muchas cosas distintas. Una región formal tiene una característica igual en todas partes.', fa: 'شهرک مرکز یک مرکز است. چیزهای زیاد و مختلف این جا به هم می‌رسند. منطقهٔ رسمی یک ویژگی دارد که در همه جا یکسان است.' } },
            { x: 1, y: 16, w: 12, h: 5, t: { en: 'People don\'t agree where these woods start. A formal region has a clear edge, where its trait stops.', es: 'La gente no se pone de acuerdo en dónde empieza este bosque. Una región formal tiene un borde claro, donde termina su característica.', fa: 'مردم سر این که این جنگل از کجا شروع می‌شود موافق نیستند. منطقهٔ رسمی یک لبهٔ روشن دارد، جایی که ویژگی‌اش تمام می‌شود.' } }],
          found: { en: 'Piece 2 was in the wheat! Every field grows wheat: a formal region.', es: '¡El pedazo 2 estaba en el trigo! Todos los campos tienen trigo: una región formal.', fa: 'تکهٔ ۲ در گندم بود! همهٔ زمین‌ها گندم دارند: یک منطقهٔ رسمی.' } },
        { t: { en: 'Piece 3 is in a [[perceptual region|perceptual region]]. Everybody says it is spooky, but nobody agrees where it starts.',
            es: 'El pedazo 3 está en una [[perceptual region|región perceptual]]. Todos dicen que da miedo, pero nadie se pone de acuerdo en dónde empieza.',
            fa: 'تکهٔ ۳ در یک [[perceptual region|منطقهٔ ادراکی]] است. همه می‌گویند ترسناک است، اما کسی سر این که از کجا شروع می‌شود موافق نیست.' },
          zones: [{ x: 1, y: 16, w: 13, h: 5 }],
          noBy: [{ x: 2, y: 6, w: 10, h: 4, t: { en: 'Everybody agrees where the wheat ends. A perceptual region has fuzzy edges that people argue about.', es: 'Todos están de acuerdo en dónde termina el trigo. Una región perceptual tiene bordes borrosos que la gente discute.', fa: 'همه موافق‌اند که گندم کجا تمام می‌شود. منطقهٔ ادراکی لبه‌های نامعلوم دارد که مردم سرش بحث می‌کنند.' } },
            { x: 24, y: 1, w: 7, h: 11, t: { en: 'Hub Town is a real hub: the streams really flow here. A perceptual region lives in people\'s minds.', es: 'Pueblo Centro es un centro real: los arroyos de verdad llegan aquí. Una región perceptual vive en la mente de la gente.', fa: 'شهرک مرکز یک مرکز واقعی است: جوی‌ها واقعاً به این جا می‌آیند. منطقهٔ ادراکی در ذهن مردم است.' } }],
          found: { en: 'Piece 3 was in the Whispering Woods! Everyone puts its edge somewhere different.', es: '¡El pedazo 3 estaba en el Bosque de los Susurros! Cada uno pone su borde en otro lugar.', fa: 'تکهٔ ۳ در جنگل زمزمه بود! هر کس لبه‌اش را جای دیگری می‌گذارد.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the map. All 3 pieces fit. It is whole again!', es: '¡Te atrapé! El Ladrón de Tinta devuelve el mapa. Los 3 pedazos encajan. ¡Está completo otra vez!', fa: 'گرفتمت! دزد رنگ نقشه را پس می‌دهد. هر سه تکه جور می‌شوند. دوباره کامل است!' },
      item: { icon: '🗺️', name: { en: 'The paper route map', es: 'El mapa de reparto', fa: 'نقشهٔ رساندن روزنامه' } }
    }
  },

  scraps: [[19, 1], [9, 20], [30, 20]],
  smudges: [[9, 8], [26, 19]],

  challenge: {
    at: [19, 13],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // each group has a marked area on the map: formal by the fenced farms, functional by the river, perceptual by the whispering woods
    zones: [{ bin: 'formal', x: 2, y: 10, w: 4, h: 2 }, { bin: 'func', x: 15, y: 10, w: 4, h: 2 }, { bin: 'perc', x: 14, y: 16, w: 4, h: 2 }],
    stat: 'reg',
    title: { en: 'Which kind of region?', es: '¿Qué tipo de región?', fa: 'کدام نوع منطقه؟' },
    intro: { en: 'The Grump tore the labels off the valley\'s region maps. Put each card in the right group: [[formal region|formal]], [[functional region|functional]] or [[perceptual region|perceptual]].',
      es: 'El Gruñón arrancó las etiquetas de los mapas de regiones del valle. Pon cada tarjeta en el grupo correcto: [[formal region|formal]], [[functional region|funcional]] o [[perceptual region|perceptual]].',
      fa: 'غرغرو برچسپ‌های نقشه‌های منطقه را کند. هر کارت را در گروه درست بگذار: [[formal region|رسمی]]، [[functional region|کارکردی]] یا [[perceptual region|ادراکی]].' },
    bins: [
      { id: 'formal', icon: '📏', label: { en: 'Formal region', es: 'Región formal', fa: 'منطقهٔ رسمی' }, sub: { en: 'one trait is true everywhere', es: 'una característica en todas partes', fa: 'یک ویژگی در همه جا درست است' } },
      { id: 'func', icon: '🎯', label: { en: 'Functional region', es: 'Región funcional', fa: 'منطقهٔ کارکردی' }, sub: { en: 'built around one hub', es: 'formada alrededor de un centro', fa: 'دور یک مرکز ساخته شده' } },
      { id: 'perc', icon: '💭', label: { en: 'Perceptual region', es: 'Región perceptual', fa: 'منطقهٔ ادراکی' }, sub: { en: 'people believe in it; the edges are fuzzy', es: 'la gente cree en ella; los bordes no son claros', fa: 'مردم به آن باور دارند؛ کناره‌ها روشن نیست' } }
    ],
    items: [
      { bin: 'formal', t: { en: 'The Corn Belt (Iowa, Illinois, Nebraska)', es: 'El Cinturón del Maíz (Iowa, Illinois, Nebraska)', fa: 'کمربند جواری (آیووا، ایلینوی، نبراسکا)' },
        why: { en: 'Corn farms are true across the whole Corn Belt, so it is a formal region.', es: 'Las granjas de maíz se encuentran en todo el Cinturón del Maíz, así que es una región formal.', fa: 'فارم‌های جواری در تمام کمربند جواری هستند، پس منطقهٔ رسمی است.' } },
      { bin: 'formal', t: { en: 'The countries where most people speak Spanish', es: 'Los países donde la mayoría habla español', fa: 'کشورهایی که بیشتر مردمش هسپانوی گپ می‌زنند' },
        why: { en: 'One shared trait, the Spanish language, runs across the whole area. That is formal.', es: 'Una característica compartida, el idioma español, está en toda el área. Eso es formal.', fa: 'یک ویژگی مشترک، یعنی زبان هسپانوی، در تمام ساحه هست. این رسمی است.' } },
      { bin: 'formal', t: { en: 'The city of Alexandria, inside its legal boundary', es: 'La ciudad de Alexandria, dentro de su límite legal', fa: 'شهر الکساندریا، داخل سرحد قانونی آن' },
        why: { en: 'One legal fact is true across the whole city: it is all Alexandria. That is a formal region.', es: 'Un hecho legal se cumple en toda la ciudad: todo es Alexandria. Eso es una región formal.', fa: 'یک حقیقت قانونی در تمام شهر درست است: همه‌اش الکساندریا است. این منطقهٔ رسمی است.' } },
      { bin: 'func', t: { en: 'Every stream that drains into the Mississippi River', es: 'Cada arroyo que desemboca en el río Misisipi', fa: 'هر جویی که به دریای میسی‌سی‌پی می‌ریزد' },
        why: { en: 'The water all flows toward one river, the hub. That makes a functional region.', es: 'Toda el agua corre hacia un río, el centro. Eso forma una región funcional.', fa: 'همهٔ آب به طرف یک دریا، یعنی مرکز، می‌رود. این منطقهٔ کارکردی می‌سازد.' } },
      { bin: 'func', t: { en: 'All the phones that connect to one cell tower', es: 'Todos los teléfonos que se conectan a una torre de celulares', fa: 'همهٔ موبایل‌هایی که به یک برج موبایل وصل می‌شوند' },
        why: { en: 'The tower is the hub. Its region ends where phones stop connecting to it.', es: 'La torre es el centro. Su región termina donde los teléfonos ya no se conectan.', fa: 'برج مرکز است. منطقه‌اش جایی تمام می‌شود که موبایل‌ها دیگر به آن وصل نمی‌شوند.' } },
      { bin: 'func', t: { en: 'The streets where one newspaper gets delivered', es: 'Las calles donde se reparte un periódico', fa: 'سرک‌هایی که یک روزنامه به آنجا رسانده می‌شود' },
        why: { en: 'The delivery area is built around one center, the newspaper office. That is functional.', es: 'El área de reparto se forma alrededor de un centro, la oficina del periódico. Eso es funcional.', fa: 'ساحهٔ رساندن دور یک مرکز، یعنی دفتر روزنامه، ساخته شده. این کارکردی است.' } },
      { bin: 'perc', t: { en: 'Tornado Alley', es: 'El Callejón de los Tornados', fa: 'کوچهٔ تورنادو' },
        why: { en: 'People use the name, but there is no official line around it. That is perceptual.', es: 'La gente usa el nombre, pero no tiene una línea oficial. Eso es perceptual.', fa: 'مردم این نام را به کار می‌برند، اما خط رسمی ندارد. این ادراکی است.' } },
      { bin: 'perc', t: { en: '"The South" in the United States', es: '"El Sur" de Estados Unidos', fa: '«جنوب» در امریکا' },
        why: { en: 'Ask five people which states are in "the South" and you get different answers. That is perceptual.', es: 'Si preguntas a cinco personas qué estados están en "el Sur", tendrás respuestas diferentes. Eso es perceptual.', fa: 'اگر از پنج نفر بپرسی کدام ایالت‌ها در «جنوب» هستند، جواب‌های مختلف می‌گیری. این ادراکی است.' } },
      { bin: 'perc', t: { en: 'The Whispering Woods that everyone calls spooky', es: 'El Bosque de los Susurros que todos llaman tenebroso', fa: 'جنگل زمزمه که همه آن را ترسناک می‌گویند' },
        why: { en: 'Everyone believes in the spooky woods, but nobody agrees where they start. That is perceptual.', es: 'Todos creen en el bosque tenebroso, pero nadie sabe dónde empieza. Eso es perceptual.', fa: 'همه به جنگل ترسناک باور دارند، اما کسی نمی‌داند از کجا شروع می‌شود. این ادراکی است.' } }
    ],
    success: { en: 'Every region map has its label back!', es: '¡Todos los mapas de regiones tienen su etiqueta otra vez!', fa: 'همهٔ نقشه‌های منطقه دوباره برچسپ خود را دارند!' }
  },

  boss: {
    at: [28, 16],
    stat: 'reg',
    need: 3,
    name: { en: 'The Line-Eater Grump', es: 'El Gruñón Come-Líneas', fa: 'غرغروی خط‌خور' },
    appear: { en: 'The Line-Eater Grump is hiding in the meadow east of the river!', es: '¡El Gruñón Come-Líneas se esconde en el prado al este del río!', fa: 'غرغروی خط‌خور در چمنزار شرق دریا پنهان است!' },
    taunt: { en: 'Crunch, crunch! I ate every region line. Without lines, how will you know where anything ends?', es: '¡Ñam, ñam! Me comí todas las líneas de las regiones. Sin líneas, ¿cómo sabrás dónde termina algo?', fa: 'قرچ، قرچ! همهٔ خط‌های منطقه را خوردم. بدون خط، چطور می‌فهمی چیزی کجا تمام می‌شود؟' },
    win: { en: 'The region lines snap back onto the map. Atlas page 1.2 floats down into your hands!', es: 'Las líneas de las regiones vuelven al mapa. ¡La página 1.2 del atlas cae en tus manos!', fa: 'خط‌های منطقه دوباره روی نقشه برمی‌گردند. صفحهٔ ۱.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a region?', es: '¿Qué es una región?', fa: 'منطقه چیست؟' },
        choices: [{ en: 'A group of places that share something', es: 'Un grupo de lugares que comparten algo', fa: 'گروهی از جاها که یک چیز مشترک دارند' }, { en: 'One single city and all its streets', es: 'Una sola ciudad y todas sus calles', fa: 'فقط یک شهر و همهٔ سرک‌هایش' }, { en: 'A tall kind of mountain range', es: 'Un tipo de cordillera alta', fa: 'یک نوع سلسله‌کوه بلند' }, { en: 'A long line painted on the ground', es: 'Una línea larga pintada en el suelo', fa: 'یک خط دراز که روی زمین رنگ شده' }], answer: 0,
        why: { en: 'A region ties places together by something they share, like a crop, a language or a hub.', es: 'Una región une lugares por algo que comparten, como un cultivo, un idioma o un centro.', fa: 'منطقه جاها را با چیز مشترکی به هم وصل می‌کند، مثل یک حاصل، یک زبان یا یک مرکز.' } },
      { q: { en: 'Regions are not found in nature. Who makes them?', es: 'Las regiones no se encuentran en la naturaleza. ¿Quién las hace?', fa: 'منطقه‌ها در طبیعت پیدا نمی‌شوند. چه کسی آن‌ها را می‌سازد؟' },
        choices: [{ en: 'People', es: 'Las personas', fa: 'مردم' }, { en: 'Rivers', es: 'Los ríos', fa: 'دریاها' }, { en: 'The weather', es: 'El clima', fa: 'هوا' }, { en: 'Animals', es: 'Los animales', fa: 'حیوانات' }], answer: 0,
        why: { en: 'People draw regions to help make sense of the world. Each one is a choice.', es: 'Las personas dibujan regiones para entender el mundo. Cada una es una decisión.', fa: 'مردم منطقه‌ها را می‌کشند تا جهان را بهتر بفهمند. هر کدام یک انتخاب است.' } },
      { q: { en: 'What makes an area a formal region?', es: '¿Qué hace que un área sea una región formal?', fa: 'چه چیز یک ساحه را منطقهٔ رسمی می‌سازد؟' },
        choices: [{ en: 'One trait is true across the whole area', es: 'Una característica se cumple en toda el área', fa: 'یک ویژگی در تمام ساحه درست است' }, { en: 'It is built around one center, like a train station', es: 'Se forma alrededor de un centro, como una estación de tren', fa: 'دور یک مرکز ساخته شده، مثل ایستگاه قطار' }, { en: 'People believe in it, but nobody agrees where it ends', es: 'La gente cree en ella, pero nadie sabe dónde termina', fa: 'مردم به آن باور دارند، اما کسی نمی‌داند کجا تمام می‌شود' }, { en: 'It changes shape for each person who draws it', es: 'Cambia de forma según quién la dibuje', fa: 'برای هر کس که آن را بکشد شکلش فرق می‌کند' }], answer: 0,
        why: { en: 'A formal region has one clear trait you can test anywhere inside it, like corn in the Corn Belt.', es: 'Una región formal tiene una característica clara que puedes comprobar en cualquier parte, como el maíz en el Cinturón del Maíz.', fa: 'منطقهٔ رسمی یک ویژگی روشن دارد که در هر جای آن امتحان می‌شود، مثل جواری در کمربند جواری.' } },
      { q: { en: 'What makes an area a functional region?', es: '¿Qué hace que un área sea una región funcional?', fa: 'چه چیز یک ساحه را منطقهٔ کارکردی می‌سازد؟' },
        choices: [{ en: 'Built around a center, it ends where the center stops reaching', es: 'Se forma alrededor de un centro y termina donde este ya no llega', fa: 'دور یک مرکز ساخته شده و جایی تمام می‌شود که مرکز نمی‌رسد' }, { en: 'One trait is true in every part of the area', es: 'Una característica se cumple en cada parte del área', fa: 'یک ویژگی در هر بخش ساحه درست است' }, { en: 'Many people believe in it, but nobody agrees where the edge is', es: 'Mucha gente cree en ella, pero nadie sabe dónde está su borde', fa: 'بسیاری از مردم به آن باور دارند، اما کسی نمی‌داند کناره‌اش کجاست' }, { en: 'It has a name and a label on a printed map', es: 'Tiene un nombre y una etiqueta en un mapa impreso', fa: 'روی نقشهٔ چاپی نام و برچسپ دارد' }], answer: 0,
        why: { en: 'A functional region needs a hub, like a river, a tower or a store. Move the hub and the region changes.', es: 'Una región funcional necesita un centro, como un río, una torre o una tienda. Si mueves el centro, la región cambia.', fa: 'منطقهٔ کارکردی یک مرکز لازم دارد، مثل دریا، برج یا دکان. اگر مرکز جابه‌جا شود، منطقه هم تغییر می‌کند.' } },
      { q: { en: 'A delivery app draws a shape around your home. Restaurants inside the shape will deliver to you. What kind of region is that shape?', es: 'Una app de comida dibuja una forma alrededor de tu casa. Los restaurantes dentro de la forma te llevan comida. ¿Qué tipo de región es esa forma?', fa: 'یک اپلیکیشن رساندن غذا دور خانه‌ات یک شکل می‌کشد. رستورانت‌های داخل شکل برایت غذا می‌آورند. آن شکل چه نوع منطقه است؟' },
        choices: [{ en: 'A functional region', es: 'Una región funcional', fa: 'منطقهٔ کارکردی' }, { en: 'A formal region', es: 'Una región formal', fa: 'منطقهٔ رسمی' }, { en: 'A perceptual region', es: 'Una región perceptual', fa: 'منطقهٔ ادراکی' }, { en: 'It is not a region', es: 'No es una región', fa: 'منطقه نیست' }], answer: 0,
        why: { en: 'The shape is built around one center, your home, and ends where delivery stops. That is functional.', es: 'La forma se arma alrededor de un centro, tu casa, y termina donde ya no hay entregas. Eso es funcional.', fa: 'این شکل دور یک مرکز، یعنی خانهٔ تو، ساخته شده و جایی تمام می‌شود که رساندن غذا تمام شود. این کارکردی است.' } },
      { q: { en: 'Alexandria is a city with one legal boundary. Based only on that, what kind of region is it?', es: 'Alexandria es una ciudad con un límite legal. Solo con ese dato, ¿qué tipo de región es?', fa: 'الکساندریا شهری با یک سرحد قانونی است. فقط با همین، چه نوع منطقه است؟' },
        choices: [{ en: 'A formal region, because one legal fact is true across the whole city', es: 'Una región formal, porque un hecho legal se cumple en toda la ciudad', fa: 'منطقهٔ رسمی، چون یک حقیقت قانونی در تمام شهر درست است' }, { en: 'A perceptual region, because people argue about its neighborhoods', es: 'Una región perceptual, porque la gente discute sobre sus barrios', fa: 'منطقهٔ ادراکی، چون مردم سر محله‌هایش بحث می‌کنند' }, { en: 'A functional region, because people drive in and out of it', es: 'Una región funcional, porque la gente entra y sale en carro', fa: 'منطقهٔ کارکردی، چون مردم با موتر داخل و خارج می‌شوند' }, { en: 'A mental map, because people picture it differently', es: 'Un mapa mental, porque la gente la imagina distinto', fa: 'نقشهٔ ذهنی، چون مردم آن را فرق تصور می‌کنند' }], answer: 0,
        why: { en: 'A legal line is a trait you can test. Every spot inside it is in Alexandria.', es: 'Una línea legal es una característica que se puede comprobar. Cada punto adentro está en Alexandria.', fa: 'خط قانونی ویژگی‌ای است که امتحان می‌شود. هر نقطهٔ داخل آن در الکساندریا است.' } },
      { q: { en: 'Ask ten students where Del Ray ends and Old Town begins. You get ten different answers. What does that tell you?', es: 'Pregunta a diez estudiantes dónde termina Del Ray y empieza Old Town. Recibes diez respuestas distintas. ¿Qué te dice eso?', fa: 'از ده شاگرد بپرس دل‌ری کجا تمام می‌شود و اولد تاون کجا شروع می‌شود. ده جواب مختلف می‌گیری. این چه می‌گوید؟' },
        choices: [{ en: 'It is a perceptual boundary that lives in their minds', es: 'Es un límite perceptual que vive en su mente', fa: 'یک سرحد ادراکی است که در ذهن آن‌ها است' }, { en: 'The students have not learned the official city line yet', es: 'Los estudiantes todavía no aprendieron la línea oficial de la ciudad', fa: 'شاگردان هنوز خط رسمی شهر را یاد نگرفته‌اند' }, { en: 'One answer is right and the other nine are wrong', es: 'Una respuesta es correcta y las otras nueve están mal', fa: 'یک جواب درست است و نُه جواب دیگر غلط' }, { en: 'The neighborhoods moved to new places last year', es: 'Los barrios se movieron a otro lugar el año pasado', fa: 'محله‌ها سال گذشته به جای دیگری رفتند' }], answer: 0,
        why: { en: 'Neighborhood edges often live in people\'s minds. That is what makes a perceptual region.', es: 'Los bordes de los barrios muchas veces viven en la mente de la gente. Eso forma una región perceptual.', fa: 'کنارهٔ محله‌ها اغلب در ذهن مردم است. همین منطقهٔ ادراکی را می‌سازد.' } },
      { q: { en: 'Where is the boundary of a functional region?', es: '¿Dónde está el límite de una región funcional?', fa: 'سرحد منطقهٔ کارکردی کجاست؟' },
        choices: [{ en: 'Where the pull toward the hub ends', es: 'Donde termina la fuerza hacia el centro', fa: 'جایی که کشش به طرف مرکز تمام می‌شود' }, { en: 'Where a fence stands', es: 'Donde hay una cerca', fa: 'جایی که کتاره ایستاده' }, { en: 'Wherever people feel it should be drawn', es: 'Donde la gente siente que debe dibujarse', fa: 'هر جایی که مردم حس کنند باید کشیده شود' }, { en: 'Where one crop stops growing', es: 'Donde un cultivo deja de crecer', fa: 'جایی که یک حاصل دیگر نمی‌روید' }], answer: 0,
        why: { en: 'A functional region ends where people, water or signals stop moving toward its center.', es: 'Una región funcional termina donde la gente, el agua o la señal dejan de ir hacia su centro.', fa: 'منطقهٔ کارکردی جایی تمام می‌شود که مردم، آب یا سیگنال دیگر به طرف مرکزش نمی‌روند.' } }
    ]
  },

  learned: [
    { en: 'A [[region|region]] is a group of places that share something. People draw regions to make sense of the world.', es: 'Una [[region|región]] es un grupo de lugares que comparten algo. Las personas dibujan regiones para entender el mundo.', fa: '[[region|منطقه]] گروهی از جاهاست که یک چیز مشترک دارند. مردم منطقه‌ها را می‌کشند تا جهان را بهتر بفهمند.' },
    { en: 'A [[formal region|formal region]] shares one trait everywhere, like the Corn Belt. A [[functional region|functional region]] is built around a [[hub|hub]], like a river or a cell tower.', es: 'Una [[formal region|región formal]] comparte una característica en todas partes, como el Cinturón del Maíz. Una [[functional region|región funcional]] se forma alrededor de un [[hub|centro]], como un río o una torre de celulares.', fa: '[[formal region|منطقهٔ رسمی]] در همه جا یک ویژگی مشترک دارد، مثل کمربند جواری. [[functional region|منطقهٔ کارکردی]] دور یک [[hub|مرکز]] ساخته می‌شود، مثل دریا یا برج موبایل.' },
    { en: 'A [[perceptual region|perceptual region]], like Tornado Alley, is real because people believe in it. Its [[boundary|boundary]] is fuzzy.', es: 'Una [[perceptual region|región perceptual]], como el Callejón de los Tornados, es real porque la gente cree en ella. Su [[boundary|límite]] no es claro.', fa: '[[perceptual region|منطقهٔ ادراکی]]، مثل کوچهٔ تورنادو، واقعی است چون مردم به آن باور دارند. [[boundary|سرحد]] آن روشن نیست.' }
  ],
  reflect: {
    q: { en: 'Think of a region you belong to, like your neighborhood, your school bus route, or a place people call by a nickname. What kind of region is it, and how do you know?', es: 'Piensa en una región a la que perteneces, como tu barrio, la ruta de tu bus escolar o un lugar que la gente llama con un apodo. ¿Qué tipo de región es y cómo lo sabes?', fa: 'به منطقه‌ای فکر کن که تو جزء آن هستی، مثل محله‌ات، راه سرویس مکتب، یا جایی که مردم آن را با یک لقب صدا می‌کنند. چه نوع منطقه است و از کجا می‌دانی؟' },
    starter: { en: 'One region I belong to is', es: 'Una región a la que pertenezco es', fa: 'یک منطقه که من جزء آن هستم' }
  }
};
