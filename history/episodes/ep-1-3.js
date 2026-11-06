/* TIMEWALKER · Episode 1.3 · Great Empires (WHII): the Ottoman, Mughal and Ming empires
   Istanbul in 1550, capital of the Ottoman Empire under Sultan Suleiman.
   x 0: the old land walls (W). Rows 0-2: the Golden Horn (water) and its shore. Old city (x 1-21): the new
   Suleymaniye mosque going up (D, with cut stones r), Topkapi Palace (Q/h, door 16,4) and its tulip garden,
   Hagia Sophia (D, door 15,10), the Grand Bazaar (m, l), houses, and the Sea of Marmara shore (rows 19-20).
   x 22-25: the Bosphorus strait; row 15 is the ferry route (k b k). x 26-31: Uskudar, on the Asian side. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'WHII',
  title: { en: 'Great Empires', es: 'Grandes imperios', fa: 'امپراتوری‌های بزرگ' },
  place: { en: 'Istanbul, 1550', es: 'Estambul, 1550', fa: 'استانبول، ۱۵۵۰' },
  intro: [
    { en: 'The Grump blurred the [[empire|empires]] page. Istanbul is forgetting its own story!',
      es: 'El Gruñón borró la página de los [[empire|imperios]]. ¡Estambul está olvidando su propia historia!',
      fa: 'غرغرو صفحهٔ [[empire|امپراتوری‌ها]] را تار کرد. استانبول داستان خودش را فراموش می‌کند!' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Istanbul on the world map, 1550 on the timeline */
  scenes: {
    at: [28.98, 41.01],
    year: 1550,
    start: [
      { en: 'Around 1550, three great empires ruled millions of people.',
        es: 'Hacia 1550, tres grandes imperios gobernaban a millones de personas.',
        fa: 'در حدود ۱۵۵۰، سه امپراتوری بزرگ بر میلیون‌ها نفر حکومت می‌کردند.' },
      { en: 'The Ottomans ruled from Istanbul. The Mughals ruled northern India.',
        es: 'Los otomanos gobernaban desde Estambul. Los mogoles gobernaban el norte de la India.',
        fa: 'عثمانی‌ها از استانبول حکومت می‌کردند. مغل‌ها بر شمال هند حکومت می‌کردند.' },
      { en: 'The Ming emperors ruled China.',
        es: 'Los emperadores Ming gobernaban China.',
        fa: 'امپراتوران مینگ بر چین حکومت می‌کردند.' }
    ],
    page: { en: 'Istanbul is still one of the biggest cities in the world.',
      es: 'Estambul todavía es una de las ciudades más grandes del mundo.',
      fa: 'استانبول هنوز یکی از بزرگ‌ترین شهرهای جهان است.' },
    guess: {
      q: { en: 'Istanbul sits on a narrow strait. Which two continents does it touch?', es: 'Estambul está junto a un estrecho angosto. ¿Qué dos continentes toca?', fa: 'استانبول کنار یک تنگهٔ باریک است. به کدام دو قاره می‌رسد؟' },
      choices: [
        { t: { en: '🌍 Europe and Asia', es: '🌍 Europa y Asia', fa: '🌍 اروپا و آسیا' }, ok: true },
        { t: { en: '🌎 North and South America', es: '🌎 América del Norte y del Sur', fa: '🌎 امریکای شمالی و جنوبی' } }
      ],
      why: { en: 'The Bosphorus Strait splits Istanbul. One side is in Europe, the other in Asia.', es: 'El estrecho del Bósforo divide Estambul. Un lado está en Europa y el otro en Asia.', fa: 'تنگهٔ بسفر استانبول را دو بخش می‌کند. یک طرف در اروپا و طرف دیگر در آسیا است.' }
    },
    next: {
      q: { en: 'Next: ocean voyages. Did Portuguese ships sail all the way around Africa?', es: 'Ahora: viajes por el océano. ¿Los barcos portugueses le dieron la vuelta a África?', fa: 'بعدی: سفرهای بحری. آیا کشتی‌های پرتگالی دور تمام افریقا سفر کردند؟' },
      choices: [
        { t: { en: 'Yes, around Africa', es: 'Sí, rodearon África', fa: 'بله، دور افریقا' }, ok: true },
        { t: { en: 'No, over the North Pole', es: 'No, por el Polo Norte', fa: 'نه، از قطب شمال' } }
      ],
      why: { en: 'Yes. In 1498, Vasco da Gama sailed around Africa to reach India.', es: 'Sí. En 1498, Vasco da Gama rodeó África para llegar a la India.', fa: 'بله. در سال ۱۴۹۸، واسکو دا گاما دور افریقا سفر کرد تا به هند برسد.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [16, 4], name: { en: 'Nilufer', es: 'Nilüfer', fa: 'نیلوفر' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#f2f2f2', pants: '#8a2a2a', style: 'bun' },
      lines: [
        { en: 'I cook in the palace kitchens. We feed thousands of people every day!', es: 'Cocino en las cocinas del palacio. ¡Damos de comer a miles de personas cada día!', fa: 'من در آشپزخانه‌های قصر آشپزی می‌کنم. هر روز به هزاران نفر غذا می‌دهیم!' },
        { en: 'We serve food on blue and white bowls from Ming China.', es: 'Servimos la comida en tazones azules y blancos de la China Ming.', fa: 'غذا را در کاسه‌های آبی و سفید از چین مینگ می‌کشیم.' }
      ] },
    { at: [15, 10], name: { en: 'Mustafa', es: 'Mustafa', fa: 'مصطفی' },
      look: { skin: 2, hair: '#8a8a8a', shirt: '#2a5a3a', pants: '#3a3a3a', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'This is Hagia Sophia. It was a great church for almost 1,000 years.', es: 'Esta es Santa Sofía. Fue una gran iglesia durante casi 1,000 años.', fa: 'این ایاصوفیه است. نزدیک به ۱۰۰۰ سال یک کلیسای بزرگ بود.' },
        { en: 'In 1453 the Ottomans took the city. They made this building a mosque.', es: 'En 1453 los otomanos tomaron la ciudad. Convirtieron este edificio en mezquita.', fa: 'در سال ۱۴۵۳ عثمانی‌ها شهر را گرفتند. این ساختمان را مسجد ساختند.' }
      ] },
    { at: [15, 15], name: { en: 'Hatice', es: 'Hatice', fa: 'خدیجه' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#8a4ab0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I weave silk into fine cloth. The silk comes from Persia and Bursa.', es: 'Tejo seda para hacer tela fina. La seda viene de Persia y de Bursa.', fa: 'من ابریشم را به تکهٔ خوب می‌بافم. ابریشم از فارس و بورسه می‌آید.' },
        { en: 'Merchants from Venice buy our cloth and carry it to Europe.', es: 'Comerciantes de Venecia compran nuestra tela y la llevan a Europa.', fa: 'تاجران ونیز تکهٔ ما را می‌خرند و به اروپا می‌برند.' }
      ] },
    { at: [4, 18], name: { en: 'Yorgos', es: 'Yorgos', fa: 'یورگوس' },
      look: { skin: 1, hair: '#1a1208', shirt: '#2f5f9a', pants: '#3a2a1a', style: 'short', hat: '#2a2a2a' },
      lines: [
        { en: 'I am a Greek Christian. Many Greeks still live in Istanbul.', es: 'Soy un cristiano griego. Muchos griegos todavía viven en Estambul.', fa: 'من یک مسیحی یونانی هستم. یونانی‌های زیادی هنوز در استانبول زندگی می‌کنند.' },
        { en: 'Every morning I fish in the Sea of Marmara.', es: 'Cada mañana pesco en el mar de Mármara.', fa: 'هر صبح در بحیرهٔ مرمره ماهی می‌گیرم.' }
      ] },
    { at: [12, 18], name: { en: 'Judge Osman', es: 'El juez Osman', fa: 'قاضی عثمان' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#3a2a5a', pants: '#3a2a5a', robe: true, style: 'short', hat: '#f2f2f2' },
      lines: [
        { en: 'I am a judge. I use the Sultan\'s laws and Islamic law.', es: 'Soy juez. Uso las leyes del sultán y la ley islámica.', fa: 'من قاضی هستم. از قانون‌های سلطان و شریعت اسلامی کار می‌گیرم.' },
        { en: 'People of any faith may bring a problem to my court.', es: 'Personas de cualquier fe pueden traer un problema a mi tribunal.', fa: 'مردم هر دینی می‌توانند مشکل‌شان را به محکمهٔ من بیاورند.' }
      ] },
    { at: [29, 10], name: { en: 'Kemal', es: 'Kemal', fa: 'کمال' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#6a4a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This mosque is new. The Sultan\'s daughter, Mihrimah, paid for it.', es: 'Esta mezquita es nueva. La hija del sultán, Mihrimah, la pagó.', fa: 'این مسجد نو است. دختر سلطان، مهرماه، پول آن را داد.' },
        { en: 'Caravans from Persia and India stop here before they cross to Europe.', es: 'Las caravanas de Persia y la India paran aquí antes de cruzar a Europa.', fa: 'کاروان‌های فارس و هند پیش از رفتن به اروپا اینجا توقف می‌کنند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West (x 1-21): old Istanbul, in Europe. Row 7, 11 and 19: roads. The Grand Bazaar fills x 1-12, rows 12-16.
     x 22-25: the Bosphorus (~ =); the ferry crosses on row 15. East (x 26-30): Uskudar, in Asia. */
  map: [
    'W=====================~==~TTTTTT',
    'W~~~~~~~~~~~~~~~~~~~~~~==~s,...T',
    'Wsssssssssssssssssssss~==~s..,.T',
    'W.DDDDD..:....QQQQQ...~==~s....T',
    'W.DDDDD.r:....hhdhh...~==~s.T..T',
    'W.r.r....:.,.,,,.,,,,.~==~s....T',
    'W........:....,T,,T,,.~==~s.,..T',
    'W:::::::::::::::::::::~==~s....T',
    'W..x.....:............~==~s.x..T',
    'W........:...DDDDD....~==~s.DDDT',
    'W........:...DDdDD....~==~s.DdDT',
    'W:::::::::::::::::::::~==~s....T',
    'W.lllllllllll.........~==~s.,..T',
    'W.lmmlmmlmmll.........~==~s....T',
    'W.lllllllllll.RRR.....~==~s..,.T',
    'W.lmmlmmlmmll.hdh....kbbbbk....T',
    'W.lllllllllll.........~==~s....T',
    'W..RRR.....QQQ........~==~s.,..T',
    'W..hdh.....hdh........~==~s....T',
    'W:::::::::::::::::::::~==~s....T',
    'Wsssssssssssssssssssss~==~s....T',
    'W=====================~==~TTTTTT'
  ],
  start: [9, 7],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 6], at: [17, 5], decor: 'flower',
      clue: { en: 'From this note, walk 5 steps east, then 1 step north, into the palace garden.', es: 'Desde esta nota, camina 5 pasos al este y luego 1 paso al norte, al jardín del palacio.', fa: 'از این یادداشت، ۵ قدم به شرق برو، بعد ۱ قدم به شمال، داخل باغ قصر.' },
      text: { en: 'Tulips first grew wild in Central Asia. Ottoman gardeners loved them. Here is a tulip.', es: 'Los tulipanes crecían silvestres en Asia Central. A los jardineros otomanos les encantaban. Aquí tienes uno.', fa: 'گل لاله اول به شکل خودرو در آسیای میانه می‌رویید. باغبانان عثمانی آن را دوست داشتند. این یک لاله است.' } },
    { clueAt: [19, 18], at: [19, 12], decor: 'vase',
      clue: { en: 'From this note, walk 6 steps north. Stop just past the big road.', es: 'Desde esta nota, camina 6 pasos al norte. Para justo después del camino grande.', fa: 'از این یادداشت، ۶ قدم به شمال برو. کمی بعد از سرک بزرگ ایستاد شو.' },
      text: { en: 'The Sultan\'s palace kept thousands of blue and white bowls from Ming China. Here is one vase.', es: 'El palacio del sultán guardaba miles de tazones azules y blancos de la China Ming. Aquí hay un jarrón.', fa: 'قصر سلطان هزاران کاسهٔ آبی و سفید از چین مینگ داشت. این یک گلدان است.' } }
  ],

  words: {
    empire: { en: 'many lands and peoples ruled by one ruler or government', es: 'muchas tierras y pueblos gobernados por un solo gobernante o gobierno', fa: 'سرزمین‌ها و مردمان زیادی که زیر حکم یک حاکم یا حکومت هستند' },
    sultan: { en: 'the title of the ruler of the Ottoman Empire', es: 'el título del gobernante del Imperio otomano', fa: 'لقب حاکم امپراتوری عثمانی' },
    strait: { en: 'a narrow strip of water between two pieces of land', es: 'una franja angosta de agua entre dos tierras', fa: 'یک نوار باریک آب میان دو خشکه' },
    dynasty: { en: 'a family that rules a country for a long time', es: 'una familia que gobierna un país por mucho tiempo', fa: 'خانواده‌ای که مدت زیادی بر یک کشور حکومت می‌کند' },
    caravan: { en: 'a group of traders traveling together with camels or horses', es: 'un grupo de comerciantes que viajan juntos con camellos o caballos', fa: 'گروهی از تاجران که با شتر یا اسپ با هم سفر می‌کنند' },
    tax: { en: 'money people must pay to the government', es: 'dinero que la gente debe pagar al gobierno', fa: 'پولی که مردم باید به حکومت بپردازند' }
  },

  npcs: [
    {
      x: 5, y: 6,
      name: { en: 'Ali', es: 'Alí', fa: 'علی' },
      role: { en: 'Stone cutter', es: 'Cantero', fa: 'سنگ‌تراش' },
      look: { skin: 3, hair: '#1a1208', shirt: '#c8a060', pants: '#4a3a2a', style: 'short', hat: '#8a2a2a' },
      lines: [
        { en: 'Merhaba! That means hello in Turkish. I cut stone for a new mosque.', es: '¡Merhaba! Así se dice hola en turco. Corto piedra para una mezquita nueva.', fa: 'مرحبا! این در ترکی یعنی سلام. من برای یک مسجد نو سنگ می‌تراشم.' },
        { en: 'The great builder Sinan planned it. Our ruler is [[sultan|Sultan]] Suleiman.', es: 'El gran arquitecto Sinán la diseñó. Nuestro gobernante es el [[sultan|sultán]] Solimán.', fa: 'معمار بزرگ، سنان، نقشهٔ آن را کشید. حاکم ما [[sultan|سلطان]] سلیمان است.' },
        { en: 'The Ottoman [[empire|Empire]] rules lands in Europe, Asia and Africa.', es: 'El [[empire|Imperio]] otomano gobierna tierras en Europa, Asia y África.', fa: '[[empire|امپراتوری]] عثمانی بر سرزمین‌هایی در اروپا، آسیا و افریقا حکومت می‌کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'The Ottoman Empire ruled land on which continents?', es: '¿En qué continentes gobernaba tierras el Imperio otomano?', fa: 'امپراتوری عثمانی در کدام قاره‌ها زمین داشت؟' },
        choices: [
          { ok: true, t: { en: 'Europe, Asia and Africa', es: 'Europa, Asia y África', fa: 'اروپا، آسیا و افریقا' },
            why: { en: 'Yes! It ruled from southeast Europe across Southwest Asia to North Africa.', es: '¡Sí! Gobernaba desde el sureste de Europa, por el suroeste de Asia, hasta el norte de África.', fa: 'بله! از جنوب شرق اروپا تا جنوب غرب آسیا و شمال افریقا حکومت می‌کرد.' } },
          { t: { en: 'Only Europe and the Americas', es: 'Solo Europa y América', fa: 'فقط اروپا و قارهٔ امریکا' },
            why: { en: 'The Ottomans never ruled in the Americas. Their lands were in Europe, Asia and Africa.', es: 'Los otomanos nunca gobernaron en América. Sus tierras estaban en Europa, Asia y África.', fa: 'عثمانی‌ها هرگز در امریکا حکومت نکردند. سرزمین‌شان در اروپا، آسیا و افریقا بود.' } },
          { t: { en: 'Asia and Australia', es: 'Asia y Australia', fa: 'آسیا و آسترالیا' },
            why: { en: 'The Ottomans never reached Australia. They ruled in Europe, Asia and Africa.', es: 'Los otomanos nunca llegaron a Australia. Gobernaban en Europa, Asia y África.', fa: 'عثمانی‌ها هرگز به آسترالیا نرسیدند. در اروپا، آسیا و افریقا حکومت می‌کردند.' } }
        ]
      }
    },
    {
      x: 6, y: 17,
      name: { en: 'Rebeka', es: 'Rebeca', fa: 'ربکا' },
      role: { en: 'Printer', es: 'Impresora', fa: 'چاپگر' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2a6a6a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'Shalom! That means peace in Hebrew. My family prints books here.', es: '¡Shalom! Quiere decir paz en hebreo. Mi familia imprime libros aquí.', fa: 'شالوم! این در عبری یعنی صلح. خانوادهٔ من اینجا کتاب چاپ می‌کند.' },
        { en: 'In 1492, Spain forced Jews to leave. The Sultan welcomed us here.', es: 'En 1492, España obligó a los judíos a irse. El sultán nos recibió aquí.', fa: 'در سال ۱۴۹۲، هسپانیه یهودیان را مجبور به رفتن کرد. سلطان ما را اینجا پذیرفت.' },
        { en: 'Jews and Christians may keep their faith here. We pay a special [[tax|tax]].', es: 'Aquí judíos y cristianos pueden mantener su fe. Pagamos un [[tax|impuesto]] especial.', fa: 'یهودیان و مسیحیان اینجا می‌توانند دین‌شان را نگه دارند. ما یک [[tax|مالیهٔ]] خاص می‌پردازیم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How did the Ottomans treat Jews and Christians?', es: '¿Cómo trataban los otomanos a los judíos y cristianos?', fa: 'عثمانی‌ها با یهودیان و مسیحیان چطور رفتار می‌کردند؟' },
        choices: [
          { ok: true, t: { en: 'They kept their faith but paid a tax', es: 'Mantenían su fe, pero pagaban un impuesto', fa: 'دین‌شان را نگه می‌داشتند، اما مالیه می‌دادند' },
            why: { en: 'Yes. They could worship in their own way, but they paid a special tax.', es: 'Sí. Podían rezar a su manera, pero pagaban un impuesto especial.', fa: 'بله. می‌توانستند به روش خود عبادت کنند، اما یک مالیهٔ خاص می‌دادند.' } },
          { t: { en: 'They all had to become Muslim at once', es: 'Todos tenían que hacerse musulmanes enseguida', fa: 'همه باید فوراً مسلمان می‌شدند' },
            why: { en: 'No. Rebeka\'s family kept its Jewish faith. Many Greeks stayed Christian.', es: 'No. La familia de Rebeca mantuvo su fe judía. Muchos griegos siguieron siendo cristianos.', fa: 'نه. خانوادهٔ ربکا دین یهودی‌اش را نگه داشت. یونانی‌های زیادی مسیحی ماندند.' } },
          { t: { en: 'They could not live in any city', es: 'No podían vivir en ninguna ciudad', fa: 'نمی‌توانستند در هیچ شهری زندگی کنند' },
            why: { en: 'Many Jews and Christians lived and worked in Istanbul itself.', es: 'Muchos judíos y cristianos vivían y trabajaban en la misma Estambul.', fa: 'یهودیان و مسیحیان زیادی در خود استانبول زندگی و کار می‌کردند.' } }
        ]
      }
    },
    {
      x: 28, y: 13,
      name: { en: 'Farhad', es: 'Farhad', fa: 'فرهاد' },
      role: { en: 'Traveler from India', es: 'Viajero de la India', fa: 'مسافر هندی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e8c060', pants: '#f2f2f2', robe: true, style: 'short', hat: '#b03a3a' },
      lines: [
        { en: 'Salaam! I came with a [[caravan|caravan]] from the Mughal Empire, in India.', es: '¡Salam! Vine con una [[caravan|caravana]] desde el Imperio mogol, en la India.', fa: 'سلام! من با یک [[caravan|کاروان]] از امپراتوری مغل در هند آمدم.' },
        { en: 'Babur founded our empire in 1526. He came from Central Asia.', es: 'Babur fundó nuestro imperio en 1526. Vino de Asia Central.', fa: 'بابر امپراتوری ما را در سال ۱۵۲۶ بنیاد گذاشت. او از آسیای میانه آمد.' },
        { en: 'Our rulers are Muslim. Most of the people they rule are Hindu.', es: 'Nuestros gobernantes son musulmanes. La mayoría de la gente que gobiernan es hindú.', fa: 'حاکمان ما مسلمان هستند. بیشتر مردمی که بر آن‌ها حکومت می‌کنند هندو هستند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Who founded the Mughal Empire in India in 1526?', es: '¿Quién fundó el Imperio mogol en la India en 1526?', fa: 'چه کسی امپراتوری مغل را در سال ۱۵۲۶ در هند بنیاد گذاشت؟' },
        choices: [
          { ok: true, t: { en: 'Babur', es: 'Babur', fa: 'بابر' },
            why: { en: 'Yes! Babur came from Central Asia and won northern India in 1526.', es: '¡Sí! Babur vino de Asia Central y ganó el norte de la India en 1526.', fa: 'بله! بابر از آسیای میانه آمد و در سال ۱۵۲۶ شمال هند را گرفت.' } },
          { t: { en: 'Suleiman', es: 'Solimán', fa: 'سلیمان' },
            why: { en: 'Suleiman was the Ottoman Sultan in Istanbul. Babur founded the Mughal Empire.', es: 'Solimán era el sultán otomano en Estambul. Babur fundó el Imperio mogol.', fa: 'سلیمان سلطان عثمانی در استانبول بود. بابر امپراتوری مغل را بنیاد گذاشت.' } },
          { t: { en: 'Vasco da Gama', es: 'Vasco da Gama', fa: 'واسکو دا گاما' },
            why: { en: 'Vasco da Gama was a Portuguese sailor. He never ruled India.', es: 'Vasco da Gama era un marinero portugués. Nunca gobernó la India.', fa: 'واسکو دا گاما یک ملاح پرتگالی بود. هرگز بر هند حکومت نکرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 8, text: { en: 'ISTANBUL · 1550 · Capital of the Ottoman Empire, on two continents.', es: 'ESTAMBUL · 1550 · Capital del Imperio otomano, en dos continentes.', fa: 'استانبول · ۱۵۵۰ · پایتخت امپراتوری عثمانی، روی دو قاره.' } },
    { x: 28, y: 8, text: { en: 'USKUDAR · ASIA · Caravans arrive here from Persia, India and beyond.', es: 'ÜSKÜDAR · ASIA · Aquí llegan caravanas de Persia, la India y más allá.', fa: 'اسکودار · آسیا · کاروان‌ها از فارس، هند و دورتر به اینجا می‌رسند.' } }
  ],

  /* the quest: Elif the mapmaker (gold !) in the north-west -> Hasan the ferryman at the east dock -> the Ink Thief
     tore her map of three empires: the palace garden, the Grand Bazaar, then Uskudar in Asia -> back to Elif */
  quest: {
    stat: 'reg',
    title: { en: 'The Map of Three Empires', es: 'El mapa de tres imperios', fa: 'نقشهٔ سه امپراتوری' },
    giver: {
      x: 11, y: 5,
      name: { en: 'Elif', es: 'Elif', fa: 'الیف' },
      role: { en: 'Mapmaker', es: 'Cartógrafa', fa: 'نقشه‌کش' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#2f8f8f', pants: '#5a3a5a', style: 'long' },
      lines: [
        { en: 'Hello! I am Elif. I draw maps for sea captains.', es: '¡Hola! Soy Elif. Dibujo mapas para capitanes de barco.', fa: 'سلام! من الیف هستم. برای کپتان‌های کشتی نقشه می‌کشم.' },
        { en: 'My map shows three great empires: the Ottoman, the Mughal and the Ming.', es: 'Mi mapa muestra tres grandes imperios: el otomano, el mogol y el Ming.', fa: 'نقشهٔ من سه امپراتوری بزرگ را نشان می‌دهد: عثمانی، مغل و مینگ.' },
        { en: 'An Ink Thief tore it and ran! Hasan the ferryman saw him.', es: '¡Un Ladrón de Tinta lo rompió y huyó! Hasán el barquero lo vio.', fa: 'یک دزد رنگ آن را پاره کرد و فرار کرد! حسن قایق‌ران او را دید.' }
      ],
      wait: { en: 'Hasan is by the ferry dock, on the east side of the old city.', es: 'Hasán está junto al muelle del ferri, en el lado este de la ciudad vieja.', fa: 'حسن کنار بندرگاه قایق، در طرف شرق شهر کهنه است.' },
      thanks: { en: 'My map is whole again! Three empires, linked by trade. Thank you!', es: '¡Mi mapa está completo otra vez! Tres imperios unidos por el comercio. ¡Gracias!', fa: 'نقشه‌ام دوباره کامل شد! سه امپراتوری که با تجارت به هم وصل‌اند. تشکر!' }
    },
    contact: {
      x: 20, y: 14,
      name: { en: 'Hasan', es: 'Hasán', fa: 'حسن' },
      role: { en: 'Ferryman', es: 'Barquero', fa: 'قایق‌ران' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'short', hat: '#8a2a2a' },
      lines: [
        { en: 'Yes, I saw the Ink Thief! He ran off with pieces of a map.', es: '¡Sí, vi al Ladrón de Tinta! Huyó con pedazos de un mapa.', fa: 'بله، دزد رنگ را دیدم! با تکه‌های یک نقشه فرار کرد.' },
        { en: 'He left a riddle for each piece. Follow the riddles to find them!', es: 'Dejó un acertijo para cada pedazo. ¡Sigue los acertijos para encontrarlos!', fa: 'برای هر تکه یک چیستان گذاشت. چیستان‌ها را دنبال کن تا پیدایشان کنی!' }
      ]
    },
    action: {
      type: 'chase',
      at: [27, 6],
      hops: [[28, 18], [29, 3]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "I hid 3 map pieces in Istanbul. Follow my riddles!"', es: 'El Ladrón de Tinta se ríe: "Escondí 3 pedazos del mapa en Estambul. ¡Sigue mis acertijos!"', fa: 'دزد رنگ می‌خندد: «سه تکهٔ نقشه را در استانبول پنهان کردم. چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1 is where the Sultan lives. Look in the palace garden, near the tulips.', es: 'El pedazo 1 está donde vive el sultán. Busca en el jardín del palacio, cerca de los tulipanes.', fa: 'تکهٔ ۱ جایی است که سلطان زندگی می‌کند. در باغ قصر، نزدیک لاله‌ها را ببین.' },
          zones: [{ x: 14, y: 5, w: 7, h: 2 }],
          noBy: [
            { x: 1, y: 12, w: 12, h: 5, t: { en: 'This is the Grand Bazaar. Merchants work here, not the Sultan. Try the palace up north.', es: 'Este es el Gran Bazar. Aquí trabajan comerciantes, no el sultán. Busca el palacio al norte.', fa: 'این بازار بزرگ است. تاجران اینجا کار می‌کنند، نه سلطان. قصر را در شمال ببین.' } },
            { x: 12, y: 8, w: 7, h: 3, t: { en: 'This is Hagia Sophia, a mosque. The Sultan\'s palace is a little to the north.', es: 'Esta es Santa Sofía, una mezquita. El palacio del sultán está un poco al norte.', fa: 'این ایاصوفیه است، یک مسجد. قصر سلطان کمی به طرف شمال است.' } }],
          found: { en: 'Piece 1 was in the Topkapi Palace garden! The Sultan rules from here.', es: '¡El pedazo 1 estaba en el jardín del palacio de Topkapi! El sultán gobierna desde aquí.', fa: 'تکهٔ ۱ در باغ قصر توپکاپی بود! سلطان از اینجا حکومت می‌کند.' } },
        { t: { en: 'Piece 2 is where traders sell silk, spices and Chinese bowls under one roof.', es: 'El pedazo 2 está donde los comerciantes venden seda, especias y tazones chinos bajo un techo.', fa: 'تکهٔ ۲ جایی است که تاجران زیر یک سقف ابریشم، مصاله و کاسهٔ چینی می‌فروشند.' },
          zones: [{ x: 1, y: 12, w: 12, h: 5 }],
          noBy: [
            { x: 13, y: 3, w: 9, h: 4, t: { en: 'This is the palace. The traders\' market is to the southwest: the Grand Bazaar.', es: 'Este es el palacio. El mercado de los comerciantes está al suroeste: el Gran Bazar.', fa: 'این قصر است. بازار تاجران در جنوب غرب است: بازار بزرگ.' } }],
          found: { en: 'Piece 2 was in the Grand Bazaar! Goods from China, India and Persia sell here.', es: '¡El pedazo 2 estaba en el Gran Bazar! Aquí se venden productos de China, la India y Persia.', fa: 'تکهٔ ۲ در بازار بزرگ بود! اجناس چین، هند و فارس اینجا فروخته می‌شود.' } },
        { t: { en: 'Piece 3 is on another continent. Take the ferry across the [[strait|strait]] to Asia.', es: 'El pedazo 3 está en otro continente. Toma el ferri por el [[strait|estrecho]] hasta Asia.', fa: 'تکهٔ ۳ در یک قارهٔ دیگر است. با قایق از [[strait|تنگه]] به آسیا برو.' },
          zones: [{ x: 26, y: 1, w: 5, h: 20 }],
          noBy: [
            { x: 1, y: 17, w: 20, h: 4, t: { en: 'This is still Europe, by the Sea of Marmara. Asia is across the water, to the east.', es: 'Esto todavía es Europa, junto al mar de Mármara. Asia está al otro lado del agua, al este.', fa: 'اینجا هنوز اروپا است، کنار بحیرهٔ مرمره. آسیا آن طرف آب، به طرف شرق است.' } }],
          found: { en: 'Piece 3 was in Uskudar, in Asia! Istanbul sits on two continents.', es: '¡El pedazo 3 estaba en Üsküdar, en Asia! Estambul está en dos continentes.', fa: 'تکهٔ ۳ در اسکودار، در آسیا بود! استانبول روی دو قاره است.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back Elif\'s map. All 3 empires fit together!', es: '¡Te atrapé! El Ladrón de Tinta devuelve el mapa de Elif. ¡Los 3 imperios encajan!', fa: 'گرفتمت! دزد رنگ نقشهٔ الیف را پس می‌دهد. هر سه امپراتوری جور می‌شوند!' },
      item: { icon: '🗺️', name: { en: 'Elif\'s map of three empires', es: 'El mapa de tres imperios de Elif', fa: 'نقشهٔ سه امپراتوری الیف' } }
    }
  },

  scraps: [[1, 3], [30, 1], [1, 20]],
  smudges: [[10, 9], [28, 16]],

  challenge: {
    at: [18, 8],
    type: 'claim',
    stat: 'loc',
    title: { en: 'What made these empires strong?', es: '¿Qué hizo fuertes a estos imperios?', fa: 'چه چیز این امپراتوری‌ها را قوی ساخت؟' },
    intro: { en: 'The Grump says all empires are the same! Pick one empire. Back it up with two true facts.',
      es: '¡El Gruñón dice que todos los imperios son iguales! Elige un imperio. Apóyalo con dos datos verdaderos.',
      fa: 'غرغرو می‌گوید همهٔ امپراتوری‌ها یکسان‌اند! یک امپراتوری را انتخاب کن. با دو حقیقت از آن دفاع کن.' },
    options: [
      { icon: '🕌', name: { en: 'The Ottoman Empire', es: 'El Imperio otomano', fa: 'امپراتوری عثمانی' }, desc: { en: 'Capital: Istanbul. Ruler in 1550: Sultan Suleiman', es: 'Capital: Estambul. Gobernante en 1550: el sultán Solimán', fa: 'پایتخت: استانبول. حاکم در ۱۵۵۰: سلطان سلیمان' },
        result: { en: 'Yes! The Ottomans used big cannons and strong laws. Their empire lasted over 600 years.', es: '¡Sí! Los otomanos usaron cañones grandes y leyes fuertes. Su imperio duró más de 600 años.', fa: 'بله! عثمانی‌ها از توپ‌های بزرگ و قانون‌های محکم کار گرفتند. امپراتوری‌شان بیش از ۶۰۰ سال ماند.' } },
      { icon: '🐘', name: { en: 'The Mughal Empire', es: 'El Imperio mogol', fa: 'امپراتوری مغل' }, desc: { en: 'Northern India. Founded by Babur in 1526', es: 'Norte de la India. Fundado por Babur en 1526', fa: 'شمال هند. بنیادگذار: بابر، در ۱۵۲۶' },
        result: { en: 'Yes! The Mughals won with guns and cannons. Later, they built the Taj Mahal.', es: '¡Sí! Los mogoles ganaron con armas de fuego y cañones. Después construyeron el Taj Mahal.', fa: 'بله! مغل‌ها با تفنگ و توپ پیروز شدند. بعدها تاج‌محل را ساختند.' } },
      { icon: '🏯', name: { en: 'The Ming Dynasty of China', es: 'La dinastía Ming de China', fa: 'دودمان مینگ چین' }, desc: { en: 'Capital: Beijing. Ruled China from 1368', es: 'Capital: Pekín. Gobernó China desde 1368', fa: 'پایتخت: پکن. از ۱۳۶۸ بر چین حکومت کرد' },
        result: { en: 'Yes! Ming officials passed hard exams. Most of the Great Wall you see today is Ming work.', es: '¡Sí! Los funcionarios Ming aprobaban exámenes difíciles. Casi toda la Gran Muralla de hoy es obra Ming.', fa: 'بله! مأموران مینگ امتحان‌های سخت می‌دادند. بیشتر دیوار بزرگ امروز کار مینگ است.' } }
    ],
    kinds: [
      { id: 'land', label: { en: 'Where it ruled', es: 'Dónde gobernaba', fa: 'کجا حکومت می‌کرد' } },
      { id: 'power', label: { en: 'How it grew strong', es: 'Cómo se hizo fuerte', fa: 'چطور قوی شد' } }
    ],
    reasons: [
      { kind: 'land', fits: [0], t: { en: 'It held Istanbul, where Europe meets Asia', es: 'Tenía Estambul, donde Europa se une con Asia', fa: 'استانبول را داشت، جایی که اروپا به آسیا می‌رسد' },
        why: { en: 'Only the Ottoman Empire ruled from Istanbul.', es: 'Solo el Imperio otomano gobernaba desde Estambul.', fa: 'فقط امپراتوری عثمانی از استانبول حکومت می‌کرد.' } },
      { kind: 'land', fits: [1], t: { en: 'It ruled the north of India', es: 'Gobernaba el norte de la India', fa: 'بر شمال هند حکومت می‌کرد' },
        why: { en: 'Only the Mughal Empire ruled northern India.', es: 'Solo el Imperio mogol gobernaba el norte de la India.', fa: 'فقط امپراتوری مغل بر شمال هند حکومت می‌کرد.' } },
      { kind: 'land', fits: [2], t: { en: 'It ruled China, from the city of Beijing', es: 'Gobernaba China desde la ciudad de Pekín', fa: 'از شهر پکن بر چین حکومت می‌کرد' },
        why: { en: 'Only the Ming ruled China from Beijing.', es: 'Solo los Ming gobernaban China desde Pekín.', fa: 'فقط مینگ از پکن بر چین حکومت می‌کرد.' } },
      { kind: 'land', fits: [], t: { en: 'It ruled all of South America', es: 'Gobernaba toda América del Sur', fa: 'بر تمام امریکای جنوبی حکومت می‌کرد' },
        why: { en: 'None of these empires ruled South America. Spain and Portugal took land there.', es: 'Ninguno de estos imperios gobernó América del Sur. España y Portugal tomaron tierras allí.', fa: 'هیچ کدام از این امپراتوری‌ها بر امریکای جنوبی حکومت نکرد. هسپانیه و پرتگال آنجا زمین گرفتند.' } },
      { kind: 'power', fits: [0], t: { en: 'Its army took Constantinople in 1453 with huge cannons', es: 'Su ejército tomó Constantinopla en 1453 con cañones enormes', fa: 'لشکرش در سال ۱۴۵۳ با توپ‌های بسیار بزرگ قسطنطنیه را گرفت' },
        why: { en: 'That was the Ottoman army. The city became Istanbul, their capital.', es: 'Ese fue el ejército otomano. La ciudad se volvió Estambul, su capital.', fa: 'آن لشکر عثمانی بود. شهر استانبول، پایتخت آن‌ها شد.' } },
      { kind: 'power', fits: [1], t: { en: 'Babur won with guns and cannons in 1526', es: 'Babur ganó con armas de fuego y cañones en 1526', fa: 'بابر در سال ۱۵۲۶ با تفنگ و توپ پیروز شد' },
        why: { en: 'Babur founded the Mughal Empire, not this one.', es: 'Babur fundó el Imperio mogol, no este.', fa: 'بابر امپراتوری مغل را بنیاد گذاشت، نه این یکی را.' } },
      { kind: 'power', fits: [2], t: { en: 'Its officials passed hard exams, and it rebuilt the Great Wall', es: 'Sus funcionarios aprobaban exámenes difíciles, y reconstruyó la Gran Muralla', fa: 'مأمورانش امتحان‌های سخت می‌دادند و دیوار بزرگ را دوباره ساخت' },
        why: { en: 'Exams and the Great Wall belong to Ming China.', es: 'Los exámenes y la Gran Muralla son de la China Ming.', fa: 'امتحان‌ها و دیوار بزرگ مال چین مینگ است.' } },
      { kind: 'power', fits: [], t: { en: 'It had no army and no laws at all', es: 'No tenía ejército ni leyes', fa: 'هیچ لشکر و قانونی نداشت' },
        why: { en: 'Every great empire had armies and laws. That is how they held their land.', es: 'Todo gran imperio tenía ejércitos y leyes. Así mantenían sus tierras.', fa: 'هر امپراتوری بزرگ لشکر و قانون داشت. با آن‌ها سرزمین‌شان را نگه می‌داشتند.' } }
    ],
    mismatch: { en: 'That fact is true, but not for the empire you picked.', es: 'Ese dato es verdad, pero no para el imperio que elegiste.', fa: 'این حقیقت درست است، اما نه برای امپراتوری‌ای که انتخاب کردی.' },
    success: { en: 'Three empires, three ways to grow strong! Each one ruled millions of people.', es: '¡Tres imperios, tres formas de hacerse fuertes! Cada uno gobernaba a millones de personas.', fa: 'سه امپراتوری، سه راه قوی شدن! هر کدام بر میلیون‌ها نفر حکومت می‌کرد.' }
  },

  boss: {
    at: [6, 19],
    stat: 'reg',
    need: 3,
    name: { en: 'The Crumbling Grump', es: 'El Gruñón Desmoronado', fa: 'غرغروی فروریخته' },
    appear: { en: 'The Crumbling Grump is hiding in the fog by the Sea of Marmara!', es: '¡El Gruñón Desmoronado se esconde en la niebla junto al mar de Mármara!', fa: 'غرغروی فروریخته در مه کنار بحیرهٔ مرمره پنهان است!' },
    taunt: { en: 'Empires rise and fall. Soon no one will remember any of them!', es: 'Los imperios suben y caen. ¡Pronto nadie recordará a ninguno!', fa: 'امپراتوری‌ها بالا می‌روند و می‌افتند. به زودی هیچ کس هیچ کدام را به یاد نمی‌آورد!' },
    win: { en: 'The fog lifts over the Bosphorus. Chronicle page 1.3 floats down into your hands!', es: 'La niebla se levanta sobre el Bósforo. ¡La página 1.3 de la crónica cae en tus manos!', fa: 'مه از روی بسفر بلند می‌شود. صفحهٔ ۱.۳ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Istanbul sits on which two continents?', es: '¿En qué dos continentes está Estambul?', fa: 'استانبول روی کدام دو قاره است؟' },
        choices: [
          { en: 'Europe and Asia', es: 'Europa y Asia', fa: 'اروپا و آسیا' },
          { en: 'Africa and Asia', es: 'África y Asia', fa: 'افریقا و آسیا' },
          { en: 'Europe and Africa', es: 'Europa y África', fa: 'اروپا و افریقا' },
          { en: 'Asia and Australia', es: 'Asia y Australia', fa: 'آسیا و آسترالیا' }],
        answer: 0,
        why: { en: 'The Bosphorus Strait runs through Istanbul. Uskudar is in Asia; the old city is in Europe.', es: 'El estrecho del Bósforo pasa por Estambul. Üsküdar está en Asia; la ciudad vieja, en Europa.', fa: 'تنگهٔ بسفر از میان استانبول می‌گذرد. اسکودار در آسیا و شهر کهنه در اروپا است.' } },
      { q: { en: 'Who ruled the Ottoman Empire in 1550?', es: '¿Quién gobernaba el Imperio otomano en 1550?', fa: 'در سال ۱۵۵۰ چه کسی بر امپراتوری عثمانی حکومت می‌کرد؟' },
        choices: [
          { en: 'Sultan Suleiman', es: 'El sultán Solimán', fa: 'سلطان سلیمان' },
          { en: 'Emperor Babur', es: 'El emperador Babur', fa: 'امپراتور بابر' },
          { en: 'King Ferdinand', es: 'El rey Fernando', fa: 'پادشاه فردیناند' },
          { en: 'Admiral Zheng He', es: 'El almirante Zheng He', fa: 'امیرالبحر ژنگ هه' }],
        answer: 0,
        why: { en: 'Suleiman ruled from 1520 to 1566. People called him the Lawgiver and the Magnificent.', es: 'Solimán gobernó de 1520 a 1566. Lo llamaban el Legislador y el Magnífico.', fa: 'سلیمان از ۱۵۲۰ تا ۱۵۶۶ حکومت کرد. مردم او را قانونی و باشکوه می‌گفتند.' } },
      { q: { en: 'What happened to Constantinople in 1453?', es: '¿Qué le pasó a Constantinopla en 1453?', fa: 'در سال ۱۴۵۳ بر سر قسطنطنیه چه آمد؟' },
        choices: [
          { en: 'The Ottomans took it', es: 'Los otomanos la tomaron', fa: 'عثمانی‌ها آن را گرفتند' },
          { en: 'Spain bought it', es: 'España la compró', fa: 'هسپانیه آن را خرید' },
          { en: 'A flood destroyed it', es: 'Una inundación la destruyó', fa: 'سیلاب آن را ویران کرد' },
          { en: 'Mongols burned it down', es: 'Los mongoles la quemaron', fa: 'مغول‌ها آن را آتش زدند' }],
        answer: 0,
        why: { en: 'The Ottoman army took the city with huge cannons. It became their capital, Istanbul.', es: 'El ejército otomano tomó la ciudad con cañones enormes. Se volvió su capital, Estambul.', fa: 'لشکر عثمانی با توپ‌های بزرگ شهر را گرفت. پایتخت‌شان، استانبول، شد.' } },
      { q: { en: 'Why did many Jews move to the Ottoman Empire after 1492?', es: '¿Por qué muchos judíos se mudaron al Imperio otomano después de 1492?', fa: 'چرا بعد از ۱۴۹۲ یهودیان زیادی به امپراتوری عثمانی رفتند؟' },
        choices: [
          { en: 'Spain forced them out; the Sultan let them in', es: 'España los echó y el sultán los recibió', fa: 'هسپانیه بیرون‌شان کرد و سلطان پذیرفت‌شان' },
          { en: 'The Sultan made them move there from India', es: 'El sultán los obligó a venir desde la India', fa: 'سلطان آن‌ها را مجبور کرد از هند بیایند' },
          { en: 'They wanted a sea road to the Americas', es: 'Querían un camino por mar a América', fa: 'راه بحری به امریکا می‌خواستند' },
          { en: 'A big storm blew their ships to Istanbul', es: 'Una gran tormenta llevó sus barcos a Estambul', fa: 'یک توفان بزرگ کشتی‌هایشان را به استانبول برد' }],
        answer: 0,
        why: { en: 'In 1492 Spain forced Jews to leave. The Ottoman Sultan welcomed many of them.', es: 'En 1492 España obligó a los judíos a irse. El sultán otomano recibió a muchos.', fa: 'در سال ۱۴۹۲ هسپانیه یهودیان را مجبور به رفتن کرد. سلطان عثمانی بسیاری از آن‌ها را پذیرفت.' } },
      { q: { en: 'Most people in the Mughal Empire were Hindu. What faith were its rulers?', es: 'La mayoría en el Imperio mogol era hindú. ¿Qué fe tenían sus gobernantes?', fa: 'بیشتر مردم امپراتوری مغل هندو بودند. حاکمانش چه دینی داشتند؟' },
        choices: [
          { en: 'Muslim', es: 'Musulmana', fa: 'اسلام' },
          { en: 'Christian', es: 'Cristiana', fa: 'مسیحیت' },
          { en: 'Jewish', es: 'Judía', fa: 'یهودیت' },
          { en: 'Buddhist', es: 'Budista', fa: 'بودایی' }],
        answer: 0,
        why: { en: 'The Mughal rulers were Muslim. They ruled over many millions of Hindus.', es: 'Los gobernantes mogoles eran musulmanes. Gobernaban a muchos millones de hindúes.', fa: 'حاکمان مغل مسلمان بودند. بر میلیون‌ها هندو حکومت می‌کردند.' } },
      { q: { en: 'Which dynasty ruled China in 1550?', es: '¿Qué dinastía gobernaba China en 1550?', fa: 'در سال ۱۵۵۰ کدام دودمان بر چین حکومت می‌کرد؟' },
        choices: [
          { en: 'The Ming', es: 'Los Ming', fa: 'مینگ' },
          { en: 'The Ottomans', es: 'Los otomanos', fa: 'عثمانی‌ها' },
          { en: 'The Mughals', es: 'Los mogoles', fa: 'مغل‌ها' },
          { en: 'The Aztecs', es: 'Los aztecas', fa: 'ازتک‌ها' }],
        answer: 0,
        why: { en: 'The Ming dynasty ruled China from 1368 to 1644.', es: 'La dinastía Ming gobernó China de 1368 a 1644.', fa: 'دودمان مینگ از ۱۳۶۸ تا ۱۶۴۴ بر چین حکومت کرد.' } },
      { q: { en: 'Why did the Ming rebuild the Great Wall?', es: '¿Por qué los Ming reconstruyeron la Gran Muralla?', fa: 'چرا مینگ دیوار بزرگ را دوباره ساخت؟' },
        choices: [
          { en: 'To stop northern raiders', es: 'Para frenar a los invasores del norte', fa: 'تا جلوی حمله‌کنندگان شمال را بگیرد' },
          { en: 'To hold back floods from the sea', es: 'Para detener las inundaciones del mar', fa: 'تا جلوی سیلاب بحر را بگیرد' },
          { en: 'To keep the Ottomans out', es: 'Para no dejar entrar a los otomanos', fa: 'تا عثمانی‌ها را بیرون نگه دارد' },
          { en: 'To mark a road to India', es: 'Para marcar un camino a la India', fa: 'تا راهی به هند را نشان دهد' }],
        answer: 0,
        why: { en: 'Mongol riders from the north attacked China. The Ming built strong stone walls against them.', es: 'Jinetes mongoles del norte atacaban China. Los Ming hicieron murallas fuertes de piedra contra ellos.', fa: 'سواران مغول از شمال به چین حمله می‌کردند. مینگ در برابر آن‌ها دیوارهای محکم سنگی ساخت.' } },
      { q: { en: 'How did Ming China choose many of its officials?', es: '¿Cómo elegía la China Ming a muchos de sus funcionarios?', fa: 'چین مینگ بسیاری از مأمورانش را چطور انتخاب می‌کرد؟' },
        choices: [
          { en: 'With hard exams', es: 'Con exámenes difíciles', fa: 'با امتحان‌های سخت' },
          { en: 'By a vote of the people', es: 'Con el voto del pueblo', fa: 'با رأی مردم' },
          { en: 'By a horse race', es: 'Con una carrera de caballos', fa: 'با مسابقهٔ اسپ' },
          { en: 'By picking the richest', es: 'Eligiendo a los más ricos', fa: 'با انتخاب ثروتمندترین‌ها' }],
        answer: 0,
        why: { en: 'Men studied for years to pass exams on the ideas of Confucius. The best became officials.', es: 'Los hombres estudiaban años para aprobar exámenes sobre las ideas de Confucio. Los mejores eran funcionarios.', fa: 'مردان سال‌ها درس می‌خواندند تا امتحان اندیشه‌های کنفوسیوس را بدهند. بهترین‌ها مأمور می‌شدند.' } }
    ]
  },

  learned: [
    { en: 'The Ottoman [[empire|Empire]] ruled from Istanbul, on two continents. [[sultan|Sultan]] Suleiman made its laws.', es: 'El [[empire|Imperio]] otomano gobernaba desde Estambul, en dos continentes. El [[sultan|sultán]] Solimán hizo sus leyes.', fa: '[[empire|امپراتوری]] عثمانی از استانبول، روی دو قاره، حکومت می‌کرد. [[sultan|سلطان]] سلیمان قانون‌هایش را ساخت.' },
    { en: 'The Mughal Empire ruled northern India. Its Muslim rulers governed many millions of Hindus.', es: 'El Imperio mogol gobernaba el norte de la India. Sus gobernantes musulmanes gobernaban a millones de hindúes.', fa: 'امپراتوری مغل بر شمال هند حکومت می‌کرد. حاکمان مسلمانش بر میلیون‌ها هندو حکومت می‌کردند.' },
    { en: 'The Ming [[dynasty|dynasty]] ruled China. Officials passed hard exams, and the Great Wall was rebuilt.', es: 'La [[dynasty|dinastía]] Ming gobernaba China. Los funcionarios aprobaban exámenes difíciles, y se reconstruyó la Gran Muralla.', fa: '[[dynasty|دودمان]] مینگ بر چین حکومت می‌کرد. مأموران امتحان‌های سخت می‌دادند و دیوار بزرگ دوباره ساخته شد.' }
  ],
  reflect: {
    q: { en: 'Big empires had people of many faiths and languages. How do different groups get along at your school?', es: 'Los grandes imperios tenían gente de muchas religiones e idiomas. ¿Cómo conviven los distintos grupos en tu escuela?', fa: 'امپراتوری‌های بزرگ مردمی با دین‌ها و زبان‌های زیاد داشتند. در مکتب تو گروه‌های مختلف چطور با هم کنار می‌آیند؟' },
    starter: { en: 'At my school, people from different groups', es: 'En mi escuela, la gente de distintos grupos', fa: 'در مکتب من، مردم گروه‌های مختلف' }
  }
};
