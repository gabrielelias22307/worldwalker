/* CIVICWALKER · Episode 2.3 · Nation or State? (Federalism)
   Richmond, Virginia, today. North: Capitol Square, the Virginia State Capitol (the building Thomas Jefferson
   designed) with its paved walks, a house in the north-west corner and the public library in the north-east.
   A city street runs east-west across the middle. South of it: a public school and a house (west), the driver's
   license office and a post office (east). The James River runs along the south edge, with a small dock.
   The charter stone asks the student to carry each power to the group that holds it: the nation (by the post
   office), the state (in front of the Capitol) or both (between them, by the river walk). */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'GOVT',
  title: { en: 'Nation or State?', es: '¿Nación o estado?', fa: 'ملت یا ایالت؟' },
  place: { en: 'Richmond, Virginia, today', es: 'Richmond, Virginia, hoy', fa: 'ریچموند، ویرجینیا، امروز' },
  intro: [
    { en: 'The Grump tore the page about who holds which powers. Now everyone is mixed up!',
      es: 'El Gruñón rompió la página sobre quién tiene cada poder. ¡Ahora todos están confundidos!',
      fa: 'غرغرو صفحهٔ «کدام قدرت دست کیست» را پاره کرد. حالا همه گیج شده‌اند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: Richmond on the world map (no timeline in this game) */
  scenes: {
    at: [-77.43, 37.54],
    start: [
      { en: 'Richmond is the capital of Virginia. The James River runs through it.',
        es: 'Richmond es la capital de Virginia. El río James pasa por la ciudad.',
        fa: 'ریچموند پایتخت ویرجینیا است. دریای جیمز از میان آن می‌گذرد.' },
      { en: 'On Capitol Square stands the Virginia State Capitol. Thomas Jefferson designed it.',
        es: 'En la Plaza del Capitolio está el Capitolio de Virginia. Thomas Jefferson lo diseñó.',
        fa: 'در میدان کاپیتول، ساختمان کاپیتول ایالت ویرجینیا ایستاده است. تامس جفرسن آن را طرح کرد.' },
      { en: 'Virginia makes many of its own laws. But some powers belong to the whole nation.',
        es: 'Virginia hace muchas de sus propias leyes. Pero algunos poderes son de toda la nación.',
        fa: 'ویرجینیا بسیاری از قانون‌هایش را خودش می‌سازد. اما بعضی قدرت‌ها مال تمام ملت است.' }
    ],
    page: { en: 'The US splits power between the nation and the states. This is called federalism.',
      es: 'EE. UU. divide el poder entre la nación y los estados. Esto se llama federalismo.',
      fa: 'امریکا قدرت را میان ملت و ایالت‌ها تقسیم می‌کند. این را فدرالیزم می‌گویند.' },
    guess: {
      q: { en: 'Who do you think runs the public schools in Virginia?', es: '¿Quién crees que dirige las escuelas públicas en Virginia?', fa: 'فکر می‌کنی مکتب‌های دولتی ویرجینیا را کی اداره می‌کند؟' },
      choices: [
        { t: { en: '🏛️ The state', es: '🏛️ El estado', fa: '🏛️ ایالت' }, ok: true },
        { t: { en: '🦅 The nation', es: '🦅 La nación', fa: '🦅 حکومت ملی' } }
      ],
      why: { en: 'States run public schools, with local school boards. It is a power kept for the states.', es: 'Los estados dirigen las escuelas públicas, con juntas escolares locales. Es un poder de los estados.', fa: 'ایالت‌ها مکتب‌های دولتی را با شوراهای محلی مکتب اداره می‌کنند. این قدرتِ ایالت‌هاست.' }
    },
    next: {
      q: { en: 'Next: citizenship. Is serving on a jury a duty or just a choice?', es: 'Ahora: la ciudadanía. ¿Servir en un jurado es un deber o solo una opción?', fa: 'بعدی: شهروندی. خدمت در هیئت منصفه وظیفه است یا فقط یک انتخاب؟' },
      choices: [
        { t: { en: 'A duty you must do', es: 'Un deber que debes cumplir', fa: 'وظیفه‌ای که باید انجام بدهی' }, ok: true },
        { t: { en: 'Just a free choice', es: 'Solo una opción libre', fa: 'فقط یک انتخاب آزاد' } }
      ],
      why: { en: 'Jury service is a duty, like obeying laws and paying taxes. Voting is a responsibility.', es: 'Servir en un jurado es un deber, como obedecer las leyes y pagar impuestos. Votar es una responsabilidad.', fa: 'خدمت در هیئت منصفه وظیفه است، مثل پیروی از قانون و پرداخت مالیات. رأی دادن یک مسئولیت است.' }
    }
  },
  /* houses: who works or lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandma June', es: 'Abuela June', fa: 'مادرکلان جون' },
      look: { skin: 5, hair: '#e0e0e0', shirt: '#7a4a9a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'I have voted for many Virginia governors in my long life.', es: 'He votado por muchos gobernadores de Virginia en mi larga vida.', fa: 'در عمر درازم به والی‌های زیادی در ویرجینیا رأی داده‌ام.' },
        { en: 'The [[governor|governor]] of Virginia serves a 4-year term.', es: 'El [[governor|gobernador]] de Virginia sirve un período de 4 años.', fa: '[[governor|والی]] ویرجینیا برای یک دورهٔ ۴ ساله کار می‌کند.' },
        { en: 'A governor cannot serve two terms in a row. So we choose often!', es: 'Un gobernador no puede servir dos períodos seguidos. ¡Así que elegimos seguido!', fa: 'والی نمی‌تواند دو دوره پشت سر هم کار کند. پس ما زیاد انتخاب می‌کنیم!' }
      ] },
    { at: [28, 2], name: { en: 'Amira', es: 'Amira', fa: 'امیره' },
      look: { skin: 3, hair: '#1a1008', shirt: '#2f7a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am the librarian. This book is the Virginia [[constitution|Constitution]].', es: 'Soy la bibliotecaria. Este libro es la [[constitution|Constitución]] de Virginia.', fa: 'من کتابدار هستم. این کتاب [[constitution|قانون اساسی]] ویرجینیا است.' },
        { en: 'The House of Delegates has 100 members. They serve 2-year terms.', es: 'La Cámara de Delegados tiene 100 miembros. Sirven períodos de 2 años.', fa: 'مجلس نمایندگان ۱۰۰ عضو دارد. آنها دوره‌های ۲ ساله کار می‌کنند.' },
        { en: 'The Senate of Virginia has 40 members. They serve 4-year terms.', es: 'El Senado de Virginia tiene 40 miembros. Sirven períodos de 4 años.', fa: 'سنای ویرجینیا ۴۰ عضو دارد. آنها دوره‌های ۴ ساله کار می‌کنند.' }
      ] },
    { at: [4, 13], name: { en: 'Mr. Reyes', es: 'Sr. Reyes', fa: 'آقای ریس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a5a9a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome to our public school! I teach history here.', es: '¡Bienvenido a nuestra escuela pública! Aquí enseño historia.', fa: 'به مکتب دولتی ما خوش آمدی! من اینجا تاریخ درس می‌دهم.' },
        { en: 'The US Constitution never gives schools to the nation.', es: 'La Constitución de EE. UU. nunca le da las escuelas a la nación.', fa: 'قانون اساسی امریکا هیچ وقت مکتب‌ها را به حکومت ملی نمی‌دهد.' },
        { en: 'So the [[tenth amendment|10th Amendment]] keeps that power for the states.', es: 'Por eso la [[tenth amendment|Décima Enmienda]] guarda ese poder para los estados.', fa: 'پس [[tenth amendment|متمم دهم]] این قدرت را برای ایالت‌ها نگه می‌دارد.' }
      ] },
    { at: [11, 13], name: { en: 'Diego', es: 'Diego', fa: 'دیگو' },
      look: { skin: 1, hair: '#3a2416', shirt: '#d9542b', pants: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'My family just moved here from Alexandria, Virginia.', es: 'Mi familia acaba de mudarse aquí desde Alexandria, Virginia.', fa: 'فامیل من تازه از الکساندریای ویرجینیا اینجا آمده است.' },
        { en: 'Alexandria is an [[independent city|independent city]]. It is not part of a county.', es: 'Alexandria es una [[independent city|ciudad independiente]]. No es parte de un condado.', fa: 'الکساندریا یک [[independent city|شهر مستقل]] است. جزء هیچ کاونتی نیست.' },
        { en: 'Its people elect a city council and a school board.', es: 'Su gente elige un concejo municipal y una junta escolar.', fa: 'مردمش یک شورای شهر و یک شورای مکتب‌ها را انتخاب می‌کنند.' }
      ] },
    { at: [21, 13], name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 1, hair: '#120c08', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a clerk here. Virginia gives out driver\'s licenses in this office.', es: 'Aquí soy empleada. Virginia da licencias de conducir en esta oficina.', fa: 'من اینجا کارمند هستم. ویرجینیا در این دفتر لایسنس دریوری می‌دهد.' },
        { en: 'Each state makes its own rules for new drivers.', es: 'Cada estado hace sus propias reglas para los nuevos conductores.', fa: 'هر ایالت قانون‌های خودش را برای دریوران نو می‌سازد.' },
        { en: 'Marriage licenses come from the state too. Those are state powers.', es: 'Las licencias de matrimonio también vienen del estado. Esos son poderes del estado.', fa: 'جواز ازدواج هم از ایالت می‌آید. این‌ها قدرت‌های ایالت است.' }
      ] },
    { at: [28, 13], name: { en: 'Mr. Wu', es: 'Sr. Wu', fa: 'آقای وو' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#2f5f9a', pants: '#2a2a3a', hat: '#2f5f9a', style: 'short' },
      lines: [
        { en: 'This is a post office of the United States, not of Virginia.', es: 'Esta es una oficina de correos de Estados Unidos, no de Virginia.', fa: 'این پسته‌خانهٔ ایالات متحده است، نه پسته‌خانهٔ ویرجینیا.' },
        { en: 'The Constitution gives Congress the power to set up post offices.', es: 'La Constitución le da al Congreso el poder de crear oficinas de correos.', fa: 'قانون اساسی به کانگرس قدرت ساختن پسته‌خانه‌ها را می‌دهد.' },
        { en: 'So a letter needs the same stamp in every state.', es: 'Por eso una carta necesita la misma estampilla en cada estado.', fa: 'برای همین یک نامه در هر ایالت همان تکت پسته را لازم دارد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-9): Capitol Square, grass and trees around the Capitol (D) and its paved walks (l); a house (R over h)
     in the north-west corner, the library (Q over h) in the north-east.
     y 10-11: a city street (l) across the whole map.
     South (y 12-16): the school and a house (west), the license office (Q) and the post office (east).
     y 17: the river walk (s). y 18-21: the James River (~), with a small dock (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR.....DDDDDDDDDDDD.....QQQ.T',
    'T.hdh.....DDDDDDDDDDDD.....hdh.T',
    'T....T....DDDDDDDDDDDD....T....T',
    'T.........llllllllllll.........T',
    'T..x...T..llllllllllll..T......T',
    'T....T....llllllllllll....T....T',
    'T.T.......llllllllllll...x...T.T',
    'T.....T...llllllllllll..T......T',
    'TT...........llllll...........TT',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.RRRRR...RRR......QQQQQ..RRRRRT',
    'T.hhdhh...hdh......hhdhh..hhdhhT',
    'T........x.....................T',
    'T..T.......T.......T.......T...T',
    'T..............................T',
    'TssssssssssssssssssssssssssssssT',
    '~~~~~~~~~~~~~~~kk~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  start: [15, 7],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [5, 7], at: [5, 9], decor: 'feather',
      clue: { en: 'From this note, walk 2 steps south, toward the city street.', es: 'Desde esta nota, camina 2 pasos al sur, hacia la calle.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، طرف سرک شهر.' },
      text: { en: 'A quill pen! Richmond has been the capital of Virginia since 1780.', es: '¡Una pluma! Richmond es la capital de Virginia desde 1780.', fa: 'یک قلم پَر! ریچموند از سال ۱۷۸۰ پایتخت ویرجینیا است.' } },
    { clueAt: [20, 16], at: [24, 16], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, along the river walk.', es: 'Desde esta nota, camina 4 pasos al este, por el paseo del río.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار راه دریا.' },
      text: { en: 'A river shell! The James River flows east to the Chesapeake Bay.', es: '¡Una concha de río! El río James corre al este hasta la bahía de Chesapeake.', fa: 'یک صدف دریایی! دریای جیمز به طرف شرق تا خلیج چیزاپیک می‌رود.' } }
  ],

  words: {
    federalism: { en: 'power is split between the nation and the states', es: 'el poder se divide entre la nación y los estados', fa: 'قدرت میان حکومت ملی و ایالت‌ها تقسیم می‌شود' },
    'delegated powers': { en: 'powers only the national government has', es: 'poderes que solo tiene el gobierno nacional', fa: 'قدرت‌هایی که فقط حکومت ملی دارد' },
    'reserved powers': { en: 'powers only the states have', es: 'poderes que solo tienen los estados', fa: 'قدرت‌هایی که فقط ایالت‌ها دارند' },
    'concurrent powers': { en: 'powers both the nation and the states have', es: 'poderes que tienen la nación y los estados', fa: 'قدرت‌هایی که هم حکومت ملی و هم ایالت‌ها دارند' },
    'supremacy clause': { en: 'the part of the Constitution that says national laws win over state laws', es: 'la parte de la Constitución que dice que las leyes nacionales ganan a las leyes estatales', fa: 'بخشی از قانون اساسی که می‌گوید قانون ملی بر قانون ایالت برتری دارد' },
    'tenth amendment': { en: 'it keeps for the states or the people the powers not given to the nation', es: 'guarda para los estados o el pueblo los poderes que no se dieron a la nación', fa: 'قدرت‌هایی را که به حکومت ملی داده نشده، برای ایالت‌ها یا مردم نگه می‌دارد' },
    'general assembly': { en: 'the group that makes Virginia\'s state laws', es: 'el grupo que hace las leyes del estado de Virginia', fa: 'گروهی که قانون‌های ایالت ویرجینیا را می‌سازد' },
    governor: { en: 'the leader of a state government', es: 'el líder del gobierno de un estado', fa: 'رهبر حکومت یک ایالت' },
    constitution: { en: 'the plan of a government and its highest law', es: 'el plan de un gobierno y su ley más alta', fa: 'نقشهٔ یک حکومت و بالاترین قانون آن' },
    'independent city': { en: 'in Virginia, a city that is not part of any county', es: 'en Virginia, una ciudad que no es parte de ningún condado', fa: 'در ویرجینیا، شهری که جزء هیچ کاونتی نیست' },
    'local government': { en: 'the government of a county, city or town', es: 'el gobierno de un condado, una ciudad o un pueblo', fa: 'حکومت یک کاونتی، شهر یا قریه' }
  },

  npcs: [
    {
      x: 8, y: 5,
      name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      role: { en: 'Tour guide', es: 'Guía turística', fa: 'رهنمای سیاحان' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0392b', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome to Richmond, the capital of Virginia! Thomas Jefferson designed this Capitol.', es: '¡Bienvenido a Richmond, la capital de Virginia! Thomas Jefferson diseñó este Capitolio.', fa: 'به ریچموند، پایتخت ویرجینیا، خوش آمدی! تامس جفرسن این کاپیتول را طرح کرد.' },
        { en: 'Inside, the [[general assembly|General Assembly]] makes Virginia\'s state laws.', es: 'Adentro, la [[general assembly|Asamblea General]] hace las leyes del estado de Virginia.', fa: 'در داخل، [[general assembly|مجمع عمومی]] قانون‌های ایالت ویرجینیا را می‌سازد.' },
        { en: 'It has two houses: the House of Delegates and the Senate of Virginia.', es: 'Tiene dos cámaras: la Cámara de Delegados y el Senado de Virginia.', fa: 'دو مجلس دارد: مجلس نمایندگان و سنای ویرجینیا.' },
        { en: 'It began at Jamestown in 1619, one of the oldest in the Americas.', es: 'Empezó en Jamestown en 1619. Es una de las más antiguas de América.', fa: 'در سال ۱۶۱۹ در جیمزتاون شروع شد، یکی از قدیمی‌ترین‌ها در قارهٔ امریکا.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What are the two houses of Virginia\'s General Assembly?', es: '¿Cuáles son las dos cámaras de la Asamblea General de Virginia?', fa: 'دو مجلس مجمع عمومی ویرجینیا کدام‌ها هستند؟' },
        choices: [
          { ok: true, t: { en: 'House of Delegates and Senate', es: 'Cámara de Delegados y Senado', fa: 'مجلس نمایندگان و سنا' },
            why: { en: 'Yes! The House of Delegates and the Senate of Virginia make the state\'s laws.', es: '¡Sí! La Cámara de Delegados y el Senado de Virginia hacen las leyes del estado.', fa: 'بله! مجلس نمایندگان و سنای ویرجینیا قانون‌های ایالت را می‌سازند.' } },
          { t: { en: 'City Council and School Board', es: 'Concejo Municipal y Junta Escolar', fa: 'شورای شهر و شورای مکتب‌ها' },
            why: { en: 'Those are parts of a local government, like Alexandria\'s. They are not the General Assembly.', es: 'Esos son partes de un gobierno local, como el de Alexandria. No son la Asamblea General.', fa: 'این‌ها بخش‌های حکومت محلی‌اند، مثل الکساندریا. مجمع عمومی نیستند.' } },
          { t: { en: 'Congress and the Supreme Court', es: 'El Congreso y la Corte Suprema', fa: 'کانگرس و ستره محکمه' },
            why: { en: 'Those are parts of the national government in Washington, not Virginia\'s.', es: 'Esos son partes del gobierno nacional en Washington, no del de Virginia.', fa: 'این‌ها بخش‌های حکومت ملی در واشنگتن هستند، نه ویرجینیا.' } }
        ]
      }
    },
    {
      x: 23, y: 15,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Mail carrier', es: 'Cartero', fa: 'نامه‌رسان' },
      look: { skin: 5, hair: '#120c08', shirt: '#4a6a9a', pants: '#2a3a5a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'In the US, power is split between the nation and the states.', es: 'En EE. UU., el poder se divide entre la nación y los estados.', fa: 'در امریکا، قدرت میان حکومت ملی و ایالت‌ها تقسیم شده است.' },
        { en: 'That is called [[federalism|federalism]].', es: 'Eso se llama [[federalism|federalismo]].', fa: 'این را [[federalism|فدرالیزم]] می‌گویند.' },
        { en: 'Some powers belong only to the nation. They are [[delegated powers|delegated powers]].', es: 'Algunos poderes son solo de la nación. Son los [[delegated powers|poderes delegados]].', fa: 'بعضی قدرت‌ها فقط مال حکومت ملی است. این‌ها [[delegated powers|قدرت‌های سپرده‌شده]] هستند.' },
        { en: 'Only the nation prints money, declares war, makes treaties and runs the post office.', es: 'Solo la nación imprime dinero, declara la guerra, firma tratados y dirige el correo.', fa: 'فقط حکومت ملی پول چاپ می‌کند، اعلان جنگ می‌کند، معاهده می‌بندد و پسته‌خانه را اداره می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which is a delegated power, held only by the nation?', es: '¿Cuál es un poder delegado, que solo tiene la nación?', fa: 'کدام یکی قدرت سپرده‌شده است که فقط حکومت ملی دارد؟' },
        choices: [
          { ok: true, t: { en: 'Printing money', es: 'Imprimir dinero', fa: 'چاپ پول' },
            why: { en: 'Right! Only the nation prints money, so every state uses the same dollar.', es: '¡Correcto! Solo la nación imprime dinero, así que cada estado usa el mismo dólar.', fa: 'درست! فقط حکومت ملی پول چاپ می‌کند، پس هر ایالت همان دالر را به کار می‌برد.' } },
          { t: { en: 'Running schools', es: 'Dirigir escuelas', fa: 'اداره کردن مکتب‌ها' },
            why: { en: 'No. States run public schools. That is a reserved power, kept for the states.', es: 'No. Los estados dirigen las escuelas públicas. Es un poder reservado para los estados.', fa: 'نه. ایالت‌ها مکتب‌های دولتی را اداره می‌کنند. این قدرت محفوظ ایالت‌هاست.' } },
          { t: { en: 'Giving licenses', es: 'Dar licencias', fa: 'دادن لایسنس' },
            why: { en: 'No. Each state gives its own driver\'s licenses. That is a state power.', es: 'No. Cada estado da sus propias licencias de conducir. Es un poder del estado.', fa: 'نه. هر ایالت لایسنس دریوری خودش را می‌دهد. این قدرت ایالت است.' } }
        ]
      }
    },
    {
      x: 6, y: 11,
      name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      role: { en: 'Crossing guard', es: 'Guardia de cruce', fa: 'نگهبان گذرگاه' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#f2c14e', pants: '#2a2a3a', hat: '#e07b39', style: 'long' },
      lines: [
        { en: 'Some powers belong to both the nation and the states.', es: 'Algunos poderes son de la nación y también de los estados.', fa: 'بعضی قدرت‌ها مال هم حکومت ملی و هم ایالت‌هاست.' },
        { en: 'They are [[concurrent powers|concurrent powers]], like taxes, courts and building roads.', es: 'Son los [[concurrent powers|poderes concurrentes]], como los impuestos, los tribunales y hacer caminos.', fa: 'این‌ها [[concurrent powers|قدرت‌های مشترک]] هستند، مثل مالیات، محکمه‌ها و ساختن سرک.' },
        { en: 'Both can make laws too. But what if two laws clash?', es: 'Los dos también pueden hacer leyes. Pero, ¿y si dos leyes chocan?', fa: 'هر دو قانون هم می‌سازند. اما اگر دو قانون با هم برخورد کنند چه؟' },
        { en: 'The [[supremacy clause|Supremacy Clause]] says the Constitution and national laws win.', es: 'La [[supremacy clause|Cláusula de Supremacía]] dice que ganan la Constitución y las leyes nacionales.', fa: '[[supremacy clause|مادهٔ برتری]] می‌گوید قانون اساسی و قانون‌های ملی برنده می‌شوند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'A state law clashes with the US Constitution. Which one wins?', es: 'Una ley estatal choca con la Constitución de EE. UU. ¿Cuál gana?', fa: 'یک قانون ایالت با قانون اساسی امریکا برخورد می‌کند. کدام برنده است؟' },
        choices: [
          { ok: true, t: { en: 'The US Constitution', es: 'La Constitución de EE. UU.', fa: 'قانون اساسی امریکا' },
            why: { en: 'Yes! The Supremacy Clause makes the Constitution the highest law of the land.', es: '¡Sí! La Cláusula de Supremacía hace de la Constitución la ley más alta del país.', fa: 'بله! مادهٔ برتری قانون اساسی را بالاترین قانون کشور می‌سازد.' } },
          { t: { en: 'The state\'s own law', es: 'La ley del propio estado', fa: 'قانون خود ایالت' },
            why: { en: 'No. Under the Supremacy Clause, a state law cannot beat the US Constitution.', es: 'No. Por la Cláusula de Supremacía, una ley estatal no le gana a la Constitución.', fa: 'نه. طبق مادهٔ برتری، قانون ایالت بر قانون اساسی امریکا برتری ندارد.' } },
          { t: { en: 'Whichever law is newer', es: 'La ley que sea más nueva', fa: 'هر قانونی که تازه‌تر است' },
            why: { en: 'No. Age does not matter. The Constitution and national laws come first.', es: 'No. La edad no importa. La Constitución y las leyes nacionales van primero.', fa: 'نه. کهنه یا نو بودن مهم نیست. قانون اساسی و قانون‌های ملی اول هستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 5, text: { en: 'CAPITOL SQUARE · RICHMOND, VIRGINIA · Virginia\'s General Assembly meets in the Capitol.', es: 'PLAZA DEL CAPITOLIO · RICHMOND, VIRGINIA · La Asamblea General de Virginia se reúne en el Capitolio.', fa: 'میدان کاپیتول · ریچموند، ویرجینیا · مجمع عمومی ویرجینیا در کاپیتول جلسه می‌کند.' } },
    { x: 25, y: 7, text: { en: 'PUBLIC LIBRARY · Read the Virginia Constitution inside.', es: 'BIBLIOTECA PÚBLICA · Lee adentro la Constitución de Virginia.', fa: 'کتابخانهٔ عمومی · در داخل قانون اساسی ویرجینیا را بخوان.' } },
    { x: 9, y: 14, text: { en: 'WEST: PUBLIC SCHOOL · EAST: LICENSE OFFICE AND POST OFFICE · RIVER WALK: SOUTH', es: 'OESTE: ESCUELA PÚBLICA · ESTE: OFICINA DE LICENCIAS Y CORREO · PASEO DEL RÍO: SUR', fa: 'غرب: مکتب دولتی · شرق: دفتر لایسنس و پسته‌خانه · راه دریا: جنوب' } }
  ],

  /* the quest: Leila (gold !) on the river walk, south-east -> Amir by the library, north-east
     -> find the school papers by the school (a power only states have), south-west -> back to Leila */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost School Papers', es: 'Los papeles escolares perdidos', fa: 'کاغذهای گمشدهٔ مکتب' },
    giver: {
      x: 18, y: 15,
      name: { en: 'Leila', es: 'Leila', fa: 'لیلا' },
      role: { en: 'New neighbor', es: 'Vecina nueva', fa: 'همسایهٔ نو' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2f8f8f', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'We just moved to Richmond. My son starts public school on Monday!', es: 'Acabamos de mudarnos a Richmond. ¡Mi hijo empieza la escuela pública el lunes!', fa: 'ما تازه به ریچموند آمده‌ایم. پسرم روز دوشنبه مکتب دولتی را شروع می‌کند!' },
        { en: 'But the wind took his school papers. Can you help me find them?', es: 'Pero el viento se llevó sus papeles de la escuela. ¿Me ayudas a encontrarlos?', fa: 'اما باد کاغذهای مکتبش را برد. کمکم می‌کنی آنها را پیدا کنم؟' }
      ],
      wait: { en: 'Ask Amir by the library, north across the street. He saw the wind.', es: 'Pregúntale a Amir junto a la biblioteca, al norte, cruzando la calle. Él vio el viento.', fa: 'از امیر کنار کتابخانه بپرس، شمال، آن طرف سرک. او باد را دید.' },
      thanks: { en: 'His papers! Now he can start school on Monday. Thank you!', es: '¡Sus papeles! Ahora puede empezar la escuela el lunes. ¡Gracias!', fa: 'کاغذهایش! حالا می‌تواند دوشنبه مکتب را شروع کند. تشکر!' }
    },
    contact: {
      x: 22, y: 5,
      name: { en: 'Amir', es: 'Amir', fa: 'امیر' },
      role: { en: 'Park worker', es: 'Trabajador del parque', fa: 'کارگر پارک' },
      look: { skin: 3, hair: '#1a1208', shirt: '#5a8a3a', pants: '#3a3a2a', hat: '#5a8a3a', style: 'short' },
      lines: [
        { en: 'Yes, I saw papers fly over the street, toward the west.', es: 'Sí, vi papeles volar sobre la calle, hacia el oeste.', fa: 'بله، دیدم کاغذها از بالای سرک به طرف غرب پرواز کردند.' },
        { en: 'The 10th Amendment keeps some powers for the states. They are [[reserved powers|reserved powers]].', es: 'La Décima Enmienda guarda algunos poderes para los estados. Son los [[reserved powers|poderes reservados]].', fa: 'متمم دهم بعضی قدرت‌ها را برای ایالت‌ها نگه می‌دارد. این‌ها [[reserved powers|قدرت‌های محفوظ]] هستند.' },
        { en: 'States run schools, give driver\'s licenses and set up [[local government|local governments]].', es: 'Los estados dirigen escuelas, dan licencias de conducir y crean [[local government|gobiernos locales]].', fa: 'ایالت‌ها مکتب‌ها را اداره می‌کنند، لایسنس دریوری می‌دهند و [[local government|حکومت‌های محلی]] می‌سازند.' },
        { en: 'Find the power only states have. Look by the school, south-west!', es: 'Busca el poder que solo tienen los estados. ¡Mira junto a la escuela, al suroeste!', fa: 'قدرتی را پیدا کن که فقط ایالت‌ها دارند. کنار مکتب، در جنوب غرب، ببین!' }
      ]
    },
    action: {
      type: 'find',
      at: [6, 15],
      hint: { en: 'Look by the school: a power only states have', es: 'Busca junto a la escuela: un poder que solo tienen los estados', fa: 'کنار مکتب ببین: قدرتی که فقط ایالت‌ها دارند' },
      found: { en: 'The school papers! They were lying in the grass by the public school.', es: '¡Los papeles escolares! Estaban en el pasto junto a la escuela pública.', fa: 'کاغذهای مکتب! روی سبزه کنار مکتب دولتی افتاده بودند.' },
      item: { icon: '📄', name: { en: 'School papers', es: 'Papeles escolares', fa: 'کاغذهای مکتب' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 16]],
  smudges: [[24, 9], [10, 16]],

  challenge: {
    at: [15, 9],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // the state's area is in front of the Virginia Capitol, the nation's by the post office, "both" on the river walk path between them
    zones: [{ bin: 'state', x: 11, y: 4, w: 4, h: 2 }, { bin: 'nation', x: 29, y: 14, w: 2, h: 3 }, { bin: 'both', x: 13, y: 15, w: 4, h: 2 }],
    stat: 'pla',
    title: { en: 'Who holds this power?', es: '¿Quién tiene este poder?', fa: 'این قدرت دست کیست؟' },
    intro: { en: 'Carry each power card to the group that holds it: the nation, the state, or both.',
      es: 'Lleva cada tarjeta de poder al grupo que lo tiene: la nación, el estado o los dos.',
      fa: 'هر کارت قدرت را پیش گروهی ببر که آن را دارد: حکومت ملی، ایالت، یا هر دو.' },
    bins: [
      { id: 'nation', icon: '🦅', label: { en: 'The nation', es: 'La nación', fa: 'حکومت ملی' }, sub: { en: 'delegated powers: only the nation', es: 'poderes delegados: solo la nación', fa: 'قدرت‌های سپرده‌شده: فقط حکومت ملی' } },
      { id: 'state', icon: '🏛️', label: { en: 'The state', es: 'El estado', fa: 'ایالت' }, sub: { en: 'reserved powers: only the states', es: 'poderes reservados: solo los estados', fa: 'قدرت‌های محفوظ: فقط ایالت‌ها' } },
      { id: 'both', icon: '🤝', label: { en: 'Both', es: 'Los dos', fa: 'هر دو' }, sub: { en: 'concurrent powers: nation and states', es: 'poderes concurrentes: nación y estados', fa: 'قدرت‌های مشترک: حکومت ملی و ایالت‌ها' } }
    ],
    items: [
      { bin: 'nation', t: { en: 'Print dollar bills and coins', es: 'Imprimir billetes y monedas de dólar', fa: 'چاپ نوت‌ها و سکه‌های دالر' },
        why: { en: 'Only the nation prints money, so every state uses the same dollar. A [[delegated powers|delegated power]].', es: 'Solo la nación imprime dinero, así todos los estados usan el mismo dólar. Un [[delegated powers|poder delegado]].', fa: 'فقط حکومت ملی پول چاپ می‌کند، پس همه ایالت‌ها یک دالر دارند. [[delegated powers|قدرت سپرده‌شده]].' } },
      { bin: 'nation', t: { en: 'Declare war on another country', es: 'Declarar la guerra a otro país', fa: 'اعلان جنگ به کشور دیگر' },
        why: { en: 'Only Congress can declare war, for the whole nation. A state cannot.', es: 'Solo el Congreso puede declarar la guerra, por toda la nación. Un estado no puede.', fa: 'فقط کانگرس می‌تواند برای تمام ملت اعلان جنگ کند. ایالت نمی‌تواند.' } },
      { bin: 'nation', t: { en: 'Run the post office', es: 'Dirigir el correo', fa: 'اداره کردن پسته‌خانه' },
        why: { en: 'The Constitution lets Congress set up post offices. It is a delegated power.', es: 'La Constitución deja que el Congreso cree oficinas de correos. Es un poder delegado.', fa: 'قانون اساسی به کانگرس اجازه می‌دهد پسته‌خانه بسازد. این قدرت سپرده‌شده است.' } },
      { bin: 'state', t: { en: 'Run the public schools', es: 'Dirigir las escuelas públicas', fa: 'اداره کردن مکتب‌های دولتی' },
        why: { en: 'The 10th Amendment keeps this for the states. It is a [[reserved powers|reserved power]].', es: 'La Décima Enmienda guarda esto para los estados. Es un [[reserved powers|poder reservado]].', fa: 'متمم دهم این را برای ایالت‌ها نگه می‌دارد. این [[reserved powers|قدرت محفوظ]] است.' } },
      { bin: 'state', t: { en: 'Give driver\'s licenses', es: 'Dar licencias de conducir', fa: 'دادن لایسنس دریوری' },
        why: { en: 'Each state gives its own driver\'s licenses. It is a reserved power.', es: 'Cada estado da sus propias licencias de conducir. Es un poder reservado.', fa: 'هر ایالت لایسنس دریوری خودش را می‌دهد. این قدرت محفوظ است.' } },
      { bin: 'state', t: { en: 'Set up counties, cities and towns', es: 'Crear condados, ciudades y pueblos', fa: 'ساختن کاونتی‌ها، شهرها و قریه‌ها' },
        why: { en: 'States set up local governments, like Alexandria\'s city council. A reserved power.', es: 'Los estados crean gobiernos locales, como el concejo de Alexandria. Un poder reservado.', fa: 'ایالت‌ها حکومت‌های محلی می‌سازند، مثل شورای شهر الکساندریا. قدرت محفوظ.' } },
      { bin: 'both', t: { en: 'Collect taxes', es: 'Cobrar impuestos', fa: 'جمع کردن مالیات' },
        why: { en: 'The nation and the states both collect taxes. It is a [[concurrent powers|concurrent power]].', es: 'La nación y los estados cobran impuestos. Es un [[concurrent powers|poder concurrente]].', fa: 'هم حکومت ملی و هم ایالت‌ها مالیات جمع می‌کنند. این [[concurrent powers|قدرت مشترک]] است.' } },
      { bin: 'both', t: { en: 'Build roads', es: 'Construir caminos', fa: 'ساختن سرک‌ها' },
        why: { en: 'The nation and the states both build roads. It is a concurrent power.', es: 'La nación y los estados construyen caminos. Es un poder concurrente.', fa: 'هم حکومت ملی و هم ایالت‌ها سرک می‌سازند. این قدرت مشترک است.' } }
    ],
    success: { en: 'Every power is with the right group! Now you know who holds which power.', es: '¡Cada poder está en el grupo correcto! Ahora sabes quién tiene cada poder.', fa: 'هر قدرت پیش گروه درست است! حالا می‌دانی کدام قدرت دست کیست.' }
  },

  boss: {
    at: [4, 17],
    stat: 'pla',
    need: 3,
    name: { en: 'The Grabby Grump', es: 'El Gruñón Acaparador', fa: 'غرغروی قدرت‌قاپ' },
    appear: { en: 'The Grabby Grump is hiding in the fog by the James River!', es: '¡El Gruñón Acaparador se esconde en la niebla junto al río James!', fa: 'غرغروی قدرت‌قاپ در مه کنار دریای جیمز پنهان است!' },
    taunt: { en: 'Nation? States? Bah! I want ALL the powers in one big pile, just for me!', es: '¿Nación? ¿Estados? ¡Bah! ¡Quiero TODOS los poderes en un montón, solo para mí!', fa: 'ملت؟ ایالت؟ بَه! همهٔ قدرت‌ها را در یک تودهٔ بزرگ، فقط برای خودم می‌خواهم!' },
    win: { en: 'The fog lifts off the river. Charter page 2.3 floats down into your hands!', es: 'La niebla se va del río. ¡La página 2.3 de la carta cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۲.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is federalism?', es: '¿Qué es el federalismo?', fa: 'فدرالیزم چیست؟' },
        choices: [
          { en: 'Power split between nation and states', es: 'El poder dividido entre nación y estados', fa: 'قدرت میان ملت و ایالت‌ها تقسیم است' },
          { en: 'All power held by one strong ruler', es: 'Todo el poder en un gobernante fuerte', fa: 'همهٔ قدرت دست یک حاکم قوی است' },
          { en: 'All power held by the fifty states', es: 'Todo el poder en los cincuenta estados', fa: 'همهٔ قدرت دست پنجاه ایالت است' },
          { en: 'All power held by the city councils', es: 'Todo el poder en los concejos municipales', fa: 'همهٔ قدرت دست شوراهای شهر است' }],
        answer: 0,
        why: { en: 'In federalism, the nation and the states share power. Each has its own powers.', es: 'En el federalismo, la nación y los estados comparten el poder. Cada uno tiene sus poderes.', fa: 'در فدرالیزم، ملت و ایالت‌ها قدرت را شریک دارند. هر کدام قدرت‌های خودش را دارد.' } },
      { q: { en: 'Which power belongs only to the nation?', es: '¿Qué poder es solo de la nación?', fa: 'کدام قدرت فقط مال حکومت ملی است؟' },
        choices: [
          { en: 'Declaring war', es: 'Declarar la guerra', fa: 'اعلان جنگ' },
          { en: 'Running schools', es: 'Dirigir escuelas', fa: 'اداره کردن مکتب‌ها' },
          { en: 'Giving licenses', es: 'Dar licencias', fa: 'دادن لایسنس' },
          { en: 'Setting up towns', es: 'Crear pueblos', fa: 'ساختن قریه‌ها' }],
        answer: 0,
        why: { en: 'Only Congress can declare war. Schools, licenses and towns are state powers.', es: 'Solo el Congreso puede declarar la guerra. Escuelas, licencias y pueblos son poderes del estado.', fa: 'فقط کانگرس اعلان جنگ می‌کند. مکتب، لایسنس و قریه قدرت‌های ایالت هستند.' } },
      { q: { en: 'Which amendment keeps reserved powers for the states?', es: '¿Qué enmienda guarda los poderes reservados para los estados?', fa: 'کدام متمم قدرت‌های محفوظ را برای ایالت‌ها نگه می‌دارد؟' },
        choices: [
          { en: 'The 10th Amendment', es: 'La Décima Enmienda', fa: 'متمم دهم' },
          { en: 'The 1st Amendment', es: 'La Primera Enmienda', fa: 'متمم اول' },
          { en: 'The 19th Amendment', es: 'La Enmienda 19', fa: 'متمم نزدهم' },
          { en: 'The 5th Amendment', es: 'La Quinta Enmienda', fa: 'متمم پنجم' }],
        answer: 0,
        why: { en: 'The 10th Amendment says powers not given to the nation belong to the states or the people.', es: 'La Décima Enmienda dice que los poderes no dados a la nación son de los estados o del pueblo.', fa: 'متمم دهم می‌گوید قدرت‌هایی که به ملت داده نشده، مال ایالت‌ها یا مردم است.' } },
      { q: { en: 'Which is a concurrent power, held by both the nation and the states?', es: '¿Cuál es un poder concurrente, que tienen la nación y los estados?', fa: 'کدام یکی قدرت مشترک است که هم ملت و هم ایالت‌ها دارند؟' },
        choices: [
          { en: 'Collecting taxes', es: 'Cobrar impuestos', fa: 'جمع کردن مالیات' },
          { en: 'Printing money', es: 'Imprimir dinero', fa: 'چاپ پول' },
          { en: 'Making treaties', es: 'Firmar tratados', fa: 'بستن معاهده' },
          { en: 'Running schools', es: 'Dirigir escuelas', fa: 'اداره کردن مکتب‌ها' }],
        answer: 0,
        why: { en: 'Both the nation and the states collect taxes. Money and treaties are national; schools are state.', es: 'La nación y los estados cobran impuestos. Dinero y tratados son nacionales; escuelas, estatales.', fa: 'هم ملت و هم ایالت‌ها مالیات جمع می‌کنند. پول و معاهده ملی است؛ مکتب ایالتی.' } },
      { q: { en: 'A state law clashes with a national law. Under the Supremacy Clause, which one wins?', es: 'Una ley estatal choca con una ley nacional. Según la Cláusula de Supremacía, ¿cuál gana?', fa: 'یک قانون ایالت با یک قانون ملی برخورد می‌کند. طبق مادهٔ برتری، کدام برنده است؟' },
        choices: [
          { en: 'The national law', es: 'La ley nacional', fa: 'قانون ملی' },
          { en: 'The state law', es: 'La ley estatal', fa: 'قانون ایالت' },
          { en: 'The older law', es: 'La ley más vieja', fa: 'قانون کهنه‌تر' },
          { en: 'The longer law', es: 'La ley más larga', fa: 'قانون درازتر' }],
        answer: 0,
        why: { en: 'The Supremacy Clause says the Constitution and national laws are the highest law of the land.', es: 'La Cláusula de Supremacía dice que la Constitución y las leyes nacionales son la ley más alta.', fa: 'مادهٔ برتری می‌گوید قانون اساسی و قانون‌های ملی بالاترین قانون کشور هستند.' } },
      { q: { en: 'What are the two houses of Virginia\'s General Assembly?', es: '¿Cuáles son las dos cámaras de la Asamblea General de Virginia?', fa: 'دو مجلس مجمع عمومی ویرجینیا کدام‌ها هستند؟' },
        choices: [
          { en: 'House of Delegates and Senate', es: 'Cámara de Delegados y Senado', fa: 'مجلس نمایندگان و سنا' },
          { en: 'City Council and School Board', es: 'Concejo Municipal y Junta Escolar', fa: 'شورای شهر و شورای مکتب‌ها' },
          { en: 'Congress and the Supreme Court', es: 'El Congreso y la Corte Suprema', fa: 'کانگرس و ستره محکمه' },
          { en: 'The Governor and the Cabinet', es: 'El Gobernador y su gabinete', fa: 'والی و کابینه' }],
        answer: 0,
        why: { en: 'The House of Delegates has 100 members; the Senate of Virginia has 40.', es: 'La Cámara de Delegados tiene 100 miembros; el Senado de Virginia tiene 40.', fa: 'مجلس نمایندگان ۱۰۰ عضو دارد؛ سنای ویرجینیا ۴۰ عضو دارد.' } },
      { q: { en: 'How long is a term for the Governor of Virginia?', es: '¿Cuánto dura un período del Gobernador de Virginia?', fa: 'دورهٔ کار والی ویرجینیا چقدر است؟' },
        choices: [
          { en: '4 years, not two in a row', es: '4 años, no dos seguidos', fa: '۴ سال، نه دو دوره پشت سر هم' },
          { en: '2 years, as many as you like', es: '2 años, todas las veces que quiera', fa: '۲ سال، هر چند بار که بخواهد' },
          { en: '6 years, not two in a row', es: '6 años, no dos seguidos', fa: '۶ سال، نه دو دوره پشت سر هم' },
          { en: 'For life, like a king', es: 'De por vida, como un rey', fa: 'برای تمام عمر، مثل پادشاه' }],
        answer: 0,
        why: { en: 'A Virginia governor serves a 4-year term and cannot serve two terms in a row.', es: 'Un gobernador de Virginia sirve 4 años y no puede servir dos períodos seguidos.', fa: 'والی ویرجینیا ۴ سال کار می‌کند و نمی‌تواند دو دوره پشت سر هم کار کند.' } },
      { q: { en: 'Alexandria is an independent city. Which group runs its local government?', es: 'Alexandria es una ciudad independiente. ¿Qué grupo dirige su gobierno local?', fa: 'الکساندریا یک شهر مستقل است. کدام گروه حکومت محلی آن را اداره می‌کند؟' },
        choices: [
          { en: 'Its elected city council', es: 'Su concejo municipal elegido', fa: 'شورای شهرِ انتخابی آن' },
          { en: 'The United States Congress', es: 'El Congreso de Estados Unidos', fa: 'کانگرس ایالات متحده' },
          { en: 'The Senate of Virginia', es: 'El Senado de Virginia', fa: 'سنای ویرجینیا' },
          { en: 'The US Supreme Court', es: 'La Corte Suprema de EE. UU.', fa: 'ستره محکمهٔ امریکا' }],
        answer: 0,
        why: { en: 'Alexandria\'s people elect a city council and a school board to run their city.', es: 'La gente de Alexandria elige un concejo municipal y una junta escolar para su ciudad.', fa: 'مردم الکساندریا یک شورای شهر و یک شورای مکتب‌ها را برای شهرشان انتخاب می‌کنند.' } }
    ]
  },

  learned: [
    { en: 'In [[federalism|federalism]], power is split between the nation and the states.', es: 'En el [[federalism|federalismo]], el poder se divide entre la nación y los estados.', fa: 'در [[federalism|فدرالیزم]]، قدرت میان حکومت ملی و ایالت‌ها تقسیم می‌شود.' },
    { en: 'Delegated powers: the nation. Reserved powers: the states. Concurrent powers: both. National law wins a clash.', es: 'Poderes delegados: la nación. Reservados: los estados. Concurrentes: los dos. La ley nacional gana un choque.', fa: 'قدرت سپرده‌شده: ملت. محفوظ: ایالت‌ها. مشترک: هر دو. در برخورد، قانون ملی برنده است.' },
    { en: 'Virginia has its own constitution, a General Assembly, a governor and local governments.', es: 'Virginia tiene su propia constitución, una Asamblea General, un gobernador y gobiernos locales.', fa: 'ویرجینیا قانون اساسی خودش، یک مجمع عمومی، یک والی و حکومت‌های محلی دارد.' }
  ],
  reflect: {
    q: { en: 'Think of your day: school, the bus, the mail. Which ones are run by the nation, and which by the state?', es: 'Piensa en tu día: la escuela, el autobús, el correo. ¿Cuáles dirige la nación y cuáles el estado?', fa: 'به روزت فکر کن: مکتب، بس، نامه. کدام‌ها را حکومت ملی و کدام‌ها را ایالت اداره می‌کند؟' },
    starter: { en: 'In my day, the state runs', es: 'En mi día, el estado dirige', fa: 'در روز من، ایالت ... را اداره می‌کند' }
  }
};
