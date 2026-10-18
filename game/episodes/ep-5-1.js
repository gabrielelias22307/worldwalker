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
    { en: 'Pip: "The Smudge dried up the twin rivers! Talk to the engineer in Türkiye\'s mountains, the farmer in Iraq and the water engineer from Saudi Arabia. Then solve the puzzle in the river temple."',
      es: 'Pip: "¡El Borrón secó los ríos gemelos! Habla con la ingeniera en las montañas de Turquía, el agricultor en Irak y la ingeniera de agua de Arabia Saudita. Luego resuelve el acertijo en el templo del río."',
      fa: 'پیپ: «لکه دو دریا را خشک کرد! با انجنیر در کوه‌های ترکیه، دهقان در عراق و انجنیر آب از عربستان سعودی گپ بزن. بعد معمای معبد دریا را حل کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Top-left: Türkiye's mountains, river springs and a dam. Top-right: the temple (door on its west wall).
     Bottom: the rivers cross farmland to the Gulf; desert, an oasis and oil pumps in the south. */
  map: [
    'MAAAAAAAAAAAAAAADDDDDDD~~DDDDDDD',
    'MAAA~nMAAAA~MAAAD2222f~~~~fffffD',
    'MMMM~MMnnMM~MMMMD2222~~~~~fffffD',
    'MMM.~.x....~..MMD2222ffWWffffffD',
    'M..~~~.....~.M..Dffffff~~fffoooD',
    'M..~~~.P...~....dffffff~~W~~o1oD',
    'M..WWW.....~....Dffffff~~fffoooD',
    'M...~......b....Dffffff~~ffffffD',
    'M.P.~......~.P..Dffffff~~ffffffD',
    'M...b....P.~....Do1ooo1oooo1oooD',
    'M...~......~....DDDDDDDDDDDDDDDD',
    'r...~.www..~sssssssssssssss~~~~r',
    'r...~.www..~............sss~===r',
    'r...~......~~~~~B~~~~~~~~ss~===r',
    'r...~.wwww.........1o1o.~ss~===r',
    'r...~.wwww...wwwww......~~~~===r',
    'rsss~........wwwww......~ss~===r',
    'rsss~~~~B~~~~~~~~~B~~~~~~ss~~~~r',
    'ruupssssssussussssssIsIsssssIssr',
    'rsp~pssusssussussIssssssssIssssr',
    'rssOssusssssussusssssssIsssxsssr',
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr'
  ],
  start: [8, 4],

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
        { en: 'Merhaba! That means hello in Turkish. I am Elif, an engineer. Snow falls on these mountains in winter. In spring it melts and feeds two great rivers: the Tigris and the Euphrates.',
          es: '¡Merhaba! Así se dice hola en turco. Soy Elif, ingeniera. En invierno cae nieve en estas montañas. En primavera se derrite y alimenta dos grandes ríos: el Tigris y el Éufrates.',
          fa: 'مرحبا! این به زبان ترکی یعنی سلام. من الیف هستم، یک انجنیر. در زمستان روی این کوه‌ها برف می‌بارد. در بهار برف آب می‌شود و دو دریای بزرگ را پر می‌کند: دجله و فرات.',
          easy: { en: 'Hi! I am Elif. Snow melts on these mountains and starts two rivers: the Tigris and the Euphrates.', es: '¡Hola! Soy Elif. La nieve se derrite en estas montañas y forma dos ríos: el Tigris y el Éufrates.', fa: 'سلام! من الیف هستم. برف روی این کوه‌ها آب می‌شود و دو دریا را شروع می‌کند: دجله و فرات.' } },
        { en: 'Here we are [[upstream|upstream]], close to where the rivers start. The rivers flow south through Syria and Iraq. Places closer to where a river ends are [[downstream|downstream]].',
          es: 'Aquí estamos [[upstream|río arriba]], cerca de donde nacen los ríos. Los ríos corren al sur por Siria e Irak. Los lugares más cerca de donde termina un río están [[downstream|río abajo]].',
          fa: 'ما این‌جا در [[upstream|بالای دریا]] هستیم، نزدیک جایی که دریاها شروع می‌شوند. دریاها به طرف جنوب از سوریه و عراق می‌گذرند. جاهایی که به آخر دریا نزدیک‌تر هستند [[downstream|پایین دریا]] هستند.',
          easy: { en: 'Near the start of a river is [[upstream|upstream]]. Near the end is [[downstream|downstream]].', es: 'Cerca del inicio de un río es [[upstream|río arriba]]. Cerca del final es [[downstream|río abajo]].', fa: 'نزدیک شروع دریا [[upstream|بالای دریا]] است. نزدیک آخر آن [[downstream|پایین دریا]] است.' } },
        { en: 'Türkiye built big [[dam|dams]], like the Atatürk Dam on the Euphrates. A dam holds water back. It makes electricity and saves water for dry months. But it also changes how much water flows to the next country.',
          es: 'Turquía construyó grandes [[dam|represas]], como la represa Atatürk en el Éufrates. Una represa detiene el agua. Produce electricidad y guarda agua para los meses secos. Pero también cambia cuánta agua llega al siguiente país.',
          fa: 'ترکیه [[dam|بندهای]] بزرگ ساخت، مثل بند اتاترک روی دریای فرات. بند آب را نگه می‌دارد. برق تولید می‌کند و آب را برای ماه‌های خشک ذخیره می‌کند. اما این را هم تغییر می‌دهد که چقدر آب به کشور بعدی برسد.',
          easy: { en: 'A [[dam|dam]] holds water and makes electricity. It also means less water goes downstream.', es: 'Una [[dam|represa]] guarda agua y produce electricidad. También hace que baje menos agua río abajo.', fa: '[[dam|بند]] آب را نگه می‌دارد و برق می‌سازد. این یعنی آب کمتری به پایین دریا می‌رود.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What does upstream mean?', es: '¿Qué significa río arriba?', fa: 'بالای دریا یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'Closer to where a river starts', es: 'Más cerca de donde nace un río', fa: 'نزدیک‌تر به جایی که دریا شروع می‌شود' },
            why: { en: 'Türkiye\'s mountains are upstream, where the Tigris and Euphrates begin.', es: 'Las montañas de Turquía están río arriba, donde nacen el Tigris y el Éufrates.', fa: 'کوه‌های ترکیه در بالای دریا هستند، جایی که دجله و فرات شروع می‌شوند.' } },
          { t: { en: 'Closer to where a river ends', es: 'Más cerca de donde termina un río', fa: 'نزدیک‌تر به جایی که دریا تمام می‌شود' },
            why: { en: 'That is downstream.', es: 'Eso es río abajo.', fa: 'این پایین دریا است.' } },
          { t: { en: 'The deepest part of a river', es: 'La parte más profunda de un río', fa: 'عمیق‌ترین قسمت دریا' },
            why: { en: 'Upstream is about where, not how deep.', es: 'Río arriba habla de dónde, no de qué tan profundo.', fa: 'بالای دریا دربارهٔ جای آن است، نه عمق آن.' } }
        ]
      }
    },
    {
      x: 14, y: 14,
      name: { en: 'Abbas', es: 'Abbas', fa: 'عباس' },
      role: { en: 'Wheat and date farmer in Iraq', es: 'Agricultor de trigo y dátiles en Irak', fa: 'دهقان گندم و خرما در عراق' },
      look: { skin: 2, hair: '#222222', shirt: '#e8e2d0', robe: true },
      lines: [
        { en: 'Salaam! I am Abbas. My family grows wheat and dates by the river in Iraq. The land between the Tigris and the Euphrates is part of the [[fertile crescent|Fertile Crescent]], a curved strip of good farmland.',
          es: '¡Salam! Soy Abbas. Mi familia cultiva trigo y dátiles junto al río en Irak. La tierra entre el Tigris y el Éufrates es parte de la [[fertile crescent|Media Luna Fértil]], una franja curva de buena tierra de cultivo.',
          fa: 'سلام! من عباس هستم. خانوادهٔ من کنار دریا در عراق گندم و خرما می‌کارد. زمین میان دجله و فرات بخشی از [[fertile crescent|هلال حاصلخیز]] است، یک نوار خمیده از زمین خوب زراعتی.',
          easy: { en: 'I farm by the river in Iraq. This good farmland is called the [[fertile crescent|Fertile Crescent]].', es: 'Cultivo junto al río en Irak. Esta buena tierra se llama la [[fertile crescent|Media Luna Fértil]].', fa: 'من کنار دریا در عراق کشت می‌کنم. این زمین خوب [[fertile crescent|هلال حاصلخیز]] نام دارد.' } },
        { en: 'Thousands of years ago, farmers here dug canals to bring river water to their fields. Some of the first cities and the first writing began here, in ancient Mesopotamia.',
          es: 'Hace miles de años, los agricultores de aquí cavaron canales para llevar agua del río a sus campos. Algunas de las primeras ciudades y la primera escritura nacieron aquí, en la antigua Mesopotamia.',
          fa: 'هزاران سال پیش، دهقانان این‌جا کانال کندند تا آب دریا را به کشتزارهای خود ببرند. بعضی از اولین شهرها و اولین نوشتن در همین‌جا، در بین‌النهرین کهن، شروع شد.',
          easy: { en: 'Long ago, farmers here dug canals. Some of the first cities and writing started here.', es: 'Hace mucho, los agricultores de aquí cavaron canales. Aquí empezaron algunas de las primeras ciudades y la escritura.', fa: 'خیلی وقت پیش، دهقانان این‌جا کانال کندند. بعضی از اولین شهرها و نوشتن از این‌جا شروع شد.' } },
        { en: 'We are far [[downstream|downstream]]. When dams upstream hold water back, less reaches our fields. Countries that share a river can sign a [[treaty|treaty]] to split the water, or they can end up arguing about it.',
          es: 'Nosotros estamos muy [[downstream|río abajo]]. Cuando las represas de río arriba detienen el agua, llega menos a nuestros campos. Los países que comparten un río pueden firmar un [[treaty|tratado]] para repartir el agua, o pueden terminar peleando por ella.',
          fa: 'ما خیلی [[downstream|پایین دریا]] هستیم. وقتی بندهای بالای دریا آب را نگه می‌دارند، آب کمتری به کشتزارهای ما می‌رسد. کشورهایی که یک دریا را شریک هستند می‌توانند یک [[treaty|معاهده]] امضا کنند تا آب را تقسیم کنند، یا ممکن است سر آن جنجال کنند.',
          easy: { en: 'We are [[downstream|downstream]]. Dams upstream mean less water for us. A [[treaty|treaty]] can help share it.', es: 'Estamos [[downstream|río abajo]]. Las represas de arriba nos dejan menos agua. Un [[treaty|tratado]] puede ayudar a compartirla.', fa: 'ما [[downstream|پایین دریا]] هستیم. بندهای بالا یعنی آب کمتر برای ما. یک [[treaty|معاهده]] می‌تواند در تقسیم آن کمک کند.' } }
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
      lines: [
        { en: 'Marhaba! That means hello in Arabic. I am Nourah, from Saudi Arabia. Much of my country is desert. The Rub\' al Khali, or Empty Quarter, is the largest sand desert on Earth.',
          es: '¡Marhaba! Así se dice hola en árabe. Soy Nourah, de Arabia Saudita. Gran parte de mi país es desierto. El Rub al-Jali, o Cuarto Vacío, es el desierto de arena más grande de la Tierra.',
          fa: 'مرحبا! این به زبان عربی یعنی سلام. من نوره هستم، از عربستان سعودی. بیشتر کشور من بیابان است. ربع‌الخالی، یعنی «ربع خالی»، بزرگ‌ترین بیابان ریگی روی زمین است.',
          easy: { en: 'Hi! I am Nourah from Saudi Arabia. Much of my country is desert.', es: '¡Hola! Soy Nourah, de Arabia Saudita. Gran parte de mi país es desierto.', fa: 'سلام! من نوره از عربستان سعودی هستم. بیشتر کشور من بیابان است.' } },
        { en: 'Saudi Arabia has no rivers that flow all year. That is [[water scarcity|water scarcity]]. Long ago, towns grew around an [[oasis|oasis]], a spring in the desert where palm trees grow.',
          es: 'Arabia Saudita no tiene ríos que corran todo el año. Eso es [[water scarcity|escasez de agua]]. Hace mucho, los pueblos crecieron alrededor de un [[oasis|oasis]], un manantial en el desierto donde crecen palmeras.',
          fa: 'عربستان سعودی هیچ دریایی ندارد که تمام سال جاری باشد. این [[water scarcity|کم‌آبی]] است. در گذشته، شهرک‌ها دور یک [[oasis|واحه]] ساخته می‌شدند، یعنی چشمه‌ای در بیابان که درخت خرما در آن می‌روید.',
          easy: { en: 'There are no rivers that flow all year here. Towns grew around an [[oasis|oasis]].', es: 'Aquí no hay ríos que corran todo el año. Los pueblos crecieron alrededor de un [[oasis|oasis]].', fa: 'این‌جا دریایی نیست که تمام سال جاری باشد. شهرک‌ها دور [[oasis|واحه]] ساخته شدند.' } },
        { en: 'Under the sand is oil. Oil money built roads, airports and big cities. I work at a plant that does [[desalination|desalination]]: it turns seawater into fresh water. Saudi Arabia makes more fresh water from the sea than any other country.',
          es: 'Bajo la arena hay petróleo. El dinero del petróleo construyó carreteras, aeropuertos y ciudades grandes. Trabajo en una planta de [[desalination|desalinización]]: convierte agua de mar en agua dulce. Arabia Saudita hace más agua dulce del mar que cualquier otro país.',
          fa: 'زیر ریگ نفت است. پول نفت سرک‌ها، میدان‌های هوایی و شهرهای بزرگ را ساخت. من در یک کارخانهٔ [[desalination|شیرین‌سازی آب]] کار می‌کنم: آب بحر را به آب شیرین تبدیل می‌کند. عربستان سعودی از هر کشور دیگر بیشتر از بحر آب شیرین می‌سازد.',
          easy: { en: 'Oil money built cities. My plant makes fresh water from seawater. That is [[desalination|desalination]].', es: 'El dinero del petróleo construyó ciudades. Mi planta hace agua dulce del agua de mar. Eso es la [[desalination|desalinización]].', fa: 'پول نفت شهرها را ساخت. کارخانهٔ من از آب بحر آب شیرین می‌سازد. این [[desalination|شیرین‌سازی آب]] است.' } }
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
    { x: 27, y: 20, text: { en: 'PERSIAN GULF · Many of Saudi Arabia\'s biggest oil fields sit near this coast. Ships carry the oil all over the world.',
      es: 'GOLFO PÉRSICO · Muchos de los campos de petróleo más grandes de Arabia Saudita están cerca de esta costa. Los barcos llevan el petróleo a todo el mundo.',
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
        { en: 'Help, traveler! The Smudge\'s sandstorm covered the old path to the [[oasis|oasis]]. My camels are thirsty, and my water jar is empty.',
          es: '¡Ayuda, viajero! La tormenta de arena del Borrón tapó el viejo camino al [[oasis|oasis]]. Mis camellos tienen sed y mi jarra de agua está vacía.',
          fa: 'کمک، مسافر! توفان ریگ لکه راه کهنهٔ [[oasis|واحه]] را پوشاند. شترهایم تشنه هستند و کوزهٔ آبم خالی است.' },
        { en: 'In the desert, there are no rivers. An oasis spring is the only water for many days. Zainab in the river temple has an old map. Will you ask her?',
          es: 'En el desierto no hay ríos. Un manantial de oasis es la única agua en muchos días. Zainab, en el templo del río, tiene un mapa viejo. ¿Le preguntas?',
          fa: 'در بیابان دریا نیست. چشمهٔ واحه برای چند روز تنها آب است. زینب در معبد دریا یک نقشهٔ کهنه دارد. از او می‌پرسی؟' }
      ],
      wait: { en: 'Zainab is in the river temple, to the north. Its door is on the west wall.',
        es: 'Zainab está en el templo del río, al norte. Su puerta está en la pared oeste.',
        fa: 'زینب در معبد دریا است، طرف شمال. دروازه‌اش در دیوار غربی است.' },
      thanks: { en: 'Cool, fresh water! Thank you. Now my camels can drink. In a dry land, people, palms and animals all gather around the water.',
        es: '¡Agua fresca y limpia! Gracias. Ahora mis camellos pueden beber. En una tierra seca, la gente, las palmeras y los animales se juntan alrededor del agua.',
        fa: 'آب سرد و تازه! تشکر. حالا شترهایم می‌توانند آب بنوشند. در زمین خشک، مردم، درختان خرما و حیوانات همه دور آب جمع می‌شوند.' }
    },
    contact: {
      x: 28, y: 7,
      name: { en: 'Zainab', es: 'Zainab', fa: 'زینب' },
      role: { en: 'Keeper of old clay maps', es: 'Guardiana de mapas viejos de barro', fa: 'نگهبان نقشه‌های کهنهٔ گِلی' },
      look: { skin: 1, hair: '#2a1d14', shirt: '#7a3f8f', pants: '#3a3040', style: 'bun' },
      lines: [
        { en: 'Long ago, people here drew maps on clay. This old map shows the [[oasis|oasis]]. Desert towns always grew next to a spring like this one.',
          es: 'Hace mucho, la gente de aquí dibujaba mapas en barro. Este mapa viejo muestra el [[oasis|oasis]]. Los pueblos del desierto siempre crecían junto a un manantial como este.',
          fa: 'خیلی وقت پیش، مردم این‌جا نقشه را روی گِل می‌کشیدند. این نقشهٔ کهنه [[oasis|واحه]] را نشان می‌دهد. شهرک‌های بیابان همیشه کنار چنین چشمه‌ای بزرگ می‌شدند.' },
        { en: 'Cross the river to the south. Walk west to the palm trees in the far south-west corner. Find the well under the palms. Then take two steps east.',
          es: 'Cruza el río hacia el sur. Camina al oeste hasta las palmeras en la esquina suroeste. Busca el pozo bajo las palmeras. Luego da dos pasos al este.',
          fa: 'از دریا به طرف جنوب بگذر. به طرف غرب تا درختان خرما در گوشهٔ جنوب غربی برو. چاه زیر درختان خرما را پیدا کن. بعد دو قدم به طرف شرق برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [5, 20],
      hint: { en: 'far south-west, 2 steps east of the well', es: 'lejos al suroeste, 2 pasos al este del pozo', fa: 'دور در جنوب غرب، ۲ قدم شرقِ چاه' },
      found: { en: 'Water bubbles up out of the sand! This is the [[oasis|oasis]] spring. You fill Salem\'s jar with cool water.',
        es: '¡El agua brota de la arena! Este es el manantial del [[oasis|oasis]]. Llenas la jarra de Salem con agua fresca.',
        fa: 'آب از میان ریگ می‌جوشد! این چشمهٔ [[oasis|واحه]] است. کوزهٔ سالم را با آب سرد پر می‌کنی.' },
      item: { icon: '🏺', name: { en: 'Jar of oasis water', es: 'Jarra de agua del oasis', fa: 'کوزهٔ آب واحه' } }
    }
  },

  scraps: [[1, 4], [30, 1], [1, 20]],
  smudges: [[19, 12], [12, 19]],

  challenge: {
    at: [20, 6],
    type: 'combo',
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
    name: { en: 'The Drought Smudge', es: 'El Borrón de la Sequía', fa: 'لکهٔ خشکسالی' },
    appear: { en: 'The Drought Smudge is waiting in the farmland, where the two rivers flow toward the Gulf!', es: '¡El Borrón de la Sequía espera en los campos, donde los dos ríos corren hacia el golfo!', fa: 'لکهٔ خشکسالی در کشتزارها انتظار می‌کشد، جایی که دو دریا به طرف خلیج می‌روند!' },
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
        choices: [{ en: 'A curved strip of good farmland between two rivers', es: 'Una franja curva de buena tierra de cultivo entre dos ríos', fa: 'نوار خمیده‌ای از زمین خوب زراعتی میان دو دریا' }, { en: 'A desert shaped like the moon', es: 'Un desierto con forma de luna', fa: 'بیابانی به شکل مهتاب' }, { en: 'A chain of snowy mountains', es: 'Una cadena de montañas con nieve', fa: 'یک سلسلهٔ کوه‌های برفی' }, { en: 'An oil field near the sea', es: 'Un campo de petróleo cerca del mar', fa: 'یک میدان نفت نزدیک بحر' }], answer: 0,
        why: { en: 'Rich soil and river water let early farmers grow food between the Tigris and Euphrates.', es: 'La tierra rica y el agua del río dejaron que los primeros agricultores cultivaran entre el Tigris y el Éufrates.', fa: 'خاک خوب و آب دریا به دهقانان اولیه اجازه داد میان دجله و فرات غذا بکارند.' } },
      { q: { en: 'Why did cities in this dry region grow up along rivers?', es: '¿Por qué las ciudades de esta región seca crecieron junto a los ríos?', fa: 'چرا شهرهای این منطقهٔ خشک کنار دریاها بزرگ شدند؟' },
        choices: [{ en: 'A river was the only steady water supply', es: 'Un río era la única fuente de agua segura', fa: 'دریا تنها منبع همیشگی آب بود' }, { en: 'Rivers kept the cities cool in winter', es: 'Los ríos mantenían frescas las ciudades en invierno', fa: 'دریاها شهرها را در زمستان خنک نگه می‌داشتند' }, { en: 'Rivers marked the borders of countries', es: 'Los ríos marcaban las fronteras de los países', fa: 'دریاها سرحد کشورها را نشان می‌دادند' }, { en: 'Oil is always found next to rivers', es: 'El petróleo siempre está junto a los ríos', fa: 'نفت همیشه کنار دریا پیدا می‌شود' }], answer: 0,
        why: { en: 'In a dry land, the green land follows the water.', es: 'En una tierra seca, la tierra verde sigue al agua.', fa: 'در زمین خشک، زمین سبز دنبال آب می‌رود.' } },
      { q: { en: 'What is desalination?', es: '¿Qué es la desalinización?', fa: 'شیرین‌سازی آب چیست؟' },
        choices: [{ en: 'Turning seawater into fresh water', es: 'Convertir agua de mar en agua dulce', fa: 'تبدیل آب بحر به آب شیرین' }, { en: 'Pumping oil out of the ground', es: 'Sacar petróleo de la tierra', fa: 'کشیدن نفت از زیر زمین' }, { en: 'Building a dam across a river', es: 'Construir una represa en un río', fa: 'ساختن بند روی دریا' }, { en: 'Adding salt to food', es: 'Echarle sal a la comida', fa: 'نمک زدن به غذا' }], answer: 0,
        why: { en: 'Desalination takes the salt out of seawater. It costs a lot of energy.', es: 'La desalinización le quita la sal al agua de mar. Usa mucha energía.', fa: 'شیرین‌سازی نمک را از آب بحر می‌گیرد. انرژی زیاد مصرف می‌کند.' } },
      { q: { en: 'What is the largest sand desert on Earth?', es: '¿Cuál es el desierto de arena más grande de la Tierra?', fa: 'بزرگ‌ترین بیابان ریگی روی زمین کدام است؟' },
        choices: [{ en: 'The Rub\' al Khali (Empty Quarter)', es: 'El Rub al-Jali (Cuarto Vacío)', fa: 'ربع‌الخالی (ربع خالی)' }, { en: 'The Gobi Desert', es: 'El desierto de Gobi', fa: 'بیابان گوبی' }, { en: 'The Kalahari Desert', es: 'El desierto de Kalahari', fa: 'بیابان کالاهاری' }, { en: 'The Mojave Desert', es: 'El desierto de Mojave', fa: 'بیابان موهاوی' }], answer: 0,
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
