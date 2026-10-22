/* WORLDWALKER · Episode 8.1 · Australia and the Pacific (WG.11)
   West to east the land teaches the lesson: the dry red Outback, the green coast with the big city,
   then open ocean with a high volcanic island and a low ring-shaped atoll far out at sea. */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'WG.11',
  title: { en: 'Australia and the Pacific', es: 'Australia y el Pacífico', fa: 'آسترالیا و اقیانوس آرام' },
  place: { en: 'Harbor City and the Far Islands', es: 'Ciudad del Puerto y las Islas Lejanas', fa: 'شهر بندر و جزیره‌های دور' },
  intro: [
    { en: 'The Grump rolled through! The Outback, the coast and the islands are mixed up.', es: '¡El Gruñón pasó por aquí! El Outback, la costa y las islas están mezclados.', fa: 'غرغرو از اینجا گذشت! اوت‌بک، ساحل و جزیره‌ها با هم مخلوط شده‌اند.' },
    { en: 'Talk to the ranger, ferry captain and reef scientist. Then fix the Outback stone.', es: 'Habla con el guardaparques, la capitana del ferry y la científica del arrecife. Luego arregla la piedra del Outback.', fa: 'با محافظ پارک، کپتان کشتی و دانشمند مرجان گپ بزن. بعد سنگ اوت‌بک را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [151.2, -33.9],
    start: [
      { en: 'Welcome to Sydney, Australia, a big city on a deep harbor.',
        es: 'Bienvenido a Sídney, Australia, una gran ciudad junto a una bahía profunda.',
        fa: 'به سیدنی در آسترالیا خوش آمدی، شهری بزرگ کنار یک بندر عمیق.' },
      { en: 'Australia is the only country that covers a whole continent.',
        es: 'Australia es el único país que ocupa todo un continente.',
        fa: 'آسترالیا تنها کشوری است که یک قارهٔ کامل را می‌پوشاند.' },
      { en: 'Most Australians live near the coast, far from the dry Outback.',
        es: 'La mayoría de los australianos vive cerca de la costa, lejos del Outback seco.',
        fa: 'بیشتر مردم آسترالیا نزدیک ساحل زندگی می‌کنند، دور از اوتبک خشک.' }
    ],
    page: { en: 'The Great Barrier Reef is the biggest coral reef system on Earth.',
      es: 'La Gran Barrera de Coral es el sistema de arrecifes más grande del mundo.',
      fa: 'دیوار بزرگ مرجانی بزرگ‌ترین مجموعهٔ صخره‌های مرجانی جهان است.' }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [39, 6], name: { en: 'Grandpa Sione', es: 'Abuelo Sione', fa: 'پدرکلان سیونه' },
      look: { skin: 4, hair: '#bdbdbd', shirt: '#2f8f7f', pants: '#e8e0c8', style: 'short' },
      lines: [
        { en: 'Come in! Have some taro from my garden. Volcano soil is very rich.', es: '¡Pasa! Come un poco de taro de mi huerto. La tierra volcánica es muy rica.', fa: 'بیا داخل! کمی تارو از باغچه‌ام بخور. خاک آتشفشانی خیلی حاصلخیز است.' },
        { en: 'Our island is high, so rising seas worry us less than the atolls.', es: 'Nuestra isla es alta, así que el mar que sube nos preocupa menos que a los atolones.', fa: 'جزیرهٔ ما بلند است، پس بالا آمدن بحر ما را کمتر از اتول‌ها نگران می‌کند.' }
      ] },
    { at: [6, 14], name: { en: 'Grandma Nell', es: 'Abuela Nell', fa: 'مادرکلان نِل' },
      look: { skin: 0, hair: '#e8e4dc', shirt: '#c26a3a', pants: '#5a4a3a', hat: '#b89a6a' },
      lines: [
        { en: 'Come in out of the heat! The supply truck comes only once a week.', es: '¡Pasa, sal del calor! El camión de provisiones viene solo una vez por semana.', fa: 'بیا داخل، از گرما بیرون شو! لاری اموال فقط هفته‌ای یک بار می‌آید.' },
        { en: 'The next big town is hours away. Some kids out here do school online.', es: 'El siguiente pueblo grande está a horas. Algunos niños de aquí estudian por internet.', fa: 'شهر بزرگ بعدی چند ساعت دور است. بعضی اطفال اینجا از راه انترنت درس می‌خوانند.' }
      ] },
    { at: [24, 18], name: { en: 'Ahmed', es: 'Ahmed', fa: 'احمد' },
      look: { skin: 2, hair: '#1e1612', shirt: '#3a8fd6', pants: '#e0c070', style: 'short' },
      lines: [
        { en: 'Careful, my surfboard is drying by the door. The beach is ten minutes away!', es: 'Cuidado, mi tabla de surf se está secando junto a la puerta. ¡La playa está a diez minutos!', fa: 'احتیاط، تختهٔ موج‌سواری‌ام کنار دروازه خشک می‌شود. ساحل ده دقیقه دور است!' },
        { en: 'My parents came from Lebanon. Many Sydney families came from across the world.', es: 'Mis papás vinieron del Líbano. Muchas familias de Sídney vinieron de todo el mundo.', fa: 'پدر و مادرم از لبنان آمدند. خانواده‌های زیادی در سیدنی از سراسر جهان آمده‌اند.' }
      ] }
  ],

  /* 48 x 22 tiles = 3 x 2 screens.
     West: the dry Outback (sand, dry grass, rocks, a big red rock like Uluru, one small town far from everything).
     Middle: the coast, where the rain falls and the city stands by the beach and harbor.
     East: open ocean. A long ferry dock reaches a high volcanic island, and a second dock reaches a low atoll. */
  map: [
    'rrrrrrrrrrrrrrrrTTTTTTTTTTTTpppp================',
    'rsssgsssssssgsssgg.......T..ss~~~~~~pssssssp~~~=',
    'rssasssssssssgssg..UU:UU:UU.ss~~~~~~GGGGGGGG~~~=',
    'rssssssssssssassg..UU:UU:UU.ss~~~~~ss..KVK.ss~~=',
    'rsgssMMMMMMsssgsg..:::::::::sskkkkkkk...,..ss~~=',
    'rssssMMMMMMsssssg..UU:UU:UU.ss~~~~~ss.QQQ.pss~~=',
    'rsssssssssssgsssg..UU:UU:UU.ss~~~~~~s.hdh..s~~~=',
    'rsrssssgssssssssg.....:....xss~~~~~~sp..x.ps~~~=',
    'rssssasssssrssgsgg.,..:..T..ss~~~~~~~sskss~~~~~=',
    'rsgsssssssssssssg.....:.....ss~~~~~~~~~k~~~~~~~=',
    'rssssssgsssassssgg....:...,.ss~~~~~~~~~k~~~~~~~=',
    'rsssssssssssssgsg.....:.....ss~~~~~~~~~k~~~~~~~=',
    'rsasssgsssssssssg.ww..:..ww.ss~~~~~~~~~k~~~~~~~=',
    'rssssRRRssssassgg.ww..:..ww.ss~~~~~~pssssssp~~~=',
    'rsgsshdhsOsssssgg.....:..ww.ss~~~~~psss~~sssp~~=',
    'rss::::::::::::::::::::.....ss~~~~~ss~~~~~~ss~~=',
    'rsssssssssssgssgg.....,..T..ss~~~~~ss~~s~~~ss~~=',
    'rsssssssrssssgsgg.ww...QQQ..ss~~~~~ss~~~~~~ss~~=',
    'rsgsssasssssssggg.ww...hdh..ss~~~~~psss~~sssp~~=',
    'rssssssssgssrsgggg.........sss~~~~~~pssssssp~~~=',
    'rsssrsssssssssggggg..T.....ss~~~~~~~~~~~~~~~~~~=',
    'rrrrrrrrrrrrrrrrTTTTTTTTTTTpp~~~================'
  ],
  start: [22, 10],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): new homes on the green coast by Harbor City, not in the dry Outback (most Australians live near the coast) */
  build: [
    { id: 'homes', kind: 'place', board: [17, 9], tile: 'h', ok: [[18, 7, 'R'], [19, 7, 'R'], [20, 7, 'R'], [18, 8, 'h'], [19, 8, 'd'], [20, 8, 'h']], cost: { wood: 1 },
      name: { en: 'New homes', es: 'Casas nuevas', fa: 'خانه‌های نو' },
      ask: { en: 'A new family is moving to Australia. Where do most Australians live? Build their home on the green [[coast|coast]], next to Harbor City, where there is rain, water and work.',
        es: 'Una familia nueva se muda a Australia. ¿Dónde vive la mayoría de los australianos? Construye su casa en la [[coast|costa]] verde, junto a Ciudad Puerto, donde hay lluvia, agua y trabajo.',
        fa: 'یک خانوادهٔ نو به آسترالیا می‌آید. بیشتر آسترالیایی‌ها کجا زندگی می‌کنند؟ خانهٔ آن‌ها را در [[coast|ساحل]] سبز، کنار شهر بندر بساز، جایی که باران، آب و کار هست.' },
      why: { en: 'On the green coast, by the city. Rain, water and jobs are close!', es: '¡En la costa verde, junto a la ciudad! La lluvia, el agua y el trabajo están cerca.', fa: 'در ساحل سبز، کنار شهر. باران، آب و کار نزدیک است!' },
      wrong: { en: 'Not here. Build the home on the coast, right next to Harbor City, just west of the tall buildings.', es: 'Aquí no. Construye la casa en la costa, junto a Ciudad Puerto, justo al oeste de los edificios altos.', fa: 'این جا نه. خانه را در ساحل، درست کنار شهر بندر، کمی غربِ تعمیرهای بلند بساز.' },
      wrongBy: [
        { x: 1, y: 1, w: 15, h: 20, t: { en: 'This is the Outback. It is too dry and too far from the city. Very few people live out here.', es: 'Este es el Outback. Es demasiado seco y está muy lejos de la ciudad. Aquí vive muy poca gente.', fa: 'این جا اوت‌بک است. خیلی خشک است و از شهر خیلی دور. مردم بسیار کم این جا زندگی می‌کنند.' } }
      ],
      done: { en: 'The new home is built by the coast! More than 8 out of 10 Australians live near the coast. It gets more rain, and the big cities and jobs are there. The dry Outback has very few people.',
        es: '¡La casa nueva está junto a la costa! Más de 8 de cada 10 australianos viven cerca de la costa. Allí llueve más, y allí están las ciudades grandes y el trabajo. El Outback seco tiene muy poca gente.',
        fa: 'خانهٔ نو کنار ساحل ساخته شد! بیشتر از ۸ نفر از هر ۱۰ آسترالیایی نزدیک ساحل زندگی می‌کنند. آن جا باران بیشتر است و شهرهای بزرگ و کار آن جا هستند. اوتبک خشک مردم بسیار کم دارد.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 16], at: [10, 14], decor: 'fossil',
      clue: { en: 'Use the map key: find the well in the little Outback town. Stand just east of it.', es: 'Usa la leyenda: busca el pozo del pueblito del Outback. Párate justo al este de él.', fa: 'از راهنمای نقشه استفاده کن: چاه قریهٔ کوچک اوت‌بک را پیدا کن. درست به طرف شرق آن بایست.' },
      text: { en: 'Water is precious here. Farms pump it from deep underground, from the Great Artesian Basin. A fossil!', es: 'El agua aquí es valiosa. Las granjas la sacan de muy abajo, de la Gran Cuenca Artesiana. ¡Un fósil!', fa: 'آب اینجا قیمتی است. فارم‌ها آن را از عمق زمین، از حوزهٔ بزرگ آرتزین، پمپ می‌کنند. یک فسیل!' } },
    { clueAt: [41, 14], at: [43, 18], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east, then 4 steps south. Something is hidden there.', es: 'Desde esta nota, camina 2 pasos al este y luego 4 pasos al sur. Algo está escondido allí.', fa: 'از این یادداشت، ۲ قدم به شرق برو، بعد ۴ قدم به جنوب. چیزی آن جا پنهان است.' },
      text: { en: 'East is right and south is down. You walked the atoll ring, by the calm lagoon. A shell!', es: 'El este está a la derecha y el sur abajo. Caminaste por el anillo del atolón, junto a la laguna. ¡Una concha!', fa: 'شرق طرف راست و جنوب پایین است. تو روی حلقهٔ اتول، کنار آب آرام، راه رفتی. یک صدف!' } }
  ],
  // only the Monsoon Cloak (Episode 6.3) walks through the tropical storm to the volcanic island's north beach
  secret: { tool: 'cloak', at: [39, 1],
    text: { en: 'Your cloak kept you dry in the tropical storm! High volcanic islands like this one catch rain clouds, so they have forests, streams and rich soil. Low atolls get much less fresh water.',
      es: '¡Tu capa te mantuvo seco en la tormenta tropical! Las islas volcánicas altas como esta atrapan las nubes de lluvia, por eso tienen bosques, arroyos y suelo fértil. Los atolones bajos reciben mucha menos agua dulce.',
      fa: 'بارانی موسمی تو را در طوفان استوایی خشک نگه داشت! جزیره‌های آتشفشانی بلند مثل این جزیره ابرهای باران را می‌گیرند، برای همین جنگل، جوی آب و خاک حاصلخیز دارند. اتول‌های پست آب شیرین خیلی کمتر دارند.' } },

  words: {
    coast: { en: 'the land along the edge of the sea', es: 'la tierra a la orilla del mar', fa: 'زمین کنار بحر' },
    outback: { en: 'the huge, dry middle of Australia, where very few people live', es: 'el enorme centro seco de Australia, donde vive muy poca gente', fa: 'میانهٔ بزرگ و خشک آسترالیا که مردم بسیار کم در آن زندگی می‌کنند' },
    harbor: { en: 'a calm place on the coast where ships can stop safely', es: 'un lugar tranquilo en la costa donde los barcos pueden parar seguros', fa: 'جای آرام در ساحل که کشتی‌ها می‌توانند با امنیت بایستند' },
    capital: { en: 'the city where a country\'s government works', es: 'la ciudad donde trabaja el gobierno de un país', fa: 'شهری که حکومت یک کشور در آن کار می‌کند' },
    export: { en: 'something a country sells to other countries', es: 'algo que un país vende a otros países', fa: 'چیزی که یک کشور به کشورهای دیگر می‌فروشد' },
    atoll: { en: 'a ring-shaped island or reef built around a sunken volcano, with a calm lagoon in the middle', es: 'una isla o arrecife en forma de anillo, construido alrededor de un volcán hundido, con una laguna tranquila en el medio', fa: 'جزیره یا صخرهٔ حلقه‌مانند که دور یک آتشفشان غرق‌شده ساخته شده و در وسطش آب آرام است' },
    'high island': { en: 'an island made by a volcano, with hills, streams and deep soil', es: 'una isla hecha por un volcán, con cerros, arroyos y tierra profunda', fa: 'جزیره‌ای که آتشفشان ساخته، با تپه، جوی و خاک عمیق' },
    'coral reef': { en: 'a long wall under the sea built by tiny animals called coral. Many fish live there', es: 'una larga pared bajo el mar construida por animales muy pequeños llamados corales. Allí viven muchos peces', fa: 'دیوار درازی زیر بحر که جانوران بسیار کوچک به نام مرجان آن را می‌سازند. ماهی‌های زیادی آنجا زندگی می‌کنند' },
    tourism: { en: 'the business of visitors who come to see a place and spend money there', es: 'el negocio de los visitantes que vienen a conocer un lugar y gastan dinero allí', fa: 'کار و بار مهمانانی که برای دیدن یک جا می‌آیند و آنجا پول خرج می‌کنند' },
    wayfinding: { en: 'finding your way across the ocean by reading the stars, waves, clouds and birds', es: 'encontrar el camino en el océano leyendo las estrellas, las olas, las nubes y los pájaros', fa: 'پیدا کردن راه در بحر با خواندن ستاره‌ها، موج‌ها، ابرها و پرنده‌ها' },
    remote: { en: 'very far away from other places and big cities', es: 'muy lejos de otros lugares y de las ciudades grandes', fa: 'بسیار دور از جاهای دیگر و شهرهای بزرگ' }
  },

  npcs: [
    {
      x: 21, y: 9,
      name: { en: 'Captain Chloe Tran', es: 'Capitana Chloe Tran', fa: 'کپتان کلوی ترَن' },
      role: { en: 'Harbor ferry captain', es: 'Capitana del ferry del puerto', fa: 'کپتان کشتی مسافربری بندر' },
      look: { skin: 1, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'Welcome to Harbor City! It is like Sydney, the biggest city in Australia.', es: '¡Bienvenido a Ciudad del Puerto! Es como Sídney, la ciudad más grande de Australia.', fa: 'به شهر بندر خوش آمدی! این شهر مثل سیدنی است، بزرگ‌ترین شهر آسترالیا.' },
        { en: 'Sydney wraps around a huge natural [[harbor|harbor]] on the [[coast|coast]]. My ferry crosses it.', es: 'Sídney rodea un enorme [[harbor|puerto]] natural en la [[coast|costa]]. Mi ferry lo cruza.', fa: 'سیدنی دور یک [[harbor|بندر]] طبیعی بزرگ در [[coast|ساحل]] ساخته شده. کشتی من از آن می‌گذرد.' },
        { en: 'Over 8 in 10 Australians live near the coast. Why? It gets more rain.', es: 'Más de 8 de cada 10 australianos viven cerca de la costa. ¿Por qué? Llueve más.', fa: 'بیشتر از ۸ از هر ۱۰ آسترالیایی نزدیک ساحل زندگی می‌کنند. چرا؟ باران بیشتر دارد.' },
        { en: 'The middle, the [[outback|Outback]], is very dry. Farming is hard, so few people live there.', es: 'El centro, el [[outback|Outback]], es muy seco. Es difícil cultivar, así que vive poca gente allí.', fa: 'میانهٔ کشور، یعنی [[outback|اوت‌بک]]، بسیار خشک است. دهقانی سخت است، پس مردم کم آنجا زندگی می‌کنند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where do most Australians live?', es: '¿Dónde vive la mayoría de los australianos?', fa: 'بیشتر آسترالیایی‌ها کجا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'In cities near the coast', es: 'En ciudades cerca de la costa', fa: 'در شهرهای نزدیک ساحل' },
            why: { en: 'The coast gets more rain, so the big cities grew there.', es: 'La costa recibe más lluvia, por eso las ciudades grandes crecieron allí.', fa: 'ساحل باران بیشتر دارد، پس شهرهای بزرگ آنجا ساخته شدند.' } },
          { t: { en: 'In the middle of the Outback', es: 'En el centro del Outback', fa: 'در وسط اوت‌بک' },
            why: { en: 'The Outback is very dry. Only a few people live there.', es: 'El Outback es muy seco. Solo vive poca gente allí.', fa: 'اوت‌بک بسیار خشک است. فقط چند نفر آنجا زندگی می‌کنند.' } },
          { t: { en: 'On small islands far out at sea', es: 'En islas pequeñas lejos en el mar', fa: 'در جزیره‌های کوچک دور در بحر' },
            why: { en: 'Most Australians live on the mainland, in coastal cities.', es: 'La mayoría de los australianos vive en el continente, en ciudades de la costa.', fa: 'بیشتر آسترالیایی‌ها در خشکهٔ اصلی و در شهرهای ساحلی زندگی می‌کنند.' } }
        ]
      }
    },
    {
      x: 8, y: 7,
      name: { en: 'Ranger Jarrah Williams', es: 'Guardaparques Jarrah Williams', fa: 'محافظ پارک جَرا ویلیامز' },
      role: { en: 'Aboriginal park ranger', es: 'Guardaparques aborigen', fa: 'محافظ پارک از مردم بومی آسترالیا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#7a8a3a', pants: '#5a4630', hat: '#6b4a2a' },
      lines: [
        { en: 'G\'day! That red rock is like Uluru, a sacred place. Visitors may not climb it.', es: '¡Hola! Esa roca roja es como Uluru, un lugar sagrado. Los visitantes no pueden escalarla.', fa: 'سلام! آن سنگ سرخ مثل اولورو است، یک جای مقدس. مهمانان اجازه ندارند از آن بالا شوند.' },
        { en: 'Aboriginal Australians have lived here for tens of thousands of years.', es: 'Los aborígenes australianos viven aquí desde hace decenas de miles de años.', fa: 'مردم بومی آسترالیا ده‌ها هزار سال است که اینجا زندگی می‌کنند.' },
        { en: 'This is the driest continent where people live. [[outback|Outback]] towns are small and [[remote|remote]].', es: 'Este es el continente habitado más seco. Los pueblos del [[outback|Outback]] son pequeños y [[remote|remotos]].', fa: 'این خشک‌ترین قارهٔ مسکون است. قریه‌های [[outback|اوت‌بک]] کوچک و [[remote|دورافتاده]] هستند.' },
        { en: 'Mines dig iron ore. These [[export|exports]] sail to steel mills in East Asia, mostly China.', es: 'Las minas sacan hierro. Estas [[export|exportaciones]] van a fábricas de acero en Asia Oriental, sobre todo China.', fa: 'معدن‌ها سنگ آهن می‌کَنند. این [[export|صادرات]] به فابریکه‌های فولاد آسیای شرقی، بیشتر چین، می‌رود.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is the Outback like?', es: '¿Cómo es el Outback?', fa: 'اوت‌بک چگونه است؟' },
        choices: [
          { ok: true, t: { en: 'Very dry, with few people and far-apart towns', es: 'Muy seco, con poca gente y pueblos lejanos', fa: 'بسیار خشک، با مردم کم و قریه‌های دور' },
            why: { en: 'Little rain falls there, so only small towns can grow.', es: 'Allí llueve poco, así que solo crecen pueblos pequeños.', fa: 'آنجا باران کم می‌بارد، پس فقط قریه‌های کوچک ساخته می‌شوند.' } },
          { t: { en: 'Wet and green, full of big crowded cities', es: 'Húmedo y verde, lleno de ciudades grandes', fa: 'مرطوب و سبز، پر از شهرهای بزرگ و پرجمعیت' },
            why: { en: 'The big cities are on the coast. The Outback is dry and empty.', es: 'Las ciudades grandes están en la costa. El Outback es seco y vacío.', fa: 'شهرهای بزرگ در ساحل هستند. اوت‌بک خشک و خالی است.' } },
          { t: { en: 'Cold and covered in snow most of the year', es: 'Frío y cubierto de nieve casi todo el año', fa: 'سرد و بیشتر سال زیر برف' },
            why: { en: 'The Outback is hot and dry desert and scrub, not snow.', es: 'El Outback es desierto caliente y seco, con arbustos, no nieve.', fa: 'اوت‌بک ریگستان گرم و خشک با بوته‌ها است، نه برف.' } }
        ]
      }
    },
    {
      x: 36, y: 18,
      name: { en: 'Malia Teo', es: 'Malia Teo', fa: 'مالیا تئو' },
      role: { en: 'Reef scientist from Tuvalu', es: 'Científica del arrecife de Tuvalu', fa: 'دانشمند صخرهٔ مرجانی از تووالو' },
      look: { skin: 3, hair: '#1b1410', shirt: '#1aa39a', pants: '#2b4a6b' },
      lines: [
        { en: 'Talofa! My home is an [[atoll|atoll]]: a low ring of coral around a calm lagoon.', es: '¡Talofa! Mi hogar es un [[atoll|atolón]]: un anillo bajo de coral alrededor de una laguna tranquila.', fa: 'تالوفا! خانهٔ من یک [[atoll|اتول]] است: یک حلقهٔ پست مرجانی دور یک آب آرام.' },
        { en: 'A volcano made the [[high island|high island]] you crossed. It has hills and deep soil.', es: 'Un volcán hizo la [[high island|isla alta]] que cruzaste. Tiene cerros y tierra profunda.', fa: 'آتشفشان [[high island|جزیرهٔ بلند]] را که از آن گذشتی ساخته. تپه و خاک عمیق دارد.' },
        { en: 'The [[coral reef|reef]] shelters fish and breaks waves. Hot seas turn coral white; it can die.', es: 'El [[coral reef|arrecife]] protege a los peces y rompe las olas. El mar caliente blanquea el coral; puede morir.', fa: '[[coral reef|صخرهٔ مرجانی]] خانهٔ ماهی‌ها است و موج‌ها را می‌شکند. بحر گرم مرجان را سفید می‌کند؛ ممکن است بمیرد.' },
        { en: 'Atolls like Tuvalu are a few meters above the sea. Rising seas could flood them!', es: 'Atolones como Tuvalu están a pocos metros sobre el mar. ¡El mar que sube podría inundarlos!', fa: 'اتول‌هایی مثل تووالو فقط چند متر بالاتر از بحر هستند. بالا آمدن بحر می‌تواند آن‌ها را زیر آب کند!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why are rising seas so dangerous for atoll nations like Tuvalu?', es: '¿Por qué el mar que sube es tan peligroso para países de atolones como Tuvalu?', fa: 'چرا بالا آمدن بحر برای کشورهای اتولی مثل تووالو این‌قدر خطرناک است؟' },
        choices: [
          { ok: true, t: { en: 'Their land is only a few meters above the sea', es: 'Su tierra está solo unos metros sobre el mar', fa: 'زمین آن‌ها فقط چند متر بالاتر از بحر است' },
            why: { en: 'Low land floods easily. A little more sea can cover a lot of island.', es: 'La tierra baja se inunda fácilmente. Un poco más de mar puede cubrir mucha isla.', fa: 'زمین پست زود زیر آب می‌رود. کمی آب بیشتر بحر می‌تواند بخش بزرگی از جزیره را بپوشاند.' } },
          { t: { en: 'They are much too far from the equator', es: 'Están demasiado lejos del ecuador', fa: 'از خط استوا بسیار دور هستند' },
            why: { en: 'Tuvalu is close to the equator. The danger is how low the land is.', es: 'Tuvalu está cerca del ecuador. El peligro es lo baja que es la tierra.', fa: 'تووالو نزدیک خط استوا است. خطر از پست بودن زمین است.' } },
          { t: { en: 'Their tall mountains block all of the rain', es: 'Sus montañas altas bloquean toda la lluvia', fa: 'کوه‌های بلند آن‌ها جلو همهٔ باران را می‌گیرند' },
            why: { en: 'Atolls have no mountains at all. They are flat and low.', es: 'Los atolones no tienen montañas. Son planos y bajos.', fa: 'اتول‌ها هیچ کوهی ندارند. هموار و پست هستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 27, y: 7, text: { en: 'HARBOR CITY · The [[capital|capital]] is not Sydney. It is Canberra, a planned inland city between rivals Sydney and Melbourne.', es: 'CIUDAD DEL PUERTO · La [[capital|capital]] no es Sídney. Es Canberra, una ciudad planeada tierra adentro, entre las rivales Sídney y Melbourne.', fa: 'شهر بندر · [[capital|پایتخت]] سیدنی نیست. کانبرا است، یک شهر برنامه‌ریزی‌شده دور از ساحل، بین دو شهر رقیب سیدنی و ملبورن.' } },
    { x: 40, y: 7, text: { en: 'READING THE OCEAN · Three island groups: Melanesia, Micronesia, Polynesia. Sailors crossed by [[wayfinding|wayfinding]]: reading stars, waves, clouds, birds.', es: 'LEER EL OCÉANO · Tres grupos de islas: Melanesia, Micronesia, Polinesia. Los navegantes cruzaban con [[wayfinding|navegación tradicional]]: leían estrellas, olas, nubes y pájaros.', fa: 'خواندن بحر · سه گروه جزیره: ملانزی، میکرونزی، پولینزی. ملاحان با [[wayfinding|راه‌یابی]] می‌گذشتند: ستاره، موج، ابر و پرنده را می‌خواندند.' } }
  ],

  /* the quest: Dr. Priya Nair (gold !) -> Tess the cattle worker in the Outback town -> find the medicine bag by a landmark -> back to Priya */
  quest: {
    stat: 'mov',
    title: { en: 'The Flying Doctor\'s Bag', es: 'El maletín de la doctora voladora', fa: 'بکس داکتر پرنده' },
    giver: {
      x: 27, y: 9,
      name: { en: 'Dr. Priya Nair', es: 'Dra. Priya Nair', fa: 'داکتر پریا نایر' },
      role: { en: 'Flying Doctor', es: 'Doctora voladora', fa: 'داکتر پرنده' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8eef5', pants: '#2b3a5a', style: 'bun' },
      lines: [
        { en: 'Help! I am a Flying Doctor. I fly to sick people in far [[outback|Outback]] towns.', es: '¡Ayuda! Soy doctora voladora. Vuelo a ver enfermos en pueblos lejanos del [[outback|Outback]].', fa: 'کمک! من داکتر پرنده هستم. نزد مریضان در قریه‌های دور [[outback|اوت‌بک]] پرواز می‌کنم.' },
        { en: 'Wind shook my plane, and my medicine bag fell! Tess saw it. She is south-west.', es: '¡El viento sacudió mi avioneta y se cayó mi maletín! Tess lo vio. Está al suroeste.', fa: 'باد طیاره‌ام را تکان داد و بکس دواهایم افتاد! تِس آن را دید. او در جنوب غرب است.' }
      ],
      wait: { en: 'Tess is in the little Outback town. Go west, then south, to the long road.', es: 'Tess está en el pueblito del Outback. Ve al oeste y luego al sur, hasta el camino largo.', fa: 'تِس در قریهٔ کوچک اوت‌بک است. به غرب برو، بعد به جنوب، تا سرک دراز.' },
      thanks: { en: 'My bag! Now I can fly medicine to a [[remote|remote]] farm, far from hospitals.', es: '¡Mi maletín! Ahora puedo llevar medicinas a una granja [[remote|remota]], lejos de los hospitales.', fa: 'بکس من! حالا می‌توانم دوا را به یک فارم [[remote|دورافتاده]]، دور از شفاخانه‌ها، ببرم.' }
    },
    contact: {
      x: 4, y: 16,
      name: { en: 'Tess O\'Brien', es: 'Tess O\'Brien', fa: 'تِس اوبرایِن' },
      role: { en: 'Cattle station worker', es: 'Trabajadora de una estancia ganadera', fa: 'کارگر فارم گاوداری' },
      look: { skin: 0, hair: '#b5502a', shirt: '#4a7a9a', pants: '#5a4630', style: 'long', hat: '#8a6a3a' },
      lines: [
        { en: 'I saw it fall! The [[outback|Outback]] has no street names. We use landmarks, like rocks.', es: '¡Lo vi caer! El [[outback|Outback]] no tiene nombres de calles. Usamos lugares conocidos, como rocas.', fa: 'دیدم که افتاد! در [[outback|اوت‌بک]] نام سرک نیست. ما از نشانه‌ها، مثل سنگ‌ها، کار می‌گیریم.' },
        { en: 'Walk north to the big red rock. The bag is at its north-east corner.', es: 'Camina al norte hasta la gran roca roja. El maletín está en su esquina noreste.', fa: 'به شمال تا سنگ سرخ بزرگ برو. بکس در گوشهٔ شمال شرقی آن است.' }
      ]
    },
    action: {
      type: 'find',
      at: [11, 3],
      hint: { en: 'north-east corner of the big red rock', es: 'esquina noreste de la gran roca roja', fa: 'گوشهٔ شمال شرقیِ سنگ سرخ بزرگ' },
      found: { en: 'There it is, by the rock! You found it with a landmark and a direction. No address!', es: '¡Ahí está, junto a la roca! Lo encontraste con un lugar conocido y un punto cardinal. ¡Sin dirección!', fa: 'آنجاست، کنار سنگ! تو آن را با یک نشانه و یک جهت پیدا کردی. بدون آدرس!' },
      item: { icon: '🩺', name: { en: 'The medicine bag', es: 'El maletín de medicinas', fa: 'بکس دواها' } }
    }
  },

  scraps: [[1, 1], [44, 16], [28, 1]],
  smudges: [[6, 19], [20, 13], [8, 3]],

  challenge: {
    at: [10, 17],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per place in the table: Sydney on the harbor coast, Alice Springs deep in the dry Outback, Fiji on the high volcano island, Tuvalu on the far side of the low atoll
    spots: [[28, 12], [4, 10], [43, 3], [41, 19]],
    stat: 'loc',
    title: { en: 'Near or far?', es: '¿Cerca o lejos?', fa: 'نزدیک یا دور؟' },
    intro: { en: 'The Grump smeared the travel notes of this town. Read the table about four real places. Then answer the questions.',
      es: 'El Gruñón manchó las notas de viaje de este pueblo. Lee la tabla sobre cuatro lugares reales. Luego responde las preguntas.',
      fa: 'غرغرو یادداشت‌های سفر این قریه را خراب کرد. جدول دربارهٔ چهار جای واقعی را بخوان. بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Place', es: 'Lugar', fa: 'جا' },
        { en: 'Coast or inland?', es: '¿Costa o interior?', fa: 'ساحل یا داخل خشکه؟' },
        { en: 'People (about)', es: 'Habitantes (aprox.)', fa: 'نفوس (تقریباً)' },
        { en: 'Rain in a year (about)', es: 'Lluvia al año (aprox.)', fa: 'باران در یک سال (تقریباً)' },
        { en: 'Distance from Sydney (about)', es: 'Distancia desde Sídney (aprox.)', fa: 'فاصله از سیدنی (تقریباً)' }
      ],
      rows: [
        [ { en: 'Sydney, Australia', es: 'Sídney, Australia', fa: 'سیدنی، آسترالیا' }, { en: 'Coast', es: 'Costa', fa: 'ساحل' }, { en: '5 million', es: '5 millones', fa: '۵ میلیون' }, { en: '1,200 mm', es: '1,200 mm', fa: '۱۲۰۰ ملی‌متر' }, { en: '0 (start here)', es: '0 (empieza aquí)', fa: '۰ (از اینجا شروع کن)' } ],
        [ { en: 'Alice Springs, Australia', es: 'Alice Springs, Australia', fa: 'الیس اسپرینگز، آسترالیا' }, { en: 'Inland (Outback)', es: 'Interior (Outback)', fa: 'داخل خشکه (اوت‌بک)' }, { en: '25,000', es: '25,000', fa: '۲۵ هزار' }, { en: '300 mm', es: '300 mm', fa: '۳۰۰ ملی‌متر' }, { en: '2,000 km', es: '2,000 km', fa: '۲۰۰۰ کیلومتر' } ],
        [ { en: 'Fiji (high islands)', es: 'Fiyi (islas altas)', fa: 'فیجی (جزیره‌های بلند)' }, { en: 'Islands in the ocean', es: 'Islas en el océano', fa: 'جزیره در بحر' }, { en: '900,000', es: '900,000', fa: '۹۰۰ هزار' }, { en: '3,000 mm', es: '3,000 mm', fa: '۳۰۰۰ ملی‌متر' }, { en: '3,200 km', es: '3,200 km', fa: '۳۲۰۰ کیلومتر' } ],
        [ { en: 'Tuvalu (atolls)', es: 'Tuvalu (atolones)', fa: 'تووالو (اتول‌ها)' }, { en: 'Islands in the ocean', es: 'Islas en el océano', fa: 'جزیره در بحر' }, { en: '11,000', es: '11,000', fa: '۱۱ هزار' }, { en: '3,500 mm', es: '3,500 mm', fa: '۳۵۰۰ ملی‌متر' }, { en: '4,000 km', es: '4,000 km', fa: '۴۰۰۰ کیلومتر' } ]
      ],
      note: { en: 'Numbers are rounded. Rain for Fiji is in the capital, Suva. Rain for Tuvalu is on Funafuti. Distances are straight lines on the map.',
        es: 'Los números están redondeados. La lluvia de Fiyi es de la capital, Suva. La lluvia de Tuvalu es de Funafuti. Las distancias son líneas rectas en el mapa.',
        fa: 'عددها گرد شده‌اند. باران فیجی از پایتخت آن، سووا، است. باران تووالو از فونافوتی است. فاصله‌ها خط راست روی نقشه هستند.' }
    },
    questions: [
      { q: { en: 'Which place gets the least rain?', es: '¿Qué lugar recibe menos lluvia?', fa: 'کدام جا کمترین باران را دارد؟' },
        choices: [{ en: 'Alice Springs', es: 'Alice Springs', fa: 'الیس اسپرینگز' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }, { en: 'Fiji', es: 'Fiyi', fa: 'فیجی' }, { en: 'Tuvalu', es: 'Tuvalu', fa: 'تووالو' }], answer: 0,
        why: { en: 'About 300 mm is the smallest number. Alice Springs is in the dry Outback.', es: 'Unos 300 mm es el número más pequeño. Alice Springs está en el Outback seco.', fa: 'حدود ۳۰۰ ملی‌متر کوچک‌ترین عدد است. الیس اسپرینگز در اوت‌بک خشک است.' } },
      { q: { en: 'Sydney has far more people than Alice Springs. Which facts in the table help explain why?', es: 'Sídney tiene muchos más habitantes que Alice Springs. ¿Qué datos de la tabla ayudan a explicar por qué?', fa: 'سیدنی خیلی بیشتر از الیس اسپرینگز نفوس دارد. کدام معلومات جدول دلیلش را نشان می‌دهد؟' },
        choices: [{ en: 'Sydney is on the coast and gets about 4 times more rain', es: 'Sídney está en la costa y recibe unas 4 veces más lluvia', fa: 'سیدنی در ساحل است و حدود ۴ برابر باران بیشتر دارد' }, { en: 'Sydney is far from the ocean', es: 'Sídney está lejos del océano', fa: 'سیدنی از بحر دور است' }, { en: 'Alice Springs gets more rain than Sydney', es: 'Alice Springs recibe más lluvia que Sídney', fa: 'الیس اسپرینگز از سیدنی باران بیشتر دارد' }, { en: 'Alice Springs is an island', es: 'Alice Springs es una isla', fa: 'الیس اسپرینگز یک جزیره است' }], answer: 0,
        why: { en: 'Water and the coast pull people in. 1,200 mm is about 4 times 300 mm.', es: 'El agua y la costa atraen a la gente. 1,200 mm es unas 4 veces 300 mm.', fa: 'آب و ساحل مردم را جذب می‌کند. ۱۲۰۰ ملی‌متر حدود ۴ برابر ۳۰۰ ملی‌متر است.' } },
      { q: { en: 'Which place is the farthest from Sydney and has the fewest people?', es: '¿Qué lugar está más lejos de Sídney y tiene menos habitantes?', fa: 'کدام جا از سیدنی دورتر است و کمترین نفوس را دارد؟' },
        choices: [{ en: 'Tuvalu', es: 'Tuvalu', fa: 'تووالو' }, { en: 'Fiji', es: 'Fiyi', fa: 'فیجی' }, { en: 'Alice Springs', es: 'Alice Springs', fa: 'الیس اسپرینگز' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }], answer: 0,
        why: { en: 'Tuvalu is about 4,000 km away and has only about 11,000 people.', es: 'Tuvalu está a unos 4,000 km y tiene solo unos 11,000 habitantes.', fa: 'تووالو حدود ۴۰۰۰ کیلومتر دور است و فقط حدود ۱۱ هزار نفوس دارد.' } },
      { q: { en: 'A ship carries rice and fuel from Sydney to a store in Tuvalu. Why will these goods likely cost more there?', es: 'Un barco lleva arroz y combustible de Sídney a una tienda en Tuvalu. ¿Por qué estas cosas probablemente costarán más allí?', fa: 'یک کشتی برنج و تیل را از سیدنی به یک دکان در تووالو می‌برد. چرا این چیزها احتمالاً آنجا گران‌تر هستند؟' },
        choices: [{ en: 'The ship travels very far for a small load', es: 'El barco viaja muy lejos para llevar una carga pequeña', fa: 'کشتی برای یک بار کوچک راه بسیار دور می‌رود' }, { en: 'Tuvalu gets too little rain', es: 'En Tuvalu llueve muy poco', fa: 'تووالو باران بسیار کم دارد' }, { en: 'Tuvalu has more people than Sydney', es: 'Tuvalu tiene más habitantes que Sídney', fa: 'تووالو از سیدنی نفوس بیشتر دارد' }, { en: 'Stores in Tuvalu are inland', es: 'Las tiendas de Tuvalu están en el interior', fa: 'دکان‌های تووالو داخل خشکه هستند' }], answer: 0,
        why: { en: 'Distance costs money. A long trip for a few buyers makes each thing cost more.', es: 'La distancia cuesta dinero. Un viaje largo para pocos compradores hace que cada cosa cueste más.', fa: 'فاصله پول می‌خواهد. یک سفر دراز برای خریداران کم، هر چیز را گران‌تر می‌کند.' } }
    ],
    success: { en: 'The travel notes are clear again! Water and distance shape where people live in this realm.', es: '¡Las notas de viaje están claras otra vez! El agua y la distancia deciden dónde vive la gente en este reino.', fa: 'یادداشت‌های سفر دوباره روشن شدند! آب و فاصله تعیین می‌کنند که مردم در این سرزمین کجا زندگی کنند.' }
  },

  boss: {
    at: [41, 6],
    stat: 'pla',
    need: 3,
    name: { en: 'The Tide Grump', es: 'El Gruñón de la Marea', fa: 'غرغروی مد بحر' },
    appear: { en: 'The Tide Grump is hiding on the high island across the long dock!', es: '¡El Gruñón de la Marea se esconde en la isla alta, al otro lado del muelle largo!', fa: 'غرغروی مد بحر در جزیرهٔ بلند، آن طرف اسکلهٔ دراز، پنهان است!' },
    taunt: { en: 'Splash! I washed away the map of the Pacific. Islands, reefs, deserts... who can tell them apart now?', es: '¡Splash! Borré el mapa del Pacífico con agua. Islas, arrecifes, desiertos... ¿quién puede distinguirlos ahora?', fa: 'شَلَپ! نقشهٔ اقیانوس آرام را با آب شستم. جزیره‌ها، صخره‌ها، ریگستان‌ها... حالا کی می‌تواند آن‌ها را از هم جدا کند؟' },
    win: { en: 'The tide goes out. Atlas page 8.1 floats up from the water and into your hands!', es: 'La marea baja. ¡La página 8.1 del atlas sale del agua y llega a tus manos!', fa: 'آب بحر پس می‌رود. صفحهٔ ۸.۱ اطلس از آب بیرون می‌آید و به دستت می‌رسد!' },
    questions: [
      { q: { en: 'What is an atoll?', es: '¿Qué es un atolón?', fa: 'اتول چیست؟' },
        choices: [{ en: 'A low ring of coral around a calm lagoon', es: 'Un anillo bajo de coral alrededor de una laguna', fa: 'یک حلقهٔ پست مرجانی دور یک آب آرام' }, { en: 'A tall volcano rising straight out of the sea', es: 'Un volcán alto que sale directo del mar', fa: 'آتشفشان بلندی که مستقیم از بحر بالا آمده' }, { en: 'A deep channel between two islands', es: 'Un canal profundo entre dos islas', fa: 'یک آبراه عمیق بین دو جزیره' }, { en: 'A dry plain in the middle of a continent', es: 'Una llanura seca en el centro de un continente', fa: 'یک دشت خشک در وسط یک قاره' }], answer: 0,
        why: { en: 'An atoll is a low ring of coral land with a calm lagoon in the middle.', es: 'Un atolón es un anillo bajo de tierra de coral con una laguna tranquila en el medio.', fa: 'اتول یک حلقهٔ پست از زمین مرجانی است که در وسطش آب آرام است.' } },
      { q: { en: 'What are the three groups of Pacific islands called?', es: '¿Cómo se llaman los tres grupos de islas del Pacífico?', fa: 'سه گروه جزیره‌های اقیانوس آرام چه نام دارند؟' },
        choices: [{ en: 'Melanesia, Micronesia and Polynesia', es: 'Melanesia, Micronesia y Polinesia', fa: 'ملانزی، میکرونزی و پولینزی' }, { en: 'Indonesia, Micronesia and Australia', es: 'Indonesia, Micronesia y Australia', fa: 'اندونزیا، میکرونزی و آسترالیا' }, { en: 'Polynesia, Tasmania and Melanesia', es: 'Polinesia, Tasmania y Melanesia', fa: 'پولینزی، تاسمانیا و ملانزی' }, { en: 'Hawaii, Fiji and Papua New Guinea', es: 'Hawái, Fiyi y Papúa Nueva Guinea', fa: 'هاوایی، فیجی و پاپوا گینهٔ نو' }], answer: 0,
        why: { en: 'Melanesia is in the southwest, Micronesia is to the north, and Polynesia is a huge triangle from Hawaii to New Zealand.', es: 'Melanesia está al suroeste, Micronesia al norte y Polinesia es un enorme triángulo de Hawái a Nueva Zelanda.', fa: 'ملانزی در جنوب غرب، میکرونزی در شمال و پولینزی یک مثلث بزرگ از هاوایی تا زیلاند نو است.' } },
      { q: { en: 'Australia is the ___ continent where people live.', es: 'Australia es el continente habitado más ___.', fa: 'آسترالیا ___ قاره‌ای است که مردم در آن زندگی می‌کنند.' },
        choices: [{ en: 'driest', es: 'seco', fa: 'خشک‌ترین' }, { en: 'wettest', es: 'lluvioso', fa: 'مرطوب‌ترین' }, { en: 'coldest', es: 'frío', fa: 'سردترین' }, { en: 'most crowded', es: 'poblado', fa: 'پرجمعیت‌ترین' }], answer: 0,
        why: { en: 'Much of the middle of Australia gets very little rain most years.', es: 'Gran parte del centro de Australia recibe muy poca lluvia casi todos los años.', fa: 'بخش بزرگی از میانهٔ آسترالیا بیشتر سال‌ها باران بسیار کم دارد.' } },
      { q: { en: 'How is a high island different from a low island?', es: '¿En qué se diferencia una isla alta de una isla baja?', fa: 'جزیرهٔ بلند با جزیرهٔ پست چه فرقی دارد؟' },
        choices: [{ en: 'A volcano built it, so it has hills and deep soil', es: 'La hizo un volcán, así que tiene cerros y tierra profunda', fa: 'آتشفشان آن را ساخته، پس تپه و خاک عمیق دارد' }, { en: 'It always has more tourists and bigger hotels', es: 'Siempre tiene más turistas y hoteles más grandes', fa: 'همیشه سیاحان بیشتر و هوتل‌های بزرگ‌تر دارد' }, { en: 'It sits much closer to the equator than atolls', es: 'Está mucho más cerca del ecuador que los atolones', fa: 'از اتول‌ها به خط استوا بسیار نزدیک‌تر است' }, { en: 'It sits farther north, in colder water', es: 'Está más al norte, en agua más fría', fa: 'بیشتر به طرف شمال، در آب سردتر، است' }], answer: 0,
        why: { en: 'High islands come from volcanoes. Low islands, like atolls, have thin sandy soil and few streams.', es: 'Las islas altas vienen de volcanes. Las islas bajas, como los atolones, tienen tierra delgada y arenosa y pocos arroyos.', fa: 'جزیره‌های بلند از آتشفشان ساخته می‌شوند. جزیره‌های پست، مثل اتول‌ها، خاک نازک ریگی و جوی‌های کم دارند.' } },
      { q: { en: 'Which city is Australia\'s capital?', es: '¿Cuál es la capital de Australia?', fa: 'پایتخت آسترالیا کدام شهر است؟' },
        choices: [{ en: 'Canberra', es: 'Canberra', fa: 'کانبرا' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }, { en: 'Melbourne', es: 'Melbourne', fa: 'ملبورن' }, { en: 'Perth', es: 'Perth', fa: 'پرت' }], answer: 0,
        why: { en: 'Sydney is the biggest city, but Canberra, a planned inland city, is the capital.', es: 'Sídney es la ciudad más grande, pero Canberra, una ciudad planeada en el interior, es la capital.', fa: 'سیدنی بزرگ‌ترین شهر است، اما کانبرا، یک شهر برنامه‌ریزی‌شده در داخل خشکه، پایتخت است.' } },
      { q: { en: 'Where does most of Australia\'s iron ore go?', es: '¿A dónde va la mayor parte del mineral de hierro de Australia?', fa: 'بیشتر سنگ آهن آسترالیا به کجا می‌رود؟' },
        choices: [{ en: 'To steel mills in East Asia, mostly China', es: 'A fábricas de acero en Asia Oriental, sobre todo China', fa: 'به فابریکه‌های فولاد در آسیای شرقی، بیشتر چین' }, { en: 'To car factories in Europe and Africa', es: 'A fábricas de carros en Europa y África', fa: 'به فابریکه‌های موتر در اروپا و افریقا' }, { en: 'It all stays in Outback towns to build houses', es: 'Todo se queda en el Outback para hacer casas', fa: 'همه‌اش در قریه‌های اوت‌بک برای خانه‌سازی می‌ماند' }, { en: 'To small Pacific islands far out at sea', es: 'A pequeñas islas del Pacífico lejos en el mar', fa: 'به جزیره‌های کوچک اقیانوس آرام در دور بحر' }], answer: 0,
        why: { en: 'Ships carry iron ore across the ocean to East Asia. China buys much of it to make steel.', es: 'Los barcos llevan el mineral de hierro por el océano a Asia Oriental. China compra mucho para hacer acero.', fa: 'کشتی‌ها سنگ آهن را از بحر به آسیای شرقی می‌برند. چین بخش زیادی از آن را برای ساختن فولاد می‌خرد.' } },
      { q: { en: 'Many Pacific islands sell just one or two things, like fish or dried coconut. Why is that a risk?', es: 'Muchas islas del Pacífico venden solo una o dos cosas, como pescado o coco seco. ¿Por qué es un riesgo?', fa: 'بسیاری از جزیره‌های اقیانوس آرام فقط یک یا دو چیز می‌فروشند، مثل ماهی یا نارگیل خشک. چرا این خطر دارد؟' },
        choices: [{ en: 'If its price drops, the whole island loses money', es: 'Si su precio baja, toda la isla pierde dinero', fa: 'اگر قیمتش پایین بیاید، تمام جزیره ضرر می‌کند' }, { en: 'One product is much harder to load onto a ship', es: 'Un solo producto es mucho más difícil de subir a un barco', fa: 'بار کردن یک جنس در کشتی بسیار سخت‌تر است' }, { en: 'Buyers in other countries get bored of it', es: 'Los compradores de otros países se aburren', fa: 'خریداران کشورهای دیگر از آن خسته می‌شوند' }, { en: 'Fish and coconut cannot travel on ships', es: 'El pescado y el coco no pueden ir en barco', fa: 'ماهی و نارگیل را نمی‌شود با کشتی برد' }], answer: 0,
        why: { en: 'When an island depends on one thing, a low price means many people lose money. That is why many islands also turn to [[tourism|tourism]].', es: 'Cuando una isla depende de una sola cosa, un precio bajo hace que mucha gente pierda dinero. Por eso muchas islas también recurren al [[tourism|turismo]].', fa: 'وقتی یک جزیره به یک چیز وابسته است، قیمت پایین یعنی بسیاری از مردم پول از دست می‌دهند. برای همین بسیاری از جزیره‌ها به [[tourism|سیاحت]] هم رو می‌آورند.' } },
      { q: { en: 'How did Pacific sailors cross the ocean long ago, with no compass?', es: '¿Cómo cruzaban el océano los navegantes del Pacífico hace mucho tiempo, sin brújula?', fa: 'ملاحان اقیانوس آرام در زمان‌های قدیم بدون قطب‌نما چطور از بحر می‌گذشتند؟' },
        choices: [{ en: 'They read the stars, waves, clouds and birds', es: 'Leían las estrellas, las olas, las nubes y los pájaros', fa: 'ستاره‌ها، موج‌ها، ابرها و پرنده‌ها را می‌خواندند' }, { en: 'They followed long stone roads on the sea floor', es: 'Seguían largos caminos de piedra en el fondo del mar', fa: 'سرک‌های دراز سنگی را در کف بحر دنبال می‌کردند' }, { en: 'They only sailed where they could see land', es: 'Solo navegaban donde podían ver tierra', fa: 'فقط جایی می‌رفتند که خشکه را می‌دیدند' }, { en: 'They waited for a big ship to pull them', es: 'Esperaban que un barco grande los jalara', fa: 'منتظر می‌ماندند تا کشتی بزرگی آن‌ها را بکشد' }], answer: 0,
        why: { en: 'That skill is called [[wayfinding|wayfinding]]. The canoe Hōkūleʻa used it to sail from Hawaii to Tahiti in 1976.', es: 'Esa habilidad se llama [[wayfinding|navegación tradicional]]. La canoa Hōkūleʻa la usó para ir de Hawái a Tahití en 1976.', fa: 'این مهارت [[wayfinding|راه‌یابی]] نام دارد. قایق هوکوله در سال ۱۹۷۶ با آن از هاوایی تا تاهیتی رفت.' } }
    ]
  },

  learned: [
    { en: 'Most Australians live in cities on the rainy [[coast|coast]]. The dry [[outback|Outback]] in the middle has few people and [[remote|remote]] towns.', es: 'La mayoría de los australianos vive en ciudades de la [[coast|costa]] lluviosa. El [[outback|Outback]] seco del centro tiene poca gente y pueblos [[remote|remotos]].', fa: 'بیشتر آسترالیایی‌ها در شهرهای [[coast|ساحل]] پرباران زندگی می‌کنند. [[outback|اوت‌بک]] خشک در میانه مردم کم و قریه‌های [[remote|دورافتاده]] دارد.' },
    { en: 'A [[high island|high island]] is made by a volcano. An [[atoll|atoll]] is a low ring of coral, so rising seas are a real danger there.', es: 'Una [[high island|isla alta]] la hace un volcán. Un [[atoll|atolón]] es un anillo bajo de coral, por eso el mar que sube es un peligro real allí.', fa: '[[high island|جزیرهٔ بلند]] را آتشفشان می‌سازد. [[atoll|اتول]] یک حلقهٔ پست مرجانی است، پس بالا آمدن بحر آنجا خطر واقعی است.' },
    { en: 'Pacific islands are far apart. Distance makes goods cost more, and the ocean shapes jobs like fishing, [[tourism|tourism]] and shipping.', es: 'Las islas del Pacífico están muy lejos unas de otras. La distancia hace que las cosas cuesten más, y el océano da forma a trabajos como la pesca, el [[tourism|turismo]] y el transporte en barco.', fa: 'جزیره‌های اقیانوس آرام از هم دور هستند. فاصله اجناس را گران‌تر می‌کند و بحر کارهایی مثل ماهیگیری، [[tourism|سیاحت]] و کشتیرانی را شکل می‌دهد.' }
  ],
  reflect: {
    q: { en: 'Water and distance shape life in Australia and the Pacific. How do water or distance shape life where you live, or where your family comes from?', es: 'El agua y la distancia dan forma a la vida en Australia y el Pacífico. ¿Cómo dan forma el agua o la distancia a la vida donde vives, o de donde viene tu familia?', fa: 'آب و فاصله زندگی را در آسترالیا و اقیانوس آرام شکل می‌دهند. آب یا فاصله چطور زندگی را در جایی که تو زندگی می‌کنی، یا جایی که خانواده‌ات از آنجا آمده، شکل می‌دهد؟' },
    starter: { en: 'Where I live, water or distance changes life because', es: 'Donde vivo, el agua o la distancia cambian la vida porque', fa: 'در جایی که من زندگی می‌کنم، آب یا فاصله زندگی را تغییر می‌دهد، چون' }
  }
};
