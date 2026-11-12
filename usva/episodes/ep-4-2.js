/* TRAILWALKER · Episode 4.2 · The Era of Good Feelings and Growing Sectionalism (VUS)
   Lockport, New York, in 1825, the year the Erie Canal opened. North half (rows 1-9): the canal town, with a tavern,
   a Tuscarora beadworker's trading post, a warehouse, a flour mill and market stalls on Main Street.
   Row 10: the towpath, where mules pull the boats. Rows 11-12: the Erie Canal, with two lock gates (x 15 and x 18)
   and two bridges (x 7 and x 24). Row 13: the south bank path. South half (rows 14-20): farms and a farmhouse.
   The three carry areas sit where their names point: North at the top, West on the west edge, South at the bottom. */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'VUS',
  title: { en: 'Good Feelings, Growing Apart', es: 'Buenos sentimientos, regiones que se separan', fa: 'احساس خوب، منطقه‌های جدا' },
  place: { en: 'Erie Canal, 1825', es: 'Canal de Erie, 1825', fa: 'کانال ایری، ۱۸۲۵' },
  intro: [
    { en: 'The Grump tore the Erie [[canal|Canal]] page. People forget how the country grew.',
      es: 'El Gruñón rompió la página del [[canal|Canal]] de Erie. La gente olvida cómo creció el país.',
      fa: 'غرغرو صفحهٔ [[canal|کانال]] ایری را پاره کرد. مردم فراموش می‌کنند کشور چطور بزرگ شد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Lockport, New York on the map, 1825 on the timeline */
  scenes: {
    at: [-78.69, 43.17],
    year: 1825,
    start: [
      { en: 'In 1825, the Erie Canal opened across New York State.',
        es: 'En 1825 se abrió el Canal de Erie, que cruza el estado de Nueva York.',
        fa: 'در سال ۱۸۲۵، کانال ایری در ایالت نیویارک باز شد.' },
      { en: 'It linked the Great Lakes to the Hudson River and New York City.',
        es: 'Unió los Grandes Lagos con el río Hudson y la ciudad de Nueva York.',
        fa: 'این کانال جهیل‌های بزرگ را به دریای هادسن و شهر نیویارک وصل کرد.' },
      { en: 'Mules on a towpath pulled the boats. Shipping got much cheaper.',
        es: 'Unas mulas tiraban de los barcos desde la orilla. Enviar carga se volvió mucho más barato.',
        fa: 'قاطرها از کنار کانال کشتی‌ها را می‌کشیدند. بردن جنس بسیار ارزان‌تر شد.' }
    ],
    page: { en: 'At Lockport, five pairs of locks lifted boats up a steep rock ridge.',
      es: 'En Lockport, cinco pares de esclusas subían los barcos por una colina de roca empinada.',
      fa: 'در لاک‌پورت، پنج جفت دروازهٔ آبی کشتی‌ها را از یک تپهٔ سنگی بلند بالا می‌برد.' },
    guess: {
      q: { en: 'Before the canal, how did most goods cross New York State?', es: 'Antes del canal, ¿cómo cruzaba la mayoría de la carga el estado de Nueva York?', fa: 'پیش از کانال، بیشتر جنس‌ها چطور از ایالت نیویارک می‌گذشت؟' },
      choices: [
        { t: { en: '🐴 Wagons on rough roads', es: '🐴 En carretas por caminos malos', fa: '🐴 با گادی در سرک‌های خراب' }, ok: true },
        { t: { en: '🚂 Fast steam trains', es: '🚂 En trenes de vapor rápidos', fa: '🚂 با ریل‌های بخاری تیز' } }
      ],
      why: { en: 'Wagons were slow and cost a lot. Trains did not come to New York until the 1830s.', es: 'Las carretas eran lentas y caras. Los trenes llegaron a Nueva York hasta la década de 1830.', fa: 'گادی‌ها آهسته و گران بودند. ریل تا دههٔ ۱۸۳۰ به نیویارک نیامد.' }
    },
    next: {
      q: { en: 'Next: New Echota, the Cherokee capital, 1830s. What did the Indian Removal Act do?', es: 'Ahora: Nueva Echota, la capital cherokee, años 1830. ¿Qué hizo la Ley de Expulsión de los Indios?', fa: 'بعدی: نیو اچوتا، پایتخت چروکی، دههٔ ۱۸۳۰. قانون کوچ اجباری بومیان چه کرد؟' },
      choices: [
        { t: { en: 'Forced from their homelands', es: 'Expulsadas de su tierra', fa: 'به زور از وطن رانده شدند' }, ok: true },
        { t: { en: 'Given more eastern land', es: 'Recibieron más tierra en el Este', fa: 'در شرق زمین بیشتر گرفتند' } }
      ],
      why: { en: 'The law led to forced removal of nations like the Cherokee. We will learn their story carefully.', es: 'La ley llevó a la expulsión forzada de muchas naciones, como los cherokees. Aprenderemos su historia con respeto.', fa: 'این قانون به کوچ اجباری بسیاری از ملت‌ها، مثل چروکی، انجامید. داستان‌شان را با احترام یاد می‌گیریم.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [4, 3], name: { en: 'Mrs. Brennan', es: 'Señora Brennan', fa: 'خانم برینن' },
      look: { skin: 1, hair: '#a84a2a', shirt: '#4a6a3a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome to my tavern! Canal travelers eat and sleep here.', es: '¡Bienvenido a mi taberna! Los viajeros del canal comen y duermen aquí.', fa: 'به سرای من خوش آمدی! مسافران کانال اینجا غذا می‌خورند و می‌خوابند.' },
        { en: 'People call President Monroe\'s years the [[era of good feelings|Era of Good Feelings]].', es: 'La gente llama a los años del presidente Monroe la [[era of good feelings|Era de los Buenos Sentimientos]].', fa: 'مردم سال‌های رئیس جمهور مونرو را [[era of good feelings|دوران احساس خوب]] می‌نامند.' },
        { en: 'There was mostly one party then. Now people argue about politics again!', es: 'Entonces había casi un solo partido. ¡Ahora la gente vuelve a discutir de política!', fa: 'آن وقت تقریباً یک حزب بود. حالا مردم باز سر سیاست بحث می‌کنند!' }
      ] },
    { at: [9, 3], name: { en: 'Mrs. Rebecca', es: 'Señora Rebecca', fa: 'خانم ربکا' },
      look: { skin: 3, hair: '#1a1208', shirt: '#8a2a2a', pants: '#2a2a4a', style: 'long' },
      lines: [
        { en: 'I am Tuscarora. My nation lives a few miles northwest of here.', es: 'Soy tuscarora. Mi nación vive a pocas millas al noroeste de aquí.', fa: 'من توسکارورا هستم. ملت من چند میل در شمال غرب اینجا زندگی می‌کند.' },
        { en: 'I sell beadwork to travelers. The canal brings many new settlers.', es: 'Vendo trabajos de cuentas a los viajeros. El canal trae muchos colonos nuevos.', fa: 'من به مسافران کار مُهره‌دوزی می‌فروشم. کانال مهاجران نو زیادی می‌آورد.' },
        { en: 'This was Haudenosaunee land long before any canal.', es: 'Esta era tierra haudenosaunee mucho antes de cualquier canal.', fa: 'این زمین مدت‌ها پیش از هر کانالی، زمین هودینوشونی بود.' }
      ] },
    { at: [21, 3], name: { en: 'Mr. Hale', es: 'Señor Hale', fa: 'آقای هیل' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#e8e0d0', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Wheat and flour from western farms wait here for canal boats.', es: 'El trigo y la harina de las granjas del oeste esperan aquí los barcos del canal.', fa: 'گندم و آرد فارم‌های غربی اینجا منتظر کشتی‌های کانال است.' },
        { en: 'Henry Clay has a plan. He calls it the [[american system|American System]].', es: 'Henry Clay tiene un plan. Lo llama el [[american system|Sistema Americano]].', fa: 'هنری کلی یک طرح دارد. نامش را [[american system|نظام امریکایی]] گذاشته.' },
        { en: 'Roads, canals, a national bank and [[tariff|tariffs]], to tie the country together.', es: 'Caminos, canales, un banco nacional y [[tariff|aranceles]], para unir al país.', fa: 'سرک، کانال، یک بانک ملی و [[tariff|تعرفه]]، تا کشور را به هم وصل کند.' }
      ] },
    { at: [28, 15], name: { en: 'Abigail', es: 'Abigail', fa: 'ابیگیل' },
      look: { skin: 1, hair: '#c8a060', shirt: '#6a5a9a', pants: '#3a3a2a', style: 'bun' },
      lines: [
        { en: 'We moved here from Vermont to farm new land.', es: 'Nos mudamos aquí desde Vermont para cultivar tierra nueva.', fa: 'ما از ورمانت به اینجا آمدیم تا در زمین نو کشت کنیم.' },
        { en: 'Before the canal, our wheat went by wagon. It cost too much.', es: 'Antes del canal, nuestro trigo iba en carreta. Costaba demasiado.', fa: 'پیش از کانال، گندم ما با گادی می‌رفت. خیلی گران تمام می‌شد.' },
        { en: 'Now a boat takes it to New York City, cheap and fast.', es: 'Ahora un barco lo lleva a la ciudad de Nueva York, barato y rápido.', fa: 'حالا کشتی آن را ارزان و زود به شهر نیویارک می‌برد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Town north of the canal, farms south of it. */
  map: [
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',
    'P.....,.....,.........,......,.P',
    'P..RRR..QQQ........RRRR..XXX...P',
    'P..hdh..hdh........hhdh..XXX...P',
    'P.x....................x.......P',
    'PllllllllllllllllllllllllllllllP',
    'P......l...........l..mmm...T..P',
    'P..T...l.......,...l.........T.P',
    'P......l...........l...........P',
    'P.....,.......x................P',
    'P::::::::::::::::::::::::::::::P',
    '~~~~~~~B~~~~~~~W~~W~~~~~B~~~~~~~',
    '~~~~~~~B~~~~~~~W~~W~~~~~B~~~~~~~',
    'P::::::::::::::::::::::::::::::P',
    'P.......ww..T...........ww.RRR.P',
    'P.......ww..TT..........ww.hdh.P',
    'P...........T...............:..P',
    'P....2222..oooo....ww.......,..P',
    'P....2222..oooo....ww..........P',
    'P......,.......................P',
    'P,.............................P',
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'
  ],
  start: [3, 6],

  /* finds: a clue note leads to a hidden spot (+3 coins and a camp decoration) */
  finds: [
    { clueAt: [20, 9], at: [16, 7], decor: 'fossil',
      clue: { en: 'From this note, walk 4 steps west, then 2 steps north. Look near the locks.', es: 'Desde esta nota, camina 4 pasos al oeste y luego 2 pasos al norte. Busca cerca de las esclusas.', fa: 'از این یادداشت، ۴ قدم به غرب برو، بعد ۲ قدم به شمال. نزدیک دروازه‌های آبی را ببین.' },
      text: { en: 'Workers blasted through solid rock for the locks. The rock holds fossils of old sea animals.', es: 'Los obreros rompieron roca sólida con pólvora para las esclusas. La roca tiene fósiles de animales marinos antiguos.', fa: 'کارگران برای دروازه‌های آبی سنگ سخت را با باروت شکستند. در این سنگ فسیل حیوانات کهن بحری است.' } },
    { clueAt: [10, 15], at: [10, 19], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south. Look in the field.', es: 'Desde esta nota, camina 4 pasos al sur. Busca en el campo.', fa: 'از این یادداشت، ۴ قدم به جنوب برو. در کشتزار ببین.' },
      text: { en: 'Boats paid a toll to use the canal. Here is a copper cent from 1825.', es: 'Los barcos pagaban un peaje para usar el canal. Aquí hay un centavo de cobre de 1825.', fa: 'کشتی‌ها برای استفاده از کانال محصول راه می‌پرداختند. اینجا یک سکهٔ مسی از ۱۸۲۵ است.' } }
  ],

  words: {
    canal: { en: 'a waterway that people dig so boats can travel', es: 'una vía de agua que la gente cava para que pasen barcos', fa: 'راه آبی که مردم می‌کنند تا کشتی‌ها از آن بگذرند' },
    lock: { en: 'a stone room with gates; water fills or drains it to lift or lower boats', es: 'un cuarto de piedra con compuertas; el agua lo llena o vacía para subir o bajar barcos', fa: 'یک حوض سنگی با دروازه؛ آب پُر یا خالی می‌شود تا کشتی را بالا یا پایین ببرد' },
    towpath: { en: 'a path beside a canal where mules walk and pull the boats', es: 'un camino junto al canal donde caminan mulas que tiran de los barcos', fa: 'راهی کنار کانال که قاطرها در آن راه می‌روند و کشتی‌ها را می‌کشند' },
    'era of good feelings': { en: 'the years 1817 to 1825, under President Monroe, with one main party and national pride', es: 'los años de 1817 a 1825, con el presidente Monroe, con un solo partido fuerte y orgullo nacional', fa: 'سال‌های ۱۸۱۷ تا ۱۸۲۵، زمان رئیس جمهور مونرو، با یک حزب اصلی و افتخار ملی' },
    'monroe doctrine': { en: 'Monroe\'s 1823 message: Europe must not start new colonies in the Americas', es: 'el mensaje de Monroe de 1823: Europa no debe fundar nuevas colonias en América', fa: 'پیام مونرو در ۱۸۲۳: اروپا نباید در قارهٔ امریکا مستعمرهٔ نو بسازد' },
    'american system': { en: 'Henry Clay\'s plan: roads, canals, a national bank and tariffs', es: 'el plan de Henry Clay: caminos, canales, un banco nacional y aranceles', fa: 'طرح هنری کلی: سرک، کانال، بانک ملی و تعرفه' },
    tariff: { en: 'a tax on goods that come from other countries', es: 'un impuesto a los productos que vienen de otros países', fa: 'مالیه بر جنس‌هایی که از کشورهای دیگر می‌آیند' },
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    'textile mill': { en: 'a factory where machines make thread and cloth', es: 'una fábrica donde las máquinas hacen hilo y tela', fa: 'فابریکه‌ای که ماشین‌ها در آن تار و تکه می‌سازند' },
    'cotton gin': { en: 'a machine (Eli Whitney, 1793) that pulls seeds out of cotton fast', es: 'una máquina (Eli Whitney, 1793) que saca rápido las semillas del algodón', fa: 'ماشینی (ایلای ویتنی، ۱۷۹۳) که تخم پخته را زود جدا می‌کند' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    compromise: { en: 'a deal where each side gives up something', es: 'un acuerdo en el que cada lado cede algo', fa: 'توافقی که در آن هر طرف چیزی را رها می‌کند' },
    sectionalism: { en: 'caring more about your own region than about the whole country', es: 'preocuparse más por tu propia región que por todo el país', fa: 'بیشتر به فکر منطقهٔ خود بودن تا به فکر تمام کشور' }
  },

  npcs: [
    {
      x: 11, y: 10,
      name: { en: 'Patrick', es: 'Patrick', fa: 'پاتریک' },
      role: { en: 'Mule driver, age 12', es: 'Arriero de mulas, 12 años', fa: 'قاطررانِ ۱۲ ساله' },
      look: { skin: 1, hair: '#b85a2a', shirt: '#6a7a4a', pants: '#4a3a2a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'Hello! I drive the mules. They pull boats along this [[towpath|towpath]].', es: '¡Hola! Yo arreo las mulas. Tiran de los barcos por este [[towpath|camino de sirga]].', fa: 'سلام! من قاطرها را می‌رانم. آن‌ها کشتی‌ها را در این [[towpath|راه کنار کانال]] می‌کشند.' },
        { en: 'The Erie Canal opened this year. It runs 363 miles, Albany to Buffalo.', es: 'El Canal de Erie abrió este año. Mide 363 millas, de Albany a Buffalo.', fa: 'کانال ایری امسال باز شد. ۳۶۳ میل درازی دارد، از البانی تا بافلو.' },
        { en: 'My father came from Ireland. He helped blast the rock for these locks.', es: 'Mi padre vino de Irlanda. Ayudó a romper la roca para estas esclusas.', fa: 'پدرم از آیرلند آمد. او در شکستن سنگ برای این دروازه‌های آبی کمک کرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Erie Canal change the cost of shipping goods?', es: '¿Cómo cambió el Canal de Erie el costo de enviar carga?', fa: 'کانال ایری قیمت بردن جنس را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'The cost fell a lot', es: 'El costo bajó mucho', fa: 'قیمت بسیار پایین آمد' },
            why: { en: 'Yes! A few mules could pull a heavy boat. Shipping got much cheaper.', es: '¡Sí! Unas pocas mulas podían tirar de un barco pesado. Enviar carga se volvió mucho más barato.', fa: 'بله! چند قاطر می‌توانست یک کشتی سنگین را بکشد. بردن جنس بسیار ارزان شد.' } },
          { t: { en: 'The cost went way up', es: 'El costo subió muchísimo', fa: 'قیمت خیلی بالا رفت' },
            why: { en: 'No. Wagons cost much more. The canal made shipping cheaper.', es: 'No. Las carretas costaban mucho más. El canal hizo más barato el envío.', fa: 'نه. گادی خیلی گران‌تر بود. کانال بردن جنس را ارزان‌تر ساخت.' } },
          { t: { en: 'Nothing changed at all', es: 'No cambió nada', fa: 'هیچ چیز تغییر نکرد' },
            why: { en: 'A lot changed. Goods moved cheaper and faster, and towns grew.', es: 'Cambió mucho. La carga viajó más barata y rápida, y los pueblos crecieron.', fa: 'خیلی چیزها تغییر کرد. جنس ارزان‌تر و زودتر رفت و شهرک‌ها بزرگ شدند.' } }
        ]
      }
    },
    {
      x: 20, y: 14,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Canal boat cook', es: 'Cocinero de barco del canal', fa: 'آشپز کشتی کانال' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#f0ece0', pants: '#2a3a5a', hat: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I was born free in Albany. I cook on a canal boat.', es: 'Nací libre en Albany. Cocino en un barco del canal.', fa: 'من در البانی آزاد به دنیا آمدم. در یک کشتی کانال آشپزی می‌کنم.' },
        { en: 'New York law will free every [[enslaved|enslaved]] person here in 1827.', es: 'La ley de Nueva York liberará a toda persona [[enslaved|esclavizada]] aquí en 1827.', fa: 'قانون نیویارک در ۱۸۲۷ هر انسان [[enslaved|برده]] را در اینجا آزاد می‌کند.' },
        { en: 'In 1820, Congress made the Missouri [[compromise|Compromise]] about slavery in new states.', es: 'En 1820, el Congreso hizo el [[compromise|Compromiso]] de Misuri sobre la esclavitud en estados nuevos.', fa: 'در ۱۸۲۰، کانگرس [[compromise|سازش]] میزوری را دربارهٔ برده‌داری در ایالت‌های نو ساخت.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'The Missouri Compromise drew a line at 36°30′. Where was slavery banned?', es: 'El Compromiso de Misuri trazó una línea en 36°30′. ¿Dónde se prohibió la esclavitud?', fa: 'سازش میزوری یک خط در ۳۶ درجه و ۳۰ دقیقه کشید. برده‌داری کجا منع شد؟' },
        choices: [
          { ok: true, t: { en: 'North of it, except Missouri', es: 'Al norte, menos Misuri', fa: 'شمال آن، به جز میزوری' },
            why: { en: 'Yes. In the rest of the Louisiana Territory, slavery was banned north of 36°30′.', es: 'Sí. En el resto del Territorio de Luisiana, la esclavitud se prohibió al norte de 36°30′.', fa: 'بله. در باقی سرزمین لوئیزیانا، برده‌داری در شمال ۳۶ درجه و ۳۰ دقیقه منع شد.' } },
          { t: { en: 'South of the line, near Arkansas', es: 'Al sur de la línea, cerca de Arkansas', fa: 'جنوب خط، نزدیک آرکانزاس' },
            why: { en: 'No. Slavery was allowed south of the line, and in Missouri too.', es: 'No. La esclavitud se permitía al sur de la línea, y también en Misuri.', fa: 'نه. برده‌داری در جنوب خط اجازه داشت، در میزوری هم.' } },
          { t: { en: 'In every state and territory', es: 'En todos los estados y territorios', fa: 'در همهٔ ایالت‌ها و سرزمین‌ها' },
            why: { en: 'No. Slavery stayed legal in the South. The line only covered the Louisiana Territory.', es: 'No. La esclavitud siguió siendo legal en el Sur. La línea solo cubría el Territorio de Luisiana.', fa: 'نه. برده‌داری در جنوب قانونی ماند. این خط فقط سرزمین لوئیزیانا را در بر می‌گرفت.' } }
        ]
      }
    },
    {
      x: 8, y: 16,
      name: { en: 'Sarah', es: 'Sarah', fa: 'سارا' },
      role: { en: 'Traveler going west', es: 'Viajera rumbo al oeste', fa: 'مسافر رو به غرب' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f6f8f', pants: '#4a3a3a', style: 'bun' },
      lines: [
        { en: 'I worked in a [[textile mill|textile mill]] in Massachusetts. Machines made cotton into cloth.', es: 'Trabajé en una [[textile mill|fábrica textil]] en Massachusetts. Las máquinas convertían el algodón en tela.', fa: 'من در یک [[textile mill|فابریکهٔ تکه‌بافی]] در ماساچوست کار کردم. ماشین‌ها از پخته تکه می‌ساختند.' },
        { en: 'That cotton came from the South. A [[cotton gin|cotton gin]] cleaned it fast.', es: 'Ese algodón venía del Sur. Una [[cotton gin|desmotadora]] lo limpiaba rápido.', fa: 'آن پخته از جنوب می‌آمد. یک [[cotton gin|ماشین پخته‌پاک‌کن]] آن را زود پاک می‌کرد.' },
        { en: 'Now my family is going west by canal, to farm in Ohio.', es: 'Ahora mi familia va al oeste por el canal, a cultivar en Ohio.', fa: 'حالا خانواده‌ام از راه کانال به غرب می‌رود تا در اوهایو کشت کند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the cotton gin help slavery spread in the South?', es: '¿Por qué la desmotadora ayudó a que la esclavitud se extendiera en el Sur?', fa: 'چرا ماشین پخته‌پاک‌کن باعث شد برده‌داری در جنوب پخش شود؟' },
        choices: [
          { ok: true, t: { en: 'Growing cotton paid much more', es: 'Sembrar algodón dejaba mucho más dinero', fa: 'کشت پخته پول بسیار بیشتر می‌داد' },
            why: { en: 'Yes. Planters grew more cotton and forced more enslaved people to work.', es: 'Sí. Los dueños sembraron más algodón y obligaron a trabajar a más personas esclavizadas.', fa: 'بله. مالکان پخته بیشتر کاشتند و بردگان بیشتری را به زور به کار واداشتند.' } },
          { t: { en: 'Machines did all the farm work', es: 'Las máquinas hacían todo el trabajo', fa: 'ماشین‌ها همهٔ کار فارم را می‌کردند' },
            why: { en: 'No. The gin only cleaned cotton. People still had to plant and pick it.', es: 'No. La desmotadora solo limpiaba el algodón. La gente aún tenía que sembrarlo y recogerlo.', fa: 'نه. این ماشین فقط پخته را پاک می‌کرد. مردم باز هم باید آن را می‌کاشتند و می‌چیدند.' } },
          { t: { en: 'Cotton grew only in the North', es: 'El algodón crecía solo en el Norte', fa: 'پخته فقط در شمال می‌رویید' },
            why: { en: 'No. Cotton needs a long, warm season. It grew in the South.', es: 'No. El algodón necesita una temporada larga y cálida. Crecía en el Sur.', fa: 'نه. پخته به یک فصل دراز و گرم نیاز دارد. در جنوب می‌رویید.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'LOCKPORT, NEW YORK · 1825 · A new town on the Erie [[canal|Canal]].', es: 'LOCKPORT, NUEVA YORK · 1825 · Un pueblo nuevo junto al [[canal|Canal]] de Erie.', fa: 'لاک‌پورت، نیویارک · ۱۸۲۵ · یک شهرک نو کنار [[canal|کانال]] ایری.' } },
    { x: 14, y: 9, text: { en: 'THE LOCKS · Each [[lock|lock]] fills or drains to lift or lower a boat.', es: 'LAS ESCLUSAS · Cada [[lock|esclusa]] se llena o se vacía para subir o bajar un barco.', fa: 'دروازه‌های آبی · هر [[lock|دروازهٔ آبی]] پُر یا خالی می‌شود تا کشتی را بالا یا پایین ببرد.' } },
    { x: 23, y: 4, text: { en: 'WAREHOUSE · Flour from western farms goes east by canal to New York City.', es: 'ALMACÉN · La harina de las granjas del oeste va por el canal hacia Nueva York.', fa: 'گدام · آرد فارم‌های غربی از راه کانال به شهر نیویارک می‌رود.' } }
  ],

  /* the quest: Miss Hannah the teacher (gold !) in town (NW) -> Mr. Weber the lock tender by the locks (NE)
     -> cross the east bridge to the south bank, then 4 more steps south (SE) -> back to Miss Hannah */
  quest: {
    stat: 'reg',
    title: { en: 'The Lost Newspaper', es: 'El periódico perdido', fa: 'روزنامهٔ گمشده' },
    giver: {
      x: 6, y: 7,
      name: { en: 'Miss Hannah', es: 'Señorita Hannah', fa: 'خانم هانا' },
      role: { en: 'Schoolteacher', es: 'Maestra', fa: 'معلم مکتب' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#2a4a6a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I teach school here. I ordered an old newspaper for my class.', es: 'Soy maestra aquí. Pedí un periódico viejo para mi clase.', fa: 'من اینجا معلم مکتب هستم. یک روزنامهٔ کهنه برای صنفم خواستم.' },
        { en: 'It has President Monroe\'s message from 1823. It fell off a canal boat!', es: 'Tiene el mensaje del presidente Monroe de 1823. ¡Se cayó de un barco del canal!', fa: 'پیام رئیس جمهور مونرو از ۱۸۲۳ در آن است. از یک کشتی کانال افتاد!' },
        { en: 'Ask Mr. Weber, the lock tender. He sees every boat.', es: 'Pregúntale al señor Weber, el guarda de las esclusas. Él ve cada barco.', fa: 'از آقای ویبر، نگهبان دروازه‌های آبی، بپرس. او هر کشتی را می‌بیند.' }
      ],
      wait: { en: 'Mr. Weber stands by the locks, east of here, near the towpath.', es: 'El señor Weber está junto a las esclusas, al este de aquí, cerca del camino del canal.', fa: 'آقای ویبر کنار دروازه‌های آبی، در شرق اینجا، نزدیک راه کنار کانال است.' },
      thanks: { en: 'The [[monroe doctrine|Monroe Doctrine]]! Europe must not start new [[colony|colonies]] here. Thank you!', es: '¡La [[monroe doctrine|Doctrina Monroe]]! Europa no debe fundar nuevas [[colony|colonias]] aquí. ¡Gracias!', fa: '[[monroe doctrine|اصل مونرو]]! اروپا نباید اینجا [[colony|مستعمرهٔ]] نو بسازد. تشکر!' }
    },
    contact: {
      x: 17, y: 9,
      name: { en: 'Mr. Weber', es: 'Señor Weber', fa: 'آقای ویبر' },
      role: { en: 'Lock tender', es: 'Guarda de las esclusas', fa: 'نگهبان دروازهٔ آبی' },
      look: { skin: 2, hair: '#8a8a8a', shirt: '#7a3a2a', pants: '#2a2a2a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Yes! A bundle of papers fell from a boat. A farm dog grabbed it.', es: '¡Sí! Un paquete de papeles cayó de un barco. Un perro de granja lo agarró.', fa: 'بله! یک بسته کاغذ از کشتی افتاد. یک سگ فارم آن را گرفت.' },
        { en: 'Cross the east bridge to the south bank. Then walk 4 more steps south.', es: 'Cruza el puente del este hasta la orilla sur. Luego camina 4 pasos más al sur.', fa: 'از پل شرقی به کنار جنوبی برو. بعد ۴ قدم دیگر به جنوب برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [24, 17],
      hint: { en: 'Cross the east bridge, then 4 more steps south', es: 'Cruza el puente del este y camina 4 pasos más al sur', fa: 'از پل شرقی بگذر، بعد ۴ قدم دیگر به جنوب' },
      found: { en: 'Here it is, a little chewed! It is President Monroe\'s 1823 message.', es: '¡Aquí está, un poco mordido! Es el mensaje del presidente Monroe de 1823.', fa: 'اینجاست، کمی جویده شده! این پیام رئیس جمهور مونرو از ۱۸۲۳ است.' },
      item: { icon: '📰', name: { en: 'Miss Hannah\'s old newspaper', es: 'El periódico viejo de la señorita Hannah', fa: 'روزنامهٔ کهنهٔ خانم هانا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[24, 7], [6, 19]],

  challenge: {
    at: [16, 16],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // each area sits where its name points: North at the top of the map, West on the west edge, South at the bottom
    zones: [{ bin: 'north', x: 13, y: 2, w: 4, h: 2 }, { bin: 'west', x: 1, y: 15, w: 3, h: 4 }, { bin: 'south', x: 13, y: 19, w: 5, h: 2 }],
    stat: 'reg',
    title: { en: 'North, South or West?', es: '¿Norte, Sur u Oeste?', fa: 'شمال، جنوب یا غرب؟' },
    intro: { en: 'The Grump mixed up the [[sectionalism|sections]]. Carry each card to North, South or West.',
      es: 'El Gruñón revolvió las [[sectionalism|regiones]]. Lleva cada tarjeta al Norte, al Sur o al Oeste.',
      fa: 'غرغرو [[sectionalism|منطقه‌ها]] را به هم زد. هر کارت را به شمال، جنوب یا غرب ببر.' },
    bins: [
      { id: 'north', icon: '🏭', label: { en: 'The North', es: 'El Norte', fa: 'شمال' },
        sub: { en: 'factories, trade, cities, free labor', es: 'fábricas, comercio, ciudades, trabajo libre', fa: 'فابریکه، تجارت، شهر، کار آزاد' } },
      { id: 'south', icon: '🌿', label: { en: 'The South', es: 'El Sur', fa: 'جنوب' },
        sub: { en: 'cotton plantations, enslaved labor, exports', es: 'plantaciones de algodón, trabajo esclavizado, exportaciones', fa: 'کشتزارهای بزرگ پخته، کار بردگان، صادرات' } },
      { id: 'west', icon: '🪓', label: { en: 'The West', es: 'El Oeste', fa: 'غرب' },
        sub: { en: 'small farms, cheap land, new roads', es: 'granjas pequeñas, tierra barata, caminos nuevos', fa: 'فارم‌های کوچک، زمین ارزان، سرک‌های نو' } }
    ],
    items: [
      { bin: 'north', t: { en: 'Textile mills make cloth', es: 'Fábricas textiles hacen tela', fa: 'فابریکه‌های تکه‌بافی تکه می‌سازند' },
        why: { en: 'Mills grew in New England towns like Lowell. The North built factories.', es: 'Las fábricas crecieron en pueblos de Nueva Inglaterra como Lowell. El Norte construyó fábricas.', fa: 'فابریکه‌ها در شهرک‌های نیوانگلند مثل لاول زیاد شدند. شمال فابریکه ساخت.' } },
      { bin: 'north', t: { en: 'Busy ports and growing cities', es: 'Puertos activos y ciudades que crecen', fa: 'بندرهای پرکار و شهرهای رو به رشد' },
        why: { en: 'New York City grew fast. The North lived by trade, ships and cities.', es: 'La ciudad de Nueva York creció rápido. El Norte vivía del comercio, los barcos y las ciudades.', fa: 'شهر نیویارک زود بزرگ شد. شمال با تجارت، کشتی و شهر زندگی می‌کرد.' } },
      { bin: 'north', t: { en: 'Most workers are free and paid', es: 'La mayoría trabaja libre y con pago', fa: 'بیشتر کارگران آزادند و مزد می‌گیرند' },
        why: { en: 'Northern states ended slavery step by step. Workers earned wages.', es: 'Los estados del Norte terminaron la esclavitud poco a poco. Los obreros ganaban un sueldo.', fa: 'ایالت‌های شمالی برده‌داری را قدم به قدم ختم کردند. کارگران مزد می‌گرفتند.' } },
      { bin: 'south', t: { en: 'Big cotton plantations', es: 'Grandes plantaciones de algodón', fa: 'کشتزارهای بزرگ پخته' },
        why: { en: 'After the cotton gin, cotton plantations spread across the South.', es: 'Después de la desmotadora, las plantaciones de algodón se extendieron por el Sur.', fa: 'بعد از ماشین پخته‌پاک‌کن، کشتزارهای بزرگ پخته در جنوب پخش شدند.' } },
      { bin: 'south', t: { en: 'Enslaved people forced to work the fields', es: 'Personas esclavizadas obligadas a trabajar el campo', fa: 'بردگانی که به زور در کشتزار کار می‌کردند' },
        why: { en: 'Southern planters forced enslaved people to plant and pick cotton. It was cruel and wrong.', es: 'Los dueños del Sur obligaban a personas esclavizadas a sembrar y recoger algodón. Fue cruel e injusto.', fa: 'مالکان جنوبی بردگان را به زور به کاشتن و چیدن پخته واداشتند. این ظالمانه و نادرست بود.' } },
      { bin: 'south', t: { en: 'Ships cotton to mills in Britain', es: 'Envía algodón a fábricas de Gran Bretaña', fa: 'پخته را به فابریکه‌های بریتانیا می‌فرستد' },
        why: { en: 'The South exported its cotton. Most of it went to British mills.', es: 'El Sur exportaba su algodón. La mayor parte iba a fábricas británicas.', fa: 'جنوب پخته‌اش را صادر می‌کرد. بیشترش به فابریکه‌های بریتانیا می‌رفت.' } },
      { bin: 'west', t: { en: 'Small family farms on new land', es: 'Granjas familiares pequeñas en tierra nueva', fa: 'فارم‌های کوچک خانوادگی در زمین نو' },
        why: { en: 'Settlers moved west to farm. Most farms there were small family farms.', es: 'Los colonos se mudaron al oeste para cultivar. Casi todas eran granjas familiares pequeñas.', fa: 'مهاجران برای کشت به غرب رفتند. بیشتر فارم‌ها کوچک و خانوادگی بودند.' } },
      { bin: 'west', t: { en: 'Wants cheap land and better roads', es: 'Quiere tierra barata y mejores caminos', fa: 'زمین ارزان و سرک بهتر می‌خواهد' },
        why: { en: 'Western farmers needed land they could buy, and roads to send crops to market.', es: 'Los granjeros del oeste necesitaban tierra que pudieran comprar y caminos para llevar cosechas al mercado.', fa: 'دهقانان غرب زمینی می‌خواستند که بتوانند بخرند، و سرک برای بردن حاصل به بازار.' } }
    ],
    success: { en: 'Every card is in its section! Each region wanted different things.', es: '¡Cada tarjeta está en su región! Cada región quería cosas diferentes.', fa: 'هر کارت در منطقهٔ خودش است! هر منطقه چیزهای متفاوت می‌خواست.' }
  },

  boss: {
    at: [27, 8],
    stat: 'pla',
    need: 3,
    name: { en: 'The Leaky Grump', es: 'El Gruñón Goteras', fa: 'غرغروی چکه‌کن' },
    appear: { en: 'The Leaky Grump is hiding in the fog by the mill!', es: '¡El Gruñón Goteras se esconde en la niebla junto al molino!', fa: 'غرغروی چکه‌کن در مه کنار آسیاب پنهان است!' },
    taunt: { en: 'Canals, locks, compromises... so boring! I will let it all leak away!', es: 'Canales, esclusas, compromisos... ¡qué aburrido! ¡Dejaré que todo se escape!', fa: 'کانال، دروازهٔ آبی، سازش... چقدر خسته‌کن! می‌گذارم همه‌اش چکه کند و برود!' },
    win: { en: 'The fog lifts off the canal. Journal page 4.2 floats down into your hands!', es: 'La niebla se va del canal. ¡La página 4.2 del diario cae en tus manos!', fa: 'مه از روی کانال کنار می‌رود. صفحهٔ ۴.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why do people call 1817 to 1825 the Era of Good Feelings?', es: '¿Por qué llaman a los años de 1817 a 1825 la Era de los Buenos Sentimientos?', fa: 'چرا سال‌های ۱۸۱۷ تا ۱۸۲۵ را دوران احساس خوب می‌نامند؟' },
        choices: [
          { en: 'One main party and national pride', es: 'Un solo partido y orgullo nacional', fa: 'یک حزب اصلی و افتخار ملی' },
          { en: 'A new war with Britain every year', es: 'Una guerra nueva con Gran Bretaña cada año', fa: 'هر سال یک جنگ نو با بریتانیا' },
          { en: 'No president led the country then', es: 'Ningún presidente dirigía el país entonces', fa: 'آن وقت هیچ رئیس جمهوری کشور را رهبری نمی‌کرد' },
          { en: 'Every state voted to end slavery', es: 'Todos los estados votaron por acabar la esclavitud', fa: 'همهٔ ایالت‌ها به ختم برده‌داری رأی دادند' }],
        answer: 0,
        why: { en: 'Under President Monroe, the Federalist Party faded away. Many people felt proud of the nation.', es: 'Con el presidente Monroe, el Partido Federalista desapareció. Mucha gente se sentía orgullosa del país.', fa: 'در زمان رئیس جمهور مونرو، حزب فدرالیست از بین رفت. بسیاری از مردم به کشور افتخار می‌کردند.' } },
      { q: { en: 'What did the Monroe Doctrine of 1823 tell Europe?', es: '¿Qué le dijo a Europa la Doctrina Monroe de 1823?', fa: 'اصل مونرو در ۱۸۲۳ به اروپا چه گفت؟' },
        choices: [
          { en: 'Do not start new colonies in the Americas', es: 'No funden nuevas colonias en América', fa: 'در قارهٔ امریکا مستعمرهٔ نو نسازید' },
          { en: 'Send many more settlers to the Americas now', es: 'Manden muchos más colonos a América', fa: 'مهاجران بیشتری به قارهٔ امریکا بفرستید' },
          { en: 'Help the United States dig its canals', es: 'Ayuden a Estados Unidos a cavar sus canales', fa: 'به امریکا در کندن کانال‌هایش کمک کنید' },
          { en: 'Buy all the cotton grown in the South', es: 'Compren todo el algodón del Sur', fa: 'همهٔ پختهٔ جنوب را بخرید' }],
        answer: 0,
        why: { en: 'Monroe said the Americas were closed to new European colonies. The U.S. would stay out of Europe.', es: 'Monroe dijo que América estaba cerrada a nuevas colonias europeas. EE. UU. no se metería en Europa.', fa: 'مونرو گفت قارهٔ امریکا برای مستعمره‌های نو اروپایی بسته است. امریکا هم در کار اروپا دخالت نمی‌کند.' } },
      { q: { en: 'What was Henry Clay\'s American System?', es: '¿Qué era el Sistema Americano de Henry Clay?', fa: 'نظام امریکایی هنری کلی چه بود؟' },
        choices: [
          { en: 'Roads, canals, a national bank and tariffs', es: 'Caminos, canales, un banco nacional y aranceles', fa: 'سرک، کانال، بانک ملی و تعرفه' },
          { en: 'A plan for each state to make its own coins', es: 'Un plan para que cada estado hiciera sus monedas', fa: 'طرحی که هر ایالت سکهٔ خودش را بسازد' },
          { en: 'A treaty that sold land to France and Spain', es: 'Un tratado que vendía tierras a Francia y España', fa: 'معاهده‌ای که زمین را به فرانسه و هسپانیه فروخت' },
          { en: 'A law that ended all taxes on foreign goods', es: 'Una ley que quitaba todo impuesto a lo extranjero', fa: 'قانونی که همهٔ مالیه بر جنس خارجی را ختم کرد' }],
        answer: 0,
        why: { en: 'Clay wanted roads, canals, a bank and tariffs to tie the regions together.', es: 'Clay quería caminos, canales, un banco y aranceles para unir las regiones.', fa: 'کلی سرک، کانال، بانک و تعرفه می‌خواست تا منطقه‌ها را به هم وصل کند.' } },
      { q: { en: 'What did the Erie Canal connect?', es: '¿Qué unió el Canal de Erie?', fa: 'کانال ایری چه چیزها را به هم وصل کرد؟' },
        choices: [
          { en: 'The Great Lakes and New York City', es: 'Los Grandes Lagos y la ciudad de Nueva York', fa: 'جهیل‌های بزرگ و شهر نیویارک' },
          { en: 'The Mississippi River and New Orleans', es: 'El río Misisipi y Nueva Orleans', fa: 'دریای میسی‌سی‌پی و نیواورلینز' },
          { en: 'Virginia and the Pacific Ocean', es: 'Virginia y el océano Pacífico', fa: 'ویرجینیا و بحر آرام' },
          { en: 'Boston and the Gulf of Mexico', es: 'Boston y el golfo de México', fa: 'بوستون و خلیج مکسیکو' }],
        answer: 0,
        why: { en: 'The canal ran from Lake Erie at Buffalo to Albany. The Hudson River went on to New York City.', es: 'El canal iba del lago Erie, en Buffalo, hasta Albany. El río Hudson seguía hasta Nueva York.', fa: 'کانال از جهیل ایری در بافلو تا البانی می‌رفت. دریای هادسن تا شهر نیویارک ادامه داشت.' } },
      { q: { en: 'How did the Erie Canal change New York City?', es: '¿Cómo cambió el Canal de Erie a la ciudad de Nueva York?', fa: 'کانال ایری شهر نیویارک را چطور تغییر داد؟' },
        choices: [
          { en: 'It became the busiest port in the country', es: 'Se volvió el puerto más activo del país', fa: 'پرکارترین بندر کشور شد' },
          { en: 'It lost most of its trade to the small towns', es: 'Perdió casi todo su comercio con pueblos', fa: 'بیشتر تجارتش را به شهرک‌ها باخت' },
          { en: 'It closed its harbor to all ships', es: 'Cerró su puerto a todos los barcos', fa: 'بندرش را به همهٔ کشتی‌ها بست' },
          { en: 'It turned into a big cotton farm', es: 'Se convirtió en una gran finca de algodón', fa: 'به یک فارم بزرگ پخته تبدیل شد' }],
        answer: 0,
        why: { en: 'Crops from the West flowed to New York City by canal. It grew into the busiest U.S. port.', es: 'Las cosechas del Oeste llegaban a Nueva York por el canal. Se volvió el puerto más activo del país.', fa: 'حاصلات غرب از راه کانال به نیویارک می‌رسید. این شهر پرکارترین بندر امریکا شد.' } },
      { q: { en: 'How did the cotton gin change the South?', es: '¿Cómo cambió la desmotadora de algodón al Sur?', fa: 'ماشین پخته‌پاک‌کن جنوب را چطور تغییر داد؟' },
        choices: [
          { en: 'Cotton paid more, and slavery spread', es: 'El algodón dio más dinero y la esclavitud creció', fa: 'پخته پول بیشتر داد و برده‌داری پخش شد' },
          { en: 'Farms switched from cotton to wheat', es: 'Las granjas cambiaron el algodón por trigo', fa: 'فارم‌ها پخته را رها کردند و گندم کاشتند' },
          { en: 'Factories took the place of all farms', es: 'Las fábricas tomaron el lugar de las granjas', fa: 'فابریکه‌ها جای همهٔ فارم‌ها را گرفتند' },
          { en: 'All enslaved people were soon set free', es: 'Pronto liberaron a todas las personas esclavizadas', fa: 'همهٔ بردگان زود آزاد شدند' }],
        answer: 0,
        why: { en: 'Eli Whitney\'s 1793 gin cleaned cotton fast. Planters grew more and enslaved more people.', es: 'La desmotadora de Eli Whitney (1793) limpiaba algodón rápido. Sembraron más y esclavizaron a más personas.', fa: 'ماشین ایلای ویتنی (۱۷۹۳) پخته را زود پاک می‌کرد. مالکان بیشتر کاشتند و مردم بیشتری را برده ساختند.' } },
      { q: { en: 'What did the Missouri Compromise of 1820 do?', es: '¿Qué hizo el Compromiso de Misuri de 1820?', fa: 'سازش میزوری در ۱۸۲۰ چه کرد؟' },
        choices: [
          { en: 'Missouri a slave state, Maine a free state', es: 'Misuri estado esclavista, Maine estado libre', fa: 'میزوری ایالت برده‌دار، مین ایالت آزاد' },
          { en: 'Missouri and Maine both came in as free states', es: 'Misuri y Maine entraron como estados libres', fa: 'میزوری و مین هر دو ایالت آزاد شدند' },
          { en: 'It ended slavery in every state of the South', es: 'Terminó la esclavitud en todos los estados del Sur', fa: 'برده‌داری را در همهٔ ایالت‌های جنوب ختم کرد' },
          { en: 'It sold the Louisiana Territory back to France', es: 'Devolvió el Territorio de Luisiana a Francia', fa: 'سرزمین لوئیزیانا را دوباره به فرانسه فروخت' }],
        answer: 0,
        why: { en: 'It kept free and slave states equal. Slavery was banned north of 36°30′, except in Missouri.', es: 'Mantuvo iguales los estados libres y esclavistas. Se prohibió la esclavitud al norte de 36°30′, menos en Misuri.', fa: 'تعداد ایالت‌های آزاد و برده‌دار را برابر نگه داشت. برده‌داری در شمال ۳۶ درجه و ۳۰ دقیقه منع شد، به جز میزوری.' } },
      { q: { en: 'What is sectionalism?', es: '¿Qué es el seccionalismo?', fa: 'منطقه‌گرایی چیست؟' },
        choices: [
          { en: 'Putting your region ahead of the nation', es: 'Poner tu región antes que el país', fa: 'منطقهٔ خود را بالاتر از کشور دانستن' },
          { en: 'Cutting a big farm into many small fields', es: 'Dividir una granja grande en campos pequeños', fa: 'یک فارم بزرگ را به کشتزارهای کوچک تقسیم کردن' },
          { en: 'Building locks in sections along a canal', es: 'Construir esclusas por partes en un canal', fa: 'ساختن دروازه‌های آبی بخش به بخش در کانال' },
          { en: 'Voting for one main party in every state', es: 'Votar por un solo partido en cada estado', fa: 'رأی دادن به یک حزب در هر ایالت' }],
        answer: 0,
        why: { en: 'North, South and West wanted different things. Each region put its own needs first.', es: 'El Norte, el Sur y el Oeste querían cosas diferentes. Cada región ponía primero lo suyo.', fa: 'شمال، جنوب و غرب چیزهای متفاوت می‌خواستند. هر منطقه نیاز خودش را اول می‌دانست.' } }
    ]
  },

  learned: [
    { en: 'Under President Monroe came the [[era of good feelings|Era of Good Feelings]] and the [[monroe doctrine|Monroe Doctrine]].', es: 'Con el presidente Monroe llegaron la [[era of good feelings|Era de los Buenos Sentimientos]] y la [[monroe doctrine|Doctrina Monroe]].', fa: 'در زمان رئیس جمهور مونرو [[era of good feelings|دوران احساس خوب]] و [[monroe doctrine|اصل مونرو]] آمد.' },
    { en: 'The Erie Canal (1825) linked the Great Lakes to New York City. Shipping costs fell.', es: 'El Canal de Erie (1825) unió los Grandes Lagos con Nueva York. El costo de enviar carga bajó.', fa: 'کانال ایری (۱۸۲۵) جهیل‌های بزرگ را به شهر نیویارک وصل کرد. قیمت بردن جنس پایین آمد.' },
    { en: 'North, South and West grew apart. The [[compromise|Missouri Compromise]] tried to balance slavery and freedom.', es: 'El Norte, el Sur y el Oeste se fueron separando. El [[compromise|Compromiso de Misuri]] buscó equilibrar esclavitud y libertad.', fa: 'شمال، جنوب و غرب از هم دور شدند. [[compromise|سازش میزوری]] کوشید میان برده‌داری و آزادی توازن بسازد.' }
  ],
  reflect: {
    q: { en: 'Think of a road, bridge or train near you. How does it change people\'s lives?', es: 'Piensa en un camino, un puente o un tren cerca de ti. ¿Cómo cambia la vida de la gente?', fa: 'به یک سرک، پل یا ریل نزدیک خانه‌ات فکر کن. زندگی مردم را چطور تغییر می‌دهد؟' },
    starter: { en: 'Near my home, the', es: 'Cerca de mi casa, el', fa: 'نزدیک خانهٔ من،' }
  }
};
