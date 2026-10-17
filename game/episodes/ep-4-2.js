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
    { en: 'Pip: "The Smudge made so much noise in Kinshasa that nobody can understand each other! Talk to the market seller, the boat captain and the pilot. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón hizo tanto ruido en Kinshasa que nadie se entiende! Habla con la vendedora del mercado, el capitán del barco y la piloto. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه در کینشاسا آن‌قدر سر و صدا کرد که هیچ‌کس حرف دیگری را نمی‌فهمد! با فروشندهٔ بازار، کپتان کشتی و پیلوت گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. The Congo River runs along the top, with two docks. Market top-left, homes bottom-left, downtown bottom-right. */
  map: [
    '================================',
    '================================',
    '====kk===============kk=========',
    '~~~~kk~~~~~~~~~~~~~~~kk~~~~~~~~~',
    '~~~~kk~~~~~~~~~~~~~~~kk~~~~~~~~~',
    'T::::::::::::::::::::::::::::::T',
    'T.p....x..p..p.:..p........p..pT',
    'T.mm:mm:mm:mm:.:...,...T....,..T',
    'T:::::::::::::::..T......,...T.T',
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
          fa: 'مبوته! این به زبان لینگالا یعنی سلام. من گراس هستم. در این بازار کینشاسا، پایتخت جمهوری دموکراتیک کانگو، ماهی و برگ کاساوا می‌فروشم.',
          easy: { en: 'Hello! I am Grâce. I sell food in the market in Kinshasa, DR Congo.', es: '¡Hola! Soy Grâce. Vendo comida en el mercado de Kinshasa, RD Congo.', fa: 'سلام! من گراس هستم. در بازار کینشاسا در کانگو خوراکی می‌فروشم.' } },
        { en: 'DR Congo has more than 200 languages and many [[ethnic group|ethnic groups]]. French is the [[official language|official language]]. On the street here, most people speak Lingala. You hear it in our music too: Congolese rumba is loved all over Africa.',
          es: 'RD Congo tiene más de 200 idiomas y muchos [[ethnic group|grupos étnicos]]. El francés es el [[official language|idioma oficial]]. En la calle, aquí casi todos hablan lingala. También lo oyes en nuestra música: la rumba congoleña es querida en toda África.',
          fa: 'کانگو بیش از ۲۰۰ زبان و [[ethnic group|قوم‌های]] زیاد دارد. فرانسوی [[official language|زبان رسمی]] است. این‌جا در سرک، بیشتر مردم لینگالا گپ می‌زنند. آن را در موسیقی ما هم می‌شنوی: رومبای کانگویی در سراسر افریقا محبوب است.',
          easy: { en: 'My country has more than 200 languages. French is the [[official language|official language]]. Here people also speak Lingala.', es: 'Mi país tiene más de 200 idiomas. El francés es el [[official language|idioma oficial]]. Aquí la gente también habla lingala.', fa: 'کشور من بیش از ۲۰۰ زبان دارد. فرانسوی [[official language|زبان رسمی]] است. این‌جا مردم لینگالا هم گپ می‌زنند.' } },
        { en: 'Every day new people arrive from farms and small towns. They come for jobs and school. That move to cities is called [[urbanization|urbanization]]. Kinshasa now has more than 10 million people!',
          es: 'Cada día llega gente nueva del campo y de pueblos pequeños. Vienen por trabajo y por la escuela. Esa mudanza a las ciudades se llama [[urbanization|urbanización]]. ¡Kinshasa ya tiene más de 10 millones de personas!',
          fa: 'هر روز مردم تازه از قریه‌ها و شهرک‌های کوچک می‌آیند. آن‌ها برای کار و مکتب می‌آیند. این کوچ به شهرها [[urbanization|شهرنشینی]] نام دارد. حالا کینشاسا بیش از ۱۰ میلیون نفر دارد!',
          easy: { en: 'People move here from farms for jobs and school. This is [[urbanization|urbanization]].', es: 'La gente se muda aquí del campo por trabajo y escuela. Esto es la [[urbanization|urbanización]].', fa: 'مردم از قریه برای کار و مکتب به این‌جا می‌آیند. این [[urbanization|شهرنشینی]] است.' } }
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
          fa: 'من کپتان مبویی هستم. این دریای کانگو است، دومین دریای دراز افریقا. عمیق‌ترین دریای جهان هم است!',
          easy: { en: 'This is the Congo River. It is very long and the deepest river in the world.', es: 'Este es el río Congo. Es muy largo y el más profundo del mundo.', fa: 'این دریای کانگو است. خیلی دراز است و عمیق‌ترین دریای جهان است.' } },
        { en: 'Thick [[rainforest|rainforest]] covers much of DR Congo. Building roads there is very hard. So the river is our road. Boats carry people, cassava, fish and phones between Kinshasa and towns far upstream, like Kisangani.',
          es: 'Una [[rainforest|selva]] espesa cubre gran parte de RD Congo. Construir carreteras ahí es muy difícil. Por eso el río es nuestra carretera. Los barcos llevan gente, yuca, pescado y teléfonos entre Kinshasa y pueblos lejanos río arriba, como Kisangani.',
          fa: '[[rainforest|جنگل بارانی]] انبوه بیشتر کانگو را پوشانده است. ساختن سرک در آن‌جا خیلی سخت است. پس دریا سرک ما است. کشتی‌ها مردم، کاساوا، ماهی و موبایل را میان کینشاسا و شهرهای دور در بالای دریا، مثل کیسانگانی، می‌برند.',
          easy: { en: 'The forest makes roads hard to build. So boats on the river carry people and goods.', es: 'La selva hace difícil construir carreteras. Por eso los barcos del río llevan gente y mercancías.', fa: 'جنگل ساختن سرک را سخت می‌کند. پس کشتی‌های دریا مردم و بار را می‌برند.' } },
        { en: 'Look across the water. That is Brazzaville, the capital of another country, the Republic of the Congo. Two capital cities face each other across one river!',
          es: 'Mira al otro lado del agua. Esa es Brazzaville, la capital de otro país, la República del Congo. ¡Dos capitales, una frente a la otra, separadas por un río!',
          fa: 'آن طرف آب را ببین. آن‌جا برازاویل است، پایتخت یک کشور دیگر، جمهوری کانگو. دو پایتخت آن طرف و این طرف یک دریا روبه‌روی هم هستند!',
          easy: { en: 'Across the river is Brazzaville, the capital of a different country.', es: 'Al otro lado del río está Brazzaville, la capital de otro país.', fa: 'آن طرف دریا برازاویل است، پایتخت یک کشور دیگر.' } }
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
      lines: [
        { en: 'Selam! That means hello in Amharic. I am Meron, a pilot. I just flew here from Addis Ababa, the capital of Ethiopia.',
          es: '¡Selam! Así se dice hola en amárico. Soy Meron, piloto. Acabo de volar hasta aquí desde Adís Abeba, la capital de Etiopía.',
          fa: 'سِلام! این به زبان امهری یعنی سلام. من میرون هستم، یک پیلوت. همین حالا از ادیس ابابا، پایتخت ایتوپیا، به این‌جا پرواز کردم.',
          easy: { en: 'Hi! I am Meron, a pilot from Addis Ababa, Ethiopia.', es: '¡Hola! Soy Meron, piloto de Adís Abeba, Etiopía.', fa: 'سلام! من میرون هستم، پیلوت از ادیس ابابا، ایتوپیا.' } },
        { en: 'Addis Ababa sits high on a [[plateau|plateau]], about 2,400 meters above the sea. Because of that high [[elevation|elevation]], the air is cool most of the year.',
          es: 'Adís Abeba está en lo alto de una [[plateau|meseta]], a unos 2,400 metros sobre el mar. Por esa gran [[elevation|elevación]], el aire es fresco casi todo el año.',
          fa: 'ادیس ابابا بالای یک [[plateau|فلات]] است، حدود ۲٬۴۰۰ متر بالاتر از بحر. به خاطر این [[elevation|ارتفاع]] زیاد، هوا بیشتر سال خنک است.',
          easy: { en: 'My city is very high up, on a [[plateau|plateau]]. So the air is cool.', es: 'Mi ciudad está muy alta, en una [[plateau|meseta]]. Por eso el aire es fresco.', fa: 'شهر من خیلی بلند است، روی یک [[plateau|فلات]]. برای همین هوا خنک است.' } },
        { en: 'Ethiopia has more than 80 languages. Amharic is one of the main ones. Ethiopia even has its own alphabet and its own calendar! Each [[culture|culture]] adds something to the country.',
          es: 'Etiopía tiene más de 80 idiomas. El amárico es uno de los principales. ¡Etiopía hasta tiene su propio alfabeto y su propio calendario! Cada [[culture|cultura]] le aporta algo al país.',
          fa: 'ایتوپیا بیش از ۸۰ زبان دارد. امهری یکی از زبان‌های اصلی است. ایتوپیا حتی الفبا و تقویم خودش را دارد! هر [[culture|فرهنگ]] چیزی به کشور اضافه می‌کند.',
          easy: { en: 'Ethiopia has more than 80 languages, its own alphabet and its own calendar.', es: 'Etiopía tiene más de 80 idiomas, su propio alfabeto y su propio calendario.', fa: 'ایتوپیا بیش از ۸۰ زبان، الفبای خودش و تقویم خودش را دارد.' } }
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

  scraps: [[5, 2], [30, 9], [2, 20]],
  smudges: [[25, 8], [10, 16]],

  challenge: {
    at: [9, 15],
    type: 'table',
    stat: 'loc',
    title: { en: 'Four big cities', es: 'Cuatro ciudades grandes', fa: 'چهار شهر بزرگ' },
    intro: { en: 'The Smudge scrambled the city guide! Read the table. Then answer the questions.',
      es: '¡El Borrón revolvió la guía de ciudades! Lee la tabla. Luego responde las preguntas.',
      fa: 'لکه راهنمای شهرها را خراب کرد! جدول را بخوان. بعد به سوال‌ها جواب بده.' },
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
    name: { en: 'The Noise Smudge', es: 'El Borrón del Ruido', fa: 'لکهٔ سر و صدا' },
    appear: { en: 'The Noise Smudge is hiding between the tall buildings downtown!', es: '¡El Borrón del Ruido se esconde entre los edificios altos del centro!', fa: 'لکهٔ سر و صدا میان ساختمان‌های بلند مرکز شهر پنهان است!' },
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
