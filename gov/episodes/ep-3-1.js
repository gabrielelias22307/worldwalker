/* CIVICWALKER · Episode 3.1 · Becoming a Citizen (Citizenship: birth and naturalization; duties and responsibilities)
   Alexandria, Virginia, today: a naturalization ceremony day in Old Town. North-west: the federal courthouse (J) with
   its plaza (l) and fountain, where the new citizens take the oath. North-east: the library (blue roof) and a row
   house. King Street (l) runs east across the middle to the waterfront (s) on the Potomac River (~), with a dock (k).
   South-west: the community center, today a polling place, and a row house. South-east: Market Square with stalls
   and a fountain. The charter stone asks the student to sort what a citizen MUST do (duties) from what a citizen
   SHOULD do (responsibilities): duties go to the courthouse plaza, responsibilities to the garden by the polling place. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'GOVT',
  title: { en: 'Becoming a Citizen', es: 'Ser ciudadano', fa: 'شهروند شدن' },
  weather: { sky: 'petals', time: 'day' },
  place: { en: 'Alexandria, today', es: 'Alexandria, hoy', fa: 'الکساندریا، امروز' },
  intro: [
    { en: 'The Grump tore the page about citizens. Now people forget their duties.',
      es: 'El Gruñón rompió la página sobre los ciudadanos. Ahora la gente olvida sus deberes.',
      fa: 'غرغرو صفحهٔ شهروندان را پاره کرد. حالا مردم وظیفه‌های خود را فراموش می‌کنند.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-77.05, 38.80],
    start: [
      { en: 'Alexandria is a city in Virginia, on the Potomac River.',
        es: 'Alexandria es una ciudad de Virginia, junto al río Potomac.',
        fa: 'الکساندریا یک شهر در ویرجینیا است، کنار دریای پوتومک.' },
      { en: 'Washington, D.C. is just to the north, up the river.',
        es: 'Washington, D.C. está muy cerca, al norte, río arriba.',
        fa: 'واشنگتن دی سی خیلی نزدیک، در شمال، بالای دریا است.' },
      { en: 'Today, new citizens take an oath at a ceremony in Old Town.',
        es: 'Hoy, nuevos ciudadanos hacen un juramento en una ceremonia en Old Town.',
        fa: 'امروز، شهروندان نو در یک مراسم در شهر کهنه سوگند یاد می‌کنند.' }
    ],
    page: { en: 'Each year, hundreds of thousands of people become US citizens by naturalization.',
      es: 'Cada año, cientos de miles de personas se hacen ciudadanas de EE. UU. por naturalización.',
      fa: 'هر سال، صدها هزار نفر از راه تابعیت‌گیری شهروند امریکا می‌شوند.' },
    guess: {
      q: { en: 'Can a person born in another country become a US citizen?', es: '¿Puede una persona nacida en otro país hacerse ciudadana de EE. UU.?', fa: 'آیا کسی که در کشور دیگر به دنیا آمده، شهروند امریکا شده می‌تواند؟' },
      choices: [
        { t: { en: '✅ Yes, they can', es: '✅ Sí, puede', fa: '✅ بله، می‌تواند' }, ok: true },
        { t: { en: '❌ No, never', es: '❌ No, nunca', fa: '❌ نه، هرگز' } }
      ],
      why: { en: 'Yes! People from every country can become citizens. This is called naturalization.', es: '¡Sí! Personas de todos los países pueden hacerse ciudadanas. Esto se llama naturalización.', fa: 'بله! مردم از هر کشور شهروند شده می‌توانند. این را تابعیت‌گیری می‌گویند.' }
    },
    next: {
      q: { en: 'Next: Des Moines, 1965. Students wore black armbands to school. Was that free speech?', es: 'Ahora: Des Moines, 1965. Unos estudiantes llevaron brazaletes negros a la escuela. ¿Era libertad de expresión?', fa: 'بعدی: دی موین، ۱۹۶۵. شاگردان بازوبند سیاه به مکتب بستند. آیا این آزادی بیان بود؟' },
      choices: [
        { t: { en: 'Yes, it was free speech', es: 'Sí, era libertad de expresión', fa: 'بله، آزادی بیان بود' }, ok: true },
        { t: { en: 'No, not at school', es: 'No, en la escuela no', fa: 'نه، در مکتب نه' } }
      ],
      why: { en: 'In 1969 the Supreme Court said yes. Students keep free speech at school.', es: 'En 1969 la Corte Suprema dijo que sí. Los estudiantes tienen libertad de expresión en la escuela.', fa: 'در ۱۹۶۹ دیوان عالی گفت بله. شاگردان در مکتب هم آزادی بیان دارند.' }
    }
  },
  houses: [
    { at: [6, 3], name: { en: 'Selam', es: 'Selam', fa: 'سلام' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f7a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I came from Ethiopia. This morning I took the Oath of Allegiance!', es: 'Vine de Etiopía. ¡Esta mañana hice el Juramento de Lealtad!', fa: 'من از ایتوپیا آمدم. امروز صبح سوگند وفاداری یاد کردم!' },
        { en: 'People from many countries stood with me in this room.', es: 'Personas de muchos países estaban conmigo en esta sala.', fa: 'مردم از کشورهای زیاد در این اتاق با من ایستاده بودند.' },
        { en: 'We all raised our right hands and said the oath together.', es: 'Todos levantamos la mano derecha y dijimos el juramento juntos.', fa: 'همهٔ ما دست راست خود را بالا کردیم و با هم سوگند یاد کردیم.' }
      ] },
    { at: [17, 2], name: { en: 'Mr. Nguyen', es: 'Sr. Nguyen', fa: 'آقای نگوین' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#8a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome to the library! I came from Vietnam long ago.', es: '¡Bienvenido a la biblioteca! Vine de Vietnam hace mucho.', fa: 'به کتابخانه خوش آمدی! من خیلی پیش از ویتنام آمدم.' },
        { en: 'Now I volunteer here. I help adults practice English.', es: 'Ahora soy voluntario aquí. Ayudo a adultos a practicar inglés.', fa: 'حالا اینجا رضاکار هستم. به بزرگسالان در تمرین انگلیسی کمک می‌کنم.' },
        { en: 'Volunteering is not a law. It is a [[responsibility|responsibility]] I choose.', es: 'Ser voluntario no es una ley. Es una [[responsibility|responsabilidad]] que yo elijo.', fa: 'رضاکاری قانون نیست. یک [[responsibility|مسئولیت]] است که خودم انتخاب می‌کنم.' }
      ] },
    { at: [23, 2], name: { en: 'Carmen', es: 'Carmen', fa: 'کارمن' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#c04a6a', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'I came here from El Salvador. My daughter was born here, in Alexandria.', es: 'Vine de El Salvador. Mi hija nació aquí, en Alexandria.', fa: 'من از السالوادور آمدم. دخترم اینجا، در الکساندریا، به دنیا آمد.' },
        { en: 'She was born in the US, so she is a citizen by birth.', es: 'Nació en EE. UU., así que es ciudadana por nacimiento.', fa: 'او در امریکا به دنیا آمد، پس از راه تولد شهروند است.' },
        { en: 'I became a citizen later, by [[naturalization|naturalization]].', es: 'Yo me hice ciudadana después, por [[naturalization|naturalización]].', fa: 'من بعداً از راه [[naturalization|تابعیت‌گیری]] شهروند شدم.' }
      ] },
    { at: [5, 14], name: { en: 'Zahra', es: 'Zahra', fa: 'زهرا' },
      look: { skin: 2, hair: '#1a1008', shirt: '#4a5a9a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I came from Afghanistan. I studied for the civics test here, at night.', es: 'Vine de Afganistán. Estudié para el examen de educación cívica aquí, de noche.', fa: 'من از افغانستان آمدم. اینجا شب‌ها برای امتحان مدنی درس خواندم.' },
        { en: 'The questions ask about US history and how the government works.', es: 'Las preguntas son sobre la historia de EE. UU. y cómo funciona el gobierno.', fa: 'سوال‌ها دربارهٔ تاریخ امریکا و کار حکومت است.' },
        { en: 'Today this room is a polling place. People come here to vote.', es: 'Hoy esta sala es un lugar de votación. La gente viene aquí a votar.', fa: 'امروز این اتاق یک محل رأی‌دهی است. مردم برای رأی دادن اینجا می‌آیند.' }
      ] },
    { at: [12, 14], name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      look: { skin: 5, hair: '#8a8a8a', shirt: '#3a6a8a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Last month, a letter came from the court. It called me to a [[jury|jury]].', es: 'El mes pasado llegó una carta del tribunal. Me llamaba a un [[jury|jurado]].', fa: 'ماه گذشته از محکمه یک نامه آمد. مرا به [[jury|هیئت منصفه]] خواست.' },
        { en: 'I went for three days. We listened and decided a case.', es: 'Fui tres días. Escuchamos y decidimos un caso.', fa: 'سه روز رفتم. ما گوش دادیم و دربارهٔ یک دعوا تصمیم گرفتیم.' },
        { en: 'Jury service is a [[duty|duty]]. When the court calls, citizens must go.', es: 'Servir en un jurado es un [[duty|deber]]. Cuando el tribunal llama, los ciudadanos deben ir.', fa: 'خدمت در هیئت منصفه یک [[duty|وظیفه]] است. وقتی محکمه بخواهد، شهروندان باید بروند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. The Potomac (~) is the east edge, with the waterfront sand (s) and a dock (k).
     North-west: the federal courthouse (J, door at 6,3) and its plaza (l) with a fountain (O).
     North-east: the library (QQQ, door 17,2), a row house (RRR, door 23,2), the waterfront park (flowers ,).
     Middle: King Street (rows 10-11) runs east to the river.
     South-west: the community center / polling place (door 5,14), a row house (door 12,14), a garden (,).
     South-east: Market Square, with stalls (m) and a fountain. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~=',
    'T.JJJJJJJJJ.T...QQQ...RRR..s~~~=',
    'T.JJJJJJJJJ.....hdh...hdh..s~~~=',
    'T.JJJJdJJJJ.T.........T....s~~~=',
    'T.llllllll.x...............s~~~=',
    'T.llllllll......T.....T....s~~~=',
    'T.llOlllll...T..........,,.s~~~=',
    'T.llllllll.............,,..s~~~=',
    'T..T...T.....T....T........s~~~=',
    'T..........................s~~~=',
    'Tllllllllllllllllllllllllllls~~=',
    'Tllllllllllllllllllllllllllls~~=',
    'T......x...................s~~~=',
    'T..RRRRR...RRR....m.m......s~~~=',
    'T..hhdhh...hdh....lllll....skk~=',
    'T.................lOlll....s~~~=',
    'T.x...............lllll....s~~~=',
    'T..T......T.......m.m..T...s~~~=',
    'T.....,,,..............T...s~~~=',
    'T..T..,,,.....T............s~~~=',
    'T.........T.........T......s~~~=',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~='
  ],
  start: [14, 10],

  finds: [
    { clueAt: [12, 9], at: [16, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, next to King Street.', es: 'Desde esta nota, camina 4 pasos al este, junto a King Street.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار سرک کینگ.' },
      text: { en: 'An old coin! Alexandria was started as a town in 1749.', es: '¡Una moneda antigua! Alexandria se fundó como pueblo en 1749.', fa: 'یک سکهٔ کهنه! الکساندریا در سال ۱۷۴۹ به شکل یک شهرک ساخته شد.' } },
    { clueAt: [27, 17], at: [27, 20], decor: 'shell',
      clue: { en: 'From this note, walk 3 steps south, along the river.', es: 'Desde esta nota, camina 3 pasos al sur, junto al río.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، کنار دریا.' },
      text: { en: 'A river shell! The Potomac flows south-east into the Chesapeake Bay.', es: '¡Una concha del río! El Potomac fluye al sureste hasta la bahía de Chesapeake.', fa: 'یک صدف دریا! پوتومک به طرف جنوب شرق در خلیج چیساپیک می‌ریزد.' } }
  ],

  words: {
    citizen: { en: 'a full member of a country, with rights and duties', es: 'un miembro pleno de un país, con derechos y deberes', fa: 'عضو کامل یک کشور، با حقوق و وظیفه‌ها' },
    naturalization: { en: 'the way a person born in another country becomes a citizen', es: 'la forma en que alguien nacido en otro país se hace ciudadano', fa: 'راهی که کسی که در کشور دیگر به دنیا آمده شهروند می‌شود' },
    'permanent resident': { en: 'a person allowed to live and work in the US for good (a green card)', es: 'una persona que puede vivir y trabajar en EE. UU. para siempre (tarjeta verde)', fa: 'کسی که اجازه دارد برای همیشه در امریکا زندگی و کار کند (گرین کارت)' },
    oath: { en: 'a serious promise said out loud', es: 'una promesa seria dicha en voz alta', fa: 'یک وعدهٔ جدی که بلند گفته می‌شود' },
    amendment: { en: 'a change added to the Constitution', es: 'un cambio agregado a la Constitución', fa: 'یک تغییر که به قانون اساسی اضافه شده' },
    duty: { en: 'something the law says you MUST do', es: 'algo que la ley dice que DEBES hacer', fa: 'کاری که قانون می‌گوید باید انجام بدهی' },
    responsibility: { en: 'something a good citizen SHOULD do, but no law forces it', es: 'algo que un buen ciudadano DEBERÍA hacer, pero ninguna ley obliga', fa: 'کاری که یک شهروند خوب باید بکند، اما هیچ قانونی مجبور نمی‌کند' },
    jury: { en: 'a group of citizens who listen to a court case and decide it', es: 'un grupo de ciudadanos que escucha un caso en el tribunal y lo decide', fa: 'گروهی از شهروندان که به یک دعوا در محکمه گوش می‌دهند و تصمیم می‌گیرند' },
    civics: { en: 'learning about government and how citizens take part', es: 'aprender sobre el gobierno y cómo participan los ciudadanos', fa: 'یاد گرفتن دربارهٔ حکومت و سهم گرفتن شهروندان' }
  },

  npcs: [
    {
      x: 8, y: 5,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Court clerk', es: 'Secretaria del tribunal', fa: 'منشی محکمه' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a3a6a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome! Today is a ceremony day. New citizens take an [[oath|oath]] here.', es: '¡Bienvenido! Hoy hay ceremonia. Los nuevos ciudadanos hacen un [[oath|juramento]] aquí.', fa: 'خوش آمدی! امروز روز مراسم است. شهروندان نو اینجا [[oath|سوگند]] یاد می‌کنند.' },
        { en: 'There are two ways to be a US [[citizen|citizen]]: by birth or by naturalization.', es: 'Hay dos formas de ser [[citizen|ciudadano]] de EE. UU.: por nacimiento o por naturalización.', fa: 'دو راه برای [[citizen|شهروند]] امریکا شدن هست: از راه تولد یا تابعیت‌گیری.' },
        { en: 'The 14th [[amendment|Amendment]] says people born in the US are citizens.', es: 'La [[amendment|Enmienda]] 14 dice que las personas nacidas en EE. UU. son ciudadanas.', fa: '[[amendment|متمم]] چهاردهم می‌گوید کسانی که در امریکا به دنیا آمده‌اند شهروند هستند.' },
        { en: 'A child born in another country to a citizen parent can be a citizen too.', es: 'Un niño nacido en otro país de padre o madre ciudadano también puede ser ciudadano.', fa: 'کودکی که در کشور دیگر از پدر یا مادر شهروند به دنیا آمده هم شهروند شده می‌تواند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which part of the Constitution says people born in the US are citizens?', es: '¿Qué parte de la Constitución dice que los nacidos en EE. UU. son ciudadanos?', fa: 'کدام بخش قانون اساسی می‌گوید کسانی که در امریکا به دنیا آمده‌اند شهروند هستند؟' },
        choices: [
          { ok: true, t: { en: 'The 14th Amendment', es: 'La Enmienda 14', fa: 'متمم چهاردهم' },
            why: { en: 'Yes! The 14th Amendment, from 1868, makes people born in the US citizens.', es: '¡Sí! La Enmienda 14, de 1868, hace ciudadanos a los nacidos en EE. UU.', fa: 'بله! متمم چهاردهم، از سال ۱۸۶۸، کسانی را که در امریکا به دنیا آمده‌اند شهروند می‌سازد.' } },
          { t: { en: 'The 1st Amendment', es: 'La Enmienda 1', fa: 'متمم اول' },
            why: { en: 'The 1st Amendment protects free speech and religion. Citizenship by birth is the 14th.', es: 'La Enmienda 1 protege la libre expresión y la religión. La ciudadanía por nacimiento es la 14.', fa: 'متمم اول از آزادی بیان و دین محافظت می‌کند. شهروندی از راه تولد متمم چهاردهم است.' } },
          { t: { en: 'The Bill of Rights', es: 'La Carta de Derechos', fa: 'منشور حقوق' },
            why: { en: 'The Bill of Rights is the first 10 amendments. Citizenship by birth came later, in the 14th.', es: 'La Carta de Derechos son las primeras 10 enmiendas. La ciudadanía por nacimiento llegó después, en la 14.', fa: 'منشور حقوق ده متمم اول است. شهروندی از راه تولد بعداً در متمم چهاردهم آمد.' } }
        ]
      }
    },
    {
      x: 20, y: 3,
      name: { en: 'Farid', es: 'Farid', fa: 'فرید' },
      role: { en: 'Citizenship class teacher', es: 'Maestro de la clase de ciudadanía', fa: 'معلم صنف تابعیت' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#6a8a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I teach the citizenship class at the library. Here are the steps.', es: 'Doy la clase de ciudadanía en la biblioteca. Estos son los pasos.', fa: 'من در کتابخانه صنف تابعیت درس می‌دهم. قدم‌ها این‌ها هستند.' },
        { en: 'First, be a [[permanent resident|permanent resident]], usually 5 years. Or 3, if married to a citizen.', es: 'Primero, ser [[permanent resident|residente permanente]], casi siempre 5 años. O 3, si estás casado con un ciudadano.', fa: 'اول، معمولاً ۵ سال [[permanent resident|مقیم دائم]] باش. یا ۳ سال، اگر با یک شهروند ازدواج کرده‌ای.' },
        { en: 'Be 18 or older, and send in an application.', es: 'Tener 18 años o más, y enviar una solicitud.', fa: '۱۸ ساله یا بزرگتر باش، و درخواست بفرست.' },
        { en: 'Pass an English test and a [[civics|civics]] test at an interview. Then take the oath!', es: 'Pasar un examen de inglés y uno de [[civics|educación cívica]] en una entrevista. ¡Luego, el juramento!', fa: 'در یک مصاحبه امتحان انگلیسی و [[civics|مدنی]] را کامیاب شو. بعد سوگند یاد کن!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which one is a step to become a citizen by naturalization?', es: '¿Cuál es un paso para hacerse ciudadano por naturalización?', fa: 'کدام یکی یک قدم برای شهروند شدن از راه تابعیت‌گیری است؟' },
        choices: [
          { ok: true, t: { en: 'Pass an English and civics test', es: 'Pasar un examen de inglés y cívica', fa: 'امتحان انگلیسی و مدنی را کامیاب شدن' },
            why: { en: 'Yes! At the interview, people pass an English test and a civics test.', es: '¡Sí! En la entrevista, la gente pasa un examen de inglés y uno de cívica.', fa: 'بله! در مصاحبه، مردم امتحان انگلیسی و امتحان مدنی را کامیاب می‌شوند.' } },
          { t: { en: 'Live in the US for one month', es: 'Vivir en EE. UU. un mes', fa: 'یک ماه در امریکا زندگی کردن' },
            why: { en: 'One month is not enough. Usually a person is a permanent resident for 5 years first.', es: 'Un mes no basta. Casi siempre la persona es residente permanente 5 años antes.', fa: 'یک ماه کافی نیست. معمولاً اول یک نفر ۵ سال مقیم دائم است.' } },
          { t: { en: 'Buy a house in a US city', es: 'Comprar una casa en una ciudad', fa: 'یک خانه در یک شهر خریدن' },
            why: { en: 'No. You do not need to own a house. Renters can become citizens too.', es: 'No. No necesitas tener casa. Los que alquilan también pueden hacerse ciudadanos.', fa: 'نه. لازم نیست خانه داشته باشی. کرایه‌نشین‌ها هم شهروند شده می‌توانند.' } }
        ]
      }
    },
    {
      x: 6, y: 16,
      name: { en: 'Denise', es: 'Denise', fa: 'دنیس' },
      role: { en: 'Poll worker', es: 'Trabajadora electoral', fa: 'کارمند رأی‌دهی' },
      look: { skin: 3, hair: '#3a2416', shirt: '#c07a3a', pants: '#2a3a4a', style: 'long' },
      lines: [
        { en: 'Hi! I help at the polling place in the community center.', es: '¡Hola! Ayudo en el lugar de votación del centro comunitario.', fa: 'سلام! من در محل رأی‌دهی مرکز اجتماعی کمک می‌کنم.' },
        { en: 'Citizens have [[duty|duties]]. The law says you MUST do them.', es: 'Los ciudadanos tienen [[duty|deberes]]. La ley dice que DEBES cumplirlos.', fa: 'شهروندان [[duty|وظیفه‌ها]] دارند. قانون می‌گوید باید آن‌ها را انجام بدهی.' },
        { en: 'Obey laws, pay taxes, serve on a jury, and be a witness when called.', es: 'Obedecer las leyes, pagar impuestos, servir en un jurado y ser testigo si te llaman.', fa: 'از قانون پیروی کن، مالیات بده، در هیئت منصفه خدمت کن، و اگر خواستند شاهد باش.' },
        { en: 'Voting is a [[responsibility|responsibility]]. You SHOULD vote, but no law forces you.', es: 'Votar es una [[responsibility|responsabilidad]]. DEBERÍAS votar, pero ninguna ley te obliga.', fa: 'رأی دادن یک [[responsibility|مسئولیت]] است. باید رأی بدهی، اما هیچ قانونی مجبورت نمی‌کند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which one is a duty, something the law says citizens MUST do?', es: '¿Cuál es un deber, algo que la ley dice que los ciudadanos DEBEN hacer?', fa: 'کدام یکی وظیفه است، کاری که قانون می‌گوید شهروندان باید انجام بدهند؟' },
        choices: [
          { ok: true, t: { en: 'Serve on a jury when called', es: 'Servir en un jurado si te llaman', fa: 'خدمت در هیئت منصفه وقتی خواستند' },
            why: { en: 'Yes! When the court calls you to a jury, you must go. It is a duty.', es: '¡Sí! Cuando el tribunal te llama a un jurado, debes ir. Es un deber.', fa: 'بله! وقتی محکمه تو را به هیئت منصفه بخواهد، باید بروی. این وظیفه است.' } },
          { t: { en: 'Vote in every single election', es: 'Votar en todas las elecciones', fa: 'رأی دادن در هر انتخابات' },
            why: { en: 'Voting is very important, but no law forces you. It is a responsibility.', es: 'Votar es muy importante, pero ninguna ley te obliga. Es una responsabilidad.', fa: 'رأی دادن خیلی مهم است، اما هیچ قانونی مجبورت نمی‌کند. این مسئولیت است.' } },
          { t: { en: 'Volunteer at the public library', es: 'Ser voluntario en la biblioteca', fa: 'رضاکاری در کتابخانهٔ عامه' },
            why: { en: 'Volunteering helps your community, but it is a choice. It is a responsibility.', es: 'Ser voluntario ayuda a tu comunidad, pero es una elección. Es una responsabilidad.', fa: 'رضاکاری به جامعه کمک می‌کند، اما انتخاب خودت است. این مسئولیت است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 4, text: { en: 'FEDERAL COURTHOUSE · Naturalization ceremony today. Welcome, new citizens!', es: 'TRIBUNAL FEDERAL · Hoy hay ceremonia de naturalización. ¡Bienvenidos, nuevos ciudadanos!', fa: 'محکمهٔ فدرال · امروز مراسم تابعیت است. خوش آمدید، شهروندان نو!' } },
    { x: 7, y: 12, text: { en: 'KING STREET · Old Town Alexandria · East to the waterfront on the Potomac River.', es: 'KING STREET · Old Town de Alexandria · Al este, la orilla del río Potomac.', fa: 'سرک کینگ · شهر کهنهٔ الکساندریا · به شرق تا کنار دریای پوتومک.' } },
    { x: 2, y: 16, text: { en: 'POLLING PLACE · VOTE HERE · Community Center', es: 'LUGAR DE VOTACIÓN · VOTE AQUÍ · Centro comunitario', fa: 'محل رأی‌دهی · اینجا رأی بدهید · مرکز اجتماعی' } }
  ],

  /* the quest: Mei (gold !) on the courthouse plaza -> Sam at the dock on the Potomac (south-east)
     -> Mr. Okafor's voter table in the waterfront park (north-east): carry him the voter forms from the polling place */
  quest: {
    stat: 'mov',
    title: { en: 'Flags for the New Citizens', es: 'Banderas para los nuevos ciudadanos', fa: 'بیرق برای شهروندان نو' },
    giver: {
      x: 9, y: 8,
      name: { en: 'Mei', es: 'Mei', fa: 'می' },
      role: { en: 'Ceremony helper', es: 'Ayudante de la ceremonia', fa: 'کمک‌کار مراسم' },
      look: { skin: 1, hair: '#120c08', shirt: '#d9542b', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Each new citizen gets a small US flag after the ceremony.', es: 'Cada nuevo ciudadano recibe una banderita de EE. UU. después de la ceremonia.', fa: 'هر شهروند نو بعد از مراسم یک بیرق کوچک امریکا می‌گیرد.' },
        { en: 'But the Grump threw my box of flags into the river!', es: '¡Pero el Gruñón tiró mi caja de banderas al río!', fa: 'اما غرغرو صندوق بیرق‌هایم را در دریا انداخت!' },
        { en: 'Please ask Sam. He drives the river boat.', es: 'Por favor, pregúntale a Sam. Él maneja el barco del río.', fa: 'لطفاً از سام بپرس. او کشتی دریا را می‌راند.' }
      ],
      wait: { en: 'Sam is at the dock on the Potomac, south of King Street.', es: 'Sam está en el muelle del Potomac, al sur de King Street.', fa: 'سام کنار اسکلهٔ پوتومک است، در جنوب سرک کینگ.' },
      thanks: { en: 'Flags for everyone! Welcome, new citizens! Thank you, friend!', es: '¡Banderas para todos! ¡Bienvenidos, nuevos ciudadanos! ¡Gracias, amigo!', fa: 'بیرق برای همه! خوش آمدید، شهروندان نو! تشکر، دوست من!' }
    },
    contact: {
      x: 25, y: 15,
      name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      role: { en: 'Boat captain', es: 'Capitán de barco', fa: 'کپتان کشتی' },
      look: { skin: 0, hair: '#c8a060', shirt: '#2f5f9a', pants: '#3a3a3a', hat: '#e8e8e8', style: 'short' },
      lines: [
        { en: 'I pulled the box out of the river. The flags are all wet!', es: 'Saqué la caja del río. ¡Las banderas están todas mojadas!', fa: 'صندوق را از دریا بیرون کشیدم. بیرق‌ها همه تر هستند!' },
        { en: 'Mr. Okafor has dry flags. He is north along the river, in the park.', es: 'El Sr. Okafor tiene banderas secas. Está al norte, junto al río, en el parque.', fa: 'آقای اوکافور بیرق‌های خشک دارد. او در شمال، کنار دریا، در پارک است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 5,
        name: { en: 'Mr. Okafor', es: 'Sr. Okafor', fa: 'آقای اوکافور' },
        role: { en: 'Voter table helper', es: 'Ayudante de la mesa de votantes', fa: 'کمک‌کار میز رأی‌دهندگان' },
        look: { skin: 5, hair: '#120c08', shirt: '#7a4fa3', pants: '#2a2a2a', style: 'short' },
        lines: [
          { en: 'Hello! I help new citizens at this table after the ceremony.', es: '¡Hola! Ayudo a los nuevos ciudadanos en esta mesa después de la ceremonia.', fa: 'سلام! بعد از مراسم در این میز به شهروندان نو کمک می‌کنم.' },
          { en: 'I have spare flags. But I ran out of something important.', es: 'Tengo banderas de sobra. Pero se me acabó algo importante.', fa: 'بیرق اضافه دارم. اما یک چیز مهم تمام شده است.' }
        ]
      },
      q: { en: 'New citizens want to vote soon. What should I hand them? Bring it, and the flags are yours!', es: 'Los nuevos ciudadanos quieren votar pronto. ¿Qué les doy? ¡Tráelo y las banderas son tuyas!', fa: 'شهروندان نو می‌خواهند زود رأی بدهند. به آن‌ها چه بدهم؟ بیاورش، بیرق‌ها مال تو!' },
      choices: [
        { ok: true, at: [9, 15], icon: '📝', t: { en: 'Voter sign-up forms', es: 'Formularios para inscribirse a votar', fa: 'فورمه‌های ثبت نام رأی‌دهی' },
          why: { en: 'Yes! In Virginia, you must register before you can vote. These forms help new citizens sign up.', es: '¡Sí! En Virginia, debes inscribirte antes de votar. Estos formularios ayudan a los nuevos ciudadanos.', fa: 'بله! در ویرجینیا، پیش از رأی دادن باید ثبت نام کنی. این فورمه‌ها به شهروندان نو کمک می‌کنند.' } },
        { at: [15, 3], icon: '🧾', t: { en: 'Tax forms from the library', es: 'Formularios de impuestos de la biblioteca', fa: 'فورمه‌های مالیات از کتابخانه' },
          why: { en: 'Paying taxes is a duty. But a tax form does not help anyone vote.', es: 'Pagar impuestos es un deber. Pero un formulario de impuestos no ayuda a votar.', fa: 'مالیات دادن وظیفه است. اما فورمهٔ مالیات به رأی دادن کمک نمی‌کند.' } },
        { at: [3, 5], icon: '⚖️', t: { en: 'Jury letters from the court', es: 'Cartas de jurado del tribunal', fa: 'نامه‌های هیئت منصفه از محکمه' },
          why: { en: 'You do not ask for jury service. The court sends that letter when it calls you.', es: 'Uno no pide ser jurado. El tribunal manda esa carta cuando te llama.', fa: 'کسی خودش هیئت منصفه را نمی‌خواهد. محکمه وقتی تو را بخواهد آن نامه را می‌فرستد.' } }
      ],
      item: { icon: '🚩', name: { en: 'A box of dry flags', es: 'Una caja de banderas secas', fa: 'یک صندوق بیرق خشک' } }
    }
  },

  scraps: [[1, 1], [26, 1], [1, 20]],
  smudges: [[20, 8], [10, 19]],

  challenge: {
    at: [15, 13],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // duties (MUST) go to the courthouse plaza, where the law is; responsibilities (SHOULD) to the garden by the polling place
    zones: [{ bin: 'duty', x: 6, y: 6, w: 3, h: 2 }, { bin: 'resp', x: 6, y: 18, w: 3, h: 2 }],
    stat: 'mov',
    title: { en: 'Must or should?', es: '¿Debes o deberías?', fa: 'حتمی یا بهتر است؟' },
    intro: { en: 'Carry each card: duties you MUST do to the courthouse, responsibilities you SHOULD do to the garden.',
      es: 'Lleva cada tarjeta: los deberes (DEBES) al tribunal, las responsabilidades (DEBERÍAS) al jardín.',
      fa: 'هر کارت را ببر: وظیفه‌ها (حتمی) پیش محکمه، مسئولیت‌ها (بهتر است) به باغچه.' },
    bins: [
      { id: 'duty', icon: '⚖️', label: { en: 'Duty', es: 'Deber', fa: 'وظیفه' }, sub: { en: 'the law says you MUST', es: 'la ley dice que DEBES', fa: 'قانون می‌گوید حتماً باید' } },
      { id: 'resp', icon: '🤝', label: { en: 'Responsibility', es: 'Responsabilidad', fa: 'مسئولیت' }, sub: { en: 'a good citizen SHOULD', es: 'un buen ciudadano DEBERÍA', fa: 'یک شهروند خوب بهتر است' } }
    ],
    items: [
      { bin: 'duty', t: { en: 'Obey federal, state and local laws', es: 'Obedecer las leyes federales, estatales y locales', fa: 'پیروی از قانون‌های فدرال، ایالتی و محلی' },
        why: { en: 'A duty. Everyone MUST obey the law. Breaking it can bring a fine or jail.', es: 'Un deber. Todos DEBEN obedecer la ley. Romperla puede traer una multa o la cárcel.', fa: 'وظیفه. همه حتماً باید از قانون پیروی کنند. شکستن آن جریمه یا زندان دارد.' } },
      { bin: 'duty', t: { en: 'Pay taxes', es: 'Pagar impuestos', fa: 'مالیات دادن' },
        why: { en: 'A duty. The law says you MUST pay taxes. Taxes pay for roads and schools.', es: 'Un deber. La ley dice que DEBES pagar impuestos. Pagan caminos y escuelas.', fa: 'وظیفه. قانون می‌گوید حتماً باید مالیات بدهی. مالیات پول سرک و مکتب است.' } },
      { bin: 'duty', t: { en: 'Serve on a jury when called', es: 'Servir en un jurado si te llaman', fa: 'خدمت در هیئت منصفه وقتی خواستند' },
        why: { en: 'A duty. When the court calls you to a [[jury|jury]], you MUST go.', es: 'Un deber. Cuando el tribunal te llama a un [[jury|jurado]], DEBES ir.', fa: 'وظیفه. وقتی محکمه تو را به [[jury|هیئت منصفه]] بخواهد، حتماً باید بروی.' } },
      { bin: 'duty', t: { en: 'Men 18 to 25 register for Selective Service', es: 'Los hombres de 18 a 25 se inscriben en el Servicio Selectivo', fa: 'مردان ۱۸ تا ۲۵ ساله برای خدمت عسکری ثبت نام می‌کنند' },
        why: { en: 'A duty. The law says men 18 to 25 MUST sign up, in case of a draft.', es: 'Un deber. La ley dice que los hombres de 18 a 25 DEBEN inscribirse, por si hay reclutamiento.', fa: 'وظیفه. قانون می‌گوید مردان ۱۸ تا ۲۵ ساله حتماً ثبت نام کنند، اگر عسکر لازم شود.' } },
      { bin: 'resp', t: { en: 'Vote in elections', es: 'Votar en las elecciones', fa: 'رأی دادن در انتخابات' },
        why: { en: 'A responsibility. You SHOULD vote, but no law forces you to.', es: 'Una responsabilidad. DEBERÍAS votar, pero ninguna ley te obliga.', fa: 'مسئولیت. بهتر است رأی بدهی، اما هیچ قانونی مجبورت نمی‌کند.' } },
      { bin: 'resp', t: { en: 'Stay informed about the news', es: 'Mantenerse informado de las noticias', fa: 'از خبرها آگاه ماندن' },
        why: { en: 'A responsibility. Good citizens learn about issues, but no law makes you read the news.', es: 'Una responsabilidad. Los buenos ciudadanos se informan, pero ninguna ley te obliga a leer noticias.', fa: 'مسئولیت. شهروندان خوب از مسائل آگاه می‌شوند، اما هیچ قانونی مجبورت نمی‌کند خبر بخوانی.' } },
      { bin: 'resp', t: { en: 'Volunteer in your community', es: 'Ser voluntario en tu comunidad', fa: 'رضاکاری در جامعهٔ خودت' },
        why: { en: 'A responsibility. Helping your community is a good choice, not a law.', es: 'Una responsabilidad. Ayudar a tu comunidad es una buena elección, no una ley.', fa: 'مسئولیت. کمک به جامعه یک انتخاب خوب است، نه یک قانون.' } },
      { bin: 'resp', t: { en: 'Respect the rights of others', es: 'Respetar los derechos de los demás', fa: 'احترام به حقوق دیگران' },
        why: { en: 'A responsibility. Good citizens SHOULD respect other people\'s rights and ideas.', es: 'Una responsabilidad. Los buenos ciudadanos DEBERÍAN respetar los derechos e ideas de otros.', fa: 'مسئولیت. شهروندان خوب بهتر است به حقوق و نظر دیگران احترام بگذارند.' } }
    ],
    success: { en: 'Every card is in the right place! Duties are a MUST; responsibilities are a SHOULD.', es: '¡Cada tarjeta está en su lugar! Los deberes son un DEBES; las responsabilidades, un DEBERÍAS.', fa: 'هر کارت در جای درست است! وظیفه حتمی است؛ مسئولیت بهتر است.' }
  },

  boss: {
    at: [22, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Shrugging Grump', es: 'El Gruñón Indiferente', fa: 'غرغروی بی‌پروا' },
    appear: { en: 'The Shrugging Grump is hiding in the fog by Market Square!', es: '¡El Gruñón Indiferente se esconde en la niebla junto a Market Square!', fa: 'غرغروی بی‌پروا در مه کنار میدان بازار پنهان است!' },
    taunt: { en: 'Vote? Help out? Jury? Bah! Let somebody else do it. I am staying on my couch!', es: '¿Votar? ¿Ayudar? ¿Jurado? ¡Bah! Que lo haga otro. ¡Yo me quedo en mi sofá!', fa: 'رأی؟ کمک؟ هیئت منصفه؟ بَه! بگذار کس دیگر بکند. من روی کوچ خود می‌مانم!' },
    win: { en: 'The fog lifts off Market Square. Charter page 3.1 floats down into your hands!', es: 'La niebla se va de Market Square. ¡La página 3.1 de la carta cae en tus manos!', fa: 'مه از میدان بازار کنار می‌رود. صفحهٔ ۳.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What are the two ways to become a US citizen?', es: '¿Cuáles son las dos formas de ser ciudadano de EE. UU.?', fa: 'دو راه شهروند امریکا شدن کدام است؟' },
        choices: [
          { en: 'By birth or by naturalization', es: 'Por nacimiento o por naturalización', fa: 'از راه تولد یا تابعیت‌گیری' },
          { en: 'By voting or by paying taxes', es: 'Votando o pagando impuestos', fa: 'با رأی دادن یا مالیات دادن' },
          { en: 'By buying land or a house', es: 'Comprando tierra o una casa', fa: 'با خریدن زمین یا خانه' },
          { en: 'By working or by going to school', es: 'Trabajando o yendo a la escuela', fa: 'با کار کردن یا رفتن به مکتب' }],
        answer: 0,
        why: { en: 'You are a citizen by birth, or you become one by naturalization.', es: 'Eres ciudadano por nacimiento, o te haces ciudadano por naturalización.', fa: 'یا از راه تولد شهروند هستی، یا از راه تابعیت‌گیری شهروند می‌شوی.' } },
      { q: { en: 'A baby is born in Alexandria, Virginia. Why is she a US citizen?', es: 'Una bebé nace en Alexandria, Virginia. ¿Por qué es ciudadana de EE. UU.?', fa: 'یک نوزاد دختر در الکساندریا، ویرجینیا، به دنیا می‌آید. چرا شهروند امریکا است؟' },
        choices: [
          { en: 'The 14th Amendment', es: 'Por la Enmienda 14', fa: 'به خاطر متمم چهاردهم' },
          { en: 'She passed a test', es: 'Pasó un examen', fa: 'امتحان را کامیاب شد' },
          { en: 'She took the oath', es: 'Hizo el juramento', fa: 'سوگند یاد کرد' },
          { en: 'Her parents voted', es: 'Sus padres votaron', fa: 'والدینش رأی دادند' }],
        answer: 0,
        why: { en: 'The 14th Amendment says people born in the US are citizens, no test needed.', es: 'La Enmienda 14 dice que los nacidos en EE. UU. son ciudadanos, sin examen.', fa: 'متمم چهاردهم می‌گوید کسانی که در امریکا به دنیا آمده‌اند شهروند هستند، بدون امتحان.' } },
      { q: { en: 'How old must a person usually be to apply for naturalization?', es: '¿Qué edad debe tener alguien, casi siempre, para pedir la naturalización?', fa: 'برای درخواست تابعیت، معمولاً یک نفر چند ساله باید باشد؟' },
        choices: [
          { en: '18 or older', es: '18 o más', fa: '۱۸ یا بیشتر' },
          { en: '12 or older', es: '12 o más', fa: '۱۲ یا بیشتر' },
          { en: '30 or older', es: '30 o más', fa: '۳۰ یا بیشتر' },
          { en: '65 or older', es: '65 o más', fa: '۶۵ یا بیشتر' }],
        answer: 0,
        why: { en: 'To apply for naturalization, a person must be at least 18 years old.', es: 'Para pedir la naturalización, la persona debe tener al menos 18 años.', fa: 'برای درخواست تابعیت، یک نفر باید دست کم ۱۸ ساله باشد.' } },
      { q: { en: 'Usually, how long must someone be a permanent resident before applying?', es: 'Casi siempre, ¿cuánto tiempo debe alguien ser residente permanente antes de pedirla?', fa: 'معمولاً، یک نفر پیش از درخواست چند سال باید مقیم دائم باشد؟' },
        choices: [
          { en: '5 years', es: '5 años', fa: '۵ سال' },
          { en: '1 year', es: '1 año', fa: '۱ سال' },
          { en: '10 years', es: '10 años', fa: '۱۰ سال' },
          { en: '20 years', es: '20 años', fa: '۲۰ سال' }],
        answer: 0,
        why: { en: 'Usually 5 years as a permanent resident. It is 3 years if married to a citizen.', es: 'Casi siempre 5 años como residente permanente. Son 3 si estás casado con un ciudadano.', fa: 'معمولاً ۵ سال مقیم دائم. اگر با شهروند ازدواج کرده باشی، ۳ سال است.' } },
      { q: { en: 'A permanent resident is married to a US citizen. How long must she usually wait?', es: 'Una residente permanente está casada con un ciudadano. ¿Cuánto debe esperar casi siempre?', fa: 'یک مقیم دائم با یک شهروند امریکا ازدواج کرده. معمولاً چند سال باید صبر کند؟' },
        choices: [
          { en: '3 years', es: '3 años', fa: '۳ سال' },
          { en: '5 years', es: '5 años', fa: '۵ سال' },
          { en: '1 month', es: '1 mes', fa: '۱ ماه' },
          { en: '8 years', es: '8 años', fa: '۸ سال' }],
        answer: 0,
        why: { en: 'If you are married to a citizen, the wait is usually 3 years, not 5.', es: 'Si estás casado con un ciudadano, la espera casi siempre es de 3 años, no 5.', fa: 'اگر با یک شهروند ازدواج کرده باشی، معمولاً ۳ سال صبر می‌کنی، نه ۵.' } },
      { q: { en: 'What tests does a person pass at the naturalization interview?', es: '¿Qué exámenes pasa una persona en la entrevista de naturalización?', fa: 'یک نفر در مصاحبهٔ تابعیت کدام امتحان‌ها را کامیاب می‌شود؟' },
        choices: [
          { en: 'English and civics', es: 'Inglés y educación cívica', fa: 'انگلیسی و مدنی' },
          { en: 'Math and science', es: 'Matemáticas y ciencias', fa: 'ریاضی و ساینس' },
          { en: 'Driving and swimming', es: 'Manejar y nadar', fa: 'دریوری و آب‌بازی' },
          { en: 'Art and music', es: 'Arte y música', fa: 'هنر و موسیقی' }],
        answer: 0,
        why: { en: 'There is an English test and a civics test about US history and government.', es: 'Hay un examen de inglés y uno de cívica sobre la historia y el gobierno de EE. UU.', fa: 'یک امتحان انگلیسی و یک امتحان مدنی دربارهٔ تاریخ و حکومت امریکا هست.' } },
      { q: { en: 'What is the last step to become a citizen by naturalization?', es: '¿Cuál es el último paso para hacerse ciudadano por naturalización?', fa: 'آخرین قدم برای شهروند شدن از راه تابعیت‌گیری چیست؟' },
        choices: [
          { en: 'Take the Oath of Allegiance', es: 'Hacer el Juramento de Lealtad', fa: 'سوگند وفاداری یاد کردن' },
          { en: 'Vote in a city council election', es: 'Votar en una elección del concejo', fa: 'رأی دادن در انتخابات شورای شهر' },
          { en: 'Serve on a court jury', es: 'Servir en un jurado', fa: 'خدمت در هیئت منصفه' },
          { en: 'Get a Virginia driver\'s license', es: 'Sacar la licencia de Virginia', fa: 'گرفتن لایسنس دریوری ویرجینیا' }],
        answer: 0,
        why: { en: 'At a ceremony, new citizens take the Oath of Allegiance to the United States.', es: 'En una ceremonia, los nuevos ciudadanos hacen el Juramento de Lealtad a Estados Unidos.', fa: 'در یک مراسم، شهروندان نو به ایالات متحده سوگند وفاداری یاد می‌کنند.' } },
      { q: { en: 'Which one is a responsibility, not a duty?', es: '¿Cuál es una responsabilidad, no un deber?', fa: 'کدام یکی مسئولیت است، نه وظیفه؟' },
        choices: [
          { en: 'Voting in elections', es: 'Votar en las elecciones', fa: 'رأی دادن در انتخابات' },
          { en: 'Paying your taxes', es: 'Pagar tus impuestos', fa: 'دادن مالیات خود' },
          { en: 'Obeying the laws', es: 'Obedecer las leyes', fa: 'پیروی از قانون‌ها' },
          { en: 'Serving on a jury', es: 'Servir en un jurado', fa: 'خدمت در هیئت منصفه' }],
        answer: 0,
        why: { en: 'Voting is a responsibility: you SHOULD vote. Taxes, laws and juries are duties: you MUST.', es: 'Votar es una responsabilidad: DEBERÍAS. Impuestos, leyes y jurados son deberes: DEBES.', fa: 'رأی دادن مسئولیت است: بهتر است. مالیات، قانون و هیئت منصفه وظیفه است: حتمی.' } }
    ]
  },

  learned: [
    { en: 'You can be a US [[citizen|citizen]] by birth, or by [[naturalization|naturalization]].', es: 'Puedes ser [[citizen|ciudadano]] de EE. UU. por nacimiento o por [[naturalization|naturalización]].', fa: 'می‌توانی از راه تولد یا [[naturalization|تابعیت‌گیری]] [[citizen|شهروند]] امریکا باشی.' },
    { en: 'To naturalize: be a [[permanent resident|permanent resident]], be 18, pass the tests, and take the oath.', es: 'Para naturalizarte: ser [[permanent resident|residente permanente]], tener 18, pasar los exámenes y hacer el juramento.', fa: 'برای تابعیت: [[permanent resident|مقیم دائم]] باش، ۱۸ ساله باش، امتحان‌ها را کامیاب شو و سوگند یاد کن.' },
    { en: '[[duty|Duties]] are a MUST, like jury service. [[responsibility|Responsibilities]] are a SHOULD, like voting.', es: 'Los [[duty|deberes]] son un DEBES, como ser jurado. Las [[responsibility|responsabilidades]] son un DEBERÍAS, como votar.', fa: '[[duty|وظیفه‌ها]] حتمی هستند، مثل هیئت منصفه. [[responsibility|مسئولیت‌ها]] بهتر است، مثل رأی دادن.' }
  ],
  reflect: {
    q: { en: 'What is one way you can help your community this year?', es: '¿De qué forma puedes ayudar a tu comunidad este año?', fa: 'امسال به چه راهی می‌توانی به جامعهٔ خود کمک کنی؟' },
    starter: { en: 'This year, I can help my community by', es: 'Este año, puedo ayudar a mi comunidad', fa: 'امسال، می‌توانم به جامعه‌ام کمک کنم با' }
  }
};
