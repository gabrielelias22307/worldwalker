/* TIMEWALKER · Episode 4.3 · Latin American Independence (WHII)
   Two shores of the Caribbean Sea. West half: Gonaïves, Haiti, in 1804, where Haiti declared its independence.
   Mountains (M) on the edge ("Haiti" means "land of mountains"), small farms of coffee (3), sugarcane (e) and bananas (y),
   thatched houses, the town square and a market. East half: a mountain town in Gran Colombia around 1821, with tiled
   houses, a plaza, market stalls and potato fields (v). Between them (x 13-18) is the sea; two docks (rows 4 and 15)
   are the ship route. In 1816 Haiti helped Simón Bolívar, and that link is the quest. */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'WHII',
  title: { en: 'Latin American Independence', es: 'La independencia de América Latina', fa: 'استقلال امریکای لاتین' },
  place: { en: 'Haiti and South America, 1804–1821', es: 'Haití y América del Sur, 1804–1821', fa: 'هائیتی و امریکای جنوبی، ۱۸۰۴ تا ۱۸۲۱' },
  intro: [
    { en: 'The Grump faded the page about Latin American [[independence|independence]]. Brave people are being forgotten.',
      es: 'El Gruñón borró la página de la [[independence|independencia]] de América Latina. Se está olvidando a gente valiente.',
      fa: 'غرغرو صفحهٔ [[independence|استقلال]] امریکای لاتین را کم‌رنگ کرد. مردم شجاع دارند فراموش می‌شوند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Gonaïves, Haiti, on the world map, 1804 on the timeline */
  scenes: {
    at: [-72.7, 19.45],
    year: 1804,
    start: [
      { en: 'Saint-Domingue was France\'s richest colony. [[enslaved|Enslaved]] Africans grew its sugar and coffee.',
        es: 'Saint-Domingue era la colonia más rica de Francia. Africanos [[enslaved|esclavizados]] cultivaban su azúcar y su café.',
        fa: 'سن دومینگ ثروتمندترین مستعمرهٔ فرانسه بود. افریقایی‌های [[enslaved|برده]] شکر و قهوهٔ آن را می‌کاشتند.' },
      { en: 'In 1791, the enslaved people rose up and fought for their freedom.',
        es: 'En 1791, las personas esclavizadas se levantaron y lucharon por su libertad.',
        fa: 'در سال ۱۷۹۱، مردم برده برخاستند و برای آزادی خود جنگیدند.' },
      { en: 'Their fight inspired people all over Latin America.',
        es: 'Su lucha inspiró a gente de toda América Latina.',
        fa: 'مبارزهٔ آن‌ها به مردم سراسر امریکای لاتین الهام داد.' }
    ],
    page: { en: 'Haitians say Catherine Flon sewed their first flag in 1803.',
      es: 'Los haitianos cuentan que Catherine Flon cosió su primera bandera en 1803.',
      fa: 'هائیتی‌ها می‌گویند کاترین فلون اولین بیرق آن‌ها را در سال ۱۸۰۳ دوخت.' },
    guess: {
      q: { en: 'In 1791, enslaved people in Saint-Domingue rose up. Did they win their freedom?', es: 'En 1791, las personas esclavizadas de Saint-Domingue se levantaron. ¿Ganaron su libertad?', fa: 'در سال ۱۷۹۱، مردم برده در سن دومینگ برخاستند. آیا آزادی خود را به دست آوردند؟' },
      choices: [
        { t: { en: '✊ Yes, they won', es: '✊ Sí, ganaron', fa: '✊ بله، پیروز شدند' }, ok: true },
        { t: { en: '⛓️ No, they lost', es: '⛓️ No, perdieron', fa: '⛓️ نه، شکست خوردند' } }
      ],
      why: { en: 'After 13 years of war, they won. In 1804, they named their free country Haiti.', es: 'Después de 13 años de guerra, ganaron. En 1804, llamaron Haití a su país libre.', fa: 'بعد از ۱۳ سال جنگ، پیروز شدند. در سال ۱۸۰۴، کشور آزاد خود را هائیتی نامیدند.' }
    },
    next: {
      q: { en: 'Next: the Industrial Revolution. Will machines change how people work?', es: 'Ahora: la Revolución Industrial. ¿Cambiarán las máquinas la forma de trabajar?', fa: 'بعدی: انقلاب صنعتی. آیا ماشین‌ها کار مردم را تغییر می‌دهند؟' },
      choices: [
        { t: { en: '🏭 Yes, a lot', es: '🏭 Sí, mucho', fa: '🏭 بله، خیلی زیاد' }, ok: true },
        { t: { en: '🧺 No, not at all', es: '🧺 No, para nada', fa: '🧺 نه، هیچ' } }
      ],
      why: { en: 'Factories and machines changed work, cities and daily life. We start in Manchester, England.', es: 'Las fábricas y las máquinas cambiaron el trabajo, las ciudades y la vida diaria. Empezamos en Manchester, Inglaterra.', fa: 'فابریکه‌ها و ماشین‌ها کار، شهرها و زندگی روزانه را تغییر دادند. از منچستر انگلستان شروع می‌کنیم.' }
    }
  },
  /* houses: who lives behind each door. Haiti uses the realm 4 room; the town in Gran Colombia uses the tiled room (5). */
  houses: [
    { at: [5, 2], name: { en: 'Grandmother Rose', es: 'Abuela Rose', fa: 'مادرکلان رز' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#2a6a9a', pants: '#e8dcc0', style: 'bun' },
      lines: [
        { en: 'I was enslaved on a sugar plantation for 40 years.', es: 'Estuve esclavizada en una plantación de azúcar durante 40 años.', fa: 'من ۴۰ سال در یک کشتزار بزرگ نیشکر برده بودم.' },
        { en: 'Now I farm my own small field. My grandchildren are born free.', es: 'Ahora cultivo mi propio campo pequeño. Mis nietos nacen libres.', fa: 'حالا زمین کوچک خودم را کشت می‌کنم. نواسه‌هایم آزاد به دنیا می‌آیند.' }
      ] },
    { at: [3, 13], name: { en: 'Fabienne', es: 'Fabienne', fa: 'فابین' },
      look: { skin: 4, hair: '#120c08', shirt: '#c83a3a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Haiti means "land of mountains" in Taíno, the first people of this island.', es: 'Haití significa "tierra de montañas" en taíno, el idioma del primer pueblo de esta isla.', fa: 'هائیتی به زبان تاینو، مردم اول این جزیره، یعنی «سرزمین کوه‌ها».' },
        { en: 'Our leaders chose that old name in 1804, to honor them.', es: 'Nuestros líderes eligieron ese nombre antiguo en 1804, para honrarlos.', fa: 'رهبران ما آن نام کهنه را در سال ۱۸۰۴ برای احترام به آن‌ها انتخاب کردند.' }
      ] },
    { at: [22, 2], style: 5, name: { en: 'Don Mateo', es: 'Don Mateo', fa: 'دون ماتئو' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'My family is [[creole|creole]]: born here, with Spanish parents.', es: 'Mi familia es [[creole|criolla]]: nacimos aquí, de padres españoles.', fa: 'خانوادهٔ من [[creole|کریول]] است: اینجا به دنیا آمده، از پدر و مادر هسپانوی.' },
        { en: 'Spain gave the top jobs to men born in Spain. We were angry.', es: 'España daba los mejores puestos a los hombres nacidos en España. Estábamos enojados.', fa: 'هسپانیه بهترین کارها را به مردان هسپانیه‌زاده می‌داد. ما قهر بودیم.' }
      ] },
    { at: [28, 13], style: 5, name: { en: 'Inés Quispe', es: 'Inés Quispe', fa: 'اینس کیسپه' },
      look: { skin: 3, hair: '#120c08', shirt: '#d9542b', pants: '#2a4a3a', style: 'long', hat: '#5a3a2a' },
      lines: [
        { en: 'My Indigenous people farmed these mountains long before Spain came.', es: 'Mi pueblo indígena cultivaba estas montañas mucho antes de que llegara España.', fa: 'مردم بومی من خیلی پیش از آمدن هسپانیه در این کوه‌ها کشت می‌کردند.' },
        { en: 'Spain\'s rule is over. But rich creoles still own most of the land.', es: 'El gobierno de España terminó. Pero los criollos ricos aún tienen casi toda la tierra.', fa: 'حکومت هسپانیه تمام شد. اما کریول‌های ثروتمند هنوز بیشتر زمین را دارند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West (x 0-12): Gonaïves, Haiti. Mountains (M), coffee (3), sugarcane (e), bananas (y), palms (p), thatched houses
     (H over N), the town square (l) and the market (m).
     x 13-18: the Caribbean Sea (~ near the shores, = deep water). Rows 4 and 15: the docks (k) and the ship route (b).
     East (x 19-31): a mountain town in Gran Colombia. Tiled houses (R/Q over h), the plaza (l), market stalls (m),
     potato fields (v). */
  map: [
    'MMMMMMMMMMMMM~====~MMMMMMMMMMMMM',
    'M.p.HHH..,..s~====~s.RRR..QQQ..M',
    'M...NdN.....s~====~s.hdh..hhh..M',
    'M.x..l......s~====~s.....l.....M',
    'MllllllllllllkbbbbkllllllllllllM',
    'M.3333.eeee.s~====~s..l...vvvv.M',
    'M.3333.eeee.s~====~s..l...vvvv.M',
    'M.3333......s~====~s..lllll....M',
    'M.3333.mmm..s~====~s.......,...M',
    'M......l....s~====~s.x.........M',
    'M....lll....s~====~s.....l.....M',
    'M....l......s~====~s.....l.....M',
    'M.HHHl.eeee.s~====~s.RRR.l.QQQ.M',
    'M.NdNl.eeee.s~====~s.hhh.l.hdh.M',
    'M....l......s~====~s.....l.....M',
    'Mllllllllllllkbbbbklllllllllll.M',
    'M.yyyy..pp..s~====~s..mmm.ll...M',
    'M.yyyy.ppp..s~====~s......l.vv.M',
    'M.yyyy..p...s~====~s.,....l.vv.M',
    'M......,....s~====~s......l....M',
    'M.,.....,...s~====~s.,.........M',
    'MMMMMMMMMMMMM~====~MMMMMMMMMMMMM'
  ],
  start: [23, 19],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 6], at: [24, 3], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, then 3 steps north. Look near the house.', es: 'Desde esta nota, camina 4 pasos al este y luego 3 pasos al norte. Busca cerca de la casa.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۳ قدم به شمال. نزدیک خانه را ببین.' },
      text: { en: 'A silver coin from Spanish times. Andes silver made Spain rich, through forced Indigenous labor.', es: 'Una moneda de plata de la época española. La plata de los Andes enriqueció a España con trabajo indígena forzado.', fa: 'یک سکهٔ نقره از زمان هسپانیه. نقرهٔ اندیز با کار اجباری مردم بومی هسپانیه را ثروتمند کرد.' } },
    { clueAt: [11, 10], at: [11, 18], decor: 'shell',
      clue: { en: 'From this note, walk 8 steps south. You will be near the palm trees.', es: 'Desde esta nota, camina 8 pasos al sur. Llegarás cerca de las palmeras.', fa: 'از این یادداشت، ۸ قدم به جنوب برو. نزدیک درختان خرما می‌رسی.' },
      text: { en: 'A conch shell, called a lambi. Haitian fighters blew it as a signal to gather.', es: 'Un caracol de mar, llamado lambí. Los luchadores haitianos lo soplaban como señal para reunirse.', fa: 'یک صدف بزرگ بحری به نام لامبی. جنگجویان هائیتی آن را برای جمع شدن پُف می‌کردند.' } }
  ],

  words: {
    independence: { en: 'freedom from rule by another country', es: 'libertad de no ser gobernado por otro país', fa: 'آزادی از حکومت یک کشور دیگر' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    plantation: { en: 'a huge farm that grows one crop to sell, often with forced labor', es: 'una finca enorme que siembra un solo cultivo para vender, muchas veces con trabajo forzado', fa: 'یک فارم بسیار بزرگ که یک حاصل را برای فروش می‌کارد، اکثراً با کار اجباری' },
    creole: { en: 'in Spanish America, a person of Spanish family who was born in the Americas', es: 'en la América española, una persona de familia española nacida en América', fa: 'در امریکای هسپانوی، کسی از خانوادهٔ هسپانوی که در قارهٔ امریکا به دنیا آمده' },
    republic: { en: 'a country where people choose their leaders, with no king', es: 'un país donde la gente elige a sus líderes, sin rey', fa: 'کشوری که مردم رهبران خود را انتخاب می‌کنند و پادشاه ندارد' },
    revolution: { en: 'a big change, often a fight, when people replace their government', es: 'un gran cambio, muchas veces una lucha, cuando la gente reemplaza a su gobierno', fa: 'یک تغییر بزرگ، اکثراً با مبارزه، وقتی مردم حکومت خود را عوض می‌کنند' }
  },

  npcs: [
    {
      x: 6, y: 6,
      name: { en: 'Marie-Claire', es: 'Marie-Claire', fa: 'ماری کلر' },
      role: { en: 'Coffee farmer', es: 'Cultivadora de café', fa: 'دهقان قهوه' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a4a3a', style: 'bun', hat: '#c8a870' },
      lines: [
        { en: 'I was born [[enslaved|enslaved]] here, in Saint-Domingue. It was France\'s richest colony.', es: 'Nací [[enslaved|esclavizada]] aquí, en Saint-Domingue. Era la colonia más rica de Francia.', fa: 'من اینجا در سن دومینگ [[enslaved|برده]] به دنیا آمدم. این ثروتمندترین مستعمرهٔ فرانسه بود.' },
        { en: 'Enslaved Africans were forced to grow sugar and coffee. The work was cruel.', es: 'Obligaban a los africanos esclavizados a cultivar azúcar y café. El trabajo era cruel.', fa: 'افریقایی‌های برده را مجبور می‌کردند شکر و قهوه بکارند. کار ظالمانه بود.' },
        { en: 'In 1791, enslaved people rose up and fought for their freedom.', es: 'En 1791, las personas esclavizadas se levantaron y lucharon por su libertad.', fa: 'در سال ۱۷۹۱، مردم برده برخاستند و برای آزادی خود جنگیدند.' },
        { en: 'Our great leader, Toussaint Louverture, had been enslaved too.', es: 'Nuestro gran líder, Toussaint Louverture, también había sido esclavizado.', fa: 'رهبر بزرگ ما، توسن لوورتور، هم برده بوده است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who led the Haitian Revolution?', es: '¿Quién dirigió la Revolución haitiana?', fa: 'انقلاب هائیتی را کی رهبری کرد؟' },
        choices: [
          { ok: true, t: { en: 'People who had been enslaved', es: 'Personas que habían sido esclavizadas', fa: 'مردمی که برده بودند' },
            why: { en: 'Yes. People who had been enslaved led it and won it. They freed themselves.', es: 'Sí. Personas que habían sido esclavizadas la dirigieron y la ganaron. Se liberaron a sí mismas.', fa: 'بله. مردمی که برده بودند آن را رهبری کردند و پیروز شدند. خودشان خود را آزاد کردند.' } },
          { t: { en: 'Rich French plantation owners', es: 'Dueños franceses ricos de plantaciones', fa: 'مالکان ثروتمند فرانسوی کشتزارها' },
            why: { en: 'Plantation owners wanted slavery to go on. The people they enslaved rose up against them.', es: 'Los dueños de plantaciones querían que siguiera la esclavitud. Las personas esclavizadas se levantaron contra ellos.', fa: 'مالکان کشتزارها می‌خواستند برده‌داری ادامه یابد. مردم برده علیه آن‌ها برخاستند.' } },
          { t: { en: 'Soldiers sent by Spain\'s king', es: 'Soldados enviados por el rey de España', fa: 'عسکرانی که پادشاه هسپانیه فرستاد' },
            why: { en: 'Spain did not lead it. People who had been enslaved in Saint-Domingue led their own revolution.', es: 'España no la dirigió. Las personas esclavizadas de Saint-Domingue dirigieron su propia revolución.', fa: 'هسپانیه آن را رهبری نکرد. مردم برده در سن دومینگ انقلاب خود را رهبری کردند.' } }
        ]
      }
    },
    {
      x: 4, y: 14,
      name: { en: 'Jean-Baptiste', es: 'Jean-Baptiste', fa: 'ژان باتیست' },
      role: { en: 'Former soldier', es: 'Exsoldado', fa: 'عسکر سابق' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a4a8a', pants: '#e8e0d0', style: 'short' },
      lines: [
        { en: 'In 1802, Napoleon sent a French army to bring back slavery.', es: 'En 1802, Napoleón envió un ejército francés para traer de vuelta la esclavitud.', fa: 'در سال ۱۸۰۲، ناپلئون یک اردوی فرانسوی فرستاد تا برده‌داری را برگرداند.' },
        { en: 'We fought hard, and we won. Many people died for this freedom.', es: 'Luchamos duro y ganamos. Mucha gente murió por esta libertad.', fa: 'ما سخت جنگیدیم و پیروز شدیم. بسیاری برای این آزادی جان دادند.' },
        { en: 'On January 1, 1804, our leader Dessalines declared [[independence|independence]] here, in Gonaïves.', es: 'El 1 de enero de 1804, nuestro líder Dessalines declaró la [[independence|independencia]] aquí, en Gonaïves.', fa: 'در اول جنوری ۱۸۰۴، رهبر ما دسالین اینجا در گونائیو [[independence|استقلال]] را اعلام کرد.' },
        { en: 'Haiti is the first nation founded by people who had been enslaved.', es: 'Haití es la primera nación fundada por personas que habían sido esclavizadas.', fa: 'هائیتی اولین کشوری است که مردمی که برده بودند آن را ساختند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What made Haiti different from every other country in 1804?', es: '¿Qué hacía a Haití diferente de todos los demás países en 1804?', fa: 'در سال ۱۸۰۴ چه چیز هائیتی را از همهٔ کشورهای دیگر فرق می‌کرد؟' },
        choices: [
          { ok: true, t: { en: 'Formerly enslaved people founded it', es: 'La fundaron personas antes esclavizadas', fa: 'مردمی که برده بودند آن را ساختند' },
            why: { en: 'Yes. Haiti was the first nation founded by formerly enslaved people. It ended slavery for good.', es: 'Sí. Haití fue la primera nación fundada por personas antes esclavizadas. Acabó con la esclavitud para siempre.', fa: 'بله. هائیتی اولین کشوری بود که برده‌های سابق ساختند. برده‌داری را برای همیشه تمام کرد.' } },
          { t: { en: 'It was the biggest country in the world', es: 'Era el país más grande del mundo', fa: 'بزرگ‌ترین کشور جهان بود' },
            why: { en: 'Haiti is a small country on an island. What made it special was who founded it.', es: 'Haití es un país pequeño en una isla. Lo especial fue quiénes lo fundaron.', fa: 'هائیتی کشور کوچکی در یک جزیره است. خاص بودنش به خاطر کسانی بود که آن را ساختند.' } },
          { t: { en: 'France\'s king still ruled it from Paris', es: 'El rey de Francia aún la gobernaba desde París', fa: 'پادشاه فرانسه هنوز از پاریس بر آن حکومت می‌کرد' },
            why: { en: 'No. In 1804, Haiti won its independence. France no longer ruled it.', es: 'No. En 1804, Haití ganó su independencia. Francia ya no la gobernaba.', fa: 'نه. در سال ۱۸۰۴ هائیتی استقلال گرفت. فرانسه دیگر بر آن حکومت نمی‌کرد.' } }
        ]
      }
    },
    {
      x: 20, y: 16,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Weaver', es: 'Tejedora', fa: 'بافنده' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f8f8f', pants: '#7a3a2a', style: 'long' },
      lines: [
        { en: 'Welcome to Gran Colombia! In 1819, Simón Bolívar\'s army beat Spain\'s army.', es: '¡Bienvenido a la Gran Colombia! En 1819, el ejército de Simón Bolívar venció al de España.', fa: 'به کلمبیای بزرگ خوش آمدی! در سال ۱۸۱۹، اردوی سیمون بولیوار اردوی هسپانیه را شکست داد.' },
        { en: 'Bolívar is a [[creole|creole]]: born here, from a rich Spanish family.', es: 'Bolívar es [[creole|criollo]]: nació aquí, en una familia española rica.', fa: 'بولیوار یک [[creole|کریول]] است: اینجا به دنیا آمده، از یک خانوادهٔ ثروتمند هسپانوی.' },
        { en: 'In 1815, he lost the war for a time and went to Haiti for help.', es: 'En 1815, perdió la guerra por un tiempo y fue a Haití a pedir ayuda.', fa: 'در سال ۱۸۱۵، او برای مدتی جنگ را باخت و برای کمک به هائیتی رفت.' },
        { en: 'Haiti gave him ships and guns. In return, Haiti asked him to free enslaved people.', es: 'Haití le dio barcos y armas. A cambio, Haití le pidió liberar a los esclavizados.', fa: 'هائیتی به او کشتی و تفنگ داد. در عوض، هائیتی خواست برده‌ها را آزاد کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did Haiti help Simón Bolívar?', es: '¿Cómo ayudó Haití a Simón Bolívar?', fa: 'هائیتی چطور به سیمون بولیوار کمک کرد؟' },
        choices: [
          { ok: true, t: { en: 'It gave him ships, guns and supplies', es: 'Le dio barcos, armas y provisiones', fa: 'به او کشتی، تفنگ و تجهیزات داد' },
            why: { en: 'Yes. Haiti\'s president, Pétion, helped him. He asked Bolívar to free enslaved people.', es: 'Sí. El presidente de Haití, Pétion, lo ayudó. Le pidió a Bolívar liberar a los esclavizados.', fa: 'بله. رئیس‌جمهور هائیتی، پتیون، به او کمک کرد و خواست بولیوار برده‌ها را آزاد کند.' } },
          { t: { en: 'It sent its own king to rule Venezuela', es: 'Mandó a su propio rey a gobernar Venezuela', fa: 'پادشاه خود را برای حکومت ونزوئلا فرستاد' },
            why: { en: 'Haiti did not rule Venezuela. It helped Bolívar\'s fight for independence from Spain.', es: 'Haití no gobernó Venezuela. Ayudó a Bolívar en su lucha por independizarse de España.', fa: 'هائیتی بر ونزوئلا حکومت نکرد. به مبارزهٔ بولیوار برای استقلال از هسپانیه کمک کرد.' } },
          { t: { en: 'It sold him all of its sugar and coffee', es: 'Le vendió todo su azúcar y su café', fa: 'همهٔ شکر و قهوهٔ خود را به او فروخت' },
            why: { en: 'Haiti did not sell him crops. It gave ships and guns to help free South America.', es: 'Haití no le vendió cosechas. Le dio barcos y armas para ayudar a liberar América del Sur.', fa: 'هائیتی به او حاصل نفروخت. کشتی و تفنگ داد تا به آزادی امریکای جنوبی کمک کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 3, text: { en: 'GONAÏVES · 1804 · Here, Haiti declared [[independence|independence]] on January 1, 1804.', es: 'GONAÏVES · 1804 · Aquí Haití declaró su [[independence|independencia]] el 1 de enero de 1804.', fa: 'گونائیو · ۱۸۰۴ · اینجا هائیتی در اول جنوری ۱۸۰۴ [[independence|استقلال]] خود را اعلام کرد.' } },
    { x: 21, y: 9, text: { en: 'GRAN COLOMBIA · 1821 · Today Colombia, Venezuela, Ecuador and Panama. Bolívar is its president.', es: 'GRAN COLOMBIA · 1821 · Hoy Colombia, Venezuela, Ecuador y Panamá. Bolívar es su presidente.', fa: 'کلمبیای بزرگ · ۱۸۲۱ · امروز کلمبیا، ونزوئلا، اکوادور و پاناما. بولیوار رئیس‌جمهور آن است.' } }
  ],

  /* the quest: Doña Josefa the printer (gold !) in Gran Colombia -> Tomás the sailor on the north dock
     -> Nadège at the market in Gonaïves: carry her the gift Haiti gave Bolívar in 1816 (a printing press) -> back to Josefa */
  quest: {
    stat: 'reg',
    title: { en: 'A Gift from Haiti', es: 'Un regalo de Haití', fa: 'هدیه‌ای از هائیتی' },
    giver: {
      x: 24, y: 17,
      name: { en: 'Doña Josefa', es: 'Doña Josefa', fa: 'دونیا خوزفا' },
      role: { en: 'Printer', es: 'Impresora', fa: 'چاپگر' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#f2f2f2', pants: '#2a5a8a', style: 'bun' },
      lines: [
        { en: 'I print a newspaper. I want to spread news of freedom to everyone.', es: 'Imprimo un periódico. Quiero llevar noticias de libertad a todos.', fa: 'من یک روزنامه چاپ می‌کنم. می‌خواهم خبر آزادی را به همه برسانم.' },
        { en: 'But my old press is broken. Haiti once gave Bolívar something for printing!', es: 'Pero mi vieja prensa está rota. ¡Haití una vez le dio a Bolívar algo para imprimir!', fa: 'اما ماشین چاپ کهنه‌ام خراب است. هائیتی یک بار به بولیوار چیزی برای چاپ داد!' },
        { en: 'Tomás the sailor knows the way to Haiti. Ask him on the dock.', es: 'El marinero Tomás conoce el camino a Haití. Pregúntale en el muelle.', fa: 'توماس ملاح راه هائیتی را می‌داند. از او در بندرگاه بپرس.' }
      ],
      wait: { en: 'Tomás waits by the north dock, on the west side of town.', es: 'Tomás espera junto al muelle del norte, en el lado oeste del pueblo.', fa: 'توماس کنار بندرگاه شمالی، در طرف غرب شهرک منتظر است.' },
      thanks: { en: 'A printing press! Now we can print news of freedom. Thank you, Haiti!', es: '¡Una imprenta! Ahora podemos imprimir noticias de libertad. ¡Gracias, Haití!', fa: 'ماشین چاپ! حالا می‌توانیم خبر آزادی را چاپ کنیم. تشکر، هائیتی!' }
    },
    contact: {
      x: 20, y: 3,
      name: { en: 'Tomás', es: 'Tomás', fa: 'توماس' },
      role: { en: 'Sailor', es: 'Marinero', fa: 'ملاح' },
      look: { skin: 4, hair: '#1a1208', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#8a2a2a' },
      lines: [
        { en: 'I sailed from Haiti with Bolívar in 1816. Haiti\'s people helped us.', es: 'Navegué desde Haití con Bolívar en 1816. El pueblo de Haití nos ayudó.', fa: 'من در سال ۱۸۱۶ با بولیوار از هائیتی آمدم. مردم هائیتی به ما کمک کردند.' },
        { en: 'Walk this dock west across the sea. Find Nadège at the market in Haiti.', es: 'Camina por este muelle al oeste, cruzando el mar. Busca a Nadège en el mercado de Haití.', fa: 'روی این بندرگاه به غرب از بحر بگذر. نادژ را در بازار هائیتی پیدا کن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 8, y: 9,
        name: { en: 'Nadège', es: 'Nadège', fa: 'نادژ' },
        role: { en: 'Market trader', es: 'Comerciante del mercado', fa: 'سوداگر بازار' },
        look: { skin: 5, hair: '#120c08', shirt: '#6a4a8a', pants: '#3a2a20', style: 'long' },
        lines: [
          { en: 'Welcome to the market in Gonaïves! Ships come here from all over the Caribbean.', es: '¡Bienvenido al mercado de Gonaïves! Aquí llegan barcos de todo el Caribe.', fa: 'به بازار گونائیو خوش آمدی! کشتی‌ها از سراسر کارائیب به اینجا می‌آیند.' }
        ]
      },
      q: { en: 'Haiti gave Bolívar ships, guns and one more gift. Find the gift that spreads news.', es: 'Haití le dio a Bolívar barcos, armas y un regalo más. Busca el regalo que difunde noticias.', fa: 'هائیتی به بولیوار کشتی، تفنگ و یک هدیهٔ دیگر داد. هدیه‌ای را پیدا کن که خبر پخش می‌کند.' },
      choices: [
        { ok: true, at: [10, 17], icon: '📰', t: { en: 'A small printing press', es: 'Una pequeña imprenta', fa: 'یک ماشین چاپ کوچک' },
          why: { en: 'Yes! In 1816, Haiti\'s president Pétion gave Bolívar a printing press, so news of freedom could spread.', es: '¡Sí! En 1816, el presidente Pétion de Haití le dio a Bolívar una imprenta para difundir la libertad.', fa: 'بله! در سال ۱۸۱۶، پتیون، رئیس‌جمهور هائیتی، به بولیوار ماشین چاپ داد تا خبر آزادی پخش شود.' } },
        { at: [9, 5], icon: '🚩', t: { en: 'A royal Spanish flag', es: 'Una bandera real de España', fa: 'یک بیرق شاهی هسپانیه' },
          why: { en: 'This is Spain\'s royal flag. Bolívar fought to end Spain\'s rule, and Haiti helped him.', es: 'Es la bandera real de España. Bolívar luchó para terminar el gobierno de España, y Haití lo ayudó.', fa: 'این بیرق شاهی هسپانیه است. بولیوار برای پایان حکومت هسپانیه جنگید و هائیتی به او کمک کرد.' } },
        { at: [9, 13], icon: '👑', t: { en: 'A golden crown', es: 'Una corona de oro', fa: 'یک تاج طلایی' },
          why: { en: 'A crown is for a king. Bolívar wanted a [[republic|republic]], and Haiti\'s help was for freedom.', es: 'Una corona es para un rey. Bolívar quería una [[republic|república]], y la ayuda de Haití era para la libertad.', fa: 'تاج برای پادشاه است. بولیوار [[republic|جمهوری]] می‌خواست و کمک هائیتی برای آزادی بود.' } }
      ],
      item: { icon: '📰', name: { en: 'A small printing press', es: 'Una pequeña imprenta', fa: 'یک ماشین چاپ کوچک' } }
    }
  },

  scraps: [[1, 20], [30, 1], [30, 20]],
  smudges: [[9, 2], [5, 19]],

  challenge: {
    at: [10, 20],
    type: 'claim',
    stat: 'loc',
    title: { en: 'Who led it? What changed?', es: '¿Quién la dirigió? ¿Qué cambió?', fa: 'کی رهبری کرد؟ چه تغییر کرد؟' },
    intro: { en: 'The Grump says these revolutions were all the same. Pick one. Back it up with two true facts.',
      es: 'El Gruñón dice que todas estas revoluciones fueron iguales. Elige una. Apóyala con dos datos verdaderos.',
      fa: 'غرغرو می‌گوید این انقلاب‌ها همه یکسان بودند. یکی را انتخاب کن. با دو حقیقت از آن دفاع کن.' },
    options: [
      { icon: '✊', name: { en: 'Haiti, 1791–1804', es: 'Haití, 1791–1804', fa: 'هائیتی، ۱۷۹۱ تا ۱۸۰۴' }, desc: { en: 'Saint-Domingue against France', es: 'Saint-Domingue contra Francia', fa: 'سن دومینگ علیه فرانسه' },
        result: { en: 'Haiti became the first nation founded by formerly enslaved people. Slavery ended there for good.', es: 'Haití fue la primera nación fundada por personas antes esclavizadas. Allí la esclavitud terminó para siempre.', fa: 'هائیتی اولین کشوری شد که برده‌های سابق ساختند. برده‌داری در آنجا برای همیشه تمام شد.' } },
      { icon: '⛰️', name: { en: 'Gran Colombia, 1810–1821', es: 'Gran Colombia, 1810–1821', fa: 'کلمبیای بزرگ، ۱۸۱۰ تا ۱۸۲۱' }, desc: { en: 'Creoles against Spain', es: 'Criollos contra España', fa: 'کریول‌ها علیه هسپانیه' },
        result: { en: 'Spain\'s rule ended in northern South America. But slavery there lasted until the 1850s.', es: 'Terminó el gobierno de España en el norte de América del Sur. Pero allí la esclavitud duró hasta los años 1850.', fa: 'حکومت هسپانیه در شمال امریکای جنوبی تمام شد. اما برده‌داری آنجا تا دههٔ ۱۸۵۰ ماند.' } },
      { icon: '📜', name: { en: 'United States, 1775–1783', es: 'Estados Unidos, 1775–1783', fa: 'ایالات متحده، ۱۷۷۵ تا ۱۷۸۳' }, desc: { en: 'Colonists against Britain', es: 'Colonos contra Gran Bretaña', fa: 'مستعمره‌نشینان علیه بریتانیا' },
        result: { en: 'The United States became independent. But slavery there lasted until 1865.', es: 'Estados Unidos se independizó. Pero allí la esclavitud duró hasta 1865.', fa: 'ایالات متحده مستقل شد. اما برده‌داری آنجا تا ۱۸۶۵ ماند.' } }
    ],
    kinds: [
      { id: 'who', label: { en: 'Who led it', es: 'Quién la dirigió', fa: 'کی آن را رهبری کرد' } },
      { id: 'changed', label: { en: 'What changed for enslaved people', es: 'Qué cambió para los esclavizados', fa: 'برای برده‌ها چه تغییر کرد' } }
    ],
    reasons: [
      { kind: 'who', fits: [0], t: { en: 'People who had been enslaved, like Toussaint Louverture', es: 'Personas antes esclavizadas, como Toussaint Louverture', fa: 'مردمی که برده بودند، مثل توسن لوورتور' },
        why: { en: 'This is true of Haiti only.', es: 'Esto solo es cierto de Haití.', fa: 'این فقط دربارهٔ هائیتی درست است.' } },
      { kind: 'who', fits: [1], t: { en: 'Creoles, like Simón Bolívar', es: 'Criollos, como Simón Bolívar', fa: 'کریول‌ها، مثل سیمون بولیوار' },
        why: { en: 'This is true of Gran Colombia only.', es: 'Esto solo es cierto de la Gran Colombia.', fa: 'این فقط دربارهٔ کلمبیای بزرگ درست است.' } },
      { kind: 'who', fits: [2], t: { en: 'Colonists, like George Washington', es: 'Colonos, como George Washington', fa: 'مستعمره‌نشینان، مثل جورج واشنگتن' },
        why: { en: 'This is true of the United States only.', es: 'Esto solo es cierto de Estados Unidos.', fa: 'این فقط دربارهٔ ایالات متحده درست است.' } },
      { kind: 'who', fits: [], t: { en: 'Kings sent from Europe', es: 'Reyes enviados desde Europa', fa: 'پادشاهانی که از اروپا فرستاده شدند' },
        why: { en: 'Kings did not lead these revolutions. People in the colonies did.', es: 'Los reyes no dirigieron estas revoluciones. Las dirigió la gente de las colonias.', fa: 'پادشاهان این انقلاب‌ها را رهبری نکردند. مردم مستعمره‌ها کردند.' } },
      { kind: 'changed', fits: [0], t: { en: 'Slavery ended, and it never came back', es: 'La esclavitud terminó y nunca volvió', fa: 'برده‌داری تمام شد و هرگز برنگشت' },
        why: { en: 'Only Haiti ended slavery for good when it became free.', es: 'Solo Haití terminó la esclavitud para siempre al independizarse.', fa: 'فقط هائیتی هنگام آزادی برده‌داری را برای همیشه تمام کرد.' } },
      { kind: 'changed', fits: [1], t: { en: 'Spain\'s rule ended, but slavery lasted until the 1850s', es: 'Terminó el gobierno de España, pero la esclavitud duró hasta los años 1850', fa: 'حکومت هسپانیه تمام شد، اما برده‌داری تا دههٔ ۱۸۵۰ ماند' },
        why: { en: 'This is true of Gran Colombia only.', es: 'Esto solo es cierto de la Gran Colombia.', fa: 'این فقط دربارهٔ کلمبیای بزرگ درست است.' } },
      { kind: 'changed', fits: [2], t: { en: 'Britain\'s rule ended, but slavery lasted until 1865', es: 'Terminó el gobierno británico, pero la esclavitud duró hasta 1865', fa: 'حکومت بریتانیا تمام شد، اما برده‌داری تا ۱۸۶۵ ماند' },
        why: { en: 'This is true of the United States only.', es: 'Esto solo es cierto de Estados Unidos.', fa: 'این فقط دربارهٔ ایالات متحده درست است.' } },
      { kind: 'changed', fits: [], t: { en: 'Nothing changed at all', es: 'No cambió nada', fa: 'هیچ چیز تغییر نکرد' },
        why: { en: 'Each of these revolutions ended rule by a faraway country.', es: 'Cada una de estas revoluciones terminó con el gobierno de un país lejano.', fa: 'هر یک از این انقلاب‌ها حکومت یک کشور دور را تمام کرد.' } }
    ],
    mismatch: { en: 'That fact is not true for the revolution you picked.', es: 'Ese dato no es cierto para la revolución que elegiste.', fa: 'این حقیقت دربارهٔ انقلابی که انتخاب کردی درست نیست.' },
    success: { en: 'Each revolution was different. In Haiti, the people who suffered most led the fight.', es: 'Cada revolución fue distinta. En Haití, quienes más sufrieron dirigieron la lucha.', fa: 'هر انقلاب فرق داشت. در هائیتی، کسانی که بیشتر از همه رنج کشیدند مبارزه را رهبری کردند.' }
  },

  boss: {
    at: [25, 8],
    stat: 'mov',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting hangs like a gray fog over the mountain town.', es: 'El Olvido cuelga como una niebla gris sobre el pueblo de montaña.', fa: 'فراموشی مثل یک مه خاکستری بالای شهرک کوهستانی آویزان است.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts. Their names are remembered. Chronicle page 4.3 comes back to you.', es: 'La niebla se va. Sus nombres se recuerdan. La página 4.3 de la crónica vuelve a ti.', fa: 'مه کنار می‌رود. نام‌هایشان به یاد می‌ماند. صفحهٔ ۴.۳ تاریخ‌نامه به تو برمی‌گردد.' },
    questions: [
      { q: { en: 'Who led the Haitian Revolution?', es: '¿Quién dirigió la Revolución haitiana?', fa: 'انقلاب هائیتی را کی رهبری کرد؟' },
        choices: [
          { en: 'Formerly enslaved people like Toussaint Louverture', es: 'Personas antes esclavizadas, como Toussaint Louverture', fa: 'برده‌های سابق، مثل توسن لوورتور' },
          { en: 'French plantation owners who wanted more land', es: 'Dueños franceses de plantaciones que querían más tierra', fa: 'مالکان فرانسوی کشتزارها که زمین بیشتر می‌خواستند' },
          { en: 'Spanish soldiers who came from nearby Cuba', es: 'Soldados españoles que vinieron de Cuba', fa: 'عسکران هسپانوی که از کیوبای نزدیک آمدند' },
          { en: 'British sailors who wanted the island\'s sugar', es: 'Marineros británicos que querían el azúcar de la isla', fa: 'ملاحان بریتانیایی که شکر جزیره را می‌خواستند' }],
        answer: 0,
        why: { en: 'Toussaint Louverture had been enslaved. He became the revolution\'s greatest leader.', es: 'Toussaint Louverture había sido esclavizado. Llegó a ser el gran líder de la revolución.', fa: 'توسن لوورتور برده بود. او بزرگ‌ترین رهبر انقلاب شد.' } },
      { q: { en: 'What did Haiti become in 1804?', es: '¿Qué llegó a ser Haití en 1804?', fa: 'هائیتی در سال ۱۸۰۴ چه شد؟' },
        choices: [
          { en: 'The first free nation founded by formerly enslaved people', es: 'La primera nación libre fundada por personas antes esclavizadas', fa: 'اولین کشور آزاد که برده‌های سابق ساختند' },
          { en: 'The richest colony that France owned anywhere in the Americas', es: 'La colonia más rica que Francia tenía en toda América', fa: 'ثروتمندترین مستعمرهٔ فرانسه در سراسر امریکا' },
          { en: 'A part of Spain, ruled from the city of Madrid', es: 'Una parte de España, gobernada desde Madrid', fa: 'بخشی از هسپانیه که از مادرید اداره می‌شد' },
          { en: 'The first country in the world with a king', es: 'El primer país del mundo con un rey', fa: 'اولین کشور جهان که پادشاه داشت' }],
        answer: 0,
        why: { en: 'Haiti won its independence from France. It was the second free nation in the Americas.', es: 'Haití ganó su independencia de Francia. Fue la segunda nación libre de América.', fa: 'هائیتی استقلال خود را از فرانسه گرفت. دومین کشور آزاد قارهٔ امریکا بود.' } },
      { q: { en: 'Who sent an army in 1802 to bring back slavery in Haiti?', es: '¿Quién envió un ejército en 1802 para traer de vuelta la esclavitud a Haití?', fa: 'در سال ۱۸۰۲ کی اردو فرستاد تا برده‌داری را به هائیتی برگرداند؟' },
        choices: [
          { en: 'Napoleon, the ruler of France', es: 'Napoleón, el gobernante de Francia', fa: 'ناپلئون، حاکم فرانسه' },
          { en: 'Simón Bolívar of Venezuela', es: 'Simón Bolívar, de Venezuela', fa: 'سیمون بولیوار از ونزوئلا' },
          { en: 'The king of Spain in Madrid', es: 'El rey de España, en Madrid', fa: 'پادشاه هسپانیه در مادرید' },
          { en: 'George Washington of the U.S.', es: 'George Washington, de Estados Unidos', fa: 'جورج واشنگتن از ایالات متحده' }],
        answer: 0,
        why: { en: 'Napoleon wanted slavery back. Haitians fought his army and won.', es: 'Napoleón quería que volviera la esclavitud. Los haitianos lucharon contra su ejército y ganaron.', fa: 'ناپلئون می‌خواست برده‌داری برگردد. هائیتی‌ها با اردوی او جنگیدند و پیروز شدند.' } },
      { q: { en: 'Who were the creoles of Spanish America?', es: '¿Quiénes eran los criollos de la América española?', fa: 'کریول‌های امریکای هسپانوی کی بودند؟' },
        choices: [
          { en: 'People of Spanish families born in the Americas', es: 'Personas de familia española nacidas en América', fa: 'مردمی از خانواده‌های هسپانوی که در امریکا به دنیا آمدند' },
          { en: 'People born in Spain who moved to the Americas', es: 'Personas nacidas en España que se mudaron a América', fa: 'مردمی که در هسپانیه به دنیا آمدند و به امریکا رفتند' },
          { en: 'Indigenous people who lived in the Andes', es: 'Indígenas que vivían en los Andes', fa: 'مردم بومی که در اندیز زندگی می‌کردند' },
          { en: 'Sailors who carried goods to Haiti', es: 'Marineros que llevaban mercancías a Haití', fa: 'ملاحانی که جنس به هائیتی می‌بردند' }],
        answer: 0,
        why: { en: 'Creoles were born in the Americas. Spain gave the top jobs to men born in Spain.', es: 'Los criollos nacían en América. España daba los mejores puestos a los nacidos en España.', fa: 'کریول‌ها در امریکا به دنیا می‌آمدند. هسپانیه بهترین کارها را به هسپانیه‌زاده‌ها می‌داد.' } },
      { q: { en: 'Who led independence in northern South America?', es: '¿Quién dirigió la independencia del norte de América del Sur?', fa: 'استقلال شمال امریکای جنوبی را کی رهبری کرد؟' },
        choices: [
          { en: 'Simón Bolívar', es: 'Simón Bolívar', fa: 'سیمون بولیوار' },
          { en: 'Toussaint Louverture', es: 'Toussaint Louverture', fa: 'توسن لوورتور' },
          { en: 'Napoleon Bonaparte', es: 'Napoleón Bonaparte', fa: 'ناپلئون بناپارت' },
          { en: 'King Ferdinand VII', es: 'El rey Fernando VII', fa: 'پادشاه فردیناند هفتم' }],
        answer: 0,
        why: { en: 'Bolívar led armies that freed today\'s Venezuela, Colombia, Ecuador, Peru and Bolivia.', es: 'Bolívar dirigió ejércitos que liberaron las actuales Venezuela, Colombia, Ecuador, Perú y Bolivia.', fa: 'بولیوار اردوهایی را رهبری کرد که ونزوئلا، کلمبیا، اکوادور، پیرو و بولیویای امروز را آزاد کردند.' } },
      { q: { en: 'What did Haiti ask Bolívar to do in return for its help?', es: '¿Qué le pidió Haití a Bolívar a cambio de su ayuda?', fa: 'هائیتی در عوض کمکش از بولیوار چه خواست؟' },
        choices: [
          { en: 'Free the enslaved people', es: 'Liberar a los esclavizados', fa: 'برده‌ها را آزاد کند' },
          { en: 'Make Haiti part of Gran Colombia', es: 'Hacer a Haití parte de la Gran Colombia', fa: 'هائیتی را بخشی از کلمبیای بزرگ بسازد' },
          { en: 'Send Haiti all of his gold', es: 'Mandarle a Haití todo su oro', fa: 'همهٔ طلایش را به هائیتی بفرستد' },
          { en: 'Give Haiti a new king', es: 'Darle a Haití un rey nuevo', fa: 'به هائیتی یک پادشاه نو بدهد' }],
        answer: 0,
        why: { en: 'Pétion asked Bolívar to end slavery in the lands he freed. Bolívar promised to free many.', es: 'Pétion le pidió a Bolívar acabar con la esclavitud en las tierras que liberara. Bolívar prometió liberar a muchos.', fa: 'پتیون خواست بولیوار در سرزمین‌هایی که آزاد می‌کند برده‌داری را تمام کند. بولیوار وعدهٔ آزادی بسیاری را داد.' } },
      { q: { en: 'Who called on the people of Mexico to rise up in 1810?', es: '¿Quién llamó al pueblo de México a levantarse en 1810?', fa: 'در سال ۱۸۱۰ کی مردم مکسیکو را به قیام خواند؟' },
        choices: [
          { en: 'Miguel Hidalgo, a priest', es: 'Miguel Hidalgo, un sacerdote', fa: 'میگل هیدالگو، یک کشیش' },
          { en: 'Simón Bolívar, a general', es: 'Simón Bolívar, un general', fa: 'سیمون بولیوار، یک جنرال' },
          { en: 'Napoleon, ruler of France', es: 'Napoleón, gobernante de Francia', fa: 'ناپلئون، حاکم فرانسه' },
          { en: 'Dessalines, a Haitian leader', es: 'Dessalines, un líder haitiano', fa: 'دسالین، یک رهبر هائیتی' }],
        answer: 0,
        why: { en: 'On September 16, 1810, Father Hidalgo called for freedom. Mexico was independent by 1821.', es: 'El 16 de septiembre de 1810, el padre Hidalgo llamó a la libertad. México fue independiente en 1821.', fa: 'در ۱۶ سپتامبر ۱۸۱۰، پدر هیدالگو مردم را به آزادی خواند. مکسیکو تا ۱۸۲۱ مستقل شد.' } },
      { q: { en: 'In 1825, France forced Haiti to pay a huge sum. Who got the money?', es: 'En 1825, Francia obligó a Haití a pagar una suma enorme. ¿Quién recibió el dinero?', fa: 'در سال ۱۸۲۵، فرانسه هائیتی را مجبور کرد پول بسیار زیاد بدهد. پول به کی رسید؟' },
        choices: [
          { en: 'French planters who had enslaved people', es: 'Dueños franceses que habían esclavizado a personas', fa: 'مالکان فرانسوی که مردم را برده کرده بودند' },
          { en: 'Haitian farmers who lost their crops', es: 'Campesinos haitianos que perdieron sus cosechas', fa: 'دهقانان هائیتی که حاصل خود را از دست دادند' },
          { en: 'Bolívar\'s army in South America', es: 'El ejército de Bolívar en América del Sur', fa: 'اردوی بولیوار در امریکای جنوبی' },
          { en: 'New schools for Haiti\'s children', es: 'Escuelas nuevas para los niños de Haití', fa: 'مکتب‌های نو برای اطفال هائیتی' }],
        answer: 0,
        why: { en: 'It was deeply unfair. Haiti paid this debt for more than 100 years, and it stayed poor.', es: 'Fue muy injusto. Haití pagó esta deuda por más de 100 años, y siguió siendo pobre.', fa: 'این کار بسیار ناعادلانه بود. هائیتی بیش از ۱۰۰ سال این قرض را پرداخت و فقیر ماند.' } }
    ]
  },

  learned: [
    { en: 'Formerly [[enslaved|enslaved]] people led the Haitian Revolution. In 1804, Haiti became free and ended slavery.', es: 'Personas antes [[enslaved|esclavizadas]] dirigieron la Revolución haitiana. En 1804, Haití se liberó y acabó con la esclavitud.', fa: 'مردمی که [[enslaved|برده]] بودند انقلاب هائیتی را رهبری کردند. در سال ۱۸۰۴ هائیتی آزاد شد و برده‌داری را تمام کرد.' },
    { en: '[[creole|Creoles]] like Simón Bolívar led wars that freed much of South America from Spain.', es: 'Los [[creole|criollos]] como Simón Bolívar dirigieron guerras que liberaron gran parte de América del Sur de España.', fa: '[[creole|کریول‌هایی]] مثل سیمون بولیوار جنگ‌هایی را رهبری کردند که بخش بزرگ امریکای جنوبی را از هسپانیه آزاد کرد.' },
    { en: 'Enlightenment ideas and other [[revolution|revolutions]] inspired them. Haiti helped Bolívar and asked him to free enslaved people.', es: 'Las ideas de la Ilustración y otras [[revolution|revoluciones]] los inspiraron. Haití ayudó a Bolívar y le pidió liberar a los esclavizados.', fa: 'اندیشه‌های روشنگری و [[revolution|انقلاب‌های]] دیگر به آن‌ها الهام دادند. هائیتی به بولیوار کمک کرد و خواست برده‌ها را آزاد کند.' }
  ],
  reflect: {
    q: { en: 'Why should people remember the Haitian Revolution today?', es: '¿Por qué debemos recordar hoy la Revolución haitiana?', fa: 'چرا مردم امروز باید انقلاب هائیتی را به یاد داشته باشند؟' },
    starter: { en: 'People should remember it because', es: 'Debemos recordarla porque', fa: 'مردم باید آن را به یاد داشته باشند، چون' }
  }
};
