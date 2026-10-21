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
    { en: 'Christopher: "The Grump scribbled all over East Asia! Rivers, mountains and islands are mixed up. Talk to the scientist on the high plateau, the rice farmer and the engineer across the sea. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón garabateó todo el este de Asia! Los ríos, las montañas y las islas están revueltos. Habla con la científica de la meseta alta, el agricultor de arroz y la ingeniera al otro lado del mar. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو روی تمام شرق آسیا خط‌خطی کرد! دریاها، کوه‌ها و جزیره‌ها مخلوط شده‌اند. با دانشمند فلات بلند، دهقان برنج و انجنیر آن طرف بحر گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
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
    'AMMzAAzzzMMAzzzMwwwww:.RRR.fUUUU~~~==~...qqMMMM=',
    'AMzzzznzzzzzznzzwwwww:.hdhJUUUUU~s~==~...qqMMMM=',
    'Azzzzzzzzzzzzzzzqqqqq:qqqqJUfUUU~~~==~...qqMMMM=',
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
      clue: { en: 'Both great rivers start high in the west and flow east to the sea. Go up to the plateau and find where the southern river begins. Stand on the land square just south of its most western water square.', es: 'Los dos grandes ríos nacen en lo alto del oeste y corren al este hasta el mar. Sube a la meseta y busca dónde empieza el río del sur. Párate en el cuadro de tierra justo al sur de su cuadro de agua más al oeste.', fa: 'هر دو دریای بزرگ از بلندی‌های غرب شروع می‌شوند و به طرف شرق تا بحر می‌روند. به سطح مرتفع برو و پیدا کن دریای جنوبی از کجا شروع می‌شود. روی خانهٔ خشکه که درست جنوبِ غربی‌ترین خانهٔ آبِ آن است بایست.' },
      text: { en: 'You found where the river starts! The Yangtze begins high on the Tibetan Plateau and flows east to the sea. A fossil sea shell was here. Long ago, this high land was under the sea.', es: '¡Encontraste dónde nace el río! El Yangtsé nace en lo alto de la meseta del Tíbet y corre al este hasta el mar. Aquí había una concha fósil. Hace mucho tiempo, esta tierra alta estaba bajo el mar.', fa: 'تو جایی را پیدا کردی که دریا شروع می‌شود! دریای یانگ‌تسه از بلندی‌های سطح مرتفع تبت شروع می‌شود و به طرف شرق تا بحر می‌رود. یک فسیلِ صدف این جا بود. خیلی وقت پیش، این زمین بلند زیر بحر بود.' } },
    { clueAt: [39, 11], at: [38, 19], decor: 'shell',
      clue: { en: 'From this note, walk 8 steps south, then 1 step west. Something is hidden there.', es: 'Desde esta nota, camina 8 pasos al sur y luego 1 paso al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۸ قدم به جنوب برو، بعد ۱ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! South is down and west is to the left. A sea shell was on the shore. Japan is an archipelago, a chain of islands, so no place in Japan is very far from the sea.', es: '¡Seguiste las direcciones de la brújula! El sur está abajo y el oeste a la izquierda. Había una concha en la orilla. Japón es un archipiélago, una cadena de islas, así que ningún lugar de Japón está muy lejos del mar.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! جنوب پایین و غرب طرف چپ است. یک صدف در ساحل بود. جاپان یک مجمع‌الجزایر است، یعنی زنجیری از جزیره‌ها، پس هیچ جای جاپان از بحر خیلی دور نیست.' } }
  ],
  // only the Canoe (Episode 2.3) reaches the tiny island in the sea between China and Japan
  secret: { tool: 'canoe', at: [33, 12],
    text: { en: 'The canoe reached the tiny island! A note in the chest says Japan has more than 14,000 islands. But most people live on the four big ones.',
      es: '¡La canoa llegó a la islita! Una nota en el cofre dice que Japón tiene más de 14,000 islas. Pero casi toda la gente vive en las cuatro grandes.',
      fa: 'قایق کوچک به جزیرهٔ خُرد رسید! یک یادداشت در صندوق می‌گوید جاپان بیشتر از ۱۴۰۰۰ جزیره دارد. اما بیشتر مردم در چهار جزیرهٔ بزرگ زندگی می‌کنند.' } },

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
        { en: 'Hello, traveler! I measure the weather up here on the Tibetan [[plateau|Plateau]]. It is so high that people call it "the roof of the world." To the south stand the Himalaya, the highest mountains on Earth.',
          es: '¡Hola, viajero! Yo mido el clima aquí arriba, en la [[plateau|meseta]] del Tíbet. Es tan alta que la llaman "el techo del mundo". Al sur están los Himalaya, las montañas más altas de la Tierra.',
          fa: 'سلام، مسافر! من اینجا بالای [[plateau|فلات]] تبت هوا را اندازه می‌گیرم. آن‌قدر بلند است که مردم آن را «بام دنیا» می‌گویند. در جنوب، کوه‌های همالیا قرار دارند، بلندترین کوه‌های زمین.' },
        { en: 'Two great rivers begin in these high mountains: the Yellow River and the Yangtze. Both flow thousands of miles east to the sea. North of here is the Gobi Desert, dry and rocky.',
          es: 'Dos grandes ríos nacen en estas montañas altas: el río Amarillo y el Yangtsé. Los dos corren miles de millas hacia el este hasta el mar. Al norte está el desierto de Gobi, seco y rocoso.',
          fa: 'دو دریای بزرگ از این کوه‌های بلند شروع می‌شوند: دریای زرد و دریای یانگتسی. هر دو هزاران میل به طرف شرق تا بحر می‌روند. در شمال اینجا دشت گوبی است، خشک و سنگلاخ.' },
        { en: 'Cold mountains and dry desert are hard places to live. So very few people live in the west of China. Most people live in the east, near the rivers and the coast. We say the east has a high [[population density|population density]].',
          es: 'Las montañas frías y el desierto seco son lugares difíciles para vivir. Por eso muy poca gente vive en el oeste de China. La mayoría vive en el este, cerca de los ríos y la costa. Decimos que el este tiene una alta [[population density|densidad de población]].',
          fa: 'کوه‌های سرد و دشت خشک جای سخت برای زندگی هستند. پس مردم بسیار کم در غرب چین زندگی می‌کنند. بیشتر مردم در شرق، نزدیک دریاها و ساحل زندگی می‌کنند. می‌گوییم شرق [[population density|تراکم نفوس]] بلند دارد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where do most of China\'s people live?', es: '¿Dónde vive la mayoría de la gente de China?', fa: 'بیشتر مردم چین کجا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'In the east, on flat land near the rivers and the coast', es: 'En el este, en tierra plana cerca de los ríos y la costa', fa: 'در شرق، روی زمین هموار نزدیک دریاها و ساحل' },
            why: { en: 'Flat land with water is easy to farm and build on, so people crowd there.', es: 'La tierra plana con agua es fácil de cultivar y construir, así que la gente se junta allí.', fa: 'زمین هموار با آب برای زراعت و ساختمان آسان است، پس مردم آنجا جمع می‌شوند.' } },
          { t: { en: 'In the west, near the high mountains', es: 'En el oeste, cerca de las montañas altas', fa: 'در غرب، نزدیک کوه‌های بلند' },
            why: { en: 'The west is cold, high and dry. Few people live there.', es: 'El oeste es frío, alto y seco. Poca gente vive allí.', fa: 'غرب سرد، بلند و خشک است. مردم کم آنجا زندگی می‌کنند.' } },
          { t: { en: 'In the Gobi Desert', es: 'En el desierto de Gobi', fa: 'در دشت گوبی' },
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
        { en: 'Welcome to my rice paddies! This wide, flat land is a [[plain|plain]]. Flat land is easy to farm and easy to build on. Rice needs flat fields that can hold water. People here have grown rice for thousands of years.',
          es: '¡Bienvenido a mis arrozales! Esta tierra ancha y plana es una [[plain|llanura]]. La tierra plana es fácil de cultivar y de construir. El arroz necesita campos planos que guarden agua. Aquí se cultiva arroz desde hace miles de años.',
          fa: 'به شالیزارهای من خوش آمدی! این زمین پهن و هموار یک [[plain|دشت هموار]] است. زمین هموار برای زراعت و ساختمان آسان است. برنج به کشتزار هموار ضرورت دارد که آب را نگه دارد. مردم اینجا هزاران سال است برنج می‌کارند.' },
        { en: 'The Yangtze, right here, is the longest river in Asia. Up north, the Yellow River carries so much [[silt|silt]] that the water looks yellow-brown. Silt makes rich soil. But floods could wash away whole villages. Long ago, farmers called it "China\'s Sorrow."',
          es: 'El Yangtsé, aquí mismo, es el río más largo de Asia. Al norte, el río Amarillo lleva tanto [[silt|limo]] que el agua se ve café amarillenta. El limo hace tierra fértil. Pero sus inundaciones podían llevarse pueblos enteros. Hace mucho, los agricultores lo llamaban "la Tristeza de China".',
          fa: 'یانگتسی، همین‌جا، درازترین دریای آسیا است. در شمال، دریای زرد آن‌قدر [[silt|لای]] با خود دارد که آبش زرد و نصواری معلوم می‌شود. لای خاک را حاصلخیز می‌کند. اما سیلابش می‌توانست قریه‌های کامل را ببرد. در گذشته دهقانان آن را «غم چین» می‌گفتند.' },
        { en: 'Where the Yangtze meets the sea, a giant city grew: Shanghai. It is a [[megacity|megacity]], with more than 20 million people. Flat land, a big river and the sea pull people together.',
          es: 'Donde el Yangtsé llega al mar creció una ciudad gigante: Shanghái. Es una [[megacity|megaciudad]], con más de 20 millones de personas. La tierra plana, un río grande y el mar juntan a la gente.',
          fa: 'جایی که یانگتسی به بحر می‌رسد، یک شهر بسیار بزرگ رشد کرد: شانگهای. این یک [[megacity|ابرشهر]] است، با بیشتر از ۲۰ میلیون نفر. زمین هموار، یک دریای بزرگ و بحر، مردم را یکجا جمع می‌کنند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did farmers long ago call the Yellow River "China\'s Sorrow"?', es: '¿Por qué los agricultores de antes llamaban al río Amarillo "la Tristeza de China"?', fa: 'چرا دهقانان در گذشته دریای زرد را «غم چین» می‌گفتند؟' },
        choices: [
          { ok: true, t: { en: 'Its floods could destroy whole villages', es: 'Sus inundaciones podían destruir pueblos enteros', fa: 'سیلابش می‌توانست قریه‌های کامل را خراب کند' },
            why: { en: 'The river gave rich soil, but its floods took homes and lives.', es: 'El río daba tierra fértil, pero sus inundaciones se llevaban casas y vidas.', fa: 'دریا خاک حاصلخیز می‌داد، اما سیلابش خانه‌ها و جان‌ها را می‌گرفت.' } },
          { t: { en: 'It dried up every summer', es: 'Se secaba cada verano', fa: 'هر تابستان خشک می‌شد' },
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
        { en: 'Welcome to Japan! Japan is an [[archipelago|archipelago]], a chain of islands. It has four main islands and thousands of small ones. About three-quarters of the land is mountains.',
          es: '¡Bienvenido a Japón! Japón es un [[archipelago|archipiélago]], una cadena de islas. Tiene cuatro islas principales y miles de islas pequeñas. Cerca de tres cuartas partes de la tierra son montañas.',
          fa: 'به جاپان خوش آمدی! جاپان یک [[archipelago|مجمع‌الجزایر]] است، یک زنجیره از جزیره‌ها. چهار جزیرهٔ اصلی و هزاران جزیرهٔ کوچک دارد. تقریباً سه حصه از چهار حصهٔ زمینش کوه است.' },
        { en: 'So people crowd onto narrow strips of flat land by the coast. Greater Tokyo has about 37 million people! With so little flat land, buildings go up instead of out. Farmers cut [[terrace|terraces]], flat steps, into hillsides to grow rice.',
          es: 'Por eso la gente se amontona en franjas angostas de tierra plana junto a la costa. ¡El Gran Tokio tiene unos 37 millones de personas! Con tan poca tierra plana, los edificios crecen hacia arriba y no hacia los lados. Los agricultores cortan [[terrace|terrazas]], escalones planos, en las laderas para sembrar arroz.',
          fa: 'پس مردم روی نوارهای باریک زمین هموار کنار ساحل جمع می‌شوند. توکیوی بزرگ حدود ۳۷ میلیون نفر دارد! با زمین هموار این‌قدر کم، تعمیرها به جای پهن شدن بلند ساخته می‌شوند. دهقانان در دامنهٔ کوه [[terrace|زمین‌های زینه‌ای]] می‌کنند تا برنج بکارند.' },
        { en: 'Japan sits on the [[ring of fire|Ring of Fire]]. It has many earthquakes and volcanoes, like snowy Mount Fuji. I design tall buildings that sway in an earthquake instead of snapping. A big earthquake under the sea can cause a [[tsunami|tsunami]].',
          es: 'Japón está en el [[ring of fire|Cinturón de Fuego]]. Tiene muchos terremotos y volcanes, como el monte Fuji con su nieve. Yo diseño edificios altos que se mecen en un terremoto en vez de romperse. Un gran terremoto bajo el mar puede causar un [[tsunami|tsunami]].',
          fa: 'جاپان روی [[ring of fire|حلقهٔ آتش]] قرار دارد. زلزله و آتشفشان زیاد دارد، مثل کوه برفی فوجی. من تعمیرهای بلند را طوری طرح می‌کنم که در زلزله تاب بخورند، نه اینکه بشکنند. یک زلزلهٔ بزرگ زیر بحر می‌تواند [[tsunami|سونامی]] بسازد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do most people in Japan live on narrow strips near the coast?', es: '¿Por qué la mayoría de la gente en Japón vive en franjas angostas cerca de la costa?', fa: 'چرا بیشتر مردم جاپان روی نوارهای باریک نزدیک ساحل زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'About three-quarters of Japan is mountains, and steep land is hard to build on', es: 'Cerca de tres cuartas partes de Japón son montañas, y es difícil construir en tierra empinada', fa: 'تقریباً سه حصه از چهار حصهٔ جاپان کوه است و ساختمان روی زمین سراشیب سخت است' },
            why: { en: 'The flat land is mostly by the coast, so the people are there too.', es: 'La tierra plana está casi toda en la costa, así que la gente también.', fa: 'زمین هموار بیشتر کنار ساحل است، پس مردم هم آنجا هستند.' } },
          { t: { en: 'Inland Japan is covered by desert', es: 'El interior de Japón está cubierto de desierto', fa: 'داخل جاپان را دشت خشک پوشانده' },
            why: { en: 'Japan\'s inland is mountains and forests, not desert.', es: 'El interior de Japón es de montañas y bosques, no de desierto.', fa: 'داخل جاپان کوه و جنگل است، نه دشت خشک.' } },
          { t: { en: 'The law says people must live near ports', es: 'La ley dice que la gente debe vivir cerca de los puertos', fa: 'قانون می‌گوید مردم باید نزدیک بندرها زندگی کنند' },
            why: { en: 'No law does that. The land itself pushes people to the flat coast.', es: 'Ninguna ley hace eso. La tierra misma empuja a la gente a la costa plana.', fa: 'هیچ قانونی چنین نیست. خود زمین مردم را به ساحل هموار می‌کشاند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 22, y: 8, text: { en: 'YELLOW RIVER (Huang He) · Its yellow-brown water carries [[silt|silt]]. Silt makes rich farmland. Its floods gave it the name "China\'s Sorrow."',
      es: 'RÍO AMARILLO (Huang He) · Su agua café amarillenta lleva [[silt|limo]]. El limo hace tierra fértil. Sus inundaciones le dieron el nombre de "la Tristeza de China".',
      fa: 'دریای زرد (هوانگ هه) · آب زرد و نصواری آن [[silt|لای]] با خود دارد. لای زمین زراعتی را حاصلخیز می‌کند. سیلابش نام «غم چین» را به آن داد.' } },
    { x: 31, y: 8, text: { en: 'FERRY PIER · East across the sea: the islands of Japan. West: the river plain, the high mountains and the Gobi Desert.',
      es: 'MUELLE DEL FERRY · Al este, cruzando el mar: las islas de Japón. Al oeste: la llanura de los ríos, las montañas altas y el desierto de Gobi.',
      fa: 'اسکلهٔ کشتی · شرق، آن طرف بحر: جزیره‌های جاپان. غرب: دشت دریاها، کوه‌های بلند و دشت گوبی.' } }
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
        { en: 'Help, traveler! An Ink Thief grabbed my big river map. It shows where China\'s two great rivers go. My students need it tomorrow.',
          es: '¡Ayuda, viajero! Un Ladrón de Tinta se llevó mi gran mapa de ríos. Muestra por dónde van los dos grandes ríos de China. Mis estudiantes lo necesitan mañana.',
          fa: 'کمک، مسافر! یک دزد رنگ نقشهٔ بزرگ دریاهایم را گرفت. این نقشه نشان می‌دهد دو دریای بزرگ چین از کجا می‌روند. شاگردانم فردا به آن ضرورت دارند.' },
        { en: 'Batu, a camel herder, saw where the thief ran. He is in the Gobi Desert, far to the north-west. Will you ask him?',
          es: 'Batu, un pastor de camellos, vio adónde corrió el ladrón. Está en el desierto de Gobi, lejos al noroeste. ¿Le preguntas?',
          fa: 'باتو، یک شترچران، دید که دزد به کجا دوید. او در دشت گوبی است، دور در شمال غرب. از او می‌پرسی؟' }
      ],
      wait: { en: 'Batu is in the Gobi Desert. Go north over the bridge. Then walk west and north into the sand.',
        es: 'Batu está en el desierto de Gobi. Ve al norte por el puente. Luego camina al oeste y al norte hasta la arena.',
        fa: 'باتو در دشت گوبی است. از پل به طرف شمال برو. بعد به طرف غرب و شمال تا ریگ‌ها راه برو.' },
      thanks: { en: 'My river map! Now my students can follow both rivers from the high west down to the sea in the east. Thank you!',
        es: '¡Mi mapa de ríos! Ahora mis estudiantes pueden seguir los dos ríos desde el oeste alto hasta el mar en el este. ¡Gracias!',
        fa: 'نقشهٔ دریاهای من! حالا شاگردانم می‌توانند هر دو دریا را از غرب بلند تا بحر در شرق دنبال کنند. تشکر!' }
    },
    contact: {
      x: 6, y: 4,
      name: { en: 'Batu', es: 'Batu', fa: 'باتو' },
      role: { en: 'Camel herder', es: 'Pastor de camellos', fa: 'شترچران' },
      look: { skin: 3, hair: '#20180f', shirt: '#a0522d', pants: '#4a3b2a', hat: '#6b4a2a' },
      lines: [
        { en: 'Yes, I saw a dark, inky thing with a map! It ran past my camels, laughing!',
          es: '¡Sí, vi una cosa oscura de tinta con un mapa! ¡Pasó corriendo y riendo junto a mis camellos!',
          fa: 'بله، یک چیز تاریک رنگی را با یک نقشه دیدم! خندان از کنار شترهایم دوید!' },
        { en: 'It tore the map into 3 pieces and hid them all over the land! Listen to its riddles and walk to the right place. Then catch the thief!',
          es: '¡Rompió el mapa en 3 pedazos y los escondió por todas partes! Escucha sus acertijos y camina al lugar correcto. ¡Después atrapa al ladrón!',
          fa: 'نقشه را سه تکه کرد و تکه‌ها را همه جا پنهان کرد! به چیستان‌هایش گوش بده و به جای درست برو. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [44, 19],
      hops: [[41, 10], [39, 18]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "Drip, drip! I tore the river map into 3 pieces and hid them all over East Asia. Follow my riddles, if you can!"',
        es: 'El Ladrón de Tinta se ríe: "¡Plic, plic! Rompí el mapa de ríos en 3 pedazos y los escondí por todo el este de Asia. ¡Sigue mis acertijos, si puedes!"',
        fa: 'دزد رنگ می‌خندد: «چک، چک! نقشهٔ دریاها را سه تکه کردم و در تمام شرق آسیا پنهان کردم. اگر می‌توانی، چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1 is where China\'s two great rivers begin. Rivers start high up, where the snow melts. Go to the high, cold [[plateau|plateau]] in the south-west.',
            es: 'El pedazo 1 está donde nacen los dos grandes ríos de China. Los ríos nacen arriba, donde se derrite la nieve. Ve a la [[plateau|meseta]] alta y fría del suroeste.',
            fa: 'تکهٔ ۱ جایی است که دو دریای بزرگ چین شروع می‌شوند. دریاها از بلندی شروع می‌شوند، جایی که برف آب می‌شود. به [[plateau|فلات]] بلند و سرد در جنوب غرب برو.' },
          zones: [{ x: 1, y: 11, w: 15, h: 10 }],
          noBy: [{ x: 16, y: 13, w: 16, h: 8, t: { en: 'Here the river is wide and slow. It is near the end of its trip to the sea. Rivers begin far up in the west.', es: 'Aquí el río es ancho y lento. Está cerca del final de su viaje al mar. Los ríos nacen lejos, arriba en el oeste.', fa: 'این جا دریا پهن و آرام است. نزدیک آخر سفرش به بحر است. دریاها دور در بلندی‌های غرب شروع می‌شوند.' } }],
          found: { en: 'Piece 1 was on the Tibetan Plateau! Both great rivers start up here in the high west. Then they flow downhill, east to the sea.', es: '¡El pedazo 1 estaba en la meseta del Tíbet! Los dos grandes ríos nacen aquí arriba, en el oeste alto. Luego bajan hacia el este hasta el mar.', fa: 'تکهٔ ۱ در فلات تبت بود! هر دو دریای بزرگ این جا در غرب بلند شروع می‌شوند. بعد به طرف پایین، به شرق تا بحر می‌روند.' } },
        { t: { en: 'Piece 2 is where very few people live, because it is too dry to grow food. Find the sand.',
            es: 'El pedazo 2 está donde vive muy poca gente, porque es demasiado seco para cultivar comida. Busca la arena.',
            fa: 'تکهٔ ۲ جایی است که مردم بسیار کم زندگی می‌کنند، چون برای کشت غذا خیلی خشک است. ریگ را پیدا کن.' },
          zones: [{ x: 1, y: 1, w: 15, h: 8 }],
          noBy: [{ x: 16, y: 3, w: 16, h: 3, t: { en: 'These are wheat fields. There is enough water to farm here, so many people live here. Look for land that is too dry for any farm.', es: 'Estos son campos de trigo. Aquí hay agua para cultivar, así que vive mucha gente. Busca tierra demasiado seca para cualquier granja.', fa: 'این‌ها زمین‌های گندم است. این جا آب برای زراعت هست، پس مردم زیاد زندگی می‌کنند. زمینی را پیدا کن که برای هیچ کشتی آب ندارد.' } }],
          found: { en: 'Piece 2 was in the Gobi Desert! A desert gets very little rain. Without water, farms cannot grow food, so very few people live here.', es: '¡El pedazo 2 estaba en el desierto de Gobi! Un desierto recibe muy poca lluvia. Sin agua, las granjas no dan comida, así que vive muy poca gente aquí.', fa: 'تکهٔ ۲ در دشت گوبی بود! دشت خشک باران بسیار کم دارد. بدون آب، کشتزارها غذا نمی‌دهند، پس مردم بسیار کم این جا زندگی می‌کنند.' } },
        { t: { en: 'Piece 3 is on an [[archipelago|archipelago]]: a chain of islands across the sea, with a snowy volcano. Cross the sea to find it.',
            es: 'El pedazo 3 está en un [[archipelago|archipiélago]]: una cadena de islas al otro lado del mar, con un volcán nevado. Cruza el mar para encontrarlo.',
            fa: 'تکهٔ ۳ در یک [[archipelago|مجمع‌الجزایر]] است: زنجیره‌ای از جزیره‌ها آن طرف بحر، با یک آتشفشان برفی. از بحر بگذر تا پیدایش کنی.' },
          zones: [{ x: 38, y: 1, w: 9, h: 20 }],
          noBy: [{ x: 26, y: 10, w: 6, h: 5, t: { en: 'This big city is on the mainland of China, not on an island. Take the ferry pier east across the sea.', es: 'Esta ciudad grande está en el continente de China, no en una isla. Toma el muelle del ferry al este, cruzando el mar.', fa: 'این شهر بزرگ روی خشکهٔ چین است، نه روی جزیره. از اسکلهٔ کشتی به طرف شرق از بحر بگذر.' } }],
          found: { en: 'Piece 3 was in Japan! Japan is an archipelago: four main islands and thousands of small ones. The mountains leave little flat land, so people crowd onto the coast.', es: '¡El pedazo 3 estaba en Japón! Japón es un archipiélago: cuatro islas principales y miles de islas pequeñas. Las montañas dejan poca tierra plana, así que la gente se junta en la costa.', fa: 'تکهٔ ۳ در جاپان بود! جاپان یک مجمع‌الجزایر است: چهار جزیرهٔ اصلی و هزاران جزیرهٔ کوچک. کوه‌ها زمین هموار کم می‌گذارند، پس مردم در ساحل جمع می‌شوند.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs off in a puff of ink. All 3 pieces fit together: the river map is whole again.',
        es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye en una nube de tinta. Los 3 pedazos encajan: el mapa de ríos está completo otra vez.',
        fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و در یک ابر سیاهی فرار می‌کند. هر سه تکه با هم جور می‌شوند: نقشهٔ دریاها دوباره کامل است.' },
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
        choices: [{ en: 'How many people live in a certain amount of land', es: 'Cuántas personas viven en cierta cantidad de tierra', fa: 'در یک اندازهٔ معین زمین چند نفر زندگی می‌کنند' }, { en: 'How fast a city grows each year', es: 'Qué tan rápido crece una ciudad cada año', fa: 'یک شهر هر سال چقدر تیز رشد می‌کند' }, { en: 'The number of cities in a region', es: 'El número de ciudades de una región', fa: 'تعداد شهرهای یک منطقه' }, { en: 'The total number of people in a country', es: 'El número total de personas de un país', fa: 'تعداد کل مردم یک کشور' }], answer: 0,
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
        choices: [{ en: 'It is the largest hydroelectric dam in the world', es: 'Es la presa hidroeléctrica más grande del mundo', fa: 'بزرگ‌ترین بند برق آبی جهان است' }, { en: 'It was built to stop invasions from the north', es: 'Se construyó para frenar invasiones del norte', fa: 'برای جلوگیری از حمله از شمال ساخته شد' }, { en: 'It is the oldest dam in China', es: 'Es la presa más antigua de China', fa: 'کهنه‌ترین بند چین است' }, { en: 'It blocks all ships from the coast', es: 'Impide que todos los barcos lleguen a la costa', fa: 'همهٔ کشتی‌ها را از ساحل بند می‌کند' }], answer: 0,
        why: { en: 'Its turbines make power for millions of homes, and its locks lift ships past the wall. The Great Wall, not a dam, was built against invasions.', es: 'Sus turbinas dan electricidad a millones de casas y sus esclusas suben los barcos. La Gran Muralla, no una presa, se hizo contra las invasiones.', fa: 'توربین‌هایش برای میلیون‌ها خانه برق می‌سازند و کشتی‌ها را از دیوار بالا می‌برد. دیوار بزرگ چین، نه بند، برای جلوگیری از حمله ساخته شد.' } },
      { q: { en: 'What is a megacity?', es: '¿Qué es una megaciudad?', fa: 'ابرشهر چیست؟' },
        choices: [{ en: 'A city region with more than 10 million people', es: 'Una zona urbana con más de 10 millones de personas', fa: 'ساحهٔ شهری با بیشتر از ۱۰ میلیون نفر' }, { en: 'The capital city of a country', es: 'La capital de un país', fa: 'پایتخت یک کشور' }, { en: 'A city that makes most of a country\'s goods', es: 'Una ciudad que hace casi todos los productos de un país', fa: 'شهری که بیشتر کالاهای یک کشور را می‌سازد' }, { en: 'Any city built near a river', es: 'Cualquier ciudad construida cerca de un río', fa: 'هر شهری که نزدیک دریا ساخته شده' }], answer: 0,
        why: { en: 'Shanghai and Tokyo are megacities. Each has well over 10 million people.', es: 'Shanghái y Tokio son megaciudades. Cada una tiene mucho más de 10 millones de personas.', fa: 'شانگهای و توکیو ابرشهر هستند. هر کدام خیلی بیشتر از ۱۰ میلیون نفر دارند.' } },
      { q: { en: 'Greater Tokyo has about 37 million people and very little flat land. What did builders do?', es: 'El Gran Tokio tiene unos 37 millones de personas y muy poca tierra plana. ¿Qué hicieron los constructores?', fa: 'توکیوی بزرگ حدود ۳۷ میلیون نفر و زمین هموار بسیار کم دارد. سازندگان چه کردند؟' },
        choices: [{ en: 'Built up instead of out, with tall buildings', es: 'Construyeron hacia arriba, con edificios altos', fa: 'به جای پهن، بلند ساختند، با تعمیرهای بلند' }, { en: 'Kept all buildings short and wide', es: 'Hicieron todos los edificios bajos y anchos', fa: 'همهٔ تعمیرها را کوتاه و پهن ساختند' }, { en: 'Put farms in the middle of the city', es: 'Pusieron granjas en el centro de la ciudad', fa: 'کشتزارها را در وسط شهر گذاشتند' }, { en: 'Moved the whole city to the mountains', es: 'Llevaron toda la ciudad a las montañas', fa: 'تمام شهر را به کوه‌ها بردند' }], answer: 0,
        why: { en: 'When flat land runs out, cities grow upward.', es: 'Cuando se acaba la tierra plana, las ciudades crecen hacia arriba.', fa: 'وقتی زمین هموار تمام می‌شود، شهرها به طرف بالا رشد می‌کنند.' } },
      { q: { en: 'Why are many tall buildings in Japan made to sway a little?', es: '¿Por qué muchos edificios altos de Japón se hacen para mecerse un poco?', fa: 'چرا بسیاری از تعمیرهای بلند جاپان طوری ساخته می‌شوند که کمی تاب بخورند؟' },
        choices: [{ en: 'So they bend in an earthquake instead of snapping', es: 'Para que se doblen en un terremoto en vez de romperse', fa: 'تا در زلزله خم شوند، نه اینکه بشکنند' }, { en: 'So they are cheaper to clean', es: 'Para que sea más barato limpiarlos', fa: 'تا پاک کردنشان ارزان‌تر باشد' }, { en: 'So they catch more sunlight', es: 'Para que reciban más sol', fa: 'تا آفتاب بیشتر بگیرند' }, { en: 'Because the wind in Japan never stops', es: 'Porque el viento en Japón nunca para', fa: 'چون باد در جاپان هرگز ایستاد نمی‌شود' }], answer: 0,
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
