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
    { en: 'Christopher: "This is it, the last page! People from all eight realms have come to the Council Hall to rebuild the Great Atlas. But the Great Grump is turning neighbors against each other."',
      es: 'Christopher: "¡Llegamos a la última página! Gente de los ocho reinos vino al Salón del Consejo para reconstruir el Gran Atlas. Pero el Gran Gruñón está poniendo a los vecinos en contra unos de otros."',
      fa: 'کریستوفر: «این آخرین صفحه است! مردم از هر هشت سرزمین به تالار شورا آمده‌اند تا اطلس بزرگ را دوباره بسازند. اما غرغروی بزرگ همسایه‌ها را با هم دشمن می‌کند.»' },
    { en: 'Christopher: "Talk to the four guests. Then go to the compass stone in the hall and help two neighbors settle their river fight."',
      es: 'Christopher: "Habla con los cuatro invitados. Luego ve a la piedra de la brújula en el salón y ayuda a dos vecinos a resolver su pelea por el río."',
      fa: 'کریستوفر: «با چهار مهمان گپ بزن. بعد به سنگ قطب‌نما در تالار برو و به دو همسایه کمک کن تا دعوای دریا را حل کنند.»' }
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
      clue: { en: 'Rivers are often borders between countries. Find the bridge farthest west on the river. Stand on the land square just north of it.', es: 'Los ríos muchas veces son fronteras entre países. Busca el puente que está más al oeste en el río. Párate en el cuadro de tierra justo al norte de él.', fa: 'دریاها اکثراً سرحد میان کشورها هستند. پلی را پیدا کن که از همه غربی‌تر روی دریا است. روی خانهٔ خشکه بایست که درست شمالِ آن پل است.' },
      text: { en: 'You found the border river! A river is a natural border that is easy to see on a map. The Rio Grande forms part of the border between the United States and Mexico. A flower was growing on the river bank.', es: '¡Encontraste el río frontera! Un río es una frontera natural fácil de ver en un mapa. El río Bravo, o Río Grande, forma parte de la frontera entre Estados Unidos y México. Había una flor en la orilla del río.', fa: 'تو دریای سرحدی را پیدا کردی! دریا یک سرحد طبیعی است که روی نقشه آسان دیده می‌شود. دریای ریو گرانده بخشی از سرحد میان ایالات متحدهٔ امریکا و مکسیکو است. یک گل در کنار دریا روییده بود.' } },
    { clueAt: [32, 2], at: [35, 7], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps east, then 5 steps south. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al este y luego 5 pasos al sur. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به شرق برو، بعد ۵ قدم به جنوب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! East is to the right and south is down. In deserts, many borders are straight lines drawn on a map. Much of the border between Egypt and Sudan follows one line of latitude. A shiny gem was hidden in the sand.', es: '¡Seguiste las direcciones de la brújula! El este está a la derecha y el sur abajo. En los desiertos, muchas fronteras son líneas rectas dibujadas en un mapa. Gran parte de la frontera entre Egipto y Sudán sigue una línea de latitud. Una gema brillante estaba escondida en la arena.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! شرق طرف راست و جنوب پایین است. در ریگستان‌ها، بسیاری از سرحدها خط‌های راستی هستند که روی نقشه کشیده شده‌اند. بخش بزرگی از سرحد میان مصر و سودان یک خط عرض جغرافیایی را دنبال می‌کند. یک جواهر درخشان در ریگ پنهان بود.' } }
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
        { en: 'Welcome to the Council Hall! You know me: Rosa, from Mapmaker\'s Valley, where your journey began. Guests from all eight realms are here. Together we will put the last page back into the Great Atlas.',
          es: '¡Bienvenido al Salón del Consejo! Ya me conoces: soy Rosa, del Valle del Cartógrafo, donde empezó tu viaje. Aquí hay invitados de los ocho reinos. Juntos vamos a poner la última página en el Gran Atlas.',
          fa: 'به تالار شورا خوش آمدی! مرا می‌شناسی: روزا، از درهٔ نقشه‌کش، جایی که سفرت شروع شد. مهمانان هر هشت سرزمین اینجا هستند. با هم آخرین صفحه را دوباره در اطلس بزرگ می‌گذاریم.' },
        { en: 'Every country sits inside lines called [[border|borders]]. Most borders are calm. Trucks and trains cross them every day. But when neighbors disagree, they need good ways to work together.',
          es: 'Cada país está dentro de líneas llamadas [[border|fronteras]]. La mayoría de las fronteras son tranquilas. Camiones y trenes las cruzan todos los días. Pero cuando los vecinos no están de acuerdo, necesitan buenas formas de trabajar juntos.',
          fa: 'هر کشور داخل خط‌هایی به نام [[border|سرحد]] است. بیشتر سرحدها آرام هستند. موترهای باربری و قطارها هر روز از آن‌ها می‌گذرند. اما وقتی همسایه‌ها موافق نیستند، به راه‌های خوب برای همکاری نیاز دارند.' },
        { en: 'Countries also work together in groups. The [[united nations|United Nations]] has 193 member countries. A [[trade bloc|trade bloc]], like the European Union, helps its members trade more easily.',
          es: 'Los países también trabajan juntos en grupos. Las [[united nations|Naciones Unidas]] tienen 193 países miembros. Un [[trade bloc|bloque comercial]], como la Unión Europea, ayuda a sus miembros a comerciar más fácilmente.',
          fa: 'کشورها در گروه‌ها هم با هم کار می‌کنند. [[united nations|سازمان ملل متحد]] ۱۹۳ کشور عضو دارد. یک [[trade bloc|گروه تجارتی]]، مثل اتحادیهٔ اروپا، به اعضای خود کمک می‌کند آسان‌تر تجارت کنند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do countries join groups like the United Nations?', es: '¿Por qué los países se unen a grupos como las Naciones Unidas?', fa: 'چرا کشورها به گروه‌هایی مثل سازمان ملل متحد می‌پیوندند؟' },
        choices: [
          { ok: true, t: { en: 'To talk and work together on shared problems', es: 'Para hablar y trabajar juntos en problemas que comparten', fa: 'تا دربارهٔ مشکلات مشترک گپ بزنند و با هم کار کنند' },
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
        { en: '¡Hola! I guide hikers in the Andes Mountains. The Andes form part of the border between Chile and Argentina. That is a [[natural border|natural border]]. It follows a mountain range, a river or a coastline.',
          es: '¡Hola! Guío a excursionistas en la cordillera de los Andes. Los Andes forman parte de la frontera entre Chile y Argentina. Esa es una [[natural border|frontera natural]]. Sigue una cordillera, un río o una costa.',
          fa: 'اولا! من رهنمای کوه‌پیمایان در کوه‌های اندیز هستم. اندیز بخشی از سرحد بین چیلی و ارجنتاین است. این یک [[natural border|سرحد طبیعی]] است. از یک رشته‌کوه، دریا یا ساحل پیروی می‌کند.' },
        { en: 'There are more. The Rio Grande, a river, forms a long part of the border between the United States and Mexico. Some of the Great Lakes are part of the border with Canada. Japan is an island country, so its coastline is a border on every side.',
          es: 'Hay más. El río Bravo (Rio Grande) forma una parte larga de la frontera entre Estados Unidos y México. Algunos de los Grandes Lagos son parte de la frontera con Canadá. Japón es un país de islas, así que su costa es una frontera por todos lados.',
          fa: 'بیشتر هم هست. دریای ریو گرانده بخش درازی از سرحد بین ایالات متحده و مکسیکو است. بعضی از جهیل‌های بزرگ بخشی از سرحد با کانادا هستند. جاپان کشور جزیره‌ای است، پس ساحلش از هر طرف سرحد است.' },
        { en: 'Natural borders are easy to see on a map. But nature does not always draw a clean line. A river can change its path over the years, and a mountain top can be hard to measure.',
          es: 'Las fronteras naturales son fáciles de ver en un mapa. Pero la naturaleza no siempre dibuja una línea limpia. Un río puede cambiar su camino con los años, y la cima de una montaña puede ser difícil de medir.',
          fa: 'سرحدهای طبیعی روی نقشه آسان دیده می‌شوند. اما طبیعت همیشه یک خط پاک نمی‌کشد. یک دریا ممکن است در طول سال‌ها راهش را تغییر دهد و اندازه کردن سر کوه ممکن است سخت باشد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is a natural border?', es: '¿Cuál es una frontera natural?', fa: 'کدام یک سرحد طبیعی است؟' },
        choices: [
          { ok: true, t: { en: 'The Andes Mountains between Chile and Argentina', es: 'La cordillera de los Andes entre Chile y Argentina', fa: 'کوه‌های اندیز بین چیلی و ارجنتاین' },
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
        { en: 'Akwaaba! I teach history in Ghana. Look at a map of Africa. Many borders are straight lines. A straight border drawn by people is a [[geometric border|geometric border]]. It does not follow any river or mountain.',
          es: '¡Akwaaba! Enseño historia en Ghana. Mira un mapa de África. Muchas fronteras son líneas rectas. Una frontera recta dibujada por personas es una [[geometric border|frontera geométrica]]. No sigue ningún río ni montaña.',
          fa: 'اکوابا! من در غانا تاریخ درس می‌دهم. به نقشهٔ افریقا نگاه کن. بسیاری از سرحدها خط راست هستند. سرحد راستی که مردم کشیده‌اند [[geometric border|سرحد هندسی]] است. از هیچ دریا یا کوهی پیروی نمی‌کند.' },
        { en: 'European countries drew many of those lines in the late 1800s, sometimes with only a ruler and a map. They did not always think about the people already living there. Some families and villages ended up split between two countries.',
          es: 'Países europeos dibujaron muchas de esas líneas a fines del siglo XIX, a veces solo con una regla y un mapa. No siempre pensaron en la gente que ya vivía allí. Algunas familias y pueblos quedaron divididos entre dos países.',
          fa: 'کشورهای اروپایی بسیاری از این خط‌ها را در اواخر دههٔ ۱۸۰۰ کشیدند، گاهی فقط با یک خط‌کش و یک نقشه. آن‌ها همیشه به مردمی که از قبل آنجا زندگی می‌کردند فکر نکردند. بعضی خانواده‌ها و قریه‌ها بین دو کشور تقسیم شدند.' },
        { en: 'Sometimes two countries do not agree on where a border is. That is a [[boundary dispute|boundary dispute]]. Old maps, history and resources can all start one. For example, China and India both claim some land high in the Himalaya Mountains.',
          es: 'A veces dos países no están de acuerdo sobre dónde está una frontera. Eso es una [[boundary dispute|disputa fronteriza]]. Mapas viejos, la historia y los recursos pueden empezar una. Por ejemplo, China e India reclaman tierras en lo alto de las montañas del Himalaya.',
          fa: 'گاهی دو کشور دربارهٔ جای یک سرحد موافق نیستند. این یک [[boundary dispute|اختلاف سرحدی]] است. نقشه‌های کهنه، تاریخ و منابع می‌توانند آن را شروع کنند. مثلاً چین و هند هر دو بعضی زمین‌های بلند در کوه‌های هیمالیا را از خود می‌دانند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do some borders in Africa cut through villages and family land?', es: '¿Por qué algunas fronteras en África cruzan pueblos y tierras de familias?', fa: 'چرا بعضی سرحدها در افریقا از وسط قریه‌ها و زمین خانواده‌ها می‌گذرند؟' },
        choices: [
          { ok: true, t: { en: 'People far away drew straight lines without thinking about who lived there', es: 'Gente lejana dibujó líneas rectas sin pensar en quién vivía allí', fa: 'مردمی از جای دور خط‌های راست کشیدند بدون فکر به کسانی که آنجا زندگی می‌کردند' },
            why: { en: 'The lines were drawn on maps in Europe, not by the people living on the land.', es: 'Las líneas se dibujaron en mapas en Europa, no por la gente que vivía en esa tierra.', fa: 'این خط‌ها در اروپا روی نقشه کشیده شدند، نه به دست مردمی که روی آن زمین زندگی می‌کردند.' } },
          { t: { en: 'The villages moved after the borders were drawn', es: 'Los pueblos se movieron después de que se dibujaron las fronteras', fa: 'قریه‌ها بعد از کشیدن سرحدها جا عوض کردند' },
            why: { en: 'The villages were already there. The lines were drawn across them.', es: 'Los pueblos ya estaban allí. Las líneas se dibujaron encima de ellos.', fa: 'قریه‌ها از قبل آنجا بودند. خط‌ها از روی آن‌ها کشیده شدند.' } },
          { t: { en: 'Rivers pushed the villages across the line', es: 'Los ríos empujaron los pueblos al otro lado de la línea', fa: 'دریاها قریه‌ها را به آن طرف خط بردند' },
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
        { en: 'Xin chào! I study the Mekong River. It flows through several countries. Laos, Thailand, Cambodia and Vietnam all depend on it for fish and for farm water. Rivers do not stop at a border sign. A dam [[upstream|upstream]] changes the water for everyone below.',
          es: '¡Xin chào! Estudio el río Mekong. Pasa por varios países. Laos, Tailandia, Camboya y Vietnam dependen de él para pescar y para regar sus cultivos. Los ríos no se detienen en un letrero de frontera. Una represa [[upstream|río arriba]] cambia el agua para todos los de abajo.',
          fa: 'سین چائو! من دریای میکانگ را مطالعه می‌کنم. این دریا از چند کشور می‌گذرد. لائوس، تایلند، کمبودیا و ویتنام برای ماهی و آب کشت به آن وابسته‌اند. دریاها کنار تابلوی سرحد نمی‌ایستند. یک بند آب در [[upstream|بالای دریا]] آب را برای همهٔ پایینی‌ها تغییر می‌دهد.' },
        { en: 'So in 1995 these countries formed the Mekong River Commission. They share water data and plan together. It does not stop every argument, but it gives them a table to sit at. A [[treaty|treaty]], a written agreement between countries, can do the same.',
          es: 'Por eso en 1995 estos países formaron la Comisión del Río Mekong. Comparten datos del agua y planean juntos. No detiene todas las discusiones, pero les da una mesa donde sentarse. Un [[treaty|tratado]], un acuerdo escrito entre países, puede hacer lo mismo.',
          fa: 'برای همین در سال ۱۹۹۵ این کشورها کمیسیون دریای میکانگ را ساختند. آن‌ها معلومات آب را با هم شریک می‌کنند و با هم پلان می‌سازند. این همهٔ اختلاف‌ها را ختم نمی‌کند، اما به آن‌ها میزی برای نشستن می‌دهد. یک [[treaty|معاهده]]، یعنی توافق نوشته‌شده بین کشورها، هم همین کار را می‌کند.' },
        { en: 'In 1960 India and Pakistan signed the Indus Waters Treaty. The World Bank, a [[neutral|neutral]] helper, helped them agree. It held for more than sixty years, even when the two countries fought. But the Aral Sea had no strong agreement. Its rivers were sent to cotton fields, and the sea lost most of its water.',
          es: 'En 1960 India y Pakistán firmaron el Tratado de las Aguas del Indo. El Banco Mundial, un ayudante [[neutral|neutral]], los ayudó a ponerse de acuerdo. Duró más de sesenta años, incluso cuando los dos países pelearon. Pero el mar de Aral no tenía un acuerdo fuerte. Sus ríos se usaron para campos de algodón, y el mar perdió casi toda su agua.',
          fa: 'در سال ۱۹۶۰ هند و پاکستان معاهدهٔ آب‌های سند را امضا کردند. بانک جهانی، یک کمک‌کنندهٔ [[neutral|بی‌طرف]]، به آن‌ها کمک کرد تا موافقه کنند. این معاهده بیشتر از شصت سال پابرجا ماند، حتی وقتی دو کشور جنگیدند. اما بحیرهٔ ارال توافق محکمی نداشت. دریاهای آن به کشتزارهای پخته برده شدند و بحیره بیشتر آبش را از دست داد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [
          { ok: true, t: { en: 'Its rivers were sent to water cotton fields, and it lost most of its water', es: 'Sus ríos se usaron para regar campos de algodón, y perdió casi toda su agua', fa: 'دریاهایش برای آبیاری کشتزارهای پخته برده شدند و بیشتر آبش را از دست داد' },
            why: { en: 'With no strong agreement to protect it, the sea shrank over many years.', es: 'Sin un acuerdo fuerte que lo protegiera, el mar se encogió durante muchos años.', fa: 'بدون یک توافق محکم برای حفاظت، بحیره در طول سال‌ها کوچک شد.' } },
          { t: { en: 'It froze over and never thawed', es: 'Se congeló y nunca se descongeló', fa: 'یخ بست و دیگر آب نشد' },
            why: { en: 'The sea shrank because people took its river water, not because of ice.', es: 'El mar se encogió porque la gente tomó el agua de sus ríos, no por el hielo.', fa: 'بحیره کوچک شد چون مردم آب دریاهایش را گرفتند، نه به خاطر یخ.' } },
          { t: { en: 'A treaty split it evenly between two countries', es: 'Un tratado lo dividió por igual entre dos países', fa: 'یک معاهده آن را مساوی بین دو کشور تقسیم کرد' },
            why: { en: 'There was no strong agreement. That is part of why it was lost.', es: 'No hubo un acuerdo fuerte. Eso es parte de por qué se perdió.', fa: 'توافق محکمی نبود. این بخشی از دلیل از دست رفتنش است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 27, y: 2, text: { en: 'THE GREAT ATLAS · 24 pages, one for every place you have walked, from Mapmaker\'s Valley to the far Pacific islands. 23 pages are home again. One page is still missing.',
      es: 'EL GRAN ATLAS · 24 páginas, una por cada lugar que recorriste, desde el Valle del Cartógrafo hasta las lejanas islas del Pacífico. 23 páginas ya volvieron. Todavía falta una.',
      fa: 'اطلس بزرگ · ۲۴ صفحه، یکی برای هر جایی که رفتی، از درهٔ نقشه‌کش تا جزیره‌های دور اقیانوس آرام. ۲۳ صفحه دوباره سر جایشان هستند. هنوز یک صفحه کم است.' } },
    { x: 22, y: 13, text: { en: 'SILVER RIVER · This river is the [[border|border]] between two neighbors, North Bank and South Bank. Both use its water for farms, drinking and fishing. The river does not belong to just one side.',
      es: 'RÍO PLATEADO · Este río es la [[border|frontera]] entre dos vecinos, Orilla Norte y Orilla Sur. Los dos usan su agua para cultivos, para beber y para pescar. El río no es de un solo lado.',
      fa: 'دریای نقره‌ای · این دریا [[border|سرحد]] بین دو همسایه است، ساحل شمالی و ساحل جنوبی. هر دو از آب آن برای کشت، نوشیدن و ماهیگیری استفاده می‌کنند. این دریا مال فقط یک طرف نیست.' } }
  ],

  /* the quest: Farida on the South Bank (gold !) -> Mateo the surveyor in the mountains -> beat the Ink Thief in the desert -> back to Farida */
  quest: {
    stat: 'reg',
    title: { en: 'The Stolen Border Map', es: 'El mapa robado de la frontera', fa: 'نقشهٔ دزدیده‌شدهٔ سرحد' },
    giver: {
      x: 20, y: 16,
      name: { en: 'Farida Noori', es: 'Farida Noori', fa: 'فریده نوری' },
      role: { en: 'Farmer on the South Bank', es: 'Agricultora de la Orilla Sur', fa: 'دهقان در ساحل جنوبی' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#3f8f6f', pants: '#4a3a2a', robe: true, hat: '#d9a441' },
      lines: [
        { en: 'Please help! North Bank and South Bank made a map together. It shows our [[border|border]]: a line down the middle of the Silver River. Both sides signed it.',
          es: '¡Ayuda, por favor! La Orilla Norte y la Orilla Sur hicieron un mapa juntas. Muestra nuestra [[border|frontera]]: una línea por el medio del Río Plateado. Los dos lados lo firmaron.',
          fa: 'لطفاً کمک کن! ساحل شمالی و ساحل جنوبی با هم یک نقشه ساختند. این نقشه [[border|سرحد]] ما را نشان می‌دهد: یک خط در وسط دریای نقره‌ای. هر دو طرف آن را امضا کردند.' },
        { en: 'An Ink Thief stole the map! It wants to smear the line so the neighbors fight. Mateo, the mapmaker, saw it run. He is in the mountains to the north-west. Will you ask him?',
          es: '¡Un Ladrón de Tinta robó el mapa! Quiere borrar la línea para que los vecinos peleen. Mateo, el cartógrafo, lo vio correr. Está en las montañas, al noroeste. ¿Le preguntas?',
          fa: 'یک دزد رنگ نقشه را دزدید! می‌خواهد خط را خراب کند تا همسایه‌ها جنگ کنند. ماتئو، نقشه‌کش، دید که کجا دوید. او در کوه‌ها به طرف شمال غرب است. از او می‌پرسی؟' }
      ],
      wait: { en: 'Mateo is in the mountains to the north-west. Cross the west bridge, then walk north.',
        es: 'Mateo está en las montañas, al noroeste. Cruza el puente del oeste y luego camina al norte.',
        fa: 'ماتئو در کوه‌ها به طرف شمال غرب است. از پل غربی بگذر، بعد به شمال برو.' },
      thanks: { en: 'Our map is back, and the line is clear! Now both banks can read the same border. Clear borders help neighbors live in peace. Thank you!',
        es: '¡Nuestro mapa volvió y la línea está clara! Ahora las dos orillas pueden leer la misma frontera. Las fronteras claras ayudan a los vecinos a vivir en paz. ¡Gracias!',
        fa: 'نقشهٔ ما برگشت و خط روشن است! حالا هر دو ساحل می‌توانند یک سرحد را بخوانند. سرحدهای روشن به همسایه‌ها کمک می‌کنند که در صلح زندگی کنند. تشکر!' }
    },
    contact: {
      x: 12, y: 5,
      name: { en: 'Mateo Quispe', es: 'Mateo Quispe', fa: 'ماتئو کیسپه' },
      role: { en: 'Land surveyor from Peru', es: 'Topógrafo de Perú', fa: 'اندازه‌گیر زمین از پیرو' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c8742a', pants: '#3a3a3a', hat: '#7a2f2f' },
      lines: [
        { en: 'I measure land and mark borders. Yes, the Ink Thief ran past me, laughing! It held a map with a river on it.',
          es: 'Yo mido la tierra y marco fronteras. ¡Sí, el Ladrón de Tinta pasó corriendo y riéndose! Llevaba un mapa con un río.',
          fa: 'من زمین را اندازه می‌گیرم و سرحدها را نشانی می‌کنم. بله، دزد رنگ خنده‌کنان از کنارم دوید! یک نقشه با یک دریا در دستش بود.' },
        { en: 'It ran east, past the Council Hall, into the desert. The thief hates clear answers. Name each kind of [[border|border]] the right way, and it will drop the map.',
          es: 'Corrió al este, pasó el Salón del Consejo y entró al desierto. El ladrón odia las respuestas claras. Nombra bien cada tipo de [[border|frontera]] y soltará el mapa.',
          fa: 'به شرق دوید، از کنار تالار شورا گذشت و داخل ریگستان رفت. دزد از جواب‌های روشن بدش می‌آید. هر نوع [[border|سرحد]] را درست نام ببر، آن وقت نقشه را می‌اندازد.' }
      ]
    },
    action: {
      type: 'fight',
      at: [44, 5],
      name: { en: 'The Border Ink Thief', es: 'El Ladrón de Tinta de la Frontera', fa: 'دزد رنگِ سرحد' },
      taunt: { en: 'Hee hee! One smear and the line is gone. Then who knows where North Bank ends?',
        es: '¡Ji ji! Una mancha y la línea desaparece. ¿Y entonces quién sabrá dónde termina la Orilla Norte?',
        fa: 'هی هی! با یک غرغرو خط گم می‌شود. بعد کی می‌داند ساحل شمالی کجا تمام می‌شود؟' },
      win: { en: 'The Ink Thief drops the map and runs away. The border line is still clear!',
        es: '¡El Ladrón de Tinta suelta el mapa y huye! La línea de la frontera sigue clara.',
        fa: 'دزد رنگ نقشه را می‌اندازد و فرار می‌کند. خط سرحد هنوز روشن است!' },
      need: 2,
      questions: [
        { q: { en: 'On a map, a border runs along the top of a long mountain range. What kind of border is it?', es: 'En un mapa, una frontera va por la cima de una larga cordillera. ¿Qué tipo de frontera es?', fa: 'روی یک نقشه، یک سرحد از سر یک سلسله‌کوه دراز می‌گذرد. این چه نوع سرحد است؟' },
          choices: [{ en: 'A natural border', es: 'Una frontera natural', fa: 'سرحد طبیعی' }, { en: 'A geometric border', es: 'Una frontera geométrica', fa: 'سرحد هندسی' }, { en: 'A trade bloc', es: 'Un bloque comercial', fa: 'گروه تجارتی' }, { en: 'A treaty', es: 'Un tratado', fa: 'معاهده' }], answer: 0,
          why: { en: 'It follows mountains, a part of nature. So it is a [[natural border|natural border]].', es: 'Sigue las montañas, que son parte de la naturaleza. Por eso es una [[natural border|frontera natural]].', fa: 'این سرحد کوه‌ها را دنبال می‌کند که بخشی از طبیعت هستند. پس [[natural border|سرحد طبیعی]] است.' } },
        { q: { en: 'A border is a long, straight line across a desert. It does not follow any river or hill. What kind of border is it?', es: 'Una frontera es una línea larga y recta que cruza un desierto. No sigue ningún río ni cerro. ¿Qué tipo de frontera es?', fa: 'یک سرحد یک خط دراز و راست در یک ریگستان است. هیچ دریا یا تپه‌ای را دنبال نمی‌کند. این چه نوع سرحد است؟' },
          choices: [{ en: 'A geometric border', es: 'Una frontera geométrica', fa: 'سرحد هندسی' }, { en: 'A natural border', es: 'Una frontera natural', fa: 'سرحد طبیعی' }, { en: 'A coastline', es: 'Una costa', fa: 'خط ساحل' }, { en: 'A river border', es: 'Una frontera de río', fa: 'سرحد دریایی' }], answer: 0,
          why: { en: 'People drew that straight line with a ruler. It is a [[geometric border|geometric border]].', es: 'La gente dibujó esa línea recta con una regla. Es una [[geometric border|frontera geométrica]].', fa: 'مردم آن خط راست را با خط‌کش کشیدند. این یک [[geometric border|سرحد هندسی]] است.' } },
        { q: { en: 'A country is [[upstream|upstream]] on a river. It wants to build a big dam. What should it do first?', es: 'Un país está [[upstream|río arriba]]. Quiere construir una represa grande. ¿Qué debería hacer primero?', fa: 'یک کشور در [[upstream|بالای دریا]] است. می‌خواهد یک بند بزرگ بسازد. اول باید چه کند؟' },
          choices: [{ en: 'Talk with the countries downstream and agree on a plan', es: 'Hablar con los países río abajo y acordar un plan', fa: 'با کشورهای پایین دریا گپ بزند و روی یک پلان موافقه کند' }, { en: 'Build it fast before anyone notices', es: 'Construirla rápido antes de que alguien se dé cuenta', fa: 'آن را زود بسازد پیش از اینکه کسی بفهمد' }, { en: 'Move the border to the other side of the river', es: 'Mover la frontera al otro lado del río', fa: 'سرحد را به آن طرف دریا ببرد' }, { en: 'Close the border to all trucks', es: 'Cerrar la frontera a todos los camiones', fa: 'سرحد را به روی همهٔ لاری‌ها ببندد' }], answer: 0,
          why: { en: 'A dam upstream changes the water for everyone below. Talking first, maybe with a [[treaty|treaty]], keeps the peace.', es: 'Una represa río arriba cambia el agua para todos los que están abajo. Hablar primero, quizás con un [[treaty|tratado]], mantiene la paz.', fa: 'بندی که در بالای دریا ساخته شود، آب را برای همهٔ مردم پایین تغییر می‌دهد. اول گپ زدن، شاید با یک [[treaty|معاهده]]، صلح را نگه می‌دارد.' } }
      ],
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
        choices: [{ en: 'A border that follows a river, a mountain range or a coastline', es: 'Una frontera que sigue un río, una cordillera o una costa', fa: 'سرحدی که از دریا، رشته‌کوه یا ساحل پیروی می‌کند' }, { en: 'A border drawn with a ruler on a map', es: 'Una frontera dibujada con regla en un mapa', fa: 'سرحدی که با خط‌کش روی نقشه کشیده شده' }, { en: 'A border that two countries still argue about', es: 'Una frontera que dos países todavía discuten', fa: 'سرحدی که دو کشور هنوز بر سرش اختلاف دارند' }, { en: 'A border guarded by soldiers', es: 'Una frontera vigilada por soldados', fa: 'سرحدی که عسکرها از آن نگهبانی می‌کنند' }], answer: 0,
        why: { en: 'Natural borders follow things in nature, like the Andes or the Rio Grande.', es: 'Las fronteras naturales siguen cosas de la naturaleza, como los Andes o el río Bravo.', fa: 'سرحدهای طبیعی از چیزهای طبیعت پیروی می‌کنند، مثل اندیز یا ریو گرانده.' } },
      { q: { en: 'What is a geometric border?', es: '¿Qué es una frontera geométrica?', fa: 'سرحد هندسی چیست؟' },
        choices: [{ en: 'A straight line drawn by people', es: 'Una línea recta dibujada por personas', fa: 'خط راستی که مردم کشیده‌اند' }, { en: 'A border that follows a mountain ridge', es: 'Una frontera que sigue la cima de una montaña', fa: 'سرحدی که از تیغهٔ کوه پیروی می‌کند' }, { en: 'A border along a seacoast', es: 'Una frontera a lo largo de una costa', fa: 'سرحدی در امتداد ساحل بحر' }, { en: 'A border that moves every few years', es: 'Una frontera que se mueve cada pocos años', fa: 'سرحدی که هر چند سال جا عوض می‌کند' }], answer: 0,
        why: { en: 'Geometric borders are straight lines. Many borders in Africa are like this.', es: 'Las fronteras geométricas son líneas rectas. Muchas fronteras de África son así.', fa: 'سرحدهای هندسی خط راست هستند. بسیاری از سرحدهای افریقا این‌طور هستند.' } },
      { q: { en: 'What is a boundary dispute?', es: '¿Qué es una disputa fronteriza?', fa: 'اختلاف سرحدی چیست؟' },
        choices: [{ en: 'Two countries arguing over the same land', es: 'Dos países que discuten por la misma tierra', fa: 'دو کشور که بر سر یک زمین اختلاف دارند' }, { en: 'A treaty that ends a war', es: 'Un tratado que termina una guerra', fa: 'معاهده‌ای که جنگ را ختم می‌کند' }, { en: 'A tax charged at a border crossing', es: 'Un impuesto que se cobra al cruzar una frontera', fa: 'مالیه‌ای که هنگام گذشتن از سرحد گرفته می‌شود' }, { en: 'A fence built along a river', es: 'Una cerca construida junto a un río', fa: 'کتاره‌ای که کنار دریا ساخته شده' }], answer: 0,
        why: { en: 'In a boundary dispute, two countries do not agree on where the border is.', es: 'En una disputa fronteriza, dos países no están de acuerdo sobre dónde está la frontera.', fa: 'در اختلاف سرحدی، دو کشور دربارهٔ جای سرحد موافق نیستند.' } },
      { q: { en: 'What is a treaty?', es: '¿Qué es un tratado?', fa: 'معاهده چیست؟' },
        choices: [{ en: 'A written agreement between countries', es: 'Un acuerdo escrito entre países', fa: 'توافق نوشته‌شده بین کشورها' }, { en: 'A meeting that happens once a year', es: 'Una reunión que pasa una vez al año', fa: 'جلسه‌ای که سالی یک بار برگزار می‌شود' }, { en: 'A wall built along a border', es: 'Un muro construido en una frontera', fa: 'دیواری که کنار سرحد ساخته شده' }, { en: 'A map that shows where a border runs', es: 'Un mapa que muestra por dónde va una frontera', fa: 'نقشه‌ای که نشان می‌دهد سرحد از کجا می‌گذرد' }], answer: 0,
        why: { en: 'A treaty is written down and signed. It can say how countries share water or land.', es: 'Un tratado se escribe y se firma. Puede decir cómo los países comparten agua o tierra.', fa: 'معاهده نوشته و امضا می‌شود. می‌تواند بگوید کشورها چطور آب یا زمین را شریک شوند.' } },
      { q: { en: 'Why did Laos, Thailand, Cambodia and Vietnam form the Mekong River Commission in 1995?', es: '¿Por qué Laos, Tailandia, Camboya y Vietnam formaron la Comisión del Río Mekong en 1995?', fa: 'چرا لائوس، تایلند، کمبودیا و ویتنام در سال ۱۹۹۵ کمیسیون دریای میکانگ را ساختند؟' },
        choices: [{ en: 'To share water data and plan together', es: 'Para compartir datos del agua y planear juntos', fa: 'تا معلومات آب را شریک کنند و با هم پلان بسازند' }, { en: 'To close the river to foreign ships', es: 'Para cerrar el río a barcos extranjeros', fa: 'تا دریا را به روی کشتی‌های خارجی ببندند' }, { en: 'To divide the river into private parts', es: 'Para dividir el río en partes privadas', fa: 'تا دریا را به بخش‌های شخصی تقسیم کنند' }, { en: 'To build one dam they would all own', es: 'Para construir una sola represa de todos', fa: 'تا یک بند آب بسازند که مال همه باشد' }], answer: 0,
        why: { en: 'The commission gives the countries a table to sit at and share what they know.', es: 'La comisión les da a los países una mesa donde sentarse y compartir lo que saben.', fa: 'این کمیسیون به کشورها میزی برای نشستن و شریک کردن دانسته‌هایشان می‌دهد.' } },
      { q: { en: 'What is surprising about the Indus Waters Treaty?', es: '¿Qué tiene de sorprendente el Tratado de las Aguas del Indo?', fa: 'چه چیز معاهدهٔ آب‌های سند تعجب‌آور است؟' },
        choices: [{ en: 'It held for more than sixty years, even when India and Pakistan fought', es: 'Duró más de sesenta años, incluso cuando India y Pakistán pelearon', fa: 'بیشتر از شصت سال پابرجا ماند، حتی وقتی هند و پاکستان جنگیدند' }, { en: 'It was signed by every country in the world', es: 'Lo firmaron todos los países del mundo', fa: 'همهٔ کشورهای جهان آن را امضا کردند' }, { en: 'It gave all the water to one country', es: 'Le dio toda el agua a un solo país', fa: 'تمام آب را به یک کشور داد' }, { en: 'It was never written down', es: 'Nunca se escribió', fa: 'هرگز نوشته نشد' }], answer: 0,
        why: { en: 'With help from the World Bank, the treaty held longer than many treaties in calmer places.', es: 'Con ayuda del Banco Mundial, el tratado duró más que muchos tratados en lugares más tranquilos.', fa: 'با کمک بانک جهانی، این معاهده از بسیاری معاهده‌ها در جاهای آرام‌تر بیشتر دوام کرد.' } },
      { q: { en: 'What happened to the Aral Sea?', es: '¿Qué le pasó al mar de Aral?', fa: 'بر سر بحیرهٔ ارال چه آمد؟' },
        choices: [{ en: 'Rivers that fed it were sent to water cotton fields', es: 'Los ríos que lo alimentaban se usaron para regar campos de algodón', fa: 'دریاهایی که به آن آب می‌دادند به کشتزارهای پخته برده شدند' }, { en: 'An earthquake opened a channel to the ocean', es: 'Un terremoto abrió un canal hacia el océano', fa: 'یک زلزله راهی به سوی بحر باز کرد' }, { en: 'It froze over and never thawed', es: 'Se congeló y nunca se descongeló', fa: 'یخ بست و دیگر آب نشد' }, { en: 'A treaty split it evenly', es: 'Un tratado lo dividió por igual', fa: 'یک معاهده آن را مساوی تقسیم کرد' }], answer: 0,
        why: { en: 'No strong agreement protected the sea, so it lost most of its water.', es: 'Ningún acuerdo fuerte protegió el mar, así que perdió casi toda su agua.', fa: 'هیچ توافق محکمی از بحیره حفاظت نکرد، پس بیشتر آبش را از دست داد.' } },
      { q: { en: 'Two countries share one river. Why do they need to work together?', es: 'Dos países comparten un río. ¿Por qué necesitan trabajar juntos?', fa: 'دو کشور در یک دریا شریک هستند. چرا باید با هم کار کنند؟' },
        choices: [{ en: 'The river keeps flowing across the border, so what one side does changes the other', es: 'El río sigue corriendo a través de la frontera, así que lo que hace un lado cambia al otro', fa: 'دریا از سرحد می‌گذرد، پس کار یک طرف طرف دیگر را تغییر می‌دهد' }, { en: 'Rivers stop flowing at the border', es: 'Los ríos dejan de correr en la frontera', fa: 'دریاها کنار سرحد از جریان می‌ایستند' }, { en: 'Only one country can ever use a river', es: 'Solo un país puede usar un río', fa: 'فقط یک کشور می‌تواند از دریا استفاده کند' }, { en: 'Rivers are not useful for farms', es: 'Los ríos no sirven para los cultivos', fa: 'دریاها برای کشت به درد نمی‌خورند' }], answer: 0,
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
