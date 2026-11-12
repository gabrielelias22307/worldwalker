/* COINWALKER · Episode 4.1 · Your Income and Your Checking Account (earning income, the pay stub, checking accounts)
   Norfolk, Virginia, today: a made-up harbor-side grocery store (Harbor Fresh Market) where a teen works her first job.
   North-west: the grocery store (its door opens into the break room with the time clock), the parking lot with
   produce stands. North-east: a made-up bank branch with an ATM beside it, and tall apartment buildings.
   Row 11: the downtown street. South: a harbor cafe and a dog walker's home, a little park, the bus stop,
   and the waterfront walk (row 17) along the Elizabeth River with two docks.
   People show wages, gross and net pay, deductions and a checking account; the ledger stone has the student read
   Jada's pay stub, one line on each survey post, then answer. */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'EPF',
  title: { en: 'Your Income and Your Checking Account', es: 'Tus ingresos y tu cuenta corriente', fa: 'درآمد تو و حساب جاری تو' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Norfolk, first payday', es: 'Norfolk, primer día de pago', fa: 'نورفک، اولین روز معاش' },
  intro: [
    { en: 'The Grump tore the page about paychecks. Now workers cannot read their pay stubs.',
      es: 'El Gruñón rompió la página sobre los sueldos. Ahora nadie entiende su talón de pago.',
      fa: 'غرغرو صفحهٔ معاش را پاره کرد. حالا کارگران ورق معاش خود را خوانده نمی‌توانند.' },
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
      { en: 'Big ships come to its harbor from all over the world.',
        es: 'Barcos grandes llegan a su puerto desde todo el mundo.',
        fa: 'کشتی‌های بزرگ از سراسر جهان به بندر آن می‌آیند.' },
      { en: 'Today a teen named Jada gets the first paycheck of her life.',
        es: 'Hoy una joven llamada Jada recibe el primer sueldo de su vida.',
        fa: 'امروز یک نوجوان به نام جادا اولین معاش زندگی‌اش را می‌گیرد.' }
    ],
    page: { en: 'The US Social Security law was passed in 1935.',
      es: 'La ley del Seguro Social de EE. UU. se aprobó en 1935.',
      fa: 'قانون تامین اجتماعی امریکا در سال ۱۹۳۵ تصویب شد.' },
    guess: {
      q: { en: 'Jada earned $300. Will all $300 reach her bank account?', es: 'Jada ganó $300. ¿Llegarán los $300 completos a su cuenta?', fa: 'جادا ۳۰۰ دالر کمایی کرد. آیا همهٔ ۳۰۰ دالر به حساب بانکی‌اش می‌رسد؟' },
      choices: [
        { t: { en: '🙅 No, some is taken out', es: '🙅 No, se quita una parte', fa: '🙅 نه، کمی از آن کم می‌شود' }, ok: true },
        { t: { en: '🙋 Yes, every dollar', es: '🙋 Sí, cada dólar', fa: '🙋 بله، هر دالر' } }
      ],
      why: { en: 'Taxes and other deductions come out first. What is left is take-home pay.', es: 'Primero se quitan los impuestos y otras deducciones. Lo que queda es el pago neto.', fa: 'اول مالیات و کسرهای دیگر برداشته می‌شوند. آنچه می‌ماند، معاش خالص است.' }
    },
    next: {
      q: { en: 'Next: saving. Where does money grow faster, a jar or a savings account?', es: 'Ahora: ahorrar. ¿Dónde crece más rápido el dinero, en un frasco o en una cuenta de ahorros?', fa: 'بعدی: پس‌انداز. پول کجا تیزتر رشد می‌کند، در یک بوتل یا در حساب پس‌انداز؟' },
      choices: [
        { t: { en: '🏦 A savings account', es: '🏦 Una cuenta de ahorros', fa: '🏦 حساب پس‌انداز' }, ok: true },
        { t: { en: '🫙 A jar at home', es: '🫙 Un frasco en casa', fa: '🫙 یک بوتل در خانه' } }
      ],
      why: { en: 'A savings account pays you interest, so your money grows. A jar pays nothing.', es: 'Una cuenta de ahorros te paga interés, así tu dinero crece. Un frasco no paga nada.', fa: 'حساب پس‌انداز به تو سود می‌دهد، پس پولت رشد می‌کند. بوتل هیچ چیز نمی‌دهد.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [6, 3], name: { en: 'Ms. Grant', es: 'Sra. Grant', fa: 'خانم گرانت' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f7a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is the break room. Workers clock in and out at the time clock.', es: 'Esta es la sala de descanso. Aquí se marca la entrada y la salida en el reloj.', fa: 'این اتاق استراحت است. کارگران اینجا با ساعت کار ورود و خروج خود را ثبت می‌کنند.' },
        { en: 'Our cashiers earn a [[wage|wage]]: money for each hour they work.', es: 'Nuestros cajeros ganan un [[wage|salario por hora]]: dinero por cada hora de trabajo.', fa: 'صندوق‌دارهای ما [[wage|مزد ساعتی]] می‌گیرند: پول برای هر ساعت کار.' },
        { en: 'I am the manager. I earn a [[salary|salary]]: a set amount for the year.', es: 'Yo soy la gerente. Gano un [[salary|sueldo fijo]]: una cantidad fija por año.', fa: 'من مدیر هستم. من [[salary|معاش ثابت]] می‌گیرم: یک مقدار معین برای سال.' }
      ] },
    { at: [22, 2], name: { en: 'Mr. Adeyemi', es: 'Sr. Adeyemi', fa: 'آقای ادیمی' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#3a5a9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to Harbor Bank. A [[checking account|checking account]] holds money for everyday spending.', es: 'Bienvenido a Harbor Bank. Una [[checking account|cuenta corriente]] guarda dinero para gastos diarios.', fa: 'به بانک هاربر خوش آمدی. [[checking account|حساب جاری]] پول را برای مصرف روزانه نگه می‌دارد.' },
        { en: 'You [[deposit|deposit]] money in and withdraw money out. You can write checks too.', es: 'Haces un [[deposit|depósito]] para meter dinero y retiras para sacarlo. También puedes hacer cheques.', fa: 'پول را [[deposit|واریز]] می‌کنی و پول را برداشت می‌کنی. چک هم نوشته می‌توانی.' },
        { en: 'Each month we send a [[statement|statement]]. It lists every deposit and payment.', es: 'Cada mes enviamos un [[statement|estado de cuenta]]. Muestra cada depósito y cada pago.', fa: 'هر ماه یک [[statement|صورت حساب]] می‌فرستیم. هر واریز و هر پرداخت در آن است.' }
      ] },
    { at: [3, 13], name: { en: 'Nia', es: 'Nia', fa: 'نیا' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#c04a3a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I serve food at this harbor cafe. I earn a small wage per hour.', es: 'Sirvo comida en este café del puerto. Gano un pequeño salario por hora.', fa: 'من در این کافهٔ بندر غذا می‌آورم. یک مزد ساعتی کم می‌گیرم.' },
        { en: 'Happy customers also leave [[tips|tips]]. Tips are extra money for good service.', es: 'Los clientes contentos también dejan [[tips|propinas]]. Son dinero extra por un buen servicio.', fa: 'مشتریان خوش هم [[tips|انعام]] می‌گذارند. انعام پول اضافه برای خدمت خوب است.' },
        { en: 'Tips change every day. Some days are busy, and some are slow.', es: 'Las propinas cambian cada día. Algunos días hay mucha gente y otros no.', fa: 'انعام هر روز فرق می‌کند. بعضی روزها مصروف است و بعضی روزها آرام.' }
      ] },
    { at: [9, 13], name: { en: 'Leo', es: 'Leo', fa: 'لیو' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#e0a030', pants: '#3a4a2a', style: 'short' },
      lines: [
        { en: 'I walk dogs for my neighbors. I work for myself. I am [[self-employed|self-employed]].', es: 'Paseo perros de mis vecinos. Trabajo para mí mismo. Soy [[self-employed|trabajador independiente]].', fa: 'من سگ‌های همسایه‌ها را گشت می‌دهم. برای خودم کار می‌کنم. من [[self-employed|خودکار]] هستم.' },
        { en: 'No boss takes taxes out of my pay. I must save for my own taxes.', es: 'Ningún jefe me quita impuestos del pago. Debo ahorrar para mis propios impuestos.', fa: 'هیچ رئیسی از پولم مالیات کم نمی‌کند. باید برای مالیات خودم پول جدا کنم.' },
        { en: 'My cousin sells cars. She earns a [[commission|commission]]: part of each sale.', es: 'Mi prima vende carros. Gana una [[commission|comisión]]: una parte de cada venta.', fa: 'دختر کاکایم موتر می‌فروشد. او [[commission|کمیشن]] می‌گیرد: یک بخش از هر فروش.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: Harbor Fresh Market (J roof over a wall row h; its door opens into the break room), the parking lot
     (l) with produce stands (m). North-east: Harbor Bank (Q over h) with the ATM sign beside it, tall apartments (U).
     Row 11: the downtown street (l). South: the harbor cafe and Leo's home (roofs over hdh), a small park with flowers,
     the bus stop, then the waterfront walk (row 17) along the Elizabeth River (~) with two docks (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJJJJ...T....QQQQQ..UUU.T',
    'T.JJJJJJJJJJ........hhdhhx.UUU.T',
    'T.hhhhdhhhhh..x...........::::.T',
    'T.llllllllll..................,T',
    'T.lmmlllllll..T.....,,....T....T',
    'T.llllllllll........,,.........T',
    'T.llllllllll...........T.......T',
    'T.....................:::......T',
    'T.T...........T.........::...T.T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T.RRR...QQQ........x...........T',
    'T.hdh...hdh....................T',
    'T.............T.....,,,....T...T',
    'T...T...x...........,,,........T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    '~~~~~~kk~~~~~~~~~~~~~kkk~~~~~~~~',
    '~~~~~~kk~~~~~~~~~~~~~kkk~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [12, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 9], at: [12, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps north, toward the grocery store.', es: 'Desde esta nota, camina 5 pasos al norte, hacia el supermercado.', fa: 'از این یادداشت، ۵ قدم به شمال برو، به طرف دکان خوراکه.' },
      text: { en: 'An old pay envelope! Long ago, many workers got paid in cash, in an envelope.', es: '¡Un sobre de pago antiguo! Hace mucho, muchos trabajadores cobraban en efectivo, en un sobre.', fa: 'یک پاکت کهنهٔ معاش! در گذشته، بسیار کارگران معاش را نقد، در یک پاکت می‌گرفتند.' } },
    { clueAt: [20, 16], at: [20, 14], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps north, into the flowers.', es: 'Desde esta nota, camina 2 pasos al norte, hasta las flores.', fa: 'از این یادداشت، ۲ قدم به شمال برو، میان گل‌ها.' },
      text: { en: 'A harbor shell! Ships sail from Norfolk to the Chesapeake Bay and the Atlantic Ocean.', es: '¡Una concha del puerto! Los barcos salen de Norfolk hacia la bahía de Chesapeake y el océano Atlántico.', fa: 'یک صدف بندر! کشتی‌ها از نورفک به خلیج چیساپیک و اقیانوس اطلس می‌روند.' } }
  ],

  words: {
    income: { en: 'money you get, like pay from a job', es: 'dinero que recibes, como el pago de un trabajo', fa: 'پولی که به دست می‌آوری، مثل معاش یک کار' },
    wage: { en: 'pay for each hour you work', es: 'pago por cada hora que trabajas', fa: 'پول برای هر ساعتی که کار می‌کنی' },
    salary: { en: 'a set amount of pay for the year, split into paychecks', es: 'una cantidad fija de pago por año, dividida en cheques de pago', fa: 'یک مقدار معین معاش برای سال، که در چند معاش تقسیم می‌شود' },
    tips: { en: 'extra money customers give for good service', es: 'dinero extra que los clientes dan por un buen servicio', fa: 'پول اضافه که مشتریان برای خدمت خوب می‌دهند' },
    commission: { en: 'pay that is a part of each sale you make', es: 'pago que es una parte de cada venta que haces', fa: 'معاشی که یک بخش از هر فروش توست' },
    'self-employed': { en: 'working for yourself, not for a boss', es: 'trabajar para ti mismo, no para un jefe', fa: 'کار کردن برای خودت، نه برای یک رئیس' },
    'gross pay': { en: 'pay before anything is taken out (hours × rate)', es: 'el pago antes de quitar nada (horas × tarifa)', fa: 'معاش پیش از کم شدن هر چیز (ساعت × نرخ)' },
    'net pay': { en: 'take-home pay: what is left after deductions', es: 'el pago que te llevas: lo que queda después de las deducciones', fa: 'معاشی که به دستت می‌رسد: آنچه بعد از کسرها می‌ماند' },
    deduction: { en: 'money taken out of your pay, like taxes', es: 'dinero que se quita de tu pago, como los impuestos', fa: 'پولی که از معاشت کم می‌شود، مثل مالیات' },
    fica: { en: 'Social Security and Medicare taxes, taken out together', es: 'los impuestos del Seguro Social y Medicare, que se quitan juntos', fa: 'مالیات تامین اجتماعی و مدیکر، که یکجا کم می‌شوند' },
    'pay stub': { en: 'a paper that shows your pay and every deduction', es: 'un papel que muestra tu pago y cada deducción', fa: 'ورقی که معاش تو و هر کسر را نشان می‌دهد' },
    'direct deposit': { en: 'your pay goes right into your bank account', es: 'tu pago va directo a tu cuenta del banco', fa: 'معاشت مستقیم به حساب بانکی‌ات می‌رود' },
    'checking account': { en: 'a bank account for everyday spending', es: 'una cuenta del banco para los gastos de cada día', fa: 'یک حساب بانکی برای مصرف روزانه' },
    deposit: { en: 'to put money into your account', es: 'meter dinero en tu cuenta', fa: 'گذاشتن پول در حسابت' },
    'debit card': { en: 'a card that takes money right from your checking account', es: 'una tarjeta que saca dinero directo de tu cuenta corriente', fa: 'کارتی که پول را مستقیم از حساب جاری‌ات برمی‌دارد' },
    balance: { en: 'how much money is in your account now', es: 'cuánto dinero hay ahora en tu cuenta', fa: 'چقدر پول حالا در حسابت است' },
    register: { en: 'a list where you write each deposit and payment', es: 'una lista donde anotas cada depósito y cada pago', fa: 'یک فهرست که هر واریز و هر پرداخت را در آن می‌نویسی' },
    overdraft: { en: 'spending more than is in your account; banks may charge a fee', es: 'gastar más de lo que hay en tu cuenta; el banco puede cobrar una multa', fa: 'مصرف بیشتر از پول حسابت؛ بانک شاید جریمه بگیرد' },
    statement: { en: 'a monthly list from the bank of all your account activity', es: 'una lista mensual del banco con todo lo que pasó en tu cuenta', fa: 'یک فهرست ماهانه از بانک دربارهٔ همهٔ کارهای حسابت' }
  },

  npcs: [
    {
      x: 5, y: 7,
      name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      role: { en: 'Cashier, first job', es: 'Cajera, primer trabajo', fa: 'صندوق‌دار، اولین کار' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f9a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am 16, and this is my first job! I am a cashier here.', es: '¡Tengo 16 años y este es mi primer trabajo! Soy cajera aquí.', fa: 'من ۱۶ ساله هستم و این اولین کار من است! اینجا صندوق‌دار هستم.' },
        { en: 'I earn $15 an hour. I worked 20 hours in two weeks.', es: 'Gano $15 por hora. Trabajé 20 horas en dos semanas.', fa: 'ساعتی ۱۵ دالر می‌گیرم. در دو هفته ۲۰ ساعت کار کردم.' },
        { en: '20 × $15 = $300. That is my [[gross pay|gross pay]], before anything comes out.', es: '20 × $15 = $300. Ese es mi [[gross pay|pago bruto]], antes de quitar nada.', fa: '۲۰ × ۱۵ دالر = ۳۰۰ دالر. این [[gross pay|معاش ناخالص]] من است، پیش از کم شدن هر چیز.' },
        { en: 'But I take home $255. That is my [[net pay|net pay]].', es: 'Pero me llevo $255. Ese es mi [[net pay|pago neto]].', fa: 'اما ۲۵۵ دالر به دستم می‌رسد. این [[net pay|معاش خالص]] من است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Jada works 20 hours at $15 an hour. What is her gross pay?', es: 'Jada trabaja 20 horas a $15 la hora. ¿Cuál es su pago bruto?', fa: 'جادا ۲۰ ساعت با ساعتی ۱۵ دالر کار می‌کند. معاش ناخالص او چقدر است؟' },
        choices: [
          { ok: true, t: { en: '$300', es: '$300', fa: '۳۰۰ دالر' },
            why: { en: 'Yes! Gross pay is hours × rate: 20 × $15 = $300.', es: '¡Sí! El pago bruto es horas × tarifa: 20 × $15 = $300.', fa: 'بله! معاش ناخالص ساعت × نرخ است: ۲۰ × ۱۵ دالر = ۳۰۰ دالر.' } },
          { t: { en: '$255', es: '$255', fa: '۲۵۵ دالر' },
            why: { en: 'No. $255 is her net pay, after deductions. Gross pay is before: $300.', es: 'No. $255 es su pago neto, después de las deducciones. El bruto es antes: $300.', fa: 'نه. ۲۵۵ دالر معاش خالص اوست، بعد از کسرها. ناخالص پیش از آن است: ۳۰۰ دالر.' } },
          { t: { en: '$35', es: '$35', fa: '۳۵ دالر' },
            why: { en: 'No. $35 is 20 + 15. Multiply instead: 20 × $15 = $300.', es: 'No. $35 es 20 + 15. Hay que multiplicar: 20 × $15 = $300.', fa: 'نه. ۳۵ یعنی ۲۰ + ۱۵. باید ضرب کنی: ۲۰ × ۱۵ دالر = ۳۰۰ دالر.' } }
        ]
      }
    },
    {
      x: 5, y: 15,
      name: { en: 'Ms. Ortiz', es: 'Sra. Ortiz', fa: 'خانم اورتیز' },
      role: { en: 'Volunteer tax helper', es: 'Voluntaria que ayuda con impuestos', fa: 'رضاکار کمک مالیاتی' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#8a4ac0', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I help people read their [[pay stub|pay stubs]]. A pay stub comes with each paycheck.', es: 'Ayudo a la gente a leer su [[pay stub|talón de pago]]. Viene con cada sueldo.', fa: 'من به مردم در خواندن [[pay stub|ورق معاش]] کمک می‌کنم. با هر معاش یک ورق می‌آید.' },
        { en: '[[deduction|Deductions]] are money taken out of your pay. Most go to taxes.', es: 'Las [[deduction|deducciones]] son dinero que se quita de tu pago. Casi todo es para impuestos.', fa: '[[deduction|کسرها]] پولی است که از معاشت کم می‌شود. بیشترش برای مالیات است.' },
        { en: 'Federal income tax goes to the US government. Virginia has a state income tax too.', es: 'El impuesto federal va al gobierno de EE. UU. Virginia también tiene un impuesto estatal.', fa: 'مالیات عایدات فدرال به حکومت امریکا می‌رود. ویرجینیا هم مالیات ایالتی دارد.' },
        { en: 'Social Security takes 6.2%. Medicare takes 1.45%. Together they are [[fica|FICA]].', es: 'El Seguro Social quita 6.2%. Medicare quita 1.45%. Juntos se llaman [[fica|FICA]].', fa: 'تامین اجتماعی ۶٫۲٪ کم می‌کند. مدیکر ۱٫۴۵٪. هر دو یکجا [[fica|FICA]] نام دارند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which two taxes together are called FICA?', es: '¿Qué dos impuestos juntos se llaman FICA?', fa: 'کدام دو مالیات یکجا FICA نام دارند؟' },
        choices: [
          { ok: true, t: { en: 'Social Security and Medicare', es: 'El Seguro Social y Medicare', fa: 'تامین اجتماعی و مدیکر' },
            why: { en: 'Yes! FICA is Social Security (6.2%) and Medicare (1.45%), taken out together.', es: '¡Sí! FICA es el Seguro Social (6.2%) y Medicare (1.45%), que se quitan juntos.', fa: 'بله! FICA یعنی تامین اجتماعی (۶٫۲٪) و مدیکر (۱٫۴۵٪) که یکجا کم می‌شوند.' } },
          { t: { en: 'Federal and state income tax', es: 'El impuesto federal y el estatal', fa: 'مالیات عایدات فدرال و ایالتی' },
            why: { en: 'No. Those are income taxes. FICA is Social Security and Medicare.', es: 'No. Esos son impuestos sobre los ingresos. FICA es el Seguro Social y Medicare.', fa: 'نه. اینها مالیات عایدات هستند. FICA یعنی تامین اجتماعی و مدیکر.' } },
          { t: { en: 'Sales tax and property tax', es: 'El impuesto de ventas y el de casas', fa: 'مالیات فروش و مالیات ملکیت' },
            why: { en: 'No. Those are not taken from a paycheck. FICA is Social Security and Medicare.', es: 'No. Esos no se quitan del sueldo. FICA es el Seguro Social y Medicare.', fa: 'نه. اینها از معاش کم نمی‌شوند. FICA یعنی تامین اجتماعی و مدیکر.' } }
        ]
      }
    },
    {
      x: 18, y: 12,
      name: { en: 'Mr. Bell', es: 'Sr. Bell', fa: 'آقای بل' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 0, hair: '#b8b8b8', shirt: '#2a5a8a', pants: '#2a2a2a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'My pay goes right into my bank account. That is [[direct deposit|direct deposit]].', es: 'Mi pago va directo a mi cuenta. Eso es un [[direct deposit|depósito directo]].', fa: 'معاشم مستقیم به حساب بانکی‌ام می‌رود. این [[direct deposit|واریز مستقیم]] است.' },
        { en: 'I pay with a [[debit card|debit card]]. It takes money right from my account.', es: 'Pago con una [[debit card|tarjeta de débito]]. Saca dinero directo de mi cuenta.', fa: 'با [[debit card|کارت دبیت]] پول می‌دهم. پول را مستقیم از حسابم برمی‌دارد.' },
        { en: 'I write each payment in a [[register|register]]. Then I know my [[balance|balance]].', es: 'Anoto cada pago en un [[register|registro]]. Así sé mi [[balance|saldo]].', fa: 'هر پرداخت را در یک [[register|دفترچه]] می‌نویسم. اینطور [[balance|موجودی]] خود را می‌دانم.' },
        { en: 'Spending more than you have is an [[overdraft|overdraft]]. Banks may charge a fee.', es: 'Gastar más de lo que tienes es un [[overdraft|sobregiro]]. El banco puede cobrar una multa.', fa: 'مصرف بیشتر از پولی که داری [[overdraft|برداشت اضافه]] است. بانک شاید جریمه بگیرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Mr. Bell has $40 in his account. He pays $50 with his debit card. What happens?', es: 'El Sr. Bell tiene $40 en su cuenta. Paga $50 con su tarjeta de débito. ¿Qué pasa?', fa: 'آقای بل ۴۰ دالر در حسابش دارد. با کارت دبیت ۵۰ دالر می‌پردازد. چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'An overdraft, and maybe a fee', es: 'Un sobregiro, y tal vez una multa', fa: 'برداشت اضافه، و شاید جریمه' },
            why: { en: 'Yes! He spent $10 more than he had. The bank may charge a fee.', es: '¡Sí! Gastó $10 más de lo que tenía. El banco puede cobrar una multa.', fa: 'بله! او ۱۰ دالر بیشتر از داشته‌اش مصرف کرد. بانک شاید جریمه بگیرد.' } },
          { t: { en: 'Nothing, the card is free money', es: 'Nada, la tarjeta es dinero gratis', fa: 'هیچ، کارت پول مفت است' },
            why: { en: 'No. A debit card uses your own money. It is not free money.', es: 'No. La tarjeta de débito usa tu propio dinero. No es dinero gratis.', fa: 'نه. کارت دبیت از پول خودت کار می‌گیرد. پول مفت نیست.' } },
          { t: { en: 'The store pays the extra $10', es: 'La tienda paga los $10 extra', fa: 'دکان ۱۰ دالر اضافه را می‌دهد' },
            why: { en: 'No. The store does not pay for him. He spent more than he had: an overdraft.', es: 'No. La tienda no paga por él. Gastó más de lo que tenía: un sobregiro.', fa: 'نه. دکان برایش پول نمی‌دهد. او بیشتر از داشته‌اش مصرف کرد: برداشت اضافه.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 3, text: { en: 'HARBOR FRESH MARKET · Norfolk, Virginia · Now hiring cashiers and stock clerks. Paid by the hour.', es: 'HARBOR FRESH MARKET · Norfolk, Virginia · Buscamos cajeros y reponedores. Pago por hora.', fa: 'دکان خوراکهٔ هاربر فرش · نورفک، ویرجینیا · صندوق‌دار و کارگر قفسه می‌خواهیم. مزد ساعتی.' } },
    { x: 25, y: 2, text: { en: 'ATM · Take out cash or check your balance. Use your debit card and secret PIN.', es: 'CAJERO AUTOMÁTICO · Saca efectivo o mira tu saldo. Usa tu tarjeta de débito y tu clave secreta.', fa: 'ماشین پول · پول نقد بگیر یا موجودی‌ات را ببین. از کارت دبیت و رمز پنهانت کار بگیر.' } },
    { x: 19, y: 12, text: { en: 'BUS STOP · Many workers ride the bus to their jobs downtown.', es: 'PARADA DE AUTOBÚS · Muchos trabajadores toman el autobús para ir a su trabajo en el centro.', fa: 'ایستگاه بس · بسیار کارگران با بس به کار خود در مرکز شهر می‌روند.' } },
    { x: 8, y: 15, text: { en: 'NORFOLK WATERFRONT · Elizabeth River · Ships sail from here to the Chesapeake Bay and the ocean.', es: 'MALECÓN DE NORFOLK · Río Elizabeth · Desde aquí los barcos van a la bahía de Chesapeake y al océano.', fa: 'ساحل نورفک · دریای الیزابت · کشتی‌ها از اینجا به خلیج چیساپیک و اقیانوس می‌روند.' } }
  ],

  /* the quest: Kofi the stock clerk (gold !) by the river, south-east -> Ms. Lee the bank teller, north-east
     -> carry the right paper to Mr. Patel the payroll clerk at the grocery store, north-west -> back to Kofi.
     Direct deposit needs the bank's routing number and the account number: a voided check shows both. */
  quest: {
    stat: 'pla',
    title: { en: 'Set Up Direct Deposit', es: 'Activa el depósito directo', fa: 'واریز مستقیم را جور کن' },
    giver: {
      x: 26, y: 16,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Stock clerk', es: 'Reponedor', fa: 'کارگر قفسه' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f9a5a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I just opened a checking account! I want my pay to go right there.', es: '¡Acabo de abrir una cuenta corriente! Quiero que mi pago vaya directo ahí.', fa: 'تازه یک حساب جاری باز کردم! می‌خواهم معاشم مستقیم به آنجا برود.' },
        { en: 'Ms. Lee at the bank knows how. The bank is north of the street.', es: 'La Sra. Lee del banco sabe cómo. El banco está al norte de la calle.', fa: 'خانم لی در بانک می‌داند چطور. بانک در شمال سرک است.' }
      ],
      wait: { en: 'Ms. Lee works at the bank, north of the street.', es: 'La Sra. Lee trabaja en el banco, al norte de la calle.', fa: 'خانم لی در بانک کار می‌کند، در شمال سرک.' },
      thanks: { en: 'Direct deposit is set! Now my pay goes right into my account.', es: '¡El depósito directo está listo! Ahora mi pago va directo a mi cuenta.', fa: 'واریز مستقیم جور شد! حالا معاشم مستقیم به حسابم می‌رود.' }
    },
    contact: {
      x: 23, y: 4,
      name: { en: 'Ms. Lee', es: 'Sra. Lee', fa: 'خانم لی' },
      role: { en: 'Bank teller', es: 'Cajera del banco', fa: 'کارمند بانک' },
      look: { skin: 1, hair: '#120c08', shirt: '#3a5a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'For direct deposit, the boss needs two numbers from your bank.', es: 'Para el depósito directo, el jefe necesita dos números de tu banco.', fa: 'برای واریز مستقیم، رئیس دو نمبر از بانکت لازم دارد.' },
        { en: 'Your account number and the routing number. Both are printed on every check.', es: 'Tu número de cuenta y el número de ruta. Los dos están en cada cheque.', fa: 'نمبر حسابت و نمبر مسیر بانک. هر دو روی هر چک چاپ شده‌اند.' },
        { en: 'Bring Mr. Patel a paper with both numbers. He is at the grocery store.', es: 'Llévale al Sr. Patel un papel con los dos números. Está en el supermercado.', fa: 'برای آقای پاتیل ورقی با هر دو نمبر ببر. او در دکان خوراکه است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 9, y: 5,
        name: { en: 'Mr. Patel', es: 'Sr. Patel', fa: 'آقای پاتیل' },
        role: { en: 'Payroll clerk', es: 'Encargado de pagos', fa: 'مسئول معاش' },
        look: { skin: 2, hair: '#2a2a2a', shirt: '#f0f0e8', pants: '#3a3a3a', style: 'short' },
        lines: [
          { en: 'I do payroll. I make sure every worker is paid the right amount.', es: 'Me encargo de los pagos. Cuido que cada trabajador cobre lo correcto.', fa: 'من کار معاش را می‌کنم. مطمئن می‌شوم هر کارگر معاش درست بگیرد.' },
          { en: 'Some workers also pay for health insurance or retirement from their pay.', es: 'Algunos trabajadores también pagan seguro médico o retiro con su sueldo.', fa: 'بعضی کارگران از معاش خود برای بیمهٔ صحی یا تقاعد هم پول می‌دهند.' }
        ]
      },
      q: { en: 'For Kofi\'s direct deposit, I need his two bank numbers. Bring me a paper that shows them.', es: 'Para el depósito directo de Kofi, necesito sus dos números del banco. Tráeme un papel que los muestre.', fa: 'برای واریز مستقیم کوفی، دو نمبر بانکی‌اش را لازم دارم. ورقی بیاور که آنها را نشان بدهد.' },
      choices: [
        { ok: true, at: [18, 4], icon: '📄', t: { en: 'A voided check', es: 'Un cheque anulado', fa: 'یک چک باطل شده' },
          why: { en: 'Yes! A voided check shows both numbers. VOID means no one can cash it.', es: '¡Sí! Un cheque anulado muestra los dos números. VOID quiere decir que nadie lo puede cobrar.', fa: 'بله! چک باطل شده هر دو نمبر را نشان می‌دهد. VOID یعنی هیچ‌کس آن را نقد کرده نمی‌تواند.' } },
        { at: [3, 7], icon: '🧾', t: { en: 'A store receipt', es: 'Un recibo de la tienda', fa: 'یک رسید دکان' },
          why: { en: 'A receipt shows what someone bought. It has no bank numbers on it.', es: 'Un recibo muestra lo que alguien compró. No tiene números del banco.', fa: 'رسید نشان می‌دهد کسی چه خریده. هیچ نمبر بانکی روی آن نیست.' } },
        { at: [21, 12], icon: '🎫', t: { en: 'A bus pass', es: 'Un pase de autobús', fa: 'یک کارت بس' },
          why: { en: 'A bus pass gets you a ride. It has no bank numbers on it.', es: 'Un pase de autobús sirve para viajar. No tiene números del banco.', fa: 'کارت بس برای سواری است. هیچ نمبر بانکی روی آن نیست.' } }
      ],
      item: { icon: '📝', name: { en: 'A direct deposit form', es: 'Un formulario de depósito directo', fa: 'یک فورم واریز مستقیم' } }
    }
  },

  scraps: [[30, 1], [1, 10], [6, 19]],
  smudges: [[24, 8], [12, 14]],

  challenge: {
    at: [13, 16],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post for each line of Jada's pay stub, in a loop: from the store lot, past the bank,
    // down to the bus stop and along the waterfront to the stone
    spots: [[8, 9], [16, 8], [27, 6], [29, 13], [24, 15], [16, 15], [3, 16], [10, 16]],
    stat: 'pla',
    title: { en: 'Read Jada\'s pay stub', es: 'Lee el talón de pago de Jada', fa: 'ورق معاش جادا را بخوان' },
    intro: { en: 'The Grump tore Jada\'s [[pay stub|pay stub]] into 8 lines! Read every post. Then answer.',
      es: '¡El Gruñón rompió el [[pay stub|talón de pago]] de Jada en 8 líneas! Lee cada poste. Luego responde.',
      fa: 'غرغرو [[pay stub|ورق معاش]] جادا را به ۸ خط پاره کرد! هر تیر را بخوان. بعد جواب بده.' },
    table: {
      head: [
        { en: 'Pay stub line', es: 'Línea del talón', fa: 'خط ورق معاش' },
        { en: 'Amount', es: 'Cantidad', fa: 'مقدار' }
      ],
      rows: [
        [{ en: 'Hours worked (2 weeks)', es: 'Horas trabajadas (2 semanas)', fa: 'ساعت‌های کار (۲ هفته)' }, { en: '20 hours', es: '20 horas', fa: '۲۰ ساعت' }],
        [{ en: 'Pay rate', es: 'Tarifa de pago', fa: 'نرخ معاش' }, { en: '$15 an hour', es: '$15 por hora', fa: 'ساعتی ۱۵ دالر' }],
        [{ en: 'Gross pay (20 × $15)', es: 'Pago bruto (20 × $15)', fa: 'معاش ناخالص (۲۰ × ۱۵ دالر)' }, { en: '$300', es: '$300', fa: '۳۰۰ دالر' }],
        [{ en: 'Federal income tax', es: 'Impuesto federal sobre ingresos', fa: 'مالیات عایدات فدرال' }, { en: '− $14', es: '− $14', fa: '− ۱۴ دالر' }],
        [{ en: 'Virginia state income tax', es: 'Impuesto estatal de Virginia', fa: 'مالیات عایدات ایالت ویرجینیا' }, { en: '− $8', es: '− $8', fa: '− ۸ دالر' }],
        [{ en: 'Social Security (FICA)', es: 'Seguro Social (FICA)', fa: 'تامین اجتماعی (FICA)' }, { en: '− $19', es: '− $19', fa: '− ۱۹ دالر' }],
        [{ en: 'Medicare (FICA)', es: 'Medicare (FICA)', fa: 'مدیکر (FICA)' }, { en: '− $4', es: '− $4', fa: '− ۴ دالر' }],
        [{ en: 'Net pay (direct deposit)', es: 'Pago neto (depósito directo)', fa: 'معاش خالص (واریز مستقیم)' }, { en: '$255', es: '$255', fa: '۲۵۵ دالر' }]
      ],
      note: { en: 'Amounts are rounded to whole dollars. Tax amounts are examples; real ones depend on each worker.', es: 'Las cantidades están redondeadas a dólares enteros. Los impuestos son ejemplos; los reales dependen de cada persona.', fa: 'مقدارها به دالر کامل گرد شده‌اند. مالیات‌ها مثال هستند؛ مالیات واقعی برای هر کس فرق دارد.' }
    },
    questions: [
      { q: { en: 'What is Jada\'s gross pay?', es: '¿Cuál es el pago bruto de Jada?', fa: 'معاش ناخالص جادا چقدر است؟' },
        choices: [{ en: '$300', es: '$300', fa: '۳۰۰ دالر' }, { en: '$255', es: '$255', fa: '۲۵۵ دالر' }, { en: '$45', es: '$45', fa: '۴۵ دالر' }, { en: '$15', es: '$15', fa: '۱۵ دالر' }], answer: 0,
        why: { en: 'Gross pay is hours × rate: 20 × $15 = $300. Nothing is taken out yet.', es: 'El pago bruto es horas × tarifa: 20 × $15 = $300. Todavía no se quita nada.', fa: 'معاش ناخالص ساعت × نرخ است: ۲۰ × ۱۵ دالر = ۳۰۰ دالر. هنوز چیزی کم نشده.' } },
      { q: { en: 'How much was taken out in all?', es: '¿Cuánto se quitó en total?', fa: 'روی هم رفته چقدر کم شد؟' },
        choices: [{ en: '$45', es: '$45', fa: '۴۵ دالر' }, { en: '$41', es: '$41', fa: '۴۱ دالر' }, { en: '$23', es: '$23', fa: '۲۳ دالر' }, { en: '$22', es: '$22', fa: '۲۲ دالر' }], answer: 0,
        why: { en: 'Add every deduction: $14 + $8 + $19 + $4 = $45.', es: 'Suma cada deducción: $14 + $8 + $19 + $4 = $45.', fa: 'همهٔ کسرها را جمع کن: ۱۴ + ۸ + ۱۹ + ۴ = ۴۵ دالر.' } },
      { q: { en: 'Which two lines are FICA?', es: '¿Qué dos líneas son FICA?', fa: 'کدام دو خط FICA هستند؟' },
        choices: [{ en: 'Social Security and Medicare', es: 'Seguro Social y Medicare', fa: 'تامین اجتماعی و مدیکر' }, { en: 'Federal and Virginia income tax', es: 'Impuesto federal y de Virginia', fa: 'مالیات فدرال و ویرجینیا' }, { en: 'Gross pay and net pay', es: 'Pago bruto y pago neto', fa: 'معاش ناخالص و خالص' }, { en: 'Hours worked and pay rate', es: 'Horas trabajadas y tarifa', fa: 'ساعت‌های کار و نرخ معاش' }], answer: 0,
        why: { en: 'FICA is Social Security and Medicare: $19 + $4 = $23 on this stub.', es: 'FICA es el Seguro Social y Medicare: $19 + $4 = $23 en este talón.', fa: 'FICA یعنی تامین اجتماعی و مدیکر: ۱۹ + ۴ = ۲۳ دالر در این ورق.' } },
      { q: { en: 'How much goes into Jada\'s checking account by direct deposit?', es: '¿Cuánto llega a la cuenta corriente de Jada por depósito directo?', fa: 'با واریز مستقیم چقدر به حساب جاری جادا می‌رود؟' },
        choices: [{ en: '$255', es: '$255', fa: '۲۵۵ دالر' }, { en: '$300', es: '$300', fa: '۳۰۰ دالر' }, { en: '$245', es: '$245', fa: '۲۴۵ دالر' }, { en: '$277', es: '$277', fa: '۲۷۷ دالر' }], answer: 0,
        why: { en: 'Direct deposit sends net pay: $300 − $45 = $255.', es: 'El depósito directo envía el pago neto: $300 − $45 = $255.', fa: 'واریز مستقیم معاش خالص را می‌فرستد: ۳۰۰ − ۴۵ = ۲۵۵ دالر.' } }
    ],
    success: { en: 'Jada\'s pay stub is whole! $300 gross − $45 deductions = $255 net pay.', es: '¡El talón de Jada está completo! $300 bruto − $45 de deducciones = $255 neto.', fa: 'ورق معاش جادا کامل شد! ۳۰۰ دالر ناخالص − ۴۵ دالر کسر = ۲۵۵ دالر خالص.' }
  },

  boss: {
    at: [22, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Grabby Grump', es: 'El Gruñón Agarrón', fa: 'غرغروی چنگ‌انداز' },
    appear: { en: 'The Grabby Grump is hiding in the fog on the dock!', es: '¡El Gruñón Agarrón se esconde en la niebla del muelle!', fa: 'غرغروی چنگ‌انداز در مه روی اسکله پنهان است!' },
    taunt: { en: 'Payday? Ha! I grabbed a bit of every paycheck. Now nobody knows where it went!', es: '¿Día de pago? ¡Ja! Agarré un poco de cada sueldo. ¡Nadie sabe adónde fue!', fa: 'روز معاش؟ ها! از هر معاش کمی چنگ زدم. حالا هیچ‌کس نمی‌داند کجا رفت!' },
    win: { en: 'The fog lifts off the harbor. Ledger page 4.1 floats down into your hands!', es: 'La niebla se va del puerto. ¡La página 4.1 del libro cae en tus manos!', fa: 'مه از روی بندر کنار می‌رود. صفحهٔ ۴.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is gross pay?', es: '¿Qué es el pago bruto?', fa: 'معاش ناخالص چیست؟' },
        choices: [
          { en: 'Pay before anything is taken out', es: 'El pago antes de quitar nada', fa: 'معاش پیش از کم شدن هر چیز' },
          { en: 'Pay after all taxes are taken out', es: 'El pago después de quitar impuestos', fa: 'معاش بعد از کم شدن مالیات‌ها' },
          { en: 'Money you keep in a jar at home', es: 'El dinero que guardas en un frasco', fa: 'پولی که در بوتل خانه نگه می‌داری' },
          { en: 'A fee the bank charges each month', es: 'Una multa que el banco cobra al mes', fa: 'جریمه‌ای که بانک هر ماه می‌گیرد' }],
        answer: 0,
        why: { en: 'Gross pay is all you earned, before deductions. For a wage, it is hours × rate.', es: 'El pago bruto es todo lo que ganaste, antes de deducciones. Por hora, es horas × tarifa.', fa: 'معاش ناخالص همهٔ کمایی توست، پیش از کسرها. برای مزد ساعتی، ساعت × نرخ است.' } },
      { q: { en: 'Sam works 10 hours at $12 an hour. What is his gross pay?', es: 'Sam trabaja 10 horas a $12 la hora. ¿Cuál es su pago bruto?', fa: 'سام ۱۰ ساعت با ساعتی ۱۲ دالر کار می‌کند. معاش ناخالص او چقدر است؟' },
        choices: [
          { en: '$120', es: '$120', fa: '۱۲۰ دالر' },
          { en: '$22', es: '$22', fa: '۲۲ دالر' },
          { en: '$102', es: '$102', fa: '۱۰۲ دالر' },
          { en: '$112', es: '$112', fa: '۱۱۲ دالر' }],
        answer: 0,
        why: { en: 'Multiply hours by the rate: 10 × $12 = $120.', es: 'Multiplica las horas por la tarifa: 10 × $12 = $120.', fa: 'ساعت را در نرخ ضرب کن: ۱۰ × ۱۲ دالر = ۱۲۰ دالر.' } },
      { q: { en: 'Sam\'s gross pay is $120. His deductions are $18. What is his net pay?', es: 'El pago bruto de Sam es $120. Sus deducciones son $18. ¿Cuál es su pago neto?', fa: 'معاش ناخالص سام ۱۲۰ دالر است. کسرهایش ۱۸ دالر است. معاش خالص او چقدر است؟' },
        choices: [
          { en: '$102', es: '$102', fa: '۱۰۲ دالر' },
          { en: '$138', es: '$138', fa: '۱۳۸ دالر' },
          { en: '$120', es: '$120', fa: '۱۲۰ دالر' },
          { en: '$18', es: '$18', fa: '۱۸ دالر' }],
        answer: 0,
        why: { en: 'Net pay is gross pay minus deductions: $120 − $18 = $102.', es: 'El pago neto es el bruto menos las deducciones: $120 − $18 = $102.', fa: 'معاش خالص یعنی ناخالص منفی کسرها: ۱۲۰ − ۱۸ = ۱۰۲ دالر.' } },
      { q: { en: 'Which two taxes are called FICA?', es: '¿Qué dos impuestos se llaman FICA?', fa: 'کدام دو مالیات FICA نام دارند؟' },
        choices: [
          { en: 'Social Security and Medicare', es: 'El Seguro Social y Medicare', fa: 'تامین اجتماعی و مدیکر' },
          { en: 'Federal and state income tax', es: 'El impuesto federal y el estatal', fa: 'مالیات عایدات فدرال و ایالتی' },
          { en: 'Sales tax and gas tax', es: 'El de ventas y el de gasolina', fa: 'مالیات فروش و مالیات تیل' },
          { en: 'Car tax and home tax', es: 'El del carro y el de la casa', fa: 'مالیات موتر و مالیات خانه' }],
        answer: 0,
        why: { en: 'FICA means two taxes taken out together: Social Security and Medicare.', es: 'FICA son dos impuestos que se quitan juntos: el Seguro Social y Medicare.', fa: 'FICA یعنی دو مالیات که یکجا کم می‌شوند: تامین اجتماعی و مدیکر.' } },
      { q: { en: 'Social Security takes 6.2% of your pay. How much does Medicare take?', es: 'El Seguro Social quita 6.2% de tu pago. ¿Cuánto quita Medicare?', fa: 'تامین اجتماعی ۶٫۲٪ معاشت را کم می‌کند. مدیکر چقدر کم می‌کند؟' },
        choices: [
          { en: '1.45%', es: '1.45%', fa: '۱٫۴۵٪' },
          { en: '6.2%', es: '6.2%', fa: '۶٫۲٪' },
          { en: '14.5%', es: '14.5%', fa: '۱۴٫۵٪' },
          { en: '50%', es: '50%', fa: '۵۰٪' }],
        answer: 0,
        why: { en: 'Medicare takes 1.45%. With Social Security, FICA takes 7.65% of your pay.', es: 'Medicare quita 1.45%. Con el Seguro Social, FICA quita 7.65% de tu pago.', fa: 'مدیکر ۱٫۴۵٪ کم می‌کند. با تامین اجتماعی، FICA روی هم ۷٫۶۵٪ معاشت است.' } },
      { q: { en: 'Nia serves food. Customers leave her extra money for good service. What is it?', es: 'Nia sirve comida. Los clientes le dejan dinero extra por buen servicio. ¿Qué es?', fa: 'نیا غذا می‌آورد. مشتریان برای خدمت خوب به او پول اضافه می‌دهند. این چیست؟' },
        choices: [
          { en: 'Tips', es: 'Propinas', fa: 'انعام' },
          { en: 'A salary', es: 'Un sueldo fijo', fa: 'معاش ثابت' },
          { en: 'A deduction', es: 'Una deducción', fa: 'یک کسر' },
          { en: 'A loan', es: 'Un préstamo', fa: 'یک قرض' }],
        answer: 0,
        why: { en: 'Tips are extra money from customers. A salary is a set amount for the year.', es: 'Las propinas son dinero extra de los clientes. Un sueldo fijo es lo mismo cada año.', fa: 'انعام پول اضافه از مشتریان است. معاش ثابت یک مقدار معین برای سال است.' } },
      { q: { en: 'Your balance is $50. You pay $20 with your debit card. What is your new balance?', es: 'Tu saldo es $50. Pagas $20 con tu tarjeta de débito. ¿Cuál es tu nuevo saldo?', fa: 'موجودی تو ۵۰ دالر است. با کارت دبیت ۲۰ دالر می‌پردازی. موجودی نوی تو چقدر است؟' },
        choices: [
          { en: '$30', es: '$30', fa: '۳۰ دالر' },
          { en: '$70', es: '$70', fa: '۷۰ دالر' },
          { en: '$50', es: '$50', fa: '۵۰ دالر' },
          { en: '$20', es: '$20', fa: '۲۰ دالر' }],
        answer: 0,
        why: { en: 'A debit card takes money right from your account: $50 − $20 = $30.', es: 'La tarjeta de débito saca dinero directo de tu cuenta: $50 − $20 = $30.', fa: 'کارت دبیت پول را مستقیم از حسابت برمی‌دارد: ۵۰ − ۲۰ = ۳۰ دالر.' } },
      { q: { en: 'What is an overdraft?', es: '¿Qué es un sobregiro?', fa: 'برداشت اضافه چیست؟' },
        choices: [
          { en: 'Spending more than your account has', es: 'Gastar más de lo que hay en tu cuenta', fa: 'مصرف بیشتر از پول حسابت' },
          { en: 'Putting your paycheck into the bank', es: 'Meter tu sueldo en el banco', fa: 'گذاشتن معاشت در بانک' },
          { en: 'A list of every payment this month', es: 'Una lista de cada pago del mes', fa: 'فهرست هر پرداخت در این ماه' },
          { en: 'Getting paid for each hour of work', es: 'Cobrar por cada hora de trabajo', fa: 'گرفتن پول برای هر ساعت کار' }],
        answer: 0,
        why: { en: 'An overdraft is spending more than you have. Banks may charge a fee for it.', es: 'Un sobregiro es gastar más de lo que tienes. El banco puede cobrar una multa.', fa: 'برداشت اضافه یعنی مصرف بیشتر از داشته‌ات. بانک شاید برای آن جریمه بگیرد.' } }
    ]
  },

  learned: [
    { en: '[[gross pay|Gross pay]] is hours × rate. [[net pay|Net pay]] is what you take home.', es: 'El [[gross pay|pago bruto]] es horas × tarifa. El [[net pay|pago neto]] es lo que te llevas.', fa: '[[gross pay|معاش ناخالص]] ساعت × نرخ است. [[net pay|معاش خالص]] آن است که به دستت می‌رسد.' },
    { en: '[[deduction|Deductions]] include income taxes and [[fica|FICA]]: Social Security and Medicare.', es: 'Las [[deduction|deducciones]] incluyen impuestos sobre ingresos y [[fica|FICA]]: Seguro Social y Medicare.', fa: '[[deduction|کسرها]] شامل مالیات عایدات و [[fica|FICA]] هستند: تامین اجتماعی و مدیکر.' },
    { en: 'A [[debit card|debit card]] takes money from your [[checking account|checking account]]. Track your [[balance|balance]]!', es: 'La [[debit card|tarjeta de débito]] saca dinero de tu [[checking account|cuenta corriente]]. ¡Cuida tu [[balance|saldo]]!', fa: '[[debit card|کارت دبیت]] پول را از [[checking account|حساب جاری]] برمی‌دارد. [[balance|موجودی]] خود را بدان!' }
  ],
  reflect: {
    q: { en: 'Think of a job you might like someday. Would it pay a wage, a salary, tips or commission?', es: 'Piensa en un trabajo que te gustaría algún día. ¿Pagaría por hora, sueldo fijo, propinas o comisión?', fa: 'به کاری فکر کن که شاید یک روز دوست داشته باشی. مزد ساعتی می‌دهد، معاش ثابت، انعام یا کمیشن؟' },
    starter: { en: 'A job I might like is', es: 'Un trabajo que me gustaría es', fa: 'کاری که شاید دوست داشته باشم' }
  }
};
