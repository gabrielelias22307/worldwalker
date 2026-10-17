/* WORLDWALKER · Episode 1.1 · Intro to Maps (WG.1)
   The model episode: every other episode follows this shape. See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'WG.1',
  title: { en: 'Intro to Maps', es: 'Introducción a los mapas', fa: 'آشنایی با نقشه‌ها' },
  place: { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
  intro: [
    { en: 'Pip: "The Smudge blew through Mapmaker\'s Valley! Every sign is blurry and people are lost. Talk to the mapmaker, the captain and the teacher. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón pasó por el Valle del Cartógrafo! Todos los letreros están borrosos y la gente está perdida. Habla con la cartógrafa, la capitana y el maestro. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه از درهٔ نقشه‌کش گذشت! همهٔ تابلوها تار شده و مردم گم شده‌اند. با نقشه‌کش، کپتان و معلم گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Legend in docs/EPISODE-FORMAT.md */
  map: [
    'TTTTTTTTTTTTTTTTTTTTT~~TTTTTTTTT',
    'T....................~~........T',
    'T.RRR....QQQQ........~~.T,~~~~.T',
    'T.hdh....hhdh........~~...~~~~.T',
    'T.................x..~~...~~~~.T',
    'T.:::::::::::::::::::bb:::::::.T',
    'T.....x:....,........~~..T....PT',
    'T..,...:......RRRR...~~.....,..T',
    'T......:......hdhh...~~kk......T',
    'T.,..,.:.....,.......~~.....P..T',
    'T......:.............~~.T......T',
    'T......:..........T..~~........T',
    'T.T.T..:..T.T........~~.QQQQ.K.T',
    'T..T...:...T."..r.,..~~.hdhh.K.T',
    'T...,..:."...."......~~........T',
    'T..".T.:."..T........~~........T',
    'T......::::::::::::::bb:::::::.T',
    'T.T..........T.......~~....:...T',
    'T..T......T....ro1o..~~....:.K.T',
    'T...T......T..T.2ooT.~~.KK.:.K.T',
    'T................T...~~........T',
    'TTTTTTTTTTTTTTTTTTTTT~~TTTTTTTTT'
  ],
  start: [4, 6],

  words: {
    'mental map': { en: 'the map of a place that you keep in your head', es: 'el mapa de un lugar que guardas en tu cabeza', fa: 'نقشهٔ یک جا که در ذهن خود داری' },
    latitude: { en: 'lines that run east–west and tell how far north or south of the equator a place is', es: 'líneas que van de este a oeste y dicen qué tan al norte o al sur del ecuador está un lugar', fa: 'خط‌هایی که از شرق به غرب می‌روند و نشان می‌دهند یک جا چقدر شمال یا جنوب خط استوا است' },
    longitude: { en: 'lines that run north–south and tell how far east or west of the prime meridian a place is', es: 'líneas que van de norte a sur y dicen qué tan al este o al oeste del meridiano de Greenwich está un lugar', fa: 'خط‌هایی که از شمال به جنوب می‌روند و نشان می‌دهند یک جا چقدر شرق یا غرب نصف‌النهار مبدأ است' },
    'absolute location': { en: 'the exact spot of a place, like a street address or latitude and longitude', es: 'el lugar exacto, como una dirección o la latitud y la longitud', fa: 'جای دقیق یک مکان، مثل آدرس سرک یا عرض و طول جغرافیایی' },
    'relative location': { en: 'where a place is compared to other places ("next to the river")', es: 'dónde está un lugar comparado con otros lugares ("junto al río")', fa: 'جای یک مکان در مقایسه با جاهای دیگر («کنار دریا»)' },
    projection: { en: 'the way a mapmaker flattens the round Earth onto a flat map', es: 'la forma en que un cartógrafo aplana la Tierra redonda en un mapa plano', fa: 'روشی که نقشه‌کش زمین گرد را روی نقشهٔ هموار می‌کشد' },
    'map key': { en: 'the box that tells what each color and symbol on a map means (also called a legend)', es: 'el cuadro que dice qué significa cada color y símbolo del mapa (también se llama leyenda)', fa: 'جعبه‌ای که معنای هر رنگ و نشانه را در نقشه می‌گوید (راهنمای نقشه)' },
    'compass rose': { en: 'the symbol on a map that shows north, south, east and west', es: 'el símbolo del mapa que muestra norte, sur, este y oeste', fa: 'نشانه‌ای در نقشه که شمال، جنوب، شرق و غرب را نشان می‌دهد' },
    'cardinal directions': { en: 'the four main directions: north, south, east and west', es: 'las cuatro direcciones principales: norte, sur, este y oeste', fa: 'چهار جهت اصلی: شمال، جنوب، شرق و غرب' },
    equator: { en: 'the line of 0° latitude around the middle of the Earth', es: 'la línea de 0° de latitud en el medio de la Tierra', fa: 'خط صفر درجه عرض جغرافیایی در میانهٔ زمین' }
  },

  npcs: [
    {
      x: 5, y: 4,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Mapmaker', es: 'Cartógrafa', fa: 'نقشه‌کش' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#c0392b' },
      lines: [
        { en: 'Welcome to Mapmaker\'s Valley! I draw maps for a living. But you carry a map that nobody printed: a [[mental map|mental map]]. It is the map of a place inside your own head.',
          es: '¡Bienvenido al Valle del Cartógrafo! Yo dibujo mapas. Pero tú llevas un mapa que nadie imprimió: un [[mental map|mapa mental]]. Es el mapa de un lugar dentro de tu cabeza.',
          fa: 'به درهٔ نقشه‌کش خوش آمدی! من نقشه می‌کشم. اما تو نقشه‌ای داری که کسی چاپ نکرده: یک [[mental map|نقشهٔ ذهنی]]. این نقشهٔ یک جا در ذهن خودت است.',
          easy: { en: 'Hi! I make maps. You have a map in your head too. It is called a [[mental map|mental map]].', es: '¡Hola! Yo hago mapas. Tú también tienes un mapa en tu cabeza. Se llama [[mental map|mapa mental]].', fa: 'سلام! من نقشه می‌سازم. تو هم یک نقشه در ذهنت داری. نامش [[mental map|نقشهٔ ذهنی]] است.' } },
        { en: 'Your mental map is sharp where you go often, like your street and your school. It is blank where you have never been. Two friends in the same city will draw two different mental maps.',
          es: 'Tu mapa mental es claro donde vas seguido, como tu calle y tu escuela. Está en blanco donde nunca has ido. Dos amigos de la misma ciudad dibujarán dos mapas mentales diferentes.',
          fa: 'نقشهٔ ذهنی تو جایی که زیاد می‌روی، مثل کوچه و مکتبت، روشن است. جایی که هرگز نرفته‌ای خالی است. دو دوست در یک شهر دو نقشهٔ ذهنی متفاوت می‌کشند.',
          easy: { en: 'You know your own street well. Places you never go are blank in your head.', es: 'Conoces bien tu calle. Los lugares donde nunca vas están en blanco en tu cabeza.', fa: 'کوچهٔ خودت را خوب می‌شناسی. جاهایی که هرگز نمی‌روی در ذهنت خالی است.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What is a mental map?', es: '¿Qué es un mapa mental?', fa: 'نقشهٔ ذهنی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A map of a place that you keep in your head', es: 'Un mapa de un lugar que guardas en tu cabeza', fa: 'نقشهٔ یک جا که در ذهنت نگه می‌داری' },
            why: { en: 'Nobody printed it. You built it by moving around.', es: 'Nadie lo imprimió. Lo construiste al moverte.', fa: 'کسی آن را چاپ نکرده. خودت با رفت‌وآمد آن را ساختی.' } },
          { t: { en: 'A map that shows only roads', es: 'Un mapa que muestra solo carreteras', fa: 'نقشه‌ای که فقط سرک‌ها را نشان می‌دهد' },
            why: { en: 'A mental map can hold anything you remember, not only roads.', es: 'Un mapa mental puede tener todo lo que recuerdas, no solo carreteras.', fa: 'نقشهٔ ذهنی هر چیزی را که به یاد داری نگه می‌دارد، نه فقط سرک‌ها.' } },
          { t: { en: 'A map made by a whole country', es: 'Un mapa hecho por todo un país', fa: 'نقشه‌ای که یک کشور کامل ساخته' },
            why: { en: 'A mental map belongs to one person.', es: 'Un mapa mental es de una sola persona.', fa: 'نقشهٔ ذهنی مال یک نفر است.' } }
        ]
      }
    },
    {
      x: 25, y: 8,
      name: { en: 'Captain Ama', es: 'Capitana Ama', fa: 'کپتان آما' },
      role: { en: 'Boat captain', es: 'Capitana de barco', fa: 'کپتان کشتی' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'In the middle of the ocean, I cannot say "turn left at the big tree"! Sailors use [[latitude|latitude]] and [[longitude|longitude]]. These lines make a grid around the whole Earth.',
          es: '¡En medio del océano no puedo decir "gira a la izquierda en el árbol grande"! Los marineros usamos la [[latitude|latitud]] y la [[longitude|longitud]]. Estas líneas forman una cuadrícula alrededor de la Tierra.',
          fa: 'در وسط بحر نمی‌توانم بگویم «کنار درخت بزرگ به چپ برو»! ملاحان از [[latitude|عرض جغرافیایی]] و [[longitude|طول جغرافیایی]] استفاده می‌کنند. این خط‌ها دور تمام زمین یک شبکه می‌سازند.',
          easy: { en: 'At sea there are no trees or roads. Sailors use a grid of lines called [[latitude|latitude]] and [[longitude|longitude]].', es: 'En el mar no hay árboles ni calles. Los marineros usan líneas llamadas [[latitude|latitud]] y [[longitude|longitud]].', fa: 'در بحر درخت و سرک نیست. ملاحان از خط‌هایی به نام [[latitude|عرض]] و [[longitude|طول]] جغرافیایی استفاده می‌کنند.' } },
        { en: 'A grid address like 40°N, 74°W is an [[absolute location|absolute location]]. It is exact and it does not change. "Next to the river" is a [[relative location|relative location]]. It tells where a place is by what is near it.',
          es: 'Una dirección en la cuadrícula como 40°N, 74°O es una [[absolute location|ubicación absoluta]]. Es exacta y no cambia. "Junto al río" es una [[relative location|ubicación relativa]]. Dice dónde está un lugar por lo que tiene cerca.',
          fa: 'آدرسی مثل ۴۰ درجه شمالی، ۷۴ درجه غربی یک [[absolute location|موقعیت مطلق]] است. دقیق است و تغییر نمی‌کند. «کنار دریا» یک [[relative location|موقعیت نسبی]] است. جای یک مکان را با چیزهای نزدیکش می‌گوید.',
          easy: { en: 'Exact grid numbers = [[absolute location|absolute location]]. "Near the river" = [[relative location|relative location]].', es: 'Números exactos = [[absolute location|ubicación absoluta]]. "Cerca del río" = [[relative location|ubicación relativa]].', fa: 'عددهای دقیق = [[absolute location|موقعیت مطلق]]. «نزدیک دریا» = [[relative location|موقعیت نسبی]].' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which one is an absolute location?', es: '¿Cuál es una ubicación absoluta?', fa: 'کدام یک موقعیت مطلق است؟' },
        choices: [
          { ok: true, t: { en: '0° latitude, 0° longitude', es: '0° de latitud, 0° de longitud', fa: '۰ درجه عرض، ۰ درجه طول' },
            why: { en: 'Grid numbers give one exact spot on Earth.', es: 'Los números de la cuadrícula dan un punto exacto en la Tierra.', fa: 'عددهای شبکه یک نقطهٔ دقیق روی زمین را نشان می‌دهند.' } },
          { t: { en: 'Across the bridge from the school', es: 'Al otro lado del puente desde la escuela', fa: 'آن طرف پل از مکتب' },
            why: { en: 'That describes the place by what is near it, so it is relative.', es: 'Eso describe el lugar por lo que tiene cerca, así que es relativa.', fa: 'این جا را با چیزهای نزدیکش می‌گوید، پس نسبی است.' } },
          { t: { en: 'A short walk from the lake', es: 'A una caminata corta del lago', fa: 'کمی راه از جهیل' },
            why: { en: 'You need to know where the lake is, so this is relative.', es: 'Necesitas saber dónde está el lago, así que es relativa.', fa: 'باید بدانی جهیل کجاست، پس این نسبی است.' } }
        ]
      }
    },
    {
      x: 25, y: 14,
      name: { en: 'Mr. Farid', es: 'Sr. Farid', fa: 'استاد فرید' },
      role: { en: 'Teacher at the valley school', es: 'Maestro de la escuela del valle', fa: 'معلم مکتب دره' },
      look: { skin: 1, hair: '#4a2c1a', shirt: '#3fa34d' },
      lines: [
        { en: 'The Earth is round like a ball. A paper map is flat. You cannot flatten a ball without stretching it. The way a mapmaker flattens the Earth is called a [[projection|projection]].',
          es: 'La Tierra es redonda como una pelota. Un mapa de papel es plano. No puedes aplanar una pelota sin estirarla. La forma en que un cartógrafo aplana la Tierra se llama [[projection|proyección]].',
          fa: 'زمین مثل توپ گرد است. نقشهٔ کاغذی هموار است. نمی‌شود توپ را بدون کش کردن هموار کرد. روشی که نقشه‌کش زمین را هموار می‌کند [[projection|پروجکشن]] نام دارد.',
          easy: { en: 'The Earth is round. Maps are flat. Making the Earth flat stretches some places.', es: 'La Tierra es redonda. Los mapas son planos. Aplanar la Tierra estira algunos lugares.', fa: 'زمین گرد است. نقشه هموار است. هموار کردن زمین بعضی جاها را کش می‌کند.' } },
        { en: 'On many world maps, Greenland looks as big as Africa. It is not! Africa is about 14 times bigger. Every map is a choice. The mapmaker picks what goes in the middle, what gets a name, and what is left out.',
          es: 'En muchos mapas del mundo, Groenlandia parece tan grande como África. ¡No lo es! África es unas 14 veces más grande. Cada mapa es una elección. El cartógrafo decide qué va en el centro, qué lleva nombre y qué se deja fuera.',
          fa: 'در بسیاری از نقشه‌های جهان، گرینلند به بزرگی افریقا دیده می‌شود. اما نیست! افریقا حدود ۱۴ برابر بزرگ‌تر است. هر نقشه یک انتخاب است. نقشه‌کش انتخاب می‌کند چه چیز در وسط باشد، چه چیز نام بگیرد و چه چیز بیرون بماند.',
          easy: { en: 'Greenland looks huge on many maps, but Africa is about 14 times bigger. Every map is made by a person who makes choices.', es: 'Groenlandia parece enorme en muchos mapas, pero África es unas 14 veces más grande. Cada mapa lo hace una persona que toma decisiones.', fa: 'گرینلند در بسیاری نقشه‌ها بزرگ دیده می‌شود، اما افریقا حدود ۱۴ برابر بزرگ‌تر است. هر نقشه را یک نفر با انتخاب‌های خودش می‌سازد.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why does Greenland look too big on many flat world maps?', es: '¿Por qué Groenlandia se ve demasiado grande en muchos mapas planos?', fa: 'چرا گرینلند در بسیاری نقشه‌های هموار بیش از حد بزرگ دیده می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Flattening the round Earth stretches land near the poles', es: 'Aplanar la Tierra redonda estira la tierra cerca de los polos', fa: 'هموار کردن زمین گرد، زمین‌های نزدیک قطب‌ها را کش می‌کند' },
            why: { en: 'The farther from the equator, the more many maps stretch the land.', es: 'Mientras más lejos del ecuador, más estiran la tierra muchos mapas.', fa: 'هر چه از خط استوا دورتر، بسیاری نقشه‌ها زمین را بیشتر کش می‌کنند.' } },
          { t: { en: 'Greenland grew bigger in the last 100 years', es: 'Groenlandia creció en los últimos 100 años', fa: 'گرینلند در ۱۰۰ سال گذشته بزرگ‌تر شد' },
            why: { en: 'Land does not grow like that. The map stretches it.', es: 'La tierra no crece así. El mapa la estira.', fa: 'زمین این‌طور بزرگ نمی‌شود. نقشه آن را کش می‌کند.' } },
          { t: { en: 'Mapmakers never measured Greenland', es: 'Los cartógrafos nunca midieron Groenlandia', fa: 'نقشه‌کش‌ها هرگز گرینلند را اندازه نکردند' },
            why: { en: 'Greenland has been measured. The stretching comes from the flat map.', es: 'Groenlandia sí se midió. El estiramiento viene del mapa plano.', fa: 'گرینلند اندازه شده است. کش آمدن از نقشهٔ هموار است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 6, text: { en: 'MAP KEY · blue = water · green = grass and forest · brown = path · red and blue roofs = houses. A [[map key|map key]] tells you what each color and symbol means.',
      es: 'LEYENDA · azul = agua · verde = pasto y bosque · café = camino · techos rojos y azules = casas. Una [[map key|leyenda]] dice qué significa cada color y símbolo.',
      fa: 'راهنمای نقشه · آبی = آب · سبز = سبزه و جنگل · قهوه‌ای = راه · بام سرخ و آبی = خانه. [[map key|راهنمای نقشه]] معنای هر رنگ و نشانه را می‌گوید.' } },
    { x: 18, y: 4, text: { en: 'COMPASS ROSE · North is up on this map. East is toward the river. A [[compass rose|compass rose]] shows the [[cardinal directions|cardinal directions]]: north, south, east and west.',
      es: 'ROSA DE LOS VIENTOS · El norte está arriba en este mapa. El este está hacia el río. Una [[compass rose|rosa de los vientos]] muestra las [[cardinal directions|direcciones cardinales]]: norte, sur, este y oeste.',
      fa: 'گل باد · در این نقشه شمال بالا است. شرق به طرف دریا است. [[compass rose|گل باد]] [[cardinal directions|جهت‌های اصلی]] را نشان می‌دهد: شمال، جنوب، شرق و غرب.' } }
  ],

  scraps: [[29, 1], [2, 20], [16, 14]],
  smudges: [[12, 17], [27, 9]],

  challenge: {
    at: [10, 8],
    type: 'sort',
    stat: 'loc',
    title: { en: 'Exact spot or "near something"?', es: '¿Lugar exacto o "cerca de algo"?', fa: 'جای دقیق یا «نزدیک چیزی»؟' },
    intro: { en: 'The Smudge mixed up the village directions. Sort each card. Is it an [[absolute location|absolute location]] or a [[relative location|relative location]]?',
      es: 'El Borrón mezcló las direcciones del pueblo. Ordena cada tarjeta. ¿Es una [[absolute location|ubicación absoluta]] o una [[relative location|ubicación relativa]]?',
      fa: 'لکه نشانی‌های ده را مخلوط کرد. هر کارت را جدا کن. آیا [[absolute location|موقعیت مطلق]] است یا [[relative location|موقعیت نسبی]]؟' },
    bins: [
      { id: 'abs', icon: '📍', label: { en: 'Absolute location', es: 'Ubicación absoluta', fa: 'موقعیت مطلق' }, sub: { en: 'exact address or grid numbers', es: 'dirección exacta o números de cuadrícula', fa: 'آدرس دقیق یا عددهای شبکه' } },
      { id: 'rel', icon: '🧭', label: { en: 'Relative location', es: 'Ubicación relativa', fa: 'موقعیت نسبی' }, sub: { en: 'described by what is nearby', es: 'descrita por lo que está cerca', fa: 'با چیزهای نزدیک گفته می‌شود' } }
    ],
    items: [
      { bin: 'abs', t: { en: '40°N, 74°W', es: '40°N, 74°O', fa: '۴۰ درجه شمالی، ۷۴ درجه غربی' }, why: { en: 'Grid numbers point to one exact spot, so that card is absolute.', es: 'Los números de cuadrícula señalan un punto exacto, así que esa tarjeta es absoluta.', fa: 'عددهای شبکه یک نقطهٔ دقیق را نشان می‌دهند، پس آن کارت مطلق است.' } },
      { bin: 'abs', t: { en: '0° latitude, 0° longitude', es: '0° de latitud, 0° de longitud', fa: '۰ درجه عرض، ۰ درجه طول' }, why: { en: 'Latitude and longitude numbers are always absolute.', es: 'Los números de latitud y longitud siempre son absolutos.', fa: 'عددهای عرض و طول همیشه مطلق هستند.' } },
      { bin: 'abs', t: { en: '1601 Main Street, Alexandria, VA', es: 'Calle Main 1601, Alexandria, VA', fa: 'سرک مین، شمارهٔ ۱۶۰۱، الکساندریا، ویرجینیا' }, why: { en: 'A full street address is an exact spot, so it is absolute.', es: 'Una dirección completa es un lugar exacto, así que es absoluta.', fa: 'آدرس کامل یک جای دقیق است، پس مطلق است.' } },
      { bin: 'rel', t: { en: 'Two blocks north of the school', es: 'Dos cuadras al norte de la escuela', fa: 'دو کوچه شمالِ مکتب' }, why: { en: 'You need to know where the school is, so that card is relative.', es: 'Necesitas saber dónde está la escuela, así que esa tarjeta es relativa.', fa: 'باید بدانی مکتب کجاست، پس آن کارت نسبی است.' } },
      { bin: 'rel', t: { en: 'Across the river from the market', es: 'Al otro lado del río desde el mercado', fa: 'آن طرف دریا از بازار' }, why: { en: 'It describes the place by the river and the market, so it is relative.', es: 'Describe el lugar por el río y el mercado, así que es relativa.', fa: 'جا را با دریا و بازار می‌گوید، پس نسبی است.' } },
      { bin: 'rel', t: { en: 'Next to the biggest lake in the valley', es: 'Junto al lago más grande del valle', fa: 'کنار بزرگ‌ترین جهیل دره' }, why: { en: '"Next to" another place is always relative.', es: '"Junto a" otro lugar siempre es relativa.', fa: '«کنار» یک جای دیگر همیشه نسبی است.' } }
    ],
    success: { en: 'The village signs point the right way again!', es: '¡Los letreros del pueblo vuelven a señalar bien!', fa: 'تابلوهای ده دوباره راه درست را نشان می‌دهند!' }
  },

  boss: {
    at: [18, 15],
    stat: 'loc',
    need: 3,
    name: { en: 'The Fog Smudge', es: 'El Borrón de Niebla', fa: 'لکهٔ مه' },
    appear: { en: 'The Fog Smudge is hiding by the farm field in the south-east!', es: '¡El Borrón de Niebla se esconde junto al campo en el sureste!', fa: 'لکهٔ مه کنار کشتزار در جنوب شرق پنهان است!' },
    taunt: { en: 'Hee hee! I blurred every map in this valley. Can you still read one?', es: '¡Ji ji! Borré todos los mapas de este valle. ¿Todavía puedes leer uno?', fa: 'هی هی! همهٔ نقشه‌های این دره را تار کردم. هنوز می‌توانی یکی را بخوانی؟' },
    win: { en: 'The fog lifts. Atlas page 1.1 floats down into your hands!', es: 'La niebla se levanta. ¡La página 1.1 del atlas cae en tus manos!', fa: 'مه کنار می‌رود. صفحهٔ ۱.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'On most maps, which direction is at the top?', es: 'En la mayoría de los mapas, ¿qué dirección está arriba?', fa: 'در بیشتر نقشه‌ها کدام جهت بالا است؟' },
        choices: [{ en: 'North', es: 'Norte', fa: 'شمال' }, { en: 'South', es: 'Sur', fa: 'جنوب' }, { en: 'East', es: 'Este', fa: 'شرق' }, { en: 'West', es: 'Oeste', fa: 'غرب' }], answer: 0,
        why: { en: 'Most maps put north at the top. The compass rose tells you for sure.', es: 'La mayoría de los mapas ponen el norte arriba. La rosa de los vientos lo confirma.', fa: 'بیشتر نقشه‌ها شمال را بالا می‌گذارند. گل باد آن را مطمئن نشان می‌دهد.' } },
      { q: { en: 'What tells you what the colors and symbols on a map mean?', es: '¿Qué te dice lo que significan los colores y símbolos de un mapa?', fa: 'چه چیز معنای رنگ‌ها و نشانه‌های نقشه را می‌گوید؟' },
        choices: [{ en: 'The map key (legend)', es: 'La leyenda', fa: 'راهنمای نقشه' }, { en: 'The scale bar', es: 'La barra de escala', fa: 'خط مقیاس' }, { en: 'The title', es: 'El título', fa: 'عنوان' }, { en: 'The compass rose', es: 'La rosa de los vientos', fa: 'گل باد' }], answer: 0,
        why: { en: 'The map key, also called the legend, explains each symbol and color.', es: 'La leyenda explica cada símbolo y color.', fa: 'راهنمای نقشه معنای هر نشانه و رنگ را توضیح می‌دهد.' } },
      { q: { en: 'Lines of latitude tell how far north or south you are from the ___.', es: 'Las líneas de latitud dicen qué tan al norte o al sur estás del ___.', fa: 'خط‌های عرض جغرافیایی نشان می‌دهند چقدر شمال یا جنوبِ ___ هستی.' },
        choices: [{ en: 'equator', es: 'ecuador', fa: 'خط استوا' }, { en: 'prime meridian', es: 'meridiano de Greenwich', fa: 'نصف‌النهار مبدأ' }, { en: 'North Pole', es: 'Polo Norte', fa: 'قطب شمال' }, { en: 'map key', es: 'leyenda', fa: 'راهنمای نقشه' }], answer: 0,
        why: { en: 'Latitude lines run east–west and count north or south from the equator (0°).', es: 'Las líneas de latitud van de este a oeste y cuentan desde el ecuador (0°).', fa: 'خط‌های عرض از شرق به غرب می‌روند و از خط استوا (۰ درجه) شمرده می‌شوند.' } },
      { q: { en: 'Lines of longitude tell how far east or west you are from the ___.', es: 'Las líneas de longitud dicen qué tan al este o al oeste estás del ___.', fa: 'خط‌های طول جغرافیایی نشان می‌دهند چقدر شرق یا غربِ ___ هستی.' },
        choices: [{ en: 'prime meridian', es: 'meridiano de Greenwich', fa: 'نصف‌النهار مبدأ' }, { en: 'equator', es: 'ecuador', fa: 'خط استوا' }, { en: 'Tropic of Cancer', es: 'Trópico de Cáncer', fa: 'مدار سرطان' }, { en: 'Arctic Circle', es: 'Círculo Polar Ártico', fa: 'مدار قطب شمال' }], answer: 0,
        why: { en: 'Longitude lines run north–south and count east or west from the prime meridian (0°).', es: 'Las líneas de longitud van de norte a sur y cuentan desde el meridiano de Greenwich (0°).', fa: 'خط‌های طول از شمال به جنوب می‌روند و از نصف‌النهار مبدأ (۰ درجه) شمرده می‌شوند.' } },
      { q: { en: 'Which one is a relative location?', es: '¿Cuál es una ubicación relativa?', fa: 'کدام یک موقعیت نسبی است؟' },
        choices: [{ en: 'Next to the train station', es: 'Junto a la estación de tren', fa: 'کنار ایستگاه قطار' }, { en: '38°N, 77°W', es: '38°N, 77°O', fa: '۳۸ درجه شمالی، ۷۷ درجه غربی' }, { en: '0° latitude, 0° longitude', es: '0° de latitud, 0° de longitud', fa: '۰ درجه عرض، ۰ درجه طول' }, { en: '1601 Main Street', es: 'Calle Main 1601', fa: 'سرک مین ۱۶۰۱' }], answer: 0,
        why: { en: '"Next to the train station" describes a place by what is near it.', es: '"Junto a la estación" describe un lugar por lo que tiene cerca.', fa: '«کنار ایستگاه قطار» جا را با چیز نزدیکش می‌گوید.' } },
      { q: { en: 'Why does every map leave some things out?', es: '¿Por qué todo mapa deja fuera algunas cosas?', fa: 'چرا هر نقشه بعضی چیزها را بیرون می‌گذارد؟' },
        choices: [{ en: 'A map that showed everything would be too crowded to use', es: 'Un mapa que mostrara todo sería imposible de usar', fa: 'نقشه‌ای که همه چیز را نشان دهد آن‌قدر شلوغ است که به کار نمی‌آید' }, { en: 'Mapmakers run out of ink', es: 'A los cartógrafos se les acaba la tinta', fa: 'رنگ نقشه‌کش‌ها تمام می‌شود' }, { en: 'Some places have no shape', es: 'Algunos lugares no tienen forma', fa: 'بعضی جاها شکل ندارند' }, { en: 'A law says maps must be small', es: 'Una ley dice que los mapas deben ser pequeños', fa: 'قانون می‌گوید نقشه باید کوچک باشد' }], answer: 0,
        why: { en: 'The mapmaker chooses what matters for the map\'s job and leaves the rest out.', es: 'El cartógrafo elige lo que importa para el mapa y deja fuera el resto.', fa: 'نقشه‌کش آنچه برای کار نقشه مهم است را انتخاب می‌کند و باقی را بیرون می‌گذارد.' } },
      { q: { en: 'Two friends in the same city draw very different mental maps. What is the most likely reason?', es: 'Dos amigos de la misma ciudad dibujan mapas mentales muy diferentes. ¿Cuál es la razón más probable?', fa: 'دو دوست در یک شهر نقشه‌های ذهنی بسیار متفاوت می‌کشند. محتمل‌ترین دلیل چیست؟' },
        choices: [{ en: 'They spend time in different parts of the city', es: 'Pasan tiempo en partes diferentes de la ciudad', fa: 'آن‌ها در بخش‌های مختلف شهر وقت می‌گذرانند' }, { en: 'One of them drew it wrong', es: 'Uno de ellos lo dibujó mal', fa: 'یکی از آن‌ها اشتباه کشید' }, { en: 'Mental maps change every day', es: 'Los mapas mentales cambian cada día', fa: 'نقشه‌های ذهنی هر روز تغییر می‌کنند' }, { en: 'One copied a printed map', es: 'Uno copió un mapa impreso', fa: 'یکی از نقشهٔ چاپی کاپی کرد' }], answer: 0,
        why: { en: 'Each person draws the city they actually use. Neither map is wrong.', es: 'Cada persona dibuja la ciudad que usa. Ningún mapa está mal.', fa: 'هر کس شهری را می‌کشد که خودش استفاده می‌کند. هیچ کدام غلط نیست.' } },
      { q: { en: 'Why do flat maps stretch some places?', es: '¿Por qué los mapas planos estiran algunos lugares?', fa: 'چرا نقشه‌های هموار بعضی جاها را کش می‌کنند؟' },
        choices: [{ en: 'A round Earth cannot lie flat without stretching', es: 'Una Tierra redonda no puede quedar plana sin estirarse', fa: 'زمین گرد بدون کش آمدن هموار نمی‌شود' }, { en: 'Printers make mistakes', es: 'Las impresoras se equivocan', fa: 'چاپگرها اشتباه می‌کنند' }, { en: 'The poles keep moving', es: 'Los polos se mueven', fa: 'قطب‌ها حرکت می‌کنند' }, { en: 'Paper shrinks after printing', es: 'El papel se encoge al imprimir', fa: 'کاغذ بعد از چاپ جمع می‌شود' }], answer: 0,
        why: { en: 'Every flat map has to stretch the round Earth somewhere. That is a projection.', es: 'Todo mapa plano tiene que estirar la Tierra en algún lugar. Eso es una proyección.', fa: 'هر نقشهٔ هموار باید زمین گرد را جایی کش کند. این همان پروجکشن است.' } }
    ]
  },

  learned: [
    { en: 'A [[mental map|mental map]] is the map in your head. Every printed map is a set of choices made by a person.', es: 'Un [[mental map|mapa mental]] es el mapa en tu cabeza. Cada mapa impreso es un conjunto de decisiones de una persona.', fa: '[[mental map|نقشهٔ ذهنی]] نقشهٔ درون ذهن توست. هر نقشهٔ چاپی مجموعه‌ای از انتخاب‌های یک نفر است.' },
    { en: '[[latitude|Latitude]] and [[longitude|longitude]] give an [[absolute location|absolute location]]. "Near the river" is a [[relative location|relative location]].', es: 'La [[latitude|latitud]] y la [[longitude|longitud]] dan una [[absolute location|ubicación absoluta]]. "Cerca del río" es una [[relative location|ubicación relativa]].', fa: '[[latitude|عرض]] و [[longitude|طول]] جغرافیایی یک [[absolute location|موقعیت مطلق]] می‌دهند. «نزدیک دریا» یک [[relative location|موقعیت نسبی]] است.' },
    { en: 'Flat maps stretch the round Earth, so places near the poles, like Greenland, look too big.', es: 'Los mapas planos estiran la Tierra redonda, así que lugares cerca de los polos, como Groenlandia, se ven demasiado grandes.', fa: 'نقشه‌های هموار زمین گرد را کش می‌کنند، پس جاهای نزدیک قطب مثل گرینلند بیش از حد بزرگ دیده می‌شوند.' }
  ],
  reflect: {
    q: { en: 'Think about your mental map of your neighborhood. What is one place that is very clear in it, and one place that is blank?', es: 'Piensa en tu mapa mental de tu barrio. ¿Qué lugar es muy claro en él y qué lugar está en blanco?', fa: 'به نقشهٔ ذهنی محلهٔ خود فکر کن. یک جای خیلی روشن و یک جای خالی در آن کدام است؟' },
    starter: { en: 'A place that is very clear in my mental map is', es: 'Un lugar muy claro en mi mapa mental es', fa: 'جایی که در نقشهٔ ذهنی من خیلی روشن است' }
  }
};
