/* COINWALKER · Episode 8.3 · Exploring the World of Careers · THE FINALE
   Alexandria, Virginia, today: a job-search day. North-west: the public library with its career center (Q over h)
   and the Metro station sign at the west end. North-east: an office tower (U over h) and the hospital (J over h),
   with a paved plaza and a fountain (O). Row 11 is King Street, running east to the Potomac River (~, =).
   South-west: a print and copy shop (R), a small shop (Q) and a fenced building site (F around dirt :).
   South-east: a restaurant (R) with a hiring sign and a patio (l), and the waterfront with flowers (,) and a dock (k).
   The last ledger page is here: beat the Great Grump and the Great Ledger is whole again. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'EPF',
  title: { en: 'Exploring the World of Careers', es: 'Explorar el mundo de las carreras', fa: 'گشت در دنیای مسلک‌ها' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Alexandria, job-search day', es: 'Alexandria, día de buscar trabajo', fa: 'الکساندریا، روز کاریابی' },
  intro: [
    { en: 'The last page! The Grump hid it here, on a busy job-search day.',
      es: '¡La última página! El Gruñón la escondió aquí, en un día de mucha búsqueda de trabajo.',
      fa: 'آخرین صفحه! غرغرو آن را اینجا، در یک روز شلوغ کاریابی، پنهان کرد.' },
    { en: 'People forget how to find good work. Talk to 4 people, then the stone.',
      es: 'La gente olvida cómo encontrar un buen trabajo. Habla con 4 personas y luego ve a la piedra.',
      fa: 'مردم فراموش می‌کنند چطور کار خوب پیدا کنند. با ۴ نفر گپ بزن، بعد نزد سنگ برو.' }
  ],
  /* cut scenes: Alexandria on the world map (no timeline in this game) */
  scenes: {
    at: [-77.05, 38.805],
    start: [
      { en: 'Alexandria, Virginia, is on the Potomac River, near Washington, D.C.',
        es: 'Alexandria, Virginia, está junto al río Potomac, cerca de Washington, D.C.',
        fa: 'الکساندریا، ویرجینیا، کنار دریای پوتومک، نزدیک واشنگتن دی سی است.' },
      { en: 'Today, many people here are looking for a job.',
        es: 'Hoy, mucha gente de aquí está buscando trabajo.',
        fa: 'امروز، مردم زیادی اینجا دنبال کار می‌گردند.' },
      { en: 'Hospitals, shops, offices and builders all need new workers.',
        es: 'Los hospitales, las tiendas, las oficinas y los constructores necesitan trabajadores nuevos.',
        fa: 'شفاخانه‌ها، دکان‌ها، دفترها و ساختمان‌سازها همه به کارگر نو ضرورت دارند.' }
    ],
    page: { en: 'All 24 ledger pages are home. The Great Ledger is whole again!',
      es: 'Las 24 páginas del libro volvieron a casa. ¡El Gran Libro de Cuentas está completo otra vez!',
      fa: 'هر ۲۴ صفحهٔ دفتر حساب به خانه برگشتند. دفتر حساب بزرگ دوباره کامل است!' },
    guess: {
      q: { en: 'After high school, is there only one good path?', es: 'Después de la secundaria, ¿hay un solo buen camino?', fa: 'بعد از مکتب، آیا فقط یک راه خوب هست؟' },
      choices: [
        { t: { en: '🛤️ No, many paths', es: '🛤️ No, muchos caminos', fa: '🛤️ نه، راه‌های زیاد' }, ok: true },
        { t: { en: '1️⃣ Yes, only one', es: '1️⃣ Sí, solo uno', fa: '1️⃣ بله، فقط یکی' } }
      ],
      why: { en: 'College, trade school, an apprenticeship, the military or a job: all are respected paths.', es: 'La universidad, una escuela técnica, un aprendizaje, el ejército o un trabajo: todos son caminos respetados.', fa: 'پوهنتون، مکتب مسلکی، شاگردی، اردو یا یک کار: همه راه‌های با عزت هستند.' }
    },
    next: {
      q: { en: 'From Market Valley to Future Fields: what will your own money plan start with?', es: 'Del Valle del Mercado a los Campos del Futuro: ¿con qué empezará tu propio plan de dinero?', fa: 'از درهٔ بازار تا کشتزارهای آینده: برنامهٔ پولی خودت با چه شروع می‌شود؟' },
      choices: [
        { t: { en: '📊 A budget first', es: '📊 Primero, un presupuesto', fa: '📊 اول یک بودجه' }, ok: true },
        { t: { en: '🛍️ Spend now, plan later', es: '🛍️ Gastar ahora, planear después', fa: '🛍️ حالا خرج کن، بعد برنامه بریز' } }
      ],
      why: { en: 'Earn, budget, save, use credit wisely, invest and protect it. The 8 realms are your plan.', es: 'Gana, haz un presupuesto, ahorra, usa bien el crédito, invierte y protege. Los 8 reinos son tu plan.', fa: 'کمایی کن، بودجه بساز، پس‌انداز کن، قرض را درست کار بگیر، سرمایه‌گذاری کن و محافظت کن. ۸ سرزمین برنامهٔ تو هستند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [5, 3], name: { en: 'Mrs. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      look: { skin: 5, hair: '#1a1008', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am the librarian. Our career center has free computers and a job board.', es: 'Soy la bibliotecaria. Nuestro centro de carreras tiene computadoras gratis y un tablero de empleos.', fa: 'من کتابدار هستم. مرکز مسلک ما کمپیوتر مفت و یک تختهٔ اعلان کار دارد.' },
        { en: 'Find job openings online, on our board, and on signs in shop windows.', es: 'Busca puestos libres en internet, en nuestro tablero y en letreros de las tiendas.', fa: 'کارهای خالی را در انترنت، روی تختهٔ ما و روی اعلان‌های دکان‌ها پیدا کن.' },
        { en: 'Look at the pay too. More training often means higher pay.', es: 'Mira también el sueldo. Más preparación muchas veces significa más sueldo.', fa: 'به معاش هم نگاه کن. آموزش بیشتر اکثراً یعنی معاش بیشتر.' }
      ] },
    { at: [19, 3], name: { en: 'Mr. Kim', es: 'Sr. Kim', fa: 'آقای کیم' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#3a5a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am an accountant. I count and check money for small businesses.', es: 'Soy contador. Cuento y reviso el dinero de negocios pequeños.', fa: 'من محاسب هستم. پول کسب و کارهای کوچک را حساب و بررسی می‌کنم.' },
        { en: 'A [[reference|reference]] is a person who can tell a boss about you.', es: 'Una [[reference|referencia]] es una persona que puede hablarle de ti a un jefe.', fa: 'یک [[reference|معرف]] کسی است که می‌تواند دربارهٔ تو به رئیس بگوید.' },
        { en: 'Ask a teacher, a coach or a past boss. Always ask them first!', es: 'Pídeselo a un maestro, un entrenador o un jefe anterior. ¡Siempre pregúntales primero!', fa: 'از یک معلم، مربی یا رئیس قبلی بخواه. همیشه اول از آنها بپرس!' }
      ] },
    { at: [26, 3], name: { en: 'Nurse Adeyemi', es: 'Enfermero Adeyemi', fa: 'نرس ادیمی' },
      look: { skin: 4, hair: '#120c08', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'short' },
      lines: [
        { en: 'At the hospital, we need [[soft skills|soft skills]], not only health facts.', es: 'En el hospital necesitamos [[soft skills|habilidades blandas]], no solo datos de salud.', fa: 'در شفاخانه به [[soft skills|مهارت‌های رفتاری]] ضرورت داریم، نه فقط معلومات صحی.' },
        { en: '[[teamwork|Teamwork]] matters. We help each other on every shift.', es: 'El [[teamwork|trabajo en equipo]] importa. Nos ayudamos en cada turno.', fa: '[[teamwork|کار گروهی]] مهم است. در هر نوبت به همدیگر کمک می‌کنیم.' },
        { en: 'Show up on time. Talk clearly and listen well. Patients count on us.', es: 'Llega a tiempo. Habla claro y escucha bien. Los pacientes cuentan con nosotros.', fa: 'به وقتش بیا. واضح گپ بزن و خوب گوش بده. مریض‌ها به ما امید دارند.' }
      ] },
    { at: [10, 13], name: { en: 'Ms. Torres', es: 'Sra. Torres', fa: 'خانم تورس' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Many people print their [[resume|résumé]] here. Keep it to one page.', es: 'Mucha gente imprime aquí su [[resume|currículum]]. Que sea de una sola página.', fa: 'مردم زیاد [[resume|خلص سوانح]] خود را اینجا چاپ می‌کنند. آن را یک صفحه نگه دار.' },
        { en: 'List your skills, your school, and your work and volunteer experience.', es: 'Escribe tus habilidades, tu escuela, y tu experiencia de trabajo y voluntariado.', fa: 'مهارت‌ها، مکتب، و تجربهٔ کار و کار داوطلبانه‌ات را بنویس.' },
        { en: 'Add a [[cover letter|cover letter]]: a short letter about why you want the job.', es: 'Agrega una [[cover letter|carta de presentación]]: una carta corta sobre por qué quieres el trabajo.', fa: 'یک [[cover letter|نامهٔ معرفی]] هم بگذار: یک نامهٔ کوتاه که چرا این کار را می‌خواهی.' }
      ] },
    { at: [20, 13], name: { en: 'Mr. Bashir', es: 'Sr. Bashir', fa: 'آقای بشیر' },
      look: { skin: 2, hair: '#1a1208', shirt: '#f0f0e8', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'I manage this restaurant. First, fill out an [[application|application]] neatly and honestly.', es: 'Dirijo este restaurante. Primero, llena una [[application|solicitud]] con cuidado y con la verdad.', fa: 'من مدیر این رستورانت هستم. اول، یک [[application|فورمهٔ درخواست]] را پاک و راست پر کن.' },
        { en: 'At the [[interview|interview]], be on time, dress neatly and come prepared.', es: 'En la [[interview|entrevista]], llega a tiempo, vístete con cuidado y ven preparado.', fa: 'در [[interview|مصاحبه]]، به وقتش بیا، مرتب لباس بپوش و آماده باش.' },
        { en: 'Ask me one question. At the end, say thank you!', es: 'Hazme una pregunta. ¡Al final, da las gracias!', fa: 'از من یک سوال بپرس. در آخر، تشکر کن!' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the library with the career center (Q over h, door at 5,3), the Metro kiosk (J) and its sign at
     the west end; the office tower (U over h, door 19,3) and the hospital (J over h, door 26,3) with a paved plaza
     (l) and a fountain (O). The Potomac (~, deep =) runs down the east edge.
     Row 11: King Street (l), from the Metro end east to a dock (k) on the river.
     South: a small shop and the copy shop (door 10,13); the fenced building site (F, gate at 4,15) in the
     south-west; the restaurant (door 20,13) with its hiring sign and patio (l); the waterfront flowers and a dock. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~=',
    'T.QQQQQQQ..T.T...UUUUU.JJJJJJ~~=',
    'T.QQQQQQQ........UUUUU.JJJJJJ~~=',
    'T.hhhdhhh........hhdhh.hhhdhh~~=',
    'T........x...................~~=',
    'T...............llllllllllll.~~=',
    'T..........T.,,.llllllllllll.~~=',
    'T,,......T...................~~=',
    'TJJ..................O......T~~=',
    'T...............T.........T..~~=',
    'T..x.......................x.~~=',
    'Tllllllllllllllllllllllllllllk~=',
    'T.QQQ....RRRR.....RRRRRR.....~~=',
    'T.hhh....hdhh.....hhdhhh.,,,.~~=',
    'T......................x.,,,.~~=',
    'TFFF:FFF.....T.....llll......~~=',
    'TF:::::Fx..........llll......~~=',
    'TF:::::F.:....T..............k~=',
    'TF:::JJF.:...................~~=',
    'TFr::::F.:T.............,,,,.~~=',
    'TFFFFFFF.........T...........~~=',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~='
  ],
  start: [8, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 9], at: [11, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps north, toward the library.', es: 'Desde esta nota, camina 5 pasos al norte, hacia la biblioteca.', fa: 'از این یادداشت، ۵ قدم به شمال برو، به طرف کتابخانه.' },
      text: { en: 'An old coin! Save a little from every paycheck, starting with your very first one.', es: '¡Una moneda antigua! Ahorra un poco de cada sueldo, empezando por el primero.', fa: 'یک سکهٔ قدیمی! از هر معاش کمی پس‌انداز کن، از همان معاش اول شروع کن.' } },
    { clueAt: [20, 20], at: [24, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the river.', es: 'Desde esta nota, camina 4 pasos al este, hacia el río.', fa: 'از این یادداشت، ۴ قدم به شرق برو، به طرف دریا.' },
      text: { en: 'A river shell! Long ago, many Alexandria jobs were at its busy river port.', es: '¡Una concha del río! Hace mucho, muchos trabajos de Alexandria estaban en su puerto activo.', fa: 'یک صدف دریا! در گذشته، کارهای زیاد الکساندریا در بندر شلوغ دریایی آن بود.' } }
  ],

  words: {
    career: { en: 'the kind of work you do and grow in for many years', es: 'el tipo de trabajo que haces y en el que creces por muchos años', fa: 'نوع کاری که سال‌ها انجام می‌دهی و در آن پیش می‌روی' },
    'career cluster': { en: 'a group of jobs that use the same kind of skills, like health or building', es: 'un grupo de trabajos que usan habilidades parecidas, como la salud o la construcción', fa: 'گروهی از کارها که مهارت‌های شبیه می‌خواهند، مثل صحت یا ساختمان‌سازی' },
    'job outlook': { en: 'how many openings a job will likely have in the future', es: 'cuántos puestos libres tendrá probablemente un trabajo en el futuro', fa: 'این که یک کار در آینده احتمالاً چند جای خالی دارد' },
    resume: { en: 'a one-page list of your skills, school, work and volunteer experience', es: 'una lista de una página con tus habilidades, escuela, trabajo y voluntariado', fa: 'یک فهرست یک صفحه‌ای از مهارت‌ها، مکتب، کار و کار داوطلبانهٔ تو' },
    'cover letter': { en: 'a short letter you send with your résumé, about why you want the job', es: 'una carta corta que mandas con tu currículum, sobre por qué quieres el trabajo', fa: 'یک نامهٔ کوتاه که با خلص سوانح می‌فرستی، که چرا این کار را می‌خواهی' },
    application: { en: 'a form you fill out to ask for a job', es: 'un formulario que llenas para pedir un trabajo', fa: 'فورمه‌ای که برای خواستن یک کار پر می‌کنی' },
    reference: { en: 'a person who can tell a boss about your work and how you act', es: 'una persona que puede contarle a un jefe sobre tu trabajo y cómo actúas', fa: 'کسی که می‌تواند دربارهٔ کار و رفتار تو به رئیس بگوید' },
    interview: { en: 'a meeting where a boss asks you questions about a job', es: 'una reunión donde un jefe te hace preguntas sobre un trabajo', fa: 'یک دیدار که رئیس دربارهٔ یک کار از تو سوال می‌پرسد' },
    'job offer': { en: 'when a boss asks you to take the job: the pay, hours and benefits', es: 'cuando un jefe te pide tomar el trabajo: el sueldo, las horas y los beneficios', fa: 'وقتی رئیس از تو می‌خواهد کار را بگیری: معاش، ساعت‌ها و امتیازها' },
    benefits: { en: 'extras a job gives besides pay, like health insurance or paid time off', es: 'extras que da un trabajo además del sueldo, como seguro médico o días libres pagados', fa: 'چیزهای اضافه که کار به جز معاش می‌دهد، مثل بیمهٔ صحی یا رخصتی با معاش' },
    'w-4': { en: 'a form you fill out at a new job, so your boss knows how much tax to withhold', es: 'un formulario que llenas en un trabajo nuevo, para saber cuánto impuesto retener', fa: 'فورمه‌ای که در کار نو پر می‌کنی تا کارفرما بداند چقدر مالیات کم کند' },
    'i-9': { en: 'a first-day form that shows you are allowed to work in the US', es: 'un formulario del primer día que muestra que puedes trabajar en EE. UU.', fa: 'فورمهٔ روز اول که نشان می‌دهد اجازهٔ کار در امریکا را داری' },
    'minimum wage': { en: 'the lowest pay per hour that the law allows', es: 'el sueldo más bajo por hora que permite la ley', fa: 'کمترین معاش در یک ساعت که قانون اجازه می‌دهد' },
    'soft skills': { en: 'people skills, like teamwork, showing up on time and talking clearly', es: 'habilidades con la gente, como trabajar en equipo, llegar a tiempo y hablar claro', fa: 'مهارت‌های رفتار با مردم، مثل کار گروهی، به وقت آمدن و واضح گپ زدن' },
    teamwork: { en: 'working well with other people to get a job done', es: 'trabajar bien con otras personas para terminar una tarea', fa: 'خوب کار کردن با دیگران برای تمام کردن یک کار' },
    apprenticeship: { en: 'a job where you earn pay while skilled workers teach you a trade', es: 'un trabajo donde ganas sueldo mientras trabajadores expertos te enseñan un oficio', fa: 'کاری که در آن معاش می‌گیری و کارگران ماهر یک مسلک را به تو یاد می‌دهند' }
  },

  npcs: [
    {
      x: 7, y: 5,
      name: { en: 'Ms. Rahimi', es: 'Sra. Rahimi', fa: 'خانم رحیمی' },
      role: { en: 'Career counselor', es: 'Consejera de carreras', fa: 'مشاور مسلک' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2f6f4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome to the career center! Let us explore [[career|careers]] together.', es: '¡Bienvenido al centro de carreras! Exploremos juntos las [[career|carreras]].', fa: 'به مرکز مسلک خوش آمدی! بیا با هم [[career|مسلک‌ها]] را ببینیم.' },
        { en: 'Start with you: your interests, your skills and your values.', es: 'Empieza por ti: tus intereses, tus habilidades y tus valores.', fa: 'از خودت شروع کن: علاقه‌ها، مهارت‌ها و ارزش‌هایت.' },
        { en: 'Jobs come in groups called [[career cluster|career clusters]], like health or building.', es: 'Los trabajos vienen en grupos llamados [[career cluster|grupos de carreras]], como la salud o la construcción.', fa: 'کارها در گروه‌هایی به نام [[career cluster|گروه مسلک‌ها]] هستند، مثل صحت یا ساختمان‌سازی.' },
        { en: 'Check the [[job outlook|job outlook]]. Will there be more openings later?', es: 'Mira las [[job outlook|perspectivas de empleo]]. ¿Habrá más puestos libres después?', fa: '[[job outlook|آیندهٔ کار]] را ببین. آیا بعداً جاهای خالی بیشتر خواهد بود؟' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'A job has a good job outlook. What does that mean?', es: 'Un trabajo tiene buenas perspectivas de empleo. ¿Qué significa eso?', fa: 'یک کار آیندهٔ خوب دارد. این یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'More openings in the future', es: 'Más puestos libres en el futuro', fa: 'جاهای خالی بیشتر در آینده' },
            why: { en: 'Yes! A good outlook means more people will be hired for that job later.', es: '¡Sí! Buenas perspectivas significa que contratarán a más gente para ese trabajo después.', fa: 'بله! آیندهٔ خوب یعنی بعداً مردم بیشتری برای آن کار گرفته می‌شوند.' } },
          { t: { en: 'The office has a nice big view', es: 'La oficina tiene una vista grande y bonita', fa: 'دفتر یک منظرهٔ کلان و قشنگ دارد' },
            why: { en: 'No. Outlook is not about windows. It tells if a job will have more openings.', es: 'No. Las perspectivas no son sobre ventanas. Dicen si un trabajo tendrá más puestos.', fa: 'نه. آیندهٔ کار دربارهٔ کلکین نیست. می‌گوید آیا کار جای خالی بیشتر دارد.' } },
          { t: { en: 'The pay never goes up', es: 'El sueldo nunca sube', fa: 'معاش هیچ وقت بالا نمی‌رود' },
            why: { en: 'No. Outlook is about how many jobs there will be, not a pay rule.', es: 'No. Las perspectivas tratan de cuántos trabajos habrá, no de una regla de sueldo.', fa: 'نه. آیندهٔ کار دربارهٔ تعداد کارها در آینده است، نه قانون معاش.' } }
        ]
      }
    },
    {
      x: 6, y: 16,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Apprentice electrician', es: 'Aprendiz de electricista', fa: 'شاگرد برق‌کار' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', hat: '#f0c020', style: 'short' },
      lines: [
        { en: 'I am an apprentice electrician. I earn pay while I learn.', es: 'Soy aprendiz de electricista. Gano un sueldo mientras aprendo.', fa: 'من شاگرد برق‌کار هستم. در وقت یاد گرفتن معاش می‌گیرم.' },
        { en: 'This is an [[apprenticeship|apprenticeship]]. Skilled workers teach me on the job.', es: 'Esto es un [[apprenticeship|aprendizaje]]. Trabajadores expertos me enseñan en el trabajo.', fa: 'این [[apprenticeship|شاگردی]] است. کارگران ماهر سر کار به من یاد می‌دهند.' },
        { en: 'My sister is in college. My friend joined the military.', es: 'Mi hermana está en la universidad. Mi amigo entró al ejército.', fa: 'خواهرم در پوهنتون است. دوستم به اردو رفت.' },
        { en: 'Many paths are respected. Pick the one that fits your goals.', es: 'Muchos caminos son respetados. Elige el que va con tus metas.', fa: 'راه‌های زیاد با عزت هستند. راهی را بگیر که با هدف‌هایت جور است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which path after high school is a good one?', es: '¿Qué camino después de la secundaria es bueno?', fa: 'کدام راه بعد از مکتب خوب است؟' },
        choices: [
          { ok: true, t: { en: 'Any path that fits your goals', es: 'Cualquier camino que va con tus metas', fa: 'هر راهی که با هدف‌هایت جور است' },
            why: { en: 'Yes! College, trades, the military and work are all respected paths.', es: '¡Sí! La universidad, los oficios, el ejército y el trabajo son caminos respetados.', fa: 'بله! پوهنتون، مسلک‌ها، اردو و کار همه راه‌های با عزت هستند.' } },
          { t: { en: 'Only a four-year college', es: 'Solo una universidad de cuatro años', fa: 'فقط پوهنتون چهار ساله' },
            why: { en: 'No. College is one good path. Marcus learns a trade and earns pay.', es: 'No. La universidad es un buen camino. Marcus aprende un oficio y gana sueldo.', fa: 'نه. پوهنتون یک راه خوب است. مارکوس یک مسلک یاد می‌گیرد و معاش می‌گیرد.' } },
          { t: { en: 'Only the job my friends pick', es: 'Solo el trabajo que eligen mis amigos', fa: 'فقط کاری که دوستانم انتخاب می‌کنند' },
            why: { en: 'No. Your friends are not you. Pick a path that fits your own goals.', es: 'No. Tus amigos no son tú. Elige un camino que va con tus propias metas.', fa: 'نه. دوستانت تو نیستند. راهی را بگیر که با هدف‌های خودت جور است.' } }
        ]
      }
    },
    {
      x: 18, y: 8,
      name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      role: { en: 'Hiring manager', es: 'Encargada de contratar', fa: 'مسئول استخدام' },
      look: { skin: 1, hair: '#120c08', shirt: '#8a4ac0', pants: '#2a2a2a', style: 'bun' },
      remember: { ep: '4.3', t: { en: 'You learned tax forms in Paycheck Port! You will use one here.', es: '¡Aprendiste los formularios de impuestos en el Puerto del Sueldo! Aquí usarás uno.', fa: 'تو در بندر معاش فورمه‌های مالیات را یاد گرفتی! اینجا یکی را کار می‌گیری.' } },
      lines: [
        { en: 'I hire new workers for the office tower.', es: 'Contrato a trabajadores nuevos para la torre de oficinas.', fa: 'من برای برج دفترها کارگر نو استخدام می‌کنم.' },
        { en: 'A [[job offer|job offer]] tells the pay, the hours and the [[benefits|benefits]].', es: 'Una [[job offer|oferta de trabajo]] dice el sueldo, las horas y los [[benefits|beneficios]].', fa: 'یک [[job offer|پیشنهاد کار]] معاش، ساعت‌ها و [[benefits|امتیازها]] را می‌گوید.' },
        { en: 'Benefits are extras, like health insurance, paid time off and a retirement plan.', es: 'Los beneficios son extras, como seguro médico, días libres pagados y un plan de jubilación.', fa: 'امتیازها چیزهای اضافه هستند، مثل بیمهٔ صحی، رخصتی با معاش و پلان تقاعد.' },
        { en: 'First day: a [[w-4|W-4]] for taxes. An [[i-9|I-9]] shows you may work in the US.', es: 'Primer día: un [[w-4|W-4]] para impuestos. Un [[i-9|I-9]] muestra que puedes trabajar en EE. UU.', fa: 'روز اول: یک [[w-4|W-4]] برای مالیات. یک [[i-9|I-9]] نشان می‌دهد در امریکا کار کرده می‌توانی.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which of these is a benefit in a job offer?', es: '¿Cuál de estos es un beneficio en una oferta de trabajo?', fa: 'کدام یکی از اینها در پیشنهاد کار یک امتیاز است؟' },
        choices: [
          { ok: true, t: { en: 'Paid time off', es: 'Días libres pagados', fa: 'رخصتی با معاش' },
            why: { en: 'Yes! Paid time off is an extra. You get paid on some days you do not work.', es: '¡Sí! Los días libres pagados son un extra. Te pagan algunos días que no trabajas.', fa: 'بله! رخصتی با معاش یک چیز اضافه است. بعضی روزهایی که کار نمی‌کنی معاش می‌گیری.' } },
          { t: { en: 'The job title', es: 'El nombre del puesto', fa: 'نام وظیفه' },
            why: { en: 'No. The title is the name of the job. Benefits are extras, like health insurance.', es: 'No. El nombre es cómo se llama el puesto. Los beneficios son extras, como seguro médico.', fa: 'نه. نام وظیفه فقط نام کار است. امتیازها چیزهای اضافه هستند، مثل بیمهٔ صحی.' } },
          { t: { en: 'The work hours', es: 'Las horas de trabajo', fa: 'ساعت‌های کار' },
            why: { en: 'No. The offer lists the hours, but hours are not a benefit. Benefits are extras.', es: 'No. La oferta dice las horas, pero las horas no son un beneficio. Los beneficios son extras.', fa: 'نه. پیشنهاد ساعت‌ها را می‌گوید، اما ساعت امتیاز نیست. امتیازها چیزهای اضافه هستند.' } }
        ]
      }
    },
    {
      x: 17, y: 15,
      name: { en: 'Jamal', es: 'Jamal', fa: 'جمال' },
      role: { en: 'Student with a part-time job', es: 'Estudiante con trabajo de medio tiempo', fa: 'شاگرد با کار نیمه‌وقت' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am 16. I wash dishes and help in the restaurant kitchen.', es: 'Tengo 16 años. Lavo platos y ayudo en la cocina del restaurante.', fa: 'من ۱۶ ساله هستم. ظرف می‌شویم و در آشپزخانهٔ رستورانت کمک می‌کنم.' },
        { en: 'The law sets a [[minimum wage|minimum wage]]. Virginia has its own state minimum wage.', es: 'La ley fija un [[minimum wage|salario mínimo]]. Virginia tiene su propio salario mínimo estatal.', fa: 'قانون یک [[minimum wage|حداقل معاش]] تعیین می‌کند. ویرجینیا حداقل معاش ایالتی خود را دارد.' },
        { en: 'Workers under 18 cannot do some risky jobs, like using some big machines.', es: 'Los trabajadores menores de 18 no pueden hacer algunos trabajos peligrosos, como usar ciertas máquinas grandes.', fa: 'کارگران کمتر از ۱۸ سال بعضی کارهای خطرناک را نمی‌توانند، مثل کار با بعضی ماشین‌های بزرگ.' },
        { en: 'Younger teens have limits on hours. And everyone has a right to a safe job.', es: 'Los adolescentes más jóvenes tienen límites de horas. Y todos tienen derecho a un trabajo seguro.', fa: 'نوجوانان کوچک‌تر برای ساعت کار حد دارند. و همه حق یک کار امن را دارند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Jamal is 16. What is true about his job?', es: 'Jamal tiene 16 años. ¿Qué es verdad sobre su trabajo?', fa: 'جمال ۱۶ ساله است. دربارهٔ کار او چه درست است؟' },
        choices: [
          { ok: true, t: { en: 'Some risky jobs are not allowed', es: 'Algunos trabajos peligrosos no se permiten', fa: 'بعضی کارهای خطرناک اجازه نیست' },
            why: { en: 'Yes! The law keeps workers under 18 away from some risky jobs and machines.', es: '¡Sí! La ley aleja a los menores de 18 de algunos trabajos y máquinas peligrosos.', fa: 'بله! قانون کارگران کمتر از ۱۸ سال را از بعضی کارها و ماشین‌های خطرناک دور نگه می‌دارد.' } },
          { t: { en: 'He needs no forms to start work', es: 'No necesita formularios para empezar a trabajar', fa: 'برای شروع کار به فورمه ضرورت ندارد' },
            why: { en: 'No. Every new worker fills out first-day forms, like the W-4 and the I-9.', es: 'No. Todo trabajador nuevo llena formularios el primer día, como el W-4 y el I-9.', fa: 'نه. هر کارگر نو روز اول فورمه پر می‌کند، مثل W-4 و I-9.' } },
          { t: { en: 'His boss can skip paying him', es: 'Su jefe puede dejar de pagarle', fa: 'رئیسش می‌تواند به او معاش ندهد' },
            why: { en: 'No. Workers must be paid for their work, at least the minimum wage.', es: 'No. A los trabajadores se les debe pagar su trabajo, por lo menos el salario mínimo.', fa: 'نه. باید به کارگران برای کارشان معاش داده شود، دست کم حداقل معاش.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 4, text: { en: 'PUBLIC LIBRARY · CAREER CENTER · Free computers, a job board and help with résumés.', es: 'BIBLIOTECA PÚBLICA · CENTRO DE CARRERAS · Computadoras gratis, tablero de empleos y ayuda con el currículum.', fa: 'کتابخانهٔ عامه · مرکز مسلک · کمپیوتر مفت، تختهٔ اعلان کار و کمک با خلص سوانح.' } },
    { x: 3, y: 10, text: { en: 'METRO STATION · KING STREET · Trains carry many workers to jobs across the region.', es: 'ESTACIÓN DE METRO · KING STREET · Los trenes llevan a muchos trabajadores a sus empleos en la región.', fa: 'ایستگاه مترو · سرک کینگ · قطارها کارگران زیاد را به کارهایشان در این منطقه می‌برند.' } },
    { x: 8, y: 16, text: { en: 'HARD HATS ON · Building site. Workers under 18 cannot do some risky jobs here.', es: 'USA CASCO · Obra en construcción. Los menores de 18 no pueden hacer algunos trabajos peligrosos aquí.', fa: 'کلاه ایمنی بپوش · جای ساختمان‌سازی. کارگران کمتر از ۱۸ سال بعضی کارهای خطرناک اینجا را نمی‌توانند.' } },
    { x: 23, y: 14, text: { en: 'NOW HIRING · Kitchen helper, part time, after school. Ask inside for an application.', es: 'SE BUSCA PERSONAL · Ayudante de cocina, medio tiempo, después de clases. Pide una solicitud adentro.', fa: 'استخدام داریم · کمک آشپزخانه، نیمه‌وقت، بعد از مکتب. فورمهٔ درخواست را داخل بخواه.' } },
    { x: 27, y: 10, text: { en: 'KING STREET · It runs east to the Potomac River waterfront.', es: 'KING STREET · Va al este, hasta la orilla del río Potomac.', fa: 'سرک کینگ · این سرک به شرق تا کنار دریای پوتومک می‌رود.' } }
  ],

  /* the quest: Nadia (gold !) at the Metro station, north-west -> Luis the street cleaner on the waterfront,
     south-east -> a gust blew her résumé into 4 pieces; each piece describes a skill or an experience, and the
     student carries it to the workplace it fits (restaurant, building site, hospital, office) -> the Paper Gust
     shows itself, hops away twice and is caught by the river -> back to Nadia. */
  quest: {
    stat: 'hei',
    title: { en: 'The Runaway Résumé', es: 'El currículum fugitivo', fa: 'خلص سوانح فراری' },
    giver: {
      x: 4, y: 8,
      name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      role: { en: 'Student with a job interview', es: 'Estudiante con una entrevista de trabajo', fa: 'شاگرد با یک مصاحبهٔ کاری' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#c04a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I have my first job interview today! I printed my résumé at the library.', es: '¡Hoy tengo mi primera entrevista de trabajo! Imprimí mi currículum en la biblioteca.', fa: 'امروز اولین مصاحبهٔ کاری‌ام است! خلص سوانحم را در کتابخانه چاپ کردم.' },
        { en: 'Then a big gust of wind tore it and blew the pieces away!', es: '¡Luego una ráfaga de viento lo rompió y se llevó los pedazos!', fa: 'بعد یک باد تند آن را پاره کرد و تکه‌ها را برد!' },
        { en: 'Luis cleans King Street by the river. Maybe he saw where they went.', es: 'Luis limpia King Street junto al río. Tal vez vio adónde se fueron.', fa: 'لوئیس سرک کینگ را کنار دریا پاک می‌کند. شاید دیده تکه‌ها کجا رفتند.' }
      ],
      wait: { en: 'Luis is on the waterfront, at the east end of King Street.', es: 'Luis está en la orilla del río, al final este de King Street.', fa: 'لوئیس کنار دریا، در آخر شرقی سرک کینگ است.' },
      thanks: { en: 'My résumé! Skills, school, work and volunteering, all on one page. Thank you!', es: '¡Mi currículum! Habilidades, escuela, trabajo y voluntariado, todo en una página. ¡Gracias!', fa: 'خلص سوانحم! مهارت، مکتب، کار و کار داوطلبانه، همه در یک صفحه. تشکر!' }
    },
    contact: {
      x: 26, y: 16,
      name: { en: 'Luis', es: 'Luis', fa: 'لوئیس' },
      role: { en: 'City street cleaner', es: 'Barrendero de la ciudad', fa: 'پاک‌کار سرک‌های شهر' },
      look: { skin: 3, hair: '#3a3a3a', shirt: '#2a8a4a', pants: '#2a3a2a', hat: '#e0803a', style: 'short' },
      lines: [
        { en: 'Paper flew everywhere! Four pieces of a résumé, spinning in a gust.', es: '¡Volaron papeles por todos lados! Cuatro pedazos de un currículum, girando en el viento.', fa: 'کاغذ به همه طرف پرید! چهار تکهٔ یک خلص سوانح، در باد می‌چرخید.' },
        { en: 'Each piece landed at a workplace that fits what it says.', es: 'Cada pedazo cayó en un lugar de trabajo que va con lo que dice.', fa: 'هر تکه در جای کاری افتاد که با نوشتهٔ آن جور است.' },
        { en: 'Read each piece, then walk to the workplace that fits it!', es: '¡Lee cada pedazo y luego camina al lugar de trabajo que le corresponde!', fa: 'هر تکه را بخوان، بعد به جای کاری برو که با آن جور است!' }
      ]
    },
    action: {
      type: 'chase',
      at: [28, 14],
      hops: [[12, 16], [25, 9]],
      name: { en: 'The Paper Gust', es: 'La Ráfaga de Papel', fa: 'باد کاغذی' },
      taunt: { en: 'Whoosh! The Paper Gust spins: "Catch me if you can match the pieces!"', es: '¡Fiuuu! La Ráfaga de Papel gira: "¡Atrápame si sabes juntar los pedazos!"', fa: 'ووش! باد کاغذی می‌چرخد: «اگر تکه‌ها را جور کرده می‌توانی، مرا بگیر!»' },
      clues: [
        { t: { en: 'Piece 1 says: "Work: I wash dishes at a café on weekends." Which workplace fits it?', es: 'El pedazo 1 dice: "Trabajo: lavo platos en un café los fines de semana." ¿Qué lugar le corresponde?', fa: 'تکهٔ ۱ می‌گوید: «کار: آخر هفته‌ها در یک کافه ظرف می‌شویم.» کدام جای کار با آن جور است؟' },
          zones: [{ x: 19, y: 15, w: 4, h: 2 }],
          noBy: [
            { x: 2, y: 16, w: 3, h: 2, t: { en: 'This is the building site. This piece is about food work.', es: 'Esta es la obra. Este pedazo trata de trabajo con comida.', fa: 'این جای ساختمان‌سازی است. این تکه دربارهٔ کار با خوراک است.' } },
            { x: 23, y: 5, w: 5, h: 2, t: { en: 'This is the hospital. This piece is about washing dishes, not health.', es: 'Este es el hospital. Este pedazo trata de lavar platos, no de salud.', fa: 'این شفاخانه است. این تکه دربارهٔ ظرف شستن است، نه صحت.' } },
            { x: 16, y: 5, w: 5, h: 2, t: { en: 'This is the office tower. This piece is about kitchen work.', es: 'Esta es la torre de oficinas. Este pedazo trata de trabajo en una cocina.', fa: 'این برج دفترها است. این تکه دربارهٔ کار آشپزخانه است.' } }
          ],
          found: { en: 'It fits the restaurant! Food jobs are one career cluster.', es: '¡Va con el restaurante! Los trabajos de comida son un grupo de carreras.', fa: 'با رستورانت جور است! کارهای خوراک یک گروه مسلک هستند.' } },
        { t: { en: 'Piece 2 says: "Volunteer: I helped build a ramp for a neighbor." Which workplace fits it?', es: 'El pedazo 2 dice: "Voluntariado: ayudé a construir una rampa para un vecino." ¿Qué lugar le corresponde?', fa: 'تکهٔ ۲ می‌گوید: «کار داوطلبانه: در ساختن یک راه سراشیب برای همسایه کمک کردم.» کدام جای کار با آن جور است؟' },
          zones: [{ x: 2, y: 16, w: 3, h: 2 }],
          noBy: [
            { x: 19, y: 15, w: 4, h: 2, t: { en: 'This is the restaurant patio. This piece is about building things.', es: 'Este es el patio del restaurante. Este pedazo trata de construir cosas.', fa: 'این حویلی رستورانت است. این تکه دربارهٔ ساختن چیزهاست.' } },
            { x: 23, y: 5, w: 5, h: 2, t: { en: 'This is the hospital. This piece is about building, not health.', es: 'Este es el hospital. Este pedazo trata de construir, no de salud.', fa: 'این شفاخانه است. این تکه دربارهٔ ساختن است، نه صحت.' } },
            { x: 16, y: 5, w: 5, h: 2, t: { en: 'This is the office tower. This piece is about building with your hands.', es: 'Esta es la torre de oficinas. Este pedazo trata de construir con las manos.', fa: 'این برج دفترها است. این تکه دربارهٔ ساختن با دست است.' } }
          ],
          found: { en: 'It fits the building site! Volunteer work counts on a résumé too.', es: '¡Va con la obra! El voluntariado también cuenta en un currículum.', fa: 'با جای ساختمان‌سازی جور است! کار داوطلبانه هم در خلص سوانح حساب است.' } },
        { t: { en: 'Piece 3 says: "School: health class, and a first aid card." Which workplace fits it?', es: 'El pedazo 3 dice: "Escuela: clase de salud y un certificado de primeros auxilios." ¿Qué lugar le corresponde?', fa: 'تکهٔ ۳ می‌گوید: «مکتب: صنف صحت، و یک کارت کمک‌های اولیه.» کدام جای کار با آن جور است؟' },
          zones: [{ x: 23, y: 5, w: 5, h: 2 }],
          noBy: [
            { x: 19, y: 15, w: 4, h: 2, t: { en: 'This is the restaurant patio. This piece is about health and first aid.', es: 'Este es el patio del restaurante. Este pedazo trata de salud y primeros auxilios.', fa: 'این حویلی رستورانت است. این تکه دربارهٔ صحت و کمک‌های اولیه است.' } },
            { x: 2, y: 16, w: 3, h: 2, t: { en: 'This is the building site. This piece is about caring for people.', es: 'Esta es la obra. Este pedazo trata de cuidar a las personas.', fa: 'این جای ساختمان‌سازی است. این تکه دربارهٔ مراقبت از مردم است.' } },
            { x: 16, y: 5, w: 5, h: 2, t: { en: 'This is the office tower. This piece is about health, so look next door.', es: 'Esta es la torre de oficinas. Este pedazo trata de salud; busca al lado.', fa: 'این برج دفترها است. این تکه دربارهٔ صحت است، پس پهلویش را ببین.' } }
          ],
          found: { en: 'It fits the hospital! Your school classes go on your résumé.', es: '¡Va con el hospital! Tus clases de la escuela van en tu currículum.', fa: 'با شفاخانه جور است! صنف‌های مکتبت در خلص سوانح نوشته می‌شوند.' } },
        { t: { en: 'Piece 4 says: "Skills: I type fast and I am good with numbers." Which workplace fits it?', es: 'El pedazo 4 dice: "Habilidades: escribo rápido en la computadora y soy bueno con los números." ¿Qué lugar le corresponde?', fa: 'تکهٔ ۴ می‌گوید: «مهارت‌ها: تیز تایپ می‌کنم و در حساب خوب هستم.» کدام جای کار با آن جور است؟' },
          zones: [{ x: 16, y: 5, w: 5, h: 2 }],
          noBy: [
            { x: 19, y: 15, w: 4, h: 2, t: { en: 'This is the restaurant patio. This piece is about typing and numbers.', es: 'Este es el patio del restaurante. Este pedazo trata de escribir en computadora y de números.', fa: 'این حویلی رستورانت است. این تکه دربارهٔ تایپ و حساب است.' } },
            { x: 2, y: 16, w: 3, h: 2, t: { en: 'This is the building site. This piece is about desk work.', es: 'Esta es la obra. Este pedazo trata de trabajo de escritorio.', fa: 'این جای ساختمان‌سازی است. این تکه دربارهٔ کار پشت میز است.' } },
            { x: 23, y: 5, w: 5, h: 2, t: { en: 'This is the hospital. This piece is about typing and numbers, so look next door.', es: 'Este es el hospital. Este pedazo trata de escribir y de números; busca al lado.', fa: 'این شفاخانه است. این تکه دربارهٔ تایپ و حساب است، پس پهلویش را ببین.' } }
          ],
          found: { en: 'It fits the office! Skills tell a boss what you do well.', es: '¡Va con la oficina! Las habilidades le dicen a un jefe lo que haces bien.', fa: 'با دفتر جور است! مهارت‌ها به رئیس می‌گویند تو در چه خوب هستی.' } }
      ],
      win: { en: 'Caught! The Paper Gust drops all four pieces. Nadia\'s résumé is whole again!', es: '¡Atrapada! La Ráfaga de Papel suelta los cuatro pedazos. ¡El currículum de Nadia está completo otra vez!', fa: 'گرفتمش! باد کاغذی هر چهار تکه را می‌اندازد. خلص سوانح نادیه دوباره کامل است!' },
      item: { icon: '📄', name: { en: 'Nadia\'s résumé', es: 'El currículum de Nadia', fa: 'خلص سوانح نادیه' } }
    }
  },

  scraps: [[1, 1], [1, 14], [28, 20]],
  smudges: [[12, 3], [13, 19]],

  challenge: {
    at: [13, 8],
    type: 'route', // in the world; the card version (order) is the fallback
    // the career center (north-west) -> the copy shop (south-west) -> the hiring sign on King Street (south-east)
    // -> the interview at the restaurant -> the offer -> the first-day forms
    spots: [[3, 5], [12, 14], [24, 15], [21, 17], [17, 18], [23, 19]],
    stat: 'hei',
    title: { en: 'Steps to a first job', es: 'Pasos hacia un primer trabajo', fa: 'قدم‌ها به طرف اولین کار' },
    intro: { en: 'The Grump mixed up the job-search steps! Walk to each stop on the map, in order.',
      es: '¡El Gruñón revolvió los pasos para buscar trabajo! Camina a cada parada del mapa, en orden.',
      fa: 'غرغرو قدم‌های کاریابی را درهم کرد! به ترتیب به هر ایستگاه روی نقشه برو.' },
    items: [
      { icon: '🔎', t: { en: 'Explore careers: your interests, skills and values', es: 'Explora carreras: tus intereses, habilidades y valores', fa: 'مسلک‌ها را ببین: علاقه‌ها، مهارت‌ها و ارزش‌هایت' } },
      { icon: '📄', t: { en: 'Write a one-page résumé', es: 'Escribe un currículum de una página', fa: 'یک خلص سوانح یک صفحه‌ای بنویس' } },
      { icon: '📝', t: { en: 'Apply for the job', es: 'Solicita el trabajo', fa: 'برای کار درخواست بده' } },
      { icon: '🤝', t: { en: 'Go to the interview, on time', es: 'Ve a la entrevista, a tiempo', fa: 'به وقتش به مصاحبه برو' } },
      { icon: '✉️', t: { en: 'Accept the job offer', es: 'Acepta la oferta de trabajo', fa: 'پیشنهاد کار را قبول کن' } },
      { icon: '🗂️', t: { en: 'Fill out first-day forms, like the W-4', es: 'Llena los formularios del primer día, como el W-4', fa: 'فورمه‌های روز اول را پر کن، مثل W-4' } }
    ],
    why: { en: 'Order: explore careers, write a résumé, apply, interview, accept the offer, then first-day forms.',
      es: 'Orden: explora carreras, escribe un currículum, solicita, ve a la entrevista, acepta la oferta y llena los formularios.',
      fa: 'ترتیب: مسلک‌ها را ببین، خلص سوانح بنویس، درخواست بده، مصاحبه کن، پیشنهاد را قبول کن، بعد فورمه‌ها.' },
    success: { en: 'Hired! The last page glows. Beat the Grump, and the Great Ledger is whole again.',
      es: '¡Contratado! La última página brilla. Vence al Gruñón y el Gran Libro de Cuentas estará completo otra vez.',
      fa: 'استخدام شدی! صفحهٔ آخر می‌درخشد. غرغرو را شکست بده، و دفتر حساب بزرگ دوباره کامل می‌شود.' }
  },

  boss: {
    at: [26, 20],
    stat: 'loc',
    need: 3,
    name: { en: 'The Great Grump', es: 'El Gran Gruñón', fa: 'غرغروی بزرگ' },
    appear: { en: 'The Great Grump rises over the waterfront! It is the very last one. Go!', es: '¡El Gran Gruñón aparece sobre la orilla del río! Es el último de todos. ¡Ve!', fa: 'غرغروی بزرگ بالای کنار دریا پیدا شد! این آخرین غرغرو است. برو!' },
    taunt: { en: 'Grr! Résumés? Interviews? Too much work! I keep the last page. The Ledger stays torn!', es: '¡Grr! ¿Currículums? ¿Entrevistas? ¡Demasiado trabajo! Me quedo la última página. ¡El Libro sigue roto!', fa: 'غرر! خلص سوانح؟ مصاحبه؟ کار زیاد است! صفحهٔ آخر پیش من می‌ماند. دفتر حساب پاره می‌ماند!' },
    win: { en: 'The Great Grump bursts into light. The 24th page flies home. The Great Ledger is whole again!',
      es: 'El Gran Gruñón estalla en luz. La página 24 vuelve a casa. ¡El Gran Libro de Cuentas está completo otra vez!',
      fa: 'غرغروی بزرگ به نور تبدیل می‌شود. صفحهٔ ۲۴ به خانه برمی‌گردد. دفتر حساب بزرگ دوباره کامل است!' },
    questions: [
      { q: { en: 'What goes on a résumé?', es: '¿Qué va en un currículum?', fa: 'در خلص سوانح چه نوشته می‌شود؟' },
        choices: [
          { en: 'Your skills, school, work and volunteering', es: 'Tus habilidades, escuela, trabajo y voluntariado', fa: 'مهارت‌ها، مکتب، کار و کار داوطلبانه‌ات' },
          { en: 'Your phone bill and your bank balance', es: 'Tu cuenta del teléfono y tu saldo del banco', fa: 'بل تیلفون و پول حساب بانکی‌ات' },
          { en: 'Your favorite songs and your best games', es: 'Tus canciones favoritas y tus mejores juegos', fa: 'آهنگ‌های دلخواه و بهترین بازی‌هایت' },
          { en: 'A list of every store and café that you like', es: 'Una lista de todas las tiendas y cafés que te gustan', fa: 'فهرست همهٔ دکان‌ها و کافه‌هایی که دوست داری' }],
        answer: 0,
        why: { en: 'A résumé is one page about you: skills, school, work and volunteer experience.', es: 'Un currículum es una página sobre ti: habilidades, escuela, trabajo y voluntariado.', fa: 'خلص سوانح یک صفحه دربارهٔ توست: مهارت، مکتب، کار و کار داوطلبانه.' } },
      { q: { en: 'How long should a first résumé usually be?', es: '¿Qué tan largo debe ser un primer currículum?', fa: 'اولین خلص سوانح معمولاً چقدر دراز باشد؟' },
        choices: [
          { en: 'One page', es: 'Una página', fa: 'یک صفحه' },
          { en: 'Ten pages', es: 'Diez páginas', fa: 'ده صفحه' },
          { en: 'One line', es: 'Una línea', fa: 'یک خط' },
          { en: 'Five pages', es: 'Cinco páginas', fa: 'پنج صفحه' }],
        answer: 0,
        why: { en: 'Keep it short and clear. One page is enough for a first job.', es: 'Que sea corto y claro. Una página es suficiente para un primer trabajo.', fa: 'آن را کوتاه و واضح نگه دار. برای اولین کار یک صفحه بس است.' } },
      { q: { en: 'Which is a good thing to do at a job interview?', es: '¿Qué es bueno hacer en una entrevista de trabajo?', fa: 'در مصاحبهٔ کاری چه کار خوب است؟' },
        choices: [
          { en: 'Come on time and say thank you', es: 'Llegar a tiempo y dar las gracias', fa: 'به وقتش بیا و تشکر کن' },
          { en: 'Come late and look at your phone', es: 'Llegar tarde y mirar tu teléfono', fa: 'ناوقت بیا و به تیلفونت نگاه کن' },
          { en: 'Wear anything and ask nothing', es: 'Ponerte cualquier cosa y no preguntar nada', fa: 'هر چیز بپوش و هیچ سوال نکن' },
          { en: 'Talk only about your days off', es: 'Hablar solo de tus días libres', fa: 'فقط دربارهٔ روزهای رخصتی‌ات گپ بزن' }],
        answer: 0,
        why: { en: 'Be on time, dress neatly, prepare, ask a question, and say thank you at the end.', es: 'Llega a tiempo, vístete con cuidado, prepárate, haz una pregunta y da las gracias al final.', fa: 'به وقتش بیا، مرتب بپوش، آماده باش، یک سوال بپرس، و در آخر تشکر کن.' } },
      { q: { en: 'An offer gives health insurance and a retirement plan. What are these called?', es: 'Una oferta da seguro médico y un plan de jubilación. ¿Cómo se llaman?', fa: 'یک پیشنهاد کار بیمهٔ صحی و پلان تقاعد می‌دهد. اینها را چه می‌گویند؟' },
        choices: [
          { en: 'Benefits', es: 'Beneficios', fa: 'امتیازها' },
          { en: 'References', es: 'Referencias', fa: 'معرف‌ها' },
          { en: 'Résumés', es: 'Currículums', fa: 'خلص سوانح‌ها' },
          { en: 'Interviews', es: 'Entrevistas', fa: 'مصاحبه‌ها' }],
        answer: 0,
        why: { en: 'Benefits are extras beyond pay, like health insurance, paid time off and a retirement plan.', es: 'Los beneficios son extras además del sueldo, como seguro médico, días libres pagados y jubilación.', fa: 'امتیازها چیزهای اضافه به جز معاش هستند، مثل بیمهٔ صحی، رخصتی با معاش و پلان تقاعد.' } },
      { q: { en: 'On your first day, which form tells your boss how much tax to take?', es: 'En tu primer día, ¿qué formulario le dice a tu jefe cuánto impuesto quitar?', fa: 'در روز اول، کدام فورمه به رئیست می‌گوید چقدر مالیات کم کند؟' },
        choices: [
          { en: 'The W-4', es: 'El W-4', fa: 'فورمهٔ W-4' },
          { en: 'The résumé', es: 'El currículum', fa: 'خلص سوانح' },
          { en: 'The job ad', es: 'El anuncio', fa: 'اعلان کار' },
          { en: 'The cover letter', es: 'La carta de presentación', fa: 'نامهٔ معرفی' }],
        answer: 0,
        why: { en: 'You fill out a W-4 at a new job. It sets how much tax is taken from pay.', es: 'Llenas un W-4 en un trabajo nuevo. Decide cuánto impuesto te quitan del sueldo.', fa: 'در کار نو فورمهٔ W-4 را پر می‌کنی. مقدار مالیاتی را که از معاش کم می‌شود تعیین می‌کند.' } },
      { q: { en: 'What is an apprenticeship?', es: '¿Qué es un aprendizaje (programa de aprendiz)?', fa: 'شاگردی چیست؟' },
        choices: [
          { en: 'You earn pay while you learn a trade', es: 'Ganas un sueldo mientras aprendes un oficio', fa: 'در وقت یاد گرفتن مسلک معاش می‌گیری' },
          { en: 'You pay a store to try its products', es: 'Le pagas a una tienda para probar sus productos', fa: 'به دکان پول می‌دهی تا جنسش را امتحان کنی' },
          { en: 'You work for free for ten long years', es: 'Trabajas gratis por diez largos años', fa: 'ده سال دراز مفت کار می‌کنی' },
          { en: 'You take one test and then get rich', es: 'Haces un examen y luego te haces rico', fa: 'یک امتحان می‌دهی و بعد پولدار می‌شوی' }],
        answer: 0,
        why: { en: 'An apprentice learns on the job from skilled workers and earns pay. It is a respected path.', es: 'Un aprendiz aprende en el trabajo con expertos y gana sueldo. Es un camino respetado.', fa: 'شاگرد سر کار از کارگران ماهر یاد می‌گیرد و معاش می‌گیرد. این یک راه با عزت است.' } },
      { q: { en: 'When you explore careers, what should you think about first?', es: 'Cuando exploras carreras, ¿en qué debes pensar primero?', fa: 'وقتی مسلک‌ها را می‌بینی، اول به چه فکر کنی؟' },
        choices: [
          { en: 'Your interests, skills and values', es: 'Tus intereses, habilidades y valores', fa: 'علاقه‌ها، مهارت‌ها و ارزش‌هایت' },
          { en: 'Only which job has a fun uniform', es: 'Solo qué trabajo tiene un uniforme divertido', fa: 'فقط کدام کار یونیفورم جالب دارد' },
          { en: 'Only the job your best friend picks', es: 'Solo el trabajo que elige tu mejor amigo', fa: 'فقط کاری که بهترین دوستت می‌گیرد' },
          { en: 'Only jobs you saw in a movie', es: 'Solo trabajos que viste en una película', fa: 'فقط کارهایی که در فلم دیدی' }],
        answer: 0,
        why: { en: 'Start with you: what you like, what you do well, and what matters to you.', es: 'Empieza por ti: lo que te gusta, lo que haces bien y lo que te importa.', fa: 'از خودت شروع کن: چه دوست داری، در چه خوب هستی، و چه برایت مهم است.' } },
      { q: { en: 'What is the minimum wage?', es: '¿Qué es el salario mínimo?', fa: 'حداقل معاش چیست؟' },
        choices: [
          { en: 'The lowest hourly pay the law allows', es: 'El sueldo por hora más bajo que permite la ley', fa: 'کمترین معاش ساعتی که قانون اجازه می‌دهد' },
          { en: 'The pay you get after ten years', es: 'El sueldo que recibes después de diez años', fa: 'معاشی که بعد از ده سال می‌گیری' },
          { en: 'The most that a boss can ever pay you', es: 'Lo máximo que un jefe te puede pagar', fa: 'بیشترین پولی که رئیس به تو داده می‌تواند' },
          { en: 'The pay for your first day only', es: 'El sueldo solo de tu primer día', fa: 'معاش فقط برای روز اول تو' }],
        answer: 0,
        why: { en: 'It is the lowest hourly pay the law allows. Virginia has its own state minimum wage.', es: 'Es el sueldo por hora más bajo que permite la ley. Virginia tiene su propio salario mínimo estatal.', fa: 'کمترین معاش ساعتی است که قانون اجازه می‌دهد. ویرجینیا حداقل معاش ایالتی خود را دارد.' } }
    ]
  },

  learned: [
    { en: 'Explore [[career|careers]] by your interests, skills and values. Many paths are respected.', es: 'Explora [[career|carreras]] según tus intereses, habilidades y valores. Muchos caminos son respetados.', fa: '[[career|مسلک‌ها]] را با علاقه‌ها، مهارت‌ها و ارزش‌هایت ببین. راه‌های زیاد با عزت هستند.' },
    { en: 'A [[resume|résumé]], an application and an [[interview|interview]] lead to a [[job offer|job offer]]. Then fill out a [[w-4|W-4]].', es: 'Un [[resume|currículum]], una solicitud y una [[interview|entrevista]] llevan a una [[job offer|oferta de trabajo]]. Luego llenas un [[w-4|W-4]].', fa: '[[resume|خلص سوانح]]، درخواست و [[interview|مصاحبه]] به [[job offer|پیشنهاد کار]] می‌رسند. بعد یک [[w-4|W-4]] پر می‌کنی.' },
    { en: 'With this last page, the Great Ledger is whole again! Now you know how money works.', es: '¡Con esta última página, el Gran Libro de Cuentas está completo otra vez! Ahora sabes cómo funciona el dinero.', fa: 'با این صفحهٔ آخر، دفتر حساب بزرگ دوباره کامل است! حالا می‌دانی پول چطور کار می‌کند.' }
  ],
  reflect: {
    q: { en: 'What job could you try first? What is one money step you will take with your pay?', es: '¿Qué trabajo podrías probar primero? ¿Qué paso con el dinero darás con tu sueldo?', fa: 'اول کدام کار را امتحان کرده می‌توانی؟ با معاشت کدام یک قدم پولی را برمی‌داری؟' },
    starter: { en: 'A job I could try first is', es: 'Un trabajo que podría probar primero es', fa: 'کاری که اول امتحان کرده می‌توانم' }
  }
};
