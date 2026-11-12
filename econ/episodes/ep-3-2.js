/* COINWALKER · Episode 3.2 · Planning for Life (setting goals, minding money, saving and growing it)
   Budget Bay is a MADE-UP beach town on the Virginia coast (no real bank, shop or brand).
   North half: Main Street (row 4, paved). Along its north side: the bank and Ms. Brooks's home (north-west),
   the library and the shoe shop (north-east). Below Main Street, the north-west green (the ledger stone) and,
   in the north-east, "the shops": a mall-like row of flat-roof stores (J) with sale stalls (m) in front.
   South half: the bike shop and a little park (south-west), the snack stand (south-east), then the wooden
   boardwalk (k, row 15) the whole width of the town, the beach (s) and Budget Bay itself (~), with a pier (k)
   running out into the water and the pier clock at its end.
   People show SMART goals, short- and long-term goals, minding money (sales, ads, wait 24 hours) and simple vs
   compound interest; the ledger stone asks the student to walk the steps of Lina's money plan in order. */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'EPF',
  title: { en: 'Planning for Life', es: 'Planear para la vida', fa: 'برنامه‌ریزی برای زندگی' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Budget Bay boardwalk', es: 'El paseo marítimo de Bahía del Presupuesto', fa: 'راه چوبی ساحل خلیج بودجه' },
  intro: [
    { en: 'The Grump tore the page about planning. Now people spend everything at once.',
      es: 'El Gruñón rompió la página sobre planear. Ahora la gente lo gasta todo de una vez.',
      fa: 'غرغرو صفحهٔ برنامه‌ریزی را پاره کرد. حالا مردم همه چیز را یکباره خرج می‌کنند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town on the Virginia coast (no timeline in this game) */
  scenes: {
    at: [-76.0, 36.85],
    start: [
      { en: 'Budget Bay is a made-up beach town on the Virginia coast.',
        es: 'Bahía del Presupuesto es un pueblo de playa inventado en la costa de Virginia.',
        fa: 'خلیج بودجه یک شهرک ساحلی خیالی در ساحل ویرجینیا است.' },
      { en: 'It has a boardwalk, a bank, a library, shops and a long pier.',
        es: 'Tiene un paseo de madera, un banco, una biblioteca, tiendas y un muelle largo.',
        fa: 'یک راه چوبی ساحل، یک بانک، یک کتابخانه، دکان‌ها و یک اسکلهٔ دراز دارد.' },
      { en: 'People here plan how to save, spend and grow their money.',
        es: 'Aquí la gente planea cómo ahorrar, gastar y hacer crecer su dinero.',
        fa: 'مردم اینجا برنامه می‌سازند که پول خود را چطور پس‌انداز، خرج و زیاد کنند.' }
    ],
    page: { en: 'Start saving early. Compound interest then has more years to grow your money.',
      es: 'Empieza a ahorrar temprano. Así el interés compuesto tiene más años para hacer crecer tu dinero.',
      fa: 'پس‌انداز را زود شروع کن. آن وقت سود مرکب سال‌های بیشتری برای زیاد کردن پولت دارد.' },
    guess: {
      q: { en: 'Can money in a savings account grow?', es: '¿Puede crecer el dinero en una cuenta de ahorros?', fa: 'آیا پول در حساب پس‌انداز زیاد شده می‌تواند؟' },
      choices: [
        { t: { en: '🌱 Yes, it earns interest', es: '🌱 Sí, gana intereses', fa: '🌱 بله، سود می‌گیرد' }, ok: true },
        { t: { en: '🪨 No, it stays the same', es: '🪨 No, sigue igual', fa: '🪨 نه، همان‌قدر می‌ماند' } }
      ],
      why: { en: 'Banks pay interest on savings. Interest is extra money the bank pays you.', es: 'Los bancos pagan intereses por los ahorros. El interés es dinero extra que el banco te paga.', fa: 'بانک‌ها به پس‌انداز سود می‌دهند. سود پول اضافه‌ای است که بانک به تو می‌دهد.' }
    },
    next: {
      q: { en: 'Next: net worth. Is it what you own minus what you owe?', es: 'Ahora: el patrimonio neto. ¿Es lo que tienes menos lo que debes?', fa: 'بعدی: ثروت خالص. آیا داشته‌های تو منهای قرض‌هایت است؟' },
      choices: [
        { t: { en: '✅ Yes, own minus owe', es: '✅ Sí, tienes menos debes', fa: '✅ بله، داشته منهای قرض' }, ok: true },
        { t: { en: '💵 No, just your pay', es: '💵 No, solo tu sueldo', fa: '💵 نه، فقط معاش تو' } }
      ],
      why: { en: 'Net worth is what you own minus what you owe. Your pay is income.', es: 'El patrimonio neto es lo que tienes menos lo que debes. Tu sueldo es un ingreso.', fa: 'ثروت خالص داشته‌های تو منهای قرض‌هایت است. معاش تو درآمد است.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Mr. Reyes', es: 'Sr. Reyes', fa: 'آقای ریِس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to the bank. Money in a savings account is kept safe here.', es: 'Bienvenido al banco. Aquí se guarda seguro el dinero de una cuenta de ahorros.', fa: 'به بانک خوش آمدی. پول حساب پس‌انداز اینجا امن نگه داشته می‌شود.' },
        { en: 'Real savings accounts often pay less than 10%. We use 10% for easy math.', es: 'Las cuentas de ahorros reales a menudo pagan menos del 10%. Usamos 10% para hacer fácil la cuenta.', fa: 'حساب‌های پس‌انداز واقعی اکثراً کمتر از ۱۰٪ سود می‌دهند. ما ۱۰٪ را برای حساب آسان می‌گیریم.' },
        { en: 'Start early! Money that grows for more years earns more interest.', es: '¡Empieza temprano! El dinero que crece por más años gana más intereses.', fa: 'زود شروع کن! پولی که سال‌های بیشتر رشد کند، سود بیشتر می‌گیرد.' }
      ] },
    { at: [11, 2], name: { en: 'Ms. Brooks', es: 'Sra. Brooks', fa: 'خانم بروکس' },
      look: { skin: 5, hair: '#1a1008', shirt: '#d0a030', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'I drive the town bus. Last month my phone broke. Surprise!', es: 'Manejo el autobús del pueblo. El mes pasado se me rompió el teléfono. ¡Sorpresa!', fa: 'من موتر سرویس شهرک را می‌رانم. ماه گذشته تیلفونم شکست. چه غافلگیری!' },
        { en: 'I paid for a new one from my [[emergency fund|emergency fund]]. No stress.', es: 'Pagué uno nuevo con mi [[emergency fund|fondo de emergencia]]. Sin estrés.', fa: 'پول یک تیلفون نو را از [[emergency fund|پس‌انداز اضطراری]] خود دادم. بی‌پریشانی.' },
        { en: 'A common guideline: save 3 to 6 months of [[expenses|expenses]] for surprises.', es: 'Una guía común: ahorra de 3 a 6 meses de [[expenses|gastos]] para sorpresas.', fa: 'یک رهنمود معمول: ۳ تا ۶ ماه [[expenses|مصارف]] را برای غافلگیری‌ها پس‌انداز کن.' }
      ] },
    { at: [20, 2], name: { en: 'Mrs. Patel', es: 'Sra. Patel', fa: 'خانم پاتل' },
      look: { skin: 2, hair: '#3a3a3a', shirt: '#8a3a6a', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'Our library has free books about money. Borrow one anytime!', es: 'Nuestra biblioteca tiene libros gratis sobre el dinero. ¡Llévate uno cuando quieras!', fa: 'کتابخانهٔ ما کتاب‌های رایگان دربارهٔ پول دارد. هر وقت خواستی یکی را امانت بگیر!' },
        { en: '[[short-term goal|Short-term goals]] take weeks or months. [[long-term goal|Long-term goals]] take years.', es: 'Las [[short-term goal|metas a corto plazo]] toman semanas o meses. Las [[long-term goal|metas a largo plazo]] toman años.', fa: '[[short-term goal|هدف‌های کوتاه‌مدت]] چند هفته یا چند ماه وقت می‌گیرند. [[long-term goal|هدف‌های درازمدت]] چند سال.' },
        { en: 'Medium-term goals are in between, like a laptop in a year or two.', es: 'Las metas a mediano plazo están en medio, como una laptop en uno o dos años.', fa: 'هدف‌های میان‌مدت در وسط هستند، مثل یک لپ‌تاپ در یک یا دو سال.' }
      ] },
    { at: [26, 2], name: { en: 'Kim', es: 'Kim', fa: 'کیم' },
      look: { skin: 1, hair: '#120c08', shirt: '#e05a5a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I sell shoes. New shoes are a short-term goal for many teens.', es: 'Vendo zapatos. Unos zapatos nuevos son una meta a corto plazo para muchos jóvenes.', fa: 'من بوت می‌فروشم. بوت نو برای بسیاری از نوجوانان یک هدف کوتاه‌مدت است.' },
        { en: 'See that sign? "Only today!" Ads like that push you to hurry.', es: '¿Ves ese letrero? "¡Solo hoy!" Anuncios así te empujan a apurarte.', fa: 'آن تابلو را می‌بینی؟ «فقط امروز!» اعلان‌های این‌چنینی تو را به عجله وادار می‌کنند.' },
        { en: 'A sale is a good deal only if you planned to buy it.', es: 'Una oferta solo es un buen trato si ya pensabas comprarlo.', fa: 'تخفیف فقط وقتی معاملهٔ خوب است که از قبل خریدنش را پلان کرده باشی.' }
      ] },
    { at: [4, 12], name: { en: 'Mr. Petrov', es: 'Sr. Petrov', fa: 'آقای پتروف' },
      look: { skin: 0, hair: '#b8b8b8', shirt: '#4a7a3a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'This used bike costs $300. Lina comes to look at it every week.', es: 'Esta bicicleta usada cuesta $300. Lina viene a verla cada semana.', fa: 'این بایسکل دست دوم ۳۰۰ دالر قیمت دارد. لینا هر هفته می‌آید و آن را می‌بیند.' },
        { en: 'She saves $50 a month. In 6 months, she will have $300.', es: 'Ella ahorra $50 al mes. En 6 meses tendrá $300.', fa: 'او ماهانه ۵۰ دالر پس‌انداز می‌کند. در ۶ ماه ۳۰۰ دالر خواهد داشت.' },
        { en: '$50 times 6 is $300. A plan turns a wish into a goal.', es: '$50 por 6 es $300. Un plan convierte un deseo en una meta.', fa: '۵۰ دالر ضرب ۶ می‌شود ۳۰۰ دالر. پلان یک آرزو را به هدف تبدیل می‌کند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the bank (Q) and Ms. Brooks's home (R) in the north-west, the library (Q) and the shoe shop (R)
     in the north-east. Row 4 is Main Street (l). The north-west green (trees) holds the ledger stone; in the
     north-east, "the shops": flat-roof stores (J) with sale stalls (m).
     South (y 11-21): the bike shop (R) and the park in the south-west, the snack stand (m) in the south-east,
     the boardwalk (k) on row 15, the beach (s) and Budget Bay (~) with the pier (k) and its clock (x). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.QQQQQ...RRR...T.QQQQQ..RRR...T',
    'T.hhdhh...hdh.....hhdhh..hdh...T',
    'T.......x......................T',
    'TllllllllllllllllllllllllllllllT',
    'T..............................T',
    'T..T..........T...JJJJ.JJJJ.JJ.T',
    'T................x.m..m..m..m..T',
    'T..T..........T................T',
    'T..............................T',
    'T....T.................T.......T',
    'T..RRR...TTT...................T',
    'T..hdh...T.T...........m.......T',
    'T..............................T',
    'T.,,,......,,,.................T',
    'TkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkT',
    'TssssssssssssssssssssssssssssssT',
    'TssssssssssssssssssssssssssssssT',
    '~~~~~~~~~~~~~~~~~~~~~~~kk~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~kkkx~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~kkk~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [8, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 5], at: [12, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, across the green.', es: 'Desde esta nota, camina 4 pasos al sur, por el parque.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از میان سبزه.' },
      text: { en: 'A jar of pennies! Save 1 penny a day for 365 days. That is $3.65.', es: '¡Un frasco de centavos! Ahorra 1 centavo al día por 365 días. Son $3.65.', fa: 'یک بوتل سکهٔ یک‌سنتی! ۳۶۵ روز، هر روز ۱ سنت پس‌انداز کن. می‌شود ۳.۶۵ دالر.' } },
    { clueAt: [20, 16], at: [16, 16], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps west along the beach.', es: 'Desde esta nota, camina 4 pasos al oeste por la playa.', fa: 'از این یادداشت، ۴ قدم به غرب در امتداد ساحل برو.' },
      text: { en: 'A shell! Long ago, people in some lands used shells as money.', es: '¡Una concha! Hace mucho tiempo, en algunos lugares la gente usaba conchas como dinero.', fa: 'یک صدف! زمان‌های قدیم، مردم در بعضی سرزمین‌ها صدف را مثل پول کار می‌گرفتند.' } }
  ],

  words: {
    'financial goal': { en: 'something you plan to do with your money', es: 'algo que planeas hacer con tu dinero', fa: 'کاری که پلان داری با پولت انجام بدهی' },
    'short-term goal': { en: 'a goal you can reach in weeks or months', es: 'una meta que puedes lograr en semanas o meses', fa: 'هدفی که در چند هفته یا چند ماه به آن می‌رسی' },
    'long-term goal': { en: 'a goal that takes years, like a car or college', es: 'una meta que toma años, como un carro o la universidad', fa: 'هدفی که چند سال وقت می‌گیرد، مثل موتر یا پوهنتون' },
    'smart goal': { en: 'a goal that is Specific, Measurable, Achievable, Relevant and Time-bound', es: 'una meta específica, medible, alcanzable, relevante y con fecha límite', fa: 'هدفی که مشخص، قابل اندازه، قابل رسیدن، مربوط و با وقت معین باشد' },
    budget: { en: 'a plan for the money that comes in and goes out', es: 'un plan para el dinero que entra y que sale', fa: 'یک پلان برای پولی که می‌آید و می‌رود' },
    'pay yourself first': { en: 'on payday, put money into savings before you spend', es: 'el día de pago, guardar dinero en ahorros antes de gastar', fa: 'روز معاش، پیش از خرج کردن، پول را به پس‌انداز بگذاری' },
    'emergency fund': { en: 'money saved only for surprises, like a repair', es: 'dinero ahorrado solo para sorpresas, como una reparación', fa: 'پولی که فقط برای غافلگیری‌ها، مثل ترمیم، پس‌انداز شده' },
    expenses: { en: 'the money you spend on things, like food and rent', es: 'el dinero que gastas en cosas, como comida y renta', fa: 'پولی که برای چیزها خرج می‌کنی، مثل خوراک و کرایه' },
    'impulse buying': { en: 'buying something fast, without a plan', es: 'comprar algo rápido, sin un plan', fa: 'خریدن چیزی به عجله، بدون پلان' },
    advertisement: { en: 'a message made to make you want to buy something', es: 'un mensaje hecho para que quieras comprar algo', fa: 'پیامی که ساخته شده تا تو را به خریدن چیزی راغب کند' },
    'savings account': { en: 'a bank account that keeps your savings and pays interest', es: 'una cuenta de banco que guarda tus ahorros y paga intereses', fa: 'حساب بانکی که پس‌انداز تو را نگه می‌دارد و سود می‌دهد' },
    interest: { en: 'extra money a bank pays you for keeping your savings there', es: 'dinero extra que el banco te paga por guardar ahí tus ahorros', fa: 'پول اضافه‌ای که بانک به خاطر نگه داشتن پس‌اندازت به تو می‌دهد' },
    'simple interest': { en: 'interest paid only on the money you put in', es: 'interés que se paga solo por el dinero que pusiste', fa: 'سودی که فقط بر پولی که گذاشتی داده می‌شود' },
    'compound interest': { en: 'interest paid on your money and on the interest it already earned', es: 'interés que se paga por tu dinero y por el interés que ya ganó', fa: 'سودی که هم بر پولت و هم بر سودی که قبلاً گرفته داده می‌شود' }
  },

  npcs: [
    {
      x: 22, y: 5,
      name: { en: 'Amir', es: 'Amir', fa: 'امیر' },
      role: { en: 'Library helper (student)', es: 'Ayudante de la biblioteca (estudiante)', fa: 'کمک‌کار کتابخانه (شاگرد)' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f6f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I help at the library. I help people set [[financial goal|money goals]].', es: 'Ayudo en la biblioteca. Ayudo a la gente a ponerse [[financial goal|metas de dinero]].', fa: 'در کتابخانه کمک می‌کنم. به مردم کمک می‌کنم [[financial goal|هدف‌های پولی]] بگذارند.' },
        { en: 'A goal can be [[short-term goal|short-term]], like new shoes in 2 months.', es: 'Una meta puede ser [[short-term goal|a corto plazo]], como zapatos nuevos en 2 meses.', fa: 'یک هدف می‌تواند [[short-term goal|کوتاه‌مدت]] باشد، مثل بوت نو در ۲ ماه.' },
        { en: 'Or [[long-term goal|long-term]], like a car or college, years from now.', es: 'O [[long-term goal|a largo plazo]], como un carro o la universidad, en unos años.', fa: 'یا [[long-term goal|درازمدت]]، مثل موتر یا پوهنتون، چند سال بعد.' },
        { en: 'The best goals are [[smart goal|SMART]]: Specific, Measurable, Achievable, Relevant, Time-bound.', es: 'Las mejores metas son [[smart goal|SMART]]: específicas, medibles, alcanzables, relevantes y con fecha.', fa: 'بهترین هدف‌ها [[smart goal|SMART]] هستند: مشخص، قابل اندازه، قابل رسیدن، مربوط، با وقت معین.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which goal is a SMART goal?', es: '¿Cuál meta es una meta SMART?', fa: 'کدام هدف یک هدف SMART است؟' },
        choices: [
          { ok: true, t: { en: 'Save $300 for a bike in 6 months', es: 'Ahorrar $300 para una bici en 6 meses', fa: '۳۰۰ دالر برای بایسکل در ۶ ماه' },
            why: { en: 'Yes! It says what, how much and when. And it can be done.', es: '¡Sí! Dice qué, cuánto y cuándo. Y se puede lograr.', fa: 'بله! می‌گوید چه، چقدر و چه وقت. و انجام شدنی است.' } },
          { t: { en: 'Save a lot of money one day', es: 'Ahorrar mucho dinero algún día', fa: 'یک روز پول زیاد پس‌انداز کنم' },
            why: { en: 'Not SMART. "A lot" is not measurable, and "one day" has no date.', es: 'No es SMART. "Mucho" no se puede medir y "algún día" no tiene fecha.', fa: 'SMART نیست. «زیاد» قابل اندازه نیست و «یک روز» تاریخ ندارد.' } },
          { t: { en: 'Have more money than all my friends', es: 'Tener más dinero que todos mis amigos', fa: 'از همهٔ دوستانم پول بیشتر داشته باشم' },
            why: { en: 'Not SMART. It has no amount and no date. Your goal is about you.', es: 'No es SMART. No tiene cantidad ni fecha. Tu meta es sobre ti.', fa: 'SMART نیست. نه مقدار دارد و نه تاریخ. هدف تو دربارهٔ خودت است.' } }
        ]
      }
    },
    {
      x: 3, y: 5,
      name: { en: 'Ms. Nguyen', es: 'Sra. Nguyen', fa: 'خانم نگوین' },
      role: { en: 'Bank teller', es: 'Cajera de banco', fa: 'تحویل‌دار بانک' },
      look: { skin: 1, hair: '#120c08', shirt: '#3a9aa0', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a bank teller. Banks pay [[interest|interest]] on a [[savings account|savings account]].', es: 'Soy cajera de banco. Los bancos pagan [[interest|intereses]] en una [[savings account|cuenta de ahorros]].', fa: 'من تحویل‌دار بانک هستم. بانک‌ها بر [[savings account|حساب پس‌انداز]] [[interest|سود]] می‌دهند.' },
        { en: 'Put in $100 at 10% [[simple interest|simple interest]]. You get $10 each year.', es: 'Pon $100 al 10% de [[simple interest|interés simple]]. Recibes $10 cada año.', fa: '۱۰۰ دالر را با ۱۰٪ [[simple interest|سود ساده]] بگذار. هر سال ۱۰ دالر می‌گیری.' },
        { en: 'With [[compound interest|compound interest]], you also earn interest on your interest.', es: 'Con [[compound interest|interés compuesto]], también ganas interés sobre tu interés.', fa: 'با [[compound interest|سود مرکب]]، بر سود خود هم سود می‌گیری.' },
        { en: 'Year 1: $100 grows to $110. Year 2: 10% of $110 is $11. Now $121!', es: 'Año 1: $100 crece a $110. Año 2: el 10% de $110 es $11. ¡Ahora $121!', fa: 'سال ۱: ۱۰۰ دالر ۱۱۰ دالر می‌شود. سال ۲: ۱۰٪ از ۱۱۰ دالر، ۱۱ دالر است. حالا ۱۲۱ دالر!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: '$100 earns 10% compound interest each year. How much is there after 2 years?', es: '$100 gana 10% de interés compuesto cada año. ¿Cuánto hay después de 2 años?', fa: '۱۰۰ دالر هر سال ۱۰٪ سود مرکب می‌گیرد. بعد از ۲ سال چقدر می‌شود؟' },
        choices: [
          { ok: true, t: { en: '$121', es: '$121', fa: '۱۲۱ دالر' },
            why: { en: 'Yes! $110 after year 1. Then 10% of $110 is $11. $110 + $11 = $121.', es: '¡Sí! $110 después del año 1. Luego el 10% de $110 es $11. $110 + $11 = $121.', fa: 'بله! بعد از سال ۱، ۱۱۰ دالر. بعد ۱۰٪ از ۱۱۰ دالر، ۱۱ دالر است. ۱۱۰ + ۱۱ = ۱۲۱.' } },
          { t: { en: '$120', es: '$120', fa: '۱۲۰ دالر' },
            why: { en: '$120 is simple interest: $10 + $10. Compound adds interest on the interest.', es: '$120 es interés simple: $10 + $10. El compuesto suma interés sobre el interés.', fa: '۱۲۰ دالر سود ساده است: ۱۰ + ۱۰. سود مرکب بر سود هم سود اضافه می‌کند.' } },
          { t: { en: '$110', es: '$110', fa: '۱۱۰ دالر' },
            why: { en: '$110 is after only 1 year. In year 2, the money grows again.', es: '$110 es después de solo 1 año. En el año 2, el dinero vuelve a crecer.', fa: '۱۱۰ دالر فقط بعد از ۱ سال است. در سال ۲، پول دوباره زیاد می‌شود.' } }
        ]
      }
    },
    {
      x: 24, y: 8,
      name: { en: 'Jamal', es: 'Jamal', fa: 'جمال' },
      role: { en: 'Cashier at the shops', es: 'Cajero de las tiendas', fa: 'صندوق‌دار دکان‌ها' },
      look: { skin: 4, hair: '#120c08', shirt: '#c07a2a', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'I am a cashier. Every day I see [[impulse buying|impulse buys]].', es: 'Soy cajero. Todos los días veo [[impulse buying|compras por impulso]].', fa: 'من صندوق‌دار هستم. هر روز [[impulse buying|خریدهای بی‌فکر]] را می‌بینم.' },
        { en: 'People see a big SALE sign and buy things they did not plan.', es: 'La gente ve un gran letrero de OFERTA y compra cosas que no planeó.', fa: 'مردم یک تابلوی کلان «تخفیف» را می‌بینند و چیزهایی می‌خرند که پلان نکرده بودند.' },
        { en: '[[advertisement|Ads]] and sales are made to push you. That is their job.', es: 'Los [[advertisement|anuncios]] y las ofertas están hechos para empujarte. Ese es su trabajo.', fa: '[[advertisement|اعلان‌ها]] و تخفیف‌ها برای وادار کردن تو ساخته شده‌اند. کارشان همین است.' },
        { en: 'My rule: for a big want, wait 24 hours. Then check your [[budget|budget]].', es: 'Mi regla: para un deseo grande, espera 24 horas. Luego revisa tu [[budget|presupuesto]].', fa: 'قاعدهٔ من: برای یک خواهش کلان، ۲۴ ساعت صبر کن. بعد [[budget|بودجهٔ]] خود را ببین.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'You see $90 headphones on sale. They are not in your plan. What is smart?', es: 'Ves unos audífonos de $90 en oferta. No están en tu plan. ¿Qué es inteligente?', fa: 'یک هدفون ۹۰ دالری را در تخفیف می‌بینی. در پلانت نیست. کار هوشیارانه چیست؟' },
        choices: [
          { ok: true, t: { en: 'Wait a day, then check my budget', es: 'Esperar un día y revisar mi presupuesto', fa: 'یک روز صبر کنم، بعد بودجه‌ام را ببینم' },
            why: { en: 'Yes! Waiting cools the want. Then your budget shows if you can pay.', es: '¡Sí! Esperar enfría el deseo. Luego tu presupuesto muestra si puedes pagar.', fa: 'بله! صبر کردن خواهش را آرام می‌کند. بعد بودجه نشان می‌دهد که پولش را داری یا نه.' } },
          { t: { en: 'Buy them now, the sale ends soon', es: 'Comprarlos ya, la oferta termina pronto', fa: 'همین حالا بخرم، تخفیف زود تمام می‌شود' },
            why: { en: 'That is impulse buying. "Ends soon" is how a sale pushes you.', es: 'Eso es comprar por impulso. "Termina pronto" es cómo una oferta te empuja.', fa: 'این خرید بی‌فکر است. «زود تمام می‌شود» راهی است که تخفیف تو را وادار می‌کند.' } },
          { t: { en: 'Buy two pairs, since they are cheap', es: 'Comprar dos, ya que están baratos', fa: 'دو تا بخرم، چون ارزان است' },
            why: { en: 'Two unplanned buys cost $180. A sale saves money only if you planned it.', es: 'Dos compras sin plan cuestan $180. Una oferta solo ahorra si la planeaste.', fa: 'دو خرید بی‌پلان ۱۸۰ دالر می‌شود. تخفیف فقط وقتی پول را نگه می‌دارد که پلانش را داشتی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 3, text: { en: 'BUDGET BAY · A made-up beach town. Bank and library on Main Street, boardwalk to the south.', es: 'BAHÍA DEL PRESUPUESTO · Un pueblo de playa inventado. Banco y biblioteca en la calle principal; el paseo, al sur.', fa: 'خلیج بودجه · یک شهرک ساحلی خیالی. بانک و کتابخانه در سرک عمومی، راه چوبی ساحل در جنوب.' } },
    { x: 17, y: 7, text: { en: 'THE SHOPS · Big SALE signs push you to buy now. A sale is a deal only if planned.', es: 'LAS TIENDAS · Los grandes letreros de OFERTA te empujan a comprar ya. Solo es buen trato si lo planeaste.', fa: 'دکان‌ها · تابلوهای کلان «تخفیف» تو را به خرید فوری وادار می‌کنند. فقط اگر پلانش را داشتی معاملهٔ خوب است.' } },
    { x: 25, y: 19, text: { en: 'PIER CLOCK · A time-bound goal has a date. Lina\'s bike goal: 6 months from now.', es: 'RELOJ DEL MUELLE · Una meta con fecha límite tiene una fecha. La meta de Lina: la bici en 6 meses.', fa: 'ساعت اسکله · هدف با وقت معین یک تاریخ دارد. هدف بایسکل لینا: ۶ ماه بعد از حالا.' } }
  ],

  /* the quest: Lina (gold !) on the boardwalk, south-west -> Mr. Duc the kite seller by the shops, north-east
     -> the Grump's Sea Gust tore Lina's goal card into 3 pieces: WHAT (by the bike shop, south-west),
     HOW MUCH (by the bank, north-west), WHEN (by the pier clock, south-east). Then catch the gust. */
  quest: {
    stat: 'hei',
    title: { en: 'The Runaway Goal Card', es: 'La tarjeta de metas fugitiva', fa: 'کارت هدف فراری' },
    giver: {
      x: 8, y: 14,
      name: { en: 'Lina', es: 'Lina', fa: 'لینا' },
      role: { en: 'Student who works at the snack stand', es: 'Estudiante que trabaja en el puesto de bocadillos', fa: 'شاگردی که در غرفهٔ خوراکه کار می‌کند' },
      look: { skin: 3, hair: '#3a2416', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I work at the snack stand. I made a goal card for a used bike.', es: 'Trabajo en el puesto de bocadillos. Hice una tarjeta de metas para una bici usada.', fa: 'من در غرفهٔ خوراکه کار می‌کنم. برای یک بایسکل دست دوم کارت هدف ساختم.' },
        { en: 'A big gust blew it away! Mr. Duc the kite seller saw it.', es: '¡Una ráfaga fuerte se la llevó! El Sr. Duc, el vendedor de cometas, la vio.', fa: 'یک باد تند آن را برد! آقای دوک، کاغذپران‌فروش، آن را دید.' }
      ],
      wait: { en: 'Mr. Duc sells kites by the shops, to the north-east.', es: 'El Sr. Duc vende cometas junto a las tiendas, al noreste.', fa: 'آقای دوک کنار دکان‌ها، طرف شمال شرق، کاغذپران می‌فروشد.' },
      thanks: { en: 'My card is whole! On payday, I save $50 first. That is [[pay yourself first|paying myself first]].', es: '¡Mi tarjeta está completa! El día de pago, ahorro $50 primero. Eso es [[pay yourself first|pagarme a mí primero]].', fa: 'کارتم کامل شد! روز معاش، اول ۵۰ دالر پس‌انداز می‌کنم. این یعنی [[pay yourself first|اول به خودت بپرداز]].' }
    },
    contact: {
      x: 29, y: 9,
      name: { en: 'Mr. Duc', es: 'Sr. Duc', fa: 'آقای دوک' },
      role: { en: 'Kite seller', es: 'Vendedor de cometas', fa: 'کاغذپران‌فروش' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#4a8ac0', pants: '#3a3a3a', hat: '#e8d8a0', style: 'short' },
      lines: [
        { en: 'My kites feel every wind. That gust was the Grump\'s Sea Gust!', es: 'Mis cometas sienten cada viento. ¡Esa ráfaga era la Ráfaga Marina del Gruñón!', fa: 'کاغذپران‌هایم هر بادی را حس می‌کنند. آن باد، باد بحری غرغرو بود!' },
        { en: 'It tore Lina\'s goal card into 3 pieces: what, how much, and when.', es: 'Rompió la tarjeta de Lina en 3 pedazos: qué, cuánto y cuándo.', fa: 'کارت هدف لینا را ۳ تکه کرد: چه، چقدر و چه وقت.' },
        { en: 'Follow the clues to each piece. Then catch the gust!', es: 'Sigue las pistas hasta cada pedazo. ¡Luego atrapa la ráfaga!', fa: 'سرنخ‌ها را تا هر تکه دنبال کن. بعد باد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [6, 16],
      hops: [[18, 13], [12, 13]],
      name: { en: 'The Grump\'s Sea Gust', es: 'La Ráfaga Marina del Gruñón', fa: 'باد بحری غرغرو' },
      taunt: { en: 'Whoosh! Goals are boring! Spend it all today and forget about tomorrow!', es: '¡Fiuuu! ¡Las metas son aburridas! ¡Gástalo todo hoy y olvídate de mañana!', fa: 'ووش! هدف‌ها خسته‌کن هستند! همه را امروز خرج کن و فردا را فراموش کن!' },
      clues: [
        { t: { en: 'Piece 1 says WHAT Lina wants: a specific thing. It blew to the shop that sells it.', es: 'El pedazo 1 dice QUÉ quiere Lina: algo específico. Voló a la tienda que lo vende.', fa: 'تکهٔ ۱ می‌گوید لینا «چه» می‌خواهد: یک چیز مشخص. به دکانی رفت که آن را می‌فروشد.' },
          zones: [{ x: 2, y: 13, w: 4, h: 1 }],
          noBy: [{ x: 24, y: 3, w: 5, h: 1, t: { en: 'This shop sells shoes. Lina\'s goal card is about a bike.', es: 'Esta tienda vende zapatos. La tarjeta de Lina es sobre una bici.', fa: 'این دکان بوت می‌فروشد. کارت هدف لینا دربارهٔ بایسکل است.' } }],
          found: { en: 'Piece 1, by the bike shop: a used bike! That is specific.', es: '¡El pedazo 1, junto a la tienda de bicis: una bici usada! Eso es específico.', fa: 'تکهٔ ۱، کنار دکان بایسکل: یک بایسکل دست دوم! این مشخص است.' } },
        { t: { en: 'Piece 2 says HOW MUCH: $300. It blew to the place that keeps savings safe.', es: 'El pedazo 2 dice CUÁNTO: $300. Voló al lugar que guarda seguros los ahorros.', fa: 'تکهٔ ۲ می‌گوید «چقدر»: ۳۰۰ دالر. به جایی رفت که پس‌انداز را امن نگه می‌دارد.' },
          zones: [{ x: 1, y: 3, w: 6, h: 1 }],
          noBy: [{ x: 18, y: 8, w: 13, h: 2, t: { en: 'These shops sell things. Savings are kept safe in the bank, north-west.', es: 'Estas tiendas venden cosas. Los ahorros se guardan seguros en el banco, al noroeste.', fa: 'این دکان‌ها چیز می‌فروشند. پس‌انداز در بانک، طرف شمال غرب، امن نگه داشته می‌شود.' } }],
          found: { en: 'Piece 2, by the bank: $300! A number makes the goal measurable.', es: '¡El pedazo 2, junto al banco: $300! Un número hace la meta medible.', fa: 'تکهٔ ۲، کنار بانک: ۳۰۰ دالر! یک عدد هدف را قابل اندازه می‌سازد.' } },
        { t: { en: 'Piece 3 says WHEN: in 6 months. It blew to the clock on the pier.', es: 'El pedazo 3 dice CUÁNDO: en 6 meses. Voló al reloj del muelle.', fa: 'تکهٔ ۳ می‌گوید «چه وقت»: در ۶ ماه. به ساعت روی اسکله رفت.' },
          zones: [{ x: 22, y: 18, w: 3, h: 3 }],
          noBy: [{ x: 1, y: 16, w: 20, h: 2, t: { en: 'This is the beach. The pier clock is out over the water, south-east.', es: 'Esta es la playa. El reloj del muelle está sobre el agua, al sureste.', fa: 'این ساحل است. ساعت اسکله بالای آب، طرف جنوب شرق، است.' } }],
          found: { en: 'Piece 3, by the pier clock: 6 months! A date makes it time-bound.', es: '¡El pedazo 3, junto al reloj: 6 meses! Una fecha le da un límite de tiempo.', fa: 'تکهٔ ۳، کنار ساعت اسکله: ۶ ماه! تاریخ آن را با وقت معین می‌سازد.' } }
      ],
      win: { en: 'Caught you! The gust dies down. All 3 pieces of the goal card fit together!', es: '¡Te atrapé! La ráfaga se calma. ¡Los 3 pedazos de la tarjeta encajan!', fa: 'گرفتمت! باد آرام شد. هر ۳ تکهٔ کارت هدف با هم جور شد!' },
      item: { icon: '📝', name: { en: 'Lina\'s goal card', es: 'La tarjeta de metas de Lina', fa: 'کارت هدف لینا' } }
    }
  },

  scraps: [[30, 1], [1, 9], [1, 17]],
  smudges: [[13, 9], [18, 17]],

  challenge: {
    at: [10, 8],
    type: 'route', // in the world; the card version (order) is the fallback
    // the steps of Lina's money plan: the library (set a goal) -> the park picnic spot (budget) -> the bank
    // (save first) -> the lifeguard stand on the beach (a fund for surprises) -> the bike shop (reach the goal)
    spots: [[23, 3], [10, 12], [7, 3], [28, 17], [6, 13]],
    stat: 'hei',
    title: { en: 'Lina\'s money plan', es: 'El plan de dinero de Lina', fa: 'پلان پولی لینا' },
    intro: { en: 'The Grump mixed up Lina\'s plan! Walk to each step on the map, in order.',
      es: '¡El Gruñón revolvió el plan de Lina! Camina a cada paso del mapa, en orden.',
      fa: 'غرغرو پلان لینا را درهم کرد! به ترتیب به هر قدم روی نقشه برو.' },
    items: [
      { icon: '🎯', t: { en: 'Set a SMART goal: $300 for a bike in 6 months', es: 'Ponte una meta SMART: $300 para una bici en 6 meses', fa: 'یک هدف SMART بگذار: ۳۰۰ دالر برای بایسکل در ۶ ماه' } },
      { icon: '📝', t: { en: 'Make a budget: money in and money out', es: 'Haz un presupuesto: el dinero que entra y el que sale', fa: 'بودجه بساز: پولی که می‌آید و پولی که می‌رود' } },
      { icon: '🏦', t: { en: 'Pay yourself first: save $50 each payday', es: 'Págate a ti primero: ahorra $50 cada día de pago', fa: 'اول به خودت بپرداز: هر روز معاش ۵۰ دالر پس‌انداز کن' } },
      { icon: '🛟', t: { en: 'Build an emergency fund for surprises', es: 'Arma un fondo de emergencia para las sorpresas', fa: 'یک پس‌انداز اضطراری برای غافلگیری‌ها جمع کن' } },
      { icon: '🚲', t: { en: 'Reach the goal: buy the bike!', es: 'Logra la meta: ¡compra la bici!', fa: 'به هدف برس: بایسکل را بخر!' } }
    ],
    why: { en: 'Plan in order: set a goal, make a budget, save first, build a surprise fund, then reach your goal.',
      es: 'Planea en orden: ponte una meta, haz un presupuesto, ahorra primero, arma un fondo para sorpresas y logra tu meta.',
      fa: 'به ترتیب پلان کن: هدف بگذار، بودجه بساز، اول پس‌انداز کن، پول اضطراری جمع کن، بعد به هدف برس.' },
    success: { en: 'Plan done! Lina rides her bike, and she still has money for surprises.', es: '¡Plan listo! Lina anda en su bici y todavía tiene dinero para sorpresas.', fa: 'پلان تمام شد! لینا بایسکل‌سواری می‌کند و هنوز برای غافلگیری‌ها پول دارد.' }
  },

  boss: {
    at: [29, 12],
    stat: 'reg',
    need: 3,
    name: { en: 'The Splurge Grump', es: 'El Gruñón Derrochón', fa: 'غرغروی ولخرج' },
    appear: { en: 'The Splurge Grump is hiding in the sea fog by the snack stand!', es: '¡El Gruñón Derrochón se esconde en la niebla del mar junto al puesto de bocadillos!', fa: 'غرغروی ولخرج در مه بحر کنار غرفهٔ خوراکه پنهان است!' },
    taunt: { en: 'Plans? Goals? Boring! Buy it all NOW, before the sale ends!', es: '¿Planes? ¿Metas? ¡Qué aburrido! ¡Cómpralo todo YA, antes de que acabe la oferta!', fa: 'پلان؟ هدف؟ خسته‌کن! همه را همین حالا بخر، پیش از این که تخفیف تمام شود!' },
    win: { en: 'The fog rolls out to sea. Ledger page 3.2 floats down into your hands!', es: 'La niebla se va al mar. ¡La página 3.2 del libro cae en tus manos!', fa: 'مه به طرف بحر می‌رود. صفحهٔ ۳.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which of these is a long-term goal?', es: '¿Cuál de estas es una meta a largo plazo?', fa: 'کدام یکی از اینها هدف درازمدت است؟' },
        choices: [
          { en: 'Saving for college', es: 'Ahorrar para la universidad', fa: 'پس‌انداز برای پوهنتون' },
          { en: 'New shoes next month', es: 'Zapatos nuevos el próximo mes', fa: 'بوت نو ماه آینده' },
          { en: 'A movie this weekend', es: 'Una película este fin de semana', fa: 'یک فلم در این آخر هفته' },
          { en: 'A snack after school', es: 'Un bocadillo después de clases', fa: 'یک خوراکه بعد از مکتب' }],
        answer: 0,
        why: { en: 'Long-term goals take years, like college or a car. The others take days or weeks.', es: 'Las metas a largo plazo toman años, como la universidad o un carro. Las otras, días o semanas.', fa: 'هدف‌های درازمدت چند سال وقت می‌گیرند، مثل پوهنتون یا موتر. بقیه چند روز یا چند هفته.' } },
      { q: { en: 'In a SMART goal, what does the T stand for?', es: 'En una meta SMART, ¿qué significa la T?', fa: 'در یک هدف SMART، حرف T یعنی چه؟' },
        choices: [
          { en: 'Time-bound: it has a date', es: 'Con fecha límite: tiene una fecha', fa: 'با وقت معین: تاریخ دارد' },
          { en: 'Total: it costs a lot', es: 'Total: cuesta mucho', fa: 'مجموع: قیمت زیاد دارد' },
          { en: 'Top: it is your best dream', es: 'Tope: es tu mejor sueño', fa: 'بالا: بهترین آرزوی توست' },
          { en: 'Tiny: it is very small', es: 'Diminuta: es muy pequeña', fa: 'کوچک: خیلی خرد است' }],
        answer: 0,
        why: { en: 'Time-bound means the goal has a date, like "in 6 months."', es: 'Con fecha límite significa que la meta tiene una fecha, como "en 6 meses".', fa: 'با وقت معین یعنی هدف تاریخ دارد، مثل «در ۶ ماه».' } },
      { q: { en: 'What does "pay yourself first" mean?', es: '¿Qué significa "págate a ti primero"?', fa: '«اول به خودت بپرداز» یعنی چه؟' },
        choices: [
          { en: 'Save some pay before you spend', es: 'Ahorrar parte del sueldo antes de gastar', fa: 'پیش از خرج، کمی از معاش را پس‌انداز کنی' },
          { en: 'Buy a treat each payday first', es: 'Comprarte un gusto primero cada pago', fa: 'هر روز معاش اول یک چیز خوش‌مزه بخری' },
          { en: 'Pay your friends back first', es: 'Pagarles primero a tus amigos', fa: 'اول قرض دوستانت را بدهی' },
          { en: 'Spend it all, then save the rest', es: 'Gastarlo todo y luego ahorrar lo que queda', fa: 'همه را خرج کنی، بعد باقی را پس‌انداز کنی' }],
        answer: 0,
        why: { en: 'On payday, put savings away first. Then spend what is left.', es: 'El día de pago, aparta primero tus ahorros. Luego gasta lo que queda.', fa: 'روز معاش، اول پس‌انداز را جدا کن. بعد باقی‌مانده را خرج کن.' } },
      { q: { en: 'What is an emergency fund for?', es: '¿Para qué es un fondo de emergencia?', fa: 'پس‌انداز اضطراری برای چیست؟' },
        choices: [
          { en: 'Surprises, like a broken phone', es: 'Sorpresas, como un teléfono roto', fa: 'غافلگیری‌ها، مثل تیلفون شکسته' },
          { en: 'A trip to the beach in summer', es: 'Un viaje a la playa en verano', fa: 'یک سفر به ساحل در تابستان' },
          { en: 'New shoes that are on sale', es: 'Zapatos nuevos que están en oferta', fa: 'بوت نو که در تخفیف است' },
          { en: 'Gifts for your best friends', es: 'Regalos para tus mejores amigos', fa: 'تحفه برای بهترین دوستانت' }],
        answer: 0,
        why: { en: 'An emergency fund is saved for surprises, so they do not ruin your plan.', es: 'Un fondo de emergencia se ahorra para sorpresas, así no arruinan tu plan.', fa: 'پس‌انداز اضطراری برای غافلگیری‌هاست، تا پلانت را خراب نکنند.' } },
      { q: { en: 'A common guideline: how much should an emergency fund cover?', es: 'Una guía común: ¿cuánto debe cubrir un fondo de emergencia?', fa: 'یک رهنمود معمول: پس‌انداز اضطراری باید چقدر را بپوشاند؟' },
        choices: [
          { en: '3 to 6 months of expenses', es: 'De 3 a 6 meses de gastos', fa: '۳ تا ۶ ماه مصارف' },
          { en: 'Only one week of your expenses', es: 'Solo una semana de tus gastos', fa: 'فقط یک هفته مصارف تو' },
          { en: 'Ten full years of your expenses', es: 'Diez años completos de tus gastos', fa: 'ده سال کامل مصارف تو' },
          { en: 'Just the money in your pocket', es: 'Solo el dinero de tu bolsillo', fa: 'فقط پولی که در جیبت است' }],
        answer: 0,
        why: { en: 'Many experts say 3 to 6 months of expenses. That covers most surprises.', es: 'Muchos expertos dicen de 3 a 6 meses de gastos. Eso cubre casi todas las sorpresas.', fa: 'بسیاری از کارشناسان ۳ تا ۶ ماه مصارف را می‌گویند. این بیشتر غافلگیری‌ها را می‌پوشاند.' } },
      { q: { en: '$100 earns 10% simple interest. How much interest is that each year?', es: '$100 gana 10% de interés simple. ¿Cuánto interés es cada año?', fa: '۱۰۰ دالر ۱۰٪ سود ساده می‌گیرد. هر سال چقدر سود می‌شود؟' },
        choices: [
          { en: '$10', es: '$10', fa: '۱۰ دالر' },
          { en: '$1', es: '$1', fa: '۱ دالر' },
          { en: '$100', es: '$100', fa: '۱۰۰ دالر' },
          { en: '$110', es: '$110', fa: '۱۱۰ دالر' }],
        answer: 0,
        why: { en: '10% of $100 is $10. Simple interest pays $10 every year.', es: 'El 10% de $100 es $10. El interés simple paga $10 cada año.', fa: '۱۰٪ از ۱۰۰ دالر، ۱۰ دالر است. سود ساده هر سال ۱۰ دالر می‌دهد.' } },
      { q: { en: 'What is compound interest?', es: '¿Qué es el interés compuesto?', fa: 'سود مرکب چیست؟' },
        choices: [
          { en: 'Interest on your interest too', es: 'Interés también sobre tu interés', fa: 'سود بر سود تو هم' },
          { en: 'A fee you pay to the bank', es: 'Un cobro que le pagas al banco', fa: 'فیسی که به بانک می‌دهی' },
          { en: 'Interest that stops after a year', es: 'Interés que se acaba después de un año', fa: 'سودی که بعد از یک سال قطع می‌شود' },
          { en: 'Money that a store gives back', es: 'Dinero que una tienda te devuelve', fa: 'پولی که دکان پس می‌دهد' }],
        answer: 0,
        why: { en: 'Compound interest pays on your money and on the interest it already earned.', es: 'El interés compuesto paga por tu dinero y por el interés que ya ganó.', fa: 'سود مرکب هم بر پولت و هم بر سودی که قبلاً گرفته، سود می‌دهد.' } },
      { q: { en: 'You see a big sale on shoes you did not plan to buy. What is smart?', es: 'Ves una gran oferta de zapatos que no pensabas comprar. ¿Qué es inteligente?', fa: 'یک تخفیف کلان بر بوتی را می‌بینی که پلان خریدنش را نداشتی. کار هوشیارانه چیست؟' },
        choices: [
          { en: 'Wait 24 hours, then decide', es: 'Esperar 24 horas y luego decidir', fa: '۲۴ ساعت صبر کنی، بعد تصمیم بگیری' },
          { en: 'Buy them fast before they go', es: 'Comprarlos rápido antes de que se acaben', fa: 'زود بخری پیش از این که تمام شوند' },
          { en: 'Buy two pairs to save more', es: 'Comprar dos pares para ahorrar más', fa: 'دو جوره بخری تا بیشتر صرفه کنی' },
          { en: 'Borrow money to buy them now', es: 'Pedir dinero prestado para comprarlos ya', fa: 'قرض بگیری تا همین حالا بخری' }],
        answer: 0,
        why: { en: 'Waiting stops impulse buying. If you still want them tomorrow, check your budget.', es: 'Esperar frena las compras por impulso. Si mañana aún los quieres, revisa tu presupuesto.', fa: 'صبر کردن جلوی خرید بی‌فکر را می‌گیرد. اگر فردا هم خواستی، بودجه‌ات را ببین.' } }
    ]
  },

  learned: [
    { en: 'A [[smart goal|SMART goal]] is Specific, Measurable, Achievable, Relevant and Time-bound.', es: 'Una [[smart goal|meta SMART]] es específica, medible, alcanzable, relevante y con fecha límite.', fa: 'یک [[smart goal|هدف SMART]] مشخص، قابل اندازه، قابل رسیدن، مربوط و با وقت معین است.' },
    { en: '[[pay yourself first|Pay yourself first]], keep an [[emergency fund|emergency fund]], and wait before big buys.', es: '[[pay yourself first|Págate a ti primero]], ten un [[emergency fund|fondo de emergencia]] y espera antes de las compras grandes.', fa: '[[pay yourself first|اول به خودت بپرداز]]، یک [[emergency fund|پس‌انداز اضطراری]] داشته باش و پیش از خریدهای کلان صبر کن.' },
    { en: '[[compound interest|Compound interest]] pays interest on your interest. Starting early helps.', es: 'El [[compound interest|interés compuesto]] paga interés sobre tu interés. Empezar temprano ayuda.', fa: '[[compound interest|سود مرکب]] بر سود تو هم سود می‌دهد. زود شروع کردن کمک می‌کند.' }
  ],
  reflect: {
    q: { en: 'What is one goal you have? Make it SMART: what, how much, and by when?', es: '¿Cuál es una meta que tienes? Hazla SMART: ¿qué, cuánto y para cuándo?', fa: 'یک هدف تو چیست؟ آن را SMART بساز: چه، چقدر و تا چه وقت؟' },
    starter: { en: 'My SMART goal is to', es: 'Mi meta SMART es', fa: 'هدف SMART من این است که' }
  }
};
