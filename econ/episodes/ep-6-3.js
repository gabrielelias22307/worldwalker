/* COINWALKER · Episode 6.3 · Crypto and Other Investments (cryptocurrency, collectibles, NFTs, teen investing)
   Investor Peaks, a made-up mountain town: the Saturday tech and gaming fair.
   North-west: the fair plaza (l) with booths (m) and the big screen (U) that shows a jumpy price chart.
   North-east: the library (J) with its talk room, and the card shop (R over h).
   South-west: the parking lot (l), the snack stand (m) and Grandma Amal's house (Q over h).
   South-east: Peak Lake (~) with a dock (k).
   People show what crypto is, why it is risky (volatility, no FDIC insurance, scams), and how a teen can start
   safely (a custodial account, learn first, start small). The ledger stone: a booth promises "$100 today, $1,000 next
   week, guaranteed!" The student visits each flag and plants theirs on the wise choice: walk away and learn first. */
window.EPISODE = {
  id: '6.3',
  realm: 6,
  sol: 'EPF',
  title: { en: 'Crypto and Other Investments', es: 'Las criptomonedas y otras inversiones', fa: 'پول دیجیتال و سرمایه‌گذاری‌های دیگر' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Investor Peaks tech fair', es: 'Feria de tecnología de Investor Peaks', fa: 'نمایشگاه تکنالوژی اینوستر پیکس' },
  intro: [
    { en: 'The Grump tore the page about risky investments. Now people chase "sure" deals.',
      es: 'El Gruñón rompió la página sobre las inversiones riesgosas. Ahora la gente persigue negocios "seguros".',
      fa: 'غرغرو صفحهٔ سرمایه‌گذاری‌های پرخطر را پاره کرد. حالا مردم دنبال معامله‌های «حتمی» می‌دوند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town in the Virginia mountains (no timeline in this game) */
  scenes: {
    at: [-79.5, 37.9],
    start: [
      { en: 'Investor Peaks is a made-up mountain town in this game.',
        es: 'Investor Peaks es un pueblo de montaña inventado para este juego.',
        fa: 'اینوستر پیکس یک شهرک کوهستانی ساختگی در این بازی است.' },
      { en: 'Today the town has a tech and gaming fair, with booths and games.',
        es: 'Hoy el pueblo tiene una feria de tecnología y videojuegos, con puestos y juegos.',
        fa: 'امروز شهرک یک نمایشگاه تکنالوژی و بازی دارد، با غرفه‌ها و بازی‌ها.' },
      { en: 'A big screen shows a price chart that jumps all day.',
        es: 'Una pantalla grande muestra un gráfico de precios que salta todo el día.',
        fa: 'یک پردهٔ کلان چارت قیمتی را نشان می‌دهد که تمام روز بالا و پایین می‌پرد.' }
    ],
    page: { en: 'A blockchain is copied on many computers, so no single bank keeps it.',
      es: 'Una cadena de bloques se copia en muchas computadoras, así que ningún banco la guarda solo.',
      fa: 'بلاک‌چین در کمپیوترهای زیاد کاپی می‌شود، پس هیچ بانکی به تنهایی آن را نگه نمی‌دارد.' },
    guess: {
      q: { en: 'Does a bank or a government back crypto?', es: '¿Un banco o un gobierno respalda las criptomonedas?', fa: 'آیا یک بانک یا حکومت پشتیبان پول دیجیتال است؟' },
      choices: [
        { t: { en: '🙅 No, none does', es: '🙅 No, ninguno', fa: '🙅 نه، هیچ کدام' }, ok: true },
        { t: { en: '🏦 Yes, a bank does', es: '🏦 Sí, un banco', fa: '🏦 بله، یک بانک' } }
      ],
      why: { en: 'No bank or government backs crypto. Its price is only what buyers will pay.', es: 'Ningún banco ni gobierno respalda las criptomonedas. Su precio es solo lo que pagan los compradores.', fa: 'هیچ بانک یا حکومت پشتیبان پول دیجیتال نیست. قیمتش فقط همان است که خریداران می‌پردازند.' }
    },
    next: {
      q: { en: 'Next: insurance. Why pay a little every month for something that might never happen?', es: 'Ahora: el seguro. ¿Por qué pagar un poco cada mes por algo que quizás nunca pase?', fa: 'بعدی: بیمه. چرا هر ماه کمی پول بدهیم برای چیزی که شاید هرگز نشود؟' },
      choices: [
        { t: { en: '🛡️ To cover a big loss', es: '🛡️ Para cubrir una gran pérdida', fa: '🛡️ برای پوشش یک زیان کلان' }, ok: true },
        { t: { en: '🎁 To win a prize', es: '🎁 Para ganar un premio', fa: '🎁 برای بردن یک جایزه' } }
      ],
      why: { en: 'A small, sure payment protects you from a big surprise cost, like a car crash.', es: 'Un pago pequeño y fijo te protege de un gran gasto sorpresa, como un choque de carro.', fa: 'یک پرداخت کوچک و معلوم تو را از یک مصرف کلان ناگهانی، مثل تصادم موتر، حفظ می‌کند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [20, 3], name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 1, hair: '#1a1008', shirt: '#6a4a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the library talk room. Today\'s talk: learn before you invest.', es: 'Bienvenido a la sala de charlas de la biblioteca. Hoy: aprende antes de invertir.', fa: 'به اتاق گفتگوی کتابخانه خوش آمدی. گفتگوی امروز: پیش از سرمایه‌گذاری یاد بگیر.' },
        { en: 'Crypto is opened with a [[private key|private key]], like a very long password.', es: 'Las criptomonedas se abren con una [[private key|clave privada]], como una contraseña muy larga.', fa: 'پول دیجیتال با یک [[private key|کلید خصوصی]] باز می‌شود، مثل یک رمز بسیار دراز.' },
        { en: 'Lose that key, and the money can be gone. No bank can reset it.', es: 'Si pierdes esa clave, el dinero puede perderse para siempre. Ningún banco la puede cambiar.', fa: 'اگر آن کلید را گم کنی، پول شاید برای همیشه از دست برود. هیچ بانکی آن را نو نمی‌سازد.' }
      ] },
    { at: [27, 6], name: { en: 'Mr. Bello', es: 'Sr. Bello', fa: 'آقای بیلو' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#c06a2a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I sell trading cards and old sneakers. They are [[collectible|collectibles]].', es: 'Vendo cartas coleccionables y tenis viejos. Son [[collectible|coleccionables]].', fa: 'من کارت‌های بازی و بوت‌های کهنهٔ ورزشی می‌فروشم. اینها [[collectible|چیزهای کلکسیونی]] هستند.' },
        { en: 'A card is worth only what someone will pay. Tastes change fast.', es: 'Una carta vale solo lo que alguien pague. Los gustos cambian rápido.', fa: 'یک کارت فقط به اندازه‌ای ارزش دارد که کسی بپردازد. سلیقه‌ها زود تغییر می‌کنند.' },
        { en: 'An [[nft|NFT]] is a one-of-a-kind digital item. Its price works the same way.', es: 'Un [[nft|NFT]] es un objeto digital único. Su precio funciona igual.', fa: 'یک [[nft|ان‌اف‌تی]] یک چیز دیجیتال یگانه است. قیمتش هم همین طور کار می‌کند.' }
      ] },
    { at: [12, 18], name: { en: 'Grandma Amal', es: 'Abuela Amal', fa: 'مادرکلان امل' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#3a8a7a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Come in, have some tea! Long ago, people chased "hot tips" too.', es: '¡Pasa, toma un té! Hace mucho, la gente también perseguía "datos calientes".', fa: 'بیا داخل، چای بنوش! در گذشته هم مردم دنبال «خبرهای داغ» می‌دویدند.' },
        { en: 'My rule: if it sounds too good to be true, it is.', es: 'Mi regla: si suena demasiado bueno para ser verdad, no es verdad.', fa: 'قاعدهٔ من: اگر خیلی خوب به نظر می‌رسد که راست باشد، راست نیست.' },
        { en: 'Slow, steady saving worked for me. No one can promise fast money.', es: 'Ahorrar despacio y seguido me funcionó. Nadie puede prometer dinero rápido.', fa: 'پس‌انداز آهسته و پیوسته برایم کار داد. هیچ کس پول زود را وعده داده نمی‌تواند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (y 0-10): the big screen (U) at the top, the fair plaza (l) with booths (m).
     North-east: the library (J) with its door, a dirt path (:) to the card shop (R over h).
     Row 10: the main path from west to east.
     South-west: the parking lot (l), the snack stand (m) and Grandma Amal's house (Q over h).
     South-east: Peak Lake (~) with a dock (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T....UUUU.......:JJJJJJJ...T...T',
    'T.x..UUUU.......:JJJJJJJ.......T',
    'T.llllllllllll..:JJJdJJJ.......T',
    'T.llllllllllll..::::::::::.....T',
    'T.lmmllllllmml.....T...:..RRR..T',
    'T.llllllllllll.........:..hdh..T',
    'T.llllllllllll.........::::::..T',
    'T.lmmllllllmml...T.........T...T',
    'T.llllllllllll.................T',
    'T.....::::::::::::::::.....T...T',
    'T.....:..........:.....,,......T',
    'T.llllllll.......:..........x..T',
    'T.llllllll..mm...:....~~~~~~~..T',
    'T.llllllll.......:...~~~~~~~~~.T',
    'T.llllllll...x...::::k~~~~~~~~.T',
    'T.llllllll.......:...~~~~~~~~~.T',
    'T.llllllll.QQQ...:...~~~~~~~~..T',
    'T..........hdh...:....~~~~~~...T',
    'T..T..........,,.:.........T...T',
    'T.......T...................,..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [7, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 9], at: [2, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps north, along the west side of the fair.', es: 'Desde esta nota, camina 5 pasos al norte, por el lado oeste de la feria.', fa: 'از این یادداشت، ۵ قدم به شمال برو، در طرف غرب نمایشگاه.' },
      text: { en: 'An old arcade token! It works only in one arcade. Elsewhere, nobody will pay for it.', es: '¡Una ficha vieja de máquinas de juego! Solo sirve en un lugar. En otro lado, nadie paga por ella.', fa: 'یک ژتون کهنهٔ بازی! فقط در یک بازی‌خانه کار می‌کند. در جای دیگر، کسی برایش پول نمی‌دهد.' } },
    { clueAt: [19, 11], at: [19, 15], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps south, toward the lake.', es: 'Desde esta nota, camina 4 pasos al sur, hacia el lago.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، به طرف جهیل.' },
      text: { en: 'A shiny lake shell! One collector may pay $5 for it. Another will pay nothing.', es: '¡Una concha brillante del lago! Un coleccionista quizás pague $5. Otro no pagará nada.', fa: 'یک صدف براق جهیل! شاید یک کلکسیونر ۵ دالر بدهد. دیگری هیچ چیز نمی‌دهد.' } }
  ],

  words: {
    cryptocurrency: { en: 'digital money that uses a shared record called a blockchain; no bank or government backs it', es: 'dinero digital que usa un registro compartido llamado cadena de bloques; ningún banco ni gobierno lo respalda', fa: 'پول دیجیتال که از یک دفتر مشترک به نام بلاک‌چین کار می‌گیرد؛ هیچ بانک یا حکومت پشتیبان آن نیست' },
    blockchain: { en: 'a shared record of every trade, copied on many computers', es: 'un registro compartido de cada intercambio, copiado en muchas computadoras', fa: 'یک دفتر مشترک از هر معامله که در کمپیوترهای زیاد کاپی شده است' },
    volatility: { en: 'when a price swings up and down a lot, and fast', es: 'cuando un precio sube y baja mucho, y rápido', fa: 'وقتی قیمت زیاد و زود بالا و پایین می‌رود' },
    fdic: { en: 'a US government agency that insures money in insured banks if a bank fails; it does not cover crypto', es: 'una agencia del gobierno de EE. UU. que asegura el dinero en bancos asegurados si un banco quiebra; no cubre criptomonedas', fa: 'یک ادارهٔ حکومت امریکا که اگر بانک ورشکست شود، پول بانک‌های بیمه‌شده را بیمه می‌کند؛ پول دیجیتال را نمی‌پوشاند' },
    scam: { en: 'a trick to take your money, often with a promise that sounds too good', es: 'un engaño para quitarte el dinero, muchas veces con una promesa demasiado buena', fa: 'یک فریب برای گرفتن پول تو، اکثراً با وعده‌ای که خیلی خوب به نظر می‌رسد' },
    'pump and dump': { en: 'a scam: people hype a cheap coin so its price jumps, then sell it all, and the price crashes', es: 'una estafa: inflan una moneda barata para que su precio suba, luego venden todo y el precio se desploma', fa: 'یک فریب: مردم یک سکهٔ ارزان را تبلیغ می‌کنند تا قیمتش بالا برود، بعد همه را می‌فروشند و قیمت سقوط می‌کند' },
    collectible: { en: 'a thing people collect, like cards or sneakers; it is worth what a buyer will pay', es: 'algo que la gente colecciona, como cartas o tenis; vale lo que un comprador pague', fa: 'چیزی که مردم جمع می‌کنند، مثل کارت یا بوت ورزشی؛ ارزشش همان است که خریدار بپردازد' },
    nft: { en: 'a one-of-a-kind digital item, like a picture, recorded on a blockchain', es: 'un objeto digital único, como una imagen, registrado en una cadena de bloques', fa: 'یک چیز دیجیتال یگانه، مثل یک عکس، که در بلاک‌چین ثبت شده است' },
    'custodial account': { en: 'an investing account for someone under 18; an adult opens and manages it', es: 'una cuenta de inversión para alguien menor de 18; un adulto la abre y la maneja', fa: 'یک حساب سرمایه‌گذاری برای کسی زیر ۱۸ سال؛ یک بزرگسال آن را باز و اداره می‌کند' },
    diversify: { en: 'to spread your money over many investments, so one loss hurts less', es: 'repartir tu dinero en muchas inversiones, para que una pérdida duela menos', fa: 'پول خود را در سرمایه‌گذاری‌های زیاد پخش کنی، تا یک زیان کمتر ضرر بزند' },
    'private key': { en: 'a secret code that opens your crypto; if you lose it, the money can be gone', es: 'un código secreto que abre tus criptomonedas; si lo pierdes, el dinero puede perderse', fa: 'یک رمز پنهان که پول دیجیتال تو را باز می‌کند؛ اگر گمش کنی، پول شاید از دست برود' }
  },

  npcs: [
    {
      x: 10, y: 3,
      name: { en: 'Nia', es: 'Nia', fa: 'نیا' },
      role: { en: 'Fair volunteer at the big screen', es: 'Voluntaria de la feria en la pantalla grande', fa: 'رضاکار نمایشگاه کنار پردهٔ کلان' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a8ac0', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome to the fair! I run the big screen.', es: '¡Bienvenido a la feria! Yo manejo la pantalla grande.', fa: 'به نمایشگاه خوش آمدی! من پردهٔ کلان را اداره می‌کنم.' },
        { en: 'That chart shows the price of a [[cryptocurrency|cryptocurrency]]. It is digital money.', es: 'Ese gráfico muestra el precio de una [[cryptocurrency|criptomoneda]]. Es dinero digital.', fa: 'آن چارت قیمت یک [[cryptocurrency|پول دیجیتال]] را نشان می‌دهد. پولی است که فقط در کمپیوتر است.' },
        { en: 'A shared record called a [[blockchain|blockchain]] tracks every trade. No bank or government backs it.', es: 'Un registro compartido, la [[blockchain|cadena de bloques]], guarda cada intercambio. Ningún banco ni gobierno lo respalda.', fa: 'یک دفتر مشترک به نام [[blockchain|بلاک‌چین]] هر معامله را ثبت می‌کند. هیچ بانک یا حکومت پشتیبانش نیست.' },
        { en: 'Today it fell from $80 to $40. That jumpy price is [[volatility|volatility]].', es: 'Hoy bajó de $80 a $40. Ese precio que salta es [[volatility|volatilidad]].', fa: 'امروز از ۸۰ دالر به ۴۰ دالر افتاد. این قیمت پرنده‌وار [[volatility|نوسان]] است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'The coin fell from $80 to $40 in one day. What does that show?', es: 'La moneda bajó de $80 a $40 en un día. ¿Qué muestra eso?', fa: 'سکه در یک روز از ۸۰ دالر به ۴۰ دالر افتاد. این چه را نشان می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Crypto prices can swing a lot, fast', es: 'Los precios cripto pueden cambiar mucho, rápido', fa: 'قیمت پول دیجیتال زیاد و زود تغییر می‌کند' },
            why: { en: 'Yes! That is volatility. A price can fall by half in hours.', es: '¡Sí! Eso es volatilidad. Un precio puede bajar a la mitad en horas.', fa: 'بله! این نوسان است. قیمت می‌تواند در چند ساعت نصف شود.' } },
          { t: { en: 'The coin is now a sure bargain', es: 'Ahora la moneda es una ganga segura', fa: 'حالا سکه حتماً یک سودای ارزان است' },
            why: { en: 'Nothing is sure here. A price that fell can keep on falling.', es: 'Aquí nada es seguro. Un precio que bajó puede seguir bajando.', fa: 'اینجا هیچ چیز حتمی نیست. قیمتی که افتاده می‌تواند باز هم بیفتد.' } },
          { t: { en: 'Someone made a mistake on the screen', es: 'Alguien se equivocó en la pantalla', fa: 'کسی روی پرده اشتباه کرد' },
            why: { en: 'No mistake. Crypto prices really can drop by half in one day.', es: 'No hay error. Los precios cripto de verdad pueden bajar a la mitad en un día.', fa: 'اشتباه نیست. قیمت پول دیجیتال واقعاً می‌تواند در یک روز نصف شود.' } }
        ]
      }
    },
    {
      x: 25, y: 9,
      name: { en: 'Mr. Torres', es: 'Sr. Torres', fa: 'آقای تورس' },
      role: { en: 'Retired bus driver', es: 'Chofer de autobús jubilado', fa: 'دریور بازنشستهٔ بس' },
      look: { skin: 2, hair: '#c8c8c8', shirt: '#4a6a3a', pants: '#2a2a2a', hat: '#3a3a5a', style: 'short' },
      lines: [
        { en: 'I drove a city bus for 30 years. I save with care.', es: 'Manejé un autobús de la ciudad 30 años. Ahorro con cuidado.', fa: 'من ۳۰ سال بس شهری را راندم. با احتیاط پس‌انداز می‌کنم.' },
        { en: 'Last year, a group online hyped a tiny coin. Its price shot up.', es: 'El año pasado, un grupo en internet promocionó una moneda pequeña. Su precio subió mucho.', fa: 'سال گذشته، یک گروه در انترنت یک سکهٔ کوچک را تبلیغ کرد. قیمتش زود بالا رفت.' },
        { en: 'Then they sold it all at once. The price crashed. I lost $200.', es: 'Luego vendieron todo de golpe. El precio se desplomó. Perdí $200.', fa: 'بعد همه را یکباره فروختند. قیمت سقوط کرد. من ۲۰۰ دالر باختم.' },
        { en: 'That was a [[pump and dump|pump-and-dump]], a kind of [[scam|scam]].', es: 'Eso fue un [[pump and dump|inflar y vender]], un tipo de [[scam|estafa]].', fa: 'آن یک [[pump and dump|بالا بردن و فروختن]] بود، یک نوع [[scam|فریب]].' },
        { en: 'Bank savings have [[fdic|FDIC]] insurance. Crypto does not.', es: 'Los ahorros del banco tienen seguro de la [[fdic|FDIC]]. Las criptomonedas no.', fa: 'پس‌انداز بانکی بیمهٔ [[fdic|FDIC]] دارد. پول دیجیتال ندارد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why is crypto riskier than money in a bank savings account?', es: '¿Por qué las criptomonedas son más riesgosas que el dinero en una cuenta de ahorros?', fa: 'چرا پول دیجیتال از پول در حساب پس‌انداز بانک پرخطرتر است؟' },
        choices: [
          { ok: true, t: { en: 'No FDIC insurance protects it', es: 'Ningún seguro de la FDIC la protege', fa: 'هیچ بیمهٔ FDIC آن را حفظ نمی‌کند' },
            why: { en: 'Right. If crypto is lost or stolen, no insurance pays you back.', es: 'Correcto. Si las criptomonedas se pierden o las roban, ningún seguro te paga.', fa: 'درست. اگر پول دیجیتال گم یا دزدیده شود، هیچ بیمه‌ای پولت را پس نمی‌دهد.' } },
          { t: { en: 'Banks can take your crypto away', es: 'Los bancos te pueden quitar las cripto', fa: 'بانک‌ها پول دیجیتالت را گرفته می‌توانند' },
            why: { en: 'No. The big risk is that crypto has no FDIC insurance like bank savings.', es: 'No. El gran riesgo es que las cripto no tienen seguro de la FDIC como los ahorros.', fa: 'نه. خطر کلان این است که پول دیجیتال مثل پس‌انداز بانکی بیمهٔ FDIC ندارد.' } },
          { t: { en: 'Its price never goes up or down', es: 'Su precio nunca sube ni baja', fa: 'قیمتش هرگز بالا و پایین نمی‌رود' },
            why: { en: 'Its price changes a lot! That swinging is part of the risk.', es: '¡Su precio cambia mucho! Ese vaivén es parte del riesgo.', fa: 'قیمتش زیاد تغییر می‌کند! همین بالا و پایین شدن بخشی از خطر است.' } }
        ]
      }
    },
    {
      x: 6, y: 14,
      name: { en: 'Aisha', es: 'Aisha', fa: 'عایشه' },
      role: { en: 'Student, 16, with a part-time job', es: 'Estudiante de 16 años con trabajo de medio tiempo', fa: 'شاگرد ۱۶ ساله با کار نیمه‌وقت' },
      look: { skin: 3, hair: '#1a1008', shirt: '#c04a6a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I am 16. I work at the snack stand on weekends.', es: 'Tengo 16 años. Trabajo en el puesto de bocadillos los fines de semana.', fa: 'من ۱۶ ساله هستم. آخر هفته‌ها در غرفهٔ خوراکی کار می‌کنم.' },
        { en: 'I wanted to invest, but I am under 18.', es: 'Quería invertir, pero soy menor de 18.', fa: 'می‌خواستم سرمایه‌گذاری کنم، اما زیر ۱۸ سال هستم.' },
        { en: 'So a trusted adult helps me with a [[custodial account|custodial account]].', es: 'Así que un adulto de confianza me ayuda con una [[custodial account|cuenta custodial]].', fa: 'پس یک بزرگسال مورد اعتماد با یک [[custodial account|حساب سرپرستی]] کمکم می‌کند.' },
        { en: 'I learn first and start small. I only invest money I can lose.', es: 'Primero aprendo y empiezo con poco. Solo invierto dinero que puedo perder.', fa: 'اول یاد می‌گیرم و کم شروع می‌کنم. فقط پولی را می‌گذارم که از دست داده بتوانم.' },
        { en: 'And I still [[diversify|diversify]] and pick low fees, like we learned before.', es: 'Y todavía [[diversify|diversifico]] y elijo comisiones bajas, como aprendimos antes.', fa: 'و هنوز هم [[diversify|پولم را پخش می‌کنم]] و فیس کم را انتخاب می‌کنم، مثل درس قبلی.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Aisha has $50 saved for investing. What is a wise first step?', es: 'Aisha tiene $50 ahorrados para invertir. ¿Cuál es un primer paso sabio?', fa: 'عایشه ۵۰ دالر برای سرمایه‌گذاری پس‌انداز کرده. یک قدم اول عاقلانه چیست؟' },
        choices: [
          { ok: true, t: { en: 'Learn first, then start small', es: 'Aprender primero y empezar con poco', fa: 'اول یاد بگیرد، بعد کم شروع کند' },
            why: { en: 'Yes! Learning first and starting small keeps the risk low.', es: '¡Sí! Aprender primero y empezar con poco mantiene bajo el riesgo.', fa: 'بله! اول یاد گرفتن و کم شروع کردن خطر را کم نگه می‌دارد.' } },
          { t: { en: 'Put it all in one hot coin', es: 'Ponerlo todo en una moneda de moda', fa: 'همه را در یک سکهٔ مشهور بگذارد' },
            why: { en: 'One risky coin could lose most of it. Spread out risk and start small.', es: 'Una moneda riesgosa podría perder casi todo. Reparte el riesgo y empieza con poco.', fa: 'یک سکهٔ پرخطر می‌تواند بیشترش را از بین ببرد. خطر را پخش کن و کم شروع کن.' } },
          { t: { en: 'Borrow more money to invest it all', es: 'Pedir más dinero prestado e invertirlo todo', fa: 'پول بیشتر قرض بگیرد و همه را بگذارد' },
            why: { en: 'Never invest borrowed money. Only invest what you can afford to lose.', es: 'Nunca inviertas dinero prestado. Solo invierte lo que puedes perder.', fa: 'هرگز پول قرضی را سرمایه‌گذاری نکن. فقط پولی را بگذار که از دست داده بتوانی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 2, text: { en: 'INVESTOR PEAKS TECH FAIR · Games, robots and new tech. Think before you buy!', es: 'FERIA DE TECNOLOGÍA DE INVESTOR PEAKS · Juegos, robots y tecnología nueva. ¡Piensa antes de comprar!', fa: 'نمایشگاه تکنالوژی اینوستر پیکس · بازی، روبات و تکنالوژی نو. پیش از خرید فکر کن!' } },
    { x: 13, y: 15, text: { en: 'FAIR RULE · Real fair staff will never ask you to send money or crypto.', es: 'REGLA DE LA FERIA · El personal de verdad nunca te pedirá enviar dinero ni criptomonedas.', fa: 'قاعدهٔ نمایشگاه · کارمندان واقعی هرگز از تو نمی‌خواهند پول یا پول دیجیتال بفرستی.' } },
    { x: 28, y: 12, text: { en: 'PEAK LAKE · Calm water today, like steady saving. Crypto prices are more like a storm.', es: 'LAGO PEAK · Agua tranquila hoy, como ahorrar con calma. Los precios cripto se parecen más a una tormenta.', fa: 'جهیل پیک · آب امروز آرام است، مثل پس‌انداز پیوسته. قیمت پول دیجیتال بیشتر مثل توفان است.' } }
  ],

  /* the quest: Kofi of the robot club (gold !) on the fair plaza -> Bea at the snack stand (south-west)
     -> the Grump's runaway robot toy tore the club's scam flyer into 3 pieces: under the big screen, at the library door,
     at the card shop -> catch the robot toy by the lake -> back to Kofi. */
  quest: {
    stat: 'mov',
    title: { en: 'The Runaway Robot', es: 'El robot fugitivo', fa: 'روبات فراری' },
    giver: {
      x: 7, y: 7,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Robot club student', es: 'Estudiante del club de robots', fa: 'شاگرد کلپ روبات' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e0a02a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'My robot club made a flyer: How to Spot a Scam.', es: 'Mi club de robots hizo un volante: Cómo reconocer una estafa.', fa: 'کلپ روبات ما یک اعلان ساخت: چطور فریب را بشناسیم.' },
        { en: 'The Grump\'s robot toy grabbed it and ran off!', es: '¡El robot de juguete del Gruñón lo agarró y se escapó!', fa: 'روبات بازیچهٔ غرغرو آن را گرفت و فرار کرد!' },
        { en: 'Bea at the snack stand saw where it went. Please ask her!', es: 'Bea, la del puesto de bocadillos, vio a dónde fue. ¡Pregúntale, por favor!', fa: 'بی در غرفهٔ خوراکی دید کجا رفت. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Bea runs the snack stand, south of the fair, by the parking lot.', es: 'Bea atiende el puesto de bocadillos, al sur de la feria, junto al estacionamiento.', fa: 'بی غرفهٔ خوراکی را در جنوب نمایشگاه، کنار جای پارک موتر، اداره می‌کند.' },
      thanks: { en: 'My flyer is whole again! Now the whole fair can spot a scam.', es: '¡Mi volante está completo otra vez! Ahora toda la feria puede reconocer una estafa.', fa: 'اعلان من دوباره کامل شد! حالا همهٔ نمایشگاه فریب را شناخته می‌تواند.' }
    },
    contact: {
      x: 15, y: 15,
      name: { en: 'Bea', es: 'Bea', fa: 'بی' },
      role: { en: 'Snack stand cook', es: 'Cocinera del puesto de bocadillos', fa: 'آشپز غرفهٔ خوراکی' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#e05a3a', pants: '#3a3a3a', hat: '#ffffff', style: 'bun' },
      lines: [
        { en: 'Yes! A little robot zoomed past with paper in its claws.', es: '¡Sí! Un robot pequeño pasó volando con papeles en las pinzas.', fa: 'بله! یک روبات کوچک با کاغذ در چنگک‌هایش تیز از اینجا گذشت.' },
        { en: 'It tore the flyer into 3 pieces and hid them around the fair.', es: 'Rompió el volante en 3 pedazos y los escondió por la feria.', fa: 'اعلان را ۳ تکه کرد و تکه‌ها را در گوشه و کنار نمایشگاه پنهان کرد.' },
        { en: 'Solve its riddles, find each piece, then catch that robot!', es: 'Resuelve sus acertijos, encuentra cada pedazo y ¡atrapa a ese robot!', fa: 'چیستان‌هایش را حل کن، هر تکه را پیدا کن، بعد آن روبات را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [30, 20],
      hops: [[29, 10], [30, 16]],
      name: { en: 'The Runaway Robot Toy', es: 'El robot de juguete fugitivo', fa: 'روبات بازیچهٔ فراری' },
      taunt: { en: 'Beep boop! The robot toy blinks: "3 pieces, 3 riddles. Find them if you can!"', es: '¡Bip bup! El robot parpadea: "3 pedazos, 3 acertijos. ¡Encuéntralos si puedes!"', fa: 'بیپ بوپ! روبات چشمک می‌زند: «۳ تکه، ۳ چیستان. اگر می‌توانی پیدایشان کن!»' },
      clues: [
        { t: { en: 'Piece 1 is where a price jumps up and down all day.', es: 'El pedazo 1 está donde un precio sube y baja todo el día.', fa: 'تکهٔ ۱ جایی است که یک قیمت تمام روز بالا و پایین می‌پرد.' },
          zones: [{ x: 3, y: 3, w: 7, h: 1 }],
          noBy: [{ x: 2, y: 12, w: 8, h: 6, t: { en: 'Cars sit still here. Find the big screen with the jumpy price chart.', es: 'Aquí los carros están quietos. Busca la pantalla grande con el gráfico que salta.', fa: 'اینجا موترها آرام ایستاده‌اند. پردهٔ کلان را با چارت قیمت پرنده‌وار پیدا کن.' } }],
          found: { en: 'Piece 1, under the big screen! Crypto prices swing a lot.', es: '¡El pedazo 1, bajo la pantalla grande! Los precios cripto cambian mucho.', fa: 'تکهٔ ۱، زیر پردهٔ کلان! قیمت پول دیجیتال زیاد تغییر می‌کند.' } },
        { t: { en: 'Piece 2 is at the door where people learn before they invest.', es: 'El pedazo 2 está en la puerta donde la gente aprende antes de invertir.', fa: 'تکهٔ ۲ کنار دروازه‌ای است که مردم پیش از سرمایه‌گذاری یاد می‌گیرند.' },
          zones: [{ x: 17, y: 4, w: 7, h: 1 }],
          noBy: [{ x: 2, y: 5, w: 12, h: 5, t: { en: 'These booths want you to buy now. People learn in the library talk room.', es: 'Estos puestos quieren que compres ya. La gente aprende en la sala de charlas de la biblioteca.', fa: 'این غرفه‌ها می‌خواهند همین حالا بخری. مردم در اتاق گفتگوی کتابخانه یاد می‌گیرند.' } }],
          found: { en: 'Piece 2, at the library door! Learn first, then invest.', es: '¡El pedazo 2, en la puerta de la biblioteca! Primero aprende, luego invierte.', fa: 'تکهٔ ۲، کنار دروازهٔ کتابخانه! اول یاد بگیر، بعد سرمایه‌گذاری کن.' } },
        { t: { en: 'Piece 3 is at the shop where a card is worth what a buyer pays.', es: 'El pedazo 3 está en la tienda donde una carta vale lo que paga un comprador.', fa: 'تکهٔ ۳ کنار دکانی است که کارت به اندازهٔ پول خریدار ارزش دارد.' },
          zones: [{ x: 25, y: 7, w: 5, h: 1 }],
          noBy: [{ x: 10, y: 12, w: 6, h: 3, t: { en: 'Snack prices are set on a menu. Find the shop where buyers set the price.', es: 'Los precios de los bocadillos están en un menú. Busca la tienda donde los compradores ponen el precio.', fa: 'قیمت خوراکی‌ها در مینو نوشته است. دکانی را پیدا کن که خریداران قیمت را تعیین می‌کنند.' } }],
          found: { en: 'Piece 3, at the card shop! Collectibles are worth what buyers pay.', es: '¡El pedazo 3, en la tienda de cartas! Los coleccionables valen lo que pagan los compradores.', fa: 'تکهٔ ۳، کنار دکان کارت! چیزهای کلکسیونی به اندازهٔ پول خریدار ارزش دارند.' } }
      ],
      win: { en: 'Got it! The robot toy beeps, stops and hands back the scam flyer.', es: '¡Lo atrapaste! El robot pita, se detiene y devuelve el volante sobre estafas.', fa: 'گرفتی‌اش! روبات بیپ می‌کند، می‌ایستد و اعلان فریب را پس می‌دهد.' },
      item: { icon: '📄', name: { en: 'The scam flyer', es: 'El volante sobre estafas', fa: 'اعلان شناختن فریب' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[9, 7], [20, 12]],

  challenge: {
    at: [13, 11],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag at each choice: the "guaranteed" booth on the plaza, the library door, the path's west end
    spots: [[12, 6], [18, 5], [3, 10]],
    stat: 'mov',
    title: { en: 'A deal that sounds too good', es: 'Un negocio que suena demasiado bueno', fa: 'معامله‌ای که خیلی خوب به نظر می‌رسد' },
    intro: { en: 'A booth says: "Put in $100 today, get $1,000 next week. Guaranteed!" Visit each flag. Plant yours on the wise choice. Then pick a fact and a smart step.',
      es: 'Un puesto dice: "Pon $100 hoy y recibe $1,000 la próxima semana. ¡Garantizado!" Visita cada bandera. Planta la tuya en la opción sabia. Luego elige un dato y un paso inteligente.',
      fa: 'یک غرفه می‌گوید: «امروز ۱۰۰ دالر بگذار، هفتهٔ بعد ۱۰۰۰ دالر بگیر. تضمینی!» هر بیرق را ببین. بیرق خود را روی انتخاب عاقلانه بگذار. بعد یک حقیقت و یک قدم هوشیارانه انتخاب کن.' },
    options: [
      { icon: '💸', name: { en: 'Put in $100 now', es: 'Poner $100 ya', fa: 'همین حالا ۱۰۰ دالر بگذار' },
        desc: { en: 'Hand the booth $100 before the deal ends.', es: 'Darle $100 al puesto antes de que se acabe la oferta.', fa: 'پیش از تمام شدن معامله، ۱۰۰ دالر به غرفه بده.' },
        result: { en: 'Next week the booth is gone, and so is your $100. "Guaranteed" was a lie.', es: 'La próxima semana el puesto ya no está, y tus $100 tampoco. "Garantizado" era mentira.', fa: 'هفتهٔ بعد غرفه نیست، و ۱۰۰ دالر تو هم نیست. «تضمینی» دروغ بود.' } },
      { icon: '🚶', name: { en: 'Walk away and learn first', es: 'Irse y aprender primero', fa: 'برو و اول یاد بگیر' },
        desc: { en: 'Say no. Learn at the library. Later, invest only what you can lose.', es: 'Di que no. Aprende en la biblioteca. Más tarde, invierte solo lo que puedas perder.', fa: 'بگو نه. در کتابخانه یاد بگیر. بعداً فقط پولی را بگذار که از دست داده بتوانی.' },
        result: { en: 'You keep your $100. Later, after learning, you invest a little, spread out, with low fees.', es: 'Te quedas con tus $100. Después de aprender, inviertes un poco, repartido y con comisiones bajas.', fa: '۱۰۰ دالرت پیش خودت می‌ماند. بعد از یاد گرفتن، کمی پول را پخش‌شده و با فیس کم می‌گذاری.' } },
      { icon: '🪙', name: { en: 'Put in just $10 to test it', es: 'Poner solo $10 para probar', fa: 'فقط ۱۰ دالر برای امتحان بگذار' },
        desc: { en: 'Try a little first, and put in more if it works.', es: 'Probar primero con poco y poner más si funciona.', fa: 'اول کمی امتحان کن، و اگر کار داد بیشتر بگذار.' },
        result: { en: 'The $10 is gone. Scams take small money too, and then ask for more.', es: 'Los $10 se perdieron. Las estafas también se llevan poco dinero, y luego piden más.', fa: '۱۰ دالر از دست رفت. فریب‌کاران پول کم را هم می‌گیرند، بعد بیشتر می‌خواهند.' } }
    ],
    kinds: [
      { id: 'fact', label: { en: 'A fact about the offer', es: 'Un dato sobre la oferta', fa: 'یک حقیقت دربارهٔ این پیشنهاد' } },
      { id: 'step', label: { en: 'A smart money step', es: 'Un paso inteligente con el dinero', fa: 'یک قدم هوشیارانه با پول' } }
    ],
    reasons: [
      { kind: 'fact', fits: [1], t: { en: 'No real investment can promise $1,000 for $100 in a week.', es: 'Ninguna inversión real puede prometer $1,000 por $100 en una semana.', fa: 'هیچ سرمایه‌گذاری واقعی ۱۰۰۰ دالر را در بدل ۱۰۰ دالر در یک هفته وعده داده نمی‌تواند.' },
        why: { en: 'Right. Real investments carry risk. A "guaranteed" giant return is a scam sign.', es: 'Correcto. Las inversiones reales tienen riesgo. Una ganancia enorme "garantizada" es señal de estafa.', fa: 'درست. سرمایه‌گذاری واقعی خطر دارد. سود کلان «تضمینی» نشانهٔ فریب است.' } },
      { kind: 'fact', fits: [2], t: { en: 'Losing $10 hurts less than losing $100.', es: 'Perder $10 duele menos que perder $100.', fa: 'باختن ۱۰ دالر کمتر از باختن ۱۰۰ دالر ضرر دارد.' },
        why: { en: 'True, but it is still a loss. A scam is a scam at any size.', es: 'Es cierto, pero sigue siendo una pérdida. Una estafa es estafa de cualquier tamaño.', fa: 'درست است، اما باز هم زیان است. فریب، کوچک یا کلان، فریب است.' } },
      { kind: 'fact', fits: [], t: { en: 'Big returns with no risk happen all the time.', es: 'Las grandes ganancias sin riesgo pasan todo el tiempo.', fa: 'سود کلان بدون خطر همیشه پیدا می‌شود.' },
        why: { en: 'No. A chance at a bigger return always comes with a bigger risk.', es: 'No. La posibilidad de ganar más siempre viene con más riesgo.', fa: 'نه. امکان سود بیشتر همیشه با خطر بیشتر همراه است.' } },
      { kind: 'step', fits: [1], t: { en: 'Learn first, then invest only money I can afford to lose.', es: 'Aprender primero y luego invertir solo dinero que puedo perder.', fa: 'اول یاد بگیرم، بعد فقط پولی را بگذارم که از دست داده بتوانم.' },
        why: { en: 'Yes. Learning first and risking only spare money protects you.', es: 'Sí. Aprender primero y arriesgar solo dinero de sobra te protege.', fa: 'بله. اول یاد گرفتن و خطر کردن فقط با پول اضافی تو را حفظ می‌کند.' } },
      { kind: 'step', fits: [1], t: { en: 'Tell the fair staff about the booth so others stay safe.', es: 'Avisar al personal de la feria sobre el puesto para proteger a otros.', fa: 'به کارمندان نمایشگاه دربارهٔ غرفه بگویم تا دیگران در امان بمانند.' },
        why: { en: 'Good. Reporting a scam helps protect other people too.', es: 'Bien. Reportar una estafa también ayuda a proteger a otras personas.', fa: 'خوب. خبر دادن از فریب به حفظ مردم دیگر هم کمک می‌کند.' } },
      { kind: 'step', fits: [], t: { en: 'Pay fast, before the deal runs out.', es: 'Pagar rápido, antes de que se acabe la oferta.', fa: 'زود پول بدهم، پیش از تمام شدن معامله.' },
        why: { en: 'Rushing you is a scam trick. A real investment gives you time to think.', es: 'Apurarte es un truco de estafa. Una inversión real te da tiempo para pensar.', fa: 'عجله انداختن یک چال فریب است. سرمایه‌گذاری واقعی به تو وقت فکر کردن می‌دهد.' } },
      { kind: 'step', fits: [], t: { en: 'Bring friends so they can get rich too.', es: 'Traer amigos para que también se hagan ricos.', fa: 'دوستانم را بیاورم تا آنها هم پولدار شوند.' },
        why: { en: 'That spreads the loss to your friends. Many scams grow this way.', es: 'Eso pasa la pérdida a tus amigos. Muchas estafas crecen así.', fa: 'این زیان را به دوستانت هم می‌رساند. بسیاری فریب‌ها این طور کلان می‌شوند.' } }
    ],
    mismatch: { en: 'That reason does not back up the choice you picked. Is your flag on the wise choice?', es: 'Esa razón no apoya la opción que elegiste. ¿Tu bandera está en la opción sabia?', fa: 'این دلیل از انتخابی که کردی پشتیبانی نمی‌کند. آیا بیرقت روی انتخاب عاقلانه است؟' },
    success: { en: 'Smart! "Guaranteed" big returns are a [[scam|scam]] sign. Learn first, and risk only what you can lose.', es: '¡Muy bien! Las grandes ganancias "garantizadas" son señal de [[scam|estafa]]. Aprende primero y arriesga solo lo que puedas perder.', fa: 'آفرین! سود کلان «تضمینی» نشانهٔ [[scam|فریب]] است. اول یاد بگیر، و فقط با پولی خطر کن که از دست داده بتوانی.' }
  },

  boss: {
    at: [22, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Hype Grump', es: 'El Gruñón Exagerado', fa: 'غرغروی هیاهو' },
    appear: { en: 'The Hype Grump is shouting from the fog by the lake!', es: '¡El Gruñón Exagerado grita desde la niebla junto al lago!', fa: 'غرغروی هیاهو از میان مه کنار جهیل فریاد می‌زند!' },
    taunt: { en: 'Buy NOW! Prices only go UP! Trust me, it is GUARANTEED!', es: '¡Compra YA! ¡Los precios solo SUBEN! ¡Confía en mí, está GARANTIZADO!', fa: 'همین حالا بخر! قیمت‌ها فقط بالا می‌روند! به من باور کن، تضمینی است!' },
    win: { en: 'The fog lifts off the lake. Ledger page 6.3 floats down into your hands!', es: 'La niebla se va del lago. ¡La página 6.3 del libro cae en tus manos!', fa: 'مه از روی جهیل کنار می‌رود. صفحهٔ ۶.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is cryptocurrency?', es: '¿Qué es una criptomoneda?', fa: 'پول دیجیتال (کریپتو) چیست؟' },
        choices: [
          { en: 'Digital money that uses a shared record', es: 'Dinero digital que usa un registro compartido', fa: 'پول دیجیتال که از یک دفتر مشترک کار می‌گیرد' },
          { en: 'Paper money printed by a bank in town', es: 'Billetes impresos por un banco del pueblo', fa: 'پول کاغذی که یک بانک شهر چاپ می‌کند' },
          { en: 'A savings account the government insures', es: 'Una cuenta de ahorros que asegura el gobierno', fa: 'یک حساب پس‌انداز که حکومت بیمه می‌کند' },
          { en: 'A gift card that works in one store', es: 'Una tarjeta de regalo que sirve en una tienda', fa: 'یک کارت تحفه که فقط در یک دکان کار می‌کند' }],
        answer: 0,
        why: { en: 'Crypto is digital money. A shared record called a blockchain tracks who owns it.', es: 'Las cripto son dinero digital. Un registro compartido, la cadena de bloques, guarda quién las tiene.', fa: 'پول دیجیتال پولی است در کمپیوتر. یک دفتر مشترک به نام بلاک‌چین ثبت می‌کند که مال کیست.' } },
      { q: { en: 'What is a blockchain?', es: '¿Qué es una cadena de bloques?', fa: 'بلاک‌چین چیست؟' },
        choices: [
          { en: 'A shared record of trades on many computers', es: 'Un registro compartido de intercambios en muchas computadoras', fa: 'یک دفتر مشترک معامله‌ها در کمپیوترهای زیاد' },
          { en: 'A metal chain that locks a big bank vault door', es: 'Una cadena de metal que cierra la puerta de la bóveda de un banco', fa: 'یک زنجیر آهنی که دروازهٔ صندوق کلان بانک را قفل می‌کند' },
          { en: 'A list of prices set by the government', es: 'Una lista de precios que pone el gobierno', fa: 'یک فهرست قیمت که حکومت تعیین می‌کند' },
          { en: 'A paper receipt from a store clerk', es: 'Un recibo de papel de una cajera', fa: 'یک رسید کاغذی از فروشندهٔ دکان' }],
        answer: 0,
        why: { en: 'A blockchain is a shared record. Many computers keep copies, so no single bank runs it.', es: 'Una cadena de bloques es un registro compartido. Muchas computadoras tienen copias; ningún banco la maneja solo.', fa: 'بلاک‌چین یک دفتر مشترک است. کمپیوترهای زیاد کاپی آن را دارند، پس هیچ بانکی تنها آن را اداره نمی‌کند.' } },
      { q: { en: 'A coin costs $50 at 9 a.m. and $30 by noon. What is this called?', es: 'Una moneda cuesta $50 a las 9 a. m. y $30 al mediodía. ¿Cómo se llama esto?', fa: 'یک سکه ساعت ۹ صبح ۵۰ دالر است و تا چاشت ۳۰ دالر. این را چه می‌گویند؟' },
        choices: [
          { en: 'Volatility', es: 'Volatilidad', fa: 'نوسان' },
          { en: 'An interest rate', es: 'Una tasa de interés', fa: 'نرخ سود بانکی' },
          { en: 'Insurance', es: 'Seguro', fa: 'بیمه' },
          { en: 'A budget', es: 'Un presupuesto', fa: 'بودجه' }],
        answer: 0,
        why: { en: 'Volatility means prices swing up and down a lot, fast. Crypto prices are very volatile.', es: 'Volatilidad es cuando los precios suben y bajan mucho, rápido. Los precios cripto son muy volátiles.', fa: 'نوسان یعنی قیمت‌ها زیاد و زود بالا و پایین می‌روند. قیمت پول دیجیتال نوسان زیاد دارد.' } },
      { q: { en: 'Which of these has FDIC insurance?', es: '¿Cuál de estos tiene seguro de la FDIC?', fa: 'کدام یکی از اینها بیمهٔ FDIC دارد؟' },
        choices: [
          { en: 'Savings in an insured bank', es: 'Ahorros en un banco asegurado', fa: 'پس‌انداز در یک بانک بیمه‌شده' },
          { en: 'Crypto in an online wallet', es: 'Cripto en una billetera digital', fa: 'پول دیجیتال در یک بکس انترنتی' },
          { en: 'A rare card in a plastic case', es: 'Una carta rara en un estuche', fa: 'یک کارت کمیاب در قاب پلاستیکی' },
          { en: 'Cash hidden under a mattress', es: 'Efectivo escondido bajo el colchón', fa: 'پول نقد پنهان زیر توشک' }],
        answer: 0,
        why: { en: 'FDIC insurance covers money in insured banks. It does not cover crypto or collectibles.', es: 'El seguro de la FDIC cubre el dinero en bancos asegurados. No cubre cripto ni coleccionables.', fa: 'بیمهٔ FDIC پول بانک‌های بیمه‌شده را می‌پوشاند. پول دیجیتال یا چیزهای کلکسیونی را نمی‌پوشاند.' } },
      { q: { en: 'Sam loses the private key to his crypto. What can happen?', es: 'Sam pierde la clave privada de sus cripto. ¿Qué puede pasar?', fa: 'سام کلید خصوصی پول دیجیتالش را گم می‌کند. چه می‌شود؟' },
        choices: [
          { en: 'His crypto can be gone for good', es: 'Sus cripto pueden perderse para siempre', fa: 'پول دیجیتالش شاید برای همیشه برود' },
          { en: 'His bank mails him a new key', es: 'Su banco le manda una clave nueva', fa: 'بانکش یک کلید نو برایش می‌فرستد' },
          { en: 'The government pays him back', es: 'El gobierno le devuelve el dinero', fa: 'حکومت پولش را پس می‌دهد' },
          { en: 'The price of his coin doubles', es: 'El precio de su moneda se duplica', fa: 'قیمت سکه‌اش دو برابر می‌شود' }],
        answer: 0,
        why: { en: 'No bank or government backs crypto. Lose the key, and often no one can get it back.', es: 'Ningún banco ni gobierno respalda las cripto. Si pierdes la clave, muchas veces nadie la recupera.', fa: 'هیچ بانک یا حکومت پشتیبان پول دیجیتال نیست. اگر کلید گم شود، اکثراً کسی آن را پس آورده نمی‌تواند.' } },
      { q: { en: 'A post says: "Send me crypto, and I will send back double!" What is it?', es: 'Un mensaje dice: "¡Mándame cripto y te devuelvo el doble!" ¿Qué es?', fa: 'یک پیام می‌گوید: «برایم پول دیجیتال بفرست، دو برابرش را پس می‌فرستم!» این چیست؟' },
        choices: [
          { en: 'A scam', es: 'Una estafa', fa: 'یک فریب' },
          { en: 'A gift', es: 'Un regalo', fa: 'یک تحفه' },
          { en: 'A loan', es: 'Un préstamo', fa: 'یک قرض' },
          { en: 'A tax', es: 'Un impuesto', fa: 'یک مالیات' }],
        answer: 0,
        why: { en: 'Fake giveaways ask you to send money first. No one doubles your money for free.', es: 'Los regalos falsos te piden enviar dinero primero. Nadie duplica tu dinero gratis.', fa: 'تحفه‌های دروغی اول از تو پول می‌خواهند. هیچ کس پولت را مفت دو برابر نمی‌کند.' } },
      { q: { en: 'What sets the price of a rare trading card?', es: '¿Qué decide el precio de una carta coleccionable rara?', fa: 'قیمت یک کارت بازی کمیاب را چه تعیین می‌کند؟' },
        choices: [
          { en: 'What a buyer is willing to pay', es: 'Lo que un comprador quiera pagar', fa: 'پولی که خریدار حاضر است بدهد' },
          { en: 'The price printed on its back', es: 'El precio impreso atrás', fa: 'قیمتی که پشتش چاپ شده' },
          { en: 'A rule from the town bank', es: 'Una regla del banco del pueblo', fa: 'یک قاعده از بانک شهرک' },
          { en: 'How much paper and ink it used', es: 'Cuánto papel y tinta usó', fa: 'مقدار کاغذ و رنگی که در آن رفته' }],
        answer: 0,
        why: { en: 'Collectibles are worth what a buyer will pay. Tastes change, so prices can fall.', es: 'Los coleccionables valen lo que pague un comprador. Los gustos cambian y los precios pueden bajar.', fa: 'چیزهای کلکسیونی به اندازهٔ پول خریدار ارزش دارند. سلیقه‌ها تغییر می‌کنند، پس قیمت می‌تواند بیفتد.' } },
      { q: { en: 'Mia is 16 and wants to invest. What does she usually need?', es: 'Mia tiene 16 años y quiere invertir. ¿Qué necesita casi siempre?', fa: 'میا ۱۶ ساله است و می‌خواهد سرمایه‌گذاری کند. معمولاً چه لازم دارد؟' },
        choices: [
          { en: 'A custodial account with an adult', es: 'Una cuenta custodial con un adulto', fa: 'یک حساب سرپرستی با یک بزرگسال' },
          { en: 'A credit card in her own name', es: 'Una tarjeta de crédito a su nombre', fa: 'یک کارت قرضه به نام خودش' },
          { en: 'A crypto tip from a stranger online', es: 'Un dato cripto de un desconocido en internet', fa: 'یک خبر کریپتو از یک بیگانه در انترنت' },
          { en: 'A business permit from the city', es: 'Un permiso de negocio de la ciudad', fa: 'یک جواز کسب از شاروالی' }],
        answer: 0,
        why: { en: 'Under 18, an adult usually opens and manages a custodial account with you.', es: 'Si eres menor de 18, un adulto casi siempre abre y maneja contigo una cuenta custodial.', fa: 'زیر ۱۸ سال، معمولاً یک بزرگسال یک حساب سرپرستی را با تو باز و اداره می‌کند.' } }
    ]
  },

  learned: [
    { en: '[[cryptocurrency|Crypto]] is digital money on a [[blockchain|blockchain]]. No bank or government backs it.', es: 'Las [[cryptocurrency|criptomonedas]] son dinero digital en una [[blockchain|cadena de bloques]]. Ningún banco ni gobierno las respalda.', fa: '[[cryptocurrency|پول دیجیتال]] پولی است روی [[blockchain|بلاک‌چین]]. هیچ بانک یا حکومت پشتیبان آن نیست.' },
    { en: 'Crypto prices swing a lot, and it has no [[fdic|FDIC]] insurance. "Guaranteed" returns are a [[scam|scam]] sign.', es: 'Los precios cripto cambian mucho y no tienen seguro de la [[fdic|FDIC]]. Las ganancias "garantizadas" son señal de [[scam|estafa]].', fa: 'قیمت پول دیجیتال زیاد تغییر می‌کند و بیمهٔ [[fdic|FDIC]] ندارد. سود «تضمینی» نشانهٔ [[scam|فریب]] است.' },
    { en: 'Under 18, invest with a [[custodial account|custodial account]]. Learn first, start small, risk only what you can lose.', es: 'Si eres menor de 18, invierte con una [[custodial account|cuenta custodial]]. Aprende primero, empieza con poco y arriesga solo lo que puedas perder.', fa: 'زیر ۱۸ سال، با یک [[custodial account|حساب سرپرستی]] سرمایه‌گذاری کن. اول یاد بگیر، کم شروع کن، و فقط با پولی خطر کن که از دست داده بتوانی.' }
  ],
  reflect: {
    q: { en: 'Imagine someone online promises you fast, sure money. What would you do, and who could you ask for help?', es: 'Imagina que alguien en internet te promete dinero rápido y seguro. ¿Qué harías y a quién podrías pedir ayuda?', fa: 'فکر کن کسی در انترنت به تو پول زود و حتمی وعده می‌دهد. چه می‌کنی، و از کی کمک خواسته می‌توانی؟' },
    starter: { en: 'First, I would', es: 'Primero, yo', fa: 'اول، من' }
  }
};
