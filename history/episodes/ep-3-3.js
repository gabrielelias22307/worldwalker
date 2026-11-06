/* TIMEWALKER · Episode 3.3 · Absolute Kings (WHII)
   Versailles, near Paris, 1685: the year Louis XIV ended the Edict of Nantes, one year after the Hall of Mirrors
   was finished with mirrors made in France. North half: the town of Versailles (west), the palace (Q over h,
   door 15,3), the terrace, flower beds, fountains and tree groves, and the royal mirror workshop (east).
   The Grand Canal (rows 13-15) crosses the middle; you walk around its ends (x 1-5 and 26-30).
   South half: a farm village with huts and wheat (west) and the town market (east). */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'WHII',
  title: { en: 'Absolute Kings', es: 'Reyes absolutos', fa: 'پادشاهان مطلق' },
  place: { en: 'Versailles, 1685', es: 'Versalles, 1685', fa: 'ورسای، ۱۶۸۵' },
  intro: [
    { en: 'The Grump hid the [[absolute monarch|Absolute Kings]] page. People forgot who held the power.',
      es: 'El Gruñón escondió la página de los [[absolute monarch|reyes absolutos]]. La gente olvidó quién tenía el poder.',
      fa: 'غرغرو صفحهٔ [[absolute monarch|پادشاهان مطلق]] را پنهان کرد. مردم فراموش کردند قدرت در دست چه کسی بود.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Versailles on the world map, 1685 on the timeline */
  scenes: {
    at: [2.1, 48.8],
    year: 1685,
    start: [
      { en: 'In the 1600s, some kings held almost all the power in their lands.',
        es: 'En los años 1600, algunos reyes tenían casi todo el poder en sus tierras.',
        fa: 'در سال‌های ۱۶۰۰، بعضی شاهان تقریباً همهٔ قدرت سرزمین خود را داشتند.' },
      { en: 'In France, King Louis XIV ruled for 72 years.',
        es: 'En Francia, el rey Luis XIV gobernó durante 72 años.',
        fa: 'در فرانسه، شاه لویی چهاردهم ۷۲ سال حکومت کرد.' },
      { en: 'He built a giant palace at Versailles, near Paris.',
        es: 'Construyó un palacio gigante en Versalles, cerca de París.',
        fa: 'او یک قصر بسیار بزرگ در ورسای، نزدیک پاریس، ساخت.' }
    ],
    page: { en: 'Today, Versailles is a museum. Millions of visitors walk its halls each year.',
      es: 'Hoy Versalles es un museo. Millones de visitantes recorren sus salones cada año.',
      fa: 'امروز ورسای یک موزیم است. هر سال میلیون‌ها نفر از تالارهایش دیدن می‌کنند.' },
    guess: {
      q: { en: 'Louis XIV called himself the Sun King. Why?', es: 'Luis XIV se llamaba a sí mismo el Rey Sol. ¿Por qué?', fa: 'لویی چهاردهم خود را شاه آفتاب می‌نامید. چرا؟' },
      choices: [
        { t: { en: '☀️ All turned around him', es: '☀️ Todo giraba a su alrededor', fa: '☀️ همه چیز به دورش می‌چرخید' }, ok: true },
        { t: { en: '🌧️ He loved rainy days', es: '🌧️ Le gustaba la lluvia', fa: '🌧️ روزهای بارانی را دوست داشت' } }
      ],
      why: { en: 'Like planets around the Sun, the court and all of France turned around the king.', es: 'Como los planetas alrededor del Sol, la corte y toda Francia giraban alrededor del rey.', fa: 'مثل سیاره‌ها به دور آفتاب، دربار و همهٔ فرانسه به دور شاه می‌چرخید.' }
    },
    next: {
      q: { en: 'Next: the Enlightenment, Paris, 1750. Could people question a king\'s power?', es: 'Ahora: la Ilustración, París, 1750. ¿Se podía cuestionar el poder de un rey?', fa: 'بعدی: روشنگری، پاریس، ۱۷۵۰. آیا مردم می‌توانستند از قدرت شاه سؤال کنند؟' },
      choices: [
        { t: { en: '💡 Yes, with new ideas', es: '💡 Sí, con ideas nuevas', fa: '💡 بله، با اندیشه‌های نو' }, ok: true },
        { t: { en: '🤐 No, never', es: '🤐 No, nunca', fa: '🤐 نه، هرگز' } }
      ],
      why: { en: 'Thinkers said power should come from the people, and rulers must follow laws.', es: 'Algunos pensadores dijeron que el poder debía venir del pueblo y que los reyes debían seguir leyes.', fa: 'اندیشمندان گفتند قدرت باید از مردم بیاید و حاکمان باید از قانون پیروی کنند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [3, 2], name: { en: 'Madeleine', es: 'Madeleine', fa: 'مادلین' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#8a9aba', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Thousands of workers built this palace and its gardens. The work was dangerous.', es: 'Miles de obreros construyeron este palacio y sus jardines. El trabajo era peligroso.', fa: 'هزاران کارگر این قصر و باغ‌هایش را ساختند. کار خطرناک بود.' },
        { en: 'Water for the fountains is pumped from the Seine River, far away.', es: 'El agua de las fuentes se bombea desde el río Sena, que está lejos.', fa: 'آب فواره‌ها از دریای سن، از راه دور، پمپ می‌شود.' }
      ] },
    { at: [27, 2], name: { en: 'Gilles', es: 'Gilles', fa: 'ژیل' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#c8b890', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is the royal mirror workshop. Venice used to sell all the mirrors.', es: 'Este es el taller real de espejos. Antes Venecia vendía todos los espejos.', fa: 'این کارگاه شاهی آینه است. قبلاً ونیز همهٔ آینه‌ها را می‌فروخت.' },
        { en: 'Now France makes its own. The Hall of Mirrors has 357 French mirrors!', es: 'Ahora Francia hace los suyos. ¡El Salón de los Espejos tiene 357 espejos franceses!', fa: 'حالا فرانسه خودش می‌سازد. تالار آینه‌ها ۳۵۷ آینهٔ فرانسوی دارد!' }
      ] },
    { at: [15, 3], name: { en: 'Antoine', es: 'Antoine', fa: 'آنتوان' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2a3a8a', pants: '#c8a040', hat: '#1a1a2a' },
      lines: [
        { en: 'I guard the king. He says God gave him his power: [[divine right|divine right]].', es: 'Cuido al rey. Él dice que Dios le dio su poder: el [[divine right|derecho divino]].', fa: 'من نگهبان شاه هستم. او می‌گوید خدا قدرتش را داده است: [[divine right|حق الهی]].' },
        { en: 'So no one may question him. Only God can judge a king, he says.', es: 'Así que nadie puede cuestionarlo. Dice que solo Dios puede juzgar a un rey.', fa: 'پس هیچ کس نمی‌تواند از او سؤال کند. می‌گوید فقط خدا شاه را قضاوت می‌کند.' }
      ] },
    { at: [3, 18], name: { en: 'Grandmother Margot', es: 'Abuela Margot', fa: 'مادرکلان مارگو' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#7a6a4a', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'Bread costs so much this year. We eat thin soup and dark bread.', es: 'El pan cuesta mucho este año. Comemos sopa aguada y pan negro.', fa: 'امسال نان خیلی گران است. ما شوربای رقیق و نان سیاه می‌خوریم.' },
        { en: 'The king\'s palace shines like gold, but our roof still leaks.', es: 'El palacio del rey brilla como el oro, pero nuestro techo sigue goteando.', fa: 'قصر شاه مثل طلا می‌درخشد، اما بام ما هنوز چکک می‌کند.' }
      ] },
    { at: [27, 18], name: { en: 'Henri', es: 'Henri', fa: 'آنری' },
      look: { skin: 4, hair: '#120c08', shirt: '#2a3a7a', pants: '#e8e0d0', hat: '#1a1a1a' },
      lines: [
        { en: 'I am a soldier. The king fights many wars to make France bigger.', es: 'Soy soldado. El rey hace muchas guerras para agrandar Francia.', fa: 'من سرباز هستم. شاه جنگ‌های زیادی می‌کند تا فرانسه را بزرگ‌تر سازد.' },
        { en: 'Wars cost huge sums of money. So the taxes keep rising.', es: 'Las guerras cuestan muchísimo dinero. Por eso los impuestos siguen subiendo.', fa: 'جنگ‌ها پول بسیار زیاد می‌خواهند. پس مالیه‌ها بالا می‌روند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-12): town houses (R over h, door 3,2), the palace (Q over h, door 15,3), the mirror workshop
     (door 27,2), the terrace (row 4), flower beds (,), fountains (~), a well (O), groves of trees (T).
     The Grand Canal (rows 13-15, ~ and deep =) blocks the middle: walk around its west or east end.
     South (y 16-21): the village (huts H over N, door 3,18), wheat (w), the market (m) and a town house (door 27,18). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR..QQQQQQQQQQQQQQQQQ..RRR..T',
    'T.hdh..hhhhhhhhhhhhhhhhh..hdh..T',
    'T.....,hhhhhhhhdhhhhhhhh,.....xT',
    'T:::::llllllllllllllllllll:::::T',
    'T.....l,,,,,l.llll.l,,,,,l.....T',
    'T.x...l,,,,,l.l~~l.l,,,,,l.....T',
    'T.....l,,,,,l.l~~l.l,,,,,l..O..T',
    'T.....llllllllllllllllllll.....T',
    'T.TTT.T.T.T.T.llll.T.T.T.T.TTT.T',
    'T.....,.......llll.......,.....T',
    'T.............llll.............T',
    'T...TT........llll........TT...T',
    'T.....~~~~~~~~~~~~~~~~~~~~.....T',
    'T.....~==================~.....T',
    'T.....~~~~~~~~~~~~~~~~~~~~.....T',
    'T......:::::::::::::::::::.....T',
    'T.HHH..:wwwww...:...mm.mm.RRR..T',
    'T.NdN..:wwwww...:.........hdh..T',
    'T......:wwwww...:...mm.mm......T',
    'T.,.....,.......:.......,....,.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 11],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [9, 11], at: [13, 12], decor: 'gem',
      clue: { en: 'From this note, walk 4 steps east, then 1 step south, toward the Grand Canal.', es: 'Desde esta nota, camina 4 pasos al este y luego 1 paso al sur, hacia el Gran Canal.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۱ قدم به جنوب، به طرف کانال بزرگ.' },
      text: { en: 'A tiny glass boat! Venice gave the king real gondolas to row on the Grand Canal.', es: '¡Un barquito de vidrio! Venecia le regaló al rey góndolas de verdad para el Gran Canal.', fa: 'یک کشتی کوچک شیشه‌ای! ونیز به شاه قایق‌های واقعی برای کانال بزرگ هدیه داد.' } },
    { clueAt: [26, 6], at: [30, 8], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps east, then 2 steps south.', es: 'Desde esta nota, camina 4 pasos al este y luego 2 pasos al sur.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۲ قدم به جنوب.' },
      text: { en: 'A dried flower. Hundreds of gardeners kept these gardens perfect for the king.', es: 'Una flor seca. Cientos de jardineros mantenían estos jardines perfectos para el rey.', fa: 'یک گل خشک. صدها باغبان این باغ‌ها را برای شاه بی‌عیب نگه می‌داشتند.' } }
  ],

  words: {
    'absolute monarch': { en: 'a king or queen whose power has almost no limits', es: 'un rey o una reina cuyo poder casi no tiene límites', fa: 'شاه یا ملکه‌ای که قدرتش تقریباً هیچ حدی ندارد' },
    'divine right': { en: 'the idea that a king\'s power comes from God, not from the people', es: 'la idea de que el poder del rey viene de Dios, no del pueblo', fa: 'این اندیشه که قدرت شاه از خداست، نه از مردم' },
    noble: { en: 'a person from a rich, powerful family with a title, like duke or countess', es: 'una persona de una familia rica y poderosa con un título, como duque o condesa', fa: 'کسی از یک خانوادهٔ ثروتمند و قدرتمند با لقب، مثل دوک یا کنتس' },
    tax: { en: 'money people must pay to the ruler or government', es: 'dinero que la gente debe pagar al gobernante o al gobierno', fa: 'پولی که مردم باید به حاکم یا دولت بدهند' },
    huguenot: { en: 'a French Protestant in the 1500s and 1600s', es: 'un protestante francés de los años 1500 y 1600', fa: 'یک پروتستان فرانسوی در سال‌های ۱۵۰۰ و ۱۶۰۰' },
    'edict of nantes': { en: 'a law from 1598 that let French Protestants practice their faith', es: 'una ley de 1598 que dejaba a los protestantes franceses practicar su fe', fa: 'قانونی از سال ۱۵۹۸ که به پروتستان‌های فرانسه اجازهٔ عبادت می‌داد' },
    mercantilism: { en: 'the idea that a country gets rich by selling more goods than it buys', es: 'la idea de que un país se hace rico vendiendo más de lo que compra', fa: 'این اندیشه که یک کشور با فروختن بیشتر از خریدن ثروتمند می‌شود' }
  },

  npcs: [
    {
      x: 10, y: 8,
      name: { en: 'Countess Hélène', es: 'Condesa Hélène', fa: 'کنتس هلن' },
      role: { en: 'Noblewoman', es: 'Noble', fa: 'زن اشراف‌زاده' },
      look: { skin: 1, hair: '#e8d8a0', shirt: '#c85a8a', pants: '#8a3a6a', style: 'long' },
      lines: [
        { en: 'Bonjour! I am a countess. My family must live here, at the king\'s court.', es: '¡Bonjour! Soy condesa. Mi familia debe vivir aquí, en la corte del rey.', fa: 'بونژور! من کنتس هستم. خانواده‌ام باید اینجا، در دربار شاه، زندگی کند.' },
        { en: 'Each morning, [[noble|nobles]] watch the king wake up. We even hand him his shirt!', es: 'Cada mañana, los [[noble|nobles]] vemos al rey despertar. ¡Hasta le damos su camisa!', fa: 'هر صبح، [[noble|اشراف]] بیدار شدن شاه را تماشا می‌کنند. حتی پیراهنش را به دستش می‌دهیم!' },
        { en: 'If we leave, we lose his favor. So we stay, and we obey.', es: 'Si nos vamos, perdemos su favor. Así que nos quedamos y obedecemos.', fa: 'اگر برویم، لطف او را از دست می‌دهیم. پس می‌مانیم و اطاعت می‌کنیم.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Louis XIV make nobles live at Versailles?', es: '¿Por qué Luis XIV obligaba a los nobles a vivir en Versalles?', fa: 'چرا لویی چهاردهم اشراف را مجبور کرد در ورسای زندگی کنند؟' },
        choices: [
          { ok: true, t: { en: 'So he could watch them and keep them weak', es: 'Para vigilarlos y mantenerlos débiles', fa: 'تا آن‌ها را زیر نظر و ضعیف نگه دارد' },
            why: { en: 'Yes. Nobles busy at court could not gather armies or plot against him.', es: 'Sí. Los nobles ocupados en la corte no podían juntar ejércitos ni conspirar contra él.', fa: 'بله. اشرافِ مصروفِ دربار نمی‌توانستند لشکر جمع کنند یا علیه او توطئه کنند.' } },
          { t: { en: 'So they could plant the gardens themselves', es: 'Para que ellos mismos plantaran los jardines', fa: 'تا خودشان باغ‌ها را بکارند' },
            why: { en: 'No. Hundreds of gardeners did that work. The king wanted the nobles under his eye.', es: 'No. Cientos de jardineros hacían ese trabajo. El rey quería vigilar a los nobles.', fa: 'نه. صدها باغبان آن کار را می‌کردند. شاه می‌خواست اشراف زیر نظرش باشند.' } },
          { t: { en: 'So they could vote on new laws together', es: 'Para que votaran juntos las leyes nuevas', fa: 'تا با هم به قانون‌های نو رأی بدهند' },
            why: { en: 'No. Nobles did not vote on laws. The king made the laws alone.', es: 'No. Los nobles no votaban leyes. El rey hacía las leyes solo.', fa: 'نه. اشراف به قانون رأی نمی‌دادند. شاه به تنهایی قانون می‌ساخت.' } }
        ]
      }
    },
    {
      x: 10, y: 16,
      name: { en: 'Jacques', es: 'Jacques', fa: 'ژاک' },
      role: { en: 'Peasant farmer', es: 'Campesino', fa: 'دهقان' },
      look: { skin: 2, hair: '#4a3a2a', shirt: '#8a7a5a', pants: '#3a2a1a', hat: '#6a5a3a' },
      lines: [
        { en: 'I grow wheat in the village. Look at that palace, so shiny!', es: 'Siembro trigo en el pueblo. ¡Mira ese palacio, cómo brilla!', fa: 'من در قریه گندم می‌کارم. آن قصر را ببین، چقدر می‌درخشد!' },
        { en: 'Nobles and priests pay few [[tax|taxes]]. Farmers like me pay the most.', es: 'Los nobles y los sacerdotes pagan pocos [[tax|impuestos]]. Los campesinos como yo pagamos más.', fa: 'اشراف و کشیشان [[tax|مالیهٔ]] کم می‌دهند. دهقانانی مثل من بیشتر از همه می‌دهند.' },
        { en: 'Our taxes pay for the palace and for the king\'s wars.', es: 'Nuestros impuestos pagan el palacio y las guerras del rey.', fa: 'مالیهٔ ما پول قصر و جنگ‌های شاه را می‌دهد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who paid most of the taxes in Louis XIV\'s France?', es: '¿Quién pagaba la mayoría de los impuestos en la Francia de Luis XIV?', fa: 'در فرانسهٔ لویی چهاردهم، بیشترین مالیه را چه کسانی می‌دادند؟' },
        choices: [
          { ok: true, t: { en: 'Peasant farmers and ordinary workers', es: 'Los campesinos y los trabajadores comunes', fa: 'دهقانان و کارگران عادی' },
            why: { en: 'Yes. The poorest people paid the most, while nobles and priests paid little.', es: 'Sí. Los más pobres pagaban más, mientras los nobles y los sacerdotes pagaban poco.', fa: 'بله. فقیرترین مردم بیشتر می‌دادند، و اشراف و کشیشان کم می‌دادند.' } },
          { t: { en: 'The nobles who lived at the palace', es: 'Los nobles que vivían en el palacio', fa: 'اشرافی که در قصر زندگی می‌کردند' },
            why: { en: 'No. Most nobles paid very few taxes. Farmers paid the most.', es: 'No. Casi todos los nobles pagaban muy pocos impuestos. Los campesinos pagaban más.', fa: 'نه. بیشتر اشراف مالیهٔ بسیار کم می‌دادند. دهقانان بیشتر می‌دادند.' } },
          { t: { en: 'The priests and bishops of the Church', es: 'Los sacerdotes y obispos de la Iglesia', fa: 'کشیشان و اسقف‌های کلیسا' },
            why: { en: 'No. The Church paid little tax. Ordinary people carried the heavy load.', es: 'No. La Iglesia pagaba pocos impuestos. La gente común cargaba el peso.', fa: 'نه. کلیسا مالیهٔ کم می‌داد. بار سنگین روی دوش مردم عادی بود.' } }
        ]
      }
    },
    {
      x: 28, y: 11,
      name: { en: 'Suzanne', es: 'Suzanne', fa: 'سوزان' },
      role: { en: 'Silk weaver', es: 'Tejedora de seda', fa: 'بافندهٔ ابریشم' },
      look: { skin: 1, hair: '#3a2416', shirt: '#4a5a7a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a [[huguenot|Huguenot]], a French Protestant. I weave silk cloth.', es: 'Soy [[huguenot|hugonota]], una protestante francesa. Tejo tela de seda.', fa: 'من یک [[huguenot|هوگنو]]، یعنی پروتستان فرانسوی، هستم. تکهٔ ابریشمی می‌بافم.' },
        { en: 'This year the king ended the [[edict of nantes|Edict of Nantes]]. Our churches must close.', es: 'Este año el rey acabó con el [[edict of nantes|Edicto de Nantes]]. Nuestras iglesias deben cerrar.', fa: 'امسال شاه [[edict of nantes|فرمان نانت]] را لغو کرد. کلیساهای ما باید بسته شوند.' },
        { en: 'We must leave in secret. Many go to the Netherlands, England and Prussia.', es: 'Tenemos que irnos en secreto. Muchos van a los Países Bajos, Inglaterra y Prusia.', fa: 'باید پنهانی برویم. بسیاری به هالند، انگلستان و پروس می‌روند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Where did many Huguenots go after 1685?', es: '¿A dónde se fueron muchos hugonotes después de 1685?', fa: 'بعد از ۱۶۸۵ بسیاری از هوگنوها به کجا رفتند؟' },
        choices: [
          { ok: true, t: { en: 'To Protestant lands like the Netherlands', es: 'A tierras protestantes como los Países Bajos', fa: 'به سرزمین‌های پروتستان مثل هالند' },
            why: { en: 'Yes. About 200,000 fled. Their skills helped the Netherlands, England and Prussia grow.', es: 'Sí. Huyeron unos 200,000. Sus oficios ayudaron a crecer a los Países Bajos, Inglaterra y Prusia.', fa: 'بله. حدود ۲۰۰ هزار نفر فرار کردند. مهارت‌شان به رشد هالند، انگلستان و پروس کمک کرد.' } },
          { t: { en: 'To the palace of Versailles to work', es: 'Al palacio de Versalles para trabajar', fa: 'به قصر ورسای برای کار' },
            why: { en: 'No. The king who closed their churches lived there. They fled from France.', es: 'No. Allí vivía el rey que cerró sus iglesias. Ellos huyeron de Francia.', fa: 'نه. شاهی که کلیساهای‌شان را بست آنجا زندگی می‌کرد. آن‌ها از فرانسه فرار کردند.' } },
          { t: { en: 'To Spain, to join the Catholic king\'s court', es: 'A España, a la corte del rey católico', fa: 'به هسپانیه، به دربار شاه کاتولیک' },
            why: { en: 'No. Spain was Catholic too. Huguenots went to Protestant lands where they could worship.', es: 'No. España también era católica. Los hugonotes fueron a tierras protestantes donde podían rezar.', fa: 'نه. هسپانیه هم کاتولیک بود. هوگنوها به سرزمین‌های پروتستان رفتند که بتوانند عبادت کنند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 6, text: { en: 'VERSAILLES · 1685 · The palace of King Louis XIV, near Paris, France.', es: 'VERSALLES · 1685 · El palacio del rey Luis XIV, cerca de París, Francia.', fa: 'ورسای · ۱۶۸۵ · قصر شاه لویی چهاردهم، نزدیک پاریس، فرانسه.' } },
    { x: 30, y: 3, text: { en: 'ROYAL MIRROR WORKSHOP · French workers now make the mirrors France once bought from Venice.', es: 'TALLER REAL DE ESPEJOS · Obreros franceses hacen los espejos que antes se compraban a Venecia.', fa: 'کارگاه شاهی آینه · کارگران فرانسوی آینه‌هایی را می‌سازند که قبلاً از ونیز خریده می‌شد.' } }
  ],

  /* the quest: Marie the palace maid (gold !) on the terrace -> Jean the royal clerk in the town (west) ->
     Madame Roux, the royal buyer at the market south of the canal, wants the mirror that follows Colbert's rule
     (buy French goods): the French mirror at the royal workshop (east), not the Venice mirror off a gondola
     at the canal, nor a vase from China at the market -> back to Marie */
  quest: {
    stat: 'pla',
    title: { en: 'A Mirror for the King', es: 'Un espejo para el rey', fa: 'آینه‌ای برای شاه' },
    giver: {
      x: 19, y: 5,
      name: { en: 'Marie', es: 'Marie', fa: 'ماری' },
      role: { en: 'Palace maid', es: 'Criada del palacio', fa: 'خدمتگار قصر' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2a2a2a', pants: '#e8e8e8', style: 'bun' },
      lines: [
        { en: 'Oh no! A mirror cracked in the Hall of Mirrors.', es: '¡Ay, no! Se rompió un espejo en el Salón de los Espejos.', fa: 'وای! یک آینه در تالار آینه‌ها شکست.' },
        { en: 'The king walks through there tonight. We need a new one fast!', es: 'El rey pasa por ahí esta noche. ¡Necesitamos uno nuevo rápido!', fa: 'شاه امشب از آنجا می‌گذرد. زود یک آینهٔ نو لازم داریم!' },
        { en: 'Ask Jean, the royal clerk. He stands in the town, west of the palace.', es: 'Pregúntale a Jean, el secretario real. Está en el pueblo, al oeste del palacio.', fa: 'از ژان، منشی شاهی، بپرس. او در شهر، غرب قصر، ایستاده است.' }
      ],
      wait: { en: 'Jean the clerk waits in the town, west of the palace.', es: 'Jean, el secretario, espera en el pueblo, al oeste del palacio.', fa: 'ژان منشی در شهر، غرب قصر، منتظر است.' },
      thanks: { en: 'A French mirror! It fits perfectly. The Hall shines again. Thank you!', es: '¡Un espejo francés! Queda perfecto. El salón brilla otra vez. ¡Gracias!', fa: 'یک آینهٔ فرانسوی! درست جا می‌شود. تالار دوباره می‌درخشد. تشکر!' }
    },
    contact: {
      x: 4, y: 4,
      name: { en: 'Jean', es: 'Jean', fa: 'ژان' },
      role: { en: 'Royal clerk', es: 'Secretario real', fa: 'منشی شاهی' },
      look: { skin: 1, hair: '#8a6a3a', shirt: '#4a2a1a', pants: '#2a2a2a', hat: '#1a1a1a' },
      lines: [
        { en: 'The king\'s minister, Colbert, has a rule: buy French goods, not foreign ones.', es: 'El ministro del rey, Colbert, tiene una regla: comprar cosas francesas, no extranjeras.', fa: 'وزیر شاه، کولبر، یک قاعده دارد: جنس فرانسوی بخرید، نه خارجی.' },
        { en: 'Take the right mirror to Madame Roux, at the market south of the canal.', es: 'Lleva el espejo correcto a Madame Roux. Espera en el mercado, al sur del canal.', fa: 'آینهٔ درست را پیش مادام رو ببر. او در بازار، جنوب کانال، منتظر است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 22, y: 18,
        name: { en: 'Madame Roux', es: 'Madame Roux', fa: 'مادام رو' },
        role: { en: 'Royal buyer', es: 'Compradora real', fa: 'خریدار شاهی' },
        look: { skin: 2, hair: '#5a2a1a', shirt: '#2f6f4f', pants: '#4a3a2a', style: 'bun' },
        lines: [
          { en: 'I buy goods for the palace. I always follow Colbert\'s rule.', es: 'Compro cosas para el palacio. Siempre sigo la regla de Colbert.', fa: 'من برای قصر جنس می‌خرم. همیشه از قاعدهٔ کولبر پیروی می‌کنم.' }
        ]
      },
      q: { en: 'Bring me a mirror that follows Colbert\'s rule: France should make its own goods.', es: 'Tráeme un espejo que siga la regla de Colbert: Francia debe hacer sus propias cosas.', fa: 'آینه‌ای بیاور که با قاعدهٔ کولبر جور باشد: فرانسه باید جنس خودش را بسازد.' },
      choices: [
        { ok: true, at: [29, 3], icon: '🪞', t: { en: 'A mirror made in France', es: 'Un espejo hecho en Francia', fa: 'آینهٔ ساخت فرانسه' },
          why: { en: 'Yes! France makes its own mirrors now, so its money stays home. That is [[mercantilism|mercantilism]].', es: '¡Sí! Ahora Francia hace sus espejos, así el dinero se queda en casa. Eso es el [[mercantilism|mercantilismo]].', fa: 'بله! حالا فرانسه آینهٔ خود را می‌سازد، پس پولش در کشور می‌ماند. این [[mercantilism|مرکانتیلیسم]] است.' } },
        { at: [16, 12], icon: '🪞', t: { en: 'A mirror from Venice', es: 'Un espejo de Venecia', fa: 'آینهٔ ونیزی' },
          why: { en: 'Venice made fine mirrors, but buying them sends French money away. Colbert wanted French goods.', es: 'Venecia hacía espejos finos, pero comprarlos saca el dinero de Francia. Colbert quería cosas francesas.', fa: 'ونیز آینهٔ خوب می‌ساخت، اما خریدنش پول فرانسه را بیرون می‌برد. کولبر جنس فرانسوی می‌خواست.' } },
        { at: [25, 19], icon: '🏺', t: { en: 'A porcelain vase from China', es: 'Un jarrón de porcelana de China', fa: 'گلدان چینی از چین' },
          why: { en: 'This vase came all the way from China, not France. And it is not a mirror!', es: 'Este jarrón vino desde China, no de Francia. ¡Y no es un espejo!', fa: 'این گلدان از چین آمده، نه فرانسه. و آینه هم نیست!' } }
      ],
      item: { icon: '🪞', name: { en: 'A French-made mirror', es: 'Un espejo hecho en Francia', fa: 'آینهٔ ساخت فرانسه' } }
    }
  },

  scraps: [[1, 1], [30, 12], [1, 20]],
  smudges: [[8, 11], [25, 16]],

  challenge: {
    at: [16, 9],
    type: 'claim',
    stat: 'hei',
    title: { en: 'What kind of ruler?', es: '¿Qué tipo de gobernante?', fa: 'چه نوع حاکم؟' },
    intro: { en: 'The Grump erased the chronicle\'s notes on rulers. Pick a ruler. Then prove what kind of ruler they were, with one reason of each kind.',
      es: 'El Gruñón borró las notas de la crónica sobre los gobernantes. Elige uno. Luego prueba qué tipo de gobernante era, con una razón de cada tipo.',
      fa: 'غرغرو یادداشت‌های تاریخ‌نامه دربارهٔ حاکمان را پاک کرد. یک حاکم را انتخاب کن. بعد با یک دلیل از هر نوع نشان بده چه نوع حاکمی بود.' },
    options: [
      { icon: '☀️', name: { en: 'Louis XIV of France', es: 'Luis XIV de Francia', fa: 'لویی چهاردهم فرانسه' }, desc: { en: 'King of France, 1643 to 1715', es: 'Rey de Francia, de 1643 a 1715', fa: 'شاه فرانسه، ۱۶۴۳ تا ۱۷۱۵' },
        result: { en: 'An absolute monarch. Louis XIV ruled alone and said his power came from God.', es: 'Un monarca absoluto. Luis XIV gobernó solo y dijo que su poder venía de Dios.', fa: 'یک پادشاه مطلق. لویی چهاردهم به تنهایی حکومت کرد و گفت قدرتش از خداست.' } },
      { icon: '⚓', name: { en: 'Peter the Great of Russia', es: 'Pedro el Grande de Rusia', fa: 'پطر کبیر روسیه' }, desc: { en: 'Tsar of Russia, 1682 to 1725', es: 'Zar de Rusia, de 1682 a 1725', fa: 'تزار روسیه، ۱۶۸۲ تا ۱۷۲۵' },
        result: { en: 'An absolute monarch too. Peter forced big changes to make Russia more like western Europe.', es: 'También un monarca absoluto. Pedro impuso grandes cambios para que Rusia se pareciera a Europa occidental.', fa: 'او هم پادشاه مطلق بود. پطر تغییرهای بزرگ را به زور آورد تا روسیه مثل غرب اروپا شود.' } },
      { icon: '📜', name: { en: 'William and Mary of England', es: 'Guillermo y María de Inglaterra', fa: 'ویلیام و مری انگلستان' }, desc: { en: 'King and queen of England from 1689', es: 'Rey y reina de Inglaterra desde 1689', fa: 'شاه و ملکهٔ انگلستان از ۱۶۸۹' },
        result: { en: 'A limited monarchy. In England, Parliament and a Bill of Rights set limits on the rulers.', es: 'Una monarquía limitada. En Inglaterra, el Parlamento y una Declaración de Derechos ponían límites a los reyes.', fa: 'یک پادشاهی محدود. در انگلستان، پارلمان و منشور حقوق برای حاکمان حد گذاشتند.' } }
    ],
    kinds: [
      { id: 'power', label: { en: 'Who held the power', es: 'Quién tenía el poder', fa: 'قدرت در دست چه کسی بود' } },
      { id: 'deed', label: { en: 'What the ruler did', es: 'Qué hizo el gobernante', fa: 'حاکم چه کرد' } }
    ],
    reasons: [
      { kind: 'power', fits: [0], t: { en: 'He never once called France\'s big assembly, the Estates-General', es: 'Nunca convocó la gran asamblea de Francia, los Estados Generales', fa: 'هرگز مجلس بزرگ فرانسه، مجلس طبقات، را جمع نکرد' },
        why: { en: 'This is about Louis XIV. He ruled France without its assembly.', es: 'Esto es sobre Luis XIV. Gobernó Francia sin su asamblea.', fa: 'این دربارهٔ لویی چهاردهم است. او بدون مجلس بر فرانسه حکومت کرد.' } },
      { kind: 'power', fits: [1], t: { en: 'He ruled alone as tsar and took control of the Russian Church', es: 'Gobernó solo como zar y tomó el control de la Iglesia rusa', fa: 'به تنهایی تزار بود و کلیسای روسیه را زیر فرمان خود گرفت' },
        why: { en: 'This is about Peter the Great, the tsar of Russia.', es: 'Esto es sobre Pedro el Grande, el zar de Rusia.', fa: 'این دربارهٔ پطر کبیر، تزار روسیه، است.' } },
      { kind: 'power', fits: [2], t: { en: 'They accepted a Bill of Rights passed by Parliament', es: 'Aceptaron una Declaración de Derechos votada por el Parlamento', fa: 'منشور حقوقی را که پارلمان تصویب کرد پذیرفتند' },
        why: { en: 'This is about William and Mary. Parliament limited their power in 1689.', es: 'Esto es sobre Guillermo y María. El Parlamento limitó su poder en 1689.', fa: 'این دربارهٔ ویلیام و مری است. پارلمان در ۱۶۸۹ قدرت آن‌ها را محدود کرد.' } },
      { kind: 'power', fits: [], t: { en: 'All the people voted for the ruler every four years', es: 'Todo el pueblo votaba por el gobernante cada cuatro años', fa: 'همهٔ مردم هر چهار سال به حاکم رأی می‌دادند' },
        why: { en: 'None of these rulers was elected by the people. They were born to rule.', es: 'Ninguno de estos gobernantes fue elegido por el pueblo. Nacieron para gobernar.', fa: 'هیچ یک از این حاکمان را مردم انتخاب نکردند. آن‌ها از تولد حاکم بودند.' } },
      { kind: 'deed', fits: [0], t: { en: 'He made nobles live at his palace, where he could watch them', es: 'Obligó a los nobles a vivir en su palacio, donde podía vigilarlos', fa: 'اشراف را مجبور کرد در قصرش زندگی کنند تا آن‌ها را زیر نظر داشته باشد' },
        why: { en: 'This is about Louis XIV at Versailles.', es: 'Esto es sobre Luis XIV en Versalles.', fa: 'این دربارهٔ لویی چهاردهم در ورسای است.' } },
      { kind: 'deed', fits: [0], t: { en: 'He forced Protestants to become Catholic or leave the country', es: 'Obligó a los protestantes a hacerse católicos o irse del país', fa: 'پروتستان‌ها را مجبور کرد کاتولیک شوند یا کشور را ترک کنند' },
        why: { en: 'This is about Louis XIV. In 1685 he ended the Edict of Nantes.', es: 'Esto es sobre Luis XIV. En 1685 acabó con el Edicto de Nantes.', fa: 'این دربارهٔ لویی چهاردهم است. او در ۱۶۸۵ فرمان نانت را لغو کرد.' } },
      { kind: 'deed', fits: [1], t: { en: 'He built a new capital, St. Petersburg, and made nobles cut their beards', es: 'Construyó una capital nueva, San Petersburgo, y obligó a los nobles a cortarse la barba', fa: 'پایتخت نو، سن پترزبورگ، را ساخت و اشراف را مجبور کرد ریش خود را بتراشند' },
        why: { en: 'This is about Peter the Great. He wanted Russia to look like western Europe.', es: 'Esto es sobre Pedro el Grande. Quería que Rusia se pareciera a Europa occidental.', fa: 'این دربارهٔ پطر کبیر است. او می‌خواست روسیه مثل غرب اروپا شود.' } },
      { kind: 'deed', fits: [2], t: { en: 'They needed Parliament\'s vote to raise taxes or keep an army', es: 'Necesitaban el voto del Parlamento para subir impuestos o tener un ejército', fa: 'برای بالا بردن مالیه یا داشتن لشکر به رأی پارلمان نیاز داشتند' },
        why: { en: 'This is about William and Mary. The Bill of Rights said so.', es: 'Esto es sobre Guillermo y María. Así lo decía la Declaración de Derechos.', fa: 'این دربارهٔ ویلیام و مری است. منشور حقوق چنین می‌گفت.' } },
      { kind: 'deed', fits: [], t: { en: 'They gave every peasant free land and stopped all taxes', es: 'Les dieron tierra gratis a todos los campesinos y quitaron los impuestos', fa: 'به هر دهقان زمین مفت دادند و همهٔ مالیه‌ها را بس کردند' },
        why: { en: 'None of these rulers did this. Peasants kept paying heavy taxes.', es: 'Ninguno de estos gobernantes hizo eso. Los campesinos siguieron pagando muchos impuestos.', fa: 'هیچ یک از این حاکمان این کار را نکرد. دهقانان مالیهٔ سنگین را ادامه دادند.' } }
    ],
    mismatch: { en: 'That reason is not true for the ruler you picked.', es: 'Esa razón no es cierta para el gobernante que elegiste.', fa: 'این دلیل برای حاکمی که انتخاب کردی درست نیست.' },
    success: { en: 'The notes are back! Some kings ruled alone. In England, laws limited the rulers.', es: '¡Las notas volvieron! Algunos reyes gobernaban solos. En Inglaterra, las leyes limitaban a los reyes.', fa: 'یادداشت‌ها برگشت! بعضی شاهان تنها حکومت می‌کردند. در انگلستان، قانون حاکمان را محدود کرد.' }
  },

  boss: {
    at: [16, 20],
    stat: 'mov',
    need: 3,
    name: { en: 'The Gilded Grump', es: 'El Gruñón Dorado', fa: 'غرغروی طلایی' },
    appear: { en: 'The Gilded Grump is hiding in the fields south of the Grand Canal!', es: '¡El Gruñón Dorado se esconde en los campos al sur del Gran Canal!', fa: 'غرغروی طلایی در کشتزارهای جنوب کانال بزرگ پنهان است!' },
    taunt: { en: 'Only one person matters here. Forget everyone else!', es: 'Aquí solo importa una persona. ¡Olvida a todos los demás!', fa: 'اینجا فقط یک نفر مهم است. باقی همه را فراموش کن!' },
    win: { en: 'The gold paint flakes away. Chronicle page 3.3 floats down into your hands!', es: 'La pintura dorada se cae. ¡La página 3.3 de la crónica cae en tus manos!', fa: 'رنگ طلایی می‌ریزد. صفحهٔ ۳.۳ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was an absolute monarch?', es: '¿Qué era un monarca absoluto?', fa: 'پادشاه مطلق چه بود؟' },
        choices: [
          { en: 'A ruler whose power had almost no limits', es: 'Un gobernante cuyo poder casi no tenía límites', fa: 'حاکمی که قدرتش تقریباً حدی نداشت' },
          { en: 'A ruler chosen by a vote of all the people', es: 'Un gobernante elegido por el voto de todo el pueblo', fa: 'حاکمی که با رأی همهٔ مردم انتخاب شد' },
          { en: 'A ruler who shared power with a parliament', es: 'Un gobernante que compartía el poder con un parlamento', fa: 'حاکمی که قدرت را با پارلمان شریک بود' },
          { en: 'A ruler who could only rule for four years', es: 'Un gobernante que solo podía gobernar cuatro años', fa: 'حاکمی که فقط چهار سال حکومت می‌کرد' }],
        answer: 0,
        why: { en: 'Absolute monarchs made laws, raised taxes and started wars without asking anyone.', es: 'Los monarcas absolutos hacían leyes, subían impuestos y empezaban guerras sin preguntar a nadie.', fa: 'پادشاهان مطلق بدون پرسیدن از کسی قانون می‌ساختند، مالیه بالا می‌بردند و جنگ شروع می‌کردند.' } },
      { q: { en: 'What is the idea of divine right?', es: '¿Qué es la idea del derecho divino?', fa: 'اندیشهٔ حق الهی چیست؟' },
        choices: [
          { en: 'A king\'s power comes from God', es: 'El poder del rey viene de Dios', fa: 'قدرت شاه از خداست' },
          { en: 'A king\'s power comes from the people', es: 'El poder del rey viene del pueblo', fa: 'قدرت شاه از مردم است' },
          { en: 'A king must obey the Pope in everything', es: 'El rey debe obedecer al Papa en todo', fa: 'شاه باید در همه چیز از پاپ اطاعت کند' },
          { en: 'Every noble has the right to be king', es: 'Todo noble tiene derecho a ser rey', fa: 'هر اشراف‌زاده حق دارد شاه شود' }],
        answer: 0,
        why: { en: 'Louis XIV said God made him king, so only God could judge him.', es: 'Luis XIV decía que Dios lo hizo rey, así que solo Dios podía juzgarlo.', fa: 'لویی چهاردهم می‌گفت خدا او را شاه ساخته، پس فقط خدا او را قضاوت می‌کند.' } },
      { q: { en: 'Why did Louis XIV build the huge palace at Versailles?', es: '¿Por qué Luis XIV construyó el enorme palacio de Versalles?', fa: 'چرا لویی چهاردهم قصر بزرگ ورسای را ساخت؟' },
        choices: [
          { en: 'To show his power and keep nobles close', es: 'Para mostrar su poder y tener cerca a los nobles', fa: 'تا قدرتش را نشان دهد و اشراف را نزدیک نگه دارد' },
          { en: 'To give poor families a place to live', es: 'Para darles un hogar a las familias pobres', fa: 'تا به خانواده‌های فقیر جای زندگی بدهد' },
          { en: 'To hold meetings of a new parliament', es: 'Para hacer reuniones de un parlamento nuevo', fa: 'تا جلسه‌های یک پارلمان نو را برگزار کند' },
          { en: 'To store grain in case of a famine', es: 'Para guardar grano por si había hambruna', fa: 'تا برای قحطی غله ذخیره کند' }],
        answer: 0,
        why: { en: 'The palace showed his glory. Nobles who lived there could not plot against him.', es: 'El palacio mostraba su gloria. Los nobles que vivían allí no podían conspirar contra él.', fa: 'قصر شکوه او را نشان می‌داد. اشرافی که آنجا بودند نمی‌توانستند علیه او توطئه کنند.' } },
      { q: { en: 'Who paid most of the taxes in France under Louis XIV?', es: '¿Quién pagaba la mayoría de los impuestos en Francia con Luis XIV?', fa: 'در زمان لویی چهاردهم بیشترین مالیه را در فرانسه چه کسانی می‌دادند؟' },
        choices: [
          { en: 'Peasants and ordinary town workers', es: 'Los campesinos y los trabajadores comunes', fa: 'دهقانان و کارگران عادی شهر' },
          { en: 'The nobles who lived at the palace', es: 'Los nobles que vivían en el palacio', fa: 'اشرافی که در قصر زندگی می‌کردند' },
          { en: 'Bishops and priests of the Church', es: 'Los obispos y sacerdotes de la Iglesia', fa: 'اسقف‌ها و کشیشان کلیسا' },
          { en: 'Merchants from other countries', es: 'Los comerciantes de otros países', fa: 'سوداگران کشورهای دیگر' }],
        answer: 0,
        why: { en: 'Nobles and clergy paid little. The heavy taxes fell on ordinary people.', es: 'Los nobles y el clero pagaban poco. Los impuestos pesados caían sobre la gente común.', fa: 'اشراف و روحانیون کم می‌دادند. مالیهٔ سنگین بر دوش مردم عادی بود.' } },
      { q: { en: 'What happened when Louis XIV ended the Edict of Nantes in 1685?', es: '¿Qué pasó cuando Luis XIV acabó con el Edicto de Nantes en 1685?', fa: 'وقتی لویی چهاردهم در ۱۶۸۵ فرمان نانت را لغو کرد، چه شد؟' },
        choices: [
          { en: 'Many Huguenots fled France', es: 'Muchos hugonotes huyeron de Francia', fa: 'بسیاری از هوگنوها از فرانسه فرار کردند' },
          { en: 'Protestants could worship freely', es: 'Los protestantes pudieron rezar libremente', fa: 'پروتستان‌ها آزادانه عبادت کردند' },
          { en: 'France became a Protestant land', es: 'Francia se volvió una tierra protestante', fa: 'فرانسه سرزمین پروتستان شد' },
          { en: 'The Pope moved to Versailles', es: 'El Papa se mudó a Versalles', fa: 'پاپ به ورسای کوچ کرد' }],
        answer: 0,
        why: { en: 'Protestants lost their rights. About 200,000 Huguenots fled, and France lost many skilled workers.', es: 'Los protestantes perdieron sus derechos. Huyeron unos 200,000 hugonotes y Francia perdió muchos trabajadores hábiles.', fa: 'پروتستان‌ها حقوق خود را از دست دادند. حدود ۲۰۰ هزار هوگنو فرار کردند و فرانسه کارگران ماهر زیادی را از دست داد.' } },
      { q: { en: 'What is mercantilism?', es: '¿Qué es el mercantilismo?', fa: 'مرکانتیلیسم چیست؟' },
        choices: [
          { en: 'A country sells more goods than it buys', es: 'Un país vende más cosas de las que compra', fa: 'کشوری بیشتر از آنچه می‌خرد، می‌فروشد' },
          { en: 'A country buys everything from its rivals', es: 'Un país les compra todo a sus rivales', fa: 'کشوری همه چیز را از رقیبانش می‌خرد' },
          { en: 'A king gives his gold to other kingdoms', es: 'Un rey regala su oro a otros reinos', fa: 'شاهی طلایش را به پادشاهی‌های دیگر می‌دهد' },
          { en: 'Farmers trade crops with no money at all', es: 'Los campesinos cambian cosechas sin dinero', fa: 'دهقانان حاصل را بدون پول عوض می‌کنند' }],
        answer: 0,
        why: { en: 'Colbert built French workshops and colonies so gold and silver stayed in France.', es: 'Colbert creó talleres y colonias francesas para que el oro y la plata se quedaran en Francia.', fa: 'کولبر کارگاه‌ها و مستعمره‌های فرانسوی ساخت تا طلا و نقره در فرانسه بماند.' } },
      { q: { en: 'What did Peter the Great do in Russia?', es: '¿Qué hizo Pedro el Grande en Rusia?', fa: 'پطر کبیر در روسیه چه کرد؟' },
        choices: [
          { en: 'He made Russia more like western Europe', es: 'Hizo que Rusia se pareciera a Europa occidental', fa: 'روسیه را بیشتر مثل غرب اروپا ساخت' },
          { en: 'He let the Russian people elect a parliament', es: 'Dejó que el pueblo ruso eligiera un parlamento', fa: 'گذاشت مردم روسیه پارلمان انتخاب کنند' },
          { en: 'He moved the capital of Russia to Paris', es: 'Mudó la capital de Rusia a París', fa: 'پایتخت روسیه را به پاریس برد' },
          { en: 'He gave all his power to the nobles', es: 'Les dio todo su poder a los nobles', fa: 'همهٔ قدرتش را به اشراف داد' }],
        answer: 0,
        why: { en: 'Peter ruled as an absolute tsar. He built St. Petersburg and copied ideas from the West.', es: 'Pedro gobernó como zar absoluto. Construyó San Petersburgo y copió ideas de Occidente.', fa: 'پطر تزار مطلق بود. سن پترزبورگ را ساخت و از غرب اندیشه گرفت.' } },
      { q: { en: 'How was England different from France after 1689?', es: '¿En qué era Inglaterra distinta de Francia después de 1689?', fa: 'انگلستان بعد از ۱۶۸۹ چه فرقی با فرانسه داشت؟' },
        choices: [
          { en: 'A Bill of Rights limited its rulers', es: 'Una Declaración de Derechos limitaba a sus reyes', fa: 'منشور حقوق حاکمانش را محدود کرد' },
          { en: 'Its king had even more power than Louis', es: 'Su rey tenía aún más poder que Luis', fa: 'شاهش حتی از لویی قدرت بیشتر داشت' },
          { en: 'It had no king or queen at all', es: 'No tenía ni rey ni reina', fa: 'هیچ شاه یا ملکه‌ای نداشت' },
          { en: 'The Pope chose its new rulers', es: 'El Papa elegía a sus nuevos reyes', fa: 'پاپ حاکمان نو آن را انتخاب کرد' }],
        answer: 0,
        why: { en: 'After 1689, England\'s rulers had to follow laws made with Parliament. That is a limited monarchy.', es: 'Después de 1689, los reyes de Inglaterra debían seguir leyes hechas con el Parlamento. Es una monarquía limitada.', fa: 'بعد از ۱۶۸۹، حاکمان انگلستان باید از قانون‌هایی که با پارلمان ساخته شد پیروی می‌کردند. این پادشاهی محدود است.' } }
    ]
  },

  learned: [
    { en: 'Louis XIV was an [[absolute monarch|absolute monarch]]. He said his power came from God, by [[divine right|divine right]].', es: 'Luis XIV fue un [[absolute monarch|monarca absoluto]]. Decía que su poder venía de Dios, por [[divine right|derecho divino]].', fa: 'لویی چهاردهم یک [[absolute monarch|پادشاه مطلق]] بود. می‌گفت قدرتش از خداست، به [[divine right|حق الهی]].' },
    { en: 'Versailles showed his power. [[noble|Nobles]] lived at court, while peasants paid heavy [[tax|taxes]].', es: 'Versalles mostraba su poder. Los [[noble|nobles]] vivían en la corte y los campesinos pagaban muchos [[tax|impuestos]].', fa: 'ورسای قدرت او را نشان می‌داد. [[noble|اشراف]] در دربار بودند و دهقانان [[tax|مالیهٔ]] سنگین می‌دادند.' },
    { en: 'In 1685, Louis XIV drove out the [[huguenot|Huguenots]]. In England, a Bill of Rights limited rulers.', es: 'En 1685, Luis XIV expulsó a los [[huguenot|hugonotes]]. En Inglaterra, una Declaración de Derechos limitó a los reyes.', fa: 'در ۱۶۸۵، لویی چهاردهم [[huguenot|هوگنوها]] را بیرون راند. در انگلستان، منشور حقوق حاکمان را محدود کرد.' }
  ],
  reflect: {
    q: { en: 'Is it fair for one person to hold all the power? Why or why not?', es: '¿Es justo que una sola persona tenga todo el poder? ¿Por qué?', fa: 'آیا درست است که یک نفر همهٔ قدرت را داشته باشد؟ چرا؟' },
    starter: { en: 'I think one person holding all the power is', es: 'Creo que una persona con todo el poder es', fa: 'فکر می‌کنم داشتن همهٔ قدرت در دست یک نفر' }
  }
};
