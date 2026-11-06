/* TIMEWALKER · Episode 3.1 · The Reformation (WHII)
   Wittenberg, a small university town on the Elbe River in Saxony (Holy Roman Empire), autumn 1517.
   North half: inside the town wall. The Castle Church at the west end (its door was the university's notice board),
   the market square and the town church (St. Mary's) in the middle, the university and the Augustinian
   monastery (where Luther lived) at the east end, along one long main street (row 4).
   South half: the print shop and homes inside the wall, the town wall with two gates (x 11 and 20),
   then fields, meadows and a boat dock on the Elbe. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'WHII',
  title: { en: 'The Reformation', es: 'La Reforma', fa: 'اصلاحات دینی' },
  place: { en: 'Wittenberg, 1517', es: 'Wittenberg, 1517', fa: 'ویتنبرگ، ۱۵۱۷' },
  intro: [
    { en: 'The Grump blurred the [[reformation|Reformation]] page. People forgot why the Church split apart.',
      es: 'El Gruñón borró la página de la [[reformation|Reforma]]. La gente olvidó por qué se dividió la Iglesia.',
      fa: 'غرغرو صفحهٔ [[reformation|اصلاحات دینی]] را تار کرد. مردم فراموش کردند چرا کلیسا دو تکه شد.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Wittenberg on the world map, 1517 on the timeline */
  scenes: {
    at: [12.6, 51.9],
    year: 1517,
    start: [
      { en: 'In 1517, most people in Western Europe were Catholic Christians.',
        es: 'En 1517, casi toda la gente de Europa occidental era cristiana católica.',
        fa: 'در سال ۱۵۱۷، بیشتر مردم غرب اروپا عیسوی کاتولیک بودند.' },
      { en: 'The Pope in Rome led the Church. Some said its leaders loved money too much.',
        es: 'El Papa, en Roma, dirigía la Iglesia. Algunos decían que sus líderes amaban demasiado el dinero.',
        fa: 'پاپ در روم رهبر کلیسا بود. بعضی می‌گفتند رهبران آن پول را زیاد دوست دارند.' },
      { en: 'In the town of Wittenberg, a monk named Martin Luther asked hard questions.',
        es: 'En el pueblo de Wittenberg, un monje llamado Martín Lutero hizo preguntas difíciles.',
        fa: 'در شهر ویتنبرگ، راهبی به نام مارتین لوتر سؤال‌های سخت پرسید.' }
    ],
    page: { en: 'Today, hundreds of millions of people around the world belong to Protestant churches.',
      es: 'Hoy, cientos de millones de personas en todo el mundo son de iglesias protestantes.',
      fa: 'امروز صدها میلیون نفر در سراسر جهان پیرو کلیساهای پروتستان هستند.' },
    guess: {
      q: { en: 'In 1517, could most people read the Bible in their own language?', es: 'En 1517, ¿la mayoría podía leer la Biblia en su propio idioma?', fa: 'در سال ۱۵۱۷، آیا بیشتر مردم می‌توانستند کتاب مقدس را به زبان خود بخوانند؟' },
      choices: [
        { t: { en: '🚫 No, it was in Latin', es: '🚫 No, estaba en latín', fa: '🚫 نه، به زبان لاتین بود' }, ok: true },
        { t: { en: '📖 Yes, very easily', es: '📖 Sí, muy fácilmente', fa: '📖 بله، خیلی آسان' } }
      ],
      why: { en: 'Most Bibles were in Latin. Few ordinary people could read Latin.', es: 'Casi todas las Biblias estaban en latín. Poca gente común sabía leer latín.', fa: 'بیشتر کتاب‌های مقدس به لاتین بودند. مردم عادی کمی لاتین می‌خواندند.' }
    },
    next: {
      q: { en: 'Next: the Scientific Revolution. How did scientists test their ideas?', es: 'Ahora: la Revolución Científica. ¿Cómo probaban sus ideas los científicos?', fa: 'بعدی: انقلاب علمی. دانشمندان اندیشه‌های خود را چطور آزمایش می‌کردند؟' },
      choices: [
        { t: { en: '🔭 With careful experiments', es: '🔭 Con experimentos cuidadosos', fa: '🔭 با تجربه‌های دقیق' }, ok: true },
        { t: { en: '🎲 By guessing', es: '🎲 Adivinando', fa: '🎲 با حدس زدن' } }
      ],
      why: { en: 'They watched, measured and tested. Then they shared what they found.', es: 'Observaban, medían y probaban. Luego compartían lo que descubrían.', fa: 'آن‌ها دیدند، اندازه گرفتند و آزمایش کردند. بعد یافته‌های خود را با دیگران شریک ساختند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [4, 3], name: { en: 'Konrad', es: 'Konrad', fa: 'کونراد' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#4a3a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the Castle Church. Its door is the university\'s notice board.', es: 'Esta es la Iglesia del Castillo. Su puerta es el tablero de avisos de la universidad.', fa: 'این کلیسای قلعه است. دروازهٔ آن تختهٔ اعلانات پوهنتون است.' },
        { en: 'Teachers post ideas here to debate. Look, 95 points from Brother Martin!', es: 'Los maestros ponen aquí ideas para debatir. ¡Mira, 95 puntos del hermano Martín!', fa: 'استادان اندیشه‌ها را برای بحث اینجا می‌چسپانند. ببین، ۹۵ نکته از برادر مارتین!' }
      ] },
    { at: [10, 2], name: { en: 'Anna', es: 'Anna', fa: 'آنا' },
      look: { skin: 1, hair: '#c89a50', shirt: '#7a4a8a', pants: '#3a2a3a', style: 'bun' },
      lines: [
        { en: 'Come in! I make candles for the churches and homes of Wittenberg.', es: '¡Pasa! Hago velas para las iglesias y las casas de Wittenberg.', fa: 'بیا داخل! من برای کلیساها و خانه‌های ویتنبرگ شمع می‌سازم.' },
        { en: 'My neighbor paid for an indulgence. Now she wonders if it was worth it.', es: 'Mi vecina pagó por una indulgencia. Ahora se pregunta si valió la pena.', fa: 'همسایه‌ام برای یک آمرزش‌نامه پول داد. حالا فکر می‌کند ارزشش را داشت یا نه.' }
      ] },
    { at: [23, 2], name: { en: 'Veit', es: 'Veit', fa: 'فایت' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#2a4a7a', pants: '#3a3a3a', hat: '#1a1a1a' },
      lines: [
        { en: 'I trade cloth in Leipzig and Venice. Merchants hear news from far away.', es: 'Vendo tela en Leipzig y Venecia. Los comerciantes oímos noticias de lejos.', fa: 'من در لایپزیگ و ونیز تکه سودا می‌کنم. سوداگران خبرهای دور را می‌شنوند.' },
        { en: 'The Ottoman Empire took Egypt this year. Our rulers are worried.', es: 'El Imperio otomano tomó Egipto este año. Nuestros gobernantes están preocupados.', fa: 'امپراتوری عثمانی امسال مصر را گرفت. حاکمان ما نگران هستند.' }
      ] },
    { at: [28, 3], name: { en: 'Lukas', es: 'Lukas', fa: 'لوکاس' },
      look: { skin: 1, hair: '#d8b060', shirt: '#2a2a2a', pants: '#3a2a1a', robe: true, style: 'short' },
      lines: [
        { en: 'I came from Poland to study at this new university.', es: 'Vine de Polonia a estudiar en esta universidad nueva.', fa: 'من از پولند آمده‌ام تا در این پوهنتون نو درس بخوانم.' },
        { en: 'Students come from all over Europe. They will carry Luther\'s ideas home.', es: 'Vienen estudiantes de toda Europa. Llevarán las ideas de Lutero a sus países.', fa: 'محصلان از سراسر اروپا می‌آیند. آن‌ها اندیشه‌های لوتر را به وطن خود می‌برند.' }
      ] },
    { at: [27, 7], name: { en: 'Brother Paul', es: 'Hermano Pablo', fa: 'برادر پاول' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2a2a2a', pants: '#2a2a2a', robe: true, style: 'short' },
      lines: [
        { en: 'This is the Augustinian [[monk|monks\']] home. Brother Martin lives and prays here.', es: 'Esta es la casa de los [[monk|monjes]] agustinos. El hermano Martín vive y reza aquí.', fa: 'این خانهٔ [[monk|راهبان]] آگوستینی است. برادر مارتین اینجا زندگی و عبادت می‌کند.' },
        { en: 'He teaches the Bible at the university. He reads it very closely.', es: 'Enseña la Biblia en la universidad. La lee con mucho cuidado.', fa: 'او در پوهنتون کتاب مقدس درس می‌دهد. آن را بسیار دقیق می‌خواند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): inside the wall. Castle Church (D) west, market (m stalls, l paving, O well), St. Mary's (D),
     houses (R/Q over h), the university (x 26-30) and the monastery (D, x 26-29, rows 6-7).
     South (y 11-21): the print shop and homes, the town wall (row 14) with gates at x 11 and 20,
     wheat fields, meadows, the Elbe River (rows 18-20) with a boat dock (k). */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.DDDDD..RRR...DDDD...QQQ.RRRRRW',
    'W.DDDDD..hdh...DDDD...hdh.hhhhhW',
    'W.DDdDD..,.,...DDDD..,...,hhdhhW',
    'WllllllllllllllllllllllllllllllW',
    'Wx.l.....llllmmlllmmllll..l...xW',
    'W..l..O..llllllllllllllll.DDDD.W',
    'W..l.....lllmmlllllmmlll..DdDD.W',
    'W..lllllllllllllllllllllllllll.W',
    'W.....,....:........:....,.....W',
    'W..........:........:..........W',
    'W.RRRR.QQQ.:..,.....:..RRRR.QQ.W',
    'W.hhhh.hhh.:.......,:..hhhh.hh.W',
    'W..........:........:..........W',
    'WWWWWWWWWWW:WWWWWWWW:WWWWWWWWWWW',
    'T....,.....:...,....:......,...T',
    'T.wwww.www.:.wwww...::::::::...T',
    'T..,.......:.........,.........T',
    'T~~~~~~~~~~~~~~~~~~~~~~~~~~k~~~T',
    'T==============================T',
    'T~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [14, 9],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [8, 6], at: [8, 9], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps south. Look on the grass.', es: 'Desde esta nota, camina 3 pasos al sur. Busca en el pasto.', fa: 'از این یادداشت، ۳ قدم به جنوب برو. روی سبزه را ببین.' },
      text: { en: 'A writing quill! Later, Luther wrote the Bible in German, so ordinary people could read it.', es: '¡Una pluma para escribir! Después, Lutero puso la Biblia en alemán para que la gente común la leyera.', fa: 'یک قلم پَر! بعدها لوتر کتاب مقدس را به آلمانی نوشت تا مردم عادی آن را بخوانند.' } },
    { clueAt: [22, 15], at: [17, 17], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps west, then 2 steps south, toward the river.', es: 'Desde esta nota, camina 5 pasos al oeste y luego 2 pasos al sur, hacia el río.', fa: 'از این یادداشت، ۵ قدم به غرب برو، بعد ۲ قدم به جنوب، به طرف دریا.' },
      text: { en: 'An old silver coin. Many families paid coins like this for indulgences.', es: 'Una moneda vieja de plata. Muchas familias pagaban monedas así por indulgencias.', fa: 'یک سکهٔ کهنهٔ نقره‌ای. خانواده‌های زیادی با سکه‌هایی مثل این آمرزش‌نامه می‌خریدند.' } }
  ],

  words: {
    reformation: { en: 'a movement in the 1500s to change the Christian Church; it split the Church', es: 'un movimiento de los años 1500 para cambiar la Iglesia cristiana; dividió a la Iglesia', fa: 'جنبشی در سال‌های ۱۵۰۰ برای تغییر کلیسای عیسوی؛ کلیسا را تقسیم کرد' },
    indulgence: { en: 'a paper from the Church said to lower the punishment for a person\'s sins', es: 'un papel de la Iglesia que decía reducir el castigo por los pecados de una persona', fa: 'کاغذی از کلیسا که می‌گفتند جزای گناهان آدم را کم می‌کند' },
    theses: { en: 'short statements or arguments that people can debate', es: 'frases cortas o argumentos que la gente puede debatir', fa: 'جمله‌ها یا دلیل‌های کوتاه که مردم دربارهٔ آن بحث می‌کنند' },
    pope: { en: 'the leader of the Catholic Church, in Rome', es: 'el líder de la Iglesia católica, en Roma', fa: 'رهبر کلیسای کاتولیک، در روم' },
    protestant: { en: 'a Christian whose church broke away from the Catholic Church', es: 'un cristiano cuya iglesia se separó de la Iglesia católica', fa: 'عیسوی‌ای که کلیسایش از کلیسای کاتولیک جدا شد' },
    'printing press': { en: 'a machine that prints many copies of a page quickly', es: 'una máquina que imprime muchas copias de una página rápido', fa: 'ماشینی که از یک صفحه زود نسخه‌های زیاد چاپ می‌کند' },
    monk: { en: 'a man who lives with other religious men and gives his life to prayer', es: 'un hombre que vive con otros religiosos y dedica su vida a rezar', fa: 'مردی که با مردان دینی دیگر زندگی می‌کند و عمرش را به عبادت می‌گذراند' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Margarete', es: 'Margarete', fa: 'مارگرته' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 1, hair: '#7a4a2a', shirt: '#e8dcc0', pants: '#6a3a2a', style: 'bun' },
      lines: [
        { en: 'Fresh bread! Everyone in town is talking about a monk\'s paper today.', es: '¡Pan fresco! Hoy todo el pueblo habla del papel de un monje.', fa: 'نان تازه! امروز همهٔ شهر دربارهٔ کاغذ یک راهب گپ می‌زنند.' },
        { en: 'A Church seller came to Jüterbog, near here. He sold [[indulgence|indulgences]].', es: 'Un vendedor de la Iglesia vino a Jüterbog, cerca de aquí. Vendía [[indulgence|indulgencias]].', fa: 'یک فروشندهٔ کلیسا به یوتربوگ، نزدیک اینجا، آمد. او [[indulgence|آمرزش‌نامه]] می‌فروخت.' },
        { en: 'Brother Martin Luther says buying them is wrong. Only God forgives sins.', es: 'El hermano Martín Lutero dice que comprarlas está mal. Solo Dios perdona los pecados.', fa: 'برادر مارتین لوتر می‌گوید خریدن آن‌ها نادرست است. فقط خدا گناه را می‌بخشد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Luther write his 95 [[theses|Theses]]?', es: '¿Por qué escribió Lutero sus 95 [[theses|tesis]]?', fa: 'چرا لوتر [[theses|۹۵ نکتهٔ]] خود را نوشت؟' },
        choices: [
          { ok: true, t: { en: 'He said selling indulgences was wrong', es: 'Dijo que vender indulgencias estaba mal', fa: 'گفت فروختن آمرزش‌نامه نادرست است' },
            why: { en: 'Yes. Luther said people could not buy God\'s forgiveness with money.', es: 'Sí. Lutero dijo que el perdón de Dios no se puede comprar con dinero.', fa: 'بله. لوتر گفت بخشش خدا را با پول نمی‌شود خرید.' } },
          { t: { en: 'He wanted the Church to sell many more', es: 'Quería que la Iglesia vendiera muchas más', fa: 'می‌خواست کلیسا خیلی بیشتر بفروشد' },
            why: { en: 'No. Luther wanted the selling of indulgences to stop, not to grow.', es: 'No. Lutero quería que la venta de indulgencias parara, no que creciera.', fa: 'نه. لوتر می‌خواست فروش آمرزش‌نامه بس شود، نه زیاد شود.' } },
          { t: { en: 'The emperor asked him to write new laws', es: 'El emperador le pidió escribir leyes nuevas', fa: 'امپراتور از او خواست قانون نو بنویسد' },
            why: { en: 'No. Nobody ordered him. Luther wrote them so teachers would debate the Church\'s selling.', es: 'No. Nadie se lo ordenó. Lutero las escribió para que los maestros debatieran esa venta.', fa: 'نه. کسی به او امر نکرد. لوتر آن‌ها را نوشت تا استادان دربارهٔ این فروش بحث کنند.' } }
        ]
      }
    },
    {
      x: 17, y: 5,
      name: { en: 'Father Johannes', es: 'Padre Johannes', fa: 'پدر یوهانس' },
      role: { en: 'Catholic priest', es: 'Sacerdote católico', fa: 'کشیش کاتولیک' },
      look: { skin: 2, hair: '#5a4a3a', shirt: '#1a1a1a', pants: '#1a1a1a', robe: true, style: 'short' },
      lines: [
        { en: 'I am a Catholic priest. The Church has guided Christians for 1,500 years.', es: 'Soy sacerdote católico. La Iglesia ha guiado a los cristianos por 1,500 años.', fa: 'من کشیش کاتولیک هستم. کلیسا ۱۵۰۰ سال عیسویان را رهنمایی کرده است.' },
        { en: 'Some sellers are greedy, it is true. But the [[pope|Pope]] leads our Church.', es: 'Es cierto, algunos vendedores son codiciosos. Pero el [[pope|Papa]] guía nuestra Iglesia.', fa: 'راست است، بعضی فروشنده‌ها حریص هستند. اما [[pope|پاپ]] رهبر کلیسای ماست.' },
        { en: 'Many people will stay Catholic. The Church will fix its own problems.', es: 'Mucha gente seguirá siendo católica. La Iglesia arreglará sus propios problemas.', fa: 'مردم زیادی کاتولیک می‌مانند. کلیسا مشکلات خود را خودش درست می‌کند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did many Catholics stay loyal to the Pope?', es: '¿Por qué muchos católicos siguieron fieles al Papa?', fa: 'چرا بسیاری از کاتولیک‌ها به پاپ وفادار ماندند؟' },
        choices: [
          { ok: true, t: { en: 'They trusted the Church\'s old teachings', es: 'Confiaban en las enseñanzas antiguas de la Iglesia', fa: 'به تعلیمات کهن کلیسا اعتماد داشتند' },
            why: { en: 'Yes. For many people, the Church and its old ways meant faith and safety.', es: 'Sí. Para mucha gente, la Iglesia y sus costumbres eran fe y seguridad.', fa: 'بله. برای بسیاری از مردم، کلیسا و راه‌های کهنش یعنی ایمان و امنیت.' } },
          { t: { en: 'The Pope paid every family to stay Catholic', es: 'El Papa le pagaba a cada familia por quedarse', fa: 'پاپ به هر خانواده پول می‌داد تا بمانند' },
            why: { en: 'No. The Pope did not pay families. Many stayed because of their faith.', es: 'No. El Papa no pagaba a las familias. Muchos se quedaron por su fe.', fa: 'نه. پاپ به خانواده‌ها پول نمی‌داد. بسیاری به خاطر ایمان خود ماندند.' } },
          { t: { en: 'Luther asked them all to stay with the Pope', es: 'Lutero les pidió a todos quedarse con el Papa', fa: 'لوتر از همه خواست با پاپ بمانند' },
            why: { en: 'No. Luther argued against the Pope. Catholics stayed because they trusted their Church.', es: 'No. Lutero discutía contra el Papa. Los católicos se quedaron porque confiaban en su Iglesia.', fa: 'نه. لوتر با پاپ مخالفت کرد. کاتولیک‌ها ماندند، چون به کلیسای خود اعتماد داشتند.' } }
        ]
      }
    },
    {
      x: 4, y: 13,
      name: { en: 'Hans', es: 'Hans', fa: 'هانس' },
      role: { en: 'Printer', es: 'Impresor', fa: 'چاپگر' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#c8b890', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is a [[printing press|printing press]]. It prints hundreds of pages in one day.', es: 'Esta es una [[printing press|imprenta]]. Imprime cientos de páginas en un día.', fa: 'این یک [[printing press|ماشین چاپ]] است. در یک روز صدها صفحه چاپ می‌کند.' },
        { en: 'Before presses, people copied books by hand. One Bible took many months.', es: 'Antes de las imprentas, los libros se copiaban a mano. Una Biblia tomaba muchos meses.', fa: 'پیش از ماشین چاپ، کتاب‌ها را با دست نقل می‌کردند. یک کتاب مقدس چند ماه وقت می‌گرفت.' },
        { en: 'Luther\'s 95 Theses were printed. They spread across Germany in a few weeks.', es: 'Las 95 tesis de Lutero se imprimieron. En pocas semanas llegaron a toda Alemania.', fa: '۹۵ نکتهٔ لوتر چاپ شد. در چند هفته در سراسر آلمان پخش شد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did Luther\'s ideas reach so many towns so fast?', es: '¿Cómo llegaron las ideas de Lutero tan rápido a tantos pueblos?', fa: 'اندیشه‌های لوتر چطور این‌قدر زود به این همه شهر رسید؟' },
        choices: [
          { ok: true, t: { en: 'Printers made many copies of his writings', es: 'Los impresores hicieron muchas copias de sus escritos', fa: 'چاپگرها از نوشته‌هایش نسخه‌های زیاد ساختند' },
            why: { en: 'Yes! The printing press made copies fast, so ideas traveled across Europe.', es: '¡Sí! La imprenta hacía copias rápido, así que las ideas viajaron por Europa.', fa: 'بله! ماشین چاپ زود نسخه می‌ساخت، پس اندیشه‌ها در سراسر اروپا سفر کردند.' } },
          { t: { en: 'Monks walked to every town to read them aloud', es: 'Los monjes caminaban a cada pueblo para leerlas en voz alta', fa: 'راهب‌ها به هر شهر پیاده رفتند تا آن‌ها را بلند بخوانند' },
            why: { en: 'No. Walking was far too slow. Printed copies spread his ideas fast.', es: 'No. Caminar era demasiado lento. Las copias impresas difundieron sus ideas rápido.', fa: 'نه. پیاده رفتن خیلی کند بود. نسخه‌های چاپی اندیشه‌هایش را زود پخش کرد.' } },
          { t: { en: 'The Pope sent his letters to every church', es: 'El Papa envió sus cartas a cada iglesia', fa: 'پاپ نامه‌هایش را به هر کلیسا فرستاد' },
            why: { en: 'No. The Pope disagreed with Luther. Printers spread his ideas.', es: 'No. El Papa no estaba de acuerdo con Lutero. Los impresores difundieron sus ideas.', fa: 'نه. پاپ با لوتر موافق نبود. چاپگرها اندیشه‌هایش را پخش کردند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 5, text: { en: 'WITTENBERG · 1517 · A small university town in Saxony, part of the Holy Roman Empire.', es: 'WITTENBERG · 1517 · Un pequeño pueblo universitario de Sajonia, en el Sacro Imperio Romano.', fa: 'ویتنبرگ · ۱۵۱۷ · یک شهر کوچک پوهنتون‌دار در ساکسونی، بخشی از امپراتوری مقدس روم.' } },
    { x: 30, y: 5, text: { en: 'UNIVERSITY OF WITTENBERG · Founded in 1502. Martin Luther teaches the Bible here.', es: 'UNIVERSIDAD DE WITTENBERG · Fundada en 1502. Martín Lutero enseña la Biblia aquí.', fa: 'پوهنتون ویتنبرگ · ساخته شده در ۱۵۰۲. مارتین لوتر اینجا کتاب مقدس درس می‌دهد.' } }
  ],

  /* the quest: Elsa (gold !) by the river dock -> Klaus the night watchman inside the west gate ->
     the Ink Thief tore her printed copy of the 95 Theses into 3 pieces, one at each place in Luther's story:
     the Castle Church door (west), the university (east), the print shop (by the west gate) -> back to Elsa */
  quest: {
    stat: 'hei',
    title: { en: 'The Torn Theses', es: 'Las tesis rotas', fa: 'نکته‌های پاره‌شده' },
    giver: {
      x: 26, y: 17,
      name: { en: 'Elsa', es: 'Elsa', fa: 'اِلزا' },
      role: { en: 'Bookbinder', es: 'Encuadernadora', fa: 'صحاف' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#2f7f6f', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'I bought a printed copy of Luther\'s 95 Theses for my brother in Nuremberg.', es: 'Compré una copia impresa de las 95 tesis de Lutero para mi hermano en Núremberg.', fa: 'من یک نسخهٔ چاپی ۹۵ نکتهٔ لوتر را برای برادرم در نورنبرگ خریدم.' },
        { en: 'A little thief with inky hands tore it up and ran into town!', es: '¡Un ladroncito con las manos llenas de tinta la rompió y corrió al pueblo!', fa: 'یک دزد کوچک با دست‌های رنگی آن را پاره کرد و به شهر دوید!' },
        { en: 'Klaus the night watchman saw it. He stands inside the west gate.', es: 'Klaus, el sereno, lo vio. Está adentro de la puerta oeste.', fa: 'کلاوس پهره‌دار شب آن را دید. او داخل دروازهٔ غربی ایستاده است.' }
      ],
      wait: { en: 'Klaus waits just inside the west gate of the town wall.', es: 'Klaus espera justo adentro de la puerta oeste de la muralla.', fa: 'کلاوس درست داخل دروازهٔ غربی دیوار شهر منتظر است.' },
      thanks: { en: 'My copy is whole again! A boat will carry it to Nuremberg. Thank you!', es: '¡Mi copia está completa otra vez! Un barco la llevará a Núremberg. ¡Gracias!', fa: 'نسخه‌ام دوباره کامل شد! یک کشتی آن را به نورنبرگ می‌برد. تشکر!' }
    },
    contact: {
      x: 12, y: 13,
      name: { en: 'Klaus', es: 'Klaus', fa: 'کلاوس' },
      role: { en: 'Night watchman', es: 'Sereno', fa: 'پهره‌دار شب' },
      look: { skin: 2, hair: '#6a6a6a', shirt: '#5a2a2a', pants: '#2a2a3a', hat: '#2a2a2a' },
      lines: [
        { en: 'Yes, I saw the little thief! It tore the paper into 3 pieces.', es: '¡Sí, vi al ladroncito! Rompió el papel en 3 pedazos.', fa: 'بله، دزد کوچک را دیدم! کاغذ را سه تکه کرد.' },
        { en: 'It hid each piece at a place in Luther\'s story. Follow its riddles!', es: 'Escondió cada pedazo en un lugar de la historia de Lutero. ¡Sigue sus acertijos!', fa: 'هر تکه را در یک جای داستان لوتر پنهان کرد. چیستان‌هایش را دنبال کن!' }
      ]
    },
    action: {
      type: 'chase',
      at: [2, 10],
      hops: [[8, 10], [5, 10]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! 3 pieces in 3 places from Luther\'s story. Can you find them?', es: '¡Ji ji! 3 pedazos en 3 lugares de la historia de Lutero. ¿Puedes hallarlos?', fa: 'هی هی! سه تکه در سه جای داستان لوتر. می‌توانی پیدایشان کنی؟' },
      clues: [
        { t: { en: 'Piece 1 is at the church door where Luther posted his Theses. Go to the west end.', es: 'El pedazo 1 está en la puerta de la iglesia donde Lutero puso sus tesis. Ve al extremo oeste.', fa: 'تکهٔ ۱ کنار دروازهٔ کلیسایی است که لوتر نکته‌هایش را آنجا چسپاند. به آخر غربی برو.' },
          zones: [{ x: 2, y: 4, w: 5, h: 1 }],
          noBy: [{ x: 15, y: 4, w: 4, h: 1, t: { en: 'This is the town church. Luther posted his Theses on the Castle Church door, farther west.', es: 'Esta es la iglesia del pueblo. Lutero puso sus tesis en la puerta de la Iglesia del Castillo, más al oeste.', fa: 'این کلیسای شهر است. لوتر نکته‌هایش را به دروازهٔ کلیسای قلعه، دورتر به غرب، چسپاند.' } }],
          found: { en: 'Piece 1! Teachers posted ideas on the Castle Church door to debate them.', es: '¡El pedazo 1! Los maestros ponían ideas en esa puerta para debatirlas.', fa: 'تکهٔ ۱! استادان اندیشه‌ها را برای بحث به دروازهٔ کلیسای قلعه می‌چسپاندند.' } },
        { t: { en: 'Piece 2 is where Luther taught. Teachers and students argued about ideas there.', es: 'El pedazo 2 está donde Lutero enseñaba. Allí maestros y estudiantes discutían ideas.', fa: 'تکهٔ ۲ جایی است که لوتر درس می‌داد. آنجا استادان و محصلان دربارهٔ اندیشه‌ها بحث می‌کردند.' },
          zones: [{ x: 26, y: 4, w: 5, h: 1 }],
          noBy: [{ x: 26, y: 8, w: 4, h: 1, t: { en: 'This is the monastery, where Luther lived and prayed. He taught at the university.', es: 'Este es el monasterio, donde Lutero vivía y rezaba. Él enseñaba en la universidad.', fa: 'این خانهٔ راهبان است، جایی که لوتر زندگی و عبادت می‌کرد. او در پوهنتون درس می‌داد.' } }],
          found: { en: 'Piece 2, at the university! Students argued about Luther\'s ideas here.', es: '¡El pedazo 2, en la universidad! Aquí los estudiantes discutían las ideas de Lutero.', fa: 'تکهٔ ۲، در پوهنتون! محصلان اینجا دربارهٔ اندیشه‌های لوتر بحث می‌کردند.' } },
        { t: { en: 'Piece 3 is where a machine prints hundreds of pages a day. Look near the west gate.', es: 'El pedazo 3 está donde una máquina imprime cientos de páginas al día. Busca cerca de la puerta oeste.', fa: 'تکهٔ ۳ جایی است که یک ماشین در روز صدها صفحه چاپ می‌کند. نزدیک دروازهٔ غربی را ببین.' },
          zones: [{ x: 1, y: 13, w: 6, h: 1 }],
          noBy: [{ x: 23, y: 13, w: 5, h: 1, t: { en: 'These are homes. The print shop is on the west side of town.', es: 'Estas son casas. La imprenta está en el lado oeste del pueblo.', fa: 'این‌ها خانه هستند. چاپخانه در طرف غربی شهر است.' } }],
          found: { en: 'Piece 3, at the print shop! Printing spread Luther\'s words far and fast.', es: '¡El pedazo 3, en la imprenta! La imprenta llevó las palabras de Lutero lejos y rápido.', fa: 'تکهٔ ۳، در چاپخانه! چاپ سخنان لوتر را زود و دور پخش کرد.' } }
      ],
      win: { en: 'Got you! The Ink Thief drops the pieces and runs. The 95 Theses are whole again.', es: '¡Te atrapé! El Ladrón de Tinta suelta los pedazos y huye. Las 95 tesis están completas.', fa: 'گرفتمت! دزد رنگ تکه‌ها را می‌اندازد و فرار می‌کند. ۹۵ نکته دوباره کامل است.' },
      item: { icon: '📜', name: { en: 'Elsa\'s copy of the 95 Theses', es: 'La copia de las 95 tesis de Elsa', fa: 'نسخهٔ ۹۵ نکتهٔ اِلزا' } }
    }
  },

  scraps: [[1, 1], [30, 13], [1, 17]],
  smudges: [[8, 16], [24, 9]],

  challenge: {
    at: [15, 7],
    type: 'table',
    stat: 'pla',
    title: { en: 'New churches, new ideas', es: 'Iglesias nuevas, ideas nuevas', fa: 'کلیساهای نو، اندیشه‌های نو' },
    intro: { en: 'The Grump smudged the chronicle\'s table. Read about the churches after 1517, then answer.',
      es: 'El Gruñón manchó la tabla de la crónica. Lee sobre las iglesias después de 1517 y responde.',
      fa: 'غرغرو جدول تاریخ‌نامه را لکه‌دار کرد. دربارهٔ کلیساهای بعد از ۱۵۱۷ بخوان، بعد جواب بده.' },
    table: {
      head: [
        { en: 'Church', es: 'Iglesia', fa: 'کلیسا' },
        { en: 'Leader', es: 'Líder', fa: 'رهبر' },
        { en: 'Where and when', es: 'Dónde y cuándo', fa: 'کجا و چه وقت' },
        { en: 'Main idea', es: 'Idea principal', fa: 'اندیشهٔ اصلی' }
      ],
      rows: [
        [{ en: 'Lutheran', es: 'Luterana', fa: 'لوتری' }, { en: 'Martin Luther, a monk', es: 'Martín Lutero, un monje', fa: 'مارتین لوتر، یک راهب' }, { en: 'Germany, 1517', es: 'Alemania, 1517', fa: 'آلمان، ۱۵۱۷' }, { en: 'Faith saves people, not money. The Bible guides faith.', es: 'La fe salva, no el dinero. La Biblia guía la fe.', fa: 'ایمان نجات می‌دهد، نه پول. کتاب مقدس رهنمای ایمان است.' }],
        [{ en: 'Anglican (Church of England)', es: 'Anglicana (Iglesia de Inglaterra)', fa: 'انگلیکن (کلیسای انگلستان)' }, { en: 'King Henry VIII', es: 'El rey Enrique VIII', fa: 'شاه هنری هشتم' }, { en: 'England, 1534', es: 'Inglaterra, 1534', fa: 'انگلستان، ۱۵۳۴' }, { en: 'The king, not the Pope, leads the church.', es: 'El rey, no el Papa, dirige la iglesia.', fa: 'شاه، نه پاپ، رهبر کلیسا است.' }],
        [{ en: 'Calvinist', es: 'Calvinista', fa: 'کالوینی' }, { en: 'John Calvin, a teacher', es: 'Juan Calvino, un maestro', fa: 'جان کالوین، یک معلم' }, { en: 'Geneva, Switzerland, 1541', es: 'Ginebra, Suiza, 1541', fa: 'ژنو، سویس، ۱۵۴۱' }, { en: 'God has already chosen who will be saved.', es: 'Dios ya eligió quién se salvará.', fa: 'خدا از پیش انتخاب کرده که چه کسی نجات می‌یابد.' }],
        [{ en: 'Catholic', es: 'Católica', fa: 'کاتولیک' }, { en: 'The Pope and the Council of Trent', es: 'El Papa y el Concilio de Trento', fa: 'پاپ و شورای ترنت' }, { en: 'Trent, Italy, 1545', es: 'Trento, Italia, 1545', fa: 'ترنت، ایتالیا، ۱۵۴۵' }, { en: 'Keep the Pope and old beliefs. Stop selling indulgences.', es: 'Mantener al Papa y las creencias. Dejar de vender indulgencias.', fa: 'پاپ و باورهای کهن بمانند. فروش آمرزش‌نامه بس شود.' }]
      ],
      note: { en: 'The year is when each church began, or when the big meeting started.', es: 'El año es cuando empezó cada iglesia o la gran reunión.', fa: 'سال، وقت شروع هر کلیسا یا شروع جلسهٔ بزرگ است.' }
    },
    questions: [
      { q: { en: 'Which church did a king start?', es: '¿Qué iglesia empezó un rey?', fa: 'کدام کلیسا را یک شاه شروع کرد؟' },
        choices: [{ en: 'The Anglican Church', es: 'La Iglesia anglicana', fa: 'کلیسای انگلیکن' }, { en: 'The Lutheran Church', es: 'La Iglesia luterana', fa: 'کلیسای لوتری' }, { en: 'The Calvinist Church', es: 'La Iglesia calvinista', fa: 'کلیسای کالوینی' }], answer: 0,
        why: { en: 'King Henry VIII made himself head of the Church of England in 1534.', es: 'El rey Enrique VIII se hizo jefe de la Iglesia de Inglaterra en 1534.', fa: 'شاه هنری هشتم در سال ۱۵۳۴ خودش را رهبر کلیسای انگلستان ساخت.' } },
      { q: { en: 'Which idea did John Calvin teach?', es: '¿Qué idea enseñó Juan Calvino?', fa: 'جان کالوین کدام اندیشه را تعلیم داد؟' },
        choices: [{ en: 'God has already chosen who is saved', es: 'Dios ya eligió quién se salva', fa: 'خدا از پیش نجات‌یافتگان را برگزیده' }, { en: 'The king should lead the church', es: 'El rey debe dirigir la iglesia', fa: 'شاه باید رهبر کلیسا باشد' }, { en: 'People can buy less punishment', es: 'Se puede comprar menos castigo', fa: 'مردم می‌توانند جزای کمتر بخرند' }], answer: 0,
        why: { en: 'Read the Calvinist row. Calvin taught that God already chose who will be saved.', es: 'Lee la fila calvinista. Calvino enseñó que Dios ya eligió quién se salvará.', fa: 'ردیف کالوینی را بخوان. کالوین گفت خدا از پیش انتخاب کرده چه کسی نجات می‌یابد.' } },
      { q: { en: 'Which of these churches began first?', es: '¿Cuál de estas iglesias empezó primero?', fa: 'کدام یک از این کلیساها اول شروع شد؟' },
        choices: [{ en: 'Lutheran, in 1517', es: 'La luterana, en 1517', fa: 'لوتری، در ۱۵۱۷' }, { en: 'Anglican, in 1534', es: 'La anglicana, en 1534', fa: 'انگلیکن، در ۱۵۳۴' }, { en: 'Calvinist, in 1541', es: 'La calvinista, en 1541', fa: 'کالوینی، در ۱۵۴۱' }], answer: 0,
        why: { en: 'Luther\'s 95 Theses came in 1517. The other churches began years later.', es: 'Las 95 tesis de Lutero son de 1517. Las otras iglesias empezaron años después.', fa: '۹۵ نکتهٔ لوتر در ۱۵۱۷ بود. کلیساهای دیگر سال‌ها بعد شروع شدند.' } },
      { q: { en: 'How did the Catholic Church answer the Protestants?', es: '¿Cómo respondió la Iglesia católica a los protestantes?', fa: 'کلیسای کاتولیک به پروتستان‌ها چه جواب داد؟' },
        choices: [{ en: 'It kept the Pope but fixed some problems', es: 'Mantuvo al Papa, pero arregló algunos problemas', fa: 'پاپ را نگه داشت، اما بعضی مشکلات را حل کرد' }, { en: 'It closed all of its churches', es: 'Cerró todas sus iglesias', fa: 'همهٔ کلیساهای خود را بست' }, { en: 'It made a king its new leader', es: 'Puso a un rey como su nuevo líder', fa: 'یک شاه را رهبر نو خود ساخت' }], answer: 0,
        why: { en: 'At the Council of Trent, the Church kept its beliefs and stopped selling indulgences.', es: 'En el Concilio de Trento, la Iglesia mantuvo sus creencias y dejó de vender indulgencias.', fa: 'در شورای ترنت، کلیسا باورهای خود را نگه داشت و فروش آمرزش‌نامه را بس کرد.' } }
    ],
    success: { en: 'The table is clear again! One Church became many churches after 1517.', es: '¡La tabla está clara otra vez! Después de 1517, una sola Iglesia se volvió muchas.', fa: 'جدول دوباره روشن شد! بعد از ۱۵۱۷، یک کلیسا به کلیساهای زیاد تبدیل شد.' }
  },

  boss: {
    at: [16, 16],
    stat: 'loc',
    need: 3,
    name: { en: 'The Ink-Blot Grump', es: 'El Gruñón Manchón', fa: 'غرغروی لکه‌دار' },
    appear: { en: 'The Ink-Blot Grump is hiding in the fields by the Elbe River!', es: '¡El Gruñón Manchón se esconde en los campos junto al río Elba!', fa: 'غرغروی لکه‌دار در کشتزارهای کنار دریای اِلبه پنهان است!' },
    taunt: { en: 'Why ask questions? Do as you are told, and forget the rest!', es: '¿Para qué preguntar? ¡Haz lo que te dicen y olvida lo demás!', fa: 'چرا سؤال کنی؟ هر چه گفتند بکن و باقی را فراموش کن!' },
    win: { en: 'The ink washes away in the river. Chronicle page 3.1 floats down into your hands!', es: 'La tinta se va con el río. ¡La página 3.1 de la crónica cae en tus manos!', fa: 'رنگ با دریا شسته می‌شود. صفحهٔ ۳.۱ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was an indulgence?', es: '¿Qué era una indulgencia?', fa: 'آمرزش‌نامه چه بود؟' },
        choices: [
          { en: 'A Church paper that promised less punishment for sin', es: 'Un papel de la Iglesia que prometía menos castigo por el pecado', fa: 'کاغذ کلیسا که جزای کمتر برای گناه وعده می‌داد' },
          { en: 'A tax that every farmer paid to the emperor each year', es: 'Un impuesto que cada campesino pagaba al emperador cada año', fa: 'مالیه‌ای که هر دهقان هر سال به امپراتور می‌داد' },
          { en: 'A book of Bible stories printed in the German language', es: 'Un libro de historias de la Biblia impreso en alemán', fa: 'کتاب داستان‌های کتاب مقدس که به آلمانی چاپ شد' },
          { en: 'A letter that let a monk leave his monastery for good', es: 'Una carta que dejaba a un monje salir del monasterio para siempre', fa: 'نامه‌ای که به راهب اجازه می‌داد برای همیشه برود' }],
        answer: 0,
        why: { en: 'The Church sold indulgences. Luther said forgiveness comes from God, not from money.', es: 'La Iglesia vendía indulgencias. Lutero dijo que el perdón viene de Dios, no del dinero.', fa: 'کلیسا آمرزش‌نامه می‌فروخت. لوتر گفت بخشش از خداست، نه از پول.' } },
      { q: { en: 'What were Luther\'s 95 Theses?', es: '¿Qué eran las 95 tesis de Lutero?', fa: '۹۵ نکتهٔ لوتر چه بود؟' },
        choices: [
          { en: 'His list of arguments against selling indulgences', es: 'Su lista de argumentos contra la venta de indulgencias', fa: 'فهرست دلیل‌هایش علیه فروش آمرزش‌نامه' },
          { en: 'A list of 95 new laws written by the Holy Roman Emperor', es: 'Una lista de 95 leyes nuevas del emperador del Sacro Imperio', fa: 'فهرست ۹۵ قانون نو که امپراتور مقدس روم نوشت' },
          { en: 'A map of 95 churches that travelers should visit', es: 'Un mapa de 95 iglesias que los viajeros debían visitar', fa: 'نقشهٔ ۹۵ کلیسا که مسافران باید ببینند' },
          { en: 'A book of 95 prayers that monks read every day', es: 'Un libro de 95 oraciones que los monjes leían cada día', fa: 'کتاب ۹۵ دعا که راهب‌ها هر روز می‌خواندند' }],
        answer: 0,
        why: { en: 'In 1517, Luther wrote 95 arguments. He wanted teachers to debate them.', es: 'En 1517, Lutero escribió 95 argumentos. Quería que los maestros los debatieran.', fa: 'در ۱۵۱۷، لوتر ۹۵ دلیل نوشت. می‌خواست استادان دربارهٔ آن‌ها بحث کنند.' } },
      { q: { en: 'Why did Luther\'s ideas spread so quickly?', es: '¿Por qué las ideas de Lutero se difundieron tan rápido?', fa: 'چرا اندیشه‌های لوتر این‌قدر زود پخش شد؟' },
        choices: [
          { en: 'Printing presses made many copies', es: 'Las imprentas hicieron muchas copias', fa: 'ماشین‌های چاپ نسخه‌های زیاد ساختند' },
          { en: 'Ships carried his letters to China and India', es: 'Los barcos llevaron sus cartas a China y la India', fa: 'کشتی‌ها نامه‌هایش را به چین و هند بردند' },
          { en: 'Every church read them aloud on Sunday', es: 'Cada iglesia las leía en voz alta el domingo', fa: 'هر کلیسا روز یکشنبه آن‌ها را بلند می‌خواند' },
          { en: 'The Pope sent them to every bishop', es: 'El Papa las envió a cada obispo', fa: 'پاپ آن‌ها را به هر اسقف فرستاد' }],
        answer: 0,
        why: { en: 'Printers copied Luther\'s writings fast. In a few weeks, people all over Germany read them.', es: 'Los impresores copiaban rápido los escritos de Lutero. En pocas semanas, toda Alemania los leía.', fa: 'چاپگرها نوشته‌های لوتر را زود چاپ کردند. در چند هفته، مردم سراسر آلمان آن‌ها را خواندند.' } },
      { q: { en: 'Why did Luther put the Bible into German?', es: '¿Por qué Lutero puso la Biblia en alemán?', fa: 'چرا لوتر کتاب مقدس را به آلمانی برگرداند؟' },
        choices: [
          { en: 'So ordinary people could read it', es: 'Para que la gente común pudiera leerla', fa: 'تا مردم عادی بتوانند آن را بخوانند' },
          { en: 'So the Pope in Rome could read it faster', es: 'Para que el Papa en Roma la leyera más rápido', fa: 'تا پاپ در روم آن را زودتر بخواند' },
          { en: 'So he could sell it to build a palace', es: 'Para venderla y construir un palacio', fa: 'تا آن را بفروشد و قصر بسازد' },
          { en: 'So students would stop learning Latin', es: 'Para que los estudiantes dejaran el latín', fa: 'تا محصلان دیگر لاتین یاد نگیرند' }],
        answer: 0,
        why: { en: 'Most Bibles were in Latin. Luther wanted everyone to read the Bible in their own language.', es: 'Casi todas las Biblias estaban en latín. Lutero quería que todos la leyeran en su idioma.', fa: 'بیشتر کتاب‌های مقدس به لاتین بود. لوتر می‌خواست همه آن را به زبان خود بخوانند.' } },
      { q: { en: 'Why did King Henry VIII of England break away from the Pope?', es: '¿Por qué el rey Enrique VIII de Inglaterra se separó del Papa?', fa: 'چرا شاه هنری هشتم انگلستان از پاپ جدا شد؟' },
        choices: [
          { en: 'The Pope would not end his marriage', es: 'El Papa no quiso anular su matrimonio', fa: 'پاپ ازدواجش را باطل نکرد' },
          { en: 'The Pope wanted to rule England himself', es: 'El Papa quería gobernar Inglaterra él mismo', fa: 'پاپ می‌خواست خودش بر انگلستان حکومت کند' },
          { en: 'Luther asked Henry to lead all Protestants', es: 'Lutero le pidió a Enrique dirigir a los protestantes', fa: 'لوتر از هنری خواست رهبر همهٔ پروتستان‌ها شود' },
          { en: 'Spain paid Henry to start a new church', es: 'España le pagó a Enrique por crear una iglesia', fa: 'هسپانیه به هنری پول داد تا کلیسای نو بسازد' }],
        answer: 0,
        why: { en: 'Henry wanted a new wife and a son. In 1534, he made himself head of the Church of England.', es: 'Enrique quería otra esposa y un hijo. En 1534 se hizo jefe de la Iglesia de Inglaterra.', fa: 'هنری خانم و پسر نو می‌خواست. در ۱۵۳۴ خودش را رهبر کلیسای انگلستان ساخت.' } },
      { q: { en: 'What did the Catholic Church do in the Catholic Reformation?', es: '¿Qué hizo la Iglesia católica en la Reforma católica?', fa: 'کلیسای کاتولیک در اصلاحات کاتولیک چه کرد؟' },
        choices: [
          { en: 'It fixed some problems and kept its beliefs', es: 'Arregló algunos problemas y mantuvo sus creencias', fa: 'بعضی مشکلات را حل کرد و باورهایش را نگه داشت' },
          { en: 'It agreed with Luther and closed its churches', es: 'Le dio la razón a Lutero y cerró sus iglesias', fa: 'با لوتر موافقت کرد و کلیساهایش را بست' },
          { en: 'It asked the Ottoman Empire to choose for it', es: 'Le pidió al Imperio otomano que eligiera por ella', fa: 'از امپراتوری عثمانی خواست به جایش انتخاب کند' },
          { en: 'It stopped teaching and closed all its schools', es: 'Dejó de enseñar y cerró todas sus escuelas', fa: 'درس دادن را بس کرد و همهٔ مکتب‌هایش را بست' }],
        answer: 0,
        why: { en: 'The Council of Trent stopped the selling of indulgences. Jesuit priests opened schools around the world.', es: 'El Concilio de Trento acabó con la venta de indulgencias. Los jesuitas abrieron escuelas por el mundo.', fa: 'شورای ترنت فروش آمرزش‌نامه را بس کرد. کشیشان یسوعی در سراسر جهان مکتب باز کردند.' } },
      { q: { en: 'Why did some German princes support Luther?', es: '¿Por qué algunos príncipes alemanes apoyaron a Lutero?', fa: 'چرا بعضی امیران آلمانی از لوتر حمایت کردند؟' },
        choices: [
          { en: 'They wanted more power and Church lands', es: 'Querían más poder y las tierras de la Iglesia', fa: 'قدرت بیشتر و زمین‌های کلیسا را می‌خواستند' },
          { en: 'They wanted the Pope to rule their lands', es: 'Querían que el Papa gobernara sus tierras', fa: 'می‌خواستند پاپ بر سرزمین‌شان حکومت کند' },
          { en: 'Luther paid them with gold from Rome', es: 'Lutero les pagó con oro de Roma', fa: 'لوتر با طلای روم به آن‌ها پول داد' },
          { en: 'The Ottomans told them all to help him', es: 'Los otomanos les dijeron que lo ayudaran', fa: 'عثمانی‌ها به همه گفتند به او کمک کنند' }],
        answer: 0,
        why: { en: 'Princes who left the Pope could take Church land and money. Many also shared Luther\'s faith.', es: 'Los príncipes que dejaban al Papa podían tomar tierras y dinero de la Iglesia. Muchos compartían su fe.', fa: 'امیرانی که از پاپ جدا شدند، زمین و پول کلیسا را گرفتند. بسیاری ایمان لوتر را هم داشتند.' } },
      { q: { en: 'What was one big result of the Reformation in Europe?', es: '¿Cuál fue un gran resultado de la Reforma en Europa?', fa: 'یک نتیجهٔ بزرگ اصلاحات دینی در اروپا چه بود؟' },
        choices: [
          { en: 'Europe split into Catholic and Protestant lands', es: 'Europa se dividió en tierras católicas y protestantes', fa: 'اروپا به سرزمین‌های کاتولیک و پروتستان تقسیم شد' },
          { en: 'Every country in Europe became Protestant at once', es: 'Todos los países de Europa se volvieron protestantes', fa: 'همهٔ کشورهای اروپا یک‌باره پروتستان شدند' },
          { en: 'The Church stopped using Latin all over the world', es: 'La Iglesia dejó de usar el latín en todo el mundo', fa: 'کلیسا در همهٔ جهان استفاده از لاتین را بس کرد' },
          { en: 'Printing presses were banned in every German town', es: 'Se prohibieron las imprentas en cada pueblo alemán', fa: 'ماشین چاپ در هر شهر آلمان منع شد' }],
        answer: 0,
        why: { en: 'Europe divided by religion. Wars followed, like the Thirty Years\' War, 1618 to 1648.', es: 'Europa se dividió por la religión. Luego hubo guerras, como la Guerra de los Treinta Años, de 1618 a 1648.', fa: 'اروپا بر اساس دین تقسیم شد. بعد جنگ‌ها آمد، مثل جنگ سی‌ساله از ۱۶۱۸ تا ۱۶۴۸.' } }
    ]
  },

  learned: [
    { en: 'In 1517, Martin Luther wrote 95 [[theses|Theses]] against selling [[indulgence|indulgences]]. The [[reformation|Reformation]] began.', es: 'En 1517, Martín Lutero escribió 95 [[theses|tesis]] contra la venta de [[indulgence|indulgencias]]. Empezó la [[reformation|Reforma]].', fa: 'در ۱۵۱۷، مارتین لوتر [[theses|۹۵ نکته]] علیه فروش [[indulgence|آمرزش‌نامه]] نوشت. [[reformation|اصلاحات دینی]] شروع شد.' },
    { en: 'The [[printing press|printing press]] spread his ideas. [[protestant|Protestant]] churches began in Germany, England and Switzerland.', es: 'La [[printing press|imprenta]] difundió sus ideas. Nacieron iglesias [[protestant|protestantes]] en Alemania, Inglaterra y Suiza.', fa: '[[printing press|ماشین چاپ]] اندیشه‌هایش را پخش کرد. کلیساهای [[protestant|پروتستان]] در آلمان، انگلستان و سویس شروع شدند.' },
    { en: 'The Catholic Church fixed some problems and kept its beliefs. Europe split by religion.', es: 'La Iglesia católica arregló algunos problemas y mantuvo sus creencias. Europa se dividió por la religión.', fa: 'کلیسای کاتولیک بعضی مشکلات را حل کرد و باورهایش را نگه داشت. اروپا بر اساس دین تقسیم شد.' }
  ],
  reflect: {
    q: { en: 'Luther asked hard questions about a rule. When is it good to question a rule?', es: 'Lutero hizo preguntas difíciles sobre una regla. ¿Cuándo es bueno cuestionar una regla?', fa: 'لوتر دربارهٔ یک قاعده سؤال‌های سخت پرسید. چه وقت سؤال کردن از یک قاعده خوب است؟' },
    starter: { en: 'It is good to question a rule when', es: 'Es bueno cuestionar una regla cuando', fa: 'سؤال کردن از یک قاعده خوب است وقتی که' }
  }
};
