/* WORLDWALKER · Episode 5.3 · Borders, Resources and Cooperation — the Levant (WG.8)
   The Jordan River runs from the snowy mountain in the north, through a lake, past green farms,
   and down to the shrinking Dead Sea in the south. The Yarmouk River joins it from the dry east.
   A desalination plant sits on the Mediterranean coast in the west. Solving the water council earns the Water Key. */
window.EPISODE = {
  id: '5.3',
  realm: 5,
  sol: 'WG.8',
  title: { en: 'Borders, Resources and Cooperation', es: 'Fronteras, recursos y cooperación', fa: 'سرحدها، منابع و همکاری' },
  place: { en: 'The Jordan River', es: 'El río Jordán', fa: 'دریای اردن' },
  intro: [
    { en: 'Christopher: "The Drought Grump is drinking up the Jordan River! It wants the neighbors to fight over every drop. Talk to the engineer, the water planner and the farmer. Then lead the water council at the compass stone."',
      es: 'Christopher: "¡El Gruñón Sequía se está bebiendo el río Jordán! Quiere que los vecinos peleen por cada gota. Habla con la ingeniera, la planificadora del agua y el agricultor. Luego dirige el consejo del agua en la piedra de la brújula."',
      fa: 'کریستوفر: «غرغروی خشکسالی آب دریای اردن را می‌نوشد! می‌خواهد همسایه‌ها بر سر هر قطره دعوا کنند. با انجنیر، برنامه‌ریز آب و دهقان گپ بزن. بعد شورای آب را کنار سنگ قطب‌نما رهبری کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West edge: the Mediterranean Sea (= ~) and a desalination plant (X).
     The Jordan River (~, cols 9-10) starts in the snowy mountain (A), fills a lake, runs south past farms
     and ends in the Dead Sea (=), ringed by a dry old shore (r, u). The Yarmouk River (row 7) joins from the east.
     East side: dry grass (g), hills (K), a town (J) with a well (O) where the water council meets. */
  map: [
    '=~MMMMMAA~~AAMMMMMMMMMMMMMMMMMMM',
    '=~s..T.nA~~AnM..ggggrgggggJJJggM',
    '=~s..,.~~~~~~...gggggggg:gJJJggM',
    '=~s.T.~~~s~~~...ggrgggg:::::ggaM',
    '=~sX..~~~~~~,x..gg:::::::gOggggM',
    '=~sXs.."~~"..,..gg:gggrgggggg"gM',
    '=kkss.o1o~~o1o..gg:ggggggrgggggM',
    '=~ss.o1o.~~~~~~~~~B~~~~~~~~~B~~~',
    '=~s.,o1o.~~.o1o.gg:ggggggggggaMM',
    '=~ss.o2o.~~.o2o.gg:ggrgggggggggM',
    '=~s..o1o.bb.o1o.gg:ggggggggggaMM',
    '=~s..o1o.~~.o1o.gg:gggggggggrggM',
    '=~ss.oo2.~~.2oo.gg:::::::::ggggM',
    '=~s.w.ww.~~.www.ggrgggJJJJ:gggaM',
    '=~ss.www.bb.ww..gggggg:::::ggggM',
    '=~ss.....~~.....sggggggg:O:ggrgM',
    '=~sss.ssu~~ussxssssgggggg:gggggM',
    '=~ssu.sr~~~~rssssssssuugggggaggM',
    '=~su.rs======rsssssusssgggrggggM',
    '=~ssrs=======ss.ssssssuusggggaaM',
    '=~ssusr=====rsussssssusssssuuggM',
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM'
  ],
  start: [14, 2],

  tools: ['axe', 'sickle'],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [15, 9], at: [11, 8], decor: 'flower',
      clue: { en: 'The Yarmouk River flows in from the east and joins the Jordan River. Stand on the land square that touches both rivers: south of the Yarmouk and east of the Jordan.', es: 'El río Yarmuk llega desde el este y se une al río Jordán. Párate en el cuadro de tierra que toca los dos ríos: al sur del Yarmuk y al este del Jordán.', fa: 'دریای یرموک از طرف شرق می‌آید و با دریای اردن یکی می‌شود. روی خانهٔ خشکه‌ای بایست که به هر دو دریا می‌رسد: جنوبِ یرموک و شرقِ اردن.' },
      text: { en: 'You found where two rivers meet! A river that flows into a bigger river is called a tributary. The Yarmouk is the biggest tributary of the Jordan. Wildflowers grow by the water.', es: '¡Encontraste donde se juntan dos ríos! Un río que desemboca en un río más grande se llama afluente. El Yarmuk es el afluente más grande del Jordán. Junto al agua crecen flores silvestres.', fa: 'تو جایی را پیدا کردی که دو دریا به هم می‌رسند! دریایی که به یک دریای بزرگ‌تر می‌ریزد، شاخهٔ آن دریا است. یرموک بزرگ‌ترین شاخهٔ دریای اردن است. گل‌های خودرو کنار آب می‌رویند.' } },
    { clueAt: [21, 2], at: [19, 5], decor: 'fossil',
      clue: { en: 'From this note, walk 3 steps south, then 2 steps west. Look in the dry grass.', es: 'Desde esta nota, camina 3 pasos al sur y luego 2 pasos al oeste. Busca en el pasto seco.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۲ قدم به غرب. در علف خشک بپال.' },
      text: { en: 'You followed the compass! South is down and west is to the left. A fossil sea shell was in the dry grass. Millions of years ago, a sea covered this land.', es: '¡Seguiste la brújula! El sur está abajo y el oeste a la izquierda. Había un fósil de concha marina en el pasto seco. Hace millones de años, un mar cubría esta tierra.', fa: 'تو قطب‌نما را دنبال کردی! جنوب پایین و غرب طرف چپ است. فسیل یک صدف بحری در علف خشک بود. ملیون‌ها سال پیش، یک بحر این زمین را پوشانده بود.' } }
  ],
  // only the Canoe (Episode 2.3) reaches the tiny island in the lake
  secret: { tool: 'canoe', at: [9, 3],
    text: { en: 'The canoe found a tiny island in the lake! The Sea of Galilee is the lowest freshwater lake on Earth. It is about 210 meters below sea level.',
      es: '¡La canoa encontró una islita en el lago! El mar de Galilea es el lago de agua dulce más bajo de la Tierra. Está a unos 210 metros bajo el nivel del mar.',
      fa: 'قایق کوچک یک جزیرهٔ کوچک در جهیل پیدا کرد! جهیل طبریه پست‌ترین جهیل آب شیرین روی زمین است. حدود ۲۱۰ متر پایین‌تر از سطح بحر است.' } },

  words: {
    scarce: { en: 'hard to find because there is only a little of it', es: 'difícil de encontrar porque hay muy poco', fa: 'چیزی که کم است و به سختی پیدا می‌شود' },
    transboundary: { en: 'crossing from one country into another, like a shared river', es: 'que cruza de un país a otro, como un río compartido', fa: 'چیزی که از یک کشور به کشور دیگر می‌گذرد، مثل یک دریای مشترک' },
    'border dispute': { en: 'an argument between neighbors over exactly where a border line should be', es: 'una discusión entre vecinos sobre dónde debe estar exactamente una frontera', fa: 'اختلاف میان همسایه‌ها بر سر این‌که خط سرحد دقیقاً کجا باشد' },
    treaty: { en: 'a written agreement between countries with clear rules', es: 'un acuerdo escrito entre países con reglas claras', fa: 'یک توافق نوشته‌شده میان کشورها با قاعده‌های روشن' },
    desalination: { en: 'taking the salt out of seawater to make fresh water', es: 'quitarle la sal al agua de mar para hacer agua dulce', fa: 'گرفتن نمک از آب بحر تا آب شیرین ساخته شود' },
    'drip irrigation': { en: 'watering crops with thin tubes that drip water right at each plant\'s roots', es: 'regar cultivos con tubos delgados que dejan caer gotas justo en las raíces de cada planta', fa: 'آبیاری کشت با نل‌های باریک که آب را قطره‌قطره به ریشهٔ هر بوته می‌رساند' },
    cooperation: { en: 'working together to reach a goal', es: 'trabajar juntos para lograr una meta', fa: 'با هم کار کردن برای رسیدن به یک هدف' }
  },

  npcs: [
    {
      x: 4, y: 4,
      name: { en: 'Maya', es: 'Maya', fa: 'مایا' },
      role: { en: 'Engineer at the desalination plant', es: 'Ingeniera de la planta desalinizadora', fa: 'انجنیر در فابریکهٔ آب‌شیرین‌کن' },
      look: { skin: 2, hair: '#4a2a18', shirt: '#e0a020', pants: '#2c3e5a' },
      lines: [
        { en: 'Welcome to the Levant, at the east end of the Mediterranean Sea. Look around. Rain falls only in winter, and summers are long and dry. Fresh water here is [[scarce|scarce]].',
          es: 'Bienvenido al Levante, en el extremo este del mar Mediterráneo. Mira a tu alrededor. Solo llueve en invierno y los veranos son largos y secos. Aquí el agua dulce es [[scarce|escasa]].',
          fa: 'به شام (لِوانت) در شرق بحیرهٔ مدیترانه خوش آمدی. به اطراف نگاه کن. باران فقط در زمستان می‌بارد و تابستان‌ها دراز و خشک هستند. آب شیرین این‌جا [[scarce|کمیاب]] است.' },
        { en: 'But the sea never runs dry! My plant does [[desalination|desalination]]. It takes the salt out of seawater to make fresh water. The hard part: it needs lots of energy, and it leaves very salty water behind.',
          es: '¡Pero el mar nunca se seca! Mi planta hace [[desalination|desalinización]]. Le quita la sal al agua de mar para hacer agua dulce. Lo difícil: necesita mucha energía y deja atrás agua muy salada.',
          fa: 'اما بحر هرگز خشک نمی‌شود! فابریکهٔ من [[desalination|آب بحر را شیرین می‌کند]]. نمک را از آب بحر می‌گیرد تا آب شیرین بسازد. مشکل این است: انرژی زیاد لازم دارد و آب بسیار شور از آن باقی می‌ماند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why is fresh water so precious in the Levant?', es: '¿Por qué el agua dulce es tan valiosa en el Levante?', fa: 'چرا آب شیرین در شام این‌قدر قیمتی است؟' },
        choices: [
          { ok: true, t: { en: 'Little rain falls, so fresh water is scarce', es: 'Llueve poco, así que el agua dulce es escasa', fa: 'باران کم می‌بارد، پس آب شیرین کمیاب است' },
            why: { en: 'Yes. Rain comes only in winter, and summers are long and dry.', es: 'Sí. Solo llueve en invierno y los veranos son largos y secos.', fa: 'بلی. باران فقط در زمستان می‌آید و تابستان‌ها دراز و خشک هستند.' } },
          { t: { en: 'It rains every day, so water is everywhere', es: 'Llueve todos los días, así que hay agua por todas partes', fa: 'هر روز باران می‌بارد، پس آب همه جا است' },
            why: { en: 'The Levant is dry. Rain falls only in winter.', es: 'El Levante es seco. Solo llueve en invierno.', fa: 'شام خشک است. باران فقط در زمستان می‌بارد.' } },
          { t: { en: 'The sea is made of fresh water', es: 'El mar es de agua dulce', fa: 'آب بحر شیرین است' },
            why: { en: 'Seawater is salty. That is why it needs desalination.', es: 'El agua de mar es salada. Por eso necesita desalinización.', fa: 'آب بحر شور است. به همین خاطر باید شیرین شود.' } }
        ]
      }
    },
    {
      x: 25, y: 4,
      name: { en: 'Lina', es: 'Lina', fa: 'لینا' },
      role: { en: 'Water planner', es: 'Planificadora del agua', fa: 'برنامه‌ریز آب' },
      remember: { ep: '5.1', t: { en: 'Hello! Elif, the dam engineer in Türkiye, told me about you. You set the dam and the canal so all three farms on the river got water. That is real sharing!', es: '¡Hola! Elif, la ingeniera de represas de Turquía, me habló de ti. Ajustaste la represa y el canal para que las tres granjas del río recibieran agua. ¡Eso sí es compartir!', fa: 'سلام! الیف، انجنیر بند در ترکیه، دربارهٔ تو به من گفت. تو بند و کانال را طوری تنظیم کردی که هر سه کشتزار کنار دریا آب گرفتند. این شریک کردن واقعی است!' } },
      look: { skin: 3, hair: '#2a1a12', shirt: '#2a7fa8', pants: '#3a2f45', robe: true },
      lines: [
        { en: 'Rivers do not stop at borders. The Jordan River and its branches touch several neighbors: Lebanon, Syria, Jordan, Israel and the Palestinians. A resource that crosses borders is [[transboundary|transboundary]].',
          es: 'Los ríos no se detienen en las fronteras. El río Jordán y sus ramas tocan a varios vecinos: Líbano, Siria, Jordania, Israel y los palestinos. Un recurso que cruza fronteras es [[transboundary|transfronterizo]].',
          fa: 'دریاها در سرحد نمی‌ایستند. دریای اردن و شاخه‌هایش به چند همسایه می‌رسند: لبنان، سوریه، اردن، اسرائیل و فلسطینی‌ها. منبعی که از سرحد می‌گذرد [[transboundary|فراسرحدی]] است.' },
        { en: 'Neighbors who share a river can argue, or they can work together. A [[border dispute|border dispute]] is an argument over where a line should be. But neighbors can also sign a [[treaty|treaty]]: a written agreement with clear rules.',
          es: 'Los vecinos que comparten un río pueden discutir o pueden trabajar juntos. Una [[border dispute|disputa fronteriza]] es una discusión sobre dónde debe estar una línea. Pero los vecinos también pueden firmar un [[treaty|tratado]]: un acuerdo escrito con reglas claras.',
          fa: 'همسایه‌هایی که یک دریا را شریک دارند می‌توانند دعوا کنند یا با هم کار کنند. [[border dispute|اختلاف سرحدی]] دعوا بر سر جای یک خط است. اما همسایه‌ها می‌توانند یک [[treaty|معاهده]] هم امضا کنند: یک توافق نوشته‌شده با قاعده‌های روشن.' },
        { en: 'In 1994, Jordan and Israel signed a peace treaty. Part of it set rules for sharing water from the Jordan and Yarmouk rivers. Scientists can also share weather data and river reports. Sharing takes trust, and trust takes work.',
          es: 'En 1994, Jordania e Israel firmaron un tratado de paz. Una parte puso reglas para compartir el agua de los ríos Jordán y Yarmuk. Los científicos también pueden compartir datos del clima e informes del río. Compartir necesita confianza, y la confianza cuesta trabajo.',
          fa: 'در سال ۱۹۹۴، اردن و اسرائیل یک معاهدهٔ صلح امضا کردند. بخشی از آن قاعده‌هایی برای شریک شدن آب دریای اردن و دریای یرموک گذاشت. دانشمندان هم می‌توانند معلومات هوا و گزارش‌های دریا را شریک کنند. شریک شدن اعتماد می‌خواهد و اعتماد زحمت می‌خواهد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which one is a transboundary resource?', es: '¿Cuál es un recurso transfronterizo?', fa: 'کدام یک منبع فراسرحدی است؟' },
        choices: [
          { ok: true, t: { en: 'A river that flows through two or more countries', es: 'Un río que pasa por dos o más países', fa: 'دریایی که از دو یا چند کشور می‌گذرد' },
            why: { en: 'Right. The river crosses borders, so its water is a shared problem.', es: 'Correcto. El río cruza fronteras, así que su agua es un problema compartido.', fa: 'درست است. دریا از سرحدها می‌گذرد، پس آبش یک مسئلهٔ مشترک است.' } },
          { t: { en: 'A well in one family\'s yard', es: 'Un pozo en el patio de una familia', fa: 'یک چاه در حویلی یک خانواده' },
            why: { en: 'That well stays inside one place. It does not cross a border.', es: 'Ese pozo está en un solo lugar. No cruza una frontera.', fa: 'آن چاه در یک جا می‌ماند. از سرحد نمی‌گذرد.' } },
          { t: { en: 'A tree in a city park', es: 'Un árbol en un parque de la ciudad', fa: 'یک درخت در پارک شهر' },
            why: { en: 'A tree stays in one spot inside one country.', es: 'Un árbol se queda en un lugar dentro de un país.', fa: 'درخت در یک جا داخل یک کشور می‌ماند.' } }
        ]
      }
    },
    {
      x: 11, y: 12,
      name: { en: 'Yousef', es: 'Yousef', fa: 'یوسف' },
      role: { en: 'Farmer in the Jordan Valley', es: 'Agricultor del valle del Jordán', fa: 'دهقان درهٔ اردن' },
      look: { skin: 3, hair: '#3a2a20', shirt: '#b5523a', pants: '#4a3a2a' },
      lines: [
        { en: 'My family grows tomatoes and dates here in the Jordan Valley. The river flows south, down to the Dead Sea. It is the lowest place on land on Earth.',
          es: 'Mi familia cultiva tomates y dátiles aquí en el valle del Jordán. El río corre hacia el sur, hasta el mar Muerto. Es el lugar más bajo en tierra firme del planeta.',
          fa: 'خانوادهٔ من این‌جا در درهٔ اردن بادنجان رومی و خرما کشت می‌کند. دریا به طرف جنوب تا بحیرهٔ مرده می‌رود. آن‌جا پایین‌ترین جای خشکهٔ زمین است.' },
        { en: 'So many farms and cities take water from the river that only a little reaches the end. The Dead Sea is shrinking every year. You can see its old shore far from the water now.',
          es: 'Tantas granjas y ciudades sacan agua del río que solo un poco llega al final. El mar Muerto se encoge cada año. Ahora puedes ver su orilla vieja lejos del agua.',
          fa: 'این‌قدر کشتزارها و شهرها از دریا آب می‌گیرند که فقط کمی به آخر آن می‌رسد. بحیرهٔ مرده هر سال کوچک‌تر می‌شود. حالا ساحل کهنه‌اش را دور از آب می‌بینی.' },
        { en: 'I use [[drip irrigation|drip irrigation]]. Thin tubes drip water right at each plant\'s roots. Less water is lost to the hot sun, so more can stay in the river.',
          es: 'Yo uso [[drip irrigation|riego por goteo]]. Unos tubos delgados dejan caer gotas justo en las raíces de cada planta. Se pierde menos agua con el sol caliente, así que más puede quedarse en el río.',
          fa: 'من از [[drip irrigation|آبیاری قطره‌ای]] استفاده می‌کنم. نل‌های باریک آب را قطره‌قطره به ریشهٔ هر بوته می‌رسانند. آب کمتری زیر آفتاب گرم از بین می‌رود، پس آب بیشتری در دریا می‌ماند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where does the Jordan River end?', es: '¿Dónde termina el río Jordán?', fa: 'دریای اردن در کجا تمام می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'In the Dead Sea', es: 'En el mar Muerto', fa: 'در بحیرهٔ مرده' },
            why: { en: 'Yes. The river flows south and ends in the Dead Sea.', es: 'Sí. El río corre al sur y termina en el mar Muerto.', fa: 'بلی. دریا به طرف جنوب می‌رود و در بحیرهٔ مرده تمام می‌شود.' } },
          { t: { en: 'In the Mediterranean Sea', es: 'En el mar Mediterráneo', fa: 'در بحیرهٔ مدیترانه' },
            why: { en: 'The Mediterranean is to the west. The Jordan flows south to the Dead Sea.', es: 'El Mediterráneo está al oeste. El Jordán corre al sur hasta el mar Muerto.', fa: 'مدیترانه در غرب است. دریای اردن به طرف جنوب تا بحیرهٔ مرده می‌رود.' } },
          { t: { en: 'In the Nile River', es: 'En el río Nilo', fa: 'در دریای نیل' },
            why: { en: 'The Nile is in Africa. It does not meet the Jordan.', es: 'El Nilo está en África. No se une al Jordán.', fa: 'نیل در افریقا است. به دریای اردن نمی‌رسد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 13, y: 4, text: { en: 'THE LAKE · Sea of Galilee (Lake Tiberias). A freshwater lake. The Jordan River flows in from the snowy mountains in the north and flows out to the south.',
      es: 'EL LAGO · Mar de Galilea (lago Tiberíades). Un lago de agua dulce. El río Jordán entra desde las montañas nevadas del norte y sale hacia el sur.',
      fa: 'جهیل · جهیل طبریه (جلیل). یک جهیل آب شیرین. دریای اردن از کوه‌های برفی شمال به آن می‌ریزد و به طرف جنوب بیرون می‌رود.' } },
    { x: 14, y: 16, text: { en: 'OLD SHORE · Long ago, the Dead Sea came up to this sign. Now the water is far away. Less river water arrives every year.',
      es: 'ORILLA VIEJA · Hace mucho tiempo, el mar Muerto llegaba hasta este letrero. Ahora el agua está lejos. Cada año llega menos agua del río.',
      fa: 'ساحل کهنه · مدت‌ها پیش، بحیرهٔ مرده تا این تابلو می‌رسید. حالا آب دور است. هر سال آب کمتری از دریا می‌رسد.' } }
  ],

  /* the quest: Rania the river scientist (gold !) -> Sami the fisher at the lake -> beat the Ink Thief on the old Dead Sea shore -> back to Rania */
  quest: {
    stat: 'reg',
    title: { en: 'The Stolen River Report', es: 'El informe del río robado', fa: 'گزارش دزدیده‌شدهٔ دریا' },
    giver: {
      x: 22, y: 8,
      name: { en: 'Rania', es: 'Rania', fa: 'رانیا' },
      role: { en: 'River scientist', es: 'Científica del río', fa: 'دانشمند دریا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a8a6a', pants: '#2c3445', robe: true },
      lines: [
        { en: 'Oh no! I am Rania. Every week I measure the water in the Yarmouk River. Then I share my river report with all the neighbors.',
          es: '¡Ay, no! Soy Rania. Cada semana mido el agua del río Yarmuk. Luego comparto mi informe del río con todos los vecinos.',
          fa: 'وای نه! من رانیا هستم. هر هفته آب دریای یرموک را اندازه می‌کنم. بعد گزارش دریا را با همهٔ همسایه‌ها شریک می‌کنم.' },
        { en: 'The Ink Thief grabbed my report and ran! Without it, nobody knows how much water there is to share. Sami the fisher was at the lake. Did he see it?',
          es: '¡El Ladrón de Tinta agarró mi informe y salió corriendo! Sin él, nadie sabe cuánta agua hay para compartir. Sami, el pescador, estaba en el lago. ¿Lo habrá visto?',
          fa: 'دزد رنگ گزارش مرا گرفت و فرار کرد! بدون آن، هیچ کس نمی‌داند چقدر آب برای تقسیم هست. سامی ماهیگیر کنار جهیل بود. آیا او آن را دید؟' }
      ],
      wait: { en: 'Sami is at the lake in the north-west. Cross the bridge to the north, then walk west.',
        es: 'Sami está en el lago, al noroeste. Cruza el puente hacia el norte y luego camina al oeste.',
        fa: 'سامی کنار جهیل در شمال غرب است. از پل به طرف شمال بگذر، بعد به طرف غرب برو.' },
      thanks: { en: 'My river report! Now every neighbor can see the same numbers. When people share facts, they trust each other more. That makes [[cooperation|cooperation]] easier.',
        es: '¡Mi informe del río! Ahora todos los vecinos pueden ver los mismos números. Cuando la gente comparte datos, confía más en los demás. Eso hace más fácil la [[cooperation|cooperación]].',
        fa: 'گزارش دریای من! حالا هر همسایه همان عددها را می‌بیند. وقتی مردم معلومات را شریک می‌کنند، بیشتر به هم اعتماد می‌کنند. این [[cooperation|همکاری]] را آسان‌تر می‌کند.' }
    },
    contact: {
      x: 14, y: 5,
      name: { en: 'Sami', es: 'Sami', fa: 'سامی' },
      role: { en: 'Fisher on the lake', es: 'Pescador del lago', fa: 'ماهیگیر جهیل' },
      look: { skin: 5, hair: '#151010', shirt: '#d9a441', pants: '#3a4a5a', hat: '#5a6a7a' },
      lines: [
        { en: 'Yes, I saw it! A blob of ink with Rania\'s papers. The Jordan River is [[transboundary|transboundary]]. It crosses borders, so her report matters to everyone.',
          es: '¡Sí, lo vi! Una mancha de tinta con los papeles de Rania. El río Jordán es [[transboundary|transfronterizo]]. Cruza fronteras, así que su informe les importa a todos.',
          fa: 'بلی، دیدمش! یک غرغروی رنگ با کاغذهای رانیا. دریای اردن [[transboundary|فراسرحدی]] است. از سرحدها می‌گذرد، پس گزارش رانیا برای همه مهم است.' },
        { en: 'It ran south along the river, past the farms, to the old shore of the Dead Sea. It hides on the east side. Answer two of its questions right, and it will drop the report.',
          es: 'Corrió al sur por el río, pasó las granjas y llegó a la orilla vieja del mar Muerto. Se esconde del lado este. Responde bien dos de sus preguntas y soltará el informe.',
          fa: 'به طرف جنوب کنار دریا دوید، از کشتزارها گذشت و به ساحل کهنهٔ بحیرهٔ مرده رسید. در طرف شرق پنهان است. دو سؤالش را درست جواب بده، گزارش را می‌اندازد.' }
      ]
    },
    action: {
      type: 'fight',
      at: [20, 18],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Mine! If nobody knows how much water there is, the neighbors will argue. Unless you can answer my questions!',
        es: '¡Es mío! Si nadie sabe cuánta agua hay, los vecinos van a discutir. ¡A menos que respondas mis preguntas!',
        fa: 'مال من است! اگر هیچ کس نداند چقدر آب هست، همسایه‌ها دعوا می‌کنند. مگر این‌که سؤال‌هایم را جواب بدهی!' },
      win: { en: 'Splat! The Ink Thief melts into a puddle. Rania\'s river report falls onto the sand.',
        es: '¡Splat! El Ladrón de Tinta se derrite en un charco. El informe del río de Rania cae sobre la arena.',
        fa: 'شلپ! دزد رنگ آب می‌شود و یک چاله رنگ می‌ماند. گزارش دریای رانیا روی ریگ می‌افتد.' },
      need: 2,
      questions: [
        { q: { en: 'A river flows from one country into the next. A town near the start of the river takes most of the water. Who has a problem?', es: 'Un río pasa de un país al siguiente. Un pueblo cerca del inicio del río toma casi toda el agua. ¿Quién tiene un problema?', fa: 'یک دریا از یک کشور به کشور بعدی می‌رود. یک شهرک نزدیک شروع دریا بیشتر آب را می‌گیرد. کی مشکل پیدا می‌کند؟' },
          choices: [{ en: 'The towns farther down the river', es: 'Los pueblos más abajo en el río', fa: 'شهرک‌هایی که پایین‌تر کنار دریا هستند' }, { en: 'Nobody, because rivers always refill', es: 'Nadie, porque los ríos siempre se llenan otra vez', fa: 'هیچ کس، چون دریا همیشه دوباره پر می‌شود' }, { en: 'Only the fish in the sea', es: 'Solo los peces del mar', fa: 'فقط ماهی‌های بحر' }, { en: 'The town that took the water', es: 'El pueblo que tomó el agua', fa: 'شهرکی که آب را گرفت' }], answer: 0,
          why: { en: 'Water flows down the river. If one place takes too much, places farther down get less.', es: 'El agua baja por el río. Si un lugar toma demasiado, los lugares de más abajo reciben menos.', fa: 'آب به طرف پایین دریا می‌رود. اگر یک جا زیاد بگیرد، جاهای پایین‌تر کمتر می‌گیرند.' } },
        { q: { en: 'Why do neighbors share river reports and rain numbers?', es: '¿Por qué los vecinos comparten informes del río y datos de lluvia?', fa: 'چرا همسایه‌ها گزارش دریا و عددهای باران را شریک می‌کنند؟' },
          choices: [{ en: 'So everyone can plan for dry years and floods', es: 'Para que todos puedan prepararse para años secos e inundaciones', fa: 'تا همه برای سال‌های خشک و سیلاب آماده شوند' }, { en: 'So one country can keep the water a secret', es: 'Para que un país pueda guardar el agua en secreto', fa: 'تا یک کشور آب را پنهان نگه دارد' }, { en: 'To make the river flow faster', es: 'Para que el río corra más rápido', fa: 'تا دریا تیزتر جاری شود' }, { en: 'Because reports make it rain', es: 'Porque los informes hacen llover', fa: 'چون گزارش باران می‌آورد' }], answer: 0,
          why: { en: 'Shared facts help every neighbor plan. They also build trust.', es: 'Los datos compartidos ayudan a cada vecino a planear. También crean confianza.', fa: 'معلومات مشترک به هر همسایه کمک می‌کند پلان کند. اعتماد هم می‌سازد.' } },
        { q: { en: 'Which resource is scarce in the Levant?', es: '¿Qué recurso es escaso en el Levante?', fa: 'کدام منبع در شام کم است؟' },
          choices: [{ en: 'Fresh water', es: 'El agua dulce', fa: 'آب شیرین' }, { en: 'Sunshine', es: 'El sol', fa: 'آفتاب' }, { en: 'Salty seawater', es: 'El agua salada del mar', fa: 'آب شور بحر' }, { en: 'Sand', es: 'La arena', fa: 'ریگ' }], answer: 0,
          why: { en: 'The sun shines most of the year, and the sea is full. But fresh water is [[scarce|scarce]].', es: 'El sol brilla casi todo el año y el mar está lleno. Pero el agua dulce es [[scarce|escasa]].', fa: 'آفتاب بیشتر سال می‌تابد و بحر پر است. اما آب شیرین [[scarce|کمیاب]] است.' } }
      ],
      item: { icon: '📜', name: { en: 'Rania\'s river report', es: 'El informe del río de Rania', fa: 'گزارش دریای رانیا' } }
    }
  },

  scraps: [[2, 1], [30, 1], [3, 20]],
  smudges: [[20, 10], [5, 16], [24, 16]],

  challenge: {
    at: [23, 14],
    type: 'site', // in the world; the card version (claim) is the fallback
    // A: a dam on the Yarmouk in the dry east · B: the desalination plant on the Mediterranean coast · C: the shrinking Dead Sea shore
    spots: [[27, 8], [3, 6], [4, 18]],
    stat: 'hei',
    title: { en: 'The water council', es: 'El consejo del agua', fa: 'شورای آب' },
    intro: { en: 'The neighbors meet at the old well. They ask you to choose a plan for the river. Pick one plan. Then back it up with one reason that is fair to people and one reason that is good for the land and water.',
      es: 'Los vecinos se reúnen en el pozo viejo. Te piden que elijas un plan para el río. Elige un plan. Luego apóyalo con una razón que sea justa para la gente y una razón que sea buena para la tierra y el agua.',
      fa: 'همسایه‌ها کنار چاه کهنه جمع شده‌اند. از تو می‌خواهند برای دریا یک نقشه انتخاب کنی. یک نقشه را انتخاب کن. بعد یک دلیل که برای مردم عادلانه است و یک دلیل که برای زمین و آب خوب است بیاور.' },
    options: [
      { icon: '🧱', name: { en: 'A: Every country builds its own big dam', es: 'A: Cada país construye su propia gran represa', fa: 'الف: هر کشور بند بزرگ خودش را می‌سازد' },
        desc: { en: 'Each neighbor holds back as much river water as it can.', es: 'Cada vecino retiene toda el agua del río que puede.', fa: 'هر همسایه تا جایی که می‌تواند آب دریا را نگه می‌دارد.' },
        result: { en: 'The dams up the river hold the water back. Farms down the river and the Dead Sea get even less, and the neighbors argue more.', es: 'Las represas río arriba retienen el agua. Las granjas río abajo y el mar Muerto reciben aún menos, y los vecinos discuten más.', fa: 'بندهای بالای دریا آب را نگه می‌دارند. کشتزارهای پایین دریا و بحیرهٔ مرده آب کمتری می‌گیرند و همسایه‌ها بیشتر دعوا می‌کنند.' } },
      { icon: '🤝', name: { en: 'B: Share the river and build a desalination plant', es: 'B: Compartir el río y construir una planta desalinizadora', fa: 'ب: دریا را شریک شوند و فابریکهٔ آب‌شیرین‌کن بسازند' },
        desc: { en: 'Each neighbor takes an agreed amount. New fresh water comes from the sea, and farms use drip irrigation.', es: 'Cada vecino toma una cantidad acordada. Llega agua dulce nueva del mar y las granjas usan riego por goteo.', fa: 'هر همسایه یک مقدار توافق‌شده می‌گیرد. آب شیرین تازه از بحر می‌آید و کشتزارها آبیاری قطره‌ای می‌کنند.' },
        result: { en: 'Every neighbor knows its fair share. The plant makes new fresh water, so less is pumped from the river. More water flows on to the Dead Sea.', es: 'Cada vecino conoce su parte justa. La planta hace agua dulce nueva, así que se bombea menos del río. Más agua sigue hasta el mar Muerto.', fa: 'هر همسایه سهم عادلانهٔ خود را می‌داند. فابریکه آب شیرین تازه می‌سازد، پس آب کمتری از دریا کشیده می‌شود. آب بیشتری تا بحیرهٔ مرده می‌رسد.' } },
      { icon: '🤷', name: { en: 'C: Do nothing', es: 'C: No hacer nada', fa: 'ج: هیچ کاری نکنند' },
        desc: { en: 'Everyone keeps pumping as much as they want.', es: 'Todos siguen bombeando cuanto quieran.', fa: 'هر کس هر قدر بخواهد آب می‌کشد.' },
        result: { en: 'The river keeps shrinking. Wells dry up, and the Dead Sea keeps falling year after year.', es: 'El río sigue encogiéndose. Los pozos se secan y el mar Muerto sigue bajando año tras año.', fa: 'دریا کوچک‌تر و کوچک‌تر می‌شود. چاه‌ها خشک می‌شوند و آب بحیرهٔ مرده سال به سال پایین‌تر می‌رود.' } }
    ],
    kinds: [
      { id: 'people', label: { en: 'Fair to people', es: 'Justa para la gente', fa: 'برای مردم عادلانه' } },
      { id: 'land', label: { en: 'Good for the land and water', es: 'Buena para la tierra y el agua', fa: 'برای زمین و آب خوب' } }
    ],
    reasons: [
      { kind: 'people', fits: [1], t: { en: 'Every neighbor gets a share it can count on, written in a treaty.', es: 'Cada vecino recibe una parte con la que puede contar, escrita en un tratado.', fa: 'هر همسایه سهمی می‌گیرد که می‌تواند به آن اطمینان کند و در یک معاهده نوشته شده است.' },
        why: { en: 'An agreed share means no family is left dry by surprise.', es: 'Una parte acordada significa que ninguna familia se queda sin agua por sorpresa.', fa: 'سهم توافق‌شده یعنی هیچ خانواده‌ای ناگهان بی‌آب نمی‌ماند.' } },
      { kind: 'people', fits: [0], t: { en: 'Each country controls its own water and does not need to trust anyone.', es: 'Cada país controla su propia agua y no necesita confiar en nadie.', fa: 'هر کشور آب خود را کنترول می‌کند و لازم نیست به کسی اعتماد کند.' },
        why: { en: 'That is true for plan A. But is plan A good for the land and the river down below?', es: 'Eso es cierto para el plan A. Pero ¿el plan A es bueno para la tierra y el río más abajo?', fa: 'این برای نقشهٔ الف درست است. اما آیا نقشهٔ الف برای زمین و پایین دریا خوب است؟' } },
      { kind: 'people', fits: [], t: { en: 'Whoever pumps the fastest should get the most water.', es: 'Quien bombee más rápido debería recibir más agua.', fa: 'هر کس زودتر آب بکشد باید آب بیشتری بگیرد.' },
        why: { en: 'That is not fair. The richest or strongest would win, and others would go dry.', es: 'Eso no es justo. Los más ricos o fuertes ganarían y los demás se quedarían sin agua.', fa: 'این عادلانه نیست. پولدارترین یا قوی‌ترین برنده می‌شود و دیگران بی‌آب می‌مانند.' } },
      { kind: 'land', fits: [1], t: { en: 'The plant makes new fresh water from the sea, so less is pumped from the river.', es: 'La planta hace agua dulce nueva con agua del mar, así que se bombea menos del río.', fa: 'فابریکه از آب بحر آب شیرین تازه می‌سازد، پس آب کمتری از دریا کشیده می‌شود.' },
        why: { en: 'New water from the sea takes pressure off the river.', es: 'El agua nueva del mar le quita presión al río.', fa: 'آب تازه از بحر فشار را از روی دریا کم می‌کند.' } },
      { kind: 'land', fits: [1], t: { en: 'Drip irrigation saves water, so more flows on to the Dead Sea.', es: 'El riego por goteo ahorra agua, así que más agua sigue hasta el mar Muerto.', fa: 'آبیاری قطره‌ای آب را صرفه می‌کند، پس آب بیشتری تا بحیرهٔ مرده می‌رود.' },
        why: { en: 'Less water is wasted on farms, so the river can keep flowing.', es: 'Se desperdicia menos agua en las granjas, así que el río puede seguir corriendo.', fa: 'آب کمتری در کشتزارها ضایع می‌شود، پس دریا می‌تواند جاری بماند.' } },
      { kind: 'land', fits: [], t: { en: 'A dry river is fine because lots of rain will fill it again next week.', es: 'Un río seco está bien porque mucha lluvia lo llenará otra vez la próxima semana.', fa: 'دریای خشک مشکلی ندارد چون هفتهٔ آینده باران زیاد دوباره آن را پر می‌کند.' },
        why: { en: 'Rain is scarce here. A drained river does not fill up again quickly.', es: 'Aquí la lluvia es escasa. Un río vacío no se vuelve a llenar rápido.', fa: 'باران این‌جا کم است. دریای خالی زود دوباره پر نمی‌شود.' } }
    ],
    mismatch: { en: 'That reason does not back up the plan you picked. Choose reasons that are true for your plan.', es: 'Esa razón no apoya el plan que elegiste. Elige razones que sean ciertas para tu plan.', fa: 'این دلیل از نقشه‌ای که انتخاب کردی پشتیبانی نمی‌کند. دلیل‌هایی انتخاب کن که برای نقشهٔ تو درست باشند.' },
    success: { en: 'The council agrees! Water flows down the Jordan again, and the neighbors shake hands.', es: '¡El consejo está de acuerdo! El agua vuelve a correr por el Jordán y los vecinos se dan la mano.', fa: 'شورا موافقت کرد! آب دوباره در دریای اردن جاری است و همسایه‌ها با هم دست می‌دهند.' }
  },

  boss: {
    at: [14, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Drought Grump', es: 'El Gruñón Sequía', fa: 'غرغروی خشکسالی' },
    appear: { en: 'The Drought Grump is sitting on the old shore of the Dead Sea!', es: '¡El Gruñón Sequía está sentado en la orilla vieja del mar Muerto!', fa: 'غرغروی خشکسالی روی ساحل کهنهٔ بحیرهٔ مرده نشسته است!' },
    taunt: { en: 'Slurp! Every drop is mine. Let the neighbors fight while I drink!', es: '¡Slurp! Cada gota es mía. ¡Que los vecinos peleen mientras yo bebo!', fa: 'هورت! هر قطره مال من است. بگذار همسایه‌ها دعوا کنند تا من بنوشم!' },
    win: { en: 'The Grump dries up and blows away. Atlas page 5.3 floats down, and the Water Key glows in your hand!', es: 'El Gruñón se seca y se lo lleva el viento. Cae la página 5.3 del atlas, ¡y la Llave del agua brilla en tu mano!', fa: 'غرغرو خشک می‌شود و باد آن را می‌برد. صفحهٔ ۵.۳ اطلس پایین می‌آید و کلید آب در دستت می‌درخشد!' },
    questions: [
      { q: { en: 'What does transboundary mean?', es: '¿Qué significa transfronterizo?', fa: 'فراسرحدی یعنی چه؟' },
        choices: [{ en: 'Crossing from one country into another', es: 'Que cruza de un país a otro', fa: 'از یک کشور به کشور دیگر گذشتن' }, { en: 'Staying inside one city', es: 'Que se queda dentro de una ciudad', fa: 'داخل یک شهر ماندن' }, { en: 'Found only under the sea', es: 'Que solo está bajo el mar', fa: 'فقط زیر بحر پیدا شدن' }, { en: 'Owned by one family', es: 'Que es de una sola familia', fa: 'مال یک خانواده بودن' }], answer: 0,
        why: { en: 'A [[transboundary|transboundary]] resource, like a river, crosses borders.', es: 'Un recurso [[transboundary|transfronterizo]], como un río, cruza fronteras.', fa: 'یک منبع [[transboundary|فراسرحدی]]، مثل دریا، از سرحدها می‌گذرد.' } },
      { q: { en: 'Ethiopia built a huge dam on the Blue Nile. Why does Egypt worry?', es: 'Etiopía construyó una gran represa en el Nilo Azul. ¿Por qué se preocupa Egipto?', fa: 'ایتوپیا یک بند بزرگ روی نیل آبی ساخت. چرا مصر نگران است؟' },
        choices: [{ en: 'Egypt gets most of its fresh water from the Nile', es: 'Egipto recibe la mayor parte de su agua dulce del Nilo', fa: 'مصر بیشتر آب شیرین خود را از نیل می‌گیرد' }, { en: 'Egypt has too much rain', es: 'Egipto tiene demasiada lluvia', fa: 'مصر باران بسیار زیاد دارد' }, { en: 'The dam is in Egypt', es: 'La represa está en Egipto', fa: 'بند در مصر است' }, { en: 'Egypt sells the dam\'s electricity', es: 'Egipto vende la electricidad de la represa', fa: 'مصر برق بند را می‌فروشد' }], answer: 0,
        why: { en: 'Egypt depends on the Nile. It fears the dam will slow the water that reaches it.', es: 'Egipto depende del Nilo. Teme que la represa reduzca el agua que le llega.', fa: 'مصر به نیل وابسته است. می‌ترسد بند آبی را که به آن می‌رسد کم کند.' } },
      { q: { en: 'What is OPEC?', es: '¿Qué es la OPEP?', fa: 'اوپک چیست؟' },
        choices: [{ en: 'A group of oil-exporting countries that meet about how much oil to sell', es: 'Un grupo de países que exportan petróleo y se reúnen para decidir cuánto vender', fa: 'گروهی از کشورهای صادرکنندهٔ تیل که دربارهٔ مقدار فروش تیل جلسه می‌کنند' }, { en: 'A river in Iraq', es: 'Un río de Irak', fa: 'یک دریا در عراق' }, { en: 'A desalination plant', es: 'Una planta desalinizadora', fa: 'یک فابریکهٔ آب‌شیرین‌کن' }, { en: 'A border wall', es: 'Un muro fronterizo', fa: 'یک دیوار سرحدی' }], answer: 0,
        why: { en: 'OPEC members, like Saudi Arabia, Iraq and Kuwait, meet to decide how much oil to sell.', es: 'Los miembros de la OPEP, como Arabia Saudita, Irak y Kuwait, se reúnen para decidir cuánto petróleo vender.', fa: 'عضوهای اوپک، مثل عربستان سعودی، عراق و کویت، جلسه می‌کنند تا مقدار فروش تیل را تعیین کنند.' } },
      { q: { en: 'What is a border dispute?', es: '¿Qué es una disputa fronteriza?', fa: 'اختلاف سرحدی چیست؟' },
        choices: [{ en: 'An argument over exactly where a border line should be', es: 'Una discusión sobre dónde debe estar exactamente una frontera', fa: 'دعوا بر سر این‌که خط سرحد دقیقاً کجا باشد' }, { en: 'A party at the border', es: 'Una fiesta en la frontera', fa: 'یک جشن در سرحد' }, { en: 'A map with no borders', es: 'Un mapa sin fronteras', fa: 'نقشه‌ای بدون سرحد' }, { en: 'A river that changes color', es: 'Un río que cambia de color', fa: 'دریایی که رنگش تغییر می‌کند' }], answer: 0,
        why: { en: 'A [[border dispute|border dispute]] can be about land, water or oil under the ground.', es: 'Una [[border dispute|disputa fronteriza]] puede ser por tierra, agua o petróleo bajo el suelo.', fa: '[[border dispute|اختلاف سرحدی]] می‌تواند دربارهٔ زمین، آب یا تیل زیر زمین باشد.' } },
      { q: { en: 'Why is the Dead Sea shrinking?', es: '¿Por qué se encoge el mar Muerto?', fa: 'چرا بحیرهٔ مرده کوچک می‌شود؟' },
        choices: [{ en: 'People take so much river water that little reaches it', es: 'La gente saca tanta agua del río que poca llega hasta él', fa: 'مردم این‌قدر آب از دریا می‌گیرند که کمی به آن می‌رسد' }, { en: 'Too much rain falls on it', es: 'Le cae demasiada lluvia', fa: 'باران زیاد روی آن می‌بارد' }, { en: 'Fish drink the water', es: 'Los peces se beben el agua', fa: 'ماهی‌ها آب را می‌نوشند' }, { en: 'It is moving to another country', es: 'Se está mudando a otro país', fa: 'به کشور دیگری می‌رود' }], answer: 0,
        why: { en: 'Farms and cities use most of the Jordan River\'s water before it reaches the Dead Sea.', es: 'Las granjas y ciudades usan la mayor parte del agua del Jordán antes de que llegue al mar Muerto.', fa: 'کشتزارها و شهرها بیشتر آب دریای اردن را پیش از رسیدن به بحیرهٔ مرده مصرف می‌کنند.' } },
      { q: { en: 'What does a desalination plant do?', es: '¿Qué hace una planta desalinizadora?', fa: 'فابریکهٔ آب‌شیرین‌کن چه کار می‌کند؟' },
        choices: [{ en: 'Takes salt out of seawater to make fresh water', es: 'Le quita la sal al agua de mar para hacer agua dulce', fa: 'نمک را از آب بحر می‌گیرد تا آب شیرین بسازد' }, { en: 'Adds salt to rivers', es: 'Le pone sal a los ríos', fa: 'به دریاها نمک اضافه می‌کند' }, { en: 'Pumps oil from the ground', es: 'Saca petróleo de la tierra', fa: 'از زمین تیل می‌کشد' }, { en: 'Makes rain fall', es: 'Hace que llueva', fa: 'باران می‌باراند' }], answer: 0,
        why: { en: '[[desalination|Desalination]] turns salty seawater into fresh water. It uses a lot of energy.', es: 'La [[desalination|desalinización]] convierte el agua salada del mar en agua dulce. Usa mucha energía.', fa: '[[desalination|شیرین کردن آب بحر]] آب شور را به آب شیرین تبدیل می‌کند. انرژی زیاد مصرف می‌کند.' } },
      { q: { en: 'Which one shows neighbors working together on water?', es: '¿Cuál muestra a vecinos trabajando juntos por el agua?', fa: 'کدام یک همکاری همسایه‌ها را بر سر آب نشان می‌دهد؟' },
        choices: [{ en: 'They sign a treaty and share river reports', es: 'Firman un tratado y comparten informes del río', fa: 'معاهده امضا می‌کنند و گزارش‌های دریا را شریک می‌کنند' }, { en: 'Each one pumps as fast as it can', es: 'Cada uno bombea lo más rápido que puede', fa: 'هر کدام هر قدر زود که بتواند آب می‌کشد' }, { en: 'They stop talking to each other', es: 'Dejan de hablarse', fa: 'با هم گپ نمی‌زنند' }, { en: 'They hide their water numbers', es: 'Esconden sus datos del agua', fa: 'عددهای آب خود را پنهان می‌کنند' }], answer: 0,
        why: { en: 'A [[treaty|treaty]] sets clear rules, and shared reports build trust. That is [[cooperation|cooperation]].', es: 'Un [[treaty|tratado]] pone reglas claras y los informes compartidos crean confianza. Eso es [[cooperation|cooperación]].', fa: '[[treaty|معاهده]] قاعده‌های روشن می‌گذارد و گزارش‌های مشترک اعتماد می‌سازد. این [[cooperation|همکاری]] است.' } },
      { q: { en: 'Why does drip irrigation save water?', es: '¿Por qué el riego por goteo ahorra agua?', fa: 'چرا آبیاری قطره‌ای آب را صرفه می‌کند؟' },
        choices: [{ en: 'It puts water right at the plant\'s roots', es: 'Pone el agua justo en las raíces de la planta', fa: 'آب را درست به ریشهٔ بوته می‌رساند' }, { en: 'It floods the whole field', es: 'Inunda todo el campo', fa: 'تمام کشتزار را زیر آب می‌کند' }, { en: 'It only works at night in the rain', es: 'Solo funciona de noche bajo la lluvia', fa: 'فقط شب و زیر باران کار می‌کند' }, { en: 'It uses seawater', es: 'Usa agua de mar', fa: 'از آب بحر استفاده می‌کند' }], answer: 0,
        why: { en: 'Water goes straight to the roots, so less is lost to the hot sun.', es: 'El agua va directo a las raíces, así que se pierde menos con el sol caliente.', fa: 'آب مستقیم به ریشه می‌رود، پس کمتر زیر آفتاب گرم از بین می‌رود.' } }
    ]
  },

  learned: [
    { en: 'Fresh water is [[scarce|scarce]] in the Levant. The Jordan River is a [[transboundary|transboundary]] resource shared by several neighbors.', es: 'El agua dulce es [[scarce|escasa]] en el Levante. El río Jordán es un recurso [[transboundary|transfronterizo]] que comparten varios vecinos.', fa: 'آب شیرین در شام [[scarce|کمیاب]] است. دریای اردن یک منبع [[transboundary|فراسرحدی]] است که چند همسایه آن را شریک دارند.' },
    { en: 'Neighbors can argue over borders and water, or they can cooperate with a [[treaty|treaty]], shared reports and fair shares.', es: 'Los vecinos pueden discutir por fronteras y agua, o pueden cooperar con un [[treaty|tratado]], informes compartidos y partes justas.', fa: 'همسایه‌ها می‌توانند بر سر سرحد و آب دعوا کنند، یا با [[treaty|معاهده]]، گزارش‌های مشترک و سهم‌های عادلانه همکاری کنند.' },
    { en: '[[desalination|Desalination]] makes new fresh water and [[drip irrigation|drip irrigation]] saves it, so more water can stay in the river.', es: 'La [[desalination|desalinización]] crea agua dulce nueva y el [[drip irrigation|riego por goteo]] la ahorra, así que más agua puede quedarse en el río.', fa: '[[desalination|شیرین کردن آب بحر]] آب شیرین تازه می‌سازد و [[drip irrigation|آبیاری قطره‌ای]] آن را صرفه می‌کند، پس آب بیشتری در دریا می‌ماند.' }
  ],
  reflect: {
    q: { en: 'Think of something you share with other people, like a room, a phone or a soccer field. What rule makes the sharing fair?', es: 'Piensa en algo que compartes con otras personas, como un cuarto, un teléfono o una cancha de fútbol. ¿Qué regla hace que compartir sea justo?', fa: 'به چیزی فکر کن که با دیگران شریک داری، مثل یک اتاق، یک تیلفون یا یک میدان فوتبال. کدام قاعده شریک شدن را عادلانه می‌کند؟' },
    starter: { en: 'Something I share with other people is', es: 'Algo que comparto con otras personas es', fa: 'چیزی که با دیگران شریک دارم' }
  }
};
