/* COINWALKER · Episode 3.3 · Net Worth and Assets
   Budget Bay, a made-up seaside town, on yard-sale Saturday.
   North-west: Leo's rented house and Mrs. Chen's house, with yard-sale tables (m) on the lawn.
   North-east: a fenced car lot (F around paving l) with a small office. Row 11 is the main street.
   South-west: the community college (J) and the park with a pond and flowers.
   South-east: the bank (J, with a door), two houses, and the bay (~) with a wooden dock (k).
   People teach assets, liabilities, net worth, liquid vs not liquid, and things that lose or gain value.
   The ledger stone is a survey: 5 posts each give one row of Leo's list; the student adds it up at the stone.
   Leo, 24: assets 500 + 2,000 + 6,000 = 8,500; liabilities 4,000 + 3,000 = 7,000; net worth 8,500 - 7,000 = 1,500.
   Kofi (quest), 21: savings 1,000, student loan 3,000, net worth -2,000. */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'EPF',
  title: { en: 'Net Worth and Assets', es: 'Patrimonio neto y activos', fa: 'ارزش خالص و دارایی‌ها' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Budget Bay yard sale day', es: 'Día de ventas de garaje en Budget Bay', fa: 'روز فروش حویلی در خلیج بودجه' },
  intro: [
    { en: 'The Grump tore the page about net worth. People forget what they own and owe.',
      es: 'El Gruñón rompió la página del patrimonio neto. La gente olvida lo que tiene y lo que debe.',
      fa: 'غرغرو صفحهٔ ارزش خالص را پاره کرد. مردم فراموش می‌کنند چه دارند و چه قرض دارند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town on the Virginia coast (no timeline in this game) */
  scenes: {
    at: [-76.0, 36.85],
    start: [
      { en: 'Budget Bay is a made-up town by the sea.',
        es: 'Budget Bay es un pueblo inventado junto al mar.',
        fa: 'خلیج بودجه یک شهرک خیالی کنار بحر است.' },
      { en: 'Today is yard sale day. People sell old things on their lawns.',
        es: 'Hoy es día de ventas de garaje. La gente vende cosas viejas en su jardín.',
        fa: 'امروز روز فروش حویلی است. مردم چیزهای کهنه را در سبزه‌زار خانه می‌فروشند.' },
      { en: 'Leo is 24. He wants to know his net worth.',
        es: 'Leo tiene 24 años. Quiere saber su patrimonio neto.',
        fa: 'لیو ۲۴ ساله است. می‌خواهد ارزش خالص خود را بداند.' }
    ],
    page: { en: 'Net worth is like a photo. It shows your money on one day.',
      es: 'El patrimonio neto es como una foto. Muestra tu dinero en un solo día.',
      fa: 'ارزش خالص مثل یک عکس است. پول تو را در یک روز نشان می‌دهد.' },
    guess: {
      q: { en: 'Can a person\'s net worth be below zero?', es: '¿El patrimonio neto de una persona puede ser menor que cero?', fa: 'آیا ارزش خالص یک نفر می‌تواند کمتر از صفر باشد؟' },
      choices: [
        { t: { en: '✅ Yes, it can', es: '✅ Sí, puede', fa: '✅ بله، می‌تواند' }, ok: true },
        { t: { en: '🚫 No, never', es: '🚫 No, nunca', fa: '🚫 نه، هرگز' } }
      ],
      why: { en: 'Yes. If you owe more than you own, it is below zero. That is common at first.', es: 'Sí. Si debes más de lo que tienes, es menor que cero. Es común al principio.', fa: 'بله. اگر بیشتر از داشته‌هایت قرض داشته باشی، کمتر از صفر است. در اول کار عادی است.' }
    },
    next: {
      q: { en: 'Next: your first paycheck! Why is it less than your hourly pay times your hours?', es: 'Ahora: ¡tu primer cheque de pago! ¿Por qué es menos que tu pago por hora por tus horas?', fa: 'بعدی: اولین معاش تو! چرا از مزد یک ساعت ضرب ساعت‌های کارت کمتر است؟' },
      choices: [
        { t: { en: '💸 Taxes come out first', es: '💸 Primero se quitan los impuestos', fa: '💸 اول مالیات کم می‌شود' }, ok: true },
        { t: { en: '🎁 The boss keeps a gift', es: '🎁 El jefe se queda un regalo', fa: '🎁 رئیس یک تحفه برمی‌دارد' } }
      ],
      why: { en: 'Taxes and other costs are taken out of your pay. What is left is your take-home pay.', es: 'Los impuestos y otros costos se quitan de tu pago. Lo que queda es tu pago neto.', fa: 'مالیات و هزینه‌های دیگر از معاش تو کم می‌شود. آنچه می‌ماند معاش دست تو است.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      look: { skin: 3, hair: '#1a1008', shirt: '#6a4ac0', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am Leo\'s roommate. We rent this house and split the rent.', es: 'Soy la compañera de casa de Leo. Rentamos esta casa y dividimos la renta.', fa: 'من هم‌خانهٔ لیو هستم. این خانه را کرایه کرده‌ایم و کرایه را تقسیم می‌کنیم.' },
        { en: 'We do not own this house. So it is not our [[asset|asset]].', es: 'No somos dueños de esta casa. Así que no es nuestro [[asset|activo]].', fa: 'ما مالک این خانه نیستیم. پس [[asset|دارایی]] ما نیست.' },
        { en: 'Rent is money we spend each month. It is gone after we pay.', es: 'La renta es dinero que gastamos cada mes. Se va cuando pagamos.', fa: 'کرایه پولی است که هر ماه خرج می‌کنیم. بعد از پرداخت از دست می‌رود.' }
      ] },
    { at: [10, 2], name: { en: 'Mrs. Chen', es: 'Sra. Chen', fa: 'خانم چن' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#2f8a6a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'I paid off my house loan many years ago.', es: 'Terminé de pagar el préstamo de mi casa hace muchos años.', fa: 'قرض خانه‌ام را سال‌ها پیش پوره پرداختم.' },
        { en: 'Now my whole house is an [[asset|asset]], with no debt on it.', es: 'Ahora toda mi casa es un [[asset|activo]], sin deuda.', fa: 'حالا تمام خانه‌ام یک [[asset|دارایی]] است، بدون قرض.' },
        { en: 'But a house is not [[liquid|liquid]]. It takes a long time to sell.', es: 'Pero una casa no es [[liquid|líquida]]. Se tarda mucho en venderla.', fa: 'اما خانه [[liquid|نقد]] نیست. فروختن آن وقت زیاد می‌گیرد.' }
      ] },
    { at: [19, 14], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#f0f0e8', pants: '#2a2a4a', style: 'short' },
      lines: [
        { en: 'I help people get loans at this bank.', es: 'Ayudo a la gente a conseguir préstamos en este banco.', fa: 'من در این بانک به مردم در گرفتن قرض کمک می‌کنم.' },
        { en: 'A loan is money you borrow. You must pay it back.', es: 'Un préstamo es dinero que pides. Tienes que devolverlo.', fa: 'قرض پولی است که می‌گیری. باید آن را پس بدهی.' },
        { en: 'To you, a loan is a [[liability|liability]]: a [[debt|debt]] you owe.', es: 'Para ti, un préstamo es un [[liability|pasivo]]: una [[debt|deuda]] que debes.', fa: 'برای تو، قرض یک [[liability|بدهی]] است: [[debt|قرضی]] که باید بپردازی.' }
      ] },
    { at: [25, 14], name: { en: 'Mr. Bello', es: 'Sr. Bello', fa: 'آقای بلو' },
      look: { skin: 4, hair: '#3a3a3a', shirt: '#c0702a', pants: '#3a3a2a', hat: '#4a6a8a', style: 'short' },
      lines: [
        { en: 'I am selling my old lawn mower for $50.', es: 'Vendo mi cortadora de césped vieja por $50.', fa: 'ماشین چمن‌زنی کهنه‌ام را به ۵۰ دالر می‌فروشم.' },
        { en: 'I paid $300 for it. That was years ago.', es: 'Pagué $300 por ella. Eso fue hace años.', fa: 'برای آن ۳۰۰ دالر دادم. سال‌ها پیش بود.' },
        { en: 'Most things you use lose value over time. They [[depreciate|depreciate]].', es: 'Casi todo lo que usas pierde valor con el tiempo. Se [[depreciate|deprecia]].', fa: 'بیشتر چیزهایی که کار می‌گیری با وقت ارزش خود را از دست می‌دهند. [[depreciate|کم‌ارزش]] می‌شوند.' }
      ] },
    { at: [19, 17], name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      look: { skin: 5, hair: '#120c08', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'bun' },
      lines: [
        { en: 'I am a nurse. I owe $300 on my [[credit card|credit card]].', es: 'Soy enfermera. Debo $300 en mi [[credit card|tarjeta de crédito]].', fa: 'من نرس هستم. ۳۰۰ دالر روی [[credit card|کارت قرضه‌ام]] قرض دارم.' },
        { en: 'That balance is a [[liability|liability]]. I must pay it back.', es: 'Ese saldo es un [[liability|pasivo]]. Tengo que pagarlo.', fa: 'آن مقدار یک [[liability|بدهی]] است. باید آن را بپردازم.' },
        { en: 'I pay $100 each month. In 3 months, I will owe $0.', es: 'Pago $100 cada mes. En 3 meses, no deberé nada.', fa: 'هر ماه ۱۰۰ دالر می‌پردازم. در ۳ ماه، هیچ قرض نخواهم داشت.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (y 0-10): Leo's rented house (R) and Mrs. Chen's house (Q), yard-sale tables (m) on the lawn.
     North-east: the car lot, a fence (F) around paving (l), a small office (R over h), the gate on the south side.
     Row 11: the main street (l), east to the bay.
     South-west: the community college (J) and the park: a pond (~), flowers (,) and trees.
     South-east: the bank (J, door at 19,14), Mr. Bello's house, Amara's house, the bay (~) and a wooden dock (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR....QQQ...T..FFFFFFFFFFFF.T',
    'T.hdh....hdh......FllllllRRRlF.T',
    'T.................FllllllhhhlF.T',
    'T....mm....mm.....FllllllllllF.T',
    'T.x...............FllllllllllF.T',
    'T....mm...........FllllllllllF.T',
    'T..T........T.....FllllllllllF.T',
    'T.................FFFFllllFFFF.T',
    'T.....,,....T..............x...T',
    'T..............................T',
    'Tllllllllllllllllllllllllllllll~',
    'T............................~~~',
    'T.JJJJJ..T..T....JJJJJJ.RRR..~~~',
    'T.JJJJJ...........JJdJJJ.hdh..~~~'.slice(0, 16) + '.JJdJJJ.hdh..~~~',
    'T......,,,,,.................~~~',
    'T.x....~~~........RRR........~~~',
    'T.....,~~~,.......hdh........~~~',
    'T.....,~~~,..T............~~~~~~',
    'T..T...,,,................kkk~~~',
    'T...........T.............~~~~~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~'
  ],
  start: [8, 8],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 4], at: [13, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, past the yard-sale tables.', es: 'Desde esta nota, camina 4 pasos al sur, pasando las mesas de la venta.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از کنار میزهای فروش.' },
      text: { en: 'An old coin in the grass! Cash is the most liquid asset. You can spend it right away.', es: '¡Una moneda vieja en el pasto! El efectivo es el activo más líquido. Lo puedes gastar enseguida.', fa: 'یک سکهٔ کهنه در سبزه! پول نقد نقدترین دارایی است. فوراً خرجش کرده می‌توانی.' } },
    { clueAt: [16, 19], at: [20, 19], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the bay.', es: 'Desde esta nota, camina 4 pasos al este, hacia la bahía.', fa: 'از این یادداشت، ۴ قدم به شرق برو، به طرف خلیج.' },
      text: { en: 'A pretty shell! Some things gain value over time. Most used things lose value.', es: '¡Una concha bonita! Algunas cosas ganan valor con el tiempo. Casi todo lo usado pierde valor.', fa: 'یک صدف قشنگ! بعضی چیزها با وقت ارزش پیدا می‌کنند. بیشتر چیزهای کهنه ارزش از دست می‌دهند.' } }
  ],

  words: {
    asset: { en: 'something you own that has money value, like cash, savings or a car', es: 'algo que tienes y que vale dinero, como efectivo, ahorros o un carro', fa: 'چیزی که داری و ارزش پولی دارد، مثل پول نقد، پس‌انداز یا موتر' },
    liability: { en: 'a debt you owe, like a car loan or a student loan', es: 'una deuda que debes, como un préstamo de carro o de estudios', fa: 'قرضی که باید بپردازی، مثل قرض موتر یا قرض تحصیلی' },
    'net worth': { en: 'what you own minus what you owe (assets minus liabilities)', es: 'lo que tienes menos lo que debes (activos menos pasivos)', fa: 'آنچه داری منهای آنچه قرض داری (دارایی منهای بدهی)' },
    debt: { en: 'money you borrowed and must pay back', es: 'dinero que pediste prestado y debes devolver', fa: 'پولی که قرض گرفتی و باید پس بدهی' },
    liquid: { en: 'easy to use as money right away, like cash', es: 'fácil de usar como dinero enseguida, como el efectivo', fa: 'آسان برای خرج کردن فوری، مثل پول نقد' },
    depreciate: { en: 'to lose value over time, like an old car', es: 'perder valor con el tiempo, como un carro viejo', fa: 'با گذشت وقت ارزش از دست دادن، مثل یک موتر کهنه' },
    interest: { en: 'extra money a bank pays you for saving (or you pay for a loan)', es: 'dinero extra que el banco te paga por ahorrar (o que pagas por un préstamo)', fa: 'پول اضافی که بانک برای پس‌انداز به تو می‌دهد (یا تو برای قرض می‌پردازی)' },
    'student loan': { en: 'money borrowed to pay for college or job training', es: 'dinero prestado para pagar la universidad o un curso de trabajo', fa: 'پولی که برای پوهنتون یا آموزش کار قرض گرفته می‌شود' },
    'credit card': { en: 'a card to buy now and pay the bank back later', es: 'una tarjeta para comprar ahora y pagarle al banco después', fa: 'کارتی برای خرید حالا و پرداخت پول به بانک بعداً' }
  },

  npcs: [
    {
      x: 8, y: 5,
      name: { en: 'Leo', es: 'Leo', fa: 'لیو' },
      role: { en: 'Delivery driver, age 24', es: 'Repartidor, 24 años', fa: 'راننده، ۲۴ ساله' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f6f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Hi! I am Leo. Today I am making a list of my money.', es: '¡Hola! Soy Leo. Hoy hago una lista de mi dinero.', fa: 'سلام! من لیو هستم. امروز فهرست پولم را می‌سازم.' },
        { en: 'Things I own with money value are [[asset|assets]]: cash, savings, my car.', es: 'Lo que tengo y vale dinero son [[asset|activos]]: efectivo, ahorros, mi carro.', fa: 'چیزهایی که دارم و ارزش پولی دارند [[asset|دارایی]] هستند: پول نقد، پس‌انداز، موترم.' },
        { en: 'Debts I owe are [[liability|liabilities]]: my car loan and my student loan.', es: 'Las deudas que debo son [[liability|pasivos]]: el préstamo del carro y el de estudios.', fa: 'قرض‌هایی که دارم [[liability|بدهی]] هستند: قرض موتر و قرض تحصیلی‌ام.' },
        { en: 'Assets minus liabilities is my [[net worth|net worth]].', es: 'Activos menos pasivos es mi [[net worth|patrimonio neto]].', fa: 'دارایی منهای بدهی [[net worth|ارزش خالص]] من است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which of these is one of Leo\'s assets?', es: '¿Cuál de estos es uno de los activos de Leo?', fa: 'کدام یکی از اینها دارایی لیو است؟' },
        choices: [
          { ok: true, t: { en: 'His savings account', es: 'Su cuenta de ahorros', fa: 'حساب پس‌انداز او' },
            why: { en: 'Yes! Leo owns his savings, and it has money value. It is an asset.', es: '¡Sí! Leo es dueño de sus ahorros y valen dinero. Son un activo.', fa: 'بله! پس‌انداز مال لیو است و ارزش پولی دارد. دارایی است.' } },
          { t: { en: 'His car loan', es: 'Su préstamo del carro', fa: 'قرض موتر او' },
            why: { en: 'No. Leo owes the car loan. A debt you owe is a liability.', es: 'No. Leo debe el préstamo del carro. Una deuda que debes es un pasivo.', fa: 'نه. لیو قرض موتر را باید بپردازد. قرضی که داری بدهی است.' } },
          { t: { en: 'The rent he pays', es: 'La renta que paga', fa: 'کرایه‌ای که می‌دهد' },
            why: { en: 'No. Rent is money spent. Leo does not own the house he rents.', es: 'No. La renta es dinero gastado. Leo no es dueño de la casa que renta.', fa: 'نه. کرایه پول خرج شده است. لیو مالک خانهٔ کرایی نیست.' } }
        ]
      }
    },
    {
      x: 21, y: 5,
      name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      role: { en: 'Car lot worker', es: 'Trabajador del lote de carros', fa: 'کارمند نمایشگاه موتر' },
      look: { skin: 0, hair: '#b06a2a', shirt: '#c04a3a', pants: '#3a3a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to the car lot! A car is an [[asset|asset]], but a tricky one.', es: '¡Bienvenido al lote de carros! Un carro es un [[asset|activo]], pero engañoso.', fa: 'به نمایشگاه موتر خوش آمدی! موتر یک [[asset|دارایی]] است، اما فریبنده.' },
        { en: 'A new car loses value every year. It [[depreciate|depreciates]].', es: 'Un carro nuevo pierde valor cada año. Se [[depreciate|deprecia]].', fa: 'یک موتر نو هر سال ارزش از دست می‌دهد. [[depreciate|کم‌ارزش]] می‌شود.' },
        { en: 'Many people borrow to buy a car. That car loan is a [[liability|liability]].', es: 'Mucha gente pide prestado para comprar un carro. Ese préstamo es un [[liability|pasivo]].', fa: 'مردم زیاد برای خرید موتر قرض می‌گیرند. آن قرض موتر یک [[liability|بدهی]] است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Leo\'s car is worth $6,000 today. What will it likely be worth next year?', es: 'El carro de Leo vale $6,000 hoy. ¿Cuánto valdrá probablemente el próximo año?', fa: 'موتر لیو امروز ۶٬۰۰۰ دالر ارزش دارد. سال آینده احتمالاً چقدر ارزش دارد؟' },
        choices: [
          { ok: true, t: { en: 'Less than $6,000', es: 'Menos de $6,000', fa: 'کمتر از ۶٬۰۰۰ دالر' },
            why: { en: 'Yes! Cars depreciate. Each year of use, a car is worth less.', es: '¡Sí! Los carros se deprecian. Con cada año de uso, valen menos.', fa: 'بله! موتر کم‌ارزش می‌شود. با هر سال کار، ارزشش کمتر می‌شود.' } },
          { t: { en: 'More than $6,000', es: 'Más de $6,000', fa: 'بیشتر از ۶٬۰۰۰ دالر' },
            why: { en: 'No. Most cars lose value as they get older and more used.', es: 'No. Casi todos los carros pierden valor al ponerse viejos y usados.', fa: 'نه. بیشتر موترها هر چه کهنه‌تر شوند ارزش از دست می‌دهند.' } },
          { t: { en: 'Exactly $6,000', es: 'Exactamente $6,000', fa: 'درست ۶٬۰۰۰ دالر' },
            why: { en: 'No. A car does not keep its value. It depreciates over time.', es: 'No. Un carro no mantiene su valor. Se deprecia con el tiempo.', fa: 'نه. موتر ارزش خود را نگه نمی‌دارد. با وقت کم‌ارزش می‌شود.' } }
        ]
      }
    },
    {
      x: 23, y: 15,
      name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      role: { en: 'Bank teller', es: 'Cajera del banco', fa: 'تحویل‌دار بانک' },
      look: { skin: 2, hair: '#1a1008', shirt: '#3a5a9a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'Leo keeps $2,000 in a savings account here.', es: 'Leo guarda $2,000 en una cuenta de ahorros aquí.', fa: 'لیو ۲٬۰۰۰ دالر را در یک حساب پس‌انداز اینجا نگه می‌دارد.' },
        { en: 'The bank pays him a little [[interest|interest]]. So his savings grow.', es: 'El banco le paga un poco de [[interest|interés]]. Así crecen sus ahorros.', fa: 'بانک به او کمی [[interest|سود]] می‌دهد. پس پس‌اندازش بیشتر می‌شود.' },
        { en: 'Savings are [[liquid|liquid]]. He can take the money out fast.', es: 'Los ahorros son [[liquid|líquidos]]. Puede sacar el dinero rápido.', fa: 'پس‌انداز [[liquid|نقد]] است. او می‌تواند پول را زود بیرون بکشد.' },
        { en: 'A house is not liquid. Selling it can take months.', es: 'Una casa no es líquida. Venderla puede tardar meses.', fa: 'خانه نقد نیست. فروختن آن ممکن است ماه‌ها وقت بگیرد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Leo leaves his savings in the bank, earning interest. What happens over time?', es: 'Leo deja sus ahorros en el banco, ganando interés. ¿Qué pasa con el tiempo?', fa: 'لیو پس‌اندازش را در بانک می‌ماند و سود می‌گیرد. با وقت چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'His savings slowly grow', es: 'Sus ahorros crecen poco a poco', fa: 'پس‌اندازش آهسته بیشتر می‌شود' },
            why: { en: 'Yes! Interest adds a little money. Savings can gain value over time.', es: '¡Sí! El interés suma un poco de dinero. Los ahorros ganan valor con el tiempo.', fa: 'بله! سود کمی پول اضافه می‌کند. پس‌انداز با وقت ارزش پیدا می‌کند.' } },
          { t: { en: 'His savings slowly shrink', es: 'Sus ahorros bajan poco a poco', fa: 'پس‌اندازش آهسته کم می‌شود' },
            why: { en: 'No. The bank pays interest on savings, so they grow, not shrink.', es: 'No. El banco paga interés por los ahorros, así que crecen, no bajan.', fa: 'نه. بانک بالای پس‌انداز سود می‌دهد، پس بیشتر می‌شود، نه کم.' } },
          { t: { en: 'His savings turn into debt', es: 'Sus ahorros se vuelven deuda', fa: 'پس‌اندازش قرض می‌شود' },
            why: { en: 'No. Savings are money Leo owns. They stay an asset, not a debt.', es: 'No. Los ahorros son dinero de Leo. Siguen siendo un activo, no una deuda.', fa: 'نه. پس‌انداز پول خود لیو است. دارایی می‌ماند، نه قرض.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'BUDGET BAY · Yard sale day! Old things for sale on every lawn.', es: 'BUDGET BAY · ¡Día de ventas de garaje! Cosas viejas en venta en cada jardín.', fa: 'خلیج بودجه · روز فروش حویلی! چیزهای کهنه در هر سبزه‌زار برای فروش.' } },
    { x: 27, y: 9, text: { en: 'CAR LOT · A car is an asset. It loses value every year you drive it.', es: 'LOTE DE CARROS · Un carro es un activo. Pierde valor cada año que lo manejas.', fa: 'نمایشگاه موتر · موتر یک دارایی است. هر سالی که آن را می‌رانی ارزش از دست می‌دهد.' } },
    { x: 2, y: 16, text: { en: 'BUDGET BAY PARK · The college is north. The bank is east, across the street.', es: 'PARQUE DE BUDGET BAY · La universidad está al norte. El banco está al este.', fa: 'پارک خلیج بودجه · پوهنتون در شمال است. بانک در شرق است.' } }
  ],

  /* the quest: Kofi in the park (south-west) lost his money notebook -> Hamid the mail carrier on the street by the
     car lot (north-east) saw the wind take it -> the end of the wooden dock on the bay (south-east) -> back to Kofi.
     Kofi: savings $1,000, student loan $3,000, net worth -$2,000. Below zero is normal at the start. */
  quest: {
    stat: 'reg',
    title: { en: 'The Lost Money Notebook', es: 'La libreta perdida', fa: 'کتابچهٔ گم‌شدهٔ پول' },
    giver: {
      x: 12, y: 18,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'College student', es: 'Estudiante universitario', fa: 'محصل پوهنتون' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a02a', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I have $1,000 in savings. I owe $3,000 on my [[student loan|student loan]].', es: 'Tengo $1,000 de ahorros. Debo $3,000 de mi [[student loan|préstamo de estudios]].', fa: 'من ۱٬۰۰۰ دالر پس‌انداز دارم. ۳٬۰۰۰ دالر [[student loan|قرض تحصیلی]] دارم.' },
        { en: 'So my [[net worth|net worth]] is minus $2,000. That is normal at the start.', es: 'Así que mi [[net worth|patrimonio neto]] es menos $2,000. Es normal al principio.', fa: 'پس [[net worth|ارزش خالص]] من منفی ۲٬۰۰۰ دالر است. در شروع عادی است.' },
        { en: 'I track it in a notebook. But the wind blew it away!', es: 'Lo anoto en una libreta. ¡Pero el viento se la llevó!', fa: 'آن را در یک کتابچه می‌نویسم. اما باد آن را برد!' }
      ],
      wait: { en: 'Hamid the mail carrier saw it. He is on the street by the car lot.', es: 'Hamid, el cartero, la vio. Está en la calle junto al lote de carros.', fa: 'حامد پسته‌رسان آن را دید. او در سرک کنار نمایشگاه موتر است.' },
      thanks: { en: 'My notebook! Each month I save and pay my loan. My net worth climbs.', es: '¡Mi libreta! Cada mes ahorro y pago mi préstamo. Mi patrimonio neto sube.', fa: 'کتابچه‌ام! هر ماه پس‌انداز می‌کنم و قرضم را می‌دهم. ارزش خالصم بالا می‌رود.' }
    },
    contact: {
      x: 26, y: 10,
      name: { en: 'Hamid', es: 'Hamid', fa: 'حامد' },
      role: { en: 'Mail carrier', es: 'Cartero', fa: 'پسته‌رسان' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#4a6a9a', pants: '#2a3a5a', hat: '#4a6a9a', style: 'short' },
      lines: [
        { en: 'A blue notebook? Yes! The wind took it down the street.', es: '¿Una libreta azul? ¡Sí! El viento se la llevó por la calle.', fa: 'یک کتابچهٔ آبی؟ بله! باد آن را در امتداد سرک برد.' },
        { en: 'It flew south, past the bank, and on toward the bay.', es: 'Voló al sur, pasó el banco y siguió hacia la bahía.', fa: 'به طرف جنوب پرید، از کنار بانک گذشت و به طرف خلیج رفت.' },
        { en: 'Look at the end of the wooden dock, south-east, over the water.', es: 'Busca al final del muelle de madera, al sureste, sobre el agua.', fa: 'در آخر پایهٔ چوبی، در جنوب شرق، بالای آب ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [28, 19],
      hint: { en: 'the end of the wooden dock on the bay, south-east', es: 'el final del muelle de madera en la bahía, al sureste', fa: 'آخر پایهٔ چوبی در خلیج، جنوب شرق' },
      found: { en: 'Kofi\'s notebook! It says: savings up, loan down, net worth up!', es: '¡La libreta de Kofi! Dice: ahorros arriba, préstamo abajo, patrimonio neto arriba.', fa: 'کتابچهٔ کوفی! نوشته: پس‌انداز بالا، قرض پایین، ارزش خالص بالا!' },
      item: { icon: '📒', name: { en: 'Kofi\'s money notebook', es: 'La libreta de dinero de Kofi', fa: 'کتابچهٔ پول کوفی' } }
    }
  },

  scraps: [[14, 1], [30, 2], [1, 20]],
  smudges: [[11, 9], [24, 17]],

  challenge: {
    at: [13, 13],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one post for each line of Leo's list: his cash box at the yard sale, his car in the car lot,
    // his savings and his car loan at the bank, his student loan by the college
    spots: [[7, 4], [17, 15], [24, 6], [21, 16], [4, 15]],
    stat: 'hei',
    title: { en: 'What is Leo worth?', es: '¿Cuánto vale Leo?', fa: 'ارزش خالص لیو چقدر است؟' },
    intro: { en: 'The Grump scattered Leo\'s money list! Read each post. Then find his [[net worth|net worth]].',
      es: '¡El Gruñón esparció la lista de dinero de Leo! Lee cada poste. Luego halla su [[net worth|patrimonio neto]].',
      fa: 'غرغرو فهرست پول لیو را پراکنده کرد! هر تیر را بخوان. بعد [[net worth|ارزش خالص]] او را پیدا کن.' },
    table: {
      head: [
        { en: 'Item', es: 'Cosa', fa: 'چیز' },
        { en: 'Own it or owe it?', es: '¿Lo tiene o lo debe?', fa: 'دارد یا قرض دارد؟' },
        { en: 'Value', es: 'Valor', fa: 'ارزش' }
      ],
      rows: [
        [{ en: 'Cash in his wallet', es: 'Efectivo en su cartera', fa: 'پول نقد در بکس پولش' }, { en: 'He owns it', es: 'Lo tiene', fa: 'مال اوست' }, { en: '$500', es: '$500', fa: '۵۰۰ دالر' }],
        [{ en: 'Savings at the bank', es: 'Ahorros en el banco', fa: 'پس‌انداز در بانک' }, { en: 'He owns it', es: 'Lo tiene', fa: 'مال اوست' }, { en: '$2,000', es: '$2,000', fa: '۲٬۰۰۰ دالر' }],
        [{ en: 'His car', es: 'Su carro', fa: 'موترش' }, { en: 'He owns it', es: 'Lo tiene', fa: 'مال اوست' }, { en: '$6,000', es: '$6,000', fa: '۶٬۰۰۰ دالر' }],
        [{ en: 'Car loan', es: 'Préstamo del carro', fa: 'قرض موتر' }, { en: 'He owes it', es: 'Lo debe', fa: 'قرض دارد' }, { en: '$4,000', es: '$4,000', fa: '۴٬۰۰۰ دالر' }],
        [{ en: 'Student loan', es: 'Préstamo de estudios', fa: 'قرض تحصیلی' }, { en: 'He owes it', es: 'Lo debe', fa: 'قرض دارد' }, { en: '$3,000', es: '$3,000', fa: '۳٬۰۰۰ دالر' }]
      ],
      note: { en: 'What he owns are assets. What he owes are liabilities.', es: 'Lo que tiene son activos. Lo que debe son pasivos.', fa: 'آنچه دارد دارایی است. آنچه قرض دارد بدهی است.' }
    },
    questions: [
      { q: { en: 'Add up what Leo owns. What are his total assets?', es: 'Suma lo que Leo tiene. ¿Cuánto suman sus activos?', fa: 'آنچه لیو دارد را جمع کن. مجموع دارایی‌اش چقدر است؟' },
        choices: [{ en: '$8,500', es: '$8,500', fa: '۸٬۵۰۰ دالر' }, { en: '$6,000', es: '$6,000', fa: '۶٬۰۰۰ دالر' }, { en: '$15,500', es: '$15,500', fa: '۱۵٬۵۰۰ دالر' }, { en: '$7,000', es: '$7,000', fa: '۷٬۰۰۰ دالر' }], answer: 0,
        why: { en: 'Cash $500 + savings $2,000 + car $6,000 = $8,500.', es: 'Efectivo $500 + ahorros $2,000 + carro $6,000 = $8,500.', fa: 'پول نقد ۵۰۰ + پس‌انداز ۲٬۰۰۰ + موتر ۶٬۰۰۰ = ۸٬۵۰۰ دالر.' } },
      { q: { en: 'Add up what Leo owes. What are his total liabilities?', es: 'Suma lo que Leo debe. ¿Cuánto suman sus pasivos?', fa: 'آنچه لیو قرض دارد را جمع کن. مجموع بدهی‌اش چقدر است؟' },
        choices: [{ en: '$7,000', es: '$7,000', fa: '۷٬۰۰۰ دالر' }, { en: '$4,000', es: '$4,000', fa: '۴٬۰۰۰ دالر' }, { en: '$3,000', es: '$3,000', fa: '۳٬۰۰۰ دالر' }, { en: '$8,500', es: '$8,500', fa: '۸٬۵۰۰ دالر' }], answer: 0,
        why: { en: 'Car loan $4,000 + student loan $3,000 = $7,000.', es: 'Préstamo del carro $4,000 + préstamo de estudios $3,000 = $7,000.', fa: 'قرض موتر ۴٬۰۰۰ + قرض تحصیلی ۳٬۰۰۰ = ۷٬۰۰۰ دالر.' } },
      { q: { en: 'What is Leo\'s net worth?', es: '¿Cuál es el patrimonio neto de Leo?', fa: 'ارزش خالص لیو چقدر است؟' },
        choices: [{ en: '$1,500', es: '$1,500', fa: '۱٬۵۰۰ دالر' }, { en: '$15,500', es: '$15,500', fa: '۱۵٬۵۰۰ دالر' }, { en: 'minus $1,500', es: 'menos $1,500', fa: 'منفی ۱٬۵۰۰ دالر' }, { en: '$8,500', es: '$8,500', fa: '۸٬۵۰۰ دالر' }], answer: 0,
        why: { en: 'Assets minus liabilities: $8,500 − $7,000 = $1,500.', es: 'Activos menos pasivos: $8,500 − $7,000 = $1,500.', fa: 'دارایی منهای بدهی: ۸٬۵۰۰ − ۷٬۰۰۰ = ۱٬۵۰۰ دالر.' } },
      { q: { en: 'Which line on Leo\'s list is a liability?', es: '¿Qué línea de la lista de Leo es un pasivo?', fa: 'کدام خط در فهرست لیو بدهی است؟' },
        choices: [{ en: 'The car loan', es: 'El préstamo del carro', fa: 'قرض موتر' }, { en: 'The car', es: 'El carro', fa: 'موتر' }, { en: 'The savings', es: 'Los ahorros', fa: 'پس‌انداز' }, { en: 'The cash', es: 'El efectivo', fa: 'پول نقد' }], answer: 0,
        why: { en: 'Leo owns the car, but he owes the car loan. A debt is a liability.', es: 'Leo es dueño del carro, pero debe el préstamo. Una deuda es un pasivo.', fa: 'موتر مال لیو است، اما قرض موتر را باید بپردازد. قرض بدهی است.' } },
      { q: { en: 'Leo wants a bigger net worth. What is a good step?', es: 'Leo quiere un patrimonio neto más grande. ¿Qué paso es bueno?', fa: 'لیو ارزش خالص بیشتر می‌خواهد. کدام قدم خوب است؟' },
        choices: [{ en: 'Use some pay to cut his car loan', es: 'Usar parte del sueldo para bajar su préstamo', fa: 'بخشی از معاش را برای کم کردن قرض موتر بدهد' }, { en: 'Take a new loan for a big TV', es: 'Pedir un préstamo nuevo para una tele grande', fa: 'یک قرض نو برای یک تلویزیون کلان بگیرد' }, { en: 'Spend all his savings on a trip', es: 'Gastar todos sus ahorros en un viaje', fa: 'همهٔ پس‌اندازش را در سفر خرج کند' }, { en: 'Skip his loan payments a while', es: 'Dejar de pagar su préstamo un tiempo', fa: 'مدتی قسط قرضش را ندهد' }], answer: 0,
        why: { en: 'Pay used for debt, not spent, makes liabilities smaller. Net worth goes up.', es: 'El sueldo usado para la deuda, no gastado, baja los pasivos. El patrimonio neto sube.', fa: 'معاشی که به جای خرج، قرض را کم کند، بدهی را کم می‌کند. ارزش خالص بالا می‌رود.' } }
    ],
    success: { en: 'Leo\'s list is whole again! He owns $8,500, owes $7,000, and is worth $1,500.', es: '¡La lista de Leo está completa! Tiene $8,500, debe $7,000 y su patrimonio neto es $1,500.', fa: 'فهرست لیو دوباره کامل شد! ۸٬۵۰۰ دالر دارد، ۷٬۰۰۰ قرض دارد و ارزش خالصش ۱٬۵۰۰ دالر است.' }
  },

  boss: {
    at: [23, 20],
    stat: 'reg',
    need: 3,
    name: { en: 'The Owing Grump', es: 'El Gruñón Deudor', fa: 'غرغروی قرض‌دار' },
    appear: { en: 'The Owing Grump is hiding in the fog by the bay!', es: '¡El Gruñón Deudor se esconde en la niebla junto a la bahía!', fa: 'غرغروی قرض‌دار در مه کنار خلیج پنهان است!' },
    taunt: { en: 'Own? Owe? Who cares! Borrow for everything, and never count it!', es: '¿Tener? ¿Deber? ¡Qué más da! ¡Pide prestado para todo y nunca cuentes!', fa: 'داشتن؟ قرض داشتن؟ چه فرق! برای همه چیز قرض بگیر و هیچ وقت حساب نکن!' },
    win: { en: 'The fog lifts off the bay. Ledger page 3.3 floats down into your hands!', es: 'La niebla se va de la bahía. ¡La página 3.3 del libro cae en tus manos!', fa: 'مه از روی خلیج کنار می‌رود. صفحهٔ ۳.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is an asset?', es: '¿Qué es un activo?', fa: 'دارایی چیست؟' },
        choices: [
          { en: 'Something you own that has money value', es: 'Algo que tienes y que vale dinero', fa: 'چیزی که داری و ارزش پولی دارد' },
          { en: 'Money you borrowed and must pay back', es: 'Dinero que pediste y debes devolver', fa: 'پولی که قرض گرفتی و باید پس بدهی' },
          { en: 'A bill you pay every single month', es: 'Una cuenta que pagas cada mes', fa: 'یک بل که هر ماه می‌پردازی' },
          { en: 'Something you rent from a neighbor', es: 'Algo que le rentas a un vecino', fa: 'چیزی که از همسایه کرایه می‌کنی' }],
        answer: 0,
        why: { en: 'An asset is something you own with money value: cash, savings, a car, a house.', es: 'Un activo es algo tuyo que vale dinero: efectivo, ahorros, un carro, una casa.', fa: 'دارایی چیزی است که داری و ارزش پولی دارد: پول نقد، پس‌انداز، موتر، خانه.' } },
      { q: { en: 'Which of these is a liability?', es: '¿Cuál de estos es un pasivo?', fa: 'کدام یکی از اینها بدهی است?' },
        choices: [
          { en: 'A student loan', es: 'Un préstamo de estudios', fa: 'یک قرض تحصیلی' },
          { en: 'A savings account', es: 'Una cuenta de ahorros', fa: 'یک حساب پس‌انداز' },
          { en: 'A paid-off house', es: 'Una casa ya pagada', fa: 'یک خانهٔ پرداخت شده' },
          { en: 'Cash in a wallet', es: 'Efectivo en una cartera', fa: 'پول نقد در بکس پول' }],
        answer: 0,
        why: { en: 'A liability is a debt you owe. A student loan must be paid back.', es: 'Un pasivo es una deuda que debes. Un préstamo de estudios se debe devolver.', fa: 'بدهی قرضی است که باید بپردازی. قرض تحصیلی باید پس داده شود.' } },
      { q: { en: 'How do you find your net worth?', es: '¿Cómo calculas tu patrimonio neto?', fa: 'ارزش خالص خود را چطور پیدا می‌کنی؟' },
        choices: [
          { en: 'Assets minus liabilities', es: 'Activos menos pasivos', fa: 'دارایی منهای بدهی' },
          { en: 'Assets plus liabilities', es: 'Activos más pasivos', fa: 'دارایی جمع بدهی' },
          { en: 'Liabilities minus pay', es: 'Pasivos menos sueldo', fa: 'بدهی منهای معاش' },
          { en: 'Pay times your hours', es: 'Sueldo por tus horas', fa: 'معاش ضرب ساعت‌ها' }],
        answer: 0,
        why: { en: 'Net worth = what you own minus what you owe.', es: 'Patrimonio neto = lo que tienes menos lo que debes.', fa: 'ارزش خالص = آنچه داری منهای آنچه قرض داری.' } },
      { q: { en: 'Mia owns $3,000 in assets. She owes $5,000. What is her net worth?', es: 'Mia tiene $3,000 en activos. Debe $5,000. ¿Cuál es su patrimonio neto?', fa: 'میا ۳٬۰۰۰ دالر دارایی دارد. ۵٬۰۰۰ دالر قرض دارد. ارزش خالص او چقدر است؟' },
        choices: [
          { en: 'minus $2,000', es: 'menos $2,000', fa: 'منفی ۲٬۰۰۰ دالر' },
          { en: '$2,000', es: '$2,000', fa: '۲٬۰۰۰ دالر' },
          { en: '$8,000', es: '$8,000', fa: '۸٬۰۰۰ دالر' },
          { en: '$5,000', es: '$5,000', fa: '۵٬۰۰۰ دالر' }],
        answer: 0,
        why: { en: '$3,000 − $5,000 = minus $2,000. She owes more than she owns.', es: '$3,000 − $5,000 = menos $2,000. Debe más de lo que tiene.', fa: '۳٬۰۰۰ − ۵٬۰۰۰ = منفی ۲٬۰۰۰ دالر. بیشتر از داشته‌اش قرض دارد.' } },
      { q: { en: 'Which asset is the most liquid?', es: '¿Qué activo es el más líquido?', fa: 'کدام دارایی از همه نقدتر است؟' },
        choices: [
          { en: 'Cash in a wallet', es: 'Efectivo en una cartera', fa: 'پول نقد در بکس پول' },
          { en: 'A family house', es: 'Una casa familiar', fa: 'یک خانهٔ فامیلی' },
          { en: 'A used car', es: 'Un carro usado', fa: 'یک موتر کهنه' },
          { en: 'A piece of land', es: 'Un terreno', fa: 'یک توته زمین' }],
        answer: 0,
        why: { en: 'Liquid means easy to use as money right away. Cash is ready now.', es: 'Líquido es fácil de usar como dinero enseguida. El efectivo está listo ya.', fa: 'نقد یعنی آسان برای خرج فوری. پول نقد همین حالا آماده است.' } },
      { q: { en: 'What usually happens to a car\'s value each year?', es: '¿Qué le pasa casi siempre al valor de un carro cada año?', fa: 'ارزش موتر هر سال معمولاً چه می‌شود؟' },
        choices: [
          { en: 'It goes down', es: 'Baja', fa: 'پایین می‌رود' },
          { en: 'It goes up', es: 'Sube', fa: 'بالا می‌رود' },
          { en: 'It stays the same', es: 'Se queda igual', fa: 'همان طور می‌ماند' },
          { en: 'It becomes a debt', es: 'Se vuelve deuda', fa: 'قرض می‌شود' }],
        answer: 0,
        why: { en: 'Cars depreciate. They lose value as they get older and more used.', es: 'Los carros se deprecian. Pierden valor al ponerse viejos y usados.', fa: 'موتر کم‌ارزش می‌شود. هر چه کهنه‌تر شود ارزشش کمتر می‌شود.' } },
      { q: { en: 'Which choice raises your net worth?', es: '¿Qué decisión sube tu patrimonio neto?', fa: 'کدام انتخاب ارزش خالص تو را بالا می‌برد؟' },
        choices: [
          { en: 'Saving part of each paycheck', es: 'Ahorrar parte de cada sueldo', fa: 'پس‌انداز بخشی از هر معاش' },
          { en: 'Spending all of each paycheck', es: 'Gastar todo cada sueldo', fa: 'خرج همهٔ هر معاش' },
          { en: 'Borrowing more on a card', es: 'Pedir más con una tarjeta', fa: 'قرض بیشتر با کارت' },
          { en: 'Missing a loan payment', es: 'No pagar una cuota del préstamo', fa: 'ندادن یک قسط قرض' }],
        answer: 0,
        why: { en: 'Saving adds to your assets. More debt or late payments pull net worth down.', es: 'Ahorrar suma a tus activos. Más deuda o pagos tarde bajan el patrimonio neto.', fa: 'پس‌انداز به دارایی‌ات اضافه می‌کند. قرض بیشتر یا قسط دیر ارزش خالص را پایین می‌آورد.' } },
      { q: { en: 'Kofi, 21, has a student loan and a net worth below zero. What is true?', es: 'Kofi, de 21 años, tiene un préstamo de estudios y patrimonio menor que cero. ¿Qué es cierto?', fa: 'کوفی ۲۱ ساله قرض تحصیلی و ارزش خالص کمتر از صفر دارد. چه درست است؟' },
        choices: [
          { en: 'It is common, and he can raise it', es: 'Es común, y lo puede subir', fa: 'عادی است و می‌تواند آن را بالا ببرد' },
          { en: 'He can never change that number', es: 'Nunca puede cambiar ese número', fa: 'هرگز نمی‌تواند آن عدد را تغییر بدهد' },
          { en: 'It means he owns nothing at all', es: 'Significa que no tiene nada', fa: 'یعنی هیچ چیزی ندارد' },
          { en: 'It means he must stop school', es: 'Significa que debe dejar la escuela', fa: 'یعنی باید درس را بس کند' }],
        answer: 0,
        why: { en: 'Many young adults start below zero. Saving and paying debt help it grow.', es: 'Muchos jóvenes empiezan bajo cero. Ahorrar y pagar deudas lo hacen crecer.', fa: 'بسیاری از جوانان از کمتر از صفر شروع می‌کنند. پس‌انداز و پرداخت قرض آن را بالا می‌برد.' } }
    ]
  },

  learned: [
    { en: '[[asset|Assets]] are what you own. [[liability|Liabilities]] are the debts you owe.', es: 'Los [[asset|activos]] son lo que tienes. Los [[liability|pasivos]] son las deudas que debes.', fa: '[[asset|دارایی]] آن است که داری. [[liability|بدهی]] قرضی است که باید بپردازی.' },
    { en: '[[net worth|Net worth]] = assets minus liabilities. It can be below zero at first.', es: '[[net worth|Patrimonio neto]] = activos menos pasivos. Puede ser menor que cero al principio.', fa: '[[net worth|ارزش خالص]] = دارایی منهای بدهی. در اول ممکن است کمتر از صفر باشد.' },
    { en: 'Saving and paying down debt raise net worth. Cars lose value; savings can grow.', es: 'Ahorrar y pagar deudas suben el patrimonio. Los carros pierden valor; los ahorros pueden crecer.', fa: 'پس‌انداز و پرداخت قرض ارزش خالص را بالا می‌برد. موتر ارزش از دست می‌دهد؛ پس‌انداز بیشتر شده می‌تواند.' }
  ],
  reflect: {
    q: { en: 'Leo wants a higher net worth next year. What is one step you would tell him to take?', es: 'Leo quiere un patrimonio neto más alto el próximo año. ¿Qué paso le dirías que tome?', fa: 'لیو سال آینده ارزش خالص بیشتر می‌خواهد. کدام قدم را به او می‌گویی بردارد؟' },
    starter: { en: 'I would tell Leo to', es: 'Le diría a Leo que', fa: 'به لیو می‌گویم که' }
  }
};
