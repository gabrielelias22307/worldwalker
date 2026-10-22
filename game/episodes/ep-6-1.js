/* WORLDWALKER · Episode 6.1 · South Asia — the Monsoon (WG.9)
   North to south the land teaches the region: the snowy Himalaya, tea terraces in the hills,
   the Ganges starting as melted ice and flowing east across a plain of rice paddies,
   then turning south to build a delta (with mangroves) on the Bay of Bengal. Boss: the Storm Grump (mockup 08). */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'WG.9',
  title: { en: 'South Asia: The Monsoon', es: 'Asia del Sur: el monzón', fa: 'جنوب آسیا: باد موسمی' },
  place: { en: 'The Ganges Plain', es: 'La llanura del Ganges', fa: 'دشت گنگا' },
  intro: [
    { en: 'The Storm Grump scrambled the monsoon winds! Now farmers do not know when to plant.',
      es: '¡El Gruñón Tormenta revolvió los vientos del monzón! Ahora los agricultores no saben cuándo sembrar.',
      fa: 'غرغروی طوفان بادهای موسمی را به هم زد! حالا دهقانان نمی‌دانند چه وقت بکارند.' },
    { en: 'Talk to the tea farmer, rice farmer and fisher. Then fix the compass stone.',
      es: 'Habla con el agricultor de té, la agricultora de arroz y el pescador. Luego arregla la piedra.',
      fa: 'با دهقان چای، دهقان برنج و ماهیگیر گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [83.0, 25.3],
    start: [
      { en: 'Welcome to the Ganges Plain in India, one of the most crowded places on Earth.',
        es: 'Bienvenido a la llanura del Ganges, en India, uno de los lugares con más gente del mundo.',
        fa: 'به دشت گنگا در هند خوش آمدی، یکی از پرجمعیت‌ترین جاهای جهان.' },
      { en: 'India has more people than any other country.',
        es: 'India tiene más personas que cualquier otro país.',
        fa: 'هند از هر کشور دیگر جمعیت بیشتری دارد.' },
      { en: 'Thanks to the monsoon, Mawsynram, India, is one of the rainiest places on Earth.',
        es: 'Por el monzón, Mawsynram, en India, es uno de los lugares más lluviosos del mundo.',
        fa: 'به خاطر مونسون، ماوسینرام در هند یکی از پرباران‌ترین جاهای جهان است.' }
    ],
    page: { en: 'Mount Everest, the highest mountain on Earth, is in the Himalaya.',
      es: 'El monte Everest, la montaña más alta del mundo, está en el Himalaya.',
      fa: 'کوه اورست، بلندترین کوه جهان، در هیمالیا است.' }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [9, 13], name: { en: 'Aunt Meena', es: 'Tía Meena', fa: 'خاله مینا' },
      look: { skin: 3, hair: '#1a1210', shirt: '#d6409a', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'Careful, the floor is wet! The monsoon rain came in the night.', es: '¡Cuidado, el piso está mojado! La lluvia del monzón llegó en la noche.', fa: 'احتیاط کن، زمین تر است! باران موسمی دیشب آمد.' },
        { en: 'Our house sits up high on a mud base, so floods stay outside.', es: 'Nuestra casa está en alto, sobre una base de barro, así las inundaciones se quedan afuera.', fa: 'خانهٔ ما روی یک تهداب بلند گِلی است، پس سیلاب بیرون می‌ماند.' }
      ] },
    { at: [15, 13], name: { en: 'Grandpa Ravi', es: 'Abuelo Ravi', fa: 'پدرکلان راوی' },
      look: { skin: 4, hair: '#e8e8e8', shirt: '#f0ead8', pants: '#7a6a4a', style: 'short' },
      lines: [
        { en: 'Rice in the wet summer, wheat in the cool winter. Same field!', es: 'Arroz en el verano lluvioso, trigo en el invierno fresco. ¡El mismo campo!', fa: 'برنج در تابستان بارانی، گندم در زمستان سرد. همان یک زمین!' },
        { en: 'The Ganges leaves rich soil every year. That is why so many people live here.', es: 'El Ganges deja tierra rica cada año. Por eso vive tanta gente aquí.', fa: 'گنگا هر سال خاک حاصلخیز می‌گذارد. برای همین این‌قدر مردم این‌جا زندگی می‌کنند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Rows 0-2: the Himalaya (A, M). Rows 3-4: tea terraces (t). The Ganges (~) starts in the ice at the top,
     runs south, then east along row 7 across the plain of rice paddies (q) and villages,
     then south (cols 26-27) through mangroves (j) into the Bay of Bengal. Rows 17-21: beach, fishing docks (k), sea. */
  map: [
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAAAAA~AAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAMMn.~.nMMMAAMMMMAAAMMMMAAAMMAA',
    'AMtt..~..tttt..MMtttt..tttt..MMA',
    'Mttt..b..ttt.....ttt.....ttt...M',
    'M.....~.....,.....QQQ..RRRgggg,M',
    'M..T..~...T.......hdh..hdhgggg.M',
    'M.....~~~~~~~~~~~b~~~~~~~~~~...M',
    'Tqqqq.qqqq.qqqq.qqqqq.qqq.~~...j',
    'Tqqqq.qqqq.qqqq.qqqqq.qqq.~~.O.j',
    'T....:....:...x:.....:...:~~...j',
    'Tqqqq:qqqq.qqqq.qqqqq:qqq.~~...j',
    'T....:..RRR...QQQ....:....~~j..j',
    'T.p..:..hdh...hdh....:....bbj..j',
    'T....:::::::::::::::::....~~~Gjj',
    'Tqqqqq.qqqqq.p.qqqqq......~~jqqj',
    'Tqqqqq.qqqqq...qqqqq..p.x.~~jjjj',
    'Tpssssspsssssspssssssspss~~~~ssj',
    'Tssskksssssssssssskksssss~s~~kkj',
    '~~~~kk~~~~~~~~~~~~kk~~~~~~~~~kk~',
    '================================',
    '================================'
  ],
  start: [10, 5],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): paddy walls on the flat, low land, ready for the monsoon */
  build: [
    { id: 'paddy', kind: 'place', board: [6, 10], tile: 'q', ok: [[1, 10], [2, 10], [3, 10], [4, 10]], cost: { wood: 1 },
      name: { en: 'Rice paddy walls', es: 'Bordos del arrozal', fa: 'دیوارهای شالیزار' },
      ask: { en: 'The summer monsoon brings heavy rain. Low mud walls around a flat field hold the water, so rice can grow in it. Build paddy walls on the flat, low land by the river, between the two paddies.',
        es: 'El monzón de verano trae lluvia fuerte. Unos bordos bajos de lodo alrededor de un campo plano guardan el agua, y así crece el arroz. Construye bordos en la tierra plana y baja junto al río, entre los dos arrozales.',
        fa: 'موسمی تابستان باران زیاد می‌آورد. دیوارهای پست گلی دور یک زمین هموار آب را نگه می‌دارند تا برنج در آن بروید. دیوارهای شالیزار را در زمین هموار و پست کنار دریا، بین دو شالیزار بساز.' },
      why: { en: 'Flat and low: the rain will stand here, just right for rice.', es: 'Plano y bajo: aquí el agua de lluvia se queda, justo lo que necesita el arroz.', fa: 'هموار و پست: آب باران این جا می‌ماند، درست همان که برنج لازم دارد.' },
      wrong: { en: 'Not here. Rain runs off hills and away from high ground. Paddy walls go on the flat, low land by the river, next to the other paddies.', es: 'Aquí no. La lluvia corre por las colinas y se va de la tierra alta. Los bordos van en la tierra plana y baja junto al río, al lado de los otros arrozales.', fa: 'این جا نه. باران از تپه‌ها و زمین بلند جاری می‌شود. دیوارهای شالیزار در زمین هموار و پست کنار دریا، کنار شالیزارهای دیگر می‌روند.' },
      done: { en: 'The new paddy is ready for the monsoon rain. Most of the world\'s rice grows in paddies like this in South and East Asia.', es: 'El nuevo arrozal está listo para la lluvia del monzón. La mayor parte del arroz del mundo crece en arrozales así en el sur y el este de Asia.', fa: 'شالیزار تازه برای باران موسمی آماده است. بیشتر برنج جهان در شالیزارهایی مثل این در جنوب و شرق آسیا می‌روید.' } }
  ],
  /* planting teaches the monsoon: rice grows only in the paddies, and only while the summer rain falls */
  seasons: { dry: 35, wet: 45 },
  plant: {
    basket: [11, 6],
    ask: { en: 'Rice needs water standing in the field. Tea likes rain that runs off the hills.', es: 'El arroz necesita agua en el campo. Al té le gusta la lluvia que baja por las colinas.', fa: 'برنج آب ایستاده در کشتزار را لازم دارد. چای بارانی را دوست دارد که از تپه‌ها جاری می‌شود.' },
    crops: [
      { id: 'rice', icon: '🌾', name: { en: 'rice', es: 'arroz', fa: 'برنج' }, rain: true, zones: [{ x: 1, y: 8, w: 25, h: 9 }],
        ok: { en: 'Rice in a flat paddy, in the monsoon rain. It will grow!', es: 'Arroz en un arrozal plano, con la lluvia del monzón. ¡Va a crecer!', fa: 'برنج در شالیزار هموار، در باران موسمی. می‌روید!' },
        dry: { en: 'No rain yet: this is the dry winter monsoon. Rice needs the summer monsoon rain. Wait for the rain, then plant.', es: 'Todavía no llueve: es el monzón de invierno, seco. El arroz necesita la lluvia del monzón de verano. Espera la lluvia y luego siembra.', fa: 'هنوز باران نیست: این موسمی خشک زمستان است. برنج باران موسمی تابستان را لازم دارد. منتظر باران بمان، بعد بکار.' },
        no: { en: 'Rice needs flat, low land where water can stand: the paddies by the river.', es: 'El arroz necesita tierra plana y baja donde el agua se quede: los arrozales junto al río.', fa: 'برنج زمین هموار و پست می‌خواهد که آب در آن بماند: شالیزارهای کنار دریا.' } },
      { id: 'tea', icon: '🍵', name: { en: 'tea', es: 'té', fa: 'چای' }, zones: [{ x: 1, y: 2, w: 30, h: 3 }],
        ok: { en: 'Tea on the hills: the rain runs off and the roots stay dry. It will grow!', es: 'Té en las colinas: la lluvia baja y las raíces quedan secas. ¡Va a crecer!', fa: 'چای روی تپه‌ها: باران جاری می‌شود و ریشه‌ها خشک می‌مانند. می‌روید!' },
        no: { en: 'Tea grows on the hills, where rain runs off. Down here the water stands and the roots get too wet.', es: 'El té crece en las colinas, donde la lluvia baja. Aquí abajo el agua se queda y las raíces se mojan demasiado.', fa: 'چای روی تپه‌ها می‌روید، جایی که باران جاری می‌شود. این پایین آب می‌ماند و ریشه‌ها خیلی تر می‌شوند.' } }
    ]
  },
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 5], at: [5, 2], decor: 'flower',
      clue: { en: 'Follow the Ganges north toward the snow. Stand just west of the river, as far north as you can.', es: 'Sigue el Ganges al norte hacia la nieve. Párate justo al oeste del río, lo más al norte que puedas.', fa: 'گنگا را به طرف شمال، به سوی برف، دنبال کن. درست غربِ دریا بایست، تا جایی که می‌توانی به شمال برو.' },
      text: { en: 'The river\'s start! The Ganges begins as melted ice at the Gangotri Glacier. A mountain flower!', es: '¡El comienzo del río! El Ganges nace como hielo derretido en el glaciar Gangotri. ¡Una flor de montaña!', fa: 'سرِ دریا! گنگا از یخ آب‌شدهٔ یخچال گنگوتری شروع می‌شود. یک گل کوهی!' } },
    { clueAt: [16, 18], at: [14, 15], decor: 'feather',
      clue: { en: 'Walk like the summer monsoon, from the sea onto land: 3 steps north. Then 2 steps west.', es: 'Camina como el monzón de verano, del mar a la tierra: 3 pasos al norte. Luego 2 pasos al oeste.', fa: 'مثل باد موسمی تابستان، از بحر به خشکه، راه برو: ۳ قدم به شمال. بعد ۲ قدم به غرب.' },
      text: { en: 'A duck feather! The wet ocean wind fills the rice paddies with rain, about June to September.', es: '¡Una pluma de pato! El viento húmedo del océano llena los arrozales de lluvia, más o menos de junio a septiembre.', fa: 'یک پر مرغابی! باد مرطوب اقیانوس تقریباً از جون تا سپتمبر کشتزارهای برنج را از باران پر می‌کند.' } }
  ],
  // only the Water Key (Episode 5.3) opens the sluice gate where a canal from the river meets the little paddy by the mangroves
  secret: { tool: 'key', at: [30, 15],
    text: { en: 'You opened the canal gate! Farmers here share the river water. They open the canal gates by turns, so every rice paddy gets water.',
      es: '¡Abriste la compuerta del canal! Aquí los agricultores comparten el agua del río. Abren las compuertas por turnos, así cada arrozal recibe agua.',
      fa: 'تو دروازهٔ جوی را باز کردی! دهقانان این جا آب دریا را با هم شریک می‌کنند. آن‌ها دروازه‌های جوی را به نوبت باز می‌کنند تا هر شالیزار آب بگیرد.' } },

  words: {
    monsoon: { en: 'a wind that changes direction with the season: wet from the ocean in summer, dry from the land in winter', es: 'un viento que cambia de dirección con la estación: húmedo desde el océano en verano, seco desde la tierra en invierno', fa: 'بادی که با فصل جهتش را تغییر می‌دهد: در تابستان از اقیانوس و مرطوب، در زمستان از خشکه و خشک' },
    himalaya: { en: 'the tallest mountains on Earth, along the north edge of South Asia', es: 'las montañas más altas de la Tierra, en el borde norte de Asia del Sur', fa: 'بلندترین کوه‌های زمین، در کنار شمالی جنوب آسیا' },
    'indian plate': { en: 'a huge, slow-moving piece of the Earth\'s outer shell that carries India and pushes into Asia', es: 'un enorme pedazo de la capa exterior de la Tierra que se mueve despacio, lleva a la India y empuja contra Asia', fa: 'یک تکهٔ بزرگ پوستهٔ زمین که آهسته حرکت می‌کند، هند را با خود دارد و به آسیا فشار می‌آورد' },
    subcontinent: { en: 'a huge piece of land that sticks out from the rest of a continent', es: 'un enorme pedazo de tierra que sobresale del resto de un continente', fa: 'یک تکهٔ بزرگ خشکه که از باقی یک قاره بیرون زده است' },
    delta: { en: 'flat land built where a river drops soil near the sea', es: 'tierra plana que se forma donde un río deja tierra cerca del mar', fa: 'زمین همواری که در جایی ساخته می‌شود که دریا نزدیک بحر خاک را می‌گذارد' },
    'wet season': { en: 'the months when most of the year\'s rain falls', es: 'los meses en que cae la mayor parte de la lluvia del año', fa: 'ماه‌هایی که بیشتر باران سال در آن می‌بارد' },
    'dry season': { en: 'the months when very little rain falls', es: 'los meses en que llueve muy poco', fa: 'ماه‌هایی که باران بسیار کم می‌بارد' },
    downstream: { en: 'the way a river flows: from where it starts in the hills toward the sea', es: 'hacia donde corre un río: desde donde nace en los cerros hacia el mar', fa: 'طرفی که دریا جریان دارد: از جای شروعش در کوه‌ها به سوی بحر' },
    drought: { en: 'a long time with too little rain, so crops and wells dry out', es: 'un tiempo largo con muy poca lluvia, así que los cultivos y los pozos se secan', fa: 'مدت درازی با باران بسیار کم، که کشت و چاه‌ها خشک می‌شوند' }
  },

  npcs: [
    {
      x: 8, y: 4,
      name: { en: 'Pemba', es: 'Pemba', fa: 'پمبا' },
      role: { en: 'Tea farmer in the hills', es: 'Agricultor de té en los cerros', fa: 'دهقان چای در تپه‌ها' },
      look: { skin: 2, hair: '#1a1410', shirt: '#c0392b', pants: '#2f3a4f' },
      lines: [
        { en: 'Namaste! Behind me are the [[himalaya|Himalaya]], the tallest mountains on Earth.',
          es: '¡Namasté! Detrás de mí está el [[himalaya|Himalaya]], las montañas más altas de la Tierra.',
          fa: 'نمستی! پشت سر من [[himalaya|هیمالیا]] است، بلندترین کوه‌های زمین.' },
        { en: 'The [[indian plate|Indian Plate]] pushed into Asia and made them. It is still pushing today!',
          es: 'La [[indian plate|placa india]] empujó contra Asia y las formó. ¡Todavía sigue empujando!',
          fa: '[[indian plate|صفحهٔ هند]] به آسیا فشار آورد و این کوه‌ها را ساخت. هنوز هم فشار می‌آورد!' },
        { en: 'South Asia juts out into the ocean: a [[subcontinent|subcontinent]]. India is its biggest country.',
          es: 'Asia del Sur sobresale hacia el océano: es un [[subcontinent|subcontinente]]. La India es su país más grande.',
          fa: 'جنوب آسیا به طرف اقیانوس بیرون زده: یک [[subcontinent|نیم‌قاره]]. هند بزرگ‌ترین کشور آن است.' },
        { en: 'Melting ice makes rivers. The Ganges starts at a glacier here, then flows to sea.',
          es: 'El hielo derretido forma ríos. El Ganges nace en un glaciar de aquí y corre al mar.',
          fa: 'یخ آب‌شده دریا می‌سازد. گنگا از یک یخچال این‌جا شروع می‌شود و به بحر می‌رود.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do geographers call South Asia a subcontinent?', es: '¿Por qué los geógrafos llaman subcontinente a Asia del Sur?', fa: 'چرا جغرافیه‌دانان جنوب آسیا را نیم‌قاره می‌گویند؟' },
        choices: [
          { ok: true, t: { en: 'A huge piece of land that sticks out', es: 'Un gran pedazo de tierra que sobresale', fa: 'یک تکهٔ بزرگ خشکه که بیرون زده' },
            why: { en: 'Yes. It is big like a continent, but it is part of Asia.', es: 'Sí. Es grande como un continente, pero es parte de Asia.', fa: 'بلی. مثل یک قاره بزرگ است، اما بخشی از آسیا است.' } },
          { t: { en: 'A long chain of small islands', es: 'Una larga cadena de islas pequeñas', fa: 'یک زنجیر دراز از جزیره‌های کوچک' },
            why: { en: 'A group of islands is an archipelago. South Asia is mostly one big piece of land.', es: 'Un grupo de islas es un archipiélago. Asia del Sur es casi toda un solo pedazo de tierra.', fa: 'گروه جزیره‌ها مجمع‌الجزایر است. جنوب آسیا بیشتر یک تکهٔ بزرگ خشکه است.' } },
          { t: { en: 'Land that lies deep under the sea', es: 'Tierra que está en el fondo del mar', fa: 'خشکه‌ای که در عمق بحر است' },
            why: { en: '"Sub" here does not mean under water. South Asia is dry land.', es: '"Sub" aquí no significa bajo el agua. Asia del Sur es tierra firme.', fa: '«نیم» این‌جا به معنای زیر آب نیست. جنوب آسیا خشکه است.' } }
        ]
      }
    },
    {
      x: 6, y: 15,
      name: { en: 'Lakshmi', es: 'Lakshmi', fa: 'لکشمی' },
      role: { en: 'Rice farmer', es: 'Agricultora de arroz', fa: 'دهقان برنج' },
      look: { skin: 4, hair: '#120c08', shirt: '#e08a1e', pants: '#7a2a5a', robe: true },
      lines: [
        { en: 'Hello! We grow rice on the Ganges plain. Rice needs lots of [[monsoon|monsoon]] rain.',
          es: '¡Hola! Cultivamos arroz en la llanura del Ganges. El arroz necesita mucha lluvia del [[monsoon|monzón]].',
          fa: 'سلام! ما در دشت گنگا برنج کشت می‌کنیم. برنج باران زیاد [[monsoon|باد موسمی]] می‌خواهد.' },
        { en: 'The monsoon is a wind that changes direction with the seasons.',
          es: 'El monzón es un viento que cambia de dirección con las estaciones.',
          fa: 'باد موسمی بادی است که با فصل‌ها جهتش را تغییر می‌دهد.' },
        { en: 'Most rain falls from about June to September: the [[wet season|wet season]]. We plant then.',
          es: 'Casi toda la lluvia cae más o menos de junio a septiembre: la [[wet season|temporada de lluvias]]. Sembramos entonces.',
          fa: 'بیشتر باران تقریباً از جون تا سپتامبر می‌بارد: [[wet season|فصل بارانی]]. ما همان وقت می‌کاریم.' },
        { en: 'Late, weak rain brings [[drought|drought]] and costly food. Too much rain floods fields and roads.',
          es: 'Una lluvia tardía y débil trae [[drought|sequía]] y comida cara. Demasiada lluvia inunda campos y caminos.',
          fa: 'باران دیر و کم [[drought|خشکسالی]] و غذای گران می‌آورد. باران بسیار زیاد کشتزارها و سرک‌ها را زیر آب می‌برد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why does Lakshmi watch the monsoon news so closely?', es: '¿Por qué Lakshmi sigue tan de cerca las noticias del monzón?', fa: 'چرا لکشمی خبرهای باد موسمی را با دقت دنبال می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Rain timing decides when to plant', es: 'La lluvia decide cuándo sembrar', fa: 'وقت باران تعیین می‌کند چه وقت بکارد' },
            why: { en: 'Right. Rice must get the heavy rain while it is young.', es: 'Correcto. El arroz debe recibir la lluvia fuerte mientras es joven.', fa: 'درست است. برنج باید وقتی جوان است باران زیاد بگیرد.' } },
          { t: { en: 'The wind tells her what language to use', es: 'El viento le dice qué idioma usar', fa: 'باد به او می‌گوید کدام زبان را به کار ببرد' },
            why: { en: 'Wind does not change language. It changes the rain.', es: 'El viento no cambia el idioma. Cambia la lluvia.', fa: 'باد زبان را تغییر نمی‌دهد. باران را تغییر می‌دهد.' } },
          { t: { en: 'It rains the same amount every month', es: 'Llueve lo mismo todos los meses del año', fa: 'هر ماه به یک اندازه باران می‌بارد' },
            why: { en: 'No. Most of the rain falls in just a few months.', es: 'No. Casi toda la lluvia cae en solo unos meses.', fa: 'نه. بیشتر باران فقط در چند ماه می‌بارد.' } }
        ]
      }
    },
    {
      x: 20, y: 18,
      name: { en: 'Selim', es: 'Selim', fa: 'سلیم' },
      role: { en: 'Fisher on the Bay of Bengal', es: 'Pescador del golfo de Bengala', fa: 'ماهیگیر خلیج بنگال' },
      look: { skin: 5, hair: '#0e0a08', shirt: '#2a8a7a', pants: '#3a3a3a' },
      lines: [
        { en: 'Salaam! I fish in the Bay of Bengal. Here the Ganges drops soil: a [[delta|delta]].',
          es: '¡Salam! Pesco en el golfo de Bengala. Aquí el Ganges deja tierra: un [[delta|delta]].',
          fa: 'سلام! من در خلیج بنگال ماهی می‌گیرم. این‌جا گنگا خاک می‌گذارد: یک [[delta|دلتا]].' },
        { en: 'Dhaka, the capital of Bangladesh, sits on this delta.',
          es: 'Daca, la capital de Bangladés, está en este delta.',
          fa: 'داکه، پایتخت بنگله‌دیش، روی همین دلتا است.' },
        { en: 'In summer, land heats faster than ocean. Wet southwest wind brings months of rain.',
          es: 'En verano, la tierra se calienta más rápido que el océano. El viento húmedo del suroeste trae meses de lluvia.',
          fa: 'در تابستان، خشکه زودتر از اقیانوس گرم می‌شود. باد مرطوب جنوب غرب ماه‌ها باران می‌آورد.' },
        { en: 'In winter, dry wind blows from the northeast, out to sea: the [[dry season|dry season]].',
          es: 'En invierno, un viento seco sopla del noreste hacia el mar: la [[dry season|temporada seca]].',
          fa: 'در زمستان، باد خشک از شمال شرق به طرف بحر می‌وزد: [[dry season|فصل خشک]].' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'In summer, where does the monsoon wind blow from?', es: 'En verano, ¿desde dónde sopla el viento del monzón?', fa: 'در تابستان، باد موسمی از کجا می‌وزد؟' },
        choices: [
          { ok: true, t: { en: 'From the ocean in toward the land', es: 'Desde el océano hacia la tierra', fa: 'از اقیانوس به طرف خشکه' },
            why: { en: 'Yes. The ocean wind carries wet air, so heavy rain falls on the land.', es: 'Sí. El viento del océano lleva aire húmedo, así que cae lluvia fuerte sobre la tierra.', fa: 'بلی. باد اقیانوس هوای مرطوب می‌آورد، پس روی خشکه باران زیاد می‌بارد.' } },
          { t: { en: 'From the land out toward the sea', es: 'Desde la tierra hacia el mar', fa: 'از خشکه به طرف بحر' },
            why: { en: 'That is the winter monsoon. It is dry.', es: 'Ese es el monzón de invierno. Es seco.', fa: 'این باد موسمی زمستان است. خشک است.' } },
          { t: { en: 'From the desert toward the mountains', es: 'Desde el desierto hacia las montañas', fa: 'از ریگستان به طرف کوه‌ها' },
            why: { en: 'Desert air is dry. The rain comes on wind from the ocean.', es: 'El aire del desierto es seco. La lluvia llega con el viento del océano.', fa: 'هوای ریگستان خشک است. باران با باد اقیانوس می‌آید.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 10, text: { en: 'GANGES RIVER · From Himalaya ice it flows east, then south to the Bay of Bengal. Millions farm with it.',
                            es: 'RÍO GANGES · Del hielo del Himalaya corre al este y luego al sur hasta el golfo de Bengala. Millones cultivan con su agua.',
                            fa: 'دریای گنگا · از یخ هیمالیا به شرق و بعد به جنوب تا خلیج بنگال می‌رود. میلیون‌ها نفر با آبش کشت می‌کنند.' } },
    { x: 24, y: 16, text: { en: 'WIND ARROWS · Summer: ocean ➜ land, wet. Winter: land ➜ ocean, dry. The monsoon wind turns around with the season.',
      es: 'FLECHAS DEL VIENTO · Verano: océano ➜ tierra, húmedo. Invierno: tierra ➜ océano, seco. El viento del monzón da la vuelta con la estación.',
      fa: 'تیرهای باد · تابستان: اقیانوس ⬅ خشکه، مرطوب. زمستان: خشکه ⬅ اقیانوس، خشک. باد موسمی با فصل برمی‌گردد.' } }
  ],

  /* the quest: Nani Kamala (gold !) -> Arjun the duck herder -> follow the Ganges downstream to find the rain gauge -> back to Kamala */
  quest: {
    stat: 'mov',
    title: { en: "Nani's Rain Gauge", es: 'El pluviómetro de la abuela', fa: 'باران‌سنج مادرکلان' },
    giver: {
      x: 27, y: 5,
      name: { en: 'Nani Kamala', es: 'Abuela Kamala', fa: 'مادرکلان کمالا' },
      role: { en: 'Rain keeper of the village', es: 'Guardiana de la lluvia del pueblo', fa: 'نگهبان باران ده' },
      look: { skin: 3, hair: '#d9d6d0', shirt: '#7a3e9a', pants: '#4a3a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'Hello! Each day I measure rain in a glass jar. It is my rain gauge.',
          es: '¡Hola! Cada día mido la lluvia en un frasco de vidrio. Es mi pluviómetro.',
          fa: 'سلام! هر روز باران را در یک مرتبان شیشه‌ای اندازه می‌کنم. این باران‌سنج من است.' },
        { en: 'Farmers ask me when the [[monsoon|monsoon]] rain has really come.',
          es: 'Los agricultores me preguntan cuándo llegó de verdad la lluvia del [[monsoon|monzón]].',
          fa: 'دهقانان از من می‌پرسند که باران [[monsoon|باد موسمی]] واقعاً کی آمده است.' },
        { en: 'The Storm Grump blew it into the river! Arjun herds ducks south-west, by the rice.',
          es: '¡El Gruñón Tormenta lo tiró al río! Arjun cuida patos al suroeste, junto al arroz.',
          fa: 'غرغروی طوفان آن را به دریا انداخت! ارجن در جنوب غرب، کنار برنج، مرغابی می‌چراند.' },
        { en: 'He sees everything on the water. Please ask him.',
          es: 'Él ve todo lo que pasa en el agua. Por favor, pregúntale.',
          fa: 'او همه چیز را روی آب می‌بیند. لطفاً از او بپرس.' }
      ],
      wait: { en: 'Arjun is south-west, by the rice fields. South is down. West is left.',
              es: 'Arjun está al suroeste, junto a los arrozales. El sur está abajo. El oeste, a la izquierda.',
              fa: 'ارجن در جنوب غرب، کنار کشتزارهای برنج است. جنوب پایین است. غرب طرف چپ است.' },
      thanks: { en: 'My rain gauge! Rivers always carry things [[downstream|downstream]]. Now I can track the [[wet season|wet season]].',
                es: '¡Mi pluviómetro! Los ríos siempre llevan las cosas [[downstream|río abajo]]. Ahora puedo seguir la [[wet season|temporada de lluvias]].',
                fa: 'باران‌سنج من! دریا همیشه چیزها را به [[downstream|پایین دریا]] می‌برد. حالا می‌توانم [[wet season|فصل بارانی]] را دنبال کنم.' }
    },
    contact: {
      x: 3, y: 12,
      name: { en: 'Arjun', es: 'Arjun', fa: 'ارجن' },
      role: { en: 'Duck herder', es: 'Pastor de patos', fa: 'چوپان مرغابی' },
      look: { skin: 5, hair: '#0e0a08', shirt: '#3a7ac0', pants: '#d8cfa8', style: 'short' },
      lines: [
        { en: 'Yes, I saw a glass jar float by! The Ganges carried it [[downstream|downstream]].',
          es: '¡Sí, vi pasar flotando un frasco de vidrio! El Ganges lo llevó [[downstream|río abajo]].',
          fa: 'بلی، دیدم یک مرتبان شیشه‌ای روی آب می‌رفت! گنگا آن را به [[downstream|پایین دریا]] برد.' },
        { en: 'It went the way water flows, toward the sea. The river runs east, then south.',
          es: 'Fue hacia donde corre el agua, hacia el mar. El río va al este y luego al sur.',
          fa: 'همان طرفی رفت که آب می‌رود، به سوی بحر. دریا به شرق و بعد به جنوب می‌رود.' },
        { en: 'Go south on the west bank to the bridge. Don\'t cross. Step one more south.',
          es: 'Ve al sur por la orilla oeste hasta el puente. No lo cruces. Da un paso más al sur.',
          fa: 'از کنار غربی به جنوب تا پل برو. از پل نگذر. یک قدم دیگر به جنوب برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [25, 14],
      hint: { en: 'west bank, 1 step south of the bridge where the river flows south', es: 'orilla oeste, 1 paso al sur del puente donde el río va al sur', fa: 'کنار غربی، ۱ قدم جنوبِ پلی که دریا آن‌جا به جنوب می‌رود' },
      found: { en: 'Stuck in the mud! The river carried it [[downstream|downstream]]: east, then south toward the Bay of Bengal.',
               es: '¡Atorado en el lodo! El río lo llevó [[downstream|río abajo]]: al este y luego al sur, hacia el golfo de Bengala.',
               fa: 'در گِل گیر مانده! دریا آن را به [[downstream|پایین دریا]] برد: به شرق، بعد به جنوب، به سوی خلیج بنگال.' },
      item: { icon: '🧪', name: { en: "Nani's rain gauge", es: 'El pluviómetro de la abuela', fa: 'باران‌سنج مادرکلان' } }
    }
  },

  scraps: [[2, 4], [30, 4], [30, 12]],
  smudges: [[13, 9], [17, 15], [8, 16]],

  challenge: {
    at: [22, 5],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // summer cards go to the rice paddies by the river (the wet wind comes in from the sea); winter cards go to the dry ground in the northeast corner (the dry wind blows from the northeast, over the land)
    zones: [{ bin: 'summer', x: 18, y: 8, w: 3, h: 2 }, { bin: 'summer', x: 22, y: 8, w: 3, h: 2 }, { bin: 'winter', x: 26, y: 5, w: 4, h: 2 }],
    style: 'bands',
    stat: 'pla',
    title: { en: 'Summer monsoon or winter monsoon?', es: '¿Monzón de verano o monzón de invierno?', fa: 'باد موسمی تابستان یا زمستان؟' },
    intro: { en: 'The Grump mixed up the seasons on the village calendar. Sort each card. Does it belong to the summer monsoon or the winter monsoon?',
      es: 'El Gruñón mezcló las estaciones en el calendario del pueblo. Ordena cada tarjeta. ¿Es del monzón de verano o del monzón de invierno?',
      fa: 'غرغرو فصل‌های تقویم ده را به هم زد. هر کارت را جدا کن. مربوط به باد موسمی تابستان است یا باد موسمی زمستان؟' },
    bins: [
      { id: 'summer', icon: '🌧️', tile: 'q', label: { en: 'Summer monsoon', es: 'Monzón de verano', fa: 'باد موسمی تابستان' }, sub: { en: 'about June to September', es: 'más o menos de junio a septiembre', fa: 'تقریباً جون تا سپتامبر' } },
      { id: 'winter', icon: '☀️', tile: 'g', label: { en: 'Winter monsoon', es: 'Monzón de invierno', fa: 'باد موسمی زمستان' }, sub: { en: 'the cooler, dry months', es: 'los meses más frescos y secos', fa: 'ماه‌های سردتر و خشک' } }
    ],
    items: [
      { bin: 'summer', t: { en: 'Wind blows from the ocean to the land', es: 'El viento sopla del océano a la tierra', fa: 'باد از اقیانوس به خشکه می‌وزد' }, why: { en: 'Ocean wind is the summer monsoon. It carries wet air.', es: 'El viento del océano es el monzón de verano. Lleva aire húmedo.', fa: 'باد اقیانوس باد موسمی تابستان است. هوای مرطوب می‌آورد.' } },
      { bin: 'summer', t: { en: 'Wind from the southwest', es: 'Viento del suroeste', fa: 'باد از جنوب غرب' }, why: { en: 'In summer the wet wind comes from the southwest, off the ocean.', es: 'En verano el viento húmedo viene del suroeste, desde el océano.', fa: 'در تابستان باد مرطوب از جنوب غرب، از طرف اقیانوس، می‌آید.' } },
      { bin: 'summer', t: { en: 'Heavy rain for weeks and weeks', es: 'Lluvia fuerte por semanas y semanas', fa: 'باران زیاد برای هفته‌ها' }, why: { en: 'Most of the year\'s rain falls in the summer monsoon.', es: 'Casi toda la lluvia del año cae en el monzón de verano.', fa: 'بیشتر باران سال در باد موسمی تابستان می‌بارد.' } },
      { bin: 'summer', t: { en: 'Farmers plant young rice in wet fields', es: 'Los agricultores siembran arroz joven en campos mojados', fa: 'دهقانان نهال برنج را در کشتزار تر می‌کارند' }, why: { en: 'Rice is planted so the young plants get the heavy summer rain.', es: 'El arroz se siembra para que las plantas jóvenes reciban la lluvia fuerte del verano.', fa: 'برنج طوری کاشته می‌شود که نهال‌های جوان باران زیاد تابستان را بگیرند.' } },
      { bin: 'summer', t: { en: 'Rivers rise, and floods can happen', es: 'Los ríos crecen y puede haber inundaciones', fa: 'دریاها بالا می‌آیند و سیلاب ممکن است' }, why: { en: 'Too much summer rain makes rivers spill over their banks.', es: 'Demasiada lluvia de verano hace que los ríos se desborden.', fa: 'باران زیاد تابستان دریاها را از کناره‌هایشان بیرون می‌ریزد.' } },
      { bin: 'winter', t: { en: 'Wind blows from the land out to the sea', es: 'El viento sopla de la tierra hacia el mar', fa: 'باد از خشکه به طرف بحر می‌وزد' }, why: { en: 'Land wind is the winter monsoon. It carries dry air.', es: 'El viento de la tierra es el monzón de invierno. Lleva aire seco.', fa: 'باد خشکه باد موسمی زمستان است. هوای خشک می‌آورد.' } },
      { bin: 'winter', t: { en: 'Wind from the northeast', es: 'Viento del noreste', fa: 'باد از شمال شرق' }, why: { en: 'In winter the wind turns around and comes from the northeast, over the land.', es: 'En invierno el viento da la vuelta y viene del noreste, sobre la tierra.', fa: 'در زمستان باد برمی‌گردد و از شمال شرق، از روی خشکه، می‌آید.' } },
      { bin: 'winter', t: { en: 'Dry, dusty, sunny days', es: 'Días secos, con polvo y sol', fa: 'روزهای خشک، گردآلود و آفتابی' }, why: { en: 'Dry land wind means little rain for most of South Asia.', es: 'El viento seco de la tierra significa poca lluvia en casi toda Asia del Sur.', fa: 'باد خشک خشکه یعنی باران کم برای بیشتر جنوب آسیا.' } },
      { bin: 'winter', t: { en: 'Water saved from the rains has to last', es: 'El agua guardada de las lluvias tiene que alcanzar', fa: 'آبی که از باران‌ها ذخیره شده باید کفایت کند' }, why: { en: 'With little rain, people use water saved in wells and ponds. If it runs out, there is drought.', es: 'Con poca lluvia, la gente usa el agua guardada en pozos y estanques. Si se acaba, hay sequía.', fa: 'با باران کم، مردم از آب ذخیره در چاه‌ها و حوض‌ها استفاده می‌کنند. اگر تمام شود، خشکسالی می‌آید.' } }
    ],
    success: { en: 'The calendar is right again. Wet wind from the ocean in summer, dry wind from the land in winter!', es: '¡El calendario vuelve a estar bien! Viento húmedo del océano en verano, viento seco de la tierra en invierno.', fa: 'تقویم دوباره درست شد. باد مرطوب از اقیانوس در تابستان، باد خشک از خشکه در زمستان!' }
  },

  boss: {
    at: [10, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Storm Grump', es: 'El Gruñón Tormenta', fa: 'غرغروی طوفان' },
    appear: { en: 'The Storm Grump is rising over the beach by the Bay of Bengal!', es: '¡El Gruñón Tormenta se levanta sobre la playa del golfo de Bengala!', fa: 'غرغروی طوفان بالای ساحل خلیج بنگال بلند می‌شود!' },
    taunt: { en: 'Whoosh! I mixed up the winds. Rain in winter, dust in summer! Nobody will know when to plant!', es: '¡Fiuuu! Revolví los vientos. ¡Lluvia en invierno, polvo en verano! ¡Nadie sabrá cuándo sembrar!', fa: 'ووووش! بادها را به هم زدم. باران در زمستان، گرد و خاک در تابستان! هیچ کس نمی‌داند چه وقت بکارد!' },
    win: { en: 'The cloud shield breaks. Gentle rain falls on the rice, and atlas page 6.1 drops into your hands!', es: 'El escudo de nubes se rompe. Una lluvia suave cae sobre el arroz, ¡y la página 6.1 del atlas cae en tus manos!', fa: 'سپر ابر می‌شکند. باران آرام روی برنج می‌بارد و صفحهٔ ۶.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'In summer, the monsoon wind blows from the ___ toward the land. What does it bring?', es: 'En verano, el viento del monzón sopla desde ___ hacia la tierra. ¿Qué trae?', fa: 'در تابستان، باد موسمی از ___ به سوی خشکی می‌وزد. با خود چه می‌آورد؟' },
        choices: [{ en: 'ocean — it brings heavy rain', es: 'el océano — trae lluvias fuertes', fa: 'اقیانوس — باران زیاد می‌آورد' }, { en: 'mountains — it brings snow', es: 'las montañas — trae nieve', fa: 'کوه‌ها — برف می‌آورد' }, { en: 'desert — it brings dust', es: 'el desierto — trae polvo', fa: 'ریگستان — گرد و خاک می‌آورد' }, { en: 'North Pole — it brings cold air', es: 'el Polo Norte — trae aire frío', fa: 'قطب شمال — هوای سرد می‌آورد' }], answer: 0,
        why: { en: 'The summer monsoon blows from the ocean, so it carries wet air and heavy rain.', es: 'El monzón de verano sopla desde el océano, así que lleva aire húmedo y lluvia fuerte.', fa: 'باد موسمی تابستان از اقیانوس می‌وزد، پس هوای مرطوب و باران زیاد می‌آورد.' } },
      { q: { en: 'What is a monsoon?', es: '¿Qué es un monzón?', fa: 'باد موسمی چیست؟' },
        choices: [{ en: 'A wind that turns with the seasons', es: 'Un viento que gira con las estaciones', fa: 'بادی که با فصل‌ها برمی‌گردد' }, { en: 'A wide river that floods each spring', es: 'Un río ancho que se desborda cada primavera', fa: 'یک دریای پهن که هر بهار سیلاب می‌شود' }, { en: 'A tall mountain range in northern India', es: 'Una cordillera alta en el norte de la India', fa: 'یک سلسله‌کوه بلند در شمال هند' }, { en: 'A dry season when no rain falls at all', es: 'Una temporada seca en que no llueve nada', fa: 'یک فصل خشک که هیچ باران نمی‌بارد' }], answer: 0,
        why: { en: 'A [[monsoon|monsoon]] is a wind. It blows from the ocean in summer and from the land in winter.', es: 'Un [[monsoon|monzón]] es un viento. Sopla desde el océano en verano y desde la tierra en invierno.', fa: '[[monsoon|باد موسمی]] یک باد است. در تابستان از اقیانوس و در زمستان از خشکه می‌وزد.' } },
      { q: { en: 'Most of South Asia\'s rain for the whole year falls ___.', es: 'Casi toda la lluvia del año en Asia del Sur cae ___.', fa: 'بیشتر باران تمام سال در جنوب آسیا ___ می‌بارد.' },
        choices: [{ en: 'in just a few months', es: 'en solo unos meses', fa: 'فقط در چند ماه' }, { en: 'evenly in all twelve months', es: 'igual en los doce meses', fa: 'به یک اندازه در هر دوازده ماه' }, { en: 'mostly in winter', es: 'casi toda en invierno', fa: 'بیشتر در زمستان' }, { en: 'only at night', es: 'solo de noche', fa: 'فقط در شب' }], answer: 0,
        why: { en: 'The summer monsoon brings most of the year\'s rain in a few months. The rest of the year is dry.', es: 'El monzón de verano trae casi toda la lluvia del año en unos meses. El resto del año es seco.', fa: 'باد موسمی تابستان بیشتر باران سال را در چند ماه می‌آورد. باقی سال خشک است.' } },
      { q: { en: 'A farmer in India watches the monsoon news closely. Why?', es: 'Un agricultor de la India sigue de cerca las noticias del monzón. ¿Por qué?', fa: 'یک دهقان در هند خبرهای باد موسمی را با دقت دنبال می‌کند. چرا؟' },
        choices: [{ en: 'The timing of the rain decides when to plant', es: 'El momento de la lluvia decide cuándo sembrar', fa: 'وقت باران تعیین می‌کند چه وقت بکارد' }, { en: 'The wind tells him which crops sell for the most money', es: 'El viento le dice qué cultivos se venden más caros', fa: 'باد به او می‌گوید کدام کشت گران‌تر فروخته می‌شود' }, { en: 'The rain decides which language the family speaks', es: 'La lluvia decide qué idioma habla la familia', fa: 'باران تعیین می‌کند خانواده به کدام زبان گپ بزند' }, { en: 'The wind brings cooler air for the animals', es: 'El viento trae aire más fresco para los animales', fa: 'باد برای حیوانات هوای سردتر می‌آورد' }], answer: 0,
        why: { en: 'Rice must be planted so the young plants get the heavy rain.', es: 'El arroz se debe sembrar para que las plantas jóvenes reciban la lluvia fuerte.', fa: 'برنج باید طوری کاشته شود که نهال‌های جوان باران زیاد را بگیرند.' } },
      { q: { en: 'One year the monsoon rain comes late and weak. What is the most likely problem?', es: 'Un año la lluvia del monzón llega tarde y débil. ¿Cuál es el problema más probable?', fa: 'یک سال باران موسمی دیر و کم می‌آید. محتمل‌ترین مشکل چیست؟' },
        choices: [{ en: 'Crops dry out and food costs more', es: 'Los cultivos se secan y la comida sube', fa: 'کشت‌ها خشک و غذا گران می‌شود' }, { en: 'Big rivers flood the roads', es: 'Los ríos grandes inundan caminos', fa: 'دریاهای بزرگ سرک‌ها را می‌گیرند' }, { en: 'The Himalaya grow much taller', es: 'El Himalaya crece mucho más', fa: 'هیمالیا خیلی بلندتر می‌شود' }, { en: 'Snow falls on the rice fields', es: 'Cae nieve sobre los arrozales', fa: 'روی کشتزار برنج برف می‌بارد' }], answer: 0,
        why: { en: 'Weak rain brings [[drought|drought]]. Floods come when the rain is too strong, not too weak.', es: 'La lluvia débil trae [[drought|sequía]]. Las inundaciones llegan cuando la lluvia es muy fuerte, no débil.', fa: 'باران کم [[drought|خشکسالی]] می‌آورد. سیلاب وقتی می‌آید که باران خیلی زیاد باشد، نه کم.' } },
      { q: { en: 'Geographers call South Asia a subcontinent. What does that mean?', es: 'Los geógrafos llaman subcontinente a Asia del Sur. ¿Qué significa?', fa: 'جغرافیه‌دانان جنوب آسیا را نیم‌قاره می‌گویند. یعنی چه؟' },
        choices: [{ en: 'A big landmass jutting out of a continent', es: 'Una gran tierra que sobresale de un continente', fa: 'خشکهٔ بزرگی که از یک قاره بیرون زده' }, { en: 'A group of islands close together in the sea', es: 'Un grupo de islas cercanas en el mar', fa: 'گروهی از جزیره‌های نزدیک به هم در بحر' }, { en: 'A flat area built by a river', es: 'Una zona plana formada por un río', fa: 'زمین همواری که دریا ساخته است' }, { en: 'A wind that changes with the season', es: 'Un viento que cambia con la estación', fa: 'بادی که با فصل تغییر می‌کند' }], answer: 0,
        why: { en: 'South Asia sticks out from the rest of Asia, so it is a [[subcontinent|subcontinent]].', es: 'Asia del Sur sobresale del resto de Asia, así que es un [[subcontinent|subcontinente]].', fa: 'جنوب آسیا از باقی آسیا بیرون زده است، پس یک [[subcontinent|نیم‌قاره]] است.' } },
      { q: { en: 'How did the Himalaya form?', es: '¿Cómo se formó el Himalaya?', fa: 'هیمالیا چطور ساخته شد؟' },
        choices: [{ en: 'The Indian Plate pushing on Asia', es: 'La placa india empujando a Asia', fa: 'فشار صفحهٔ هند به آسیا' }, { en: 'A huge flood piling up sand', es: 'Una gran inundación que amontonó arena', fa: 'سیلاب بزرگی که ریگ را انباشت' }, { en: 'Strong wind piling up snow', es: 'Un viento fuerte que amontonó nieve', fa: 'باد تیزی که برف را جمع کرد' }, { en: 'People building them long, long ago', es: 'Gente que las construyó hace siglos', fa: 'مردمی که خیلی وقت پیش آن‌ها را ساختند' }], answer: 0,
        why: { en: 'The [[indian plate|Indian Plate]] pushes into Asia and lifts the land into the tallest mountains on Earth.', es: 'La [[indian plate|placa india]] empuja contra Asia y levanta la tierra en las montañas más altas del planeta.', fa: '[[indian plate|صفحهٔ هند]] به آسیا فشار می‌آورد و زمین را به بلندترین کوه‌های زمین بالا می‌برد.' } },
      { q: { en: 'Dhaka is the capital of Bangladesh. It sits on which delta?', es: 'Daca es la capital de Bangladés. ¿En qué delta está?', fa: 'داکه پایتخت بنگله‌دیش است. روی کدام دلتا قرار دارد؟' },
        choices: [{ en: 'The Ganges delta', es: 'El delta del Ganges', fa: 'دلتای گنگا' }, { en: 'The Nile delta', es: 'El delta del Nilo', fa: 'دلتای نیل' }, { en: 'The Mekong delta', es: 'El delta del Mekong', fa: 'دلتای میکانگ' }, { en: 'The Indus delta', es: 'El delta del Indo', fa: 'دلتای سند' }], answer: 0,
        why: { en: 'The Ganges drops soil near the Bay of Bengal and builds the delta where Dhaka sits.', es: 'El Ganges deja tierra cerca del golfo de Bengala y forma el delta donde está Daca.', fa: 'گنگا نزدیک خلیج بنگال خاک می‌گذارد و دلتایی می‌سازد که داکه روی آن است.' } }
    ]
  },

  learned: [
    { en: 'A [[monsoon|monsoon]] is a wind that changes direction with the season: wet from the ocean in summer, dry from the land in winter.', es: 'Un [[monsoon|monzón]] es un viento que cambia de dirección con la estación: húmedo desde el océano en verano, seco desde la tierra en invierno.', fa: '[[monsoon|باد موسمی]] بادی است که با فصل جهتش را تغییر می‌دهد: در تابستان از اقیانوس و مرطوب، در زمستان از خشکه و خشک.' },
    { en: 'Most of the year\'s rain falls in a few months. Farmers plant rice with the rain. Too little rain brings [[drought|drought]]; too much brings floods.', es: 'Casi toda la lluvia del año cae en unos meses. Los agricultores siembran arroz con la lluvia. Muy poca lluvia trae [[drought|sequía]]; demasiada trae inundaciones.', fa: 'بیشتر باران سال در چند ماه می‌بارد. دهقانان با باران برنج می‌کارند. باران کم [[drought|خشکسالی]] می‌آورد و باران زیاد سیلاب.' },
    { en: 'South Asia is a [[subcontinent|subcontinent]]. The [[himalaya|Himalaya]] rose as the Indian Plate pushed into Asia, and the Ganges carries their melted ice to a huge [[delta|delta]].', es: 'Asia del Sur es un [[subcontinent|subcontinente]]. El [[himalaya|Himalaya]] se levantó cuando la placa india empujó contra Asia, y el Ganges lleva su hielo derretido hasta un enorme [[delta|delta]].', fa: 'جنوب آسیا یک [[subcontinent|نیم‌قاره]] است. [[himalaya|هیمالیا]] وقتی بلند شد که صفحهٔ هند به آسیا فشار آورد، و گنگا یخ آب‌شدهٔ آن را تا یک [[delta|دلتای]] بزرگ می‌برد.' }
  ],
  reflect: {
    q: { en: 'The monsoon decides when farmers plant. What season or weather changes your plans where you live now, or where you lived before?', es: 'El monzón decide cuándo siembran los agricultores. ¿Qué estación o clima cambia tus planes donde vives ahora, o donde vivías antes?', fa: 'باد موسمی تعیین می‌کند دهقانان چه وقت بکارند. کدام فصل یا هوا برنامه‌های تو را در جایی که حالا زندگی می‌کنی، یا پیش‌تر زندگی می‌کردی، تغییر می‌دهد؟' },
    starter: { en: 'One season that changes my plans is', es: 'Una estación que cambia mis planes es', fa: 'فصلی که برنامه‌های مرا تغییر می‌دهد' }
  }
};
