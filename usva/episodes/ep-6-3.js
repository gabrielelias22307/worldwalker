/* TRAILWALKER · Episode 6.3 · Reformers and an Empire (VUS) — Chicago, 1906
   NW: the Near West Side. Hull House (R over h, door 4,2) on Halsted Street (l, x 8) and a crowded tenement (J, door 12,2).
   NE: downtown. The newspaper office (U, door 18,2), the suffrage meeting hall (Q, door 24,2), the train station
   (J, door 20,8) with its platform (y 9). The railway (-) runs east-west at y 10.
   SW: the Union Stock Yards seen from the street: packing plants (X), cattle pens (F), and a workers' home (door 11,13).
   SE: South Side homes (door 19,13), a butcher's market (m), and the lakefront with a pier (k).
   East edge: the sand (s) and Lake Michigan (~ =).
   Famous people (Sinclair, Riis, Wells, Roosevelt, Addams, Anthony, Catt, Paul, Liliuokalani) are only MENTIONED.
   The journal stone: visit three flags, plant yours on the 1906 food-safety laws, and back it up. */
window.EPISODE = {
  id: '6.3',
  realm: 6,
  sol: 'VUS',
  title: { en: 'Reformers and an Empire', es: 'Reformistas y un imperio', fa: 'اصلاح‌طلبان و یک امپراتوری' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Chicago, 1906', es: 'Chicago, 1906', fa: 'شیکاگو، ۱۹۰۶' },
  intro: [
    { en: 'The Grump tore the page about reformers. People forgot how big problems got fixed.',
      es: 'El Gruñón rompió la página de los reformistas. La gente olvidó cómo se arreglaron grandes problemas.',
      fa: 'غرغرو صفحهٔ اصلاح‌طلبان را پاره کرد. مردم فراموش کردند مشکلات بزرگ چطور حل شدند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  scenes: {
    at: [-87.65, 41.82],
    year: 1906,
    start: [
      { en: 'In 1906, Chicago is a giant, busy city of factories and trains.',
        es: 'En 1906, Chicago es una ciudad enorme y llena de fábricas y trenes.',
        fa: 'در سال ۱۹۰۶، شیکاگو یک شهر بزرگ و پرکار با فابریکه‌ها و ریل‌ها است.' },
      { en: 'Its stock yards pack meat for families all over the country.',
        es: 'Sus corrales empacan carne para familias de todo el país.',
        fa: 'کشتارگاه‌های آن برای خانواده‌های سراسر کشور گوشت بسته‌بندی می‌کنند.' },
      { en: 'Reformers called Progressives want to fix the problems that industry made.',
        es: 'Unos reformistas llamados progresistas quieren arreglar los problemas que causó la industria.',
        fa: 'اصلاح‌طلبانی به نام ترقی‌خواهان می‌خواهند مشکلاتی را که صنعت ساخت، حل کنند.' }
    ],
    page: { en: 'Today, government inspectors still check meat in packing plants every day.',
      es: 'Hoy, inspectores del gobierno todavía revisan la carne en las plantas empacadoras cada día.',
      fa: 'امروز هم مفتشان حکومت هر روز گوشت را در فابریکه‌های بسته‌بندی بررسی می‌کنند.' },
    guess: {
      q: { en: 'In 1906, could most American women vote for President?', es: 'En 1906, ¿podían votar por el presidente la mayoría de las mujeres de EE. UU.?', fa: 'در سال ۱۹۰۶، آیا بیشتر زنان امریکا می‌توانستند به رئیس جمهور رأی بدهند؟' },
      choices: [
        { t: { en: '🙅 No, not yet', es: '🙅 No, todavía no', fa: '🙅 نه، هنوز نه' }, ok: true },
        { t: { en: '🗳️ Yes, all of them', es: '🗳️ Sí, todas', fa: '🗳️ بله، همه' } }
      ],
      why: { en: 'Only four western states let women vote. The 19th Amendment gave all women the vote in 1920.', es: 'Solo cuatro estados del oeste dejaban votar a las mujeres. La Enmienda 19 les dio el voto a todas en 1920.', fa: 'فقط چهار ایالت غربی به زنان حق رأی می‌دادند. متمم نوزدهم در ۱۹۲۰ به همهٔ زنان حق رأی داد.' }
    },
    next: {
      q: { en: 'Next: 1917. Why did the US join World War I?', es: 'Ahora: 1917. ¿Por qué entró EE. UU. a la Primera Guerra Mundial?', fa: 'بعدی: سال ۱۹۱۷. چرا امریکا وارد جنگ جهانی اول شد؟' },
      choices: [
        { t: { en: '🚢 German submarines sank ships', es: '🚢 Submarinos alemanes hundían barcos', fa: '🚢 زیردریایی‌های آلمانی کشتی‌ها را غرق کردند' }, ok: true },
        { t: { en: '🏰 Spain attacked New York', es: '🏰 España atacó Nueva York', fa: '🏰 هسپانیه به نیویارک حمله کرد' } }
      ],
      why: { en: 'German submarines attacked ships with Americans on board. A secret German telegram angered Americans too.', es: 'Submarinos alemanes atacaron barcos con estadounidenses a bordo. Un telegrama secreto alemán también enojó a la gente.', fa: 'زیردریایی‌های آلمانی به کشتی‌هایی با مسافران امریکایی حمله کردند. یک تلگرام مخفی آلمان هم امریکایی‌ها را قهر ساخت.' }
    }
  },

  /* houses: who lives behind each door (2-3 lines each) */
  houses: [
    { at: [4, 2], name: { en: 'Mrs. Rossi', es: 'Señora Rossi', fa: 'خانم روسی' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#b5523a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'I came from Italy. At night I learn English here at Hull House.', es: 'Vine de Italia. De noche aprendo inglés aquí en Hull House.', fa: 'من از ایتالیا آمدم. شب‌ها اینجا در هال هاوس انگلیسی یاد می‌گیرم.' },
        { en: 'My little ones play in the kindergarten while I work.', es: 'Mis pequeños juegan en el kínder mientras yo trabajo.', fa: 'وقتی کار می‌کنم، طفلک‌هایم در کودکستان بازی می‌کنند.' }
      ] },
    { at: [12, 2], name: { en: 'Grandma Hanna', es: 'Abuela Hanna', fa: 'مادرکلان هانا' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#5a4a6a', pants: '#3a3030', style: 'bun' },
      lines: [
        { en: 'This is a [[tenement|tenement]]. Eight of us live in two small rooms.', es: 'Esto es un [[tenement|conventillo]]. Ocho personas vivimos en dos cuartos pequeños.', fa: 'این یک [[tenement|خانهٔ پرجمعیت کرایی]] است. ما هشت نفر در دو اتاق کوچک زندگی می‌کنیم.' },
        { en: 'The back room has no window. Many families share one toilet outside.', es: 'El cuarto de atrás no tiene ventana. Muchas familias comparten un baño afuera.', fa: 'اتاق عقبی کلکین ندارد. خانواده‌های زیاد یک تشناب بیرونی را شریک هستند.' }
      ] },
    { at: [18, 2], name: { en: 'Mr. Frank', es: 'Señor Frank', fa: 'آقای فرانک' },
      look: { skin: 0, hair: '#8a5a3a', shirt: '#e8e0d0', pants: '#2a2a2a', hat: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'In 1898, the US ship Maine blew up in Havana harbor, in Cuba.', es: 'En 1898, el barco estadounidense Maine explotó en el puerto de La Habana, en Cuba.', fa: 'در سال ۱۸۹۸، کشتی امریکایی «مین» در بندر هاوانا در کیوبا منفجر شد.' },
        { en: 'Papers blamed Spain with no proof. They shouted, "Remember the Maine!"', es: 'Los periódicos culparon a España sin pruebas. Gritaban: "¡Recuerden el Maine!"', fa: 'روزنامه‌ها بدون ثبوت هسپانیه را مقصر دانستند. فریاد می‌زدند: «مین را به یاد داشته باشید!»' },
        { en: 'Wild stories to sell papers are [[yellow journalism|yellow journalism]]. They helped start a war.', es: 'Las historias exageradas para vender periódicos son [[yellow journalism|periodismo amarillista]]. Ayudaron a empezar una guerra.', fa: 'خبرهای پرهیاهو برای فروش روزنامه [[yellow journalism|ژورنالیزم زرد]] است. این‌ها به شروع یک جنگ کمک کردند.' }
      ] },
    { at: [24, 2], name: { en: 'Mrs. Clara', es: 'Señora Clara', fa: 'خانم کلارا' },
      look: { skin: 3, hair: '#3a2416', shirt: '#f2f2f2', pants: '#6a2a4a', hat: '#6a2a4a', style: 'bun' },
      lines: [
        { en: 'We want [[suffrage|suffrage]], the right to vote. Susan B. Anthony died this year.', es: 'Queremos el [[suffrage|sufragio]], el derecho al voto. Susan B. Anthony murió este año.', fa: 'ما [[suffrage|حق رأی]] می‌خواهیم. سوزان بی. انتونی امسال وفات کرد.' },
        { en: 'Her work goes on. Carrie Chapman Catt gives speeches across the country.', es: 'Su trabajo sigue. Carrie Chapman Catt da discursos por todo el país.', fa: 'کار او ادامه دارد. کری چپمن کت در سراسر کشور سخنرانی می‌کند.' },
        { en: 'Many reformers also want voters, not state lawmakers, to choose senators.', es: 'Muchos reformistas también quieren que los votantes, y no los legisladores estatales, elijan a los senadores.', fa: 'بسیاری از اصلاح‌طلبان هم می‌خواهند مردم، نه قانون‌سازان ایالت، سناتورها را انتخاب کنند.' }
      ] },
    { at: [20, 8], name: { en: 'Mr. Kahale', es: 'Señor Kahale', fa: 'آقای کاهاله' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f8f8f', pants: '#2a2a3a', hat: '#e8dcc0', style: 'short' },
      lines: [
        { en: 'Aloha! I come from Hawaii. I am waiting for my train.', es: '¡Aloha! Vengo de Hawái. Estoy esperando mi tren.', fa: 'الوها! من از هاوایی هستم. منتظر ریل خود هستم.' },
        { en: 'In 1893, American businessmen, helped by US marines, overthrew our Queen Liliuokalani.', es: 'En 1893, empresarios estadounidenses, con ayuda de marines de EE. UU., derrocaron a nuestra reina Liliuokalani.', fa: 'در سال ۱۸۹۳، تاجران امریکایی با کمک عسکران بحری امریکا ملکهٔ ما لیلیوکالانی را سرنگون کردند.' },
        { en: 'The US [[annex|annexed]] Hawaii in 1898. Many Hawaiians signed petitions against it.', es: 'EE. UU. [[annex|anexó]] Hawái en 1898. Muchos hawaianos firmaron peticiones en contra.', fa: 'امریکا در ۱۸۹۸ هاوایی را [[annex|ضمیمه کرد]]. بسیاری از هاوایی‌ها علیه آن عریضه امضا کردند.' }
      ] },
    { at: [11, 13], name: { en: 'Mrs. Marija', es: 'Señora Marija', fa: 'خانم ماریا' },
      look: { skin: 1, hair: '#c8a060', shirt: '#4a6a3a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'My husband works at the stock yards, ten hours a day, six days a week.', es: 'Mi esposo trabaja en los corrales, diez horas al día, seis días a la semana.', fa: 'شوهرم در کشتارگاه کار می‌کند، روزی ده ساعت، هفته‌ای شش روز.' },
        { en: 'My son is fourteen. He left school to work there too.', es: 'Mi hijo tiene catorce años. Dejó la escuela para trabajar allí también.', fa: 'پسرم چهارده ساله است. او هم مکتب را رها کرد تا آنجا کار کند.' }
      ] },
    { at: [19, 13], name: { en: 'Mrs. Lottie', es: 'Señora Lottie', fa: 'خانم لاتی' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a2a3a', pants: '#2a2a3a', hat: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Ida B. Wells lives here in Chicago. She is a brave journalist.', es: 'Ida B. Wells vive aquí en Chicago. Es una periodista valiente.', fa: 'آیدا بی. ولز اینجا در شیکاگو زندگی می‌کند. او یک خبرنگار شجاع است.' },
        { en: 'She exposed [[lynching|lynching]]: Black Americans killed by mobs, with no trial.', es: 'Ella denunció los [[lynching|linchamientos]]: afroamericanos asesinados por turbas, sin juicio.', fa: 'او [[lynching|لینچ]] را افشا کرد: کشتن امریکایی‌های سیاه‌پوست به دست اوباش، بدون محکمه.' },
        { en: 'She wrote the facts and spoke out, even when it was dangerous.', es: 'Escribió los hechos y habló claro, aunque era peligroso.', fa: 'او حقیقت‌ها را نوشت و صدا بلند کرد، حتی وقتی خطرناک بود.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens (see the note at the top). Halsted Street (l, x 8) runs from Hull House south to the stock yards. */
  map: [
    'TTTTTTTTTTTTTTTTUUUUUUUUUUUTT~==',
    'T.RRRRR.l.JJJJJ..UUUU.QQQQ.ss~==',
    'T.hhdhh.l.hhdhh..UdUU.hhdh.ss~==',
    'T.......l.......lllllllllllss~==',
    'T.,...x.l........x.........ss~==',
    'Tlllllllllllllll.....T....Tss~==',
    'T..T....l...T.....JJJJJ....ss~==',
    'T.......l.........JJJJJ..T.ss~==',
    'T..T....l....T....JJdJJ....ss~==',
    'T.......l.......lllllllllllssk==',
    'T-------------------------.ss~==',
    'T.......l.................xss~==',
    'TXXXX.x.l.RRR.....RRR..QQQ.ss~==',
    'TXXXX...l.hdh.....hdh..hhh.ss~==',
    'T.......l..................ss~==',
    'TFFFFFF.l...........mmm....ss~==',
    'T......:l..................ss~==',
    'TFFFFFF.l.........T......T.sskk=',
    'T.F..F..l..................ss~==',
    'T......:l.............T....ss~==',
    'T.......l..................ss~==',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~=='
  ],
  start: [10, 11],

  finds: [
    { clueAt: [26, 15], at: [28, 15], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east, to the edge of Lake Michigan.', es: 'Desde esta nota, camina 2 pasos al este, hasta la orilla del lago Míchigan.', fa: 'از این یادداشت، ۲ قدم به شرق برو، تا کنار جهیل میشیگن.' },
      text: { en: 'In 1900, Chicago made its river flow backward, away from the lake, to keep drinking water clean.', es: 'En 1900, Chicago hizo que su río corriera al revés, lejos del lago, para cuidar el agua potable.', fa: 'در سال ۱۹۰۰، شیکاگو دریای خود را برعکس جاری ساخت، دور از جهیل، تا آب نوشیدنی پاک بماند.' } },
    { clueAt: [14, 7], at: [10, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps west, then 2 steps south.', es: 'Desde esta nota, camina 4 pasos al oeste y luego 2 pasos al sur.', fa: 'از این یادداشت، ۴ قدم به غرب برو، بعد ۲ قدم به جنوب.' },
      text: { en: 'An Indian Head penny from 1906! A newspaper cost about one cent.', es: '¡Un centavo con cabeza de indio de 1906! Un periódico costaba más o menos un centavo.', fa: 'یک سنت «سر سرخ‌پوست» از سال ۱۹۰۶! یک روزنامه تقریباً یک سنت قیمت داشت.' } }
  ],

  words: {
    progressive: { en: 'a reformer around 1900 who wanted government to fix problems from industry', es: 'un reformista de cerca de 1900 que quería que el gobierno arreglara los problemas de la industria', fa: 'اصلاح‌طلبی در حدود ۱۹۰۰ که می‌خواست حکومت مشکلات صنعت را حل کند' },
    muckraker: { en: 'a journalist who exposed problems, like dirty factories or unfair bosses', es: 'un periodista que denunciaba problemas, como fábricas sucias o jefes injustos', fa: 'خبرنگاری که مشکلات را افشا می‌کرد، مثل فابریکه‌های کثیف یا کارفرمایان بی‌انصاف' },
    reform: { en: 'a change that makes something better or fairer', es: 'un cambio que mejora algo o lo hace más justo', fa: 'تغییری که چیزی را بهتر یا عادلانه‌تر می‌سازد' },
    'settlement house': { en: 'a center in a poor neighborhood that helped immigrant families', es: 'un centro en un barrio pobre que ayudaba a familias inmigrantes', fa: 'مرکزی در یک محلهٔ فقیر که به خانواده‌های مهاجر کمک می‌کرد' },
    tenement: { en: 'a crowded, often unsafe apartment building in a city', es: 'un edificio de viviendas lleno de gente y muchas veces peligroso', fa: 'یک ساختمان رهایشی پرجمعیت و اکثراً ناامن در شهر' },
    inspector: { en: 'a person whose job is to check that something is safe', es: 'una persona cuyo trabajo es revisar que algo sea seguro', fa: 'کسی که وظیفه‌اش بررسی امن بودن چیزی است' },
    suffrage: { en: 'the right to vote', es: 'el derecho al voto', fa: 'حق رأی دادن' },
    amendment: { en: 'a change added to the Constitution', es: 'un cambio que se agrega a la Constitución', fa: 'تغییری که به قانون اساسی اضافه می‌شود' },
    'yellow journalism': { en: 'news made wild or untrue to sell more papers', es: 'noticias exageradas o falsas para vender más periódicos', fa: 'خبرهای پرهیاهو یا نادرست برای فروش بیشتر روزنامه' },
    imperialism: { en: 'when a strong country takes control of other lands and peoples', es: 'cuando un país fuerte toma control de otras tierras y pueblos', fa: 'وقتی یک کشور قوی سرزمین‌ها و مردمان دیگر را زیر کنترول می‌گیرد' },
    annex: { en: 'to add a land to a country and rule it', es: 'agregar una tierra a un país y gobernarla', fa: 'یک سرزمین را به یک کشور اضافه کردن و بر آن حکومت کردن' },
    lynching: { en: 'a murder by a mob, with no trial', es: 'un asesinato cometido por una turba, sin juicio', fa: 'قتل به دست اوباش، بدون محکمه' },
    trust: { en: 'a giant company group that crushes its rivals', es: 'un grupo enorme de empresas que aplasta a sus rivales', fa: 'گروهی از شرکت‌های بسیار بزرگ که رقیبان را از بین می‌برد' }
  },

  npcs: [
    {
      x: 6, y: 3,
      name: { en: 'Miss Grace', es: 'Señorita Grace', fa: 'خانم گریس' },
      role: { en: 'Hull House teacher', es: 'Maestra de Hull House', fa: 'معلم هال هاوس' },
      look: { skin: 0, hair: '#6a4a2a', shirt: '#2f5f9a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Welcome to Hull House! Jane Addams opened it in 1889.', es: '¡Bienvenido a Hull House! Jane Addams la abrió en 1889.', fa: 'به هال هاوس خوش آمدی! جین آدامز آن را در ۱۸۸۹ باز کرد.' },
        { en: 'It is a [[settlement house|settlement house]]. We help immigrant families nearby.', es: 'Es una [[settlement house|casa de asentamiento]]. Ayudamos a las familias inmigrantes del barrio.', fa: 'این یک [[settlement house|خانهٔ خدمات اجتماعی]] است. به خانواده‌های مهاجر نزدیک کمک می‌کنیم.' },
        { en: 'We teach English, care for children, and push for child labor laws.', es: 'Enseñamos inglés, cuidamos niños y luchamos por leyes contra el trabajo infantil.', fa: 'انگلیسی درس می‌دهیم، از اطفال مراقبت می‌کنیم و برای قانون ضد کار اطفال تلاش می‌کنیم.' },
        { en: 'In New York, Jacob Riis took photos of crowded [[tenement|tenements]]. People saw the truth.', es: 'En Nueva York, Jacob Riis tomó fotos de [[tenement|conventillos]] llenos de gente. La gente vio la verdad.', fa: 'در نیویارک، جیکوب ریس از [[tenement|خانه‌های پرجمعیت]] عکس گرفت. مردم حقیقت را دیدند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How did Jacob Riis show Americans the problems in tenements?', es: '¿Cómo les mostró Jacob Riis a los estadounidenses los problemas de los conventillos?', fa: 'جیکوب ریس مشکلات خانه‌های پرجمعیت را چطور به امریکایی‌ها نشان داد؟' },
        choices: [
          { ok: true, t: { en: 'With photos of crowded rooms', es: 'Con fotos de cuartos llenos', fa: 'با عکس اتاق‌های پرجمعیت' },
            why: { en: 'Yes. His photos were a source anyone could see. They showed how poor families lived.', es: 'Sí. Sus fotos eran una fuente que todos podían ver. Mostraban cómo vivían las familias pobres.', fa: 'بله. عکس‌هایش منبعی بود که همه می‌توانستند ببینند. نشان می‌داد خانواده‌های فقیر چطور زندگی می‌کنند.' } },
          { t: { en: 'With happy songs about cities', es: 'Con canciones alegres de ciudades', fa: 'با سرودهای خوش دربارهٔ شهرها' },
            why: { en: 'No. Riis was a reporter with a camera. His photos showed real, hard lives.', es: 'No. Riis era un reportero con cámara. Sus fotos mostraban vidas reales y duras.', fa: 'نه. ریس یک خبرنگار با کمره بود. عکس‌هایش زندگی واقعی و سخت را نشان می‌داد.' } },
          { t: { en: 'With paintings of quiet farms', es: 'Con pinturas de granjas tranquilas', fa: 'با نقاشی کشتزارهای آرام' },
            why: { en: 'No. Tenements were in big cities. Riis photographed them so people could see.', es: 'No. Los conventillos estaban en ciudades grandes. Riis los fotografió para que la gente los viera.', fa: 'نه. این خانه‌ها در شهرهای بزرگ بودند. ریس از آن‌ها عکس گرفت تا مردم ببینند.' } }
        ]
      }
    },
    {
      x: 7, y: 14,
      name: { en: 'Jonas', es: 'Jonas', fa: 'یوناس' },
      role: { en: 'Packinghouse worker', es: 'Obrero de la empacadora', fa: 'کارگر بسته‌بندی گوشت' },
      look: { skin: 1, hair: '#c8a060', shirt: '#7a6a5a', pants: '#3a3020', hat: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'Labas! That means hello in Lithuanian. I work in a meatpacking plant.', es: '¡Labas! Así se dice hola en lituano. Trabajo en una planta empacadora de carne.', fa: 'لاباس! این در زبان لتوانیایی یعنی سلام. من در فابریکهٔ بسته‌بندی گوشت کار می‌کنم.' },
        { en: 'The work is fast and dangerous. Workers get hurt, and the pay is low.', es: 'El trabajo es rápido y peligroso. Los obreros se lastiman y la paga es baja.', fa: 'کار تیز و خطرناک است. کارگران زخمی می‌شوند و مزد کم است.' },
        { en: 'Some bosses sold spoiled meat. Families bought it without knowing.', es: 'Algunos jefes vendían carne podrida. Las familias la compraban sin saberlo.', fa: 'بعضی کارفرمایان گوشت خراب می‌فروختند. خانواده‌ها بی‌خبر آن را می‌خریدند.' },
        { en: 'Upton Sinclair wrote about this place in his 1906 book, The Jungle.', es: 'Upton Sinclair escribió sobre este lugar en su libro de 1906, La jungla.', fa: 'اپتن سینکلر در کتاب ۱۹۰۶ خود به نام «جنگل» دربارهٔ اینجا نوشت.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Readers of The Jungle were shocked. What did they demand?', es: 'Los lectores de La jungla se escandalizaron. ¿Qué exigieron?', fa: 'خوانندگان «جنگل» حیران شدند. چه چیزی را مطالبه کردند؟' },
        choices: [
          { ok: true, t: { en: 'Laws to make meat safe to eat', es: 'Leyes para que la carne fuera segura', fa: 'قانون برای امن ساختن گوشت' },
            why: { en: 'Yes. People wrote to Congress. In 1906, new laws made meat inspection the rule.', es: 'Sí. La gente le escribió al Congreso. En 1906, nuevas leyes exigieron inspeccionar la carne.', fa: 'بله. مردم به کانگرس نامه نوشتند. در ۱۹۰۶، قانون‌های تازه بررسی گوشت را لازمی ساختند.' } },
          { t: { en: 'Bigger meat plants in every city', es: 'Plantas de carne más grandes en cada ciudad', fa: 'فابریکه‌های گوشت بزرگ‌تر در هر شهر' },
            why: { en: 'No. Bigger plants would not fix dirty, unsafe meat. People wanted safety rules.', es: 'No. Plantas más grandes no arreglarían la carne sucia. La gente quería reglas de seguridad.', fa: 'نه. فابریکه‌های بزرگ‌تر گوشت کثیف را درست نمی‌کرد. مردم قاعدهٔ ایمنی می‌خواستند.' } },
          { t: { en: 'Lower pay for meat workers', es: 'Menos paga para los obreros', fa: 'مزد کمتر برای کارگران گوشت' },
            why: { en: 'No. The pay was already low. Readers were angry about the meat they ate.', es: 'No. La paga ya era baja. Los lectores estaban enojados por la carne que comían.', fa: 'نه. مزد از قبل کم بود. خوانندگان از گوشتی که می‌خوردند قهر بودند.' } }
        ]
      }
    },
    {
      x: 23, y: 9,
      name: { en: 'Andrés', es: 'Andrés', fa: 'اندرس' },
      role: { en: 'Student from the Philippines', es: 'Estudiante de Filipinas', fa: 'محصل از فیلیپین' },
      look: { skin: 3, hair: '#120c08', shirt: '#f2f2f2', pants: '#2a3a5a', hat: '#5a4630', style: 'short' },
      lines: [
        { en: 'I am a student from the Philippines. In 1898, the US beat Spain.', es: 'Soy estudiante de Filipinas. En 1898, EE. UU. le ganó a España.', fa: 'من محصل از فیلیپین هستم. در ۱۸۹۸، امریکا هسپانیه را شکست داد.' },
        { en: 'Spain gave the US the Philippines, Guam and Puerto Rico. Cuba came under US control.', es: 'España le dio a EE. UU. Filipinas, Guam y Puerto Rico. Cuba quedó bajo control de EE. UU.', fa: 'هسپانیه فیلیپین، گوام و پورتوریکو را به امریکا داد. کیوبا زیر کنترول امریکا آمد.' },
        { en: 'My people wanted to rule ourselves. We fought the US from 1899 to 1902.', es: 'Mi pueblo quería gobernarse solo. Luchamos contra EE. UU. de 1899 a 1902.', fa: 'مردم من می‌خواستند خودشان حکومت کنند. از ۱۸۹۹ تا ۱۹۰۲ با امریکا جنگیدیم.' },
        { en: 'Many thousands of Filipinos died. We lost our chance to rule ourselves.', es: 'Murieron muchos miles de filipinos. Perdimos la oportunidad de gobernarnos.', fa: 'هزاران هزار فیلیپینی کشته شدند. ما فرصت حکومت بر خود را از دست دادیم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did many Filipinos fight the United States after 1898?', es: '¿Por qué muchos filipinos lucharon contra Estados Unidos después de 1898?', fa: 'چرا بسیاری از فیلیپینی‌ها بعد از ۱۸۹۸ با امریکا جنگیدند؟' },
        choices: [
          { ok: true, t: { en: 'They wanted to rule their own land', es: 'Querían gobernar su propia tierra', fa: 'می‌خواستند بر سرزمین خود حکومت کنند' },
            why: { en: 'Yes. They had fought Spain for freedom. They did not want a new ruler.', es: 'Sí. Habían luchado contra España por la libertad. No querían un nuevo gobernante.', fa: 'بله. آن‌ها برای آزادی با هسپانیه جنگیده بودند. حاکم تازه نمی‌خواستند.' } },
          { t: { en: 'They wanted Spain to rule them again', es: 'Querían que España los gobernara otra vez', fa: 'می‌خواستند هسپانیه دوباره حاکم شود' },
            why: { en: 'No. Filipinos had already rebelled against Spain. They wanted their own country.', es: 'No. Los filipinos ya se habían rebelado contra España. Querían su propio país.', fa: 'نه. فیلیپینی‌ها قبلاً علیه هسپانیه قیام کرده بودند. کشور خود را می‌خواستند.' } },
          { t: { en: 'They wanted to move to Chicago', es: 'Querían mudarse a Chicago', fa: 'می‌خواستند به شیکاگو کوچ کنند' },
            why: { en: 'No. They fought at home for self-rule, the right to govern themselves.', es: 'No. Lucharon en su tierra para gobernarse a sí mismos.', fa: 'نه. آن‌ها در وطن خود برای حق حکومت بر خود جنگیدند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 4, text: { en: 'HULL HOUSE · HALSTED STREET · A [[settlement house|settlement house]] since 1889. Classes, clubs and a kindergarten. All are welcome.', es: 'HULL HOUSE · CALLE HALSTED · Una [[settlement house|casa de asentamiento]] desde 1889. Clases, clubes y un kínder. Todos son bienvenidos.', fa: 'هال هاوس · سرک هالستد · یک [[settlement house|خانهٔ خدمات اجتماعی]] از ۱۸۸۹. درس، باشگاه و کودکستان. همه خوش آمدید.' } },
    { x: 6, y: 12, text: { en: 'UNION STOCK YARDS · Cattle and hogs arrive by train. Packing plants turn them into meat.', es: 'CORRALES UNIÓN · El ganado y los cerdos llegan en tren. Las empacadoras los convierten en carne.', fa: 'کشتارگاه یونین · گاو و خوک با ریل می‌رسند. فابریکه‌های بسته‌بندی از آن‌ها گوشت می‌سازند.' } },
    { x: 17, y: 4, text: { en: 'TODAY\'S NEWS · 1906 · The US is digging a canal across Panama. It will join two oceans.', es: 'NOTICIAS DE HOY · 1906 · EE. UU. está cavando un canal en Panamá. Unirá dos océanos.', fa: 'خبر امروز · ۱۹۰۶ · امریکا در پاناما یک کانال می‌کند. این کانال دو بحر بزرگ را وصل می‌کند.' } },
    { x: 26, y: 11, text: { en: 'LAKEFRONT · President Theodore Roosevelt protects forests and parks. He promises a Square Deal: fairness for all.', es: 'ORILLA DEL LAGO · El presidente Theodore Roosevelt protege bosques y parques. Promete un Trato Justo para todos.', fa: 'کنار جهیل · رئیس جمهور تیودور روزولت از جنگل‌ها و پارک‌ها حفاظت می‌کند. او وعدهٔ «معاملهٔ عادلانه» برای همه می‌دهد.' } }
  ],

  /* the quest: Nell the reporter (gold !) by the newspaper office, NE -> Tommy the newsboy by the butcher's market, SE
     -> chase the Paper Gust: take each torn page to the place it describes (the stock yards SW, Hull House NW,
     the suffrage hall NE) -> the gust shows itself, hops, and is caught on the lakefront sand, SE -> back to Nell */
  quest: {
    stat: 'hei',
    title: { en: 'The Reporter\'s Notes', es: 'Las notas de la reportera', fa: 'یادداشت‌های خبرنگار' },
    giver: {
      x: 23, y: 4,
      name: { en: 'Nell', es: 'Nell', fa: 'نل' },
      role: { en: 'Reporter', es: 'Reportera', fa: 'خبرنگار' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a4a8a', pants: '#2a2a3a', hat: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a reporter, a [[muckraker|muckraker]]. I write about problems so people fix them.', es: 'Soy reportera, una [[muckraker|periodista denunciante]]. Escribo sobre problemas para que la gente los arregle.', fa: 'من خبرنگار هستم، یک [[muckraker|خبرنگار افشاگر]]. دربارهٔ مشکلات می‌نویسم تا مردم آن‌ها را حل کنند.' },
        { en: 'The lake wind blew my notes away! Ask Tommy the newsboy. He sees everything.', es: '¡El viento del lago se llevó mis notas! Pregúntale a Tommy, el vendedor de periódicos. Él lo ve todo.', fa: 'باد جهیل یادداشت‌هایم را برد! از تامی روزنامه‌فروش بپرس. او همه چیز را می‌بیند.' }
      ],
      wait: { en: 'Tommy sells papers by the butcher\'s market, south across the tracks.', es: 'Tommy vende periódicos junto al mercado de carne, al sur, cruzando las vías.', fa: 'تامی کنار بازار قصابی، جنوب خط ریل، روزنامه می‌فروشد.' },
      thanks: { en: 'My notes! Now I can write my story. The truth can change laws.', es: '¡Mis notas! Ahora puedo escribir mi artículo. La verdad puede cambiar las leyes.', fa: 'یادداشت‌هایم! حالا می‌توانم خبرم را بنویسم. حقیقت می‌تواند قانون‌ها را تغییر دهد.' }
    },
    contact: {
      x: 24, y: 14,
      name: { en: 'Tommy', es: 'Tommy', fa: 'تامی' },
      role: { en: 'Newsboy', es: 'Vendedor de periódicos', fa: 'روزنامه‌فروش' },
      look: { skin: 2, hair: '#8a5a3a', shirt: '#c0392b', pants: '#3a3a3a', hat: '#5a5a5a', style: 'short' },
      lines: [
        { en: 'Extra, extra! I saw the wind grab the reporter\'s pages!', es: '¡Extra, extra! ¡Vi al viento llevarse las páginas de la reportera!', fa: 'خبر تازه، خبر تازه! دیدم باد صفحه‌های خبرنگار را برد!' },
        { en: 'Read each page, then walk to the place it talks about!', es: 'Lee cada página y luego camina al lugar del que habla.', fa: 'هر صفحه را بخوان، بعد به جایی برو که دربارهٔ آن گپ می‌زند!' }
      ]
    },
    action: {
      type: 'chase',
      at: [27, 20],
      hops: [[22, 18], [25, 20]],
      name: { en: 'The Paper Gust', es: 'La ráfaga de papel', fa: 'تندباد کاغذ' },
      taunt: { en: 'Whoosh! The Paper Gust spins: "Catch the pages if you know Chicago!"', es: '¡Fiuuu! La ráfaga de papel gira: "¡Atrapa las páginas si conoces Chicago!"', fa: 'ووش! تندباد کاغذ می‌چرخد: «اگر شیکاگو را می‌شناسی، صفحه‌ها را بگیر!»' },
      clues: [
        { t: { en: 'Page 1 says: "Spoiled meat is sold to families." Walk to where meat is packed.', es: 'La página 1 dice: "Venden carne podrida a las familias." Camina a donde se empaca la carne.', fa: 'صفحهٔ ۱ می‌گوید: «گوشت خراب به خانواده‌ها فروخته می‌شود.» به جایی برو که گوشت بسته‌بندی می‌شود.' },
          zones: [{ x: 1, y: 14, w: 7, h: 7 }],
          noBy: [{ x: 19, y: 14, w: 5, h: 3, t: { en: 'This is a butcher\'s market. It sells meat, but the meat is packed at the stock yards.', es: 'Este es un mercado de carne. Vende carne, pero la carne se empaca en los corrales.', fa: 'این بازار قصابی است. گوشت می‌فروشد، اما گوشت در کشتارگاه بسته‌بندی می‌شود.' } }],
          found: { en: 'The Union Stock Yards! Sinclair wrote about these meatpacking plants.', es: '¡Los Corrales Unión! Sinclair escribió sobre estas plantas empacadoras.', fa: 'کشتارگاه یونین! سینکلر دربارهٔ همین فابریکه‌های بسته‌بندی نوشت.' } },
        { t: { en: 'Page 2 says: "Immigrants learn English here." Find the settlement house on Halsted Street.', es: 'La página 2 dice: "Los inmigrantes aprenden inglés aquí." Busca la casa de asentamiento en la calle Halsted.', fa: 'صفحهٔ ۲ می‌گوید: «مهاجران اینجا انگلیسی یاد می‌گیرند.» خانهٔ خدمات اجتماعی را در سرک هالستد پیدا کن.' },
          zones: [{ x: 1, y: 3, w: 7, h: 2 }],
          noBy: [{ x: 10, y: 3, w: 5, h: 2, t: { en: 'This is a crowded tenement. Families live here. The classes are at Hull House, west of Halsted.', es: 'Este es un conventillo lleno de gente. Aquí viven familias. Las clases son en Hull House, al oeste de Halsted.', fa: 'این یک خانهٔ پرجمعیت است. خانواده‌ها اینجا زندگی می‌کنند. درس‌ها در هال هاوس، غرب سرک هالستد است.' } }],
          found: { en: 'Hull House! Reformers here helped families and fought child labor.', es: '¡Hull House! Aquí los reformistas ayudaban a familias y luchaban contra el trabajo infantil.', fa: 'هال هاوس! اصلاح‌طلبان اینجا به خانواده‌ها کمک کردند و با کار اطفال مبارزه کردند.' } },
        { t: { en: 'Page 3 says: "Women meet here to win the vote." Find their meeting hall.', es: 'La página 3 dice: "Aquí se reúnen mujeres para ganar el voto." Busca su salón.', fa: 'صفحهٔ ۳ می‌گوید: «زنان اینجا جمع می‌شوند تا حق رأی بگیرند.» تالار جلسهٔ آن‌ها را پیدا کن.' },
          zones: [{ x: 22, y: 3, w: 4, h: 1 }],
          noBy: [{ x: 16, y: 3, w: 5, h: 1, t: { en: 'This is the newspaper office. Reporters write about voting, but the women meet next door.', es: 'Esta es la oficina del periódico. Los reporteros escriben sobre el voto, pero las mujeres se reúnen al lado.', fa: 'این دفتر روزنامه است. خبرنگاران دربارهٔ رأی می‌نویسند، اما زنان در ساختمان پهلو جمع می‌شوند.' } }],
          found: { en: 'The suffrage hall! Women here work to win the right to vote.', es: '¡El salón del sufragio! Aquí las mujeres luchan por el derecho al voto.', fa: 'تالار حق رأی! زنان اینجا برای گرفتن حق رأی کار می‌کنند.' } }
      ],
      win: { en: 'Caught! The Paper Gust falls flat on the sand. All the notes are back!', es: '¡Atrapada! La ráfaga de papel cae en la arena. ¡Todas las notas volvieron!', fa: 'گرفتمش! تندباد کاغذ روی ریگ می‌افتد. همهٔ یادداشت‌ها برگشت!' },
      item: { icon: '📰', name: { en: 'Nell\'s notes', es: 'Las notas de Nell', fa: 'یادداشت‌های نل' } }
    }
  },

  scraps: [[1, 1], [1, 20], [28, 1]],
  smudges: [[12, 7, 'grump'], [19, 19, 'whirl']],

  challenge: {
    at: [14, 11],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each fix: by the stock yards pens, by the butcher's market, by the newspaper office
    spots: [[5, 16], [21, 16], [19, 4]],
    stat: 'hei',
    title: { en: 'Fix the meat problem', es: 'Arregla el problema de la carne', fa: 'مشکل گوشت را حل کن' },
    intro: { en: '1906: spoiled meat is sold to families. Visit each flag. Plant yours on the fix, with two reasons.',
      es: '1906: venden carne podrida a las familias. Visita cada bandera. Pon la tuya en la solución, con dos razones.',
      fa: '۱۹۰۶: گوشت خراب به خانواده‌ها فروخته می‌شود. هر بیرق را ببین. بیرق خود را روی راه‌حل بگذار، با دو دلیل.' },
    options: [
      { icon: '🔍', name: { en: 'New laws: inspectors and honest labels', es: 'Leyes nuevas: inspectores y etiquetas honestas', fa: 'قانون تازه: مفتش و لیبل راست' },
        desc: { en: 'Congress passes the Meat Inspection Act and the Pure Food and Drug Act.', es: 'El Congreso aprueba la Ley de Inspección de Carne y la Ley de Alimentos y Medicinas Puras.', fa: 'کانگرس قانون بررسی گوشت و قانون غذا و دوای پاک را تصویب می‌کند.' },
        result: { en: 'This really happened in 1906! Inspectors checked meat, and labels had to tell the truth.', es: '¡Esto pasó de verdad en 1906! Los inspectores revisaban la carne y las etiquetas debían decir la verdad.', fa: 'این واقعاً در ۱۹۰۶ اتفاق افتاد! مفتشان گوشت را بررسی کردند و لیبل‌ها باید راست می‌گفتند.' } },
      { icon: '🏭', name: { en: 'Let the companies check themselves', es: 'Dejar que las empresas se revisen solas', fa: 'شرکت‌ها خودشان را بررسی کنند' },
        desc: { en: 'The meat companies promise to clean up on their own, with no inspectors.', es: 'Las empresas de carne prometen limpiar por su cuenta, sin inspectores.', fa: 'شرکت‌های گوشت وعده می‌دهند خودشان پاک‌کاری کنند، بدون مفتش.' },
        result: { en: 'The companies were already in charge. That is how spoiled meat reached families.', es: 'Las empresas ya estaban a cargo. Así fue como la carne podrida llegó a las familias.', fa: 'شرکت‌ها از قبل همه‌کاره بودند. همین‌طور گوشت خراب به خانواده‌ها رسید.' } },
      { icon: '🤐', name: { en: 'Stop the stories about it', es: 'Callar las historias sobre eso', fa: 'جلوی خبرها را بگیرند' },
        desc: { en: 'Some say: ban books like The Jungle, so people stop worrying.', es: 'Algunos dicen: prohibir libros como La jungla, para que la gente deje de preocuparse.', fa: 'بعضی می‌گویند: کتاب‌هایی مثل «جنگل» را منع کنید تا مردم نگران نشوند.' },
        result: { en: 'Hiding a problem does not fix it. The truth made people demand new laws.', es: 'Esconder un problema no lo arregla. La verdad hizo que la gente exigiera leyes nuevas.', fa: 'پنهان کردن مشکل آن را حل نمی‌کند. حقیقت مردم را واداشت قانون تازه بخواهند.' } }
    ],
    kinds: [
      { id: 'source', label: { en: 'Evidence the muckrakers found', es: 'Pruebas que hallaron los periodistas', fa: 'ثبوتی که خبرنگاران افشاگر یافتند' } },
      { id: 'effect', label: { en: 'How it fixes the problem', es: 'Cómo arregla el problema', fa: 'چطور مشکل را حل می‌کند' } }
    ],
    reasons: [
      { kind: 'source', fits: [0], t: { en: 'Sinclair saw spoiled meat sold as if it were fresh.', es: 'Sinclair vio carne podrida vendida como si fuera fresca.', fa: 'سینکلر دید گوشت خراب مثل گوشت تازه فروخته می‌شد.' },
        why: { en: 'Yes. The companies did not stop this alone. Only outside inspectors could.', es: 'Sí. Las empresas no lo pararon solas. Solo inspectores de afuera podían.', fa: 'بله. شرکت‌ها خودشان جلوی آن را نگرفتند. فقط مفتشان بیرونی می‌توانستند.' } },
      { kind: 'source', fits: [0], t: { en: 'Government visitors checked the plants and found them dirty too.', es: 'Visitantes del gobierno revisaron las plantas y también las hallaron sucias.', fa: 'بازدیدکنندگان حکومت فابریکه‌ها را دیدند و آن‌ها را هم کثیف یافتند.' },
        why: { en: 'Right. A second source agreed with the book, so the problem was real.', es: 'Correcto. Una segunda fuente coincidió con el libro, así que el problema era real.', fa: 'درست. منبع دوم با کتاب موافق بود، پس مشکل واقعی بود.' } },
      { kind: 'source', fits: [], t: { en: 'The book said every plant was perfectly clean.', es: 'El libro decía que todas las plantas estaban muy limpias.', fa: 'کتاب می‌گفت همهٔ فابریکه‌ها کاملاً پاک بودند.' },
        why: { en: 'No. The Jungle showed dirty, unsafe plants. That is why readers were shocked.', es: 'No. La jungla mostraba plantas sucias e inseguras. Por eso los lectores se escandalizaron.', fa: 'نه. «جنگل» فابریکه‌های کثیف و ناامن را نشان داد. به همین خاطر خوانندگان حیران شدند.' } },
      { kind: 'source', fits: [], t: { en: 'The book was about wild animals in a rain forest.', es: 'El libro trataba de animales salvajes en una selva.', fa: 'کتاب دربارهٔ حیوانات وحشی در یک جنگل بارانی بود.' },
        why: { en: 'No. "The Jungle" was a name for the harsh life in Chicago\'s packing plants.', es: 'No. "La jungla" era un nombre para la vida dura en las empacadoras de Chicago.', fa: 'نه. «جنگل» نامی برای زندگی سخت در فابریکه‌های بسته‌بندی شیکاگو بود.' } },
      { kind: 'effect', fits: [0], t: { en: 'Government inspectors check meat before it is sold.', es: 'Inspectores del gobierno revisan la carne antes de venderla.', fa: 'مفتشان حکومت گوشت را پیش از فروش بررسی می‌کنند.' },
        why: { en: 'Yes. That is the Meat Inspection Act. Bad meat is stopped at the plant.', es: 'Sí. Esa es la Ley de Inspección de Carne. La carne mala se detiene en la planta.', fa: 'بله. این قانون بررسی گوشت است. گوشت بد در خود فابریکه گرفته می‌شود.' } },
      { kind: 'effect', fits: [0], t: { en: 'Food and medicine labels must tell the truth.', es: 'Las etiquetas de comida y medicina deben decir la verdad.', fa: 'لیبل‌های غذا و دوا باید راست بگویند.' },
        why: { en: 'Yes. That is the Pure Food and Drug Act. Buyers know what they get.', es: 'Sí. Esa es la Ley de Alimentos y Medicinas Puras. Los compradores saben qué reciben.', fa: 'بله. این قانون غذا و دوای پاک است. خریداران می‌دانند چه می‌خرند.' } },
      { kind: 'effect', fits: [], t: { en: 'Companies earn more by selling old meat.', es: 'Las empresas ganan más vendiendo carne vieja.', fa: 'شرکت‌ها با فروش گوشت کهنه پول بیشتر می‌گیرند.' },
        why: { en: 'That was the problem, not a fix. Families got sick from it.', es: 'Ese era el problema, no la solución. Las familias se enfermaban.', fa: 'این خود مشکل بود، نه راه‌حل. خانواده‌ها از آن مریض می‌شدند.' } },
      { kind: 'effect', fits: [], t: { en: 'Families can no longer read about the problem.', es: 'Las familias ya no pueden leer sobre el problema.', fa: 'خانواده‌ها دیگر نمی‌توانند دربارهٔ مشکل بخوانند.' },
        why: { en: 'Not knowing does not make meat safe. It only hides the danger.', es: 'No saber no hace segura la carne. Solo esconde el peligro.', fa: 'بی‌خبری گوشت را امن نمی‌سازد. فقط خطر را پنهان می‌کند.' } }
    ],
    mismatch: { en: 'That reason does not back up the fix you picked.', es: 'Esa razón no apoya la solución que elegiste.', fa: 'این دلیل از راه‌حلی که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'Yes! The muckrakers\' evidence led to new laws in 1906. Meat got safer.', es: '¡Sí! Las pruebas de los periodistas llevaron a leyes nuevas en 1906. La carne se volvió más segura.', fa: 'بله! ثبوت خبرنگاران افشاگر در ۱۹۰۶ به قانون‌های تازه رسید. گوشت امن‌تر شد.' }
  },

  boss: {
    at: [28, 6],
    stat: 'loc',
    need: 3,
    name: { en: 'The Cover-Up Grump', es: 'El Gruñón Tapadera', fa: 'غرغروی پنهان‌کار' },
    appear: { en: 'The Cover-Up Grump is hiding in the fog over the lakefront!', es: '¡El Gruñón Tapadera se esconde en la niebla de la orilla del lago!', fa: 'غرغروی پنهان‌کار در مه کنار جهیل پنهان است!' },
    taunt: { en: 'Hide the dirt! Nobody needs to know what is in their sausage!', es: '¡Esconde la mugre! ¡Nadie necesita saber qué hay en su salchicha!', fa: 'کثافت را پنهان کن! هیچ کس لازم نیست بداند در سوسیجش چیست!' },
    win: { en: 'The fog blows off the lake. Journal page 6.3 floats down into your hands!', es: 'La niebla se va del lago. ¡La página 6.3 del diario cae en tus manos!', fa: 'مه از روی جهیل کنار می‌رود. صفحهٔ ۶.۳ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What did Upton Sinclair\'s book The Jungle (1906) show readers?', es: '¿Qué les mostró a los lectores el libro La jungla (1906) de Upton Sinclair?', fa: 'کتاب «جنگل» (۱۹۰۶) اپتن سینکلر به خوانندگان چه نشان داد؟' },
        choices: [
          { en: 'Dirty, unsafe meatpacking plants', es: 'Empacadoras de carne sucias e inseguras', fa: 'فابریکه‌های کثیف و ناامن گوشت' },
          { en: 'Wild animals in South American forests', es: 'Animales salvajes en selvas de Sudamérica', fa: 'حیوانات وحشی در جنگل‌های امریکای جنوبی' },
          { en: 'How to build a railroad to the West', es: 'Cómo construir un tren hacia el Oeste', fa: 'طریقهٔ ساختن خط ریل به غرب' },
          { en: 'Farm life in Hawaii long ago', es: 'La vida en las granjas de Hawái hace mucho', fa: 'زندگی کشتزار در هاوایی در گذشته' }],
        answer: 0,
        why: { en: 'Sinclair showed dirty plants, spoiled meat and hurt workers in Chicago. Readers were shocked.', es: 'Sinclair mostró plantas sucias, carne podrida y obreros heridos en Chicago. Los lectores se escandalizaron.', fa: 'سینکلر فابریکه‌های کثیف، گوشت خراب و کارگران زخمی را در شیکاگو نشان داد. خوانندگان حیران شدند.' } },
      { q: { en: 'Which two laws did Congress pass in 1906, after The Jungle?', es: '¿Qué dos leyes aprobó el Congreso en 1906, después de La jungla?', fa: 'کانگرس در ۱۹۰۶، بعد از «جنگل»، کدام دو قانون را تصویب کرد؟' },
        choices: [
          { en: 'Meat Inspection Act and Pure Food and Drug Act', es: 'Ley de Inspección de Carne y Ley de Alimentos y Medicinas Puras', fa: 'قانون بررسی گوشت و قانون غذا و دوای پاک' },
          { en: 'Homestead Act and the Pacific Railway Act of 1862', es: 'Ley de Asentamientos Rurales y Ley del Ferrocarril del Pacífico de 1862', fa: 'قانون زمین مسکونی و قانون ریل پاسفیک سال ۱۸۶۲' },
          { en: 'Sherman Antitrust Act and Interstate Commerce Act', es: 'Ley Antimonopolio Sherman y Ley de Comercio Interestatal', fa: 'قانون ضد تراست شرمن و قانون تجارت میان ایالت‌ها' },
          { en: 'Chinese Exclusion Act and Dawes Act of the 1880s', es: 'Ley de Exclusión China y Ley Dawes de los años 1880', fa: 'قانون منع چینایی‌ها و قانون داوز در دههٔ ۱۸۸۰' }],
        answer: 0,
        why: { en: 'Inspectors would check meat, and food and medicine labels had to be honest.', es: 'Los inspectores revisarían la carne, y las etiquetas de comida y medicina debían ser honestas.', fa: 'مفتشان گوشت را بررسی می‌کردند و لیبل‌های غذا و دوا باید راست می‌بود.' } },
      { q: { en: 'What did journalist Ida B. Wells expose?', es: '¿Qué denunció la periodista Ida B. Wells?', fa: 'خبرنگار آیدا بی. ولز چه چیزی را افشا کرد؟' },
        choices: [
          { en: 'The lynching of Black Americans by mobs', es: 'El linchamiento de afroamericanos por turbas', fa: 'لینچ امریکایی‌های سیاه‌پوست به دست اوباش' },
          { en: 'Spoiled meat in the Chicago stock yards', es: 'La carne podrida en los corrales de Chicago', fa: 'گوشت خراب در کشتارگاه‌های شیکاگو' },
          { en: 'Crowded tenements in New York City', es: 'Los conventillos llenos de Nueva York', fa: 'خانه‌های پرجمعیت در شهر نیویارک' },
          { en: 'Wild news stories about the ship Maine', es: 'Las noticias exageradas sobre el barco Maine', fa: 'خبرهای پرهیاهو دربارهٔ کشتی مین' }],
        answer: 0,
        why: { en: 'Wells reported the facts of lynching, murder by mobs, and demanded justice. It was brave and dangerous work.', es: 'Wells publicó los hechos de los linchamientos, asesinatos por turbas, y exigió justicia. Fue un trabajo valiente.', fa: 'ولز حقیقت‌های لینچ، یعنی قتل به دست اوباش، را نوشت و عدالت خواست. کار شجاعانه و خطرناک بود.' } },
      { q: { en: 'What did the 19th Amendment (1920) do?', es: '¿Qué hizo la Enmienda 19 (1920)?', fa: 'متمم نوزدهم (۱۹۲۰) چه کرد؟' },
        choices: [
          { en: 'Gave women the right to vote', es: 'Les dio a las mujeres el derecho al voto', fa: 'به زنان حق رأی داد' },
          { en: 'Let voters choose their senators', es: 'Dejó que los votantes eligieran senadores', fa: 'گذاشت مردم سناتورها را انتخاب کنند' },
          { en: 'Started a national income tax', es: 'Creó un impuesto nacional sobre la renta', fa: 'مالیهٔ ملی بر عاید را شروع کرد' },
          { en: 'Ended child labor in all factories', es: 'Terminó el trabajo infantil en las fábricas', fa: 'کار اطفال را در همهٔ فابریکه‌ها ختم کرد' }],
        answer: 0,
        why: { en: 'Suffragists like Susan B. Anthony, Carrie Chapman Catt and Alice Paul worked for it for decades.', es: 'Sufragistas como Susan B. Anthony, Carrie Chapman Catt y Alice Paul lucharon por ella durante décadas.', fa: 'مدافعان حق رأی مثل سوزان بی. انتونی، کری چپمن کت و الیس پال ده‌ها سال برای آن کار کردند.' } },
      { q: { en: 'Why was Theodore Roosevelt called a "trust-buster"?', es: '¿Por qué a Theodore Roosevelt lo llamaban "rompe-monopolios"?', fa: 'چرا به تیودور روزولت «شکنندهٔ تراست» می‌گفتند؟' },
        choices: [
          { en: 'He broke up giant companies that crushed rivals', es: 'Dividió empresas enormes que aplastaban a sus rivales', fa: 'شرکت‌های بسیار بزرگی را که رقیبان را له می‌کردند، شکست' },
          { en: 'He built the first railroad to the Pacific Ocean', es: 'Construyó el primer tren hasta el océano Pacífico', fa: 'اولین خط ریل را تا بحر آرام ساخت' },
          { en: 'He wrote the book The Jungle about meatpacking', es: 'Escribió el libro La jungla sobre las empacadoras', fa: 'کتاب «جنگل» را دربارهٔ بسته‌بندی گوشت نوشت' },
          { en: 'He gave Hawaii back to its queen in 1898', es: 'Le devolvió Hawái a su reina en 1898', fa: 'در ۱۸۹۸ هاوایی را به ملکه‌اش پس داد' }],
        answer: 0,
        why: { en: 'A [[trust|trust]] was a giant company group that crushed rivals. Roosevelt went to court to break some up.', es: 'Un [[trust|monopolio]] era un grupo enorme de empresas que aplastaba rivales. Roosevelt fue a la corte para dividir algunos.', fa: '[[trust|تراست]] گروه بزرگ شرکت‌ها بود که رقیبان را له می‌کرد. روزولت برای شکستن بعضی به محکمه رفت.' } },
      { q: { en: 'Why did the US want lands overseas around 1900?', es: '¿Por qué EE. UU. quería tierras al otro lado del mar cerca de 1900?', fa: 'چرا امریکا در حدود ۱۹۰۰ سرزمین‌هایی آن طرف بحر می‌خواست؟' },
        choices: [
          { en: 'Markets, navy bases, and feeling superior', es: 'Mercados, bases navales y sentirse superiores', fa: 'بازار، پایگاه بحری و احساس برتری' },
          { en: 'To give every island its own free government', es: 'Para darle a cada isla su propio gobierno libre', fa: 'تا به هر جزیره حکومت آزاد خودش را بدهد' },
          { en: 'Because Spain asked the US to take its lands', es: 'Porque España le pidió a EE. UU. tomar sus tierras', fa: 'چون هسپانیه از امریکا خواست سرزمین‌هایش را بگیرد' },
          { en: 'Because there was no more room in Chicago', es: 'Porque ya no había espacio en Chicago', fa: 'چون در شیکاگو دیگر جای نبود' }],
        answer: 0,
        why: { en: 'Leaders wanted new markets and navy bases. Many also wrongly believed they were superior to other peoples.', es: 'Los líderes querían mercados y bases navales. Muchos también creían, sin razón, que eran superiores a otros pueblos.', fa: 'رهبران بازار تازه و پایگاه بحری می‌خواستند. بسیاری هم به غلط فکر می‌کردند از مردمان دیگر برترند.' } },
      { q: { en: 'What lands did the US gain from the Spanish-American War (1898)?', es: '¿Qué tierras ganó EE. UU. con la Guerra Hispano-Estadounidense (1898)?', fa: 'امریکا از جنگ امریکا و هسپانیه (۱۸۹۸) کدام سرزمین‌ها را گرفت؟' },
        choices: [
          { en: 'Puerto Rico, Guam and the Philippines', es: 'Puerto Rico, Guam y Filipinas', fa: 'پورتوریکو، گوام و فیلیپین' },
          { en: 'Alaska, Texas and the Oregon Country', es: 'Alaska, Texas y el Territorio de Oregón', fa: 'الاسکا، تکزاس و سرزمین اورگن' },
          { en: 'Canada, Panama and the Bahama Islands', es: 'Canadá, Panamá y las islas Bahamas', fa: 'کانادا، پاناما و جزیره‌های باهاما' },
          { en: 'Mexico, Jamaica and Newfoundland', es: 'México, Jamaica y Terranova', fa: 'مکسیکو، جامائیکا و نیوفوندلند' }],
        answer: 0,
        why: { en: 'Spain gave up Puerto Rico, Guam and the Philippines. Cuba came under strong US control.', es: 'España entregó Puerto Rico, Guam y Filipinas. Cuba quedó bajo un fuerte control de EE. UU.', fa: 'هسپانیه پورتوریکو، گوام و فیلیپین را واگذار کرد. کیوبا زیر کنترول سخت امریکا آمد.' } },
      { q: { en: 'How did Hawaii\'s Queen Liliuokalani lose power in 1893?', es: '¿Cómo perdió el poder la reina Liliuokalani de Hawái en 1893?', fa: 'ملکه لیلیوکالانی هاوایی در ۱۸۹۳ چطور قدرت را از دست داد؟' },
        choices: [
          { en: 'American businessmen overthrew her', es: 'Empresarios estadounidenses la derrocaron', fa: 'تاجران امریکایی او را سرنگون کردند' },
          { en: 'She sold Hawaii to the US for gold', es: 'Vendió Hawái a EE. UU. por oro', fa: 'او هاوایی را به امریکا به طلا فروخت' },
          { en: 'Hawaiian voters asked to join the US', es: 'Los votantes hawaianos pidieron unirse a EE. UU.', fa: 'رأی‌دهندگان هاوایی خواستند به امریکا بپیوندند' },
          { en: 'Spain took Hawaii in a short war', es: 'España tomó Hawái en una guerra corta', fa: 'هسپانیه در یک جنگ کوتاه هاوایی را گرفت' }],
        answer: 0,
        why: { en: 'Businessmen, helped by US marines, overthrew her. The US annexed Hawaii in 1898. Many Hawaiians protested.', es: 'Empresarios, con ayuda de marines de EE. UU., la derrocaron. EE. UU. anexó Hawái en 1898. Muchos hawaianos protestaron.', fa: 'تاجران با کمک عسکران بحری امریکا او را سرنگون کردند. امریکا در ۱۸۹۸ هاوایی را ضمیمه کرد. بسیاری اعتراض کردند.' } }
    ]
  },

  learned: [
    { en: '[[muckraker|Muckrakers]] exposed problems. The Jungle led to the Meat Inspection Act and Pure Food and Drug Act (1906).', es: 'Los [[muckraker|periodistas denunciantes]] expusieron problemas. La jungla llevó a la Ley de Inspección de Carne y la de Alimentos y Medicinas Puras (1906).', fa: '[[muckraker|خبرنگاران افشاگر]] مشکلات را افشا کردند. «جنگل» به قانون بررسی گوشت و قانون غذا و دوای پاک (۱۹۰۶) رسید.' },
    { en: '[[progressive|Progressives]] won child labor laws and the 16th, 17th and 19th Amendments. Women won the vote in 1920.', es: 'Los [[progressive|progresistas]] lograron leyes contra el trabajo infantil y las enmiendas 16, 17 y 19. Las mujeres ganaron el voto en 1920.', fa: '[[progressive|ترقی‌خواهان]] قانون کار اطفال و متمم‌های ۱۶، ۱۷ و ۱۹ را به دست آوردند. زنان در ۱۹۲۰ حق رأی گرفتند.' },
    { en: 'Through [[imperialism|imperialism]], the US took Puerto Rico, Guam, the Philippines and Hawaii. Many people there lost self-rule.', es: 'Con el [[imperialism|imperialismo]], EE. UU. tomó Puerto Rico, Guam, Filipinas y Hawái. Mucha gente allí perdió su autogobierno.', fa: 'امریکا با [[imperialism|امپریالیزم]] پورتوریکو، گوام، فیلیپین و هاوایی را گرفت. مردم زیادی آنجا حکومت بر خود را از دست دادند.' }
  ],
  reflect: {
    q: { en: 'Muckrakers told the truth to fix problems. What problem in your community would you write about?', es: 'Los periodistas denunciantes dijeron la verdad para arreglar problemas. ¿Sobre qué problema de tu comunidad escribirías?', fa: 'خبرنگاران افشاگر برای حل مشکلات حقیقت را گفتند. دربارهٔ کدام مشکل جامعهٔ خود می‌نوشتی؟' },
    starter: { en: 'A problem I would write about is', es: 'Un problema sobre el que escribiría es', fa: 'مشکلی که دربارهٔ آن می‌نوشتم' }
  }
};
