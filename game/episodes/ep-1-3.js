/* WORLDWALKER · Episode 1.3 · Resources & Work (WG.2 / WG.3)
   Natural, human and capital resources; resources are spread unevenly, so places trade; land use.
   NW: timber woods with a woodcutter's cabin. NE: mountains with a mine (rail track runs into the tunnel).
   SW: farm fields, a pond and a well. SE: the workshop town: factory, bakery and market. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'WG.2',
  title: { en: 'Resources & Work', es: 'Recursos y trabajo', fa: 'منابع و کار' },
  place: { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
  intro: [
    { en: 'The Grump mixed up everything people use to make things! The bakery has no flour.', es: '¡El Gruñón revolvió todo lo que la gente usa para hacer cosas! La panadería no tiene harina.', fa: 'غرغرو همهٔ چیزهایی را که مردم برای ساختن به کار می‌برند به هم زد! نانوایی آرد ندارد.' },
    { en: 'Talk to the miner, the baker and the farmer. Then fix the compass stone.', es: 'Habla con el minero, la panadera y la agricultora. Luego arregla la piedra de la brújula.', fa: 'با معدنچی، نانوا و دهقان گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [26.0, -10.7],
    start: [
      { en: 'Natural resources are not spread evenly. Let\'s fly to the Congo, in Africa.',
        es: 'Los recursos naturales no están repartidos por igual. Volemos al Congo, en África.',
        fa: 'منابع طبیعی یکسان پخش نیستند. بیا به کانگو در افریقا پرواز کنیم.' },
      { en: 'The Congo mines about 70 percent of the world\'s cobalt.',
        es: 'El Congo saca cerca del 70 por ciento del cobalto del mundo.',
        fa: 'کانگو نزدیک ۷۰ فیصد کوبالت جهان را استخراج می‌کند.' },
      { en: 'Cobalt goes into phone and car batteries all over the world.',
        es: 'El cobalto va en baterías de teléfonos y carros en todo el mundo.',
        fa: 'کوبالت در بتری موبایل‌ها و موترهای سراسر جهان به کار می‌رود.' }
    ],
    page: { en: 'Saudi Arabia has some of the biggest oil reserves on Earth.',
      es: 'Arabia Saudita tiene algunas de las reservas de petróleo más grandes del mundo.',
      fa: 'عربستان سعودی یکی از بزرگ‌ترین ذخیره‌های تیل جهان را دارد.' },
    guess: {
      q: { en: 'Phone batteries use cobalt. Where does cobalt come from?', es: 'Las baterías de celular usan cobalto. ¿De dónde viene el cobalto?', fa: 'بتری‌های موبایل کوبالت دارند. کوبالت از کجا می‌آید؟' },
      choices: [
        { t: { en: '⛏️ From a mine', es: '⛏️ De una mina', fa: '⛏️ از معدن' }, ok: true },
        { t: { en: '🌳 From a tree', es: '🌳 De un árbol', fa: '🌳 از درخت' } }
      ],
      why: { en: 'Cobalt is a natural resource dug from mines, and most of it comes from the Congo.', es: 'El cobalto es un recurso natural que sale de minas, y la mayor parte viene del Congo.', fa: 'کوبالت یک منبع طبیعی است که از معدن کنده می‌شود و بیشترش از کانگو می‌آید.' }
    },
    next: {
      q: { en: 'Next: big cities! Where do many big cities grow?', es: '¡Ahora: grandes ciudades! ¿Dónde crecen muchas ciudades grandes?', fa: 'بعدی: شهرهای بزرگ! بسیاری از شهرهای بزرگ کجا رشد می‌کنند؟' },
      choices: [
        { t: { en: '🏜️ Far from water', es: '🏜️ Lejos del agua', fa: '🏜️ دور از آب' } },
        { t: { en: '⛵ Near water', es: '⛵ Cerca del agua', fa: '⛵ نزدیک آب' }, ok: true }
      ],
      why: { en: 'Many big cities grew on lakes, rivers or harbors, because boats moved heavy goods cheaply.', es: 'Muchas ciudades grandes crecieron junto a lagos, ríos o puertos, porque los barcos llevaban carga barata.', fa: 'بسیاری از شهرهای بزرگ کنار جهیل، دریا یا بندر رشد کردند، چون کشتی‌ها بار سنگین را ارزان می‌بردند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [10, 3], name: { en: 'Grandpa Luis', es: 'Abuelo Luis', fa: 'پدرکلان لوییس' },
      look: { skin: 3, hair: '#e0ddd5', shirt: '#4f7a3a', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'Come in! I made every chair in this house from valley trees.', es: '¡Pasa! Hice cada silla de esta casa con árboles del valle.', fa: 'بیا داخل! هر چوکی این خانه را از درختان دره ساختم.' },
        { en: 'Trees are a natural resource. My hands and my saw do the rest.', es: 'Los árboles son un recurso natural. Mis manos y mi sierra hacen el resto.', fa: 'درخت یک منبع طبیعی است. دست‌هایم و اره‌ام باقی کار را می‌کنند.' }
      ] },
    { at: [27, 13], name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a8a99', pants: '#33404d', style: 'long' },
      lines: [
        { en: 'Hi! I just finished my shift at the factory. My feet are tired!', es: '¡Hola! Acabo de terminar mi turno en la fábrica. ¡Me duelen los pies!', fa: 'سلام! همین حالا نوبت کارم در فابریکه تمام شد. پاهایم خسته است!' },
        { en: 'Our bikes use steel from one place and rubber from another. No place has everything.', es: 'Nuestras bicicletas usan acero de un lugar y caucho de otro. Ningún lugar lo tiene todo.', fa: 'بایسکل‌های ما فولاد را از یک جا و رابر را از جای دیگر می‌گیرند. هیچ جا همه چیز ندارد.' }
      ] },
    { at: [25, 19], name: { en: 'Auntie Carmen', es: 'Tía Carmen', fa: 'خاله کارمن' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e07b39', pants: '#4a3a5a', style: 'long' },
      lines: [
        { en: 'Come in! Mind the boxes, tomorrow is market day.', es: '¡Pasa! Cuidado con las cajas, mañana es día de mercado.', fa: 'بیا داخل! مواظب جعبه‌ها باش، فردا روز بازار است.' },
        { en: 'Our valley grows apples. Bananas can\'t grow here, so we buy them from warm countries.', es: 'Nuestro valle da manzanas. Los bananos no crecen aquí, así que los compramos a países cálidos.', fa: 'درهٔ ما سیب می‌دهد. کیله اینجا نمی‌روید، پس آن را از کشورهای گرم می‌خریم.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Each corner shows a different kind of work. */
  map: [
    'TTTTTTTTTTTTTTTTMMMMMMMMMMMMMMMM',
    'TPPTPPTP..PTPPT.MMMMMMMM|MMMMMMM',
    'TPTPP..P.RRR.PT.KMMMMMMM|MMMMMKM',
    'TPP.P.T..hdh..P..KMMMrr.|.rrMMMM',
    'TP..x.....:...T...KK.r..|..rKMMM',
    'TPT...PT..:..P......,...f..r.KMM',
    'TP.P..P...:::::::::::::::.....KM',
    'TPPT.P...P:.T......r...:...T...M',
    'TPP..PT..::.......T....:....,..M',
    'TPTP..P..:.............:.......M',
    'TPPTP....:...,.........:.......M',
    'T..,.....:.............:.......T',
    'T.oo1o1o.:.wwww..XX....:..RRRR.T',
    'T.o2o2oo.:.wwww..XX....:..hdhh.T',
    'T.oo1o2o.:.wwww........:.......T',
    'T........::::::::::::::::::::..T',
    'T.~~~~..O.:......mmm.....x.mmm.T',
    'T.~~~~....:.oo1o...............T',
    'T..~~.....:.o2oo...,...QQQ...T.T',
    'T......RRR:.oooo.......hhd.....T',
    'T..,...hdh......T..............T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [10, 4],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): a sawmill (capital resource) made from the wood you chopped (natural resource), right by the trees */
  build: [
    { id: 'sawmill', kind: 'place', board: [6, 10], tile: 'h', ok: [[7, 8, 'R'], [8, 8, 'R'], [7, 9], [8, 9]], cost: { wood: 1 },
      name: { en: 'Sawmill by the woods', es: 'Aserradero junto al bosque', fa: 'کارخانهٔ چوب‌بری کنار جنگل' },
      ask: { en: 'The trees are a [[natural resource|natural resource]]. Use their wood to build a sawmill. A sawmill is a [[capital resource|capital resource]]: people make it to help cut logs into boards. Build it in the little clearing in the woods, just west of the dirt road: two roof pieces on top, two walls below.',
        es: 'Los árboles son un [[natural resource|recurso natural]]. Usa su madera para construir un aserradero. Un aserradero es un [[capital resource|recurso de capital]]: la gente lo hace para ayudar a cortar troncos en tablas. Constrúyelo en el pequeño claro del bosque, justo al oeste del camino de tierra: dos piezas de techo arriba y dos paredes abajo.',
        fa: 'درختان یک [[natural resource|منبع طبیعی]] هستند. با چوب آن‌ها یک کارخانهٔ چوب‌بری بساز. کارخانهٔ چوب‌بری یک [[capital resource|منبع سرمایه‌ای]] است: مردم آن را می‌سازند تا در بریدن کنده‌ها به تخته کمک کند. آن را در جای خالی کوچک جنگل، درست غرب راه خاکی بساز: دو تکهٔ بام در بالا، دو دیوار در پایین.' },
      why: { en: 'Right by the trees! The heavy logs only go a few steps to the saw.', es: '¡Justo al lado de los árboles! Los troncos pesados solo viajan unos pasos hasta la sierra.', fa: 'درست کنار درختان! کنده‌های سنگین فقط چند قدم تا اره می‌روند.' },
      wrong: { en: 'Not here. Build the sawmill in the clearing in the woods, just west of the dirt road. A sawmill goes near the trees, so the heavy logs do not travel far.',
        es: 'Aquí no. Construye el aserradero en el claro del bosque, justo al oeste del camino de tierra. Un aserradero va cerca de los árboles, para que los troncos pesados no viajen lejos.',
        fa: 'این جا نه. کارخانهٔ چوب‌بری را در جای خالی جنگل، درست غرب راه خاکی بساز. کارخانهٔ چوب‌بری نزدیک درختان ساخته می‌شود تا کنده‌های سنگین راه دور نروند.' },
      wrongBy: [
        { x: 1, y: 12, w: 8, h: 9, t: { en: 'This is farm land for food, far from the trees. The heavy logs would travel a long way.', es: 'Esta es tierra de cultivo para comida, lejos de los árboles. Los troncos pesados viajarían muy lejos.', fa: 'این زمین زراعتی برای خوراک است و از درختان دور است. کنده‌های سنگین راه درازی می‌رفتند.' } },
        { x: 16, y: 1, w: 15, h: 10, t: { en: 'These mountains have iron, not trees. This land is used for the mine.', es: 'Estas montañas tienen hierro, no árboles. Esta tierra se usa para la mina.', fa: 'این کوه‌ها آهن دارند، نه درخت. این زمین برای معدن به کار می‌رود.' } },
        { x: 16, y: 11, w: 15, h: 10, t: { en: 'The town is far from the woods. Carrying every log here would take a lot of work.', es: 'El pueblo está lejos del bosque. Traer cada tronco hasta aquí costaría mucho trabajo.', fa: 'شهرک از جنگل دور است. آوردن هر کنده تا این جا کار زیادی می‌خواست.' } }
      ],
      done: { en: 'The sawmill is built! The trees are a natural resource. The sawmill is a capital resource that people made to turn logs into boards. It sits next to the trees, so the logs travel only a short way.',
        es: '¡El aserradero está listo! Los árboles son un recurso natural. El aserradero es un recurso de capital que la gente hizo para convertir troncos en tablas. Está junto a los árboles, así que los troncos viajan poco.',
        fa: 'کارخانهٔ چوب‌بری ساخته شد! درختان منبع طبیعی هستند. کارخانهٔ چوب‌بری منبع سرمایه‌ای است که مردم ساختند تا کنده‌ها را تخته کنند. کنار درختان است، پس کنده‌ها راه کوتاهی می‌روند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 9], at: [24, 12], decor: 'vase',
      clue: { en: 'From this note, walk 3 steps south, then 4 steps east. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al sur y luego 4 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۴ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! A clay vase was by the road. Clay is a natural resource dug from the ground.', es: '¡Seguiste las direcciones de la brújula! Había un jarrón de barro junto al camino. El barro es un recurso natural que se saca de la tierra.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! یک گلدان گِلی کنار سرک بود. گِل یک منبع طبیعی است که از زمین کنده می‌شود.' } },
    { clueAt: [12, 4], at: [24, 5], decor: 'fossil',
      clue: { en: 'Miners dig iron ore, a [[natural resource|natural resource]]. Follow the railway down from the mine. Stand just below its end.', es: 'Los mineros sacan mineral de hierro, un [[natural resource|recurso natural]]. Sigue la vía del tren hacia abajo desde la mina. Párate justo debajo del final.', fa: 'معدنچی‌ها سنگ آهن را می‌کَنند که یک [[natural resource|منبع طبیعی]] است. خط ریل را از معدن به پایین دنبال کن. درست زیرِ آخرِ آن بایست.' },
      text: { en: 'You found where the mine carts stop! Factories melt iron ore to make steel. A fossil was in the stone.', es: '¡Encontraste dónde paran los carritos de la mina! Las fábricas derriten el mineral de hierro para hacer acero. Había un fósil en la piedra.', fa: 'تو جایی را پیدا کردی که واگون‌های معدن می‌ایستند! فابریکه‌ها سنگ آهن را ذوب می‌کنند تا فولاد بسازند. یک فسیل در سنگ بود.' } }
  ],

  words: {
    resource: { en: 'anything people use to make or do something', es: 'cualquier cosa que la gente usa para hacer o producir algo', fa: 'هر چیزی که مردم برای ساختن یا انجام کاری به کار می‌برند' },
    'natural resource': { en: 'something useful that comes from the earth, like water, soil, trees, oil or metals', es: 'algo útil que viene de la tierra, como agua, suelo, árboles, petróleo o metales', fa: 'چیز مفیدی که از زمین می‌آید، مثل آب، خاک، درخت، تیل یا فلز' },
    'human resource': { en: 'the people who do the work, with their skills and training', es: 'las personas que hacen el trabajo, con sus habilidades y su preparación', fa: 'مردمی که کار می‌کنند، با مهارت و آموزش خود' },
    'capital resource': { en: 'a thing people made to help make other things, like a tool, a machine, a building or a truck', es: 'algo que la gente fabricó para ayudar a hacer otras cosas, como una herramienta, una máquina, un edificio o un camión', fa: 'چیزی که مردم ساخته‌اند تا با آن چیزهای دیگر بسازند، مثل ابزار، ماشین، تعمیر یا لاری' },
    'land use': { en: 'how people use land, such as for farming, building or mining', es: 'cómo la gente usa la tierra, por ejemplo para sembrar, construir o hacer minas', fa: 'اینکه مردم زمین را چطور به کار می‌برند، مثل زراعت، ساختمان یا معدن' },
    trade: { en: 'buying and selling goods between people, places or countries', es: 'comprar y vender productos entre personas, lugares o países', fa: 'خرید و فروش اجناس میان مردم، جاها یا کشورها' }
  },

  npcs: [
    {
      x: 23, y: 5,
      name: { en: 'Dawit', es: 'Dawit', fa: 'داویت' },
      role: { en: 'Miner', es: 'Minero', fa: 'معدنچی' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a030', pants: '#3a3a4a' },
      lines: [
        { en: 'I dig in this mine. Rocks, metal, oil, water, soil and trees are [[natural resource|natural resources]].', es: 'Trabajo en esta mina. Rocas, metal, petróleo, agua, suelo y árboles son [[natural resource|recursos naturales]].', fa: 'من در این معدن کار می‌کنم. سنگ، فلز، تیل، آب، خاک و درخت [[natural resource|منابع طبیعی]] هستند.' },
        { en: 'No two places have the same ones. Huge oil fields lie under Saudi Arabia\'s desert.', es: 'No hay dos lugares con los mismos. Hay enormes campos de petróleo bajo el desierto de Arabia Saudita.', fa: 'هیچ دو جایی منابع یکسان ندارند. زیر ریگستان عربستان سعودی ساحه‌های بزرگ تیل است.' },
        { en: 'The Democratic Republic of the Congo has much cobalt, used in phone and car batteries.', es: 'La República Democrática del Congo tiene mucho cobalto, que se usa en baterías de teléfonos y carros.', fa: 'جمهوری دموکراتیک کانگو کوبالت زیاد دارد که در بتری موبایل و موتر به کار می‌رود.' },
        { en: 'Towns and roads grew around those mines. That is [[land use|land use]]: how people use land.', es: 'Pueblos y caminos crecieron alrededor de esas minas. Eso es el [[land use|uso del suelo]]: cómo se usa la tierra.', fa: 'شهرک‌ها و سرک‌ها دور آن معدن‌ها ساخته شد. این [[land use|استفاده از زمین]] است: مردم زمین را چطور به کار می‌برند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why can\'t every country build oil wells like Saudi Arabia?', es: '¿Por qué no todos los países pueden construir pozos de petróleo como Arabia Saudita?', fa: 'چرا هر کشور نمی‌تواند مثل عربستان سعودی چاه تیل بسازد؟' },
        choices: [
          { ok: true, t: { en: 'Not every country has oil underground', es: 'No todos los países tienen petróleo bajo tierra', fa: 'هر کشور زیر زمین تیل ندارد' },
            why: { en: 'Right. Natural resources are spread unevenly, so each place builds around what it has.', es: 'Correcto. Los recursos naturales están repartidos de forma desigual, así que cada lugar se organiza con lo que tiene.', fa: 'درست. منابع طبیعی نابرابر پخش شده‌اند، پس هر جا با آنچه دارد کار می‌کند.' } },
          { t: { en: 'Other countries do not use any oil', es: 'Los otros países no usan nada de petróleo', fa: 'کشورهای دیگر هیچ تیل به کار نمی‌برند' },
            why: { en: 'Almost every country uses oil. Many have to buy it from other places.', es: 'Casi todos los países usan petróleo. Muchos tienen que comprarlo a otros lugares.', fa: 'تقریباً هر کشور تیل به کار می‌برد. بسیاری باید آن را از جاهای دیگر بخرند.' } },
          { t: { en: 'Oil wells only work in a desert', es: 'Los pozos de petróleo solo funcionan en el desierto', fa: 'چاه تیل فقط در ریگستان کار می‌کند' },
            why: { en: 'Wells are dug wherever oil is found, even under the sea. The key is having the oil.', es: 'Los pozos se hacen donde haya petróleo, hasta bajo el mar. Lo importante es tener el petróleo.', fa: 'چاه هر جا که تیل پیدا شود کنده می‌شود، حتی زیر بحر. مهم داشتن تیل است.' } }
        ]
      }
    },
    {
      x: 26, y: 14,
      name: { en: 'Yasmin', es: 'Yasmin', fa: 'یاسمین' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 1, hair: '#2a1a12', shirt: '#b03a5a', pants: '#3a2a3a', robe: true },
      lines: [
        { en: 'Salaam! My bakery needs three kinds of [[resource|resources]].', es: '¡Salam! Mi panadería necesita tres tipos de [[resource|recursos]].', fa: 'سلام! نانوایی من سه نوع [[resource|منبع]] لازم دارد.' },
        { en: 'First, wheat for flour. It grows from the earth: a [[natural resource|natural resource]].', es: 'Primero, trigo para la harina. Crece de la tierra: es un [[natural resource|recurso natural]].', fa: 'اول، گندم برای آرد. از زمین می‌روید: یک [[natural resource|منبع طبیعی]] است.' },
        { en: 'Second, me and my skills! People and skills are [[human resource|human resources]].', es: 'Segundo, ¡yo y mis habilidades! Las personas y sus habilidades son [[human resource|recursos humanos]].', fa: 'دوم، خودم و مهارتم! مردم و مهارت‌هایشان [[human resource|منابع انسانی]] هستند.' },
        { en: 'Third, my oven. People built it to make bread: a [[capital resource|capital resource]].', es: 'Tercero, mi horno. La gente lo hizo para hacer pan: un [[capital resource|recurso de capital]].', fa: 'سوم، تنور من. مردم آن را برای پختن نان ساختند: یک [[capital resource|منبع سرمایه‌ای]].' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is a capital resource in the bakery?', es: '¿Cuál es un recurso de capital en la panadería?', fa: 'کدام یک در نانوایی منبع سرمایه‌ای است؟' },
        choices: [
          { ok: true, t: { en: 'The oven', es: 'El horno', fa: 'تنور' },
            why: { en: 'Yes! The oven is a thing people made to help make bread.', es: '¡Sí! El horno es algo que la gente hizo para ayudar a hacer pan.', fa: 'بله! تنور چیزی است که مردم ساختند تا در پختن نان کمک کند.' } },
          { t: { en: 'The wheat', es: 'El trigo', fa: 'گندم' },
            why: { en: 'Wheat grows from the earth. It is a natural resource.', es: 'El trigo crece de la tierra. Es un recurso natural.', fa: 'گندم از زمین می‌روید. منبع طبیعی است.' } },
          { t: { en: 'The baker', es: 'La panadera', fa: 'نانوا' },
            why: { en: 'The baker is a person with skills. She is a human resource.', es: 'La panadera es una persona con habilidades. Es un recurso humano.', fa: 'نانوا یک انسان با مهارت است. او منبع انسانی است.' } }
        ]
      }
    },
    {
      x: 8, y: 13,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Farmer', es: 'Agricultora', fa: 'دهقان' },
      remember: { ep: '1.1', t: { en: 'Hello again! Lena the shepherd told me you found Grandpa Tomas\'s lost compass. He checks it every morning now. He says thank you!', es: '¡Hola otra vez! Lena, la pastora, me contó que encontraste la brújula perdida del abuelo Tomás. Ahora la mira cada mañana. ¡Te manda las gracias!', fa: 'سلام دوباره! لینا چوپان به من گفت که تو قطب‌نمای گم‌شدهٔ پدرکلان توماس را پیدا کردی. حالا هر صبح به آن نگاه می‌کند. او از تو تشکر می‌کند!' } },
      look: { skin: 4, hair: '#1b1410', shirt: '#3fa34d', pants: '#5a4630' },
      lines: [
        { en: 'Good soil is a resource. Brazil, my family\'s home, has some of Earth\'s richest farmland.', es: 'La buena tierra es un recurso. Brasil, el país de mi familia, tiene algunas de las tierras de cultivo más ricas del mundo.', fa: 'خاک خوب یک منبع است. برازیل، وطن خانوادهٔ من، یکی از حاصل‌خیزترین زمین‌های زراعتی جهان را دارد.' },
        { en: 'Some of that farmland pushes into the edge of the Amazon Rainforest.', es: 'Parte de esas tierras de cultivo entra en el borde de la selva amazónica.', fa: 'بخشی از آن زمین‌های زراعتی به کنارهٔ جنگل بارانی آمازون می‌رسد.' },
        { en: 'Farmers need the space. Scientists want the forest saved for its carbon and animals.', es: 'Los agricultores necesitan el espacio. Los científicos quieren salvar el bosque por su carbono y sus animales.', fa: 'دهقانان این زمین را لازم دارند. دانشمندان می‌خواهند جنگل برای کاربن و حیواناتش بماند.' },
        { en: 'Both have a reason. So [[land use|land use]] asks: who decides what the land becomes?', es: 'Los dos tienen razón. Por eso el [[land use|uso del suelo]] pregunta: ¿quién decide en qué se convierte la tierra?', fa: 'هر دو دلیل دارند. پس [[land use|استفاده از زمین]] می‌پرسد: چه کسی تصمیم می‌گیرد زمین چه شود؟' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why do people disagree about clearing land at the edge of the Amazon Rainforest?', es: '¿Por qué la gente no se pone de acuerdo sobre despejar tierra en el borde de la selva amazónica?', fa: 'چرا مردم سر پاک کردن زمین در کنارهٔ جنگل بارانی آمازون موافق نیستند؟' },
        choices: [
          { ok: true, t: { en: 'Farmers need land; scientists want the forest saved', es: 'Los agricultores necesitan tierra; los científicos quieren salvar el bosque', fa: 'دهقانان زمین لازم دارند؛ دانشمندان می‌خواهند جنگل بماند' },
            why: { en: 'Yes. Both sides can point to a real reason for their view.', es: 'Sí. Los dos lados tienen una razón real para pensar así.', fa: 'بله. هر دو طرف برای نظر خود دلیل واقعی دارند.' } },
          { t: { en: 'The soil there is far too poor for any kind of farm', es: 'La tierra allí es demasiado pobre para cualquier tipo de granja', fa: 'خاک آنجا برای هیچ نوع فارمی خوب نیست' },
            why: { en: 'Ana said Brazil has some of the richest farmland on Earth. That is why farms spread.', es: 'Ana dijo que Brasil tiene tierras muy ricas. Por eso las granjas se extienden.', fa: 'آنا گفت برازیل زمین بسیار خوب دارد. به همین خاطر فارم‌ها پخش می‌شوند.' } },
          { t: { en: 'Nobody ever uses the land near the Amazon', es: 'Nadie usa nunca la tierra cerca del Amazonas', fa: 'هیچ کس هرگز زمین نزدیک آمازون را به کار نمی‌برد' },
            why: { en: 'Many people use it, for farms, for cattle and for study. That is why they disagree.', es: 'Mucha gente la usa, para sembrar, para el ganado y para estudiar. Por eso no están de acuerdo.', fa: 'بسیاری آن را به کار می‌برند، برای زراعت، مالداری و تحقیق. به همین خاطر موافق نیستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 4, text: { en: 'TIMBER WOODS · The trees are a [[natural resource|natural resource]]. The woodcutter is a [[human resource|human resource]]. The saw is a [[capital resource|capital resource]].',
      es: 'BOSQUE DE MADERA · Los árboles son un [[natural resource|recurso natural]]. El leñador es un [[human resource|recurso humano]]. La sierra es un [[capital resource|recurso de capital]].',
      fa: 'جنگل چوب · درختان [[natural resource|منبع طبیعی]] هستند. چوب‌بُر [[human resource|منبع انسانی]] است. اره [[capital resource|منبع سرمایه‌ای]] است.' } },
    { x: 25, y: 16, text: { en: 'VALLEY MARKET · No place has every resource. We sell what we have plenty of and buy what we lack: [[trade|trade]].', es: 'MERCADO DEL VALLE · Ningún lugar tiene todos los recursos. Vendemos lo que nos sobra y compramos lo que nos falta: el [[trade|comercio]].', fa: 'بازار دره · هیچ جا همهٔ منابع را ندارد. چیزی را که زیاد داریم می‌فروشیم و چیزی را که نداریم می‌خریم: [[trade|تجارت]].' } }
  ],

  /* the quest: Rahim the toolmaker (gold !) -> Ingrid the woodcutter -> trade with Marisol at the mine -> back to Rahim */
  quest: {
    stat: 'mov',
    title: { en: 'Iron for the Plows', es: 'Hierro para los arados', fa: 'آهن برای قلبه‌ها' },
    giver: {
      x: 16, y: 13,
      name: { en: 'Rahim', es: 'Rahim', fa: 'رحیم' },
      role: { en: 'Toolmaker', es: 'Fabricante de herramientas', fa: 'ابزارساز' },
      look: { skin: 2, hair: '#1b1410', shirt: '#6b4f3a', pants: '#2e2e2e', style: 'short', hat: '#3a3a3a' },
      lines: [
        { en: 'Hello! I am the toolmaker. I make plows, saws and hammers.', es: '¡Hola! Soy el fabricante de herramientas. Hago arados, sierras y martillos.', fa: 'سلام! من ابزارساز هستم. قلبه، اره و چکش می‌سازم.' },
        { en: 'Tools are [[capital resource|capital resources]]. People make them to help make other things.', es: 'Las herramientas son [[capital resource|recursos de capital]]. La gente las hace para ayudar a hacer otras cosas.', fa: 'ابزارها [[capital resource|منابع سرمایه‌ای]] هستند. مردم آن‌ها را می‌سازند تا در ساختن چیزهای دیگر کمک کنند.' },
        { en: 'But the Grump rusted all my iron, and the farmers need new plows!', es: 'Pero el Gruñón oxidó todo mi hierro, ¡y los agricultores necesitan arados nuevos!', fa: 'اما غرغرو همهٔ آهنم را زنگ‌زده کرد، و دهقانان قلبهٔ نو لازم دارند!' },
        { en: 'Ingrid the woodcutter knows where to get iron. She is in the Timber Woods, north-west.', es: 'Ingrid, la leñadora, sabe dónde conseguir hierro. Está en el Bosque de Madera, en el noroeste.', fa: 'اینگرید چوب‌بُر می‌داند آهن را از کجا پیدا کنیم. او در جنگل چوب، در شمال غرب است.' }
      ],
      wait: { en: 'Ingrid is in the Timber Woods, in the north-west. Look west of the woodcutter\'s cabin.',
        es: 'Ingrid está en el Bosque de Madera, en el noroeste. Búscala al oeste de la cabaña del leñador.',
        fa: 'اینگرید در جنگل چوب، در شمال غرب است. در غرب کلبهٔ چوب‌بُر بپال.' },
      thanks: { en: 'Iron! Each side gave what it had and got what it lacked. That is [[trade|trade]]!', es: '¡Hierro! Cada lado dio lo que tenía y recibió lo que le faltaba. ¡Eso es el [[trade|comercio]]!', fa: 'آهن! هر طرف چیزی را که داشت داد و چیزی را که نداشت گرفت. این [[trade|تجارت]] است!' }
    },
    contact: {
      x: 5, y: 5,
      name: { en: 'Ingrid', es: 'Ingrid', fa: 'اینگرید' },
      role: { en: 'Woodcutter', es: 'Leñadora', fa: 'چوب‌بُر' },
      look: { skin: 0, hair: '#c8a060', shirt: '#9c2f2f', pants: '#3a4a3a', style: 'long' },
      lines: [
        { en: 'Iron? Only the mine in the north-east mountains has it.', es: '¿Hierro? Solo la mina de las montañas del noreste lo tiene.', fa: 'آهن؟ فقط معدن کوه‌های شمال شرق آن را دارد.' },
        { en: 'Iron is a [[natural resource|natural resource]]. Resources are spread unevenly.', es: 'El hierro es un [[natural resource|recurso natural]]. Los recursos están repartidos de forma desigual.', fa: 'آهن یک [[natural resource|منبع طبیعی]] است. منابع نابرابر پخش شده‌اند.' },
        { en: 'My woods have many trees but no iron. Almost no trees grow on the mountain.', es: 'Mi bosque tiene muchos árboles pero nada de hierro. En la montaña casi no crecen árboles.', fa: 'جنگل من درخت زیاد دارد اما آهن ندارد. در کوه تقریباً درخت نمی‌روید.' },
        { en: 'Go to Marisol, the trader by the mine railway. Offer what the miners lack!', es: 'Ve con Marisol, la comerciante junto a la vía de la mina. ¡Ofrécele lo que les falta a los mineros!', fa: 'پیش ماریسول، تاجر کنار خط آهن معدن برو. چیزی را پیشنهاد کن که معدنچی‌ها ندارند!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 26, y: 4,
        name: { en: 'Marisol', es: 'Marisol', fa: 'ماریسول' },
        role: { en: 'Mine trader', es: 'Comerciante de la mina', fa: 'تاجر معدن' },
        look: { skin: 3, hair: '#3a2416', shirt: '#7a4fa3', pants: '#3a3a3a', style: 'bun' },
        lines: [
          { en: 'Welcome to the mine! We dig more iron than we can ever use.', es: '¡Bienvenido a la mina! Sacamos más hierro del que podemos usar.', fa: 'به معدن خوش آمدی! ما بیشتر از آنچه به کار ببریم آهن می‌کنیم.' },
          { en: 'But the mountain cannot give us everything we need.', es: 'Pero la montaña no nos puede dar todo lo que necesitamos.', fa: 'اما کوه نمی‌تواند هر چیزی را که لازم داریم به ما بدهد.' }
        ]
      },
      q: { en: 'What will you offer Marisol for a load of iron?', es: '¿Qué le ofreces a Marisol a cambio de una carga de hierro?', fa: 'در بدل یک بار آهن، به ماریسول چه پیشنهاد می‌کنی؟' },
      choices: [
        { ok: true, at: [7, 4], icon: '🪵', t: { en: 'Logs from the Timber Woods', es: 'Troncos del Bosque de Madera', fa: 'کنده‌های چوب از جنگل چوب' },
          why: { en: 'Good trade! The woods have plenty of trees, and the mountain has almost none. Miners use logs to hold up their tunnels. Each side gets what it lacks.', es: '¡Buen trato! El bosque tiene muchos árboles y la montaña casi ninguno. Los mineros usan troncos para sostener sus túneles. Cada lado recibe lo que le falta.', fa: 'معاملهٔ خوب! جنگل درخت زیاد دارد و کوه تقریباً هیچ ندارد. معدنچی‌ها با کنده‌های چوب سقف تونل‌ها را نگه می‌دارند. هر طرف چیزی را که ندارد می‌گیرد.' } },
        { at: [22, 4], icon: '🛒', t: { en: 'A cart of iron ore', es: 'Una carreta de mineral de hierro', fa: 'یک گادی سنگ آهن' },
          why: { en: 'The mine already has more iron than it can use. Nobody trades for something they already have plenty of.', es: 'La mina ya tiene más hierro del que puede usar. Nadie cambia algo por lo que ya tiene de sobra.', fa: 'معدن همین حالا بیشتر از ضرورتش آهن دارد. هیچ کس برای چیزی که زیاد دارد معامله نمی‌کند.' } },
        { at: [16, 3], icon: '🪨', t: { en: 'A bag of mountain stones', es: 'Una bolsa de piedras de la montaña', fa: 'یک خلته سنگ کوه' },
          why: { en: 'The mountain is made of rock! The miners have more than enough. Offer something the mountain does not have.', es: '¡La montaña está hecha de roca! Los mineros tienen de sobra. Ofrece algo que la montaña no tenga.', fa: 'کوه خودش از سنگ است! معدنچی‌ها بیشتر از کافی دارند. چیزی را پیشنهاد کن که کوه ندارد.' } }
      ],
      item: { icon: '🔩', name: { en: 'A load of iron', es: 'Una carga de hierro', fa: 'یک بار آهن' } }
    }
  },

  scraps: [[24, 1], [3, 3], [1, 20]],
  smudges: [[12, 8], [5, 18]],

  challenge: {
    at: [20, 13],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // each group has a marked area: natural by the pond and fields, human by the market where people work, capital under the factory
    zones: [{ bin: 'nat', x: 6, y: 17, w: 3, h: 2 }, { bin: 'hum', x: 26, y: 17, w: 3, h: 2 }, { bin: 'cap', x: 16, y: 14, w: 4, h: 1 }],
    stat: 'hei',
    title: { en: 'Natural, human or capital?', es: '¿Natural, humano o de capital?', fa: 'طبیعی، انسانی یا سرمایه‌ای؟' },
    intro: { en: 'The Grump dumped the valley\'s resources in one big pile. Put each card in the right group.',
      es: 'El Gruñón tiró todos los recursos del valle en un solo montón. Pon cada tarjeta en el grupo correcto.',
      fa: 'غرغرو همهٔ منابع دره را در یک توده ریخت. هر کارت را در گروه درست بگذار.' },
    bins: [
      { id: 'nat', icon: '🌳', label: { en: 'Natural resource', es: 'Recurso natural', fa: 'منبع طبیعی' }, sub: { en: 'comes from the earth', es: 'viene de la tierra', fa: 'از زمین می‌آید' } },
      { id: 'hum', icon: '🧑‍🔧', label: { en: 'Human resource', es: 'Recurso humano', fa: 'منبع انسانی' }, sub: { en: 'people and their skills', es: 'personas y sus habilidades', fa: 'مردم و مهارت‌هایشان' } },
      { id: 'cap', icon: '🛠️', label: { en: 'Capital resource', es: 'Recurso de capital', fa: 'منبع سرمایه‌ای' }, sub: { en: 'things people made to make other things', es: 'cosas hechas para hacer otras cosas', fa: 'چیزهایی که برای ساختن چیزهای دیگر ساخته شده' } }
    ],
    items: [
      { bin: 'nat', t: { en: 'Water in the river', es: 'El agua del río', fa: 'آب دریا' },
        why: { en: 'Water comes from the earth. Nobody made it, so it is a natural resource.', es: 'El agua viene de la tierra. Nadie la fabricó, así que es un recurso natural.', fa: 'آب از زمین می‌آید. کسی آن را نساخته، پس منبع طبیعی است.' } },
      { bin: 'nat', t: { en: 'Trees in the forest', es: 'Los árboles del bosque', fa: 'درختان جنگل' },
        why: { en: 'Trees grow on their own from the earth. They are a natural resource.', es: 'Los árboles crecen solos de la tierra. Son un recurso natural.', fa: 'درختان خودشان از زمین می‌رویند. منبع طبیعی هستند.' } },
      { bin: 'nat', t: { en: 'Gold in the ground in Ghana', es: 'El oro bajo la tierra en Ghana', fa: 'طلا در زیر خاک غانا' },
        why: { en: 'Gold is a mineral from the earth. It is a natural resource.', es: 'El oro es un mineral de la tierra. Es un recurso natural.', fa: 'طلا یک معدنی از زمین است. منبع طبیعی است.' } },
      { bin: 'hum', t: { en: 'The baker who shapes the dough', es: 'La panadera que le da forma a la masa', fa: 'نانوایی که خمیر را شکل می‌دهد' },
        why: { en: 'The baker is a person doing the work. That is a human resource.', es: 'La panadera es una persona que hace el trabajo. Es un recurso humano.', fa: 'نانوا یک انسان است که کار می‌کند. این منبع انسانی است.' } },
      { bin: 'hum', t: { en: 'A trained nurse', es: 'Una enfermera preparada', fa: 'یک نرس آموزش‌دیده' },
        why: { en: 'A nurse is a person with skills and training. That is a human resource.', es: 'Una enfermera es una persona con habilidades y preparación. Es un recurso humano.', fa: 'نرس انسانی با مهارت و آموزش است. این منبع انسانی است.' } },
      { bin: 'hum', t: { en: 'A miner who knows how to dig safely', es: 'Un minero que sabe excavar con cuidado', fa: 'معدنچی‌ای که می‌داند چطور با احتیاط کار کند' },
        why: { en: 'The miner\'s skill is what counts here. People and skills are human resources.', es: 'Aquí lo que cuenta es la habilidad del minero. Las personas y sus habilidades son recursos humanos.', fa: 'اینجا مهارت معدنچی مهم است. مردم و مهارت‌ها منابع انسانی هستند.' } },
      { bin: 'cap', t: { en: 'The oven in the bakery', es: 'El horno de la panadería', fa: 'تنور نانوایی' },
        why: { en: 'People built the oven to help make bread. It is a capital resource.', es: 'La gente construyó el horno para ayudar a hacer pan. Es un recurso de capital.', fa: 'مردم تنور را ساختند تا در پختن نان کمک کند. منبع سرمایه‌ای است.' } },
      { bin: 'cap', t: { en: 'A delivery truck', es: 'Un camión de reparto', fa: 'لاری بار' },
        why: { en: 'A truck is a machine people made to move goods. It is a capital resource.', es: 'Un camión es una máquina hecha para mover productos. Es un recurso de capital.', fa: 'لاری ماشینی است که مردم برای بردن اجناس ساخته‌اند. منبع سرمایه‌ای است.' } },
      { bin: 'cap', t: { en: 'A tractor on the farm', es: 'Un tractor en la granja', fa: 'تراکتور در فارم' },
        why: { en: 'A tractor is a machine that helps grow food. It is a capital resource.', es: 'Un tractor es una máquina que ayuda a producir comida. Es un recurso de capital.', fa: 'تراکتور ماشینی است که در تولید غذا کمک می‌کند. منبع سرمایه‌ای است.' } }
    ],
    success: { en: 'The bakery oven is warm, the mine is busy, and the market is open again!', es: '¡El horno de la panadería está caliente, la mina trabaja y el mercado abrió otra vez!', fa: 'تنور نانوایی گرم است، معدن دوباره کار می‌کند و بازار باز شده!' }
  },

  boss: {
    at: [22, 17],
    stat: 'mov',
    need: 3,
    name: { en: 'The Rust Grump', es: 'El Gruñón Oxidado', fa: 'غرغروی زنگ‌زده' },
    appear: { en: 'The Rust Grump is creeping through the market in the south-east!', es: '¡El Gruñón Oxidado se arrastra por el mercado en el sureste!', fa: 'غرغروی زنگ‌زده در بازار جنوب شرق می‌خزد!' },
    taunt: { en: 'Creak! I rust every tool and spoil every field. With no resources, nobody can make anything!', es: '¡Crac! Oxido cada herramienta y daño cada campo. ¡Sin recursos, nadie puede hacer nada!', fa: 'غژ! من هر ابزار را زنگ می‌زنم و هر زمین را خراب می‌کنم. بدون منابع، هیچ کس چیزی ساخته نمی‌تواند!' },
    win: { en: 'The rust flakes away and every tool shines. Atlas page 1.3 floats down into your hands!', es: 'El óxido se cae y cada herramienta brilla. ¡La página 1.3 del atlas cae en tus manos!', fa: 'زنگ می‌ریزد و هر ابزار برق می‌زند. صفحهٔ ۱.۳ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which one is a natural resource?', es: '¿Cuál es un recurso natural?', fa: 'کدام یک منبع طبیعی است؟' },
        choices: [{ en: 'Forest trees', es: 'Árboles del bosque', fa: 'درختان جنگل' }, { en: 'A dump truck', es: 'Un camión de carga', fa: 'یک لاری باربری' }, { en: 'A big factory', es: 'Una fábrica grande', fa: 'یک فابریکهٔ بزرگ' }, { en: 'A teacher', es: 'Un maestro', fa: 'یک معلم' }], answer: 0,
        why: { en: 'Trees come from the earth. A truck and a factory are capital. A teacher is a human resource.', es: 'Los árboles vienen de la tierra. El camión y la fábrica son de capital. El maestro es un recurso humano.', fa: 'درخت از زمین می‌آید. لاری و فابریکه سرمایه‌ای هستند. معلم منبع انسانی است.' } },
      { q: { en: 'Which one is a human resource?', es: '¿Cuál es un recurso humano?', fa: 'کدام یک منبع انسانی است؟' },
        choices: [{ en: 'The baker who makes the bread', es: 'La panadera que hace el pan', fa: 'نانوایی که نان می‌پزد' }, { en: 'The wheat growing in the field', es: 'El trigo que crece en el campo', fa: 'گندمی که در زمین می‌روید' }, { en: 'The oven in the shop', es: 'El horno de la tienda', fa: 'تنور در دکان' }, { en: 'The water in the river', es: 'El agua del río', fa: 'آب دریا' }], answer: 0,
        why: { en: 'Human resources are the people who do the work, with their skills.', es: 'Los recursos humanos son las personas que hacen el trabajo, con sus habilidades.', fa: 'منابع انسانی مردمی هستند که با مهارت خود کار می‌کنند.' } },
      { q: { en: 'Which one is a capital resource?', es: '¿Cuál es un recurso de capital?', fa: 'کدام یک منبع سرمایه‌ای است؟' },
        choices: [{ en: 'The oven in a bakery', es: 'El horno de una panadería', fa: 'تنور یک نانوایی' }, { en: 'The soil in a field', es: 'El suelo de un campo', fa: 'خاک یک زمین' }, { en: 'The rain that falls', es: 'La lluvia que cae', fa: 'بارانی که می‌بارد' }, { en: 'The gold in the ground', es: 'El oro bajo la tierra', fa: 'طلا در زیر زمین' }], answer: 0,
        why: { en: 'A capital resource is a thing people made to make other things, like an oven.', es: 'Un recurso de capital es algo hecho por personas para hacer otras cosas, como un horno.', fa: 'منبع سرمایه‌ای چیزی است که مردم ساخته‌اند تا با آن چیزهای دیگر بسازند، مثل تنور.' } },
      { q: { en: 'Why do countries trade with each other?', es: '¿Por qué los países comercian entre sí?', fa: 'چرا کشورها با هم تجارت می‌کنند؟' },
        choices: [{ en: 'No country has every resource it needs', es: 'Ningún país tiene todos los recursos que necesita', fa: 'هیچ کشوری همهٔ منابع لازم را ندارد' }, { en: 'A law says every country must trade', es: 'Una ley dice que todos los países deben comerciar', fa: 'قانون می‌گوید هر کشور باید تجارت کند' }, { en: 'All countries have the same things', es: 'Todos los países tienen las mismas cosas', fa: 'همهٔ کشورها چیزهای یکسان دارند' }, { en: 'They want to share their extra workers', es: 'Quieren compartir sus trabajadores de sobra', fa: 'می‌خواهند کارگران اضافی خود را شریک کنند' }], answer: 0,
        why: { en: 'Resources are spread unevenly. A country sells what it has plenty of and buys what it lacks.', es: 'Los recursos están repartidos de forma desigual. Un país vende lo que le sobra y compra lo que le falta.', fa: 'منابع نابرابر پخش شده‌اند. یک کشور آنچه زیاد دارد می‌فروشد و آنچه ندارد می‌خرد.' } },
      { q: { en: 'Oil sat underground for millions of years and nobody wanted it. Then people built engines that burned it. What does this show?', es: 'El petróleo estuvo bajo tierra millones de años y nadie lo quería. Luego la gente hizo motores que lo quemaban. ¿Qué muestra esto?', fa: 'تیل میلیون‌ها سال زیر زمین بود و کسی آن را نمی‌خواست. بعد مردم انجن‌هایی ساختند که آن را می‌سوزاند. این چه نشان می‌دهد؟' },
        choices: [{ en: 'What counts as a resource can change over time', es: 'Lo que cuenta como recurso puede cambiar con el tiempo', fa: 'اینکه چه چیز منبع حساب شود با گذشت زمان تغییر می‌کند' }, { en: 'Oil is the only resource that ever changed in value', es: 'El petróleo es el único recurso que cambió de valor', fa: 'تیل تنها منبعی است که ارزشش تغییر کرد' }, { en: 'Natural resources are worth more than capital resources', es: 'Los recursos naturales valen más que los de capital', fa: 'منابع طبیعی از منابع سرمایه‌ای با ارزش‌ترند' }, { en: 'Machines matter more than the people who run them', es: 'Las máquinas importan más que las personas que las usan', fa: 'ماشین‌ها از مردمی که آن‌ها را می‌رانند مهم‌ترند' }], answer: 0,
        why: { en: 'A new tool, the engine, made oil useful. So what counts as a resource can change.', es: 'Una nueva herramienta, el motor, hizo útil el petróleo. Así que lo que cuenta como recurso puede cambiar.', fa: 'یک ابزار تازه، یعنی انجن، تیل را مفید ساخت. پس اینکه چه چیز منبع است تغییر می‌کند.' } },
      { q: { en: 'What does land use mean?', es: '¿Qué significa uso del suelo?', fa: 'استفاده از زمین یعنی چه؟' },
        choices: [{ en: 'How people use land: farms, buildings, mines', es: 'Cómo la gente usa la tierra: granjas, edificios, minas', fa: 'مردم زمین را چطور به کار می‌برند: فارم، ساختمان، معدن' }, { en: 'How much rain falls on the land', es: 'Cuánta lluvia cae sobre la tierra', fa: 'چقدر باران روی زمین می‌بارد' }, { en: 'How much money a piece of land costs to buy', es: 'Cuánto dinero cuesta comprar un terreno', fa: 'خریدن یک قطعه زمین چند پول قیمت دارد' }, { en: 'How high the land is above the level of the sea', es: 'Qué tan alta está la tierra sobre el nivel del mar', fa: 'زمین چقدر از سطح بحر بلندتر است' }], answer: 0,
        why: { en: 'Land use is what people do with the land: farms, towns, mines or forests.', es: 'El uso del suelo es lo que la gente hace con la tierra: granjas, pueblos, minas o bosques.', fa: 'استفاده از زمین یعنی مردم با زمین چه می‌کنند: فارم، شهرک، معدن یا جنگل.' } },
      { q: { en: 'How did oil change land use in Saudi Arabia?', es: '¿Cómo cambió el petróleo el uso del suelo en Arabia Saudita?', fa: 'تیل استفاده از زمین را در عربستان سعودی چطور تغییر داد؟' },
        choices: [{ en: 'Oil wells and pipelines now cover the desert', es: 'Pozos y oleoductos cubren ahora el desierto', fa: 'حالا چاه‌های تیل و نل‌ها ریگستان را پوشانده‌اند' }, { en: 'The whole desert turned into a green rainforest', es: 'Todo el desierto se convirtió en una selva verde', fa: 'تمام ریگستان به یک جنگل بارانی سبز تبدیل شد' }, { en: 'Everyone moved away from the desert', es: 'Todos se fueron del desierto', fa: 'همه از ریگستان رفتند' }, { en: 'Farms of wheat replaced the sand everywhere', es: 'Granjas de trigo reemplazaron la arena en todas partes', fa: 'فارم‌های گندم در همه جا جای ریگ را گرفتند' }], answer: 0,
        why: { en: 'The desert did not change. What people built on it did.', es: 'El desierto no cambió. Lo que la gente construyó encima sí.', fa: 'ریگستان تغییر نکرد. چیزی که مردم رویش ساختند تغییر کرد.' } },
      { q: { en: 'Cobalt from the Democratic Republic of the Congo goes inside what?', es: '¿Dentro de qué va el cobalto de la República Democrática del Congo?', fa: 'کوبالت جمهوری دموکراتیک کانگو در داخل چه چیز می‌رود؟' },
        choices: [{ en: 'Batteries for phones and cars', es: 'Baterías de teléfonos y carros', fa: 'بتری موبایل و موتر' }, { en: 'Loaves of bread and cakes', es: 'Panes y pasteles', fa: 'نان و کیک' }, { en: 'Wooden chairs and dining tables', es: 'Sillas y mesas de comedor de madera', fa: 'چوکی و میز نان‌خوری چوبی' }, { en: 'Cotton shirts and socks', es: 'Camisas y medias de algodón', fa: 'پیراهن و جوراب نخی' }], answer: 0,
        why: { en: 'Cobalt is a metal used in batteries. Demand for batteries keeps those mines growing.', es: 'El cobalto es un metal que se usa en baterías. La demanda de baterías hace crecer esas minas.', fa: 'کوبالت فلزی است که در بتری به کار می‌رود. تقاضا برای بتری آن معدن‌ها را بزرگ‌تر می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Every job needs three kinds of [[resource|resources]]: [[natural resource|natural]] (from the earth), [[human resource|human]] (people and skills) and [[capital resource|capital]] (tools and machines).', es: 'Todo trabajo necesita tres tipos de [[resource|recursos]]: [[natural resource|naturales]] (de la tierra), [[human resource|humanos]] (personas y habilidades) y [[capital resource|de capital]] (herramientas y máquinas).', fa: 'هر کار سه نوع [[resource|منبع]] لازم دارد: [[natural resource|طبیعی]] (از زمین)، [[human resource|انسانی]] (مردم و مهارت‌ها) و [[capital resource|سرمایه‌ای]] (ابزار و ماشین).' },
    { en: 'Natural resources are spread unevenly, like oil in Saudi Arabia and cobalt in the Congo. So countries [[trade|trade]].', es: 'Los recursos naturales están repartidos de forma desigual, como el petróleo en Arabia Saudita y el cobalto en el Congo. Por eso los países [[trade|comercian]].', fa: 'منابع طبیعی نابرابر پخش شده‌اند، مثل تیل در عربستان سعودی و کوبالت در کانگو. به همین خاطر کشورها [[trade|تجارت]] می‌کنند.' },
    { en: 'Resources shape [[land use|land use]]: mines, wells and farms. People often disagree about who decides what the land becomes.', es: 'Los recursos dan forma al [[land use|uso del suelo]]: minas, pozos y granjas. La gente muchas veces no está de acuerdo sobre quién decide qué será la tierra.', fa: 'منابع [[land use|استفاده از زمین]] را شکل می‌دهند: معدن، چاه و فارم. مردم اغلب سر اینکه چه کسی دربارهٔ زمین تصمیم بگیرد موافق نیستند.' }
  ],
  reflect: {
    q: { en: 'Think of a job someone in your family does, or a job you want one day. What natural, human and capital resources does that job need?', es: 'Piensa en un trabajo que hace alguien de tu familia o un trabajo que quieres tener algún día. ¿Qué recursos naturales, humanos y de capital necesita ese trabajo?', fa: 'به کاری فکر کن که یکی از اعضای خانواده‌ات می‌کند، یا کاری که یک روز می‌خواهی. آن کار چه منابع طبیعی، انسانی و سرمایه‌ای لازم دارد؟' },
    starter: { en: 'The job I am thinking of is', es: 'El trabajo en el que pienso es', fa: 'کاری که به آن فکر می‌کنم' }
  }
};
