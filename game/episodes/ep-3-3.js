/* WORLDWALKER · Episode 3.3 · Regional Connections (WG.5 / WG.6)
   A Silk Road market town. North: the railway and freight station (the Silk Road now).
   Middle: the old caravanserai and the bazaar. South: the old caravan road through the desert (the Silk Road then). */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'WG.6',
  title: { en: 'Regional Connections', es: 'Conexiones regionales', fa: 'پیوندهای منطقه‌ای' },
  place: { en: 'Caravan Crossroads', es: 'Cruce de Caravanas', fa: 'چهارراه کاروان' },
  intro: [
    { en: 'The Grump blew sand over the Caravan Crossroads! Trains, trucks and traders are all stuck.',
      es: '¡El Gruñón echó arena sobre el Cruce de Caravanas! Los trenes, los camiones y los comerciantes están atascados.',
      fa: 'غرغرو روی چهارراه کاروان ریگ پاشید! قطارها، موترهای باری و تاجران همه گیر مانده‌اند.' },
    { en: 'Talk to the museum guide, rail worker and truck driver. Then fix the compass stone.',
      es: 'Habla con la guía del museo, el trabajador del tren y la camionera. Luego arregla la piedra de la brújula.',
      fa: 'با رهنمای موزیم، کارگر خط آهن و رانندهٔ موتر باری گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [67.0, 39.65],
    start: [
      { en: 'Welcome to Samarkand, in Uzbekistan. Silk Road traders stopped here for centuries.',
        es: 'Bienvenido a Samarcanda, en Uzbekistán. Los comerciantes de la Ruta de la Seda paraban aquí.',
        fa: 'به سمرقند در ازبکستان خوش آمدی. تاجران راه ابریشم قرن‌ها اینجا می‌ماندند.' },
      { en: 'The Silk Road linked China to the Mediterranean Sea, over 4,000 miles away.',
        es: 'La Ruta de la Seda unía China con el mar Mediterráneo, a más de 6,000 kilómetros.',
        fa: 'راه ابریشم چین را به بحیرهٔ مدیترانه وصل می‌کرد، بیشتر از ۶۰۰۰ کیلومتر دورتر.' },
      { en: 'Paper, silk, spices and ideas all moved along these routes.',
        es: 'Papel, seda, especias e ideas viajaban por estas rutas.',
        fa: 'کاغذ، ابریشم، ادویه و فکرها همه از این راه‌ها می‌گذشتند.' }
    ],
    page: { en: 'Today, freight trains carry goods from China to Europe in about two weeks.',
      es: 'Hoy, trenes de carga llevan productos de China a Europa en unas dos semanas.',
      fa: 'امروز قطارهای باری کالا را در حدود دو هفته از چین به اروپا می‌برند.' }
  },

  map: [
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKAAAA',
    'KggggggggggggggggggJJJgXXggggAAA',
    'KgggggggggggggggxggJJJgXXgggAAAA',
    'K-----------------------------AA',
    'Kgggxggggggg:ggg:gggggggggggAAAA',
    'KgWWWWWWWWgg:ggg:ggYgggYggggAAAA',
    'KgWssssssWgg:ggg:gggggggggggAAAA',
    'KgWssOsssWgQQQgQQQgggggggggg~~AA',
    'KgWssssssWghdhghdhggggggggg~~.AA',
    'KgWssssssWssssssssssgoooogg~~.AA',
    'KgWWW::WWWsmmsmmsmmsgo2o2g~~ggAA',
    'Kgggg::gggssssssssssgoo2og~~gTAA',
    'Kgggg::gggssssssssssgo2oo~~gggAA',
    'Kgggg::gggsmmsmmsmms:ooooooogTAA',
    'Kgggg::gggssssssssss:gggggggggAA',
    'K:::::::::::::::::::::::::::::AA',
    'KsssssssssssssrsssssssssssssssAA',
    'Kssuuuusrssp~~~psssssuuuussrssAA',
    'Kssssssssss~~s~~uussssssssssssAA',
    'Ksrssssssssp~~~psssrsssssuuuusAA',
    'KssssssssuuussssssssssssssssssAA',
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrAA'
  ],
  start: [8, 4],

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): market stalls at the crossroads: trade grows where routes meet */
  build: [
    { id: 'stalls', kind: 'place', board: [9, 14], tile: 'm', ok: [[4, 14], [7, 14], [4, 16], [7, 16]], cost: { wood: 1 },
      name: { en: 'Market stalls', es: 'Puestos del mercado', fa: 'دکان‌های بازار' },
      ask: { en: 'On the [[silk road|Silk Road]], markets grew where trade routes meet, because every trader passes there. Build four market stalls at the crossroads, where the road from the caravanserai gate meets the old caravan road. Put one stall on each corner, next to the roads. Keep the roads open!',
        es: 'En la [[silk road|Ruta de la Seda]], los mercados crecieron donde se juntan las rutas de comercio, porque todos los comerciantes pasan por allí. Construye cuatro puestos de mercado en el cruce, donde el camino de la puerta del caravasar se junta con el viejo camino de caravanas. Pon un puesto en cada esquina, junto a los caminos. ¡Deja los caminos libres!',
        fa: 'در [[silk road|راه ابریشم]]، بازارها جایی بزرگ شدند که راه‌های تجارت به هم می‌رسند، چون هر تاجر از آن جا می‌گذرد. در چهارراه، جایی که سرک دروازهٔ کاروانسرا به سرک قدیمی کاروان می‌رسد، چهار دکان بازار بساز. در هر کنج یک دکان بگذار، کنار سرک‌ها. سرک‌ها را باز بگذار!' },
      why: { en: 'Right at the crossroads! Traders from every road will stop here.', es: '¡Justo en el cruce! Aquí pararán comerciantes de todos los caminos.', fa: 'درست در چهارراه! تاجران از هر سرک این جا می‌ایستند.' },
      wrong: { en: 'Not at the crossroads. Put each stall on a corner where the two roads meet: next to the road, not on it.', es: 'No está en el cruce. Pon cada puesto en una esquina donde se juntan los dos caminos: junto al camino, no encima.', fa: 'این جا چهارراه نیست. هر دکان را در کنجی بگذار که دو سرک به هم می‌رسند: کنار سرک، نه روی آن.' },
      wrongBy: [
        { x: 1, y: 17, w: 29, h: 4, t: { en: 'Out in the empty desert, far from the roads. No traders pass here, so nobody would buy.', es: 'En el desierto vacío, lejos de los caminos. Aquí no pasan comerciantes, así que nadie compraría.', fa: 'در صحرای خالی، دور از سرک‌ها. هیچ تاجری از این جا نمی‌گذرد، پس کسی چیزی نمی‌خرد.' } }
      ],
      done: { en: 'The market is open! Routes bring people, goods and money together. That is why cities like Samarkand grew rich right where trade routes met.', es: '¡El mercado está abierto! Las rutas juntan gente, mercancías y dinero. Por eso ciudades como Samarcanda se hicieron ricas justo donde se juntaban las rutas de comercio.', fa: 'بازار باز است! راه‌ها مردم، مال و پول را یکجا می‌کنند. برای همین شهرهایی مثل سمرقند درست جایی ثروتمند شدند که راه‌های تجارت به هم می‌رسیدند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [8, 12], at: [6, 7], decor: 'coinold',
      clue: { en: 'Map key: a well is a stone box with a roof. Find it in the caravanserai. Stand one step east.', es: 'Leyenda: un pozo es una caja de piedra con techo. Búscalo en el caravasar. Párate un paso al este.', fa: 'راهنمای نقشه: چاه یک قطی سنگی با سقف است. آن را در کاروانسرا پیدا کن. یک قدم شرقِ آن بایست.' },
      text: { en: 'You read the map key! Traders carried coins from China, Persia and Rome. Here is an old one.', es: '¡Leíste la leyenda! Los comerciantes llevaban monedas de China, Persia y Roma. Aquí hay una antigua.', fa: 'تو راهنمای نقشه را خواندی! تاجران سکه‌هایی از چین، فارس و روم داشتند. این یک سکهٔ کهنه است.' } },
    { clueAt: [12, 16], at: [17, 19], decor: 'fossil',
      clue: { en: 'From this note, walk 3 steps south, then 5 steps east, into the desert. Something is hidden in the sand.', es: 'Desde esta nota, camina 3 pasos al sur y luego 5 pasos al este, hacia el desierto. Algo está escondido en la arena.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، بعد ۵ قدم به شرق، به طرف صحرا. چیزی در ریگ پنهان است.' },
      text: { en: 'South is down and east is right! Long ago, a sea covered Central Asia. Here is a fossil shell.', es: '¡El sur está abajo y el este a la derecha! Hace mucho, un mar cubría Asia Central. Aquí hay un fósil de concha.', fa: 'جنوب پایین و شرق طرف راست است! خیلی وقت پیش، یک بحر آسیای میانه را پوشانده بود. این یک فسیل صدف است.' } }
  ],

  // only the Canoe (Episode 2.3) crosses the oasis pool on the old caravan road to the tiny island
  secret: { tool: 'canoe', at: [13, 18],
    text: { en: 'The canoe crossed the oasis pool! In an oasis, water comes up from under the desert. Silk Road caravans stopped at oases to drink and rest, and towns like Samarkand grew around them.',
      es: '¡La canoa cruzó el estanque del oasis! En un oasis, el agua sube desde debajo del desierto. Las caravanas de la Ruta de la Seda paraban en los oasis para beber y descansar, y ciudades como Samarcanda crecieron a su alrededor.',
      fa: 'قایق کوچک از حوض واحه گذشت! در واحه، آب از زیر صحرا بالا می‌آید. کاروان‌های راه ابریشم در واحه‌ها می‌ایستادند تا آب بنوشند و استراحت کنند، و شهرهایی مثل سمرقند در کنار آن‌ها بزرگ شدند.' } },

  words: {
    'silk road': { en: 'a web of old trade routes across Asia between China and Europe', es: 'una red de antiguas rutas de comercio por Asia, entre China y Europa', fa: 'شبکه‌ای از راه‌های قدیمی تجارت در آسیا میان چین و اروپا' },
    caravanserai: { en: 'a walled building where traders and their animals stopped safely for the night', es: 'un edificio con muros donde los comerciantes y sus animales paraban seguros por la noche', fa: 'ساختمان دیوارداری که تاجران و حیوان‌هایشان شب در آن امن می‌ماندند' },
    'freight train': { en: 'a train that carries goods, not people', es: 'un tren que lleva mercancías, no personas', fa: 'قطاری که مال می‌برد، نه مسافر' },
    'break of gauge': { en: 'a place where the width of the railway tracks changes, so cargo must move to a new train', es: 'un lugar donde cambia el ancho de las vías, así que la carga debe pasar a otro tren', fa: 'جایی که پهنای خط آهن تغییر می‌کند و بار باید به قطار دیگر برود' },
    pipeline: { en: 'a long pipe that carries oil, gas or water over a great distance', es: 'un tubo largo que lleva petróleo, gas o agua muy lejos', fa: 'نل درازی که تیل، گاز یا آب را تا راه دور می‌برد' },
    'european union': { en: 'a group of 27 European countries that work together on trade, laws and travel', es: 'un grupo de 27 países europeos que trabajan juntos en comercio, leyes y viajes', fa: 'گروهی از ۲۷ کشور اروپایی که در تجارت، قانون و سفر با هم کار می‌کنند' },
    oasis: { en: 'a green place in a desert where there is water, so crops can grow', es: 'un lugar verde en el desierto donde hay agua, así que pueden crecer cultivos', fa: 'جای سبز در صحرا که آب دارد و کشت در آن می‌روید' },
    landlocked: { en: 'having no coast on any ocean', es: 'sin costa en ningún océano', fa: 'بدون ساحل در هیچ اقیانوس' }
  },

  npcs: [
    {
      x: 7, y: 8,
      name: { en: 'Dilnoza', es: 'Dilnoza', fa: 'دلنوزا' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 2, hair: '#141010', shirt: '#2a7fb8', pants: '#3a2f45' },
      lines: [
        { en: 'This [[caravanserai|caravanserai]] kept traders safe at night. Thick walls closed around its courtyard.',
          es: 'Este [[caravanserai|caravasar]] protegía a los comerciantes por la noche. Muros gruesos rodeaban su patio.',
          fa: 'این [[caravanserai|کاروانسرا]] تاجران را شب در امان نگه می‌داشت. دیوارهای ضخیم دور حویلی‌اش بود.' },
        { en: 'The [[silk road|Silk Road]] was a web of many routes between China and Europe.',
          es: 'La [[silk road|Ruta de la Seda]] era una red de muchas rutas entre China y Europa.',
          fa: '[[silk road|راه ابریشم]] شبکه‌ای از راه‌های زیاد میان چین و اروپا بود.' },
        { en: 'Camels carried silk and spices. Ideas, languages and new foods traveled too.',
          es: 'Los camellos llevaban seda y especias. Las ideas, los idiomas y las comidas nuevas también viajaban.',
          fa: 'شترها ابریشم و ادویه می‌بردند. فکرها، زبان‌ها و غذاهای نو هم سفر می‌کردند.' },
        { en: 'Samarkand and Bukhara, here in Uzbekistan, grew rich as stops on these routes.',
          es: 'Samarcanda y Bujará, aquí en Uzbekistán, se hicieron ricas como paradas de estas rutas.',
          fa: 'سمرقند و بخارا، اینجا در ازبکستان، به عنوان منزل‌های این راه‌ها پولدار شدند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was a caravanserai for?', es: '¿Para qué servía un caravasar?', fa: 'کاروانسرا برای چه بود؟' },
        choices: [
          { ok: true, t: { en: 'A safe stop for the night', es: 'Una parada segura para pasar la noche', fa: 'منزل امن برای شب' },
            why: { en: 'Thick walls kept traders, animals and goods safe overnight.', es: 'Los muros gruesos protegían por la noche a los comerciantes, los animales y las mercancías.', fa: 'دیوارهای ضخیم تاجران، حیوان‌ها و مال را شب در امان نگه می‌داشتند.' } },
          { t: { en: 'A factory that made silk cloth', es: 'Una fábrica que hacía tela de seda', fa: 'فابریکه‌ای که تکهٔ ابریشمی می‌ساخت' },
            why: { en: 'Silk was carried through, but a caravanserai was a place to rest.', es: 'La seda pasaba por allí, pero un caravasar era un lugar para descansar.', fa: 'ابریشم از آنجا می‌گذشت، اما کاروانسرا جای استراحت بود.' } },
          { t: { en: 'A mine for gold and silver', es: 'Una mina de oro y plata', fa: 'معدن طلا و نقره' },
            why: { en: 'Mining happened elsewhere. This building was for travelers.', es: 'La minería ocurría en otros lugares. Este edificio era para viajeros.', fa: 'کار معدن جای دیگر بود. این ساختمان برای مسافران بود.' } }
        ]
      }
    },
    {
      x: 22, y: 2,
      name: { en: 'Timur', es: 'Timur', fa: 'تیمور' },
      role: { en: 'Freight rail worker', es: 'Trabajador de trenes de carga', fa: 'کارگر قطار باری' },
      remember: { ep: '3.2', t: { en: 'Hey, I know you! My friend Olga is a conductor on the Trans-Siberian. She says you put the stops back in order, from Moscow to Vladivostok, so her train could leave. Thank you!', es: '¡Oye, te conozco! Mi amiga Olga es conductora del Transiberiano. Dice que pusiste las paradas en orden otra vez, de Moscú a Vladivostok, para que su tren pudiera salir. ¡Gracias!', fa: 'هی، من تو را می‌شناسم! دوستم اولگا کنترولر قطار ترانس‌سیبری است. او می‌گوید تو ایستگاه‌ها را دوباره به ترتیب گذاشتی، از مسکو تا ولادی‌وستوک، تا قطارش حرکت کند. تشکر!' } },
      look: { skin: 3, hair: '#1b1410', shirt: '#e0782b', pants: '#2b3a4a' },
      lines: [
        { en: 'Today the Silk Road runs on rails! [[freight train|Freight trains]] carry containers between China and Europe.',
          es: '¡Hoy la Ruta de la Seda va sobre rieles! Los [[freight train|trenes de carga]] llevan contenedores entre China y Europa.',
          fa: 'امروز راه ابریشم روی خط آهن است! [[freight train|قطارهای باری]] کانتینرها را میان چین و اروپا می‌برند.' },
        { en: 'Many cross Kazakhstan. Trains are twice as fast as ships, and cheaper than planes.',
          es: 'Muchos cruzan Kazajistán. Los trenes son el doble de rápidos que los barcos, y más baratos que los aviones.',
          fa: 'بسیاری از قزاقستان می‌گذرند. قطار دو برابر از کشتی تیزتر و از طیاره ارزان‌تر است.' },
        { en: 'At the China border, the rails change width. That is a [[break of gauge|break of gauge]].',
          es: 'En la frontera con China, las vías cambian de ancho. Eso es un [[break of gauge|cambio de ancho de vía]].',
          fa: 'در سرحد چین پهنای خط آهن تغییر می‌کند. این [[break of gauge|تغییر پهنای خط آهن]] است.' },
        { en: 'Cranes move each container to a new train. Oil and gas go west by [[pipeline|pipeline]].',
          es: 'Las grúas pasan cada contenedor a otro tren. El petróleo y el gas van al oeste por [[pipeline|oleoductos y gasoductos]].',
          fa: 'جرثقیل‌ها هر کانتینر را به قطار دیگر می‌برند. تیل و گاز از راه [[pipeline|نل‌های انتقال]] به غرب می‌رود.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do companies send goods from China to Europe by freight train?', es: '¿Por qué las empresas mandan mercancías de China a Europa en tren de carga?', fa: 'چرا شرکت‌ها مال را با قطار باری از چین به اروپا می‌فرستند؟' },
        choices: [
          { ok: true, t: { en: 'Faster than a ship, cheaper than a plane', es: 'Más rápido que un barco, más barato que un avión', fa: 'از کشتی تیزتر، از طیاره ارزان‌تر' },
            why: { en: 'Trains sit in the middle: less time than ships, less money than planes.', es: 'Los trenes están en el medio: menos tiempo que los barcos, menos dinero que los aviones.', fa: 'قطار در میان است: وقت کمتر از کشتی، پول کمتر از طیاره.' } },
          { t: { en: 'Trains never stop at the borders on the way', es: 'Los trenes nunca paran en las fronteras del camino', fa: 'قطارها در راه هیچ وقت در سرحد نمی‌ایستند' },
            why: { en: 'They do stop. Where the rails change width, containers must be lifted across.', es: 'Sí paran. Donde cambia el ancho de la vía, hay que pasar los contenedores.', fa: 'می‌ایستند. جایی که پهنای خط آهن تغییر می‌کند، کانتینرها باید جابه‌جا شوند.' } },
          { t: { en: 'Trains are the only way to move heavy goods', es: 'Los trenes son la única forma de mover cosas pesadas', fa: 'قطار تنها راه بردن مال سنگین است' },
            why: { en: 'Ships, trucks and planes carry heavy goods too.', es: 'Los barcos, los camiones y los aviones también llevan cosas pesadas.', fa: 'کشتی، موتر باری و طیاره هم مال سنگین می‌برند.' } }
        ]
      }
    },
    {
      x: 14, y: 12,
      name: { en: 'Marta', es: 'Marta', fa: 'مارتا' },
      role: { en: 'Long-distance truck driver', es: 'Camionera de larga distancia', fa: 'رانندهٔ موتر باری راه دور' },
      look: { skin: 1, hair: '#b5652a', shirt: '#3fa34d', pants: '#22324f' },
      lines: [
        { en: 'My trips start at Rotterdam, in the Netherlands, where the Rhine River meets the sea.',
          es: 'Mis viajes empiezan en Róterdam, en los Países Bajos, donde el río Rin llega al mar.',
          fa: 'سفرهای من از روتردام در هالند شروع می‌شود، جایی که دریای راین به بحر می‌رسد.' },
        { en: 'Inside the [[european union|European Union]], I cross borders without stopping. Outside it, I wait.',
          es: 'Dentro de la [[european union|Unión Europea]], cruzo las fronteras sin parar. Fuera de ella, espero.',
          fa: 'داخل [[european union|اتحادیهٔ اروپا]]، بدون ایستادن از سرحد می‌گذرم. بیرون از آن، منتظر می‌مانم.' },
        { en: 'That makes trade faster. Cities grow where routes meet: ports, river crossings, rail hubs.',
          es: 'Eso hace el comercio más rápido. Las ciudades crecen donde se juntan las rutas: puertos, cruces de ríos, centros de trenes.',
          fa: 'این تجارت را تیزتر می‌کند. شهرها جایی بزرگ می‌شوند که راه‌ها به هم می‌رسند: بندرها، گذرگاه‌های دریا، مرکزهای خط آهن.' },
        { en: 'Routes pull in people and money. That helped Rotterdam, Vienna, Moscow and this town grow.',
          es: 'Las rutas atraen gente y dinero. Eso ayudó a crecer a Róterdam, Viena, Moscú y este pueblo.',
          fa: 'راه‌ها مردم و پول را جذب می‌کنند. این به رشد روتردام، ویانا، مسکو و این شهرک کمک کرد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do cities often grow where trade routes meet?', es: '¿Por qué las ciudades suelen crecer donde se juntan las rutas de comercio?', fa: 'چرا شهرها اکثراً جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند؟' },
        choices: [
          { ok: true, t: { en: 'Routes bring in people, goods and money', es: 'Las rutas traen gente, mercancías y dinero', fa: 'راه‌ها مردم، مال و پول می‌آورند' },
            why: { en: 'Workers, shops and warehouses grow up close to every busy junction.', es: 'Los trabajadores, las tiendas y los almacenes crecen cerca de cada cruce activo.', fa: 'کارگران، دکان‌ها و گدام‌ها نزدیک هر چهارراه پرکار پیدا می‌شوند.' } },
          { t: { en: 'Those places are far from every road', es: 'Esos lugares están lejos de todos los caminos', fa: 'آن جاها از همهٔ راه‌ها دور هستند' },
            why: { en: 'It is the opposite. These places sit right where roads meet.', es: 'Es al revés. Estos lugares están justo donde se juntan los caminos.', fa: 'برعکس است. این جاها درست جایی هستند که راه‌ها به هم می‌رسند.' } },
          { t: { en: 'Nobody wants to live close to busy trade', es: 'Nadie quiere vivir cerca del comercio activo', fa: 'هیچ کس نمی‌خواهد نزدیک تجارت پرکار زندگی کند' },
            why: { en: 'Trade brings jobs, so many people want to live near it.', es: 'El comercio trae trabajo, así que mucha gente quiere vivir cerca.', fa: 'تجارت کار می‌آورد، پس مردم زیادی می‌خواهند نزدیک آن زندگی کنند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 4, text: { en: 'CARAVANSERAI · A safe stop for traders, camels and horses. The gate is on the south side.',
      es: 'CARAVASAR · Una parada segura para comerciantes, camellos y caballos. La puerta está en el lado sur.',
      fa: 'کاروانسرا · منزل امن برای تاجران، شترها و اسپ‌ها. دروازه در طرف جنوب است.' } },
    { x: 16, y: 2, text: { en: 'FREIGHT STATION · Trains between China and Europe. Today the Silk Road runs on rails.',
      es: 'ESTACIÓN DE CARGA · Trenes entre China y Europa. Hoy la Ruta de la Seda va sobre rieles.',
      fa: 'ایستگاه قطار باری · قطارها میان چین و اروپا. امروز راه ابریشم روی خط آهن است.' } }
  ],

  /* the quest: Gulnora the weaver (gold !) -> old Berdi on the caravan road -> trade oasis fruit for silk thread with Mr. Li -> back to Gulnora */
  quest: {
    stat: 'mov',
    title: { en: 'Thread for the Carpet', es: 'Hilo para la alfombra', fa: 'تار برای قالین' },
    giver: {
      x: 14, y: 9,
      name: { en: 'Gulnora', es: 'Gulnora', fa: 'گلنوره' },
      role: { en: 'Carpet weaver', es: 'Tejedora de alfombras', fa: 'قالین‌باف' },
      look: { skin: 3, hair: '#141010', shirt: '#9b2d5a', pants: '#3a2f45', style: 'long', hat: '#d9a54a' },
      lines: [
        { en: 'The Grump\'s sandstorm ruined my silk thread. I cannot finish this carpet without it!',
          es: '¡La tormenta de arena del Gruñón arruinó mi hilo de seda! No puedo terminar esta alfombra sin él.',
          fa: 'توفان ریگ غرغرو تار ابریشمی مرا خراب کرد. بدون آن نمی‌توانم این قالین را تمام کنم!' },
        { en: 'A silk trader from China just came. First, ask old Berdi how to trade.',
          es: 'Acaba de llegar un comerciante de seda de China. Pero primero, pregúntale al viejo Berdi cómo comerciar.',
          fa: 'یک تاجر ابریشم از چین تازه آمده. اما اول از بابه بردی بپرس که چطور سودا کنی.' },
        { en: 'Berdi leads camels on the old caravan road, south of the bazaar.',
          es: 'Berdi guía camellos en el viejo camino de caravanas, al sur del bazar.',
          fa: 'بردی در راه قدیمی کاروان، جنوب بازار، شتر می‌برد.' }
      ],
      wait: { en: 'Old Berdi is on the old caravan road, in the desert south of the bazaar.',
        es: 'El viejo Berdi está en el viejo camino de caravanas, en el desierto al sur del bazar.',
        fa: 'بابه بردی در راه قدیمی کاروان، در صحرای جنوب بازار است.' },
      thanks: { en: 'Silk for fruit! On the [[silk road|Silk Road]], each side gave what it had plenty of.',
        es: '¡Seda por fruta! En la [[silk road|Ruta de la Seda]], cada lado daba lo que tenía de sobra.',
        fa: 'ابریشم در بدل میوه! در [[silk road|راه ابریشم]]، هر طرف چیزی را می‌داد که زیاد داشت.' }
    },
    contact: {
      x: 4, y: 17,
      name: { en: 'Old Berdi', es: 'El viejo Berdi', fa: 'بابه بردی' },
      role: { en: 'Camel driver', es: 'Camellero', fa: 'ساربان' },
      look: { skin: 4, hair: '#d8d4cc', shirt: '#c98a1c', pants: '#5a3a22', hat: '#f0ebe0' },
      lines: [
        { en: 'My family led caravans for hundreds of years. Here is our secret.',
          es: 'Mi familia guió caravanas por cientos de años. Este es nuestro secreto.',
          fa: 'خانوادهٔ من صدها سال کاروان برده‌اند. راز ما این است.' },
        { en: 'A trader wants what his home does not have.',
          es: 'Un comerciante quiere lo que no hay en su tierra.',
          fa: 'تاجر چیزی را می‌خواهد که در وطنش نیست.' },
        { en: 'Mr. Li comes from China, where silk is made. So do not offer him silk!',
          es: 'El señor Li viene de China, donde se hace la seda. ¡Así que no le ofrezcas seda!',
          fa: 'آقای لی از چین آمده، جایی که ابریشم ساخته می‌شود. پس به او ابریشم پیشنهاد نکن!' },
        { en: 'Offer fruit from our [[oasis|oasis]] farms. He waits at the freight station, in the north-east.',
          es: 'Ofrécele fruta de nuestras granjas del [[oasis|oasis]]. Él espera en la estación de carga, en el noreste.',
          fa: 'میوهٔ زمین‌های [[oasis|واحه]] ما را پیشنهاد کن. او در ایستگاه قطار باری، در شمال شرق منتظر است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 26, y: 4,
        name: { en: 'Mr. Li', es: 'Señor Li', fa: 'آقای لی' },
        role: { en: 'Silk trader from China', es: 'Comerciante de seda de China', fa: 'تاجر ابریشم از چین' },
        look: { skin: 1, hair: '#141010', shirt: '#2f6fd6', pants: '#2b2b3a' },
        lines: [
          { en: 'Ni hao! I came west on the freight train from China, with fine silk thread.',
            es: '¡Ni hao! Vine al oeste en el tren de carga desde China, con hilo de seda fino.',
            fa: 'نی هاو! با قطار باری از چین به طرف غرب آمدم، با تار ابریشمی خوب.' },
          { en: 'This land is [[landlocked|landlocked]], so goods come by train and camel, not by ship.',
            es: 'Esta tierra está [[landlocked|sin salida al mar]], así que las cosas llegan en tren y en camello, no en barco.',
            fa: 'این سرزمین [[landlocked|محاط به خشکه]] است، پس جنس‌ها با قطار و شتر می‌آیند، نه با کشتی.' }
        ]
      },
      q: { en: 'Back home in China, we make plenty of silk. What will you give me for this thread?',
        es: 'En mi tierra, China, hacemos mucha seda. ¿Qué me das por este hilo?',
        fa: 'در وطن ما، چین، ابریشم زیاد می‌سازیم. در بدل این تار به من چه می‌دهی؟' },
      choices: [
        { ok: true, at: [22, 11], icon: '🍈', t: { en: 'Sweet melons and dried apricots from the oasis farms', es: 'Melones dulces y albaricoques secos de las granjas del oasis', fa: 'خربوزهٔ شیرین و زردآلوی خشک از زمین‌های واحه' },
          why: { en: 'Sweet fruit from the oasis! Your farms grow plenty of it, and I cannot easily get it at home. Here is your silk thread. Each side gets something new.', es: '¡Fruta dulce del oasis! Sus granjas dan mucha, y yo no la consigo fácil en mi tierra. Aquí tienes tu hilo de seda. Cada lado recibe algo nuevo.', fa: 'میوهٔ شیرین واحه! زمین‌های شما میوهٔ زیاد می‌دهند، و من آن را در وطنم آسان پیدا نمی‌کنم. بگیر، این تار ابریشمی تو. هر طرف چیز نو می‌گیرد.' } },
        { at: [25, 2], icon: '🧣', t: { en: 'A roll of silk cloth', es: 'Un rollo de tela de seda', fa: 'یک توپ تکهٔ ابریشمی' },
          why: { en: 'That silk came on my own train! China already makes plenty of silk. I do not need more of what I sell.', es: '¡Esa seda llegó en mi propio tren! China ya hace mucha seda. No necesito más de lo que vendo.', fa: 'این ابریشم با قطار خود من آمده! چین خودش ابریشم زیاد می‌سازد. من به چیزی که خودم می‌فروشم ضرورت ندارم.' } },
        { at: [22, 17], icon: '🪨', t: { en: 'A bag of desert sand', es: 'Una bolsa de arena del desierto', fa: 'یک خلته ریگ بیابان' },
          why: { en: 'Sand? It is everywhere in this desert, and China has big deserts too. Nobody carries sand on a long trip!', es: '¿Arena? Hay por todas partes en este desierto, y China también tiene grandes desiertos. ¡Nadie lleva arena en un viaje largo!', fa: 'ریگ؟ در این بیابان همه جا ریگ است، و چین هم بیابان‌های بزرگ دارد. هیچ کس در یک سفر دور ریگ نمی‌برد!' } }
      ],
      item: { icon: '🧵', name: { en: 'Silk thread', es: 'Hilo de seda', fa: 'تار ابریشمی' } }
    }
  },

  scraps: [[3, 6], [29, 8], [1, 20]],
  smudges: [[8, 18], [25, 6], [24, 15]],

  challenge: {
    at: [17, 11],
    type: 'carry', // in the world; the card version (sort) is the fallback
    zones: [{ bin: 'goods', x: 10, y: 11, w: 4, h: 2 }, { bin: 'ideas', x: 1, y: 11, w: 4, h: 2 }, { bin: 'people', x: 17, y: 16, w: 4, h: 2 }],
    stat: 'reg',
    title: { en: 'What traveled the Silk Road?', es: '¿Qué viajaba por la Ruta de la Seda?', fa: 'چه چیز در راه ابریشم سفر می‌کرد؟' },
    intro: { en: 'The Grump buried the bazaar\'s old record book in sand! Sort each card. Was it a good that was traded, an idea that spread, or a person who traveled?',
      es: '¡El Gruñón enterró en la arena el viejo libro de registro del bazar! Ordena cada tarjeta. ¿Era una mercancía que se vendía, una idea que se extendía o una persona que viajaba?',
      fa: 'غرغرو کتاب کهنهٔ ثبت بازار را زیر ریگ کرد! هر کارت را جدا کن. آیا مالی بود که خرید و فروش می‌شد، فکری که پخش می‌شد، یا کسی که سفر می‌کرد؟' },
    bins: [
      { id: 'goods', icon: '📦', label: { en: 'Goods', es: 'Mercancías', fa: 'مال' }, sub: { en: 'things bought and sold', es: 'cosas que se compran y venden', fa: 'چیزهایی که خرید و فروش می‌شوند' } },
      { id: 'ideas', icon: '💡', label: { en: 'Ideas', es: 'Ideas', fa: 'فکرها' }, sub: { en: 'knowledge and ways of life', es: 'saberes y formas de vivir', fa: 'دانش و روش‌های زندگی' } },
      { id: 'people', icon: '🐫', label: { en: 'People', es: 'Personas', fa: 'مردم' }, sub: { en: 'who made the journey', es: 'quienes hacían el viaje', fa: 'کسانی که سفر می‌کردند' } }
    ],
    items: [
      { bin: 'goods', t: { en: 'Silk cloth from China', es: 'Tela de seda de China', fa: 'تکهٔ ابریشمی از چین' }, why: { en: 'Silk was sold from town to town, so it is a good.', es: 'La seda se vendía de pueblo en pueblo, así que es una mercancía.', fa: 'ابریشم از شهری به شهر دیگر فروخته می‌شد، پس مال است.' } },
      { bin: 'goods', t: { en: 'Spices like pepper and cinnamon', es: 'Especias como pimienta y canela', fa: 'ادویه مثل مرچ سیاه و دارچین' }, why: { en: 'Spices were bought and sold, so they are goods.', es: 'Las especias se compraban y vendían, así que son mercancías.', fa: 'ادویه خرید و فروش می‌شد، پس مال است.' } },
      { bin: 'goods', t: { en: 'Glass bowls from the Mediterranean', es: 'Tazones de vidrio del Mediterráneo', fa: 'کاسه‌های شیشه‌ای از مدیترانه' }, why: { en: 'Glass traveled east to be sold, so it is a good.', es: 'El vidrio viajaba al este para venderse, así que es una mercancía.', fa: 'شیشه برای فروش به شرق می‌رفت، پس مال است.' } },
      { bin: 'ideas', t: { en: 'How to make paper', es: 'Cómo hacer papel', fa: 'روش ساختن کاغذ' }, why: { en: 'Papermaking is knowledge. It spread west from China.', es: 'Hacer papel es un saber. Se extendió al oeste desde China.', fa: 'ساختن کاغذ دانش است. از چین به غرب پخش شد.' } },
      { bin: 'ideas', t: { en: 'New words and languages', es: 'Palabras e idiomas nuevos', fa: 'کلمه‌ها و زبان‌های نو' }, why: { en: 'Words are not sold in a sack. They spread as ideas.', es: 'Las palabras no se venden en un saco. Se extienden como ideas.', fa: 'کلمه‌ها در بوجی فروخته نمی‌شوند. مثل فکر پخش می‌شوند.' } },
      { bin: 'ideas', t: { en: 'Stories, music and songs', es: 'Cuentos, música y canciones', fa: 'قصه‌ها، موسیقی و آهنگ‌ها' }, why: { en: 'Stories and songs move from person to person. They are ideas.', es: 'Los cuentos y las canciones pasan de persona a persona. Son ideas.', fa: 'قصه‌ها و آهنگ‌ها از یک نفر به نفر دیگر می‌روند. فکر هستند.' } },
      { bin: 'people', t: { en: 'Merchants who bought and sold', es: 'Mercaderes que compraban y vendían', fa: 'سوداگرانی که خرید و فروش می‌کردند' }, why: { en: 'Merchants are people who made the journey.', es: 'Los mercaderes son personas que hacían el viaje.', fa: 'سوداگران مردمی بودند که سفر می‌کردند.' } },
      { bin: 'people', t: { en: 'Camel drivers who led the caravans', es: 'Camelleros que guiaban las caravanas', fa: 'ساربانانی که کاروان را رهبری می‌کردند' }, why: { en: 'Camel drivers walked the routes, so they are people.', es: 'Los camelleros caminaban las rutas, así que son personas.', fa: 'ساربانان در این راه‌ها پیاده می‌رفتند، پس مردم هستند.' } },
      { bin: 'people', t: { en: 'Travelers who wrote about what they saw', es: 'Viajeros que escribían sobre lo que veían', fa: 'مسافرانی که دربارهٔ دیده‌هایشان می‌نوشتند' }, why: { en: 'These travelers crossed the routes and told others about them.', es: 'Estos viajeros cruzaron las rutas y se las contaron a otros.', fa: 'این مسافران از راه‌ها گذشتند و به دیگران از آن گفتند.' } }
    ],
    success: { en: 'The record book is clean again! Goods, ideas and people all moved along the Silk Road.', es: '¡El libro de registro vuelve a estar limpio! Mercancías, ideas y personas se movían por la Ruta de la Seda.', fa: 'کتاب ثبت دوباره پاک شد! مال، فکر و مردم همه در راه ابریشم حرکت می‌کردند.' }
  },

  boss: {
    at: [25, 17],
    stat: 'mov',
    need: 3,
    name: { en: 'The Sandstorm Grump', es: 'El Gruñón de Arena', fa: 'غرغروی توفان ریگ' },
    appear: { en: 'The Sandstorm Grump is hiding on the old caravan road in the desert!', es: '¡El Gruñón de Arena se esconde en el viejo camino de caravanas, en el desierto!', fa: 'غرغروی توفان ریگ در راه قدیمی کاروان در صحرا پنهان است!' },
    taunt: { en: 'Whirrr! I buried every road, rail and pipe in sand. Nothing can move now!', es: '¡Zummm! Enterré en arena todos los caminos, rieles y tubos. ¡Ya nada se puede mover!', fa: 'ووووز! همهٔ راه‌ها، خط‌های آهن و نل‌ها را زیر ریگ کردم. حالا هیچ چیز حرکت نمی‌کند!' },
    win: { en: 'The sand settles. Atlas page 3.3 floats down, with a Rail Pass tucked inside!', es: 'La arena se calma. ¡La página 3.3 del atlas cae, con un pase de tren adentro!', fa: 'ریگ آرام می‌شود. صفحهٔ ۳.۳ اطلس پایین می‌آید و یک کارت قطار در آن است!' },
    questions: [
      { q: { en: 'What was the Silk Road?', es: '¿Qué era la Ruta de la Seda?', fa: 'راه ابریشم چه بود؟' },
        choices: [{ en: 'Many trade routes between China and Europe', es: 'Muchas rutas de comercio entre China y Europa', fa: 'راه‌های زیاد تجارت میان چین و اروپا' }, { en: 'One straight stone road from China to Spain', es: 'Un solo camino recto de piedra de China a España', fa: 'یک سرک سنگی مستقیم از چین تا اسپانیا' }, { en: 'A long river that carried silk to Europe', es: 'Un río largo que llevaba seda a Europa', fa: 'یک دریای دراز که ابریشم را به اروپا می‌برد' }, { en: 'A railway built 100 years ago', es: 'Un ferrocarril construido hace 100 años', fa: 'خط آهنی که ۱۰۰ سال پیش ساخته شد' }], answer: 0,
        why: { en: 'Maps often draw one line, but there were many branches.', es: 'Los mapas suelen dibujar una línea, pero había muchas ramas.', fa: 'نقشه‌ها اکثراً یک خط می‌کشند، اما شاخه‌های زیادی داشت.' } },
      { q: { en: 'A caravanserai was a building where traders could...', es: 'Un caravasar era un edificio donde los comerciantes podían...', fa: 'کاروانسرا ساختمانی بود که تاجران می‌توانستند...' },
        choices: [{ en: 'stop safely for the night', es: 'parar seguros por la noche', fa: 'شب در امان بمانند' }, { en: 'make and sell fine silk cloth', es: 'hacer y vender tela fina de seda', fa: 'تکهٔ ابریشمی خوب بسازند و بفروشند' }, { en: 'dig for gold and silver', es: 'buscar oro y plata', fa: 'طلا و نقره بکنند' }, { en: 'grow cotton in the desert', es: 'cultivar algodón en el desierto', fa: 'در صحرا پخته بکارند' }], answer: 0,
        why: { en: 'Thick walls closed around a courtyard where animals were watered and unloaded.', es: 'Muros gruesos rodeaban un patio donde los animales bebían y los descargaban.', fa: 'دیوارهای ضخیم دور یک حویلی بود که حیوان‌ها آنجا آب می‌خوردند و بارشان پایین می‌شد.' } },
      { q: { en: 'Samarkand and Bukhara grew rich on the caravan trade. Which country are they in?', es: 'Samarcanda y Bujará se hicieron ricas con el comercio de caravanas. ¿En qué país están?', fa: 'سمرقند و بخارا از تجارت کاروانی پولدار شدند. در کدام کشور هستند؟' },
        choices: [{ en: 'Uzbekistan', es: 'Uzbekistán', fa: 'ازبکستان' }, { en: 'Kazakhstan', es: 'Kazajistán', fa: 'قزاقستان' }, { en: 'Russia', es: 'Rusia', fa: 'روسیه' }, { en: 'China', es: 'China', fa: 'چین' }], answer: 0,
        why: { en: 'Both cities are in Uzbekistan, in Central Asia.', es: 'Las dos ciudades están en Uzbekistán, en Asia Central.', fa: 'هر دو شهر در ازبکستان، در آسیای میانه هستند.' } },
      { q: { en: 'Freight trains from China to Europe are useful because they are...', es: 'Los trenes de carga de China a Europa son útiles porque son...', fa: 'قطارهای باری از چین به اروپا مفید هستند چون...' },
        choices: [{ en: 'faster than ships and cheaper than planes', es: 'más rápidos que los barcos y más baratos que los aviones', fa: 'از کشتی تیزتر و از طیاره ارزان‌تر هستند' }, { en: 'slower than ships but cheaper', es: 'más lentos que los barcos pero más baratos', fa: 'از کشتی کندتر اما ارزان‌تر هستند' }, { en: 'able to cross every border without stopping', es: 'capaces de cruzar todas las fronteras sin parar', fa: 'بدون ایستادن از هر سرحد می‌گذرند' }, { en: 'the only way to move heavy cargo', es: 'la única forma de mover carga pesada', fa: 'تنها راه بردن بار سنگین هستند' }], answer: 0,
        why: { en: 'They take less than half the time of a ship and cost less than air freight.', es: 'Tardan menos de la mitad que un barco y cuestan menos que el avión.', fa: 'کمتر از نصف وقت کشتی را می‌گیرند و از طیاره ارزان‌تر هستند.' } },
      { q: { en: 'Inside the European Union, a truck crossing a border is usually...', es: 'Dentro de la Unión Europea, un camión que cruza una frontera normalmente...', fa: 'داخل اتحادیهٔ اروپا، موتر باری که از سرحد می‌گذرد معمولاً...' },
        choices: [{ en: 'waved through with no checkpoint stop', es: 'pasa sin parar en un puesto de control', fa: 'بدون ایستادن در پوستهٔ تلاشی می‌گذرد' }, { en: 'stopped and taxed at every border crossing', es: 'para y paga impuestos en cada frontera', fa: 'در هر سرحد می‌ایستد و مالیه می‌دهد' }, { en: 'checked by two governments', es: 'es revisado por dos gobiernos', fa: 'توسط دو دولت تلاشی می‌شود' }, { en: 'not allowed to cross', es: 'no puede cruzar', fa: 'اجازهٔ گذشتن ندارد' }], answer: 0,
        why: { en: 'Dropping border checks was one of the things the members agreed on. It makes trade faster.', es: 'Quitar los controles en las fronteras fue uno de los acuerdos de los miembros. Hace el comercio más rápido.', fa: 'برداشتن تلاشی سرحد یکی از توافق‌های اعضا بود. تجارت را تیزتر می‌کند.' } },
      { q: { en: 'What is a pipeline?', es: '¿Qué es un oleoducto o gasoducto?', fa: 'نل انتقال چیست؟' },
        choices: [{ en: 'A long pipe for oil, gas or water', es: 'Un tubo largo para petróleo, gas o agua', fa: 'نل دراز برای تیل، گاز یا آب' }, { en: 'A train car that carries grain and coal', es: 'Un vagón de tren que lleva granos y carbón', fa: 'واگون قطار که غله و ذغال می‌برد' }, { en: 'A narrow canal that carries boats', es: 'Un canal angosto que lleva barcos', fa: 'کانال باریکی که کشتی‌ها را می‌برد' }, { en: 'A road for trucks', es: 'Un camino para camiones', fa: 'سرکی برای موترهای باری' }], answer: 0,
        why: { en: 'Pipelines carry oil and gas from Russia and Central Asia for thousands of miles.', es: 'Los oleoductos y gasoductos llevan petróleo y gas desde Rusia y Asia Central por miles de millas.', fa: 'نل‌های انتقال تیل و گاز را از روسیه و آسیای میانه هزاران میل می‌برند.' } },
      { q: { en: 'The Channel Tunnel carries trains under the sea between which two countries?', es: 'El túnel del Canal lleva trenes bajo el mar entre ¿qué dos países?', fa: 'تونل کانال مانش قطارها را از زیر بحر میان کدام دو کشور می‌برد؟' },
        choices: [{ en: 'England and France', es: 'Inglaterra y Francia', fa: 'انگلستان و فرانسه' }, { en: 'Spain and Morocco', es: 'España y Marruecos', fa: 'اسپانیا و مراکش' }, { en: 'Norway and Sweden', es: 'Noruega y Suecia', fa: 'ناروی و سویدن' }, { en: 'Russia and China', es: 'Rusia y China', fa: 'روسیه و چین' }], answer: 0,
        why: { en: 'It opened in 1994. The trip under the water takes about 35 minutes.', es: 'Se abrió en 1994. El viaje bajo el agua dura unos 35 minutos.', fa: 'در سال ۱۹۹۴ باز شد. سفر زیر آب حدود ۳۵ دقیقه طول می‌کشد.' } },
      { q: { en: 'Why do cities often grow where trade routes meet?', es: '¿Por qué las ciudades suelen crecer donde se juntan las rutas de comercio?', fa: 'چرا شهرها اکثراً جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند؟' },
        choices: [{ en: 'Routes bring in people, goods and money', es: 'Las rutas traen gente, mercancías y dinero', fa: 'راه‌ها مردم، مال و پول می‌آورند' }, { en: 'Those places are far from all the roads', es: 'Esos lugares están lejos de todos los caminos', fa: 'آن جاها از همهٔ راه‌ها دور هستند' }, { en: 'Tall mountains stop the people from leaving', es: 'Las montañas altas no dejan salir a la gente', fa: 'کوه‌های بلند نمی‌گذارند مردم بروند' }, { en: 'Trade routes have no workers', es: 'Las rutas de comercio no tienen trabajadores', fa: 'راه‌های تجارت کارگر ندارند' }], answer: 0,
        why: { en: 'Ports, river crossings and rail hubs pull people and money together.', es: 'Los puertos, los cruces de ríos y los centros de trenes juntan gente y dinero.', fa: 'بندرها، گذرگاه‌های دریا و مرکزهای خط آهن مردم و پول را یکجا می‌کنند.' } }
    ]
  },

  learned: [
    { en: 'The [[silk road|Silk Road]] was a web of trade routes. [[caravanserai|Caravanserais]] gave traders safe stops, and cities like Samarkand and Bukhara grew rich.', es: 'La [[silk road|Ruta de la Seda]] era una red de rutas de comercio. Los [[caravanserai|caravasares]] daban paradas seguras, y ciudades como Samarcanda y Bujará se hicieron ricas.', fa: '[[silk road|راه ابریشم]] شبکه‌ای از راه‌های تجارت بود. [[caravanserai|کاروانسراها]] منزل امن برای تاجران بودند و شهرهایی مثل سمرقند و بخارا پولدار شدند.' },
    { en: 'Goods, ideas and people all traveled the routes. Today [[freight train|freight trains]], trucks, ships and [[pipeline|pipelines]] link Europe, Russia and Central Asia.', es: 'Mercancías, ideas y personas viajaban por las rutas. Hoy [[freight train|trenes de carga]], camiones, barcos y [[pipeline|oleoductos]] unen Europa, Rusia y Asia Central.', fa: 'مال، فکر و مردم همه در این راه‌ها سفر می‌کردند. امروز [[freight train|قطارهای باری]]، موترهای باری، کشتی‌ها و [[pipeline|نل‌های انتقال]] اروپا، روسیه و آسیای میانه را وصل می‌کنند.' },
    { en: 'Cities grow where trade routes meet. Inside the [[european union|European Union]], trucks cross borders without stopping.', es: 'Las ciudades crecen donde se juntan las rutas de comercio. Dentro de la [[european union|Unión Europea]], los camiones cruzan fronteras sin parar.', fa: 'شهرها جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند. داخل [[european union|اتحادیهٔ اروپا]] موترهای باری بدون ایستادن از سرحد می‌گذرند.' }
  ],
  reflect: {
    q: { en: 'Think about a store or market near you. What is one thing sold there that traveled a long way? Where do you think it came from, and how did it travel?', es: 'Piensa en una tienda o mercado cerca de ti. ¿Qué cosa que se vende allí viajó muy lejos? ¿De dónde crees que vino y cómo viajó?', fa: 'به یک دکان یا بازار نزدیک خود فکر کن. یک چیزی که آنجا فروخته می‌شود و راه درازی آمده چیست؟ فکر می‌کنی از کجا آمده و چطور سفر کرده؟' },
    starter: { en: 'One thing near me that traveled a long way is', es: 'Una cosa cerca de mí que viajó muy lejos es', fa: 'یک چیز نزدیک من که راه درازی آمده' }
  }
};
