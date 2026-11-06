/* TIMEWALKER · Episode 5.3 · Imperialism in Africa and India (WHII)
   Two shores of the Indian Ocean in 1885, the year of the Berlin Conference and of the first Indian National Congress.
   West half (x 0-12): Zanzibar, East Africa. Stone Town (flat roofs J), the market (m), the old fort (W), the House of
   Wonders (the big J with a door), clove trees (T), a Swahili farm hut (H over N) and coconut palms (p).
   x 13-18: the Indian Ocean. Rows 4 and 15: two docks (k) and the dhow route (b) between the shores.
   East half (x 19-31): Bombay (Mumbai), India. Houses (R over h), cotton mills (X), the college (Q over h) where the
   Indian National Congress first met in December 1885, the market (m) and the railway (row 18) with its station (J).
   Hard topic (brief, "Hard topics"): told from African and Indian points of view, with their resistance. Serious words,
   no jokes; the boss is The Forgetting. The quest is about carrying news, a letter, so people know what happened. */
window.EPISODE = {
  id: '5.3',
  realm: 5,
  sol: 'WHII',
  title: { en: 'Imperialism', es: 'El imperialismo', fa: 'امپریالیزم' },
  place: { en: 'Zanzibar and Bombay, 1885', es: 'Zanzíbar y Bombay, 1885', fa: 'زنگبار و بمبئی، ۱۸۸۵' },
  intro: [
    { en: 'The Grump tore the [[imperialism|imperialism]] page. People forget those who were ruled, and who resisted.',
      es: 'El Gruñón rompió la página del [[imperialism|imperialismo]]. La gente olvida a quienes fueron gobernados y a quienes resistieron.',
      fa: 'غرغرو صفحهٔ [[imperialism|امپریالیزم]] را پاره کرد. مردم کسانی را که زیر حکم بودند و مقاومت کردند فراموش می‌کنند.' },
    { en: 'Listen to the 3 people here, then fix the time stone.',
      es: 'Escucha a las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'به ۳ نفر اینجا گوش بده، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: the Indian Ocean between Zanzibar and Bombay on the world map, 1885 on the timeline */
  scenes: {
    at: [56, 6],
    year: 1885,
    start: [
      { en: 'By 1885, Europe\'s factories wanted more raw materials and more buyers.',
        es: 'Para 1885, las fábricas de Europa querían más materias primas y más compradores.',
        fa: 'تا ۱۸۸۵، فابریکه‌های اروپا مواد خام بیشتر و خریدار بیشتر می‌خواستند.' },
      { en: 'Strong nations took control of faraway lands. This is called imperialism.',
        es: 'Las naciones fuertes tomaron el control de tierras lejanas. Esto se llama imperialismo.',
        fa: 'ملت‌های قوی سرزمین‌های دور را زیر کنترول گرفتند. این را امپریالیزم می‌گویند.' },
      { en: 'In Africa and India, many people fought to keep their freedom.',
        es: 'En África y la India, mucha gente luchó por conservar su libertad.',
        fa: 'در افریقا و هند، مردم زیاد برای نگه داشتن آزادی خود مبارزه کردند.' }
    ],
    page: { en: 'By 1914, Europeans ruled almost all of Africa. Only Ethiopia and Liberia stayed free.',
      es: 'Para 1914, los europeos gobernaban casi toda África. Solo Etiopía y Liberia siguieron libres.',
      fa: 'تا ۱۹۱۴، اروپایی‌ها بر تقریباً تمام افریقا حکومت می‌کردند. فقط ایتوپیا و لایبریا آزاد ماندند.' },
    guess: {
      q: { en: 'In 1885, who decided where Africa\'s new borders would go?', es: 'En 1885, ¿quién decidió dónde irían las nuevas fronteras de África?', fa: 'در ۱۸۸۵، کی تصمیم گرفت سرحدهای نو افریقا کجا باشند؟' },
      choices: [
        { t: { en: 'European leaders', es: 'Líderes europeos', fa: 'رهبران اروپایی' }, ok: true },
        { t: { en: 'African leaders', es: 'Líderes africanos', fa: 'رهبران افریقایی' } }
      ],
      why: { en: 'European leaders met in Berlin and drew the lines. No African was invited.', es: 'Los líderes europeos se reunieron en Berlín y trazaron las líneas. No invitaron a ningún africano.', fa: 'رهبران اروپایی در برلین جمع شدند و خط‌ها را کشیدند. هیچ افریقایی دعوت نشد.' }
    },
    next: {
      q: { en: 'Next: World War I. Did empires and nationalism help cause it?', es: 'Ahora: la Primera Guerra Mundial. ¿Los imperios y el nacionalismo ayudaron a causarla?', fa: 'بعدی: جنگ جهانی اول. آیا امپراتوری‌ها و ملی‌گرایی به شروع آن کمک کردند؟' },
      choices: [
        { t: { en: 'Yes, they did', es: 'Sí, ayudaron', fa: 'بله، کمک کردند' }, ok: true },
        { t: { en: 'No, not at all', es: 'No, para nada', fa: 'نه، اصلاً' } }
      ],
      why: { en: 'Rivalry over colonies and strong nationalism pushed Europe toward a huge war in 1914.', es: 'La rivalidad por las colonias y el nacionalismo fuerte llevaron a Europa a una gran guerra en 1914.', fa: 'رقابت بر سر مستعمره‌ها و ملی‌گرایی قوی اروپا را در ۱۹۱۴ به یک جنگ بزرگ کشاند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [3, 2], name: { en: 'Bi Zawadi', es: 'Bi Zawadi', fa: 'بی زوادی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#c0392b', pants: '#e0a020', style: 'long' },
      lines: [
        { en: 'Karibu! My family has lived in Zanzibar for many generations. We are Swahili.', es: '¡Karibu! Mi familia vive en Zanzíbar desde hace muchas generaciones. Somos suajilis.', fa: 'کاریبو! خانوادهٔ من نسل‌ها در زنگبار زندگی کرده. ما سواحیلی هستیم.' },
        { en: 'Our ships traded with Arabia and India long before Europeans came.', es: 'Nuestros barcos comerciaban con Arabia y la India mucho antes de que llegaran los europeos.', fa: 'کشتی‌های ما خیلی پیش از آمدن اروپایی‌ها با عربستان و هند تجارت می‌کردند.' }
      ] },
    { at: [8, 2], name: { en: 'Mr. Jivanji', es: 'Señor Jivanji', fa: 'آقای جیوانجی' },
      look: { skin: 3, hair: '#1a1208', shirt: '#f2f2f2', pants: '#2a2a3a', hat: '#8a2a2a' },
      lines: [
        { en: 'My family came from Gujarat, in India. Many Indian merchants live in Zanzibar.', es: 'Mi familia vino de Guyarat, en la India. Muchos comerciantes indios viven en Zanzíbar.', fa: 'خانوادهٔ من از گجرات هند آمده. سوداگران زیاد هندی در زنگبار زندگی می‌کنند.' },
        { en: 'I write to my cousin in Bombay. News crosses the ocean by ship.', es: 'Le escribo a mi primo en Bombay. Las noticias cruzan el océano en barco.', fa: 'من به پسر کاکایم در بمبئی نامه می‌نویسم. خبر با کشتی از بحر می‌گذرد.' }
      ] },
    { at: [5, 8], name: { en: 'Saidi', es: 'Saidi', fa: 'سعیدی' },
      look: { skin: 4, hair: '#120c08', shirt: '#e8e0d0', pants: '#3a3a4a', robe: true, hat: '#f2f2f2' },
      lines: [
        { en: 'I am a clerk in the House of Wonders. Our Sultan built it in 1883.', es: 'Soy escribiente en la Casa de las Maravillas. Nuestro sultán la construyó en 1883.', fa: 'من منشی خانهٔ عجایب هستم. سلطان ما آن را در ۱۸۸۳ ساخت.' },
        { en: 'This year our Sultan, Barghash, wrote letters against Germany\'s claims on our land.', es: 'Este año, nuestro sultán Barghash escribió cartas contra lo que Alemania reclama de nuestra tierra.', fa: 'امسال سلطان ما، برغش، علیه ادعای آلمان بر زمین ما نامه نوشت.' }
      ] },
    { at: [8, 15], name: { en: 'Mama Rehema', es: 'Mamá Rehema', fa: 'ماما رحیمه' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f8f5f', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'I grow cassava and coconuts on our small farm.', es: 'Siembro yuca y cocos en nuestra pequeña finca.', fa: 'من در زمین کوچک خود کاساوا و نارگیل می‌کارم.' },
        { en: 'My brother lives on the mainland. People there will not give up their land.', es: 'Mi hermano vive en el continente. Dice que la gente de allí no entregará su tierra.', fa: 'برادرم در خشکهٔ بزرگ زندگی می‌کند. می‌گوید مردم آنجا زمین خود را نمی‌دهند.' }
      ] },
    { at: [22, 2], name: { en: 'Grandpa Ramesh', es: 'Abuelo Ramesh', fa: 'پدرکلان رامش' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#e8dcc0', pants: '#e8dcc0', style: 'short' },
      lines: [
        { en: 'In 1857, Indian soldiers and others rose up against British rule. I remember.', es: 'En 1857, soldados indios y otras personas se levantaron contra el dominio británico. Lo recuerdo.', fa: 'در ۱۸۵۷، سربازان هندی و دیگران علیه حکومت بریتانیا قیام کردند. یادم است.' },
        { en: 'The British crushed it. Many Indians call it our First War of Independence.', es: 'Los británicos lo aplastaron. Muchos indios lo llaman nuestra Primera Guerra de Independencia.', fa: 'بریتانیا آن را سرکوب کرد. هندی‌های زیاد آن را اولین جنگ استقلال ما می‌گویند.' }
      ] },
    { at: [23, 7], name: { en: 'Anand', es: 'Anand', fa: 'آنند' },
      look: { skin: 3, hair: '#1a1008', shirt: '#f2f2f2', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I study law. In December, Indians from all over will meet here, in Bombay.', es: 'Estudio Derecho. En diciembre, indios de todas partes se reunirán aquí, en Bombay.', fa: 'من حقوق می‌خوانم. در دسمبر، هندی‌ها از هر جا اینجا در بمبئی جمع می‌شوند.' },
        { en: 'We will form the Indian National Congress, to ask for a voice in our government.', es: 'Formaremos el Congreso Nacional Indio, para pedir voz en nuestro gobierno.', fa: 'ما کنگرهٔ ملی هند را می‌سازیم تا در حکومت خود صدا بخواهیم.' }
      ] },
    { at: [22, 13], name: { en: 'Mrs. Kashibai', es: 'Señora Kashibai', fa: 'خانم کاشی‌بای' },
      look: { skin: 3, hair: '#120c08', shirt: '#8a2a5a', pants: '#e0a020', style: 'bun' },
      lines: [
        { en: 'From 1876 to 1878, a terrible famine came to India. Millions of people died.', es: 'De 1876 a 1878 hubo una hambruna terrible en la India. Murieron millones de personas.', fa: 'از ۱۸۷۶ تا ۱۸۷۸، قحطی سختی به هند آمد. میلیون‌ها نفر مردند.' },
        { en: 'Grain was still shipped away to sell. Our newspapers wrote about this injustice.', es: 'El grano se seguía enviando lejos para vender. Nuestros periódicos escribieron sobre esa injusticia.', fa: 'باز هم غله برای فروش به بیرون فرستاده شد. روزنامه‌های ما دربارهٔ این بی‌عدالتی نوشتند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. West: Zanzibar. x 13-18: the Indian Ocean; rows 4 and 15 are the docks and dhow route.
     East: Bombay, with the railway on row 18. */
  map: [
    'ppppppppppppp~====~WWWWWWWWWWWWW',
    'p.JJJ..JJJ..s~====~s.RRR..XXXX.W',
    'p.JdJ..JdJ..s~====~s.hdh..XXXX.W',
    'p.x.........s~====~s......XXXX.W',
    'p::::::::::::kbbbbkllllllllllllW',
    'p..mmm..WWW.s~====~s..x.....l..W',
    'p.......W.W.s~====~s.QQQQ...l..W',
    'p..JJJJ.....s~====~s.hhdh...l..W',
    'p..JJdJ.....s~====~s........l..W',
    'p...........s~====~s.p......l..W',
    'p..:........s~====~s........l..W',
    'p..:...TT...s~====~s........l..W',
    'p.TT:..TT...s~====~s.RRR....l..W',
    'p.TT:.......s~====~s.hdh....l..W',
    'p...:..HHH..s~====~s........l..W',
    'p::::::NdN:::kbbbbkllllllllllllW',
    'p...........s~====~s..mmm...l..W',
    'p.TTT..TT...s~====~s........l..W',
    'p.TTT..TT.p.s~====~s-----------W',
    'p.......,...s~====~s.JJJ..x....W',
    'p..p.....p..s~====~s.JJJ.......W',
    'ppppppppppppp~====~WWWWWWWWWWWWW'
  ],
  start: [24, 20],

  finds: [
    { clueAt: [10, 9], at: [12, 11], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east and 2 steps south, to the shore.', es: 'Desde esta nota, camina 2 pasos al este y 2 pasos al sur, hasta la orilla.', fa: 'از این یادداشت، ۲ قدم به شرق و ۲ قدم به جنوب تا ساحل برو.' },
      text: { en: 'Monsoon winds carried dhows between East Africa and India for centuries. Here is a cowrie shell.', es: 'Los vientos del monzón llevaron dhows entre África del Este y la India por siglos. Aquí hay una concha de cauri.', fa: 'بادهای موسمی قرن‌ها کشتی‌های داو را میان افریقای شرقی و هند بردند. اینجا یک صدف کوری است.' } },
    { clueAt: [29, 8], at: [29, 11], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south along the east side of the street.', es: 'Desde esta nota, camina 3 pasos al sur por el lado este de la calle.', fa: 'از این یادداشت، ۳ قدم به جنوب در طرف شرق سرک برو.' },
      text: { en: 'Under the Raj, Indian rupee coins showed Britain\'s queen. Here is an old rupee.', es: 'Bajo el Raj, las monedas de rupia de la India mostraban a la reina británica. Aquí hay una rupia antigua.', fa: 'در دورهٔ راج، سکه‌های روپیهٔ هند تصویر ملکهٔ بریتانیا را داشتند. اینجا یک روپیهٔ کهنه است.' } }
  ],

  words: {
    imperialism: { en: 'when a strong country takes control of other lands and peoples', es: 'cuando un país fuerte toma el control de otras tierras y pueblos', fa: 'وقتی یک کشور قوی سرزمین‌ها و مردمان دیگر را زیر کنترول می‌گیرد' },
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    'berlin conference': { en: 'a meeting in 1884–1885 where European leaders made rules to divide Africa among themselves', es: 'una reunión en 1884–1885 donde líderes europeos hicieron reglas para repartirse África', fa: 'جلسه‌ای در ۱۸۸۴–۱۸۸۵ که رهبران اروپایی در آن برای تقسیم افریقا میان خود قانون ساختند' },
    resistance: { en: 'fighting back against a ruler, with weapons, words or refusing to obey', es: 'luchar contra un gobernante, con armas, palabras o negándose a obedecer', fa: 'مبارزه علیه حاکم، با سلاح، با کلمه یا با سرپیچی' },
    'raw material': { en: 'something from nature, like cotton, rubber or gold, that factories use to make goods', es: 'algo de la naturaleza, como algodón, caucho u oro, que las fábricas usan para hacer productos', fa: 'چیزی از طبیعت، مثل پخته، رابر یا طلا، که فابریکه‌ها برای ساختن اجناس به کار می‌برند' },
    raj: { en: 'British rule over India, from 1858 to 1947; raj means rule', es: 'el dominio británico sobre la India, de 1858 a 1947; raj significa gobierno', fa: 'حکومت بریتانیا بر هند، از ۱۸۵۸ تا ۱۹۴۷؛ راج یعنی حکومت' },
    dhow: { en: 'a wooden sailing ship used for trade on the Indian Ocean', es: 'un barco de vela de madera usado para comerciar en el océano Índico', fa: 'کشتی بادبانی چوبی که برای تجارت در بحر هند به کار می‌رفت' }
  },

  npcs: [
    {
      x: 5, y: 3,
      name: { en: 'Mwanaisha', es: 'Mwanaisha', fa: 'موانائیشا' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 5, hair: '#120c08', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Hujambo! That is hello in Swahili. I teach children to read and write.', es: '¡Hujambo! Así se dice hola en suajili. Enseño a los niños a leer y escribir.', fa: 'هوجامبو! این در سواحیلی یعنی سلام. من به اطفال خواندن و نوشتن یاد می‌دهم.' },
        { en: 'This year, leaders from 14 countries met in Berlin to divide Africa.', es: 'Este año, líderes de 14 países se reunieron en Berlín para repartirse África.', fa: 'امسال رهبران ۱۴ کشور در برلین جمع شدند تا افریقا را تقسیم کنند.' },
        { en: 'At the [[berlin conference|Berlin Conference]], they drew lines on maps of our land.', es: 'En la [[berlin conference|Conferencia de Berlín]], trazaron líneas en mapas de nuestra tierra.', fa: 'در [[berlin conference|کنفرانس برلین]]، روی نقشه‌های سرزمین ما خط کشیدند.' },
        { en: 'No African was invited. Their lines split some peoples apart.', es: 'No invitaron a ningún africano. Sus líneas separaron a algunos pueblos.', fa: 'هیچ افریقایی دعوت نشد. خط‌های آن‌ها بعضی مردمان را از هم جدا کرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who was invited to decide Africa\'s future at the Berlin Conference?', es: '¿A quién invitaron a decidir el futuro de África en la Conferencia de Berlín?', fa: 'کی به کنفرانس برلین دعوت شد تا دربارهٔ آیندهٔ افریقا تصمیم بگیرد؟' },
        choices: [
          { ok: true, t: { en: 'Europeans, but no Africans', es: 'Europeos, pero ningún africano', fa: 'اروپایی‌ها، اما هیچ افریقایی' },
            why: { en: 'Yes. Europeans decided about Africa without asking the people who lived there.', es: 'Sí. Los europeos decidieron sobre África sin preguntar a la gente que vivía allí.', fa: 'بله. اروپایی‌ها بدون پرسیدن از مردم افریقا دربارهٔ آن تصمیم گرفتند.' } },
          { t: { en: 'Every African king and queen', es: 'Todos los reyes y reinas de África', fa: 'همهٔ پادشاهان و ملکه‌های افریقا' },
            why: { en: 'No African ruler was invited, even though it was their land.', es: 'No invitaron a ningún gobernante africano, aunque era su tierra.', fa: 'هیچ حاکم افریقایی دعوت نشد، با آنکه زمین مال آن‌ها بود.' } },
          { t: { en: 'Only the Sultan of Zanzibar', es: 'Solo el sultán de Zanzíbar', fa: 'فقط سلطان زنگبار' },
            why: { en: 'The Sultan was not invited. He protested, and Germany sent warships.', es: 'El sultán no fue invitado. Protestó, y Alemania mandó barcos de guerra.', fa: 'سلطان دعوت نشد. او اعتراض کرد و آلمان کشتی‌های جنگی فرستاد.' } }
        ]
      }
    },
    {
      x: 10, y: 16,
      name: { en: 'Juma', es: 'Juma', fa: 'جمعه' },
      role: { en: 'Dock worker', es: 'Estibador', fa: 'کارگر بندر' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8e0d0', pants: '#2a4a6a', hat: '#f2f2f2' },
      lines: [
        { en: 'I load cloves and coconuts onto [[dhow|dhows]] for Arabia and India.', es: 'Cargo clavos de olor y cocos en los [[dhow|dhows]] para Arabia y la India.', fa: 'من میخک و نارگیل را در [[dhow|کشتی‌های داو]] برای عربستان و هند بار می‌کنم.' },
        { en: 'In August, German warships came here. They forced our Sultan to give up mainland land.', es: 'En agosto llegaron barcos de guerra alemanes. Obligaron a nuestro sultán a ceder tierras del continente.', fa: 'در اگست کشتی‌های جنگی آلمان آمدند. سلطان ما را مجبور کردند زمین خشکه را بدهد.' },
        { en: 'Europeans want our land, our [[raw material|raw materials]], and buyers for their factory goods.', es: 'Los europeos quieren nuestra tierra, nuestras [[raw material|materias primas]] y compradores para sus productos.', fa: 'اروپایی‌ها زمین ما، [[raw material|مواد خام]] ما و خریدار برای اجناس فابریکهٔ خود را می‌خواهند.' },
        { en: 'But Africans fight back. In West Africa, Samori Touré is fighting France right now.', es: 'Pero los africanos resisten. En África occidental, Samori Touré está luchando contra Francia ahora mismo.', fa: 'اما افریقایی‌ها مقاومت می‌کنند. در افریقای غربی، ساموری توره همین حالا با فرانسه می‌جنگد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did industrial countries in Europe want colonies in Africa?', es: '¿Por qué los países industriales de Europa querían colonias en África?', fa: 'چرا کشورهای صنعتی اروپا در افریقا مستعمره می‌خواستند؟' },
        choices: [
          { ok: true, t: { en: 'For raw materials, markets and power', es: 'Por materias primas, mercados y poder', fa: 'برای مواد خام، بازار و قدرت' },
            why: { en: 'Yes. Factories needed rubber, cotton and metals, and new places to sell goods.', es: 'Sí. Las fábricas necesitaban caucho, algodón y metales, y nuevos lugares para vender.', fa: 'بله. فابریکه‌ها رابر، پخته و فلز، و جاهای نو برای فروش می‌خواستند.' } },
          { t: { en: 'Because Africans asked them to rule', es: 'Porque los africanos les pidieron gobernar', fa: 'چون افریقایی‌ها از آن‌ها حکومت خواستند' },
            why: { en: 'No one asked them to rule. Many Africans fought hard to stay free.', es: 'Nadie les pidió gobernar. Muchos africanos lucharon duro por seguir libres.', fa: 'هیچ کس از آن‌ها حکومت نخواست. افریقایی‌های زیاد سخت برای آزادی جنگیدند.' } },
          { t: { en: 'Europe had no more farms left at all', es: 'A Europa ya no le quedaban granjas', fa: 'اروپا دیگر هیچ زمین زراعتی نداشت' },
            why: { en: 'Europe still had farms. The main goal was riches and power for their factories and nations.', es: 'Europa todavía tenía granjas. La meta principal era riqueza y poder para sus fábricas y naciones.', fa: 'اروپا هنوز زمین زراعتی داشت. هدف اصلی ثروت و قدرت برای فابریکه‌ها و ملت‌هایشان بود.' } }
        ]
      }
    },
    {
      x: 24, y: 3,
      name: { en: 'Lakshmi', es: 'Lakshmi', fa: 'لکشمی' },
      role: { en: 'Handloom weaver', es: 'Tejedora de telar manual', fa: 'بافندهٔ دستی' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#8a2a3a', style: 'long' },
      lines: [
        { en: 'Namaste! I weave cotton cloth by hand, like my mother did.', es: '¡Namasté! Tejo tela de algodón a mano, como lo hacía mi madre.', fa: 'نمستی! من مثل مادرم تکهٔ پخته را با دست می‌بافم.' },
        { en: 'Britain rules India now. Since 1858, people call it the British [[raj|Raj]].', es: 'Gran Bretaña gobierna la India. Desde 1858 lo llaman el [[raj|Raj]] británico.', fa: 'حالا بریتانیا بر هند حکومت می‌کند. از ۱۸۵۸ آن را [[raj|راج]] بریتانیا می‌گویند.' },
        { en: 'Britain ships our raw cotton to its mills, then sells cloth back to us.', es: 'Gran Bretaña se lleva nuestro algodón crudo a sus fábricas y luego nos vende tela.', fa: 'بریتانیا پختهٔ خام ما را به فابریکه‌هایش می‌برد و بعد تکه را به ما می‌فروشد.' },
        { en: 'Factory cloth is cheap. Many weavers here have lost their work.', es: 'La tela de fábrica es barata. Muchos tejedores de aquí perdieron su trabajo.', fa: 'تکهٔ فابریکه ارزان است. بافنده‌های زیاد اینجا کار خود را از دست داده‌اند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did British rule hurt many weavers in India?', es: '¿Cómo perjudicó el dominio británico a muchos tejedores de la India?', fa: 'حکومت بریتانیا چطور به بافنده‌های زیاد هند ضرر زد؟' },
        choices: [
          { ok: true, t: { en: 'Cheap British cloth took their work', es: 'La tela británica barata les quitó el trabajo', fa: 'تکهٔ ارزان بریتانیا کارشان را گرفت' },
            why: { en: 'Yes. Indian cotton went to Britain\'s mills, and cheap cloth came back to India.', es: 'Sí. El algodón indio iba a las fábricas británicas y la tela barata volvía a la India.', fa: 'بله. پختهٔ هند به فابریکه‌های بریتانیا رفت و تکهٔ ارزان به هند برگشت.' } },
          { t: { en: 'Britain paid them more for each cloth', es: 'Gran Bretaña les pagaba más por cada tela', fa: 'بریتانیا برای هر تکه پول بیشتر داد' },
            why: { en: 'Their pay fell, not rose. Factory cloth was cheaper than handmade cloth.', es: 'Su pago bajó, no subió. La tela de fábrica era más barata que la hecha a mano.', fa: 'مزدشان کم شد، نه زیاد. تکهٔ فابریکه از تکهٔ دستی ارزان‌تر بود.' } },
          { t: { en: 'India stopped growing any cotton', es: 'La India dejó de sembrar algodón', fa: 'هند دیگر پخته نکاشت' },
            why: { en: 'India grew lots of cotton. Much of it was shipped to Britain\'s mills.', es: 'La India sembraba mucho algodón. Gran parte se enviaba a las fábricas británicas.', fa: 'هند پختهٔ زیاد می‌کاشت. بیشتر آن به فابریکه‌های بریتانیا فرستاده می‌شد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 3, text: { en: 'ZANZIBAR · 1885 · An island trading port of East Africa, ruled by its Sultan.', es: 'ZANZÍBAR · 1885 · Una isla y puerto comercial de África del Este, gobernada por su sultán.', fa: 'زنگبار · ۱۸۸۵ · یک جزیره و بندر تجارتی افریقای شرقی، زیر حکم سلطان خود.' } },
    { x: 22, y: 5, text: { en: 'BOMBAY · 1885 · Today called Mumbai. A great port and cotton city of India.', es: 'BOMBAY · 1885 · Hoy se llama Mumbai. Un gran puerto y ciudad del algodón de la India.', fa: 'بمبئی · ۱۸۸۵ · امروز ممبئی نام دارد. یک بندر بزرگ و شهر پختهٔ هند.' } },
    { x: 26, y: 19, text: { en: 'RAILWAY · India\'s first train left Bombay in 1853. Rails carried cotton to the port.', es: 'FERROCARRIL · El primer tren de la India salió de Bombay en 1853. Los trenes llevaban algodón al puerto.', fa: 'خط آهن · اولین ریل هند در ۱۸۵۳ از بمبئی حرکت کرد. ریل پخته را به بندر می‌برد.' } }
  ],

  /* the quest: Mr. Dinshaw the newspaper printer (SE, Bombay) -> Hamisi the dhow sailor by the north dock (NE)
     -> find the letter from Zanzibar that fell on the island, just north of the farm hut (SW) -> back to Mr. Dinshaw.
     It is about carrying the news, so people in India know what is happening in Africa. */
  quest: {
    stat: 'reg',
    title: { en: 'News Across the Ocean', es: 'Noticias a través del océano', fa: 'خبر از آن طرف بحر' },
    giver: {
      x: 25, y: 13,
      name: { en: 'Mr. Dinshaw', es: 'Señor Dinshaw', fa: 'آقای دینشا' },
      role: { en: 'Newspaper printer', es: 'Impresor de periódico', fa: 'چاپگر روزنامه' },
      look: { skin: 2, hair: '#4a4a4a', shirt: '#f2f2f2', pants: '#2a2a2a', hat: '#2a2a3a' },
      lines: [
        { en: 'I print a newspaper. Indians must know what empires are doing, here and in Africa.', es: 'Imprimo un periódico. Los indios deben saber lo que hacen los imperios, aquí y en África.', fa: 'من روزنامه چاپ می‌کنم. هندی‌ها باید بدانند امپراتوری‌ها اینجا و در افریقا چه می‌کنند.' },
        { en: 'A letter from Zanzibar was lost on the way. It tells what happened there.', es: 'Una carta de Zanzíbar se perdió en el camino. Cuenta lo que pasó allí.', fa: 'یک نامه از زنگبار در راه گم شد. می‌گوید آنجا چه شد.' },
        { en: 'Hamisi sails a dhow. Ask him by the north dock.', es: 'Hamisi navega un dhow. Pregúntale junto al muelle del norte.', fa: 'حمیسی کشتی داو می‌راند. کنار بندرگاه شمالی از او بپرس.' }
      ],
      wait: { en: 'Hamisi waits by the north dock, on the Bombay side.', es: 'Hamisi espera junto al muelle del norte, del lado de Bombay.', fa: 'حمیسی کنار بندرگاه شمالی، در طرف بمبئی منتظر است.' },
      thanks: { en: 'Thank you. I will print it, so people remember what happened in Zanzibar.', es: 'Gracias. Lo imprimiré, para que la gente recuerde lo que pasó en Zanzíbar.', fa: 'تشکر. آن را چاپ می‌کنم تا مردم به یاد داشته باشند در زنگبار چه شد.' }
    },
    contact: {
      x: 20, y: 3,
      name: { en: 'Hamisi', es: 'Hamisi', fa: 'حمیسی' },
      role: { en: 'Dhow sailor', es: 'Marinero de dhow', fa: 'ملاح کشتی داو' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f5f9a', pants: '#e8e0d0', hat: '#f2f2f2' },
      lines: [
        { en: 'I am from Zanzibar. The monsoon wind carries my [[dhow|dhow]] to India and back.', es: 'Soy de Zanzíbar. El viento del monzón lleva mi [[dhow|dhow]] a la India y de vuelta.', fa: 'من از زنگبار هستم. باد موسمی [[dhow|کشتی داو]] مرا به هند می‌برد و برمی‌گرداند.' },
        { en: 'The letter fell as we left Zanzibar. A strong wind blew it over the town.', es: 'La carta se cayó cuando salíamos de Zanzíbar. Un viento fuerte la llevó sobre el pueblo.', fa: 'نامه وقتی از زنگبار می‌رفتیم افتاد. باد تند آن را بالای شهر برد.' },
        { en: 'Cross on the south dock. It lies just north of the thatched hut, in Zanzibar.', es: 'Cruza por el muelle del sur. Está justo al norte de la choza de paja, en Zanzíbar.', fa: 'از بندرگاه جنوبی بگذر. درست شمال کلبهٔ کاه‌پوش، در زنگبار است.' }
      ]
    },
    action: {
      type: 'find',
      at: [8, 13],
      hint: { en: 'Zanzibar: just north of the thatched hut', es: 'Zanzíbar: justo al norte de la choza de paja', fa: 'زنگبار: درست شمال کلبهٔ کاه‌پوش' },
      found: { en: 'The letter says: "German warships came. Our Sultan had to give up land on the mainland."', es: 'La carta dice: "Llegaron barcos de guerra alemanes. Nuestro sultán tuvo que ceder tierras del continente".', fa: 'نامه می‌گوید: «کشتی‌های جنگی آلمان آمدند. سلطان ما مجبور شد زمین خشکه را بدهد.»' },
      item: { icon: '✉️', name: { en: 'A letter from Zanzibar', es: 'Una carta de Zanzíbar', fa: 'یک نامه از زنگبار' } }
    }
  },

  scraps: [[1, 1], [9, 6], [30, 20]],
  smudges: [[10, 19], [27, 10]],

  /* the time stone: a claim with evidence, from African and Indian points of view */
  challenge: {
    at: [29, 17],
    type: 'claim',
    stat: 'mov',
    title: { en: 'How did people answer empire?', es: '¿Cómo respondió la gente al imperio?', fa: 'مردم به امپراتوری چه جواب دادند؟' },
    intro: { en: 'The Grump says no one stood up to the empires. Pick the true claim. Back it up with evidence from Africa and from India.',
      es: 'El Gruñón dice que nadie se enfrentó a los imperios. Elige la afirmación verdadera. Apóyala con pruebas de África y de la India.',
      fa: 'غرغرو می‌گوید هیچ کس در برابر امپراتوری‌ها نایستاد. ادعای درست را انتخاب کن. با شاهد از افریقا و از هند از آن دفاع کن.' },
    options: [
      { icon: '✊', name: { en: 'Many people resisted, in many ways', es: 'Mucha gente resistió, de muchas maneras', fa: 'مردم زیاد به راه‌های گوناگون مقاومت کردند' },
        desc: { en: 'with armies, letters, meetings and newspapers', es: 'con ejércitos, cartas, reuniones y periódicos', fa: 'با لشکر، نامه، جلسه و روزنامه' },
        result: { en: 'Yes. From Ethiopia to India, people fought for freedom with armies, words and new groups. In the 1900s, their struggle led to independence.', es: 'Sí. De Etiopía a la India, la gente luchó por la libertad con ejércitos, palabras y grupos nuevos. En los años 1900, su lucha llevó a la independencia.', fa: 'بله. از ایتوپیا تا هند، مردم با لشکر، کلمه و گروه‌های نو برای آزادی مبارزه کردند. در قرن بیستم، مبارزهٔ آن‌ها به استقلال رسید.' } },
      { icon: '🤝', name: { en: 'Most people welcomed foreign rule', es: 'La mayoría recibió bien el dominio extranjero', fa: 'بیشتر مردم حکومت بیگانه را خوش‌آمد گفتند' },
        desc: { en: 'they were glad the empires came', es: 'se alegraron de que llegaran los imperios', fa: 'از آمدن امپراتوری‌ها خوش بودند' },
        result: { en: 'The evidence does not show this.', es: 'Las pruebas no muestran esto.', fa: 'شاهدها این را نشان نمی‌دهند.' } },
      { icon: '🤐', name: { en: 'No one tried to resist', es: 'Nadie intentó resistir', fa: 'هیچ کس کوشش نکرد مقاومت کند' },
        desc: { en: 'people stayed quiet and did nothing', es: 'la gente se quedó callada y no hizo nada', fa: 'مردم خاموش ماندند و کاری نکردند' },
        result: { en: 'The evidence does not show this.', es: 'Las pruebas no muestran esto.', fa: 'شاهدها این را نشان نمی‌دهند.' } }
    ],
    kinds: [
      { id: 'africa', label: { en: 'Evidence from Africa', es: 'Pruebas de África', fa: 'شاهد از افریقا' } },
      { id: 'india', label: { en: 'Evidence from India', es: 'Pruebas de la India', fa: 'شاهد از هند' } }
    ],
    reasons: [
      { kind: 'africa', fits: [0], t: { en: 'In 1896, Ethiopia\'s army defeated Italy at the Battle of Adwa', es: 'En 1896, el ejército de Etiopía venció a Italia en la batalla de Adua', fa: 'در ۱۸۹۶، لشکر ایتوپیا ایتالیا را در جنگ عدوه شکست داد' },
        why: { en: 'Ethiopia won and stayed free. That is resistance, not welcome.', es: 'Etiopía ganó y siguió libre. Eso es resistencia, no bienvenida.', fa: 'ایتوپیا برد و آزاد ماند. این مقاومت است، نه خوش‌آمد.' } },
      { kind: 'africa', fits: [0], t: { en: 'Samori Touré fought French armies in West Africa for years', es: 'Samori Touré luchó contra ejércitos franceses en África occidental durante años', fa: 'ساموری توره سال‌ها در افریقای غربی با لشکرهای فرانسه جنگید' },
        why: { en: 'Samori fought for almost twenty years. People did resist.', es: 'Samori luchó casi veinte años. La gente sí resistió.', fa: 'ساموری نزدیک بیست سال جنگید. مردم مقاومت کردند.' } },
      { kind: 'africa', fits: [0], t: { en: 'Zanzibar\'s Sultan wrote letters against Germany\'s claims', es: 'El sultán de Zanzíbar escribió cartas contra lo que Alemania reclamaba', fa: 'سلطان زنگبار علیه ادعاهای آلمان نامه نوشت' },
        why: { en: 'Letters of protest are resistance with words.', es: 'Las cartas de protesta son resistencia con palabras.', fa: 'نامهٔ اعتراض مقاومت با کلمه است.' } },
      { kind: 'africa', fits: [], t: { en: 'African kings were invited to Berlin to draw the borders', es: 'Invitaron a los reyes africanos a Berlín a trazar las fronteras', fa: 'پادشاهان افریقایی به برلین دعوت شدند تا سرحدها را بکشند' },
        why: { en: 'This is not true. No African was invited to the Berlin Conference.', es: 'Esto no es verdad. No invitaron a ningún africano a la Conferencia de Berlín.', fa: 'این درست نیست. هیچ افریقایی به کنفرانس برلین دعوت نشد.' } },
      { kind: 'india', fits: [0], t: { en: 'In 1857, Indian soldiers and others rose up against British rule', es: 'En 1857, soldados indios y otras personas se levantaron contra el dominio británico', fa: 'در ۱۸۵۷، سربازان هندی و دیگران علیه حکومت بریتانیا قیام کردند' },
        why: { en: 'The 1857 uprising was armed resistance, even though it was crushed.', es: 'El levantamiento de 1857 fue resistencia armada, aunque lo aplastaron.', fa: 'قیام ۱۸۵۷ مقاومت مسلحانه بود، با آنکه سرکوب شد.' } },
      { kind: 'india', fits: [0], t: { en: 'In 1885, Indians formed the Indian National Congress to ask for a voice', es: 'En 1885, los indios formaron el Congreso Nacional Indio para pedir voz', fa: 'در ۱۸۸۵، هندی‌ها کنگرهٔ ملی هند را ساختند تا صدا بخواهند' },
        why: { en: 'Meeting and organizing is resistance too. Congress later led India to freedom.', es: 'Reunirse y organizarse también es resistencia. El Congreso luego llevó a la India a la libertad.', fa: 'جمع شدن و سازمان دادن هم مقاومت است. کنگره بعدها هند را به آزادی رساند.' } },
      { kind: 'india', fits: [0], t: { en: 'Indian newspapers wrote about unfair taxes and famine', es: 'Los periódicos indios escribieron sobre impuestos injustos y hambrunas', fa: 'روزنامه‌های هندی دربارهٔ مالیهٔ ناعادلانه و قحطی نوشتند' },
        why: { en: 'Writing the truth about injustice is resistance with words.', es: 'Escribir la verdad sobre la injusticia es resistencia con palabras.', fa: 'نوشتن حقیقت دربارهٔ بی‌عدالتی مقاومت با کلمه است.' } },
      { kind: 'india', fits: [], t: { en: 'Indian weavers asked Britain to send more factory cloth', es: 'Los tejedores indios pidieron a Gran Bretaña más tela de fábrica', fa: 'بافنده‌های هندی از بریتانیا تکهٔ فابریکهٔ بیشتر خواستند' },
        why: { en: 'This is not true. Factory cloth took the weavers\' work.', es: 'Esto no es verdad. La tela de fábrica les quitó el trabajo a los tejedores.', fa: 'این درست نیست. تکهٔ فابریکه کار بافنده‌ها را گرفت.' } }
    ],
    mismatch: { en: 'That evidence does not back up the claim you picked.', es: 'Esa prueba no apoya la afirmación que elegiste.', fa: 'این شاهد از ادعایی که انتخاب کردی دفاع نمی‌کند.' },
    success: { en: 'The evidence is clear. People in Africa and India did not stay silent. They resisted.', es: 'Las pruebas son claras. La gente de África y la India no se quedó callada. Resistió.', fa: 'شاهدها روشن است. مردم افریقا و هند خاموش نماندند. مقاومت کردند.' }
  },

  boss: {
    at: [6, 10],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting rises like a gray fog over Stone Town.', es: 'El Olvido sube como una niebla gris sobre la Ciudad de Piedra.', fa: 'فراموشی مثل یک مه خاکستری بالای شهر سنگی بلند می‌شود.' },
    taunt: { en: 'No one will remember them, or how they fought back.', es: 'Nadie los recordará, ni cómo resistieron.', fa: 'هیچ کس آن‌ها را به یاد نمی‌آورد، و نه مقاومت‌شان را.' },
    win: { en: 'The fog lifts. Their stories are remembered. Chronicle page 5.3 returns to your hands.', es: 'La niebla se levanta. Sus historias se recuerdan. La página 5.3 de la crónica vuelve a tus manos.', fa: 'مه کنار می‌رود. داستان‌هایشان به یاد می‌ماند. صفحهٔ ۵.۳ تاریخ‌نامه به دستت برمی‌گردد.' },
    questions: [
      { q: { en: 'What is imperialism?', es: '¿Qué es el imperialismo?', fa: 'امپریالیزم چیست؟' },
        choices: [
          { en: 'A strong country taking control of other lands', es: 'Un país fuerte que toma el control de otras tierras', fa: 'کشور قوی که سرزمین‌های دیگر را می‌گیرد' },
          { en: 'Fair trade between nations that are equal', es: 'Comercio justo entre naciones iguales', fa: 'تجارت عادلانه میان ملت‌های برابر' },
          { en: 'A people choosing their own leaders in a vote', es: 'Un pueblo que elige a sus líderes con su voto', fa: 'مردمی که رهبران خود را با رأی انتخاب می‌کنند' },
          { en: 'Countries sharing one money and one flag', es: 'Países que comparten una moneda y una bandera', fa: 'کشورهایی که یک پول و یک بیرق دارند' }],
        answer: 0,
        why: { en: 'Imperial powers ruled other peoples, often by force, and took their land and resources.', es: 'Las potencias imperiales gobernaban a otros pueblos, muchas veces a la fuerza, y tomaban su tierra y recursos.', fa: 'قدرت‌های امپریالیستی، اکثراً به زور، بر مردمان دیگر حکومت کردند و زمین و منابع‌شان را گرفتند.' } },
      { q: { en: 'What did the Berlin Conference of 1884–1885 do?', es: '¿Qué hizo la Conferencia de Berlín de 1884–1885?', fa: 'کنفرانس برلین در ۱۸۸۴–۱۸۸۵ چه کرد؟' },
        choices: [
          { en: 'Set rules for Europe to divide Africa', es: 'Puso reglas para que Europa repartiera África', fa: 'برای تقسیم افریقا میان اروپا قانون ساخت' },
          { en: 'Made all African peoples one nation', es: 'Hizo de todos los pueblos africanos una nación', fa: 'همهٔ مردمان افریقا را یک ملت ساخت' },
          { en: 'Promised to leave Africa free forever', es: 'Prometió dejar a África libre para siempre', fa: 'وعده داد افریقا را برای همیشه آزاد بگذارد' },
          { en: 'Signed a trade deal with India and China', es: 'Firmó un acuerdo comercial con India y China', fa: 'با هند و چین قرارداد تجارت امضا کرد' }],
        answer: 0,
        why: { en: 'European leaders agreed how to claim African land. No African was invited.', es: 'Los líderes europeos acordaron cómo reclamar tierras africanas. No invitaron a ningún africano.', fa: 'رهبران اروپایی توافق کردند چطور زمین افریقا را بگیرند. هیچ افریقایی دعوت نشد.' } },
      { q: { en: 'Why did industrial nations want colonies?', es: '¿Por qué las naciones industriales querían colonias?', fa: 'چرا ملت‌های صنعتی مستعمره می‌خواستند؟' },
        choices: [
          { en: 'Raw materials, markets and power', es: 'Materias primas, mercados y poder', fa: 'مواد خام، بازار و قدرت' },
          { en: 'To give away their own factories', es: 'Para regalar sus propias fábricas', fa: 'برای بخشیدن فابریکه‌های خود' },
          { en: 'Because colonies asked to be ruled', es: 'Porque las colonias pedían ser gobernadas', fa: 'چون مستعمره‌ها حکومت خواستند' },
          { en: 'To find a place with colder weather', es: 'Para hallar un lugar con clima más frío', fa: 'برای پیدا کردن جای سردتر' }],
        answer: 0,
        why: { en: 'Factories needed cotton, rubber and metals, and new buyers. Colonies also meant power and pride.', es: 'Las fábricas necesitaban algodón, caucho, metales y compradores. Las colonias también daban poder y orgullo.', fa: 'فابریکه‌ها پخته، رابر، فلز و خریدار نو می‌خواستند. مستعمره قدرت و افتخار هم بود.' } },
      { q: { en: 'Which African country defeated Italy at Adwa in 1896 and stayed free?', es: '¿Qué país africano venció a Italia en Adua en 1896 y siguió libre?', fa: 'کدام کشور افریقایی در ۱۸۹۶ ایتالیا را در عدوه شکست داد و آزاد ماند؟' },
        choices: [
          { en: 'Ethiopia', es: 'Etiopía', fa: 'ایتوپیا' },
          { en: 'Egypt', es: 'Egipto', fa: 'مصر' },
          { en: 'Nigeria', es: 'Nigeria', fa: 'نیجریه' },
          { en: 'Morocco', es: 'Marruecos', fa: 'مراکش' }],
        answer: 0,
        why: { en: 'Emperor Menelik II and Empress Taytu led Ethiopia to victory. Ethiopia stayed independent.', es: 'El emperador Menelik II y la emperatriz Taytu llevaron a Etiopía a la victoria. Etiopía siguió independiente.', fa: 'امپراتور منلیک دوم و ملکه تایتو ایتوپیا را به پیروزی رساندند. ایتوپیا مستقل ماند.' } },
      { q: { en: 'What was the British Raj?', es: '¿Qué fue el Raj británico?', fa: 'راج بریتانیا چه بود؟' },
        choices: [
          { en: 'British rule over India, from 1858', es: 'El dominio británico sobre la India, desde 1858', fa: 'حکومت بریتانیا بر هند، از ۱۸۵۸' },
          { en: 'An Indian army that ruled Britain', es: 'Un ejército indio que gobernaba Gran Bretaña', fa: 'لشکر هندی که بر بریتانیا حکومت کرد' },
          { en: 'A railway from Bombay to Zanzibar', es: 'Un ferrocarril de Bombay a Zanzíbar', fa: 'خط آهنی از بمبئی تا زنگبار' },
          { en: 'A trade deal between India and China', es: 'Un acuerdo comercial entre India y China', fa: 'قرارداد تجارت میان هند و چین' }],
        answer: 0,
        why: { en: 'After 1857, Britain\'s government took India from the East India Company and ruled it directly.', es: 'Después de 1857, el gobierno británico le quitó la India a la Compañía de las Indias Orientales y la gobernó directamente.', fa: 'بعد از ۱۸۵۷، حکومت بریتانیا هند را از کمپنی هند شرقی گرفت و خودش بر آن حکومت کرد.' } },
      { q: { en: 'What happened in India in 1857?', es: '¿Qué pasó en la India en 1857?', fa: 'در ۱۸۵۷ در هند چه شد؟' },
        choices: [
          { en: 'A large uprising against British rule', es: 'Un gran levantamiento contra los británicos', fa: 'یک قیام بزرگ علیه حکومت بریتانیا' },
          { en: 'India built its first cotton mill', es: 'La India construyó su primera fábrica de algodón', fa: 'هند اولین فابریکهٔ پخته را ساخت' },
          { en: 'Britain left India for good', es: 'Gran Bretaña dejó la India para siempre', fa: 'بریتانیا برای همیشه هند را ترک کرد' },
          { en: 'The Berlin Conference met in Delhi', es: 'La Conferencia de Berlín se reunió en Delhi', fa: 'کنفرانس برلین در دهلی جمع شد' }],
        answer: 0,
        why: { en: 'Indian soldiers and others rose up. The British crushed it, but the struggle was remembered.', es: 'Soldados indios y otras personas se levantaron. Los británicos lo aplastaron, pero la lucha se recordó.', fa: 'سربازان هندی و دیگران قیام کردند. بریتانیا آن را سرکوب کرد، اما این مبارزه به یاد ماند.' } },
      { q: { en: 'What was the Indian National Congress, formed in 1885?', es: '¿Qué era el Congreso Nacional Indio, formado en 1885?', fa: 'کنگرهٔ ملی هند که در ۱۸۸۵ ساخته شد، چه بود؟' },
        choices: [
          { en: 'Indians asking for a voice in government', es: 'Indios que pedían voz en el gobierno', fa: 'هندی‌هایی که در حکومت صدا می‌خواستند' },
          { en: 'A British army that guarded the ports', es: 'Un ejército británico que cuidaba los puertos', fa: 'لشکر بریتانیا که بندرها را پاسبانی می‌کرد' },
          { en: 'A company that shipped cotton to Britain', es: 'Una compañía que mandaba algodón a Gran Bretaña', fa: 'کمپنی‌ای که پخته را به بریتانیا می‌فرستاد' },
          { en: 'A school for the children of British rulers', es: 'Una escuela para los hijos de los gobernantes británicos', fa: 'مکتبی برای اطفال حاکمان بریتانیایی' }],
        answer: 0,
        why: { en: 'Congress began by asking for Indian voices. Later it led India\'s fight for independence.', es: 'El Congreso empezó pidiendo voz para los indios. Más tarde dirigió la lucha de la India por la independencia.', fa: 'کنگره با خواستن صدا برای هندی‌ها شروع کرد. بعدها مبارزهٔ هند برای استقلال را رهبری کرد.' } },
      { q: { en: 'How did British factory cloth affect India?', es: '¿Cómo afectó a la India la tela de fábrica británica?', fa: 'تکهٔ فابریکهٔ بریتانیا بر هند چه اثر کرد؟' },
        choices: [
          { en: 'Many handloom weavers lost their work', es: 'Muchos tejedores de telar perdieron su trabajo', fa: 'بافنده‌های دستی زیاد کار خود را از دست دادند' },
          { en: 'Indian weavers all became very rich', es: 'Todos los tejedores indios se hicieron muy ricos', fa: 'همهٔ بافنده‌های هندی بسیار پولدار شدند' },
          { en: 'India sold its cloth to Manchester', es: 'La India vendía su tela a Mánchester', fa: 'هند تکهٔ خود را به منچستر فروخت' },
          { en: 'Nobody in India wore cotton anymore', es: 'Ya nadie en la India usaba algodón', fa: 'دیگر هیچ کس در هند پخته نپوشید' }],
        answer: 0,
        why: { en: 'Britain took India\'s raw cotton and sold back cheap cloth. Many weavers became poor.', es: 'Gran Bretaña tomaba el algodón crudo de la India y vendía tela barata. Muchos tejedores se empobrecieron.', fa: 'بریتانیا پختهٔ خام هند را برد و تکهٔ ارزان پس فروخت. بافنده‌های زیاد فقیر شدند.' } }
    ]
  },

  learned: [
    { en: '[[imperialism|Imperialism]] is strong countries ruling other lands. Industrial nations wanted [[raw material|raw materials]], markets and power.', es: 'El [[imperialism|imperialismo]] es cuando países fuertes gobiernan otras tierras. Las naciones industriales querían [[raw material|materias primas]], mercados y poder.', fa: '[[imperialism|امپریالیزم]] حکومت کشورهای قوی بر سرزمین‌های دیگر است. ملت‌های صنعتی [[raw material|مواد خام]]، بازار و قدرت می‌خواستند.' },
    { en: 'At the [[berlin conference|Berlin Conference]], Europeans divided Africa without Africans. Many Africans resisted, and Ethiopia won at Adwa.', es: 'En la [[berlin conference|Conferencia de Berlín]], los europeos repartieron África sin los africanos. Muchos africanos resistieron, y Etiopía ganó en Adua.', fa: 'در [[berlin conference|کنفرانس برلین]]، اروپایی‌ها بدون افریقایی‌ها افریقا را تقسیم کردند. افریقایی‌های زیاد مقاومت کردند و ایتوپیا در عدوه برد.' },
    { en: 'Britain ruled India as the [[raj|Raj]]. Indians showed [[resistance|resistance]] in 1857 and formed the Indian National Congress in 1885.', es: 'Gran Bretaña gobernó la India como el [[raj|Raj]]. Los indios mostraron [[resistance|resistencia]] en 1857 y formaron el Congreso Nacional Indio en 1885.', fa: 'بریتانیا بر هند به نام [[raj|راج]] حکومت کرد. هندی‌ها در ۱۸۵۷ [[resistance|مقاومت]] کردند و در ۱۸۸۵ کنگرهٔ ملی هند را ساختند.' }
  ],
  reflect: {
    q: { en: 'Why is it important to hear history from the people who were ruled, not only the rulers?', es: '¿Por qué es importante oír la historia de la gente gobernada, no solo de los gobernantes?', fa: 'چرا مهم است تاریخ را از زبان مردمی که زیر حکم بودند هم بشنویم، نه فقط از حاکمان؟' },
    starter: { en: 'It is important to hear their side because', es: 'Es importante oír su lado porque', fa: 'شنیدن طرف آن‌ها مهم است چون' }
  }
};
