/* TIMEWALKER · Episode 1.2 · Trade Around 1500 (WHII)
   Calicut (today Kozhikode), on the Malabar Coast of India, in 1500: the hub of Indian Ocean trade.
   West (x 0-7): the Arabian Sea (=, ~), the beach (s) and two docks (k, rows 4 and 16) where ships tie up.
   North half: the harbor office and a dhow builder's house, pepper gardens on the hills (2 = pepper vines climbing
   trees p), the Western Ghats (K) and the Tali temple (D, door 23,8). Row 11: the river, two bridges (B).
   South half: the Mishkal mosque (D, door 11,14), the bazaar (m, l), houses and rice paddies (q). */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'WHII',
  title: { en: 'Trade Around 1500', es: 'El comercio hacia 1500', fa: 'تجارت در حدود ۱۵۰۰' },
  place: { en: 'Calicut, India, 1500', es: 'Calicut, India, 1500', fa: 'کالیکوت، هند، ۱۵۰۰' },
  intro: [
    { en: 'The Grump blurred the trade page. Traders forgot where their goods come from!',
      es: 'El Gruñón borró la página del comercio. ¡Los comerciantes olvidaron de dónde vienen sus productos!',
      fa: 'غرغرو صفحهٔ تجارت را تار کرد. تاجران فراموش کردند اجناس‌شان از کجا می‌آید!' },
    { en: 'Talk to the 3 people in Calicut, then fix the time stone.',
      es: 'Habla con las 3 personas de Calicut y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر در کالیکوت گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: the Malabar Coast of India on the world map, 1500 on the timeline */
  scenes: {
    at: [75.78, 11.25],
    year: 1500,
    start: [
      { en: 'Around 1500, ships crossed the Indian Ocean in a huge trade network.',
        es: 'Hacia 1500, los barcos cruzaban el océano Índico en una enorme red de comercio.',
        fa: 'در حدود ۱۵۰۰، کشتی‌ها در یک شبکهٔ بزرگ تجارت از بحر هند می‌گذشتند.' },
      { en: 'It linked East Africa, Arabia, India, Southeast Asia and China.',
        es: 'Unía África oriental, Arabia, la India, el sudeste de Asia y China.',
        fa: 'افریقای شرقی، عربستان، هند، جنوب شرق آسیا و چین را به هم وصل می‌کرد.' },
      { en: 'Calicut, in southern India, was a rich port for spices.',
        es: 'Calicut, en el sur de la India, era un puerto rico en especias.',
        fa: 'کالیکوت، در جنوب هند، یک بندر ثروتمند مصاله بود.' }
    ],
    page: { en: 'Today, people all over the world still cook with Indian black pepper.',
      es: 'Hoy, gente de todo el mundo todavía cocina con pimienta negra de la India.',
      fa: 'امروز هم مردم سراسر جهان با مرچ سیاه هندی غذا می‌پزند.' },
    guess: {
      q: { en: 'Ships had no engines in 1500. What pushed them across the ocean?', es: 'En 1500 los barcos no tenían motor. ¿Qué los empujaba por el océano?', fa: 'در سال ۱۵۰۰ کشتی‌ها ماشین نداشتند. چه چیز آن‌ها را در بحر پیش می‌برد؟' },
      choices: [
        { t: { en: '💨 The wind', es: '💨 El viento', fa: '💨 باد' }, ok: true },
        { t: { en: '🐋 Big whales', es: '🐋 Ballenas grandes', fa: '🐋 نهنگ‌های بزرگ' } }
      ],
      why: { en: 'Sails caught the monsoon winds. Sailors planned their trips by the seasons.', es: 'Las velas atrapaban los vientos del monzón. Los marineros planeaban sus viajes según las estaciones.', fa: 'بادبان‌ها باد موسمی را می‌گرفتند. ملاحان سفرشان را به حساب فصل‌ها برنامه می‌کردند.' }
    },
    next: {
      q: { en: 'Next: great empires. Which city sits on two continents?', es: 'Ahora: grandes imperios. ¿Qué ciudad está en dos continentes?', fa: 'بعدی: امپراتوری‌های بزرگ. کدام شهر روی دو قاره است؟' },
      choices: [
        { t: { en: 'Istanbul', es: 'Estambul', fa: 'استانبول' }, ok: true },
        { t: { en: 'Paris', es: 'París', fa: 'پاریس' } }
      ],
      why: { en: 'Istanbul sits in both Europe and Asia. It was the Ottoman capital.', es: 'Estambul está en Europa y en Asia. Era la capital otomana.', fa: 'استانبول هم در اروپا و هم در آسیا است. پایتخت عثمانی بود.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [10, 2], name: { en: 'Moosa', es: 'Moosa', fa: 'موسی' },
      look: { skin: 4, hair: '#1a1208', shirt: '#e8dcc0', pants: '#3a5a4a', style: 'short' },
      lines: [
        { en: 'Welcome! I build ships called [[dhow|dhows]]. We sew the planks together with rope.', es: '¡Bienvenido! Construyo barcos llamados [[dhow|dhows]]. Cosemos las tablas con cuerda.', fa: 'خوش آمدی! من کشتی‌هایی به نام [[dhow|دَو]] می‌سازم. تخته‌ها را با ریسمان به هم می‌دوزیم.' },
        { en: 'The rope comes from coconut palms. They grow all along this coast.', es: 'La cuerda sale de las palmas de coco. Crecen en toda esta costa.', fa: 'ریسمان از درخت نارگیل است. در تمام این ساحل می‌روید.' }
      ] },
    { at: [23, 8], name: { en: 'Shankaran', es: 'Shankaran', fa: 'شنکرن' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#f2f2f2', pants: '#f2f2f2', robe: true, style: 'short' },
      lines: [
        { en: 'This is a Hindu temple. Most people in Calicut are Hindu.', es: 'Este es un templo hindú. La mayoría de la gente de Calicut es hindú.', fa: 'این یک معبد هندو است. بیشتر مردم کالیکوت هندو هستند.' },
        { en: 'Our king, the [[zamorin|Zamorin]], lets traders of every faith work here.', es: 'Nuestro rey, el [[zamorin|Zamorín]], deja trabajar aquí a comerciantes de toda fe.', fa: 'پادشاه ما، [[zamorin|زامورین]]، به تاجران هر دینی اجازهٔ کار اینجا را می‌دهد.' }
      ] },
    { at: [11, 14], name: { en: 'Haji Ahmed', es: 'Haji Ahmed', fa: 'حاجی احمد' },
      look: { skin: 3, hair: '#8a8a8a', shirt: '#f2f2f2', pants: '#3a3a3a', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'Peace be with you! A rich ship owner named Mishkal built this mosque.', es: '¡La paz sea contigo! Un rico dueño de barcos llamado Mishkal construyó esta mezquita.', fa: 'السلام علیکم! یک صاحب ثروتمند کشتی به نام مشکال این مسجد را ساخت.' },
        { en: 'Muslim traders from Arabia have lived on this coast for hundreds of years.', es: 'Los comerciantes musulmanes de Arabia viven en esta costa desde hace cientos de años.', fa: 'تاجران مسلمان عربستان صدها سال است در این ساحل زندگی می‌کنند.' }
      ] },
    { at: [10, 17], name: { en: 'Ammini', es: 'Ammini', fa: 'امینی' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f8f5f', pants: '#d9a02b', style: 'long' },
      lines: [
        { en: 'Taste this fish curry! It has pepper, ginger and coconut.', es: '¡Prueba este curry de pescado! Tiene pimienta, jengibre y coco.', fa: 'این قورمهٔ ماهی را بچش! مرچ، زنجبیل و نارگیل دارد.' },
        { en: 'Spices from our gardens go to kitchens all over the world.', es: 'Las especias de nuestros huertos llegan a cocinas de todo el mundo.', fa: 'مصاله‌های باغ‌های ما به آشپزخانه‌های سراسر جهان می‌رود.' }
      ] },
    { at: [18, 17], name: { en: 'Old Abdullah', es: 'El viejo Abdullah', fa: 'عبدالله پیر' },
      look: { skin: 4, hair: '#e8e8e8', shirt: '#6a4a8a', pants: '#3a2a20', style: 'short' },
      lines: [
        { en: 'My grandfather saw the great Chinese fleets sail into this harbor.', es: 'Mi abuelo vio las grandes flotas chinas entrar a este puerto.', fa: 'پدرکلانم دید که کاروان‌های بزرگ کشتی چینی به این بندر آمدند.' },
        { en: 'Admiral Zheng He\'s giant ships visited Calicut many times in the 1400s.', es: 'Los barcos gigantes del almirante Zheng He visitaron Calicut muchas veces en los años 1400.', fa: 'کشتی‌های بسیار بزرگ امیرالبحر ژنگ هه در سال‌های ۱۴۰۰ بارها به کالیکوت آمدند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     x 0-7: the Arabian Sea and the beach; docks on rows 4 and 16. Rows 1-6, x 17-27: pepper gardens. x 29-31: hills.
     Row 11: the river to the sea, bridges at x 12 and x 24. South: the mosque, the bazaar (m), houses, rice (q). */
  map: [
    '=====~pppTpTTpTTTTTTTTKKKKKKKKKK',
    '=====~ss.RRR.....2p2p2p2p2p2.KKK',
    '=====~ss.hdh.....22222222222.KKK',
    '=====~ss..:......2p2p2p2p2p2.KKK',
    '==kkkkss:::::::::::::::::::::KKK',
    '=====~ss.x.......2p2p2p2p2p2.KKK',
    '=====~ss.........22222222222.KKK',
    '=====~ss..TT.........DDDDD...KKK',
    '=====~ss.............DDdDD...KKK',
    '=====~ss.....................KKK',
    '=====~ss.....................KKK',
    '=====~~~~~~~B~~~~~~~~~~~B~~~~KKK',
    '=====~ss........x.llllllllllll.T',
    '=====~ss.DDDDD....lmmm.mmm.mmm.T',
    '=====~ss.DDdDD....llllllllllll.T',
    '=====~ss::::::::::::::::::::::.T',
    '==kkkkss.RRR.....RRR.qqqqqqqqqqT',
    '=====~ss.hdh.....hdh.qqqqqqqqqqT',
    '=====~ss.............qqqqqqqqqqT',
    '=====~ss.p...p...,...qqqqqqqqqqT',
    '=====~ss..,....p.....qqqqqqqqqqT',
    '=====~pppTTpTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [12, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [8, 8], at: [6, 10], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps west, then 2 steps south, onto the beach.', es: 'Desde esta nota, camina 2 pasos al oeste y luego 2 pasos al sur, hasta la playa.', fa: 'از این یادداشت، ۲ قدم به غرب برو، بعد ۲ قدم به جنوب، تا ساحل.' },
      text: { en: 'Cowrie shells from the Maldive Islands were used as money in many lands.', es: 'Las conchas de cauri de las islas Maldivas se usaban como dinero en muchas tierras.', fa: 'صدف‌های کوری از جزیره‌های مالدیو در سرزمین‌های زیادی مثل پول به کار می‌رفت.' } },
    { clueAt: [13, 18], at: [6, 13], decor: 'vase',
      clue: { en: 'From this note, walk 7 steps west to the beach, then 5 steps north.', es: 'Desde esta nota, camina 7 pasos al oeste hasta la playa y luego 5 pasos al norte.', fa: 'از این یادداشت، ۷ قدم به غرب تا ساحل برو، بعد ۵ قدم به شمال.' },
      text: { en: 'A blue and white vase from China. Calicut bought [[porcelain|porcelain]] and sold pepper to China.', es: 'Un jarrón azul y blanco de China. Calicut compraba [[porcelain|porcelana]] y vendía pimienta a China.', fa: 'یک گلدان آبی و سفید از چین. کالیکوت [[porcelain|چینی]] می‌خرید و به چین مرچ می‌فروخت.' } }
  ],

  words: {
    monsoon: { en: 'a wind that changes direction with the seasons and brings heavy rain', es: 'un viento que cambia de dirección según la estación y trae mucha lluvia', fa: 'بادی که با فصل‌ها جهتش را تغییر می‌دهد و باران زیاد می‌آورد' },
    spice: { en: 'a dried plant part, like pepper or ginger, that gives food strong taste', es: 'una parte seca de una planta, como la pimienta o el jengibre, que da sabor fuerte', fa: 'بخش خشک یک نبات، مثل مرچ یا زنجبیل، که به غذا مزهٔ تند می‌دهد' },
    merchant: { en: 'a person who buys and sells goods to make money', es: 'una persona que compra y vende productos para ganar dinero', fa: 'کسی که برای پول درآوردن جنس می‌خرد و می‌فروشد' },
    dhow: { en: 'a wooden sailing ship of the Indian Ocean', es: 'un barco de vela de madera del océano Índico', fa: 'یک کشتی بادبانی چوبی بحر هند' },
    'trade network': { en: 'many places linked by routes where people buy and sell goods', es: 'muchos lugares unidos por rutas donde la gente compra y vende', fa: 'جاهای زیادی که با راه‌ها به هم وصل‌اند و مردم در آن‌ها خرید و فروش می‌کنند' },
    porcelain: { en: 'fine, hard, white pottery, first made in China', es: 'cerámica fina, dura y blanca, que se hizo primero en China', fa: 'ظرف گلی نازک، سخت و سفید که اول در چین ساخته شد' },
    zamorin: { en: 'the title of the Hindu king who ruled Calicut', es: 'el título del rey hindú que gobernaba Calicut', fa: 'لقب پادشاه هندو که بر کالیکوت حکومت می‌کرد' }
  },

  npcs: [
    {
      x: 7, y: 14,
      name: { en: 'Juma', es: 'Juma', fa: 'جومه' },
      role: { en: 'Swahili sailor', es: 'Marinero suajili', fa: 'ملاح سواحلی' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'Jambo! That means hello in Swahili. I sail from Kilwa, in East Africa.', es: '¡Jambo! Así se dice hola en suajili. Navego desde Kilwa, en África oriental.', fa: 'جامبو! این در سواحلی یعنی سلام. من از کیلوا در افریقای شرقی می‌آیم.' },
        { en: 'In summer, the [[monsoon|monsoon]] wind blows our ships to India.', es: 'En verano, el viento del [[monsoon|monzón]] empuja nuestros barcos hacia la India.', fa: 'در تابستان، باد [[monsoon|موسمی]] کشتی‌های ما را به هند می‌برد.' },
        { en: 'In winter, the wind turns around and carries us home.', es: 'En invierno, el viento cambia y nos lleva de vuelta a casa.', fa: 'در زمستان، باد برمی‌گردد و ما را به خانه می‌برد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did ships sail to India in summer and home in winter?', es: '¿Por qué los barcos iban a la India en verano y volvían en invierno?', fa: 'چرا کشتی‌ها در تابستان به هند می‌رفتند و در زمستان برمی‌گشتند؟' },
        choices: [
          { ok: true, t: { en: 'The winds changed direction', es: 'Los vientos cambiaban de dirección', fa: 'بادها جهت‌شان را تغییر می‌دادند' },
            why: { en: 'Yes! The monsoon blows toward India in summer and away from it in winter.', es: '¡Sí! El monzón sopla hacia la India en verano y se aleja de ella en invierno.', fa: 'بله! باد موسمی در تابستان به طرف هند و در زمستان از هند دور می‌وزد.' } },
          { t: { en: 'The fish swam away each winter', es: 'Los peces se iban cada invierno', fa: 'ماهی‌ها هر زمستان دور می‌رفتند' },
            why: { en: 'Fish did not steer the ships. The seasonal monsoon winds did.', es: 'Los peces no guiaban los barcos. Lo hacían los vientos del monzón.', fa: 'ماهی‌ها کشتی را رهنمایی نمی‌کردند. بادهای موسمی می‌کردند.' } },
          { t: { en: 'The sea froze over every summer', es: 'El mar se congelaba cada verano', fa: 'بحر هر تابستان یخ می‌زد' },
            why: { en: 'The Indian Ocean is warm and never freezes. The winds set the sailing times.', es: 'El océano Índico es cálido y nunca se congela. Los vientos marcaban cuándo navegar.', fa: 'بحر هند گرم است و هرگز یخ نمی‌زند. بادها وقت سفر را تعیین می‌کردند.' } }
        ]
      }
    },
    {
      x: 14, y: 2,
      name: { en: 'Raman', es: 'Raman', fa: 'رامن' },
      role: { en: 'Harbor scribe', es: 'Escribano del puerto', fa: 'کاتب بندر' },
      look: { skin: 4, hair: '#1a1008', shirt: '#f2f2f2', pants: '#8a6a2a', style: 'short' },
      lines: [
        { en: 'Namaskaram! I write down every ship for our king, the [[zamorin|Zamorin]].', es: '¡Namaskaram! Anoto cada barco para nuestro rey, el [[zamorin|Zamorín]].', fa: 'نمسکارم! من هر کشتی را برای پادشاه ما، [[zamorin|زامورین]]، ثبت می‌کنم.' },
        { en: 'In 1498, ships came from Portugal. Vasco da Gama led them.', es: 'En 1498 llegaron barcos de Portugal. Los dirigía Vasco da Gama.', fa: 'در سال ۱۴۹۸ کشتی‌هایی از پرتگال آمدند. واسکو دا گاما رهبر آن‌ها بود.' },
        { en: 'Now they want to control the pepper trade, even by force.', es: 'Ahora quieren controlar el comercio de pimienta, incluso a la fuerza.', fa: 'حالا می‌خواهند تجارت مرچ را در دست بگیرند، حتی به زور.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why were Calicut\'s traders worried about the Portuguese?', es: '¿Por qué los comerciantes de Calicut estaban preocupados por los portugueses?', fa: 'چرا تاجران کالیکوت از پرتگالی‌ها نگران بودند؟' },
        choices: [
          { ok: true, t: { en: 'They wanted all the pepper trade', es: 'Querían todo el comercio de pimienta', fa: 'تمام تجارت مرچ را می‌خواستند' },
            why: { en: 'Yes. Portugal wanted to keep other traders out and control the spices by force.', es: 'Sí. Portugal quería sacar a los demás comerciantes y controlar las especias a la fuerza.', fa: 'بله. پرتگال می‌خواست تاجران دیگر را بیرون کند و مصاله را به زور در دست بگیرد.' } },
          { t: { en: 'They only wanted to buy rice', es: 'Solo querían comprar arroz', fa: 'فقط می‌خواستند برنج بخرند' },
            why: { en: 'The Portuguese came for spices, mostly pepper, not rice.', es: 'Los portugueses vinieron por las especias, sobre todo la pimienta, no por el arroz.', fa: 'پرتگالی‌ها برای مصاله، بیشتر مرچ، آمدند، نه برای برنج.' } },
          { t: { en: 'They came to give gifts to all', es: 'Vinieron a dar regalos a todos', fa: 'آمدند تا به همه تحفه بدهند' },
            why: { en: 'Their gifts were small. They wanted to control the spice trade.', es: 'Sus regalos eran pocos. Querían controlar el comercio de especias.', fa: 'تحفه‌هایشان کم بود. می‌خواستند تجارت مصاله را در دست بگیرند.' } }
        ]
      }
    },
    {
      x: 26, y: 9,
      name: { en: 'Ayesha', es: 'Ayesha', fa: 'عایشه' },
      role: { en: 'Cloth merchant', es: 'Comerciante de telas', fa: 'تاجر تکه' },
      look: { skin: 3, hair: '#1a1008', shirt: '#b03a5a', pants: '#2a4a6a', style: 'long', hat: '#e8c060' },
      lines: [
        { en: 'Hello! I sell cotton cloth from Gujarat, in western India.', es: '¡Hola! Vendo tela de algodón de Gujarat, en el oeste de la India.', fa: 'سلام! من تکهٔ نخی گجرات را می‌فروشم، در غرب هند.' },
        { en: 'I trade with Swahili cities like Kilwa and Mombasa, and with Arabia and China.', es: 'Comercio con ciudades suajilis como Kilwa y Mombasa, y con Arabia y China.', fa: 'با شهرهای سواحلی مثل کیلوا و مومباسا، و با عربستان و چین تجارت می‌کنم.' },
        { en: 'Muslim [[merchant|merchants]] like my family carried Islam to many ports.', es: 'Los [[merchant|comerciantes]] musulmanes como mi familia llevaron el islam a muchos puertos.', fa: '[[merchant|تاجران]] مسلمان مثل خانوادهٔ من اسلام را به بندرهای زیادی بردند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which lands did the Indian Ocean [[trade network|trade network]] connect?', es: '¿Qué tierras unía la [[trade network|red de comercio]] del océano Índico?', fa: '[[trade network|شبکهٔ تجارت]] بحر هند کدام سرزمین‌ها را به هم وصل می‌کرد؟' },
        choices: [
          { ok: true, t: { en: 'East Africa, Arabia, India and China', es: 'África oriental, Arabia, la India y China', fa: 'افریقای شرقی، عربستان، هند و چین' },
            why: { en: 'Yes! Ships linked ports from East Africa all the way to China.', es: '¡Sí! Los barcos unían puertos desde África oriental hasta China.', fa: 'بله! کشتی‌ها بندرها را از افریقای شرقی تا چین به هم وصل می‌کردند.' } },
          { t: { en: 'Only Spain, Portugal and the Americas', es: 'Solo España, Portugal y América', fa: 'فقط هسپانیه، پرتگال و قارهٔ امریکا' },
            why: { en: 'The Americas are across the Atlantic. The Indian Ocean linked Africa and Asia.', es: 'América está al otro lado del Atlántico. El Índico unía África y Asia.', fa: 'امریکا آن طرف بحر اطلس است. بحر هند افریقا و آسیا را وصل می‌کرد.' } },
          { t: { en: 'Only northern Europe and Russia', es: 'Solo el norte de Europa y Rusia', fa: 'فقط شمال اروپا و روسیه' },
            why: { en: 'Those lands are far from the Indian Ocean. Its ships linked Africa, Arabia and Asia.', es: 'Esas tierras están lejos del Índico. Sus barcos unían África, Arabia y Asia.', fa: 'آن سرزمین‌ها از بحر هند دورند. کشتی‌هایش افریقا، عربستان و آسیا را وصل می‌کردند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 5, text: { en: 'CALICUT · 1500 · A busy port on the Malabar Coast of India, famous for pepper.', es: 'CALICUT · 1500 · Un puerto activo en la costa de Malabar, en la India, famoso por la pimienta.', fa: 'کالیکوت · ۱۵۰۰ · یک بندر پرکار در ساحل مالابار هند، مشهور به مرچ.' } },
    { x: 16, y: 12, text: { en: 'THE BAZAAR · Pepper, ginger, cotton cloth, Chinese porcelain and African gold are sold here.', es: 'EL BAZAR · Aquí se venden pimienta, jengibre, tela de algodón, porcelana china y oro africano.', fa: 'بازار · مرچ، زنجبیل، تکهٔ نخی، چینی چین و طلای افریقا اینجا فروخته می‌شود.' } }
  ],

  /* the quest: Yusuf (gold !) by the north dock -> Lakshmi in the pepper garden (north-east) -> Govind at the bazaar
     (south-east): carry him the spice that grows here -> back to Yusuf */
  quest: {
    stat: 'reg',
    title: { en: 'Pepper for Cairo', es: 'Pimienta para El Cairo', fa: 'مرچ برای قاهره' },
    giver: {
      x: 7, y: 3,
      name: { en: 'Yusuf', es: 'Yusuf', fa: 'یوسف' },
      role: { en: 'Merchant from Cairo', es: 'Comerciante de El Cairo', fa: 'تاجر قاهره' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2a6a8a', pants: '#e8dcc0', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'Salaam! I am Yusuf, a [[merchant|merchant]] from Cairo, in Egypt.', es: '¡Salam! Soy Yusuf, un [[merchant|comerciante]] de El Cairo, en Egipto.', fa: 'سلام! من یوسف هستم، یک [[merchant|تاجر]] از قاهره، در مصر.' },
        { en: 'My buyers in Cairo and Venice want the famous [[spice|spice]] of this coast.', es: 'Mis compradores de El Cairo y Venecia quieren la famosa [[spice|especia]] de esta costa.', fa: 'خریداران من در قاهره و ونیز [[spice|مصالهٔ]] مشهور این ساحل را می‌خواهند.' },
        { en: 'Lakshmi farms in the hills to the east. She can help you.', es: 'Lakshmi cultiva en los cerros del este. Ella te puede ayudar.', fa: 'لکشمی در تپه‌های شرق دهقانی می‌کند. او کمکت می‌کند.' }
      ],
      wait: { en: 'Lakshmi is by the pepper garden, in the hills to the east.', es: 'Lakshmi está junto al huerto de pimienta, en los cerros del este.', fa: 'لکشمی کنار باغ مرچ است، در تپه‌های شرق.' },
      thanks: { en: 'Black pepper! It will sail to Cairo, then on to Venice. Thank you!', es: '¡Pimienta negra! Irá por mar a El Cairo y luego a Venecia. ¡Gracias!', fa: 'مرچ سیاه! با کشتی به قاهره می‌رود، بعد به ونیز. تشکر!' }
    },
    contact: {
      x: 18, y: 8,
      name: { en: 'Lakshmi', es: 'Lakshmi', fa: 'لکشمی' },
      role: { en: 'Pepper farmer', es: 'Agricultora de pimienta', fa: 'دهقان مرچ' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9542b', pants: '#2a5a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to our garden! Pepper vines climb up these trees.', es: '¡Bienvenido a nuestro huerto! Las enredaderas de pimienta suben por estos árboles.', fa: 'به باغ ما خوش آمدی! تاک‌های مرچ از این درختان بالا می‌روند.' },
        { en: 'Govind buys our pepper at the bazaar. Cross the river and go south.', es: 'Govind compra nuestra pimienta en el bazar. Cruza el río y ve al sur.', fa: 'گوویند مرچ ما را در بازار می‌خرد. از دریا بگذر و به جنوب برو.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 22, y: 13,
        name: { en: 'Govind', es: 'Govind', fa: 'گوویند' },
        role: { en: 'Spice weigher', es: 'Pesador de especias', fa: 'ترازوکش مصاله' },
        look: { skin: 4, hair: '#3a3a3a', shirt: '#e8c060', pants: '#f2f2f2', style: 'short' },
        lines: [
          { en: 'Welcome to the bazaar! I weigh goods from many lands.', es: '¡Bienvenido al bazar! Peso productos de muchas tierras.', fa: 'به بازار خوش آمدی! من اجناس سرزمین‌های زیادی را وزن می‌کنم.' }
        ]
      },
      q: { en: 'Your merchant wants the spice that grows on vines in our hills. Bring it to me.', es: 'Tu comerciante quiere la especia que crece en enredaderas en nuestros cerros. Tráemela.', fa: 'تاجر تو مصاله‌ای می‌خواهد که روی تاک در تپه‌های ما می‌روید. آن را پیش من بیاور.' },
      choices: [
        { ok: true, at: [22, 6], icon: '🫘', t: { en: 'A sack of black pepper', es: 'Un saco de pimienta negra', fa: 'یک بوجی مرچ سیاه' },
          why: { en: 'Yes! Pepper grows on vines here. Europe and China paid a lot for it.', es: '¡Sí! La pimienta crece aquí en enredaderas. Europa y China pagaban mucho por ella.', fa: 'بله! مرچ اینجا روی تاک می‌روید. اروپا و چین پول زیادی برایش می‌دادند.' } },
        { at: [4, 16], icon: '🏺', t: { en: 'A Chinese porcelain jar', es: 'Una vasija de porcelana china', fa: 'یک کوزهٔ چینی' },
          why: { en: 'This jar came by ship from China. It was not made here.', es: 'Esta vasija llegó en barco desde China. No se hizo aquí.', fa: 'این کوزه با کشتی از چین آمده. اینجا ساخته نشده.' } },
        { at: [3, 4], icon: '🌴', t: { en: 'A basket of dates', es: 'Una canasta de dátiles', fa: 'یک سبد خرما' },
          why: { en: 'Dates come from Arabia and Egypt. Yusuf\'s buyers have plenty already.', es: 'Los dátiles vienen de Arabia y Egipto. Los compradores de Yusuf ya tienen muchos.', fa: 'خرما از عربستان و مصر می‌آید. خریداران یوسف خودشان زیاد دارند.' } }
      ],
      item: { icon: '🫘', name: { en: 'A sack of black pepper', es: 'Un saco de pimienta negra', fa: 'یک بوجی مرچ سیاه' } }
    }
  },

  scraps: [[8, 1], [30, 20], [6, 20]],
  smudges: [[12, 9], [20, 18]],

  challenge: {
    at: [14, 19],
    type: 'table',
    stat: 'hei',
    title: { en: 'Read the harbor record', es: 'Lee el registro del puerto', fa: 'ثبت بندر را بخوان' },
    intro: { en: 'The Grump smudged the harbor record! Read the table of goods. Then answer the questions.',
      es: '¡El Gruñón manchó el registro del puerto! Lee la tabla de productos. Luego contesta las preguntas.',
      fa: 'غرغرو ثبت بندر را لکه‌دار کرد! جدول اجناس را بخوان. بعد به سؤال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Goods', es: 'Producto', fa: 'جنس' },
        { en: 'Came from', es: 'Venía de', fa: 'از کجا آمد' },
        { en: 'Went to', es: 'Iba a', fa: 'به کجا رفت' }
      ],
      rows: [
        [{ en: 'Black pepper', es: 'Pimienta negra', fa: 'مرچ سیاه' }, { en: 'Malabar Coast, India', es: 'Costa de Malabar, India', fa: 'ساحل مالابار، هند' }, { en: 'Cairo, Venice, China', es: 'El Cairo, Venecia, China', fa: 'قاهره، ونیز، چین' }],
        [{ en: 'Cotton cloth', es: 'Tela de algodón', fa: 'تکهٔ نخی' }, { en: 'Gujarat, India', es: 'Gujarat, India', fa: 'گجرات، هند' }, { en: 'East Africa, Arabia', es: 'África oriental, Arabia', fa: 'افریقای شرقی، عربستان' }],
        [{ en: 'Porcelain', es: 'Porcelana', fa: 'چینی' }, { en: 'China', es: 'China', fa: 'چین' }, { en: 'India, Persia, East Africa', es: 'India, Persia, África oriental', fa: 'هند، فارس، افریقای شرقی' }],
        [{ en: 'Gold', es: 'Oro', fa: 'طلا' }, { en: 'East Africa', es: 'África oriental', fa: 'افریقای شرقی' }, { en: 'India, Arabia', es: 'India, Arabia', fa: 'هند، عربستان' }],
        [{ en: 'Horses', es: 'Caballos', fa: 'اسپ' }, { en: 'Arabia, Persia', es: 'Arabia, Persia', fa: 'عربستان، فارس' }, { en: 'India', es: 'India', fa: 'هند' }]
      ],
      note: { en: 'Ships sailed with the monsoon: to India in summer, home in winter.', es: 'Los barcos navegaban con el monzón: a la India en verano, de vuelta en invierno.', fa: 'کشتی‌ها با باد موسمی سفر می‌کردند: در تابستان به هند، در زمستان به خانه.' }
    },
    questions: [
      { q: { en: 'Which good came from China?', es: '¿Qué producto venía de China?', fa: 'کدام جنس از چین می‌آمد؟' },
        choices: [{ en: 'Porcelain', es: 'La porcelana', fa: 'چینی' }, { en: 'Black pepper', es: 'La pimienta negra', fa: 'مرچ سیاه' }, { en: 'Gold', es: 'El oro', fa: 'طلا' }], answer: 0,
        why: { en: 'The table says porcelain came from China. It went to India, Persia and East Africa.', es: 'La tabla dice que la porcelana venía de China. Iba a la India, Persia y África oriental.', fa: 'جدول می‌گوید چینی از چین می‌آمد. به هند، فارس و افریقای شرقی می‌رفت.' } },
      { q: { en: 'What did East Africa send across the ocean?', es: '¿Qué enviaba África oriental por el océano?', fa: 'افریقای شرقی چه چیزی را از بحر می‌فرستاد؟' },
        choices: [{ en: 'Gold', es: 'Oro', fa: 'طلا' }, { en: 'Horses', es: 'Caballos', fa: 'اسپ' }, { en: 'Porcelain', es: 'Porcelana', fa: 'چینی' }], answer: 0,
        why: { en: 'Gold came from East Africa. It went to India and Arabia.', es: 'El oro venía de África oriental. Iba a la India y Arabia.', fa: 'طلا از افریقای شرقی می‌آمد. به هند و عربستان می‌رفت.' } },
      { q: { en: 'India sold goods, but it also bought goods. What did India buy?', es: 'La India vendía productos, pero también compraba. ¿Qué compraba la India?', fa: 'هند جنس می‌فروخت، اما جنس هم می‌خرید. هند چه می‌خرید؟' },
        choices: [{ en: 'Horses from Arabia and Persia', es: 'Caballos de Arabia y Persia', fa: 'اسپ از عربستان و فارس' }, { en: 'Pepper from Venice', es: 'Pimienta de Venecia', fa: 'مرچ از ونیز' }, { en: 'Cotton cloth from China', es: 'Tela de algodón de China', fa: 'تکهٔ نخی از چین' }], answer: 0,
        why: { en: 'Horses came from Arabia and Persia to India. Pepper and cotton came from India itself.', es: 'Los caballos iban de Arabia y Persia a la India. La pimienta y el algodón eran de la India.', fa: 'اسپ از عربستان و فارس به هند می‌رفت. مرچ و نخ از خود هند بود.' } },
      { q: { en: 'What does this table show about the Indian Ocean?', es: '¿Qué muestra esta tabla sobre el océano Índico?', fa: 'این جدول دربارهٔ بحر هند چه نشان می‌دهد؟' },
        choices: [{ en: 'Many lands traded with each other', es: 'Muchas tierras comerciaban entre sí', fa: 'سرزمین‌های زیادی با هم تجارت می‌کردند' }, { en: 'Only India sold anything', es: 'Solo la India vendía algo', fa: 'فقط هند چیزی می‌فروخت' }, { en: 'No one traded with Africa', es: 'Nadie comerciaba con África', fa: 'هیچ کس با افریقا تجارت نمی‌کرد' }], answer: 0,
        why: { en: 'Goods moved between Africa, Arabia, Persia, India and China. It was a trade network.', es: 'Los productos iban entre África, Arabia, Persia, la India y China. Era una red de comercio.', fa: 'اجناس میان افریقا، عربستان، فارس، هند و چین رفت و آمد داشت. یک شبکهٔ تجارت بود.' } }
    ],
    success: { en: 'The harbor record is clear again! The Indian Ocean linked Africa and Asia.', es: '¡El registro del puerto está claro otra vez! El océano Índico unía África y Asia.', fa: 'ثبت بندر دوباره روشن شد! بحر هند افریقا و آسیا را به هم وصل می‌کرد.' }
  },

  boss: {
    at: [28, 6],
    stat: 'reg',
    need: 3,
    name: { en: 'The Windless Grump', es: 'El Gruñón Sin Viento', fa: 'غرغروی بی‌باد' },
    appear: { en: 'The Windless Grump is hiding in the fog over the pepper hills!', es: '¡El Gruñón Sin Viento se esconde en la niebla sobre los cerros de pimienta!', fa: 'غرغروی بی‌باد در مه بالای تپه‌های مرچ پنهان است!' },
    taunt: { en: 'I stopped the winds! No ships, no trade, no friends across the sea!', es: '¡Detuve los vientos! ¡Sin barcos, sin comercio, sin amigos al otro lado del mar!', fa: 'بادها را بند کردم! نه کشتی، نه تجارت، نه دوستی آن طرف بحر!' },
    win: { en: 'The monsoon blows again. Chronicle page 1.2 floats down into your hands!', es: 'El monzón sopla otra vez. ¡La página 1.2 de la crónica cae en tus manos!', fa: 'باد موسمی دوباره می‌وزد. صفحهٔ ۱.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What were the monsoon winds?', es: '¿Qué eran los vientos del monzón?', fa: 'بادهای موسمی چه بودند؟' },
        choices: [
          { en: 'Winds that change with the seasons', es: 'Vientos que cambian con las estaciones', fa: 'بادهایی که با فصل‌ها تغییر می‌کنند' },
          { en: 'Winds that blow the same way all year', es: 'Vientos que soplan igual todo el año', fa: 'بادهایی که تمام سال یک طرف می‌وزند' },
          { en: 'Storms that come once in 100 years', es: 'Tormentas que llegan una vez cada 100 años', fa: 'توفان‌هایی که هر ۱۰۰ سال یک بار می‌آیند' },
          { en: 'Cold winds from snowy mountains', es: 'Vientos fríos de montañas nevadas', fa: 'بادهای سرد کوه‌های برفی' }],
        answer: 0,
        why: { en: 'The monsoon blows toward India in summer and away in winter. Sailors timed trips by it.', es: 'El monzón sopla hacia la India en verano y se aleja en invierno. Los marineros viajaban según él.', fa: 'باد موسمی در تابستان به طرف هند و در زمستان دور از آن می‌وزد. ملاحان سفر را با آن تنظیم می‌کردند.' } },
      { q: { en: 'Which spice grew on the Malabar Coast near Calicut?', es: '¿Qué especia crecía en la costa de Malabar, cerca de Calicut?', fa: 'کدام مصاله در ساحل مالابار نزدیک کالیکوت می‌رویید؟' },
        choices: [
          { en: 'Pepper', es: 'La pimienta', fa: 'مرچ' },
          { en: 'Vanilla', es: 'La vainilla', fa: 'وانیل' },
          { en: 'Cacao beans', es: 'Los granos de cacao', fa: 'دانهٔ کاکائو' },
          { en: 'Maple sugar', es: 'El azúcar de arce', fa: 'شکر افرا' }],
        answer: 0,
        why: { en: 'Black pepper grows on vines in the hills of Malabar. Vanilla and cacao come from the Americas.', es: 'La pimienta negra crece en enredaderas en los cerros de Malabar. La vainilla y el cacao son de América.', fa: 'مرچ سیاه روی تاک در تپه‌های مالابار می‌روید. وانیل و کاکائو از امریکا هستند.' } },
      { q: { en: 'Which European sailor reached Calicut by sea in 1498?', es: '¿Qué marinero europeo llegó por mar a Calicut en 1498?', fa: 'کدام ملاح اروپایی در سال ۱۴۹۸ از راه بحر به کالیکوت رسید؟' },
        choices: [
          { en: 'Vasco da Gama', es: 'Vasco da Gama', fa: 'واسکو دا گاما' },
          { en: 'Christopher Columbus', es: 'Cristóbal Colón', fa: 'کریستوف کلمبوس' },
          { en: 'Marco Polo', es: 'Marco Polo', fa: 'مارکوپولو' },
          { en: 'Ferdinand Magellan', es: 'Fernando de Magallanes', fa: 'فردیناند ماژلان' }],
        answer: 0,
        why: { en: 'Vasco da Gama sailed from Portugal around Africa. He reached Calicut in 1498.', es: 'Vasco da Gama salió de Portugal y rodeó África. Llegó a Calicut en 1498.', fa: 'واسکو دا گاما از پرتگال دور افریقا سفر کرد. در سال ۱۴۹۸ به کالیکوت رسید.' } },
      { q: { en: 'Why did Europeans want their own sea route to India?', es: '¿Por qué los europeos querían su propia ruta por mar a la India?', fa: 'چرا اروپایی‌ها راه بحری خودشان را به هند می‌خواستند؟' },
        choices: [
          { en: 'To buy spices for less money', es: 'Para comprar especias más baratas', fa: 'تا مصاله را ارزان‌تر بخرند' },
          { en: 'To sell their own pepper to India', es: 'Para vender su propia pimienta a la India', fa: 'تا مرچ خودشان را به هند بفروشند' },
          { en: 'To find cold places to live', es: 'Para buscar lugares fríos donde vivir', fa: 'تا جاهای سرد برای زندگی پیدا کنند' },
          { en: 'To get away from the monsoon', es: 'Para escapar del monzón', fa: 'تا از باد موسمی دور شوند' }],
        answer: 0,
        why: { en: 'Spices passed through many traders, like those of Cairo and Venice. Each one raised the price.', es: 'Las especias pasaban por muchos comerciantes, como los de El Cairo y Venecia. Cada uno subía el precio.', fa: 'مصاله از دست تاجران زیادی، مثل تاجران قاهره و ونیز، می‌گذشت. هر کدام قیمت را بالا می‌بردند.' } },
      { q: { en: 'Which Swahili city-states in East Africa traded across the Indian Ocean?', es: '¿Qué ciudades-estado suajilis de África oriental comerciaban por el océano Índico?', fa: 'کدام شهرهای سواحلی افریقای شرقی از راه بحر هند تجارت می‌کردند؟' },
        choices: [
          { en: 'Kilwa and Mombasa', es: 'Kilwa y Mombasa', fa: 'کیلوا و مومباسا' },
          { en: 'Venice and Genoa', es: 'Venecia y Génova', fa: 'ونیز و جنوا' },
          { en: 'Paris and London', es: 'París y Londres', fa: 'پاریس و لندن' },
          { en: 'Cuzco and Quito', es: 'Cuzco y Quito', fa: 'کوسکو و کیتو' }],
        answer: 0,
        why: { en: 'Kilwa and Mombasa were rich Swahili ports. They traded gold and ivory for cloth and porcelain.', es: 'Kilwa y Mombasa eran ricos puertos suajilis. Cambiaban oro y marfil por telas y porcelana.', fa: 'کیلوا و مومباسا بندرهای ثروتمند سواحلی بودند. طلا و عاج را با تکه و چینی عوض می‌کردند.' } },
      { q: { en: 'How did Islam spread to many Indian Ocean ports?', es: '¿Cómo llegó el islam a muchos puertos del océano Índico?', fa: 'اسلام چطور به بندرهای زیادی در بحر هند رسید؟' },
        choices: [
          { en: 'With Muslim traders and sailors', es: 'Con comerciantes y marineros musulmanes', fa: 'با تاجران و ملاحان مسلمان' },
          { en: 'With soldiers sent from far-off China', es: 'Con soldados enviados desde la lejana China', fa: 'با سربازانی که از چین دور فرستاده شدند' },
          { en: 'With Portuguese ships in 1498', es: 'Con los barcos portugueses en 1498', fa: 'با کشتی‌های پرتگالی در سال ۱۴۹۸' },
          { en: 'With farmers who moved from Europe', es: 'Con agricultores que vinieron de Europa', fa: 'با دهقانانی که از اروپا آمدند' }],
        answer: 0,
        why: { en: 'Muslim merchants traded and settled in ports. Their faith spread from East Africa to Southeast Asia.', es: 'Los comerciantes musulmanes comerciaban y vivían en los puertos. Su fe se esparció de África oriental al sudeste de Asia.', fa: 'تاجران مسلمان در بندرها تجارت و زندگی کردند. دین‌شان از افریقای شرقی تا جنوب شرق آسیا پخش شد.' } },
      { q: { en: 'What did the Portuguese want in the Indian Ocean?', es: '¿Qué querían los portugueses en el océano Índico?', fa: 'پرتگالی‌ها در بحر هند چه می‌خواستند؟' },
        choices: [
          { en: 'To control the spice trade', es: 'Controlar el comercio de especias', fa: 'تجارت مصاله را در دست بگیرند' },
          { en: 'To share the trade with everyone', es: 'Compartir el comercio con todos', fa: 'تجارت را با همه شریک شوند' },
          { en: 'To learn how to grow rice', es: 'Aprender a sembrar arroz', fa: 'کشت برنج را یاد بگیرند' },
          { en: 'To build a new temple', es: 'Construir un templo nuevo', fa: 'یک معبد نو بسازند' }],
        answer: 0,
        why: { en: 'Portugal used warships to keep other traders out. It wanted the spice profits for itself.', es: 'Portugal usó barcos de guerra para sacar a otros comerciantes. Quería las ganancias de las especias para sí.', fa: 'پرتگال با کشتی‌های جنگی تاجران دیگر را بیرون کرد. سود مصاله را برای خودش می‌خواست.' } },
      { q: { en: 'What made Calicut a rich city?', es: '¿Qué hizo rica a Calicut?', fa: 'چه چیز کالیکوت را یک شهر ثروتمند ساخت؟' },
        choices: [
          { en: 'Trade in spices with many lands', es: 'El comercio de especias con muchas tierras', fa: 'تجارت مصاله با سرزمین‌های زیاد' },
          { en: 'Silver mines high in its mountains', es: 'Minas de plata en lo alto de sus montañas', fa: 'معدن‌های نقره بالای کوه‌هایش' },
          { en: 'Selling horses to Portugal', es: 'Vender caballos a Portugal', fa: 'فروش اسپ به پرتگال' },
          { en: 'Silver from the Americas', es: 'La plata de América', fa: 'نقرهٔ امریکا' }],
        answer: 0,
        why: { en: 'Traders from Africa, Arabia, Persia and China came to buy Calicut\'s pepper and ginger.', es: 'Comerciantes de África, Arabia, Persia y China venían a comprar la pimienta y el jengibre de Calicut.', fa: 'تاجران افریقا، عربستان، فارس و چین برای خرید مرچ و زنجبیل کالیکوت می‌آمدند.' } }
    ]
  },

  learned: [
    { en: 'The [[monsoon|monsoon]] winds carried ships across the Indian Ocean, to India and back.', es: 'Los vientos del [[monsoon|monzón]] llevaban los barcos por el océano Índico, a la India y de vuelta.', fa: 'بادهای [[monsoon|موسمی]] کشتی‌ها را از بحر هند به هند می‌بردند و برمی‌گرداندند.' },
    { en: 'Calicut traded pepper with Africa, Arabia, Persia and China. Ideas and faiths traveled too.', es: 'Calicut comerciaba pimienta con África, Arabia, Persia y China. Las ideas y las religiones también viajaban.', fa: 'کالیکوت با افریقا، عربستان، فارس و چین تجارت مرچ می‌کرد. اندیشه‌ها و دین‌ها هم سفر می‌کردند.' },
    { en: 'In 1498, Vasco da Gama reached India by sea. Portugal wanted to control the spice trade.', es: 'En 1498, Vasco da Gama llegó a la India por mar. Portugal quería controlar el comercio de especias.', fa: 'در سال ۱۴۹۸، واسکو دا گاما از راه بحر به هند رسید. پرتگال می‌خواست تجارت مصاله را در دست بگیرد.' }
  ],
  reflect: {
    q: { en: 'Think of something you own, like clothes or a phone. Where was it made? How did it reach you?', es: 'Piensa en algo tuyo, como ropa o un teléfono. ¿Dónde se hizo? ¿Cómo llegó hasta ti?', fa: 'به چیزی که داری فکر کن، مثل کالا یا موبایل. کجا ساخته شده؟ چطور به تو رسیده؟' },
    starter: { en: 'Something I own came from', es: 'Algo que tengo vino de', fa: 'چیزی که دارم از اینجا آمده:' }
  }
};
