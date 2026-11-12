/* COINWALKER · Episode 2.2 · Banking, the Money Supply and Digital Safety
   Richmond, Virginia, today: downtown by the James River.
   North-west: the public library (J) with its computer room and a café (R over h).
   North-east: Riverbend Community Bank (Q over h, made up), a credit union (R over h, made up) and a plaza with a fountain (O).
   Row 5 and row 11 are streets (l); a wide avenue (l) runs north to south down the middle.
   South-west: a phone repair shop and a row of buildings. South-east: the tall Federal Reserve Bank of Richmond (U) on its plaza.
   Row 17 is the riverside path; the James River (~) runs below it, with a footbridge (B) to the south bank.
   People show what banks do, the Fed and the FDIC; the ledger stone asks what to do with a scam text. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'EPF',
  title: { en: 'Banking and Digital Safety', es: 'La banca y la seguridad digital', fa: 'بانکداری و امنیت دیجیتال' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Richmond, today', es: 'Richmond, hoy', fa: 'ریچموند، امروز' },
  intro: [
    { en: 'The Grump tore the page about banks. Now people fall for scam texts!',
      es: 'El Gruñón rompió la página sobre los bancos. ¡Ahora la gente cae en mensajes falsos!',
      fa: 'غرغرو صفحهٔ بانک‌ها را پاره کرد. حالا مردم فریب پیام‌های دروغ را می‌خورند!' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Richmond on the world map (no timeline in this game) */
  scenes: {
    at: [-77.44, 37.535],
    start: [
      { en: 'Richmond is the capital of Virginia. It sits on the James River.',
        es: 'Richmond es la capital de Virginia. Está junto al río James.',
        fa: 'ریچموند پایتخت ویرجینیا است. کنار دریای جیمز قرار دارد.' },
      { en: 'Downtown, by the river, stands the tall Federal Reserve Bank of Richmond.',
        es: 'En el centro, junto al río, está el alto Banco de la Reserva Federal de Richmond.',
        fa: 'در مرکز شهر، کنار دریا، ساختمان بلند بانک فدرال ریزرو ریچموند ایستاده است.' },
      { en: 'It is one of the 12 regional banks of the Federal Reserve.',
        es: 'Es uno de los 12 bancos regionales de la Reserva Federal.',
        fa: 'این یکی از ۱۲ بانک منطقه‌ای فدرال ریزرو است.' }
    ],
    page: { en: 'The Richmond Fed serves the Fifth District, from Maryland down to South Carolina.',
      es: 'La Reserva Federal de Richmond sirve al Quinto Distrito, de Maryland a Carolina del Sur.',
      fa: 'فدرال ریزرو ریچموند به ناحیهٔ پنجم خدمت می‌کند، از مریلند تا کارولینای جنوبی.' },
    guess: {
      q: { en: 'A bank closes for good. Is the money saved there lost?', es: 'Un banco cierra para siempre. ¿Se pierde el dinero ahorrado allí?', fa: 'یک بانک برای همیشه بسته می‌شود. آیا پولی که آنجا پس‌انداز شده از بین می‌رود؟' },
      choices: [
        { t: { en: '🛡️ No, it is insured', es: '🛡️ No, está asegurado', fa: '🛡️ نه، بیمه است' }, ok: true },
        { t: { en: '💸 Yes, all of it', es: '💸 Sí, todo', fa: '💸 بله، همه‌اش' } }
      ],
      why: { en: 'At an insured bank, the FDIC covers up to $250,000 per person.', es: 'En un banco asegurado, la FDIC cubre hasta $250,000 por persona.', fa: 'در یک بانک بیمه‌شده، اف‌دی‌آی‌سی تا ۲۵۰٬۰۰۰ دالر برای هر نفر را می‌پوشاند.' }
    },
    next: {
      q: { en: 'Next: why does a bag of chips cost more now than when your parents were kids?', es: 'Ahora: ¿por qué una bolsa de papitas cuesta más hoy que cuando tus papás eran niños?', fa: 'بعدی: چرا یک پاکت چپس حالا از زمان کودکی پدر و مادرت قیمت‌تر است؟' },
      choices: [
        { t: { en: '📈 Prices rise over time', es: '📈 Los precios suben', fa: '📈 قیمت‌ها بالا می‌روند' }, ok: true },
        { t: { en: '🥔 The bags got bigger', es: '🥔 Las bolsas crecieron', fa: '🥔 پاکت‌ها کلان شدند' } }
      ],
      why: { en: 'Most prices go up over the years. So a dollar buys less than before.', es: 'Casi todos los precios suben con los años. Por eso un dólar compra menos que antes.', fa: 'بیشتر قیمت‌ها با گذشت سال‌ها بالا می‌روند. پس یک دالر کمتر از پیش می‌خرد.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [4, 3], name: { en: 'Mr. Ruiz', es: 'Sr. Ruiz', fa: 'آقای رویز' },
      look: { skin: 2, hair: '#3a3a3a', shirt: '#4a6a9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to the library computer room. The computers are free to use.', es: 'Bienvenido a la sala de computadoras de la biblioteca. Son gratis.', fa: 'به اتاق کمپیوتر کتابخانه خوش آمدی. کمپیوترها رایگان هستند.' },
        { en: 'Make strong passwords: long, with words, numbers and symbols.', es: 'Crea contraseñas fuertes: largas, con palabras, números y símbolos.', fa: 'رمزهای قوی بساز: دراز، با کلمه، عدد و نشانه.' },
        { en: 'Turn on [[two-step login|two-step login]]. Then a thief needs your phone too.', es: 'Activa el [[two-step login|inicio de sesión en dos pasos]]. Así un ladrón también necesita tu teléfono.', fa: '[[two-step login|ورود دو مرحله‌ای]] را روشن کن. آن وقت دزد تیلفونت را هم لازم دارد.' }
      ] },
    { at: [11, 3], name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      look: { skin: 1, hair: '#c8a060', shirt: '#7a4a2a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Our café Wi-Fi is free, but it is public. Strangers share it.', es: 'El wifi del café es gratis, pero es público. Lo comparten desconocidos.', fa: 'وای‌فای کافهٔ ما رایگان است، اما عمومی است. آدم‌های ناشناس هم از آن کار می‌گیرند.' },
        { en: 'So I never log in to my bank on public Wi-Fi.', es: 'Por eso nunca entro a mi banco con wifi público.', fa: 'برای همین هیچ وقت با وای‌فای عمومی به حساب بانکم داخل نمی‌شوم.' },
        { en: 'I wait until I get home, or I use my phone\'s own data.', es: 'Espero a llegar a casa, o uso los datos de mi teléfono.', fa: 'صبر می‌کنم تا خانه برسم، یا از انترنت خود تیلفونم کار می‌گیرم.' }
      ] },
    { at: [20, 3], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#f0f0e8', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'A [[checking account|checking account]] is for spending and paying bills.', es: 'Una [[checking account|cuenta corriente]] es para gastar y pagar cuentas.', fa: '[[checking account|حساب جاری]] برای خرج کردن و پرداخت بل‌ها است.' },
        { en: 'A [[debit card|debit card]] takes money right out of your checking account.', es: 'Una [[debit card|tarjeta de débito]] saca dinero directo de tu cuenta corriente.', fa: '[[debit card|کارت دبیت]] پول را مستقیم از حساب جاری تو برمی‌دارد.' },
        { en: 'A savings account is for money you keep. It earns interest.', es: 'Una cuenta de ahorros es para el dinero que guardas. Gana interés.', fa: 'حساب پس‌انداز برای پولی است که نگه می‌داری. سود می‌گیرد.' }
      ] },
    { at: [27, 3], name: { en: 'Mrs. Chen', es: 'Sra. Chen', fa: 'خانم چن' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#3a8a6a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'I bank at this [[credit union|credit union]]. I am a member and an owner!', es: 'Uso esta [[credit union|cooperativa de crédito]]. ¡Soy socia y dueña!', fa: 'من در این [[credit union|اتحادیهٔ اعتباری]] حساب دارم. من عضو و یک مالک هستم!' },
        { en: 'Members own it. Profits often come back to us as lower fees.', es: 'Los socios son los dueños. Las ganancias a menudo vuelven como cobros más bajos.', fa: 'عضوها مالک آن هستند. مفاد اکثراً به شکل فیس کمتر به ما برمی‌گردد.' },
        { en: 'Money at most credit unions is insured too, by a group called the NCUA.', es: 'El dinero en casi todas las cooperativas también está asegurado, por la NCUA.', fa: 'پول در بیشتر اتحادیه‌های اعتباری هم بیمه است، توسط اداره‌ای به نام ان‌سی‌یو‌اِی.' }
      ] },
    { at: [4, 14], name: { en: 'Dana', es: 'Dana', fa: 'دانا' },
      look: { skin: 4, hair: '#120c08', shirt: '#c04a4a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I fix phones. Many people bring me phones full of [[scam|scam]] texts.', es: 'Arreglo teléfonos. Mucha gente me trae teléfonos llenos de mensajes de [[scam|estafa]].', fa: 'من تیلفون جور می‌کنم. مردم زیاد تیلفون‌های پر از پیام‌های [[scam|فریب]] را می‌آورند.' },
        { en: 'Scam texts say "Act now!" They want you to panic.', es: 'Los mensajes de estafa dicen "¡Actúa ya!". Quieren que te asustes.', fa: 'پیام‌های فریب می‌گویند «همین حالا!» می‌خواهند تو بترسی.' },
        { en: 'Don\'t reply or tap the link. Call the number on your card.', es: 'No respondas ni toques el enlace. Llama al número de tu tarjeta.', fa: 'جواب نده و روی لینک نزن. به نمبری که روی کارتت است زنگ بزن.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the library (J) and the café in the north-west, a small park with trees; Riverbend Community Bank
     (Q over h) and the credit union in the north-east, over a paved plaza (l) with a fountain (O).
     Rows 5 and 11 are streets; the avenue (l, columns 15-16) runs south to the river.
     South: the phone repair shop (R over h) and a row of buildings (J) in the south-west; the tall Federal Reserve Bank
     of Richmond (U) on its plaza in the south-east. Row 17 is the riverside path; the James River (~) has a footbridge (B)
     to the grassy south bank. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJ...........QQQQQ........T',
    'T.JJJJJ...RRR.....QQQQQ...RRR..T',
    'T.JJdJJ...hdh.....hhdhhx..hdh..T',
    'T.......x......................T',
    'TllllllllllllllllllllllllllllllT',
    'T..............ll.llllllllllll.T',
    'T..T......T....llTllllllllllllTT',
    'T...,......,...ll.lllllOllllll.T',
    'TT...,...,,..T.ll.llllllllllll.T',
    'T.....T........llTllllllllllTl.T',
    'TllllllllllllllllllllllllllllllT',
    'T..............lllTllUUUUUUUllTT',
    'TT.RRR.T.JJJJT.llllxlUUUUUUUlllT',
    'T..hdh...JJJJ..llllllUUUUUUUllTT',
    'T.........,....llllllUUUUUUUlllT',
    'T.T,...T.,.T...llllllllllllllllT',
    'T::::::::::::::ll::::::::::::::T',
    'T~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~T',
    'T~~~~~~~B~~~~~~~~~~~~~~~~~~~~~~T',
    'T..x.T....,.,.T.T...,......T.,.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [14, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 7], at: [13, 10], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, toward Main Street.', es: 'Desde esta nota, camina 3 pasos al sur, hacia Main Street.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، به طرف سرک مِین.' },
      text: { en: 'An old penny! Coins are made by the US Mint, not by banks.', es: '¡Un centavo viejo! Las monedas las hace la Casa de la Moneda de EE. UU., no los bancos.', fa: 'یک سکهٔ کهنهٔ یک سنتی! سکه‌ها را ضرابخانهٔ امریکا می‌سازد، نه بانک‌ها.' } },
    { clueAt: [18, 20], at: [22, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east along the river bank.', es: 'Desde esta nota, camina 4 pasos al este por la orilla del río.', fa: 'از این یادداشت، ۴ قدم به شرق برو، در کنار دریا.' },
      text: { en: 'A river shell! The James River flows east to the Chesapeake Bay.', es: '¡Una concha del río! El río James corre al este hasta la bahía de Chesapeake.', fa: 'یک صدف دریا! دریای جیمز به شرق تا خلیج چیزاپیک می‌رود.' } }
  ],

  words: {
    deposit: { en: 'money you put into a bank account', es: 'dinero que pones en una cuenta del banco', fa: 'پولی که در حساب بانکی می‌گذاری' },
    interest: { en: 'extra money paid for using money: banks pay it to savers and charge it to borrowers', es: 'dinero extra por usar dinero: el banco lo paga a quien ahorra y lo cobra a quien pide prestado', fa: 'پول اضافه برای کار گرفتن از پول: بانک آن را به پس‌اندازکننده می‌دهد و از قرض‌گیرنده می‌گیرد' },
    loan: { en: 'money you borrow and must pay back, usually with interest', es: 'dinero que pides prestado y debes devolver, casi siempre con interés', fa: 'پولی که قرض می‌گیری و باید پس بدهی، معمولاً با سود' },
    'checking account': { en: 'a bank account for spending and paying bills', es: 'una cuenta del banco para gastar y pagar cuentas', fa: 'حساب بانکی برای خرج کردن و پرداخت بل‌ها' },
    'debit card': { en: 'a card that takes money right out of your checking account', es: 'una tarjeta que saca dinero directo de tu cuenta corriente', fa: 'کارتی که پول را مستقیم از حساب جاری تو برمی‌دارد' },
    'credit union': { en: 'a place like a bank that is owned by its members', es: 'un lugar como un banco que es de sus socios', fa: 'جایی مثل بانک که مالکانش عضوهای خودش هستند' },
    fed: { en: 'the Federal Reserve, the central bank of the United States, created in 1913', es: 'la Reserva Federal, el banco central de Estados Unidos, creado en 1913', fa: 'فدرال ریزرو، بانک مرکزی امریکا، که در ۱۹۱۳ ساخته شد' },
    'central bank': { en: 'a country\'s main bank: it watches over banks and the money supply', es: 'el banco principal de un país: vigila a los bancos y la cantidad de dinero', fa: 'بانک اصلی یک کشور: بانک‌ها و مقدار پول را زیر نظر دارد' },
    'money supply': { en: 'how much money there is in the whole economy', es: 'cuánto dinero hay en toda la economía', fa: 'این که در تمام اقتصاد چقدر پول هست' },
    fdic: { en: 'a US agency, made in 1933, that insures bank deposits up to $250,000 per person at each bank', es: 'una agencia de EE. UU., creada en 1933, que asegura depósitos hasta $250,000 por persona en cada banco', fa: 'اداره‌ای در امریکا، ساخته‌شده در ۱۹۳۳، که پول سپرده را تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه می‌کند' },
    phishing: { en: 'fake texts or emails that try to steal your passwords, PIN or codes', es: 'mensajes o correos falsos que intentan robar tus contraseñas, tu PIN o tus códigos', fa: 'پیام یا ایمیل دروغ که می‌خواهد رمز، پین یا کود تو را بدزدد' },
    pin: { en: 'a secret number for your card; never share it with anyone', es: 'un número secreto de tu tarjeta; nunca se lo des a nadie', fa: 'عدد مخفی کارت تو؛ هرگز آن را به کسی نگو' },
    'two-step login': { en: 'logging in with a password plus a second check, like a code on your phone', es: 'entrar con la contraseña y un segundo control, como un código en tu teléfono', fa: 'داخل شدن با رمز و یک بررسی دوم، مثل یک کود روی تیلفونت' },
    scam: { en: 'a trick to take your money or your secret information', es: 'un engaño para quitarte el dinero o tus datos secretos', fa: 'یک فریب برای گرفتن پول یا معلومات مخفی تو' }
  },

  npcs: [
    {
      x: 21, y: 5,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Bank teller', es: 'Cajera de banco', fa: 'تحویلدار بانک' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'Hi! I am a teller at Riverbend Community Bank.', es: '¡Hola! Soy cajera en el Banco Comunitario Riverbend.', fa: 'سلام! من تحویلدار بانک محلی ریوربند هستم.' },
        { en: 'Money you put in the bank is a [[deposit|deposit]]. We keep it safe.', es: 'El dinero que pones en el banco es un [[deposit|depósito]]. Lo cuidamos.', fa: 'پولی که در بانک می‌گذاری [[deposit|سپرده]] است. ما آن را امن نگه می‌داریم.' },
        { en: 'We pay [[interest|interest]] on savings. Save $100 for a year at 2%. You get $2.', es: 'Pagamos [[interest|interés]] por los ahorros. Ahorra $100 un año al 2%. Recibes $2.', fa: 'ما برای پس‌انداز [[interest|سود]] می‌دهیم. ۱۰۰ دالر را یک سال با ۲٪ نگه دار. ۲ دالر می‌گیری.' },
        { en: 'We also make [[loan|loans]]. Borrowers pay us back, plus more interest.', es: 'También damos [[loan|préstamos]]. Quien pide prestado nos devuelve el dinero, más interés.', fa: 'ما [[loan|قرض]] هم می‌دهیم. قرض‌گیرنده‌ها پول را با سود بیشتر پس می‌دهند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How does a bank earn money?', es: '¿Cómo gana dinero un banco?', fa: 'بانک چطور پول کمایی می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'It charges more on loans than it pays savers', es: 'Cobra más por los préstamos de lo que paga al ahorrar', fa: 'از قرض بیشتر می‌گیرد تا آنچه به پس‌انداز می‌دهد' },
            why: { en: 'Yes! Loan interest is higher than savings interest. The difference pays the bank.', es: '¡Sí! El interés de los préstamos es más alto que el de los ahorros. La diferencia es del banco.', fa: 'بله! سود قرض از سود پس‌انداز بیشتر است. همین فرق، کمایی بانک است.' } },
          { t: { en: 'It prints new dollar bills in the back room', es: 'Imprime billetes nuevos en un cuarto de atrás', fa: 'در اتاق پشتی نوت‌های نو چاپ می‌کند' },
            why: { en: 'No. Banks cannot print money. The US government makes bills and coins.', es: 'No. Los bancos no pueden imprimir dinero. El gobierno de EE. UU. hace los billetes y monedas.', fa: 'نه. بانک‌ها پول چاپ کرده نمی‌توانند. حکومت امریکا نوت و سکه را می‌سازد.' } },
          { t: { en: 'The city pays it for each new customer', es: 'La ciudad le paga por cada cliente nuevo', fa: 'شهر برای هر مشتری نو به آن پول می‌دهد' },
            why: { en: 'No. Banks earn from loans. Borrowers pay back more than they borrowed.', es: 'No. Los bancos ganan con los préstamos. Se devuelve más de lo que se pidió.', fa: 'نه. بانک‌ها از قرض کمایی می‌کنند. قرض‌گیرنده بیشتر از آنچه گرفته پس می‌دهد.' } }
        ]
      }
    },
    {
      x: 19, y: 15,
      name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      role: { en: 'Walking-tour guide', es: 'Guía de paseos a pie', fa: 'رهنمای گردش پیاده' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#8a2a2a', pants: '#3a3a3a', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Look up! That tall building is the Federal Reserve Bank of Richmond.', es: '¡Mira arriba! Ese edificio alto es el Banco de la Reserva Federal de Richmond.', fa: 'بالا را ببین! آن ساختمان بلند بانک فدرال ریزرو ریچموند است.' },
        { en: 'The [[fed|Fed]] is the [[central bank|central bank]] of the United States. It began in 1913.', es: 'La [[fed|Reserva Federal]] es el [[central bank|banco central]] de Estados Unidos. Empezó en 1913.', fa: '[[fed|فدرال ریزرو]] [[central bank|بانک مرکزی]] امریکا است. در ۱۹۱۳ شروع شد.' },
        { en: 'It has 12 regional banks. Richmond is the head bank of the Fifth District.', es: 'Tiene 12 bancos regionales. Richmond es el banco principal del Quinto Distrito.', fa: '۱۲ بانک منطقه‌ای دارد. ریچموند بانک اصلی ناحیهٔ پنجم است.' },
        { en: 'The Fed watches over banks. It manages the [[money supply|money supply]] to keep prices steady.', es: 'La Reserva Federal vigila a los bancos. Maneja la [[money supply|cantidad de dinero]] para que los precios no cambien mucho.', fa: 'فدرال ریزرو بانک‌ها را زیر نظر دارد. [[money supply|مقدار پول]] را اداره می‌کند تا قیمت‌ها ثابت بمانند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is one job of the Fed?', es: '¿Cuál es un trabajo de la Reserva Federal?', fa: 'یک کار فدرال ریزرو چیست؟' },
        choices: [
          { ok: true, t: { en: 'It manages how much money is in the economy', es: 'Maneja cuánto dinero hay en la economía', fa: 'اداره می‌کند که در اقتصاد چقدر پول باشد' },
            why: { en: 'Yes! It manages the money supply to help keep prices steady.', es: '¡Sí! Maneja la cantidad de dinero para ayudar a que los precios no cambien mucho.', fa: 'بله! مقدار پول را اداره می‌کند تا قیمت‌ها ثابت بمانند.' } },
          { t: { en: 'It opens savings accounts for teenagers', es: 'Abre cuentas de ahorros para adolescentes', fa: 'برای نوجوانان حساب پس‌انداز باز می‌کند' },
            why: { en: 'No. The Fed is a bank for banks. People save at banks and credit unions.', es: 'No. La Reserva Federal es un banco para bancos. La gente ahorra en bancos y cooperativas.', fa: 'نه. فدرال ریزرو بانکِ بانک‌ها است. مردم در بانک و اتحادیهٔ اعتباری پس‌انداز می‌کنند.' } },
          { t: { en: 'It sets the price of every bag of chips', es: 'Pone el precio de cada bolsa de papitas', fa: 'قیمت هر پاکت چپس را تعیین می‌کند' },
            why: { en: 'No. Stores set their own prices. The Fed works to keep prices steady overall.', es: 'No. Las tiendas ponen sus precios. La Reserva Federal busca que los precios, en general, no cambien mucho.', fa: 'نه. دکان‌ها قیمت خود را تعیین می‌کنند. فدرال ریزرو کوشش می‌کند قیمت‌ها در کل ثابت بمانند.' } }
        ]
      }
    },
    {
      x: 11, y: 20,
      name: { en: 'Mrs. Lewis', es: 'Sra. Lewis', fa: 'خانم لوئیس' },
      role: { en: 'Retired bus driver', es: 'Chofer de autobús jubilada', fa: 'دریور بس متقاعد' },
      look: { skin: 5, hair: '#b8b8b8', shirt: '#9a6ac0', pants: '#2a2a3a', hat: '#e0c060', style: 'short' },
      lines: [
        { en: 'In the 1930s, many banks failed. Many people lost their savings.', es: 'En los años 1930, muchos bancos quebraron. Mucha gente perdió sus ahorros.', fa: 'در سال‌های ۱۹۳۰، بانک‌های زیادی ورشکست شدند. مردم زیاد پس‌انداز خود را از دست دادند.' },
        { en: 'So in 1933, the country made the [[fdic|FDIC]]. It insures bank deposits.', es: 'Por eso en 1933 el país creó la [[fdic|FDIC]]. Asegura los depósitos del banco.', fa: 'برای همین در ۱۹۳۳ کشور [[fdic|اف‌دی‌آی‌سی]] را ساخت. پول سپرده در بانک را بیمه می‌کند.' },
        { en: 'It covers up to $250,000 per person at each insured bank.', es: 'Cubre hasta $250,000 por persona en cada banco asegurado.', fa: 'تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده را می‌پوشاند.' },
        { en: 'But crypto and stocks are NOT insured. Their value can fall.', es: 'Pero las criptomonedas y las acciones NO están aseguradas. Su valor puede bajar.', fa: 'اما کریپتو و سهام بیمه «نیستند». ارزش آنها پایین آمده می‌تواند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which money does the FDIC insure?', es: '¿Qué dinero asegura la FDIC?', fa: 'اف‌دی‌آی‌سی کدام پول را بیمه می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Savings in an insured bank account', es: 'Ahorros en una cuenta de un banco asegurado', fa: 'پس‌انداز در حساب یک بانک بیمه‌شده' },
            why: { en: 'Yes! Deposits are insured up to $250,000 per person at each insured bank.', es: '¡Sí! Los depósitos están asegurados hasta $250,000 por persona en cada banco asegurado.', fa: 'بله! پول سپرده تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده بیمه است.' } },
          { t: { en: 'Crypto coins kept in a phone app', es: 'Criptomonedas guardadas en una app', fa: 'سکه‌های کریپتو در یک برنامهٔ تیلفون' },
            why: { en: 'No. Crypto is not insured. Its value can drop fast, and it can be stolen.', es: 'No. Las criptomonedas no están aseguradas. Su valor puede caer rápido y te las pueden robar.', fa: 'نه. کریپتو بیمه نیست. ارزشش زود پایین می‌آید و دزدیده هم شده می‌تواند.' } },
          { t: { en: 'Shares of stock in a big company', es: 'Acciones de una empresa grande', fa: 'سهام یک شرکت کلان' },
            why: { en: 'No. Stocks are not insured. Their value can go down.', es: 'No. Las acciones no están aseguradas. Su valor puede bajar.', fa: 'نه. سهام بیمه نیست. ارزش آن پایین آمده می‌تواند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 4, text: { en: 'LIBRARY COMPUTER ROOM · Check the web address before you log in. Always log out.', es: 'SALA DE COMPUTADORAS · Revisa la dirección web antes de entrar. Siempre cierra tu sesión.', fa: 'اتاق کمپیوتر کتابخانه · پیش از داخل شدن، آدرس ویب‌سایت را بررسی کن. همیشه خارج شو.' } },
    { x: 23, y: 3, text: { en: 'RIVERBEND COMMUNITY BANK · Member FDIC. Deposits insured up to $250,000 per person.', es: 'BANCO COMUNITARIO RIVERBEND · Miembro de la FDIC. Depósitos asegurados hasta $250,000 por persona.', fa: 'بانک محلی ریوربند · عضو اف‌دی‌آی‌سی. پول سپرده تا ۲۵۰٬۰۰۰ دالر برای هر نفر بیمه است.' } },
    { x: 19, y: 13, text: { en: 'FEDERAL RESERVE BANK OF RICHMOND · The head bank of the Fifth District.', es: 'BANCO DE LA RESERVA FEDERAL DE RICHMOND · El banco principal del Quinto Distrito.', fa: 'بانک فدرال ریزرو ریچموند · بانک اصلی ناحیهٔ پنجم.' } },
    { x: 3, y: 20, text: { en: 'JAMES RIVER · The river runs right through downtown Richmond.', es: 'RÍO JAMES · El río pasa por el centro de Richmond.', fa: 'دریای جیمز · این دریا از وسط مرکز شهر ریچموند می‌گذرد.' } }
  ],

  /* the quest: Maya the café cashier (gold !) in the north-west -> Kwame at the phone repair shop in the south-west
     -> carry the right thing to Ms. Patel at the credit union, north-east -> back to Maya.
     Ms. Patel needs Maya's photo ID to open the account; the PIN note and the password note must never be handed over. */
  quest: {
    stat: 'mov',
    title: { en: 'Maya\'s First Account', es: 'La primera cuenta de Maya', fa: 'اولین حساب مایا' },
    giver: {
      x: 12, y: 5,
      name: { en: 'Maya', es: 'Maya', fa: 'مایا' },
      role: { en: 'Café cashier, age 18', es: 'Cajera del café, 18 años', fa: 'صندوقدار کافه، ۱۸ ساله' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I just got my first paycheck! I want to save it.', es: '¡Acabo de recibir mi primer sueldo! Quiero ahorrarlo.', fa: 'همین حالا اولین معاشم را گرفتم! می‌خواهم آن را پس‌انداز کنم.' },
        { en: 'The credit union will open a savings account for me.', es: 'La cooperativa de crédito me va a abrir una cuenta de ahorros.', fa: 'اتحادیهٔ اعتباری برایم یک حساب پس‌انداز باز می‌کند.' },
        { en: 'But my bag spilled on the way to work! My things are everywhere.', es: '¡Pero mi bolsa se cayó camino al trabajo! Mis cosas están por todas partes.', fa: 'اما در راه کار بکسم افتاد! چیزهایم همه جا پراکنده شده.' },
        { en: 'Kwame at the phone shop knows what the credit union needs. Ask him!', es: 'Kwame, el de la tienda de teléfonos, sabe qué necesita la cooperativa. ¡Pregúntale!', fa: 'کوامی در دکان تیلفون می‌داند اتحادیه چه لازم دارد. از او بپرس!' }
      ],
      wait: { en: 'Kwame works at the phone repair shop, south of Main Street.', es: 'Kwame trabaja en la tienda de teléfonos, al sur de Main Street.', fa: 'کوامی در دکان ترمیم تیلفون کار می‌کند، جنوب سرک مِین.' },
      thanks: { en: 'My account is open! I showed my ID and kept my PIN secret.', es: '¡Mi cuenta está abierta! Mostré mi identificación y guardé mi PIN en secreto.', fa: 'حسابم باز شد! تذکره‌ام را نشان دادم و پینم را مخفی نگه داشتم.' }
    },
    contact: {
      x: 6, y: 15,
      name: { en: 'Kwame', es: 'Kwame', fa: 'کوامی' },
      role: { en: 'Phone repair tech', es: 'Técnico de teléfonos', fa: 'مستری تیلفون' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f6f4a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Your phone holds the keys to your money. Guard them!', es: 'Tu teléfono guarda las llaves de tu dinero. ¡Cuídalas!', fa: 'تیلفونت کلیدهای پولت را دارد. از آنها محافظت کن!' },
        { en: 'To open an account, the credit union checks who you are.', es: 'Para abrir una cuenta, la cooperativa revisa quién eres.', fa: 'برای باز کردن حساب، اتحادیه بررسی می‌کند که تو کی هستی.' },
        { en: 'Bring Ms. Patel Maya\'s photo ID. Never hand over a [[pin|PIN]] or password!', es: 'Llévale a la Sra. Patel la identificación con foto de Maya. ¡Nunca entregues un [[pin|PIN]] ni una contraseña!', fa: 'تذکرهٔ عکس‌دار مایا را برای خانم پتل ببر. هرگز [[pin|پین]] یا رمز را نده!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 29, y: 4,
        name: { en: 'Ms. Patel', es: 'Sra. Patel', fa: 'خانم پتل' },
        role: { en: 'Credit union worker', es: 'Empleada de la cooperativa', fa: 'کارمند اتحادیهٔ اعتباری' },
        look: { skin: 2, hair: '#1a1008', shirt: '#3a9aa0', pants: '#2a2a3a', style: 'bun' },
        lines: [
          { en: 'Hi! I help new members open accounts at the credit union.', es: '¡Hola! Ayudo a los socios nuevos a abrir cuentas en la cooperativa.', fa: 'سلام! من به عضوهای نو کمک می‌کنم در اتحادیه حساب باز کنند.' },
          { en: 'First, I must check who the new member is.', es: 'Primero tengo que revisar quién es el socio nuevo.', fa: 'اول باید بررسی کنم که عضو نو کی است.' }
        ]
      },
      q: { en: 'Which of Maya\'s things should you bring me to open her account?', es: '¿Cuál de las cosas de Maya me traes para abrir su cuenta?', fa: 'کدام چیز مایا را برایم می‌آوری تا حسابش را باز کنم؟' },
      choices: [
        { ok: true, at: [5, 8], icon: '🪪', t: { en: 'Maya\'s photo ID', es: 'La identificación con foto de Maya', fa: 'تذکرهٔ عکس‌دار مایا' },
          why: { en: 'Right! A photo ID shows who Maya is. Now I can open her account.', es: '¡Correcto! La identificación muestra quién es Maya. Ya puedo abrir su cuenta.', fa: 'درست! تذکرهٔ عکس‌دار نشان می‌دهد مایا کیست. حالا حسابش را باز کرده می‌توانم.' } },
        { at: [13, 15], icon: '🔢', t: { en: 'A note with her PIN', es: 'Una nota con su PIN', fa: 'یک یادداشت با پین او' },
          why: { en: 'Never share a PIN, not even with a bank worker. A real bank won\'t ask.', es: 'Nunca compartas un PIN, ni con un empleado del banco. Un banco real no lo pide.', fa: 'هرگز پین را به کسی نده، حتی به کارمند بانک. بانک واقعی آن را نمی‌خواهد.' } },
        { at: [29, 16], icon: '🔑', t: { en: 'A note with her password', es: 'Una nota con su contraseña', fa: 'یک یادداشت با رمز او' },
          why: { en: 'Keep passwords secret. A real bank never asks for your password.', es: 'Guarda tus contraseñas en secreto. Un banco real nunca te pide tu contraseña.', fa: 'رمزها را مخفی نگه دار. بانک واقعی هرگز رمز تو را نمی‌خواهد.' } }
      ],
      item: { icon: '📒', name: { en: 'Maya\'s new savings account', es: 'La nueva cuenta de ahorros de Maya', fa: 'حساب پس‌انداز نو مایا' } }
    }
  },

  scraps: [[1, 1], [30, 10], [30, 20]],
  smudges: [[25, 9], [11, 12]],

  challenge: {
    at: [8, 7],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each choice: reply with the PIN (by the park), tap the link (by the café), call the bank (by the bank)
    spots: [[3, 9], [12, 9], [19, 8]],
    stat: 'mov',
    title: { en: 'The scary text', es: 'El mensaje que asusta', fa: 'پیام ترسناک' },
    intro: { en: 'A text arrives: "Your account is locked! Send your PIN now." Visit each flag. Plant yours on the safe choice, then say why.',
      es: 'Llega un mensaje: "¡Tu cuenta está bloqueada! Envía tu PIN ya." Visita cada bandera. Pon la tuya en la opción segura y di por qué.',
      fa: 'یک پیام می‌آید: «حسابت قفل شد! همین حالا پینت را بفرست.» به هر بیرق سر بزن. بیرقت را روی انتخاب امن بگذار و بگو چرا.' },
    options: [
      { icon: '📲', name: { en: 'Reply with your PIN', es: 'Responder con tu PIN', fa: 'با پینت جواب بده' },
        desc: { en: 'Send the PIN so the account opens fast.', es: 'Enviar el PIN para que la cuenta se abra rápido.', fa: 'پین را بفرست تا حساب زود باز شود.' },
        result: { en: 'The text was a scam. The thief uses your PIN and takes your money.', es: 'El mensaje era una estafa. El ladrón usa tu PIN y se lleva tu dinero.', fa: 'پیام فریب بود. دزد از پین تو کار می‌گیرد و پولت را می‌برد.' } },
      { icon: '🔗', name: { en: 'Tap the link in the text', es: 'Tocar el enlace del mensaje', fa: 'روی لینک پیام بزن' },
        desc: { en: 'The link opens a page that looks like your bank.', es: 'El enlace abre una página que parece de tu banco.', fa: 'لینک صفحه‌ای را باز می‌کند که مثل بانک تو معلوم می‌شود.' },
        result: { en: 'The page was fake. It steals the password you type.', es: 'La página era falsa. Roba la contraseña que escribes.', fa: 'صفحه دروغ بود. رمزی را که می‌نویسی می‌دزدد.' } },
      { icon: '☎️', name: { en: 'Don\'t reply. Call the bank.', es: 'No responder. Llamar al banco.', fa: 'جواب نده. به بانک زنگ بزن.' },
        desc: { en: 'Use the phone number on your bank card.', es: 'Usar el número de teléfono de tu tarjeta del banco.', fa: 'از نمبر تیلفونی که روی کارت بانکت است کار بگیر.' },
        result: { en: 'The real bank says your account is fine. Your money is safe!', es: 'El banco real dice que tu cuenta está bien. ¡Tu dinero está seguro!', fa: 'بانک واقعی می‌گوید حسابت خوب است. پولت امن است!' } }
    ],
    kinds: [
      { id: 'protect', label: { en: 'How it keeps your money safe', es: 'Cómo protege tu dinero', fa: 'چطور پولت را امن نگه می‌دارد' } },
      { id: 'sign', label: { en: 'What shows the text is a scam', es: 'Qué muestra que el mensaje es una estafa', fa: 'چه چیز نشان می‌دهد که پیام فریب است' } }
    ],
    reasons: [
      { kind: 'protect', fits: [2], t: { en: 'The number on your card really goes to your bank.', es: 'El número de tu tarjeta de verdad llama a tu banco.', fa: 'نمبر روی کارتت واقعاً به بانک تو وصل می‌شود.' },
        why: { en: 'Calling that number reaches the real bank, not the scammer.', es: 'Ese número llega al banco real, no al estafador.', fa: 'آن نمبر به بانک واقعی می‌رسد، نه به فریبکار.' } },
      { kind: 'protect', fits: [2], t: { en: 'Not replying keeps your PIN a secret.', es: 'No responder mantiene tu PIN en secreto.', fa: 'جواب ندادن پینت را مخفی نگه می‌دارد.' },
        why: { en: 'If you never send it, no one can steal it.', es: 'Si nunca lo envías, nadie lo puede robar.', fa: 'اگر هرگز آن را نفرستی، کسی آن را دزدیده نمی‌تواند.' } },
      { kind: 'protect', fits: [], t: { en: 'The texts will stop once you send your PIN.', es: 'Los mensajes pararán cuando envíes tu PIN.', fa: 'وقتی پینت را بفرستی، پیام‌ها بس می‌شوند.' },
        why: { en: 'They will not stop. Scammers who get your PIN take your money.', es: 'No pararán. Los estafadores que tienen tu PIN se llevan tu dinero.', fa: 'بس نمی‌شوند. فریبکاری که پینت را بگیرد، پولت را می‌برد.' } },
      { kind: 'protect', fits: [], t: { en: 'A page is safe if it looks like your bank.', es: 'Una página es segura si se parece a tu banco.', fa: 'اگر صفحه مثل بانکت معلوم شود، امن است.' },
        why: { en: 'Fake pages can look real. Check the web address, or call the bank.', es: 'Las páginas falsas pueden parecer reales. Revisa la dirección web o llama al banco.', fa: 'صفحه‌های دروغ واقعی معلوم شده می‌توانند. آدرس ویب‌سایت را ببین یا به بانک زنگ بزن.' } },
      { kind: 'sign', fits: [2], t: { en: 'A real bank never asks for your PIN in a text.', es: 'Un banco real nunca te pide tu PIN por mensaje.', fa: 'بانک واقعی هرگز پینت را با پیام نمی‌خواهد.' },
        why: { en: 'Asking for a PIN is a big warning sign of [[phishing|phishing]].', es: 'Pedir un PIN es una gran señal de [[phishing|phishing]].', fa: 'خواستن پین یک نشانهٔ بزرگ [[phishing|فیشینگ]] است.' } },
      { kind: 'sign', fits: [2], t: { en: 'It rushes you with "now!" so you don\'t stop to think.', es: 'Te apura con "¡ya!" para que no te detengas a pensar.', fa: 'با «همین حالا!» عجله‌ات می‌دهد تا فکر نکنی.' },
        why: { en: 'Scams rush you. Slow down and call the bank yourself.', es: 'Las estafas te apuran. Ve despacio y llama tú al banco.', fa: 'فریب‌ها عجله می‌دهند. آرام باش و خودت به بانک زنگ بزن.' } },
      { kind: 'sign', fits: [], t: { en: 'It uses the word "account," so it must be real.', es: 'Usa la palabra "cuenta", así que debe ser real.', fa: 'کلمهٔ «حساب» را دارد، پس باید واقعی باشد.' },
        why: { en: 'Anyone can type that word. It does not prove the text is real.', es: 'Cualquiera puede escribir esa palabra. No prueba que el mensaje sea real.', fa: 'هر کس این کلمه را نوشته می‌تواند. این ثابت نمی‌کند که پیام واقعی است.' } }
    ],
    mismatch: { en: 'That reason does not back up your choice. Would it keep your money safe?', es: 'Esa razón no apoya tu elección. ¿Protegería tu dinero?', fa: 'این دلیل از انتخاب تو پشتیبانی نمی‌کند. آیا پولت را امن نگه می‌دارد؟' },
    success: { en: 'Safe! You did not reply. You called the bank with the number on your card.', es: '¡A salvo! No respondiste. Llamaste al banco con el número de tu tarjeta.', fa: 'امن! جواب ندادی. با نمبر روی کارتت به بانک زنگ زدی.' }
  },

  boss: {
    at: [24, 20],
    stat: 'mov',
    need: 3,
    name: { en: 'The Phishing Grump', es: 'El Gruñón Pescador', fa: 'غرغروی فیشینگ' },
    appear: { en: 'The Phishing Grump is hiding in the fog by the James River!', es: '¡El Gruñón Pescador se esconde en la niebla junto al río James!', fa: 'غرغروی فیشینگ در مه کنار دریای جیمز پنهان است!' },
    taunt: { en: 'Psst! Your account is locked! Just tell me your PIN. Hurry, hurry!', es: '¡Psst! ¡Tu cuenta está bloqueada! Solo dime tu PIN. ¡Rápido, rápido!', fa: 'پیس! حسابت قفل شد! فقط پینت را به من بگو. زود، زود!' },
    win: { en: 'The fog lifts off the river. Ledger page 2.2 floats down into your hands!', es: 'La niebla se va del río. ¡La página 2.2 del libro cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۲.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'How does a bank make money from a loan?', es: '¿Cómo gana dinero un banco con un préstamo?', fa: 'بانک از قرض چطور پول کمایی می‌کند؟' },
        choices: [
          { en: 'It charges interest on the loan', es: 'Cobra interés por el préstamo', fa: 'بالای قرض سود می‌گیرد' },
          { en: 'It prints new bills for itself', es: 'Imprime billetes nuevos para sí', fa: 'برای خودش نوت نو چاپ می‌کند' },
          { en: 'It keeps the borrower\'s house', es: 'Se queda con la casa de quien pide', fa: 'خانهٔ قرض‌گیرنده را نگه می‌دارد' },
          { en: 'It asks the Fed for a free gift', es: 'Le pide un regalo a la Reserva Federal', fa: 'از فدرال ریزرو تحفهٔ مفت می‌خواهد' }],
        answer: 0,
        why: { en: 'Borrowers pay back the loan plus interest. That interest is how banks earn.', es: 'Quien pide prestado devuelve el préstamo más interés. Así ganan los bancos.', fa: 'قرض‌گیرنده قرض را با سود پس می‌دهد. بانک‌ها از همین سود کمایی می‌کنند.' } },
      { q: { en: 'Who owns a credit union?', es: '¿Quién es dueño de una cooperativa de crédito?', fa: 'مالک اتحادیهٔ اعتباری کیست؟' },
        choices: [
          { en: 'Its members', es: 'Sus socios', fa: 'عضوهای آن' },
          { en: 'The Fed', es: 'La Reserva Federal', fa: 'فدرال ریزرو' },
          { en: 'One rich family', es: 'Una familia rica', fa: 'یک خانوادهٔ پولدار' },
          { en: 'The city mayor', es: 'El alcalde', fa: 'شاروال شهر' }],
        answer: 0,
        why: { en: 'Members own a credit union. Profits often come back to them as lower fees.', es: 'Los socios son dueños de la cooperativa. Las ganancias a menudo vuelven como cobros más bajos.', fa: 'عضوها مالک اتحادیهٔ اعتباری هستند. مفاد اکثراً به شکل فیس کمتر به آنها برمی‌گردد.' } },
      { q: { en: 'What is the Federal Reserve?', es: '¿Qué es la Reserva Federal?', fa: 'فدرال ریزرو چیست؟' },
        choices: [
          { en: 'The central bank of the US', es: 'El banco central de EE. UU.', fa: 'بانک مرکزی امریکا' },
          { en: 'A big store that sells gold', es: 'Una tienda grande que vende oro', fa: 'یک دکان کلان که طلا می‌فروشد' },
          { en: 'A savings app on your phone', es: 'Una app de ahorros en tu teléfono', fa: 'یک برنامهٔ پس‌انداز در تیلفونت' },
          { en: 'A bank only for teenagers', es: 'Un banco solo para jóvenes', fa: 'بانکی فقط برای نوجوانان' }],
        answer: 0,
        why: { en: 'The Fed is the US central bank. It began in 1913 and has 12 regional banks.', es: 'La Reserva Federal es el banco central de EE. UU. Empezó en 1913 y tiene 12 bancos regionales.', fa: 'فدرال ریزرو بانک مرکزی امریکا است. در ۱۹۱۳ شروع شد و ۱۲ بانک منطقه‌ای دارد.' } },
      { q: { en: 'Why does the Fed manage the money supply?', es: '¿Por qué la Reserva Federal maneja la cantidad de dinero?', fa: 'چرا فدرال ریزرو مقدار پول را اداره می‌کند؟' },
        choices: [
          { en: 'To help keep prices steady', es: 'Para ayudar a que los precios no cambien mucho', fa: 'تا قیمت‌ها ثابت بمانند' },
          { en: 'To pick which stores open', es: 'Para elegir qué tiendas abren', fa: 'تا تعیین کند کدام دکان باز شود' },
          { en: 'To set every worker\'s pay', es: 'Para fijar el sueldo de cada trabajador', fa: 'تا معاش هر کارگر را تعیین کند' },
          { en: 'To pay for every new road', es: 'Para pagar cada carretera nueva', fa: 'تا پول هر سرک نو را بدهد' }],
        answer: 0,
        why: { en: 'The money supply is how much money is in the economy. Managing it helps keep prices steady.', es: 'Es cuánto dinero hay en la economía. Manejarla ayuda a que los precios no cambien mucho.', fa: 'مقدار پول یعنی در اقتصاد چقدر پول هست. اداره کردن آن کمک می‌کند قیمت‌ها ثابت بمانند.' } },
      { q: { en: 'Why was the FDIC created in 1933?', es: '¿Por qué se creó la FDIC en 1933?', fa: 'چرا اف‌دی‌آی‌سی در ۱۹۳۳ ساخته شد؟' },
        choices: [
          { en: 'Many banks had failed', es: 'Muchos bancos habían quebrado', fa: 'بانک‌های زیادی ورشکست شده بودند' },
          { en: 'People saved too much', es: 'La gente ahorraba demasiado', fa: 'مردم زیاد پس‌انداز می‌کردند' },
          { en: 'Banks sold too few loans', es: 'Los bancos daban pocos préstamos', fa: 'بانک‌ها قرض کم می‌دادند' },
          { en: 'Coins were too heavy', es: 'Las monedas pesaban mucho', fa: 'سکه‌ها خیلی سنگین بودند' }],
        answer: 0,
        why: { en: 'In the Great Depression, many banks failed and people lost savings. The FDIC made deposits safe.', es: 'En la Gran Depresión muchos bancos quebraron y la gente perdió sus ahorros. La FDIC protegió los depósitos.', fa: 'در رکود بزرگ، بانک‌های زیادی ورشکست شدند و مردم پس‌انداز خود را باختند. اف‌دی‌آی‌سی سپرده‌ها را امن ساخت.' } },
      { q: { en: 'Which of these is NOT insured by the FDIC?', es: '¿Cuál de estos NO está asegurado por la FDIC?', fa: 'کدام یکی از اینها توسط اف‌دی‌آی‌سی بیمه «نیست»؟' },
        choices: [
          { en: 'Crypto coins in a phone app', es: 'Criptomonedas en una app', fa: 'سکه‌های کریپتو در برنامهٔ تیلفون' },
          { en: 'Savings at an insured bank', es: 'Ahorros en un banco asegurado', fa: 'پس‌انداز در بانک بیمه‌شده' },
          { en: 'Checking at an insured bank', es: 'Cuenta corriente en un banco asegurado', fa: 'حساب جاری در بانک بیمه‌شده' },
          { en: 'A paycheck deposited in a bank', es: 'Un sueldo depositado en un banco asegurado', fa: 'معاشی که در بانک بیمه‌شده سپرده شده' }],
        answer: 0,
        why: { en: 'Crypto and stocks are not insured. Bank deposits are insured up to $250,000 per person.', es: 'Las criptomonedas y las acciones no están aseguradas. Los depósitos sí, hasta $250,000 por persona.', fa: 'کریپتو و سهام بیمه نیستند. پول سپرده در بانک تا ۲۵۰٬۰۰۰ دالر برای هر نفر بیمه است.' } },
      { q: { en: 'What is phishing?', es: '¿Qué es el phishing?', fa: 'فیشینگ چیست؟' },
        choices: [
          { en: 'Fake messages that try to steal your info', es: 'Mensajes falsos que intentan robar tus datos', fa: 'پیام‌های دروغ که معلومات تو را می‌دزدند' },
          { en: 'A safe way to pay with your phone', es: 'Una forma segura de pagar con el teléfono', fa: 'یک راه امن برای پرداخت با تیلفون' },
          { en: 'A text from your real bank about a bill', es: 'Un mensaje de tu banco real sobre una cuenta', fa: 'پیامی از بانک واقعی‌ات دربارهٔ یک بل' },
          { en: 'A long password with numbers in it', es: 'Una contraseña larga con números', fa: 'یک رمز دراز که عدد دارد' }],
        answer: 0,
        why: { en: 'Phishing tricks you into sharing passwords, PINs or codes. Don\'t reply, and don\'t tap the link.', es: 'El phishing te engaña para que des contraseñas, PIN o códigos. No respondas ni toques el enlace.', fa: 'فیشینگ تو را فریب می‌دهد تا رمز، پین یا کود را بدهی. جواب نده و روی لینک نزن.' } },
      { q: { en: 'A caller says he is from your bank and asks for your one-time code. What now?', es: 'Alguien llama, dice que es de tu banco y pide tu código de un solo uso. ¿Qué haces?', fa: 'کسی زنگ می‌زند، می‌گوید از بانک توست و کود یک‌باره‌ات را می‌خواهد. حالا چه؟' },
        choices: [
          { en: 'Hang up and call the number on your card', es: 'Colgar y llamar al número de tu tarjeta', fa: 'تیلفون را بگذار و به نمبر روی کارتت زنگ بزن' },
          { en: 'Read him the code so he can help you fast', es: 'Leerle el código para que te ayude rápido', fa: 'کود را برایش بخوان تا زود کمکت کند' },
          { en: 'Give him the code, but not your password', es: 'Darle el código, pero no tu contraseña', fa: 'کود را بده، اما رمزت را نه' },
          { en: 'Send him the code in a text message', es: 'Enviarle el código en un mensaje', fa: 'کود را با یک پیام برایش بفرست' }],
        answer: 0,
        why: { en: 'Never share a one-time code. Your real bank will not ask for it.', es: 'Nunca compartas un código de un solo uso. Tu banco real no te lo pedirá.', fa: 'هرگز کود یک‌باره را به کسی نده. بانک واقعی تو آن را نمی‌خواهد.' } }
    ]
  },

  learned: [
    { en: 'Banks keep [[deposit|deposits]] safe, pay [[interest|interest]] on savings and make [[loan|loans]].', es: 'Los bancos cuidan los [[deposit|depósitos]], pagan [[interest|interés]] por los ahorros y dan [[loan|préstamos]].', fa: 'بانک‌ها [[deposit|سپرده‌ها]] را امن نگه می‌دارند، برای پس‌انداز [[interest|سود]] می‌دهند و [[loan|قرض]] می‌دهند.' },
    { en: 'The [[fed|Fed]] watches over banks and the [[money supply|money supply]]. The [[fdic|FDIC]] insures deposits.', es: 'La [[fed|Reserva Federal]] vigila a los bancos y la [[money supply|cantidad de dinero]]. La [[fdic|FDIC]] asegura los depósitos.', fa: '[[fed|فدرال ریزرو]] بانک‌ها و [[money supply|مقدار پول]] را زیر نظر دارد. [[fdic|اف‌دی‌آی‌سی]] سپرده‌ها را بیمه می‌کند.' },
    { en: 'Never share a [[pin|PIN]] or code. If a text scares you, call the number on your card.', es: 'Nunca compartas un [[pin|PIN]] ni un código. Si un mensaje te asusta, llama al número de tu tarjeta.', fa: 'هرگز [[pin|پین]] یا کود را به کسی نده. اگر پیامی تو را ترساند، به نمبر روی کارتت زنگ بزن.' }
  ],
  reflect: {
    q: { en: 'What is one thing you will do to keep your money safe online?', es: '¿Qué es algo que harás para proteger tu dinero en internet?', fa: 'یک کاری که برای امن نگه داشتن پولت در انترنت انجام می‌دهی چیست؟' },
    starter: { en: 'To keep my money safe, I will', es: 'Para proteger mi dinero, voy a', fa: 'برای امن نگه داشتن پولم، من' }
  }
};
