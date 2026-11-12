/* COINWALKER · Episode 7.3 · Retirement Planning (retirement for teens, "teen millionaires")
   Safe Harbor: a MADE-UP seaside town on the coast. North half: Harbor Street (l) with the community center (blue roof),
   the bank and the café; the lighthouse (U) on its rocky point (r) in the north-east; a grassy park with trees below.
   South half: two homes (Jada's and Ben's), the seaside park with flowers, the beach (s) and a fishing pier (k).
   People explain Social Security, a 401(k) with an employer match, and IRAs (traditional and Roth).
   The ledger stone: three levers for an invented 18-year-old with a new job (when to start, the match, the account). */
window.EPISODE = {
  id: '7.3',
  realm: 7,
  sol: 'EPF',
  title: { en: 'Retirement Planning', es: 'Planear la jubilación', fa: 'برنامه‌ریزی برای تقاعد' },
  weather: { sky: 'clear', time: 'sunset' },
  place: { en: 'Safe Harbor lighthouse park (made-up)', es: 'Parque del faro de Safe Harbor (inventado)', fa: 'پارک چراغ دریایی سیف هاربر (خیالی)' },
  intro: [
    { en: 'The Grump tore the page about retirement. Now people say: "That is too far away!"',
      es: 'El Gruñón rompió la página de la jubilación. Ahora la gente dice: "¡Eso está muy lejos!"',
      fa: 'غرغرو صفحهٔ تقاعد را پاره کرد. حالا مردم می‌گویند: «آن خیلی دور است!»' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up seaside town on the Atlantic coast (no timeline in this game) */
  scenes: {
    at: [-76.1, 37.0],
    start: [
      { en: 'Safe Harbor is a made-up seaside town with an old lighthouse.',
        es: 'Safe Harbor es un pueblo inventado junto al mar, con un faro viejo.',
        fa: 'سیف هاربر یک شهرک خیالی کنار بحر با یک چراغ دریایی کهنه است.' },
      { en: 'Many people here are retired. They stopped working full-time.',
        es: 'Mucha gente aquí está jubilada. Dejaron de trabajar a tiempo completo.',
        fa: 'بسیاری از مردم اینجا متقاعد هستند. کار تمام‌وقت را بس کرده‌اند.' },
      { en: 'Retired volunteers teach free money classes at the community center.',
        es: 'Voluntarios jubilados dan clases gratis de dinero en el centro comunitario.',
        fa: 'رضاکاران متقاعد در مرکز محله صنف‌های رایگان پول درس می‌دهند.' }
    ],
    page: { en: 'Retirement can last 20 years or more. That is a lot of years to pay for.',
      es: 'La jubilación puede durar 20 años o más. Son muchos años que pagar.',
      fa: 'تقاعد می‌تواند ۲۰ سال یا بیشتر طول بکشد. این سال‌های زیادی برای پرداخت است.' },
    guess: {
      q: { en: 'When is the best time to start saving for retirement?', es: '¿Cuándo es el mejor momento para empezar a ahorrar para la jubilación?', fa: 'بهترین وقت برای شروع پس‌انداز تقاعد چه وقت است؟' },
      choices: [
        { t: { en: '🌱 As early as you can', es: '🌱 Lo antes posible', fa: '🌱 هر چه زودتر' }, ok: true },
        { t: { en: '👴 A few years before you stop', es: '👴 Unos años antes de dejar de trabajar', fa: '👴 چند سال پیش از بس کردن کار' } }
      ],
      why: { en: 'Money saved early has more years to grow. Time is the biggest helper.', es: 'El dinero ahorrado temprano tiene más años para crecer. El tiempo es la mayor ayuda.', fa: 'پولی که زود پس‌انداز شود سال‌های بیشتری برای رشد دارد. وقت بزرگ‌ترین کمک است.' }
    },
    next: {
      q: { en: 'Next: do people with more school usually earn more money?', es: 'Ahora: ¿la gente con más estudios suele ganar más dinero?', fa: 'بعدی: آیا مردمی که درس بیشتر خوانده‌اند معمولاً پول بیشتر کمایی می‌کنند؟' },
      choices: [
        { t: { en: '🎓 Yes, on average they do', es: '🎓 Sí, en promedio sí', fa: '🎓 بله، به طور اوسط' }, ok: true },
        { t: { en: '🤷 No, school does not matter', es: '🤷 No, estudiar no importa', fa: '🤷 نه، درس فرقی ندارد' } }
      ],
      why: { en: 'On average, more education goes with higher pay. But there are many good paths.', es: 'En promedio, más estudios van con mejor sueldo. Pero hay muchos buenos caminos.', fa: 'به طور اوسط، تعلیم بیشتر با معاش بلندتر همراه است. اما راه‌های خوب زیاد هستند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Mr. Abebe', es: 'Sr. Abebe', fa: 'آقای ابیبی' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#3a6a9a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I was a mail carrier for many years. Now I am retired.', es: 'Fui cartero muchos años. Ahora estoy jubilado.', fa: 'سال‌های زیاد نامه‌رسان بودم. حالا متقاعد هستم.' },
        { en: 'I teach a free money class here every Tuesday.', es: 'Aquí doy una clase gratis de dinero cada martes.', fa: 'هر سه‌شنبه اینجا یک صنف رایگان پول درس می‌دهم.' },
        { en: 'Retired life still costs money: food, rent, medicine, the bus.', es: 'La vida jubilada igual cuesta: comida, renta, medicinas, el autobús.', fa: 'زندگی تقاعد هم پول می‌خواهد: خوراک، کرایه، دوا، بس.' }
      ] },
    { at: [10, 2], name: { en: 'Ms. Kim', es: 'Sra. Kim', fa: 'خانم کیم' },
      look: { skin: 1, hair: '#1a1008', shirt: '#2f6f4a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I help people open accounts at this bank.', es: 'Ayudo a la gente a abrir cuentas en este banco.', fa: 'من به مردم در باز کردن حساب در این بانک کمک می‌کنم.' },
        { en: 'An [[ira|IRA]] is not one thing to buy. It is like a basket.', es: 'Una [[ira|IRA]] no es una sola cosa que se compra. Es como una canasta.', fa: 'یک [[ira|IRA]] یک چیز برای خریدن نیست. مثل یک سبد است.' },
        { en: 'The basket holds your savings and investments, so they can grow.', es: 'La canasta guarda tus ahorros e inversiones, para que puedan crecer.', fa: 'سبد پس‌انداز و سرمایه‌گذاری‌های تو را نگه می‌دارد تا رشد کنند.' }
      ] },
    { at: [18, 2], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 3, hair: '#3a2416', shirt: '#c04a2a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I own this café. I have six workers.', es: 'Soy dueño de este café. Tengo seis trabajadores.', fa: 'من صاحب این کافه هستم. شش کارگر دارم.' },
        { en: 'I offer them a [[401k|401(k)]]. They save a little from each paycheck.', es: 'Les ofrezco un [[401k|401(k)]]. Ahorran un poco de cada cheque de pago.', fa: 'برایشان یک [[401k|401(k)]] پیشنهاد می‌کنم. از هر معاش کمی پس‌انداز می‌کنند.' },
        { en: 'Then I add some money too. That is the [[employer match|match]].', es: 'Luego yo también pongo algo de dinero. Ese es el [[employer match|aporte del empleador]].', fa: 'بعد من هم کمی پول اضافه می‌کنم. این [[employer match|پول همسان کارفرما]] است.' }
      ] },
    { at: [3, 13], name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      look: { skin: 4, hair: '#120c08', shirt: '#8a4ac0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Here is an example, not a promise. I saved $100 a month.', es: 'Este es un ejemplo, no una promesa. Ahorré $100 al mes.', fa: 'این یک مثال است، نه یک وعده. من ماهانه ۱۰۰ دالر پس‌انداز کردم.' },
        { en: 'I saved from age 18 to 28. Then I stopped. I put in $12,000.', es: 'Ahorré de los 18 a los 28. Luego paré. Puse $12,000.', fa: 'از ۱۸ تا ۲۸ سالگی پس‌انداز کردم. بعد بس کردم. ۱۲٬۰۰۰ دالر گذاشتم.' },
        { en: 'My money keeps growing until 65. [[compound growth|Compound growth]] does the work!', es: 'Mi dinero sigue creciendo hasta los 65. ¡El [[compound growth|crecimiento compuesto]] trabaja!', fa: 'پولم تا ۶۵ سالگی رشد می‌کند. [[compound growth|رشد مرکب]] کار را انجام می‌دهد!' }
      ] },
    { at: [8, 13], name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#4a7a3a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I started later. I save $100 a month from 28 to 65.', es: 'Yo empecé más tarde. Ahorro $100 al mes de los 28 a los 65.', fa: 'من دیرتر شروع کردم. از ۲۸ تا ۶۵ سالگی ماهانه ۱۰۰ دالر پس‌انداز می‌کنم.' },
        { en: 'That is 37 years. I put in $44,400 in all.', es: 'Son 37 años. En total pongo $44,400.', fa: 'این ۳۷ سال است. در کل ۴۴٬۴۰۰ دالر می‌گذارم.' },
        { en: 'In this example, Jada can still end with about as much. Her money grew longer!', es: 'En este ejemplo, Jada puede terminar con casi lo mismo. ¡Su dinero creció más tiempo!', fa: 'در این مثال، جادا باز هم تقریباً همان‌قدر پول دارد. پولش وقت بیشتر رشد کرد!' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): Harbor Street (l) on row 3, with the community center (Q over h), the bank and the café (R over h)
     above it. The lighthouse (U) stands on its rocky point (r) in the north-east, by the sea (=). A grassy park with
     trees and flowers fills the rest of the north. Sand (s) runs down the east coast.
     Row 11: the shore path (l). South: Jada's and Ben's homes in the south-west, the seaside park with flowers,
     the beach and the fishing pier (k) in the south-east. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT====',
    'T.QQQQQ..RRR.....RRR.....rUr.===',
    'T.hhdhh..hdh.....hdh.....rUr.===',
    'Tlllllllllllllllllllllll..:..===',
    'T......,,...........,,....:..s==',
    'T.x..T....T.......T....T..:.ss==',
    'T...........................ss==',
    'T..TT..........TT.......T...ss==',
    'T.......,,,.........,,,.....ss~=',
    'T..T..........T.........T...ss==',
    'T...........................ss==',
    'Tllllllllllllllllllllllllllls===',
    'T.RRR..RRR.......,,,......sss===',
    'T.hdh..hdh.......,,,......sss===',
    'T.........................sss===',
    'T.T..T....T...,,..........sskkk=',
    'T.........................sss===',
    'T..T......................sss===',
    'T.x.....T.........,,,.....sss===',
    'T.........................sss===',
    'T....T.........T.........x.ss~==',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT===='
  ],
  start: [12, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [8, 9], at: [12, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, across the park.', es: 'Desde esta nota, camina 4 pasos al este, por el parque.', fa: 'از این یادداشت، ۴ قدم به شرق برو، از میان پارک.' },
      text: { en: 'An old coin! Saving small coins for many years can add up to a lot.', es: '¡Una moneda antigua! Ahorrar monedas por muchos años puede sumar mucho.', fa: 'یک سکهٔ قدیمی! پس‌انداز سکه‌های کوچک در سال‌های زیاد می‌تواند زیاد شود.' } },
    { clueAt: [17, 19], at: [17, 15], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps north, toward the shore path.', es: 'Desde esta nota, camina 4 pasos al norte, hacia el camino de la orilla.', fa: 'از این یادداشت، ۴ قدم به شمال برو، به طرف راه ساحل.' },
      text: { en: 'A seashell! A shell grows a little every year, like savings over a lifetime.', es: '¡Una concha! Una concha crece un poco cada año, como los ahorros en una vida.', fa: 'یک صدف! صدف هر سال کمی بزرگ می‌شود، مثل پس‌انداز در طول زندگی.' } }
  ],

  words: {
    retirement: { en: 'the time when people stop working full-time', es: 'el tiempo en que la gente deja de trabajar a tiempo completo', fa: 'وقتی که مردم کار تمام‌وقت را بس می‌کنند' },
    'social security': { en: 'a government program that pays money to retired workers', es: 'un programa del gobierno que paga dinero a trabajadores jubilados', fa: 'یک برنامهٔ حکومت که به کارگران متقاعد پول می‌دهد' },
    'payroll tax': { en: 'a tax taken out of each paycheck', es: 'un impuesto que se saca de cada cheque de pago', fa: 'مالیاتی که از هر معاش گرفته می‌شود' },
    '401k': { en: 'a retirement plan you get through your job; you save from each paycheck', es: 'un plan de jubilación que te da tu trabajo; ahorras de cada cheque de pago', fa: 'یک برنامهٔ تقاعد که از راه وظیفه‌ات می‌گیری؛ از هر معاش پس‌انداز می‌کنی' },
    'employer match': { en: 'extra money your boss adds when you save in a 401(k)', es: 'dinero extra que tu jefe pone cuando ahorras en un 401(k)', fa: 'پول اضافی که کارفرما می‌گذارد وقتی تو در 401(k) پس‌انداز می‌کنی' },
    ira: { en: 'an individual retirement account that you open yourself', es: 'una cuenta individual de jubilación que abres tú mismo', fa: 'یک حساب شخصی تقاعد که خودت باز می‌کنی' },
    'traditional ira': { en: 'an IRA with a tax break now; you pay tax when you take money out', es: 'una IRA con un descuento de impuestos ahora; pagas impuestos al sacar el dinero', fa: 'یک IRA با تخفیف مالیات حالا؛ وقت بیرون کشیدن پول مالیات می‌دهی' },
    'roth ira': { en: 'an IRA where you pay tax now, then take money out tax-free in retirement', es: 'una IRA donde pagas impuestos ahora y sacas el dinero sin impuestos en la jubilación', fa: 'یک IRA که حالا مالیات می‌دهی، بعد در تقاعد پول را بدون مالیات می‌کشی' },
    'compound growth': { en: 'growth on your money and on the growth it already made', es: 'crecimiento sobre tu dinero y sobre lo que ya creció', fa: 'رشد روی پول تو و روی رشدی که قبلاً کرده' },
    'earned income': { en: 'money you get paid for working, like wages from a job', es: 'dinero que te pagan por trabajar, como el sueldo de un empleo', fa: 'پولی که برای کار کردن می‌گیری، مثل معاش یک وظیفه' }
  },

  npcs: [
    {
      x: 6, y: 6,
      name: { en: 'Ms. Rivera', es: 'Sra. Rivera', fa: 'خانم ریویرا' },
      role: { en: 'Retired teacher, volunteer', es: 'Maestra jubilada, voluntaria', fa: 'معلم متقاعد، رضاکار' },
      look: { skin: 2, hair: '#c8c8c8', shirt: '#c04a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I taught school for many years. Now I am in [[retirement|retirement]].', es: 'Fui maestra muchos años. Ahora estoy en la [[retirement|jubilación]].', fa: 'سال‌های زیاد در مکتب درس دادم. حالا در [[retirement|تقاعد]] هستم.' },
        { en: 'Retirement means you stop working full-time. But you still need money.', es: 'Jubilarse es dejar de trabajar a tiempo completo. Pero igual necesitas dinero.', fa: 'تقاعد یعنی کار تمام‌وقت را بس می‌کنی. اما باز هم به پول ضرورت داری.' },
        { en: 'I get [[social security|Social Security]]. Workers pay into it through a [[payroll tax|payroll tax]].', es: 'Recibo [[social security|Seguro Social]]. Los trabajadores aportan con un [[payroll tax|impuesto sobre la nómina]].', fa: 'من [[social security|تأمین اجتماعی]] می‌گیرم. کارگران با [[payroll tax|مالیات معاش]] در آن پول می‌دهند.' },
        { en: 'But it is not meant to pay for everything. My savings help too.', es: 'Pero no está hecho para pagarlo todo. Mis ahorros también ayudan.', fa: 'اما برای پرداخت همه چیز ساخته نشده. پس‌اندازم هم کمک می‌کند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What is true about Social Security?', es: '¿Qué es cierto sobre el Seguro Social?', fa: 'کدام گپ دربارهٔ تأمین اجتماعی درست است؟' },
        choices: [
          { ok: true, t: { en: 'It helps, but covers only part of the costs', es: 'Ayuda, pero cubre solo parte de los gastos', fa: 'کمک می‌کند، اما فقط بخشی از مصارف را می‌پوشاند' },
            why: { en: 'Yes! It is a government program that helps. Most people also need their own savings.', es: '¡Sí! Es un programa del gobierno que ayuda. Casi todos necesitan también sus propios ahorros.', fa: 'بله! یک برنامهٔ حکومت است که کمک می‌کند. بیشتر مردم پس‌انداز خود را هم لازم دارند.' } },
          { t: { en: 'It pays for every cost in retirement', es: 'Paga todos los gastos de la jubilación', fa: 'همهٔ مصارف تقاعد را می‌پردازد' },
            why: { en: 'No. Ms. Rivera said it is not meant to pay for everything.', es: 'No. La Sra. Rivera dijo que no está hecho para pagarlo todo.', fa: 'نه. خانم ریویرا گفت برای پرداخت همه چیز ساخته نشده.' } },
          { t: { en: 'It is a savings account at a bank', es: 'Es una cuenta de ahorros en un banco', fa: 'یک حساب پس‌انداز در بانک است' },
            why: { en: 'No. It is a government program. Workers pay into it through payroll taxes.', es: 'No. Es un programa del gobierno. Los trabajadores aportan con impuestos sobre la nómina.', fa: 'نه. یک برنامهٔ حکومت است. کارگران با مالیات معاش در آن پول می‌دهند.' } }
        ]
      }
    },
    {
      x: 20, y: 6,
      name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      role: { en: 'Café shift leader', es: 'Jefa de turno del café', fa: 'سرپرست نوبت کافه' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e07a2a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I work at the café. My job has a [[401k|401(k)]] plan.', es: 'Trabajo en el café. Mi trabajo tiene un plan [[401k|401(k)]].', fa: 'من در کافه کار می‌کنم. وظیفه‌ام یک برنامهٔ [[401k|401(k)]] دارد.' },
        { en: 'Some money goes into it from each paycheck, before taxes.', es: 'Una parte de cada cheque de pago entra ahí, antes de impuestos.', fa: 'کمی پول از هر معاش، پیش از مالیات، در آن می‌رود.' },
        { en: 'My boss adds 50 cents for each dollar I save, up to a limit.', es: 'Mi jefe pone 50 centavos por cada dólar que ahorro, hasta un límite.', fa: 'کارفرمایم برای هر دالری که پس‌انداز می‌کنم ۵۰ سنت می‌گذارد، تا یک حد.' },
        { en: 'That [[employer match|match]] is free money. I never skip it!', es: 'Ese [[employer match|aporte del empleador]] es dinero gratis. ¡Nunca lo dejo pasar!', fa: 'آن [[employer match|پول همسان]] پول مفت است. هرگز از دستش نمی‌دهم!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Priya saves $40 this month. Her boss adds 50 cents per dollar. How much does her boss add?', es: 'Priya ahorra $40 este mes. Su jefe pone 50 centavos por dólar. ¿Cuánto pone su jefe?', fa: 'پریا این ماه ۴۰ دالر پس‌انداز می‌کند. کارفرما برای هر دالر ۵۰ سنت می‌گذارد. کارفرما چقدر می‌گذارد؟' },
        choices: [
          { ok: true, t: { en: '$20', es: '$20', fa: '۲۰ دالر' },
            why: { en: 'Yes! Half of $40 is $20. Now she has $60 saved.', es: '¡Sí! La mitad de $40 es $20. Ahora tiene $60 ahorrados.', fa: 'بله! نصف ۴۰ دالر ۲۰ دالر است. حالا ۶۰ دالر پس‌انداز دارد.' } },
          { t: { en: '$40', es: '$40', fa: '۴۰ دالر' },
            why: { en: 'Not this time. 50 cents per dollar is half. Half of $40 is $20.', es: 'Esta vez no. 50 centavos por dólar es la mitad. La mitad de $40 es $20.', fa: 'این بار نه. ۵۰ سنت برای هر دالر یعنی نصف. نصف ۴۰ دالر ۲۰ دالر است.' } },
          { t: { en: '$50', es: '$50', fa: '۵۰ دالر' },
            why: { en: 'No. 50 cents per dollar means half. Half of $40 is $20.', es: 'No. 50 centavos por dólar es la mitad. La mitad de $40 es $20.', fa: 'نه. ۵۰ سنت برای هر دالر یعنی نصف. نصف ۴۰ دالر ۲۰ دالر است.' } }
        ]
      }
    },
    {
      x: 12, y: 16,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Bank teller on his lunch break', es: 'Cajero de banco en su almuerzo', fa: 'تحویلدار بانک در وقت نان چاشت' },
      look: { skin: 5, hair: '#1a1008', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'An [[ira|IRA]] is a retirement account you open yourself.', es: 'Una [[ira|IRA]] es una cuenta de jubilación que abres tú mismo.', fa: 'یک [[ira|IRA]] حساب تقاعد است که خودت باز می‌کنی.' },
        { en: 'A [[traditional ira|traditional IRA]] gives a tax break now. You pay tax later.', es: 'Una [[traditional ira|IRA tradicional]] da un descuento de impuestos ahora. Pagas después.', fa: 'یک [[traditional ira|IRA عادی]] حالا تخفیف مالیات می‌دهد. بعداً مالیات می‌دهی.' },
        { en: 'With a [[roth ira|Roth IRA]], you pay tax now. Later it comes out tax-free.', es: 'Con una [[roth ira|Roth IRA]], pagas impuestos ahora. Después lo sacas sin impuestos.', fa: 'با یک [[roth ira|Roth IRA]]، حالا مالیات می‌دهی. بعداً بدون مالیات بیرون می‌کشی.' },
        { en: 'A teen with [[earned income|earned income]] can have one. An adult helps open it.', es: 'Un joven con [[earned income|ingreso del trabajo]] puede tener una. Un adulto ayuda a abrirla.', fa: 'نوجوانی که [[earned income|عاید کار]] دارد می‌تواند یکی داشته باشد. یک بزرگسال در باز کردنش کمک می‌کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'A teen pays very little tax now. Which IRA often fits best?', es: 'Un joven paga muy pocos impuestos ahora. ¿Qué IRA suele ser mejor?', fa: 'یک نوجوان حالا مالیات بسیار کم می‌دهد. کدام IRA اکثراً بهتر است؟' },
        choices: [
          { ok: true, t: { en: 'A Roth IRA: low tax now, tax-free later', es: 'Una Roth IRA: poco impuesto ahora, nada después', fa: 'Roth IRA: حالا مالیات کم، بعداً بدون مالیات' },
            why: { en: 'Yes! The teen pays a small tax now. In retirement, the money comes out tax-free.', es: '¡Sí! El joven paga poco impuesto ahora. En la jubilación, saca el dinero sin impuestos.', fa: 'بله! نوجوان حالا مالیات کم می‌دهد. در تقاعد، پول بدون مالیات بیرون می‌آید.' } },
          { t: { en: 'A traditional IRA: a big tax break now', es: 'Una IRA tradicional: gran descuento ahora', fa: 'IRA عادی: تخفیف مالیات کلان حالا' },
            why: { en: 'Not the best fit. A teen pays little tax now, so the tax break is small.', es: 'No es lo mejor. Un joven paga pocos impuestos, así que el descuento es pequeño.', fa: 'بهترین نیست. نوجوان حالا مالیات کم می‌دهد، پس تخفیف کوچک است.' } },
          { t: { en: 'No IRA: teens are not allowed one', es: 'Ninguna: los jóvenes no pueden tener una', fa: 'هیچ IRA: نوجوانان اجازه ندارند' },
            why: { en: 'No. A teen with earned income can have an IRA. An adult helps open it.', es: 'No. Un joven con ingreso del trabajo puede tener una IRA. Un adulto ayuda a abrirla.', fa: 'نه. نوجوانی که عاید کار دارد می‌تواند IRA داشته باشد. یک بزرگسال کمک می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'SAFE HARBOR · a made-up seaside town · Harbor Street, the lighthouse and the park.', es: 'SAFE HARBOR · un pueblo inventado junto al mar · Harbor Street, el faro y el parque.', fa: 'سیف هاربر · یک شهرک خیالی کنار بحر · سرک هاربر، چراغ دریایی و پارک.' } },
    { x: 2, y: 18, text: { en: 'SEASIDE PARK · Sit on a bench. A long retirement needs a long plan.', es: 'PARQUE DEL MAR · Siéntate en una banca. Una jubilación larga necesita un plan largo.', fa: 'پارک کنار بحر · روی یک چوکی بنشین. تقاعد طولانی برنامهٔ طولانی می‌خواهد.' } },
    { x: 25, y: 20, text: { en: 'FISHING PIER · Small fish grow big with time. So can small savings.', es: 'MUELLE DE PESCA · Los peces pequeños crecen con el tiempo. Los ahorros pequeños también.', fa: 'اسکلهٔ ماهیگیری · ماهی‌های کوچک با وقت کلان می‌شوند. پس‌انداز کوچک هم.' } }
  ],

  /* the quest: Nia (gold !) in the seaside park, south-east -> Mr. Osei on a bench in the south-west park
     -> the Runaway Kite left 3 paper pieces along Harbor Street (north): Social Security by the community center,
     the 401(k) by the café (a job), the Roth IRA by the bank (an account you open yourself) -> catch it in the
     north-east park -> back to Nia. */
  quest: {
    stat: 'hei',
    title: { en: 'The Runaway Kite', es: 'La cometa fugitiva', fa: 'گدی‌پران فراری' },
    giver: {
      x: 20, y: 15,
      name: { en: 'Nia', es: 'Nia', fa: 'نیا' },
      role: { en: 'Student with a summer job', es: 'Estudiante con trabajo de verano', fa: 'شاگرد با کار تابستانی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#3a9aa0', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'I made a kite from my class poster: "Three ways to pay for retirement."', es: 'Hice una cometa con mi cartel de clase: "Tres formas de pagar la jubilación."', fa: 'از پوستر صنفم یک گدی‌پران ساختم: «سه راه برای پرداخت تقاعد.»' },
        { en: 'The wind took it! Mr. Osei saw where it went. Please ask him!', es: '¡El viento se la llevó! El Sr. Osei vio adónde fue. ¡Pregúntale, por favor!', fa: 'باد آن را برد! آقای اوسی دید کجا رفت. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Mr. Osei sits on a bench in the park to the west.', es: 'El Sr. Osei está sentado en una banca del parque, al oeste.', fa: 'آقای اوسی روی یک چوکی در پارک طرف غرب نشسته است.' },
      thanks: { en: 'My kite! Social Security, a 401(k) and an IRA. Three ways, all back!', es: '¡Mi cometa! Seguro Social, un 401(k) y una IRA. ¡Las tres formas volvieron!', fa: 'گدی‌پرانم! تأمین اجتماعی، 401(k) و IRA. هر سه راه برگشت!' }
    },
    contact: {
      x: 4, y: 16,
      name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      role: { en: 'Retired bus driver', es: 'Chofer de autobús jubilado', fa: 'دریور بس متقاعد' },
      look: { skin: 5, hair: '#b8b8b8', shirt: '#8a5a2a', pants: '#3a3a2a', hat: '#2a4a6a', style: 'short' },
      lines: [
        { en: 'I drove a bus for 30 years. I saved a little every month.', es: 'Manejé un autobús 30 años. Ahorré un poco cada mes.', fa: '۳۰ سال دریور بس بودم. هر ماه کمی پس‌انداز کردم.' },
        { en: 'The kite flew north to Harbor Street. It dropped 3 paper pieces there!', es: 'La cometa voló al norte, a Harbor Street. ¡Dejó caer 3 pedazos de papel allí!', fa: 'گدی‌پران به شمال تا سرک هاربر پرید. آنجا ۳ تکه کاغذ انداخت!' }
      ]
    },
    action: {
      type: 'chase',
      at: [23, 9],
      hops: [[25, 6], [19, 8]],
      name: { en: 'The Runaway Kite', es: 'La cometa fugitiva', fa: 'گدی‌پران فراری' },
      taunt: { en: 'Whoosh! The wind spins the kite: "Find each piece where it belongs!"', es: '¡Fiuuu! El viento hace girar la cometa: "¡Busca cada pedazo donde va!"', fa: 'ووش! باد گدی‌پران را می‌چرخاند: «هر تکه را جای درستش پیدا کن!»' },
      clues: [
        { t: { en: 'Piece 1 is about [[social security|Social Security]]. Look where retired people teach free classes.', es: 'El pedazo 1 trata del [[social security|Seguro Social]]. Busca donde los jubilados dan clases gratis.', fa: 'تکهٔ ۱ دربارهٔ [[social security|تأمین اجتماعی]] است. جایی را ببین که متقاعدان صنف رایگان دارند.' },
          zones: [{ x: 2, y: 3, w: 5, h: 2 }],
          noBy: [{ x: 9, y: 3, w: 3, h: 2, t: { en: 'This is the bank, a business. Social Security is a government program for retired workers.', es: 'Este es el banco, un negocio. El Seguro Social es un programa del gobierno.', fa: 'این بانک است، یک کسب و کار. تأمین اجتماعی برنامهٔ حکومت برای کارگران متقاعد است.' } }],
          found: { en: 'Piece 1, by the community center! Workers pay into Social Security.', es: '¡El pedazo 1, junto al centro comunitario! Los trabajadores aportan al Seguro Social.', fa: 'تکهٔ ۱، کنار مرکز محله! کارگران در تأمین اجتماعی پول می‌دهند.' } },
        { t: { en: 'Piece 2 is about a [[401k|401(k)]], a plan you get from a job. Look where Priya works.', es: 'El pedazo 2 trata de un [[401k|401(k)]], un plan que te da un trabajo. Busca donde trabaja Priya.', fa: 'تکهٔ ۲ دربارهٔ [[401k|401(k)]] است، برنامه‌ای که از وظیفه می‌گیری. جایی را ببین که پریا کار می‌کند.' },
          zones: [{ x: 17, y: 3, w: 3, h: 2 }],
          noBy: [{ x: 9, y: 3, w: 3, h: 2, t: { en: 'At a bank, you open an IRA yourself. A 401(k) comes from your job.', es: 'En un banco, abres una IRA tú mismo. Un 401(k) viene de tu trabajo.', fa: 'در بانک، IRA را خودت باز می‌کنی. 401(k) از وظیفه‌ات می‌آید.' } }],
          found: { en: 'Piece 2, by the café! Save from each paycheck. Take the match!', es: '¡El pedazo 2, junto al café! Ahorra de cada cheque. ¡Toma el aporte!', fa: 'تکهٔ ۲، کنار کافه! از هر معاش پس‌انداز کن. پول همسان را بگیر!' } },
        { t: { en: 'Piece 3 is about an [[ira|IRA]], an account you open yourself. Look where people open accounts.', es: 'El pedazo 3 trata de una [[ira|IRA]], una cuenta que abres tú. Busca donde la gente abre cuentas.', fa: 'تکهٔ ۳ دربارهٔ [[ira|IRA]] است، حسابی که خودت باز می‌کنی. جایی را ببین که مردم حساب باز می‌کنند.' },
          zones: [{ x: 9, y: 3, w: 3, h: 2 }],
          noBy: [{ x: 17, y: 3, w: 3, h: 2, t: { en: 'The café gives a 401(k) through the job. You open an IRA yourself, at a bank.', es: 'El café da un 401(k) por el trabajo. Una IRA la abres tú, en un banco.', fa: 'کافه از راه وظیفه 401(k) می‌دهد. IRA را خودت در بانک باز می‌کنی.' } }],
          found: { en: 'Piece 3, by the bank! A teen with a job can have a Roth IRA.', es: '¡El pedazo 3, junto al banco! Un joven con trabajo puede tener una Roth IRA.', fa: 'تکهٔ ۳، کنار بانک! نوجوانی با وظیفه می‌تواند Roth IRA داشته باشد.' } }
      ],
      win: { en: 'Got it! The wind lets go. The kite lands softly in the grass.', es: '¡Atrapada! El viento la suelta. La cometa cae suave en el pasto.', fa: 'گرفتمش! باد رهایش می‌کند. گدی‌پران آرام روی سبزه می‌افتد.' },
      item: { icon: '🪁', name: { en: 'Nia\'s poster kite', es: 'La cometa-cartel de Nia', fa: 'گدی‌پران پوستری نیا' } }
    }
  },

  scraps: [[28, 1], [1, 20], [30, 15]],
  smudges: [[12, 8], [20, 18]],

  challenge: {
    at: [21, 17],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the "when to start" lever by the young trees in the south-west park, the match lever by the café,
    // the account lever by the bank
    spots: [[9, 19], [22, 4], [13, 4]],
    stat: 'hei',
    title: { en: 'Kai\'s first paycheck', es: 'El primer sueldo de Kai', fa: 'اولین معاش کای' },
    intro: { en: 'Kai is 18 and just got a job. Set the 3 levers for a strong plan.',
      es: 'Kai tiene 18 años y acaba de conseguir trabajo. Pon las 3 palancas para un buen plan.',
      fa: 'کای ۱۸ ساله است و تازه وظیفه گرفته. ۳ دسته را برای یک برنامهٔ قوی تنظیم کن.' },
    switches: [
      { name: { en: 'When to start saving', es: 'Cuándo empezar a ahorrar', fa: 'چه وقت پس‌انداز را شروع کند' }, icon: '⏳', start: 0,
        states: [{ en: 'At age 40', es: 'A los 40 años', fa: 'در ۴۰ سالگی' }, { en: 'Now, at 18', es: 'Ahora, a los 18', fa: 'حالا، در ۱۸ سالگی' }] },
      { name: { en: 'The 401(k) match at work', es: 'El aporte del 401(k) en el trabajo', fa: 'پول همسان 401(k) در کار' }, icon: '🎁', start: 0,
        states: [{ en: 'Skip the match', es: 'No tomar el aporte', fa: 'پول همسان را نگیرد' }, { en: 'Take the match', es: 'Tomar el aporte', fa: 'پول همسان را بگیرد' }] },
      { name: { en: 'Account for extra savings', es: 'Cuenta para ahorros extra', fa: 'حساب برای پس‌انداز اضافی' }, icon: '🏦', start: 0,
        states: [{ en: 'No account', es: 'Sin cuenta', fa: 'بدون حساب' }, { en: 'Roth IRA', es: 'Roth IRA', fa: 'Roth IRA' }] }
    ],
    results: {
      '1,1,1': { ok: true, t: { en: 'A strong plan! Kai starts now, takes free match money, and grows savings tax-free.', es: '¡Un buen plan! Kai empieza ya, toma el aporte gratis y crece sin impuestos.', fa: 'یک برنامهٔ قوی! کای حالا شروع می‌کند، پول همسان را می‌گیرد و بدون مالیات رشد می‌کند.' },
        show: [{ icon: '⏳', ok: true, t: { en: 'many years to grow', es: 'muchos años para crecer', fa: 'سال‌های زیاد برای رشد' } }, { icon: '🎁', ok: true, t: { en: 'free match money', es: 'aporte gratis', fa: 'پول همسان مفت' } }, { icon: '🌱', ok: true, t: { en: 'tax-free later', es: 'sin impuestos después', fa: 'بعداً بدون مالیات' } }] },
      '0,0,0': { ok: false, t: { en: 'Kai waits, skips the match and has no account. His money gets little time and no help.', es: 'Kai espera, no toma el aporte y no tiene cuenta. Su dinero tiene poco tiempo y nada de ayuda.', fa: 'کای صبر می‌کند، پول همسان را نمی‌گیرد و حساب ندارد. پولش وقت کم و کمکی ندارد.' },
        show: [{ icon: '⏳', ok: false, t: { en: '22 years lost', es: '22 años perdidos', fa: '۲۲ سال از دست رفته' } }, { icon: '🎁', ok: false, t: { en: 'free money left behind', es: 'dinero gratis perdido', fa: 'پول مفت جا ماند' } }, { icon: '🌱', ok: false, t: { en: 'no tax-free growth', es: 'sin crecer libre de impuestos', fa: 'بدون رشد بی‌مالیات' } }] },
      '0,1,1': { ok: false, t: { en: 'The match and the Roth IRA are good. But waiting until 40 loses 22 years of growth.', es: 'El aporte y la Roth IRA están bien. Pero esperar a los 40 pierde 22 años de crecimiento.', fa: 'پول همسان و Roth IRA خوب هستند. اما صبر تا ۴۰ سالگی ۲۲ سال رشد را از بین می‌برد.' },
        show: [{ icon: '⏳', ok: false, t: { en: '22 years lost', es: '22 años perdidos', fa: '۲۲ سال از دست رفته' } }, { icon: '🎁', ok: true, t: { en: 'free match money', es: 'aporte gratis', fa: 'پول همسان مفت' } }, { icon: '🌱', ok: true, t: { en: 'tax-free later', es: 'sin impuestos después', fa: 'بعداً بدون مالیات' } }] },
      '1,0,1': { ok: false, t: { en: 'Starting now and the Roth IRA are good. But skipping the match turns down free money.', es: 'Empezar ya y la Roth IRA están bien. Pero no tomar el aporte rechaza dinero gratis.', fa: 'حالا شروع کردن و Roth IRA خوب هستند. اما نگرفتن پول همسان پول مفت را رد می‌کند.' },
        show: [{ icon: '⏳', ok: true, t: { en: 'many years to grow', es: 'muchos años para crecer', fa: 'سال‌های زیاد برای رشد' } }, { icon: '🎁', ok: false, t: { en: 'free money left behind', es: 'dinero gratis perdido', fa: 'پول مفت جا ماند' } }, { icon: '🌱', ok: true, t: { en: 'tax-free later', es: 'sin impuestos después', fa: 'بعداً بدون مالیات' } }] },
      '1,1,0': { ok: false, t: { en: 'Starting now and the match are good. But extra savings need a place to grow, like a Roth IRA.', es: 'Empezar ya y el aporte están bien. Pero el ahorro extra necesita dónde crecer, como una Roth IRA.', fa: 'حالا شروع کردن و پول همسان خوب هستند. اما پس‌انداز اضافی جایی برای رشد می‌خواهد، مثل Roth IRA.' },
        show: [{ icon: '⏳', ok: true, t: { en: 'many years to grow', es: 'muchos años para crecer', fa: 'سال‌های زیاد برای رشد' } }, { icon: '🎁', ok: true, t: { en: 'free match money', es: 'aporte gratis', fa: 'پول همسان مفت' } }, { icon: '🌱', ok: false, t: { en: 'no tax-free growth', es: 'sin crecer libre de impuestos', fa: 'بدون رشد بی‌مالیات' } }] },
      '1,0,0': { ok: false, t: { en: 'Starting now is great! But Kai skips the free match and has no account for extra savings.', es: '¡Empezar ya es genial! Pero Kai no toma el aporte gratis y no tiene cuenta para ahorro extra.', fa: 'حالا شروع کردن عالی است! اما کای پول همسان را نمی‌گیرد و حسابی برای پس‌انداز اضافی ندارد.' },
        show: [{ icon: '⏳', ok: true, t: { en: 'many years to grow', es: 'muchos años para crecer', fa: 'سال‌های زیاد برای رشد' } }, { icon: '🎁', ok: false, t: { en: 'free money left behind', es: 'dinero gratis perdido', fa: 'پول مفت جا ماند' } }, { icon: '🌱', ok: false, t: { en: 'no tax-free growth', es: 'sin crecer libre de impuestos', fa: 'بدون رشد بی‌مالیات' } }] },
      '0,1,0': { ok: false, t: { en: 'The match helps. But waiting until 40 loses 22 years, and there is no account.', es: 'El aporte ayuda. Pero esperar a los 40 pierde 22 años, y no hay cuenta.', fa: 'پول همسان کمک می‌کند. اما صبر تا ۴۰ سالگی ۲۲ سال را از بین می‌برد، و حساب نیست.' },
        show: [{ icon: '⏳', ok: false, t: { en: '22 years lost', es: '22 años perdidos', fa: '۲۲ سال از دست رفته' } }, { icon: '🎁', ok: true, t: { en: 'free match money', es: 'aporte gratis', fa: 'پول همسان مفت' } }, { icon: '🌱', ok: false, t: { en: 'no tax-free growth', es: 'sin crecer libre de impuestos', fa: 'بدون رشد بی‌مالیات' } }] },
      '0,0,1': { ok: false, t: { en: 'The Roth IRA is good. But waiting until 40 and skipping the match cost Kai a lot.', es: 'La Roth IRA está bien. Pero esperar a los 40 y no tomar el aporte le cuesta mucho a Kai.', fa: 'Roth IRA خوب است. اما صبر تا ۴۰ سالگی و نگرفتن پول همسان برای کای گران تمام می‌شود.' },
        show: [{ icon: '⏳', ok: false, t: { en: '22 years lost', es: '22 años perdidos', fa: '۲۲ سال از دست رفته' } }, { icon: '🎁', ok: false, t: { en: 'free money left behind', es: 'dinero gratis perdido', fa: 'پول مفت جا ماند' } }, { icon: '🌱', ok: true, t: { en: 'tax-free later', es: 'sin impuestos después', fa: 'بعداً بدون مالیات' } }] }
    },
    otherwise: { ok: false, t: { en: 'Not a strong plan yet. Try another setting.', es: 'Todavía no es un buen plan. Prueba otra combinación.', fa: 'هنوز برنامهٔ قوی نیست. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'Kai\'s plan is strong! Start early, take the match, and let time do the work.', es: '¡El plan de Kai es fuerte! Empieza temprano, toma el aporte y deja que el tiempo trabaje.', fa: 'برنامهٔ کای قوی است! زود شروع کن، پول همسان را بگیر، و بگذار وقت کار کند.' }
  },

  boss: {
    at: [27, 7],
    stat: 'reg',
    need: 3,
    name: { en: 'The Someday Grump', es: 'El Gruñón del Algún Día', fa: 'غرغروی یک روزی' },
    appear: { en: 'The Someday Grump is hiding in the fog by the lighthouse!', es: '¡El Gruñón del Algún Día se esconde en la niebla junto al faro!', fa: 'غرغروی یک روزی در مه کنار چراغ دریایی پنهان است!' },
    taunt: { en: 'Save for retirement? Bah! Someday. Maybe. Not today, not EVER!', es: '¿Ahorrar para la jubilación? ¡Bah! Algún día. Quizás. ¡Hoy no, NUNCA!', fa: 'پس‌انداز برای تقاعد؟ نخیر! یک روزی. شاید. امروز نه، هرگز نه!' },
    win: { en: 'The lighthouse shines through the fog. Ledger page 7.3 floats down into your hands!', es: 'El faro brilla entre la niebla. ¡La página 7.3 del libro cae en tus manos!', fa: 'چراغ دریایی از میان مه می‌درخشد. صفحهٔ ۷.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is retirement?', es: '¿Qué es la jubilación?', fa: 'تقاعد چیست؟' },
        choices: [
          { en: 'When people stop working full-time', es: 'Cuando la gente deja de trabajar a tiempo completo', fa: 'وقتی مردم کار تمام‌وقت را بس می‌کنند' },
          { en: 'When people start their first job', es: 'Cuando la gente empieza su primer trabajo', fa: 'وقتی مردم اولین وظیفهٔ خود را شروع می‌کنند' },
          { en: 'When people open a bank account', es: 'Cuando la gente abre una cuenta de banco', fa: 'وقتی مردم یک حساب بانکی باز می‌کنند' },
          { en: 'When people take a short vacation', es: 'Cuando la gente toma unas vacaciones cortas', fa: 'وقتی مردم یک رخصتی کوتاه می‌گیرند' }],
        answer: 0,
        why: { en: 'Retirement is when people stop working full-time. They still need money for many years.', es: 'La jubilación es cuando se deja de trabajar a tiempo completo. Igual se necesita dinero por años.', fa: 'تقاعد وقتی است که مردم کار تمام‌وقت را بس می‌کنند. سال‌ها باز هم پول لازم دارند.' } },
      { q: { en: 'How do workers pay into Social Security?', es: '¿Cómo aportan los trabajadores al Seguro Social?', fa: 'کارگران چطور در تأمین اجتماعی پول می‌دهند؟' },
        choices: [
          { en: 'A payroll tax on each paycheck', es: 'Un impuesto en cada cheque de pago', fa: 'مالیات معاش از هر معاش' },
          { en: 'A fee paid at the bank', es: 'Una tarifa que se paga en el banco', fa: 'یک فیس که در بانک پرداخت می‌شود' },
          { en: 'A gift they mail each year', es: 'Un regalo que envían cada año', fa: 'یک تحفه که هر سال می‌فرستند' },
          { en: 'They do not pay into it', es: 'No aportan nada', fa: 'هیچ پول نمی‌دهند' }],
        answer: 0,
        why: { en: 'Social Security is a government program. Workers pay into it through payroll taxes.', es: 'El Seguro Social es un programa del gobierno. Se paga con impuestos sobre la nómina.', fa: 'تأمین اجتماعی برنامهٔ حکومت است. کارگران با مالیات معاش در آن پول می‌دهند.' } },
      { q: { en: 'Is Social Security meant to pay for everything in retirement?', es: '¿El Seguro Social está hecho para pagar todo en la jubilación?', fa: 'آیا تأمین اجتماعی برای پرداخت همه چیز در تقاعد ساخته شده؟' },
        choices: [
          { en: 'No, savings are needed too', es: 'No, también se necesitan ahorros', fa: 'نه، پس‌انداز هم لازم است' },
          { en: 'Yes, it covers every cost', es: 'Sí, cubre todos los gastos', fa: 'بله، همهٔ مصارف را می‌پوشاند' },
          { en: 'Yes, but only for rent', es: 'Sí, pero solo para la renta', fa: 'بله، اما فقط برای کرایه' },
          { en: 'No, it pays nothing at all', es: 'No, no paga nada', fa: 'نه، هیچ چیز نمی‌پردازد' }],
        answer: 0,
        why: { en: 'Social Security helps, but it covers only part. Most people also need their own savings.', es: 'El Seguro Social ayuda, pero cubre solo una parte. Casi todos necesitan ahorros propios.', fa: 'تأمین اجتماعی کمک می‌کند، اما فقط بخشی را. بیشتر مردم پس‌انداز خود را هم لازم دارند.' } },
      { q: { en: 'What is a 401(k)?', es: '¿Qué es un 401(k)?', fa: '401(k) چیست؟' },
        choices: [
          { en: 'A retirement plan you get at work', es: 'Un plan de jubilación del trabajo', fa: 'یک برنامهٔ تقاعد از وظیفه' },
          { en: 'A loan you get to buy a car', es: 'Un préstamo para comprar un carro', fa: 'یک قرض برای خریدن موتر' },
          { en: 'A government check for students', es: 'Un cheque del gobierno para estudiantes', fa: 'یک چک حکومت برای شاگردان' },
          { en: 'A card you use at the store', es: 'Una tarjeta que usas en la tienda', fa: 'یک کارت که در دکان کار می‌گیری' }],
        answer: 0,
        why: { en: 'A 401(k) is a plan from your job. You save from each paycheck, before taxes.', es: 'Un 401(k) es un plan de tu trabajo. Ahorras de cada cheque, antes de impuestos.', fa: '401(k) برنامه‌ای از وظیفهٔ توست. از هر معاش، پیش از مالیات، پس‌انداز می‌کنی.' } },
      { q: { en: 'Your boss adds 50 cents for every dollar you save. You save $60. What does your boss add?', es: 'Tu jefe pone 50 centavos por cada dólar que ahorras. Ahorras $60. ¿Cuánto pone?', fa: 'کارفرما برای هر دالری که پس‌انداز می‌کنی ۵۰ سنت می‌گذارد. تو ۶۰ دالر پس‌انداز می‌کنی. او چقدر می‌گذارد؟' },
        choices: [
          { en: '$30', es: '$30', fa: '۳۰ دالر' },
          { en: '$60', es: '$60', fa: '۶۰ دالر' },
          { en: '$50', es: '$50', fa: '۵۰ دالر' },
          { en: '$10', es: '$10', fa: '۱۰ دالر' }],
        answer: 0,
        why: { en: '50 cents per dollar is half. Half of $60 is $30. That match is free money!', es: '50 centavos por dólar es la mitad. La mitad de $60 es $30. ¡Es dinero gratis!', fa: '۵۰ سنت برای هر دالر یعنی نصف. نصف ۶۰ دالر ۳۰ دالر است. پول مفت است!' } },
      { q: { en: 'With a Roth IRA, when do you pay the tax?', es: 'Con una Roth IRA, ¿cuándo pagas el impuesto?', fa: 'با Roth IRA، چه وقت مالیات می‌دهی؟' },
        choices: [
          { en: 'Now, then it comes out tax-free', es: 'Ahora, y luego sale sin impuestos', fa: 'حالا، بعد بدون مالیات بیرون می‌آید' },
          { en: 'Later, when you take it out', es: 'Después, cuando lo sacas', fa: 'بعداً، وقتی بیرون می‌کشی' },
          { en: 'Twice, now and again later', es: 'Dos veces, ahora y después', fa: 'دو بار، حالا و بعداً' },
          { en: 'Every time it grows a dollar', es: 'Cada vez que crece un dólar', fa: 'هر بار که یک دالر رشد می‌کند' }],
        answer: 0,
        why: { en: 'With a Roth IRA you pay tax now. In retirement, you take it out tax-free.', es: 'Con una Roth IRA pagas impuestos ahora. En la jubilación, lo sacas sin impuestos.', fa: 'با Roth IRA حالا مالیات می‌دهی. در تقاعد، بدون مالیات بیرون می‌کشی.' } },
      { q: { en: 'Who can have a Roth IRA?', es: '¿Quién puede tener una Roth IRA?', fa: 'کی می‌تواند Roth IRA داشته باشد؟' },
        choices: [
          { en: 'Anyone with earned income, even a teen', es: 'Quien tenga ingreso del trabajo, hasta un joven', fa: 'هر کس که عاید کار دارد، حتی نوجوان' },
          { en: 'Only people who are already retired', es: 'Solo la gente que ya está jubilada', fa: 'فقط کسانی که قبلاً متقاعد شده‌اند' },
          { en: 'Only people who own a business', es: 'Solo la gente que tiene un negocio', fa: 'فقط کسانی که کسب و کار دارند' },
          { en: 'Only people over the age of 40', es: 'Solo la gente mayor de 40 años', fa: 'فقط کسانی که بالای ۴۰ سال دارند' }],
        answer: 0,
        why: { en: 'You need earned income, like pay from a job. A teen can have one, with an adult\'s help.', es: 'Necesitas ingreso del trabajo, como un sueldo. Un joven puede tener una, con ayuda de un adulto.', fa: 'عاید کار لازم است، مثل معاش. نوجوان هم با کمک یک بزرگسال می‌تواند داشته باشد.' } },
      { q: { en: 'Jada saved from 18 to 28. Ben saved from 28 to 65. Why can Jada end with about as much?', es: 'Jada ahorró de 18 a 28. Ben ahorró de 28 a 65. ¿Por qué Jada puede terminar con casi lo mismo?', fa: 'جادا از ۱۸ تا ۲۸ پس‌انداز کرد. بن از ۲۸ تا ۶۵. چرا جادا تقریباً همان‌قدر دارد؟' },
        choices: [
          { en: 'Her money had more years to grow', es: 'Su dinero tuvo más años para crecer', fa: 'پولش سال‌های بیشتر برای رشد داشت' },
          { en: 'She put in more money than Ben', es: 'Ella puso más dinero que Ben', fa: 'او بیشتر از بن پول گذاشت' },
          { en: 'Her bank gave her a big prize', es: 'Su banco le dio un gran premio', fa: 'بانکش یک جایزهٔ کلان به او داد' },
          { en: 'Ben lost his savings in a storm', es: 'Ben perdió sus ahorros en una tormenta', fa: 'بن پس‌اندازش را در طوفان از دست داد' }],
        answer: 0,
        why: { en: 'Jada put in only $12,000, but it grew longer. In this example, time made the big difference.', es: 'Jada puso solo $12,000, pero creció más tiempo. En este ejemplo, el tiempo hizo la diferencia.', fa: 'جادا فقط ۱۲٬۰۰۰ دالر گذاشت، اما وقت بیشتر رشد کرد. در این مثال، وقت فرق بزرگ را ساخت.' } }
    ]
  },

  learned: [
    { en: '[[retirement|Retirement]] can last many years. [[social security|Social Security]] helps, but it is not everything.', es: 'La [[retirement|jubilación]] puede durar muchos años. El [[social security|Seguro Social]] ayuda, pero no es todo.', fa: '[[retirement|تقاعد]] می‌تواند سال‌ها طول بکشد. [[social security|تأمین اجتماعی]] کمک می‌کند، اما همه چیز نیست.' },
    { en: 'A [[401k|401(k)]] comes from your job. Always take the free [[employer match|match]].', es: 'Un [[401k|401(k)]] viene de tu trabajo. Siempre toma el [[employer match|aporte]] gratis.', fa: '[[401k|401(k)]] از وظیفه‌ات می‌آید. همیشه [[employer match|پول همسان]] مفت را بگیر.' },
    { en: 'Start early. A teen with a job can open a [[roth ira|Roth IRA]].', es: 'Empieza temprano. Un joven con trabajo puede abrir una [[roth ira|Roth IRA]].', fa: 'زود شروع کن. نوجوانی با وظیفه می‌تواند [[roth ira|Roth IRA]] باز کند.' }
  ],
  reflect: {
    q: { en: 'Picture yourself at 65. What do you hope to do, and how could saving early help?', es: 'Imagínate a los 65. ¿Qué esperas hacer y cómo te ayudaría ahorrar temprano?', fa: 'خودت را در ۶۵ سالگی تصور کن. امید داری چه کنی، و پس‌انداز زود چطور کمک می‌کند؟' },
    starter: { en: 'At 65, I hope to', es: 'A los 65, espero', fa: 'در ۶۵ سالگی، امید دارم' }
  }
};
