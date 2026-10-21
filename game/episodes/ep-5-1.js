/* WORLDWALKER · Episode 5.1 · Land, Water and Oil (WG.8)
   Saudi Arabia and Türkiye. The Tigris and Euphrates start in Türkiye's mountains (top-left), pass a dam,
   and flow down through farmland to the Persian Gulf. Desert, an oasis and oil pumps fill the south.
   The top-right screen is the Temple of the Twin Rivers, where the dam puzzle waits. See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '5.1',
  realm: 5,
  sol: 'WG.8',
  title: { en: 'Land, Water and Oil', es: 'Tierra, agua y petróleo', fa: 'زمین، آب و نفت' },
  place: { en: 'Temple of the Twin Rivers', es: 'Templo de los Ríos Gemelos', fa: 'معبد دو دریا' },
  intro: [
    { en: 'The Grump dried up the twin rivers! Talk to the engineer in Türkiye\'s mountains.',
      es: '¡El Gruñón secó los ríos gemelos! Habla con la ingeniera en las montañas de Turquía.',
      fa: 'غرغرو دو دریا را خشک کرد! با انجنیر در کوه‌های ترکیه گپ بزن.' },
    { en: 'Meet the farmer in Iraq and the Saudi water engineer. Then solve the temple puzzle.',
      es: 'Conoce al agricultor en Irak y a la ingeniera de agua saudita. Luego resuelve el acertijo del templo.',
      fa: 'با دهقان در عراق و انجنیر آب عربستان سعودی هم گپ بزن. بعد معمای معبد را حل کن.' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Top-left: Türkiye's mountains, river springs and a dam. Top-right: the temple (door on its west wall).
     Bottom: the rivers cross farmland to the Gulf; desert, an oasis and oil pumps in the south. */
  map: [
    'MAAAAAAAAAAAAAAADDDDDDD~~DDDDDDD',
    'MAAA~nMAAAA~MAAAD2222f~~~~fffffD',
    'MMMM~MMnnMM~MMMMD2222~~~~~fffffD',
    'MMM.~.x....~..MMD2222ffWWffffffD',
    'M..~.~.....~.M..Dffffff~~fffoooD',
    'M..~~~.T...~....dffffff~~W~~o1oD',
    'M..WWW.....~....Dffffff~~fffoooD',
    'M...~......b....Dffffff~~ffffffD',
    'M.T.~......~.P..Dffffff~~ffffffD',
    'M...b....T.~....Do1ooo1oooo1oooD',
    'M...~......~....DDDDDDDDDDDDDDDD',
    'r...~.www..~sssssssssssssss~~~~r',
    'r...~.www..~............sss~===r',
    'r...~......~~~~~B~~~~~~~~ss~===r',
    'r...~.wwww.........1o1o.~ss~===r',
    'r...~.wwww...wwwww......~~~~===r',
    'rsss~........wwwww......~ss~===r',
    'rsss~~~~B~~~~~~~~~B~~~~~~ss~~~~r',
    'ruupssssssussussssssIsIsssssIssr',
    'rsp~pssrrGrrssussIssssssssIssssr',
    'rssOssurusurussusssssssIsssxsssr',
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'
  ],
  start: [8, 4],

  tools: ['axe', 'sickle'],
  /* build: an irrigation canal from the Euphrates to the dry land between the two wheat fields (the Fertile Crescent) */
  build: [
    { id: 'canal', kind: 'place', board: [10, 14], tile: '~', ok: [[5, 13], [6, 13], [7, 13], [8, 13]], cost: { wood: 1 },
      name: { en: 'Irrigation canal', es: 'Canal de riego', fa: 'جوی آبیاری' },
      ask: { en: 'Long ago, farmers in the [[fertile crescent|Fertile Crescent]] dug canals. A canal carries river water to the fields. Dig a canal that starts at the river on the west and runs east, between the two wheat fields. Use wood for the canal gates.',
        es: 'Hace mucho tiempo, los agricultores de la [[fertile crescent|Media Luna Fértil]] cavaban canales. Un canal lleva el agua del río a los campos. Cava un canal que empiece en el río del oeste y vaya al este, entre los dos campos de trigo. Usa madera para las compuertas.',
        fa: 'خیلی وقت پیش، دهقانان [[fertile crescent|هلال حاصل‌خیز]] جوی می‌کندند. جوی آب دریا را به کشتزارها می‌برد. یک جوی بکن که از دریای غرب شروع شود و به طرف شرق، میان دو کشتزار گندم برود. برای دروازه‌های جوی از چوب کار بگیر.' },
      why: { en: 'Good: the river water flows on, toward the wheat.', es: 'Bien: el agua del río sigue hacia el trigo.', fa: 'خوب: آب دریا به طرف گندم پیش می‌رود.' },
      wrong: { en: 'Not here. A canal starts at the river and runs to the fields. Dig east from the west river, between the two wheat fields.', es: 'Aquí no. Un canal empieza en el río y va a los campos. Cava hacia el este desde el río del oeste, entre los dos campos de trigo.', fa: 'این جا نه. جوی از دریا شروع می‌شود و به کشتزارها می‌رود. از دریای غرب به طرف شرق، میان دو کشتزار گندم بکن.' },
      wrongBy: [
        { x: 1, y: 18, w: 26, h: 3, t: { en: 'This is the desert, south of the river. A canal here would never reach the wheat fields.', es: 'Esto es el desierto, al sur del río. Un canal aquí nunca llegaría a los campos de trigo.', fa: 'این جا بیابان است، جنوبِ دریا. جوی در این جا هیچ وقت به کشتزارهای گندم نمی‌رسد.' } },
        { x: 9, y: 14, w: 15, h: 3, t: { en: 'Too far from the west river. The water must come from the river, so start the canal right next to it.', es: 'Muy lejos del río del oeste. El agua tiene que venir del río, así que empieza el canal justo a su lado.', fa: 'از دریای غرب خیلی دور است. آب باید از دریا بیاید، پس جوی را درست کنار آن شروع کن.' } }
      ],
      done: { en: 'River water now reaches both wheat fields. Canals like this turned dry land into the farms of the Fertile Crescent, between the Tigris and the Euphrates.', es: 'El agua del río ya llega a los dos campos de trigo. Canales así convirtieron la tierra seca en las granjas de la Media Luna Fértil, entre el Tigris y el Éufrates.', fa: 'حالا آب دریا به هر دو کشتزار گندم می‌رسد. جوی‌هایی مثل این زمین خشک را به کشتزارهای هلال حاصل‌خیز، میان دجله و فرات، تبدیل کردند.' } }
  ],
  finds: [
    { clueAt: [10, 12], at: [6, 11], decor: 'vase',
      clue: { en: 'Mesopotamia means "the land between the rivers." Find the farthest-north wheat field there. Stand on its north-west corner.', es: 'Mesopotamia quiere decir "la tierra entre los ríos". Busca ahí el campo de trigo más al norte. Párate en su esquina noroeste.', fa: 'بین‌النهرین یعنی «سرزمین میان دریاها». شمالی‌ترین کشتزار گندم آن‌جا را پیدا کن. روی کنج شمال‌غربی آن بایست.' },
      text: { en: 'A clay pot! Over 5,000 years ago, people here wrote on clay tablets, one of the oldest kinds of writing.', es: '¡Una vasija de barro! Hace más de 5000 años, aquí se escribía en tablillas de barro, una de las escrituras más antiguas.', fa: 'یک کوزهٔ گلی! بیش از ۵۰۰۰ سال پیش، مردم این‌جا روی لوحه‌های گلی می‌نوشتند، یکی از کهن‌ترین نوع‌های نوشتن.' } },
    { clueAt: [26, 8], at: [29, 6], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps north, then 3 steps east. Look in the temple garden.', es: 'Desde esta nota, camina 2 pasos al norte y luego 3 pasos al este. Busca en el jardín del templo.', fa: 'از این یادداشت، ۲ قدم به شمال برو، بعد ۳ قدم به شرق. در باغچهٔ معبد ببین.' },
      text: { en: 'North is up, east is right. A garden flower! Babylon\'s Hanging Gardens were on the Euphrates, in Iraq.', es: 'El norte está arriba y el este a la derecha. ¡Una flor del jardín! Los Jardines Colgantes de Babilonia estaban junto al Éufrates, en Irak.', fa: 'شمال بالا و شرق طرف راست است. یک گل باغچه! باغ‌های معلق بابل کنار دریای فرات، در عراق، بودند.' } }
  ],
  // only the Water Gourd (Episode 4.3) opens the gate into the dry desert: it carries water for the crossing
  secret: { tool: 'gourd', at: [9, 20],
    text: { en: 'The Water Gourd carried water across the dry sand! South of here is the Empty Quarter in Saudi Arabia. It is one of the biggest sand deserts on Earth, and some years almost no rain falls there.',
      es: '¡La calabaza llevó agua por la arena seca! Al sur está el Cuarto Vacío, en Arabia Saudita. Es uno de los desiertos de arena más grandes de la Tierra, y algunos años casi no llueve allí.',
      fa: 'کدوی آب، آب را از میان ریگ خشک گذراند! در جنوب اینجا ربع خالی در عربستان سعودی است. این یکی از بزرگ‌ترین صحراهای ریگی روی زمین است، و بعضی سال‌ها تقریباً هیچ باران در آنجا نمی‌بارد.' } },

  words: {
    upstream: { en: 'closer to where a river starts', es: 'más cerca de donde nace un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' },
    downstream: { en: 'closer to where a river ends', es: 'más cerca de donde termina un río', fa: 'نزدیک‌تر به جایی که دریا تمام می‌شود' },
    dam: { en: 'a wall across a river that holds water back', es: 'un muro que cruza un río y detiene el agua', fa: 'دیواری که دریا را بند می‌کند و آب را نگه می‌دارد' },
    'fertile crescent': { en: 'a curved strip of good farmland between two rivers in Southwest Asia', es: 'una franja curva de buena tierra de cultivo entre dos ríos en el suroeste de Asia', fa: 'نوار خمیده‌ای از زمین خوب زراعتی میان دو دریا در جنوب غرب آسیا' },
    'water scarcity': { en: 'not having enough fresh water for the people who need it', es: 'no tener suficiente agua dulce para la gente que la necesita', fa: 'کافی نبودن آب شیرین برای مردمی که به آن نیاز دارند' },
    oasis: { en: 'a place in the desert with a natural spring, where plants can grow', es: 'un lugar del desierto con un manantial natural, donde crecen plantas', fa: 'جایی در بیابان با چشمهٔ طبیعی که گیاه در آن می‌روید' },
    desalination: { en: 'turning seawater into fresh water by taking out the salt', es: 'convertir agua de mar en agua dulce quitándole la sal', fa: 'شیرین کردن آب بحر با گرفتن نمک آن' },
    treaty: { en: 'a written agreement that countries sign and promise to follow', es: 'un acuerdo escrito que los países firman y prometen cumplir', fa: 'توافق نوشته‌شده‌ای که کشورها امضا می‌کنند و قول می‌دهند به آن عمل کنند' }
  },

  npcs: [
    {
      x: 9, y: 6,
      name: { en: 'Elif', es: 'Elif', fa: 'الیف' },
      role: { en: 'Dam engineer in Türkiye', es: 'Ingeniera de represas en Turquía', fa: 'انجنیر بند در ترکیه' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#c0392b', pants: '#2c3e50' },
      lines: [
        { en: 'Merhaba, that is hello in Turkish! I am Elif. Snow melts here each spring.',
          es: '¡Merhaba, así se dice hola en turco! Soy Elif. Aquí la nieve se derrite cada primavera.',
          fa: 'مرحبا، این به ترکی یعنی سلام! من الیف هستم. این‌جا برف هر بهار آب می‌شود.' },
        { en: 'The melting snow feeds two great rivers: the Tigris and the Euphrates.',
          es: 'La nieve derretida alimenta dos grandes ríos: el Tigris y el Éufrates.',
          fa: 'برف آب‌شده دو دریای بزرگ را پر می‌کند: دجله و فرات.' },
        { en: 'We are [[upstream|upstream]], near where they start. They flow south to Syria and Iraq, [[downstream|downstream]].',
          es: 'Estamos [[upstream|río arriba]], cerca de donde nacen. Corren al sur hacia Siria e Irak, [[downstream|río abajo]].',
          fa: 'ما در [[upstream|بالای دریا]] هستیم، نزدیک جایی که شروع می‌شوند. دریاها به جنوب تا سوریه و عراق، [[downstream|پایین دریا]]، می‌روند.' },
        { en: '[[dam|Dams]] like Atatürk save water for dry months and make power, but send less downstream.',
          es: 'Las [[dam|represas]] como la Atatürk guardan agua para los meses secos y dan electricidad, pero mandan menos río abajo.',
          fa: '[[dam|بندها]] مثل بند اتاترک آب را برای ماه‌های خشک نگه می‌دارند و برق می‌سازند، اما آب کمتری به پایین دریا می‌فرستند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What does upstream mean?', es: '¿Qué significa río arriba?', fa: 'بالای دریا یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'Closer to where a river starts', es: 'Más cerca de donde nace un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' },
            why: { en: 'Türkiye\'s mountains are upstream, where the Tigris and Euphrates begin.', es: 'Las montañas de Turquía están río arriba, donde nacen el Tigris y el Éufrates.', fa: 'کوه‌های ترکیه در بالای دریا هستند، جایی که دجله و فرات شروع می‌شوند.' } },
          { t: { en: 'Closer to where a river ends', es: 'Más cerca de donde termina un río', fa: 'نزدیک‌تر به جایی که دریا تمام می‌شود' },
            why: { en: 'That is downstream.', es: 'Eso es río abajo.', fa: 'این پایین دریا است.' } },
          { t: { en: 'The fastest, deepest part of a river', es: 'La parte más rápida y profunda de un río', fa: 'تیزترین و عمیق‌ترین قسمت دریا' },
            why: { en: 'Upstream is about where, not how deep or fast.', es: 'Río arriba habla de dónde, no de qué tan profundo o rápido.', fa: 'بالای دریا دربارهٔ جای آن است، نه عمق یا تیزی آن.' } }
        ]
      }
    },
    {
      x: 14, y: 14,
      name: { en: 'Abbas', es: 'Abbas', fa: 'عباس' },
      role: { en: 'Wheat and date farmer in Iraq', es: 'Agricultor de trigo y dátiles en Irak', fa: 'دهقان گندم و خرما در عراق' },
      look: { skin: 2, hair: '#222222', shirt: '#e8e2d0', robe: true },
      lines: [
        { en: 'Salaam! I am Abbas. My family farms wheat and dates far [[downstream|downstream]] in Iraq.',
          es: '¡Salam! Soy Abbas. Mi familia cultiva trigo y dátiles muy [[downstream|río abajo]], en Irak.',
          fa: 'سلام! من عباس هستم. خانواده‌ام خیلی [[downstream|پایین دریا]] در عراق گندم و خرما می‌کارد.' },
        { en: 'Land between the rivers is in the [[fertile crescent|Fertile Crescent]], a curved strip of good farmland.',
          es: 'La tierra entre los ríos es parte de la [[fertile crescent|Media Luna Fértil]], una franja curva de buena tierra de cultivo.',
          fa: 'زمین میان دو دریا بخشی از [[fertile crescent|هلال حاصلخیز]] است، یک نوار خمیده از زمین خوب زراعتی.' },
        { en: 'Farmers here dug canals long ago. The first cities and writing began here, in Mesopotamia.',
          es: 'Hace mucho, los agricultores cavaron canales aquí. Las primeras ciudades y la escritura nacieron aquí, en Mesopotamia.',
          fa: 'دهقانان خیلی وقت پیش این‌جا کانال کندند. اولین شهرها و نوشتن همین‌جا، در بین‌النهرین، شروع شد.' },
        { en: 'Upstream dams mean less water for us. Countries can sign a [[treaty|treaty]] to share it.',
          es: 'Las represas de río arriba nos dejan menos agua. Los países pueden firmar un [[treaty|tratado]] para repartirla.',
          fa: 'بندهای بالای دریا آب کمتری برای ما می‌گذارند. کشورها می‌توانند یک [[treaty|معاهده]] امضا کنند تا آب را تقسیم کنند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What would most likely happen to downstream farms if an upstream country built a big new dam?', es: '¿Qué pasaría más probablemente con las granjas de río abajo si un país de río arriba construyera una represa grande?', fa: 'اگر کشور بالای دریا یک بند بزرگ تازه بسازد، به احتمال زیاد چه بر سر کشتزارهای پایین دریا می‌آید؟' },
        choices: [
          { ok: true, t: { en: 'Less water would reach them', es: 'Les llegaría menos agua', fa: 'آب کمتری به آن‌ها می‌رسد' },
            why: { en: 'The dam holds water back, so less flows down to the next country.', es: 'La represa detiene el agua, así que baja menos al siguiente país.', fa: 'بند آب را نگه می‌دارد، پس آب کمتری به کشور بعدی می‌رود.' } },
          { t: { en: 'They would flood from extra water', es: 'Se inundarían con agua extra', fa: 'از آب اضافه سیلاب می‌شوند' },
            why: { en: 'A dam holds water back. It does not send extra water down.', es: 'Una represa detiene el agua. No manda agua extra hacia abajo.', fa: 'بند آب را نگه می‌دارد. آب اضافه به پایین نمی‌فرستد.' } },
          { t: { en: 'More rain would fall on them', es: 'Les caería más lluvia', fa: 'باران بیشتری بر آن‌ها می‌بارد' },
            why: { en: 'A dam does not change the rain. It changes the river water.', es: 'Una represa no cambia la lluvia. Cambia el agua del río.', fa: 'بند باران را تغییر نمی‌دهد. آب دریا را تغییر می‌دهد.' } }
        ]
      }
    },
    {
      x: 21, y: 19,
      name: { en: 'Nourah', es: 'Nourah', fa: 'نوره' },
      role: { en: 'Water engineer from Saudi Arabia', es: 'Ingeniera de agua de Arabia Saudita', fa: 'انجنیر آب از عربستان سعودی' },
      look: { skin: 2, hair: '#1a1a1a', shirt: '#1f6f8b', robe: true },
      remember: { ep: '4.3', t: { en: 'I heard about you from my friend Nomvula in South Africa! You traded her sugar for a new water pump. Her sugarcane fields have water again.', es: '¡Mi amiga Nomvula, de Sudáfrica, me habló de ti! Cambiaste su azúcar por una bomba de agua nueva. Sus campos de caña de azúcar tienen agua otra vez.', fa: 'از دوستم نومولا در افریقای جنوبی در بارهٔ تو شنیدم! تو بورهٔ او را با یک پمپ آب نو عوض کردی. کشتزارهای نیشکر او دوباره آب دارند.' } },
      lines: [
        { en: 'Marhaba! I am Nourah. My land has the Empty Quarter, Earth\'s largest sand desert.',
          es: '¡Marhaba! Soy Nourah. Mi tierra tiene el Cuarto Vacío, el desierto de arena más grande de la Tierra.',
          fa: 'مرحبا! من نوره هستم. سرزمین من ربع خالی را دارد، بزرگ‌ترین بیابان ریگی روی زمین.' },
        { en: 'No river flows all year here: [[water scarcity|water scarcity]]. Towns grew by an [[oasis|oasis]] spring.',
          es: 'Aquí ningún río corre todo el año: [[water scarcity|escasez de agua]]. Los pueblos crecieron junto a un manantial de [[oasis|oasis]].',
          fa: 'این‌جا هیچ دریایی تمام سال جاری نیست: [[water scarcity|کم‌آبی]]. شهرک‌ها کنار چشمهٔ [[oasis|واحه]] ساخته شدند.' },
        { en: 'Under the sand is oil. Oil money built roads, airports and big cities.',
          es: 'Bajo la arena hay petróleo. El dinero del petróleo construyó carreteras, aeropuertos y ciudades grandes.',
          fa: 'زیر ریگ نفت است. پول نفت سرک‌ها، میدان‌های هوایی و شهرهای بزرگ را ساخت.' },
        { en: 'I work in [[desalination|desalination]], turning seawater into fresh water. We make the most on Earth.',
          es: 'Trabajo en [[desalination|desalinización]]: convierto agua de mar en agua dulce. Somos el país que más produce.',
          fa: 'من در [[desalination|شیرین‌سازی آب]] کار می‌کنم: آب بحر را آب شیرین می‌سازیم. ما از همه کشورها بیشتر می‌سازیم.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Where does much of Saudi Arabia\'s fresh water come from?', es: '¿De dónde viene gran parte del agua dulce de Arabia Saudita?', fa: 'بیشتر آب شیرین عربستان سعودی از کجا می‌آید؟' },
        choices: [
          { ok: true, t: { en: 'Seawater turned into fresh water', es: 'Agua de mar convertida en agua dulce', fa: 'آب بحر که شیرین شده' },
            why: { en: 'That is desalination. It costs a lot of energy, but it works in a dry land.', es: 'Eso es la desalinización. Usa mucha energía, pero funciona en una tierra seca.', fa: 'این شیرین‌سازی آب است. انرژی زیاد مصرف می‌کند، اما در زمین خشک کار می‌کند.' } },
          { t: { en: 'Big rivers that flow all year', es: 'Ríos grandes que corren todo el año', fa: 'دریاهای بزرگی که تمام سال جاری هستند' },
            why: { en: 'Saudi Arabia has no rivers that flow all year.', es: 'Arabia Saudita no tiene ríos que corran todo el año.', fa: 'عربستان سعودی هیچ دریای جاری تمام‌سال ندارد.' } },
          { t: { en: 'Snow melting in its rainforests', es: 'Nieve que se derrite en sus selvas', fa: 'برف که در جنگل‌های بارانی آن آب می‌شود' },
            why: { en: 'Saudi Arabia is mostly desert, with no rainforests.', es: 'Arabia Saudita es casi todo desierto, sin selvas.', fa: 'عربستان سعودی بیشتر بیابان است و جنگل بارانی ندارد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 3, text: { en: 'TÜRKIYE · MOUNTAINS · The Tigris and the Euphrates start here. ↓ [[downstream|Downstream]]: Syria, then Iraq, then the Persian Gulf.',
      es: 'TURQUÍA · MONTAÑAS · Aquí nacen el Tigris y el Éufrates. ↓ [[downstream|Río abajo]]: Siria, luego Irak, luego el golfo Pérsico.',
      fa: 'ترکیه · کوه‌ها · دجله و فرات از این‌جا شروع می‌شوند. ↓ [[downstream|پایین دریا]]: سوریه، بعد عراق، بعد خلیج فارس.' } },
    { x: 27, y: 20, text: { en: 'PERSIAN GULF · Many of Saudi Arabia\'s biggest oil fields are near this coast. Ships carry the oil worldwide.',
                            es: 'GOLFO PÉRSICO · Muchos de los grandes campos de petróleo de Arabia Saudita están cerca de esta costa. Los barcos llevan el petróleo a todo el mundo.',
                            fa: 'خلیج فارس · بسیاری از بزرگ‌ترین میدان‌های نفت عربستان سعودی نزدیک این ساحل هستند. کشتی‌ها نفت را به سراسر جهان می‌برند.' } }
  ],

  /* the quest: Salem the camel herder (gold !) -> Zainab and her old clay map in the temple -> find the hidden oasis spring -> back to Salem */
  quest: {
    stat: 'hei',
    title: { en: 'The Hidden Oasis', es: 'El oasis escondido', fa: 'واحهٔ پنهان' },
    giver: {
      x: 29, y: 19,
      name: { en: 'Salem', es: 'Salem', fa: 'سالم' },
      role: { en: 'Camel herder in the desert', es: 'Pastor de camellos en el desierto', fa: 'شتربان در بیابان' },
      look: { skin: 4, hair: '#1a1410', shirt: '#f2efe6', pants: '#6a5a44', robe: true, hat: '#c9c2b0' },
      lines: [
        { en: 'Help, traveler! The Grump\'s sandstorm covered the old path to the [[oasis|oasis]].',
          es: '¡Ayuda, viajero! La tormenta de arena del Gruñón tapó el viejo camino al [[oasis|oasis]].',
          fa: 'کمک، مسافر! توفان ریگ غرغرو راه کهنهٔ [[oasis|واحه]] را پوشاند.' },
        { en: 'My camels are thirsty, and my water jar is empty.',
          es: 'Mis camellos tienen sed y mi jarra de agua está vacía.',
          fa: 'شترهایم تشنه هستند و کوزهٔ آبم خالی است.' },
        { en: 'The desert has no rivers. An oasis spring is the only water for days.',
          es: 'El desierto no tiene ríos. Un manantial de oasis es la única agua en muchos días.',
          fa: 'بیابان دریا ندارد. چشمهٔ واحه برای چند روز تنها آب است.' },
        { en: 'Zainab in the river temple has an old map. Will you ask her?',
          es: 'Zainab, en el templo del río, tiene un mapa viejo. ¿Le preguntas?',
          fa: 'زینب در معبد دریا یک نقشهٔ کهنه دارد. از او می‌پرسی؟' }
      ],
      wait: { en: 'Zainab is in the river temple, to the north. Its door is on the west.',
              es: 'Zainab está en el templo del río, al norte. Su puerta está al oeste.',
              fa: 'زینب در معبد دریا است، طرف شمال. دروازه‌اش طرف غرب است.' },
      thanks: { en: 'Fresh water, thank you! In a dry land, people, palms and animals gather at water.',
                es: '¡Agua fresca, gracias! En una tierra seca, la gente, las palmeras y los animales se reúnen alrededor del agua.',
                fa: 'آب تازه، تشکر! در زمین خشک، مردم، درختان خرما و حیوانات دور آب جمع می‌شوند.' }
    },
    contact: {
      x: 28, y: 7,
      name: { en: 'Zainab', es: 'Zainab', fa: 'زینب' },
      role: { en: 'Keeper of old clay maps', es: 'Guardiana de mapas viejos de barro', fa: 'نگهبان نقشه‌های کهنهٔ گِلی' },
      look: { skin: 1, hair: '#2a1d14', shirt: '#7a3f8f', pants: '#3a3040', style: 'bun' },
      lines: [
        { en: 'Long ago, people here drew maps on clay. This old map shows the [[oasis|oasis]].',
          es: 'Hace mucho, la gente de aquí dibujaba mapas en barro. Este mapa viejo muestra el [[oasis|oasis]].',
          fa: 'خیلی وقت پیش، مردم این‌جا نقشه را روی گِل می‌کشیدند. این نقشهٔ کهنه [[oasis|واحه]] را نشان می‌دهد.' },
        { en: 'Desert towns always grew next to a spring like this one.',
          es: 'Los pueblos del desierto siempre crecían junto a un manantial como este.',
          fa: 'شهرک‌های بیابان همیشه کنار چنین چشمه‌ای بزرگ می‌شدند.' },
        { en: 'Cross the river to the south, then walk west to the palm trees.',
          es: 'Cruza el río hacia el sur y luego camina al oeste hasta las palmeras.',
          fa: 'از دریا به طرف جنوب بگذر، بعد به طرف غرب تا درختان خرما برو.' },
        { en: 'Find the well under the palms in the far south-west. Then go two steps east.',
          es: 'Busca el pozo bajo las palmeras, en el lejano suroeste. Luego da dos pasos al este.',
          fa: 'چاه زیر درختان خرما را در دور جنوب غربی پیدا کن. بعد دو قدم به طرف شرق برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [5, 20],
      hint: { en: 'far south-west, 2 steps east of the well', es: 'lejos al suroeste, 2 pasos al este del pozo', fa: 'دور در جنوب غرب، ۲ قدم شرقِ چاه' },
      found: { en: 'Water bubbles up out of the sand! This is the [[oasis|oasis]] spring. You fill Salem\'s jar.',
               es: '¡El agua brota de la arena! Este es el manantial del [[oasis|oasis]]. Llenas la jarra de Salem.',
               fa: 'آب از میان ریگ می‌جوشد! این چشمهٔ [[oasis|واحه]] است. کوزهٔ سالم را پر می‌کنی.' },
      item: { icon: '🏺', name: { en: 'Jar of oasis water', es: 'Jarra de agua del oasis', fa: 'کوزهٔ آب واحه' } }
    }
  },

  scraps: [[1, 4], [30, 1], [1, 20]],
  smudges: [[19, 12], [12, 19]],

  challenge: {
    at: [20, 6],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the dam lever upstream (north, Türkiye) and the canal lever downstream (Syria)
    spots: [[12, 3], [12, 12]],
    stat: 'hei',
    title: { en: 'Temple of the Twin Rivers', es: 'Templo de los Ríos Gemelos', fa: 'معبد دو دریا' },
    intro: { en: 'The Euphrates starts in the mountains of Türkiye, then flows through Syria and Iraq. Whoever is [[upstream|upstream]] decides how much water goes down. Set the dam and the middle canal so all three farms get water.',
      es: 'El Éufrates nace en las montañas de Turquía y luego pasa por Siria e Irak. Quien está [[upstream|río arriba]] decide cuánta agua baja. Ajusta la represa y el canal del medio para que las tres granjas reciban agua.',
      fa: 'فرات از کوه‌های ترکیه شروع می‌شود، بعد از سوریه و عراق می‌گذرد. هر کس در [[upstream|بالای دریا]] باشد، تصمیم می‌گیرد چقدر آب به پایین برود. بند و کانال میانی را طوری تنظیم کن که هر سه کشتزار آب بگیرند.' },
    switches: [
      { name: { en: 'Upstream dam · Türkiye', es: 'Represa de río arriba · Turquía', fa: 'بند بالای دریا · ترکیه' }, icon: '🚧', start: 0,
        states: [{ en: 'Closed', es: 'Cerrada', fa: 'بسته' }, { en: 'Half open', es: 'Medio abierta', fa: 'نیمه باز' }, { en: 'Fully open', es: 'Totalmente abierta', fa: 'کاملاً باز' }] },
      { name: { en: 'Middle canal · Syria', es: 'Canal del medio · Siria', fa: 'کانال میانی · سوریه' }, icon: '🚪', start: 0,
        states: [{ en: 'Closed', es: 'Cerrado', fa: 'بسته' }, { en: 'Open', es: 'Abierto', fa: 'باز' }] }
    ],
    results: {
      '0,0': { ok: false, t: { en: 'The dam holds all the water back. Only the upstream farm in Türkiye is green.', es: 'La represa detiene toda el agua. Solo la granja de río arriba en Turquía está verde.', fa: 'بند همهٔ آب را نگه می‌دارد. فقط کشتزار بالای دریا در ترکیه سبز است.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: false, icon: '🏜️' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: false, icon: '🏜️' }] },
      '0,1': { ok: false, t: { en: 'The canal is open, but the dam lets no water through. Syria and Iraq stay dry.', es: 'El canal está abierto, pero la represa no deja pasar agua. Siria e Irak siguen secos.', fa: 'کانال باز است، اما بند هیچ آب را نمی‌گذارد برود. سوریه و عراق خشک می‌مانند.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: false, icon: '🏜️' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: false, icon: '🏜️' }] },
      '1,0': { ok: false, t: { en: 'Some water passes the dam and runs past the closed canal to Iraq. The middle farm in Syria stays dry.', es: 'Algo de agua pasa la represa y sigue de largo por el canal cerrado hasta Irak. La granja del medio en Siria sigue seca.', fa: 'کمی آب از بند می‌گذرد و از کنار کانال بسته تا عراق می‌رود. کشتزار میانی در سوریه خشک می‌ماند.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: false, icon: '🏜️' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: true, icon: '💧' }] },
      '1,1': { ok: false, t: { en: 'Only half the water gets through. The middle farm in Syria takes it all, so the farm in Iraq stays dry.', es: 'Solo pasa la mitad del agua. La granja del medio en Siria la toma toda, así que la granja de Irak sigue seca.', fa: 'فقط نیمی از آب می‌گذرد. کشتزار میانی در سوریه همه را می‌گیرد، پس کشتزار عراق خشک می‌ماند.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: true, icon: '💧' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: false, icon: '🏜️' }] },
      '2,0': { ok: false, t: { en: 'Plenty of water flows down, but the closed canal keeps it away from the middle farm in Syria.', es: 'Baja mucha agua, pero el canal cerrado no la deja llegar a la granja del medio en Siria.', fa: 'آب زیاد به پایین می‌رود، اما کانال بسته نمی‌گذارد به کشتزار میانی در سوریه برسد.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: false, icon: '🏜️' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: true, icon: '💧' }] },
      '2,1': { ok: true, t: { en: 'The dam is fully open and the canal is open. All three farms get water! Sharing the river helps everyone.', es: 'La represa está totalmente abierta y el canal también. ¡Las tres granjas reciben agua! Compartir el río ayuda a todos.', fa: 'بند کاملاً باز است و کانال هم باز است. هر سه کشتزار آب می‌گیرند! شریک شدن دریا به همه کمک می‌کند.' },
        show: [{ t: { en: 'Upstream · Türkiye', es: 'Río arriba · Turquía', fa: 'بالای دریا · ترکیه' }, ok: true, icon: '💧' }, { t: { en: 'Middle · Syria', es: 'Medio · Siria', fa: 'میانه · سوریه' }, ok: true, icon: '💧' }, { t: { en: 'Downstream · Iraq', es: 'Río abajo · Irak', fa: 'پایین دریا · عراق' }, ok: true, icon: '💧' }] }
    },
    otherwise: { ok: false, t: { en: 'Not every farm gets water yet. Try another setting.', es: 'Todavía no todas las granjas reciben agua. Prueba otra combinación.', fa: 'هنوز همهٔ کشتزارها آب نمی‌گیرند. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'Water reaches every farm! Choices made upstream shape life downstream.', es: '¡El agua llega a todas las granjas! Lo que se decide río arriba cambia la vida río abajo.', fa: 'آب به همهٔ کشتزارها می‌رسد! تصمیم‌های بالای دریا زندگی پایین دریا را شکل می‌دهند.' }
  },

  boss: {
    at: [20, 15],
    stat: 'reg',
    need: 3,
    name: { en: 'The Drought Grump', es: 'El Gruñón de la Sequía', fa: 'غرغروی خشکسالی' },
    appear: { en: 'The Drought Grump is waiting in the farmland, where the two rivers flow toward the Gulf!', es: '¡El Gruñón de la Sequía espera en los campos, donde los dos ríos corren hacia el golfo!', fa: 'غرغروی خشکسالی در کشتزارها انتظار می‌کشد، جایی که دو دریا به طرف خلیج می‌روند!' },
    taunt: { en: 'Sssss… I drank the rivers dry. Who needs water anyway?', es: 'Sssss… Me bebí los ríos hasta secarlos. ¿Quién necesita agua, de todos modos?', fa: 'سسسس… دریاها را نوشیدم تا خشک شدند. اصلاً کی به آب نیاز دارد؟' },
    win: { en: 'Rain falls on the mountains and the rivers run again. Atlas page 5.1 floats down into your hands!', es: 'Llueve en las montañas y los ríos vuelven a correr. ¡La página 5.1 del atlas cae en tus manos!', fa: 'روی کوه‌ها باران می‌بارد و دریاها دوباره جاری می‌شوند. صفحهٔ ۵.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Where do the Tigris and Euphrates rivers start?', es: '¿Dónde nacen los ríos Tigris y Éufrates?', fa: 'دریاهای دجله و فرات از کجا شروع می‌شوند؟' },
        choices: [{ en: 'In the mountains of Türkiye', es: 'En las montañas de Turquía', fa: 'در کوه‌های ترکیه' }, { en: 'In the deserts of Saudi Arabia', es: 'En los desiertos de Arabia Saudita', fa: 'در بیابان‌های عربستان سعودی' }, { en: 'In the Persian Gulf', es: 'En el golfo Pérsico', fa: 'در خلیج فارس' }, { en: 'In the Nile delta', es: 'En el delta del Nilo', fa: 'در دلتای نیل' }], answer: 0,
        why: { en: 'Snow melts in Türkiye\'s mountains. Then the rivers flow south through Syria and Iraq.', es: 'La nieve se derrite en las montañas de Turquía. Luego los ríos corren al sur por Siria e Irak.', fa: 'برف در کوه‌های ترکیه آب می‌شود. بعد دریاها به جنوب از سوریه و عراق می‌گذرند.' } },
      { q: { en: 'What does downstream mean?', es: '¿Qué significa río abajo?', fa: 'پایین دریا یعنی چه؟' },
        choices: [{ en: 'Closer to where a river ends', es: 'Más cerca de donde termina un río', fa: 'نزدیک‌تر به جایی که دریا تمام می‌شود' }, { en: 'Closer to where a river starts', es: 'Más cerca de donde nace un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' }, { en: 'Under the riverbed', es: 'Debajo del fondo del río', fa: 'زیر کف دریا' }, { en: 'Across the river', es: 'Al otro lado del río', fa: 'آن طرف دریا' }], answer: 0,
        why: { en: 'Iraq is downstream on the Tigris and Euphrates, close to where they reach the Gulf.', es: 'Irak está río abajo en el Tigris y el Éufrates, cerca de donde llegan al golfo.', fa: 'عراق در پایین دجله و فرات است، نزدیک جایی که به خلیج می‌رسند.' } },
      { q: { en: 'What is the Fertile Crescent?', es: '¿Qué es la Media Luna Fértil?', fa: 'هلال حاصلخیز چیست؟' },
        choices: [{ en: 'Curved farmland between two rivers', es: 'Tierra de cultivo curva entre dos ríos', fa: 'زمین زراعتی خمیده میان دو دریا' }, { en: 'A sandy desert shaped like the moon', es: 'Un desierto de arena con forma de luna', fa: 'بیابان ریگی به شکل مهتاب' }, { en: 'A chain of snowy mountains', es: 'Una cadena de montañas con nieve', fa: 'یک سلسلهٔ کوه‌های برفی' }, { en: 'An oil field near the sea', es: 'Un campo de petróleo cerca del mar', fa: 'یک میدان نفت نزدیک بحر' }], answer: 0,
        why: { en: 'Rich soil and river water let early farmers grow food between the Tigris and Euphrates.', es: 'La tierra rica y el agua del río dejaron que los primeros agricultores cultivaran entre el Tigris y el Éufrates.', fa: 'خاک خوب و آب دریا به دهقانان اولیه اجازه داد میان دجله و فرات غذا بکارند.' } },
      { q: { en: 'Why did cities in this dry region grow up along rivers?', es: '¿Por qué las ciudades de esta región seca crecieron junto a los ríos?', fa: 'چرا شهرهای این منطقهٔ خشک کنار دریاها بزرگ شدند؟' },
        choices: [{ en: 'A river was the only steady water supply', es: 'Un río era la única fuente de agua segura', fa: 'دریا تنها منبع همیشگی آب بود' }, { en: 'Rivers kept the cities cool in winter', es: 'Los ríos mantenían frescas las ciudades en invierno', fa: 'دریاها شهرها را در زمستان خنک نگه می‌داشتند' }, { en: 'Rivers marked the borders of countries', es: 'Los ríos marcaban las fronteras de los países', fa: 'دریاها سرحد کشورها را نشان می‌دادند' }, { en: 'Oil is always found next to rivers', es: 'El petróleo siempre está junto a los ríos', fa: 'نفت همیشه کنار دریا پیدا می‌شود' }], answer: 0,
        why: { en: 'In a dry land, the green land follows the water.', es: 'En una tierra seca, la tierra verde sigue al agua.', fa: 'در زمین خشک، زمین سبز دنبال آب می‌رود.' } },
      { q: { en: 'What is desalination?', es: '¿Qué es la desalinización?', fa: 'شیرین‌سازی آب چیست؟' },
        choices: [{ en: 'Turning seawater into fresh water', es: 'Convertir agua de mar en agua dulce', fa: 'تبدیل آب بحر به آب شیرین' }, { en: 'Pumping oil out of the ground', es: 'Sacar petróleo de la tierra', fa: 'کشیدن نفت از زیر زمین' }, { en: 'Building a tall dam across a river', es: 'Construir una represa alta en un río', fa: 'ساختن یک بند بلند روی دریا' }, { en: 'Adding salt to food', es: 'Echarle sal a la comida', fa: 'نمک زدن به غذا' }], answer: 0,
        why: { en: 'Desalination takes the salt out of seawater. It costs a lot of energy.', es: 'La desalinización le quita la sal al agua de mar. Usa mucha energía.', fa: 'شیرین‌سازی نمک را از آب بحر می‌گیرد. انرژی زیاد مصرف می‌کند.' } },
      { q: { en: 'What is the largest sand desert on Earth?', es: '¿Cuál es el desierto de arena más grande de la Tierra?', fa: 'بزرگ‌ترین بیابان ریگی روی زمین کدام است؟' },
        choices: [{ en: 'The Empty Quarter', es: 'El Cuarto Vacío', fa: 'ربع خالی' }, { en: 'The Gobi Desert', es: 'El desierto de Gobi', fa: 'بیابان گوبی' }, { en: 'The Kalahari Desert', es: 'El desierto de Kalahari', fa: 'بیابان کالاهاری' }, { en: 'The Mojave Desert', es: 'El desierto de Mojave', fa: 'بیابان موهاوی' }], answer: 0,
        why: { en: 'The Rub\' al Khali, on the Arabian Peninsula, is the largest sand desert on Earth.', es: 'El Rub al-Jali, en la península arábiga, es el desierto de arena más grande de la Tierra.', fa: 'ربع‌الخالی، در شبه‌جزیرهٔ عربستان، بزرگ‌ترین بیابان ریگی روی زمین است.' } },
      { q: { en: 'Two countries share one river. What can they sign to share the water fairly?', es: 'Dos países comparten un río. ¿Qué pueden firmar para repartir el agua de forma justa?', fa: 'دو کشور یک دریا را شریک هستند. برای تقسیم عادلانهٔ آب چه چیزی می‌توانند امضا کنند؟' },
        choices: [{ en: 'A treaty', es: 'Un tratado', fa: 'یک معاهده' }, { en: 'A map key', es: 'Una leyenda de mapa', fa: 'راهنمای نقشه' }, { en: 'A weather report', es: 'Un reporte del clima', fa: 'گزارش هوا' }, { en: 'A train ticket', es: 'Un boleto de tren', fa: 'تکت قطار' }], answer: 0,
        why: { en: 'In a treaty, each country signs and promises to follow the same rules.', es: 'En un tratado, cada país firma y promete seguir las mismas reglas.', fa: 'در معاهده، هر کشور امضا می‌کند و قول می‌دهد از یک قاعده پیروی کند.' } },
      { q: { en: 'What paid for many new roads, airports and cities in Saudi Arabia?', es: '¿Qué pagó muchas carreteras, aeropuertos y ciudades nuevas en Arabia Saudita?', fa: 'پول بسیاری از سرک‌ها، میدان‌های هوایی و شهرهای تازه در عربستان سعودی از کجا آمد؟' },
        choices: [{ en: 'Money from oil', es: 'El dinero del petróleo', fa: 'پول نفت' }, { en: 'Money from cocoa', es: 'El dinero del cacao', fa: 'پول کاکائو' }, { en: 'Money from rice farms', es: 'El dinero de los arrozales', fa: 'پول کشتزارهای شالی' }, { en: 'Money from snow', es: 'El dinero de la nieve', fa: 'پول برف' }], answer: 0,
        why: { en: 'Oil under the sand brought money that built roads, airports and modern cities.', es: 'El petróleo bajo la arena trajo dinero que construyó carreteras, aeropuertos y ciudades modernas.', fa: 'نفت زیر ریگ پولی آورد که سرک‌ها، میدان‌های هوایی و شهرهای نو را ساخت.' } }
    ]
  },

  learned: [
    { en: 'The Tigris and Euphrates start in Türkiye\'s mountains and flow [[downstream|downstream]] through Syria and Iraq. The land between them is part of the [[fertile crescent|Fertile Crescent]].', es: 'El Tigris y el Éufrates nacen en las montañas de Turquía y corren [[downstream|río abajo]] por Siria e Irak. La tierra entre ellos es parte de la [[fertile crescent|Media Luna Fértil]].', fa: 'دجله و فرات از کوه‌های ترکیه شروع می‌شوند و به [[downstream|پایین دریا]] از سوریه و عراق می‌گذرند. زمین میان آن‌ها بخشی از [[fertile crescent|هلال حاصلخیز]] است.' },
    { en: 'A [[dam|dam]] [[upstream|upstream]] decides how much water reaches farms downstream. A [[treaty|treaty]] can help countries share a river.', es: 'Una [[dam|represa]] [[upstream|río arriba]] decide cuánta agua llega a las granjas de río abajo. Un [[treaty|tratado]] puede ayudar a los países a compartir un río.', fa: 'یک [[dam|بند]] در [[upstream|بالای دریا]] تصمیم می‌گیرد چقدر آب به کشتزارهای پایین برسد. یک [[treaty|معاهده]] می‌تواند به کشورها در شریک شدن دریا کمک کند.' },
    { en: 'Saudi Arabia has huge deserts, oil and [[water scarcity|water scarcity]]. It uses [[desalination|desalination]] to make fresh water from the sea.', es: 'Arabia Saudita tiene desiertos enormes, petróleo y [[water scarcity|escasez de agua]]. Usa la [[desalination|desalinización]] para hacer agua dulce del mar.', fa: 'عربستان سعودی بیابان‌های بزرگ، نفت و [[water scarcity|کم‌آبی]] دارد. با [[desalination|شیرین‌سازی آب]] از آب بحر آب شیرین می‌سازد.' }
  ],
  reflect: {
    q: { en: 'Where does the water in your home come from? What would change in your day if there were much less of it?', es: '¿De dónde viene el agua de tu casa? ¿Qué cambiaría en tu día si hubiera mucha menos?', fa: 'آب خانهٔ تو از کجا می‌آید؟ اگر آب خیلی کمتر باشد، در روز تو چه تغییر می‌کند؟' },
    starter: { en: 'I think the water in my home comes from', es: 'Creo que el agua de mi casa viene de', fa: 'فکر می‌کنم آب خانهٔ من از' }
  }
};
