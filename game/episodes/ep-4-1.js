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
    { en: 'Christopher: "The Grump blew dust all over Nigeria and Kenya! Now the land bands are mixed up. Talk to the herder, the ranger and the forest scientist. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón sopló polvo por todo Nigeria y Kenia! Ahora las franjas de tierra están revueltas. Habla con la pastora, la guardaparques y el científico del bosque. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو در سراسر نیجریه و کینیا گرد و خاک پاشید! حالا نوارهای زمین با هم مخلوط شده‌اند. با مالدار، نگهبان پارک و دانشمند جنگل گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. North (top) is the Sahara, then the Sahel, the savanna, and the rainforest at the bottom. */
  map: [
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr',
    'ruuuuruuusuuuuuuuuuuusuuuuuuuuur',
    'ruusuuuuuurruuuuuuuuuuuruusuuuur',
    'ruuuuuuuuuuuusuuusuuuuuruuuuusur',
    'rsssssxssssssssssssssssssssssssr',
    'aggggggggagggggggaggggggggggagga',
    'agggggggggggggOgggggggggggggggga',
    'agg::::::::::::::::::::::::::gga',
    'aggggggg:o1o1oggggggggg:ggggggga',
    'agaggggg:1o1o1ggggggagg:gggggaga',
    'aggggggg:ggggaggggggggg:ggggggga',
    'a...""..:.....a.....a..:.......a',
    'a..a....:."".....""....:...AA..a',
    'a"....".:...a..........:..MAnG.a',
    'a.......:..............:.MMMMMMa',
    'a....a..:....""...a....:x.MMM..a',
    'a.a.....:..a.......".".:.......a',
    'jjjjjjjj:jjjjjjjjjjjjjj:jjjjjjjj',
    'jjjjj.,.....jjjjjjjj......,.jjjj',
    'jjjjj.....,.::::::::........jjjj',
    'j::::::::jjjjjjjjjjjjjjjjjjjjjjj',
    'jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj'
  ],
  start: [4, 6],

  tools: ['axe', 'sickle'],
  finds: [
    { clueAt: [8, 4], at: [12, 1], decor: 'fossil',
      clue: { en: 'From this note, walk 3 steps north, then 4 steps east. Something is hidden in the Sahara sand.', es: 'Desde esta nota, camina 3 pasos al norte y luego 4 pasos al este. Algo está escondido en la arena del Sahara.', fa: 'از این یادداشت، ۳ قدم به شمال برو، بعد ۴ قدم به شرق. چیزی در ریگ صحرا پنهان است.' },
      text: { en: 'You followed compass directions! North is up, toward the Sahara. You found a fossil. Millions of years ago, a sea covered part of the Sahara. In Egypt, people found fossils of whales in the desert!', es: '¡Seguiste las direcciones de la brújula! El norte está arriba, hacia el Sahara. Encontraste un fósil. Hace millones de años, un mar cubría parte del Sahara. ¡En Egipto encontraron fósiles de ballenas en el desierto!', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! شمال بالا است، به طرف صحرا. تو یک فسیل پیدا کردی. میلیون‌ها سال پیش، یک بحر قسمتی از صحرا را پوشانده بود. در مصر، مردم فسیل نهنگ‌ها را در بیابان پیدا کردند!' } },
    { clueAt: [11, 14], at: [23, 17], decor: 'feather',
      clue: { en: 'The land gets wetter as you go south. Follow the road that passes the Mount Kenya sign south. Stand on its last road square, where rainforest trees grow on its west side and its east side.', es: 'La tierra se vuelve más húmeda hacia el sur. Sigue hacia el sur el camino que pasa junto al letrero del monte Kenia. Párate en su último cuadro de camino, donde crecen árboles de selva al oeste y al este.', fa: 'هر چه به جنوب بروی، زمین مرطوب‌تر می‌شود. سرکی را که از کنار تابلوی کوه کینیا می‌گذرد به طرف جنوب دنبال کن. روی آخرین خانهٔ سرک بایست، جایی که درختان جنگل بارانی در غرب و شرق آن روییده‌اند.' },
      text: { en: 'You found the place where the savanna ends and the rainforest begins! A grey feather lay on the road. African grey parrots live in the rainforests of West and Central Africa.', es: '¡Encontraste el lugar donde termina la sabana y empieza la selva! Una pluma gris estaba en el camino. Los loros grises africanos viven en las selvas de África occidental y central.', fa: 'تو جایی را پیدا کردی که علفزار تمام می‌شود و جنگل بارانی شروع می‌شود! یک پر خاکستری روی سرک بود. طوطی‌های خاکستری افریقایی در جنگل‌های بارانی غرب و مرکز افریقا زندگی می‌کنند.' } }
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
        { en: 'Sannu! That means hello in Hausa. I am Aisha. My family farms and keeps cattle here in the [[sahel|Sahel]] of northern Nigeria. The Sahel is a belt of dry grassland just south of the [[sahara|Sahara]], the largest hot desert on Earth.',
          es: '¡Sannu! Así se dice hola en hausa. Soy Aisha. Mi familia cultiva y cría ganado aquí, en el [[sahel|Sahel]] del norte de Nigeria. El Sahel es una franja de pasto seco justo al sur del [[sahara|Sahara]], el desierto caliente más grande de la Tierra.',
          fa: 'سنّو! این به زبان هوسا یعنی سلام. من عایشه هستم. خانوادهٔ من این‌جا در [[sahel|ساحل]] شمال نیجریه کشت می‌کند و گاو نگه می‌دارد. ساحل نوار علفزار خشک است، درست در جنوب [[sahara|صحرا]]، بزرگ‌ترین بیابان گرم روی زمین.' },
        { en: 'We get one short rainy season each year. The rest of the year is long and dry. We plant millet when the rain comes. We harvest before the dry months arrive.',
          es: 'Tenemos una sola temporada de lluvias corta cada año. El resto del año es largo y seco. Sembramos mijo cuando llega la lluvia. Cosechamos antes de que lleguen los meses secos.',
          fa: 'ما هر سال فقط یک فصل بارانی کوتاه داریم. باقی سال دراز و خشک است. وقتی باران می‌آید، ارزن می‌کاریم. پیش از ماه‌های خشک حاصل را جمع می‌کنیم.' },
        { en: 'Look north. Sand is creeping into old fields. That is [[desertification|desertification]]. The rain fails, animals eat the grass down to bare soil, and people cut trees for firewood. Now we plant long rows of trees. Their roots hold the soil.',
          es: 'Mira al norte. La arena se mete en los campos viejos. Eso es la [[desertification|desertificación]]. La lluvia falla, los animales comen el pasto hasta dejar la tierra pelada y la gente corta árboles para leña. Ahora sembramos filas largas de árboles. Sus raíces sujetan la tierra.',
          fa: 'به طرف شمال نگاه کن. ریگ آهسته به کشتزارهای کهنه می‌آید. این [[desertification|بیابان‌زایی]] است. باران نمی‌بارد، حیوانات علف را تا خاک لُچ می‌خورند و مردم درخت را برای هیزم می‌بُرند. حالا ما قطارهای دراز درخت می‌کاریم. ریشه‌های آن‌ها خاک را نگه می‌دارند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What is one cause of desertification in the Sahel?', es: '¿Cuál es una causa de la desertificación en el Sahel?', fa: 'یک علت بیابان‌زایی در ساحل چیست؟' },
        choices: [
          { ok: true, t: { en: 'Animals eat the grass down to bare soil', es: 'Los animales comen el pasto hasta dejar la tierra pelada', fa: 'حیوانات علف را تا خاک لُچ می‌خورند' },
            why: { en: 'Bare soil blows away in the wind. Then the land cannot grow food.', es: 'La tierra pelada se la lleva el viento. Luego la tierra no puede dar comida.', fa: 'خاک لُچ را باد می‌برد. بعد زمین دیگر غذا نمی‌دهد.' } },
          { t: { en: 'People plant long rows of trees', es: 'La gente siembra filas largas de árboles', fa: 'مردم قطارهای دراز درخت می‌کارند' },
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
        { en: 'Jambo! That means hello in Swahili. I am Wanjiru, a wildlife ranger in Kenya. This is the [[savanna|savanna]]: wide grassland with trees spread far apart. Giraffes eat from the flat-topped acacia trees. Zebras and lions live here too.',
          es: '¡Jambo! Así se dice hola en suajili. Soy Wanjiru, guardaparques en Kenia. Esta es la [[savanna|sabana]]: una pradera ancha con árboles muy separados. Las jirafas comen de las acacias de copa plana. Aquí también viven cebras y leones.',
          fa: 'جامبو! این به زبان سواحیلی یعنی سلام. من وانجیرو هستم، نگهبان حیات وحش در کینیا. این‌جا [[savanna|ساوانا]] است: علفزار پهن با درختانی که از هم دور هستند. زرافه‌ها از درختان اکاسیا که سر هموار دارند می‌خورند. گوره‌خر و شیر هم این‌جا زندگی می‌کنند.' },
        { en: 'The savanna has a wet season and a dry season. In the dry season the grass turns gold. Then the animals walk far to find water.',
          es: 'La sabana tiene una época de lluvias y una época seca. En la época seca el pasto se pone dorado. Entonces los animales caminan lejos para encontrar agua.',
          fa: 'ساوانا یک فصل بارانی و یک فصل خشک دارد. در فصل خشک علف زرد طلایی می‌شود. آن وقت حیوانات راه دور می‌روند تا آب پیدا کنند.' },
        { en: 'Now look east at Mount Kenya. It sits almost on the [[equator|equator]], but it has snow and ice on top! The reason is [[elevation|elevation]]. The higher you climb, the colder the air gets.',
          es: 'Ahora mira al este, al monte Kenia. Está casi sobre el [[equator|ecuador]], ¡pero tiene nieve y hielo arriba! La razón es la [[elevation|elevación]]. Mientras más alto subes, más frío es el aire.',
          fa: 'حالا به طرف شرق، به کوه کینیا نگاه کن. تقریباً روی [[equator|خط استوا]] است، اما سرش برف و یخ دارد! دلیلش [[elevation|ارتفاع]] است. هر چه بالاتر بروی، هوا سردتر می‌شود.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why can there be snow on Mount Kenya, so close to the equator?', es: '¿Por qué puede haber nieve en el monte Kenia, tan cerca del ecuador?', fa: 'چرا روی کوه کینیا، که این‌قدر نزدیک خط استوا است، برف هست؟' },
        choices: [
          { ok: true, t: { en: 'It is very high, and the air gets colder as you go up', es: 'Es muy alto, y el aire se enfría mientras subes', fa: 'خیلی بلند است و هر چه بالا بروی هوا سردتر می‌شود' },
            why: { en: 'Elevation changes climate. High places are cold, even near the equator.', es: 'La elevación cambia el clima. Los lugares altos son fríos, aun cerca del ecuador.', fa: 'ارتفاع اقلیم را تغییر می‌دهد. جاهای بلند سرد هستند، حتی نزدیک خط استوا.' } },
          { t: { en: 'The equator is the coldest place on Earth', es: 'El ecuador es el lugar más frío de la Tierra', fa: 'خط استوا سردترین جای زمین است' },
            why: { en: 'Low land near the equator is usually hot. The snow is there because the mountain is so high.', es: 'La tierra baja cerca del ecuador suele ser caliente. La nieve está ahí porque la montaña es muy alta.', fa: 'زمین پست نزدیک خط استوا معمولاً گرم است. برف آن‌جا است چون کوه خیلی بلند است.' } },
          { t: { en: 'Snow falls all over Kenya every winter', es: 'Cae nieve en toda Kenia cada invierno', fa: 'هر زمستان در تمام کینیا برف می‌بارد' },
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
        { en: 'Welcome to the [[rainforest|rainforest]] of southern Nigeria! I study the trees here. Close to the equator it is hot, and rain falls in most months of the year. The trees grow so tall and thick that little sunlight reaches the ground.',
          es: '¡Bienvenido a la [[rainforest|selva tropical]] del sur de Nigeria! Yo estudio los árboles de aquí. Cerca del ecuador hace calor y llueve casi todos los meses del año. Los árboles crecen tan altos y tupidos que llega poca luz al suelo.',
          fa: 'به [[rainforest|جنگل بارانی]] جنوب نیجریه خوش آمدی! من درخت‌های این‌جا را مطالعه می‌کنم. نزدیک خط استوا هوا گرم است و در بیشتر ماه‌های سال باران می‌بارد. درخت‌ها آن‌قدر بلند و انبوه می‌شوند که نور کمی به زمین می‌رسد.' },
        { en: 'Did you see the pattern on your walk? Going south from the Sahara, the land gets wetter and greener: desert, then Sahel, then savanna, then rainforest. Each band has its own [[climate|climate]] and [[vegetation|vegetation]].',
          es: '¿Viste el patrón en tu camino? Yendo al sur desde el Sahara, la tierra se vuelve más húmeda y más verde: desierto, luego Sahel, luego sabana, luego selva. Cada franja tiene su propio [[climate|clima]] y su propia [[vegetation|vegetación]].',
          fa: 'در راه این نقشه را دیدی؟ از صحرا که به طرف جنوب بروی، زمین مرطوب‌تر و سبزتر می‌شود: بیابان، بعد ساحل، بعد ساوانا، بعد جنگل بارانی. هر نوار [[climate|اقلیم]] و [[vegetation|نباتات]] خودش را دارد.' },
        { en: 'My home city is Lagos, on the Atlantic coast. It is one of the largest cities in Africa. In Kenya, Nairobi sits inland on a high [[plateau|plateau]]. It is a center for business and technology.',
          es: 'Mi ciudad es Lagos, en la costa del Atlántico. Es una de las ciudades más grandes de África. En Kenia, Nairobi está tierra adentro, sobre una [[plateau|meseta]] alta. Es un centro de negocios y tecnología.',
          fa: 'شهر من لاگوس است، در ساحل اقیانوس اطلس. یکی از بزرگ‌ترین شهرهای افریقا است. در کینیا، نایروبی دور از بحر روی یک [[plateau|فلات]] بلند است. نایروبی مرکز تجارت و تکنالوژی است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'You walk from the Sahara south to the coast of Nigeria. In what order do you pass the bands?', es: 'Caminas desde el Sahara hacia el sur, hasta la costa de Nigeria. ¿En qué orden pasas las franjas?', fa: 'از صحرا به طرف جنوب تا ساحل نیجریه راه می‌روی. نوارها را به چه ترتیبی می‌بینی؟' },
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
    { x: 6, y: 4, text: { en: 'SAHARA ↑ north: the largest hot desert on Earth. SAHEL ↓ south: dry grassland. The [[sahel|Sahel]] stretches all the way across Africa, from west to east.',
      es: 'SAHARA ↑ norte: el desierto caliente más grande de la Tierra. SAHEL ↓ sur: pasto seco. El [[sahel|Sahel]] cruza toda África, de oeste a este.',
      fa: 'صحرا ↑ شمال: بزرگ‌ترین بیابان گرم روی زمین. ساحل ↓ جنوب: علفزار خشک. [[sahel|ساحل]] از غرب تا شرق در سراسر افریقا کشیده شده است.' } },
    { x: 24, y: 15, text: { en: 'MOUNT KENYA · about 5,200 meters high · snow and ice on top, very close to the [[equator|equator]]. Higher [[elevation|elevation]] means colder air.',
      es: 'MONTE KENIA · unos 5,200 metros de alto · nieve y hielo arriba, muy cerca del [[equator|ecuador]]. Más [[elevation|elevación]] significa aire más frío.',
      fa: 'کوه کینیا · حدود ۵٬۲۰۰ متر بلندی · برف و یخ در سرش، خیلی نزدیک [[equator|خط استوا]]. [[elevation|ارتفاع]] بیشتر یعنی هوای سردتر.' } }
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
        { en: 'Sannu, friend! I am Hadiza. I plant trees along the dry edge of the [[sahel|Sahel]]. Our trees make a long green wall. Their roots hold the soil and slow [[desertification|desertification]].',
          es: '¡Sannu, amigo! Soy Hadiza. Siembro árboles en el borde seco del [[sahel|Sahel]]. Nuestros árboles forman un muro verde muy largo. Sus raíces sujetan la tierra y frenan la [[desertification|desertificación]].',
          fa: 'سنّو، دوست من! من حدیزه هستم. در لبهٔ خشک [[sahel|ساحل]] درخت می‌کارم. درخت‌های ما یک دیوار سبز دراز می‌سازند. ریشه‌های آن‌ها خاک را نگه می‌دارند و [[desertification|بیابان‌زایی]] را آهسته می‌کنند.' },
        { en: 'But the Grump\'s dust storm blew away all my seeds. I need seeds from a tree that can live through a long dry season. Mr. Otieno, the beekeeper, knows every tree in the [[savanna|savanna]]. He is south-west of here. Will you ask him?',
          es: 'Pero la tormenta de polvo del Gruñón se llevó todas mis semillas. Necesito semillas de un árbol que aguante una época seca larga. El señor Otieno, el apicultor, conoce cada árbol de la [[savanna|sabana]]. Está al suroeste de aquí. ¿Le preguntas?',
          fa: 'اما طوفان گرد و خاک غرغرو همهٔ تخم‌هایم را برد. تخم درختی را می‌خواهم که در یک فصل خشک دراز زنده بماند. آقای اوتینو، زنبوردار، هر درخت [[savanna|ساوانا]] را می‌شناسد. او در جنوب غرب این‌جا است. از او می‌پرسی؟' }
      ],
      wait: { en: 'Mr. Otieno is south-west of here. Walk south until the dry yellow grass turns green. Then go west.',
        es: 'El señor Otieno está al suroeste de aquí. Camina al sur hasta que el pasto seco y amarillo se vuelva verde. Luego ve al oeste.',
        fa: 'آقای اوتینو در جنوب غرب این‌جا است. به طرف جنوب برو تا علف خشک و زرد سبز شود. بعد به طرف غرب برو.' },
      thanks: { en: 'Acacia pods! The acacia has long roots that reach deep water. That is how it lives through the dry season. I will plant these seeds in the Sahel to hold the soil. Thank you!',
        es: '¡Vainas de acacia! La acacia tiene raíces largas que llegan al agua profunda. Así vive durante la época seca. Sembraré estas semillas en el Sahel para sujetar la tierra. ¡Gracias!',
        fa: 'غلاف‌های اکاسیا! اکاسیا ریشه‌های دراز دارد که به آب عمیق می‌رسند. این‌طور در فصل خشک زنده می‌ماند. این تخم‌ها را در ساحل می‌کارم تا خاک را نگه دارند. تشکر!' }
    },
    contact: {
      x: 14, y: 12,
      name: { en: 'Mr. Otieno', es: 'Sr. Otieno', fa: 'آقای اوتینو' },
      role: { en: 'Beekeeper in the savanna', es: 'Apicultor de la sabana', fa: 'زنبوردار در ساوانا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#c9822b', pants: '#3a3a2a', hat: '#e8d9a8' },
      lines: [
        { en: 'Hello! My bees love the acacia tree. It grows here in the [[savanna|savanna]]. Its roots go very deep, so it stays alive in the dry season.',
          es: '¡Hola! A mis abejas les encanta la acacia. Crece aquí en la [[savanna|sabana]]. Sus raíces son muy profundas, por eso sigue viva en la época seca.',
          fa: 'سلام! زنبورهای من درخت اکاسیا را خیلی دوست دارند. این درخت این‌جا در [[savanna|ساوانا]] می‌روید. ریشه‌هایش خیلی عمیق است، برای همین در فصل خشک زنده می‌ماند.' },
        { en: 'Walk east to the road that runs south. Follow it south to the Mount Kenya sign. Then walk four steps west. You will stand next to a lone acacia. Its seed pods lie in the grass.',
          es: 'Camina al este hasta el camino que va al sur. Síguelo al sur hasta el letrero del monte Kenia. Luego camina cuatro pasos al oeste. Estarás junto a una acacia sola. Sus vainas están en el pasto.',
          fa: 'به طرف شرق تا راهی برو که به جنوب می‌رود. آن را به طرف جنوب تا تابلوی کوه کینیا دنبال کن. بعد چهار قدم به طرف غرب برو. کنار یک درخت اکاسیای تنها می‌ایستی. غلاف‌های تخمش در میان علف افتاده‌اند.' }
      ]
    },
    action: {
      type: 'find',
      at: [19, 15],
      hint: { en: '4 steps west of the road at the Mount Kenya sign', es: '4 pasos al oeste del camino, en el letrero del monte Kenia', fa: '۴ قدم غربِ راه، کنار تابلوی کوه کینیا' },
      found: { en: 'Here are the acacia seed pods, in the grass! You followed the road south, then went west. The acacia grows in the [[savanna|savanna]], where there is a wet season and a dry season.',
        es: '¡Aquí están las vainas de acacia, en el pasto! Seguiste el camino al sur y luego fuiste al oeste. La acacia crece en la [[savanna|sabana]], donde hay una época de lluvias y una época seca.',
        fa: 'غلاف‌های تخم اکاسیا این‌جا در میان علف هستند! راه را به طرف جنوب دنبال کردی، بعد به غرب رفتی. اکاسیا در [[savanna|ساوانا]] می‌روید، جایی که یک فصل بارانی و یک فصل خشک دارد.' },
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
        choices: [{ en: 'A dry grassland belt on the southern edge of the Sahara', es: 'Una franja de pasto seco en el borde sur del Sahara', fa: 'نوار علفزار خشک در لبهٔ جنوبی صحرا' }, { en: 'A mountain range in the middle of the Sahara', es: 'Una cordillera en el medio del Sahara', fa: 'یک سلسله‌کوه در وسط صحرا' }, { en: 'A wet forest on the coast of Nigeria', es: 'Un bosque húmedo en la costa de Nigeria', fa: 'یک جنگل مرطوب در ساحل نیجریه' }, { en: 'A desert north of the Sahara', es: 'Un desierto al norte del Sahara', fa: 'یک بیابان در شمال صحرا' }], answer: 0,
        why: { en: 'The Sahel is the dry grassland just south of the Sahara. It stretches across Africa from west to east.', es: 'El Sahel es el pasto seco justo al sur del Sahara. Cruza África de oeste a este.', fa: 'ساحل علفزار خشک درست در جنوب صحرا است. از غرب تا شرق افریقا کشیده شده است.' } },
      { q: { en: 'What does desertification mean?', es: '¿Qué significa desertificación?', fa: 'بیابان‌زایی یعنی چه؟' },
        choices: [{ en: 'Land that people could use turning into desert', es: 'Tierra que la gente podía usar que se vuelve desierto', fa: 'تبدیل شدن زمین قابل استفاده به بیابان' }, { en: 'Farming in a desert with water from wells', es: 'Cultivar en un desierto con agua de pozos', fa: 'کشت در بیابان با آب چاه' }, { en: 'Moving away from a desert to a city', es: 'Mudarse de un desierto a una ciudad', fa: 'کوچ کردن از بیابان به شهر' }, { en: 'A year with extra rain in the desert', es: 'Un año con lluvia extra en el desierto', fa: 'سالی با باران بیشتر در بیابان' }], answer: 0,
        why: { en: 'Desertification is usable land slowly becoming desert.', es: 'La desertificación es tierra útil que poco a poco se vuelve desierto.', fa: 'بیابان‌زایی یعنی زمین قابل استفاده آهسته آهسته بیابان شود.' } },
      { q: { en: 'Which of these helps cause desertification?', es: '¿Cuál de estas cosas ayuda a causar la desertificación?', fa: 'کدام یک از این‌ها باعث بیابان‌زایی می‌شود؟' },
        choices: [{ en: 'Cutting trees for firewood', es: 'Cortar árboles para leña', fa: 'بریدن درخت برای هیزم' }, { en: 'Planting rows of trees', es: 'Sembrar filas de árboles', fa: 'کاشتن قطار درخت' }, { en: 'Letting the grass grow back', es: 'Dejar que el pasto vuelva a crecer', fa: 'گذاشتن که علف دوباره بروید' }, { en: 'Rain that comes on time', es: 'Lluvia que llega a tiempo', fa: 'بارانی که به وقتش می‌بارد' }], answer: 0,
        why: { en: 'With fewer trees, few roots hold the soil. Then wind and rain carry it away.', es: 'Con menos árboles, pocas raíces sujetan la tierra. Luego el viento y la lluvia se la llevan.', fa: 'با درخت کمتر، ریشهٔ کمی خاک را نگه می‌دارد. بعد باد و باران آن را می‌برند.' } },
      { q: { en: 'Why is there snow on Mount Kenya, near the equator?', es: '¿Por qué hay nieve en el monte Kenia, cerca del ecuador?', fa: 'چرا روی کوه کینیا، نزدیک خط استوا، برف هست؟' },
        choices: [{ en: 'Its high elevation makes the air cold', es: 'Su gran elevación hace que el aire sea frío', fa: 'ارتفاع زیادش هوا را سرد می‌کند' }, { en: 'It is near the North Pole', es: 'Está cerca del Polo Norte', fa: 'نزدیک قطب شمال است' }, { en: 'Wind brings snow from the Sahara', es: 'El viento trae nieve del Sahara', fa: 'باد از صحرا برف می‌آورد' }, { en: 'The rainforest makes it cold', es: 'La selva lo hace frío', fa: 'جنگل بارانی آن را سرد می‌کند' }], answer: 0,
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
        choices: [{ en: 'Plant long rows of trees to hold the soil', es: 'Sembrar filas largas de árboles para sujetar la tierra', fa: 'قطارهای دراز درخت بکارد تا خاک را نگه دارد' }, { en: 'Let animals eat all the grass', es: 'Dejar que los animales coman todo el pasto', fa: 'بگذارد حیوانات همهٔ علف را بخورند' }, { en: 'Cut more trees for firewood', es: 'Cortar más árboles para leña', fa: 'درخت‌های بیشتری برای هیزم ببُرد' }, { en: 'Move the Sahara to the north', es: 'Mover el Sahara hacia el norte', fa: 'صحرا را به طرف شمال ببرد' }], answer: 0,
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
