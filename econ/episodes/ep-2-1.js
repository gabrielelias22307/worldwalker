/* COINWALKER · Episode 2.1 · Money and Its Uses (barter, the 3 uses of money, its 6 traits, kinds of money)
   Mint Town (a MADE-UP town) today: the Mint Town Money Museum and the old market street in front of it.
   North: the museum (J) with 4 room doors in a row (the Barter Room, the Shells and Salt Room, the Coin Room,
   the Bills and Cards Room) and the paved museum plaza (l) with its fountain (O).
   Row 11 is the old market street. South of it: market stalls (m), a small cafe and a bike shop, then the town park
   with a community garden (o), a beekeeper's stall, flowers and a dirt path loop.
   People show barter and its problem, the kinds of money and the 6 traits of good money; the quest is a
   barter trade (the broom maker does not want eggs); the ledger stone asks the student to carry each card to
   Medium of exchange, Unit of account or Store of value. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'EPF',
  title: { en: 'Money and Its Uses', es: 'El dinero y sus usos', fa: 'پول و کاربردهای آن' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Mint Town Money Museum, today', es: 'Museo del Dinero de Mint Town, hoy', fa: 'موزیم پول شهر مینت، امروز' },
  intro: [
    { en: 'The Grump tore the page about money. Now people forget why we use it.',
      es: 'El Gruñón rompió la página sobre el dinero. Ahora la gente olvida por qué lo usamos.',
      fa: 'غرغرو صفحهٔ پول را پاره کرد. حالا مردم فراموش می‌کنند چرا از پول کار می‌گیریم.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town, placed in central Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-77.43, 37.54],
    start: [
      { en: 'Mint Town is a made-up town. Its museum shows money through time.',
        es: 'Mint Town es un pueblo inventado. Su museo muestra el dinero a través del tiempo.',
        fa: 'شهر مینت یک شهر خیالی است. موزیمش پول را در طول زمان نشان می‌دهد.' },
      { en: 'Long ago, many people traded goods with no money at all.',
        es: 'Hace mucho tiempo, mucha gente cambiaba bienes sin nada de dinero.',
        fa: 'در زمان‌های قدیم، مردم زیاد کالا را بدون هیچ پول عوض می‌کردند.' },
      { en: 'Today, many people pay with coins, bills, cards and phones.',
        es: 'Hoy, mucha gente paga con monedas, billetes, tarjetas y teléfonos.',
        fa: 'امروز، مردم زیاد با سکه، نوت، کارت و تیلفون پول می‌پردازند.' }
    ],
    page: { en: 'Cowrie shells were once used as money in parts of Africa and Asia.',
      es: 'Las conchas de cauri se usaron como dinero en partes de África y Asia.',
      fa: 'صدف‌های کوری زمانی در بخش‌هایی از افریقا و آسیا پول بودند.' },
    guess: {
      q: { en: 'Can a small seashell be money?', es: '¿Una conchita de mar puede ser dinero?', fa: 'آیا یک صدف کوچک بحری پول شده می‌تواند؟' },
      choices: [
        { t: { en: '🐚 Yes, if people accept it', es: '🐚 Sí, si la gente la acepta', fa: '🐚 بله، اگر مردم قبولش کنند' }, ok: true },
        { t: { en: '🙅 No, only paper is money', es: '🙅 No, solo el papel es dinero', fa: '🙅 نه، فقط کاغذ پول است' } }
      ],
      why: { en: 'Money is anything people accept for trade. Shells, salt and coins have all been money.', es: 'El dinero es cualquier cosa que la gente acepta para cambiar. Conchas, sal y monedas fueron dinero.', fa: 'پول هر چیزی است که مردم برای تبادله قبول کنند. صدف، نمک و سکه همه پول بوده‌اند.' }
    },
    next: {
      q: { en: 'Next: where do banks keep money safe, and who watches over banks?', es: 'Ahora: ¿dónde guardan los bancos el dinero seguro, y quién vigila a los bancos?', fa: 'بعدی: بانک‌ها پول را کجا امن نگه می‌دارند، و کی از بانک‌ها نظارت می‌کند؟' },
      choices: [
        { t: { en: '🏦 The government checks banks', es: '🏦 El gobierno revisa los bancos', fa: '🏦 حکومت بانک‌ها را بررسی می‌کند' }, ok: true },
        { t: { en: '🤷 No one checks banks', es: '🤷 Nadie revisa los bancos', fa: '🤷 هیچ کس بانک‌ها را بررسی نمی‌کند' } }
      ],
      why: { en: 'Banks keep records of every account. Government groups watch banks to keep money safe.', es: 'Los bancos registran cada cuenta. Grupos del gobierno vigilan a los bancos para cuidar el dinero.', fa: 'بانک‌ها از هر حساب ثبت دارند. ادارات حکومت بانک‌ها را می‌پایند تا پول امن بماند.' }
    }
  },
  /* houses: the 4 museum rooms, the cafe and the bike shop; walk in and talk */
  houses: [
    { at: [4, 3], name: { en: 'Mr. Bello', es: 'Sr. Bello', fa: 'آقای بیلو' },
      look: { skin: 4, hair: '#1a1008', shirt: '#7a5a2a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Welcome to the Barter Room. I keep this room for the museum.', es: 'Bienvenido a la Sala del Trueque. Yo cuido esta sala del museo.', fa: 'به اتاق تبادلهٔ جنس خوش آمدی. من این اتاق موزیم را نگه می‌دارم.' },
        { en: 'In [[barter|barter]], you trade goods for goods. No money at all.', es: 'En el [[barter|trueque]], cambias bienes por bienes. Nada de dinero.', fa: 'در [[barter|تبادلهٔ جنس]]، کالا را در بدل کالا می‌دهی. هیچ پول نیست.' },
        { en: 'A cow for a cart? Fine. But a cow for one egg? Hard!', es: '¿Una vaca por una carreta? Bien. ¿Pero una vaca por un huevo? ¡Difícil!', fa: 'یک گاو در بدل یک گادی؟ خوب. اما یک گاو در بدل یک تخم؟ مشکل!' }
      ] },
    { at: [10, 3], name: { en: 'Ms. Tran', es: 'Sra. Tran', fa: 'خانم ترن' },
      look: { skin: 1, hair: '#120c08', shirt: '#3a8aa0', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is the Shells and Salt Room. These were money once.', es: 'Esta es la Sala de Conchas y Sal. Esto fue dinero alguna vez.', fa: 'این اتاق صدف و نمک است. اینها زمانی پول بودند.' },
        { en: 'Cowrie shells were money in parts of Africa and Asia.', es: 'Las conchas de cauri fueron dinero en partes de África y Asia.', fa: 'صدف‌های کوری در بخش‌هایی از افریقا و آسیا پول بودند.' },
        { en: 'Salt was traded as money in some places. It had value itself.', es: 'La sal se usó como dinero en algunos lugares. Tenía valor por sí misma.', fa: 'نمک در بعضی جاها مثل پول تبادله می‌شد. خودش ارزش داشت.' }
      ] },
    { at: [16, 3], name: { en: 'Mr. Kowalski', es: 'Sr. Kowalski', fa: 'آقای کوالسکی' },
      look: { skin: 0, hair: '#d8d8d8', shirt: '#c0a040', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome to the Coin Room. Metal coins last a very long time.', es: 'Bienvenido a la Sala de Monedas. Las monedas de metal duran mucho.', fa: 'به اتاق سکه خوش آمدی. سکه‌های فلزی خیلی زیاد دوام می‌کنند.' },
        { en: 'Every coin of one kind looks the same. Money should be [[uniform|uniform]].', es: 'Cada moneda de un tipo se ve igual. El dinero debe ser [[uniform|uniforme]].', fa: 'هر سکهٔ یک نوع یکسان است. پول باید [[uniform|یکسان]] باشد.' },
        { en: 'Long ago, some coins were made of gold or silver.', es: 'Hace mucho, algunas monedas eran de oro o de plata.', fa: 'در زمان‌های قدیم، بعضی سکه‌ها از طلا یا نقره بودند.' }
      ] },
    { at: [22, 3], name: { en: 'Ms. Moreno', es: 'Sra. Moreno', fa: 'خانم مورینو' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a7a3a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'This is the Bills and Cards Room. Paper money is light to carry.', es: 'Esta es la Sala de Billetes y Tarjetas. El papel moneda pesa poco.', fa: 'این اتاق نوت و کارت است. پول کاغذی برای بردن سبک است.' },
        { en: 'Once, some paper bills could be traded for gold or silver.', es: 'Antes, algunos billetes se podían cambiar por oro o plata.', fa: 'زمانی، بعضی نوت‌ها را می‌شد در بدل طلا یا نقره عوض کرد.' },
        { en: 'Cards and phones do not hold money. They move money from an account.', es: 'Las tarjetas y teléfonos no guardan dinero. Mueven dinero de una cuenta.', fa: 'کارت و تیلفون پول را نگه نمی‌دارند. پول را از یک حساب انتقال می‌دهند.' }
      ] },
    { at: [21, 13], name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      look: { skin: 4, hair: '#120c08', shirt: '#c04a3a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I am the cashier at this cafe. Look at our menu board.', es: 'Soy la cajera de este café. Mira nuestro menú.', fa: 'من صندوق‌دار این کافه هستم. به تختهٔ مینوی ما نگاه کن.' },
        { en: 'Soup is $4. A sandwich is $6. You can compare them fast.', es: 'La sopa cuesta $4. Un sándwich, $6. Puedes compararlos rápido.', fa: 'شوروا ۴ دالر است. ساندویچ ۶ دالر. زود آنها را مقایسه کرده می‌توانی.' },
        { en: 'Prices in dollars measure value. That is a [[unit of account|unit of account]].', es: 'Los precios en dólares miden el valor. Eso es una [[unit of account|unidad de cuenta]].', fa: 'قیمت به دالر ارزش را اندازه می‌کند. این [[unit of account|واحد حساب]] است.' }
      ] },
    { at: [27, 13], name: { en: 'Mr. Haddad', es: 'Sr. Haddad', fa: 'آقای حداد' },
      look: { skin: 2, hair: '#2a2a2a', shirt: '#2f5f9a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I fix bikes. A bike part used to be traded for a sack of potatoes.', es: 'Arreglo bicicletas. Antes, una pieza se cambiaba por un saco de papas.', fa: 'من بایسکل جور می‌کنم. پیش‌تر، یک پرزه را در بدل یک بوجی کچالو می‌دادند.' },
        { en: 'Potatoes go bad in a few weeks. Dollars do not.', es: 'Las papas se dañan en unas semanas. Los dólares no.', fa: 'کچالو در چند هفته خراب می‌شود. دالر نمی‌شود.' },
        { en: 'I save dollars for a new tool. Money is a [[store of value|store of value]].', es: 'Ahorro dólares para una herramienta nueva. El dinero es un [[store of value|depósito de valor]].', fa: 'من برای یک ابزار نو دالر پس‌انداز می‌کنم. پول [[store of value|ذخیرهٔ ارزش]] است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-3): the Mint Town Money Museum (J) with 4 room doors on row 3.
     y 5-9: the museum plaza (l) with the fountain (O); the 3 carry areas sit on the plaza.
     Row 11: the old market street (l). Row 12-13: market stalls (m), the cafe (R over h) and the bike shop (Q over h).
     South: the town park with a row of trees, the community garden (o), flowers (,), the beekeeper's stall (m)
     in the south-west and a dirt path loop (:) around the ledger stone. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJJJJJJJJJJJJJJJJJJJJJJ.T',
    'T.JJJJJJJJJJJJJJJJJJJJJJJJJJJJ.T',
    'T.hhdhhhhhdhhhhhdhhhhhdhhhhhhh.T',
    'T..............................T',
    'T.xllllllllllllllllllllllllll..T',
    'T..llllllllllllllllllllllllll..T',
    'T..llllllllllllllllllllllllll..T',
    'T..llllllllllllOlllllllllllll..T',
    'T..llllllllllllllllllllllllll..T',
    'T.T..........x...............T.T',
    'TllllllllllllllllllllllllllllllT',
    'T..mm..mm..mm.......RRR...QQQ..T',
    'T...................hdh...hdh..T',
    'T........TTTTTT................T',
    'T.,,......oooo.::::::::::::.T..T',
    'T.,,...T..oooo.:......,,,......T',
    'T.........oooo.:......,,,......T',
    'T......T.......:.............x.T',
    'T.m...TT.......::::::::::::....T',
    'T....T..............T..........T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [18, 8],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [5, 9], at: [5, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps north, toward the museum doors.', es: 'Desde esta nota, camina 5 pasos al norte, hacia las puertas del museo.', fa: 'از این یادداشت، ۵ قدم به شمال برو، به طرف دروازه‌های موزیم.' },
      text: { en: 'An old coin! Metal coins are durable. They can last for hundreds of years.', es: '¡Una moneda antigua! Las monedas de metal son duraderas. Pueden durar cientos de años.', fa: 'یک سکهٔ قدیمی! سکهٔ فلزی بادوام است. صدها سال دوام کرده می‌تواند.' } },
    { clueAt: [25, 20], at: [29, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, along the edge of the park.', es: 'Desde esta nota, camina 4 pasos al este, por el borde del parque.', fa: 'از این یادداشت، ۴ قدم به شرق برو، در کنار پارک.' },
      text: { en: 'A small shell! Shells were commodity money: things with value of their own.', es: '¡Una conchita! Las conchas fueron dinero mercancía: cosas con valor propio.', fa: 'یک صدف کوچک! صدف پول جنسی بود: چیزی که خودش ارزش دارد.' } }
  ],

  words: {
    barter: { en: 'trading goods or services for other goods or services, with no money', es: 'cambiar bienes o servicios por otros bienes o servicios, sin dinero', fa: 'عوض کردن کالا یا خدمت در بدل کالا یا خدمت دیگر، بدون پول' },
    'double coincidence of wants': { en: 'in barter, both people must want what the other one has', es: 'en el trueque, las dos personas deben querer lo que la otra tiene', fa: 'در تبادلهٔ جنس، هر دو نفر باید چیزی را بخواهند که دیگری دارد' },
    money: { en: 'anything people accept in trade for goods and services', es: 'cualquier cosa que la gente acepta a cambio de bienes y servicios', fa: 'هر چیزی که مردم در بدل کالا و خدمات قبول می‌کنند' },
    'medium of exchange': { en: 'money is used to buy and sell things', es: 'el dinero se usa para comprar y vender cosas', fa: 'پول برای خرید و فروش چیزها به کار می‌رود' },
    'unit of account': { en: 'money is a way to measure and compare value, like prices', es: 'el dinero es una forma de medir y comparar el valor, como los precios', fa: 'پول راهی برای اندازه و مقایسهٔ ارزش است، مثل قیمت‌ها' },
    'store of value': { en: 'money keeps its value, so you can use it later', es: 'el dinero guarda su valor, así que puedes usarlo después', fa: 'پول ارزشش را نگه می‌دارد، پس بعداً از آن کار گرفته می‌توانی' },
    durable: { en: 'lasts a long time and does not break or go bad', es: 'dura mucho tiempo y no se rompe ni se daña', fa: 'زیاد دوام می‌کند و نمی‌شکند یا خراب نمی‌شود' },
    portable: { en: 'easy to carry with you', es: 'fácil de llevar contigo', fa: 'آسان برای همراه بردن' },
    divisible: { en: 'can be split into smaller amounts, like a dollar into coins', es: 'se puede dividir en partes pequeñas, como un dólar en monedas', fa: 'به مقدارهای کوچک تقسیم شده می‌تواند، مثل یک دالر به سکه‌ها' },
    uniform: { en: 'every piece of one kind is the same', es: 'cada pieza de un tipo es igual', fa: 'هر دانهٔ یک نوع یکسان است' },
    'limited supply': { en: 'there is not too much of it, so it keeps its value', es: 'no hay demasiado, así que guarda su valor', fa: 'زیاد از حد نیست، پس ارزشش را نگه می‌دارد' },
    acceptable: { en: 'people agree to take it as payment', es: 'la gente acepta recibirlo como pago', fa: 'مردم قبول می‌کنند آن را به عنوان پرداخت بگیرند' },
    'commodity money': { en: 'money that has value itself, like salt, gold or shells', es: 'dinero que tiene valor por sí mismo, como la sal, el oro o las conchas', fa: 'پولی که خودش ارزش دارد، مثل نمک، طلا یا صدف' },
    'representative money': { en: 'paper that could be traded for something of value, like gold', es: 'papel que se podía cambiar por algo de valor, como el oro', fa: 'کاغذی که می‌شد در بدل چیز باارزش، مثل طلا، عوض کرد' },
    'fiat money': { en: 'money with value because the government says so and people trust it', es: 'dinero que vale porque el gobierno lo dice y la gente confía en él', fa: 'پولی که ارزش دارد چون حکومت چنین می‌گوید و مردم به آن اعتماد دارند' }
  },

  npcs: [
    {
      x: 9, y: 8,
      name: { en: 'Ama', es: 'Ama', fa: 'آما' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 5, hair: '#1a1008', shirt: '#8a4ac0', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Hi! I lead tours here. Our first room shows [[barter|barter]].', es: '¡Hola! Doy recorridos aquí. Nuestra primera sala muestra el [[barter|trueque]].', fa: 'سلام! من اینجا مردم را می‌گردانم. اتاق اول ما [[barter|تبادلهٔ جنس]] را نشان می‌دهد.' },
        { en: 'A farmer has eggs and wants shoes. The shoemaker does not want eggs.', es: 'Un granjero tiene huevos y quiere zapatos. El zapatero no quiere huevos.', fa: 'یک دهقان تخم دارد و بوت می‌خواهد. بوت‌دوز تخم نمی‌خواهد.' },
        { en: 'Both must want what the other has. That is the [[double coincidence of wants|double coincidence of wants]].', es: 'Los dos deben querer lo que el otro tiene. Es la [[double coincidence of wants|doble coincidencia de deseos]].', fa: 'هر دو باید داشتهٔ دیگری را بخواهند. این [[double coincidence of wants|توافق دوطرفهٔ خواهش‌ها]] است.' },
        { en: '[[money|Money]] fixes it. Money is anything people accept in trade.', es: 'El [[money|dinero]] lo resuelve. Es cualquier cosa que la gente acepta al cambiar.', fa: '[[money|پول]] این را حل می‌کند. پول هر چیزی است که مردم در تبادله قبول کنند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is the big problem with barter?', es: '¿Cuál es el gran problema del trueque?', fa: 'مشکل بزرگ تبادلهٔ جنس چیست؟' },
        choices: [
          { ok: true, t: { en: 'Both people must want what the other has', es: 'Los dos deben querer lo que el otro tiene', fa: 'هر دو باید داشتهٔ دیگری را بخواهند' },
            why: { en: 'Yes! Without that match, there is no trade. Money solves this problem.', es: '¡Sí! Sin esa coincidencia, no hay cambio. El dinero resuelve este problema.', fa: 'بله! بدون این توافق، تبادله نمی‌شود. پول این مشکل را حل می‌کند.' } },
          { t: { en: 'Goods always cost more money than they should', es: 'Los bienes siempre cuestan más dinero de lo debido', fa: 'کالاها همیشه بیشتر از حد پول می‌خواهند' },
            why: { en: 'No. Barter uses no money at all. The problem is finding a person who wants your goods.', es: 'No. El trueque no usa dinero. El problema es encontrar a alguien que quiera tus bienes.', fa: 'نه. تبادلهٔ جنس هیچ پول ندارد. مشکل پیدا کردن کسی است که کالایت را بخواهد.' } },
          { t: { en: 'The law says no one may trade goods', es: 'La ley dice que nadie puede cambiar bienes', fa: 'قانون می‌گوید هیچ کس کالا عوض نکند' },
            why: { en: 'No. People may barter. It is just hard to find someone who wants what you have.', es: 'No. La gente puede hacer trueque. Solo es difícil encontrar a quien quiera lo tuyo.', fa: 'نه. مردم تبادلهٔ جنس کرده می‌توانند. فقط پیدا کردن کسی که داشته‌ات را بخواهد مشکل است.' } }
        ]
      }
    },
    {
      x: 20, y: 8,
      name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      role: { en: 'Museum helper, retired bank teller', es: 'Ayudante del museo, cajero de banco jubilado', fa: 'کمک‌کار موزیم، صندوق‌دار بازنشستهٔ بانک' },
      look: { skin: 4, hair: '#b8b8b8', shirt: '#f0f0e8', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I worked at a bank for 30 years. Now I help here.', es: 'Trabajé en un banco 30 años. Ahora ayudo aquí.', fa: 'من ۳۰ سال در یک بانک کار کردم. حالا اینجا کمک می‌کنم.' },
        { en: 'Salt and shells have value themselves. That is [[commodity money|commodity money]].', es: 'La sal y las conchas valen por sí mismas. Es [[commodity money|dinero mercancía]].', fa: 'نمک و صدف خودشان ارزش دارند. این [[commodity money|پول جنسی]] است.' },
        { en: 'Paper you could trade for gold was [[representative money|representative money]].', es: 'El papel que podías cambiar por oro era [[representative money|dinero representativo]].', fa: 'کاغذی که در بدل طلا عوض می‌شد [[representative money|پول نماینده]] بود.' },
        { en: 'Today\'s dollar is not backed by gold. It is [[fiat money|fiat money]].', es: 'El dólar de hoy no está respaldado por oro. Es [[fiat money|dinero fiduciario]].', fa: 'دالر امروز پشتوانهٔ طلا ندارد. این [[fiat money|پول اعتباری]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why does a dollar bill have value today?', es: '¿Por qué un billete de un dólar tiene valor hoy?', fa: 'چرا یک نوت دالر امروز ارزش دارد؟' },
        choices: [
          { ok: true, t: { en: 'The government says so, and people trust it', es: 'El gobierno lo dice y la gente confía en él', fa: 'حکومت چنین می‌گوید و مردم اعتماد دارند' },
            why: { en: 'Yes! That is fiat money. It works because people trust it and accept it.', es: '¡Sí! Eso es dinero fiduciario. Funciona porque la gente confía y lo acepta.', fa: 'بله! این پول اعتباری است. کار می‌کند چون مردم اعتماد دارند و قبولش می‌کنند.' } },
          { t: { en: 'Each bill can be traded for gold at a bank', es: 'Cada billete se cambia por oro en un banco', fa: 'هر نوت در بانک در بدل طلا عوض می‌شود' },
            why: { en: 'No. That was representative money long ago. Today\'s dollar is not backed by gold.', es: 'No. Eso era dinero representativo hace mucho. El dólar de hoy no tiene respaldo en oro.', fa: 'نه. آن پول نماینده در زمان قدیم بود. دالر امروز پشتوانهٔ طلا ندارد.' } },
          { t: { en: 'The paper in the bill is worth a dollar', es: 'El papel del billete vale un dólar', fa: 'کاغذ نوت خودش یک دالر می‌ارزد' },
            why: { en: 'No. The paper itself is worth very little. Trust is what gives it value.', es: 'No. El papel en sí vale muy poco. La confianza es lo que le da valor.', fa: 'نه. خود کاغذ خیلی کم ارزش دارد. اعتماد به آن ارزش می‌دهد.' } }
        ]
      }
    },
    {
      x: 5, y: 16,
      name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      role: { en: 'Student who works at the museum gift shop', es: 'Estudiante que trabaja en la tienda del museo', fa: 'شاگردی که در دکان تحفه‌های موزیم کار می‌کند' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e0803a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'At work, I made a poster: 6 traits of good money.', es: 'En el trabajo hice un cartel: 6 rasgos del buen dinero.', fa: 'سر کار یک پوستر ساختم: ۶ ویژگی پول خوب.' },
        { en: 'Good money is [[durable|durable]] and [[portable|portable]]: it lasts and is easy to carry.', es: 'El buen dinero es [[durable|duradero]] y [[portable|portátil]]: dura y se lleva fácil.', fa: 'پول خوب [[durable|بادوام]] و [[portable|قابل حمل]] است: دوام می‌کند و آسان برده می‌شود.' },
        { en: 'It is [[divisible|divisible]] and [[uniform|uniform]]: it splits into parts, and all look alike.', es: 'Es [[divisible|divisible]] y [[uniform|uniforme]]: se divide en partes y todo se ve igual.', fa: 'پول [[divisible|قابل تقسیم]] و [[uniform|یکسان]] است: به بخش‌ها تقسیم می‌شود و همه یکسان‌اند.' },
        { en: 'It has a [[limited supply|limited supply]], and it is [[acceptable|acceptable]] to people.', es: 'Tiene una [[limited supply|cantidad limitada]] y es [[acceptable|aceptado]] por la gente.', fa: 'مقدارش [[limited supply|محدود]] است و برای مردم [[acceptable|قابل قبول]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why would ice cream be bad money?', es: '¿Por qué el helado sería un mal dinero?', fa: 'چرا آیسکریم پول بد می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'It melts, so it is not durable', es: 'Se derrite, así que no es duradero', fa: 'آب می‌شود، پس بادوام نیست' },
            why: { en: 'Yes! Money must last a long time. Melted ice cream has no value.', es: '¡Sí! El dinero debe durar mucho tiempo. El helado derretido no vale nada.', fa: 'بله! پول باید زیاد دوام کند. آیسکریم آب‌شده ارزش ندارد.' } },
          { t: { en: 'It is too heavy to carry far', es: 'Es muy pesado para llevarlo lejos', fa: 'برای بردن به دور خیلی سنگین است' },
            why: { en: 'Not really. A cup of ice cream is light. The real problem is that it melts.', es: 'No mucho. Un vaso de helado pesa poco. El verdadero problema es que se derrite.', fa: 'نه زیاد. یک پیاله آیسکریم سبک است. مشکل اصلی این است که آب می‌شود.' } },
          { t: { en: 'Nobody in the world likes it', es: 'A nadie en el mundo le gusta', fa: 'هیچ کس در دنیا آن را دوست ندارد' },
            why: { en: 'No. Many people like ice cream! But it melts, so it cannot last.', es: 'No. ¡A mucha gente le gusta el helado! Pero se derrite, así que no dura.', fa: 'نه. مردم زیاد آیسکریم را دوست دارند! اما آب می‌شود، پس دوام نمی‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'MINT TOWN MONEY MUSEUM · 4 rooms show money through time, from barter to phones.', es: 'MUSEO DEL DINERO DE MINT TOWN · 4 salas muestran el dinero en el tiempo, del trueque a los teléfonos.', fa: 'موزیم پول شهر مینت · ۴ اتاق پول را در طول زمان نشان می‌دهند، از تبادلهٔ جنس تا تیلفون.' } },
    { x: 13, y: 10, text: { en: 'MARKET PRICES · Apples $1 · Bread $3 · Honey $5. Prices help you compare value.', es: 'PRECIOS DEL MERCADO · Manzanas $1 · Pan $3 · Miel $5. Los precios ayudan a comparar el valor.', fa: 'قیمت‌های بازار · سیب ۱ دالر · نان ۳ دالر · عسل ۵ دالر. قیمت‌ها در مقایسهٔ ارزش کمک می‌کنند.' } },
    { x: 29, y: 18, text: { en: 'MINT TOWN PARK · Today is Barter Day at the market: trade goods, no money!', es: 'PARQUE DE MINT TOWN · Hoy es el Día del Trueque en el mercado: ¡cambia bienes, sin dinero!', fa: 'پارک شهر مینت · امروز روز تبادلهٔ جنس در بازار است: کالا عوض کن، بدون پول!' } }
  ],

  /* the quest (Barter Day, no money allowed): Omar the egg farmer (gold !) at his stall on the market street
     -> Ray the bus driver on the museum plaza -> carry the right good to Mrs. Lin the broom maker in the park
     -> back to Omar. Mrs. Lin keeps hens (she does not want eggs) and grows pumpkins; she wants honey. */
  quest: {
    stat: 'loc',
    title: { en: 'A Broom on Barter Day', es: 'Una escoba en el Día del Trueque', fa: 'یک جاروب در روز تبادلهٔ جنس' },
    giver: {
      x: 4, y: 13,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Egg farmer', es: 'Granjero de huevos', fa: 'دهقان تخم مرغ' },
      look: { skin: 3, hair: '#1a1208', shirt: '#4a7a3a', pants: '#3a2a1a', hat: '#d8b060', style: 'short' },
      lines: [
        { en: 'Today is Barter Day. No money! We trade goods for goods.', es: 'Hoy es el Día del Trueque. ¡Sin dinero! Cambiamos bienes por bienes.', fa: 'امروز روز تبادلهٔ جنس است. پول نیست! کالا را در بدل کالا می‌دهیم.' },
        { en: 'My broom broke. Mrs. Lin in the park makes brooms.', es: 'Se rompió mi escoba. La Sra. Lin, en el parque, hace escobas.', fa: 'جاروب من شکست. خانم لین در پارک جاروب می‌سازد.' },
        { en: 'What does she want for one? Ray on the museum plaza knows her.', es: '¿Qué quiere ella por una? Ray, en la plaza del museo, la conoce.', fa: 'او در بدل یک جاروب چه می‌خواهد؟ ری در میدان موزیم او را می‌شناسد.' }
      ],
      wait: { en: 'Ray the bus driver is on the museum plaza, north of the street.', es: 'Ray, el chofer de autobús, está en la plaza del museo, al norte de la calle.', fa: 'ری، دریور بس، در میدان موزیم است، شمال سرک.' },
      thanks: { en: 'A broom at last! Barter took so many steps. Money makes trade easy.', es: '¡Por fin una escoba! El trueque tomó muchos pasos. El dinero hace fácil el cambio.', fa: 'بالاخره جاروب! تبادلهٔ جنس خیلی قدم داشت. پول تبادله را آسان می‌سازد.' }
    },
    contact: {
      x: 27, y: 9,
      name: { en: 'Ray', es: 'Ray', fa: 'ری' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#2f5f9a', pants: '#2a2a2a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'Mrs. Lin is my neighbor. She keeps hens, so she has lots of eggs.', es: 'La Sra. Lin es mi vecina. Tiene gallinas, así que tiene muchos huevos.', fa: 'خانم لین همسایهٔ من است. مرغ دارد، پس تخم زیاد دارد.' },
        { en: 'She grows pumpkins too. What she wants is honey for her tea.', es: 'También cultiva calabazas. Lo que quiere es miel para su té.', fa: 'کدو هم می‌کارد. چیزی که می‌خواهد عسل برای چایش است.' },
        { en: 'Find a good she wants, and carry it to her in the park!', es: '¡Busca un bien que ella quiera y llévaselo al parque!', fa: 'کالایی را که او می‌خواهد پیدا کن و در پارک برایش ببر!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 18,
        name: { en: 'Mrs. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
        role: { en: 'Broom maker', es: 'Fabricante de escobas', fa: 'جاروب‌ساز' },
        look: { skin: 1, hair: '#b8b8b8', shirt: '#c04a8a', pants: '#3a3a2a', style: 'bun' },
        lines: [
          { en: 'I make brooms by hand. I will trade one today.', es: 'Hago escobas a mano. Hoy cambio una.', fa: 'من جاروب را با دست می‌سازم. امروز یکی را عوض می‌کنم.' },
          { en: 'But I only trade for something I really want.', es: 'Pero solo la cambio por algo que de verdad quiero.', fa: 'اما فقط در بدل چیزی که واقعاً بخواهم عوض می‌کنم.' }
        ]
      },
      q: { en: 'Mrs. Lin will trade a broom for one good. Which good does she want?', es: 'La Sra. Lin cambia una escoba por un bien. ¿Cuál bien quiere ella?', fa: 'خانم لین یک جاروب را در بدل یک کالا می‌دهد. کدام کالا را می‌خواهد؟' },
      choices: [
        { ok: true, at: [3, 18], icon: '🍯', t: { en: 'A jar of honey', es: 'Un frasco de miel', fa: 'یک بوتل عسل' },
          why: { en: 'Good trade! She wants honey, and Omar wants a broom. Both wants match.', es: '¡Buen trato! Ella quiere miel y Omar quiere una escoba. Los dos deseos coinciden.', fa: 'معاملهٔ خوب! او عسل می‌خواهد و عمر جاروب. خواهش هر دو با هم جور شد.' } },
        { at: [8, 13], icon: '🥚', t: { en: 'A box of eggs', es: 'Una caja de huevos', fa: 'یک قطی تخم' },
          why: { en: 'She has hens and lots of eggs. Both people must want what the other has.', es: 'Tiene gallinas y muchos huevos. Los dos deben querer lo que el otro tiene.', fa: 'او مرغ و تخم زیاد دارد. هر دو باید داشتهٔ دیگری را بخواهند.' } },
        { at: [12, 16], icon: '🎃', t: { en: 'A big pumpkin', es: 'Una calabaza grande', fa: 'یک کدوی کلان' },
          why: { en: 'She grows pumpkins already. She will not trade for what she has.', es: 'Ella ya cultiva calabazas. No cambiará por algo que ya tiene.', fa: 'او خودش کدو می‌کارد. در بدل چیزی که دارد عوض نمی‌کند.' } }
      ],
      item: { icon: '🧹', name: { en: 'A new broom', es: 'Una escoba nueva', fa: 'یک جاروب نو' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 14]],
  smudges: [[12, 9], [21, 17]],

  challenge: {
    at: [18, 17],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area on the museum plaza for each use of money: buying near the market street (west),
    // measuring by the price board (middle), saving by the bike shop's side (east)
    zones: [{ bin: 'medium', x: 4, y: 6, w: 3, h: 2 }, { bin: 'unit', x: 12, y: 6, w: 3, h: 2 },
      { bin: 'store', x: 23, y: 6, w: 3, h: 2 }],
    stat: 'pla',
    title: { en: 'What is money doing?', es: '¿Qué hace el dinero?', fa: 'پول چه کار می‌کند؟' },
    intro: { en: '[[money|Money]] has 3 uses. Carry each card to the use it shows.',
      es: 'El [[money|dinero]] tiene 3 usos. Lleva cada tarjeta al uso que muestra.',
      fa: '[[money|پول]] ۳ کاربرد دارد. هر کارت را پیش کاربردی ببر که نشان می‌دهد.' },
    bins: [
      { id: 'medium', icon: '🤝', label: { en: 'Medium of exchange', es: 'Medio de cambio', fa: 'وسیلهٔ تبادله' }, sub: { en: 'used to buy and sell', es: 'para comprar y vender', fa: 'برای خرید و فروش' } },
      { id: 'unit', icon: '🏷️', label: { en: 'Unit of account', es: 'Unidad de cuenta', fa: 'واحد حساب' }, sub: { en: 'measures and compares value', es: 'mide y compara el valor', fa: 'ارزش را اندازه و مقایسه می‌کند' } },
      { id: 'store', icon: '🐷', label: { en: 'Store of value', es: 'Depósito de valor', fa: 'ذخیرهٔ ارزش' }, sub: { en: 'keeps value for later', es: 'guarda valor para después', fa: 'ارزش را برای بعد نگه می‌دارد' } }
    ],
    items: [
      { bin: 'medium', t: { en: 'Paying $3 for a bus ride', es: 'Pagar $3 por un viaje en autobús', fa: 'پرداخت ۳ دالر برای سفر با بس' },
        why: { en: 'You give money to get a ride. Money is a [[medium of exchange|medium of exchange]].', es: 'Das dinero para recibir un viaje. El dinero es un [[medium of exchange|medio de cambio]].', fa: 'پول می‌دهی تا سفر کنی. پول [[medium of exchange|وسیلهٔ تبادله]] است.' } },
      { bin: 'medium', t: { en: 'A cashier takes $6 for a sandwich', es: 'Una cajera cobra $6 por un sándwich', fa: 'صندوق‌دار ۶ دالر برای یک ساندویچ می‌گیرد' },
        why: { en: 'Money is traded for food. That is buying and selling: a [[medium of exchange|medium of exchange]].', es: 'El dinero se cambia por comida. Eso es comprar y vender: un [[medium of exchange|medio de cambio]].', fa: 'پول در بدل خوراک داده می‌شود. این خرید و فروش است: [[medium of exchange|وسیلهٔ تبادله]].' } },
      { bin: 'medium', t: { en: 'Using a card to buy new shoes', es: 'Usar una tarjeta para comprar zapatos nuevos', fa: 'کار گرفتن از کارت برای خرید بوت نو' },
        why: { en: 'A card moves money to the store. You are buying, so it is a [[medium of exchange|medium of exchange]].', es: 'Una tarjeta mueve dinero a la tienda. Compras: es un [[medium of exchange|medio de cambio]].', fa: 'کارت پول را به دکان می‌فرستد. خرید می‌کنی، پس [[medium of exchange|وسیلهٔ تبادله]] است.' } },
      { bin: 'unit', t: { en: 'A price tag says a shirt costs $12', es: 'Una etiqueta dice que una camisa cuesta $12', fa: 'برچسپ قیمت می‌گوید یک پیراهن ۱۲ دالر است' },
        why: { en: 'The price measures the shirt\'s value in dollars. That is a [[unit of account|unit of account]].', es: 'El precio mide el valor de la camisa en dólares. Es una [[unit of account|unidad de cuenta]].', fa: 'قیمت ارزش پیراهن را به دالر اندازه می‌کند. این [[unit of account|واحد حساب]] است.' } },
      { bin: 'unit', t: { en: 'Comparing a $1 apple and a $3 bread', es: 'Comparar una manzana de $1 y un pan de $3', fa: 'مقایسهٔ یک سیب ۱ دالری و یک نان ۳ دالری' },
        why: { en: 'Dollars let you compare: the bread costs 3 times as much. That is a [[unit of account|unit of account]].', es: 'Los dólares te dejan comparar: el pan cuesta 3 veces más. Es una [[unit of account|unidad de cuenta]].', fa: 'دالر مقایسه را آسان می‌کند: نان ۳ برابر قیمت دارد. این [[unit of account|واحد حساب]] است.' } },
      { bin: 'unit', t: { en: 'A cafe menu lists every meal in dollars', es: 'El menú de un café muestra cada comida en dólares', fa: 'مینوی کافه هر غذا را به دالر نشان می‌دهد' },
        why: { en: 'One measure for every meal makes value easy to see. That is a [[unit of account|unit of account]].', es: 'Una sola medida para cada comida muestra el valor. Es una [[unit of account|unidad de cuenta]].', fa: 'یک معیار برای هر غذا ارزش را روشن می‌کند. این [[unit of account|واحد حساب]] است.' } },
      { bin: 'store', t: { en: 'Saving $10 a week for a bike', es: 'Ahorrar $10 por semana para una bicicleta', fa: 'پس‌انداز ۱۰ دالر در هفته برای یک بایسکل' },
        why: { en: 'The money keeps its value until you buy the bike later. It is a [[store of value|store of value]].', es: 'El dinero guarda su valor hasta que compras la bici después. Es un [[store of value|depósito de valor]].', fa: 'پول ارزشش را تا خرید بعدی بایسکل نگه می‌دارد. این [[store of value|ذخیرهٔ ارزش]] است.' } },
      { bin: 'store', t: { en: 'Keeping $20 from a part-time job for next month', es: 'Guardar $20 de un trabajo de medio tiempo para el próximo mes', fa: 'نگه داشتن ۲۰ دالر از کار نیمه‌وقت برای ماه آینده' },
        why: { en: 'The $20 will still be useful next month. Money is a [[store of value|store of value]].', es: 'Los $20 seguirán sirviendo el próximo mes. El dinero es un [[store of value|depósito de valor]].', fa: '۲۰ دالر ماه آینده هم به کار می‌آید. پول [[store of value|ذخیرهٔ ارزش]] است.' } }
    ],
    success: { en: 'Every card is in the right place! Money helps us buy, measure and save.', es: '¡Cada tarjeta está en su lugar! El dinero nos ayuda a comprar, medir y ahorrar.', fa: 'هر کارت در جای درست است! پول در خرید، اندازه کردن و پس‌انداز کمک می‌کند.' }
  },

  boss: {
    at: [28, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Barter Grump', es: 'El Gruñón del Trueque', fa: 'غرغروی تبادلهٔ جنس' },
    appear: { en: 'The Barter Grump is hiding in the corner of the park!', es: '¡El Gruñón del Trueque se esconde en la esquina del parque!', fa: 'غرغروی تبادلهٔ جنس در کنج پارک پنهان است!' },
    taunt: { en: 'Money? Bah! I want to pay for my lunch with a goat!', es: '¿Dinero? ¡Bah! ¡Quiero pagar mi almuerzo con una cabra!', fa: 'پول؟ اه! می‌خواهم نان چاشتم را با یک بز بپردازم!' },
    win: { en: 'The Grump grumbles off. Ledger page 2.1 floats down into your hands!', es: 'El Gruñón se va refunfuñando. ¡La página 2.1 del libro cae en tus manos!', fa: 'غرغرو غرغرکنان می‌رود. صفحهٔ ۲.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is barter?', es: '¿Qué es el trueque?', fa: 'تبادلهٔ جنس چیست؟' },
        choices: [
          { en: 'Trading goods for goods, with no money', es: 'Cambiar bienes por bienes, sin dinero', fa: 'عوض کردن کالا با کالا، بدون پول' },
          { en: 'Paying for goods with a phone or a card', es: 'Pagar bienes con un teléfono o una tarjeta', fa: 'پرداخت پول کالا با تیلفون یا کارت' },
          { en: 'Saving coins in a jar for next year', es: 'Ahorrar monedas en un frasco para el año que viene', fa: 'پس‌انداز سکه در یک بوتل برای سال آینده' },
          { en: 'Printing new paper bills at a bank', es: 'Imprimir billetes nuevos en un banco', fa: 'چاپ کردن نوت‌های نو در یک بانک' }],
        answer: 0,
        why: { en: 'Barter means trading goods or services for other goods or services, with no money.', es: 'Trueque es cambiar bienes o servicios por otros bienes o servicios, sin dinero.', fa: 'تبادلهٔ جنس یعنی کالا یا خدمت را بدون پول در بدل کالا یا خدمت دیگر بدهی.' } },
      { q: { en: 'Ben has eggs and wants shoes. The shoemaker wants bread. What is the problem?', es: 'Ben tiene huevos y quiere zapatos. El zapatero quiere pan. ¿Cuál es el problema?', fa: 'بن تخم دارد و بوت می‌خواهد. بوت‌دوز نان می‌خواهد. مشکل چیست؟' },
        choices: [
          { en: 'Their wants do not match', es: 'Sus deseos no coinciden', fa: 'خواهش‌های شان جور نیست' },
          { en: 'Eggs cost too many dollars', es: 'Los huevos cuestan demasiados dólares', fa: 'تخم خیلی دالر قیمت دارد' },
          { en: 'Shoes are not real goods', es: 'Los zapatos no son bienes de verdad', fa: 'بوت کالای واقعی نیست' },
          { en: 'Bread is a kind of money', es: 'El pan es un tipo de dinero', fa: 'نان یک نوع پول است' }],
        answer: 0,
        why: { en: 'In barter, both must want what the other has. Here, the wants do not match.', es: 'En el trueque, los dos deben querer lo que el otro tiene. Aquí no coinciden.', fa: 'در تبادلهٔ جنس، هر دو باید داشتهٔ دیگری را بخواهند. اینجا خواهش‌ها جور نیست.' } },
      { q: { en: 'A price tag says a hat costs $8. Which use of money is this?', es: 'Una etiqueta dice que un gorro cuesta $8. ¿Qué uso del dinero es?', fa: 'برچسپ قیمت می‌گوید یک کلاه ۸ دالر است. این کدام کاربرد پول است؟' },
        choices: [
          { en: 'Unit of account', es: 'Unidad de cuenta', fa: 'واحد حساب' },
          { en: 'Store of value', es: 'Depósito de valor', fa: 'ذخیرهٔ ارزش' },
          { en: 'Commodity money', es: 'Dinero mercancía', fa: 'پول جنسی' },
          { en: 'Double coincidence', es: 'Doble coincidencia', fa: 'توافق دوطرفه' }],
        answer: 0,
        why: { en: 'A price measures value in dollars, so we can compare. That is a unit of account.', es: 'Un precio mide el valor en dólares para comparar. Es una unidad de cuenta.', fa: 'قیمت ارزش را به دالر اندازه می‌کند تا مقایسه کنیم. این واحد حساب است.' } },
      { q: { en: 'Nia saves $15 from her job to buy a jacket in winter. Which use is this?', es: 'Nia ahorra $15 de su trabajo para comprar una chaqueta en invierno. ¿Qué uso es?', fa: 'نیا ۱۵ دالر از کارش را برای خرید جاکت در زمستان پس‌انداز می‌کند. کدام کاربرد است؟' },
        choices: [
          { en: 'Store of value', es: 'Depósito de valor', fa: 'ذخیرهٔ ارزش' },
          { en: 'Unit of account', es: 'Unidad de cuenta', fa: 'واحد حساب' },
          { en: 'Medium of exchange', es: 'Medio de cambio', fa: 'وسیلهٔ تبادله' },
          { en: 'Limited supply', es: 'Cantidad limitada', fa: 'مقدار محدود' }],
        answer: 0,
        why: { en: 'Her money keeps its value until winter. Money is a store of value.', es: 'Su dinero guarda su valor hasta el invierno. El dinero es un depósito de valor.', fa: 'پولش ارزشش را تا زمستان نگه می‌دارد. پول ذخیرهٔ ارزش است.' } },
      { q: { en: 'Leo pays $2 for a bottle of water. Which use of money is this?', es: 'Leo paga $2 por una botella de agua. ¿Qué uso del dinero es?', fa: 'لیو ۲ دالر برای یک بوتل آب می‌پردازد. این کدام کاربرد پول است؟' },
        choices: [
          { en: 'Medium of exchange', es: 'Medio de cambio', fa: 'وسیلهٔ تبادله' },
          { en: 'Store of value', es: 'Depósito de valor', fa: 'ذخیرهٔ ارزش' },
          { en: 'Unit of account', es: 'Unidad de cuenta', fa: 'واحد حساب' },
          { en: 'Representative money', es: 'Dinero representativo', fa: 'پول نماینده' }],
        answer: 0,
        why: { en: 'Leo uses money to buy something. That makes money a medium of exchange.', es: 'Leo usa dinero para comprar algo. Eso hace del dinero un medio de cambio.', fa: 'لیو از پول برای خرید کار می‌گیرد. پس پول وسیلهٔ تبادله است.' } },
      { q: { en: 'You cannot cut a cow into small parts to pay for one egg. Which trait is missing?', es: 'No puedes cortar una vaca en partes para pagar un huevo. ¿Qué rasgo falta?', fa: 'گاو را برای پرداخت یک تخم تکه تکه کرده نمی‌توانی. کدام ویژگی کم است؟' },
        choices: [
          { en: 'Divisible', es: 'Divisible', fa: 'قابل تقسیم' },
          { en: 'Acceptable', es: 'Aceptado', fa: 'قابل قبول' },
          { en: 'Durable', es: 'Duradero', fa: 'بادوام' },
          { en: 'Uniform', es: 'Uniforme', fa: 'یکسان' }],
        answer: 0,
        why: { en: 'Good money is divisible: it splits into small amounts, like a dollar into coins.', es: 'El buen dinero es divisible: se divide en partes pequeñas, como un dólar en monedas.', fa: 'پول خوب قابل تقسیم است: به مقدارهای کوچک تقسیم می‌شود، مثل دالر به سکه.' } },
      { q: { en: 'What gives today\'s US dollar its value?', es: '¿Qué le da su valor al dólar de EE. UU. de hoy?', fa: 'چه چیز به دالر امروز امریکا ارزش می‌دهد؟' },
        choices: [
          { en: 'The government says so, and people trust it', es: 'El gobierno lo dice y la gente confía en él', fa: 'حکومت چنین می‌گوید و مردم اعتماد دارند' },
          { en: 'Each bill can be traded for gold at a bank', es: 'Cada billete se cambia por oro en un banco', fa: 'هر نوت در بانک در بدل طلا عوض می‌شود' },
          { en: 'The paper and ink are worth a lot of money', es: 'El papel y la tinta valen mucho dinero', fa: 'کاغذ و رنگ آن خیلی زیاد ارزش دارد' },
          { en: 'Each bill has a tiny bit of silver inside', es: 'Cada billete tiene un poquito de plata adentro', fa: 'هر نوت کمی نقره در خود دارد' }],
        answer: 0,
        why: { en: 'The dollar is fiat money. It is not backed by gold. Trust gives it value.', es: 'El dólar es dinero fiduciario. No tiene respaldo en oro. La confianza le da valor.', fa: 'دالر پول اعتباری است. پشتوانهٔ طلا ندارد. اعتماد به آن ارزش می‌دهد.' } },
      { q: { en: 'Salt and shells had value of their own. What kind of money were they?', es: 'La sal y las conchas tenían valor propio. ¿Qué tipo de dinero eran?', fa: 'نمک و صدف خودشان ارزش داشتند. چه نوع پول بودند؟' },
        choices: [
          { en: 'Commodity money', es: 'Dinero mercancía', fa: 'پول جنسی' },
          { en: 'Fiat money', es: 'Dinero fiduciario', fa: 'پول اعتباری' },
          { en: 'Representative money', es: 'Dinero representativo', fa: 'پول نماینده' },
          { en: 'Phone money', es: 'Dinero del teléfono', fa: 'پول تیلفونی' }],
        answer: 0,
        why: { en: 'Commodity money has value itself, like salt, gold or shells.', es: 'El dinero mercancía vale por sí mismo, como la sal, el oro o las conchas.', fa: 'پول جنسی خودش ارزش دارد، مثل نمک، طلا یا صدف.' } }
    ]
  },

  learned: [
    { en: '[[barter|Barter]] is hard: both people must want what the other has.', es: 'El [[barter|trueque]] es difícil: los dos deben querer lo que el otro tiene.', fa: '[[barter|تبادلهٔ جنس]] مشکل است: هر دو باید داشتهٔ دیگری را بخواهند.' },
    { en: 'Money is a [[medium of exchange|medium of exchange]], a [[unit of account|unit of account]] and a [[store of value|store of value]].', es: 'El dinero es [[medium of exchange|medio de cambio]], [[unit of account|unidad de cuenta]] y [[store of value|depósito de valor]].', fa: 'پول [[medium of exchange|وسیلهٔ تبادله]]، [[unit of account|واحد حساب]] و [[store of value|ذخیرهٔ ارزش]] است.' },
    { en: 'Today\'s dollar is [[fiat money|fiat money]]: it has value because people trust it.', es: 'El dólar de hoy es [[fiat money|dinero fiduciario]]: vale porque la gente confía en él.', fa: 'دالر امروز [[fiat money|پول اعتباری]] است: ارزش دارد چون مردم به آن اعتماد دارند.' }
  ],
  reflect: {
    q: { en: 'Imagine a town with no money. What would be hard about buying lunch?', es: 'Imagina un pueblo sin dinero. ¿Qué sería difícil al comprar el almuerzo?', fa: 'یک شهر بدون پول را تصور کن. خریدن نان چاشت چه مشکلی می‌داشت؟' },
    starter: { en: 'Without money, buying lunch would be hard because', es: 'Sin dinero, comprar el almuerzo sería difícil porque', fa: 'بدون پول، خریدن نان چاشت مشکل می‌بود، چون' }
  }
};
