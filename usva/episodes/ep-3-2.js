/* TRAILWALKER · Episode 3.2 · Federalism, the Bill of Rights and Federal Power (VUS)
   New York City in 1789, the first capital under the Constitution. Broadway runs north to south on the west
   side (x 2), with St. Paul's Chapel (where Washington prayed after his oath) in the northwest. Wall Street is
   row 11, from Broadway east to a dock on the East River. Federal Hall (D, door 13,10) stands on the north side
   of Wall Street, where the first Congress met and Washington took the oath on April 30, 1789. A print shop and a
   coffee house sit north of Wall Street; south of it are homes, Broad Street (x 13), an open square (the journal
   stone's five amendment areas) and a market by the river. The harbor (x 28-31) has three docks (rows 4, 11, 17). */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'VUS',
  title: { en: 'The Bill of Rights', es: 'La Carta de Derechos', fa: 'منشور حقوق' },
  place: { en: 'New York, 1789', es: 'Nueva York, 1789', fa: 'نیویارک، ۱۷۸۹' },
  intro: [
    { en: 'The Grump blurred the [[bill of rights|Bill of Rights]] page. People forgot their rights!',
      es: 'El Gruñón borró la página de la [[bill of rights|Carta de Derechos]]. ¡La gente olvidó sus derechos!',
      fa: 'غرغرو صفحهٔ [[bill of rights|منشور حقوق]] را تار کرد. مردم حقوق خود را فراموش کردند!' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: lower Manhattan on the map, 1789 on the timeline */
  scenes: {
    at: [-74.01, 40.707],
    year: 1789,
    start: [
      { en: 'In 1789, New York City was the capital of the United States.',
        es: 'En 1789, la ciudad de Nueva York era la capital de Estados Unidos.',
        fa: 'در سال ۱۷۸۹، شهر نیویارک پایتخت ایالات متحدهٔ امریکا بود.' },
      { en: 'The first Congress met at Federal Hall, on Wall Street.',
        es: 'El primer Congreso se reunió en el Federal Hall, en la calle Wall.',
        fa: 'اولین کانگرس در فدرال هال، در سرک وال، جمع شد.' },
      { en: 'On April 30, 1789, George Washington took the oath as President there.',
        es: 'El 30 de abril de 1789, George Washington juró allí como presidente.',
        fa: 'در ۳۰ اپریل ۱۷۸۹، جورج واشنگتن در همانجا به حیث رئیس جمهور سوگند خورد.' }
    ],
    page: { en: 'Today, the Bill of Rights is kept at the National Archives in Washington, D.C.',
      es: 'Hoy, la Carta de Derechos se guarda en el Archivo Nacional en Washington, D.C.',
      fa: 'امروز، منشور حقوق در آرشیف ملی در واشنگتن دی سی نگه‌داری می‌شود.' },
    guess: {
      q: { en: 'Many people said the new Constitution needed one more thing. What was it?', es: 'Mucha gente dijo que a la nueva Constitución le faltaba algo. ¿Qué era?', fa: 'بسیاری از مردم گفتند قانون اساسی نو یک چیز کم دارد. آن چه بود؟' },
      choices: [
        { t: { en: '📜 A list of rights', es: '📜 Una lista de derechos', fa: '📜 فهرست حقوق' }, ok: true },
        { t: { en: '👑 A king', es: '👑 Un rey', fa: '👑 یک پادشاه' } }
      ],
      why: { en: 'Many people feared a strong national government. They wanted their rights written down.', es: 'Mucha gente temía un gobierno nacional fuerte. Querían sus derechos por escrito.', fa: 'بسیاری از مردم از یک حکومت ملی قوی می‌ترسیدند. می‌خواستند حقوق‌شان نوشته شود.' }
    },
    next: {
      q: { en: 'Next: Mount Vernon, Virginia. What did Washington warn about when he left office?', es: 'Ahora: Mount Vernon, Virginia. ¿Sobre qué advirtió Washington al dejar el cargo?', fa: 'بعدی: مونت ورنن، ویرجینیا. واشنگتن وقت رفتن از وظیفه از چه چیزی هشدار داد؟' },
      choices: [
        { t: { en: 'Fights between political parties', es: 'Peleas entre partidos políticos', fa: 'جنگ میان حزب‌های سیاسی' }, ok: true },
        { t: { en: 'Too many new farms', es: 'Demasiadas granjas nuevas', fa: 'فارم‌های نوی زیاد' } }
      ],
      why: { en: 'In his Farewell Address, Washington warned that party fights could divide the nation.', es: 'En su Discurso de Despedida, Washington advirtió que las peleas de partidos podían dividir al país.', fa: 'واشنگتن در بیانیهٔ خداحافظی هشدار داد که جنگ حزب‌ها می‌تواند کشور را تقسیم کند.' }
    }
  },
  /* houses: who lives or works behind each door (2 lines each) */
  houses: [
    { at: [7, 2], name: { en: 'Mr. Bell', es: 'Señor Bell', fa: 'آقای بِل' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#2a2a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to St. Paul\'s Chapel. I take care of this church.', es: 'Bienvenido a la capilla de San Pablo. Yo cuido esta iglesia.', fa: 'به کلیسای سنت پال خوش آمدی. من از این کلیسا نگهداری می‌کنم.' },
        { en: 'After his oath, President Washington came here to pray.', es: 'Después de su juramento, el presidente Washington vino aquí a rezar.', fa: 'رئیس جمهور واشنگتن بعد از سوگند، برای دعا اینجا آمد.' }
      ] },
    { at: [19, 2], name: { en: 'Mrs. Gomez', es: 'Señora Gomez', fa: 'خانم گومز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a5a8a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'Our Jewish congregation has prayed in New York for over 100 years.', es: 'Nuestra comunidad judía reza en Nueva York desde hace más de 100 años.', fa: 'جماعت یهودی ما بیش از ۱۰۰ سال است که در نیویارک عبادت می‌کند.' },
        { en: 'We hope the new rights will protect every faith, not only one.', es: 'Esperamos que los nuevos derechos protejan todas las religiones, no solo una.', fa: 'امیدواریم حقوق نو از همهٔ دین‌ها حمایت کند، نه فقط از یکی.' }
      ] },
    { at: [9, 7], name: { en: 'Tom', es: 'Tom', fa: 'تام' },
      look: { skin: 0, hair: '#c8a060', shirt: '#e8dcc0', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'I am a printer\'s apprentice. I set every letter by hand.', es: 'Soy aprendiz de impresor. Pongo cada letra a mano.', fa: 'من شاگرد چاپگر هستم. هر حرف را با دست می‌چینم.' },
        { en: 'Our newspaper prints what Congress says, so everyone can read it.', es: 'Nuestro periódico imprime lo que dice el Congreso, para que todos lo lean.', fa: 'روزنامهٔ ما گپ‌های کانگرس را چاپ می‌کند تا همه بخوانند.' }
      ] },
    { at: [21, 7], name: { en: 'Mrs. Byrne', es: 'Señora Byrne', fa: 'خانم بِرن' },
      look: { skin: 0, hair: '#8a3a1a', shirt: '#6a2a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is my coffee house. People come for coffee and news.', es: 'Esta es mi casa de café. La gente viene por café y noticias.', fa: 'این قهوه‌خانهٔ من است. مردم برای قهوه و خبر می‌آیند.' },
        { en: 'Their arguments will start the first [[political party|political parties]].', es: 'Sus discusiones van a crear los primeros [[political party|partidos políticos]].', fa: 'این بحث‌ها اولین [[political party|حزب‌های سیاسی]] را به وجود می‌آورد.' }
      ] },
    { at: [13, 10], name: { en: 'Mr. Wells', es: 'Señor Wells', fa: 'آقای ولز' },
      look: { skin: 3, hair: '#3a2a1a', shirt: '#4a4a6a', pants: '#2a2a2a', hat: '#1a1a1a' },
      lines: [
        { en: 'Welcome to Federal Hall! I keep the doors for Congress.', es: '¡Bienvenido al Federal Hall! Yo cuido las puertas del Congreso.', fa: 'به فدرال هال خوش آمدی! من دروازه‌بان کانگرس هستم.' },
        { en: 'The House and the Senate both meet in this building.', es: 'La Cámara y el Senado se reúnen en este edificio.', fa: 'مجلس نمایندگان و سنا هر دو در این تعمیر جمع می‌شوند.' },
        { en: 'Washington took his oath up on that balcony. The crowd cheered!', es: 'Washington hizo su juramento en ese balcón. ¡La gente aplaudió!', fa: 'واشنگتن روی همان بالکن سوگند خورد. مردم هورا کشیدند!' }
      ] },
    { at: [5, 14], name: { en: 'Patrick', es: 'Patrick', fa: 'پاتریک' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#3a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I came from Ireland last year. I weave cloth to sell.', es: 'Vine de Irlanda el año pasado. Tejo tela para vender.', fa: 'پارسال از آیرلند آمدم. تکه می‌بافم و می‌فروشم.' },
        { en: 'In this new country, I hope I can speak my mind freely.', es: 'En este país nuevo, espero poder decir lo que pienso con libertad.', fa: 'امیدوارم در این کشور نو، آزادانه نظرم را بگویم.' }
      ] },
    { at: [5, 19], name: { en: 'Elizabeth', es: 'Elizabeth', fa: 'الیزابت' },
      look: { skin: 5, hair: '#120c08', shirt: '#c8a040', pants: '#3a2a4a', style: 'bun' },
      lines: [
        { en: 'I sew dresses. My family is free, but many Black New Yorkers are still enslaved.', es: 'Coso vestidos. Mi familia es libre, pero muchos neoyorquinos negros siguen esclavizados.', fa: 'من لباس می‌دوزم. خانوادهٔ من آزاد است، اما بسیاری از سیاه‌پوستان نیویارک هنوز برده‌اند.' },
        { en: 'The new rights did not free them. We keep working for freedom.', es: 'Los nuevos derechos no los liberaron. Seguimos luchando por la libertad.', fa: 'حقوق نو آن‌ها را آزاد نکرد. ما برای آزادی کار را ادامه می‌دهیم.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     x 2: Broadway (north-south). Row 4: a cross street to the north dock. Row 11: Wall Street to the middle dock.
     Row 17: a street along the south to the south dock. x 13 (rows 12-20): Broad Street.
     NW: St. Paul's Chapel (Q over D, door 7,2) and its churchyard trees, the print shop (R over h, door 9,7).
     NE: homes (door 19,2), the coffee house (Q over h, door 21,7), harbor trees.
     Middle: Federal Hall (Q over D, door 13,10) on the north side of Wall Street.
     SW: homes (doors 5,14 and 5,19). SE: the open square (x 15-25, rows 12-16) and the market (m, row 18).
     x 28: the shore, x 29: the East River, x 30-31: deep water. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT====',
    'T.l..QQQQQ..T..,..RRR...RRR.s~==',
    'T.l..DDdDD.TTT....hdh...hhh.s~==',
    'T.l.....,..T.T.......:.....,s~==',
    'T.llllllllllllllllllllllllllkk==',
    'T.l......,......l.....T.....s~==',
    'T.l.x...RRR.....l..QQQQ.....s~==',
    'T.l.....hdh.....l..hhdh.....s~==',
    'T.l........QQQQQl.....,.....s~==',
    'T.l..,.....DDDDDl..T.....T..s~==',
    'T.l........DDdDDl...........s~==',
    'T.llllllllllllllllllllllllllkk==',
    'T.l.........xl..............s~==',
    'T.l.RRR......l..............s~==',
    'T.l.hdh......l..............s~==',
    'T.l..........l..............s~==',
    'T.l...TT.....l..............s~==',
    'T.llllllllllllllllllllllllllkk==',
    'T.l.QQQ......l.....mmmmmm...s~==',
    'T.l.hdh......l..,..........,s~==',
    'T.l..,.......l..............s~==',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT===='
  ],
  start: [6, 12],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [4, 9], at: [8, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east. You will be near the print shop.', es: 'Desde esta nota, camina 4 pasos al este. Llegarás cerca de la imprenta.', fa: 'از این یادداشت، ۴ قدم به شرق برو. نزدیک مطبعه می‌رسی.' },
      text: { en: 'The Constitution gives the words of the President\'s oath. Washington said them first, in 1789.', es: 'La Constitución da las palabras del juramento del presidente. Washington las dijo primero, en 1789.', fa: 'قانون اساسی کلمات سوگند رئیس جمهور را دارد. واشنگتن اولین بار آن‌ها را در ۱۷۸۹ گفت.' } },
    { clueAt: [16, 20], at: [24, 20], decor: 'shell',
      clue: { en: 'From this note, walk 8 steps east, toward the river.', es: 'Desde esta nota, camina 8 pasos al este, hacia el río.', fa: 'از این یادداشت، ۸ قدم به شرق، به طرف دریا برو.' },
      text: { en: 'In 1789, Congress passed a tax on goods from other countries. Ships paid it here.', es: 'En 1789, el Congreso aprobó un impuesto a productos de otros países. Los barcos lo pagaban aquí.', fa: 'در ۱۷۸۹، کانگرس بر جنس‌های کشورهای دیگر مالیات گذاشت. کشتی‌ها آن را اینجا می‌پرداختند.' } }
  ],

  words: {
    'bill of rights': { en: 'a list of rights the government may not take away', es: 'una lista de derechos que el gobierno no puede quitar', fa: 'فهرستی از حقوق که حکومت نمی‌تواند آن‌ها را بگیرد' },
    amendment: { en: 'a change or addition to the Constitution', es: 'un cambio o una adición a la Constitución', fa: 'یک تغییر یا افزودن به قانون اساسی' },
    'anti-federalist': { en: 'a person who feared a strong national government', es: 'una persona que temía un gobierno nacional fuerte', fa: 'کسی که از یک حکومت ملی قوی می‌ترسید' },
    federalism: { en: 'sharing power between the national government and the states', es: 'repartir el poder entre el gobierno nacional y los estados', fa: 'تقسیم قدرت میان حکومت ملی و ایالت‌ها' },
    delegated: { en: 'a power given only to the national government', es: 'un poder dado solo al gobierno nacional', fa: 'قدرتی که فقط به حکومت ملی داده شده' },
    reserved: { en: 'a power kept by the states or the people', es: 'un poder que guardan los estados o el pueblo', fa: 'قدرتی که برای ایالت‌ها یا مردم مانده' },
    concurrent: { en: 'a power both the nation and the states have', es: 'un poder que tienen la nación y los estados', fa: 'قدرتی که هم کشور و هم ایالت‌ها دارند' },
    ratify: { en: 'to approve officially', es: 'aprobar de forma oficial', fa: 'به طور رسمی تصویب کردن' },
    warrant: { en: 'a paper from a judge that allows a search', es: 'un papel de un juez que permite un registro', fa: 'کاغذی از قاضی که اجازهٔ تلاشی می‌دهد' },
    'due process': { en: 'fair steps the law must follow before punishing someone', es: 'pasos justos que la ley debe seguir antes de castigar', fa: 'قدم‌های عادلانه‌ای که قانون پیش از جزا دادن باید طی کند' },
    'national bank': { en: 'one bank for the whole country, to hold and lend its money', es: 'un banco para todo el país, que guarda y presta su dinero', fa: 'یک بانک برای تمام کشور که پولش را نگه می‌دارد و قرض می‌دهد' },
    'elastic clause': { en: 'words that let Congress make laws "necessary and proper" for its powers', es: 'palabras que dejan al Congreso hacer leyes "necesarias y apropiadas" para sus poderes', fa: 'کلماتی که به کانگرس اجازه می‌دهد قانون‌های «لازم و مناسب» برای قدرت‌هایش بسازد' },
    'political party': { en: 'a group of people who share ideas about government', es: 'un grupo de personas con ideas parecidas sobre el gobierno', fa: 'گروهی از مردم که دربارهٔ حکومت فکرهای مشترک دارند' }
  },

  npcs: [
    {
      x: 6, y: 7,
      name: { en: 'Hannah', es: 'Hannah', fa: 'هانا' },
      role: { en: 'Printer', es: 'Impresora', fa: 'چاپگر' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#8a5a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I print pamphlets. Everyone is arguing about the new Constitution!', es: 'Imprimo folletos. ¡Todos discuten sobre la nueva Constitución!', fa: 'من رساله چاپ می‌کنم. همه دربارهٔ قانون اساسی نو بحث می‌کنند!' },
        { en: '[[anti-federalist|Anti-Federalists]] feared a strong national government. They demanded a [[bill of rights|bill of rights]].', es: 'Los [[anti-federalist|antifederalistas]] temían un gobierno nacional fuerte. Exigieron una [[bill of rights|carta de derechos]].', fa: '[[anti-federalist|ضد فدرالیست‌ها]] از حکومت ملی قوی می‌ترسیدند. آن‌ها [[bill of rights|منشور حقوق]] خواستند.' },
        { en: 'Now James Madison is writing [[amendment|amendments]] in Congress, right here.', es: 'Ahora James Madison escribe [[amendment|enmiendas]] en el Congreso, aquí mismo.', fa: 'حالا جیمز مدیسن در کانگرس، همین‌جا، [[amendment|تعدیل‌ها]] را می‌نویسد.' },
        { en: 'A free press would let me print what I think about the government.', es: 'Una prensa libre me dejaría imprimir lo que pienso del gobierno.', fa: 'مطبوعات آزاد به من اجازه می‌دهد نظرم را دربارهٔ حکومت چاپ کنم.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did the Anti-Federalists want a bill of rights?', es: '¿Por qué los antifederalistas querían una carta de derechos?', fa: 'چرا ضد فدرالیست‌ها منشور حقوق می‌خواستند؟' },
        choices: [
          { ok: true, t: { en: 'To protect people from a too-strong nation', es: 'Para proteger al pueblo de una nación muy fuerte', fa: 'برای حفاظت مردم از کشوری بسیار قوی' },
            why: { en: 'Yes! They feared the national government could take away people\'s rights.', es: '¡Sí! Temían que el gobierno nacional pudiera quitarle derechos al pueblo.', fa: 'بله! می‌ترسیدند حکومت ملی حقوق مردم را بگیرد.' } },
          { t: { en: 'To give the President power over the states', es: 'Para dar al presidente poder sobre los estados', fa: 'برای دادن قدرت به رئیس جمهور بر ایالت‌ها' },
            why: { en: 'No. They wanted less national power, not more.', es: 'No. Querían menos poder nacional, no más.', fa: 'نه. آن‌ها قدرت ملی کمتر می‌خواستند، نه بیشتر.' } },
          { t: { en: 'To stop all trade between the states', es: 'Para detener todo el comercio entre estados', fa: 'برای بند کردن همهٔ تجارت میان ایالت‌ها' },
            why: { en: 'No. A bill of rights is about people\'s freedoms, not trade.', es: 'No. Una carta de derechos trata de las libertades del pueblo, no del comercio.', fa: 'نه. منشور حقوق دربارهٔ آزادی‌های مردم است، نه تجارت.' } }
        ]
      }
    },
    {
      x: 26, y: 13,
      name: { en: 'Samuel', es: 'Samuel', fa: 'ساموئل' },
      role: { en: 'Sailor', es: 'Marinero', fa: 'ملاح' },
      look: { skin: 5, hair: '#1a1008', shirt: '#2f5f9a', pants: '#3a2a1a', hat: '#2a2a2a' },
      lines: [
        { en: 'Here, the nation and the states share power. That is [[federalism|federalism]].', es: 'Aquí, la nación y los estados comparten el poder. Eso es el [[federalism|federalismo]].', fa: 'اینجا کشور و ایالت‌ها قدرت را تقسیم می‌کنند. این [[federalism|فدرالیزم]] است.' },
        { en: 'Trade with other countries is [[delegated|delegated]]. Only the nation does it.', es: 'El comercio con otros países es un poder [[delegated|delegado]]. Solo la nación lo hace.', fa: 'تجارت با کشورهای دیگر [[delegated|سپرده‌شده]] است. فقط کشور آن را انجام می‌دهد.' },
        { en: 'Running schools and towns is [[reserved|reserved]] for the states.', es: 'Dirigir escuelas y pueblos es un poder [[reserved|reservado]] a los estados.', fa: 'اداره کردن مکتب‌ها و شهرک‌ها برای ایالت‌ها [[reserved|محفوظ]] است.' },
        { en: 'Taxes are [[concurrent|concurrent]]. The nation and the states both collect them.', es: 'Los impuestos son [[concurrent|concurrentes]]. La nación y los estados los cobran.', fa: 'مالیات [[concurrent|مشترک]] است. هم کشور و هم ایالت‌ها آن را جمع می‌کنند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'The nation and the states both collect taxes. What kind of power is that?', es: 'La nación y los estados cobran impuestos. ¿Qué tipo de poder es ese?', fa: 'هم کشور و هم ایالت‌ها مالیات جمع می‌کنند. این چه نوع قدرت است؟' },
        choices: [
          { ok: true, t: { en: 'A concurrent power', es: 'Un poder concurrente', fa: 'قدرت مشترک' },
            why: { en: 'Right! Concurrent powers are shared. Both levels can collect taxes.', es: '¡Correcto! Los poderes concurrentes se comparten. Ambos niveles cobran impuestos.', fa: 'درست! قدرت مشترک تقسیم می‌شود. هر دو سطح مالیات جمع می‌کنند.' } },
          { t: { en: 'A delegated power', es: 'Un poder delegado', fa: 'قدرت سپرده‌شده' },
            why: { en: 'Delegated powers belong only to the nation, like trade with other countries.', es: 'Los poderes delegados son solo de la nación, como el comercio con otros países.', fa: 'قدرت سپرده‌شده فقط از کشور است، مثل تجارت با کشورهای دیگر.' } },
          { t: { en: 'A reserved state power', es: 'Un poder reservado estatal', fa: 'قدرت محفوظ ایالتی' },
            why: { en: 'Reserved powers belong to the states, like running schools.', es: 'Los poderes reservados son de los estados, como dirigir escuelas.', fa: 'قدرت محفوظ از ایالت‌هاست، مثل اداره کردن مکتب‌ها.' } }
        ]
      }
    },
    {
      x: 23, y: 8,
      name: { en: 'Martha', es: 'Martha', fa: 'مارتا' },
      role: { en: 'Coffee house cook', es: 'Cocinera del café', fa: 'آشپز قهوه‌خانه' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#f2f2f2', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'People argue here all day. How strong should the new nation be?', es: 'Aquí la gente discute todo el día. ¿Qué tan fuerte debe ser la nación?', fa: 'مردم اینجا تمام روز بحث می‌کنند. کشور نو چقدر قوی باشد؟' },
        { en: 'Alexander Hamilton wants a strong national government and a [[national bank|national bank]].', es: 'Alexander Hamilton quiere un gobierno nacional fuerte y un [[national bank|banco nacional]].', fa: 'الکساندر همیلتن یک حکومت ملی قوی و یک [[national bank|بانک ملی]] می‌خواهد.' },
        { en: 'He reads the Constitution loosely. He points to the [[elastic clause|elastic clause]].', es: 'Él lee la Constitución de forma amplia. Señala la [[elastic clause|cláusula elástica]].', fa: 'او قانون اساسی را آزادانه می‌خواند. به [[elastic clause|بند کش‌دار]] اشاره می‌کند.' },
        { en: 'Thomas Jefferson wants strong states. He reads the Constitution strictly, word by word.', es: 'Thomas Jefferson quiere estados fuertes. Lee la Constitución de forma estricta, palabra por palabra.', fa: 'توماس جفرسن ایالت‌های قوی می‌خواهد. او قانون اساسی را دقیق، کلمه به کلمه می‌خواند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did Thomas Jefferson want?', es: '¿Qué quería Thomas Jefferson?', fa: 'توماس جفرسن چه می‌خواست؟' },
        choices: [
          { ok: true, t: { en: 'Strong states and a strict reading of the Constitution', es: 'Estados fuertes y una lectura estricta de la Constitución', fa: 'ایالت‌های قوی و خواندن دقیق قانون اساسی' },
            why: { en: 'Yes! Jefferson feared a strong national government. He read the Constitution strictly.', es: '¡Sí! Jefferson temía un gobierno nacional fuerte. Leía la Constitución de forma estricta.', fa: 'بله! جفرسن از حکومت ملی قوی می‌ترسید. قانون اساسی را دقیق می‌خواند.' } },
          { t: { en: 'A national bank and a loose reading of the Constitution', es: 'Un banco nacional y una lectura amplia de la Constitución', fa: 'بانک ملی و خواندن آزادانهٔ قانون اساسی' },
            why: { en: 'That was Hamilton\'s view. Both men loved their country but disagreed.', es: 'Esa era la idea de Hamilton. Los dos amaban su país, pero no estaban de acuerdo.', fa: 'این نظر همیلتن بود. هر دو کشورشان را دوست داشتند، اما هم‌نظر نبودند.' } },
          { t: { en: 'A king to rule over all the states', es: 'Un rey que gobernara todos los estados', fa: 'یک پادشاه که بر همهٔ ایالت‌ها حکومت کند' },
            why: { en: 'No. Neither Jefferson nor Hamilton wanted a king.', es: 'No. Ni Jefferson ni Hamilton querían un rey.', fa: 'نه. نه جفرسن و نه همیلتن پادشاه می‌خواستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 6, text: { en: 'BROADWAY · NEW YORK CITY · 1789 · The first capital under the Constitution.', es: 'BROADWAY · CIUDAD DE NUEVA YORK · 1789 · La primera capital bajo la Constitución.', fa: 'برادوی · شهر نیویارک · ۱۷۸۹ · اولین پایتخت زیر قانون اساسی.' } },
    { x: 12, y: 12, text: { en: 'WALL STREET · FEDERAL HALL · The first Congress meets here in 1789.', es: 'CALLE WALL · FEDERAL HALL · El primer Congreso se reúne aquí en 1789.', fa: 'سرک وال · فدرال هال · اولین کانگرس در ۱۷۸۹ اینجا جمع می‌شود.' } }
  ],

  /* the quest: Grace the teacher (gold !) in the southwest -> Jacob the bookseller at the market (southeast)
     -> the lost paper by the harbor tree, north of Wall Street (northeast) -> back to Grace */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Declaration', es: 'La declaración perdida', fa: 'اعلامیهٔ گم‌شده' },
    giver: {
      x: 9, y: 15,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a6a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I teach children to read. Today\'s lesson is about our rights.', es: 'Enseño a leer a los niños. La lección de hoy es sobre nuestros derechos.', fa: 'من به اطفال خواندن یاد می‌دهم. درس امروز دربارهٔ حقوق ماست.' },
        { en: 'But I lost my copy of the Virginia Declaration of Rights. Please help!', es: 'Pero perdí mi copia de la Declaración de Derechos de Virginia. ¡Ayúdame, por favor!', fa: 'اما نسخهٔ اعلامیهٔ حقوق ویرجینیا را گم کردم. لطفاً کمک کن!' }
      ],
      wait: { en: 'Jacob the bookseller saw it. He is at the market by the river.', es: 'Jacob, el librero, la vio. Está en el mercado junto al río.', fa: 'یعقوب کتاب‌فروش آن را دید. او در بازار کنار دریا است.' },
      thanks: { en: 'Thank you! Madison used ideas like these in the Bill of Rights.', es: '¡Gracias! Madison usó ideas como estas en la Carta de Derechos.', fa: 'تشکر! مدیسن فکرهایی مثل این‌ها را در منشور حقوق به کار برد.' }
    },
    contact: {
      x: 22, y: 19,
      name: { en: 'Jacob', es: 'Jacob', fa: 'یعقوب' },
      role: { en: 'Bookseller', es: 'Librero', fa: 'کتاب‌فروش' },
      look: { skin: 3, hair: '#1a1208', shirt: '#7a3a2a', pants: '#3a3a3a', hat: '#2a2a1a' },
      lines: [
        { en: 'George Mason wrote that paper in Virginia in 1776. It lists rights.', es: 'George Mason escribió ese papel en Virginia en 1776. Tiene una lista de derechos.', fa: 'جورج میسن آن کاغذ را در ۱۷۷۶ در ویرجینیا نوشت. حقوق را فهرست می‌کند.' },
        { en: 'The wind blew it north. Look just east of the tree by the harbor.', es: 'El viento lo llevó al norte. Busca justo al este del árbol junto al puerto.', fa: 'باد آن را به شمال برد. درست شرق درخت کنار بندر را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [26, 9],
      hint: { en: 'North of Wall Street, just east of the tree by the harbor.', es: 'Al norte de la calle Wall, justo al este del árbol del puerto.', fa: 'شمال سرک وال، درست شرق درخت کنار بندر.' },
      found: { en: 'Found it! George Mason\'s Virginia Declaration of Rights, 1776: free press, fair trials, and more.', es: '¡Aquí está! La Declaración de Derechos de Virginia de George Mason, 1776: prensa libre, juicios justos y más.', fa: 'پیدا شد! اعلامیهٔ حقوق ویرجینیا از جورج میسن، ۱۷۷۶: مطبوعات آزاد، محاکمهٔ عادلانه و بیشتر.' },
      item: { icon: '📜', name: { en: 'The Virginia Declaration of Rights', es: 'La Declaración de Derechos de Virginia', fa: 'اعلامیهٔ حقوق ویرجینیا' } }
    }
  },

  scraps: [[1, 1], [27, 1], [1, 20]],
  smudges: [[6, 17], [22, 3]],

  challenge: {
    at: [24, 15],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // five areas in the open square south of Wall Street, one for each amendment (5th, 6th and 8th share one)
    zones: [
      { bin: 'first', x: 15, y: 12, w: 3, h: 2 },
      { bin: 'second', x: 19, y: 12, w: 3, h: 2 },
      { bin: 'fourth', x: 23, y: 12, w: 3, h: 2 },
      { bin: 'trial', x: 15, y: 15, w: 3, h: 2 },
      { bin: 'tenth', x: 19, y: 15, w: 3, h: 2 }
    ],
    stat: 'hei',
    title: { en: 'Which amendment protects it?', es: '¿Qué enmienda lo protege?', fa: 'کدام تعدیل از آن حمایت می‌کند؟' },
    intro: { en: 'The Grump scattered everyday problems. Carry each card to the [[amendment|amendment]] that protects it.',
      es: 'El Gruñón regó problemas de cada día. Lleva cada tarjeta a la [[amendment|enmienda]] que la protege.',
      fa: 'غرغرو مشکلات روزمره را پراکنده کرد. هر کارت را به [[amendment|تعدیلی]] ببر که از آن حمایت می‌کند.' },
    bins: [
      { id: 'first', icon: '🗣️', label: { en: '1st Amendment', es: '1.ª Enmienda', fa: 'تعدیل اول' },
        sub: { en: 'religion, speech, press, assembly, petition', es: 'religión, expresión, prensa, reunión, petición', fa: 'دین، بیان، مطبوعات، اجتماع، عریضه' } },
      { id: 'second', icon: '🛡️', label: { en: '2nd Amendment', es: '2.ª Enmienda', fa: 'تعدیل دوم' },
        sub: { en: 'the right to keep and bear arms', es: 'el derecho a tener y portar armas', fa: 'حق داشتن و حمل سلاح' } },
      { id: 'fourth', icon: '🏠', label: { en: '4th Amendment', es: '4.ª Enmienda', fa: 'تعدیل چهارم' },
        sub: { en: 'no unreasonable searches', es: 'nada de registros sin razón', fa: 'تلاشی بی‌دلیل ممنوع' } },
      { id: 'trial', icon: '⚖️', label: { en: '5th, 6th and 8th Amendments', es: 'Enmiendas 5.ª, 6.ª y 8.ª', fa: 'تعدیل‌های پنجم، ششم و هشتم' },
        sub: { en: 'rights of a person accused of a crime', es: 'derechos de una persona acusada de un delito', fa: 'حقوق کسی که به جرم متهم است' } },
      { id: 'tenth', icon: '🏛️', label: { en: '10th Amendment', es: '10.ª Enmienda', fa: 'تعدیل دهم' },
        sub: { en: 'other powers stay with the states or the people', es: 'los demás poderes quedan a los estados o al pueblo', fa: 'باقی قدرت‌ها از ایالت‌ها یا مردم است' } }
    ],
    items: [
      { bin: 'first', t: { en: 'A family wants to worship in its own way', es: 'Una familia quiere practicar su religión a su manera', fa: 'یک خانواده می‌خواهد به روش خود عبادت کند' },
        why: { en: 'The 1st Amendment protects freedom of religion.', es: 'La 1.ª Enmienda protege la libertad de religión.', fa: 'تعدیل اول از آزادی دین حمایت می‌کند.' } },
      { bin: 'first', t: { en: 'A printer wants to criticize Congress in her newspaper', es: 'Una impresora quiere criticar al Congreso en su periódico', fa: 'یک چاپگر می‌خواهد در روزنامه‌اش از کانگرس انتقاد کند' },
        why: { en: 'The 1st Amendment protects freedom of the press and of speech.', es: 'La 1.ª Enmienda protege la libertad de prensa y de expresión.', fa: 'تعدیل اول از آزادی مطبوعات و بیان حمایت می‌کند.' } },
      { bin: 'second', t: { en: 'A farmer wants to keep a musket at home', es: 'Un granjero quiere tener un mosquete en casa', fa: 'یک دهقان می‌خواهد یک تفنگ قدیمی در خانه داشته باشد' },
        why: { en: 'The 2nd Amendment is about the right to keep and bear arms.', es: 'La 2.ª Enmienda trata del derecho a tener y portar armas.', fa: 'تعدیل دوم دربارهٔ حق داشتن و حمل سلاح است.' } },
      { bin: 'fourth', t: { en: 'Officers want to search a home with no reason and no warrant', es: 'Unos oficiales quieren registrar una casa sin razón y sin orden', fa: 'مأموران می‌خواهند بی‌دلیل و بی‌حکم یک خانه را تلاشی کنند' },
        why: { en: 'The 4th Amendment stops unreasonable searches. Officers usually need a [[warrant|warrant]] from a judge.', es: 'La 4.ª Enmienda prohíbe registros sin razón. Los oficiales suelen necesitar una [[warrant|orden]] de un juez.', fa: 'تعدیل چهارم جلوی تلاشی بی‌دلیل را می‌گیرد. مأموران معمولاً [[warrant|حکم]] قاضی لازم دارند.' } },
      { bin: 'trial', t: { en: 'A man on trial does not want to speak against himself', es: 'Un hombre en juicio no quiere hablar en su propia contra', fa: 'مردی در محاکمه نمی‌خواهد علیه خودش گپ بزند' },
        why: { en: 'The 5th Amendment: no one must be a witness against himself. It also promises [[due process|due process]].', es: 'La 5.ª Enmienda: nadie debe ser testigo contra sí mismo. También promete el [[due process|debido proceso]].', fa: 'تعدیل پنجم: هیچ کس مجبور نیست علیه خود شهادت دهد. [[due process|روند عادلانهٔ قانونی]] را هم وعده می‌دهد.' } },
      { bin: 'trial', t: { en: 'A woman waits in jail for years, with no trial and no lawyer', es: 'Una mujer espera en la cárcel por años, sin juicio y sin abogado', fa: 'زنی سال‌ها در زندان منتظر است، بی‌محاکمه و بی‌وکیل' },
        why: { en: 'The 6th Amendment promises a speedy public trial, a lawyer and a jury.', es: 'La 6.ª Enmienda promete un juicio público y rápido, un abogado y un jurado.', fa: 'تعدیل ششم محاکمهٔ سریع و علنی، وکیل و هیئت منصفه را وعده می‌دهد.' } },
      { bin: 'trial', t: { en: 'A judge wants to give a thief a cruel, painful punishment', es: 'Un juez quiere darle a un ladrón un castigo cruel y doloroso', fa: 'یک قاضی می‌خواهد به یک دزد جزای ظالمانه و دردناک بدهد' },
        why: { en: 'The 8th Amendment bans cruel and unusual punishment.', es: 'La 8.ª Enmienda prohíbe los castigos crueles e inusuales.', fa: 'تعدیل هشتم جزای ظالمانه و غیرعادی را منع می‌کند.' } },
      { bin: 'tenth', t: { en: 'A state wants to set up its own schools', es: 'Un estado quiere crear sus propias escuelas', fa: 'یک ایالت می‌خواهد مکتب‌های خود را بسازد' },
        why: { en: 'The Constitution does not give schools to the nation. The 10th Amendment leaves that power to the states.', es: 'La Constitución no le da las escuelas a la nación. La 10.ª Enmienda deja ese poder a los estados.', fa: 'قانون اساسی مکتب‌ها را به کشور نداده. تعدیل دهم این قدرت را به ایالت‌ها می‌گذارد.' } }
    ],
    success: { en: 'Every problem found its amendment! The Bill of Rights protects them all.', es: '¡Cada problema encontró su enmienda! La Carta de Derechos los protege a todos.', fa: 'هر مشکل تعدیل خود را پیدا کرد! منشور حقوق از همه حمایت می‌کند.' }
  },

  boss: {
    at: [10, 4],
    stat: 'mov',
    need: 3,
    name: { en: 'The Rights-Eater Grump', es: 'El Gruñón Come-Derechos', fa: 'غرغروی حقوق‌خور' },
    appear: { en: 'The Rights-Eater Grump is hiding in the fog over Broadway!', es: '¡El Gruñón Come-Derechos se esconde en la niebla sobre Broadway!', fa: 'غرغروی حقوق‌خور در مه بالای برادوی پنهان است!' },
    taunt: { en: 'Rights? Who needs them written down? I tore them all up!', es: '¿Derechos? ¿Quién los necesita por escrito? ¡Los rompí todos!', fa: 'حقوق؟ کی لازم دارد نوشته شود؟ من همه را پاره کردم!' },
    win: { en: 'The fog clears over Wall Street. Journal page 3.2 floats down into your hands!', es: 'La niebla se va de la calle Wall. ¡La página 3.2 del diario cae en tus manos!', fa: 'مه از سرک وال کنار می‌رود. صفحهٔ ۳.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is federalism?', es: '¿Qué es el federalismo?', fa: 'فدرالیزم چیست؟' },
        choices: [
          { en: 'Power shared by the nation and the states', es: 'Poder compartido por la nación y los estados', fa: 'قدرت تقسیم‌شده میان کشور و ایالت‌ها' },
          { en: 'Power held only by one king or queen', es: 'Poder que tiene solo un rey o una reina', fa: 'قدرتی که فقط از یک پادشاه یا ملکه است' },
          { en: 'Power held only by the thirteen states', es: 'Poder que tienen solo los trece estados', fa: 'قدرتی که فقط از سیزده ایالت است' },
          { en: 'Power held only by the judges in the courts', es: 'Poder que tienen solo los jueces de las cortes', fa: 'قدرتی که فقط از قاضیان محکمه‌ها است' }],
        answer: 0,
        why: { en: 'Under federalism, some powers belong to the nation, some to the states, and some to both.', es: 'Con el federalismo, unos poderes son de la nación, otros de los estados y otros de ambos.', fa: 'در فدرالیزم، بعضی قدرت‌ها از کشور، بعضی از ایالت‌ها و بعضی از هر دو است.' } },
      { q: { en: 'Why did Anti-Federalists demand a bill of rights?', es: '¿Por qué los antifederalistas exigieron una carta de derechos?', fa: 'چرا ضد فدرالیست‌ها منشور حقوق خواستند؟' },
        choices: [
          { en: 'They feared a too-strong national government', es: 'Temían un gobierno nacional demasiado fuerte', fa: 'از یک حکومت ملی بسیار قوی می‌ترسیدند' },
          { en: 'They wanted Congress to rule over all the states', es: 'Querían que el Congreso mandara sobre todos los estados', fa: 'می‌خواستند کانگرس بر همهٔ ایالت‌ها حکومت کند' },
          { en: 'They wanted George Washington to become a king', es: 'Querían que George Washington fuera rey', fa: 'می‌خواستند جورج واشنگتن پادشاه شود' },
          { en: 'They wanted to end every state government', es: 'Querían acabar con todos los gobiernos estatales', fa: 'می‌خواستند همهٔ حکومت‌های ایالتی را ختم کنند' }],
        answer: 0,
        why: { en: 'Anti-Federalists worried a strong nation could take away rights. They wanted rights written down.', es: 'A los antifederalistas les preocupaba que una nación fuerte quitara derechos. Los querían por escrito.', fa: 'ضد فدرالیست‌ها نگران بودند کشور قوی حقوق را بگیرد. می‌خواستند حقوق نوشته شود.' } },
      { q: { en: 'Who wrote the amendments in the first Congress in 1789?', es: '¿Quién escribió las enmiendas en el primer Congreso en 1789?', fa: 'چه کسی در اولین کانگرس در ۱۷۸۹ تعدیل‌ها را نوشت؟' },
        choices: [
          { en: 'James Madison', es: 'James Madison', fa: 'جیمز مدیسن' },
          { en: 'Alexander Hamilton', es: 'Alexander Hamilton', fa: 'الکساندر همیلتن' },
          { en: 'Thomas Jefferson', es: 'Thomas Jefferson', fa: 'توماس جفرسن' },
          { en: 'Benjamin Franklin', es: 'Benjamin Franklin', fa: 'بنجامین فرانکلین' }],
        answer: 0,
        why: { en: 'James Madison of Virginia wrote the amendments and brought them to Congress in 1789.', es: 'James Madison, de Virginia, escribió las enmiendas y las llevó al Congreso en 1789.', fa: 'جیمز مدیسن از ویرجینیا تعدیل‌ها را نوشت و در ۱۷۸۹ به کانگرس برد.' } },
      { q: { en: 'Madison used ideas from which older paper?', es: '¿De qué documento más antiguo tomó ideas Madison?', fa: 'مدیسن از کدام سند قدیمی‌تر فکر گرفت؟' },
        choices: [
          { en: 'The Virginia Declaration of Rights (1776)', es: 'La Declaración de Derechos de Virginia (1776)', fa: 'اعلامیهٔ حقوق ویرجینیا (۱۷۷۶)' },
          { en: 'The Mayflower Compact (1620)', es: 'El Pacto del Mayflower (1620)', fa: 'پیمان می‌فلاور (۱۶۲۰)' },
          { en: 'The Articles of Confederation (1781)', es: 'Los Artículos de la Confederación (1781)', fa: 'مواد کنفدراسیون (۱۷۸۱)' },
          { en: 'The Treaty of Paris (1783)', es: 'El Tratado de París (1783)', fa: 'معاهدهٔ پاریس (۱۷۸۳)' }],
        answer: 0,
        why: { en: 'George Mason wrote the Virginia Declaration of Rights in 1776. It listed rights like a free press.', es: 'George Mason escribió la Declaración de Derechos de Virginia en 1776. Incluía derechos como la prensa libre.', fa: 'جورج میسن اعلامیهٔ حقوق ویرجینیا را در ۱۷۷۶ نوشت. حقوقی مثل مطبوعات آزاد را داشت.' } },
      { q: { en: 'What is the Bill of Rights?', es: '¿Qué es la Carta de Derechos?', fa: 'منشور حقوق چیست؟' },
        choices: [
          { en: 'The first 10 amendments, ratified in 1791', es: 'Las primeras 10 enmiendas, ratificadas en 1791', fa: '۱۰ تعدیل اول، تصویب‌شده در ۱۷۹۱' },
          { en: 'The first 10 laws that Congress passed in 1789', es: 'Las primeras 10 leyes que el Congreso aprobó en 1789', fa: '۱۰ قانون اولی که کانگرس در ۱۷۸۹ تصویب کرد' },
          { en: 'The list of the first 10 Presidents', es: 'La lista de los primeros 10 presidentes', fa: 'فهرست ۱۰ رئیس جمهور اول' },
          { en: 'The 10 rules of the first national bank', es: 'Las 10 reglas del primer banco nacional', fa: '۱۰ قاعدهٔ اولین بانک ملی' }],
        answer: 0,
        why: { en: 'The states ratified the first 10 amendments in 1791. Together they are the Bill of Rights.', es: 'Los estados ratificaron las primeras 10 enmiendas en 1791. Juntas son la Carta de Derechos.', fa: 'ایالت‌ها ۱۰ تعدیل اول را در ۱۷۹۱ تصویب کردند. همه با هم منشور حقوق هستند.' } },
      { q: { en: 'Which rights does the 1st Amendment protect?', es: '¿Qué derechos protege la 1.ª Enmienda?', fa: 'تعدیل اول از کدام حقوق حمایت می‌کند؟' },
        choices: [
          { en: 'Religion, speech, press, assembly and petition', es: 'Religión, expresión, prensa, reunión y petición', fa: 'دین، بیان، مطبوعات، اجتماع و عریضه' },
          { en: 'A jury, a lawyer and a fast public trial', es: 'Un jurado, un abogado y un juicio público rápido', fa: 'هیئت منصفه، وکیل و محاکمهٔ سریع و علنی' },
          { en: 'Keeping and bearing arms at home', es: 'Tener y portar armas en casa', fa: 'داشتن و حمل سلاح در خانه' },
          { en: 'Safety from cruel and unusual punishments in jail', es: 'Protección contra castigos crueles e inusuales en la cárcel', fa: 'امنیت از جزای ظالمانه و غیرعادی در زندان' }],
        answer: 0,
        why: { en: 'The 1st Amendment protects religion, speech, press, assembly and petition. The others are the 6th, 2nd and 8th.', es: 'La 1.ª protege religión, expresión, prensa, reunión y petición. Las otras son la 6.ª, 2.ª y 8.ª.', fa: 'تعدیل اول از دین، بیان، مطبوعات، اجتماع و عریضه حمایت می‌کند. باقی تعدیل ششم، دوم و هشتم است.' } },
      { q: { en: 'What does the 10th Amendment say?', es: '¿Qué dice la 10.ª Enmienda?', fa: 'تعدیل دهم چه می‌گوید؟' },
        choices: [
          { en: 'Powers not given to the nation stay with states or people', es: 'Los poderes no dados a la nación quedan a los estados o al pueblo', fa: 'قدرت‌هایی که به کشور داده نشده، از ایالت‌ها یا مردم است' },
          { en: 'Congress may take any power it wants away from the states', es: 'El Congreso puede quitarles cualquier poder a los estados', fa: 'کانگرس می‌تواند هر قدرتی را از ایالت‌ها بگیرد' },
          { en: 'Every state must obey each order of the President', es: 'Cada estado debe obedecer toda orden del presidente', fa: 'هر ایالت باید از هر امر رئیس جمهور اطاعت کند' },
          { en: 'Only the judges of the courts may make new laws', es: 'Solo los jueces de las cortes pueden hacer leyes nuevas', fa: 'فقط قاضیان محکمه می‌توانند قانون نو بسازند' }],
        answer: 0,
        why: { en: 'The 10th Amendment says powers not given to the nation belong to the states or the people.', es: 'La 10.ª Enmienda dice que los poderes no dados a la nación son de los estados o del pueblo.', fa: 'تعدیل دهم می‌گوید قدرت‌هایی که به کشور داده نشده، از ایالت‌ها یا مردم است.' } },
      { q: { en: 'Hamilton and Jefferson disagreed about federal power. What did their fight start?', es: 'Hamilton y Jefferson no estaban de acuerdo sobre el poder federal. ¿Qué empezó su pelea?', fa: 'همیلتن و جفرسن دربارهٔ قدرت ملی هم‌نظر نبودند. بحث آن‌ها چه چیزی را شروع کرد؟' },
        choices: [
          { en: 'The first political parties', es: 'Los primeros partidos políticos', fa: 'اولین حزب‌های سیاسی' },
          { en: 'The first state constitutions', es: 'Las primeras constituciones estatales', fa: 'اولین قانون‌های اساسی ایالتی' },
          { en: 'The first war with Britain', es: 'La primera guerra con Gran Bretaña', fa: 'اولین جنگ با بریتانیا' },
          { en: 'The first national election', es: 'La primera elección nacional', fa: 'اولین انتخابات ملی' }],
        answer: 0,
        why: { en: 'Hamilton\'s side became the Federalists. Jefferson\'s side became the Democratic-Republicans.', es: 'El grupo de Hamilton fueron los federalistas. El de Jefferson, los demócrata-republicanos.', fa: 'طرفداران همیلتن فدرالیست‌ها شدند. طرفداران جفرسن دموکرات-جمهوری‌خواهان شدند.' } }
    ]
  },

  learned: [
    { en: 'Under [[federalism|federalism]], the nation and the states share power: delegated, reserved and concurrent powers.', es: 'Con el [[federalism|federalismo]], la nación y los estados comparten el poder: poderes delegados, reservados y concurrentes.', fa: 'در [[federalism|فدرالیزم]]، کشور و ایالت‌ها قدرت را تقسیم می‌کنند: قدرت سپرده‌شده، محفوظ و مشترک.' },
    { en: 'Anti-Federalists demanded rights. Madison wrote amendments, and the [[bill of rights|Bill of Rights]] was ratified in 1791.', es: 'Los antifederalistas exigieron derechos. Madison escribió enmiendas, y la [[bill of rights|Carta de Derechos]] se ratificó en 1791.', fa: 'ضد فدرالیست‌ها حقوق خواستند. مدیسن تعدیل‌ها را نوشت و [[bill of rights|منشور حقوق]] در ۱۷۹۱ تصویب شد.' },
    { en: 'Hamilton wanted a strong nation; Jefferson wanted strong states. Their sides became the first [[political party|political parties]].', es: 'Hamilton quería una nación fuerte; Jefferson, estados fuertes. Sus grupos fueron los primeros [[political party|partidos políticos]].', fa: 'همیلتن کشور قوی می‌خواست؛ جفرسن ایالت‌های قوی. طرفداران‌شان اولین [[political party|حزب‌های سیاسی]] شدند.' }
  ],
  reflect: {
    q: { en: 'Which right in the Bill of Rights matters most to you? Why?', es: '¿Qué derecho de la Carta de Derechos es el más importante para ti? ¿Por qué?', fa: 'کدام حق در منشور حقوق برای تو از همه مهم‌تر است؟ چرا؟' },
    starter: { en: 'The right that matters most to me is', es: 'El derecho más importante para mí es', fa: 'حقی که برایم از همه مهم‌تر است' }
  }
};
