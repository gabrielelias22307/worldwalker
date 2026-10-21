/* WORLDWALKER · Episode 7.1 · China and Japan (WG.10)
   East Asia. 48 x 22 = 3 x 2 screens. West: Gobi Desert (north) and the snowy Himalaya / Tibetan Plateau (south),
   where both great rivers begin. Middle: the flat plain of the Yellow River and the Yangtze, with wheat, rice paddies
   and a big coastal city. East: a sea crossing by pier to mountain islands with a snowy volcano and a narrow coastal city.
   The land teaches: people crowd onto flat land. */
window.EPISODE = {
  id: '7.1',
  realm: 7,
  sol: 'WG.10',
  title: { en: 'China and Japan', es: 'China y Japón', fa: 'چین و جاپان' },
  place: { en: 'Two Rivers and the Islands', es: 'Dos ríos y las islas', fa: 'دو دریا و جزیره‌ها' },
  intro: [
    { en: 'The Grump scribbled over East Asia! Rivers, mountains and islands are mixed up.', es: '¡El Gruñón garabateó el este de Asia! Los ríos, las montañas y las islas están revueltos.', fa: 'غرغرو روی شرق آسیا خط‌خطی کرد! دریاها، کوه‌ها و جزیره‌ها مخلوط شده‌اند.' },
    { en: 'Meet the plateau scientist, rice farmer and island engineer. Then fix the compass stone.', es: 'Habla con la científica de la meseta, el agricultor de arroz y la ingeniera de las islas. Luego arregla la piedra de la brújula.', fa: 'با دانشمند فلات، دهقان برنج و انجنیر جزیره گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],

  map: [
    'AAAAAAAAAAAAAAAATTTTTTTTTTTTTTTT================',
    'AsssssssssssssKK..K..KK..K.KK.K.~~====~MMMMMMMM=',
    'AsusssusssusssWWWWWWWWW.WWWWWWWW~~====...MMAMMM=',
    'Assusssussssssss.....:...T...T..~~=.p~...MAVAMM=',
    'Asssssssssssussswwwww:wwwwwwwwww~~===~...MAAAMM=',
    'AssssussrMMssusswwwww:wwwwwwwwww~~===~U..MMMMMM=',
    'AsssussssMA~~~~~~~~~~B~~~~~~~~~~~~~==~...MMMMMM=',
    'AssrssssssMs~~~~~~~~~B~~~~~~~~~~~~~==~...MMMMMM=',
    'Asssssssssssgsss..,..:x........x~~~==~.QQMMMMMM=',
    'Aggggggggggggggg::::::::::::::::kkkkkk.hdMMMMMM=',
    'Aggggggggggggggg.wwww:.T.T..UUUU~~~==~....qMMMM=',
    'AMMzAAzzzMMAzzzMwwwww:.RRR.fUUUU~~~==~...qqG.,M=',
    'AMzzzznzzzzzznzzwwwww:.hdhJUUUUU~s~==~...qqG..M=',
    'Azzzzzzzzzzzzzzzqqqqq:qqqqJUfUUU~~~==~...qqG..M=',
    'AzzzMAMzzznzzzzzqqqqq:qqqqq..UUU~~~==~....MMMMM=',
    'AzznMz~~~~~~~~~~~~~~~B~~~~~~~~~~~~~==~..RRRMMMM=',
    'AzzzzMz~~~~~~~~~~~~~~B~~~~~~~~~~~~~==~..hdhMMMM=',
    'Azzzzzzzzzzzzzzzqqqqq:.qqqqqqqq.~~~==~....MM..M=',
    'AAMMzzMMAzzAMzMMqqqqq:qqq.qqqqq.~~===~....M...M=',
    'AAAAMAAAAMAAAAAAqqqqq:q.RRR.qqq.~~====...qq...M=',
    'AAAAAAAAAAAAAAAAqqqqq:q.hdh.qqq.~~====........M=',
    'AAAAAAAAAAAAAAAATTTTTTTTTTTTTTTT================'
  ],
  start: [18, 9],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): tea terraces on the hill slope below Mount Fuji. Flat land is for rice and people; hills get terraces */
  build: [
    { id: 'terraces', kind: 'place', board: [38, 4], tile: 't', ok: [[39, 4], [40, 4], [39, 5], [40, 5]], cost: { wood: 1 },
      name: { en: 'Tea terraces', es: 'Terrazas de té', fa: 'زینه‌های چای' },
      ask: { en: 'Japan has very little flat land, and the flat land is full of cities and rice. So farmers cut [[terrace|terraces]], flat steps, into the hills. Build tea terraces on the hill slope below Mount Fuji, next to the mountains.',
        es: 'Japón tiene muy poca tierra plana, y esa tierra está llena de ciudades y arroz. Por eso los agricultores cortan [[terrace|terrazas]], escalones planos, en las colinas. Construye terrazas de té en la ladera debajo del monte Fuji, junto a las montañas.',
        fa: 'جاپان زمین هموار بسیار کم دارد، و زمین هموار پر از شهرها و برنج است. پس دهقانان در تپه‌ها [[terrace|زینه‌ها]]، پله‌های هموار، می‌کنند. زینه‌های چای را در دامنهٔ تپه زیر کوه فوجی، کنار کوه‌ها بساز.' },
      why: { en: 'A flat step on the hill slope. Now tea can grow here!', es: '¡Un escalón plano en la ladera! Ahora aquí puede crecer el té.', fa: 'یک پلهٔ هموار در دامنهٔ تپه. حالا چای این جا می‌روید!' },
      wrong: { en: 'Not here. Terraces go on the hill slope below Mount Fuji, next to the mountains.', es: 'Aquí no. Las terrazas van en la ladera debajo del monte Fuji, junto a las montañas.', fa: 'این جا نه. زینه‌ها در دامنهٔ تپه زیر کوه فوجی، کنار کوه‌ها می‌روند.' },
      wrongBy: [
        { x: 16, y: 3, w: 16, h: 18, t: { en: 'This land is already flat! Do not cut steps here. The flat plain is for rice fields and cities.', es: '¡Esta tierra ya es plana! No hagas escalones aquí. La llanura plana es para arrozales y ciudades.', fa: 'این زمین از قبل هموار است! این جا پله نکن. دشت هموار برای شالیزارها و شهرها است.' } },
        { x: 1, y: 1, w: 15, h: 20, t: { en: 'Too high, cold and dry out here in the west. Tea needs rain on warm hills near the sea.', es: 'Aquí en el oeste es demasiado alto, frío y seco. El té necesita lluvia en colinas tibias cerca del mar.', fa: 'این جا در غرب خیلی بلند، سرد و خشک است. چای باران روی تپه‌های گرم نزدیک بحر را لازم دارد.' } }
      ],
      done: { en: 'The tea terraces are built! In Japan and China, farmers turn steep hills into flat steps. Flat land is so precious that people save it for rice and cities.', es: '¡Las terrazas de té están listas! En Japón y China, los agricultores convierten las colinas empinadas en escalones planos. La tierra plana es tan valiosa que la guardan para el arroz y las ciudades.', fa: 'زینه‌های چای ساخته شد! در جاپان و چین، دهقانان تپه‌های سراشیب را پله‌های هموار می‌سازند. زمین هموار آن‌قدر قیمتی است که مردم آن را برای برنج و شهرها نگه می‌دارند.' } }
  ],
  /* planting teaches the land: rice only on the flat, wet plain by the rivers; tea only on the hill slopes and terraces */
  plant: {
    basket: [20, 8],
    ask: { en: 'Rice needs flat land by the river, where water can stand. Tea grows on hills, where the rain runs off.', es: 'El arroz necesita tierra plana junto al río, donde el agua se queda. El té crece en las colinas, donde la lluvia baja.', fa: 'برنج زمین هموار کنار دریا را لازم دارد، جایی که آب می‌ماند. چای روی تپه‌ها می‌روید، جایی که باران جاری می‌شود.' },
    crops: [
      { id: 'rice', icon: '🌾', name: { en: 'rice', es: 'arroz', fa: 'برنج' }, zones: [{ x: 16, y: 13, w: 16, h: 2 }, { x: 16, y: 17, w: 16, h: 4 }],
        ok: { en: 'Rice on the flat, wet plain by the Yangtze. It will grow!', es: 'Arroz en la llanura plana y húmeda junto al Yangtsé. ¡Va a crecer!', fa: 'برنج در دشت هموار و تر کنار یانگتسی. می‌روید!' },
        no: { en: 'Rice needs flat, wet land by the river: the paddies by the Yangtze.', es: 'El arroz necesita tierra plana y húmeda junto al río: los arrozales junto al Yangtsé.', fa: 'برنج زمین هموار و تر کنار دریا را لازم دارد: شالیزارهای کنار یانگتسی.' },
        noBy: [
          { x: 1, y: 1, w: 15, h: 9, t: { en: 'Too dry: this is the Gobi Desert. Rice needs lots of water.', es: 'Demasiado seco: este es el desierto de Gobi. El arroz necesita mucha agua.', fa: 'خیلی خشک: این دشت گوبی است. برنج آب زیاد لازم دارد.' } },
          { x: 1, y: 10, w: 15, h: 11, t: { en: 'Too high and cold: this is the Tibetan Plateau. Rice grows down on the warm plain.', es: 'Demasiado alto y frío: esta es la meseta del Tíbet. El arroz crece abajo, en la llanura tibia.', fa: 'خیلی بلند و سرد: این فلات تبت است. برنج پایین، در دشت گرم می‌روید.' } },
          { x: 16, y: 3, w: 16, h: 3, t: { en: 'The north is cooler and drier. Farmers here grow wheat. Rice grows in the wet south, by the Yangtze.', es: 'El norte es más fresco y seco. Aquí los agricultores siembran trigo. El arroz crece en el sur húmedo, junto al Yangtsé.', fa: 'شمال سردتر و خشک‌تر است. دهقانان این جا گندم می‌کارند. برنج در جنوب تر، کنار یانگتسی می‌روید.' } },
          { x: 38, y: 2, w: 3, h: 7, t: { en: 'Too steep: on a hill slope the water runs away. Rice needs flat land where water can stand.', es: 'Demasiado empinado: en una ladera el agua se va. El arroz necesita tierra plana donde el agua se quede.', fa: 'خیلی سراشیب: در دامنهٔ تپه آب می‌رود. برنج زمین هموار لازم دارد که آب در آن بماند.' } }
        ] },
      { id: 'tea', icon: '🍵', name: { en: 'tea', es: 'té', fa: 'چای' }, zones: [{ x: 39, y: 4, w: 2, h: 4 }], tiles: 't',
        ok: { en: 'Tea on the hill slope: the rain runs off and the roots stay dry. It will grow!', es: 'Té en la ladera: la lluvia baja y las raíces quedan secas. ¡Va a crecer!', fa: 'چای در دامنهٔ تپه: باران جاری می‌شود و ریشه‌ها خشک می‌مانند. می‌روید!' },
        no: { en: 'Tea grows on hill slopes and terraces, like the slope below Mount Fuji.', es: 'El té crece en laderas y terrazas, como la ladera debajo del monte Fuji.', fa: 'چای در دامنه‌های تپه و زینه‌ها می‌روید، مثل دامنهٔ زیر کوه فوجی.' },
        noBy: [
          { x: 1, y: 1, w: 15, h: 20, t: { en: 'Too high, cold and dry out here in the west. Tea needs rain on warm hills.', es: 'Aquí en el oeste es demasiado alto, frío y seco. El té necesita lluvia en colinas tibias.', fa: 'این جا در غرب خیلی بلند، سرد و خشک است. چای باران روی تپه‌های گرم لازم دارد.' } },
          { x: 16, y: 3, w: 16, h: 18, t: { en: 'On the flat plain the water stands, and tea roots get too wet. The flat land is for rice.', es: 'En la llanura plana el agua se queda, y las raíces del té se mojan demasiado. La tierra plana es para el arroz.', fa: 'در دشت هموار آب می‌ماند و ریشه‌های چای خیلی تر می‌شوند. زمین هموار برای برنج است.' } }
        ] }
    ]
  },

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [18, 3], at: [6, 16], decor: 'fossil',
      clue: { en: 'Rivers start high in the west. Find where the southern river begins. Stand just south of its western end.', es: 'Los ríos nacen en lo alto del oeste. Busca dónde empieza el río del sur. Párate justo al sur de su punta oeste.', fa: 'دریاها از بلندی غرب شروع می‌شوند. جای شروع دریای جنوبی را پیدا کن. درست جنوبِ سر غربی آن بایست.' },
      text: { en: 'The Yangtze starts here on the high plateau. A fossil shell shows this land was once under the sea!', es: 'El Yangtsé nace aquí, en la meseta alta. ¡Una concha fósil muestra que esta tierra estuvo bajo el mar!', fa: 'یانگتسی این‌جا در فلات بلند شروع می‌شود. یک فسیل صدف نشان می‌دهد این زمین روزی زیر بحر بود!' } },
    { clueAt: [39, 11], at: [38, 19], decor: 'shell',
      clue: { en: 'From this note, walk 8 steps south, then 1 step west. Something is hidden there.', es: 'Desde esta nota, camina 8 pasos al sur y luego 1 paso al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۸ قدم به جنوب برو، بعد ۱ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'A sea shell was on the shore! Japan is a chain of islands. No place is far from the sea.', es: '¡Había una concha en la orilla! Japón es una cadena de islas. Ningún lugar está lejos del mar.', fa: 'یک صدف در ساحل بود! جاپان زنجیره‌ای از جزیره‌ها است. هیچ جا از بحر دور نیست.' } }
  ],
  // only the Monsoon Cloak (Episode 6.3) walks through the wall of heavy rain into the little mountain valley in Japan
  secret: { tool: 'cloak', at: [45, 12],
    text: { en: 'The Monsoon Cloak kept you dry in the heavy rain! In June and July, Japan has a rainy season called tsuyu, the "plum rain". This rain fills the rice paddies.',
      es: '¡La Capa del monzón te mantuvo seco en la lluvia fuerte! En junio y julio, Japón tiene una temporada de lluvias llamada tsuyu, la "lluvia de las ciruelas". Esta lluvia llena los arrozales.',
      fa: 'بارانی موسمی تو را در باران زیاد خشک نگه داشت! در جون و جولای، جاپان یک فصل باران به نام تسویو، یعنی «باران آلو»، دارد. این باران شالیزارها را پر می‌کند.' } },

  words: {
    plateau: { en: 'a large area of high, mostly flat land', es: 'una gran zona de tierra alta y casi plana', fa: 'یک ساحهٔ بزرگ از زمین بلند و تقریباً هموار' },
    plain: { en: 'wide, flat, low land that is easy to farm and build on', es: 'tierra ancha, plana y baja, fácil de cultivar y de construir', fa: 'زمین پهن، هموار و پست که زراعت و ساختمان در آن آسان است' },
    silt: { en: 'fine bits of soil that a river carries and drops; it makes rich farmland', es: 'pedacitos finos de tierra que un río lleva y deja; hacen tierra fértil', fa: 'ذره‌های نرم خاک که دریا با خود می‌برد و می‌گذارد؛ زمین زراعتی را حاصلخیز می‌کند' },
    'population density': { en: 'how many people live in a certain amount of land, like one square mile', es: 'cuántas personas viven en cierta cantidad de tierra, como una milla cuadrada', fa: 'اینکه در یک اندازهٔ معین زمین، مثلاً یک میل مربع، چند نفر زندگی می‌کنند' },
    megacity: { en: 'a city region with more than 10 million people', es: 'una zona urbana con más de 10 millones de personas', fa: 'یک ساحهٔ شهری با بیشتر از ۱۰ میلیون نفر' },
    archipelago: { en: 'a chain or group of islands', es: 'una cadena o grupo de islas', fa: 'یک زنجیره یا گروه از جزیره‌ها' },
    terrace: { en: 'a flat step cut into a hillside so farmers can grow crops', es: 'un escalón plano cortado en una ladera para poder cultivar', fa: 'یک زینهٔ هموار که در دامنهٔ کوه کنده می‌شود تا دهقان کشت کند' },
    tsunami: { en: 'a giant ocean wave, often caused by an earthquake under the sea', es: 'una ola gigante del océano, muchas veces causada por un terremoto bajo el mar', fa: 'یک موج بسیار بزرگ بحر که اکثراً از زلزلهٔ زیر بحر پیدا می‌شود' },
    'ring of fire': { en: 'a ring of volcanoes and earthquakes around the Pacific Ocean', es: 'un anillo de volcanes y terremotos alrededor del océano Pacífico', fa: 'یک حلقه از آتشفشان‌ها و زلزله‌ها دور بحر آرام' }
  },

  npcs: [
    {
      x: 8, y: 13,
      name: { en: 'Dolma', es: 'Dolma', fa: 'دولما' },
      role: { en: 'Weather scientist on the plateau', es: 'Científica del clima en la meseta', fa: 'دانشمند هواشناسی در فلات' },
      look: { skin: 2, hair: '#15100c', shirt: '#b8332b', pants: '#3b3b55' },
      lines: [
        { en: 'Hello! I measure weather on the Tibetan [[plateau|Plateau]], "the roof of the world."', es: '¡Hola! Yo mido el clima en la [[plateau|meseta]] del Tíbet, "el techo del mundo".', fa: 'سلام! من در [[plateau|فلات]] تبت، «بام دنیا»، هوا را اندازه می‌گیرم.' },
        { en: 'South are the Himalaya, Earth\'s highest mountains. North is the dry, rocky Gobi Desert.', es: 'Al sur están los Himalaya, las montañas más altas de la Tierra. Al norte está el desierto de Gobi, seco y rocoso.', fa: 'در جنوب همالیا است، بلندترین کوه‌های زمین. در شمال دشت خشک و سنگلاخ گوبی است.' },
        { en: 'The Yellow River and the Yangtze begin here. Both flow east to the sea.', es: 'El río Amarillo y el Yangtsé nacen aquí. Los dos corren al este hasta el mar.', fa: 'دریای زرد و یانگتسی از این‌جا شروع می‌شوند. هر دو به شرق تا بحر می‌روند.' },
        { en: 'Few live in the cold, dry west. The east, near water, has high [[population density|population density]].', es: 'Poca gente vive en el oeste frío y seco. El este, cerca del agua, tiene alta [[population density|densidad de población]].', fa: 'مردم کم در غرب سرد و خشک زندگی می‌کنند. شرق، نزدیک آب، [[population density|تراکم نفوس]] بلند دارد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where do most of China\'s people live?', es: '¿Dónde vive la mayoría de la gente de China?', fa: 'بیشتر مردم چین کجا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'In the east, on flat land near water', es: 'En el este, en tierra plana cerca del agua', fa: 'در شرق، روی زمین هموار نزدیک آب' },
            why: { en: 'Flat land with water is easy to farm and build on, so people crowd there.', es: 'La tierra plana con agua es fácil de cultivar y construir, así que la gente se junta allí.', fa: 'زمین هموار با آب برای زراعت و ساختمان آسان است، پس مردم آنجا جمع می‌شوند.' } },
          { t: { en: 'In the west, up near the high mountains', es: 'En el oeste, arriba cerca de las montañas altas', fa: 'در غرب، بالا نزدیک کوه‌های بلند' },
            why: { en: 'The west is cold, high and dry. Few people live there.', es: 'El oeste es frío, alto y seco. Poca gente vive allí.', fa: 'غرب سرد، بلند و خشک است. مردم کم آنجا زندگی می‌کنند.' } },
          { t: { en: 'Out in the dry, rocky Gobi Desert', es: 'En el desierto de Gobi, seco y rocoso', fa: 'در دشت خشک و سنگلاخ گوبی' },
            why: { en: 'A desert has little water for farms, so few people live there.', es: 'Un desierto tiene poca agua para cultivar, así que vive poca gente allí.', fa: 'دشت خشک آب کم برای زراعت دارد، پس مردم کم آنجا زندگی می‌کنند.' } }
        ]
      }
    },
    {
      x: 25, y: 18,
      name: { en: 'Li Wei', es: 'Li Wei', fa: 'لی وی' },
      role: { en: 'Rice farmer', es: 'Agricultor de arroz', fa: 'دهقان برنج' },
      look: { skin: 1, hair: '#141414', shirt: '#3c78c8', pants: '#5a4630' },
      lines: [
        { en: 'Welcome! This [[plain|plain]] is flat, easy to farm and build on. Rice needs wet fields.', es: '¡Bienvenido! Esta [[plain|llanura]] es plana, fácil de cultivar y de construir. El arroz necesita campos mojados.', fa: 'خوش آمدی! این [[plain|دشت هموار]] صاف است، برای زراعت و ساختمان آسان. برنج به کشتزار تر ضرورت دارد.' },
        { en: 'The Yangtze, right here, is Asia\'s longest river. The Yellow River carries yellow-brown [[silt|silt]].', es: 'El Yangtsé, aquí mismo, es el río más largo de Asia. El río Amarillo lleva [[silt|limo]] café amarillento.', fa: 'یانگتسی، همین‌جا، درازترین دریای آسیا است. دریای زرد [[silt|لای]] زرد و نصواری با خود دارد.' },
        { en: 'Silt makes rich soil. But floods washed away villages, so farmers called it "China\'s Sorrow."', es: 'El limo hace tierra fértil. Pero las inundaciones se llevaban pueblos, y lo llamaron "la Tristeza de China".', fa: 'لای خاک را حاصلخیز می‌کند. اما سیلاب قریه‌ها را می‌برد، پس دهقانان آن را «غم چین» گفتند.' },
        { en: 'Shanghai grew where the Yangtze meets the sea. This [[megacity|megacity]] has over 20 million people!', es: 'Shanghái creció donde el Yangtsé llega al mar. ¡Esta [[megacity|megaciudad]] tiene más de 20 millones de personas!', fa: 'شانگهای جایی رشد کرد که یانگتسی به بحر می‌رسد. این [[megacity|ابرشهر]] بیشتر از ۲۰ میلیون نفر دارد!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did farmers long ago call the Yellow River "China\'s Sorrow"?', es: '¿Por qué los agricultores de antes llamaban al río Amarillo "la Tristeza de China"?', fa: 'چرا دهقانان در گذشته دریای زرد را «غم چین» می‌گفتند؟' },
        choices: [
          { ok: true, t: { en: 'Its floods could wash away villages', es: 'Sus inundaciones arrasaban pueblos', fa: 'سیلابش قریه‌ها را می‌برد' },
            why: { en: 'The river gave rich soil, but its floods took homes and lives.', es: 'El río daba tierra fértil, pero sus inundaciones se llevaban casas y vidas.', fa: 'دریا خاک حاصلخیز می‌داد، اما سیلابش خانه‌ها و جان‌ها را می‌گرفت.' } },
          { t: { en: 'It dried up completely every summer', es: 'Se secaba por completo cada verano', fa: 'هر تابستان کاملاً خشک می‌شد' },
            why: { en: 'The problem was too much water in floods, not too little.', es: 'El problema era demasiada agua en las inundaciones, no poca.', fa: 'مشکل آب زیاد در سیلاب بود، نه آب کم.' } },
          { t: { en: 'Its water was too salty to drink', es: 'Su agua era demasiado salada para tomar', fa: 'آبش برای نوشیدن خیلی شور بود' },
            why: { en: 'It is a fresh-water river. Its yellow color comes from silt.', es: 'Es un río de agua dulce. Su color amarillo viene del limo.', fa: 'این دریای آب شیرین است. رنگ زردش از لای است.' } }
        ]
      }
    },
    {
      x: 40, y: 6,
      name: { en: 'Yuki', es: 'Yuki', fa: 'یوکی' },
      role: { en: 'Earthquake engineer', es: 'Ingeniera de terremotos', fa: 'انجنیر زلزله' },
      look: { skin: 0, hair: '#1a1a1a', shirt: '#e8e2d0', pants: '#2f4a6e' },
      lines: [
        { en: 'Welcome! Japan is an [[archipelago|archipelago]] of four main islands. Three-quarters of it is mountains.', es: '¡Bienvenido! Japón es un [[archipelago|archipiélago]] de cuatro islas principales. Tres cuartas partes son montañas.', fa: 'خوش آمدی! جاپان یک [[archipelago|مجمع‌الجزایر]] با چهار جزیرهٔ اصلی است. سه حصه از چهار حصهٔ آن کوه است.' },
        { en: 'People crowd flat coasts. Tokyo, with 37 million, builds up. Farmers cut [[terrace|terraces]] into hills.', es: 'La gente llena las costas planas. Tokio, con 37 millones, crece hacia arriba. Los agricultores cortan [[terrace|terrazas]] en las colinas.', fa: 'مردم ساحل‌های هموار را پر می‌کنند. توکیو، با ۳۷ میلیون نفر، بلند ساخته می‌شود. دهقانان در تپه‌ها [[terrace|زمین‌های زینه‌ای]] می‌سازند.' },
        { en: 'Japan is on the [[ring of fire|Ring of Fire]]. It has many earthquakes and volcanoes, like Fuji.', es: 'Japón está en el [[ring of fire|Cinturón de Fuego]]. Tiene muchos terremotos y volcanes, como el Fuji.', fa: 'جاپان روی [[ring of fire|حلقهٔ آتش]] است. زلزله و آتشفشان زیاد دارد، مثل فوجی.' },
        { en: 'My tall buildings sway instead of snapping. Quakes under the sea can cause a [[tsunami|tsunami]].', es: 'Mis edificios altos se mecen en vez de romperse. Un terremoto bajo el mar puede causar un [[tsunami|tsunami]].', fa: 'تعمیرهای بلند من تاب می‌خورند، نمی‌شکنند. زلزلهٔ زیر بحر می‌تواند [[tsunami|سونامی]] بسازد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do most people in Japan live on narrow strips near the coast?', es: '¿Por qué la mayoría de la gente en Japón vive en franjas angostas cerca de la costa?', fa: 'چرا بیشتر مردم جاپان روی نوارهای باریک نزدیک ساحل زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Most of Japan is steep mountains', es: 'Casi todo Japón es de montañas empinadas', fa: 'بیشتر جاپان کوه‌های سراشیب است' },
            why: { en: 'The flat land is mostly by the coast, so the people are there too.', es: 'La tierra plana está casi toda en la costa, así que la gente también.', fa: 'زمین هموار بیشتر کنار ساحل است، پس مردم هم آنجا هستند.' } },
          { t: { en: 'Inland Japan is a dry desert', es: 'El interior de Japón es un desierto seco', fa: 'داخل جاپان دشت خشک است' },
            why: { en: 'Japan\'s inland is mountains and forests, not desert.', es: 'El interior de Japón es de montañas y bosques, no de desierto.', fa: 'داخل جاپان کوه و جنگل است، نه دشت خشک.' } },
          { t: { en: 'A law makes people live by ports', es: 'Una ley obliga a vivir junto a los puertos', fa: 'قانون مردم را مجبور به زندگی کنار بندر می‌کند' },
            why: { en: 'No law does that. The land itself pushes people to the flat coast.', es: 'Ninguna ley hace eso. La tierra misma empuja a la gente a la costa plana.', fa: 'هیچ قانونی چنین نیست. خود زمین مردم را به ساحل هموار می‌کشاند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 22, y: 8, text: { en: 'YELLOW RIVER (Huang He) · Its [[silt|silt]] makes rich farmland. Its floods earned the name "China\'s Sorrow."', es: 'RÍO AMARILLO (Huang He) · Su [[silt|limo]] hace tierra fértil. Sus inundaciones le dieron el nombre de "la Tristeza de China".', fa: 'دریای زرد (هوانگ هه) · [[silt|لای]] آن زمین را حاصلخیز می‌کند. سیلابش نام «غم چین» را به آن داد.' } },
    { x: 31, y: 8, text: { en: 'FERRY PIER · East across the sea: Japan. West: the river plain, high mountains and Gobi Desert.', es: 'MUELLE DEL FERRY · Al este, cruzando el mar: Japón. Al oeste: la llanura de los ríos, las montañas altas y el desierto de Gobi.', fa: 'اسکلهٔ کشتی · شرق، آن طرف بحر: جاپان. غرب: دشت دریاها، کوه‌های بلند و دشت گوبی.' } }
  ],

  /* the quest: Teacher Zhou Lan (gold !) -> Batu the camel herder in the Gobi -> follow the Ink Thief's riddles to the plateau, the desert and the islands, then catch it -> back to Zhou Lan */
  quest: {
    stat: 'loc',
    title: { en: 'The Stolen River Map', es: 'El mapa de ríos robado', fa: 'نقشهٔ دزدی‌شدهٔ دریاها' },
    giver: {
      x: 19, y: 17,
      remember: { ep: '6.3', t: { en: 'Hello, traveler! My friend Teacher Karim wrote to me. You got his village census sheet back from the Ink Thief. Now the planners can see his 120 children!', es: '¡Hola, viajero! Mi amigo el Maestro Karim me escribió. Recuperaste la hoja del censo de su pueblo del Ladrón de Tinta. ¡Ahora los planificadores pueden ver a sus 120 niños!', fa: 'سلام، مسافر! دوستم معلم کریم برایم نامه نوشت. تو ورق سرشماری قریهٔ او را از دزد رنگ پس گرفتی. حالا برنامه‌ریزها ۱۲۰ طفلِ او را می‌بینند!' } },
      name: { en: 'Teacher Zhou Lan', es: 'Maestra Zhou Lan', fa: 'معلم ژو لان' },
      role: { en: 'Village school teacher', es: 'Maestra de la escuela del pueblo', fa: 'معلم مکتب ده' },
      look: { skin: 1, hair: '#1c1612', shirt: '#2e8b7a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Help, traveler! An Ink Thief grabbed my big river map!', es: '¡Ayuda, viajero! ¡Un Ladrón de Tinta se llevó mi gran mapa de ríos!', fa: 'کمک، مسافر! یک دزد رنگ نقشهٔ بزرگ دریاهایم را گرفت!' },
        { en: 'It shows China\'s two great rivers. My students need it tomorrow.', es: 'Muestra los dos grandes ríos de China. Mis estudiantes lo necesitan mañana.', fa: 'این نقشه دو دریای بزرگ چین را نشان می‌دهد. شاگردانم فردا به آن ضرورت دارند.' },
        { en: 'Batu the camel herder saw the thief. He is in the Gobi Desert, far north-west.', es: 'Batu, el pastor de camellos, vio al ladrón. Está en el desierto de Gobi, lejos al noroeste.', fa: 'باتو، شترچران، دزد را دید. او در دشت گوبی است، دور در شمال غرب.' }
      ],
      wait: { en: 'Batu is in the Gobi. Cross the bridge north, then go west and north.', es: 'Batu está en el Gobi. Cruza el puente al norte y luego ve al oeste y al norte.', fa: 'باتو در گوبی است. از پل به شمال برو، بعد به غرب و شمال برو.' },
      thanks: { en: 'My river map! Now my students can follow both rivers east to the sea.', es: '¡Mi mapa de ríos! Ahora mis estudiantes pueden seguir los dos ríos al este hasta el mar.', fa: 'نقشهٔ دریاهای من! حالا شاگردانم هر دو دریا را به شرق تا بحر دنبال کرده می‌توانند.' }
    },
    contact: {
      x: 6, y: 4,
      name: { en: 'Batu', es: 'Batu', fa: 'باتو' },
      role: { en: 'Camel herder', es: 'Pastor de camellos', fa: 'شترچران' },
      look: { skin: 3, hair: '#20180f', shirt: '#a0522d', pants: '#4a3b2a', hat: '#6b4a2a' },
      lines: [
        { en: 'Yes, I saw an inky thing with a map! It ran past my camels, laughing!', es: '¡Sí, vi una cosa de tinta con un mapa! ¡Pasó corriendo y riendo junto a mis camellos!', fa: 'بله، یک چیز رنگی را با یک نقشه دیدم! خندان از کنار شترهایم دوید!' },
        { en: 'It tore the map into 3 pieces and hid them all over the land!', es: '¡Rompió el mapa en 3 pedazos y los escondió por todas partes!', fa: 'نقشه را سه تکه کرد و تکه‌ها را همه جا پنهان کرد!' },
        { en: 'Listen to its riddles, walk to the right places, then catch the thief!', es: '¡Escucha sus acertijos, camina a los lugares correctos y atrapa al ladrón!', fa: 'به چیستان‌هایش گوش بده، به جاهای درست برو، بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [44, 19],
      hops: [[41, 10], [39, 18]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Drip, drip! I tore the river map into 3 pieces and hid them. Follow my riddles!', es: '¡Plic, plic! Rompí el mapa de ríos en 3 pedazos y los escondí. ¡Sigue mis acertijos!', fa: 'چک، چک! نقشهٔ دریاها را سه تکه کردم و پنهان کردم. چیستان‌هایم را دنبال کن!' },
      clues: [
        { t: { en: 'Piece 1 is where both great rivers begin, where snow melts: the high [[plateau|plateau]] in the south-west.', es: 'El pedazo 1 está donde nacen los dos grandes ríos, donde se derrite la nieve: la [[plateau|meseta]] alta del suroeste.', fa: 'تکهٔ ۱ جایی است که هر دو دریای بزرگ شروع می‌شوند، جایی که برف آب می‌شود: [[plateau|فلات]] بلند جنوب غرب.' },
          zones: [{ x: 1, y: 11, w: 15, h: 10 }],
          noBy: [{ x: 16, y: 13, w: 16, h: 8, t: { en: 'Here the river is wide and slow. It is near the end of its trip to the sea. Rivers begin far up in the west.', es: 'Aquí el río es ancho y lento. Está cerca del final de su viaje al mar. Los ríos nacen lejos, arriba en el oeste.', fa: 'این جا دریا پهن و آرام است. نزدیک آخر سفرش به بحر است. دریاها دور در بلندی‌های غرب شروع می‌شوند.' } }],
          found: { en: 'Piece 1! Both great rivers start up here in the high west, then flow east.', es: '¡Pedazo 1! Los dos grandes ríos nacen aquí arriba, en el oeste alto, y luego corren al este.', fa: 'تکهٔ ۱! هر دو دریای بزرگ این‌جا در غرب بلند شروع می‌شوند، بعد به شرق می‌روند.' } },
        { t: { en: 'Piece 2 is where few people live, because it is too dry to grow food. Find the sand.', es: 'El pedazo 2 está donde vive poca gente, porque es muy seco para cultivar. Busca la arena.', fa: 'تکهٔ ۲ جایی است که مردم کم زندگی می‌کنند، چون برای کشت خیلی خشک است. ریگ را پیدا کن.' },
          zones: [{ x: 1, y: 1, w: 15, h: 8 }],
          noBy: [{ x: 16, y: 3, w: 16, h: 3, t: { en: 'These are wheat fields. There is enough water to farm here, so many people live here. Look for land that is too dry for any farm.', es: 'Estos son campos de trigo. Aquí hay agua para cultivar, así que vive mucha gente. Busca tierra demasiado seca para cualquier granja.', fa: 'این‌ها زمین‌های گندم است. این جا آب برای زراعت هست، پس مردم زیاد زندگی می‌کنند. زمینی را پیدا کن که برای هیچ کشتی آب ندارد.' } }],
          found: { en: 'Piece 2! The Gobi gets little rain. Without water, farms fail. Few people live there.', es: '¡Pedazo 2! El Gobi recibe poca lluvia. Sin agua no hay cultivos. Vive poca gente ahí.', fa: 'تکهٔ ۲! گوبی باران کم دارد. بدون آب کشت نمی‌شود. مردم کم آن‌جا زندگی می‌کنند.' } },
        { t: { en: 'Piece 3 is on an [[archipelago|archipelago]]: islands across the sea, with a snowy volcano.', es: 'El pedazo 3 está en un [[archipelago|archipiélago]]: islas al otro lado del mar, con un volcán nevado.', fa: 'تکهٔ ۳ در یک [[archipelago|مجمع‌الجزایر]] است: جزیره‌ها آن طرف بحر، با یک آتشفشان برفی.' },
          zones: [{ x: 38, y: 1, w: 9, h: 20 }],
          noBy: [{ x: 26, y: 10, w: 6, h: 5, t: { en: 'This big city is on the mainland of China, not on an island. Take the ferry pier east across the sea.', es: 'Esta ciudad grande está en el continente de China, no en una isla. Toma el muelle del ferry al este, cruzando el mar.', fa: 'این شهر بزرگ روی خشکهٔ چین است، نه روی جزیره. از اسکلهٔ کشتی به طرف شرق از بحر بگذر.' } }],
          found: { en: 'Piece 3 was in Japan! Mountains leave little flat land, so people crowd the coast.', es: '¡El pedazo 3 estaba en Japón! Las montañas dejan poca tierra plana, así que la gente llena la costa.', fa: 'تکهٔ ۳ در جاپان بود! کوه‌ها زمین هموار کم می‌گذارند، پس مردم در ساحل جمع می‌شوند.' } }
      ],
      win: { en: 'Got you! The thief drops the 3 pieces and runs off. The river map is whole again!', es: '¡Te atrapé! El ladrón suelta los 3 pedazos y huye. ¡El mapa de ríos está completo otra vez!', fa: 'گرفتمت! دزد سه تکه را می‌اندازد و فرار می‌کند. نقشهٔ دریاها دوباره کامل است!' },
      item: { icon: '🗺️', name: { en: "Teacher Zhou's river map", es: 'El mapa de ríos de la maestra Zhou', fa: 'نقشهٔ دریاهای معلم ژو' } }
    }
  },

  scraps: [[2, 8], [23, 1], [45, 17]],
  smudges: [[8, 3], [24, 13], [39, 13]],

  challenge: {
    at: [26, 8],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // a marked area for each group: China by the Gobi desert and the Great Wall, Japan on the island under Mount Fuji, both in the rice paddies of the river plain
    zones: [{ bin: 'china', x: 12, y: 3, w: 4, h: 2 }, { bin: 'japan', x: 38, y: 2, w: 3, h: 2 }, { bin: 'both', x: 16, y: 13, w: 4, h: 2 }],
    stat: 'pla',
    title: { en: 'China, Japan or both?', es: '¿China, Japón o los dos?', fa: 'چین، جاپان یا هر دو؟' },
    intro: { en: 'The Grump tore the labels off the map. Put each card where it belongs: China, Japan, or both.',
      es: 'El Gruñón arrancó las etiquetas del mapa. Pon cada tarjeta donde va: China, Japón o los dos.',
      fa: 'غرغرو نام‌ها را از نقشه کند. هر کارت را جای درستش بگذار: چین، جاپان یا هر دو.' },
    bins: [
      { id: 'china', icon: '🏞️', label: { en: 'China', es: 'China', fa: 'چین' }, sub: { en: 'huge mainland', es: 'gran territorio continental', fa: 'خشکهٔ بسیار بزرگ' } },
      { id: 'japan', icon: '🗾', label: { en: 'Japan', es: 'Japón', fa: 'جاپان' }, sub: { en: 'chain of islands', es: 'cadena de islas', fa: 'زنجیرهٔ جزیره‌ها' } },
      { id: 'both', icon: '🍚', label: { en: 'Both', es: 'Los dos', fa: 'هر دو' }, sub: { en: 'true for China and Japan', es: 'cierto para China y Japón', fa: 'برای چین و جاپان درست است' } }
    ],
    items: [
      { bin: 'china', t: { en: 'Gobi Desert', es: 'Desierto de Gobi', fa: 'دشت گوبی' }, why: { en: 'The Gobi Desert is in northern China (and Mongolia). Japan has no big desert.', es: 'El desierto de Gobi está en el norte de China (y en Mongolia). Japón no tiene un gran desierto.', fa: 'دشت گوبی در شمال چین (و مغولستان) است. جاپان دشت خشک بزرگ ندارد.' } },
      { bin: 'china', t: { en: 'Himalaya and the Tibetan Plateau', es: 'Los Himalaya y la meseta del Tíbet', fa: 'همالیا و فلات تبت' }, why: { en: 'The Himalaya and the Tibetan Plateau are in western China, far from Japan.', es: 'Los Himalaya y la meseta del Tíbet están en el oeste de China, lejos de Japón.', fa: 'همالیا و فلات تبت در غرب چین هستند، دور از جاپان.' } },
      { bin: 'china', t: { en: 'Yangtze, the longest river in Asia', es: 'El Yangtsé, el río más largo de Asia', fa: 'یانگتسی، درازترین دریای آسیا' }, why: { en: 'The Yangtze flows across China to the sea. Japan\'s rivers are short.', es: 'El Yangtsé cruza China hasta el mar. Los ríos de Japón son cortos.', fa: 'یانگتسی از میان چین تا بحر می‌رود. دریاهای جاپان کوتاه هستند.' } },
      { bin: 'japan', t: { en: 'Four main islands', es: 'Cuatro islas principales', fa: 'چهار جزیرهٔ اصلی' }, why: { en: 'Japan is an archipelago with four main islands. China is mostly mainland.', es: 'Japón es un archipiélago con cuatro islas principales. China es casi todo continente.', fa: 'جاپان مجمع‌الجزایری با چهار جزیرهٔ اصلی است. چین بیشتر خشکه است.' } },
      { bin: 'japan', t: { en: 'Mount Fuji, a snowy volcano', es: 'El monte Fuji, un volcán con nieve', fa: 'کوه فوجی، یک آتشفشان برفی' }, why: { en: 'Mount Fuji is in Japan, near Tokyo.', es: 'El monte Fuji está en Japón, cerca de Tokio.', fa: 'کوه فوجی در جاپان، نزدیک توکیو است.' } },
      { bin: 'japan', t: { en: 'On the Ring of Fire: many volcanoes and tsunamis', es: 'En el Cinturón de Fuego: muchos volcanes y tsunamis', fa: 'روی حلقهٔ آتش: آتشفشان‌ها و سونامی‌های زیاد' }, why: { en: 'Japan sits on the Ring of Fire around the Pacific. That brings volcanoes, earthquakes and tsunamis.', es: 'Japón está en el Cinturón de Fuego del Pacífico. Eso trae volcanes, terremotos y tsunamis.', fa: 'جاپان روی حلقهٔ آتش دور بحر آرام است. این آتشفشان، زلزله و سونامی می‌آورد.' } },
      { bin: 'both', t: { en: 'Rice farming for more than 2,000 years', es: 'Cultivo de arroz desde hace más de 2,000 años', fa: 'کشت برنج از بیشتر از ۲۰۰۰ سال پیش' }, why: { en: 'Rice has been grown in China and in Japan for thousands of years.', es: 'Se cultiva arroz en China y en Japón desde hace miles de años.', fa: 'برنج هزاران سال است که در چین و جاپان کشت می‌شود.' } },
      { bin: 'both', t: { en: 'Megacities with millions of people', es: 'Megaciudades con millones de personas', fa: 'ابرشهرهایی با میلیون‌ها نفر' }, why: { en: 'China has Shanghai and Japan has Tokyo. Both countries have megacities.', es: 'China tiene Shanghái y Japón tiene Tokio. Los dos países tienen megaciudades.', fa: 'چین شانگهای دارد و جاپان توکیو. هر دو کشور ابرشهر دارند.' } },
      { bin: 'both', t: { en: 'People crowd onto flat land near rivers and coasts', es: 'La gente se amontona en tierra plana cerca de ríos y costas', fa: 'مردم روی زمین هموار نزدیک دریاها و ساحل جمع می‌شوند' }, why: { en: 'In both countries, flat land near water holds most of the people.', es: 'En los dos países, la tierra plana cerca del agua tiene a la mayoría de la gente.', fa: 'در هر دو کشور، زمین هموار نزدیک آب بیشتر مردم را دارد.' } }
    ],
    success: { en: 'The labels are back on the map of East Asia!', es: '¡Las etiquetas volvieron al mapa del este de Asia!', fa: 'نام‌ها دوباره روی نقشهٔ شرق آسیا برگشتند!' }
  },

  boss: {
    at: [44, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Silt Grump', es: 'El Gruñón de Lodo', fa: 'غرغروی گِل' },
    appear: { en: 'The Silt Grump is hiding on the south coast of the islands!', es: '¡El Gruñón de Lodo se esconde en la costa sur de las islas!', fa: 'غرغروی گِل در ساحل جنوبی جزیره‌ها پنهان است!' },
    taunt: { en: 'Blub! I will bury every plain in mud. Where will your people live now?', es: '¡Glub! Voy a enterrar cada llanura en lodo. ¿Dónde vivirá tu gente ahora?', fa: 'بلوب! هر دشت را زیر گِل دفن می‌کنم. حالا مردمت کجا زندگی کنند؟' },
    win: { en: 'The mud washes away and the rivers run clear. Atlas page 7.1 floats into your hands!', es: 'El lodo se va y los ríos corren limpios. ¡La página 7.1 del atlas cae en tus manos!', fa: 'گِل شسته می‌شود و دریاها صاف جاری می‌شوند. صفحهٔ ۷.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What does population density measure?', es: '¿Qué mide la densidad de población?', fa: 'تراکم نفوس چه چیزی را اندازه می‌گیرد؟' },
        choices: [{ en: 'How many people live on each bit of land', es: 'Cuántas personas viven en cada pedazo de tierra', fa: 'در هر تکه زمین چند نفر زندگی می‌کنند' }, { en: 'How fast a big city grows each year', es: 'Qué tan rápido crece una gran ciudad cada año', fa: 'یک شهر بزرگ هر سال چقدر تیز رشد می‌کند' }, { en: 'The number of cities in a region', es: 'El número de ciudades de una región', fa: 'تعداد شهرهای یک منطقه' }, { en: 'The total number of people in one country', es: 'El número total de personas de un país', fa: 'تعداد کل مردم یک کشور' }], answer: 0,
        why: { en: 'Density tells how crowded a place is, like people per square mile.', es: 'La densidad dice qué tan lleno está un lugar, como personas por milla cuadrada.', fa: 'تراکم می‌گوید یک جا چقدر شلوغ است، مثل تعداد نفر در هر میل مربع.' } },
      { q: { en: 'Where do most of China\'s people live?', es: '¿Dónde vive la mayoría de la gente de China?', fa: 'بیشتر مردم چین کجا زندگی می‌کنند؟' },
        choices: [{ en: 'In the east, near rivers and the coast', es: 'En el este, cerca de los ríos y la costa', fa: 'در شرق، نزدیک دریاها و ساحل' }, { en: 'In the west, near the mountains and deserts', es: 'En el oeste, cerca de las montañas y desiertos', fa: 'در غرب، نزدیک کوه‌ها و دشت‌ها' }, { en: 'On the Tibetan Plateau', es: 'En la meseta del Tíbet', fa: 'روی فلات تبت' }, { en: 'Evenly spread across the whole country', es: 'Repartida por igual en todo el país', fa: 'برابر در تمام کشور پخش شده' }], answer: 0,
        why: { en: 'The east has flat river plains and coasts. The west is high and dry.', es: 'El este tiene llanuras de ríos y costas. El oeste es alto y seco.', fa: 'شرق دشت‌های هموار دریایی و ساحل دارد. غرب بلند و خشک است.' } },
      { q: { en: 'Why does the Yellow River look yellow-brown?', es: '¿Por qué el río Amarillo se ve café amarillento?', fa: 'چرا دریای زرد، زرد و نصواری معلوم می‌شود؟' },
        choices: [{ en: 'It carries a lot of silt', es: 'Lleva mucho limo', fa: 'لای زیاد با خود دارد' }, { en: 'It is polluted by oil', es: 'Está contaminado con petróleo', fa: 'با نفت آلوده شده' }, { en: 'It runs through a sandy desert the whole way', es: 'Pasa por un desierto de arena todo el camino', fa: 'تمام راه از دشت ریگی می‌گذرد' }, { en: 'Yellow fish live in it', es: 'Viven peces amarillos en él', fa: 'ماهی‌های زرد در آن زندگی می‌کنند' }], answer: 0,
        why: { en: 'Fine silt colors the water. When floods drop the silt, it makes rich farmland.', es: 'El limo fino le da color al agua. Cuando las inundaciones dejan el limo, hacen tierra fértil.', fa: 'لای نرم رنگ آب را می‌سازد. وقتی سیلاب لای را می‌گذارد، زمین حاصلخیز می‌شود.' } },
      { q: { en: 'Which is the longest river in Asia?', es: '¿Cuál es el río más largo de Asia?', fa: 'درازترین دریای آسیا کدام است؟' },
        choices: [{ en: 'The Yangtze', es: 'El Yangtsé', fa: 'یانگتسی' }, { en: 'The Yellow River', es: 'El río Amarillo', fa: 'دریای زرد' }, { en: 'The Ganges', es: 'El Ganges', fa: 'گنگا' }, { en: 'The Mekong', es: 'El Mekong', fa: 'میکانگ' }], answer: 0,
        why: { en: 'The Yangtze flows across China from the high west to the sea at Shanghai.', es: 'El Yangtsé cruza China desde el oeste alto hasta el mar en Shanghái.', fa: 'یانگتسی از غرب بلند چین تا بحر در شانگهای جریان دارد.' } },
      { q: { en: 'What is the Three Gorges Dam on the Yangtze known for?', es: '¿Por qué es famosa la presa de las Tres Gargantas en el Yangtsé?', fa: 'بند سه دره روی یانگتسی به چه مشهور است؟' },
        choices: [{ en: 'It is the world\'s largest hydroelectric dam', es: 'Es la presa hidroeléctrica más grande del mundo', fa: 'بزرگ‌ترین بند برق آبی جهان است' }, { en: 'It was built to stop invasions from the north', es: 'Se construyó para frenar invasiones del norte', fa: 'برای جلوگیری از حمله از شمال ساخته شد' }, { en: 'It is the oldest dam in China', es: 'Es la presa más antigua de China', fa: 'کهنه‌ترین بند چین است' }, { en: 'It blocks all ships from reaching the coast', es: 'Impide que los barcos lleguen a la costa', fa: 'همهٔ کشتی‌ها را از رسیدن به ساحل بند می‌کند' }], answer: 0,
        why: { en: 'Its turbines make power for millions of homes, and its locks lift ships past the wall. The Great Wall, not a dam, was built against invasions.', es: 'Sus turbinas dan electricidad a millones de casas y sus esclusas suben los barcos. La Gran Muralla, no una presa, se hizo contra las invasiones.', fa: 'توربین‌هایش برای میلیون‌ها خانه برق می‌سازند و کشتی‌ها را از دیوار بالا می‌برد. دیوار بزرگ چین، نه بند، برای جلوگیری از حمله ساخته شد.' } },
      { q: { en: 'What is a megacity?', es: '¿Qué es una megaciudad?', fa: 'ابرشهر چیست؟' },
        choices: [{ en: 'A city area of over 10 million people', es: 'Una zona urbana de más de 10 millones de personas', fa: 'ساحهٔ شهری با بیشتر از ۱۰ میلیون نفر' }, { en: 'The capital city of a country', es: 'La capital de un país', fa: 'پایتخت یک کشور' }, { en: 'A city that makes most of a country\'s goods', es: 'Una ciudad que hace casi todos los productos de un país', fa: 'شهری که بیشتر کالاهای یک کشور را می‌سازد' }, { en: 'Any city built near a river', es: 'Cualquier ciudad construida cerca de un río', fa: 'هر شهری که نزدیک دریا ساخته شده' }], answer: 0,
        why: { en: 'Shanghai and Tokyo are megacities. Each has well over 10 million people.', es: 'Shanghái y Tokio son megaciudades. Cada una tiene mucho más de 10 millones de personas.', fa: 'شانگهای و توکیو ابرشهر هستند. هر کدام خیلی بیشتر از ۱۰ میلیون نفر دارند.' } },
      { q: { en: 'Greater Tokyo has about 37 million people and very little flat land. What did builders do?', es: 'El Gran Tokio tiene unos 37 millones de personas y muy poca tierra plana. ¿Qué hicieron los constructores?', fa: 'توکیوی بزرگ حدود ۳۷ میلیون نفر و زمین هموار بسیار کم دارد. سازندگان چه کردند؟' },
        choices: [{ en: 'Built tall towers that go up, not out', es: 'Hicieron torres altas, hacia arriba', fa: 'تعمیرهای بلند ساختند، به طرف بالا' }, { en: 'Kept all buildings short and wide', es: 'Hicieron todos los edificios bajos y anchos', fa: 'همهٔ تعمیرها را کوتاه و پهن ساختند' }, { en: 'Put farms in the middle of the city', es: 'Pusieron granjas en el centro de la ciudad', fa: 'کشتزارها را در وسط شهر گذاشتند' }, { en: 'Moved the whole city to the mountains', es: 'Llevaron toda la ciudad a las montañas', fa: 'تمام شهر را به کوه‌ها بردند' }], answer: 0,
        why: { en: 'When flat land runs out, cities grow upward.', es: 'Cuando se acaba la tierra plana, las ciudades crecen hacia arriba.', fa: 'وقتی زمین هموار تمام می‌شود، شهرها به طرف بالا رشد می‌کنند.' } },
      { q: { en: 'Why are many tall buildings in Japan made to sway a little?', es: '¿Por qué muchos edificios altos de Japón se hacen para mecerse un poco?', fa: 'چرا بسیاری از تعمیرهای بلند جاپان طوری ساخته می‌شوند که کمی تاب بخورند؟' },
        choices: [{ en: 'To bend in an earthquake, not snap', es: 'Para doblarse en un terremoto, no romperse', fa: 'تا در زلزله خم شوند، نشکنند' }, { en: 'So their windows are cheaper to clean', es: 'Para que sus ventanas sean más baratas de limpiar', fa: 'تا پاک کردن کلکین‌هایشان ارزان‌تر باشد' }, { en: 'So they catch more sunlight all day', es: 'Para recibir más sol todo el día', fa: 'تا تمام روز آفتاب بیشتر بگیرند' }, { en: 'Because the wind in Japan never stops', es: 'Porque el viento en Japón nunca para', fa: 'چون باد در جاپان هرگز ایستاد نمی‌شود' }], answer: 0,
        why: { en: 'Japan is on the Ring of Fire. Buildings that can bend are safer in earthquakes.', es: 'Japón está en el Cinturón de Fuego. Los edificios que se doblan son más seguros en los terremotos.', fa: 'جاپان روی حلقهٔ آتش است. تعمیرهایی که خم می‌شوند در زلزله مصون‌تر هستند.' } }
    ]
  },

  learned: [
    { en: 'Most of China\'s people live in the east, on the flat [[plain|plains]] of the Yellow River and the Yangtze. The west has the Himalaya, the Tibetan [[plateau|Plateau]] and the Gobi Desert, with few people.', es: 'La mayoría de la gente de China vive en el este, en las [[plain|llanuras]] del río Amarillo y del Yangtsé. El oeste tiene los Himalaya, la [[plateau|meseta]] del Tíbet y el desierto de Gobi, con poca gente.', fa: 'بیشتر مردم چین در شرق، روی [[plain|دشت‌های هموار]] دریای زرد و یانگتسی زندگی می‌کنند. غرب همالیا، [[plateau|فلات]] تبت و دشت گوبی را دارد، با مردم کم.' },
    { en: 'Japan is an [[archipelago|archipelago]] with four main islands. Most of it is mountains, so people crowd onto narrow coasts and build tall.', es: 'Japón es un [[archipelago|archipiélago]] con cuatro islas principales. Casi todo es montaña, así que la gente se amontona en costas angostas y construye alto.', fa: 'جاپان یک [[archipelago|مجمع‌الجزایر]] با چهار جزیرهٔ اصلی است. بیشترش کوه است، پس مردم در ساحل‌های باریک جمع می‌شوند و بلند می‌سازند.' },
    { en: 'People crowd onto flat land. Rice paddies and [[terrace|terraces]] show how farmers shape the land to grow rice.', es: 'La gente se amontona en la tierra plana. Los arrozales y las [[terrace|terrazas]] muestran cómo los agricultores cambian la tierra para sembrar arroz.', fa: 'مردم روی زمین هموار جمع می‌شوند. شالیزارها و [[terrace|زمین‌های زینه‌ای]] نشان می‌دهند دهقانان چطور زمین را برای کشت برنج شکل می‌دهند.' }
  ],
  reflect: {
    q: { en: 'Where is the flat land in or near your town, or in the place you came from? What did people build on it?', es: '¿Dónde está la tierra plana en tu ciudad o cerca de ella, o en el lugar de donde vienes? ¿Qué construyó la gente allí?', fa: 'زمین هموار در شهر تو یا نزدیک آن، یا در جایی که از آن آمده‌ای، کجاست؟ مردم روی آن چه ساختند؟' },
    starter: { en: 'Near my home, the flat land is used for', es: 'Cerca de mi casa, la tierra plana se usa para', fa: 'نزدیک خانهٔ من، زمین هموار برای این استفاده می‌شود:' }
  }
};
