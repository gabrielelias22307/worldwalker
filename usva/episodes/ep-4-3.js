/* TRAILWALKER · Episode 4.3 · The Age of Jackson and Indian Removal (VUS)
   A QUIET episode (memorial: true): New Echota, Georgia, today, the New Echota State Historic Site, the restored
   capital of the Cherokee Nation. The people are site guides, a historian, a Cherokee descendant and visitors (all
   invented). No one speaks for the Cherokee Nation; nothing here is a prize; the Grump is "The Forgetting".
   North-west: the museum (the claim flags and the journal stone). North-east: the Council House, the Supreme
   Courthouse and the print shop of the Cherokee Phoenix. South-west: the Worcester House and the farmstead.
   South-east: the trail along the creek, where the visit ends quietly. */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'VUS',
  title: { en: 'The Age of Jackson and Indian Removal', es: 'La era de Jackson y la expulsión de los indígenas', fa: 'دوران جکسن و بیرون راندن بومیان' },
  place: { en: 'New Echota, today', es: 'New Echota, hoy', fa: 'نیو ایچوتا، امروز' },
  weather: { sky: 'clear', time: 'sunset' },
  memorial: true,
  intro: [
    { en: 'At New Echota, the Grump wants people to forget the [[cherokee nation|Cherokee Nation]].',
      es: 'En New Echota, el Gruñón quiere que la gente olvide a la [[cherokee nation|Nación Cheroqui]].',
      fa: 'در نیو ایچوتا، غرغرو می‌خواهد مردم [[cherokee nation|ملت چروکی]] را فراموش کنند.' },
    { en: 'Listen to the 3 people here with care. Then visit the journal stone.',
      es: 'Escucha con atención a las 3 personas de aquí. Luego ve a la piedra del diario.',
      fa: 'به ۳ نفر اینجا با دقت گوش بده. بعد پیش سنگ روزنامچه برو.' }
  ],
  /* cut scenes: north-west Georgia; the timeline marks 1832, the year of Worcester v. Georgia */
  scenes: {
    at: [-84.92, 34.54],
    year: 1832,
    yearText: { en: 'The 1830s, remembered today', es: 'Los años 1830, recordados hoy', fa: 'دههٔ ۱۸۳۰، امروز به یاد آورده می‌شود' },
    start: [
      { en: 'In 1825, the Cherokee Nation made New Echota its capital.',
        es: 'En 1825, la Nación Cheroqui hizo de New Echota su capital.',
        fa: 'در سال ۱۸۲۵، ملت چروکی نیو ایچوتا را پایتخت خود ساخت.' },
      { en: 'Georgia and President Jackson wanted Cherokee land. The Cherokee fought back with laws.',
        es: 'Georgia y el presidente Jackson querían la tierra cheroqui. Los cheroquis se defendieron con leyes.',
        fa: 'جورجیا و رئیس جمهور جکسن زمین چروکی را می‌خواستند. چروکی‌ها با قانون دفاع کردند.' },
      { en: 'Today this place helps people remember the Cherokee Nation and its removal.',
        es: 'Hoy este lugar ayuda a recordar a la Nación Cheroqui y su expulsión.',
        fa: 'امروز این جا کمک می‌کند ملت چروکی و بیرون راندن آن به یاد بماند.' }
    ],
    page: { en: 'The Cherokee Nation rebuilt in Oklahoma. It is a nation today, with its own government.',
      es: 'La Nación Cheroqui se reconstruyó en Oklahoma. Hoy es una nación, con su propio gobierno.',
      fa: 'ملت چروکی در اوکلاهوما دوباره ساخته شد. امروز یک ملت با حکومت خودش است.' },
    guess: {
      q: { en: 'The Cherokee had laws, courts and a newspaper. Did that stop their removal?', es: 'Los cheroquis tenían leyes, tribunales y un periódico. ¿Eso detuvo su expulsión?', fa: 'چروکی‌ها قانون، محکمه و روزنامه داشتند. آیا این جلوی بیرون راندن‌شان را گرفت؟' },
      choices: [
        { t: { en: 'No, it did not', es: 'No, no la detuvo', fa: 'نه، نگرفت' }, ok: true },
        { t: { en: 'Yes, it did', es: 'Sí, la detuvo', fa: 'بله، گرفت' } }
      ],
      why: { en: 'Even the Supreme Court agreed with them. Still, the US Army forced them west in 1838.', es: 'Hasta la Corte Suprema les dio la razón. Aun así, el ejército los obligó a irse al oeste en 1838.', fa: 'حتی ستره محکمه با آن‌ها موافق بود. باز هم اردوی امریکا در ۱۸۳۸ آن‌ها را به زور به غرب برد.' }
    },
    next: {
      q: { en: 'Next: in the 1840s and 1850s, reformers worked to end slavery. How?', es: 'Ahora: en los años 1840 y 1850, unos reformistas lucharon para acabar con la esclavitud. ¿Cómo?', fa: 'بعدی: در دهه‌های ۱۸۴۰ و ۱۸۵۰، اصلاح‌گران برای پایان بردگی کار کردند. چطور؟' },
      choices: [
        { t: { en: 'Speeches, writing, escape help', es: 'Discursos, escritos, ayuda a escapar', fa: 'سخنرانی، نوشتن، کمک به فرار' }, ok: true },
        { t: { en: 'They only waited', es: 'Solo esperaron', fa: 'فقط منتظر ماندند' } }
      ],
      why: { en: 'Frederick Douglass spoke and wrote. The Underground Railroad helped people escape to freedom.', es: 'Frederick Douglass habló y escribió. El Ferrocarril Subterráneo ayudó a personas a escapar a la libertad.', fa: 'فردریک داگلس سخنرانی کرد و نوشت. «راه آهن زیرزمینی» به مردم کمک کرد به آزادی فرار کنند.' }
    }
  },

  /* houses: the rebuilt buildings of the capital, and the Worcester House; a guide or volunteer in each */
  houses: [
    { at: [19, 2], name: { en: 'Ms. Delia', es: 'Sra. Delia', fa: 'خانم دلیا' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#2f5f7f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is the Council House. It is a rebuilt copy of the first one.', es: 'Esta es la Casa del Consejo. Es una copia reconstruida de la primera.', fa: 'این خانهٔ شورا است. یک نمونهٔ دوباره ساخته‌شده از خانهٔ اول است.' },
        { en: 'Elected Cherokee leaders met here. They made laws for the whole Nation.', es: 'Aquí se reunían líderes cheroquis elegidos. Hacían leyes para toda la Nación.', fa: 'رهبران انتخاب‌شدهٔ چروکی اینجا جمع می‌شدند. برای تمام ملت قانون می‌ساختند.' }
      ] },
    { at: [27, 2], name: { en: 'Mr. Harold', es: 'Sr. Harold', fa: 'آقای هارولد' },
      look: { skin: 5, hair: '#d0d0d0', shirt: '#4a3a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the Supreme Courthouse. The Cherokee Nation had its own highest court.', es: 'Este es el Tribunal Supremo. La Nación Cheroqui tenía su propio tribunal más alto.', fa: 'این ستره محکمه است. ملت چروکی بالاترین محکمهٔ خودش را داشت.' },
        { en: 'Judges heard cases here. They followed the Nation\'s written laws.', es: 'Los jueces escuchaban casos aquí. Seguían las leyes escritas de la Nación.', fa: 'قاضی‌ها اینجا به دعواها رسیدگی می‌کردند. از قانون‌های نوشته‌شدهٔ ملت پیروی می‌کردند.' }
      ] },
    { at: [18, 6], name: { en: 'Ms. Priya', es: 'Sra. Priya', fa: 'خانم پریا' },
      look: { skin: 3, hair: '#120c08', shirt: '#7a3a3a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'This is the print shop. The Cherokee Phoenix newspaper was printed here.', es: 'Esta es la imprenta. Aquí se imprimía el periódico Cherokee Phoenix.', fa: 'این چاپخانه است. روزنامهٔ «فینکس چروکی» اینجا چاپ می‌شد.' },
        { en: 'It began in 1828. It printed news in English and in Cherokee.', es: 'Empezó en 1828. Publicaba noticias en inglés y en cheroqui.', fa: 'در سال ۱۸۲۸ شروع شد. خبرها را به انگلیسی و به چروکی چاپ می‌کرد.' },
        { en: 'Sequoyah\'s [[syllabary|syllabary]] made printing in Cherokee possible.', es: 'El [[syllabary|silabario]] de Sequoyah hizo posible imprimir en cheroqui.', fa: '[[syllabary|الفبای هجایی]] سیکویا چاپ به زبان چروکی را ممکن ساخت.' }
      ] },
    { at: [5, 12], name: { en: 'Mr. Tom', es: 'Sr. Tom', fa: 'آقای تام' },
      look: { skin: 1, hair: '#8a6a3a', shirt: '#3a5a3a', pants: '#3a3a3a', style: 'short', hat: '#5a4a2a' },
      lines: [
        { en: 'Samuel Worcester, a missionary, lived in this house with his family.', es: 'Samuel Worcester, un misionero, vivía en esta casa con su familia.', fa: 'ساموئل ووستر، یک مبلغ دینی، با خانواده‌اش در این خانه زندگی می‌کرد.' },
        { en: 'Georgia said white people in Cherokee land needed a state license.', es: 'Georgia dijo que los blancos en tierra cheroqui necesitaban un permiso del estado.', fa: 'جورجیا گفت سفیدپوستان در زمین چروکی جواز ایالت لازم دارند.' },
        { en: 'He refused. Georgia put him in prison. His case went to the Supreme Court.', es: 'Él se negó. Georgia lo metió en la cárcel. Su caso llegó a la Corte Suprema.', fa: 'او قبول نکرد. جورجیا او را زندانی کرد. دعوای او به ستره محکمه رسید.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. NW: the museum (W walls, f floor, D display cases, x panels), open to the south.
     NE: the Council House (door 19,2), the Supreme Courthouse (27,2) and the print shop (18,6) on a dirt path.
     SW: the Worcester House (5,12), a fenced farm field (young corn 2), a corn crib and a well.
     SE: the creek trail (:) along the creek (~). */
  map: [
    'WWWWWWWWWWWWWWWTTTTTTTTTTTTTTTTT',
    'WfffffffffffffW..RRRRR...RRRRR.T',
    'WfDDDffxffDDDfW..hhdhh...hhdhh.T',
    'WfffffffffffffW..:::::::::::::.T',
    'WfffffffffffffW....,....:....,.T',
    'WfDDfffffffDDfW..RRRR...:......T',
    'WfffffffffffffW..hdhh...:..x...T',
    'WfxfffffffffxfW.........:......T',
    'WfffffffffffffW...T.....:..x.T.T',
    'WWWWWWffWWWWWWW.........:......T',
    'T.......................:......T',
    'T..RRRRR................:......T',
    'T..hhdhh.........T......:...T..T',
    'T.x.....................:......T',
    'T.FFFFFFFF..RRR...T.....::::...T',
    'T.Fo2o2o2F..hhh............:...T',
    'T.F2o2o2oF.......Tx........:.T.T',
    'T.Fo2o2o2F......:::::::::::::..T',
    'T.FFFF.FFF.........,.......,...T',
    'T......,....O.....T.......,....T',
    'T..T.......T..~~~~~~~~~~~~~~~~~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [7, 10],

  /* finds: notes that honor memory and writing, never people */
  finds: [
    { clueAt: [13, 19], at: [4, 19], decor: 'feather',
      clue: { en: 'People wrote letters in Cherokee with feather pens. The spot is 9 steps west of this note.', es: 'La gente escribía cartas en cheroqui con plumas. El lugar está 9 pasos al oeste de esta nota.', fa: 'مردم با قلم پَر به چروکی نامه می‌نوشتند. آن جا ۹ قدم غرب این یادداشت است.' },
      text: { en: 'A feather pen. With the syllabary, many Cherokee wrote letters to faraway family.', es: 'Una pluma para escribir. Con el silabario, muchos cheroquis escribían cartas a familiares lejanos.', fa: 'یک قلم پَر. با الفبای هجایی، بسیاری از چروکی‌ها برای خانوادهٔ دور نامه می‌نوشتند.' } },
    { clueAt: [18, 18], at: [23, 19], decor: 'flower',
      clue: { en: 'Visitors remember here by the creek. From this note, walk 5 steps east, then 1 south.', es: 'Los visitantes recuerdan aquí junto al arroyo. Desde esta nota, camina 5 pasos al este y luego 1 al sur.', fa: 'بازدیدکننده‌ها اینجا کنار جوی یاد می‌کنند. از این یادداشت ۵ قدم به شرق، بعد ۱ قدم به جنوب برو.' },
      text: { en: 'People leave flowers by the water to remember those forced to leave.', es: 'La gente deja flores junto al agua para recordar a quienes fueron obligados a irse.', fa: 'مردم کنار آب گل می‌گذارند تا کسانی را که به زور رانده شدند به یاد بیاورند.' } }
  ],

  words: {
    'cherokee nation': { en: 'a Native American nation with its own land, laws and government', es: 'una nación indígena de Norteamérica con su propia tierra, leyes y gobierno', fa: 'یک ملت بومی امریکا با زمین، قانون و حکومت خودش' },
    constitution: { en: 'a written plan for a government and its laws', es: 'un plan escrito para un gobierno y sus leyes', fa: 'یک نقشهٔ نوشته‌شده برای حکومت و قانون‌هایش' },
    syllabary: { en: 'a way of writing where each symbol stands for one syllable', es: 'una forma de escribir donde cada símbolo es una sílaba', fa: 'یک نوع نوشتن که هر نشانه یک هجا است' },
    removal: { en: 'forcing a people to leave their homeland and move far away', es: 'obligar a un pueblo a dejar su tierra y mudarse lejos', fa: 'مجبور کردن یک قوم به ترک سرزمین خود و رفتن به جای دور' },
    treaty: { en: 'a written agreement between nations', es: 'un acuerdo escrito entre naciones', fa: 'یک توافق نوشته‌شده میان ملت‌ها' },
    'spoils system': { en: 'giving government jobs to people who helped you win an election', es: 'dar puestos del gobierno a quienes te ayudaron a ganar una elección', fa: 'دادن وظیفه‌های دولتی به کسانی که در بردن انتخابات کمک کردند' },
    petition: { en: 'a letter signed by many people asking leaders for something', es: 'una carta firmada por muchas personas que pide algo a los líderes', fa: 'نامه‌ای که مردم زیاد امضا می‌کنند تا از رهبران چیزی بخواهند' },
    descendant: { en: 'a person who comes from an older family member, like a great-grandchild', es: 'una persona que viene de un familiar antiguo, como un bisnieto', fa: 'کسی که از نسل یک فرد قدیمی خانواده است، مثل یک نواسه' },
    evidence: { en: 'facts or sources that show whether a claim is true', es: 'hechos o fuentes que muestran si algo es verdad', fa: 'حقیقت‌ها یا منبع‌هایی که نشان می‌دهند یک ادعا درست است یا نه' }
  },

  npcs: [
    {
      x: 22, y: 4,
      name: { en: 'Ms. Carmen', es: 'Sra. Carmen', fa: 'خانم کارمن' },
      role: { en: 'Site guide', es: 'Guía del sitio', fa: 'رهنمای این جا' },
      look: { skin: 3, hair: '#2a1a0a', shirt: '#2a6e4f', pants: '#2a2a3a', style: 'bun', hat: '#6a5a3a' },
      lines: [
        { en: 'Welcome to New Echota. It was the capital of the Cherokee Nation.', es: 'Bienvenido a New Echota. Fue la capital de la Nación Cheroqui.', fa: 'به نیو ایچوتا خوش آمدی. این جا پایتخت ملت چروکی بود.' },
        { en: 'In 1827, the Cherokee wrote a [[constitution|constitution]], with a council and courts.', es: 'En 1827, los cheroquis escribieron una [[constitution|constitución]], con un consejo y tribunales.', fa: 'در سال ۱۸۲۷، چروکی‌ها یک [[constitution|قانون اساسی]] با شورا و محکمه‌ها نوشتند.' },
        { en: 'Then gold was found in Cherokee land, in 1828 and 1829.', es: 'Luego se encontró oro en tierra cheroqui, en 1828 y 1829.', fa: 'بعد در سال‌های ۱۸۲۸ و ۱۸۲۹ در زمین چروکی طلا پیدا شد.' },
        { en: 'Georgia passed laws to take the land and end the Cherokee government.', es: 'Georgia aprobó leyes para quitar la tierra y acabar con el gobierno cheroqui.', fa: 'جورجیا قانون‌هایی ساخت تا زمین را بگیرد و حکومت چروکی را تمام کند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'The Cherokee wrote a constitution in 1827. What does this source show?', es: 'Los cheroquis escribieron una constitución en 1827. ¿Qué muestra esta fuente?', fa: 'چروکی‌ها در سال ۱۸۲۷ قانون اساسی نوشتند. این منبع چه چیزی را نشان می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'They had a working government with laws', es: 'Tenían un gobierno que funcionaba, con leyes', fa: 'آن‌ها حکومتی فعال با قانون داشتند' },
            why: { en: 'Yes. A written constitution, a council and courts show a working nation.', es: 'Sí. Una constitución escrita, un consejo y tribunales muestran una nación que funcionaba.', fa: 'بله. قانون اساسی نوشته‌شده، شورا و محکمه یک ملت فعال را نشان می‌دهد.' } },
          { t: { en: 'They had no leaders and no laws', es: 'No tenían líderes ni leyes', fa: 'آن‌ها هیچ رهبر و قانونی نداشتند' },
            why: { en: 'No. The constitution set up leaders, a council and courts.', es: 'No. La constitución creó líderes, un consejo y tribunales.', fa: 'نه. قانون اساسی رهبران، شورا و محکمه‌ها را بنا کرد.' } },
          { t: { en: 'They wanted to become a part of Georgia state', es: 'Querían ser parte del estado de Georgia', fa: 'می‌خواستند بخشی از ایالت جورجیا شوند' },
            why: { en: 'No. The constitution shows they ruled themselves, as their own nation.', es: 'No. La constitución muestra que se gobernaban a sí mismos, como nación propia.', fa: 'نه. قانون اساسی نشان می‌دهد که آن‌ها مثل یک ملت جدا خود را اداره می‌کردند.' } }
        ]
      }
    },
    {
      x: 9, y: 13,
      name: { en: 'Dr. Mensah', es: 'Dr. Mensah', fa: 'داکتر منسا' },
      role: { en: 'Historian', es: 'Historiador', fa: 'تاریخ‌دان' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I study the Age of Jackson. Andrew Jackson was President from 1829 to 1837.', es: 'Estudio la era de Jackson. Andrew Jackson fue presidente de 1829 a 1837.', fa: 'من دوران جکسن را مطالعه می‌کنم. اندرو جکسن از ۱۸۲۹ تا ۱۸۳۷ رئیس جمهور بود.' },
        { en: 'States ended property rules, so more white men could vote.', es: 'Los estados quitaron las reglas de propiedad, así que más hombres blancos podían votar.', fa: 'ایالت‌ها شرط داشتن ملک را برداشتند، پس مردان سفیدپوست بیشتری رای دادند.' },
        { en: 'Jackson gave jobs to supporters: the [[spoils system|spoils system]]. He fought the national bank.', es: 'Jackson dio empleos a sus seguidores: el [[spoils system|sistema de botín]]. Luchó contra el banco nacional.', fa: 'جکسن به طرفداران خود وظیفه داد: [[spoils system|سیستم غنیمت]]. او با بانک ملی مخالفت کرد.' },
        { en: 'In 1830 he signed the Indian [[removal|Removal]] Act. Native nations had no vote.', es: 'En 1830 firmó la Ley de [[removal|Traslado Forzoso]] de los Indios. Las naciones indígenas no votaban.', fa: 'در ۱۸۳۰ او قانون [[removal|بیرون راندن]] بومیان را امضا کرد. ملت‌های بومی حق رای نداشتند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'People called Jackson\'s time an age of popular democracy. Who was still left out?', es: 'La época de Jackson se llamó una era de democracia popular. ¿Quiénes quedaron fuera?', fa: 'دوران جکسن را دوران دموکراسی مردمی گفتند. چه کسانی هنوز بیرون ماندند؟' },
        choices: [
          { ok: true, t: { en: 'Women, Black Americans, Native nations', es: 'Las mujeres, los afroamericanos, los indígenas', fa: 'زنان، سیاه‌پوستان و ملت‌های بومی' },
            why: { en: 'Yes. More white men could vote, but most other people still could not.', es: 'Sí. Más hombres blancos podían votar, pero la mayoría de los demás todavía no.', fa: 'بله. مردان سفیدپوست بیشتری رای می‌دادند، اما بیشتر مردم دیگر هنوز نمی‌توانستند.' } },
          { t: { en: 'White men who owned no land at all', es: 'Los hombres blancos que no tenían tierras', fa: 'مردان سفیدپوستی که هیچ زمین نداشتند' },
            why: { en: 'No. States ended property rules, so many of these men could vote now.', es: 'No. Los estados quitaron las reglas de propiedad, así que muchos de ellos ya votaban.', fa: 'نه. ایالت‌ها شرط ملک را برداشتند، پس بسیاری از این مردان حالا رای می‌دادند.' } },
          { t: { en: 'No one at all; every adult could vote', es: 'Nadie; todos los adultos podían votar', fa: 'هیچ کس؛ هر بزرگسال می‌توانست رای بدهد' },
            why: { en: 'No. Women, most Black Americans and Native nations could not vote.', es: 'No. Las mujeres, la mayoría de los afroamericanos y los indígenas no podían votar.', fa: 'نه. زنان، بیشتر سیاه‌پوستان و ملت‌های بومی نمی‌توانستند رای بدهند.' } }
        ]
      }
    },
    {
      x: 20, y: 15,
      name: { en: 'Mr. Daniel', es: 'Sr. Daniel', fa: 'آقای دانیل' },
      role: { en: 'Visitor and Cherokee descendant', es: 'Visitante y descendiente cheroqui', fa: 'بازدیدکننده و نوادهٔ چروکی' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'My family is Cherokee. We live in Oklahoma. I came to see this place.', es: 'Mi familia es cheroqui. Vivimos en Oklahoma. Vine a conocer este lugar.', fa: 'خانوادهٔ من چروکی است. در اوکلاهوما زندگی می‌کنیم. آمدم این جا را ببینم.' },
        { en: 'In 1835, a small group signed the [[treaty|Treaty]] of New Echota.', es: 'En 1835, un grupo pequeño firmó el [[treaty|Tratado]] de New Echota.', fa: 'در سال ۱۸۳۵، یک گروه کوچک [[treaty|معاهدهٔ]] نیو ایچوتا را امضا کرد.' },
        { en: 'They were not the Cherokee government. Chief John Ross and most Cherokee protested.', es: 'No eran el gobierno cheroqui. El jefe John Ross y la mayoría de los cheroquis protestaron.', fa: 'آن‌ها حکومت چروکی نبودند. رئیس جان راس و بیشتر چروکی‌ها اعتراض کردند.' },
        { en: 'In 1838, soldiers forced my [[descendant|ancestors]] west. Many died on the way.', es: 'En 1838, los soldados obligaron a mis [[descendant|antepasados]] a ir al oeste. Muchos murieron en el camino.', fa: 'در سال ۱۸۳۸، عسکرها [[descendant|نیاکانم]] را به زور به غرب بردند. بسیاری در راه مردند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did most Cherokee protest the Treaty of New Echota?', es: '¿Por qué la mayoría de los cheroquis protestó contra el Tratado de New Echota?', fa: 'چرا بیشتر چروکی‌ها به معاهدهٔ نیو ایچوتا اعتراض کردند؟' },
        choices: [
          { ok: true, t: { en: 'A small group signed it, not their government', es: 'Lo firmó un grupo pequeño, no su gobierno', fa: 'یک گروه کوچک امضا کرد، نه حکومت‌شان' },
            why: { en: 'Yes. Most Cherokee never agreed. Thousands signed [[petition|petitions]] against the treaty.', es: 'Sí. La mayoría nunca estuvo de acuerdo. Miles firmaron [[petition|peticiones]] contra el tratado.', fa: 'بله. بیشتر چروکی‌ها هرگز موافق نبودند. هزاران نفر [[petition|عریضه‌ها]] را علیه معاهده امضا کردند.' } },
          { t: { en: 'It gave the Cherokee much more land in Georgia', es: 'Les daba a los cheroquis mucha más tierra en Georgia', fa: 'به چروکی‌ها در جورجیا زمین بسیار بیشتر می‌داد' },
            why: { en: 'No. The treaty gave away all Cherokee land in the East.', es: 'No. El tratado entregaba toda la tierra cheroqui del este.', fa: 'نه. معاهده تمام زمین چروکی در شرق را از دست داد.' } },
          { t: { en: 'Chief John Ross signed it all by himself', es: 'El jefe John Ross lo firmó él solo', fa: 'رئیس جان راس به تنهایی آن را امضا کرد' },
            why: { en: 'No. John Ross did not sign it. He led the protest against it.', es: 'No. John Ross no lo firmó. Él dirigió la protesta contra el tratado.', fa: 'نه. جان راس آن را امضا نکرد. او اعتراض علیه آن را رهبری کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 2, text: { en: 'THE CHEROKEE NATION · In 1827 the Cherokee wrote a constitution, a plan for their government.', es: 'LA NACIÓN CHEROQUI · En 1827 los cheroquis escribieron una constitución, un plan para su gobierno.', fa: 'ملت چروکی · در ۱۸۲۷ چروکی‌ها یک قانون اساسی نوشتند، نقشه‌ای برای حکومت خود.' } },
    { x: 2, y: 7, text: { en: 'SEQUOYAH\'S SYLLABARY · Finished about 1821. Each symbol stands for one syllable.', es: 'EL SILABARIO DE SEQUOYAH · Terminado hacia 1821. Cada símbolo es una sílaba.', fa: 'الفبای هجایی سیکویا · حدود ۱۸۲۱ تمام شد. هر نشانه یک هجا است.' } },
    { x: 12, y: 7, text: { en: 'OTHER NATIONS · The Choctaw, Chickasaw, Muscogee (Creek) and Seminole were removed too.', es: 'OTRAS NACIONES · Los choctaw, chickasaw, muscogee (creek) y seminolas también fueron expulsados.', fa: 'ملت‌های دیگر · چاکتا، چیکاسا، ماسکوگی (کریک) و سمینول هم بیرون رانده شدند.' } },
    { x: 27, y: 6, text: { en: 'THE CHEROKEE PHOENIX · The first Native American newspaper. It was printed here from 1828.', es: 'EL CHEROKEE PHOENIX · El primer periódico indígena de Norteamérica. Se imprimió aquí desde 1828.', fa: 'فینکس چروکی · اولین روزنامهٔ بومیان امریکا. از ۱۸۲۸ اینجا چاپ می‌شد.' } },
    { x: 27, y: 8, text: { en: 'THE AGE OF JACKSON · In 1832, South Carolina said it could cancel a federal tax law. Jackson said no.', es: 'LA ERA DE JACKSON · En 1832, Carolina del Sur dijo que podía anular una ley federal de impuestos. Jackson dijo que no.', fa: 'دوران جکسن · در ۱۸۳۲، کارولینای جنوبی گفت می‌تواند یک قانون مالیات فدرال را لغو کند. جکسن گفت نه.' } },
    { x: 2, y: 13, text: { en: 'THE WORCESTER HOUSE · In 1832, the Supreme Court ruled in Worcester v. Georgia.', es: 'LA CASA WORCESTER · En 1832, la Corte Suprema decidió el caso Worcester contra Georgia.', fa: 'خانهٔ ووستر · در ۱۸۳۲، ستره محکمه در دعوای «ووستر علیه جورجیا» فیصله کرد.' } },
    { x: 18, y: 16, text: { en: 'THE TRAIL OF TEARS · In 1838 and 1839, the US Army forced about 16,000 Cherokee west. Thousands died.', es: 'EL SENDERO DE LÁGRIMAS · En 1838 y 1839, el ejército obligó a unos 16,000 cheroquis a ir al oeste. Murieron miles.', fa: 'راه اشک‌ها · در ۱۸۳۸ و ۱۸۳۹، اردوی امریکا حدود ۱۶٬۰۰۰ چروکی را به زور به غرب برد. هزاران نفر مردند.' } }
  ],

  /* the quest (keeping memory): Ms. Ana (gold !) in the museum lost a page of her teaching copy of the Cherokee
     Phoenix -> Mr. Ray the groundskeeper at the farm saw it blow to the creek -> find it at the east end of the trail */
  quest: {
    stat: 'hei',
    title: { en: 'The Missing Page', es: 'La página perdida', fa: 'صفحهٔ گم‌شده' },
    giver: {
      x: 10, y: 8,
      name: { en: 'Ms. Ana', es: 'Sra. Ana', fa: 'خانم آنا' },
      role: { en: 'Museum volunteer', es: 'Voluntaria del museo', fa: 'رضاکار موزیم' },
      look: { skin: 4, hair: '#3a2a1a', shirt: '#8a2a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I teach visitors with a copy of the Cherokee Phoenix.', es: 'Enseño a los visitantes con una copia del Cherokee Phoenix.', fa: 'من با یک نسخهٔ «فینکس چروکی» به بازدیدکننده‌ها درس می‌دهم.' },
        { en: 'One page is missing. It has English and Cherokee side by side.', es: 'Falta una página. Tiene inglés y cheroqui, lado a lado.', fa: 'یک صفحه گم شده. انگلیسی و چروکی را پهلوی هم دارد.' },
        { en: 'Mr. Ray, the groundskeeper, may have seen it. He works at the farm.', es: 'Tal vez el Sr. Ray, el jardinero, la vio. Trabaja en la granja.', fa: 'شاید آقای ری، باغبان، آن را دیده باشد. او در فارم کار می‌کند.' }
      ],
      wait: { en: 'Mr. Ray is at the farm field, south of the museum.', es: 'El Sr. Ray está en el campo de la granja, al sur del museo.', fa: 'آقای ری کنار کشتزار فارم، در جنوب موزیم است.' },
      thanks: { en: 'Thank you. Visitors can read both languages again. Memory needs care.', es: 'Gracias. Los visitantes pueden leer los dos idiomas otra vez. La memoria necesita cuidado.', fa: 'تشکر. بازدیدکننده‌ها دوباره هر دو زبان را می‌خوانند. یاد به مراقبت نیاز دارد.' }
    },
    contact: {
      x: 11, y: 17,
      name: { en: 'Mr. Ray', es: 'Sr. Ray', fa: 'آقای ری' },
      role: { en: 'Groundskeeper', es: 'Jardinero del sitio', fa: 'باغبان این جا' },
      look: { skin: 2, hair: '#6a6a6a', shirt: '#4a5a3a', pants: '#2a2a2a', style: 'short', hat: '#3a4a2a' },
      lines: [
        { en: 'A page? Yes. The wind took a paper toward the creek.', es: '¿Una página? Sí. El viento se llevó un papel hacia el arroyo.', fa: 'یک صفحه؟ بله. باد یک کاغذ را به طرف جوی برد.' },
        { en: 'Walk east along the creek trail. Look past its east end, by the water.', es: 'Camina al este por el sendero del arroyo. Busca después de su final, junto al agua.', fa: 'در راه کنار جوی به شرق برو. بعد از آخر شرقی راه، کنار آب ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [30, 17],
      hint: { en: 'Past the east end of the creek trail', es: 'Después del final este del sendero del arroyo', fa: 'بعد از آخر شرقی راه کنار جوی' },
      found: { en: 'You found the page. One column is in English. One is in Cherokee.', es: 'Encontraste la página. Una columna está en inglés. Otra está en cheroqui.', fa: 'صفحه را پیدا کردی. یک ستون به انگلیسی است. یکی به چروکی.' },
      item: { icon: '📰', name: { en: 'The newspaper page', es: 'La página del periódico', fa: 'صفحهٔ روزنامه' } }
    }
  },

  scraps: [[1, 1], [30, 9], [1, 20]],
  smudges: [], // a memorial: nothing to fight here

  /* the journal stone in the world: three claims on flags in the museum; plant the flag on the one the evidence supports */
  challenge: {
    at: [7, 3],
    type: 'site', // in the world; the card version (claim) is the fallback
    // A: the true claim (west case) · B: "they agreed to leave" (east case) · C: "Georgia's laws ruled there" (south)
    spots: [[3, 4], [11, 4], [7, 7]],
    stat: 'hei',
    title: { en: 'What does the evidence show?', es: '¿Qué muestran las pruebas?', fa: 'شواهد چه چیزی را نشان می‌دهد؟' },
    intro: { en: 'Three claims stand in the museum. Visit each flag. Plant yours on the claim the [[evidence|evidence]] supports.',
      es: 'Hay tres afirmaciones en el museo. Visita cada bandera. Pon la tuya en la afirmación que las [[evidence|pruebas]] apoyan.',
      fa: 'سه ادعا در موزیم است. پیش هر بیرق برو. بیرق خود را روی ادعایی بگذار که [[evidence|شواهد]] از آن پشتیبانی می‌کند.' },
    options: [
      { icon: '📜', name: { en: 'The Cherokee Nation was a working nation with its own laws', es: 'La Nación Cheroqui era una nación que funcionaba, con sus propias leyes', fa: 'ملت چروکی یک ملت فعال با قانون‌های خودش بود' },
        desc: { en: 'Look at the constitution, the newspaper and the court case.', es: 'Mira la constitución, el periódico y el caso judicial.', fa: 'به قانون اساسی، روزنامه و دعوای محکمه نگاه کن.' },
        result: { en: 'The evidence agrees. The Cherokee had a constitution, courts and a newspaper. In 1832 the Supreme Court agreed too.', es: 'Las pruebas coinciden. Los cheroquis tenían constitución, tribunales y periódico. En 1832 la Corte Suprema también estuvo de acuerdo.', fa: 'شواهد موافق است. چروکی‌ها قانون اساسی، محکمه و روزنامه داشتند. در ۱۸۳۲ ستره محکمه هم موافقت کرد.' } },
      { icon: '✍️', name: { en: 'The Cherokee Nation agreed to leave its land', es: 'La Nación Cheroqui aceptó dejar su tierra', fa: 'ملت چروکی قبول کرد زمین خود را ترک کند' },
        desc: { en: 'Some people say the 1835 treaty proves this.', es: 'Algunos dicen que el tratado de 1835 lo demuestra.', fa: 'بعضی می‌گویند معاهدهٔ ۱۸۳۵ این را ثابت می‌کند.' },
        result: { en: 'The evidence does not support this. A small group signed the treaty, and most Cherokee protested.', es: 'Las pruebas no lo apoyan. Un grupo pequeño firmó el tratado y la mayoría protestó.', fa: 'شواهد این را تایید نمی‌کند. یک گروه کوچک معاهده را امضا کرد و بیشتر چروکی‌ها اعتراض کردند.' } },
      { icon: '⚖️', name: { en: 'Georgia\'s laws were the law in Cherokee land', es: 'Las leyes de Georgia mandaban en tierra cheroqui', fa: 'قانون‌های جورجیا در زمین چروکی حاکم بود' },
        desc: { en: 'Georgia claimed the land after gold was found.', es: 'Georgia reclamó la tierra después de que se encontró oro.', fa: 'جورجیا بعد از پیدا شدن طلا ادعای زمین را کرد.' },
        result: { en: 'The evidence does not support this. In 1832 the Supreme Court said Georgia\'s laws had no force there.', es: 'Las pruebas no lo apoyan. En 1832 la Corte Suprema dijo que las leyes de Georgia no valían allí.', fa: 'شواهد این را تایید نمی‌کند. در ۱۸۳۲ ستره محکمه گفت قانون‌های جورجیا آنجا اعتبار ندارد.' } }
    ],
    kinds: [
      { id: 'cherokee', label: { en: 'Evidence from Cherokee records', es: 'Pruebas de los documentos cheroquis', fa: 'شواهد از اسناد چروکی' } },
      { id: 'us', label: { en: 'Evidence from US records', es: 'Pruebas de los documentos de EE. UU.', fa: 'شواهد از اسناد امریکا' } }
    ],
    reasons: [
      { kind: 'cherokee', fits: [0], t: { en: 'The 1827 constitution set up a council, courts and laws.', es: 'La constitución de 1827 creó un consejo, tribunales y leyes.', fa: 'قانون اساسی ۱۸۲۷ شورا، محکمه و قانون را بنا کرد.' },
        why: { en: 'A written constitution shows a working government.', es: 'Una constitución escrita muestra un gobierno que funciona.', fa: 'قانون اساسی نوشته‌شده یک حکومت فعال را نشان می‌دهد.' } },
      { kind: 'cherokee', fits: [0], t: { en: 'From 1828, the Cherokee Phoenix printed laws and news in two languages.', es: 'Desde 1828, el Cherokee Phoenix publicaba leyes y noticias en dos idiomas.', fa: 'از ۱۸۲۸، «فینکس چروکی» قانون‌ها و خبرها را به دو زبان چاپ می‌کرد.' },
        why: { en: 'A national newspaper that prints laws shows a working nation.', es: 'Un periódico nacional que publica leyes muestra una nación que funciona.', fa: 'روزنامهٔ ملی که قانون چاپ می‌کند یک ملت فعال را نشان می‌دهد.' } },
      { kind: 'cherokee', fits: [], t: { en: 'The Cherokee had no written language until after removal.', es: 'Los cheroquis no tenían escritura hasta después de la expulsión.', fa: 'چروکی‌ها تا بعد از بیرون راندن هیچ خطی نداشتند.' },
        why: { en: 'This is false. Sequoyah finished the syllabary about 1821.', es: 'Esto es falso. Sequoyah terminó el silabario hacia 1821.', fa: 'این نادرست است. سیکویا الفبای هجایی را حدود ۱۸۲۱ تمام کرد.' } },
      { kind: 'us', fits: [0], t: { en: 'In Worcester v. Georgia (1832), the Supreme Court said Georgia\'s laws had no force there.', es: 'En Worcester contra Georgia (1832), la Corte Suprema dijo que las leyes de Georgia no valían allí.', fa: 'در دعوای ووستر علیه جورجیا (۱۸۳۲)، ستره محکمه گفت قانون جورجیا آنجا اعتبار ندارد.' },
        why: { en: 'The highest US court said the Cherokee Nation had its own land and laws.', es: 'El tribunal más alto de EE. UU. dijo que la Nación Cheroqui tenía su tierra y sus leyes.', fa: 'بالاترین محکمهٔ امریکا گفت ملت چروکی زمین و قانون خودش را دارد.' } },
      { kind: 'us', fits: [], t: { en: 'The 1835 treaty was signed by a small group, not the Cherokee government.', es: 'El tratado de 1835 lo firmó un grupo pequeño, no el gobierno cheroqui.', fa: 'معاهدهٔ ۱۸۳۵ را یک گروه کوچک امضا کرد، نه حکومت چروکی.' },
        why: { en: 'True, but it does not show the Nation agreed. Chief John Ross and most Cherokee protested.', es: 'Es cierto, pero no muestra que la Nación aceptó. John Ross y la mayoría protestaron.', fa: 'درست است، اما نشان نمی‌دهد ملت موافق بود. جان راس و بیشتر چروکی‌ها اعتراض کردند.' } },
      { kind: 'us', fits: [], t: { en: 'President Jackson made Georgia obey the Court right away.', es: 'El presidente Jackson hizo que Georgia obedeciera a la Corte enseguida.', fa: 'رئیس جمهور جکسن فوراً جورجیا را مجبور کرد از محکمه اطاعت کند.' },
        why: { en: 'This is false. Jackson did not enforce the ruling. Georgia kept taking land.', es: 'Esto es falso. Jackson no hizo cumplir el fallo. Georgia siguió quitando tierra.', fa: 'این نادرست است. جکسن فیصله را اجرا نکرد. جورجیا به گرفتن زمین ادامه داد.' } }
    ],
    mismatch: { en: 'That evidence does not support the claim you picked.', es: 'Esa prueba no apoya la afirmación que elegiste.', fa: 'این شاهد از ادعایی که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'You followed the evidence. The Cherokee Nation was a working nation with its own laws.', es: 'Seguiste las pruebas. La Nación Cheroqui era una nación que funcionaba, con sus propias leyes.', fa: 'از شواهد پیروی کردی. ملت چروکی یک ملت فعال با قانون‌های خودش بود.' }
  },

  boss: {
    at: [27, 18],
    stat: 'mov',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'The Forgetting has covered the creek trail in gray fog.', es: 'El Olvido cubrió el sendero del arroyo con una niebla gris.', fa: 'فراموشی راه کنار جوی را با مه خاکستری پوشانده است.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts from the creek. The story can be told again. Journal page 4.3 returns.', es: 'La niebla se va del arroyo. La historia se puede contar otra vez. Vuelve la página 4.3 del diario.', fa: 'مه از روی جوی کنار می‌رود. داستان دوباره گفته می‌شود. صفحهٔ ۴.۳ روزنامچه برمی‌گردد.' },
    questions: [
      { q: { en: 'What did Sequoyah create?', es: '¿Qué creó Sequoyah?', fa: 'سیکویا چه چیزی ساخت؟' },
        choices: [
          { en: 'A way to write the Cherokee language', es: 'Una forma de escribir el idioma cheroqui', fa: 'راهی برای نوشتن زبان چروکی' },
          { en: 'A new tax law for the state of Georgia', es: 'Una ley de impuestos nueva para Georgia', fa: 'یک قانون مالیات نو برای ایالت جورجیا' },
          { en: 'A road from Georgia west to Oklahoma', es: 'Un camino de Georgia al oeste, a Oklahoma', fa: 'یک سرک از جورجیا به غرب تا اوکلاهوما' },
          { en: 'The national bank of the United States', es: 'El banco nacional de Estados Unidos', fa: 'بانک ملی ایالات متحده' }],
        answer: 0,
        why: { en: 'Sequoyah finished the Cherokee syllabary about 1821. Each symbol stands for one syllable.', es: 'Sequoyah terminó el silabario cheroqui hacia 1821. Cada símbolo es una sílaba.', fa: 'سیکویا الفبای هجایی چروکی را حدود ۱۸۲۱ تمام کرد. هر نشانه یک هجا است.' } },
      { q: { en: 'What was the Cherokee Phoenix?', es: '¿Qué era el Cherokee Phoenix?', fa: '«فینکس چروکی» چه بود؟' },
        choices: [
          { en: 'A newspaper in English and Cherokee', es: 'Un periódico en inglés y cheroqui', fa: 'یک روزنامه به انگلیسی و چروکی' },
          { en: 'A fort built by the US Army', es: 'Un fuerte construido por el ejército', fa: 'یک قلعه که اردوی امریکا ساخت' },
          { en: 'A treaty that was signed in 1835', es: 'Un tratado firmado en 1835', fa: 'یک معاهده که در ۱۸۳۵ امضا شد' },
          { en: 'A gold mine in the hills of north Georgia', es: 'Una mina de oro en las colinas del norte de Georgia', fa: 'یک معدن طلا در تپه‌های شمال جورجیا' }],
        answer: 0,
        why: { en: 'The Cherokee Phoenix began at New Echota in 1828. It printed news in two languages.', es: 'El Cherokee Phoenix empezó en New Echota en 1828. Publicaba noticias en dos idiomas.', fa: '«فینکس چروکی» در ۱۸۲۸ در نیو ایچوتا شروع شد. خبرها را به دو زبان چاپ می‌کرد.' } },
      { q: { en: 'What did the Indian Removal Act of 1830 do?', es: '¿Qué hizo la Ley de Traslado Forzoso de los Indios de 1830?', fa: 'قانون بیرون راندن بومیان در سال ۱۸۳۰ چه کرد؟' },
        choices: [
          { en: 'Let the President move Native nations west', es: 'Dejó al presidente mover a los indígenas al oeste', fa: 'به رئیس جمهور اجازه داد ملت‌های بومی را به غرب ببرد' },
          { en: 'Gave every Native nation the right to vote', es: 'Dio a toda nación indígena el derecho a votar', fa: 'به هر ملت بومی حق رای داد' },
          { en: 'Made the Cherokee leaders a part of Georgia', es: 'Hizo a los líderes cheroquis una parte de Georgia', fa: 'رهبران چروکی را یک بخش از جورجیا ساخت' },
          { en: 'Closed the national bank in the year 1830', es: 'Cerró el banco nacional en el año 1830', fa: 'بانک ملی را در سال ۱۸۳۰ بست' }],
        answer: 0,
        why: { en: 'Jackson signed it. It let him make deals to move Native nations west of the Mississippi.', es: 'Jackson la firmó. Le permitía hacer acuerdos para mover a los indígenas al oeste del Misisipi.', fa: 'جکسن آن را امضا کرد. به او اجازه داد ملت‌های بومی را به غرب دریای میسی‌سی‌پی ببرد.' } },
      { q: { en: 'In Worcester v. Georgia (1832), what did the Supreme Court rule?', es: 'En Worcester contra Georgia (1832), ¿qué decidió la Corte Suprema?', fa: 'در دعوای ووستر علیه جورجیا (۱۸۳۲)، ستره محکمه چه فیصله کرد؟' },
        choices: [
          { en: 'Georgia\'s laws had no force in Cherokee land', es: 'Las leyes de Georgia no valían en tierra cheroqui', fa: 'قانون جورجیا در زمین چروکی اعتبار نداشت' },
          { en: 'The Cherokee people had to leave Georgia at once', es: 'El pueblo cheroqui debía salir de Georgia ya mismo', fa: 'مردم چروکی باید فوراً جورجیا را ترک کنند' },
          { en: 'Samuel Worcester had broken a US law', es: 'Samuel Worcester había violado una ley de EE. UU.', fa: 'ساموئل ووستر یک قانون امریکا را شکسته بود' },
          { en: 'The gold in Georgia belonged to the state', es: 'El oro de Georgia era del estado', fa: 'طلای جورجیا مال ایالت بود' }],
        answer: 0,
        why: { en: 'Chief Justice John Marshall\'s Court said the Cherokee Nation was its own nation, under US treaties.', es: 'La Corte del juez John Marshall dijo que la Nación Cheroqui era una nación propia, según tratados de EE. UU.', fa: 'محکمهٔ قاضی القضات جان مارشال گفت ملت چروکی طبق معاهده‌های امریکا ملت جدا است.' } },
      { q: { en: 'What did President Jackson do after the Court\'s ruling?', es: '¿Qué hizo el presidente Jackson después del fallo de la Corte?', fa: 'رئیس جمهور جکسن بعد از فیصلهٔ محکمه چه کرد؟' },
        choices: [
          { en: 'He did not enforce it', es: 'No lo hizo cumplir', fa: 'آن را اجرا نکرد' },
          { en: 'He sent troops to protect the Cherokee', es: 'Mandó tropas a proteger a los cheroquis', fa: 'عسکر فرستاد تا از چروکی‌ها دفاع کند' },
          { en: 'He gave the gold land back', es: 'Devolvió la tierra del oro', fa: 'زمین طلا را پس داد' },
          { en: 'He asked the Court to vote again', es: 'Pidió a la Corte votar otra vez', fa: 'از محکمه خواست دوباره رای بدهد' }],
        answer: 0,
        why: { en: 'Jackson did not enforce the ruling. Georgia kept taking Cherokee land.', es: 'Jackson no hizo cumplir el fallo. Georgia siguió quitando tierra cheroqui.', fa: 'جکسن فیصله را اجرا نکرد. جورجیا به گرفتن زمین چروکی ادامه داد.' } },
      { q: { en: 'Who signed the Treaty of New Echota in 1835?', es: '¿Quién firmó el Tratado de New Echota en 1835?', fa: 'چه کسی معاهدهٔ نیو ایچوتا را در ۱۸۳۵ امضا کرد؟' },
        choices: [
          { en: 'A small group, not the Cherokee government', es: 'Un grupo pequeño, no el gobierno cheroqui', fa: 'یک گروه کوچک، نه حکومت چروکی' },
          { en: 'Chief John Ross and the whole Cherokee council', es: 'El jefe John Ross y todo el consejo cheroqui', fa: 'رئیس جان راس و تمام شورای چروکی' },
          { en: 'Every adult in the Cherokee Nation', es: 'Todos los adultos de la Nación Cheroqui', fa: 'هر بزرگسال در ملت چروکی' },
          { en: 'The judges of the US Supreme Court', es: 'Los jueces de la Corte Suprema', fa: 'قاضی‌های ستره محکمهٔ امریکا' }],
        answer: 0,
        why: { en: 'The Cherokee government did not agree. Chief John Ross and most Cherokee protested the treaty.', es: 'El gobierno cheroqui no estuvo de acuerdo. John Ross y la mayoría protestaron contra el tratado.', fa: 'حکومت چروکی موافق نبود. رئیس جان راس و بیشتر چروکی‌ها به معاهده اعتراض کردند.' } },
      { q: { en: 'What was the Trail of Tears?', es: '¿Qué fue el Sendero de Lágrimas?', fa: '«راه اشک‌ها» چه بود؟' },
        choices: [
          { en: 'The forced removal of the Cherokee west', es: 'La expulsión forzada de los cheroquis al oeste', fa: 'بیرون راندن اجباری چروکی‌ها به غرب' },
          { en: 'A trade road the Cherokee built for gold', es: 'Un camino de comercio que hicieron para el oro', fa: 'یک راه تجارت که چروکی‌ها برای طلا ساختند' },
          { en: 'A trip west that the Cherokee chose to take', es: 'Un viaje al oeste que los cheroquis eligieron', fa: 'سفری به غرب که چروکی‌ها خودشان انتخاب کردند' },
          { en: 'A war between Georgia and South Carolina', es: 'Una guerra entre Georgia y Carolina del Sur', fa: 'یک جنگ میان جورجیا و کارولینای جنوبی' }],
        answer: 0,
        why: { en: 'In 1838 and 1839, the US Army forced about 16,000 Cherokee west. Thousands died.', es: 'En 1838 y 1839, el ejército obligó a unos 16,000 cheroquis a ir al oeste. Murieron miles.', fa: 'در ۱۸۳۸ و ۱۸۳۹، اردوی امریکا حدود ۱۶٬۰۰۰ چروکی را به زور به غرب برد. هزاران نفر مردند.' } },
      { q: { en: 'In the Age of Jackson, who gained the right to vote?', es: 'En la era de Jackson, ¿quiénes ganaron el derecho a votar?', fa: 'در دوران جکسن، چه کسانی حق رای گرفتند؟' },
        choices: [
          { en: 'More white men who owned no property', es: 'Más hombres blancos sin propiedades', fa: 'مردان سفیدپوست بیشتر که ملک نداشتند' },
          { en: 'Women in every state of the United States', es: 'Las mujeres de todos los estados del país', fa: 'زنان در همهٔ ایالت‌های امریکا' },
          { en: 'The Native nations of the East', es: 'Las naciones indígenas del este', fa: 'ملت‌های بومی شرق' },
          { en: 'Enslaved people in the South', es: 'Las personas esclavizadas del sur', fa: 'مردمان برده در جنوب' }],
        answer: 0,
        why: { en: 'States ended property rules for white men. Women, Black Americans and Native nations were still left out.', es: 'Los estados quitaron las reglas de propiedad para hombres blancos. Mujeres, afroamericanos e indígenas siguieron fuera.', fa: 'ایالت‌ها شرط ملک را برای مردان سفیدپوست برداشتند. زنان، سیاه‌پوستان و بومیان هنوز بیرون ماندند.' } }
    ]
  },

  learned: [
    { en: 'The [[cherokee nation|Cherokee Nation]] had a [[constitution|constitution]], courts, a capital and a newspaper.', es: 'La [[cherokee nation|Nación Cheroqui]] tenía una [[constitution|constitución]], tribunales, una capital y un periódico.', fa: '[[cherokee nation|ملت چروکی]] [[constitution|قانون اساسی]]، محکمه، پایتخت و روزنامه داشت.' },
    { en: 'In 1832 the Supreme Court sided with the Cherokee, but Jackson did not enforce it.', es: 'En 1832 la Corte Suprema apoyó a los cheroquis, pero Jackson no hizo cumplir el fallo.', fa: 'در ۱۸۳۲ ستره محکمه طرف چروکی‌ها را گرفت، اما جکسن آن را اجرا نکرد.' },
    { en: 'In 1838 and 1839, the US Army forced the Cherokee west. Thousands died on the Trail of Tears.', es: 'En 1838 y 1839, el ejército obligó a los cheroquis a ir al oeste. Miles murieron en el Sendero de Lágrimas.', fa: 'در ۱۸۳۸ و ۱۸۳۹، اردوی امریکا چروکی‌ها را به زور به غرب برد. هزاران نفر در راه اشک‌ها مردند.' }
  ],
  reflect: {
    q: { en: 'When a family must leave its home, how can it keep its story alive?', es: 'Cuando una familia debe dejar su hogar, ¿cómo puede mantener viva su historia?', fa: 'وقتی یک خانواده باید خانه‌اش را ترک کند، چطور می‌تواند داستانش را زنده نگه دارد؟' },
    starter: { en: 'A family can keep its story alive by', es: 'Una familia puede mantener viva su historia', fa: 'یک خانواده می‌تواند داستانش را زنده نگه دارد با' }
  }
};
