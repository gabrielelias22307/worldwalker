/* TIMEWALKER · Episode 8.2 · Independence Movements (WHII)
   Two freedom days, ten years apart. West half (x 0-12): Accra, Ghana, on March 5-6, 1957, with the Old Polo Ground
   (l) where the crowd heard Nkrumah at midnight, Makola Market (m), homes, a cocoa grove (T) and the Atlantic beach.
   East half (x 19-31): Delhi, India, on August 15, 1947, with the Red Fort (D), city homes, and a village with
   huts (H over N), cotton fields (1, 2) and a shop that sells British factory cloth. Between them (x 13-18) is the
   sea; two long docks (rows 4 and 15) join the two stories, as both lands were British colonies. */
window.EPISODE = {
  id: '8.2',
  realm: 8,
  sol: 'WHII',
  title: { en: 'Independence Movements', es: 'Movimientos de independencia', fa: 'جنبش‌های استقلال' },
  place: { en: 'Delhi 1947 and Accra 1957', es: 'Delhi 1947 y Accra 1957', fa: 'دهلی ۱۹۴۷ و اکرا ۱۹۵۷' },
  intro: [
    { en: 'The Grump blurred the [[independence|independence]] page. People forgot how colonies won freedom.',
      es: 'El Gruñón borró la página de la [[independence|independencia]]. La gente olvidó cómo las colonias ganaron su libertad.',
      fa: 'غرغرو صفحهٔ [[independence|استقلال]] را تار کرد. مردم فراموش کردند مستعمره‌ها چطور آزاد شدند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: between Africa and India on the world map, 1947 on the timeline */
  scenes: {
    at: [40, 15],
    year: 1947,
    start: [
      { en: 'In 1945, European countries still ruled most of Africa and much of Asia.',
        es: 'En 1945, los países europeos todavía gobernaban casi toda África y gran parte de Asia.',
        fa: 'در ۱۹۴۵، کشورهای اروپایی هنوز بر بیشتر افریقا و بخش بزرگی از آسیا حکومت می‌کردند.' },
      { en: 'After the war, people in the colonies demanded to rule themselves.',
        es: 'Después de la guerra, la gente de las colonias exigió gobernarse a sí misma.',
        fa: 'بعد از جنگ، مردم مستعمره‌ها خواستند خودشان بر خود حکومت کنند.' },
      { en: 'India won freedom in 1947. Ghana followed in 1957.',
        es: 'India ganó su libertad en 1947. Ghana la siguió en 1957.',
        fa: 'هند در ۱۹۴۷ آزاد شد. گانا در ۱۹۵۷ دنبالش آمد.' }
    ],
    page: { en: 'Between 1945 and 1975, the United Nations grew from 51 to 144 countries.',
      es: 'Entre 1945 y 1975, las Naciones Unidas pasaron de 51 a 144 países.',
      fa: 'از ۱۹۴۵ تا ۱۹۷۵، سازمان ملل متحد از ۵۱ به ۱۴۴ کشور رسید.' },
    guess: {
      q: { en: 'Did Gandhi\'s followers fight Britain with weapons?', es: '¿Los seguidores de Gandhi pelearon contra Gran Bretaña con armas?', fa: 'آیا پیروان گاندی با سلاح با بریتانیا جنگیدند؟' },
      choices: [
        { t: { en: '✋ No, without weapons', es: '✋ No, sin armas', fa: '✋ نه، بدون سلاح' }, ok: true },
        { t: { en: '⚔️ Yes, with weapons', es: '⚔️ Sí, con armas', fa: '⚔️ بله، با سلاح' } }
      ],
      why: { en: 'Gandhi taught [[nonviolence|nonviolence]]: marches, boycotts and strikes, never weapons.', es: 'Gandhi enseñó la [[nonviolence|no violencia]]: marchas, boicots y huelgas, nunca armas.', fa: 'گاندی [[nonviolence|عدم خشونت]] را یاد داد: راهپیمایی، تحریم و اعتصاب، هرگز سلاح.' }
    },
    next: {
      q: { en: 'Next: today\'s connected world. Is the world more linked than in 1500?', es: 'Ahora: el mundo conectado de hoy. ¿Está el mundo más unido que en 1500?', fa: 'بعدی: جهان به هم پیوستهٔ امروز. آیا جهان از سال ۱۵۰۰ بیشتر به هم وصل است؟' },
      choices: [
        { t: { en: '🌐 Yes, much more', es: '🌐 Sí, mucho más', fa: '🌐 بله، خیلی بیشتر' }, ok: true },
        { t: { en: '🏝️ No, much less', es: '🏝️ No, mucho menos', fa: '🏝️ نه، خیلی کمتر' } }
      ],
      why: { en: 'Planes, ships, phones and the internet now link almost every place on Earth.', es: 'Aviones, barcos, teléfonos e internet hoy unen casi todos los lugares de la Tierra.', fa: 'طیاره‌ها، کشتی‌ها، موبایل‌ها و انترنت حالا تقریباً هر جای زمین را به هم وصل می‌کنند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandpa Yaw', es: 'Abuelo Yaw', fa: 'پدرکلان یاو' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#2a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'In World War II, I fought for Britain, far away in Burma.', es: 'En la Segunda Guerra Mundial, luché por Gran Bretaña, lejos, en Birmania.', fa: 'در جنگ جهانی دوم، من برای بریتانیا در برما، بسیار دور، جنگیدم.' },
        { en: 'In 1948, we soldiers marched for our rights. Police shot at us.', es: 'En 1948, los soldados marchamos por nuestros derechos. La policía nos disparó.', fa: 'در ۱۹۴۸، ما عسکرها برای حق خود راهپیمایی کردیم. پولیس بر ما فیر کرد.' },
        { en: 'Three men died. After that, many more people joined the freedom movement.', es: 'Murieron tres hombres. Después, mucha más gente se unió al movimiento por la libertad.', fa: 'سه مرد کشته شدند. بعد از آن، مردم خیلی بیشتری به جنبش آزادی پیوستند.' }
      ] },
    { at: [3, 13], name: { en: 'Kojo', es: 'Kojo', fa: 'کوجو' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0702a', pants: '#3a2a1a', style: 'short', hat: '#e0c080' },
      lines: [
        { en: 'I grow cocoa. Chocolate makers all over the world buy it.', es: 'Yo cultivo cacao. Lo compran fabricantes de chocolate de todo el mundo.', fa: 'من کاکائو می‌کارم. چاکلیت‌سازان همهٔ جهان آن را می‌خرند.' },
        { en: 'Under British rule, much of the money left our land.', es: 'Bajo el dominio británico, gran parte del dinero salía de nuestra tierra.', fa: 'در زمان حکومت بریتانیا، بیشتر پول از سرزمین ما بیرون می‌رفت.' },
        { en: 'Now we hope our cocoa money will build schools and roads in Ghana.', es: 'Ahora esperamos que el dinero del cacao construya escuelas y caminos en Ghana.', fa: 'حالا امیدواریم پول کاکائو در گانا مکتب و سرک بسازد.' }
      ] },
    { at: [23, 7], name: { en: 'Mr. Hughes', es: 'Sr. Hughes', fa: 'آقای هیوز' },
      look: { skin: 0, hair: '#8a6a4a', shirt: '#e8e0d0', pants: '#4a4a3a', style: 'short' },
      lines: [
        { en: 'I am a British clerk. I am packing to go home to London.', es: 'Soy un empleado británico. Estoy empacando para volver a Londres.', fa: 'من یک کارمند انگلیسی هستم. برای برگشتن به لندن بکس می‌بندم.' },
        { en: 'The war left Britain poor and tired. We cannot rule India anymore.', es: 'La guerra dejó a Gran Bretaña pobre y cansada. Ya no podemos gobernar India.', fa: 'جنگ بریتانیا را فقیر و خسته ساخت. دیگر نمی‌توانیم بر هند حکومت کنیم.' },
        { en: 'And millions of Indians made it clear: they want to rule themselves.', es: 'Y millones de indios lo dejaron claro: quieren gobernarse solos.', fa: 'و میلیون‌ها هندی واضح گفتند: می‌خواهند خودشان حکومت کنند.' }
      ] },
    { at: [22, 13], name: { en: 'Grandma Kaur', es: 'Abuela Kaur', fa: 'مادرکلان کور' },
      look: { skin: 3, hair: '#e8e8e8', shirt: '#e0e0f0', pants: '#5a4a6a', style: 'bun', robe: true },
      lines: [
        { en: 'We are Sikhs. We walked here from our village in Punjab.', es: 'Somos sijs. Caminamos hasta aquí desde nuestra aldea en Punyab.', fa: 'ما سیک هستیم. از قریهٔ خود در پنجاب پیاده تا اینجا آمدیم.' },
        { en: 'The new border cut through Punjab. Our village is now in Pakistan.', es: 'La nueva frontera cortó Punyab en dos. Nuestra aldea ahora está en Pakistán.', fa: 'مرز نو پنجاب را دو تکه کرد. قریهٔ ما حالا در پاکستان است.' },
        { en: 'Muslim families walked the other way. So many people lost everything.', es: 'Las familias musulmanas caminaron en sentido contrario. Tanta gente lo perdió todo.', fa: 'خانواده‌های مسلمان به طرف دیگر رفتند. چقدر زیاد مردم همه چیز خود را از دست دادند.' }
      ] },
    { at: [29, 13], name: { en: 'Meena', es: 'Meena', fa: 'مینا' },
      look: { skin: 4, hair: '#120c08', shirt: '#e07a2a', pants: '#2a5a3a', style: 'long' },
      lines: [
        { en: 'Our new country will write its own laws: a [[constitution|constitution]].', es: 'Nuestro país nuevo escribirá sus propias leyes: una [[constitution|constitución]].', fa: 'کشور نو ما قانون خود را می‌نویسد: یک [[constitution|قانون اساسی]].' },
        { en: 'Dr. Ambedkar will lead the team. He fights for the rights of Dalits.', es: 'El Dr. Ambedkar dirigirá el equipo. Él lucha por los derechos de los dalits.', fa: 'داکتر امبیدکار این گروه را رهبری می‌کند. او برای حق دلیت‌ها مبارزه می‌کند.' },
        { en: 'He says every person must be equal, rich or poor.', es: 'Él dice que todas las personas deben ser iguales, ricas o pobres.', fa: 'او می‌گوید هر انسان، دارا یا فقیر، باید برابر باشد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West (x 0-12): Accra. Homes (R/Q over h), the Old Polo Ground (l), Makola Market (m), a cocoa grove (T), the beach (s).
     x 13-18: the sea (~ near the shores, = deep water). Rows 4 and 15: the docks (k) and the route (b).
     East (x 19-31): Delhi. The Red Fort (D), homes, a village with huts (H over N), cotton fields (1, 2),
     and a shop (Q over h) that sells British factory cloth. */
  map: [
    'ppppppppppppp~====~WWWWWWWWWWWWW',
    'p.RRR..QQQ..s~====~s..DDDDDDD..W',
    'p.hdh..hhh..s~====~s..DDDDDDD..W',
    'p.....x.....s~====~s..DDDDDDD..W',
    'p::::::::::::kbbbbkllllllllllllW',
    'p.llllll....s~====~s...x.......W',
    'p.llllll....s~====~s..RRR..QQQ.W',
    'p.llllll.mm.s~====~s..hdh..hhh.W',
    'p.llllll....s~====~s...........W',
    'p...........s~====~s...,.......W',
    'p.....:.....s~====~s......:....W',
    'p.....:.....s~====~s......:....W',
    'p.RRR.:.TT..s~====~s.HHH..:.QQQW',
    'p.hdh.:.TTT.s~====~s.NdN..:.hdhW',
    'p.....:.TT..s~====~s......:....W',
    'p::::::::::::kbbbbklllllllllll.W',
    'p.TTT..TT...s~====~s.2222.2222.W',
    'p.TTT..TTT..s~====~s.1111.1111.W',
    'p...........s~====~s.2222.2222.W',
    'p...........s~====~s...........W',
    'pssssssssssss~====~s.,.........W',
    '~~~~~~~~~~~~~~====~WWWWWWWWWWWWW'
  ],
  start: [24, 19],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 8], at: [20, 11], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, along the edge of the sea.', es: 'Desde esta nota, camina 3 pasos al sur, por la orilla del mar.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، کنار بحر.' },
      text: { en: 'In 1947, Indian coins still showed the British king. Here is an old coin.', es: 'En 1947, las monedas de India todavía mostraban al rey británico. Aquí hay una moneda vieja.', fa: 'در ۱۹۴۷، سکه‌های هند هنوز عکس پادشاه بریتانیا را داشتند. اینجا یک سکهٔ کهنه است.' } },
    { clueAt: [11, 9], at: [11, 13], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps south. Look near the cocoa trees.', es: 'Desde esta nota, camina 4 pasos al sur. Busca cerca de los árboles de cacao.', fa: 'از این یادداشت، ۴ قدم به جنوب برو. نزدیک درختان کاکائو را ببین.' },
      text: { en: 'On Ghana\'s freedom day, people danced to drums in the streets. Here is a small drum.', es: 'El día de la libertad de Ghana, la gente bailó con tambores en las calles. Aquí hay un tamborcito.', fa: 'در روز آزادی گانا، مردم در سرک‌ها با دهل رقصیدند. اینجا یک دهل کوچک است.' } }
  ],

  words: {
    independence: { en: 'freedom for a country to rule itself', es: 'la libertad de un país para gobernarse solo', fa: 'آزادی یک کشور برای حکومت بر خودش' },
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    nonviolence: { en: 'protesting without weapons or fighting', es: 'protestar sin armas y sin pelear', fa: 'اعتراض بدون سلاح و بدون جنگ' },
    boycott: { en: 'refusing to buy something, as a protest', es: 'negarse a comprar algo como protesta', fa: 'نخریدن یک چیز برای اعتراض' },
    partition: { en: 'the split of British India into India and Pakistan in 1947', es: 'la división de la India británica en India y Pakistán en 1947', fa: 'تقسیم هند بریتانیایی به هند و پاکستان در ۱۹۴۷' },
    strike: { en: 'when workers stop working together, as a protest', es: 'cuando los trabajadores dejan de trabajar juntos como protesta', fa: 'وقتی کارگران با هم کار را برای اعتراض متوقف می‌کنند' },
    constitution: { en: 'the main set of laws that says how a country is run', es: 'el conjunto principal de leyes que dice cómo se gobierna un país', fa: 'قانون اصلی که می‌گوید یک کشور چطور اداره می‌شود' }
  },

  npcs: [
    {
      x: 24, y: 14,
      name: { en: 'Ramesh', es: 'Ramesh', fa: 'رامش' },
      role: { en: 'Cotton spinner', es: 'Hilandero de algodón', fa: 'ریسندهٔ پخته' },
      look: { skin: 4, hair: '#1a1008', shirt: '#f2f2f2', pants: '#e8e0d0', style: 'short', robe: true },
      lines: [
        { en: 'I spin cotton thread on this wheel, every single day.', es: 'Hilo algodón en esta rueca todos los días.', fa: 'من هر روز با این چرخ تار پخته می‌ریسم.' },
        { en: 'For years, Britain bought our cotton cheaply and sold us factory cloth.', es: 'Por años, Gran Bretaña compró barato nuestro algodón y nos vendió tela de fábrica.', fa: 'سال‌ها بریتانیا پختهٔ ما را ارزان خرید و به ما تکهٔ فابریکه فروخت.' },
        { en: 'Gandhi asked us to [[boycott|boycott]] British cloth and spin our own.', es: 'Gandhi nos pidió hacer un [[boycott|boicot]] a la tela británica e hilar la nuestra.', fa: 'گاندی از ما خواست تکهٔ انگلیسی را [[boycott|تحریم]] کنیم و خودمان بریسیم.' },
        { en: 'In 1930, he walked 240 miles to make salt from the sea, against British law.', es: 'En 1930, caminó 240 millas para sacar sal del mar, contra la ley británica.', fa: 'در ۱۹۳۰، او ۲۴۰ میل پیاده رفت تا از بحر نمک بسازد، برخلاف قانون بریتانیا.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Gandhi ask Indians to spin their own cloth?', es: '¿Por qué Gandhi pidió a los indios hilar su propia tela?', fa: 'چرا گاندی از هندی‌ها خواست تکهٔ خود را بریسند؟' },
        choices: [
          { ok: true, t: { en: 'To stop buying cloth from British factories', es: 'Para dejar de comprar tela de fábricas británicas', fa: 'تا تکهٔ فابریکه‌های انگلیسی را نخرند' },
            why: { en: 'Yes. The boycott hurt British business and showed India could take care of itself.', es: 'Sí. El boicot dañó los negocios británicos y mostró que India podía valerse sola.', fa: 'بله. تحریم به تجارت بریتانیا ضرر زد و نشان داد هند خودش از پس کار برمی‌آید.' } },
          { t: { en: 'To sell more of their cloth to shops in Britain', es: 'Para vender más de su tela en tiendas de Gran Bretaña', fa: 'تا تکهٔ بیشتر به دکان‌های بریتانیا بفروشند' },
            why: { en: 'The cloth was for Indians to wear, so they would not buy British cloth.', es: 'La tela era para que los indios la usaran y no compraran tela británica.', fa: 'این تکه برای پوشیدن خود هندی‌ها بود تا تکهٔ انگلیسی نخرند.' } },
          { t: { en: 'Because cotton plants could not grow in India', es: 'Porque el algodón no podía crecer en India', fa: 'چون پخته در هند نمی‌رویید' },
            why: { en: 'India grows lots of cotton. Britain bought it cheaply for its factories.', es: 'India produce mucho algodón. Gran Bretaña lo compraba barato para sus fábricas.', fa: 'هند پختهٔ زیاد دارد. بریتانیا آن را برای فابریکه‌هایش ارزان می‌خرید.' } }
        ]
      }
    },
    {
      x: 26, y: 9,
      name: { en: 'Farida', es: 'Farida', fa: 'فریده' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 3, hair: '#1a1008', shirt: '#2a6a6a', pants: '#3a2a4a', style: 'long', robe: true },
      lines: [
        { en: 'Today, August 15, 1947, India is free. But my heart is heavy.', es: 'Hoy, 15 de agosto de 1947, India es libre. Pero mi corazón está triste.', fa: 'امروز، ۱۵ اگست ۱۹۴۷، هند آزاد است. اما دلم غمگین است.' },
        { en: 'Many Muslims feared being a small group in a mostly Hindu India.', es: 'Muchos musulmanes temían ser un grupo pequeño en una India casi toda hindú.', fa: 'بسیاری از مسلمانان می‌ترسیدند در هندی که بیشترش هندو است گروه کوچکی باشند.' },
        { en: 'So the Muslim League asked for a new country: Pakistan.', es: 'Por eso la Liga Musulmana pidió un país nuevo: Pakistán.', fa: 'پس مسلم لیگ یک کشور نو خواست: پاکستان.' },
        { en: 'The [[partition|partition]] split the land. Millions fled their homes, and many were killed.', es: 'La [[partition|partición]] dividió la tierra. Millones huyeron de sus casas y muchos murieron asesinados.', fa: '[[partition|تقسیم]] سرزمین را دو تکه کرد. میلیون‌ها نفر از خانه گریختند و بسیاری کشته شدند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why was Pakistan created in 1947?', es: '¿Por qué se creó Pakistán en 1947?', fa: 'چرا پاکستان در ۱۹۴۷ ساخته شد؟' },
        choices: [
          { ok: true, t: { en: 'Many Muslims wanted a country of their own', es: 'Muchos musulmanes querían su propio país', fa: 'بسیاری از مسلمانان کشور خود را می‌خواستند' },
            why: { en: 'Yes. The Muslim League feared Muslims would not be treated fairly in India.', es: 'Sí. La Liga Musulmana temía que los musulmanes no fueran tratados con justicia en India.', fa: 'بله. مسلم لیگ می‌ترسید با مسلمانان در هند عادلانه رفتار نشود.' } },
          { t: { en: 'Britain wanted to keep one part as a colony', es: 'Gran Bretaña quería quedarse con una parte como colonia', fa: 'بریتانیا می‌خواست یک بخش را مستعمره نگه دارد' },
            why: { en: 'Britain left both India and Pakistan in 1947. Neither stayed a colony.', es: 'Gran Bretaña dejó India y Pakistán en 1947. Ninguno siguió siendo colonia.', fa: 'بریتانیا در ۱۹۴۷ هم هند و هم پاکستان را ترک کرد. هیچ کدام مستعمره نماند.' } },
          { t: { en: 'India\'s people all voted to split up for trade', es: 'Todo el pueblo de India votó dividirse por comercio', fa: 'همهٔ مردم هند برای تجارت به جدا شدن رأی دادند' },
            why: { en: 'There was no such vote. The split came from fear between religious groups.', es: 'No hubo esa votación. La división vino del miedo entre grupos religiosos.', fa: 'چنین رأیی نبود. جدایی از ترس میان گروه‌های دینی آمد.' } }
        ]
      }
    },
    {
      x: 9, y: 8,
      name: { en: 'Abena', es: 'Abena', fa: 'آبینا' },
      role: { en: 'Market trader', es: 'Comerciante del mercado', fa: 'سوداگر بازار' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a7a3a', style: 'bun', robe: true },
      lines: [
        { en: 'Akwaaba! That means welcome. I sell cloth at Makola Market in Accra.', es: '¡Akwaaba! Eso significa bienvenido. Vendo tela en el mercado Makola de Accra.', fa: 'اکوابا! یعنی خوش آمدی. من در بازار ماکولا در اکرا تکه می‌فروشم.' },
        { en: 'Under British rule, our land was called the Gold Coast.', es: 'Bajo el dominio británico, nuestra tierra se llamaba Costa de Oro.', fa: 'در زمان حکومت بریتانیا، سرزمین ما ساحل طلا نام داشت.' },
        { en: 'Kwame Nkrumah\'s party said: "Self-government now!" We market women gave it money.', es: 'El partido de Kwame Nkrumah decía: "¡Autogobierno ya!". Las mujeres del mercado le dimos dinero.', fa: 'حزب کوامی نکرومه می‌گفت: «حالا حکومت خود!» ما زنان بازار به آن پول دادیم.' },
        { en: 'Tonight at midnight, the Gold Coast becomes free Ghana!', es: '¡Esta noche a medianoche, la Costa de Oro se convierte en Ghana libre!', fa: 'امشب نیمه‌شب، ساحل طلا گانای آزاد می‌شود!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was Ghana called under British rule?', es: '¿Cómo se llamaba Ghana bajo el dominio británico?', fa: 'گانا در زمان حکومت بریتانیا چه نام داشت؟' },
        choices: [
          { ok: true, t: { en: 'The Gold Coast', es: 'Costa de Oro', fa: 'ساحل طلا' },
            why: { en: 'Right! Europeans named it for its gold. In 1957 it took the name Ghana.', es: '¡Correcto! Los europeos la nombraron por su oro. En 1957 tomó el nombre de Ghana.', fa: 'درست! اروپایی‌ها به خاطر طلایش این نام را دادند. در ۱۹۵۷ نام گانا را گرفت.' } },
          { t: { en: 'The Ivory Coast', es: 'Costa de Marfil', fa: 'ساحل عاج' },
            why: { en: 'The Ivory Coast is the country next door. It was a French colony.', es: 'Costa de Marfil es el país vecino. Era una colonia francesa.', fa: 'ساحل عاج کشور همسایه است. مستعمرهٔ فرانسه بود.' } },
          { t: { en: 'British Nigeria', es: 'Nigeria Británica', fa: 'نایجریای بریتانیا' },
            why: { en: 'Nigeria is another country to the east. It won freedom in 1960.', es: 'Nigeria es otro país, al este. Se independizó en 1960.', fa: 'نایجریا کشور دیگری در شرق است. در ۱۹۶۰ آزاد شد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 3, text: { en: 'ACCRA · MARCH 1957 · The British [[colony|colony]] called the Gold Coast becomes free Ghana.', es: 'ACCRA · MARZO DE 1957 · La [[colony|colonia]] británica llamada Costa de Oro se vuelve Ghana libre.', fa: 'اکرا · مارچ ۱۹۵۷ · [[colony|مستعمرهٔ]] بریتانیا به نام ساحل طلا گانای آزاد می‌شود.' } },
    { x: 23, y: 5, text: { en: 'DELHI · AUGUST 1947 · India is free after nearly 200 years of British control.', es: 'DELHI · AGOSTO DE 1947 · India es libre tras casi 200 años de control británico.', fa: 'دهلی · اگست ۱۹۴۷ · هند بعد از نزدیک ۲۰۰ سال تسلط بریتانیا آزاد است.' } }
  ],

  /* the quest: Mrs. Adjei the teacher (gold !) in Accra -> Kofi the fisherman on the beach
     -> chase the Ink Thief: one torn piece at the Red Fort, one at the spinners' village, one on the Polo Ground */
  quest: {
    stat: 'reg',
    title: { en: 'The Torn Scrapbook', es: 'El álbum roto', fa: 'البوم پاره‌شده' },
    giver: {
      x: 4, y: 9,
      name: { en: 'Mrs. Adjei', es: 'Sra. Adjei', fa: 'خانم آجی' },
      role: { en: 'History teacher', es: 'Maestra de historia', fa: 'معلم تاریخ' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a4a8a', pants: '#e0a020', style: 'bun' },
      lines: [
        { en: 'I teach history. I made a scrapbook called "How Freedom Spread."', es: 'Enseño historia. Hice un álbum llamado "Cómo se extendió la libertad".', fa: 'من تاریخ درس می‌دهم. یک البوم به نام «آزادی چطور پخش شد» ساختم.' },
        { en: 'It shows India in 1947 and Ghana in 1957.', es: 'Muestra a India en 1947 y a Ghana en 1957.', fa: 'هند را در ۱۹۴۷ و گانا را در ۱۹۵۷ نشان می‌دهد.' },
        { en: 'An Ink Thief tore it and ran! Kofi the fisherman saw it.', es: '¡Un Ladrón de Tinta lo rompió y huyó! Kofi, el pescador, lo vio.', fa: 'یک دزد رنگ آن را پاره کرد و فرار کرد! کوفی ماهی‌گیر او را دید.' }
      ],
      wait: { en: 'Kofi is on the beach, south of Accra.', es: 'Kofi está en la playa, al sur de Accra.', fa: 'کوفی در ساحل، جنوبِ اکرا است.' },
      thanks: { en: 'My scrapbook! India\'s peaceful protest helped inspire Ghana\'s. Thank you!', es: '¡Mi álbum! La protesta pacífica de India ayudó a inspirar la de Ghana. ¡Gracias!', fa: 'البوم من! اعتراض صلح‌آمیز هند الهام‌بخش اعتراض گانا شد. تشکر!' }
    },
    contact: {
      x: 5, y: 19,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Fisherman', es: 'Pescador', fa: 'ماهی‌گیر' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a9d8f', pants: '#3a3a3a', style: 'short', hat: '#e9c46a' },
      lines: [
        { en: 'Yes, I saw the thief! It flew across the sea and back.', es: '¡Sí, vi al ladrón! Voló sobre el mar y regresó.', fa: 'بله، دزد را دیدم! از روی بحر رفت و برگشت.' },
        { en: 'It tore the scrapbook into 3 pieces and hid them.', es: 'Rompió el álbum en 3 pedazos y los escondió.', fa: 'البوم را سه تکه کرد و پنهان ساخت.' },
        { en: 'Follow its riddles to each piece, then catch the thief!', es: 'Sigue sus acertijos hasta cada pedazo. ¡Después atrapa al ladrón!', fa: 'چیستان‌هایش را تا هر تکه دنبال کن، بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [2, 18],
      hops: [[10, 19], [6, 14]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief hisses: "Torn pages are soon forgotten. Find them, if you can."', es: 'El Ladrón de Tinta sisea: "Las páginas rotas se olvidan pronto. Encuéntralas, si puedes".', fa: 'دزد رنگ فش‌فش می‌کند: «صفحه‌های پاره زود فراموش می‌شوند. اگر می‌توانی پیدایشان کن.»' },
      clues: [
        { t: { en: 'Piece 1 is where India\'s leader raises the flag every August 15.', es: 'El pedazo 1 está donde el líder de India iza la bandera cada 15 de agosto.', fa: 'تکهٔ ۱ جایی است که رهبر هند هر ۱۵ اگست بیرق را بالا می‌کند.' },
          zones: [{ x: 20, y: 4, w: 11, h: 2 }],
          noBy: [{ x: 2, y: 5, w: 6, h: 4, t: { en: 'This is the Polo Ground in Accra, Ghana. India\'s flag day is in Delhi.', es: 'Este es el Polo Ground de Accra, en Ghana. El día de la bandera de India es en Delhi.', fa: 'این میدان پولوی اکرا در گانا است. روز بیرق هند در دهلی است.' } }],
          found: { en: 'Piece 1 was at the Red Fort in Delhi!', es: '¡El pedazo 1 estaba en el Fuerte Rojo de Delhi!', fa: 'تکهٔ ۱ در قلعهٔ سرخ دهلی بود!' } },
        { t: { en: 'Piece 2 is where people spin cloth by hand, instead of buying British cloth.', es: 'El pedazo 2 está donde la gente hila tela a mano en vez de comprar tela británica.', fa: 'تکهٔ ۲ جایی است که مردم به جای خریدن تکهٔ انگلیسی، با دست تکه می‌ریسند.' },
          zones: [{ x: 20, y: 14, w: 6, h: 1 }],
          noBy: [{ x: 27, y: 14, w: 4, h: 1, t: { en: 'This shop sells factory cloth from Britain. Many Indians refused to buy it.', es: 'Esta tienda vende tela de fábrica británica. Muchos indios se negaron a comprarla.', fa: 'این دکان تکهٔ فابریکهٔ بریتانیا را می‌فروشد. بسیاری از هندی‌ها آن را نخریدند.' } }],
          found: { en: 'Piece 2 was in the village, by the spinning wheels!', es: '¡El pedazo 2 estaba en la aldea, junto a las ruecas!', fa: 'تکهٔ ۲ در قریه، کنار چرخ‌های ریسندگی بود!' } },
        { t: { en: 'Piece 3 is where a crowd heard, at midnight: "Ghana is free forever!"', es: 'El pedazo 3 está donde una multitud oyó a medianoche: "¡Ghana es libre para siempre!".', fa: 'تکهٔ ۳ جایی است که مردم نیمه‌شب شنیدند: «گانا برای همیشه آزاد است!»' },
          zones: [{ x: 2, y: 5, w: 6, h: 4 }],
          noBy: [{ x: 20, y: 4, w: 11, h: 2, t: { en: 'This is Delhi, India. Ghana\'s freedom came ten years later, in Accra.', es: 'Esto es Delhi, en India. La libertad de Ghana llegó diez años después, en Accra.', fa: 'این دهلی در هند است. آزادی گانا ده سال بعد در اکرا آمد.' } }],
          found: { en: 'Piece 3 was on the Polo Ground in Accra!', es: '¡El pedazo 3 estaba en el Polo Ground de Accra!', fa: 'تکهٔ ۳ در میدان پولوی اکرا بود!' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the scrapbook. All 3 pieces fit.', es: '¡Te atrapé! El Ladrón de Tinta devuelve el álbum. Los 3 pedazos encajan.', fa: 'گرفتمت! دزد رنگ البوم را پس می‌دهد. هر سه تکه جور می‌شوند.' },
      item: { icon: '📔', name: { en: 'The freedom scrapbook', es: 'El álbum de la libertad', fa: 'البوم آزادی' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[10, 10], [25, 18]],

  challenge: {
    at: [30, 19],
    type: 'claim',
    stat: 'hei',
    title: { en: 'How did they win freedom?', es: '¿Cómo ganaron la libertad?', fa: 'چطور آزادی را به دست آوردند؟' },
    intro: { en: 'The Grump says freedom only comes from war. Pick a claim. Then back it up with evidence from India and Ghana.',
      es: 'El Gruñón dice que la libertad solo llega con la guerra. Elige una afirmación. Luego apóyala con pruebas de India y de Ghana.',
      fa: 'غرغرو می‌گوید آزادی فقط با جنگ می‌آید. یک ادعا انتخاب کن. بعد با دلیل از هند و گانا آن را ثابت کن.' },
    options: [
      { icon: '✊', name: { en: 'A · Mostly peaceful mass protest', es: 'A · Sobre todo protesta pacífica masiva', fa: 'الف · بیشتر اعتراض صلح‌آمیز مردم' },
        desc: { en: 'Marches, strikes, boycotts and votes by millions of people.', es: 'Marchas, huelgas, boicots y votos de millones de personas.', fa: 'راهپیمایی، اعتصاب، تحریم و رأی میلیون‌ها نفر.' },
        result: { en: 'Yes. Millions marched, struck and voted. Britain could no longer rule them.', es: 'Sí. Millones marcharon, hicieron huelga y votaron. Gran Bretaña ya no pudo gobernarlos.', fa: 'بله. میلیون‌ها نفر راهپیمایی، اعتصاب و رأی دادند. بریتانیا دیگر نتوانست بر آن‌ها حکومت کند.' } },
      { icon: '⚔️', name: { en: 'B · Mostly a long war', es: 'B · Sobre todo una guerra larga', fa: 'ب · بیشتر یک جنگ طولانی' },
        desc: { en: 'Armies fought Britain for many years, until it left.', es: 'Ejércitos pelearon contra Gran Bretaña muchos años, hasta que se fue.', fa: 'لشکرها سال‌ها با بریتانیا جنگیدند تا رفت.' },
        result: { en: 'Some lands, like Algeria, won freedom by war. But not India or Ghana.', es: 'Algunas tierras, como Argelia, se liberaron con guerra. Pero no India ni Ghana.', fa: 'بعضی سرزمین‌ها مثل الجزایر با جنگ آزاد شدند. اما هند و گانا نه.' } },
      { icon: '🏳️', name: { en: 'C · Britain simply chose to leave', es: 'C · Gran Bretaña simplemente decidió irse', fa: 'ج · بریتانیا خودش رفتن را انتخاب کرد' },
        desc: { en: 'Britain decided on its own to give up its colonies.', es: 'Gran Bretaña decidió por su cuenta dejar sus colonias.', fa: 'بریتانیا خودش تصمیم گرفت مستعمره‌هایش را رها کند.' },
        result: { en: 'Britain was weak after the war. But it left because people pushed hard.', es: 'Gran Bretaña estaba débil tras la guerra. Pero se fue porque la gente presionó mucho.', fa: 'بریتانیا بعد از جنگ ضعیف بود. اما رفت چون مردم سخت فشار آوردند.' } }
    ],
    kinds: [
      { id: 'india', label: { en: 'Evidence from India', es: 'Prueba de India', fa: 'دلیل از هند' } },
      { id: 'ghana', label: { en: 'Evidence from Ghana', es: 'Prueba de Ghana', fa: 'دلیل از گانا' } }
    ],
    reasons: [
      { kind: 'india', fits: [0], t: { en: 'In 1930, thousands marched with Gandhi to make salt, against British law.', es: 'En 1930, miles marcharon con Gandhi para hacer sal, contra la ley británica.', fa: 'در ۱۹۳۰، هزاران نفر با گاندی راهپیمایی کردند تا برخلاف قانون بریتانیا نمک بسازند.' },
        why: { en: 'The Salt March was a peaceful protest. It shows nonviolence at work.', es: 'La Marcha de la Sal fue una protesta pacífica. Muestra la no violencia en acción.', fa: 'راهپیمایی نمک یک اعتراض صلح‌آمیز بود. عدم خشونت را در عمل نشان می‌دهد.' } },
      { kind: 'india', fits: [0], t: { en: 'Millions refused to buy British cloth and spun their own.', es: 'Millones se negaron a comprar tela británica e hilaron la suya.', fa: 'میلیون‌ها نفر تکهٔ انگلیسی را نخریدند و خودشان ریسیدند.' },
        why: { en: 'A boycott is peaceful protest. It hurt British business without weapons.', es: 'Un boicot es protesta pacífica. Dañó los negocios británicos sin armas.', fa: 'تحریم اعتراض صلح‌آمیز است. بدون سلاح به تجارت بریتانیا ضرر زد.' } },
      { kind: 'india', fits: [2], t: { en: 'After World War II, Britain was poor and tired of ruling India.', es: 'Después de la Segunda Guerra Mundial, Gran Bretaña estaba pobre y cansada de gobernar India.', fa: 'بعد از جنگ جهانی دوم، بریتانیا فقیر و از حکومت بر هند خسته بود.' },
        why: { en: 'True, and it helped. But this is about Britain, not about protest.', es: 'Es cierto y ayudó. Pero habla de Gran Bretaña, no de la protesta.', fa: 'درست است و کمک کرد. اما این دربارهٔ بریتانیا است، نه اعتراض.' } },
      { kind: 'india', fits: [], t: { en: 'India\'s army beat Britain\'s army in a great battle in 1947.', es: 'El ejército de India venció al británico en una gran batalla en 1947.', fa: 'لشکر هند در ۱۹۴۷ لشکر بریتانیا را در یک جنگ بزرگ شکست داد.' },
        why: { en: 'There was no such battle. India won freedom mostly by protest and talks.', es: 'No hubo esa batalla. India ganó su libertad sobre todo con protestas y conversaciones.', fa: 'چنین جنگی نبود. هند بیشتر با اعتراض و گفتگو آزاد شد.' } },
      { kind: 'ghana', fits: [0], t: { en: 'In 1950, workers held [[strike|strikes]] and boycotts called Positive Action.', es: 'En 1950, los trabajadores hicieron [[strike|huelgas]] y boicots llamados Acción Positiva.', fa: 'در ۱۹۵۰، کارگران [[strike|اعتصاب]] و تحریمی به نام «اقدام مثبت» کردند.' },
        why: { en: 'Positive Action was peaceful protest, like Gandhi\'s.', es: 'La Acción Positiva fue protesta pacífica, como la de Gandhi.', fa: 'اقدام مثبت اعتراض صلح‌آمیز بود، مثل اعتراض گاندی.' } },
      { kind: 'ghana', fits: [0], t: { en: 'Ghanaians voted for Nkrumah\'s party in 1951, 1954 and 1956.', es: 'La gente de Ghana votó por el partido de Nkrumah en 1951, 1954 y 1956.', fa: 'مردم گانا در ۱۹۵۱، ۱۹۵۴ و ۱۹۵۶ به حزب نکرومه رأی دادند.' },
        why: { en: 'Voting is a peaceful way millions showed they wanted freedom.', es: 'Votar es una forma pacífica en que millones mostraron que querían la libertad.', fa: 'رأی دادن راه صلح‌آمیزی بود که میلیون‌ها نفر نشان دادند آزادی می‌خواهند.' } },
      { kind: 'ghana', fits: [], t: { en: 'Ghana fought a ten-year war against British soldiers.', es: 'Ghana luchó una guerra de diez años contra soldados británicos.', fa: 'گانا ده سال با عسکرهای بریتانیا جنگید.' },
        why: { en: 'There was no such war in Ghana. Nkrumah used strikes, boycotts and votes.', es: 'No hubo esa guerra en Ghana. Nkrumah usó huelgas, boicots y votos.', fa: 'در گانا چنین جنگی نبود. نکرومه از اعتصاب، تحریم و رأی کار گرفت.' } },
      { kind: 'ghana', fits: [], t: { en: 'In Algeria, a long war ended French rule in 1962.', es: 'En Argelia, una guerra larga terminó con el dominio francés en 1962.', fa: 'در الجزایر، یک جنگ طولانی در ۱۹۶۲ به حکومت فرانسه پایان داد.' },
        why: { en: 'True, but that is Algeria and France. It is not evidence about Ghana.', es: 'Es cierto, pero es Argelia y Francia. No es prueba sobre Ghana.', fa: 'درست است، اما این الجزایر و فرانسه است. دلیلی دربارهٔ گانا نیست.' } }
    ],
    mismatch: { en: 'That evidence does not back up your claim. Read the claim and the evidence again.', es: 'Esa prueba no apoya tu afirmación. Lee otra vez la afirmación y la prueba.', fa: 'آن دلیل ادعایت را ثابت نمی‌کند. ادعا و دلیل را دوباره بخوان.' },
    success: { en: 'Your claim is backed by evidence! Peaceful protest by millions won freedom.', es: '¡Tu afirmación tiene pruebas! La protesta pacífica de millones ganó la libertad.', fa: 'ادعای تو دلیل دارد! اعتراض صلح‌آمیز میلیون‌ها نفر آزادی آورد.' }
  },

  boss: {
    at: [5, 7],
    stat: 'pla',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting rolls in like gray fog over the Polo Ground.', es: 'El Olvido llega como niebla gris sobre el Polo Ground.', fa: 'فراموشی مثل مه خاکستری روی میدان پولو می‌آید.' },
    taunt: { en: 'No one will remember the people who marched for freedom.', es: 'Nadie recordará a la gente que marchó por la libertad.', fa: 'هیچ کس مردمی را که برای آزادی راهپیمایی کردند به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts. Chronicle page 8.2 floats down into your hands.', es: 'La niebla se levanta. La página 8.2 de la crónica cae en tus manos.', fa: 'مه کنار می‌رود. صفحهٔ ۸.۲ تاریخ‌نامه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What is a colony?', es: '¿Qué es una colonia?', fa: 'مستعمره چیست؟' },
        choices: [
          { en: 'A land ruled by a faraway country', es: 'Una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
          { en: 'A free country with its own leaders', es: 'Un país libre con sus propios líderes', fa: 'یک کشور آزاد با رهبران خودش' },
          { en: 'A city where many traders meet', es: 'Una ciudad donde se juntan muchos comerciantes', fa: 'شهری که سوداگران زیاد در آن جمع می‌شوند' },
          { en: 'A group of farmers sharing land', es: 'Un grupo de agricultores que comparten tierra', fa: 'گروهی از دهقانان که زمین را شریک هستند' }],
        answer: 0,
        why: { en: 'India was ruled by Britain, far away. So was the Gold Coast.', es: 'India era gobernada por Gran Bretaña, que estaba lejos. La Costa de Oro también.', fa: 'هند را بریتانیا از دور حکومت می‌کرد. ساحل طلا را هم.' } },
      { q: { en: 'Who led India\'s nonviolent fight for freedom?', es: '¿Quién dirigió la lucha no violenta de India por la libertad?', fa: 'چه کسی مبارزهٔ بدون خشونت هند برای آزادی را رهبری کرد؟' },
        choices: [
          { en: 'Mohandas Gandhi', es: 'Mohandas Gandhi', fa: 'موهنداس گاندی' },
          { en: 'Kwame Nkrumah', es: 'Kwame Nkrumah', fa: 'کوامی نکرومه' },
          { en: 'Winston Churchill', es: 'Winston Churchill', fa: 'وینستون چرچیل' },
          { en: 'Napoleon Bonaparte', es: 'Napoleón Bonaparte', fa: 'ناپلیون بناپارت' }],
        answer: 0,
        why: { en: 'Gandhi led marches and boycotts for decades. Nkrumah led Ghana; Churchill led Britain.', es: 'Gandhi dirigió marchas y boicots por décadas. Nkrumah dirigió Ghana; Churchill, Gran Bretaña.', fa: 'گاندی ده‌ها سال راهپیمایی و تحریم را رهبری کرد. نکرومه گانا را و چرچیل بریتانیا را.' } },
      { q: { en: 'What does nonviolent protest mean?', es: '¿Qué significa protesta no violenta?', fa: 'اعتراض بدون خشونت یعنی چه؟' },
        choices: [
          { en: 'Protesting without weapons or fighting', es: 'Protestar sin armas y sin pelear', fa: 'اعتراض بدون سلاح و جنگ' },
          { en: 'Fighting with weapons only at night', es: 'Pelear con armas solo de noche', fa: 'جنگیدن با سلاح فقط در شب' },
          { en: 'Staying home and saying nothing at all', es: 'Quedarse en casa y no decir nada', fa: 'در خانه ماندن و هیچ چیز نگفتن' },
          { en: 'Asking another country to fight for you', es: 'Pedir a otro país que pelee por ti', fa: 'از کشور دیگری خواستن که به جای تو بجنگد' }],
        answer: 0,
        why: { en: 'Marches, boycotts, strikes and sit-ins are nonviolent. People protest, but never attack.', es: 'Las marchas, boicots, huelgas y sentadas son no violentas. Se protesta, pero nunca se ataca.', fa: 'راهپیمایی، تحریم، اعتصاب و تحصن بدون خشونت هستند. مردم اعتراض می‌کنند اما حمله نمی‌کنند.' } },
      { q: { en: 'What happened at the partition of India in 1947?', es: '¿Qué pasó en la partición de India en 1947?', fa: 'در تقسیم هند در ۱۹۴۷ چه شد؟' },
        choices: [
          { en: 'India and Pakistan split; millions fled', es: 'India y Pakistán se separaron; millones huyeron', fa: 'هند و پاکستان جدا شدند؛ میلیون‌ها گریختند' },
          { en: 'Britain took back full control of India again', es: 'Gran Bretaña volvió a tomar todo el control de India', fa: 'بریتانیا دوباره تمام هند را در دست گرفت' },
          { en: 'India joined with Ghana as one country', es: 'India se unió con Ghana en un solo país', fa: 'هند و گانا یک کشور شدند' },
          { en: 'Delhi became the new capital of Britain', es: 'Delhi se volvió la nueva capital de Gran Bretaña', fa: 'دهلی پایتخت نو بریتانیا شد' }],
        answer: 0,
        why: { en: 'About 15 million people had to move, and up to one million or more were killed.', es: 'Unos 15 millones de personas tuvieron que mudarse, y hasta un millón o más fueron asesinadas.', fa: 'حدود ۱۵ میلیون نفر مجبور به کوچ شدند و تا یک میلیون یا بیشتر کشته شدند.' } },
      { q: { en: 'Who led the Gold Coast to independence as Ghana?', es: '¿Quién llevó a la Costa de Oro a la independencia como Ghana?', fa: 'چه کسی ساحل طلا را به استقلال به نام گانا رساند؟' },
        choices: [
          { en: 'Kwame Nkrumah', es: 'Kwame Nkrumah', fa: 'کوامی نکرومه' },
          { en: 'Mohandas Gandhi', es: 'Mohandas Gandhi', fa: 'موهنداس گاندی' },
          { en: 'Jawaharlal Nehru', es: 'Jawaharlal Nehru', fa: 'جواهر لعل نهرو' },
          { en: 'Queen Victoria', es: 'La reina Victoria', fa: 'ملکه ویکتوریا' }],
        answer: 0,
        why: { en: 'Nkrumah led Ghana to freedom in 1957. Nehru was India\'s first prime minister.', es: 'Nkrumah llevó a Ghana a la libertad en 1957. Nehru fue el primer primer ministro de India.', fa: 'نکرومه گانا را در ۱۹۵۷ آزاد کرد. نهرو اولین صدراعظم هند بود.' } },
      { q: { en: 'Why was Britain more ready to leave its colonies after 1945?', es: '¿Por qué Gran Bretaña estaba más dispuesta a dejar sus colonias después de 1945?', fa: 'چرا بریتانیا بعد از ۱۹۴۵ برای ترک مستعمره‌هایش آماده‌تر بود؟' },
        choices: [
          { en: 'World War II left Britain weak and in debt', es: 'La Segunda Guerra Mundial dejó a Gran Bretaña débil y endeudada', fa: 'جنگ جهانی دوم بریتانیا را ضعیف و قرضدار ساخت' },
          { en: 'Its colonies asked Britain to stay forever', es: 'Sus colonias le pidieron que se quedara para siempre', fa: 'مستعمره‌ها از بریتانیا خواستند برای همیشه بماند' },
          { en: 'Britain had won many new colonies in the war', es: 'Gran Bretaña había ganado muchas colonias nuevas en la guerra', fa: 'بریتانیا در جنگ مستعمره‌های نو زیاد گرفته بود' },
          { en: 'The colonies had no more goods to sell it', es: 'Las colonias ya no tenían nada que venderle', fa: 'مستعمره‌ها دیگر جنسی برای فروش به آن نداشتند' }],
        answer: 0,
        why: { en: 'The war cost Britain huge amounts of money. And people in its colonies pushed hard for freedom.', es: 'La guerra le costó muchísimo dinero. Y la gente de sus colonias presionó mucho por la libertad.', fa: 'جنگ پول بسیار زیاد از بریتانیا گرفت. و مردم مستعمره‌ها برای آزادی سخت فشار آوردند.' } },
      { q: { en: 'What did Ghana\'s freedom in 1957 do for the rest of Africa?', es: '¿Qué hizo la libertad de Ghana en 1957 por el resto de África?', fa: 'آزادی گانا در ۱۹۵۷ برای باقی افریقا چه کرد؟' },
        choices: [
          { en: 'It inspired other colonies to seek freedom', es: 'Inspiró a otras colonias a buscar la libertad', fa: 'به مستعمره‌های دیگر برای آزادی الهام داد' },
          { en: 'It made all of Africa one big country', es: 'Convirtió a toda África en un solo país', fa: 'تمام افریقا را یک کشور بزرگ ساخت' },
          { en: 'It ended every bit of trade between Africa and Europe', es: 'Terminó con todo el comercio entre África y Europa', fa: 'هر نوع تجارت میان افریقا و اروپا را ختم کرد' },
          { en: 'It gave Ghana\'s land back to Britain', es: 'Devolvió la tierra de Ghana a Gran Bretaña', fa: 'زمین گانا را دوباره به بریتانیا داد' }],
        answer: 0,
        why: { en: 'Ghana showed it could be done. In 1960 alone, 17 African countries became independent.', es: 'Ghana mostró que se podía. Solo en 1960, 17 países africanos se independizaron.', fa: 'گانا نشان داد این کار شدنی است. فقط در ۱۹۶۰، ۱۷ کشور افریقایی مستقل شدند.' } },
      { q: { en: 'Nehru said in 1947: "India will awake to life and freedom." What kind of source is this?', es: 'Nehru dijo en 1947: "India despertará a la vida y a la libertad". ¿Qué tipo de fuente es?', fa: 'نهرو در ۱۹۴۷ گفت: «هند به زندگی و آزادی بیدار می‌شود.» این چه نوع منبع است؟' },
        choices: [
          { en: 'A primary source from that time', es: 'Una fuente primaria de esa época', fa: 'یک منبع اصلی از همان زمان' },
          { en: 'A secondary source from today', es: 'Una fuente secundaria de hoy', fa: 'یک منبع دوم از امروز' },
          { en: 'A map of India drawn by Britain', es: 'Un mapa de India hecho por Gran Bretaña', fa: 'نقشهٔ هند که بریتانیا کشید' },
          { en: 'A made-up story with no facts', es: 'Un cuento inventado sin hechos', fa: 'یک قصهٔ ساختگی بدون حقیقت' }],
        answer: 0,
        why: { en: 'Words spoken by a person at the time, like Nehru\'s speech, are a primary source.', es: 'Las palabras dichas por alguien en esa época, como el discurso de Nehru, son una fuente primaria.', fa: 'گفته‌های یک نفر در همان زمان، مثل سخنرانی نهرو، منبع اصلی هستند.' } }
    ]
  },

  learned: [
    { en: 'After World War II, many [[colony|colonies]] in Asia and Africa won [[independence|independence]].', es: 'Después de la Segunda Guerra Mundial, muchas [[colony|colonias]] de Asia y África ganaron su [[independence|independencia]].', fa: 'بعد از جنگ جهانی دوم، بسیاری از [[colony|مستعمره‌ها]] در آسیا و افریقا [[independence|استقلال]] گرفتند.' },
    { en: 'Gandhi led India\'s [[nonviolence|nonviolent]] protest. India was free in 1947, but the [[partition|partition]] cost many lives.', es: 'Gandhi dirigió la protesta [[nonviolence|no violenta]] de India. India fue libre en 1947, pero la [[partition|partición]] costó muchas vidas.', fa: 'گاندی اعتراض [[nonviolence|بدون خشونت]] هند را رهبری کرد. هند در ۱۹۴۷ آزاد شد، اما [[partition|تقسیم]] جان بسیاری را گرفت.' },
    { en: 'Nkrumah led the Gold Coast to freedom as Ghana in 1957. Many African countries followed.', es: 'Nkrumah llevó a la Costa de Oro a la libertad como Ghana en 1957. Muchos países africanos la siguieron.', fa: 'نکرومه ساحل طلا را در ۱۹۵۷ به نام گانا آزاد کرد. بسیاری از کشورهای افریقایی دنبالش آمدند.' }
  ],
  reflect: {
    q: { en: 'Gandhi and Nkrumah used protest without weapons. When could peaceful protest help in your life?', es: 'Gandhi y Nkrumah protestaron sin armas. ¿Cuándo podría ayudar una protesta pacífica en tu vida?', fa: 'گاندی و نکرومه بدون سلاح اعتراض کردند. اعتراض صلح‌آمیز چه وقت در زندگی تو کمک کرده می‌تواند؟' },
    starter: { en: 'Peaceful protest could help when', es: 'Una protesta pacífica podría ayudar cuando', fa: 'اعتراض صلح‌آمیز می‌تواند کمک کند وقتی' }
  }
};
