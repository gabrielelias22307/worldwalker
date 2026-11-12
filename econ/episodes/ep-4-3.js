/* COINWALKER · Episode 4.3 · Your Taxes (what taxes pay for, kinds of taxes, tax forms)
   Norfolk, Virginia, in early spring: tax season.
   North half: the public library (J) with its free tax help center in the north-west, a public school (R) and
   the fire station (Q) in the north-east, open lawn between them. Row 10 is a city road; part of it (:) is being paved.
   South half: a city park inside a ring of trees with a fountain (O) in the south-west, a corner shop (R) and two
   homes (Q) in the south-east, a dirt path loop, and the Elizabeth River (~) with a small dock (k) along the south.
   People show forms (W-4, W-2, 1040, refund or owing), what taxes pay for, and taking home pay after taxes.
   The quest chases the Spring Gust, which tore a bus driver's W-2 into 3 pieces. The ledger stone asks the student
   to carry each card to Income tax, Payroll tax, Sales tax or Property tax. */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'EPF',
  title: { en: 'Your Taxes', es: 'Tus impuestos', fa: 'مالیات‌های تو' },
  weather: { sky: 'petals', time: 'day' },
  place: { en: 'Norfolk, tax season', es: 'Norfolk, temporada de impuestos', fa: 'نورفک، فصل مالیات' },
  intro: [
    { en: 'The Grump tore the page about taxes. Now people think taxes just vanish.',
      es: 'El Gruñón rompió la página sobre los impuestos. Ahora la gente cree que desaparecen.',
      fa: 'غرغرو صفحهٔ مالیات را پاره کرد. حالا مردم فکر می‌کنند مالیات گم می‌شود.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Norfolk on the world map (no timeline in this game) */
  scenes: {
    at: [-76.29, 36.85],
    start: [
      { en: 'Norfolk is a port city in Virginia, on the Elizabeth River.',
        es: 'Norfolk es una ciudad portuaria de Virginia, junto al río Elizabeth.',
        fa: 'نورفک یک شهر بندری در ویرجینیا است، کنار دریای الیزابت.' },
      { en: 'Norfolk has a big Navy base. Federal taxes pay for the military.',
        es: 'Norfolk tiene una gran base de la Marina. Los impuestos federales pagan las fuerzas armadas.',
        fa: 'نورفک یک پایگاه بزرگ بحری دارد. مالیات فدرال پول اردو را می‌دهد.' },
      { en: 'It is early spring. Many people are filing their taxes now.',
        es: 'Es el comienzo de la primavera. Mucha gente está declarando sus impuestos.',
        fa: 'اول بهار است. مردم زیاد حالا مالیات خود را ثبت می‌کنند.' }
    ],
    page: { en: 'Free tax help centers have volunteers who help people file for free.',
      es: 'Los centros gratis de ayuda con impuestos tienen voluntarios que ayudan sin cobrar.',
      fa: 'مرکزهای رایگان کمک مالیات رضاکارانی دارند که مفت به مردم کمک می‌کنند.' },
    guess: {
      q: { en: 'Who pays for the public school down the street?', es: '¿Quién paga la escuela pública de tu calle?', fa: 'پول مکتب دولتی سر سرک را کی می‌دهد؟' },
      choices: [
        { t: { en: '🧾 Everyone, through taxes', es: '🧾 Todos, con impuestos', fa: '🧾 همه، با مالیات' }, ok: true },
        { t: { en: '🎒 Only the students', es: '🎒 Solo los alumnos', fa: '🎒 فقط شاگردان' } }
      ],
      why: { en: 'Public schools are paid for with taxes. Most of it comes from local and state taxes.', es: 'Las escuelas públicas se pagan con impuestos, sobre todo impuestos locales y del estado.', fa: 'پول مکتب‌های دولتی از مالیات می‌آید، بیشترش از مالیات شهر و ایالت.' }
    },
    next: {
      q: { en: 'Next: what does a lender want to know before lending you money?', es: 'Ahora: ¿qué quiere saber un prestamista antes de prestarte dinero?', fa: 'بعدی: قرض‌دهنده پیش از قرض دادن پول چه چیز را می‌خواهد بداند؟' },
      choices: [
        { t: { en: '⏰ If you pay on time', es: '⏰ Si pagas a tiempo', fa: '⏰ آیا به وقت می‌پردازی' }, ok: true },
        { t: { en: '🎨 Your favorite color', es: '🎨 Tu color favorito', fa: '🎨 رنگ دلخواه تو' } }
      ],
      why: { en: 'A lender checks your credit: do you pay bills on time, and how much do you owe?', es: 'El prestamista revisa tu crédito: ¿pagas a tiempo y cuánto debes?', fa: 'قرض‌دهنده اعتبار تو را می‌بیند: آیا به وقت می‌پردازی و چقدر قرضدار هستی؟' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [5, 3], name: { en: 'Mr. Patel', es: 'Sr. Patel', fa: 'آقای پتیل' },
      look: { skin: 3, hair: '#1a1008', shirt: '#4a6a9a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I volunteer here too. Our income tax is [[progressive|progressive]].', es: 'Yo también soy voluntario aquí. Nuestro impuesto sobre la renta es [[progressive|progresivo]].', fa: 'من هم اینجا رضاکار هستم. مالیات بر عاید ما [[progressive|تصاعدی]] است.' },
        { en: 'Pretend: 10% on your first $100, and 20% on money above $100.', es: 'Imagina: 10% de tus primeros $100, y 20% del dinero arriba de $100.', fa: 'فرض کن: ۱۰٪ از ۱۰۰ دالر اول، و ۲۰٪ از پول بالای ۱۰۰ دالر.' },
        { en: 'Earn $150? You pay $10 plus $10. Your tax is $20.', es: '¿Ganas $150? Pagas $10 más $10. Tu impuesto es $20.', fa: '۱۵۰ دالر کمایی کردی؟ ۱۰ دالر و ۱۰ دالر می‌دهی. مالیاتت ۲۰ دالر است.' }
      ] },
    { at: [18, 2], name: { en: 'Ms. Johnson', es: 'Sra. Johnson', fa: 'خانم جانسن' },
      look: { skin: 5, hair: '#1a1008', shirt: '#9a3a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I teach math here. Taxes pay my salary and buy our books.', es: 'Enseño matemáticas aquí. Los impuestos pagan mi sueldo y nuestros libros.', fa: 'من اینجا ریاضی درس می‌دهم. مالیات معاش من و کتاب‌های ما را می‌دهد.' },
        { en: 'A lot of our money comes from [[property tax|property tax]].', es: 'Mucho de nuestro dinero viene del [[property tax|impuesto a la propiedad]].', fa: 'پول زیاد ما از [[property tax|مالیات ملکیت]] می‌آید.' },
        { en: 'People who own homes and land in Norfolk pay it to the city.', es: 'Quienes tienen casas y terrenos en Norfolk lo pagan a la ciudad.', fa: 'کسانی که در نورفک خانه و زمین دارند، آن را به شهر می‌دهند.' }
      ] },
    { at: [26, 2], name: { en: 'Captain Ruiz', es: 'Capitana Ruiz', fa: 'کپتان رویز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2a2a3a', pants: '#2a2a3a', hat: '#c0392b', style: 'bun' },
      lines: [
        { en: 'Welcome to the fire station! I lead the crew here.', es: '¡Bienvenido a la estación de bomberos! Dirijo al equipo aquí.', fa: 'به اطفائیه خوش آمدی! من اینجا رهبر گروه هستم.' },
        { en: 'This truck, our gear and our pay all come from taxes.', es: 'Este camión, nuestro equipo y nuestro sueldo vienen de los impuestos.', fa: 'این موتر، سامان ما و معاش ما همه از مالیات می‌آید.' },
        { en: 'City taxes also pay for police officers. We keep everyone safe.', es: 'Los impuestos de la ciudad también pagan a la policía. Cuidamos a todos.', fa: 'مالیات شهر پول پولیس را هم می‌دهد. ما همه را امن نگه می‌داریم.' }
      ] },
    { at: [19, 13], name: { en: 'Mr. Kim', es: 'Sr. Kim', fa: 'آقای کیم' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#2f6f4a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I run the counter at this shop. Look at this receipt.', es: 'Atiendo el mostrador de esta tienda. Mira este recibo.', fa: 'من پشت میز این دکان کار می‌کنم. این رسید را ببین.' },
        { en: 'First the price, then a line for [[sales tax|sales tax]], then the total.', es: 'Primero el precio, luego una línea de [[sales tax|impuesto sobre las ventas]], luego el total.', fa: 'اول قیمت، بعد یک خط برای [[sales tax|مالیات فروش]]، بعد جمع کل.' },
        { en: 'In Virginia, sales tax is added at the register when you pay.', es: 'En Virginia, el impuesto sobre las ventas se suma en la caja al pagar.', fa: 'در ویرجینیا، مالیات فروش وقت پرداخت در صندوق اضافه می‌شود.' }
      ] },
    { at: [24, 13], name: { en: 'Mrs. Owens', es: 'Sra. Owens', fa: 'خانم اوونز' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#8a5ab0', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'I worked at the shipyard for 40 years. Now I am retired.', es: 'Trabajé en el astillero 40 años. Ahora estoy jubilada.', fa: 'من ۴۰ سال در کارخانهٔ کشتی‌سازی کار کردم. حالا متقاعد هستم.' },
        { en: 'Each month I get a [[social security|Social Security]] check.', es: 'Cada mes recibo un cheque del [[social security|Seguro Social]].', fa: 'هر ماه یک چک [[social security|تأمین اجتماعی]] می‌گیرم.' },
        { en: 'Today\'s workers pay for it with [[payroll tax|payroll taxes]] from each paycheck.', es: 'Los trabajadores de hoy lo pagan con [[payroll tax|impuestos sobre la nómina]] de cada cheque.', fa: 'کارگران امروز پول آن را با [[payroll tax|مالیات معاش]] از هر معاش می‌دهند.' }
      ] },
    { at: [28, 13], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I split the rent here with a roommate. We each pay $500.', es: 'Comparto el alquiler aquí con un compañero. Cada uno paga $500.', fa: 'کرایهٔ اینجا را با یک هم‌اتاقی شریک هستم. هر کدام ۵۰۰ دالر می‌دهیم.' },
        { en: 'Our landlord pays property tax on the house. That is part of rent.', es: 'Nuestro casero paga impuesto a la propiedad por la casa. Es parte del alquiler.', fa: 'صاحب خانهٔ ما مالیات ملکیت خانه را می‌دهد. این بخشی از کرایه است.' },
        { en: 'And gas has an [[excise tax|excise tax]] built into its price.', es: 'Y la gasolina tiene un [[excise tax|impuesto especial]] dentro de su precio.', fa: 'و تیل یک [[excise tax|مالیات خاص]] دارد که در قیمتش است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the library (J, door at 5,3) in the north-west; the school (R over h, door at 18,2) and the
     fire station (Q over h, door at 26,2) in the north-east; lawn with a few trees. Row 10: the city road (l),
     with the stretch x 18-24 being paved (:).
     South: the park in the south-west, a ring of trees (T) around flowers (,) and a fountain (O), with gates on the
     north (5,12), the east (8,15) and the south (5,17). The shop (R) and two homes (Q) in the south-east.
     A dirt path loop (:) and the Elizabeth River (~) with a dock (k) along the south edge. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJ......RRRRRRR..QQQQQ..T',
    'T.JJJJJJJ......hhhdhhh..hhdhh..T',
    'T.JJJdJJJ......................T',
    'T..............................T',
    'T.x.....,,.........T.....T.....T',
    'T.......,,.....................T',
    'T..............................T',
    'T.T.......T........T.......T...T',
    'T..............x...............T',
    'Tlllllllllllllllll:::::::llllllT',
    'T..............................T',
    'T.TTT.TTT.........RRR..QQQ.QQQ.T',
    'T.T,,,,,T.........hdh..hdh.hdh.T',
    'T.T,,O,,T......................T',
    'T.T,,,,,......x................T',
    'T.T,,,,,T.......:::::::::......T',
    'T.TTT.TTT.......:.......:......T',
    'T...............:::::::::......T',
    'T~~~~~~~~~~~~~~~~~~~~~~~kk~~~~~T',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [8, 11],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 4], at: [14, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, toward the road.', es: 'Desde esta nota, camina 4 pasos al sur, hacia la calle.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، به طرف سرک.' },
      text: { en: 'An old coin! Taxes are very old. Rulers long ago collected them too.', es: '¡Una moneda antigua! Los impuestos son muy antiguos. Los reyes de antes también los cobraban.', fa: 'یک سکهٔ قدیمی! مالیات خیلی قدیمی است. پادشاهان قدیم هم مالیات می‌گرفتند.' } },
    { clueAt: [5, 11], at: [5, 13], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps south, through the park gate.', es: 'Desde esta nota, camina 2 pasos al sur, por la entrada del parque.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، از دروازهٔ پارک.' },
      text: { en: 'A packet of flower seeds! City taxes pay the workers who plant parks.', es: '¡Un paquete de semillas de flores! Los impuestos de la ciudad pagan a quienes siembran los parques.', fa: 'یک بستهٔ تخم گل! مالیات شهر معاش کارگرانی را می‌دهد که در پارک گل می‌کارند.' } }
  ],

  words: {
    tax: { en: 'money people and businesses must pay to the government', es: 'dinero que las personas y los negocios deben pagar al gobierno', fa: 'پولی که مردم و کسب و کارها باید به حکومت بدهند' },
    'income tax': { en: 'a tax on the money you earn; the US and Virginia both have one', es: 'un impuesto sobre el dinero que ganas; EE. UU. y Virginia tienen uno', fa: 'مالیات بر پولی که کمایی می‌کنی؛ امریکا و ویرجینیا هر دو آن را دارند' },
    'payroll tax': { en: 'taxes for Social Security and Medicare, taken from each paycheck (also called FICA)', es: 'impuestos para el Seguro Social y Medicare, sacados de cada cheque (también llamados FICA)', fa: 'مالیات برای تأمین اجتماعی و مدیکیر که از هر معاش کم می‌شود (نام دیگرش FICA)' },
    'sales tax': { en: 'a tax added to the price when you buy things', es: 'un impuesto que se suma al precio cuando compras cosas', fa: 'مالیاتی که وقت خرید چیزها به قیمت اضافه می‌شود' },
    'property tax': { en: 'a yearly tax on homes and land, set by the local government', es: 'un impuesto anual sobre casas y terrenos, fijado por el gobierno local', fa: 'مالیات سالانه بر خانه و زمین که حکومت محلی تعیین می‌کند' },
    'excise tax': { en: 'a tax on certain goods, like gas, often built into the price', es: 'un impuesto sobre ciertos bienes, como la gasolina, a menudo dentro del precio', fa: 'مالیات بر بعضی کالاها، مثل تیل، که اکثراً در قیمت است' },
    withhold: { en: 'when your boss takes tax out of your pay and sends it to the government', es: 'cuando tu jefe saca impuestos de tu pago y los manda al gobierno', fa: 'وقتی کارفرما مالیات را از معاشت کم می‌کند و به حکومت می‌فرستد' },
    'w-4': { en: 'a form you fill out at a new job, so your boss knows how much tax to withhold', es: 'un formulario que llenas en un trabajo nuevo, para saber cuánto impuesto retener', fa: 'فورمه‌ای که در کار نو پر می‌کنی تا کارفرما بداند چقدر مالیات کم کند' },
    'w-2': { en: 'a form your boss sends after the year ends: your pay and the taxes taken out', es: 'un formulario que tu jefe manda al terminar el año: tu pago y los impuestos sacados', fa: 'فورمه‌ای که کارفرما بعد از ختم سال می‌فرستد: معاشت و مالیاتی که کم شده' },
    '1040': { en: 'Form 1040, the federal tax return you file each year', es: 'el Formulario 1040, la declaración federal de impuestos que presentas cada año', fa: 'فورمهٔ ۱۰۴۰، اظهارنامهٔ مالیات فدرال که هر سال ثبت می‌کنی' },
    refund: { en: 'money sent back to you when too much tax was withheld', es: 'dinero que te devuelven cuando te retuvieron demasiado impuesto', fa: 'پولی که به تو پس داده می‌شود وقتی مالیات زیاد کم شده بود' },
    progressive: { en: 'a tax where a higher income pays a higher rate on the higher part', es: 'un impuesto donde un ingreso más alto paga una tasa más alta en la parte más alta', fa: 'مالیاتی که عاید بیشتر، بر بخش بالایی نرخ بیشتر می‌دهد' },
    'social security': { en: 'money paid each month to retired workers and some others, from payroll taxes', es: 'dinero que se paga cada mes a trabajadores jubilados y otros, con impuestos sobre la nómina', fa: 'پولی که هر ماه به کارگران متقاعد و بعضی دیگر از مالیات معاش داده می‌شود' },
    medicare: { en: 'health care paid by the government, mostly for people 65 and older', es: 'atención médica pagada por el gobierno, sobre todo para personas de 65 años o más', fa: 'تداوی که حکومت پولش را می‌دهد، بیشتر برای مردم ۶۵ ساله و بالاتر' }
  },

  npcs: [
    {
      x: 10, y: 4,
      name: { en: 'Ms. Nguyen', es: 'Sra. Nguyen', fa: 'خانم نگوین' },
      role: { en: 'Tax help volunteer', es: 'Voluntaria de ayuda con impuestos', fa: 'رضاکار کمک مالیات' },
      look: { skin: 1, hair: '#120c08', shirt: '#3a9aa0', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Hi! I help people file their taxes here, for free.', es: '¡Hola! Aquí ayudo a la gente a declarar sus impuestos, gratis.', fa: 'سلام! من اینجا مفت به مردم در ثبت مالیات کمک می‌کنم.' },
        { en: 'Bring your [[w-2|W-2]]. It shows your pay and the tax taken out.', es: 'Trae tu [[w-2|W-2]]. Muestra tu pago y los impuestos que te sacaron.', fa: '[[w-2|W-2]] خود را بیاور. معاشت و مالیاتی که کم شده را نشان می‌دهد.' },
        { en: 'Then we fill out [[1040|Form 1040]]. It is usually due April 15.', es: 'Luego llenamos el [[1040|Formulario 1040]]. Casi siempre vence el 15 de abril.', fa: 'بعد [[1040|فورمهٔ ۱۰۴۰]] را پر می‌کنیم. معمولاً تا ۱۵ اپریل وقت دارد.' },
        { en: 'Too much withheld? You get a [[refund|refund]]. Too little? You owe more.', es: '¿Te retuvieron mucho? Recibes un [[refund|reembolso]]. ¿Muy poco? Debes más.', fa: 'زیاد کم شده؟ [[refund|پول پس می‌گیری]]. کم کم شده؟ باید بیشتر بدهی.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Ana\'s boss withheld more tax than she owed. What happens when she files?', es: 'El jefe de Ana le retuvo más impuesto del que debía. ¿Qué pasa al declarar?', fa: 'کارفرمای آنا بیشتر از مالیاتش کم کرد. وقت ثبت چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'She gets a refund', es: 'Recibe un reembolso', fa: 'پولش را پس می‌گیرد' },
            why: { en: 'Yes! She paid too much during the year, so the extra comes back to her.', es: '¡Sí! Pagó de más durante el año, así que le devuelven lo extra.', fa: 'بله! در طول سال زیاد پرداخت، پس پول اضافه به او پس می‌آید.' } },
          { t: { en: 'She owes even more', es: 'Debe todavía más', fa: 'باید بیشتر بدهد' },
            why: { en: 'No. You owe more when too LITTLE was withheld. Ana paid too much.', es: 'No. Debes más cuando te retienen muy POCO. Ana pagó de más.', fa: 'نه. وقتی کم کم شده باشد بیشتر می‌دهی. آنا زیاد پرداخت.' } },
          { t: { en: 'She loses the extra', es: 'Pierde lo extra', fa: 'پول اضافه گم می‌شود' },
            why: { en: 'No. The extra is still her money. When she files, it comes back as a refund.', es: 'No. Lo extra sigue siendo su dinero. Al declarar, se lo devuelven.', fa: 'نه. پول اضافه هنوز مال اوست. وقت ثبت، به او پس داده می‌شود.' } }
        ]
      }
    },
    {
      x: 28, y: 5,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Firefighter', es: 'Bombero', fa: 'آتش‌نشان' },
      look: { skin: 5, hair: '#120c08', shirt: '#c0392b', pants: '#2a2a2a', hat: '#e0c040', style: 'short' },
      lines: [
        { en: 'I just washed the fire truck. It cost the city a lot!', es: 'Acabo de lavar el camión de bomberos. ¡A la ciudad le costó mucho!', fa: 'همین حالا موتر آتش‌نشانی را شستم. برای شهر خیلی قیمت تمام شد!' },
        { en: 'People in Norfolk pay [[tax|taxes]]. The city uses that money for us.', es: 'La gente de Norfolk paga [[tax|impuestos]]. La ciudad usa ese dinero para nosotros.', fa: 'مردم نورفک [[tax|مالیات]] می‌دهند. شهر آن پول را برای ما خرج می‌کند.' },
        { en: 'Taxes also pay for schools, roads, parks and the police.', es: 'Los impuestos también pagan escuelas, calles, parques y la policía.', fa: 'مالیات پول مکتب‌ها، سرک‌ها، پارک‌ها و پولیس را هم می‌دهد.' },
        { en: 'We come to any fire, for free. Taxes already paid for it.', es: 'Vamos a cualquier incendio, gratis. Los impuestos ya lo pagaron.', fa: 'ما به هر آتش‌سوزی مفت می‌رویم. مالیات پولش را قبلاً داده.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Who pays for the fire station and its trucks?', es: '¿Quién paga la estación de bomberos y sus camiones?', fa: 'پول اطفائیه و موترهایش را کی می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Everyone, through city taxes', es: 'Todos, con impuestos de la ciudad', fa: 'همه، با مالیات شهر' },
            why: { en: 'Yes! Taxes from people in the city pay for firefighters and their trucks.', es: '¡Sí! Los impuestos de la gente de la ciudad pagan a los bomberos y sus camiones.', fa: 'بله! مالیات مردم شهر پول آتش‌نشانان و موترهای‌شان را می‌دهد.' } },
          { t: { en: 'Only people who have a fire', es: 'Solo quienes tienen un incendio', fa: 'فقط کسانی که آتش گرفته‌اند' },
            why: { en: 'No. Marcus comes to any fire for free. Taxes already paid for it.', es: 'No. Marcus va a cualquier incendio gratis. Los impuestos ya lo pagaron.', fa: 'نه. مارکوس به هر آتش‌سوزی مفت می‌رود. مالیات پولش را قبلاً داده.' } },
          { t: { en: 'The firefighters, with their pay', es: 'Los bomberos, con su sueldo', fa: 'خود آتش‌نشانان، از معاش‌شان' },
            why: { en: 'No. Taxes pay the firefighters. They do not buy the trucks themselves.', es: 'No. Los impuestos pagan a los bomberos. Ellos no compran los camiones.', fa: 'نه. مالیات معاش آتش‌نشانان را می‌دهد. خودشان موتر نمی‌خرند.' } }
        ]
      }
    },
    {
      x: 21, y: 12,
      name: { en: 'Leila', es: 'Leila', fa: 'لیلا' },
      role: { en: 'Student with a part-time job', es: 'Estudiante con trabajo de medio tiempo', fa: 'شاگرد با کار نیمه‌وقت' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I just started my first job, here at the shop.', es: 'Acabo de empezar mi primer trabajo, aquí en la tienda.', fa: 'همین تازه اولین کارم را در همین دکان شروع کردم.' },
        { en: 'On day one, I filled out a [[w-4|W-4]] form.', es: 'El primer día, llené un formulario [[w-4|W-4]].', fa: 'روز اول، یک فورمهٔ [[w-4|W-4]] پر کردم.' },
        { en: 'It tells my boss how much tax to [[withhold|withhold]] from my pay.', es: 'Le dice a mi jefe cuánto impuesto [[withhold|retener]] de mi pago.', fa: 'به کارفرمایم می‌گوید چقدر مالیات از معاشم [[withhold|کم کند]].' },
        { en: 'This week I earned $200. Taxes took $30 out of it.', es: 'Esta semana gané $200. Los impuestos le quitaron $30.', fa: 'این هفته ۲۰۰ دالر کمایی کردم. مالیات ۳۰ دالر آن را کم کرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Leila earned $200. $30 was withheld for taxes. How much did she take home?', es: 'Leila ganó $200. Le retuvieron $30 de impuestos. ¿Cuánto se llevó a casa?', fa: 'لیلا ۲۰۰ دالر کمایی کرد. ۳۰ دالر مالیات کم شد. چقدر به خانه برد؟' },
        choices: [
          { ok: true, t: { en: '$170', es: '$170', fa: '۱۷۰ دالر' },
            why: { en: 'Yes! $200 minus $30 is $170. That is her take-home pay.', es: '¡Sí! $200 menos $30 es $170. Eso es lo que se lleva a casa.', fa: 'بله! ۲۰۰ منفی ۳۰ می‌شود ۱۷۰ دالر. این معاشی است که به خانه می‌برد.' } },
          { t: { en: '$230', es: '$230', fa: '۲۳۰ دالر' },
            why: { en: 'No. Taxes are taken OUT of pay. Subtract: $200 minus $30 is $170.', es: 'No. Los impuestos se SACAN del pago. Resta: $200 menos $30 es $170.', fa: 'نه. مالیات از معاش کم می‌شود. منفی کن: ۲۰۰ منفی ۳۰ می‌شود ۱۷۰.' } },
          { t: { en: '$200', es: '$200', fa: '۲۰۰ دالر' },
            why: { en: 'No. $30 was withheld first. She took home $200 minus $30, which is $170.', es: 'No. Primero le retuvieron $30. Se llevó $200 menos $30, o sea $170.', fa: 'نه. اول ۳۰ دالر کم شد. او ۲۰۰ منفی ۳۰، یعنی ۱۷۰ دالر برد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'NORFOLK PUBLIC LIBRARY · FREE TAX HELP CENTER · Volunteers help you file, for free.', es: 'BIBLIOTECA PÚBLICA DE NORFOLK · CENTRO GRATIS DE AYUDA CON IMPUESTOS · Voluntarios te ayudan, gratis.', fa: 'کتابخانهٔ عامهٔ نورفک · مرکز رایگان کمک مالیات · رضاکاران مفت در ثبت مالیات کمک می‌کنند.' } },
    { x: 15, y: 9, text: { en: 'ROAD WORK AHEAD · This road is being paved with tax money. Drive slowly!', es: 'OBRAS EN LA CALLE · Esta calle se pavimenta con dinero de impuestos. ¡Maneja despacio!', fa: 'کار سرک · این سرک با پول مالیات قیر می‌شود. آهسته برانید!' } },
    { x: 14, y: 15, text: { en: 'CITY PARK · Open to everyone. Taxes keep it clean and safe.', es: 'PARQUE DE LA CIUDAD · Abierto a todos. Los impuestos lo mantienen limpio y seguro.', fa: 'پارک شهر · برای همه باز است. مالیات آن را پاک و امن نگه می‌دارد.' } }
  ],

  /* the quest: Mr. Brooks the bus driver (gold !) south-west, near the park -> Dee the road worker at the road work,
     north-east -> chase the Spring Gust: take each torn piece of his W-2 to what taxes pay for (the school yard,
     the fire station, the park) -> the gust shows itself south-east, hops, and is caught south of the park
     -> back to Mr. Brooks */
  quest: {
    stat: 'pla',
    title: { en: 'The Spring Gust', es: 'La ráfaga de primavera', fa: 'تندباد بهاری' },
    giver: {
      x: 14, y: 12,
      name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#3a5a8a', pants: '#2a2a3a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I was going to the tax help center. Then a big gust came!', es: 'Iba al centro de ayuda con impuestos. ¡Y llegó una ráfaga fuerte!', fa: 'به مرکز کمک مالیات می‌رفتم. بعد یک تندباد کلان آمد!' },
        { en: 'It tore my W-2 into 3 pieces. Ask Dee, at the road work!', es: 'Rompió mi W-2 en 3 pedazos. ¡Pregúntale a Dee, en las obras de la calle!', fa: 'W-2 مرا سه تکه کرد. از دی بپرس، کنار کار سرک!' }
      ],
      wait: { en: 'Dee is paving the road, on the east side of town.', es: 'Dee está pavimentando la calle, en el lado este de la ciudad.', fa: 'دی در طرف شرق شهر سرک را قیر می‌کند.' },
      thanks: { en: 'My W-2! Now I can file. And I see where my taxes go!', es: '¡Mi W-2! Ya puedo declarar. ¡Y veo adónde van mis impuestos!', fa: 'W-2 من! حالا ثبت کرده می‌توانم. و می‌بینم مالیاتم کجا می‌رود!' }
    },
    contact: {
      x: 21, y: 9,
      name: { en: 'Dee', es: 'Dee', fa: 'دی' },
      role: { en: 'Road worker', es: 'Trabajadora de la calle', fa: 'کارگر سرک' },
      look: { skin: 3, hair: '#3a2416', shirt: '#e0802a', pants: '#3a3a3a', hat: '#e0c040', style: 'bun' },
      lines: [
        { en: 'Taxes pay for this new road. I saw paper fly past!', es: 'Los impuestos pagan esta calle nueva. ¡Vi pasar papeles volando!', fa: 'مالیات پول این سرک نو را می‌دهد. دیدم کاغذ پرواز کرد!' },
        { en: 'Each piece names something taxes pay for. Take it there!', es: 'Cada pedazo nombra algo que pagan los impuestos. ¡Llévalo allí!', fa: 'هر تکه چیزی را نام می‌برد که مالیات پولش را می‌دهد. آن را آنجا ببر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [8, 18],
      hops: [[22, 17], [28, 11]],
      name: { en: 'The Spring Gust', es: 'La ráfaga de primavera', fa: 'تندباد بهاری' },
      taunt: { en: 'Whoosh! The Spring Gust swirls: "Catch the pieces, if you know where taxes go!"', es: '¡Fiuuu! La ráfaga gira: "¡Atrapa los pedazos, si sabes adónde van los impuestos!"', fa: 'ووش! تندباد بهاری می‌چرخد: «اگر می‌دانی مالیات کجا می‌رود، تکه‌ها را بگیر!»' },
      clues: [
        { t: { en: 'Piece 1 says: "Taxes help pay teachers." Take it where kids learn.', es: 'El pedazo 1 dice: "Los impuestos ayudan a pagar a los maestros." Llévalo donde aprenden los niños.', fa: 'تکهٔ ۱ می‌گوید: «مالیات در معاش معلمان کمک می‌کند.» آن را جایی ببر که اطفال درس می‌خوانند.' },
          zones: [{ x: 15, y: 3, w: 7, h: 1 }],
          noBy: [
            { x: 24, y: 3, w: 5, h: 1, t: { en: 'This is the fire station. Taxes pay firefighters here, not teachers.', es: 'Esta es la estación de bomberos. Aquí los impuestos pagan bomberos, no maestros.', fa: 'این اطفائیه است. اینجا مالیات معاش آتش‌نشانان را می‌دهد، نه معلمان.' } },
            { x: 3, y: 15, w: 5, h: 2, t: { en: 'This is the park. Kids play here, but teachers work at the school.', es: 'Este es el parque. Los niños juegan aquí, pero los maestros trabajan en la escuela.', fa: 'این پارک است. اطفال اینجا بازی می‌کنند، اما معلمان در مکتب کار می‌کنند.' } }
          ],
          found: { en: 'The public school! Taxes pay its teachers, books and buses.', es: '¡La escuela pública! Los impuestos pagan sus maestros, libros y autobuses.', fa: 'مکتب دولتی! مالیات پول معلمان، کتاب‌ها و بس‌هایش را می‌دهد.' } },
        { t: { en: 'Piece 2 says: "Taxes buy fire trucks." Take it where the trucks wait.', es: 'El pedazo 2 dice: "Los impuestos compran camiones de bomberos." Llévalo donde esperan los camiones.', fa: 'تکهٔ ۲ می‌گوید: «مالیات موتر آتش‌نشانی می‌خرد.» آن را جایی ببر که موترها منتظرند.' },
          zones: [{ x: 24, y: 3, w: 5, h: 1 }],
          noBy: [
            { x: 15, y: 3, w: 7, h: 1, t: { en: 'This is the school. Taxes pay for it too, but no fire trucks here.', es: 'Esta es la escuela. Los impuestos también la pagan, pero aquí no hay camiones.', fa: 'این مکتب است. مالیات پول آن را هم می‌دهد، اما اینجا موتر آتش‌نشانی نیست.' } },
            { x: 3, y: 15, w: 5, h: 2, t: { en: 'This is the park. There are trees and flowers, but no fire trucks.', es: 'Este es el parque. Hay árboles y flores, pero no camiones de bomberos.', fa: 'این پارک است. درخت و گل دارد، اما موتر آتش‌نشانی ندارد.' } }
          ],
          found: { en: 'The fire station! City taxes pay for the trucks and the crew.', es: '¡La estación de bomberos! Los impuestos de la ciudad pagan camiones y equipo.', fa: 'اطفائیه! مالیات شهر پول موترها و گروه را می‌دهد.' } },
        { t: { en: 'Piece 3 says: "Taxes pay for green space open to all." Find it.', es: 'El pedazo 3 dice: "Los impuestos pagan espacios verdes abiertos a todos." Búscalo.', fa: 'تکهٔ ۳ می‌گوید: «مالیات پول جای سبز برای همه را می‌دهد.» پیدایش کن.' },
          zones: [{ x: 3, y: 15, w: 5, h: 2 }],
          noBy: [
            { x: 15, y: 3, w: 7, h: 1, t: { en: 'This is the school yard. Only students use it on school days.', es: 'Este es el patio de la escuela. Solo los alumnos lo usan en días de clase.', fa: 'این حویلی مکتب است. روزهای درس فقط شاگردان از آن کار می‌گیرند.' } },
            { x: 24, y: 3, w: 5, h: 1, t: { en: 'This is the fire station. It is not green space for everyone.', es: 'Esta es la estación de bomberos. No es un espacio verde para todos.', fa: 'این اطفائیه است. جای سبز برای همه نیست.' } }
          ],
          found: { en: 'The city park! Taxes pay to plant trees and fix the paths.', es: '¡El parque de la ciudad! Los impuestos pagan los árboles y los caminos.', fa: 'پارک شهر! مالیات پول کاشتن درخت و ترمیم راه‌ها را می‌دهد.' } }
      ],
      win: { en: 'Caught! The Spring Gust drops the last piece. The W-2 is whole again!', es: '¡Atrapada! La ráfaga suelta el último pedazo. ¡El W-2 está entero otra vez!', fa: 'گرفتمش! تندباد بهاری آخرین تکه را می‌اندازد. W-2 دوباره پوره شد!' },
      item: { icon: '📄', name: { en: 'Mr. Brooks\'s W-2', es: 'El W-2 del Sr. Brooks', fa: 'W-2 آقای بروکس' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 11]],
  smudges: [[20, 6], [10, 17]],

  challenge: {
    at: [13, 7],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each kind of tax: income tax by the tax help center, payroll tax by the bus driver's stop,
    // sales tax by the shop counter, property tax by the homes
    zones: [{ bin: 'income', x: 2, y: 7, w: 4, h: 1 }, { bin: 'payroll', x: 10, y: 12, w: 3, h: 2 },
      { bin: 'sales', x: 16, y: 15, w: 4, h: 1 }, { bin: 'property', x: 25, y: 14, w: 3, h: 1 }],
    stat: 'pla',
    title: { en: 'Which tax is it?', es: '¿Qué impuesto es?', fa: 'کدام مالیات است؟' },
    intro: { en: 'There are many kinds of [[tax|taxes]]. Carry each card to its kind.',
      es: 'Hay muchas clases de [[tax|impuestos]]. Lleva cada tarjeta a su clase.',
      fa: '[[tax|مالیات]] انواع زیاد دارد. هر کارت را پیش نوع خودش ببر.' },
    bins: [
      { id: 'income', icon: '💼', label: { en: 'Income tax', es: 'Impuesto sobre la renta', fa: 'مالیات بر عاید' }, sub: { en: 'on what you earn', es: 'sobre lo que ganas', fa: 'بر چیزی که کمایی می‌کنی' } },
      { id: 'payroll', icon: '🧓', label: { en: 'Payroll tax', es: 'Impuesto sobre la nómina', fa: 'مالیات معاش' }, sub: { en: 'Social Security and Medicare', es: 'Seguro Social y Medicare', fa: 'تأمین اجتماعی و مدیکیر' } },
      { id: 'sales', icon: '🧾', label: { en: 'Sales tax', es: 'Impuesto sobre las ventas', fa: 'مالیات فروش' }, sub: { en: 'added when you buy', es: 'se suma al comprar', fa: 'وقت خرید اضافه می‌شود' } },
      { id: 'property', icon: '🏠', label: { en: 'Property tax', es: 'Impuesto a la propiedad', fa: 'مالیات ملکیت' }, sub: { en: 'on homes and land', es: 'sobre casas y terrenos', fa: 'بر خانه و زمین' } }
    ],
    items: [
      { bin: 'income', t: { en: 'A federal tax based on what you earn in a year', es: 'Un impuesto federal según lo que ganas en un año', fa: 'مالیات فدرال بر اساس کمایی یک سال' },
        why: { en: 'It is based on what you earn, so it is [[income tax|income tax]].', es: 'Se basa en lo que ganas, así que es [[income tax|impuesto sobre la renta]].', fa: 'بر اساس کمایی توست، پس [[income tax|مالیات بر عاید]] است.' } },
      { bin: 'income', t: { en: 'A Virginia state tax on your yearly pay', es: 'Un impuesto del estado de Virginia sobre tu pago del año', fa: 'مالیات ایالت ویرجینیا بر معاش سالانه‌ات' },
        why: { en: 'Virginia taxes the money you earn. That is a state [[income tax|income tax]].', es: 'Virginia cobra impuesto sobre lo que ganas. Es un [[income tax|impuesto sobre la renta]] estatal.', fa: 'ویرجینیا بر پولی که کمایی می‌کنی مالیات می‌گیرد. این [[income tax|مالیات بر عاید]] ایالتی است.' } },
      { bin: 'payroll', t: { en: 'Money for Social Security, taken from each paycheck', es: 'Dinero para el Seguro Social, sacado de cada cheque', fa: 'پول برای تأمین اجتماعی که از هر معاش کم می‌شود' },
        why: { en: 'Social Security is paid for with [[payroll tax|payroll taxes]] from each paycheck.', es: 'El Seguro Social se paga con [[payroll tax|impuestos sobre la nómina]] de cada cheque.', fa: 'پول تأمین اجتماعی از [[payroll tax|مالیات معاش]] هر معاش می‌آید.' } },
      { bin: 'payroll', t: { en: 'Money for Medicare, health care for older people', es: 'Dinero para Medicare, atención médica para mayores', fa: 'پول برای مدیکیر، تداوی مردم مسن' },
        why: { en: '[[medicare|Medicare]] is paid for with [[payroll tax|payroll taxes]], also called FICA.', es: '[[medicare|Medicare]] se paga con [[payroll tax|impuestos sobre la nómina]], también llamados FICA.', fa: '[[medicare|مدیکیر]] با [[payroll tax|مالیات معاش]] پرداخته می‌شود که نامش FICA هم است.' } },
      { bin: 'sales', t: { en: 'Extra added at the register when you buy shoes', es: 'Lo extra que se suma en la caja al comprar zapatos', fa: 'پول اضافه در صندوق وقت خرید بوت' },
        why: { en: 'It is added when you buy something. That is [[sales tax|sales tax]].', es: 'Se suma cuando compras algo. Eso es [[sales tax|impuesto sobre las ventas]].', fa: 'وقت خرید چیزی اضافه می‌شود. این [[sales tax|مالیات فروش]] است.' } },
      { bin: 'sales', t: { en: 'A tax line on the receipt for a phone case', es: 'Una línea de impuesto en el recibo de una funda', fa: 'یک خط مالیات روی رسید یک قاب تیلفون' },
        why: { en: 'The shop adds it when you buy. Then it goes to the state. It is [[sales tax|sales tax]].', es: 'La tienda lo suma al comprar y lo manda al estado. Es [[sales tax|impuesto sobre las ventas]].', fa: 'دکان وقت خرید اضافه می‌کند و به ایالت می‌فرستد. [[sales tax|مالیات فروش]] است.' } },
      { bin: 'property', t: { en: 'Paid each year by people who own a home', es: 'Lo pagan cada año quienes tienen una casa', fa: 'هر سال صاحبان خانه آن را می‌دهند' },
        why: { en: 'Home owners pay [[property tax|property tax]] each year to the city.', es: 'Los dueños de casas pagan [[property tax|impuesto a la propiedad]] cada año a la ciudad.', fa: 'صاحبان خانه هر سال [[property tax|مالیات ملکیت]] را به شهر می‌دهند.' } },
      { bin: 'property', t: { en: 'A city tax on land that pays for local schools', es: 'Un impuesto de la ciudad sobre terrenos que paga escuelas locales', fa: 'مالیات شهر بر زمین که پول مکتب‌های محلی را می‌دهد' },
        why: { en: 'A tax on land is [[property tax|property tax]]. It pays for a lot of local schools.', es: 'Un impuesto sobre terrenos es [[property tax|impuesto a la propiedad]]. Paga mucho de las escuelas.', fa: 'مالیات بر زمین [[property tax|مالیات ملکیت]] است. پول زیاد مکتب‌های محلی را می‌دهد.' } }
    ],
    success: { en: 'Every card is in the right place! Income, payroll, sales and property taxes.', es: '¡Cada tarjeta está en su lugar! Impuestos sobre la renta, la nómina, las ventas y la propiedad.', fa: 'هر کارت در جای درست است! مالیات بر عاید، معاش، فروش و ملکیت.' }
  },

  boss: {
    at: [28, 18],
    stat: 'hei',
    need: 3,
    name: { en: 'The Grabby Grump', es: 'El Gruñón Acaparador', fa: 'غرغروی چنگ‌انداز' },
    appear: { en: 'The Grabby Grump is hiding in the fog by the river!', es: '¡El Gruñón Acaparador se esconde en la niebla junto al río!', fa: 'غرغروی چنگ‌انداز در مه کنار دریا پنهان است!' },
    taunt: { en: 'Taxes? Bah! I keep every coin. Who needs roads and schools anyway?', es: '¿Impuestos? ¡Bah! Me quedo cada moneda. ¿Quién necesita calles y escuelas?', fa: 'مالیات؟ هه! من هر سکه را نگه می‌دارم. کی به سرک و مکتب ضرورت دارد؟' },
    win: { en: 'The fog lifts off the river. Ledger page 4.3 floats down into your hands!', es: 'La niebla se va del río. ¡La página 4.3 del libro cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۴.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What do taxes pay for?', es: '¿Qué pagan los impuestos?', fa: 'مالیات پول چه چیزها را می‌دهد؟' },
        choices: [
          { en: 'Schools, roads and fire trucks', es: 'Escuelas, calles y camiones de bomberos', fa: 'مکتب، سرک و موتر آتش‌نشانی' },
          { en: 'New phones for every family', es: 'Teléfonos nuevos para cada familia', fa: 'تیلفون نو برای هر خانواده' },
          { en: 'Prizes for the people who pay first', es: 'Premios para quienes pagan primero', fa: 'جایزه برای کسانی که اول می‌پردازند' },
          { en: 'Only the mayor\'s own home', es: 'Solo la casa del alcalde', fa: 'فقط خانهٔ خود شاروال' }],
        answer: 0,
        why: { en: 'Taxes pay for things we share: schools, roads, police, fire, parks and the military.', es: 'Los impuestos pagan lo que compartimos: escuelas, calles, policía, bomberos, parques y fuerzas armadas.', fa: 'مالیات پول چیزهای مشترک را می‌دهد: مکتب، سرک، پولیس، آتش‌نشانی، پارک و اردو.' } },
      { q: { en: 'You buy shoes. A tax is added at the register. Which tax?', es: 'Compras zapatos. Se suma un impuesto en la caja. ¿Cuál?', fa: 'بوت می‌خری. در صندوق مالیات اضافه می‌شود. کدام مالیات؟' },
        choices: [
          { en: 'Sales tax', es: 'Impuesto sobre las ventas', fa: 'مالیات فروش' },
          { en: 'Property tax', es: 'Impuesto a la propiedad', fa: 'مالیات ملکیت' },
          { en: 'Payroll tax', es: 'Impuesto sobre la nómina', fa: 'مالیات معاش' },
          { en: 'Income tax', es: 'Impuesto sobre la renta', fa: 'مالیات بر عاید' }],
        answer: 0,
        why: { en: 'Sales tax is added to the price when you buy things.', es: 'El impuesto sobre las ventas se suma al precio cuando compras.', fa: 'مالیات فروش وقت خرید به قیمت اضافه می‌شود.' } },
      { q: { en: 'Social Security and Medicare are paid for with which taxes?', es: '¿Con qué impuestos se pagan el Seguro Social y Medicare?', fa: 'پول تأمین اجتماعی و مدیکیر از کدام مالیات می‌آید؟' },
        choices: [
          { en: 'Payroll taxes', es: 'Impuestos sobre la nómina', fa: 'مالیات معاش' },
          { en: 'Sales taxes', es: 'Impuestos sobre las ventas', fa: 'مالیات فروش' },
          { en: 'Property taxes', es: 'Impuestos a la propiedad', fa: 'مالیات ملکیت' },
          { en: 'Gas taxes', es: 'Impuestos a la gasolina', fa: 'مالیات تیل' }],
        answer: 0,
        why: { en: 'Payroll taxes, also called FICA, come out of each paycheck for Social Security and Medicare.', es: 'Los impuestos sobre la nómina, o FICA, salen de cada cheque para el Seguro Social y Medicare.', fa: 'مالیات معاش، که FICA هم نام دارد، از هر معاش برای تأمین اجتماعی و مدیکیر کم می‌شود.' } },
      { q: { en: 'You start a new job. Which form tells your boss how much tax to withhold?', es: 'Empiezas un trabajo nuevo. ¿Qué formulario le dice a tu jefe cuánto retener?', fa: 'کار نو شروع می‌کنی. کدام فورمه به کارفرما می‌گوید چقدر مالیات کم کند؟' },
        choices: [
          { en: 'The W-4', es: 'El W-4', fa: 'فورمهٔ W-4' },
          { en: 'The W-2', es: 'El W-2', fa: 'فورمهٔ W-2' },
          { en: 'The 1040', es: 'El 1040', fa: 'فورمهٔ ۱۰۴۰' },
          { en: 'A receipt', es: 'Un recibo', fa: 'یک رسید' }],
        answer: 0,
        why: { en: 'You fill out a W-4 at a new job. It sets how much tax is withheld.', es: 'Llenas un W-4 en un trabajo nuevo. Decide cuánto impuesto te retienen.', fa: 'در کار نو فورمهٔ W-4 را پر می‌کنی. مقدار مالیاتی را که کم می‌شود تعیین می‌کند.' } },
      { q: { en: 'After the year ends, your boss sends a form with your pay and taxes. Which one?', es: 'Al terminar el año, tu jefe manda un formulario con tu pago e impuestos. ¿Cuál?', fa: 'بعد از ختم سال، کارفرما فورمه‌ای با معاش و مالیاتت می‌فرستد. کدام؟' },
        choices: [
          { en: 'The W-2', es: 'El W-2', fa: 'فورمهٔ W-2' },
          { en: 'The W-4', es: 'El W-4', fa: 'فورمهٔ W-4' },
          { en: 'A bank card', es: 'Una tarjeta del banco', fa: 'یک کارت بانک' },
          { en: 'A pay raise', es: 'Un aumento de sueldo', fa: 'زیاد شدن معاش' }],
        answer: 0,
        why: { en: 'The W-2 shows what you were paid and the taxes taken out. You need it to file.', es: 'El W-2 muestra lo que te pagaron y los impuestos sacados. Lo necesitas para declarar.', fa: 'W-2 معاشت و مالیاتی را که کم شده نشان می‌دهد. برای ثبت به آن ضرورت داری.' } },
      { q: { en: 'When is the tax return usually due?', es: '¿Cuándo vence casi siempre la declaración de impuestos?', fa: 'اظهارنامهٔ مالیات معمولاً تا چه وقت باید ثبت شود؟' },
        choices: [
          { en: 'April 15', es: 'El 15 de abril', fa: '۱۵ اپریل' },
          { en: 'July 4', es: 'El 4 de julio', fa: '۴ جولای' },
          { en: 'January 1', es: 'El 1 de enero', fa: '۱ جنوری' },
          { en: 'December 25', es: 'El 25 de diciembre', fa: '۲۵ دسامبر' }],
        answer: 0,
        why: { en: 'Form 1040, the federal tax return, is usually due on April 15.', es: 'El Formulario 1040, la declaración federal, casi siempre vence el 15 de abril.', fa: 'فورمهٔ ۱۰۴۰، اظهارنامهٔ فدرال، معمولاً تا ۱۵ اپریل وقت دارد.' } },
      { q: { en: 'Too much tax was withheld from your pay this year. What do you get?', es: 'Este año te retuvieron demasiado impuesto. ¿Qué recibes?', fa: 'امسال مالیات زیاد از معاشت کم شد. چه می‌گیری؟' },
        choices: [
          { en: 'A refund', es: 'Un reembolso', fa: 'پول پس‌گرفته' },
          { en: 'A bill', es: 'Una cuenta por pagar', fa: 'یک بل' },
          { en: 'A fine', es: 'Una multa', fa: 'یک جریمه' },
          { en: 'A new W-2', es: 'Un W-2 nuevo', fa: 'یک W-2 نو' }],
        answer: 0,
        why: { en: 'If too much was withheld, you get a refund. If too little, you owe more.', es: 'Si te retuvieron de más, recibes un reembolso. Si fue muy poco, debes más.', fa: 'اگر زیاد کم شده، پولت پس می‌آید. اگر کم کم شده، باید بیشتر بدهی.' } },
      { q: { en: 'The US income tax is progressive. What does that mean?', es: 'El impuesto sobre la renta de EE. UU. es progresivo. ¿Qué significa?', fa: 'مالیات بر عاید امریکا تصاعدی است. یعنی چه؟' },
        choices: [
          { en: 'A higher rate on the higher part of income', es: 'Una tasa más alta en la parte más alta del ingreso', fa: 'نرخ بیشتر بر بخش بالایی عاید' },
          { en: 'Everyone pays the same number of dollars', es: 'Todos pagan la misma cantidad de dólares', fa: 'همه به یک اندازه دالر می‌دهند' },
          { en: 'Only people with low pay must pay it', es: 'Solo la gente con poco sueldo lo paga', fa: 'فقط مردم کم‌معاش آن را می‌دهند' },
          { en: 'The tax goes down a little each year', es: 'El impuesto baja un poco cada año', fa: 'مالیات هر سال کمی کم می‌شود' }],
        answer: 0,
        why: { en: 'With a progressive tax, the higher part of your income is taxed at a higher rate.', es: 'Con un impuesto progresivo, la parte más alta de tu ingreso paga una tasa más alta.', fa: 'در مالیات تصاعدی، بخش بالایی عایدت با نرخ بیشتر مالیات می‌شود.' } }
    ]
  },

  learned: [
    { en: '[[tax|Taxes]] pay for things we share: schools, roads, police, fire, parks and the military.', es: 'Los [[tax|impuestos]] pagan lo que compartimos: escuelas, calles, policía, bomberos, parques y fuerzas armadas.', fa: '[[tax|مالیات]] پول چیزهای مشترک را می‌دهد: مکتب، سرک، پولیس، آتش‌نشانی، پارک و اردو.' },
    { en: 'Kinds of taxes: income, [[payroll tax|payroll]], sales and [[property tax|property]] taxes.', es: 'Clases de impuestos: sobre la renta, la [[payroll tax|nómina]], las ventas y la [[property tax|propiedad]].', fa: 'انواع مالیات: مالیات بر عاید، [[payroll tax|معاش]]، فروش و [[property tax|ملکیت]].' },
    { en: 'Fill out a [[w-4|W-4]], get a [[w-2|W-2]], file [[1040|Form 1040]] by about April 15.', es: 'Llena un [[w-4|W-4]], recibe un [[w-2|W-2]], presenta el [[1040|Formulario 1040]] cerca del 15 de abril.', fa: '[[w-4|W-4]] را پر کن، [[w-2|W-2]] را بگیر، [[1040|فورمهٔ ۱۰۴۰]] را تا حدود ۱۵ اپریل ثبت کن.' }
  ],
  reflect: {
    q: { en: 'Name one thing in your town that taxes pay for. Why does it matter to you?', es: 'Nombra una cosa de tu ciudad que pagan los impuestos. ¿Por qué te importa?', fa: 'یک چیز در شهرت را نام ببر که مالیات پولش را می‌دهد. چرا برایت مهم است؟' },
    starter: { en: 'In my town, taxes pay for', es: 'En mi ciudad, los impuestos pagan', fa: 'در شهر من، مالیات پول ... را می‌دهد' }
  }
};
