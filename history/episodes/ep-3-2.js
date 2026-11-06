/* TIMEWALKER · Episode 3.2 · The Scientific Revolution (WHII)
   Padua, a university city in the Republic of Venice, 1610 (the year Galileo, a teacher here, published what his
   telescope showed). North half: the university (where medicine was taught), the market and the great town hall
   (J), homes and a lens workshop. A canal runs north to south (x 22-23) with two bridges (rows 4 and 16).
   South half: the Basilica of St. Anthony (D), Galileo's street with a neighbor's house, the round botanical
   garden of 1545 (F walls, a well in the middle) and, east of the canal, an open fair field. */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'WHII',
  title: { en: 'The Scientific Revolution', es: 'La Revolución Científica', fa: 'انقلاب علمی' },
  place: { en: 'Padua, 1610', es: 'Padua, 1610', fa: 'پادووا، ۱۶۱۰' },
  intro: [
    { en: 'The Grump fogged the [[scientific revolution|Scientific Revolution]] page. People forgot how to test ideas.',
      es: 'El Gruñón nubló la página de la [[scientific revolution|Revolución Científica]]. La gente olvidó cómo probar ideas.',
      fa: 'غرغرو صفحهٔ [[scientific revolution|انقلاب علمی]] را پر از مه کرد. مردم فراموش کردند چطور اندیشه‌ها را آزمایش کنند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Padua on the world map, 1610 on the timeline */
  scenes: {
    at: [11.9, 45.4],
    year: 1610,
    start: [
      { en: 'For hundreds of years, Europeans learned about nature from very old books.',
        es: 'Por cientos de años, los europeos aprendieron sobre la naturaleza en libros muy antiguos.',
        fa: 'صدها سال، اروپایی‌ها طبیعت را از کتاب‌های بسیار کهنه یاد می‌گرفتند.' },
      { en: 'Most people believed the Earth stood still at the center of everything.',
        es: 'Casi todos creían que la Tierra estaba quieta en el centro de todo.',
        fa: 'بیشتر مردم باور داشتند که زمین در مرکز همه چیز بی‌حرکت ایستاده است.' },
      { en: 'Around 1600, scholars began to test ideas by watching and measuring.',
        es: 'Hacia 1600, los sabios empezaron a probar ideas observando y midiendo.',
        fa: 'در حدود سال ۱۶۰۰، دانشمندان شروع کردند اندیشه‌ها را با دیدن و اندازه گرفتن آزمایش کنند.' }
    ],
    page: { en: 'Today, scientists everywhere still use these steps: ask, test, check and share.',
      es: 'Hoy, los científicos de todo el mundo siguen estos pasos: preguntar, probar, revisar y compartir.',
      fa: 'امروز دانشمندان در همه جا هنوز این قدم‌ها را دارند: پرسیدن، آزمایش، بررسی و شریک ساختن.' },
    guess: {
      q: { en: 'In 1610, what did most people think was at the center of everything?', es: 'En 1610, ¿qué creía casi todo el mundo que estaba en el centro de todo?', fa: 'در سال ۱۶۱۰، بیشتر مردم فکر می‌کردند چه چیزی در مرکز همه چیز است؟' },
      choices: [
        { t: { en: '🌍 The Earth', es: '🌍 La Tierra', fa: '🌍 زمین' }, ok: true },
        { t: { en: '☀️ The Sun', es: '☀️ El Sol', fa: '☀️ آفتاب' } }
      ],
      why: { en: 'Most people thought the Sun, Moon and stars all moved around the Earth.', es: 'Casi todos pensaban que el Sol, la Luna y las estrellas giraban alrededor de la Tierra.', fa: 'بیشتر مردم فکر می‌کردند آفتاب، مهتاب و ستاره‌ها همه به دور زمین می‌چرخند.' }
    },
    next: {
      q: { en: 'Next: France, 1685. Did King Louis XIV share his power with others?', es: 'Ahora: Francia, 1685. ¿El rey Luis XIV compartía su poder con otros?', fa: 'بعدی: فرانسه، ۱۶۸۵. آیا شاه لویی چهاردهم قدرتش را با دیگران شریک می‌ساخت؟' },
      choices: [
        { t: { en: '👑 No, he kept it', es: '👑 No, se lo quedaba', fa: '👑 نه، همه را خودش داشت' }, ok: true },
        { t: { en: '🤝 Yes, he shared it', es: '🤝 Sí, lo compartía', fa: '🤝 بله، شریک می‌ساخت' } }
      ],
      why: { en: 'Louis XIV ruled alone. He said his power came from God.', es: 'Luis XIV gobernaba solo. Decía que su poder venía de Dios.', fa: 'لویی چهاردهم تنها حکومت می‌کرد. می‌گفت قدرتش از طرف خداست.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [5, 2], name: { en: 'Ottavio', es: 'Ottavio', fa: 'اوتاویو' },
      look: { skin: 2, hair: '#9a9a9a', shirt: '#6a2a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to the University of Padua! Students come from all over Europe.', es: '¡Bienvenido a la Universidad de Padua! Vienen estudiantes de toda Europa.', fa: 'به پوهنتون پادووا خوش آمدی! محصلان از سراسر اروپا می‌آیند.' },
        { en: 'Protestant and Jewish students can study here. Many universities say no.', es: 'Aquí pueden estudiar protestantes y judíos. Muchas universidades no lo permiten.', fa: 'محصلان پروتستان و یهودی اینجا درس می‌خوانند. بسیاری از پوهنتون‌ها اجازه نمی‌دهند.' }
      ] },
    { at: [26, 2], name: { en: 'Pietro', es: 'Pietro', fa: 'پیترو' },
      look: { skin: 1, hair: '#3a2a1a', shirt: '#2f6f9f', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I am a glassmaker from Venice. Our glass is the clearest in Europe.', es: 'Soy vidriero de Venecia. Nuestro vidrio es el más claro de Europa.', fa: 'من شیشه‌گر ونیز هستم. شیشهٔ ما شفاف‌ترین شیشهٔ اروپا است.' },
        { en: 'Clear glass makes good lenses. Good lenses let you see far.', es: 'El vidrio claro da buenos lentes. Los buenos lentes dejan ver lejos.', fa: 'شیشهٔ شفاف عدسی خوب می‌سازد. عدسی خوب دور را نشان می‌دهد.' }
      ] },
    { at: [30, 3], name: { en: 'Bianca', es: 'Bianca', fa: 'بیانکا' },
      look: { skin: 2, hair: '#1a1008', shirt: '#8a5a2a', pants: '#3a2a3a', style: 'bun' },
      lines: [
        { en: 'I sell books. This one was printed in Venice in March.', es: 'Vendo libros. Este se imprimió en Venecia en marzo.', fa: 'من کتاب می‌فروشم. این یکی ماه مارچ در ونیز چاپ شد.' },
        { en: 'It is Galileo\'s book, The Starry Messenger. Everyone wants a copy!', es: 'Es el libro de Galileo, El mensajero de los astros. ¡Todos quieren uno!', fa: 'این کتاب گالیله است، «پیام‌آور ستاره‌ای». همه یک نسخه می‌خواهند!' }
      ] },
    { at: [29, 7], name: { en: 'Teodoro', es: 'Teodoro', fa: 'تئودورو' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#2a3a5a' },
      lines: [
        { en: 'I am a sailor. At night, I use the stars to find my way.', es: 'Soy marinero. De noche, uso las estrellas para encontrar el camino.', fa: 'من ملاح هستم. شب‌ها با ستاره‌ها راهم را پیدا می‌کنم.' },
        { en: 'Many star names come from Arabic, like Aldebaran. Arab scholars mapped the sky.', es: 'Muchos nombres de estrellas vienen del árabe, como Aldebarán. Sabios árabes estudiaron el cielo.', fa: 'نام بسیاری از ستاره‌ها از عربی است، مثل دبران. دانشمندان عرب آسمان را نقشه کردند.' }
      ] },
    { at: [3, 16], name: { en: 'Lucia', es: 'Lucía', fa: 'لوچیا' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#9a3a4a', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'Professor Galileo lives on this street. He watches the sky all night!', es: 'El profesor Galileo vive en esta calle. ¡Mira el cielo toda la noche!', fa: 'استاد گالیله در همین کوچه زندگی می‌کند. تمام شب آسمان را می‌بیند!' },
        { en: 'He says the Moon has mountains, just like the Earth. Imagine that!', es: 'Dice que la Luna tiene montañas, como la Tierra. ¡Imagínate!', fa: 'می‌گوید مهتاب هم مثل زمین کوه دارد. فکرش را بکن!' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the university (R over h, door 5,2), the town hall (J), market stalls (m), a well (O),
     homes and workshops east of the canal. Main street on row 4 crosses the canal on a bridge (b).
     South (y 11-21): the basilica (D), a home on Galileo's street (door 3,16), the round botanical garden
     (F, gates on all four sides, well O at 16,16), a bridge on row 16, the fair field (m) east of the canal. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.RRRRRRR..JJJJJJJJ..,~~.QQQ.RRW',
    'W.hhhdhhh..JJJJJJJJ...~~.hdh.hhW',
    'W....,.....JJJJJJJJ...~~..,..hdW',
    'Wlllllllllllllllllllllbbllllll.W',
    'Wx.l....mm.l.mm.l..l..~~..l....W',
    'W..l.......lllllll....~~..l.RRRW',
    'W..l..O....l.mm.l.....~~..l.hdhW',
    'W..llllllllllllllllll.~~.lll..xW',
    'W.....,...:.......,...~~..:..,.W',
    'W.........:...........~~..:....W',
    'W.DDDDDDD.:...........~~..:..,.W',
    'W.DDDDDDD.:...........~~..:....W',
    'W.DDDDDDD.:..FFF.FFF.x~~..:.mm.W',
    'W.........:.F,,,.,,,F.~~.......W',
    'W.RRR.....:.F,T...T,F.~~..m.m..W',
    'W.hdh.....:::...O...::bb:::....W',
    'W.........:.F,T...T,F.~~..m.m..W',
    'W.........:.F,,,.,,,F.~~.......W',
    'W..TT.....:..FFF.FFF..~~...,...W',
    'W.,.......:...........~~..,....W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [14, 9],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [4, 9], at: [4, 6], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps north. Look on the grass by the lane.', es: 'Desde esta nota, camina 3 pasos al norte. Busca en el pasto junto al camino.', fa: 'از این یادداشت، ۳ قدم به شمال برو. روی سبزهٔ کنار کوچه را ببین.' },
      text: { en: 'A piece of clear glass from Venice. Lens makers need glass this clear.', es: 'Un pedazo de vidrio claro de Venecia. Los que hacen lentes necesitan vidrio así.', fa: 'یک تکه شیشهٔ شفاف از ونیز. عدسی‌سازها به چنین شیشهٔ شفافی نیاز دارند.' } },
    { clueAt: [25, 12], at: [29, 12], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the city wall.', es: 'Desde esta nota, camina 4 pasos al este, hacia la muralla.', fa: 'از این یادداشت، ۴ قدم به شرق برو، به طرف دیوار شهر.' },
      text: { en: 'A sea shell! Scholars collected shells, rocks and plants to study nature up close.', es: '¡Una concha de mar! Los sabios juntaban conchas, piedras y plantas para estudiar la naturaleza de cerca.', fa: 'یک صدف بحری! دانشمندان صدف، سنگ و نبات جمع می‌کردند تا طبیعت را از نزدیک بشناسند.' } }
  ],

  words: {
    'scientific revolution': { en: 'a time, about 1540 to 1700, when people learned about nature by testing ideas', es: 'una época, más o menos de 1540 a 1700, en que la gente aprendió sobre la naturaleza probando ideas', fa: 'زمانی در حدود ۱۵۴۰ تا ۱۷۰۰ که مردم با آزمایش اندیشه‌ها طبیعت را شناختند' },
    telescope: { en: 'a tube with lenses that makes faraway things look close', es: 'un tubo con lentes que hace que lo lejano se vea cerca', fa: 'لوله‌ای با عدسی که چیزهای دور را نزدیک نشان می‌دهد' },
    lens: { en: 'a curved piece of clear glass that bends light', es: 'un pedazo curvo de vidrio claro que desvía la luz', fa: 'یک تکهٔ خمیدهٔ شیشهٔ شفاف که نور را کج می‌کند' },
    geocentric: { en: 'the old idea that the Earth is the center and everything moves around it', es: 'la idea antigua de que la Tierra es el centro y todo gira a su alrededor', fa: 'اندیشهٔ کهنه که زمین مرکز است و همه چیز به دورش می‌چرخد' },
    heliocentric: { en: 'the idea that the Earth and planets move around the Sun', es: 'la idea de que la Tierra y los planetas giran alrededor del Sol', fa: 'این اندیشه که زمین و سیاره‌ها به دور آفتاب می‌چرخند' },
    'scientific method': { en: 'steps to learn: ask a question, make a guess, test it, check the results', es: 'pasos para aprender: hacer una pregunta, suponer, probar y revisar los resultados', fa: 'قدم‌های یاد گرفتن: سؤال کن، حدس بزن، آزمایش کن، نتیجه را بررسی کن' },
    evidence: { en: 'facts you can see or measure that show if an idea is true', es: 'hechos que puedes ver o medir y que muestran si una idea es cierta', fa: 'حقیقت‌هایی که می‌بینی یا اندازه می‌گیری و نشان می‌دهند اندیشه‌ای درست است یا نه' },
    gravity: { en: 'the pull that makes things fall and keeps planets moving around the Sun', es: 'la fuerza que hace caer las cosas y mantiene a los planetas girando alrededor del Sol', fa: 'کششی که چیزها را می‌اندازد و سیاره‌ها را به دور آفتاب نگه می‌دارد' }
  },

  npcs: [
    {
      x: 7, y: 4,
      name: { en: 'Professor Bernardo', es: 'Profesor Bernardo', fa: 'استاد برناردو' },
      role: { en: 'Teacher of old books', es: 'Maestro de libros antiguos', fa: 'استاد کتاب‌های کهن' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#3a1a3a', pants: '#1a1a1a', robe: true, style: 'short' },
      lines: [
        { en: 'I teach the books of Aristotle, a Greek thinker from long ago.', es: 'Enseño los libros de Aristóteles, un pensador griego de hace mucho tiempo.', fa: 'من کتاب‌های ارسطو را درس می‌دهم، یک اندیشمند یونانی از زمان‌های دور.' },
        { en: 'He and Ptolemy said the Earth is the center. That is the [[geocentric|geocentric]] view.', es: 'Él y Ptolomeo dijeron que la Tierra es el centro. Esa es la idea [[geocentric|geocéntrica]].', fa: 'او و بطلیموس گفتند زمین مرکز است. این دیدگاه [[geocentric|زمین‌مرکزی]] است.' },
        { en: 'The Church agrees with them. Why trust a tube of glass over wise books?', es: 'La Iglesia está de acuerdo. ¿Por qué creerle a un tubo de vidrio y no a libros sabios?', fa: 'کلیسا با آن‌ها موافق است. چرا به یک لولهٔ شیشه بیشتر از کتاب‌های دانا اعتماد کنیم؟' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did many people reject the idea that the Earth moves?', es: '¿Por qué mucha gente rechazó la idea de que la Tierra se mueve?', fa: 'چرا بسیاری از مردم این اندیشه را که زمین حرکت می‌کند رد کردند؟' },
        choices: [
          { ok: true, t: { en: 'It went against old books and the Church', es: 'Iba contra los libros antiguos y la Iglesia', fa: 'خلاف کتاب‌های کهن و کلیسا بود' },
            why: { en: 'Yes. Old books and Church teaching said the Earth stood still. Changing that felt wrong.', es: 'Sí. Los libros antiguos y la Iglesia decían que la Tierra estaba quieta. Cambiar eso parecía malo.', fa: 'بله. کتاب‌های کهن و تعلیم کلیسا می‌گفتند زمین ایستاده است. تغییر آن نادرست به نظر می‌رسید.' } },
          { t: { en: 'Telescopes showed that the Earth stood still', es: 'Los telescopios mostraron que la Tierra estaba quieta', fa: 'تلسکوپ نشان داد که زمین ایستاده است' },
            why: { en: 'No. Telescopes gave evidence that the Earth moves around the Sun.', es: 'No. Los telescopios dieron pruebas de que la Tierra gira alrededor del Sol.', fa: 'نه. تلسکوپ‌ها دلیل آوردند که زمین به دور آفتاب می‌چرخد.' } },
          { t: { en: 'Galileo told everyone the Earth stays still', es: 'Galileo les dijo a todos que la Tierra no se mueve', fa: 'گالیله به همه گفت زمین حرکت نمی‌کند' },
            why: { en: 'No. Galileo said the opposite: the Earth moves around the Sun.', es: 'No. Galileo dijo lo contrario: la Tierra gira alrededor del Sol.', fa: 'نه. گالیله برعکس گفت: زمین به دور آفتاب می‌چرخد.' } }
        ]
      }
    },
    {
      x: 27, y: 5,
      name: { en: 'Giulia', es: 'Giulia', fa: 'جولیا' },
      role: { en: 'Lens maker', es: 'Fabricante de lentes', fa: 'عدسی‌ساز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#4a7a3a', pants: '#3a2a1a', style: 'bun' },
      lines: [
        { en: 'I grind glass into [[lens|lenses]]. Two lenses in a tube make a [[telescope|telescope]].', es: 'Pulo vidrio para hacer [[lens|lentes]]. Dos lentes en un tubo forman un [[telescope|telescopio]].', fa: 'من شیشه را می‌سایم و [[lens|عدسی]] می‌سازم. دو عدسی در یک لوله [[telescope|تلسکوپ]] می‌شود.' },
        { en: 'The telescope came from the Netherlands. Professor Galileo made a much stronger one.', es: 'El telescopio vino de los Países Bajos. El profesor Galileo hizo uno mucho más fuerte.', fa: 'تلسکوپ از هالند آمد. استاد گالیله یکی بسیار قوی‌تر ساخت.' },
        { en: 'Lens science grew from Ibn al-Haytham. He studied light in Cairo, 600 years ago.', es: 'La ciencia de los lentes creció gracias a Ibn al-Haytham. Él estudió la luz en El Cairo, hace 600 años.', fa: 'علم عدسی از ابن هیثم رشد کرد. او ۶۰۰ سال پیش در قاهره نور را مطالعه کرد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Who wrote important early ideas about light and how eyes see?', es: '¿Quién escribió ideas tempranas importantes sobre la luz y cómo ven los ojos?', fa: 'چه کسی اندیشه‌های مهم اولیه را دربارهٔ نور و دیدن چشم نوشت؟' },
        choices: [
          { ok: true, t: { en: 'Ibn al-Haytham, a scholar in Cairo', es: 'Ibn al-Haytham, un sabio de El Cairo', fa: 'ابن هیثم، دانشمندی در قاهره' },
            why: { en: 'Yes! His Book of Optics was read in Europe for hundreds of years.', es: '¡Sí! Su Libro de óptica se leyó en Europa por cientos de años.', fa: 'بله! کتاب نورشناسی او صدها سال در اروپا خوانده شد.' } },
          { t: { en: 'A king who ruled France long ago', es: 'Un rey que gobernó Francia hace mucho', fa: 'شاهی که زمانی بر فرانسه حکومت کرد' },
            why: { en: 'No. A scholar in Cairo, Ibn al-Haytham, studied light and the eye.', es: 'No. Un sabio de El Cairo, Ibn al-Haytham, estudió la luz y el ojo.', fa: 'نه. دانشمندی در قاهره، ابن هیثم، نور و چشم را مطالعه کرد.' } },
          { t: { en: 'Sailors who found lenses in the sea', es: 'Unos marineros que hallaron lentes en el mar', fa: 'ملاحانی که در بحر عدسی پیدا کردند' },
            why: { en: 'No. People make lenses from glass. Ibn al-Haytham explained how light works.', es: 'No. Los lentes se hacen de vidrio. Ibn al-Haytham explicó cómo funciona la luz.', fa: 'نه. عدسی را از شیشه می‌سازند. ابن هیثم توضیح داد نور چطور کار می‌کند.' } }
        ]
      }
    },
    {
      x: 7, y: 18,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیل' },
      role: { en: 'Medical student', es: 'Estudiante de medicina', fa: 'محصل طب' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2a3a6a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I study medicine. Padua lets Jewish students like me become doctors.', es: 'Estudio medicina. Padua deja que estudiantes judíos como yo sean médicos.', fa: 'من طب می‌خوانم. پادووا به محصلان یهودی مثل من اجازه می‌دهد داکتر شوند.' },
        { en: 'Long ago, Vesalius taught here. He studied real human bodies, not just books.', es: 'Hace tiempo, Vesalio enseñó aquí. Estudió cuerpos humanos reales, no solo libros.', fa: 'زمانی وزالیوس اینجا درس می‌داد. او بدن واقعی انسان را مطالعه کرد، نه فقط کتاب را.' },
        { en: 'He found many mistakes in the old books. [[evidence|Evidence]] beats guessing!', es: 'Encontró muchos errores en los libros antiguos. ¡Las [[evidence|pruebas]] valen más que adivinar!', fa: 'او در کتاب‌های کهن اشتباه‌های زیادی پیدا کرد. [[evidence|دلیل و شواهد]] از حدس بهتر است!' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How did Vesalius find mistakes in the old books?', es: '¿Cómo encontró Vesalio errores en los libros antiguos?', fa: 'وزالیوس چطور در کتاب‌های کهن اشتباه پیدا کرد؟' },
        choices: [
          { ok: true, t: { en: 'He looked closely at real bodies himself', es: 'Miró de cerca cuerpos reales él mismo', fa: 'خودش بدن‌های واقعی را دقیق دید' },
            why: { en: 'Yes. He checked the books against what he saw. That is using evidence.', es: 'Sí. Comparó los libros con lo que veía. Eso es usar pruebas.', fa: 'بله. او کتاب‌ها را با آنچه دید مقایسه کرد. این یعنی کار گرفتن از شواهد.' } },
          { t: { en: 'He asked the Pope which pages were wrong', es: 'Le preguntó al Papa qué páginas estaban mal', fa: 'از پاپ پرسید کدام صفحه‌ها غلط است' },
            why: { en: 'No. He did not ask anyone. He looked and checked for himself.', es: 'No. No le preguntó a nadie. Miró y revisó por sí mismo.', fa: 'نه. از کسی نپرسید. خودش دید و بررسی کرد.' } },
          { t: { en: 'He read the same old books again and again', es: 'Leyó los mismos libros antiguos una y otra vez', fa: 'همان کتاب‌های کهن را بارها خواند' },
            why: { en: 'No. Reading again cannot show a mistake. Looking at real bodies did.', es: 'No. Leer otra vez no muestra un error. Mirar cuerpos reales sí.', fa: 'نه. دوباره خواندن اشتباه را نشان نمی‌دهد. دیدن بدن‌های واقعی نشان داد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 5, text: { en: 'PADUA · 1610 · A university city in the Republic of Venice.', es: 'PADUA · 1610 · Una ciudad universitaria de la República de Venecia.', fa: 'پادووا · ۱۶۱۰ · یک شهر پوهنتون‌دار در جمهوری ونیز.' } },
    { x: 30, y: 8, text: { en: 'LENS WORKSHOPS · Glass from Venice, ground into lenses for telescopes and eyeglasses.', es: 'TALLERES DE LENTES · Vidrio de Venecia, pulido para telescopios y anteojos.', fa: 'کارگاه‌های عدسی · شیشهٔ ونیز که برای تلسکوپ و عینک سایده می‌شود.' } },
    { x: 21, y: 13, text: { en: 'BOTANICAL GARDEN · 1545 · Students study real plants here, not only pictures in books.', es: 'JARDÍN BOTÁNICO · 1545 · Aquí los estudiantes estudian plantas reales, no solo dibujos.', fa: 'باغ نباتات · ۱۵۴۵ · محصلان اینجا نبات‌های واقعی را مطالعه می‌کنند، نه فقط عکس کتاب را.' } }
  ],

  /* the quest: Lorenzo (gold !) on Galileo's street -> Rosa the boatwoman on the east bank of the canal ->
     the wind blew the star notes south into the round botanical garden, just south of its well -> back to Lorenzo */
  quest: {
    stat: 'loc',
    title: { en: 'The Lost Star Notes', es: 'Las notas de estrellas perdidas', fa: 'یادداشت‌های گم‌شدهٔ ستاره‌ها' },
    giver: {
      x: 5, y: 17,
      name: { en: 'Lorenzo', es: 'Lorenzo', fa: 'لورنزو' },
      role: { en: 'Professor\'s helper', es: 'Ayudante del profesor', fa: 'دستیار استاد' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#c87a2a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I help Professor Galileo. Each night, he draws Jupiter and its little stars.', es: 'Ayudo al profesor Galileo. Cada noche dibuja a Júpiter y sus estrellitas.', fa: 'من دستیار استاد گالیله هستم. هر شب او مشتری و ستاره‌های کوچکش را رسم می‌کند.' },
        { en: 'Today the wind blew his notebook out of my hands!', es: '¡Hoy el viento me arrancó su cuaderno de las manos!', fa: 'امروز باد کتابچه‌اش را از دستم برد!' },
        { en: 'Rosa the boatwoman saw it fly. Find her on the canal\'s east bank.', es: 'Rosa, la barquera, lo vio volar. Búscala en la orilla este del canal.', fa: 'رزا قایقران پریدنش را دید. او را در لب شرقی کانال پیدا کن.' }
      ],
      wait: { en: 'Rosa waits on the east bank of the canal, north of the big bridge.', es: 'Rosa espera en la orilla este del canal, al norte del puente grande.', fa: 'رزا در لب شرقی کانال، شمال پل بزرگ، منتظر است.' },
      thanks: { en: 'The star notes! The little stars circle Jupiter. They are moons! Thank you!', es: '¡Las notas! Las estrellitas giran alrededor de Júpiter. ¡Son lunas! ¡Gracias!', fa: 'یادداشت‌های ستاره! ستاره‌های کوچک به دور مشتری می‌چرخند. آن‌ها مهتاب هستند! تشکر!' }
    },
    contact: {
      x: 24, y: 9,
      name: { en: 'Rosa', es: 'Rosa', fa: 'رزا' },
      role: { en: 'Boatwoman', es: 'Barquera', fa: 'قایقران' },
      look: { skin: 3, hair: '#3a2a1a', shirt: '#2a6a8a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'Yes! Pages flew right over my boat. The wind blew them south.', es: '¡Sí! Unas hojas volaron sobre mi barca. El viento las llevó al sur.', fa: 'بله! ورق‌ها درست از بالای قایقم پریدند. باد آن‌ها را به جنوب برد.' },
        { en: 'It fell in the round botanical garden. Look just south of its well.', es: 'Cayó en el jardín botánico redondo. Busca justo al sur de su pozo.', fa: 'در باغ گرد نباتات افتاد. درست جنوب چاه آن را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [16, 17],
      hint: { en: 'Look just south of the well in the round garden.', es: 'Busca justo al sur del pozo del jardín redondo.', fa: 'درست جنوب چاه باغ گرد را ببین.' },
      found: { en: 'Found it! The notes show 4 small lights moving around Jupiter, night after night.', es: '¡Aquí está! Las notas muestran 4 lucecitas que se mueven alrededor de Júpiter, noche tras noche.', fa: 'پیدا شد! یادداشت‌ها ۴ نور کوچک را نشان می‌دهند که شب به شب به دور مشتری می‌چرخند.' },
      item: { icon: '📓', name: { en: 'The star notes', es: 'Las notas de estrellas', fa: 'یادداشت‌های ستاره' } }
    }
  },

  scraps: [[1, 1], [30, 10], [1, 20]],
  smudges: [[18, 9], [27, 14]],

  challenge: {
    at: [12, 7],
    type: 'order',
    stat: 'pla',
    title: { en: 'Put the discoveries in order', es: 'Ordena los descubrimientos', fa: 'کشف‌ها را به ترتیب بگذار' },
    intro: { en: 'The Grump mixed up the chronicle\'s timeline. Tap the discoveries from the oldest to the newest.',
      es: 'El Gruñón revolvió la línea del tiempo. Toca los descubrimientos del más antiguo al más nuevo.',
      fa: 'غرغرو خط زمان تاریخ‌نامه را درهم کرد. کشف‌ها را از کهنه‌ترین تا تازه‌ترین بزن.' },
    items: [
      { icon: '👁️', t: { en: '1021 · In Cairo, Ibn al-Haytham explains how light and eyes work', es: '1021 · En El Cairo, Ibn al-Haytham explica cómo funcionan la luz y los ojos', fa: '۱۰۲۱ · در قاهره، ابن هیثم توضیح می‌دهد نور و چشم چطور کار می‌کنند' } },
      { icon: '☀️', t: { en: '1543 · Copernicus writes that the Earth moves around the Sun', es: '1543 · Copérnico escribe que la Tierra gira alrededor del Sol', fa: '۱۵۴۳ · کوپرنیک می‌نویسد زمین به دور آفتاب می‌چرخد' } },
      { icon: '🔭', t: { en: '1610 · Galileo sees moons going around Jupiter', es: '1610 · Galileo ve lunas que giran alrededor de Júpiter', fa: '۱۶۱۰ · گالیله مهتاب‌هایی را می‌بیند که به دور مشتری می‌چرخند' } },
      { icon: '❤️', t: { en: '1628 · William Harvey shows the heart pumps blood around the body', es: '1628 · William Harvey muestra que el corazón bombea la sangre por el cuerpo', fa: '۱۶۲۸ · ویلیام هاروی نشان می‌دهد قلب خون را در بدن می‌چرخاند' } },
      { icon: '⚖️', t: { en: '1633 · The Church puts Galileo on trial', es: '1633 · La Iglesia lleva a juicio a Galileo', fa: '۱۶۳۳ · کلیسا گالیله را محاکمه می‌کند' } },
      { icon: '🍎', t: { en: '1687 · Isaac Newton explains gravity', es: '1687 · Isaac Newton explica la gravedad', fa: '۱۶۸۷ · آیزاک نیوتن جاذبه را توضیح می‌دهد' } }
    ],
    why: { en: 'Look at the years. Start with the smallest: 1021, 1543, 1610, 1628, 1633, then 1687.', es: 'Mira los años. Empieza por el más pequeño: 1021, 1543, 1610, 1628, 1633 y luego 1687.', fa: 'به سال‌ها نگاه کن. از کوچک‌ترین شروع کن: ۱۰۲۱، ۱۵۴۳، ۱۶۱۰، ۱۶۲۸، ۱۶۳۳، بعد ۱۶۸۷.' },
    success: { en: 'The timeline is fixed! Each discovery built on the ones before it.', es: '¡La línea del tiempo está arreglada! Cada descubrimiento se apoyó en los anteriores.', fa: 'خط زمان درست شد! هر کشف روی کشف‌های پیش از خود ساخته شد.' }
  },

  boss: {
    at: [28, 19],
    stat: 'hei',
    need: 3,
    name: { en: 'The Fog Grump', es: 'El Gruñón de la Niebla', fa: 'غرغروی مه' },
    appear: { en: 'The Fog Grump is hiding at the fair, east of the canal!', es: '¡El Gruñón de la Niebla se esconde en la feria, al este del canal!', fa: 'غرغروی مه در میله، شرق کانال، پنهان است!' },
    taunt: { en: 'Why look and test? Just believe what the old books say!', es: '¿Para qué mirar y probar? ¡Cree lo que dicen los libros viejos!', fa: 'چرا ببینی و آزمایش کنی؟ فقط هر چه کتاب‌های کهنه می‌گویند باور کن!' },
    win: { en: 'The fog lifts and the stars shine. Chronicle page 3.2 floats down into your hands!', es: 'La niebla se va y brillan las estrellas. ¡La página 3.2 de la crónica cae en tus manos!', fa: 'مه کنار می‌رود و ستاره‌ها می‌درخشند. صفحهٔ ۳.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was the Scientific Revolution?', es: '¿Qué fue la Revolución Científica?', fa: 'انقلاب علمی چه بود؟' },
        choices: [
          { en: 'A time when people tested ideas about nature', es: 'Una época en que la gente probaba ideas sobre la naturaleza', fa: 'زمانی که مردم اندیشه‌ها دربارهٔ طبیعت را آزمایش کردند' },
          { en: 'A war between scientists and the kings of Europe', es: 'Una guerra entre los científicos y los reyes de Europa', fa: 'جنگی میان دانشمندان و شاهان اروپا' },
          { en: 'A new church that began in the city of Padua', es: 'Una iglesia nueva que empezó en la ciudad de Padua', fa: 'کلیسای نوی که در شهر پادووا شروع شد' },
          { en: 'A time when people stopped asking any questions', es: 'Una época en que la gente dejó de hacer preguntas', fa: 'زمانی که مردم دیگر هیچ سؤالی نپرسیدند' }],
        answer: 0,
        why: { en: 'People watched, measured and tested. They trusted evidence more than old books.', es: 'La gente observaba, medía y probaba. Confiaba más en las pruebas que en los libros viejos.', fa: 'مردم دیدند، اندازه گرفتند و آزمایش کردند. به شواهد بیشتر از کتاب‌های کهن اعتماد کردند.' } },
      { q: { en: 'What did Copernicus say about the Earth?', es: '¿Qué dijo Copérnico sobre la Tierra?', fa: 'کوپرنیک دربارهٔ زمین چه گفت؟' },
        choices: [
          { en: 'It moves around the Sun', es: 'Gira alrededor del Sol', fa: 'به دور آفتاب می‌چرخد' },
          { en: 'It stands still in the center', es: 'Está quieta en el centro', fa: 'در مرکز ایستاده است' },
          { en: 'It is flat like a big plate', es: 'Es plana como un plato grande', fa: 'مثل یک بشقاب بزرگ هموار است' },
          { en: 'The Moon moves it each night', es: 'La Luna la mueve cada noche', fa: 'مهتاب هر شب آن را حرکت می‌دهد' }],
        answer: 0,
        why: { en: 'In 1543, Copernicus wrote that the Earth and planets move around the Sun. This is the heliocentric idea.', es: 'En 1543, Copérnico escribió que la Tierra y los planetas giran alrededor del Sol. Es la idea heliocéntrica.', fa: 'در ۱۵۴۳، کوپرنیک نوشت زمین و سیاره‌ها به دور آفتاب می‌چرخند. این اندیشهٔ آفتاب‌مرکزی است.' } },
      { q: { en: 'What did Galileo see with his telescope in 1610?', es: '¿Qué vio Galileo con su telescopio en 1610?', fa: 'گالیله در ۱۶۱۰ با تلسکوپش چه دید؟' },
        choices: [
          { en: 'Moons going around Jupiter', es: 'Lunas girando alrededor de Júpiter', fa: 'مهتاب‌هایی به دور مشتری' },
          { en: 'People living on the Moon', es: 'Gente que vivía en la Luna', fa: 'مردمی که در مهتاب زندگی می‌کردند' },
          { en: 'The Sun going around Mars', es: 'El Sol girando alrededor de Marte', fa: 'آفتاب که به دور مریخ می‌چرخید' },
          { en: 'A wall around the stars', es: 'Un muro alrededor de las estrellas', fa: 'دیواری به دور ستاره‌ها' }],
        answer: 0,
        why: { en: 'Moons circled Jupiter, not the Earth. So not everything moves around the Earth!', es: 'Las lunas giraban alrededor de Júpiter, no de la Tierra. ¡No todo gira alrededor de la Tierra!', fa: 'مهتاب‌ها به دور مشتری می‌چرخیدند، نه زمین. پس همه چیز به دور زمین نمی‌چرخد!' } },
      { q: { en: 'Why did the Church put Galileo on trial in 1633?', es: '¿Por qué la Iglesia llevó a juicio a Galileo en 1633?', fa: 'چرا کلیسا در ۱۶۳۳ گالیله را محاکمه کرد؟' },
        choices: [
          { en: 'He taught that the Earth moves around the Sun', es: 'Enseñó que la Tierra gira alrededor del Sol', fa: 'تعلیم داد که زمین به دور آفتاب می‌چرخد' },
          { en: 'He stole a telescope from the Netherlands', es: 'Robó un telescopio de los Países Bajos', fa: 'یک تلسکوپ را از هالند دزدید' },
          { en: 'He refused to teach at the University of Padua', es: 'Se negó a enseñar en la Universidad de Padua', fa: 'از درس دادن در پوهنتون پادووا سر باز زد' },
          { en: 'He said that Jupiter has no moons at all', es: 'Dijo que Júpiter no tiene ninguna luna', fa: 'گفت مشتری هیچ مهتابی ندارد' }],
        answer: 0,
        why: { en: 'Church leaders said his idea went against the Bible. Galileo had to live under guard at home.', es: 'Los líderes de la Iglesia dijeron que su idea iba contra la Biblia. Galileo tuvo que vivir vigilado en casa.', fa: 'رهبران کلیسا گفتند اندیشه‌اش خلاف کتاب مقدس است. گالیله مجبور شد زیر نظر در خانه بماند.' } },
      { q: { en: 'Which list shows steps of the scientific method?', es: '¿Qué lista muestra los pasos del método científico?', fa: 'کدام فهرست قدم‌های روش علمی را نشان می‌دهد؟' },
        choices: [
          { en: 'Ask, guess, test, check the results', es: 'Preguntar, suponer, probar, revisar', fa: 'سؤال، حدس، آزمایش، بررسی نتیجه' },
          { en: 'Read, copy, believe, never ask again', es: 'Leer, copiar, creer, no preguntar más', fa: 'خواندن، نقل کردن، باور کردن، دیگر نپرسیدن' },
          { en: 'Guess, write it down, tell everyone', es: 'Adivinar, escribirlo, contarlo a todos', fa: 'حدس زدن، نوشتن، به همه گفتن' },
          { en: 'Ask a king, then do what he says', es: 'Preguntar al rey y hacer lo que diga', fa: 'از شاه پرسیدن و هر چه گفت کردن' }],
        answer: 0,
        why: { en: 'Scientists ask a question, make a guess, test it, and check what happened.', es: 'Los científicos hacen una pregunta, suponen, prueban y revisan lo que pasó.', fa: 'دانشمندان سؤال می‌کنند، حدس می‌زنند، آزمایش می‌کنند و نتیجه را بررسی می‌کنند.' } },
      { q: { en: 'What did Isaac Newton explain in 1687?', es: '¿Qué explicó Isaac Newton en 1687?', fa: 'آیزاک نیوتن در ۱۶۸۷ چه چیزی را توضیح داد؟' },
        choices: [
          { en: 'Gravity pulls on apples and planets alike', es: 'La gravedad atrae igual a manzanas y planetas', fa: 'جاذبه سیب و سیاره را یک‌سان می‌کشد' },
          { en: 'The heart pumps blood around the body', es: 'El corazón bombea la sangre por el cuerpo', fa: 'قلب خون را در بدن می‌چرخاند' },
          { en: 'Lenses make faraway things look close', es: 'Los lentes hacen ver cerca lo lejano', fa: 'عدسی چیزهای دور را نزدیک نشان می‌دهد' },
          { en: 'The Earth stands still at the center', es: 'La Tierra está quieta en el centro', fa: 'زمین در مرکز ایستاده است' }],
        answer: 0,
        why: { en: 'Newton said one force, gravity, makes apples fall and keeps planets moving around the Sun.', es: 'Newton dijo que una fuerza, la gravedad, hace caer las manzanas y mueve los planetas alrededor del Sol.', fa: 'نیوتن گفت یک نیرو، جاذبه، سیب را می‌اندازد و سیاره‌ها را به دور آفتاب نگه می‌دارد.' } },
      { q: { en: 'How did Vesalius change the study of medicine?', es: '¿Cómo cambió Vesalio el estudio de la medicina?', fa: 'وزالیوس مطالعهٔ طب را چطور تغییر داد؟' },
        choices: [
          { en: 'He studied real human bodies closely', es: 'Estudió de cerca cuerpos humanos reales', fa: 'بدن واقعی انسان را دقیق مطالعه کرد' },
          { en: 'He made the first telescope in Italy', es: 'Hizo el primer telescopio de Italia', fa: 'اولین تلسکوپ ایتالیا را ساخت' },
          { en: 'He said doctors should only read old books', es: 'Dijo que los médicos solo debían leer libros viejos', fa: 'گفت داکترها فقط کتاب‌های کهن را بخوانند' },
          { en: 'He found a new plant to cure every disease', es: 'Encontró una planta que curaba todo mal', fa: 'نباتی پیدا کرد که هر مریضی را علاج می‌کرد' }],
        answer: 0,
        why: { en: 'Vesalius checked old books against real bodies. He fixed many mistakes about the human body.', es: 'Vesalio comparó los libros viejos con cuerpos reales. Corrigió muchos errores sobre el cuerpo humano.', fa: 'وزالیوس کتاب‌های کهن را با بدن واقعی مقایسه کرد. اشتباه‌های زیادی را دربارهٔ بدن انسان درست کرد.' } },
      { q: { en: 'In 1628, what did William Harvey show?', es: 'En 1628, ¿qué mostró William Harvey?', fa: 'ویلیام هاروی در ۱۶۲۸ چه چیزی را نشان داد؟' },
        choices: [
          { en: 'The heart pumps blood around the body', es: 'El corazón bombea la sangre por el cuerpo', fa: 'قلب خون را در بدن می‌چرخاند' },
          { en: 'Jupiter has four moons that go around it', es: 'Júpiter tiene cuatro lunas que lo rodean', fa: 'مشتری چهار مهتاب دارد که به دورش می‌چرخند' },
          { en: 'The Moon has mountains and deep valleys', es: 'La Luna tiene montañas y valles hondos', fa: 'مهتاب کوه و درهٔ عمیق دارد' },
          { en: 'Light comes out of our eyes to see', es: 'La luz sale de nuestros ojos para ver', fa: 'نور برای دیدن از چشم ما بیرون می‌آید' }],
        answer: 0,
        why: { en: 'Harvey, who studied in Padua, tested and measured. He showed blood goes around and around the body.', es: 'Harvey, que estudió en Padua, probó y midió. Mostró que la sangre da vueltas por el cuerpo.', fa: 'هاروی که در پادووا درس خوانده بود، آزمایش و اندازه‌گیری کرد. نشان داد خون در بدن دور می‌زند.' } }
    ]
  },

  learned: [
    { en: 'In the [[scientific revolution|Scientific Revolution]], people tested ideas by watching, measuring and doing experiments.', es: 'En la [[scientific revolution|Revolución Científica]], la gente probó ideas observando, midiendo y haciendo experimentos.', fa: 'در [[scientific revolution|انقلاب علمی]]، مردم اندیشه‌ها را با دیدن، اندازه گرفتن و تجربه کردن آزمایش کردند.' },
    { en: 'Copernicus and Galileo showed the Earth moves around the Sun. The Church put Galileo on trial.', es: 'Copérnico y Galileo mostraron que la Tierra gira alrededor del Sol. La Iglesia llevó a juicio a Galileo.', fa: 'کوپرنیک و گالیله نشان دادند زمین به دور آفتاب می‌چرخد. کلیسا گالیله را محاکمه کرد.' },
    { en: 'Ideas came from many places, like Ibn al-Haytham in Cairo. Later, Newton explained [[gravity|gravity]].', es: 'Las ideas vinieron de muchos lugares, como Ibn al-Haytham en El Cairo. Después, Newton explicó la [[gravity|gravedad]].', fa: 'اندیشه‌ها از جاهای زیادی آمدند، مثل ابن هیثم در قاهره. بعدها نیوتن [[gravity|جاذبه]] را توضیح داد.' }
  ],
  reflect: {
    q: { en: 'Think of something you believe is true. How could you test it?', es: 'Piensa en algo que crees que es cierto. ¿Cómo podrías probarlo?', fa: 'به چیزی فکر کن که باور داری درست است. چطور می‌توانی آن را آزمایش کنی؟' },
    starter: { en: 'I could test my idea by', es: 'Podría probar mi idea', fa: 'می‌توانم اندیشه‌ام را این‌طور آزمایش کنم:' }
  }
};
