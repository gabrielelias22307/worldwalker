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
    { en: 'The Drought Grump is drinking the Jordan River! It wants neighbors to fight over water.',
      es: '¡El Gruñón Sequía se está bebiendo el río Jordán! Quiere que los vecinos peleen por el agua.',
      fa: 'غرغروی خشکسالی آب دریای اردن را می‌نوشد! می‌خواهد همسایه‌ها بر سر آب دعوا کنند.' },
    { en: 'Talk to the engineer, the water planner and the farmer. Then lead the water council.',
      es: 'Habla con la ingeniera, la planificadora del agua y el agricultor. Luego dirige el consejo del agua.',
      fa: 'با انجنیر، برنامه‌ریز آب و دهقان گپ بزن. بعد شورای آب را رهبری کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [35.55, 32.0],
    start: [
      { en: 'This is the Jordan River. Several neighbors share its water.',
        es: 'Este es el río Jordán. Varios vecinos comparten su agua.',
        fa: 'این دریای اردن است. چند همسایه آبش را با هم شریک‌اند.' },
      { en: 'The Jordan flows into the Dead Sea, the lowest land on Earth.',
        es: 'El Jordán llega al mar Muerto, la tierra más baja del mundo.',
        fa: 'اردن به بحیرهٔ مرده می‌ریزد، پست‌ترین خشکهٔ زمین.' },
      { en: 'The Dead Sea is so salty that people float on top of it.',
        es: 'El mar Muerto es tan salado que la gente flota encima.',
        fa: 'بحیرهٔ مرده آن‌قدر شور است که مردم رویش شناور می‌مانند.' }
    ],
    page: { en: 'In 1994, Israel and Jordan signed a peace treaty that shares Jordan River water.',
      es: 'En 1994, Israel y Jordania firmaron un tratado de paz que reparte el agua del Jordán.',
      fa: 'در ۱۹۹۴، اسرائیل و اردن پیمان صلحی امضا کردند که آب دریای اردن را تقسیم می‌کند.' }
  },

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
    '=~s.,o1o.~~.o1o.gg:ggggggggggTMM',
    '=~ss.o2o.~~.o2o.gg:ggrgggggggggM',
    '=~s..o1o.bb.o1o.gg:ggggggggggTMM',
    '=~s..o1o.~~.o1o.gg:gggggggggrggM',
    '=~ss.oo2.~~.2oo.gg:::::::::ggggM',
    '=~s.w.ww.~~.www.ggrgggJJJJ:gggTM',
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
  /* build: one shared canal from the Yarmouk River to BOTH towns (north and south of the river) — cooperation over a scarce resource */
  build: [
    { id: 'canal', kind: 'place', board: [22, 6], tile: '~', ok: [[24, 6], [24, 5], [24, 8], [24, 9], [24, 10], [24, 11]], cost: { wood: 1 },
      name: { en: 'The shared canal', es: 'El canal compartido', fa: 'کانال مشترک' },
      ask: { en: 'Water is [[scarce|scarce]] here. One town is north of the Yarmouk River and one is south. Build one canal that both towns share. It goes in a straight line from the river: north to the road of the north town, and south to the road of the south town.',
        es: 'Aquí el agua es [[scarce|escasa]]. Un pueblo está al norte del río Yarmuk y otro al sur. Construye un canal que compartan los dos pueblos. Va en línea recta desde el río: al norte hasta el camino del pueblo del norte, y al sur hasta el camino del pueblo del sur.',
        fa: 'آب این جا [[scarce|کم]] است. یک شهرک در شمال دریای یرموک است و یکی در جنوب. یک کانال بساز که هر دو شهرک با هم شریک باشند. از دریا در یک خط راست می‌رود: به شمال تا سرک شهرک شمالی، و به جنوب تا سرک شهرک جنوبی.' },
      why: { en: 'Yes: the canal takes river water toward the towns.', es: 'Sí: el canal lleva el agua del río hacia los pueblos.', fa: 'بله: کانال آب دریا را به طرف شهرک‌ها می‌برد.' },
      wrong: { en: 'Not here. Sharing means both towns get water. Build one straight line from the river, north to one town\'s road and south to the other.', es: 'Aquí no. Compartir quiere decir que los dos pueblos reciben agua. Haz una línea recta desde el río, al norte hasta el camino de un pueblo y al sur hasta el del otro.', fa: 'این جا نه. شریک بودن یعنی هر دو شهرک آب بگیرند. از دریا یک خط راست بساز، به شمال تا سرک یک شهرک و به جنوب تا سرک شهرک دیگر.' },
      wrongBy: [
        { x: 2, y: 1, w: 7, h: 19, t: { en: 'This is across the Jordan, far from both towns. The shared canal starts at the Yarmouk River, between the two towns.', es: 'Esto está al otro lado del Jordán, lejos de los dos pueblos. El canal compartido empieza en el río Yarmuk, entre los dos pueblos.', fa: 'این جا آن طرف اردن است، دور از هر دو شهرک. کانال مشترک از دریای یرموک، میان دو شهرک، شروع می‌شود.' } },
        { x: 26, y: 8, w: 5, h: 4, t: { en: 'A canal here takes water to the empty dry grass, and to only one town. Sharing means both towns get water.', es: 'Un canal aquí lleva agua al pasto seco vacío, y a un solo pueblo. Compartir quiere decir que los dos pueblos reciben agua.', fa: 'کانال در این جا آب را به علف خشک خالی و فقط به یک شهرک می‌برد. شریک بودن یعنی هر دو شهرک آب بگیرند.' } }
      ],
      done: { en: 'One canal, two towns, and both get water. The Yarmouk River crosses a border. When neighbors share it and plan together, that is [[cooperation|cooperation]].',
        es: 'Un canal, dos pueblos, y los dos reciben agua. El río Yarmuk cruza una frontera. Cuando los vecinos lo comparten y planean juntos, eso es [[cooperation|cooperación]].',
        fa: 'یک کانال، دو شهرک، و هر دو آب می‌گیرند. دریای یرموک از یک سرحد می‌گذرد. وقتی همسایه‌ها آن را شریک می‌شوند و با هم برنامه می‌ریزند، این [[cooperation|همکاری]] است.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [15, 9], at: [11, 8], decor: 'flower',
      clue: { en: 'The Yarmouk flows in from the east. Stand on the land square south of it and east of the Jordan.', es: 'El Yarmuk llega desde el este. Párate en el cuadro de tierra al sur del Yarmuk y al este del Jordán.', fa: 'یرموک از شرق می‌آید. روی خانهٔ خشکهٔ جنوبِ یرموک و شرقِ اردن بایست.' },
      text: { en: 'Two rivers meet here! The Yarmouk is the Jordan\'s biggest tributary, a river flowing into a bigger one.', es: '¡Aquí se juntan dos ríos! El Yarmuk es el afluente más grande del Jordán: un río que entra en otro más grande.', fa: 'دو دریا این‌جا به هم می‌رسند! یرموک بزرگ‌ترین شاخهٔ اردن است، دریایی که به دریای بزرگ‌تر می‌ریزد.' } },
    { clueAt: [21, 2], at: [19, 5], decor: 'fossil',
      clue: { en: 'From this note, walk 3 steps south, then 2 steps west. Look in the dry grass.', es: 'Desde esta nota, camina 3 pasos al sur y luego 2 pasos al oeste. Busca en el pasto seco.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۲ قدم به غرب. در علف خشک بپال.' },
      text: { en: 'South is down, west is left. A fossil sea shell! Millions of years ago, a sea covered this land.', es: 'El sur está abajo, el oeste a la izquierda. ¡Un fósil de concha marina! Hace millones de años, un mar cubría esta tierra.', fa: 'جنوب پایین و غرب طرف چپ است. فسیل یک صدف بحری! ملیون‌ها سال پیش، بحر این زمین را پوشانده بود.' } }
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
        { en: 'Welcome to the Levant, at the east end of the Mediterranean Sea.',
          es: 'Bienvenido al Levante, en el extremo este del mar Mediterráneo.',
          fa: 'به شام (لِوانت) در شرق بحیرهٔ مدیترانه خوش آمدی.' },
        { en: 'Rain falls only in winter. Summers are long and dry. Fresh water is [[scarce|scarce]].',
          es: 'Solo llueve en invierno. Los veranos son largos y secos. El agua dulce es [[scarce|escasa]].',
          fa: 'باران فقط در زمستان می‌بارد. تابستان‌ها دراز و خشک هستند. آب شیرین [[scarce|کمیاب]] است.' },
        { en: 'But the sea never runs dry! My plant takes salt out of seawater: [[desalination|desalination]].',
          es: '¡Pero el mar nunca se seca! Mi planta le quita la sal al agua de mar: [[desalination|desalinización]].',
          fa: 'اما بحر هرگز خشک نمی‌شود! فابریکهٔ من نمک را از آب بحر می‌گیرد: [[desalination|شیرین کردن آب بحر]].' },
        { en: 'The hard part: it needs lots of energy and leaves very salty water behind.',
          es: 'Lo difícil: necesita mucha energía y deja atrás agua muy salada.',
          fa: 'مشکل این است: انرژی زیاد لازم دارد و آب بسیار شور از آن باقی می‌ماند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why is fresh water so precious in the Levant?', es: '¿Por qué el agua dulce es tan valiosa en el Levante?', fa: 'چرا آب شیرین در شام این‌قدر قیمتی است؟' },
        choices: [
          { ok: true, t: { en: 'Little rain falls, so water is scarce', es: 'Llueve poco, así que el agua escasea', fa: 'باران کم می‌بارد، پس آب کمیاب است' },
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
        { en: 'Rivers ignore borders. Lebanon, Syria, Jordan, Israel and the Palestinians share the Jordan.',
          es: 'Los ríos no respetan fronteras. Líbano, Siria, Jordania, Israel y los palestinos comparten el Jordán.',
          fa: 'دریاها سرحد نمی‌شناسند. لبنان، سوریه، اردن، اسرائیل و فلسطینی‌ها دریای اردن را شریک هستند.' },
        { en: 'A resource that crosses borders is [[transboundary|transboundary]]. Neighbors can argue or work together.',
          es: 'Un recurso que cruza fronteras es [[transboundary|transfronterizo]]. Los vecinos pueden discutir o trabajar juntos.',
          fa: 'منبعی که از سرحد می‌گذرد [[transboundary|فراسرحدی]] است. همسایه‌ها می‌توانند دعوا کنند یا با هم کار کنند.' },
        { en: 'A [[border dispute|border dispute]] is a fight over a border line. A [[treaty|treaty]] sets written rules.',
          es: 'Una [[border dispute|disputa fronteriza]] es una pelea por una frontera. Un [[treaty|tratado]] pone reglas escritas.',
          fa: '[[border dispute|اختلاف سرحدی]] دعوا بر سر خط سرحد است. [[treaty|معاهده]] قاعده‌های نوشته‌شده می‌گذارد.' },
        { en: 'In 1994, Jordan and Israel signed a treaty to share river water. Sharing takes trust.',
          es: 'En 1994, Jordania e Israel firmaron un tratado para compartir el agua del río. Compartir necesita confianza.',
          fa: 'در سال ۱۹۹۴، اردن و اسرائیل معاهده‌ای برای شریک شدن آب دریا امضا کردند. شریک شدن اعتماد می‌خواهد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Which one is a transboundary resource?', es: '¿Cuál es un recurso transfronterizo?', fa: 'کدام یک منبع فراسرحدی است؟' },
        choices: [
          { ok: true, t: { en: 'A river that flows through two countries', es: 'Un río que pasa por dos países', fa: 'دریایی که از دو کشور می‌گذرد' },
            why: { en: 'Right. The river crosses borders, so its water is a shared problem.', es: 'Correcto. El río cruza fronteras, así que su agua es un problema compartido.', fa: 'درست است. دریا از سرحدها می‌گذرد، پس آبش یک مسئلهٔ مشترک است.' } },
          { t: { en: 'A well in the yard of one family\'s house', es: 'Un pozo en el patio de la casa de una familia', fa: 'یک چاه در حویلی خانهٔ یک خانواده' },
            why: { en: 'That well stays inside one place. It does not cross a border.', es: 'Ese pozo está en un solo lugar. No cruza una frontera.', fa: 'آن چاه در یک جا می‌ماند. از سرحد نمی‌گذرد.' } },
          { t: { en: 'A big old tree in a small city park', es: 'Un árbol viejo en un parque pequeño', fa: 'یک درخت کهنه در یک پارک کوچک شهر' },
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
        { en: 'My family grows tomatoes and dates in the Jordan Valley. The river flows south.',
          es: 'Mi familia cultiva tomates y dátiles en el valle del Jordán. El río corre al sur.',
          fa: 'خانوادهٔ من در درهٔ اردن بادنجان رومی و خرما کشت می‌کند. دریا به طرف جنوب می‌رود.' },
        { en: 'It ends in the Dead Sea, the lowest land on Earth. That sea shrinks yearly.',
          es: 'Termina en el mar Muerto, la tierra más baja del planeta. Ese mar se encoge cada año.',
          fa: 'در بحیرهٔ مرده تمام می‌شود، پایین‌ترین خشکهٔ زمین. آن بحیره هر سال کوچک‌تر می‌شود.' },
        { en: 'Farms and cities take so much river water that only a little reaches the end.',
          es: 'Las granjas y ciudades sacan tanta agua del río que solo un poco llega al final.',
          fa: 'کشتزارها و شهرها این‌قدر آب دریا را می‌گیرند که فقط کمی به آخر آن می‌رسد.' },
        { en: 'My [[drip irrigation|drip irrigation]] tubes drip water at the roots, so less is lost to sun.',
          es: 'Mis tubos de [[drip irrigation|riego por goteo]] dejan caer agua en las raíces, así se pierde menos con el sol.',
          fa: 'نل‌های [[drip irrigation|آبیاری قطره‌ای]] من آب را به ریشه می‌رسانند، پس کمتر زیر آفتاب از بین می‌رود.' }
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
    { x: 13, y: 4, text: { en: 'THE LAKE · Sea of Galilee, a freshwater lake. The Jordan flows in from the north and out to the south.',
                           es: 'EL LAGO · Mar de Galilea, un lago de agua dulce. El Jordán entra por el norte y sale por el sur.',
                           fa: 'جهیل · جهیل طبریه، یک جهیل آب شیرین. دریای اردن از شمال به آن می‌ریزد و به جنوب بیرون می‌رود.' } },
    { x: 14, y: 16, text: { en: 'OLD SHORE · The Dead Sea once came up to this sign. Less river water arrives every year.',
                            es: 'ORILLA VIEJA · El mar Muerto antes llegaba hasta este letrero. Cada año llega menos agua del río.',
                            fa: 'ساحل کهنه · بحیرهٔ مرده زمانی تا این تابلو می‌رسید. هر سال آب کمتری از دریا می‌رسد.' } }
  ],

  /* the quest: Rania the river scientist (gold !) -> Sami the fisher at the lake -> follow the Ink Thief's riddles to the desalination plant, the Dead Sea shore and the old well, then catch it -> back to Rania */
  quest: {
    stat: 'reg',
    title: { en: 'The Stolen River Report', es: 'El informe del río robado', fa: 'گزارش دزدیده‌شدهٔ دریا' },
    giver: {
      x: 22, y: 8,
      name: { en: 'Rania', es: 'Rania', fa: 'رانیا' },
      role: { en: 'River scientist', es: 'Científica del río', fa: 'دانشمند دریا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a8a6a', pants: '#2c3445', robe: true },
      lines: [
        { en: 'Oh no! I am Rania. Every week I measure the water in the Yarmouk River.',
          es: '¡Ay, no! Soy Rania. Cada semana mido el agua del río Yarmuk.',
          fa: 'وای نه! من رانیا هستم. هر هفته آب دریای یرموک را اندازه می‌کنم.' },
        { en: 'Then I share my river report with all the neighbors.',
          es: 'Luego comparto mi informe del río con todos los vecinos.',
          fa: 'بعد گزارش دریا را با همهٔ همسایه‌ها شریک می‌کنم.' },
        { en: 'The Ink Thief grabbed my report! Now nobody knows how much water we can share.',
          es: '¡El Ladrón de Tinta agarró mi informe! Ahora nadie sabe cuánta agua podemos compartir.',
          fa: 'دزد رنگ گزارش مرا گرفت! حالا هیچ کس نمی‌داند چقدر آب را می‌توانیم تقسیم کنیم.' },
        { en: 'Sami the fisher was at the lake. Did he see it?',
          es: 'Sami, el pescador, estaba en el lago. ¿Lo habrá visto?',
          fa: 'سامی ماهیگیر کنار جهیل بود. آیا او آن را دید؟' }
      ],
      wait: { en: 'Sami is at the lake, north-west. Cross the bridge north, then walk west.',
              es: 'Sami está en el lago, al noroeste. Cruza el puente al norte y luego camina al oeste.',
              fa: 'سامی کنار جهیل در شمال غرب است. از پل به شمال بگذر، بعد به غرب برو.' },
      thanks: { en: 'My report! Shared facts build trust, and trust makes [[cooperation|cooperation]] easier.',
                es: '¡Mi informe! Los datos compartidos crean confianza, y la confianza facilita la [[cooperation|cooperación]].',
                fa: 'گزارش من! معلومات مشترک اعتماد می‌سازد و اعتماد [[cooperation|همکاری]] را آسان‌تر می‌کند.' }
    },
    contact: {
      x: 14, y: 5,
      name: { en: 'Sami', es: 'Sami', fa: 'سامی' },
      role: { en: 'Fisher on the lake', es: 'Pescador del lago', fa: 'ماهیگیر جهیل' },
      look: { skin: 5, hair: '#151010', shirt: '#d9a441', pants: '#3a4a5a', hat: '#5a6a7a' },
      lines: [
        { en: 'Yes, I saw it! A blob of ink with Rania\'s papers.',
          es: '¡Sí, lo vi! Una mancha de tinta con los papeles de Rania.',
          fa: 'بلی، دیدمش! یک غرغروی رنگ با کاغذهای رانیا.' },
        { en: 'The Jordan is [[transboundary|transboundary]]. It crosses borders, so her report matters to everyone.',
          es: 'El Jordán es [[transboundary|transfronterizo]]. Cruza fronteras, así que su informe les importa a todos.',
          fa: 'دریای اردن [[transboundary|فراسرحدی]] است. از سرحدها می‌گذرد، پس گزارش او برای همه مهم است.' },
        { en: 'It tore the report into 3 pieces and hid them near the water.',
          es: 'Rompió el informe en 3 pedazos y los escondió cerca del agua.',
          fa: 'گزارش را سه تکه کرد و تکه‌ها را نزدیک آب پنهان کرد.' },
        { en: 'Follow its riddles to the right places. Then catch the thief!',
          es: 'Sigue sus acertijos hasta los lugares correctos. ¡Después atrapa al ladrón!',
          fa: 'چیستان‌هایش را تا جاهای درست دنبال کن. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [20, 18],
      hops: [[25, 17], [28, 19]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "I tore the river report into 3 pieces! Follow my riddles!"',
               es: 'El Ladrón de Tinta se ríe: "¡Rompí el informe del río en 3 pedazos! ¡Sigue mis acertijos!"',
               fa: 'دزد رنگ می‌خندد: «گزارش دریا را سه تکه کردم! چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Fresh water is [[scarce|scarce]], but the sea is full. Piece 1 is where seawater loses its salt.',
               es: 'El agua dulce es [[scarce|escasa]], pero el mar está lleno. El pedazo 1 está donde el agua de mar pierde la sal.',
               fa: 'آب شیرین [[scarce|کمیاب]] است، اما بحر پر است. تکهٔ ۱ جایی است که آب بحر نمکش را از دست می‌دهد.' },
          zones: [{ x: 1, y: 1, w: 6, h: 6 }],
          noBy: [{ x: 2, y: 15, w: 14, h: 6, t: { en: 'The Dead Sea is salty, but nobody makes fresh water here, and it is shrinking. Look for the plant by the big sea in the west.', es: 'El mar Muerto es salado, pero aquí nadie hace agua dulce, y se está encogiendo. Busca la planta junto al mar grande del oeste.', fa: 'بحیرهٔ مرده شور است، اما این جا کسی آب شیرین نمی‌سازد، و کوچک‌تر می‌شود. فابریکه را کنار بحر بزرگ در غرب پیدا کن.' } }],
          found: { en: 'Piece 1, at the [[desalination|desalination]] plant! The sea is full, but salty.', es: '¡El pedazo 1, en la planta de [[desalination|desalinización]]! El mar está lleno, pero es salado.', fa: 'تکهٔ ۱، در فابریکهٔ [[desalination|آب‌شیرین‌کن]]! بحر پر است، اما شور است.' } },
        { t: { en: 'Upstream towns take the most water. Piece 2 is at the river\'s far end, where less arrives.',
               es: 'Los pueblos de río arriba toman más agua. El pedazo 2 está al final del río, donde llega menos.',
               fa: 'شهرک‌های بالای دریا بیشترین آب را می‌گیرند. تکهٔ ۲ در آخر دریا است، جایی که آب کمتری می‌رسد.' },
          zones: [{ x: 2, y: 15, w: 14, h: 6 }],
          noBy: [{ x: 11, y: 1, w: 5, h: 6, t: { en: 'This lake is near the start of the river. There is still plenty of water here. Follow the river south to where it ends.', es: 'Este lago está cerca del inicio del río. Aquí todavía hay mucha agua. Sigue el río hacia el sur hasta donde termina.', fa: 'این جهیل نزدیک شروع دریا است. این جا هنوز آب زیاد است. دریا را به طرف جنوب تا آخرش دنبال کن.' } }],
          found: { en: 'Piece 2, at the Dead Sea\'s old shore! Upstream takes more, downstream gets less.', es: '¡El pedazo 2, en la orilla vieja del mar Muerto! Río arriba toman más, río abajo recibe menos.', fa: 'تکهٔ ۲، در ساحل کهنهٔ بحیرهٔ مرده! بالای دریا بیشتر می‌گیرد، پایین دریا کمتر.' } },
        { t: { en: 'Piece 3 is where neighbors share river reports: the old well in the town south of the Yarmouk.',
               es: 'El pedazo 3 está donde los vecinos comparten informes: el pozo viejo del pueblo al sur del Yarmuk.',
               fa: 'تکهٔ ۳ جایی است که همسایه‌ها گزارش دریا را شریک می‌کنند: چاه کهنه در شهرک جنوب یرموک.' },
          zones: [{ x: 20, y: 12, w: 10, h: 5 }],
          noBy: [{ x: 23, y: 1, w: 8, h: 5, t: { en: 'This is the north town. It is only one of the neighbors. All the neighbors meet at the old well in the south town, across the Yarmouk River.', es: 'Este es el pueblo del norte. Es solo uno de los vecinos. Todos los vecinos se reúnen en el pozo viejo del pueblo del sur, al otro lado del río Yarmuk.', fa: 'این شهرک شمالی است. فقط یکی از همسایه‌ها است. همهٔ همسایه‌ها کنار چاه کهنه در شهرک جنوبی، آن طرف دریای یرموک، جمع می‌شوند.' } }],
          found: { en: 'Piece 3, at the old well! Shared facts help neighbors plan for droughts and floods.', es: '¡El pedazo 3, en el pozo viejo! Los datos compartidos ayudan a planear para sequías e inundaciones.', fa: 'تکهٔ ۳، کنار چاه کهنه! معلومات مشترک به همسایه‌ها کمک می‌کند برای خشکسالی و سیلاب آماده شوند.' } }
      ],
      win: { en: 'Got you! The thief melts into ink. All 3 pieces fit: Rania\'s report is whole again.',
             es: '¡Te atrapé! El ladrón se derrite en tinta. Los 3 pedazos encajan: el informe de Rania está completo.',
             fa: 'گرفتمت! دزد آب می‌شود و رنگ می‌ماند. هر سه تکه جور می‌شوند: گزارش رانیا دوباره کامل است.' },
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
        choices: [{ en: 'Crossing from one country to another', es: 'Que cruza de un país a otro', fa: 'از یک کشور به کشور دیگر گذشتن' }, { en: 'Staying inside one city', es: 'Que se queda dentro de una ciudad', fa: 'داخل یک شهر ماندن' }, { en: 'Found only deep under the salty sea', es: 'Que solo está bajo el mar salado', fa: 'فقط در عمق بحر شور پیدا شدن' }, { en: 'Owned by just one family or farmer', es: 'Que es de una sola familia o agricultor', fa: 'مال فقط یک خانواده یا دهقان بودن' }], answer: 0,
        why: { en: 'A [[transboundary|transboundary]] resource, like a river, crosses borders.', es: 'Un recurso [[transboundary|transfronterizo]], como un río, cruza fronteras.', fa: 'یک منبع [[transboundary|فراسرحدی]]، مثل دریا، از سرحدها می‌گذرد.' } },
      { q: { en: 'Ethiopia built a huge dam on the Blue Nile. Why does Egypt worry?', es: 'Etiopía construyó una gran represa en el Nilo Azul. ¿Por qué se preocupa Egipto?', fa: 'ایتوپیا یک بند بزرگ روی نیل آبی ساخت. چرا مصر نگران است؟' },
        choices: [{ en: 'Egypt needs the Nile for its water', es: 'Egipto necesita el agua del Nilo', fa: 'مصر برای آب به نیل وابسته است' }, { en: 'Egypt already gets far too much rain', es: 'Egipto ya recibe demasiada lluvia', fa: 'مصر همین حالا باران بسیار زیاد دارد' }, { en: 'The new dam is on Egypt\'s own land', es: 'La represa nueva está en tierra egipcia', fa: 'بند تازه در خاک خود مصر است' }, { en: 'Egypt sells the dam\'s electricity', es: 'Egipto vende la electricidad de la represa', fa: 'مصر برق بند را می‌فروشد' }], answer: 0,
        why: { en: 'Egypt depends on the Nile. It fears the dam will slow the water that reaches it.', es: 'Egipto depende del Nilo. Teme que la represa reduzca el agua que le llega.', fa: 'مصر به نیل وابسته است. می‌ترسد بند آبی را که به آن می‌رسد کم کند.' } },
      { q: { en: 'What is OPEC?', es: '¿Qué es la OPEP?', fa: 'اوپک چیست؟' },
        choices: [{ en: 'A group of countries that sell oil', es: 'Un grupo de países que venden petróleo', fa: 'گروهی از کشورهایی که تیل می‌فروشند' }, { en: 'A long river that flows through Iraq', es: 'Un río largo que pasa por Irak', fa: 'یک دریای دراز که از عراق می‌گذرد' }, { en: 'A plant that makes seawater fresh', es: 'Una planta que hace dulce el agua de mar', fa: 'فابریکه‌ای که آب بحر را شیرین می‌کند' }, { en: 'A tall wall built along a border', es: 'Un muro alto en una frontera', fa: 'یک دیوار بلند در کنار سرحد' }], answer: 0,
        why: { en: 'OPEC members, like Saudi Arabia, Iraq and Kuwait, meet to decide how much oil to sell.', es: 'Los miembros de la OPEP, como Arabia Saudita, Irak y Kuwait, se reúnen para decidir cuánto petróleo vender.', fa: 'عضوهای اوپک، مثل عربستان سعودی، عراق و کویت، جلسه می‌کنند تا مقدار فروش تیل را تعیین کنند.' } },
      { q: { en: 'What is a border dispute?', es: '¿Qué es una disputa fronteriza?', fa: 'اختلاف سرحدی چیست؟' },
        choices: [{ en: 'An argument over where a border goes', es: 'Una discusión sobre dónde va una frontera', fa: 'دعوا بر سر جای خط سرحد' }, { en: 'A big party held right at the border', es: 'Una gran fiesta justo en la frontera', fa: 'یک جشن بزرگ درست در سرحد' }, { en: 'A map that shows no borders at all', es: 'Un mapa que no muestra ninguna frontera', fa: 'نقشه‌ای که هیچ سرحدی نشان نمی‌دهد' }, { en: 'A river that changes color', es: 'Un río que cambia de color', fa: 'دریایی که رنگش تغییر می‌کند' }], answer: 0,
        why: { en: 'A [[border dispute|border dispute]] can be about land, water or oil under the ground.', es: 'Una [[border dispute|disputa fronteriza]] puede ser por tierra, agua o petróleo bajo el suelo.', fa: '[[border dispute|اختلاف سرحدی]] می‌تواند دربارهٔ زمین، آب یا تیل زیر زمین باشد.' } },
      { q: { en: 'Why is the Dead Sea shrinking?', es: '¿Por qué se encoge el mar Muerto?', fa: 'چرا بحیرهٔ مرده کوچک می‌شود؟' },
        choices: [{ en: 'People use the river water first', es: 'La gente usa primero el agua del río', fa: 'مردم اول آب دریا را مصرف می‌کنند' }, { en: 'Too much rain falls on it each year', es: 'Le cae demasiada lluvia cada año', fa: 'هر سال باران بسیار زیاد روی آن می‌بارد' }, { en: 'Fish and birds drink up its water', es: 'Los peces y las aves se beben su agua', fa: 'ماهی‌ها و پرنده‌ها آبش را می‌نوشند' }, { en: 'It is moving to another country', es: 'Se está mudando a otro país', fa: 'به کشور دیگری می‌رود' }], answer: 0,
        why: { en: 'Farms and cities use most of the Jordan River\'s water before it reaches the Dead Sea.', es: 'Las granjas y ciudades usan la mayor parte del agua del Jordán antes de que llegue al mar Muerto.', fa: 'کشتزارها و شهرها بیشتر آب دریای اردن را پیش از رسیدن به بحیرهٔ مرده مصرف می‌کنند.' } },
      { q: { en: 'What does a desalination plant do?', es: '¿Qué hace una planta desalinizadora?', fa: 'فابریکهٔ آب‌شیرین‌کن چه کار می‌کند؟' },
        choices: [{ en: 'Takes the salt out of seawater', es: 'Le quita la sal al agua de mar', fa: 'نمک را از آب بحر می‌گیرد' }, { en: 'Adds salt to rivers and lakes', es: 'Le pone sal a ríos y lagos', fa: 'به دریاها و جهیل‌ها نمک اضافه می‌کند' }, { en: 'Pumps oil up from under the ground', es: 'Saca petróleo de debajo de la tierra', fa: 'از زیر زمین تیل می‌کشد' }, { en: 'Makes rain fall', es: 'Hace que llueva', fa: 'باران می‌باراند' }], answer: 0,
        why: { en: '[[desalination|Desalination]] turns salty seawater into fresh water. It uses a lot of energy.', es: 'La [[desalination|desalinización]] convierte el agua salada del mar en agua dulce. Usa mucha energía.', fa: '[[desalination|شیرین کردن آب بحر]] آب شور را به آب شیرین تبدیل می‌کند. انرژی زیاد مصرف می‌کند.' } },
      { q: { en: 'Which one shows neighbors working together on water?', es: '¿Cuál muestra a vecinos trabajando juntos por el agua?', fa: 'کدام یک همکاری همسایه‌ها را بر سر آب نشان می‌دهد؟' },
        choices: [{ en: 'They sign a treaty and share reports', es: 'Firman un tratado y comparten informes', fa: 'معاهده امضا می‌کنند و گزارش شریک می‌کنند' }, { en: 'Each one pumps water as fast as it can', es: 'Cada uno bombea agua lo más rápido que puede', fa: 'هر کدام هر قدر زود که بتواند آب می‌کشد' }, { en: 'They stop talking to each other', es: 'Dejan de hablarse', fa: 'با هم گپ نمی‌زنند' }, { en: 'They hide their water numbers', es: 'Esconden sus datos del agua', fa: 'عددهای آب خود را پنهان می‌کنند' }], answer: 0,
        why: { en: 'A [[treaty|treaty]] sets clear rules, and shared reports build trust. That is [[cooperation|cooperation]].', es: 'Un [[treaty|tratado]] pone reglas claras y los informes compartidos crean confianza. Eso es [[cooperation|cooperación]].', fa: '[[treaty|معاهده]] قاعده‌های روشن می‌گذارد و گزارش‌های مشترک اعتماد می‌سازد. این [[cooperation|همکاری]] است.' } },
      { q: { en: 'Why does drip irrigation save water?', es: '¿Por qué el riego por goteo ahorra agua?', fa: 'چرا آبیاری قطره‌ای آب را صرفه می‌کند؟' },
        choices: [{ en: 'It puts water right at the roots', es: 'Pone el agua justo en las raíces', fa: 'آب را درست به ریشه می‌رساند' }, { en: 'It floods the whole field with water', es: 'Inunda todo el campo con agua', fa: 'تمام کشتزار را زیر آب می‌کند' }, { en: 'It only works at night in the rain', es: 'Solo funciona de noche bajo la lluvia', fa: 'فقط شب و زیر باران کار می‌کند' }, { en: 'It uses seawater', es: 'Usa agua de mar', fa: 'از آب بحر استفاده می‌کند' }], answer: 0,
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
