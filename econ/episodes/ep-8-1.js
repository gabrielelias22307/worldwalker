/* COINWALKER · Episode 8.1 · What Is Education Worth? (human capital, the return on education, many paths)
   Future Fields, a made-up town in northern Virginia: a career fair at the made-up Future Fields Community College.
   North half: the college building (J) with the advising office door, the library (Q over h) in the north-east,
   and the fair plaza (l) with booths (m): health care, tech, the four-year college, the military, the apprenticeship
   and the trades, around a fountain (O). Row 11 is College Road. South: the welding shop and the health building
   (doors), a bus stop (sign x and shelter m), a fenced practice field (F) in the south-west and a garden path (:)
   in the south-east. People show human capital, earn-while-you-learn trades and the opportunity cost of school;
   the ledger stone is a survey: read 4 posts (an example table of path, years, cost and pay), then answer. */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'EPF',
  title: { en: 'What Is Education Worth?', es: '¿Cuánto vale la educación?', fa: 'ارزش تعلیم چقدر است؟' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Future Fields career fair', es: 'Feria de carreras de Future Fields', fa: 'نمایشگاه کار فیوچر فیلدز' },
  intro: [
    { en: 'The Grump tore the page about skills. Now people think learning is worth nothing.',
      es: 'El Gruñón rompió la página sobre las habilidades. Ahora la gente cree que aprender no vale nada.',
      fa: 'غرغرو صفحهٔ مهارت‌ها را پاره کرد. حالا مردم فکر می‌کنند آموختن هیچ ارزش ندارد.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town in northern Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-77.3, 38.85],
    start: [
      { en: 'Future Fields is a made-up town in northern Virginia.',
        es: 'Future Fields es un pueblo inventado en el norte de Virginia.',
        fa: 'فیوچر فیلدز یک شهرک ساختگی در شمال ویرجینیا است.' },
      { en: 'Today its community college holds a big career fair.',
        es: 'Hoy su colegio comunitario tiene una gran feria de carreras.',
        fa: 'امروز کالج محلی آن یک نمایشگاه بزرگ کار دارد.' },
      { en: 'Booths show many paths: trades, health care, tech, the military and college.',
        es: 'Los puestos muestran muchos caminos: oficios, salud, tecnología, las fuerzas armadas y la universidad.',
        fa: 'غرفه‌ها راه‌های زیاد را نشان می‌دهند: حرفه، صحت، تکنالوژی، خدمت نظامی و پوهنتون.' }
    ],
    page: { en: 'Learning is an investment. On average, it pays off over a working life.',
      es: 'Aprender es una inversión. En promedio, da frutos durante toda la vida laboral.',
      fa: 'آموختن یک سرمایه‌گذاری است. به طور اوسط، در طول سال‌های کار فایده می‌دهد.' },
    guess: {
      q: { en: 'On average, do people with more education earn more?', es: 'En promedio, ¿la gente con más educación gana más?', fa: 'به طور اوسط، آیا کسانی که تعلیم بیشتر دارند بیشتر کمایی می‌کنند؟' },
      choices: [
        { t: { en: '📈 Yes, usually', es: '📈 Sí, por lo general', fa: '📈 بله، معمولاً' }, ok: true },
        { t: { en: '📉 No, they earn less', es: '📉 No, ganan menos', fa: '📉 نه، کمتر کمایی می‌کنند' } }
      ],
      why: { en: 'US government data show it: more education usually means higher pay and less unemployment.', es: 'Los datos del gobierno de EE. UU. lo muestran: más educación suele dar más pago y menos desempleo.', fa: 'معلومات حکومت امریکا نشان می‌دهد: تعلیم بیشتر معمولاً یعنی معاش بیشتر و بیکاری کمتر.' }
    },
    next: {
      q: { en: 'Next: paying for college. What is the difference between a grant and a loan?', es: 'Ahora: pagar la universidad. ¿Cuál es la diferencia entre una beca y un préstamo?', fa: 'بعدی: پرداخت پول پوهنتون. فرق میان کمک‌هزینه و قرض چیست؟' },
      choices: [
        { t: { en: '🎁 Grants are not repaid', es: '🎁 Las becas no se devuelven', fa: '🎁 کمک‌هزینه پس داده نمی‌شود' }, ok: true },
        { t: { en: '🔁 Both must be repaid', es: '🔁 Las dos se devuelven', fa: '🔁 هر دو پس داده می‌شوند' } }
      ],
      why: { en: 'A grant usually does not have to be paid back. A loan must be paid back, with interest.', es: 'Una beca por lo general no se devuelve. Un préstamo sí se devuelve, con intereses.', fa: 'کمک‌هزینه معمولاً پس داده نمی‌شود. قرض باید با سود پس داده شود.' }
    }
  },
  /* houses: who works behind each door; walk in and talk */
  houses: [
    { at: [7, 3], name: { en: 'Mr. Tran', es: 'Sr. Tran', fa: 'آقای ترن' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#3a5a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am an advisor. I help students plan their classes here.', es: 'Soy consejero. Ayudo a los estudiantes a planear sus clases aquí.', fa: 'من مشاور هستم. به شاگردان در پلان صنف‌هایشان کمک می‌کنم.' },
        { en: 'Many students start here. Then they [[transfer|transfer]] to a 4-year college.', es: 'Muchos estudiantes empiezan aquí. Luego se [[transfer|transfieren]] a una universidad de 4 años.', fa: 'شاگردان زیاد از اینجا شروع می‌کنند. بعد به یک پوهنتون ۴ ساله [[transfer|انتقال]] می‌کنند.' },
        { en: 'Two cheaper years here can lower the cost of a [[bachelor\'s degree|bachelor\'s degree]].', es: 'Dos años más baratos aquí pueden bajar el costo de una [[bachelor\'s degree|licenciatura]].', fa: 'دو سال ارزان‌تر اینجا می‌تواند هزینهٔ [[bachelor\'s degree|سند لیسانس]] را کم کند.' }
      ] },
    { at: [22, 2], name: { en: 'Mrs. Osei', es: 'Sra. Osei', fa: 'خانم اوسی' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#7a3a6a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'The library is free. Anyone can borrow books here.', es: 'La biblioteca es gratis. Cualquiera puede pedir libros prestados aquí.', fa: 'کتابخانه مفت است. هر کس می‌تواند اینجا کتاب امانت بگیرد.' },
        { en: 'Reading and free classes grow your [[human capital|human capital]].', es: 'Leer y tomar clases gratis hace crecer tu [[human capital|capital humano]].', fa: 'مطالعه و صنف‌های مفت [[human capital|سرمایهٔ انسانی]] تو را بزرگ می‌کنند.' },
        { en: 'Nobody can take your skills away from you.', es: 'Nadie te puede quitar tus habilidades.', fa: 'هیچ کس نمی‌تواند مهارت‌هایت را از تو بگیرد.' }
      ] },
    { at: [3, 13], name: { en: 'Rafael', es: 'Rafael', fa: 'رافائل' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#4a4a4a', pants: '#2a3a5a', hat: '#e0a030', style: 'short' },
      lines: [
        { en: 'Welcome to the welding shop! Our [[certificate|certificate]] takes about one year.', es: '¡Bienvenido al taller de soldadura! Nuestro [[certificate|certificado]] dura más o menos un año.', fa: 'به ورکشاپ جوشکاری خوش آمدی! [[certificate|سرتفیکت]] ما حدود یک سال وقت می‌گیرد.' },
        { en: 'Welders help build bridges, ships and buildings. Skilled welders are needed.', es: 'Los soldadores ayudan a construir puentes, barcos y edificios. Se necesitan soldadores hábiles.', fa: 'جوشکارها در ساختن پل، کشتی و ساختمان کمک می‌کنند. به جوشکار ماهر ضرورت است.' },
        { en: 'A short program can mean a lower cost and earning sooner.', es: 'Un programa corto puede significar un costo menor y ganar dinero antes.', fa: 'یک برنامهٔ کوتاه می‌تواند یعنی هزینهٔ کمتر و زودتر کمایی کردن.' }
      ] },
    { at: [11, 13], name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      look: { skin: 4, hair: '#120c08', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'long' },
      lines: [
        { en: 'I am studying to be a nurse. It takes hard work.', es: 'Estudio para ser enfermera. Requiere mucho esfuerzo.', fa: 'من درس می‌خوانم تا نرس شوم. زحمت زیاد می‌خواهد.' },
        { en: 'My books and [[tuition|tuition]] cost money. My study time is a cost too.', es: 'Mis libros y la [[tuition|matrícula]] cuestan dinero. Mi tiempo de estudio también es un costo.', fa: 'کتاب‌ها و [[tuition|فیس تحصیلی]] من پول می‌خواهند. وقت درس خواندن هم یک هزینه است.' },
        { en: 'I think it is worth it. Nurses help people every day.', es: 'Creo que vale la pena. Las enfermeras ayudan a la gente cada día.', fa: 'فکر می‌کنم ارزشش را دارد. نرس‌ها هر روز به مردم کمک می‌کنند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the college building (J) with the advising office door, the library (Q over h) in the north-east,
     the fair plaza (l) with six booths (m) and the fountain (O). Signs by the college and the military booth.
     Row 11: College Road (l), east to west.
     South-west: the welding shop (R over h), the health building (Q over h) and the fenced practice field (F),
     with the ledger stone inside. South-east: the bus stop (sign x, shelter m) and a garden path (:) around trees. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJJJJJ.......QQQQQ......T',
    'T.JJJJJJJJJJJ.......hhdhh....T.T',
    'T.JJJJJdJJJJJ..T...............T',
    'T.............x.....x..........T',
    'T..llllllllllllllllllllllllll..T',
    'T..lmmlllmmlllllllllllmmllmml..T',
    'T..llllllllllllllllllllllllll..T',
    'T..lmmllllllllllOlllllllllmml..T',
    'T..llllllllllllllllllllllllll..T',
    'T.T...........................TT',
    'TllllllllllllllllllllllllllllllT',
    'T.RRRR...QQQQ...........x.m....T',
    'T.hdhh...hhdh..................T',
    'T..............................T',
    'T.FFFFFF..FFFFF.....::::::::...T',
    'T.F...........F.....:......:...T',
    'T.F.................:..TT..:...T',
    'T.F...........F.x...:......:...T',
    'T.FFFFFF..FFFFF.....::::::::...T',
    'T..............T.........T.....T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [17, 9], at: [17, 6], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps north, past the fountain.', es: 'Desde esta nota, camina 3 pasos al norte, junto a la fuente.', fa: 'از این یادداشت، ۳ قدم به شمال برو، از کنار فواره.' },
      text: { en: 'A shiny gem! Your skills are like gems. Nobody can take them away.', es: '¡Una gema brillante! Tus habilidades son como gemas. Nadie te las puede quitar.', fa: 'یک جواهر براق! مهارت‌هایت مثل جواهر هستند. هیچ کس آنها را از تو گرفته نمی‌تواند.' } },
    { clueAt: [3, 20], at: [9, 20], decor: 'flower',
      clue: { en: 'From this note, walk 6 steps east, along the practice field.', es: 'Desde esta nota, camina 6 pasos al este, junto a la cancha.', fa: 'از این یادداشت، ۶ قدم به شرق برو، کنار میدان تمرین.' },
      text: { en: 'A flower! Like a plant, learning takes time to grow. Then it gives back.', es: '¡Una flor! Como una planta, aprender toma tiempo. Luego da frutos.', fa: 'یک گل! مثل یک نبات، آموختن وقت می‌خواهد تا رشد کند. بعد فایده می‌دهد.' } }
  ],

  words: {
    'human capital': { en: 'the skills and knowledge a person has', es: 'las habilidades y los conocimientos de una persona', fa: 'مهارت و دانشی که یک نفر دارد' },
    investment: { en: 'using money or time now to get more later', es: 'usar dinero o tiempo ahora para tener más después', fa: 'کار گرفتن از پول یا وقت حالا تا بعداً بیشتر به دست بیاید' },
    'return on investment': { en: 'what you gain, compared to what you put in', es: 'lo que ganas, comparado con lo que pones', fa: 'آنچه به دست می‌آوری، در مقایسه با آنچه گذاشتی' },
    unemployment: { en: 'wanting a job but not having one', es: 'querer un trabajo pero no tenerlo', fa: 'کار خواستن اما کار نداشتن' },
    apprenticeship: { en: 'a paid job where you learn a trade from skilled workers', es: 'un trabajo pagado donde aprendes un oficio de gente experta', fa: 'یک کار با معاش که در آن از کارگران ماهر یک حرفه را یاد می‌گیری' },
    trade: { en: 'skilled work with your hands, like welding or electrical work', es: 'trabajo experto con las manos, como soldar o la electricidad', fa: 'کار ماهرانه با دست، مثل جوشکاری یا برق‌کاری' },
    certificate: { en: 'a paper that shows you finished a short job program', es: 'un papel que muestra que terminaste un programa corto de trabajo', fa: 'کاغذی که نشان می‌دهد یک برنامهٔ کوتاه کاری را تمام کردی' },
    'associate degree': { en: 'a degree from about 2 years of college', es: 'un título de unos 2 años de universidad', fa: 'سندی از حدود ۲ سال درس در کالج' },
    'bachelor\'s degree': { en: 'a degree from about 4 years of college', es: 'un título de unos 4 años de universidad', fa: 'سندی از حدود ۴ سال درس در پوهنتون' },
    transfer: { en: 'move to another school and keep the classes you passed', es: 'cambiarte a otra escuela y guardar las clases que aprobaste', fa: 'رفتن به مکتب دیگر و نگه داشتن صنف‌هایی که کامیاب شدی' },
    tuition: { en: 'the money you pay a school for classes', es: 'el dinero que pagas a una escuela por las clases', fa: 'پولی که برای صنف‌ها به مکتب یا پوهنتون می‌دهی' },
    'opportunity cost': { en: 'the next best thing you give up when you choose', es: 'la siguiente mejor cosa a la que renuncias al elegir', fa: 'بهترین چیز بعدی که هنگام انتخاب از دست می‌دهی' },
    'student debt': { en: 'money you borrow for school and must pay back', es: 'dinero que pides prestado para estudiar y debes devolver', fa: 'پولی که برای درس قرض می‌گیری و باید پس بدهی' }
  },

  npcs: [
    {
      x: 8, y: 7,
      name: { en: 'Ms. Hana', es: 'Sra. Hana', fa: 'خانم هانا' },
      role: { en: 'Career counselor', es: 'Consejera de carreras', fa: 'مشاور کار' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#c04a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the career fair! I help students plan what comes next.', es: '¡Bienvenido a la feria de carreras! Ayudo a los estudiantes a planear su futuro.', fa: 'به نمایشگاه کار خوش آمدی! به شاگردان کمک می‌کنم آینده را پلان کنند.' },
        { en: 'Your skills and knowledge are your [[human capital|human capital]].', es: 'Tus habilidades y conocimientos son tu [[human capital|capital humano]].', fa: 'مهارت و دانش تو [[human capital|سرمایهٔ انسانی]] تو است.' },
        { en: 'School and training are an [[investment|investment]] in yourself. You pay now, and gain later.', es: 'Estudiar y entrenarte es una [[investment|inversión]] en ti. Pagas ahora y ganas después.', fa: 'درس و آموزش یک [[investment|سرمایه‌گذاری]] در خودت است. حالا می‌پردازی و بعداً فایده می‌بری.' },
        { en: 'On average, more education means higher pay and less [[unemployment|unemployment]].', es: 'En promedio, más educación significa más pago y menos [[unemployment|desempleo]].', fa: 'به طور اوسط، تعلیم بیشتر یعنی معاش بیشتر و [[unemployment|بیکاری]] کمتر.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What is human capital?', es: '¿Qué es el capital humano?', fa: 'سرمایهٔ انسانی چیست؟' },
        choices: [
          { ok: true, t: { en: 'The skills and knowledge you have', es: 'Las habilidades y conocimientos que tienes', fa: 'مهارت و دانشی که داری' },
            why: { en: 'Yes! Your skills and knowledge are human capital. School and training grow it.', es: '¡Sí! Tus habilidades y conocimientos son capital humano. Estudiar y entrenar lo hacen crecer.', fa: 'بله! مهارت و دانش تو سرمایهٔ انسانی است. درس و آموزش آن را بزرگ می‌کنند.' } },
          { t: { en: 'The money you save in a bank account', es: 'El dinero que ahorras en una cuenta de banco', fa: 'پولی که در حساب بانکی پس‌انداز می‌کنی' },
            why: { en: 'No. Money in a bank is savings. Human capital lives in your head and hands.', es: 'No. El dinero en el banco son ahorros. El capital humano está en tu mente y tus manos.', fa: 'نه. پول در بانک پس‌انداز است. سرمایهٔ انسانی در ذهن و دست‌های توست.' } },
          { t: { en: 'The buildings in a capital city', es: 'Los edificios de una ciudad capital', fa: 'ساختمان‌های یک پایتخت' },
            why: { en: 'No. Human capital is not a place. It is what you know and can do.', es: 'No. El capital humano no es un lugar. Es lo que sabes y puedes hacer.', fa: 'نه. سرمایهٔ انسانی یک جا نیست. چیزی است که می‌دانی و کرده می‌توانی.' } }
        ]
      }
    },
    {
      x: 25, y: 7,
      name: { en: 'Mr. Begay', es: 'Sr. Begay', fa: 'آقای بیگی' },
      role: { en: 'Electrician', es: 'Electricista', fa: 'برق‌کار' },
      look: { skin: 3, hair: '#120c08', shirt: '#2a6a9a', pants: '#3a3a2a', hat: '#e0c030', style: 'short' },
      lines: [
        { en: 'I am an electrician. I learned my [[trade|trade]] in an [[apprenticeship|apprenticeship]].', es: 'Soy electricista. Aprendí mi [[trade|oficio]] en un [[apprenticeship|programa de aprendiz]].', fa: 'من برق‌کار هستم. [[trade|حرفهٔ]] خود را در یک [[apprenticeship|کارآموزی]] یاد گرفتم.' },
        { en: 'I worked next to a skilled electrician. I took classes at night.', es: 'Trabajé junto a un electricista experto. Tomaba clases en la noche.', fa: 'کنار یک برق‌کار ماهر کار کردم. شب‌ها صنف می‌رفتم.' },
        { en: 'I got paid the whole time. We call it earn while you learn.', es: 'Me pagaron todo el tiempo. Lo llamamos ganar mientras aprendes.', fa: 'تمام وقت معاش گرفتم. به آن می‌گوییم «یاد بگیر و کمایی کن».' },
        { en: 'Plumbing, welding and electrical work all need skilled people.', es: 'La plomería, la soldadura y la electricidad necesitan gente experta.', fa: 'نل‌دوانی، جوشکاری و برق‌کاری همه به مردم ماهر ضرورت دارند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why can an apprenticeship be a smart choice?', es: '¿Por qué un programa de aprendiz puede ser una buena decisión?', fa: 'چرا کارآموزی می‌تواند یک انتخاب هوشیارانه باشد؟' },
        choices: [
          { ok: true, t: { en: 'You get paid while you learn', es: 'Te pagan mientras aprendes', fa: 'وقتی یاد می‌گیری معاش می‌گیری' },
            why: { en: 'Yes! Apprentices earn pay as they train. They can owe less for school.', es: '¡Sí! Los aprendices ganan dinero mientras entrenan. Pueden deber menos por estudiar.', fa: 'بله! کارآموزها هنگام آموزش معاش می‌گیرند. می‌توانند قرض کمتری برای درس داشته باشند.' } },
          { t: { en: 'You never need to take a class', es: 'Nunca necesitas tomar una clase', fa: 'هیچ وقت صنف رفتن لازم نیست' },
            why: { en: 'No. Mr. Begay took classes at night. Apprentices learn on the job and in class.', es: 'No. El Sr. Begay tomaba clases en la noche. Los aprendices aprenden en el trabajo y en clase.', fa: 'نه. آقای بیگی شب‌ها صنف می‌رفت. کارآموزها در کار و در صنف یاد می‌گیرند.' } },
          { t: { en: 'It always pays more than college', es: 'Siempre paga más que la universidad', fa: 'همیشه از پوهنتون بیشتر معاش دارد' },
            why: { en: 'Not always. Pay depends on the job. The big plus is earning while you learn.', es: 'No siempre. El pago depende del trabajo. Lo bueno es ganar mientras aprendes.', fa: 'نه همیشه. معاش به کار بستگی دارد. فایدهٔ بزرگ کمایی هنگام آموختن است.' } }
        ]
      }
    },
    {
      x: 28, y: 13,
      name: { en: 'Lina', es: 'Lina', fa: 'لینا' },
      role: { en: 'Community college student', es: 'Estudiante del colegio comunitario', fa: 'شاگرد کالج محلی' },
      look: { skin: 2, hair: '#3a2416', shirt: '#8a4ac0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I take the bus to Future Fields Community College.', es: 'Tomo el bus al Colegio Comunitario de Future Fields.', fa: 'من با بس به کالج محلی فیوچر فیلدز می‌روم.' },
        { en: 'In 2 years I can earn an [[associate degree|associate degree]]. It often costs less.', es: 'En 2 años puedo sacar un [[associate degree|título de asociado]]. Suele costar menos.', fa: 'در ۲ سال می‌توانم یک [[associate degree|سند دو ساله]] بگیرم. اکثراً ارزان‌تر است.' },
        { en: 'Later I can [[transfer|transfer]] to a 4-year college for a [[bachelor\'s degree|bachelor\'s degree]].', es: 'Después me puedo [[transfer|transferir]] a una universidad de 4 años para una [[bachelor\'s degree|licenciatura]].', fa: 'بعداً می‌توانم برای [[bachelor\'s degree|سند لیسانس]] به یک پوهنتون ۴ ساله [[transfer|انتقال]] کنم.' },
        { en: 'I work fewer hours to study. The pay I give up is my [[opportunity cost|opportunity cost]].', es: 'Trabajo menos horas para estudiar. El pago que dejo es mi [[opportunity cost|costo de oportunidad]].', fa: 'برای درس کمتر کار می‌کنم. معاشی که از دست می‌دهم [[opportunity cost|هزینهٔ فرصت]] من است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Lina works fewer hours to study. What is her opportunity cost?', es: 'Lina trabaja menos horas para estudiar. ¿Cuál es su costo de oportunidad?', fa: 'لینا برای درس کمتر کار می‌کند. هزینهٔ فرصت او چیست؟' },
        choices: [
          { ok: true, t: { en: 'The pay she gives up', es: 'El pago al que renuncia', fa: 'معاشی که از دست می‌دهد' },
            why: { en: 'Yes! She could have worked those hours. The lost pay is her opportunity cost.', es: '¡Sí! Pudo trabajar esas horas. El pago perdido es su costo de oportunidad.', fa: 'بله! می‌توانست آن ساعت‌ها کار کند. معاش از دست رفته هزینهٔ فرصت اوست.' } },
          { t: { en: 'The books for her class', es: 'Los libros de su clase', fa: 'کتاب‌های صنف او' },
            why: { en: 'Books are a cost she pays. Opportunity cost is what she gives up: the pay.', es: 'Los libros son un costo que paga. El costo de oportunidad es a lo que renuncia: el pago.', fa: 'کتاب هزینه‌ای است که می‌پردازد. هزینهٔ فرصت چیزی است که از دست می‌دهد: معاش.' } },
          { t: { en: 'The degree she will get', es: 'El título que va a sacar', fa: 'سندی که خواهد گرفت' },
            why: { en: 'No. The degree is what she gains. Opportunity cost is what she gives up.', es: 'No. El título es lo que gana. El costo de oportunidad es a lo que renuncia.', fa: 'نه. سند چیزی است که به دست می‌آورد. هزینهٔ فرصت چیزی است که از دست می‌دهد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 4, text: { en: 'FUTURE FIELDS COMMUNITY COLLEGE · Career fair today! Every path is welcome.', es: 'COLEGIO COMUNITARIO DE FUTURE FIELDS · ¡Feria de carreras hoy! Todos los caminos son bienvenidos.', fa: 'کالج محلی فیوچر فیلدز · امروز نمایشگاه کار! هر راه خوش آمد است.' } },
    { x: 20, y: 4, text: { en: 'MILITARY BOOTH · The military trains people for many jobs, like medic or mechanic.', es: 'PUESTO MILITAR · Las fuerzas armadas entrenan a gente para muchos trabajos, como médico de combate o mecánico.', fa: 'غرفهٔ نظامی · اردو مردم را برای کارهای زیاد آموزش می‌دهد، مثل امدادگر یا مستری.' } },
    { x: 24, y: 12, text: { en: 'BUS STOP · Many students ride the bus to class and to work.', es: 'PARADA DE BUS · Muchos estudiantes toman el bus para ir a clase y al trabajo.', fa: 'ایستگاه بس · شاگردان زیاد با بس به صنف و به کار می‌روند.' } },
    { x: 16, y: 18, text: { en: 'PRACTICE FIELD · Practice builds skill on the field. Learning builds skill for work.', es: 'CANCHA DE PRÁCTICA · La práctica crea habilidad en la cancha. Aprender crea habilidad para el trabajo.', fa: 'میدان تمرین · تمرین در میدان مهارت می‌سازد. آموختن برای کار مهارت می‌سازد.' } }
  ],

  /* the quest: Jada the senior (gold !) in the north-west plaza -> Ms. Park the welder by the trades booth (north-east)
     -> carry the right paper to Mr. Adeyemi, the apprenticeship coordinator south of College Road -> back to Jada.
     The program pays its apprentices, so a tuition check is wrong; a trophy is not proof she finished school. */
  quest: {
    stat: 'loc',
    title: { en: 'The Apprenticeship Form', es: 'La solicitud de aprendiz', fa: 'فورم کارآموزی' },
    giver: {
      x: 13, y: 5,
      name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      role: { en: 'High school senior', es: 'Estudiante de último año', fa: 'شاگرد صنف دوازده' },
      look: { skin: 5, hair: '#120c08', shirt: '#e07a2a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I want to be an electrician. The apprenticeship has one spot left!', es: 'Quiero ser electricista. ¡Al programa de aprendiz le queda un lugar!', fa: 'می‌خواهم برق‌کار شوم. کارآموزی فقط یک جای خالی دارد!' },
        { en: 'I need one more paper to apply. Ms. Park knows which one.', es: 'Me falta un papel para aplicar. La Sra. Park sabe cuál es.', fa: 'برای درخواست یک کاغذ دیگر لازم دارم. خانم پارک می‌داند کدام یکی.' }
      ],
      wait: { en: 'Ms. Park is by the trades booth, on the east side of the fair.', es: 'La Sra. Park está junto al puesto de oficios, en el lado este de la feria.', fa: 'خانم پارک کنار غرفهٔ حرفه‌ها است، در طرف شرق نمایشگاه.' },
      thanks: { en: 'The form is signed! Now I can earn while I learn. Thank you!', es: '¡La solicitud está firmada! Ahora puedo ganar mientras aprendo. ¡Gracias!', fa: 'فورم امضا شد! حالا می‌توانم یاد بگیرم و کمایی کنم. تشکر!' }
    },
    contact: {
      x: 24, y: 9,
      name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      role: { en: 'Welder', es: 'Soldadora', fa: 'جوشکار' },
      look: { skin: 1, hair: '#1a1008', shirt: '#5a5a5a', pants: '#2a3a5a', hat: '#c0392b', style: 'short' },
      lines: [
        { en: 'This apprenticeship pays you to train. Apprentices here pay no tuition.', es: 'Este programa te paga por entrenar. Aquí los aprendices no pagan matrícula.', fa: 'این کارآموزی برای آموزش به تو معاش می‌دهد. کارآموزها اینجا فیس نمی‌دهند.' },
        { en: 'Mr. Adeyemi needs proof that Jada finished high school.', es: 'El Sr. Adeyemi necesita una prueba de que Jada terminó la secundaria.', fa: 'آقای ادیمی ثبوت می‌خواهد که جادا مکتب را تمام کرده است.' },
        { en: 'Bring him that proof. He is south of the road, near the bus stop.', es: 'Llévale esa prueba. Está al sur de la calle, cerca de la parada de bus.', fa: 'آن ثبوت را برایش ببر. او جنوب سرک است، نزدیک ایستگاه بس.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 19, y: 13,
        name: { en: 'Mr. Adeyemi', es: 'Sr. Adeyemi', fa: 'آقای ادیمی' },
        role: { en: 'Apprenticeship coordinator', es: 'Coordinador de aprendices', fa: 'مسئول کارآموزی' },
        look: { skin: 4, hair: '#2a2a2a', shirt: '#2f6f4a', pants: '#3a3a3a', style: 'short' },
        lines: [
          { en: 'I run the electrician apprenticeship. Apprentices earn pay from day one.', es: 'Dirijo el programa de aprendiz de electricista. Los aprendices ganan desde el primer día.', fa: 'من کارآموزی برق‌کاری را پیش می‌برم. کارآموزها از روز اول معاش می‌گیرند.' },
          { en: 'I need just one paper from Jada. Then I can sign her form.', es: 'Solo necesito un papel de Jada. Luego puedo firmar su solicitud.', fa: 'فقط یک کاغذ از جادا لازم دارم. بعد فورمش را امضا می‌کنم.' }
        ]
      },
      q: { en: 'What proves Jada is ready to start the apprenticeship?', es: '¿Qué prueba que Jada está lista para empezar el programa de aprendiz?', fa: 'چه چیز ثابت می‌کند که جادا برای شروع کارآموزی آماده است؟' },
      choices: [
        { ok: true, at: [17, 2], icon: '📜', t: { en: 'Her high school diploma', es: 'Su diploma de secundaria', fa: 'سند فراغت مکتب او' },
          why: { en: 'Yes! It shows she finished high school. Now Jada can earn while she learns.', es: '¡Sí! Muestra que terminó la secundaria. Ahora Jada puede ganar mientras aprende.', fa: 'بله! نشان می‌دهد که مکتب را تمام کرده. حالا جادا می‌تواند یاد بگیرد و کمایی کند.' } },
        { at: [2, 9], icon: '💵', t: { en: 'A check for tuition', es: 'Un cheque para la matrícula', fa: 'یک چک برای فیس' },
          why: { en: 'Apprentices here pay no tuition. They get paid to learn on the job.', es: 'Aquí los aprendices no pagan matrícula. Les pagan por aprender en el trabajo.', fa: 'کارآموزها اینجا فیس نمی‌دهند. برای آموختن در کار معاش می‌گیرند.' } },
        { at: [5, 17], icon: '🏆', t: { en: 'Her soccer trophy', es: 'Su trofeo de fútbol', fa: 'جام فوتبال او' },
          why: { en: 'Great job on the field! But he needs proof that she finished high school.', es: '¡Bien hecho en la cancha! Pero él necesita prueba de que terminó la secundaria.', fa: 'آفرین در میدان! اما او ثبوت می‌خواهد که مکتب را تمام کرده.' } }
      ],
      item: { icon: '📝', name: { en: 'A signed apprenticeship form', es: 'Una solicitud de aprendiz firmada', fa: 'یک فورم امضا شدهٔ کارآموزی' } }
    }
  },

  scraps: [[1, 1], [30, 20], [30, 12]],
  smudges: [[11, 9], [25, 19]],

  challenge: {
    at: [8, 17],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one post per path: the diploma by the bus stop, the trade certificate by the welding shop,
    // the associate degree by the community college, the bachelor's degree by the four-year college booth
    spots: [[23, 13], [5, 14], [10, 4], [6, 8]],
    stat: 'hei',
    title: { en: 'Paths, costs and pay', es: 'Caminos, costos y pago', fa: 'راه‌ها، هزینه‌ها و معاش' },
    intro: { en: 'The Grump scrambled the booth posters! Read each post. Then answer at the ledger stone.',
      es: '¡El Gruñón revolvió los carteles de los puestos! Lee cada poste. Luego responde en la piedra del libro.',
      fa: 'غرغرو پوسترهای غرفه‌ها را خراب کرد! هر تیر را بخوان. بعد کنار سنگ دفتر حساب جواب بده.' },
    table: {
      head: [
        { en: 'Path', es: 'Camino', fa: 'راه' },
        { en: 'Years after high school', es: 'Años después de la secundaria', fa: 'سال‌ها بعد از مکتب' },
        { en: 'Example cost', es: 'Costo de ejemplo', fa: 'هزینهٔ نمونه' },
        { en: 'Example pay in a year', es: 'Pago de ejemplo en un año', fa: 'معاش نمونه در یک سال' }
      ],
      rows: [
        [{ en: 'High school diploma', es: 'Diploma de secundaria', fa: 'سند فراغت مکتب' }, '0', '$0', '$36,000'],
        [{ en: 'Trade certificate', es: 'Certificado de oficio', fa: 'سرتفیکت حرفه' }, '1', '$5,000', '$46,000'],
        [{ en: 'Associate degree', es: 'Título de asociado', fa: 'سند دو ساله' }, '2', '$8,000', '$48,000'],
        [{ en: 'Bachelor\'s degree', es: 'Licenciatura', fa: 'سند لیسانس' }, '4', '$40,000', '$62,000']
      ],
      note: { en: 'Example pay in Future Fields, a made-up town. Not real data. Real data show this pattern on average.', es: 'Pago de ejemplo en Future Fields, un pueblo inventado. No son datos reales. Los datos reales muestran este patrón en promedio.', fa: 'معاش نمونه در فیوچر فیلدز، یک شهرک ساختگی. معلومات واقعی نیست. معلومات واقعی به طور اوسط همین نقشه را نشان می‌دهد.' }
    },
    questions: [
      { q: { en: 'Which path after high school costs the least in the table?', es: '¿Qué camino después de la secundaria cuesta menos en la tabla?', fa: 'در جدول، کدام راه بعد از مکتب از همه کم‌هزینه‌تر است؟' },
        choices: [{ en: 'Trade certificate', es: 'Certificado de oficio', fa: 'سرتفیکت حرفه' }, { en: 'Associate degree', es: 'Título de asociado', fa: 'سند دو ساله' }, { en: 'Bachelor\'s degree', es: 'Licenciatura', fa: 'سند لیسانس' }], answer: 0,
        why: { en: 'The certificate costs $5,000. The associate degree costs $8,000. The bachelor\'s costs $40,000.', es: 'El certificado cuesta $5,000. El título de asociado, $8,000. La licenciatura, $40,000.', fa: 'سرتفیکت ۵٬۰۰۰ دالر است. سند دو ساله ۸٬۰۰۰ دالر. سند لیسانس ۴۰٬۰۰۰ دالر.' } },
      { q: { en: 'In the example, which path pays the most each year?', es: 'En el ejemplo, ¿qué camino paga más cada año?', fa: 'در این نمونه، کدام راه هر سال بیشتر معاش دارد؟' },
        choices: [{ en: 'Bachelor\'s degree', es: 'Licenciatura', fa: 'سند لیسانس' }, { en: 'Trade certificate', es: 'Certificado de oficio', fa: 'سرتفیکت حرفه' }, { en: 'High school diploma', es: 'Diploma de secundaria', fa: 'سند فراغت مکتب' }], answer: 0,
        why: { en: '$62,000 is the top pay in the table. On average, more school usually means more pay.', es: '$62,000 es el pago más alto de la tabla. En promedio, más estudio suele dar más pago.', fa: '۶۲٬۰۰۰ دالر بلندترین معاش جدول است. به طور اوسط، درس بیشتر معمولاً معاش بیشتر می‌آورد.' } },
      { q: { en: 'Someone studies full time and does not work. What is the opportunity cost?', es: 'Alguien estudia tiempo completo y no trabaja. ¿Cuál es el costo de oportunidad?', fa: 'کسی تمام وقت درس می‌خواند و کار نمی‌کند. هزینهٔ فرصت چیست؟' },
        choices: [{ en: 'The pay they give up while studying', es: 'El pago al que renuncia mientras estudia', fa: 'معاشی که هنگام درس از دست می‌دهد' }, { en: 'The degree they earn at the end', es: 'El título que saca al final', fa: 'سندی که در آخر می‌گیرد' }, { en: 'The pay they earn after school', es: 'El pago que gana después de estudiar', fa: 'معاشی که بعد از درس می‌گیرد' }], answer: 0,
        why: { en: 'They could have worked instead. The lost pay is the opportunity cost of school.', es: 'Pudo trabajar en lugar de estudiar. El pago perdido es el costo de oportunidad.', fa: 'می‌توانست به جایش کار کند. معاش از دست رفته هزینهٔ فرصت درس است.' } },
      { q: { en: 'Why can a trade certificate be a smart choice?', es: '¿Por qué un certificado de oficio puede ser una buena decisión?', fa: 'چرا سرتفیکت حرفه می‌تواند انتخاب هوشیارانه باشد؟' },
        choices: [{ en: 'It is short, cheap and pays well', es: 'Es corto, barato y paga bien', fa: 'کوتاه، ارزان و با معاش خوب است' }, { en: 'It always pays more than a degree', es: 'Siempre paga más que un título', fa: 'همیشه از هر سند بیشتر معاش دارد' }, { en: 'It takes longer than a bachelor\'s', es: 'Toma más tiempo que una licenciatura', fa: 'از سند لیسانس بیشتر وقت می‌گیرد' }], answer: 0,
        why: { en: 'In the example it takes 1 year, costs $5,000 and pays $46,000. You start earning sooner.', es: 'En el ejemplo dura 1 año, cuesta $5,000 y paga $46,000. Empiezas a ganar antes.', fa: 'در این نمونه ۱ سال وقت، ۵٬۰۰۰ دالر هزینه و ۴۶٬۰۰۰ دالر معاش دارد. زودتر کمایی را شروع می‌کنی.' } }
    ],
    success: { en: 'The posters are clear again! Every path has costs and benefits.', es: '¡Los carteles están claros otra vez! Cada camino tiene costos y beneficios.', fa: 'پوسترها دوباره روشن شدند! هر راه هزینه و فایده دارد.' }
  },

  boss: {
    at: [21, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Lazy Grump', es: 'El Gruñón Perezoso', fa: 'غرغروی تنبل' },
    appear: { en: 'The Lazy Grump is napping in the fog by the garden path!', es: '¡El Gruñón Perezoso duerme la siesta en la niebla junto al sendero!', fa: 'غرغروی تنبل در مه کنار راه باغ خواب است!' },
    taunt: { en: 'Yawn! Why learn anything? Skills are a waste. Let me nap!', es: '¡Bostezo! ¿Para qué aprender? Las habilidades no sirven. ¡Déjame dormir!', fa: 'اوه! چرا چیزی یاد بگیرم؟ مهارت بی‌فایده است. بگذار بخوابم!' },
    win: { en: 'The fog lifts off the college. Ledger page 8.1 floats down into your hands!', es: 'La niebla se va del colegio. ¡La página 8.1 del libro cae en tus manos!', fa: 'مه از روی کالج کنار می‌رود. صفحهٔ ۸.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is human capital?', es: '¿Qué es el capital humano?', fa: 'سرمایهٔ انسانی چیست؟' },
        choices: [
          { en: 'The skills and knowledge a person has', es: 'Las habilidades y conocimientos de alguien', fa: 'مهارت و دانشی که یک نفر دارد' },
          { en: 'The money a person saves in a bank account', es: 'El dinero que alguien ahorra en una cuenta de banco', fa: 'پولی که یک نفر در حساب بانکی پس‌انداز می‌کند' },
          { en: 'The tools and machines in a factory', es: 'Las herramientas y máquinas de una fábrica', fa: 'ابزار و ماشین‌های یک فابریکه' },
          { en: 'The city where the government meets', es: 'La ciudad donde se reúne el gobierno', fa: 'شهری که حکومت در آن جمع می‌شود' }],
        answer: 0,
        why: { en: 'Human capital is what you know and can do. School and training grow it.', es: 'El capital humano es lo que sabes y puedes hacer. Estudiar y entrenar lo hacen crecer.', fa: 'سرمایهٔ انسانی چیزی است که می‌دانی و کرده می‌توانی. درس و آموزش آن را بزرگ می‌کنند.' } },
      { q: { en: 'US government data show that, on average, more education means...', es: 'Los datos del gobierno de EE. UU. muestran que, en promedio, más educación significa...', fa: 'معلومات حکومت امریکا نشان می‌دهد که به طور اوسط، تعلیم بیشتر یعنی...' },
        choices: [
          { en: 'higher pay and less unemployment', es: 'más pago y menos desempleo', fa: 'معاش بیشتر و بیکاری کمتر' },
          { en: 'lower pay and more unemployment', es: 'menos pago y más desempleo', fa: 'معاش کمتر و بیکاری بیشتر' },
          { en: 'the same pay for every worker', es: 'el mismo pago para cada trabajador', fa: 'معاش یکسان برای هر کارگر' },
          { en: 'fewer kinds of jobs to choose from', es: 'menos tipos de trabajo entre los cuales elegir', fa: 'انواع کمتر کار برای انتخاب کردن' }],
        answer: 0,
        why: { en: 'On average, people with more education earn more and are out of work less often.', es: 'En promedio, la gente con más educación gana más y se queda sin trabajo menos veces.', fa: 'به طور اوسط، کسانی که تعلیم بیشتر دارند بیشتر کمایی می‌کنند و کمتر بیکار می‌شوند.' } },
      { q: { en: 'In an apprenticeship, what does "earn while you learn" mean?', es: 'En un programa de aprendiz, ¿qué significa «ganar mientras aprendes»?', fa: 'در کارآموزی، «یاد بگیر و کمایی کن» یعنی چه؟' },
        choices: [
          { en: 'You are paid as you train on the job', es: 'Te pagan mientras entrenas en el trabajo', fa: 'هنگام آموزش در کار معاش می‌گیری' },
          { en: 'You pay a big fee each week to train', es: 'Pagas mucho cada semana por entrenar', fa: 'هر هفته برای آموزش فیس کلان می‌دهی' },
          { en: 'You study for 4 years with no job', es: 'Estudias 4 años sin ningún trabajo', fa: '۴ سال درس می‌خوانی و هیچ کار نداری' },
          { en: 'You learn only from books at home', es: 'Aprendes solo con libros en casa', fa: 'فقط از کتاب در خانه یاد می‌گیری' }],
        answer: 0,
        why: { en: 'Apprentices work next to skilled workers and get paid while they learn a trade.', es: 'Los aprendices trabajan junto a expertos y les pagan mientras aprenden un oficio.', fa: 'کارآموزها کنار کارگران ماهر کار می‌کنند و هنگام آموختن حرفه معاش می‌گیرند.' } },
      { q: { en: 'What can you usually earn at a community college in about 2 years?', es: '¿Qué puedes sacar por lo general en un colegio comunitario en unos 2 años?', fa: 'معمولاً در حدود ۲ سال در کالج محلی چه چیز گرفته می‌توانی؟' },
        choices: [
          { en: 'An associate degree', es: 'Un título de asociado', fa: 'یک سند دو ساله' },
          { en: 'A bachelor\'s degree', es: 'Una licenciatura', fa: 'یک سند لیسانس' },
          { en: 'A doctor\'s license', es: 'Una licencia de médico', fa: 'یک جواز داکتری' },
          { en: 'A driver\'s license', es: 'Una licencia de manejo', fa: 'یک لایسنس موتر' }],
        answer: 0,
        why: { en: 'An associate degree takes about 2 years. You can often transfer to a 4-year college after.', es: 'Un título de asociado dura unos 2 años. Después muchas veces te puedes transferir a una universidad.', fa: 'سند دو ساله حدود ۲ سال وقت می‌گیرد. بعد اکثراً می‌توانی به پوهنتون ۴ ساله انتقال کنی.' } },
      { q: { en: 'Sam stops working to study full time. The pay he gives up is his...', es: 'Sam deja de trabajar para estudiar tiempo completo. El pago al que renuncia es su...', fa: 'سام کار را می‌گذارد تا تمام وقت درس بخواند. معاشی که از دست می‌دهد ... اوست.' },
        choices: [
          { en: 'opportunity cost', es: 'costo de oportunidad', fa: 'هزینهٔ فرصت' },
          { en: 'human capital', es: 'capital humano', fa: 'سرمایهٔ انسانی' },
          { en: 'return on investment', es: 'retorno de la inversión', fa: 'بازگشت سرمایه' },
          { en: 'student debt', es: 'deuda de estudiante', fa: 'قرض تحصیلی' }],
        answer: 0,
        why: { en: 'Lost pay is a real cost of school, even if no one sends you a bill.', es: 'El pago perdido es un costo real de estudiar, aunque nadie te mande una cuenta.', fa: 'معاش از دست رفته یک هزینهٔ واقعی درس است، حتی اگر کسی برایت بل نفرستد.' } },
      { q: { en: 'Education is an investment. What is its return on investment?', es: 'La educación es una inversión. ¿Qué es su retorno de la inversión?', fa: 'تعلیم یک سرمایه‌گذاری است. بازگشت سرمایهٔ آن چیست؟' },
        choices: [
          { en: 'What you gain compared to what you pay', es: 'Lo que ganas comparado con lo que pagas', fa: 'آنچه به دست می‌آوری در برابر آنچه می‌پردازی' },
          { en: 'The price of one book for a class', es: 'El precio de un libro para una clase', fa: 'قیمت یک کتاب برای یک صنف' },
          { en: 'The money a school pays you to leave early', es: 'El dinero que te paga la escuela si te vas antes', fa: 'پولی که مکتب می‌دهد تا زودتر بروی' },
          { en: 'A bus ticket back home after class', es: 'Un boleto de bus a casa después de clase', fa: 'تکت بس به خانه بعد از صنف' }],
        answer: 0,
        why: { en: 'Return on investment compares the benefits, like more pay, to the costs you put in.', es: 'El retorno de la inversión compara los beneficios, como más pago, con los costos que pones.', fa: 'بازگشت سرمایه فایده‌ها، مثل معاش بیشتر، را با هزینه‌هایی که گذاشتی مقایسه می‌کند.' } },
      { q: { en: 'Before you borrow money for school, what should you do?', es: 'Antes de pedir dinero prestado para estudiar, ¿qué debes hacer?', fa: 'پیش از قرض گرفتن پول برای درس، چه باید بکنی؟' },
        choices: [
          { en: 'Weigh the debt against the pay you expect', es: 'Comparar la deuda con el pago que esperas', fa: 'قرض را با معاشی که انتظار داری مقایسه کنی' },
          { en: 'Borrow as much money as anyone will lend you', es: 'Pedir todo el dinero que alguien te quiera prestar', fa: 'هر قدر پول که کسی قرض بدهد بگیری' },
          { en: 'Pick the school with the biggest price', es: 'Elegir la escuela con el precio más alto', fa: 'مکتبی را بگیری که از همه گران‌تر است' },
          { en: 'Never think about paying the loan back', es: 'Nunca pensar en devolver el préstamo', fa: 'هیچ وقت به پس دادن قرض فکر نکنی' }],
        answer: 0,
        why: { en: 'Student debt must be paid back. Think about what the path costs and what it may pay.', es: 'La deuda de estudiante se debe devolver. Piensa en lo que cuesta el camino y lo que puede pagar.', fa: 'قرض تحصیلی باید پس داده شود. فکر کن این راه چقدر هزینه دارد و چقدر معاش شاید بیاورد.' } },
      { q: { en: 'Which is true about the paths after high school?', es: '¿Qué es cierto sobre los caminos después de la secundaria?', fa: 'کدام گپ دربارهٔ راه‌های بعد از مکتب درست است؟' },
        choices: [
          { en: 'Many paths can work; pick one that fits you', es: 'Muchos caminos sirven; elige uno que te quede', fa: 'راه‌های زیاد خوب هستند؛ یکی را که به تو می‌خورد بگیر' },
          { en: 'Only a 4-year college leads to a good job', es: 'Solo la universidad de 4 años da un buen trabajo', fa: 'فقط پوهنتون ۴ ساله به کار خوب می‌رسد' },
          { en: 'The military trains people for just one job', es: 'Las fuerzas armadas entrenan para un solo trabajo', fa: 'اردو مردم را فقط برای یک کار آموزش می‌دهد' },
          { en: 'Trades need no skill and no training at all', es: 'Los oficios no necesitan habilidad ni entrenamiento', fa: 'حرفه‌ها هیچ مهارت و آموزش نمی‌خواهند' }],
        answer: 0,
        why: { en: 'Trades, community college, 4-year college, certificates and the military can all lead to good jobs.', es: 'Los oficios, el colegio comunitario, la universidad, los certificados y las fuerzas armadas pueden dar buenos trabajos.', fa: 'حرفه، کالج محلی، پوهنتون، سرتفیکت و خدمت نظامی همه می‌توانند به کار خوب برسانند.' } }
    ]
  },

  learned: [
    { en: 'Your skills and knowledge are your [[human capital|human capital]]. Learning is an [[investment|investment]] in yourself.', es: 'Tus habilidades y conocimientos son tu [[human capital|capital humano]]. Aprender es una [[investment|inversión]] en ti.', fa: 'مهارت و دانش تو [[human capital|سرمایهٔ انسانی]] تو است. آموختن یک [[investment|سرمایه‌گذاری]] در خودت است.' },
    { en: 'On average, more education means higher pay and less [[unemployment|unemployment]].', es: 'En promedio, más educación significa más pago y menos [[unemployment|desempleo]].', fa: 'به طور اوسط، تعلیم بیشتر یعنی معاش بیشتر و [[unemployment|بیکاری]] کمتر.' },
    { en: 'Many paths can work. Weigh the costs, like lost pay and [[student debt|debt]], against the gains.', es: 'Muchos caminos sirven. Compara los costos, como el pago perdido y la [[student debt|deuda]], con lo que ganas.', fa: 'راه‌های زیاد خوب هستند. هزینه‌ها، مثل معاش از دست رفته و [[student debt|قرض]]، را با فایده‌ها مقایسه کن.' }
  ],
  reflect: {
    q: { en: 'Which path after high school interests you? What would it cost, and what could you gain?', es: '¿Qué camino después de la secundaria te interesa? ¿Qué costaría y qué podrías ganar?', fa: 'کدام راه بعد از مکتب برایت جالب است؟ چه هزینه دارد و چه فایده‌ای شاید ببری؟' },
    starter: { en: 'One path I am curious about is', es: 'Un camino que me da curiosidad es', fa: 'یک راهی که برایم جالب است' }
  }
};
