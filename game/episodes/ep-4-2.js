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
    { en: 'The Grump made so much noise in Kinshasa that nobody can understand each other!',
      es: '¡El Gruñón hizo tanto ruido en Kinshasa que nadie se entiende!',
      fa: 'غرغرو در کینشاسا آن‌قدر سر و صدا کرد که هیچ‌کس حرف دیگری را نمی‌فهمد!' },
    { en: 'Talk to the market seller, boat captain and pilot. Then fix the compass stone.',
      es: 'Habla con la vendedora del mercado, el capitán y la piloto. Luego arregla la piedra de la brújula.',
      fa: 'با فروشندهٔ بازار، کپتان کشتی و پیلوت گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
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
      clue: { en: 'Map key: brown boards are a dock. Go to the west dock. Stand on its north-west corner.', es: 'Leyenda: las tablas cafés son un muelle. Ve al muelle del oeste. Párate en su esquina noroeste.', fa: 'راهنمای نقشه: تخته‌های قهوه‌ای اسکله است. به اسکلهٔ غربی برو. روی کنج شمال‌غربی آن بایست.' },
      text: { en: 'A river shell! Brazzaville is just across the river. Two capitals, only a few kilometers apart.', es: '¡Una concha de río! Brazzaville está justo al otro lado. Dos capitales a solo unos kilómetros.', fa: 'یک صدف دریا! برازاویل درست آن طرف دریا است. دو پایتخت، فقط چند کیلومتر دور از هم.' } },
    { clueAt: [8, 16], at: [11, 20], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps south, then 3 steps east. Listen for the music!', es: 'Desde esta nota, camina 4 pasos al sur y luego 3 pasos al este. ¡Escucha la música!', fa: 'از این یادداشت، ۴ قدم به جنوب برو، بعد ۳ قدم به شرق. به موسیقی گوش بده!' },
      text: { en: 'South is down, east is right! A drum: the heart of Congolese rumba, a UNESCO world treasure.', es: '¡El sur está abajo, el este a la derecha! Un tambor: el corazón de la rumba congoleña, tesoro mundial de la UNESCO.', fa: 'جنوب پایین، شرق راست! یک دهل: دل رومبای کانگویی، یک گنج جهانی یونسکو.' } }
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
        { en: 'Mbote is hello in Lingala! I sell fish and cassava in Kinshasa, DR Congo\'s capital.',
          es: '¡Mbote es hola en lingala! Vendo pescado y yuca en Kinshasa, la capital de RD Congo.',
          fa: 'مبوته به زبان لینگالا یعنی سلام! در کینشاسا، پایتخت کانگو، ماهی و کاساوا می‌فروشم.' },
        { en: 'DR Congo has over 200 languages and many [[ethnic group|ethnic groups]]. French is the [[official language|official language]].',
          es: 'RD Congo tiene más de 200 idiomas y muchos [[ethnic group|grupos étnicos]]. El francés es el [[official language|idioma oficial]].',
          fa: 'کانگو بیش از ۲۰۰ زبان و [[ethnic group|قوم‌های]] زیاد دارد. فرانسوی [[official language|زبان رسمی]] است.' },
        { en: 'On the street, people speak Lingala. Congolese rumba music is loved all over Africa.',
          es: 'En la calle, la gente habla lingala. La música rumba congoleña es querida en toda África.',
          fa: 'در سرک، مردم لینگالا گپ می‌زنند. موسیقی رومبای کانگویی در سراسر افریقا محبوب است.' },
        { en: 'Farm families move here for jobs and school: [[urbanization|urbanization]]. Kinshasa has over 10 million people!',
          es: 'Familias del campo llegan por trabajo y escuela: [[urbanization|urbanización]]. ¡Kinshasa tiene más de 10 millones de personas!',
          fa: 'خانواده‌های قریه برای کار و مکتب می‌آیند: [[urbanization|شهرنشینی]]. کینشاسا بیش از ۱۰ میلیون نفر دارد!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do cities like Kinshasa grow so fast?', es: '¿Por qué ciudades como Kinshasa crecen tan rápido?', fa: 'چرا شهرهایی مثل کینشاسا این‌قدر زود بزرگ می‌شوند؟' },
        choices: [
          { ok: true, t: { en: 'People move in for jobs and school', es: 'La gente llega por trabajo y escuela', fa: 'مردم برای کار و مکتب می‌آیند' },
            why: { en: 'Jobs and schools pull people into cities. That is urbanization.', es: 'El trabajo y las escuelas atraen a la gente a las ciudades. Eso es la urbanización.', fa: 'کار و مکتب مردم را به شهر می‌کشاند. این شهرنشینی است.' } },
          { t: { en: 'The city grows with nobody moving in', es: 'La ciudad crece sin que nadie llegue', fa: 'شهر بزرگ می‌شود بدون آمدن کسی' },
            why: { en: 'Cities grow because people arrive, not by themselves.', es: 'Las ciudades crecen porque llega gente, no solas.', fa: 'شهرها با آمدن مردم بزرگ می‌شوند، نه خودبه‌خود.' } },
          { t: { en: 'A law says all must live in the capital', es: 'Una ley dice que todos deben vivir en la capital', fa: 'قانون می‌گوید همه باید در پایتخت باشند' },
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
        { en: 'I am Captain Mbuyi. The Congo is Africa\'s second-longest river, and the world\'s deepest!',
          es: 'Soy el capitán Mbuyi. ¡El Congo es el segundo río más largo de África y el más profundo del mundo!',
          fa: 'من کپتان مبویی هستم. کانگو دومین دریای دراز افریقا و عمیق‌ترین دریای جهان است!' },
        { en: 'Thick [[rainforest|rainforest]] covers much of DR Congo. Roads are very hard to build there.',
          es: 'Una [[rainforest|selva]] espesa cubre gran parte de RD Congo. Allí es muy difícil construir carreteras.',
          fa: '[[rainforest|جنگل بارانی]] انبوه بیشتر کانگو را پوشانده است. ساختن سرک آن‌جا خیلی سخت است.' },
        { en: 'The river is our road. Boats carry people and goods upstream to Kisangani.',
          es: 'El río es nuestra carretera. Los barcos llevan gente y mercancías río arriba hasta Kisangani.',
          fa: 'دریا سرک ما است. کشتی‌ها مردم و بار را به بالای دریا تا کیسانگانی می‌برند.' },
        { en: 'Across the river: Brazzaville, capital of the Republic of the Congo. Two capitals, one river!',
          es: 'Al otro lado: Brazzaville, capital de la República del Congo. ¡Dos capitales, un río!',
          fa: 'آن طرف دریا: برازاویل، پایتخت جمهوری کانگو. دو پایتخت، یک دریا!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why is the Congo River used like a road?', es: '¿Por qué el río Congo se usa como una carretera?', fa: 'چرا از دریای کانگو مثل سرک استفاده می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Roads are hard to build in the rainforest', es: 'Es difícil hacer carreteras en la selva', fa: 'ساختن سرک در جنگل بارانی سخت است' },
            why: { en: 'People use the land and water they have. Here the river is the easiest way to travel.', es: 'La gente usa la tierra y el agua que tiene. Aquí el río es la forma más fácil de viajar.', fa: 'مردم از زمین و آبی که دارند استفاده می‌کنند. این‌جا دریا آسان‌ترین راه سفر است.' } },
          { t: { en: 'It is the only big river in all of Africa', es: 'Es el único río grande de toda África', fa: 'تنها دریای بزرگ در تمام افریقا است' },
            why: { en: 'Africa has many rivers, like the Nile and the Niger.', es: 'África tiene muchos ríos, como el Nilo y el Níger.', fa: 'افریقا دریاهای زیادی دارد، مثل نیل و نیجر.' } },
          { t: { en: 'Cars are not allowed anywhere in DR Congo', es: 'Los carros están prohibidos en toda RD Congo', fa: 'موتر در هیچ جای کانگو اجازه ندارد' },
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
        { en: 'Selam means hello in Amharic! I am Meron, a pilot from Addis Ababa, Ethiopia\'s capital.',
          es: '¡Selam quiere decir hola en amárico! Soy Meron, piloto de Adís Abeba, la capital de Etiopía.',
          fa: 'سِلام به زبان امهری یعنی سلام! من میرون هستم، پیلوت از ادیس ابابا، پایتخت ایتوپیا.' },
        { en: 'Addis Ababa sits on a high [[plateau|plateau]], about 2,400 meters above the sea.',
          es: 'Adís Abeba está en una [[plateau|meseta]] alta, a unos 2,400 metros sobre el mar.',
          fa: 'ادیس ابابا روی یک [[plateau|فلات]] بلند است، حدود ۲٬۴۰۰ متر بالاتر از بحر.' },
        { en: 'Because of that high [[elevation|elevation]], the air is cool most of the year.',
          es: 'Por esa gran [[elevation|elevación]], el aire es fresco casi todo el año.',
          fa: 'به خاطر این [[elevation|ارتفاع]] زیاد، هوا بیشتر سال خنک است.' },
        { en: 'Ethiopia has over 80 languages, its own alphabet and calendar. Each [[culture|culture]] adds something.',
          es: 'Etiopía tiene más de 80 idiomas, su propio alfabeto y calendario. Cada [[culture|cultura]] aporta algo.',
          fa: 'ایتوپیا بیش از ۸۰ زبان، الفبا و تقویم خودش را دارد. هر [[culture|فرهنگ]] چیزی اضافه می‌کند.' }
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
    { x: 7, y: 6, text: { en: 'CONGO RIVER · second-longest river in Africa, deepest in the world. Boats carry people and goods far inland.',
      es: 'RÍO CONGO · el segundo más largo de África, el más profundo del mundo. Los barcos llevan gente y mercancías tierra adentro.',
      fa: 'دریای کانگو · دومین دریای دراز افریقا، عمیق‌ترین دریای جهان. کشتی‌ها مردم و بار را تا جاهای دور می‌برند.' } }
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
        { en: 'Mbote! I am Ilunga. I play guitar in a rumba band.',
          es: '¡Mbote! Soy Ilunga. Toco la guitarra en una banda de rumba.',
          fa: 'مبوته! من ایلونگا هستم. در یک گروه رومبا گیتار می‌نوازم.' },
        { en: 'Our songs mix Lingala, French and Swahili, just like the people of this city.',
          es: 'Nuestras canciones mezclan lingala, francés y suajili, igual que la gente de esta ciudad.',
          fa: 'آهنگ‌های ما لینگالا، فرانسوی و سواحیلی را یک‌جا می‌کنند، درست مثل مردم این شهر.' },
        { en: 'But an Ink Thief grabbed my song book! Bijou the radio host sees everything.',
          es: '¡Pero un Ladrón de Tinta agarró mi cancionero! Bijou, la locutora de radio, lo ve todo.',
          fa: 'اما یک دزد رنگ کتاب آهنگ‌هایم را گرفت! بیژو، گویندهٔ رادیو، همه چیز را می‌بیند.' },
        { en: 'She lives among the homes in the south-west part of the city. Please ask her!',
          es: 'Vive entre las casas, en el suroeste de la ciudad. ¡Pregúntale, por favor!',
          fa: 'او میان خانه‌ها در جنوب غرب شهر زندگی می‌کند. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Bijou lives among the homes in the south-west part of the city.',
        es: 'Bijou vive entre las casas, en el suroeste de la ciudad.',
        fa: 'بیژو میان خانه‌ها در جنوب غرب شهر زندگی می‌کند.' },
      thanks: { en: 'My song book! The words are back. Many languages, one song. That is Kinshasa!',
        es: '¡Mi cancionero! Las palabras volvieron. Muchos idiomas, una canción. ¡Eso es Kinshasa!',
        fa: 'کتاب آهنگ‌هایم! کلمه‌ها برگشتند. چندین زبان، یک آهنگ. این کینشاسا است!' }
    },
    contact: {
      x: 6, y: 19,
      name: { en: 'Bijou', es: 'Bijou', fa: 'بیژو' },
      role: { en: 'Radio host', es: 'Locutora de radio', fa: 'گویندهٔ رادیو' },
      look: { skin: 3, hair: '#2b1a10', shirt: '#e74c3c', pants: '#34495e', style: 'bun' },
      lines: [
        { en: 'Hello! On my radio show I speak Lingala, French and Swahili.',
          es: '¡Hola! En mi programa de radio hablo lingala, francés y suajili.',
          fa: 'سلام! در برنامهٔ رادیوی خود به لینگالا، فرانسوی و سواحیلی گپ می‌زنم.' },
        { en: 'Many people here use two or three languages. Each [[ethnic group|ethnic group]] brings its own words.',
          es: 'Mucha gente aquí usa dos o tres idiomas. Cada [[ethnic group|grupo étnico]] trae sus propias palabras.',
          fa: 'بسیاری مردم این‌جا دو یا سه زبان به کار می‌برند. هر [[ethnic group|قوم]] کلمه‌های خودش را می‌آورد.' },
        { en: 'I saw the Ink Thief! It tore the song book into 3 pieces.',
          es: '¡Vi al Ladrón de Tinta! Rompió el cancionero en 3 pedazos.',
          fa: 'دزد رنگ را دیدم! کتاب آهنگ را سه تکه کرد.' },
        { en: 'It hid them in the city. Follow its riddles about [[culture|culture]], then catch it!',
          es: 'Los escondió en la ciudad. Sigue sus acertijos sobre [[culture|cultura]] y ¡después atrápalo!',
          fa: 'آن‌ها را در شهر پنهان کرد. چیستان‌هایش را دربارهٔ [[culture|فرهنگ]] دنبال کن، بعد آن را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 16],
      hops: [[20, 16], [25, 15]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "Hee hee! I hid 3 pieces around the city. Follow my riddles!"',
        es: 'El Ladrón de Tinta se ríe: "¡Ji ji! Escondí 3 pedazos por la ciudad. ¡Sigue mis acertijos!"',
        fa: 'دزد رنگ می‌خندد: «هی هی! سه تکه را در شهر پنهان کردم. چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1: many [[ethnic group|ethnic groups]] meet here daily to buy fish and cassava, in many languages.',
            es: 'Pedazo 1: muchos [[ethnic group|grupos étnicos]] se encuentran aquí cada día para comprar pescado y yuca, en muchos idiomas.',
            fa: 'تکهٔ ۱: [[ethnic group|قوم‌های]] زیاد هر روز این‌جا ماهی و کاساوا می‌خرند، به زبان‌های زیاد.' },
          zones: [{ x: 1, y: 6, w: 14, h: 4 }],
          noBy: [{ x: 16, y: 12, w: 15, h: 9, t: { en: 'These tall buildings are offices and banks. People work inside, but they do not meet here to buy and sell. Look for the market stalls.', es: 'Estos edificios altos son oficinas y bancos. La gente trabaja adentro, pero no se reúne aquí a comprar y vender. Busca los puestos del mercado.', fa: 'این ساختمان‌های بلند دفتر و بانک هستند. مردم داخل آن‌ها کار می‌کنند، اما برای خرید و فروش این جا جمع نمی‌شوند. دکان‌های بازار را پیدا کن.' } }],
          found: { en: 'Piece 1 was in the market! Each ethnic group shares a language, history and customs.', es: '¡El pedazo 1 estaba en el mercado! Cada grupo étnico comparte idioma, historia y costumbres.', fa: 'تکهٔ ۱ در بازار بود! هر قوم زبان، تاریخ و رسم‌های مشترک دارد.' } },
        { t: { en: 'Thousands move here weekly for jobs: [[urbanization|urbanization]]. Piece 2 is on empty land by the port.',
            es: 'Miles llegan cada semana por trabajo: [[urbanization|urbanización]]. El pedazo 2 está en el terreno vacío junto al puerto.',
            fa: 'هر هفته هزاران نفر برای کار می‌آیند: [[urbanization|شهرنشینی]]. تکهٔ ۲ در زمین خالی کنار بندر است.' },
          zones: [{ x: 17, y: 6, w: 14, h: 4 }],
          noBy: [{ x: 1, y: 15, w: 14, h: 6, t: { en: 'These homes are already full of families. The new people need homes on empty land, near the jobs at the port.', es: 'Estas casas ya están llenas de familias. La gente nueva necesita casas en un terreno vacío, cerca de los trabajos del puerto.', fa: 'این خانه‌ها پر از خانواده‌ها هستند. مردم تازه به خانه در زمین خالی، نزدیک کارهای بندر، ضرورت دارند.' } }],
          found: { en: 'Piece 2! Fast-growing cities struggle to build enough homes, buses and water pipes.', es: '¡El pedazo 2! A las ciudades que crecen rápido les cuesta hacer suficientes casas, buses y tuberías.', fa: 'تکهٔ ۲! شهرهایی که زود بزرگ می‌شوند به سختی خانه، بس و نل آب کافی می‌سازند.' } },
        { t: { en: 'Piece 3 is where people use the [[official language|official language]] at work: downtown offices.',
            es: 'El pedazo 3 está donde la gente usa el [[official language|idioma oficial]] en el trabajo: las oficinas del centro.',
            fa: 'تکهٔ ۳ جایی است که مردم در کار [[official language|زبان رسمی]] را به کار می‌برند: دفترهای مرکز شهر.' },
          zones: [{ x: 16, y: 12, w: 15, h: 9 }],
          noBy: [{ x: 1, y: 6, w: 14, h: 4, t: { en: 'In the market, most people speak Lingala, the language of the street. The official language is for laws, schools and offices.', es: 'En el mercado, casi todos hablan lingala, el idioma de la calle. El idioma oficial es para las leyes, las escuelas y las oficinas.', fa: 'در بازار بیشتر مردم لینگالا، زبان کوچه، گپ می‌زنند. زبان رسمی برای قانون، مکتب و اداره است.' } }],
          found: { en: 'Piece 3 was downtown! French is the official language. Bijou speaks it at work.', es: '¡El pedazo 3 estaba en el centro! El francés es el idioma oficial. Bijou lo habla en el trabajo.', fa: 'تکهٔ ۳ در مرکز شهر بود! فرانسوی زبان رسمی است. بیژو در کار به آن گپ می‌زند.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs. The song book is whole again.',
        es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye. El cancionero está completo otra vez.',
        fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و فرار می‌کند. کتاب آهنگ دوباره کامل است.' },
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
        choices: [{ en: 'More than 500', es: 'Más de 500', fa: 'بیش از ۵۰۰' }, { en: 'Only about 10', es: 'Solo unos 10', fa: 'فقط حدود ۱۰' }, { en: 'About 50', es: 'Unos 50', fa: 'حدود ۵۰' }, { en: 'Just 2 or 3', es: 'Solo 2 o 3', fa: 'فقط ۲ یا ۳' }], answer: 0,
        why: { en: 'Nigeria alone has more than 500 languages. Sub-Saharan Africa holds thousands of cultures.', es: 'Solo Nigeria tiene más de 500 idiomas. África subsahariana tiene miles de culturas.', fa: 'تنها نیجریه بیش از ۵۰۰ زبان دارد. افریقای جنوب صحرا هزاران فرهنگ دارد.' } },
      { q: { en: 'Kinshasa sits on which river?', es: '¿Junto a qué río está Kinshasa?', fa: 'کینشاسا کنار کدام دریا است؟' },
        choices: [{ en: 'The Congo River', es: 'El río Congo', fa: 'دریای کانگو' }, { en: 'The Nile River', es: 'El río Nilo', fa: 'دریای نیل' }, { en: 'The Niger River', es: 'El río Níger', fa: 'دریای نیجر' }, { en: 'The Zambezi River', es: 'El río Zambeze', fa: 'دریای زمبیزی' }], answer: 0,
        why: { en: 'Kinshasa, the capital of DR Congo, sits on the Congo River.', es: 'Kinshasa, la capital de RD Congo, está junto al río Congo.', fa: 'کینشاسا، پایتخت کانگو، کنار دریای کانگو است.' } },
      { q: { en: 'Why do boats on the Congo River carry so many people and goods?', es: '¿Por qué los barcos del río Congo llevan tanta gente y tantas mercancías?', fa: 'چرا کشتی‌های دریای کانگو این‌قدر مردم و بار می‌برند؟' },
        choices: [{ en: 'Roads are hard to build in the rainforest', es: 'Es difícil hacer carreteras en la selva', fa: 'ساختن سرک در جنگل بارانی سخت است' }, { en: 'Boats are faster than airplanes', es: 'Los barcos son más rápidos que los aviones', fa: 'کشتی از طیاره تیزتر است' }, { en: 'The river is frozen and easy to cross', es: 'El río está congelado y es fácil de cruzar', fa: 'دریا یخ زده و گذشتن از آن آسان است' }, { en: 'Nobody lives anywhere near the river', es: 'Nadie vive en ningún lugar cerca del río', fa: 'هیچ‌کس هیچ جای نزدیک دریا زندگی نمی‌کند' }], answer: 0,
        why: { en: 'Where roads are hard to build, the river works like a road.', es: 'Donde es difícil hacer carreteras, el río funciona como carretera.', fa: 'جایی که ساختن سرک سخت است، دریا کار سرک را می‌کند.' } },
      { q: { en: 'Why is Addis Ababa cool most of the year?', es: '¿Por qué Adís Abeba es fresca casi todo el año?', fa: 'چرا ادیس ابابا بیشتر سال خنک است؟' },
        choices: [{ en: 'It sits high on a plateau', es: 'Está en lo alto de una meseta', fa: 'بالای یک فلات بلند است' }, { en: 'It is on a cold ocean coast', es: 'Está en la costa de un océano frío', fa: 'در ساحل یک اقیانوس سرد است' }, { en: 'It is near the North Pole', es: 'Está cerca del Polo Norte', fa: 'نزدیک قطب شمال است' }, { en: 'It is in the middle of a rainforest', es: 'Está en medio de una selva', fa: 'در وسط جنگل بارانی است' }], answer: 0,
        why: { en: 'Addis Ababa is about 2,400 meters high. High places have cooler air.', es: 'Adís Abeba está a unos 2,400 metros. Los lugares altos tienen aire más fresco.', fa: 'ادیس ابابا حدود ۲٬۴۰۰ متر بلندی دارد. جاهای بلند هوای خنک‌تر دارند.' } },
      { q: { en: 'What is urbanization?', es: '¿Qué es la urbanización?', fa: 'شهرنشینی چیست؟' },
        choices: [{ en: 'People moving into cities, so cities grow', es: 'Gente que se muda a las ciudades, y las ciudades crecen', fa: 'کوچ مردم به شهرها که شهرها را بزرگ می‌کند' }, { en: 'People moving from cities back to farms', es: 'Gente que se muda de las ciudades al campo', fa: 'کوچ مردم از شهر دوباره به قریه' }, { en: 'Building farms inside a city', es: 'Hacer granjas dentro de una ciudad', fa: 'ساختن کشتزار در داخل شهر' }, { en: 'Making a city smaller', es: 'Hacer más pequeña una ciudad', fa: 'کوچک کردن یک شهر' }], answer: 0,
        why: { en: 'Urbanization means more people living in cities as people move in from farms and towns.', es: 'La urbanización significa que más gente vive en ciudades porque llega del campo y de pueblos.', fa: 'شهرنشینی یعنی مردم بیشتر در شهر زندگی کنند چون از قریه و شهرک به شهر می‌آیند.' } },
      { q: { en: 'Which sentence about sub-Saharan Africa is true?', es: '¿Qué oración sobre África subsahariana es verdadera?', fa: 'کدام جمله دربارهٔ افریقای جنوب صحرا درست است؟' },
        choices: [{ en: 'It has many cultures and languages', es: 'Tiene muchas culturas e idiomas', fa: 'فرهنگ‌ها و زبان‌های زیاد دارد' }, { en: 'Everyone speaks one language there', es: 'Allí todos hablan un solo idioma', fa: 'همه آن‌جا یک زبان گپ می‌زنند' }, { en: 'It has no big cities at all', es: 'No tiene ninguna ciudad grande', fa: 'هیچ شهر بزرگی ندارد' }, { en: 'Everyone there lives the same way', es: 'Todos allí viven de la misma forma', fa: 'همه در آن‌جا یک‌رقم زندگی می‌کنند' }], answer: 0,
        why: { en: 'The region is many places at once: big cities, villages, and hundreds of languages.', es: 'La región es muchos lugares a la vez: ciudades grandes, pueblos y cientos de idiomas.', fa: 'این منطقه چندین جای مختلف است: شهرهای بزرگ، قریه‌ها و صدها زبان.' } },
      { q: { en: 'What is the official language of DR Congo?', es: '¿Cuál es el idioma oficial de RD Congo?', fa: 'زبان رسمی کانگو چیست؟' },
        choices: [{ en: 'French', es: 'Francés', fa: 'فرانسوی' }, { en: 'Amharic', es: 'Amárico', fa: 'امهری' }, { en: 'Spanish', es: 'Español', fa: 'هسپانوی' }, { en: 'Arabic', es: 'Árabe', fa: 'عربی' }], answer: 0,
        why: { en: 'French is the official language. On the streets of Kinshasa, many people speak Lingala.', es: 'El francés es el idioma oficial. En las calles de Kinshasa mucha gente habla lingala.', fa: 'فرانسوی زبان رسمی است. در سرک‌های کینشاسا بسیاری مردم لینگالا گپ می‌زنند.' } },
      { q: { en: 'Nairobi, Kenya, is known as a center for…', es: 'Nairobi, Kenia, es conocida como un centro de…', fa: 'نایروبی، کینیا، به عنوان مرکز … شناخته می‌شود.' },
        choices: [{ en: 'business and technology', es: 'negocios y tecnología', fa: 'تجارت و تکنالوژی' }, { en: 'gold and diamond mining', es: 'minería de oro y diamantes', fa: 'استخراج طلا و الماس' }, { en: 'cocoa and coffee farms', es: 'granjas de cacao y café', fa: 'کشتزارهای کاکائو و قهوه' }, { en: 'desert camel trips', es: 'viajes en camello por el desierto', fa: 'سفر با شتر در بیابان' }], answer: 0,
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
