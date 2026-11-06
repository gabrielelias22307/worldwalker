/* TIMEWALKER · Episode 8.3 · Today's Connected World (WHII) · the last episode
   Old Town Alexandria, Virginia, today: the students' own city. North-west: King Street (row 4) with shops and
   tall buildings. North-east: the high school (J over h) and the library. South-west: Market Square, where a
   farmers market has met since 1753 (m stalls on light paving l). South-east: the Potomac waterfront with a
   warehouse (X), docks (k) and the river (~, =) along the whole east edge, where floods now come more often. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'WHII',
  title: { en: 'Today\'s Connected World', es: 'El mundo conectado de hoy', fa: 'جهان به هم پیوستهٔ امروز' },
  place: { en: 'Alexandria, Virginia, today', es: 'Alexandria, Virginia, hoy', fa: 'الکساندریا، ویرجینیا، امروز' },
  intro: [
    { en: 'The Grump tangled the last page. People forgot how the world is [[globalization|connected]].',
      es: 'El Gruñón enredó la última página. La gente olvidó cómo está [[globalization|conectado]] el mundo.',
      fa: 'غرغرو صفحهٔ آخر را درهم کرد. مردم فراموش کردند جهان چطور [[globalization|به هم وصل]] است.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Alexandria on the world map, today at the end of the timeline */
  scenes: {
    at: [-77.05, 38.8],
    year: 2025,
    yearText: { en: 'Today', es: 'Hoy', fa: 'امروز' },
    start: [
      { en: 'Today, about 8 billion people live on Earth.',
        es: 'Hoy viven unos 8 mil millones de personas en la Tierra.',
        fa: 'امروز حدود ۸ میلیارد انسان روی زمین زندگی می‌کنند.' },
      { en: 'Ships, planes and the internet connect almost every country.',
        es: 'Barcos, aviones e internet conectan a casi todos los países.',
        fa: 'کشتی‌ها، طیاره‌ها و انترنت تقریباً همهٔ کشورها را به هم وصل می‌کنند.' },
      { en: 'Goods, people and ideas move faster than ever before.',
        es: 'Los productos, las personas y las ideas se mueven más rápido que nunca.',
        fa: 'جنس، مردم و اندیشه‌ها تیزتر از هر زمان دیگر حرکت می‌کنند.' }
    ],
    page: { en: 'More than 5 billion people use the internet today.',
      es: 'Hoy más de 5 mil millones de personas usan internet.',
      fa: 'امروز بیشتر از ۵ میلیارد نفر از انترنت کار می‌گیرند.' },
    guess: {
      q: { en: 'A phone has parts from how many countries?', es: '¿Un teléfono tiene partes de cuántos países?', fa: 'یک موبایل از چند کشور پرزه دارد؟' },
      choices: [
        { t: { en: '🌍 Many countries', es: '🌍 De muchos países', fa: '🌍 از کشورهای زیاد' }, ok: true },
        { t: { en: '📍 Only one country', es: '📍 De un solo país', fa: '📍 فقط از یک کشور' } }
      ],
      why: { en: 'Its metals, chips, screen and battery come from many countries on several continents.', es: 'Sus metales, chips, pantalla y batería vienen de muchos países de varios continentes.', fa: 'فلزها، چپ‌ها، صفحه و بتری آن از کشورهای زیاد در چند قاره می‌آیند.' }
    },
    next: {
      q: { en: 'Look back from 1500 to today. Did the world grow more connected?', es: 'Mira atrás, de 1500 a hoy. ¿El mundo se conectó más?', fa: 'از ۱۵۰۰ تا امروز را ببین. آیا جهان بیشتر به هم وصل شد؟' },
      choices: [
        { t: { en: '🌐 Yes, more connected', es: '🌐 Sí, más conectado', fa: '🌐 بله، بیشتر وصل شد' }, ok: true },
        { t: { en: '🧱 No, more cut off', es: '🧱 No, más aislado', fa: '🧱 نه، بیشتر جدا شد' } }
      ],
      why: { en: 'Ocean ships, railways, planes and the internet linked the world, step by step, for 500 years.', es: 'Barcos, trenes, aviones e internet unieron el mundo, paso a paso, durante 500 años.', fa: 'کشتی‌ها، ریل‌ها، طیاره‌ها و انترنت در ۵۰۰ سال قدم به قدم جهان را به هم وصل کردند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [8, 2], name: { en: 'Doña Marta', es: 'Doña Marta', fa: 'دونیا مارتا' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2a5aa0', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Welcome! I make pupusas, a food from El Salvador.', es: '¡Bienvenido! Hago pupusas, una comida de El Salvador.', fa: 'خوش آمدی! من پوپوسا می‌پزم، غذایی از السالوادور.' },
        { en: 'I came here 20 years ago. I send money home to my sister.', es: 'Llegué hace 20 años. Le mando dinero a mi hermana.', fa: '۲۰ سال پیش اینجا آمدم. به خواهرم در وطن پول می‌فرستم.' },
        { en: 'The corn in pupusas first grew in Mexico, thousands of years ago!', es: '¡El maíz de las pupusas creció primero en México, hace miles de años!', fa: 'جواری پوپوسا هزاران سال پیش اول در مکسیکو رویید!' }
      ] },
    { at: [24, 7], name: { en: 'Mr. Weber', es: 'Sr. Weber', fa: 'آقای وبر' },
      look: { skin: 1, hair: '#e8e8e8', shirt: '#6a4a3a', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'I help at this library. I was born in Berlin, Germany.', es: 'Ayudo en esta biblioteca. Nací en Berlín, Alemania.', fa: 'من در این کتابخانه کمک می‌کنم. در برلین، جرمنی به دنیا آمدم.' },
        { en: 'I was a boy when the wall went up in 1961.', es: 'Era un niño cuando levantaron el muro en 1961.', fa: 'وقتی دیوار در ۱۹۶۱ ساخته شد، من طفل بودم.' },
        { en: 'In 1989, crowds opened it. People made that happen, not luck.', es: 'En 1989, la gente lo abrió. Lo lograron las personas, no la suerte.', fa: 'در ۱۹۸۹ مردم آن را باز کردند. مردم این کار را کردند، نه بخت.' }
      ] },
    { at: [10, 13], name: { en: 'Nurse Johnson', es: 'Enfermera Johnson', fa: 'نرس جانسون' },
      look: { skin: 4, hair: '#1a1008', shirt: '#4aa0a0', pants: '#4aa0a0', style: 'bun' },
      lines: [
        { en: 'In 2020, a new virus spread around the world in weeks.', es: 'En 2020, un virus nuevo se extendió por el mundo en semanas.', fa: 'در ۲۰۲۰، یک ویروس نو در چند هفته در همهٔ جهان پخش شد.' },
        { en: 'Planes carry people fast, and germs travel with them.', es: 'Los aviones llevan gente rápido, y los gérmenes viajan con ellos.', fa: 'طیاره‌ها مردم را تیز می‌برند و میکروب‌ها هم با آن‌ها سفر می‌کنند.' },
        { en: 'Scientists in many countries shared their work to make vaccines fast.', es: 'Científicos de muchos países compartieron su trabajo para hacer vacunas rápido.', fa: 'دانشمندان کشورهای زیاد کار خود را شریک ساختند تا زود واکسین بسازند.' }
      ] },
    { at: [19, 16], name: { en: 'Mr. Chen', es: 'Sr. Chen', fa: 'آقای چن' },
      look: { skin: 2, hair: '#120c08', shirt: '#3a3a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I write computer code from home, with a team in India and Brazil.', es: 'Escribo código desde casa, con un equipo en India y Brasil.', fa: 'من از خانه کود کمپیوتر می‌نویسم، با یک گروه در هند و برازیل.' },
        { en: 'We meet on video calls. My morning is evening in India.', es: 'Nos reunimos por videollamada. Mi mañana es la noche en India.', fa: 'ما با تماس ویدیویی جلسه داریم. صبح من شام هند است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: King Street (row 4), shops (Q over h) and tall buildings (U). North-east: the high school
     (J over h), trees and the library (J over h). South-west: Market Square, stalls (m) on light paving (l),
     City Hall (R over h) and homes. South-east: the warehouse (X), docks (k), homes and the waterfront park.
     The Potomac River (~ near the shore, = deep water) runs down the whole east edge. */
  map: [
    'UUUUUUUUUUUUUUUUJJJJJJJJJJJJJ~==',
    'U.UUU..QQQ..UUU...JJJJJJ..TT.~==',
    'U.UUU..hdh..UUU...hhhhhh..T..~==',
    'U.............x..............~==',
    'Ullllllllllllllllllllllllllll~==',
    'U....,....T.......T.....,....~==',
    'U.RRR..UUU..RRR........JJJJ..~==',
    'U.hhh..UUU..hhh........hdhh..~==',
    'U............................~==',
    'U......::...............::...~==',
    'U......::...............::...~==',
    'U......::...............::...~==',
    'U.RRRRR..QQQ......XXXX.....kk~==',
    'U.hhhhh..hdh......XXXX.....kk~==',
    'U.llllllllll.................~==',
    'U.lmmllmmlll......RRR.....kkkk==',
    'U.llllllllll......hdh.......k~==',
    'U.lmmllmmlll................k~==',
    'U.llllllllll.x....TT.....,...~==',
    'U.........................x..~==',
    'U..,.........,.....,.........~==',
    'UUUUUUUUUUUUUUUUJJJJJJJJJJJJJ~=='
  ],
  start: [7, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [1, 8], at: [1, 11], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps south, along the west edge of town.', es: 'Desde esta nota, camina 3 pasos al sur, por el borde oeste del pueblo.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، در کنار غربی شهر.' },
      text: { en: 'In 1991, the World Wide Web opened to everyone. Here is a shiny old computer chip.', es: 'En 1991, la World Wide Web se abrió a todos. Aquí hay un chip de computadora viejo y brillante.', fa: 'در ۱۹۹۱، شبکهٔ جهانی وب به روی همه باز شد. اینجا یک چپ کهنه و براق کمپیوتر است.' } },
    { clueAt: [20, 20], at: [24, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the river.', es: 'Desde esta nota, camina 4 pasos al este, hacia el río.', fa: 'از این یادداشت، ۴ قدم به شرق، به طرف دریا برو.' },
      text: { en: 'Rivers and seas have linked the world for 500 years. Here is a shell from the Potomac.', es: 'Ríos y mares han unido el mundo por 500 años. Aquí hay una concha del Potomac.', fa: 'دریاها و بحرها ۵۰۰ سال جهان را به هم وصل کرده‌اند. اینجا یک صدف از دریای پوتومک است.' } }
  ],

  words: {
    globalization: { en: 'countries becoming more linked by trade, travel, ideas and technology', es: 'países cada vez más unidos por el comercio, los viajes, las ideas y la tecnología', fa: 'بیشتر به هم وصل شدن کشورها از راه تجارت، سفر، اندیشه و تکنالوژی' },
    migrant: { en: 'a person who moves to another place to live, often for work or family', es: 'una persona que se muda a otro lugar a vivir, muchas veces por trabajo o familia', fa: 'کسی که برای زندگی به جای دیگر کوچ می‌کند، اکثراً برای کار یا خانواده' },
    refugee: { en: 'a person who must flee home because of war or danger', es: 'una persona que tiene que huir de su hogar por la guerra o el peligro', fa: 'کسی که به خاطر جنگ یا خطر مجبور است از خانه‌اش فرار کند' },
    'climate change': { en: 'the long-term warming of Earth, mostly from burning coal, oil and gas', es: 'el calentamiento de la Tierra a largo plazo, sobre todo por quemar carbón, petróleo y gas', fa: 'گرم شدن درازمدت زمین، بیشتر از سوختاندن ذغال، تیل و گاز' },
    'united nations': { en: 'a group of almost all countries, started in 1945 to keep peace', es: 'un grupo de casi todos los países, creado en 1945 para mantener la paz', fa: 'گروهی از تقریباً همهٔ کشورها که در ۱۹۴۵ برای حفظ صلح ساخته شد' }
  },

  npcs: [
    {
      x: 4, y: 5,
      name: { en: 'Carlos', es: 'Carlos', fa: 'کارلوس' },
      role: { en: 'Delivery rider', es: 'Repartidor', fa: 'رسانندهٔ بسته' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2a9d8f', pants: '#2a2a3a', style: 'short', hat: '#e9c46a' },
      lines: [
        { en: 'Hey! I deliver packages all over Alexandria on my bike.', es: '¡Hola! Reparto paquetes por todo Alexandria en mi bici.', fa: 'سلام! من با بایسکلم در تمام الکساندریا بسته می‌رسانم.' },
        { en: 'The cotton in my shirt grew in India. It was sewn in Bangladesh.', es: 'El algodón de mi camisa creció en India. La cosieron en Bangladés.', fa: 'پختهٔ پیراهنم در هند رویید. در بنگلادیش دوخته شد.' },
        { en: 'Countries linked by trade, travel and ideas: that is [[globalization|globalization]].', es: 'Países unidos por el comercio, los viajes y las ideas: eso es la [[globalization|globalización]].', fa: 'کشورهایی که با تجارت، سفر و اندیشه وصل‌اند: این [[globalization|جهانی شدن]] است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What is globalization?', es: '¿Qué es la globalización?', fa: 'جهانی شدن چیست؟' },
        choices: [
          { ok: true, t: { en: 'Countries linked more closely by trade and ideas', es: 'Países más unidos por el comercio y las ideas', fa: 'کشورهایی که با تجارت و اندیشه بیشتر وصل‌اند' },
            why: { en: 'Yes. One shirt can touch three countries before it reaches you.', es: 'Sí. Una camisa puede pasar por tres países antes de llegar a ti.', fa: 'بله. یک پیراهن پیش از رسیدن به تو از سه کشور می‌گذرد.' } },
          { t: { en: 'One country ruling all the others on Earth', es: 'Un país que gobierna a todos los demás de la Tierra', fa: 'یک کشور که بر همهٔ کشورهای دیگر زمین حکومت کند' },
            why: { en: 'No single country rules the world. Globalization means countries trade and share ideas.', es: 'Ningún país gobierna el mundo. Globalización significa que los países comercian y comparten ideas.', fa: 'هیچ کشوری بر جهان حکومت نمی‌کند. جهانی شدن یعنی کشورها تجارت و اندیشه را شریک می‌کنند.' } },
          { t: { en: 'People never moving far from where they were born', es: 'Gente que nunca se aleja de donde nació', fa: 'مردمی که هرگز از جای تولدشان دور نمی‌روند' },
            why: { en: 'That is the opposite. Today people, goods and ideas move all over the world.', es: 'Es lo contrario. Hoy personas, productos e ideas se mueven por todo el mundo.', fa: 'این برعکس است. امروز مردم، جنس و اندیشه در همهٔ جهان حرکت می‌کنند.' } }
        ]
      }
    },
    {
      x: 22, y: 8,
      name: { en: 'Zahra', es: 'Zahra', fa: 'زهرا' },
      role: { en: 'High school student', es: 'Estudiante de secundaria', fa: 'شاگرد لیسه' },
      look: { skin: 2, hair: '#1a1008', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Salaam! I am a student at the high school here.', es: '¡Salaam! Soy estudiante de la secundaria de aquí.', fa: 'سلام! من شاگرد لیسهٔ همین‌جا هستم.' },
        { en: 'My family left Afghanistan in 2021. It was not safe for us.', es: 'Mi familia salió de Afganistán en 2021. No era seguro para nosotros.', fa: 'خانوادهٔ من در ۲۰۲۱ از افغانستان بیرون شد. برای ما امن نبود.' },
        { en: 'People who flee danger are [[refugee|refugees]]. People who move for work are [[migrant|migrants]].', es: 'Quienes huyen del peligro son [[refugee|refugiados]]. Quienes se mudan por trabajo son [[migrant|migrantes]].', fa: 'کسانی که از خطر فرار می‌کنند [[refugee|پناهنده]] هستند. کسانی که برای کار کوچ می‌کنند [[migrant|مهاجر]] هستند.' },
        { en: 'At home we speak Dari. At school I learn English too.', es: 'En casa hablamos dari. En la escuela también aprendo inglés.', fa: 'در خانه دری گپ می‌زنیم. در مکتب انگلیسی هم یاد می‌گیرم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is a refugee?', es: '¿Qué es un refugiado?', fa: 'پناهنده کیست؟' },
        choices: [
          { ok: true, t: { en: 'A person who must flee danger at home', es: 'Una persona que debe huir del peligro', fa: 'کسی که باید از خطر در وطنش فرار کند' },
            why: { en: 'Yes. Refugees leave because of war or danger, not by choice.', es: 'Sí. Los refugiados se van por la guerra o el peligro, no porque quieran.', fa: 'بله. پناهنده‌ها به خاطر جنگ یا خطر می‌روند، نه به خواست خود.' } },
          { t: { en: 'A person who moves for a new job', es: 'Una persona que se muda por un trabajo nuevo', fa: 'کسی که برای کار نو کوچ می‌کند' },
            why: { en: 'That is a migrant, who chooses to move for work. A refugee flees danger.', es: 'Ese es un migrante, que elige mudarse por trabajo. Un refugiado huye del peligro.', fa: 'او مهاجر است که برای کار کوچ را انتخاب می‌کند. پناهنده از خطر فرار می‌کند.' } },
          { t: { en: 'A tourist who visits for a short time', es: 'Un turista que visita por poco tiempo', fa: 'سیاحی که برای مدت کوتاه می‌آید' },
            why: { en: 'A tourist goes home after a trip. A refugee cannot safely go home.', es: 'Un turista vuelve a casa después del viaje. Un refugiado no puede volver a salvo.', fa: 'سیاح بعد از سفر به خانه برمی‌گردد. پناهنده نمی‌تواند به امنیت برگردد.' } }
        ]
      }
    },
    {
      x: 25, y: 17,
      name: { en: 'Ms. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      role: { en: 'City engineer', es: 'Ingeniera de la ciudad', fa: 'انجنیر شهر' },
      look: { skin: 5, hair: '#120c08', shirt: '#e07a2a', pants: '#2a3a5a', style: 'bun', hat: '#f2c14e' },
      lines: [
        { en: 'I am a city engineer. I help protect Old Town from floods.', es: 'Soy ingeniera de la ciudad. Ayudo a proteger Old Town de las inundaciones.', fa: 'من انجنیر شهر هستم. کمک می‌کنم شهر کهنه از سیلاب مصون بماند.' },
        { en: 'Earth is getting warmer, mostly from burning coal, oil and gas.', es: 'La Tierra se está calentando, sobre todo por quemar carbón, petróleo y gas.', fa: 'زمین گرم‌تر می‌شود، بیشتر از سوختاندن ذغال، تیل و گاز.' },
        { en: 'This [[climate change|climate change]] brings heavier rain, and the seas slowly rise.', es: 'Este [[climate change|cambio climático]] trae lluvias más fuertes, y los mares suben poco a poco.', fa: 'این [[climate change|تغییر اقلیم]] باران‌های شدیدتر می‌آورد و بحرها آهسته بالا می‌آیند.' },
        { en: 'So King Street floods more often. We are building better drains and walls.', es: 'Por eso King Street se inunda más seguido. Construimos mejores desagües y muros.', fa: 'پس سرک کینگ بیشتر سیلاب می‌شود. ما جوی‌ها و دیوارهای بهتر می‌سازیم.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why does Old Town flood more often now?', es: '¿Por qué Old Town se inunda más seguido ahora?', fa: 'چرا شهر کهنه حالا بیشتر سیلاب می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A warmer Earth brings heavier rain and higher seas', es: 'Una Tierra más caliente trae más lluvia y mares más altos', fa: 'زمین گرم‌تر باران شدیدتر و بحر بلندتر می‌آورد' },
            why: { en: 'Yes. Climate change makes rain heavier and the water higher.', es: 'Sí. El cambio climático hace la lluvia más fuerte y el agua más alta.', fa: 'بله. تغییر اقلیم باران را شدیدتر و آب را بلندتر می‌کند.' } },
          { t: { en: 'The Potomac River moved its whole path to the west', es: 'El río Potomac movió todo su cauce hacia el oeste', fa: 'دریای پوتومک تمام راهش را به غرب برد' },
            why: { en: 'The river is where it always was. The water level is what is rising.', es: 'El río está donde siempre estuvo. Lo que sube es el nivel del agua.', fa: 'دریا همان جای همیشگی است. سطح آب است که بالا می‌آید.' } },
          { t: { en: 'Too many people walk on King Street each day', es: 'Demasiada gente camina por King Street cada día', fa: 'هر روز مردم بسیار زیاد در سرک کینگ راه می‌روند' },
            why: { en: 'Walking does not cause floods. Heavier rain and rising water do.', es: 'Caminar no causa inundaciones. La lluvia más fuerte y el agua que sube, sí.', fa: 'راه رفتن سیلاب نمی‌آورد. باران شدیدتر و آب بالا آمده می‌آورد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 3, text: { en: 'KING STREET · ALEXANDRIA, VIRGINIA · Families from over 100 countries live in this city.', es: 'KING STREET · ALEXANDRIA, VIRGINIA · En esta ciudad viven familias de más de 100 países.', fa: 'سرک کینگ · الکساندریا، ویرجینیا · خانواده‌هایی از بیشتر از ۱۰۰ کشور در این شهر زندگی می‌کنند.' } },
    { x: 13, y: 18, text: { en: 'MARKET SQUARE · A farmers market has met here since 1753.', es: 'MARKET SQUARE · Aquí se hace un mercado de agricultores desde 1753.', fa: 'میدان بازار · از ۱۷۵۳ تا حالا اینجا بازار دهقانان برپا می‌شود.' } },
    { x: 26, y: 19, text: { en: 'THE POTOMAC RIVER · Ships from this waterfront once sailed to ports around the world.', es: 'EL RÍO POTOMAC · Los barcos de este puerto viajaban a puertos de todo el mundo.', fa: 'دریای پوتومک · روزگاری کشتی‌ها از این ساحل به بندرهای سراسر جهان می‌رفتند.' } }
  ],

  /* the quest: Ms. Flores the teacher (gold !) by the high school -> Mr. Tesfaye at Market Square
     -> Rosa at the river warehouse: carry her the box of coffee from Ethiopia -> back to Ms. Flores */
  quest: {
    stat: 'reg',
    title: { en: 'Coffee for International Night', es: 'Café para la Noche Internacional', fa: 'قهوه برای شب جهانی' },
    giver: {
      x: 18, y: 3,
      name: { en: 'Ms. Flores', es: 'Sra. Flores', fa: 'خانم فلورس' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 3, hair: '#3a2416', shirt: '#c04a6a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Tonight is International Night at our school! Families share food from home.', es: '¡Esta noche es la Noche Internacional en la escuela! Las familias comparten comida de su tierra.', fa: 'امشب شب جهانی در مکتب ماست! خانواده‌ها غذای وطن خود را شریک می‌کنند.' },
        { en: 'Mr. Tesfaye will make Ethiopian coffee. But his coffee delivery is lost!', es: 'El Sr. Tesfaye hará café etíope. ¡Pero su pedido de café se perdió!', fa: 'آقای تسفای قهوهٔ ایتوپیایی درست می‌کند. اما قهوه‌اش گم شده!' },
        { en: 'He is at Market Square. Please ask him what happened.', es: 'Él está en Market Square. Por favor, pregúntale qué pasó.', fa: 'او در میدان بازار است. لطفاً از او بپرس چه شده.' }
      ],
      wait: { en: 'Mr. Tesfaye is at Market Square, south-west of King Street.', es: 'El Sr. Tesfaye está en Market Square, al suroeste de King Street.', fa: 'آقای تسفای در میدان بازار، جنوب غربِ سرک کینگ است.' },
      thanks: { en: 'Coffee from Ethiopia! Tonight the whole world shares one table. Thank you!', es: '¡Café de Etiopía! Esta noche el mundo entero comparte una mesa. ¡Gracias!', fa: 'قهوه از ایتوپیا! امشب تمام جهان سر یک دسترخوان است. تشکر!' }
    },
    contact: {
      x: 13, y: 16,
      name: { en: 'Mr. Tesfaye', es: 'Sr. Tesfaye', fa: 'آقای تسفای' },
      role: { en: 'Café owner', es: 'Dueño de café', fa: 'صاحب قهوه‌خانه' },
      look: { skin: 4, hair: '#120c08', shirt: '#f2f2f2', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Coffee first grew in Ethiopia, my home country, long ago.', es: 'El café creció primero en Etiopía, mi país, hace mucho tiempo.', fa: 'قهوه از زمان‌های دور اول در ایتوپیا، وطن من، رویید.' },
        { en: 'The truck left my box at the warehouse, with boxes from everywhere.', es: 'El camión dejó mi caja en el almacén, con cajas de todas partes.', fa: 'لاری قطی مرا در گدام گذاشت، با قطی‌هایی از همه جا.' },
        { en: 'Find Rosa at the warehouse by the river, east of here.', es: 'Busca a Rosa en el almacén junto al río, al este de aquí.', fa: 'روزا را در گدام کنار دریا، شرقِ اینجا پیدا کن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 23, y: 13,
        name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
        role: { en: 'Warehouse worker', es: 'Trabajadora del almacén', fa: 'کارگر گدام' },
        look: { skin: 2, hair: '#2a1a10', shirt: '#e0a020', pants: '#2a4a6a', style: 'long', hat: '#2a4a6a' },
        lines: [
          { en: 'Boxes come here from all over the world. Read each label!', es: '¡Aquí llegan cajas de todo el mundo! Lee cada etiqueta.', fa: 'قطی‌ها از سراسر جهان به اینجا می‌آیند. هر لیبل را بخوان!' }
        ]
      },
      q: { en: 'Mr. Tesfaye needs coffee from Ethiopia. Find his box and bring it to me.', es: 'El Sr. Tesfaye necesita café de Etiopía. Busca su caja y tráemela.', fa: 'آقای تسفای قهوه از ایتوپیا لازم دارد. قطی‌اش را پیدا کن و پیش من بیاور.' },
      choices: [
        { ok: true, at: [27, 17], icon: '☕', t: { en: 'A box of coffee beans from Ethiopia', es: 'Una caja de granos de café de Etiopía', fa: 'یک قطی دانهٔ قهوه از ایتوپیا' },
          why: { en: 'Yes! Coffee first grew in Ethiopia. Now it grows in many warm countries.', es: '¡Sí! El café nació en Etiopía. Hoy crece en muchos países cálidos.', fa: 'بله! قهوه اول در ایتوپیا رویید. حالا در کشورهای گرم زیادی می‌روید.' } },
        { at: [17, 19], icon: '🍫', t: { en: 'A box of cacao beans from Ghana', es: 'Una caja de granos de cacao de Ghana', fa: 'یک قطی دانهٔ کاکائو از گانا' },
          why: { en: 'Ghana is a top cacao grower. But cacao makes chocolate, not coffee.', es: 'Ghana es un gran productor de cacao. Pero el cacao da chocolate, no café.', fa: 'گانا از بزرگ‌ترین کارندگان کاکائو است. اما از کاکائو چاکلیت می‌سازند، نه قهوه.' } },
        { at: [24, 12], icon: '🍵', t: { en: 'A box of tea leaves from India', es: 'Una caja de hojas de té de India', fa: 'یک قطی برگ چای از هند' },
          why: { en: 'India grows lots of tea. But Mr. Tesfaye needs coffee from Ethiopia.', es: 'India produce mucho té. Pero el Sr. Tesfaye necesita café de Etiopía.', fa: 'هند چای زیاد دارد. اما آقای تسفای قهوه از ایتوپیا لازم دارد.' } }
      ],
      item: { icon: '☕', name: { en: 'A box of coffee beans', es: 'Una caja de granos de café', fa: 'یک قطی دانهٔ قهوه' } }
    }
  },

  scraps: [[1, 1], [28, 1], [15, 20]],
  smudges: [[10, 19], [22, 10]],

  challenge: {
    at: [2, 20],
    type: 'order',
    stat: 'pla',
    title: { en: 'The whole trip, in order', es: 'Todo el viaje, en orden', fa: 'تمام سفر، به ترتیب' },
    intro: { en: 'The Grump shuffled the Great Chronicle! Put these moments in order, from oldest to newest.',
      es: '¡El Gruñón revolvió la Gran Crónica! Ordena estos momentos, del más antiguo al más nuevo.',
      fa: 'غرغرو تاریخ‌نامهٔ بزرگ را درهم کرد! این لحظه‌ها را از کهنه‌ترین تا تازه‌ترین به ترتیب بگذار.' },
    items: [
      { icon: '⛵', t: { en: 'Columbus crosses the Atlantic. The Columbian Exchange begins.', es: 'Colón cruza el Atlántico. Empieza el intercambio colombino.', fa: 'کلمبوس از بحر اطلس می‌گذرد. مبادلهٔ کلمبی شروع می‌شود.' } },
      { icon: '📜', t: { en: 'Luther\'s ideas start the Reformation in Germany.', es: 'Las ideas de Lutero inician la Reforma en Alemania.', fa: 'اندیشه‌های لوتر اصلاح دینی را در جرمنی شروع می‌کند.' } },
      { icon: '🗽', t: { en: 'The French Revolution: "Liberty, equality, brotherhood!"', es: 'La Revolución francesa: "¡Libertad, igualdad, fraternidad!"', fa: 'انقلاب فرانسه: «آزادی، برابری، برادری!»' } },
      { icon: '🏭', t: { en: 'Factories and railways spread in the Industrial Revolution.', es: 'Las fábricas y los trenes se extienden en la Revolución Industrial.', fa: 'فابریکه‌ها و ریل‌ها در انقلاب صنعتی پخش می‌شوند.' } },
      { icon: '🌍', t: { en: 'World War I begins in Europe.', es: 'Empieza la Primera Guerra Mundial en Europa.', fa: 'جنگ جهانی اول در اروپا شروع می‌شود.' } },
      { icon: '✊', t: { en: 'India wins independence from Britain.', es: 'India gana su independencia de Gran Bretaña.', fa: 'هند از بریتانیا استقلال می‌گیرد.' } },
      { icon: '🧱', t: { en: 'The Berlin Wall falls.', es: 'Cae el Muro de Berlín.', fa: 'دیوار برلین فرو می‌ریزد.' } },
      { icon: '🌐', t: { en: 'The internet links billions of people around the world.', es: 'Internet une a miles de millones de personas en todo el mundo.', fa: 'انترنت میلیاردها انسان را در سراسر جهان وصل می‌کند.' } }
    ],
    why: { en: 'Think: ships and new faiths first, then revolutions and factories, then world wars, freedom, and the internet.',
      es: 'Piensa: primero barcos y nuevas creencias, luego revoluciones y fábricas, después guerras mundiales, libertad e internet.',
      fa: 'فکر کن: اول کشتی‌ها و باورهای نو، بعد انقلاب‌ها و فابریکه‌ها، بعد جنگ‌های جهانی، آزادی و انترنت.' },
    success: { en: 'The Great Chronicle is in order again! 500 years, one story: 1492 to today.', es: '¡La Gran Crónica está en orden otra vez! 500 años, una historia: de 1492 a hoy.', fa: 'تاریخ‌نامهٔ بزرگ دوباره مرتب شد! ۵۰۰ سال، یک داستان: از ۱۴۹۲ تا امروز.' }
  },

  boss: {
    at: [27, 9],
    stat: 'reg',
    need: 3,
    name: { en: 'The Grump', es: 'El Gruñón', fa: 'غرغرو' },
    appear: { en: 'The Grump himself appears by the river, in a fog of tangled wires!', es: '¡El mismo Gruñón aparece junto al río, en una niebla de cables enredados!', fa: 'خود غرغرو کنار دریا در مهی از سیم‌های درهم پیدا می‌شود!' },
    taunt: { en: 'The world is too big and too tangled. Forget it all!', es: 'El mundo es demasiado grande y enredado. ¡Olvídalo todo!', fa: 'جهان خیلی بزرگ و درهم است. همه را فراموش کن!' },
    win: { en: 'The fog clears. The last chronicle page, 8.3, floats into your hands. The Great Chronicle is whole!', es: 'La niebla se va. La última página de la crónica, la 8.3, cae en tus manos. ¡La Gran Crónica está completa!', fa: 'مه کنار می‌رود. آخرین صفحهٔ تاریخ‌نامه، ۸.۳، به دستت می‌افتد. تاریخ‌نامهٔ بزرگ کامل شد!' },
    questions: [
      { q: { en: 'What is globalization?', es: '¿Qué es la globalización?', fa: 'جهانی شدن چیست؟' },
        choices: [
          { en: 'Countries linked by trade, travel and ideas', es: 'Países unidos por el comercio, los viajes y las ideas', fa: 'کشورهایی که با تجارت، سفر و اندیشه وصل‌اند' },
          { en: 'One country ruling the whole world alone', es: 'Un país que gobierna solo al mundo entero', fa: 'یک کشور که تنها بر تمام جهان حکومت کند' },
          { en: 'Countries closing their borders to all trade', es: 'Países que cierran sus fronteras a todo comercio', fa: 'کشورهایی که مرزهایشان را به روی هر تجارت می‌بندند' },
          { en: 'People moving back to small farms', es: 'Gente que vuelve a fincas pequeñas', fa: 'مردمی که دوباره به فارم‌های کوچک برمی‌گردند' }],
        answer: 0,
        why: { en: 'Globalization means goods, people and ideas move between countries more and more.', es: 'Globalización significa que productos, personas e ideas se mueven cada vez más entre países.', fa: 'جهانی شدن یعنی جنس، مردم و اندیشه بیشتر و بیشتر میان کشورها حرکت می‌کنند.' } },
      { q: { en: 'What is the main cause of climate change today?', es: '¿Cuál es la causa principal del cambio climático hoy?', fa: 'علت اصلی تغییر اقلیم امروز چیست؟' },
        choices: [
          { en: 'Burning coal, oil and gas for energy', es: 'Quemar carbón, petróleo y gas para energía', fa: 'سوختاندن ذغال، تیل و گاز برای انرژی' },
          { en: 'The Moon slowly moving closer to the Earth', es: 'La Luna que se acerca poco a poco a la Tierra', fa: 'مهتاب که آهسته به زمین نزدیک می‌شود' },
          { en: 'Too many trees growing in forests', es: 'Demasiados árboles en los bosques', fa: 'درختان بسیار زیاد در جنگل‌ها' },
          { en: 'Volcanoes erupting every single day', es: 'Volcanes que hacen erupción todos los días', fa: 'آتشفشان‌هایی که هر روز فوران می‌کنند' }],
        answer: 0,
        why: { en: 'Burning fuels puts gases in the air that trap heat. Trees help, by taking some in.', es: 'Quemar combustibles echa gases al aire que atrapan el calor. Los árboles ayudan, porque absorben algo.', fa: 'سوختاندن سوخت گازهایی به هوا می‌دهد که گرمی را نگه می‌دارند. درختان کمی از آن را جذب می‌کنند.' } },
      { q: { en: 'Who is a refugee?', es: '¿Quién es un refugiado?', fa: 'پناهنده کیست؟' },
        choices: [
          { en: 'Someone who must flee war or danger', es: 'Alguien que debe huir de la guerra o el peligro', fa: 'کسی که باید از جنگ یا خطر فرار کند' },
          { en: 'Someone who travels for a short holiday', es: 'Alguien que viaja por unas vacaciones cortas', fa: 'کسی که برای رخصتی کوتاه سفر می‌کند' },
          { en: 'Someone who moves for a better-paid job', es: 'Alguien que se muda por un trabajo mejor pagado', fa: 'کسی که برای کار با معاش بهتر کوچ می‌کند' },
          { en: 'Someone who never leaves their hometown', es: 'Alguien que nunca sale de su pueblo', fa: 'کسی که هرگز شهر خود را ترک نمی‌کند' }],
        answer: 0,
        why: { en: 'Refugees are forced to leave. Migrants usually choose to move, often for work.', es: 'Los refugiados son obligados a irse. Los migrantes suelen elegir mudarse, muchas veces por trabajo.', fa: 'پناهنده‌ها مجبور به رفتن هستند. مهاجران معمولاً خودشان کوچ را انتخاب می‌کنند، اکثراً برای کار.' } },
      { q: { en: 'How did the internet change the world?', es: '¿Cómo cambió internet el mundo?', fa: 'انترنت جهان را چطور تغییر داد؟' },
        choices: [
          { en: 'Ideas can cross the world in seconds', es: 'Las ideas cruzan el mundo en segundos', fa: 'اندیشه‌ها در چند ثانیه از جهان می‌گذرند' },
          { en: 'Letters now take months to arrive', es: 'Las cartas ahora tardan meses en llegar', fa: 'نامه‌ها حالا ماه‌ها طول می‌کشند تا برسند' },
          { en: 'Countries stopped trading with each other', es: 'Los países dejaron de comerciar entre sí', fa: 'کشورها تجارت با یکدیگر را بس کردند' },
          { en: 'Fewer people can learn new things', es: 'Menos gente puede aprender cosas nuevas', fa: 'مردم کمتری می‌توانند چیزهای نو یاد بگیرند' }],
        answer: 0,
        why: { en: 'News, video calls and lessons now reach almost anywhere at once.', es: 'Noticias, videollamadas y clases llegan ahora casi a cualquier lugar al instante.', fa: 'خبر، تماس ویدیویی و درس حالا فوراً تقریباً به هر جا می‌رسد.' } },
      { q: { en: 'Which of these happened first?', es: '¿Cuál de estos pasó primero?', fa: 'کدام یک از این‌ها اول رخ داد؟' },
        choices: [
          { en: 'The Columbian Exchange', es: 'El intercambio colombino', fa: 'مبادلهٔ کلمبی' },
          { en: 'The French Revolution', es: 'La Revolución francesa', fa: 'انقلاب فرانسه' },
          { en: 'World War I', es: 'La Primera Guerra Mundial', fa: 'جنگ جهانی اول' },
          { en: 'The fall of the Berlin Wall', es: 'La caída del Muro de Berlín', fa: 'فرو ریختن دیوار برلین' }],
        answer: 0,
        why: { en: 'The Columbian Exchange began after 1492. Then 1789, 1914 and 1989.', es: 'El intercambio colombino empezó después de 1492. Luego 1789, 1914 y 1989.', fa: 'مبادلهٔ کلمبی بعد از ۱۴۹۲ شروع شد. بعد ۱۷۸۹، ۱۹۱۴ و ۱۹۸۹.' } },
      { q: { en: 'What did the Industrial Revolution change most?', es: '¿Qué cambió más la Revolución Industrial?', fa: 'انقلاب صنعتی بیشتر چه چیزی را تغییر داد؟' },
        choices: [
          { en: 'How goods were made: by machines in factories', es: 'Cómo se hacían los productos: con máquinas en fábricas', fa: 'طرز ساختن جنس: با ماشین در فابریکه' },
          { en: 'Who was chosen as king or queen in Europe', es: 'Quién era elegido rey o reina en Europa', fa: 'چه کسی پادشاه یا ملکهٔ اروپا انتخاب شود' },
          { en: 'Which languages people spoke at home each day', es: 'Qué idiomas hablaba la gente en casa cada día', fa: 'مردم هر روز در خانه به کدام زبان گپ بزنند' },
          { en: 'How the first ships crossed the wide Atlantic Ocean', es: 'Cómo los primeros barcos cruzaron el ancho Atlántico', fa: 'اولین کشتی‌ها چطور از بحر پهناور اطلس گذشتند' }],
        answer: 0,
        why: { en: 'Machines in factories made goods faster and cheaper. Cities and work changed forever.', es: 'Las máquinas en fábricas hicieron productos más rápido y barato. Las ciudades y el trabajo cambiaron para siempre.', fa: 'ماشین‌ها در فابریکه جنس را تیزتر و ارزان‌تر ساختند. شهرها و کار برای همیشه تغییر کردند.' } },
      { q: { en: 'The United Nations began in 1945. What is its main goal?', es: 'Las Naciones Unidas empezaron en 1945. ¿Cuál es su meta principal?', fa: 'سازمان ملل متحد در ۱۹۴۵ شروع شد. هدف اصلی آن چیست؟' },
        choices: [
          { en: 'Keeping peace and helping countries work together', es: 'Mantener la paz y ayudar a los países a trabajar juntos', fa: 'حفظ صلح و کمک به همکاری کشورها' },
          { en: 'Choosing one ruler for all the countries on Earth', es: 'Elegir un solo gobernante para todos los países', fa: 'انتخاب یک حاکم برای همهٔ کشورهای زمین' },
          { en: 'Building the fastest internet in the world', es: 'Construir el internet más rápido del mundo', fa: 'ساختن تیزترین انترنت جهان' },
          { en: 'Running every school in every country', es: 'Dirigir todas las escuelas de todos los países', fa: 'اداره کردن هر مکتب در هر کشور' }],
        answer: 0,
        why: { en: 'After two world wars, countries formed the UN to keep peace and solve shared problems.', es: 'Después de dos guerras mundiales, los países formaron la ONU para mantener la paz y resolver problemas comunes.', fa: 'بعد از دو جنگ جهانی، کشورها سازمان ملل را برای حفظ صلح و حل مشکلات مشترک ساختند.' } },
      { q: { en: 'Looking back from 1500 to today, what is one big pattern?', es: 'Mirando atrás de 1500 a hoy, ¿cuál es un gran patrón?', fa: 'از ۱۵۰۰ تا امروز را که ببینی، یک الگوی بزرگ چیست؟' },
        choices: [
          { en: 'The world grew more and more connected', es: 'El mundo se conectó cada vez más', fa: 'جهان بیشتر و بیشتر به هم وصل شد' },
          { en: 'Countries stopped trading with one another', es: 'Los países dejaron de comerciar entre sí', fa: 'کشورها تجارت با همدیگر را بس کردند' },
          { en: 'People stopped moving to new places', es: 'La gente dejó de mudarse a lugares nuevos', fa: 'مردم دیگر به جاهای نو کوچ نکردند' },
          { en: 'Nothing much changed in 500 years', es: 'Casi nada cambió en 500 años', fa: 'در ۵۰۰ سال چیز زیادی تغییر نکرد' }],
        answer: 0,
        why: { en: 'Ships, trade, factories, railways, planes and the internet tied the world closer, step by step.', es: 'Barcos, comercio, fábricas, trenes, aviones e internet unieron más el mundo, paso a paso.', fa: 'کشتی، تجارت، فابریکه، ریل، طیاره و انترنت جهان را قدم به قدم نزدیک‌تر کردند.' } }
    ]
  },

  learned: [
    { en: 'Trade, travel and the internet link the world. This is [[globalization|globalization]].', es: 'El comercio, los viajes e internet unen el mundo. Esto es la [[globalization|globalización]].', fa: 'تجارت، سفر و انترنت جهان را وصل می‌کنند. این [[globalization|جهانی شدن]] است.' },
    { en: 'People move for safety, work and family. [[refugee|Refugees]] flee danger; [[migrant|migrants]] seek new lives.', es: 'La gente se muda por seguridad, trabajo y familia. Los [[refugee|refugiados]] huyen del peligro; los [[migrant|migrantes]] buscan una vida nueva.', fa: 'مردم برای امنیت، کار و خانواده کوچ می‌کنند. [[refugee|پناهنده‌ها]] از خطر فرار می‌کنند؛ [[migrant|مهاجران]] زندگی نو می‌خواهند.' },
    { en: '[[climate change|Climate change]] and diseases cross borders, so countries must work together, as in the [[united nations|United Nations]].', es: 'El [[climate change|cambio climático]] y las enfermedades cruzan fronteras, así que los países deben trabajar juntos, como en las [[united nations|Naciones Unidas]].', fa: '[[climate change|تغییر اقلیم]] و مریضی‌ها از مرزها می‌گذرند، پس کشورها باید با هم کار کنند، مثل [[united nations|سازمان ملل متحد]].' }
  ],
  reflect: {
    q: { en: 'From 1500 to today, which moment in history changed your life the most? Why?', es: 'De 1500 a hoy, ¿qué momento de la historia cambió más tu vida? ¿Por qué?', fa: 'از ۱۵۰۰ تا امروز، کدام لحظهٔ تاریخ زندگی تو را بیشتر تغییر داد؟ چرا؟' },
    starter: { en: 'The moment that changed my life the most is', es: 'El momento que más cambió mi vida es', fa: 'لحظه‌ای که زندگی مرا بیشتر تغییر داد' }
  }
};
