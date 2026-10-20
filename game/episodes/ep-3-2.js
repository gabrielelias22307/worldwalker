/* WORLDWALKER · Episode 3.2 · Russia & Central Asia (WG.6)
   48 x 22 = 3 x 2 screens. North to south: tundra, taiga, steppe. West of the Urals: Moscow and farms, where most people live.
   The Trans-Siberian Railway runs west to east across the whole map, past Lake Baikal to the Pacific. */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'WG.6',
  title: { en: 'Russia & Central Asia', es: 'Rusia y Asia Central', fa: 'روسیه و آسیای میانه' },
  place: { en: 'The Long Railway', es: 'El Largo Ferrocarril', fa: 'خط آهن دراز' },
  intro: [
    { en: 'Christopher: "The Grump scrambled the train timetable! The Trans-Siberian train cannot leave Moscow. Talk to the conductor, the forest ranger and the herder. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón revolvió el horario del tren! El tren Transiberiano no puede salir de Moscú. Habla con la conductora, la guardabosques y la pastora. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو جدول حرکت قطار را درهم کرد! قطار ترانس‌سیبری نمی‌تواند از مسکو حرکت کند. با کنترولر قطار، نگهبان جنگل و چوپان گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  map: [
    '================================================',
    'PzzzzzzzzzKMzzzzzzzznnzzzzzzzzzzzzzrzzzzzznzzz~=',
    'PzzznnzzzzMMzzzzzrzzzzzzzzzzzznnzzzzzzzzzzzzrz~=',
    'PzzzzzzznzMMzzzzzznzzzzzzzzrznzzzzzzzznzzzzzzz~=',
    'P..x......MMnnnnnnnPnnnnnnnPPnPnnnnnPnPnPnnnPn~=',
    'PRRR.QQQ..MMPPPnnnnPPJJnRRRPPnnPPnnnnPnPnRRRnP~=',
    'Phdh.hdh..MMPQQQnnnPPJJnhdhnPnPnPQQQPnPnnhdhnn~=',
    'P.........MMnhdhnPnnnnnnnnnnPnPnPhdhmmnPnnnnnn~=',
    'P.........MMxnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnk=',
    'P---------------------------------------------k=',
    'P.........MMnnnnnnnnnnnnnnnnnnnnnnnnnnnn~~nnnn~=',
    'P.wwwwww..MMPPnnPPnPPPPPPnnPPPnPnnnnnnn~~~~Pnn~=',
    'Pwwwwwwww.MMPPnnPPPnnPnPnPnPPPnPnnnnnn~~s~PnPn~=',
    'Pwwwwwwww.MMnPnnPPnPPnPPnPnnPnnPnnnnn~~~~nnPn~~=',
    'P.wwwww...KKnPnnnnnPnPnnnPnnnPPnPnnn~~~~nnPnn~~=',
    'Pgggggggggggggggggggggggggggggggggg~~~~gggggggg=',
    'Pggggggggggggggggggggggggggrgggggg~~~ggggggAAAA=',
    'PgggrgggggggggggggggggggggggggggggggggggAAAAAAA=',
    'PggggggggggggggggggggggggggggggggrggggggAAAAAAA=',
    'PgggggggggggggggggrgggggggggggggggggggggAAAAAAA=',
    'PggggggggrggggggggggggggggggggggggggggggAAAAAAA=',
    'PKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK'
  ],
  start: [5, 8],

  secret: { tool: 'canoe', at: [40, 12],
    text: { en: 'The canoe reached an island in Lake Baikal! In the chest is a note. It says Baikal is the deepest lake on Earth. It is more than 1,600 meters deep.',
      es: '¡La canoa llegó a una isla del lago Baikal! En el cofre hay una nota. Dice que el Baikal es el lago más profundo de la Tierra. Tiene más de 1600 metros de profundidad.',
      fa: 'قایق کوچک به یک جزیره در جهیل بایکال رسید! در صندوق یک یادداشت است. می‌گوید بایکال عمیق‌ترین جهیل روی زمین است. عمق آن بیشتر از ۱۶۰۰ متر است.' } },

  tools: ['axe', 'sickle'],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [7, 10], at: [12, 10], decor: 'gem',
      clue: { en: 'The Ural Mountains are the line between Europe and Asia. Stand on the first square of Asia: just east of the mountains, one step south of the railway.', es: 'Los montes Urales son la línea entre Europa y Asia. Párate en el primer cuadro de Asia: justo al este de las montañas, un paso al sur del ferrocarril.', fa: 'کوه‌های اورال خط میان اروپا و آسیا هستند. روی اولین خانهٔ آسیا بایست: درست شرقِ کوه‌ها، یک قدم جنوبِ خط آهن.' },
      text: { en: 'You crossed from Europe into Asia! The Ural Mountains are famous for beautiful stones, like green malachite. A shiny green gem was here.', es: '¡Pasaste de Europa a Asia! Los montes Urales son famosos por sus piedras hermosas, como la malaquita verde. Aquí había una gema verde y brillante.', fa: 'تو از اروپا به آسیا رفتی! کوه‌های اورال به خاطر سنگ‌های زیبا مثل ملاکیت سبز مشهور هستند. یک جواهر سبز و براق اینجا بود.' } },
    { clueAt: [30, 17], at: [26, 19], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps west, then 2 steps south. Something is hidden in the steppe grass.', es: 'Desde esta nota, camina 4 pasos al oeste y luego 2 pasos al sur. Algo está escondido en el pasto de la estepa.', fa: 'از این یادداشت، ۴ قدم به غرب برو، بعد ۲ قدم به جنوب. چیزی در علف‌های دشت پنهان است.' },
      text: { en: 'You followed compass directions! West is to the left and south is down. On the steppe of Kazakhstan, some herders still hunt with trained golden eagles. An eagle feather was in the grass.', es: '¡Seguiste las direcciones de la brújula! El oeste está a la izquierda y el sur abajo. En la estepa de Kazajistán, algunos pastores todavía cazan con águilas reales entrenadas. Había una pluma de águila en el pasto.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! غرب طرف چپ و جنوب پایین است. در دشت‌های قزاقستان، بعضی چوپان‌ها هنوز با عقاب‌های طلایی تربیه‌شده شکار می‌کنند. یک پر عقاب در علف‌ها بود.' } }
  ],

  words: {
    tundra: { en: 'flat, treeless land in the far north that is frozen most of the year', es: 'tierra plana y sin árboles en el extremo norte, congelada casi todo el año', fa: 'زمین هموار و بی‌درخت در شمال دور که بیشتر سال یخ‌زده است' },
    taiga: { en: 'the huge forest of pine, spruce and fir across the north of Russia', es: 'el enorme bosque de pinos, píceas y abetos en el norte de Rusia', fa: 'جنگل بسیار بزرگ صنوبر و کاج در شمال روسیه' },
    steppe: { en: 'a wide, flat, dry grassland', es: 'una pradera ancha, plana y seca', fa: 'علفزار پهن، هموار و خشک' },
    permafrost: { en: 'ground that stays frozen all year', es: 'suelo que se queda congelado todo el año', fa: 'زمینی که تمام سال یخ‌زده می‌ماند' },
    landlocked: { en: 'having no coast on any ocean', es: 'sin costa en ningún océano', fa: 'بدون ساحل در هیچ اقیانوس' },
    'semi-arid': { en: 'dry, but not a true desert', es: 'seco, pero no un desierto de verdad', fa: 'خشک، اما نه یک صحرای واقعی' }
  },

  npcs: [
    {
      x: 8, y: 7,
      name: { en: 'Olga', es: 'Olga', fa: 'اولگا' },
      role: { en: 'Train conductor', es: 'Conductora de tren', fa: 'کنترولر قطار' },
      look: { skin: 1, hair: '#8a5a2b', shirt: '#7a1f2b', pants: '#22324f' },
      lines: [
        { en: 'Welcome aboard! This is the Trans-Siberian Railway. It runs east from Moscow all the way to Vladivostok on the Pacific Ocean. It is the longest railway line in the world. The whole ride takes about a week.',
          es: '¡Bienvenido a bordo! Este es el ferrocarril Transiberiano. Va hacia el este, desde Moscú hasta Vladivostok, en el océano Pacífico. Es la línea de tren más larga del mundo. El viaje completo dura una semana más o menos.',
          fa: 'خوش آمدی! این خط آهن ترانس‌سیبری است. از مسکو به طرف شرق تا ولادی‌وستوک کنار اقیانوس آرام می‌رود. درازترین خط آهن دنیا است. تمام سفر حدود یک هفته طول می‌کشد.' },
        { en: 'Russia is the largest country on Earth. It stretches across eleven time zones. When the school day starts in Moscow, it is already afternoon on the Pacific coast.',
          es: 'Rusia es el país más grande de la Tierra. Cruza once husos horarios. Cuando empiezan las clases en Moscú, ya es de tarde en la costa del Pacífico.',
          fa: 'روسیه بزرگ‌ترین کشور زمین است. یازده منطقهٔ زمانی را در بر می‌گیرد. وقتی درس مکتب در مسکو شروع می‌شود، در ساحل اقیانوس آرام بعد از چاشت است.' },
        { en: 'But most Russians live here in the west, near Moscow and Saint Petersburg. About three out of four live west of the Ural Mountains. The reason is cold. East of the Urals, winters are long and the ground stays frozen.',
          es: 'Pero la mayoría de los rusos vive aquí, en el oeste, cerca de Moscú y San Petersburgo. Unos tres de cada cuatro viven al oeste de los montes Urales. La razón es el frío. Al este de los Urales, los inviernos son largos y el suelo sigue congelado.',
          fa: 'اما بیشتر مردم روسیه اینجا در غرب، نزدیک مسکو و سن‌پترزبورگ زندگی می‌کنند. از هر چهار نفر حدود سه نفر در غرب کوه‌های اورال زندگی می‌کنند. دلیلش سرما است. در شرق اورال زمستان‌ها دراز هستند و زمین یخ‌زده می‌ماند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Where do most Russians live?', es: '¿Dónde vive la mayoría de los rusos?', fa: 'بیشتر مردم روسیه کجا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'In the west, near Moscow, west of the Urals', es: 'En el oeste, cerca de Moscú, al oeste de los Urales', fa: 'در غرب، نزدیک مسکو، غرب اورال' },
            why: { en: 'The west has milder winters, better soil and rivers for shipping.', es: 'El oeste tiene inviernos menos duros, mejor tierra y ríos para transportar cosas.', fa: 'غرب زمستان ملایم‌تر، خاک بهتر و دریا برای انتقال بار دارد.' } },
          { t: { en: 'Spread evenly across all eleven time zones', es: 'Repartidos por igual en los once husos horarios', fa: 'به طور برابر در هر یازده منطقهٔ زمانی' },
            why: { en: 'Russia is huge, but its people are packed into one corner.', es: 'Rusia es enorme, pero su gente está junta en una sola parte.', fa: 'روسیه بسیار بزرگ است، اما مردمش در یک گوشه جمع هستند.' } },
          { t: { en: 'Along the Pacific coast in the far east', es: 'En la costa del Pacífico, en el extremo este', fa: 'کنار ساحل اقیانوس آرام در شرق دور' },
            why: { en: 'The far east is cold and has few people.', es: 'El extremo este es frío y tiene poca gente.', fa: 'شرق دور سرد است و مردم کمی دارد.' } }
        ]
      }
    },
    {
      x: 37, y: 12,
      name: { en: 'Sayana', es: 'Sayana', fa: 'سایانا' },
      role: { en: 'Forest ranger at Lake Baikal', es: 'Guardabosques del lago Baikal', fa: 'نگهبان جنگل در جهیل بایکال' },
      look: { skin: 2, hair: '#141010', shirt: '#2e6b3a', pants: '#3a2f25' },
      lines: [
        { en: 'This is the [[taiga|taiga]], the largest forest on Earth. Pine, spruce and fir grow here. Winters are long and bitter, and the soil is thin and poor. Crops grow badly, so few people live in it.',
          es: 'Esta es la [[taiga|taiga]], el bosque más grande de la Tierra. Aquí crecen pinos, píceas y abetos. Los inviernos son largos y duros, y la tierra es delgada y pobre. Los cultivos crecen mal, así que vive poca gente aquí.',
          fa: 'این [[taiga|تایگا]] است، بزرگ‌ترین جنگل زمین. کاج و صنوبر اینجا می‌رویند. زمستان‌ها دراز و سخت هستند و خاک نازک و ضعیف است. کشت خوب نمی‌روید، پس مردم کمی اینجا زندگی می‌کنند.' },
        { en: 'North of the trees lies the [[tundra|tundra]]: flat land with no trees, frozen most of the year. Under it is [[permafrost|permafrost]], ground that stays frozen all year. Builders raise houses on posts so their heat does not melt it.',
          es: 'Al norte de los árboles está la [[tundra|tundra]]: tierra plana sin árboles, congelada casi todo el año. Debajo está el [[permafrost|permafrost]], suelo que sigue congelado todo el año. Los constructores ponen las casas sobre postes para que su calor no lo derrita.',
          fa: 'شمال درختان [[tundra|توندرا]] است: زمین هموار بی‌درخت که بیشتر سال یخ‌زده است. زیر آن [[permafrost|زمین همیشه یخ‌زده]] است، زمینی که تمام سال یخ می‌ماند. معماران خانه‌ها را روی پایه‌ها بلند می‌سازند تا گرمی خانه آن را آب نکند.' },
        { en: 'This is Lake Baikal. It is the deepest lake in the world, and it holds more fresh water than any other lake. The railway runs along its southern shore, near the city of Irkutsk.',
          es: 'Este es el lago Baikal. Es el lago más profundo del mundo y tiene más agua dulce que cualquier otro lago. El ferrocarril pasa por su orilla sur, cerca de la ciudad de Irkutsk.',
          fa: 'این جهیل بایکال است. عمیق‌ترین جهیل دنیا است و از هر جهیل دیگر آب شیرین بیشتری دارد. خط آهن از کنار ساحل جنوبی آن، نزدیک شهر ایرکوتسک، می‌گذرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do so few people live in the taiga?', es: '¿Por qué vive tan poca gente en la taiga?', fa: 'چرا مردم این‌قدر کم در تایگا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'The winters are bitter and the soil is poor', es: 'Los inviernos son duros y la tierra es pobre', fa: 'زمستان‌ها سخت و خاک ضعیف است' },
            why: { en: 'Crops grow badly in thin, cold soil, so few people settle there.', es: 'Los cultivos crecen mal en tierra delgada y fría, así que poca gente se queda allí.', fa: 'کشت در خاک نازک و سرد خوب نمی‌روید، پس مردم کمی آنجا جای می‌گیرند.' } },
          { t: { en: 'It is too dry for any plants', es: 'Es demasiado seco para cualquier planta', fa: 'برای هیچ گیاهی بسیار خشک است' },
            why: { en: 'The taiga is a huge forest. Trees grow well. The cold is the problem.', es: 'La taiga es un bosque enorme. Los árboles crecen bien. El problema es el frío.', fa: 'تایگا یک جنگل بزرگ است. درختان خوب می‌رویند. مشکل سرما است.' } },
          { t: { en: 'The forest is very small', es: 'El bosque es muy pequeño', fa: 'جنگل خیلی کوچک است' },
            why: { en: 'The taiga is the largest forest on Earth.', es: 'La taiga es el bosque más grande de la Tierra.', fa: 'تایگا بزرگ‌ترین جنگل زمین است.' } }
        ]
      }
    },
    {
      x: 22, y: 17,
      name: { en: 'Aigerim', es: 'Aigerim', fa: 'آیگریم' },
      role: { en: 'Horse and sheep herder', es: 'Pastora de caballos y ovejas', fa: 'چوپان اسپ و گوسفند' },
      look: { skin: 3, hair: '#141010', shirt: '#c98a1c', pants: '#5a3a22' },
      lines: [
        { en: 'Welcome to the [[steppe|steppe]]! It is a wide, flat grassland. It is [[semi-arid|semi-arid]]: too dry for a forest, but grass grows well. My family grazes horses and sheep here, as herders have done for thousands of years.',
          es: '¡Bienvenido a la [[steppe|estepa]]! Es una pradera ancha y plana. Es [[semi-arid|semiárida]]: muy seca para un bosque, pero el pasto crece bien. Mi familia cría caballos y ovejas aquí, como lo han hecho los pastores por miles de años.',
          fa: 'به [[steppe|استپ]] خوش آمدی! این یک علفزار پهن و هموار است. [[semi-arid|نیمه‌خشک]] است: برای جنگل بسیار خشک، اما علف خوب می‌روید. خانوادهٔ من اینجا اسپ و گوسفند می‌چرانند، همان‌طور که چوپانان هزاران سال این کار را کرده‌اند.' },
        { en: 'I live in Kazakhstan, in Central Asia. Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan are all [[landlocked|landlocked]]. Not one touches an ocean. Our goods must cross other countries to reach a ship.',
          es: 'Vivo en Kazajistán, en Asia Central. Kazajistán, Uzbekistán, Turkmenistán, Kirguistán y Tayikistán son todos países [[landlocked|sin salida al mar]]. Ninguno toca un océano. Nuestras cosas deben cruzar otros países para llegar a un barco.',
          fa: 'من در قزاقستان، در آسیای میانه زندگی می‌کنم. قزاقستان، ازبکستان، ترکمنستان، قرغزستان و تاجکستان همه [[landlocked|محاط به خشکه]] هستند. هیچ کدام به اقیانوس نمی‌رسد. مال ما باید از کشورهای دیگر بگذرد تا به کشتی برسد.' },
        { en: 'Long ago, camel caravans on the Silk Road crossed this land between China and Europe. Today freight trains follow some of the same paths.',
          es: 'Hace mucho tiempo, las caravanas de camellos de la Ruta de la Seda cruzaban esta tierra entre China y Europa. Hoy, trenes de carga siguen algunos de esos mismos caminos.',
          fa: 'خیلی وقت پیش، کاروان‌های شتر در راه ابریشم از این زمین میان چین و اروپا می‌گذشتند. امروز قطارهای باری از بعضی همان راه‌ها می‌روند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What does landlocked mean?', es: '¿Qué quiere decir que un país está «sin salida al mar»?', fa: 'محاط به خشکه یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'Having no coast on any ocean', es: 'No tener costa en ningún océano', fa: 'هیچ ساحلی در اقیانوس نداشتن' },
            why: { en: 'Everything a landlocked country sells must cross a neighbor\'s land to reach a ship.', es: 'Todo lo que vende un país sin salida al mar debe cruzar un país vecino para llegar a un barco.', fa: 'هر چیزی که یک کشور محاط به خشکه می‌فروشد باید از خاک همسایه بگذرد تا به کشتی برسد.' } },
          { t: { en: 'Having a coast on two oceans', es: 'Tener costa en dos océanos', fa: 'ساحل در دو اقیانوس داشتن' },
            why: { en: 'That is the opposite of landlocked.', es: 'Eso es lo contrario.', fa: 'این برعکس آن است.' } },
          { t: { en: 'Having many large rivers', es: 'Tener muchos ríos grandes', fa: 'دریاهای بزرگ زیاد داشتن' },
            why: { en: 'Central Asia has big rivers, and it is still landlocked.', es: 'Asia Central tiene ríos grandes, y aun así no tiene salida al mar.', fa: 'آسیای میانه دریاهای بزرگ دارد و باز هم محاط به خشکه است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 4, text: { en: 'MOSCOW STATION · Trans-Siberian Railway to Vladivostok · about 9,300 km (5,800 miles) · about 7 days',
      es: 'ESTACIÓN DE MOSCÚ · Ferrocarril Transiberiano a Vladivostok · unos 9,300 km (5,800 millas) · unos 7 días',
      fa: 'ایستگاه مسکو · خط آهن ترانس‌سیبری تا ولادی‌وستوک · حدود ۹۳۰۰ کیلومتر · حدود ۷ روز' } },
    { x: 12, y: 8, text: { en: 'URAL MOUNTAINS · West of here: Europe. East of here: Asia. Geographers use these mountains as the line between the two.',
      es: 'MONTES URALES · Al oeste: Europa. Al este: Asia. Los geógrafos usan estas montañas como la línea entre las dos.',
      fa: 'کوه‌های اورال · غرب اینجا: اروپا. شرق اینجا: آسیا. جغرافیه‌دانان این کوه‌ها را خط میان این دو می‌دانند.' } }
  ],

  /* the quest: Dr. Ruslan (gold !) -> Pyotr at the flat-roof station -> find the thermometer on the tundra, north of where the taiga ends -> back to Ruslan */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Thermometer', es: 'El termómetro perdido', fa: 'حرارت‌سنج گم‌شده' },
    giver: {
      x: 9, y: 5,
      name: { en: 'Dr. Ruslan', es: 'Dr. Ruslán', fa: 'داکتر رسلان' },
      role: { en: 'Frozen-ground scientist', es: 'Científico del suelo helado', fa: 'دانشمند زمین یخ‌زده' },
      look: { skin: 3, hair: '#2a1d14', shirt: '#4a6fa5', pants: '#2b2b3a', hat: '#5a3a22' },
      lines: [
        { en: 'Oh no! The Grump\'s blizzard blew my ground thermometer away. It measures [[permafrost|permafrost]], the ground that stays frozen all year.',
          es: '¡Ay, no! La ventisca del Gruñón se llevó mi termómetro de suelo. Mide el [[permafrost|permafrost]], el suelo que sigue congelado todo el año.',
          fa: 'وای! توفان برف غرغرو حرارت‌سنج زمین مرا برد. این وسیله [[permafrost|زمین همیشه یخ‌زده]] را اندازه می‌کند، زمینی که تمام سال یخ می‌ماند.' },
        { en: 'Pyotr fixes the tracks at the station with the flat roofs, east of the Ural Mountains. He saw where it flew. Will you ride east and ask him?',
          es: 'Pyotr arregla las vías en la estación de techos planos, al este de los montes Urales. Él vio a dónde voló. ¿Vas al este a preguntarle?',
          fa: 'پیوتر در ایستگاهی که بام‌های هموار دارد، شرق کوه‌های اورال، خط آهن را ترمیم می‌کند. او دید که به کجا پرید. به طرف شرق می‌روی و از او می‌پرسی؟' }
      ],
      wait: { en: 'Pyotr is at the station with the flat roofs. Follow the railway east, past the Ural Mountains.',
        es: 'Pyotr está en la estación de techos planos. Sigue el ferrocarril al este, más allá de los montes Urales.',
        fa: 'پیوتر در ایستگاهی است که بام‌های هموار دارد. خط آهن را به طرف شرق دنبال کن، از کوه‌های اورال بگذر.' },
      thanks: { en: 'My thermometer! It shows the ground up there is frozen, even in summer. That is permafrost. Trees cannot grow roots in it, so the tundra has no forest. Thank you!',
        es: '¡Mi termómetro! Muestra que el suelo de allá arriba está congelado, aun en verano. Eso es el permafrost. Los árboles no pueden echar raíces en él, por eso la tundra no tiene bosque. ¡Gracias!',
        fa: 'حرارت‌سنج من! نشان می‌دهد زمین آن بالا حتی در تابستان یخ‌زده است. این همان زمین همیشه یخ‌زده است. درختان نمی‌توانند در آن ریشه بدوانند، پس توندرا جنگل ندارد. تشکر!' }
    },
    contact: {
      x: 21, y: 7,
      name: { en: 'Pyotr', es: 'Pyotr', fa: 'پیوتر' },
      role: { en: 'Railway track worker', es: 'Trabajador de las vías', fa: 'کارگر خط آهن' },
      look: { skin: 0, hair: '#e3c26b', shirt: '#e0782b', pants: '#2b3a4a', hat: '#c0392b' },
      lines: [
        { en: 'I saw it! The wind carried it east and then north, over the [[taiga|taiga]] forest. It came down where the trees stop.',
          es: '¡Lo vi! El viento lo llevó al este y luego al norte, por encima del bosque de la [[taiga|taiga]]. Cayó donde se acaban los árboles.',
          fa: 'دیدمش! باد آن را اول به شرق و بعد به شمال، از بالای جنگل [[taiga|تایگا]] برد. جایی افتاد که درختان تمام می‌شوند.' },
        { en: 'Ride east to the town with the blue roof and the market stalls. Then walk north through the taiga until the trees end. It is on the [[tundra|tundra]], straight north of the blue-roof house.',
          es: 'Ve al este hasta el pueblo del techo azul y los puestos del mercado. Luego camina al norte por la taiga hasta que se acaben los árboles. Está en la [[tundra|tundra]], justo al norte de la casa del techo azul.',
          fa: 'به طرف شرق تا شهرکی برو که بام آبی و غرفه‌های بازار دارد. بعد از میان تایگا به طرف شمال برو تا درختان تمام شوند. حرارت‌سنج روی [[tundra|توندرا]]، درست شمالِ خانهٔ بام‌آبی است.' }
      ]
    },
    action: {
      type: 'find',
      at: [34, 3],
      hint: { en: 'tundra, straight north of the blue house by the market', es: 'tundra, justo al norte de la casa azul junto al mercado', fa: 'توندرا، درست شمالِ خانهٔ آبی کنار بازار' },
      found: { en: 'There it is, on the flat, treeless [[tundra|tundra]]! The [[taiga|taiga]] ends just south of here. Farther north, it is too cold for trees.',
        es: '¡Ahí está, en la [[tundra|tundra]] plana y sin árboles! La [[taiga|taiga]] termina justo al sur de aquí. Más al norte hace demasiado frío para los árboles.',
        fa: 'آنجاست، روی [[tundra|توندرا]]ی هموار و بی‌درخت! [[taiga|تایگا]] درست جنوبِ اینجا تمام می‌شود. شمال‌تر برای درختان خیلی سرد است.' },
      item: { icon: '🌡️', name: { en: 'Ground thermometer', es: 'Termómetro de suelo', fa: 'حرارت‌سنج زمین' } }
    }
  },

  scraps: [[30, 1], [45, 15], [1, 20]],
  smudges: [[26, 12], [40, 3], [8, 16]],

  challenge: {
    at: [24, 7],
    type: 'route', // in the world; the card version (order) is the fallback
    // the stops along the Trans-Siberian line, west to east: Moscow, past the Urals, Siberia, Lake Baikal, the Pacific
    spots: [[3, 8], [14, 8], [26, 8], [39, 10], [45, 10]],
    stat: 'mov',
    title: { en: 'Ride the Trans-Siberian', es: 'Viaja en el Transiberiano', fa: 'سفر با قطار ترانس‌سیبری' },
    intro: { en: 'The Grump scrambled the train timetable! Walk to the stops on the map in order, from west to east, starting in Moscow.',
      es: '¡El Gruñón revolvió el horario del tren! Camina a las paradas del mapa en orden, de oeste a este, empezando en Moscú.',
      fa: 'غرغرو جدول قطار را درهم کرد! به ترتیب از غرب به شرق به ایستگاه‌های روی نقشه برو، از مسکو شروع کن.' },
    items: [
      { icon: '🏛️', t: { en: 'Moscow · the capital, in the west', es: 'Moscú · la capital, en el oeste', fa: 'مسکو · پایتخت، در غرب' } },
      { icon: '⛰️', t: { en: 'Yekaterinburg · just past the Ural Mountains, in Asia', es: 'Ekaterimburgo · justo después de los montes Urales, en Asia', fa: 'یکاترینبورگ · کمی بعد از کوه‌های اورال، در آسیا' } },
      { icon: '🏙️', t: { en: 'Novosibirsk · the biggest city in Siberia', es: 'Novosibirsk · la ciudad más grande de Siberia', fa: 'نووسیبیرسک · بزرگ‌ترین شهر سیبری' } },
      { icon: '🏞️', t: { en: 'Irkutsk · near Lake Baikal', es: 'Irkutsk · cerca del lago Baikal', fa: 'ایرکوتسک · نزدیک جهیل بایکال' } },
      { icon: '⚓', t: { en: 'Vladivostok · the port on the Pacific Ocean', es: 'Vladivostok · el puerto en el océano Pacífico', fa: 'ولادی‌وستوک · بندر کنار اقیانوس آرام' } }
    ],
    why: { en: 'The train starts in Moscow in the west. It crosses the Urals to Yekaterinburg, passes Novosibirsk, reaches Lake Baikal near Irkutsk, and ends at Vladivostok on the Pacific.',
      es: 'El tren sale de Moscú, en el oeste. Cruza los Urales hasta Ekaterimburgo, pasa por Novosibirsk, llega al lago Baikal cerca de Irkutsk y termina en Vladivostok, en el Pacífico.',
      fa: 'قطار از مسکو در غرب شروع می‌کند. از اورال می‌گذرد و به یکاترینبورگ می‌رسد، از نووسیبیرسک می‌گذرد، نزدیک ایرکوتسک به جهیل بایکال می‌رسد و در ولادی‌وستوک کنار اقیانوس آرام تمام می‌شود.' },
    success: { en: 'All aboard! The train rolls east across Siberia.', es: '¡Todos a bordo! El tren avanza hacia el este por Siberia.', fa: 'همه سوار شوید! قطار به طرف شرق از سیبری می‌گذرد.' }
  },

  boss: {
    at: [44, 8],
    stat: 'hei',
    need: 3,
    name: { en: 'The Blizzard Grump', es: 'El Gruñón de Ventisca', fa: 'غرغروی برف و توفان' },
    appear: { en: 'The Blizzard Grump is hiding at the end of the line, by the docks of Vladivostok!', es: '¡El Gruñón de Ventisca se esconde al final de la línea, junto al muelle de Vladivostok!', fa: 'غرغروی برف و توفان در آخر خط، کنار بندر ولادی‌وستوک پنهان است!' },
    taunt: { en: 'Whoooosh! I buried the whole railway in snow. Do you know where you are?', es: '¡Fiuuuu! Enterré todo el ferrocarril en nieve. ¿Sabes dónde estás?', fa: 'ووووش! تمام خط آهن را زیر برف کردم. می‌دانی کجا هستی؟' },
    win: { en: 'The snow clears. Atlas page 3.2 floats down into your hands!', es: 'La nieve se despeja. ¡La página 3.2 del atlas cae en tus manos!', fa: 'برف کنار می‌رود. صفحهٔ ۳.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'From Moscow, which way does the Trans-Siberian Railway run?', es: 'Desde Moscú, ¿hacia dónde va el ferrocarril Transiberiano?', fa: 'خط آهن ترانس‌سیبری از مسکو به کدام طرف می‌رود؟' },
        choices: [{ en: 'East, to the Pacific coast', es: 'Al este, hasta la costa del Pacífico', fa: 'شرق، تا ساحل اقیانوس آرام' }, { en: 'West, to the Baltic Sea', es: 'Al oeste, hasta el mar Báltico', fa: 'غرب، تا بحیرهٔ بالتیک' }, { en: 'South, to the Black Sea', es: 'Al sur, hasta el mar Negro', fa: 'جنوب، تا بحیرهٔ سیاه' }, { en: 'North, to the Arctic Ocean', es: 'Al norte, hasta el océano Ártico', fa: 'شمال، تا اقیانوس منجمد شمالی' }], answer: 0,
        why: { en: 'It runs east across Siberia to Vladivostok. The ride takes about a week.', es: 'Va al este por Siberia hasta Vladivostok. El viaje dura una semana más o menos.', fa: 'از سیبری به طرف شرق تا ولادی‌وستوک می‌رود. سفر حدود یک هفته است.' } },
      { q: { en: 'The largest forest on Earth covers Siberia. What is it called?', es: 'El bosque más grande de la Tierra cubre Siberia. ¿Cómo se llama?', fa: 'بزرگ‌ترین جنگل زمین سیبری را پوشانده. نامش چیست؟' },
        choices: [{ en: 'The taiga', es: 'La taiga', fa: 'تایگا' }, { en: 'The tundra', es: 'La tundra', fa: 'توندرا' }, { en: 'The steppe', es: 'La estepa', fa: 'استپ' }, { en: 'The delta', es: 'El delta', fa: 'دلتا' }], answer: 0,
        why: { en: 'The taiga is a forest of pine, spruce and fir. The tundra has no trees.', es: 'La taiga es un bosque de pinos, píceas y abetos. La tundra no tiene árboles.', fa: 'تایگا جنگل کاج و صنوبر است. توندرا درخت ندارد.' } },
      { q: { en: 'Permafrost is ground that...', es: 'El permafrost es suelo que...', fa: 'زمین همیشه یخ‌زده زمینی است که...' },
        choices: [{ en: 'stays frozen all year', es: 'sigue congelado todo el año', fa: 'تمام سال یخ‌زده می‌ماند' }, { en: 'freezes only in winter', es: 'se congela solo en invierno', fa: 'فقط در زمستان یخ می‌زند' }, { en: 'floods every spring', es: 'se inunda cada primavera', fa: 'هر بهار سیلاب می‌شود' }, { en: 'grows the best wheat', es: 'da el mejor trigo', fa: 'بهترین گندم را می‌دهد' }], answer: 0,
        why: { en: 'In Siberia this ground stays frozen even in summer. It is very hard to farm or build on.', es: 'En Siberia este suelo sigue congelado hasta en verano. Es muy difícil cultivar o construir en él.', fa: 'در سیبری این زمین حتی در تابستان یخ می‌ماند. کشت و ساختمان روی آن خیلی سخت است.' } },
      { q: { en: 'Where do most Russians live?', es: '¿Dónde vive la mayoría de los rusos?', fa: 'بیشتر مردم روسیه کجا زندگی می‌کنند؟' },
        choices: [{ en: 'West of the Ural Mountains', es: 'Al oeste de los montes Urales', fa: 'غرب کوه‌های اورال' }, { en: 'East of the Urals, in Siberia', es: 'Al este de los Urales, en Siberia', fa: 'شرق اورال، در سیبری' }, { en: 'In the tundra near the Arctic', es: 'En la tundra cerca del Ártico', fa: 'در توندرا نزدیک قطب شمال' }, { en: 'On the Pacific coast', es: 'En la costa del Pacífico', fa: 'در ساحل اقیانوس آرام' }], answer: 0,
        why: { en: 'About three out of four Russians live west of the Urals, where winters are milder.', es: 'Unos tres de cada cuatro rusos viven al oeste de los Urales, donde los inviernos son menos duros.', fa: 'از هر چهار نفر روس حدود سه نفر غرب اورال زندگی می‌کنند، جایی که زمستان ملایم‌تر است.' } },
      { q: { en: 'The steppe is a wide, dry...', es: 'La estepa es una ... ancha y seca.', fa: 'استپ یک ... پهن و خشک است.' },
        choices: [{ en: 'grassland', es: 'pradera', fa: 'علفزار' }, { en: 'forest', es: 'selva', fa: 'جنگل' }, { en: 'desert of sand dunes', es: 'desierto de dunas', fa: 'صحرای ریگی' }, { en: 'frozen tundra', es: 'tundra helada', fa: 'توندرای یخ‌زده' }], answer: 0,
        why: { en: 'It is too dry for forest, but grass grows well. Herders have used it for thousands of years.', es: 'Es muy seca para un bosque, pero el pasto crece bien. Los pastores la usan desde hace miles de años.', fa: 'برای جنگل بسیار خشک است، اما علف خوب می‌روید. چوپانان هزاران سال از آن استفاده کرده‌اند.' } },
      { q: { en: 'A landlocked country is a country with...', es: 'Un país sin salida al mar es un país...', fa: 'کشور محاط به خشکه کشوری است که...' },
        choices: [{ en: 'no coast on any ocean', es: 'sin costa en ningún océano', fa: 'هیچ ساحلی در اقیانوس ندارد' }, { en: 'a coast on two oceans', es: 'con costa en dos océanos', fa: 'در دو اقیانوس ساحل دارد' }, { en: 'many large rivers', es: 'con muchos ríos grandes', fa: 'دریاهای بزرگ زیاد دارد' }, { en: 'only mountains', es: 'con solo montañas', fa: 'فقط کوه دارد' }], answer: 0,
        why: { en: 'All five countries of Central Asia are landlocked. None touches an ocean.', es: 'Los cinco países de Asia Central no tienen salida al mar. Ninguno toca un océano.', fa: 'هر پنج کشور آسیای میانه محاط به خشکه هستند. هیچ کدام به اقیانوس نمی‌رسد.' } },
      { q: { en: 'The Caspian Sea looks huge on a map. What is it really?', es: 'El mar Caspio se ve enorme en el mapa. ¿Qué es en realidad?', fa: 'بحیرهٔ خزر روی نقشه بسیار بزرگ دیده می‌شود. در اصل چیست؟' },
        choices: [{ en: 'The largest lake on Earth', es: 'El lago más grande de la Tierra', fa: 'بزرگ‌ترین جهیل زمین' }, { en: 'A true ocean', es: 'Un océano de verdad', fa: 'یک اقیانوس واقعی' }, { en: 'A wide river', es: 'Un río ancho', fa: 'یک دریای پهن' }, { en: 'A glacier', es: 'Un glaciar', fa: 'یک یخچال' }], answer: 0,
        why: { en: 'Land closes it in on every side, with no outlet to the ocean. So it is a lake.', es: 'La tierra lo rodea por todos lados y no tiene salida al océano. Por eso es un lago.', fa: 'از همه طرف خشکه آن را گرفته و راهی به اقیانوس ندارد. پس یک جهیل است.' } },
      { q: { en: 'Which is the deepest lake in the world?', es: '¿Cuál es el lago más profundo del mundo?', fa: 'عمیق‌ترین جهیل دنیا کدام است؟' },
        choices: [{ en: 'Lake Baikal', es: 'El lago Baikal', fa: 'جهیل بایکال' }, { en: 'The Aral Sea', es: 'El mar de Aral', fa: 'بحیرهٔ آرال' }, { en: 'The Caspian Sea', es: 'El mar Caspio', fa: 'بحیرهٔ خزر' }, { en: 'The Black Sea', es: 'El mar Negro', fa: 'بحیرهٔ سیاه' }], answer: 0,
        why: { en: 'Lake Baikal is in southern Siberia, near Irkutsk. No lake is deeper.', es: 'El lago Baikal está en el sur de Siberia, cerca de Irkutsk. Ningún lago es más profundo.', fa: 'جهیل بایکال در جنوب سیبری، نزدیک ایرکوتسک است. هیچ جهیلی عمیق‌تر نیست.' } }
    ]
  },

  learned: [
    { en: 'Russia is the largest country on Earth, but most Russians live in the west, west of the Urals, where winters are milder.', es: 'Rusia es el país más grande de la Tierra, pero la mayoría de los rusos vive en el oeste, al oeste de los Urales, donde los inviernos son menos duros.', fa: 'روسیه بزرگ‌ترین کشور زمین است، اما بیشتر مردمش در غرب، غرب اورال، زندگی می‌کنند که زمستان ملایم‌تر است.' },
    { en: 'From north to south: [[tundra|tundra]] on [[permafrost|permafrost]], then the [[taiga|taiga]] forest, then the dry [[steppe|steppe]] grassland.', es: 'De norte a sur: la [[tundra|tundra]] sobre el [[permafrost|permafrost]], luego el bosque de la [[taiga|taiga]] y después la pradera seca de la [[steppe|estepa]].', fa: 'از شمال به جنوب: [[tundra|توندرا]] روی [[permafrost|زمین همیشه یخ‌زده]]، بعد جنگل [[taiga|تایگا]]، بعد علفزار خشک [[steppe|استپ]].' },
    { en: 'The Trans-Siberian Railway joins Moscow to the Pacific. The five countries of Central Asia are [[landlocked|landlocked]].', es: 'El ferrocarril Transiberiano une Moscú con el Pacífico. Los cinco países de Asia Central son países [[landlocked|sin salida al mar]].', fa: 'خط آهن ترانس‌سیبری مسکو را به اقیانوس آرام وصل می‌کند. پنج کشور آسیای میانه [[landlocked|محاط به خشکه]] هستند.' }
  ],
  reflect: {
    q: { en: 'In Russia, the cold decides where most people live. Where you live now, what about the weather or the land helps decide where people build homes, roads or farms?', es: 'En Rusia, el frío decide dónde vive la mayoría de la gente. Donde vives ahora, ¿qué parte del clima o de la tierra ayuda a decidir dónde se construyen casas, calles o granjas?', fa: 'در روسیه سرما تعیین می‌کند بیشتر مردم کجا زندگی کنند. جایی که حالا زندگی می‌کنی، کدام چیز هوا یا زمین کمک می‌کند تعیین شود مردم خانه، سرک یا زمین کشت را کجا بسازند؟' },
    starter: { en: 'Where I live, people build homes near', es: 'Donde vivo, la gente construye casas cerca de', fa: 'جایی که من زندگی می‌کنم، مردم خانه‌ها را نزدیک' }
  }
};
