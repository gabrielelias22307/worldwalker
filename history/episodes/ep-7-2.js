/* TIMEWALKER · Episode 7.2 · World War II: the Home Front (WHII)
   Richmond, California, in 1944: a shipyard town on San Francisco Bay, far from any battle.
   North (rows 1-9): wartime homes, the ration store (J and its counter m), a victory garden (o v 2 1).
   Row 10: the shipyard fence (F) with three gates. South: shipyard workshops (X), the yard,
   and the docks (k) on the bay. Hard topic (war): told from the home front only, never combat. */
window.EPISODE = {
  id: '7.2',
  realm: 7,
  sol: 'WHII',
  title: { en: 'World War II: The Home Front', es: 'La Segunda Guerra Mundial: el frente interno', fa: 'جنگ جهانی دوم: جبههٔ داخلی' },
  place: { en: 'Richmond, California, 1944', es: 'Richmond, California, 1944', fa: 'ریچموند، کالیفورنیا، ۱۹۴۴' },
  weather: { sky: 'clear', time: 'day' },
  intro: [
    { en: 'The Grump blurred the [[home front|home front]] page. People forgot how everyone helped.',
      es: 'El Gruñón borró la página del [[home front|frente interno]]. La gente olvidó cómo ayudaron todos.',
      fa: 'غرغرو صفحهٔ [[home front|جبههٔ داخلی]] را تار کرد. مردم فراموش کردند که همه چطور کمک کردند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  scenes: {
    at: [-122.35, 37.93],
    year: 1944,
    start: [
      { en: 'World War II began in Europe in 1939. The United States joined in 1941.',
        es: 'La Segunda Guerra Mundial empezó en Europa en 1939. Estados Unidos entró en 1941.',
        fa: 'جنگ جهانی دوم در سال ۱۹۳۹ در اروپا شروع شد. امریکا در سال ۱۹۴۱ وارد جنگ شد.' },
      { en: 'Millions of American men left to fight. Factories needed new workers.',
        es: 'Millones de hombres estadounidenses se fueron a pelear. Las fábricas necesitaban trabajadores nuevos.',
        fa: 'میلیون‌ها مرد امریکایی به جنگ رفتند. فابریکه‌ها به کارگران نو ضرورت داشتند.' },
      { en: 'Women, Black Americans and Mexican Americans took many of those jobs.',
        es: 'Mujeres, afroamericanos y mexicoamericanos tomaron muchos de esos trabajos.',
        fa: 'زنان، امریکایی‌های سیاه‌پوست و امریکایی‌های مکسیکویی‌تبار بسیاری از این کارها را گرفتند.' }
    ],
    page: { en: 'Richmond\'s shipyards built 747 ships for the war.',
      es: 'Los astilleros de Richmond construyeron 747 barcos para la guerra.',
      fa: 'کشتی‌سازی‌های ریچموند ۷۴۷ کشتی برای جنگ ساختند.' },
    guess: {
      q: { en: 'Men went away to war. Who filled their factory jobs?', es: 'Los hombres se fueron a la guerra. ¿Quién ocupó sus trabajos en las fábricas?', fa: 'مردان به جنگ رفتند. چه کسی جای کارشان را در فابریکه گرفت؟' },
      choices: [
        { t: { en: 'Women and many others', es: 'Mujeres y muchos más', fa: 'زنان و بسیاری دیگر' }, ok: true },
        { t: { en: 'Nobody did', es: 'Nadie', fa: 'هیچ کس' } }
      ],
      why: { en: 'Millions of women took factory jobs. Many had never been allowed such jobs before.', es: 'Millones de mujeres trabajaron en fábricas. Muchas nunca habían podido tener esos trabajos.', fa: 'میلیون‌ها زن در فابریکه‌ها کار گرفتند. بسیاری از آن‌ها قبلاً اجازهٔ چنین کاری را نداشتند.' }
    },
    next: {
      q: { en: 'Next: the Holocaust. Why do we remember the people who were murdered?', es: 'Ahora: el Holocausto. ¿Por qué recordamos a las personas que fueron asesinadas?', fa: 'بعدی: هولوکاست. چرا مردمی را که کشته شدند به یاد می‌آوریم؟' },
      choices: [
        { t: { en: 'So it never happens again', es: 'Para que no vuelva a pasar', fa: 'تا دیگر هرگز تکرار نشود' }, ok: true },
        { t: { en: 'We should forget it', es: 'Debemos olvidarlo', fa: 'باید فراموشش کنیم' } }
      ],
      why: { en: 'Remembering honors the victims. It helps us stand up against hate today.', es: 'Recordar honra a las víctimas. Nos ayuda a enfrentar el odio hoy.', fa: 'به یاد آوردن به قربانیان احترام می‌گذارد. به ما کمک می‌کند امروز در برابر نفرت بایستیم.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door */
  houses: [
    { at: [3, 2], style: 3, name: { en: 'Dolores Ramírez', es: 'Dolores Ramírez', fa: 'دولورس رامیرز' },
      look: { skin: 3, hair: '#1a1008', shirt: '#c0504a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'My son Rubén is in the army, in France. Many Mexican Americans serve.', es: 'Mi hijo Rubén está en el ejército, en Francia. Muchos mexicoamericanos sirven.', fa: 'پسرم روبن در اردو، در فرانسه است. بسیاری از امریکایی‌های مکسیکویی‌تبار خدمت می‌کنند.' },
        { en: 'Workers from Mexico also came to help on farms and railroads.', es: 'También vinieron trabajadores de México a ayudar en granjas y ferrocarriles.', fa: 'کارگرانی از مکسیکو هم برای کمک در فارم‌ها و خط‌های آهن آمدند.' },
        { en: 'That plan was called the Bracero Program. It began in 1942.', es: 'Ese plan se llamó Programa Bracero. Empezó en 1942.', fa: 'نام این برنامه «براسرو» بود. در سال ۱۹۴۲ شروع شد.' }
      ] },
    { at: [8, 2], style: 3, name: { en: 'Grandpa Joe', es: 'Abuelo Joe', fa: 'پدرکلان جو' },
      look: { skin: 0, hair: '#d8d8d8', shirt: '#6a5a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'The Tanaka family lived next door. They grew flowers here for years.', es: 'La familia Tanaka vivía al lado. Cultivaron flores aquí por años.', fa: 'خانوادهٔ تاناکا همسایهٔ ما بودند. سال‌ها اینجا گل پرورش می‌دادند.' },
        { en: 'In 1942, the government forced Japanese Americans into camps.', es: 'En 1942, el gobierno obligó a los japoneses americanos a ir a campos.', fa: 'در سال ۱۹۴۲، حکومت امریکایی‌های جاپانی‌تبار را به زور به اردوگاه‌ها فرستاد.' },
        { en: 'Most were American citizens. They did nothing wrong. It was unjust.', es: 'La mayoría eran ciudadanos estadounidenses. No hicieron nada malo. Fue injusto.', fa: 'بیشترشان شهروند امریکا بودند. هیچ کار بدی نکرده بودند. این ناعادلانه بود.' }
      ] },
    { at: [13, 2], style: 3, name: { en: 'Mrs. Wong', es: 'Señora Wong', fa: 'خانم وانگ' },
      look: { skin: 2, hair: '#141010', shirt: '#2f6f6a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I am an electrician at the shipyard. I wire ships at night.', es: 'Soy electricista en el astillero. Pongo los cables de los barcos de noche.', fa: 'من برق‌کار کشتی‌سازی هستم. شب‌ها سیم‌های کشتی را وصل می‌کنم.' },
        { en: 'Since 1937, Japan has been at war with China, my parents\' homeland.', es: 'Desde 1937, Japón está en guerra con China, la tierra de mis padres.', fa: 'از سال ۱۹۳۷، جاپان با چین، وطن پدر و مادرم، در جنگ است.' },
        { en: 'In 1943, a new law let Chinese immigrants become citizens at last.', es: 'En 1943, una ley nueva por fin dejó a los inmigrantes chinos ser ciudadanos.', fa: 'در سال ۱۹۴۳، یک قانون نو بالاخره به مهاجران چینی اجازهٔ شهروندی داد.' }
      ] },
    { at: [4, 8], style: 3, name: { en: 'Tommy', es: 'Tommy', fa: 'تامی' },
      look: { skin: 1, hair: '#c89a4a', shirt: '#3a6aa0', pants: '#5a4630', style: 'short' },
      lines: [
        { en: 'My dad is a sailor in the Pacific. I write him every Sunday.', es: 'Mi papá es marinero en el Pacífico. Le escribo todos los domingos.', fa: 'پدرم ملاح در بحر آرام است. هر یکشنبه برایش نامه می‌نویسم.' },
        { en: 'My class collects old metal and rubber. It helps build ships.', es: 'Mi clase junta metal y caucho viejos. Eso ayuda a construir barcos.', fa: 'صنف ما فلز و رابر کهنه جمع می‌کند. این به ساختن کشتی کمک می‌کند.' }
      ] },
    { at: [9, 8], style: 3, name: { en: 'Ada', es: 'Ada', fa: 'آدا' },
      look: { skin: 5, hair: '#120c08', shirt: '#f2f2f2', pants: '#3a3a5a', style: 'bun' },
      lines: [
        { en: 'I am a nurse at the shipyard hospital. Welding is dangerous work.', es: 'Soy enfermera en el hospital del astillero. Soldar es un trabajo peligroso.', fa: 'من نرس شفاخانهٔ کشتی‌سازی هستم. جوشکاری کار خطرناک است.' },
        { en: 'Workers pay a small fee each week, and we care for them.', es: 'Los trabajadores pagan una cuota pequeña cada semana, y los cuidamos.', fa: 'کارگران هر هفته پول کمی می‌دهند و ما از آن‌ها مراقبت می‌کنیم.' },
        { en: 'Richmond grew from about 24,000 people to about 100,000 in three years!', es: '¡Richmond creció de unas 24,000 personas a unas 100,000 en tres años!', fa: 'ریچموند در سه سال از حدود ۲۴ هزار نفر به حدود ۱۰۰ هزار نفر رسید!' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North: homes (R/Q over h), the ration store (J) with its counter (m), the victory garden (o v 2 1).
     Row 5: the main street. Row 10: the shipyard fence (F) with gates at x 8, 16 and 24.
     South: shipyard workshops (X), the yard (row 15 street), the shore (s) and docks (k) on the bay. */
  map: [
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK',
    'K.RRR..QQQ..RRR.l..JJJJ..ooooo.K',
    'K.hdh..hdh..hdh.l..JJJJ..vvvvv.K',
    'K...............l...x....22222.K',
    'K...x...........l..mmm...11111.K',
    'KllllllllllllllllllllllllllllllK',
    'K..T.....T......l.........vvvv.K',
    'K..RRR..QQQ.....l..T......2222.K',
    'K..hdh..hdh.....l..........,...K',
    'K...............l..............K',
    'KFFFFFFFlFFFFFFFlFFFFFFFlFFFFFFK',
    'K.......l.......l.......l......K',
    'K.XXXX..l..XXXX.l..XXXX.l.XXXX.K',
    'K.XXXX..l..XXXX.l..XXXX.l.XXXX.K',
    'K.......l...x...l.......l....x.K',
    'KllllllllllllllllllllllllllllllK',
    'K.......................,......K',
    'K..............................K',
    'KssssssssssssssssssssssssssssssK',
    'K~~~kk~~~~~kk~~~~~kk~~~~~kk~~~~K',
    'K===kk=====kk=====kk=====kk====K',
    '================================'
  ],
  start: [10, 4],

  finds: [
    { clueAt: [18, 7], at: [24, 9], decor: 'flower',
      clue: { en: 'From this note, walk 6 steps east, then 2 steps south.', es: 'Desde esta nota, camina 6 pasos al este y luego 2 pasos al sur.', fa: 'از این یادداشت، ۶ قدم به شرق، بعد ۲ قدم به جنوب برو.' },
      text: { en: 'Families planted victory gardens. They grew about 40% of America\'s fresh vegetables.', es: 'Las familias sembraron huertos de la victoria. Daban cerca del 40% de las verduras frescas del país.', fa: 'خانواده‌ها باغچه‌های پیروزی کاشتند. حدود ۴۰٪ سبزی تازهٔ امریکا از این باغچه‌ها بود.' } },
    { clueAt: [3, 11], at: [3, 17], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps south, toward the bay.', es: 'Desde esta nota, camina 6 pasos al sur, hacia la bahía.', fa: 'از این یادداشت، ۶ قدم به جنوب، به طرف خلیج برو.' },
      text: { en: 'Each shipyard worker wore a metal badge with a number. Here is an old badge.', es: 'Cada trabajador del astillero llevaba una placa de metal con un número. Aquí hay una placa vieja.', fa: 'هر کارگر کشتی‌سازی یک نشان فلزی با نمبر داشت. اینجا یک نشان کهنه است.' } }
  ],

  words: {
    'home front': { en: 'the work and life of people at home while their country is at war', es: 'el trabajo y la vida de la gente en casa mientras su país está en guerra', fa: 'کار و زندگی مردم در وطن، وقتی کشورشان در جنگ است' },
    rationing: { en: 'a rule that limits how much of a scarce good each person may buy', es: 'una regla que limita cuánto puede comprar cada persona de algo que escasea', fa: 'قاعده‌ای که مقدار خرید هر نفر را از یک جنس کمیاب محدود می‌کند' },
    'ration book': { en: 'a small book of stamps; you need a stamp to buy a rationed good', es: 'una libreta de estampillas; necesitas una para comprar algo racionado', fa: 'یک کتابچهٔ کوچک تکت؛ برای خرید جنس جیره‌بندی‌شده تکت لازم است' },
    welder: { en: 'a worker who joins pieces of metal with great heat', es: 'una persona que une piezas de metal con mucho calor', fa: 'کارگری که پارچه‌های فلز را با حرارت زیاد به هم وصل می‌کند' },
    'double v': { en: 'a campaign for two victories: over enemies abroad and over racism at home', es: 'una campaña por dos victorias: contra los enemigos afuera y contra el racismo en casa', fa: 'کمپاینی برای دو پیروزی: بر دشمن در بیرون و بر نژادپرستی در وطن' },
    racism: { en: 'treating people unfairly because of their race or skin color', es: 'tratar a las personas injustamente por su raza o color de piel', fa: 'رفتار ناعادلانه با مردم به خاطر نژاد یا رنگ پوست‌شان' },
    'scrap drive': { en: 'a time when people collect old metal or rubber to make new things', es: 'una campaña en la que la gente junta metal o caucho viejo para hacer cosas nuevas', fa: 'زمانی که مردم فلز یا رابر کهنه جمع می‌کنند تا چیزهای نو ساخته شود' }
  },

  npcs: [
    {
      x: 5, y: 16,
      name: { en: 'Betty', es: 'Betty', fa: 'بتی' },
      role: { en: 'Shipyard welder', es: 'Soldadora del astillero', fa: 'جوشکار کشتی‌سازی' },
      look: { skin: 1, hair: '#8a3a1a', shirt: '#2f5f9a', pants: '#2a3a5a', hat: '#d03a3a' },
      lines: [
        { en: 'I am a [[welder|welder]]. Before the war, I worked in a shop for less pay.', es: 'Soy [[welder|soldadora]]. Antes de la guerra, trabajaba en una tienda por menos dinero.', fa: 'من [[welder|جوشکار]] هستم. پیش از جنگ، در یک دکان با مزد کمتر کار می‌کردم.' },
        { en: 'Now I join steel plates on cargo ships. We build them fast.', es: 'Ahora uno placas de acero en barcos de carga. Los hacemos rápido.', fa: 'حالا ورق‌های فولاد را در کشتی‌های باری جوش می‌دهم. آن‌ها را زود می‌سازیم.' },
        { en: 'Posters call women like us "Rosie the Riveter." We can do this work!', es: 'Los carteles llaman a mujeres como nosotras «Rosie la Remachadora». ¡Podemos hacer este trabajo!', fa: 'پوسترها زنانی مثل ما را «رُزی پرچ‌کار» می‌نامند. ما این کار را می‌توانیم!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How did the war change work for many American women?', es: '¿Cómo cambió la guerra el trabajo de muchas mujeres estadounidenses?', fa: 'جنگ کار بسیاری از زنان امریکایی را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They took jobs once given only to men', es: 'Tomaron trabajos que antes eran solo de hombres', fa: 'کارهایی گرفتند که قبلاً فقط از مردان بود' },
            why: { en: 'Yes. Women welded, built planes and drove trucks. They proved they could do it.', es: 'Sí. Las mujeres soldaron, hicieron aviones y manejaron camiones. Demostraron que podían.', fa: 'بله. زنان جوشکاری کردند، طیاره ساختند و موتر باری راندند. نشان دادند که می‌توانند.' } },
          { t: { en: 'They had to stop working outside home', es: 'Tuvieron que dejar de trabajar fuera de casa', fa: 'مجبور شدند کار بیرون از خانه را بس کنند' },
            why: { en: 'No. Millions of women started working outside the home during the war.', es: 'No. Millones de mujeres empezaron a trabajar fuera de casa durante la guerra.', fa: 'نه. میلیون‌ها زن در زمان جنگ کار بیرون از خانه را شروع کردند.' } },
          { t: { en: 'They were paid much more than the men', es: 'Les pagaban mucho más que a los hombres', fa: 'از مردان خیلی بیشتر مزد می‌گرفتند' },
            why: { en: 'No. Women usually earned less than men, even for the same work.', es: 'No. Las mujeres casi siempre ganaban menos que los hombres, aun por el mismo trabajo.', fa: 'نه. زنان معمولاً از مردان کمتر مزد می‌گرفتند، حتی برای همان کار.' } }
        ]
      }
    },
    {
      x: 20, y: 17,
      name: { en: 'Hattie', es: 'Hattie', fa: 'هتی' },
      role: { en: 'Shipfitter', es: 'Montadora de barcos', fa: 'سازندهٔ بدنهٔ کشتی' },
      look: { skin: 5, hair: '#120c08', shirt: '#6a4a8a', pants: '#2a2a3a', hat: '#2a5a3a' },
      lines: [
        { en: 'I came here from Louisiana by train. The shipyard pays good wages.', es: 'Vine aquí desde Luisiana en tren. El astillero paga buenos sueldos.', fa: 'من با قطار از لوئیزیانا آمدم. کشتی‌سازی مزد خوب می‌دهد.' },
        { en: 'But some unions and landlords treat Black workers unfairly.', es: 'Pero algunos sindicatos y dueños de casas tratan mal a los trabajadores negros.', fa: 'اما بعضی اتحادیه‌ها و صاحب‌خانه‌ها با کارگران سیاه‌پوست ناعادلانه رفتار می‌کنند.' },
        { en: 'We fight for a [[double v|Double V]]: win the war, and beat [[racism|racism]] at home.', es: 'Luchamos por una [[double v|Doble V]]: ganar la guerra y vencer el [[racism|racismo]] en casa.', fa: 'ما برای [[double v|دو پیروزی]] تلاش می‌کنیم: بردن جنگ، و شکست [[racism|نژادپرستی]] در وطن.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What was the Double V campaign?', es: '¿Qué fue la campaña de la Doble V?', fa: 'کمپاین «دو پیروزی» چه بود؟' },
        choices: [
          { ok: true, t: { en: 'Victory over the enemy and over racism', es: 'Vencer al enemigo y también al racismo', fa: 'پیروزی بر دشمن و بر نژادپرستی' },
            why: { en: 'Yes. Black Americans fought for their country, and for fair treatment at home.', es: 'Sí. Los afroamericanos lucharon por su país y por un trato justo en casa.', fa: 'بله. امریکایی‌های سیاه‌پوست برای کشورشان و برای رفتار عادلانه در وطن تلاش کردند.' } },
          { t: { en: 'A plan to build two new ships every day', es: 'Un plan para hacer dos barcos nuevos cada día', fa: 'برنامه‌ای برای ساختن دو کشتی نو در هر روز' },
            why: { en: 'No. The two V\'s were two victories: abroad and at home.', es: 'No. Las dos V eran dos victorias: afuera y en casa.', fa: 'نه. دو «وی» یعنی دو پیروزی: در بیرون و در وطن.' } },
          { t: { en: 'A rule giving each worker two votes', es: 'Una regla que daba dos votos a cada obrero', fa: 'قاعده‌ای که به هر کارگر دو رأی می‌داد' },
            why: { en: 'No. It was about victory over enemies abroad and over racism at home.', es: 'No. Se trataba de vencer a los enemigos afuera y al racismo en casa.', fa: 'نه. موضوع پیروزی بر دشمن در بیرون و بر نژادپرستی در وطن بود.' } }
        ]
      }
    },
    {
      x: 21, y: 6,
      name: { en: 'Mr. Alvarez', es: 'Señor Álvarez', fa: 'آقای آلوارز' },
      role: { en: 'Grocer', es: 'Tendero', fa: 'دکاندار' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#f0ece0', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome! Some foods are [[rationing|rationed]] now. Each family gets a [[ration book|ration book]].', es: '¡Bienvenido! Algunas comidas están [[rationing|racionadas]]. Cada familia recibe una [[ration book|libreta de racionamiento]].', fa: 'خوش آمدی! حالا بعضی غذاها [[rationing|جیره‌بندی]] شده‌اند. هر خانواده یک [[ration book|کتابچهٔ جیره]] می‌گیرد.' },
        { en: 'To buy sugar, meat or shoes, you need stamps from the book.', es: 'Para comprar azúcar, carne o zapatos, necesitas estampillas de la libreta.', fa: 'برای خریدن شکر، گوشت یا بوت، از کتابچه تکت لازم است.' },
        { en: 'The army needs food, metal and rubber. So we use less at home.', es: 'El ejército necesita comida, metal y caucho. Por eso usamos menos en casa.', fa: 'اردو به غذا، فلز و رابر ضرورت دارد. پس ما در خانه کمتر مصرف می‌کنیم.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did the government ration sugar, meat and tires?', es: '¿Por qué el gobierno racionó el azúcar, la carne y las llantas?', fa: 'چرا حکومت شکر، گوشت و تایر را جیره‌بندی کرد؟' },
        choices: [
          { ok: true, t: { en: 'So soldiers and factories had enough', es: 'Para que soldados y fábricas tuvieran suficiente', fa: 'تا سربازان و فابریکه‌ها به اندازهٔ کافی داشته باشند' },
            why: { en: 'Yes. Rationing shared scarce goods fairly and saved them for the war.', es: 'Sí. El racionamiento repartía con justicia lo que escaseaba y lo guardaba para la guerra.', fa: 'بله. جیره‌بندی جنس‌های کمیاب را عادلانه تقسیم کرد و برای جنگ نگه داشت.' } },
          { t: { en: 'So stores could charge higher prices', es: 'Para que las tiendas cobraran más caro', fa: 'تا دکان‌ها قیمت بلندتر بگیرند' },
            why: { en: 'No. The government also set price limits to keep prices fair.', es: 'No. El gobierno también puso límites a los precios para que fueran justos.', fa: 'نه. حکومت برای قیمت‌ها هم حد گذاشت تا عادلانه بمانند.' } },
          { t: { en: 'Because no one in America liked them', es: 'Porque a nadie en el país le gustaban', fa: 'چون هیچ کس در امریکا آن‌ها را خوش نداشت' },
            why: { en: 'No. People wanted these goods. There just was not enough for everyone.', es: 'No. La gente quería esas cosas. Solo que no alcanzaban para todos.', fa: 'نه. مردم این جنس‌ها را می‌خواستند. فقط برای همه کافی نبود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 4, text: { en: 'RICHMOND, CALIFORNIA · 1944 · A shipyard town on San Francisco Bay.', es: 'RICHMOND, CALIFORNIA · 1944 · Un pueblo de astilleros en la bahía de San Francisco.', fa: 'ریچموند، کالیفورنیا · ۱۹۴۴ · شهر کشتی‌سازی کنار خلیج سان فرانسیسکو.' } },
    { x: 20, y: 3, text: { en: 'RATION STORE · Bring your ration book. No stamp, no sugar!', es: 'TIENDA DE RACIONES · Trae tu libreta. ¡Sin estampilla, no hay azúcar!', fa: 'دکان جیره · کتابچهٔ جیره‌ات را بیاور. بدون تکت، شکر نیست!' } },
    { x: 12, y: 14, text: { en: 'SHIPYARD NO. 2 · In 1942, workers here built a whole ship in under 5 days.', es: 'ASTILLERO N.º 2 · En 1942, los trabajadores de aquí hicieron un barco entero en menos de 5 días.', fa: 'کشتی‌سازی شمارهٔ ۲ · در سال ۱۹۴۲، کارگران اینجا یک کشتی کامل را در کمتر از ۵ روز ساختند.' } },
    { x: 29, y: 14, text: { en: 'A war poster says: "Use it up, wear it out, make it do, or do without."', es: 'Un cartel de la guerra dice: «Úsalo todo, gástalo, arréglatelas o vive sin ello».', fa: 'یک پوستر جنگ می‌گوید: «تا آخر استفاده کن، کهنه‌اش کن، با آن بساز، یا بدون آن سر کن.»' } }
  ],

  /* the quest: Junie (north-west) -> Grandma Lou in the victory garden (north-east)
     -> Mr. Green at the scrap pile in the shipyard (south-east): carry him metal -> back to Junie */
  quest: {
    stat: 'reg',
    title: { en: 'Metal for the Scrap Drive', es: 'Metal para la colecta', fa: 'فلز برای جمع‌آوری کهنه' },
    giver: {
      x: 12, y: 9,
      name: { en: 'Junie', es: 'Junie', fa: 'جونی' },
      role: { en: 'Schoolgirl', es: 'Estudiante', fa: 'دختر مکتبی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e0a020', pants: '#2a4a7a', style: 'long' },
      lines: [
        { en: 'My class has a [[scrap drive|scrap drive]]. Old metal becomes new ships.', es: 'Mi clase hace una [[scrap drive|colecta de chatarra]]. El metal viejo se vuelve barcos nuevos.', fa: 'صنف ما [[scrap drive|جمع‌آوری کهنه]] دارد. فلز کهنه کشتی نو می‌شود.' },
        { en: 'Grandma Lou knows where to take it. Please ask her in her garden.', es: 'La abuela Lou sabe adónde llevarlo. Por favor, pregúntale en su huerto.', fa: 'مادرکلان لو می‌داند آن را کجا ببریم. لطفاً در باغچه‌اش از او بپرس.' }
      ],
      wait: { en: 'Grandma Lou is in the victory garden, east of the store.', es: 'La abuela Lou está en el huerto de la victoria, al este de la tienda.', fa: 'مادرکلان لو در باغچهٔ پیروزی، شرق دکان است.' },
      thanks: { en: 'Thank you! Our pots will help build a ship. Everyone can help.', es: '¡Gracias! Nuestras ollas ayudarán a construir un barco. Todos pueden ayudar.', fa: 'تشکر! دیگ‌های ما به ساختن یک کشتی کمک می‌کند. همه می‌توانند کمک کنند.' }
    },
    contact: {
      x: 28, y: 8,
      name: { en: 'Grandma Lou', es: 'Abuela Lou', fa: 'مادرکلان لو' },
      role: { en: 'Victory gardener', es: 'Hortelana de la victoria', fa: 'باغبان باغچهٔ پیروزی' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#3fa34d', pants: '#5a4630', style: 'bun' },
      lines: [
        { en: 'I grow potatoes and beans here, so more food can go to soldiers.', es: 'Aquí cultivo papas y frijoles, para que haya más comida para los soldados.', fa: 'من اینجا کچالو و لوبیا می‌کارم تا غذای بیشتر به سربازان برسد.' },
        { en: 'Take metal to Mr. Green. He is in the shipyard, south-east, by the docks.', es: 'Lleva metal al señor Green. Está en el astillero, al sureste, junto a los muelles.', fa: 'فلز را پیش آقای گرین ببر. او در کشتی‌سازی، جنوب شرق، کنار بندرگاه است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 27, y: 16,
        name: { en: 'Mr. Green', es: 'Señor Green', fa: 'آقای گرین' },
        role: { en: 'Scrap drive helper', es: 'Ayudante de la colecta', fa: 'همکار جمع‌آوری کهنه' },
        look: { skin: 5, hair: '#3a3a3a', shirt: '#7a5a3a', pants: '#2a2a2a', hat: '#3a3a3a' },
        lines: [
          { en: 'Welcome to the scrap pile. We melt it down for the shipyard.', es: 'Bienvenido al montón de chatarra. La fundimos para el astillero.', fa: 'به تودهٔ کهنه خوش آمدی. ما آن را برای کشتی‌سازی ذوب می‌کنیم.' }
        ]
      },
      q: { en: 'Ships are made of steel. Bring me something made of metal for the pile.', es: 'Los barcos son de acero. Tráeme algo de metal para el montón.', fa: 'کشتی‌ها از فولاد ساخته می‌شوند. برایم چیزی فلزی برای توده بیاور.' },
      choices: [
        { ok: true, at: [14, 8], icon: '🍳', t: { en: 'Old metal pots and pans', es: 'Ollas y sartenes viejas de metal', fa: 'دیگ و تابه‌های کهنهٔ فلزی' },
          why: { en: 'Yes! Old pots and pans can be melted. The steel helps build ships.', es: '¡Sí! Las ollas y sartenes viejas se pueden fundir. El acero ayuda a hacer barcos.', fa: 'بله! دیگ و تابه‌های کهنه ذوب می‌شوند. فولادشان به ساختن کشتی کمک می‌کند.' } },
        { at: [23, 4], icon: '🍚', t: { en: 'A sack of sugar', es: 'Un saco de azúcar', fa: 'یک بوجی شکر' },
          why: { en: 'Sugar is rationed food, not metal. Families need it at home.', es: 'El azúcar es comida racionada, no metal. Las familias la necesitan en casa.', fa: 'شکر غذای جیره‌بندی‌شده است، نه فلز. خانواده‌ها در خانه به آن ضرورت دارند.' } },
        { at: [30, 2], icon: '🧺', t: { en: 'A basket of garden apples', es: 'Una canasta de manzanas del huerto', fa: 'یک سبد سیب باغچه' },
          why: { en: 'Fruit cannot be melted into steel. Garden food feeds families.', es: 'La fruta no se puede fundir en acero. La comida del huerto alimenta a las familias.', fa: 'میوه به فولاد ذوب نمی‌شود. غذای باغچه خانواده‌ها را سیر می‌کند.' } }
      ],
      item: { icon: '🍳', name: { en: 'Old metal pots and pans', es: 'Ollas y sartenes viejas de metal', fa: 'دیگ و تابه‌های کهنهٔ فلزی' } }
    }
  },

  scraps: [[1, 1], [30, 17], [1, 9]],
  smudges: [[10, 16], [24, 8]],

  challenge: {
    at: [12, 17],
    type: 'table',
    stat: 'hei',
    title: { en: 'The Ration Chart', es: 'La tabla de raciones', fa: 'جدول جیره‌بندی' },
    intro: { en: 'The Grump smudged the store\'s chart. Read it, then answer the questions.',
      es: 'El Gruñón manchó la tabla de la tienda. Léela y luego contesta las preguntas.',
      fa: 'غرغرو جدول دکان را لکه‌دار کرد. آن را بخوان، بعد به سؤال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Good', es: 'Producto', fa: 'جنس' },
        { en: 'Rationed from', es: 'Racionado desde', fa: 'جیره از' },
        { en: 'Until', es: 'Hasta', fa: 'تا' },
        { en: 'Why it was short', es: 'Por qué faltaba', fa: 'چرا کم بود' }
      ],
      rows: [
        [{ en: 'Tires', es: 'Llantas', fa: 'تایر' }, '1942', '1945', { en: 'Japan took the rubber lands of Southeast Asia', es: 'Japón tomó las tierras del caucho del sureste de Asia', fa: 'جاپان سرزمین‌های رابر جنوب شرق آسیا را گرفت' }],
        [{ en: 'Sugar', es: 'Azúcar', fa: 'شکر' }, '1942', '1947', { en: 'Japan cut off sugar from the Philippines', es: 'Japón cortó el azúcar de Filipinas', fa: 'جاپان راه شکر فیلیپین را بست' }],
        [{ en: 'Coffee', es: 'Café', fa: 'قهوه' }, '1942', '1943', { en: 'Ships were needed for the war', es: 'Los barcos se necesitaban para la guerra', fa: 'کشتی‌ها برای جنگ لازم بودند' }],
        [{ en: 'Gasoline', es: 'Gasolina', fa: 'پطرول' }, '1942', '1945', { en: 'To save fuel and tires for the army', es: 'Para guardar combustible y llantas para el ejército', fa: 'تا تیل و تایر برای اردو بماند' }],
        [{ en: 'Meat', es: 'Carne', fa: 'گوشت' }, '1943', '1945', { en: 'To feed soldiers and allies', es: 'Para alimentar a los soldados y aliados', fa: 'تا به سربازان و متحدان غذا برسد' }],
        [{ en: 'Shoes', es: 'Zapatos', fa: 'بوت' }, '1943', '1945', { en: 'Leather went to army boots', es: 'El cuero se usó para botas del ejército', fa: 'چرم به بوت‌های اردو رفت' }]
      ],
      note: { en: 'Rationing in the United States during World War II.', es: 'El racionamiento en Estados Unidos durante la Segunda Guerra Mundial.', fa: 'جیره‌بندی در امریکا در زمان جنگ جهانی دوم.' }
    },
    questions: [
      { q: { en: 'Which good was rationed the longest?', es: '¿Qué producto estuvo racionado por más tiempo?', fa: 'کدام جنس از همه درازتر جیره‌بندی شد؟' },
        choices: [{ en: 'Sugar', es: 'El azúcar', fa: 'شکر' }, { en: 'Coffee', es: 'El café', fa: 'قهوه' }, { en: 'Shoes', es: 'Los zapatos', fa: 'بوت' }, { en: 'Meat', es: 'La carne', fa: 'گوشت' }],
        answer: 0,
        why: { en: 'Sugar was rationed from 1942 to 1947, the longest on the chart.', es: 'El azúcar estuvo racionado de 1942 a 1947, lo más largo de la tabla.', fa: 'شکر از ۱۹۴۲ تا ۱۹۴۷ جیره‌بندی بود؛ درازترین زمان در جدول.' } },
      { q: { en: 'In 1944, which good was no longer rationed?', es: 'En 1944, ¿qué producto ya no estaba racionado?', fa: 'در سال ۱۹۴۴، کدام جنس دیگر جیره‌بندی نبود؟' },
        choices: [{ en: 'Coffee', es: 'El café', fa: 'قهوه' }, { en: 'Gasoline', es: 'La gasolina', fa: 'پطرول' }, { en: 'Tires', es: 'Las llantas', fa: 'تایر' }, { en: 'Sugar', es: 'El azúcar', fa: 'شکر' }],
        answer: 0,
        why: { en: 'Coffee rationing ended in 1943. The others were still rationed in 1944.', es: 'El racionamiento del café terminó en 1943. Los otros seguían racionados en 1944.', fa: 'جیره‌بندی قهوه در ۱۹۴۳ تمام شد. باقی جنس‌ها در ۱۹۴۴ هنوز جیره‌بندی بودند.' } },
      { q: { en: 'Why were tires rationed?', es: '¿Por qué racionaron las llantas?', fa: 'چرا تایر جیره‌بندی شد؟' },
        choices: [
          { en: 'Japan took the rubber lands of Asia', es: 'Japón tomó las tierras del caucho de Asia', fa: 'جاپان سرزمین‌های رابر آسیا را گرفت' },
          { en: 'People stopped driving cars for fun', es: 'La gente dejó de manejar por diversión', fa: 'مردم موتررانی برای تفریح را بس کردند' },
          { en: 'Tires were too expensive to make', es: 'Hacer llantas era muy caro', fa: 'ساختن تایر خیلی گران بود' },
          { en: 'Factories made too many tires', es: 'Las fábricas hacían demasiadas llantas', fa: 'فابریکه‌ها تایر زیاد ساختند' }],
        answer: 0,
        why: { en: 'Most rubber came from Southeast Asia. Japan took those lands, so rubber was short.', es: 'Casi todo el caucho venía del sureste de Asia. Japón tomó esas tierras y faltó caucho.', fa: 'بیشتر رابر از جنوب شرق آسیا می‌آمد. جاپان آن سرزمین‌ها را گرفت و رابر کم شد.' } },
      { q: { en: 'What does the war poster ask people to do?', es: '¿Qué le pide a la gente el cartel de la guerra?', fa: 'پوستر جنگ از مردم چه می‌خواهد؟' },
        choices: [
          { en: 'Waste less and reuse what they have', es: 'Desperdiciar menos y reusar lo que tienen', fa: 'کمتر ضایع کنند و چیزهای خود را دوباره به کار ببرند' },
          { en: 'Buy new things every single week', es: 'Comprar cosas nuevas cada semana', fa: 'هر هفته چیزهای نو بخرند' },
          { en: 'Throw old things away right now', es: 'Tirar las cosas viejas ya mismo', fa: 'همین حالا چیزهای کهنه را دور بیندازند' },
          { en: 'Leave the city and live on farms', es: 'Dejar la ciudad y vivir en granjas', fa: 'شهر را ترک کنند و در فارم زندگی کنند' }],
        answer: 0,
        why: { en: '"Make it do" means use what you have. Saving at home helped the war effort.', es: '«Arréglatelas» quiere decir usar lo que tienes. Ahorrar en casa ayudó en la guerra.', fa: '«با آن بساز» یعنی از چیزی که داری کار بگیر. صرفه‌جویی در خانه به جنگ کمک کرد.' } }
    ],
    success: { en: 'The chart is clear again. Everyone at home gave up a little for the war.', es: 'La tabla está clara otra vez. Todos en casa dejaron un poco por la guerra.', fa: 'جدول دوباره روشن شد. همه در خانه برای جنگ کمی صرفه‌جویی کردند.' }
  },

  boss: {
    at: [5, 6],
    stat: 'mov',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'A grey fog drifts in from the bay. The Forgetting is here.', es: 'Una niebla gris llega desde la bahía. El Olvido está aquí.', fa: 'مه خاکستری از طرف خلیج می‌آید. فراموشی اینجاست.' },
    taunt: { en: 'No one will remember the people who worked and gave so much.', es: 'Nadie recordará a la gente que trabajó y dio tanto.', fa: 'هیچ کس مردمی را که این‌قدر کار کردند و دادند به یاد نخواهد آورد.' },
    win: { en: 'The fog lifts over the bay. Chronicle page 7.2 returns to your hands.', es: 'La niebla se va de la bahía. La página 7.2 de la crónica vuelve a tus manos.', fa: 'مه از روی خلیج کنار می‌رود. صفحهٔ ۷.۲ تاریخ‌نامه به دستت برمی‌گردد.' },
    questions: [
      { q: { en: 'What was the home front?', es: '¿Qué era el frente interno?', fa: 'جبههٔ داخلی چه بود؟' },
        choices: [
          { en: 'Life and work at home during the war', es: 'La vida y el trabajo en casa durante la guerra', fa: 'زندگی و کار در وطن در زمان جنگ' },
          { en: 'The front line where soldiers fought', es: 'La línea donde peleaban los soldados', fa: 'خط اول جایی که سربازان می‌جنگیدند' },
          { en: 'The first ship built at a shipyard', es: 'El primer barco hecho en un astillero', fa: 'اولین کشتی که در کشتی‌سازی ساخته شد' },
          { en: 'A store that sold food with no stamps', es: 'Una tienda que vendía comida sin estampillas', fa: 'دکانی که بدون تکت غذا می‌فروخت' }],
        answer: 0,
        why: { en: 'The home front was everyone at home: workers, families and children helping the war effort.', es: 'El frente interno era toda la gente en casa: obreros, familias y niños que ayudaban.', fa: 'جبههٔ داخلی همهٔ مردم در وطن بود: کارگران، خانواده‌ها و کودکانی که کمک می‌کردند.' } },
      { q: { en: 'Why did so many women take factory jobs in World War II?', es: '¿Por qué tantas mujeres trabajaron en fábricas en la Segunda Guerra Mundial?', fa: 'چرا در جنگ جهانی دوم این‌قدر زیاد زنان در فابریکه کار گرفتند؟' },
        choices: [
          { en: 'Men left to fight, and factories needed workers', es: 'Los hombres se fueron a pelear y faltaban obreros', fa: 'مردان به جنگ رفتند و فابریکه‌ها کارگر لازم داشتند' },
          { en: 'The factories closed, so the work was easy', es: 'Las fábricas cerraron, así que el trabajo era fácil', fa: 'فابریکه‌ها بسته شدند، پس کار آسان بود' },
          { en: 'A new law said women could not work at home', es: 'Una ley nueva prohibía a las mujeres trabajar en casa', fa: 'یک قانون نو گفت زنان در خانه کار نکنند' },
          { en: 'The war had ended, so men stayed at home', es: 'La guerra había terminado y los hombres se quedaban', fa: 'جنگ تمام شده بود، پس مردان در خانه ماندند' }],
        answer: 0,
        why: { en: 'Millions of men joined the military. Women filled the jobs and kept factories running.', es: 'Millones de hombres entraron al ejército. Las mujeres ocuparon los trabajos y las fábricas siguieron.', fa: 'میلیون‌ها مرد به اردو رفتند. زنان جای‌شان را گرفتند و فابریکه‌ها به کار ادامه دادند.' } },
      { q: { en: 'What was rationing?', es: '¿Qué era el racionamiento?', fa: 'جیره‌بندی چه بود؟' },
        choices: [
          { en: 'Limits on how much of a good people could buy', es: 'Límites a cuánto podía comprar la gente de algo', fa: 'حد برای اینکه مردم چقدر از یک جنس بخرند' },
          { en: 'Giving free food to every family each day', es: 'Dar comida gratis a cada familia cada día', fa: 'دادن غذای مفت به هر خانواده در هر روز' },
          { en: 'Selling all goods at very high prices', es: 'Vender todo a precios muy altos', fa: 'فروختن همهٔ جنس‌ها به قیمت خیلی بلند' },
          { en: 'Sending all American food to faraway Asia', es: 'Mandar toda la comida del país a Asia', fa: 'فرستادن همهٔ غذای امریکا به آسیای دور' }],
        answer: 0,
        why: { en: 'With a ration book, each family could buy only a fair share of scarce goods.', es: 'Con la libreta, cada familia podía comprar solo una parte justa de lo que escaseaba.', fa: 'با کتابچهٔ جیره، هر خانواده فقط سهم عادلانه‌ای از جنس‌های کمیاب می‌خرید.' } },
      { q: { en: 'Why did towns hold scrap drives?', es: '¿Por qué los pueblos hacían colectas de chatarra?', fa: 'چرا شهرها جمع‌آوری کهنه برگزار می‌کردند؟' },
        choices: [
          { en: 'To turn old metal into ships and planes', es: 'Para convertir metal viejo en barcos y aviones', fa: 'تا فلز کهنه کشتی و طیاره شود' },
          { en: 'To clean the city streets for a big parade', es: 'Para limpiar las calles de la ciudad para un desfile', fa: 'تا سرک‌های شهر برای یک رسم‌گذشت پاک شوند' },
          { en: 'To sell old pots to other countries', es: 'Para vender ollas viejas a otros países', fa: 'تا دیگ‌های کهنه را به کشورهای دیگر بفروشند' },
          { en: 'To build new houses for the soldiers', es: 'Para construir casas nuevas a los soldados', fa: 'تا برای سربازان خانه‌های نو بسازند' }],
        answer: 0,
        why: { en: 'Old metal and rubber were melted down and used to make ships, planes and tires.', es: 'El metal y el caucho viejos se fundían para hacer barcos, aviones y llantas.', fa: 'فلز و رابر کهنه ذوب می‌شد و از آن کشتی، طیاره و تایر می‌ساختند.' } },
      { q: { en: 'What did Black Americans fight for in the Double V campaign?', es: '¿Por qué lucharon los afroamericanos en la campaña de la Doble V?', fa: 'امریکایی‌های سیاه‌پوست در کمپاین «دو پیروزی» برای چه تلاش کردند؟' },
        choices: [
          { en: 'Victory abroad and an end to racism at home', es: 'Vencer afuera y acabar con el racismo en casa', fa: 'پیروزی در بیرون و پایان نژادپرستی در وطن' },
          { en: 'Two new shipyards in every American town', es: 'Dos astilleros nuevos en cada pueblo', fa: 'دو کشتی‌سازی نو در هر شهر امریکا' },
          { en: 'Victory in two big races at the shipyard', es: 'Ganar dos carreras grandes en el astillero', fa: 'بردن دو مسابقهٔ بزرگ در کشتی‌سازی' },
          { en: 'Leaving the country to live far away', es: 'Irse del país a vivir muy lejos', fa: 'ترک کشور برای زندگی در جای دور' }],
        answer: 0,
        why: { en: 'They served their country, and also demanded fair jobs, housing and rights at home.', es: 'Sirvieron a su país y también exigieron trabajos, casas y derechos justos en casa.', fa: 'آن‌ها به کشورشان خدمت کردند و در وطن کار، خانه و حقوق عادلانه هم خواستند.' } },
      { q: { en: 'What happened to Japanese Americans on the West Coast in 1942?', es: '¿Qué les pasó a los japoneses americanos de la costa oeste en 1942?', fa: 'در سال ۱۹۴۲ بر امریکایی‌های جاپانی‌تبار در ساحل غربی چه گذشت؟' },
        choices: [
          { en: 'The government forced them into camps', es: 'El gobierno los obligó a ir a campos', fa: 'حکومت آن‌ها را به زور به اردوگاه‌ها فرستاد' },
          { en: 'They were given free land and new farms', es: 'Les dieron tierras y granjas gratis', fa: 'به آن‌ها زمین و فارم مفت داده شد' },
          { en: 'They were chosen to lead the shipyards', es: 'Los eligieron para dirigir los astilleros', fa: 'برای رهبری کشتی‌سازی‌ها انتخاب شدند' },
          { en: 'They all moved back to Japan by choice', es: 'Todos volvieron a Japón porque quisieron', fa: 'همه به خواست خود به جاپان برگشتند' }],
        answer: 0,
        why: { en: 'About 120,000 people were forced into camps. Most were U.S. citizens. It was unjust.', es: 'Unas 120,000 personas fueron llevadas a campos. Casi todas eran ciudadanas. Fue injusto.', fa: 'حدود ۱۲۰ هزار نفر به زور به اردوگاه برده شدند. بیشترشان شهروند امریکا بودند. ناعادلانه بود.' } },
      { q: { en: 'What were victory gardens?', es: '¿Qué eran los huertos de la victoria?', fa: 'باغچه‌های پیروزی چه بودند؟' },
        choices: [
          { en: 'Home gardens that grew food for families', es: 'Huertos caseros que daban comida a las familias', fa: 'باغچه‌های خانه که برای خانواده‌ها غذا می‌دادند' },
          { en: 'Gardens planted to honor a famous general', es: 'Jardines sembrados para honrar a un general', fa: 'باغ‌هایی که به احترام یک جنرال مشهور کاشته شدند' },
          { en: 'Fields where soldiers trained for battle', es: 'Campos donde los soldados entrenaban', fa: 'میدان‌هایی که سربازان در آن تمرین می‌کردند' },
          { en: 'Farms that grew flowers to sell abroad', es: 'Granjas que daban flores para vender afuera', fa: 'فارم‌هایی که گل برای فروش در خارج می‌کاشتند' }],
        answer: 0,
        why: { en: 'Families grew their own vegetables, so more farm food could go to soldiers.', es: 'Las familias cultivaban sus verduras, y así más comida iba a los soldados.', fa: 'خانواده‌ها سبزی خود را کاشتند تا غذای فارم‌ها بیشتر به سربازان برسد.' } },
      { q: { en: 'Which country had been at war with Japan since 1937?', es: '¿Qué país estaba en guerra con Japón desde 1937?', fa: 'کدام کشور از سال ۱۹۳۷ با جاپان در جنگ بود؟' },
        choices: [
          { en: 'China', es: 'China', fa: 'چین' },
          { en: 'Mexico', es: 'México', fa: 'مکسیکو' },
          { en: 'Canada', es: 'Canadá', fa: 'کانادا' },
          { en: 'Brazil', es: 'Brasil', fa: 'برازیل' }],
        answer: 0,
        why: { en: 'Japan invaded China in 1937. Later, China and the United States were allies.', es: 'Japón invadió China en 1937. Después, China y Estados Unidos fueron aliados.', fa: 'جاپان در سال ۱۹۳۷ به چین حمله کرد. بعد، چین و امریکا متحد شدند.' } }
    ]
  },

  learned: [
    { en: 'On the [[home front|home front]], women and many others built ships, planes and tanks.', es: 'En el [[home front|frente interno]], las mujeres y muchos más hicieron barcos, aviones y tanques.', fa: 'در [[home front|جبههٔ داخلی]]، زنان و بسیاری دیگر کشتی، طیاره و تانک ساختند.' },
    { en: 'Families used [[ration book|ration books]], gave scrap metal and grew victory gardens.', es: 'Las familias usaron [[ration book|libretas de racionamiento]], dieron chatarra y sembraron huertos de la victoria.', fa: 'خانواده‌ها از [[ration book|کتابچهٔ جیره]] کار گرفتند، فلز کهنه دادند و باغچهٔ پیروزی کاشتند.' },
    { en: 'Not everyone was treated fairly. Japanese Americans were sent to camps, and Black workers faced [[racism|racism]].', es: 'No a todos los trataron con justicia. Mandaron a los japoneses americanos a campos, y los obreros negros sufrieron [[racism|racismo]].', fa: 'با همه عادلانه رفتار نشد. امریکایی‌های جاپانی‌تبار به اردوگاه فرستاده شدند و کارگران سیاه‌پوست با [[racism|نژادپرستی]] روبرو بودند.' }
  ],
  reflect: {
    q: { en: 'Think of a time your family or community worked together. What did each person do?', es: 'Piensa en una vez en que tu familia o comunidad trabajó junta. ¿Qué hizo cada persona?', fa: 'به زمانی فکر کن که خانواده یا مردم محله‌ات با هم کار کردند. هر کس چه کرد؟' },
    starter: { en: 'One time my community worked together when', es: 'Una vez mi comunidad trabajó junta cuando', fa: 'یک بار مردم محلهٔ ما با هم کار کردند، وقتی که' }
  }
};
