/* COINWALKER · Episode 8.2 · Financial Aid and Paying for College
   Williamsburg, Virginia, today: an open house day at a college in Williamsburg (the college is not named).
   North half: three brick buildings along the top (the library in the west, the main hall in the middle, the
   financial aid office in the east), a brick path (l) in front, and the sunken garden (a long lawn, trees at its
   corners, flowers on its edges) between two brick walks. Row 11 is the brick walk, east to west.
   South half: the dorm (west), the bookstore (no brand, middle-east), a small pond with a wooden bridge (b),
   and a road (l) down the east side with the bus stop sign. The ledger stone asks the student to carry each aid
   card to Grant, Scholarship, Work-study, Federal loan or Private loan. */
window.EPISODE = {
  id: '8.2',
  realm: 8,
  sol: 'EPF',
  title: { en: 'Paying for College', es: 'Cómo pagar la universidad', fa: 'پرداخت پول کالج' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Williamsburg, college open house', es: 'Williamsburg, día de puertas abiertas', fa: 'ویلیامزبرگ، روز دروازه‌های باز کالج' },
  intro: [
    { en: 'The Grump tore the page on paying for college. Now students lose hope.',
      es: 'El Gruñón rompió la página sobre cómo pagar la universidad. Ahora los estudiantes pierden la esperanza.',
      fa: 'غرغرو صفحهٔ پرداخت پول کالج را پاره کرد. حالا شاگردان ناامید می‌شوند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Williamsburg on the world map (no timeline in this game) */
  scenes: {
    at: [-76.71, 37.27],
    start: [
      { en: 'Long ago, Williamsburg was the capital of the Virginia colony.',
        es: 'Hace mucho tiempo, Williamsburg fue la capital de la colonia de Virginia.',
        fa: 'سال‌ها پیش، ویلیامزبرگ پایتخت مستعمرهٔ ویرجینیا بود.' },
      { en: 'Today a college in Williamsburg holds an open house for new students.',
        es: 'Hoy una universidad de Williamsburg tiene un día de puertas abiertas para nuevos estudiantes.',
        fa: 'امروز یک کالج در ویلیامزبرگ برای شاگردان نو روز دروازه‌های باز دارد.' },
      { en: 'Visitors ask one big question: how can a student pay for college?',
        es: 'Los visitantes hacen una gran pregunta: ¿cómo puede un estudiante pagar la universidad?',
        fa: 'مهمانان یک سوال بزرگ می‌پرسند: یک شاگرد چطور پول کالج را بپردازد؟' }
    ],
    page: { en: 'FAFSA stands for Free Application for Federal Student Aid.',
      es: 'FAFSA quiere decir Solicitud Gratuita de Ayuda Federal para Estudiantes.',
      fa: 'فافسا یعنی درخواست رایگان برای کمک دولت فدرال به شاگردان.' },
    guess: {
      q: { en: 'Does it cost money to fill out the FAFSA?', es: '¿Cuesta dinero llenar la FAFSA?', fa: 'آیا پر کردن فافسا پول دارد؟' },
      choices: [
        { t: { en: '🆓 No, it is free', es: '🆓 No, es gratis', fa: '🆓 نه، رایگان است' }, ok: true },
        { t: { en: '💵 Yes, a small fee', es: '💵 Sí, un pago pequeño', fa: '💵 بله، یک فیس کم' } }
      ],
      why: { en: 'The F in FAFSA means Free. Never pay anyone to file it.', es: 'La F de FAFSA significa gratis (Free). Nunca le pagues a nadie para llenarla.', fa: 'حرف F در فافسا یعنی رایگان. هرگز به کسی برای پر کردنش پول نده.' }
    },
    next: {
      q: { en: 'Next: your first career. What comes first, the interview or the résumé?', es: 'Ahora: tu primer trabajo. ¿Qué va primero, la entrevista o el currículum?', fa: 'بعدی: اولین شغل تو. اول کدام می‌آید، مصاحبه یا خلص سوانح؟' },
      choices: [
        { t: { en: '📄 The résumé comes first', es: '📄 Primero el currículum', fa: '📄 اول خلص سوانح' }, ok: true },
        { t: { en: '🤝 The interview comes first', es: '🤝 Primero la entrevista', fa: '🤝 اول مصاحبه' } }
      ],
      why: { en: 'You send a résumé first. If they like it, they invite you to an interview.', es: 'Primero mandas tu currículum. Si les gusta, te invitan a una entrevista.', fa: 'اول خلص سوانح را می‌فرستی. اگر خوششان بیاید، تو را به مصاحبه می‌خواهند.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 1, hair: '#1a1008', shirt: '#6a3a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the library! Many students look for [[scholarship|scholarships]] here.', es: '¡Bienvenido a la biblioteca! Muchos estudiantes buscan [[scholarship|becas]] aquí.', fa: 'به کتابخانه خوش آمدی! شاگردان زیادی اینجا دنبال [[scholarship|بورسیه]] می‌گردند.' },
        { en: 'A scholarship is free money for grades, talents, service or your background.', es: 'Una beca es dinero gratis por tus notas, talentos, servicio o tu origen.', fa: 'بورسیه پول رایگان برای نمره، استعداد، خدمت یا پیشینهٔ توست.' },
        { en: 'Many small local ones add up. Apply to lots of them!', es: 'Muchas becas pequeñas del lugar suman bastante. ¡Pide muchas!', fa: 'بورسیه‌های کوچک محلی زیاد با هم جمع می‌شوند. برای زیادشان درخواست بده!' }
      ] },
    { at: [16, 2], name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      look: { skin: 2, hair: '#120c08', shirt: '#2a6a9a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'Welcome to the open house at a college in Williamsburg! I give tours.', es: '¡Bienvenido al día de puertas abiertas de una universidad en Williamsburg! Yo doy recorridos.', fa: 'به روز دروازه‌های باز یک کالج در ویلیامزبرگ خوش آمدی! من مهمانان را می‌گردانم.' },
        { en: 'This is a public college. Virginia residents pay [[in-state tuition|in-state tuition]].', es: 'Esta es una universidad pública. Los residentes de Virginia pagan [[in-state tuition|matrícula estatal]].', fa: 'این یک کالج دولتی است. باشندگان ویرجینیا [[in-state tuition|فیس داخل ایالت]] می‌پردازند.' },
        { en: 'In-state tuition is lower. Students from other states pay more.', es: 'La matrícula estatal es más baja. Los estudiantes de otros estados pagan más.', fa: 'فیس داخل ایالت کمتر است. شاگردان ایالت‌های دیگر بیشتر می‌پردازند.' }
      ] },
    { at: [28, 2], name: { en: 'Mr. Ali', es: 'Sr. Ali', fa: 'آقای علی' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#f0f0e8', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'A [[private loan|private loan]] comes from a bank, not the government.', es: 'Un [[private loan|préstamo privado]] viene de un banco, no del gobierno.', fa: 'یک [[private loan|قرض شخصی]] از بانک می‌آید، نه از دولت.' },
        { en: 'It usually costs more and has fewer protections. Try free money first.', es: 'Casi siempre cuesta más y te protege menos. Busca primero el dinero gratis.', fa: 'معمولاً گران‌تر است و محافظت کمتر دارد. اول پول رایگان را امتحان کن.' },
        { en: 'For some students, like some immigrant students, rules can differ; a school counselor can help.', es: 'Para algunos estudiantes, como algunos inmigrantes, las reglas pueden ser distintas; un consejero escolar puede ayudar.', fa: 'برای بعضی شاگردان، مثل بعضی شاگردان مهاجر، قانون‌ها فرق کرده می‌توانند؛ مشاور مکتب کمک کرده می‌تواند.' }
      ] },
    { at: [5, 13], name: { en: 'Jamal', es: 'Jamal', fa: 'جمال' },
      look: { skin: 5, hair: '#120c08', shirt: '#c0392b', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'This is a dorm. Housing and food are part of the cost of college.', es: 'Esto es una residencia. La vivienda y la comida son parte del costo de la universidad.', fa: 'این لیلیه است. جای بود و باش و خوراک بخشی از هزینهٔ کالج هستند.' },
        { en: 'I share my room with a roommate. Many students do.', es: 'Comparto mi cuarto con un compañero. Muchos estudiantes lo hacen.', fa: 'من اتاقم را با یک هم‌اتاقی شریک هستم. شاگردان زیادی همین کار را می‌کنند.' },
        { en: 'Tuition is only one piece. Look at the whole [[cost of attendance|cost]].', es: 'La matrícula es solo una parte. Mira el [[cost of attendance|costo]] completo.', fa: 'فیس تحصیلی فقط یک بخش است. همهٔ [[cost of attendance|هزینه]] را ببین.' }
      ] },
    { at: [21, 13], name: { en: 'Sofia', es: 'Sofía', fa: 'سوفیا' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#2f7f5a', pants: '#3a3a3a', style: 'long' },
      lines: [
        { en: 'Books are a cost too. A new book here costs $80.', es: 'Los libros también cuestan. Un libro nuevo aquí cuesta $80.', fa: 'کتاب هم هزینه دارد. یک کتاب نو اینجا ۸۰ دالر است.' },
        { en: 'A used copy costs $50. That saves you $30.', es: 'Uno usado cuesta $50. Así ahorras $30.', fa: 'یک کتاب کهنه ۵۰ دالر است. ۳۰ دالر پس‌انداز می‌کنی.' },
        { en: 'You can also borrow some books from the library for free.', es: 'También puedes pedir prestados algunos libros gratis en la biblioteca.', fa: 'بعضی کتاب‌ها را هم می‌توانی رایگان از کتابخانه امانت بگیری.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the library (x 2-6), the main hall (x 10-22) and the financial aid office (x 26-30), each a
     brick building with a door; a brick path along row 3; the sunken garden (x 10-21, y 5-9) between brick walks
     at x 9 and x 22. Row 11: the brick walk, east-west.
     South: the dorm (x 2-7) and the bookstore (x 19-23); trees in the south-west; the pond (~) with a wooden
     bridge (b) across its middle; the road (l, x 28-29) down the east side, with the bus stop sign (x). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRRRR...RRRRRRRRRRRRR...RRRRRT',
    'T.hhdhh...hhhhhhdhhhhhh...hhdhhT',
    'TllllllllllllllllllllllllllllllT',
    'T..x.....l............l....x...T',
    'T........lT,,,,,,,,,,Tl........T',
    'T........l,..........,l........T',
    'T..T.....l,..........,l.....T..T',
    'T........l,..........,l........T',
    'T........lT,,,,,,,,,,Tl........T',
    'T.T......l............l......T.T',
    'TllllllllllllllllllllllllllllllT',
    'T.RRRRRR.....T.....RRRRR....ll.T',
    'T.hhhdhh...........hhdhh....ll.T',
    'T...................,,......ll.T',
    'T..TT.......................llxT',
    'T.TTTT....~~~~~.............ll.T',
    'T.TTTT....bbbbb......,,,....ll.T',
    'T..TT.....~~~~~.............ll.T',
    'T...........................ll.T',
    'T..x........................ll.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 4],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [26, 10], at: [26, 13], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, across the brick walk.', es: 'Desde esta nota, camina 3 pasos al sur, cruzando el camino de ladrillo.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، از راه خشتی بگذر.' },
      text: { en: 'An old coin! Saving a little each month can help pay for books.', es: '¡Una moneda antigua! Ahorrar un poco cada mes puede ayudar a pagar los libros.', fa: 'یک سکهٔ قدیمی! هر ماه کمی پس‌انداز در پرداخت پول کتاب کمک می‌کند.' } },
    { clueAt: [1, 14], at: [1, 18], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps south, past the trees.', es: 'Desde esta nota, camina 4 pasos al sur, pasando los árboles.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از کنار درختان.' },
      text: { en: 'A pressed flower in an old used book! Used books cost less than new ones.', es: '¡Una flor seca en un libro usado! Los libros usados cuestan menos que los nuevos.', fa: 'یک گل خشک در یک کتاب کهنه! کتاب کهنه از کتاب نو ارزان‌تر است.' } }
  ],

  words: {
    'financial aid': { en: 'money to help pay for college: grants, scholarships, work-study and loans', es: 'dinero para ayudar a pagar la universidad: subvenciones, becas, estudio-trabajo y préstamos', fa: 'پول برای کمک به پرداخت کالج: کمک بلاعوض، بورسیه، کار و تحصیل و قرض' },
    'cost of attendance': { en: 'the full cost of a school year: tuition, fees, housing, food, books, transportation', es: 'el costo total de un año escolar: matrícula, cuotas, vivienda, comida, libros, transporte', fa: 'همهٔ هزینهٔ یک سال تحصیلی: فیس، هزینه‌های دیگر، جای بود و باش، خوراک، کتاب، رفت و آمد' },
    tuition: { en: 'the price you pay a school for your classes', es: 'el precio que pagas a la escuela por tus clases', fa: 'پولی که برای صنف‌هایت به مکتب یا کالج می‌پردازی' },
    'in-state tuition': { en: 'the lower tuition that Virginia residents pay at Virginia public colleges', es: 'la matrícula más baja que pagan los residentes de Virginia en universidades públicas de Virginia', fa: 'فیس کمتری که باشندگان ویرجینیا در کالج‌های دولتی ویرجینیا می‌پردازند' },
    fafsa: { en: 'the free federal form for student aid; fill it out each year', es: 'el formulario federal gratis para la ayuda estudiantil; se llena cada año', fa: 'فورمهٔ رایگان دولت فدرال برای کمک به شاگردان؛ هر سال پرش کن' },
    grant: { en: 'free money for school, based on need, that you usually do not repay', es: 'dinero gratis para estudiar, según tu necesidad, que casi nunca devuelves', fa: 'پول رایگان برای تحصیل، بر اساس ضرورت، که معمولاً پس نمی‌دهی' },
    scholarship: { en: 'free money for grades, talents, community service or background', es: 'dinero gratis por notas, talentos, servicio comunitario u origen', fa: 'پول رایگان برای نمره، استعداد، خدمت به جامعه یا پیشینه' },
    'work-study': { en: 'a part-time job, often on campus, to earn money for school', es: 'un trabajo de medio tiempo, casi siempre en el campus, para ganar dinero para estudiar', fa: 'یک کار نیمه‌وقت، اکثراً در کالج، برای کمایی پول تحصیل' },
    loan: { en: 'money you borrow and must pay back, with interest', es: 'dinero que pides prestado y debes devolver, con intereses', fa: 'پولی که قرض می‌گیری و باید با سود پس بدهی' },
    interest: { en: 'extra money you pay for borrowing money', es: 'dinero extra que pagas por pedir dinero prestado', fa: 'پول اضافه که برای قرض گرفتن می‌پردازی' },
    subsidized: { en: 'a federal loan where the government pays the interest while you are in school', es: 'un préstamo federal en el que el gobierno paga los intereses mientras estudias', fa: 'قرض دولت فدرال که دولت سودش را تا وقتی درس می‌خوانی می‌پردازد' },
    unsubsidized: { en: 'a federal loan where interest grows from the start', es: 'un préstamo federal en el que los intereses crecen desde el principio', fa: 'قرض دولت فدرال که سودش از روز اول زیاد می‌شود' },
    'private loan': { en: 'a loan from a bank; it usually costs more and protects you less', es: 'un préstamo de un banco; casi siempre cuesta más y te protege menos', fa: 'قرض از بانک؛ معمولاً گران‌تر است و کمتر از تو محافظت می‌کند' },
    scam: { en: 'a trick to take your money', es: 'un engaño para quitarte tu dinero', fa: 'یک فریب برای گرفتن پول تو' }
  },

  npcs: [
    {
      x: 25, y: 8,
      name: { en: 'Ms. Reyes', es: 'Sra. Reyes', fa: 'خانم ریس' },
      role: { en: 'Financial aid counselor', es: 'Consejera de ayuda financiera', fa: 'مشاور کمک مالی' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#8a2a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Hello! I help students find money for college. It is called [[financial aid|financial aid]].', es: '¡Hola! Ayudo a los estudiantes a encontrar dinero para la universidad. Se llama [[financial aid|ayuda financiera]].', fa: 'سلام! من به شاگردان کمک می‌کنم پول کالج را پیدا کنند. به این [[financial aid|کمک مالی]] می‌گویند.' },
        { en: 'Step one is the [[fafsa|FAFSA]]. It is free. Never pay to file it.', es: 'El primer paso es la [[fafsa|FAFSA]]. Es gratis. Nunca pagues por llenarla.', fa: 'قدم اول [[fafsa|فافسا]] است. رایگان است. هرگز برای پر کردنش پول نده.' },
        { en: 'Fill it out each year, as early as you can.', es: 'Llénala cada año, lo más pronto que puedas.', fa: 'هر سال پرش کن، هر قدر زودتر که بتوانی.' },
        { en: 'It can open the door to [[grant|grants]], work-study and federal loans.', es: 'Puede abrirte la puerta a [[grant|subvenciones]], estudio-trabajo y préstamos federales.', fa: 'می‌تواند دروازهٔ [[grant|کمک بلاعوض]]، کار و تحصیل و قرض فدرال را باز کند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How much does it cost to file the FAFSA?', es: '¿Cuánto cuesta llenar la FAFSA?', fa: 'پر کردن فافسا چقدر پول دارد؟' },
        choices: [
          { ok: true, t: { en: 'Nothing, it is free', es: 'Nada, es gratis', fa: 'هیچ، رایگان است' },
            why: { en: 'Yes! The F in FAFSA stands for Free. Never pay anyone to file it.', es: '¡Sí! La F de FAFSA quiere decir gratis. Nunca le pagues a nadie para llenarla.', fa: 'بله! حرف F در فافسا یعنی رایگان. هرگز به کسی برای پر کردنش پول نده.' } },
          { t: { en: 'About $50 each year', es: 'Unos $50 cada año', fa: 'حدود ۵۰ دالر هر سال' },
            why: { en: 'No. The FAFSA is free. Someone who asks you to pay may be a scam.', es: 'No. La FAFSA es gratis. Alguien que te pide pagar puede ser una estafa.', fa: 'نه. فافسا رایگان است. کسی که از تو پول می‌خواهد شاید فریب‌کار باشد.' } },
          { t: { en: 'Free only the first year', es: 'Gratis solo el primer año', fa: 'فقط سال اول رایگان' },
            why: { en: 'No. It is free every year. And you fill it out each year.', es: 'No. Es gratis todos los años. Y la llenas cada año.', fa: 'نه. هر سال رایگان است. و هر سال آن را پر می‌کنی.' } }
        ]
      }
    },
    {
      x: 7, y: 15,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'College student', es: 'Estudiante universitario', fa: 'محصل کالج' },
      look: { skin: 5, hair: '#120c08', shirt: '#d0902a', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I am in my second year here. College costs more than tuition.', es: 'Estoy en mi segundo año aquí. La universidad cuesta más que la matrícula.', fa: 'من سال دوم اینجا هستم. کالج از فیس تحصیلی بیشتر هزینه دارد.' },
        { en: 'The [[cost of attendance|cost of attendance]] counts [[tuition|tuition]], fees, housing and food.', es: 'El [[cost of attendance|costo de asistencia]] incluye la [[tuition|matrícula]], cuotas, vivienda y comida.', fa: '[[cost of attendance|هزینهٔ حضور]] شامل [[tuition|فیس]]، هزینه‌های دیگر، جای بود و باش و خوراک است.' },
        { en: 'It also counts books and transportation, like my bus rides home.', es: 'También incluye libros y transporte, como mis viajes en autobús a casa.', fa: 'کتاب و رفت و آمد هم شامل است، مثل سفرهایم با بس به خانه.' },
        { en: 'Know the full cost first. Then you can plan how to pay.', es: 'Primero conoce el costo total. Luego puedes planear cómo pagar.', fa: 'اول همهٔ هزینه را بدان. بعد پلان کرده می‌توانی چطور بپردازی.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'College costs more than tuition. What else is part of the cost?', es: 'La universidad cuesta más que la matrícula. ¿Qué más es parte del costo?', fa: 'کالج از فیس بیشتر هزینه دارد. دیگر چه بخشی از هزینه است؟' },
        choices: [
          { ok: true, t: { en: 'Housing, food, books and the bus', es: 'Vivienda, comida, libros y el autobús', fa: 'جای بود و باش، خوراک، کتاب و بس' },
            why: { en: 'Yes! The cost of attendance counts housing, food, books and transportation too.', es: '¡Sí! El costo de asistencia también incluye vivienda, comida, libros y transporte.', fa: 'بله! هزینهٔ حضور جای بود و باش، خوراک، کتاب و رفت و آمد را هم شامل است.' } },
          { t: { en: 'Only the price of every single class', es: 'Solo el precio de cada una de las clases', fa: 'فقط قیمت هر یک از صنف‌ها' },
            why: { en: 'No. Tuition is only one piece. Housing, food, books and travel count too.', es: 'No. La matrícula es solo una parte. Vivienda, comida, libros y viajes también cuentan.', fa: 'نه. فیس فقط یک بخش است. جای بود و باش، خوراک، کتاب و سفر هم حساب می‌شوند.' } },
          { t: { en: 'Movie tickets and new sneakers', es: 'Boletos de cine y tenis nuevos', fa: 'تکت سینما و بوت ورزشی نو' },
            why: { en: 'No. Those are wants. The cost of attendance is what you need for school.', es: 'No. Esos son deseos. El costo de asistencia es lo que necesitas para estudiar.', fa: 'نه. اینها خواهش هستند. هزینهٔ حضور چیزی است که برای تحصیل ضرورت داری.' } }
        ]
      }
    },
    {
      x: 27, y: 15,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیل' },
      role: { en: 'Young teacher, a past student', es: 'Maestro joven, exalumno', fa: 'معلم جوان، شاگرد سابق' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#3a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I finished college two years ago. Now I pay back my [[loan|loans]].', es: 'Terminé la universidad hace dos años. Ahora pago mis [[loan|préstamos]].', fa: 'من دو سال پیش کالج را تمام کردم. حالا [[loan|قرض‌هایم]] را پس می‌دهم.' },
        { en: 'A loan must be repaid with [[interest|interest]], extra money for borrowing.', es: 'Un préstamo se devuelve con [[interest|intereses]], dinero extra por pedir prestado.', fa: 'قرض باید با [[interest|سود]] پس داده شود، یعنی پول اضافه برای قرض گرفتن.' },
        { en: 'With a [[subsidized|subsidized]] loan, the government pays the interest while you are in school.', es: 'Con un préstamo [[subsidized|subsidiado]], el gobierno paga los intereses mientras estudias.', fa: 'در [[subsidized|قرض حمایت‌شده]]، دولت سود را تا وقتی درس می‌خوانی می‌پردازد.' },
        { en: 'With an [[unsubsidized|unsubsidized]] loan, interest grows from the start. Borrow only what you need.', es: 'Con un préstamo [[unsubsidized|no subsidiado]], los intereses crecen desde el principio. Pide solo lo que necesitas.', fa: 'در [[unsubsidized|قرض بدون حمایت]]، سود از روز اول زیاد می‌شود. فقط به اندازهٔ ضرورت قرض بگیر.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'With which federal loan does interest grow from the very start?', es: '¿Con qué préstamo federal crecen los intereses desde el principio?', fa: 'در کدام قرض فدرال سود از همان روز اول زیاد می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'An unsubsidized loan', es: 'Un préstamo no subsidiado', fa: 'قرض بدون حمایت' },
            why: { en: 'Yes! With an unsubsidized loan, interest grows from day one, even in school.', es: '¡Sí! Con un préstamo no subsidiado, los intereses crecen desde el primer día, aun estudiando.', fa: 'بله! در قرض بدون حمایت، سود از روز اول زیاد می‌شود، حتی وقت درس.' } },
          { t: { en: 'A subsidized loan', es: 'Un préstamo subsidiado', fa: 'قرض حمایت‌شده' },
            why: { en: 'No. With a subsidized loan, the government pays the interest while you are in school.', es: 'No. Con un préstamo subsidiado, el gobierno paga los intereses mientras estudias.', fa: 'نه. در قرض حمایت‌شده، دولت سود را تا وقتی درس می‌خوانی می‌پردازد.' } },
          { t: { en: 'A federal Pell Grant', es: 'Una subvención Pell', fa: 'کمک بلاعوض پل' },
            why: { en: 'No. A grant is not a loan. You usually do not pay it back.', es: 'No. Una subvención no es un préstamo. Casi nunca se devuelve.', fa: 'نه. کمک بلاعوض قرض نیست. معمولاً آن را پس نمی‌دهی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 4, text: { en: 'A COLLEGE IN WILLIAMSBURG, VIRGINIA · Open house today. Visit the library, the garden and the dorm.', es: 'UNA UNIVERSIDAD EN WILLIAMSBURG, VIRGINIA · Hoy, puertas abiertas. Visita la biblioteca, el jardín y la residencia.', fa: 'یک کالج در ویلیامزبرگ، ویرجینیا · امروز روز دروازه‌های باز. کتابخانه، باغ و لیلیه را ببین.' } },
    { x: 27, y: 4, text: { en: 'FINANCIAL AID OFFICE · Ask about grants, scholarships, work-study and loans. Help here is free.', es: 'OFICINA DE AYUDA FINANCIERA · Pregunta por subvenciones, becas, estudio-trabajo y préstamos. La ayuda es gratis.', fa: 'دفتر کمک مالی · دربارهٔ کمک بلاعوض، بورسیه، کار و تحصیل و قرض بپرس. کمک اینجا رایگان است.' } },
    { x: 30, y: 15, text: { en: 'BUS STOP · Getting around costs money. Transportation is part of the cost of attendance.', es: 'PARADA DE AUTOBÚS · Moverse cuesta dinero. El transporte es parte del costo de asistencia.', fa: 'ایستگاه بس · رفت و آمد پول دارد. رفت و آمد بخشی از هزینهٔ حضور است.' } },
    { x: 3, y: 20, text: { en: 'SCAM ALERT · If a scholarship asks you to pay to apply, it may be a scam.', es: 'ALERTA DE ESTAFA · Si una beca te pide pagar para participar, puede ser una estafa.', fa: 'هشدار فریب · اگر یک بورسیه برای درخواست از تو پول بخواهد، شاید فریب باشد.' } }
  ],

  /* the quest: Amara (gold !) in the north-west -> Mr. Boateng in the sunken garden (north-east screen)
     -> her scholarship list on the west end of the pond bridge (south-west) -> back to Amara. */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Scholarship List', es: 'La lista de becas perdida', fa: 'فهرست گم‌شدهٔ بورسیه‌ها' },
    giver: {
      x: 5, y: 8,
      name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      role: { en: 'High school senior', es: 'Estudiante de último año de secundaria', fa: 'شاگرد صنف دوازدهم' },
      look: { skin: 4, hair: '#120c08', shirt: '#e07a2a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I made a list of small local [[scholarship|scholarships]]. The wind took it!', es: 'Hice una lista de pequeñas [[scholarship|becas]] locales. ¡El viento se la llevó!', fa: 'من یک فهرست از [[scholarship|بورسیه‌های]] کوچک محلی ساختم. باد آن را برد!' },
        { en: 'Mr. Boateng keeps the gardens. He sees where things blow. Please ask him!', es: 'El Sr. Boateng cuida los jardines. Ve adónde vuela todo. ¡Pregúntale, por favor!', fa: 'آقای بواتنگ از باغ‌ها نگهداری می‌کند. می‌بیند باد چیزها را کجا می‌برد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Mr. Boateng works in the sunken garden, east of here.', es: 'El Sr. Boateng trabaja en el jardín hundido, al este de aquí.', fa: 'آقای بواتنگ در باغ پایین‌افتاده، شرق اینجا، کار می‌کند.' },
      thanks: { en: 'My list! $500 plus $300 plus $200 is $1,000 in small scholarships!', es: '¡Mi lista! $500 más $300 más $200 son $1,000 en becas pequeñas.', fa: 'فهرستم! ۵۰۰ جمع ۳۰۰ جمع ۲۰۰ می‌شود ۱۰۰۰ دالر بورسیهٔ کوچک!' }
    },
    contact: {
      x: 19, y: 7,
      name: { en: 'Mr. Boateng', es: 'Sr. Boateng', fa: 'آقای بواتنگ' },
      role: { en: 'Groundskeeper', es: 'Jardinero del campus', fa: 'باغبان کالج' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#4a7a3a', pants: '#3a2a1a', hat: '#c8a060', style: 'short' },
      lines: [
        { en: 'This lawn is the sunken garden. It sits lower than the land around it.', es: 'Este césped es el jardín hundido. Está más bajo que la tierra de alrededor.', fa: 'این چمن باغ پایین‌افتاده است. از زمین‌های اطرافش پایین‌تر است.' },
        { en: 'A paper blew south, past the brick walk, to the pond bridge\'s west end.', es: 'Un papel voló al sur, pasó el camino de ladrillo y llegó al lado oeste del puente del estanque.', fa: 'یک کاغذ به جنوب پرید، از راه خشتی گذشت، تا سر غربی پل حوض.' }
      ]
    },
    action: {
      type: 'find',
      at: [10, 17],
      hint: { en: 'The west end of the pond bridge, in the south-west', es: 'El lado oeste del puente del estanque, en el suroeste', fa: 'سر غربی پل حوض، در جنوب غرب' },
      found: { en: 'The list! It was stuck on the bridge rail by the pond.', es: '¡La lista! Estaba atorada en la baranda del puente, junto al estanque.', fa: 'فهرست! به کتارهٔ پل کنار حوض گیر مانده بود.' },
      item: { icon: '📜', name: { en: 'A list of local scholarships', es: 'Una lista de becas locales', fa: 'یک فهرست بورسیه‌های محلی' } }
    }
  },

  scraps: [[1, 1], [1, 20], [30, 20]],
  smudges: [[12, 8], [22, 17]],

  challenge: {
    at: [8, 19],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each kind of aid: scholarships by the library, grants by the financial aid office,
    // federal loans in the sunken garden by the main hall, work-study by the bookstore, private loans by the
    // road to town (where the banks are)
    zones: [{ bin: 'scholar', x: 2, y: 5, w: 3, h: 2 }, { bin: 'grant', x: 24, y: 5, w: 3, h: 2 },
      { bin: 'fed', x: 13, y: 6, w: 4, h: 2 }, { bin: 'work', x: 17, y: 15, w: 4, h: 1 },
      { bin: 'private', x: 24, y: 18, w: 3, h: 2 }],
    stat: 'loc',
    title: { en: 'Which kind of aid is it?', es: '¿Qué tipo de ayuda es?', fa: 'کدام نوع کمک است؟' },
    intro: { en: 'There are 5 kinds of [[financial aid|aid]] here. Carry each card to its group.',
      es: 'Aquí hay 5 tipos de [[financial aid|ayuda]]. Lleva cada tarjeta a su grupo.',
      fa: 'اینجا ۵ نوع [[financial aid|کمک]] هست. هر کارت را پیش گروهش ببر.' },
    bins: [
      { id: 'grant', icon: '🎁', label: { en: 'Grant', es: 'Subvención', fa: 'کمک بلاعوض' }, sub: { en: 'free money, based on need', es: 'dinero gratis, según la necesidad', fa: 'پول رایگان، بر اساس ضرورت' } },
      { id: 'scholar', icon: '🏅', label: { en: 'Scholarship', es: 'Beca', fa: 'بورسیه' }, sub: { en: 'free money for grades, talents, service', es: 'dinero gratis por notas, talentos, servicio', fa: 'پول رایگان برای نمره، استعداد، خدمت' } },
      { id: 'work', icon: '💼', label: { en: 'Work-study', es: 'Estudio-trabajo', fa: 'کار و تحصیل' }, sub: { en: 'a part-time job on campus', es: 'un trabajo de medio tiempo en el campus', fa: 'یک کار نیمه‌وقت در کالج' } },
      { id: 'fed', icon: '🏛️', label: { en: 'Federal loan', es: 'Préstamo federal', fa: 'قرض فدرال' }, sub: { en: 'from the government; repay with interest', es: 'del gobierno; se devuelve con intereses', fa: 'از دولت؛ با سود پس داده می‌شود' } },
      { id: 'private', icon: '🏦', label: { en: 'Private loan', es: 'Préstamo privado', fa: 'قرض شخصی' }, sub: { en: 'from a bank; usually costs more', es: 'de un banco; casi siempre cuesta más', fa: 'از بانک؛ معمولاً گران‌تر' } }
    ],
    items: [
      { bin: 'grant', t: { en: 'A federal Pell Grant, based on need', es: 'Una subvención federal Pell, según la necesidad', fa: 'کمک بلاعوض فدرال پل، بر اساس ضرورت' },
        why: { en: 'A Pell Grant is a [[grant|grant]]. It is based on need. You usually do not repay it.', es: 'La subvención Pell es una [[grant|subvención]]. Depende de la necesidad. Casi nunca se devuelve.', fa: 'کمک پل یک [[grant|کمک بلاعوض]] است. بر اساس ضرورت است. معمولاً پس داده نمی‌شود.' } },
      { bin: 'grant', t: { en: 'Need-based money from the college that you do not repay', es: 'Dinero de la universidad, según la necesidad, que no devuelves', fa: 'پول کالج بر اساس ضرورت که پس نمی‌دهی' },
        why: { en: 'Money based on need that you do not repay is a [[grant|grant]].', es: 'El dinero según la necesidad que no devuelves es una [[grant|subvención]].', fa: 'پولی که بر اساس ضرورت است و پس نمی‌دهی [[grant|کمک بلاعوض]] است.' } },
      { bin: 'scholar', t: { en: '$500 from a local club for community service', es: '$500 de un club local por servicio comunitario', fa: '۵۰۰ دالر از یک انجمن محلی برای خدمت به جامعه' },
        why: { en: 'Free money for service is a [[scholarship|scholarship]]. Many small local ones add up.', es: 'El dinero gratis por servicio es una [[scholarship|beca]]. Muchas becas pequeñas suman.', fa: 'پول رایگان برای خدمت [[scholarship|بورسیه]] است. بورسیه‌های کوچک زیاد جمع می‌شوند.' } },
      { bin: 'scholar', t: { en: 'An award for playing the violin well', es: 'Un premio por tocar bien el violín', fa: 'یک جایزه برای خوب نواختن ویولن' },
        why: { en: 'Free money for a talent is a [[scholarship|scholarship]].', es: 'El dinero gratis por un talento es una [[scholarship|beca]].', fa: 'پول رایگان برای یک استعداد [[scholarship|بورسیه]] است.' } },
      { bin: 'work', t: { en: 'A job at the campus library, 10 hours a week', es: 'Un trabajo en la biblioteca del campus, 10 horas por semana', fa: 'یک کار در کتابخانهٔ کالج، ۱۰ ساعت در هفته' },
        why: { en: 'A part-time campus job that helps pay for school is [[work-study|work-study]].', es: 'Un trabajo de medio tiempo en el campus que ayuda a pagar es [[work-study|estudio-trabajo]].', fa: 'کار نیمه‌وقت در کالج که در پرداخت تحصیل کمک می‌کند [[work-study|کار و تحصیل]] است.' } },
      { bin: 'fed', t: { en: 'A government loan; the government pays the interest during school', es: 'Un préstamo del gobierno; el gobierno paga los intereses mientras estudias', fa: 'قرض دولت؛ دولت وقت درس سودش را می‌پردازد' },
        why: { en: 'That is a [[subsidized|subsidized]] federal loan. You still repay what you borrowed.', es: 'Es un préstamo federal [[subsidized|subsidiado]]. Igual devuelves lo que pediste prestado.', fa: 'این یک قرض فدرال [[subsidized|حمایت‌شده]] است. باز هم پولی را که گرفتی پس می‌دهی.' } },
      { bin: 'fed', t: { en: 'A government loan where interest grows from the start', es: 'Un préstamo del gobierno con intereses que crecen desde el principio', fa: 'قرض دولت که سودش از روز اول زیاد می‌شود' },
        why: { en: 'That is an [[unsubsidized|unsubsidized]] federal loan. You repay it with interest.', es: 'Es un préstamo federal [[unsubsidized|no subsidiado]]. Lo devuelves con intereses.', fa: 'این یک قرض فدرال [[unsubsidized|بدون حمایت]] است. آن را با سود پس می‌دهی.' } },
      { bin: 'private', t: { en: 'A loan from a bank, often with higher interest', es: 'Un préstamo de un banco, a menudo con intereses más altos', fa: 'قرض از بانک، اکثراً با سود بیشتر' },
        why: { en: 'A loan from a bank is a [[private loan|private loan]]. It usually costs more and protects you less.', es: 'Un préstamo de un banco es un [[private loan|préstamo privado]]. Casi siempre cuesta más y protege menos.', fa: 'قرض از بانک [[private loan|قرض شخصی]] است. معمولاً گران‌تر است و کمتر محافظت می‌کند.' } }
    ],
    success: { en: 'Every card is in its group! Free money first. Then borrow only what you need.', es: '¡Cada tarjeta está en su grupo! Primero el dinero gratis. Luego pide prestado solo lo necesario.', fa: 'هر کارت در گروه خودش است! اول پول رایگان. بعد فقط به اندازهٔ ضرورت قرض بگیر.' }
  },

  boss: {
    at: [20, 19],
    stat: 'hei',
    need: 3,
    name: { en: 'The Doubting Grump', es: 'El Gruñón Dudoso', fa: 'غرغروی شکاک' },
    appear: { en: 'The Doubting Grump is hiding in the fog south of the bookstore!', es: '¡El Gruñón Dudoso se esconde en la niebla al sur de la librería!', fa: 'غرغروی شکاک در مه جنوب کتاب‌فروشی پنهان است!' },
    taunt: { en: 'College? Too costly! Pay a stranger to do your forms. Borrow it ALL!', es: '¿La universidad? ¡Muy cara! Págale a un extraño por tus formularios. ¡Pide prestado TODO!', fa: 'کالج؟ خیلی گران! به یک بیگانه پول بده تا فورمه‌هایت را پر کند. همه را قرض بگیر!' },
    win: { en: 'The fog lifts over the brick walk. Ledger page 8.2 floats down into your hands!', es: 'La niebla se va del camino de ladrillo. ¡La página 8.2 del libro cae en tus manos!', fa: 'مه از روی راه خشتی کنار می‌رود. صفحهٔ ۸.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Lena needs $2,000 more for school. She can borrow $5,000. How much should she borrow?', es: 'Lena necesita $2,000 más para estudiar. Le prestan hasta $5,000. ¿Cuánto debe pedir?', fa: 'لینا برای تحصیل ۲۰۰۰ دالر دیگر ضرورت دارد. ۵۰۰۰ دالر قرض گرفته می‌تواند. چقدر بگیرد؟' },
        choices: [
          { en: '$2,000', es: '$2,000', fa: '۲۰۰۰ دالر' },
          { en: '$5,000', es: '$5,000', fa: '۵۰۰۰ دالر' },
          { en: '$7,000', es: '$7,000', fa: '۷۰۰۰ دالر' },
          { en: '$3,000', es: '$3,000', fa: '۳۰۰۰ دالر' }],
        answer: 0,
        why: { en: 'Borrow only what you need. Every dollar you borrow, you repay with interest.', es: 'Pide prestado solo lo que necesitas. Cada dólar prestado se devuelve con intereses.', fa: 'فقط به اندازهٔ ضرورت قرض بگیر. هر دالری که قرض می‌گیری، با سود پس می‌دهی.' } },
      { q: { en: 'What is true about the FAFSA?', es: '¿Qué es cierto sobre la FAFSA?', fa: 'کدام گپ دربارهٔ فافسا درست است؟' },
        choices: [
          { en: 'It is free; fill it out each year', es: 'Es gratis; se llena cada año', fa: 'رایگان است؛ هر سال پر می‌شود' },
          { en: 'It costs $50; fill it out once', es: 'Cuesta $50; se llena una vez', fa: '۵۰ دالر است؛ یک بار پر می‌شود' },
          { en: 'Only a bank can fill it out', es: 'Solo un banco la puede llenar', fa: 'فقط بانک آن را پر کرده می‌تواند' },
          { en: 'It is only for top students', es: 'Es solo para los mejores alumnos', fa: 'فقط برای شاگردان اول نمره است' }],
        answer: 0,
        why: { en: 'The FAFSA is free. Fill it out each year, as early as you can.', es: 'La FAFSA es gratis. Llénala cada año, lo más pronto que puedas.', fa: 'فافسا رایگان است. هر سال پرش کن، هر قدر زودتر که بتوانی.' } },
      { q: { en: 'Which kind of aid do you usually NOT pay back?', es: '¿Qué tipo de ayuda casi nunca devuelves?', fa: 'کدام نوع کمک را معمولاً پس نمی‌دهی؟' },
        choices: [
          { en: 'A grant', es: 'Una subvención', fa: 'کمک بلاعوض' },
          { en: 'A federal loan', es: 'Un préstamo federal', fa: 'قرض فدرال' },
          { en: 'A private loan', es: 'Un préstamo privado', fa: 'قرض شخصی' },
          { en: 'A bank loan', es: 'Un préstamo de banco', fa: 'قرض بانکی' }],
        answer: 0,
        why: { en: 'A grant is free money, based on need. You usually do not repay it.', es: 'Una subvención es dinero gratis, según la necesidad. Casi nunca se devuelve.', fa: 'کمک بلاعوض پول رایگان بر اساس ضرورت است. معمولاً پس داده نمی‌شود.' } },
      { q: { en: 'With a subsidized federal loan, who pays the interest while you are in school?', es: 'Con un préstamo federal subsidiado, ¿quién paga los intereses mientras estudias?', fa: 'در قرض فدرال حمایت‌شده، کی سود را وقت درس می‌پردازد؟' },
        choices: [
          { en: 'The government', es: 'El gobierno', fa: 'دولت' },
          { en: 'The student', es: 'El estudiante', fa: 'شاگرد' },
          { en: 'A bank in town', es: 'Un banco del pueblo', fa: 'یک بانک در شهر' },
          { en: 'The bookstore', es: 'La librería', fa: 'کتاب‌فروشی' }],
        answer: 0,
        why: { en: 'With a subsidized loan, the government pays the interest while you are in school.', es: 'Con un préstamo subsidiado, el gobierno paga los intereses mientras estudias.', fa: 'در قرض حمایت‌شده، دولت سود را تا وقتی درس می‌خوانی می‌پردازد.' } },
      { q: { en: 'What is work-study?', es: '¿Qué es estudio-trabajo?', fa: 'کار و تحصیل چیست؟' },
        choices: [
          { en: 'A part-time campus job to earn money for school', es: 'Un trabajo de medio tiempo en el campus para pagar los estudios', fa: 'یک کار نیمه‌وقت در کالج برای کمایی پول تحصیل' },
          { en: 'A class you must pass before you get any loan', es: 'Una clase que debes aprobar antes de recibir un préstamo', fa: 'صنفی که باید پیش از گرفتن قرض کامیاب شوی' },
          { en: 'A bank loan you repay by working at the bank', es: 'Un préstamo que pagas trabajando en el banco', fa: 'قرض بانکی که با کار در بانک پس می‌دهی' },
          { en: 'A free bus trip to visit other colleges', es: 'Un viaje gratis en autobús para ver otras universidades', fa: 'یک سفر رایگان با بس برای دیدن کالج‌های دیگر' }],
        answer: 0,
        why: { en: 'Work-study is a part-time job, often on campus. It helps you earn money for school.', es: 'Estudio-trabajo es un empleo de medio tiempo, casi siempre en el campus. Te ayuda a pagar los estudios.', fa: 'کار و تحصیل یک کار نیمه‌وقت، اکثراً در کالج، است. برای پول تحصیل کمک می‌کند.' } },
      { q: { en: 'A message says: "Pay $50 and win a scholarship!" What is it most likely?', es: 'Un mensaje dice: "¡Paga $50 y gana una beca!" ¿Qué es lo más probable?', fa: 'یک پیام می‌گوید: «۵۰ دالر بده و بورسیه ببر!» به احتمال زیاد چیست؟' },
        choices: [
          { en: 'A scam', es: 'Una estafa', fa: 'یک فریب' },
          { en: 'A grant', es: 'Una subvención', fa: 'کمک بلاعوض' },
          { en: 'A great deal', es: 'Una gran oferta', fa: 'یک معاملهٔ خوب' },
          { en: 'A federal loan', es: 'Un préstamo federal', fa: 'قرض فدرال' }],
        answer: 0,
        why: { en: 'Watch out! A scholarship that asks you to pay is a warning sign of a scam.', es: '¡Cuidado! Una beca que te pide pagar es una señal de estafa.', fa: 'هوشیار باش! بورسیه‌ای که از تو پول بخواهد نشانهٔ فریب است.' } },
      { q: { en: 'Who usually pays lower tuition at a Virginia public college?', es: '¿Quién suele pagar menos matrícula en una universidad pública de Virginia?', fa: 'کی معمولاً در یک کالج دولتی ویرجینیا فیس کمتر می‌پردازد؟' },
        choices: [
          { en: 'Students who live in Virginia', es: 'Los estudiantes que viven en Virginia', fa: 'شاگردانی که در ویرجینیا زندگی می‌کنند' },
          { en: 'Students who come from other states', es: 'Los estudiantes que vienen de otros estados', fa: 'شاگردانی که از ایالت‌های دیگر می‌آیند' },
          { en: 'Students who sign up late', es: 'Los estudiantes que se inscriben tarde', fa: 'شاگردانی که ناوقت نام‌نویسی می‌کنند' },
          { en: 'Students who live in dorms', es: 'Los estudiantes que viven en residencias', fa: 'شاگردانی که در لیلیه زندگی می‌کنند' }],
        answer: 0,
        why: { en: 'Virginia residents pay in-state tuition at Virginia public colleges. It is lower.', es: 'Los residentes de Virginia pagan matrícula estatal en universidades públicas de Virginia. Es más baja.', fa: 'باشندگان ویرجینیا در کالج‌های دولتی ویرجینیا فیس داخل ایالت می‌پردازند. کمتر است.' } },
      { q: { en: 'Compared with federal loans, private loans from banks usually...', es: 'Comparados con los préstamos federales, los préstamos privados de bancos casi siempre...', fa: 'در مقایسه با قرض فدرال، قرض شخصی از بانک معمولاً...' },
        choices: [
          { en: 'cost more, with fewer protections', es: 'cuestan más y protegen menos', fa: 'گران‌تر است و محافظت کمتر دارد' },
          { en: 'cost less, with more protections', es: 'cuestan menos y protegen más', fa: 'ارزان‌تر است و محافظت بیشتر دارد' },
          { en: 'never need to be paid back', es: 'nunca se tienen que devolver', fa: 'هرگز پس داده نمی‌شود' },
          { en: 'are the same as scholarships', es: 'son lo mismo que las becas', fa: 'مثل بورسیه است' }],
        answer: 0,
        why: { en: 'Private loans usually cost more and protect you less. Try free money and federal aid first.', es: 'Los préstamos privados casi siempre cuestan más y protegen menos. Busca primero dinero gratis y ayuda federal.', fa: 'قرض شخصی معمولاً گران‌تر است و کمتر محافظت می‌کند. اول پول رایگان و کمک فدرال را ببین.' } }
    ]
  },

  learned: [
    { en: 'The [[fafsa|FAFSA]] is free. Fill it out each year, as early as you can.', es: 'La [[fafsa|FAFSA]] es gratis. Llénala cada año, lo más pronto que puedas.', fa: '[[fafsa|فافسا]] رایگان است. هر سال پرش کن، هر قدر زودتر که بتوانی.' },
    { en: '[[grant|Grants]] and [[scholarship|scholarships]] are free money. [[work-study|Work-study]] is a campus job.', es: 'Las [[grant|subvenciones]] y las [[scholarship|becas]] son dinero gratis. [[work-study|Estudio-trabajo]] es un empleo en el campus.', fa: '[[grant|کمک بلاعوض]] و [[scholarship|بورسیه]] پول رایگان هستند. [[work-study|کار و تحصیل]] یک کار در کالج است.' },
    { en: '[[loan|Loans]] must be repaid with interest. Borrow only what you need.', es: 'Los [[loan|préstamos]] se devuelven con intereses. Pide prestado solo lo que necesitas.', fa: '[[loan|قرض]] باید با سود پس داده شود. فقط به اندازهٔ ضرورت قرض بگیر.' }
  ],
  reflect: {
    q: { en: 'What would you like to study or train for after high school? Name one way to help pay for it.', es: '¿Qué te gustaría estudiar o aprender después de la secundaria? Di una forma de ayudar a pagarlo.', fa: 'بعد از مکتب دوست داری چه بخوانی یا چه مهارتی یاد بگیری؟ یک راه برای کمک به پرداخت پولش بگو.' },
    starter: { en: 'After high school I would like to', es: 'Después de la secundaria me gustaría', fa: 'بعد از مکتب دوست دارم' }
  }
};
