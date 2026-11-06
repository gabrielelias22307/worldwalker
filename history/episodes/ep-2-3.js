/* TIMEWALKER · Episode 2.3 · The Atlantic Slave Trade (WHII)
   A present-day memorial museum about the Atlantic slave trade (1500s to 1860s). Hard topic: plain, true, serious words,
   no jokes, no prize made of people. The people are museum guides, a historian, descendants and visitors.
   North-west: Hall 1, West and Central Africa and the coast. North-east: Hall 2, the Middle Passage and the ship records
   (the survey posts). South-west: Hall 3, resistance and survival, and the Wall of Names. South-east: the memorial
   garden outside, with a reflecting pool, where the visit starts. */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'WHII',
  title: { en: 'The Atlantic Slave Trade', es: 'La trata atlántica de esclavos', fa: 'تجارت برده در بحر اطلس' },
  place: { en: 'A memorial museum, today', es: 'Un museo memorial, hoy', fa: 'یک موزیم یادبود، امروز' },
  intro: [
    { en: 'In this museum, the Grump wants people to forget the [[atlantic slave trade|Atlantic slave trade]].',
      es: 'En este museo, el Gruñón quiere que la gente olvide la [[atlantic slave trade|trata atlántica de esclavos]].',
      fa: 'در این موزیم، غرغرو می‌خواهد مردم [[atlantic slave trade|تجارت برده در بحر اطلس]] را فراموش کنند.' },
    { en: 'Listen to the 3 people here with care. Then fix the time stone.',
      es: 'Escucha con atención a las 3 personas de aquí. Luego arregla la piedra del tiempo.',
      fa: 'به ۳ نفر اینجا با دقت گوش بده. بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): the Atlantic between Africa and the Americas; the trade's years on the timeline */
  scenes: {
    at: [-25, 8],
    year: 1700,
    yearText: { en: '1500s to 1860s', es: 'De 1500 a 1860', fa: 'از قرن ۱۶ تا دههٔ ۱۸۶۰' },
    start: [
      { en: 'From the 1500s to the 1860s, Europeans forced Africans across the Atlantic.',
        es: 'Desde los años 1500 hasta los 1860, los europeos llevaron a africanos a la fuerza por el Atlántico.',
        fa: 'از قرن شانزدهم تا دههٔ ۱۸۶۰، اروپایی‌ها افریقایی‌ها را به زور از بحر اطلس گذراندند.' },
      { en: 'About 12.5 million people were taken from Africa on slave ships.',
        es: 'Unos 12.5 millones de personas fueron sacadas de África en barcos de esclavos.',
        fa: 'حدود ۱۲.۵ میلیون نفر با کشتی‌های برده از افریقا برده شدند.' },
      { en: 'This museum remembers them. It tells their story with care.',
        es: 'Este museo los recuerda. Cuenta su historia con respeto.',
        fa: 'این موزیم آن‌ها را به یاد می‌آورد. داستان‌شان را با احترام می‌گوید.' }
    ],
    page: { en: 'Today, about 200 million people in the Americas have African ancestors.',
      es: 'Hoy, unos 200 millones de personas en América tienen antepasados africanos.',
      fa: 'امروز حدود ۲۰۰ میلیون نفر در قارهٔ امریکا نیاکان افریقایی دارند.' },
    guess: {
      q: { en: 'Enslaved people had almost no power. Did they still find ways to resist?', es: 'Las personas esclavizadas casi no tenían poder. ¿Aun así encontraron formas de resistir?', fa: 'مردمان به بردگی گرفته‌شده تقریباً هیچ قدرتی نداشتند. آیا باز هم راهی برای مقاومت پیدا کردند؟' },
      choices: [
        { t: { en: 'Yes, in many ways', es: 'Sí, de muchas formas', fa: 'بله، به راه‌های زیاد' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'They fought back, ran away, and kept their languages, faith and music alive.', es: 'Lucharon, huyeron y mantuvieron vivos sus idiomas, su fe y su música.', fa: 'آن‌ها جنگیدند، فرار کردند و زبان، دین و موسیقی خود را زنده نگه داشتند.' }
    },
    next: {
      q: { en: 'Next: the Reformation. Can one person\'s ideas change a whole church?', es: 'Ahora: la Reforma. ¿Pueden las ideas de una persona cambiar toda una iglesia?', fa: 'بعدی: اصلاحات دینی. آیا فکرهای یک نفر می‌تواند یک کلیسای کامل را تغییر دهد؟' },
      choices: [
        { t: { en: 'Yes, they can', es: 'Sí, pueden', fa: 'بله، می‌تواند' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'In 1517, Martin Luther\'s ideas began to split the church in Western Europe.', es: 'En 1517, las ideas de Martín Lutero empezaron a dividir la iglesia en Europa occidental.', fa: 'در سال ۱۵۱۷، فکرهای مارتین لوتر کلیسا را در غرب اروپا دو بخش کرد.' }
    }
  },
  /* houses (fun-pass-4): the museum's side rooms; walk in and talk */
  houses: [
    { at: [3, 1], style: 1, name: { en: 'Ms. Gloria', es: 'Sra. Gloria', fa: 'خانم گلوریا' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#2f6f8f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is the Family History Room. Families search old records here.', es: 'Esta es la Sala de Historia Familiar. Las familias buscan registros antiguos aquí.', fa: 'این اتاق تاریخ خانواده است. خانواده‌ها اینجا اسناد کهنه را جستجو می‌کنند.' },
        { en: 'Many old records listed enslaved people with no family name, or no name.', es: 'Muchos registros antiguos anotaban a personas esclavizadas sin apellido, o sin nombre.', fa: 'بسیاری از اسناد کهنه مردمان برده را بدون تخلص، یا بدون نام می‌نوشتند.' },
        { en: 'In the US, the 1870 count was the first to name nearly all Black Americans.', es: 'En EE. UU., el censo de 1870 fue el primero en nombrar a casi todos los afroamericanos.', fa: 'در امریکا، سرشماری ۱۸۷۰ اولین بار نام تقریباً همهٔ امریکایی‌های سیاه‌پوست را نوشت.' }
      ] },
    { at: [27, 1], style: 1, name: { en: 'Mr. Amadou', es: 'Sr. Amadou', fa: 'آقای آمادو' },
      look: { skin: 5, hair: '#1a1208', shirt: '#6a4a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the Reading Room. These books hold the words of enslaved people.', es: 'Esta es la Sala de Lectura. Estos libros guardan las palabras de personas esclavizadas.', fa: 'این اتاق مطالعه است. این کتاب‌ها سخنان مردمان به بردگی گرفته‌شده را نگه می‌دارند.' },
        { en: 'Olaudah Equiano wrote the story of his own life in 1789.', es: 'Olaudah Equiano escribió la historia de su propia vida en 1789.', fa: 'اولادا اکویانو در سال ۱۷۸۹ داستان زندگی خود را نوشت.' },
        { en: 'Frederick Douglass escaped slavery. Later he wrote books and gave speeches.', es: 'Frederick Douglass escapó de la esclavitud. Después escribió libros y dio discursos.', fa: 'فردریک داگلس از بردگی فرار کرد. بعدها کتاب نوشت و سخنرانی کرد.' }
      ] },
    { at: [2, 12], name: { en: 'Iara', es: 'Iara', fa: 'ایارا' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9542b', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'This room is about music and culture that survived slavery.', es: 'Esta sala trata de la música y la cultura que sobrevivieron a la esclavitud.', fa: 'این اتاق دربارهٔ موسیقی و فرهنگی است که از بردگی زنده ماند.' },
        { en: 'African rhythms live on in samba, jazz, blues and much more.', es: 'Los ritmos africanos siguen vivos en la samba, el jazz, el blues y mucho más.', fa: 'آهنگ‌های افریقایی در سامبا، جاز، بلوز و چیزهای بسیار دیگر زنده مانده‌اند.' },
        { en: 'In Brazil, enslaved Africans created capoeira, a mix of dance and fighting.', es: 'En Brasil, los africanos esclavizados crearon la capoeira, una mezcla de baile y lucha.', fa: 'در برازیل، افریقایی‌های برده کاپوئیرا را ساختند، ترکیبی از رقص و دفاع.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. f = museum floor, W = walls, D = display cases and the Wall of Names, x = exhibit panels.
     Halls 1 and 2 (north) join at rows 4-5; Hall 1 opens south into Hall 3 (row 11, x 5-8); Hall 2 opens south into
     the garden (row 11, x 23-24); Hall 3 opens east into the garden (rows 15-16). Garden: grass, flowers, trees, a pool (~). */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'WffdfffffffffffWWffffffffffdfffW',
    'WffffffffffffffWWffffffffffffffW',
    'WfDDDffxffDDDffWWffDDDDDDDDDDffW',
    'WfffffffffffffffffffffxffffffffW',
    'WffffffffffffffffffffffffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WfDDDffffffDDDfWWffffffffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WffffffffxfffffWWffffffffffffffW',
    'WffffffffffffffWWffffffffffffffW',
    'WWWWWffffWWWWWWWWWWWWWWffWWWWWWW',
    'WfdffffffffffffWW..,...ll...,..T',
    'WffffffffffffffWW.x....ll......T',
    'WfDDDfffffDDDffWW......ll......T',
    'Wffffffxfffffffflllllllll......T',
    'Wfffffffffffffffl....~~~~...T..T',
    'WffffffffffffffWW.,..~~~~......T',
    'WfxDDDDDDDDDDffWW....~~~~.,....T',
    'WffffffffffffffWW..T......,....T',
    'WffffffffffffffWW.,.........T..T',
    'WWWWWWWWWWWWWWWWTTTTTTTTTTTTTTTT'
  ],
  start: [24, 13],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration). Here they honor memory and culture, never people. */
  finds: [
    { clueAt: [29, 13], at: [29, 20], decor: 'flower',
      clue: { en: 'Memorials help us remember. From this note, walk 7 steps south, to the garden\'s corner.', es: 'Los memoriales nos ayudan a recordar. Desde esta nota, camina 7 pasos al sur, a la esquina del jardín.', fa: 'یادبودها به ما کمک می‌کنند به یاد بیاوریم. از این یادداشت، ۷ قدم به جنوب برو، تا کنج باغ.' },
      text: { en: 'People leave flowers here to honor those who were taken. This flower is to remember them.', es: 'La gente deja flores aquí para honrar a quienes se llevaron. Esta flor es para recordarlos.', fa: 'مردم اینجا گل می‌گذارند تا به کسانی که برده شدند احترام کنند. این گل برای یاد آن‌هاست.' } },
    { clueAt: [12, 16], at: [14, 20], decor: 'drum',
      clue: { en: 'Music kept culture alive. From this note, walk 2 steps east, then 4 steps south.', es: 'La música mantuvo viva la cultura. Desde esta nota, camina 2 pasos al este y luego 4 al sur.', fa: 'موسیقی فرهنگ را زنده نگه داشت. از این یادداشت، ۲ قدم به شرق برو، بعد ۴ قدم به جنوب.' },
      text: { en: 'Some colonies banned drums. Enslaved people kept their music alive anyway. Here is a drum.', es: 'Algunas colonias prohibieron los tambores. Las personas esclavizadas mantuvieron viva su música. Aquí hay un tambor.', fa: 'بعضی مستعمره‌ها دهل را منع کردند. مردمان برده باز هم موسیقی خود را زنده نگه داشتند. اینجا یک دهل است.' } }
  ],

  words: {
    'atlantic slave trade': { en: 'the buying, selling and shipping of enslaved Africans across the Atlantic, 1500s to 1860s', es: 'la compra, venta y transporte de africanos esclavizados por el Atlántico, de 1500 a 1860', fa: 'خرید، فروش و بردن افریقایی‌های برده از راه بحر اطلس، از قرن شانزدهم تا دههٔ ۱۸۶۰' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'middle passage': { en: 'the forced voyage of enslaved Africans across the Atlantic to the Americas', es: 'el viaje forzado de los africanos esclavizados por el Atlántico hacia América', fa: 'سفر اجباری افریقایی‌های برده از بحر اطلس به قارهٔ امریکا' },
    plantation: { en: 'a huge farm that grows one crop to sell, often with forced labor', es: 'una finca enorme que siembra un solo cultivo para vender, muchas veces con trabajo forzado', fa: 'یک فارم بسیار بزرگ که یک حاصل را برای فروش می‌کارد، اکثراً با کار اجباری' },
    resist: { en: 'to fight against something, in big or small ways', es: 'luchar contra algo, de formas grandes o pequeñas', fa: 'در برابر چیزی ایستادن، به راه‌های بزرگ یا کوچک' },
    descendant: { en: 'a person who comes from an older family member, like a great-grandchild', es: 'una persona que viene de un familiar antiguo, como un bisnieto', fa: 'کسی که از نسل یک فرد قدیمی خانواده است، مثل یک نواسه' },
    memorial: { en: 'a place or object that helps people remember those who suffered or died', es: 'un lugar u objeto que ayuda a recordar a quienes sufrieron o murieron', fa: 'جایی یا چیزی که کمک می‌کند کسانی را که رنج کشیدند یا مردند به یاد بیاوریم' }
  },

  npcs: [
    {
      x: 7, y: 5,
      name: { en: 'Ms. Adjoa', es: 'Sra. Adjoa', fa: 'خانم اجوا' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a6e4f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome. I am a guide here. This museum tells a hard, true story.', es: 'Bienvenido. Soy guía aquí. Este museo cuenta una historia dura y verdadera.', fa: 'خوش آمدی. من رهنمای اینجا هستم. این موزیم یک داستان سخت و راست را می‌گوید.' },
        { en: 'West and Central Africa had kingdoms, cities, farms and markets.', es: 'África occidental y central tenía reinos, ciudades, campos y mercados.', fa: 'غرب و مرکز افریقا پادشاهی‌ها، شهرها، کشتزارها و بازارها داشت.' },
        { en: 'European traders built forts on the coast. They bought people captured in wars and raids.', es: 'Los comerciantes europeos construyeron fuertes en la costa. Compraban personas capturadas en guerras y ataques.', fa: 'سوداگران اروپایی در ساحل قلعه ساختند. مردمی را می‌خریدند که در جنگ و حمله اسیر شده بودند.' },
        { en: 'In 1526, King Afonso of Kongo wrote: traders take our free people. Stop them!', es: 'En 1526, el rey Afonso del Congo escribió: los comerciantes se llevan a nuestra gente libre. ¡Deténganlos!', fa: 'در سال ۱۵۲۶، پادشاه افونسو از کانگو نوشت: سوداگران مردم آزاد ما را می‌برند. جلوی‌شان را بگیرید!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'King Afonso of Kongo wrote a letter in 1526. What does it show?', es: 'El rey Afonso del Congo escribió una carta en 1526. ¿Qué muestra?', fa: 'پادشاه افونسو از کانگو در سال ۱۵۲۶ نامه‌ای نوشت. این نامه چه چیزی را نشان می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Some African leaders spoke out against the trade', es: 'Algunos líderes africanos hablaron contra la trata', fa: 'بعضی رهبران افریقایی در برابر این تجارت حرف زدند' },
            why: { en: 'Yes. His letter is a primary source. It shows Africans saw the harm and protested.', es: 'Sí. Su carta es una fuente primaria. Muestra que los africanos vieron el daño y protestaron.', fa: 'بله. نامهٔ او یک منبع اصلی است. نشان می‌دهد افریقایی‌ها ضرر را دیدند و اعتراض کردند.' } },
          { t: { en: 'Everyone in Africa agreed that the trade was good', es: 'Todos en África estaban de acuerdo con la trata', fa: 'همه در افریقا موافق بودند که این تجارت خوب است' },
            why: { en: 'No. Afonso wrote that traders were taking his free people, and asked for it to stop.', es: 'No. Afonso escribió que se llevaban a su gente libre y pidió que se detuviera.', fa: 'نه. افونسو نوشت که سوداگران مردم آزادش را می‌برند و خواست که این کار تمام شود.' } },
          { t: { en: 'The slave trade had not started yet in 1526', es: 'La trata de esclavos aún no empezaba en 1526', fa: 'تجارت برده تا سال ۱۵۲۶ هنوز شروع نشده بود' },
            why: { en: 'It had started. Portuguese ships were taking Africans by the 1440s.', es: 'Ya había empezado. Los barcos portugueses se llevaban a africanos desde los años 1440.', fa: 'شروع شده بود. کشتی‌های پرتگالی از دههٔ ۱۴۴۰ افریقایی‌ها را می‌بردند.' } }
        ]
      }
    },
    {
      x: 19, y: 9,
      name: { en: 'Dr. Ferreira', es: 'Dr. Ferreira', fa: 'داکتر فریرا' },
      role: { en: 'Historian', es: 'Historiador', fa: 'تاریخ‌دان' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I am a historian from Brazil. I study old ship records.', es: 'Soy historiador de Brasil. Estudio registros antiguos de barcos.', fa: 'من تاریخ‌دانی از برازیل هستم. اسناد کهنهٔ کشتی‌ها را مطالعه می‌کنم.' },
        { en: 'Sugar [[plantation|plantations]] in Brazil and the Caribbean wanted many workers.', es: 'Las [[plantation|plantaciones]] de azúcar de Brasil y el Caribe querían muchos trabajadores.', fa: '[[plantation|کشتزارهای بزرگ]] نیشکر در برازیل و کارائیب کارگران زیادی می‌خواستند.' },
        { en: 'Millions of Native people had died of new diseases. Owners turned to enslaved Africans.', es: 'Millones de indígenas habían muerto por enfermedades nuevas. Los dueños recurrieron a africanos esclavizados.', fa: 'میلیون‌ها نفر از مردمان بومی از مریضی‌های نو مرده بودند. مالکان به افریقایی‌های برده رو آوردند.' },
        { en: 'The voyage across the ocean was the [[middle passage|Middle Passage]]. Many people died on it.', es: 'El viaje por el océano fue el [[middle passage|Pasaje del Medio]]. Mucha gente murió en él.', fa: 'سفر از بحر [[middle passage|گذرگاه میانه]] بود. بسیاری از مردم در آن مردند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the slave trade grow so large?', es: '¿Por qué creció tanto la trata de esclavos?', fa: 'چرا تجارت برده این‌قدر بزرگ شد؟' },
        choices: [
          { ok: true, t: { en: 'Plantation owners wanted workers to grow sugar for profit', es: 'Los dueños de plantaciones querían trabajadores para el azúcar', fa: 'مالکان کشتزار برای سود از نیشکر کارگر می‌خواستند' },
            why: { en: 'Yes. Sugar made owners rich. They forced enslaved Africans to do the hard work.', es: 'Sí. El azúcar enriqueció a los dueños. Obligaron a africanos esclavizados a hacer el trabajo duro.', fa: 'بله. نیشکر مالکان را پولدار ساخت. آن‌ها افریقایی‌های برده را به زور به کار سخت واداشتند.' } },
          { t: { en: 'People in Africa asked to go and work far away in the Americas', es: 'La gente de África pidió ir a trabajar lejos, en América', fa: 'مردم افریقا خواستند به امریکای دور بروند و کار کنند' },
            why: { en: 'No. Enslaved Africans did not choose to go. They were captured and taken by force.', es: 'No. Los africanos esclavizados no eligieron ir. Los capturaron y se los llevaron a la fuerza.', fa: 'نه. افریقایی‌های برده خودشان رفتن را انتخاب نکردند. اسیر شدند و به زور برده شدند.' } },
          { t: { en: 'The ships were safe, fast and comfortable to travel on', es: 'Los barcos eran seguros, rápidos y cómodos para viajar', fa: 'کشتی‌ها برای سفر امن، تیز و راحت بودند' },
            why: { en: 'No. Slave ships were crowded and cruel. About 1.8 million people died at sea.', es: 'No. Los barcos de esclavos iban llenos y eran crueles. Unos 1.8 millones murieron en el mar.', fa: 'نه. کشتی‌های برده پر از مردم و ظالمانه بودند. حدود ۱.۸ میلیون نفر در بحر مردند.' } }
        ]
      }
    },
    {
      x: 8, y: 12,
      name: { en: 'Mr. Baptiste', es: 'Sr. Baptiste', fa: 'آقای باپتیست' },
      role: { en: 'Visitor and descendant', es: 'Visitante y descendiente', fa: 'بازدیدکننده و نواده' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'My family comes from Haiti. My [[descendant|ancestors]] were [[enslaved|enslaved]] there.', es: 'Mi familia viene de Haití. Mis [[descendant|antepasados]] fueron [[enslaved|esclavizados]] allí.', fa: 'خانوادهٔ من از هایتی است. [[descendant|نیاکانم]] آنجا [[enslaved|برده]] ساخته شده بودند.' },
        { en: 'Enslaved people [[resist|resisted]] every day. Some ran away. Some rose up.', es: 'Las personas esclavizadas [[resist|resistieron]] cada día. Algunas huyeron. Otras se rebelaron.', fa: 'مردمان برده هر روز [[resist|مقاومت کردند]]. بعضی فرار کردند. بعضی قیام کردند.' },
        { en: 'In 1791 they rose up in Haiti. In 1804, Haiti became free.', es: 'En 1791 se rebelaron en Haití. En 1804, Haití fue libre.', fa: 'در سال ۱۷۹۱ آن‌ها در هایتی قیام کردند. در سال ۱۸۰۴، هایتی آزاد شد.' },
        { en: 'People also kept their music, faith and food alive. That was resistance too.', es: 'También mantuvieron viva su música, su fe y su comida. Eso también fue resistencia.', fa: 'مردم موسیقی، دین و غذای خود را هم زنده نگه داشتند. این هم مقاومت بود.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How did enslaved people resist slavery?', es: '¿Cómo resistieron la esclavitud las personas esclavizadas?', fa: 'مردمان برده چطور در برابر بردگی مقاومت کردند؟' },
        choices: [
          { ok: true, t: { en: 'They ran away, rose up and kept their cultures', es: 'Huyeron, se rebelaron y mantuvieron su cultura', fa: 'فرار کردند، قیام کردند و فرهنگ خود را نگه داشتند' },
            why: { en: 'Yes. From small acts to the Haitian Revolution, they fought for their freedom.', es: 'Sí. Desde actos pequeños hasta la Revolución haitiana, lucharon por su libertad.', fa: 'بله. از کارهای کوچک تا انقلاب هایتی، آن‌ها برای آزادی خود جنگیدند.' } },
          { t: { en: 'They waited quietly and never tried to change it', es: 'Esperaron en silencio y nunca intentaron cambiarlo', fa: 'آرام منتظر ماندند و هرگز کوشش نکردند آن را تغییر دهند' },
            why: { en: 'That is a myth. Enslaved people resisted in many ways, every day.', es: 'Eso es un mito. Las personas esclavizadas resistieron de muchas formas, cada día.', fa: 'این یک افسانهٔ نادرست است. مردمان برده هر روز به راه‌های زیاد مقاومت کردند.' } },
          { t: { en: 'Ship captains set most of them free at sea', es: 'Los capitanes los liberaron casi a todos en el mar', fa: 'ناخداهای کشتی بیشترشان را در بحر آزاد کردند' },
            why: { en: 'No. The captains were part of the trade. Enslaved people fought for freedom themselves.', es: 'No. Los capitanes eran parte de la trata. Las personas esclavizadas lucharon por su libertad.', fa: 'نه. ناخداها بخشی از این تجارت بودند. مردمان برده خودشان برای آزادی جنگیدند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 3, text: { en: 'HALL 1 · WEST AND CENTRAL AFRICA · Kingdoms like Benin, Kongo and Oyo had cities, art and trade.', es: 'SALA 1 · ÁFRICA OCCIDENTAL Y CENTRAL · Reinos como Benín, Congo y Oyo tenían ciudades, arte y comercio.', fa: 'تالار ۱ · غرب و مرکز افریقا · پادشاهی‌هایی مثل بنین، کانگو و اویو شهر، هنر و تجارت داشتند.' } },
    { x: 22, y: 4, text: { en: 'HALL 2 · THE MIDDLE PASSAGE · The voyage often took about two months. Many did not survive.', es: 'SALA 2 · EL PASAJE DEL MEDIO · El viaje solía durar unos dos meses. Muchos no sobrevivieron.', fa: 'تالار ۲ · گذرگاه میانه · سفر اکثراً حدود دو ماه طول می‌کشید. بسیاری زنده نماندند.' } },
    { x: 9, y: 9, text: { en: 'CLOSE TO HOME · In the 1830s, Alexandria, Virginia, had one of the biggest US slave-trading companies.', es: 'CERCA DE CASA · En los años 1830, Alexandria, Virginia, tenía una de las mayores compañías de venta de esclavos de EE. UU.', fa: 'نزدیک خانه · در دههٔ ۱۸۳۰، الکساندریا در ویرجینیا یکی از بزرگ‌ترین شرکت‌های تجارت برده در امریکا را داشت.' } },
    { x: 18, y: 13, text: { en: 'WELCOME · This [[memorial|memorial]] museum remembers the people taken in the Atlantic slave trade.', es: 'BIENVENIDOS · Este museo [[memorial|memorial]] recuerda a las personas llevadas en la trata atlántica de esclavos.', fa: 'خوش آمدید · این موزیم [[memorial|یادبود]] کسانی را به یاد می‌آورد که در تجارت برده در بحر اطلس برده شدند.' } },
    { x: 7, y: 15, text: { en: 'HALL 3 · RESISTANCE · Enslaved people fought for freedom on ships, on plantations and in Haiti.', es: 'SALA 3 · RESISTENCIA · Las personas esclavizadas lucharon por la libertad en barcos, plantaciones y en Haití.', fa: 'تالار ۳ · مقاومت · مردمان برده در کشتی‌ها، کشتزارها و در هایتی برای آزادی جنگیدند.' } },
    { x: 2, y: 18, text: { en: 'WALL OF NAMES · Each name was a person, with a family and a life.', es: 'MURO DE LOS NOMBRES · Cada nombre fue una persona, con una familia y una vida.', fa: 'دیوار نام‌ها · هر نام یک انسان بود، با یک خانواده و یک زندگی.' } }
  ],

  /* the quest (keeping memory): Denise (gold !) at the Wall of Names lost the card with her ancestor's name ->
     Mr. Osei the guard in Hall 1 saw it blow out to the garden -> find it east of the pool, under a tree -> back to Denise */
  quest: {
    stat: 'reg',
    title: { en: 'A Name for the Wall', es: 'Un nombre para el muro', fa: 'یک نام برای دیوار' },
    giver: {
      x: 8, y: 19,
      name: { en: 'Denise', es: 'Denise', fa: 'دنیز' },
      role: { en: 'Visitor and descendant', es: 'Visitante y descendiente', fa: 'بازدیدکننده و نواده' },
      look: { skin: 4, hair: '#1a1208', shirt: '#8a2a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My great-great-grandmother Rosa was born enslaved in Virginia.', es: 'Mi tatarabuela Rosa nació esclavizada en Virginia.', fa: 'مادرکلانِ مادرکلانم، روزا، در ویرجینیا در بردگی به دنیا آمد.' },
        { en: 'I wrote her name on a card for the Wall of Names.', es: 'Escribí su nombre en una tarjeta para el Muro de los Nombres.', fa: 'نام او را روی یک کارت برای دیوار نام‌ها نوشتم.' },
        { en: 'Now the card is lost. Mr. Osei, the guard, may have seen it.', es: 'Ahora la tarjeta se perdió. El Sr. Osei, el guardia, tal vez la vio.', fa: 'حالا کارت گم شده. شاید آقای اوسی، نگهبان، آن را دیده باشد.' }
      ],
      wait: { en: 'Mr. Osei is in Hall 1, to the north of here.', es: 'El Sr. Osei está en la Sala 1, al norte de aquí.', fa: 'آقای اوسی در تالار ۱، در شمال اینجا است.' },
      thanks: { en: 'Thank you. Rosa\'s name is on the wall now. People will remember her.', es: 'Gracias. El nombre de Rosa ya está en el muro. La gente la recordará.', fa: 'تشکر. نام روزا حالا روی دیوار است. مردم او را به یاد خواهند داشت.' }
    },
    contact: {
      x: 12, y: 9,
      name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      role: { en: 'Museum guard', es: 'Guardia del museo', fa: 'نگهبان موزیم' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#2a3a5a', pants: '#1a1a2a', style: 'short', hat: '#1a1a2a' },
      lines: [
        { en: 'A name card? Yes. The wind blew a card out to the garden.', es: '¿Una tarjeta con un nombre? Sí. El viento se llevó una tarjeta al jardín.', fa: 'کارت نام؟ بله. باد یک کارت را به باغ برد.' },
        { en: 'Go south-east to the garden. Look east of the pool, under a tree.', es: 'Ve al sureste, al jardín. Busca al este del estanque, bajo un árbol.', fa: 'به جنوب شرق، به باغ برو. در شرق حوض، زیر یک درخت ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [28, 17],
      hint: { en: 'In the garden: east of the pool, under a tree', es: 'En el jardín: al este del estanque, bajo un árbol', fa: 'در باغ: شرق حوض، زیر یک درخت' },
      found: { en: 'You found the card. It says: Rosa, born in Virginia, 1840. Free in 1865.', es: 'Encontraste la tarjeta. Dice: Rosa, nacida en Virginia, 1840. Libre en 1865.', fa: 'کارت را پیدا کردی. رویش نوشته: روزا، تولد ویرجینیا، ۱۸۴۰. آزاد در ۱۸۶۵.' },
      item: { icon: '📇', name: { en: 'Rosa\'s name card', es: 'La tarjeta con el nombre de Rosa', fa: 'کارت نام روزا' } }
    }
  },

  scraps: [[1, 10], [30, 1], [1, 20]],
  smudges: [[4, 9]],

  /* the time stone in the world: read the 4 record posts in Hall 2 (one row each), then answer at the stone */
  challenge: {
    at: [26, 9],
    type: 'survey',
    stat: 'pla',
    spots: [[18, 6], [21, 7], [25, 7], [28, 6]],
    title: { en: 'Reading the ship records', es: 'Leer los registros de los barcos', fa: 'خواندن اسناد کشتی‌ها' },
    intro: { en: 'The Grump blurred the ship records. Every number here is real people. Read them with care.',
      es: 'El Gruñón borró los registros de los barcos. Cada número aquí son personas reales. Léelos con respeto.',
      fa: 'غرغرو اسناد کشتی‌ها را تار کرد. هر عدد اینجا مردم واقعی است. آن‌ها را با احترام بخوان.' },
    table: {
      head: [
        { en: 'Years', es: 'Años', fa: 'سال‌ها' },
        { en: 'People forced onto slave ships (about)', es: 'Personas subidas a la fuerza a barcos (aprox.)', fa: 'مردمی که به زور سوار کشتی برده شدند (حدود)' }
      ],
      rows: [
        [{ en: 'The 1500s', es: 'Los años 1500', fa: 'قرن شانزدهم' }, { en: '280,000', es: '280 000', fa: '۲۸۰٬۰۰۰' }],
        [{ en: 'The 1600s', es: 'Los años 1600', fa: 'قرن هفدهم' }, { en: '1,900,000', es: '1 900 000', fa: '۱٬۹۰۰٬۰۰۰' }],
        [{ en: 'The 1700s', es: 'Los años 1700', fa: 'قرن هجدهم' }, { en: '6,500,000', es: '6 500 000', fa: '۶٬۵۰۰٬۰۰۰' }],
        [{ en: 'The 1800s (to 1866)', es: 'Los años 1800 (hasta 1866)', fa: 'قرن نوزدهم (تا ۱۸۶۶)' }, { en: '3,900,000', es: '3 900 000', fa: '۳٬۹۰۰٬۰۰۰' }]
      ],
      note: { en: 'Estimates from ship records (the Slave Voyages database). In all: about 12.5 million people. About 10.7 million lived to reach the Americas.',
        es: 'Cálculos según registros de barcos (base de datos Slave Voyages). En total: unos 12.5 millones de personas. Unos 10.7 millones llegaron vivos a América.',
        fa: 'تخمین از روی اسناد کشتی‌ها (بانک معلومات «سفرهای برده»). در کل: حدود ۱۲.۵ میلیون نفر. حدود ۱۰.۷ میلیون نفر زنده به امریکا رسیدند.' }
    },
    questions: [
      { q: { en: 'In which years were the most people forced onto ships?', es: '¿En qué años subieron a la fuerza a más personas?', fa: 'در کدام سال‌ها بیشترین مردم به زور سوار کشتی شدند؟' },
        choices: [
          { en: 'The 1700s', es: 'Los años 1700', fa: 'قرن هجدهم' },
          { en: 'The 1500s', es: 'Los años 1500', fa: 'قرن شانزدهم' },
          { en: 'The 1600s', es: 'Los años 1600', fa: 'قرن هفدهم' },
          { en: 'The 1800s', es: 'Los años 1800', fa: 'قرن نوزدهم' }],
        answer: 0,
        why: { en: 'About 6.5 million people were taken in the 1700s, more than in any other century.', es: 'Unos 6.5 millones fueron llevados en los años 1700, más que en cualquier otro siglo.', fa: 'حدود ۶.۵ میلیون نفر در قرن هجدهم برده شدند، بیشتر از هر قرن دیگر.' } },
      { q: { en: 'The number went down in the 1800s. Why?', es: 'El número bajó en los años 1800. ¿Por qué?', fa: 'در قرن نوزدهم این عدد کم شد. چرا؟' },
        choices: [
          { en: 'Britain and the US banned the trade', es: 'Gran Bretaña y EE. UU. prohibieron la trata', fa: 'بریتانیا و امریکا این تجارت را منع کردند' },
          { en: 'The ships could not cross the ocean', es: 'Los barcos ya no podían cruzar el océano', fa: 'کشتی‌ها دیگر نمی‌توانستند از بحر بگذرند' },
          { en: 'Plantations stopped growing any crops', es: 'Las plantaciones dejaron de sembrar', fa: 'کشتزارها دیگر هیچ حاصلی نکاشتند' },
          { en: 'Slavery ended everywhere in 1800', es: 'La esclavitud terminó en todas partes en 1800', fa: 'بردگی در سال ۱۸۰۰ در همه جا تمام شد' }],
        answer: 0,
        why: { en: 'Britain banned the trade in 1807 and the US in 1808. Some ships kept going illegally.', es: 'Gran Bretaña la prohibió en 1807 y EE. UU. en 1808. Algunos barcos siguieron de forma ilegal.', fa: 'بریتانیا در ۱۸۰۷ و امریکا در ۱۸۰۸ آن را منع کردند. بعضی کشتی‌ها غیرقانونی ادامه دادند.' } },
      { q: { en: 'About how many people were forced onto slave ships in all?', es: '¿Cuántas personas en total fueron subidas a la fuerza a barcos de esclavos?', fa: 'در کل حدود چند نفر به زور سوار کشتی‌های برده شدند؟' },
        choices: [
          { en: 'About 12.5 million', es: 'Unos 12.5 millones', fa: 'حدود ۱۲.۵ میلیون' },
          { en: 'About 125,000', es: 'Unas 125 000', fa: 'حدود ۱۲۵٬۰۰۰' },
          { en: 'About 1 million', es: 'Un millón', fa: 'حدود ۱ میلیون' },
          { en: 'About 50 million', es: 'Unos 50 millones', fa: 'حدود ۵۰ میلیون' }],
        answer: 0,
        why: { en: 'Add the four rows: about 12.5 million people, each with a name and a family.', es: 'Suma las cuatro filas: unos 12.5 millones de personas, cada una con nombre y familia.', fa: 'چهار قطار را جمع کن: حدود ۱۲.۵ میلیون نفر، هر کدام با یک نام و یک خانواده.' } },
      { q: { en: 'About 12.5 million left Africa. About 10.7 million arrived. What does this show?', es: 'Unos 12.5 millones salieron de África. Unos 10.7 millones llegaron. ¿Qué muestra esto?', fa: 'حدود ۱۲.۵ میلیون از افریقا رفتند. حدود ۱۰.۷ میلیون رسیدند. این چه چیزی را نشان می‌دهد؟' },
        choices: [
          { en: 'About 1.8 million people died at sea', es: 'Unos 1.8 millones de personas murieron en el mar', fa: 'حدود ۱.۸ میلیون نفر در بحر مردند' },
          { en: 'The ships made a mistake in counting', es: 'Los barcos se equivocaron al contar', fa: 'کشتی‌ها در شمار اشتباه کردند' },
          { en: 'Most people chose to stay in Africa', es: 'La mayoría eligió quedarse en África', fa: 'بیشتر مردم خواستند در افریقا بمانند' },
          { en: 'More people were born on the ships', es: 'Nacieron más personas en los barcos', fa: 'مردم بیشتری در کشتی‌ها به دنیا آمدند' }],
        answer: 0,
        why: { en: 'About 1.8 million people died during the Middle Passage. We remember them too.', es: 'Unos 1.8 millones de personas murieron en el Pasaje del Medio. También los recordamos.', fa: 'حدود ۱.۸ میلیون نفر در گذرگاه میانه مردند. ما آن‌ها را هم به یاد می‌آوریم.' } }
    ],
    success: { en: 'You read the records with care. Behind every number are real people.', es: 'Leíste los registros con respeto. Detrás de cada número hay personas reales.', fa: 'اسناد را با احترام خواندی. پشت هر عدد مردم واقعی هستند.' }
  },

  boss: {
    at: [26, 19],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting has covered the memorial garden in gray fog.', es: 'El Olvido cubrió el jardín memorial con una niebla gris.', fa: 'فراموشی باغ یادبود را با مه خاکستری پوشانده است.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts. The names can be read again. Chronicle page 2.3 returns.', es: 'La niebla se va. Los nombres se pueden leer otra vez. La página 2.3 de la crónica regresa.', fa: 'مه کنار می‌رود. نام‌ها دوباره خوانده می‌شوند. صفحهٔ ۲.۳ تاریخ‌نامه برمی‌گردد.' },
    questions: [
      { q: { en: 'What was the Middle Passage?', es: '¿Qué fue el Pasaje del Medio?', fa: 'گذرگاه میانه چه بود؟' },
        choices: [
          { en: 'The forced voyage from Africa to the Americas', es: 'El viaje forzado de África a América', fa: 'سفر اجباری از افریقا به امریکا' },
          { en: 'A road that traders built across the Sahara', es: 'Un camino que hicieron los comerciantes en el Sahara', fa: 'راهی که سوداگران در صحرای افریقا ساختند' },
          { en: 'A river trip from Lisbon to the city of Seville', es: 'Un viaje por río de Lisboa a la ciudad de Sevilla', fa: 'یک سفر دریایی از لیزبون تا شهر سویل' },
          { en: 'A safe trip that workers chose for good pay', es: 'Un viaje seguro que los trabajadores elegían por buen pago', fa: 'یک سفر امن که کارگران برای مزد خوب انتخاب می‌کردند' }],
        answer: 0,
        why: { en: 'The Middle Passage was the cruel voyage of enslaved Africans across the Atlantic.', es: 'El Pasaje del Medio fue el viaje cruel de los africanos esclavizados por el Atlántico.', fa: 'گذرگاه میانه سفر ظالمانهٔ افریقایی‌های برده از بحر اطلس بود.' } },
      { q: { en: 'About how many Africans were forced onto slave ships?', es: '¿Cuántos africanos fueron subidos a la fuerza a barcos de esclavos?', fa: 'حدود چند افریقایی به زور سوار کشتی‌های برده شدند؟' },
        choices: [
          { en: 'About 12.5 million', es: 'Unos 12.5 millones', fa: 'حدود ۱۲.۵ میلیون' },
          { en: 'About 12,500 people', es: 'Unas 12 500 personas', fa: 'حدود ۱۲٬۵۰۰ نفر' },
          { en: 'About 125,000 people', es: 'Unas 125 000 personas', fa: 'حدود ۱۲۵٬۰۰۰ نفر' },
          { en: 'About 500 million people', es: 'Unos 500 millones de personas', fa: 'حدود ۵۰۰ میلیون نفر' }],
        answer: 0,
        why: { en: 'Ship records show about 12.5 million people were taken from Africa.', es: 'Los registros de barcos muestran que unos 12.5 millones de personas fueron sacadas de África.', fa: 'اسناد کشتی‌ها نشان می‌دهد حدود ۱۲.۵ میلیون نفر از افریقا برده شدند.' } },
      { q: { en: 'Where were most enslaved Africans taken?', es: '¿A dónde llevaron a la mayoría de los africanos esclavizados?', fa: 'بیشتر افریقایی‌های برده به کجا برده شدند؟' },
        choices: [
          { en: 'Brazil and the Caribbean', es: 'A Brasil y el Caribe', fa: 'برازیل و کارائیب' },
          { en: 'England, France and Spain', es: 'A Inglaterra, Francia y España', fa: 'انگلستان، فرانسه و هسپانیه' },
          { en: 'China, Japan and India', es: 'A China, Japón y la India', fa: 'چین، جاپان و هند' },
          { en: 'Canada and Alaska', es: 'A Canadá y Alaska', fa: 'کانادا و الاسکا' }],
        answer: 0,
        why: { en: 'Most were taken to sugar plantations in Brazil and the Caribbean islands.', es: 'La mayoría fue llevada a plantaciones de azúcar de Brasil y las islas del Caribe.', fa: 'بیشترشان به کشتزارهای نیشکر در برازیل و جزیره‌های کارائیب برده شدند.' } },
      { q: { en: 'Why did plantation owners want so many enslaved workers?', es: '¿Por qué los dueños de plantaciones querían tantos trabajadores esclavizados?', fa: 'چرا مالکان کشتزارها این‌قدر کارگر برده می‌خواستند؟' },
        choices: [
          { en: 'To grow sugar and other crops for profit', es: 'Para sembrar azúcar y otros cultivos y ganar dinero', fa: 'برای کاشتن نیشکر و حاصلات دیگر برای سود' },
          { en: 'To build large ships for the navies of Africa', es: 'Para construir barcos grandes para las armadas de África', fa: 'برای ساختن کشتی‌های بزرگ برای بحریهٔ افریقا' },
          { en: 'To dig a canal from the Atlantic to the Pacific', es: 'Para cavar un canal del Atlántico al Pacífico', fa: 'برای کندن یک کانال از بحر اطلس تا بحر آرام' },
          { en: 'To teach farming to people back in Europe', es: 'Para enseñar a cultivar a la gente de Europa', fa: 'برای یاد دادن دهقانی به مردم اروپا' }],
        answer: 0,
        why: { en: 'Sugar, tobacco and cotton made owners rich. Enslaved people did the work and got nothing.', es: 'El azúcar, el tabaco y el algodón enriquecieron a los dueños. Los esclavizados trabajaban sin recibir nada.', fa: 'نیشکر، تنباکو و پخته مالکان را پولدار ساخت. مردمان برده کار می‌کردند و هیچ چیزی نمی‌گرفتند.' } },
      { q: { en: 'What was the triangular trade?', es: '¿Qué fue el comercio triangular?', fa: 'تجارت سه‌کنج چه بود؟' },
        choices: [
          { en: 'Trade linking Europe, Africa and the Americas', es: 'Un comercio que unía Europa, África y América', fa: 'تجارتی که اروپا، افریقا و امریکا را به هم وصل می‌کرد' },
          { en: 'Trade only between the ports of China and Japan', es: 'Un comercio solo entre los puertos de China y Japón', fa: 'تجارتی فقط میان بندرهای چین و جاپان' },
          { en: 'A camel road across the deserts of Arabia', es: 'Un camino de camellos por los desiertos de Arabia', fa: 'راه شترها از میان دشت‌های عربستان' },
          { en: 'A three-sided fort on the coast of Brazil', es: 'Un fuerte de tres lados en la costa de Brasil', fa: 'یک قلعهٔ سه‌ضلعی در ساحل برازیل' }],
        answer: 0,
        why: { en: 'Goods went to Africa, enslaved people to the Americas, and crops like sugar to Europe.', es: 'Los productos iban a África, las personas esclavizadas a América y cultivos como el azúcar a Europa.', fa: 'جنس به افریقا، مردمان برده به امریکا، و حاصلاتی مثل شکر به اروپا رفت.' } },
      { q: { en: 'In 1526, what did King Afonso of Kongo write to Portugal\'s king?', es: 'En 1526, ¿qué escribió el rey Afonso del Congo al rey de Portugal?', fa: 'در سال ۱۵۲۶، پادشاه افونسو از کانگو به پادشاه پرتگال چه نوشت؟' },
        choices: [
          { en: 'Traders were taking his free people, and it must stop', es: 'Los comerciantes se llevaban a su gente libre y debía parar', fa: 'سوداگران مردم آزادش را می‌برند و این باید تمام شود' },
          { en: 'He wanted Portugal to send many more slave ships', es: 'Quería que Portugal enviara muchos más barcos de esclavos', fa: 'می‌خواست پرتگال کشتی‌های برده بسیار بیشتری بفرستد' },
          { en: 'He wanted to sell his whole kingdom to Spain', es: 'Quería vender todo su reino a España', fa: 'می‌خواست تمام پادشاهی خود را به هسپانیه بفروشد' },
          { en: 'He thanked Portugal for gold from India', es: 'Agradeció a Portugal por el oro de la India', fa: 'از پرتگال برای طلای هند تشکر کرد' }],
        answer: 0,
        why: { en: 'Afonso wrote that traders were kidnapping his people, even nobles. He asked for help to stop it.', es: 'Afonso escribió que los comerciantes secuestraban a su gente, hasta a nobles. Pidió ayuda para detenerlo.', fa: 'افونسو نوشت که سوداگران مردمش، حتی بزرگان را می‌دزدند. برای جلوگیری از آن کمک خواست.' } },
      { q: { en: 'What happened in Haiti between 1791 and 1804?', es: '¿Qué pasó en Haití entre 1791 y 1804?', fa: 'میان سال‌های ۱۷۹۱ و ۱۸۰۴ در هایتی چه شد؟' },
        choices: [
          { en: 'Enslaved people rose up and won freedom', es: 'Los esclavizados se rebelaron y ganaron su libertad', fa: 'مردمان برده قیام کردند و آزادی را به دست آوردند' },
          { en: 'France sent more ships, and slavery grew', es: 'Francia envió más barcos y la esclavitud creció', fa: 'فرانسه کشتی‌های بیشتر فرستاد و بردگی بیشتر شد' },
          { en: 'Haiti was sold by France to Britain', es: 'Francia vendió Haití a Gran Bretaña', fa: 'فرانسه هایتی را به بریتانیا فروخت' },
          { en: 'Nothing changed for the people there', es: 'Nada cambió para la gente de allí', fa: 'برای مردم آنجا هیچ چیزی تغییر نکرد' }],
        answer: 0,
        why: { en: 'In the Haitian Revolution, enslaved people won. In 1804, Haiti became a free, independent country.', es: 'En la Revolución haitiana, los esclavizados ganaron. En 1804, Haití fue un país libre e independiente.', fa: 'در انقلاب هایتی، مردمان برده پیروز شدند. در سال ۱۸۰۴، هایتی یک کشور آزاد و مستقل شد.' } },
      { q: { en: 'Why do museums keep the names of enslaved people?', es: '¿Por qué los museos guardan los nombres de las personas esclavizadas?', fa: 'چرا موزیم‌ها نام مردمان برده را نگه می‌دارند؟' },
        choices: [
          { en: 'To remember them as people, not numbers', es: 'Para recordarlos como personas, no números', fa: 'تا آن‌ها را مثل انسان، نه عدد، به یاد بیاوریم' },
          { en: 'To sell the names to visitors as prizes', es: 'Para vender los nombres como premios', fa: 'تا نام‌ها را مثل جایزه به بازدیدکننده‌ها بفروشند' },
          { en: 'Because the names are easy to forget', es: 'Porque los nombres son fáciles de olvidar', fa: 'چون فراموش کردن نام‌ها آسان است' },
          { en: 'Because only famous people had names', es: 'Porque solo la gente famosa tenía nombre', fa: 'چون فقط مردم مشهور نام داشتند' }],
        answer: 0,
        why: { en: 'Each person had a name, a family and a life. Remembering them honors who they were.', es: 'Cada persona tenía un nombre, una familia y una vida. Recordarlas honra quiénes fueron.', fa: 'هر انسان یک نام، یک خانواده و یک زندگی داشت. یاد کردن از آن‌ها به آن‌ها احترام می‌گذارد.' } }
    ]
  },

  learned: [
    { en: 'From the 1500s to the 1860s, about 12.5 million Africans were forced onto slave ships.', es: 'De los años 1500 a los 1860, unos 12.5 millones de africanos fueron subidos a la fuerza a barcos de esclavos.', fa: 'از قرن شانزدهم تا دههٔ ۱۸۶۰، حدود ۱۲.۵ میلیون افریقایی به زور سوار کشتی‌های برده شدند.' },
    { en: 'The [[middle passage|Middle Passage]] was cruel. Most people were forced to work on sugar [[plantation|plantations]].', es: 'El [[middle passage|Pasaje del Medio]] fue cruel. La mayoría fue obligada a trabajar en [[plantation|plantaciones]] de azúcar.', fa: '[[middle passage|گذرگاه میانه]] ظالمانه بود. بیشتر مردم به زور در [[plantation|کشتزارهای بزرگ]] نیشکر کار کردند.' },
    { en: 'Enslaved people [[resist|resisted]]. Their music, faith and food still shape the Americas today.', es: 'Las personas esclavizadas [[resist|resistieron]]. Su música, su fe y su comida aún dan forma a América hoy.', fa: 'مردمان برده [[resist|مقاومت کردند]]. موسیقی، دین و غذای آن‌ها هنوز امروز امریکا را شکل می‌دهد.' }
  ],
  reflect: {
    q: { en: 'Is there a name or a story in your family that you want people to remember? Why?', es: '¿Hay un nombre o una historia en tu familia que quieres que la gente recuerde? ¿Por qué?', fa: 'آیا در خانواده‌ات نامی یا داستانی هست که می‌خواهی مردم به یاد داشته باشند؟ چرا؟' },
    starter: { en: 'In my family, I want people to remember', es: 'En mi familia, quiero que la gente recuerde', fa: 'در خانواده‌ام، می‌خواهم مردم به یاد داشته باشند' }
  }
};
