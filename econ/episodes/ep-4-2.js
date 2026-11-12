/* COINWALKER · Episode 4.2 · Your Savings (why save, where to save, simple and compound interest)
   Norfolk, Virginia, today: the downtown waterfront on the Elizabeth River.
   North half: a street of buildings along the top (the library and a bike shop in the north-west, the made-up
   community bank "Harborview Savings" and a bakery in the north-east), Main Street paving (row 4), a little plaza
   with flower beds and a fountain (O). South half: the waterfront park with a path loop, a snack stall (m) and the
   riverwalk (row 17). The Elizabeth River (~) runs along the south: the ferry dock (k) in the south-west, the marina
   docks in the south-east.
   People show why we save (goals, emergencies), what interest is, the FDIC, simple and compound interest.
   The quest: Leila lost the jar she kept her savings in (a jar can be lost). The ledger stone: set 3 levers
   (where to keep it, how much each month, how many months) so Leila's emergency fund reaches $600 in time. */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'EPF',
  title: { en: 'Your Savings', es: 'Tus ahorros', fa: 'پس‌انداز تو' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Norfolk waterfront, today', es: 'La costa de Norfolk, hoy', fa: 'کنار آب نورفک، امروز' },
  intro: [
    { en: 'The Grump tore the page about saving. Now people hide their cash in jars!',
      es: 'El Gruñón rompió la página sobre el ahorro. ¡Ahora la gente esconde su dinero en frascos!',
      fa: 'غرغرو صفحهٔ پس‌انداز را پاره کرد. حالا مردم پول نقد خود را در قوطی پنهان می‌کنند!' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Norfolk on the world map (no timeline in this game) */
  scenes: {
    at: [-76.29, 36.845],
    start: [
      { en: 'Norfolk is a port city in Virginia, on the Elizabeth River.',
        es: 'Norfolk es una ciudad portuaria de Virginia, junto al río Elizabeth.',
        fa: 'نورفک یک شهر بندری در ویرجینیا است، کنار دریای الیزابت.' },
      { en: 'Big ships, small boats and a ferry use its busy harbor.',
        es: 'Barcos grandes, botes pequeños y un ferry usan su puerto lleno de vida.',
        fa: 'کشتی‌های بزرگ، قایق‌های کوچک و یک کشتی مسافربری از بندر پرکارش استفاده می‌کنند.' },
      { en: 'Here, people work hard for their pay. Now they must learn to save it.',
        es: 'Aquí la gente trabaja duro por su sueldo. Ahora debe aprender a ahorrarlo.',
        fa: 'اینجا مردم برای معاش خود زحمت می‌کشند. حالا باید پس‌انداز کردن آن را یاد بگیرند.' }
    ],
    page: { en: 'Banks lend out the money people save. That is how they can pay interest.',
      es: 'Los bancos prestan el dinero que la gente ahorra. Así pueden pagar interés.',
      fa: 'بانک‌ها پولی را که مردم پس‌انداز می‌کنند قرض می‌دهند. از همین راه سود پرداخته می‌توانند.' },
    guess: {
      q: { en: 'Can money in a jar at home grow by itself?', es: '¿El dinero en un frasco en casa puede crecer solo?', fa: 'آیا پول در یک قوطی در خانه خودش زیاد می‌شود؟' },
      choices: [
        { t: { en: '🙅 No, it stays the same', es: '🙅 No, sigue igual', fa: '🙅 نه، همان‌قدر می‌ماند' }, ok: true },
        { t: { en: '🌱 Yes, a little each year', es: '🌱 Sí, un poco cada año', fa: '🌱 بله، هر سال کمی' } }
      ],
      why: { en: 'A jar pays no interest. $100 in a jar is still $100 years later.', es: 'Un frasco no paga interés. $100 en un frasco siguen siendo $100 años después.', fa: 'قوطی سود نمی‌دهد. ۱۰۰ دالر در قوطی، سال‌ها بعد هم ۱۰۰ دالر است.' }
    },
    next: {
      q: { en: 'Next: taxes! What do taxes pay for?', es: 'Ahora: ¡los impuestos! ¿Qué pagan los impuestos?', fa: 'بعدی: مالیات! مالیات پول چه چیزها را می‌دهد؟' },
      choices: [
        { t: { en: '🏫 Schools, roads and parks', es: '🏫 Escuelas, calles y parques', fa: '🏫 مکتب، سرک و پارک' }, ok: true },
        { t: { en: '🎁 Prizes for lucky people', es: '🎁 Premios para gente con suerte', fa: '🎁 جایزه برای آدم‌های خوش‌بخت' } }
      ],
      why: { en: 'Taxes help pay for things we share, like public schools, roads, parks and firefighters.', es: 'Los impuestos ayudan a pagar lo que compartimos, como escuelas públicas, calles, parques y bomberos.', fa: 'مالیات در پرداخت چیزهای مشترک کمک می‌کند، مثل مکتب‌های دولتی، سرک‌ها، پارک‌ها و آتش‌نشانی.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Ms. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      look: { skin: 5, hair: '#1a1008', shirt: '#6a4ac0', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the library! We have free books about money.', es: '¡Bienvenido a la biblioteca! Tenemos libros gratis sobre el dinero.', fa: 'به کتابخانه خوش آمدی! ما کتاب‌های مفت دربارهٔ پول داریم.' },
        { en: 'Some people keep cash in a jar at home. A jar pays no interest.', es: 'Algunas personas guardan dinero en un frasco en casa. Un frasco no paga interés.', fa: 'بعضی مردم پول نقد را در قوطی در خانه نگه می‌دارند. قوطی سود نمی‌دهد.' },
        { en: 'And a jar can be lost, stolen, or burned in a fire.', es: 'Y un frasco se puede perder, robar o quemar en un incendio.', fa: 'و قوطی گم، دزدی، یا در آتش سوخته شده می‌تواند.' }
      ] },
    { at: [10, 2], name: { en: 'Mr. Ali', es: 'Sr. Ali', fa: 'آقای علی' },
      look: { skin: 2, hair: '#2a2a2a', shirt: '#2f6f4a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I sell bikes. Last month a girl bought one with her own savings.', es: 'Vendo bicicletas. El mes pasado una chica compró una con sus ahorros.', fa: 'من بایسکل می‌فروشم. ماه گذشته یک دختر با پس‌انداز خودش یکی خرید.' },
        { en: 'Her [[savings goal|savings goal]] was $200. She saved $25 a week.', es: 'Su [[savings goal|meta de ahorro]] era $200. Ahorró $25 por semana.', fa: '[[savings goal|هدف پس‌انداز]] او ۲۰۰ دالر بود. هر هفته ۲۵ دالر پس‌انداز کرد.' },
        { en: '8 weeks times $25 is $200. A clear goal makes saving easier.', es: '8 semanas por $25 son $200. Una meta clara hace más fácil ahorrar.', fa: '۸ هفته ضرب ۲۵ دالر می‌شود ۲۰۰ دالر. هدف روشن پس‌انداز را آسان می‌کند.' }
      ] },
    { at: [20, 2], name: { en: 'Mr. Tran', es: 'Sr. Tran', fa: 'آقای تران' },
      look: { skin: 1, hair: '#120c08', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to Harborview Savings! A [[cd|CD]] pays more interest than savings.', es: '¡Bienvenido a Harborview Savings! Un [[cd|CD]] paga más interés que una cuenta de ahorros.', fa: 'به بانک هاربرویو خوش آمدی! یک [[cd|CD]] از حساب پس‌انداز سود بیشتر می‌دهد.' },
        { en: 'But you leave the money there for a set time. Early? You pay a [[penalty|penalty]].', es: 'Pero dejas el dinero ahí por un tiempo fijo. ¿Lo sacas antes? Pagas una [[penalty|multa]].', fa: 'اما پول را برای یک وقت معین آنجا می‌گذاری. زودتر بکشی؟ [[penalty|جریمه]] می‌پردازی.' },
        { en: 'A [[money market account|money market account]] often pays a bit more than savings, too.', es: 'Una [[money market account|cuenta del mercado monetario]] también suele pagar un poco más.', fa: 'یک [[money market account|حساب بازار پول]] هم اکثراً کمی بیشتر از پس‌انداز سود می‌دهد.' }
      ] },
    { at: [26, 2], name: { en: 'Mrs. Brown', es: 'Sra. Brown', fa: 'خانم براون' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#e07a2a', pants: '#3a3a2a', style: 'long' },
      lines: [
        { en: 'Fresh bread! When I pick a bank, I look at the [[apy|APY]].', es: '¡Pan fresco! Cuando elijo un banco, miro el [[apy|APY]].', fa: 'نان تازه! وقتی بانک انتخاب می‌کنم، به [[apy|APY]] نگاه می‌کنم.' },
        { en: 'APY is what you earn in one year, counting compounding.', es: 'El APY es lo que ganas en un año, contando el interés compuesto.', fa: 'APY همان چیزی است که در یک سال به دست می‌آوری، با حساب سود مرکب.' },
        { en: 'I compare APY at different banks, like I compare flour prices.', es: 'Comparo el APY de varios bancos, como comparo el precio de la harina.', fa: 'من APY بانک‌های مختلف را مقایسه می‌کنم، مثل قیمت آرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): city buildings (U) on the edge. The library (J) and the bike shop (R) in the north-west,
     Harborview Savings (Q) and the bakery (R) in the north-east. Main Street (row 4) with street trees,
     a plaza with flower beds and a fountain (O).
     South (y 11-21): the waterfront park with a path loop (:) and a snack stall (m), the riverwalk (row 17),
     the Elizabeth River (~) with the ferry dock (k) in the south-west and the marina docks in the south-east. */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
    'U.JJJJJ..RRR......QQQQQ..RRR..TU',
    'U.JJdJJ..hdh......hhdhh..hdh...U',
    'U..x...........................U',
    'UllllllllllllllllllllllllllllllU',
    'U.T....T.....T.....T.....T.....U',
    'U..............................U',
    'U..,,,...........,,,,,.........U',
    'U..,,,.........O...............U',
    'U...........................x..U',
    'U.T.......T.........T.......T..U',
    'U..............................U',
    'U.TT..,,,,..TT..........TT.....U',
    'U.....,,,,.....:::::::.........U',
    'U..x...........:.....:...mm....U',
    'U..............:.....:.........U',
    'U...T..T.......:::::::....x....U',
    'UllllllllllllllllllllllllllllllU',
    '~~~kk~~~~~~~~~~~~~~~~~~kk~kk~~~~',
    '~~~kk~~~~~~~~~~~~~~~~~~kk~kk~~~~',
    '~~~kkkk~~~~~~~~~~~~~~~~kk~kk~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [15, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [22, 8], at: [26, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, along the plaza.', es: 'Desde esta nota, camina 4 pasos al este, por la plaza.', fa: 'از این یادداشت، ۴ قدم به شرق برو، در امتداد میدان.' },
      text: { en: 'A lost coin! Money lying around gets lost. A bank keeps it safe.', es: '¡Una moneda perdida! El dinero suelto se pierde. Un banco lo guarda seguro.', fa: 'یک سکهٔ گم‌شده! پولی که این‌طرف و آن‌طرف بماند گم می‌شود. بانک آن را امن نگه می‌دارد.' } },
    { clueAt: [5, 16], at: [10, 16], decor: 'shell',
      clue: { en: 'From this note, walk 5 steps east, through the park.', es: 'Desde esta nota, camina 5 pasos al este, por el parque.', fa: 'از این یادداشت، ۵ قدم به شرق برو، از میان پارک.' },
      text: { en: 'A river shell! The Elizabeth River flows into Hampton Roads, a big harbor.', es: '¡Una concha del río! El río Elizabeth llega a Hampton Roads, un gran puerto.', fa: 'یک صدف دریا! دریای الیزابت به همپتن رودز می‌ریزد، یک بندر بزرگ.' } }
  ],

  words: {
    savings: { en: 'money you keep instead of spending it now', es: 'dinero que guardas en vez de gastarlo ahora', fa: 'پولی که به جای خرج کردن حالا نگه می‌داری' },
    'savings goal': { en: 'a thing you save for, with a price and a date', es: 'algo para lo que ahorras, con un precio y una fecha', fa: 'چیزی که برایش پس‌انداز می‌کنی، با یک قیمت و یک تاریخ' },
    'emergency fund': { en: 'money saved for surprise costs, like a car repair; often 3–6 months of expenses', es: 'dinero ahorrado para gastos sorpresa, como arreglar un carro; a menudo 3 a 6 meses de gastos', fa: 'پولی که برای خرچ‌های ناگهانی، مثل ترمیم موتر، نگه داشته می‌شود؛ اکثراً خرچ ۳ تا ۶ ماه' },
    'savings account': { en: 'a bank account that keeps your money safe and pays interest', es: 'una cuenta del banco que guarda tu dinero seguro y paga interés', fa: 'حساب بانکی که پولت را امن نگه می‌دارد و سود می‌دهد' },
    interest: { en: 'money a bank pays you for keeping your money there', es: 'dinero que el banco te paga por guardar tu dinero allí', fa: 'پولی که بانک برای نگه داشتن پولت به تو می‌دهد' },
    fdic: { en: 'a US government agency that insures bank deposits up to $250,000 per person at each insured bank', es: 'una agencia del gobierno de EE. UU. que asegura los depósitos hasta $250,000 por persona en cada banco asegurado', fa: 'یک ادارهٔ حکومت امریکا که پول بانکی را تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده بیمه می‌کند' },
    cd: { en: 'certificate of deposit: higher interest, but you leave the money for a set time', es: 'certificado de depósito: más interés, pero dejas el dinero por un tiempo fijo', fa: 'سند سپرده: سود بیشتر، اما پول را برای یک وقت معین می‌گذاری' },
    penalty: { en: 'money you must pay for breaking a rule, like taking money out of a CD early', es: 'dinero que pagas por romper una regla, como sacar dinero de un CD antes de tiempo', fa: 'پولی که برای شکستن یک قاعده می‌پردازی، مثل کشیدن زودتر پول از CD' },
    'money market account': { en: 'a bank account that often pays a little more than savings, but may need more money to open', es: 'una cuenta del banco que suele pagar un poco más que la de ahorros, pero puede pedir más dinero para abrirla', fa: 'حساب بانکی که اکثراً کمی بیشتر از پس‌انداز سود می‌دهد، اما شاید برای باز کردنش پول بیشتر لازم باشد' },
    'simple interest': { en: 'interest paid only on the money you put in', es: 'interés que se paga solo sobre el dinero que pusiste', fa: 'سودی که فقط بالای پولی که گذاشتی داده می‌شود' },
    'compound interest': { en: 'interest paid on your money and on the interest it already earned', es: 'interés que se paga sobre tu dinero y sobre el interés que ya ganó', fa: 'سودی که بالای پولت و بالای سودی که قبلاً گرفته داده می‌شود' },
    apy: { en: 'annual percentage yield: what you earn in one year, counting compounding', es: 'rendimiento porcentual anual: lo que ganas en un año, contando el interés compuesto', fa: 'بازده سالانه: آنچه در یک سال به دست می‌آوری، با حساب سود مرکب' }
  },

  npcs: [
    {
      x: 5, y: 6,
      name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      role: { en: 'Student with a part-time job', es: 'Estudiante con trabajo de medio tiempo', fa: 'شاگرد با کار نیمه‌وقت' },
      look: { skin: 5, hair: '#1a1008', shirt: '#c04a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I work at a café after school. I save part of every paycheck.', es: 'Trabajo en un café después de clases. Ahorro parte de cada sueldo.', fa: 'بعد از مکتب در یک کافه کار می‌کنم. از هر معاش کمی پس‌انداز می‌کنم.' },
        { en: 'My [[savings goal|savings goal]] is a $400 laptop for school.', es: 'Mi [[savings goal|meta de ahorro]] es una laptop de $400 para la escuela.', fa: '[[savings goal|هدف پس‌انداز]] من یک لپ‌تاپ ۴۰۰ دالری برای مکتب است.' },
        { en: 'I also keep an [[emergency fund|emergency fund]] for surprises, like a broken phone.', es: 'También tengo un [[emergency fund|fondo de emergencia]] para sorpresas, como un teléfono roto.', fa: 'یک [[emergency fund|پس‌انداز اضطراری]] هم برای چیزهای ناگهانی دارم، مثل تیلفون شکسته.' },
        { en: 'Many experts say: save 3 to 6 months of expenses for emergencies.', es: 'Muchos expertos dicen: ahorra de 3 a 6 meses de gastos para emergencias.', fa: 'بسیاری از کارشناسان می‌گویند: خرچ ۳ تا ۶ ماه را برای حالت اضطرار نگه دار.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What is an emergency fund for?', es: '¿Para qué es un fondo de emergencia?', fa: 'پس‌انداز اضطراری برای چیست؟' },
        choices: [
          { ok: true, t: { en: 'Surprise costs, like a car repair', es: 'Gastos sorpresa, como arreglar el carro', fa: 'خرچ ناگهانی، مثل ترمیم موتر' },
            why: { en: 'Yes! Surprises happen. An emergency fund pays for them, so you do not need a loan.', es: '¡Sí! Las sorpresas pasan. Un fondo de emergencia las paga y no necesitas un préstamo.', fa: 'بله! چیزهای ناگهانی پیش می‌آیند. پس‌انداز اضطراری آنها را می‌پردازد و قرض لازم نمی‌شود.' } },
          { t: { en: 'Fun things, like a new video game', es: 'Cosas divertidas, como un videojuego', fa: 'چیزهای سرگرمی، مثل یک بازی کمپیوتری نو' },
            why: { en: 'No. A game is a want. Save for it with a goal, not with your emergency money.', es: 'No. Un juego es un deseo. Ahorra para él con una meta, no con el dinero de emergencia.', fa: 'نه. بازی یک خواهش است. برایش با هدف پس‌انداز کن، نه با پول اضطراری.' } },
          { t: { en: 'Gifts for friends on their birthday', es: 'Regalos para amigos en su cumpleaños', fa: 'تحفه برای دوستان در روز تولدشان' },
            why: { en: 'No. Birthdays are planned. An emergency fund is for costs you did not plan.', es: 'No. Los cumpleaños se planean. El fondo de emergencia es para gastos que no planeaste.', fa: 'نه. روز تولد از قبل معلوم است. پس‌انداز اضطراری برای خرچ‌های ناگهانی است.' } }
        ]
      }
    },
    {
      x: 23, y: 6,
      name: { en: 'Ms. Silva', es: 'Sra. Silva', fa: 'خانم سیلوا' },
      role: { en: 'Bank teller', es: 'Cajera de banco', fa: 'تحویلدار بانک' },
      look: { skin: 2, hair: '#3a2416', shirt: '#3a9aa0', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'I work at Harborview Savings. People open [[savings account|savings accounts]] there.', es: 'Trabajo en Harborview Savings. Allí la gente abre [[savings account|cuentas de ahorros]].', fa: 'من در بانک هاربرویو کار می‌کنم. مردم آنجا [[savings account|حساب پس‌انداز]] باز می‌کنند.' },
        { en: 'The bank pays you to keep your money there. That is [[interest|interest]].', es: 'El banco te paga por guardar tu dinero allí. Eso es [[interest|interés]].', fa: 'بانک به تو پول می‌دهد که پولت را آنجا نگه داری. این [[interest|سود]] است.' },
        { en: 'If an insured bank fails, the [[fdic|FDIC]] still protects your savings.', es: 'Si un banco asegurado quiebra, la [[fdic|FDIC]] igual protege tus ahorros.', fa: 'اگر یک بانک بیمه‌شده ورشکست شود، [[fdic|FDIC]] باز هم پس‌اندازت را حفظ می‌کند.' },
        { en: 'It covers up to $250,000 per person at each insured bank.', es: 'Cubre hasta $250,000 por persona en cada banco asegurado.', fa: 'تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده را پوشش می‌دهد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What is interest on a savings account?', es: '¿Qué es el interés de una cuenta de ahorros?', fa: 'سود حساب پس‌انداز چیست؟' },
        choices: [
          { ok: true, t: { en: 'Money the bank pays you', es: 'Dinero que el banco te paga', fa: 'پولی که بانک به تو می‌دهد' },
            why: { en: 'Yes! The bank pays you to keep your money there. Your savings grow.', es: '¡Sí! El banco te paga por guardar tu dinero allí. Tus ahorros crecen.', fa: 'بله! بانک برای نگه داشتن پولت به تو پول می‌دهد. پس‌اندازت زیاد می‌شود.' } },
          { t: { en: 'A fee you pay to open it', es: 'Un cobro que pagas al abrirla', fa: 'پولی که برای باز کردنش می‌دهی' },
            why: { en: 'No. Interest on savings is paid TO you, not by you.', es: 'No. El interés de los ahorros te lo pagan A TI, no lo pagas tú.', fa: 'نه. سود پس‌انداز «به تو» داده می‌شود، نه از طرف تو.' } },
          { t: { en: 'Money you must pay back', es: 'Dinero que debes devolver', fa: 'پولی که باید پس بدهی' },
            why: { en: 'No. That sounds like a loan. Interest on savings is yours to keep.', es: 'No. Eso parece un préstamo. El interés de tus ahorros es tuyo.', fa: 'نه. این مثل قرض است. سود پس‌انداز مال خودت است.' } }
        ]
      }
    },
    {
      x: 8, y: 14,
      name: { en: 'Captain Hall', es: 'Capitán Hall', fa: 'کپتان هال' },
      role: { en: 'Retired ferry captain', es: 'Capitán de ferry jubilado', fa: 'کپتان متقاعد کشتی مسافربری' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#f0f0e8', pants: '#2a2a3a', hat: '#1a2a4a', style: 'short' },
      lines: [
        { en: '[[simple interest|Simple interest]] pays only on the money you put in.', es: 'El [[simple interest|interés simple]] paga solo sobre el dinero que pusiste.', fa: '[[simple interest|سود ساده]] فقط بالای پولی که گذاشتی داده می‌شود.' },
        { en: 'Put in $1,000 at 5% simple interest. You earn $50 each year.', es: 'Pon $1,000 al 5% de interés simple. Ganas $50 cada año.', fa: '۱٬۰۰۰ دالر را با ۵٪ سود ساده بگذار. هر سال ۵۰ دالر می‌گیری.' },
        { en: '[[compound interest|Compound interest]] pays interest on your interest, too.', es: 'El [[compound interest|interés compuesto]] también paga interés sobre tu interés.', fa: '[[compound interest|سود مرکب]] بالای سودت هم سود می‌دهد.' },
        { en: 'Year 1: $1,050. Year 2 adds 5% of $1,050. Now: $1,102.50!', es: 'Año 1: $1,050. El año 2 suma el 5% de $1,050. Ahora: ¡$1,102.50!', fa: 'سال ۱: ۱٬۰۵۰ دالر. سال ۲، ۵٪ از ۱٬۰۵۰ اضافه می‌شود. حالا: ۱٬۱۰۲٫۵۰ دالر!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: '$1,000 earns 5% compound interest each year. How much is there after 2 years?', es: '$1,000 ganan 5% de interés compuesto al año. ¿Cuánto hay después de 2 años?', fa: '۱٬۰۰۰ دالر هر سال ۵٪ سود مرکب می‌گیرد. بعد از ۲ سال چقدر می‌شود؟' },
        choices: [
          { ok: true, t: { en: '$1,102.50', es: '$1,102.50', fa: '۱٬۱۰۲٫۵۰ دالر' },
            why: { en: 'Yes! $1,000 becomes $1,050. Then 5% of $1,050 is $52.50. Total: $1,102.50.', es: '¡Sí! $1,000 se vuelven $1,050. Luego el 5% de $1,050 es $52.50. Total: $1,102.50.', fa: 'بله! ۱٬۰۰۰ دالر می‌شود ۱٬۰۵۰. بعد ۵٪ از ۱٬۰۵۰ می‌شود ۵۲٫۵۰. جمله: ۱٬۱۰۲٫۵۰ دالر.' } },
          { t: { en: '$1,100.00', es: '$1,100.00', fa: '۱٬۱۰۰ دالر' },
            why: { en: 'That is simple interest: $50 + $50. Compound interest also pays on the first $50.', es: 'Eso es interés simple: $50 + $50. El compuesto también paga sobre los primeros $50.', fa: 'این سود ساده است: ۵۰ + ۵۰. سود مرکب بالای ۵۰ دالر اول هم سود می‌دهد.' } },
          { t: { en: '$1,010.00', es: '$1,010.00', fa: '۱٬۰۱۰ دالر' },
            why: { en: 'Too low. 5% of $1,000 is $50, not $5. One year alone gives $1,050.', es: 'Muy poco. El 5% de $1,000 es $50, no $5. Solo un año ya da $1,050.', fa: 'خیلی کم است. ۵٪ از ۱٬۰۰۰ دالر ۵۰ است، نه ۵. یک سال تنها ۱٬۰۵۰ می‌شود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 3, text: { en: 'DOWNTOWN NORFOLK, VIRGINIA · The library, shops and Harborview Savings, a community bank.', es: 'CENTRO DE NORFOLK, VIRGINIA · La biblioteca, tiendas y Harborview Savings, un banco del barrio.', fa: 'مرکز شهر نورفک، ویرجینیا · کتابخانه، دکان‌ها و هاربرویو، یک بانک محلی.' } },
    { x: 28, y: 9, text: { en: 'TO THE WATERFRONT · Walk south to the park, the marina and the ferry dock.', es: 'HACIA LA COSTA · Camina al sur hasta el parque, el puerto deportivo y el muelle del ferry.', fa: 'به طرف کنار آب · به جنوب تا پارک، لنگرگاه قایق‌ها و اسکلهٔ کشتی مسافربری برو.' } },
    { x: 3, y: 14, text: { en: 'WATERFRONT PARK · The Elizabeth River flows past downtown Norfolk. The ferry dock is south.', es: 'PARQUE DE LA COSTA · El río Elizabeth pasa por el centro de Norfolk. El muelle del ferry está al sur.', fa: 'پارک کنار آب · دریای الیزابت از کنار مرکز نورفک می‌گذرد. اسکلهٔ کشتی مسافربری در جنوب است.' } },
    { x: 26, y: 16, text: { en: 'MARINA · TIME HELPS: start saving early, and compound interest has more years to grow.', es: 'PUERTO DEPORTIVO · EL TIEMPO AYUDA: ahorra temprano y el interés compuesto tiene más años para crecer.', fa: 'لنگرگاه قایق‌ها · وقت کمک می‌کند: زود پس‌انداز را شروع کن تا سود مرکب سال‌های بیشتری برای رشد داشته باشد.' } }
  ],

  /* the quest: Leila the deckhand (gold !) at the marina, south-east -> Mr. Bell the street sweeper in the
     north-west -> find her lost savings jar at the far end of the ferry dock, south-west -> back to Leila. */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Savings Jar', es: 'El frasco de ahorros perdido', fa: 'قوطی گم‌شدهٔ پس‌انداز' },
    giver: {
      x: 24, y: 16,
      name: { en: 'Leila', es: 'Leila', fa: 'لیلا' },
      role: { en: 'Marina deckhand', es: 'Marinera del puerto deportivo', fa: 'کارگر لنگرگاه قایق‌ها' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#e0803a', pants: '#2a3a5a', hat: '#c0392b', style: 'long' },
      lines: [
        { en: 'Oh no! I kept my savings in a glass jar on my boat.', es: '¡Ay, no! Guardaba mis ahorros en un frasco de vidrio en mi bote.', fa: 'وای! پس‌اندازم را در یک قوطی شیشه‌ای در قایقم نگه می‌داشتم.' },
        { en: 'Now the jar is gone, with $200 inside!', es: '¡Ahora el frasco no está, con $200 adentro!', fa: 'حالا قوطی گم شده، با ۲۰۰ دالر در داخلش!' },
        { en: 'Mr. Bell sweeps Main Street every morning. Maybe he saw it. Ask him!', es: 'El Sr. Bell barre Main Street cada mañana. Tal vez lo vio. ¡Pregúntale!', fa: 'آقای بِل هر صبح سرک عمومی را جارو می‌کند. شاید آن را دیده باشد. از او بپرس!' }
      ],
      wait: { en: 'Mr. Bell sweeps Main Street, in the north-west part of town.', es: 'El Sr. Bell barre Main Street, en la parte noroeste del centro.', fa: 'آقای بِل سرک عمومی را جارو می‌کند، در شمال غرب شهر.' },
      thanks: { en: 'My $200! Today I open a savings account. It is safe and earns interest.', es: '¡Mis $200! Hoy abro una cuenta de ahorros. Es segura y gana interés.', fa: '۲۰۰ دالرم! امروز حساب پس‌انداز باز می‌کنم. امن است و سود می‌دهد.' }
    },
    contact: {
      x: 8, y: 9,
      name: { en: 'Mr. Bell', es: 'Sr. Bell', fa: 'آقای بِل' },
      role: { en: 'Street sweeper', es: 'Barrendero', fa: 'جاروکش سرک' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#e0c040', pants: '#3a3a3a', hat: '#e07a2a', style: 'short' },
      lines: [
        { en: 'A glass jar? Yes! A gull knocked it off a boat this morning.', es: '¿Un frasco de vidrio? ¡Sí! Una gaviota lo tiró de un bote esta mañana.', fa: 'قوطی شیشه‌ای؟ بله! امروز صبح یک مرغ دریایی آن را از قایق انداخت.' },
        { en: 'Cash in a jar is easy to lose. A bank would keep it safe.', es: 'El dinero en un frasco se pierde fácil. Un banco lo guardaría seguro.', fa: 'پول نقد در قوطی زود گم می‌شود. بانک آن را امن نگه می‌داشت.' },
        { en: 'It rolled down to the ferry dock, south-west. Look at the far east end.', es: 'Rodó hasta el muelle del ferry, al suroeste. Busca en la punta del lado este.', fa: 'غلتید تا اسکلهٔ کشتی مسافربری، در جنوب غرب. در آخرین سر شرقی آن ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [6, 20],
      hint: { en: 'Find the jar at the east end of the ferry dock', es: 'Busca el frasco en la punta este del muelle del ferry', fa: 'قوطی را در سر شرقی اسکلهٔ کشتی مسافربری پیدا کن' },
      found: { en: 'Here is Leila\'s jar, with her $200 inside! Cash in a jar is easy to lose.', es: '¡Aquí está el frasco de Leila, con sus $200 adentro! El dinero en un frasco se pierde fácil.', fa: 'این قوطی لیلا است، با ۲۰۰ دالرش! پول نقد در قوطی زود گم می‌شود.' },
      item: { icon: '🫙', name: { en: 'Leila\'s savings jar', es: 'El frasco de ahorros de Leila', fa: 'قوطی پس‌انداز لیلا' } }
    }
  },

  scraps: [[1, 1], [30, 11], [27, 20]],
  smudges: [[12, 7], [20, 12]],

  challenge: {
    at: [18, 14],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the "where" lever by the bank door, the "each month" lever on the plaza, the "how many months" lever by the park
    spots: [[17, 3], [12, 9], [28, 11]],
    stat: 'hei',
    title: { en: 'Leila\'s Emergency Fund', es: 'El fondo de emergencia de Leila', fa: 'پس‌انداز اضطراری لیلا' },
    intro: { en: 'Leila wants a $600 [[emergency fund|emergency fund]] in 6 months. She can save $100 a month at most. She may need the money any day. Set the 3 levers, then test them here.',
      es: 'Leila quiere un [[emergency fund|fondo de emergencia]] de $600 en 6 meses. Puede ahorrar $100 al mes como máximo. Puede necesitar el dinero cualquier día. Mueve las 3 palancas y pruébalas aquí.',
      fa: 'لیلا می‌خواهد در ۶ ماه یک [[emergency fund|پس‌انداز اضطراری]] ۶۰۰ دالری داشته باشد. در ماه بیشتر از ۱۰۰ دالر پس‌انداز کرده نمی‌تواند. شاید هر روز به این پول ضرورت شود. ۳ دسته را تنظیم کن، بعد اینجا امتحانشان کن.' },
    switches: [
      { name: { en: 'Where to keep it', es: 'Dónde guardarlo', fa: 'کجا نگه دارد' }, icon: '🏦', start: 0,
        states: [{ en: 'A jar at home', es: 'Un frasco en casa', fa: 'قوطی در خانه' }, { en: 'A savings account', es: 'Una cuenta de ahorros', fa: 'حساب پس‌انداز' }, { en: 'A 1-year CD', es: 'Un CD de 1 año', fa: 'CD یک‌ساله' }] },
      { name: { en: 'How much each month', es: 'Cuánto cada mes', fa: 'هر ماه چقدر' }, icon: '💵', start: 0,
        states: [{ en: '$50', es: '$50', fa: '۵۰ دالر' }, { en: '$100', es: '$100', fa: '۱۰۰ دالر' }, { en: '$150', es: '$150', fa: '۱۵۰ دالر' }] },
      { name: { en: 'How many months', es: 'Cuántos meses', fa: 'چند ماه' }, icon: '📅', start: 0,
        states: [{ en: '3 months', es: '3 meses', fa: '۳ ماه' }, { en: '6 months', es: '6 meses', fa: '۶ ماه' }, { en: '12 months', es: '12 meses', fa: '۱۲ ماه' }] }
    ],
    results: /*RESULTS*/null,
    otherwise: { ok: false, t: { en: 'Not yet. Try another setting.', es: 'Todavía no. Prueba otra combinación.', fa: 'هنوز نه. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'Leila\'s emergency fund is ready! Save a set amount each month, in a safe place that pays interest.',
      es: '¡El fondo de emergencia de Leila está listo! Ahorra una cantidad fija cada mes, en un lugar seguro que pague interés.',
      fa: 'پس‌انداز اضطراری لیلا آماده است! هر ماه یک مقدار معین را در یک جای امن که سود می‌دهد پس‌انداز کن.' }
  },

  boss: {
    at: [29, 14],
    stat: 'reg',
    need: 3,
    name: { en: 'The Spend-It-All Grump', es: 'El Gruñón Gastalotodo', fa: 'غرغروی همه‌خرچ' },
    appear: { en: 'The Spend-It-All Grump is hiding in the fog by the marina!', es: '¡El Gruñón Gastalotodo se esconde en la niebla junto al puerto deportivo!', fa: 'غرغروی همه‌خرچ در مه کنار لنگرگاه قایق‌ها پنهان است!' },
    taunt: { en: 'Save? Boring! Spend every dollar today. Tomorrow can pay for itself!', es: '¿Ahorrar? ¡Qué aburrido! Gasta cada dólar hoy. ¡Mañana se paga solo!', fa: 'پس‌انداز؟ دلگیر است! هر دالر را امروز خرچ کن. فردا خودش را می‌پردازد!' },
    win: { en: 'The fog lifts off the river. Ledger page 4.2 floats down into your hands!', es: 'La niebla se va del río. ¡La página 4.2 del libro cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۴.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why keep an emergency fund?', es: '¿Por qué tener un fondo de emergencia?', fa: 'چرا پس‌انداز اضطراری داشته باشیم؟' },
        choices: [
          { en: 'To pay for surprises, like a car repair', es: 'Para pagar sorpresas, como arreglar el carro', fa: 'برای پرداخت چیزهای ناگهانی، مثل ترمیم موتر' },
          { en: 'To buy a new game the day it comes out', es: 'Para comprar un juego nuevo el día que sale', fa: 'برای خریدن یک بازی نو در روز اول آن' },
          { en: 'To pay for a trip you planned long ago', es: 'Para pagar un viaje que planeaste hace mucho', fa: 'برای پرداخت سفری که خیلی وقت پیش پلان کردی' },
          { en: 'To lend money to friends when they ask', es: 'Para prestar dinero a amigos cuando lo piden', fa: 'برای قرض دادن به دوستان وقتی می‌خواهند' }],
        answer: 0,
        why: { en: 'An emergency fund pays for surprises. Many experts say 3 to 6 months of expenses.', es: 'Un fondo de emergencia paga las sorpresas. Muchos expertos dicen de 3 a 6 meses de gastos.', fa: 'پس‌انداز اضطراری خرچ‌های ناگهانی را می‌پردازد. کارشناسان می‌گویند خرچ ۳ تا ۶ ماه.' } },
      { q: { en: 'What is one risk of keeping savings in a jar at home?', es: '¿Cuál es un riesgo de guardar los ahorros en un frasco en casa?', fa: 'یک خطر نگه داشتن پس‌انداز در قوطی در خانه چیست؟' },
        choices: [
          { en: 'It can be lost, and it earns no interest', es: 'Se puede perder y no gana interés', fa: 'گم شده می‌تواند و سود نمی‌دهد' },
          { en: 'The bank will charge you a big fee for it', es: 'El banco te cobra mucho dinero por eso', fa: 'بانک برای آن از تو پول زیاد می‌گیرد' },
          { en: 'The money slowly turns into a CD by itself', es: 'El dinero se vuelve un CD poco a poco', fa: 'پول آهسته آهسته خودش CD می‌شود' },
          { en: 'It earns much too much interest each year', es: 'Gana demasiado interés cada año', fa: 'هر سال خیلی زیاد سود می‌دهد' }],
        answer: 0,
        why: { en: 'A jar is not insured and pays nothing. It can be lost, stolen or burned.', es: 'Un frasco no está asegurado y no paga nada. Se puede perder, robar o quemar.', fa: 'قوطی بیمه نیست و هیچ سود نمی‌دهد. گم، دزدی یا سوخته شده می‌تواند.' } },
      { q: { en: 'The FDIC insures savings up to how much per person, at each insured bank?', es: '¿Hasta cuánto asegura la FDIC los ahorros por persona, en cada banco asegurado?', fa: 'FDIC پس‌انداز هر نفر را در هر بانک بیمه‌شده تا چقدر بیمه می‌کند؟' },
        choices: [
          { en: '$250,000', es: '$250,000', fa: '۲۵۰٬۰۰۰ دالر' },
          { en: '$2,500', es: '$2,500', fa: '۲٬۵۰۰ دالر' },
          { en: '$25,000', es: '$25,000', fa: '۲۵٬۰۰۰ دالر' },
          { en: '$2,500,000', es: '$2,500,000', fa: '۲٬۵۰۰٬۰۰۰ دالر' }],
        answer: 0,
        why: { en: 'The FDIC protects up to $250,000 per person at each insured bank, even if it fails.', es: 'La FDIC protege hasta $250,000 por persona en cada banco asegurado, aunque quiebre.', fa: 'FDIC تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده را حفظ می‌کند، حتی اگر ورشکست شود.' } },
      { q: { en: 'What does APY tell you?', es: '¿Qué te dice el APY?', fa: 'APY به تو چه می‌گوید؟' },
        choices: [
          { en: 'What you earn in a year, with compounding', es: 'Lo que ganas en un año, con interés compuesto', fa: 'آنچه در یک سال می‌گیری، با سود مرکب' },
          { en: 'How much a bank pays its tellers each year', es: 'Cuánto paga un banco a sus cajeros al año', fa: 'بانک هر سال چقدر به تحویلدارانش معاش می‌دهد' },
          { en: 'How many days the bank is open in a year', es: 'Cuántos días abre el banco en un año', fa: 'بانک در یک سال چند روز باز است' },
          { en: 'The fee you pay to open a savings account', es: 'Lo que pagas por abrir una cuenta de ahorros', fa: 'پولی که برای باز کردن حساب پس‌انداز می‌دهی' }],
        answer: 0,
        why: { en: 'APY means annual percentage yield. It counts compounding, so you can compare banks fairly.', es: 'APY es el rendimiento porcentual anual. Cuenta el interés compuesto y así comparas bancos.', fa: 'APY یعنی بازده سالانه. سود مرکب را حساب می‌کند، تا بانک‌ها را درست مقایسه کنی.' } },
      { q: { en: '$1,000 earns 5% simple interest. How much interest is that each year?', es: '$1,000 ganan 5% de interés simple. ¿Cuánto interés es cada año?', fa: '۱٬۰۰۰ دالر ۵٪ سود ساده می‌گیرد. هر سال چقدر سود می‌شود؟' },
        choices: [
          { en: '$50', es: '$50', fa: '۵۰ دالر' },
          { en: '$5', es: '$5', fa: '۵ دالر' },
          { en: '$500', es: '$500', fa: '۵۰۰ دالر' },
          { en: '$105', es: '$105', fa: '۱۰۵ دالر' }],
        answer: 0,
        why: { en: '5% of $1,000 is $50. Simple interest pays the same $50 every year.', es: 'El 5% de $1,000 es $50. El interés simple paga los mismos $50 cada año.', fa: '۵٪ از ۱٬۰۰۰ دالر ۵۰ دالر است. سود ساده هر سال همان ۵۰ دالر را می‌دهد.' } },
      { q: { en: 'With compound interest, $1,000 at 5% is $1,050 after 1 year. After 2 years?', es: 'Con interés compuesto, $1,000 al 5% son $1,050 después de 1 año. ¿Y después de 2?', fa: 'با سود مرکب، ۱٬۰۰۰ دالر با ۵٪ بعد از ۱ سال ۱٬۰۵۰ دالر است. بعد از ۲ سال؟' },
        choices: [
          { en: '$1,102.50', es: '$1,102.50', fa: '۱٬۱۰۲٫۵۰ دالر' },
          { en: '$1,100.00', es: '$1,100.00', fa: '۱٬۱۰۰ دالر' },
          { en: '$1,050.00', es: '$1,050.00', fa: '۱٬۰۵۰ دالر' },
          { en: '$1,150.00', es: '$1,150.00', fa: '۱٬۱۵۰ دالر' }],
        answer: 0,
        why: { en: 'Year 2 pays 5% of $1,050, which is $52.50. $1,050 + $52.50 = $1,102.50.', es: 'El año 2 paga el 5% de $1,050, que es $52.50. $1,050 + $52.50 = $1,102.50.', fa: 'سال ۲، ۵٪ از ۱٬۰۵۰ را می‌دهد، یعنی ۵۲٫۵۰. ۱٬۰۵۰ + ۵۲٫۵۰ = ۱٬۱۰۲٫۵۰ دالر.' } },
      { q: { en: 'A CD often pays more interest than savings. What is the catch?', es: 'Un CD suele pagar más interés que una cuenta de ahorros. ¿Cuál es el truco?', fa: 'CD اکثراً از پس‌انداز سود بیشتر می‌دهد. مشکلش چیست؟' },
        choices: [
          { en: 'You pay a penalty to take it out early', es: 'Pagas una multa si lo sacas antes', fa: 'اگر زود بکشی، جریمه می‌پردازی' },
          { en: 'You can never get any of your money back', es: 'Nunca puedes recuperar nada de tu dinero', fa: 'هیچ وقت پولت را پس گرفته نمی‌توانی' },
          { en: 'It earns no interest in the first year', es: 'No gana interés en el primer año', fa: 'در سال اول هیچ سود نمی‌دهد' },
          { en: 'You must add more money to it every week', es: 'Debes ponerle más dinero cada semana', fa: 'باید هر هفته پول بیشتر در آن بگذاری' }],
        answer: 0,
        why: { en: 'You leave the money for a set time. Take it out early, and you pay a penalty.', es: 'Dejas el dinero por un tiempo fijo. Si lo sacas antes, pagas una multa.', fa: 'پول را برای یک وقت معین می‌گذاری. اگر زود بکشی، جریمه می‌پردازی.' } },
      { q: { en: 'Why does starting to save early help?', es: '¿Por qué ayuda empezar a ahorrar temprano?', fa: 'چرا زود شروع کردن پس‌انداز کمک می‌کند؟' },
        choices: [
          { en: 'Compound interest has more years to grow', es: 'El interés compuesto tiene más años para crecer', fa: 'سود مرکب سال‌های بیشتری برای رشد دارد' },
          { en: 'Banks pay a higher rate to younger people', es: 'Los bancos pagan más a la gente joven', fa: 'بانک‌ها به جوانان سود بیشتر می‌دهند' },
          { en: 'Money saved after age 30 is not insured', es: 'El dinero ahorrado después de los 30 no está asegurado', fa: 'پولی که بعد از ۳۰ سالگی پس‌انداز شود بیمه نیست' },
          { en: 'Early savers never have to pay any fees', es: 'Quien ahorra temprano nunca paga cobros', fa: 'کسی که زود پس‌انداز کند هیچ وقت فیس نمی‌دهد' }],
        answer: 0,
        why: { en: 'Interest earns more interest each year. More years means more growth.', es: 'El interés gana más interés cada año. Más años significan más crecimiento.', fa: 'سود هر سال سود بیشتر می‌آورد. سال‌های بیشتر یعنی رشد بیشتر.' } }
    ]
  },

  learned: [
    { en: 'Save for goals and for surprises. An [[emergency fund|emergency fund]] is often 3–6 months of expenses.', es: 'Ahorra para metas y para sorpresas. Un [[emergency fund|fondo de emergencia]] suele ser de 3 a 6 meses de gastos.', fa: 'برای هدف‌ها و چیزهای ناگهانی پس‌انداز کن. [[emergency fund|پس‌انداز اضطراری]] اکثراً خرچ ۳ تا ۶ ماه است.' },
    { en: 'A [[savings account|savings account]] pays [[interest|interest]] and is [[fdic|FDIC]]-insured up to $250,000 per person at each insured bank.', es: 'Una [[savings account|cuenta de ahorros]] paga [[interest|interés]] y la [[fdic|FDIC]] la asegura hasta $250,000 por persona en cada banco asegurado.', fa: '[[savings account|حساب پس‌انداز]] [[interest|سود]] می‌دهد و [[fdic|FDIC]] آن را تا ۲۵۰٬۰۰۰ دالر برای هر نفر در هر بانک بیمه‌شده بیمه می‌کند.' },
    { en: '[[compound interest|Compound interest]] pays interest on interest. Start early, and time helps it grow.', es: 'El [[compound interest|interés compuesto]] paga interés sobre el interés. Empieza temprano y el tiempo lo hace crecer.', fa: '[[compound interest|سود مرکب]] بالای سود هم سود می‌دهد. زود شروع کن تا وقت آن را زیاد کند.' }
  ],
  reflect: {
    q: { en: 'What is one thing you would like to save for? How many months might it take?', es: '¿Para qué cosa te gustaría ahorrar? ¿Cuántos meses podría tomar?', fa: 'دوست داری برای چه چیزی پس‌انداز کنی؟ شاید چند ماه وقت بگیرد؟' },
    starter: { en: 'I would like to save for', es: 'Me gustaría ahorrar para', fa: 'دوست دارم برای ... پس‌انداز کنم' }
  }
};
