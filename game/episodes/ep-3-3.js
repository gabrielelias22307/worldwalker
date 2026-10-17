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
    { en: 'Pip: "The Smudge blew sand over the Caravan Crossroads! Trains, trucks and traders are all stuck. Talk to the museum guide, the rail worker and the truck driver. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón echó arena sobre el Cruce de Caravanas! Los trenes, los camiones y los comerciantes están atascados. Habla con la guía del museo, el trabajador del tren y la camionera. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه روی چهارراه کاروان ریگ پاشید! قطارها، موترهای باری و تاجران همه گیر مانده‌اند. با رهنمای موزیم، کارگر خط آهن و رانندهٔ موتر باری گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  map: [
    'KKKKKKKKKKKKKKKKKKKKKKKKKKKKAAAA',
    'KggggggggggggggggggJJJgXXggAAAAA',
    'KgggggggggggggggxggJJJgXXgggAAAA',
    'K-----------------------------AA',
    'Kgggxggggggg:ggg:gggggggggggAAAA',
    'KgWWWWWWWWgg:ggg:gggggggggggAAAA',
    'KgWssssssWgg:ggg:gggggggggggAAAA',
    'KgWssOsssWgQQQgQQQgggggggggg~~AA',
    'KgWssssssWghdhghdhggggggggg~~gAA',
    'KgWssssssWssssssssssgoooogg~~gAA',
    'KgWWW::WWWsmmsmmsmmsgo2o2g~~ggAA',
    'Kgggg::gggssssssssssgoo2og~~ggAA',
    'Kgggg::gggssssssssssgo2oo~~gggAA',
    'Kgggg::gggsmmsmmsmms:oooooooggAA',
    'Kgggg::gggssssssssss:gggggggggAA',
    'K:::::::::::::::::::::::::::::AA',
    'KsssssssssssssrsssssssssssssssAA',
    'KssuuuusrssssssssssssuuuussrssAA',
    'KssssssssssssuuuuussssssssssssAA',
    'KsrssssssssssssssssrsssssuuuusAA',
    'KssssssssuuussssssssssssssssssAA',
    'rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrAA'
  ],
  start: [8, 4],

  words: {
    'silk road': { en: 'a web of old trade routes across Asia between China and Europe', es: 'una red de antiguas rutas de comercio por Asia, entre China y Europa', fa: 'شبکه‌ای از راه‌های قدیمی تجارت در آسیا میان چین و اروپا' },
    caravanserai: { en: 'a walled building where traders and their animals stopped safely for the night', es: 'un edificio con muros donde los comerciantes y sus animales paraban seguros por la noche', fa: 'ساختمان دیوارداری که تاجران و حیوان‌هایشان شب در آن امن می‌ماندند' },
    'freight train': { en: 'a train that carries goods, not people', es: 'un tren que lleva mercancías, no personas', fa: 'قطاری که مال می‌برد، نه مسافر' },
    'break of gauge': { en: 'a place where the width of the railway tracks changes, so cargo must move to a new train', es: 'un lugar donde cambia el ancho de las vías, así que la carga debe pasar a otro tren', fa: 'جایی که پهنای خط آهن تغییر می‌کند و بار باید به قطار دیگر برود' },
    pipeline: { en: 'a long pipe that carries oil, gas or water over a great distance', es: 'un tubo largo que lleva petróleo, gas o agua muy lejos', fa: 'نل درازی که تیل، گاز یا آب را تا راه دور می‌برد' },
    'european union': { en: 'a group of 27 European countries that work together on trade, laws and travel', es: 'un grupo de 27 países europeos que trabajan juntos en comercio, leyes y viajes', fa: 'گروهی از ۲۷ کشور اروپایی که در تجارت، قانون و سفر با هم کار می‌کنند' }
  },

  npcs: [
    {
      x: 7, y: 8,
      name: { en: 'Dilnoza', es: 'Dilnoza', fa: 'دلنوزا' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'رهنمای موزیم' },
      look: { skin: 2, hair: '#141010', shirt: '#2a7fb8', pants: '#3a2f45' },
      lines: [
        { en: 'This old building is a [[caravanserai|caravanserai]]. Traders stopped here safely for the night. Thick walls closed around this courtyard. Camels and horses drank at the well and were unloaded here.',
          es: 'Este edificio antiguo es un [[caravanserai|caravasar]]. Aquí los comerciantes paraban seguros por la noche. Muros gruesos rodeaban este patio. Los camellos y caballos bebían en el pozo y aquí los descargaban.',
          fa: 'این ساختمان قدیمی یک [[caravanserai|کاروانسرا]] است. تاجران شب اینجا در امان می‌ماندند. دیوارهای ضخیم دور این حویلی را گرفته بودند. شترها و اسپ‌ها از چاه آب می‌خوردند و بارشان اینجا پایین می‌شد.',
          easy: { en: 'This is a [[caravanserai|caravanserai]]. Traders and camels slept here safely at night.', es: 'Este es un [[caravanserai|caravasar]]. Los comerciantes y los camellos dormían aquí seguros por la noche.', fa: 'این یک [[caravanserai|کاروانسرا]] است. تاجران و شترها شب اینجا در امان می‌خوابیدند.' } },
        { en: 'For hundreds of years, caravans crossed Central Asia between China and Europe. The [[silk road|Silk Road]] was not one road. It was a web of many routes. Camels carried silk, spices and other goods.',
          es: 'Por cientos de años, las caravanas cruzaron Asia Central entre China y Europa. La [[silk road|Ruta de la Seda]] no era un solo camino. Era una red de muchas rutas. Los camellos llevaban seda, especias y otras mercancías.',
          fa: 'صدها سال کاروان‌ها از آسیای میانه میان چین و اروپا می‌گذشتند. [[silk road|راه ابریشم]] یک راه نبود. شبکه‌ای از راه‌های زیاد بود. شترها ابریشم، ادویه و مال‌های دیگر می‌بردند.',
          easy: { en: 'The [[silk road|Silk Road]] was many routes, not one. Camels carried silk and spices between China and Europe.', es: 'La [[silk road|Ruta de la Seda]] eran muchas rutas, no una. Los camellos llevaban seda y especias entre China y Europa.', fa: '[[silk road|راه ابریشم]] چند راه بود، نه یک راه. شترها ابریشم و ادویه را میان چین و اروپا می‌بردند.' } },
        { en: 'Cities like Samarkand and Bukhara, here in Uzbekistan, grew rich as stops on these routes. Not only goods traveled. Ideas, languages and new foods moved with the traders too.',
          es: 'Ciudades como Samarcanda y Bujará, aquí en Uzbekistán, se hicieron ricas como paradas de estas rutas. No solo viajaban mercancías. Las ideas, los idiomas y las comidas nuevas también se movían con los comerciantes.',
          fa: 'شهرهایی مثل سمرقند و بخارا، اینجا در ازبکستان، به عنوان منزل‌های این راه‌ها پولدار شدند. تنها مال سفر نمی‌کرد. فکرها، زبان‌ها و غذاهای نو هم با تاجران حرکت می‌کردند.',
          easy: { en: 'Samarkand and Bukhara grew rich from this trade. Ideas and languages traveled too.', es: 'Samarcanda y Bujará se hicieron ricas con este comercio. Las ideas y los idiomas también viajaban.', fa: 'سمرقند و بخارا از این تجارت پولدار شدند. فکرها و زبان‌ها هم سفر می‌کردند.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was a caravanserai for?', es: '¿Para qué servía un caravasar?', fa: 'کاروانسرا برای چه بود؟' },
        choices: [
          { ok: true, t: { en: 'A safe place for traders to stop for the night', es: 'Un lugar seguro donde los comerciantes paraban por la noche', fa: 'جای امن برای ماندن تاجران در شب' },
            why: { en: 'Thick walls kept traders, animals and goods safe overnight.', es: 'Los muros gruesos protegían por la noche a los comerciantes, los animales y las mercancías.', fa: 'دیوارهای ضخیم تاجران، حیوان‌ها و مال را شب در امان نگه می‌داشتند.' } },
          { t: { en: 'A factory that made silk', es: 'Una fábrica que hacía seda', fa: 'فابریکه‌ای که ابریشم می‌ساخت' },
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
      look: { skin: 3, hair: '#1b1410', shirt: '#e0782b', pants: '#2b3a4a' },
      lines: [
        { en: 'Today the Silk Road runs on rails! Long [[freight train|freight trains]] carry containers between China and Europe. Many of them cross Kazakhstan on the way.',
          es: '¡Hoy la Ruta de la Seda va sobre rieles! Largos [[freight train|trenes de carga]] llevan contenedores entre China y Europa. Muchos cruzan Kazajistán en el camino.',
          fa: 'امروز راه ابریشم روی خط آهن است! [[freight train|قطارهای باری]] دراز کانتینرها را میان چین و اروپا می‌برند. بسیاری از آن‌ها در راه از قزاقستان می‌گذرند.',
          easy: { en: '[[freight train|Freight trains]] now carry goods between China and Europe.', es: 'Ahora los [[freight train|trenes de carga]] llevan mercancías entre China y Europa.', fa: 'حالا [[freight train|قطارهای باری]] مال را میان چین و اروپا می‌برند.' } },
        { en: 'Why a train? It takes less than half the time a ship takes. And it costs less than sending goods by plane.',
          es: '¿Por qué un tren? Tarda menos de la mitad del tiempo que un barco. Y cuesta menos que enviar las cosas en avión.',
          fa: 'چرا قطار؟ کمتر از نصف وقتی که کشتی می‌گیرد طول می‌کشد. و از فرستادن مال با طیاره ارزان‌تر است.',
          easy: { en: 'Trains are faster than ships and cheaper than planes.', es: 'Los trenes son más rápidos que los barcos y más baratos que los aviones.', fa: 'قطار از کشتی تیزتر و از طیاره ارزان‌تر است.' } },
        { en: 'At the border with China, the rails change width. That is a [[break of gauge|break of gauge]]. Cranes lift each container onto a new train. This region also sends oil and gas west through [[pipeline|pipelines]] thousands of miles long.',
          es: 'En la frontera con China, las vías cambian de ancho. Eso es un [[break of gauge|cambio de ancho de vía]]. Las grúas suben cada contenedor a otro tren. Esta región también manda petróleo y gas al oeste por [[pipeline|oleoductos y gasoductos]] de miles de millas.',
          fa: 'در سرحد چین پهنای خط آهن تغییر می‌کند. این [[break of gauge|تغییر پهنای خط آهن]] است. جرثقیل‌ها هر کانتینر را به قطار دیگر می‌گذارند. این منطقه تیل و گاز را هم از راه [[pipeline|نل‌های انتقال]] هزاران میل دراز به غرب می‌فرستد.',
          easy: { en: 'At the China border, the rails change width. Cranes move the containers to a new train. [[pipeline|Pipelines]] carry oil and gas.', es: 'En la frontera con China, las vías cambian de ancho. Las grúas pasan los contenedores a otro tren. Los [[pipeline|oleoductos]] llevan petróleo y gas.', fa: 'در سرحد چین پهنای خط آهن تغییر می‌کند. جرثقیل‌ها کانتینرها را به قطار دیگر می‌برند. [[pipeline|نل‌های انتقال]] تیل و گاز را می‌برند.' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do companies send goods from China to Europe by freight train?', es: '¿Por qué las empresas mandan mercancías de China a Europa en tren de carga?', fa: 'چرا شرکت‌ها مال را با قطار باری از چین به اروپا می‌فرستند؟' },
        choices: [
          { ok: true, t: { en: 'It is faster than a ship and cheaper than a plane', es: 'Es más rápido que un barco y más barato que un avión', fa: 'از کشتی تیزتر و از طیاره ارزان‌تر است' },
            why: { en: 'Trains sit in the middle: less time than ships, less money than planes.', es: 'Los trenes están en el medio: menos tiempo que los barcos, menos dinero que los aviones.', fa: 'قطار در میان است: وقت کمتر از کشتی، پول کمتر از طیاره.' } },
          { t: { en: 'Trains never stop at borders', es: 'Los trenes nunca paran en las fronteras', fa: 'قطارها هیچ وقت در سرحد نمی‌ایستند' },
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
        { en: 'My trips often start at the Port of Rotterdam in the Netherlands. Rotterdam sits where a big river, the Rhine, meets the sea. Huge ships unload containers there every day.',
          es: 'Mis viajes muchas veces empiezan en el puerto de Róterdam, en los Países Bajos. Róterdam está donde un río grande, el Rin, llega al mar. Allí, barcos enormes descargan contenedores todos los días.',
          fa: 'سفرهای من اکثراً از بندر روتردام در هالند شروع می‌شود. روتردام جایی است که یک دریای بزرگ، راین، به بحر می‌رسد. هر روز کشتی‌های بسیار بزرگ آنجا کانتینر پایین می‌کنند.',
          easy: { en: 'I start at the port of Rotterdam. It is where the Rhine River meets the sea.', es: 'Empiezo en el puerto de Róterdam. Está donde el río Rin llega al mar.', fa: 'من از بندر روتردام شروع می‌کنم. جایی است که دریای راین به بحر می‌رسد.' } },
        { en: 'Many European countries joined the [[european union|European Union]]. Inside it, my truck crosses borders without stopping at a checkpoint. That makes trade faster and cheaper. Outside it, I wait at each border.',
          es: 'Muchos países europeos se unieron a la [[european union|Unión Europea]]. Dentro de ella, mi camión cruza las fronteras sin parar en un puesto de control. Eso hace el comercio más rápido y barato. Fuera de ella, espero en cada frontera.',
          fa: 'بسیاری از کشورهای اروپایی عضو [[european union|اتحادیهٔ اروپا]] شدند. داخل آن، موتر من بدون ایستادن در پوستهٔ تلاشی از سرحد می‌گذرد. این تجارت را تیزتر و ارزان‌تر می‌کند. بیرون از آن، در هر سرحد منتظر می‌مانم.',
          easy: { en: 'In the [[european union|European Union]], trucks cross borders without stopping. Trade is faster.', es: 'En la [[european union|Unión Europea]], los camiones cruzan fronteras sin parar. El comercio es más rápido.', fa: 'در [[european union|اتحادیهٔ اروپا]] موترهای باری بدون ایستادن از سرحد می‌گذرند. تجارت تیزتر است.' } },
        { en: 'Cities grow where trade routes meet. Ports, river crossings and rail hubs pull in people and money. That helped Rotterdam, Vienna and Moscow become big cities. It helped this bazaar town grow too.',
          es: 'Las ciudades crecen donde se juntan las rutas de comercio. Los puertos, los cruces de ríos y los centros de trenes atraen gente y dinero. Eso ayudó a que Róterdam, Viena y Moscú fueran grandes ciudades. También ayudó a crecer a este pueblo del bazar.',
          fa: 'شهرها جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند. بندرها، گذرگاه‌های دریا و مرکزهای خط آهن مردم و پول را جذب می‌کنند. این به روتردام، ویانا و مسکو کمک کرد شهرهای بزرگ شوند. به رشد این شهرک بازار هم کمک کرد.',
          easy: { en: 'Cities grow where trade routes meet. Routes bring people and money.', es: 'Las ciudades crecen donde se juntan las rutas de comercio. Las rutas traen gente y dinero.', fa: 'شهرها جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند. راه‌ها مردم و پول می‌آورند.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why do cities often grow where trade routes meet?', es: '¿Por qué las ciudades suelen crecer donde se juntan las rutas de comercio?', fa: 'چرا شهرها اکثراً جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند؟' },
        choices: [
          { ok: true, t: { en: 'The routes bring people, goods and money together', es: 'Las rutas juntan gente, mercancías y dinero', fa: 'راه‌ها مردم، مال و پول را یکجا می‌کنند' },
            why: { en: 'Workers, shops and warehouses grow up close to every busy junction.', es: 'Los trabajadores, las tiendas y los almacenes crecen cerca de cada cruce activo.', fa: 'کارگران، دکان‌ها و گدام‌ها نزدیک هر چهارراه پرکار پیدا می‌شوند.' } },
          { t: { en: 'Those places are far from every road', es: 'Esos lugares están lejos de todos los caminos', fa: 'آن جاها از همهٔ راه‌ها دور هستند' },
            why: { en: 'It is the opposite. These places sit right where roads meet.', es: 'Es al revés. Estos lugares están justo donde se juntan los caminos.', fa: 'برعکس است. این جاها درست جایی هستند که راه‌ها به هم می‌رسند.' } },
          { t: { en: 'Nobody wants to live near trade', es: 'Nadie quiere vivir cerca del comercio', fa: 'هیچ کس نمی‌خواهد نزدیک تجارت زندگی کند' },
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

  scraps: [[3, 6], [29, 8], [1, 20]],
  smudges: [[8, 18], [25, 6]],

  challenge: {
    at: [17, 11],
    type: 'sort',
    stat: 'reg',
    title: { en: 'What traveled the Silk Road?', es: '¿Qué viajaba por la Ruta de la Seda?', fa: 'چه چیز در راه ابریشم سفر می‌کرد؟' },
    intro: { en: 'The Smudge buried the bazaar\'s old record book in sand! Sort each card. Was it a good that was traded, an idea that spread, or a person who traveled?',
      es: '¡El Borrón enterró en la arena el viejo libro de registro del bazar! Ordena cada tarjeta. ¿Era una mercancía que se vendía, una idea que se extendía o una persona que viajaba?',
      fa: 'لکه کتاب کهنهٔ ثبت بازار را زیر ریگ کرد! هر کارت را جدا کن. آیا مالی بود که خرید و فروش می‌شد، فکری که پخش می‌شد، یا کسی که سفر می‌کرد؟' },
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
    name: { en: 'The Sandstorm Smudge', es: 'El Borrón de Arena', fa: 'لکهٔ توفان ریگ' },
    appear: { en: 'The Sandstorm Smudge is hiding on the old caravan road in the desert!', es: '¡El Borrón de Arena se esconde en el viejo camino de caravanas, en el desierto!', fa: 'لکهٔ توفان ریگ در راه قدیمی کاروان در صحرا پنهان است!' },
    taunt: { en: 'Whirrr! I buried every road, rail and pipe in sand. Nothing can move now!', es: '¡Zummm! Enterré en arena todos los caminos, rieles y tubos. ¡Ya nada se puede mover!', fa: 'ووووز! همهٔ راه‌ها، خط‌های آهن و نل‌ها را زیر ریگ کردم. حالا هیچ چیز حرکت نمی‌کند!' },
    win: { en: 'The sand settles. Atlas page 3.3 floats down, with a Rail Pass tucked inside!', es: 'La arena se calma. ¡La página 3.3 del atlas cae, con un pase de tren adentro!', fa: 'ریگ آرام می‌شود. صفحهٔ ۳.۳ اطلس پایین می‌آید و یک کارت قطار در آن است!' },
    questions: [
      { q: { en: 'What was the Silk Road?', es: '¿Qué era la Ruta de la Seda?', fa: 'راه ابریشم چه بود؟' },
        choices: [{ en: 'A web of many trade routes between China and Europe', es: 'Una red de muchas rutas de comercio entre China y Europa', fa: 'شبکه‌ای از راه‌های زیاد تجارت میان چین و اروپا' }, { en: 'One straight road from China to Spain', es: 'Un solo camino recto de China a España', fa: 'یک راه مستقیم از چین تا اسپانیا' }, { en: 'A river that carried silk', es: 'Un río que llevaba seda', fa: 'دریایی که ابریشم می‌برد' }, { en: 'A railway built 100 years ago', es: 'Un ferrocarril construido hace 100 años', fa: 'خط آهنی که ۱۰۰ سال پیش ساخته شد' }], answer: 0,
        why: { en: 'Maps often draw one line, but there were many branches.', es: 'Los mapas suelen dibujar una línea, pero había muchas ramas.', fa: 'نقشه‌ها اکثراً یک خط می‌کشند، اما شاخه‌های زیادی داشت.' } },
      { q: { en: 'A caravanserai was a building where traders could...', es: 'Un caravasar era un edificio donde los comerciantes podían...', fa: 'کاروانسرا ساختمانی بود که تاجران می‌توانستند...' },
        choices: [{ en: 'stop safely for the night', es: 'parar seguros por la noche', fa: 'شب در امان بمانند' }, { en: 'make silk cloth', es: 'hacer tela de seda', fa: 'تکهٔ ابریشمی بسازند' }, { en: 'dig for gold', es: 'buscar oro', fa: 'طلا بکنند' }, { en: 'grow cotton', es: 'cultivar algodón', fa: 'پخته بکارند' }], answer: 0,
        why: { en: 'Thick walls closed around a courtyard where animals were watered and unloaded.', es: 'Muros gruesos rodeaban un patio donde los animales bebían y los descargaban.', fa: 'دیوارهای ضخیم دور یک حویلی بود که حیوان‌ها آنجا آب می‌خوردند و بارشان پایین می‌شد.' } },
      { q: { en: 'Samarkand and Bukhara grew rich on the caravan trade. Which country are they in?', es: 'Samarcanda y Bujará se hicieron ricas con el comercio de caravanas. ¿En qué país están?', fa: 'سمرقند و بخارا از تجارت کاروانی پولدار شدند. در کدام کشور هستند؟' },
        choices: [{ en: 'Uzbekistan', es: 'Uzbekistán', fa: 'ازبکستان' }, { en: 'Kazakhstan', es: 'Kazajistán', fa: 'قزاقستان' }, { en: 'Russia', es: 'Rusia', fa: 'روسیه' }, { en: 'China', es: 'China', fa: 'چین' }], answer: 0,
        why: { en: 'Both cities are in Uzbekistan, in Central Asia.', es: 'Las dos ciudades están en Uzbekistán, en Asia Central.', fa: 'هر دو شهر در ازبکستان، در آسیای میانه هستند.' } },
      { q: { en: 'Freight trains from China to Europe are useful because they are...', es: 'Los trenes de carga de China a Europa son útiles porque son...', fa: 'قطارهای باری از چین به اروپا مفید هستند چون...' },
        choices: [{ en: 'faster than ships and cheaper than planes', es: 'más rápidos que los barcos y más baratos que los aviones', fa: 'از کشتی تیزتر و از طیاره ارزان‌تر هستند' }, { en: 'slower than ships but cheaper', es: 'más lentos que los barcos pero más baratos', fa: 'از کشتی کندتر اما ارزان‌تر هستند' }, { en: 'able to cross every border without stopping', es: 'capaces de cruzar todas las fronteras sin parar', fa: 'بدون ایستادن از هر سرحد می‌گذرند' }, { en: 'the only way to move heavy cargo', es: 'la única forma de mover carga pesada', fa: 'تنها راه بردن بار سنگین هستند' }], answer: 0,
        why: { en: 'They take less than half the time of a ship and cost less than air freight.', es: 'Tardan menos de la mitad que un barco y cuestan menos que el avión.', fa: 'کمتر از نصف وقت کشتی را می‌گیرند و از طیاره ارزان‌تر هستند.' } },
      { q: { en: 'Inside the European Union, a truck crossing a border is usually...', es: 'Dentro de la Unión Europea, un camión que cruza una frontera normalmente...', fa: 'داخل اتحادیهٔ اروپا، موتر باری که از سرحد می‌گذرد معمولاً...' },
        choices: [{ en: 'waved through with no checkpoint stop', es: 'pasa sin parar en un puesto de control', fa: 'بدون ایستادن در پوستهٔ تلاشی می‌گذرد' }, { en: 'taxed at every crossing', es: 'paga impuestos en cada cruce', fa: 'در هر سرحد مالیه می‌دهد' }, { en: 'checked by two governments', es: 'es revisado por dos gobiernos', fa: 'توسط دو دولت تلاشی می‌شود' }, { en: 'not allowed to cross', es: 'no puede cruzar', fa: 'اجازهٔ گذشتن ندارد' }], answer: 0,
        why: { en: 'Dropping border checks was one of the things the members agreed on. It makes trade faster.', es: 'Quitar los controles en las fronteras fue uno de los acuerdos de los miembros. Hace el comercio más rápido.', fa: 'برداشتن تلاشی سرحد یکی از توافق‌های اعضا بود. تجارت را تیزتر می‌کند.' } },
      { q: { en: 'What is a pipeline?', es: '¿Qué es un oleoducto o gasoducto?', fa: 'نل انتقال چیست؟' },
        choices: [{ en: 'A long pipe that carries oil, gas or water far away', es: 'Un tubo largo que lleva petróleo, gas o agua muy lejos', fa: 'نل درازی که تیل، گاز یا آب را دور می‌برد' }, { en: 'A train car for grain', es: 'Un vagón de tren para granos', fa: 'واگون قطار برای غله' }, { en: 'A canal for boats', es: 'Un canal para barcos', fa: 'کانالی برای کشتی' }, { en: 'A road for trucks', es: 'Un camino para camiones', fa: 'سرکی برای موترهای باری' }], answer: 0,
        why: { en: 'Pipelines carry oil and gas from Russia and Central Asia for thousands of miles.', es: 'Los oleoductos y gasoductos llevan petróleo y gas desde Rusia y Asia Central por miles de millas.', fa: 'نل‌های انتقال تیل و گاز را از روسیه و آسیای میانه هزاران میل می‌برند.' } },
      { q: { en: 'The Channel Tunnel carries trains under the sea between which two countries?', es: 'El túnel del Canal lleva trenes bajo el mar entre ¿qué dos países?', fa: 'تونل کانال مانش قطارها را از زیر بحر میان کدام دو کشور می‌برد؟' },
        choices: [{ en: 'England and France', es: 'Inglaterra y Francia', fa: 'انگلستان و فرانسه' }, { en: 'Spain and Morocco', es: 'España y Marruecos', fa: 'اسپانیا و مراکش' }, { en: 'Norway and Sweden', es: 'Noruega y Suecia', fa: 'ناروی و سویدن' }, { en: 'Russia and China', es: 'Rusia y China', fa: 'روسیه و چین' }], answer: 0,
        why: { en: 'It opened in 1994. The trip under the water takes about 35 minutes.', es: 'Se abrió en 1994. El viaje bajo el agua dura unos 35 minutos.', fa: 'در سال ۱۹۹۴ باز شد. سفر زیر آب حدود ۳۵ دقیقه طول می‌کشد.' } },
      { q: { en: 'Why do cities often grow where trade routes meet?', es: '¿Por qué las ciudades suelen crecer donde se juntan las rutas de comercio?', fa: 'چرا شهرها اکثراً جایی بزرگ می‌شوند که راه‌های تجارت به هم می‌رسند؟' },
        choices: [{ en: 'Routes bring people, goods and money together', es: 'Las rutas juntan gente, mercancías y dinero', fa: 'راه‌ها مردم، مال و پول را یکجا می‌کنند' }, { en: 'Those places are far from roads', es: 'Esos lugares están lejos de los caminos', fa: 'آن جاها از راه‌ها دور هستند' }, { en: 'Mountains stop people from leaving', es: 'Las montañas no dejan salir a la gente', fa: 'کوه‌ها نمی‌گذارند مردم بروند' }, { en: 'Trade routes have no workers', es: 'Las rutas de comercio no tienen trabajadores', fa: 'راه‌های تجارت کارگر ندارند' }], answer: 0,
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
