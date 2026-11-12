/* TRAILWALKER · Episode 8.3 · Modern Themes: Terrorism and Climate (VUS) · THE FINALE
   A QUIET episode (memorial: true): Arlington, Virginia, today. North-west: the Pentagon (J) and the National 9/11
   Pentagon Memorial, with rows of benches over small pools (~) on gravel (l). North-east: a small Arlington
   neighborhood and park (three homes). South-west: the visitors' path through a small park. South-east: the walk
   to the Potomac riverside trail (:) and the climate marker, where the journal stone stands.
   The people are a volunteer guide, a visitor, a teacher, a park ranger and a scientist (all invented).
   Hard topic (terrorism): plain, true, serious words; no jokes; the Grump is "The Forgetting".
   Afghanistan is spoken of with care: Afghans were not responsible; many suffered and many helped.
   The last journal page is here: when The Forgetting is beaten, the Great Journal is whole again. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'VUS',
  title: { en: 'Modern Themes: Terrorism and Climate', es: 'Temas de hoy: el terrorismo y el clima', fa: 'موضوعات امروز: تروریزم و اقلیم' },
  place: { en: 'Arlington, today', es: 'Arlington, hoy', fa: 'آرلینگتن، امروز' },
  weather: { sky: 'clear', time: 'sunset' },
  memorial: true,
  intro: [
    { en: 'This is the last page. At the Pentagon Memorial, the Grump wants people to forget.',
      es: 'Esta es la última página. En el Memorial del Pentágono, el Gruñón quiere que la gente olvide.',
      fa: 'این آخرین صفحه است. در یادبود پنتاگون، غرغرو می‌خواهد مردم فراموش کنند.' },
    { en: 'A quiet place. Listen to the 3 people here, then visit the journal stone.',
      es: 'Un lugar tranquilo. Escucha a las 3 personas de aquí y luego ve a la piedra del diario.',
      fa: 'یک جای آرام. به ۳ نفر اینجا گوش بده، بعد پیش سنگ روزنامچه برو.' }
  ],
  /* cut scenes: Arlington on the map; the timeline marks 2001, the year of the attacks (the place is today) */
  scenes: {
    at: [-77.06, 38.87],
    year: 2001,
    yearText: { en: 'Remembering 2001, today', es: 'Recordando 2001, hoy', fa: 'یادبود ۲۰۰۱، امروز' },
    start: [
      { en: 'On September 11, 2001, terrorists hijacked four planes in the United States.',
        es: 'El 11 de septiembre de 2001, unos terroristas secuestraron cuatro aviones en Estados Unidos.',
        fa: 'در ۱۱ سپتامبر ۲۰۰۱، تروریستان چهار طیاره را در امریکا ربودند.' },
      { en: 'The planes crashed in New York, at the Pentagon in Virginia, and in Pennsylvania.',
        es: 'Los aviones se estrellaron en Nueva York, en el Pentágono de Virginia y en Pensilvania.',
        fa: 'طیاره‌ها در نیویارک، در پنتاگون در ویرجینیا و در پنسلوانیا سقوط کردند.' },
      { en: 'Nearly 3,000 people were killed. Memorials help us remember each person.',
        es: 'Murieron casi 3,000 personas. Los memoriales nos ayudan a recordar a cada una.',
        fa: 'نزدیک به ۳ هزار نفر کشته شدند. یادبودها کمک می‌کنند هر انسان را به یاد داشته باشیم.' }
    ],
    page: { en: 'All 24 journal pages are home. The Great Journal is whole again.',
      es: 'Las 24 páginas del diario volvieron a casa. El Gran Diario está completo otra vez.',
      fa: 'هر ۲۴ صفحهٔ روزنامچه به خانه برگشتند. روزنامچهٔ بزرگ دوباره کامل است.' },
    guess: {
      q: { en: 'The memorial has 184 benches. Why 184?', es: 'El memorial tiene 184 bancas. ¿Por qué 184?', fa: 'این یادبود ۱۸۴ چوکی دارد. چرا ۱۸۴؟' },
      choices: [
        { t: { en: 'One for each person killed', es: 'Una por cada persona que murió', fa: 'یکی برای هر کشته' }, ok: true },
        { t: { en: 'One for each Virginia town', es: 'Una por cada pueblo de Virginia', fa: 'یکی برای هر شهرک ویرجینیا' } }
      ],
      why: { en: 'Each bench has a name: 125 people in the Pentagon and 59 on Flight 77.', es: 'Cada banca tiene un nombre: 125 personas en el Pentágono y 59 en el vuelo 77.', fa: 'هر چوکی یک نام دارد: ۱۲۵ نفر در پنتاگون و ۵۹ نفر در پرواز ۷۷.' }
    },
    next: {
      q: { en: 'From New World Shores to Modern Horizon: why does remembering history matter?', es: 'De las Costas del Nuevo Mundo al Horizonte Moderno: ¿por qué importa recordar la historia?', fa: 'از سواحل دنیای نو تا افق امروز: چرا به یاد داشتن تاریخ مهم است؟' },
      choices: [
        { t: { en: 'We learn and choose well', es: 'Aprendemos y elegimos bien', fa: 'یاد می‌گیریم و خوب انتخاب می‌کنیم' }, ok: true },
        { t: { en: 'It does not matter', es: 'No importa', fa: 'مهم نیست' } }
      ],
      why: { en: 'From Liberty Road to the Stormy Century, remembering helps us honor people, learn from mistakes and choose well.', es: 'Del Camino de la Libertad al Siglo Tormentoso, recordar nos ayuda a honrar a la gente, aprender de errores y elegir bien.', fa: 'از راه آزادی تا قرن طوفانی، به یاد آوردن کمک می‌کند به مردم احترام بگذاریم، از اشتباه‌ها یاد بگیریم و خوب انتخاب کنیم.' }
    }
  },

  /* houses: three homes in the Arlington neighborhood beside the memorial; each neighbor remembers that day */
  houses: [
    { at: [20, 2], name: { en: 'Ms. Joyce', es: 'Sra. Joyce', fa: 'خانم جویس' },
      look: { skin: 5, hair: '#d0d0d0', shirt: '#5a7a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I was a nurse in Arlington in 2001. That day, we cared for injured people.', es: 'Yo era enfermera en Arlington en 2001. Ese día cuidamos a personas heridas.', fa: 'من در سال ۲۰۰۱ در آرلینگتن نرس بودم. آن روز از زخمی‌ها مراقبت کردیم.' },
        { en: 'People lined up to give blood. Strangers helped strangers.', es: 'La gente hizo fila para donar sangre. Desconocidos ayudaron a desconocidos.', fa: 'مردم برای دادن خون صف بستند. مردم ناآشنا به یکدیگر کمک کردند.' },
        { en: 'Some Muslim Americans faced unfair hate after 9/11. Many neighbors stood with them.', es: 'Algunos musulmanes estadounidenses sufrieron odio injusto después del 11 de septiembre. Muchos vecinos los apoyaron.', fa: 'بعد از ۱۱ سپتامبر، بعضی مسلمانان امریکایی با نفرت ناعادلانه روبرو شدند. بسیاری از همسایه‌ها کنارشان ایستادند.' }
      ] },
    { at: [27, 2], name: { en: 'Mr. Ben', es: 'Sr. Ben', fa: 'آقای بن' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#7a2a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I was an Arlington firefighter. We were among the first at the Pentagon.', es: 'Yo era bombero de Arlington. Fuimos de los primeros en llegar al Pentágono.', fa: 'من مأمور اطفائیهٔ آرلینگتن بودم. ما از اولین کسانی بودیم که به پنتاگون رسیدیم.' },
        { en: 'Firefighters came from many towns to help. We worked for days.', es: 'Llegaron bomberos de muchos pueblos para ayudar. Trabajamos durante días.', fa: 'مأموران اطفائیه از شهرهای زیادی برای کمک آمدند. ما چند روز کار کردیم.' }
      ] },
    { at: [25, 6], name: { en: 'Mrs. Farida', es: 'Sra. Farida', fa: 'خانم فریده' },
      look: { skin: 3, hair: '#1a1008', shirt: '#3a6a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My family is from Afghanistan. We came to Virginia in 2021.', es: 'Mi familia es de Afganistán. Llegamos a Virginia en 2021.', fa: 'خانوادهٔ من از افغانستان است. ما در سال ۲۰۲۱ به ویرجینیا آمدیم.' },
        { en: 'Afghan people did not cause 9/11. Many Afghans suffered in the long war.', es: 'El pueblo afgano no causó el 11 de septiembre. Muchos afganos sufrieron en la larga guerra.', fa: 'مردم افغانستان ۱۱ سپتامبر را به وجود نیاوردند. بسیاری از افغان‌ها در جنگ طولانی رنج کشیدند.' },
        { en: 'Many Afghans also helped Americans, as [[interpreter|interpreters]] and as friends.', es: 'Muchos afganos también ayudaron a los estadounidenses, como [[interpreter|intérpretes]] y como amigos.', fa: 'بسیاری از افغان‌ها هم به امریکایی‌ها کمک کردند، به حیث [[interpreter|ترجمان]] و دوست.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the Pentagon (J, rows 1-2), a gravel walk (row 3) and the memorial field (rows 4-9): benches over pools (~).
     NE: three homes (doors 20,2 · 27,2 · 25,6) on a path, a small park and a sign about Afghanistan.
     SW: the visitors' path (l) south through a small park. SE: the path east to the riverside trail (x 25)
     beside the Potomac River (~), with the climate marker and three claim flags. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TJJJJJJJJJJJJJJT..RRRRR..RRRRR.T',
    'TJJJJJJJJJJJJJJT..hhdhh..hhdhh.T',
    'Tlllllllllllllll::::::::::::::.T',
    'Tl~l~l~l~l~l~l~T.,..:....T..,..T',
    'TllllllllllllllT....:..RRRRR...T',
    'Tl~l~l~l~l~l~l~T.T..:..hhdhh...T',
    'Tlllllllllllllll....::::::::...T',
    'Tl~l~l~l~l~l~l~T..,.:......T.x.T',
    'TllllllxlllllllT....:..........T',
    'T....T.ll.T.........:..........T',
    'T..T...ll....,......:......~~~~T',
    'T......ll...T.......::::::.~~~~T',
    'T.T....ll........T.......:.~~~~T',
    'T......ll..x...........x.:.~~~~T',
    'T.,....ll....T...........:.~~~~T',
    'T......lllllllll::::::::::.~~~~T',
    'T..T...ll.....,...x......:.~~~~T',
    'T......ll..T.............:.~~~~T',
    'T.T....ll..........T.....:.~~~~T',
    'T...,..ll...T............:.~~~~T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [8, 10],

  /* finds: notes that honor memory, never people */
  finds: [
    { clueAt: [13, 5], at: [13, 9], decor: 'flower',
      clue: { en: 'Maple trees shade the benches. From this note, walk 4 steps south.', es: 'Los arces dan sombra a las bancas. Desde esta nota, camina 4 pasos al sur.', fa: 'درختان افرا بر چوکی‌ها سایه می‌اندازند. از این یادداشت ۴ قدم به جنوب برو.' },
      text: { en: 'A flower. Visitors leave flowers on the benches for people they loved.', es: 'Una flor. Los visitantes dejan flores en las bancas por las personas que amaban.', fa: 'یک گل. بازدیدکننده‌ها برای عزیزان‌شان روی چوکی‌ها گل می‌گذارند.' } },
    { clueAt: [17, 15], at: [17, 19], decor: 'shell',
      clue: { en: 'The river trail is east of here. From this note, walk 4 steps south.', es: 'El sendero del río está al este. Desde esta nota, camina 4 pasos al sur.', fa: 'راه کنار دریا شرق اینجا است. از این یادداشت ۴ قدم به جنوب برو.' },
      text: { en: 'A small river shell. The Potomac here rises and falls with the ocean tides.', es: 'Una conchita de río. Aquí el Potomac sube y baja con las mareas del océano.', fa: 'یک صدف کوچک دریایی. دریای پوتومک اینجا با مد و جزر بحر بالا و پایین می‌رود.' } }
  ],

  words: {
    memorial: { en: 'a place that helps people remember those who died', es: 'un lugar que ayuda a recordar a quienes murieron', fa: 'جایی که کمک می‌کند کسانی را که مردند به یاد بیاوریم' },
    hijack: { en: 'to take control of a plane by force', es: 'tomar el control de un avión por la fuerza', fa: 'به زور کنترول یک طیاره را گرفتن' },
    terrorism: { en: 'using violence and fear against ordinary people for political goals', es: 'usar la violencia y el miedo contra gente común por fines políticos', fa: 'استفاده از خشونت و ترس علیه مردم عادی برای هدف‌های سیاسی' },
    'al-qaeda': { en: 'the terrorist group that planned the September 11 attacks', es: 'el grupo terrorista que planeó los ataques del 11 de septiembre', fa: 'گروه تروریستی که حمله‌های ۱۱ سپتامبر را پلان کرد' },
    'climate change': { en: 'the warming of Earth over many years, mostly from burning coal, oil and gas', es: 'el calentamiento de la Tierra durante muchos años, sobre todo por quemar carbón, petróleo y gas', fa: 'گرم شدن زمین در طول سال‌های زیاد، بیشتر از سوختاندن زغال سنگ، نفت و گاز' },
    'sea level': { en: 'the height of the top of the ocean', es: 'la altura de la superficie del océano', fa: 'بلندی سطح بحر' },
    evidence: { en: 'facts or sources that show whether a claim is true', es: 'hechos o fuentes que muestran si algo es verdad', fa: 'حقیقت‌ها یا منبع‌هایی که نشان می‌دهند یک ادعا درست است یا نه' },
    interpreter: { en: 'a person who helps people who speak different languages understand each other', es: 'una persona que ayuda a entenderse a gente que habla idiomas distintos', fa: 'کسی که کمک می‌کند مردمی که زبان‌های مختلف دارند همدیگر را بفهمند' }
  },

  npcs: [
    {
      x: 5, y: 5,
      name: { en: 'Ms. Grace', es: 'Sra. Grace', fa: 'خانم گریس' },
      role: { en: 'Memorial volunteer guide', es: 'Guía voluntaria del memorial', fa: 'رهنمای رضاکار یادبود' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#2a3a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome to the National 9/11 Pentagon [[memorial|Memorial]]. Please walk quietly.', es: 'Bienvenido al [[memorial|Memorial]] Nacional del 11 de Septiembre en el Pentágono. Camina en silencio, por favor.', fa: 'به [[memorial|یادبود]] ملی ۱۱ سپتامبر در پنتاگون خوش آمدی. لطفاً آرام قدم بزن.' },
        { en: 'On September 11, 2001, terrorists [[hijack|hijacked]] Flight 77. It hit the Pentagon.', es: 'El 11 de septiembre de 2001, unos terroristas [[hijack|secuestraron]] el vuelo 77. Chocó contra el Pentágono.', fa: 'در ۱۱ سپتامبر ۲۰۰۱، تروریستان پرواز ۷۷ را [[hijack|ربودند]]. طیاره به پنتاگون خورد.' },
        { en: 'Here 184 people were killed: 125 in the building and 59 on the plane.', es: 'Aquí murieron 184 personas: 125 en el edificio y 59 en el avión.', fa: 'اینجا ۱۸۴ نفر کشته شدند: ۱۲۵ نفر در ساختمان و ۵۹ نفر در طیاره.' },
        { en: 'Each bench has one name. The benches are in order by age.', es: 'Cada banca tiene un nombre. Las bancas están en orden por edad.', fa: 'هر چوکی یک نام دارد. چوکی‌ها به ترتیب سن گذاشته شده‌اند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Each bench shows a name and an age. What does this memorial help us know?', es: 'Cada banca muestra un nombre y una edad. ¿Qué nos ayuda a saber este memorial?', fa: 'هر چوکی یک نام و یک سن را نشان می‌دهد. این یادبود به ما کمک می‌کند چه چیزی را بدانیم؟' },
        choices: [
          { ok: true, t: { en: 'Each person who died here', es: 'Quién era cada persona que murió aquí', fa: 'هر کسی که اینجا جان داد' },
            why: { en: 'Yes. Each bench honors one real person, with a name, an age and a family.', es: 'Sí. Cada banca honra a una persona real, con nombre, edad y familia.', fa: 'بله. هر چوکی به یک انسان واقعی با نام، سن و خانواده احترام می‌گذارد.' } },
          { t: { en: 'Who won a battle in this field', es: 'Quién ganó una batalla en este campo', fa: 'چه کسی در این میدان جنگی را برد' },
            why: { en: 'No. There was no battle here. The benches honor people killed in a terrorist attack.', es: 'No. Aquí no hubo batalla. Las bancas honran a personas muertas en un ataque terrorista.', fa: 'نه. اینجا جنگی نبود. چوکی‌ها به کسانی احترام می‌گذارند که در یک حملهٔ تروریستی کشته شدند.' } },
          { t: { en: 'How the Pentagon was first built', es: 'Cómo se construyó el Pentágono', fa: 'پنتاگون اول چطور ساخته شد' },
            why: { en: 'No. The memorial is about people, not the building. Each name is a person.', es: 'No. El memorial trata de personas, no del edificio. Cada nombre es una persona.', fa: 'نه. این یادبود دربارهٔ انسان‌ها است، نه ساختمان. هر نام یک انسان است.' } }
        ]
      }
    },
    {
      x: 11, y: 7,
      name: { en: 'Marcus', es: 'Marcus', fa: 'مارکوس' },
      role: { en: 'Visitor', es: 'Visitante', fa: 'بازدیدکننده' },
      look: { skin: 5, hair: '#120c08', shirt: '#4a4a6a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'My uncle worked at the Pentagon in 2001. He was not hurt.', es: 'Mi tío trabajaba en el Pentágono en 2001. No salió herido.', fa: 'کاکایم در سال ۲۰۰۱ در پنتاگون کار می‌کرد. او زخمی نشد.' },
        { en: 'He helped carry hurt coworkers out of the smoke. He still visits here.', es: 'Ayudó a sacar del humo a compañeros heridos. Todavía viene aquí.', fa: 'او کمک کرد همکاران زخمی را از میان دود بیرون ببرند. او هنوز اینجا می‌آید.' },
        { en: '[[al-qaeda|Al-Qaeda]], a terrorist group, planned the attacks. Its leader was Osama bin Laden.', es: '[[al-qaeda|Al Qaeda]], un grupo terrorista, planeó los ataques. Su líder era Osama bin Laden.', fa: '[[al-qaeda|القاعده]]، یک گروه تروریستی، این حمله‌ها را پلان کرد. رهبرش اسامه بن لادن بود.' },
        { en: 'On Flight 93, passengers fought back. It crashed near Shanksville, Pennsylvania.', es: 'En el vuelo 93, los pasajeros se defendieron. Cayó cerca de Shanksville, Pensilvania.', fa: 'در پرواز ۹۳، مسافران مقاومت کردند. طیاره نزدیک شنکسویل، پنسلوانیا سقوط کرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Marcus tells his uncle\'s story. Why do we listen to many people\'s stories?', es: 'Marcus cuenta la historia de su tío. ¿Por qué escuchamos las historias de muchas personas?', fa: 'مارکوس داستان کاکایش را می‌گوید. چرا به داستان‌های مردم زیادی گوش می‌دهیم؟' },
        choices: [
          { ok: true, t: { en: 'Each person saw a different part', es: 'Cada persona vio una parte distinta', fa: 'هر کس بخش دیگری را دید' },
            why: { en: 'Yes. Rescuers, families, nurses and survivors each saw a part. Together they tell more.', es: 'Sí. Rescatistas, familias, enfermeras y sobrevivientes vieron cada uno una parte. Juntos cuentan más.', fa: 'بله. نجات‌دهنده‌ها، خانواده‌ها، نرس‌ها و بازمانده‌ها هر کدام بخشی را دیدند. با هم بیشتر می‌گویند.' } },
          { t: { en: 'Only one story can ever be true', es: 'Solo una historia puede ser verdad', fa: 'فقط یک داستان می‌تواند درست باشد' },
            why: { en: 'No. Many true stories fit together. Each one shows a different view.', es: 'No. Muchas historias verdaderas encajan juntas. Cada una muestra otra mirada.', fa: 'نه. داستان‌های درست زیادی با هم جور می‌آیند. هر کدام دید دیگری را نشان می‌دهد.' } },
          { t: { en: 'Family stories are never useful', es: 'Las historias de familia no sirven', fa: 'داستان‌های خانوادگی هیچ فایده ندارند' },
            why: { en: 'No. Family memories are sources too. Historians check them with other records.', es: 'No. Los recuerdos de familia también son fuentes. Los historiadores los comparan con otros documentos.', fa: 'نه. خاطره‌های خانوادگی هم منبع هستند. تاریخ‌دانان آن‌ها را با اسناد دیگر مقایسه می‌کنند.' } }
        ]
      }
    },
    {
      x: 22, y: 13,
      name: { en: 'Dr. Reyes', es: 'Dra. Reyes', fa: 'داکتر ریس' },
      role: { en: 'Scientist at the climate marker', es: 'Científica del marcador del clima', fa: 'دانشمند کنار نشانهٔ اقلیم' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I study [[climate change|climate change]]. Earth is getting warmer.', es: 'Estudio el [[climate change|cambio climático]]. La Tierra se está calentando.', fa: 'من [[climate change|تغییر اقلیم]] را مطالعه می‌کنم. زمین گرم‌تر می‌شود.' },
        { en: 'Burning coal, oil and gas adds heat-trapping gases to the air.', es: 'Quemar carbón, petróleo y gas agrega al aire gases que atrapan el calor.', fa: 'سوختاندن زغال سنگ، نفت و گاز، گازهایی را به هوا می‌افزاید که گرما را نگه می‌دارند.' },
        { en: 'Effects include hotter years, stronger storms and a rising [[sea level|sea level]].', es: 'Los efectos incluyen años más calurosos, tormentas más fuertes y un [[sea level|nivel del mar]] más alto.', fa: 'نتیجه‌ها سال‌های گرم‌تر، طوفان‌های قوی‌تر و بالا آمدن [[sea level|سطح بحر]] است.' },
        { en: 'Virginia\'s coast, like Norfolk, sees more flooding. The land there is sinking a little too.', es: 'La costa de Virginia, como Norfolk, tiene más inundaciones. Allí la tierra también se hunde un poco.', fa: 'ساحل ویرجینیا، مثل نورفوک، سیلاب بیشتری می‌بیند. زمین آنجا هم کمی پایین می‌رود.' },
        { en: 'People respond in many ways: cleaner energy, building for floods, and agreements between countries.', es: 'La gente responde de muchas formas: energía más limpia, construir para inundaciones y acuerdos entre países.', fa: 'مردم به راه‌های زیادی جواب می‌دهند: انرژی پاک‌تر، ساختن برای سیلاب و توافق میان کشورها.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Seas are rising. What is one effect on Virginia\'s coast?', es: 'El mar está subiendo. ¿Cuál es un efecto en la costa de Virginia?', fa: 'سطح بحر بالا می‌آید. یک نتیجهٔ آن در ساحل ویرجینیا چیست؟' },
        choices: [
          { ok: true, t: { en: 'More flooding in places like Norfolk', es: 'Más inundaciones en lugares como Norfolk', fa: 'سیلاب بیشتر در جاهایی مثل نورفوک' },
            why: { en: 'Yes. Higher water means streets near the coast flood more often.', es: 'Sí. Con el agua más alta, las calles cerca de la costa se inundan más seguido.', fa: 'بله. آب بلندتر یعنی سرک‌های نزدیک ساحل بیشتر زیر آب می‌روند.' } },
          { t: { en: 'The coast gets much farther from the sea', es: 'La costa queda mucho más lejos del mar', fa: 'ساحل از بحر خیلی دورتر می‌شود' },
            why: { en: 'No. Rising water moves closer to homes and streets, not farther away.', es: 'No. El agua que sube se acerca a casas y calles, no se aleja.', fa: 'نه. آبی که بالا می‌آید به خانه‌ها و سرک‌ها نزدیک‌تر می‌شود، نه دورتر.' } },
          { t: { en: 'Less water in every bay', es: 'Menos agua en cada bahía', fa: 'آب کمتر در هر خلیج' },
            why: { en: 'No. A rising sea puts more water in the bays, like the Chesapeake Bay.', es: 'No. Un mar que sube pone más agua en las bahías, como la bahía de Chesapeake.', fa: 'نه. بحری که بالا می‌آید آب بیشتری به خلیج‌ها، مثل خلیج چِساپیک، می‌آورد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 9, text: { en: 'THE PENTAGON MEMORIAL · 184 benches over small pools, one for each person killed here.', es: 'EL MEMORIAL DEL PENTÁGONO · 184 bancas sobre pequeños estanques, una por cada persona que murió aquí.', fa: 'یادبود پنتاگون · ۱۸۴ چوکی بالای حوض‌های کوچک، یکی برای هر کسی که اینجا کشته شد.' } },
    { x: 11, y: 14, text: { en: 'SEPTEMBER 11, 2001 · Planes crashed in New York, Arlington and near Shanksville, Pennsylvania.', es: '11 DE SEPTIEMBRE DE 2001 · Cayeron aviones en Nueva York, Arlington y cerca de Shanksville, Pensilvania.', fa: '۱۱ سپتامبر ۲۰۰۱ · طیاره‌ها در نیویارک، آرلینگتن و نزدیک شنکسویل، پنسلوانیا سقوط کردند.' } },
    { x: 18, y: 17, text: { en: 'AFTER 9/11 · In 2002, the Department of Homeland Security began. Airports added security checks.', es: 'DESPUÉS DEL 11-S · En 2002 empezó el Departamento de Seguridad Nacional. Los aeropuertos agregaron controles.', fa: 'بعد از ۱۱ سپتامبر · در ۲۰۰۲ وزارت امنیت داخلی شروع شد. میدان‌های هوایی بررسی‌های امنیتی افزودند.' } },
    { x: 29, y: 8, text: { en: 'THE WAR IN AFGHANISTAN · From 2001 to 2021. US forces went after al-Qaeda there.', es: 'LA GUERRA EN AFGANISTÁN · De 2001 a 2021. Las fuerzas de EE. UU. fueron tras Al Qaeda allí.', fa: 'جنگ در افغانستان · از ۲۰۰۱ تا ۲۰۲۱. نیروهای امریکا آنجا به دنبال القاعده رفتند.' } },
    { x: 23, y: 14, text: { en: 'CLIMATE MARKER · Seas along Virginia\'s coast are rising. Norfolk and Hampton Roads see more flooding.', es: 'MARCADOR DEL CLIMA · El mar sube en la costa de Virginia. Norfolk y Hampton Roads tienen más inundaciones.', fa: 'نشانهٔ اقلیم · سطح بحر در ساحل ویرجینیا بالا می‌آید. نورفوک و همپتن رودز سیلاب بیشتری می‌بینند.' } }
  ],

  /* the quest (keeping memory): Mr. Ortiz, a teacher, at the memorial (north-west) lost his class notebook of names
     -> Ms. Wells the park ranger in the small park (north-east) saw the wind take it -> find it in the south-west park */
  quest: {
    stat: 'mov',
    title: { en: 'The Notebook of Names', es: 'El cuaderno de los nombres', fa: 'دفترچهٔ نام‌ها' },
    giver: {
      x: 3, y: 9,
      name: { en: 'Mr. Ortiz', es: 'Sr. Ortiz', fa: 'آقای اورتیز' },
      role: { en: 'Teacher, with his students', es: 'Maestro, con sus estudiantes', fa: 'معلم، با شاگردانش' },
      look: { skin: 2, hair: '#2a1a0a', shirt: '#3a5a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I teach history. My students came to read names at the benches.', es: 'Enseño historia. Mis estudiantes vinieron a leer nombres en las bancas.', fa: 'من تاریخ درس می‌دهم. شاگردانم آمدند تا نام‌ها را کنار چوکی‌ها بخوانند.' },
        { en: 'Our notebook of names is lost. We copied each name with care.', es: 'Perdimos nuestro cuaderno de nombres. Copiamos cada nombre con cuidado.', fa: 'دفترچهٔ نام‌های ما گم شده. ما هر نام را با دقت نوشته بودیم.' },
        { en: 'Ms. Wells, the park ranger, may have seen it. She is east.', es: 'Tal vez la Sra. Wells, la guardaparques, lo vio. Está al este.', fa: 'شاید خانم ولز، نگهبان پارک، آن را دیده باشد. او در شرق است.' }
      ],
      wait: { en: 'Ms. Wells is in the small park, east of the memorial.', es: 'La Sra. Wells está en el parque pequeño, al este del memorial.', fa: 'خانم ولز در پارک کوچک، شرق یادبود است.' },
      thanks: { en: 'Thank you. Now my students can read each name aloud. Every name matters.', es: 'Gracias. Ahora mis estudiantes pueden leer cada nombre en voz alta. Cada nombre importa.', fa: 'تشکر. حالا شاگردانم می‌توانند هر نام را بلند بخوانند. هر نام مهم است.' }
    },
    contact: {
      x: 18, y: 9,
      name: { en: 'Ms. Wells', es: 'Sra. Wells', fa: 'خانم ولز' },
      role: { en: 'Park ranger', es: 'Guardaparques', fa: 'نگهبان پارک' },
      look: { skin: 4, hair: '#4a2a1a', shirt: '#5a6a3a', pants: '#3a3a2a', style: 'bun', hat: '#6a5a3a' },
      lines: [
        { en: 'I care for the parks here, so people can rest and remember.', es: 'Cuido los parques de aquí, para que la gente pueda descansar y recordar.', fa: 'من از پارک‌های اینجا مراقبت می‌کنم، تا مردم آرام بگیرند و به یاد بیاورند.' },
        { en: 'The wind took a notebook south. Look in the south-west park, by the west trees.', es: 'El viento se llevó un cuaderno al sur. Busca en el parque del suroeste, junto a los árboles del oeste.', fa: 'باد یک دفترچه را به جنوب برد. در پارک جنوب غربی، کنار درختان غربی ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [2, 18],
      hint: { en: 'South-west park, near the west trees', es: 'Parque del suroeste, cerca de los árboles del oeste', fa: 'پارک جنوب غربی، نزدیک درختان غربی' },
      found: { en: 'You found the notebook. Each page holds names, written with care.', es: 'Encontraste el cuaderno. Cada página tiene nombres escritos con cuidado.', fa: 'دفترچه را پیدا کردی. هر صفحه نام‌هایی دارد که با دقت نوشته شده‌اند.' },
      item: { icon: '📓', name: { en: 'The notebook of names', es: 'El cuaderno de los nombres', fa: 'دفترچهٔ نام‌ها' } }
    }
  },

  scraps: [[1, 3], [30, 1], [1, 20]],
  smudges: [], // a memorial: nothing to fight here

  /* the journal stone in the world: three claims on flags by the climate marker; plant the flag on the one the
     evidence supports. A: the true claim (north) · B: "flooding has not changed" (middle) · C: "only far away" (south) */
  challenge: {
    at: [23, 15],
    type: 'site', // in the world; the card version (claim) is the fallback
    spots: [[17, 12], [21, 18], [18, 20]],
    stat: 'hei',
    title: { en: 'What does the evidence show?', es: '¿Qué muestran las pruebas?', fa: 'شواهد چه چیزی را نشان می‌دهد؟' },
    intro: { en: 'Three claims stand by the river. Visit each flag. Plant yours on the claim the [[evidence|evidence]] supports.',
      es: 'Hay tres afirmaciones junto al río. Visita cada bandera. Pon la tuya en la afirmación que las [[evidence|pruebas]] apoyan.',
      fa: 'سه ادعا کنار دریا است. پیش هر بیرق برو. بیرق خود را روی ادعایی بگذار که [[evidence|شواهد]] از آن پشتیبانی می‌کند.' },
    options: [
      { icon: '🌊', name: { en: 'Rising seas bring more flooding to Virginia\'s coast', es: 'El mar que sube trae más inundaciones a la costa de Virginia', fa: 'بالا آمدن بحر سیلاب بیشتری به ساحل ویرجینیا می‌آورد' },
        desc: { en: 'Look at the tide marker and the flood records.', es: 'Mira el marcador de marea y los registros de inundaciones.', fa: 'به نشانهٔ مد و جزر و اسناد سیلاب نگاه کن.' },
        result: { en: 'The evidence agrees. The water is higher, and floods come more often.', es: 'Las pruebas coinciden. El agua está más alta y las inundaciones son más frecuentes.', fa: 'شواهد موافق است. آب بلندتر است و سیلاب بیشتر می‌آید.' } },
      { icon: '📅', name: { en: 'Flooding on Virginia\'s coast has not changed', es: 'Las inundaciones en la costa de Virginia no han cambiado', fa: 'سیلاب در ساحل ویرجینیا هیچ تغییر نکرده است' },
        desc: { en: 'Some people say floods are the same as long ago.', es: 'Algunos dicen que las inundaciones son iguales que antes.', fa: 'بعضی می‌گویند سیلاب‌ها مثل گذشته هستند.' },
        result: { en: 'The evidence does not support this. Records show more flooding than long ago.', es: 'Las pruebas no lo apoyan. Los registros muestran más inundaciones que antes.', fa: 'شواهد این را تایید نمی‌کند. اسناد سیلاب بیشتری نسبت به گذشته نشان می‌دهند.' } },
      { icon: '🗺️', name: { en: 'Rising seas only matter in faraway places', es: 'El mar que sube solo importa en lugares lejanos', fa: 'بالا آمدن بحر فقط در جاهای دور مهم است' },
        desc: { en: 'Some people say this is not a Virginia problem.', es: 'Algunos dicen que esto no es un problema de Virginia.', fa: 'بعضی می‌گویند این مشکل ویرجینیا نیست.' },
        result: { en: 'The evidence does not support this. Norfolk\'s own tide marker shows rising water.', es: 'Las pruebas no lo apoyan. El propio marcador de marea de Norfolk muestra que el agua sube.', fa: 'شواهد این را تایید نمی‌کند. نشانهٔ مد و جزر خود نورفوک بالا آمدن آب را نشان می‌دهد.' } }
    ],
    kinds: [
      { id: 'measure', label: { en: 'Evidence from the tide marker', es: 'Pruebas del marcador de marea', fa: 'شواهد از نشانهٔ مد و جزر' } },
      { id: 'records', label: { en: 'Evidence from flood records', es: 'Pruebas de los registros de inundaciones', fa: 'شواهد از اسناد سیلاب' } }
    ],
    reasons: [
      { kind: 'measure', fits: [0], t: { en: 'Since the 1920s, the tide marker in Norfolk shows water over one foot higher.', es: 'Desde los años 1920, el marcador de marea de Norfolk muestra el agua más de un pie más alta.', fa: 'از دههٔ ۱۹۲۰، نشانهٔ مد و جزر در نورفوک آب را بیش از یک فُت بلندتر نشان می‌دهد.' },
        why: { en: 'Measurements over many years show the sea there is rising.', es: 'Las medidas de muchos años muestran que allí el mar sube.', fa: 'اندازه‌گیری‌های سال‌های زیاد نشان می‌دهد که بحر آنجا بالا می‌آید.' } },
      { kind: 'measure', fits: [], t: { en: 'The tide marker shows the water lower than in the 1920s.', es: 'El marcador de marea muestra el agua más baja que en los años 1920.', fa: 'نشانهٔ مد و جزر آب را پایین‌تر از دههٔ ۱۹۲۰ نشان می‌دهد.' },
        why: { en: 'This is false. The marker shows the water is higher now.', es: 'Esto es falso. El marcador muestra que el agua está más alta ahora.', fa: 'این نادرست است. نشانه نشان می‌دهد که آب حالا بلندتر است.' } },
      { kind: 'measure', fits: [], t: { en: 'One sunny day last week had no flooding at all.', es: 'Un día de sol la semana pasada no hubo ninguna inundación.', fa: 'یک روز آفتابی هفتهٔ گذشته هیچ سیلابی نبود.' },
        why: { en: 'One day is not a trend. Scientists look at many years of data.', es: 'Un día no es una tendencia. Los científicos miran datos de muchos años.', fa: 'یک روز یک روند نیست. دانشمندان معلومات سال‌های زیاد را می‌بینند.' } },
      { kind: 'records', fits: [0], t: { en: 'City records show streets in Norfolk flood more often than 50 years ago.', es: 'Los registros de la ciudad muestran que las calles de Norfolk se inundan más que hace 50 años.', fa: 'اسناد شهر نشان می‌دهد سرک‌های نورفوک بیشتر از ۵۰ سال پیش زیر آب می‌روند.' },
        why: { en: 'Records kept over many years show floods coming more often.', es: 'Los registros de muchos años muestran inundaciones más frecuentes.', fa: 'اسنادی که سال‌ها نگه داشته شده، سیلاب‌های بیشتر را نشان می‌دهد.' } },
      { kind: 'records', fits: [], t: { en: 'Old records show Norfolk floods less today than long ago.', es: 'Los registros viejos muestran que Norfolk se inunda menos hoy que antes.', fa: 'اسناد قدیمی نشان می‌دهد نورفوک امروز کمتر از گذشته سیلاب دارد.' },
        why: { en: 'This is false. The records show more flooding today, not less.', es: 'Esto es falso. Los registros muestran más inundaciones hoy, no menos.', fa: 'این نادرست است. اسناد امروز سیلاب بیشتر نشان می‌دهد، نه کمتر.' } },
      { kind: 'records', fits: [], t: { en: 'A post with no sources says the floods are not real.', es: 'Una publicación sin fuentes dice que las inundaciones no son reales.', fa: 'یک پیام بدون منبع می‌گوید سیلاب‌ها واقعی نیستند.' },
        why: { en: 'A post with no sources is not evidence. Check real records.', es: 'Una publicación sin fuentes no es una prueba. Revisa registros reales.', fa: 'پیامی که منبع ندارد شاهد نیست. اسناد واقعی را ببین.' } }
    ],
    mismatch: { en: 'That evidence does not support the claim you picked.', es: 'Esa prueba no apoya la afirmación que elegiste.', fa: 'این شاهد از ادعایی که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'You followed the evidence. Lift The Forgetting, and the Great Journal is whole again.', es: 'Seguiste las pruebas. Vence al Olvido, y el Gran Diario estará completo otra vez.', fa: 'از شواهد پیروی کردی. فراموشی را کنار بزن، و روزنامچهٔ بزرگ دوباره کامل می‌شود.' }
  },

  boss: {
    at: [26, 18],
    stat: 'mov',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'A gray fog rolls over the river trail. The Forgetting wants the names to fade.', es: 'Una niebla gris cubre el sendero del río. El Olvido quiere que los nombres se borren.', fa: 'مه خاکستری راه کنار دریا را می‌پوشاند. فراموشی می‌خواهد نام‌ها محو شوند.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد داشت.' },
    win: { en: 'The fog lifts. Journal page 8.3 returns. The Great Journal is whole again.', es: 'La niebla se va. Vuelve la página 8.3 del diario. El Gran Diario está completo otra vez.', fa: 'مه کنار می‌رود. صفحهٔ ۸.۳ روزنامچه برمی‌گردد. روزنامچهٔ بزرگ دوباره کامل است.' },
    questions: [
      { q: { en: 'What happened on September 11, 2001?', es: '¿Qué pasó el 11 de septiembre de 2001?', fa: 'در ۱۱ سپتامبر ۲۰۰۱ چه رخ داد؟' },
        choices: [
          { en: 'Terrorists hijacked four planes and attacked the US', es: 'Unos terroristas secuestraron cuatro aviones y atacaron EE. UU.', fa: 'تروریستان چهار طیاره را ربودند و به امریکا حمله کردند' },
          { en: 'A huge storm flooded most of New York City', es: 'Una gran tormenta inundó casi toda Nueva York', fa: 'یک طوفان بزرگ بیشتر شهر نیویارک را زیر آب برد' },
          { en: 'Two countries signed a peace treaty in Virginia', es: 'Dos países firmaron un tratado de paz en Virginia', fa: 'دو کشور در ویرجینیا یک معاهدهٔ صلح امضا کردند' },
          { en: 'The Pentagon building opened for the very first time', es: 'El edificio del Pentágono abrió por primera vez', fa: 'ساختمان پنتاگون برای اولین بار باز شد' }],
        answer: 0,
        why: { en: 'Al-Qaeda terrorists hijacked four planes. Nearly 3,000 people were killed.', es: 'Terroristas de Al Qaeda secuestraron cuatro aviones. Murieron casi 3,000 personas.', fa: 'تروریستان القاعده چهار طیاره را ربودند. نزدیک به ۳ هزار نفر کشته شدند.' } },
      { q: { en: 'Which group planned the September 11 attacks?', es: '¿Qué grupo planeó los ataques del 11 de septiembre?', fa: 'کدام گروه حمله‌های ۱۱ سپتامبر را پلان کرد؟' },
        choices: [
          { en: 'Al-Qaeda, a terrorist group', es: 'Al Qaeda, un grupo terrorista', fa: 'القاعده، یک گروه تروریستی' },
          { en: 'A city council in Virginia', es: 'Un concejo de una ciudad de Virginia', fa: 'شورای یک شهر در ویرجینیا' },
          { en: 'A team of airline pilots', es: 'Un equipo de pilotos de avión', fa: 'یک گروه از پیلوت‌های طیاره' },
          { en: 'A group of park rangers', es: 'Un grupo de guardaparques', fa: 'یک گروه از نگهبانان پارک' }],
        answer: 0,
        why: { en: 'Al-Qaeda planned it. Ordinary people of any country or faith were not to blame.', es: 'Al Qaeda lo planeó. La gente común de cualquier país o religión no tuvo la culpa.', fa: 'القاعده آن را پلان کرد. مردم عادی هیچ کشور یا دینی مقصر نبودند.' } },
      { q: { en: 'Where did Flight 77 crash?', es: '¿Dónde cayó el vuelo 77?', fa: 'پرواز ۷۷ کجا سقوط کرد؟' },
        choices: [
          { en: 'The Pentagon, in Arlington', es: 'En el Pentágono, en Arlington', fa: 'پنتاگون، در آرلینگتن' },
          { en: 'A field in Pennsylvania', es: 'En un campo de Pensilvania', fa: 'یک مزرعه در پنسلوانیا' },
          { en: 'The Capitol in Washington', es: 'En el Capitolio, en Washington', fa: 'کاپیتول در واشنگتن' },
          { en: 'A harbor in Norfolk, Virginia', es: 'En un puerto de Norfolk, Virginia', fa: 'یک بندر در نورفوک، ویرجینیا' }],
        answer: 0,
        why: { en: '184 people died at the Pentagon site. The memorial has one bench for each.', es: 'En el Pentágono murieron 184 personas. El memorial tiene una banca por cada una.', fa: '۱۸۴ نفر در پنتاگون جان دادند. یادبود برای هر کدام یک چوکی دارد.' } },
      { q: { en: 'What did the passengers on Flight 93 do?', es: '¿Qué hicieron los pasajeros del vuelo 93?', fa: 'مسافران پرواز ۹۳ چه کردند؟' },
        choices: [
          { en: 'They fought back against the hijackers', es: 'Se defendieron contra los secuestradores', fa: 'آن‌ها در برابر رباینده‌ها مقاومت کردند' },
          { en: 'They flew the plane safely home', es: 'Llevaron el avión a casa sin peligro', fa: 'آن‌ها طیاره را به سلامت به خانه بردند' },
          { en: 'They landed the plane in New York City', es: 'Aterrizaron el avión en Nueva York', fa: 'آن‌ها طیاره را در شهر نیویارک نشاندند' },
          { en: 'They slept and never knew what happened', es: 'Durmieron y nunca supieron qué pasó', fa: 'آن‌ها خواب بودند و هرگز ندانستند چه شد' }],
        answer: 0,
        why: { en: 'The passengers fought back. The plane crashed in a field near Shanksville, Pennsylvania.', es: 'Los pasajeros se defendieron. El avión cayó en un campo cerca de Shanksville, Pensilvania.', fa: 'مسافران مقاومت کردند. طیاره در یک مزرعه نزدیک شنکسویل، پنسلوانیا سقوط کرد.' } },
      { q: { en: 'What is terrorism?', es: '¿Qué es el terrorismo?', fa: 'تروریزم چیست؟' },
        choices: [
          { en: 'Attacking ordinary people to spread fear for political goals', es: 'Atacar a gente común para sembrar miedo por fines políticos', fa: 'حمله به مردم عادی برای پخش ترس، به خاطر هدف‌های سیاسی' },
          { en: 'A fair election where all the people choose their own leaders', es: 'Una elección justa donde todo el pueblo elige a sus propios líderes', fa: 'یک انتخابات عادلانه که همهٔ مردم رهبران خود را انتخاب می‌کنند' },
          { en: 'A law that protects the rights of every single person', es: 'Una ley que protege los derechos de cada persona', fa: 'قانونی که از حقوق هر انسان محافظت می‌کند' },
          { en: 'A peaceful march where people ask leaders for change', es: 'Una marcha pacífica donde la gente pide cambios', fa: 'یک راهپیمایی آرام که مردم از رهبران تغییر می‌خواهند' }],
        answer: 0,
        why: { en: 'Terrorists attack ordinary people to make everyone afraid. It is never right.', es: 'Los terroristas atacan a gente común para dar miedo a todos. Nunca está bien.', fa: 'تروریستان به مردم عادی حمله می‌کنند تا همه را بترسانند. این هرگز درست نیست.' } },
      { q: { en: 'What new department did the United States create in 2002?', es: '¿Qué departamento nuevo creó Estados Unidos en 2002?', fa: 'امریکا در سال ۲۰۰۲ کدام وزارت نو را ساخت؟' },
        choices: [
          { en: 'The Department of Homeland Security', es: 'El Departamento de Seguridad Nacional', fa: 'وزارت امنیت داخلی' },
          { en: 'The Department of the Treasury', es: 'El Departamento del Tesoro', fa: 'وزارت خزانه' },
          { en: 'The Department of Veterans Affairs', es: 'El Departamento de Asuntos de Veteranos', fa: 'وزارت امور سربازان سابق' },
          { en: 'The Department of Housing and Urban Development', es: 'El Departamento de Vivienda y Desarrollo Urbano', fa: 'وزارت مسکن و انکشاف شهری' }],
        answer: 0,
        why: { en: 'Homeland Security works to protect the country. Airports also added new security checks.', es: 'Seguridad Nacional trabaja para proteger al país. Los aeropuertos también agregaron controles nuevos.', fa: 'وزارت امنیت داخلی برای حفاظت کشور کار می‌کند. میدان‌های هوایی هم بررسی‌های امنیتی نو افزودند.' } },
      { q: { en: 'What causes most of climate change today?', es: '¿Qué causa la mayor parte del cambio climático hoy?', fa: 'امروز بیشتر تغییر اقلیم از چه چیزی است؟' },
        choices: [
          { en: 'Burning coal, oil and gas', es: 'Quemar carbón, petróleo y gas', fa: 'سوختاندن زغال سنگ، نفت و گاز' },
          { en: 'The Moon moving closer to Earth', es: 'La Luna que se acerca a la Tierra', fa: 'نزدیک شدن مهتاب به زمین' },
          { en: 'Planting too many trees in parks', es: 'Plantar demasiados árboles en parques', fa: 'کاشتن درخت‌های خیلی زیاد در پارک‌ها' },
          { en: 'Rain falling on the oceans', es: 'La lluvia que cae en los océanos', fa: 'باریدن باران روی بحرها' }],
        answer: 0,
        why: { en: 'Burning them adds heat-trapping gases to the air. Earth gets warmer.', es: 'Quemarlos agrega al aire gases que atrapan el calor. La Tierra se calienta.', fa: 'سوختاندن آن‌ها گازهایی را که گرما نگه می‌دارند به هوا می‌افزاید. زمین گرم‌تر می‌شود.' } },
      { q: { en: 'Why does Norfolk, Virginia, see more flooding than before?', es: '¿Por qué Norfolk, Virginia, tiene más inundaciones que antes?', fa: 'چرا نورفوک، ویرجینیا، سیلاب بیشتری از گذشته می‌بیند؟' },
        choices: [
          { en: 'Seas are rising, and the land is sinking', es: 'El mar sube y la tierra se hunde', fa: 'بحر بالا می‌آید و زمین پایین می‌رود' },
          { en: 'There are fewer storms than long ago', es: 'Hay menos tormentas que antes', fa: 'طوفان‌ها کمتر از گذشته است' },
          { en: 'The city moved far away from the ocean', es: 'La ciudad se mudó lejos del océano', fa: 'شهر از بحر خیلی دور رفت' },
          { en: 'People stopped building any new roads at all', es: 'La gente dejó de construir caminos nuevos', fa: 'مردم دیگر هیچ سرک نو نساختند' }],
        answer: 0,
        why: { en: 'Tide markers show the sea rising. People respond by building for floods and using cleaner energy.', es: 'Los marcadores de marea muestran que el mar sube. La gente construye para inundaciones y usa energía más limpia.', fa: 'نشانه‌های مد و جزر بالا آمدن بحر را نشان می‌دهند. مردم برای سیلاب می‌سازند و انرژی پاک‌تر به کار می‌برند.' } }
    ]
  },

  learned: [
    { en: 'On September 11, 2001, [[al-qaeda|al-Qaeda]] terrorists killed nearly 3,000 people. Americans came together to help.', es: 'El 11 de septiembre de 2001, terroristas de [[al-qaeda|Al Qaeda]] mataron a casi 3,000 personas. La gente se unió para ayudar.', fa: 'در ۱۱ سپتامبر ۲۰۰۱، تروریستان [[al-qaeda|القاعده]] نزدیک به ۳ هزار نفر را کشتند. امریکایی‌ها برای کمک با هم یکجا شدند.' },
    { en: 'Burning coal, oil and gas warms Earth. Virginia\'s coast sees more flooding as seas rise.', es: 'Quemar carbón, petróleo y gas calienta la Tierra. La costa de Virginia tiene más inundaciones porque el mar sube.', fa: 'سوختاندن زغال سنگ، نفت و گاز زمین را گرم می‌کند. با بالا آمدن بحر، ساحل ویرجینیا سیلاب بیشتری می‌بیند.' },
    { en: 'With this last page, the Great Journal is whole again. Remembering keeps history alive.', es: 'Con esta última página, el Gran Diario está completo otra vez. Recordar mantiene viva la historia.', fa: 'با این صفحهٔ آخر، روزنامچهٔ بزرگ دوباره کامل است. به یاد آوردن تاریخ را زنده نگه می‌دارد.' }
  ],
  reflect: {
    q: { en: 'Why is it important to remember history, even the hard parts?', es: '¿Por qué es importante recordar la historia, incluso las partes difíciles?', fa: 'چرا به یاد داشتن تاریخ، حتی بخش‌های سخت آن، مهم است؟' },
    starter: { en: 'It is important to remember history because', es: 'Es importante recordar la historia porque', fa: 'به یاد داشتن تاریخ مهم است، چون' }
  }
};
