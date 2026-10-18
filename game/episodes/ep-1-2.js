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
    { en: 'Pip: "Oh no! The Smudge ate every region line in Mapmaker\'s Valley. Now nobody knows where the Wheat Belt ends or what Hub Town is the center of. Talk to the farmer, the boat pilot and the ranger. Then fix the compass stone."',
      es: 'Pip: "¡Oh, no! El Borrón se comió todas las líneas de las regiones del Valle del Cartógrafo. Ahora nadie sabe dónde termina el Cinturón del Trigo ni de qué es centro el Pueblo Centro. Habla con la agricultora, el piloto del bote y la guardabosques. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «وای! لکه همهٔ خط‌های منطقه‌ها را در درهٔ نقشه‌کش خورد. حالا هیچ کس نمی‌داند کمربند گندم کجا تمام می‌شود یا شهرک مرکز، مرکزِ چه چیزی است. با دهقان، رانندهٔ کشتی و جنگلبان گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the Wheat Belt, every field is wheat (formal region).
     NE: Hub Town, where the streams join one river, with a market and a dock (functional region).
     SW: the Whispering Woods, thick in the corner and thin at the edges, so nobody agrees where they start (perceptual region).
     SE: an open meadow by the river where the Smudge hides. */
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
        { en: 'Welcome to the Wheat Belt! Look around. Every farm here grows wheat, field after field. A [[region|region]] is a group of places that share something. Here, we share wheat.',
          es: '¡Bienvenido al Cinturón del Trigo! Mira a tu alrededor. Todas las granjas aquí siembran trigo, campo tras campo. Una [[region|región]] es un grupo de lugares que comparten algo. Aquí compartimos el trigo.',
          fa: 'به کمربند گندم خوش آمدی! به اطراف نگاه کن. همهٔ فارم‌های اینجا گندم می‌کارند، زمین پشت زمین. [[region|منطقه]] گروهی از جاهاست که یک چیز مشترک دارند. اینجا همه گندم داریم.',
          easy: { en: 'Every farm here grows wheat. A [[region|region]] is a group of places that share something.', es: 'Todas las granjas aquí siembran trigo. Una [[region|región]] es un grupo de lugares que comparten algo.', fa: 'همهٔ فارم‌های اینجا گندم می‌کارند. [[region|منطقه]] گروهی از جاهاست که یک چیز مشترک دارند.' } },
        { en: 'When one trait is true across the whole area, it is a [[formal region|formal region]]. You can test it yourself. Walk into any field and you will find wheat. The [[boundary|boundary]] is where the wheat stops.',
          es: 'Cuando una característica se cumple en toda el área, es una [[formal region|región formal]]. Puedes comprobarlo tú mismo. Entra a cualquier campo y encontrarás trigo. El [[boundary|límite]] está donde se acaba el trigo.',
          fa: 'وقتی یک ویژگی در تمام یک ساحه درست باشد، آن یک [[formal region|منطقهٔ رسمی]] است. خودت می‌توانی امتحان کنی. به هر زمینی بروی گندم می‌بینی. [[boundary|سرحد]] جایی است که گندم تمام می‌شود.',
          easy: { en: 'One trait everywhere = a [[formal region|formal region]]. Its [[boundary|boundary]] is where the wheat stops.', es: 'Una característica en todas partes = una [[formal region|región formal]]. Su [[boundary|límite]] está donde se acaba el trigo.', fa: 'یک ویژگی در همه جا = [[formal region|منطقهٔ رسمی]]. [[boundary|سرحد]] آن جایی است که گندم تمام می‌شود.' } },
        { en: 'The United States has a real one called the Corn Belt. Farmers in states like Iowa, Illinois and Nebraska grow corn on a huge scale, year after year.',
          es: 'Estados Unidos tiene una de verdad llamada el Cinturón del Maíz. Los agricultores de estados como Iowa, Illinois y Nebraska siembran maíz en enormes cantidades, año tras año.',
          fa: 'امریکا یک منطقهٔ واقعی به نام کمربند جواری دارد. دهقانان در ایالت‌هایی مثل آیووا، ایلینوی و نبراسکا هر سال جواری بسیار زیاد می‌کارند.',
          easy: { en: 'A real example: the Corn Belt in Iowa, Illinois and Nebraska. Farmers there grow lots of corn.', es: 'Un ejemplo real: el Cinturón del Maíz en Iowa, Illinois y Nebraska. Allí se siembra mucho maíz.', fa: 'یک مثال واقعی: کمربند جواری در آیووا، ایلینوی و نبراسکا. آنجا جواری زیاد می‌کارند.' } }
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
        { en: 'I steer the river boat here at Hub Town. Look at the water. Every stream in this valley flows into one river, and that river flows right past our dock.',
          es: 'Yo manejo el bote del río aquí en Pueblo Centro. Mira el agua. Todos los arroyos del valle llegan a un mismo río, y ese río pasa justo por nuestro muelle.',
          fa: 'من کشتی دریایی را اینجا در شهرک مرکز می‌رانم. به آب نگاه کن. همهٔ جوی‌های این دره به یک دریا می‌ریزند و آن دریا درست از کنار اسکلهٔ ما می‌گذرد.',
          easy: { en: 'All the streams in the valley flow into one river. The river passes our town.', es: 'Todos los arroyos del valle llegan a un río. El río pasa por nuestro pueblo.', fa: 'همهٔ جوی‌های دره به یک دریا می‌ریزند. دریا از کنار شهرک ما می‌گذرد.' } },
        { en: 'A [[functional region|functional region]] forms around one [[hub|hub]]. Every stream that drains into the Mississippi River belongs to its functional region. Our valley works the same way, just smaller.',
          es: 'Una [[functional region|región funcional]] se forma alrededor de un [[hub|centro]]. Cada arroyo que desemboca en el río Misisipi pertenece a su región funcional. Nuestro valle funciona igual, solo que más pequeño.',
          fa: '[[functional region|منطقهٔ کارکردی]] دور یک [[hub|مرکز]] ساخته می‌شود. هر جویی که به دریای میسی‌سی‌پی می‌ریزد، جزء منطقهٔ کارکردی آن است. درهٔ ما هم همین‌طور است، فقط کوچک‌تر.',
          easy: { en: 'A [[functional region|functional region]] is built around one center, a [[hub|hub]]. The Mississippi River is a big example.', es: 'Una [[functional region|región funcional]] se forma alrededor de un [[hub|centro]]. El río Misisipi es un gran ejemplo.', fa: '[[functional region|منطقهٔ کارکردی]] دور یک [[hub|مرکز]] ساخته می‌شود. دریای میسی‌سی‌پی یک مثال بزرگ است.' } },
        { en: 'A cell phone tower makes one too. Every phone that connects to one tower is inside that tower\'s small region. The edge is where the pull of the hub ends.',
          es: 'Una torre de celulares también forma una. Cada teléfono que se conecta a una torre está dentro de la pequeña región de esa torre. El borde está donde termina la fuerza del centro.',
          fa: 'یک برج موبایل هم یکی می‌سازد. هر موبایلی که به یک برج وصل شود، داخل منطقهٔ کوچک همان برج است. کنارهٔ آن جایی است که کشش مرکز تمام می‌شود.',
          easy: { en: 'A phone tower has a region too: all the phones that connect to it.', es: 'Una torre de celulares también tiene una región: todos los teléfonos que se conectan a ella.', fa: 'برج موبایل هم یک منطقه دارد: همهٔ موبایل‌هایی که به آن وصل می‌شوند.' } }
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
        { en: 'Shh! You are in the Whispering Woods. Well... maybe. Everyone in the valley calls this place spooky. But ask five people where the woods begin, and you will get five answers.',
          es: '¡Shh! Estás en el Bosque de los Susurros. Bueno... tal vez. Todos en el valle dicen que este lugar da miedo. Pero si preguntas a cinco personas dónde empieza el bosque, tendrás cinco respuestas.',
          fa: 'هیس! تو در جنگل زمزمه هستی. خوب... شاید. همهٔ مردم دره این جا را ترسناک می‌گویند. اما اگر از پنج نفر بپرسی جنگل از کجا شروع می‌شود، پنج جواب می‌گیری.',
          easy: { en: 'People call these woods spooky. But nobody agrees where the woods begin.', es: 'La gente dice que este bosque da miedo. Pero nadie sabe dónde empieza.', fa: 'مردم این جنگل را ترسناک می‌گویند. اما کسی موافق نیست که از کجا شروع می‌شود.' } },
        { en: 'That makes it a [[perceptual region|perceptual region]]. It is real because people agree it exists. But no test can prove where its edges are.',
          es: 'Eso la hace una [[perceptual region|región perceptual]]. Es real porque la gente está de acuerdo en que existe. Pero ninguna prueba puede mostrar dónde están sus bordes.',
          fa: 'همین آن را یک [[perceptual region|منطقهٔ ادراکی]] می‌سازد. واقعی است چون مردم قبول دارند که وجود دارد. اما هیچ امتحانی نمی‌تواند نشان دهد کناره‌هایش کجاست.',
          easy: { en: 'People believe in it, but its edges are fuzzy. That is a [[perceptual region|perceptual region]].', es: 'La gente cree en ella, pero sus bordes no son claros. Eso es una [[perceptual region|región perceptual]].', fa: 'مردم به آن باور دارند، اما کناره‌هایش روشن نیست. این یک [[perceptual region|منطقهٔ ادراکی]] است.' } },
        { en: 'Tornado Alley in the middle of the United States is like this. It covers parts of Texas, Oklahoma and Kansas. Storms strike there often, but weather experts do not draw one official line around it.',
          es: 'El Callejón de los Tornados, en el centro de Estados Unidos, es así. Cubre partes de Texas, Oklahoma y Kansas. Allí caen tormentas seguido, pero los expertos del clima no dibujan una línea oficial a su alrededor.',
          fa: 'کوچهٔ تورنادو در وسط امریکا هم همین‌طور است. بخش‌هایی از تگزاس، اوکلاهوما و کانزاس را می‌گیرد. آنجا طوفان زیاد می‌آید، اما کارشناسان هوا یک خط رسمی دور آن نمی‌کشند.',
          easy: { en: 'Tornado Alley is a real perceptual region. It has no official line.', es: 'El Callejón de los Tornados es una región perceptual real. No tiene una línea oficial.', fa: 'کوچهٔ تورنادو یک منطقهٔ ادراکی واقعی است. خط رسمی ندارد.' } }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why is the edge of a perceptual region hard to draw?', es: '¿Por qué es difícil dibujar el borde de una región perceptual?', fa: 'چرا کشیدن کنارهٔ یک منطقهٔ ادراکی سخت است؟' },
        choices: [
          { ok: true, t: { en: 'The edge is wherever people say it is, and people disagree', es: 'El borde está donde la gente dice, y la gente no se pone de acuerdo', fa: 'کناره هر جایی است که مردم بگویند، و مردم موافق نیستند' },
            why: { en: 'Yes. The region lives in people\'s minds, so each person draws it a little differently.', es: 'Sí. La región vive en la mente de la gente, así que cada persona la dibuja un poco distinta.', fa: 'بله. این منطقه در ذهن مردم است، پس هر کس آن را کمی فرق می‌کشد.' } },
          { t: { en: 'A fence marks it, but the fence keeps moving', es: 'Una cerca la marca, pero la cerca se mueve', fa: 'یک کتاره آن را نشان می‌دهد، اما کتاره جابه‌جا می‌شود' },
            why: { en: 'No fence marks a perceptual region. It has no line on the ground at all.', es: 'Ninguna cerca marca una región perceptual. No tiene ninguna línea en el suelo.', fa: 'هیچ کتاره‌ای منطقهٔ ادراکی را نشان نمی‌دهد. هیچ خطی روی زمین ندارد.' } },
          { t: { en: 'It is built around one town that keeps moving', es: 'Se forma alrededor de un pueblo que se mueve', fa: 'دور یک شهرک ساخته شده که جابه‌جا می‌شود' },
            why: { en: 'A region built around one center is functional, not perceptual.', es: 'Una región formada alrededor de un centro es funcional, no perceptual.', fa: 'منطقه‌ای که دور یک مرکز ساخته شود کارکردی است، نه ادراکی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 29, y: 6, text: { en: 'HUB TOWN · Every stream in the valley flows to this river. Farmers bring wheat to this market. Boats leave from this dock. One [[hub|hub]] makes one [[functional region|functional region]].',
      es: 'PUEBLO CENTRO · Todos los arroyos del valle llegan a este río. Los agricultores traen trigo a este mercado. Los botes salen de este muelle. Un [[hub|centro]] forma una [[functional region|región funcional]].',
      fa: 'شهرک مرکز · همهٔ جوی‌های دره به این دریا می‌ریزند. دهقانان گندم را به این بازار می‌آورند. کشتی‌ها از این اسکله حرکت می‌کنند. یک [[hub|مرکز]] یک [[functional region|منطقهٔ کارکردی]] می‌سازد.' } },
    { x: 11, y: 13, text: { en: 'THE WHISPERING WOODS START HERE? Some people say they start at the first pine. Some say at the path. Some say at the river. Who is right? Nobody can prove it.',
      es: '¿EL BOSQUE DE LOS SUSURROS EMPIEZA AQUÍ? Algunos dicen que empieza en el primer pino. Otros, en el camino. Otros, en el río. ¿Quién tiene razón? Nadie puede probarlo.',
      fa: 'جنگل زمزمه از اینجا شروع می‌شود؟ بعضی می‌گویند از اولین درخت ناجو. بعضی می‌گویند از راه. بعضی می‌گویند از دریا. حق با کیست؟ هیچ کس نمی‌تواند ثابت کند.' } }
  ],

  /* the quest: Ms. Lin the printer (gold !) -> Kwame the paper rider -> beat the Ink Thief in the Whispering Woods -> back to Ms. Lin */
  quest: {
    stat: 'reg',
    title: { en: 'The Paper Route Map', es: 'El mapa de la ruta del periódico', fa: 'نقشهٔ مسیر روزنامه' },
    giver: {
      x: 27, y: 7,
      name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      role: { en: 'Newspaper printer', es: 'Impresora del periódico', fa: 'چاپ‌کنندهٔ روزنامه' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#c0392b', pants: '#2f3b4a', style: 'bun' },
      lines: [
        { en: 'Help! I print the Hub Town newspaper. An Ink Thief just ran off with my paper route map!',
          es: '¡Ayuda! Yo imprimo el periódico de Pueblo Centro. ¡Un Ladrón de Tinta acaba de llevarse mi mapa de reparto!',
          fa: 'کمک! من روزنامهٔ شهرک مرکز را چاپ می‌کنم. یک دزد رنگ همین حالا نقشهٔ رساندن روزنامه‌ام را برد!' },
        { en: 'Kwame delivers my papers. He saw where the thief went. He is west of the river, just south of the wheat fields. Will you ask him?',
          es: 'Kwame reparte mis periódicos. Él vio adónde fue el ladrón. Está al oeste del río, justo al sur de los campos de trigo. ¿Le preguntas?',
          fa: 'کوامی روزنامه‌هایم را می‌رساند. او دید که دزد به کجا رفت. او در غرب دریا، درست جنوبِ زمین‌های گندم است. از او می‌پرسی؟' }
      ],
      wait: { en: 'Kwame is west of the river, just south of the wheat fields. Cross the bridge and walk west.',
        es: 'Kwame está al oeste del río, justo al sur de los campos de trigo. Cruza el puente y camina hacia el oeste.',
        fa: 'کوامی در غرب دریا، درست جنوبِ زمین‌های گندم است. از پل بگذر و به طرف غرب برو.' },
      thanks: { en: 'My map! Look. Every home on it gets the paper from my print shop. My shop is the [[hub|hub]]. The route ends where the paper stops going. That is a [[functional region|functional region]]. Thank you!',
        es: '¡Mi mapa! Mira. Cada casa del mapa recibe el periódico desde mi imprenta. Mi imprenta es el [[hub|centro]]. La ruta termina donde el periódico ya no llega. Eso es una [[functional region|región funcional]]. ¡Gracias!',
        fa: 'نقشهٔ من! ببین. هر خانه‌ای که روی آن است، روزنامه را از چاپخانهٔ من می‌گیرد. چاپخانهٔ من [[hub|مرکز]] است. مسیر جایی تمام می‌شود که روزنامه دیگر نمی‌رسد. این یک [[functional region|منطقهٔ کارکردی]] است. تشکر!' }
    },
    contact: {
      x: 9, y: 10,
      name: { en: 'Kwame', es: 'Kwame', fa: 'کوامی' },
      role: { en: 'Paper delivery rider', es: 'Repartidor de periódicos', fa: 'روزنامه‌رسان' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a9d8f', pants: '#3a3a3a', style: 'short', hat: '#e9c46a' },
      lines: [
        { en: 'Yes, I saw it! That map is important. It shows every home on my route. All the routes start at one [[hub|hub]]: Ms. Lin\'s print shop.',
          es: '¡Sí, lo vi! Ese mapa es importante. Muestra cada casa de mi ruta. Todas las rutas empiezan en un [[hub|centro]]: la imprenta de la Sra. Lin.',
          fa: 'بله، دیدمش! آن نقشه مهم است. هر خانهٔ مسیر مرا نشان می‌دهد. همهٔ مسیرها از یک [[hub|مرکز]] شروع می‌شوند: چاپخانهٔ خانم لین.' },
        { en: 'The thief ran south-west into the Whispering Woods. It is hiding in a small gap between the pines, just north of the ranger. It hates region questions. Get two right and it will drop the map!',
          es: 'El ladrón corrió al suroeste, hacia el Bosque de los Susurros. Se esconde en un pequeño hueco entre los pinos, justo al norte de la guardabosques. Odia las preguntas sobre regiones. ¡Acierta dos y soltará el mapa!',
          fa: 'دزد به طرف جنوب غرب، به جنگل زمزمه دوید. او در یک جای خالی کوچک میان درختان ناجو، درست شمالِ جنگلبان پنهان است. از سوال‌های منطقه بدش می‌آید. دو سوال را درست جواب بده تا نقشه را بیندازد!' }
      ]
    },
    action: {
      type: 'fight',
      at: [3, 14],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! This paper route map is mine now. Answer my region riddles, or I keep it!',
        es: '¡Ji ji! Este mapa de reparto ahora es mío. ¡Responde mis acertijos sobre regiones o me lo quedo!',
        fa: 'هی هی! این نقشهٔ رساندن روزنامه حالا مال من است. به چیستان‌های منطقهٔ من جواب بده، وگرنه آن را نگه می‌دارم!' },
      win: { en: 'Drat! The Ink Thief drops the map and runs off in a puff of ink.',
        es: '¡Rayos! El Ladrón de Tinta suelta el mapa y huye en una nube de tinta.',
        fa: 'اَه! دزد رنگ نقشه را می‌اندازد و در یک ابر سیاهی فرار می‌کند.' },
      need: 2,
      questions: [
        { q: { en: 'Ms. Lin\'s newspaper goes out from her print shop to many homes. What is the hub of that region?', es: 'El periódico de la Sra. Lin sale de su imprenta hacia muchas casas. ¿Cuál es el centro de esa región?', fa: 'روزنامهٔ خانم لین از چاپخانه‌اش به خانه‌های زیادی می‌رود. مرکز این منطقه چیست؟' },
          choices: [{ en: 'The print shop', es: 'La imprenta', fa: 'چاپخانه' }, { en: 'The Wheat Belt', es: 'El Cinturón del Trigo', fa: 'کمربند گندم' }, { en: 'The Whispering Woods', es: 'El Bosque de los Susurros', fa: 'جنگل زمزمه' }, { en: 'The river bridge', es: 'El puente del río', fa: 'پل دریا' }], answer: 0,
          why: { en: 'The paper starts at the print shop and moves out to the homes. The starting point is the center, so it is the hub.', es: 'El periódico empieza en la imprenta y sale hacia las casas. El punto de partida es el centro de la región.', fa: 'روزنامه از چاپخانه شروع می‌شود و به خانه‌ها می‌رود. نقطهٔ شروع، مرکز منطقه است.' } },
        { q: { en: 'Which one is a formal region?', es: '¿Cuál es una región formal?', fa: 'کدام یک منطقهٔ رسمی است؟' },
          choices: [{ en: 'The countries that use the euro as money', es: 'Los países que usan el euro como dinero', fa: 'کشورهایی که پولشان یورو است' }, { en: 'The homes one pizza shop delivers to', es: 'Las casas a las que lleva comida una pizzería', fa: 'خانه‌هایی که یک پیتزافروشی به آن‌ها غذا می‌رساند' }, { en: 'The area people call "the Midwest"', es: 'La zona que la gente llama "el Medio Oeste"', fa: 'ساحه‌ای که مردم آن را «غرب میانه» می‌گویند' }, { en: 'The towns that send their kids to one school', es: 'Los pueblos que mandan a sus niños a una escuela', fa: 'شهرک‌هایی که اولادهایشان را به یک مکتب می‌فرستند' }], answer: 0,
          why: { en: 'Each of those countries shares one trait: the euro. One shared trait makes a formal region. The others are built around a hub or live in people\'s minds.', es: 'Cada uno de esos países comparte una característica: el euro. Una característica compartida forma una región formal. Las otras se forman alrededor de un centro o viven en la mente de la gente.', fa: 'هر یک از آن کشورها یک ویژگی مشترک دارد: یورو. یک ویژگی مشترک منطقهٔ رسمی می‌سازد. باقی دور یک مرکز ساخته شده‌اند یا در ذهن مردم هستند.' } },
        { q: { en: 'Everyone says the Whispering Woods are spooky. Why are they a perceptual region?', es: 'Todos dicen que el Bosque de los Susurros da miedo. ¿Por qué es una región perceptual?', fa: 'همه می‌گویند جنگل زمزمه ترسناک است. چرا یک منطقهٔ ادراکی است؟' },
          choices: [{ en: 'People believe in them, but nobody can prove where they start', es: 'La gente cree en él, pero nadie puede probar dónde empieza', fa: 'مردم به آن باور دارند، اما کسی نمی‌تواند ثابت کند از کجا شروع می‌شود' }, { en: 'A fence goes all the way around them', es: 'Una cerca lo rodea por completo', fa: 'یک کتاره دور تا دور آن است' }, { en: 'A law says exactly where they end', es: 'Una ley dice exactamente dónde termina', fa: 'یک قانون دقیق می‌گوید کجا تمام می‌شود' }, { en: 'They are built around one print shop', es: 'Se forma alrededor de una imprenta', fa: 'دور یک چاپخانه ساخته شده' }], answer: 0,
          why: { en: 'A perceptual region lives in people\'s minds. Everyone feels the woods are real, but each person puts the edge in a different place.', es: 'Una región perceptual vive en la mente de la gente. Todos sienten que el bosque es real, pero cada persona pone el borde en un lugar distinto.', fa: 'منطقهٔ ادراکی در ذهن مردم است. همه حس می‌کنند جنگل واقعی است، اما هر کس کناره‌اش را در یک جای دیگر می‌گذارد.' } }
      ],
      item: { icon: '🗺️', name: { en: 'The paper route map', es: 'El mapa de reparto', fa: 'نقشهٔ رساندن روزنامه' } }
    }
  },

  scraps: [[19, 1], [9, 20], [30, 20]],
  smudges: [[9, 8], [26, 19]],

  challenge: {
    at: [19, 13],
    type: 'sort',
    stat: 'reg',
    title: { en: 'Which kind of region?', es: '¿Qué tipo de región?', fa: 'کدام نوع منطقه؟' },
    intro: { en: 'The Smudge tore the labels off the valley\'s region maps. Put each card in the right group: [[formal region|formal]], [[functional region|functional]] or [[perceptual region|perceptual]].',
      es: 'El Borrón arrancó las etiquetas de los mapas de regiones del valle. Pon cada tarjeta en el grupo correcto: [[formal region|formal]], [[functional region|funcional]] o [[perceptual region|perceptual]].',
      fa: 'لکه برچسپ‌های نقشه‌های منطقه را کند. هر کارت را در گروه درست بگذار: [[formal region|رسمی]]، [[functional region|کارکردی]] یا [[perceptual region|ادراکی]].' },
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
    name: { en: 'The Line-Eater Smudge', es: 'El Borrón Come-Líneas', fa: 'لکهٔ خط‌خور' },
    appear: { en: 'The Line-Eater Smudge is hiding in the meadow east of the river!', es: '¡El Borrón Come-Líneas se esconde en el prado al este del río!', fa: 'لکهٔ خط‌خور در چمنزار شرق دریا پنهان است!' },
    taunt: { en: 'Crunch, crunch! I ate every region line. Without lines, how will you know where anything ends?', es: '¡Ñam, ñam! Me comí todas las líneas de las regiones. Sin líneas, ¿cómo sabrás dónde termina algo?', fa: 'قرچ، قرچ! همهٔ خط‌های منطقه را خوردم. بدون خط، چطور می‌فهمی چیزی کجا تمام می‌شود؟' },
    win: { en: 'The region lines snap back onto the map. Atlas page 1.2 floats down into your hands!', es: 'Las líneas de las regiones vuelven al mapa. ¡La página 1.2 del atlas cae en tus manos!', fa: 'خط‌های منطقه دوباره روی نقشه برمی‌گردند. صفحهٔ ۱.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a region?', es: '¿Qué es una región?', fa: 'منطقه چیست؟' },
        choices: [{ en: 'A group of places that share something', es: 'Un grupo de lugares que comparten algo', fa: 'گروهی از جاها که یک چیز مشترک دارند' }, { en: 'One single city', es: 'Una sola ciudad', fa: 'فقط یک شهر' }, { en: 'A kind of mountain', es: 'Un tipo de montaña', fa: 'یک نوع کوه' }, { en: 'A line painted on the ground', es: 'Una línea pintada en el suelo', fa: 'خطی که روی زمین رنگ شده' }], answer: 0,
        why: { en: 'A region ties places together by something they share, like a crop, a language or a hub.', es: 'Una región une lugares por algo que comparten, como un cultivo, un idioma o un centro.', fa: 'منطقه جاها را با چیز مشترکی به هم وصل می‌کند، مثل یک حاصل، یک زبان یا یک مرکز.' } },
      { q: { en: 'Regions are not found in nature. Who makes them?', es: 'Las regiones no se encuentran en la naturaleza. ¿Quién las hace?', fa: 'منطقه‌ها در طبیعت پیدا نمی‌شوند. چه کسی آن‌ها را می‌سازد؟' },
        choices: [{ en: 'People', es: 'Las personas', fa: 'مردم' }, { en: 'Rivers', es: 'Los ríos', fa: 'دریاها' }, { en: 'The weather', es: 'El clima', fa: 'هوا' }, { en: 'Animals', es: 'Los animales', fa: 'حیوانات' }], answer: 0,
        why: { en: 'People draw regions to help make sense of the world. Each one is a choice.', es: 'Las personas dibujan regiones para entender el mundo. Cada una es una decisión.', fa: 'مردم منطقه‌ها را می‌کشند تا جهان را بهتر بفهمند. هر کدام یک انتخاب است.' } },
      { q: { en: 'What makes an area a formal region?', es: '¿Qué hace que un área sea una región formal?', fa: 'چه چیز یک ساحه را منطقهٔ رسمی می‌سازد؟' },
        choices: [{ en: 'One trait is true across the whole area', es: 'Una característica se cumple en toda el área', fa: 'یک ویژگی در تمام ساحه درست است' }, { en: 'It is built around one center, like a train station', es: 'Se forma alrededor de un centro, como una estación de tren', fa: 'دور یک مرکز ساخته شده، مثل ایستگاه قطار' }, { en: 'People believe in it, but nobody agrees where it ends', es: 'La gente cree en ella, pero nadie sabe dónde termina', fa: 'مردم به آن باور دارند، اما کسی نمی‌داند کجا تمام می‌شود' }, { en: 'It changes shape for each person who draws it', es: 'Cambia de forma según quién la dibuje', fa: 'برای هر کس که آن را بکشد شکلش فرق می‌کند' }], answer: 0,
        why: { en: 'A formal region has one clear trait you can test anywhere inside it, like corn in the Corn Belt.', es: 'Una región formal tiene una característica clara que puedes comprobar en cualquier parte, como el maíz en el Cinturón del Maíz.', fa: 'منطقهٔ رسمی یک ویژگی روشن دارد که در هر جای آن امتحان می‌شود، مثل جواری در کمربند جواری.' } },
      { q: { en: 'What makes an area a functional region?', es: '¿Qué hace que un área sea una región funcional?', fa: 'چه چیز یک ساحه را منطقهٔ کارکردی می‌سازد؟' },
        choices: [{ en: 'It is built around one center and ends where that center stops reaching', es: 'Se forma alrededor de un centro y termina donde ese centro ya no llega', fa: 'دور یک مرکز ساخته شده و جایی تمام می‌شود که آن مرکز دیگر نمی‌رسد' }, { en: 'One trait is true in every part of the area', es: 'Una característica se cumple en cada parte del área', fa: 'یک ویژگی در هر بخش ساحه درست است' }, { en: 'Many people believe in it', es: 'Mucha gente cree en ella', fa: 'بسیاری از مردم به آن باور دارند' }, { en: 'It has a label on a printed map', es: 'Tiene una etiqueta en un mapa impreso', fa: 'روی نقشهٔ چاپی برچسپ دارد' }], answer: 0,
        why: { en: 'A functional region needs a hub, like a river, a tower or a store. Move the hub and the region changes.', es: 'Una región funcional necesita un centro, como un río, una torre o una tienda. Si mueves el centro, la región cambia.', fa: 'منطقهٔ کارکردی یک مرکز لازم دارد، مثل دریا، برج یا دکان. اگر مرکز جابه‌جا شود، منطقه هم تغییر می‌کند.' } },
      { q: { en: 'A delivery app draws a shape around your home. Restaurants inside the shape will deliver to you. What kind of region is that shape?', es: 'Una app de comida dibuja una forma alrededor de tu casa. Los restaurantes dentro de la forma te llevan comida. ¿Qué tipo de región es esa forma?', fa: 'یک اپلیکیشن رساندن غذا دور خانه‌ات یک شکل می‌کشد. رستورانت‌های داخل شکل برایت غذا می‌آورند. آن شکل چه نوع منطقه است؟' },
        choices: [{ en: 'A functional region', es: 'Una región funcional', fa: 'منطقهٔ کارکردی' }, { en: 'A formal region', es: 'Una región formal', fa: 'منطقهٔ رسمی' }, { en: 'A perceptual region', es: 'Una región perceptual', fa: 'منطقهٔ ادراکی' }, { en: 'It is not a region', es: 'No es una región', fa: 'منطقه نیست' }], answer: 0,
        why: { en: 'The shape is built around one center, your home, and ends where delivery stops. That is functional.', es: 'La forma se arma alrededor de un centro, tu casa, y termina donde ya no hay entregas. Eso es funcional.', fa: 'این شکل دور یک مرکز، یعنی خانهٔ تو، ساخته شده و جایی تمام می‌شود که رساندن غذا تمام شود. این کارکردی است.' } },
      { q: { en: 'Alexandria is a city with one legal boundary. Based only on that, what kind of region is it?', es: 'Alexandria es una ciudad con un límite legal. Solo con ese dato, ¿qué tipo de región es?', fa: 'الکساندریا شهری با یک سرحد قانونی است. فقط با همین، چه نوع منطقه است؟' },
        choices: [{ en: 'A formal region, because one legal fact is true across the whole city', es: 'Una región formal, porque un hecho legal se cumple en toda la ciudad', fa: 'منطقهٔ رسمی، چون یک حقیقت قانونی در تمام شهر درست است' }, { en: 'A perceptual region, because people argue about its neighborhoods', es: 'Una región perceptual, porque la gente discute sobre sus barrios', fa: 'منطقهٔ ادراکی، چون مردم سر محله‌هایش بحث می‌کنند' }, { en: 'A functional region, because people drive in and out of it', es: 'Una región funcional, porque la gente entra y sale en carro', fa: 'منطقهٔ کارکردی، چون مردم با موتر داخل و خارج می‌شوند' }, { en: 'A mental map, because people picture it differently', es: 'Un mapa mental, porque la gente la imagina distinto', fa: 'نقشهٔ ذهنی، چون مردم آن را فرق تصور می‌کنند' }], answer: 0,
        why: { en: 'A legal line is a trait you can test. Every spot inside it is in Alexandria.', es: 'Una línea legal es una característica que se puede comprobar. Cada punto adentro está en Alexandria.', fa: 'خط قانونی ویژگی‌ای است که امتحان می‌شود. هر نقطهٔ داخل آن در الکساندریا است.' } },
      { q: { en: 'Ask ten students where Del Ray ends and Old Town begins. You get ten different answers. What does that tell you?', es: 'Pregunta a diez estudiantes dónde termina Del Ray y empieza Old Town. Recibes diez respuestas distintas. ¿Qué te dice eso?', fa: 'از ده شاگرد بپرس دل‌ری کجا تمام می‌شود و اولد تاون کجا شروع می‌شود. ده جواب مختلف می‌گیری. این چه می‌گوید؟' },
        choices: [{ en: 'It is a perceptual boundary, so people do not agree where the line is', es: 'Es un límite perceptual, así que la gente no está de acuerdo sobre la línea', fa: 'یک سرحد ادراکی است، پس مردم سر جای خط موافق نیستند' }, { en: 'The students have not learned the official line yet', es: 'Los estudiantes todavía no aprendieron la línea oficial', fa: 'شاگردان هنوز خط رسمی را یاد نگرفته‌اند' }, { en: 'One answer is right and the other nine are wrong', es: 'Una respuesta es correcta y las otras nueve están mal', fa: 'یک جواب درست است و نُه جواب دیگر غلط' }, { en: 'The neighborhoods moved last year', es: 'Los barrios se movieron el año pasado', fa: 'محله‌ها سال گذشته جابه‌جا شدند' }], answer: 0,
        why: { en: 'Neighborhood edges often live in people\'s minds. That is what makes a perceptual region.', es: 'Los bordes de los barrios muchas veces viven en la mente de la gente. Eso forma una región perceptual.', fa: 'کنارهٔ محله‌ها اغلب در ذهن مردم است. همین منطقهٔ ادراکی را می‌سازد.' } },
      { q: { en: 'Where is the boundary of a functional region?', es: '¿Dónde está el límite de una región funcional?', fa: 'سرحد منطقهٔ کارکردی کجاست؟' },
        choices: [{ en: 'Where the pull toward the hub ends', es: 'Donde termina la fuerza hacia el centro', fa: 'جایی که کشش به طرف مرکز تمام می‌شود' }, { en: 'Where a fence stands', es: 'Donde hay una cerca', fa: 'جایی که کتاره ایستاده' }, { en: 'Wherever people feel it should be', es: 'Donde la gente siente que debe estar', fa: 'هر جایی که مردم حس کنند باید باشد' }, { en: 'Where one crop stops growing', es: 'Donde un cultivo deja de crecer', fa: 'جایی که یک حاصل دیگر نمی‌روید' }], answer: 0,
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
