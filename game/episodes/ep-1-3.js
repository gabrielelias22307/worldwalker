/* WORLDWALKER · Episode 1.3 · Resources & Work (WG.2 / WG.3)
   Natural, human and capital resources; resources are spread unevenly, so places trade; land use.
   NW: timber woods with a woodcutter's cabin. NE: mountains with a mine (rail track runs into the tunnel).
   SW: farm fields, a pond and a well. SE: the workshop town: factory, bakery and market. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'WG.2',
  title: { en: 'Resources & Work', es: 'Recursos y trabajo', fa: 'منابع و کار' },
  place: { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
  intro: [
    { en: 'Pip: "The Smudge mixed up everything people use to make things! The bakery has no flour and the mine is quiet. Talk to the miner, the baker and the farmer. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón revolvió todo lo que la gente usa para hacer cosas! La panadería no tiene harina y la mina está en silencio. Habla con el minero, la panadera y la agricultora. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه همهٔ چیزهایی را که مردم برای ساختن به کار می‌برند به هم زد! نانوایی آرد ندارد و معدن خاموش است. با معدنچی، نانوا و دهقان گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens. Each corner shows a different kind of work. */
  map: [
    'TTTTTTTTTTTTTTTTMMMMMMMMMMMMMMMM',
    'TPPTPPTP..PTPPT.MMMMMMMM|MMMMMMM',
    'TPTPP..P.RRR.PT.KMMMMMMM|MMMMMKM',
    'TPP.P.T..hdh..P..KMMMrr.|.rrMMMM',
    'TP..x.....:...T...KK.r..|..rKMMM',
    'TPT...PT..:..P......,...f..r.KMM',
    'TP.P..P...:::::::::::::::.....KM',
    'TPPT.P...P:.T......r...:...T...M',
    'TPP..PT..::.......T....:....,..M',
    'TPTP..P..:.............:.......M',
    'TPPTP....:...,.........:.......M',
    'T..,.....:.............:.......T',
    'T.oo1o1o.:.wwww..XX....:..RRRR.T',
    'T.o2o2oo.:.wwww..XX....:..hdhh.T',
    'T.oo1o2o.:.wwww........:.......T',
    'T........::::::::::::::::::::..T',
    'T.~~~~..O.:......mmm.....x.mmm.T',
    'T.~~~~....:.oo1o...............T',
    'T..~~.....:.o2oo...,...QQQ...T.T',
    'T......RRR:.oooo.......hhd.....T',
    'T..,...hdh......T..............T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [10, 4],

  words: {
    resource: { en: 'anything people use to make or do something', es: 'cualquier cosa que la gente usa para hacer o producir algo', fa: 'هر چیزی که مردم برای ساختن یا انجام کاری به کار می‌برند' },
    'natural resource': { en: 'something useful that comes from the earth, like water, soil, trees, oil or metals', es: 'algo útil que viene de la tierra, como agua, suelo, árboles, petróleo o metales', fa: 'چیز مفیدی که از زمین می‌آید، مثل آب، خاک، درخت، تیل یا فلز' },
    'human resource': { en: 'the people who do the work, with their skills and training', es: 'las personas que hacen el trabajo, con sus habilidades y su preparación', fa: 'مردمی که کار می‌کنند، با مهارت و آموزش خود' },
    'capital resource': { en: 'a thing people made to help make other things, like a tool, a machine, a building or a truck', es: 'algo que la gente fabricó para ayudar a hacer otras cosas, como una herramienta, una máquina, un edificio o un camión', fa: 'چیزی که مردم ساخته‌اند تا با آن چیزهای دیگر بسازند، مثل ابزار، ماشین، تعمیر یا لاری' },
    'land use': { en: 'how people use land, such as for farming, building or mining', es: 'cómo la gente usa la tierra, por ejemplo para sembrar, construir o hacer minas', fa: 'اینکه مردم زمین را چطور به کار می‌برند، مثل زراعت، ساختمان یا معدن' },
    trade: { en: 'buying and selling goods between people, places or countries', es: 'comprar y vender productos entre personas, lugares o países', fa: 'خرید و فروش اجناس میان مردم، جاها یا کشورها' }
  },

  npcs: [
    {
      x: 23, y: 5,
      name: { en: 'Dawit', es: 'Dawit', fa: 'داویت' },
      role: { en: 'Miner', es: 'Minero', fa: 'معدنچی' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a030', pants: '#3a3a4a' },
      lines: [
        { en: 'Hello! I dig in this mine. Rocks, metals, oil, water, soil and trees all come from the earth. They are [[natural resource|natural resources]].',
          es: '¡Hola! Yo trabajo en esta mina. Las rocas, los metales, el petróleo, el agua, el suelo y los árboles vienen de la tierra. Son [[natural resource|recursos naturales]].',
          fa: 'سلام! من در این معدن کار می‌کنم. سنگ، فلز، تیل، آب، خاک و درخت همه از زمین می‌آیند. این‌ها [[natural resource|منابع طبیعی]] هستند.',
          easy: { en: 'Things from the earth, like metal, water and trees, are [[natural resource|natural resources]].', es: 'Las cosas de la tierra, como metal, agua y árboles, son [[natural resource|recursos naturales]].', fa: 'چیزهایی که از زمین می‌آیند، مثل فلز، آب و درخت، [[natural resource|منابع طبیعی]] هستند.' } },
        { en: 'No two places hold the same natural resources. Huge oil fields sit under the desert in Saudi Arabia. The Democratic Republic of the Congo holds a large share of the world\'s cobalt.',
          es: 'No hay dos lugares con los mismos recursos naturales. Hay enormes campos de petróleo bajo el desierto de Arabia Saudita. La República Democrática del Congo tiene gran parte del cobalto del mundo.',
          fa: 'هیچ دو جایی منابع طبیعی یکسان ندارند. زیر ریگستان عربستان سعودی ساحه‌های بزرگ تیل است. جمهوری دموکراتیک کانگو بخش بزرگی از کوبالت جهان را دارد.',
          easy: { en: 'Each place has different resources. Saudi Arabia has oil. The Congo has cobalt.', es: 'Cada lugar tiene recursos distintos. Arabia Saudita tiene petróleo. El Congo tiene cobalto.', fa: 'هر جا منابع مختلف دارد. عربستان سعودی تیل دارد. کانگو کوبالت دارد.' } },
        { en: 'Cobalt is a metal used inside batteries for phones and cars. Towns, roads and worker camps grew up around those mines. That is [[land use|land use]]: how people use the land.',
          es: 'El cobalto es un metal que se usa en las baterías de teléfonos y carros. Alrededor de esas minas crecieron pueblos, caminos y campamentos de trabajadores. Eso es el [[land use|uso del suelo]]: cómo la gente usa la tierra.',
          fa: 'کوبالت فلزی است که در بتری موبایل و موتر به کار می‌رود. دور آن معدن‌ها شهرک، سرک و کمپ کارگران ساخته شد. این [[land use|استفاده از زمین]] است: اینکه مردم زمین را چطور به کار می‌برند.',
          easy: { en: 'Cobalt goes into phone batteries. Mines changed the land around them. That is [[land use|land use]].', es: 'El cobalto va en las baterías de los teléfonos. Las minas cambiaron la tierra a su alrededor. Eso es el [[land use|uso del suelo]].', fa: 'کوبالت در بتری موبایل می‌رود. معدن‌ها زمین دور خود را تغییر دادند. این [[land use|استفاده از زمین]] است.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why can\'t every country build oil wells like Saudi Arabia?', es: '¿Por qué no todos los países pueden construir pozos de petróleo como Arabia Saudita?', fa: 'چرا هر کشور نمی‌تواند مثل عربستان سعودی چاه تیل بسازد؟' },
        choices: [
          { ok: true, t: { en: 'Not every country has oil under its ground', es: 'No todos los países tienen petróleo bajo su suelo', fa: 'هر کشور زیر زمین خود تیل ندارد' },
            why: { en: 'Right. Natural resources are spread unevenly, so each place builds around what it has.', es: 'Correcto. Los recursos naturales están repartidos de forma desigual, así que cada lugar se organiza con lo que tiene.', fa: 'درست. منابع طبیعی نابرابر پخش شده‌اند، پس هر جا با آنچه دارد کار می‌کند.' } },
          { t: { en: 'Other countries do not use oil', es: 'Los otros países no usan petróleo', fa: 'کشورهای دیگر تیل به کار نمی‌برند' },
            why: { en: 'Almost every country uses oil. Many have to buy it from other places.', es: 'Casi todos los países usan petróleo. Muchos tienen que comprarlo a otros lugares.', fa: 'تقریباً هر کشور تیل به کار می‌برد. بسیاری باید آن را از جاهای دیگر بخرند.' } },
          { t: { en: 'Oil wells only work in a desert', es: 'Los pozos de petróleo solo funcionan en el desierto', fa: 'چاه تیل فقط در ریگستان کار می‌کند' },
            why: { en: 'Wells are dug wherever oil is found, even under the sea. The key is having the oil.', es: 'Los pozos se hacen donde haya petróleo, hasta bajo el mar. Lo importante es tener el petróleo.', fa: 'چاه هر جا که تیل پیدا شود کنده می‌شود، حتی زیر بحر. مهم داشتن تیل است.' } }
        ]
      }
    },
    {
      x: 26, y: 14,
      name: { en: 'Yasmin', es: 'Yasmin', fa: 'یاسمین' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 1, hair: '#2a1a12', shirt: '#b03a5a', pants: '#3a2a3a', robe: true },
      lines: [
        { en: 'Salaam! Smell that bread? My bakery needs three kinds of [[resource|resources]]. First, wheat for my flour. Wheat grows from the earth, so it is a [[natural resource|natural resource]].',
          es: '¡Salam! ¿Hueles ese pan? Mi panadería necesita tres tipos de [[resource|recursos]]. Primero, trigo para mi harina. El trigo crece de la tierra, así que es un [[natural resource|recurso natural]].',
          fa: 'سلام! بوی نان را حس می‌کنی؟ نانوایی من سه نوع [[resource|منبع]] لازم دارد. اول، گندم برای آرد. گندم از زمین می‌روید، پس [[natural resource|منبع طبیعی]] است.',
          easy: { en: 'My bakery needs three kinds of [[resource|resources]]. Wheat is a [[natural resource|natural resource]].', es: 'Mi panadería necesita tres tipos de [[resource|recursos]]. El trigo es un [[natural resource|recurso natural]].', fa: 'نانوایی من سه نوع [[resource|منبع]] لازم دارد. گندم [[natural resource|منبع طبیعی]] است.' } },
        { en: 'Second, me! I know how to shape the dough. People and their skills are [[human resource|human resources]]. A trained nurse or a skilled driver is a human resource too.',
          es: 'Segundo, ¡yo! Sé cómo darle forma a la masa. Las personas y sus habilidades son [[human resource|recursos humanos]]. Una enfermera preparada o un buen chofer también son recursos humanos.',
          fa: 'دوم، خودم! من می‌دانم خمیر را چطور شکل بدهم. مردم و مهارت‌هایشان [[human resource|منابع انسانی]] هستند. یک نرس آموزش‌دیده یا یک دریور ماهر هم منبع انسانی است.',
          easy: { en: 'I am the baker. People and their skills are [[human resource|human resources]].', es: 'Yo soy la panadera. Las personas y sus habilidades son [[human resource|recursos humanos]].', fa: 'من نانوا هستم. مردم و مهارت‌هایشان [[human resource|منابع انسانی]] هستند.' } },
        { en: 'Third, my oven. People built it to help make bread. That makes it a [[capital resource|capital resource]]. Take away the wheat, the baker or the oven, and the bakery stops.',
          es: 'Tercero, mi horno. La gente lo construyó para ayudar a hacer pan. Eso lo hace un [[capital resource|recurso de capital]]. Si quitas el trigo, la panadera o el horno, la panadería se detiene.',
          fa: 'سوم، تنور من. مردم آن را ساختند تا در پختن نان کمک کند. پس [[capital resource|منبع سرمایه‌ای]] است. اگر گندم، نانوا یا تنور را برداری، نانوایی از کار می‌ماند.',
          easy: { en: 'My oven is a [[capital resource|capital resource]]: a tool people made. I need all three.', es: 'Mi horno es un [[capital resource|recurso de capital]]: una herramienta hecha por personas. Necesito los tres.', fa: 'تنور من [[capital resource|منبع سرمایه‌ای]] است: ابزاری که مردم ساخته‌اند. من هر سه را لازم دارم.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is a capital resource in the bakery?', es: '¿Cuál es un recurso de capital en la panadería?', fa: 'کدام یک در نانوایی منبع سرمایه‌ای است؟' },
        choices: [
          { ok: true, t: { en: 'The oven', es: 'El horno', fa: 'تنور' },
            why: { en: 'Yes! The oven is a thing people made to help make bread.', es: '¡Sí! El horno es algo que la gente hizo para ayudar a hacer pan.', fa: 'بله! تنور چیزی است که مردم ساختند تا در پختن نان کمک کند.' } },
          { t: { en: 'The wheat', es: 'El trigo', fa: 'گندم' },
            why: { en: 'Wheat grows from the earth. It is a natural resource.', es: 'El trigo crece de la tierra. Es un recurso natural.', fa: 'گندم از زمین می‌روید. منبع طبیعی است.' } },
          { t: { en: 'The baker', es: 'La panadera', fa: 'نانوا' },
            why: { en: 'The baker is a person with skills. She is a human resource.', es: 'La panadera es una persona con habilidades. Es un recurso humano.', fa: 'نانوا یک انسان با مهارت است. او منبع انسانی است.' } }
        ]
      }
    },
    {
      x: 8, y: 13,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Farmer', es: 'Agricultora', fa: 'دهقان' },
      look: { skin: 4, hair: '#1b1410', shirt: '#3fa34d', pants: '#5a4630' },
      lines: [
        { en: 'Good soil is a resource too, not only metal or oil. My family came from Brazil. Brazil has some of the richest farmland on Earth.',
          es: 'La buena tierra también es un recurso, no solo el metal o el petróleo. Mi familia vino de Brasil. Brasil tiene algunas de las tierras de cultivo más ricas del mundo.',
          fa: 'خاک خوب هم یک منبع است، نه فقط فلز یا تیل. خانوادهٔ من از برازیل آمده. برازیل یکی از حاصل‌خیزترین زمین‌های زراعتی جهان را دارد.',
          easy: { en: 'Good soil is a resource too. Brazil has very rich farmland.', es: 'La buena tierra también es un recurso. Brasil tiene tierras de cultivo muy ricas.', fa: 'خاک خوب هم منبع است. برازیل زمین زراعتی بسیار خوب دارد.' } },
        { en: 'Some of that farmland pushes into the edge of the Amazon Rainforest. Farmers need the space to feed their families. Scientists want the forest left alone, because the trees hold carbon and many kinds of animals.',
          es: 'Parte de esas tierras de cultivo entra en el borde de la selva amazónica. Los agricultores necesitan el espacio para alimentar a sus familias. Los científicos quieren que el bosque se quede como está, porque los árboles guardan carbono y muchos tipos de animales.',
          fa: 'بخشی از آن زمین‌های زراعتی به کنارهٔ جنگل بارانی آمازون می‌رسد. دهقانان برای نان خانواده‌شان به این زمین ضرورت دارند. دانشمندان می‌خواهند جنگل دست نخورده بماند، چون درختان کاربن و انواع زیادی از حیوانات را نگه می‌دارند.',
          easy: { en: 'Farmers want to clear some rainforest for farms. Scientists want to keep the forest.', es: 'Los agricultores quieren despejar parte de la selva para sembrar. Los científicos quieren cuidar el bosque.', fa: 'دهقانان می‌خواهند بخشی از جنگل را برای زراعت پاک کنند. دانشمندان می‌خواهند جنگل بماند.' } },
        { en: 'Both sides have a real reason. So every resource comes with a question about [[land use|land use]]: who decides what the land becomes?',
          es: 'Los dos lados tienen una razón real. Por eso cada recurso trae una pregunta sobre el [[land use|uso del suelo]]: ¿quién decide en qué se convierte la tierra?',
          fa: 'هر دو طرف دلیل واقعی دارند. پس هر منبع یک سوال دربارهٔ [[land use|استفاده از زمین]] با خود دارد: چه کسی تصمیم می‌گیرد زمین چه شود؟',
          easy: { en: 'Both sides have a reason. Who decides how to use the land?', es: 'Los dos lados tienen una razón. ¿Quién decide cómo usar la tierra?', fa: 'هر دو طرف دلیل دارند. چه کسی تصمیم می‌گیرد زمین چطور به کار برود؟' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why do people disagree about clearing land at the edge of the Amazon Rainforest?', es: '¿Por qué la gente no se pone de acuerdo sobre despejar tierra en el borde de la selva amazónica?', fa: 'چرا مردم سر پاک کردن زمین در کنارهٔ جنگل بارانی آمازون موافق نیستند؟' },
        choices: [
          { ok: true, t: { en: 'Farmers need the land, and scientists want to protect the forest', es: 'Los agricultores necesitan la tierra y los científicos quieren proteger el bosque', fa: 'دهقانان به زمین ضرورت دارند و دانشمندان می‌خواهند جنگل را حفظ کنند' },
            why: { en: 'Yes. Both sides can point to a real reason for their view.', es: 'Sí. Los dos lados tienen una razón real para pensar así.', fa: 'بله. هر دو طرف برای نظر خود دلیل واقعی دارند.' } },
          { t: { en: 'The soil there is too poor to farm', es: 'La tierra allí es demasiado pobre para sembrar', fa: 'خاک آنجا برای زراعت خیلی ضعیف است' },
            why: { en: 'Ana said Brazil has some of the richest farmland on Earth. That is why farms spread.', es: 'Ana dijo que Brasil tiene tierras muy ricas. Por eso las granjas se extienden.', fa: 'آنا گفت برازیل زمین بسیار خوب دارد. به همین خاطر فارم‌ها پخش می‌شوند.' } },
          { t: { en: 'Nobody uses the land near the Amazon', es: 'Nadie usa la tierra cerca del Amazonas', fa: 'هیچ کس زمین نزدیک آمازون را به کار نمی‌برد' },
            why: { en: 'Many people use it, for farms, for cattle and for study. That is why they disagree.', es: 'Mucha gente la usa, para sembrar, para el ganado y para estudiar. Por eso no están de acuerdo.', fa: 'بسیاری آن را به کار می‌برند، برای زراعت، مالداری و تحقیق. به همین خاطر موافق نیستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 4, text: { en: 'TIMBER WOODS · The trees are a [[natural resource|natural resource]]. The woodcutter is a [[human resource|human resource]]. The saw is a [[capital resource|capital resource]].',
      es: 'BOSQUE DE MADERA · Los árboles son un [[natural resource|recurso natural]]. El leñador es un [[human resource|recurso humano]]. La sierra es un [[capital resource|recurso de capital]].',
      fa: 'جنگل چوب · درختان [[natural resource|منبع طبیعی]] هستند. چوب‌بُر [[human resource|منبع انسانی]] است. اره [[capital resource|منبع سرمایه‌ای]] است.' } },
    { x: 25, y: 16, text: { en: 'VALLEY MARKET · No place has every resource it needs. We sell what we have plenty of and buy what we lack. That is [[trade|trade]].',
      es: 'MERCADO DEL VALLE · Ningún lugar tiene todos los recursos que necesita. Vendemos lo que nos sobra y compramos lo que nos falta. Eso es el [[trade|comercio]].',
      fa: 'بازار دره · هیچ جا همهٔ منابع لازم را ندارد. چیزی را که زیاد داریم می‌فروشیم و چیزی را که نداریم می‌خریم. این [[trade|تجارت]] است.' } }
  ],

  scraps: [[24, 1], [3, 3], [1, 20]],
  smudges: [[12, 8], [5, 18]],

  challenge: {
    at: [20, 13],
    type: 'sort',
    stat: 'hei',
    title: { en: 'Natural, human or capital?', es: '¿Natural, humano o de capital?', fa: 'طبیعی، انسانی یا سرمایه‌ای؟' },
    intro: { en: 'The Smudge dumped the valley\'s resources in one big pile. Put each card in the right group.',
      es: 'El Borrón tiró todos los recursos del valle en un solo montón. Pon cada tarjeta en el grupo correcto.',
      fa: 'لکه همهٔ منابع دره را در یک توده ریخت. هر کارت را در گروه درست بگذار.' },
    bins: [
      { id: 'nat', icon: '🌳', label: { en: 'Natural resource', es: 'Recurso natural', fa: 'منبع طبیعی' }, sub: { en: 'comes from the earth', es: 'viene de la tierra', fa: 'از زمین می‌آید' } },
      { id: 'hum', icon: '🧑‍🔧', label: { en: 'Human resource', es: 'Recurso humano', fa: 'منبع انسانی' }, sub: { en: 'people and their skills', es: 'personas y sus habilidades', fa: 'مردم و مهارت‌هایشان' } },
      { id: 'cap', icon: '🛠️', label: { en: 'Capital resource', es: 'Recurso de capital', fa: 'منبع سرمایه‌ای' }, sub: { en: 'things people made to make other things', es: 'cosas hechas para hacer otras cosas', fa: 'چیزهایی که برای ساختن چیزهای دیگر ساخته شده' } }
    ],
    items: [
      { bin: 'nat', t: { en: 'Water in the river', es: 'El agua del río', fa: 'آب دریا' },
        why: { en: 'Water comes from the earth. Nobody made it, so it is a natural resource.', es: 'El agua viene de la tierra. Nadie la fabricó, así que es un recurso natural.', fa: 'آب از زمین می‌آید. کسی آن را نساخته، پس منبع طبیعی است.' } },
      { bin: 'nat', t: { en: 'Trees in the forest', es: 'Los árboles del bosque', fa: 'درختان جنگل' },
        why: { en: 'Trees grow on their own from the earth. They are a natural resource.', es: 'Los árboles crecen solos de la tierra. Son un recurso natural.', fa: 'درختان خودشان از زمین می‌رویند. منبع طبیعی هستند.' } },
      { bin: 'nat', t: { en: 'Gold in the ground in Ghana', es: 'El oro bajo la tierra en Ghana', fa: 'طلا در زیر خاک غانا' },
        why: { en: 'Gold is a mineral from the earth. It is a natural resource.', es: 'El oro es un mineral de la tierra. Es un recurso natural.', fa: 'طلا یک معدنی از زمین است. منبع طبیعی است.' } },
      { bin: 'hum', t: { en: 'The baker who shapes the dough', es: 'La panadera que le da forma a la masa', fa: 'نانوایی که خمیر را شکل می‌دهد' },
        why: { en: 'The baker is a person doing the work. That is a human resource.', es: 'La panadera es una persona que hace el trabajo. Es un recurso humano.', fa: 'نانوا یک انسان است که کار می‌کند. این منبع انسانی است.' } },
      { bin: 'hum', t: { en: 'A trained nurse', es: 'Una enfermera preparada', fa: 'یک نرس آموزش‌دیده' },
        why: { en: 'A nurse is a person with skills and training. That is a human resource.', es: 'Una enfermera es una persona con habilidades y preparación. Es un recurso humano.', fa: 'نرس انسانی با مهارت و آموزش است. این منبع انسانی است.' } },
      { bin: 'hum', t: { en: 'A miner who knows how to dig safely', es: 'Un minero que sabe excavar con cuidado', fa: 'معدنچی‌ای که می‌داند چطور با احتیاط کار کند' },
        why: { en: 'The miner\'s skill is what counts here. People and skills are human resources.', es: 'Aquí lo que cuenta es la habilidad del minero. Las personas y sus habilidades son recursos humanos.', fa: 'اینجا مهارت معدنچی مهم است. مردم و مهارت‌ها منابع انسانی هستند.' } },
      { bin: 'cap', t: { en: 'The oven in the bakery', es: 'El horno de la panadería', fa: 'تنور نانوایی' },
        why: { en: 'People built the oven to help make bread. It is a capital resource.', es: 'La gente construyó el horno para ayudar a hacer pan. Es un recurso de capital.', fa: 'مردم تنور را ساختند تا در پختن نان کمک کند. منبع سرمایه‌ای است.' } },
      { bin: 'cap', t: { en: 'A delivery truck', es: 'Un camión de reparto', fa: 'لاری بار' },
        why: { en: 'A truck is a machine people made to move goods. It is a capital resource.', es: 'Un camión es una máquina hecha para mover productos. Es un recurso de capital.', fa: 'لاری ماشینی است که مردم برای بردن اجناس ساخته‌اند. منبع سرمایه‌ای است.' } },
      { bin: 'cap', t: { en: 'A tractor on the farm', es: 'Un tractor en la granja', fa: 'تراکتور در فارم' },
        why: { en: 'A tractor is a machine that helps grow food. It is a capital resource.', es: 'Un tractor es una máquina que ayuda a producir comida. Es un recurso de capital.', fa: 'تراکتور ماشینی است که در تولید غذا کمک می‌کند. منبع سرمایه‌ای است.' } }
    ],
    success: { en: 'The bakery oven is warm, the mine is busy, and the market is open again!', es: '¡El horno de la panadería está caliente, la mina trabaja y el mercado abrió otra vez!', fa: 'تنور نانوایی گرم است، معدن دوباره کار می‌کند و بازار باز شده!' }
  },

  boss: {
    at: [22, 17],
    stat: 'mov',
    need: 3,
    name: { en: 'The Rust Smudge', es: 'El Borrón Oxidado', fa: 'لکهٔ زنگ‌زده' },
    appear: { en: 'The Rust Smudge is creeping through the market in the south-east!', es: '¡El Borrón Oxidado se arrastra por el mercado en el sureste!', fa: 'لکهٔ زنگ‌زده در بازار جنوب شرق می‌خزد!' },
    taunt: { en: 'Creak! I rust every tool and spoil every field. With no resources, nobody can make anything!', es: '¡Crac! Oxido cada herramienta y daño cada campo. ¡Sin recursos, nadie puede hacer nada!', fa: 'غژ! من هر ابزار را زنگ می‌زنم و هر زمین را خراب می‌کنم. بدون منابع، هیچ کس چیزی ساخته نمی‌تواند!' },
    win: { en: 'The rust flakes away and every tool shines. Atlas page 1.3 floats down into your hands!', es: 'El óxido se cae y cada herramienta brilla. ¡La página 1.3 del atlas cae en tus manos!', fa: 'زنگ می‌ریزد و هر ابزار برق می‌زند. صفحهٔ ۱.۳ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which one is a natural resource?', es: '¿Cuál es un recurso natural?', fa: 'کدام یک منبع طبیعی است؟' },
        choices: [{ en: 'Trees in a forest', es: 'Los árboles de un bosque', fa: 'درختان یک جنگل' }, { en: 'A truck', es: 'Un camión', fa: 'یک لاری' }, { en: 'A factory', es: 'Una fábrica', fa: 'یک فابریکه' }, { en: 'A teacher', es: 'Un maestro', fa: 'یک معلم' }], answer: 0,
        why: { en: 'Trees come from the earth. A truck and a factory are capital. A teacher is a human resource.', es: 'Los árboles vienen de la tierra. El camión y la fábrica son de capital. El maestro es un recurso humano.', fa: 'درخت از زمین می‌آید. لاری و فابریکه سرمایه‌ای هستند. معلم منبع انسانی است.' } },
      { q: { en: 'Which one is a human resource?', es: '¿Cuál es un recurso humano?', fa: 'کدام یک منبع انسانی است؟' },
        choices: [{ en: 'The baker who makes the bread', es: 'La panadera que hace el pan', fa: 'نانوایی که نان می‌پزد' }, { en: 'The wheat in the field', es: 'El trigo del campo', fa: 'گندم در زمین' }, { en: 'The oven in the shop', es: 'El horno de la tienda', fa: 'تنور در دکان' }, { en: 'The water in the river', es: 'El agua del río', fa: 'آب دریا' }], answer: 0,
        why: { en: 'Human resources are the people who do the work, with their skills.', es: 'Los recursos humanos son las personas que hacen el trabajo, con sus habilidades.', fa: 'منابع انسانی مردمی هستند که با مهارت خود کار می‌کنند.' } },
      { q: { en: 'Which one is a capital resource?', es: '¿Cuál es un recurso de capital?', fa: 'کدام یک منبع سرمایه‌ای است؟' },
        choices: [{ en: 'The oven in a bakery', es: 'El horno de una panadería', fa: 'تنور یک نانوایی' }, { en: 'The soil in a field', es: 'El suelo de un campo', fa: 'خاک یک زمین' }, { en: 'The rain that falls', es: 'La lluvia que cae', fa: 'بارانی که می‌بارد' }, { en: 'The gold in the ground', es: 'El oro bajo la tierra', fa: 'طلا در زیر زمین' }], answer: 0,
        why: { en: 'A capital resource is a thing people made to make other things, like an oven.', es: 'Un recurso de capital es algo hecho por personas para hacer otras cosas, como un horno.', fa: 'منبع سرمایه‌ای چیزی است که مردم ساخته‌اند تا با آن چیزهای دیگر بسازند، مثل تنور.' } },
      { q: { en: 'Why do countries trade with each other?', es: '¿Por qué los países comercian entre sí?', fa: 'چرا کشورها با هم تجارت می‌کنند؟' },
        choices: [{ en: 'No country has every resource it needs', es: 'Ningún país tiene todos los recursos que necesita', fa: 'هیچ کشوری همهٔ منابع لازم را ندارد' }, { en: 'A law says every country must trade', es: 'Una ley dice que todos los países deben comerciar', fa: 'قانون می‌گوید هر کشور باید تجارت کند' }, { en: 'All countries have the same things', es: 'Todos los países tienen las mismas cosas', fa: 'همهٔ کشورها چیزهای یکسان دارند' }, { en: 'They want to share their extra workers', es: 'Quieren compartir sus trabajadores de sobra', fa: 'می‌خواهند کارگران اضافی خود را شریک کنند' }], answer: 0,
        why: { en: 'Resources are spread unevenly. A country sells what it has plenty of and buys what it lacks.', es: 'Los recursos están repartidos de forma desigual. Un país vende lo que le sobra y compra lo que le falta.', fa: 'منابع نابرابر پخش شده‌اند. یک کشور آنچه زیاد دارد می‌فروشد و آنچه ندارد می‌خرد.' } },
      { q: { en: 'Oil sat underground for millions of years and nobody wanted it. Then people built engines that burned it. What does this show?', es: 'El petróleo estuvo bajo tierra millones de años y nadie lo quería. Luego la gente hizo motores que lo quemaban. ¿Qué muestra esto?', fa: 'تیل میلیون‌ها سال زیر زمین بود و کسی آن را نمی‌خواست. بعد مردم انجن‌هایی ساختند که آن را می‌سوزاند. این چه نشان می‌دهد؟' },
        choices: [{ en: 'What counts as a resource can change over time', es: 'Lo que cuenta como recurso puede cambiar con el tiempo', fa: 'اینکه چه چیز منبع حساب شود با گذشت زمان تغییر می‌کند' }, { en: 'Oil is the only resource that ever changed in value', es: 'El petróleo es el único recurso que cambió de valor', fa: 'تیل تنها منبعی است که ارزشش تغییر کرد' }, { en: 'Natural resources are worth more than capital resources', es: 'Los recursos naturales valen más que los de capital', fa: 'منابع طبیعی از منابع سرمایه‌ای با ارزش‌ترند' }, { en: 'Machines matter more than the people who run them', es: 'Las máquinas importan más que las personas que las usan', fa: 'ماشین‌ها از مردمی که آن‌ها را می‌رانند مهم‌ترند' }], answer: 0,
        why: { en: 'A new tool, the engine, made oil useful. So what counts as a resource can change.', es: 'Una nueva herramienta, el motor, hizo útil el petróleo. Así que lo que cuenta como recurso puede cambiar.', fa: 'یک ابزار تازه، یعنی انجن، تیل را مفید ساخت. پس اینکه چه چیز منبع است تغییر می‌کند.' } },
      { q: { en: 'What does land use mean?', es: '¿Qué significa uso del suelo?', fa: 'استفاده از زمین یعنی چه؟' },
        choices: [{ en: 'How people use land, such as for farming, building or mining', es: 'Cómo la gente usa la tierra, por ejemplo para sembrar, construir o hacer minas', fa: 'اینکه مردم زمین را چطور به کار می‌برند، مثل زراعت، ساختمان یا معدن' }, { en: 'How much rain falls on the land', es: 'Cuánta lluvia cae sobre la tierra', fa: 'چقدر باران روی زمین می‌بارد' }, { en: 'How much a piece of land costs', es: 'Cuánto cuesta un terreno', fa: 'یک قطعه زمین چند قیمت دارد' }, { en: 'How high the land is above the sea', es: 'Qué tan alta está la tierra sobre el mar', fa: 'زمین چقدر از بحر بلندتر است' }], answer: 0,
        why: { en: 'Land use is what people do with the land: farms, towns, mines or forests.', es: 'El uso del suelo es lo que la gente hace con la tierra: granjas, pueblos, minas o bosques.', fa: 'استفاده از زمین یعنی مردم با زمین چه می‌کنند: فارم، شهرک، معدن یا جنگل.' } },
      { q: { en: 'How did oil change land use in Saudi Arabia?', es: '¿Cómo cambió el petróleo el uso del suelo en Arabia Saudita?', fa: 'تیل استفاده از زمین را در عربستان سعودی چطور تغییر داد؟' },
        choices: [{ en: 'Wells, pipelines and refineries now cover land that was open desert', es: 'Pozos, oleoductos y refinerías cubren ahora tierra que era desierto abierto', fa: 'حالا چاه، نل تیل و پالایشگاه زمینی را پوشانده که پیش‌تر ریگستان خالی بود' }, { en: 'The desert turned into a rainforest', es: 'El desierto se convirtió en selva', fa: 'ریگستان به جنگل بارانی تبدیل شد' }, { en: 'Everyone moved away from the desert', es: 'Todos se fueron del desierto', fa: 'همه از ریگستان رفتند' }, { en: 'Farms of wheat replaced the sand everywhere', es: 'Granjas de trigo reemplazaron la arena en todas partes', fa: 'فارم‌های گندم در همه جا جای ریگ را گرفتند' }], answer: 0,
        why: { en: 'The desert did not change. What people built on it did.', es: 'El desierto no cambió. Lo que la gente construyó encima sí.', fa: 'ریگستان تغییر نکرد. چیزی که مردم رویش ساختند تغییر کرد.' } },
      { q: { en: 'Cobalt from the Democratic Republic of the Congo goes inside what?', es: '¿Dentro de qué va el cobalto de la República Democrática del Congo?', fa: 'کوبالت جمهوری دموکراتیک کانگو در داخل چه چیز می‌رود؟' },
        choices: [{ en: 'Batteries for phones and cars', es: 'Baterías de teléfonos y carros', fa: 'بتری موبایل و موتر' }, { en: 'Loaves of bread', es: 'Panes', fa: 'نان' }, { en: 'Wooden chairs', es: 'Sillas de madera', fa: 'چوکی چوبی' }, { en: 'Cotton shirts', es: 'Camisas de algodón', fa: 'پیراهن نخی' }], answer: 0,
        why: { en: 'Cobalt is a metal used in batteries. Demand for batteries keeps those mines growing.', es: 'El cobalto es un metal que se usa en baterías. La demanda de baterías hace crecer esas minas.', fa: 'کوبالت فلزی است که در بتری به کار می‌رود. تقاضا برای بتری آن معدن‌ها را بزرگ‌تر می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Every job needs three kinds of [[resource|resources]]: [[natural resource|natural]] (from the earth), [[human resource|human]] (people and skills) and [[capital resource|capital]] (tools and machines).', es: 'Todo trabajo necesita tres tipos de [[resource|recursos]]: [[natural resource|naturales]] (de la tierra), [[human resource|humanos]] (personas y habilidades) y [[capital resource|de capital]] (herramientas y máquinas).', fa: 'هر کار سه نوع [[resource|منبع]] لازم دارد: [[natural resource|طبیعی]] (از زمین)، [[human resource|انسانی]] (مردم و مهارت‌ها) و [[capital resource|سرمایه‌ای]] (ابزار و ماشین).' },
    { en: 'Natural resources are spread unevenly, like oil in Saudi Arabia and cobalt in the Congo. So countries [[trade|trade]].', es: 'Los recursos naturales están repartidos de forma desigual, como el petróleo en Arabia Saudita y el cobalto en el Congo. Por eso los países [[trade|comercian]].', fa: 'منابع طبیعی نابرابر پخش شده‌اند، مثل تیل در عربستان سعودی و کوبالت در کانگو. به همین خاطر کشورها [[trade|تجارت]] می‌کنند.' },
    { en: 'Resources shape [[land use|land use]]: mines, wells and farms. People often disagree about who decides what the land becomes.', es: 'Los recursos dan forma al [[land use|uso del suelo]]: minas, pozos y granjas. La gente muchas veces no está de acuerdo sobre quién decide qué será la tierra.', fa: 'منابع [[land use|استفاده از زمین]] را شکل می‌دهند: معدن، چاه و فارم. مردم اغلب سر اینکه چه کسی دربارهٔ زمین تصمیم بگیرد موافق نیستند.' }
  ],
  reflect: {
    q: { en: 'Think of a job someone in your family does, or a job you want one day. What natural, human and capital resources does that job need?', es: 'Piensa en un trabajo que hace alguien de tu familia o un trabajo que quieres tener algún día. ¿Qué recursos naturales, humanos y de capital necesita ese trabajo?', fa: 'به کاری فکر کن که یکی از اعضای خانواده‌ات می‌کند، یا کاری که یک روز می‌خواهی. آن کار چه منابع طبیعی، انسانی و سرمایه‌ای لازم دارد؟' },
    starter: { en: 'The job I am thinking of is', es: 'El trabajo en el que pienso es', fa: 'کاری که به آن فکر می‌کنم' }
  }
};
