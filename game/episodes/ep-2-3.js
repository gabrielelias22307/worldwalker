/* WORLDWALKER · Episode 2.3 · Migration in the Americas (WG.13)
   A long road runs from a dry farm town to a busy city. Push factors on one end, pull factors on the other. */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'WG.13',
  title: { en: 'Migration in the Americas', es: 'Migración en las Américas', fa: 'مهاجرت در قارهٔ امریکا' },
  place: { en: 'The Long Road', es: 'El Camino Largo', fa: 'راه دراز' },
  intro: [
    { en: 'Pip: "The Smudge tangled the Long Road! Travelers forgot why people move. Talk to the farmer, the bus driver and the cook. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón enredó el Camino Largo! Los viajeros olvidaron por qué la gente se muda. Habla con el agricultor, la chofer del bus y la cocinera. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه راه دراز را گره زد! مسافران فراموش کردند که چرا مردم جابه‌جا می‌شوند. با دهقان، رانندهٔ بس و آشپز گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22. West: a dry farm town. A long road runs east to the bus stop and a busy city.
     South-east: the city neighborhood and the river dock. */
  map: [
    'TTTTTTTTTTTTTTTTUUJUUJUUJUUJUUJU',
    'T.RRR..QQQ..RRR....UU..JJJ..UUUU',
    'T.hdh..hdh..hdh....UU..JJJ..UUUU',
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
        { en: 'When I was young, this field grew tall corn. Now the rain comes late, or it does not come at all. A long [[drought|drought]] has dried our soil.',
          es: 'Cuando yo era joven, este campo daba maíz alto. Ahora la lluvia llega tarde, o no llega. Una larga [[drought|sequía]] secó nuestra tierra.',
          fa: 'وقتی جوان بودم، این زمین جواری بلند می‌داد. حالا باران دیر می‌آید یا هیچ نمی‌آید. یک [[drought|خشک‌سالی]] طولانی خاک ما را خشک کرده است.',
          easy: { en: 'This field used to grow a lot of corn. Now there is a [[drought|drought]]. The soil is dry.', es: 'Este campo daba mucho maíz. Ahora hay [[drought|sequía]]. La tierra está seca.', fa: 'این زمین قبلاً جواری زیاد می‌داد. حالا [[drought|خشک‌سالی]] است. خاک خشک است.' } },
        { en: 'A reason that makes a place hard to stay in is a [[push factor|push factor]]. No rain, no jobs, a flood or danger can all push people away from home.',
          es: 'Una razón que hace difícil quedarse en un lugar es un [[push factor|factor de expulsión]]. La falta de lluvia, la falta de trabajo, una inundación o el peligro pueden empujar a la gente lejos de su hogar.',
          fa: 'دلیلی که ماندن در یک جا را سخت می‌کند [[push factor|عامل رانش]] نام دارد. نبودن باران، نبودن کار، سیلاب یا خطر می‌توانند مردم را از خانه دور کنند.',
          easy: { en: 'A [[push factor|push factor]] makes it hard to stay. A drought is a push factor.', es: 'Un [[push factor|factor de expulsión]] hace difícil quedarse. Una sequía es un factor de expulsión.', fa: '[[push factor|عامل رانش]] ماندن را سخت می‌کند. خشک‌سالی یک عامل رانش است.' } },
        { en: 'Many young people from our town left to work in the city. Now fewer hands work the farms, and our school has fewer children. [[migration|Migration]] changes the town people leave, too.',
          es: 'Muchos jóvenes de nuestro pueblo se fueron a trabajar a la ciudad. Ahora hay menos manos en el campo y la escuela tiene menos niños. La [[migration|migración]] también cambia el pueblo que la gente deja.',
          fa: 'بسیاری از جوانان قریهٔ ما برای کار به شهر رفتند. حالا دست‌های کمتری در زمین کار می‌کنند و مکتب ما شاگردان کمتری دارد. [[migration|مهاجرت]] قریه‌ای را که مردم ترک می‌کنند هم تغییر می‌دهد.',
          easy: { en: 'Young people left for city jobs. Now the farms and the school are emptier.', es: 'Los jóvenes se fueron a trabajar a la ciudad. Ahora el campo y la escuela están más vacíos.', fa: 'جوانان برای کار به شهر رفتند. حالا زمین‌ها و مکتب خالی‌تر هستند.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is a push factor?', es: '¿Cuál es un factor de expulsión?', fa: 'کدام یک عامل رانش است؟' },
        choices: [
          { ok: true, t: { en: 'A long drought dries up the farms', es: 'Una larga sequía seca los campos', fa: 'خشک‌سالی طولانی زمین‌ها را خشک می‌کند' },
            why: { en: 'A drought makes home hard to stay in, so it pushes people away.', es: 'Una sequía hace difícil quedarse en casa, así que empuja a la gente a irse.', fa: 'خشک‌سالی ماندن در خانه را سخت می‌کند، پس مردم را دور می‌راند.' } },
          { t: { en: 'A job offer in a growing city', es: 'Una oferta de trabajo en una ciudad que crece', fa: 'پیشنهاد کار در یک شهر رو به رشد' },
            why: { en: 'A job makes a new place look better. That is a pull factor.', es: 'Un trabajo hace que un lugar nuevo se vea mejor. Eso es un factor de atracción.', fa: 'کار یک جای نو را بهتر نشان می‌دهد. این عامل کشش است.' } },
          { t: { en: 'A cousin with a room to share', es: 'Un primo con un cuarto para compartir', fa: 'یک بچهٔ کاکا که اتاقی برای شریک کردن دارد' },
            why: { en: 'Family in the new place pulls people in. That is a pull factor.', es: 'La familia en el lugar nuevo atrae a la gente. Eso es un factor de atracción.', fa: 'خانواده در جای نو مردم را به طرف خود می‌کشد. این عامل کشش است.' } }
        ]
      }
    },
    {
      x: 18, y: 4,
      name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      role: { en: 'Bus driver', es: 'Chofer de bus', fa: 'رانندهٔ بس' },
      look: { skin: 3, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'Every morning my bus carries people from the farm towns to the city. Some visit. Some stay to live. [[migration|Migration]] means moving from one place to another to live.',
          es: 'Cada mañana mi bus lleva gente de los pueblos del campo a la ciudad. Algunos visitan. Otros se quedan a vivir. La [[migration|migración]] es mudarse de un lugar a otro para vivir.',
          fa: 'هر صبح بس من مردم را از قریه‌های دهقانی به شهر می‌برد. بعضی به دیدن می‌آیند. بعضی برای زندگی می‌مانند. [[migration|مهاجرت]] یعنی رفتن از یک جا به جای دیگر برای زندگی.',
          easy: { en: 'My bus goes from the farm towns to the city. [[migration|Migration]] means moving to live in a new place.', es: 'Mi bus va del campo a la ciudad. La [[migration|migración]] es mudarse a vivir a un lugar nuevo.', fa: 'بس من از قریه‌ها به شهر می‌رود. [[migration|مهاجرت]] یعنی رفتن برای زندگی در یک جای نو.' } },
        { en: 'A reason that makes a new place look better is a [[pull factor|pull factor]]. Jobs, safe streets, good schools and family who already live there can all pull people in.',
          es: 'Una razón que hace que un lugar nuevo se vea mejor es un [[pull factor|factor de atracción]]. El trabajo, las calles seguras, las buenas escuelas y la familia que ya vive allí pueden atraer a la gente.',
          fa: 'دلیلی که یک جای نو را بهتر نشان می‌دهد [[pull factor|عامل کشش]] نام دارد. کار، سرک‌های امن، مکتب‌های خوب و خانواده‌ای که آنجا زندگی می‌کند، همه مردم را به طرف خود می‌کشند.',
          easy: { en: 'A [[pull factor|pull factor]] makes a new place look better. Jobs and family are pull factors.', es: 'Un [[pull factor|factor de atracción]] hace que un lugar nuevo se vea mejor. El trabajo y la familia son factores de atracción.', fa: '[[pull factor|عامل کشش]] جای نو را بهتر نشان می‌دهد. کار و خانواده عامل کشش هستند.' } },
        { en: 'Most moves mix push and pull. One family may leave dry fields, follow a job and join a cousin, all at once. People often go where relatives and neighbors already went. These links are a [[network|network]].',
          es: 'Casi todas las mudanzas mezclan expulsión y atracción. Una familia puede dejar campos secos, seguir un trabajo y unirse a un primo, todo a la vez. La gente suele ir a donde ya fueron sus parientes y vecinos. Esos lazos son una [[network|red]].',
          fa: 'بیشتر سفرها رانش و کشش را با هم دارند. یک خانواده شاید زمین خشک را ترک کند، دنبال کار برود و با یک خویشاوند یکجا شود، همه با هم. مردم اکثراً جایی می‌روند که خویشاوندان و همسایه‌ها قبلاً رفته‌اند. این پیوندها یک [[network|شبکه]] است.',
          easy: { en: 'Most moves have a push and a pull. People often go where their family already lives. That is a [[network|network]].', es: 'Casi todas las mudanzas tienen expulsión y atracción. La gente suele ir a donde ya vive su familia. Eso es una [[network|red]].', fa: 'بیشتر سفرها رانش و کشش دارند. مردم اکثراً جایی می‌روند که خانواده‌شان زندگی می‌کند. این یک [[network|شبکه]] است.' } }
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
      look: { skin: 4, hair: '#2a1a12', shirt: '#e0782b', pants: '#3a3a3a' },
      lines: [
        { en: 'I came to this city for work. Now I cook at my own food stand. New workers bring new foods, music and languages. They open shops. The city grows, and the buses get more crowded too.',
          es: 'Vine a esta ciudad a trabajar. Ahora cocino en mi propio puesto de comida. Los nuevos trabajadores traen comidas, música e idiomas nuevos. Abren tiendas. La ciudad crece, y los buses también se llenan más.',
          fa: 'من برای کار به این شهر آمدم. حالا در دکان غذای خودم آشپزی می‌کنم. کارگران نو غذا، موسیقی و زبان‌های نو می‌آورند. دکان باز می‌کنند. شهر بزرگ می‌شود و بس‌ها هم پرتر می‌شوند.',
          easy: { en: 'Newcomers bring new foods and open shops. The city grows. It also gets more crowded.', es: 'Los recién llegados traen comidas nuevas y abren tiendas. La ciudad crece. También se llena más.', fa: 'تازه‌واردان غذاهای نو می‌آورند و دکان باز می‌کنند. شهر بزرگ می‌شود. پرتر هم می‌شود.' } },
        { en: 'Every month I send part of my pay to my mother back home. Money that migrants send to family at home is a [[remittance|remittance]]. It pays first for food, rent, school fees and medicine.',
          es: 'Cada mes le mando una parte de mi sueldo a mi mamá. El dinero que los migrantes envían a su familia es una [[remittance|remesa]]. Primero paga comida, renta, la escuela y medicinas.',
          fa: 'هر ماه بخشی از معاشم را برای مادرم در وطن می‌فرستم. پولی که مهاجران برای خانواده می‌فرستند [[remittance|حواله]] نام دارد. اول خرج نان، کرایهٔ خانه، فیس مکتب و دوا می‌شود.',
          easy: { en: 'I send money to my mother each month. That money is a [[remittance|remittance]]. It pays for food and school.', es: 'Le mando dinero a mi mamá cada mes. Ese dinero es una [[remittance|remesa]]. Paga comida y escuela.', fa: 'هر ماه برای مادرم پول می‌فرستم. آن پول [[remittance|حواله]] است. خرج نان و مکتب می‌شود.' } },
        { en: 'This money is earned by work and then shared. It is not charity. One payment is small, but they add up. In 2024, workers sent about 685 billion dollars to low- and middle-income countries.',
          es: 'Este dinero se gana trabajando y luego se comparte. No es caridad. Un envío es pequeño, pero se suman. En 2024, los trabajadores enviaron unos 685 mil millones de dólares a países de ingresos bajos y medios.',
          fa: 'این پول با کار به دست می‌آید و بعد شریک می‌شود. خیرات نیست. یک حواله کوچک است، اما همه با هم زیاد می‌شوند. در سال ۲۰۲۴، کارگران حدود ۶۸۵ میلیارد دالر به کشورهای کم‌درآمد و میانه‌درآمد فرستادند.',
          easy: { en: 'This money is earned by work. Small payments add up to billions of dollars each year.', es: 'Este dinero se gana trabajando. Los envíos pequeños suman miles de millones de dólares cada año.', fa: 'این پول با کار به دست می‌آید. حواله‌های کوچک هر سال به میلیاردها دالر می‌رسند.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How can migration change the city where people arrive?', es: '¿Cómo puede la migración cambiar la ciudad a donde llega la gente?', fa: 'مهاجرت چطور شهری را که مردم به آن می‌رسند تغییر می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'It gains new shops and foods, and it gets more crowded', es: 'Gana tiendas y comidas nuevas, y se llena más', fa: 'دکان‌ها و غذاهای نو پیدا می‌کند و پرتر می‌شود' },
            why: { en: 'A city that gains workers gains new businesses. Its buses and lines get fuller too.', es: 'Una ciudad que gana trabajadores gana negocios nuevos. Sus buses y filas también se llenan más.', fa: 'شهری که کارگر پیدا می‌کند کسب‌وکار نو هم پیدا می‌کند. بس‌ها و صف‌هایش هم پرتر می‌شوند.' } },
          { t: { en: 'Its schools shrink as families leave', es: 'Sus escuelas se achican porque las familias se van', fa: 'مکتب‌هایش کوچک می‌شوند چون خانواده‌ها می‌روند' },
            why: { en: 'That happens in the town people leave, like Don Esteban\'s town.', es: 'Eso pasa en el pueblo que la gente deja, como el de Don Esteban.', fa: 'این در قریه‌ای رخ می‌دهد که مردم ترک می‌کنند، مثل قریهٔ دون استبان.' } },
          { t: { en: 'Nothing changes in the city', es: 'Nada cambia en la ciudad', fa: 'در شهر هیچ چیز تغییر نمی‌کند' },
            why: { en: 'Migration changes both places: the one people leave and the one they reach.', es: 'La migración cambia los dos lugares: el que la gente deja y al que llega.', fa: 'مهاجرت هر دو جا را تغییر می‌دهد: جایی که مردم ترک می‌کنند و جایی که می‌رسند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 6, text: { en: 'FARM TOWN · Road to the city → · Most people who move go only a short way, like from a farm town to a city in the same country.',
      es: 'PUEBLO DEL CAMPO · Camino a la ciudad → · La mayoría de la gente que se muda va solo un poco lejos, como de un pueblo a una ciudad del mismo país.',
      fa: 'قریهٔ دهقانی · راه شهر به طرف شرق · بیشتر کسانی که جابه‌جا می‌شوند راه کوتاهی می‌روند، مثل رفتن از قریه به شهری در همان کشور.' } },
    { x: 17, y: 4, text: { en: 'BUS STOP · CITY JOBS: cooks, builders, nurses, drivers. Help wanted! A job is a [[pull factor|pull factor]].',
      es: 'PARADA DE BUS · TRABAJOS EN LA CIUDAD: cocineros, constructores, enfermeras, choferes. ¡Se busca personal! Un trabajo es un [[pull factor|factor de atracción]].',
      fa: 'ایستگاه بس · کار در شهر: آشپز، معمار، نرس، راننده. کارگر لازم است! کار یک [[pull factor|عامل کشش]] است.' } }
  ],

  /* the quest: Doña Marta (gold !) -> Nadège the mail carrier -> beat the Ink Thief by the river -> back to Marta with Diego's letter */
  quest: {
    stat: 'mov',
    title: { en: 'The Stolen Letter', es: 'La carta robada', fa: 'نامهٔ دزدی‌شده' },
    giver: {
      x: 6, y: 3,
      name: { en: 'Doña Marta', es: 'Doña Marta', fa: 'دونیا مارتا' },
      role: { en: 'Grandmother in the farm town', es: 'Abuela del pueblo del campo', fa: 'مادرکلان در قریهٔ دهقانی' },
      look: { skin: 1, hair: '#d8d4cc', shirt: '#4a6ab0', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Hello, dear. My grandson Diego moved to the city last year. He works at the hospital there. Every month he sends me a letter.',
          es: 'Hola, mi amor. Mi nieto Diego se mudó a la ciudad el año pasado. Trabaja allá en el hospital. Cada mes me manda una carta.',
          fa: 'سلام، عزیزم. نواسه‌ام دیگو سال گذشته به شهر رفت. او آنجا در شفاخانه کار می‌کند. هر ماه برایم یک نامه می‌فرستد.' },
        { en: 'This morning the Ink Thief grabbed his letter on the Long Road! Nadège carries the mail. Please find her in the city, to the east.',
          es: '¡Esta mañana el Ladrón de Tinta agarró su carta en el Camino Largo! Nadège lleva el correo. Por favor, búscala en la ciudad, hacia el este.',
          fa: 'امروز صبح دزد سیاهی نامهٔ او را در راه دراز قاپید! نادژ نامه‌رسان است. لطفاً او را در شهر، طرف شرق، پیدا کن.' }
      ],
      wait: { en: 'Nadège is in the city, east along the road. Look near the market stalls.',
        es: 'Nadège está en la ciudad, hacia el este por el camino. Busca cerca de los puestos del mercado.',
        fa: 'نادژ در شهر است، طرف شرق در امتداد سرک. نزدیک دکان‌های بازار ببین.' },
      thanks: { en: 'Diego\'s letter! He says the city has good work, and he misses home. He also sent a [[remittance|remittance]] for his sister\'s school books. Thank you!',
        es: '¡La carta de Diego! Dice que en la ciudad hay buen trabajo y que extraña su casa. También mandó una [[remittance|remesa]] para los libros de escuela de su hermana. ¡Gracias!',
        fa: 'نامهٔ دیگو! می‌نویسد که شهر کار خوب دارد و دلش برای خانه تنگ شده. یک [[remittance|حواله]] هم برای کتاب‌های مکتب خواهرش فرستاده. تشکر!' }
    },
    contact: {
      x: 26, y: 10,
      name: { en: 'Nadège', es: 'Nadège', fa: 'نادژ' },
      role: { en: 'Mail carrier', es: 'Cartera', fa: 'نامه‌رسان' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f6fd6', pants: '#22324f', hat: '#22324f' },
      lines: [
        { en: 'Oh no, Diego\'s letter! I carry letters both ways on this road. Workers in the city write home, and families write back. Letters like these keep a family [[network|network]] strong.',
          es: '¡Ay no, la carta de Diego! Yo llevo cartas en las dos direcciones por este camino. Los trabajadores de la ciudad escriben a casa y las familias contestan. Cartas así mantienen fuerte la [[network|red]] de una familia.',
          fa: 'وای، نامهٔ دیگو! من در این راه نامه‌ها را به هر دو طرف می‌برم. کارگران در شهر به خانه نامه می‌نویسند و خانواده‌ها جواب می‌دهند. این نامه‌ها [[network|شبکهٔ]] خانواده را قوی نگه می‌دارند.' },
        { en: 'A thief in a black ink mask ran south, down to the river. Find the Ink Thief on the riverbank in the south-east. Answer its questions to get the letter back!',
          es: 'Un ladrón con una máscara de tinta negra corrió al sur, hasta el río. Busca al Ladrón de Tinta en la orilla del río, en el sureste. ¡Contesta sus preguntas para recuperar la carta!',
          fa: 'یک دزد با نقاب سیاه به طرف جنوب، تا دریا دوید. دزد سیاهی را کنار دریا در جنوب شرق پیدا کن. به سوال‌هایش جواب بده تا نامه را پس بگیری!' }
      ]
    },
    action: {
      type: 'fight',
      at: [17, 18],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد سیاهی' },
      taunt: { en: 'Hee hee! I took the letter. Now nobody knows why Diego moved. Do YOU know?', es: '¡Ji ji! Me llevé la carta. Ahora nadie sabe por qué se mudó Diego. ¿TÚ lo sabes?', fa: 'هی هی! نامه را بردم. حالا هیچ کس نمی‌داند دیگو چرا رفت. تو می‌دانی؟' },
      win: { en: 'The Ink Thief drops the letter and runs away! The envelope is a little wet, but you can still read it.', es: '¡El Ladrón de Tinta suelta la carta y sale corriendo! El sobre está un poco mojado, pero todavía se puede leer.', fa: 'دزد سیاهی نامه را می‌اندازد و فرار می‌کند! پاکت کمی تر شده، اما هنوز خوانده می‌شود.' },
      need: 2,
      questions: [
        { q: { en: 'Diego left a dry farm town for a hospital job in the city. Which one is a pull factor for him?', es: 'Diego dejó un pueblo seco del campo por un trabajo en un hospital de la ciudad. ¿Cuál es un factor de atracción para él?', fa: 'دیگو یک قریهٔ خشک را برای کار در شفاخانهٔ شهر ترک کرد. کدام یک برای او عامل کشش است؟' },
          choices: [{ en: 'The hospital job in the city', es: 'El trabajo en el hospital de la ciudad', fa: 'کار در شفاخانهٔ شهر' }, { en: 'The dry fields at home', es: 'Los campos secos en casa', fa: 'زمین‌های خشک در خانه' }, { en: 'The rain that comes too late', es: 'La lluvia que llega muy tarde', fa: 'بارانی که خیلی دیر می‌آید' }, { en: 'The empty school in his town', es: 'La escuela vacía de su pueblo', fa: 'مکتب خالی قریه‌اش' }], answer: 0,
          why: { en: 'The job is in the new place and makes it look better, so it pulls. The other three are pushes from home.', es: 'El trabajo está en el lugar nuevo y lo hace ver mejor, así que atrae. Las otras tres son expulsiones desde casa.', fa: 'کار در جای نو است و آن را بهتر نشان می‌دهد، پس می‌کشد. سه تای دیگر رانش از خانه هستند.' } },
        { q: { en: 'Most people who move do not go very far. Which move is the most common?', es: 'La mayoría de la gente que se muda no va muy lejos. ¿Qué mudanza es la más común?', fa: 'بیشتر کسانی که جابه‌جا می‌شوند خیلی دور نمی‌روند. کدام سفر از همه عام‌تر است؟' },
          choices: [{ en: 'From a farm town to a city in the same country', es: 'De un pueblo del campo a una ciudad del mismo país', fa: 'از یک قریه به شهری در همان کشور' }, { en: 'From one continent to another continent', es: 'De un continente a otro continente', fa: 'از یک قاره به قارهٔ دیگر' }, { en: 'From a city to an island far out at sea', es: 'De una ciudad a una isla lejos en el mar', fa: 'از یک شهر به جزیره‌ای دور در بحر' }, { en: 'From the coast to the North Pole', es: 'De la costa al Polo Norte', fa: 'از ساحل به قطب شمال' }], answer: 0,
          why: { en: 'Short moves are the most common, like Diego\'s move from the farm town to the city.', es: 'Las mudanzas cortas son las más comunes, como la de Diego del pueblo a la ciudad.', fa: 'سفرهای کوتاه از همه عام‌تر هستند، مثل رفتن دیگو از قریه به شهر.' } },
        { q: { en: '"There are no jobs in my home town." What kind of cause of migration is this?', es: '"No hay trabajo en mi pueblo." ¿Qué tipo de causa de migración es esta?', fa: '«در قریهٔ من کار نیست.» این کدام نوع علت مهاجرت است؟' },
          choices: [{ en: 'Economic', es: 'Económica', fa: 'اقتصادی' }, { en: 'Environmental', es: 'Ambiental', fa: 'محیطی' }, { en: 'Political', es: 'Política', fa: 'سیاسی' }, { en: 'Sociocultural', es: 'Sociocultural', fa: 'اجتماعی و فرهنگی' }], answer: 0,
          why: { en: 'Jobs and money are economic causes. A drought or a flood would be environmental.', es: 'El trabajo y el dinero son causas económicas. Una sequía o una inundación serían ambientales.', fa: 'کار و پول علت‌های اقتصادی هستند. خشک‌سالی یا سیلاب علت محیطی است.' } }
      ],
      item: { icon: '✉️', name: { en: 'Diego\'s letter', es: 'La carta de Diego', fa: 'نامهٔ دیگو' } }
    }
  },

  scraps: [[30, 3], [1, 20], [30, 17]],
  smudges: [[10, 19], [22, 8]],

  challenge: {
    at: [13, 3],
    type: 'sort',
    stat: 'mov',
    title: { en: 'Push or pull?', es: '¿Expulsión o atracción?', fa: 'رانش یا کشش؟' },
    intro: { en: 'The Smudge mixed up the travelers\' reasons. Sort each card. Does it push people away from home, or pull them toward a new place?',
      es: 'El Borrón mezcló las razones de los viajeros. Ordena cada tarjeta. ¿Empuja a la gente lejos de su hogar o la atrae a un lugar nuevo?',
      fa: 'لکه دلیل‌های مسافران را مخلوط کرد. هر کارت را جدا کن. آیا مردم را از خانه دور می‌کند یا به طرف یک جای نو می‌کشد؟' },
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
    name: { en: 'The Tangle Smudge', es: 'El Borrón Enredado', fa: 'لکهٔ گره‌خورده' },
    appear: { en: 'The Tangle Smudge is hiding by the river dock in the south-east!', es: '¡El Borrón Enredado se esconde junto al muelle del río, en el sureste!', fa: 'لکهٔ گره‌خورده کنار بندر دریا در جنوب شرق پنهان است!' },
    taunt: { en: 'Hee hee! I tied every road in knots. Who can say why people move now?', es: '¡Ji ji! Até todos los caminos en nudos. ¿Quién sabe ahora por qué se muda la gente?', fa: 'هی هی! همهٔ راه‌ها را گره زدم. حالا کی می‌داند مردم چرا جابه‌جا می‌شوند؟' },
    win: { en: 'The knots fall loose. Atlas page 2.3 floats down, and a little canoe waits at the dock for you!', es: 'Los nudos se sueltan. ¡La página 2.3 del atlas cae, y una canoa pequeña te espera en el muelle!', fa: 'گره‌ها باز می‌شوند. صفحهٔ ۲.۳ اطلس پایین می‌آید و یک قایق کوچک در بندر منتظر توست!' },
    questions: [
      { q: { en: 'What is a push factor?', es: '¿Qué es un factor de expulsión?', fa: 'عامل رانش چیست؟' },
        choices: [{ en: 'A reason that makes a place hard to stay in', es: 'Una razón que hace difícil quedarse en un lugar', fa: 'دلیلی که ماندن در یک جا را سخت می‌کند' }, { en: 'A reason that makes another place look better', es: 'Una razón que hace que otro lugar se vea mejor', fa: 'دلیلی که جای دیگر را بهتر نشان می‌دهد' }, { en: 'A rule about who may enter a country', es: 'Una regla sobre quién puede entrar a un país', fa: 'قانونی دربارهٔ اینکه کی می‌تواند به کشور بیاید' }, { en: 'Money a worker sends to family at home', es: 'Dinero que un trabajador envía a su familia', fa: 'پولی که یک کارگر برای خانواده می‌فرستد' }], answer: 0,
        why: { en: 'No work, a long drought, a flood or danger can all push people away.', es: 'La falta de trabajo, una sequía, una inundación o el peligro pueden expulsar a la gente.', fa: 'نبودن کار، خشک‌سالی، سیلاب یا خطر همه مردم را دور می‌رانند.' } },
      { q: { en: 'What is a pull factor?', es: '¿Qué es un factor de atracción?', fa: 'عامل کشش چیست؟' },
        choices: [{ en: 'A reason that makes another place look better', es: 'Una razón que hace que otro lugar se vea mejor', fa: 'دلیلی که جای دیگر را بهتر نشان می‌دهد' }, { en: 'A storm that damages farmland', es: 'Una tormenta que daña los campos', fa: 'طوفانی که زمین را خراب می‌کند' }, { en: 'The cost of sending money', es: 'El costo de enviar dinero', fa: 'هزینهٔ فرستادن پول' }, { en: 'A limit on how many people may enter', es: 'Un límite de cuánta gente puede entrar', fa: 'حدی برای تعداد مردمی که می‌توانند بیایند' }], answer: 0,
        why: { en: 'Jobs, safety, good schools and family already there can all pull people in.', es: 'El trabajo, la seguridad, las buenas escuelas y la familia que ya está allí pueden atraer a la gente.', fa: 'کار، امنیت، مکتب خوب و خانواده‌ای که آنجاست همه مردم را می‌کشند.' } },
      { q: { en: 'What is a remittance?', es: '¿Qué es una remesa?', fa: 'حواله چیست؟' },
        choices: [{ en: 'Money a migrant sends back to family at home', es: 'Dinero que un migrante envía a su familia en casa', fa: 'پولی که مهاجر برای خانواده در وطن می‌فرستد' }, { en: 'Money one government gives to another', es: 'Dinero que un gobierno le da a otro', fa: 'پولی که یک دولت به دولت دیگر می‌دهد' }, { en: 'Money a company spends on a new factory', es: 'Dinero que una empresa gasta en una fábrica nueva', fa: 'پولی که یک شرکت برای فابریکهٔ نو خرج می‌کند' }, { en: 'Money a worker spends where they live', es: 'Dinero que un trabajador gasta donde vive', fa: 'پولی که کارگر همان جا که زندگی می‌کند خرج می‌کند' }], answer: 0,
        why: { en: 'A remittance is part of a worker\'s own pay, sent home to family.', es: 'Una remesa es parte del sueldo del trabajador, enviada a su familia.', fa: 'حواله بخشی از معاش خود کارگر است که برای خانواده فرستاده می‌شود.' } },
      { q: { en: 'Drought, floods and poor soil are which kind of cause of migration?', es: 'La sequía, las inundaciones y la tierra pobre son ¿qué tipo de causa de migración?', fa: 'خشک‌سالی، سیلاب و خاک ضعیف کدام نوع علت مهاجرت هستند؟' },
        choices: [{ en: 'Environmental', es: 'Ambiental', fa: 'محیطی' }, { en: 'Political', es: 'Política', fa: 'سیاسی' }, { en: 'Sociocultural', es: 'Sociocultural', fa: 'اجتماعی و فرهنگی' }, { en: 'Economic', es: 'Económica', fa: 'اقتصادی' }], answer: 0,
        why: { en: 'Environmental causes come from the land, water and weather.', es: 'Las causas ambientales vienen de la tierra, el agua y el clima.', fa: 'علت‌های محیطی از زمین، آب و هوا می‌آیند.' } },
      { q: { en: 'A town loses many young workers. What is likely to happen there?', es: 'Un pueblo pierde a muchos trabajadores jóvenes. ¿Qué es probable que pase allí?', fa: 'یک قریه بسیاری از کارگران جوانش را از دست می‌دهد. احتمالاً آنجا چه می‌شود؟' },
        choices: [{ en: 'Jobs are harder to fill and the school gets smaller', es: 'Es más difícil llenar los trabajos y la escuela se achica', fa: 'پیدا کردن کارگر سخت‌تر می‌شود و مکتب کوچک‌تر می‌شود' }, { en: 'The town gets more crowded', es: 'El pueblo se llena más', fa: 'قریه پرتر می‌شود' }, { en: 'The farms hire more workers', es: 'Los campos contratan más trabajadores', fa: 'زمین‌ها کارگر بیشتر می‌گیرند' }, { en: 'The buses fill up with new people', es: 'Los buses se llenan de gente nueva', fa: 'بس‌ها پر از مردم نو می‌شوند' }], answer: 0,
        why: { en: 'Farms may sit empty because fewer hands are left to work them.', es: 'Los campos pueden quedar vacíos porque quedan menos manos para trabajar.', fa: 'زمین‌ها شاید خالی بمانند چون دست‌های کمتری برای کار مانده است.' } },
      { q: { en: 'Many migrants from one small town live in the same city far away. What best explains that?', es: 'Muchos migrantes de un pueblo pequeño viven en la misma ciudad lejana. ¿Qué lo explica mejor?', fa: 'بسیاری از مهاجران یک قریهٔ کوچک در یک شهر دور زندگی می‌کنند. چه چیز این را بهتر توضیح می‌دهد؟' },
        choices: [{ en: 'People tend to go where relatives and neighbors already went', es: 'La gente suele ir a donde ya fueron sus parientes y vecinos', fa: 'مردم اکثراً جایی می‌روند که خویشاوندان و همسایه‌ها قبلاً رفته‌اند' }, { en: 'Buses go to only one city', es: 'Los buses van a una sola ciudad', fa: 'بس‌ها فقط به یک شهر می‌روند' }, { en: 'Every city has the same jobs', es: 'Todas las ciudades tienen los mismos trabajos', fa: 'همهٔ شهرها کارهای یکسان دارند' }, { en: 'Sending money costs the same everywhere', es: 'Enviar dinero cuesta lo mismo en todas partes', fa: 'فرستادن پول در همه جا یک قیمت دارد' }], answer: 0,
        why: { en: 'Links between relatives and neighbors form a network. Networks shape where people settle.', es: 'Los lazos entre parientes y vecinos forman una red. Las redes deciden dónde se queda la gente.', fa: 'پیوند میان خویشاوندان و همسایه‌ها یک شبکه می‌سازد. شبکه‌ها جای ماندن مردم را شکل می‌دهند.' } },
      { q: { en: 'What does remittance money pay for first?', es: '¿Qué paga primero el dinero de las remesas?', fa: 'پول حواله اول خرج چه می‌شود؟' },
        choices: [{ en: 'Food, rent, school fees and medicine', es: 'Comida, renta, la escuela y medicinas', fa: 'نان، کرایهٔ خانه، فیس مکتب و دوا' }, { en: 'Tools for a new business', es: 'Herramientas para un negocio nuevo', fa: 'افزار برای یک کار نو' }, { en: 'An extra room on the house', es: 'Un cuarto extra en la casa', fa: 'یک اتاق اضافه برای خانه' }, { en: 'Savings for a trip', es: 'Ahorros para un viaje', fa: 'پس‌انداز برای سفر' }], answer: 0,
        why: { en: 'Everyday needs come first. Tools and extra rooms come later, from what is left.', es: 'Primero van las necesidades diarias. Las herramientas y los cuartos vienen después, con lo que sobra.', fa: 'اول نیازهای روزانه است. افزار و اتاق اضافه بعداً از پولی که می‌ماند می‌آیند.' } },
      { q: { en: 'Why are remittances different from charity?', es: '¿Por qué las remesas son diferentes de la caridad?', fa: 'چرا حواله با خیرات فرق دارد؟' },
        choices: [{ en: 'The money is earned by work and then shared', es: 'El dinero se gana trabajando y luego se comparte', fa: 'پول با کار به دست می‌آید و بعد شریک می‌شود' }, { en: 'The money is sent by governments', es: 'El dinero lo envían los gobiernos', fa: 'پول را دولت‌ها می‌فرستند' }, { en: 'The money is always very small', es: 'El dinero siempre es muy poco', fa: 'پول همیشه خیلی کم است' }, { en: 'The money never leaves the city', es: 'El dinero nunca sale de la ciudad', fa: 'پول هیچ وقت از شهر بیرون نمی‌رود' }], answer: 0,
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
