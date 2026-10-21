/* WORLDWALKER · Episode 4.2 · People, Culture and Cities (WG.7)
   DR Congo and Ethiopia. The map is a river city like Kinshasa: the Congo River and its docks at the top,
   a market, homes, and tall buildings downtown. See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'WG.7',
  title: { en: 'People, Culture and Cities', es: 'Gente, cultura y ciudades', fa: 'مردم، فرهنگ و شهرها' },
  place: { en: 'Kinshasa on the Congo River', es: 'Kinshasa junto al río Congo', fa: 'کینشاسا کنار دریای کانگو' },
  intro: [
    { en: 'Christopher: "The Grump made so much noise in Kinshasa that nobody can understand each other! Talk to the market seller, the boat captain and the pilot. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón hizo tanto ruido en Kinshasa que nadie se entiende! Habla con la vendedora del mercado, el capitán del barco y la piloto. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو در کینشاسا آن‌قدر سر و صدا کرد که هیچ‌کس حرف دیگری را نمی‌فهمد! با فروشندهٔ بازار، کپتان کشتی و پیلوت گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. The Congo River runs along the top, with two docks. Market top-left, homes bottom-left, downtown bottom-right. */
  map: [
    '================================',
    '================================',
    '====kk===============kk=========',
    '~~~~kk~~~~~~~s~~~~~~~kk~~~~~~~~~',
    '~~~~kk~~~~~~~~~~~~~~~kk~~~~~~~~~',
    'T::::::::::::::::::::::::::::::T',
    'T.p....x..p..p.:..p........p..pT',
    'T.mm:mm:mm:mm:.:...,...T....,..T',
    'T:::::::::::::::..T......,...KKT',
    'T.mm:mm:mm:mm:.:....,.....T....T',
    'T::::::::::::::::::::::::::::::T',
    'T..............::::::::::::::::T',
    'T.RRR..QQQQRRR.:.UUU:UUU:UUU:UUT',
    'T.hdh..hhdhhdh.:.UUU:UUU:UUU:UUT',
    'T:::::::::::::::.UUU:UUU:UUU:UUT',
    'T..,...:..,.T..::::::::::::::::T',
    'T...T..:.,.....::::::::::::::::T',
    'T.QQQQ.:..RRR..:.UUU:JJJ:UUU:UUT',
    'T.hhdh.:..hdh..:.UUU:JJJ:UUU:UUT',
    'T......:.......:.UUU:::::UUU:UUT',
    'TT...T.:.....T.:....:::::...:UUT',
    'TTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUT'
  ],
  start: [3, 6],

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): a new home for a family that moved to the city, on the empty land by the river port */
  build: [
    { id: 'home', kind: 'place', board: [28, 8], tile: 'h', ok: [[24, 6, 'R'], [25, 6, 'R'], [26, 6, 'R'], [24, 7, 'd'], [25, 7], [26, 7]], cost: { wood: 1 },
      name: { en: 'A new home by the port', es: 'Una casa nueva junto al puerto', fa: 'یک خانهٔ نو کنار بندر' },
      ask: { en: 'A family just came from a farm village to find work. That is [[urbanization|urbanization]]. The jobs are at the river port and the market, because the Congo River is the city\'s road. Build their home on the empty land just east of the east dock, beside the river road: a red roof of three pieces on top, then the walls and a door below.',
        es: 'Una familia acaba de llegar de un pueblo del campo para buscar trabajo. Eso es la [[urbanization|urbanización]]. Los trabajos están en el puerto del río y en el mercado, porque el río Congo es la carretera de la ciudad. Construye su casa en el terreno vacío justo al este del muelle del este, junto al camino del río: un techo rojo de tres piezas arriba, y abajo las paredes y una puerta.',
        fa: 'یک خانواده تازه از یک قریه برای پیدا کردن کار آمده است. این [[urbanization|شهرنشینی]] است. کارها در بندر دریا و بازار هستند، چون دریای کانگو سرکِ شهر است. خانهٔ آن‌ها را در زمین خالی درست شرق بندر شرقی، کنار سرک دریا بساز: یک بام سرخ از سه تکه در بالا، بعد دیوارها و یک دروازه در پایین.' },
      why: { en: 'Good spot! From here it is a short walk to the boats and the market.', es: '¡Buen lugar! Desde aquí se camina poco hasta los barcos y el mercado.', fa: 'جای خوب! از این جا تا کشتی‌ها و بازار راه کوتاه است.' },
      wrong: { en: 'Not here. Build on the empty land just east of the east dock, beside the river road. The roof goes on top, the walls below.', es: 'Aquí no. Construye en el terreno vacío justo al este del muelle del este, junto al camino del río. El techo va arriba y las paredes abajo.', fa: 'این جا نه. در زمین خالی درست شرق بندر شرقی، کنار سرک دریا بساز. بام بالا و دیوارها پایین می‌روند.' },
      wrongBy: [
        { x: 1, y: 15, w: 14, h: 6, t: { en: 'This is far from the river. The family came for work, and the work is at the port and the market. Build near them.', es: 'Esto está lejos del río. La familia vino a trabajar, y el trabajo está en el puerto y el mercado. Construye cerca de ellos.', fa: 'این جا از دریا دور است. خانواده برای کار آمده، و کار در بندر و بازار است. نزدیک آن‌ها بساز.' } }
      ],
      done: { en: 'The family has a home by the port! Cities like Kinshasa grow because people move in for jobs. Kinshasa grew up on the Congo River, because the river is a road for boats and trade.', es: '¡La familia tiene una casa junto al puerto! Ciudades como Kinshasa crecen porque la gente llega por trabajo. Kinshasa creció junto al río Congo, porque el río es una carretera para barcos y comercio.', fa: 'خانواده کنار بندر یک خانه دارد! شهرهایی مثل کینشاسا بزرگ می‌شوند چون مردم برای کار به آن‌ها می‌آیند. کینشاسا کنار دریای کانگو بزرگ شد، چون دریا سرکی برای کشتی‌ها و تجارت است.' } }
  ],
  finds: [
    { clueAt: [11, 6], at: [4, 2], decor: 'shell',
      clue: { en: 'Use the map key: brown boards are a dock. Brazzaville is just across the river. Go to the dock on the west side of the city. Stand on its north-west corner square.', es: 'Usa la leyenda: las tablas cafés son un muelle. Brazzaville está justo al otro lado del río. Ve al muelle del lado oeste de la ciudad. Párate en su cuadro de la esquina noroeste.', fa: 'از راهنمای نقشه استفاده کن: تخته‌های قهوه‌ای اسکله است. برازاویل درست آن طرف دریا است. به اسکلهٔ طرف غرب شهر برو. روی خانهٔ کنج شمال‌غربی آن بایست.' },
      text: { en: 'You read the map key! You stood at the end of the dock, close to Brazzaville. Kinshasa and Brazzaville are two capital cities only a few kilometers apart, across the Congo River. A river shell lay on the boards.', es: '¡Leíste la leyenda! Te paraste en la punta del muelle, cerca de Brazzaville. Kinsasa y Brazzaville son dos capitales a solo unos kilómetros, una frente a la otra, al otro lado del río Congo. Había una concha de río en las tablas.', fa: 'تو راهنمای نقشه را خواندی! تو در سر اسکله، نزدیک برازاویل ایستادی. کینشاسا و برازاویل دو پایتخت هستند که فقط چند کیلومتر از هم دور اند، آن طرف و این طرف دریای کانگو. یک صدف دریا روی تخته‌ها بود.' } },
    { clueAt: [8, 16], at: [11, 20], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps south, then 3 steps east. Listen for the music!', es: 'Desde esta nota, camina 4 pasos al sur y luego 3 pasos al este. ¡Escucha la música!', fa: 'از این یادداشت، ۴ قدم به جنوب برو، بعد ۳ قدم به شرق. به موسیقی گوش بده!' },
      text: { en: 'You followed compass directions! South is down and east is to the right. You found a small drum. Drums and guitars are the heart of Congolese rumba. In 2021, UNESCO named rumba a treasure of world culture.', es: '¡Seguiste las direcciones de la brújula! El sur está abajo y el este a la derecha. Encontraste un tambor pequeño. Los tambores y las guitarras son el corazón de la rumba congoleña. En 2021, la UNESCO nombró a la rumba un tesoro de la cultura del mundo.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! جنوب پایین و شرق طرف راست است. تو یک دهل کوچک پیدا کردی. دهل و گیتار دل رومبای کانگویی هستند. در سال ۲۰۲۱، یونسکو رومبا را یک گنج فرهنگ جهان نامید.' } }
  ],

  secret: { tool: 'canoe', at: [13, 3],
    text: { en: 'The canoe reached a little island in the Congo River! In the chest is a river map. It says the Congo is the deepest river in the world. In some places it is more than 200 meters deep.',
      es: '¡La canoa llegó a una islita en el río Congo! En el cofre hay un mapa del río. Dice que el Congo es el río más profundo del mundo. En algunos lugares tiene más de 200 metros de profundidad.',
      fa: 'قایق به یک جزیرهٔ کوچک در دریای کانگو رسید! در صندوق یک نقشهٔ دریا است. می‌گوید کانگو عمیق‌ترین دریای جهان است. در بعضی جاها عمق آن بیشتر از ۲۰۰ متر است.' } },

  words: {
    culture: { en: 'the way of life of a group of people: language, food, music, clothes and beliefs', es: 'la forma de vida de un grupo de personas: idioma, comida, música, ropa y creencias', fa: 'روش زندگی یک گروه از مردم: زبان، غذا، موسیقی، لباس و باورها' },
    'ethnic group': { en: 'a group of people who share a language, history and customs', es: 'un grupo de personas que comparten idioma, historia y costumbres', fa: 'گروهی از مردم که زبان، تاریخ و رسم‌های مشترک دارند' },
    'official language': { en: 'the language a government uses for laws, schools and offices', es: 'el idioma que usa un gobierno para las leyes, las escuelas y las oficinas', fa: 'زبانی که دولت برای قانون، مکتب و اداره‌ها به کار می‌برد' },
    urbanization: { en: 'people moving from farms and towns into cities, so cities grow', es: 'gente que se muda del campo y de pueblos a las ciudades, y las ciudades crecen', fa: 'کوچ مردم از قریه و شهرک به شهر، که شهرها را بزرگ می‌کند' },
    rainforest: { en: 'a thick, tall forest where rain falls in most months of the year', es: 'un bosque alto y espeso donde llueve casi todos los meses del año', fa: 'جنگل بلند و انبوه که در بیشتر ماه‌های سال باران می‌بارد' },
    plateau: { en: 'a large area of high, mostly flat land', es: 'una zona grande de tierra alta y casi plana', fa: 'زمین بلند و بیشتر هموار و پهن' },
    elevation: { en: 'how high a place is above the sea', es: 'qué tan alto está un lugar sobre el nivel del mar', fa: 'بلندی یک جا از سطح بحر' }
  },

  npcs: [
    {
      x: 6, y: 8,
      name: { en: 'Mama Grâce', es: 'Mamá Grâce', fa: 'ماما گراس' },
      role: { en: 'Market seller in Kinshasa', es: 'Vendedora del mercado en Kinshasa', fa: 'فروشندهٔ بازار در کینشاسا' },
      look: { skin: 5, hair: '#d35400', shirt: '#f1c40f', robe: true },
      lines: [
        { en: 'Mbote! That means hello in Lingala. I am Grâce. I sell fish and cassava leaves in this market in Kinshasa, the capital of DR Congo.',
          es: '¡Mbote! Así se dice hola en lingala. Soy Grâce. Vendo pescado y hojas de yuca en este mercado de Kinshasa, la capital de RD Congo.',
          fa: 'مبوته! این به زبان لینگالا یعنی سلام. من گراس هستم. در این بازار کینشاسا، پایتخت جمهوری دموکراتیک کانگو، ماهی و برگ کاساوا می‌فروشم.' },
        { en: 'DR Congo has more than 200 languages and many [[ethnic group|ethnic groups]]. French is the [[official language|official language]]. On the street here, most people speak Lingala. You hear it in our music too: Congolese rumba is loved all over Africa.',
          es: 'RD Congo tiene más de 200 idiomas y muchos [[ethnic group|grupos étnicos]]. El francés es el [[official language|idioma oficial]]. En la calle, aquí casi todos hablan lingala. También lo oyes en nuestra música: la rumba congoleña es querida en toda África.',
          fa: 'کانگو بیش از ۲۰۰ زبان و [[ethnic group|قوم‌های]] زیاد دارد. فرانسوی [[official language|زبان رسمی]] است. این‌جا در سرک، بیشتر مردم لینگالا گپ می‌زنند. آن را در موسیقی ما هم می‌شنوی: رومبای کانگویی در سراسر افریقا محبوب است.' },
        { en: 'Every day new people arrive from farms and small towns. They come for jobs and school. That move to cities is called [[urbanization|urbanization]]. Kinshasa now has more than 10 million people!',
          es: 'Cada día llega gente nueva del campo y de pueblos pequeños. Vienen por trabajo y por la escuela. Esa mudanza a las ciudades se llama [[urbanization|urbanización]]. ¡Kinshasa ya tiene más de 10 millones de personas!',
          fa: 'هر روز مردم تازه از قریه‌ها و شهرک‌های کوچک می‌آیند. آن‌ها برای کار و مکتب می‌آیند. این کوچ به شهرها [[urbanization|شهرنشینی]] نام دارد. حالا کینشاسا بیش از ۱۰ میلیون نفر دارد!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do cities like Kinshasa grow so fast?', es: '¿Por qué ciudades como Kinshasa crecen tan rápido?', fa: 'چرا شهرهایی مثل کینشاسا این‌قدر زود بزرگ می‌شوند؟' },
        choices: [
          { ok: true, t: { en: 'People move in from farms and small towns for jobs and school', es: 'La gente llega del campo y de pueblos pequeños por trabajo y escuela', fa: 'مردم از قریه و شهرک برای کار و مکتب می‌آیند' },
            why: { en: 'Jobs and schools pull people into cities. That is urbanization.', es: 'El trabajo y las escuelas atraen a la gente a las ciudades. Eso es la urbanización.', fa: 'کار و مکتب مردم را به شهر می‌کشاند. این شهرنشینی است.' } },
          { t: { en: 'The city grows by itself, with nobody moving', es: 'La ciudad crece sola, sin que nadie se mude', fa: 'شهر خودش بزرگ می‌شود، بدون این‌که کسی کوچ کند' },
            why: { en: 'Cities grow because people arrive, not by themselves.', es: 'Las ciudades crecen porque llega gente, no solas.', fa: 'شهرها با آمدن مردم بزرگ می‌شوند، نه خودبه‌خود.' } },
          { t: { en: 'A law says everyone must live in the capital', es: 'Una ley dice que todos deben vivir en la capital', fa: 'قانون می‌گوید همه باید در پایتخت زندگی کنند' },
            why: { en: 'There is no such law. People choose to come for jobs and school.', es: 'No hay una ley así. La gente decide venir por trabajo y escuela.', fa: 'چنین قانونی نیست. مردم خودشان برای کار و مکتب می‌آیند.' } }
        ]
      }
    },
    {
      x: 22, y: 3,
      name: { en: 'Captain Mbuyi', es: 'Capitán Mbuyi', fa: 'کپتان مبویی' },
      role: { en: 'River boat captain', es: 'Capitán de barco del río', fa: 'کپتان کشتی دریا' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'I am Captain Mbuyi. This is the Congo River, the second-longest river in Africa. It is also the deepest river in the world!',
          es: 'Soy el capitán Mbuyi. Este es el río Congo, el segundo río más largo de África. ¡También es el río más profundo del mundo!',
          fa: 'من کپتان مبویی هستم. این دریای کانگو است، دومین دریای دراز افریقا. عمیق‌ترین دریای جهان هم است!' },
        { en: 'Thick [[rainforest|rainforest]] covers much of DR Congo. Building roads there is very hard. So the river is our road. Boats carry people, cassava, fish and phones between Kinshasa and towns far upstream, like Kisangani.',
          es: 'Una [[rainforest|selva]] espesa cubre gran parte de RD Congo. Construir carreteras ahí es muy difícil. Por eso el río es nuestra carretera. Los barcos llevan gente, yuca, pescado y teléfonos entre Kinshasa y pueblos lejanos río arriba, como Kisangani.',
          fa: '[[rainforest|جنگل بارانی]] انبوه بیشتر کانگو را پوشانده است. ساختن سرک در آن‌جا خیلی سخت است. پس دریا سرک ما است. کشتی‌ها مردم، کاساوا، ماهی و موبایل را میان کینشاسا و شهرهای دور در بالای دریا، مثل کیسانگانی، می‌برند.' },
        { en: 'Look across the water. That is Brazzaville, the capital of another country, the Republic of the Congo. Two capital cities face each other across one river!',
          es: 'Mira al otro lado del agua. Esa es Brazzaville, la capital de otro país, la República del Congo. ¡Dos capitales, una frente a la otra, separadas por un río!',
          fa: 'آن طرف آب را ببین. آن‌جا برازاویل است، پایتخت یک کشور دیگر، جمهوری کانگو. دو پایتخت آن طرف و این طرف یک دریا روبه‌روی هم هستند!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why is the Congo River used like a road?', es: '¿Por qué el río Congo se usa como una carretera?', fa: 'چرا از دریای کانگو مثل سرک استفاده می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Thick rainforest makes roads hard to build, and the river reaches far inland', es: 'La selva espesa hace difícil construir carreteras, y el río llega muy adentro', fa: 'جنگل انبوه ساختن سرک را سخت می‌کند و دریا تا جاهای دور می‌رسد' },
            why: { en: 'People use the land and water they have. Here the river is the easiest way to travel.', es: 'La gente usa la tierra y el agua que tiene. Aquí el río es la forma más fácil de viajar.', fa: 'مردم از زمین و آبی که دارند استفاده می‌کنند. این‌جا دریا آسان‌ترین راه سفر است.' } },
          { t: { en: 'It is the only river in Africa', es: 'Es el único río de África', fa: 'تنها دریای افریقا است' },
            why: { en: 'Africa has many rivers, like the Nile and the Niger.', es: 'África tiene muchos ríos, como el Nilo y el Níger.', fa: 'افریقا دریاهای زیادی دارد، مثل نیل و نیجر.' } },
          { t: { en: 'Cars are not allowed in DR Congo', es: 'Los carros no están permitidos en RD Congo', fa: 'در کانگو موتر اجازه ندارد' },
            why: { en: 'Cars are allowed. The problem is that roads are hard to build through the forest.', es: 'Los carros sí están permitidos. El problema es que es difícil hacer carreteras en la selva.', fa: 'موتر اجازه دارد. مشکل این است که ساختن سرک در جنگل سخت است.' } }
        ]
      }
    },
    {
      x: 19, y: 15,
      name: { en: 'Meron', es: 'Meron', fa: 'میرون' },
      role: { en: 'Airline pilot from Ethiopia', es: 'Piloto de avión de Etiopía', fa: 'پیلوت طیاره از ایتوپیا' },
      look: { skin: 3, hair: '#1b1410', shirt: '#f4f4f4', pants: '#1d2b4a' },
      remember: { ep: '4.1', t: { en: 'Are you the traveler who helped Hadiza? Last week I flew to Nigeria. She planted the acacia seeds you found. Her green wall is growing!', es: '¿Eres quien ayudó a Hadiza? La semana pasada volé a Nigeria. Ella plantó las semillas de acacia que encontraste. ¡Su muro verde está creciendo!', fa: 'آیا تو همان مسافری هستی که به حدیزه کمک کردی؟ هفتهٔ گذشته به نیجریه پرواز کردم. او تخم‌های اکاسیا را که تو پیدا کردی کاشت. دیوار سبز او بزرگ می‌شود!' } },
      lines: [
        { en: 'Selam! That means hello in Amharic. I am Meron, a pilot. I just flew here from Addis Ababa, the capital of Ethiopia.',
          es: '¡Selam! Así se dice hola en amárico. Soy Meron, piloto. Acabo de volar hasta aquí desde Adís Abeba, la capital de Etiopía.',
          fa: 'سِلام! این به زبان امهری یعنی سلام. من میرون هستم، یک پیلوت. همین حالا از ادیس ابابا، پایتخت ایتوپیا، به این‌جا پرواز کردم.' },
        { en: 'Addis Ababa sits high on a [[plateau|plateau]], about 2,400 meters above the sea. Because of that high [[elevation|elevation]], the air is cool most of the year.',
          es: 'Adís Abeba está en lo alto de una [[plateau|meseta]], a unos 2,400 metros sobre el mar. Por esa gran [[elevation|elevación]], el aire es fresco casi todo el año.',
          fa: 'ادیس ابابا بالای یک [[plateau|فلات]] است، حدود ۲٬۴۰۰ متر بالاتر از بحر. به خاطر این [[elevation|ارتفاع]] زیاد، هوا بیشتر سال خنک است.' },
        { en: 'Ethiopia has more than 80 languages. Amharic is one of the main ones. Ethiopia even has its own alphabet and its own calendar! Each [[culture|culture]] adds something to the country.',
          es: 'Etiopía tiene más de 80 idiomas. El amárico es uno de los principales. ¡Etiopía hasta tiene su propio alfabeto y su propio calendario! Cada [[culture|cultura]] le aporta algo al país.',
          fa: 'ایتوپیا بیش از ۸۰ زبان دارد. امهری یکی از زبان‌های اصلی است. ایتوپیا حتی الفبا و تقویم خودش را دارد! هر [[culture|فرهنگ]] چیزی به کشور اضافه می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why is the air in Addis Ababa cool most of the year?', es: '¿Por qué el aire de Adís Abeba es fresco casi todo el año?', fa: 'چرا هوای ادیس ابابا بیشتر سال خنک است؟' },
        choices: [
          { ok: true, t: { en: 'It sits high on a plateau', es: 'Está en lo alto de una meseta', fa: 'بالای یک فلات بلند است' },
            why: { en: 'High elevation makes the air cooler.', es: 'La gran elevación hace que el aire sea más fresco.', fa: 'ارتفاع زیاد هوا را خنک‌تر می‌کند.' } },
          { t: { en: 'It is close to the North Pole', es: 'Está cerca del Polo Norte', fa: 'نزدیک قطب شمال است' },
            why: { en: 'Ethiopia is far from the North Pole. Its cool air comes from its height.', es: 'Etiopía está lejos del Polo Norte. Su aire fresco viene de su altura.', fa: 'ایتوپیا از قطب شمال دور است. هوای خنکش از بلندی آن است.' } },
          { t: { en: 'It sits next to a cold ocean', es: 'Está junto a un océano frío', fa: 'کنار یک اقیانوس سرد است' },
            why: { en: 'Ethiopia has no coast at all. It is cool because it is high.', es: 'Etiopía no tiene costa. Es fresca porque es alta.', fa: 'ایتوپیا اصلاً ساحل بحر ندارد. چون بلند است خنک است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 6, text: { en: 'CONGO RIVER · the second-longest river in Africa and the deepest river in the world. Boats here carry people and goods far inland.',
      es: 'RÍO CONGO · el segundo río más largo de África y el más profundo del mundo. Aquí los barcos llevan gente y mercancías muy tierra adentro.',
      fa: 'دریای کانگو · دومین دریای دراز افریقا و عمیق‌ترین دریای جهان. کشتی‌ها از این‌جا مردم و بار را تا جاهای دور می‌برند.' } }
  ],

  /* the quest: Ilunga the rumba guitarist (gold !) -> Bijou the radio host -> follow the Ink Thief's riddles to the market, the empty land by the port and downtown, then catch it -> back to Ilunga */
  quest: {
    stat: 'pla',
    title: { en: 'The Stolen Song Book', es: 'El cancionero robado', fa: 'کتاب آهنگ دزدی‌شده' },
    giver: {
      x: 20, y: 7,
      name: { en: 'Ilunga', es: 'Ilunga', fa: 'ایلونگا' },
      role: { en: 'Rumba guitar player', es: 'Guitarrista de rumba', fa: 'گیتارنواز رومبا' },
      look: { skin: 4, hair: '#1b1410', shirt: '#8e44ad', pants: '#2c2c3a', style: 'short' },
      lines: [
        { en: 'Mbote! I am Ilunga. I play guitar in a rumba band. Our songs mix Lingala, French and Swahili, just like the people of this city.',
          es: '¡Mbote! Soy Ilunga. Toco la guitarra en una banda de rumba. Nuestras canciones mezclan lingala, francés y suajili, igual que la gente de esta ciudad.',
          fa: 'مبوته! من ایلونگا هستم. در یک گروه رومبا گیتار می‌نوازم. در آهنگ‌های ما لینگالا، فرانسوی و سواحیلی با هم یک‌جا می‌شوند، درست مثل مردم این شهر.' },
        { en: 'But an Ink Thief grabbed my song book and ran! Bijou, the radio host, sees everything from her window. She lives among the homes in the south-west part of the city. Please ask her!',
          es: '¡Pero un Ladrón de Tinta agarró mi cancionero y salió corriendo! Bijou, la locutora de radio, ve todo desde su ventana. Vive entre las casas, en el suroeste de la ciudad. ¡Pregúntale, por favor!',
          fa: 'اما یک دزد رنگ کتاب آهنگ‌هایم را گرفت و فرار کرد! بیژو، گویندهٔ رادیو، همه چیز را از کلکینش می‌بیند. او میان خانه‌ها در جنوب غرب شهر زندگی می‌کند. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Bijou lives among the homes in the south-west part of the city.',
        es: 'Bijou vive entre las casas, en el suroeste de la ciudad.',
        fa: 'بیژو میان خانه‌ها در جنوب غرب شهر زندگی می‌کند.' },
      thanks: { en: 'My song book! The ink is gone and the words are back. Many languages, one song. That is Kinshasa! Thank you!',
        es: '¡Mi cancionero! La tinta se fue y las palabras volvieron. Muchos idiomas, una canción. ¡Eso es Kinshasa! ¡Gracias!',
        fa: 'کتاب آهنگ‌هایم! رنگ پاک شد و کلمه‌ها برگشتند. چندین زبان، یک آهنگ. این کینشاسا است! تشکر!' }
    },
    contact: {
      x: 6, y: 19,
      name: { en: 'Bijou', es: 'Bijou', fa: 'بیژو' },
      role: { en: 'Radio host', es: 'Locutora de radio', fa: 'گویندهٔ رادیو' },
      look: { skin: 3, hair: '#2b1a10', shirt: '#e74c3c', pants: '#34495e', style: 'bun' },
      lines: [
        { en: 'Hello! On my radio show I speak Lingala, French and Swahili. In Kinshasa, many people use two or three languages every day. Each [[ethnic group|ethnic group]] brings its own words and music.',
          es: '¡Hola! En mi programa de radio hablo lingala, francés y suajili. En Kinshasa, mucha gente usa dos o tres idiomas cada día. Cada [[ethnic group|grupo étnico]] trae sus propias palabras y su música.',
          fa: 'سلام! در برنامهٔ رادیوی خود به لینگالا، فرانسوی و سواحیلی گپ می‌زنم. در کینشاسا بسیاری مردم هر روز دو یا سه زبان را به کار می‌برند. هر [[ethnic group|قوم]] کلمه‌ها و موسیقی خودش را می‌آورد.' },
        { en: 'I saw the Ink Thief! It tore the song book into 3 pieces and hid them around the city. Listen to its riddles about [[culture|culture]] and cities, and walk to the right places. Then catch it!',
          es: '¡Vi al Ladrón de Tinta! Rompió el cancionero en 3 pedazos y los escondió por la ciudad. Escucha sus acertijos sobre [[culture|cultura]] y ciudades, y camina a los lugares correctos. ¡Después atrápalo!',
          fa: 'دزد رنگ را دیدم! کتاب آهنگ را سه تکه کرد و تکه‌ها را در شهر پنهان کرد. به چیستان‌هایش دربارهٔ [[culture|فرهنگ]] و شهرها گوش بده و به جاهای درست برو. بعد آن را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 16],
      hops: [[20, 16], [25, 15]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "Hee hee! I tore the song book into 3 pieces and hid them around the city. Follow my riddles, if you can!"',
        es: 'El Ladrón de Tinta se ríe: "¡Ji ji! Rompí el cancionero en 3 pedazos y los escondí por la ciudad. ¡Sigue mis acertijos, si puedes!"',
        fa: 'دزد رنگ می‌خندد: «هی هی! کتاب آهنگ را سه تکه کردم و در شهر پنهان کردم. اگر می‌توانی، چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1 is where people from many [[ethnic group|ethnic groups]] meet every day. They buy fish and cassava, and you hear Lingala, French and Swahili all around.',
            es: 'El pedazo 1 está donde gente de muchos [[ethnic group|grupos étnicos]] se encuentra cada día. Compran pescado y yuca, y se oye lingala, francés y suajili por todas partes.',
            fa: 'تکهٔ ۱ جایی است که مردم از [[ethnic group|قوم‌های]] زیاد هر روز همدیگر را می‌بینند. ماهی و کاساوا می‌خرند، و از هر طرف لینگالا، فرانسوی و سواحیلی شنیده می‌شود.' },
          zones: [{ x: 1, y: 6, w: 14, h: 4 }],
          noBy: [{ x: 16, y: 12, w: 15, h: 9, t: { en: 'These tall buildings are offices and banks. People work inside, but they do not meet here to buy and sell. Look for the market stalls.', es: 'Estos edificios altos son oficinas y bancos. La gente trabaja adentro, pero no se reúne aquí a comprar y vender. Busca los puestos del mercado.', fa: 'این ساختمان‌های بلند دفتر و بانک هستند. مردم داخل آن‌ها کار می‌کنند، اما برای خرید و فروش این جا جمع نمی‌شوند. دکان‌های بازار را پیدا کن.' } }],
          found: { en: 'Piece 1 was in the market! Each ethnic group shares a language, a history and customs. In Kinshasa, many groups meet here, and many people speak two or three languages.', es: '¡El pedazo 1 estaba en el mercado! Cada grupo étnico comparte idioma, historia y costumbres. En Kinshasa, muchos grupos se encuentran aquí, y mucha gente habla dos o tres idiomas.', fa: 'تکهٔ ۱ در بازار بود! هر قوم زبان، تاریخ و رسم‌های مشترک دارد. در کینشاسا قوم‌های زیادی این جا همدیگر را می‌بینند، و بسیاری مردم دو یا سه زبان گپ می‌زنند.' } },
        { t: { en: 'Every week thousands of new people move to Kinshasa for jobs. That is [[urbanization|urbanization]]. Piece 2 is on the empty land by the river port, where there are no homes for them yet.',
            es: 'Cada semana miles de personas nuevas llegan a Kinshasa por trabajo. Eso es la [[urbanization|urbanización]]. El pedazo 2 está en el terreno vacío junto al puerto del río, donde todavía no hay casas para ellas.',
            fa: 'هر هفته هزاران نفر تازه برای کار به کینشاسا می‌آیند. این [[urbanization|شهرنشینی]] است. تکهٔ ۲ در زمین خالی کنار بندر دریا است، جایی که هنوز برای آن‌ها خانه نیست.' },
          zones: [{ x: 17, y: 6, w: 14, h: 4 }],
          noBy: [{ x: 1, y: 15, w: 14, h: 6, t: { en: 'These homes are already full of families. The new people need homes on empty land, near the jobs at the port.', es: 'Estas casas ya están llenas de familias. La gente nueva necesita casas en un terreno vacío, cerca de los trabajos del puerto.', fa: 'این خانه‌ها پر از خانواده‌ها هستند. مردم تازه به خانه در زمین خالی، نزدیک کارهای بندر، ضرورت دارند.' } }],
          found: { en: 'Piece 2 was on the empty land! When a city grows very fast, it is hard to build enough homes, buses and water pipes for everyone.', es: '¡El pedazo 2 estaba en el terreno vacío! Cuando una ciudad crece muy rápido, es difícil construir suficientes casas, buses y tuberías de agua para todos.', fa: 'تکهٔ ۲ در زمین خالی بود! وقتی یک شهر خیلی زود بزرگ می‌شود، ساختن خانه، بس و نل آب به اندازهٔ همه سخت است.' } },
        { t: { en: 'Piece 3 is where people use the [[official language|official language]] at work: in the offices downtown, among the tall buildings.',
            es: 'El pedazo 3 está donde la gente usa el [[official language|idioma oficial]] en el trabajo: en las oficinas del centro, entre los edificios altos.',
            fa: 'تکهٔ ۳ جایی است که مردم در کار [[official language|زبان رسمی]] را به کار می‌برند: در دفترهای مرکز شهر، میان ساختمان‌های بلند.' },
          zones: [{ x: 16, y: 12, w: 15, h: 9 }],
          noBy: [{ x: 1, y: 6, w: 14, h: 4, t: { en: 'In the market, most people speak Lingala, the language of the street. The official language is for laws, schools and offices.', es: 'En el mercado, casi todos hablan lingala, el idioma de la calle. El idioma oficial es para las leyes, las escuelas y las oficinas.', fa: 'در بازار بیشتر مردم لینگالا، زبان کوچه، گپ می‌زنند. زبان رسمی برای قانون، مکتب و اداره است.' } }],
          found: { en: 'Piece 3 was downtown! French is the official language of DR Congo. Bijou speaks Lingala at home, French at work and Swahili with friends.', es: '¡El pedazo 3 estaba en el centro! El francés es el idioma oficial de RD Congo. Bijou habla lingala en casa, francés en el trabajo y suajili con sus amigos.', fa: 'تکهٔ ۳ در مرکز شهر بود! فرانسوی زبان رسمی کانگو است. بیژو در خانه لینگالا، در کار فرانسوی و با دوستانش سواحیلی گپ می‌زند.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs off in a puff of ink. All 3 pieces fit together: the song book is whole again.',
        es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye en una nube de tinta. Los 3 pedazos encajan: el cancionero está completo otra vez.',
        fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و در یک ابر رنگ فرار می‌کند. هر سه تکه با هم جور می‌شوند: کتاب آهنگ دوباره کامل است.' },
      item: { icon: '📖', name: { en: "Ilunga's song book", es: 'El cancionero de Ilunga', fa: 'کتاب آهنگ ایلونگا' } }
    }
  },

  scraps: [[5, 2], [30, 9], [2, 20]],
  smudges: [[25, 8], [10, 16], [24, 16]],

  challenge: {
    at: [9, 15],
    type: 'survey', // in the world; the card version (table) is the fallback
    spots: [[1, 6], [23, 6], [28, 9], [28, 7]],
    stat: 'loc',
    title: { en: 'Four big cities', es: 'Cuatro ciudades grandes', fa: 'چهار شهر بزرگ' },
    intro: { en: 'The Grump scrambled the city guide! Read the table. Then answer the questions.',
      es: '¡El Gruñón revolvió la guía de ciudades! Lee la tabla. Luego responde las preguntas.',
      fa: 'غرغرو راهنمای شهرها را خراب کرد! جدول را بخوان. بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'City', es: 'Ciudad', fa: 'شهر' },
        { en: 'Country', es: 'País', fa: 'کشور' },
        { en: 'Sits by', es: 'Está junto a', fa: 'کنار' },
        { en: 'Height above the sea', es: 'Altura sobre el mar', fa: 'بلندی از سطح بحر' }
      ],
      rows: [
        [{ en: 'Lagos', es: 'Lagos', fa: 'لاگوس' }, { en: 'Nigeria', es: 'Nigeria', fa: 'نیجریه' }, { en: 'Atlantic Ocean coast', es: 'costa del océano Atlántico', fa: 'ساحل اقیانوس اطلس' }, { en: 'near sea level', es: 'casi al nivel del mar', fa: 'نزدیک سطح بحر' }],
        [{ en: 'Kinshasa', es: 'Kinshasa', fa: 'کینشاسا' }, { en: 'DR Congo', es: 'RD Congo', fa: 'کانگو' }, { en: 'Congo River', es: 'río Congo', fa: 'دریای کانگو' }, { en: 'about 240 m', es: 'unos 240 m', fa: 'حدود ۲۴۰ متر' }],
        [{ en: 'Nairobi', es: 'Nairobi', fa: 'نایروبی' }, { en: 'Kenya', es: 'Kenia', fa: 'کینیا' }, { en: 'high plateau', es: 'meseta alta', fa: 'فلات بلند' }, { en: 'about 1,800 m', es: 'unos 1,800 m', fa: 'حدود ۱٬۸۰۰ متر' }],
        [{ en: 'Addis Ababa', es: 'Adís Abeba', fa: 'ادیس ابابا' }, { en: 'Ethiopia', es: 'Etiopía', fa: 'ایتوپیا' }, { en: 'high plateau', es: 'meseta alta', fa: 'فلات بلند' }, { en: 'about 2,400 m', es: 'unos 2,400 m', fa: 'حدود ۲٬۴۰۰ متر' }]
      ],
      note: { en: 'Lagos and Kinshasa each have more than 10 million people. Nairobi and Addis Ababa each have millions of people too.', es: 'Lagos y Kinshasa tienen cada una más de 10 millones de personas. Nairobi y Adís Abeba también tienen millones de personas.', fa: 'لاگوس و کینشاسا هر کدام بیش از ۱۰ میلیون نفر دارند. نایروبی و ادیس ابابا هم هر کدام میلیون‌ها نفر دارند.' }
    },
    questions: [
      { q: { en: 'Which city sits on a big river?', es: '¿Qué ciudad está junto a un río grande?', fa: 'کدام شهر کنار یک دریای بزرگ است؟' },
        choices: [{ en: 'Kinshasa', es: 'Kinshasa', fa: 'کینشاسا' }, { en: 'Lagos', es: 'Lagos', fa: 'لاگوس' }, { en: 'Nairobi', es: 'Nairobi', fa: 'نایروبی' }, { en: 'Addis Ababa', es: 'Adís Abeba', fa: 'ادیس ابابا' }], answer: 0,
        why: { en: 'Kinshasa sits on the Congo River. Lagos is on the ocean coast, not a river.', es: 'Kinshasa está junto al río Congo. Lagos está en la costa del océano, no junto a un río.', fa: 'کینشاسا کنار دریای کانگو است. لاگوس کنار اقیانوس است، نه کنار دریا.' } },
      { q: { en: 'Which city is the highest above the sea?', es: '¿Qué ciudad está más alta sobre el mar?', fa: 'کدام شهر از همه بلندتر از سطح بحر است؟' },
        choices: [{ en: 'Addis Ababa', es: 'Adís Abeba', fa: 'ادیس ابابا' }, { en: 'Nairobi', es: 'Nairobi', fa: 'نایروبی' }, { en: 'Kinshasa', es: 'Kinshasa', fa: 'کینشاسا' }, { en: 'Lagos', es: 'Lagos', fa: 'لاگوس' }], answer: 0,
        why: { en: 'About 2,400 m is the biggest number in the last column.', es: 'Unos 2,400 m es el número más grande de la última columna.', fa: 'حدود ۲٬۴۰۰ متر بزرگ‌ترین عدد در ستون آخر است.' } },
      { q: { en: 'Which two cities sit on a high plateau?', es: '¿Qué dos ciudades están en una meseta alta?', fa: 'کدام دو شهر روی فلات بلند هستند؟' },
        choices: [{ en: 'Nairobi and Addis Ababa', es: 'Nairobi y Adís Abeba', fa: 'نایروبی و ادیس ابابا' }, { en: 'Lagos and Kinshasa', es: 'Lagos y Kinshasa', fa: 'لاگوس و کینشاسا' }, { en: 'Lagos and Nairobi', es: 'Lagos y Nairobi', fa: 'لاگوس و نایروبی' }, { en: 'Kinshasa and Addis Ababa', es: 'Kinshasa y Adís Abeba', fa: 'کینشاسا و ادیس ابابا' }], answer: 0,
        why: { en: 'The "Sits by" column says "high plateau" for Nairobi and Addis Ababa.', es: 'La columna "Está junto a" dice "meseta alta" para Nairobi y Adís Abeba.', fa: 'ستون «کنار» برای نایروبی و ادیس ابابا «فلات بلند» نوشته است.' } },
      { q: { en: 'All four cities keep growing. What is the main reason?', es: 'Las cuatro ciudades siguen creciendo. ¿Cuál es la razón principal?', fa: 'هر چهار شهر همیشه بزرگ‌تر می‌شوند. دلیل اصلی چیست؟' },
        choices: [{ en: 'People move in from farms and small towns for jobs and school', es: 'La gente llega del campo y de pueblos por trabajo y escuela', fa: 'مردم از قریه و شهرک برای کار و مکتب می‌آیند' }, { en: 'The cities are getting colder', es: 'Las ciudades se están poniendo más frías', fa: 'شهرها سردتر می‌شوند' }, { en: 'Farms need more workers than cities', es: 'El campo necesita más trabajadores que las ciudades', fa: 'قریه‌ها بیشتر از شهرها کارگر می‌خواهند' }, { en: 'Rivers move closer to the cities', es: 'Los ríos se acercan a las ciudades', fa: 'دریاها به شهرها نزدیک‌تر می‌شوند' }], answer: 0,
        why: { en: 'Jobs and schools pull people into cities. That is urbanization.', es: 'El trabajo y las escuelas atraen a la gente a las ciudades. Eso es la urbanización.', fa: 'کار و مکتب مردم را به شهر می‌کشاند. این شهرنشینی است.' } }
    ],
    success: { en: 'The city guide is clear again!', es: '¡La guía de ciudades vuelve a estar clara!', fa: 'راهنمای شهرها دوباره روشن شد!' }
  },

  boss: {
    at: [22, 19],
    stat: 'reg',
    need: 3,
    name: { en: 'The Noise Grump', es: 'El Gruñón del Ruido', fa: 'غرغروی سر و صدا' },
    appear: { en: 'The Noise Grump is hiding between the tall buildings downtown!', es: '¡El Gruñón del Ruido se esconde entre los edificios altos del centro!', fa: 'غرغروی سر و صدا میان ساختمان‌های بلند مرکز شهر پنهان است!' },
    taunt: { en: 'BLAAH! I mixed up every language in this city. Can you still tell who lives where?', es: '¡BLAAA! Mezclé todos los idiomas de esta ciudad. ¿Todavía sabes quién vive dónde?', fa: 'بلااا! همهٔ زبان‌های این شهر را مخلوط کردم. هنوز می‌دانی کی کجا زندگی می‌کند؟' },
    win: { en: 'The noise turns into music. Atlas page 4.2 floats down into your hands!', es: 'El ruido se vuelve música. ¡La página 4.2 del atlas cae en tus manos!', fa: 'سر و صدا به موسیقی تبدیل می‌شود. صفحهٔ ۴.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'About how many languages are spoken in Nigeria alone?', es: '¿Cuántos idiomas se hablan, más o menos, solo en Nigeria?', fa: 'تنها در نیجریه تقریباً چند زبان گپ زده می‌شود؟' },
        choices: [{ en: 'More than 500', es: 'Más de 500', fa: 'بیش از ۵۰۰' }, { en: 'Only 1', es: 'Solo 1', fa: 'فقط ۱' }, { en: 'About 5', es: 'Unos 5', fa: 'حدود ۵' }, { en: 'Exactly 20', es: 'Exactamente 20', fa: 'درست ۲۰' }], answer: 0,
        why: { en: 'Nigeria alone has more than 500 languages. Sub-Saharan Africa holds thousands of cultures.', es: 'Solo Nigeria tiene más de 500 idiomas. África subsahariana tiene miles de culturas.', fa: 'تنها نیجریه بیش از ۵۰۰ زبان دارد. افریقای جنوب صحرا هزاران فرهنگ دارد.' } },
      { q: { en: 'Kinshasa sits on which river?', es: '¿Junto a qué río está Kinshasa?', fa: 'کینشاسا کنار کدام دریا است؟' },
        choices: [{ en: 'The Congo River', es: 'El río Congo', fa: 'دریای کانگو' }, { en: 'The Nile River', es: 'El río Nilo', fa: 'دریای نیل' }, { en: 'The Niger River', es: 'El río Níger', fa: 'دریای نیجر' }, { en: 'The Zambezi River', es: 'El río Zambeze', fa: 'دریای زمبیزی' }], answer: 0,
        why: { en: 'Kinshasa, the capital of DR Congo, sits on the Congo River.', es: 'Kinshasa, la capital de RD Congo, está junto al río Congo.', fa: 'کینشاسا، پایتخت کانگو، کنار دریای کانگو است.' } },
      { q: { en: 'Why do boats on the Congo River carry so many people and goods?', es: '¿Por qué los barcos del río Congo llevan tanta gente y tantas mercancías?', fa: 'چرا کشتی‌های دریای کانگو این‌قدر مردم و بار می‌برند؟' },
        choices: [{ en: 'Thick rainforest makes roads hard to build', es: 'La selva espesa hace difícil construir carreteras', fa: 'جنگل انبوه ساختن سرک را سخت می‌کند' }, { en: 'Boats are faster than airplanes', es: 'Los barcos son más rápidos que los aviones', fa: 'کشتی از طیاره تیزتر است' }, { en: 'The river is frozen and easy to cross', es: 'El río está congelado y es fácil de cruzar', fa: 'دریا یخ زده و گذشتن از آن آسان است' }, { en: 'Nobody lives near the river', es: 'Nadie vive cerca del río', fa: 'هیچ‌کس نزدیک دریا زندگی نمی‌کند' }], answer: 0,
        why: { en: 'Where roads are hard to build, the river works like a road.', es: 'Donde es difícil hacer carreteras, el río funciona como carretera.', fa: 'جایی که ساختن سرک سخت است، دریا کار سرک را می‌کند.' } },
      { q: { en: 'Why is Addis Ababa cool most of the year?', es: '¿Por qué Adís Abeba es fresca casi todo el año?', fa: 'چرا ادیس ابابا بیشتر سال خنک است؟' },
        choices: [{ en: 'It sits high on a plateau', es: 'Está en lo alto de una meseta', fa: 'بالای یک فلات بلند است' }, { en: 'It is on a cold ocean coast', es: 'Está en la costa de un océano frío', fa: 'در ساحل یک اقیانوس سرد است' }, { en: 'It is near the North Pole', es: 'Está cerca del Polo Norte', fa: 'نزدیک قطب شمال است' }, { en: 'It is in the middle of a rainforest', es: 'Está en medio de una selva', fa: 'در وسط جنگل بارانی است' }], answer: 0,
        why: { en: 'Addis Ababa is about 2,400 meters high. High places have cooler air.', es: 'Adís Abeba está a unos 2,400 metros. Los lugares altos tienen aire más fresco.', fa: 'ادیس ابابا حدود ۲٬۴۰۰ متر بلندی دارد. جاهای بلند هوای خنک‌تر دارند.' } },
      { q: { en: 'What is urbanization?', es: '¿Qué es la urbanización?', fa: 'شهرنشینی چیست؟' },
        choices: [{ en: 'People moving into cities, so cities grow', es: 'Gente que se muda a las ciudades, y las ciudades crecen', fa: 'کوچ مردم به شهرها که شهرها را بزرگ می‌کند' }, { en: 'People moving from cities back to farms', es: 'Gente que se muda de las ciudades al campo', fa: 'کوچ مردم از شهر دوباره به قریه' }, { en: 'Building farms inside a city', es: 'Hacer granjas dentro de una ciudad', fa: 'ساختن کشتزار در داخل شهر' }, { en: 'Making a city smaller', es: 'Hacer más pequeña una ciudad', fa: 'کوچک کردن یک شهر' }], answer: 0,
        why: { en: 'Urbanization means more people living in cities as people move in from farms and towns.', es: 'La urbanización significa que más gente vive en ciudades porque llega del campo y de pueblos.', fa: 'شهرنشینی یعنی مردم بیشتر در شهر زندگی کنند چون از قریه و شهرک به شهر می‌آیند.' } },
      { q: { en: 'Which sentence about sub-Saharan Africa is true?', es: '¿Qué oración sobre África subsahariana es verdadera?', fa: 'کدام جمله دربارهٔ افریقای جنوب صحرا درست است؟' },
        choices: [{ en: 'It has thousands of cultures and hundreds of languages', es: 'Tiene miles de culturas y cientos de idiomas', fa: 'هزاران فرهنگ و صدها زبان دارد' }, { en: 'Everyone there speaks the same language', es: 'Todos allí hablan el mismo idioma', fa: 'همه در آن‌جا یک زبان گپ می‌زنند' }, { en: 'It has no big cities', es: 'No tiene ciudades grandes', fa: 'هیچ شهر بزرگی ندارد' }, { en: 'Everyone there lives the same way', es: 'Todos allí viven de la misma forma', fa: 'همه در آن‌جا یک‌رقم زندگی می‌کنند' }], answer: 0,
        why: { en: 'The region is many places at once: big cities, villages, and hundreds of languages.', es: 'La región es muchos lugares a la vez: ciudades grandes, pueblos y cientos de idiomas.', fa: 'این منطقه چندین جای مختلف است: شهرهای بزرگ، قریه‌ها و صدها زبان.' } },
      { q: { en: 'What is the official language of DR Congo?', es: '¿Cuál es el idioma oficial de RD Congo?', fa: 'زبان رسمی کانگو چیست؟' },
        choices: [{ en: 'French', es: 'Francés', fa: 'فرانسوی' }, { en: 'Amharic', es: 'Amárico', fa: 'امهری' }, { en: 'Spanish', es: 'Español', fa: 'هسپانوی' }, { en: 'Arabic', es: 'Árabe', fa: 'عربی' }], answer: 0,
        why: { en: 'French is the official language. On the streets of Kinshasa, many people speak Lingala.', es: 'El francés es el idioma oficial. En las calles de Kinshasa mucha gente habla lingala.', fa: 'فرانسوی زبان رسمی است. در سرک‌های کینشاسا بسیاری مردم لینگالا گپ می‌زنند.' } },
      { q: { en: 'Nairobi, Kenya, is known as a center for…', es: 'Nairobi, Kenia, es conocida como un centro de…', fa: 'نایروبی، کینیا، به عنوان مرکز … شناخته می‌شود.' },
        choices: [{ en: 'business and technology', es: 'negocios y tecnología', fa: 'تجارت و تکنالوژی' }, { en: 'gold mining', es: 'minería de oro', fa: 'استخراج طلا' }, { en: 'cocoa farms', es: 'granjas de cacao', fa: 'کشتزارهای کاکائو' }, { en: 'desert camel trips', es: 'viajes en camello por el desierto', fa: 'سفر با شتر در بیابان' }], answer: 0,
        why: { en: 'Nairobi, high on a plateau, is a center for business and technology.', es: 'Nairobi, en una meseta alta, es un centro de negocios y tecnología.', fa: 'نایروبی، روی یک فلات بلند، مرکز تجارت و تکنالوژی است.' } }
    ]
  },

  learned: [
    { en: 'Sub-Saharan Africa holds thousands of [[culture|cultures]]. DR Congo has more than 200 languages, and Ethiopia has more than 80.', es: 'África subsahariana tiene miles de [[culture|culturas]]. RD Congo tiene más de 200 idiomas y Etiopía más de 80.', fa: 'افریقای جنوب صحرا هزاران [[culture|فرهنگ]] دارد. کانگو بیش از ۲۰۰ زبان و ایتوپیا بیش از ۸۰ زبان دارد.' },
    { en: '[[urbanization|Urbanization]]: people move from farms and towns to cities like Kinshasa and Lagos for jobs and school.', es: '[[urbanization|Urbanización]]: la gente se muda del campo y de pueblos a ciudades como Kinshasa y Lagos por trabajo y escuela.', fa: '[[urbanization|شهرنشینی]]: مردم از قریه و شهرک برای کار و مکتب به شهرهایی مثل کینشاسا و لاگوس می‌روند.' },
    { en: 'Kinshasa sits on the Congo River, which works like a road. Addis Ababa and Nairobi sit high on a [[plateau|plateau]], so their air is cool.', es: 'Kinshasa está junto al río Congo, que funciona como carretera. Adís Abeba y Nairobi están en una [[plateau|meseta]] alta, por eso su aire es fresco.', fa: 'کینشاسا کنار دریای کانگو است که کار سرک را می‌کند. ادیس ابابا و نایروبی روی [[plateau|فلات]] بلند هستند، برای همین هوایشان خنک است.' }
  ],
  reflect: {
    q: { en: 'Think about a city you know well, like Alexandria or a city from your home country. Why do people move there? What languages do you hear on its streets?', es: 'Piensa en una ciudad que conoces bien, como Alexandria o una ciudad de tu país. ¿Por qué se muda gente allí? ¿Qué idiomas oyes en sus calles?', fa: 'به شهری فکر کن که خوب می‌شناسی، مثل الکساندریا یا یک شهر در کشور خودت. چرا مردم به آن‌جا کوچ می‌کنند؟ در سرک‌هایش چه زبان‌هایی می‌شنوی؟' },
    starter: { en: 'In the city I know, people move there because', es: 'A la ciudad que conozco, la gente se muda porque', fa: 'در شهری که من می‌شناسم، مردم به آن‌جا می‌آیند چون' }
  }
};
