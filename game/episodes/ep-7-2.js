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
    { en: 'The Grump washed away the new city\'s plans! Help the people find a good place.', es: '¡El Gruñón borró los planos de la ciudad nueva! Ayuda a la gente a encontrar un buen lugar.', fa: 'غرغرو نقشه‌های شهر نو را شست و برد! به مردم کمک کن یک جای خوب پیدا کنند.' },
    { en: 'Meet the road keeper, rice farmer and harbor pilot. Then climb to the compass stone.', es: 'Habla con el guardián del camino, la agricultora de arroz y el capitán del puerto. Luego sube a la piedra de la brújula.', fa: 'با نگهبان راه، دهقان برنج و رهنمای بندر گپ بزن. بعد تا سنگ قطب‌نما بالا برو.' }
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
    'AMMMMAM...B..~s~~~~~~~~~~=======',
    'MMMMMMM...B..~~~~~~~~~~~~=======',
    'MMAMMM.qqq:qq......kkkss~=======',
    'MMMMM..qqq:qq.qqqqqRR.sskkk=====',
    'MMMM...qqq:qq.qqqqqhd.ss~=======',
    'MMM....qqq::::::::::::ss~=======',
    'MMM....qFFGFF.qqqqq..sss~=======',
    'MM.....qF.|.F.qqqqq..sss~=======',
    'MM......F.|.F........sss~=======',
    'MTTTTTTTTTTTTTTTTTTTTTTT~======='
  ],
  start: [9, 7],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): the new city's houses on the best site, at the river mouth by the harbor (site + situation) */
  build: [
    { id: 'city', kind: 'place', board: [18, 20], tile: 'h', ok: [[19, 18, 'R'], [20, 18, 'R'], [21, 18, 'R'], [19, 19, 'h'], [20, 19, 'd'], [21, 19, 'h']], cost: { wood: 1 },
      name: { en: 'The new city', es: 'La ciudad nueva', fa: 'شهر نو' },
      ask: { en: 'A big city needs a good [[site|site]] (flat land and fresh water) and a good [[situation|situation]] (a river and the sea to trade on). Build the first houses at the [[river mouth|river mouth]], by the harbor, just south of the road.',
        es: 'Una ciudad grande necesita un buen [[site|sitio]] (tierra plana y agua dulce) y una buena [[situation|situación]] (un río y el mar para comerciar). Construye las primeras casas en la [[river mouth|desembocadura]], junto al puerto, justo al sur del camino.',
        fa: 'یک شهر بزرگ به [[site|محل]] خوب (زمین هموار و آب شیرین) و [[situation|موقعیت]] خوب (دریا و بحر برای تجارت) ضرورت دارد. اولین خانه‌ها را در [[river mouth|دهانهٔ دریا]]، کنار بندر، درست جنوبِ سرک بساز.' },
      why: { en: 'Flat land by the river and the harbor. A good site and a good situation!', es: '¡Tierra plana junto al río y al puerto! Un buen sitio y una buena situación.', fa: 'زمین هموار کنار دریا و بندر. محل خوب و موقعیت خوب!' },
      wrong: { en: 'Not here. The houses go on the flat land at the river mouth, by the harbor, just south of the road.', es: 'Aquí no. Las casas van en la tierra plana de la desembocadura, junto al puerto, justo al sur del camino.', fa: 'این جا نه. خانه‌ها در زمین هموار دهانهٔ دریا، کنار بندر، درست جنوبِ سرک می‌روند.' },
      wrongBy: [
        { x: 20, y: 2, w: 8, h: 4, t: { en: 'The hilltop is safe from floods, but it is far from water. People must carry water and goods up the hill, so the city grows slowly.', es: 'La colina está a salvo de inundaciones, pero lejos del agua. Hay que subir el agua y los productos, así que la ciudad crece despacio.', fa: 'سر تپه از سیلاب مصون است، اما از آب دور است. مردم باید آب و کالا را بالا ببرند، پس شهر آهسته رشد می‌کند.' } },
        { x: 1, y: 4, w: 12, h: 4, t: { en: 'The mountain pass is narrow, rocky and cold. There is very little farmland to feed a big city.', es: 'El paso de montaña es angosto, rocoso y frío. Hay muy poca tierra para cultivar y alimentar una ciudad grande.', fa: 'کوتل باریک، سنگلاخ و سرد است. زمین زراعتی بسیار کم است که غذای یک شهر بزرگ را بدهد.' } },
        { x: 15, y: 8, w: 7, h: 3, t: { en: 'Keep the rice paddies! These farms feed the city. Build the houses by the harbor instead.', es: '¡No toques los arrozales! Estas granjas alimentan a la ciudad. Construye las casas junto al puerto.', fa: 'شالیزارها را نگه دار! این زمین‌ها غذای شهر را می‌دهند. خانه‌ها را کنار بندر بساز.' } }
      ],
      done: { en: 'The city stands at the river mouth! Its site is flat land with fresh water. Its situation is great: boats bring rice down the river, and ships sail to other ports. That is why big cities like Shanghai grow where a river meets the sea.',
        es: '¡La ciudad está en la desembocadura! Su sitio es tierra plana con agua dulce. Su situación es muy buena: los botes bajan arroz por el río y los barcos van a otros puertos. Por eso las ciudades grandes como Shanghái crecen donde un río llega al mar.',
        fa: 'شهر در دهانهٔ دریا ایستاده است! محل آن زمین هموار با آب شیرین است. موقعیت آن عالی است: قایق‌ها برنج را از دریا پایین می‌آورند و کشتی‌ها به بندرهای دیگر می‌روند. به همین خاطر شهرهای بزرگ مثل شانگهای در جایی رشد می‌کنند که دریا به بحر می‌رسد.' } }
  ],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 4], at: [19, 14], decor: 'feather',
      clue: { en: 'Find the river dock just north of the red-roofed house, not the sea dock. Stand on its western end.', es: 'Busca el muelle del río justo al norte de la casa de techo rojo, no el del mar. Párate en su punta oeste.', fa: 'اسکلهٔ دریا را درست شمالِ خانهٔ بام‌سرخ پیدا کن، نه اسکلهٔ بحر. روی سر غربی آن بایست.' },
      text: { en: 'You found the river dock and a feather! Many cities grew by rivers, because boats make trade easy.', es: '¡Encontraste el muelle del río y una pluma! Muchas ciudades crecieron junto a ríos, porque los botes facilitan el comercio.', fa: 'تو اسکلهٔ دریا و یک پر را پیدا کردی! بسیاری از شهرها کنار دریاها رشد کردند، چون کشتی تجارت را آسان می‌کند.' } },
    { clueAt: [6, 20], at: [13, 19], decor: 'flower',
      clue: { en: 'From this note, walk 7 steps east, then 1 step north. Something is hidden there.', es: 'Desde esta nota, camina 7 pasos al este y luego 1 paso al norte. Algo está escondido allí.', fa: 'از این یادداشت، ۷ قدم به شرق برو، بعد ۱ قدم به شمال. چیزی آن جا پنهان است.' },
      text: { en: 'A flower grew in the rice paddies! Flat land by a river is a good site for farms.', es: '¡Una flor creció en los arrozales! La tierra plana junto a un río es un buen sitio para granjas.', fa: 'یک گل در شالی‌زارها روییده بود! زمین هموار کنار دریا جای خوبی برای کشتزار است.' } }
  ],
  // only the Rail Pass (Episode 3.3) lifts the barrier where the freight track leaves the road for the freight yard by the rice paddies
  secret: { tool: 'rail', at: [10, 20],
    text: { en: 'You lifted the barrier at the freight yard! Trains and river boats carry goods between the port of Shanghai and cities far inland. Good links like these give a city a great situation.',
      es: '¡Levantaste la barrera del patio de carga! Los trenes y los barcos del río llevan mercancías entre el puerto de Shanghái y ciudades lejos del mar. Conexiones así le dan a una ciudad una gran situación.',
      fa: 'تو مانع ایستگاه بار را بالا کردی! قطارها و کشتی‌های دریا مال‌ها را بین بندر شانگهای و شهرهای دور از بحر می‌برند. همین راه‌های خوب به یک شهر موقعیت عالی می‌دهند.' } },

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
        { en: 'Welcome to the [[mountain pass|mountain pass]]! It is the only road between two valleys.', es: '¡Bienvenido al [[mountain pass|paso de montaña]]! Es el único camino entre dos valles.', fa: 'به [[mountain pass|کوتل]] خوش آمدی! این تنها راه میان دو دره است.' },
        { en: 'Every trader passes here. That is its [[situation|situation]]: what it connects to.', es: 'Todo comerciante pasa por aquí. Esa es su [[situation|situación]]: con qué se conecta.', fa: 'هر تاجر از این‌جا می‌گذرد. این [[situation|موقعیت]] آن است: اینکه به چه وصل است.' },
        { en: 'The ground is rocky, cold and narrow. That is its [[site|site]]: the land itself.', es: 'El suelo es rocoso, frío y angosto. Ese es su [[site|sitio]]: la tierra misma.', fa: 'زمین سنگلاخ، سرد و باریک است. این [[site|محل]] آن است: خود زمین.' },
        { en: 'Rocks stay the same. But if a tunnel opens elsewhere, traders stop coming here.', es: 'Las rocas siguen igual. Pero si abren un túnel en otro lado, los comerciantes dejan de venir.', fa: 'سنگ‌ها همان‌طور می‌مانند. اما اگر جای دیگر تونل باز شود، تاجران دیگر این‌جا نمی‌آیند.' }
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
        { en: 'I grow rice on this flat [[plain|plain]]. Every year the river drops rich soil here.', es: 'Yo cultivo arroz en esta [[plain|llanura]] plana. Cada año el río deja tierra fértil aquí.', fa: 'من در این [[plain|دشت هموار]] برنج می‌کارم. هر سال دریا خاک حاصلخیز را این‌جا می‌گذارد.' },
        { en: 'Flat land, fresh water and rich soil make a strong [[site|site]] for a city.', es: 'La tierra plana, el agua dulce y el suelo fértil hacen un buen [[site|sitio]] para una ciudad.', fa: 'زمین هموار، آب شیرین و خاک حاصلخیز یک [[site|محل]] خوب برای شهر است.' },
        { en: 'In the rainy season the river floods. The hilltop stays dry, but far from water.', es: 'En la temporada de lluvias el río se desborda. La colina queda seca, pero lejos del agua.', fa: 'در فصل باران دریا سیلاب می‌شود. سر تپه خشک می‌ماند، اما از آب دور است.' },
        { en: 'Farms that send a city goods are its [[hinterland|hinterland]]. A big one helps trade grow.', es: 'Las granjas que mandan productos a una ciudad son su [[hinterland|hinterland]]. Uno grande hace crecer el comercio.', fa: 'کشتزارهایی که برای شهر کالا می‌فرستند [[hinterland|پس‌کرانهٔ]] آن هستند. پس‌کرانهٔ بزرگ تجارت را زیاد می‌کند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is part of a city\'s SITE?', es: '¿Cuál es parte del SITIO de una ciudad?', fa: 'کدام یک بخشی از محل یک شهر است؟' },
        choices: [
          { ok: true, t: { en: 'Rich, flat soil that floods', es: 'Suelo fértil y plano que se inunda', fa: 'خاک حاصلخیز و هموار که سیلاب می‌شود' },
            why: { en: 'Soil, flatness and floods are about the land itself. That is site.', es: 'El suelo, lo plano y las inundaciones son de la tierra misma. Eso es el sitio.', fa: 'خاک، هموار بودن و سیلاب دربارهٔ خود زمین هستند. این محل است.' } },
          { t: { en: 'The road over to the next valley', es: 'El camino hacia el siguiente valle', fa: 'راهی که به درهٔ بعدی می‌رود' },
            why: { en: 'A road is a connection to other places. That is situation.', es: 'Un camino es una conexión con otros lugares. Eso es la situación.', fa: 'راه یک وصل به جاهای دیگر است. این موقعیت است.' } },
          { t: { en: 'Ships from ports across the sea', es: 'Barcos de puertos al otro lado del mar', fa: 'کشتی‌ها از بندرهای آن طرف بحر' },
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
        { en: 'At this [[river mouth|river mouth]], boats go upriver and ships sail to far ports. Great [[situation|situation]]!', es: 'En esta [[river mouth|desembocadura]], los botes suben el río y los barcos van a puertos lejanos. ¡Gran [[situation|situación]]!', fa: 'در این [[river mouth|دهانهٔ دریا]]، قایق‌ها از دریا بالا می‌روند و کشتی‌ها به بندرهای دور می‌روند. [[situation|موقعیت]] عالی!' },
        { en: 'Many big East Asian cities grew at river mouths, like Shanghai at the Yangtze.', es: 'Muchas grandes ciudades del este de Asia crecieron en desembocaduras, como Shanghái en el Yangtsé.', fa: 'بسیاری از شهرهای بزرگ شرق آسیا در دهانهٔ دریاها رشد کردند، مثل شانگهای کنار یانگتسی.' },
        { en: 'Alexandria, Virginia, too! Its site: deep water on the Potomac. It was a busy port.', es: '¡Alexandria, Virginia, también! Su sitio: agua profunda en el Potomac. Fue un puerto muy activo.', fa: 'الکساندریا، ویرجینیا هم! محل آن: آب عمیق در دریای پوتومک. یک بندر پرکار بود.' },
        { en: 'Today it is next to the capital. Same site, new situation.', es: 'Hoy está junto a la capital. El mismo sitio, una situación nueva.', fa: 'امروز کنار پایتخت است. همان محل، موقعیت نو.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which one is part of a city\'s SITUATION?', es: '¿Cuál es parte de la SITUACIÓN de una ciudad?', fa: 'کدام یک بخشی از موقعیت یک شهر است؟' },
        choices: [
          { ok: true, t: { en: 'Sea routes to other ports', es: 'Rutas de mar a otros puertos', fa: 'راه‌های بحری به بندرهای دیگر' },
            why: { en: 'Routes connect the city to other places. That is situation.', es: 'Las rutas conectan la ciudad con otros lugares. Eso es la situación.', fa: 'راه‌ها شهر را به جاهای دیگر وصل می‌کنند. این موقعیت است.' } },
          { t: { en: 'The flat soil under the town', es: 'El suelo plano debajo del pueblo', fa: 'خاک هموار زیر شهر' },
            why: { en: 'Soil is the land itself. That is site.', es: 'El suelo es la tierra misma. Eso es el sitio.', fa: 'خاک خود زمین است. این محل است.' } },
          { t: { en: 'The hill under the old fort', es: 'La colina bajo el viejo fuerte', fa: 'تپهٔ زیر قلعهٔ کهنه' },
            why: { en: 'A hill is part of the ground. That is site.', es: 'Una colina es parte del suelo. Eso es el sitio.', fa: 'تپه بخشی از زمین است. این محل است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 7, text: { en: 'SURVEY POST · New city: A · River mouth (south-east) · B · Hilltop (north-east, up the path) · C · Mountain pass (west).', es: 'PUESTO DE ESTUDIO · Ciudad nueva: A · Desembocadura (sureste) · B · Colina (noreste, subiendo el sendero) · C · Paso de montaña (oeste).', fa: 'پایگاه سروی · شهر نو: الف · دهانهٔ دریا (جنوب شرق) · ب · سر تپه (شمال شرق، از راه بالا) · ج · کوتل (غرب).' } },
    { x: 24, y: 5, text: { en: 'HILLTOP B · High and dry. You can see the plain, river and sea. But the water is far below.', es: 'COLINA B · Alta y seca. Se ve la llanura, el río y el mar. Pero el agua está muy abajo.', fa: 'سر تپه ب · بلند و خشک. دشت، دریا و بحر دیده می‌شود. اما آب خیلی پایین است.' } }
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
        { en: 'Oh no! The Grump\'s wind took my red flag!', es: '¡Ay, no! ¡El viento del Gruñón se llevó mi bandera roja!', fa: 'وای نه! باد غرغرو بیرق سرخم را برد!' },
        { en: 'It marked my favorite spot for the new city. Now I cannot find it!', es: 'Marcaba mi lugar favorito para la ciudad nueva. ¡Ahora no la encuentro!', fa: 'جای دلخواهم را برای شهر نو نشان می‌داد. حالا پیدایش نمی‌کنم!' },
        { en: 'Hana flies her kite on the north-east hilltop. She sees everything. Will you ask her?', es: 'Hana vuela su cometa en la colina del noreste. Lo ve todo. ¿Le preguntas?', fa: 'هانا بالای تپهٔ شمال شرق گُدی‌پران بازی می‌کند. همه چیز را می‌بیند. از او می‌پرسی؟' }
      ],
      wait: { en: 'Hana is on the hilltop. Go north, cross the bridge east, then climb.', es: 'Hana está en la colina. Ve al norte, cruza el puente al este y luego sube.', fa: 'هانا بالای تپه است. به شمال برو، از پل به شرق بگذر، بعد بالا برو.' },
      thanks: { en: 'My flag! The [[river mouth|river mouth]] links river and sea. A great [[situation|situation]]! Thank you!', es: '¡Mi bandera! La [[river mouth|desembocadura]] une el río y el mar. ¡Una gran [[situation|situación]]! ¡Gracias!', fa: 'بیرق من! [[river mouth|دهانهٔ دریا]] دریا و بحر را وصل می‌کند. یک [[situation|موقعیت]] عالی! تشکر!' }
    },
    contact: {
      x: 21, y: 4,
      name: { en: 'Hana', es: 'Hana', fa: 'هانا' },
      role: { en: 'Kite flyer', es: 'Niña de la cometa', fa: 'گُدی‌پران‌باز' },
      look: { skin: 2, hair: '#2a1d14', shirt: '#f2c94c', pants: '#3b5b8a', style: 'long' },
      lines: [
        { en: 'Yes! From this high hill I can see the whole [[plain|plain]].', es: '¡Sí! Desde esta colina alta veo toda la [[plain|llanura]].', fa: 'بله! از این تپهٔ بلند تمام [[plain|دشت هموار]] را می‌بینم.' },
        { en: 'A red flag flew down to the [[river mouth|river mouth]], where the river meets the sea.', es: 'Una bandera roja voló hasta la [[river mouth|desembocadura]], donde el río llega al mar.', fa: 'یک بیرق سرخ تا [[river mouth|دهانهٔ دریا]] پرید، جایی که دریا به بحر می‌رسد.' },
        { en: 'Walk south along the beach to the very last sand, right next to the sea.', es: 'Camina al sur por la playa hasta la última arena, justo al lado del mar.', fa: 'در کنار ساحل به طرف جنوب تا آخرین ریگ برو، درست کنار بحر.' }
      ]
    },
    action: {
      type: 'find',
      at: [23, 20],
      hint: { en: 'south end of the beach, next to the sea', es: 'el extremo sur de la playa, junto al mar', fa: 'آخر جنوبی ساحل، کنار بحر' },
      found: { en: 'There it is! You are at the [[river mouth|river mouth]], where the river and sea meet.', es: '¡Ahí está! Estás en la [[river mouth|desembocadura]], donde se juntan el río y el mar.', fa: 'آنجاست! تو در [[river mouth|دهانهٔ دریا]] هستی، جایی که دریا و بحر به هم می‌رسند.' },
      item: { icon: '🚩', name: { en: "Ms. Park's planning flag", es: 'La bandera del plan de la Sra. Park', fa: 'بیرق نقشهٔ خانم پارک' } }
    }
  },

  scraps: [[7, 3], [27, 2], [2, 20]],
  smudges: [[17, 9], [16, 18], [8, 16]],

  challenge: {
    at: [23, 3],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag at each site: A on the sand where the river meets the sea, B on the hilltop over the rice plain, C on the narrow road through the western pass
    spots: [[23, 14], [26, 3], [1, 5]],
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
        choices: [{ en: 'The ground a city is built on', es: 'El suelo donde está una ciudad', fa: 'زمینی که شهر روی آن است' }, { en: 'The other cities a place can reach', es: 'Las otras ciudades a las que se puede llegar', fa: 'شهرهای دیگری که از یک جا می‌شود رسید' }, { en: 'The number of people in a city', es: 'El número de personas de una ciudad', fa: 'تعداد مردم یک شهر' }, { en: 'The main job most people do', es: 'El trabajo principal de la mayoría', fa: 'کار اصلی بیشتر مردم' }], answer: 0,
        why: { en: 'Site is the land itself: a harbor, a hill, a river crossing.', es: 'El sitio es la tierra misma: un puerto natural, una colina, un cruce de río.', fa: 'محل خود زمین است: یک بندر، یک تپه، یک گذرگاه دریا.' } },
      { q: { en: 'Which of these is part of a city\'s situation?', es: '¿Cuál de estos es parte de la situación de una ciudad?', fa: 'کدام یک بخشی از موقعیت یک شهر است؟' },
        choices: [{ en: 'A rail line to other cities', es: 'Una línea de tren a otras ciudades', fa: 'خط ریل به شهرهای دیگر' }, { en: 'The hill the old fort was built on', es: 'La colina del viejo fuerte', fa: 'تپه‌ای که قلعهٔ کهنه روی آن است' }, { en: 'The deep water next to the docks', es: 'El agua profunda junto a los muelles', fa: 'آب عمیق کنار اسکله‌ها' }, { en: 'The flat dry land above the flood line', es: 'La tierra plana y seca sobre la línea de inundación', fa: 'زمین هموار و خشک بالاتر از خط سیلاب' }], answer: 0,
        why: { en: 'A rail line connects the city to other places. The other three are the ground itself.', es: 'Una línea de tren conecta la ciudad con otros lugares. Las otras tres son el suelo mismo.', fa: 'خط ریل شهر را به جاهای دیگر وصل می‌کند. سه تای دیگر خود زمین هستند.' } },
      { q: { en: 'What is a hinterland?', es: '¿Qué es un hinterland?', fa: 'پس‌کرانه چیست؟' },
        choices: [{ en: 'Nearby land that sends a city goods', es: 'Tierra cercana que manda productos a una ciudad', fa: 'زمین نزدیک که برای شهر کالا می‌فرستد' }, { en: 'The oldest part of the downtown area', es: 'La parte más vieja del centro de la ciudad', fa: 'کهنه‌ترین بخش مرکز شهر' }, { en: 'The border line between two cities', es: 'La línea de frontera entre dos ciudades', fa: 'خط سرحد میان دو شهر' }, { en: 'Land the city plans to build on next', es: 'La tierra donde la ciudad piensa construir después', fa: 'زمینی که شهر می‌خواهد بعداً رویش بسازد' }], answer: 0,
        why: { en: 'Farms, mines and small towns in the hinterland send goods to the city.', es: 'Las granjas, minas y pueblos del hinterland mandan productos a la ciudad.', fa: 'کشتزارها، معدن‌ها و قریه‌های پس‌کرانه به شهر کالا می‌فرستند.' } },
      { q: { en: 'A city has a very large hinterland. What often happens to it?', es: 'Una ciudad tiene un hinterland muy grande. ¿Qué le pasa muchas veces?', fa: 'یک شهر پس‌کرانهٔ بسیار بزرگ دارد. اکثراً چه می‌شود؟' },
        choices: [{ en: 'It becomes a busy trade center', es: 'Se vuelve un centro de comercio activo', fa: 'یک مرکز پرکار تجارت می‌شود' }, { en: 'It shrinks into a quiet village', es: 'Se encoge hasta ser un pueblo tranquilo', fa: 'کوچک شده یک قریهٔ آرام می‌شود' }, { en: 'Its site moves to new land', es: 'Su sitio se mueve a otra tierra', fa: 'محلش به زمین نو می‌رود' }, { en: 'It stops trading with anyone', es: 'Deja de comerciar con todos', fa: 'با هیچ‌کس تجارت نمی‌کند' }], answer: 0,
        why: { en: 'More farms and towns sending goods means more trade passing through the city.', es: 'Más granjas y pueblos mandando productos significa más comercio pasando por la ciudad.', fa: 'کشتزار و قریهٔ بیشتر که کالا می‌فرستند یعنی تجارت بیشتر از شهر می‌گذرد.' } },
      { q: { en: 'What is the site of Alexandria, Virginia?', es: '¿Cuál es el sitio de Alexandria, Virginia?', fa: 'محل الکساندریا، ویرجینیا چیست؟' },
        choices: [{ en: 'Deep water on the Potomac River', es: 'Agua profunda en el río Potomac', fa: 'آب عمیق در دریای پوتومک' }, { en: 'A dry plain far above a flood line', es: 'Una llanura seca muy por encima de la línea de inundación', fa: 'یک دشت خشک خیلی بالاتر از خط سیلاب' }, { en: 'A crossing between two large lakes', es: 'Un cruce entre dos lagos grandes', fa: 'یک گذرگاه میان دو جهیل بزرگ' }, { en: 'A hilltop above a mountain pass', es: 'Una colina sobre un paso de montaña', fa: 'سر یک تپه بالای کوتل' }], answer: 0,
        why: { en: 'Deep water let large ships reach Alexandria\'s docks directly.', es: 'El agua profunda dejaba que los barcos grandes llegaran directo a los muelles de Alexandria.', fa: 'آب عمیق به کشتی‌های بزرگ اجازه می‌داد مستقیم به اسکله‌های الکساندریا برسند.' } },
      { q: { en: 'Alexandria\'s ground never moved, but its jobs changed from shipping flour to government and services. What changed?', es: 'El suelo de Alexandria nunca se movió, pero sus trabajos cambiaron de enviar harina a gobierno y servicios. ¿Qué cambió?', fa: 'زمین الکساندریا هرگز تغییر نکرد، اما کارهایش از صادر کردن آرد به کار دولتی و خدمات تغییر کرد. چه چیز تغییر کرد؟' },
        choices: [{ en: 'Its situation', es: 'Su situación', fa: 'موقعیتش' }, { en: 'Its site', es: 'Su sitio', fa: 'محلش' }, { en: 'The depth of its river', es: 'La profundidad de su río', fa: 'عمق دریایش' }, { en: 'The soil in its hinterland', es: 'El suelo de su hinterland', fa: 'خاک پس‌کرانه‌اش' }], answer: 0,
        why: { en: 'Being next to the nation\'s capital is about connections. That is situation.', es: 'Estar junto a la capital del país tiene que ver con conexiones. Eso es la situación.', fa: 'کنار پایتخت بودن دربارهٔ وصل‌ها است. این موقعیت است.' } },
      { q: { en: 'A new highway reaches a quiet town, and the town fills up with people. What changed?', es: 'Una carretera nueva llega a un pueblo tranquilo y el pueblo se llena de gente. ¿Qué cambió?', fa: 'یک شاهراه نو به یک شهرک آرام می‌رسد و شهرک پر از مردم می‌شود. چه چیز تغییر کرد؟' },
        choices: [{ en: 'The town\'s situation', es: 'La situación del pueblo', fa: 'موقعیت شهرک' }, { en: 'The town\'s site', es: 'El sitio del pueblo', fa: 'محل شهرک' }, { en: 'The town\'s flood line', es: 'La línea de inundación del pueblo', fa: 'خط سیلاب شهرک' }, { en: 'The town\'s hinterland disappeared', es: 'El hinterland del pueblo desapareció', fa: 'پس‌کرانهٔ شهرک از بین رفت' }], answer: 0,
        why: { en: 'A highway is a new connection. The ground under the town is the same.', es: 'Una carretera es una conexión nueva. El suelo del pueblo es el mismo.', fa: 'شاهراه یک وصل نو است. زمین زیر شهرک همان است.' } },
      { q: { en: 'Many towns started as a fort, then became a market town, then a factory town. Why does a town\'s job keep changing?', es: 'Muchos pueblos empezaron como fuerte, luego fueron pueblo de mercado y luego pueblo de fábricas. ¿Por qué cambia el trabajo de un pueblo?', fa: 'بسیاری از شهرک‌ها اول قلعه بودند، بعد شهرک بازار، بعد شهرک فابریکه شدند. چرا کار یک شهرک تغییر می‌کند؟' },
        choices: [{ en: 'Its situation changes, so its work does', es: 'Su situación cambia, y su trabajo también', fa: 'موقعیتش تغییر می‌کند، پس کارش هم' }, { en: 'The ground under the town keeps shifting', es: 'El suelo debajo del pueblo se sigue moviendo', fa: 'زمین زیر شهرک همیشه حرکت می‌کند' }, { en: 'Every fort must become a factory', es: 'Todo fuerte debe volverse fábrica', fa: 'هر قلعه باید فابریکه شود' }, { en: 'Towns must change their name every 100 years', es: 'Los pueblos deben cambiar de nombre cada 100 años', fa: 'شهرک‌ها باید هر ۱۰۰ سال نام خود را تغییر دهند' }], answer: 0,
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
