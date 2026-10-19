/* WORLDWALKER · Episode 7.2 · Cities, Site and Situation (WG.10, WG.15)
   East Asia. Like mockup 06: a river runs from the north down to the sea through a plain of rice paddies.
   Three places could hold a new city: A · river mouth (south-east), B · hilltop (north-east), C · mountain pass (west).
   The land teaches: site = the ground itself; situation = what it connects to. */
window.EPISODE = {
  id: '7.2',
  realm: 7,
  sol: 'WG.10 · WG.15',
  title: { en: 'Cities, Site and Situation', es: 'Ciudades, sitio y situación', fa: 'شهرها، محل و موقعیت' },
  place: { en: 'The City on the River', es: 'La ciudad del río', fa: 'شهر کنار دریا' },
  intro: [
    { en: 'Christopher: "The Grump washed away the plans for a new city! The people need a good place to build. Talk to the road keeper at the pass, the rice farmer and the harbor pilot. Then climb the hill to the compass stone and choose a spot."',
      es: 'Christopher: "¡El Gruñón borró los planos de una ciudad nueva! La gente necesita un buen lugar para construir. Habla con el guardián del camino en el paso, la agricultora de arroz y el capitán del puerto. Luego sube la colina hasta la piedra de la brújula y elige un lugar."',
      fa: 'کریستوفر: «غرغرو نقشه‌های یک شهر نو را شست و برد! مردم به یک جای خوب برای ساختن ضرورت دارند. با نگهبان راه در کوتل، دهقان برنج و رهنمای بندر گپ بزن. بعد از تپه بالا برو تا سنگ قطب‌نما و یک جا را انتخاب کن.»' }
  ],

  map: [
    'AAMAAMATTTTTT~~TTTTTTTTTTTTTTTTT',
    'AMMAMMMRRwwww~~TTTKKKKKKKKKKKKKT',
    'MAMMAMMhdwwww~~TTTKK,,,,,,,,KKKT',
    'MMAMMAM.wwwww~~TTTKK,......,KKKT',
    'MrMMrMMM.....~~.T.KK,......,KKKT',
    'M::::::::::::bb:::KK,,,:x,,,KKKT',
    'Mr.:::....:..~~...KKKKK:KKKKKKKT',
    'MMrMMMMM..:x.~~...KKKKK:KKKKKKKT',
    'AMMAMMr...:..~~qqqqqqq..~~~~~~~~',
    'MMAMMMM.qq:q.~~qqqqqqq..~=======',
    'MAMMMMM.qq:q.~~qqqqqqq..~=======',
    'MMMAMMM.qq:q.~~.........~=======',
    'AMMMMAM...B..~~~~~~~~~~~~=======',
    'MMMMMMM...B..~~~~~~~~~~~~=======',
    'MMAMMM.qqq:qq......kkkss~=======',
    'MMMMM..qqq:qq.qqqqqRR.sskkk=====',
    'MMMM...qqq:qq.qqqqqhd.ss~=======',
    'MMM....qqq::::::::::::ss~=======',
    'MMM....qqqqqq.qqqqq..sss~=======',
    'MM.....qqqqqq.qqqqq..sss~=======',
    'MM...................sss~=======',
    'MTTTTTTTTTTTTTTTTTTTTTTT~======='
  ],
  start: [9, 7],

  words: {
    site: { en: 'the land a city sits on: flat or high, wet or dry, rich soil or rock', es: 'la tierra donde está una ciudad: plana o alta, húmeda o seca, suelo fértil o roca', fa: 'زمینی که شهر روی آن است: هموار یا بلند، تر یا خشک، خاک حاصلخیز یا سنگ' },
    situation: { en: 'what is around a city and how it connects: rivers, seas, roads and other cities', es: 'lo que rodea a una ciudad y cómo se conecta: ríos, mares, caminos y otras ciudades', fa: 'آنچه دور و بر یک شهر است و اینکه چطور وصل می‌شود: دریاها، بحرها، سرک‌ها و شهرهای دیگر' },
    hinterland: { en: 'the region around a city that depends on it and sends it goods, like farms and small towns', es: 'la zona alrededor de una ciudad que depende de ella y le manda productos, como granjas y pueblos', fa: 'ساحهٔ اطراف یک شهر که به آن وابسته است و برایش کالا می‌فرستد، مثل کشتزارها و قریه‌ها' },
    'river mouth': { en: 'the place where a river flows into the sea', es: 'el lugar donde un río llega al mar (la desembocadura)', fa: 'جایی که دریا به بحر می‌ریزد' },
    'mountain pass': { en: 'a low, narrow way through high mountains', es: 'un camino bajo y angosto entre montañas altas', fa: 'یک راه پست و باریک از میان کوه‌های بلند (کوتل)' },
    plain: { en: 'wide, flat, low land that is easy to farm and build on', es: 'tierra ancha, plana y baja, fácil de cultivar y de construir', fa: 'زمین پهن، هموار و پست که زراعت و ساختمان در آن آسان است' }
  },

  npcs: [
    {
      x: 4, y: 6,
      name: { en: 'Mr. Huang', es: 'Sr. Huang', fa: 'آقای هوانگ' },
      role: { en: 'Road keeper at the pass', es: 'Guardián del camino en el paso', fa: 'نگهبان راه در کوتل' },
      look: { skin: 1, hair: '#3a3a3a', shirt: '#7a4b2a', pants: '#3a3a3a' },
      lines: [
        { en: 'Welcome to the [[mountain pass|mountain pass]]! This is the only road between two valleys. Every trader must pass through here. That is this place\'s [[situation|situation]]: what it connects to.',
          es: '¡Bienvenido al [[mountain pass|paso de montaña]]! Este es el único camino entre dos valles. Todo comerciante debe pasar por aquí. Esa es la [[situation|situación]] de este lugar: con qué se conecta.',
          fa: 'به [[mountain pass|کوتل]] خوش آمدی! این تنها راه میان دو دره است. هر تاجر باید از اینجا بگذرد. این [[situation|موقعیت]] این جا است: اینکه به چه چیزها وصل است.',
          easy: { en: 'This pass is the only road between two valleys. That is its [[situation|situation]].', es: 'Este paso es el único camino entre dos valles. Esa es su [[situation|situación]].', fa: 'این کوتل تنها راه میان دو دره است. این [[situation|موقعیت]] آن است.' } },
        { en: 'Now look at the ground. Rocky, cold and narrow. Almost no farmland. That is its [[site|site]]: the land itself. Great situation, hard site!',
          es: 'Ahora mira el suelo. Rocoso, frío y angosto. Casi no hay tierra para cultivar. Ese es su [[site|sitio]]: la tierra misma. ¡Gran situación, sitio difícil!',
          fa: 'حالا به زمین ببین. سنگلاخ، سرد و باریک. تقریباً زمین زراعتی ندارد. این [[site|محل]] آن است: خود زمین. موقعیت عالی، محل سخت!',
          easy: { en: 'The ground is rocky and cold. That is its [[site|site]], the land itself.', es: 'El suelo es rocoso y frío. Ese es su [[site|sitio]], la tierra misma.', fa: 'زمین سنگلاخ و سرد است. این [[site|محل]] آن است، خود زمین.' } },
        { en: 'Here is a secret. These rocks will look the same in a thousand years. But a situation can change in ten. If someone digs a tunnel in another valley, the traders will stop coming here.',
          es: 'Te cuento un secreto. Estas rocas se verán igual en mil años. Pero una situación puede cambiar en diez. Si alguien cava un túnel en otro valle, los comerciantes dejarán de venir.',
          fa: 'یک راز بگویم. این سنگ‌ها تا هزار سال همین‌طور می‌مانند. اما موقعیت می‌تواند در ده سال تغییر کند. اگر کسی در درهٔ دیگر تونل بکند، تاجران دیگر اینجا نمی‌آیند.',
          easy: { en: 'Site barely changes. Situation can change fast, like when a new tunnel opens.', es: 'El sitio casi no cambia. La situación puede cambiar rápido, como cuando abren un túnel nuevo.', fa: 'محل تقریباً تغییر نمی‌کند. موقعیت می‌تواند زود تغییر کند، مثل وقتی یک تونل نو باز می‌شود.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'A new tunnel opens in another valley, and traders stop using this pass. What changed?', es: 'Abren un túnel nuevo en otro valle y los comerciantes dejan de usar este paso. ¿Qué cambió?', fa: 'یک تونل نو در درهٔ دیگر باز می‌شود و تاجران دیگر از این کوتل نمی‌گذرند. چه چیز تغییر کرد؟' },
        choices: [
          { ok: true, t: { en: 'The pass\'s situation', es: 'La situación del paso', fa: 'موقعیت کوتل' },
            why: { en: 'The pass now connects to less trade. Connections are situation.', es: 'El paso ahora se conecta con menos comercio. Las conexiones son la situación.', fa: 'کوتل حالا به تجارت کمتر وصل است. وصل بودن یعنی موقعیت.' } },
          { t: { en: 'The pass\'s site', es: 'El sitio del paso', fa: 'محل کوتل' },
            why: { en: 'The rocks and cliffs did not change at all. The site is the same.', es: 'Las rocas y los acantilados no cambiaron nada. El sitio es el mismo.', fa: 'سنگ‌ها و پرتگاه‌ها هیچ تغییر نکردند. محل همان است.' } },
          { t: { en: 'The height of the mountains', es: 'La altura de las montañas', fa: 'بلندی کوه‌ها' },
            why: { en: 'Mountains do not shrink because of a tunnel. The roads around them changed.', es: 'Las montañas no se encogen por un túnel. Cambiaron los caminos a su alrededor.', fa: 'کوه‌ها به خاطر یک تونل کوتاه نمی‌شوند. راه‌های اطراف تغییر کردند.' } }
        ]
      }
    },
    {
      x: 12, y: 16,
      name: { en: 'Mei', es: 'Mei', fa: 'مِی' },
      role: { en: 'Rice farmer', es: 'Agricultora de arroz', fa: 'دهقان برنج' },
      look: { skin: 1, hair: '#1b1b1b', shirt: '#c0392b', pants: '#2f3a5a' },
      lines: [
        { en: 'I grow rice on this flat [[plain|plain]]. Every year the river drops rich soil on my fields. Flat land, fresh water and rich soil make a strong [[site|site]] for a city.',
          es: 'Yo cultivo arroz en esta [[plain|llanura]] plana. Cada año el río deja tierra fértil en mis campos. La tierra plana, el agua dulce y el suelo fértil hacen un buen [[site|sitio]] para una ciudad.',
          fa: 'من در این [[plain|دشت هموار]] برنج می‌کارم. هر سال دریا خاک حاصلخیز را روی کشتزارهایم می‌گذارد. زمین هموار، آب شیرین و خاک حاصلخیز یک [[site|محل]] خوب برای شهر است.',
          easy: { en: 'Flat land, water and rich soil = a strong [[site|site]].', es: 'Tierra plana, agua y suelo fértil = un buen [[site|sitio]].', fa: 'زمین هموار، آب و خاک حاصلخیز = یک [[site|محل]] خوب.' } },
        { en: 'But in the rainy season, the river floods. Then the hilltop is the safe, dry place. Up there, though, you must carry water all the way up the hill.',
          es: 'Pero en la temporada de lluvias el río se desborda. Entonces la colina es el lugar seguro y seco. Aunque allá arriba hay que subir el agua cargando.',
          fa: 'اما در فصل باران، دریا سیلاب می‌شود. آن وقت سر تپه جای مصون و خشک است. اما آن بالا باید آب را تا سر تپه ببری.',
          easy: { en: 'The plain floods. The hill stays dry, but water is far away.', es: 'La llanura se inunda. La colina queda seca, pero el agua está lejos.', fa: 'دشت سیلاب می‌شود. تپه خشک می‌ماند، اما آب دور است.' } },
        { en: 'My rice goes to the town to be sold. The farms, villages and mines around a city that send it goods are its [[hinterland|hinterland]]. A big hinterland can help a city grow into a busy trade center.',
          es: 'Mi arroz va al pueblo para venderse. Las granjas, pueblos y minas alrededor de una ciudad que le mandan productos son su [[hinterland|hinterland]] o zona de influencia. Un hinterland grande puede ayudar a una ciudad a volverse un centro de comercio.',
          fa: 'برنج من برای فروش به شهر می‌رود. کشتزارها، قریه‌ها و معدن‌های اطراف یک شهر که برایش کالا می‌فرستند [[hinterland|پس‌کرانهٔ]] آن هستند. یک پس‌کرانهٔ بزرگ می‌تواند شهر را یک مرکز پرکار تجارت بسازد.',
          easy: { en: 'Farms around a city send it food. They are its [[hinterland|hinterland]].', es: 'Las granjas alrededor de una ciudad le mandan comida. Son su [[hinterland|hinterland]].', fa: 'کشتزارهای اطراف شهر برایش غذا می‌فرستند. آن‌ها [[hinterland|پس‌کرانهٔ]] شهر هستند.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is part of a city\'s SITE?', es: '¿Cuál es parte del SITIO de una ciudad?', fa: 'کدام یک بخشی از محل یک شهر است؟' },
        choices: [
          { ok: true, t: { en: 'Flat, rich soil that floods in the rainy season', es: 'Suelo plano y fértil que se inunda en la temporada de lluvias', fa: 'خاک هموار و حاصلخیز که در فصل باران سیلاب می‌شود' },
            why: { en: 'Soil, flatness and floods are about the land itself. That is site.', es: 'El suelo, lo plano y las inundaciones son de la tierra misma. Eso es el sitio.', fa: 'خاک، هموار بودن و سیلاب دربارهٔ خود زمین هستند. این محل است.' } },
          { t: { en: 'The road to the next valley', es: 'El camino al siguiente valle', fa: 'راهی که به درهٔ بعدی می‌رود' },
            why: { en: 'A road is a connection to other places. That is situation.', es: 'Un camino es una conexión con otros lugares. Eso es la situación.', fa: 'راه یک وصل به جاهای دیگر است. این موقعیت است.' } },
          { t: { en: 'Ships coming from ports across the sea', es: 'Barcos que llegan de puertos al otro lado del mar', fa: 'کشتی‌هایی که از بندرهای آن طرف بحر می‌آیند' },
            why: { en: 'Ships link the city to other places. That is situation.', es: 'Los barcos unen la ciudad con otros lugares. Eso es la situación.', fa: 'کشتی‌ها شهر را به جاهای دیگر وصل می‌کنند. این موقعیت است.' } }
        ]
      }
    },
    {
      x: 23, y: 16,
      name: { en: 'Captain Park', es: 'Capitán Park', fa: 'کپتان پارک' },
      role: { en: 'Harbor pilot', es: 'Piloto del puerto', fa: 'رهنمای بندر' },
      look: { skin: 1, hair: '#202020', shirt: '#1f4e8c', pants: '#22324f' },
      lines: [
        { en: 'I guide ships at the [[river mouth|river mouth]]. Here the river meets the sea. Boats go up the river to the farm towns. Ships sail out to ports across the sea. That is a great [[situation|situation]]!',
          es: 'Yo guío barcos en la [[river mouth|desembocadura]]. Aquí el río llega al mar. Los botes suben por el río a los pueblos agrícolas. Los barcos salen a puertos al otro lado del mar. ¡Esa es una gran [[situation|situación]]!',
          fa: 'من کشتی‌ها را در [[river mouth|دهانهٔ دریا]] رهنمایی می‌کنم. اینجا دریا به بحر می‌رسد. قایق‌ها از دریا بالا تا قریه‌های زراعتی می‌روند. کشتی‌ها به بندرهای آن طرف بحر می‌روند. این یک [[situation|موقعیت]] عالی است!',
          easy: { en: 'River + sea = boats inland and ships to other ports. A great [[situation|situation]].', es: 'Río + mar = botes tierra adentro y barcos a otros puertos. Una gran [[situation|situación]].', fa: 'دریا + بحر = قایق به داخل و کشتی به بندرهای دیگر. یک [[situation|موقعیت]] عالی.' } },
        { en: 'Many of the biggest cities in East Asia grew where a river meets the sea. Shanghai sits near the mouth of the Yangtze River. Rice and goods come down the river, and ships carry them away.',
          es: 'Muchas de las ciudades más grandes del este de Asia crecieron donde un río llega al mar. Shanghái está cerca de la desembocadura del río Yangtsé. El arroz y los productos bajan por el río y los barcos se los llevan.',
          fa: 'بسیاری از بزرگ‌ترین شهرهای شرق آسیا جایی رشد کردند که دریا به بحر می‌رسد. شانگهای نزدیک دهانهٔ دریای یانگتسی است. برنج و کالا از دریا پایین می‌آیند و کشتی‌ها آن‌ها را می‌برند.',
          easy: { en: 'Big East Asian cities like Shanghai grew where a river meets the sea.', es: 'Grandes ciudades del este de Asia, como Shanghái, crecieron donde un río llega al mar.', fa: 'شهرهای بزرگ شرق آسیا مثل شانگهای جایی رشد کردند که دریا به بحر می‌رسد.' } },
        { en: 'Alexandria, Virginia is like this too! Its site is deep water on the Potomac River. First it was a busy port. Today it is a city next to the nation\'s capital. The site stayed the same. The situation changed.',
          es: '¡Alexandria, Virginia, también es así! Su sitio es agua profunda en el río Potomac. Primero fue un puerto muy activo. Hoy es una ciudad junto a la capital del país. El sitio quedó igual. La situación cambió.',
          fa: 'الکساندریا، ویرجینیا هم همین‌طور است! محل آن آب عمیق در دریای پوتومک است. اول یک بندر پرکار بود. امروز شهری کنار پایتخت کشور است. محل همان ماند. موقعیت تغییر کرد.',
          easy: { en: 'Alexandria, Virginia: same site (deep river water), new situation (next to the capital).', es: 'Alexandria, Virginia: mismo sitio (agua profunda del río), nueva situación (junto a la capital).', fa: 'الکساندریا، ویرجینیا: همان محل (آب عمیق دریا)، موقعیت نو (کنار پایتخت).' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which one is part of a city\'s SITUATION?', es: '¿Cuál es parte de la SITUACIÓN de una ciudad?', fa: 'کدام یک بخشی از موقعیت یک شهر است؟' },
        choices: [
          { ok: true, t: { en: 'The river and sea routes that reach other ports', es: 'Las rutas de río y mar que llegan a otros puertos', fa: 'راه‌های دریا و بحر که به بندرهای دیگر می‌رسند' },
            why: { en: 'Routes connect the city to other places. That is situation.', es: 'Las rutas conectan la ciudad con otros lugares. Eso es la situación.', fa: 'راه‌ها شهر را به جاهای دیگر وصل می‌کنند. این موقعیت است.' } },
          { t: { en: 'The flat soil under the town', es: 'El suelo plano debajo del pueblo', fa: 'خاک هموار زیر شهر' },
            why: { en: 'Soil is the land itself. That is site.', es: 'El suelo es la tierra misma. Eso es el sitio.', fa: 'خاک خود زمین است. این محل است.' } },
          { t: { en: 'The hill the old fort was built on', es: 'La colina donde construyeron el viejo fuerte', fa: 'تپه‌ای که قلعهٔ کهنه روی آن ساخته شد' },
            why: { en: 'A hill is part of the ground. That is site.', es: 'Una colina es parte del suelo. Eso es el sitio.', fa: 'تپه بخشی از زمین است. این محل است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 7, text: { en: 'SURVEY POST · Three places for the new city: A · River mouth (south-east, where the river meets the sea) · B · Hilltop (north-east, up the path) · C · Mountain pass (west).',
      es: 'PUESTO DE ESTUDIO · Tres lugares para la ciudad nueva: A · Desembocadura (sureste, donde el río llega al mar) · B · Colina (noreste, subiendo el sendero) · C · Paso de montaña (oeste).',
      fa: 'پایگاه سروی · سه جا برای شهر نو: الف · دهانهٔ دریا (جنوب شرق، جایی که دریا به بحر می‌رسد) · ب · سر تپه (شمال شرق، از راه بالا برو) · ج · کوتل (غرب).' } },
    { x: 24, y: 5, text: { en: 'HILLTOP B · High and dry. You can see the whole plain, the river and the sea from here. But the water is far below.',
      es: 'COLINA B · Alta y seca. Desde aquí se ve toda la llanura, el río y el mar. Pero el agua está muy abajo.',
      fa: 'سر تپه ب · بلند و خشک. از اینجا تمام دشت، دریا و بحر دیده می‌شود. اما آب خیلی پایین است.' } }
  ],

  /* the quest: Ms. Park the city planner (gold !) -> Hana the kite flyer on the hilltop -> find the flag at the river mouth -> back to Ms. Park */
  quest: {
    stat: 'loc',
    title: { en: 'The Lost Planning Flag', es: 'La bandera perdida del plan', fa: 'بیرق گم‌شدهٔ نقشه' },
    giver: {
      x: 5, y: 17,
      name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      role: { en: 'City planner', es: 'Planificadora de la ciudad', fa: 'طراح شهر' },
      look: { skin: 1, hair: '#1a1410', shirt: '#c0392b', pants: '#2f3b4a', style: 'short' },
      lines: [
        { en: 'Oh no! The Grump\'s wind took my red flag. I put it on my favorite spot for the new city. Now I cannot find it!',
          es: '¡Ay, no! El viento del Gruñón se llevó mi bandera roja. La puse en mi lugar favorito para la ciudad nueva. ¡Ahora no la encuentro!',
          fa: 'وای نه! باد غرغرو بیرق سرخم را برد. آن را در جای دلخواهم برای شهر نو گذاشته بودم. حالا پیدایش نمی‌کنم!' },
        { en: 'Hana flies her kite on the hilltop in the north-east. From up there she sees everything. Will you ask her?',
          es: 'Hana vuela su cometa en la colina del noreste. Desde allá arriba lo ve todo. ¿Le preguntas?',
          fa: 'هانا در بالای تپه در شمال شرق گُدی‌پران بازی می‌کند. از آن بالا همه چیز را می‌بیند. از او می‌پرسی؟' }
      ],
      wait: { en: 'Hana is on the hilltop. Walk north to the road. Cross the bridge to the east. Then climb the path up the hill.',
        es: 'Hana está en la colina. Camina al norte hasta el camino. Cruza el puente hacia el este. Luego sube por el sendero de la colina.',
        fa: 'هانا بالای تپه است. به طرف شمال تا سرک برو. از پل به طرف شرق بگذر. بعد از راه باریک بالای تپه برو.' },
      thanks: { en: 'My flag! The [[river mouth|river mouth]] links the river and the sea, so boats can reach the whole world. That is a great [[situation|situation]] for a city. Thank you!',
        es: '¡Mi bandera! La [[river mouth|desembocadura]] une el río y el mar, así que los barcos llegan a todo el mundo. Esa es una gran [[situation|situación]] para una ciudad. ¡Gracias!',
        fa: 'بیرق من! [[river mouth|دهانهٔ دریا]] دریا و بحر را به هم وصل می‌کند، پس کشتی‌ها به تمام دنیا می‌رسند. این یک [[situation|موقعیت]] عالی برای یک شهر است. تشکر!' }
    },
    contact: {
      x: 21, y: 4,
      name: { en: 'Hana', es: 'Hana', fa: 'هانا' },
      role: { en: 'Kite flyer', es: 'Niña de la cometa', fa: 'گُدی‌پران‌باز' },
      look: { skin: 2, hair: '#2a1d14', shirt: '#f2c94c', pants: '#3b5b8a', style: 'long' },
      lines: [
        { en: 'Yes! From this high hill I can see the whole [[plain|plain]]. I saw a red flag fly down the river toward the sea.',
          es: '¡Sí! Desde esta colina alta veo toda la [[plain|llanura]]. Vi una bandera roja volar río abajo hacia el mar.',
          fa: 'بله! از این تپهٔ بلند تمام [[plain|دشت هموار]] را می‌بینم. دیدم یک بیرق سرخ در امتداد دریا به طرف بحر پرید.' },
        { en: 'It landed at the [[river mouth|river mouth]], where the river meets the sea. Walk south along the beach to the very last sand, right next to the sea.',
          es: 'Cayó en la [[river mouth|desembocadura]], donde el río llega al mar. Camina al sur por la playa hasta la última arena, justo al lado del mar.',
          fa: 'در [[river mouth|دهانهٔ دریا]] افتاد، جایی که دریا به بحر می‌رسد. در کنار ساحل به طرف جنوب تا آخرین ریگ برو، درست کنار بحر.' }
      ]
    },
    action: {
      type: 'find',
      at: [23, 20],
      hint: { en: 'south end of the beach, next to the sea', es: 'el extremo sur de la playa, junto al mar', fa: 'آخر جنوبی ساحل، کنار بحر' },
      found: { en: 'There it is, flapping in the sand! You are at the [[river mouth|river mouth]]. The river and the sea both meet here.',
        es: '¡Ahí está, ondeando en la arena! Estás en la [[river mouth|desembocadura]]. Aquí se juntan el río y el mar.',
        fa: 'آنجاست، در ریگ‌ها تکان می‌خورد! تو در [[river mouth|دهانهٔ دریا]] هستی. دریا و بحر هر دو اینجا به هم می‌رسند.' },
      item: { icon: '🚩', name: { en: "Ms. Park's planning flag", es: 'La bandera del plan de la Sra. Park', fa: 'بیرق نقشهٔ خانم پارک' } }
    }
  },

  scraps: [[7, 3], [27, 2], [2, 20]],
  smudges: [[17, 9], [16, 18], [8, 16]],

  challenge: {
    at: [23, 3],
    type: 'claim',
    stat: 'loc',
    title: { en: 'Found a city', es: 'Funda una ciudad', fa: 'یک شهر بنا کن' },
    intro: { en: 'Where should the new city go? Pick A, B or C. Then back up your choice with one [[site|SITE]] reason (the land) and one [[situation|SITUATION]] reason (what it connects to). More than one place can work if your reasons fit.',
      es: '¿Dónde debe ir la ciudad nueva? Elige A, B o C. Luego defiende tu elección con una razón de [[site|SITIO]] (la tierra) y una razón de [[situation|SITUACIÓN]] (con qué se conecta). Más de un lugar puede servir si tus razones encajan.',
      fa: 'شهر نو کجا باشد؟ الف، ب یا ج را انتخاب کن. بعد انتخابت را با یک دلیل [[site|محل]] (زمین) و یک دلیل [[situation|موقعیت]] (به چه وصل است) ثابت کن. اگر دلیل‌هایت درست باشند، بیشتر از یک جا می‌تواند خوب باشد.' },
    options: [
      { icon: '🌊', name: { en: 'A · River mouth', es: 'A · Desembocadura', fa: 'الف · دهانهٔ دریا' },
        desc: { en: 'Flat, rich soil. Fresh water. Floods in the rainy season. Where the river meets the sea.', es: 'Plana, suelo fértil. Agua dulce. Se inunda en la temporada de lluvias. Donde el río llega al mar.', fa: 'هموار، خاک حاصلخیز. آب شیرین. در فصل باران سیلاب می‌آید. جایی که دریا به بحر می‌رسد.' },
        result: { en: 'Your city grows into a busy port. Boats bring rice down the river, and ships sail to other ports. You build strong banks to hold back the floods.', es: 'Tu ciudad se vuelve un puerto muy activo. Los botes bajan arroz por el río y los barcos van a otros puertos. Construyes orillas fuertes contra las inundaciones.', fa: 'شهر تو یک بندر پرکار می‌شود. قایق‌ها برنج را از دریا پایین می‌آورند و کشتی‌ها به بندرهای دیگر می‌روند. تو برای جلوگیری از سیلاب کنارهای محکم می‌سازی.' } },
      { icon: '⛰️', name: { en: 'B · Hilltop', es: 'B · Colina', fa: 'ب · سر تپه' },
        desc: { en: 'High and dry. Safe from floods. Looks over the farms on the plain. Far from the sea and the river.', es: 'Alta y seca. A salvo de inundaciones. Mira sobre las granjas de la llanura. Lejos del mar y del río.', fa: 'بلند و خشک. از سیلاب مصون. بر کشتزارهای دشت دید دارد. از بحر و دریا دور است.' },
        result: { en: 'Your city stays safe and dry, and guards can see far. It grows slowly, because water and goods must be carried up the hill.', es: 'Tu ciudad queda segura y seca, y los guardias ven lejos. Crece despacio, porque hay que subir el agua y los productos por la colina.', fa: 'شهر تو مصون و خشک می‌ماند و نگهبانان دور را می‌بینند. آهسته رشد می‌کند، چون آب و کالا را باید از تپه بالا برد.' } },
      { icon: '🏔️', name: { en: 'C · Mountain pass', es: 'C · Paso de montaña', fa: 'ج · کوتل' },
        desc: { en: 'Narrow, rocky, cold. Very little farmland. Controls the only road between two valleys.', es: 'Angosto, rocoso, frío. Muy poca tierra para cultivar. Controla el único camino entre dos valles.', fa: 'باریک، سنگلاخ، سرد. زمین زراعتی بسیار کم. تنها راه میان دو دره را در دست دارد.' },
        result: { en: 'Every trader stops in your city on the way through. But food must come from far away, so your city stays small.', es: 'Todo comerciante para en tu ciudad al pasar. Pero la comida tiene que venir de lejos, así que tu ciudad sigue pequeña.', fa: 'هر تاجر در راه از شهر تو می‌گذرد و توقف می‌کند. اما غذا باید از دور بیاید، پس شهر تو کوچک می‌ماند.' } }
    ],
    kinds: [
      { id: 'site', label: { en: 'SITE reason · the land itself', es: 'Razón de SITIO · la tierra misma', fa: 'دلیل محل · خود زمین' } },
      { id: 'situation', label: { en: 'SITUATION reason · what it connects to', es: 'Razón de SITUACIÓN · con qué se conecta', fa: 'دلیل موقعیت · به چه وصل است' } }
    ],
    reasons: [
      { kind: 'site', fits: [0], t: { en: 'The soil is flat and rich, and fresh water is right there.', es: 'El suelo es plano y fértil, y hay agua dulce ahí mismo.', fa: 'خاک هموار و حاصلخیز است و آب شیرین همان‌جاست.' },
        why: { en: 'Only the river mouth has flat, rich soil next to fresh water.', es: 'Solo la desembocadura tiene suelo plano y fértil junto al agua dulce.', fa: 'فقط دهانهٔ دریا خاک هموار و حاصلخیز کنار آب شیرین دارد.' } },
      { kind: 'site', fits: [1], t: { en: 'The land is high and dry, so floods cannot reach it.', es: 'La tierra es alta y seca, así que las inundaciones no llegan.', fa: 'زمین بلند و خشک است، پس سیلاب به آن نمی‌رسد.' },
        why: { en: 'Only the hilltop is high above the floods.', es: 'Solo la colina está por encima de las inundaciones.', fa: 'فقط سر تپه بالاتر از سیلاب است.' } },
      { kind: 'site', fits: [2], t: { en: 'Narrow rock walls on both sides make it easy to guard.', es: 'Las paredes de roca angostas a los dos lados hacen fácil vigilarlo.', fa: 'دیوارهای سنگی باریک در دو طرف، نگهبانی را آسان می‌کنند.' },
        why: { en: 'Narrow rock walls are found at the pass, not on the plain or the round hill.', es: 'Las paredes de roca angostas están en el paso, no en la llanura ni en la colina.', fa: 'دیوارهای سنگی باریک در کوتل هستند، نه در دشت یا تپهٔ گرد.' } },
      { kind: 'site', fits: [], t: { en: 'Many roads and boats meet here.', es: 'Aquí se juntan muchos caminos y botes.', fa: 'راه‌ها و قایق‌های زیاد اینجا به هم می‌رسند.' },
        why: { en: 'Roads and boats are connections. That is situation, not site.', es: 'Los caminos y los botes son conexiones. Eso es situación, no sitio.', fa: 'راه‌ها و قایق‌ها وصل‌کننده هستند. این موقعیت است، نه محل.' } },
      { kind: 'situation', fits: [0], t: { en: 'Boats can go up the river, and ships can sail to other ports.', es: 'Los botes pueden subir por el río y los barcos pueden ir a otros puertos.', fa: 'قایق‌ها می‌توانند از دریا بالا بروند و کشتی‌ها به بندرهای دیگر بروند.' },
        why: { en: 'Only the river mouth touches both the river and the sea.', es: 'Solo la desembocadura toca el río y el mar a la vez.', fa: 'فقط دهانهٔ دریا هم به دریا و هم به بحر وصل است.' } },
      { kind: 'situation', fits: [1], t: { en: 'It looks over the farms of the plain, close to the people it protects.', es: 'Mira sobre las granjas de la llanura, cerca de la gente que protege.', fa: 'بر کشتزارهای دشت دید دارد، نزدیک مردمی که از آن‌ها نگهبانی می‌کند.' },
        why: { en: 'Only the hilltop looks over the whole plain.', es: 'Solo la colina mira sobre toda la llanura.', fa: 'فقط سر تپه بر تمام دشت دید دارد.' } },
      { kind: 'situation', fits: [2], t: { en: 'Every trader between the two valleys must pass through.', es: 'Todo comerciante entre los dos valles tiene que pasar por aquí.', fa: 'هر تاجر میان دو دره باید از اینجا بگذرد.' },
        why: { en: 'Only the pass controls the road between the valleys.', es: 'Solo el paso controla el camino entre los valles.', fa: 'فقط کوتل راه میان دره‌ها را در دست دارد.' } },
      { kind: 'situation', fits: [], t: { en: 'It is far from every road, river and town.', es: 'Está lejos de todo camino, río y pueblo.', fa: 'از هر راه، دریا و شهر دور است.' },
        why: { en: 'Being far from everything is a weak situation. It does not help a city grow.', es: 'Estar lejos de todo es una situación débil. No ayuda a crecer a una ciudad.', fa: 'دور بودن از همه چیز یک موقعیت ضعیف است. به رشد شهر کمک نمی‌کند.' } }
    ],
    mismatch: { en: 'That reason does not fit the place you chose. Read the place again.', es: 'Esa razón no encaja con el lugar que elegiste. Lee otra vez sobre el lugar.', fa: 'آن دلیل با جایی که انتخاب کردی جور نمی‌آید. دوباره دربارهٔ آن جا بخوان.' },
    success: { en: 'The city has a home, and you can explain why!', es: '¡La ciudad tiene un hogar, y puedes explicar por qué!', fa: 'شهر جای خود را پیدا کرد، و تو می‌توانی بگویی چرا!' }
  },

  boss: {
    at: [26, 15],
    stat: 'mov',
    need: 3,
    name: { en: 'The Flood Grump', es: 'El Gruñón de la Inundación', fa: 'غرغروی سیلاب' },
    appear: { en: 'The Flood Grump is rising at the end of the harbor pier!', es: '¡El Gruñón de la Inundación sube al final del muelle del puerto!', fa: 'غرغروی سیلاب در آخر اسکلهٔ بندر بالا می‌آید!' },
    taunt: { en: 'Splash! I will wash away every city plan. Site, situation, who cares?', es: '¡Splash! Voy a borrar todos los planos de ciudades. ¿Sitio, situación? ¿A quién le importa?', fa: 'شلپ! همهٔ نقشه‌های شهر را می‌شویم. محل، موقعیت، کی پروا دارد؟' },
    win: { en: 'The water goes back into the river. Atlas page 7.2 floats into your hands!', es: 'El agua vuelve al río. ¡La página 7.2 del atlas cae en tus manos!', fa: 'آب دوباره به دریا برمی‌گردد. صفحهٔ ۷.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What does site mean?', es: '¿Qué significa sitio?', fa: 'محل یعنی چه؟' },
        choices: [{ en: 'The physical ground a city was built on', es: 'El suelo donde se construyó una ciudad', fa: 'زمینی که شهر روی آن ساخته شده' }, { en: 'The other cities a place can reach', es: 'Las otras ciudades a las que se puede llegar', fa: 'شهرهای دیگری که از یک جا می‌شود رسید' }, { en: 'The number of people in a city', es: 'El número de personas de una ciudad', fa: 'تعداد مردم یک شهر' }, { en: 'The main job most people do', es: 'El trabajo principal de la mayoría', fa: 'کار اصلی بیشتر مردم' }], answer: 0,
        why: { en: 'Site is the land itself: a harbor, a hill, a river crossing.', es: 'El sitio es la tierra misma: un puerto natural, una colina, un cruce de río.', fa: 'محل خود زمین است: یک بندر، یک تپه، یک گذرگاه دریا.' } },
      { q: { en: 'Which of these is part of a city\'s situation?', es: '¿Cuál de estos es parte de la situación de una ciudad?', fa: 'کدام یک بخشی از موقعیت یک شهر است؟' },
        choices: [{ en: 'The rail line that reaches other cities', es: 'La línea de tren que llega a otras ciudades', fa: 'خط ریل که به شهرهای دیگر می‌رسد' }, { en: 'The hill the old fort was built on', es: 'La colina del viejo fuerte', fa: 'تپه‌ای که قلعهٔ کهنه روی آن است' }, { en: 'The deep water next to the docks', es: 'El agua profunda junto a los muelles', fa: 'آب عمیق کنار اسکله‌ها' }, { en: 'The flat dry land above the flood line', es: 'La tierra plana y seca sobre la línea de inundación', fa: 'زمین هموار و خشک بالاتر از خط سیلاب' }], answer: 0,
        why: { en: 'A rail line connects the city to other places. The other three are the ground itself.', es: 'Una línea de tren conecta la ciudad con otros lugares. Las otras tres son el suelo mismo.', fa: 'خط ریل شهر را به جاهای دیگر وصل می‌کند. سه تای دیگر خود زمین هستند.' } },
      { q: { en: 'What is a hinterland?', es: '¿Qué es un hinterland?', fa: 'پس‌کرانه چیست؟' },
        choices: [{ en: 'The region around a city that depends on it and sends it goods', es: 'La zona alrededor de una ciudad que depende de ella y le manda productos', fa: 'ساحهٔ اطراف شهر که به آن وابسته است و برایش کالا می‌فرستد' }, { en: 'The oldest part of downtown', es: 'La parte más vieja del centro', fa: 'کهنه‌ترین بخش مرکز شهر' }, { en: 'The border between two cities', es: 'La frontera entre dos ciudades', fa: 'سرحد میان دو شهر' }, { en: 'Land the city plans to build on next', es: 'La tierra donde la ciudad piensa construir después', fa: 'زمینی که شهر می‌خواهد بعداً رویش بسازد' }], answer: 0,
        why: { en: 'Farms, mines and small towns in the hinterland send goods to the city.', es: 'Las granjas, minas y pueblos del hinterland mandan productos a la ciudad.', fa: 'کشتزارها، معدن‌ها و قریه‌های پس‌کرانه به شهر کالا می‌فرستند.' } },
      { q: { en: 'A city has a very large hinterland. What often happens to it?', es: 'Una ciudad tiene un hinterland muy grande. ¿Qué le pasa muchas veces?', fa: 'یک شهر پس‌کرانهٔ بسیار بزرگ دارد. اکثراً چه می‌شود؟' },
        choices: [{ en: 'It grows into a busy trade center', es: 'Se vuelve un centro de comercio muy activo', fa: 'یک مرکز پرکار تجارت می‌شود' }, { en: 'It shrinks into a quiet village', es: 'Se encoge hasta ser un pueblo tranquilo', fa: 'کوچک شده یک قریهٔ آرام می‌شود' }, { en: 'Its site moves to new land', es: 'Su sitio se mueve a otra tierra', fa: 'محلش به زمین نو می‌رود' }, { en: 'It stops trading with anyone', es: 'Deja de comerciar con todos', fa: 'با هیچ‌کس تجارت نمی‌کند' }], answer: 0,
        why: { en: 'More farms and towns sending goods means more trade passing through the city.', es: 'Más granjas y pueblos mandando productos significa más comercio pasando por la ciudad.', fa: 'کشتزار و قریهٔ بیشتر که کالا می‌فرستند یعنی تجارت بیشتر از شهر می‌گذرد.' } },
      { q: { en: 'What is the site of Alexandria, Virginia?', es: '¿Cuál es el sitio de Alexandria, Virginia?', fa: 'محل الکساندریا، ویرجینیا چیست؟' },
        choices: [{ en: 'A deep-water spot on the Potomac River', es: 'Un lugar de agua profunda en el río Potomac', fa: 'یک جای آب عمیق در دریای پوتومک' }, { en: 'A dry plain far above a flood line', es: 'Una llanura seca muy por encima de la línea de inundación', fa: 'یک دشت خشک خیلی بالاتر از خط سیلاب' }, { en: 'A crossing between two large lakes', es: 'Un cruce entre dos lagos grandes', fa: 'یک گذرگاه میان دو جهیل بزرگ' }, { en: 'A hilltop above a mountain pass', es: 'Una colina sobre un paso de montaña', fa: 'سر یک تپه بالای کوتل' }], answer: 0,
        why: { en: 'Deep water let large ships reach Alexandria\'s docks directly.', es: 'El agua profunda dejaba que los barcos grandes llegaran directo a los muelles de Alexandria.', fa: 'آب عمیق به کشتی‌های بزرگ اجازه می‌داد مستقیم به اسکله‌های الکساندریا برسند.' } },
      { q: { en: 'Alexandria\'s ground never moved, but its jobs changed from shipping flour to government and services. What changed?', es: 'El suelo de Alexandria nunca se movió, pero sus trabajos cambiaron de enviar harina a gobierno y servicios. ¿Qué cambió?', fa: 'زمین الکساندریا هرگز تغییر نکرد، اما کارهایش از صادر کردن آرد به کار دولتی و خدمات تغییر کرد. چه چیز تغییر کرد؟' },
        choices: [{ en: 'Its situation', es: 'Su situación', fa: 'موقعیتش' }, { en: 'Its site', es: 'Su sitio', fa: 'محلش' }, { en: 'The depth of its river', es: 'La profundidad de su río', fa: 'عمق دریایش' }, { en: 'The soil in its hinterland', es: 'El suelo de su hinterland', fa: 'خاک پس‌کرانه‌اش' }], answer: 0,
        why: { en: 'Being next to the nation\'s capital is about connections. That is situation.', es: 'Estar junto a la capital del país tiene que ver con conexiones. Eso es la situación.', fa: 'کنار پایتخت بودن دربارهٔ وصل‌ها است. این موقعیت است.' } },
      { q: { en: 'A new highway reaches a quiet town, and the town fills up with people. What changed?', es: 'Una carretera nueva llega a un pueblo tranquilo y el pueblo se llena de gente. ¿Qué cambió?', fa: 'یک شاهراه نو به یک شهرک آرام می‌رسد و شهرک پر از مردم می‌شود. چه چیز تغییر کرد؟' },
        choices: [{ en: 'The town\'s situation', es: 'La situación del pueblo', fa: 'موقعیت شهرک' }, { en: 'The town\'s site', es: 'El sitio del pueblo', fa: 'محل شهرک' }, { en: 'The town\'s flood line', es: 'La línea de inundación del pueblo', fa: 'خط سیلاب شهرک' }, { en: 'The town\'s hinterland disappeared', es: 'El hinterland del pueblo desapareció', fa: 'پس‌کرانهٔ شهرک از بین رفت' }], answer: 0,
        why: { en: 'A highway is a new connection. The ground under the town is the same.', es: 'Una carretera es una conexión nueva. El suelo del pueblo es el mismo.', fa: 'شاهراه یک وصل نو است. زمین زیر شهرک همان است.' } },
      { q: { en: 'Many towns started as a fort, then became a market town, then a factory town. Why does a town\'s job keep changing?', es: 'Muchos pueblos empezaron como fuerte, luego fueron pueblo de mercado y luego pueblo de fábricas. ¿Por qué cambia el trabajo de un pueblo?', fa: 'بسیاری از شهرک‌ها اول قلعه بودند، بعد شهرک بازار، بعد شهرک فابریکه شدند. چرا کار یک شهرک تغییر می‌کند؟' },
        choices: [{ en: 'Its situation changes, so its work changes too', es: 'Su situación cambia, así que su trabajo también', fa: 'موقعیتش تغییر می‌کند، پس کارش هم تغییر می‌کند' }, { en: 'The ground under the town keeps shifting', es: 'El suelo debajo del pueblo se sigue moviendo', fa: 'زمین زیر شهرک همیشه حرکت می‌کند' }, { en: 'Every fort must become a factory', es: 'Todo fuerte debe volverse fábrica', fa: 'هر قلعه باید فابریکه شود' }, { en: 'Towns must change their name every 100 years', es: 'Los pueblos deben cambiar de nombre cada 100 años', fa: 'شهرک‌ها باید هر ۱۰۰ سال نام خود را تغییر دهند' }], answer: 0,
        why: { en: 'New roads, markets and factories change what a town connects to, and the jobs follow.', es: 'Los caminos, mercados y fábricas nuevos cambian con qué se conecta un pueblo, y los trabajos cambian también.', fa: 'راه‌ها، بازارها و فابریکه‌های نو تغییر می‌دهند که شهرک به چه وصل است، و کارها هم تغییر می‌کنند.' } }
    ]
  },

  learned: [
    { en: '[[site|Site]] is the land a city sits on: flat or high, wet or dry, rich soil or rock.', es: 'El [[site|sitio]] es la tierra donde está una ciudad: plana o alta, húmeda o seca, suelo fértil o roca.', fa: '[[site|محل]] زمینی است که شهر روی آن است: هموار یا بلند، تر یا خشک، خاک حاصلخیز یا سنگ.' },
    { en: '[[situation|Situation]] is what is around a city and how it connects: rivers, seas, roads and its [[hinterland|hinterland]]. Many big East Asian cities grew where a river meets the sea.', es: 'La [[situation|situación]] es lo que rodea a una ciudad y cómo se conecta: ríos, mares, caminos y su [[hinterland|hinterland]]. Muchas grandes ciudades del este de Asia crecieron donde un río llega al mar.', fa: '[[situation|موقعیت]] آن چیزی است که دور و بر شهر است و اینکه چطور وصل می‌شود: دریاها، بحرها، راه‌ها و [[hinterland|پس‌کرانهٔ]] آن. بسیاری از شهرهای بزرگ شرق آسیا جایی رشد کردند که دریا به بحر می‌رسد.' },
    { en: 'A site barely changes, but a situation can change fast. Alexandria, Virginia kept its river site but went from a busy port to a city next to the capital.', es: 'El sitio casi no cambia, pero la situación puede cambiar rápido. Alexandria, Virginia, mantuvo su sitio en el río, pero pasó de ser un puerto activo a una ciudad junto a la capital.', fa: 'محل تقریباً تغییر نمی‌کند، اما موقعیت می‌تواند زود تغییر کند. الکساندریا، ویرجینیا محل کنار دریای خود را نگه داشت، اما از یک بندر پرکار به شهری کنار پایتخت تبدیل شد.' }
  ],
  reflect: {
    q: { en: 'Think about Alexandria or another town you know well. Name one thing about its site and one thing about its situation.', es: 'Piensa en Alexandria o en otro pueblo que conozcas bien. Nombra una cosa de su sitio y una cosa de su situación.', fa: 'به الکساندریا یا یک شهر دیگری که خوب می‌شناسی فکر کن. یک چیز دربارهٔ محل آن و یک چیز دربارهٔ موقعیت آن بگو.' },
    starter: { en: 'The site of my town is', es: 'El sitio de mi pueblo es', fa: 'محل شهر من' }
  }
};
