/* COINWALKER · Episode 5.2 · Building Credit (credit reports, student cards)
   Charlottesville, Virginia, today: a college town street by a university campus.
   North half: the campus lawn, with a big columned hall (J) at the north end, a paved walk (l) down the middle
   and rows of trees on both sides. A bus stop sign stands at the north-east, by the street.
   Row 11: the street by campus, running east to west.
   South of the street: four shops in a row (the student bookstore, Oak Leaf Bank, the coffee shop and the
   apartment office), then a small park with a paved loop (:) around a fountain (O).
   People show a credit history and a credit report, a secured card, and keeping balances low;
   the ledger stone asks the student to walk the steps of building credit in a sensible order. */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'EPF',
  title: { en: 'Building Credit', es: 'Construir crédito', fa: 'ساختن اعتبار' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Charlottesville, college town', es: 'Charlottesville, ciudad universitaria', fa: 'شارلوتسویل، شهر پوهنتون' },
  intro: [
    { en: 'The Grump tore the page about credit. Now students borrow without a plan.',
      es: 'El Gruñón rompió la página sobre el crédito. Ahora los estudiantes piden prestado sin un plan.',
      fa: 'غرغرو صفحهٔ اعتبار را پاره کرد. حالا شاگردان بدون برنامه قرض می‌گیرند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Charlottesville on the world map (no timeline in this game) */
  scenes: {
    at: [-78.50, 38.035],
    start: [
      { en: 'Charlottesville is a small city in central Virginia, near the Blue Ridge Mountains.',
        es: 'Charlottesville es una ciudad pequeña del centro de Virginia, cerca de las montañas Blue Ridge.',
        fa: 'شارلوتسویل یک شهر کوچک در مرکز ویرجینیا است، نزدیک کوه‌های بلو ریج.' },
      { en: 'A big university is here. Thousands of students live in town.',
        es: 'Aquí hay una universidad grande. Miles de estudiantes viven en la ciudad.',
        fa: 'یک پوهنتون بزرگ اینجاست. هزاران محصل در این شهر زندگی می‌کنند.' },
      { en: 'For many students, college is where they first borrow and build credit.',
        es: 'Para muchos estudiantes, la universidad es donde piden prestado y crean crédito por primera vez.',
        fa: 'برای بسیاری از محصلان، پوهنتون جایی است که اولین بار قرض می‌گیرند و اعتبار می‌سازند.' }
    ],
    page: { en: 'A late payment can stay on a credit report for about 7 years.',
      es: 'Un pago tardío puede quedarse en un informe de crédito unos 7 años.',
      fa: 'یک پرداخت دیر می‌تواند حدود ۷ سال در گزارش اعتباری بماند.' },
    guess: {
      q: { en: 'Does a record show if you pay your bills late?', es: '¿Hay un registro que muestra si pagas tarde tus cuentas?', fa: 'آیا یک سابقه نشان می‌دهد که بل‌هایت را دیر پرداختی؟' },
      choices: [
        { t: { en: '📋 Yes, it does', es: '📋 Sí, lo muestra', fa: '📋 بله، نشان می‌دهد' }, ok: true },
        { t: { en: '🙈 No, nobody knows', es: '🙈 No, nadie lo sabe', fa: '🙈 نه، کسی نمی‌داند' } }
      ],
      why: { en: 'Yes. A credit report shows your accounts, what you owe, and any late payments.', es: 'Sí. Un informe de crédito muestra tus cuentas, lo que debes y los pagos tardíos.', fa: 'بله. گزارش اعتباری حساب‌هایت، قرض‌هایت و هر پرداخت دیر را نشان می‌دهد.' }
    },
    next: {
      q: { en: 'Next: lenders look at a number, a credit score. What raises it?', es: 'Ahora: los prestamistas miran un número, el puntaje de crédito. ¿Qué lo sube?', fa: 'بعدی: قرض‌دهنده‌ها به یک عدد نگاه می‌کنند، نمرهٔ اعتباری. چه چیز آن را بالا می‌برد؟' },
      choices: [
        { t: { en: '⏰ Paying bills on time', es: '⏰ Pagar a tiempo', fa: '⏰ پرداخت به وقتش' }, ok: true },
        { t: { en: '💳 Opening many new cards', es: '💳 Abrir muchas tarjetas', fa: '💳 گرفتن کارت‌های زیاد' } }
      ],
      why: { en: 'Paying on time matters most. Lots of new cards at once can lower a score.', es: 'Pagar a tiempo es lo que más importa. Muchas tarjetas nuevas a la vez pueden bajar el puntaje.', fa: 'پرداخت به وقتش از همه مهم‌تر است. کارت‌های نو زیاد در یک وقت نمره را پایین می‌آورد.' }
    }
  },
  /* houses: who works behind each shop door; walk in and talk */
  houses: [
    { at: [3, 13], name: { en: 'Jordan', es: 'Jordan', fa: 'جوردن' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a6a8a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I work at the student bookstore. In the fall, card tables pop up on campus.',
          es: 'Trabajo en la librería estudiantil. En otoño, aparecen mesas de tarjetas en el campus.',
          fa: 'من در کتاب‌فروشی محصلان کار می‌کنم. در خزان، میزهای کارت اعتباری در پوهنتون پیدا می‌شوند.' },
        { en: 'They give free gifts, like T-shirts. A gift is not a reason to sign up.',
          es: 'Dan regalos gratis, como camisetas. Un regalo no es razón para firmar.',
          fa: 'آنها تحفهٔ مفت می‌دهند، مثل پیراهن. تحفه دلیل خوبی برای گرفتن کارت نیست.' },
        { en: 'And do not open many cards at once. That can hurt your credit.',
          es: 'Y no abras muchas tarjetas a la vez. Eso puede dañar tu crédito.',
          fa: 'و کارت‌های زیاد را در یک وقت نگیر. این به اعتبارت ضرر می‌زند.' }
      ] },
    { at: [9, 13], name: { en: 'Ms. Reyes', es: 'Sra. Reyes', fa: 'خانم ریس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#7a2a4a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome to Oak Leaf Bank. Some people start with a [[credit-builder loan|credit-builder loan]].',
          es: 'Bienvenido a Oak Leaf Bank. Algunas personas empiezan con un [[credit-builder loan|préstamo para crear crédito]].',
          fa: 'به بانک اوک لیف خوش آمدی. بعضی‌ها با یک [[credit-builder loan|قرضهٔ ساختن اعتبار]] شروع می‌کنند.' },
        { en: 'The bank keeps the loan money in an account while you make payments.',
          es: 'El banco guarda el dinero del préstamo en una cuenta mientras haces los pagos.',
          fa: 'بانک پول قرضه را در یک حساب نگه می‌دارد، تا تو قسط‌ها را بپردازی.' },
        { en: 'When you finish paying, you get the money. Your on-time payments are recorded.',
          es: 'Cuando terminas de pagar, recibes el dinero. Tus pagos a tiempo quedan registrados.',
          fa: 'وقتی پرداخت تمام شد، پول را می‌گیری. پرداخت‌های به وقتت ثبت می‌شوند.' }
      ] },
    { at: [15, 13], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 0, hair: '#c8a165', shirt: '#4a7a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I make coffee here. My aunt added me to her card as an [[authorized user|authorized user]].',
          es: 'Hago café aquí. Mi tía me agregó a su tarjeta como [[authorized user|usuario autorizado]].',
          fa: 'من اینجا قهوه درست می‌کنم. عمه‌ام مرا به کارتش [[authorized user|استفاده‌کنندهٔ مجاز]] ساخت.' },
        { en: 'She always pays on time. That helped me start a [[credit history|credit history]].',
          es: 'Ella siempre paga a tiempo. Eso me ayudó a empezar un [[credit history|historial de crédito]].',
          fa: 'او همیشه به وقتش می‌پردازد. این کمک کرد که [[credit history|سابقهٔ اعتباری]] من شروع شود.' },
        { en: 'Pick an adult you trust. If they pay late, it can hurt you too.',
          es: 'Elige a un adulto de confianza. Si paga tarde, también te puede dañar.',
          fa: 'یک بزرگسال قابل اعتماد را انتخاب کن. اگر او دیر بپردازد، به تو هم ضرر می‌رسد.' }
      ] },
    { at: [21, 13], name: { en: 'Mrs. Tran', es: 'Sra. Tran', fa: 'خانم ترن' },
      look: { skin: 1, hair: '#120c08', shirt: '#c08a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I run the apartment office. We often look at a renter\'s credit report.',
          es: 'Dirijo la oficina de apartamentos. Muchas veces miramos el informe de crédito de quien alquila.',
          fa: 'من دفتر آپارتمان‌ها را اداره می‌کنم. ما اکثراً گزارش اعتباری کرایه‌نشین را می‌بینیم.' },
        { en: 'Miss the [[due date|due date]] on a card, and you may pay a [[late fee|late fee]].',
          es: 'Si no pagas tu tarjeta en la [[due date|fecha de pago]], puedes pagar un [[late fee|cargo por atraso]].',
          fa: 'اگر [[due date|روز آخر پرداخت]] کارت را از دست بدهی، شاید [[late fee|جریمهٔ دیر پرداخت]] بدهی.' },
        { en: 'Late payments on a report can make it harder to rent a home.',
          es: 'Los pagos tardíos en un informe pueden hacer más difícil alquilar una casa.',
          fa: 'پرداخت‌های دیر در گزارش، کرایه گرفتن خانه را سخت‌تر می‌سازد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the columned hall (J) at the north end of the campus lawn, a paved walk (l) down the middle,
     rows of trees (T) on both sides, flowers (,) in the corners, the lawn sign (x) west and the bus stop sign (x) east.
     Row 11: the street by campus.
     South: four shops (R/Q over h): the bookstore, Oak Leaf Bank, the coffee shop, the apartment office.
     Then a small park with a paved loop (:) around a fountain (O), and a sign (x) in the south-west. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.,,......JJJJJJJJJJJJ......,,.T',
    'T.,,......JJJJJJJJJJJJ......,,.T',
    'T.........llllllllllll.........T',
    'T...T..T..T..llllll..T..T..T...T',
    'T............llllll............T',
    'T...T..T..T..llllll..T..T..T...T',
    'T.x..........llllll............T',
    'T...T..T..T..llllll..T..T..T...T',
    'T............llllll.........x..T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T.RRR...QQQ...RRR...QQQ...,,,..T',
    'T.hdh...hdh...hdh...hdh...,,,..T',
    'T..............................T',
    'T....T...T....::::::::....T....T',
    'T.............:......:.........T',
    'T..T..x.......:..O...:.....T...T',
    'T.............:......:.........T',
    'T...T.........::::::::....T....T',
    'T..............................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 3], at: [20, 7], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south, down the east side of the lawn.', es: 'Desde esta nota, camina 4 pasos al sur, por el lado este del césped.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از طرف شرق چمن.' },
      text: { en: 'A feather pen! Long ago, shop owners wrote in a book who owed them money.', es: '¡Una pluma para escribir! Hace mucho, los tenderos anotaban en un libro quién les debía.', fa: 'یک قلم پَر! در قدیم، دکان‌دارها در یک کتاب می‌نوشتند کی به آنها قرضدار است.' } },
    { clueAt: [4, 20], at: [9, 20], decor: 'flower',
      clue: { en: 'From this note, walk 5 steps east, along the south edge of the park.', es: 'Desde esta nota, camina 5 pasos al este, por el borde sur del parque.', fa: 'از این یادداشت، ۵ قدم به شرق برو، در کنار جنوبی پارک.' },
      text: { en: 'A dogwood flower! The dogwood is the state flower of Virginia.', es: '¡Una flor de cornejo! El cornejo es la flor del estado de Virginia.', fa: 'یک گل داگوود! داگوود گل ایالتی ویرجینیا است.' } }
  ],

  words: {
    credit: { en: 'borrowing money now and paying it back later', es: 'pedir dinero prestado ahora y devolverlo después', fa: 'قرض گرفتن پول حالا و پس دادن آن بعداً' },
    'credit history': { en: 'the record of how you borrow and pay back', es: 'el registro de cómo pides prestado y pagas', fa: 'سابقهٔ این که چطور قرض می‌گیری و پس می‌دهی' },
    'credit report': { en: 'a report of your accounts, what you owe, and if you paid on time', es: 'un informe de tus cuentas, lo que debes y si pagaste a tiempo', fa: 'گزارش حساب‌هایت، قرض‌هایت، و این که به وقتش پرداختی یا نه' },
    'credit bureau': { en: 'a company that keeps credit reports; there are 3 nationwide', es: 'una empresa que guarda informes de crédito; hay 3 nacionales', fa: 'شرکتی که گزارش‌های اعتباری را نگه می‌دارد؛ ۳ شرکت سراسری هست' },
    'secured card': { en: 'a credit card where your deposit is your credit limit', es: 'una tarjeta de crédito donde tu depósito es tu límite', fa: 'کارت اعتباری که پول ضمانت تو حد اعتبار آن است' },
    'credit limit': { en: 'the most you can borrow on a card', es: 'lo máximo que puedes pedir prestado con una tarjeta', fa: 'بیشترین پولی که با کارت قرض گرفته می‌توانی' },
    balance: { en: 'how much you owe on the card right now', es: 'cuánto debes en la tarjeta ahora', fa: 'این که حالا چقدر به کارت قرضدار هستی' },
    'minimum payment': { en: 'the smallest amount you must pay each month', es: 'la cantidad más pequeña que debes pagar cada mes', fa: 'کمترین پولی که هر ماه باید بپردازی' },
    interest: { en: 'extra money you pay for borrowing', es: 'dinero extra que pagas por pedir prestado', fa: 'پول اضافه که برای قرض گرفتن می‌پردازی' },
    apr: { en: 'the yearly interest rate on money you owe', es: 'la tasa de interés por año sobre lo que debes', fa: 'نرخ سود سالانه بر پولی که قرضدار هستی' },
    'grace period': { en: 'the time before the due date when no interest is added if you pay in full', es: 'el tiempo antes de la fecha de pago sin interés si pagas todo', fa: 'وقت پیش از روز آخر پرداخت که اگر همه را بپردازی سود اضافه نمی‌شود' },
    'due date': { en: 'the last day to pay your bill on time', es: 'el último día para pagar tu cuenta a tiempo', fa: 'آخرین روز برای پرداخت بل به وقتش' },
    'late fee': { en: 'money you pay as a penalty for paying late', es: 'dinero que pagas como castigo por pagar tarde', fa: 'پولی که به جریمهٔ دیر پرداختن می‌دهی' },
    'authorized user': { en: 'a person allowed to use someone else\'s card account', es: 'una persona que puede usar la cuenta de tarjeta de otra persona', fa: 'کسی که اجازه دارد از حساب کارت شخص دیگر کار بگیرد' },
    'credit-builder loan': { en: 'a small loan the bank holds while you pay it, to build credit', es: 'un préstamo pequeño que el banco guarda mientras lo pagas, para crear crédito', fa: 'یک قرضهٔ کوچک که بانک نگه می‌دارد تا تو آن را بپردازی، برای ساختن اعتبار' },
    fraud: { en: 'when someone lies or steals your name to get money', es: 'cuando alguien miente o roba tu nombre para conseguir dinero', fa: 'وقتی کسی دروغ می‌گوید یا نام تو را می‌دزدد تا پول بگیرد' },
    statement: { en: 'a monthly paper that shows what you spent and owe', es: 'un papel mensual que muestra lo que gastaste y debes', fa: 'کاغذ ماهانه که مصرف و قرض تو را نشان می‌دهد' }
  },

  npcs: [
    {
      x: 6, y: 5,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Student with a part-time job', es: 'Estudiante con trabajo de medio tiempo', fa: 'محصل با کار نیمه‌وقت' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#c04a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I wanted my first credit card. But I had no [[credit history|credit history]].',
          es: 'Quería mi primera tarjeta de crédito. Pero no tenía [[credit history|historial de crédito]].',
          fa: 'من اولین کارت اعتباری‌ام را می‌خواستم. اما هیچ [[credit history|سابقهٔ اعتباری]] نداشتم.' },
        { en: 'So I got a [[secured card|secured card]]. I put down a $200 deposit.',
          es: 'Así que saqué una [[secured card|tarjeta asegurada]]. Dejé un depósito de $200.',
          fa: 'پس یک [[secured card|کارت با ضمانت]] گرفتم. ۲۰۰ دالر پول ضمانت گذاشتم.' },
        { en: 'My deposit is my [[credit limit|credit limit]]. I can borrow up to $200.',
          es: 'Mi depósito es mi [[credit limit|límite de crédito]]. Puedo usar hasta $200.',
          fa: 'پول ضمانتم [[credit limit|حد اعتبار]] من است. تا ۲۰۰ دالر قرض گرفته می‌توانم.' },
        { en: 'I pay the full [[balance|balance]] each month. So I pay no [[interest|interest]].',
          es: 'Pago todo el [[balance|saldo]] cada mes. Así no pago [[interest|intereses]].',
          fa: 'هر ماه تمام [[balance|قرض کارت]] را می‌پردازم. پس هیچ [[interest|سود]] نمی‌دهم.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Ana put down a $200 deposit on a secured card. What is her credit limit?', es: 'Ana dejó un depósito de $200 en una tarjeta asegurada. ¿Cuál es su límite?', fa: 'آنا برای کارت با ضمانت ۲۰۰ دالر گذاشت. حد اعتبار او چقدر است؟' },
        choices: [
          { ok: true, t: { en: '$200', es: '$200', fa: '۲۰۰ دالر' },
            why: { en: 'Yes! On a secured card, the deposit is the limit. $200 down, $200 limit.', es: '¡Sí! En una tarjeta asegurada, el depósito es el límite. $200 de depósito, $200 de límite.', fa: 'بله! در کارت با ضمانت، پول ضمانت همان حد اعتبار است. ۲۰۰ دالر، حد ۲۰۰ دالر.' } },
          { t: { en: '$2,000', es: '$2,000', fa: '۲۰۰۰ دالر' },
            why: { en: 'No. Her limit is the same as her deposit: $200, not $2,000.', es: 'No. Su límite es igual a su depósito: $200, no $2,000.', fa: 'نه. حد او مساوی پول ضمانتش است: ۲۰۰ دالر، نه ۲۰۰۰ دالر.' } },
          { t: { en: '$20', es: '$20', fa: '۲۰ دالر' },
            why: { en: 'No. Her limit matches her deposit. She put down $200, so her limit is $200.', es: 'No. Su límite es igual a su depósito. Dejó $200, así que su límite es $200.', fa: 'نه. حد او مثل پول ضمانتش است. ۲۰۰ دالر گذاشت، پس حدش ۲۰۰ دالر است.' } }
        ]
      }
    },
    {
      x: 12, y: 15,
      name: { en: 'Mr. Bello', es: 'Sr. Bello', fa: 'آقای بِلو' },
      role: { en: 'Bank teller', es: 'Cajero de banco', fa: 'کارمند بانک' },
      look: { skin: 5, hair: '#1a1008', shirt: '#f0f0e8', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Your [[credit history|credit history]] is the record of how you borrow and pay.',
          es: 'Tu [[credit history|historial de crédito]] es el registro de cómo pides prestado y pagas.',
          fa: '[[credit history|سابقهٔ اعتباری]] تو ثبت این است که چطور قرض می‌گیری و می‌پردازی.' },
        { en: 'Three nationwide [[credit bureau|credit bureaus]] keep it in a [[credit report|credit report]].',
          es: 'Tres [[credit bureau|agencias de crédito]] nacionales lo guardan en un [[credit report|informe de crédito]].',
          fa: 'سه [[credit bureau|ادارهٔ اعتباری]] سراسری آن را در یک [[credit report|گزارش اعتباری]] نگه می‌دارند.' },
        { en: 'You can get your report free, from the official free website.',
          es: 'Puedes obtener tu informe gratis, en el sitio web oficial y gratuito.',
          fa: 'گزارشت را مفت می‌گیری، از ویب‌سایت رسمی و مفت.' },
        { en: 'Check it for mistakes, and for [[fraud|fraud]]: accounts you never opened.',
          es: 'Revísalo para buscar errores y [[fraud|fraude]]: cuentas que nunca abriste.',
          fa: 'آن را برای اشتباه و [[fraud|تقلب]] ببین: حساب‌هایی که هرگز باز نکردی.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Your report shows a card you never opened. What could it be?', es: 'Tu informe muestra una tarjeta que nunca abriste. ¿Qué podría ser?', fa: 'گزارشت کارتی را نشان می‌دهد که هرگز نگرفتی. این چه می‌تواند باشد؟' },
        choices: [
          { ok: true, t: { en: 'Fraud, so report it fast', es: 'Fraude, repórtalo rápido', fa: 'تقلب، زود خبر بده' },
            why: { en: 'Yes! Someone may be using your name. Tell the credit bureau and the bank fast.', es: '¡Sí! Alguien puede usar tu nombre. Avisa rápido a la agencia de crédito y al banco.', fa: 'بله! شاید کسی از نام تو کار بگیرد. زود به ادارهٔ اعتباری و بانک خبر بده.' } },
          { t: { en: 'A gift from the bank', es: 'Un regalo del banco', fa: 'تحفه‌ای از بانک' },
            why: { en: 'No. Banks do not open cards for you as gifts. A card you never opened is a warning.', es: 'No. Los bancos no abren tarjetas como regalo. Una tarjeta que no abriste es una alerta.', fa: 'نه. بانک‌ها به عنوان تحفه کارت باز نمی‌کنند. کارتی که نگرفتی یک خطر است.' } },
          { t: { en: 'Proof your credit is great', es: 'Prueba de que tu crédito es bueno', fa: 'ثبوت این که اعتبارت عالی است' },
            why: { en: 'No. A card you did not open may be fraud. It can hurt your credit.', es: 'No. Una tarjeta que no abriste puede ser fraude. Puede dañar tu crédito.', fa: 'نه. کارتی که خودت نگرفتی شاید تقلب باشد. به اعتبارت ضرر می‌زند.' } }
        ]
      }
    },
    {
      x: 24, y: 16,
      name: { en: 'Kim', es: 'Kim', fa: 'کیم' },
      role: { en: 'Grad student and campus tutor', es: 'Estudiante de posgrado y tutor', fa: 'محصل ماستری و استاد کمکی' },
      look: { skin: 1, hair: '#120c08', shirt: '#3a5aa0', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'My card has a $300 [[credit limit|limit]]. I use less than 30% of it.',
          es: 'Mi tarjeta tiene un [[credit limit|límite]] de $300. Uso menos del 30%.',
          fa: 'کارت من [[credit limit|حد]] ۳۰۰ دالر دارد. کمتر از ۳۰٪ آن را کار می‌گیرم.' },
        { en: '$300 × 30% = $90. So I keep my [[balance|balance]] under $90.',
          es: '$300 × 30% = $90. Así que mantengo mi [[balance|saldo]] por debajo de $90.',
          fa: '۳۰۰ دالر × ۳۰٪ = ۹۰ دالر. پس [[balance|قرض کارتم]] را کمتر از ۹۰ دالر نگه می‌دارم.' },
        { en: 'Paying only the [[minimum payment|minimum payment]] makes debt last a long time.',
          es: 'Pagar solo el [[minimum payment|pago mínimo]] hace que la deuda dure mucho tiempo.',
          fa: 'پرداختن فقط [[minimum payment|کمترین پرداخت]] قرض را خیلی طولانی می‌سازد.' },
        { en: 'Owe $500, pay $25 a month: that is 20 months, before any [[interest|interest]].',
          es: 'Debes $500 y pagas $25 al mes: son 20 meses, sin contar los [[interest|intereses]].',
          fa: '۵۰۰ دالر قرض، ماهی ۲۵ دالر: ۲۰ ماه می‌شود، بدون حساب [[interest|سود]].' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Kim\'s card limit is $300. To use under 30%, her balance should stay under what?', es: 'El límite de Kim es $300. Para usar menos del 30%, ¿su saldo debe quedar bajo cuánto?', fa: 'حد کارت کیم ۳۰۰ دالر است. برای کمتر از ۳۰٪، قرض کارتش باید کمتر از چند باشد؟' },
        choices: [
          { ok: true, t: { en: '$90', es: '$90', fa: '۹۰ دالر' },
            why: { en: 'Yes! $300 × 30% = $90. Low balances help your credit.', es: '¡Sí! $300 × 30% = $90. Los saldos bajos ayudan a tu crédito.', fa: 'بله! ۳۰۰ دالر × ۳۰٪ = ۹۰ دالر. قرض کم به اعتبارت کمک می‌کند.' } },
          { t: { en: '$30', es: '$30', fa: '۳۰ دالر' },
            why: { en: 'Not quite. $30 is only 10% of $300. 30% of $300 is $90.', es: 'No exactamente. $30 es solo el 10% de $300. El 30% de $300 es $90.', fa: 'نه دقیق. ۳۰ دالر فقط ۱۰٪ از ۳۰۰ دالر است. ۳۰٪ از ۳۰۰ دالر، ۹۰ دالر است.' } },
          { t: { en: '$270', es: '$270', fa: '۲۷۰ دالر' },
            why: { en: 'No. $270 is 90% of the limit. That is very high. 30% is $90.', es: 'No. $270 es el 90% del límite. Es muy alto. El 30% es $90.', fa: 'نه. ۲۷۰ دالر ۹۰٪ حد است. خیلی زیاد است. ۳۰٪، ۹۰ دالر است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 7, text: { en: 'THE CAMPUS LAWN · CHARLOTTESVILLE, VIRGINIA · Walk south to the street, the shops and the bank.', es: 'EL CÉSPED DEL CAMPUS · CHARLOTTESVILLE, VIRGINIA · Camina al sur hasta la calle, las tiendas y el banco.', fa: 'چمن پوهنتون · شارلوتسویل، ویرجینیا · به جنوب تا سرک، دکان‌ها و بانک برو.' } },
    { x: 28, y: 9, text: { en: 'BUS STOP · Buses run along this street, between campus and downtown.', es: 'PARADA DE BUS · Los buses pasan por esta calle, entre el campus y el centro.', fa: 'ایستگاه بس · بس‌ها در این سرک، میان پوهنتون و مرکز شهر می‌روند.' } },
    { x: 6, y: 17, text: { en: 'CREDIT TIP · Pay every bill on time. Pay the full balance. Keep it low.', es: 'CONSEJO DE CRÉDITO · Paga cada cuenta a tiempo. Paga todo el saldo. Mantenlo bajo.', fa: 'نکتهٔ اعتبار · هر بل را به وقتش بپرداز. تمام قرض را بپرداز. آن را کم نگه دار.' } }
  ],

  /* the quest: Leo the first-year student (gold !) on the east side of the lawn -> Gloria the bus driver,
     south of the street at the east end -> find Leo's card statement 2 steps south of the bookstore door (far west)
     -> back to Leo. The statement teaches balance, minimum payment and due date. */
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Statement', es: 'El estado de cuenta perdido', fa: 'صورت حساب گمشده' },
    giver: {
      x: 24, y: 5,
      name: { en: 'Leo', es: 'Leo', fa: 'لیو' },
      role: { en: 'First-year student', es: 'Estudiante de primer año', fa: 'محصل سال اول' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e07a2a', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'My first card [[statement|statement]] came today. Then the wind blew it away!',
          es: 'Hoy llegó mi primer [[statement|estado de cuenta]]. ¡Y el viento se lo llevó!',
          fa: 'امروز اولین [[statement|صورت حساب]] کارتم رسید. بعد باد آن را برد!' },
        { en: 'It shows what I owe and the [[due date|due date]]. I must not pay late!',
          es: 'Muestra lo que debo y la [[due date|fecha de pago]]. ¡No puedo pagar tarde!',
          fa: 'نشان می‌دهد چقدر قرضدارم و [[due date|روز آخر پرداخت]] کی است. نباید دیر بپردازم!' },
        { en: 'The bus driver south of the street saw it fly. Please ask her!',
          es: 'La conductora del bus, al sur de la calle, lo vio volar. ¡Pregúntale, por favor!',
          fa: 'رانندهٔ بس، جنوب سرک، پرواز آن را دید. لطفاً از او بپرس!' }
      ],
      wait: { en: 'The bus driver is south of the street, at the east end.',
        es: 'La conductora del bus está al sur de la calle, en el extremo este.',
        fa: 'رانندهٔ بس جنوب سرک است، در آخر شرقی آن.' },
      thanks: { en: 'I owe $60. I will pay all $60, not just $25. No interest!',
        es: 'Debo $60. Pagaré los $60 completos, no solo $25. ¡Sin intereses!',
        fa: '۶۰ دالر قرضدارم. تمام ۶۰ دالر را می‌پردازم، نه فقط ۲۵ دالر. بدون سود!' }
    },
    contact: {
      x: 29, y: 12,
      name: { en: 'Gloria', es: 'Gloria', fa: 'گلوریا' },
      role: { en: 'Bus driver', es: 'Conductora de bus', fa: 'رانندهٔ بس' },
      look: { skin: 4, hair: '#3a2416', shirt: '#2a5a8a', pants: '#2a2a2a', hat: '#2a5a8a', style: 'bun' },
      lines: [
        { en: 'I saw a paper fly west along the street, past the bank.',
          es: 'Vi un papel volar al oeste por la calle, más allá del banco.',
          fa: 'دیدم یک کاغذ در سرک به طرف غرب پرواز کرد، از بانک گذشت.' },
        { en: 'It landed 2 steps south of the bookstore door, at the far west end.',
          es: 'Cayó 2 pasos al sur de la puerta de la librería, en el extremo oeste.',
          fa: 'در ۲ قدمی جنوب دروازهٔ کتاب‌فروشی افتاد، در آخر غربی.' }
      ]
    },
    action: {
      type: 'find',
      at: [3, 15],
      hint: { en: '2 steps south of the bookstore door, far west', es: '2 pasos al sur de la puerta de la librería, lejos al oeste', fa: '۲ قدم جنوبِ دروازهٔ کتاب‌فروشی، دور در غرب' },
      found: { en: 'Here it is! Balance $60. [[minimum payment|Minimum payment]] $25. Due on the 15th.',
        es: '¡Aquí está! Saldo $60. [[minimum payment|Pago mínimo]] $25. Fecha de pago: el día 15.',
        fa: 'اینجاست! قرض ۶۰ دالر. [[minimum payment|کمترین پرداخت]] ۲۵ دالر. روز آخر: پانزدهم.' },
      item: { icon: '📄', name: { en: 'Leo\'s card statement', es: 'El estado de cuenta de Leo', fa: 'صورت حساب کارت لیو' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[8, 9], [10, 19]],

  challenge: {
    at: [16, 16],
    type: 'route', // in the world; the card version (order) is the fallback
    // open a card at the bank -> a small bill at the bus stop -> pay in full (library steps) ->
    // check the report at the apartment office -> keep balances low (by the fountain)
    spots: [[10, 14], [27, 10], [11, 3], [22, 14], [19, 18]],
    stat: 'hei',
    title: { en: 'Build credit, step by step', es: 'Crea crédito, paso a paso', fa: 'اعتبار را قدم به قدم بساز' },
    intro: { en: 'The Grump mixed up the steps to build credit! Walk to each step on the map, in order.',
      es: '¡El Gruñón mezcló los pasos para crear crédito! Camina a cada paso del mapa, en orden.',
      fa: 'غرغرو قدم‌های ساختن اعتبار را درهم کرد! به ترتیب به هر قدم روی نقشه برو.' },
    items: [
      { icon: '💳', t: { en: 'Open a secured card with a $200 deposit', es: 'Abre una tarjeta asegurada con un depósito de $200', fa: 'یک کارت با ضمانت با ۲۰۰ دالر باز کن' } },
      { icon: '🚌', t: { en: 'Use it for one small bill, like a $20 bus pass', es: 'Úsala para una cuenta pequeña, como un pase de bus de $20', fa: 'آن را برای یک بل کوچک کار بگیر، مثل کارت بس ۲۰ دالری' } },
      { icon: '✅', t: { en: 'Pay the full balance on time, every month', es: 'Paga todo el saldo a tiempo, cada mes', fa: 'هر ماه تمام قرض را به وقتش بپرداز' } },
      { icon: '📋', t: { en: 'Check your credit report for mistakes', es: 'Revisa tu informe de crédito para buscar errores', fa: 'گزارش اعتباری‌ات را برای اشتباه ببین' } },
      { icon: '📉', t: { en: 'Keep balances low, even as your limit grows', es: 'Mantén saldos bajos, aunque tu límite crezca', fa: 'قرض را کم نگه دار، حتی وقتی حد اعتبارت بالا می‌رود' } }
    ],
    why: { en: 'First get a card. Use it a little. Pay it all on time. Check your report. Keep balances low.',
      es: 'Primero saca una tarjeta. Úsala un poco. Págala toda a tiempo. Revisa tu informe. Mantén saldos bajos.',
      fa: 'اول کارت بگیر. کمی کار بگیر. همه را به وقتش بپرداز. گزارشت را ببین. قرض را کم نگه دار.' },
    success: { en: 'You built credit, step by step! On-time payments make a strong credit history.',
      es: '¡Creaste crédito, paso a paso! Los pagos a tiempo hacen un historial de crédito fuerte.',
      fa: 'تو قدم به قدم اعتبار ساختی! پرداخت‌های به وقتش سابقهٔ اعتباری قوی می‌سازند.' }
  },

  boss: {
    at: [28, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Swipe Grump', es: 'El Gruñón Pasatarjetas', fa: 'غرغروی کارت‌کش' },
    appear: { en: 'The Swipe Grump is hiding in a cloud of card offers, south-east of the park!',
      es: '¡El Gruñón Pasatarjetas se esconde en una nube de ofertas de tarjetas, al sureste del parque!',
      fa: 'غرغروی کارت‌کش در ابری از پیشنهادهای کارت، جنوب شرق پارک، پنهان است!' },
    taunt: { en: 'Swipe, swipe! Grab every free T-shirt card. Just pay the minimum. Easy!',
      es: '¡Pasa, pasa! Toma cada tarjeta con camiseta gratis. Paga solo el mínimo. ¡Fácil!',
      fa: 'بکش، بکش! هر کارت با پیراهن مفت را بگیر. فقط کمترین را بپرداز. آسان!' },
    win: { en: 'The cloud of bills blows away. Ledger page 5.2 floats down into your hands!',
      es: 'La nube de cuentas se va volando. ¡La página 5.2 del libro cae en tus manos!',
      fa: 'ابر بل‌ها با باد می‌رود. صفحهٔ ۵.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a credit report?', es: '¿Qué es un informe de crédito?', fa: 'گزارش اعتباری چیست؟' },
        choices: [
          { en: 'A record of how you borrow and pay', es: 'Un registro de cómo pides prestado y pagas', fa: 'ثبت این که چطور قرض می‌گیری و می‌پردازی' },
          { en: 'A list of the stores you like best', es: 'Una lista de las tiendas que más te gustan', fa: 'فهرست دکان‌هایی که بیشتر دوست داری' },
          { en: 'A paper that shows your school grades', es: 'Un papel que muestra tus notas de la escuela', fa: 'کاغذی که نمره‌های مکتبت را نشان می‌دهد' },
          { en: 'A bill for everything you bought this year', es: 'Una cuenta por todo lo que compraste este año', fa: 'بل همه چیزهایی که امسال خریدی' }],
        answer: 0,
        why: { en: 'A credit report shows your accounts, what you owe, and if you paid on time.', es: 'Un informe de crédito muestra tus cuentas, lo que debes y si pagaste a tiempo.', fa: 'گزارش اعتباری حساب‌هایت، قرض‌هایت و پرداخت به وقتت را نشان می‌دهد.' } },
      { q: { en: 'How many nationwide credit bureaus keep credit reports?', es: '¿Cuántas agencias de crédito nacionales guardan informes de crédito?', fa: 'چند ادارهٔ اعتباری سراسری گزارش‌های اعتباری را نگه می‌دارند؟' },
        choices: [
          { en: 'Three', es: 'Tres', fa: 'سه' },
          { en: 'One', es: 'Una', fa: 'یک' },
          { en: 'Ten', es: 'Diez', fa: 'ده' },
          { en: 'Fifty', es: 'Cincuenta', fa: 'پنجاه' }],
        answer: 0,
        why: { en: 'Three nationwide credit bureaus keep reports. Check all three for mistakes.', es: 'Tres agencias de crédito nacionales guardan informes. Revisa los tres para buscar errores.', fa: 'سه ادارهٔ اعتباری سراسری گزارش نگه می‌دارند. هر سه را برای اشتباه ببین.' } },
      { q: { en: 'You put a $200 deposit on a secured card. What is your limit?', es: 'Dejas un depósito de $200 en una tarjeta asegurada. ¿Cuál es tu límite?', fa: 'برای کارت با ضمانت ۲۰۰ دالر می‌گذاری. حد اعتبارت چقدر است؟' },
        choices: [
          { en: '$200', es: '$200', fa: '۲۰۰ دالر' },
          { en: '$20', es: '$20', fa: '۲۰ دالر' },
          { en: '$400', es: '$400', fa: '۴۰۰ دالر' },
          { en: '$2,000', es: '$2,000', fa: '۲۰۰۰ دالر' }],
        answer: 0,
        why: { en: 'On a secured card, the deposit is your limit. $200 down means a $200 limit.', es: 'En una tarjeta asegurada, el depósito es tu límite. $200 de depósito, $200 de límite.', fa: 'در کارت با ضمانت، پول ضمانت حد اعتبار است. ۲۰۰ دالر یعنی حد ۲۰۰ دالر.' } },
      { q: { en: 'Your limit is $300. You want to use less than 30%. Stay under what?', es: 'Tu límite es $300. Quieres usar menos del 30%. ¿Debajo de cuánto?', fa: 'حد تو ۳۰۰ دالر است. می‌خواهی کمتر از ۳۰٪ کار بگیری. کمتر از چند؟' },
        choices: [
          { en: '$90', es: '$90', fa: '۹۰ دالر' },
          { en: '$30', es: '$30', fa: '۳۰ دالر' },
          { en: '$100', es: '$100', fa: '۱۰۰ دالر' },
          { en: '$270', es: '$270', fa: '۲۷۰ دالر' }],
        answer: 0,
        why: { en: '$300 × 30% = $90. Keeping balances low helps your credit.', es: '$300 × 30% = $90. Mantener saldos bajos ayuda a tu crédito.', fa: '۳۰۰ دالر × ۳۰٪ = ۹۰ دالر. قرض کم به اعتبارت کمک می‌کند.' } },
      { q: { en: 'How can you avoid paying interest on a credit card?', es: '¿Cómo puedes evitar pagar intereses en una tarjeta de crédito?', fa: 'چطور از دادن سود کارت اعتباری خلاص شوی؟' },
        choices: [
          { en: 'Pay the full balance by the due date', es: 'Paga todo el saldo antes de la fecha de pago', fa: 'تمام قرض را تا روز آخر پرداخت بده' },
          { en: 'Pay only the minimum every month', es: 'Paga solo el mínimo cada mes', fa: 'هر ماه فقط کمترین را بپرداز' },
          { en: 'Pay a few days after the due date', es: 'Paga unos días después de la fecha de pago', fa: 'چند روز بعد از روز آخر بپرداز' },
          { en: 'Open a second card to pay the first', es: 'Abre otra tarjeta para pagar la primera', fa: 'کارت دوم بگیر تا اولی را بپردازی' }],
        answer: 0,
        why: { en: 'Pay the whole balance by the due date. Then you pay no interest on purchases.', es: 'Paga todo el saldo antes de la fecha de pago. Así no pagas intereses por tus compras.', fa: 'تمام قرض را تا روز آخر بپرداز. آن وقت بر خریدهایت سود نمی‌دهی.' } },
      { q: { en: 'What happens if you pay only the minimum each month?', es: '¿Qué pasa si pagas solo el mínimo cada mes?', fa: 'اگر هر ماه فقط کمترین را بپردازی، چه می‌شود؟' },
        choices: [
          { en: 'The debt lasts a long time and costs more', es: 'La deuda dura mucho tiempo y cuesta más', fa: 'قرض خیلی طول می‌کشد و گران‌تر می‌شود' },
          { en: 'The bank lowers your balance to zero for you', es: 'El banco baja tu saldo a cero por ti', fa: 'بانک قرضت را خودش صفر می‌کند' },
          { en: 'Your credit limit doubles the very next month', es: 'Tu límite de crédito se duplica el mes siguiente', fa: 'حد اعتبارت ماه بعد دو برابر می‌شود' },
          { en: 'You never have to pay any interest at all', es: 'Nunca tienes que pagar ningún interés', fa: 'هرگز هیچ سود نمی‌پردازی' }],
        answer: 0,
        why: { en: 'Even with no interest, $500 at $25 a month takes 20 months. Interest adds more.', es: 'Aun sin intereses, $500 a $25 al mes tarda 20 meses. Los intereses suman más.', fa: 'حتی بدون سود، ۵۰۰ دالر با ماهی ۲۵ دالر ۲۰ ماه می‌گیرد. سود بیشتر می‌سازد.' } },
      { q: { en: 'A campus table offers a free T-shirt if you sign up for a card. What should you do?', es: 'Una mesa en el campus da una camiseta gratis si sacas una tarjeta. ¿Qué debes hacer?', fa: 'یک میز در پوهنتون برای گرفتن کارت پیراهن مفت می‌دهد. چه باید بکنی؟' },
        choices: [
          { en: 'Read the terms before you decide', es: 'Leer las condiciones antes de decidir', fa: 'پیش از تصمیم، شرط‌ها را بخوان' },
          { en: 'Sign up fast before shirts run out', es: 'Firmar rápido antes de que se acaben', fa: 'زود امضا کن پیش از تمام شدن پیراهن‌ها' },
          { en: 'Sign up for every card on the table', es: 'Sacar todas las tarjetas de la mesa', fa: 'همهٔ کارت‌های روی میز را بگیر' },
          { en: 'Give them a friend\'s name instead', es: 'Darles el nombre de un amigo', fa: 'به جای خودت نام یک دوست را بده' }],
        answer: 0,
        why: { en: 'A gift is not a reason to borrow. Read the APR and the fees first.', es: 'Un regalo no es razón para pedir prestado. Lee primero la tasa APR y los cargos.', fa: 'تحفه دلیل قرض گرفتن نیست. اول نرخ سود سالانه و فیس‌ها را بخوان.' } },
      { q: { en: 'What does the APR on a credit card tell you?', es: '¿Qué te dice la tasa APR de una tarjeta de crédito?', fa: 'نرخ سود سالانه (APR) کارت اعتباری به تو چه می‌گوید؟' },
        choices: [
          { en: 'The yearly interest rate you pay', es: 'La tasa de interés que pagas por año', fa: 'نرخ سودی که هر سال می‌پردازی' },
          { en: 'The number of cards you can own', es: 'El número de tarjetas que puedes tener', fa: 'تعداد کارت‌هایی که داشته می‌توانی' },
          { en: 'The day your card will expire', es: 'El día en que tu tarjeta vence', fa: 'روزی که کارتت باطل می‌شود' },
          { en: 'The store where the card works best', es: 'La tienda donde la tarjeta funciona mejor', fa: 'دکانی که کارت در آن بهتر کار می‌کند' }],
        answer: 0,
        why: { en: 'APR is the yearly interest rate on money you owe. A lower APR costs less.', es: 'La APR es la tasa de interés por año sobre lo que debes. Una APR más baja cuesta menos.', fa: 'APR نرخ سود سالانه بر قرض توست. نرخ کمتر ارزان‌تر تمام می‌شود.' } }
    ]
  },

  learned: [
    { en: 'Your [[credit report|credit report]] shows how you borrow and pay. Check it free for mistakes.', es: 'Tu [[credit report|informe de crédito]] muestra cómo pides prestado y pagas. Revísalo gratis.', fa: '[[credit report|گزارش اعتباری]] تو نشان می‌دهد چطور قرض می‌گیری و می‌پردازی. آن را مفت ببین.' },
    { en: 'Start with a [[secured card|secured card]] or student card, and pay every bill on time.', es: 'Empieza con una [[secured card|tarjeta asegurada]] o de estudiante, y paga cada cuenta a tiempo.', fa: 'با یک [[secured card|کارت با ضمانت]] یا کارت محصلی شروع کن و هر بل را به وقتش بپرداز.' },
    { en: 'Keep your [[balance|balance]] under about 30% of your limit, and pay it in full.', es: 'Mantén tu [[balance|saldo]] debajo del 30% de tu límite, más o menos, y págalo completo.', fa: '[[balance|قرض کارت]] را کمتر از حدود ۳۰٪ حد نگه دار و همه را بپرداز.' }
  ],
  reflect: {
    q: { en: 'If you wanted to build credit, what would you do first? Why?', es: 'Si quisieras crear crédito, ¿qué harías primero? ¿Por qué?', fa: 'اگر می‌خواستی اعتبار بسازی، اول چه می‌کردی؟ چرا؟' },
    starter: { en: 'First, I would', es: 'Primero, yo', fa: 'اول، من' }
  }
};
