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
    { en: 'Pip: "The Smudge scribbled all over East Asia! Rivers, mountains and islands are mixed up. Talk to the scientist on the high plateau, the rice farmer and the engineer across the sea. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón garabateó todo el este de Asia! Los ríos, las montañas y las islas están revueltos. Habla con la científica de la meseta alta, el agricultor de arroz y la ingeniera al otro lado del mar. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه روی تمام شرق آسیا خط‌خطی کرد! دریاها، کوه‌ها و جزیره‌ها مخلوط شده‌اند. با دانشمند فلات بلند، دهقان برنج و انجنیر آن طرف بحر گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  map: [
    'AAAAAAAAAAAAAAAATTTTTTTTTTTTTTTT================',
    'AsssssssssssssKK..K..KK..K.KK.K.~~====~MMMMMMMM=',
    'AsusssusssusssWWWWWWWWW.WWWWWWWW~~====...MMAMMM=',
    'Assusssussssssss.....:..........~~=.p~...MAVAMM=',
    'Asssssssssssussswwwww:wwwwwwwwww~~===~UU.MAAAMM=',
    'AssssussrMMssusswwwww:wwwwwwwwww~~===~U..MMMMMM=',
    'AsssussssMA~~~~~~~~~~B~~~~~~~~~~~~~==~...MMMMMM=',
    'AssrssssssMs~~~~~~~~~B~~~~~~~~~~~~~==~...MMMMMM=',
    'Asssssssssssgsss..,..:x........x~~~==~.QQMMMMMM=',
    'Aggggggggggggggg::::::::::::::::kkkkkk.hdMMMMMM=',
    'Aggggggggggggggg.wwww:......UUUU~~~==~....qMMMM=',
    'AMMzAAzzzMMAzzzMwwwww:.RRR.fUUUU~~~==~...qqMMMM=',
    'AMzzzznzzzzzznzzwwwww:.hdhJUUUUU~~~==~...qqMMMM=',
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
          fa: 'سلام، مسافر! من اینجا بالای [[plateau|فلات]] تبت هوا را اندازه می‌گیرم. آن‌قدر بلند است که مردم آن را «بام دنیا» می‌گویند. در جنوب، کوه‌های همالیا قرار دارند، بلندترین کوه‌های زمین.',
          easy: { en: 'This is the Tibetan [[plateau|Plateau]], very high land. The Himalaya are just to the south.', es: 'Esta es la [[plateau|meseta]] del Tíbet, una tierra muy alta. Los Himalaya están justo al sur.', fa: 'این [[plateau|فلات]] تبت است، زمین بسیار بلند. همالیا درست در جنوب آن است.' } },
        { en: 'Two great rivers begin in these high mountains: the Yellow River and the Yangtze. Both flow thousands of miles east to the sea. North of here is the Gobi Desert, dry and rocky.',
          es: 'Dos grandes ríos nacen en estas montañas altas: el río Amarillo y el Yangtsé. Los dos corren miles de millas hacia el este hasta el mar. Al norte está el desierto de Gobi, seco y rocoso.',
          fa: 'دو دریای بزرگ از این کوه‌های بلند شروع می‌شوند: دریای زرد و دریای یانگتسی. هر دو هزاران میل به طرف شرق تا بحر می‌روند. در شمال اینجا دشت گوبی است، خشک و سنگلاخ.',
          easy: { en: 'The Yellow River and the Yangtze start here and flow east. The Gobi Desert is to the north.', es: 'El río Amarillo y el Yangtsé nacen aquí y corren al este. El desierto de Gobi está al norte.', fa: 'دریای زرد و یانگتسی از اینجا شروع می‌شوند و به شرق می‌روند. دشت گوبی در شمال است.' } },
        { en: 'Cold mountains and dry desert are hard places to live. So very few people live in the west of China. Most people live in the east, near the rivers and the coast. We say the east has a high [[population density|population density]].',
          es: 'Las montañas frías y el desierto seco son lugares difíciles para vivir. Por eso muy poca gente vive en el oeste de China. La mayoría vive en el este, cerca de los ríos y la costa. Decimos que el este tiene una alta [[population density|densidad de población]].',
          fa: 'کوه‌های سرد و دشت خشک جای سخت برای زندگی هستند. پس مردم بسیار کم در غرب چین زندگی می‌کنند. بیشتر مردم در شرق، نزدیک دریاها و ساحل زندگی می‌کنند. می‌گوییم شرق [[population density|تراکم نفوس]] بلند دارد.',
          easy: { en: 'Few people live in the cold, dry west. Most live in the east. The east has a high [[population density|population density]].', es: 'Poca gente vive en el oeste frío y seco. La mayoría vive en el este. El este tiene una alta [[population density|densidad de población]].', fa: 'مردم کم در غرب سرد و خشک زندگی می‌کنند. بیشتر در شرق زندگی می‌کنند. شرق [[population density|تراکم نفوس]] بلند دارد.' } }
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
          fa: 'به شالیزارهای من خوش آمدی! این زمین پهن و هموار یک [[plain|دشت هموار]] است. زمین هموار برای زراعت و ساختمان آسان است. برنج به کشتزار هموار ضرورت دارد که آب را نگه دارد. مردم اینجا هزاران سال است برنج می‌کارند.',
          easy: { en: 'This flat land is a [[plain|plain]]. Rice grows well in flat fields full of water.', es: 'Esta tierra plana es una [[plain|llanura]]. El arroz crece bien en campos planos llenos de agua.', fa: 'این زمین هموار یک [[plain|دشت هموار]] است. برنج در کشتزارهای هموار پر از آب خوب می‌روید.' } },
        { en: 'The Yangtze, right here, is the longest river in Asia. Up north, the Yellow River carries so much [[silt|silt]] that the water looks yellow-brown. Silt makes rich soil. But floods could wash away whole villages. Long ago, farmers called it "China\'s Sorrow."',
          es: 'El Yangtsé, aquí mismo, es el río más largo de Asia. Al norte, el río Amarillo lleva tanto [[silt|limo]] que el agua se ve café amarillenta. El limo hace tierra fértil. Pero sus inundaciones podían llevarse pueblos enteros. Hace mucho, los agricultores lo llamaban "la Tristeza de China".',
          fa: 'یانگتسی، همین‌جا، درازترین دریای آسیا است. در شمال، دریای زرد آن‌قدر [[silt|لای]] با خود دارد که آبش زرد و نصواری معلوم می‌شود. لای خاک را حاصلخیز می‌کند. اما سیلابش می‌توانست قریه‌های کامل را ببرد. در گذشته دهقانان آن را «غم چین» می‌گفتند.',
          easy: { en: 'The Yangtze is Asia\'s longest river. The Yellow River\'s [[silt|silt]] makes rich soil, but its floods were terrible.', es: 'El Yangtsé es el río más largo de Asia. El [[silt|limo]] del río Amarillo hace tierra fértil, pero sus inundaciones eran terribles.', fa: 'یانگتسی درازترین دریای آسیا است. [[silt|لای]] دریای زرد خاک را حاصلخیز می‌کند، اما سیلابش وحشتناک بود.' } },
        { en: 'Where the Yangtze meets the sea, a giant city grew: Shanghai. It is a [[megacity|megacity]], with more than 20 million people. Flat land, a big river and the sea pull people together.',
          es: 'Donde el Yangtsé llega al mar creció una ciudad gigante: Shanghái. Es una [[megacity|megaciudad]], con más de 20 millones de personas. La tierra plana, un río grande y el mar juntan a la gente.',
          fa: 'جایی که یانگتسی به بحر می‌رسد، یک شهر بسیار بزرگ رشد کرد: شانگهای. این یک [[megacity|ابرشهر]] است، با بیشتر از ۲۰ میلیون نفر. زمین هموار، یک دریای بزرگ و بحر، مردم را یکجا جمع می‌کنند.',
          easy: { en: 'Shanghai grew where the river meets the sea. It is a [[megacity|megacity]].', es: 'Shanghái creció donde el río llega al mar. Es una [[megacity|megaciudad]].', fa: 'شانگهای جایی رشد کرد که دریا به بحر می‌رسد. یک [[megacity|ابرشهر]] است.' } }
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
          fa: 'به جاپان خوش آمدی! جاپان یک [[archipelago|مجمع‌الجزایر]] است، یک زنجیره از جزیره‌ها. چهار جزیرهٔ اصلی و هزاران جزیرهٔ کوچک دارد. تقریباً سه حصه از چهار حصهٔ زمینش کوه است.',
          easy: { en: 'Japan is a chain of islands, an [[archipelago|archipelago]]. Most of it is mountains.', es: 'Japón es una cadena de islas, un [[archipelago|archipiélago]]. Casi todo es montaña.', fa: 'جاپان زنجیره‌ای از جزیره‌ها، یک [[archipelago|مجمع‌الجزایر]] است. بیشترش کوه است.' } },
        { en: 'So people crowd onto narrow strips of flat land by the coast. Greater Tokyo has about 37 million people! With so little flat land, buildings go up instead of out. Farmers cut [[terrace|terraces]], flat steps, into hillsides to grow rice.',
          es: 'Por eso la gente se amontona en franjas angostas de tierra plana junto a la costa. ¡El Gran Tokio tiene unos 37 millones de personas! Con tan poca tierra plana, los edificios crecen hacia arriba y no hacia los lados. Los agricultores cortan [[terrace|terrazas]], escalones planos, en las laderas para sembrar arroz.',
          fa: 'پس مردم روی نوارهای باریک زمین هموار کنار ساحل جمع می‌شوند. توکیوی بزرگ حدود ۳۷ میلیون نفر دارد! با زمین هموار این‌قدر کم، تعمیرها به جای پهن شدن بلند ساخته می‌شوند. دهقانان در دامنهٔ کوه [[terrace|زمین‌های زینه‌ای]] می‌کنند تا برنج بکارند.',
          easy: { en: 'People crowd onto the flat coast. Buildings go up. Farmers grow rice on [[terrace|terraces]].', es: 'La gente se amontona en la costa plana. Los edificios crecen hacia arriba. Se siembra arroz en [[terrace|terrazas]].', fa: 'مردم در ساحل هموار جمع می‌شوند. تعمیرها بلند می‌شوند. دهقانان برنج را روی [[terrace|زمین‌های زینه‌ای]] می‌کارند.' } },
        { en: 'Japan sits on the [[ring of fire|Ring of Fire]]. It has many earthquakes and volcanoes, like snowy Mount Fuji. I design tall buildings that sway in an earthquake instead of snapping. A big earthquake under the sea can cause a [[tsunami|tsunami]].',
          es: 'Japón está en el [[ring of fire|Cinturón de Fuego]]. Tiene muchos terremotos y volcanes, como el monte Fuji con su nieve. Yo diseño edificios altos que se mecen en un terremoto en vez de romperse. Un gran terremoto bajo el mar puede causar un [[tsunami|tsunami]].',
          fa: 'جاپان روی [[ring of fire|حلقهٔ آتش]] قرار دارد. زلزله و آتشفشان زیاد دارد، مثل کوه برفی فوجی. من تعمیرهای بلند را طوری طرح می‌کنم که در زلزله تاب بخورند، نه اینکه بشکنند. یک زلزلهٔ بزرگ زیر بحر می‌تواند [[tsunami|سونامی]] بسازد.',
          easy: { en: 'Japan has many earthquakes and volcanoes. Its tall buildings sway so they do not break.', es: 'Japón tiene muchos terremotos y volcanes. Sus edificios altos se mecen para no romperse.', fa: 'جاپان زلزله و آتشفشان زیاد دارد. تعمیرهای بلندش تاب می‌خورند تا نشکنند.' } }
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

  scraps: [[2, 8], [23, 1], [45, 17]],
  smudges: [[8, 3], [24, 13], [39, 13]],

  challenge: {
    at: [26, 8],
    type: 'sort',
    stat: 'pla',
    title: { en: 'China, Japan or both?', es: '¿China, Japón o los dos?', fa: 'چین، جاپان یا هر دو؟' },
    intro: { en: 'The Smudge tore the labels off the map. Put each card where it belongs: China, Japan, or both.',
      es: 'El Borrón arrancó las etiquetas del mapa. Pon cada tarjeta donde va: China, Japón o los dos.',
      fa: 'لکه نام‌ها را از نقشه کند. هر کارت را جای درستش بگذار: چین، جاپان یا هر دو.' },
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
    name: { en: 'The Silt Smudge', es: 'El Borrón de Lodo', fa: 'لکهٔ گِل' },
    appear: { en: 'The Silt Smudge is hiding on the south coast of the islands!', es: '¡El Borrón de Lodo se esconde en la costa sur de las islas!', fa: 'لکهٔ گِل در ساحل جنوبی جزیره‌ها پنهان است!' },
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
