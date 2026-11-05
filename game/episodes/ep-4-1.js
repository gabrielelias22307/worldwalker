/* WORLDWALKER · Episode 4.1 · Land, Climate and Vegetation (WG.7)
   Nigeria and Kenya. The map runs Sahara → Sahel → savanna → rainforest from north to south,
   with Mount Kenya's snowy top in the savanna. See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'WG.7',
  title: { en: 'Land, Climate and Vegetation', es: 'Tierra, clima y vegetación', fa: 'زمین، اقلیم و نباتات' },
  place: { en: 'From Sahara to Rainforest', es: 'Del Sahara a la selva', fa: 'از صحرا تا جنگل بارانی' },
  intro: [
    { en: 'The Grump blew dust over Nigeria and Kenya! Now the land bands are mixed up.',
      es: '¡El Gruñón sopló polvo sobre Nigeria y Kenia! Ahora las franjas de tierra están revueltas.',
      fa: 'غرغرو روی نیجریه و کینیا گرد و خاک پاشید! حالا نوارهای زمین مخلوط شده‌اند.' },
    { en: 'Talk to the herder, the ranger and the forest scientist. Then fix the compass stone.',
      es: 'Habla con la pastora, la guardaparques y el científico del bosque. Luego arregla la piedra de la brújula.',
      fa: 'با مالدار، نگهبان پارک و دانشمند جنگل گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [2.0, 13.5],
    start: [
      { en: 'The Sahara is the world\'s biggest hot desert. It covers most of North Africa.',
        es: 'El Sahara es el desierto cálido más grande del mundo. Cubre casi todo el norte de África.',
        fa: 'صحرا بزرگ‌ترین بیابان گرم جهان است. بیشتر شمال افریقا را پوشانده.' },
      { en: 'The Sahara is about as big as the whole United States.',
        es: 'El Sahara es casi tan grande como todo Estados Unidos.',
        fa: 'صحرا تقریباً به اندازهٔ تمام امریکا بزرگ است.' },
      { en: 'South of the desert, the Sahel is a strip of dry grass and short trees.',
        es: 'Al sur del desierto, el Sahel es una franja de pasto seco y árboles bajos.',
        fa: 'در جنوب صحرا، ساحل نواری از علف خشک و درختان کوتاه است.' }
    ],
    page: { en: 'The Great Green Wall plants trees across Africa, from Senegal to Djibouti.',
      es: 'La Gran Muralla Verde planta árboles a lo largo de África, de Senegal a Yibuti.',
      fa: 'دیوار بزرگ سبز در سراسر افریقا، از سنگال تا جیبوتی، درخت می‌کارد.' },
    guess: {
      q: { en: 'Going south from the Sahara, does the land get wetter or drier?', es: 'Yendo al sur desde el Sahara, ¿la tierra se vuelve más húmeda o más seca?', fa: 'وقتی از صحرا به طرف جنوب برویم، زمین مرطوب‌تر می‌شود یا خشک‌تر؟' },
      choices: [
        { t: { en: '🌧️ Wetter', es: '🌧️ Más húmeda', fa: '🌧️ مرطوب‌تر' }, ok: true },
        { t: { en: '🏜️ Drier', es: '🏜️ Más seca', fa: '🏜️ خشک‌تر' } }
      ],
      why: { en: 'South of the Sahara the land gets wetter: desert, Sahel, savanna, then rainforest.', es: 'Al sur del Sahara la tierra se vuelve más húmeda: desierto, Sahel, sabana y luego selva.', fa: 'در جنوب صحرا زمین مرطوب‌تر می‌شود: بیابان، ساحل، ساوانا و بعد جنگل بارانی.' }
    },
    next: {
      q: { en: 'Next: Kinshasa, a big African city. Is it growing or shrinking?', es: 'Ahora: Kinshasa, una gran ciudad africana. ¿Está creciendo o achicándose?', fa: 'بعدی: کینشاسا، یک شهر بزرگ افریقا. بزرگ‌تر می‌شود یا کوچک‌تر؟' },
      choices: [
        { t: { en: '📈 Growing fast', es: '📈 Crece rápido', fa: '📈 زود بزرگ می‌شود' }, ok: true },
        { t: { en: '📉 Shrinking fast', es: '📉 Se achica rápido', fa: '📉 زود کوچک می‌شود' } }
      ],
      why: { en: 'Kinshasa has more than 15 million people, and people keep moving there for jobs.', es: 'Kinshasa tiene más de 15 millones de personas, y sigue llegando gente a buscar trabajo.', fa: 'کینشاسا بیشتر از ۱۵ میلیون نفر دارد و مردم برای کار هنوز به آن‌جا می‌روند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [4, 10], name: { en: 'Grandma Hauwa', es: 'Abuela Hauwa', fa: 'مادرکلان هاوا' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#e0a030', pants: '#6a3a8a', style: 'bun', hat: '#3a8a5a' },
      lines: [
        { en: 'Come in out of the sun! The grass roof keeps my hut cool.', es: '¡Entra, sal del sol! El techo de paja mantiene fresca mi choza.', fa: 'از آفتاب بیا داخل! بام علفی کلبه‌ام را خنک نگه می‌دارد.' },
        { en: 'In winter, the dry Harmattan wind blows Sahara dust. We cover the water jars.', es: 'En invierno, el viento seco Harmattan trae polvo del Sahara. Tapamos las tinajas de agua.', fa: 'در زمستان باد خشک هرمتان گرد صحرا را می‌آورد. ما کوزه‌های آب را می‌پوشانیم.' }
      ] },
    { at: [16, 15], name: { en: 'Mama Akinyi', es: 'Mamá Akinyi', fa: 'ماما آکینی' },
      look: { skin: 4, hair: '#1a1a1a', shirt: '#d9534f', pants: '#2a5a8a', style: 'short' },
      lines: [
        { en: 'Welcome! Put down your bag. In the dry season, I walk far for water.', es: '¡Bienvenido! Deja tu mochila. En la temporada seca, camino lejos para buscar agua.', fa: 'خوش آمدی! بکست را بگذار. در فصل خشک برای آب راه دور می‌روم.' },
        { en: 'When the long rains come in March, we plant maize and beans.', es: 'Cuando llegan las lluvias largas en marzo, sembramos maíz y frijoles.', fa: 'وقتی باران‌های دراز در ماه مارچ می‌آیند، ما جواری و لوبیا می‌کاریم.' }
      ] }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. North (top) is the Sahara, then the Sahel, the savanna, and the rainforest at the bottom. */
  map: [
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    'ruuuuruuusuuuuuuuuuuusuuuuuuuuur',
    'ruusuuuuuurruuuuuuuuuuuruusuuuur',
    'ruuuuuuuuuuuusuuusuuuuuruuuuusur',
    'rsssssxssssssssssssssssssssssssr',
    'aaagaa:aaagaaagaaaga:aaagaaaga:a',
    'agggggggggggggOgggggggggggggggga',
    'agg::::::::::::::::::::::::::gga',
    'agYggggg:o1o1oggggggggg:ggggggga',
    'agaHHYgg:1o1o1ggggggagg:gggggaga',
    'aggNdggg:ggggaggggggggg:ggggggga',
    'a...""..:.....a.....a..:.......a',
    'a..aY...:."".....""....:...AA..a',
    'a"....".:...a..........:..MAnG.a',
    'a.......:......HH......:.MMMMMMa',
    'a....a..:....""Nd.a....:x.MMM..a',
    'a.a.....:..a.......".".:.......a',
    'jjjjjjjj:jjjjjjjjjjjjjj:jjjjjjjj',
    'jjjjj.,.....jjjjjjjj......,.jjjj',
    'jjjjj.....,.::::::::........jjjj',
    'j::::::::jjjjjjjjjjjjjjjjjjjjjjj',
    'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
  ],
  start: [4, 6],

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): fill the gaps in the Green Wall, where the Sahara sand meets the Sahel's dry grass */
  build: [
    { id: 'greenwall', kind: 'place', board: [2, 6], tile: 'a', ok: [[3, 5], [10, 5], [14, 5], [18, 5], [24, 5], [28, 5]], cost: { wood: 1 },
      name: { en: 'The Great Green Wall', es: 'La Gran Muralla Verde', fa: 'دیوار بزرگ سبز' },
      ask: { en: 'The Sahara is spreading south into the [[sahel|Sahel]]. That is [[desertification|desertification]]. Hadiza\'s acacia trees make a green wall where the sand meets the dry grass. Plant an acacia in each gap in that line of trees. Leave the three paths open for the herders.',
        es: 'El Sahara avanza hacia el sur, hacia el [[sahel|Sahel]]. Eso es la [[desertification|desertificación]]. Las acacias de Hadiza forman un muro verde donde la arena se junta con el pasto seco. Planta una acacia en cada hueco de esa fila de árboles. Deja abiertos los tres caminos para los pastores.',
        fa: 'صحرا به طرف جنوب، به داخل [[sahel|ساحل]] پیش می‌آید. این [[desertification|بیابان‌زایی]] است. درختان اکاسیای حدیزه جایی که ریگ به علف خشک می‌رسد یک دیوار سبز می‌سازند. در هر شکاف آن ردیف درخت یک اکاسیا بکار. سه راه را برای مالداران باز بگذار.' },
      why: { en: 'Right in the wall, at the edge of the sand! Its roots hold the soil.', es: '¡Justo en el muro, en el borde de la arena! Sus raíces sujetan la tierra.', fa: 'درست در دیوار، در لبهٔ ریگ! ریشه‌هایش خاک را نگه می‌دارند.' },
      wrong: { en: 'This is the Sahel, but not the wall. Plant in the gaps of the tree line, where the sand meets the dry grass.', es: 'Esto es el Sahel, pero no el muro. Planta en los huecos de la fila de árboles, donde la arena se junta con el pasto seco.', fa: 'این ساحل است، اما دیوار نیست. در شکاف‌های ردیف درختان بکار، جایی که ریگ به علف خشک می‌رسد.' },
      wrongBy: [
        { x: 1, y: 1, w: 30, h: 4, t: { en: 'This is the Sahara sand. It is too dry here, so a young tree dies. Plant just south, in the gaps of the tree line.', es: 'Esto es la arena del Sahara. Aquí es muy seco y un árbol joven se muere. Planta un poco más al sur, en los huecos de la fila de árboles.', fa: 'این ریگ صحرا است. این جا خیلی خشک است و درخت جوان می‌میرد. کمی جنوب‌تر، در شکاف‌های ردیف درختان بکار.' } },
        { x: 1, y: 11, w: 30, h: 6, t: { en: 'This is the green savanna. It gets more rain. The wall belongs farther north, where the desert is spreading.', es: 'Esto es la sabana verde. Recibe más lluvia. El muro va más al norte, donde avanza el desierto.', fa: 'این علفزار سبز است. باران بیشتر می‌گیرد. دیوار جای شمال‌تر است، جایی که بیابان پیش می‌آید.' } },
        { x: 1, y: 17, w: 30, h: 4, t: { en: 'There is already a forest here. It rains almost every month. The wall belongs where the desert is spreading, far to the north.', es: 'Aquí ya hay un bosque. Llueve casi todos los meses. El muro va donde avanza el desierto, muy al norte.', fa: 'این جا از قبل جنگل است. تقریباً هر ماه باران می‌بارد. دیوار جای است که بیابان پیش می‌آید، دور در شمال.' } }
      ],
      done: { en: 'The Green Wall is closed! In real life, countries across Africa are planting a wall of trees across the Sahel. The trees hold the soil and slow the desert.', es: '¡El Muro Verde está cerrado! En la vida real, países de toda África plantan un muro de árboles a lo largo del Sahel. Los árboles sujetan la tierra y frenan el desierto.', fa: 'دیوار سبز بسته شد! در زندگی واقعی، کشورهای زیادی در افریقا در سراسر ساحل یک دیوار درخت می‌کارند. درختان خاک را نگه می‌دارند و بیابان را آهسته می‌کنند.' } }
  ],
  finds: [
    { clueAt: [8, 4], at: [12, 1], decor: 'fossil',
      clue: { en: 'From this note, walk 3 steps north, then 4 steps east. Something is hidden in the Sahara sand.', es: 'Desde esta nota, camina 3 pasos al norte y luego 4 pasos al este. Algo está escondido en la arena del Sahara.', fa: 'از این یادداشت، ۳ قدم به شمال برو، بعد ۴ قدم به شرق. چیزی در ریگ صحرا پنهان است.' },
      text: { en: 'North is up, toward the Sahara! Long ago, a sea covered part of it. Here is a fossil.', es: '¡El norte está arriba, hacia el Sahara! Hace mucho, un mar cubría parte de él. Aquí hay un fósil.', fa: 'شمال بالا است، به طرف صحرا! خیلی وقت پیش، یک بحر قسمتی از آن را پوشانده بود. این یک فسیل است.' } },
    { clueAt: [11, 14], at: [23, 17], decor: 'feather',
      clue: { en: 'Follow the road by the Mount Kenya sign south. Stop on its last square, with rainforest on both sides.', es: 'Sigue al sur el camino junto al letrero del monte Kenia. Párate en su último cuadro, con selva a los dos lados.', fa: 'سرک کنار تابلوی کوه کینیا را به جنوب دنبال کن. روی آخرین خانه‌اش بایست، با جنگل بارانی در دو طرف.' },
      text: { en: 'A grey parrot feather! Here the savanna ends and the rainforest begins. Grey parrots live in these rainforests.', es: '¡Una pluma de loro gris! Aquí termina la sabana y empieza la selva. Los loros grises viven en estas selvas.', fa: 'یک پر طوطی خاکستری! این‌جا ساوانا تمام می‌شود و جنگل بارانی شروع می‌شود. طوطی‌های خاکستری در این جنگل‌ها زندگی می‌کنند.' } }
  ],

  secret: { tool: 'compass', at: [28, 13],
    text: { en: 'The Compass Rose found a hidden path up Mount Kenya! In the chest is a note. It says Mount Kenya is very close to the equator, but it has snow and small glaciers on top.',
      es: '¡La rosa de los vientos encontró un camino escondido en el monte Kenia! En el cofre hay una nota. Dice que el monte Kenia está muy cerca del ecuador, pero tiene nieve y pequeños glaciares en la cima.',
      fa: 'قطب‌نما یک راه پنهان را به بالای کوه کینیا پیدا کرد! در صندوق یک یادداشت است. می‌گوید کوه کینیا خیلی نزدیک خط استوا است، اما بالای آن برف و یخچال‌های کوچک دارد.' } },

  words: {
    sahara: { en: 'the largest hot desert on Earth, across the top of Africa', es: 'el desierto caliente más grande de la Tierra, en el norte de África', fa: 'بزرگ‌ترین بیابان گرم روی زمین، در شمال افریقا' },
    sahel: { en: 'a wide belt of dry grassland just south of the Sahara', es: 'una franja ancha de pasto seco justo al sur del Sahara', fa: 'نوار پهنی از علفزار خشک، درست در جنوب صحرا' },
    savanna: { en: 'a grassland with trees spread far apart, a wet season and a dry season', es: 'una pradera con árboles separados, con una época de lluvias y una época seca', fa: 'علفزاری با درختان دور از هم، با یک فصل بارانی و یک فصل خشک' },
    rainforest: { en: 'a thick, tall forest where rain falls in most months of the year', es: 'un bosque alto y espeso donde llueve casi todos los meses del año', fa: 'جنگل بلند و انبوه که در بیشتر ماه‌های سال باران می‌بارد' },
    desertification: { en: 'land that people could use turning into desert', es: 'tierra que la gente podía usar que se convierte en desierto', fa: 'تبدیل شدن زمینی که مردم از آن استفاده می‌کردند به بیابان' },
    elevation: { en: 'how high a place is above the sea', es: 'qué tan alto está un lugar sobre el nivel del mar', fa: 'بلندی یک جا از سطح بحر' },
    equator: { en: 'the line of 0° latitude around the middle of the Earth', es: 'la línea de 0° de latitud en el medio de la Tierra', fa: 'خط صفر درجه عرض جغرافیایی در میانهٔ زمین' },
    plateau: { en: 'a large area of high, mostly flat land', es: 'una zona grande de tierra alta y casi plana', fa: 'زمین بلند و بیشتر هموار و پهن' },
    climate: { en: 'the usual weather of a place over many years', es: 'el tiempo normal de un lugar durante muchos años', fa: 'هوای معمول یک جا در طول سال‌های زیاد' },
    vegetation: { en: 'the plants that grow naturally in a place', es: 'las plantas que crecen de forma natural en un lugar', fa: 'گیاهانی که به طور طبیعی در یک جا می‌رویند' }
  },

  npcs: [
    {
      x: 13, y: 6,
      name: { en: 'Aisha', es: 'Aisha', fa: 'عایشه' },
      role: { en: 'Farmer and cattle herder', es: 'Agricultora y pastora de ganado', fa: 'دهقان و مالدار' },
      look: { skin: 4, hair: '#2a8c6e', shirt: '#e07b39', robe: true },
      lines: [
        { en: 'Sannu means hello in Hausa! I am Aisha. Here we get one short rainy season.',
          es: '¡Sannu quiere decir hola en hausa! Soy Aisha. Aquí tenemos una sola temporada corta de lluvias.',
          fa: 'سنّو به زبان هوسا یعنی سلام! من عایشه هستم. این‌جا فقط یک فصل بارانی کوتاه داریم.' },
        { en: 'The [[sahel|Sahel]] is dry grassland south of the [[sahara|Sahara]]. We plant millet when rain comes.',
          es: 'El [[sahel|Sahel]] es pasto seco al sur del [[sahara|Sahara]]. Sembramos mijo cuando llega la lluvia.',
          fa: '[[sahel|ساحل]] علفزار خشک در جنوب [[sahara|صحرا]] است. وقتی باران می‌آید، ارزن می‌کاریم.' },
        { en: 'Sand creeps in: [[desertification|desertification]]. Rain fails, animals eat grass bare, people cut firewood.',
          es: 'La arena avanza: [[desertification|desertificación]]. La lluvia falla, los animales dejan la tierra pelada, la gente corta leña.',
          fa: 'ریگ پیش می‌آید: [[desertification|بیابان‌زایی]]. باران نمی‌بارد، حیوانات علف را تا خاک لُچ می‌خورند، مردم هیزم می‌بُرند.' },
        { en: 'Now we plant long rows of trees. Their roots hold the soil.',
          es: 'Ahora sembramos filas largas de árboles. Sus raíces sujetan la tierra.',
          fa: 'حالا قطارهای دراز درخت می‌کاریم. ریشه‌هایشان خاک را نگه می‌دارند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What is one cause of desertification in the Sahel?', es: '¿Cuál es una causa de la desertificación en el Sahel?', fa: 'یک علت بیابان‌زایی در ساحل چیست؟' },
        choices: [
          { ok: true, t: { en: 'Too many animals eat all the grass', es: 'Demasiados animales se comen todo el pasto', fa: 'حیوانات زیاد همهٔ علف را می‌خورند' },
            why: { en: 'Bare soil blows away in the wind. Then the land cannot grow food.', es: 'La tierra pelada se la lleva el viento. Luego la tierra no puede dar comida.', fa: 'خاک لُچ را باد می‌برد. بعد زمین دیگر غذا نمی‌دهد.' } },
          { t: { en: 'People plant long rows of new trees', es: 'La gente siembra filas largas de árboles nuevos', fa: 'مردم قطارهای دراز درخت نو می‌کارند' },
            why: { en: 'Trees do the opposite. Their roots hold the soil and slow the wind.', es: 'Los árboles hacen lo contrario. Sus raíces sujetan la tierra y frenan el viento.', fa: 'درخت‌ها برعکس کار می‌کنند. ریشه‌ها خاک را نگه می‌دارند و باد را آهسته می‌کنند.' } },
          { t: { en: 'A long rainy season every year', es: 'Una temporada de lluvias larga cada año', fa: 'یک فصل بارانی دراز در هر سال' },
            why: { en: 'More rain helps grass grow. Rain that fails is the problem.', es: 'Más lluvia ayuda a que crezca el pasto. El problema es cuando la lluvia falla.', fa: 'باران بیشتر به رشد علف کمک می‌کند. مشکل وقتی است که باران نمی‌بارد.' } }
        ]
      }
    },
    {
      x: 19, y: 13,
      name: { en: 'Wanjiru', es: 'Wanjiru', fa: 'وانجیرو' },
      role: { en: 'Wildlife ranger in Kenya', es: 'Guardaparques en Kenia', fa: 'نگهبان حیات وحش در کینیا' },
      look: { skin: 5, hair: '#141414', shirt: '#6b7d3a', pants: '#4a4a3a' },
      lines: [
        { en: 'Jambo, that is hello in Swahili! I am Wanjiru. This is the [[savanna|savanna]] of Kenya.',
          es: '¡Jambo! Así se dice hola en suajili. Soy Wanjiru. Esta es la [[savanna|sabana]] de Kenia.',
          fa: 'جامبو! این به زبان سواحیلی یعنی سلام. من وانجیرو هستم. این‌جا [[savanna|ساوانا]] کینیا است.' },
        { en: 'Wide grassland, trees far apart. Giraffes eat from flat-topped acacias. Zebras and lions live here.',
          es: 'Pradera ancha, árboles separados. Las jirafas comen de acacias de copa plana. Aquí viven cebras y leones.',
          fa: 'علفزار پهن، درختان دور از هم. زرافه‌ها از اکاسیاهای سر هموار می‌خورند. گوره‌خر و شیر هم این‌جا هستند.' },
        { en: 'Wet season, then dry season: the grass turns gold and animals walk far for water.',
          es: 'Época de lluvias, luego época seca: el pasto se pone dorado y los animales caminan lejos por agua.',
          fa: 'فصل بارانی، بعد فصل خشک: علف طلایی می‌شود و حیوانات برای آب راه دور می‌روند.' },
        { en: 'Mount Kenya is near the [[equator|equator]], but it has snow! High [[elevation|elevation]] means cold air.',
          es: '¡El monte Kenia está cerca del [[equator|ecuador]], pero tiene nieve! La [[elevation|elevación]] alta trae aire frío.',
          fa: 'کوه کینیا نزدیک [[equator|خط استوا]] است، اما برف دارد! [[elevation|ارتفاع]] زیاد یعنی هوای سرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why can there be snow on Mount Kenya, so close to the equator?', es: '¿Por qué puede haber nieve en el monte Kenia, tan cerca del ecuador?', fa: 'چرا روی کوه کینیا، که این‌قدر نزدیک خط استوا است، برف هست؟' },
        choices: [
          { ok: true, t: { en: 'It is so high that the air up there is cold', es: 'Es tan alto que allá arriba el aire es frío', fa: 'آن‌قدر بلند است که هوای بالا سرد است' },
            why: { en: 'Elevation changes climate. High places are cold, even near the equator.', es: 'La elevación cambia el clima. Los lugares altos son fríos, aun cerca del ecuador.', fa: 'ارتفاع اقلیم را تغییر می‌دهد. جاهای بلند سرد هستند، حتی نزدیک خط استوا.' } },
          { t: { en: 'The equator is the coldest place on Earth', es: 'El ecuador es el lugar más frío de la Tierra', fa: 'خط استوا سردترین جای زمین است' },
            why: { en: 'Low land near the equator is usually hot. The snow is there because the mountain is so high.', es: 'La tierra baja cerca del ecuador suele ser caliente. La nieve está ahí porque la montaña es muy alta.', fa: 'زمین پست نزدیک خط استوا معمولاً گرم است. برف آن‌جا است چون کوه خیلی بلند است.' } },
          { t: { en: 'Snow falls all over Kenya every single winter', es: 'Cae nieve en toda Kenia todos los inviernos', fa: 'هر زمستان در تمام کینیا برف زیاد می‌بارد' },
            why: { en: 'Most of Kenya never gets snow. Only the highest peaks do.', es: 'Casi toda Kenia nunca tiene nieve. Solo los picos más altos.', fa: 'بیشتر کینیا هرگز برف نمی‌بیند. فقط بلندترین قله‌ها برف دارند.' } }
        ]
      }
    },
    {
      x: 9, y: 18,
      name: { en: 'Dr. Chinedu', es: 'Dr. Chinedu', fa: 'داکتر چینِدو' },
      role: { en: 'Forest scientist in Nigeria', es: 'Científico del bosque en Nigeria', fa: 'دانشمند جنگل در نیجریه' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2f8f5b', pants: '#3b3b3b' },
      lines: [
        { en: 'Welcome to Nigeria\'s [[rainforest|rainforest]]! Near the equator it is hot, with rain most months.',
          es: '¡Bienvenido a la [[rainforest|selva tropical]] de Nigeria! Cerca del ecuador hace calor y llueve casi todos los meses.',
          fa: 'به [[rainforest|جنگل بارانی]] نیجریه خوش آمدی! نزدیک خط استوا هوا گرم است و بیشتر ماه‌ها باران می‌بارد.' },
        { en: 'Trees grow so tall and thick that little sunlight reaches the ground.',
          es: 'Los árboles crecen tan altos y tupidos que llega poca luz al suelo.',
          fa: 'درخت‌ها آن‌قدر بلند و انبوه می‌شوند که نور کمی به زمین می‌رسد.' },
        { en: 'South gets wetter: desert, Sahel, savanna, rainforest. Each has its own [[climate|climate]] and [[vegetation|vegetation]].',
          es: 'Al sur es más húmedo: desierto, Sahel, sabana, selva. Cada uno tiene su [[climate|clima]] y su [[vegetation|vegetación]].',
          fa: 'به جنوب مرطوب‌تر می‌شود: بیابان، ساحل، ساوانا، جنگل بارانی. هر کدام [[climate|اقلیم]] و [[vegetation|نباتات]] خود را دارد.' },
        { en: 'Lagos is on the Atlantic. Nairobi, a business and tech city, sits on a [[plateau|plateau]].',
          es: 'Lagos está en el Atlántico. Nairobi, ciudad de negocios y tecnología, está en una [[plateau|meseta]] alta.',
          fa: 'لاگوس کنار اقیانوس اطلس است. نایروبی، شهر تجارت و تکنالوژی، روی یک [[plateau|فلات]] بلند است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Walk south from the Sahara to the coast of Nigeria. In what order do you pass the bands?', es: 'Camina al sur desde el Sahara hasta la costa de Nigeria. ¿En qué orden pasas las franjas?', fa: 'از صحرا به طرف جنوب تا ساحل نیجریه برو. نوارها را به چه ترتیبی می‌بینی؟' },
        choices: [
          { ok: true, t: { en: 'Desert → Sahel → savanna → rainforest', es: 'Desierto → Sahel → sabana → selva', fa: 'بیابان ← ساحل ← ساوانا ← جنگل بارانی' },
            why: { en: 'Each step south is wetter and greener. The rainforest comes last, near the coast.', es: 'Cada paso al sur es más húmedo y más verde. La selva viene al final, cerca de la costa.', fa: 'هر قدم به طرف جنوب مرطوب‌تر و سبزتر است. جنگل بارانی در آخر، نزدیک ساحل، می‌آید.' } },
          { t: { en: 'Rainforest → savanna → Sahel → desert', es: 'Selva → sabana → Sahel → desierto', fa: 'جنگل بارانی ← ساوانا ← ساحل ← بیابان' },
            why: { en: 'That is the order going north, not south.', es: 'Ese es el orden yendo al norte, no al sur.', fa: 'این ترتیب رفتن به طرف شمال است، نه جنوب.' } },
          { t: { en: 'Desert → rainforest → Sahel → savanna', es: 'Desierto → selva → Sahel → sabana', fa: 'بیابان ← جنگل بارانی ← ساحل ← ساوانا' },
            why: { en: 'The land gets wetter step by step. It does not jump from desert to rainforest.', es: 'La tierra se vuelve más húmeda paso a paso. No salta del desierto a la selva.', fa: 'زمین قدم به قدم مرطوب‌تر می‌شود. از بیابان یک‌باره به جنگل بارانی نمی‌رسد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 4, text: { en: 'SAHARA ↑ north: the largest hot desert on Earth. [[sahel|SAHEL]] ↓ south: dry grassland across Africa, west to east.',
      es: 'SAHARA ↑ norte: el desierto caliente más grande de la Tierra. [[sahel|SAHEL]] ↓ sur: pasto seco que cruza África de oeste a este.',
      fa: 'صحرا ↑ شمال: بزرگ‌ترین بیابان گرم روی زمین. [[sahel|ساحل]] ↓ جنوب: علفزار خشک در سراسر افریقا، از غرب تا شرق.' } },
    { x: 24, y: 15, text: { en: 'MOUNT KENYA · about 5,200 meters high · snow on top, near the [[equator|equator]]. Higher [[elevation|elevation]] means colder air.',
      es: 'MONTE KENIA · unos 5,200 metros de alto · nieve arriba, cerca del [[equator|ecuador]]. Más [[elevation|elevación]] significa aire más frío.',
      fa: 'کوه کینیا · حدود ۵٬۲۰۰ متر بلندی · برف در سرش، نزدیک [[equator|خط استوا]]. [[elevation|ارتفاع]] بیشتر یعنی هوای سردتر.' } }
  ],

  /* the quest: Hadiza the tree planter (gold !) -> Mr. Otieno the beekeeper -> find the lone acacia west of the east road -> back to Hadiza */
  quest: {
    stat: 'hei',
    title: { en: 'Seeds for the Green Wall', es: 'Semillas para el Muro Verde', fa: 'تخم برای دیوار سبز' },
    giver: {
      x: 18, y: 9,
      name: { en: 'Hadiza', es: 'Hadiza', fa: 'حدیزه' },
      role: { en: 'Tree planter in the Sahel', es: 'Sembradora de árboles en el Sahel', fa: 'درخت‌کار در ساحل' },
      look: { skin: 2, hair: '#2a1a12', shirt: '#4f9a3c', pants: '#5a4a32', robe: true },
      lines: [
        { en: 'Sannu, friend! I am Hadiza. I plant trees on the dry edge of the [[sahel|Sahel]].',
          es: '¡Sannu, amigo! Soy Hadiza. Siembro árboles en el borde seco del [[sahel|Sahel]].',
          fa: 'سنّو، دوست من! من حدیزه هستم. در لبهٔ خشک [[sahel|ساحل]] درخت می‌کارم.' },
        { en: 'Our trees make a green wall. Their roots hold soil and slow [[desertification|desertification]].',
          es: 'Nuestros árboles forman un muro verde. Sus raíces sujetan la tierra y frenan la [[desertification|desertificación]].',
          fa: 'درخت‌های ما یک دیوار سبز می‌سازند. ریشه‌هایشان خاک را نگه می‌دارند و [[desertification|بیابان‌زایی]] را آهسته می‌کنند.' },
        { en: 'The Grump\'s storm took my seeds! I need a tree that lives through dry seasons.',
          es: '¡La tormenta del Gruñón se llevó mis semillas! Necesito un árbol que aguante las épocas secas.',
          fa: 'طوفان غرغرو تخم‌هایم را برد! درختی می‌خواهم که در فصل‌های خشک زنده بماند.' },
        { en: 'Ask Mr. Otieno the beekeeper. He knows every [[savanna|savanna]] tree. He is south-west.',
          es: 'Pregúntale al señor Otieno, el apicultor. Conoce cada árbol de la [[savanna|sabana]]. Está al suroeste.',
          fa: 'از آقای اوتینو زنبوردار بپرس. او هر درخت [[savanna|ساوانا]] را می‌شناسد. در جنوب غرب است.' }
      ],
      wait: { en: 'Mr. Otieno is south-west. Walk south until the dry yellow grass turns green, then west.',
        es: 'El señor Otieno está al suroeste. Camina al sur hasta que el pasto seco y amarillo se vuelva verde, luego al oeste.',
        fa: 'آقای اوتینو در جنوب غرب است. به جنوب برو تا علف خشک و زرد سبز شود، بعد به غرب.' },
      thanks: { en: 'Acacia pods! Their long roots reach deep water, so acacias live through the dry season.',
        es: '¡Vainas de acacia! Sus raíces largas llegan al agua profunda, así que las acacias viven en la época seca.',
        fa: 'غلاف‌های اکاسیا! ریشه‌های درازشان به آب عمیق می‌رسند، پس اکاسیا در فصل خشک زنده می‌ماند.' }
    },
    contact: {
      x: 14, y: 12,
      name: { en: 'Mr. Otieno', es: 'Sr. Otieno', fa: 'آقای اوتینو' },
      role: { en: 'Beekeeper in the savanna', es: 'Apicultor de la sabana', fa: 'زنبوردار در ساوانا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9822b', pants: '#3a3a2a', hat: '#e8d9a8' },
      lines: [
        { en: 'Hello! My bees love the acacia tree. It grows here in the [[savanna|savanna]].',
          es: '¡Hola! A mis abejas les encanta la acacia. Crece aquí en la [[savanna|sabana]].',
          fa: 'سلام! زنبورهای من درخت اکاسیا را دوست دارند. این درخت این‌جا در [[savanna|ساوانا]] می‌روید.' },
        { en: 'Its roots go very deep, so it stays alive in the dry season.',
          es: 'Sus raíces son muy profundas, por eso sigue viva en la época seca.',
          fa: 'ریشه‌هایش خیلی عمیق است، برای همین در فصل خشک زنده می‌ماند.' },
        { en: 'A lone acacia stands near the road. Its seed pods lie in the grass.',
          es: 'Hay una acacia sola cerca del camino. Sus vainas están en el pasto.',
          fa: 'یک درخت اکاسیای تنها نزدیک سرک است. غلاف‌های تخمش در میان علف افتاده‌اند.' },
        { en: 'Take the east road south to the Mount Kenya sign. Then walk four steps west.',
          es: 'Toma el camino del este hacia el sur hasta el letrero del monte Kenia. Luego camina cuatro pasos al oeste.',
          fa: 'سرک شرقی را به طرف جنوب تا تابلوی کوه کینیا بگیر. بعد چهار قدم به غرب برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [19, 15],
      hint: { en: '4 steps west of the road at the Mount Kenya sign', es: '4 pasos al oeste del camino, en el letrero del monte Kenia', fa: '۴ قدم غربِ راه، کنار تابلوی کوه کینیا' },
      found: { en: 'Acacia pods! You went south on the road, then west. Acacias grow in the [[savanna|savanna]].',
        es: '¡Vainas de acacia! Fuiste al sur por el camino y luego al oeste. Las acacias crecen en la [[savanna|sabana]].',
        fa: 'غلاف‌های اکاسیا! در سرک به جنوب رفتی، بعد به غرب. اکاسیا در [[savanna|ساوانا]] می‌روید.' },
      item: { icon: '🌱', name: { en: 'Acacia seed pods', es: 'Vainas de acacia', fa: 'غلاف‌های تخم اکاسیا' } }
    }
  },

  scraps: [[29, 1], [1, 20], [30, 12]],
  smudges: [[20, 5], [4, 14]],

  challenge: {
    at: [26, 8],
    type: 'carry', // in the world; the card version (sort) is the fallback
    zones: [{ bin: 'sahara', x: 24, y: 1, w: 4, h: 2 }, { bin: 'sahel', x: 24, y: 5, w: 4, h: 2 }, { bin: 'savanna', x: 24, y: 11, w: 3, h: 2 }, { bin: 'rain', x: 25, y: 18, w: 3, h: 2 }],
    style: 'bands',
    stat: 'reg',
    title: { en: 'From desert to rainforest', es: 'Del desierto a la selva', fa: 'از بیابان تا جنگل بارانی' },
    intro: { en: 'The Grump mixed up the land bands! Put each card in the band where you would find it. The bands go from north (top) to south (bottom).',
      es: '¡El Gruñón revolvió las franjas de tierra! Pon cada tarjeta en la franja donde la encontrarías. Las franjas van del norte (arriba) al sur (abajo).',
      fa: 'غرغرو نوارهای زمین را مخلوط کرد! هر کارت را در نواری بگذار که آن را آن‌جا پیدا می‌کنی. نوارها از شمال (بالا) تا جنوب (پایین) هستند.' },
    bins: [
      { id: 'sahara', icon: '🐪', tile: 'u', label: { en: 'Sahara desert', es: 'Desierto del Sahara', fa: 'بیابان صحرا' }, sub: { en: 'almost no rain', es: 'casi no llueve', fa: 'تقریباً باران نیست' } },
      { id: 'sahel', icon: '🌾', tile: 'g', label: { en: 'Sahel', es: 'Sahel', fa: 'ساحل' }, sub: { en: 'dry grass, one short rainy season', es: 'pasto seco, una temporada corta de lluvias', fa: 'علف خشک، یک فصل بارانی کوتاه' } },
      { id: 'savanna', icon: '🦒', tile: '.', label: { en: 'Savanna', es: 'Sabana', fa: 'ساوانا' }, sub: { en: 'grassland with trees far apart', es: 'pradera con árboles separados', fa: 'علفزار با درختان دور از هم' } },
      { id: 'rain', icon: '🌳', tile: 'j', label: { en: 'Rainforest', es: 'Selva tropical', fa: 'جنگل بارانی' }, sub: { en: 'rain in most months', es: 'llueve casi todos los meses', fa: 'باران در بیشتر ماه‌ها' } }
    ],
    items: [
      { bin: 'sahara', t: { en: 'Tall sand dunes and almost no rain', es: 'Dunas altas de arena y casi nada de lluvia', fa: 'تپه‌های بلند ریگ و تقریباً بدون باران' }, why: { en: 'Dunes and almost no rain: that is the Sahara desert.', es: 'Dunas y casi nada de lluvia: ese es el desierto del Sahara.', fa: 'تپهٔ ریگ و تقریباً بدون باران: این بیابان صحرا است.' } },
      { bin: 'sahara', t: { en: 'Camels carry goods across hot sand', es: 'Camellos llevan mercancías por la arena caliente', fa: 'شترها بار را از روی ریگ داغ می‌برند' }, why: { en: 'Camels can go a long time without water, so they cross the desert.', es: 'Los camellos aguantan mucho sin agua, por eso cruzan el desierto.', fa: 'شتر می‌تواند مدت زیادی بدون آب بماند، برای همین از بیابان می‌گذرد.' } },
      { bin: 'sahel', t: { en: 'Herders move cattle to find dry grass', es: 'Pastores mueven el ganado para buscar pasto seco', fa: 'مالداران گاوها را برای پیدا کردن علف خشک جابه‌جا می‌کنند' }, why: { en: 'The Sahel is dry grassland. Herders move to find grass for their animals.', es: 'El Sahel es pasto seco. Los pastores se mueven para buscar pasto para sus animales.', fa: 'ساحل علفزار خشک است. مالداران برای علف حیوانات خود جابه‌جا می‌شوند.' } },
      { bin: 'sahel', t: { en: 'Farmers plant millet in the one short rainy season', es: 'Agricultores siembran mijo en la única temporada corta de lluvias', fa: 'دهقانان در تنها فصل بارانی کوتاه ارزن می‌کارند' }, why: { en: 'One short rainy season is the sign of the Sahel.', es: 'Una sola temporada corta de lluvias es la marca del Sahel.', fa: 'یک فصل بارانی کوتاه نشانهٔ ساحل است.' } },
      { bin: 'savanna', t: { en: 'Giraffes eat from flat-topped acacia trees', es: 'Jirafas comen de acacias de copa plana', fa: 'زرافه‌ها از درختان اکاسیا با سر هموار می‌خورند' }, why: { en: 'Giraffes live on the savanna, where trees grow far apart in the grass.', es: 'Las jirafas viven en la sabana, donde los árboles crecen separados en el pasto.', fa: 'زرافه‌ها در ساوانا زندگی می‌کنند، جایی که درخت‌ها در میان علف دور از هم می‌رویند.' } },
      { bin: 'savanna', t: { en: 'Zebras run across wide, open grassland', es: 'Cebras corren por praderas anchas y abiertas', fa: 'گوره‌خرها در علفزار پهن و باز می‌دوند' }, why: { en: 'Wide grassland with a wet and a dry season is the savanna.', es: 'Una pradera ancha con época de lluvias y época seca es la sabana.', fa: 'علفزار پهن با فصل بارانی و فصل خشک، ساوانا است.' } },
      { bin: 'rain', t: { en: 'Trees so tall that little sunlight reaches the ground', es: 'Árboles tan altos que llega poca luz al suelo', fa: 'درخت‌هایی آن‌قدر بلند که نور کمی به زمین می‌رسد' }, why: { en: 'Only the rainforest grows trees that tall and thick.', es: 'Solo la selva tiene árboles así de altos y tupidos.', fa: 'فقط جنگل بارانی درخت‌هایی به این بلندی و انبوهی دارد.' } },
      { bin: 'rain', t: { en: 'Hot, wet air and rain in most months', es: 'Aire caliente y húmedo, y lluvia casi todos los meses', fa: 'هوای گرم و مرطوب و باران در بیشتر ماه‌ها' }, why: { en: 'Rain in most months, near the equator: that is the rainforest.', es: 'Lluvia casi todos los meses, cerca del ecuador: esa es la selva.', fa: 'باران در بیشتر ماه‌ها، نزدیک خط استوا: این جنگل بارانی است.' } }
    ],
    success: { en: 'The bands are back in order, from dry in the north to wet in the south!', es: '¡Las franjas vuelven a estar en orden, de seco en el norte a húmedo en el sur!', fa: 'نوارها دوباره به ترتیب هستند، از خشک در شمال تا مرطوب در جنوب!' }
  },

  boss: {
    at: [24, 18],
    stat: 'pla',
    need: 3,
    name: { en: 'The Dust Grump', es: 'El Gruñón de Polvo', fa: 'غرغروی گرد و خاک' },
    appear: { en: 'The Dust Grump is hiding in the rainforest clearing in the south-east!', es: '¡El Gruñón de Polvo se esconde en el claro de la selva, en el sureste!', fa: 'غرغروی گرد و خاک در میدان باز جنگل بارانی، در جنوب شرق، پنهان است!' },
    taunt: { en: 'Whoosh! I blew sand over every band. Can you still tell the desert from the rainforest?', es: '¡Fuuu! Soplé arena sobre todas las franjas. ¿Todavía puedes distinguir el desierto de la selva?', fa: 'فوووو! روی همهٔ نوارها ریگ پاشیدم. هنوز می‌توانی بیابان را از جنگل بارانی جدا کنی؟' },
    win: { en: 'The dust settles. Atlas page 4.1 floats down into your hands!', es: 'El polvo se asienta. ¡La página 4.1 del atlas cae en tus manos!', fa: 'گرد و خاک می‌نشیند. صفحهٔ ۴.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Where is the Sahel?', es: '¿Dónde está el Sahel?', fa: 'ساحل کجاست؟' },
        choices: [{ en: 'Dry grassland just south of the Sahara', es: 'Pasto seco justo al sur del Sahara', fa: 'علفزار خشک درست جنوب صحرا' }, { en: 'A mountain range in the middle of the Sahara', es: 'Una cordillera en el medio del Sahara', fa: 'یک سلسله‌کوه در وسط صحرا' }, { en: 'A wet forest on the coast of Nigeria', es: 'Un bosque húmedo en la costa de Nigeria', fa: 'یک جنگل مرطوب در ساحل نیجریه' }, { en: 'A desert north of the Sahara', es: 'Un desierto al norte del Sahara', fa: 'یک بیابان در شمال صحرا' }], answer: 0,
        why: { en: 'The Sahel is the dry grassland just south of the Sahara. It stretches across Africa from west to east.', es: 'El Sahel es el pasto seco justo al sur del Sahara. Cruza África de oeste a este.', fa: 'ساحل علفزار خشک درست در جنوب صحرا است. از غرب تا شرق افریقا کشیده شده است.' } },
      { q: { en: 'What does desertification mean?', es: '¿Qué significa desertificación?', fa: 'بیابان‌زایی یعنی چه؟' },
        choices: [{ en: 'Usable land slowly turning into desert', es: 'Tierra útil que poco a poco se vuelve desierto', fa: 'زمین قابل استفاده که آهسته بیابان می‌شود' }, { en: 'Farming in a desert with water from wells', es: 'Cultivar en un desierto con agua de pozos', fa: 'کشت در بیابان با آب چاه' }, { en: 'Moving away from a desert to a city', es: 'Mudarse de un desierto a una ciudad', fa: 'کوچ کردن از بیابان به شهر' }, { en: 'A year with extra rain in the desert', es: 'Un año con lluvia extra en el desierto', fa: 'سالی با باران بیشتر در بیابان' }], answer: 0,
        why: { en: 'Desertification is usable land slowly becoming desert.', es: 'La desertificación es tierra útil que poco a poco se vuelve desierto.', fa: 'بیابان‌زایی یعنی زمین قابل استفاده آهسته آهسته بیابان شود.' } },
      { q: { en: 'Which of these helps cause desertification?', es: '¿Cuál de estas cosas ayuda a causar la desertificación?', fa: 'کدام یک از این‌ها باعث بیابان‌زایی می‌شود؟' },
        choices: [{ en: 'Cutting trees for firewood', es: 'Cortar árboles para leña', fa: 'بریدن درخت برای هیزم' }, { en: 'Planting rows of trees', es: 'Sembrar filas de árboles', fa: 'کاشتن قطار درخت' }, { en: 'Letting the grass grow back', es: 'Dejar que el pasto vuelva a crecer', fa: 'گذاشتن که علف دوباره بروید' }, { en: 'Rain that comes on time', es: 'Lluvia que llega a tiempo', fa: 'بارانی که به وقتش می‌بارد' }], answer: 0,
        why: { en: 'With fewer trees, few roots hold the soil. Then wind and rain carry it away.', es: 'Con menos árboles, pocas raíces sujetan la tierra. Luego el viento y la lluvia se la llevan.', fa: 'با درخت کمتر، ریشهٔ کمی خاک را نگه می‌دارد. بعد باد و باران آن را می‌برند.' } },
      { q: { en: 'Why is there snow on Mount Kenya, near the equator?', es: '¿Por qué hay nieve en el monte Kenia, cerca del ecuador?', fa: 'چرا روی کوه کینیا، نزدیک خط استوا، برف هست؟' },
        choices: [{ en: 'High elevation makes the air cold', es: 'La gran elevación enfría el aire', fa: 'ارتفاع زیاد هوا را سرد می‌کند' }, { en: 'It is very close to the North Pole', es: 'Está muy cerca del Polo Norte', fa: 'خیلی نزدیک قطب شمال است' }, { en: 'Wind brings snow from the Sahara', es: 'El viento trae nieve del Sahara', fa: 'باد از صحرا برف می‌آورد' }, { en: 'The rainforest makes it cold', es: 'La selva lo hace frío', fa: 'جنگل بارانی آن را سرد می‌کند' }], answer: 0,
        why: { en: 'The higher you go, the colder the air. Mount Kenya is about 5,200 meters high.', es: 'Mientras más alto, más frío es el aire. El monte Kenia mide unos 5,200 metros.', fa: 'هر چه بالاتر بروی، هوا سردتر است. کوه کینیا حدود ۵٬۲۰۰ متر بلندی دارد.' } },
      { q: { en: 'As you travel south from the Sahara toward the coast of Nigeria, the land gets…', es: 'Mientras viajas al sur desde el Sahara hacia la costa de Nigeria, la tierra se vuelve…', fa: 'وقتی از صحرا به طرف ساحل نیجریه به جنوب سفر می‌کنی، زمین…' },
        choices: [{ en: 'wetter and greener', es: 'más húmeda y más verde', fa: 'مرطوب‌تر و سبزتر می‌شود' }, { en: 'drier and sandier', es: 'más seca y con más arena', fa: 'خشک‌تر و ریگی‌تر می‌شود' }, { en: 'colder and snowier', es: 'más fría y con más nieve', fa: 'سردتر و برفی‌تر می‌شود' }, { en: 'exactly the same', es: 'exactamente igual', fa: 'هیچ فرقی نمی‌کند' }], answer: 0,
        why: { en: 'Desert, Sahel, savanna, rainforest: each band south gets more rain.', es: 'Desierto, Sahel, sabana, selva: cada franja hacia el sur recibe más lluvia.', fa: 'بیابان، ساحل، ساوانا، جنگل بارانی: هر نوار به طرف جنوب باران بیشتری دارد.' } },
      { q: { en: 'Which city sits on the Atlantic coast?', es: '¿Qué ciudad está en la costa del Atlántico?', fa: 'کدام شهر در ساحل اقیانوس اطلس است؟' },
        choices: [{ en: 'Lagos, Nigeria', es: 'Lagos, Nigeria', fa: 'لاگوس، نیجریه' }, { en: 'Nairobi, Kenya', es: 'Nairobi, Kenia', fa: 'نایروبی، کینیا' }, { en: 'Kano, Nigeria', es: 'Kano, Nigeria', fa: 'کانو، نیجریه' }, { en: 'Niamey, Niger', es: 'Niamey, Níger', fa: 'نیامی، نیجر' }], answer: 0,
        why: { en: 'Lagos is on the Atlantic coast. Nairobi, Kano and Niamey are all far inland.', es: 'Lagos está en la costa del Atlántico. Nairobi, Kano y Niamey están lejos del mar.', fa: 'لاگوس در ساحل اقیانوس اطلس است. نایروبی، کانو و نیامی همه دور از بحر هستند.' } },
      { q: { en: 'Africa\'s rainforests are found mostly near the…', es: 'Las selvas de África están más que nada cerca del…', fa: 'جنگل‌های بارانی افریقا بیشتر نزدیک … هستند.' },
        choices: [{ en: 'equator', es: 'ecuador', fa: 'خط استوا' }, { en: 'Sahara', es: 'Sahara', fa: 'صحرا' }, { en: 'North Pole', es: 'Polo Norte', fa: 'قطب شمال' }, { en: 'tops of mountains', es: 'las cimas de las montañas', fa: 'سر کوه‌ها' }], answer: 0,
        why: { en: 'Near the equator it is hot and wet most of the year, so rainforests grow there.', es: 'Cerca del ecuador hace calor y llueve casi todo el año, por eso ahí crecen las selvas.', fa: 'نزدیک خط استوا بیشتر سال گرم و بارانی است، برای همین جنگل بارانی آن‌جا می‌روید.' } },
      { q: { en: 'What can a village in the Sahel do to slow the desert?', es: '¿Qué puede hacer un pueblo del Sahel para frenar el desierto?', fa: 'یک قریه در ساحل برای آهسته کردن بیابان چه کار می‌تواند بکند؟' },
        choices: [{ en: 'Plant rows of trees to hold the soil', es: 'Sembrar filas de árboles para sujetar la tierra', fa: 'قطار درخت بکارد تا خاک را نگه دارد' }, { en: 'Let the cattle eat all the grass there', es: 'Dejar que el ganado coma todo el pasto', fa: 'بگذارد گاوها همهٔ علف آن‌جا را بخورند' }, { en: 'Cut down more trees for firewood', es: 'Cortar más árboles para hacer leña', fa: 'درخت‌های بیشتری برای هیزم ببُرد' }, { en: 'Move the Sahara to the north', es: 'Mover el Sahara hacia el norte', fa: 'صحرا را به طرف شمال ببرد' }], answer: 0,
        why: { en: 'Tree roots hold the soil, and rows of trees slow the wind.', es: 'Las raíces sujetan la tierra, y las filas de árboles frenan el viento.', fa: 'ریشهٔ درخت خاک را نگه می‌دارد و قطار درخت‌ها باد را آهسته می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Going south from the [[sahara|Sahara]], the land gets wetter: desert, then [[sahel|Sahel]], then [[savanna|savanna]], then [[rainforest|rainforest]].', es: 'Yendo al sur desde el [[sahara|Sahara]], la tierra es más húmeda: desierto, luego [[sahel|Sahel]], luego [[savanna|sabana]], luego [[rainforest|selva]].', fa: 'از [[sahara|صحرا]] که به جنوب بروی، زمین مرطوب‌تر می‌شود: بیابان، بعد [[sahel|ساحل]]، بعد [[savanna|ساوانا]]، بعد [[rainforest|جنگل بارانی]].' },
    { en: '[[desertification|Desertification]] happens when failing rain, too much grazing and tree cutting work together. Rows of trees help hold the soil.', es: 'La [[desertification|desertificación]] pasa cuando la falta de lluvia, el exceso de pastoreo y la tala de árboles se juntan. Las filas de árboles ayudan a sujetar la tierra.', fa: '[[desertification|بیابان‌زایی]] وقتی رخ می‌دهد که نباریدن باران، چَرای زیاد و بریدن درخت با هم یک‌جا شوند. قطار درخت‌ها به نگه داشتن خاک کمک می‌کند.' },
    { en: 'High [[elevation|elevation]] makes places cold, so Mount Kenya has snow near the [[equator|equator]]. Lagos sits on the coast, and Nairobi sits on a high [[plateau|plateau]].', es: 'La [[elevation|elevación]] alta hace que los lugares sean fríos, por eso el monte Kenia tiene nieve cerca del [[equator|ecuador]]. Lagos está en la costa y Nairobi en una [[plateau|meseta]] alta.', fa: '[[elevation|ارتفاع]] زیاد جاها را سرد می‌کند، برای همین کوه کینیا نزدیک [[equator|خط استوا]] برف دارد. لاگوس در ساحل است و نایروبی روی یک [[plateau|فلات]] بلند.' }
  ],
  reflect: {
    q: { en: 'Think of a place where you have lived. Was it more like the desert, the Sahel, the savanna or the rainforest? How did the weather change what people grew or wore?', es: 'Piensa en un lugar donde has vivido. ¿Se parecía más al desierto, al Sahel, a la sabana o a la selva? ¿Cómo cambiaba el clima lo que la gente cultivaba o se ponía?', fa: 'به جایی فکر کن که در آن زندگی کرده‌ای. بیشتر شبیه بیابان، ساحل، ساوانا یا جنگل بارانی بود؟ هوا چه تغییری در کشت یا لباس مردم می‌داد؟' },
    starter: { en: 'The place I lived was most like', es: 'El lugar donde viví se parecía más a', fa: 'جایی که من زندگی می‌کردم بیشتر شبیه' }
  }
};
