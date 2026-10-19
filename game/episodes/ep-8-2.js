/* WORLDWALKER · Episode 8.2 · Global Interdependence and Trade (WG.16)
   One shipping lane runs across the whole map, from the factory port of Asia (east) to the market port of Europe (west).
   On the way it squeezes through two narrow places: a strait between jungle lands and a canal dug through the desert.
   The long way around Africa runs along the bottom of the map. */
window.EPISODE = {
  id: '8.2',
  realm: 8,
  sol: 'WG.16',
  title: { en: 'Global Trade', es: 'El comercio mundial', fa: 'تجارت جهانی' },
  place: { en: 'The Narrow Places', es: 'Los Pasos Estrechos', fa: 'گذرگاه‌های تنگ' },
  intro: [
    { en: 'Christopher: "The Grump tied a knot in the busiest sea road in the world! Ships are stuck, and store shelves are empty far away. Talk to the shop owner, the canal pilot and the strait pilot. Then fix the compass stone at the Asia port."',
      es: 'Christopher: "¡El Gruñón hizo un nudo en el camino de mar más ocupado del mundo! Los barcos están atascados y los estantes de las tiendas están vacíos muy lejos de aquí. Habla con la dueña de la tienda, la piloto del canal y el piloto del estrecho. Luego arregla la piedra de la brújula en el puerto de Asia."',
      fa: 'کریستوفر: «غرغرو در پرکارترین راه بحری جهان گره زد! کشتی‌ها گیر مانده‌اند و قفسه‌های دکان‌ها در جاهای دور خالی شده‌اند. با صاحب دکان، رهنمای کانال و رهنمای تنگه گپ بزن. بعد سنگ قطب‌نما را در بندر آسیا درست کن.»' }
  ],

  /* 48 x 22 tiles = 3 x 2 screens.
     Top row of screens: Europe's market port (west) · the desert with the canal (middle) · Asia's factory port (east).
     The sea road joins them; in the desert it squeezes into a one-tile canal. Bottom right: the narrow strait between jungle lands.
     Bottom: farms in Europe, Africa's dry grassland, and the long sea road around Africa's southern cape. */
  map: [
    'TTTTTTTTTTTTTTTTrrrrrrrrrrrrrrrrTTTTTTTTTTTTTTTT',
    'T..RRR..QQQ...,.suussuussuuussus.XX..XX..UU.UU.T',
    'T..hdh..hdh.....ssuuussssuussuus.XX..XX..UU.UU.T',
    'T.m.m.m.........uussssxsuussssuu...........,...T',
    'T::::::::::::::::::::::::::::::::::::::::::::::T',
    'T......k...k....ssuussssssuussss..k....k....k..T',
    '~~~B~~~k~~~k~~~~~~~~~~~~B~~~~~~~~~k~~~~k~~~~k~~=',
    '~~~B~~~~~~~~~~~~suusssssssssuuss~~~~~~~~~~~~~~~=',
    '~~~B~~~~~~~~~~~~ssuussssssuussus.....p~~..p..jj=',
    'T..:..........,.suussssuussssuus.......~~.....j=',
    'T..:wwww..wwww..ssssgsssssgsssss.j...,.~~...,.j=',
    'T..:wwww..wwww..ggagggggggggagg..j.q...~~.qq..j=',
    'T..:wwww..wwww..gggggagggggggg....qq...~~.qq..j=',
    'T..:............ggggggggaggggg.gjj.....~~.....j=',
    'T.TT..QQQQ..T...gaggggggggggggg.j..RRR.~~QQQ..j=',
    'T.....hdhh......gggggOgggggaggg.j..hdh.~~hdh..j=',
    'T.,.............ggggggggggggggg.j......bb.....j=',
    'TT..T....,....T.ggaggggxggggagg.jj.p...~~..p.jj=',
    'sssssssssssssssssssssssssssssssssssssss~~sssss~=',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=',
    '================================================'
  ],
  start: [19, 4],

  words: {
    trade: { en: 'buying and selling things between people or countries', es: 'comprar y vender cosas entre personas o países', fa: 'خرید و فروش چیزها بین مردم یا کشورها' },
    specialize: { en: 'to make a few things instead of trying to make everything', es: 'hacer pocas cosas en vez de intentar hacerlo todo', fa: 'چند چیز محدود ساختن، به جای کوشش برای ساختن همه چیز' },
    'opportunity cost': { en: 'what you give up to make one choice instead of another', es: 'lo que dejas de tener al elegir una cosa en vez de otra', fa: 'چیزی که از دست می‌دهی وقتی یک انتخاب را به جای انتخاب دیگر می‌کنی' },
    interdependence: { en: 'when countries depend on each other for goods and resources', es: 'cuando los países dependen unos de otros para tener productos y recursos', fa: 'وقتی کشورها برای اجناس و منابع به یکدیگر وابسته هستند' },
    canal: { en: 'a waterway that people dug to make a shorter route', es: 'una vía de agua que la gente cavó para hacer una ruta más corta', fa: 'آبراهی که مردم کندند تا راه کوتاه‌تر شود' },
    strait: { en: 'a narrow passage of water that nature made, between two larger bodies of water', es: 'un paso estrecho de agua hecho por la naturaleza, entre dos masas de agua más grandes', fa: 'گذرگاه تنگ آبی که طبیعت ساخته، بین دو آب بزرگ‌تر' },
    chokepoint: { en: 'a narrow passage that a lot of trade must pass through, so it is easy to block', es: 'un paso estrecho por donde debe pasar mucho comercio, así que es fácil de bloquear', fa: 'گذرگاه تنگی که تجارت زیادی باید از آن بگذرد، پس بستنش آسان است' },
    'shipping lane': { en: 'a sea road that many ships use again and again', es: 'un camino en el mar que muchos barcos usan una y otra vez', fa: 'راه بحری که کشتی‌های زیادی بارها از آن استفاده می‌کنند' },
    export: { en: 'something a country sells to other countries', es: 'algo que un país vende a otros países', fa: 'چیزی که یک کشور به کشورهای دیگر می‌فروشد' },
    import: { en: 'something a country buys from other countries', es: 'algo que un país compra a otros países', fa: 'چیزی که یک کشور از کشورهای دیگر می‌خرد' }
  },

  npcs: [
    {
      x: 8, y: 3,
      name: { en: 'Lotte de Vries', es: 'Lotte de Vries', fa: 'لوته دی فریس' },
      role: { en: 'Shop owner in a European port city', es: 'Dueña de una tienda en un puerto de Europa', fa: 'صاحب دکان در یک شهر بندری اروپا' },
      look: { skin: 0, hair: '#e3c26a', shirt: '#e07a2b', pants: '#2b3a5a' },
      lines: [
        { en: 'Welcome to my shop! Look around. Coffee from Colombia. Cocoa from Ghana. Phones from Asia. No country has everything it needs, because resources are spread unevenly. So countries [[trade|trade]].',
          es: '¡Bienvenido a mi tienda! Mira a tu alrededor. Café de Colombia. Cacao de Ghana. Teléfonos de Asia. Ningún país tiene todo lo que necesita, porque los recursos están repartidos de forma desigual. Por eso los países [[trade|comercian]].',
          fa: 'به دکان من خوش آمدی! به اطراف ببین. قهوه از کلمبیا. کاکائو از غانا. تیلفون از آسیا. هیچ کشوری همه چیزهایی را که لازم دارد ندارد، چون منابع به طور نابرابر پخش شده‌اند. پس کشورها [[trade|تجارت]] می‌کنند.',
          easy: { en: 'No country has everything. So countries buy and sell with each other. That is [[trade|trade]].', es: 'Ningún país lo tiene todo. Por eso los países compran y venden entre sí. Eso es el [[trade|comercio]].', fa: 'هیچ کشوری همه چیز ندارد. پس کشورها با هم خرید و فروش می‌کنند. این [[trade|تجارت]] است.' } },
        { en: 'Countries [[specialize|specialize]]. Each one makes a few things instead of everything. Ghana grows cocoa. Ukraine grows wheat. They trade, and both end up with more than they could make alone.',
          es: 'Los países se [[specialize|especializan]]. Cada uno hace pocas cosas en vez de todo. Ghana cultiva cacao. Ucrania cultiva trigo. Comercian, y los dos terminan con más de lo que podrían hacer solos.',
          fa: 'کشورها [[specialize|تخصص]] پیدا می‌کنند. هر کدام چند چیز محدود می‌سازد، نه همه چیز. غانا کاکائو می‌کارد. اوکراین گندم می‌کارد. با هم تجارت می‌کنند و هر دو بیشتر از آنچه تنها می‌توانستند بسازند، به دست می‌آورند.',
          easy: { en: 'Ghana grows cocoa. Ukraine grows wheat. They trade. Both get more.', es: 'Ghana cultiva cacao. Ucrania cultiva trigo. Comercian. Los dos tienen más.', fa: 'غانا کاکائو می‌کارد. اوکراین گندم می‌کارد. با هم تجارت می‌کنند. هر دو بیشتر دارند.' } },
        { en: 'How does a country choose what to make? It looks at [[opportunity cost|opportunity cost]]: what you give up to make one choice instead of another. A country makes what it gives up the least to make.',
          es: '¿Cómo elige un país qué hacer? Mira el [[opportunity cost|costo de oportunidad]]: lo que dejas de tener al elegir una cosa en vez de otra. Un país hace lo que le cuesta menos dejar.',
          fa: 'یک کشور چطور انتخاب می‌کند چه بسازد؟ به [[opportunity cost|هزینهٔ فرصت]] نگاه می‌کند: چیزی که از دست می‌دهی وقتی یک انتخاب را به جای دیگری می‌کنی. کشور چیزی را می‌سازد که برای ساختنش کمترین چیز را از دست می‌دهد.',
          easy: { en: '[[opportunity cost|Opportunity cost]] is what you give up when you choose. Countries make what costs them the least to give up.', es: 'El [[opportunity cost|costo de oportunidad]] es lo que dejas al elegir. Los países hacen lo que menos les cuesta dejar.', fa: '[[opportunity cost|هزینهٔ فرصت]] چیزی است که هنگام انتخاب از دست می‌دهی. کشورها چیزی را می‌سازند که کمترین از دست دادن را دارد.' } }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Ghana grows cocoa and Ukraine grows wheat. Then they trade. What is this an example of?', es: 'Ghana cultiva cacao y Ucrania cultiva trigo. Luego comercian. ¿De qué es un ejemplo esto?', fa: 'غانا کاکائو می‌کارد و اوکراین گندم. بعد با هم تجارت می‌کنند. این مثال چیست؟' },
        choices: [
          { ok: true, t: { en: 'Countries that specialize and trade', es: 'Países que se especializan y comercian', fa: 'کشورهایی که تخصص پیدا می‌کنند و تجارت می‌کنند' },
            why: { en: 'Each makes a few things it is good at, then trades for the rest.', es: 'Cada uno hace pocas cosas en las que es bueno y luego comercia por lo demás.', fa: 'هر کدام چند چیزی که در آن خوب است می‌سازد و بقیه را با تجارت به دست می‌آورد.' } },
          { t: { en: 'Countries that refuse to trade', es: 'Países que se niegan a comerciar', fa: 'کشورهایی که از تجارت انکار می‌کنند' },
            why: { en: 'They do trade: cocoa goes one way and wheat goes the other.', es: 'Sí comercian: el cacao va hacia un lado y el trigo hacia el otro.', fa: 'آن‌ها تجارت می‌کنند: کاکائو به یک طرف و گندم به طرف دیگر می‌رود.' } },
          { t: { en: 'Countries that make everything at home', es: 'Países que hacen todo en casa', fa: 'کشورهایی که همه چیز را در خانه می‌سازند' },
            why: { en: 'No. Each country makes only a few things.', es: 'No. Cada país hace solo unas pocas cosas.', fa: 'نه. هر کشور فقط چند چیز محدود می‌سازد.' } }
        ]
      }
    },
    {
      x: 22, y: 5,
      name: { en: 'Mona Hassan', es: 'Mona Hassan', fa: 'مونا حسن' },
      role: { en: 'Suez Canal pilot from Egypt', es: 'Piloto del Canal de Suez, de Egipto', fa: 'رهنمای کشتی در کانال سوئز، از مصر' },
      look: { skin: 2, hair: '#2b1d14', shirt: '#2a6f97', robe: true, hat: '#f0e6d2' },
      lines: [
        { en: 'Ahlan! I am a canal pilot. I guide giant ships through the Suez Canal in Egypt. People dug this [[canal|canal]]. It joins the Mediterranean Sea and the Red Sea, so ships from Asia do not have to sail all the way around Africa.',
          es: '¡Ahlan! Soy piloto del canal. Guío barcos gigantes por el Canal de Suez en Egipto. La gente cavó este [[canal|canal]]. Une el mar Mediterráneo con el mar Rojo, así que los barcos de Asia no tienen que dar toda la vuelta a África.',
          fa: 'اهلاً! من رهنمای کانال هستم. کشتی‌های بسیار بزرگ را از کانال سوئز در مصر می‌گذرانم. مردم این [[canal|کانال]] را کندند. این کانال بحیرهٔ مدیترانه را به بحیرهٔ سرخ وصل می‌کند، پس کشتی‌های آسیا مجبور نیستند تمام دور افریقا را بچرخند.',
          easy: { en: 'People dug the Suez Canal. It is a short way from Asia to Europe.', es: 'La gente cavó el Canal de Suez. Es un camino corto de Asia a Europa.', fa: 'مردم کانال سوئز را کندند. این یک راه کوتاه از آسیا به اروپا است.' } },
        { en: 'This canal is a [[chokepoint|chokepoint]]: a narrow place that a lot of trade must pass through. Narrow places are easy to block. In March 2021, one huge ship got stuck sideways here. The canal closed for six days, and hundreds of ships waited in line.',
          es: 'Este canal es un [[chokepoint|punto de estrangulamiento]]: un lugar estrecho por donde debe pasar mucho comercio. Los lugares estrechos son fáciles de bloquear. En marzo de 2021, un barco enorme se atascó de lado aquí. El canal se cerró por seis días y cientos de barcos esperaron en fila.',
          fa: 'این کانال یک [[chokepoint|گلوگاه]] است: جای تنگی که تجارت زیادی باید از آن بگذرد. بستن جاهای تنگ آسان است. در ماه مارچ ۲۰۲۱، یک کشتی بسیار بزرگ اینجا کج گیر ماند. کانال شش روز بسته شد و صدها کشتی در صف منتظر ماندند.',
          easy: { en: 'In 2021 one big ship got stuck here. The canal closed for six days.', es: 'En 2021 un barco grande se atascó aquí. El canal se cerró por seis días.', fa: 'در سال ۲۰۲۱ یک کشتی بزرگ اینجا گیر ماند. کانال شش روز بسته شد.' } },
        { en: 'When ships must go the long way, the trip takes more days and burns much more fuel. Somebody pays for that. Usually it is the shopper, thousands of kilometers away. Prices go up, and shelves take longer to fill.',
          es: 'Cuando los barcos tienen que ir por el camino largo, el viaje toma más días y gasta mucho más combustible. Alguien paga por eso. Casi siempre es el comprador, a miles de kilómetros. Los precios suben y los estantes tardan más en llenarse.',
          fa: 'وقتی کشتی‌ها مجبور به رفتن از راه دراز هستند، سفر روزهای بیشتر می‌گیرد و تیل بسیار بیشتر مصرف می‌کند. کسی باید پولش را بدهد. معمولاً خریدار است، هزاران کیلومتر دورتر. قیمت‌ها بالا می‌روند و قفسه‌ها دیرتر پر می‌شوند.',
          easy: { en: 'The long way takes more days and more fuel. So prices go up in stores.', es: 'El camino largo toma más días y más combustible. Por eso suben los precios en las tiendas.', fa: 'راه دراز روزهای بیشتر و تیل بیشتر می‌گیرد. پس قیمت‌ها در دکان‌ها بالا می‌روند.' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A canal is blocked. Why do prices go up in stores far away?', es: 'Un canal está bloqueado. ¿Por qué suben los precios en tiendas lejanas?', fa: 'یک کانال بسته است. چرا قیمت‌ها در دکان‌های دور بالا می‌روند؟' },
        choices: [
          { ok: true, t: { en: 'Ships need more days and more fuel to go the long way', es: 'Los barcos necesitan más días y más combustible para ir por el camino largo', fa: 'کشتی‌ها برای راه دراز روزهای بیشتر و تیل بیشتر لازم دارند' },
            why: { en: 'Extra days and extra fuel cost money, and shoppers end up paying it.', es: 'Los días y el combustible extra cuestan dinero, y al final lo pagan los compradores.', fa: 'روزها و تیل اضافه پول می‌خواهد و آخر کار خریداران آن را می‌پردازند.' } },
          { t: { en: 'Stores raise prices whenever they hear bad news', es: 'Las tiendas suben los precios cuando oyen malas noticias', fa: 'دکان‌ها هر وقت خبر بد بشنوند قیمت را بالا می‌برند' },
            why: { en: 'The real cause is the longer, more costly trip.', es: 'La causa real es el viaje más largo y más caro.', fa: 'دلیل واقعی سفر درازتر و گران‌تر است.' } },
          { t: { en: 'Ships must throw their cargo into the sea', es: 'Los barcos tienen que tirar su carga al mar', fa: 'کشتی‌ها مجبورند بار خود را در بحر بیندازند' },
            why: { en: 'Ships keep their cargo. They just take longer to arrive.', es: 'Los barcos guardan su carga. Solo tardan más en llegar.', fa: 'کشتی‌ها بار خود را نگه می‌دارند. فقط دیرتر می‌رسند.' } }
        ]
      }
    },
    {
      x: 37, y: 16,
      name: { en: 'Captain Hafiz Rahman', es: 'Capitán Hafiz Rahman', fa: 'کپتان حافظ رحمان' },
      role: { en: 'Ship pilot on the Strait of Malacca, Malaysia', es: 'Piloto de barcos en el estrecho de Malaca, Malasia', fa: 'رهنمای کشتی در تنگهٔ ملاکا، مالیزیا' },
      look: { skin: 3, hair: '#1b1410', shirt: '#f2f2f2', pants: '#1f2f4f', hat: '#1f2f4f' },
      lines: [
        { en: 'Selamat datang! This water is like the Strait of Malacca, between Malaysia and Indonesia. A [[strait|strait]] is a narrow passage of water that nature made. A canal is different: people dug it.',
          es: '¡Selamat datang! Esta agua es como el estrecho de Malaca, entre Malasia e Indonesia. Un [[strait|estrecho]] es un paso estrecho de agua hecho por la naturaleza. Un canal es diferente: lo cavó la gente.',
          fa: 'سلامت داتانگ! این آب مثل تنگهٔ ملاکا بین مالیزیا و اندونزیا است. [[strait|تنگه]] یک گذرگاه تنگ آبی است که طبیعت ساخته. کانال فرق دارد: مردم آن را کندند.',
          easy: { en: 'A [[strait|strait]] is a narrow water path made by nature. A canal is dug by people.', es: 'Un [[strait|estrecho]] es un paso de agua estrecho hecho por la naturaleza. Un canal lo cava la gente.', fa: '[[strait|تنگه]] راه تنگ آبی است که طبیعت ساخته. کانال را مردم می‌کنند.' } },
        { en: 'Ships from China, Japan and Korea pass here on the way to India, Africa and Europe. Oil tankers come the other way. This is one of the busiest [[shipping lane|shipping lanes]] in the world.',
          es: 'Los barcos de China, Japón y Corea pasan por aquí rumbo a India, África y Europa. Los barcos petroleros vienen en la otra dirección. Esta es una de las [[shipping lane|rutas marítimas]] más ocupadas del mundo.',
          fa: 'کشتی‌های چین، جاپان و کوریا از اینجا به طرف هند، افریقا و اروپا می‌گذرند. کشتی‌های تیل از طرف دیگر می‌آیند. این یکی از پرکارترین [[shipping lane|راه‌های بحری]] جهان است.',
          easy: { en: 'Many, many ships pass here every day. It is a very busy sea road.', es: 'Muchísimos barcos pasan por aquí cada día. Es un camino de mar muy ocupado.', fa: 'کشتی‌های بسیار زیادی هر روز از اینجا می‌گذرند. این یک راه بحری بسیار پرکار است.' } },
        { en: 'All this trade ties countries together. That is [[interdependence|interdependence]]. It brings more choices and lower prices. But a country that buys everything from one place has a problem if that place stops selling.',
          es: 'Todo este comercio une a los países. Eso es la [[interdependence|interdependencia]]. Trae más opciones y precios más bajos. Pero un país que lo compra todo en un solo lugar tiene un problema si ese lugar deja de vender.',
          fa: 'این همه تجارت کشورها را به هم وصل می‌کند. این [[interdependence|وابستگی متقابل]] است. انتخاب‌های بیشتر و قیمت‌های پایین‌تر می‌آورد. اما کشوری که همه چیز را از یک جا می‌خرد، اگر آن جا فروش را بس کند، مشکل پیدا می‌کند.',
          easy: { en: 'Countries depend on each other. That is [[interdependence|interdependence]]. It helps, but it has a risk too.', es: 'Los países dependen unos de otros. Eso es la [[interdependence|interdependencia]]. Ayuda, pero también tiene un riesgo.', fa: 'کشورها به هم وابسته هستند. این [[interdependence|وابستگی متقابل]] است. کمک می‌کند، اما خطر هم دارد.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What is the difference between a strait and a canal?', es: '¿Cuál es la diferencia entre un estrecho y un canal?', fa: 'فرق تنگه و کانال چیست؟' },
        choices: [
          { ok: true, t: { en: 'Nature made the strait. People dug the canal.', es: 'La naturaleza hizo el estrecho. La gente cavó el canal.', fa: 'طبیعت تنگه را ساخته. مردم کانال را کندند.' },
            why: { en: 'Both are narrow water paths, but only a canal is built by people.', es: 'Los dos son pasos de agua estrechos, pero solo el canal lo construye la gente.', fa: 'هر دو راه تنگ آبی هستند، اما فقط کانال را مردم می‌سازند.' } },
          { t: { en: 'A strait carries oil. A canal carries food.', es: 'Un estrecho lleva petróleo. Un canal lleva comida.', fa: 'تنگه تیل می‌برد. کانال غذا می‌برد.' },
            why: { en: 'Ships with every kind of cargo use both.', es: 'Barcos con toda clase de carga usan los dos.', fa: 'کشتی‌ها با هر نوع بار از هر دو استفاده می‌کنند.' } },
          { t: { en: 'A strait is always deeper than a canal.', es: 'Un estrecho siempre es más profundo que un canal.', fa: 'تنگه همیشه از کانال عمیق‌تر است.' },
            why: { en: 'Depth is not the difference. Who made it is.', es: 'La profundidad no es la diferencia. Lo es quién lo hizo.', fa: 'فرق در عمق نیست. فرق در این است که چه کسی آن را ساخته.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 22, y: 3, text: { en: 'THE NARROW PLACES · Three narrow places carry a huge share of world trade: the Panama Canal, the Suez Canal and the Strait of Malacca. The Panama Canal has locks that lift ships over higher ground. The Suez Canal is at sea level, so it has no locks.',
      es: 'LOS PASOS ESTRECHOS · Tres pasos estrechos llevan una parte enorme del comercio mundial: el Canal de Panamá, el Canal de Suez y el estrecho de Malaca. El Canal de Panamá tiene esclusas que suben los barcos por encima de tierras más altas. El Canal de Suez está al nivel del mar, así que no tiene esclusas.',
      fa: 'گذرگاه‌های تنگ · سه گذرگاه تنگ بخش بسیار بزرگی از تجارت جهان را می‌برند: کانال پاناما، کانال سوئز و تنگهٔ ملاکا. کانال پاناما دروازه‌های آبی دارد که کشتی‌ها را از زمین بلندتر بالا می‌برند. کانال سوئز هم‌سطح بحر است، پس دروازهٔ آبی ندارد.' } },
    { x: 23, y: 17, text: { en: 'THE LONG WAY · If the Suez Canal is closed, ships from Asia must sail all the way around Africa, past the Cape of Good Hope. That adds about one to two weeks at sea.',
      es: 'EL CAMINO LARGO · Si el Canal de Suez está cerrado, los barcos de Asia deben dar toda la vuelta a África, por el cabo de Buena Esperanza. Eso suma de una a dos semanas más en el mar.',
      fa: 'راه دراز · اگر کانال سوئز بسته باشد، کشتی‌های آسیا باید تمام دور افریقا را از کنار دماغهٔ امید نیک بچرخند. این حدود یک تا دو هفته سفر بحری را زیاد می‌کند.' } }
  ],

  /* the quest: Inès the chocolate maker (gold !) -> Oksana the wheat farmer -> trade with Akosua, the cocoa trader -> back to Inès */
  quest: {
    stat: 'reg',
    title: { en: 'Beans for the Chocolate Shop', es: 'Granos para la chocolatería', fa: 'دانه برای دکان چاکلیت' },
    giver: {
      x: 13, y: 2,
      name: { en: 'Inès Moreau', es: 'Inès Moreau', fa: 'اینس مورو' },
      role: { en: 'Chocolate maker', es: 'Chocolatera', fa: 'چاکلیت‌ساز' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a3e1d', pants: '#2b2b2b', style: 'bun' },
      lines: [
        { en: 'Oh no! I make chocolate, but I have no cocoa beans left. The Grump\'s knot stopped the ships. My shop is empty!',
          es: '¡Ay, no! Hago chocolate, pero ya no me quedan granos de cacao. El nudo del Gruñón detuvo los barcos. ¡Mi tienda está vacía!',
          fa: 'وای! من چاکلیت می‌سازم، اما دیگر دانهٔ کاکائو ندارم. گره غرغرو کشتی‌ها را بند کرد. دکانم خالی است!' },
        { en: 'Cocoa does not grow here. Oksana, the farmer, knows where to get it. Her farm is south, across the bridge. Will you ask her?',
          es: 'El cacao no crece aquí. Oksana, la agricultora, sabe dónde conseguirlo. Su granja está al sur, al otro lado del puente. ¿Le preguntas?',
          fa: 'کاکائو اینجا نمی‌روید. اوکسانا، دهقان، می‌داند از کجا پیدا شود. فارم او در جنوب است، آن طرف پل. از او می‌پرسی؟' }
      ],
      wait: { en: 'Oksana\'s farm is south of the town. Cross the little bridge over the water.',
        es: 'La granja de Oksana está al sur del pueblo. Cruza el puentecito sobre el agua.',
        fa: 'فارم اوکسانا در جنوب شهر است. از پل کوچک روی آب بگذر.' },
      thanks: { en: 'Cocoa beans! Now I can make chocolate again. My shop needs Ghana\'s cocoa, and Ghana needs our wheat. That is [[interdependence|interdependence]]. Thank you!',
        es: '¡Granos de cacao! Ahora puedo volver a hacer chocolate. Mi tienda necesita el cacao de Ghana, y Ghana necesita nuestro trigo. Eso es [[interdependence|interdependencia]]. ¡Gracias!',
        fa: 'دانهٔ کاکائو! حالا دوباره می‌توانم چاکلیت بسازم. دکان من به کاکائوی غانا ضرورت دارد و غانا به گندم ما. این [[interdependence|وابستگی متقابل]] است. تشکر!' }
    },
    contact: {
      x: 6, y: 13,
      name: { en: 'Oksana Kovalenko', es: 'Oksana Kovalenko', fa: 'اوکسانا کووالنکو' },
      role: { en: 'Wheat farmer', es: 'Agricultora de trigo', fa: 'دهقان گندم' },
      look: { skin: 0, hair: '#e0c27a', shirt: '#4f7a3a', pants: '#3a3a5a', style: 'long' },
      lines: [
        { en: 'Cocoa trees need heat and a lot of rain all year. They grow near the equator, in places like Ghana. Our land is too cool. But wheat grows very well here.',
          es: 'Los árboles de cacao necesitan calor y mucha lluvia todo el año. Crecen cerca del ecuador, en lugares como Ghana. Nuestra tierra es muy fresca. Pero aquí el trigo crece muy bien.',
          fa: 'درخت کاکائو در تمام سال به گرمی و باران زیاد ضرورت دارد. نزدیک خط استوا، در جاهایی مثل غانا، می‌روید. زمین ما بسیار سرد است. اما گندم اینجا خیلی خوب می‌روید.' },
        { en: 'Go east to Akosua, the cocoa trader from Ghana. She is in the grassland. Offer her something our cool land has plenty of, but her hot land does not grow well.',
          es: 'Ve al este, donde está Akosua, la comerciante de cacao de Ghana. Está en la pradera. Ofrécele algo que nuestra tierra fresca tiene en abundancia, pero que su tierra caliente no cultiva bien.',
          fa: 'به شرق نزد آکوسوا، تاجر کاکائو از غانا، برو. او در علفزار است. چیزی به او پیشنهاد کن که زمین سرد ما زیاد دارد، اما زمین گرم او خوب نمی‌رویاند.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 19, y: 16,
        name: { en: 'Akosua Owusu', es: 'Akosua Owusu', fa: 'آکوسوا اووسو' },
        role: { en: 'Cocoa trader from Ghana', es: 'Comerciante de cacao de Ghana', fa: 'تاجر کاکائو از غانا' },
        look: { skin: 5, hair: '#1b1410', shirt: '#e0a21a', pants: '#2f6b3a', hat: '#c0392b' },
        lines: [
          { en: 'Hello, friend! My family grows cocoa in Ghana. We have plenty of beans. What will you give me for a big bag?',
            es: '¡Hola, amigo! Mi familia cultiva cacao en Ghana. Tenemos muchos granos. ¿Qué me das por una bolsa grande?',
            fa: 'سلام، دوست! خانوادهٔ من در غانا کاکائو می‌کارد. دانهٔ زیاد داریم. برای یک بوجی کلان به من چه می‌دهی؟' }
        ]
      },
      q: { en: 'What is the best thing to offer Akosua for her cocoa beans?', es: '¿Qué es lo mejor que puedes ofrecerle a Akosua por sus granos de cacao?', fa: 'بهترین چیزی که در بدل دانه‌های کاکائوی آکوسوا می‌توانی پیشنهاد کنی چیست؟' },
      choices: [
        { ok: true, t: { en: 'A sack of wheat flour from the European farms', es: 'Un saco de harina de trigo de las granjas de Europa', fa: 'یک بوجی آرد گندم از فارم‌های اروپا' },
          why: { en: 'Yes! Wheat grows well in Europe\'s cool fields. Ghana is hot and wet, so it buys most of its wheat. Each side gives what it has plenty of. That is [[trade|trade]].',
            es: '¡Sí! El trigo crece bien en los campos frescos de Europa. Ghana es caliente y húmeda, así que compra casi todo su trigo. Cada lado da lo que tiene en abundancia. Eso es el [[trade|comercio]].',
            fa: 'بله! گندم در کشتزارهای سرد اروپا خوب می‌روید. غانا گرم و مرطوب است، پس بیشتر گندمش را می‌خرد. هر طرف چیزی را می‌دهد که زیاد دارد. این [[trade|تجارت]] است.' } },
        { t: { en: 'A bag of cocoa beans', es: 'Una bolsa de granos de cacao', fa: 'یک بوجی دانهٔ کاکائو' },
          why: { en: 'Akosua already grows plenty of cocoa. Nobody trades for something they already have a lot of.',
            es: 'Akosua ya cultiva mucho cacao. Nadie cambia algo por lo que ya tiene en abundancia.',
            fa: 'آکوسوا خودش کاکائوی زیاد می‌کارد. هیچ‌کس چیزی را که زیاد دارد در بدل نمی‌گیرد.' } },
        { t: { en: 'A basket of mangoes', es: 'Una canasta de mangos', fa: 'یک سبد انبه' },
          why: { en: 'Mangoes grow in hot places like Ghana. Akosua can get them at home, so she does not need yours.',
            es: 'Los mangos crecen en lugares calientes como Ghana. Akosua los consigue en su país, así que no necesita los tuyos.',
            fa: 'انبه در جاهای گرم مثل غانا می‌روید. آکوسوا آن را در وطن خود پیدا می‌کند، پس به انبهٔ تو ضرورت ندارد.' } }
      ],
      item: { icon: '🍫', name: { en: 'A bag of cocoa beans', es: 'Una bolsa de granos de cacao', fa: 'یک بوجی دانهٔ کاکائو' } }
    }
  },

  scraps: [[1, 1], [46, 1], [44, 17]],
  smudges: [[10, 13], [27, 12], [9, 5]],

  challenge: {
    at: [40, 3],
    type: 'combo',
    stat: 'mov',
    title: { en: 'Get the ship to Europe', es: 'Lleva el barco a Europa', fa: 'کشتی را به اروپا برسان' },
    intro: { en: 'A ship full of bikes, phones and clothes must sail from this port in Asia to Europe. The Grump blocked the Suez Canal! Set the switches. Find a route that works.',
      es: 'Un barco lleno de bicicletas, teléfonos y ropa debe navegar de este puerto de Asia a Europa. ¡El Gruñón bloqueó el Canal de Suez! Mueve los interruptores. Encuentra una ruta que funcione.',
      fa: 'یک کشتی پر از بایسکل، تیلفون و لباس باید از این بندر آسیا به اروپا برود. غرغرو کانال سوئز را بست! کلیدها را تنظیم کن. راهی پیدا کن که کار کند.' },
    switches: [
      { name: { en: 'Route from Asia to Europe', es: 'Ruta de Asia a Europa', fa: 'راه از آسیا به اروپا' }, icon: '🧭',
        states: [ { en: 'Through the Suez Canal', es: 'Por el Canal de Suez', fa: 'از راه کانال سوئز' }, { en: 'Around Africa\'s Cape of Good Hope', es: 'Alrededor del cabo de Buena Esperanza, en África', fa: 'دور دماغهٔ امید نیک در افریقا' } ], start: 0 },
      { name: { en: 'Suez Canal', es: 'Canal de Suez', fa: 'کانال سوئز' }, icon: '🚢',
        states: [ { en: 'Open', es: 'Abierto', fa: 'باز' }, { en: 'Blocked by a stuck ship', es: 'Bloqueado por un barco atascado', fa: 'بسته با یک کشتی گیرمانده' } ], start: 1 },
      { name: { en: 'Strait of Malacca', es: 'Estrecho de Malaca', fa: 'تنگهٔ ملاکا' }, icon: '🌊',
        states: [ { en: 'Open', es: 'Abierto', fa: 'باز' }, { en: 'Crowded (long wait)', es: 'Lleno (espera larga)', fa: 'شلوغ (انتظار دراز)' } ], start: 0 }
    ],
    results: {
      '0,0,0': { ok: true,
        t: { en: 'The short route is open! The ship goes through the Strait of Malacca and the Suez Canal.', es: '¡La ruta corta está abierta! El barco pasa por el estrecho de Malaca y el Canal de Suez.', fa: 'راه کوتاه باز است! کشتی از تنگهٔ ملاکا و کانال سوئز می‌گذرد.' },
        show: [ { icon: '⏱️', ok: true, t: { en: 'about 30 days', es: 'unos 30 días', fa: 'حدود ۳۰ روز' } }, { icon: '⛽', ok: true, t: { en: 'normal fuel', es: 'combustible normal', fa: 'تیل عادی' } }, { icon: '💲', ok: true, t: { en: 'normal prices', es: 'precios normales', fa: 'قیمت‌های عادی' } } ] },
      '1,1,0': { ok: true,
        t: { en: 'The canal is blocked, so the ship takes the long way around Africa. It works, but it costs more.', es: 'El canal está bloqueado, así que el barco toma el camino largo alrededor de África. Funciona, pero cuesta más.', fa: 'کانال بسته است، پس کشتی راه دراز دور افریقا را می‌گیرد. کار می‌کند، اما گران‌تر است.' },
        show: [ { icon: '⏱️', ok: false, t: { en: 'about 40 days', es: 'unos 40 días', fa: 'حدود ۴۰ روز' } }, { icon: '⛽', ok: false, t: { en: 'much more fuel', es: 'mucho más combustible', fa: 'تیل بسیار بیشتر' } }, { icon: '💲', ok: false, t: { en: 'prices go up', es: 'suben los precios', fa: 'قیمت‌ها بالا می‌روند' } }, { icon: '✅', ok: true, t: { en: 'the goods still arrive', es: 'los productos igual llegan', fa: 'اجناس باز هم می‌رسند' } } ] },
      '0,1,0': { ok: false,
        t: { en: 'The canal is blocked! Your ship waits in a long line and goes nowhere. In 2021 one stuck ship closed the Suez Canal for six days. Open the canal, or take another route.', es: '¡El canal está bloqueado! Tu barco espera en una fila larga y no avanza. En 2021 un barco atascado cerró el Canal de Suez por seis días. Abre el canal o toma otra ruta.', fa: 'کانال بسته است! کشتی تو در یک صف دراز منتظر است و جایی نمی‌رود. در سال ۲۰۲۱ یک کشتی گیرمانده کانال سوئز را شش روز بست. کانال را باز کن یا راه دیگری بگیر.' },
        show: [ { icon: '⛔', ok: false, t: { en: 'stuck in line', es: 'atascado en la fila', fa: 'در صف گیر مانده' } }, { icon: '⏱️', ok: false, t: { en: 'days: nobody knows', es: 'días: nadie sabe', fa: 'روزها: کسی نمی‌داند' } }, { icon: '💲', ok: false, t: { en: 'prices go up', es: 'suben los precios', fa: 'قیمت‌ها بالا می‌روند' } } ] },
      '1,0,0': { ok: false,
        t: { en: 'This route works, but the canal is open! Going around Africa adds about 10 days and a lot of fuel. Find the fastest route.', es: 'Esta ruta funciona, ¡pero el canal está abierto! Dar la vuelta a África suma unos 10 días y mucho combustible. Encuentra la ruta más rápida.', fa: 'این راه کار می‌کند، اما کانال باز است! دور افریقا رفتن حدود ۱۰ روز و تیل زیادی اضافه می‌کند. سریع‌ترین راه را پیدا کن.' },
        show: [ { icon: '⏱️', ok: false, t: { en: 'about 40 days', es: 'unos 40 días', fa: 'حدود ۴۰ روز' } }, { icon: '⛽', ok: false, t: { en: 'much more fuel', es: 'mucho más combustible', fa: 'تیل بسیار بیشتر' } } ] }
    },
    otherwise: { ok: false,
      t: { en: 'Ships wait in a long line at the Strait of Malacca. Both routes from East Asia pass through it. Every narrow place on the route must be open.', es: 'Los barcos esperan en una fila larga en el estrecho de Malaca. Las dos rutas desde Asia Oriental pasan por allí. Todos los pasos estrechos de la ruta deben estar abiertos.', fa: 'کشتی‌ها در تنگهٔ ملاکا در صف دراز منتظر هستند. هر دو راه از آسیای شرقی از آنجا می‌گذرند. همهٔ گذرگاه‌های تنگ این راه باید باز باشند.' },
      show: [ { icon: '⏳', ok: false, t: { en: 'long wait at the strait', es: 'espera larga en el estrecho', fa: 'انتظار دراز در تنگه' } }, { icon: '💲', ok: false, t: { en: 'prices go up', es: 'suben los precios', fa: 'قیمت‌ها بالا می‌روند' } } ] },
    success: { en: 'The ship is moving again! When a narrow place is blocked, ships take the long way. More days at sea means more fuel and more pay for the crew, so prices go up in stores far away.',
      es: '¡El barco se mueve otra vez! Cuando un paso estrecho se bloquea, los barcos toman el camino largo. Más días en el mar significa más combustible y más sueldo para la tripulación, así que suben los precios en tiendas lejanas.',
      fa: 'کشتی دوباره حرکت می‌کند! وقتی یک گذرگاه تنگ بسته شود، کشتی‌ها راه دراز را می‌گیرند. روزهای بیشتر در بحر یعنی تیل بیشتر و مزد بیشتر برای کارکنان کشتی، پس قیمت‌ها در دکان‌های دور بالا می‌روند.' }
  },

  boss: {
    at: [23, 14],
    stat: 'hei',
    need: 3,
    name: { en: 'The Knot Grump', es: 'El Gruñón del Nudo', fa: 'غرغروی گره' },
    appear: { en: 'The Knot Grump is waiting in Africa\'s dry grassland, by the long way around!', es: '¡El Gruñón del Nudo espera en las praderas secas de África, junto al camino largo!', fa: 'غرغروی گره در علفزار خشک افریقا، کنار راه دراز، منتظر است!' },
    taunt: { en: 'Ha! I tied every sea road in a knot. No ships, no trade, no bread on the shelf!', es: '¡Ja! Hice un nudo con cada camino del mar. ¡Sin barcos, sin comercio, sin pan en el estante!', fa: 'ها! هر راه بحری را گره زدم. نه کشتی، نه تجارت، نه نان در قفسه!' },
    win: { en: 'The knot comes loose and the sea roads open. Atlas page 8.2 sails into your hands, along with a Sail for your bag!', es: 'El nudo se suelta y los caminos del mar se abren. ¡La página 8.2 del atlas llega navegando a tus manos, junto con una Vela para tu bolsa!', fa: 'گره باز می‌شود و راه‌های بحری باز می‌شوند. صفحهٔ ۸.۲ اطلس با یک بادبان برای کوله‌ات به دستت می‌رسد!' },
    questions: [
      { q: { en: 'What is opportunity cost?', es: '¿Qué es el costo de oportunidad?', fa: 'هزینهٔ فرصت چیست؟' },
        choices: [{ en: 'What you give up to make one choice instead of another', es: 'Lo que dejas de tener al elegir una cosa en vez de otra', fa: 'چیزی که هنگام انتخاب یک چیز به جای چیز دیگر از دست می‌دهی' }, { en: 'The price a shopper pays at the register', es: 'El precio que paga un comprador en la caja', fa: 'قیمتی که خریدار نزد صندوق می‌پردازد' }, { en: 'The cost of shipping goods across an ocean', es: 'El costo de enviar productos por el océano', fa: 'هزینهٔ بردن اجناس از بحر' }, { en: 'The tax a country charges on imports', es: 'El impuesto que cobra un país a las importaciones', fa: 'مالیه‌ای که یک کشور بر واردات می‌گیرد' }], answer: 0,
        why: { en: 'Every choice means giving something else up. That is the opportunity cost.', es: 'Cada elección significa dejar otra cosa. Ese es el costo de oportunidad.', fa: 'هر انتخاب یعنی از دست دادن چیز دیگر. این هزینهٔ فرصت است.' } },
      { q: { en: 'What does it mean for a country to specialize?', es: '¿Qué significa que un país se especialice?', fa: 'تخصص پیدا کردن یک کشور یعنی چه؟' },
        choices: [{ en: 'It makes a few things instead of trying to make everything', es: 'Hace pocas cosas en vez de intentar hacerlo todo', fa: 'چند چیز محدود می‌سازد، به جای ساختن همه چیز' }, { en: 'It refuses to trade with its neighbors', es: 'Se niega a comerciar con sus vecinos', fa: 'از تجارت با همسایه‌ها انکار می‌کند' }, { en: 'It makes everything it needs by itself', es: 'Hace todo lo que necesita por sí mismo', fa: 'هر چیزی را که لازم دارد خودش می‌سازد' }, { en: 'It trains every worker to do the same job', es: 'Entrena a todos los trabajadores para el mismo trabajo', fa: 'همهٔ کارگران را برای یک کار تربیه می‌کند' }], answer: 0,
        why: { en: 'A country that specializes makes a few things well, then trades for the rest.', es: 'Un país que se especializa hace bien pocas cosas y luego comercia por lo demás.', fa: 'کشوری که تخصص دارد چند چیز را خوب می‌سازد و بقیه را با تجارت می‌گیرد.' } },
      { q: { en: 'Sunland gives up 5 bags of corn to build one bike. Rainland gives up only 2. Who should build the bikes?', es: 'Sunland deja 5 bolsas de maíz para hacer una bicicleta. Rainland deja solo 2. ¿Quién debería hacer las bicicletas?', fa: 'سان‌لند برای ساختن یک بایسکل ۵ خریطه جواری از دست می‌دهد. رین‌لند فقط ۲. چه کسی باید بایسکل بسازد؟' },
        choices: [{ en: 'Rainland, because it gives up less corn', es: 'Rainland, porque deja menos maíz', fa: 'رین‌لند، چون جواری کمتری از دست می‌دهد' }, { en: 'Sunland, because it makes more of everything', es: 'Sunland, porque hace más de todo', fa: 'سان‌لند، چون از همه چیز بیشتر می‌سازد' }, { en: 'Neither one should build bikes', es: 'Ninguno debería hacer bicicletas', fa: 'هیچ کدام نباید بایسکل بسازد' }, { en: 'Both should build the same number', es: 'Los dos deberían hacer el mismo número', fa: 'هر دو باید به یک اندازه بسازند' }], answer: 0,
        why: { en: 'What matters is what each side gives up. Rainland gives up less, so it builds bikes and Sunland grows corn.', es: 'Lo que importa es lo que cada uno deja. Rainland deja menos, así que hace las bicicletas y Sunland cultiva maíz.', fa: 'مهم این است که هر طرف چه از دست می‌دهد. رین‌لند کمتر از دست می‌دهد، پس بایسکل می‌سازد و سان‌لند جواری می‌کارد.' } },
      { q: { en: 'What is a chokepoint?', es: '¿Qué es un punto de estrangulamiento?', fa: 'گلوگاه چیست؟' },
        choices: [{ en: 'A narrow passage that a lot of trade must pass through', es: 'Un paso estrecho por donde debe pasar mucho comercio', fa: 'گذرگاه تنگی که تجارت زیادی باید از آن بگذرد' }, { en: 'A port where ships refuel', es: 'Un puerto donde los barcos cargan combustible', fa: 'بندری که کشتی‌ها در آن تیل می‌گیرند' }, { en: 'A tax collected at a border', es: 'Un impuesto que se cobra en la frontera', fa: 'مالیه‌ای که در سرحد گرفته می‌شود' }, { en: 'A country that grows only one crop', es: 'Un país que cultiva un solo producto', fa: 'کشوری که فقط یک نوع حاصل می‌کارد' }], answer: 0,
        why: { en: 'Chokepoints like the Suez Canal are narrow, so one problem can stop a lot of trade.', es: 'Los puntos de estrangulamiento como el Canal de Suez son estrechos, así que un problema puede parar mucho comercio.', fa: 'گلوگاه‌هایی مثل کانال سوئز تنگ هستند، پس یک مشکل می‌تواند تجارت زیادی را متوقف کند.' } },
      { q: { en: 'Which two seas does the Suez Canal join?', es: '¿Qué dos mares une el Canal de Suez?', fa: 'کانال سوئز کدام دو بحیره را به هم وصل می‌کند؟' },
        choices: [{ en: 'The Mediterranean Sea and the Red Sea', es: 'El mar Mediterráneo y el mar Rojo', fa: 'بحیرهٔ مدیترانه و بحیرهٔ سرخ' }, { en: 'The Black Sea and the Caspian Sea', es: 'El mar Negro y el mar Caspio', fa: 'بحیرهٔ سیاه و بحیرهٔ کسپین' }, { en: 'The Atlantic and the Pacific', es: 'El Atlántico y el Pacífico', fa: 'اقیانوس اطلس و اقیانوس آرام' }, { en: 'The North Sea and the Baltic Sea', es: 'El mar del Norte y el mar Báltico', fa: 'بحیرهٔ شمال و بحیرهٔ بالتیک' }], answer: 0,
        why: { en: 'The Suez Canal cuts through Egypt from the Mediterranean to the Red Sea. The Panama Canal joins the Atlantic and the Pacific.', es: 'El Canal de Suez cruza Egipto del Mediterráneo al mar Rojo. El Canal de Panamá une el Atlántico y el Pacífico.', fa: 'کانال سوئز از مصر می‌گذرد و مدیترانه را به بحیرهٔ سرخ وصل می‌کند. کانال پاناما اطلس و آرام را وصل می‌کند.' } },
      { q: { en: 'Why does the Panama Canal need locks when the Suez Canal does not?', es: '¿Por qué el Canal de Panamá necesita esclusas y el Canal de Suez no?', fa: 'چرا کانال پاناما دروازهٔ آبی لازم دارد اما کانال سوئز ندارد؟' },
        choices: [{ en: 'Panama\'s route has to cross higher ground', es: 'La ruta de Panamá tiene que cruzar tierras más altas', fa: 'راه پاناما باید از زمین بلندتر بگذرد' }, { en: 'Panama\'s canal is far longer', es: 'El canal de Panamá es mucho más largo', fa: 'کانال پاناما خیلی درازتر است' }, { en: 'Panama gets much more rain', es: 'En Panamá llueve mucho más', fa: 'در پاناما باران بسیار بیشتر می‌بارد' }, { en: 'Panama\'s canal was built more recently', es: 'El canal de Panamá se construyó más recientemente', fa: 'کانال پاناما تازه‌تر ساخته شده' }], answer: 0,
        why: { en: 'Locks lift ships up over the hills of Panama and lower them down again. Suez is flat and at sea level.', es: 'Las esclusas suben los barcos sobre los cerros de Panamá y luego los bajan. Suez es plano y está al nivel del mar.', fa: 'دروازه‌های آبی کشتی‌ها را از تپه‌های پاناما بالا می‌برند و دوباره پایین می‌آورند. سوئز هموار و هم‌سطح بحر است.' } },
      { q: { en: 'In March 2021 one ship got stuck across the Suez Canal. What happened next?', es: 'En marzo de 2021 un barco se atascó atravesado en el Canal de Suez. ¿Qué pasó después?', fa: 'در مارچ ۲۰۲۱ یک کشتی در کانال سوئز کج گیر ماند. بعد چه شد؟' },
        choices: [{ en: 'The canal closed for six days', es: 'El canal se cerró por seis días', fa: 'کانال شش روز بسته شد' }, { en: 'The canal opened again in a few hours', es: 'El canal se abrió otra vez en pocas horas', fa: 'کانال در چند ساعت دوباره باز شد' }, { en: 'All ships went to the Panama Canal that day', es: 'Todos los barcos fueron al Canal de Panamá ese día', fa: 'همهٔ کشتی‌ها همان روز به کانال پاناما رفتند' }, { en: 'Nothing changed for other ships', es: 'Nada cambió para los otros barcos', fa: 'برای کشتی‌های دیگر هیچ چیز تغییر نکرد' }], answer: 0,
        why: { en: 'One stuck ship closed the busiest shortcut in world shipping for six days. Hundreds of ships waited.', es: 'Un barco atascado cerró el atajo más ocupado del transporte marítimo por seis días. Cientos de barcos esperaron.', fa: 'یک کشتی گیرمانده پرکارترین راه میان‌بر کشتیرانی جهان را شش روز بست. صدها کشتی منتظر ماندند.' } },
      { q: { en: 'A country buys all of one product from just one place. What is the risk?', es: 'Un país compra todo un producto en un solo lugar. ¿Cuál es el riesgo?', fa: 'یک کشور تمام یک جنس را فقط از یک جا می‌خرد. خطرش چیست؟' },
        choices: [{ en: 'It has a problem if that place stops selling', es: 'Tiene un problema si ese lugar deja de vender', fa: 'اگر آن جا فروش را بس کند، مشکل پیدا می‌کند' }, { en: 'It will always pay the lowest price', es: 'Siempre pagará el precio más bajo', fa: 'همیشه کمترین قیمت را می‌پردازد' }, { en: 'It can never trade with other countries', es: 'Nunca puede comerciar con otros países', fa: 'هرگز نمی‌تواند با کشورهای دیگر تجارت کند' }, { en: 'There is no risk at all', es: 'No hay ningún riesgo', fa: 'هیچ خطری ندارد' }], answer: 0,
        why: { en: 'Interdependence helps, but depending on one supplier is risky. Trouble there quickly becomes trouble here.', es: 'La interdependencia ayuda, pero depender de un solo vendedor es riesgoso. Un problema allá pronto es un problema aquí.', fa: 'وابستگی متقابل کمک می‌کند، اما وابسته بودن به یک فروشنده خطر دارد. مشکل آنجا زود مشکل اینجا می‌شود.' } }
    ]
  },

  learned: [
    { en: 'No country has everything. Countries [[specialize|specialize]] and [[trade|trade]], choosing what to make by [[opportunity cost|opportunity cost]].', es: 'Ningún país lo tiene todo. Los países se [[specialize|especializan]] y [[trade|comercian]], y eligen qué hacer según el [[opportunity cost|costo de oportunidad]].', fa: 'هیچ کشوری همه چیز ندارد. کشورها [[specialize|تخصص]] پیدا می‌کنند و [[trade|تجارت]] می‌کنند و با [[opportunity cost|هزینهٔ فرصت]] انتخاب می‌کنند چه بسازند.' },
    { en: 'Trade ties countries together. That is [[interdependence|interdependence]]: more choices and lower prices, but trouble in one place travels far.', es: 'El comercio une a los países. Eso es la [[interdependence|interdependencia]]: más opciones y precios más bajos, pero un problema en un lugar viaja lejos.', fa: 'تجارت کشورها را به هم وصل می‌کند. این [[interdependence|وابستگی متقابل]] است: انتخاب‌های بیشتر و قیمت‌های پایین‌تر، اما مشکل یک جا تا دورها می‌رسد.' },
    { en: 'The Strait of Malacca, the Suez Canal and the Panama Canal are [[chokepoint|chokepoints]]. If one is blocked, ships go the long way, and prices go up.', es: 'El estrecho de Malaca, el Canal de Suez y el Canal de Panamá son [[chokepoint|puntos de estrangulamiento]]. Si uno se bloquea, los barcos van por el camino largo y suben los precios.', fa: 'تنگهٔ ملاکا، کانال سوئز و کانال پاناما [[chokepoint|گلوگاه]] هستند. اگر یکی بسته شود، کشتی‌ها از راه دراز می‌روند و قیمت‌ها بالا می‌روند.' }
  ],
  reflect: {
    q: { en: 'Look at the label on your shoes, your clothes or your phone. Where was it made? How do you think it traveled to you?', es: 'Mira la etiqueta de tus zapatos, tu ropa o tu teléfono. ¿Dónde se hizo? ¿Cómo crees que viajó hasta ti?', fa: 'به برچسپ بوت، لباس یا تیلفون خود نگاه کن. کجا ساخته شده؟ فکر می‌کنی چطور تا نزد تو سفر کرده؟' },
    starter: { en: 'One thing I own was made in', es: 'Una cosa que tengo se hizo en', fa: 'یک چیزی که دارم ساخته شده در' }
  }
};
