/* COINWALKER · Episode 7.1 · Insurance Basics (risk and how insurance works)
   Safe Harbor: a MADE-UP town by the sea, the morning after a big storm.
   North: the insurance office (J), the fire station (R) and the hardware store (Q) on Harbor Road (row 5),
   which runs east to a dock. A tree fell on a car (T over a rock r) and a house has a flooded basement.
   South: the clinic, the town park with its fountain (O), the café with a broken window, and the harbor docks (k).
   People teach risk, the 4 ways to handle it, the risk pool, the deductible and the claim; the ledger stone has
   3 levers for Rosa's car policy (deductible, premium, storm coverage). */
window.EPISODE = {
  id: '7.1',
  realm: 7,
  sol: 'EPF',
  title: { en: 'Insurance Basics', es: 'Lo básico del seguro', fa: 'اساس بیمه' },
  weather: { sky: 'drizzle', time: 'day' },
  place: { en: 'Safe Harbor, after the storm', es: 'Safe Harbor, después de la tormenta', fa: 'بندر امن، بعد از توفان' },
  intro: [
    { en: 'The Grump tore the page about risk. After the storm, people do not know what to do.',
      es: 'El Gruñón rompió la página sobre el riesgo. Tras la tormenta, la gente no sabe qué hacer.',
      fa: 'غرغرو صفحهٔ خطر را پاره کرد. بعد از توفان، مردم نمی‌دانند چه کنند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town on the Virginia coast (no timeline in this game) */
  scenes: {
    at: [-76.1, 37.0],
    start: [
      { en: 'Safe Harbor is a made-up town by the sea.',
        es: 'Safe Harbor es un pueblo inventado junto al mar.',
        fa: 'بندر امن یک شهرک ساختگی کنار بحر است.' },
      { en: 'Last night, a big storm hit the town.',
        es: 'Anoche, una gran tormenta golpeó el pueblo.',
        fa: 'دیشب، یک توفان بزرگ به شهرک رسید.' },
      { en: 'This morning, people look at what they lost. Who will pay for it?',
        es: 'Esta mañana, la gente mira lo que perdió. ¿Quién lo va a pagar?',
        fa: 'امروز صبح، مردم به چیزهایی که از دست دادند نگاه می‌کنند. کی پولش را می‌دهد؟' }
    ],
    page: { en: 'Insurance is very old. Long ago, sea traders shared the risk of losing ships.',
      es: 'El seguro es muy antiguo. Hace mucho, los comerciantes del mar compartían el riesgo de perder barcos.',
      fa: 'بیمه خیلی قدیمی است. خیلی پیش، تاجران بحری خطر از دست دادن کشتی را با هم شریک می‌شدند.' },
    guess: {
      q: { en: 'Can you stop every bad thing from happening?', es: '¿Puedes evitar que pase cualquier cosa mala?', fa: 'آیا می‌توانی جلوی هر اتفاق بد را بگیری؟' },
      choices: [
        { t: { en: '🙅 No, not every one', es: '🙅 No, no todas', fa: '🙅 نه، نه همه را' }, ok: true },
        { t: { en: '🙋 Yes, if careful', es: '🙋 Sí, con cuidado', fa: '🙋 بله، اگر محتاط باشی' } }
      ],
      why: { en: 'Storms and accidents still happen. But you can plan for them.', es: 'Las tormentas y los accidentes igual pasan. Pero puedes prepararte para ellos.', fa: 'توفان و حادثه باز هم پیش می‌آیند. اما می‌توانی برایشان برنامه بریزی.' }
    },
    next: {
      q: { en: 'Next: kinds of insurance. If your apartment is robbed, which one helps?', es: 'Ahora: tipos de seguro. Si roban en tu apartamento, ¿cuál te ayuda?', fa: 'بعدی: انواع بیمه. اگر از آپارتمانت دزدی شود، کدام یکی کمک می‌کند؟' },
      choices: [
        { t: { en: '🔑 Renters insurance', es: '🔑 Seguro de inquilino', fa: '🔑 بیمهٔ کرایه‌نشین' }, ok: true },
        { t: { en: '🚗 Car insurance', es: '🚗 Seguro de auto', fa: '🚗 بیمهٔ موتر' } }
      ],
      why: { en: 'Renters insurance pays for your things in a rented home, like a laptop or a bike.', es: 'El seguro de inquilino paga por tus cosas en un lugar rentado, como una laptop o una bici.', fa: 'بیمهٔ کرایه‌نشین پول چیزهایت را در خانهٔ کرایی می‌دهد، مثل لپ‌تاپ یا بایسکل.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a4a7a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Your [[policy|policy]] is the contract between you and the insurance company.', es: 'Tu [[policy|póliza]] es el contrato entre tú y la compañía de seguros.', fa: '[[policy|بیمه‌نامه]] قرارداد میان تو و شرکت بیمه است.' },
        { en: 'It lists your [[coverage|coverage]]: the losses it will pay for.', es: 'Dice tu [[coverage|cobertura]]: las pérdidas que va a pagar.', fa: 'در آن [[coverage|پوشش]] تو نوشته است: زیان‌هایی که پولش را می‌دهد.' },
        { en: 'The [[limit|limit]] is the most money it will pay.', es: 'El [[limit|límite]] es lo máximo que va a pagar.', fa: '[[limit|حد پوشش]] بیشترین پولی است که می‌پردازد.' }
      ] },
    { at: [12, 2], name: { en: 'Firefighter Kim', es: 'Bombera Kim', fa: 'مامور اطفائیه کیم' },
      look: { skin: 1, hair: '#120c08', shirt: '#b03a2a', pants: '#2a2a2a', hat: '#e0c040', style: 'bun' },
      lines: [
        { en: 'Every home needs smoke alarms. Test them once a month.', es: 'Cada casa necesita alarmas de humo. Pruébalas una vez al mes.', fa: 'هر خانه زنگ خطر دود لازم دارد. ماهی یک بار امتحانش کن.' },
        { en: 'A smoke alarm wakes you up fast. It [[reduce risk|reduces the risk]].', es: 'Una alarma de humo te despierta rápido. [[reduce risk|Reduce el riesgo]].', fa: 'زنگ خطر دود تو را زود بیدار می‌کند. [[reduce risk|خطر را کم می‌کند]].' },
        { en: 'Insurance can pay for things. It cannot replace people. Be safe first.', es: 'El seguro puede pagar cosas. No puede reemplazar a las personas. Primero, la seguridad.', fa: 'بیمه پول چیزها را داده می‌تواند. جای انسان را گرفته نمی‌تواند. اول امنیت.' }
      ] },
    { at: [20, 2], name: { en: 'Mrs. Ito', es: 'Sra. Ito', fa: 'خانم ایتو' },
      look: { skin: 1, hair: '#b8b8b8', shirt: '#4a7a3a', pants: '#3a3a2a', style: 'bun' },
      lines: [
        { en: 'Before the storm, people bought sandbags and flashlights here.', es: 'Antes de la tormenta, la gente compró sacos de arena y linternas aquí.', fa: 'پیش از توفان، مردم از اینجا خریطهٔ ریگ و چراغ دستی خریدند.' },
        { en: 'Getting ready makes the loss smaller. That reduces the risk.', es: 'Prepararse hace la pérdida más pequeña. Eso reduce el riesgo.', fa: 'آماده شدن زیان را کوچک‌تر می‌سازد. این خطر را کم می‌کند.' },
        { en: 'My $15 flashlight broke. I just buy a new one. I [[keep risk|keep that risk]].', es: 'Mi linterna de $15 se rompió. Compro otra y ya. [[keep risk|Me quedo con ese riesgo]].', fa: 'چراغ دستی ۱۵ دالری‌ام شکست. یک نو می‌خرم. [[keep risk|آن خطر را خودم قبول می‌کنم]].' }
      ] },
    { at: [19, 9], name: { en: 'Ms. Grant', es: 'Sra. Grant', fa: 'خانم گرانت' },
      look: { skin: 5, hair: '#1a1008', shirt: '#8a4ac0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Water came into my basement last night!', es: '¡Anoche entró agua en mi sótano!', fa: 'دیشب آب به تهکوی خانه‌ام آمد!' },
        { en: 'Most home policies do not pay for floods.', es: 'La mayoría de las pólizas de casa no pagan inundaciones.', fa: 'بیشتر بیمه‌نامه‌های خانه پول سیلاب را نمی‌دهند.' },
        { en: 'Flood insurance is a separate policy. Read your [[coverage|coverage]] before a storm.', es: 'El seguro de inundación es una póliza aparte. Lee tu [[coverage|cobertura]] antes de una tormenta.', fa: 'بیمهٔ سیلاب یک بیمه‌نامهٔ جدا است. پیش از توفان [[coverage|پوشش]] خود را بخوان.' }
      ] },
    { at: [3, 13], name: { en: 'Nurse Patel', es: 'Enfermero Patel', fa: 'نرس پاتل' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'short' },
      lines: [
        { en: 'Health insurance helps pay for doctor visits.', es: 'El seguro médico ayuda a pagar las visitas al doctor.', fa: 'بیمهٔ صحی در پرداخت پول رفتن به داکتر کمک می‌کند.' },
        { en: 'At each visit, you may pay a [[copay|copay]]: a set amount, like $20.', es: 'En cada visita, quizás pagas un [[copay|copago]]: una cantidad fija, como $20.', fa: 'در هر مراجعه، شاید یک [[copay|پرداخت ثابت]] بدهی: یک مبلغ معین، مثل ۲۰ دالر.' },
        { en: 'Then the insurance helps pay the rest of the bill.', es: 'Luego el seguro ayuda a pagar el resto de la cuenta.', fa: 'بعد بیمه در پرداخت باقی بل کمک می‌کند.' }
      ] },
    { at: [4, 18], name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e07a2a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'A higher [[deductible|deductible]] usually means a lower [[premium|premium]].', es: 'Un [[deductible|deducible]] más alto casi siempre significa una [[premium|prima]] más baja.', fa: '[[deductible|سهم اول]] بلندتر معمولاً یعنی [[premium|حق بیمهٔ]] کمتر.' },
        { en: 'A lower deductible usually means a higher premium.', es: 'Un deducible más bajo casi siempre significa una prima más alta.', fa: 'سهم اول کمتر معمولاً یعنی حق بیمهٔ بلندتر.' },
        { en: 'So pick a deductible you can really pay from your savings.', es: 'Así que elige un deducible que de verdad puedas pagar con tus ahorros.', fa: 'پس سهم اولی را انتخاب کن که واقعاً از پس‌اندازت پرداخته بتوانی.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the insurance office (J), the fire station (R over h) and the hardware store (Q over h);
     Harbor Road (l, row 5) runs east to a dock (k). The fallen tree (T) on a car (r) at (22-23, 7).
     Ms. Grant's house with the flooded basement (Q over h). The harbor water (~) and sand (s) on the east.
     South (y 11-21): the clinic (Q over h), the town park (flowers , and the fountain O) inside a dirt path (:),
     the café (R over h) with the broken window, and two docks in the harbor. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~',
    'T.JJJJJ...RRRR....QQQQ......~~~~',
    'T.JJdJJ...hhdh....hhdh......~~~~',
    'T.........................ss~~~~',
    'T.x.......x...........x...ss~~~~',
    'Tlllllllllllllllllllllllllllkk~~',
    'T....T..........T.........ss~~~~',
    'T.....................Tr....s~~~',
    'T.................QQQ.......s~~~',
    'T.................hdh....x..s~~~',
    'T.T....................x....Ts~~',
    'T...........::::::::::::....s~~~',
    'T.QQQ.......:..........:....s~~~',
    'T.hdh.......:..,,,,,...:...skk~~',
    'T...........:..,,O,,.x.:....s~~~',
    'T.T.........:..,,,,,...:....s~~~',
    'T...........::::::::::::....s~~~',
    'T..RRR.......................s~~',
    'T..hdh..x...............x...kk~~',
    'T..........T.........T......s~~~',
    'T..T............T..........T.s~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~'
  ],
  start: [14, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 3], at: [15, 3], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east along the road.', es: 'Desde esta nota, camina 4 pasos al este por la calle.', fa: 'از این یادداشت، ۴ قدم به شرق در امتداد سرک برو.' },
      text: { en: 'An old coin! A little money saved can pay for a small loss.', es: '¡Una moneda antigua! Un poco de dinero ahorrado puede pagar una pérdida pequeña.', fa: 'یک سکهٔ قدیمی! کمی پول پس‌انداز شده می‌تواند پول یک زیان کوچک را بدهد.' } },
    { clueAt: [26, 12], at: [26, 15], decor: 'shell',
      clue: { en: 'From this note, walk 3 steps south, along the harbor.', es: 'Desde esta nota, camina 3 pasos al sur, junto al puerto.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، کنار بندر.' },
      text: { en: 'A shell the storm washed up! Towns by the sea plan for storms every year.', es: '¡Una concha que trajo la tormenta! Los pueblos junto al mar se preparan para tormentas cada año.', fa: 'یک صدف که توفان آورد! شهرهای کنار بحر هر سال برای توفان آماده می‌شوند.' } }
  ],

  words: {
    risk: { en: 'the chance that you lose something or get hurt', es: 'la posibilidad de perder algo o lastimarte', fa: 'احتمال این که چیزی را از دست بدهی یا آسیب ببینی' },
    insurance: { en: 'a plan where many people pay a little, so the few with losses get help', es: 'un plan donde muchos pagan un poco, para ayudar a los pocos que pierden algo', fa: 'یک برنامه که در آن مردم زیاد کمی پول می‌دهند تا به چند نفر زیان‌دیده کمک شود' },
    pool: { en: 'one big fund that many people pay into and share', es: 'un fondo grande al que muchos pagan y que comparten', fa: 'یک صندوق بزرگ که مردم زیاد در آن پول می‌گذارند و شریک هستند' },
    policy: { en: 'the contract between you and the insurance company', es: 'el contrato entre tú y la compañía de seguros', fa: 'قرارداد میان تو و شرکت بیمه' },
    premium: { en: 'what you pay for insurance, each month or each year', es: 'lo que pagas por el seguro, cada mes o cada año', fa: 'پولی که برای بیمه می‌دهی، هر ماه یا هر سال' },
    deductible: { en: 'what you pay first, before the insurance pays', es: 'lo que pagas primero, antes de que pague el seguro', fa: 'پولی که اول خودت می‌دهی، پیش از این که بیمه بپردازد' },
    claim: { en: 'asking the insurance company to pay for a loss', es: 'pedirle a la compañía de seguros que pague una pérdida', fa: 'درخواست از شرکت بیمه که پول یک زیان را بدهد' },
    coverage: { en: 'the losses a policy will pay for', es: 'las pérdidas que una póliza va a pagar', fa: 'زیان‌هایی که بیمه‌نامه پولش را می‌دهد' },
    limit: { en: 'the most money a policy will pay', es: 'lo máximo que una póliza va a pagar', fa: 'بیشترین پولی که بیمه‌نامه می‌پردازد' },
    copay: { en: 'a set amount you pay at each doctor visit', es: 'una cantidad fija que pagas en cada visita al doctor', fa: 'یک مبلغ معین که در هر مراجعه به داکتر می‌دهی' },
    'emergency fund': { en: 'money saved only for surprise costs', es: 'dinero ahorrado solo para gastos inesperados', fa: 'پولی که فقط برای خرچ‌های ناگهانی پس‌انداز شده' },
    'avoid risk': { en: 'stay away from the danger, so the loss cannot happen', es: 'alejarte del peligro, para que la pérdida no pase', fa: 'از خطر دوری کنی تا زیان پیش نیاید' },
    'reduce risk': { en: 'make a loss less likely or smaller, like with a helmet', es: 'hacer una pérdida menos probable o más pequeña, como con un casco', fa: 'زیان را کم‌احتمال‌تر یا کوچک‌تر بسازی، مثل با کلاه ایمنی' },
    'keep risk': { en: 'accept a small risk and pay small losses yourself', es: 'aceptar un riesgo pequeño y pagar tú las pérdidas pequeñas', fa: 'خطر کوچک را قبول کنی و زیان‌های کوچک را خودت بپردازی' },
    'transfer risk': { en: 'pass the cost of a big loss to someone else, like an insurance company', es: 'pasarle el costo de una pérdida grande a otro, como una compañía de seguros', fa: 'هزینهٔ یک زیان بزرگ را به دیگری بسپاری، مثل شرکت بیمه' }
  },

  npcs: [
    {
      x: 6, y: 3,
      name: { en: 'Ms. Adeyemi', es: 'Sra. Adeyemi', fa: 'خانم ادیمی' },
      role: { en: 'Insurance agent', es: 'Agente de seguros', fa: 'نمایندهٔ بیمه' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f6f4a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Good morning. The storm hurt many homes and cars last night.', es: 'Buenos días. Anoche la tormenta dañó muchas casas y autos.', fa: 'صبح بخیر. دیشب توفان به خانه‌ها و موترهای زیاد آسیب زد.' },
        { en: '[[risk|Risk]] is the chance that you lose something.', es: 'El [[risk|riesgo]] es la posibilidad de perder algo.', fa: '[[risk|خطر]] احتمال از دست دادن چیزی است.' },
        { en: 'With [[insurance|insurance]], many people pay a small [[premium|premium]] into one [[pool|pool]].', es: 'Con un [[insurance|seguro]], muchas personas pagan una pequeña [[premium|prima]] a un [[pool|fondo común]].', fa: 'در [[insurance|بیمه]]، مردم زیاد یک [[premium|حق بیمهٔ]] کوچک در یک [[pool|صندوق مشترک]] می‌گذارند.' },
        { en: 'Only a few people have a big loss. The pool pays them.', es: 'Solo unas pocas personas tienen una pérdida grande. El fondo les paga.', fa: 'فقط چند نفر زیان بزرگ می‌بینند. صندوق به آنها پول می‌دهد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How does insurance work?', es: '¿Cómo funciona el seguro?', fa: 'بیمه چطور کار می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Many pay in, and the few with losses get paid', es: 'Muchos pagan, y a los pocos que pierden se les paga', fa: 'مردم زیاد پول می‌دهند و چند زیان‌دیده پول می‌گیرند' },
            why: { en: 'Yes! Many small premiums go into one pool. It pays the few big losses.', es: '¡Sí! Muchas primas pequeñas van a un fondo. Ese fondo paga las pocas pérdidas grandes.', fa: 'بله! حق بیمه‌های کوچک زیاد در یک صندوق می‌روند. آن صندوق زیان‌های بزرگ کم را می‌پردازد.' } },
          { t: { en: 'Each person saves only for their own losses', es: 'Cada persona ahorra solo para sus propias pérdidas', fa: 'هر کس فقط برای زیان‌های خودش پس‌انداز می‌کند' },
            why: { en: 'That is saving, not insurance. Insurance shares the risk among many people.', es: 'Eso es ahorrar, no un seguro. El seguro reparte el riesgo entre muchas personas.', fa: 'این پس‌انداز است، نه بیمه. بیمه خطر را میان مردم زیاد تقسیم می‌کند.' } },
          { t: { en: 'The town pays for every loss after a storm', es: 'El pueblo paga cada pérdida después de una tormenta', fa: 'شهرک پول هر زیان را بعد از توفان می‌دهد' },
            why: { en: 'No. The people who pay premiums fill the pool. The pool pays the losses.', es: 'No. Las personas que pagan primas llenan el fondo. El fondo paga las pérdidas.', fa: 'نه. کسانی که حق بیمه می‌دهند صندوق را پر می‌کنند. صندوق زیان‌ها را می‌پردازد.' } }
        ]
      }
    },
    {
      x: 24, y: 7,
      name: { en: 'Mr. Nguyen', es: 'Sr. Nguyen', fa: 'آقای نگوین' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#3a5a9a', pants: '#2a2a2a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'Look! A tree fell on my car last night.', es: '¡Mira! Anoche un árbol cayó sobre mi auto.', fa: 'ببین! دیشب یک درخت روی موترم افتاد.' },
        { en: 'I called my insurance company to make a [[claim|claim]].', es: 'Llamé a mi compañía de seguros para hacer un [[claim|reclamo]].', fa: 'به شرکت بیمه‌ام زنگ زدم تا [[claim|درخواست خسارت]] بدهم.' },
        { en: 'The repair costs $1,200. My [[deductible|deductible]] is $500.', es: 'La reparación cuesta $1,200. Mi [[deductible|deducible]] es de $500.', fa: 'ترمیم ۱۲۰۰ دالر خرچ دارد. [[deductible|سهم اول]] من ۵۰۰ دالر است.' },
        { en: 'I pay the first $500. Insurance pays the other $700.', es: 'Yo pago los primeros $500. El seguro paga los otros $700.', fa: 'من ۵۰۰ دالر اول را می‌دهم. بیمه ۷۰۰ دالر دیگر را می‌دهد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A repair costs $800. The deductible is $500. How much does insurance pay?', es: 'Una reparación cuesta $800. El deducible es de $500. ¿Cuánto paga el seguro?', fa: 'یک ترمیم ۸۰۰ دالر خرچ دارد. سهم اول ۵۰۰ دالر است. بیمه چقدر می‌پردازد؟' },
        choices: [
          { ok: true, t: { en: '$300', es: '$300', fa: '۳۰۰ دالر' },
            why: { en: 'Yes! $800 minus the $500 deductible is $300. Insurance pays $300.', es: '¡Sí! $800 menos el deducible de $500 son $300. El seguro paga $300.', fa: 'بله! ۸۰۰ منفی ۵۰۰ دالر سهم اول می‌شود ۳۰۰. بیمه ۳۰۰ دالر می‌دهد.' } },
          { t: { en: '$500', es: '$500', fa: '۵۰۰ دالر' },
            why: { en: 'No. $500 is the deductible. The owner pays that part first.', es: 'No. $500 es el deducible. El dueño paga esa parte primero.', fa: 'نه. ۵۰۰ دالر سهم اول است. صاحب موتر آن را اول می‌دهد.' } },
          { t: { en: '$800', es: '$800', fa: '۸۰۰ دالر' },
            why: { en: 'No. Insurance does not pay it all. Take away the $500 deductible first.', es: 'No. El seguro no lo paga todo. Primero resta el deducible de $500.', fa: 'نه. بیمه همه را نمی‌دهد. اول ۵۰۰ دالر سهم اول را کم کن.' } }
        ]
      }
    },
    {
      x: 9, y: 14,
      name: { en: 'Captain Reyes', es: 'Capitana Reyes', fa: 'کپتان ریس' },
      role: { en: 'Firefighter', es: 'Bombera', fa: 'مامور اطفائیه' },
      look: { skin: 3, hair: '#1a1208', shirt: '#b03a2a', pants: '#2a2a2a', hat: '#e0c040', style: 'long' },
      lines: [
        { en: 'There are 4 ways to handle a risk.', es: 'Hay 4 maneras de manejar un riesgo.', fa: 'برای روبرو شدن با خطر ۴ راه هست.' },
        { en: '[[avoid risk|Avoid]] it: stay off the roads in a big storm.', es: '[[avoid risk|Evitarlo]]: no salir a la calle en una gran tormenta.', fa: '[[avoid risk|دوری کردن]]: در توفان بزرگ به سرک نروی.' },
        { en: '[[reduce risk|Reduce]] it: smoke alarms and bike helmets lower the harm.', es: '[[reduce risk|Reducirlo]]: las alarmas de humo y los cascos bajan el daño.', fa: '[[reduce risk|کم کردن]]: زنگ خطر دود و کلاه ایمنی آسیب را کم می‌کنند.' },
        { en: '[[keep risk|Keep]] it: pay small losses yourself. Or [[transfer risk|transfer]] it: buy insurance.', es: '[[keep risk|Quedártelo]]: pagar tú las pérdidas pequeñas. O [[transfer risk|transferirlo]]: comprar un seguro.', fa: '[[keep risk|قبول کردن]]: زیان کوچک را خودت بدهی. یا [[transfer risk|سپردن]]: بیمه بخری.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Maya wears a helmet when she rides her bike. Which way to handle risk is that?', es: 'Maya usa casco cuando anda en bici. ¿Qué manera de manejar el riesgo es esa?', fa: 'مایا وقت بایسکل‌سواری کلاه ایمنی می‌پوشد. این کدام راه روبرو شدن با خطر است؟' },
        choices: [
          { ok: true, t: { en: 'Reduce the risk', es: 'Reducir el riesgo', fa: 'کم کردن خطر' },
            why: { en: 'Yes! She still rides, but the helmet makes a fall less harmful.', es: '¡Sí! Igual anda en bici, pero el casco hace que una caída dañe menos.', fa: 'بله! باز هم بایسکل می‌راند، اما کلاه ایمنی آسیب افتادن را کم می‌کند.' } },
          { t: { en: 'Avoid the risk', es: 'Evitar el riesgo', fa: 'دوری از خطر' },
            why: { en: 'No. To avoid it, Maya would stop riding. She still rides.', es: 'No. Para evitarlo, Maya dejaría de andar en bici. Pero sigue andando.', fa: 'نه. برای دوری، مایا باید بایسکل‌سواری را بس کند. او هنوز می‌راند.' } },
          { t: { en: 'Transfer the risk', es: 'Transferir el riesgo', fa: 'سپردن خطر' },
            why: { en: 'No. Transferring means paying someone else, like an insurance company, to take the cost.', es: 'No. Transferir es pagarle a otro, como a una compañía de seguros, para que cubra el costo.', fa: 'نه. سپردن یعنی به دیگری، مثل شرکت بیمه، پول بدهی تا هزینه را بپذیرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'INSURANCE OFFICE · Ask about car, home and health policies.', es: 'OFICINA DE SEGUROS · Pregunta por pólizas de auto, casa y salud.', fa: 'دفتر بیمه · دربارهٔ بیمه‌نامهٔ موتر، خانه و صحت بپرس.' } },
    { x: 10, y: 4, text: { en: 'FIRE STATION · Test your smoke alarms every month.', es: 'ESTACIÓN DE BOMBEROS · Prueba tus alarmas de humo cada mes.', fa: 'اطفائیه · زنگ خطر دود خود را هر ماه امتحان کن.' } },
    { x: 22, y: 4, text: { en: 'HARDWARE STORE · Sandbags, flashlights, smoke alarms. Getting ready reduces risk.', es: 'FERRETERÍA · Sacos de arena, linternas, alarmas de humo. Prepararse reduce el riesgo.', fa: 'دکان ابزار · خریطهٔ ریگ، چراغ دستی، زنگ خطر دود. آماده شدن خطر را کم می‌کند.' } },
    { x: 23, y: 10, text: { en: 'STORM DAMAGE · A tree fell on a car here last night.', es: 'DAÑOS DE LA TORMENTA · Anoche un árbol cayó sobre un auto aquí.', fa: 'آسیب توفان · دیشب اینجا یک درخت روی یک موتر افتاد.' } },
    { x: 25, y: 9, text: { en: 'FLOODED BASEMENT · Most home policies do not cover floods. Check your coverage.', es: 'SÓTANO INUNDADO · Casi ninguna póliza de casa cubre inundaciones. Revisa tu cobertura.', fa: 'تهکوی پر از آب · بیشتر بیمه‌نامه‌های خانه سیلاب را نمی‌پوشانند. پوشش خود را ببین.' } },
    { x: 21, y: 14, text: { en: 'CAR POLICY OFFERS · $250 deductible: $60 a month · $500: $45 a month · $1,000: $30 a month', es: 'OFERTAS DE PÓLIZA DE AUTO · Deducible de $250: $60 al mes · $500: $45 al mes · $1,000: $30 al mes', fa: 'پیشنهادهای بیمهٔ موتر · سهم اول ۲۵۰ دالر: ماهی ۶۰ دالر · ۵۰۰: ماهی ۴۵ دالر · ۱۰۰۰: ماهی ۳۰ دالر' } },
    { x: 8, y: 18, text: { en: 'HARBOR CAFÉ · Closed today. The storm broke our window.', es: 'CAFÉ DEL PUERTO · Cerrado hoy. La tormenta rompió nuestra ventana.', fa: 'کافهٔ بندر · امروز بسته است. توفان کلکین ما را شکست.' } },
    { x: 24, y: 18, text: { en: 'THE HARBOR · Boats were tied tight before the storm. That reduced the risk.', es: 'EL PUERTO · Los barcos se amarraron bien antes de la tormenta. Eso redujo el riesgo.', fa: 'بندر · کشتی‌ها پیش از توفان محکم بسته شدند. این خطر را کم کرد.' } }
  ],

  /* the quest: Mr. Silva at the café (south-west, gold !) -> Ana at the hardware store (north-east)
     -> carry the right thing to Ms. Ortiz the claims adjuster at the harbor (south-east) -> back to Mr. Silva.
     Only proof of the damage makes a claim work: not a wish list, and not a policy bought after the storm. */
  quest: {
    stat: 'mov',
    title: { en: 'The Broken Café Window', es: 'La ventana rota del café', fa: 'کلکین شکستهٔ کافه' },
    giver: {
      x: 7, y: 17,
      name: { en: 'Mr. Silva', es: 'Sr. Silva', fa: 'آقای سیلوا' },
      role: { en: 'Café owner', es: 'Dueño del café', fa: 'صاحب کافه' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#f0f0e8', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'The storm broke my café window last night!', es: '¡Anoche la tormenta rompió la ventana de mi café!', fa: 'دیشب توفان کلکین کافهٔ مرا شکست!' },
        { en: 'I want to make a claim. Ana at the hardware store knows how.', es: 'Quiero hacer un reclamo. Ana, de la ferretería, sabe cómo.', fa: 'می‌خواهم درخواست خسارت بدهم. آنا در دکان ابزار می‌داند چطور.' }
      ],
      wait: { en: 'Ana works at the hardware store, in the north-east of town.', es: 'Ana trabaja en la ferretería, en el noreste del pueblo.', fa: 'آنا در دکان ابزار، در شمال شرق شهرک، کار می‌کند.' },
      thanks: { en: 'The window costs $900. My deductible is $250. Insurance pays $650!', es: 'La ventana cuesta $900. Mi deducible es de $250. ¡El seguro paga $650!', fa: 'کلکین ۹۰۰ دالر خرچ دارد. سهم اول من ۲۵۰ دالر است. بیمه ۶۵۰ دالر می‌دهد!' }
    },
    contact: {
      x: 19, y: 3,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Hardware store clerk', es: 'Empleada de la ferretería', fa: 'کارمند دکان ابزار' },
      look: { skin: 4, hair: '#1a1008', shirt: '#c04a8a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Before a claim is paid, the company checks the damage.', es: 'Antes de pagar un reclamo, la compañía revisa el daño.', fa: 'پیش از پرداخت خسارت، شرکت آسیب را می‌بیند.' },
        { en: 'Ms. Ortiz checks claims at the harbor. Bring her proof of the damage!', es: 'La Sra. Ortiz revisa reclamos en el puerto. ¡Llévale una prueba del daño!', fa: 'خانم اورتیز در بندر خسارت‌ها را می‌بیند. ثبوت آسیب را برایش ببر!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 26, y: 17,
        name: { en: 'Ms. Ortiz', es: 'Sra. Ortiz', fa: 'خانم اورتیز' },
        role: { en: 'Claims adjuster', es: 'Ajustadora de reclamos', fa: 'بررسی‌کنندهٔ خسارت' },
        look: { skin: 0, hair: '#8a5a2a', shirt: '#3a6a8a', pants: '#2a2a2a', style: 'bun' },
        lines: [
          { en: 'I check the damage before the company pays a claim.', es: 'Reviso el daño antes de que la compañía pague un reclamo.', fa: 'پیش از این که شرکت خسارت را بپردازد، من آسیب را می‌بینم.' },
          { en: 'Insurance pays for real losses. Show me what happened.', es: 'El seguro paga pérdidas reales. Muéstrame qué pasó.', fa: 'بیمه پول زیان واقعی را می‌دهد. به من نشان بده چه شد.' }
        ]
      },
      q: { en: 'What should you bring Ms. Ortiz, so the café claim can be paid?', es: '¿Qué le llevas a la Sra. Ortiz para que paguen el reclamo del café?', fa: 'چه چیزی را برای خانم اورتیز ببری تا خسارت کافه پرداخته شود؟' },
      choices: [
        { ok: true, at: [10, 20], icon: '📸', t: { en: 'Photos of the broken window', es: 'Fotos de la ventana rota', fa: 'عکس‌های کلکین شکسته' },
          why: { en: 'Yes! Photos show the real damage. Now the claim can be paid.', es: '¡Sí! Las fotos muestran el daño real. Ahora pueden pagar el reclamo.', fa: 'بله! عکس‌ها آسیب واقعی را نشان می‌دهند. حالا خسارت پرداخته می‌شود.' } },
        { at: [13, 8], icon: '📝', t: { en: 'A list of things he wants', es: 'Una lista de cosas que quiere', fa: 'فهرست چیزهایی که می‌خواهد' },
          why: { en: 'Insurance pays for real losses, not for new wants. Bring proof of the damage.', es: 'El seguro paga pérdidas reales, no deseos nuevos. Lleva una prueba del daño.', fa: 'بیمه پول زیان واقعی را می‌دهد، نه خواهش‌های نو را. ثبوت آسیب را بیاور.' } },
        { at: [3, 4], icon: '📄', t: { en: 'A new policy signed today', es: 'Una póliza nueva firmada hoy', fa: 'یک بیمه‌نامهٔ نو که امروز امضا شد' },
          why: { en: 'A policy bought after the storm does not cover that storm. You must buy it before.', es: 'Una póliza comprada después de la tormenta no cubre esa tormenta. Hay que comprarla antes.', fa: 'بیمه‌نامه‌ای که بعد از توفان خریده شود، آن توفان را نمی‌پوشاند. باید پیش از آن خرید.' } }
      ],
      item: { icon: '✅', name: { en: 'An approved claim', es: 'Un reclamo aprobado', fa: 'یک درخواست خسارت قبول‌شده' } }
    }
  },

  scraps: [[1, 1], [29, 13], [1, 20]],
  smudges: [[12, 8], [18, 19]],

  challenge: {
    at: [20, 12],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the deductible lever by the road in the north-west, the premium lever by the harbor in the north-east,
    // the storm lever in the south-west; the offer board (sign) stands by the stone in the park
    spots: [[6, 10], [27, 7], [14, 19]],
    stat: 'mov',
    title: { en: 'Pick Rosa\'s car policy', es: 'Elige la póliza de auto de Rosa', fa: 'بیمه‌نامهٔ موتر روزا را انتخاب کن' },
    intro: { en: 'Rosa needs car insurance. She has $600 in her [[emergency fund|emergency fund]]. She can pay $45 a month. Read the offer board, set the 3 levers, then test them here.',
      es: 'Rosa necesita seguro de auto. Tiene $600 en su [[emergency fund|fondo de emergencia]]. Puede pagar $45 al mes. Lee las ofertas, mueve las 3 palancas y pruébalas aquí.',
      fa: 'روزا بیمهٔ موتر لازم دارد. او ۶۰۰ دالر در [[emergency fund|پس‌انداز اضطراری]] خود دارد. ماهی ۴۵ دالر داده می‌تواند. پیشنهادها را بخوان، ۳ دسته را تنظیم کن، بعد اینجا امتحان کن.' },
    switches: [
      { name: { en: 'Deductible', es: 'Deducible', fa: 'سهم اول' }, icon: '💵', start: 0,
        states: [{ en: '$250', es: '$250', fa: '۲۵۰ دالر' }, { en: '$500', es: '$500', fa: '۵۰۰ دالر' }, { en: '$1,000', es: '$1,000', fa: '۱۰۰۰ دالر' }] },
      { name: { en: 'Premium', es: 'Prima', fa: 'حق بیمه' }, icon: '📅', start: 2,
        states: [{ en: '$60 a month', es: '$60 al mes', fa: 'ماهی ۶۰ دالر' }, { en: '$45 a month', es: '$45 al mes', fa: 'ماهی ۴۵ دالر' }, { en: '$30 a month', es: '$30 al mes', fa: 'ماهی ۳۰ دالر' }] },
      { name: { en: 'Storm damage', es: 'Daños por tormenta', fa: 'آسیب توفان' }, icon: '🌪️', start: 1,
        states: [{ en: 'Covered', es: 'Cubiertos', fa: 'پوشش دارد' }, { en: 'Not covered', es: 'Sin cobertura', fa: 'پوشش ندارد' }] }
    ],
    results: {
      '0,0,0': { ok: false,
        t: { en: 'A real offer: $250 with $60 a month. But Rosa can pay only $45 a month.', es: 'Una oferta real: $250 con $60 al mes. Pero Rosa solo puede pagar $45 al mes.', fa: 'یک پیشنهاد واقعی: ۲۵۰ دالر با ماهی ۶۰ دالر. اما روزا فقط ماهی ۴۵ دالر داده می‌تواند.' },
        show: [{ icon: '💵', ok: true, t: { en: '$250: she can pay it', es: '$250: lo puede pagar', fa: '۲۵۰ دالر: داده می‌تواند' } }, { icon: '📅', ok: false, t: { en: '$60 a month: too much', es: '$60 al mes: es demasiado', fa: 'ماهی ۶۰ دالر: زیاد است' } }] },
      '0,1,0': { ok: false,
        t: { en: 'No such offer. A $250 deductible costs $60 a month. Read the offer board.', es: 'No hay esa oferta. Un deducible de $250 cuesta $60 al mes. Lee las ofertas.', fa: 'چنین پیشنهادی نیست. سهم اول ۲۵۰ دالر ماهی ۶۰ دالر است. پیشنهادها را بخوان.' },
        show: [{ icon: '⛔', ok: false, t: { en: 'no such offer', es: 'esa oferta no existe', fa: 'چنین پیشنهادی نیست' } }] },
      '0,2,0': { ok: false,
        t: { en: 'No such offer. A low deductible never comes with the lowest premium.', es: 'No hay esa oferta. Un deducible bajo nunca viene con la prima más baja.', fa: 'چنین پیشنهادی نیست. سهم اول کم هیچ وقت با کمترین حق بیمه نمی‌آید.' },
        show: [{ icon: '⛔', ok: false, t: { en: 'no such offer', es: 'esa oferta no existe', fa: 'چنین پیشنهادی نیست' } }] },
      '1,0,0': { ok: false,
        t: { en: 'No such offer. A $500 deductible costs $45 a month, not $60.', es: 'No hay esa oferta. Un deducible de $500 cuesta $45 al mes, no $60.', fa: 'چنین پیشنهادی نیست. سهم اول ۵۰۰ دالر ماهی ۴۵ دالر است، نه ۶۰.' },
        show: [{ icon: '⛔', ok: false, t: { en: 'no such offer', es: 'esa oferta no existe', fa: 'چنین پیشنهادی نیست' } }] },
      '1,1,0': { ok: true,
        t: { en: 'Rosa can pay $500 from her $600 fund. And $45 a month fits her budget!', es: 'Rosa puede pagar $500 de su fondo de $600. ¡Y $45 al mes cabe en su presupuesto!', fa: 'روزا ۵۰۰ دالر را از ۶۰۰ دالر پس‌اندازش داده می‌تواند. و ماهی ۴۵ دالر در بودجه‌اش جا دارد!' },
        show: [{ icon: '💵', ok: true, t: { en: '$500: she can pay it', es: '$500: lo puede pagar', fa: '۵۰۰ دالر: داده می‌تواند' } }, { icon: '📅', ok: true, t: { en: '$45 a month: fits', es: '$45 al mes: le alcanza', fa: 'ماهی ۴۵ دالر: جا دارد' } }, { icon: '🌪️', ok: true, t: { en: 'storm damage covered', es: 'tormenta cubierta', fa: 'توفان پوشش دارد' } }] },
      '1,2,0': { ok: false,
        t: { en: 'No such offer. The $30 premium goes with the $1,000 deductible.', es: 'No hay esa oferta. La prima de $30 va con el deducible de $1,000.', fa: 'چنین پیشنهادی نیست. حق بیمهٔ ۳۰ دالر با سهم اول ۱۰۰۰ دالر است.' },
        show: [{ icon: '⛔', ok: false, t: { en: 'no such offer', es: 'esa oferta no existe', fa: 'چنین پیشنهادی نیست' } }] },
      '2,0,0': { ok: false,
        t: { en: 'A bad deal! A high deductible should mean a low premium. And $1,000 is more than $600.', es: '¡Mal trato! Un deducible alto debe traer una prima baja. Y $1,000 es más que $600.', fa: 'معاملهٔ بد! سهم اول بلند باید حق بیمهٔ کم داشته باشد. و ۱۰۰۰ دالر از ۶۰۰ بیشتر است.' },
        show: [{ icon: '💵', ok: false, t: { en: '$1,000: more than her fund', es: '$1,000: más que su fondo', fa: '۱۰۰۰ دالر: بیشتر از پس‌اندازش' } }, { icon: '📅', ok: false, t: { en: '$60 a month: too much', es: '$60 al mes: es demasiado', fa: 'ماهی ۶۰ دالر: زیاد است' } }] },
      '2,1,0': { ok: false,
        t: { en: 'No such offer. A $1,000 deductible costs $30 a month, not $45.', es: 'No hay esa oferta. Un deducible de $1,000 cuesta $30 al mes, no $45.', fa: 'چنین پیشنهادی نیست. سهم اول ۱۰۰۰ دالر ماهی ۳۰ دالر است، نه ۴۵.' },
        show: [{ icon: '⛔', ok: false, t: { en: 'no such offer', es: 'esa oferta no existe', fa: 'چنین پیشنهادی نیست' } }] },
      '2,2,0': { ok: false,
        t: { en: 'A real offer, and cheap. But Rosa has only $600. After a crash, she could not pay $1,000.', es: 'Una oferta real y barata. Pero Rosa solo tiene $600. Tras un choque, no podría pagar $1,000.', fa: 'یک پیشنهاد واقعی و ارزان. اما روزا فقط ۶۰۰ دالر دارد. بعد از تصادم، ۱۰۰۰ دالر داده نمی‌تواند.' },
        show: [{ icon: '💵', ok: false, t: { en: '$1,000: more than her fund', es: '$1,000: más que su fondo', fa: '۱۰۰۰ دالر: بیشتر از پس‌اندازش' } }, { icon: '📅', ok: true, t: { en: '$30 a month: fits', es: '$30 al mes: le alcanza', fa: 'ماهی ۳۰ دالر: جا دارد' } }] }
    },
    otherwise: { ok: false,
      t: { en: 'Storm damage is not covered! If a tree falls on her car, the policy pays nothing.', es: '¡Los daños por tormenta no están cubiertos! Si un árbol cae en su auto, la póliza no paga nada.', fa: 'آسیب توفان پوشش ندارد! اگر درخت روی موترش بیفتد، بیمه‌نامه هیچ پولی نمی‌دهد.' },
      show: [{ icon: '🌪️', ok: false, t: { en: 'storm damage not covered', es: 'tormenta sin cobertura', fa: 'توفان پوشش ندارد' } }] },
    success: { en: 'Rosa picked a $500 deductible at $45 a month, with storm coverage. She can pay both parts!',
      es: 'Rosa eligió un deducible de $500 a $45 al mes, con cobertura de tormenta. ¡Puede pagar las dos partes!',
      fa: 'روزا سهم اول ۵۰۰ دالر را با ماهی ۴۵ دالر و پوشش توفان انتخاب کرد. هر دو بخش را داده می‌تواند!' }
  },

  boss: {
    at: [29, 18],
    stat: 'mov',
    need: 3,
    name: { en: 'The Storm Grump', es: 'El Gruñón de la Tormenta', fa: 'غرغروی توفان' },
    appear: { en: 'The Storm Grump is hiding in the fog on the harbor dock!', es: '¡El Gruñón de la Tormenta se esconde en la niebla del muelle!', fa: 'غرغروی توفان در مه روی اسکلهٔ بندر پنهان است!' },
    taunt: { en: 'Insurance? Bah! Just hope nothing bad ever happens to you!', es: '¿Seguro? ¡Bah! ¡Solo espera que nunca te pase nada malo!', fa: 'بیمه؟ هه! فقط امیدوار باش که هیچ وقت اتفاق بدی برایت نیفتد!' },
    win: { en: 'The storm clouds clear. Ledger page 7.1 drifts down into your hands!', es: 'Las nubes de tormenta se van. ¡La página 7.1 del libro cae en tus manos!', fa: 'ابرهای توفان کنار می‌روند. صفحهٔ ۷.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is risk?', es: '¿Qué es el riesgo?', fa: 'خطر چیست؟' },
        choices: [
          { en: 'The chance of losing something', es: 'La posibilidad de perder algo', fa: 'احتمال از دست دادن چیزی' },
          { en: 'A bill you must pay every month', es: 'Una cuenta que pagas cada mes', fa: 'بلی که باید هر ماه بپردازی' },
          { en: 'Money that a bank pays you', es: 'Dinero que un banco te paga', fa: 'پولی که بانک به تو می‌دهد' },
          { en: 'A safe place to keep your cash', es: 'Un lugar seguro para tu efectivo', fa: 'یک جای امن برای پول نقد' }],
        answer: 0,
        why: { en: 'Risk is the chance that you lose something or get hurt.', es: 'El riesgo es la posibilidad de perder algo o lastimarte.', fa: 'خطر احتمال این است که چیزی را از دست بدهی یا آسیب ببینی.' } },
      { q: { en: 'What is a premium?', es: '¿Qué es una prima?', fa: 'حق بیمه چیست؟' },
        choices: [
          { en: 'What you pay for a policy each month', es: 'Lo que pagas por una póliza cada mes', fa: 'پولی که هر ماه برای بیمه‌نامه می‌دهی' },
          { en: 'What you pay first after a loss', es: 'Lo que pagas primero tras una pérdida', fa: 'پولی که بعد از زیان اول می‌دهی' },
          { en: 'The most the insurance will ever pay', es: 'Lo máximo que el seguro va a pagar', fa: 'بیشترین پولی که بیمه می‌پردازد' },
          { en: 'A form you fill out after a crash', es: 'Un formulario que llenas tras un choque', fa: 'فورمی که بعد از تصادم پر می‌کنی' }],
        answer: 0,
        why: { en: 'The premium is the price of insurance. You pay it each month or each year.', es: 'La prima es el precio del seguro. La pagas cada mes o cada año.', fa: 'حق بیمه قیمت بیمه است. آن را هر ماه یا هر سال می‌دهی.' } },
      { q: { en: 'What is a deductible?', es: '¿Qué es un deducible?', fa: 'سهم اول چیست؟' },
        choices: [
          { en: 'What you pay before insurance pays', es: 'Lo que pagas antes de que pague el seguro', fa: 'پولی که پیش از پرداخت بیمه می‌دهی' },
          { en: 'What you pay each month for a policy', es: 'Lo que pagas cada mes por una póliza', fa: 'پولی که هر ماه برای بیمه‌نامه می‌دهی' },
          { en: 'The money insurance sends after a loss', es: 'El dinero que manda el seguro tras una pérdida', fa: 'پولی که بیمه بعد از زیان می‌فرستد' },
          { en: 'The contract between you and a company', es: 'El contrato entre tú y una compañía', fa: 'قرارداد میان تو و یک شرکت' }],
        answer: 0,
        why: { en: 'You pay the deductible first. Then the insurance pays the rest, up to the limit.', es: 'Primero pagas el deducible. Luego el seguro paga el resto, hasta el límite.', fa: 'اول سهم اول را می‌دهی. بعد بیمه باقی را تا حد پوشش می‌پردازد.' } },
      { q: { en: 'A repair costs $1,200. The deductible is $500. How much does insurance pay?', es: 'Una reparación cuesta $1,200. El deducible es de $500. ¿Cuánto paga el seguro?', fa: 'یک ترمیم ۱۲۰۰ دالر خرچ دارد. سهم اول ۵۰۰ دالر است. بیمه چقدر می‌پردازد؟' },
        choices: [
          { en: '$700', es: '$700', fa: '۷۰۰ دالر' },
          { en: '$500', es: '$500', fa: '۵۰۰ دالر' },
          { en: '$1,200', es: '$1,200', fa: '۱۲۰۰ دالر' },
          { en: '$1,700', es: '$1,700', fa: '۱۷۰۰ دالر' }],
        answer: 0,
        why: { en: '$1,200 minus the $500 deductible is $700. Insurance pays $700.', es: '$1,200 menos el deducible de $500 son $700. El seguro paga $700.', fa: '۱۲۰۰ منفی ۵۰۰ دالر سهم اول می‌شود ۷۰۰. بیمه ۷۰۰ دالر می‌دهد.' } },
      { q: { en: 'You pick a higher deductible. What usually happens to your premium?', es: 'Eliges un deducible más alto. ¿Qué pasa casi siempre con tu prima?', fa: 'سهم اول بلندتر را انتخاب می‌کنی. معمولاً حق بیمه‌ات چه می‌شود؟' },
        choices: [
          { en: 'It goes down', es: 'Baja', fa: 'کم می‌شود' },
          { en: 'It goes up', es: 'Sube', fa: 'زیاد می‌شود' },
          { en: 'It stays the same', es: 'Se queda igual', fa: 'همان طور می‌ماند' },
          { en: 'It becomes zero', es: 'Llega a cero', fa: 'صفر می‌شود' }],
        answer: 0,
        why: { en: 'You agree to pay more first, so the company charges you a lower premium.', es: 'Aceptas pagar más primero, así que la compañía te cobra una prima más baja.', fa: 'قبول می‌کنی اول بیشتر بدهی، پس شرکت از تو حق بیمهٔ کمتر می‌گیرد.' } },
      { q: { en: 'A family puts smoke alarms in their home. Which way to handle risk is that?', es: 'Una familia pone alarmas de humo en su casa. ¿Qué manera de manejar el riesgo es esa?', fa: 'یک خانواده در خانه‌اش زنگ خطر دود می‌گذارد. این کدام راه روبرو شدن با خطر است؟' },
        choices: [
          { en: 'Reduce the risk', es: 'Reducir el riesgo', fa: 'کم کردن خطر' },
          { en: 'Avoid the risk', es: 'Evitar el riesgo', fa: 'دوری از خطر' },
          { en: 'Keep the risk', es: 'Quedarse con el riesgo', fa: 'قبول کردن خطر' },
          { en: 'Transfer the risk', es: 'Transferir el riesgo', fa: 'سپردن خطر' }],
        answer: 0,
        why: { en: 'Smoke alarms warn people early. That makes harm from a fire less likely.', es: 'Las alarmas de humo avisan temprano. Así es menos probable que un incendio haga daño.', fa: 'زنگ خطر دود مردم را زود خبر می‌کند. پس آسیب آتش کم‌احتمال‌تر می‌شود.' } },
      { q: { en: 'You pay a small premium so a company pays for big losses. Which way is that?', es: 'Pagas una prima pequeña para que una compañía pague las pérdidas grandes. ¿Qué manera es esa?', fa: 'حق بیمهٔ کوچک می‌دهی تا یک شرکت زیان‌های بزرگ را بپردازد. این کدام راه است؟' },
        choices: [
          { en: 'Transfer the risk', es: 'Transferir el riesgo', fa: 'سپردن خطر' },
          { en: 'Avoid the risk', es: 'Evitar el riesgo', fa: 'دوری از خطر' },
          { en: 'Keep the risk', es: 'Quedarse con el riesgo', fa: 'قبول کردن خطر' },
          { en: 'Reduce the risk', es: 'Reducir el riesgo', fa: 'کم کردن خطر' }],
        answer: 0,
        why: { en: 'Buying insurance moves the cost of a big loss to the insurance company.', es: 'Comprar un seguro pasa el costo de una pérdida grande a la compañía de seguros.', fa: 'خریدن بیمه هزینهٔ زیان بزرگ را به شرکت بیمه می‌سپارد.' } },
      { q: { en: 'What is a claim?', es: '¿Qué es un reclamo?', fa: 'درخواست خسارت چیست؟' },
        choices: [
          { en: 'Asking the company to pay for a loss', es: 'Pedir a la compañía que pague una pérdida', fa: 'خواستن از شرکت که پول زیان را بدهد' },
          { en: 'The monthly price of a car policy', es: 'El precio mensual de una póliza de auto', fa: 'قیمت ماهانهٔ بیمه‌نامهٔ موتر' },
          { en: 'A list of every loss a policy covers', es: 'Una lista de las pérdidas que cubre una póliza', fa: 'فهرست همهٔ زیان‌هایی که بیمه‌نامه می‌پوشاند' },
          { en: 'A tool from the store that lowers risk', es: 'Una herramienta de la tienda que baja el riesgo', fa: 'یک ابزار از دکان که خطر را کم می‌کند' }],
        answer: 0,
        why: { en: 'After a loss, you make a claim. You ask the insurance company to pay.', es: 'Después de una pérdida, haces un reclamo. Le pides a la compañía de seguros que pague.', fa: 'بعد از زیان، درخواست خسارت می‌دهی. از شرکت بیمه می‌خواهی که بپردازد.' } }
    ]
  },

  learned: [
    { en: '[[risk|Risk]] is the chance of losing something. You can avoid, reduce, keep or transfer it.', es: 'El [[risk|riesgo]] es la posibilidad de perder algo. Puedes evitarlo, reducirlo, quedártelo o transferirlo.', fa: '[[risk|خطر]] احتمال از دست دادن چیزی است. می‌توانی از آن دوری کنی، کمش کنی، قبولش کنی یا بسپاری‌اش.' },
    { en: 'With [[insurance|insurance]], many people pay a [[premium|premium]] into a pool. The few with losses get paid.', es: 'Con un [[insurance|seguro]], muchos pagan una [[premium|prima]] a un fondo. A los pocos que pierden algo se les paga.', fa: 'در [[insurance|بیمه]]، مردم زیاد [[premium|حق بیمه]] را در یک صندوق می‌گذارند. به چند زیان‌دیده پول داده می‌شود.' },
    { en: 'You pay the [[deductible|deductible]] first. A higher deductible usually means a lower premium.', es: 'Primero pagas el [[deductible|deducible]]. Un deducible más alto casi siempre significa una prima más baja.', fa: 'اول [[deductible|سهم اول]] را می‌دهی. سهم اول بلندتر معمولاً یعنی حق بیمهٔ کمتر.' }
  ],
  reflect: {
    q: { en: 'Think of something you own, like a phone or a bike. How could you protect it from loss?', es: 'Piensa en algo que tienes, como un teléfono o una bici. ¿Cómo podrías protegerlo de una pérdida?', fa: 'به چیزی که داری فکر کن، مثل تیلفون یا بایسکل. چطور می‌توانی آن را از زیان حفظ کنی؟' },
    starter: { en: 'I could protect my', es: 'Podría proteger mi', fa: 'من می‌توانم ... خود را حفظ کنم' }
  }
};
