/* WORLDWALKER · Episode 5.2 · Culture and Cultural Diffusion — Iran and the UAE (WG.8, WG.14)
   Top half: the old bazaar town of Kashan (Iran) with a Persian garden. Middle: the water of the Gulf with two crossings.
   Bottom half: Dubai (UAE) — the old dhow harbor, wind-tower houses and a market on the left, glass towers on the right. */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'WG.8, WG.14',
  title: { en: 'Culture and Cultural Diffusion', es: 'Cultura y difusión cultural', fa: 'فرهنگ و پخش فرهنگی' },
  place: { en: 'Kashan and Dubai', es: 'Kashán y Dubái', fa: 'کاشان و دبی' },
  intro: [
    { en: 'The Wall Grump put up walls across the water! Now ideas cannot travel.',
      es: '¡El Gruñón Muro levantó muros sobre el agua! Ahora las ideas no pueden viajar.',
      fa: 'غرغروی دیوار روی آب دیوار ساخت! حالا فکرها نمی‌توانند سفر کنند.' },
    { en: 'Talk to the tea seller, the gardener and the city guide. Then fix the stone.',
      es: 'Habla con el vendedor de té, la jardinera y la guía de la ciudad. Luego arregla la piedra.',
      fa: 'با چای‌فروش، باغبان و رهنمای شهر گپ بزن. بعد سنگ را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [51.4, 34.0],
    start: [
      { en: 'Welcome to Kashan, an old desert city in Iran, famous for rose water.',
        es: 'Bienvenido a Kashán, una vieja ciudad del desierto en Irán, famosa por su agua de rosas.',
        fa: 'به کاشان خوش آمدی، شهر کهنهٔ بیابانی در ایران، مشهور به گلاب.' },
      { en: 'Old houses here have wind towers that pull cool air inside.',
        es: 'Las casas viejas aquí tienen torres de viento que meten aire fresco.',
        fa: 'خانه‌های کهنهٔ اینجا بادگیر دارند که هوای سرد را داخل می‌کشند.' },
      { en: 'Wind towers spread across the Gulf. You can still see them in Dubai.',
        es: 'Las torres de viento llegaron a todo el Golfo. Todavía se ven en Dubái.',
        fa: 'بادگیرها در سراسر خلیج پخش شدند. هنوز در دوبی دیده می‌شوند.' }
    ],
    page: { en: 'Dubai\'s Burj Khalifa is the tallest building in the world.',
      es: 'El Burj Khalifa de Dubái es el edificio más alto del mundo.',
      fa: 'برج خلیفه در دوبی بلندترین ساختمان جهان است.' },
    guess: {
      q: { en: 'How do foods, games and words spread to new places?', es: '¿Cómo llegan las comidas, los juegos y las palabras a lugares nuevos?', fa: 'غذاها، بازی‌ها و کلمه‌ها چطور به جاهای تازه می‌رسند؟' },
      choices: [
        { t: { en: '🌧️ Rain carries them', es: '🌧️ La lluvia los lleva', fa: '🌧️ باران آن‌ها را می‌برد' } },
        { t: { en: '🧳 Travel and trade', es: '🧳 Viajes y comercio', fa: '🧳 سفر و تجارت' }, ok: true }
      ],
      why: { en: 'Cultural diffusion spreads traits like tea, chess and words when people meet, trade and travel.', es: 'La difusión cultural lleva rasgos como el té, el ajedrez y las palabras cuando la gente se encuentra, comercia y viaja.', fa: 'پخش فرهنگی ویژگی‌هایی مثل چای، شطرنج و کلمه‌ها را وقتی مردم همدیگر را می‌بینند، تجارت و سفر می‌کنند پخش می‌کند.' }
    },
    next: {
      q: { en: 'Next: the Dead Sea is very salty. Can people float in it?', es: 'Después: el mar Muerto es muy salado. ¿La gente puede flotar en él?', fa: 'بعدی: بحیرهٔ مرده خیلی شور است. آیا مردم روی آب آن می‌مانند؟' },
      choices: [
        { t: { en: '🛟 Yes, they float', es: '🛟 Sí, flotan', fa: '🛟 بلی، روی آب می‌مانند' }, ok: true },
        { t: { en: '⚓ No, they sink', es: '⚓ No, se hunden', fa: '⚓ نه، غرق می‌شوند' } }
      ],
      why: { en: 'The Dead Sea is so salty that people float on top of the water.', es: 'El mar Muerto es tan salado que la gente flota sobre el agua.', fa: 'بحیرهٔ مرده آن‌قدر شور است که مردم روی آب می‌مانند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [3, 2], name: { en: 'Weaver Maryam', es: 'Tejedora Maryam', fa: 'بافنده مریم' },
      look: { skin: 2, hair: '#2a1a12', shirt: '#2f5fa8', pants: '#5a2a3a', style: 'long' },
      lines: [
        { en: 'Shh, I am counting knots. This carpet will take me many months.', es: 'Shh, estoy contando nudos. Esta alfombra me va a tomar muchos meses.', fa: 'آرام، گره‌ها را می‌شمارم. بافتن این قالین چندین ماه وقت می‌گیرد.' },
        { en: 'Kashan carpets traveled on trade roads. Now people everywhere copy our patterns.', es: 'Las alfombras de Kashán viajaron por rutas de comercio. Ahora en todas partes copian nuestros diseños.', fa: 'قالین‌های کاشان در راه‌های تجارت سفر کردند. حالا همه جا از نقش‌های ما تقلید می‌کنند.' }
      ] },
    { at: [8, 2], name: { en: 'Grandpa Javad', es: 'Abuelo Javad', fa: 'پدرکلان جواد' },
      look: { skin: 2, hair: '#d0d0d0', shirt: '#7a5a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome! Sit in the courtyard. The pool and trees keep it cool.', es: '¡Bienvenido! Siéntate en el patio. El estanque y los árboles lo mantienen fresco.', fa: 'خوش آمدی! در حویلی بنشین. حوض و درخت‌ها این‌جا را سرد نگه می‌دارند.' },
        { en: 'Tea came here from China long ago. Now we drink it all day!', es: 'El té llegó aquí desde China hace mucho. ¡Ahora lo tomamos todo el día!', fa: 'چای مدت‌ها پیش از چین به این‌جا آمد. حالا تمام روز چای می‌نوشیم!' }
      ] },
    { at: [13, 2], name: { en: 'Parisa', es: 'Parisa', fa: 'پریسا' },
      look: { skin: 1, hair: '#3a2418', shirt: '#3fae6a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Careful, wet floor! We are cleaning the whole house for Nowruz.', es: '¡Cuidado, el piso está mojado! Estamos limpiando toda la casa para Nowruz.', fa: 'احتیاط کن، زمین تر است! برای نوروز تمام خانه را پاک می‌کنیم.' },
        { en: 'Nowruz starts the year on the first day of spring. Afghanistan celebrates it too!', es: 'Nowruz empieza el año el primer día de la primavera. ¡Afganistán también lo celebra!', fa: 'نوروز سال را در روز اول بهار شروع می‌کند. افغانستان هم آن را جشن می‌گیرد!' }
      ] },
    { at: [3, 14], name: { en: 'Grandpa Obaid', es: 'Abuelo Obaid', fa: 'پدرکلان عبید' },
      look: { skin: 3, hair: '#e0e0e0', shirt: '#f4f4f4', pants: '#d8d8d0', hat: '#f4f4f4', robe: true },
      lines: [
        { en: 'Come in out of the heat! My grandfather dived for pearls here.', es: '¡Pasa, sal del calor! Mi abuelo buceaba buscando perlas aquí.', fa: 'از گرمی بیا داخل! پدرکلانم این‌جا برای مروارید غواصی می‌کرد.' },
        { en: 'Before oil, Dubai lived from the sea. Now you hear languages from everywhere.', es: 'Antes del petróleo, Dubái vivía del mar. Ahora se escuchan idiomas de todas partes.', fa: 'پیش از نفت، دبی از بحر زندگی می‌کرد. حالا زبان‌های همه جای دنیا را می‌شنوی.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Rows 1-8: Kashan, Iran — flat-roof houses (J), the covered bazaar lane (f) with stalls (m), a courtyard well (O),
               and a walled Persian garden split in four by water channels.
     Rows 9-11: the Gulf, with two crossings (B) and a small dhow pier (k).
     Rows 12-20: Dubai, UAE — old wind-tower houses (J), a market, a road, and glass towers (U). */
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'MsJEJssJEJssJJJssWWWWWWWWWWWWWsM',
    'MsJdJssJdJssJdJssWT,,,,,,,,,TWsM',
    'MssssssssssssssssW,,T,,,,,T,,WsM',
    'MsmmmsmmmmsmmmmssW~B~~~~~~~B~WsM',
    'M:::::::::::::::::::,,,b,,,,,WsM',
    'MsmmmsmmmmsmmmmssW,,T,,,,,T,,WsM',
    'Mssssssssssss:sssWT,,,,,,,,,TWsM',
    'MsJJJs,O,sJJJ:sssWWWWWWWWWWWWWsM',
    '~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~B~',
    '=============B================B=',
    '~~~kk~~~~~~~~B~~~~~~~~~~~~~~~~B~',
    'psssssssssxssssssssssssssssssssp',
    'psJEJsJJJssmmmsssUUsUUsUUsUUsssp',
    'psJdJsJJJssssssssUUsUUsUUsUUsssp',
    'pssssssssssmmmsssssssssssssssssp',
    'p:::::::::::::::::::::::::::::sp',
    'psmmsmmsmmsssssssUUsmmmmsUUUsssp',
    'pssssssssssssssssUUssssssUUUsxsp',
    'pssssssssssssssssUUssssssUUUsspp',
    'ppsspsssssssspssssspssssssspsGsp',
    'pppppppppppppppppppppppppppppppp'
  ],
  start: [4, 16],

  tools: ['axe', 'sickle'],
  /* build: finish the cross of water in the Persian garden (chahar bagh), an idea that spread from Iran to India, Spain and Dubai */
  build: [
    { id: 'garden', kind: 'place', board: [16, 3], tile: '~', ok: [[23, 2], [23, 3], [23, 6], [23, 7]], cost: { wood: 1 },
      name: { en: 'Water channels of the Persian garden', es: 'Canales del jardín persa', fa: 'جوی‌های باغ ایرانی' },
      ask: { en: 'A Persian garden has water channels in the shape of a cross. They cut the garden into four parts. This garden has only the east-west channel. Dig the north-south channel: a straight line through the middle, from the bridge to the north wall and to the south wall.',
        es: 'Un jardín persa tiene canales de agua en forma de cruz. Cortan el jardín en cuatro partes. Este jardín solo tiene el canal de este a oeste. Cava el canal de norte a sur: una línea recta por el medio, desde el puente hasta el muro del norte y hasta el muro del sur.',
        fa: 'باغ ایرانی جوی‌های آب به شکل صلیب دارد. آن‌ها باغ را به چهار بخش تقسیم می‌کنند. این باغ فقط جوی شرق به غرب را دارد. جوی شمال به جنوب را بکن: یک خط راست از وسط، از پل تا دیوار شمال و تا دیوار جنوب.' },
      why: { en: 'Right on the line of the cross!', es: '¡Justo en la línea de la cruz!', fa: 'درست روی خط صلیب!' },
      wrong: { en: 'Off the line. The channel runs straight down the middle, north and south of the little bridge.', es: 'Fuera de la línea. El canal va recto por el medio, al norte y al sur del puentecito.', fa: 'بیرون از خط. جوی راست از وسط می‌رود، شمال و جنوبِ پل کوچک.' },
      wrongBy: [
        { x: 18, y: 2, w: 5, h: 6, t: { en: 'Too far west. The cross is in the middle, so the four parts are the same size. Dig in line with the little bridge.', es: 'Muy al oeste. La cruz está en el medio, para que las cuatro partes sean del mismo tamaño. Cava en línea con el puentecito.', fa: 'زیاد به طرف غرب. صلیب در وسط است تا چهار بخش هم‌اندازه باشند. هم‌خط با پل کوچک بکن.' } },
        { x: 24, y: 2, w: 5, h: 6, t: { en: 'Too far east. The cross is in the middle, so the four parts are the same size. Dig in line with the little bridge.', es: 'Muy al este. La cruz está en el medio, para que las cuatro partes sean del mismo tamaño. Cava en línea con el puentecito.', fa: 'زیاد به طرف شرق. صلیب در وسط است تا چهار بخش هم‌اندازه باشند. هم‌خط با پل کوچک بکن.' } }
      ],
      done: { en: 'Now water cuts the garden into four parts. This kind of garden started in Persia (Iran). The idea spread to India, Spain and Dubai: that is [[cultural diffusion|cultural diffusion]].',
        es: 'Ahora el agua corta el jardín en cuatro partes. Este tipo de jardín nació en Persia (Irán). La idea llegó a la India, a España y a Dubái: eso es [[cultural diffusion|difusión cultural]].',
        fa: 'حالا آب باغ را به چهار بخش تقسیم می‌کند. این نوع باغ در فارس (ایران) شروع شد. این فکر به هند، اسپانیا و دبی رسید: این [[cultural diffusion|پخش فرهنگی]] است.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [7, 15], at: [11, 18], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, then 4 steps east. Something old is hidden in the sand.', es: 'Desde esta nota, camina 3 pasos al sur y luego 4 pasos al este. Algo antiguo está escondido en la arena.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۴ قدم به شرق. چیزی کهنه در ریگ پنهان است.' },
      text: { en: 'An old coin! Until 1966, Dubai paid with the Gulf rupee, money that came from India.', es: '¡Una moneda antigua! Hasta 1966, en Dubái se pagaba con la rupia del Golfo, un dinero que venía de la India.', fa: 'یک سکهٔ کهنه! تا سال ۱۹۶۶ مردم دبی با روپیهٔ خلیج پول می‌دادند، پولی که از هند می‌آمد.' } },
    { clueAt: [14, 7], at: [8, 8], decor: 'vase',
      clue: { en: 'In dry Kashan, a qanat fills the courtyard well. Stand on the flower square just east of it.', es: 'En la seca Kashán, un qanat llena el pozo del patio. Párate en el cuadro de flores justo al este.', fa: 'در کاشان خشک، کاریز چاه حویلی را پر می‌کند. روی خانهٔ گل‌دار درست طرف شرق آن بایست.' },
      text: { en: 'East is to the right. A clay water vase! Some qanats are more than 2,000 years old.', es: 'El este está a la derecha. ¡Un jarrón de barro para el agua! Algunos qanats tienen más de 2,000 años.', fa: 'شرق طرف راست است. یک کوزهٔ گِلی آب! بعضی کاریزها بیش از ۲۰۰۰ سال عمر دارند.' } }
  ],
  // only the Water Gourd (Episode 4.3) opens the hot desert corner past Dubai
  secret: { tool: 'gourd', at: [30, 20],
    text: { en: 'The Water Gourd kept you cool on the hot sand! Almost all of Dubai\'s drinking water comes from the sea. Big plants take the salt out.',
      es: '¡La calabaza de agua te mantuvo fresco en la arena caliente! Casi toda el agua potable de Dubái viene del mar. Grandes plantas le quitan la sal.',
      fa: 'کدوی آب تو را روی ریگ داغ تازه نگه داشت! تقریباً همهٔ آب نوشیدنی دبی از بحر می‌آید. فابریکه‌های بزرگ نمک آن را می‌گیرند.' } },

  words: {
    culture: { en: 'the way of life a group of people shares: food, language, clothes, buildings, beliefs and games', es: 'la forma de vida que comparte un grupo de personas: comida, idioma, ropa, edificios, creencias y juegos', fa: 'شیوهٔ زندگی که یک گروه مردم با هم دارند: غذا، زبان، لباس، ساختمان، باورها و بازی‌ها' },
    'culture trait': { en: 'one piece of a culture, like a food, a word, a game or a way of building', es: 'una parte de una cultura, como una comida, una palabra, un juego o una forma de construir', fa: 'یک جزء فرهنگ، مثل یک غذا، یک کلمه، یک بازی یا یک شیوهٔ ساختمان‌سازی' },
    'cultural diffusion': { en: 'the spread of a culture trait from one group of people to another', es: 'la propagación de un rasgo cultural de un grupo de personas a otro', fa: 'پخش شدن یک ویژگی فرهنگی از یک گروه مردم به گروه دیگر' },
    'silk road': { en: 'old trade routes that linked China and Europe across deserts and mountains', es: 'antiguas rutas de comercio que unían China y Europa a través de desiertos y montañas', fa: 'راه‌های کهنهٔ تجارتی که چین را از راه بیابان‌ها و کوه‌ها به اروپا وصل می‌کرد' },
    'trade route': { en: 'a path that traders use again and again to carry goods', es: 'un camino que los comerciantes usan una y otra vez para llevar mercancías', fa: 'راهی که تاجران بارها برای بردن کالا از آن استفاده می‌کنند' },
    qanat: { en: 'a long tunnel under the ground that carries water from the mountains to dry land (in Afghanistan: karez)', es: 'un túnel largo bajo la tierra que lleva agua de las montañas a la tierra seca (en Afganistán: karez)', fa: 'تونل درازی زیر زمین که آب را از کوه‌ها به زمین خشک می‌برد (در ایران: قنات)' },
    windcatcher: { en: 'a tall tower on a roof that catches the wind and sends cool air down into the house', es: 'una torre alta en el techo que atrapa el viento y manda aire fresco hacia dentro de la casa', fa: 'برج بلندی روی بام که باد را می‌گیرد و هوای سرد را به داخل خانه می‌فرستد' },
    'cultural landscape': { en: 'everything people have built on the land: buildings, signs, shops, streets and houses of worship', es: 'todo lo que la gente ha construido sobre la tierra: edificios, letreros, tiendas, calles y lugares de culto', fa: 'هر چیزی که مردم روی زمین ساخته‌اند: ساختمان‌ها، تابلوها، دکان‌ها، سرک‌ها و عبادتگاه‌ها' },
    institution: { en: 'an organized part of a culture, like a school, a court or a place of worship', es: 'una parte organizada de una cultura, como una escuela, un tribunal o un lugar de culto', fa: 'یک بخش منظم فرهنگ، مثل مکتب، محکمه یا عبادتگاه' },
    'cultural identity': { en: 'your feeling of belonging to a cultural group; you can have more than one', es: 'tu sentido de pertenecer a un grupo cultural; puedes tener más de uno', fa: 'احساس تعلق تو به یک گروه فرهنگی؛ می‌توانی بیش از یکی داشته باشی' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Reza', es: 'Reza', fa: 'رضا' },
      role: { en: 'Tea seller in the bazaar', es: 'Vendedor de té en el bazar', fa: 'چای‌فروش در بازار' },
      look: { skin: 1, hair: '#2a1d14', shirt: '#7a4a2a', pants: '#3a3a44' },
      lines: [
        { en: 'Salaam! Welcome to Kashan\'s bazaar, in Iran. Carpets, spices, tea: all of it is [[culture|culture]].',
          es: '¡Salam! Bienvenido al bazar de Kashán, en Irán. Alfombras, especias, té: todo eso es [[culture|cultura]].',
          fa: 'سلام! به بازار کاشان در ایران خوش آمدی. قالین، ادویه، چای: همهٔ این‌ها [[culture|فرهنگ]] است.' },
        { en: 'Each piece of a culture, like a food, word or game, is a [[culture trait|culture trait]].',
          es: 'Cada parte de una cultura, como una comida, una palabra o un juego, es un [[culture trait|rasgo cultural]].',
          fa: 'هر جزء فرهنگ، مثل یک غذا، کلمه یا بازی، یک [[culture trait|ویژگی فرهنگی]] است.' },
        { en: 'When traits spread between groups, that is [[cultural diffusion|cultural diffusion]]. It needs only trade or travel.',
          es: 'Cuando los rasgos pasan entre grupos, eso es [[cultural diffusion|difusión cultural]]. Solo hace falta comerciar o viajar.',
          fa: 'وقتی ویژگی‌ها میان گروه‌ها پخش می‌شوند، این [[cultural diffusion|پخش فرهنگی]] است. فقط تجارت یا سفر لازم است.' },
        { en: 'Tea traveled the [[silk road|Silk Road]] from China. Chess went from India to Persia, then Europe.',
          es: 'El té viajó desde China por la [[silk road|Ruta de la Seda]]. El ajedrez fue de la India a Persia y luego a Europa.',
          fa: 'چای از [[silk road|راه ابریشم]] از چین آمد. شطرنج از هند به فارس و بعد به اروپا رفت.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is cultural diffusion?', es: '¿Qué es la difusión cultural?', fa: 'پخش فرهنگی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A trait spreading to another group', es: 'Un rasgo que pasa a otro grupo', fa: 'رسیدن یک ویژگی به گروه دیگر' },
            why: { en: 'Yes. Tea and chess spread when people met and traded.', es: 'Sí. El té y el ajedrez se propagaron cuando la gente se encontró y comerció.', fa: 'بلی. چای و شطرنج وقتی پخش شدند که مردم همدیگر را دیدند و تجارت کردند.' } },
          { t: { en: 'A group keeping its culture exactly the same forever', es: 'Un grupo que mantiene su cultura igual para siempre', fa: 'گروهی که فرهنگ خود را برای همیشه بدون تغییر نگه می‌دارد' },
            why: { en: 'Diffusion is about change and spreading, not staying the same.', es: 'La difusión trata de cambiar y propagarse, no de quedarse igual.', fa: 'پخش فرهنگی دربارهٔ تغییر و پخش شدن است، نه یکسان ماندن.' } },
          { t: { en: 'A law that stops new foods from coming in', es: 'Una ley que impide la llegada de comidas nuevas', fa: 'قانونی که نمی‌گذارد غذاهای تازه بیایند' },
            why: { en: 'Diffusion needs no law or permission. It only needs people to meet.', es: 'La difusión no necesita leyes ni permiso. Solo necesita que la gente se encuentre.', fa: 'پخش فرهنگی به قانون یا اجازه نیاز ندارد. فقط لازم است مردم همدیگر را ببینند.' } }
        ]
      }
    },
    {
      x: 24, y: 6,
      name: { en: 'Shirin', es: 'Shirin', fa: 'شیرین' },
      role: { en: 'Gardener of the Persian garden', es: 'Jardinera del jardín persa', fa: 'باغبان باغ ایرانی' },
      look: { skin: 2, hair: '#1e1612', shirt: '#2f8a5a', pants: '#35304a', robe: true },
      lines: [
        { en: 'This Persian garden needs one more water channel. And Kashan sits beside a dry desert!',
          es: 'Este jardín persa necesita un canal de agua más. ¡Y Kashán está junto a un desierto seco!',
          fa: 'این باغ ایرانی یک جوی آب دیگر لازم دارد. و کاشان کنار یک بیابان خشک است!' },
        { en: 'So people dug a [[qanat|qanat]]: a long tunnel underground that brings mountain water.',
          es: 'Por eso la gente cavó un [[qanat|qanat]]: un túnel largo bajo la tierra que trae agua de las montañas.',
          fa: 'پس مردم [[qanat|کاریز]] کندند: تونل درازی زیر زمین که آب کوه‌ها را می‌آورد.' },
        { en: 'Qanats are very old. The idea spread to dry lands like Afghanistan, where they\'re karez.',
          es: 'Los qanats son muy antiguos. La idea pasó a tierras secas como Afganistán, donde se llaman karez.',
          fa: 'کاریزها خیلی کهنه هستند. این فکر به سرزمین‌های خشک مثل افغانستان پخش شد. در ایران قنات می‌گویند و در افغانستان کاریز!' },
        { en: 'Even "paradise" comes from an old Persian word for a walled garden.',
          es: 'Hasta "paraíso" viene de una palabra persa antigua para un jardín con muros.',
          fa: 'حتی کلمهٔ انگلیسی «پارادایس» (بهشت) از یک کلمهٔ کهنهٔ فارسی برای باغ دیواردار آمده است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did people in dry parts of Iran dig qanats?', es: '¿Por qué la gente de las partes secas de Irán cavó qanats?', fa: 'چرا مردم در بخش‌های خشک ایران کاریز کندند؟' },
        choices: [
          { ok: true, t: { en: 'To bring mountain water to dry towns', es: 'Para traer agua de montaña a pueblos secos', fa: 'تا آب کوه را به شهرهای خشک بیاورند' },
            why: { en: 'Right. People changed the land so they could live in a dry place.', es: 'Correcto. La gente cambió la tierra para poder vivir en un lugar seco.', fa: 'درست است. مردم زمین را تغییر دادند تا بتوانند در یک جای خشک زندگی کنند.' } },
          { t: { en: 'To hide from the hot desert wind and sun', es: 'Para esconderse del viento y el sol del desierto', fa: 'تا از باد و آفتاب گرم بیابان پنهان شوند' },
            why: { en: 'A qanat carries water, not people.', es: 'Un qanat lleva agua, no personas.', fa: 'کاریز آب را می‌برد، نه مردم را.' } },
          { t: { en: 'To make shady roads for camel trains', es: 'Para hacer caminos con sombra para los camellos', fa: 'تا برای کاروان شترها راه سایه‌دار بسازند' },
            why: { en: 'The tunnel is under the ground and full of water. It is not a road.', es: 'El túnel está bajo la tierra y lleno de agua. No es un camino.', fa: 'تونل زیر زمین و پر از آب است. سرک نیست.' } }
        ]
      }
    },
    {
      x: 22, y: 15,
      name: { en: 'Hessa', es: 'Hessa', fa: 'حصه' },
      role: { en: 'City guide in Dubai', es: 'Guía de la ciudad en Dubái', fa: 'رهنمای شهر در دبی' },
      look: { skin: 3, hair: '#120d0a', shirt: '#2a5fae', pants: '#1f2a44', robe: true },
      lines: [
        { en: 'Welcome to Dubai, UAE! Towers, shops, signs and houses of worship are its [[cultural landscape|cultural landscape]].',
          es: '¡Bienvenido a Dubái, Emiratos Árabes Unidos! Torres, tiendas, letreros y lugares de culto son su [[cultural landscape|paisaje cultural]].',
          fa: 'به دبی، امارات، خوش آمدی! برج‌ها، دکان‌ها، تابلوها و عبادتگاه‌ها [[cultural landscape|منظرهٔ فرهنگی]] آن است.' },
        { en: 'Signs use Arabic and English. Most people here came from India, Pakistan or the Philippines.',
          es: 'Los letreros usan árabe e inglés. La mayoría de la gente aquí vino de la India, Pakistán o Filipinas.',
          fa: 'تابلوها عربی و انگلیسی هستند. بیشتر مردم این‌جا از هند، پاکستان یا فیلیپین آمده‌اند.' },
        { en: 'You see their languages and foods too. Read a street like a page!',
          es: 'También ves sus idiomas y sus comidas. ¡Lee una calle como una página!',
          fa: 'زبان‌ها و غذاهای آن‌ها را هم می‌بینی. یک سرک را مثل یک صفحه بخوان!' },
        { en: 'Iranian traders built tall [[windcatcher|windcatchers]] here over 100 years ago: cultural diffusion you can touch!',
          es: 'Comerciantes de Irán construyeron aquí altas [[windcatcher|torres de viento]] hace más de 100 años: ¡difusión cultural que puedes tocar!',
          fa: 'تاجران ایرانی بیش از ۱۰۰ سال پیش این‌جا [[windcatcher|بادگیر]] بلند ساختند: پخش فرهنگی که می‌توانی لمسش کنی!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The shop signs on one street are in Arabic, English, Urdu and Tagalog. What does that tell you?', es: 'Los letreros de una calle están en árabe, inglés, urdu y tagalo. ¿Qué te dice eso?', fa: 'تابلوهای دکان‌ها در یک سرک به عربی، انگلیسی، اردو و تاگالوگ هستند. این به تو چه می‌گوید؟' },
        choices: [
          { ok: true, t: { en: 'People from many cultures use that street', es: 'Gente de muchas culturas usa esa calle', fa: 'مردم از فرهنگ‌های زیاد از آن سرک استفاده می‌کنند' },
            why: { en: 'Yes. The languages on signs show who uses the street.', es: 'Sí. Los idiomas de los letreros muestran quién usa la calle.', fa: 'بلی. زبان تابلوها نشان می‌دهد چه کسانی از آن سرک استفاده می‌کنند.' } },
          { t: { en: 'The whole street was built in a single day', es: 'Toda la calle se construyó en un solo día', fa: 'تمام آن سرک در یک روز ساخته شد' },
            why: { en: 'Signs show who shops there, not how fast it was built.', es: 'Los letreros muestran quién compra ahí, no qué tan rápido se construyó.', fa: 'تابلوها نشان می‌دهند چه کسی آن‌جا خرید می‌کند، نه این‌که چقدر زود ساخته شد.' } },
          { t: { en: 'Nobody lives or works near that street', es: 'Nadie vive ni trabaja cerca de esa calle', fa: 'هیچ کس نزدیک آن سرک زندگی یا کار نمی‌کند' },
            why: { en: 'Shops put up signs for the people who come there.', es: 'Las tiendas ponen letreros para la gente que llega ahí.', fa: 'دکان‌ها برای مردمی که آن‌جا می‌آیند تابلو می‌گذارند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 12, text: { en: 'DHOW HARBOR · Wooden dhows have carried spices, cloth and rice between Iran and the UAE for centuries.',
                            es: 'PUERTO DE DHOWS · Los dhows de madera llevan especias, tela y arroz entre Irán y los Emiratos desde hace siglos.',
                            fa: 'بندر جهازهای چوبی · کشتی‌های چوبی «داو» صدها سال است که ادویه، تکه و برنج را میان ایران و امارات می‌برند.' } },
    { x: 29, y: 18, text: { en: 'FOOD STREET · Pizza from Italy · tacos from Mexico · biryani from South Asia · sushi from Japan · tea from China.',
                            es: 'CALLE DE COMIDA · Pizza de Italia · tacos de México · biryani del sur de Asia · sushi de Japón · té de China.',
                            fa: 'سرک غذا · پیتزا از ایتالیا · تاکو از مکزیک · بریانی از جنوب آسیا · سوشی از جاپان · چای از چین.' } }
  ],

  /* the quest: Priya the sweet maker in Dubai (gold !) -> Babak the rose picker in the Persian garden -> trade for rosewater in the Kashan bazaar -> back to Priya */
  quest: {
    stat: 'mov',
    title: { en: 'Rosewater from Kashan', es: 'Agua de rosas de Kashán', fa: 'گلاب کاشان' },
    giver: {
      x: 8, y: 19,
      name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      role: { en: 'Sweet maker in old Dubai', es: 'Pastelera en el Dubái antiguo', fa: 'شیرینی‌پز در دبی کهنه' },
      look: { skin: 3, hair: '#140e0a', shirt: '#e0457b', pants: '#4a2a5a', style: 'long' },
      lines: [
        { en: 'Hello! My family came to Dubai from India. I make sweets called gulab jamun.',
          es: '¡Hola! Mi familia llegó a Dubái desde la India. Hago unos dulces llamados gulab jamun.',
          fa: 'سلام! خانوادهٔ من از هند به دبی آمد. من شیرینی‌ای به نام گلاب جامن می‌پزم.' },
        { en: 'But the Grump\'s wall stopped the boats, and I have no rosewater left!',
          es: '¡Pero el muro del Gruñón detuvo los barcos y ya no tengo agua de rosas!',
          fa: 'اما دیوار غرغرو کشتی‌ها را بند کرد و دیگر گلاب ندارم!' },
        { en: 'The best rosewater comes from Kashan, across the water in Iran.',
          es: 'La mejor agua de rosas viene de Kashán, al otro lado del agua, en Irán.',
          fa: 'بهترین گلاب از کاشان می‌آید، آن طرف آب در ایران.' },
        { en: 'Take my basket of goods from the harbor. Babak, in the Persian garden, can help.',
          es: 'Lleva mi canasta con productos del puerto. Babak, en el jardín persa, te puede ayudar.',
          fa: 'سبد کالاهای مرا از بندر ببر. بابک، در باغ ایرانی، می‌تواند کمکت کند.' }
      ],
      wait: { en: 'Cross the water to the north. The Persian garden is north-east, behind a wall.',
              es: 'Cruza el agua hacia el norte. El jardín persa está al noreste, detrás de un muro.',
              fa: 'از آب به طرف شمال بگذر. باغ ایرانی در شمال شرق است، پشت یک دیوار.' },
      thanks: { en: 'Thanks! "Gulab" is Persian: "gol" (rose) + "ab" (water). It came by [[trade route|trade route]].',
                es: '¡Gracias! "Gulab" es persa: "gol" (rosa) + "ab" (agua). Llegó por una [[trade route|ruta comercial]].',
                fa: 'تشکر! «گلاب» فارسی است: «گل» + «آب». این کلمه از یک [[trade route|راه تجارتی]] به هند رسید.' }
    },
    contact: {
      x: 21, y: 7,
      name: { en: 'Babak', es: 'Babak', fa: 'بابک' },
      role: { en: 'Rose picker in the Persian garden', es: 'Recolector de rosas del jardín persa', fa: 'گل‌چین در باغ ایرانی' },
      look: { skin: 1, hair: '#3a2a1e', shirt: '#c94a5a', pants: '#3a4a3a', hat: '#d8c9a0' },
      lines: [
        { en: 'Every spring we pick pink roses and boil the petals to make rosewater.',
          es: 'Cada primavera recogemos rosas rosadas y hervimos los pétalos para hacer agua de rosas.',
          fa: 'هر بهار ما گل گلابی می‌چینیم و برگ‌های گل را می‌جوشانیم تا گلاب بسازیم.' },
        { en: 'People in many countries use it in sweets.',
          es: 'Gente de muchos países la usa en dulces.',
          fa: 'مردم در کشورهای زیاد از آن در شیرینی استفاده می‌کنند.' },
        { en: 'Hamid sells rosewater at the bazaar\'s east end. He trades only for things Kashan lacks.',
          es: 'Hamid vende agua de rosas al este del bazar. Solo cambia por cosas que Kashán no tiene.',
          fa: 'حمید گلاب را در آخر شرقی بازار می‌فروشد. او فقط چیزهایی را می‌گیرد که کاشان ندارد.' },
        { en: 'Remember: Kashan is far from the sea. Find Hamid at the bazaar\'s east end.',
          es: 'Recuerda: Kashán está lejos del mar. Busca a Hamid al este del bazar.',
          fa: 'یادت باشد: کاشان از بحر دور است. حمید را در آخر شرقی بازار پیدا کن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 15, y: 6,
        name: { en: 'Hamid', es: 'Hamid', fa: 'حمید' },
        role: { en: 'Rosewater seller', es: 'Vendedor de agua de rosas', fa: 'گلاب‌فروش' },
        look: { skin: 2, hair: '#9a948a', shirt: '#4a6a8a', pants: '#2a2a30', robe: true },
        lines: [
          { en: 'Rosewater, the best in Iran! A fair trade gives each side something it lacks.',
            es: '¡Agua de rosas, la mejor de Irán! Un cambio justo da a cada lado algo que le falta.',
            fa: 'گلاب، بهترین گلاب ایران! معاملهٔ عادلانه به هر طرف چیزی می‌دهد که ندارد.' }
        ]
      },
      q: { en: 'What will you give Hamid for a bottle of rosewater?', es: '¿Qué le das a Hamid por una botella de agua de rosas?', fa: 'برای یک بوتل گلاب به حمید چه می‌دهی؟' },
      choices: [
        { ok: true, at: [4, 11], icon: '🐟', t: { en: 'Pearls and dried fish from the Gulf', es: 'Perlas y pescado seco del golfo', fa: 'مروارید و ماهی خشک از خلیج' },
          why: { en: 'Yes! Kashan is far from the sea, so sea goods are rare here. Dubai has plenty of them. Here is your rosewater.', es: '¡Sí! Kashán está lejos del mar, así que aquí casi no hay productos del mar. Dubái tiene muchos. Aquí tienes tu agua de rosas.', fa: 'بلی! کاشان از بحر دور است، پس چیزهای بحری این‌جا کم است. دبی از آن‌ها زیاد دارد. بگیر، این گلاب تو.' } },
        { at: [16, 8], icon: '🧶', t: { en: 'A handwoven carpet', es: 'Una alfombra tejida a mano', fa: 'یک قالین دست‌باف' },
          why: { en: 'This carpet was made right here! Kashan is famous for its own carpets. The bazaar is full of them.', es: '¡Esta alfombra se hizo aquí mismo! Kashán es famosa por sus propias alfombras. El bazar está lleno de ellas.', fa: 'این قالین همین‌جا بافته شده! کاشان به خاطر قالین‌های خودش مشهور است. بازار پر از قالین است.' } },
        { at: [3, 7], icon: '🪨', t: { en: 'A bag of desert sand', es: 'Una bolsa de arena del desierto', fa: 'یک خلته ریگ بیابان' },
          why: { en: 'Kashan sits next to a desert. There is sand everywhere here!', es: 'Kashán está junto a un desierto. ¡Aquí hay arena por todas partes!', fa: 'کاشان کنار یک بیابان است. این‌جا همه جا ریگ است!' } }
      ],
      item: { icon: '🌹', name: { en: 'Bottle of Kashan rosewater', es: 'Botella de agua de rosas de Kashán', fa: 'بوتل گلاب کاشان' } }
    }
  },

  scraps: [[15, 1], [20, 2], [3, 11]],
  smudges: [[7, 3], [20, 20], [22, 5]],

  challenge: {
    at: [13, 18],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // Persian words go to the Kashan bazaar lane (north, Iran); Arabic words go to the Dubai market (south, UAE)
    zones: [{ bin: 'fa', x: 5, y: 3, w: 6, h: 1 }, { bin: 'ar', x: 10, y: 14, w: 5, h: 1 }],
    stat: 'reg',
    title: { en: 'Words that traveled', es: 'Palabras que viajaron', fa: 'کلمه‌هایی که سفر کردند' },
    intro: { en: 'The Grump scrambled the word map! Every English word on these cards traveled from far away. Sort each word. Did it come into English from Arabic, or from Persian (Farsi and Dari)?',
      es: '¡El Gruñón revolvió el mapa de palabras! Cada palabra inglesa de estas tarjetas viajó desde lejos. Ordena cada palabra. ¿Llegó al inglés desde el árabe o desde el persa (farsi y dari)?',
      fa: 'غرغرو نقشهٔ کلمه‌ها را به هم زد! هر کلمهٔ انگلیسی روی این کارت‌ها از جای دور سفر کرده است. هر کلمه را جدا کن. آیا از عربی به انگلیسی آمده یا از فارسی (فارسی ایران و دری)؟' },
    bins: [
      { id: 'ar', icon: '📘', label: { en: 'From Arabic', es: 'Del árabe', fa: 'از عربی' }, sub: { en: 'spoken in the UAE and many other countries', es: 'se habla en los Emiratos y muchos otros países', fa: 'در امارات و بسیاری کشورهای دیگر گپ زده می‌شود' } },
      { id: 'fa', icon: '📗', label: { en: 'From Persian', es: 'Del persa', fa: 'از فارسی' }, sub: { en: 'spoken in Iran, Afghanistan (Dari) and Tajikistan', es: 'se habla en Irán, Afganistán (dari) y Tayikistán', fa: 'در ایران، افغانستان (دری) و تاجیکستان گپ زده می‌شود' } }
    ],
    items: [
      { bin: 'ar', t: { en: 'algebra', es: 'algebra (álgebra)', fa: 'algebra (الجبر)' }, why: { en: '"Algebra" comes from the Arabic "al-jabr". It was in the name of a math book written in Baghdad more than 1,000 years ago.', es: '"Algebra" viene del árabe "al-jabr". Estaba en el nombre de un libro de matemáticas escrito en Bagdad hace más de 1,000 años.', fa: '«الجبرا» از کلمهٔ عربی «الجبر» آمده است. این کلمه در نام یک کتاب ریاضی بود که بیش از ۱۰۰۰ سال پیش در بغداد نوشته شد.' } },
      { bin: 'ar', t: { en: 'coffee', es: 'coffee (café)', fa: 'coffee (قهوه)' }, why: { en: '"Coffee" comes from the Arabic "qahwa". Traders carried the drink and its name from Yemen to Turkey and then to Europe.', es: '"Coffee" viene del árabe "qahwa". Los comerciantes llevaron la bebida y su nombre de Yemen a Turquía y luego a Europa.', fa: '«کافی» از کلمهٔ عربی «قهوه» آمده است. تاجران این نوشیدنی و نامش را از یمن به ترکیه و بعد به اروپا بردند.' } },
      { bin: 'ar', t: { en: 'cotton', es: 'cotton (algodón)', fa: 'cotton (پنبه)' }, why: { en: '"Cotton" comes from the Arabic "qutn". Traders sold cotton cloth around the Mediterranean, and the word went with it.', es: '"Cotton" viene del árabe "qutn". Los comerciantes vendían tela de algodón alrededor del Mediterráneo y la palabra viajó con ella.', fa: '«کاتن» از کلمهٔ عربی «قطن» آمده است. تاجران تکهٔ پنبه‌ای را دور بحیرهٔ مدیترانه فروختند و کلمه هم با آن رفت.' } },
      { bin: 'ar', t: { en: 'giraffe', es: 'giraffe (jirafa)', fa: 'giraffe (زرافه)' }, why: { en: '"Giraffe" comes from the Arabic "zarafa". The name traveled through Italy into English.', es: '"Giraffe" viene del árabe "zarafa". El nombre pasó por Italia y llegó al inglés.', fa: '«جیراف» از کلمهٔ عربی «زرافه» آمده است. این نام از راه ایتالیا به انگلیسی رسید.' } },
      { bin: 'fa', t: { en: 'bazaar', es: 'bazaar (bazar)', fa: 'bazaar (بازار)' }, why: { en: '"Bazaar" comes from the Persian "bazar", a market. You still say bazar in Dari and Farsi today.', es: '"Bazaar" viene del persa "bazar", un mercado. Hoy todavía se dice bazar en dari y en farsi.', fa: '«بازار» از کلمهٔ فارسی «بازار» آمده است. امروز هم در دری و فارسی «بازار» می‌گوییم.' } },
      { bin: 'fa', t: { en: 'caravan', es: 'caravan (caravana)', fa: 'caravan (کاروان)' }, why: { en: '"Caravan" comes from the Persian "karvan", a group of traders who travel together, like on the Silk Road.', es: '"Caravan" viene del persa "karvan", un grupo de comerciantes que viajan juntos, como en la Ruta de la Seda.', fa: '«کاراوان» از کلمهٔ فارسی «کاروان» آمده است: گروهی از تاجران که با هم سفر می‌کنند، مثل راه ابریشم.' } },
      { bin: 'fa', t: { en: 'pajamas', es: 'pajamas (pijama)', fa: 'pajamas (پای‌جامه)' }, why: { en: '"Pajamas" comes from the Persian "pay" (leg) and "jama" (clothing). The word traveled through India into English.', es: '"Pajamas" viene del persa "pay" (pierna) y "jama" (ropa). La palabra pasó por la India y llegó al inglés.', fa: '«پاجامه» از «پای» و «جامه» در فارسی آمده است. این کلمه از راه هند به انگلیسی رسید.' } },
      { bin: 'fa', t: { en: 'paradise', es: 'paradise (paraíso)', fa: 'paradise (پردیس)' }, why: { en: '"Paradise" comes from an old Persian word for a walled garden. It traveled through Greek into English.', es: '"Paradise" viene de una palabra persa antigua para un jardín con muros. Pasó por el griego y llegó al inglés.', fa: '«پارادایس» از یک کلمهٔ کهنهٔ فارسی برای باغ دیواردار آمده است (پردیس). از راه یونانی به انگلیسی رسید.' } }
    ],
    success: { en: 'The word map is clear again. Words travel with people, just like food and games!', es: '¡El mapa de palabras vuelve a estar claro! Las palabras viajan con la gente, igual que la comida y los juegos.', fa: 'نقشهٔ کلمه‌ها دوباره روشن شد. کلمه‌ها مثل غذا و بازی همراه مردم سفر می‌کنند!' }
  },

  boss: {
    at: [24, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Wall Grump', es: 'El Gruñón Muro', fa: 'غرغروی دیوار' },
    appear: { en: 'The Wall Grump is hiding between the glass towers of Dubai!', es: '¡El Gruñón Muro se esconde entre las torres de vidrio de Dubái!', fa: 'غرغروی دیوار میان برج‌های شیشه‌ای دبی پنهان است!' },
    taunt: { en: 'Hmph! Ideas should stay home. I will stop every word and every recipe at the wall!', es: '¡Bah! Las ideas deben quedarse en casa. ¡Detendré cada palabra y cada receta en el muro!', fa: 'هه! فکرها باید در خانه بمانند. هر کلمه و هر دستور پخت را پشت دیوار نگه می‌دارم!' },
    win: { en: 'The wall crumbles. Ideas fly free, and atlas page 5.2 lands in your hands!', es: 'El muro se derrumba. Las ideas vuelan libres, ¡y la página 5.2 del atlas cae en tus manos!', fa: 'دیوار فرو می‌ریزد. فکرها آزاد پرواز می‌کنند و صفحهٔ ۵.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is cultural diffusion?', es: '¿Qué es la difusión cultural?', fa: 'پخش فرهنگی چیست؟' },
        choices: [{ en: 'A trait spreading to another group', es: 'Un rasgo que pasa a otro grupo', fa: 'رسیدن یک ویژگی به گروه دیگر' }, { en: 'Two cultures fighting over land', es: 'Dos culturas peleando por tierra', fa: 'جنگ دو فرهنگ بر سر زمین' }, { en: 'A culture that never changes', es: 'Una cultura que nunca cambia', fa: 'فرهنگی که هرگز تغییر نمی‌کند' }, { en: 'People moving from a village to a city', es: 'Gente que se muda de un pueblo a una ciudad', fa: 'رفتن مردم از قریه به شهر' }], answer: 0,
        why: { en: 'Cultural diffusion is when a food, word, game or idea spreads to a new group of people.', es: 'La difusión cultural es cuando una comida, palabra, juego o idea llega a un nuevo grupo de personas.', fa: 'پخش فرهنگی یعنی یک غذا، کلمه، بازی یا فکر به یک گروه تازهٔ مردم برسد.' } },
      { q: { en: 'Chess began in which place?', es: '¿Dónde empezó el ajedrez?', fa: 'شطرنج در کجا شروع شد؟' },
        choices: [{ en: 'India', es: 'La India', fa: 'هند' }, { en: 'Brazil', es: 'Brasil', fa: 'برازیل' }, { en: 'England', es: 'Inglaterra', fa: 'انگلستان' }, { en: 'Japan', es: 'Japón', fa: 'جاپان' }], answer: 0,
        why: { en: 'Chess began in India. Traders carried it to Persia, and then to Europe.', es: 'El ajedrez empezó en la India. Los comerciantes lo llevaron a Persia y luego a Europa.', fa: 'شطرنج در هند شروع شد. تاجران آن را به فارس و بعد به اروپا بردند.' } },
      { q: { en: 'Where did people first grow and drink coffee?', es: '¿Dónde se cultivó y se bebió café por primera vez?', fa: 'مردم اول در کجا قهوه کشت کردند و نوشیدند؟' },
        choices: [{ en: 'Ethiopia and Yemen', es: 'Etiopía y Yemen', fa: 'ایتوپیا و یمن' }, { en: 'France and Spain', es: 'Francia y España', fa: 'فرانسه و هسپانیه' }, { en: 'Canada and the United States', es: 'Canadá y Estados Unidos', fa: 'کانادا و امریکا' }, { en: 'Australia', es: 'Australia', fa: 'آسترالیا' }], answer: 0,
        why: { en: 'Coffee came from Ethiopia and Yemen. Traders carried it across the world.', es: 'El café vino de Etiopía y Yemen. Los comerciantes lo llevaron por todo el mundo.', fa: 'قهوه از ایتوپیا و یمن آمد. تاجران آن را به سراسر جهان بردند.' } },
      { q: { en: 'The digits 0 to 9 were developed in ___. Arabic-speaking scholars carried them to Europe.', es: 'Los dígitos del 0 al 9 se desarrollaron en ___. Sabios que hablaban árabe los llevaron a Europa.', fa: 'رقم‌های ۰ تا ۹ در ___ ساخته شدند. دانشمندان عربی‌زبان آن‌ها را به اروپا بردند.' },
        choices: [{ en: 'India', es: 'la India', fa: 'هند' }, { en: 'Italy', es: 'Italia', fa: 'ایتالیا' }, { en: 'Mexico', es: 'México', fa: 'مکزیک' }, { en: 'Russia', es: 'Rusia', fa: 'روسیه' }], answer: 0,
        why: { en: 'The digits came from India. Arabic-speaking scholars passed them on to Europe.', es: 'Los dígitos vinieron de la India. Sabios que hablaban árabe los pasaron a Europa.', fa: 'رقم‌ها از هند آمدند. دانشمندان عربی‌زبان آن‌ها را به اروپا رساندند.' } },
      { q: { en: 'What is a cultural landscape?', es: '¿Qué es un paisaje cultural?', fa: 'منظرهٔ فرهنگی چیست؟' },
        choices: [{ en: 'Everything people built on the land', es: 'Todo lo que la gente construyó en la tierra', fa: 'هر چیزی که مردم روی زمین ساخته‌اند' }, { en: 'The rivers, hills and forests that nature made', es: 'Los ríos, cerros y bosques que hizo la naturaleza', fa: 'دریاها، تپه‌ها و جنگل‌هایی که طبیعت ساخته' }, { en: 'The weather of a place', es: 'El clima de un lugar', fa: 'هوای یک جا' }, { en: 'A painting of a forest', es: 'Una pintura de un bosque', fa: 'نقاشی یک جنگل' }], answer: 0,
        why: { en: 'Nature made the hills and rivers. People made the cultural landscape on top.', es: 'La naturaleza hizo los cerros y los ríos. La gente hizo encima el paisaje cultural.', fa: 'طبیعت تپه‌ها و دریاها را ساخت. مردم منظرهٔ فرهنگی را روی آن ساختند.' } },
      { q: { en: 'Which one is an institution?', es: '¿Cuál es una institución?', fa: 'کدام یک نهاد است؟' },
        choices: [{ en: 'A school', es: 'Una escuela', fa: 'مکتب' }, { en: 'A mountain', es: 'Una montaña', fa: 'کوه' }, { en: 'A cup of tea', es: 'Una taza de té', fa: 'یک پیاله چای' }, { en: 'A sunny day', es: 'Un día soleado', fa: 'یک روز آفتابی' }], answer: 0,
        why: { en: 'An [[institution|institution]] is an organized part of a culture, like a school, a court or a place of worship.', es: 'Una [[institution|institución]] es una parte organizada de una cultura, como una escuela, un tribunal o un lugar de culto.', fa: '[[institution|نهاد]] یک بخش منظم فرهنگ است، مثل مکتب، محکمه یا عبادتگاه.' } },
      { q: { en: 'How did phones and the internet change cultural diffusion?', es: '¿Cómo cambiaron los teléfonos e internet la difusión cultural?', fa: 'تیلفون و انترنت پخش فرهنگی را چطور تغییر دادند؟' },
        choices: [{ en: 'A song can travel the world in one day', es: 'Una canción puede dar la vuelta al mundo en un día', fa: 'یک آهنگ در یک روز دور جهان سفر می‌کند' }, { en: 'Ideas now take months to travel by camel', es: 'Ahora las ideas tardan meses en viajar en camello', fa: 'حالا فکرها ماه‌ها با شتر سفر می‌کنند' }, { en: 'Ideas stopped spreading', es: 'Las ideas dejaron de propagarse', fa: 'فکرها دیگر پخش نمی‌شوند' }, { en: 'Only food can spread now', es: 'Ahora solo la comida se puede propagar', fa: 'حالا فقط غذا پخش می‌شود' }], answer: 0,
        why: { en: 'Old diffusion took months by camel or ship. Today an idea can cross the world in a single day.', es: 'Antes la difusión tardaba meses en camello o barco. Hoy una idea puede cruzar el mundo en un solo día.', fa: 'پخش فرهنگی قدیم با شتر یا کشتی ماه‌ها طول می‌کشید. امروز یک فکر در یک روز از جهان می‌گذرد.' } },
      { q: { en: 'An Afghan family in Virginia eats pizza and also celebrates Nowruz. What does this show?', es: 'Una familia afgana en Virginia come pizza y también celebra Nowruz. ¿Qué muestra esto?', fa: 'یک خانوادهٔ افغان در ویرجینیا پیتزا می‌خورد و نوروز را هم جشن می‌گیرد. این چه چیزی را نشان می‌دهد؟' },
        choices: [{ en: 'They add new traits and keep their own', es: 'Suman rasgos nuevos y mantienen los suyos', fa: 'ویژگی تازه می‌گیرند و مال خود را هم نگه می‌دارند' }, { en: 'The family has lost its own Afghan culture', es: 'La familia perdió su propia cultura afgana', fa: 'خانواده فرهنگ افغانی خود را از دست داده است' }, { en: 'Pizza is a traditional Afghan food', es: 'La pizza es una comida afgana tradicional', fa: 'پیتزا یک غذای قدیمی افغانی است' }, { en: 'Nowruz began in Italy', es: 'Nowruz empezó en Italia', fa: 'نوروز در ایتالیا شروع شد' }], answer: 0,
        why: { en: 'Diffusion adds new threads. It does not erase a family\'s [[cultural identity|cultural identity]]. People can carry more than one.', es: 'La difusión suma hilos nuevos. No borra la [[cultural identity|identidad cultural]] de una familia. La gente puede tener más de una.', fa: 'پخش فرهنگی تارهای تازه اضافه می‌کند. [[cultural identity|هویت فرهنگی]] خانواده را پاک نمی‌کند. مردم می‌توانند بیش از یکی داشته باشند.' } }
    ]
  },

  learned: [
    { en: '[[culture|Culture]] is a group\'s way of life. Each piece of it, like a food, a word or a game, is a [[culture trait|culture trait]].', es: 'La [[culture|cultura]] es la forma de vida de un grupo. Cada parte, como una comida, una palabra o un juego, es un [[culture trait|rasgo cultural]].', fa: '[[culture|فرهنگ]] شیوهٔ زندگی یک گروه است. هر جزء آن، مثل یک غذا، یک کلمه یا یک بازی، یک [[culture trait|ویژگی فرهنگی]] است.' },
    { en: '[[cultural diffusion|Cultural diffusion]] spreads traits when people meet, trade and travel: tea, chess, qanats, and words like bazaar and algebra.', es: 'La [[cultural diffusion|difusión cultural]] propaga rasgos cuando la gente se encuentra, comercia y viaja: el té, el ajedrez, los qanats y palabras como bazar y álgebra.', fa: '[[cultural diffusion|پخش فرهنگی]] وقتی مردم همدیگر را می‌بینند، تجارت و سفر می‌کنند ویژگی‌ها را پخش می‌کند: چای، شطرنج، کاریز و کلمه‌هایی مثل بازار و الجبر.' },
    { en: 'You can read the [[cultural landscape|cultural landscape]] of a street. Adding new traits does not erase a culture\'s identity.', es: 'Puedes leer el [[cultural landscape|paisaje cultural]] de una calle. Sumar rasgos nuevos no borra la identidad de una cultura.', fa: 'می‌توانی [[cultural landscape|منظرهٔ فرهنگی]] یک سرک را بخوانی. اضافه کردن ویژگی‌های تازه هویت یک فرهنگ را پاک نمی‌کند.' }
  ],
  reflect: {
    q: { en: 'Think of one food, word, game or song in your life that came from another place. How do you think it traveled to you?', es: 'Piensa en una comida, palabra, juego o canción de tu vida que vino de otro lugar. ¿Cómo crees que viajó hasta ti?', fa: 'به یک غذا، کلمه، بازی یا آهنگ در زندگی خود فکر کن که از جای دیگری آمده است. فکر می‌کنی چطور تا تو سفر کرده است؟' },
    starter: { en: 'One thing in my life that traveled from another place is', es: 'Una cosa en mi vida que viajó desde otro lugar es', fa: 'یک چیز در زندگی من که از جای دیگری سفر کرده است' }
  }
};
