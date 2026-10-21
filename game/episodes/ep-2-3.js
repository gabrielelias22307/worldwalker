/* WORLDWALKER · Episode 2.3 · Migration in the Americas (WG.13)
   A long road runs from a dry farm town to a busy city. Push factors on one end, pull factors on the other. */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'WG.13',
  title: { en: 'Migration in the Americas', es: 'Migración en las Américas', fa: 'مهاجرت در قارهٔ امریکا' },
  place: { en: 'The Long Road', es: 'El Camino Largo', fa: 'راه دراز' },
  intro: [
    { en: 'The Grump tangled the Long Road! Travelers forgot why people move.', es: '¡El Gruñón enredó el Camino Largo! Los viajeros olvidaron por qué la gente se muda.', fa: 'غرغرو راه دراز را گره زد! مسافران فراموش کردند که چرا مردم جابه‌جا می‌شوند.' },
        { en: 'Talk to the farmer, the bus driver and the cook. Then fix the compass stone.', es: 'Habla con el agricultor, la chofer del bus y la cocinera. Luego arregla la piedra de la brújula.', fa: 'با دهقان، رانندهٔ بس و آشپز گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],

  /* 32 x 22. West: a dry farm town. A long road runs east to the bus stop and a busy city.
     South-east: the city neighborhood and the river dock. */
  map: [
    'TTTTTTTTTTTTTTTTUUJUUJUUJUUJUUJU',
    'T.RRR..QQQ..RRR....UU..JJJ..UUUU',
    'TGhdh..hdh..hdh....UU..JJJ..UUUU',
    'T............,......UU..XX..UU.U',
    'T.mmm.....O......x..UU..XX..UU.U',
    'T::::::::::::::::::::::::::::::U',
    'T.....:..x..........UU..XX..UU.U',
    'T.,...:.............UU..XX..UU.U',
    'Tgggg.:.ggggg.....:.........:..U',
    'Tgggg.:.ggggg.....:..JJJ.mm.:..U',
    'Tgggg.:.ggggg.....:..JJJ....:..U',
    'Tggggg:ggggggg....:.........:..U',
    'Tgoooo:oooooggc..RRR..QQQQ..:..U',
    'Tgo1oo:oo1oogg...hdh..hhdh..:..U',
    'Tgoooo:oooooggr...:.........:..U',
    'Tggggg:::::::::::::::::::::::::U',
    'Tggcgg:gggggggg...T..,....T....U',
    'Tgooog:goo1ogg......mm......T..U',
    'Tgo1og:goooogg...........kk....U',
    'Tgooog:gggggggr.~~~~~~~~~kk~~~~U',
    'Tgggcg:ggggggg..================',
    'TTTTTTTTTTTTTTTT================'
  ],
  start: [3, 6],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): a canoe dock where the road comes down to the river, so families on the move can cross */
  build: [
    { id: 'dock', kind: 'place', board: [19, 17], tile: 'k', ok: [[18, 19], [19, 19], [20, 19], [21, 19]], cost: { wood: 1 }, over: '~',
      name: { en: 'Canoe dock at the crossing', es: 'Muelle de canoas en el cruce', fa: 'اسکلهٔ قایق در گذرگاه' },
      ask: { en: 'People on the move follow roads and rivers. A river can stop them, unless there is a way across. Build a dock to launch the canoe where the road comes down to the river: go south from the crossroads where the city road meets the Long Road.',
        es: 'La gente que se muda sigue caminos y ríos. Un río la puede detener, si no hay forma de cruzar. Construye un muelle para lanzar la canoa donde el camino baja al río: ve al sur desde el cruce donde el camino de la ciudad se une al Camino Largo.',
        fa: 'مردمی که جابه‌جا می‌شوند سرک‌ها و دریاها را دنبال می‌کنند. دریا می‌تواند راه‌شان را ببندد، مگر راهی برای گذشتن باشد. یک اسکله برای به آب انداختن قایق بساز، جایی که سرک به دریا می‌رسد: از چهارراهی که سرک شهر به راه دراز می‌رسد به طرف جنوب برو.' },
      why: { en: 'Right below the crossroads! Travelers on the road can reach the canoe here.', es: '¡Justo debajo del cruce! Los viajeros del camino pueden llegar a la canoa aquí.', fa: 'درست پایین چهارراه! مسافران سرک این جا به قایق می‌رسند.' },
      wrong: { en: 'Not here. The dock goes on the river, straight south of the crossroads, where the road comes down to the water.',
        es: 'Aquí no. El muelle va en el río, justo al sur del cruce, donde el camino baja al agua.',
        fa: 'این جا نه. اسکله روی دریا ساخته می‌شود، درست جنوب چهارراه، جایی که سرک به آب می‌رسد.' },
      wrongBy: [
        { x: 1, y: 16, w: 14, h: 5, t: { en: 'These are dry farm fields, far from the river. A canoe needs water.', es: 'Estos son campos secos, lejos del río. Una canoa necesita agua.', fa: 'این‌ها کشتزارهای خشک هستند و از دریا دورند. قایق آب لازم دارد.' } },
        { x: 23, y: 16, w: 8, h: 4, t: { en: 'This bank is far from the road. Travelers would have to walk a long way to find the canoe.', es: 'Esta orilla está lejos del camino. Los viajeros tendrían que caminar mucho para encontrar la canoa.', fa: 'این ساحل از سرک دور است. مسافران باید راه درازی می‌رفتند تا قایق را پیدا کنند.' } }
      ],
      done: { en: 'The dock is built! Now families on the Long Road can cross the river. People move along routes like roads and rivers, and a river is a barrier until there is a way across.',
        es: '¡El muelle está listo! Ahora las familias del Camino Largo pueden cruzar el río. La gente se mueve por rutas como caminos y ríos, y un río es una barrera hasta que hay forma de cruzarlo.',
        fa: 'اسکله ساخته شد! حالا خانواده‌ها در راه دراز می‌توانند از دریا بگذرند. مردم در راه‌هایی مثل سرک و دریا حرکت می‌کنند، و دریا تا وقتی راهی برای گذشتن نباشد مانع است.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [4, 7], at: [11, 4], decor: 'vase',
      clue: { en: 'Map key: the well is a stone box with a little roof. Stand one step east of the well.', es: 'Leyenda: el pozo es una caja de piedra con un techito. Párate un paso al este del pozo.', fa: 'راهنمای نقشه: چاه یک قطی سنگی با یک سقف کوچک است. یک قدم شرقِ چاه بایست.' },
      text: { en: 'You read the map key! In a long drought, wells dry up and push families away. Here: a clay jar.', es: '¡Leíste la leyenda! En una sequía larga, los pozos se secan y empujan a las familias a irse. Aquí: una jarra de barro.', fa: 'تو راهنمای نقشه را خواندی! در خشک‌سالی طولانی چاه‌ها خشک می‌شوند و خانواده‌ها را به رفتن وادار می‌کنند. اینجا: یک کوزهٔ گلی.' } },
    { clueAt: [16, 7], at: [20, 10], decor: 'drum',
      clue: { en: 'From this note, walk 3 steps south, then 4 steps east, toward the city. Something is hidden there.', es: 'Desde esta nota, camina 3 pasos al sur y luego 4 pasos al este, hacia la ciudad. Algo está escondido allí.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۴ قدم به شرق، به طرف شهر. چیزی آن جا پنهان است.' },
      text: { en: 'You followed the compass! Movers bring their music. Cumbia began in Colombia; now all Latin America dances it. A drum!', es: '¡Seguiste la brújula! Quien se muda lleva su música. La cumbia nació en Colombia; hoy se baila en toda América Latina. ¡Un tambor!', fa: 'قطب‌نما را دنبال کردی! مهاجران موسیقی خود را می‌برند. کومبیا در کلمبیا شروع شد؛ حالا در تمام امریکای لاتین می‌رقصند. یک دهل!' } }
  ],
  // only the Compass Rose (Episode 1.3) opens the little gate behind the village houses
  secret: { tool: 'compass', at: [1, 1],
    text: { en: 'The Compass Rose opened the gate behind the houses! In the chest is a picture of orange butterflies. Every fall, millions of monarch butterflies fly up to 4,800 kilometers from Canada and the United States to the mountains of Mexico.',
      es: '¡La rosa de los vientos abrió la puerta detrás de las casas! En el cofre hay un dibujo de mariposas anaranjadas. Cada otoño, millones de mariposas monarca vuelan hasta 4.800 kilómetros desde Canadá y Estados Unidos hasta las montañas de México.',
      fa: 'قطب‌نما دروازهٔ پشت خانه‌ها را باز کرد! در صندوق عکس شاپرک‌های نارنجی است. هر خزان، میلیون‌ها شاپرک مونارک تا ۴۸۰۰ کیلومتر از کانادا و ایالات متحدهٔ امریکا تا کوه‌های مکسیکو پرواز می‌کنند.' } },

  words: {
    migration: { en: 'moving from one place to another to live', es: 'mudarse de un lugar a otro para vivir', fa: 'رفتن از یک جا به جای دیگر برای زندگی' },
    'push factor': { en: 'a reason that makes a place hard to stay in', es: 'una razón que hace difícil quedarse en un lugar', fa: 'دلیلی که ماندن در یک جا را سخت می‌کند' },
    'pull factor': { en: 'a reason that makes a new place look better', es: 'una razón que hace que un lugar nuevo se vea mejor', fa: 'دلیلی که یک جای نو را بهتر نشان می‌دهد' },
    remittance: { en: 'money that a migrant sends back to family in the home country', es: 'dinero que un migrante envía a su familia en su país de origen', fa: 'پولی که یک مهاجر برای خانواده‌اش در وطن می‌فرستد' },
    drought: { en: 'a long time with little or no rain', es: 'un tiempo largo con poca o ninguna lluvia', fa: 'مدت طولانی که باران کم می‌بارد یا هیچ نمی‌بارد' },
    network: { en: 'the links between relatives and neighbors that help people choose where to move', es: 'los lazos entre parientes y vecinos que ayudan a la gente a elegir a dónde mudarse', fa: 'پیوند میان خویشاوندان و همسایه‌ها که به مردم کمک می‌کند جای رفتن را انتخاب کنند' }
  },

  npcs: [
    {
      x: 9, y: 16,
      name: { en: 'Don Esteban', es: 'Don Esteban', fa: 'دون استبان' },
      role: { en: 'Corn and bean farmer', es: 'Agricultor de maíz y frijol', fa: 'دهقان جواری و لوبیا' },
      look: { skin: 2, hair: '#d8d4cc', shirt: '#f2efe6', pants: '#5a4630' },
      lines: [
        { en: 'When I was young, this field grew tall corn. Now the rain comes late.', es: 'Cuando yo era joven, este campo daba maíz alto. Ahora la lluvia llega tarde.', fa: 'وقتی جوان بودم، این زمین جواری بلند می‌داد. حالا باران دیر می‌آید.' },
        { en: 'Sometimes it never comes. A long [[drought|drought]] dried our soil.', es: 'A veces no llega nunca. Una larga [[drought|sequía]] secó nuestra tierra.', fa: 'گاهی هیچ نمی‌آید. یک [[drought|خشک‌سالی]] طولانی خاک ما را خشک کرد.' },
        { en: 'A [[push factor|push factor]] makes home hard to stay in: no rain, no jobs, floods, danger.', es: 'Un [[push factor|factor de expulsión]] hace difícil quedarse en casa: sin lluvia, sin trabajo, inundaciones, peligro.', fa: '[[push factor|عامل رانش]] ماندن در خانه را سخت می‌کند: نبودن باران، نبودن کار، سیلاب، خطر.' },
        { en: 'Young people left for the city. [[migration|Migration]] left our farms and school with fewer people.', es: 'Los jóvenes se fueron a la ciudad. La [[migration|migración]] dejó nuestros campos y la escuela con menos gente.', fa: 'جوانان به شهر رفتند. [[migration|مهاجرت]] زمین‌ها و مکتب ما را کم‌نفرتر کرد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is a push factor?', es: '¿Cuál es un factor de expulsión?', fa: 'کدام یک عامل رانش است؟' },
        choices: [
          { ok: true, t: { en: 'A long drought dries up the farms', es: 'Una larga sequía seca los campos', fa: 'خشک‌سالی طولانی زمین‌ها را خشک می‌کند' },
            why: { en: 'A drought makes home hard to stay in, so it pushes people away.', es: 'Una sequía hace difícil quedarse en casa, así que empuja a la gente a irse.', fa: 'خشک‌سالی ماندن در خانه را سخت می‌کند، پس مردم را دور می‌راند.' } },
          { t: { en: 'A job offer in a growing city nearby', es: 'Una oferta de trabajo en una ciudad cercana que crece', fa: 'پیشنهاد کار در یک شهر نزدیک که رشد می‌کند' },
            why: { en: 'A job makes a new place look better. That is a pull factor.', es: 'Un trabajo hace que un lugar nuevo se vea mejor. Eso es un factor de atracción.', fa: 'کار یک جای نو را بهتر نشان می‌دهد. این عامل کشش است.' } },
          { t: { en: 'A cousin with a room to share', es: 'Un primo con un cuarto para compartir', fa: 'یک بچهٔ کاکا که اتاقی برای شریک کردن دارد' },
            why: { en: 'Family in the new place pulls people in. That is a pull factor.', es: 'La familia en el lugar nuevo atrae a la gente. Eso es un factor de atracción.', fa: 'خانواده در جای نو مردم را به طرف خود می‌کشد. این عامل کشش است.' } }
        ]
      }
    },
    {
      x: 18, y: 4,
      name: { en: 'Valeria', es: 'Valeria', fa: 'والریا' },
      role: { en: 'Bus driver', es: 'Chofer de bus', fa: 'رانندهٔ بس' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'My bus brings people to the city. Some visit. Some stay: that is [[migration|migration]].', es: 'Mi bus trae gente a la ciudad. Algunos visitan. Otros se quedan: eso es [[migration|migración]].', fa: 'بس من مردم را به شهر می‌آورد. بعضی به دیدن می‌آیند. بعضی می‌مانند: این [[migration|مهاجرت]] است.' },
        { en: 'A [[pull factor|pull factor]] makes a new place look better: jobs, safe streets, good schools, family.', es: 'Un [[pull factor|factor de atracción]] hace que un lugar nuevo se vea mejor: trabajo, calles seguras, buenas escuelas, familia.', fa: '[[pull factor|عامل کشش]] یک جای نو را بهتر نشان می‌دهد: کار، سرک‌های امن، مکتب خوب، خانواده.' },
        { en: 'Most moves mix both: dry fields push, while a job and a cousin pull.', es: 'Casi todas las mudanzas mezclan las dos: los campos secos expulsan; un trabajo y un primo atraen.', fa: 'بیشتر سفرها هر دو را دارند: زمین خشک می‌راند، و کار و خویشاوند می‌کشند.' },
        { en: 'People often go where relatives and neighbors went. These links are a [[network|network]].', es: 'La gente suele ir a donde fueron sus parientes y vecinos. Esos lazos son una [[network|red]].', fa: 'مردم اکثراً جایی می‌روند که خویشاوندان و همسایه‌ها رفته‌اند. این پیوندها یک [[network|شبکه]] است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A family moves to a city where their cousins already live. What are the cousins for this family?', es: 'Una familia se muda a una ciudad donde ya viven sus primos. ¿Qué son los primos para esta familia?', fa: 'یک خانواده به شهری می‌رود که خویشاوندانش آنجا زندگی می‌کنند. این خویشاوندان برای آن خانواده چه هستند؟' },
        choices: [
          { ok: true, t: { en: 'A pull factor', es: 'Un factor de atracción', fa: 'عامل کشش' },
            why: { en: 'Family in the new city makes that place look better, so it pulls.', es: 'La familia en la ciudad nueva hace que el lugar se vea mejor, así que atrae.', fa: 'خانواده در شهر نو آن جا را بهتر نشان می‌دهد، پس می‌کشد.' } },
          { t: { en: 'A push factor', es: 'Un factor de expulsión', fa: 'عامل رانش' },
            why: { en: 'A push comes from the place people leave. The cousins are in the new place.', es: 'La expulsión viene del lugar que la gente deja. Los primos están en el lugar nuevo.', fa: 'رانش از جایی می‌آید که مردم ترک می‌کنند. خویشاوندان در جای نو هستند.' } },
          { t: { en: 'A remittance', es: 'Una remesa', fa: 'حواله' },
            why: { en: 'A remittance is money sent home. It is not a person.', es: 'Una remesa es dinero que se envía a casa. No es una persona.', fa: 'حواله پولی است که به خانه فرستاده می‌شود. یک شخص نیست.' } }
        ]
      }
    },
    {
      x: 22, y: 17,
      name: { en: 'Yesenia', es: 'Yesenia', fa: 'یسنیا' },
      role: { en: 'Cook at her own food stand', es: 'Cocinera en su propio puesto de comida', fa: 'آشپز در دکان غذای خودش' },
      remember: { ep: '2.2', t: { en: 'Hello again, friend! I left the banana farm in Ecuador to work here. Back home they still talk about the bananas you carried up the mountain for Taita Inti\'s granddaughter!', es: '¡Hola otra vez, amigo! Dejé la finca de bananos en Ecuador para trabajar aquí. ¡En mi tierra todavía hablan de los bananos que subiste a la montaña para la nieta de Taita Inti!', fa: 'سلام دوباره، دوست من! من فارم کیله را در اکوادور ترک کردم تا اینجا کار کنم. در وطن هنوز هم از کیله‌هایی گپ می‌زنند که تو برای نواسهٔ تایتا اینتی به بالای کوه بردی!' } },
      look: { skin: 4, hair: '#2a1a12', shirt: '#e0782b', pants: '#3a3a3a' },
      lines: [
        { en: 'I came here for work. Now I cook at my own food stand.', es: 'Vine aquí a trabajar. Ahora cocino en mi propio puesto de comida.', fa: 'من برای کار اینجا آمدم. حالا در دکان غذای خودم آشپزی می‌کنم.' },
        { en: 'Newcomers bring food, music, languages and shops. The city grows; buses get crowded.', es: 'Los recién llegados traen comida, música, idiomas y tiendas. La ciudad crece; los buses se llenan.', fa: 'تازه‌واردها غذا، موسیقی، زبان و دکان می‌آورند. شهر بزرگ می‌شود؛ بس‌ها پر می‌شوند.' },
        { en: 'Each month I send home part of my pay: a [[remittance|remittance]]. Earned, not charity.', es: 'Cada mes mando a casa parte de mi sueldo: una [[remittance|remesa]]. Se gana trabajando; no es caridad.', fa: 'هر ماه بخشی از معاشم را به وطن می‌فرستم: یک [[remittance|حواله]]. با کار به دست می‌آید، خیرات نیست.' },
        { en: 'It pays first for food, rent, school and medicine. Workers sent $685 billion in 2024.', es: 'Primero paga comida, renta, la escuela y medicinas. En 2024, los trabajadores enviaron 685 mil millones de dólares.', fa: 'اول خرج نان، کرایهٔ خانه، فیس مکتب و دوا می‌شود. در ۲۰۲۴ کارگران ۶۸۵ میلیارد دالر فرستادند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How can migration change the city where people arrive?', es: '¿Cómo puede la migración cambiar la ciudad a donde llega la gente?', fa: 'مهاجرت چطور شهری را که مردم به آن می‌رسند تغییر می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'It gets new shops, foods and more people', es: 'Gana tiendas, comidas nuevas y más gente', fa: 'دکان‌ها، غذاهای نو و مردم بیشتر پیدا می‌کند' },
            why: { en: 'A city that gains workers gains new businesses. Its buses and lines get fuller too.', es: 'Una ciudad que gana trabajadores gana negocios nuevos. Sus buses y filas también se llenan más.', fa: 'شهری که کارگر پیدا می‌کند کسب‌وکار نو هم پیدا می‌کند. بس‌ها و صف‌هایش هم پرتر می‌شوند.' } },
          { t: { en: 'Its schools get smaller as families leave', es: 'Sus escuelas se achican porque las familias se van', fa: 'مکتب‌هایش کوچک‌تر می‌شوند چون خانواده‌ها می‌روند' },
            why: { en: 'That happens in the town people leave, like Don Esteban\'s town.', es: 'Eso pasa en el pueblo que la gente deja, como el de Don Esteban.', fa: 'این در قریه‌ای رخ می‌دهد که مردم ترک می‌کنند، مثل قریهٔ دون استبان.' } },
          { t: { en: 'Nothing changes in the city', es: 'Nada cambia en la ciudad', fa: 'در شهر هیچ چیز تغییر نمی‌کند' },
            why: { en: 'Migration changes both places: the one people leave and the one they reach.', es: 'La migración cambia los dos lugares: el que la gente deja y al que llega.', fa: 'مهاجرت هر دو جا را تغییر می‌دهد: جایی که مردم ترک می‌کنند و جایی که می‌رسند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 6, text: { en: 'FARM TOWN · City road → · Most people move a short way: farm town to a city in the same country.', es: 'PUEBLO DEL CAMPO · Camino a la ciudad → · Casi toda la gente se muda cerca: del pueblo a una ciudad del mismo país.', fa: 'قریهٔ دهقانی · راه شهر به طرف شرق · بیشتر مردم راه کوتاهی می‌روند: از قریه به شهری در همان کشور.' } },
    { x: 17, y: 4, text: { en: 'BUS STOP · CITY JOBS: cooks, builders, nurses, drivers. Help wanted! A job is a [[pull factor|pull factor]].',
      es: 'PARADA DE BUS · TRABAJOS EN LA CIUDAD: cocineros, constructores, enfermeras, choferes. ¡Se busca personal! Un trabajo es un [[pull factor|factor de atracción]].',
      fa: 'ایستگاه بس · کار در شهر: آشپز، معمار، نرس، راننده. کارگر لازم است! کار یک [[pull factor|عامل کشش]] است.' } }
  ],

  /* the quest: Doña Marta (gold !) -> Nadège the mail carrier -> follow the Ink Thief's riddles to a push factor, a pull factor and the short road between them, then catch it -> back to Marta with Diego's letter */
  quest: {
    stat: 'mov',
    title: { en: 'The Stolen Letter', es: 'La carta robada', fa: 'نامهٔ دزدی‌شده' },
    giver: {
      x: 6, y: 3,
      name: { en: 'Doña Marta', es: 'Doña Marta', fa: 'دونیا مارتا' },
      role: { en: 'Grandmother in the farm town', es: 'Abuela del pueblo del campo', fa: 'مادرکلان در قریهٔ دهقانی' },
      look: { skin: 1, hair: '#d8d4cc', shirt: '#4a6ab0', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Hello, dear. My grandson Diego moved to the city last year.', es: 'Hola, mi amor. Mi nieto Diego se mudó a la ciudad el año pasado.', fa: 'سلام، عزیزم. نواسه‌ام دیگو سال گذشته به شهر رفت.' },
        { en: 'He works at the hospital there. Every month he sends me a letter.', es: 'Trabaja allá en el hospital. Cada mes me manda una carta.', fa: 'او آنجا در شفاخانه کار می‌کند. هر ماه برایم یک نامه می‌فرستد.' },
        { en: 'This morning the Ink Thief grabbed his letter on the Long Road!', es: '¡Esta mañana el Ladrón de Tinta agarró su carta en el Camino Largo!', fa: 'امروز صبح دزد رنگ نامهٔ او را در راه دراز قاپید!' },
        { en: 'Nadège carries the mail. Please find her in the city, to the east.', es: 'Nadège lleva el correo. Por favor, búscala en la ciudad, hacia el este.', fa: 'نادژ نامه‌رسان است. لطفاً او را در شهر، طرف شرق، پیدا کن.' }
      ],
      wait: { en: 'Nadège is in the city, east along the road. Look near the market stalls.',
        es: 'Nadège está en la ciudad, hacia el este por el camino. Busca cerca de los puestos del mercado.',
        fa: 'نادژ در شهر است، طرف شرق در امتداد سرک. نزدیک دکان‌های بازار ببین.' },
      thanks: { en: 'Diego\'s letter! Good work, but he misses home. And a [[remittance|remittance]] for school books. Thanks!', es: '¡La carta de Diego! Buen trabajo, pero extraña su casa. Y una [[remittance|remesa]] para libros de escuela. ¡Gracias!', fa: 'نامهٔ دیگو! کار خوب دارد، اما دلش برای خانه تنگ است. یک [[remittance|حواله]] هم برای کتاب‌های مکتب. تشکر!' }
    },
    contact: {
      x: 26, y: 10,
      name: { en: 'Nadège', es: 'Nadège', fa: 'نادژ' },
      role: { en: 'Mail carrier', es: 'Cartera', fa: 'نامه‌رسان' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f6fd6', pants: '#22324f', hat: '#22324f' },
      lines: [
        { en: 'Oh no, Diego\'s letter! I carry letters both ways on this road.', es: '¡Ay no, la carta de Diego! Yo llevo cartas en las dos direcciones por este camino.', fa: 'وای، نامهٔ دیگو! من در این راه نامه‌ها را به هر دو طرف می‌برم.' },
        { en: 'Workers write home, and families write back. Letters keep a family [[network|network]] strong.', es: 'Los trabajadores escriben a casa y las familias contestan. Las cartas mantienen fuerte la [[network|red]] familiar.', fa: 'کارگران به خانه نامه می‌نویسند و خانواده‌ها جواب می‌دهند. نامه‌ها [[network|شبکهٔ]] خانواده را قوی نگه می‌دارند.' },
        { en: 'The Ink Thief tore the letter into 3 pieces along the Long Road!', es: '¡El Ladrón de Tinta rompió la carta en 3 pedazos por el Camino Largo!', fa: 'دزد رنگ نامه را سه تکه کرد و در راه دراز پنهان کرد!' },
        { en: 'Follow its riddles to the right places. Then catch the thief!', es: 'Sigue sus acertijos a los lugares correctos. ¡Después atrapa al ladrón!', fa: 'چیستان‌هایش را تا جاهای درست دنبال کن. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [4, 9],
      hops: [[14, 8], [11, 10]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! Diego\'s letter is in 3 pieces on the Long Road. Follow my riddles!', es: '¡Ji ji! La carta de Diego está en 3 pedazos por el Camino Largo. ¡Sigue mis acertijos!', fa: 'هی هی! نامهٔ دیگو سه تکه در راه دراز است. چیستان‌هایم را دنبال کن!' },
      clues: [
        { t: { en: 'Piece 1 is at a [[push factor|push factor]], a reason to leave: fields where the rain came too late.', es: 'El pedazo 1 está en un [[push factor|factor de expulsión]], una razón para irse: campos donde la lluvia llegó tarde.', fa: 'تکهٔ ۱ در یک [[push factor|عامل رانش]] است، دلیلی برای رفتن: زمین‌هایی که باران خیلی دیر آمد.' },
          zones: [{ x: 1, y: 8, w: 14, h: 13 }],
          noBy: [{ x: 17, y: 1, w: 14, h: 4, t: { en: 'This is the city, with lots of jobs. Jobs pull people in. A push factor is a problem back home that makes people leave.', es: 'Esta es la ciudad, con mucho trabajo. El trabajo atrae a la gente. Un factor de expulsión es un problema en casa que hace que la gente se vaya.', fa: 'این جا شهر است، با کار زیاد. کار مردم را می‌کشد. عامل رانش مشکلی در خانه است که مردم را به رفتن وادار می‌کند.' } }],
          found: { en: 'Piece 1! A [[drought|drought]] killed the crops. That push made Diego\'s family think of moving.', es: '¡El pedazo 1! Una [[drought|sequía]] mató los cultivos. Esa expulsión hizo pensar en mudarse a la familia de Diego.', fa: 'تکهٔ ۱! یک [[drought|خشک‌سالی]] کشت‌ها را از بین برد. آن رانش خانوادهٔ دیگو را به فکر رفتن انداخت.' } },
        { t: { en: 'Piece 2 is at a [[pull factor|pull factor]], a reason to come. Find the sign that says "Help wanted!"', es: 'El pedazo 2 está en un [[pull factor|factor de atracción]], una razón para venir. ¡Busca el letrero "Se busca personal"!', fa: 'تکهٔ ۲ در یک [[pull factor|عامل کشش]] است، دلیلی برای آمدن. لوحهٔ «کارگر لازم است!» را پیدا کن.' },
          zones: [{ x: 15, y: 1, w: 16, h: 4 }],
          noBy: [{ x: 1, y: 8, w: 14, h: 13, t: { en: 'These dry fields push people away. A pull factor is in the new place, like a job in the city.', es: 'Estos campos secos alejan a la gente. Un factor de atracción está en el lugar nuevo, como un trabajo en la ciudad.', fa: 'این زمین‌های خشک مردم را دور می‌رانند. عامل کشش در جای نو است، مثل کار در شهر.' } },
            { x: 1, y: 1, w: 14, h: 4, t: { en: 'This is the farm town, Diego\'s old home. A pull factor is in the new place he moved to.', es: 'Este es el pueblo del campo, el hogar de Diego. Un factor de atracción está en el lugar nuevo adonde se mudó.', fa: 'این قریهٔ دهقانی، خانهٔ قبلی دیگو است. عامل کشش در جای نویی است که او به آن رفت.' } }],
          found: { en: 'Piece 2! City jobs pull people in. Jobs and money are economic reasons to move.', es: '¡El pedazo 2! Los trabajos de la ciudad atraen a la gente. El trabajo y el dinero son razones económicas.', fa: 'تکهٔ ۲! کار شهر مردم را می‌کشد. کار و پول دلیل‌های اقتصادی برای رفتن هستند.' } },
        { t: { en: 'Piece 3 is by the road sign that says how far most people move. Far, or near?', es: 'El pedazo 3 está junto al letrero del camino que dice qué tan lejos se muda casi toda la gente. ¿Lejos o cerca?', fa: 'تکهٔ ۳ کنار لوحهٔ سرک است که می‌گوید بیشتر مردم چقدر دور می‌روند. دور یا نزدیک؟' },
          zones: [{ x: 5, y: 6, w: 11, h: 2 }],
          noBy: [{ x: 16, y: 16, w: 15, h: 3, t: { en: 'This river leads to the sea. A trip across the sea to another land is a long move. Most people who move go only a short way.', es: 'Este río lleva al mar. Un viaje por el mar a otra tierra es una mudanza larga. La mayoría de la gente que se muda va solo un poco lejos.', fa: 'این دریا به بحر می‌رسد. سفر از راه بحر به سرزمین دیگر یک کوچ دراز است. بیشتر کسانی که جابه‌جا می‌شوند فقط راه کوتاهی می‌روند.' } }],
          found: { en: 'Piece 3! Most people move a short way, like Diego: same country, new city.', es: '¡El pedazo 3! Casi toda la gente se muda cerca, como Diego: mismo país, ciudad nueva.', fa: 'تکهٔ ۳! بیشتر مردم راه کوتاهی می‌روند، مثل دیگو: همان کشور، شهر نو.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs off. Diego\'s letter is whole again.', es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye. La carta de Diego está completa otra vez.', fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و فرار می‌کند. نامهٔ دیگو دوباره کامل است.' },
      item: { icon: '✉️', name: { en: 'Diego\'s letter', es: 'La carta de Diego', fa: 'نامهٔ دیگو' } }
    }
  },

  scraps: [[30, 3], [1, 20], [30, 17]],
  smudges: [[10, 19], [22, 8]],

  challenge: {
    at: [13, 3],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // push notes go to the dry, drought-hit fields of the home village (west); pull notes go to the city between the factory and the tall buildings (east), where the bus goes
    zones: [{ bin: 'push', x: 8, y: 8, w: 3, h: 2 }, { bin: 'pull', x: 22, y: 3, w: 2, h: 2 }, { bin: 'pull', x: 22, y: 6, w: 2, h: 2 }],
    stat: 'mov',
    title: { en: 'Push or pull?', es: '¿Expulsión o atracción?', fa: 'رانش یا کشش؟' },
    intro: { en: 'The Grump mixed up the travelers\' reasons. Sort each card. Does it push people away from home, or pull them toward a new place?',
      es: 'El Gruñón mezcló las razones de los viajeros. Ordena cada tarjeta. ¿Empuja a la gente lejos de su hogar o la atrae a un lugar nuevo?',
      fa: 'غرغرو دلیل‌های مسافران را مخلوط کرد. هر کارت را جدا کن. آیا مردم را از خانه دور می‌کند یا به طرف یک جای نو می‌کشد؟' },
    bins: [
      { id: 'push', icon: '🚪', label: { en: 'Push factor', es: 'Factor de expulsión', fa: 'عامل رانش' }, sub: { en: 'makes home hard to stay in', es: 'hace difícil quedarse en casa', fa: 'ماندن در خانه را سخت می‌کند' } },
      { id: 'pull', icon: '🧲', label: { en: 'Pull factor', es: 'Factor de atracción', fa: 'عامل کشش' }, sub: { en: 'makes a new place look better', es: 'hace que un lugar nuevo se vea mejor', fa: 'جای نو را بهتر نشان می‌دهد' } }
    ],
    items: [
      { bin: 'push', t: { en: 'A long drought dries up the corn', es: 'Una larga sequía seca el maíz', fa: 'خشک‌سالی طولانی جواری را خشک می‌کند' }, why: { en: 'A drought makes it hard to farm at home, so it pushes.', es: 'Una sequía hace difícil cultivar en casa, así que expulsa.', fa: 'خشک‌سالی دهقانی در خانه را سخت می‌کند، پس می‌راند.' } },
      { bin: 'push', t: { en: 'No jobs in the home town', es: 'No hay trabajo en el pueblo', fa: 'در قریه کار نیست' }, why: { en: 'With no work at home, it is hard to stay. That pushes.', es: 'Sin trabajo en casa, es difícil quedarse. Eso expulsa.', fa: 'وقتی در خانه کار نیست، ماندن سخت است. این می‌راند.' } },
      { bin: 'push', t: { en: 'A flood ruins the house and the fields', es: 'Una inundación arruina la casa y el campo', fa: 'سیلاب خانه و زمین را خراب می‌کند' }, why: { en: 'A flood is an environmental cause that pushes people away.', es: 'Una inundación es una causa ambiental que expulsa a la gente.', fa: 'سیلاب یک علت محیطی است که مردم را دور می‌راند.' } },
      { bin: 'push', t: { en: 'The streets near home are not safe', es: 'Las calles cerca de casa no son seguras', fa: 'سرک‌های نزدیک خانه امن نیست' }, why: { en: 'Danger at home makes it hard to stay, so it pushes.', es: 'El peligro en casa hace difícil quedarse, así que expulsa.', fa: 'خطر در خانه ماندن را سخت می‌کند، پس می‌راند.' } },
      { bin: 'pull', t: { en: 'A job offer at a city hospital', es: 'Una oferta de trabajo en un hospital de la ciudad', fa: 'پیشنهاد کار در یک شفاخانهٔ شهر' }, why: { en: 'A job in the new place pulls people toward it.', es: 'Un trabajo en el lugar nuevo atrae a la gente.', fa: 'کار در جای نو مردم را به طرف آن می‌کشد.' } },
      { bin: 'pull', t: { en: 'An aunt with a room to share', es: 'Una tía con un cuarto para compartir', fa: 'یک خاله که اتاقی برای شریک کردن دارد' }, why: { en: 'Family already in the new place is a pull.', es: 'La familia que ya está en el lugar nuevo atrae.', fa: 'خانواده‌ای که در جای نو است کشش است.' } },
      { bin: 'pull', t: { en: 'Good schools for the children', es: 'Buenas escuelas para los niños', fa: 'مکتب‌های خوب برای اطفال' }, why: { en: 'Good schools make a new place look better. That pulls.', es: 'Las buenas escuelas hacen que un lugar nuevo se vea mejor. Eso atrae.', fa: 'مکتب‌های خوب جای نو را بهتر نشان می‌دهند. این می‌کشد.' } },
      { bin: 'pull', t: { en: 'Safe streets and a quiet park', es: 'Calles seguras y un parque tranquilo', fa: 'سرک‌های امن و یک پارک آرام' }, why: { en: 'Safety in the new place pulls people in.', es: 'La seguridad en el lugar nuevo atrae a la gente.', fa: 'امنیت در جای نو مردم را می‌کشد.' } }
    ],
    success: { en: 'The road signs point the right way again! Most moves have a push AND a pull.', es: '¡Los letreros del camino vuelven a señalar bien! Casi todas las mudanzas tienen una expulsión Y una atracción.', fa: 'تابلوهای راه دوباره درست نشان می‌دهند! بیشتر سفرها هم رانش دارند و هم کشش.' }
  },

  boss: {
    at: [24, 17],
    stat: 'reg',
    need: 3,
    name: { en: 'The Tangle Grump', es: 'El Gruñón Enredado', fa: 'غرغروی گره‌خورده' },
    appear: { en: 'The Tangle Grump is hiding by the river dock in the south-east!', es: '¡El Gruñón Enredado se esconde junto al muelle del río, en el sureste!', fa: 'غرغروی گره‌خورده کنار بندر دریا در جنوب شرق پنهان است!' },
    taunt: { en: 'Hee hee! I tied every road in knots. Who can say why people move now?', es: '¡Ji ji! Até todos los caminos en nudos. ¿Quién sabe ahora por qué se muda la gente?', fa: 'هی هی! همهٔ راه‌ها را گره زدم. حالا کی می‌داند مردم چرا جابه‌جا می‌شوند؟' },
    win: { en: 'The knots fall loose. Atlas page 2.3 floats down, and a little canoe waits at the dock for you!', es: 'Los nudos se sueltan. ¡La página 2.3 del atlas cae, y una canoa pequeña te espera en el muelle!', fa: 'گره‌ها باز می‌شوند. صفحهٔ ۲.۳ اطلس پایین می‌آید و یک قایق کوچک در بندر منتظر توست!' },
    questions: [
      { q: { en: 'What is a push factor?', es: '¿Qué es un factor de expulsión?', fa: 'عامل رانش چیست؟' },
        choices: [{ en: 'A reason that makes a place hard to stay in', es: 'Una razón que hace difícil quedarse en un lugar', fa: 'دلیلی که ماندن در یک جا را سخت می‌کند' }, { en: 'A reason that makes another place look better', es: 'Una razón que hace que otro lugar se vea mejor', fa: 'دلیلی که جای دیگر را بهتر نشان می‌دهد' }, { en: 'A rule about who may enter a country', es: 'Una regla sobre quién puede entrar a un país', fa: 'قانونی دربارهٔ اینکه کی می‌تواند به کشور بیاید' }, { en: 'Money a worker sends to family at home', es: 'Dinero que un trabajador envía a su familia', fa: 'پولی که یک کارگر برای خانواده می‌فرستد' }], answer: 0,
        why: { en: 'No work, a long drought, a flood or danger can all push people away.', es: 'La falta de trabajo, una sequía, una inundación o el peligro pueden expulsar a la gente.', fa: 'نبودن کار، خشک‌سالی، سیلاب یا خطر همه مردم را دور می‌رانند.' } },
      { q: { en: 'What is a pull factor?', es: '¿Qué es un factor de atracción?', fa: 'عامل کشش چیست؟' },
        choices: [{ en: 'A reason that makes another place look better', es: 'Una razón que hace que otro lugar se vea mejor', fa: 'دلیلی که جای دیگر را بهتر نشان می‌دهد' }, { en: 'A storm that damages farmland and homes', es: 'Una tormenta que daña los campos y las casas', fa: 'طوفانی که زمین و خانه‌ها را خراب می‌کند' }, { en: 'The cost of sending money', es: 'El costo de enviar dinero', fa: 'هزینهٔ فرستادن پول' }, { en: 'A limit on how many people may enter a country', es: 'Un límite de cuánta gente puede entrar a un país', fa: 'حدی برای تعداد مردمی که می‌توانند به کشور بیایند' }], answer: 0,
        why: { en: 'Jobs, safety, good schools and family already there can all pull people in.', es: 'El trabajo, la seguridad, las buenas escuelas y la familia que ya está allí pueden atraer a la gente.', fa: 'کار، امنیت، مکتب خوب و خانواده‌ای که آنجاست همه مردم را می‌کشند.' } },
      { q: { en: 'What is a remittance?', es: '¿Qué es una remesa?', fa: 'حواله چیست؟' },
        choices: [{ en: 'Money a migrant sends back to family at home', es: 'Dinero que un migrante envía a su familia en casa', fa: 'پولی که مهاجر برای خانواده در وطن می‌فرستد' }, { en: 'Money one government gives to another', es: 'Dinero que un gobierno le da a otro', fa: 'پولی که یک دولت به دولت دیگر می‌دهد' }, { en: 'Money a company spends to build a new factory', es: 'Dinero que una empresa gasta para construir una fábrica', fa: 'پولی که یک شرکت برای ساختن فابریکهٔ نو خرج می‌کند' }, { en: 'Money a worker spends where they live', es: 'Dinero que un trabajador gasta donde vive', fa: 'پولی که کارگر همان جا که زندگی می‌کند خرج می‌کند' }], answer: 0,
        why: { en: 'A remittance is part of a worker\'s own pay, sent home to family.', es: 'Una remesa es parte del sueldo del trabajador, enviada a su familia.', fa: 'حواله بخشی از معاش خود کارگر است که برای خانواده فرستاده می‌شود.' } },
      { q: { en: 'Drought, floods and poor soil are which kind of cause of migration?', es: 'La sequía, las inundaciones y la tierra pobre son ¿qué tipo de causa de migración?', fa: 'خشک‌سالی، سیلاب و خاک ضعیف کدام نوع علت مهاجرت هستند؟' },
        choices: [{ en: 'Environmental', es: 'Ambiental', fa: 'محیطی' }, { en: 'Political', es: 'Política', fa: 'سیاسی' }, { en: 'Sociocultural', es: 'Sociocultural', fa: 'اجتماعی و فرهنگی' }, { en: 'Economic', es: 'Económica', fa: 'اقتصادی' }], answer: 0,
        why: { en: 'Environmental causes come from the land, water and weather.', es: 'Las causas ambientales vienen de la tierra, el agua y el clima.', fa: 'علت‌های محیطی از زمین، آب و هوا می‌آیند.' } },
      { q: { en: 'A town loses many young workers. What is likely to happen there?', es: 'Un pueblo pierde a muchos trabajadores jóvenes. ¿Qué es probable que pase allí?', fa: 'یک قریه بسیاری از کارگران جوانش را از دست می‌دهد. احتمالاً آنجا چه می‌شود؟' },
        choices: [{ en: 'Fewer workers, and a smaller school', es: 'Menos trabajadores y una escuela más chica', fa: 'کارگر کمتر و مکتب کوچک‌تر' }, { en: 'The town gets more crowded than before', es: 'El pueblo se llena más que antes', fa: 'قریه از قبل پرتر می‌شود' }, { en: 'The farms hire many more workers', es: 'Los campos contratan muchos más trabajadores', fa: 'زمین‌ها کارگران خیلی بیشتر می‌گیرند' }, { en: 'The buses fill up with new people', es: 'Los buses se llenan de gente nueva', fa: 'بس‌ها پر از مردم نو می‌شوند' }], answer: 0,
        why: { en: 'Farms may sit empty because fewer hands are left to work them.', es: 'Los campos pueden quedar vacíos porque quedan menos manos para trabajar.', fa: 'زمین‌ها شاید خالی بمانند چون دست‌های کمتری برای کار مانده است.' } },
      { q: { en: 'Many migrants from one small town live in the same city far away. What best explains that?', es: 'Muchos migrantes de un pueblo pequeño viven en la misma ciudad lejana. ¿Qué lo explica mejor?', fa: 'بسیاری از مهاجران یک قریهٔ کوچک در یک شهر دور زندگی می‌کنند. چه چیز این را بهتر توضیح می‌دهد؟' },
        choices: [{ en: 'People go where their relatives already went', es: 'La gente va a donde ya fueron sus parientes', fa: 'مردم جایی می‌روند که خویشاوندانشان رفته‌اند' }, { en: 'Buses from that small town go to only one city', es: 'Los buses de ese pueblo van a una sola ciudad', fa: 'بس‌های آن قریهٔ کوچک فقط به یک شهر می‌روند' }, { en: 'Every city has the same jobs', es: 'Todas las ciudades tienen los mismos trabajos', fa: 'همهٔ شهرها کارهای یکسان دارند' }, { en: 'Sending money costs the same everywhere', es: 'Enviar dinero cuesta lo mismo en todas partes', fa: 'فرستادن پول در همه جا یک قیمت دارد' }], answer: 0,
        why: { en: 'Links between relatives and neighbors form a network. Networks shape where people settle.', es: 'Los lazos entre parientes y vecinos forman una red. Las redes deciden dónde se queda la gente.', fa: 'پیوند میان خویشاوندان و همسایه‌ها یک شبکه می‌سازد. شبکه‌ها جای ماندن مردم را شکل می‌دهند.' } },
      { q: { en: 'What does remittance money pay for first?', es: '¿Qué paga primero el dinero de las remesas?', fa: 'پول حواله اول خرج چه می‌شود؟' },
        choices: [{ en: 'Food, rent, school fees and medicine', es: 'Comida, renta, la escuela y medicinas', fa: 'نان، کرایهٔ خانه، فیس مکتب و دوا' }, { en: 'Tools to start a new family business', es: 'Herramientas para abrir un negocio familiar', fa: 'افزار برای شروع یک کار نو خانوادگی' }, { en: 'An extra room built onto the house', es: 'Un cuarto extra construido en la casa', fa: 'یک اتاق اضافه که به خانه ساخته می‌شود' }, { en: 'Savings for a trip', es: 'Ahorros para un viaje', fa: 'پس‌انداز برای سفر' }], answer: 0,
        why: { en: 'Everyday needs come first. Tools and extra rooms come later, from what is left.', es: 'Primero van las necesidades diarias. Las herramientas y los cuartos vienen después, con lo que sobra.', fa: 'اول نیازهای روزانه است. افزار و اتاق اضافه بعداً از پولی که می‌ماند می‌آیند.' } },
      { q: { en: 'Why are remittances different from charity?', es: '¿Por qué las remesas son diferentes de la caridad?', fa: 'چرا حواله با خیرات فرق دارد؟' },
        choices: [{ en: 'The money is earned by work and then shared', es: 'El dinero se gana trabajando y luego se comparte', fa: 'پول با کار به دست می‌آید و بعد شریک می‌شود' }, { en: 'The money is sent only by governments', es: 'El dinero lo envían solo los gobiernos', fa: 'پول را فقط دولت‌ها می‌فرستند' }, { en: 'The money is always too small to matter', es: 'El dinero siempre es demasiado poco para importar', fa: 'پول همیشه آن‌قدر کم است که مهم نیست' }, { en: 'The money never leaves the city it is earned in', es: 'El dinero nunca sale de la ciudad donde se gana', fa: 'پول هیچ وقت از شهری که در آن به دست آمده بیرون نمی‌رود' }], answer: 0,
        why: { en: 'A remittance is wages. A worker earns it, then chooses to share it with family.', es: 'Una remesa es sueldo. El trabajador lo gana y decide compartirlo con su familia.', fa: 'حواله معاش است. کارگر آن را به دست می‌آورد و با خانواده شریک می‌کند.' } }
    ]
  },

  learned: [
    { en: 'A [[push factor|push factor]] makes home hard to stay in, like a [[drought|drought]] or no jobs. A [[pull factor|pull factor]] makes a new place look better, like jobs, safety or family.', es: 'Un [[push factor|factor de expulsión]] hace difícil quedarse, como una [[drought|sequía]] o la falta de trabajo. Un [[pull factor|factor de atracción]] hace que un lugar nuevo se vea mejor, como el trabajo, la seguridad o la familia.', fa: '[[push factor|عامل رانش]] ماندن در خانه را سخت می‌کند، مثل [[drought|خشک‌سالی]] یا نبودن کار. [[pull factor|عامل کشش]] جای نو را بهتر نشان می‌دهد، مثل کار، امنیت یا خانواده.' },
    { en: '[[migration|Migration]] changes both places. The city gains workers and new shops. The home town has fewer hands on the farms.', es: 'La [[migration|migración]] cambia los dos lugares. La ciudad gana trabajadores y tiendas nuevas. El pueblo tiene menos manos en el campo.', fa: '[[migration|مهاجرت]] هر دو جا را تغییر می‌دهد. شهر کارگر و دکان نو پیدا می‌کند. قریه دست‌های کمتری در زمین دارد.' },
    { en: 'A [[remittance|remittance]] is money a migrant earns and sends home. It pays for food, rent, school and medicine.', es: 'Una [[remittance|remesa]] es dinero que un migrante gana y envía a casa. Paga comida, renta, escuela y medicinas.', fa: '[[remittance|حواله]] پولی است که مهاجر به دست می‌آورد و به وطن می‌فرستد. خرج نان، کرایه، مکتب و دوا می‌شود.' }
  ],
  reflect: {
    q: { en: 'Think about Alexandria or another city you know. What is one pull factor that brings people there? How do newcomers change that city?', es: 'Piensa en Alexandria o en otra ciudad que conozcas. ¿Qué factor de atracción trae gente allí? ¿Cómo cambian esa ciudad los recién llegados?', fa: 'به الکساندریا یا شهر دیگری که می‌شناسی فکر کن. یک عامل کشش که مردم را آنجا می‌آورد چیست؟ تازه‌واردان آن شهر را چطور تغییر می‌دهند؟' },
    starter: { en: 'One pull factor that brings people to this city is', es: 'Un factor de atracción que trae gente a esta ciudad es', fa: 'یک عامل کشش که مردم را به این شهر می‌آورد' }
  }
};
