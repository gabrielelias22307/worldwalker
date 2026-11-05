/* WORLDWALKER · Episode 8.3 · Borders, Conflict and Cooperation (WG.17) · THE FINALE
   The Council Hall stands where many kinds of land meet: snow and mountains to the west, desert to the east,
   forest and farms to the south, the sea to the south-east. A river runs across the whole map and is the border
   between two neighbors, North Bank and South Bank. The main bridge leads straight down from the hall door. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'WG.17',
  title: { en: 'Borders and Working Together', es: 'Fronteras y cooperación', fa: 'سرحدها و همکاری' },
  place: { en: 'The Council of Realms', es: 'El Consejo de los Reinos', fa: 'شورای سرزمین‌ها' },
  intro: [
    { en: 'The last page! People from all eight realms came to rebuild the Great Atlas.', es: '¡La última página! Gente de los ocho reinos vino a reconstruir el Gran Atlas.', fa: 'آخرین صفحه! مردم هر هشت سرزمین آمده‌اند تا اطلس بزرگ را دوباره بسازند.' },
    { en: 'The Great Grump turns neighbors against each other. Talk to the guests, then the stone.', es: 'El Gran Gruñón pone a los vecinos en contra. Habla con los invitados y luego ve a la piedra.', fa: 'غرغروی بزرگ همسایه‌ها را دشمن هم می‌کند. با مهمانان گپ بزن، بعد نزد سنگ برو.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [-74.0, 40.75],
    start: [
      { en: 'Countries meet at the United Nations in New York to work together.',
        es: 'Los países se reúnen en las Naciones Unidas, en Nueva York, para trabajar juntos.',
        fa: 'کشورها در سازمان ملل در نیویارک جمع می‌شوند تا با هم کار کنند.' },
      { en: 'The United Nations has 193 member countries.',
        es: 'Las Naciones Unidas tienen 193 países miembros.',
        fa: 'سازمان ملل ۱۹۳ کشور عضو دارد.' },
      { en: 'The border between the U.S. and Canada is the longest in the world.',
        es: 'La frontera entre Estados Unidos y Canadá es la más larga del mundo.',
        fa: 'سرحد امریکا و کانادا درازترین سرحد جهان است.' }
    ],
    page: { en: 'Some borders are straight lines, like much of the border between Egypt and Sudan.',
      es: 'Algunas fronteras son líneas rectas, como gran parte de la frontera entre Egipto y Sudán.',
      fa: 'بعضی سرحدها خط‌های راست هستند، مثل بیشتر سرحد مصر و سودان.' },
    guess: {
      q: { en: 'Some borders are perfectly straight lines. Who made them?', es: 'Algunas fronteras son líneas rectas. ¿Quién las hizo?', fa: 'بعضی سرحدها خط‌های کاملاً راست هستند. چه کسی آن‌ها را ساخت؟' },
      choices: [
        { t: { en: '🌋 Volcanoes', es: '🌋 Los volcanes', fa: '🌋 آتشفشان‌ها' } },
        { t: { en: '✏️ People', es: '✏️ Las personas', fa: '✏️ مردم' }, ok: true }
      ],
      why: { en: 'Rivers and mountains make curvy borders, but people draw straight-line borders on maps.', es: 'Los ríos y las montañas hacen fronteras curvas, pero las personas dibujan las rectas en los mapas.', fa: 'دریاها و کوه‌ها سرحدهای کج می‌سازند، اما مردم سرحدهای راست را روی نقشه می‌کشند.' }
    },
    next: {
      q: { en: 'After our whole trip: are the world\'s places connected or alone?', es: 'Después de todo el viaje: ¿los lugares del mundo están conectados o solos?', fa: 'بعد از تمام سفر: جاهای جهان به هم وصل هستند یا تنها؟' },
      choices: [
        { t: { en: '🔗 Connected', es: '🔗 Conectados', fa: '🔗 وصل' }, ok: true },
        { t: { en: '🏝️ All alone', es: '🏝️ Solos', fa: '🏝️ تنها' } }
      ],
      why: { en: 'Rivers, trade and borders link places, so countries depend on each other and work together.', es: 'Los ríos, el comercio y las fronteras unen los lugares, así que los países dependen unos de otros.', fa: 'دریاها، تجارت و سرحدها جاها را وصل می‌کنند، پس کشورها به همدیگر نیاز دارند و با هم کار می‌کنند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [19, 12], name: { en: 'Grandpa Luc', es: 'Abuelo Luc', fa: 'پدرکلان لوک' },
      look: { skin: 0, hair: '#d0d0d0', shirt: '#b8332b', pants: '#2f3a4a', hat: '#2f2f2f' },
      lines: [
        { en: 'Come in! I came from Canada for the council. Try some maple syrup.', es: '¡Pasa! Vine de Canadá para el consejo. Prueba un poco de jarabe de arce.', fa: 'بیا داخل! من برای شورا از کانادا آمدم. کمی شیرهٔ درخت افرا بچش.' },
        { en: 'At home, big lakes sit on the border. Both countries keep them clean together.', es: 'En mi país, unos lagos grandes están en la frontera. Los dos países los cuidan juntos.', fa: 'در وطنم، جهیل‌های بزرگ روی سرحد هستند. هر دو کشور با هم آن‌ها را پاک نگه می‌دارند.' }
      ] },
    { at: [28, 17], name: { en: 'Ingrid', es: 'Ingrid', fa: 'اینگرید' },
      look: { skin: 0, hair: '#a0522d', shirt: '#4f7fbf', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Careful, the floor is wet. My kids splashed in the river all morning.', es: 'Cuidado, el piso está mojado. Mis hijos chapotearon en el río toda la mañana.', fa: 'احتیاط، زمین تر است. اطفالم تمام صبح در دریا آب‌بازی کردند.' },
        { en: 'Back home, the Rhine River crosses several countries. They cleaned it together.', es: 'En mi país, el río Rin cruza varios países. Lo limpiaron juntos.', fa: 'در وطنم، دریای راین از چند کشور می‌گذرد. آن‌ها با هم آن را پاک کردند.' }
      ] }
  ],

  /* 48 x 22 tiles = 3 x 2 screens.
     Top: snow and the Andes-like mountains (west) · the Council Hall (middle) · desert with an oasis (east).
     Bottom: forest (west) · the two neighbor villages, North Bank and South Bank, with farms (middle) · the river mouth and the sea (east).
     The river (rows 14-15) is the border. Two bridges cross it; the main one is right below the hall door. */
  map: [
    'AAAAAAAAAAAAAAAAPPPTTTTTTTTTTrrrrrrrrrrrrrrrrrrr',
    'AnnnPnnnnnPnnnzz..WWWWWWWWWWWW.sssuussssuussssur',
    'AnPnnnnAAnnnnnzz..WffffffffxfW.ssssuusssssssuusr',
    'AnnnnnAAAnnPnnzz..WffffffffffW.ssssssspOpssuussr',
    'AnnPnnnnnnnnnzz...WffffffffffW.sssuussssssssssur',
    'AnnnnnnPnnnnzzz...WffffffffffW.uuussssuusssssssr',
    'AnPnnnnnnnPnzz....WffffffffffW.ssssssssssuusssur',
    'AnnnnPnnnnnnzz....WWWWWWdWWWWW.sssuusssssssssssr',
    'AnnnnnnnnnzzzT..........:.......ssssssuussssuusr',
    'AnPnnnnnnzzz......,.....:....,.sgsssssssssssuusr',
    'Annnnnzzzzz..T....T.....:.....ssggsssssssssssssr',
    'A....T..T....T....RRR...:.......s.....ssss~~~~~=',
    'A.T.....T..,.....,hdh...:...,.....p..ssss~~~~~~=',
    'A....T.....T..........x.:...........sss~~~~~~~~=',
    '~~~~~~~~B~~~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~=',
    '~~~~~~~~B~~~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~=',
    'T...,...:....T..........:..QQQ.....sss~~~~~~~~~=',
    'T.TT....:..TT...........:..hdh...p..ssskk~~~====',
    'T.TTT...:...............:...........sss~~~~~=s==',
    'T..T....:...T,...oo1o...:..www....p..sss~~~~====',
    'T.......:........o2oo.......www.......ssss~~~~~=',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT================'
  ],
  start: [24, 9],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): the two neighbors build a bridge together over the border river, between their two towns */
  build: [
    { id: 'bridge', kind: 'place', board: [28, 12], tile: 'B', over: '~', ok: [[26, 13], [26, 14], [26, 15], [26, 16]], cost: { wood: 1 },
      name: { en: 'The friendship bridge', es: 'El puente de la amistad', fa: 'پل دوستی' },
      ask: { en: 'The Silver River is a [[natural border|natural border]] between North Bank and South Bank. A border does not have to keep neighbors apart. Help them build a bridge together, across the river, between the two towns.',
        es: 'El río Plateado es una [[natural border|frontera natural]] entre Orilla Norte y Orilla Sur. Una frontera no tiene que separar a los vecinos. Ayúdalos a construir un puente juntos, sobre el río, entre los dos pueblos.',
        fa: 'دریای نقره‌ای یک [[natural border|سرحد طبیعی]] بین ساحل شمالی و ساحل جنوبی است. سرحد لازم نیست همسایه‌ها را از هم دور نگه دارد. کمک کن تا با هم یک پل روی دریا، بین دو قریه بسازند.' },
      why: { en: 'Right between the two towns. Now the neighbors can visit and trade!', es: '¡Justo entre los dos pueblos! Ahora los vecinos pueden visitarse y comerciar.', fa: 'درست بین دو قریه. حالا همسایه‌ها می‌توانند به دیدن هم بروند و تجارت کنند!' },
      wrong: { en: 'Not here. The bridge goes over the river, between the North Bank town and the South Bank town, just east of the main bridge.', es: 'Aquí no. El puente va sobre el río, entre el pueblo de Orilla Norte y el de Orilla Sur, justo al este del puente principal.', fa: 'این جا نه. پل روی دریا می‌رود، بین قریهٔ ساحل شمالی و قریهٔ ساحل جنوبی، کمی شرقِ پل بزرگ.' },
      wrongBy: [
        { x: 1, y: 11, w: 15, h: 6, t: { en: 'Too far west. A bridge here would not join the two towns.', es: 'Demasiado al oeste. Un puente aquí no uniría los dos pueblos.', fa: 'خیلی به طرف غرب. پل این جا دو قریه را به هم وصل نمی‌کند.' } },
        { x: 31, y: 11, w: 16, h: 6, t: { en: 'Too far east, near the sea. A bridge here would not join the two towns.', es: 'Demasiado al este, cerca del mar. Un puente aquí no uniría los dos pueblos.', fa: 'خیلی به طرف شرق، نزدیک بحر. پل این جا دو قریه را به هم وصل نمی‌کند.' } }
      ],
      done: { en: 'The friendship bridge is built! The river is still the border, but now it joins the neighbors instead of keeping them apart. When neighbors work together, both sides win.',
        es: '¡El puente de la amistad está listo! El río sigue siendo la frontera, pero ahora une a los vecinos en vez de separarlos. Cuando los vecinos trabajan juntos, los dos ganan.',
        fa: 'پل دوستی ساخته شد! دریا هنوز سرحد است، اما حالا همسایه‌ها را به هم وصل می‌کند، نه اینکه از هم دور نگه دارد. وقتی همسایه‌ها با هم کار کنند، هر دو طرف برنده می‌شوند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [4, 12], at: [8, 13], decor: 'flower',
      clue: { en: 'Rivers are often borders. Find the bridge farthest west on the river. Stand just north of it.', es: 'Los ríos suelen ser fronteras. Busca el puente más al oeste del río. Párate justo al norte de él.', fa: 'دریاها اکثراً سرحد هستند. غربی‌ترین پل دریا را پیدا کن. درست شمالِ آن بایست.' },
      text: { en: 'A river is a natural border, easy to see on maps, like the Rio Grande. A flower!', es: 'Un río es una frontera natural, fácil de ver en los mapas, como el río Bravo. ¡Una flor!', fa: 'دریا یک سرحد طبیعی است که روی نقشه آسان دیده می‌شود، مثل ریو گرانده. یک گل!' } },
    { clueAt: [32, 2], at: [35, 7], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps east, then 5 steps south. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al este y luego 5 pasos al sur. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به شرق برو، بعد ۵ قدم به جنوب. چیزی آن جا پنهان است.' },
      text: { en: 'East is right, south is down. Much of the Egypt–Sudan border follows one line of latitude. A gem!', es: 'El este está a la derecha y el sur abajo. Gran parte de la frontera Egipto–Sudán sigue una línea de latitud. ¡Una gema!', fa: 'شرق راست و جنوب پایین است. بیشتر سرحد مصر و سودان یک خط عرض جغرافیایی را دنبال می‌کند. یک جواهر!' } }
  ],
  // only the Sail (Episode 8.2) crosses the deep water to the little island in the east sea
  secret: { tool: 'sail', at: [45, 18],
    text: { en: 'Your sail carried you over deep water to a hidden island! The note in the chest says the Mekong River flows through six countries, so they all must share it.',
      es: '¡Tu vela te llevó por aguas profundas hasta una isla escondida! La nota del cofre dice que el río Mekong pasa por seis países, así que todos deben compartirlo.',
      fa: 'بادبان تو را از آب‌های عمیق به یک جزیرهٔ پنهان برد! یادداشت داخل صندوق می‌گوید دریای میکانگ از شش کشور می‌گذرد، پس همه باید آن را با هم استفاده کنند.' } },

  words: {
    border: { en: 'a line that shows where one country ends and another begins', es: 'una línea que muestra dónde termina un país y empieza otro', fa: 'خطی که نشان می‌دهد یک کشور کجا تمام می‌شود و کشور دیگر کجا شروع می‌شود' },
    'natural border': { en: 'a border that follows a river, a mountain range or a coastline', es: 'una frontera que sigue un río, una cordillera o una costa', fa: 'سرحدی که از یک دریا، رشته‌کوه یا ساحل پیروی می‌کند' },
    'geometric border': { en: 'a straight-line border drawn by people that does not follow any river or mountain', es: 'una frontera en línea recta dibujada por personas, que no sigue ningún río ni montaña', fa: 'سرحد خط راست که مردم کشیده‌اند و از هیچ دریا یا کوهی پیروی نمی‌کند' },
    'boundary dispute': { en: 'when two countries argue over where a border should be', es: 'cuando dos países discuten sobre dónde debe estar una frontera', fa: 'وقتی دو کشور دربارهٔ جای یک سرحد اختلاف دارند' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده بین کشورها' },
    neutral: { en: 'not on either side; fair to both', es: 'que no está de ningún lado; justo con los dos', fa: 'به طرف هیچ کس نیست؛ با هر دو طرف منصف است' },
    'united nations': { en: 'a group where almost every country in the world meets to talk and work together', es: 'un grupo donde casi todos los países del mundo se reúnen para hablar y trabajar juntos', fa: 'سازمانی که تقریباً همهٔ کشورهای جهان در آن جمع می‌شوند تا گپ بزنند و با هم کار کنند' },
    'trade bloc': { en: 'a group of countries that agree to make trade easier between them', es: 'un grupo de países que acuerdan hacer más fácil el comercio entre ellos', fa: 'گروهی از کشورها که توافق می‌کنند تجارت بین خود را آسان‌تر کنند' },
    upstream: { en: 'closer to where a river starts', es: 'más cerca de donde empieza un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' }
  },

  npcs: [
    {
      x: 21, y: 3,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      remember: { ep: '1.1', t: { en: 'Look at you now! You put the village signposts back, found Grandpa Tomas\'s compass and won your very first atlas page.', es: '¡Mírate ahora! Volviste a poner los letreros del pueblo, encontraste la brújula del abuelo Tomás y ganaste tu primera página del atlas.', fa: 'حالا خودت را ببین! تابلوهای ده را دوباره سر جایشان گذاشتی، قطب‌نمای پدرکلان توماس را پیدا کردی و اولین صفحهٔ اطلس خود را بردی.' } },
      role: { en: 'Mapmaker and host of the Council', es: 'Cartógrafa y anfitriona del Consejo', fa: 'نقشه‌کش و میزبان شورا' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#c0392b' },
      lines: [
        { en: 'Welcome to the Council Hall! It is me, Rosa, from Mapmaker\'s Valley.', es: '¡Bienvenido al Salón del Consejo! Soy yo, Rosa, del Valle del Cartógrafo.', fa: 'به تالار شورا خوش آمدی! من هستم، روزا، از درهٔ نقشه‌کش.' },
        { en: 'Guests from all eight realms are here. Together we will finish the Great Atlas.', es: 'Aquí hay invitados de los ocho reinos. Juntos terminaremos el Gran Atlas.', fa: 'مهمانان هر هشت سرزمین اینجا هستند. با هم اطلس بزرگ را تمام می‌کنیم.' },
        { en: 'Countries sit inside [[border|borders]]. Most are calm, but neighbors who disagree must work together.', es: 'Los países están dentro de [[border|fronteras]]. Casi todas son tranquilas, pero los vecinos que no están de acuerdo deben cooperar.', fa: 'کشورها داخل [[border|سرحدها]] هستند. بیشتر آرام‌اند، اما همسایه‌هایی که موافق نیستند باید همکاری کنند.' },
        { en: 'The [[united nations|United Nations]] has 193 members. A [[trade bloc|trade bloc]], like the EU, eases trade.', es: 'La [[united nations|ONU]] tiene 193 miembros. Un [[trade bloc|bloque comercial]], como la Unión Europea, facilita el comercio.', fa: '[[united nations|سازمان ملل متحد]] ۱۹۳ عضو دارد. یک [[trade bloc|گروه تجارتی]]، مثل اتحادیهٔ اروپا، تجارت را آسان می‌کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do countries join groups like the United Nations?', es: '¿Por qué los países se unen a grupos como las Naciones Unidas?', fa: 'چرا کشورها به گروه‌هایی مثل سازمان ملل متحد می‌پیوندند؟' },
        choices: [
          { ok: true, t: { en: 'To work together on shared problems', es: 'Para trabajar juntos en problemas comunes', fa: 'تا روی مشکلات مشترک با هم کار کنند' },
            why: { en: 'Groups give countries a place to meet, talk and solve problems together.', es: 'Los grupos dan a los países un lugar para reunirse, hablar y resolver problemas juntos.', fa: 'گروه‌ها به کشورها جایی برای دیدار، گپ زدن و حل مشکلات با هم می‌دهند.' } },
          { t: { en: 'To erase all the borders in the world', es: 'Para borrar todas las fronteras del mundo', fa: 'تا همهٔ سرحدهای جهان را پاک کنند' },
            why: { en: 'Member countries keep their own borders. They work together across them.', es: 'Los países miembros mantienen sus fronteras. Trabajan juntos a través de ellas.', fa: 'کشورهای عضو سرحدهای خود را نگه می‌دارند. از دو طرف سرحد با هم کار می‌کنند.' } },
          { t: { en: 'To make every country exactly the same', es: 'Para que todos los países sean exactamente iguales', fa: 'تا همهٔ کشورها دقیقاً یک‌رقم شوند' },
            why: { en: 'Each country keeps its own language, laws and ways. They just cooperate.', es: 'Cada país mantiene su idioma, sus leyes y sus costumbres. Solo cooperan.', fa: 'هر کشور زبان، قانون و رسم خود را نگه می‌دارد. فقط با هم همکاری می‌کنند.' } }
        ]
      }
    },
    {
      x: 6, y: 5,
      name: { en: 'Camila Rojas', es: 'Camila Rojas', fa: 'کامیلا روخاس' },
      role: { en: 'Mountain guide from Chile', es: 'Guía de montaña de Chile', fa: 'رهنمای کوه از چیلی' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#d64545', pants: '#3a3a3a', hat: '#2f6fd6' },
      lines: [
        { en: '¡Hola! I guide hikers in the Andes. They are part of the Chile–Argentina border.', es: '¡Hola! Guío excursionistas en los Andes. Son parte de la frontera entre Chile y Argentina.', fa: 'اولا! من رهنمای کوه‌پیمایان در اندیز هستم. اندیز بخشی از سرحد چیلی و ارجنتاین است.' },
        { en: 'A [[natural border|natural border]] follows a mountain range, a river or a coastline.', es: 'Una [[natural border|frontera natural]] sigue una cordillera, un río o una costa.', fa: '[[natural border|سرحد طبیعی]] از یک رشته‌کوه، دریا یا ساحل پیروی می‌کند.' },
        { en: 'The Rio Grande is part of the US–Mexico border. Some Great Lakes border Canada.', es: 'El río Bravo es parte de la frontera entre EE. UU. y México. Algunos Grandes Lagos son frontera con Canadá.', fa: 'دریای ریو گرانده بخشی از سرحد امریکا و مکسیکو است. بعضی جهیل‌های بزرگ سرحد کانادا هستند.' },
        { en: 'Japan\'s coast is its border. Rivers can move, and mountain tops are hard to measure.', es: 'La costa de Japón es su frontera. Los ríos se mueven y las cimas son difíciles de medir.', fa: 'ساحل جاپان سرحد آن است. دریا ممکن است راهش را تغییر دهد و اندازه کردن سر کوه سخت است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is a natural border?', es: '¿Cuál es una frontera natural?', fa: 'کدام یک سرحد طبیعی است؟' },
        choices: [
          { ok: true, t: { en: 'The Andes between Chile and Argentina', es: 'Los Andes entre Chile y Argentina', fa: 'اندیز بین چیلی و ارجنتاین' },
            why: { en: 'It follows a mountain range, so it is natural.', es: 'Sigue una cordillera, así que es natural.', fa: 'از یک رشته‌کوه پیروی می‌کند، پس طبیعی است.' } },
          { t: { en: 'A straight line drawn with a ruler on a map', es: 'Una línea recta dibujada con una regla en un mapa', fa: 'یک خط راست که با خط‌کش روی نقشه کشیده شده' },
            why: { en: 'A straight line drawn by people is a geometric border.', es: 'Una línea recta dibujada por personas es una frontera geométrica.', fa: 'خط راستی که مردم کشیده‌اند سرحد هندسی است.' } },
          { t: { en: 'A line chosen by drawing names from a hat', es: 'Una línea elegida sacando nombres de un sombrero', fa: 'خطی که با قرعه‌کشی انتخاب شده' },
            why: { en: 'Borders are not chosen that way, and this has nothing to do with nature.', es: 'Las fronteras no se eligen así, y esto no tiene nada que ver con la naturaleza.', fa: 'سرحدها این‌طور انتخاب نمی‌شوند و این هیچ ربطی به طبیعت ندارد.' } }
        ]
      }
    },
    {
      x: 37, y: 6,
      name: { en: 'Mr. Kwame Mensah', es: 'Sr. Kwame Mensah', fa: 'استاد کوامی منسا' },
      role: { en: 'History teacher from Ghana', es: 'Maestro de historia de Ghana', fa: 'معلم تاریخ از غانا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#2e8b57', pants: '#3b2f2f' },
      lines: [
        { en: 'Akwaaba! I teach history in Ghana. Many borders on a map of Africa are straight.', es: '¡Akwaaba! Enseño historia en Ghana. Muchas fronteras en un mapa de África son rectas.', fa: 'اکوابا! من در غانا تاریخ درس می‌دهم. بسیاری از سرحدهای روی نقشهٔ افریقا راست هستند.' },
        { en: 'A straight line drawn by people, not following nature, is a [[geometric border|geometric border]].', es: 'Una línea recta dibujada por la gente, sin seguir la naturaleza, es una [[geometric border|frontera geométrica]].', fa: 'خط راستی که مردم کشیده‌اند و از طبیعت پیروی نمی‌کند [[geometric border|سرحد هندسی]] است.' },
        { en: 'In the late 1800s, Europeans drew many with a ruler. Some villages were split.', es: 'A fines del siglo XIX, los europeos dibujaron muchas con regla. Algunas aldeas quedaron partidas.', fa: 'در اواخر دههٔ ۱۸۰۰، اروپایی‌ها بسیاری را با خط‌کش کشیدند. بعضی قریه‌ها تقسیم شدند.' },
        { en: 'Old maps, history or resources can start a [[boundary dispute|boundary dispute]], like China and India\'s.', es: 'Mapas viejos, la historia o los recursos pueden causar una [[boundary dispute|disputa fronteriza]], como la de China e India.', fa: 'نقشه‌های کهنه، تاریخ یا منابع می‌توانند [[boundary dispute|اختلاف سرحدی]] شروع کنند، مثل چین و هند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do some borders in Africa cut through villages and family land?', es: '¿Por qué algunas fronteras en África cruzan pueblos y tierras de familias?', fa: 'چرا بعضی سرحدها در افریقا از وسط قریه‌ها و زمین خانواده‌ها می‌گذرند؟' },
        choices: [
          { ok: true, t: { en: 'Faraway people drew lines without asking them', es: 'Gente lejana trazó líneas sin preguntarles', fa: 'مردم دور بدون پرسیدن از آن‌ها خط کشیدند' },
            why: { en: 'The lines were drawn on maps in Europe, not by the people living on the land.', es: 'Las líneas se dibujaron en mapas en Europa, no por la gente que vivía en esa tierra.', fa: 'این خط‌ها در اروپا روی نقشه کشیده شدند، نه به دست مردمی که روی آن زمین زندگی می‌کردند.' } },
          { t: { en: 'The villages moved after the lines were drawn', es: 'Las aldeas se mudaron después de las líneas', fa: 'قریه‌ها بعد از کشیدن خط‌ها جا عوض کردند' },
            why: { en: 'The villages were already there. The lines were drawn across them.', es: 'Los pueblos ya estaban allí. Las líneas se dibujaron encima de ellos.', fa: 'قریه‌ها از قبل آنجا بودند. خط‌ها از روی آن‌ها کشیده شدند.' } },
          { t: { en: 'Floods pushed the villages across the line', es: 'Las inundaciones movieron las aldeas al otro lado', fa: 'سیلاب قریه‌ها را به آن طرف خط برد' },
            why: { en: 'These are geometric borders. They do not follow rivers at all.', es: 'Estas son fronteras geométricas. No siguen ríos.', fa: 'این‌ها سرحدهای هندسی هستند. اصلاً از دریاها پیروی نمی‌کنند.' } }
        ]
      }
    },
    {
      x: 35, y: 16,
      name: { en: 'Dr. Linh Nguyen', es: 'Dra. Linh Nguyen', fa: 'داکتر لین نگوین' },
      role: { en: 'River scientist from Vietnam', es: 'Científica de ríos de Vietnam', fa: 'دانشمند دریا از ویتنام' },
      look: { skin: 1, hair: '#1b1410', shirt: '#f2c14e', pants: '#2b4a6b' },
      lines: [
        { en: 'Xin chào! I study the Mekong. Laos, Thailand, Cambodia and Vietnam need its water.', es: '¡Xin chào! Estudio el Mekong. Laos, Tailandia, Camboya y Vietnam necesitan su agua.', fa: 'سین چائو! من میکانگ را مطالعه می‌کنم. لائوس، تایلند، کمبودیا و ویتنام به آب آن ضرورت دارند.' },
        { en: 'Rivers ignore borders. A dam [[upstream|upstream]] changes the water for everyone below.', es: 'Los ríos no respetan fronteras. Una represa [[upstream|río arriba]] cambia el agua para todos abajo.', fa: 'دریاها سرحد نمی‌شناسند. یک بند در [[upstream|بالای دریا]] آب را برای همهٔ پایینی‌ها تغییر می‌دهد.' },
        { en: 'In 1995 they formed the Mekong River Commission to share data. A [[treaty|treaty]] helps too.', es: 'En 1995 formaron la Comisión del Río Mekong para compartir datos. Un [[treaty|tratado]] también ayuda.', fa: 'در ۱۹۹۵ کمیسیون دریای میکانگ را ساختند تا معلومات شریک کنند. [[treaty|معاهده]] هم کمک می‌کند.' },
        { en: 'A [[neutral|neutral]] World Bank helped make the 1960 Indus Waters Treaty. It held 60+ years.', es: 'El Banco Mundial, [[neutral|neutral]], ayudó con el Tratado del Indo de 1960. Duró más de 60 años.', fa: 'بانک جهانی [[neutral|بی‌طرف]] در معاهدهٔ ۱۹۶۰ آب‌های سند کمک کرد. بیشتر از ۶۰ سال پابرجا ماند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [
          { ok: true, t: { en: 'Its rivers went to cotton farms, so it shrank', es: 'Sus ríos fueron al algodón y se encogió', fa: 'دریاهایش به کشتزار پخته رفت و کوچک شد' },
            why: { en: 'With no strong agreement to protect it, the sea shrank over many years.', es: 'Sin un acuerdo fuerte que lo protegiera, el mar se encogió durante muchos años.', fa: 'بدون یک توافق محکم برای حفاظت، بحیره در طول سال‌ها کوچک شد.' } },
          { t: { en: 'It froze over one winter and never thawed', es: 'Se congeló un invierno y nunca se derritió', fa: 'یک زمستان یخ بست و دیگر آب نشد' },
            why: { en: 'The sea shrank because people took its river water, not because of ice.', es: 'El mar se encogió porque la gente tomó el agua de sus ríos, no por el hielo.', fa: 'بحیره کوچک شد چون مردم آب دریاهایش را گرفتند، نه به خاطر یخ.' } },
          { t: { en: 'A treaty split it evenly between two countries', es: 'Un tratado lo dividió igual entre dos países', fa: 'یک معاهده آن را مساوی بین دو کشور تقسیم کرد' },
            why: { en: 'There was no strong agreement. That is part of why it was lost.', es: 'No hubo un acuerdo fuerte. Eso es parte de por qué se perdió.', fa: 'توافق محکمی نبود. این بخشی از دلیل از دست رفتنش است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 27, y: 2, text: { en: 'THE GREAT ATLAS · 24 pages, one for every place you walked. 23 are home. One is still missing.', es: 'EL GRAN ATLAS · 24 páginas, una por cada lugar que recorriste. 23 ya están. Todavía falta una.', fa: 'اطلس بزرگ · ۲۴ صفحه، یکی برای هر جایی که رفتی. ۲۳ صفحه سر جایشان هستند. هنوز یکی کم است.' } },
    { x: 22, y: 13, text: { en: 'SILVER RIVER · This river is the [[border|border]] between North Bank and South Bank. Both sides share its water.', es: 'RÍO PLATEADO · Este río es la [[border|frontera]] entre la Orilla Norte y la Orilla Sur. Los dos lados comparten su agua.', fa: 'دریای نقره‌ای · این دریا [[border|سرحد]] بین ساحل شمالی و ساحل جنوبی است. هر دو طرف در آب آن شریک هستند.' } }
  ],

  /* the quest: Farida on the South Bank (gold !) -> Mateo the surveyor in the mountains -> follow the Ink Thief's riddles to a geometric border, upstream and a natural border, then catch it -> back to Farida */
  quest: {
    stat: 'reg',
    title: { en: 'The Stolen Border Map', es: 'El mapa robado de la frontera', fa: 'نقشهٔ دزدیده‌شدهٔ سرحد' },
    giver: {
      x: 20, y: 16,
      name: { en: 'Farida Noori', es: 'Farida Noori', fa: 'فریده نوری' },
      role: { en: 'Farmer on the South Bank', es: 'Agricultora de la Orilla Sur', fa: 'دهقان در ساحل جنوبی' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#3f8f6f', pants: '#4a3a2a', robe: true, hat: '#d9a441' },
      lines: [
        { en: 'Please help! North Bank and South Bank made a map of our [[border|border]] together.', es: '¡Ayuda, por favor! La Orilla Norte y la Orilla Sur hicieron juntas un mapa de nuestra [[border|frontera]].', fa: 'لطفاً کمک کن! ساحل شمالی و ساحل جنوبی با هم نقشهٔ [[border|سرحد]] ما را ساختند.' },
        { en: 'The line runs down the middle of the Silver River. Both sides signed it.', es: 'La línea va por el medio del Río Plateado. Los dos lados la firmaron.', fa: 'خط از وسط دریای نقره‌ای می‌گذرد. هر دو طرف آن را امضا کردند.' },
        { en: 'An Ink Thief stole it! It wants to smear the line so the neighbors fight.', es: '¡Un Ladrón de Tinta lo robó! Quiere borrar la línea para que los vecinos peleen.', fa: 'یک دزد رنگ آن را دزدید! می‌خواهد خط را خراب کند تا همسایه‌ها جنگ کنند.' },
        { en: 'Mateo the mapmaker saw it run. Ask him in the north-west mountains!', es: 'Mateo, el cartógrafo, lo vio correr. ¡Pregúntale en las montañas del noroeste!', fa: 'ماتئوی نقشه‌کش دید که کجا دوید. در کوه‌های شمال غرب از او بپرس!' }
      ],
      wait: { en: 'Mateo is in the mountains to the north-west. Cross the west bridge, then walk north.',
        es: 'Mateo está en las montañas, al noroeste. Cruza el puente del oeste y luego camina al norte.',
        fa: 'ماتئو در کوه‌ها به طرف شمال غرب است. از پل غربی بگذر، بعد به شمال برو.' },
      thanks: { en: 'Our map is back! Clear borders help neighbors live in peace. Thank you!', es: '¡Volvió nuestro mapa! Las fronteras claras ayudan a los vecinos a vivir en paz. ¡Gracias!', fa: 'نقشهٔ ما برگشت! سرحدهای روشن به همسایه‌ها کمک می‌کنند در صلح زندگی کنند. تشکر!' }
    },
    contact: {
      x: 12, y: 5,
      name: { en: 'Mateo Quispe', es: 'Mateo Quispe', fa: 'ماتئو کیسپه' },
      role: { en: 'Land surveyor from Peru', es: 'Topógrafo de Perú', fa: 'اندازه‌گیر زمین از پیرو' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c8742a', pants: '#3a3a3a', hat: '#7a2f2f' },
      lines: [
        { en: 'I mark borders. The Ink Thief ran past me, laughing, with a river map!', es: 'Marco fronteras. ¡El Ladrón de Tinta pasó riéndose, con un mapa de un río!', fa: 'من سرحد نشانی می‌کنم. دزد رنگ خنده‌کنان با یک نقشهٔ دریا از کنارم دوید!' },
        { en: 'It tore the map into 3 pieces, each by a different kind of [[border|border]].', es: 'Rompió el mapa en 3 pedazos, cada uno junto a un tipo distinto de [[border|frontera]].', fa: 'نقشه را سه تکه کرد، هر تکه کنار یک نوع دیگر [[border|سرحد]].' },
        { en: 'Follow its riddles to each piece. Then catch the thief!', es: 'Sigue sus acertijos hasta cada pedazo. ¡Después atrapa al ladrón!', fa: 'چیستان‌هایش را تا هر تکه دنبال کن. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [4, 3],
      hops: [[9, 9], [3, 7]],
      name: { en: 'The Border Ink Thief', es: 'El Ladrón de Tinta de la Frontera', fa: 'دزد رنگِ سرحد' },
      taunt: { en: '"Hee hee! I tore the border map into 3 pieces. Who knows where North Bank ends now?"', es: '"¡Ji ji! Rompí el mapa de la frontera en 3 pedazos. ¿Quién sabe ahora dónde termina la Orilla Norte?"', fa: '«هی هی! نقشهٔ سرحد را سه تکه کردم. حالا کی می‌داند ساحل شمالی کجا تمام می‌شود؟»' },
      clues: [
        { t: { en: 'Piece 1 is by a [[geometric border|geometric border]]: a straight line people drew across empty sand.', es: 'El pedazo 1 está junto a una [[geometric border|frontera geométrica]]: una línea recta que la gente trazó por la arena vacía.', fa: 'تکهٔ ۱ کنار یک [[geometric border|سرحد هندسی]] است: خط راستی که مردم در ریگ خالی کشیدند.' },
          zones: [{ x: 31, y: 1, w: 15, h: 10 }],
          noBy: [{ x: 16, y: 11, w: 15, h: 3, t: { en: 'The river is a border too, but nature made it. That is a natural border. A geometric border is a straight line people drew, out in the sand.', es: 'El río también es una frontera, pero la hizo la naturaleza. Esa es una frontera natural. Una frontera geométrica es una línea recta que dibujó la gente, allá en la arena.', fa: 'دریا هم سرحد است، اما طبیعت آن را ساخته. این سرحد طبیعی است. سرحد هندسی یک خط راست است که مردم کشیدند، آن جا در ریگ.' } }],
          found: { en: 'In the desert! Few people live here, so straight lines were drawn, like Egypt–Sudan.', es: '¡En el desierto! Aquí vive poca gente, así que se trazaron líneas rectas, como Egipto–Sudán.', fa: 'در ریگستان! مردم کم اینجا زندگی می‌کنند، پس خط راست کشیده شد، مثل مصر و سودان.' } },
        { t: { en: 'Piece 2 is [[upstream|upstream]] on the Silver River. It flows east, so go toward where it starts.', es: 'El pedazo 2 está [[upstream|río arriba]] en el Río Plateado. Corre al este, así que ve hacia donde empieza.', fa: 'تکهٔ ۲ در [[upstream|بالای دریا]] است، در دریای نقره‌ای. دریا به شرق می‌رود، پس به طرف سرچشمه‌اش برو.' },
          zones: [{ x: 1, y: 11, w: 8, h: 10 }],
          noBy: [{ x: 31, y: 11, w: 10, h: 3, t: { en: 'This is downstream, where the river meets the sea. Upstream is the other way, far to the west.', es: 'Esto es río abajo, donde el río llega al mar. Río arriba es hacia el otro lado, lejos al oeste.', fa: 'این جا پایین دریا است، جایی که دریا به بحر می‌رسد. بالای دریا به طرف دیگر است، دور در غرب.' } },
            { x: 31, y: 16, w: 9, h: 5, t: { en: 'This is the river mouth, where the river ends at the sea. That is downstream. Walk west, toward where the river begins.', es: 'Esta es la desembocadura, donde el río termina en el mar. Eso es río abajo. Camina al oeste, hacia donde empieza el río.', fa: 'این دهن دریا است، جایی که دریا در بحر تمام می‌شود. این پایین دریا است. به طرف غرب برو، به طرف جایی که دریا شروع می‌شود.' } }],
          found: { en: 'Upstream! A dam here changes water downstream, so neighbors need a [[treaty|treaty]].', es: '¡Río arriba! Una represa aquí cambia el agua río abajo, así que los vecinos necesitan un [[treaty|tratado]].', fa: 'بالای دریا! یک بند اینجا آب پایین دریا را تغییر می‌دهد، پس همسایه‌ها به [[treaty|معاهده]] ضرورت دارند.' } },
        { t: { en: 'Piece 3 is by a [[natural border|natural border]] along a long mountain range. Find the snowy peaks.', es: 'El pedazo 3 está junto a una [[natural border|frontera natural]] por una larga cordillera. Busca los picos nevados.', fa: 'تکهٔ ۳ کنار یک [[natural border|سرحد طبیعی]] در امتداد یک سلسله‌کوه دراز است. قله‌های برفی را پیدا کن.' },
          zones: [{ x: 1, y: 1, w: 15, h: 10 }],
          noBy: [{ x: 31, y: 1, w: 15, h: 10, t: { en: 'There are no mountains in this sand. A border here is a straight line drawn by people. Look for the snowy peaks in the west.', es: 'En esta arena no hay montañas. Una frontera aquí es una línea recta dibujada por la gente. Busca los picos nevados en el oeste.', fa: 'در این ریگ کوه نیست. سرحد این جا یک خط راست است که مردم کشیدند. قله‌های برفی را در غرب پیدا کن.' } }],
          found: { en: 'The mountains! A border on a mountain range is natural, like the Andes.', es: '¡Las montañas! Una frontera en una cordillera es natural, como los Andes.', fa: 'کوه‌ها! سرحدی که روی سلسله‌کوه است طبیعی است، مثل اندیز.' } }
      ],
      win: { en: 'Got you! The thief drops the pieces and vanishes in ink. The map is whole again!', es: '¡Te atrapé! El ladrón suelta los pedazos y desaparece en tinta. ¡El mapa está completo otra vez!', fa: 'گرفتمت! دزد تکه‌ها را می‌اندازد و در رنگ گم می‌شود. نقشه دوباره کامل است!' },
      item: { icon: '🗺️', name: { en: 'The Silver River border map', es: 'El mapa de la frontera del Río Plateado', fa: 'نقشهٔ سرحد دریای نقره‌ای' } }
    }
  },

  scraps: [[1, 1], [46, 1], [1, 20]],
  smudges: [[6, 8], [5, 18], [42, 8]],

  challenge: {
    at: [24, 4],
    type: 'site', // in the world; the card version (claim) is the fallback
    // A (wall) on the north riverbank where a wall would cut the valley in two, B (treaty) at the main bridge where both banks meet, C (neutral group) far off in the east desert, on nobody's side
    spots: [[15, 13], [25, 13], [34, 9]],
    stat: 'hei',
    title: { en: 'Settle the river fight', es: 'Resuelve la pelea por el río', fa: 'دعوای دریا را حل کن' },
    intro: { en: 'North Bank and South Bank share the Silver River. In a dry year, both need its water for their farms. The Grump whispers, "Fight!" Choose how the neighbors should settle it. Then pick one reason it is fair and one reason it will last.',
      es: 'Orilla Norte y Orilla Sur comparten el Río Plateado. En un año seco, los dos necesitan su agua para sus cultivos. El Gruñón susurra: "¡Peleen!" Elige cómo deben resolverlo los vecinos. Luego elige una razón por la que es justo y una razón por la que va a durar.',
      fa: 'ساحل شمالی و ساحل جنوبی در دریای نقره‌ای شریک هستند. در یک سال خشک، هر دو برای کشت خود به آب آن نیاز دارند. غرغرو آهسته می‌گوید: «بجنگید!» انتخاب کن همسایه‌ها چطور آن را حل کنند. بعد یک دلیل برای منصفانه بودن و یک دلیل برای دوام آن انتخاب کن.' },
    options: [
      { icon: '🧱', name: { en: 'A: Build a wall and stop talking', es: 'A: Construir un muro y dejar de hablar', fa: 'الف: دیوار بسازند و گپ زدن را بس کنند' },
        desc: { en: 'Each side keeps to itself.', es: 'Cada lado se queda solo.', fa: 'هر طرف به کار خودش.' },
        result: { en: 'The wall goes up, but the river keeps flowing. In the next dry year nobody talks, and the fight grows. Like the Aral Sea, shared water with no agreement can be lost.', es: 'El muro se levanta, pero el río sigue corriendo. En el próximo año seco nadie habla, y la pelea crece. Como el mar de Aral, el agua compartida sin acuerdo se puede perder.', fa: 'دیوار ساخته می‌شود، اما دریا جاری است. در سال خشک بعدی کسی گپ نمی‌زند و دعوا بزرگ‌تر می‌شود. مثل بحیرهٔ ارال، آب مشترک بدون توافق ممکن است از دست برود.' } },
      { icon: '📜', name: { en: 'B: Sign a treaty to share the water and meet every year', es: 'B: Firmar un tratado para compartir el agua y reunirse cada año', fa: 'ب: معاهده امضا کنند تا آب را شریک باشند و هر سال جلسه کنند' },
        desc: { en: 'Write down how much water each side gets.', es: 'Escribir cuánta agua recibe cada lado.', fa: 'بنویسند که هر طرف چقدر آب می‌گیرد.' },
        result: { en: 'The treaty is signed! Each side gets a fair share, and they meet every year to fix new problems. The Mekong River Commission works a lot like this.', es: '¡Se firma el tratado! Cada lado recibe una parte justa, y se reúnen cada año para arreglar problemas nuevos. La Comisión del Río Mekong funciona de forma parecida.', fa: 'معاهده امضا شد! هر طرف سهم منصفانه می‌گیرد و هر سال جلسه می‌کنند تا مشکلات تازه را حل کنند. کمیسیون دریای میکانگ هم تقریباً همین‌طور کار می‌کند.' } },
      { icon: '⚖️', name: { en: 'C: Ask a neutral group to help decide', es: 'C: Pedir ayuda a un grupo neutral para decidir', fa: 'ج: از یک گروه بی‌طرف بخواهند در تصمیم کمک کند' },
        desc: { en: 'A helper who takes no side listens to both.', es: 'Un ayudante que no está de ningún lado escucha a los dos.', fa: 'کمک‌کننده‌ای که طرف کسی نیست به هر دو گوش می‌دهد.' },
        result: { en: 'A neutral helper listens to both sides and helps them write fair rules. In 1960 the World Bank helped India and Pakistan agree on the Indus Waters Treaty.', es: 'Un ayudante neutral escucha a los dos lados y los ayuda a escribir reglas justas. En 1960 el Banco Mundial ayudó a India y Pakistán a acordar el Tratado de las Aguas del Indo.', fa: 'یک کمک‌کنندهٔ بی‌طرف به هر دو طرف گوش می‌دهد و کمک می‌کند قانون‌های منصفانه بنویسند. در سال ۱۹۶۰ بانک جهانی به هند و پاکستان کمک کرد تا بر معاهدهٔ آب‌های سند موافقه کنند.' } }
    ],
    kinds: [
      { id: 'fair', label: { en: 'Why is it fair?', es: '¿Por qué es justo?', fa: 'چرا منصفانه است؟' } },
      { id: 'lasting', label: { en: 'Why will it last?', es: '¿Por qué va a durar?', fa: 'چرا دوام می‌کند؟' } }
    ],
    reasons: [
      { kind: 'fair', fits: [1], t: { en: 'Both neighbors write the rules together, and each gets a share of the water.', es: 'Los dos vecinos escriben las reglas juntos, y cada uno recibe una parte del agua.', fa: 'هر دو همسایه با هم قانون می‌نویسند و هر کدام سهمی از آب می‌گیرد.' },
        why: { en: 'This reason is about the neighbors writing a treaty together.', es: 'Esta razón habla de que los vecinos escriben un tratado juntos.', fa: 'این دلیل دربارهٔ نوشتن معاهده توسط خود همسایه‌ها است.' } },
      { kind: 'fair', fits: [2], t: { en: 'A helper who takes no side listens to both neighbors the same way.', es: 'Un ayudante que no está de ningún lado escucha a los dos vecinos de la misma forma.', fa: 'کمک‌کننده‌ای که طرف کسی نیست به هر دو همسایه یک‌رقم گوش می‌دهد.' },
        why: { en: 'This reason is about a neutral helper, which is choice C.', es: 'Esta razón habla de un ayudante neutral, que es la opción C.', fa: 'این دلیل دربارهٔ کمک‌کنندهٔ بی‌طرف است، یعنی انتخاب ج.' } },
      { kind: 'fair', fits: [1, 2], t: { en: 'Each neighbor gets a voice before anything is decided.', es: 'Cada vecino tiene voz antes de que se decida algo.', fa: 'هر همسایه پیش از هر تصمیم حق گپ زدن دارد.' },
        why: { en: 'With a wall and no talking, nobody gets a voice.', es: 'Con un muro y sin hablar, nadie tiene voz.', fa: 'با دیوار و بدون گپ زدن، هیچ کس حق گپ زدن ندارد.' } },
      { kind: 'fair', fits: [], t: { en: 'The stronger neighbor keeps all the water on its side.', es: 'El vecino más fuerte se queda con toda el agua de su lado.', fa: 'همسایهٔ قوی‌تر تمام آب را در طرف خود نگه می‌دارد.' },
        why: { en: 'That is not fair. The other neighbor\'s farms would dry up.', es: 'Eso no es justo. Los cultivos del otro vecino se secarían.', fa: 'این منصفانه نیست. کشت همسایهٔ دیگر خشک می‌شود.' } },
      { kind: 'lasting', fits: [1], t: { en: 'They meet every year, so they can fix new problems before they grow.', es: 'Se reúnen cada año, así que pueden arreglar problemas nuevos antes de que crezcan.', fa: 'هر سال جلسه می‌کنند، پس می‌توانند مشکلات تازه را پیش از بزرگ شدن حل کنند.' },
        why: { en: 'Meeting every year is part of the treaty choice, B.', es: 'Reunirse cada año es parte de la opción del tratado, B.', fa: 'هر سال جلسه کردن بخشی از انتخاب معاهده، یعنی ب، است.' } },
      { kind: 'lasting', fits: [1, 2], t: { en: 'Both sides agree to clear, written rules, so everyone knows what to do in a dry year.', es: 'Los dos lados aceptan reglas claras y escritas, así todos saben qué hacer en un año seco.', fa: 'هر دو طرف قانون‌های روشن و نوشته‌شده را قبول می‌کنند، پس همه می‌دانند در سال خشک چه کنند.' },
        why: { en: 'A wall gives no rules for sharing water.', es: 'Un muro no da reglas para compartir el agua.', fa: 'دیوار هیچ قانونی برای شریک شدن آب نمی‌دهد.' } },
      { kind: 'lasting', fits: [2], t: { en: 'A trusted outside group can come back and help if a new fight starts.', es: 'Un grupo de afuera de confianza puede volver a ayudar si empieza una pelea nueva.', fa: 'یک گروه بیرونی قابل اعتماد می‌تواند اگر دعوای تازه شروع شود دوباره کمک کند.' },
        why: { en: 'This reason is about a neutral group, which is choice C.', es: 'Esta razón habla de un grupo neutral, que es la opción C.', fa: 'این دلیل دربارهٔ گروه بی‌طرف است، یعنی انتخاب ج.' } },
      { kind: 'lasting', fits: [], t: { en: 'A wall stops the neighbors from ever arguing again.', es: 'Un muro hace que los vecinos nunca vuelvan a discutir.', fa: 'دیوار نمی‌گذارد همسایه‌ها دیگر هرگز دعوا کنند.' },
        why: { en: 'A wall does not stop the river or the need for water. When nobody talks, problems grow.', es: 'Un muro no detiene el río ni la necesidad de agua. Cuando nadie habla, los problemas crecen.', fa: 'دیوار نه دریا را متوقف می‌کند و نه نیاز به آب را. وقتی کسی گپ نزند، مشکلات بزرگ می‌شوند.' } }
    ],
    mismatch: { en: 'That reason does not back up your choice.', es: 'Esa razón no apoya tu elección.', fa: 'آن دلیل از انتخاب تو پشتیبانی نمی‌کند.' },
    success: { en: 'North Bank and South Bank shake hands across the bridge. Talking, fair rules and neutral helpers turn a fight into a plan.', es: 'Orilla Norte y Orilla Sur se dan la mano sobre el puente. Hablar, tener reglas justas y ayudantes neutrales convierte una pelea en un plan.', fa: 'ساحل شمالی و ساحل جنوبی روی پل با هم دست می‌دهند. گپ زدن، قانون‌های منصفانه و کمک‌کننده‌های بی‌طرف یک دعوا را به یک پلان تبدیل می‌کنند.' }
  },

  boss: {
    at: [24, 14],
    stat: 'reg',
    need: 3,
    name: { en: 'The Great Grump', es: 'El Gran Gruñón', fa: 'غرغروی بزرگ' },
    appear: { en: 'The Great Grump has risen over the river bridge, right below the hall! It is the very last one. Go!', es: '¡El Gran Gruñón apareció sobre el puente del río, justo debajo del salón! Es el último de todos. ¡Ve!', fa: 'غرغروی بزرگ بالای پل دریا، درست پایین تالار، پیدا شد! این آخرین غرغرو است. برو!' },
    taunt: { en: 'I am the Great Grump! I blur every border and turn every neighbor against the other. Without the last page, the Atlas stays torn forever!', es: '¡Soy el Gran Gruñón! Borro cada frontera y pongo a cada vecino contra el otro. ¡Sin la última página, el Atlas se queda roto para siempre!', fa: 'من غرغروی بزرگ هستم! هر سرحد را تار می‌کنم و هر همسایه را با دیگری دشمن می‌کنم. بدون صفحهٔ آخر، اطلس برای همیشه پاره می‌ماند!' },
    win: { en: 'The Great Grump breaks into a shower of light. The 24th page flies home, and the Great Atlas is whole again! Every realm, river and road is back on the map. Thank you, Worldwalker. The world is wide, and now you know how to read it.',
      es: 'El Gran Gruñón se rompe en una lluvia de luz. ¡La página 24 vuelve a casa y el Gran Atlas está completo otra vez! Cada reino, río y camino está de nuevo en el mapa. Gracias, Caminante del Mundo. El mundo es grande, y ahora sabes cómo leerlo.',
      fa: 'غرغروی بزرگ به بارانی از نور تبدیل می‌شود. صفحهٔ ۲۴ به خانه برمی‌گردد و اطلس بزرگ دوباره کامل است! هر سرزمین، دریا و راه دوباره روی نقشه است. تشکر، جهان‌گرد. جهان بزرگ است و حالا تو می‌دانی چطور آن را بخوانی.' },
    questions: [
      { q: { en: 'What is a natural border?', es: '¿Qué es una frontera natural?', fa: 'سرحد طبیعی چیست؟' },
        choices: [{ en: 'One that follows a river, mountains or a coast', es: 'Una que sigue un río, montañas o una costa', fa: 'سرحدی که از دریا، کوه یا ساحل پیروی می‌کند' }, { en: 'One drawn with a ruler on a map', es: 'Una trazada con regla en un mapa', fa: 'سرحدی که با خط‌کش روی نقشه کشیده شده' }, { en: 'One that two countries still argue about', es: 'Una que dos países todavía discuten', fa: 'سرحدی که دو کشور هنوز بر سرش اختلاف دارند' }, { en: 'One guarded day and night by soldiers', es: 'Una vigilada día y noche por soldados', fa: 'سرحدی که عسکرها شب و روز نگهبانی می‌کنند' }], answer: 0,
        why: { en: 'Natural borders follow things in nature, like the Andes or the Rio Grande.', es: 'Las fronteras naturales siguen cosas de la naturaleza, como los Andes o el río Bravo.', fa: 'سرحدهای طبیعی از چیزهای طبیعت پیروی می‌کنند، مثل اندیز یا ریو گرانده.' } },
      { q: { en: 'What is a geometric border?', es: '¿Qué es una frontera geométrica?', fa: 'سرحد هندسی چیست؟' },
        choices: [{ en: 'A straight line drawn by people', es: 'Una línea recta dibujada por personas', fa: 'خط راستی که مردم کشیده‌اند' }, { en: 'A border that follows a mountain ridge', es: 'Una frontera que sigue la cima de una montaña', fa: 'سرحدی که از تیغهٔ کوه پیروی می‌کند' }, { en: 'A border along a seacoast', es: 'Una frontera a lo largo de una costa', fa: 'سرحدی در امتداد ساحل بحر' }, { en: 'A border that moves every few years', es: 'Una frontera que se mueve cada pocos años', fa: 'سرحدی که هر چند سال جا عوض می‌کند' }], answer: 0,
        why: { en: 'Geometric borders are straight lines. Many borders in Africa are like this.', es: 'Las fronteras geométricas son líneas rectas. Muchas fronteras de África son así.', fa: 'سرحدهای هندسی خط راست هستند. بسیاری از سرحدهای افریقا این‌طور هستند.' } },
      { q: { en: 'What is a boundary dispute?', es: '¿Qué es una disputa fronteriza?', fa: 'اختلاف سرحدی چیست؟' },
        choices: [{ en: 'Two countries arguing over land', es: 'Dos países que discuten por tierra', fa: 'دو کشور که بر سر زمین اختلاف دارند' }, { en: 'A treaty that ends a long war', es: 'Un tratado que termina una guerra larga', fa: 'معاهده‌ای که یک جنگ دراز را ختم می‌کند' }, { en: 'A tax charged at a border crossing', es: 'Un impuesto que se cobra en la frontera', fa: 'مالیه‌ای که هنگام گذشتن از سرحد گرفته می‌شود' }, { en: 'A tall fence built along a river', es: 'Una cerca alta junto a un río', fa: 'کتارهٔ بلندی که کنار دریا ساخته شده' }], answer: 0,
        why: { en: 'In a boundary dispute, two countries do not agree on where the border is.', es: 'En una disputa fronteriza, dos países no están de acuerdo sobre dónde está la frontera.', fa: 'در اختلاف سرحدی، دو کشور دربارهٔ جای سرحد موافق نیستند.' } },
      { q: { en: 'What is a treaty?', es: '¿Qué es un tratado?', fa: 'معاهده چیست؟' },
        choices: [{ en: 'A written deal between countries', es: 'Un acuerdo escrito entre países', fa: 'توافق نوشته‌شده بین کشورها' }, { en: 'A meeting that happens once a year', es: 'Una reunión que pasa una vez al año', fa: 'جلسه‌ای که سالی یک بار برگزار می‌شود' }, { en: 'A wall built along a border', es: 'Un muro construido en una frontera', fa: 'دیواری که کنار سرحد ساخته شده' }, { en: 'A map that shows where a border runs', es: 'Un mapa que muestra por dónde va una frontera', fa: 'نقشه‌ای که نشان می‌دهد سرحد از کجا می‌گذرد' }], answer: 0,
        why: { en: 'A treaty is written down and signed. It can say how countries share water or land.', es: 'Un tratado se escribe y se firma. Puede decir cómo los países comparten agua o tierra.', fa: 'معاهده نوشته و امضا می‌شود. می‌تواند بگوید کشورها چطور آب یا زمین را شریک شوند.' } },
      { q: { en: 'Why did Laos, Thailand, Cambodia and Vietnam form the Mekong River Commission in 1995?', es: '¿Por qué Laos, Tailandia, Camboya y Vietnam formaron la Comisión del Río Mekong en 1995?', fa: 'چرا لائوس، تایلند، کمبودیا و ویتنام در سال ۱۹۹۵ کمیسیون دریای میکانگ را ساختند؟' },
        choices: [{ en: 'To share water data and plan together', es: 'Para compartir datos del agua y planear juntos', fa: 'تا معلومات آب را شریک کنند و با هم پلان بسازند' }, { en: 'To close the river to foreign ships', es: 'Para cerrar el río a barcos extranjeros', fa: 'تا دریا را به روی کشتی‌های خارجی ببندند' }, { en: 'To divide the river into private parts', es: 'Para dividir el río en partes privadas', fa: 'تا دریا را به بخش‌های شخصی تقسیم کنند' }, { en: 'To build one dam they would all own', es: 'Para construir una sola represa de todos', fa: 'تا یک بند آب بسازند که مال همه باشد' }], answer: 0,
        why: { en: 'The commission gives the countries a table to sit at and share what they know.', es: 'La comisión les da a los países una mesa donde sentarse y compartir lo que saben.', fa: 'این کمیسیون به کشورها میزی برای نشستن و شریک کردن دانسته‌هایشان می‌دهد.' } },
      { q: { en: 'What is surprising about the Indus Waters Treaty?', es: '¿Qué tiene de sorprendente el Tratado de las Aguas del Indo?', fa: 'چه چیز معاهدهٔ آب‌های سند تعجب‌آور است؟' },
        choices: [{ en: 'It lasted 60+ years, even through wars', es: 'Duró más de 60 años, aun con guerras', fa: 'بیشتر از ۶۰ سال، حتی در جنگ‌ها، دوام کرد' }, { en: 'Every country in the world signed it', es: 'Todos los países del mundo lo firmaron', fa: 'همهٔ کشورهای جهان آن را امضا کردند' }, { en: 'It gave all of the water to India', es: 'Le dio toda el agua a India', fa: 'تمام آب را به هند داد' }, { en: 'It was never written down on paper', es: 'Nunca se escribió en papel', fa: 'هرگز روی کاغذ نوشته نشد' }], answer: 0,
        why: { en: 'With help from the World Bank, the treaty held longer than many treaties in calmer places.', es: 'Con ayuda del Banco Mundial, el tratado duró más que muchos tratados en lugares más tranquilos.', fa: 'با کمک بانک جهانی، این معاهده از بسیاری معاهده‌ها در جاهای آرام‌تر بیشتر دوام کرد.' } },
      { q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [{ en: 'Its rivers were used for cotton fields', es: 'Sus ríos se usaron para el algodón', fa: 'دریاهایش برای کشتزار پخته استفاده شد' }, { en: 'An earthquake opened a channel to the ocean', es: 'Un terremoto abrió un canal hacia el océano', fa: 'یک زلزله راهی به سوی بحر باز کرد' }, { en: 'It froze over and never thawed', es: 'Se congeló y nunca se descongeló', fa: 'یخ بست و دیگر آب نشد' }, { en: 'A treaty split it evenly in two', es: 'Un tratado lo dividió igual en dos', fa: 'یک معاهده آن را مساوی دو تکه کرد' }], answer: 0,
        why: { en: 'No strong agreement protected the sea, so it lost most of its water.', es: 'Ningún acuerdo fuerte protegió el mar, así que perdió casi toda su agua.', fa: 'هیچ توافق محکمی از بحیره حفاظت نکرد، پس بیشتر آبش را از دست داد.' } },
      { q: { en: 'Two countries share one river. Why do they need to work together?', es: 'Dos países comparten un río. ¿Por qué necesitan trabajar juntos?', fa: 'دو کشور در یک دریا شریک هستند. چرا باید با هم کار کنند؟' },
        choices: [{ en: 'What one side does changes the other', es: 'Lo que hace un lado cambia al otro', fa: 'کار یک طرف طرف دیگر را تغییر می‌دهد' }, { en: 'Rivers stop flowing at the border line', es: 'Los ríos dejan de correr en la frontera', fa: 'دریاها کنار خط سرحد از جریان می‌ایستند' }, { en: 'Only one country can ever use a river', es: 'Solo un país puede usar un río', fa: 'فقط یک کشور می‌تواند از دریا استفاده کند' }, { en: 'Rivers are not useful for farms', es: 'Los ríos no sirven para los cultivos', fa: 'دریاها برای کشت به درد نمی‌خورند' }], answer: 0,
        why: { en: 'Rivers do not stop for a border sign. A dam upstream changes the water downstream.', es: 'Los ríos no se detienen por un letrero de frontera. Una represa río arriba cambia el agua río abajo.', fa: 'دریاها برای تابلوی سرحد نمی‌ایستند. بند آب در بالای دریا آب پایین را تغییر می‌دهد.' } }
    ]
  },

  learned: [
    { en: 'A [[natural border|natural border]] follows a river, mountains or a coast. A [[geometric border|geometric border]] is a straight line drawn by people.', es: 'Una [[natural border|frontera natural]] sigue un río, montañas o una costa. Una [[geometric border|frontera geométrica]] es una línea recta dibujada por personas.', fa: '[[natural border|سرحد طبیعی]] از دریا، کوه یا ساحل پیروی می‌کند. [[geometric border|سرحد هندسی]] خط راستی است که مردم کشیده‌اند.' },
    { en: 'Countries can argue over land, water and resources. That can lead to a [[boundary dispute|boundary dispute]]. Rivers do not stop at borders, so neighbors must share them.', es: 'Los países pueden discutir por tierra, agua y recursos. Eso puede llevar a una [[boundary dispute|disputa fronteriza]]. Los ríos no se detienen en las fronteras, así que los vecinos deben compartirlos.', fa: 'کشورها ممکن است بر سر زمین، آب و منابع اختلاف کنند. این می‌تواند به [[boundary dispute|اختلاف سرحدی]] برسد. دریاها کنار سرحد نمی‌ایستند، پس همسایه‌ها باید آن‌ها را شریک باشند.' },
    { en: 'A [[treaty|treaty]], a shared group like the Mekong River Commission, a [[neutral|neutral]] helper, or the [[united nations|United Nations]] can help neighbors work together for a long time.', es: 'Un [[treaty|tratado]], un grupo compartido como la Comisión del Río Mekong, un ayudante [[neutral|neutral]] o las [[united nations|Naciones Unidas]] pueden ayudar a los vecinos a trabajar juntos por mucho tiempo.', fa: 'یک [[treaty|معاهده]]، یک گروه مشترک مثل کمیسیون دریای میکانگ، یک کمک‌کنندهٔ [[neutral|بی‌طرف]] یا [[united nations|سازمان ملل متحد]] می‌توانند به همسایه‌ها کمک کنند تا مدت درازی با هم کار کنند.' }
  ],
  reflect: {
    q: { en: 'Think about something people share in your school or neighborhood, like a field, a park or a bus. How do people share it fairly? What rule would you add to help everyone get along?', es: 'Piensa en algo que la gente comparte en tu escuela o tu barrio, como una cancha, un parque o un autobús. ¿Cómo lo comparten de forma justa? ¿Qué regla agregarías para que todos se lleven bien?', fa: 'به چیزی فکر کن که مردم در مکتب یا محلهٔ تو شریک هستند، مثل میدان، پارک یا سرویس. مردم چطور آن را منصفانه شریک می‌شوند؟ چه قانونی اضافه می‌کنی تا همه با هم خوب باشند؟' },
    starter: { en: 'In my community, people share', es: 'En mi comunidad, la gente comparte', fa: 'در محلهٔ من، مردم شریک هستند در' }
  }
};
