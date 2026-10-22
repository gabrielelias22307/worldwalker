/* WORLDWALKER · Episode 3.1 · Europe (WG.5)
   A port coast on the North Sea, a peninsula with bays on both sides, the Rhine flowing north from the Alps,
   and the Alps as a wall along the south. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'WG.5',
  title: { en: 'Europe', es: 'Europa', fa: 'اروپا' },
  place: { en: 'Peninsula Coast', es: 'Costa de las Penínsulas', fa: 'ساحل شبه‌جزیره‌ها' },
  intro: [
    { en: 'The Grump froze the weather charts! Nobody knows why the harbor is not frozen.', es: '¡El Gruñón congeló los mapas del tiempo! Nadie sabe por qué el puerto no está congelado.', fa: 'غرغرو نقشه‌های هوا را یخ زد! هیچ کس نمی‌داند چرا بندر یخ نزده است.' },
        { en: 'Talk to the ferry captain, barge skipper and mountain guide. Then fix the compass stone.', es: 'Habla con la capitana del ferri, el patrón de la barcaza y el guía de montaña. Luego arregla la piedra de la brújula.', fa: 'با کپتان کشتی، ناخدای کشتی باری و رهنمای کوه گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [10.0, 48.0],
    start: [
      { en: 'Europe is a peninsula of peninsulas. Look how the sea wraps around it.',
        es: 'Europa es una península llena de penínsulas. Mira cómo el mar la rodea.',
        fa: 'اروپا شبه‌جزیره‌ای پر از شبه‌جزیره است. ببین بحر چطور دورش را گرفته.' },
      { en: 'Italy, Spain and Greece are all peninsulas in southern Europe.',
        es: 'Italia, España y Grecia son penínsulas en el sur de Europa.',
        fa: 'ایتالیا، هسپانیه و یونان همه شبه‌جزیره‌هایی در جنوب اروپا هستند.' },
      { en: 'Barges on the Rhine River pass Switzerland, Germany and the Netherlands.',
        es: 'Las barcazas del río Rin pasan por Suiza, Alemania y los Países Bajos.',
        fa: 'کشتی‌های باری روی دریای راین از سویس، آلمان و هالند می‌گذرند.' }
    ],
    page: { en: 'With its fjords and islands, Norway\'s coast is over 60,000 miles long.',
      es: 'Con sus fiordos e islas, la costa de Noruega mide más de 100,000 kilómetros.',
      fa: 'با فیوردها و جزیره‌هایش، ساحل ناروی بیشتر از ۱۰۰ هزار کیلومتر است.' }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [5, 5], name: { en: 'Grandpa Henrik', es: 'Abuelo Henrik', fa: 'پدرکلان هنریک' },
      look: { skin: 0, hair: '#e8e8e8', shirt: '#2f5d8a', pants: '#3a3a4a', style: 'short', hat: '#1f2f4a' },
      lines: [
        { en: 'Come in, shut the door! The North Sea wind is strong today.', es: '¡Pasa y cierra la puerta! El viento del mar del Norte está fuerte hoy.', fa: 'بیا داخل، دروازه را ببند! باد بحر شمال امروز تیز است.' },
        { en: 'I fished here all my life. Our harbor stays open, even in deep winter.', es: 'Pesqué aquí toda mi vida. Nuestro puerto sigue abierto, aun en pleno invierno.', fa: 'تمام عمرم اینجا ماهی گرفتم. بندر ما حتی در وسط زمستان باز می‌ماند.' }
      ] },
    { at: [11, 5], name: { en: 'Baker Annika', es: 'Panadera Annika', fa: 'نانوا آنیکا' },
      look: { skin: 0, hair: '#e6c46a', shirt: '#f2efe6', pants: '#6a4a3a', style: 'bun' },
      lines: [
        { en: 'Careful, the oven is hot! I bake bread before the sun comes up.', es: '¡Cuidado, el horno está caliente! Horneo pan antes de que salga el sol.', fa: 'احتیاط، تنور داغ است! من پیش از برآمدن آفتاب نان می‌پزم.' },
        { en: 'Taste this dark rye bread. Rye grows well in cool, wet northern Europe.', es: 'Prueba este pan oscuro de centeno. El centeno crece bien en el norte de Europa, fresco y húmedo.', fa: 'این نان تیرهٔ چاودار را بچش. چاودار در شمال سرد و مرطوب اروپا خوب می‌روید.' }
      ] },
    { at: [15, 5], name: { en: 'Chiara', es: 'Chiara', fa: 'کیارا' },
      look: { skin: 1, hair: '#3b2414', shirt: '#d9534f', pants: '#2d4a6b', style: 'long' },
      lines: [
        { en: 'Ciao! I am from Italy. Italy is a peninsula shaped like a boot.', es: '¡Ciao! Soy de Italia. Italia es una península con forma de bota.', fa: 'چاو! من از ایتالیا هستم. ایتالیا یک شبه‌جزیره به شکل موزه است.' },
        { en: 'At home, summers are hot and dry. Here it rains in every season!', es: 'En mi tierra, los veranos son calurosos y secos. ¡Aquí llueve en todas las estaciones!', fa: 'در وطنم تابستان گرم و خشک است. اینجا در هر فصل باران می‌بارد!' }
      ] },
    { at: [25, 5], name: { en: 'Grandma Margit', es: 'Abuela Margit', fa: 'مادرکلان مارگیت' },
      look: { skin: 0, hair: '#d8d8d8', shirt: '#7a9e5a', pants: '#4a3a5a', style: 'bun' },
      lines: [
        { en: 'Hello, dear! Mind my bicycle in the hall. I ride it every day.', es: '¡Hola, cariño! Cuidado con mi bicicleta en el pasillo. La uso todos los días.', fa: 'سلام عزیزم! متوجه بایسکلم در دهلیز باش. هر روز سوارش می‌شوم.' },
        { en: 'I speak three languages. In Europe, the next country is often very close.', es: 'Hablo tres idiomas. En Europa, el país vecino suele estar muy cerca.', fa: 'من سه زبان گپ می‌زنم. در اروپا کشور همسایه اکثراً خیلی نزدیک است.' }
      ] },
    { at: [29, 5], name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#f0a020', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'Shh, I work nights at the port. Ships come and go all day and night.', es: 'Shh, trabajo de noche en el puerto. Los barcos van y vienen día y noche.', fa: 'آهسته، من شب‌ها در بندر کار می‌کنم. کشتی‌ها شب و روز می‌آیند و می‌روند.' },
        { en: 'From our port, river barges carry the boxes inland, all the way to Switzerland.', es: 'Desde nuestro puerto, las barcazas llevan las cajas por el río, hasta Suiza.', fa: 'از بندر ما، کشتی‌های باری صندوق‌ها را روی دریا تا سویس می‌برند.' }
      ] },
    { at: [27, 9], name: { en: 'Farmer Jakub', es: 'Agricultor Jakub', fa: 'دهقان یاکوب' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#4f7a3a', pants: '#3a3020', style: 'short', hat: '#6a5030' },
      lines: [
        { en: 'Come in! Wipe your boots, it was muddy in the fields.', es: '¡Pasa! Límpiate las botas, había mucho lodo en el campo.', fa: 'بیا داخل! موزه‌هایت را پاک کن، در زمین‌های زراعتی گِل بود.' },
        { en: 'The North European Plain has rich soil. We grow wheat and potatoes.', es: 'La Llanura del Norte de Europa tiene suelo rico. Cultivamos trigo y papas.', fa: 'دشت شمال اروپا خاک حاصلخیز دارد. ما گندم و کچالو می‌کاریم.' }
      ] }
  ],

  /* 32 x 22. North: the sea and a port town. West: a peninsula with a bay on each side.
     East: the Rhine flows north from the Alps to the sea, with barge quays and two bridges. South: the Alps, with one snowy pass. */
  map: [
    '================================',
    '=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=',
    '=~~~~kk~~~~kk~~~~~~~~~~~~~~~~~~=',
    '==~sssssssssssssssssss~~sssssssT',
    '==~sRRR..QQQ..RRR.....~~QQQ.RRRT',
    '==~shdh..hhd..hdh.....~~hdh.hdhT',
    '==~s::::::::::::::::::bb::::::.T',
    '==~s..mm........:.....~~.......T',
    '==~s~~~~s....T..:.....~~..QQQQ.T',
    '==~~~s~~~s......:.mm.k~~k.hdhh.T',
    '==~~~~~~~s......:....k~~k......T',
    '==~sssssss......:....k~~k....T.T',
    '==~k............:..P..~~...T...T',
    '==~k.x..........:.....~~.......T',
    '==~sssssss::::::::::::bb:::::..T',
    '==~~~~~~~~s.....:.www.~~.wwwww.T',
    '==~~~~~~~~s.T...:.www.~~.wwwww.T',
    '==~~~~~~~~s..x:::....n~~n......T',
    '==~s~~~~~s.PMnnnnPMnPMiiMnPMnPMT',
    '==AAAAAAAAAAAAnnAAAAAAAAAAAAAAAA',
    '==AAAAAAAAAAAAnnAAAAAAAAAAAAAAAA',
    '==AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  ],
  start: [8, 7],

  secret: { tool: 'canoe', at: [5, 9],
    text: { en: 'The canoe reached the tiny island in the bay! In the chest is an old sea map. It says Great Britain is the biggest island in Europe.',
      es: '¡La canoa llegó a la islita de la bahía! En el cofre hay un mapa viejo del mar. Dice que Gran Bretaña es la isla más grande de Europa.',
      fa: 'قایق به جزیرهٔ کوچک در خلیج رسید! در صندوق یک نقشهٔ کهنهٔ بحر است. می‌گوید بریتانیای کبیر بزرگ‌ترین جزیرهٔ اروپا است.' } },

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): a harbor pier in the sheltered bay: Europe's peninsulas and bays make trade by sea easy */
  build: [
    { id: 'pier', kind: 'place', board: [11, 15], tile: 'k', over: '~', ok: [[8, 15], [9, 15], [9, 16], [9, 17]], cost: { wood: 1 },
      name: { en: 'Harbor pier', es: 'Muelle del puerto', fa: 'اسکلهٔ بندر' },
      ask: { en: 'Europe has a long coast with many [[peninsula|peninsulas]] and bays, so trade by sea is easy. A bay has land around it, so big storm waves stay out. Build a pier in the quiet bay just west of this sign. Put the pieces on the water next to the sand, in the corner of the bay.',
        es: 'Europa tiene una costa larga con muchas [[peninsula|penínsulas]] y bahías, así que comerciar por mar es fácil. Una bahía tiene tierra alrededor, así que las olas grandes de las tormentas no entran. Construye un muelle en la bahía tranquila, justo al oeste de este letrero. Pon las piezas en el agua junto a la arena, en la esquina de la bahía.',
        fa: 'اروپا ساحل درازی با [[peninsula|شبه‌جزیره‌ها]] و خلیج‌های زیاد دارد، پس تجارت از راه بحر آسان است. دور خلیج خشکه است، پس موج‌های بزرگ توفان داخل نمی‌آیند. در خلیج آرام، درست در غرب این لوحه، یک اسکله بساز. تکه‌ها را روی آب کنار ریگ، در کنج خلیج بگذار.' },
      why: { en: 'Calm water in the bay. Ships can tie up here safely!', es: 'Agua tranquila en la bahía. ¡Los barcos pueden amarrar aquí sin peligro!', fa: 'آب آرام در خلیج. کشتی‌ها این جا با امنیت لنگر می‌اندازند!' },
      wrong: { en: 'Not here. Build the pier on the water in the corner of the quiet bay, right next to the sand, west of the sign.', es: 'Aquí no. Construye el muelle en el agua, en la esquina de la bahía tranquila, junto a la arena, al oeste del letrero.', fa: 'این جا نه. اسکله را روی آب در کنج خلیج آرام، درست کنار ریگ، در غرب لوحه بساز.' },
      wrongBy: [
        { x: 11, y: 4, w: 11, h: 15, t: { en: 'This is dry land, far from the sea. Ships cannot reach it. A pier goes on the water in a bay.', es: 'Esto es tierra seca, lejos del mar. Los barcos no llegan aquí. Un muelle va en el agua de una bahía.', fa: 'این جا خشکه است، دور از بحر. کشتی‌ها به این جا نمی‌رسند. اسکله روی آب در یک خلیج ساخته می‌شود.' } },
        { x: 0, y: 3, w: 3, h: 18, t: { en: 'This is the open sea. Storm waves would smash the pier. In a bay, land keeps the water calm.', es: 'Este es el mar abierto. Las olas de las tormentas romperían el muelle. En una bahía, la tierra mantiene el agua tranquila.', fa: 'این جا بحر باز است. موج‌های توفان اسکله را می‌شکنند. در خلیج، خشکه آب را آرام نگه می‌دارد.' } }
      ],
      done: { en: 'The harbor is ready! Europe has many peninsulas and bays, so most places are close to the sea. Ships carry goods from port to port.', es: '¡El puerto está listo! Europa tiene muchas penínsulas y bahías, así que casi todos los lugares están cerca del mar. Los barcos llevan mercancías de puerto en puerto.', fa: 'بندر آماده است! اروپا شبه‌جزیره‌ها و خلیج‌های زیاد دارد، پس بیشتر جاها نزدیک بحر هستند. کشتی‌ها مال را از بندر به بندر می‌برند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 12], at: [15, 10], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps north, then 4 steps east. Something is hidden there.', es: 'Desde esta nota, camina 2 pasos al norte y luego 4 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۲ قدم به شمال برو، بعد ۴ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You followed the compass! Europe has many peninsulas and bays, so most places are near the sea. A shell!', es: '¡Seguiste la brújula! Europa tiene muchas penínsulas y bahías, así que casi todo está cerca del mar. ¡Una concha!', fa: 'قطب‌نما را دنبال کردی! اروپا شبه‌جزیره و خلیج زیاد دارد، پس بیشتر جاها نزدیک بحر هستند. یک صدف!' } },
    { clueAt: [18, 12], at: [21, 17], decor: 'flower',
      clue: { en: 'The Rhine flows north from the Alps. Follow it south to the mountains. Stand on the snow, west bank.', es: 'El Rin corre al norte desde los Alpes. Síguelo al sur hasta las montañas. Párate en la nieve, orilla oeste.', fa: 'راین از الپ به طرف شمال می‌رود. آن را به طرف جنوب تا کوه‌ها دنبال کن. روی برف، کنار غربی، بایست.' },
      text: { en: 'The Rhine starts here, in the Swiss Alps, and flows 1,230 km north to the North Sea. An edelweiss flower!', es: 'El Rin nace aquí, en los Alpes suizos, y corre 1230 km al norte hasta el mar del Norte. ¡Una flor edelweiss!', fa: 'راین اینجا، در الپ سویس، شروع می‌شود و ۱۲۳۰ کیلومتر به شمال تا بحر شمال می‌رود. یک گل ادلوایس!' } }
  ],

  words: {
    peninsula: { en: 'land with water on three sides', es: 'tierra con agua por tres lados', fa: 'خشکه‌ای که از سه طرف آب دارد' },
    fjord: { en: 'a long, narrow strip of sea between tall cliffs, carved by glaciers', es: 'una franja de mar larga y angosta entre acantilados altos, tallada por glaciares', fa: 'نوار دراز و باریک بحر میان صخره‌های بلند که یخچال‌ها کنده‌اند' },
    strait: { en: 'a narrow strip of water that joins two larger seas', es: 'una franja angosta de agua que une dos mares más grandes', fa: 'نوار باریک آب که دو بحر بزرگ‌تر را به هم وصل می‌کند' },
    'north atlantic drift': { en: 'a warm ocean current that carries mild water across the Atlantic to western Europe', es: 'una corriente marina cálida que lleva agua templada por el Atlántico hasta el oeste de Europa', fa: 'یک جریان گرم بحری که آب معتدل را از اقیانوس اطلس به غرب اروپا می‌برد' },
    navigable: { en: 'deep and wide enough for big cargo boats', es: 'bastante profundo y ancho para barcos grandes de carga', fa: 'آن‌قدر عمیق و پهن که کشتی‌های بزرگ باری بتوانند بروند' },
    'natural barrier': { en: 'a landform, like a mountain range, that makes travel slow, costly or dangerous', es: 'una forma de relieve, como una cordillera, que hace el viaje lento, caro o peligroso', fa: 'شکلی از زمین، مثل سلسله‌کوه، که سفر را کند، گران یا خطرناک می‌کند' }
  },

  npcs: [
    {
      x: 4, y: 12,
      name: { en: 'Captain Ingrid', es: 'Capitana Ingrid', fa: 'کپتان اینگرید' },
      role: { en: 'Ferry captain', es: 'Capitana de ferri', fa: 'کپتان کشتی مسافربری' },
      look: { skin: 0, hair: '#e3c26b', shirt: '#1f4e8c', pants: '#22324f' },
      lines: [
        { en: 'Look! Water on three sides. This land is a [[peninsula|peninsula]].', es: '¡Mira! Agua por tres lados. Esta tierra es una [[peninsula|península]].', fa: 'نگاه کن! از سه طرف آب است. این خشکه یک [[peninsula|شبه‌جزیره]] است.' },
        { en: 'Spain, Italy, Greece and Norway are peninsulas too. Most of Europe is near the sea.', es: 'España, Italia, Grecia y Noruega también son penínsulas. Casi toda Europa está cerca del mar.', fa: 'اسپانیا، ایتالیا، یونان و ناروی هم شبه‌جزیره هستند. بیشتر اروپا نزدیک بحر است.' },
        { en: 'In Norway, glaciers carved each [[fjord|fjord]]: a long strip of sea between tall cliffs.', es: 'En Noruega, los glaciares tallaron cada [[fjord|fiordo]]: una franja larga de mar entre acantilados altos.', fa: 'در ناروی، یخچال‌ها هر [[fjord|فیورد]] را کندند: نوار دراز بحر میان صخره‌های بلند.' },
        { en: 'Far-north Norway\'s harbors stay open in winter. The warm [[north atlantic drift|North Atlantic Drift]] brings mild air.', es: 'Los puertos de Noruega, muy al norte, siguen abiertos en invierno. La cálida [[north atlantic drift|Deriva del Atlántico Norte]] trae aire templado.', fa: 'بندرهای ناروی، خیلی در شمال، در زمستان باز می‌مانند. [[north atlantic drift|جریان گرم اطلس شمالی]] هوای معتدل می‌آورد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Italy, Spain, Greece and Norway all sit on the same kind of landform. What is it?', es: 'Italia, España, Grecia y Noruega están en el mismo tipo de relieve. ¿Cuál es?', fa: 'ایتالیا، اسپانیا، یونان و ناروی همه روی یک نوع شکل زمین هستند. آن چیست؟' },
        choices: [
          { ok: true, t: { en: 'A peninsula', es: 'Una península', fa: 'شبه‌جزیره' },
            why: { en: 'Each one is land with water on most of its sides, joined to the mainland.', es: 'Cada una es tierra con agua en casi todos sus lados, unida al continente.', fa: 'هر کدام خشکه‌ای است که بیشتر طرف‌هایش آب است و به خشکهٔ بزرگ وصل است.' } },
          { t: { en: 'An island', es: 'Una isla', fa: 'جزیره' },
            why: { en: 'An island has water on every side. These lands are joined to the mainland.', es: 'Una isla tiene agua por todos lados. Estas tierras están unidas al continente.', fa: 'جزیره از همه طرف آب دارد. این خشکه‌ها به خشکهٔ بزرگ وصل هستند.' } },
          { t: { en: 'A mountain range', es: 'Una cordillera', fa: 'سلسله‌کوه' },
            why: { en: 'A range is a line of mountains, not a shape of coast.', es: 'Una cordillera es una fila de montañas, no una forma de costa.', fa: 'سلسله‌کوه یک ردیف کوه است، نه شکل ساحل.' } }
        ]
      }
    },
    {
      x: 20, y: 10,
      name: { en: 'Youssef', es: 'Youssef', fa: 'یوسف' },
      role: { en: 'River barge skipper', es: 'Patrón de barcaza de río', fa: 'ناخدای کشتی باری دریا' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', pants: '#2b2b3a' },
      lines: [
        { en: 'My barge sails the Rhine. It flows north from the Alps to the North Sea.', es: 'Mi barcaza navega por el Rin. Corre al norte, desde los Alpes hasta el mar del Norte.', fa: 'کشتی باری من روی راین می‌رود. راین از الپ به طرف شمال تا بحر شمال جاری است.' },
        { en: 'The Rhine is [[navigable|navigable]]: deep enough for big cargo boats. Boats move heavy goods cheaply.', es: 'El Rin es [[navigable|navegable]]: bastante profundo para barcos grandes de carga. Los barcos mueven cargas pesadas barato.', fa: 'راین [[navigable|قابل کشتیرانی]] است: برای کشتی‌های بزرگ باری عمیق است. کشتی بار سنگین را ارزان می‌برد.' },
        { en: 'The Danube flows east, through about ten countries, to the Black Sea.', es: 'El Danubio corre al este, por unos diez países, hasta el mar Negro.', fa: 'دانوب به طرف شرق، از حدود ده کشور، تا بحیرهٔ سیاه جاری است.' },
        { en: 'Vienna and Budapest grew on its banks. Canals link the rivers across Europe.', es: 'Viena y Budapest crecieron en sus orillas. Los canales unen los ríos de Europa.', fa: 'ویانا و بوداپست کنار آن بزرگ شدند. کانال‌ها دریاهای اروپا را به هم وصل می‌کنند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do people ship heavy grain on the Rhine instead of carrying it over land?', es: '¿Por qué la gente lleva granos pesados por el Rin en vez de llevarlos por tierra?', fa: 'چرا مردم غلهٔ سنگین را با کشتی روی راین می‌برند و نه از راه خشکه؟' },
        choices: [
          { ok: true, t: { en: 'Boats move heavy loads for less money', es: 'Los barcos mueven cargas pesadas más barato', fa: 'کشتی بار سنگین را ارزان‌تر می‌برد' },
            why: { en: 'A navigable river is a road of water. Heavy loads are cheap to move by boat.', es: 'Un río navegable es un camino de agua. Mover cargas pesadas en barco es barato.', fa: 'دریای قابل کشتیرانی یک سرک آبی است. بردن بار سنگین با کشتی ارزان است.' } },
          { t: { en: 'The Rhine flows east to the Black Sea', es: 'El Rin corre al este, al mar Negro', fa: 'راین به طرف شرق تا بحیرهٔ سیاه می‌رود' },
            why: { en: 'The Rhine flows north to the North Sea. The Danube is the one that reaches the Black Sea.', es: 'El Rin corre al norte, hasta el mar del Norte. El Danubio es el que llega al mar Negro.', fa: 'راین به طرف شمال تا بحر شمال می‌رود. دانوب است که به بحیرهٔ سیاه می‌رسد.' } },
          { t: { en: 'Europe has no roads for trucks', es: 'Europa no tiene caminos para camiones', fa: 'اروپا برای لاری‌ها سرک ندارد' },
            why: { en: 'Europe has many roads. Boats are simply cheaper for heavy loads.', es: 'Europa tiene muchos caminos. Los barcos solo son más baratos para cargas pesadas.', fa: 'اروپا سرک‌های زیادی دارد. فقط کشتی برای بار سنگین ارزان‌تر است.' } }
        ]
      }
    },
    {
      x: 27, y: 17,
      name: { en: 'Lukas', es: 'Lukas', fa: 'لوکاس' },
      role: { en: 'Mountain guide', es: 'Guía de montaña', fa: 'رهنمای کوه' },
      look: { skin: 1, hair: '#6b4a2a', shirt: '#3fa34d', pants: '#4a3a2a' },
      lines: [
        { en: 'Behind me are the Alps. Snow closed their narrow passes for months every winter.', es: 'Detrás de mí están los Alpes. La nieve cerraba sus pasos angostos por meses cada invierno.', fa: 'پشت سر من کوه‌های الپ هستند. برف هر زمستان درّه‌های باریک آن را برای چند ماه می‌بست.' },
        { en: 'A landform that makes travel hard is a [[natural barrier|natural barrier]], like the Alps.', es: 'Un relieve que hace difícil viajar es una [[natural barrier|barrera natural]], como los Alpes.', fa: 'شکلی از زمین که سفر را سخت می‌کند [[natural barrier|مانع طبیعی]] است، مثل الپ.' },
        { en: 'The Pyrenees, between Spain and France, are one too. Mountains kept people apart.', es: 'Los Pirineos, entre España y Francia, también son una. Las montañas separaban a la gente.', fa: 'کوه‌های پیرنه، میان اسپانیا و فرانسه، هم یکی است. کوه‌ها مردم را از هم جدا نگه داشتند.' },
        { en: 'So customs and languages changed at mountains. The North European Plain is flat and easy.', es: 'Por eso las costumbres y los idiomas cambiaban en las montañas. La llanura del norte de Europa es plana y fácil.', fa: 'پس رسم‌ها و زبان‌ها کنار کوه‌ها تغییر می‌کردند. دشت شمال اروپا هموار و آسان است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How did the Alps change life for the people on each side?', es: '¿Cómo cambiaron los Alpes la vida de la gente de cada lado?', fa: 'کوه‌های الپ زندگی مردم هر دو طرف را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They kept people apart, so customs differ', es: 'Separaban a la gente, y las costumbres cambian', fa: 'مردم را جدا کردند، پس رسم‌ها فرق دارند' },
            why: { en: 'People on each side traded less and met less, so each side kept its own ways.', es: 'La gente de cada lado comerciaba y se veía menos, así que cada lado guardó sus costumbres.', fa: 'مردم هر طرف کمتر تجارت می‌کردند و کمتر یکدیگر را می‌دیدند، پس هر طرف رسم خودش را نگه داشت.' } },
          { t: { en: 'They made everyone speak the same language', es: 'Hicieron que todos hablaran el mismo idioma', fa: 'باعث شدند همه به یک زبان گپ بزنند' },
            why: { en: 'A barrier keeps people apart. That makes more differences, not fewer.', es: 'Una barrera separa a la gente. Eso crea más diferencias, no menos.', fa: 'مانع مردم را جدا می‌کند. این تفاوت بیشتر می‌سازد، نه کمتر.' } },
          { t: { en: 'They made trade across them fast and cheap', es: 'Hicieron el comercio rápido y barato', fa: 'تجارت از روی آن‌ها را تیز و ارزان کردند' },
            why: { en: 'Narrow passes and winter snow made crossing slow and costly.', es: 'Los pasos angostos y la nieve del invierno hacían el cruce lento y caro.', fa: 'راه‌های باریک و برف زمستان گذشتن را کند و گران می‌کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 5, y: 13, text: { en: 'PENINSULA POINT · Far south, the [[strait|Strait]] of Gibraltar joins the Atlantic and Mediterranean. Spain and Morocco: 8 miles apart.', es: 'PUNTA DE LA PENÍNSULA · Muy al sur, el [[strait|estrecho]] de Gibraltar une el Atlántico y el Mediterráneo. España y Marruecos: a 8 millas.', fa: 'نوک شبه‌جزیره · دور در جنوب، [[strait|تنگهٔ]] جبل‌الطارق اطلس و مدیترانه را وصل می‌کند. اسپانیا و مراکش: ۸ میل فاصله.' } },
    { x: 13, y: 17, text: { en: 'ALPINE PASS · Closed by snow in winter. Long ago, traders waited for summer to cross the mountains.',
      es: 'PASO ALPINO · Cerrado por la nieve en invierno. Hace mucho tiempo, los comerciantes esperaban el verano para cruzar las montañas.',
      fa: 'درّهٔ الپ · در زمستان با برف بسته است. خیلی وقت پیش، تاجران تا تابستان صبر می‌کردند تا از کوه‌ها بگذرند.' } }
  ],

  /* the quest: Pilot Daan (gold !) -> Inês the fisher on the peninsula -> follow the Ink Thief's riddles to the Rhine's mouth, the flat plain and the peninsula, then catch it -> back to Daan */
  quest: {
    stat: 'mov',
    title: { en: 'The Stolen Sea Chart', es: 'La carta náutica robada', fa: 'نقشهٔ بحری دزدی‌شده' },
    giver: {
      x: 28, y: 7,
      name: { en: 'Pilot Daan', es: 'Piloto Daan', fa: 'رهنما دان' },
      role: { en: 'Harbor pilot', es: 'Piloto del puerto', fa: 'رهنمای کشتی‌ها در بندر' },
      look: { skin: 4, hair: '#1b1410', shirt: '#e0782b', pants: '#22324f', hat: '#1f2a44' },
      lines: [
        { en: 'Help! An Ink Thief grabbed my sea chart and ran away.', es: '¡Ayuda! Un Ladrón de Tinta agarró mi carta náutica y se escapó.', fa: 'کمک! یک دزد رنگ نقشهٔ بحری مرا گرفت و فرار کرد.' },
        { en: 'The chart shows ships the deep, [[navigable|navigable]] water up the river.', es: 'La carta les muestra a los barcos el agua honda y [[navigable|navegable]] del río.', fa: 'این نقشه آب عمیق و [[navigable|قابل کشتیرانی]] دریا را به کشتی‌ها نشان می‌دهد.' },
        { en: 'Inês the fisher saw which way it ran.', es: 'Inês, la pescadora, vio por dónde se fue.', fa: 'اینس، ماهی‌گیر، دید که به کدام طرف رفت.' },
        { en: 'She mends nets on the peninsula, south-west of here. Will you ask her?', es: 'Ella arregla redes en la península, al suroeste de aquí. ¿Le preguntas?', fa: 'او در شبه‌جزیره، جنوب غربِ اینجا، تور ترمیم می‌کند. از او می‌پرسی؟' }
      ],
      wait: { en: 'Inês is on the [[peninsula|peninsula]], south-west of here. That land has water on three sides.',
        es: 'Inês está en la [[peninsula|península]], al suroeste de aquí. Esa tierra tiene agua por tres lados.',
        fa: 'اینس در [[peninsula|شبه‌جزیره]]، جنوب غربِ اینجا است. آن خشکه از سه طرف آب دارد.' },
      thanks: { en: 'My chart! Big ships find deep water again. Barges reach the middle of Europe. Thanks!', es: '¡Mi carta! Los barcos grandes encuentran el agua honda. Las barcazas llegan al centro de Europa. ¡Gracias!', fa: 'نقشهٔ من! کشتی‌های بزرگ دوباره آب عمیق را پیدا می‌کنند. کشتی‌های باری به وسط اروپا می‌رسند. تشکر!' }
    },
    contact: {
      x: 8, y: 12,
      name: { en: 'Inês', es: 'Inês', fa: 'اینس' },
      role: { en: 'Fisher', es: 'Pescadora', fa: 'ماهی‌گیر' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#2a7fb8', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Yes, I saw it! A little thief with ink all over its hands.', es: '¡Sí, lo vi! Un ladroncito con las manos llenas de tinta.', fa: 'بله، دیدمش! یک دزد کوچک که دست‌هایش پر از رنگ بود.' },
        { en: 'It ran east, past the port, toward the river.', es: 'Corrió al este, pasó el puerto y fue hacia el río.', fa: 'به طرف شرق دوید، از بندر گذشت و به طرف دریا رفت.' },
        { en: 'It tore the chart into 3 pieces, each by a different land or water.', es: 'Rompió la carta en 3 pedazos, cada uno junto a una tierra o agua distinta.', fa: 'نقشه را سه تکه کرد، هر تکه کنار یک نوع دیگر خشکه یا آب.' },
        { en: 'Follow its riddles to the right places. Then catch the thief!', es: 'Sigue sus acertijos a los lugares correctos. ¡Después atrapa al ladrón!', fa: 'چیستان‌هایش را تا جاهای درست دنبال کن. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [13, 11],
      hops: [[6, 11], [12, 15]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! The sea chart is in 3 pieces around the coast. Follow my riddles about Europe!', es: '¡Ji ji! La carta náutica está en 3 pedazos por la costa. ¡Sigue mis acertijos sobre Europa!', fa: 'هی هی! نقشهٔ بحری سه تکه در ساحل است. چیستان‌هایم را دربارهٔ اروپا دنبال کن!' },
      clues: [
        { t: { en: 'Piece 1 is where the Rhine ends. It flows north from the Alps to the sea.', es: 'El pedazo 1 está donde termina el Rin. Corre al norte, desde los Alpes hasta el mar.', fa: 'تکهٔ ۱ جایی است که راین تمام می‌شود. از الپ به طرف شمال تا بحر می‌رود.' },
          zones: [{ x: 17, y: 3, w: 12, h: 3 }],
          noBy: [{ x: 17, y: 17, w: 11, h: 2, t: { en: 'This is where the Rhine starts, at the ice in the Alps. It flows north, away from here. Follow it to its end at the sea.', es: 'Aquí nace el Rin, en el hielo de los Alpes. Corre hacia el norte, lejos de aquí. Síguelo hasta donde termina, en el mar.', fa: 'راین از این جا، از یخ کوه‌های الپ، شروع می‌شود. به طرف شمال، دور از این جا می‌رود. آن را تا آخرش در بحر دنبال کن.' } }],
          found: { en: 'Piece 1, at the mouth of the Rhine! Barges carry goods upriver from this port.', es: '¡El pedazo 1, en la desembocadura del Rin! Las barcazas llevan mercancías río arriba desde este puerto.', fa: 'تکهٔ ۱، در دهانهٔ راین! کشتی‌های باری از این بندر مال را بالای دریا می‌برند.' } },
        { t: { en: 'Piece 2 is on the flat plain north of the Alps. Flat land is easy to farm: wheat!', es: 'El pedazo 2 está en la llanura al norte de los Alpes. La tierra plana es fácil de cultivar: ¡trigo!', fa: 'تکهٔ ۲ در دشت هموار شمال الپ است. کشت در زمین هموار آسان است: گندم!' },
          zones: [{ x: 17, y: 15, w: 5, h: 2 }, { x: 24, y: 15, w: 7, h: 2 }],
          noBy: [{ x: 10, y: 17, w: 22, h: 4, t: { en: 'These are the Alps: high, steep and snowy. They are hard to farm and hard to cross. A plain is low and flat.', es: 'Estos son los Alpes: altos, empinados y con nieve. Es difícil cultivarlos y cruzarlos. Una llanura es baja y plana.', fa: 'این‌ها کوه‌های الپ هستند: بلند، سراشیب و برفی. کشت در آن‌ها و گذشتن از آن‌ها سخت است. دشت پست و هموار است.' } }],
          found: { en: 'Piece 2! The North European Plain is flat. Farms, roads and cities spread across it.', es: '¡El pedazo 2! La llanura del norte de Europa es plana. Granjas, carreteras y ciudades la cubren.', fa: 'تکهٔ ۲! دشت شمال اروپا هموار است. کشتزارها، سرک‌ها و شهرها در آن پخش شده‌اند.' } },
        { t: { en: 'Piece 3 is on a [[peninsula|peninsula]], like Spain. At its tip, a narrow [[strait|strait]] joins two seas.', es: 'El pedazo 3 está en una [[peninsula|península]], como España. En su punta, un [[strait|estrecho]] une dos mares.', fa: 'تکهٔ ۳ در یک [[peninsula|شبه‌جزیره]] است، مثل اسپانیا. در نوک آن، یک [[strait|تنگهٔ]] باریک دو بحر را وصل می‌کند.' },
          zones: [{ x: 3, y: 11, w: 7, h: 4 }],
          noBy: [{ x: 5, y: 3, w: 12, h: 4, t: { en: 'The port town has the sea on only one side, the north. A peninsula has water on three sides.', es: 'El pueblo del puerto tiene el mar de un solo lado, el norte. Una península tiene agua por tres lados.', fa: 'شهرک بندر فقط از یک طرف، شمال، بحر دارد. شبه‌جزیره از سه طرف آب دارد.' } },
            { x: 11, y: 8, w: 5, h: 6, t: { en: 'There is no sea next to this land. A peninsula sticks out into the sea. Keep going west.', es: 'No hay mar junto a esta tierra. Una península se mete en el mar. Sigue hacia el oeste.', fa: 'کنار این زمین بحر نیست. شبه‌جزیره در داخل بحر پیش می‌رود. به طرف غرب برو.' } }],
          found: { en: 'Piece 3! Europe has many peninsulas, so almost nowhere is far from the sea.', es: '¡El pedazo 3! Europa tiene muchas penínsulas, así que casi ningún lugar está lejos del mar.', fa: 'تکهٔ ۳! اروپا شبه‌جزیره‌های زیادی دارد، پس تقریباً هیچ جا از بحر دور نیست.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs off. The sea chart is whole again.', es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye. La carta náutica está completa otra vez.', fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و فرار می‌کند. نقشهٔ بحری دوباره کامل است.' },
      item: { icon: '🗺️', name: { en: "Daan's sea chart", es: 'La carta náutica de Daan', fa: 'نقشهٔ بحری دان' } }
    }
  },

  scraps: [[3, 7], [30, 17], [15, 20]],
  smudges: [[13, 15], [19, 8]],

  challenge: {
    at: [12, 8],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per city in the table: London by the western sea, Calgary far inland by the mountains, Moscow in the east
    spots: [[4, 7], [15, 16], [29, 12]],
    stat: 'pla',
    title: { en: 'Same latitude, different winter', es: 'Misma latitud, otro invierno', fa: 'عرض یکسان، زمستان متفاوت' },
    intro: { en: 'The Grump froze the weather charts! Read the table. London and Calgary are the same distance from the equator. Why are their winters so different?',
      es: '¡El Gruñón congeló los mapas del tiempo! Lee la tabla. Londres y Calgary están a la misma distancia del ecuador. ¿Por qué sus inviernos son tan diferentes?',
      fa: 'غرغرو نقشه‌های هوا را یخ زد! جدول را بخوان. لندن و کلگری به یک اندازه از خط استوا دور هستند. چرا زمستان‌شان این‌قدر فرق دارد؟' },
    table: {
      head: [
        { en: 'City', es: 'Ciudad', fa: 'شهر' },
        { en: 'Where it is', es: 'Dónde está', fa: 'کجاست' },
        { en: 'Latitude', es: 'Latitud', fa: 'عرض جغرافیایی' },
        { en: 'Average January temperature', es: 'Temperatura promedio en enero', fa: 'اوسط گرمی هوا در جنوری' }
      ],
      rows: [
        [{ en: 'London, UK', es: 'Londres, Reino Unido', fa: 'لندن، بریتانیا' }, { en: 'western Europe, near the Atlantic', es: 'oeste de Europa, cerca del Atlántico', fa: 'غرب اروپا، نزدیک اقیانوس اطلس' }, { en: '51°N', es: '51°N', fa: '۵۱ درجه شمالی' }, { en: 'about 5 °C (41 °F)', es: 'unos 5 °C (41 °F)', fa: 'حدود ۵ درجهٔ سانتی‌گراد' }],
        [{ en: 'Calgary, Canada', es: 'Calgary, Canadá', fa: 'کلگری، کانادا' }, { en: 'inside North America, far from the ocean', es: 'en el interior de América del Norte, lejos del océano', fa: 'داخل امریکای شمالی، دور از اقیانوس' }, { en: '51°N', es: '51°N', fa: '۵۱ درجه شمالی' }, { en: 'about −7 °C (19 °F)', es: 'unos −7 °C (19 °F)', fa: 'حدود منفی ۷ درجهٔ سانتی‌گراد' }],
        [{ en: 'Moscow, Russia', es: 'Moscú, Rusia', fa: 'مسکو، روسیه' }, { en: 'eastern Europe, far inland', es: 'este de Europa, muy lejos del mar', fa: 'شرق اروپا، خیلی دور از بحر' }, { en: '56°N', es: '56°N', fa: '۵۶ درجه شمالی' }, { en: 'about −6 °C (21 °F)', es: 'unos −6 °C (21 °F)', fa: 'حدود منفی ۶ درجهٔ سانتی‌گراد' }]
      ],
      note: { en: 'Rounded averages. A bigger latitude number means farther north.', es: 'Promedios redondeados. Un número de latitud más grande significa más al norte.', fa: 'اوسط‌ها گرد شده‌اند. عدد بزرگ‌تر عرض جغرافیایی یعنی شمال‌تر.' }
    },
    questions: [
      { q: { en: 'London and Calgary are at the same latitude. Which one is warmer in January?', es: 'Londres y Calgary están en la misma latitud. ¿Cuál es más cálida en enero?', fa: 'لندن و کلگری در یک عرض جغرافیایی هستند. کدام یک در جنوری گرم‌تر است؟' },
        choices: [{ en: 'London, by about 12 °C', es: 'Londres, por unos 12 °C', fa: 'لندن، حدود ۱۲ درجه' }, { en: 'Calgary, by about 12 °C', es: 'Calgary, por unos 12 °C', fa: 'کلگری، حدود ۱۲ درجه' }, { en: 'They are the same', es: 'Son iguales', fa: 'هر دو یکسان هستند' }], answer: 0,
        why: { en: 'London is about 5 °C. Calgary is about −7 °C. That is a difference of about 12 degrees.', es: 'Londres tiene unos 5 °C. Calgary tiene unos −7 °C. La diferencia es de unos 12 grados.', fa: 'لندن حدود ۵ درجه است. کلگری حدود منفی ۷ درجه است. فرق حدود ۱۲ درجه است.' } },
      { q: { en: 'What keeps London mild in winter?', es: '¿Qué hace que Londres sea templada en invierno?', fa: 'چه چیز لندن را در زمستان معتدل نگه می‌دارد؟' },
        choices: [{ en: 'The warm North Atlantic Drift and winds from the ocean', es: 'La cálida Deriva del Atlántico Norte y los vientos del océano', fa: 'جریان گرم اطلس شمالی و بادهای اقیانوس' }, { en: 'London is closer to the equator', es: 'Londres está más cerca del ecuador', fa: 'لندن به خط استوا نزدیک‌تر است' }, { en: 'Tall mountains block the cold', es: 'Montañas altas detienen el frío', fa: 'کوه‌های بلند جلوی سرما را می‌گیرند' }], answer: 0,
        why: { en: 'Both cities are at 51°N, so latitude is not the reason. The warm current and ocean winds are.', es: 'Las dos ciudades están a 51°N, así que la latitud no es la razón. La corriente cálida y los vientos del océano sí.', fa: 'هر دو شهر در ۵۱ درجه شمالی هستند، پس عرض جغرافیایی دلیل نیست. جریان گرم و بادهای اقیانوس دلیل هستند.' } },
      { q: { en: 'Moscow is in Europe too, but its January is cold like Calgary\'s. Why?', es: 'Moscú también está en Europa, pero su enero es frío como el de Calgary. ¿Por qué?', fa: 'مسکو هم در اروپا است، اما جنوری آن مثل کلگری سرد است. چرا؟' },
        choices: [{ en: 'It is far inland, away from the mild ocean air', es: 'Está muy lejos del mar, lejos del aire templado del océano', fa: 'خیلی دور از بحر است، دور از هوای معتدل اقیانوس' }, { en: 'It is right next to the Atlantic', es: 'Está justo al lado del Atlántico', fa: 'درست کنار اقیانوس اطلس است' }, { en: 'It is on the equator', es: 'Está en el ecuador', fa: 'روی خط استوا است' }], answer: 0,
        why: { en: 'The mild air from the Atlantic grows weaker the farther inland you go.', es: 'El aire templado del Atlántico se debilita mientras más lejos del mar vas.', fa: 'هوای معتدل اطلس هر چه از بحر دورتر بروی ضعیف‌تر می‌شود.' } },
      { q: { en: 'Norway\'s harbors stay open all winter, but parts of the Baltic Sea freeze. What best explains this?', es: 'Los puertos de Noruega siguen abiertos todo el invierno, pero partes del mar Báltico se congelan. ¿Qué lo explica mejor?', fa: 'بندرهای ناروی تمام زمستان باز می‌مانند، اما بخش‌هایی از بحیرهٔ بالتیک یخ می‌زند. چه چیز این را بهتر توضیح می‌دهد؟' },
        choices: [{ en: 'The warm current reaches Norway\'s Atlantic coast', es: 'La corriente cálida llega a la costa atlántica de Noruega', fa: 'جریان گرم به ساحل اطلس ناروی می‌رسد' }, { en: 'Norway is near the equator', es: 'Noruega está cerca del ecuador', fa: 'ناروی نزدیک خط استوا است' }, { en: 'The Baltic Sea is much deeper', es: 'El mar Báltico es mucho más profundo', fa: 'بحیرهٔ بالتیک خیلی عمیق‌تر است' }], answer: 0,
        why: { en: 'The North Atlantic Drift carries mild water up Norway\'s coast. It does not reach far into the Baltic.', es: 'La Deriva del Atlántico Norte lleva agua templada por la costa de Noruega. No entra mucho en el Báltico.', fa: 'جریان گرم اطلس شمالی آب معتدل را در امتداد ساحل ناروی می‌برد. زیاد به بالتیک نمی‌رسد.' } }
    ],
    success: { en: 'The weather charts thaw! The ocean keeps western Europe mild.', es: '¡Los mapas del tiempo se descongelan! El océano hace templado el oeste de Europa.', fa: 'نقشه‌های هوا آب شدند! اقیانوس غرب اروپا را معتدل نگه می‌دارد.' }
  },

  boss: {
    at: [14, 18],
    stat: 'reg',
    need: 3,
    name: { en: 'The Frost Grump', es: 'El Gruñón de Escarcha', fa: 'غرغروی یخبندان' },
    appear: { en: 'The Frost Grump is hiding in the snowy Alpine pass!', es: '¡El Gruñón de Escarcha se esconde en el paso nevado de los Alpes!', fa: 'غرغروی یخبندان در درّهٔ برفی الپ پنهان است!' },
    taunt: { en: 'Brrr! I froze every map of Europe. Can you still tell sea from mountain?', es: '¡Brrr! Congelé todos los mapas de Europa. ¿Todavía distingues el mar de la montaña?', fa: 'بررر! همهٔ نقشه‌های اروپا را یخ زدم. هنوز بحر را از کوه فرق می‌کنی؟' },
    win: { en: 'The frost melts away. Atlas page 3.1 floats down into your hands!', es: 'La escarcha se derrite. ¡La página 3.1 del atlas cae en tus manos!', fa: 'یخبندان آب می‌شود. صفحهٔ ۳.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Italy, Spain, Greece and Norway all sit on which landform?', es: 'Italia, España, Grecia y Noruega están en ¿qué forma de relieve?', fa: 'ایتالیا، اسپانیا، یونان و ناروی روی کدام شکل زمین هستند؟' },
        choices: [{ en: 'A peninsula', es: 'Una península', fa: 'شبه‌جزیره' }, { en: 'An island', es: 'Una isla', fa: 'جزیره' }, { en: 'A river delta', es: 'Un delta de río', fa: 'دلتای دریا' }, { en: 'A mountain range', es: 'Una cordillera', fa: 'سلسله‌کوه' }], answer: 0,
        why: { en: 'Each one is land with water on most of its sides.', es: 'Cada una es tierra con agua en casi todos sus lados.', fa: 'هر کدام خشکه‌ای است که بیشتر طرف‌هایش آب است.' } },
      { q: { en: 'Why is almost nowhere in Europe far from the sea?', es: '¿Por qué casi ningún lugar de Europa está lejos del mar?', fa: 'چرا تقریباً هیچ جای اروپا از بحر دور نیست؟' },
        choices: [{ en: 'Its coast is long, with many peninsulas', es: 'Su costa es larga, con muchas penínsulas', fa: 'ساحلش دراز است و شبه‌جزیره زیاد دارد' }, { en: 'Every country in Europe is an island', es: 'Todos los países de Europa son islas', fa: 'همهٔ کشورهای اروپا جزیره هستند' }, { en: 'Europe is the biggest continent of all', es: 'Europa es el continente más grande de todos', fa: 'اروپا از همه بزرگ‌ترین قاره است' }, { en: 'Europe has no mountains', es: 'Europa no tiene montañas', fa: 'اروپا کوه ندارد' }], answer: 0,
        why: { en: 'A long, broken coastline brings the sea close to most places.', es: 'Una costa larga y quebrada acerca el mar a casi todos los lugares.', fa: 'ساحل دراز و پرپیچ بحر را به بیشتر جاها نزدیک می‌کند.' } },
      { q: { en: 'Which mountains stand between Spain and France?', es: '¿Qué montañas están entre España y Francia?', fa: 'کدام کوه‌ها میان اسپانیا و فرانسه هستند؟' },
        choices: [{ en: 'The Pyrenees', es: 'Los Pirineos', fa: 'کوه‌های پیرنه' }, { en: 'The Alps', es: 'Los Alpes', fa: 'کوه‌های الپ' }, { en: 'The Carpathians', es: 'Los Cárpatos', fa: 'کوه‌های کارپات' }, { en: 'The Apennines', es: 'Los Apeninos', fa: 'کوه‌های آپنین' }], answer: 0,
        why: { en: 'The Pyrenees stand on the border between Spain and France.', es: 'Los Pirineos están en la frontera entre España y Francia.', fa: 'کوه‌های پیرنه در سرحد میان اسپانیا و فرانسه هستند.' } },
      { q: { en: 'The Alps were slow and dangerous to cross for hundreds of years. That makes them a...', es: 'Los Alpes fueron lentos y peligrosos de cruzar por cientos de años. Eso los hace una...', fa: 'گذشتن از کوه‌های الپ صدها سال کند و خطرناک بود. پس الپ یک ... است.' },
        choices: [{ en: 'natural barrier', es: 'barrera natural', fa: 'مانع طبیعی' }, { en: 'navigable river', es: 'río navegable', fa: 'دریای قابل کشتیرانی' }, { en: 'warm current', es: 'corriente cálida', fa: 'جریان گرم' }, { en: 'capital city', es: 'ciudad capital', fa: 'پایتخت' }], answer: 0,
        why: { en: 'A natural barrier is a landform that makes travel hard.', es: 'Una barrera natural es una forma de relieve que hace difícil viajar.', fa: 'مانع طبیعی شکلی از زمین است که سفر را سخت می‌کند.' } },
      { q: { en: 'Where does the Danube River end?', es: '¿Dónde termina el río Danubio?', fa: 'دریای دانوب کجا تمام می‌شود؟' },
        choices: [{ en: 'In the Black Sea', es: 'En el mar Negro', fa: 'در بحیرهٔ سیاه' }, { en: 'In the North Sea', es: 'En el mar del Norte', fa: 'در بحر شمال' }, { en: 'In the Atlantic Ocean', es: 'En el océano Atlántico', fa: 'در اقیانوس اطلس' }, { en: 'In the Mediterranean Sea', es: 'En el mar Mediterráneo', fa: 'در بحیرهٔ مدیترانه' }], answer: 0,
        why: { en: 'The Danube flows east through about ten countries to the Black Sea.', es: 'El Danubio corre al este por unos diez países hasta el mar Negro.', fa: 'دانوب از حدود ده کشور به طرف شرق تا بحیرهٔ سیاه می‌رود.' } },
      { q: { en: 'Rotterdam is one of Europe\'s busiest ports. Why is it in that spot?', es: 'Róterdam es uno de los puertos más activos de Europa. ¿Por qué está en ese lugar?', fa: 'روتردام یکی از پرکارترین بندرهای اروپا است. چرا در آن جا است؟' },
        choices: [{ en: 'It sits where the Rhine meets the sea', es: 'Está donde el Rin llega al mar', fa: 'جایی است که راین به بحر می‌رسد' }, { en: 'It sits on the shore of the Black Sea', es: 'Está en la orilla del mar Negro', fa: 'در ساحل بحیرهٔ سیاه است' }, { en: 'It sits high up in the snowy Alps', es: 'Está en lo alto de los Alpes nevados', fa: 'بالای کوه‌های برفی الپ است' }, { en: 'It sits on the banks of the Danube', es: 'Está en las orillas del Danubio', fa: 'در کنار دریای دانوب است' }], answer: 0,
        why: { en: 'Cargo comes down the Rhine by barge and leaves by ship for the world.', es: 'La carga baja por el Rin en barcazas y sale en barcos hacia el mundo.', fa: 'بار با کشتی‌های باری از راین پایین می‌آید و با کشتی‌های بزرگ به دنیا می‌رود.' } },
      { q: { en: 'What keeps the winters of western Europe mild?', es: '¿Qué hace templados los inviernos del oeste de Europa?', fa: 'چه چیز زمستان‌های غرب اروپا را معتدل نگه می‌دارد؟' },
        choices: [{ en: 'A warm ocean current from the Atlantic', es: 'Una corriente marina cálida del Atlántico', fa: 'یک جریان گرم بحری از اطلس' }, { en: 'The Alps, which trap warm air over Europe', es: 'Los Alpes, que atrapan aire cálido sobre Europa', fa: 'کوه‌های الپ که هوای گرم را روی اروپا نگه می‌دارند' }, { en: 'Being much closer to the equator', es: 'Estar mucho más cerca del ecuador', fa: 'خیلی نزدیک‌تر بودن به خط استوا' }, { en: 'Ice from the North Pole', es: 'El hielo del Polo Norte', fa: 'یخ قطب شمال' }], answer: 0,
        why: { en: 'The warm current and ocean winds bring mild air to western Europe.', es: 'La corriente cálida y los vientos del océano traen aire templado al oeste de Europa.', fa: 'جریان گرم و بادهای اقیانوس هوای معتدل را به غرب اروپا می‌آورند.' } },
      { q: { en: 'What carved the deep fjords along Norway\'s coast?', es: '¿Qué talló los fiordos profundos de la costa de Noruega?', fa: 'چه چیز فیوردهای عمیق ساحل ناروی را کند؟' },
        choices: [{ en: 'Glaciers', es: 'Los glaciares', fa: 'یخچال‌ها' }, { en: 'Volcanoes', es: 'Los volcanes', fa: 'آتشفشان‌ها' }, { en: 'Ships', es: 'Los barcos', fa: 'کشتی‌ها' }, { en: 'Wind from the desert', es: 'El viento del desierto', fa: 'باد صحرا' }], answer: 0,
        why: { en: 'Thick glaciers cut the fjords long ago. The coast still shows the shape.', es: 'Glaciares gruesos tallaron los fiordos hace mucho. La costa todavía muestra la forma.', fa: 'یخچال‌های ضخیم فیوردها را خیلی وقت پیش کندند. ساحل هنوز آن شکل را نشان می‌دهد.' } }
    ]
  },

  learned: [
    { en: 'Europe is full of [[peninsula|peninsulas]], so almost nowhere is far from the sea. Glaciers carved Norway\'s [[fjord|fjords]].', es: 'Europa está llena de [[peninsula|penínsulas]], así que casi ningún lugar está lejos del mar. Los glaciares tallaron los [[fjord|fiordos]] de Noruega.', fa: 'اروپا پر از [[peninsula|شبه‌جزیره]] است، پس تقریباً هیچ جا از بحر دور نیست. یخچال‌ها [[fjord|فیوردهای]] ناروی را کندند.' },
    { en: '[[navigable|Navigable]] rivers like the Rhine and the Danube are roads of water. The Alps and the Pyrenees are [[natural barrier|natural barriers]].', es: 'Los ríos [[navigable|navegables]] como el Rin y el Danubio son caminos de agua. Los Alpes y los Pirineos son [[natural barrier|barreras naturales]].', fa: 'دریاهای [[navigable|قابل کشتیرانی]] مثل راین و دانوب سرک‌های آبی هستند. الپ و پیرنه [[natural barrier|مانع طبیعی]] هستند.' },
    { en: 'The warm [[north atlantic drift|North Atlantic Drift]] keeps western Europe\'s winters much milder than places at the same latitude in North America.', es: 'La cálida [[north atlantic drift|Deriva del Atlántico Norte]] hace los inviernos del oeste de Europa mucho más templados que en lugares de la misma latitud en América del Norte.', fa: '[[north atlantic drift|جریان گرم اطلس شمالی]] زمستان‌های غرب اروپا را خیلی معتدل‌تر از جاهای هم‌عرض در امریکای شمالی نگه می‌دارد.' }
  ],
  reflect: {
    q: { en: 'Think about a river, a highway or a hill near where you live. Does it bring people together, or keep them apart? How?', es: 'Piensa en un río, una carretera o una colina cerca de donde vives. ¿Une a la gente o la separa? ¿Cómo?', fa: 'به یک دریا، شاهراه یا تپه نزدیک جایی که زندگی می‌کنی فکر کن. آیا مردم را به هم نزدیک می‌کند یا جدا نگه می‌دارد؟ چطور؟' },
    starter: { en: 'Near where I live, the', es: 'Cerca de donde vivo, el', fa: 'نزدیک جایی که زندگی می‌کنم،' }
  }
};
