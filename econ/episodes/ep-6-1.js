/* COINWALKER · Episode 6.1 · Saving and Investing Basics
   Investor Peaks, a MADE-UP mountain town in the Blue Ridge of Virginia. The hill is the big idea:
   the higher the trail, the more risk, and the better the view (more possible return).
   North-west: the summit lookout (one company's shares: the most risk). North-east: the middle lookout (a fund).
   South-west: the town at the trailhead (the bank, the library, the ranger cabin). South-east: the general store,
   the lake and its dock. A dirt trail (:) climbs from town up the hill.
   People show saving vs investing, risk and return, liquidity, time horizon, inflation and compound growth;
   the ledger stone asks where Sam's $600 for a car repair in 2 months should go (the savings account). */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'EPF',
  title: { en: 'Saving and Investing', es: 'Ahorrar e invertir', fa: 'پس‌انداز و سرمایه‌گذاری' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Investor Peaks trailhead', es: 'Inicio del sendero de Investor Peaks', fa: 'سر راه کوه‌پیمایی قله‌های سرمایه‌گذاری' },
  intro: [
    { en: 'The Grump tore the page about saving and investing. Now people fear the hill.',
      es: 'El Gruñón rompió la página sobre ahorrar e invertir. Ahora la gente le teme a la colina.',
      fa: 'غرغرو صفحهٔ پس‌انداز و سرمایه‌گذاری را پاره کرد. حالا مردم از تپه می‌ترسند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: the Blue Ridge of Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-79.5, 37.9],
    start: [
      { en: 'Investor Peaks is a made-up mountain town in the Blue Ridge of Virginia.',
        es: 'Investor Peaks es un pueblo de montaña inventado en el Blue Ridge de Virginia.',
        fa: 'قله‌های سرمایه‌گذاری یک شهرک کوهستانی ساختگی در کوه‌های بلوریج ویرجینیا است.' },
      { en: 'A trail climbs the hill. Each lookout is higher than the last.',
        es: 'Un sendero sube la colina. Cada mirador está más alto que el anterior.',
        fa: 'یک راه کوه‌پیمایی از تپه بالا می‌رود. هر دیدگاه از قبلی بلندتر است.' },
      { en: 'Here, a higher trail means more risk, but a better view.',
        es: 'Aquí, un sendero más alto significa más riesgo, pero una mejor vista.',
        fa: 'اینجا راه بلندتر یعنی خطر بیشتر، اما منظرهٔ بهتر.' }
    ],
    page: { en: 'Saving keeps money safe. Investing can grow it, but it can also shrink.',
      es: 'Ahorrar mantiene el dinero seguro. Invertir puede hacerlo crecer, pero también achicarlo.',
      fa: 'پس‌انداز پول را امن نگه می‌دارد. سرمایه‌گذاری آن را زیاد می‌کند، اما کم هم کرده می‌تواند.' },
    guess: {
      q: { en: 'Can money you invest go down in value?', es: '¿El dinero que inviertes puede bajar de valor?', fa: 'آیا پولی که سرمایه‌گذاری می‌کنی ارزشش پایین رفته می‌تواند؟' },
      choices: [
        { t: { en: '📉 Yes, it can', es: '📉 Sí, puede', fa: '📉 بله، می‌تواند' }, ok: true },
        { t: { en: '🔒 No, never', es: '🔒 No, nunca', fa: '🔒 نه، هرگز' } }
      ],
      why: { en: 'Yes. Investments can grow or shrink. A chance to gain more means a chance to lose.', es: 'Sí. Las inversiones pueden crecer o achicarse. Poder ganar más es poder perder.', fa: 'بله. سرمایه‌گذاری زیاد یا کم می‌شود. امکان فایدهٔ بیشتر یعنی امکان باختن.' }
    },
    next: {
      q: { en: 'Next: what does it mean to own a share of a company?', es: 'Ahora: ¿qué significa ser dueño de una acción de una empresa?', fa: 'بعدی: داشتن یک سهم یک شرکت یعنی چه؟' },
      choices: [
        { t: { en: '🧩 You own a tiny piece', es: '🧩 Tienes un pedacito', fa: '🧩 یک تکهٔ کوچک مال توست' }, ok: true },
        { t: { en: '💼 You run the company', es: '💼 Tú diriges la empresa', fa: '💼 تو شرکت را اداره می‌کنی' } }
      ],
      why: { en: 'A share is a tiny piece of a company. Its value can go up or down.', es: 'Una acción es un pedacito de una empresa. Su valor puede subir o bajar.', fa: 'سهم یک تکهٔ کوچک یک شرکت است. ارزشش بالا یا پایین رفته می‌تواند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 13], name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      look: { skin: 1, hair: '#1a1008', shirt: '#2f5f8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the town bank! A [[savings account|savings account]] keeps money safe.', es: '¡Bienvenido al banco del pueblo! Una [[savings account|cuenta de ahorros]] guarda el dinero seguro.', fa: 'به بانک شهرک خوش آمدی! یک [[savings account|حساب پس‌انداز]] پول را امن نگه می‌دارد.' },
        { en: 'The bank pays you a little [[interest|interest]] for keeping money here.', es: 'El banco te paga un poco de [[interest|interés]] por guardar tu dinero aquí.', fa: 'بانک برای نگه داشتن پولت اینجا کمی [[interest|سود]] به تو می‌دهد.' },
        { en: 'And you can take your money out on any day you need it.', es: 'Y puedes sacar tu dinero cualquier día que lo necesites.', fa: 'و هر روزی که ضرورت داشتی، پولت را بیرون کرده می‌توانی.' }
      ] },
    { at: [8, 13], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#6a4a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This library book is about [[compound growth|compound growth]]: growth on top of growth.', es: 'Este libro de la biblioteca trata del [[compound growth|crecimiento compuesto]]: crecer sobre lo que creció.', fa: 'این کتاب کتابخانه دربارهٔ [[compound growth|رشد مرکب]] است: رشد بالای رشد.' },
        { en: 'Say $100 grows $10 in a year. Now you have $110.', es: 'Digamos que $100 crecen $10 en un año. Ahora tienes $110.', fa: 'فرض کن ۱۰۰ دالر در یک سال ۱۰ دالر زیاد شود. حالا ۱۱۰ دالر داری.' },
        { en: 'Next year $110 grows $11, to $121. But real growth is never sure.', es: 'Al año siguiente, $110 crecen $11 y llegan a $121. Pero el crecimiento real nunca es seguro.', fa: 'سال بعد ۱۱۰ دالر، ۱۱ دالر زیاد می‌شود و ۱۲۱ دالر می‌شود. اما رشد واقعی هیچ وقت یقینی نیست.' }
      ] },
    { at: [21, 12], name: { en: 'Mrs. Duarte', es: 'Sra. Duarte', fa: 'خانم دوارته' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#c0603a', pants: '#3a3a2a', style: 'long' },
      lines: [
        { en: 'Welcome to my general store! Prices here often rise a little each year.', es: '¡Bienvenido a mi tienda! Aquí los precios suelen subir un poco cada año.', fa: 'به دکان من خوش آمدی! قیمت‌ها اینجا اکثراً هر سال کمی بالا می‌روند.' },
        { en: 'That is called [[inflation|inflation]]. So $20 in a drawer buys less over time.', es: 'Eso se llama [[inflation|inflación]]. Así, $20 en un cajón compran menos con el tiempo.', fa: 'به این [[inflation|تورم]] می‌گویند. پس ۲۰ دالر در یک دراز با گذشت وقت کمتر می‌خرد.' },
        { en: 'That is one reason people invest money for the long term.', es: 'Esa es una razón por la que la gente invierte dinero a largo plazo.', fa: 'این یک دلیل است که مردم پول را برای مدت دراز سرمایه‌گذاری می‌کنند.' }
      ] },
    { at: [3, 17], name: { en: 'Ranger Tom', es: 'Guardabosques Tom', fa: 'جنگلبان تام' },
      look: { skin: 0, hair: '#8a6a3a', shirt: '#5a6a3a', pants: '#4a3a2a', hat: '#6a5a3a', style: 'short' },
      lines: [
        { en: 'Rangers always pack for surprises: rain, a cut, a flat tire.', es: 'Los guardabosques siempre se preparan para sorpresas: lluvia, una cortada, una llanta ponchada.', fa: 'جنگلبان‌ها همیشه برای اتفاق‌های ناگهانی آماده‌اند: باران، زخم، تایر پنچر.' },
        { en: 'Money needs a plan for surprises too: an [[emergency fund|emergency fund]].', es: 'El dinero también necesita un plan para sorpresas: un [[emergency fund|fondo de emergencia]].', fa: 'پول هم برای اتفاق‌های ناگهانی پلان می‌خواهد: یک [[emergency fund|پول اضطراری]].' },
        { en: 'Save that fund first, in a safe place. Then think about investing.', es: 'Primero ahorra ese fondo en un lugar seguro. Después piensa en invertir.', fa: 'اول آن پول را در جای امن پس‌انداز کن. بعد به سرمایه‌گذاری فکر کن.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North is up the hill.
     North-west (y 0-10): the summit lookout on a high plateau, ringed by mountains (M) and hills (K).
     North-east: the middle lookout in the pines (P), with a trail loop.
     Row 8 is the trail across the hill; it climbs from town up column 13.
     South-west: the town: the bank and the library (y 12-13), Main Street (row 15), the ranger cabin (y 16-17).
     South-east: the general store (Q over h), the lake (~) with a dock (k), and flowers (,) on the shore. */
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'MMMMK.......KMMMMPPPPPPPP......M',
    'MMMK..x......KMMPP.......PP.x..M',
    'MMK...........KMP.........P....M',
    'MMMK..........MMP..............M',
    'MMMMK..:.....KMPP...:::::......M',
    'MMMMMK.:...KKMPP....:...:...PPPM',
    'MMPPPK.:..KPPPP.....:...:....PPM',
    'MP...K.::::::::::::::...:.....PM',
    'MP.T.........:..P.......:..T..PM',
    'MP......T....:..T.......:.....PM',
    'TT...........:......QQQ.....TTTT',
    'T.RRR..QQQ...:......hdh..~~~~~~T',
    'T.hdh..hdh...:..........~~~~~~~T',
    'T............:.........~~~~~~~~T',
    'Tlllllllllllllllllllllk~~~~~~~~T',
    'T.RRR........:........~~~~~~~~~T',
    'T.hdh.....x..:.....,,.~~~~~~~~~T',
    'T............:....,,...~~~~~~~~T',
    'T..x....T.....:::......~~~~~~~TT',
    'T..T......T.......T.....~~~~~TTT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [12, 14],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [10, 4], at: [10, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, down to the trail.', es: 'Desde esta nota, camina 4 pasos al sur, hasta el sendero.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، تا راه کوه‌پیمایی.' },
      text: { en: 'An old coin from a jar! Coins in a jar earn no interest at all.', es: '¡Una moneda vieja de un frasco! Las monedas en un frasco no ganan nada de interés.', fa: 'یک سکهٔ کهنه از یک بوتل! سکه‌های داخل بوتل هیچ سودی نمی‌آورند.' } },
    { clueAt: [17, 19], at: [20, 19], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps east, toward the lake.', es: 'Desde esta nota, camina 3 pasos al este, hacia el lago.', fa: 'از این یادداشت، ۳ قدم به شرق برو، به طرف جهیل.' },
      text: { en: 'A shiny lake stone! The lake is low and calm, like a savings account.', es: '¡Una piedra brillante del lago! El lago está bajo y tranquilo, como una cuenta de ahorros.', fa: 'یک سنگ براق جهیل! جهیل پایین و آرام است، مثل یک حساب پس‌انداز.' } }
  ],

  words: {
    saving: { en: 'keeping money in a safe place to use later', es: 'guardar dinero en un lugar seguro para usarlo después', fa: 'نگه داشتن پول در جای امن برای بعد' },
    investing: { en: 'buying things that may grow in value over time, like stocks, bonds or funds', es: 'comprar cosas que pueden subir de valor con el tiempo, como acciones, bonos o fondos', fa: 'خریدن چیزهایی که شاید با گذشت وقت ارزششان بالا برود، مثل سهم، اوراق قرضه یا صندوق' },
    'savings account': { en: 'a bank account that keeps money safe and pays a little interest', es: 'una cuenta del banco que guarda el dinero seguro y paga un poco de interés', fa: 'حساب بانکی که پول را امن نگه می‌دارد و کمی سود می‌دهد' },
    interest: { en: 'money a bank pays you for keeping your money there', es: 'dinero que el banco te paga por guardar tu dinero allí', fa: 'پولی که بانک برای نگه داشتن پولت به تو می‌دهد' },
    risk: { en: 'the chance that you could lose some money', es: 'la posibilidad de perder algo de dinero', fa: 'امکان این که مقداری پول را از دست بدهی' },
    return: { en: 'the money you gain (or lose) from saving or investing', es: 'el dinero que ganas (o pierdes) al ahorrar o invertir', fa: 'پولی که از پس‌انداز یا سرمایه‌گذاری به دست می‌آوری (یا از دست می‌دهی)' },
    liquidity: { en: 'how fast you can turn something into cash', es: 'qué tan rápido puedes convertir algo en dinero en efectivo', fa: 'این که چقدر زود چیزی را به پول نقد تبدیل کرده می‌توانی' },
    'time horizon': { en: 'how long until you need the money', es: 'cuánto tiempo falta para que necesites el dinero', fa: 'این که چقدر وقت مانده تا به پول ضرورت پیدا کنی' },
    inflation: { en: 'prices rising over time, so the same money buys less', es: 'los precios suben con el tiempo, y el mismo dinero compra menos', fa: 'بالا رفتن قیمت‌ها با گذشت وقت، که همان پول کمتر می‌خرد' },
    'compound growth': { en: 'growth on top of growth: your gains start to earn gains', es: 'crecer sobre lo que ya creció: tus ganancias también ganan', fa: 'رشد بالای رشد: فایده‌هایت هم فایده می‌آورند' },
    stocks: { en: 'small pieces of a company that people can buy', es: 'pedacitos de una empresa que la gente puede comprar', fa: 'تکه‌های کوچک یک شرکت که مردم خریده می‌توانند' },
    bonds: { en: 'a loan you give to a company or government, paid back with interest', es: 'un préstamo que le das a una empresa o al gobierno, que te devuelven con interés', fa: 'قرضی که به یک شرکت یا حکومت می‌دهی و با سود پس داده می‌شود' },
    fund: { en: 'one basket that holds many stocks or bonds at once', es: 'una canasta que tiene muchas acciones o bonos a la vez', fa: 'یک سبد که یکجا سهم‌ها یا اوراق قرضهٔ زیاد دارد' },
    'emergency fund': { en: 'money saved for surprises, like a car repair or a doctor bill', es: 'dinero ahorrado para sorpresas, como arreglar el carro o pagar al doctor', fa: 'پول پس‌انداز شده برای اتفاق‌های ناگهانی، مثل ترمیم موتر یا بل داکتر' }
  },

  npcs: [
    {
      x: 11, y: 15,
      name: { en: 'Marisol', es: 'Marisol', fa: 'ماریسول' },
      role: { en: 'Bus driver', es: 'Conductora de autobús', fa: 'دریور بس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e0a030', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I drive the town bus. I [[saving|save]] a little from every paycheck.', es: 'Manejo el autobús del pueblo. [[saving|Ahorro]] un poco de cada sueldo.', fa: 'من بس شهرک را می‌رانم. از هر معاشم کمی [[saving|پس‌انداز]] می‌کنم.' },
        { en: 'Saving means keeping money in a safe place, like a bank.', es: 'Ahorrar es guardar dinero en un lugar seguro, como un banco.', fa: 'پس‌انداز یعنی نگه داشتن پول در جای امن، مثل بانک.' },
        { en: 'My savings grow slowly, but they are easy to reach.', es: 'Mis ahorros crecen despacio, pero puedo sacarlos fácil.', fa: 'پس‌اندازم آهسته زیاد می‌شود، اما به آسانی به آن می‌رسم.' },
        { en: 'How fast you can turn something into cash is [[liquidity|liquidity]].', es: 'Qué tan rápido conviertes algo en efectivo se llama [[liquidity|liquidez]].', fa: 'این که چقدر زود چیزی را به پول نقد تبدیل کنی [[liquidity|نقدینگی]] است.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do people keep some money in a savings account?', es: '¿Por qué la gente guarda algo de dinero en una cuenta de ahorros?', fa: 'چرا مردم مقداری پول را در حساب پس‌انداز نگه می‌دارند؟' },
        choices: [
          { ok: true, t: { en: 'It is safe and easy to reach', es: 'Es seguro y fácil de sacar', fa: 'امن است و به آسانی می‌رسد' },
            why: { en: 'Yes! Savings grow slowly, but they are safe, and you can get the cash fast.', es: '¡Sí! Los ahorros crecen despacio, pero son seguros y sacas el efectivo rápido.', fa: 'بله! پس‌انداز آهسته زیاد می‌شود، اما امن است و پول نقد را زود می‌گیری.' } },
          { t: { en: 'It always grows faster than stocks', es: 'Siempre crece más rápido que las acciones', fa: 'همیشه از سهم‌ها تیزتر زیاد می‌شود' },
            why: { en: 'No. Savings usually grow slowly. They are safe, not fast.', es: 'No. Los ahorros suelen crecer despacio. Son seguros, no rápidos.', fa: 'نه. پس‌انداز اکثراً آهسته زیاد می‌شود. امن است، نه تیز.' } },
          { t: { en: 'It can never be taken out', es: 'Nunca se puede sacar', fa: 'هرگز بیرون کرده نمی‌شود' },
            why: { en: 'No. You can take savings out when you need them. That is liquidity.', es: 'No. Puedes sacar tus ahorros cuando los necesites. Eso es liquidez.', fa: 'نه. هر وقت ضرورت داشتی پس‌اندازت را بیرون می‌کنی. این نقدینگی است.' } }
        ]
      }
    },
    {
      x: 23, y: 3,
      name: { en: 'Hassan', es: 'Hassan', fa: 'حسن' },
      role: { en: 'Retired mail carrier', es: 'Cartero jubilado', fa: 'پسته‌رسان متقاعد' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#3a6aa0', pants: '#3a3a3a', hat: '#a03a2a', style: 'short' },
      lines: [
        { en: 'I hiked up to this middle lookout. The view is better here!', es: '¡Subí hasta este mirador del medio! La vista es mejor aquí.', fa: 'تا این دیدگاه میانه بالا آمدم. منظره اینجا بهتر است!' },
        { en: 'But the trail was steeper. Higher trails have more [[risk|risk]].', es: 'Pero el sendero era más empinado. Los senderos altos tienen más [[risk|riesgo]].', fa: 'اما راه سربالاتر بود. راه‌های بلندتر [[risk|خطر]] بیشتر دارند.' },
        { en: 'Money is like this hill. More risk can bring more [[return|return]].', es: 'El dinero es como esta colina. Más riesgo puede traer más [[return|ganancia]].', fa: 'پول مثل این تپه است. خطر بیشتر شاید [[return|فایدهٔ]] بیشتر بیاورد.' },
        { en: 'But you can also lose money. Risk and return go together.', es: 'Pero también puedes perder dinero. El riesgo y la ganancia van juntos.', fa: 'اما پول را از دست هم داده می‌توانی. خطر و فایده با هم هستند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which is true about risk and return?', es: '¿Qué es cierto sobre el riesgo y la ganancia?', fa: 'دربارهٔ خطر و فایده کدام درست است؟' },
        choices: [
          { ok: true, t: { en: 'More possible gain comes with more risk', es: 'Más ganancia posible viene con más riesgo', fa: 'فایدهٔ ممکن بیشتر با خطر بیشتر می‌آید' },
            why: { en: 'Yes! A chance to earn more comes with a chance to lose more.', es: '¡Sí! La posibilidad de ganar más viene con la de perder más.', fa: 'بله! امکان کمایی بیشتر با امکان باختن بیشتر همراه است.' } },
          { t: { en: 'Low risk always brings the biggest gains', es: 'Poco riesgo siempre trae las mayores ganancias', fa: 'خطر کم همیشه بزرگ‌ترین فایده را می‌آورد' },
            why: { en: 'No. Safe choices usually grow slowly. Big gains come with big risk.', es: 'No. Las opciones seguras suelen crecer despacio. Las grandes ganancias traen gran riesgo.', fa: 'نه. انتخاب‌های امن اکثراً آهسته زیاد می‌شوند. فایدهٔ بزرگ با خطر بزرگ می‌آید.' } },
          { t: { en: 'Risky choices can never lose money', es: 'Las opciones riesgosas nunca pierden dinero', fa: 'انتخاب‌های پرخطر هرگز پول نمی‌بازند' },
            why: { en: 'No. Risky choices can lose money. That is what risk means.', es: 'No. Las opciones riesgosas pueden perder dinero. Eso significa riesgo.', fa: 'نه. انتخاب‌های پرخطر پول را باخته می‌توانند. معنای خطر همین است.' } }
        ]
      }
    },
    {
      x: 8, y: 3,
      name: { en: 'June', es: 'June', fa: 'جون' },
      role: { en: 'Nurse', es: 'Enfermera', fa: 'نرس' },
      look: { skin: 4, hair: '#120c08', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'bun' },
      lines: [
        { en: 'I climb to the summit every year. I am saving to retire someday.', es: 'Subo a la cumbre cada año. Ahorro para jubilarme algún día.', fa: 'هر سال تا سر قله بالا می‌آیم. برای روز متقاعد شدنم پول جمع می‌کنم.' },
        { en: 'I [[investing|invest]] in a [[fund|fund]]: one basket of many [[stocks|stocks]] and [[bonds|bonds]].', es: '[[investing|Invierto]] en un [[fund|fondo]]: una canasta con muchas [[stocks|acciones]] y [[bonds|bonos]].', fa: 'من در یک [[fund|صندوق]] [[investing|سرمایه‌گذاری]] می‌کنم: یک سبد با [[stocks|سهم‌ها]] و [[bonds|اوراق قرضهٔ]] زیاد.' },
        { en: 'I will not need this money for 30 years. That is my [[time horizon|time horizon]].', es: 'No necesitaré este dinero en 30 años. Ese es mi [[time horizon|plazo]].', fa: 'تا ۳۰ سال به این پول ضرورت ندارم. این [[time horizon|مدت زمان]] من است.' },
        { en: 'Some years it drops. Past growth does not promise future growth.', es: 'Algunos años baja. Crecer antes no promete crecer después.', fa: 'بعضی سال‌ها پایین می‌رود. رشد گذشته رشد آینده را وعده نمی‌دهد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'June will not need her money for 30 years. Why can investing fit her?', es: 'June no necesitará su dinero en 30 años. ¿Por qué invertir puede servirle?', fa: 'جون تا ۳۰ سال به پولش ضرورت ندارد. چرا سرمایه‌گذاری برایش مناسب است؟' },
        choices: [
          { ok: true, t: { en: 'She has many years to wait out drops', es: 'Tiene muchos años para esperar si baja', fa: 'سال‌های زیاد دارد تا از پایین آمدن‌ها بگذرد' },
            why: { en: 'Yes! With a long time horizon, she has time to wait out bad years.', es: '¡Sí! Con un plazo largo, tiene tiempo para esperar los años malos.', fa: 'بله! با مدت زمان دراز، وقت دارد تا سال‌های بد بگذرند.' } },
          { t: { en: 'Investments always go up every year', es: 'Las inversiones siempre suben cada año', fa: 'سرمایه‌گذاری همیشه هر سال بالا می‌رود' },
            why: { en: 'No. Investments go up and down. Past growth is no promise.', es: 'No. Las inversiones suben y bajan. Crecer antes no es una promesa.', fa: 'نه. سرمایه‌گذاری بالا و پایین می‌رود. رشد گذشته وعده نیست.' } },
          { t: { en: 'She needs all the cash very soon', es: 'Necesita todo el efectivo muy pronto', fa: 'به همهٔ پول نقد خیلی زود ضرورت دارد' },
            why: { en: 'No. She needs it in 30 years. Money needed soon is better kept in savings.', es: 'No. Lo necesita en 30 años. El dinero que necesitas pronto va mejor en ahorros.', fa: 'نه. پس از ۳۰ سال ضرورت دارد. پولی که زود لازم است بهتر است پس‌انداز شود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 17, text: { en: 'INVESTOR PEAKS · a made-up town in the Blue Ridge, Virginia. The trail goes north, up the hill.', es: 'INVESTOR PEAKS · un pueblo inventado en el Blue Ridge, Virginia. El sendero va al norte, colina arriba.', fa: 'قله‌های سرمایه‌گذاری · شهرک ساختگی در بلوریج، ویرجینیا. راه به شمال، بالای تپه می‌رود.' } },
    { x: 28, y: 2, text: { en: 'MIDDLE LOOKOUT · Steeper than town, but not the top. Some risk, a good view.', es: 'MIRADOR DEL MEDIO · Más empinado que el pueblo, pero no es la cima. Algo de riesgo, buena vista.', fa: 'دیدگاه میانه · از شهرک سربالاتر، اما سر قله نیست. کمی خطر، منظرهٔ خوب.' } },
    { x: 6, y: 2, text: { en: 'SUMMIT LOOKOUT · The highest trail: the most risk and the widest view.', es: 'MIRADOR DE LA CUMBRE · El sendero más alto: el mayor riesgo y la vista más amplia.', fa: 'دیدگاه سر قله · بلندترین راه: بیشترین خطر و وسیع‌ترین منظره.' } },
    { x: 3, y: 19, text: { en: 'MONEY TIP · Save money you need soon. Money for many years may be invested.', es: 'CONSEJO · Ahorra el dinero que necesitas pronto. El dinero para muchos años se puede invertir.', fa: 'رهنمای پول · پولی را که زود لازم داری پس‌انداز کن. پول سال‌های دراز را شاید سرمایه‌گذاری کنی.' } }
  ],

  /* the quest: Pilar the ranger's helper (gold !) by the ranger cabin, south-west -> Teo on the middle trail,
     north-east -> carry the right thing to Abe on the lake dock, south-east -> back to Pilar.
     Abe is building an emergency fund first: only the bank savings book fits that plan. */
  quest: {
    stat: 'loc',
    title: { en: 'Binoculars for the Hike', es: 'Binoculares para la caminata', fa: 'دوربین برای کوه‌پیمایی' },
    giver: {
      x: 6, y: 17,
      name: { en: 'Pilar', es: 'Pilar', fa: 'پیلار' },
      role: { en: 'Ranger\'s helper', es: 'Ayudante del guardabosques', fa: 'کمک‌کار جنگلبان' },
      look: { skin: 3, hair: '#3a2416', shirt: '#6a7a3a', pants: '#4a3a2a', hat: '#8a7a4a', style: 'long' },
      lines: [
        { en: 'I lead a kids\' hike today, but I have no binoculars!', es: 'Hoy guío una caminata de niños, ¡pero no tengo binoculares!', fa: 'امروز کوه‌پیمایی اطفال را رهبری می‌کنم، اما دوربین ندارم!' },
        { en: 'Abe by the lake has old ones. Ask Teo what Abe wants.', es: 'Abe, junto al lago, tiene unos viejos. Pregúntale a Teo qué quiere Abe.', fa: 'ابی کنار جهیل یک دوربین کهنه دارد. از تیو بپرس ابی چه می‌خواهد.' },
        { en: 'Teo is up on the middle trail, north-east of town.', es: 'Teo está arriba, en el sendero del medio, al noreste del pueblo.', fa: 'تیو بالا در راه میانه است، شمال شرق شهرک.' }
      ],
      wait: { en: 'Teo is up on the middle trail, north-east of town.', es: 'Teo está arriba, en el sendero del medio, al noreste del pueblo.', fa: 'تیو بالا در راه میانه است، شمال شرق شهرک.' },
      thanks: { en: 'Binoculars! Abe builds his emergency fund first. A smart plan!', es: '¡Binoculares! Abe arma primero su fondo de emergencia. ¡Un plan inteligente!', fa: 'دوربین! ابی اول پول اضطراری‌اش را جمع می‌کند. یک پلان هوشیارانه!' }
    },
    contact: {
      x: 19, y: 9,
      name: { en: 'Teo', es: 'Teo', fa: 'تیو' },
      role: { en: 'Student who works at the trail shop', es: 'Estudiante que trabaja en la tienda del sendero', fa: 'شاگردی که در دکان راه کوه کار می‌کند' },
      look: { skin: 4, hair: '#1a1208', shirt: '#2f8a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Abe told me his money plan. He wants to invest someday.', es: 'Abe me contó su plan de dinero. Quiere invertir algún día.', fa: 'ابی پلان پولش را به من گفت. می‌خواهد روزی سرمایه‌گذاری کند.' },
        { en: 'But first he wants an emergency fund: safe and easy to reach.', es: 'Pero primero quiere un fondo de emergencia: seguro y fácil de sacar.', fa: 'اما اول پول اضطراری می‌خواهد: امن و آسان برای رسیدن.' },
        { en: 'Bring Abe the thing that fits his plan. He is on the lake dock.', es: 'Llévale a Abe lo que va con su plan. Está en el muelle del lago.', fa: 'چیزی را که با پلان ابی جور است برایش ببر. او روی اسکلهٔ جهیل است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 21, y: 16,
        name: { en: 'Abe', es: 'Abe', fa: 'ابی' },
        role: { en: 'Retired fisher', es: 'Pescador jubilado', fa: 'ماهی‌گیر متقاعد' },
        look: { skin: 1, hair: '#b8b8b8', shirt: '#4a6a8a', pants: '#3a2a1a', hat: '#c8a060', style: 'short' },
        lines: [
          { en: 'These old binoculars were my dad\'s. I will trade them.', es: 'Estos binoculares viejos eran de mi papá. Los voy a cambiar.', fa: 'این دوربین کهنه مال پدرم بود. آن را عوض می‌کنم.' },
          { en: 'I am starting an emergency fund. Bring me something for that!', es: 'Estoy empezando un fondo de emergencia. ¡Tráeme algo para eso!', fa: 'دارم پول اضطراری جمع می‌کنم. چیزی برای آن برایم بیاور!' }
        ]
      },
      q: { en: 'What should you bring Abe for his emergency fund?', es: '¿Qué le llevas a Abe para su fondo de emergencia?', fa: 'برای پول اضطراری ابی چه برایش می‌بری؟' },
      choices: [
        { ok: true, at: [1, 14], icon: '📒', t: { en: 'A bank savings book', es: 'Una libreta de ahorros del banco', fa: 'یک کتابچهٔ پس‌انداز بانک' },
          why: { en: 'Good trade! A savings account keeps his fund safe and easy to reach.', es: '¡Buen trato! Una cuenta de ahorros guarda su fondo seguro y fácil de sacar.', fa: 'معاملهٔ خوب! حساب پس‌انداز پول اضطراری‌اش را امن و در دسترس نگه می‌دارد.' } },
        { at: [19, 13], icon: '🎟️', t: { en: 'A lottery ticket', es: 'Un boleto de lotería', fa: 'یک تکت لاتری' },
          why: { en: 'A lottery ticket almost always loses. An emergency fund must be safe, not a gamble.', es: 'Un boleto de lotería casi siempre pierde. Un fondo de emergencia debe ser seguro, no una apuesta.', fa: 'تکت لاتری تقریباً همیشه می‌بازد. پول اضطراری باید امن باشد، نه قمار.' } },
        { at: [17, 18], icon: '🎣', t: { en: 'A new fishing rod', es: 'Una caña de pescar nueva', fa: 'یک چوب ماهی‌گیری نو' },
          why: { en: 'A new rod is spending, not saving. It does not build his fund.', es: 'Una caña nueva es gastar, no ahorrar. No arma su fondo.', fa: 'چوب نو خرج کردن است، نه پس‌انداز. پول اضطراری‌اش را جمع نمی‌کند.' } }
      ],
      item: { icon: '🔭', name: { en: 'Old binoculars', es: 'Binoculares viejos', fa: 'دوربین کهنه' } }
    }
  },

  scraps: [[30, 1], [2, 9], [20, 20]],
  smudges: [[11, 5], [19, 17]],

  challenge: {
    at: [6, 19],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag at each choice, by height on the hill: the bank in town (low), the middle lookout (a fund), the summit (one company)
    spots: [[5, 14], [25, 4], [9, 2]],
    stat: 'loc',
    title: { en: 'Where should Sam\'s $600 go?', es: '¿Dónde van los $600 de Sam?', fa: '۶۰۰ دالر سام کجا برود؟' },
    intro: { en: 'Sam needs $600 to fix his car in 2 months. He drives it to work. Visit each flag. Then plant your flag and back it up with one reason about time and one about [[risk|risk]].',
      es: 'Sam necesita $600 para arreglar su carro en 2 meses. Lo usa para ir al trabajo. Visita cada bandera. Luego pon tu bandera y apóyala con una razón sobre el tiempo y una sobre el [[risk|riesgo]].',
      fa: 'سام برای ترمیم موترش در ۲ ماه ۶۰۰ دالر لازم دارد. با آن سر کار می‌رود. به هر بیرق سر بزن. بعد بیرقت را بگذار و یک دلیل دربارهٔ وقت و یک دلیل دربارهٔ [[risk|خطر]] بیاور.' },
    options: [
      { icon: '🏦', name: { en: 'A savings account at the bank', es: 'Una cuenta de ahorros en el banco', fa: 'یک حساب پس‌انداز در بانک' },
        desc: { en: 'Low on the hill: safe, easy to reach, slow growth', es: 'Abajo en la colina: seguro, fácil de sacar, crece despacio', fa: 'پایین تپه: امن، آسان برای رسیدن، رشد آهسته' },
        result: { en: 'Sam\'s $600 stays safe and earns a little interest. In 2 months, he fixes his car!', es: 'Los $600 de Sam siguen seguros y ganan un poco de interés. ¡En 2 meses arregla su carro!', fa: '۶۰۰ دالر سام امن می‌ماند و کمی سود می‌آورد. در ۲ ماه موترش را ترمیم می‌کند!' } },
      { icon: '🧺', name: { en: 'A stock fund on the middle trail', es: 'Un fondo de acciones en el sendero del medio', fa: 'یک صندوق سهم در راه میانه' },
        desc: { en: 'Halfway up: many companies in one basket, can go up or down', es: 'A media colina: muchas empresas en una canasta, puede subir o bajar', fa: 'نیمهٔ تپه: شرکت‌های زیاد در یک سبد، بالا یا پایین رفته می‌تواند' },
        result: { en: 'The fund drops this month. Sam has only $540 when the car needs fixing.', es: 'El fondo baja este mes. Sam solo tiene $540 cuando hay que arreglar el carro.', fa: 'صندوق این ماه پایین می‌رود. وقت ترمیم موتر سام فقط ۵۴۰ دالر دارد.' } },
      { icon: '⛰️', name: { en: 'Shares of one company at the summit', es: 'Acciones de una sola empresa en la cumbre', fa: 'سهم‌های یک شرکت در سر قله' },
        desc: { en: 'The top: the most risk, could grow a lot or fall a lot', es: 'La cima: el mayor riesgo, puede crecer mucho o caer mucho', fa: 'سر قله: بیشترین خطر، شاید زیاد بالا یا زیاد پایین برود' },
        result: { en: 'The company has a bad month. Sam has only $300 left, and his car waits.', es: 'La empresa tiene un mal mes. A Sam solo le quedan $300, y su carro espera.', fa: 'شرکت یک ماه بد دارد. برای سام فقط ۳۰۰ دالر می‌ماند و موترش منتظر می‌ماند.' } }
    ],
    kinds: [
      { id: 'time', label: { en: 'Time: when Sam needs the money', es: 'Tiempo: cuándo necesita Sam el dinero', fa: 'وقت: سام چه وقت به پول ضرورت دارد' } },
      { id: 'risk', label: { en: 'Risk: what could happen to the $600', es: 'Riesgo: qué le puede pasar a los $600', fa: 'خطر: چه بر سر ۶۰۰ دالر آمده می‌تواند' } }
    ],
    reasons: [
      { kind: 'time', fits: [0], t: { en: 'He needs it in 2 months, and savings are easy to take out', es: 'Lo necesita en 2 meses, y los ahorros se sacan fácil', fa: 'در ۲ ماه لازم دارد و پس‌انداز به آسانی بیرون می‌شود' },
        why: { en: 'Only the savings account is safe to use in 2 months. Money needed soon should be easy to reach.', es: 'Solo la cuenta de ahorros sirve para 2 meses. El dinero que necesitas pronto debe ser fácil de sacar.', fa: 'فقط حساب پس‌انداز برای ۲ ماه امن است. پولی که زود لازم است باید در دسترس باشد.' } },
      { kind: 'time', fits: [], t: { en: 'Stock prices always go up in 2 months', es: 'Las acciones siempre suben en 2 meses', fa: 'قیمت سهم‌ها در ۲ ماه همیشه بالا می‌رود' },
        why: { en: 'Not true. Prices can fall in any month. Past growth is no promise.', es: 'No es cierto. Los precios pueden caer en cualquier mes. Crecer antes no es una promesa.', fa: 'درست نیست. قیمت‌ها در هر ماه پایین آمده می‌توانند. رشد گذشته وعده نیست.' } },
      { kind: 'time', fits: [], t: { en: 'He can wait 30 years to fix his car', es: 'Puede esperar 30 años para arreglar su carro', fa: 'او برای ترمیم موترش ۳۰ سال صبر کرده می‌تواند' },
        why: { en: 'No. He drives to work. He needs the car fixed in 2 months.', es: 'No. Maneja al trabajo. Necesita el carro arreglado en 2 meses.', fa: 'نه. او با موتر سر کار می‌رود. در ۲ ماه موتر ترمیم شده لازم دارد.' } },
      { kind: 'risk', fits: [0], t: { en: 'His $600 will not drop, and it earns a little interest', es: 'Sus $600 no van a bajar, y ganan un poco de interés', fa: '۶۰۰ دالرش کم نمی‌شود و کمی سود هم می‌آورد' },
        why: { en: 'Only the savings account keeps the $600 safe from drops.', es: 'Solo la cuenta de ahorros protege los $600 de las bajadas.', fa: 'فقط حساب پس‌انداز ۶۰۰ دالر را از پایین آمدن امن نگه می‌دارد.' } },
      { kind: 'risk', fits: [1], t: { en: 'A fund spreads his money over many companies', es: 'Un fondo reparte su dinero entre muchas empresas', fa: 'صندوق پولش را میان شرکت‌های زیاد پخش می‌کند' },
        why: { en: 'True for a fund, but even a fund can drop in 2 months. Sam has no time to wait.', es: 'Cierto para un fondo, pero hasta un fondo puede bajar en 2 meses. Sam no tiene tiempo de esperar.', fa: 'برای صندوق درست است، اما صندوق هم در ۲ ماه پایین آمده می‌تواند. سام وقت صبر ندارد.' } },
      { kind: 'risk', fits: [], t: { en: 'The riskiest choice is always the best one', es: 'La opción más riesgosa siempre es la mejor', fa: 'پرخطرترین انتخاب همیشه بهترین است' },
        why: { en: 'No. More risk means he could lose money he needs soon.', es: 'No. Más riesgo significa que podría perder dinero que necesita pronto.', fa: 'نه. خطر بیشتر یعنی شاید پولی را که زود لازم دارد ببازد.' } }
    ],
    mismatch: { en: 'That reason does not back up the choice you picked.', es: 'Esa razón no apoya la opción que elegiste.', fa: 'این دلیل از انتخابی که کردی پشتیبانی نمی‌کند.' },
    success: { en: 'Sam\'s money is safe! Money needed soon goes in [[saving|savings]]. Money for many years may be invested.', es: '¡El dinero de Sam está seguro! El dinero que necesitas pronto va a los [[saving|ahorros]]. El de muchos años se puede invertir.', fa: 'پول سام امن است! پولی که زود لازم است [[saving|پس‌انداز]] می‌شود. پول سال‌های دراز را شاید سرمایه‌گذاری کنی.' }
  },

  boss: {
    at: [27, 8],
    stat: 'reg',
    need: 3,
    name: { en: 'The Gloomy Grump', es: 'El Gruñón Sombrío', fa: 'غرغروی دلگیر' },
    appear: { en: 'The Gloomy Grump is hiding in the fog on the middle trail!', es: '¡El Gruñón Sombrío se esconde en la niebla del sendero del medio!', fa: 'غرغروی دلگیر در مه راه میانه پنهان است!' },
    taunt: { en: 'Why save? Why invest? Spend it ALL today and forget tomorrow! Grr!', es: '¿Para qué ahorrar? ¿Para qué invertir? ¡Gástalo TODO hoy y olvida el mañana! ¡Grr!', fa: 'چرا پس‌انداز؟ چرا سرمایه‌گذاری؟ همه را امروز خرج کن و فردا را فراموش کن! غرر!' },
    win: { en: 'The fog rolls off the peaks. Ledger page 6.1 floats down into your hands!', es: 'La niebla se va de las cumbres. ¡La página 6.1 del libro cae en tus manos!', fa: 'مه از سر قله‌ها کنار می‌رود. صفحهٔ ۶.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is the main goal of a savings account?', es: '¿Cuál es el objetivo principal de una cuenta de ahorros?', fa: 'هدف اصلی حساب پس‌انداز چیست؟' },
        choices: [
          { en: 'Keep money safe and easy to reach', es: 'Guardar el dinero seguro y fácil de sacar', fa: 'پول را امن و در دسترس نگه دارد' },
          { en: 'Make money grow as fast as it can', es: 'Hacer crecer el dinero lo más rápido posible', fa: 'پول را تا می‌شود تیز زیاد کند' },
          { en: 'Buy a small piece of a company', es: 'Comprar un pedacito de una empresa', fa: 'یک تکهٔ کوچک یک شرکت را بخرد' },
          { en: 'Lend money to a friend for fun', es: 'Prestarle dinero a un amigo por gusto', fa: 'برای خوشی به یک دوست پول قرض بدهد' }],
        answer: 0,
        why: { en: 'Savings accounts are safe and easy to reach. They grow slowly with a little interest.', es: 'Las cuentas de ahorros son seguras y fáciles de sacar. Crecen despacio con un poco de interés.', fa: 'حساب پس‌انداز امن و در دسترس است. با کمی سود آهسته زیاد می‌شود.' } },
      { q: { en: 'What does investing mean?', es: '¿Qué significa invertir?', fa: 'سرمایه‌گذاری یعنی چه؟' },
        choices: [
          { en: 'Buying things that may grow in value', es: 'Comprar cosas que pueden subir de valor', fa: 'خریدن چیزهایی که شاید ارزششان بالا برود' },
          { en: 'Keeping cash in a drawer at home', es: 'Guardar efectivo en un cajón de la casa', fa: 'نگه داشتن پول نقد در دراز خانه' },
          { en: 'Paying every bill before it is due', es: 'Pagar cada cuenta antes de la fecha', fa: 'پرداختن هر بل پیش از وقتش' },
          { en: 'Spending all of your money right away', es: 'Gastar todo tu dinero enseguida', fa: 'همین حالا خرج کردن همهٔ پولت' }],
        answer: 0,
        why: { en: 'Investing is buying things like stocks, bonds or funds. They may grow, but they can also lose value.', es: 'Invertir es comprar cosas como acciones, bonos o fondos. Pueden crecer, pero también perder valor.', fa: 'سرمایه‌گذاری خریدن سهم، اوراق قرضه یا صندوق است. شاید زیاد شوند، اما ارزششان کم هم می‌شود.' } },
      { q: { en: 'A choice could earn a lot more money. What usually comes with that?', es: 'Una opción podría ganar mucho más dinero. ¿Qué suele venir con eso?', fa: 'یک انتخاب شاید پول خیلی بیشتری بیاورد. معمولاً با آن چه می‌آید؟' },
        choices: [
          { en: 'More risk of losing money', es: 'Más riesgo de perder dinero', fa: 'خطر بیشتر باختن پول' },
          { en: 'A promise that it will grow', es: 'Una promesa de que crecerá', fa: 'وعده‌ای که حتماً زیاد می‌شود' },
          { en: 'Less risk than a savings account', es: 'Menos riesgo que una cuenta de ahorros', fa: 'خطر کمتر از حساب پس‌انداز' },
          { en: 'Nothing at all, it is free gain', es: 'Nada, es una ganancia gratis', fa: 'هیچ چیز، فایدهٔ مفت است' }],
        answer: 0,
        why: { en: 'Risk and return go together. A chance to earn more comes with a chance to lose.', es: 'El riesgo y la ganancia van juntos. Poder ganar más viene con poder perder.', fa: 'خطر و فایده با هم هستند. امکان کمایی بیشتر با امکان باختن می‌آید.' } },
      { q: { en: 'Ana is 16. She wants to grow some money for 40 years. What may fit?', es: 'Ana tiene 16 años. Quiere hacer crecer dinero por 40 años. ¿Qué le puede servir?', fa: 'آنا ۱۶ ساله است. می‌خواهد پولی را ۴۰ سال رشد بدهد. چه مناسب است؟' },
        choices: [
          { en: 'Investing for the long term', es: 'Invertir a largo plazo', fa: 'سرمایه‌گذاری برای مدت دراز' },
          { en: 'Cash in a box under her bed', es: 'Efectivo en una caja bajo su cama', fa: 'پول نقد در یک قطی زیر بسترش' },
          { en: 'Spending it all on snacks now', es: 'Gastarlo todo en bocadillos ahora', fa: 'همین حالا همه را برای خوراکه خرج کند' },
          { en: 'Buying a lottery ticket each week', es: 'Comprar un boleto de lotería cada semana', fa: 'هر هفته یک تکت لاتری بخرد' }],
        answer: 0,
        why: { en: 'With 40 years, she has time to wait out bad years. Investing may fit long goals.', es: 'Con 40 años, tiene tiempo para esperar los años malos. Invertir puede servir para metas largas.', fa: 'با ۴۰ سال وقت دارد تا سال‌های بد بگذرند. سرمایه‌گذاری شاید برای هدف‌های دراز مناسب باشد.' } },
      { q: { en: 'Prices rise a little each year. What does that do to cash in a drawer?', es: 'Los precios suben un poco cada año. ¿Qué le pasa al efectivo en un cajón?', fa: 'قیمت‌ها هر سال کمی بالا می‌روند. این به پول نقد داخل دراز چه می‌کند؟' },
        choices: [
          { en: 'It buys a bit less each year', es: 'Compra un poco menos cada año', fa: 'هر سال کمی کمتر می‌خرد' },
          { en: 'It buys a bit more each year', es: 'Compra un poco más cada año', fa: 'هر سال کمی بیشتر می‌خرد' },
          { en: 'It turns into a share of stock', es: 'Se convierte en una acción', fa: 'به یک سهم تبدیل می‌شود' },
          { en: 'It earns interest on its own', es: 'Gana interés solo', fa: 'خودش سود می‌آورد' }],
        answer: 0,
        why: { en: 'That is inflation. It slowly lowers what cash can buy.', es: 'Eso es la inflación. Poco a poco baja lo que el efectivo puede comprar.', fa: 'این تورم است. آهسته آهسته خرید پول نقد را کم می‌کند.' } },
      { q: { en: 'What is liquidity?', es: '¿Qué es la liquidez?', fa: 'نقدینگی چیست؟' },
        choices: [
          { en: 'How fast you can turn something into cash', es: 'Qué tan rápido conviertes algo en efectivo', fa: 'این که چقدر زود چیزی را به پول نقد تبدیل کنی' },
          { en: 'How much interest a bank pays you each year', es: 'Cuánto interés te paga un banco cada año', fa: 'این که بانک هر سال چقدر سود به تو می‌دهد' },
          { en: 'How high a stock price can climb', es: 'Qué tan alto puede subir una acción', fa: 'این که قیمت یک سهم چقدر بالا رفته می‌تواند' },
          { en: 'How many bills you pay each month', es: 'Cuántas cuentas pagas cada mes', fa: 'این که هر ماه چند بل می‌پردازی' }],
        answer: 0,
        why: { en: 'Savings have high liquidity: you can get the cash fast.', es: 'Los ahorros tienen mucha liquidez: puedes sacar el efectivo rápido.', fa: 'پس‌انداز نقدینگی بالا دارد: پول نقد را زود گرفته می‌توانی.' } },
      { q: { en: '$200 grows to $220. Next year it grows on all $220. What is that called?', es: '$200 crecen a $220. Al año siguiente crecen sobre los $220. ¿Cómo se llama eso?', fa: '۲۰۰ دالر ۲۲۰ دالر می‌شود. سال بعد بالای همهٔ ۲۲۰ دالر رشد می‌کند. نامش چیست؟' },
        choices: [
          { en: 'Compound growth', es: 'Crecimiento compuesto', fa: 'رشد مرکب' },
          { en: 'Inflation', es: 'Inflación', fa: 'تورم' },
          { en: 'Liquidity', es: 'Liquidez', fa: 'نقدینگی' },
          { en: 'An emergency fund', es: 'Un fondo de emergencia', fa: 'پول اضطراری' }],
        answer: 0,
        why: { en: 'Compound growth is growth on top of growth. Your gains start to earn gains.', es: 'El crecimiento compuesto es crecer sobre lo que creció. Tus ganancias también ganan.', fa: 'رشد مرکب رشد بالای رشد است. فایده‌هایت هم فایده می‌آورند.' } },
      { q: { en: 'What should most people build before they invest?', es: '¿Qué debería formar la mayoría de la gente antes de invertir?', fa: 'بیشتر مردم پیش از سرمایه‌گذاری چه باید جمع کنند؟' },
        choices: [
          { en: 'An emergency fund in savings', es: 'Un fondo de emergencia en ahorros', fa: 'پول اضطراری در پس‌انداز' },
          { en: 'Shares in just one company', es: 'Acciones de una sola empresa', fa: 'سهم‌های فقط یک شرکت' },
          { en: 'A collection of lottery tickets', es: 'Una colección de boletos de lotería', fa: 'یک دسته تکت لاتری' },
          { en: 'A new car bought with a loan', es: 'Un carro nuevo comprado con préstamo', fa: 'یک موتر نو که با قرض خریده شده' }],
        answer: 0,
        why: { en: 'Save for surprises first, in a safe place. Then invest money you will not need soon.', es: 'Primero ahorra para sorpresas en un lugar seguro. Luego invierte dinero que no necesitarás pronto.', fa: 'اول برای اتفاق‌های ناگهانی در جای امن پس‌انداز کن. بعد پولی را سرمایه‌گذاری کن که زود لازم نداری.' } }
    ]
  },

  learned: [
    { en: '[[saving|Saving]] is safe and easy to reach. [[investing|Investing]] may grow more, but it can lose.', es: '[[saving|Ahorrar]] es seguro y fácil de sacar. [[investing|Invertir]] puede crecer más, pero puede perder.', fa: '[[saving|پس‌انداز]] امن و در دسترس است. [[investing|سرمایه‌گذاری]] شاید بیشتر رشد کند، اما باخته هم می‌تواند.' },
    { en: '[[risk|Risk]] and [[return|return]] go together. Past growth does not promise future growth.', es: 'El [[risk|riesgo]] y la [[return|ganancia]] van juntos. Crecer antes no promete crecer después.', fa: '[[risk|خطر]] و [[return|فایده]] با هم هستند. رشد گذشته رشد آینده را وعده نمی‌دهد.' },
    { en: 'Build an [[emergency fund|emergency fund]] first. Money for many years may be invested.', es: 'Primero arma un [[emergency fund|fondo de emergencia]]. El dinero para muchos años se puede invertir.', fa: 'اول [[emergency fund|پول اضطراری]] جمع کن. پول سال‌های دراز را شاید سرمایه‌گذاری کنی.' }
  ],
  reflect: {
    q: { en: 'Think of a goal you have. Is it soon or many years away? Would you save or invest for it, and why?', es: 'Piensa en una meta que tienes. ¿Es pronto o en muchos años? ¿Ahorrarías o invertirías para ella, y por qué?', fa: 'به یک هدف خود فکر کن. نزدیک است یا سال‌ها دور؟ برایش پس‌انداز می‌کنی یا سرمایه‌گذاری، و چرا؟' },
    starter: { en: 'My goal is', es: 'Mi meta es', fa: 'هدف من ... است' }
  }
};
