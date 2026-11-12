/* COINWALKER · Episode 3.1 · Creating a Budget
   Budget Bay, a made-up seaside town, on moving day.
   North half: Maya's apartment building, the grocery store, the phone shop and the laundromat along a sidewalk (l).
   Row 11 is Seaside Road. A wooden boardwalk (k) runs down the east side, then the beach (s) and the sea (~).
   South: the bus stop, the park with a pond, the town bank, snack stalls (m) on the beach and a pier (k) into the sea.
   People show income, expenses, fixed and variable costs, and the 50/30/20 guideline; the ledger stone asks the
   student to carry 8 expense cards to Needs (by the grocery), Wants (on the beach) or Savings (by the bank). */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'EPF',
  title: { en: 'Creating a Budget', es: 'Cómo hacer un presupuesto', fa: 'ساختن بودجه' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Budget Bay, moving day', es: 'Bahía del Presupuesto, día de mudanza', fa: 'خلیج بودجه، روز کوچ‌کشی' },
  intro: [
    { en: 'The Grump tore the page about budgets. Now people spend with no plan.',
      es: 'El Gruñón rompió la página sobre los presupuestos. Ahora la gente gasta sin plan.',
      fa: 'غرغرو صفحهٔ بودجه را پاره کرد. حالا مردم بدون برنامه پول مصرف می‌کنند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town on the Atlantic coast (no timeline in this game) */
  scenes: {
    at: [-76.0, 36.85],
    start: [
      { en: 'Budget Bay is a small town by the sea. It is made up.',
        es: 'La Bahía del Presupuesto es un pueblo junto al mar. Es inventado.',
        fa: 'خلیج بودجه یک شهر کوچک کنار بحر است. ساختگی است.' },
      { en: 'Today is moving day. Maya, 19, is moving into her first apartment.',
        es: 'Hoy es día de mudanza. Maya, de 19 años, se muda a su primer apartamento.',
        fa: 'امروز روز کوچ‌کشی است. مایا، ۱۹ ساله، به اولین اپارتمانش می‌رود.' },
      { en: 'Now she pays her own bills. She needs a plan for her money.',
        es: 'Ahora ella paga sus propias cuentas. Necesita un plan para su dinero.',
        fa: 'حالا او بل‌های خود را می‌پردازد. برای پولش یک برنامه لازم دارد.' }
    ],
    page: { en: 'A budget is not set in stone. You can change it every month.',
      es: 'Un presupuesto no es fijo para siempre. Lo puedes cambiar cada mes.',
      fa: 'بودجه برای همیشه ثابت نیست. هر ماه می‌توانی آن را تغییر بدهی.' },
    guess: {
      q: { en: 'Should you plan your money before you spend it?', es: '¿Debes planear tu dinero antes de gastarlo?', fa: 'آیا باید پیش از مصرف کردن پول، برایش برنامه بسازی؟' },
      choices: [
        { t: { en: '📝 Yes, plan first', es: '📝 Sí, primero planeo', fa: '📝 بله، اول برنامه' }, ok: true },
        { t: { en: '🛍️ No, just spend', es: '🛍️ No, solo gasto', fa: '🛍️ نه، فقط مصرف' } }
      ],
      why: { en: 'A plan shows where your money goes. Then it does not run out too soon.', es: 'Un plan muestra a dónde va tu dinero. Así no se acaba antes de tiempo.', fa: 'برنامه نشان می‌دهد پولت کجا می‌رود. آن وقت زود تمام نمی‌شود.' }
    },
    next: {
      q: { en: 'Next: what goal can you reach by saving a little each week?', es: 'Ahora: ¿qué meta logras ahorrando un poco cada semana?', fa: 'بعدی: با کمی پس‌انداز هر هفته به کدام هدف می‌رسی؟' },
      choices: [
        { t: { en: '🚲 A used bike, in months', es: '🚲 Una bici usada, en meses', fa: '🚲 بایسکل دست دوم، در چند ماه' }, ok: true },
        { t: { en: '🏠 A house, by next week', es: '🏠 Una casa, la otra semana', fa: '🏠 یک خانه، تا هفتهٔ بعد' } }
      ],
      why: { en: 'Small goals are easy to reach. $5 a week for 20 weeks is $100.', es: 'Las metas pequeñas se logran fácil. $5 por semana por 20 semanas son $100.', fa: 'هدف‌های کوچک آسان به دست می‌آیند. ۵ دالر در هفته برای ۲۰ هفته می‌شود ۱۰۰ دالر.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      look: { skin: 5, hair: '#120c08', shirt: '#d0a030', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'Hi! I am Maya\'s roommate. Watch out for the boxes!', es: '¡Hola! Soy la compañera de cuarto de Maya. ¡Cuidado con las cajas!', fa: 'سلام! من هم‌اتاقی مایا هستم. مواظب کارتن‌ها باش!' },
        { en: 'Our rent is $700 a month. We split it, so we each pay $350.', es: 'La renta es $700 al mes. La dividimos: cada una paga $350.', fa: 'کرایهٔ ما ماهانه ۷۰۰ دالر است. نصف می‌کنیم، هر کدام ۳۵۰ دالر.' },
        { en: 'Rent is the same every month. It is a [[fixed expense|fixed expense]].', es: 'La renta es igual cada mes. Es un [[fixed expense|gasto fijo]].', fa: 'کرایه هر ماه یکسان است. یک [[fixed expense|مصرف ثابت]] است.' }
      ] },
    { at: [11, 2], name: { en: 'Mr. Tran', es: 'Sr. Tran', fa: 'آقای ترن' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#3a8a4a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome to my grocery store! Food is a [[need|need]].', es: '¡Bienvenido a mi tienda! La comida es una [[need|necesidad]].', fa: 'به دکان سودای من خوش آمدی! خوراک یک [[need|ضرورت]] است.' },
        { en: 'Maya spends about $100 a month here. Some weeks more, some weeks less.', es: 'Maya gasta unos $100 al mes aquí. Unas semanas más, otras menos.', fa: 'مایا ماهانه حدود ۱۰۰ دالر اینجا مصرف می‌کند. بعضی هفته‌ها بیشتر، بعضی کمتر.' },
        { en: 'Food costs change. That makes groceries a [[variable expense|variable expense]].', es: 'El costo de la comida cambia. Por eso es un [[variable expense|gasto variable]].', fa: 'قیمت خوراک تغییر می‌کند. پس سودا یک [[variable expense|مصرف متغیر]] است.' }
      ] },
    { at: [17, 2], name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2a5aa0', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I sell phones and phone plans. A plan costs the same each month.', es: 'Vendo teléfonos y planes. Un plan cuesta lo mismo cada mes.', fa: 'من تیلفون و بستهٔ تیلفون می‌فروشم. بسته هر ماه یک قیمت دارد.' },
        { en: 'So a phone plan is a fixed expense. You can plan for it.', es: 'Así que un plan de teléfono es un gasto fijo. Puedes planearlo.', fa: 'پس بستهٔ تیلفون یک مصرف ثابت است. می‌توانی برایش برنامه بسازی.' },
        { en: 'A new phone when yours still works? That is a [[want|want]].', es: '¿Un teléfono nuevo cuando el tuyo aún sirve? Eso es un [[want|deseo]].', fa: 'تیلفون نو وقتی تیلفونت هنوز کار می‌کند؟ این یک [[want|خواهش]] است.' }
      ] },
    { at: [20, 2], name: { en: 'Mrs. Lopez', es: 'Sra. López', fa: 'خانم لوپز' },
      look: { skin: 3, hair: '#5a3a2a', shirt: '#c04a6a', pants: '#3a3a4a', style: 'long' },
      lines: [
        { en: 'One wash here costs $3. Maya washes 4 times a month. That is $12.', es: 'Un lavado aquí cuesta $3. Maya lava 4 veces al mes. Son $12.', fa: 'یک بار شستن اینجا ۳ دالر است. مایا ماهانه ۴ بار می‌شوید. می‌شود ۱۲ دالر.' },
        { en: 'Small costs add up. So I write down every dollar I spend.', es: 'Los gastos pequeños se suman. Por eso anoto cada dólar que gasto.', fa: 'مصرف‌های کوچک جمع می‌شوند. پس هر دالری را که مصرف می‌کنم می‌نویسم.' },
        { en: 'That is called [[tracking|tracking]] your spending.', es: 'Eso se llama [[tracking|llevar la cuenta]] de tus gastos.', fa: 'به این [[tracking|حساب گرفتن]] از مصرف می‌گویند.' }
      ] },
    { at: [13, 13], name: { en: 'Ms. Kim', es: 'Sra. Kim', fa: 'خانم کیم' },
      look: { skin: 0, hair: '#1a1a1a', shirt: '#3a6a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a bank teller. A savings account keeps money safe.', es: 'Soy cajera de banco. Una cuenta de ahorros guarda el dinero seguro.', fa: 'من تحویلدار بانک هستم. حساب پس‌انداز پول را امن نگه می‌دارد.' },
        { en: 'On payday, save first. Then spend the rest. That is [[pay yourself first|paying yourself first]].', es: 'El día de pago, ahorra primero. Luego gasta el resto. Es [[pay yourself first|pagarte primero]].', fa: 'روز معاش، اول پس‌انداز کن. بعد باقی را مصرف کن. این [[pay yourself first|اول به خودت بپرداز]] است.' },
        { en: 'Save $200 a month, and in one year you have $2,400.', es: 'Ahorra $200 al mes y en un año tendrás $2,400.', fa: 'ماهانه ۲۰۰ دالر پس‌انداز کن، در یک سال ۲۴۰۰ دالر داری.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): Maya's apartment (Q over h), the grocery store (R), the phone shop (Q) and the laundromat (R),
     with a sidewalk (l) in front. The boardwalk (k), the beach (s) and the sea (~) run down the east side.
     Row 11: Seaside Road (l).
     South: the bus stop sign, the park with flowers (,) and a pond (~), the bank (R over h),
     snack stalls (m) on the beach and a pier (k) out into the sea, where the Grump hides. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~~',
    'T.QQQQQ..RRRRR..QQQRRRkssss~~~~~',
    'T.hhdhh..hhdhh..hdhhdhkssss~~~~~',
    'Tlllllllllllllllllllllkssss~~~~~',
    'T..x..................kssss~~~~~',
    'T.....................kssss~~~~~',
    'T.T...........T.......kssss~~~~~',
    'T.....................kssss~~~~~',
    'T..,,,....T......T....kssss~~~~~',
    'T..,,,................kssss~~~~~',
    'T.T.........T......T..kssss~~~~~',
    'Tlllllllllllllllllllllkssss~~~~~',
    'T.TT.T..x..RRRRR......kssss~~~~~',
    'T..........hhdhh......ksmms~~~~~',
    'T..,,,..........x.....kssss~~~~~',
    'T.,,,,..............T.kssss~~~~~',
    'T..~~.................kssss~~~~~',
    'T..~~...T.............kssss~~~~~',
    'T.TT..........,,,.....kssss~~~~~',
    'T.....................ksssskkkk~',
    'T...T....T....T.......kssss~~~~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~~'
  ],
  start: [12, 8],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [16, 9], at: [16, 6], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps north, toward the shops.', es: 'Desde esta nota, camina 3 pasos al norte, hacia las tiendas.', fa: 'از این یادداشت، ۳ قدم به شمال برو، به طرف دکان‌ها.' },
      text: { en: 'A coin jar! A few coins saved each day add up over a year.', es: '¡Un frasco de monedas! Unas monedas ahorradas cada día suman mucho en un año.', fa: 'یک بوتل سکه! چند سکهٔ پس‌انداز هر روز، در یک سال زیاد می‌شود.' } },
    { clueAt: [25, 3], at: [25, 7], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps south along the beach.', es: 'Desde esta nota, camina 4 pasos al sur por la playa.', fa: 'از این یادداشت، ۴ قدم به جنوب در ساحل برو.' },
      text: { en: 'A free shell! The best fun at the beach can cost $0.', es: '¡Una concha gratis! La mejor diversión en la playa puede costar $0.', fa: 'یک صدف مفت! بهترین تفریح در ساحل می‌تواند ۰ دالر باشد.' } }
  ],

  words: {
    budget: { en: 'a plan for how you will earn, spend and save your money', es: 'un plan de cómo vas a ganar, gastar y ahorrar tu dinero', fa: 'برنامه‌ای برای این که چطور پول کمایی، مصرف و پس‌انداز می‌کنی' },
    income: { en: 'money coming in, like pay from a job', es: 'dinero que entra, como el pago de un trabajo', fa: 'پولی که می‌آید، مثل معاش یک کار' },
    expense: { en: 'money going out, to pay for things', es: 'dinero que sale, para pagar cosas', fa: 'پولی که می‌رود، برای پرداختن چیزها' },
    'fixed expense': { en: 'a cost that is the same every month, like rent', es: 'un gasto que es igual cada mes, como la renta', fa: 'مصرفی که هر ماه یکسان است، مثل کرایه' },
    'variable expense': { en: 'a cost that changes from month to month, like food', es: 'un gasto que cambia de un mes a otro, como la comida', fa: 'مصرفی که از یک ماه تا ماه دیگر تغییر می‌کند، مثل خوراک' },
    need: { en: 'something you must have to live and be safe', es: 'algo que debes tener para vivir y estar a salvo', fa: 'چیزی که برای زنده ماندن و امن بودن لازم داری' },
    want: { en: 'something nice to have, but you can live without it', es: 'algo bonito de tener, pero puedes vivir sin eso', fa: 'چیزی که داشتنش خوب است، اما بدون آن زندگی کرده می‌توانی' },
    savings: { en: 'money you keep for later instead of spending it now', es: 'dinero que guardas para después en vez de gastarlo ahora', fa: 'پولی که به جای مصرف حالا، برای بعد نگه می‌داری' },
    'pay yourself first': { en: 'put money into savings first, before you spend', es: 'poner dinero en ahorros primero, antes de gastar', fa: 'اول پول را پس‌انداز کن، پیش از مصرف' },
    '50/30/20': { en: 'a guide: about 50% for needs, 30% for wants, 20% for savings', es: 'una guía: más o menos 50% necesidades, 30% deseos, 20% ahorros', fa: 'یک رهنما: حدود ۵۰٪ ضرورت، ۳۰٪ خواهش، ۲۰٪ پس‌انداز' },
    'balanced budget': { en: 'your spending and saving equal your income', es: 'lo que gastas y ahorras es igual a tu ingreso', fa: 'مصرف و پس‌انداز تو برابر عاید تو است' },
    surplus: { en: 'money left over when you spend less than you earn', es: 'dinero que sobra cuando gastas menos de lo que ganas', fa: 'پولی که می‌ماند وقتی کمتر از کمایی‌ات مصرف می‌کنی' },
    deficit: { en: 'when you spend more money than you earn', es: 'cuando gastas más dinero del que ganas', fa: 'وقتی بیشتر از کمایی‌ات پول مصرف می‌کنی' },
    tracking: { en: 'writing down every dollar you spend', es: 'anotar cada dólar que gastas', fa: 'نوشتن هر دالری که مصرف می‌کنی' }
  },

  npcs: [
    {
      x: 5, y: 5,
      name: { en: 'Maya', es: 'Maya', fa: 'مایا' },
      role: { en: 'Moving into her first apartment', es: 'Se muda a su primer apartamento', fa: 'به اولین اپارتمانش کوچ می‌کند' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e06a3a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Hi! I am Maya. I am 19, and this is my first apartment!', es: '¡Hola! Soy Maya. Tengo 19 años y este es mi primer apartamento.', fa: 'سلام! من مایا هستم. ۱۹ ساله‌ام و این اولین اپارتمان من است!' },
        { en: 'I work part-time at a cafe. I earn $1,000 a month.', es: 'Trabajo medio tiempo en un café. Gano $1,000 al mes.', fa: 'در یک کافه نیمه‌وقت کار می‌کنم. ماهانه ۱۰۰۰ دالر کمایی می‌کنم.' },
        { en: 'Money coming in is [[income|income]]. Money going out is an [[expense|expense]].', es: 'El dinero que entra es [[income|ingreso]]. El que sale es un [[expense|gasto]].', fa: 'پولی که می‌آید [[income|عاید]] است. پولی که می‌رود [[expense|مصرف]] است.' },
        { en: 'So I made a [[budget|budget]]. It is a plan for my money.', es: 'Así que hice un [[budget|presupuesto]]. Es un plan para mi dinero.', fa: 'پس یک [[budget|بودجه]] ساختم. یک برنامه برای پولم است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Maya earns $1,000 a month at her job. What is that money called?', es: 'Maya gana $1,000 al mes en su trabajo. ¿Cómo se llama ese dinero?', fa: 'مایا ماهانه ۱۰۰۰ دالر از کارش کمایی می‌کند. به این پول چه می‌گویند؟' },
        choices: [
          { ok: true, t: { en: 'Her income', es: 'Su ingreso', fa: 'عاید او' },
            why: { en: 'Yes! Income is money coming in, like pay from a job.', es: '¡Sí! El ingreso es dinero que entra, como el pago de un trabajo.', fa: 'بله! عاید پولی است که می‌آید، مثل معاش یک کار.' } },
          { t: { en: 'Her expense', es: 'Su gasto', fa: 'مصرف او' },
            why: { en: 'No. An expense is money going out. Her pay is money coming in.', es: 'No. Un gasto es dinero que sale. Su pago es dinero que entra.', fa: 'نه. مصرف پولی است که می‌رود. معاش او پولی است که می‌آید.' } },
          { t: { en: 'Her deficit', es: 'Su déficit', fa: 'کسر بودجهٔ او' },
            why: { en: 'No. A deficit is spending more than you earn. Her pay is income.', es: 'No. Un déficit es gastar más de lo que ganas. Su pago es ingreso.', fa: 'نه. کسر بودجه یعنی بیشتر از کمایی مصرف کنی. معاش او عاید است.' } }
        ]
      }
    },
    {
      x: 9, y: 12,
      name: { en: 'Luis', es: 'Luis', fa: 'لوئیس' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 4, hair: '#1a1208', shirt: '#2f5f9a', pants: '#2a2a3a', hat: '#2a3a6a', style: 'short' },
      lines: [
        { en: 'I drive the town bus. Maya rides it to work.', es: 'Manejo el autobús del pueblo. Maya lo toma para ir al trabajo.', fa: 'من بس شهر را می‌رانم. مایا با آن به کار می‌رود.' },
        { en: 'Her bus pass is $50. It is $50 every single month.', es: 'Su pase de autobús cuesta $50. Son $50 todos los meses.', fa: 'کارت بس او ۵۰ دالر است. هر ماه همان ۵۰ دالر.' },
        { en: 'A cost that stays the same is a [[fixed expense|fixed expense]].', es: 'Un gasto que no cambia es un [[fixed expense|gasto fijo]].', fa: 'مصرفی که تغییر نمی‌کند یک [[fixed expense|مصرف ثابت]] است.' },
        { en: 'Gas for a car changes. That is a [[variable expense|variable expense]].', es: 'La gasolina de un carro cambia. Es un [[variable expense|gasto variable]].', fa: 'تیل موتر تغییر می‌کند. این یک [[variable expense|مصرف متغیر]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of Maya\'s costs is a variable expense?', es: '¿Cuál de los gastos de Maya es un gasto variable?', fa: 'کدام مصرف مایا یک مصرف متغیر است؟' },
        choices: [
          { ok: true, t: { en: 'Groceries', es: 'La comida', fa: 'سودای خوراک' },
            why: { en: 'Yes! Food costs change from week to week. That makes them variable.', es: '¡Sí! La comida cambia de precio cada semana. Por eso es variable.', fa: 'بله! قیمت خوراک هر هفته تغییر می‌کند. پس متغیر است.' } },
          { t: { en: 'Her bus pass', es: 'Su pase de bus', fa: 'کارت بس او' },
            why: { en: 'No. The bus pass is $50 every month. It is a fixed expense.', es: 'No. El pase cuesta $50 cada mes. Es un gasto fijo.', fa: 'نه. کارت بس هر ماه ۵۰ دالر است. مصرف ثابت است.' } },
          { t: { en: 'Her rent', es: 'Su renta', fa: 'کرایهٔ او' },
            why: { en: 'No. Her rent share is $350 every month. It is a fixed expense.', es: 'No. Su parte de la renta es $350 cada mes. Es un gasto fijo.', fa: 'نه. سهم کرایهٔ او هر ماه ۳۵۰ دالر است. مصرف ثابت است.' } }
        ]
      }
    },
    {
      x: 19, y: 17,
      name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      role: { en: 'Nurse', es: 'Enfermera', fa: 'نرس' },
      look: { skin: 1, hair: '#1a1008', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'bun' },
      lines: [
        { en: 'I use the [[50/30/20|50/30/20]] guide for my budget.', es: 'Uso la guía [[50/30/20|50/30/20]] para mi presupuesto.', fa: 'من برای بودجه‌ام از رهنمای [[50/30/20|۵۰/۳۰/۲۰]] کار می‌گیرم.' },
        { en: 'About 50% for needs, 30% for wants and 20% for [[savings|savings]].', es: 'Más o menos 50% para necesidades, 30% para deseos y 20% para [[savings|ahorros]].', fa: 'حدود ۵۰٪ برای ضرورت، ۳۰٪ برای خواهش و ۲۰٪ برای [[savings|پس‌انداز]].' },
        { en: 'With $1,000: $500 for needs, $300 for wants, $200 to save.', es: 'Con $1,000: $500 para necesidades, $300 para deseos, $200 para ahorrar.', fa: 'با ۱۰۰۰ دالر: ۵۰۰ برای ضرورت، ۳۰۰ برای خواهش، ۲۰۰ برای پس‌انداز.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Maya earns $1,000. With the 50/30/20 guide, how much does she save?', es: 'Maya gana $1,000. Con la guía 50/30/20, ¿cuánto ahorra?', fa: 'مایا ۱۰۰۰ دالر کمایی می‌کند. با رهنمای ۵۰/۳۰/۲۰، چقدر پس‌انداز می‌کند؟' },
        choices: [
          { ok: true, t: { en: '$200', es: '$200', fa: '۲۰۰ دالر' },
            why: { en: 'Yes! 20% of $1,000 is $200. That goes to savings.', es: '¡Sí! El 20% de $1,000 es $200. Eso va a los ahorros.', fa: 'بله! ۲۰٪ از ۱۰۰۰ دالر، ۲۰۰ دالر است. آن به پس‌انداز می‌رود.' } },
          { t: { en: '$300', es: '$300', fa: '۳۰۰ دالر' },
            why: { en: 'No. $300 is the 30% for wants. Savings is 20%, or $200.', es: 'No. $300 es el 30% para deseos. Los ahorros son 20%, o $200.', fa: 'نه. ۳۰۰ دالر همان ۳۰٪ برای خواهش است. پس‌انداز ۲۰٪ یا ۲۰۰ دالر است.' } },
          { t: { en: '$500', es: '$500', fa: '۵۰۰ دالر' },
            why: { en: 'No. $500 is the 50% for needs. Savings is 20%, or $200.', es: 'No. $500 es el 50% para necesidades. Los ahorros son 20%, o $200.', fa: 'نه. ۵۰۰ دالر همان ۵۰٪ برای ضرورت است. پس‌انداز ۲۰٪ یا ۲۰۰ دالر است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 4, text: { en: 'BUDGET BAY · A made-up town by the sea. Shops along the sidewalk, the beach to the east.', es: 'BAHÍA DEL PRESUPUESTO · Un pueblo inventado junto al mar. Tiendas en la acera, la playa al este.', fa: 'خلیج بودجه · یک شهر ساختگی کنار بحر. دکان‌ها کنار پیاده‌رو، ساحل به طرف شرق.' } },
    { x: 8, y: 12, text: { en: 'BUS STOP · Monthly bus pass: $50. Same price every month.', es: 'PARADA DE AUTOBÚS · Pase mensual: $50. El mismo precio cada mes.', fa: 'ایستگاه بس · کارت ماهانهٔ بس: ۵۰ دالر. هر ماه همین قیمت.' } },
    { x: 16, y: 14, text: { en: 'TOWN BANK · Savings accounts. Save a little every payday.', es: 'BANCO DEL PUEBLO · Cuentas de ahorros. Ahorra un poco cada día de pago.', fa: 'بانک شهر · حساب پس‌انداز. هر روز معاش کمی پس‌انداز کن.' } }
  ],

  /* the quest: Kofi (gold !) in the north-west -> Ms. Ruiz by the shops in the north-east
     -> carry the right good to Ben, Kofi's roommate, on the beach in the south-east -> back to Kofi.
     They have exactly $20 left until payday: the groceries ($20) keep the budget balanced; the ticket is a want,
     and the shoes ($60) would make a deficit. */
  quest: {
    stat: 'hei',
    title: { en: '$20 Until Payday', es: '$20 hasta el día de pago', fa: '۲۰ دالر تا روز معاش' },
    giver: {
      x: 14, y: 8,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Cook at a cafe', es: 'Cocinero en un café', fa: 'آشپز در یک کافه' },
      look: { skin: 5, hair: '#120c08', shirt: '#f0f0e8', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'My roommate Ben and I have $20 left. Payday is Friday.', es: 'Mi compañero Ben y yo tenemos $20. El día de pago es el viernes.', fa: 'من و هم‌اتاقی‌ام بن ۲۰ دالر داریم. روز معاش جمعه است.' },
        { en: 'Ben is on the beach. He does not know what to buy.', es: 'Ben está en la playa. No sabe qué comprar.', fa: 'بن در ساحل است. نمی‌داند چه بخرد.' },
        { en: 'Ms. Ruiz by the shops knows budgets. Please ask her!', es: 'La Sra. Ruiz, junto a las tiendas, sabe de presupuestos. ¡Pregúntale!', fa: 'خانم رویز کنار دکان‌ها بودجه را خوب می‌فهمد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Ms. Ruiz is by the shops, in the north-east of town.', es: 'La Sra. Ruiz está junto a las tiendas, al noreste del pueblo.', fa: 'خانم رویز کنار دکان‌ها است، در شمال شرق شهر.' },
      thanks: { en: 'Food for the week, and $0 over. Our budget is balanced!', es: 'Comida para la semana y $0 de más. ¡El presupuesto está equilibrado!', fa: 'خوراک برای یک هفته، و صفر دالر اضافه. بودجهٔ ما برابر است!' }
    },
    contact: {
      x: 19, y: 6,
      name: { en: 'Ms. Ruiz', es: 'Sra. Ruiz', fa: 'خانم رویز' },
      role: { en: 'Cashier', es: 'Cajera', fa: 'صندوق‌دار' },
      look: { skin: 2, hair: '#3a2416', shirt: '#8a4ac0', pants: '#2a3a2a', style: 'long' },
      lines: [
        { en: 'Kofi and Ben have only $20. Their fridge is empty.', es: 'Kofi y Ben solo tienen $20. Su refrigeradora está vacía.', fa: 'کوفی و بن فقط ۲۰ دالر دارند. یخچال شان خالی است.' },
        { en: 'Needs come first. And never spend more than you have.', es: 'Primero las necesidades. Y nunca gastes más de lo que tienes.', fa: 'اول ضرورت‌ها. و هیچ وقت بیشتر از داشته‌ات مصرف نکن.' },
        { en: 'Find the best $20 buy, and carry it to Ben on the beach!', es: '¡Busca la mejor compra de $20 y llévasela a Ben en la playa!', fa: 'بهترین خرید ۲۰ دالری را پیدا کن و پیش بن در ساحل ببر!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 20,
        name: { en: 'Ben', es: 'Ben', fa: 'بن' },
        role: { en: 'Kofi\'s roommate', es: 'Compañero de Kofi', fa: 'هم‌اتاقی کوفی' },
        look: { skin: 0, hair: '#c89048', shirt: '#4a7a3a', pants: '#3a2a1a', style: 'short' },
        lines: [
          { en: 'We have $20 until Friday. What should I spend it on?', es: 'Tenemos $20 hasta el viernes. ¿En qué los gasto?', fa: 'تا جمعه ۲۰ دالر داریم. آن را به چه مصرف کنم؟' },
          { en: 'Bring me the one thing that fits our budget.', es: 'Tráeme la única cosa que cabe en el presupuesto.', fa: 'یک چیزی را بیاور که در بودجهٔ ما جا شود.' }
        ]
      },
      q: { en: 'Kofi and Ben have $20 until payday. Which one should you bring Ben?', es: 'Kofi y Ben tienen $20 hasta el pago. ¿Qué le llevas a Ben?', fa: 'کوفی و بن تا روز معاش ۲۰ دالر دارند. کدام را برای بن می‌بری؟' },
      choices: [
        { ok: true, at: [13, 4], icon: '🛒', t: { en: 'Groceries for the week, $20', es: 'Comida para la semana, $20', fa: 'سودای یک هفته، ۲۰ دالر' },
          why: { en: 'Good choice! Food is a need, and it costs exactly the $20 they have.', es: '¡Buena elección! La comida es una necesidad y cuesta justo los $20 que tienen.', fa: 'انتخاب خوب! خوراک ضرورت است و درست همان ۲۰ دالری است که دارند.' } },
        { at: [25, 10], icon: '🎟️', t: { en: 'A beach concert ticket, $20', es: 'Una entrada al concierto, $20', fa: 'یک تکت کنسرت ساحل، ۲۰ دالر' },
          why: { en: 'It fits the $20, but it is a want. Their fridge is empty. Food comes first.', es: 'Cabe en los $20, pero es un deseo. La refri está vacía. Primero la comida.', fa: 'در ۲۰ دالر جا می‌شود، اما خواهش است. یخچال خالی است. اول خوراک.' } },
        { at: [18, 4], icon: '👟', t: { en: 'New running shoes, $60', es: 'Zapatos nuevos para correr, $60', fa: 'بوت نو دویدن، ۶۰ دالر' },
          why: { en: '$60 is $40 more than they have. That would make a deficit.', es: '$60 son $40 más de lo que tienen. Eso haría un déficit.', fa: '۶۰ دالر، ۴۰ دالر بیشتر از داشتهٔ شان است. این کسر بودجه می‌سازد.' } }
      ],
      item: { icon: '🧾', name: { en: 'A $20 grocery receipt', es: 'Un recibo de comida de $20', fa: 'یک رسید سودای ۲۰ دالری' } }
    }
  },

  scraps: [[1, 1], [26, 1], [1, 20]],
  smudges: [[7, 9], [17, 19]],

  challenge: {
    at: [9, 16],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // Needs in front of the grocery store, Wants on the beach by the snack stalls, Savings in front of the bank
    zones: [{ bin: 'needs', x: 8, y: 5, w: 5, h: 2 }, { bin: 'wants', x: 23, y: 15, w: 3, h: 3 },
      { bin: 'savings', x: 12, y: 15, w: 4, h: 2 }],
    stat: 'hei',
    title: { en: 'Need, want or savings?', es: '¿Necesidad, deseo o ahorro?', fa: 'ضرورت، خواهش یا پس‌انداز؟' },
    intro: { en: 'Maya is making her [[budget|budget]]. Carry each card to Needs, Wants or Savings.',
      es: 'Maya hace su [[budget|presupuesto]]. Lleva cada tarjeta a Necesidades, Deseos o Ahorros.',
      fa: 'مایا [[budget|بودجه‌اش]] را می‌سازد. هر کارت را به ضرورت، خواهش یا پس‌انداز ببر.' },
    bins: [
      { id: 'needs', icon: '🏠', label: { en: 'Needs', es: 'Necesidades', fa: 'ضرورت‌ها' }, sub: { en: 'must have to live and work', es: 'lo que debes tener para vivir y trabajar', fa: 'برای زندگی و کار لازم' } },
      { id: 'wants', icon: '🎉', label: { en: 'Wants', es: 'Deseos', fa: 'خواهش‌ها' }, sub: { en: 'nice to have, can live without', es: 'bonito tenerlo, puedes vivir sin eso', fa: 'خوب است، بدون آن هم می‌شود' } },
      { id: 'savings', icon: '🐷', label: { en: 'Savings', es: 'Ahorros', fa: 'پس‌انداز' }, sub: { en: 'money kept for later', es: 'dinero guardado para después', fa: 'پول نگه‌داشته برای بعد' } }
    ],
    items: [
      { bin: 'needs', t: { en: 'Rent share, $350', es: 'Parte de la renta, $350', fa: 'سهم کرایه، ۳۵۰ دالر' },
        why: { en: 'Maya needs a safe place to live. Rent is a [[need|need]].', es: 'Maya necesita un lugar seguro para vivir. La renta es una [[need|necesidad]].', fa: 'مایا به یک جای امن برای زندگی ضرورت دارد. کرایه یک [[need|ضرورت]] است.' } },
      { bin: 'needs', t: { en: 'Groceries, $100', es: 'Comida del súper, $100', fa: 'سودای خوراک، ۱۰۰ دالر' },
        why: { en: 'Everyone needs food to live. Groceries are a [[need|need]].', es: 'Todos necesitan comida para vivir. La comida es una [[need|necesidad]].', fa: 'همه برای زندگی به خوراک ضرورت دارند. سودا یک [[need|ضرورت]] است.' } },
      { bin: 'needs', t: { en: 'Bus pass to get to work, $50', es: 'Pase de autobús para ir al trabajo, $50', fa: 'کارت بس برای رفتن به کار، ۵۰ دالر' },
        why: { en: 'Without the bus, Maya cannot get to her job. It is a [[need|need]].', es: 'Sin el autobús, Maya no llega a su trabajo. Es una [[need|necesidad]].', fa: 'بدون بس، مایا به کارش رسیده نمی‌تواند. یک [[need|ضرورت]] است.' } },
      { bin: 'wants', t: { en: 'Movie night with friends', es: 'Noche de cine con amigos', fa: 'شب فلم با دوستان' },
        why: { en: 'Movies are fun, but Maya can live without them. They are a [[want|want]].', es: 'El cine es divertido, pero Maya puede vivir sin él. Es un [[want|deseo]].', fa: 'فلم جالب است، اما مایا بدون آن زندگی کرده می‌تواند. یک [[want|خواهش]] است.' } },
      { bin: 'wants', t: { en: 'Pizza delivery on Friday', es: 'Pizza a domicilio el viernes', fa: 'پیتزای فرمایشی روز جمعه' },
        why: { en: 'She can cook at home for less. Take-out food is a [[want|want]].', es: 'Puede cocinar en casa por menos. La comida a domicilio es un [[want|deseo]].', fa: 'او در خانه ارزان‌تر پخته می‌تواند. خوراک فرمایشی یک [[want|خواهش]] است.' } },
      { bin: 'wants', t: { en: 'A new video game', es: 'Un videojuego nuevo', fa: 'یک بازی ویدیویی نو' },
        why: { en: 'A game is nice to have, but it is not needed. It is a [[want|want]].', es: 'Un juego es bonito, pero no es necesario. Es un [[want|deseo]].', fa: 'بازی داشتنش خوب است، اما ضروری نیست. یک [[want|خواهش]] است.' } },
      { bin: 'savings', t: { en: '$150 into a savings account', es: '$150 a una cuenta de ahorros', fa: '۱۵۰ دالر به حساب پس‌انداز' },
        why: { en: 'This money is kept for later. It goes to [[savings|savings]].', es: 'Este dinero se guarda para después. Va a [[savings|ahorros]].', fa: 'این پول برای بعد نگه داشته می‌شود. به [[savings|پس‌انداز]] می‌رود.' } },
      { bin: 'savings', t: { en: '$50 for surprise costs later', es: '$50 para gastos sorpresa después', fa: '۵۰ دالر برای مصرف‌های ناگهانی بعدی' },
        why: { en: 'Money kept for a surprise, like a flat tire, is [[savings|savings]].', es: 'El dinero guardado para una sorpresa, como una llanta ponchada, es [[savings|ahorro]].', fa: 'پولی که برای یک حادثه نگه می‌داری، مثل تایر پنچر، [[savings|پس‌انداز]] است.' } }
    ],
    success: { en: 'Every card is in the right group! Needs first, then savings, then wants.', es: '¡Cada tarjeta está en su grupo! Primero necesidades, luego ahorros, luego deseos.', fa: 'هر کارت در گروه درست است! اول ضرورت، بعد پس‌انداز، بعد خواهش.' }
  },

  boss: {
    at: [30, 19],
    stat: 'hei',
    need: 3,
    name: { en: 'The Spendy Grump', es: 'El Gruñón Gastador', fa: 'غرغروی ولخرج' },
    appear: { en: 'The Spendy Grump is hiding in the fog at the end of the pier!', es: '¡El Gruñón Gastador se esconde en la niebla al final del muelle!', fa: 'غرغروی ولخرج در مه آخر اسکله پنهان است!' },
    taunt: { en: 'Budgets are boring! Spend it all TODAY. Who cares about next week?', es: '¡Los presupuestos son aburridos! Gástalo todo HOY. ¿A quién le importa la otra semana?', fa: 'بودجه خسته‌کن است! همه را امروز مصرف کن. هفتهٔ بعد مهم نیست!' },
    win: { en: 'The fog lifts off the pier. Ledger page 3.1 floats down into your hands!', es: 'La niebla se va del muelle. ¡La página 3.1 del libro cae en tus manos!', fa: 'مه از روی اسکله کنار می‌رود. صفحهٔ ۳.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a budget?', es: '¿Qué es un presupuesto?', fa: 'بودجه چیست؟' },
        choices: [
          { en: 'A plan for your money', es: 'Un plan para tu dinero', fa: 'یک برنامه برای پولت' },
          { en: 'A list of store prices', es: 'Una lista de precios', fa: 'یک فهرست قیمت دکان' },
          { en: 'A bill you pay late', es: 'Una cuenta que pagas tarde', fa: 'یک بل که دیر می‌پردازی' },
          { en: 'A loan from a friend', es: 'Un préstamo de un amigo', fa: 'یک قرض از یک دوست' }],
        answer: 0,
        why: { en: 'A budget is a plan for your money: what comes in, and what goes out.', es: 'Un presupuesto es un plan para tu dinero: lo que entra y lo que sale.', fa: 'بودجه برنامه‌ای برای پول توست: آنچه می‌آید و آنچه می‌رود.' } },
      { q: { en: 'Maya earns $1,000 but spends $1,100 this month. What does she have?', es: 'Maya gana $1,000 pero gasta $1,100 este mes. ¿Qué tiene?', fa: 'مایا ۱۰۰۰ دالر کمایی می‌کند، اما این ماه ۱۱۰۰ دالر مصرف می‌کند. او چه دارد؟' },
        choices: [
          { en: 'A deficit of $100', es: 'Un déficit de $100', fa: 'کسر بودجهٔ ۱۰۰ دالر' },
          { en: 'A surplus of $100', es: 'Un superávit de $100', fa: 'اضافهٔ ۱۰۰ دالر' },
          { en: 'A balanced budget', es: 'Un presupuesto equilibrado', fa: 'یک بودجهٔ برابر' },
          { en: 'Savings of $1,100', es: 'Ahorros de $1,100', fa: 'پس‌انداز ۱۱۰۰ دالر' }],
        answer: 0,
        why: { en: 'She spends $100 more than she earns. Spending more than you earn is a deficit.', es: 'Gasta $100 más de lo que gana. Gastar más de lo que ganas es un déficit.', fa: 'او ۱۰۰ دالر بیشتر از کمایی‌اش مصرف می‌کند. این کسر بودجه است.' } },
      { q: { en: 'Which of these is a fixed expense?', es: '¿Cuál de estos es un gasto fijo?', fa: 'کدام یکی از اینها مصرف ثابت است؟' },
        choices: [
          { en: 'Rent, $350 each month', es: 'Renta, $350 cada mes', fa: 'کرایه، هر ماه ۳۵۰ دالر' },
          { en: 'Food, more some weeks', es: 'Comida, más unas semanas', fa: 'خوراک، بعضی هفته‌ها بیشتر' },
          { en: 'Gas, up and down', es: 'Gasolina, sube y baja', fa: 'تیل، بالا و پایین' },
          { en: 'Fun, different each time', es: 'Diversión, distinta cada vez', fa: 'تفریح، هر بار فرق دارد' }],
        answer: 0,
        why: { en: 'A fixed expense is the same every month. Rent stays at $350.', es: 'Un gasto fijo es igual cada mes. La renta se queda en $350.', fa: 'مصرف ثابت هر ماه یکسان است. کرایه همان ۳۵۰ دالر می‌ماند.' } },
      { q: { en: 'Which of these is a want, not a need?', es: '¿Cuál de estos es un deseo, no una necesidad?', fa: 'کدام یکی از اینها خواهش است، نه ضرورت؟' },
        choices: [
          { en: 'A concert ticket', es: 'Una entrada a un concierto', fa: 'یک تکت کنسرت' },
          { en: 'Food for the week', es: 'Comida para la semana', fa: 'خوراک برای یک هفته' },
          { en: 'A bus pass to work', es: 'Un pase de bus al trabajo', fa: 'کارت بس برای کار' },
          { en: 'Rent for a room', es: 'La renta de un cuarto', fa: 'کرایهٔ یک اتاق' }],
        answer: 0,
        why: { en: 'A concert is fun, but you can live without it. That makes it a want.', es: 'Un concierto es divertido, pero puedes vivir sin él. Por eso es un deseo.', fa: 'کنسرت جالب است، اما بدون آن زندگی کرده می‌توانی. پس خواهش است.' } },
      { q: { en: 'Maya earns $1,000. With the 50/30/20 guide, how much is for needs?', es: 'Maya gana $1,000. Con la guía 50/30/20, ¿cuánto es para necesidades?', fa: 'مایا ۱۰۰۰ دالر کمایی می‌کند. با رهنمای ۵۰/۳۰/۲۰، چقدر برای ضرورت است؟' },
        choices: [
          { en: '$500', es: '$500', fa: '۵۰۰ دالر' },
          { en: '$300', es: '$300', fa: '۳۰۰ دالر' },
          { en: '$200', es: '$200', fa: '۲۰۰ دالر' },
          { en: '$800', es: '$800', fa: '۸۰۰ دالر' }],
        answer: 0,
        why: { en: '50% of $1,000 is $500 for needs. Then $300 for wants and $200 to save.', es: 'El 50% de $1,000 es $500 para necesidades. Luego $300 para deseos y $200 para ahorrar.', fa: '۵۰٪ از ۱۰۰۰ دالر، ۵۰۰ دالر برای ضرورت است. بعد ۳۰۰ برای خواهش و ۲۰۰ برای پس‌انداز.' } },
      { q: { en: 'What does "pay yourself first" mean?', es: '¿Qué significa «págate primero»?', fa: '«اول به خودت بپرداز» یعنی چه؟' },
        choices: [
          { en: 'Save some money before you spend', es: 'Ahorrar algo antes de gastar', fa: 'پیش از مصرف، کمی پس‌انداز کن' },
          { en: 'Buy yourself a treat on payday', es: 'Comprarte un gusto el día de pago', fa: 'روز معاش برای خودت چیزی بخر' },
          { en: 'Spend it all, then save the rest', es: 'Gastarlo todo y ahorrar lo que quede', fa: 'همه را مصرف کن، باقی را پس‌انداز کن' },
          { en: 'Pay your friends back before rent', es: 'Pagarles a tus amigos antes de la renta', fa: 'پیش از کرایه، قرض دوستانت را بده' }],
        answer: 0,
        why: { en: 'On payday, move money to savings first. Then plan the rest.', es: 'El día de pago, pasa dinero a tus ahorros primero. Luego planea el resto.', fa: 'روز معاش، اول پول را به پس‌انداز بگذار. بعد برای باقی برنامه بساز.' } },
      { q: { en: 'Kofi earns $800 and spends $700. What does he have?', es: 'Kofi gana $800 y gasta $700. ¿Qué tiene?', fa: 'کوفی ۸۰۰ دالر کمایی می‌کند و ۷۰۰ دالر مصرف می‌کند. او چه دارد؟' },
        choices: [
          { en: 'A surplus of $100', es: 'Un superávit de $100', fa: 'اضافهٔ ۱۰۰ دالر' },
          { en: 'A deficit of $100', es: 'Un déficit de $100', fa: 'کسر بودجهٔ ۱۰۰ دالر' },
          { en: 'A surplus of $700', es: 'Un superávit de $700', fa: 'اضافهٔ ۷۰۰ دالر' },
          { en: 'A deficit of $800', es: 'Un déficit de $800', fa: 'کسر بودجهٔ ۸۰۰ دالر' }],
        answer: 0,
        why: { en: '$800 minus $700 is $100 left over. Money left over is a surplus.', es: '$800 menos $700 son $100 que sobran. El dinero que sobra es un superávit.', fa: '۸۰۰ منفی ۷۰۰ می‌شود ۱۰۰ دالر باقی. پول باقی‌مانده اضافه است.' } },
      { q: { en: 'Why should you track your spending?', es: '¿Por qué debes llevar la cuenta de tus gastos?', fa: 'چرا باید از مصرف خود حساب بگیری؟' },
        choices: [
          { en: 'To see where your money goes', es: 'Para ver a dónde va tu dinero', fa: 'تا ببینی پولت کجا می‌رود' },
          { en: 'To make your income grow fast', es: 'Para que tu ingreso crezca rápido', fa: 'تا عایدت زود زیاد شود' },
          { en: 'To make every price go down', es: 'Para que bajen todos los precios', fa: 'تا همهٔ قیمت‌ها پایین بیاید' },
          { en: 'To spend more on your wants', es: 'Para gastar más en tus deseos', fa: 'تا برای خواهش‌ها بیشتر مصرف کنی' }],
        answer: 0,
        why: { en: 'Writing down what you spend shows where money goes. Small costs add up.', es: 'Anotar lo que gastas muestra a dónde va el dinero. Los gastos pequeños se suman.', fa: 'نوشتن مصرف نشان می‌دهد پول کجا می‌رود. مصرف‌های کوچک جمع می‌شوند.' } }
    ]
  },

  learned: [
    { en: 'A [[budget|budget]] is a plan for your [[income|income]] and your [[expense|expenses]].', es: 'Un [[budget|presupuesto]] es un plan para tu [[income|ingreso]] y tus [[expense|gastos]].', fa: '[[budget|بودجه]] یک برنامه برای [[income|عاید]] و [[expense|مصرف‌های]] توست.' },
    { en: 'Fixed costs stay the same. Variable costs change. Pay yourself first.', es: 'Los gastos fijos no cambian. Los variables sí. Págate primero.', fa: 'مصرف ثابت تغییر نمی‌کند. مصرف متغیر تغییر می‌کند. اول به خودت بپرداز.' },
    { en: 'The [[50/30/20|50/30/20]] guide: about 50% needs, 30% wants, 20% savings.', es: 'La guía [[50/30/20|50/30/20]]: más o menos 50% necesidades, 30% deseos, 20% ahorros.', fa: 'رهنمای [[50/30/20|۵۰/۳۰/۲۰]]: حدود ۵۰٪ ضرورت، ۳۰٪ خواهش، ۲۰٪ پس‌انداز.' }
  ],
  reflect: {
    q: { en: 'Imagine you earn $100. How would you split it into needs, wants and savings?', es: 'Imagina que ganas $100. ¿Cómo lo dividirías en necesidades, deseos y ahorros?', fa: 'فکر کن ۱۰۰ دالر کمایی می‌کنی. آن را چطور به ضرورت، خواهش و پس‌انداز تقسیم می‌کنی؟' },
    starter: { en: 'If I earned $100, I would', es: 'Si ganara $100, yo', fa: 'اگر ۱۰۰ دالر کمایی می‌کردم، من' }
  }
};
