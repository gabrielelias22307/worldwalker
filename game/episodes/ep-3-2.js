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
    { en: 'The Grump scrambled the timetable! The Trans-Siberian train cannot leave Moscow.', es: '¡El Gruñón revolvió el horario! El tren Transiberiano no puede salir de Moscú.', fa: 'غرغرو جدول قطار را درهم کرد! قطار ترانس‌سیبری نمی‌تواند از مسکو حرکت کند.' },
        { en: 'Talk to the conductor, the forest ranger and the herder. Then fix the compass stone.', es: 'Habla con la conductora, la guardabosques y la pastora. Luego arregla la piedra de la brújula.', fa: 'با کنترولر قطار، نگهبان جنگل و چوپان گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [90.0, 58.0],
    start: [
      { en: 'Russia is the biggest country on Earth. It has 11 time zones.',
        es: 'Rusia es el país más grande del mundo. Tiene 11 zonas horarias.',
        fa: 'روسیه بزرگ‌ترین کشور جهان است. ۱۱ منطقهٔ زمانی دارد.' },
      { en: 'The Trans-Siberian Railway runs about 5,800 miles, from Moscow to the Pacific.',
        es: 'El Transiberiano recorre unos 9,300 kilómetros, de Moscú al océano Pacífico.',
        fa: 'خط آهن ترانس‌سیبری حدود ۹۳۰۰ کیلومتر است، از مسکو تا اقیانوس آرام.' },
      { en: 'Lake Baikal in Siberia is the deepest lake in the world.',
        es: 'El lago Baikal, en Siberia, es el lago más profundo del mundo.',
        fa: 'جهیل بایکال در سیبریا عمیق‌ترین جهیل جهان است.' }
    ],
    page: { en: 'Kazakhstan is the biggest landlocked country in the world.',
      es: 'Kazajistán es el país sin salida al mar más grande del mundo.',
      fa: 'قزاقستان بزرگ‌ترین کشور محاط به خشکه در جهان است.' },
    guess: {
      q: { en: 'The train goes from Moscow to the Pacific. Is the trip short or long?', es: 'El tren va de Moscú al Pacífico. ¿El viaje es corto o largo?', fa: 'قطار از مسکو تا اقیانوس آرام می‌رود. سفر کوتاه است یا دراز؟' },
      choices: [
        { t: { en: '⏱️ A short trip', es: '⏱️ Un viaje corto', fa: '⏱️ سفر کوتاه' } },
        { t: { en: '🚆 A long trip', es: '🚆 Un viaje largo', fa: '🚆 سفر دراز' }, ok: true }
      ],
      why: { en: 'The Trans-Siberian Railway runs about 5,800 miles, and the whole trip takes about a week.', es: 'El Transiberiano recorre unos 9,300 kilómetros, y todo el viaje dura casi una semana.', fa: 'خط آهن ترانس‌سیبری حدود ۹۳۰۰ کیلومتر است و تمام سفر تقریباً یک هفته طول می‌کشد.' }
    },
    next: {
      q: { en: 'Next: the old Silk Road. What did traders carry on it?', es: 'Ahora: la antigua Ruta de la Seda. ¿Qué llevaban los comerciantes?', fa: 'بعدی: راه قدیم ابریشم. تاجرها در آن چه می‌بردند؟' },
      choices: [
        { t: { en: '🧵 Silk and spices', es: '🧵 Seda y especias', fa: '🧵 ابریشم و ادویه' }, ok: true },
        { t: { en: '📱 Phones and cars', es: '📱 Teléfonos y carros', fa: '📱 موبایل و موتر' } }
      ],
      why: { en: 'Silk Road traders carried silk, spices and paper between China and the Mediterranean Sea.', es: 'Los comerciantes de la Ruta de la Seda llevaban seda, especias y papel entre China y el mar Mediterráneo.', fa: 'تاجرهای راه ابریشم، ابریشم، ادویه و کاغذ را بین چین و بحیرهٔ مدیترانه می‌بردند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [2, 6], name: { en: 'Grandma Nina', es: 'Abuela Nina', fa: 'مادرکلان نینا' },
      look: { skin: 0, hair: '#cfcfcf', shirt: '#b8433a', pants: '#3a3a5a', style: 'bun', hat: '#e8c84a' },
      lines: [
        { en: 'Come in, take off your shoes! In summer I grow cucumbers at my dacha.', es: '¡Pasa, quítate los zapatos! En verano cultivo pepinos en mi dacha.', fa: 'بیا داخل، بوت‌هایت را بکش! تابستان در داچه‌ام بادرنگ می‌کارم.' },
        { en: 'A dacha is a garden house. My pickles last all the long winter.', es: 'Una dacha es una casa con huerto. Mis pepinillos duran todo el largo invierno.', fa: 'داچه یک خانهٔ باغی است. ترشی‌هایم تا آخر زمستان دراز دوام می‌کنند.' }
      ] },
    { at: [6, 6], name: { en: 'Dima', es: 'Dima', fa: 'دیما' },
      look: { skin: 0, hair: '#c89a50', shirt: '#3a7ad1', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Hi! I am packing. Tomorrow I take the train east to visit my aunt.', es: '¡Hola! Estoy haciendo la maleta. Mañana tomo el tren al este para visitar a mi tía.', fa: 'سلام! بکسم را جمع می‌کنم. فردا با قطار به شرق می‌روم تا خاله‌ام را ببینم.' },
        { en: 'When I go to bed in Moscow, my aunt in Vladivostok is waking up.', es: 'Cuando me acuesto en Moscú, mi tía en Vladivostok se está despertando.', fa: 'وقتی من در مسکو می‌خوابم، خاله‌ام در ولادی‌وستوک تازه بیدار می‌شود.' }
      ] },
    { at: [15, 7], name: { en: 'Grandpa Pavel', es: 'Abuelo Pavel', fa: 'پدرکلان پاول' },
      look: { skin: 1, hair: '#e0e0e0', shirt: '#4a7a5a', pants: '#3a2e24', style: 'short' },
      lines: [
        { en: 'Welcome! Look at this green stone. It comes from the Ural Mountains.', es: '¡Bienvenido! Mira esta piedra verde. Viene de los montes Urales.', fa: 'خوش آمدی! این سنگ سبز را ببین. از کوه‌های اورال می‌آید.' },
        { en: 'The Urals split Europe and Asia. My sister lives in Europe, I live in Asia!', es: 'Los Urales dividen Europa y Asia. ¡Mi hermana vive en Europa y yo en Asia!', fa: 'اورال اروپا و آسیا را جدا می‌کند. خواهرم در اروپا زندگی می‌کند، من در آسیا!' }
      ] },
    { at: [25, 6], name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      look: { skin: 1, hair: '#5a3a1e', shirt: '#8e5bd6', pants: '#2f2f4f', style: 'long' },
      lines: [
        { en: 'Shh, the baby is asleep. Outside it is colder than your freezer!', es: 'Shh, el bebé está dormido. ¡Afuera hace más frío que en tu congelador!', fa: 'آهسته، طفل خواب است. بیرون از فریزر هم سردتر است!' },
        { en: 'Our city grew up where the railway bridge crossed the wide Ob River.', es: 'Nuestra ciudad creció donde el puente del tren cruzó el ancho río Obi.', fa: 'شهر ما جایی بزرگ شد که پل خط آهن از دریای پهن اوب می‌گذشت.' }
      ] },
    { at: [34, 7], name: { en: 'Bair', es: 'Bair', fa: 'بایر' },
      look: { skin: 2, hair: '#141414', shirt: '#2e6f8e', pants: '#3a3a3a', style: 'short', hat: '#7a2a2a' },
      lines: [
        { en: 'Warm up by the stove! In winter, Lake Baikal freezes thick enough for cars.', es: '¡Caliéntate junto a la estufa! En invierno, el hielo del lago Baikal aguanta hasta carros.', fa: 'کنار بخاری گرم شو! در زمستان یخ جهیل بایکال آنقدر ضخیم است که موتر از رویش می‌رود.' },
        { en: 'I cut a hole and fish for omul. Only Baikal has this fish.', es: 'Hago un hueco y pesco omul. Este pez solo vive en el Baikal.', fa: 'یک سوراخ می‌کنم و ماهی اومول می‌گیرم. این ماهی فقط در بایکال است.' }
      ] },
    { at: [42, 6], name: { en: 'Anya', es: 'Anya', fa: 'آنیا' },
      look: { skin: 0, hair: '#9a3a1a', shirt: '#1f7a7a', pants: '#2a2a40', style: 'long' },
      lines: [
        { en: 'You came all the way! This is the end of the railway, on the Pacific.', es: '¡Llegaste hasta aquí! Este es el final del ferrocarril, junto al Pacífico.', fa: 'تا اینجا آمدی! اینجا آخر خط آهن است، کنار بحر آرام.' },
        { en: 'Here, trains meet ships. Ships sail on to Japan, Korea and China.', es: 'Aquí los trenes se encuentran con los barcos. Los barcos siguen a Japón, Corea y China.', fa: 'اینجا قطار به کشتی می‌رسد. کشتی‌ها به جاپان، کوریا و چین می‌روند.' }
      ] }
  ],

  map: [
    '================================================',
    'PzzzzzzzzzKMzzzzzzzznnzzzzzzzzzzzzzrzzzzzznzzz~=',
    'PzzznnzzzzMMzzzzzrzzzzzzzzzzzznnzzzzzzzzzzzzrz~=',
    'PzzzzzzznzMMzzzzzznzzzzzzzzrznzzzzzzzznzzzzzzz~=',
    'P..x..T...MMnnnnnnnPnnnnnnnPPnPnnnnnPnPnPnnnPn~=',
    'PRRR.QQQ..MMPPPnnnnPPJJnRRRPPnnPPnnnnPnPnRRRnP~=',
    'Phdh.hdh..MMPQQQnnnPPJJnhdhnPnPnPQQQPnPnnhdhnn~=',
    'P.........MMnhhdnPnnnnnnnnnnPnPnPhdhmmnPnnnnnn~=',
    'P.........MMxnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnk=',
    'P---------------------------------------------k=',
    'PT........MMnnnnnnnnnnnnnnnnnnnnnnnnnnnn~~nnnn~=',
    'P.wwwwww..MMPPnnPPnPPPPPPnnPPPnPnnnnnnn~~~~Pnn~=',
    'Pwwwwwwww.MMPPnnPPPnnPnPnPnPPPnPnnnnnn~~s~PnPn~=',
    'Pwwwwwwww.MMnPnnPPnPGnPPnPnnPnnPnnnnn~~~~nnPn~~=',
    'P.wwwww.Y.KKnPnnnnnPnPnnnPnnnPPnPnnn~~~~nnPnn~~=',
    'Pgggggggggggggggggggggggggggggggggg~~~~gggggggg=',
    'Pggggggggggggggggggggggggggrgggggg~~~ggggggAAAA=',
    'PgggrgggggggggggggggggggggggggggggggggggAAAAAAA=',
    'PggggggggggggggggggggggggggggggggrggggggAAAAAAA=',
    'PgggggggggggggggggrgggggggggggggggggggggAAAAAAA=',
    'PggggggggrggggggggggggggggggggggggggggggAAAAAAA=',
    'PKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK'
  ],
  start: [5, 8],
  train: true, // this trip comes with a train ticket: step along the tracks and the train carries you (before the Rail Pass in 3.3)

  // only the Compass Rose (Episode 1.3) opens the wooden gate into the hidden taiga clearing
  secret: { tool: 'compass', at: [20, 12],
    text: { en: 'The Compass Rose found a hidden path into the taiga! The taiga is the biggest forest on Earth. It stretches across Russia, from Europe all the way to the Pacific Ocean.',
      es: '¡La rosa de los vientos encontró un camino escondido en la taiga! La taiga es el bosque más grande de la Tierra. Cruza Rusia, desde Europa hasta el océano Pacífico.',
      fa: 'قطب‌نما یک راه پنهان را در تایگا پیدا کرد! تایگا بزرگ‌ترین جنگل روی زمین است. این جنگل از اروپا تا بحر آرام در سراسر روسیه کشیده شده است.' } },

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): a wooden house for a new town beside the Irkutsk station: in Siberia, towns grew along the railway */
  build: [
    { id: 'railtown', kind: 'place', board: [33, 10], tile: 'h', ok: [[34, 10, 'R'], [35, 10, 'R'], [36, 10, 'R'], [34, 11], [35, 11, 'd'], [36, 11]], cost: { wood: 1 },
      name: { en: 'A new railway town', es: 'Un pueblo nuevo junto al tren', fa: 'شهرک نو کنار خط آهن' },
      ask: { en: 'Siberia is huge and cold. Out here, towns grew up along the Trans-Siberian Railway, because the train brings food, goods and people. Build a wooden house for a new town right beside the Irkutsk station. Put the pieces on the six snow squares just east of this sign, between the tracks and the forest. Not on the tracks!',
        es: 'Siberia es enorme y fría. Aquí los pueblos crecieron junto al ferrocarril Transiberiano, porque el tren trae comida, mercancías y gente. Construye una casa de madera para un pueblo nuevo justo al lado de la estación de Irkutsk. Pon las piezas en los seis cuadros de nieve justo al este de este letrero, entre las vías y el bosque. ¡No sobre las vías!',
        fa: 'سیبری بسیار بزرگ و سرد است. این جا شهرک‌ها کنار خط آهن ترانس‌سیبری بزرگ شدند، چون قطار غذا، مال و مردم می‌آورد. برای یک شهرک نو، درست کنار ایستگاه ایرکوتسک یک خانهٔ چوبی بساز. تکه‌ها را روی شش خانهٔ برفی درست در شرق این لوحه بگذار، میان خط آهن و جنگل. نه روی خط آهن!' },
      why: { en: 'Right beside the station! The train will bring this town what it needs.', es: '¡Justo al lado de la estación! El tren le traerá a este pueblo lo que necesita.', fa: 'درست کنار ایستگاه! قطار هر چه این شهرک لازم دارد می‌آورد.' },
      wrong: { en: 'Not here. Build the house right beside the Irkutsk station: on the snow just east of the sign, south of the tracks.', es: 'Aquí no. Construye la casa justo al lado de la estación de Irkutsk: en la nieve, justo al este del letrero, al sur de las vías.', fa: 'این جا نه. خانه را درست کنار ایستگاه ایرکوتسک بساز: روی برف، درست در شرق لوحه، در جنوب خط آهن.' },
      wrongBy: [
        { x: 1, y: 1, w: 45, h: 3, t: { en: 'This is the frozen tundra, far from the railway. The ground is frozen all year and no train comes here, so very few people live this far north.', es: 'Esta es la tundra helada, lejos del ferrocarril. El suelo está congelado todo el año y ningún tren llega aquí, así que muy poca gente vive tan al norte.', fa: 'این جا توندرای یخ‌زده است، دور از خط آهن. زمین تمام سال یخ‌زده است و هیچ قطاری این جا نمی‌آید، پس مردم بسیار کمی این قدر در شمال زندگی می‌کنند.' } },
        { x: 1, y: 9, w: 45, h: 1, t: { en: 'Not on the tracks! The train must get through. Build beside the railway, not on it.', es: '¡No sobre las vías! El tren tiene que pasar. Construye al lado del ferrocarril, no encima.', fa: 'نه روی خط آهن! قطار باید بگذرد. کنار خط آهن بساز، نه روی آن.' } },
        { x: 12, y: 12, w: 24, h: 3, t: { en: 'This is deep in the taiga forest, far from the station. Towns grew where the train stops.', es: 'Esto está en lo profundo del bosque de la taiga, lejos de la estación. Los pueblos crecieron donde para el tren.', fa: 'این جا در عمق جنگل تایگا است، دور از ایستگاه. شهرک‌ها جایی بزرگ شدند که قطار می‌ایستد.' } }
      ],
      done: { en: 'A new town grows beside the station! Most of Siberia is empty, but towns line the Trans-Siberian Railway. The train links them to Moscow and the Pacific.', es: '¡Un pueblo nuevo crece junto a la estación! Casi toda Siberia está vacía, pero hay pueblos a lo largo del Transiberiano. El tren los une con Moscú y el Pacífico.', fa: 'یک شهرک نو کنار ایستگاه بزرگ می‌شود! بیشتر سیبری خالی است، اما شهرک‌ها در امتداد خط آهن ترانس‌سیبری هستند. قطار آن‌ها را به مسکو و اقیانوس آرام وصل می‌کند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [7, 10], at: [12, 10], decor: 'gem',
      clue: { en: 'The Ural Mountains divide Europe and Asia. Stand just east of them, one step south of the railway.', es: 'Los montes Urales dividen Europa y Asia. Párate justo al este de ellos, un paso al sur del ferrocarril.', fa: 'کوه‌های اورال اروپا و آسیا را جدا می‌کنند. درست شرقِ آن‌ها، یک قدم جنوبِ خط آهن بایست.' },
      text: { en: 'You crossed into Asia! The Urals are famous for pretty stones, like green malachite. A green gem!', es: '¡Pasaste a Asia! Los Urales son famosos por sus piedras bonitas, como la malaquita verde. ¡Una gema verde!', fa: 'به آسیا رسیدی! اورال به خاطر سنگ‌های زیبا مثل ملاکیت سبز مشهور است. یک جواهر سبز!' } },
    { clueAt: [30, 17], at: [26, 19], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps west, then 2 steps south. Something is hidden in the steppe grass.', es: 'Desde esta nota, camina 4 pasos al oeste y luego 2 pasos al sur. Algo está escondido en el pasto de la estepa.', fa: 'از این یادداشت، ۴ قدم به غرب برو، بعد ۲ قدم به جنوب. چیزی در علف‌های دشت پنهان است.' },
      text: { en: 'You followed the compass! On the Kazakh steppe, some herders still hunt with golden eagles. A feather!', es: '¡Seguiste la brújula! En la estepa de Kazajistán, algunos pastores todavía cazan con águilas reales. ¡Una pluma!', fa: 'قطب‌نما را دنبال کردی! در دشت قزاقستان، بعضی چوپان‌ها هنوز با عقاب طلایی شکار می‌کنند. یک پر!' } }
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
        { en: 'Welcome aboard! The Trans-Siberian runs a week east, from Moscow to Vladivostok on the Pacific.', es: '¡Bienvenido! El Transiberiano viaja una semana al este, de Moscú a Vladivostok, en el Pacífico.', fa: 'خوش آمدی! ترانس‌سیبری یک هفته از مسکو به طرف شرق تا ولادی‌وستوک کنار اقیانوس آرام می‌رود.' },
        { en: 'It is the world\'s longest railway. Russia, the largest country, stretches across eleven time zones.', es: 'Es el ferrocarril más largo del mundo. Rusia, el país más grande, cruza once husos horarios.', fa: 'درازترین خط آهن دنیا است. روسیه، بزرگ‌ترین کشور، یازده منطقهٔ زمانی را در بر می‌گیرد.' },
        { en: 'When school starts in Moscow, it is already afternoon on the Pacific coast.', es: 'Cuando empiezan las clases en Moscú, ya es de tarde en la costa del Pacífico.', fa: 'وقتی مکتب در مسکو شروع می‌شود، در ساحل اقیانوس آرام بعد از چاشت است.' },
        { en: 'Three in four Russians live west of the Urals, near Moscow. East, winters are long.', es: 'Tres de cada cuatro rusos viven al oeste de los Urales, cerca de Moscú. Al este, los inviernos son largos.', fa: 'از هر چهار روس سه نفر در غرب اورال، نزدیک مسکو، زندگی می‌کنند. در شرق زمستان دراز است.' }
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
        { en: 'This is the [[taiga|taiga]], the largest forest on Earth: pine, spruce and fir.', es: 'Esta es la [[taiga|taiga]], el bosque más grande de la Tierra: pinos, píceas y abetos.', fa: 'این [[taiga|تایگا]] است، بزرگ‌ترین جنگل زمین: کاج و صنوبر.' },
        { en: 'Bitter winters and poor soil mean crops grow badly, so few people live here.', es: 'Por los inviernos duros y la tierra pobre, los cultivos crecen mal, así que vive poca gente aquí.', fa: 'زمستان سخت و خاک ضعیف باعث می‌شود کشت خوب نروید، پس مردم کمی اینجا زندگی می‌کنند.' },
        { en: 'North is the treeless [[tundra|tundra]], on [[permafrost|permafrost]]. Houses stand on posts so it stays frozen.', es: 'Al norte está la [[tundra|tundra]] sin árboles, sobre el [[permafrost|permafrost]]. Las casas van sobre postes para que siga congelado.', fa: 'در شمال [[tundra|توندرا]]ی بی‌درخت روی [[permafrost|زمین همیشه یخ‌زده]] است. خانه‌ها روی پایه‌ها هستند تا یخ آب نشود.' },
        { en: 'Lake Baikal, near Irkutsk, is the world\'s deepest lake, with the most fresh water.', es: 'El lago Baikal, cerca de Irkutsk, es el lago más profundo del mundo y el de más agua dulce.', fa: 'جهیل بایکال، نزدیک ایرکوتسک، عمیق‌ترین جهیل دنیا است و بیشترین آب شیرین را دارد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do so few people live in the taiga?', es: '¿Por qué vive tan poca gente en la taiga?', fa: 'چرا مردم این‌قدر کم در تایگا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Bitter winters and poor soil', es: 'Inviernos duros y tierra pobre', fa: 'زمستان سخت و خاک ضعیف' },
            why: { en: 'Crops grow badly in thin, cold soil, so few people settle there.', es: 'Los cultivos crecen mal en tierra delgada y fría, así que poca gente se queda allí.', fa: 'کشت در خاک نازک و سرد خوب نمی‌روید، پس مردم کمی آنجا جای می‌گیرند.' } },
          { t: { en: 'It is far too dry for plants', es: 'Es demasiado seco para las plantas', fa: 'برای گیاه خیلی خشک است' },
            why: { en: 'The taiga is a huge forest. Trees grow well. The cold is the problem.', es: 'La taiga es un bosque enorme. Los árboles crecen bien. El problema es el frío.', fa: 'تایگا یک جنگل بزرگ است. درختان خوب می‌رویند. مشکل سرما است.' } },
          { t: { en: 'The forest there is very small', es: 'Allí el bosque es muy pequeño', fa: 'جنگل آنجا خیلی کوچک است' },
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
        { en: 'Welcome to the [[steppe|steppe]], a wide, flat grassland. It is [[semi-arid|semi-arid]]: too dry for forest.', es: '¡Bienvenido a la [[steppe|estepa]], una pradera ancha y plana! Es [[semi-arid|semiárida]]: muy seca para un bosque.', fa: 'به [[steppe|استپ]]، یک علفزار پهن و هموار، خوش آمدی! [[semi-arid|نیمه‌خشک]] است: برای جنگل بسیار خشک.' },
        { en: 'Grass grows well. Herders have grazed horses and sheep here for thousands of years.', es: 'El pasto crece bien. Los pastores crían caballos y ovejas aquí desde hace miles de años.', fa: 'علف خوب می‌روید. چوپانان هزاران سال است اینجا اسپ و گوسفند می‌چرانند.' },
        { en: 'Kazakhstan, Uzbekistan, Turkmenistan, Kyrgyzstan and Tajikistan are [[landlocked|landlocked]]. Goods cross other countries to reach ships.', es: 'Kazajistán, Uzbekistán, Turkmenistán, Kirguistán y Tayikistán no tienen [[landlocked|salida al mar]]. Las mercancías cruzan otros países para llegar a un barco.', fa: 'قزاقستان، ازبکستان، ترکمنستان، قرغزستان و تاجکستان [[landlocked|محاط به خشکه]] هستند. مال از کشورهای دیگر می‌گذرد تا به کشتی برسد.' },
        { en: 'Silk Road camel caravans once crossed here between China and Europe. Now freight trains do.', es: 'Las caravanas de camellos de la Ruta de la Seda cruzaban aquí entre China y Europa. Hoy lo hacen trenes de carga.', fa: 'کاروان‌های شتر راه ابریشم روزی از اینجا میان چین و اروپا می‌گذشتند. حالا قطارهای باری می‌گذرند.' }
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
        { en: 'Oh no! The Grump\'s blizzard blew my ground thermometer away.', es: '¡Ay, no! La ventisca del Gruñón se llevó mi termómetro de suelo.', fa: 'وای! توفان برف غرغرو حرارت‌سنج زمین مرا برد.' },
        { en: 'It measures [[permafrost|permafrost]], the ground that stays frozen all year.', es: 'Mide el [[permafrost|permafrost]], el suelo que sigue congelado todo el año.', fa: 'این وسیله [[permafrost|زمین همیشه یخ‌زده]] را اندازه می‌کند، زمینی که تمام سال یخ می‌ماند.' },
        { en: 'Pyotr fixes tracks at the flat-roof station, east of the Ural Mountains.', es: 'Pyotr arregla las vías en la estación de techos planos, al este de los Urales.', fa: 'پیوتر در ایستگاه بام‌هموار، شرق کوه‌های اورال، خط آهن را ترمیم می‌کند.' },
        { en: 'He saw where it flew. Will you ride east and ask him?', es: 'Él vio a dónde voló. ¿Vas al este a preguntarle?', fa: 'او دید که به کجا پرید. به طرف شرق می‌روی و از او می‌پرسی؟' }
      ],
      wait: { en: 'Pyotr is at the flat-roof station. Follow the railway east, past the Urals.', es: 'Pyotr está en la estación de techos planos. Sigue el ferrocarril al este, más allá de los Urales.', fa: 'پیوتر در ایستگاه بام‌هموار است. خط آهن را به طرف شرق دنبال کن، از اورال بگذر.' },
      thanks: { en: 'My thermometer! Permafrost stays frozen, even in summer. Tree roots cannot grow there. Thanks!', es: '¡Mi termómetro! El permafrost sigue congelado, aun en verano. Las raíces no crecen allí. ¡Gracias!', fa: 'حرارت‌سنج من! زمین همیشه یخ‌زده حتی در تابستان یخ است. ریشهٔ درخت آنجا نمی‌روید. تشکر!' }
    },
    contact: {
      x: 21, y: 7,
      name: { en: 'Pyotr', es: 'Pyotr', fa: 'پیوتر' },
      role: { en: 'Railway track worker', es: 'Trabajador de las vías', fa: 'کارگر خط آهن' },
      look: { skin: 0, hair: '#e3c26b', shirt: '#e0782b', pants: '#2b3a4a', hat: '#c0392b' },
      lines: [
        { en: 'I saw it! The wind carried it east, then north over the [[taiga|taiga]] forest.', es: '¡Lo vi! El viento lo llevó al este y luego al norte, sobre el bosque de la [[taiga|taiga]].', fa: 'دیدمش! باد آن را به شرق و بعد به شمال، از بالای جنگل [[taiga|تایگا]] برد.' },
        { en: 'It came down where the trees stop.', es: 'Cayó donde se acaban los árboles.', fa: 'جایی افتاد که درختان تمام می‌شوند.' },
        { en: 'Ride east to the town with the blue roof and the market stalls.', es: 'Ve al este hasta el pueblo del techo azul y los puestos del mercado.', fa: 'به طرف شرق تا شهرکی برو که بام آبی و غرفه‌های بازار دارد.' },
        { en: 'Walk north past the trees. It lies on the [[tundra|tundra]], north of the blue roof.', es: 'Camina al norte hasta pasar los árboles. Está en la [[tundra|tundra]], al norte del techo azul.', fa: 'به طرف شمال برو تا از درختان بگذری. روی [[tundra|توندرا]]، شمالِ بام آبی است.' }
      ]
    },
    action: {
      type: 'find',
      at: [34, 3],
      hint: { en: 'tundra, straight north of the blue house by the market', es: 'tundra, justo al norte de la casa azul junto al mercado', fa: 'توندرا، درست شمالِ خانهٔ آبی کنار بازار' },
      found: { en: 'There it is, on the treeless [[tundra|tundra]]! The [[taiga|taiga]] ends just south. Farther north, trees cannot grow.', es: '¡Ahí está, en la [[tundra|tundra]] sin árboles! La [[taiga|taiga]] termina justo al sur. Más al norte no crecen árboles.', fa: 'آنجاست، روی [[tundra|توندرا]]ی بی‌درخت! [[taiga|تایگا]] درست جنوبِ اینجا تمام می‌شود. شمال‌تر درخت نمی‌روید.' },
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
        choices: [{ en: 'The largest lake on Earth', es: 'El lago más grande de la Tierra', fa: 'بزرگ‌ترین جهیل زمین' }, { en: 'A true, salty ocean', es: 'Un océano salado de verdad', fa: 'یک اقیانوس شور واقعی' }, { en: 'A very wide, slow river', es: 'Un río muy ancho y lento', fa: 'یک دریای بسیار پهن و آرام' }, { en: 'A huge glacier of ice', es: 'Un enorme glaciar de hielo', fa: 'یک یخچال بسیار بزرگ' }], answer: 0,
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
