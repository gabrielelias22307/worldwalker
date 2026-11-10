/* CIVICWALKER · Episode 3.3 · Civil Rights (a quiet memorial episode)
   Farmville, Virginia, today. The Robert Russa Moton Museum: the old Moton High School, where 16-year-old Barbara
   Johns led a student strike on April 23, 1951. Hard history, said plainly: no jokes, no prize, no bad guys to chase.
   The Grump is "The Forgetting". The people are museum guides, a historian, descendants of the strikers, visitors.
   North-west (rows 1-9): Hall 1, the 1951 strike, with the auditorium and an old classroom (side rooms).
   North-east: Hall 2, the long road of the law (the timeline stops, the historian, the charter stone).
   Row 10: the front wall of the old school, with two doors. South: the front lawn, Main Street (l), two town homes
   and a small park where the fog of The Forgetting gathers. */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'GOVT',
  title: { en: 'Civil Rights', es: 'Los derechos civiles', fa: 'حقوق مدنی' },
  place: { en: 'Farmville, today', es: 'Farmville, hoy', fa: 'فارمویل، امروز' },
  weather: { sky: 'clear', time: 'sunset' },
  intro: [
    { en: 'The Grump wants people to forget the students who fought for [[civil rights|civil rights]] here.',
      es: 'El Gruñón quiere que la gente olvide a los estudiantes que lucharon aquí por los [[civil rights|derechos civiles]].',
      fa: 'غرغرو می‌خواهد مردم شاگردانی را فراموش کنند که اینجا برای [[civil rights|حقوق مدنی]] مبارزه کردند.' },
    { en: 'Listen to the 3 people here with care. Then fix the charter stone.',
      es: 'Escucha con atención a las 3 personas de aquí. Luego arregla la piedra de la carta.',
      fa: 'به ۳ نفر اینجا با دقت گوش بده. بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: Farmville, in Prince Edward County, Virginia (no timeline in this game) */
  scenes: {
    at: [-78.39, 37.30],
    start: [
      { en: 'Farmville is a small town in Virginia. Moton High School was here.',
        es: 'Farmville es un pueblo pequeño de Virginia. Aquí estaba la escuela secundaria Moton.',
        fa: 'فارمویل یک شهر کوچک در ویرجینیا است. لیسهٔ موتن اینجا بود.' },
      { en: 'In 1951, Black students here went on strike for a fair school.',
        es: 'En 1951, los estudiantes negros de aquí hicieron una huelga por una escuela justa.',
        fa: 'در سال ۱۹۵۱، شاگردان سیاه‌پوست اینجا برای یک مکتب عادلانه اعتصاب کردند.' },
      { en: 'Today the old school is a museum. It remembers their courage.',
        es: 'Hoy la vieja escuela es un museo. Recuerda su valentía.',
        fa: 'امروز مکتب کهنه یک موزیم است. شجاعت آن‌ها را به یاد نگه می‌دارد.' }
    ],
    page: { en: 'Virginia chose a statue of Barbara Johns to stand in the US Capitol.',
      es: 'Virginia eligió una estatua de Barbara Johns para el Capitolio de EE. UU.',
      fa: 'ویرجینیا مجسمهٔ باربارا جانز را برای ایستادن در کاپیتول امریکا انتخاب کرد.' },
    guess: {
      q: { en: 'The strikers were teenagers. Could students help change the law of the whole country?', es: 'Los huelguistas eran adolescentes. ¿Pudieron unos estudiantes ayudar a cambiar la ley de todo el país?', fa: 'اعتصاب‌کنندگان نوجوان بودند. آیا شاگردان توانستند به تغییر قانون تمام کشور کمک کنند؟' },
      choices: [
        { t: { en: 'Yes, they helped', es: 'Sí, ayudaron', fa: 'بله، کمک کردند' }, ok: true },
        { t: { en: 'No, students cannot', es: 'No, los estudiantes no pueden', fa: 'نه، شاگردان نمی‌توانند' } }
      ],
      why: { en: 'Their case became part of Brown v. Board of Education, decided in 1954.', es: 'Su caso fue parte de Brown contra la Junta de Educación, decidido en 1954.', fa: 'دعوای آن‌ها بخشی از دعوای «براون علیه شورای تعلیم» شد که در ۱۹۵۴ فیصله شد.' }
    },
    next: {
      q: { en: 'Next: political parties. Do people with shared ideas work together to win elections?', es: 'Ahora: los partidos políticos. ¿Las personas con ideas comunes trabajan juntas para ganar elecciones?', fa: 'بعدی: حزب‌های سیاسی. آیا مردمی که فکرهای مشترک دارند برای بردن انتخابات با هم کار می‌کنند؟' },
      choices: [
        { t: { en: 'Yes, they work together', es: 'Sí, trabajan juntas', fa: 'بله، با هم کار می‌کنند' }, ok: true },
        { t: { en: 'No, they work alone', es: 'No, trabajan solas', fa: 'نه، تنها کار می‌کنند' } }
      ],
      why: { en: 'A political party is a group with shared ideas. Members work together to elect their candidates.', es: 'Un partido político es un grupo con ideas comunes. Sus miembros trabajan juntos para elegir a sus candidatos.', fa: 'حزب سیاسی گروهی با فکرهای مشترک است. اعضا با هم کار می‌کنند تا نامزدهای خود را انتخاب کنند.' }
    }
  },
  /* houses: two rooms of the museum (the auditorium, an old classroom) and two homes on Main Street */
  houses: [
    { at: [3, 3], style: 1, name: { en: 'Mr. Harold', es: 'Sr. Harold', fa: 'آقای هارولد' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#2a3a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the auditorium. The students met here on April 23, 1951.', es: 'Este es el auditorio. Los estudiantes se reunieron aquí el 23 de abril de 1951.', fa: 'این تالار اجتماعات است. شاگردان در ۲۳ اپریل ۱۹۵۱ اینجا جمع شدند.' },
        { en: 'Barbara Johns asked the whole school to walk out together.', es: 'Barbara Johns le pidió a toda la escuela que saliera junta.', fa: 'باربارا جانز از تمام مکتب خواست که با هم بیرون بروند.' },
        { en: 'The students walked out. They stayed out of school for about two weeks.', es: 'Los estudiantes salieron. Se quedaron fuera de la escuela unas dos semanas.', fa: 'شاگردان بیرون رفتند. حدود دو هفته به مکتب نیامدند.' }
      ] },
    { at: [12, 3], style: 3, name: { en: 'Ms. Dorothy', es: 'Sra. Dorothy', fa: 'خانم دوروتی' },
      look: { skin: 4, hair: '#8a8a8a', shirt: '#6a3a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This room shows a classroom from 1951. I taught school for forty years.', es: 'Esta sala muestra un salón de 1951. Yo fui maestra durante cuarenta años.', fa: 'این اتاق یک صنف درسی سال ۱۹۵۱ را نشان می‌دهد. من چهل سال معلم بودم.' },
        { en: 'Moton was built for about 180 students. More than 450 came.', es: 'Moton se construyó para unos 180 estudiantes. Llegaron más de 450.', fa: 'موتن برای حدود ۱۸۰ شاگرد ساخته شده بود. بیشتر از ۴۵۰ نفر آمدند.' },
        { en: 'The shacks had wood stoves. Their roofs leaked when it rained.', es: 'Las casetas tenían estufas de leña. Sus techos goteaban cuando llovía.', fa: 'کلبه‌ها بخاری چوبی داشتند. وقتی باران می‌بارید، سقف‌شان چکه می‌کرد.' }
      ] },
    { at: [3, 18], name: { en: 'Mrs. Celeste', es: 'Sra. Celeste', fa: 'خانم سلست' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#2f6f8f', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My mother was eight when the county closed its schools in 1959.', es: 'Mi madre tenía ocho años cuando el condado cerró sus escuelas en 1959.', fa: 'مادرم هشت ساله بود وقتی ولسوالی مکتب‌هایش را در ۱۹۵۹ بست.' },
        { en: 'She went to live with family far away, so she could go to school.', es: 'Se fue a vivir con familiares lejos, para poder ir a la escuela.', fa: 'او پیش خانواده‌اش به جای دور رفت، تا بتواند مکتب برود.' },
        { en: 'Some children here lost five years of school. They never got them back.', es: 'Algunos niños de aquí perdieron cinco años de escuela. Nunca los recuperaron.', fa: 'بعضی کودکان اینجا پنج سال مکتب را از دست دادند. هرگز آن را پس نگرفتند.' }
      ] },
    { at: [26, 18], name: { en: 'Mr. Calvin', es: 'Sr. Calvin', fa: 'آقای کلوین' },
      look: { skin: 4, hair: '#1a1208', shirt: '#5a4a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'While the schools were closed, some churches taught children in their basements.', es: 'Mientras las escuelas estaban cerradas, algunas iglesias daban clases en sus sótanos.', fa: 'وقتی مکتب‌ها بسته بودند، بعضی کلیساها در تهکاوی‌شان به کودکان درس می‌دادند.' },
        { en: 'In 1963, a Free School opened here. It taught children for one year.', es: 'En 1963, aquí abrió una Escuela Libre. Enseñó a niños durante un año.', fa: 'در ۱۹۶۳، یک مکتب رایگان اینجا باز شد. یک سال به کودکان درس داد.' },
        { en: 'In 1964, the Supreme Court said: open the public schools again.', es: 'En 1964, la Corte Suprema dijo: abran otra vez las escuelas públicas.', fa: 'در ۱۹۶۴، ستره محکمه گفت: مکتب‌های دولتی را دوباره باز کنید.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. f = museum floor, W = walls, D = side rooms and display cases, x = exhibit panels.
     Halls 1 and 2 join at rows 4-5. Row 10: the school's front wall, doors at x 7-8 and x 23-24.
     South: the lawn (paths :), Main Street (l, rows 14-15), two homes (RRR over hdh) and a small park. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'WffffffffffffffWWffffffffffffffW',
    'WfDDDfffxffDDDfWWffffxfffffffffW',
    'WfDdDffffffDdDfWWffffffffffffffW',
    'WffffffffffffffffffffffffffffffW',
    'WffffffffffffffffffffffffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WfDDDffxffDDDffWWffffxfffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WWWWWWWffWWWWWWWWWWWWWWffWWWWWWW',
    'T......::..............::......T',
    'T.x....::.....,........::...x..T',
    'T..T...::..........,...::..T...T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T..............,...............T',
    'T.RRR.....T.,....,.T.....RRR...T',
    'T.hdh.......,....,.......hdh...T',
    'T.........,.......,............T',
    'T..T.....,...........T......T..T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [8, 12],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration). They honor memory, never suffering. */
  finds: [
    { clueAt: [26, 13], at: [26, 16], decor: 'flower',
      clue: { en: 'From this note, walk 3 steps south, across Main Street.', es: 'Desde esta nota, camina 3 pasos al sur, cruzando la calle Main.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، از سرک عمومی بگذر.' },
      text: { en: 'People leave flowers by the old school to thank the students of 1951.', es: 'La gente deja flores junto a la vieja escuela para agradecer a los estudiantes de 1951.', fa: 'مردم کنار مکتب کهنه گل می‌گذارند تا از شاگردان سال ۱۹۵۱ تشکر کنند.' } },
    { clueAt: [14, 8], at: [14, 6], decor: 'feather',
      clue: { en: 'From this note, walk 2 steps north, along the wall of Hall 1.', es: 'Desde esta nota, camina 2 pasos al norte, junto a la pared de la Sala 1.', fa: 'از این یادداشت، ۲ قدم به شمال برو، کنار دیوار تالار ۱.' },
      text: { en: 'After the strike, the students wrote to NAACP lawyers for help. Here is an old pen.', es: 'Después de la huelga, los estudiantes escribieron a abogados de la NAACP para pedir ayuda. Aquí hay una pluma vieja.', fa: 'بعد از اعتصاب، شاگردان به وکیلان NAACP نامه نوشتند و کمک خواستند. اینجا یک قلم کهنه است.' } }
  ],

  words: {
    'civil rights': { en: 'the rights every citizen has to be treated equally under the law', es: 'los derechos de todo ciudadano a ser tratado con igualdad ante la ley', fa: 'حقوقی که هر شهروند دارد تا در برابر قانون برابر دیده شود' },
    segregation: { en: 'keeping people apart by race, by law or by custom', es: 'separar a las personas por su raza, por ley o por costumbre', fa: 'جدا نگه داشتن مردم به خاطر نژاد، با قانون یا با رسم' },
    strike: { en: 'when people stop work or school together, to protest', es: 'cuando la gente deja de trabajar o de ir a clase junta, para protestar', fa: 'وقتی مردم با هم کار یا مکتب را بس می‌کنند، برای اعتراض' },
    integrate: { en: 'to open a place, like a school, to people of all races', es: 'abrir un lugar, como una escuela, a personas de todas las razas', fa: 'باز کردن یک جا، مثل مکتب، به روی مردم همهٔ نژادها' },
    amendment: { en: 'a change added to the Constitution', es: 'un cambio que se agrega a la Constitución', fa: 'تغییری که به قانون اساسی اضافه می‌شود' },
    'equal protection': { en: 'the 14th Amendment promise: the laws must treat everyone the same', es: 'la promesa de la Enmienda 14: las leyes deben tratar a todos por igual', fa: 'وعدهٔ متمم چهاردهم: قانون باید با همه یکسان رفتار کند' },
    'separate but equal': { en: 'the 1896 Plessy rule: races may be kept apart if things are "equal"', es: 'la regla de Plessy de 1896: las razas pueden estar separadas si todo es "igual"', fa: 'قاعدهٔ پلسی در ۱۸۹۶: نژادها جدا نگه داشته شوند اگر همه چیز «برابر» باشد' },
    'massive resistance': { en: 'Virginia\'s plan in the 1950s to fight school integration', es: 'el plan de Virginia en los años 1950 para frenar la integración escolar', fa: 'نقشهٔ ویرجینیا در دههٔ ۱۹۵۰ برای جلوگیری از یکجا شدن مکتب‌ها' },
    'oral history': { en: 'a person\'s own memories, told aloud and recorded', es: 'los recuerdos de una persona, contados en voz alta y grabados', fa: 'خاطره‌های خود یک نفر که به زبان گفته و ثبت می‌شود' },
    discrimination: { en: 'treating a person unfairly because of race or another trait', es: 'tratar a una persona injustamente por su raza u otro rasgo', fa: 'رفتار ناعادلانه با یک نفر به خاطر نژاد یا یک صفت دیگر' },
    'literacy test': { en: 'a reading test once used to stop Black citizens from voting', es: 'una prueba de lectura que antes se usaba para impedir votar a ciudadanos negros', fa: 'یک امتحان خواندن که زمانی برای منع رأی شهروندان سیاه‌پوست به کار می‌رفت' }
  },

  npcs: [
    {
      x: 6, y: 5,
      name: { en: 'Ms. Loretta', es: 'Sra. Loretta', fa: 'خانم لورتا' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a6e4f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the Moton Museum. This was once Moton High School.', es: 'Bienvenido al Museo Moton. Esto antes era la escuela secundaria Moton.', fa: 'به موزیم موتن خوش آمدی. اینجا زمانی لیسهٔ موتن بود.' },
        { en: 'It was a school for Black students. Virginia schools had [[segregation|segregation]] by law.', es: 'Era una escuela para estudiantes negros. Las escuelas de Virginia tenían [[segregation|segregación]] por ley.', fa: 'این مکتب شاگردان سیاه‌پوست بود. مکتب‌های ویرجینیا با قانون [[segregation|جدایی نژادی]] داشتند.' },
        { en: 'It was very crowded. Some classes met in tar-paper shacks.', es: 'Estaba muy llena. Algunas clases eran en casetas de cartón alquitranado.', fa: 'خیلی پر از شاگرد بود. بعضی صنف‌ها در کلبه‌های کاغذ قیری درس می‌خواندند.' },
        { en: 'On April 23, 1951, Barbara Johns, age 16, led a student [[strike|strike]].', es: 'El 23 de abril de 1951, Barbara Johns, de 16 años, dirigió una [[strike|huelga]] estudiantil.', fa: 'در ۲۳ اپریل ۱۹۵۱، باربارا جانز ۱۶ ساله یک [[strike|اعتصاب]] شاگردان را رهبری کرد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did the Moton students go on strike in 1951?', es: '¿Por qué hicieron huelga los estudiantes de Moton en 1951?', fa: 'چرا شاگردان موتن در ۱۹۵۱ اعتصاب کردند؟' },
        choices: [
          { ok: true, t: { en: 'Their school was crowded and unequal', es: 'Su escuela estaba llena y era desigual', fa: 'مکتب‌شان پر و نابرابر بود' },
            why: { en: 'Yes. The white high school was far better. The students asked for a fair school.', es: 'Sí. La escuela secundaria blanca era mucho mejor. Los estudiantes pidieron una escuela justa.', fa: 'بله. لیسهٔ سفیدپوستان خیلی بهتر بود. شاگردان یک مکتب عادلانه خواستند.' } },
          { t: { en: 'They wanted a longer summer break', es: 'Querían unas vacaciones más largas', fa: 'رخصتی تابستان طولانی‌تر می‌خواستند' },
            why: { en: 'No. They walked out to protest an unequal school, not to get a vacation.', es: 'No. Salieron para protestar por una escuela desigual, no para tener vacaciones.', fa: 'نه. آن‌ها برای اعتراض به یک مکتب نابرابر بیرون رفتند، نه برای رخصتی.' } },
          { t: { en: 'Their teachers told them to stay home', es: 'Sus maestros les dijeron que no fueran', fa: 'معلمان‌شان گفتند در خانه بمانند' },
            why: { en: 'No. The students planned the strike themselves, in secret.', es: 'No. Los estudiantes planearon la huelga ellos mismos, en secreto.', fa: 'نه. شاگردان خودشان اعتصاب را پنهانی برنامه‌ریزی کردند.' } }
        ]
      }
    },
    {
      x: 24, y: 8,
      name: { en: 'Dr. Okafor', es: 'Dra. Okafor', fa: 'داکتر اوکافور' },
      role: { en: 'Historian', es: 'Historiadora', fa: 'تاریخ‌دان' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I study the law. The students\' strike became a court case.', es: 'Estudio las leyes. La huelga de los estudiantes se volvió un caso en la corte.', fa: 'من قانون را مطالعه می‌کنم. اعتصاب شاگردان به یک دعوای محکمه تبدیل شد.' },
        { en: 'NAACP lawyers Oliver Hill and Spottswood Robinson took the case.', es: 'Los abogados de la NAACP Oliver Hill y Spottswood Robinson tomaron el caso.', fa: 'وکیلان NAACP، اولیور هیل و اسپاتسوود رابینسون، این دعوا را گرفتند.' },
        { en: 'It was called Davis v. County School Board of Prince Edward County.', es: 'Se llamó Davis contra la Junta Escolar del Condado de Prince Edward.', fa: 'نامش «دیویس علیه شورای مکتب‌های ولسوالی پرنس ادوارد» بود.' },
        { en: 'In 1954, Davis and four other cases were decided together as Brown v. Board.', es: 'En 1954, Davis y otros cuatro casos se decidieron juntos como Brown contra la Junta.', fa: 'در ۱۹۵۴، دیویس و چهار دعوای دیگر با هم به نام «براون علیه شورا» فیصله شدند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What did the Supreme Court decide in Brown v. Board in 1954?', es: '¿Qué decidió la Corte Suprema en Brown contra la Junta en 1954?', fa: 'ستره محکمه در دعوای «براون علیه شورا» در ۱۹۵۴ چه فیصله کرد؟' },
        choices: [
          { ok: true, t: { en: 'Separate schools for each race are not equal', es: 'Las escuelas separadas por raza no son iguales', fa: 'مکتب‌های جدا برای هر نژاد برابر نیستند' },
            why: { en: 'Yes. Brown overturned the old [[separate but equal|"separate but equal"]] rule for public schools.', es: 'Sí. Brown anuló la vieja regla de [[separate but equal|"separados pero iguales"]] para las escuelas públicas.', fa: 'بله. براون قاعدهٔ کهنهٔ [[separate but equal|«جدا اما برابر»]] را برای مکتب‌های دولتی لغو کرد.' } },
          { t: { en: 'Each state may keep its schools apart by race', es: 'Cada estado puede separar sus escuelas por raza', fa: 'هر ایالت می‌تواند مکتب‌ها را به نژاد جدا کند' },
            why: { en: 'No. That was the old Plessy rule of 1896. Brown ended it for public schools.', es: 'No. Esa era la vieja regla de Plessy de 1896. Brown la terminó para las escuelas públicas.', fa: 'نه. این قاعدهٔ کهنهٔ پلسی در ۱۸۹۶ بود. براون آن را برای مکتب‌های دولتی ختم کرد.' } },
          { t: { en: 'Only students over 16 may go on strike', es: 'Solo los mayores de 16 pueden hacer huelga', fa: 'فقط شاگردان بالای ۱۶ سال می‌توانند اعتصاب کنند' },
            why: { en: 'No. Brown was about segregated schools, not about strikes.', es: 'No. Brown trataba de escuelas segregadas, no de huelgas.', fa: 'نه. براون دربارهٔ مکتب‌های جدا شده بود، نه دربارهٔ اعتصاب.' } }
        ]
      }
    },
    {
      x: 21, y: 19,
      name: { en: 'Mr. Walter', es: 'Sr. Walter', fa: 'آقای والتر' },
      role: { en: 'Grandson of a striker', es: 'Nieto de una huelguista', fa: 'نواسهٔ یک اعتصاب‌کننده' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'My grandmother was a student at Moton. She walked out in 1951.', es: 'Mi abuela era estudiante en Moton. Salió de clase en 1951.', fa: 'مادرکلانم شاگرد موتن بود. او در ۱۹۵۱ از مکتب بیرون رفت.' },
        { en: 'After Brown, the county did not want to [[integrate|integrate]] its schools.', es: 'Después de Brown, el condado no quiso [[integrate|integrar]] sus escuelas.', fa: 'بعد از براون، ولسوالی نخواست مکتب‌هایش را [[integrate|یکجا]] کند.' },
        { en: 'From 1959 to 1964, Prince Edward County closed all its public schools.', es: 'De 1959 a 1964, el condado de Prince Edward cerró todas sus escuelas públicas.', fa: 'از ۱۹۵۹ تا ۱۹۶۴، ولسوالی پرنس ادوارد همهٔ مکتب‌های دولتی‌اش را بست.' },
        { en: 'White children went to a new private school. Many Black children had none.', es: 'Los niños blancos fueron a una escuela privada nueva. Muchos niños negros no tuvieron escuela.', fa: 'کودکان سفیدپوست به یک مکتب خصوصی نو رفتند. بسیاری از کودکان سیاه‌پوست مکتب نداشتند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What did Prince Edward County do from 1959 to 1964?', es: '¿Qué hizo el condado de Prince Edward de 1959 a 1964?', fa: 'ولسوالی پرنس ادوارد از ۱۹۵۹ تا ۱۹۶۴ چه کرد؟' },
        choices: [
          { ok: true, t: { en: 'It closed all of its public schools', es: 'Cerró todas sus escuelas públicas', fa: 'همهٔ مکتب‌های دولتی‌اش را بست' },
            why: { en: 'Yes. It was part of Virginia\'s [[massive resistance|Massive Resistance]]. The schools reopened in 1964.', es: 'Sí. Fue parte de la [[massive resistance|Resistencia Masiva]] de Virginia. Las escuelas reabrieron en 1964.', fa: 'بله. این بخشی از [[massive resistance|مقاومت گسترده]] ویرجینیا بود. مکتب‌ها در ۱۹۶۴ دوباره باز شدند.' } },
          { t: { en: 'It built a new, fair school for all', es: 'Construyó una escuela nueva y justa para todos', fa: 'یک مکتب نو و عادلانه برای همه ساخت' },
            why: { en: 'No. The county closed its schools so it would not have to integrate.', es: 'No. El condado cerró sus escuelas para no tener que integrarlas.', fa: 'نه. ولسوالی مکتب‌هایش را بست تا مجبور به یکجا کردن نشود.' } },
          { t: { en: 'It obeyed Brown and mixed its schools', es: 'Obedeció a Brown e integró sus escuelas', fa: 'از براون پیروی کرد و مکتب‌ها را یکجا کرد' },
            why: { en: 'No. It refused. In 1964, the Supreme Court ordered the schools to reopen.', es: 'No. Se negó. En 1964, la Corte Suprema ordenó reabrir las escuelas.', fa: 'نه. قبول نکرد. در ۱۹۶۴، ستره محکمه امر کرد مکتب‌ها دوباره باز شوند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 2, text: { en: 'HALL 1 · APRIL 23, 1951 · Students walked out of Moton High School to ask for a fair school.', es: 'SALA 1 · 23 DE ABRIL DE 1951 · Los estudiantes salieron de Moton para pedir una escuela justa.', fa: 'تالار ۱ · ۲۳ اپریل ۱۹۵۱ · شاگردان از لیسهٔ موتن بیرون رفتند تا یک مکتب عادلانه بخواهند.' } },
    { x: 7, y: 7, text: { en: 'SEGREGATION · By law, Black and white students in Virginia went to separate schools.', es: 'SEGREGACIÓN · Por ley, los estudiantes negros y blancos de Virginia iban a escuelas separadas.', fa: 'جدایی نژادی · با قانون، شاگردان سیاه‌پوست و سفیدپوست ویرجینیا به مکتب‌های جدا می‌رفتند.' } },
    { x: 21, y: 2, text: { en: 'HALL 2 · THE LONG ROAD OF THE LAW · From the 13th Amendment to the Voting Rights Act.', es: 'SALA 2 · EL LARGO CAMINO DE LA LEY · De la Enmienda 13 a la Ley de Derecho al Voto.', fa: 'تالار ۲ · راه دراز قانون · از متمم سیزدهم تا قانون حق رأی.' } },
    { x: 21, y: 7, text: { en: 'AFTER 1870 · Some states used poll taxes and literacy tests to stop Black citizens from voting.', es: 'DESPUÉS DE 1870 · Algunos estados usaron impuestos y pruebas de lectura para impedir votar a ciudadanos negros.', fa: 'بعد از ۱۸۷۰ · بعضی ایالت‌ها با مالیهٔ رأی و امتحان خواندن نگذاشتند شهروندان سیاه‌پوست رأی بدهند.' } },
    { x: 2, y: 12, text: { en: 'ROBERT RUSSA MOTON MUSEUM · The old Moton High School is now a National Historic Landmark.', es: 'MUSEO ROBERT RUSSA MOTON · La vieja escuela Moton hoy es un Monumento Histórico Nacional.', fa: 'موزیم رابرت راسا موتن · لیسهٔ کهنهٔ موتن حالا یک نشان تاریخی ملی است.' } },
    { x: 28, y: 12, text: { en: '1959 TO 1964 · Prince Edward County closed its public schools for five years rather than integrate.', es: '1959 A 1964 · El condado de Prince Edward cerró sus escuelas públicas cinco años para no integrarlas.', fa: '۱۹۵۹ تا ۱۹۶۴ · ولسوالی پرنس ادوارد مکتب‌های دولتی را پنج سال بست تا آن‌ها را یکجا نکند.' } }
  ],

  /* the quest (keeping memory): Ms. Pearl (gold !) in Hall 2 lost Ruth's oral-history card ->
     Mr. Ray the groundskeeper on the front lawn (south-west) saw a boy leave it by a tree ->
     find it by the last tree in the south-east corner, past Main Street -> back to Ms. Pearl */
  quest: {
    stat: 'mov',
    title: { en: 'Ruth\'s Story Card', es: 'La tarjeta de la historia de Ruth', fa: 'کارت داستان روت' },
    giver: {
      x: 28, y: 2,
      name: { en: 'Ms. Pearl', es: 'Sra. Pearl', fa: 'خانم پرل' },
      role: { en: 'Oral history volunteer', es: 'Voluntaria de historia oral', fa: 'داوطلب تاریخ شفاهی' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#4a5a8a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I record [[oral history|oral histories]]: people telling their own memories.', es: 'Grabo [[oral history|historias orales]]: personas que cuentan sus propios recuerdos.', fa: 'من [[oral history|تاریخ شفاهی]] ثبت می‌کنم: مردمی که خاطره‌های خود را می‌گویند.' },
        { en: 'One story card is lost. It holds Ruth\'s memory of the strike.', es: 'Se perdió una tarjeta. Guarda el recuerdo de Ruth sobre la huelga.', fa: 'یک کارت داستان گم شده. خاطرهٔ روت از اعتصاب در آن است.' },
        { en: 'Mr. Ray, the groundskeeper, may have seen it. He works out front.', es: 'El Sr. Ray, el jardinero, tal vez la vio. Trabaja enfrente.', fa: 'شاید آقای ری، باغبان، آن را دیده باشد. او در پیش روی مکتب کار می‌کند.' }
      ],
      wait: { en: 'Mr. Ray works on the front lawn, on the west side.', es: 'El Sr. Ray trabaja en el césped de enfrente, en el lado oeste.', fa: 'آقای ری در چمن پیش روی مکتب، در طرف غرب، کار می‌کند.' },
      thanks: { en: 'Thank you. Ruth\'s words are back in the exhibit. People will remember.', es: 'Gracias. Las palabras de Ruth están otra vez en la exhibición. La gente recordará.', fa: 'تشکر. سخنان روت دوباره در نمایشگاه است. مردم به یاد خواهند داشت.' }
    },
    contact: {
      x: 5, y: 13,
      name: { en: 'Mr. Ray', es: 'Sr. Ray', fa: 'آقای ری' },
      role: { en: 'Groundskeeper', es: 'Jardinero', fa: 'باغبان' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#3a6a3a', pants: '#3a3a2a', style: 'short', hat: '#6a5a3a' },
      lines: [
        { en: 'A story card? A school group visited this morning.', es: '¿Una tarjeta? Un grupo escolar vino esta mañana.', fa: 'کارت داستان؟ امروز صبح یک گروه مکتب اینجا آمد.' },
        { en: 'A boy left it by a tree. Cross Main Street to the south-east corner.', es: 'Un niño la dejó junto a un árbol. Cruza la calle Main hasta la esquina sureste.', fa: 'یک پسر آن را کنار یک درخت گذاشت. از سرک عمومی به کنج جنوب شرق برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [28, 19],
      hint: { en: 'South of Main Street: the tree in the south-east corner', es: 'Al sur de la calle Main: el árbol de la esquina sureste', fa: 'جنوب سرک عمومی: درخت کنج جنوب شرق' },
      found: { en: 'The story card! It reads: "We were young, and we stood up together." Ruth, Moton student.', es: '¡La tarjeta! Dice: "Éramos jóvenes y nos levantamos juntos". Ruth, estudiante de Moton.', fa: 'کارت داستان! رویش نوشته: «ما جوان بودیم و با هم ایستادیم.» روت، شاگرد موتن.' },
      item: { icon: '📇', name: { en: 'Ruth\'s story card', es: 'La tarjeta de Ruth', fa: 'کارت داستان روت' } }
    }
  },

  scraps: [[1, 9], [30, 1], [1, 20]],
  smudges: [], // a memorial: nothing to fight here
  memorial: true,

  /* the charter stone in the world: walk the timeline stops in Halls 1 and 2 in order, 1865 to 1965 */
  challenge: {
    at: [27, 5],
    type: 'route', // in the world; the card version (order) is the fallback
    spots: [[19, 4], [5, 8], [29, 8], [12, 5], [9, 1], [18, 1], [2, 6]],
    stat: 'hei',
    title: { en: 'The Long Road of the Law', es: 'El largo camino de la ley', fa: 'راه دراز قانون' },
    intro: { en: 'The Grump mixed up the timeline. Walk the stops in order, from 1865 to 1965. Each step answers the one before.',
      es: 'El Gruñón revolvió la línea del tiempo. Camina a las paradas en orden, de 1865 a 1965. Cada paso responde al anterior.',
      fa: 'غرغرو خط زمان را درهم کرد. به ترتیب از ۱۸۶۵ تا ۱۹۶۵ به ایستگاه‌ها برو. هر قدم جواب قدم قبلی است.' },
    items: [
      { icon: '⛓️', t: { en: '13th Amendment, 1865: slavery ends in the United States', es: 'Enmienda 13, 1865: termina la esclavitud en Estados Unidos', fa: 'متمم سیزدهم، ۱۸۶۵: بردگی در امریکا ختم می‌شود' } },
      { icon: '📜', t: { en: '14th Amendment, 1868: citizenship and equal protection of the laws', es: 'Enmienda 14, 1868: ciudadanía e igual protección de las leyes', fa: 'متمم چهاردهم، ۱۸۶۸: شهروندی و حمایت برابر قانون' } },
      { icon: '🗳️', t: { en: '15th Amendment, 1870: the vote cannot be denied because of race', es: 'Enmienda 15, 1870: no se puede negar el voto por la raza', fa: 'متمم پانزدهم، ۱۸۷۰: رأی را به خاطر نژاد نمی‌شود منع کرد' } },
      { icon: '⚖️', t: { en: 'Plessy v. Ferguson, 1896: a step back. "Separate but equal" is allowed', es: 'Plessy contra Ferguson, 1896: un paso atrás. Se permite "separados pero iguales"', fa: 'پلسی علیه فرگوسن، ۱۸۹۶: یک قدم به عقب. «جدا اما برابر» اجازه داده می‌شود' } },
      { icon: '🏫', t: { en: 'Brown v. Board, 1954: answers Plessy. Separate schools are not equal', es: 'Brown contra la Junta, 1954: responde a Plessy. Las escuelas separadas no son iguales', fa: 'براون علیه شورا، ۱۹۵۴: جواب پلسی. مکتب‌های جدا برابر نیستند' } },
      { icon: '🏛️', t: { en: 'Civil Rights Act, 1964: ends segregation in public places and job discrimination', es: 'Ley de Derechos Civiles, 1964: termina la segregación en lugares públicos y la discriminación en el trabajo', fa: 'قانون حقوق مدنی، ۱۹۶۴: جدایی در جاهای عمومی و تبعیض در کار را ختم می‌کند' } },
      { icon: '✍️', t: { en: 'Voting Rights Act, 1965: keeps the 15th\'s promise. Literacy tests end', es: 'Ley de Derecho al Voto, 1965: cumple la promesa de la Enmienda 15. Terminan las pruebas de lectura', fa: 'قانون حق رأی، ۱۹۶۵: وعدهٔ متمم پانزدهم را نگه می‌دارد. امتحان خواندن ختم می‌شود' } }
    ],
    why: { en: 'Walk forward in time: 1865, 1868, 1870, 1896, 1954, 1964, 1965. Each step answers the one before.',
      es: 'Avanza en el tiempo: 1865, 1868, 1870, 1896, 1954, 1964, 1965. Cada paso responde al anterior.',
      fa: 'در زمان پیش برو: ۱۸۶۵، ۱۸۶۸، ۱۸۷۰، ۱۸۹۶، ۱۹۵۴، ۱۹۶۴، ۱۹۶۵. هر قدم جواب قدم قبلی است.' },
    success: { en: 'You walked the long road of the law. Rights grew step by step.', es: 'Recorriste el largo camino de la ley. Los derechos crecieron paso a paso.', fa: 'راه دراز قانون را رفتی. حقوق قدم به قدم بزرگ شد.' }
  },

  boss: {
    at: [15, 19],
    stat: 'hei',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting has covered the small park on Main Street in gray fog.', es: 'El Olvido cubrió el pequeño parque de la calle Main con una niebla gris.', fa: 'فراموشی پارک کوچک سرک عمومی را با مه خاکستری پوشانده است.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts. The students\' story can be read again. Charter page 3.3 returns.', es: 'La niebla se va. La historia de los estudiantes se puede leer otra vez. La página 3.3 de la carta regresa.', fa: 'مه کنار می‌رود. داستان شاگردان دوباره خوانده می‌شود. صفحهٔ ۳.۳ منشور برمی‌گردد.' },
    questions: [
      { q: { en: 'Which [[amendment|amendment]] promises citizenship and [[equal protection|equal protection]] of the laws?', es: '¿Qué [[amendment|enmienda]] promete la ciudadanía y la [[equal protection|igual protección]] de las leyes?', fa: 'کدام [[amendment|متمم]] شهروندی و [[equal protection|حمایت برابر]] قانون را وعده می‌دهد؟' },
        choices: [
          { en: 'The 14th Amendment, 1868', es: 'La Enmienda 14, 1868', fa: 'متمم چهاردهم، ۱۸۶۸' },
          { en: 'The 13th Amendment, 1865', es: 'La Enmienda 13, 1865', fa: 'متمم سیزدهم، ۱۸۶۵' },
          { en: 'The 15th Amendment, 1870', es: 'La Enmienda 15, 1870', fa: 'متمم پانزدهم، ۱۸۷۰' },
          { en: 'The 19th Amendment, 1920', es: 'La Enmienda 19, 1920', fa: 'متمم نزدهم، ۱۹۲۰' }],
        answer: 0,
        why: { en: 'The 14th Amendment (1868) made freed people citizens and promised equal protection of the laws.', es: 'La Enmienda 14 (1868) hizo ciudadanos a los liberados y prometió igual protección de las leyes.', fa: 'متمم چهاردهم (۱۸۶۸) مردم آزاد شده را شهروند ساخت و حمایت برابر قانون را وعده داد.' } },
      { q: { en: 'What did the 15th Amendment say in 1870?', es: '¿Qué decía la Enmienda 15 en 1870?', fa: 'متمم پانزدهم در ۱۸۷۰ چه گفت؟' },
        choices: [
          { en: 'The vote cannot be denied by race', es: 'No se puede negar el voto por la raza', fa: 'رأی را به خاطر نژاد نمی‌شود منع کرد' },
          { en: 'Only people who own land may vote', es: 'Solo los dueños de tierra pueden votar', fa: 'فقط کسانی که زمین دارند رأی می‌دهند' },
          { en: 'Every state must have free schools', es: 'Cada estado debe tener escuelas gratis', fa: 'هر ایالت باید مکتب رایگان داشته باشد' },
          { en: 'Slavery is allowed in a few states', es: 'La esclavitud se permite en algunos estados', fa: 'بردگی در چند ایالت اجازه دارد' }],
        answer: 0,
        why: { en: 'Race cannot stop a citizen from voting. Then only men could vote; women won it in 1920.', es: 'La raza no puede impedir votar a un ciudadano. Entonces solo votaban hombres; las mujeres lo lograron en 1920.', fa: 'نژاد نمی‌تواند شهروند را از رأی منع کند. آن وقت فقط مردان رأی می‌دادند؛ زنان در ۱۹۲۰ این حق را گرفتند.' } },
      { q: { en: 'What did Plessy v. Ferguson allow in 1896?', es: '¿Qué permitió Plessy contra Ferguson en 1896?', fa: 'دعوای پلسی علیه فرگوسن در ۱۸۹۶ چه چیزی را اجازه داد؟' },
        choices: [
          { en: 'Separate but equal places for each race', es: 'Lugares separados pero iguales para cada raza', fa: 'جاهای جدا اما برابر برای هر نژاد' },
          { en: 'Free public schools for every single child', es: 'Escuelas públicas gratis para cada niño', fa: 'مکتب دولتی رایگان برای هر کودک' },
          { en: 'The vote for every adult citizen', es: 'El voto para cada ciudadano adulto', fa: 'حق رأی برای هر شهروند بزرگسال' },
          { en: 'An end to all slavery in the US', es: 'El fin de toda la esclavitud en EE. UU.', fa: 'ختم همهٔ بردگی در امریکا' }],
        answer: 0,
        why: { en: 'Plessy allowed [[segregation|segregation]]. In real life, Black schools and places were almost never equal.', es: 'Plessy permitió la [[segregation|segregación]]. En la vida real, las escuelas y lugares para negros casi nunca eran iguales.', fa: 'پلسی [[segregation|جدایی نژادی]] را اجازه داد. در زندگی واقعی، مکتب‌ها و جاهای سیاه‌پوستان تقریباً هرگز برابر نبودند.' } },
      { q: { en: 'Why did the Moton students go on strike in 1951?', es: '¿Por qué hicieron huelga los estudiantes de Moton en 1951?', fa: 'چرا شاگردان موتن در ۱۹۵۱ اعتصاب کردند؟' },
        choices: [
          { en: 'Their school was crowded and unequal', es: 'Su escuela estaba llena y era desigual', fa: 'مکتب‌شان پر و نابرابر بود' },
          { en: 'They wanted to close the white school', es: 'Querían cerrar la escuela blanca', fa: 'می‌خواستند مکتب سفیدپوستان را ببندند' },
          { en: 'Their teachers had all quit their jobs', es: 'Todos sus maestros habían renunciado', fa: 'همهٔ معلمان‌شان کار را ترک کرده بودند' },
          { en: 'The town wanted a new sports field', es: 'El pueblo quería un campo deportivo nuevo', fa: 'شهر یک میدان ورزشی نو می‌خواست' }],
        answer: 0,
        why: { en: 'Moton used tar-paper shacks for classes. The white high school was far better.', es: 'Moton usaba casetas de cartón alquitranado como salones. La escuela blanca era mucho mejor.', fa: 'موتن برای صنف‌ها از کلبه‌های کاغذ قیری کار می‌گرفت. لیسهٔ سفیدپوستان خیلی بهتر بود.' } },
      { q: { en: 'What did Brown v. Board of Education decide in 1954?', es: '¿Qué decidió Brown contra la Junta de Educación en 1954?', fa: 'دعوای «براون علیه شورای تعلیم» در ۱۹۵۴ چه فیصله کرد؟' },
        choices: [
          { en: 'Separate public schools are not equal', es: 'Las escuelas públicas separadas no son iguales', fa: 'مکتب‌های دولتی جدا برابر نیستند' },
          { en: 'States may keep schools apart by race', es: 'Los estados pueden separar escuelas por raza', fa: 'ایالت‌ها می‌توانند مکتب‌ها را به نژاد جدا کنند' },
          { en: 'Students may never go on a strike', es: 'Los estudiantes nunca pueden hacer huelga', fa: 'شاگردان هرگز نمی‌توانند اعتصاب کنند' },
          { en: 'Every school must teach in English', es: 'Toda escuela debe enseñar en inglés', fa: 'هر مکتب باید به انگلیسی درس بدهد' }],
        answer: 0,
        why: { en: 'Brown overturned Plessy for schools. The Moton students\' case, Davis, was part of it.', es: 'Brown anuló Plessy para las escuelas. El caso de los estudiantes de Moton, Davis, fue parte de él.', fa: 'براون پلسی را برای مکتب‌ها لغو کرد. دعوای شاگردان موتن، دیویس، بخشی از آن بود.' } },
      { q: { en: 'After Brown, what did Prince Edward County do from 1959 to 1964?', es: 'Después de Brown, ¿qué hizo el condado de Prince Edward de 1959 a 1964?', fa: 'بعد از براون، ولسوالی پرنس ادوارد از ۱۹۵۹ تا ۱۹۶۴ چه کرد؟' },
        choices: [
          { en: 'It closed its public schools', es: 'Cerró sus escuelas públicas', fa: 'مکتب‌های دولتی را بست' },
          { en: 'It opened new schools for all', es: 'Abrió escuelas nuevas para todos', fa: 'برای همه مکتب نو باز کرد' },
          { en: 'It paid every Moton student', es: 'Le pagó a cada estudiante de Moton', fa: 'به هر شاگرد موتن پول داد' },
          { en: 'It moved its schools to Richmond', es: 'Mudó sus escuelas a Richmond', fa: 'مکتب‌هایش را به ریچموند برد' }],
        answer: 0,
        why: { en: 'It closed them rather than integrate. In 1964, the Supreme Court ordered them to reopen.', es: 'Las cerró para no integrarlas. En 1964, la Corte Suprema ordenó reabrirlas.', fa: 'آن‌ها را بست تا یکجا نکند. در ۱۹۶۴، ستره محکمه امر کرد دوباره باز شوند.' } },
      { q: { en: 'What did the Civil Rights Act of 1964 do?', es: '¿Qué hizo la Ley de Derechos Civiles de 1964?', fa: 'قانون حقوق مدنی ۱۹۶۴ چه کرد؟' },
        choices: [
          { en: 'It ended segregation in public places', es: 'Terminó la segregación en lugares públicos', fa: 'جدایی نژادی را در جاهای عمومی ختم کرد' },
          { en: 'It gave each voter a second ballot', es: 'Le dio a cada votante una segunda boleta', fa: 'به هر رأی‌دهنده یک ورقهٔ رأی دوم داد' },
          { en: 'It closed every school in Virginia', es: 'Cerró todas las escuelas de Virginia', fa: 'همهٔ مکتب‌های ویرجینیا را بست' },
          { en: 'It ended the 14th Amendment', es: 'Terminó con la Enmienda 14', fa: 'متمم چهاردهم را ختم کرد' }],
        answer: 0,
        why: { en: 'It banned segregation in places like hotels and restaurants. It also banned job [[discrimination|discrimination]].', es: 'Prohibió la segregación en lugares como hoteles y restaurantes. También prohibió la [[discrimination|discriminación]] en el trabajo.', fa: 'جدایی را در جاهایی مثل هوتل و رستورانت منع کرد. [[discrimination|تبعیض]] در کار را هم منع کرد.' } },
      { q: { en: 'What did the Voting Rights Act of 1965 do?', es: '¿Qué hizo la Ley de Derecho al Voto de 1965?', fa: 'قانون حق رأی ۱۹۶۵ چه کرد؟' },
        choices: [
          { en: 'It ended literacy tests for voting', es: 'Terminó las pruebas de lectura para votar', fa: 'امتحان خواندن برای رأی را ختم کرد' },
          { en: 'It stopped all voting for a year', es: 'Detuvo todas las votaciones por un año', fa: 'همهٔ رأی‌گیری را یک سال بند کرد' },
          { en: 'It let only landowners vote', es: 'Dejó votar solo a los dueños de tierra', fa: 'فقط به زمین‌داران حق رأی داد' },
          { en: 'It ended the Civil Rights Act', es: 'Terminó con la Ley de Derechos Civiles', fa: 'قانون حقوق مدنی را ختم کرد' }],
        answer: 0,
        why: { en: 'It ended [[literacy test|literacy tests]] and protected the vote the 15th Amendment had promised.', es: 'Terminó las [[literacy test|pruebas de lectura]] y protegió el voto que la Enmienda 15 había prometido.', fa: '[[literacy test|امتحان خواندن]] را ختم کرد و از رأیی که متمم پانزدهم وعده داده بود حمایت کرد.' } }
    ]
  },

  learned: [
    { en: 'In 1951, Moton students led by Barbara Johns went on [[strike|strike]] for a fair school.', es: 'En 1951, los estudiantes de Moton, dirigidos por Barbara Johns, hicieron [[strike|huelga]] por una escuela justa.', fa: 'در ۱۹۵۱، شاگردان موتن به رهبری باربارا جانز برای یک مکتب عادلانه [[strike|اعتصاب]] کردند.' },
    { en: 'Their case was part of Brown v. Board (1954): separate schools are not equal.', es: 'Su caso fue parte de Brown contra la Junta (1954): las escuelas separadas no son iguales.', fa: 'دعوای آن‌ها بخشی از «براون علیه شورا» (۱۹۵۴) بود: مکتب‌های جدا برابر نیستند.' },
    { en: 'Rights grew step by step: the 13th, 14th and 15th Amendments, then new laws in 1964 and 1965.', es: 'Los derechos crecieron paso a paso: las Enmiendas 13, 14 y 15, y luego leyes nuevas en 1964 y 1965.', fa: 'حقوق قدم به قدم بزرگ شد: متمم‌های سیزدهم، چهاردهم و پانزدهم، بعد قانون‌های نو در ۱۹۶۴ و ۱۹۶۵.' }
  ],
  reflect: {
    q: { en: 'The Moton students were about your age. What is one thing you would stand up for? Why?', es: 'Los estudiantes de Moton tenían más o menos tu edad. ¿Qué es algo que tú defenderías? ¿Por qué?', fa: 'شاگردان موتن تقریباً هم‌سن تو بودند. یک چیزی که تو از آن دفاع می‌کنی چیست؟ چرا؟' },
    starter: { en: 'I would stand up for', es: 'Yo defendería', fa: 'من دفاع می‌کنم از' }
  }
};
