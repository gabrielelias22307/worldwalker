/* CIVICWALKER · Episode 8.1 · Two Ways to Lead (Comparative Governments)
   London, today: Westminster. North is up. North-west: St James's Park with its lake, and Buckingham Palace (the
   monarch's London home) at its west end. Down the middle: Whitehall, the street of government offices, with the
   gate of Downing Street on its west side (No. 10 is seen from the street; visitors cannot walk in). East: the
   Victoria Embankment gardens, the riverboat pier and the River Thames, crossed by Westminster Bridge. South:
   Parliament Square (the charter stone), Westminster Abbey, the Houses of Parliament with the clock tower (Big Ben),
   a café and a flat with a red phone box. A student from Virginia stands on the far bank.
   The charter stone asks the student to set 3 levers so they describe the UK: lawmakers pick the leader, a
   no-confidence vote can remove the government, most power sits in the central government (unitary). */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'GOVT',
  title: { en: 'Two Ways to Lead', es: 'Dos formas de gobernar', fa: 'دو راه رهبری' },
  place: { en: 'London, today', es: 'Londres, hoy', fa: 'لندن، امروز' },
  weather: { sky: 'drizzle', time: 'day' },
  intro: [
    { en: 'The Grump tore the page about how countries choose leaders. Visitors are mixed up!',
      es: 'El Gruñón rompió la página sobre cómo los países eligen líderes. ¡Los visitantes están confundidos!',
      fa: 'غرغرو صفحهٔ «کشورها چطور رهبر انتخاب می‌کنند» را پاره کرد. مسافران گیج شده‌اند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-0.125, 51.50],
    start: [
      { en: 'London is the capital of the United Kingdom, or UK.',
        es: 'Londres es la capital del Reino Unido.',
        fa: 'لندن پایتخت بریتانیا (پادشاهی متحده) است.' },
      { en: 'Its Parliament meets in Westminster, beside the River Thames.',
        es: 'Su Parlamento se reúne en Westminster, junto al río Támesis.',
        fa: 'پارلمان آن در وست‌مینستر، کنار دریای تیمز، جلسه می‌کند.' },
      { en: 'The UK picks its leader in a different way than the US.',
        es: 'El Reino Unido elige a su líder de otra forma que EE. UU.',
        fa: 'بریتانیا رهبر خود را به راه دیگری نسبت به امریکا انتخاب می‌کند.' }
    ],
    page: { en: 'The UK has no single written constitution. Its rules come from laws and customs.',
      es: 'El Reino Unido no tiene una sola constitución escrita. Sus reglas vienen de leyes y costumbres.',
      fa: 'بریتانیا یک قانون اساسی نوشته‌شدهٔ واحد ندارد. قاعده‌هایش از قانون‌ها و رسم‌ها می‌آید.' },
    guess: {
      q: { en: 'Who do you think picks the UK\'s Prime Minister?', es: '¿Quién crees que elige al primer ministro del Reino Unido?', fa: 'فکر می‌کنی کی صدراعظم بریتانیا را انتخاب می‌کند؟' },
      choices: [
        { t: { en: '🏛️ The lawmakers', es: '🏛️ Los legisladores', fa: '🏛️ قانون‌گذاران' }, ok: true },
        { t: { en: '🗳️ The voters, directly', es: '🗳️ Los votantes, directamente', fa: '🗳️ رأی‌دهندگان، مستقیم' } }
      ],
      why: { en: 'Voters elect lawmakers. The leader with most lawmakers\' support becomes Prime Minister.', es: 'Los votantes eligen legisladores. El líder con el apoyo de la mayoría de ellos es primer ministro.', fa: 'رأی‌دهندگان قانون‌گذاران را انتخاب می‌کنند. رهبری که حمایت بیشتر آن‌ها را دارد صدراعظم می‌شود.' }
    },
    next: {
      q: { en: 'Next: the United Nations in New York. Can countries solve big problems together?', es: 'Ahora: las Naciones Unidas en Nueva York. ¿Pueden los países resolver grandes problemas juntos?', fa: 'بعدی: سازمان ملل متحد در نیویورک. آیا کشورها می‌توانند مشکلات بزرگ را با هم حل کنند؟' },
      choices: [
        { t: { en: 'Yes, by talking and voting', es: 'Sí, hablando y votando', fa: 'بله، با گپ زدن و رأی دادن' }, ok: true },
        { t: { en: 'No, each must act alone', es: 'No, cada uno debe actuar solo', fa: 'نه، هر کدام باید تنها کار کند' } }
      ],
      why: { en: 'Almost every country belongs to the UN. They meet there to talk, vote and work together.', es: 'Casi todos los países son parte de la ONU. Allí se reúnen para hablar, votar y trabajar juntos.', fa: 'تقریباً هر کشور عضو سازمان ملل است. آنجا جمع می‌شوند تا گپ بزنند، رأی بدهند و با هم کار کنند.' }
    }
  },
  /* houses: the café (blue roof) and a flat (red roof), south-west, by the red phone box */
  houses: [
    { at: [3, 13], name: { en: 'Tom the baker', es: 'Tom, el panadero', fa: 'تام نانوا' },
      look: { skin: 1, hair: '#c8b8a0', shirt: '#f0e8d8', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'Our monarch is [[head of state|head of state]]. It is mostly a job of ceremony.', es: 'Nuestro monarca es [[head of state|jefe de Estado]]. Es sobre todo un puesto de ceremonias.', fa: 'پادشاه ما [[head of state|رئیس کشور]] است. این بیشتر یک کار تشریفاتی است.' },
        { en: 'The Prime Minister is [[head of government|head of government]] and runs the government.', es: 'El primer ministro es [[head of government|jefe de gobierno]] y dirige el gobierno.', fa: 'صدراعظم [[head of government|رئیس حکومت]] است و حکومت را اداره می‌کند.' },
        { en: 'A monarch who must follow the laws: a [[constitutional monarchy|constitutional monarchy]].', es: 'Un monarca que debe seguir las leyes: una [[constitutional monarchy|monarquía constitucional]].', fa: 'پادشاهی که باید از قانون پیروی کند: [[constitutional monarchy|پادشاهی مشروطه]].' }
      ] },
    { at: [3, 17], name: { en: 'Mr. Bello', es: 'Señor Bello', fa: 'آقای بلو' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#3a5a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'The UK has no single written constitution. Our rules come from laws and customs.', es: 'El Reino Unido no tiene una sola constitución escrita. Nuestras reglas vienen de leyes y costumbres.', fa: 'بریتانیا یک قانون اساسی نوشته‌شدهٔ واحد ندارد. قاعده‌های ما از قانون‌ها و رسم‌ها می‌آید.' },
        { en: 'By law, an election must be held at least every 5 years.', es: 'Por ley, debe haber elecciones por lo menos cada 5 años.', fa: 'طبق قانون، انتخابات باید دست کم هر ۵ سال برگزار شود.' },
        { en: 'A [[confederal|confederal]] system has strong states and a weak center. The early US tried it.', es: 'Un sistema [[confederal|confederal]] tiene estados fuertes y un centro débil. Los primeros EE. UU. lo probaron.', fa: 'نظام [[confederal|کنفدرال]] ایالت‌های قوی و یک مرکز ضعیف دارد. امریکای اول آن را امتحان کرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North is up.
     North-west: St James's Park (grass, trees, the lake ~), Buckingham Palace (J) at the west end, its gates at x 4-5,
     Horse Guards Road (:) along the east side of the park.
     The middle: the government buildings (J) and Whitehall (l, x 15-17). The Downing Street gate (F) is at (14, 5),
     with the sign (x) beside it. East of Whitehall: more offices, the embankment gardens, the riverside path (:),
     the riverboat pier (k) and the River Thames (~), crossed by Westminster Bridge (b) on row 10. The far bank (x 29-30).
     Row 10: Bridge Street / Great George Street from the park to the bridge.
     South: the café (Q) and a flat (R) with the red phone box sign, Parliament Square (the green, x 9-15),
     Westminster Abbey (D), Parliament Street (l, x 16-18), the Houses of Parliament (J) with the clock tower (U),
     and Victoria Tower Gardens on row 20. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTT~~~~TTT',
    'T......T..T.:JJlllJJJ.T.:~~~~..T',
    'TJJJ........:JJlllJJJ...:~~~~..T',
    'TJJJ..~~~~..:JJlllJJJ.T.:~~~~..T',
    'TJJJ..~~~~~.:JJxllJJJ...:~~~~..T',
    'TJJJ..~~~~..:JFlllJJJ...:~~~~..T',
    'TJJJ........:JJlllJJJ...:kk~~..T',
    'TJJJ..T....T:JJlllJJJ.T.:~~~~..T',
    'T...........:JJlllJJJ...:~~~~..T',
    'T.T...T...T.:JJlllJJJ.x.:~~~~..T',
    'Tllllllllllllllllllllllllbbbb..T',
    'T.......l.......lllllllUU~~~~..T',
    'T.QQQ...l..,.,..lllJJJJJJ~~~~..T',
    'T.hdh...l.......lllJJJJJJ~~~~..T',
    'T.......l.,...,.lllJJJJJJ~~~~..T',
    'T..T..x.lllllllllllJJJJJJ~~~~..T',
    'T.RRR...lDDDDDD.lllJJJJJJ~~~~..T',
    'T.hdh...lDDDDDD.lllJJJJJJ~~~~..T',
    'T.......lDDDDDD.lllJJJJJJ~~~~..T',
    'TT..T...lDDDDDD.lllJJJJJJ~~~~..T',
    'T.......l.......lll......~~~~..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTT~~~~TTT'
  ],
  start: [13, 10],

  finds: [
    { clueAt: [30, 2], at: [30, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps south along the far bank of the river.', es: 'Desde esta nota, camina 6 pasos al sur por la otra orilla del río.', fa: 'از این یادداشت، ۶ قدم به جنوب در آن طرف دریا برو.' },
      text: { en: 'A British pound coin! The UK uses pounds, not dollars.', es: '¡Una moneda de una libra británica! El Reino Unido usa libras, no dólares.', fa: 'یک سکهٔ پوند بریتانیا! بریتانیا پوند به کار می‌برد، نه دالر.' } },
    { clueAt: [7, 20], at: [13, 20], decor: 'flower',
      clue: { en: 'From this note, walk 6 steps east, along the south side of the old Abbey.', es: 'Desde esta nota, camina 6 pasos al este, por el lado sur de la vieja Abadía.', fa: 'از این یادداشت، ۶ قدم به شرق برو، در طرف جنوب کلیسای کهنه.' },
      text: { en: 'A note from a German visitor: Germany is parliamentary too, but federal, led by a chancellor.', es: 'Una nota de una visitante alemana: Alemania también es parlamentaria, pero federal, con un canciller.', fa: 'یادداشتی از یک مسافر آلمانی: آلمان هم پارلمانی است، اما فدرال، با یک صدراعظم.' } }
  ],

  words: {
    'parliamentary system': { en: 'lawmakers choose the leader, and can vote the leader out', es: 'los legisladores eligen al líder y pueden sacarlo con un voto', fa: 'قانون‌گذاران رهبر را انتخاب می‌کنند و با رأی می‌توانند او را بردارند' },
    'presidential system': { en: 'voters elect the President apart from the lawmakers, for a fixed term', es: 'los votantes eligen al presidente aparte de los legisladores, por un período fijo', fa: 'رأی‌دهندگان رئیس جمهور را جدا از قانون‌گذاران، برای یک دورهٔ ثابت، انتخاب می‌کنند' },
    'prime minister': { en: 'the leader of the government in a parliamentary system', es: 'el líder del gobierno en un sistema parlamentario', fa: 'رهبر حکومت در نظام پارلمانی' },
    mp: { en: 'Member of Parliament: a lawmaker elected to the House of Commons', es: 'miembro del Parlamento: un legislador elegido a la Cámara de los Comunes', fa: 'عضو پارلمان: قانون‌گذاری که به مجلس عوام انتخاب می‌شود' },
    'head of state': { en: 'the person who stands for the whole country at big events', es: 'la persona que representa a todo el país en los grandes actos', fa: 'کسی که در مراسم بزرگ نمایندهٔ همهٔ کشور است' },
    'head of government': { en: 'the person who runs the government day to day', es: 'la persona que dirige el gobierno cada día', fa: 'کسی که حکومت را هر روز اداره می‌کند' },
    'constitutional monarchy': { en: 'a king or queen whose power is limited by laws', es: 'un rey o una reina con el poder limitado por las leyes', fa: 'پادشاه یا ملکه‌ای که قدرتش با قانون محدود است' },
    'no confidence': { en: 'a vote by lawmakers that can remove the government', es: 'un voto de los legisladores que puede sacar al gobierno', fa: 'رأی قانون‌گذاران که می‌تواند حکومت را بردارد' },
    impeachment: { en: 'Congress charges an official with wrongdoing; the Senate holds a trial', es: 'el Congreso acusa a un funcionario de faltas graves; el Senado hace un juicio', fa: 'کانگرس یک مأمور را به خطا متهم می‌کند؛ سنا او را محاکمه می‌کند' },
    unitary: { en: 'most power sits in the central government', es: 'la mayor parte del poder está en el gobierno central', fa: 'بیشترین قدرت در دست حکومت مرکزی است' },
    federal: { en: 'power is shared between the nation and its states', es: 'el poder se comparte entre la nación y sus estados', fa: 'قدرت میان کشور و ایالت‌هایش تقسیم شده است' },
    confederal: { en: 'the states hold most power; the central government is weak', es: 'los estados tienen casi todo el poder; el gobierno central es débil', fa: 'ایالت‌ها بیشترین قدرت را دارند؛ حکومت مرکزی ضعیف است' },
    autocracy: { en: 'rule by one person with total power', es: 'gobierno de una sola persona con todo el poder', fa: 'حکومت یک نفر با همهٔ قدرت' },
    democracy: { en: 'rule by the people, who vote', es: 'gobierno del pueblo, que vota', fa: 'حکومت مردم، که رأی می‌دهند' }
  },

  npcs: [
    {
      x: 10, y: 13,
      name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      role: { en: 'Tour guide', es: 'Guía de turistas', fa: 'رهنمای سیاحان' },
      look: { skin: 4, hair: '#1a1008', shirt: '#c0392b', pants: '#2a2a3a', hat: '#2a2a3a', style: 'bun' },
      remember: { ep: '1.1', t: { en: 'Remember Athens? There, citizens voted on each law. Here, voters elect lawmakers.', es: '¿Recuerdas Atenas? Allí los ciudadanos votaban cada ley. Aquí los votantes eligen legisladores.', fa: 'آتن یادت هست؟ آنجا شهروندان به هر قانون رأی می‌دادند. اینجا رأی‌دهندگان قانون‌گذار انتخاب می‌کنند.' } },
      lines: [
        { en: 'Welcome to Westminster! That big building by the river is Parliament.', es: '¡Bienvenido a Westminster! Ese gran edificio junto al río es el Parlamento.', fa: 'به وست‌مینستر خوش آمدی! آن ساختمان بزرگ کنار دریا پارلمان است.' },
        { en: 'UK voters elect 650 [[mp|Members of Parliament]], or MPs, to the House of Commons.', es: 'Los votantes del Reino Unido eligen 650 [[mp|miembros del Parlamento]] a la Cámara de los Comunes.', fa: 'رأی‌دهندگان بریتانیا ۶۵۰ [[mp|عضو پارلمان]] را به مجلس عوام انتخاب می‌کنند.' },
        { en: 'The party leader with the support of most MPs becomes [[prime minister|Prime Minister]].', es: 'El líder del partido con el apoyo de la mayoría es [[prime minister|primer ministro]].', fa: 'رهبر حزبی که حمایت بیشتر اعضا را دارد [[prime minister|صدراعظم]] می‌شود.' },
        { en: 'That is a [[parliamentary system|parliamentary system]]. Voters do not pick the Prime Minister directly.', es: 'Eso es un [[parliamentary system|sistema parlamentario]]. Los votantes no eligen al primer ministro directamente.', fa: 'این [[parliamentary system|نظام پارلمانی]] است. رأی‌دهندگان صدراعظم را مستقیم انتخاب نمی‌کنند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'In the UK, who picks the Prime Minister?', es: 'En el Reino Unido, ¿quién elige al primer ministro?', fa: 'در بریتانیا، کی صدراعظم را انتخاب می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'The majority in Parliament', es: 'La mayoría del Parlamento', fa: 'اکثریت پارلمان' },
            why: { en: 'Yes! The leader with the support of most MPs becomes Prime Minister.', es: '¡Sí! El líder con el apoyo de la mayoría de los diputados es primer ministro.', fa: 'بله! رهبری که حمایت بیشتر اعضای پارلمان را دارد صدراعظم می‌شود.' } },
          { t: { en: 'The voters, on a separate ballot', es: 'Los votantes, en una boleta aparte', fa: 'رأی‌دهندگان، در یک ورقهٔ جدا' },
            why: { en: 'No. That is how the US picks a President. UK voters elect MPs.', es: 'No. Así elige EE. UU. a su presidente. Los votantes del Reino Unido eligen diputados.', fa: 'نه. امریکا این‌طور رئیس جمهور را انتخاب می‌کند. رأی‌دهندگان بریتانیا اعضای پارلمان را انتخاب می‌کنند.' } },
          { t: { en: 'The monarch, by free choice', es: 'El monarca, como él quiera', fa: 'پادشاه، به خواست خودش' },
            why: { en: 'No. The monarch\'s role is mostly ceremony. The monarch asks the leader Parliament supports.', es: 'No. El papel del monarca es sobre todo ceremonial. Llama al líder que apoya el Parlamento.', fa: 'نه. کار پادشاه بیشتر تشریفاتی است. پادشاه رهبری را می‌خواهد که پارلمان از او حمایت می‌کند.' } }
        ]
      }
    },
    {
      x: 29, y: 13,
      name: { en: 'Diego', es: 'Diego', fa: 'دیه‌گو' },
      role: { en: 'Student from Virginia', es: 'Estudiante de Virginia', fa: 'شاگرد از ویرجینیا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f5f9a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Hi! I am a student from Virginia. My class is visiting London.', es: '¡Hola! Soy estudiante de Virginia. Mi clase está de visita en Londres.', fa: 'سلام! من شاگردی از ویرجینیا هستم. صنف ما به لندن آمده است.' },
        { en: 'Back home, we elect the President separately from Congress.', es: 'En mi país, elegimos al presidente aparte del Congreso.', fa: 'در کشور ما، رئیس جمهور را جدا از کانگرس انتخاب می‌کنیم.' },
        { en: 'The President is head of state AND head of government, for a fixed 4-year term.', es: 'El presidente es jefe de Estado Y jefe de gobierno, por 4 años fijos.', fa: 'رئیس جمهور هم رئیس کشور است و هم رئیس حکومت، برای ۴ سال ثابت.' },
        { en: 'That is a [[presidential system|presidential system]]. Congress can remove a President only by [[impeachment|impeachment]] and conviction.', es: 'Eso es un [[presidential system|sistema presidencial]]. El Congreso solo saca al presidente con [[impeachment|juicio político]] y condena.', fa: 'این [[presidential system|نظام ریاستی]] است. کانگرس فقط با [[impeachment|استیضاح]] و محکومیت رئیس جمهور را برمی‌دارد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How can Congress remove a US President before the term ends?', es: '¿Cómo puede el Congreso sacar a un presidente de EE. UU. antes de que termine su período?', fa: 'کانگرس چطور می‌تواند رئیس جمهور امریکا را پیش از ختم دوره‌اش بردارد؟' },
        choices: [
          { ok: true, t: { en: 'Impeachment and conviction', es: 'Juicio político y condena', fa: 'استیضاح و محکومیت' },
            why: { en: 'Right! The House impeaches, then the Senate must convict. No President has been removed this way.', es: '¡Correcto! La Cámara acusa y el Senado debe condenar. Ningún presidente ha sido sacado así.', fa: 'درست! مجلس نمایندگان متهم می‌کند، بعد سنا باید محکوم کند. هیچ رئیس جمهوری این‌طور برداشته نشده است.' } },
          { t: { en: 'A vote of no confidence', es: 'Un voto de no confianza', fa: 'رأی عدم اعتماد' },
            why: { en: 'That is the UK way. Congress cannot remove a President with a no-confidence vote.', es: 'Esa es la forma del Reino Unido. El Congreso no puede sacar al presidente con un voto de no confianza.', fa: 'این راه بریتانیا است. کانگرس با رأی عدم اعتماد رئیس جمهور را برداشته نمی‌تواند.' } },
          { t: { en: 'It can never remove one', es: 'Nunca puede sacarlo', fa: 'هیچ وقت نمی‌تواند' },
            why: { en: 'It can, but only by impeachment and conviction. Otherwise the term lasts 4 years.', es: 'Sí puede, pero solo con juicio político y condena. Si no, el período dura 4 años.', fa: 'می‌تواند، اما فقط با استیضاح و محکومیت. وگرنه دوره ۴ سال دوام می‌کند.' } }
        ]
      }
    },
    {
      x: 17, y: 8,
      name: { en: 'Kwame', es: 'Kwame', fa: 'کوامی' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 5, hair: '#120c08', shirt: '#c0392b', pants: '#2a2a3a', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'All aboard! I drive a red bus down Whitehall every day.', es: '¡Todos a bordo! Manejo un autobús rojo por Whitehall cada día.', fa: 'همه سوار شوید! من هر روز یک بس سرخ را در وایت‌هال می‌رانم.' },
        { en: 'Whitehall is full of offices of the UK\'s central government.', es: 'Whitehall está lleno de oficinas del gobierno central del Reino Unido.', fa: 'وایت‌هال پر از دفترهای حکومت مرکزی بریتانیا است.' },
        { en: 'In the UK, most power sits with the central government. That is [[unitary|unitary]].', es: 'En el Reino Unido, casi todo el poder está en el gobierno central. Eso es [[unitary|unitario]].', fa: 'در بریتانیا، بیشترین قدرت دست حکومت مرکزی است. این [[unitary|متمرکز]] است.' },
        { en: 'In the US, power is shared with the states. That is [[federal|federal]].', es: 'En EE. UU., el poder se comparte con los estados. Eso es [[federal|federal]].', fa: 'در امریکا، قدرت با ایالت‌ها تقسیم شده است. این [[federal|فدرال]] است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which country is federal, sharing power between the nation and its states?', es: '¿Qué país es federal y comparte el poder entre la nación y sus estados?', fa: 'کدام کشور فدرال است و قدرت را میان کشور و ایالت‌هایش تقسیم می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'India', es: 'India', fa: 'هند' },
            why: { en: 'Yes! India shares power between the nation and its states, like the US.', es: '¡Sí! India comparte el poder entre la nación y sus estados, como EE. UU.', fa: 'بله! هند قدرت را میان کشور و ایالت‌هایش تقسیم می‌کند، مثل امریکا.' } },
          { t: { en: 'France', es: 'Francia', fa: 'فرانسه' },
            why: { en: 'No. France is unitary. Most power sits in its central government.', es: 'No. Francia es unitaria. Casi todo el poder está en su gobierno central.', fa: 'نه. فرانسه متمرکز است. بیشترین قدرت در حکومت مرکزی آن است.' } },
          { t: { en: 'Japan', es: 'Japón', fa: 'جاپان' },
            why: { en: 'No. Japan is unitary, like the UK. Most power sits in the central government.', es: 'No. Japón es unitario, como el Reino Unido. Casi todo el poder está en el gobierno central.', fa: 'نه. جاپان مثل بریتانیا متمرکز است. بیشترین قدرت در حکومت مرکزی است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 15, y: 4, text: { en: '10 DOWNING STREET · The Prime Minister\'s home and office. A gate keeps visitors out.', es: '10 DOWNING STREET · La casa y oficina del primer ministro. Una reja no deja pasar a los visitantes.', fa: 'شمارهٔ ۱۰ داونینگ استریت · خانه و دفتر صدراعظم. یک دروازه مسافران را بیرون نگه می‌دارد.' } },
    { x: 22, y: 9, text: { en: 'BIG BEN · Big Ben is the great bell inside this clock tower, called Elizabeth Tower.', es: 'BIG BEN · Big Ben es la gran campana dentro de esta torre del reloj, llamada Torre Isabel.', fa: 'بیگ بن · بیگ بن زنگ بزرگ داخل این برج ساعت است که برج الیزابت نام دارد.' } },
    { x: 6, y: 15, text: { en: 'A RED PHONE BOX · Few people call from them now, but visitors love taking pictures.', es: 'UNA CABINA TELEFÓNICA ROJA · Ya poca gente llama desde ellas, pero a los visitantes les encanta tomar fotos.', fa: 'یک غرفهٔ تیلفون سرخ · حالا کم کسی از آن تیلفون می‌کند، اما مسافران عکس گرفتن را دوست دارند.' } }
  ],

  /* the quest: Rosa the café owner (gold !) by her café, south-west -> Ivy the park keeper in St James's Park
     (north-west) -> the Grump's Gust blew Rosa's chart into 3 pieces: the Downing Street gate on Whitehall,
     the Houses of Parliament, Buckingham Palace. Then catch the gust at the riverboat pier (north-east). */
  quest: {
    stat: 'pla',
    title: { en: 'The Blown-Away Chart', es: 'El cuadro que voló', fa: 'جدول باد برده' },
    giver: {
      x: 6, y: 13,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Café owner', es: 'Dueña del café', fa: 'صاحب کافه' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#2f8f8f', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I made a chart for tourists in my café: Two Ways to Lead.', es: 'Hice un cuadro para los turistas de mi café: Dos formas de gobernar.', fa: 'برای سیاحان کافه‌ام یک جدول ساختم: دو راه رهبری.' },
        { en: 'It compares the US President and the UK Prime Minister.', es: 'Compara al presidente de EE. UU. con el primer ministro del Reino Unido.', fa: 'رئیس جمهور امریکا و صدراعظم بریتانیا را مقایسه می‌کند.' },
        { en: 'The Grump\'s Gust blew it away! Ivy the park keeper saw it.', es: '¡La Ráfaga del Gruñón se lo llevó! Ivy, la guardaparques, lo vio.', fa: 'باد غرغرو آن را برد! آیوی، نگهبان پارک، آن را دید.' }
      ],
      wait: { en: 'Ivy works in St James\'s Park, north-west of here, by the lake.', es: 'Ivy trabaja en el parque St James, al noroeste de aquí, junto al lago.', fa: 'آیوی در پارک سنت جیمز، شمال غرب اینجا، کنار جهیل کار می‌کند.' },
      thanks: { en: 'My whole chart! Now tourists can compare two ways to lead. Thank you!', es: '¡Mi cuadro completo! Ahora los turistas pueden comparar dos formas de gobernar. ¡Gracias!', fa: 'جدول کاملم! حالا سیاحان دو راه رهبری را مقایسه کرده می‌توانند. تشکر!' }
    },
    contact: {
      x: 9, y: 8,
      name: { en: 'Ivy', es: 'Ivy', fa: 'آیوی' },
      role: { en: 'Park keeper', es: 'Guardaparques', fa: 'نگهبان پارک' },
      look: { skin: 0, hair: '#c89a50', shirt: '#4a7a3a', pants: '#5a3a22', hat: '#3a5a2a', style: 'long' },
      lines: [
        { en: 'Whoosh! I saw the Grump\'s Gust tear a paper chart into 3 pieces.', es: '¡Fiuuu! Vi a la Ráfaga del Gruñón romper un cuadro de papel en 3 pedazos.', fa: 'ووش! دیدم باد غرغرو یک جدول کاغذی را ۳ تکه کرد.' },
        { en: 'The pieces blew to places where leaders live and work.', es: 'Los pedazos volaron a lugares donde los líderes viven y trabajan.', fa: 'تکه‌ها به جاهایی رفتند که رهبران زندگی و کار می‌کنند.' },
        { en: 'Follow the clues to find every piece. Then catch the gust!', es: 'Sigue las pistas para encontrar cada pedazo. ¡Luego atrapa la ráfaga!', fa: 'سرنخ‌ها را دنبال کن تا هر تکه را پیدا کنی. بعد باد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [26, 6],
      hops: [[21, 20], [29, 17]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'باد غرغرو' },
      taunt: { en: 'Whoosh! The Grump\'s Gust howls: "Who cares how leaders are chosen?"', es: '¡Fiuuu! La Ráfaga del Gruñón aúlla: "¿A quién le importa cómo se eligen los líderes?"', fa: 'ووش! باد غرغرو فریاد می‌زند: «کی پروا دارد رهبران چطور انتخاب می‌شوند؟»' },
      clues: [
        { t: { en: 'Piece 1 blew to the gate of 10 Downing Street, the Prime Minister\'s home, off Whitehall.', es: 'El pedazo 1 voló a la reja del 10 de Downing Street, la casa del primer ministro, junto a Whitehall.', fa: 'تکهٔ ۱ به دروازهٔ شمارهٔ ۱۰ داونینگ استریت، خانهٔ صدراعظم، کنار وایت‌هال رفت.' },
          zones: [{ x: 15, y: 5, w: 1, h: 2 }],
          noBy: [{ x: 4, y: 2, w: 2, h: 6, t: { en: 'This is Buckingham Palace, the monarch\'s home. The Prime Minister lives on Downing Street.', es: 'Este es el Palacio de Buckingham, la casa del monarca. El primer ministro vive en Downing Street.', fa: 'این قصر باکینگهام، خانهٔ پادشاه است. صدراعظم در داونینگ استریت زندگی می‌کند.' } }],
          found: { en: 'Piece 1, at Downing Street! The Prime Minister lives and works here.', es: '¡El pedazo 1, en Downing Street! El primer ministro vive y trabaja aquí.', fa: 'تکهٔ ۱، در داونینگ استریت! صدراعظم اینجا زندگی و کار می‌کند.' } },
        { t: { en: 'Piece 2 is where the elected MPs meet and vote: the Houses of Parliament, by the river.', es: 'El pedazo 2 está donde los diputados elegidos se reúnen y votan: el Parlamento, junto al río.', fa: 'تکهٔ ۲ جایی است که اعضای انتخاب‌شدهٔ پارلمان جمع می‌شوند و رأی می‌دهند: ساختمان پارلمان، کنار دریا.' },
          zones: [{ x: 18, y: 12, w: 1, h: 8 }, { x: 19, y: 11, w: 4, h: 1 }],
          noBy: [{ x: 9, y: 15, w: 7, h: 1, t: { en: 'This is Westminster Abbey, an old church. Monarchs are crowned here. MPs meet across the street.', es: 'Esta es la Abadía de Westminster, una iglesia antigua. Aquí coronan a los monarcas. Los diputados se reúnen cruzando la calle.', fa: 'این کلیسای وست‌مینستر است، یک کلیسای کهنه. پادشاهان اینجا تاج می‌گیرند. اعضای پارلمان آن طرف سرک جمع می‌شوند.' } }],
          found: { en: 'Piece 2, at Parliament! The 650 MPs meet in the House of Commons.', es: '¡El pedazo 2, en el Parlamento! Los 650 diputados se reúnen en la Cámara de los Comunes.', fa: 'تکهٔ ۲، در پارلمان! ۶۵۰ عضو پارلمان در مجلس عوام جمع می‌شوند.' } },
        { t: { en: 'Piece 3 blew west across St James\'s Park, to the gates of the monarch\'s palace.', es: 'El pedazo 3 voló al oeste por el parque St James, hasta las rejas del palacio del monarca.', fa: 'تکهٔ ۳ به غرب از پارک سنت جیمز گذشت، تا دروازه‌های قصر پادشاه.' },
          zones: [{ x: 4, y: 2, w: 2, h: 6 }],
          noBy: [{ x: 15, y: 5, w: 1, h: 2, t: { en: 'This is Downing Street, the Prime Minister\'s home. The monarch\'s palace is west, past the lake.', es: 'Esta es Downing Street, la casa del primer ministro. El palacio del monarca está al oeste, pasando el lago.', fa: 'این داونینگ استریت، خانهٔ صدراعظم است. قصر پادشاه در غرب، آن طرف جهیل است.' } }],
          found: { en: 'Piece 3, at Buckingham Palace! The monarch is head of state, mostly for ceremony.', es: '¡El pedazo 3, en el Palacio de Buckingham! El monarca es jefe de Estado, sobre todo para ceremonias.', fa: 'تکهٔ ۳، در قصر باکینگهام! پادشاه رئیس کشور است، بیشتر برای تشریفات.' } }
      ],
      win: { en: 'Caught you at the riverboat pier! The gust drops the chart. All 3 pieces fit again!', es: '¡Te atrapé en el muelle de los barcos! La ráfaga suelta el cuadro. ¡Los 3 pedazos encajan otra vez!', fa: 'در بندر کشتی‌های دریایی گرفتمت! باد جدول را می‌اندازد. هر ۳ تکه دوباره جور می‌شوند!' },
      item: { icon: '📋', name: { en: 'Rosa\'s chart: Two Ways to Lead', es: 'El cuadro de Rosa: Dos formas de gobernar', fa: 'جدول روزا: دو راه رهبری' } }
    }
  },

  scraps: [[1, 1], [30, 20], [1, 20]],
  smudges: [[22, 4], [5, 19]],

  challenge: {
    at: [12, 12],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the leader lever by the Houses of Parliament, the vote-out lever on Whitehall near Downing Street,
    // the power lever on Great George Street, by the café
    spots: [[17, 14], [17, 3], [6, 11]],
    stat: 'reg',
    title: { en: 'Describe the UK', es: 'Describe el Reino Unido', fa: 'بریتانیا را شرح بده' },
    intro: { en: 'A visitor asks: how is the UK run? The Grump set the levers to the US! Set all 3 to describe the UK.',
      es: 'Un visitante pregunta: ¿cómo se gobierna el Reino Unido? ¡El Gruñón puso las palancas como EE. UU.! Pon las 3 para describir el Reino Unido.',
      fa: 'یک مسافر می‌پرسد: بریتانیا چطور اداره می‌شود؟ غرغرو دسته‌ها را مثل امریکا گذاشت! هر ۳ را طوری بگذار که بریتانیا را شرح دهد.' },
    switches: [
      { name: { en: 'Who picks the leader?', es: '¿Quién elige al líder?', fa: 'کی رهبر را انتخاب می‌کند؟' }, icon: '🗳️', start: 0,
        states: [{ en: 'The voters, directly', es: 'Los votantes, directamente', fa: 'رأی‌دهندگان، مستقیم' }, { en: 'The lawmakers', es: 'Los legisladores', fa: 'قانون‌گذاران' }] },
      { name: { en: 'Can lawmakers vote the leader out?', es: '¿Pueden los legisladores sacar al líder con un voto?', fa: 'آیا قانون‌گذاران با رأی رهبر را برداشته می‌توانند؟' }, icon: '✋', start: 0,
        states: [{ en: 'No, only by impeachment', es: 'No, solo con juicio político', fa: 'نه، فقط با استیضاح' }, { en: 'Yes, by a no-confidence vote', es: 'Sí, con un voto de no confianza', fa: 'بله، با رأی عدم اعتماد' }] },
      { name: { en: 'Where does most power sit?', es: '¿Dónde está la mayor parte del poder?', fa: 'بیشترین قدرت کجاست؟' }, icon: '🗺️', start: 0,
        states: [{ en: 'Shared with the states (federal)', es: 'Compartido con los estados (federal)', fa: 'تقسیم با ایالت‌ها (فدرال)' }, { en: 'In the central government (unitary)', es: 'En el gobierno central (unitario)', fa: 'در حکومت مرکزی (متمرکز)' }, { en: 'In the states (confederal)', es: 'En los estados (confederal)', fa: 'در ایالت‌ها (کنفدرال)' }] }
    ],
    results: {
      '0,0,0': { ok: false, t: { en: 'This is the US! Voters elect the President, only impeachment removes one, and power is shared. The UK differs.', es: '¡Este es EE. UU.! Los votantes eligen al presidente, solo un juicio político lo saca y el poder se comparte. El Reino Unido es diferente.', fa: 'این امریکا است! رأی‌دهندگان رئیس جمهور را انتخاب می‌کنند، فقط استیضاح او را برمی‌دارد و قدرت تقسیم شده است. بریتانیا فرق دارد.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Power shared (federal)', es: 'Poder compartido (federal)', fa: 'قدرت تقسیم‌شده (فدرال)' } }] },
      '0,0,1': { ok: false, t: { en: 'Voters elect a leader who can only be impeached. That is a presidential system. The UK has a Prime Minister.', es: 'Los votantes eligen a un líder que solo sale por juicio político. Eso es un sistema presidencial. El Reino Unido tiene primer ministro.', fa: 'رأی‌دهندگان رهبری را انتخاب می‌کنند که فقط با استیضاح برکنار می‌شود. این نظام ریاستی است. بریتانیا صدراعظم دارد.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: true, t: { en: 'Strong center (unitary)', es: 'Centro fuerte (unitario)', fa: 'مرکز قوی (متمرکز)' } }] },
      '0,0,2': { ok: false, t: { en: 'A weak center, like the US under the Articles of Confederation. And UK voters do not pick the leader directly.', es: 'Un centro débil, como EE. UU. con los Artículos de la Confederación. Y en el Reino Unido los votantes no eligen al líder directamente.', fa: 'یک مرکز ضعیف، مثل امریکا در زمان مواد کنفدراسیون. و در بریتانیا رأی‌دهندگان رهبر را مستقیم انتخاب نمی‌کنند.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Weak center (confederal)', es: 'Centro débil (confederal)', fa: 'مرکز ضعیف (کنفدرال)' } }] },
      '0,1,0': { ok: false, t: { en: 'In the UK, voters elect MPs, not the leader. The majority in Parliament picks the Prime Minister.', es: 'En el Reino Unido, los votantes eligen diputados, no al líder. La mayoría del Parlamento elige al primer ministro.', fa: 'در بریتانیا، رأی‌دهندگان اعضای پارلمان را انتخاب می‌کنند، نه رهبر را. اکثریت پارلمان صدراعظم را انتخاب می‌کند.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Power shared (federal)', es: 'Poder compartido (federal)', fa: 'قدرت تقسیم‌شده (فدرال)' } }] },
      '0,1,1': { ok: false, t: { en: 'In the UK, voters elect MPs, not the leader. The majority in Parliament picks the Prime Minister.', es: 'En el Reino Unido, los votantes eligen diputados, no al líder. La mayoría del Parlamento elige al primer ministro.', fa: 'در بریتانیا، رأی‌دهندگان اعضای پارلمان را انتخاب می‌کنند، نه رهبر را. اکثریت پارلمان صدراعظم را انتخاب می‌کند.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: true, t: { en: 'Strong center (unitary)', es: 'Centro fuerte (unitario)', fa: 'مرکز قوی (متمرکز)' } }] },
      '0,1,2': { ok: false, t: { en: 'In the UK, voters elect MPs, not the leader. The majority in Parliament picks the Prime Minister.', es: 'En el Reino Unido, los votantes eligen diputados, no al líder. La mayoría del Parlamento elige al primer ministro.', fa: 'در بریتانیا، رأی‌دهندگان اعضای پارلمان را انتخاب می‌کنند، نه رهبر را. اکثریت پارلمان صدراعظم را انتخاب می‌کند.' },
        show: [{ icon: '🗳️', ok: false, t: { en: 'Voters pick the leader', es: 'Los votantes eligen al líder', fa: 'رأی‌دهندگان رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Weak center (confederal)', es: 'Centro débil (confederal)', fa: 'مرکز ضعیف (کنفدرال)' } }] },
      '1,0,0': { ok: false, t: { en: 'Not in the UK. Parliament does not need impeachment. It can remove the government by a vote of no confidence.', es: 'En el Reino Unido no. El Parlamento no necesita un juicio político. Puede sacar al gobierno con un voto de no confianza.', fa: 'در بریتانیا نه. پارلمان به استیضاح نیاز ندارد. با رأی عدم اعتماد می‌تواند حکومت را بردارد.' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Power shared (federal)', es: 'Poder compartido (federal)', fa: 'قدرت تقسیم‌شده (فدرال)' } }] },
      '1,0,1': { ok: false, t: { en: 'Not in the UK. Parliament does not need impeachment. It can remove the government by a vote of no confidence.', es: 'En el Reino Unido no. El Parlamento no necesita un juicio político. Puede sacar al gobierno con un voto de no confianza.', fa: 'در بریتانیا نه. پارلمان به استیضاح نیاز ندارد. با رأی عدم اعتماد می‌تواند حکومت را بردارد.' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: true, t: { en: 'Strong center (unitary)', es: 'Centro fuerte (unitario)', fa: 'مرکز قوی (متمرکز)' } }] },
      '1,0,2': { ok: false, t: { en: 'Not in the UK. Parliament does not need impeachment. It can remove the government by a vote of no confidence.', es: 'En el Reino Unido no. El Parlamento no necesita un juicio político. Puede sacar al gobierno con un voto de no confianza.', fa: 'در بریتانیا نه. پارلمان به استیضاح نیاز ندارد. با رأی عدم اعتماد می‌تواند حکومت را بردارد.' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: false, t: { en: 'Out only by impeachment', es: 'Sale solo por juicio político', fa: 'فقط با استیضاح برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Weak center (confederal)', es: 'Centro débil (confederal)', fa: 'مرکز ضعیف (کنفدرال)' } }] },
      '1,1,0': { ok: false, t: { en: 'Close! This is like Germany: parliamentary and federal, led by a chancellor. But the UK is unitary.', es: '¡Casi! Así es Alemania: parlamentaria y federal, con un canciller. Pero el Reino Unido es unitario.', fa: 'نزدیک شدی! این مثل آلمان است: پارلمانی و فدرال، با یک صدراعظم. اما بریتانیا متمرکز است.' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Power shared (federal)', es: 'Poder compartido (federal)', fa: 'قدرت تقسیم‌شده (فدرال)' } }] },
      '1,1,1': { ok: true, t: { en: 'Lawmakers pick the leader and can vote them out. The center holds most power. That is the UK!', es: 'Los legisladores eligen al líder y pueden sacarlo. El centro tiene casi todo el poder. ¡Ese es el Reino Unido!', fa: 'قانون‌گذاران رهبر را انتخاب می‌کنند و برداشته می‌توانند. بیشترین قدرت در مرکز است. این بریتانیا است!' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: true, t: { en: 'Strong center (unitary)', es: 'Centro fuerte (unitario)', fa: 'مرکز قوی (متمرکز)' } }] },
      '1,1,2': { ok: false, t: { en: 'Close! But a confederal center is weak. In the UK, the central government holds most power.', es: '¡Casi! Pero en un sistema confederal el centro es débil. En el Reino Unido, el gobierno central tiene casi todo el poder.', fa: 'نزدیک شدی! اما در نظام کنفدرال مرکز ضعیف است. در بریتانیا، حکومت مرکزی بیشترین قدرت را دارد.' },
        show: [{ icon: '🗳️', ok: true, t: { en: 'Lawmakers pick the leader', es: 'Los legisladores eligen al líder', fa: 'قانون‌گذاران رهبر را می‌گزینند' } }, { icon: '✋', ok: true, t: { en: 'Out by a no-confidence vote', es: 'Sale por voto de no confianza', fa: 'با رأی عدم اعتماد برکنار می‌شود' } }, { icon: '🗺️', ok: false, t: { en: 'Weak center (confederal)', es: 'Centro débil (confederal)', fa: 'مرکز ضعیف (کنفدرال)' } }] }
    },
    otherwise: { ok: false, t: { en: 'That is not how the UK works yet. Try another setting.', es: 'Así todavía no funciona el Reino Unido. Prueba otra combinación.', fa: 'بریتانیا هنوز این‌طور کار نمی‌کند. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'That is the UK! Lawmakers pick the leader, can vote them out, and the center is strong.',
      es: '¡Ese es el Reino Unido! Los legisladores eligen al líder, pueden sacarlo con un voto y el centro es fuerte.',
      fa: 'این بریتانیا است! قانون‌گذاران رهبر را انتخاب می‌کنند، با رأی برداشته می‌توانند، و مرکز قوی است.' }
  },

  boss: {
    at: [7, 8],
    stat: 'reg',
    need: 3,
    name: { en: 'The Foggy Grump', es: 'El Gruñón Neblinoso', fa: 'غرغروی مه‌آلود' },
    appear: { en: 'The Foggy Grump is hiding in a thick London fog in St James\'s Park!', es: '¡El Gruñón Neblinoso se esconde en una niebla espesa de Londres, en el parque St James!', fa: 'غرغروی مه‌آلود در مه غلیظ لندن در پارک سنت جیمز پنهان است!' },
    taunt: { en: 'Presidents, prime ministers, monarchs… bah! Make ME the boss of every country!', es: 'Presidentes, primeros ministros, monarcas… ¡bah! ¡Háganme a MÍ el jefe de todos los países!', fa: 'رئیس جمهور، صدراعظم، پادشاه… بَه! مرا رئیس همهٔ کشورها بسازید!' },
    win: { en: 'The fog lifts over London. Charter page 8.1 floats down into your hands!', es: 'La niebla se va de Londres. ¡La página 8.1 de la carta cae en tus manos!', fa: 'مه از روی لندن کنار می‌رود. صفحهٔ ۸.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'In a parliamentary system, who chooses the head of government?', es: 'En un sistema parlamentario, ¿quién elige al jefe de gobierno?', fa: 'در نظام پارلمانی، کی رئیس حکومت را انتخاب می‌کند؟' },
        choices: [
          { en: 'The majority of lawmakers', es: 'La mayoría de los legisladores', fa: 'اکثریت قانون‌گذاران' },
          { en: 'The voters, on a separate ballot', es: 'Los votantes, en una boleta aparte', fa: 'رأی‌دهندگان، در یک ورقهٔ جدا' },
          { en: 'The judges of the top court', es: 'Los jueces del tribunal más alto', fa: 'قاضیان بالاترین محکمه' },
          { en: 'The army and its generals', es: 'El ejército y sus generales', fa: 'اردو و جنرال‌هایش' }],
        answer: 0,
        why: { en: 'In a parliamentary system, the leader with a majority of lawmakers becomes head of government.', es: 'En un sistema parlamentario, el líder con la mayoría de los legisladores es jefe de gobierno.', fa: 'در نظام پارلمانی، رهبری که اکثریت قانون‌گذاران را دارد رئیس حکومت می‌شود.' } },
      { q: { en: 'In the US presidential system, how is the President chosen?', es: 'En el sistema presidencial de EE. UU., ¿cómo se elige al presidente?', fa: 'در نظام ریاستی امریکا، رئیس جمهور چطور انتخاب می‌شود؟' },
        choices: [
          { en: 'Elected apart from Congress', es: 'Elegido aparte del Congreso', fa: 'جدا از کانگرس انتخاب می‌شود' },
          { en: 'Picked by a vote in Congress', es: 'Escogido por un voto del Congreso', fa: 'با رأی کانگرس گزیده می‌شود' },
          { en: 'Named by the Supreme Court', es: 'Nombrado por la Corte Suprema', fa: 'دیوان عالی او را تعیین می‌کند' },
          { en: 'Born into a royal family', es: 'Nace en una familia real', fa: 'در خانوادهٔ شاهی به دنیا می‌آید' }],
        answer: 0,
        why: { en: 'US voters elect the President separately from Congress. The President is head of state and government.', es: 'Los votantes de EE. UU. eligen al presidente aparte del Congreso. Es jefe de Estado y de gobierno.', fa: 'رأی‌دهندگان امریکا رئیس جمهور را جدا از کانگرس انتخاب می‌کنند. او رئیس کشور و حکومت است.' } },
      { q: { en: 'Who is the UK\'s head of state?', es: '¿Quién es el jefe de Estado del Reino Unido?', fa: 'رئیس کشور بریتانیا کیست؟' },
        choices: [
          { en: 'The monarch', es: 'El monarca', fa: 'پادشاه' },
          { en: 'The Prime Minister', es: 'El primer ministro', fa: 'صدراعظم' },
          { en: 'The mayor of London', es: 'El alcalde de Londres', fa: 'شاروال لندن' },
          { en: 'The oldest MP', es: 'El diputado más viejo', fa: 'پیرترین عضو پارلمان' }],
        answer: 0,
        why: { en: 'The monarch is head of state, a mostly ceremonial job. The Prime Minister runs the government.', es: 'El monarca es jefe de Estado, un puesto sobre todo ceremonial. El primer ministro dirige el gobierno.', fa: 'پادشاه رئیس کشور است، یک کار بیشتر تشریفاتی. صدراعظم حکومت را اداره می‌کند.' } },
      { q: { en: 'How can the UK Parliament remove the government?', es: '¿Cómo puede el Parlamento del Reino Unido sacar al gobierno?', fa: 'پارلمان بریتانیا چطور می‌تواند حکومت را بردارد؟' },
        choices: [
          { en: 'A vote of no confidence', es: 'Un voto de no confianza', fa: 'رأی عدم اعتماد' },
          { en: 'Only by impeachment', es: 'Solo con juicio político', fa: 'فقط با استیضاح' },
          { en: 'It can never do that', es: 'Nunca puede hacerlo', fa: 'هیچ وقت نمی‌تواند' },
          { en: 'By asking a judge', es: 'Pidiéndoselo a un juez', fa: 'با خواهش از یک قاضی' }],
        answer: 0,
        why: { en: 'If most MPs vote no confidence, the government can be removed. Congress cannot do that to a President.', es: 'Si la mayoría vota no confianza, el gobierno puede caer. El Congreso no puede hacer eso a un presidente.', fa: 'اگر بیشتر اعضا رأی عدم اعتماد بدهند، حکومت برداشته می‌شود. کانگرس با رئیس جمهور این کار را کرده نمی‌تواند.' } },
      { q: { en: 'How long is one term for a US President?', es: '¿Cuánto dura un período de un presidente de EE. UU.?', fa: 'یک دورهٔ رئیس جمهور امریکا چقدر است؟' },
        choices: [
          { en: '4 years', es: '4 años', fa: '۴ سال' },
          { en: '5 years', es: '5 años', fa: '۵ سال' },
          { en: '6 years', es: '6 años', fa: '۶ سال' },
          { en: '2 years', es: '2 años', fa: '۲ سال' }],
        answer: 0,
        why: { en: 'A US President serves a fixed 4-year term. UK elections must come at least every 5 years.', es: 'Un presidente de EE. UU. sirve 4 años fijos. En el Reino Unido hay elecciones por lo menos cada 5 años.', fa: 'رئیس جمهور امریکا ۴ سال ثابت کار می‌کند. در بریتانیا انتخابات دست کم هر ۵ سال است.' } },
      { q: { en: 'Which country is unitary, with most power in its central government?', es: '¿Qué país es unitario, con casi todo el poder en su gobierno central?', fa: 'کدام کشور متمرکز است و بیشترین قدرت در حکومت مرکزی آن است؟' },
        choices: [
          { en: 'France', es: 'Francia', fa: 'فرانسه' },
          { en: 'Germany', es: 'Alemania', fa: 'آلمان' },
          { en: 'Canada', es: 'Canadá', fa: 'کانادا' },
          { en: 'Mexico', es: 'México', fa: 'مکسیکو' }],
        answer: 0,
        why: { en: 'France, Japan and the UK are unitary. Germany, Canada, Mexico, India and the US are federal.', es: 'Francia, Japón y el Reino Unido son unitarios. Alemania, Canadá, México, India y EE. UU. son federales.', fa: 'فرانسه، جاپان و بریتانیا متمرکز هستند. آلمان، کانادا، مکسیکو، هند و امریکا فدرال هستند.' } },
      { q: { en: 'Under the Articles of Confederation, the states held most power. What system was that?', es: 'Con los Artículos de la Confederación, los estados tenían casi todo el poder. ¿Qué sistema era?', fa: 'در زمان مواد کنفدراسیون، ایالت‌ها بیشترین قدرت را داشتند. آن چه نظامی بود؟' },
        choices: [
          { en: 'Confederal', es: 'Confederal', fa: 'کنفدرال' },
          { en: 'Federal', es: 'Federal', fa: 'فدرال' },
          { en: 'Unitary', es: 'Unitario', fa: 'متمرکز' },
          { en: 'Parliamentary', es: 'Parlamentario', fa: 'پارلمانی' }],
        answer: 0,
        why: { en: 'In a confederal system, the states are strong and the central government is weak.', es: 'En un sistema confederal, los estados son fuertes y el gobierno central es débil.', fa: 'در نظام کنفدرال، ایالت‌ها قوی هستند و حکومت مرکزی ضعیف است.' } },
      { q: { en: 'In an [[autocracy|autocracy]], can the people vote the ruler out?', es: 'En una [[autocracy|autocracia]], ¿puede el pueblo sacar al gobernante con su voto?', fa: 'در [[autocracy|حکومت مطلقهٔ یک نفر]]، آیا مردم با رأی حاکم را برداشته می‌توانند؟' },
        choices: [
          { en: 'No, one ruler has all power', es: 'No, un gobernante tiene todo el poder', fa: 'نه، یک حاکم همهٔ قدرت را دارد' },
          { en: 'Yes, at the next election', es: 'Sí, en las próximas elecciones', fa: 'بله، در انتخابات بعدی' },
          { en: 'Yes, by a no-confidence vote', es: 'Sí, con un voto de no confianza', fa: 'بله، با رأی عدم اعتماد' },
          { en: 'Yes, by impeachment in court', es: 'Sí, con un juicio político', fa: 'بله، با استیضاح در محکمه' }],
        answer: 0,
        why: { en: 'In an autocracy, one ruler holds all power. In a [[democracy|democracy]], like the UK and US, voters choose who governs.', es: 'En una autocracia, un gobernante tiene todo el poder. En una [[democracy|democracia]], como el Reino Unido y EE. UU., los votantes eligen quién gobierna.', fa: 'در حکومت مطلقه، یک حاکم همهٔ قدرت را دارد. در [[democracy|دموکراسی]]، مثل بریتانیا و امریکا، رأی‌دهندگان حاکمان را انتخاب می‌کنند.' } }
    ]
  },

  learned: [
    { en: 'In a [[parliamentary system|parliamentary system]], like the UK, lawmakers pick the [[prime minister|Prime Minister]] and can vote the government out.', es: 'En un [[parliamentary system|sistema parlamentario]], como el Reino Unido, los legisladores eligen al [[prime minister|primer ministro]] y pueden sacar al gobierno con un voto.', fa: 'در [[parliamentary system|نظام پارلمانی]]، مثل بریتانیا، قانون‌گذاران [[prime minister|صدراعظم]] را انتخاب می‌کنند و با رأی حکومت را برداشته می‌توانند.' },
    { en: 'In a [[presidential system|presidential system]], like the US, voters elect the President for a fixed 4-year term.', es: 'En un [[presidential system|sistema presidencial]], como EE. UU., los votantes eligen al presidente por 4 años fijos.', fa: 'در [[presidential system|نظام ریاستی]]، مثل امریکا، رأی‌دهندگان رئیس جمهور را برای ۴ سال ثابت انتخاب می‌کنند.' },
    { en: 'Power can sit in the center ([[unitary|unitary]]), be shared ([[federal|federal]]), or sit with the states ([[confederal|confederal]]).', es: 'El poder puede estar en el centro ([[unitary|unitario]]), compartirse ([[federal|federal]]) o estar en los estados ([[confederal|confederal]]).', fa: 'قدرت می‌تواند در مرکز باشد ([[unitary|متمرکز]])، تقسیم شود ([[federal|فدرال]])، یا دست ایالت‌ها باشد ([[confederal|کنفدرال]]).' }
  ],
  reflect: {
    q: { en: 'Would you rather vote for your leader directly, or let lawmakers pick? Why?', es: '¿Preferirías votar por tu líder directamente o dejar que lo elijan los legisladores? ¿Por qué?', fa: 'ترجیح می‌دهی مستقیم به رهبرت رأی بدهی، یا قانون‌گذاران او را انتخاب کنند؟ چرا؟' },
    starter: { en: 'I would rather', es: 'Yo preferiría', fa: 'من ترجیح می‌دهم' }
  }
};
