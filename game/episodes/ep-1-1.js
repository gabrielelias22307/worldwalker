/* WORLDWALKER · Episode 1.1 · Intro to Maps (WG.1)
   The model episode: every other episode follows this shape. See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'WG.1',
  title: { en: 'Intro to Maps', es: 'Introducción a los mapas', fa: 'آشنایی با نقشه‌ها' },
  place: { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
  intro: [
    { en: 'The Grump blew through Mapmaker\'s Valley! Every sign is blurry and people are lost.', es: '¡El Gruñón pasó por el Valle del Cartógrafo! Los letreros están borrosos y la gente está perdida.', fa: 'غرغرو از درهٔ نقشه‌کش گذشت! همهٔ تابلوها تار شده و مردم گم شده‌اند.' },
    { en: 'Talk to the mapmaker, the captain and the teacher. Then fix the compass stone.', es: 'Habla con la cartógrafa, la capitana y el maestro. Luego arregla la piedra de la brújula.', fa: 'با نقشه‌کش، کپتان و معلم گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [-77.05, 38.8],
    start: [
      { en: 'Every map starts where you are. We are in Alexandria, Virginia.',
        es: 'Todo mapa empieza donde estás. Estamos en Alexandria, Virginia.',
        fa: 'هر نقشه از جایی شروع می‌شود که تو هستی. ما در الکساندریا، ویرجینیا هستیم.' },
      { en: 'Alexandria sits near 39° north latitude and 77° west longitude.',
        es: 'Alexandria está cerca de los 39° de latitud norte y 77° de longitud oeste.',
        fa: 'الکساندریا نزدیک عرض ۳۹ درجهٔ شمالی و طول ۷۷ درجهٔ غربی است.' },
      { en: 'Earth is round, so every flat map stretches some places.',
        es: 'La Tierra es redonda, así que todo mapa plano estira algunos lugares.',
        fa: 'زمین گرد است، پس هر نقشهٔ هموار بعضی جاها را کش می‌دهد.' }
    ],
    page: { en: 'On many flat maps, Greenland looks as big as Africa. Africa is 14 times bigger.',
      es: 'En muchos mapas planos, Groenlandia parece tan grande como África. África es 14 veces más grande.',
      fa: 'در بسیاری نقشه‌های هموار، گرینلند به اندازهٔ افریقا دیده می‌شود. افریقا ۱۴ برابر بزرگ‌تر است.' },
    guess: {
      q: { en: 'Earth is round. Does a flat map stretch some places?', es: 'La Tierra es redonda. ¿Un mapa plano estira algunos lugares?', fa: 'زمین گرد است. آیا نقشهٔ هموار بعضی جاها را کش می‌دهد؟' },
      choices: [
        { t: { en: '✅ Yes, some places', es: '✅ Sí, algunos lugares', fa: '✅ بلی، بعضی جاها' }, ok: true },
        { t: { en: '❌ No, never', es: '❌ No, nunca', fa: '❌ نه، هیچ وقت' } }
      ],
      why: { en: 'A round Earth cannot lie flat, so every flat map stretches some places.', es: 'Una Tierra redonda no puede quedar plana, así que todo mapa plano estira algunos lugares.', fa: 'زمین گرد هموار نمی‌شود، پس هر نقشهٔ هموار بعضی جاها را کش می‌دهد.' }
    },
    next: {
      q: { en: 'Next: regions! Which one could be a region?', es: '¡Ahora: regiones! ¿Cuál podría ser una región?', fa: 'بعدی: منطقه‌ها! کدام یک می‌تواند یک منطقه باشد؟' },
      choices: [
        { t: { en: '🌽 Corn-farming states', es: '🌽 Estados de maíz', fa: '🌽 ایالت‌های جواری' }, ok: true },
        { t: { en: '🎲 Random dots', es: '🎲 Puntos al azar', fa: '🎲 نقطه‌های تصادفی' } }
      ],
      why: { en: 'A region is an area that shares something, like crops, climate or language.', es: 'Una región es un área que comparte algo, como cultivos, clima o idioma.', fa: 'منطقه جایی است که چیزی مشترک دارد، مثل کشت، آب و هوا یا زبان.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [3, 3], name: { en: 'Grandma June', es: 'Abuela June', fa: 'مادرکلان جون' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#8e5bd6', pants: '#3a3a5a', style: 'bun' },
      lines: [
        { en: 'Come in! I have lived here fifty years. I could walk this valley blindfolded.', es: '¡Pasa! Vivo aquí hace cincuenta años. Podría caminar este valle con los ojos cerrados.', fa: 'بیا داخل! پنجاه سال است اینجا زندگی می‌کنم. با چشم بسته هم در این دره راه می‌روم.' },
        { en: 'That is my mental map. My grandson needs his phone map to find the store!', es: 'Ese es mi mapa mental. ¡Mi nieto necesita el mapa del celular para encontrar la tienda!', fa: 'این نقشهٔ ذهنی من است. نواسه‌ام برای پیدا کردن دکان به نقشهٔ موبایل ضرورت دارد!' }
      ] },
    { at: [11, 3], name: { en: 'Mateo', es: 'Mateo', fa: 'ماتیو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#f2b134', pants: '#2f4f8f', style: 'short' },
      lines: [
        { en: 'Hi! I\'m drawing a map of our house. The kitchen is north of my room.', es: '¡Hola! Estoy dibujando un mapa de mi casa. La cocina está al norte de mi cuarto.', fa: 'سلام! نقشهٔ خانهٔ خود را می‌کشم. آشپزخانه شمالِ اتاق من است.' },
        { en: 'My teacher says every map needs a title, a key and a compass rose.', es: 'Mi maestro dice que todo mapa necesita un título, una leyenda y una rosa de los vientos.', fa: 'معلمم می‌گوید هر نقشه به عنوان، راهنمای نقشه و گل باد ضرورت دارد.' }
      ] },
    { at: [15, 8], name: { en: 'Tigist', es: 'Tigist', fa: 'تیگیست' },
      look: { skin: 4, hair: '#1b1410', shirt: '#2e9e8f', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'Welcome! Sit down, the coffee is almost ready. My family is from Ethiopia.', es: '¡Bienvenido! Siéntate, el café ya casi está. Mi familia es de Etiopía.', fa: 'خوش آمدی! بنشین، قهوه تقریباً آماده است. خانوادهٔ من از ایتوپیا است.' },
        { en: 'Ethiopia is near the equator. Its days are about twelve hours all year.', es: 'Etiopía está cerca del ecuador. Allí los días duran unas doce horas todo el año.', fa: 'ایتوپیا نزدیک خط استوا است. آنجا روزها در تمام سال حدود دوازده ساعت است.' }
      ] },
    { at: [26, 13], name: { en: 'Bilal', es: 'Bilal', fa: 'بلال' },
      look: { skin: 3, hair: '#1b1410', shirt: '#3a5fa0', pants: '#22324f', style: 'short', hat: '#2a3f6a' },
      lines: [
        { en: 'Careful, the floor is wet. I just got home from my mail route.', es: 'Cuidado, el piso está mojado. Acabo de llegar de mi ruta de correo.', fa: 'احتیاط، کف خانه تر است. همین حالا از مسیر نامه‌رسانی به خانه آمدم.' },
        { en: 'Every letter needs an exact address. "The blue house by the creek" will not do!', es: 'Cada carta necesita una dirección exacta. ¡"La casa azul junto al arroyo" no sirve!', fa: 'هر نامه آدرس دقیق می‌خواهد. «خانهٔ آبی کنار جوی» کافی نیست!' }
      ] }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Legend in docs/EPISODE-FORMAT.md
     A creek (row 11) splits the east bank: the broken south bridge (ZZ) must be fixed with wood to reach Mr. Farid and the lost compass. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTT~~TTTTTTTTT',
    'T............."""""..~~........T',
    'T.RRR....QQQQ........~~.T,~~~~.T',
    'T.hdh....hhdh........~~...~~~~.T',
    'T.................x..~~...~~~~.T',
    'T.:::::::::::::::::::bb:::::::.T',
    'T.....x:....,........~~..T....PT',
    'T..,...:......RRRR...~~.....,..T',
    'T......:......hdhh...~~kk......T',
    'T.,..,.:.....,..Y.Y..~~.....P..T',
    'T......:.............~~.T......T',
    'T......:..........T..~~~~~~~~~~T',
    'T.T.T..:..T.T........~~.QQQQ.K.T',
    'T..T...:...T."..r.,..~~.hhdh.K.T',
    'T...,..:."...."......~~........T',
    'T..".T.:."..T........~~........T',
    'T......::::::::::::::ZZ:::::::.T',
    'T.T..........T....Y..~~....:...T',
    'T..T......T....ro1o..~~....:.K.T',
    'T...T......T..T.2ooT.~~.KK.:.K.T',
    'T................T...~~........T',
    'TTTTTTTTTTTTTTTTTTTTT~~TTTTTTTTT'
  ],
  start: [4, 6],

  /* Christopher flies in and says who he is (only the first time a hero plays) */
  christopher: {
    meet: [
      { en: 'Hi! I am Christopher, your living compass. My needle always knows which way is north.',
        es: '¡Hola! Soy Christopher, tu brújula viva. Mi aguja siempre sabe dónde está el norte.',
        fa: 'سلام! من کریستوفر هستم، قطب‌نمای زندهٔ تو. عقربه‌ام همیشه می‌داند شمال کجاست.' },
      { en: 'I fly with you. Press C (or tap 🧭) to ask me what to do next.', es: 'Vuelo contigo. Pulsa C (o toca 🧭) para preguntarme qué hacer después.', fa: 'من با تو پرواز می‌کنم. C را بزن (یا 🧭 را لمس کن) تا بگویم بعد چه کنی.' },
      { en: 'Stuck? I trade hints for coins. Key 2 is the axe, key 3 the sickle.', es: '¿Atascado? Cambio pistas por monedas. La tecla 2 es el hacha, la 3 la hoz.', fa: 'گیر کردی؟ در برابر سکه کمک می‌دهم. دکمهٔ ۲ تبر است و ۳ داس.' }
    ]
  },

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 6], at: [11, 9], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps south, then 2 steps west. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al sur y luego 2 pasos al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۲ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! On this map, south is down and west is left. A feather was hiding here.', es: '¡Seguiste las direcciones de la brújula! En este mapa el sur está abajo y el oeste a la izquierda. Aquí había una pluma escondida.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! در این نقشه جنوب پایین و غرب طرف چپ است. یک پر این جا پنهان بود.' } },
    { clueAt: [5, 7], at: [23, 8], decor: 'shell',
      clue: { en: 'Use the map key: blue is water, brown boards are a dock. Stand on the dock square touching the river.', es: 'Usa la leyenda: el azul es agua y las tablas cafés son un muelle. Párate en el cuadro del muelle que toca el río.', fa: 'از راهنمای نقشه استفاده کن: آبی آب است و تخته‌های قهوه‌ای اسکله است. روی خانهٔ اسکله که به دریا می‌رسد بایست.' },
      text: { en: 'You read the map key! Symbols mean the same thing to everyone. A shell was on the dock.', es: '¡Leíste la leyenda! Los símbolos significan lo mismo para todos. Había una concha en el muelle.', fa: 'تو راهنمای نقشه را خواندی! نشانه‌ها برای همه یک معنا دارند. یک صدف روی اسکله بود.' } }
  ],

  /* the tool bar: chop small trees and bushes for wood, cut tall grass for fiber (and sometimes seeds) */
  tools: ['axe', 'sickle'],

  /* what can be built here (see docs/EPISODE-FORMAT.md) */
  build: [
    { id: 'bridge', kind: 'repair', at: [[21, 16], [22, 16]], tile: 'b', cost: { wood: 4 },
      name: { en: 'south bridge', es: 'puente del sur', fa: 'پل جنوبی' },
      ask: { en: 'The Grump\'s wind broke the south bridge. Mr. Farid and the lost compass are on the other side. Four pieces of wood will fix it.',
        es: 'El viento del Gruñón rompió el puente del sur. El Sr. Farid y la brújula perdida están del otro lado. Cuatro piezas de madera lo arreglan.',
        fa: 'باد غرغرو پل جنوبی را شکست. استاد فرید و قطب‌نمای گم‌شده آن طرف هستند. چهار تکه چوب آن را درست می‌کند.' },
      done: { en: 'The south bridge is fixed! Now you can cross the river to the south-east side.',
        es: '¡El puente del sur está arreglado! Ahora puedes cruzar el río hacia el sureste.',
        fa: 'پل جنوبی درست شد! حالا می‌توانی از دریا به طرف جنوب‌شرق بگذری.' } },
    { id: 'lake', kind: 'signpost', cost: { wood: 1, fiber: 1 }, ok: [[26, 5], [27, 5], [28, 5], [29, 5]],
      text: { en: 'Just south of the big lake', es: 'Justo al sur del lago grande', fa: 'درست جنوبِ جهیل بزرگ' },
      why: { en: 'The big lake is in the north-east. South means the side below it on this map.',
        es: 'El lago grande está en el noreste. Sur es el lado de abajo en este mapa.',
        fa: 'جهیل بزرگ در شمال‌شرق است. جنوب در این نقشه یعنی طرف پایینِ آن.' } },
    { id: 'west', kind: 'signpost', cost: { wood: 1, fiber: 1 }, ok: [[19, 16]],
      text: { en: 'Two steps west of the south bridge', es: 'Dos pasos al oeste del puente del sur', fa: 'دو قدم غربِ پل جنوبی' },
      why: { en: 'West is to the left on this map. Start at the south bridge and count two steps left.',
        es: 'El oeste está a la izquierda en este mapa. Empieza en el puente del sur y cuenta dos pasos a la izquierda.',
        fa: 'غرب در این نقشه طرف چپ است. از پل جنوبی شروع کن و دو قدم به چپ بشمار.' } },
    { id: 'abs1', kind: 'signpost', grid: true, cost: { wood: 1, fiber: 1 }, ok: [[4, 9]],
      text: { en: '40°N, 74°W', es: '40°N, 74°O', fa: '۴۰ درجه شمالی، ۷۴ درجه غربی' },
      why: { en: 'Find the 40°N row and the 74°W column. The sign goes where they cross.',
        es: 'Busca la fila de 40°N y la columna de 74°O. El letrero va donde se cruzan.',
        fa: 'ردیف ۴۰ درجه شمالی و ستون ۷۴ درجه غربی را پیدا کن. تابلو جایی می‌رود که به هم می‌رسند.' } },
    { id: 'abs2', kind: 'signpost', grid: true, cost: { wood: 1, fiber: 1 }, ok: [[3, 10]],
      text: { en: '30°N, 80°W', es: '30°N, 80°O', fa: '۳۰ درجه شمالی، ۸۰ درجه غربی' },
      why: { en: 'Find the 30°N row and the 80°W column. The sign goes where they cross.',
        es: 'Busca la fila de 30°N y la columna de 80°O. El letrero va donde se cruzan.',
        fa: 'ردیف ۳۰ درجه شمالی و ستون ۸۰ درجه غربی را پیدا کن. تابلو جایی می‌رود که به هم می‌رسند.' } }
  ],

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
        { en: 'Welcome! I draw maps. But you carry a map nobody printed: a [[mental map|mental map]].', es: '¡Bienvenido! Yo dibujo mapas. Pero tú llevas un mapa que nadie imprimió: un [[mental map|mapa mental]].', fa: 'خوش آمدی! من نقشه می‌کشم. اما تو نقشه‌ای داری که کسی چاپ نکرده: یک [[mental map|نقشهٔ ذهنی]].' },
        { en: 'It is the map of a place that you keep in your head.', es: 'Es el mapa de un lugar que guardas en tu cabeza.', fa: 'این نقشهٔ یک جا است که در ذهن خود نگه می‌داری.' },
        { en: 'It is sharp where you go often. It is blank where you have never been.', es: 'Es claro donde vas seguido. Está en blanco donde nunca has ido.', fa: 'جایی که زیاد می‌روی روشن است. جایی که هرگز نرفته‌ای خالی است.' },
        { en: 'So two friends in the same city draw two different mental maps.', es: 'Por eso dos amigos de la misma ciudad dibujan dos mapas mentales diferentes.', fa: 'پس دو دوست در یک شهر دو نقشهٔ ذهنی متفاوت می‌کشند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What is a mental map?', es: '¿Qué es un mapa mental?', fa: 'نقشهٔ ذهنی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A map of a place that you keep in your head', es: 'Un mapa de un lugar que guardas en tu cabeza', fa: 'نقشهٔ یک جا که در ذهنت نگه می‌داری' },
            why: { en: 'Nobody printed it. You built it by moving around.', es: 'Nadie lo imprimió. Lo construiste al moverte.', fa: 'کسی آن را چاپ نکرده. خودت با رفت‌وآمد آن را ساختی.' } },
          { t: { en: 'A printed map that shows only the main roads', es: 'Un mapa impreso que muestra solo las carreteras principales', fa: 'نقشهٔ چاپی که فقط سرک‌های عمده را نشان می‌دهد' },
            why: { en: 'A mental map can hold anything you remember, not only roads.', es: 'Un mapa mental puede tener todo lo que recuerdas, no solo carreteras.', fa: 'نقشهٔ ذهنی هر چیزی را که به یاد داری نگه می‌دارد، نه فقط سرک‌ها.' } },
          { t: { en: 'A map that a whole country makes together', es: 'Un mapa que hace todo un país junto', fa: 'نقشه‌ای که یک کشور کامل با هم می‌سازد' },
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
        { en: 'At sea, I cannot say "turn left at the big tree"!', es: '¡En el mar no puedo decir "gira a la izquierda en el árbol grande"!', fa: 'در بحر نمی‌توانم بگویم «کنار درخت بزرگ به چپ برو»!' },
        { en: 'Sailors use [[latitude|latitude]] and [[longitude|longitude]]: lines that make a grid around the Earth.', es: 'Los marineros usamos la [[latitude|latitud]] y la [[longitude|longitud]]: líneas que forman una cuadrícula alrededor de la Tierra.', fa: 'ملاحان از [[latitude|عرض جغرافیایی]] و [[longitude|طول جغرافیایی]] استفاده می‌کنند: خط‌هایی که دور زمین شبکه می‌سازند.' },
        { en: '40°N, 74°W is an [[absolute location|absolute location]]. It is exact and does not change.', es: '40°N, 74°O es una [[absolute location|ubicación absoluta]]. Es exacta y no cambia.', fa: '۴۰ درجه شمالی، ۷۴ درجه غربی یک [[absolute location|موقعیت مطلق]] است. دقیق است و تغییر نمی‌کند.' },
        { en: '"Next to the river" is a [[relative location|relative location]]. It tells what is near.', es: '"Junto al río" es una [[relative location|ubicación relativa]]. Dice qué hay cerca.', fa: '«کنار دریا» یک [[relative location|موقعیت نسبی]] است. می‌گوید چه چیزی نزدیک است.' }
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
        { en: 'A paper map is flat. You cannot flatten the round Earth without stretching it.', es: 'Un mapa de papel es plano. No puedes aplanar la Tierra redonda sin estirarla.', fa: 'نقشهٔ کاغذی هموار است. نمی‌شود زمین گرد را بدون کش کردن هموار کرد.' },
        { en: 'Flat maps stretch land near the poles. This way of flattening is a [[projection|projection]].', es: 'Los mapas planos estiran la tierra cerca de los polos. Esta forma de aplanar es una [[projection|proyección]].', fa: 'نقشه‌های هموار زمین نزدیک قطب‌ها را کش می‌کنند. این روش هموار کردن [[projection|پروجکشن]] است.' },
        { en: 'On many maps, Greenland looks as big as Africa. But Africa is 14 times bigger!', es: 'En muchos mapas, Groenlandia parece tan grande como África. ¡Pero África es 14 veces más grande!', fa: 'در بسیاری از نقشه‌ها گرینلند به بزرگی افریقا دیده می‌شود. اما افریقا ۱۴ برابر بزرگ‌تر است!' },
        { en: 'Every map is a choice. The mapmaker picks what goes in or stays out.', es: 'Cada mapa es una elección. El cartógrafo decide qué entra o queda fuera.', fa: 'هر نقشه یک انتخاب است. نقشه‌کش انتخاب می‌کند چه چیز داخل باشد یا بیرون بماند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why does Greenland look too big on many flat world maps?', es: '¿Por qué Groenlandia se ve demasiado grande en muchos mapas planos?', fa: 'چرا گرینلند در بسیاری نقشه‌های هموار بیش از حد بزرگ دیده می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Flat maps stretch the land near the poles', es: 'Los mapas planos estiran la tierra cerca de los polos', fa: 'نقشه‌های هموار زمین نزدیک قطب‌ها را کش می‌کنند' },
            why: { en: 'The farther from the equator, the more many maps stretch the land.', es: 'Mientras más lejos del ecuador, más estiran la tierra muchos mapas.', fa: 'هر چه از خط استوا دورتر، بسیاری نقشه‌ها زمین را بیشتر کش می‌کنند.' } },
          { t: { en: 'Greenland grew a lot bigger in the last 100 years', es: 'Groenlandia creció mucho en los últimos 100 años', fa: 'گرینلند در ۱۰۰ سال گذشته خیلی بزرگ‌تر شد' },
            why: { en: 'Land does not grow like that. The map stretches it.', es: 'La tierra no crece así. El mapa la estira.', fa: 'زمین این‌طور بزرگ نمی‌شود. نقشه آن را کش می‌کند.' } },
          { t: { en: 'Mapmakers never measured Greenland with real tools', es: 'Los cartógrafos nunca midieron Groenlandia con herramientas reales', fa: 'نقشه‌کش‌ها هرگز گرینلند را با وسایل درست اندازه نکردند' },
            why: { en: 'Greenland has been measured. The stretching comes from the flat map.', es: 'Groenlandia sí se midió. El estiramiento viene del mapa plano.', fa: 'گرینلند اندازه شده است. کش آمدن از نقشهٔ هموار است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 6, text: { en: 'MAP KEY · blue = water · green = grass, trees · brown = path · roofs = houses. A [[map key|map key]] explains colors and symbols.', es: 'LEYENDA · azul = agua · verde = pasto, árboles · café = camino · techos = casas. Una [[map key|leyenda]] explica colores y símbolos.', fa: 'راهنمای نقشه · آبی = آب · سبز = سبزه، درخت · قهوه‌ای = راه · بام = خانه. [[map key|راهنمای نقشه]] رنگ‌ها و نشانه‌ها را توضیح می‌دهد.' } },
    { x: 18, y: 4, text: { en: 'COMPASS ROSE · North is up. East is toward the river. A [[compass rose|compass rose]] shows the [[cardinal directions|cardinal directions]].', es: 'ROSA DE LOS VIENTOS · El norte está arriba. El este está hacia el río. Una [[compass rose|rosa de los vientos]] muestra las [[cardinal directions|direcciones cardinales]].', fa: 'گل باد · شمال بالا است. شرق به طرف دریا است. [[compass rose|گل باد]] [[cardinal directions|جهت‌های اصلی]] را نشان می‌دهد.' } }
  ],

  /* the quest: Grandpa Tomas (gold !) -> Lena the shepherd -> find the compass by its relative location -> back to Tomas */
  quest: {
    stat: 'loc',
    title: { en: "Grandpa's Lost Compass", es: 'La brújula perdida del abuelo', fa: 'قطب‌نمای گم‌شدهٔ پدرکلان' },
    giver: {
      x: 7, y: 3,
      name: { en: 'Grandpa Tomas', es: 'Abuelo Tomás', fa: 'پدرکلان توماس' },
      role: { en: 'Village elder', es: 'Anciano del pueblo', fa: 'ریش‌سفید ده' },
      look: { skin: 3, hair: '#d8d4cc', shirt: '#8a5a2b', pants: '#3a3a3a' },
      lines: [
        { en: 'Oh, traveler! The Grump\'s wind blew my old brass compass out my window.', es: '¡Ay, viajero! El viento del Gruñón sacó mi vieja brújula de latón por la ventana.', fa: 'آه، مسافر! باد غرغرو قطب‌نمای برنجی کهنه‌ام را از کلکین بیرون برد.' },
        { en: 'My legs are too tired to look for it.', es: 'Mis piernas están muy cansadas para buscarla.', fa: 'پاهایم برای پالیدن آن خیلی خسته است.' },
        { en: 'Lena the shepherd saw where it landed.', es: 'Lena, la pastora, vio dónde cayó.', fa: 'لینا، چوپان، دید که کجا افتاد.' },
        { en: 'She is in the south-west corner of the valley. Will you ask her?', es: 'Está en la esquina suroeste del valle. ¿Le preguntas?', fa: 'او در گوشهٔ جنوب غربی دره است. از او می‌پرسی؟' }
      ],
      wait: { en: 'Lena is in the south-west corner: down and to the left on this map.', es: 'Lena está en la esquina suroeste: abajo y a la izquierda en este mapa.', fa: 'لینا در گوشهٔ جنوب غربی است: در این نقشه پایین و طرف چپ.' },
      thanks: { en: 'My compass! The needle still points north. Thank you! You just followed directions.', es: '¡Mi brújula! La aguja todavía apunta al norte. ¡Gracias! Solo seguiste direcciones.', fa: 'قطب‌نمای من! عقربه‌اش هنوز به شمال است. تشکر! تو فقط جهت‌ها را دنبال کردی.' }
    },
    contact: {
      x: 6, y: 19,
      name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      role: { en: 'Shepherd', es: 'Pastora', fa: 'چوپان' },
      look: { skin: 4, hair: '#1b1410', shirt: '#d98e2b', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'Yes, I saw it fly! I do not know its exact numbers.', es: '¡Sí, la vi volar! No sé sus números exactos.', fa: 'بله، دیدم که پرید! عددهای دقیقش را نمی‌دانم.' },
        { en: 'So I will give you a [[relative location|relative location]]: what it is near.', es: 'Así que te daré una [[relative location|ubicación relativa]]: lo que tiene cerca.', fa: 'پس یک [[relative location|موقعیت نسبی]] می‌گویم: نزدیک چه چیزی است.' },
        { en: 'Cross the south bridge, then go two steps south by the river. Find the shine!', es: 'Cruza el puente del sur y camina dos pasos al sur junto al río. ¡Busca el brillo!', fa: 'از پل جنوبی بگذر، بعد دو قدم به جنوب کنار دریا برو. برق آن را پیدا کن!' }
      ]
    },
    action: {
      type: 'find',
      at: [23, 18],
      hint: { en: 'east of the river, 2 steps south of the south bridge', es: 'al este del río, 2 pasos al sur del puente del sur', fa: 'شرق دریا، ۲ قدم جنوبِ پل جنوبی' },
      found: { en: 'There it is, shining by the river! You followed a [[relative location|relative location]]: over the bridge, then south.', es: '¡Ahí está, brillando junto al río! Seguiste una [[relative location|ubicación relativa]]: cruzar el puente y luego ir al sur.', fa: 'آنجاست، کنار دریا برق می‌زند! تو یک [[relative location|موقعیت نسبی]] را دنبال کردی: از پل گذشتی، بعد به جنوب رفتی.' },
      item: { icon: '🧭', name: { en: "Grandpa's compass", es: 'La brújula del abuelo', fa: 'قطب‌نمای پدرکلان' } }
    }
  },

  scraps: [[29, 1], [2, 20], [16, 14]],
  smudges: [[12, 17], [27, 9]],

  challenge: {
    at: [10, 8],
    type: 'build',
    stat: 'loc',
    title: { en: 'Put the village signs back', es: 'Vuelve a poner los letreros del pueblo', fa: 'تابلوهای ده را دوباره بگذار' },
    intro: { en: 'The Grump blew away the village signs. Put each one where its words point. Two use a [[relative location|relative location]] (what is near). Two use an [[absolute location|absolute location]] (grid numbers).',
      es: 'El Gruñón se llevó los letreros del pueblo. Pon cada uno donde dicen sus palabras. Dos usan una [[relative location|ubicación relativa]] (lo que está cerca). Dos usan una [[absolute location|ubicación absoluta]] (números de cuadrícula).',
      fa: 'غرغرو تابلوهای ده را با باد برد. هر کدام را جایی بگذار که نوشته‌اش می‌گوید. دو تا [[relative location|موقعیت نسبی]] دارند (چه چیزی نزدیک است). دو تا [[absolute location|موقعیت مطلق]] دارند (عددهای شبکه).' },
    items: ['lake', 'west', 'abs1', 'abs2'],
    // a small surveyed grid next to the stone: latitude rows (north is up) and longitude columns (west is left)
    grid: { x: 3, y: 8,
      rows: [{ en: '50°N', es: '50°N', fa: '۵۰° شمالی' }, { en: '40°N', es: '40°N', fa: '۴۰° شمالی' }, { en: '30°N', es: '30°N', fa: '۳۰° شمالی' }],
      cols: [{ en: '80°W', es: '80°O', fa: '۸۰° غربی' }, { en: '74°W', es: '74°O', fa: '۷۴° غربی' }, { en: '70°W', es: '70°O', fa: '۷۰° غربی' }] },
    success: { en: 'Every sign points the right way again!', es: '¡Todos los letreros vuelven a señalar bien!', fa: 'همهٔ تابلوها دوباره راه درست را نشان می‌دهند!' },
    // "Use cards instead": the old card sort
    fallback: {
    type: 'sort',
    title: { en: 'Exact spot or "near something"?', es: '¿Lugar exacto o "cerca de algo"?', fa: 'جای دقیق یا «نزدیک چیزی»؟' },
    intro: { en: 'The Grump mixed up the village directions. Sort each card. Is it an [[absolute location|absolute location]] or a [[relative location|relative location]]?',
      es: 'El Gruñón mezcló las direcciones del pueblo. Ordena cada tarjeta. ¿Es una [[absolute location|ubicación absoluta]] o una [[relative location|ubicación relativa]]?',
      fa: 'غرغرو نشانی‌های ده را مخلوط کرد. هر کارت را جدا کن. آیا [[absolute location|موقعیت مطلق]] است یا [[relative location|موقعیت نسبی]]؟' },
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
    }
  },

  boss: {
    at: [18, 15],
    stat: 'loc',
    need: 3,
    name: { en: 'The Fog Grump', es: 'El Gruñón de Niebla', fa: 'غرغروی مه' },
    appear: { en: 'The Fog Grump is hiding by the farm field in the south-east!', es: '¡El Gruñón de Niebla se esconde junto al campo en el sureste!', fa: 'غرغروی مه کنار کشتزار در جنوب شرق پنهان است!' },
    taunt: { en: 'Hee hee! I blurred every map in this valley. Can you still read one?', es: '¡Ji ji! Borré todos los mapas de este valle. ¿Todavía puedes leer uno?', fa: 'هی هی! همهٔ نقشه‌های این دره را تار کردم. هنوز می‌توانی یکی را بخوانی؟' },
    win: { en: 'The fog lifts. Atlas page 1.1 floats down into your hands!', es: 'La niebla se levanta. ¡La página 1.1 del atlas cae en tus manos!', fa: 'مه کنار می‌رود. صفحهٔ ۱.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'On most maps, which direction is at the top?', es: 'En la mayoría de los mapas, ¿qué dirección está arriba?', fa: 'در بیشتر نقشه‌ها کدام جهت بالا است؟' },
        choices: [{ en: 'North', es: 'Norte', fa: 'شمال' }, { en: 'South', es: 'Sur', fa: 'جنوب' }, { en: 'East', es: 'Este', fa: 'شرق' }, { en: 'West', es: 'Oeste', fa: 'غرب' }], answer: 0,
        why: { en: 'Most maps put north at the top. The compass rose tells you for sure.', es: 'La mayoría de los mapas ponen el norte arriba. La rosa de los vientos lo confirma.', fa: 'بیشتر نقشه‌ها شمال را بالا می‌گذارند. گل باد آن را مطمئن نشان می‌دهد.' } },
      { q: { en: 'What tells you what the colors and symbols on a map mean?', es: '¿Qué te dice lo que significan los colores y símbolos de un mapa?', fa: 'چه چیز معنای رنگ‌ها و نشانه‌های نقشه را می‌گوید؟' },
        choices: [{ en: 'The map key (legend)', es: 'La leyenda', fa: 'راهنمای نقشه' }, { en: 'The scale bar', es: 'La barra de escala', fa: 'خط مقیاس' }, { en: 'The title at the top', es: 'El título de arriba', fa: 'عنوان بالای نقشه' }, { en: 'The compass rose', es: 'La rosa de los vientos', fa: 'گل باد' }], answer: 0,
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
        choices: [{ en: 'A map of everything would be too crowded', es: 'Un mapa con todo estaría demasiado lleno', fa: 'نقشهٔ همه چیز خیلی شلوغ می‌شود' }, { en: 'Mapmakers always run out of ink and paper', es: 'A los cartógrafos siempre se les acaba la tinta y el papel', fa: 'رنگ و کاغذ نقشه‌کش‌ها همیشه تمام می‌شود' }, { en: 'Some places have no shape', es: 'Algunos lugares no tienen forma', fa: 'بعضی جاها شکل ندارند' }, { en: 'A law says maps must be small', es: 'Una ley dice que los mapas deben ser pequeños', fa: 'قانون می‌گوید نقشه باید کوچک باشد' }], answer: 0,
        why: { en: 'The mapmaker chooses what matters for the map\'s job and leaves the rest out.', es: 'El cartógrafo elige lo que importa para el mapa y deja fuera el resto.', fa: 'نقشه‌کش آنچه برای کار نقشه مهم است را انتخاب می‌کند و باقی را بیرون می‌گذارد.' } },
      { q: { en: 'Two friends in the same city draw very different mental maps. What is the most likely reason?', es: 'Dos amigos de la misma ciudad dibujan mapas mentales muy diferentes. ¿Cuál es la razón más probable?', fa: 'دو دوست در یک شهر نقشه‌های ذهنی بسیار متفاوت می‌کشند. محتمل‌ترین دلیل چیست؟' },
        choices: [{ en: 'They go to different parts of the city', es: 'Van a partes diferentes de la ciudad', fa: 'آن‌ها به بخش‌های مختلف شهر می‌روند' }, { en: 'One of them drew it wrong', es: 'Uno de ellos lo dibujó mal', fa: 'یکی از آن‌ها اشتباه کشید' }, { en: 'Mental maps change completely every single day', es: 'Los mapas mentales cambian por completo cada día', fa: 'نقشه‌های ذهنی هر روز کاملاً تغییر می‌کنند' }, { en: 'One of them copied a printed map of the city', es: 'Uno de ellos copió un mapa impreso de la ciudad', fa: 'یکی از آن‌ها از نقشهٔ چاپی شهر کاپی کرد' }], answer: 0,
        why: { en: 'Each person draws the city they actually use. Neither map is wrong.', es: 'Cada persona dibuja la ciudad que usa. Ningún mapa está mal.', fa: 'هر کس شهری را می‌کشد که خودش استفاده می‌کند. هیچ کدام غلط نیست.' } },
      { q: { en: 'Why do flat maps stretch some places?', es: '¿Por qué los mapas planos estiran algunos lugares?', fa: 'چرا نقشه‌های هموار بعضی جاها را کش می‌کنند؟' },
        choices: [{ en: 'A ball cannot lie flat without stretching', es: 'Una pelota no puede quedar plana sin estirarse', fa: 'توپ بدون کش آمدن هموار نمی‌شود' }, { en: 'Printers make mistakes on every map they print', es: 'Las impresoras se equivocan en cada mapa', fa: 'چاپگرها در هر نقشه اشتباه می‌کنند' }, { en: 'The poles keep moving', es: 'Los polos se mueven', fa: 'قطب‌ها حرکت می‌کنند' }, { en: 'Paper shrinks a little after it is printed', es: 'El papel se encoge un poco después de imprimir', fa: 'کاغذ بعد از چاپ کمی جمع می‌شود' }], answer: 0,
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
