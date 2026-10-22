/* WORLDWALKER · Episode 2.2 · Latin America & the Caribbean (WG.4)
   Elevation zones on one mountainside in Ecuador: the map climbs from the hot coast (bottom)
   through coffee to potatoes and wheat, then high grass and snow (top). A dirt road zig-zags up. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'WG.4',
  title: { en: 'Latin America & the Caribbean', es: 'América Latina y el Caribe', fa: 'امریکای لاتین و کارائیب' },
  place: { en: 'The Coffee Mountain, Ecuador', es: 'La Montaña del Café, Ecuador', fa: 'کوه قهوه، اکوادور' },
  intro: [
    { en: 'The Grump mixed up this mountain in Ecuador! Farmers plant crops at the wrong height.', es: '¡El Gruñón revolvió esta montaña de Ecuador! Los agricultores siembran a la altura equivocada.', fa: 'غرغرو این کوه را در اکوادور به هم زد! دهقانان حاصلات را در ارتفاع غلط می‌کارند.' },
        { en: 'Climb from the coast to the snow. Talk to the banana, coffee and potato farmers.', es: 'Sube de la costa a la nieve. Habla con los agricultores del banano, del café y de la papa.', fa: 'از ساحل تا برف بالا برو. با دهقان‌های کیله، قهوه و کچالو گپ بزن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [-78.5, -0.2],
    start: [
      { en: 'We are in Ecuador. Its name is the Spanish word for equator.',
        es: 'Estamos en Ecuador. Su nombre viene de la línea del ecuador.',
        fa: 'ما در اکوادور هستیم. نامش به زبان هسپانوی یعنی خط استوا.' },
      { en: 'Quito, the capital, sits about 9,350 feet up in the Andes.',
        es: 'Quito, la capital, está a unos 2,850 metros de altura en los Andes.',
        fa: 'کیتو، پایتخت، حدود ۲۸۵۰ متر بالا در کوه‌های اندیز است.' },
      { en: 'The Andes are the longest mountain range on land in the world.',
        es: 'Los Andes son la cordillera más larga sobre tierra en el mundo.',
        fa: 'اندیز درازترین رشته‌کوه روی خشکهٔ جهان است.' }
    ],
    page: { en: 'Near the equator, the volcano Chimborazo still has snow and ice on top.',
      es: 'Cerca del ecuador, el volcán Chimborazo todavía tiene nieve y hielo arriba.',
      fa: 'نزدیک خط استوا، آتشفشان چیمبورازو هنوز سرش برف و یخ دارد.' }
  },

  /* 32 x 22 = 2 x 2 screens. Bottom to top:
     rows 19-20 beach, rows 14-17 tierra caliente (bananas y, sugarcane e),
     rows 9-12 tierra templada (coffee 1 2 3), rows 5-7 tierra fría (potatoes v, wheat w),
     rows 1-4 tierra helada (high grass g, then snow n and snowy peaks A). */
  map: [
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAnnnAAnnnnnnAnAnnnnnnnAAnnnnAAA',
    'AnnnnnnnninnnnGnnnnnnnnnnninnnnA',
    'AnnnAnnnxnnnnnnnnnnnnnnAnnnnnnnA',
    'K"ggg:::::::::::::::::::::::"ggK',
    'Kvvvv.wwwww.QQQ.vvvvv.wwwww:vvvK',
    'Kvvvv.wwwww.hdh.vvvvv.wwwww:vvvK',
    'Kvvvv.wwwww.....vvvvv.wwwww:vvvK',
    'M...::::::::::::::::::::::::K..M',
    'M332:.33T33.3323.3T33.3323.33.3M',
    'M23.:.33333.32T3.3333.RRR.333.3M',
    'M333:.3T333.3333.33T3.hdh.3T3.3M',
    'M323:.33333.3323.3333.....3333.M',
    'K...:::::::::::::::::::::::::..K',
    'pyyyy.eeeee.yyyy.eeeee.yyyyy:..p',
    'pyyyy.eeeee.yyyy.eeeee.yyyyy:yyp',
    'py.yy.eeeee.yyyy.eeeee.yy.yy:yyp',
    'pyyyy.eeeee.y.yy.eeeee.yyyyy:.Jp',
    'p..::::::::::::::::::::::::::..p',
    'ps.sxsssspsssssssssssspssssssssp',
    'pssssssssssssskksssssssssssssssp',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [2, 19],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): terraces in the mild band, where coffee grows */
  build: [
    { id: 'terraces', kind: 'place', board: [11, 12], tile: 't', ok: [[16, 9], [16, 10], [16, 11], [16, 12]], cost: { wood: 1 },
      name: { en: 'Coffee terraces', es: 'Terrazas de café', fa: 'زینه‌های قهوه' },
      ask: { en: 'Coffee likes the mild middle of the mountain, the [[tierra templada|tierra templada]]: not too hot, not too cold. Build terraces (flat steps) beside the coffee fields so the rain does not wash the soil down the slope.',
        es: 'Al café le gusta la parte media y templada de la montaña, la [[tierra templada|tierra templada]]: ni muy caliente ni muy fría. Construye terrazas (escalones planos) junto a los cafetales para que la lluvia no se lleve la tierra.',
        fa: 'قهوه وسط معتدل کوه را دوست دارد، [[tierra templada|تیرا تمپلادا]]: نه خیلی گرم، نه خیلی سرد. کنار کشتزارهای قهوه زینه‌ها (پله‌های هموار) بساز تا باران خاک را از سراشیبی نشوید.' },
      why: { en: 'A terrace in the mild band, right beside the coffee!', es: '¡Una terraza en la franja templada, junto al café!', fa: 'یک زینه در نوار معتدل، درست کنار قهوه!' },
      wrong: { en: 'This is not the mild band. Coffee grows in the middle of the mountain, between the cold potato fields and the hot banana fields. Build the terraces there, beside the coffee.', es: 'Esta no es la franja templada. El café crece en el medio de la montaña, entre las papas frías y los bananos calientes. Construye las terrazas allí, junto al café.', fa: 'این جا نوار معتدل نیست. قهوه در وسط کوه می‌روید، بین کشتزارهای سرد کچالو و کشتزارهای گرم کیله. زینه‌ها را آن جا، کنار قهوه بساز.' },
      done: { en: 'The terraces are built! Farmers in the Andes have farmed on steps like these for hundreds of years.', es: '¡Las terrazas están listas! Los agricultores de los Andes cultivan en escalones así desde hace cientos de años.', fa: 'زینه‌ها ساخته شد! دهقانان اند صدها سال است روی پله‌هایی مثل این‌ها کشت می‌کنند.' } }
  ],
  /* planting teaches the bands: each crop grows only at its height */
  plant: {
    basket: [2, 18],
    ask: { en: 'Each crop grows best at its own height on the mountain.', es: 'Cada cultivo crece mejor a su propia altura en la montaña.', fa: 'هر محصول در ارتفاع خودش روی کوه بهتر می‌روید.' },
    crops: [
      { id: 'potato', icon: '🥔', name: { en: 'potato', es: 'papa', fa: 'کچالو' }, zones: [{ x: 1, y: 4, w: 30, h: 4 }],
        ok: { en: 'Potatoes love the cold land up high. It will grow!', es: '¡A las papas les encanta la tierra fría de arriba! Va a crecer.', fa: 'کچالو زمین سرد بالا را دوست دارد. می‌روید!' },
        no: { en: 'Potatoes need the cold land, high on the mountain.', es: 'Las papas necesitan la tierra fría, alto en la montaña.', fa: 'کچالو زمین سرد، بالای کوه را لازم دارد.' },
        noBy: [{ x: 0, y: 0, w: 32, h: 4, t: { en: 'Too cold up here: this is the frozen land. Potatoes grow a little lower, in the cold land.', es: 'Aquí hace demasiado frío: es la tierra helada. Las papas crecen un poco más abajo, en la tierra fría.', fa: 'این جا خیلی سرد است: زمین یخ‌زده. کچالو کمی پایین‌تر، در زمین سرد می‌روید.' } }] },
      { id: 'coffee', icon: '☕', name: { en: 'coffee', es: 'café', fa: 'قهوه' }, zones: [{ x: 1, y: 8, w: 30, h: 5 }],
        ok: { en: 'Coffee in the mild land, the middle of the mountain. It will grow!', es: 'Café en la tierra templada, el medio de la montaña. ¡Va a crecer!', fa: 'قهوه در زمین معتدل، وسط کوه. می‌روید!' },
        no: { en: 'Coffee needs the mild land in the middle of the mountain.', es: 'El café necesita la tierra templada del medio de la montaña.', fa: 'قهوه زمین معتدل وسط کوه را لازم دارد.' },
        noBy: [{ x: 0, y: 0, w: 32, h: 8, t: { en: 'Too cold up here for coffee. It grows lower down, in the mild land.', es: 'Aquí hace demasiado frío para el café. Crece más abajo, en la tierra templada.', fa: 'این جا برای قهوه خیلی سرد است. پایین‌تر، در زمین معتدل می‌روید.' } },
          { x: 0, y: 13, w: 32, h: 8, t: { en: 'Too hot down here for coffee. It grows higher up, in the mild land.', es: 'Aquí abajo hace demasiado calor para el café. Crece más arriba, en la tierra templada.', fa: 'این پایین برای قهوه خیلی گرم است. بالاتر، در زمین معتدل می‌روید.' } }] },
      { id: 'banana', icon: '🍌', name: { en: 'banana', es: 'banano', fa: 'کیله' }, zones: [{ x: 1, y: 13, w: 30, h: 6 }],
        ok: { en: 'Bananas in the hot land near the sea. It will grow!', es: 'Bananos en la tierra caliente cerca del mar. ¡Va a crecer!', fa: 'کیله در زمین گرم نزدیک بحر. می‌روید!' },
        no: { en: 'Bananas need the hot land, low down near the sea.', es: 'Los bananos necesitan la tierra caliente, abajo cerca del mar.', fa: 'کیله زمین گرم، پایین نزدیک بحر را لازم دارد.' },
        noBy: [{ x: 0, y: 0, w: 32, h: 13, t: { en: 'Too cold up here for bananas. They grow low down, in the hot land.', es: 'Aquí hace demasiado frío para los bananos. Crecen abajo, en la tierra caliente.', fa: 'این جا برای کیله خیلی سرد است. پایین، در زمین گرم می‌روید.' } }] }
    ]
  },
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [16, 14], at: [19, 19], decor: 'shell',
      clue: { en: 'From this note, walk 5 steps south, then 3 steps east. Something is hidden there.', es: 'Desde esta nota, camina 5 pasos al sur y luego 3 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۵ قدم به جنوب برو، بعد ۳ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You reached the coast! Ecuador sits on the equator; its name is Spanish for "equator." A sea shell lies here.', es: '¡Llegaste a la costa! Ecuador está sobre el ecuador; su nombre quiere decir "ecuador" en español. Aquí hay una concha.', fa: 'به ساحل رسیدی! اکوادور روی خط استوا است؛ نامش در هسپانوی یعنی «استوا». اینجا یک صدف است.' } },
    { clueAt: [1, 18], at: [5, 4], decor: 'drum',
      clue: { en: 'The road zig-zags from the coast up to the cold land. Follow it to its very top end.', es: 'El camino sube en zigzag de la costa a la tierra fría. Síguelo hasta su punta de arriba.', fa: 'سرک زیگزاگ از ساحل تا زمین سرد بالا می‌رود. آن را تا سرِ آخرِ بالایی‌اش دنبال کن.' },
      text: { en: 'Top of the road: the [[tierra fria|tierra fría]], potato land. Potatoes came from the Andes. Here is a small festival drum.', es: 'Fin del camino: la [[tierra fria|tierra fría]], tierra de papas. Las papas vienen de los Andes. Aquí hay un tambor de fiesta.', fa: 'آخر سرک: [[tierra fria|تیرا فریا]]، زمین کچالو. کچالو از اندیز آمده. اینجا یک دهل کوچک جشن است.' } }
  ],
  // only the Compass Rose (Episode 1.3) opens the little gate in the snow
  secret: { tool: 'compass', at: [14, 1],
    text: { en: 'The Compass Rose opened the snowy gate! In the chest is a climber\'s note. The tallest mountain in the Andes is Aconcagua in Argentina. It is almost 7,000 meters high, the tallest in all of the Americas.',
      es: '¡La rosa de los vientos abrió la puerta de nieve! En el cofre hay una nota de una escaladora. La montaña más alta de los Andes es el Aconcagua, en Argentina. Mide casi 7.000 metros: es la más alta de toda América.',
      fa: 'قطب‌نما دروازهٔ برفی را باز کرد! در صندوق یادداشت یک کوهنورد است. بلندترین کوه اندیز، آکونکاگوا در ارجنتاین است. بلندی آن نزدیک به ۷۰۰۰ متر است و بلندترین کوه در تمام قارهٔ امریکا است.' } },

  words: {
    altitude: { en: 'how high a place is above sea level', es: 'qué tan alto está un lugar sobre el nivel del mar', fa: 'اینکه یک جا چقدر از سطح بحر بلندتر است' },
    'tierra caliente': { en: 'the "hot land": from sea level up to about 3,000 feet (900 m); bananas and sugarcane grow here', es: 'la tierra caliente: desde el nivel del mar hasta unos 3,000 pies (900 m); aquí crecen el banano y la caña de azúcar', fa: 'تیرا کالینته یا «زمین گرم»: از سطح بحر تا حدود ۳۰۰۰ فوت (۹۰۰ متر)؛ کیله و نیشکر اینجا می‌روید' },
    'tierra templada': { en: 'the "mild land": about 3,000 to 6,000 feet (900–1,800 m); coffee and corn grow here', es: 'la tierra templada: de unos 3,000 a 6,000 pies (900–1,800 m); aquí crecen el café y el maíz', fa: 'تیرا تمپلادا یا «زمین معتدل»: حدود ۳۰۰۰ تا ۶۰۰۰ فوت (۹۰۰ تا ۱۸۰۰ متر)؛ قهوه و جواری اینجا می‌روید' },
    'tierra fria': { en: 'the "cold land": about 6,000 to 12,000 feet (1,800–3,600 m); potatoes and wheat grow here', es: 'la tierra fría: de unos 6,000 a 12,000 pies (1,800–3,600 m); aquí crecen la papa y el trigo', fa: 'تیرا فریا یا «زمین سرد»: حدود ۶۰۰۰ تا ۱۲۰۰۰ فوت (۱۸۰۰ تا ۳۶۰۰ متر)؛ کچالو و گندم اینجا می‌روید' },
    'tierra helada': { en: 'the "frozen land": above about 12,000 feet (3,600 m); only tough grass for llamas and alpacas, then snow and ice', es: 'la tierra helada: más de unos 12,000 pies (3,600 m); solo pasto duro para llamas y alpacas, y luego nieve y hielo', fa: 'تیرا الادا یا «زمین یخ‌زده»: بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر)؛ فقط علف سخت برای لاما و آلپاکا، بعد برف و یخ' },
    'cash crop': { en: 'a crop grown mainly to sell, not to eat at home', es: 'un cultivo que se siembra sobre todo para vender, no para comer en casa', fa: 'حاصلی که بیشتر برای فروش کاشته می‌شود، نه برای خوردن در خانه' },
    'highland climate': { en: 'the cool climate of a place near the equator that stays cool because it is high up', es: 'el clima fresco de un lugar cerca del ecuador que se mantiene fresco porque está alto', fa: 'آب و هوای سرد جایی نزدیک خط استوا که چون بلند است سرد می‌ماند' }
  },

  npcs: [
    {
      x: 13, y: 17,
      name: { en: 'Yesenia', es: 'Yesenia', fa: 'یسنیا' },
      role: { en: 'Banana farm worker', es: 'Trabajadora bananera', fa: 'کارگر فارم کیله' },
      look: { skin: 5, hair: '#120c08', shirt: '#f2c14e', pants: '#2f6fd6' },
      lines: [
        { en: '¡Hola! Welcome to the hot coast of Ecuador. We are near sea level.', es: '¡Hola! Bienvenido a la costa caliente de Ecuador. Estamos cerca del nivel del mar.', fa: 'سلام! به ساحل گرم اکوادور خوش آمدی. ما نزدیک سطح بحر هستیم.' },
        { en: 'This is the [[tierra caliente|tierra caliente]], the hot land. It is hot and wet all year.', es: 'Esta es la [[tierra caliente|tierra caliente]]. Aquí hace calor y llueve todo el año.', fa: 'اینجا [[tierra caliente|تیرا کالینته]] یعنی زمین گرم است. تمام سال گرم و مرطوب است.' },
        { en: 'Bananas and sugarcane love this heat. Ecuador sells the most bananas of any country.', es: 'Al banano y a la caña les encanta este calor. Ecuador vende más bananos que ningún otro país.', fa: 'کیله و نیشکر این گرما را دوست دارند. اکوادور از هر کشور دیگر بیشتر کیله می‌فروشد.' },
        { en: 'Most are shipped far away. A crop grown mainly to sell is a [[cash crop|cash crop]].', es: 'Casi todos se mandan lejos. Un cultivo que se siembra para vender es un [[cash crop|cultivo comercial]].', fa: 'بیشتر آن‌ها به جاهای دور فرستاده می‌شوند. حاصلی که برای فروش است [[cash crop|حاصل نقدی]] نام دارد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do bananas and sugarcane grow down here on the coast?', es: '¿Por qué el banano y la caña de azúcar crecen aquí abajo, en la costa?', fa: 'چرا کیله و نیشکر اینجا پایین در ساحل می‌رویند؟' },
        choices: [
          { ok: true, t: { en: 'The low land is hot, and they need heat', es: 'La tierra baja es caliente, y necesitan calor', fa: 'زمین پایین گرم است و آن‌ها گرما لازم دارند' },
            why: { en: 'Yes! Down low, near sea level, the air stays hot. That is the tierra caliente.', es: '¡Sí! Abajo, cerca del nivel del mar, el aire se mantiene caliente. Esa es la tierra caliente.', fa: 'بله! پایین، نزدیک سطح بحر، هوا گرم می‌ماند. این تیرا کالینته است.' } },
          { t: { en: 'They need snow on the ground to grow well', es: 'Necesitan nieve en el suelo para crecer bien', fa: 'برای خوب روییدن به برف روی زمین ضرورت دارند' },
            why: { en: 'Snow would kill them. They need steady heat.', es: 'La nieve los mataría. Necesitan calor todo el tiempo.', fa: 'برف آن‌ها را از بین می‌برد. آن‌ها به گرمای دایمی ضرورت دارند.' } },
          { t: { en: 'The coast is the only place with soil', es: 'La costa es el único lugar con tierra', fa: 'ساحل تنها جایی است که خاک دارد' },
            why: { en: 'The whole mountain has soil. The difference is how hot or cold each height is.', es: 'Toda la montaña tiene tierra. La diferencia es qué tan caliente o fría es cada altura.', fa: 'تمام کوه خاک دارد. فرق در این است که هر ارتفاع چقدر گرم یا سرد است.' } }
        ]
      }
    },
    {
      x: 24, y: 12,
      name: { en: 'Don Julián', es: 'Don Julián', fa: 'دون خولیان' },
      role: { en: 'Coffee grower', es: 'Cafetero', fa: 'دهقان قهوه' },
      remember: { ep: '2.1', t: { en: 'Hello! Captain Marie from the Great Lakes told me about you. You found Nokomis\'s drifting canoe, and you picked a great spot by the water for a new city!', es: '¡Hola! La capitana Marie, de los Grandes Lagos, me habló de ti. ¡Encontraste la canoa a la deriva de Nokomis y elegiste un gran lugar junto al agua para una ciudad nueva!', fa: 'سلام! کپتان ماری از جهیل‌های بزرگ دربارهٔ تو به من گفت. تو قایق سرگردانِ نوکومیس را پیدا کردی و یک جای خوب کنار آب برای شهر تازه انتخاب کردی!' } },
      look: { skin: 2, hair: '#4a3a2a', shirt: '#ffffff', pants: '#5a4630' },
      lines: [
        { en: '¡Buenos días! My coffee grows in the [[tierra templada|tierra templada]], the mild middle of the mountain.', es: '¡Buenos días! Mi café crece en la [[tierra templada|tierra templada]], el medio templado de la montaña.', fa: 'صبح بخیر! قهوهٔ من در [[tierra templada|تیرا تمپلادا]] می‌روید، یعنی میانهٔ معتدل کوه.' },
        { en: 'Days are warm, nights are cool. Air cools about 3.5°F per 1,000 feet of [[altitude|altitude]].', es: 'Los días son cálidos y las noches frescas. El aire se enfría unos 3.5 °F por cada 1,000 pies de [[altitude|altitud]].', fa: 'روزها گرم و شب‌ها خنک است. هوا برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] حدود ۳.۵ درجهٔ فارنهایت سرد می‌شود.' },
        { en: 'So two towns equally far from the equator can feel nothing alike.', es: 'Por eso dos pueblos igual de lejos del ecuador pueden sentirse muy distintos.', fa: 'پس دو شهرک با یک فاصله از خط استوا می‌توانند هیچ شباهتی نداشته باشند.' },
        { en: 'No frost, no steady heat: coffee likes cool, wet slopes in Colombia, Guatemala and Honduras.', es: 'Ni helada ni calor constante: al café le gustan las laderas frescas y húmedas de Colombia, Guatemala y Honduras.', fa: 'نه یخبندان، نه گرمای دایمی: قهوه شیب‌های خنک و مرطوب کلمبیا، گواتمالا و هندوراس را دوست دارد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why does coffee grow on the mountain slopes instead of on the hot coast?', es: '¿Por qué el café crece en las laderas de la montaña y no en la costa caliente?', fa: 'چرا قهوه روی شیب کوه می‌روید، نه در ساحل گرم؟' },
        choices: [
          { ok: true, t: { en: 'The coast is too hot for coffee plants', es: 'La costa es demasiado caliente para el café', fa: 'ساحل برای بوتهٔ قهوه خیلی گرم است' },
            why: { en: 'Right. Coffee needs air that stays cool and wet, and the slopes give it that.', es: 'Correcto. El café necesita aire fresco y húmedo, y las laderas se lo dan.', fa: 'درست. قهوه به هوای خنک و مرطوب ضرورت دارد و شیب کوه همین را به آن می‌دهد.' } },
          { t: { en: 'Coffee needs snow on its leaves', es: 'El café necesita nieve en sus hojas', fa: 'قهوه روی برگ‌هایش برف لازم دارد' },
            why: { en: 'Coffee does not like frost at all. Snow is far too cold.', es: 'Al café no le gusta nada la helada. La nieve es demasiado fría.', fa: 'قهوه اصلاً یخبندان را دوست ندارد. برف خیلی سرد است.' } },
          { t: { en: 'Mountain soil is the only soil coffee can use', es: 'La tierra de montaña es la única que sirve para el café', fa: 'خاک کوه تنها خاکی است که قهوه می‌تواند به کار ببرد' },
            why: { en: 'The key is the air temperature, not a special soil. Height makes the air cooler.', es: 'Lo importante es la temperatura del aire, no un suelo especial. La altura enfría el aire.', fa: 'مهم گرمی و سردی هواست، نه خاک خاص. ارتفاع هوا را سردتر می‌کند.' } }
        ]
      }
    },
    {
      x: 14, y: 7,
      name: { en: 'Sisa', es: 'Sisa', fa: 'سیسا' },
      role: { en: 'Potato farmer and alpaca herder', es: 'Agricultora de papas y pastora de alpacas', fa: 'دهقان کچالو و چوپان آلپاکا' },
      look: { skin: 3, hair: '#120c08', shirt: '#c0392b', pants: '#22324f', robe: true },
      lines: [
        { en: 'Alli puncha! That is "good day" in Kichwa. I grow potatoes in the [[tierra fria|tierra fría]].', es: '¡Alli puncha! Eso es "buen día" en kichwa. Yo siembro papas en la [[tierra fria|tierra fría]].', fa: 'اَلی پونچا! این در زبان کیچوا یعنی «روز بخیر». من در [[tierra fria|تیرا فریا]] کچالو می‌کارم.' },
        { en: 'Potatoes and wheat take cold. The Andes grew the first potatoes, thousands of years ago.', es: 'La papa y el trigo aguantan el frío. Las primeras papas se sembraron en los Andes, hace miles de años.', fa: 'کچالو و گندم سرما را تحمل می‌کنند. اولین کچالو هزاران سال پیش در اندیز کاشته شد.' },
        { en: 'Higher, in the [[tierra helada|tierra helada]], llamas and alpacas eat tough grass. Then snow and ice.', es: 'Más arriba, en la [[tierra helada|tierra helada]], las llamas y alpacas comen pasto duro. Luego, nieve y hielo.', fa: 'بالاتر، در [[tierra helada|تیرا الادا]]، لاما و آلپاکا علف سخت می‌چرند. بعد برف و یخ است.' },
        { en: 'Quito, Bogotá and Mexico City sit high. Their cool [[highland climate|highland climate]] beats coastal heat.', es: 'Quito, Bogotá y Ciudad de México están en lo alto. Su [[highland climate|clima de montaña]] fresco es mejor que el calor de la costa.', fa: 'کیتو، بوگوتا و مکسیکوسیتی در بلندی هستند. [[highland climate|آب و هوای کوهستانی]] خنک آن‌ها از گرمای ساحل بهتر است.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Two towns are the same distance from the equator. One is hot, one is cool. Why?', es: 'Dos pueblos están a la misma distancia del ecuador. Uno es caliente y el otro fresco. ¿Por qué?', fa: 'دو شهرک به یک فاصله از خط استوا هستند. یکی گرم و دیگری خنک است. چرا؟' },
        choices: [
          { ok: true, t: { en: 'The cool town is much higher up', es: 'El pueblo fresco está mucho más alto', fa: 'شهرک سرد خیلی بلندتر است' },
            why: { en: 'Yes. Air cools as you climb, so climate stacks in bands up a mountain.', es: 'Sí. El aire se enfría al subir, así que el clima se ordena en franjas en la montaña.', fa: 'بله. هوا با بالا رفتن سرد می‌شود، پس آب و هوا در کوه طبقه به طبقه تغییر می‌کند.' } },
          { t: { en: 'The cool town gets far more rain', es: 'El pueblo fresco recibe mucha más lluvia', fa: 'در شهرک سرد باران خیلی بیشتر می‌بارد' },
            why: { en: 'Rain can change how a day feels, but height is what changes the temperature here.', es: 'La lluvia cambia cómo se siente un día, pero aquí lo que cambia la temperatura es la altura.', fa: 'باران حس روز را تغییر می‌دهد، اما اینجا ارتفاع است که گرمی و سردی را تغییر می‌دهد.' } },
          { t: { en: 'The cool town has more shade trees', es: 'El pueblo fresco tiene más árboles de sombra', fa: 'شهرک سرد درختان سایه‌دار بیشتر دارد' },
            why: { en: 'Trees give shade, but they cannot cool a whole town that much.', es: 'Los árboles dan sombra, pero no pueden enfriar tanto todo un pueblo.', fa: 'درخت سایه می‌دهد، اما نمی‌تواند یک شهرک کامل را این‌قدر سرد کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 19, text: { en: 'HEIGHT MARKER · Sea level. Climb and watch the land change: air cools about 3.5°F per 1,000 feet of [[altitude|altitude]].', es: 'MARCA DE ALTURA · Nivel del mar. Sube y mira cómo cambia la tierra: el aire se enfría unos 3.5 °F por cada 1,000 pies de [[altitude|altitud]].', fa: 'نشانهٔ ارتفاع · سطح بحر. بالا برو و تغییر زمین را ببین: برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] هوا حدود ۳.۵ درجهٔ فارنهایت سرد می‌شود.' } },
    { x: 8, y: 3, text: { en: 'TIERRA HELADA · above about 12,000 feet (3,600 m). Only tough grass for llamas and alpacas. Higher: snow and ice.', es: 'TIERRA HELADA · más de unos 12,000 pies (3,600 m). Solo pasto duro para llamas y alpacas. Más arriba: nieve y hielo.', fa: 'تیرا الادا · بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر). فقط علف سخت برای لاما و آلپاکا. بالاتر: برف و یخ.' } }
  ],

  /* the quest: Taita Inti (gold !) -> Wilson the mule driver -> trade with Doña Nelly on the hot coast -> back to Inti */
  quest: {
    stat: 'mov',
    title: { en: 'Bananas for a Birthday', es: 'Bananos para un cumpleaños', fa: 'کیله برای روز تولد' },
    giver: {
      x: 29, y: 6,
      name: { en: 'Taita Inti', es: 'Taita Inti', fa: 'تایتا اینتی' },
      role: { en: 'Wool weaver', es: 'Tejedor de lana', fa: 'بافندهٔ پشم' },
      look: { skin: 3, hair: '#3a3a3a', shirt: '#7a3a8a', pants: '#22324f', robe: true, hat: '#3a2a1a' },
      lines: [
        { en: 'Alli puncha, friend! Tomorrow is my granddaughter\'s birthday. She loves bananas more than anything.',
          es: '¡Alli puncha, amigo! Mañana es el cumpleaños de mi nieta. A ella le encantan los bananos más que nada.',
          fa: 'اَلی پونچا، دوست من! فردا روز تولد نواسه‌ام است. او کیله را از همه چیز بیشتر دوست دارد.' },
        { en: 'Bananas cannot grow up here. It is far too cold.', es: 'Los bananos no crecen aquí arriba. Hace demasiado frío.', fa: 'کیله اینجا بالا نمی‌روید. اینجا خیلی سرد است.' },
        { en: 'Wilson takes his mule up and down the road. Please ask him what to do.', es: 'Wilson sube y baja el camino con su mula. Por favor, pregúntale qué hacer.', fa: 'ویلسون با قاطرش در سرک بالا و پایین می‌رود. لطفاً از او بپرس چه کنم.' }
      ],
      wait: { en: 'Wilson rests by the coffee farms, on the west side of the mountain.', es: 'Wilson descansa junto a los cafetales, en el lado oeste de la montaña.', fa: 'ویلسون کنار فارم‌های قهوه، در طرف غرب کوه، استراحت می‌کند.' },
      thanks: { en: 'Bananas from the coast! Each height grows different food. Trade feeds every family. Thanks!', es: '¡Bananos de la costa! Cada altura da comida diferente. El intercambio alimenta a cada familia. ¡Gracias!', fa: 'کیله از ساحل! هر ارتفاع غذای دیگری می‌رویاند. تجارت به هر خانواده غذا می‌دهد. تشکر!' }
    },
    contact: {
      x: 5, y: 10,
      name: { en: 'Wilson', es: 'Wilson', fa: 'ویلسون' },
      role: { en: 'Mule driver', es: 'Arriero', fa: 'قاطربان' },
      look: { skin: 1, hair: '#4a2c1a', shirt: '#3fa34d', pants: '#5a4630', hat: '#d8c8a0' },
      lines: [
        { en: 'Every height on this mountain grows something different.', es: 'Cada altura de esta montaña da algo diferente.', fa: 'هر ارتفاع این کوه چیز دیگری می‌رویاند.' },
        { en: 'Up high: potatoes and wool. Down low: bananas and sugarcane. People trade along the road.', es: 'Arriba: papas y lana. Abajo: bananos y caña de azúcar. La gente intercambia por el camino.', fa: 'بالا: کچالو و پشم. پایین: کیله و نیشکر. مردم در سرک با هم تجارت می‌کنند.' },
        { en: 'Doña Nelly sells fruit down on the beach, in the [[tierra caliente|tierra caliente]].', es: 'Doña Nelly vende fruta abajo en la playa, en la [[tierra caliente|tierra caliente]].', fa: 'دونیا نِلی پایین در ساحل، در [[tierra caliente|تیرا کالینته]]، میوه می‌فروشد.' },
        { en: 'Find her on the beach\'s east side. Offer something the hot coast cannot grow.', es: 'Búscala en el lado este de la playa. Ofrécele algo que no crece en la costa caliente.', fa: 'او را در طرف شرق ساحل پیدا کن. چیزی پیشنهاد کن که در ساحل گرم نمی‌روید.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 20,
        name: { en: 'Doña Nelly', es: 'Doña Nelly', fa: 'دونیا نِلی' },
        role: { en: 'Fruit seller', es: 'Vendedora de fruta', fa: 'میوه‌فروش' },
        look: { skin: 4, hair: '#120c08', shirt: '#e05a7a', pants: '#f2c14e', style: 'bun' },
        lines: [
          { en: 'Bananas! Sweet bananas from the [[tierra caliente|tierra caliente]]! I have more bananas than I can sell.',
            es: '¡Bananos! ¡Bananos dulces de la [[tierra caliente|tierra caliente]]! Tengo más bananos de los que puedo vender.',
            fa: 'کیله! کیلهٔ شیرین از [[tierra caliente|تیرا کالینته]]! من بیشتر از آنچه بتوانم بفروشم کیله دارم.' }
        ]
      },
      q: { en: 'You want a bunch of bananas? What will you trade me for it?', es: '¿Quieres un racimo de bananos? ¿Qué me das a cambio?', fa: 'یک خوشه کیله می‌خواهی؟ در بدل آن به من چه می‌دهی؟' },
      choices: [
        { ok: true, at: [18, 6], icon: '🪨', t: { en: 'A sack of potatoes from the cold land', es: 'Un saco de papas de la tierra fría', fa: 'یک بوجی کچالو از زمین سرد' },
          why: { en: 'Yes! Potatoes like the cold, so they do not grow well here on the hot coast. I have none, so I want them! Here are your bananas.', es: '¡Sí! A la papa le gusta el frío, así que no crece bien aquí en la costa caliente. Yo no tengo, ¡así que las quiero! Aquí tienes tus bananos.', fa: 'بله! کچالو سرما را دوست دارد، پس اینجا در ساحل گرم خوب نمی‌روید. من کچالو ندارم، پس آن را می‌خواهم! بگیر، این کیله‌های تو.' } },
        { at: [19, 15], icon: '🎋', t: { en: 'A bundle of sugarcane', es: 'Un atado de caña de azúcar', fa: 'یک بسته نیشکر' },
          why: { en: 'Sugarcane grows all around me on the hot coast. I already have plenty.', es: 'La caña crece por todas partes a mi alrededor en la costa caliente. Ya tengo mucha.', fa: 'نیشکر در همه جای ساحل گرم، اطراف من، می‌روید. من خودم زیاد دارم.' } },
        { at: [25, 16], icon: '🍌', t: { en: 'A bunch of ripe bananas', es: 'Un racimo de bananos maduros', fa: 'یک خوشه کیلهٔ پخته' },
          why: { en: 'I sell bananas! Trading bananas for bananas makes no sense.', es: '¡Yo vendo bananos! Cambiar bananos por bananos no tiene sentido.', fa: 'من کیله می‌فروشم! کیله در بدل کیله معنا ندارد.' } }
      ],
      item: { icon: '🍌', name: { en: 'A bunch of bananas', es: 'Un racimo de bananos', fa: 'یک خوشه کیله' } }
    }
  },

  scraps: [[2, 2], [30, 19], [30, 11]],
  smudges: [[24, 15], [20, 6]],

  challenge: {
    at: [11, 10],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // each crop goes to its height band on the mountain: frozen land up in the snow, cold land by the potato and wheat fields, mild land in the coffee, hot land down by the bananas and sugarcane
    zones: [{ bin: 'helada', x: 10, y: 2, w: 3, h: 1 }, { bin: 'fria', x: 3, y: 6, w: 3, h: 1 }, { bin: 'templada', x: 7, y: 12, w: 3, h: 1 }, { bin: 'caliente', x: 4, y: 15, w: 3, h: 1 }],
    style: 'bands',
    stat: 'hei',
    title: { en: 'What grows at each height?', es: '¿Qué crece en cada altura?', fa: 'در هر ارتفاع چه می‌روید؟' },
    intro: { en: 'The Grump planted every crop at the wrong height! Put each card in the right zone, from the frozen top down to the hot coast.',
      es: '¡El Gruñón sembró cada cultivo a la altura equivocada! Pon cada tarjeta en la zona correcta, desde la cima helada hasta la costa caliente.',
      fa: 'غرغرو هر حاصل را در ارتفاع غلط کاشت! هر کارت را در منطقهٔ درست بگذار، از بالای یخ‌زده تا ساحل گرم.' },
    bins: [
      { id: 'helada', icon: '❄️', tile: 'n', label: { en: 'Tierra helada · frozen land', es: 'Tierra helada', fa: 'تیرا الادا · زمین یخ‌زده' }, sub: { en: 'above about 12,000 ft (3,600 m)', es: 'más de unos 12,000 pies (3,600 m)', fa: 'بالاتر از حدود ۱۲۰۰۰ فوت (۳۶۰۰ متر)' } },
      { id: 'fria', icon: '🥔', tile: 'v', label: { en: 'Tierra fría · cold land', es: 'Tierra fría', fa: 'تیرا فریا · زمین سرد' }, sub: { en: 'about 6,000–12,000 ft (1,800–3,600 m)', es: 'unos 6,000–12,000 pies (1,800–3,600 m)', fa: 'حدود ۶۰۰۰ تا ۱۲۰۰۰ فوت (۱۸۰۰ تا ۳۶۰۰ متر)' } },
      { id: 'templada', icon: '☕', tile: '3', label: { en: 'Tierra templada · mild land', es: 'Tierra templada', fa: 'تیرا تمپلادا · زمین معتدل' }, sub: { en: 'about 3,000–6,000 ft (900–1,800 m)', es: 'unos 3,000–6,000 pies (900–1,800 m)', fa: 'حدود ۳۰۰۰ تا ۶۰۰۰ فوت (۹۰۰ تا ۱۸۰۰ متر)' } },
      { id: 'caliente', icon: '🍌', tile: 'y', label: { en: 'Tierra caliente · hot land', es: 'Tierra caliente', fa: 'تیرا کالینته · زمین گرم' }, sub: { en: 'sea level to about 3,000 ft (900 m)', es: 'del nivel del mar a unos 3,000 pies (900 m)', fa: 'از سطح بحر تا حدود ۳۰۰۰ فوت (۹۰۰ متر)' } }
    ],
    items: [
      { bin: 'caliente', t: { en: 'Bananas', es: 'Banano', fa: 'کیله' },
        why: { en: 'Bananas need steady heat, so they grow down low in the tierra caliente.', es: 'El banano necesita calor constante, así que crece abajo, en la tierra caliente.', fa: 'کیله به گرمای دایمی ضرورت دارد، پس پایین در تیرا کالینته می‌روید.' } },
      { bin: 'caliente', t: { en: 'Sugarcane', es: 'Caña de azúcar', fa: 'نیشکر' },
        why: { en: 'Sugarcane loves heat and rain. It grows in the hot lowlands.', es: 'A la caña le encanta el calor y la lluvia. Crece en las tierras bajas calientes.', fa: 'نیشکر گرما و باران را دوست دارد. در زمین‌های پست گرم می‌روید.' } },
      { bin: 'templada', t: { en: 'Coffee', es: 'Café', fa: 'قهوه' },
        why: { en: 'Coffee hates frost and steady heat. The mild middle slopes, the tierra templada, are just right.', es: 'Al café no le gusta la helada ni el calor constante. Las laderas del medio, la tierra templada, son perfectas.', fa: 'قهوه نه یخبندان را دوست دارد نه گرمای دایمی را. شیب‌های میانی معتدل، یعنی تیرا تمپلادا، برایش درست است.' } },
      { bin: 'templada', t: { en: 'Corn', es: 'Maíz', fa: 'جواری' },
        why: { en: 'Corn grows well in the mild tierra templada, with warm days and cool nights.', es: 'El maíz crece bien en la tierra templada, con días cálidos y noches frescas.', fa: 'جواری در تیرا تمپلادا با روزهای گرم و شب‌های خنک خوب می‌روید.' } },
      { bin: 'fria', t: { en: 'Potatoes', es: 'Papas', fa: 'کچالو' },
        why: { en: 'Potatoes can take the cold. They grow high up in the tierra fría.', es: 'La papa aguanta el frío. Crece en lo alto, en la tierra fría.', fa: 'کچالو سرما را تحمل می‌کند. بالا در تیرا فریا می‌روید.' } },
      { bin: 'fria', t: { en: 'Wheat', es: 'Trigo', fa: 'گندم' },
        why: { en: 'Wheat grows in cool air, so it belongs in the tierra fría.', es: 'El trigo crece con aire fresco, así que va en la tierra fría.', fa: 'گندم در هوای خنک می‌روید، پس جایش در تیرا فریا است.' } },
      { bin: 'helada', t: { en: 'Llamas and alpacas grazing on tough grass', es: 'Llamas y alpacas comiendo pasto duro', fa: 'لاما و آلپاکا که علف سخت می‌چرند' },
        why: { en: 'Almost no crops grow this high. Only tough grass, so herders graze llamas and alpacas in the tierra helada.', es: 'Casi ningún cultivo crece tan alto. Solo pasto duro, así que los pastores llevan llamas y alpacas a la tierra helada.', fa: 'در این بلندی تقریباً هیچ حاصلی نمی‌روید. فقط علف سخت است، پس چوپانان لاما و آلپاکا را در تیرا الادا می‌چرانند.' } },
      { bin: 'helada', t: { en: 'Snow and ice: nothing grows', es: 'Nieve y hielo: no crece nada', fa: 'برف و یخ: هیچ چیز نمی‌روید' },
        why: { en: 'At the very top it is frozen all year. That is the tierra helada.', es: 'En la cima todo está congelado todo el año. Esa es la tierra helada.', fa: 'در بالاترین جا تمام سال یخ است. این تیرا الادا است.' } }
    ],
    success: { en: 'Every crop is back at the right height. The mountain is green again from the beach to the snow!', es: '¡Cada cultivo volvió a su altura! ¡La montaña está verde otra vez, de la playa a la nieve!', fa: 'هر حاصل دوباره در ارتفاع درست است. کوه از ساحل تا برف دوباره سبز است!' }
  },

  boss: {
    at: [20, 2],
    stat: 'reg',
    need: 3,
    name: { en: 'The Frost Grump', es: 'El Gruñón de Escarcha', fa: 'غرغروی یخبندان' },
    appear: { en: 'The Frost Grump is hiding in the snow at the top of the mountain!', es: '¡El Gruñón de Escarcha se esconde en la nieve, en la cima de la montaña!', fa: 'غرغروی یخبندان در برف بالای کوه پنهان است!' },
    taunt: { en: 'Brrr! I will freeze the coffee and cook the potatoes. Nothing will grow in the right place!', es: '¡Brrr! Voy a congelar el café y a cocinar las papas. ¡Nada crecerá en su lugar!', fa: 'بررر! قهوه را یخ می‌زنم و کچالو را می‌پزم. هیچ چیز در جای درست نمی‌روید!' },
    win: { en: 'The frost melts into a cool mountain stream. Atlas page 2.2 floats down into your hands!', es: 'La escarcha se derrite en un arroyo fresco de montaña. ¡La página 2.2 del atlas cae en tus manos!', fa: 'یخبندان آب می‌شود و یک جوی خنک کوهستانی می‌سازد. صفحهٔ ۲.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Two towns in Colombia sit the same distance from the equator. One is hot all year. The other needs a jacket at night. What best explains the difference?', es: 'Dos pueblos de Colombia están a la misma distancia del ecuador. Uno es caliente todo el año. En el otro se necesita chaqueta de noche. ¿Qué explica mejor la diferencia?', fa: 'دو شهرک در کلمبیا به یک فاصله از خط استوا هستند. یکی تمام سال گرم است. در دیگری شب‌ها جاکت لازم است. بهترین توضیح چیست؟' },
        choices: [{ en: 'The cooler town is much higher up', es: 'El pueblo más fresco está mucho más alto', fa: 'شهرک سردتر خیلی بلندتر است' }, { en: 'The cooler town gets far more rain', es: 'El pueblo más fresco recibe mucha más lluvia', fa: 'در شهرک سردتر باران خیلی بیشتر می‌بارد' }, { en: 'The cooler town is closer to the Pacific Ocean', es: 'El pueblo más fresco está más cerca del océano Pacífico', fa: 'شهرک سردتر به بحر آرام نزدیک‌تر است' }, { en: 'The cooler town has more trees for shade', es: 'El pueblo más fresco tiene más árboles con sombra', fa: 'شهرک سردتر درختان سایه‌دار بیشتر دارد' }], answer: 0,
        why: { en: 'Air cools as you climb, so climate stacks in bands up a mountainside.', es: 'El aire se enfría al subir, así que el clima se ordena en franjas en la montaña.', fa: 'هوا با بالا رفتن سرد می‌شود، پس آب و هوا در شیب کوه طبقه به طبقه است.' } },
      { q: { en: 'About how much does the air cool for every 1,000 feet you climb?', es: '¿Cuánto se enfría el aire más o menos por cada 1,000 pies que subes?', fa: 'برای هر ۱۰۰۰ فوت بالا رفتن، هوا حدوداً چقدر سرد می‌شود؟' },
        choices: [{ en: 'About 3.5 degrees Fahrenheit', es: 'Unos 3.5 grados Fahrenheit', fa: 'حدود ۳.۵ درجهٔ فارنهایت' }, { en: 'About 0.5 degrees Fahrenheit', es: 'Unos 0.5 grados Fahrenheit', fa: 'حدود ۰.۵ درجهٔ فارنهایت' }, { en: 'About 15 degrees Fahrenheit', es: 'Unos 15 grados Fahrenheit', fa: 'حدود ۱۵ درجهٔ فارنهایت' }, { en: 'About 30 degrees Fahrenheit', es: 'Unos 30 grados Fahrenheit', fa: 'حدود ۳۰ درجهٔ فارنهایت' }], answer: 0,
        why: { en: 'About 3.5°F per 1,000 feet. Climb 5,000 feet and the air can be about 17 degrees cooler.', es: 'Unos 3.5 °F por cada 1,000 pies. Si subes 5,000 pies, el aire puede estar unos 17 grados más frío.', fa: 'حدود ۳.۵ درجه برای هر ۱۰۰۰ فوت. اگر ۵۰۰۰ فوت بالا بروی، هوا می‌تواند حدود ۱۷ درجه سردتر باشد.' } },
      { q: { en: 'Mexico City sits about 2,200 meters above sea level. What do the lessons say about building a city high up?', es: 'Ciudad de México está a unos 2,200 metros sobre el nivel del mar. ¿Qué dicen las lecciones sobre construir una ciudad en lo alto?', fa: 'مکسیکوسیتی حدود ۲۲۰۰ متر از سطح بحر بلندتر است. درس‌ها دربارهٔ ساختن شهر در بلندی چه می‌گویند؟' },
        choices: [{ en: 'Up high, the air stays cool, even near the equator', es: 'En lo alto el aire es fresco, aun cerca del ecuador', fa: 'در بلندی هوا خنک است، حتی نزدیک خط استوا' }, { en: 'All the mines of the region are on mountain tops', es: 'Todas las minas de la región están en las cimas', fa: 'همهٔ معدن‌های منطقه بالای کوه هستند' }, { en: 'Ships from the coast cannot reach a city in the mountains', es: 'Los barcos de la costa no llegan a una ciudad en las montañas', fa: 'کشتی‌های ساحل به شهر کوهستانی نمی‌رسند' }, { en: 'The flattest land is high in the Andes', es: 'La tierra más plana está en lo alto de los Andes', fa: 'هموارترین زمین بالای اندیز است' }], answer: 0,
        why: { en: 'Cool, dry air up high is easier to live in than the heavy heat of the coast.', es: 'El aire fresco y seco de lo alto es más cómodo que el calor pesado de la costa.', fa: 'زندگی در هوای خنک و خشک بلندی آسان‌تر از گرمای سنگین ساحل است.' } },
      { q: { en: 'Why does coffee grow on mountain slopes instead of in the nearby lowlands?', es: '¿Por qué el café crece en las laderas y no en las tierras bajas cercanas?', fa: 'چرا قهوه روی شیب کوه می‌روید، نه در زمین‌های پست نزدیک؟' },
        choices: [{ en: 'The lowlands are too hot for the plant', es: 'Las tierras bajas son demasiado calientes para la planta', fa: 'زمین‌های پست برای این بوته خیلی گرم است' }, { en: 'No farmers live in the lowlands', es: 'No viven agricultores en las tierras bajas', fa: 'هیچ دهقانی در زمین‌های پست زندگی نمی‌کند' }, { en: 'The lowlands get far too much snow and ice', es: 'En las tierras bajas cae demasiada nieve y hielo', fa: 'در زمین‌های پست برف و یخ خیلی زیاد است' }, { en: 'Coffee can only use mountain soil', es: 'El café solo puede usar tierra de montaña', fa: 'قهوه فقط خاک کوه را به کار می‌برد' }], answer: 0,
        why: { en: 'Coffee does not like steady heat or frost. The cool, wet slopes fit it best.', es: 'Al café no le gusta el calor constante ni la helada. Las laderas frescas y húmedas le quedan mejor.', fa: 'قهوه گرمای دایمی و یخبندان را دوست ندارد. شیب‌های خنک و مرطوب برایش بهترین است.' } },
      { q: { en: 'What is a cash crop?', es: '¿Qué es un cultivo comercial?', fa: 'حاصل نقدی چیست؟' },
        choices: [{ en: 'A crop grown mainly to sell, not to eat at home', es: 'Un cultivo que se siembra sobre todo para vender, no para comer en casa', fa: 'حاصلی که بیشتر برای فروش کاشته می‌شود، نه برای خوردن در خانه' }, { en: 'A crop that only grows on high mountain slopes', es: 'Un cultivo que solo crece en laderas altas', fa: 'حاصلی که فقط روی شیب‌های بلند کوه می‌روید' }, { en: 'A crop a family grows to feed itself', es: 'Un cultivo que una familia siembra para comer', fa: 'حاصلی که یک خانواده برای خوراک خود می‌کارد' }, { en: 'A crop a government pays farmers to plant', es: 'Un cultivo que el gobierno paga para sembrar', fa: 'حاصلی که حکومت پول می‌دهد تا کاشته شود' }], answer: 0,
        why: { en: 'Coffee, bananas and sugar are all cash crops in this region.', es: 'El café, el banano y el azúcar son cultivos comerciales en esta región.', fa: 'قهوه، کیله و شکر همه در این منطقه حاصل نقدی هستند.' } },
      { q: { en: 'Where do the Andes Mountains run?', es: '¿Por dónde pasan los Andes?', fa: 'کوه‌های اندیز از کجا می‌گذرند؟' },
        choices: [{ en: 'Down the whole west side of South America', es: 'Por todo el lado oeste de América del Sur', fa: 'در طول تمام غرب امریکای جنوبی' }, { en: 'Across the middle of Brazil from east to west', es: 'Por el medio de Brasil, de este a oeste', fa: 'از وسط برازیل، از شرق به غرب' }, { en: 'Along the north coast of the Caribbean islands', es: 'Por la costa norte de las islas del Caribe', fa: 'در ساحل شمالی جزیره‌های کارائیب' }, { en: 'Only through the middle of Mexico', es: 'Solo por el centro de México', fa: 'فقط از وسط مکسیکو' }], answer: 0,
        why: { en: 'The Andes run about 7,000 km down the west side of South America. Ecuador sits on them.', es: 'Los Andes recorren unos 7,000 km por el lado oeste de América del Sur. Ecuador está sobre ellos.', fa: 'اندیز حدود ۷۰۰۰ کیلومتر در غرب امریکای جنوبی کشیده شده. اکوادور روی آن است.' } },
      { q: { en: 'What is an isthmus?', es: '¿Qué es un istmo?', fa: 'تنگه (بَرزخ) چیست؟' },
        choices: [{ en: 'A thin strip of land that joins two big lands', es: 'Una franja delgada de tierra que une dos tierras grandes', fa: 'نوار باریک خشکه که دو خشکهٔ بزرگ را وصل می‌کند' }, { en: 'A chain of islands between two continents', es: 'Una cadena de islas entre dos continentes', fa: 'رشته‌ای از جزیره‌ها میان دو قاره' }, { en: 'A narrow channel of water that joins two seas', es: 'Un canal angosto de agua que une dos mares', fa: 'یک آبراه باریک آب که دو بحر را به هم وصل می‌کند' }, { en: 'A long mountain range along a coast', es: 'Una cordillera larga junto a una costa', fa: 'یک رشته‌کوه دراز در امتداد ساحل' }], answer: 0,
        why: { en: 'Central America is an isthmus. It joins North America to South America.', es: 'América Central es un istmo. Une América del Norte con América del Sur.', fa: 'امریکای مرکزی یک برزخ است. امریکای شمالی را به امریکای جنوبی وصل می‌کند.' } },
      { q: { en: 'What did the Panama Canal let ships do after 1914?', es: '¿Qué les permitió hacer a los barcos el Canal de Panamá después de 1914?', fa: 'کانال پاناما بعد از ۱۹۱۴ به کشتی‌ها چه امکانی داد؟' },
        choices: [{ en: 'Cross between the Atlantic and Pacific Oceans', es: 'Cruzar entre los océanos Atlántico y Pacífico', fa: 'میان بحر اطلس و بحر آرام بگذرند' }, { en: 'Carry coffee from the highlands down to the coast', es: 'Llevar café de las tierras altas a la costa', fa: 'قهوه را از کوهستان به ساحل ببرند' }, { en: 'Hide from hurricanes during storm season', es: 'Esconderse de los huracanes en temporada de tormentas', fa: 'در فصل طوفان از طوفان‌ها پنهان شوند' }, { en: 'Carry drinking water into Panama City', es: 'Llevar agua potable a Ciudad de Panamá', fa: 'آب نوشیدنی را به شهر پاناما ببرند' }], answer: 0,
        why: { en: 'Before 1914, ships sailed all the way around South America. The canal saves weeks.', es: 'Antes de 1914, los barcos daban toda la vuelta a América del Sur. El canal ahorra semanas.', fa: 'پیش از ۱۹۱۴ کشتی‌ها دور تمام امریکای جنوبی می‌چرخیدند. کانال هفته‌ها وقت را صرفه‌جویی می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Air cools about 3.5°F for every 1,000 feet of [[altitude|altitude]], so a mountain near the equator has bands of climate from hot to frozen.', es: 'El aire se enfría unos 3.5 °F por cada 1,000 pies de [[altitude|altitud]], así que una montaña cerca del ecuador tiene franjas de clima, de caliente a helado.', fa: 'هوا برای هر ۱۰۰۰ فوت [[altitude|ارتفاع]] حدود ۳.۵ درجهٔ فارنهایت سرد می‌شود، پس کوهی نزدیک خط استوا طبقه‌های آب و هوا از گرم تا یخ‌زده دارد.' },
    { en: 'Bananas and sugarcane grow in the [[tierra caliente|tierra caliente]], coffee in the [[tierra templada|tierra templada]], potatoes and wheat in the [[tierra fria|tierra fría]], and llamas graze in the [[tierra helada|tierra helada]].', es: 'El banano y la caña crecen en la [[tierra caliente|tierra caliente]], el café en la [[tierra templada|tierra templada]], la papa y el trigo en la [[tierra fria|tierra fría]], y las llamas pastan en la [[tierra helada|tierra helada]].', fa: 'کیله و نیشکر در [[tierra caliente|تیرا کالینته]]، قهوه در [[tierra templada|تیرا تمپلادا]]، کچالو و گندم در [[tierra fria|تیرا فریا]] می‌رویند، و لاماها در [[tierra helada|تیرا الادا]] می‌چرند.' },
    { en: 'Height shapes where crops grow and where people build. Quito, Bogotá and Mexico City sit high up, in a cool [[highland climate|highland climate]].', es: 'La altura decide dónde crecen los cultivos y dónde construye la gente. Quito, Bogotá y Ciudad de México están en lo alto, con un [[highland climate|clima de montaña]] fresco.', fa: 'ارتفاع تعیین می‌کند حاصلات کجا بروید و مردم کجا خانه بسازند. کیتو، بوگوتا و مکسیکوسیتی در بلندی هستند، با [[highland climate|آب و هوای کوهستانی]] خنک.' }
  ],
  reflect: {
    q: { en: 'Think of a place you have lived in or visited that is high in the mountains or low by the sea. How did its height change the weather, the food or the way people lived?', es: 'Piensa en un lugar donde viviste o que visitaste que esté alto en las montañas o bajo junto al mar. ¿Cómo cambió su altura el clima, la comida o la forma de vivir de la gente?', fa: 'به جایی فکر کن که در آن زندگی کرده‌ای یا دیده‌ای که در کوه بلند یا پایین کنار بحر است. ارتفاع آن چطور هوا، غذا یا زندگی مردم را تغییر داد؟' },
    starter: { en: 'A place I know that is', es: 'Un lugar que conozco que está', fa: 'جایی که می‌شناسم و' }
  }
};
