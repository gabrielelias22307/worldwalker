/* WORLDWALKER · Episode 7.3 · Manufacturing, Trade and Supply Chains (WG.10)
   East Asia. The map follows a phone: a mine in the hills (north-west), a fenced chip factory (north-east),
   assembly factories and a warehouse (south-west), and a city with a store beside the port and container docks
   (south-east). A railway joins them. Earns the Trade Seal (engine). */
window.EPISODE = {
  id: '7.3',
  realm: 7,
  sol: 'WG.10',
  title: { en: 'Manufacturing, Trade and Supply Chains', es: 'Fábricas, comercio y cadenas de suministro', fa: 'تولید، تجارت و زنجیرهٔ تأمین' },
  place: { en: 'Harbor of a Thousand Parts', es: 'Puerto de las Mil Piezas', fa: 'بندر هزار پرزه' },
  intro: [
    { en: 'The Grump jammed the supply chain! Phones are stuck halfway, and the stores are empty.', es: '¡El Gruñón trabó la cadena de suministro! Los teléfonos están atascados y las tiendas, vacías.', fa: 'غرغرو زنجیرهٔ تأمین را بند کرد! مبایل‌ها نیمه‌راه گیر مانده‌اند و دکان‌ها خالی هستند.' },
    { en: 'Talk to the chip engineer, line leader and crane operator. Then fix the stone.', es: 'Habla con la ingeniera de chips, la jefa de línea y el operador de grúa. Luego arregla la piedra.', fa: 'با انجنیر چِپ، سرپرست خط و کارگر جرثقیل گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [121.0, 24.0],
    start: [
      { en: 'Welcome to Taiwan, an island that makes many of the world\'s computer chips.',
        es: 'Bienvenido a Taiwán, una isla que hace muchos de los chips de computadora del mundo.',
        fa: 'به تایوان خوش آمدی، جزیره‌ای که بسیاری از چیپ‌های کمپیوتر جهان را می‌سازد.' },
      { en: 'One phone holds parts made in many different countries.',
        es: 'Un solo teléfono tiene piezas hechas en muchos países distintos.',
        fa: 'یک موبایل پرزه‌هایی دارد که در کشورهای زیادی ساخته شده‌اند.' },
      { en: 'Most of the world\'s trade travels by ship.',
        es: 'La mayor parte del comercio del mundo viaja en barco.',
        fa: 'بیشتر تجارت جهان با کشتی جابه‌جا می‌شود.' }
    ],
    page: { en: 'The biggest container ships are almost as long as four football fields.',
      es: 'Los barcos de contenedores más grandes miden casi lo mismo que cuatro canchas de fútbol.',
      fa: 'بزرگ‌ترین کشتی‌های کانتینر تقریباً به درازی چهار میدان فوتبال هستند.' },
    guess: {
      q: { en: 'How do most of the world\'s goods travel?', es: '¿Cómo viaja la mayoría de los productos del mundo?', fa: 'بیشتر کالاهای جهان چطور سفر می‌کنند؟' },
      choices: [
        { t: { en: '🚢 By ship', es: '🚢 En barco', fa: '🚢 با کشتی' }, ok: true },
        { t: { en: '✈️ By plane', es: '✈️ En avión', fa: '✈️ با طیاره' } }
      ],
      why: { en: 'Ships carry most world trade because one ship holds thousands of containers.', es: 'Los barcos llevan casi todo el comercio del mundo, porque un barco carga miles de contenedores.', fa: 'کشتی‌ها بیشتر تجارت جهان را می‌برند، چون یک کشتی هزاران کانتینر را می‌برد.' }
    },
    next: {
      q: { en: 'Australia\'s middle is very dry. Where do most Australians live?', es: 'El centro de Australia es muy seco. ¿Dónde vive la mayoría?', fa: 'وسط آسترالیا بسیار خشک است. بیشتر مردم کجا زندگی می‌کنند؟' },
      choices: [
        { t: { en: '🏜️ The dry middle', es: '🏜️ En el centro seco', fa: '🏜️ وسط خشک' } },
        { t: { en: '🏖️ Near the coast', es: '🏖️ Cerca de la costa', fa: '🏖️ نزدیک ساحل' }, ok: true }
      ],
      why: { en: 'The coast gets more rain, so most Australians live in cities near the sea.', es: 'La costa recibe más lluvia, por eso casi todos viven en ciudades cerca del mar.', fa: 'ساحل باران بیشتر دارد، پس بیشتر مردم آسترالیا در شهرهای نزدیک بحر زندگی می‌کنند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [19, 4], name: { en: 'Wei-ling', es: 'Wei-ling', fa: 'وی‌لینگ' },
      look: { skin: 1, hair: '#16110d', shirt: '#f2f2f2', pants: '#9fb4c8', style: 'long' },
      lines: [
        { en: 'Hi! I\'m on my break. In there, I wear a full white suit.', es: '¡Hola! Estoy en mi descanso. Allá adentro uso un traje blanco completo.', fa: 'سلام! وقت استراحتم است. آن داخل، یک لباس سفید کامل می‌پوشم.' },
        { en: 'One speck of dust can ruin a chip. So the air is super clean.', es: 'Una pizca de polvo puede arruinar un chip. Por eso el aire es superlimpio.', fa: 'یک ذره گرد می‌تواند یک چیپ را خراب کند. برای همین هوا خیلی پاک است.' }
      ] },
    { at: [23, 4], name: { en: 'Mr. Tsai', es: 'Sr. Tsai', fa: 'آقای تسای' },
      look: { skin: 2, hair: '#3a3a3a', shirt: '#4a6fa5', pants: '#2a2a33', style: 'short' },
      lines: [
        { en: 'Tea break! Want a cup? I pack chips into tiny trays all day.', es: '¡Pausa para el té! ¿Quieres una taza? Empaco chips en bandejitas todo el día.', fa: 'وقت چای! یک پیاله می‌خواهی؟ من تمام روز چیپ‌ها را در قطی‌های کوچک بسته می‌کنم.' },
        { en: 'Chips are small but cost a lot, so many fly by plane, not ship.', es: 'Los chips son pequeños pero caros, así que muchos viajan en avión, no en barco.', fa: 'چیپ‌ها کوچک اما قیمتی هستند، پس بسیاری با طیاره می‌روند، نه با کشتی.' }
      ] },
    { at: [26, 4], name: { en: 'Joy', es: 'Joy', fa: 'جوی' },
      look: { skin: 3, hair: '#100c0a', shirt: '#e3a33b', pants: '#3b4a5e', style: 'long' },
      lines: [
        { en: 'Come sit! I came from the Philippines to work here.', es: '¡Ven, siéntate! Vine de Filipinas a trabajar aquí.', fa: 'بیا بنشین! من از فیلیپین آمدم تا اینجا کار کنم.' },
        { en: 'I send money home each month. Workers move along supply chains too!', es: 'Cada mes mando dinero a casa. ¡Los trabajadores también se mueven en las cadenas de suministro!', fa: 'هر ماه به خانه پول می‌فرستم. کارگرها هم در زنجیرهٔ تأمین جابه‌جا می‌شوند!' }
      ] },
    { at: [3, 14], name: { en: 'Ah-ming', es: 'Ah-ming', fa: 'آمینگ' },
      look: { skin: 2, hair: '#1c1612', shirt: '#3f8f6a', pants: '#33333d', style: 'short', hat: '#2e5f8a' },
      lines: [
        { en: 'Five more minutes of break! Then I snap screens onto phones again.', es: '¡Cinco minutos más de descanso! Después vuelvo a poner pantallas en teléfonos.', fa: 'پنج دقیقهٔ دیگر استراحت! بعد دوباره صفحه‌ها را روی موبایل‌ها می‌چسپانم.' },
        { en: 'Screens come from one country, batteries from another. We put them together.', es: 'Las pantallas vienen de un país y las baterías de otro. Aquí las juntamos.', fa: 'صفحه‌ها از یک کشور می‌آیند و بتری‌ها از کشور دیگر. ما اینجا آن‌ها را یکجا می‌کنیم.' }
      ] },
    { at: [9, 14], name: { en: 'Shu-fen', es: 'Shu-fen', fa: 'شوفن' },
      look: { skin: 1, hair: '#2a1d16', shirt: '#b05a9a', pants: '#2f2f3f', style: 'bun' },
      lines: [
        { en: 'Careful, the floor is wet. I just mopped up my spilled soup.', es: 'Cuidado, el piso está mojado. Acabo de limpiar mi sopa derramada.', fa: 'احتیاط، زمین تر است. همین حالا شوربای ریخته‌ام را پاک کردم.' },
        { en: 'I test every phone. If one part is late, the whole line stops.', es: 'Pruebo cada teléfono. Si una pieza llega tarde, toda la línea se detiene.', fa: 'من هر موبایل را امتحان می‌کنم. اگر یک پرزه دیر برسد، تمام خط کار می‌ایستد.' }
      ] },
    { at: [17, 17], name: { en: 'Grandma Mei-hua', es: 'Abuela Mei-hua', fa: 'مادرکلان می‌هوا' },
      look: { skin: 1, hair: '#e0e0e0', shirt: '#8e5bd6', pants: '#3a3a5a', style: 'short' },
      lines: [
        { en: 'Come in! My grandson works at the port, loading big metal boxes.', es: '¡Pasa! Mi nieto trabaja en el puerto, cargando grandes cajas de metal.', fa: 'بیا داخل! نواسه‌ام در بندر کار می‌کند و صندوق‌های بزرگ آهنی بار می‌کند.' },
        { en: 'Every box is the same size, so cranes, trains and trucks can all carry them.', es: 'Todas las cajas tienen el mismo tamaño, así que grúas, trenes y camiones pueden llevarlas.', fa: 'همهٔ صندوق‌ها یک اندازه هستند، پس جرثقیل، ریل و لاری همه می‌توانند آن‌ها را ببرند.' }
      ] },
    { at: [4, 18], name: { en: 'Uncle Hao', es: 'Tío Hao', fa: 'کاکا هائو' },
      look: { skin: 3, hair: '#221a14', shirt: '#c46a2f', pants: '#2c3a2c', style: 'short' },
      lines: [
        { en: 'Come in, but quietly. My wife works nights at the factory.', es: 'Pasa, pero en silencio. Mi esposa trabaja de noche en la fábrica.', fa: 'بیا داخل، اما آرام. خانمم شب‌ها در فابریکه کار می‌کند.' },
        { en: 'I fix bikes. Taiwan makes lots of bikes, with parts from all over.', es: 'Yo arreglo bicicletas. Taiwán hace muchas bicicletas, con piezas de todas partes.', fa: 'من بایسکل جور می‌کنم. تایوان بایسکل‌های زیادی می‌سازد، با پرزه‌هایی از همه جا.' }
      ] }
  ],

  map: [
    'MMMMMMMMMMMMMMMMTTTTTTTTTTTTTTT=',
    'MMMMMMMMMMMMMM.MFFFFFFFFFFFFF~==',
    'MMMM::::MMMMM.G.FlXXX.XXX.XXF~==',
    'MMM:::r::::MM...FlXXX.XXX.XXF~==',
    'MM::r:::r:::M...FlXdX.XdX.dXF~==',
    'MM:::r::::::,...llllllllllllF~==',
    'MMM::::r::::x...FTlllllllllTF~==',
    'MMMM:::::::.....FlllllllllllF~==',
    'M.......:.......FFFFFFFlFFFFF~==',
    'M--------------------------.~===',
    'M.......:..:..............|.~===',
    'T.......:..:....UU.UU.UJJ.|.~===',
    'T.XXXX.XXXX:..T.UUUUUUUJJ.|.~===',
    'T.XXXX.XXXX:....UU.UU.U...|kkkk=',
    'T.XdXX.XXdX:.............x|k~===',
    'T:::::::::::::::::::::::::|k~===',
    'T..........:....RRR.mmm...|k~===',
    'T.JJJJJ....:....hdh....JJ..kkkk=',
    'T.JJdJJ.T.T:...........JJ..k~===',
    'T..........:::::::::::::::..~===',
    'T..........:................~===',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~==='
  ],
  start: [3, 8],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): a new factory between the railway and the harbor, where the parts arrive (situation) */
  build: [
    { id: 'factory', kind: 'place', board: [25, 10], tile: 'X', ok: [[27, 9], [27, 10], [27, 11], [27, 12]], cost: { wood: 1 },
      name: { en: 'The new factory', es: 'La fábrica nueva', fa: 'فابریکهٔ نو' },
      ask: { en: 'A phone is made from parts that come from many countries. That is a [[supply chain|supply chain]]. Build a new [[assembly|assembly]] factory where the parts arrive fast: between the railway and the harbor.',
        es: 'Un teléfono se hace con piezas que vienen de muchos países. Eso es una [[supply chain|cadena de suministro]]. Construye una fábrica nueva de [[assembly|ensamblaje]] donde las piezas llegan rápido: entre el tren y el puerto.',
        fa: 'یک مبایل از پرزه‌هایی ساخته می‌شود که از کشورهای زیاد می‌آیند. این یک [[supply chain|زنجیرهٔ تأمین]] است. یک فابریکهٔ نو [[assembly|اسمبل]] را جایی بساز که پرزه‌ها زود می‌رسند: بین خط آهن و بندر.' },
      why: { en: 'Right by the ships and the train. The parts arrive fast!', es: '¡Junto a los barcos y el tren! Las piezas llegan rápido.', fa: 'درست کنار کشتی‌ها و ریل. پرزه‌ها زود می‌رسند!' },
      wrong: { en: 'Not here. The factory goes between the railway and the harbor, where the parts arrive.', es: 'Aquí no. La fábrica va entre el tren y el puerto, donde llegan las piezas.', fa: 'این جا نه. فابریکه بین خط آهن و بندر می‌رود، جایی که پرزه‌ها می‌رسند.' },
      wrongBy: [
        { x: 1, y: 10, w: 13, h: 11, t: { en: 'Too far from the harbor. The parts come by ship, so they would take too long to get here.', es: 'Demasiado lejos del puerto. Las piezas llegan en barco, así que tardarían mucho en llegar aquí.', fa: 'از بندر خیلی دور است. پرزه‌ها با کشتی می‌آیند، پس رسیدن آن‌ها به این جا خیلی وقت می‌گیرد.' } },
        { x: 1, y: 1, w: 15, h: 8, t: { en: 'These are the hills by the mine. The parts arrive at the harbor, far away, and there is no flat land for a big factory.', es: 'Estas son las colinas de la mina. Las piezas llegan al puerto, lejos de aquí, y no hay tierra plana para una fábrica grande.', fa: 'این‌ها تپه‌های کنار معدن است. پرزه‌ها به بندر می‌رسند که دور است، و زمین هموار برای یک فابریکهٔ بزرگ نیست.' } }
      ],
      done: { en: 'The factory is built! Ships bring the parts to the harbor, and the train carries the new phones away. Factories grow where goods can come and go fast: that is a good situation.', es: '¡La fábrica está lista! Los barcos traen las piezas al puerto y el tren se lleva los teléfonos nuevos. Las fábricas crecen donde los productos llegan y salen rápido: esa es una buena situación.', fa: 'فابریکه ساخته شد! کشتی‌ها پرزه‌ها را به بندر می‌آورند و ریل مبایل‌های نو را می‌برد. فابریکه‌ها جایی رشد می‌کنند که کالا زود بیاید و برود: این یک موقعیت خوب است.' } }
  ],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 8], at: [10, 4], decor: 'gem',
      clue: { en: 'From this note, walk 4 steps north, then 1 step west. Something is hidden there.', es: 'Desde esta nota, camina 4 pasos al norte y luego 1 paso al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۴ قدم به شمال برو، بعد ۱ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'North is up, west is left. A gem hid in the mine! Mines dig copper for phone wires.', es: 'El norte está arriba y el oeste a la izquierda. ¡Había una gema en la mina! Las minas sacan cobre para los cables.', fa: 'شمال بالا و غرب طرف چپ است. یک جواهر در معدن پنهان بود! معدن‌ها مس را برای سیم مبایل بیرون می‌کشند.' } },
    { clueAt: [6, 20], at: [26, 9], decor: 'coinold',
      clue: { en: 'Copper rides the train east from the mine. Stand on the corner where the railway turns south.', es: 'El cobre viaja en tren al este desde la mina. Párate en la esquina donde la vía gira al sur.', fa: 'مس با ریل از معدن به شرق می‌رود. در کنجی بایست که خط آهن به طرف جنوب دور می‌خورد.' },
      text: { en: 'The railway corner! Trains carry heavy loads like copper far over land. An old coin lay here.', es: '¡La esquina de la vía! Los trenes llevan cargas pesadas como el cobre muy lejos por tierra. Aquí había una moneda antigua.', fa: 'کنج خط آهن! ریل بارهای سنگین مثل مس را از راه خشکه تا جای دور می‌برد. یک سکهٔ کهنه این جا بود.' } }
  ],
  // only the Rail Pass (Episode 3.3) opens the gate to the old mine track in the northern hills
  secret: { tool: 'rail', at: [14, 1],
    text: { en: 'The Rail Pass opened the old mine track! A note in the chest says one tiny phone chip can hold billions of parts. Many of the best chips in the world are made in Taiwan.',
      es: '¡El Pase de Tren abrió la vieja vía de la mina! Una nota en el cofre dice que un chip diminuto de teléfono puede tener miles de millones de piezas. Muchos de los mejores chips del mundo se hacen en Taiwán.',
      fa: 'کارت قطار راه کهنهٔ معدن را باز کرد! یک یادداشت در صندوق می‌گوید یک چِپ کوچک مبایل می‌تواند میلیاردها پرزه داشته باشد. بسیاری از بهترین چِپ‌های دنیا در تایوان ساخته می‌شوند.' } },

  words: {
    'supply chain': { en: 'all the steps and places needed to make a product and bring it to you', es: 'todos los pasos y lugares que se necesitan para hacer un producto y llevártelo', fa: 'همهٔ قدم‌ها و جاهایی که برای ساختن یک کالا و رساندنش به تو لازم است' },
    semiconductor: { en: 'a tiny chip that controls electricity inside phones, cars and computers', es: 'un chip diminuto que controla la electricidad dentro de teléfonos, carros y computadoras', fa: 'یک چِپ بسیار کوچک که برق را در داخل مبایل، موتر و کمپیوتر کنترول می‌کند' },
    specialization: { en: 'when a place makes what it does best and trades for the rest', es: 'cuando un lugar hace lo que mejor sabe hacer y comercia para conseguir lo demás', fa: 'وقتی یک جا چیزی را می‌سازد که بهتر از همه بلد است و باقی را از راه تجارت به دست می‌آورد' },
    container: { en: 'a big steel box that moves goods by ship, train and truck', es: 'una gran caja de acero que lleva productos en barco, tren y camión', fa: 'یک صندوق بزرگ فولادی که کالا را با کشتی، ریل و لاری می‌برد' },
    assembly: { en: 'putting parts together to make a finished product', es: 'juntar las piezas para hacer un producto terminado', fa: 'یکجا کردن پرزه‌ها برای ساختن یک کالای تکمیل‌شده' },
    'raw material': { en: 'something taken from nature, like metal from a mine, used to make things', es: 'algo que se saca de la naturaleza, como el metal de una mina, para hacer cosas', fa: 'چیزی که از طبیعت گرفته می‌شود، مثل فلز از معدن، تا چیزها ساخته شوند' },
    export: { en: 'a product sold and sent to another country', es: 'un producto que se vende y se manda a otro país', fa: 'کالایی که به کشور دیگر فروخته و فرستاده می‌شود' }
  },

  npcs: [
    {
      x: 21, y: 6,
      name: { en: 'Yu-ting', es: 'Yu-ting', fa: 'یوتینگ' },
      role: { en: 'Chip engineer', es: 'Ingeniera de chips', fa: 'انجنیر چِپ' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#eef3f8', pants: '#9fb6cc', robe: true },
      lines: [
        { en: 'Welcome! I make [[semiconductor|semiconductors]]: tiny chips that control electricity in phones, cars and computers.', es: '¡Bienvenido! Hago [[semiconductor|semiconductores]]: chips diminutos que controlan la electricidad en teléfonos, carros y computadoras.', fa: 'خوش آمدی! من [[semiconductor|نیمه‌هادی]] می‌سازم: چِپ‌های کوچک که برق را در مبایل، موتر و کمپیوتر کنترول می‌کنند.' },
        { en: 'Roughly nine in ten of the world\'s most advanced chips are made here, in Taiwan.', es: 'Cerca de nueve de cada diez de los chips más avanzados del mundo se hacen aquí, en Taiwán.', fa: 'تقریباً نُه از هر ده چِپ پیشرفتهٔ جهان اینجا، در تایوان، ساخته می‌شود.' },
        { en: 'One factory costs billions of dollars. No country does it alone: Japan sends pure chemicals.', es: 'Una fábrica cuesta miles de millones de dólares. Ningún país lo hace solo: Japón manda químicos puros.', fa: 'یک فابریکه میلیاردها دالر قیمت دارد. هیچ کشوری این کار را تنها نمی‌کند: جاپان مواد کیمیایی پاک می‌فرستد.' },
        { en: 'Machines from the Netherlands print circuits with light. South Korea makes lots of memory chips.', es: 'Máquinas de los Países Bajos imprimen circuitos con luz. Corea del Sur hace muchísimos chips de memoria.', fa: 'ماشین‌های هالند مدارها را با نور چاپ می‌کنند. کوریای جنوبی چِپ حافظهٔ بسیار زیاد می‌سازد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is a semiconductor?', es: '¿Qué es un semiconductor?', fa: 'نیمه‌هادی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A tiny chip that controls electricity', es: 'Un chip diminuto que controla la electricidad', fa: 'یک چِپ کوچک که برق را کنترول می‌کند' },
            why: { en: 'Phones, cars and computers all need these chips to work.', es: 'Los teléfonos, carros y computadoras necesitan estos chips para funcionar.', fa: 'مبایل، موتر و کمپیوتر همه برای کار به این چِپ‌ها ضرورت دارند.' } },
          { t: { en: 'A steel box that moves goods by ship', es: 'Una caja de acero que lleva productos en barco', fa: 'یک صندوق فولادی که کالا را با کشتی می‌برد' },
            why: { en: 'That is a container. A semiconductor is a tiny chip.', es: 'Eso es un contenedor. Un semiconductor es un chip diminuto.', fa: 'آن کانتینر است. نیمه‌هادی یک چِپ کوچک است.' } },
          { t: { en: 'A factory that puts finished phones together', es: 'Una fábrica que arma teléfonos terminados', fa: 'فابریکه‌ای که مبایل‌های تکمیل‌شده را یکجا می‌کند' },
            why: { en: 'That is an assembly factory. The chip is one part that goes inside.', es: 'Eso es una fábrica de ensamblaje. El chip es una pieza que va adentro.', fa: 'آن فابریکهٔ یکجا کردن است. چِپ یک پرزه است که در داخل می‌رود.' } }
        ]
      }
    },
    {
      x: 5, y: 16,
      name: { en: 'Zhou Hui', es: 'Zhou Hui', fa: 'ژو هوی' },
      role: { en: 'Factory line leader', es: 'Jefa de línea de la fábrica', fa: 'سرپرست خط فابریکه' },
      look: { skin: 2, hair: '#161616', shirt: '#2f6fd6', pants: '#3a3a3a' },
      lines: [
        { en: 'My line does [[assembly|assembly]]. Screens, batteries, cameras and chips arrive here from different places.', es: 'Mi línea hace [[assembly|ensamblaje]]. Pantallas, baterías, cámaras y chips llegan aquí de lugares diferentes.', fa: 'خط من کار [[assembly|یکجا کردن پرزه‌ها]] را می‌کند. صفحه، بتری، کمره و چِپ از جاهای مختلف اینجا می‌رسند.' },
        { en: 'Mines in Chile, Australia and the Congo dig [[raw material|raw materials]]: copper, lithium, cobalt.', es: 'Minas en Chile, Australia y el Congo sacan [[raw material|materias primas]]: cobre, litio y cobalto.', fa: 'معدن‌ها در چیلی، آسترالیا و کانگو [[raw material|مواد خام]] بیرون می‌کشند: مس، لیتیم و کوبالت.' },
        { en: 'Mines, chips, my line, ships: a [[supply chain|supply chain]]! Millions of our phones are for [[export|export]].', es: 'Minas, chips, mi línea, barcos: ¡una [[supply chain|cadena de suministro]]! Millones de nuestros teléfonos son para [[export|exportar]].', fa: 'معدن، چِپ، خط من، کشتی: یک [[supply chain|زنجیرهٔ تأمین]]! میلیون‌ها مبایل ما برای [[export|صادرات]] است.' },
        { en: 'Each place does what it does best and trades for the rest. That is [[specialization|specialization]].', es: 'Cada lugar hace lo que mejor sabe hacer y comercia por lo demás. Eso es la [[specialization|especialización]].', fa: 'هر جا کاری را می‌کند که بهتر بلد است و باقی را با تجارت می‌گیرد. این [[specialization|تخصص]] است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What is specialization?', es: '¿Qué es la especialización?', fa: 'تخصص چیست؟' },
        choices: [
          { ok: true, t: { en: 'Making what you do best and trading for the rest', es: 'Hacer lo que mejor sabes y comerciar por lo demás', fa: 'ساختن چیزی که بهتر بلدی و گرفتن باقی با تجارت' },
            why: { en: 'Taiwan makes chips, the Netherlands makes chip machines, and they trade.', es: 'Taiwán hace chips, los Países Bajos hacen máquinas para chips, y comercian.', fa: 'تایوان چِپ می‌سازد، هالند ماشین چِپ، و با هم تجارت می‌کنند.' } },
          { t: { en: 'Making every part of a product inside one country', es: 'Hacer todas las piezas de un producto dentro de un solo país', fa: 'ساختن همهٔ پرزه‌های یک کالا در داخل یک کشور' },
            why: { en: 'That is the opposite. Specialization means each place does one part well.', es: 'Eso es lo contrario. Especialización es que cada lugar haga bien una parte.', fa: 'این برعکس است. تخصص یعنی هر جا یک بخش را خوب انجام دهد.' } },
          { t: { en: 'Training each worker to do many different jobs', es: 'Entrenar a cada trabajador para hacer muchos trabajos diferentes', fa: 'تربیه کردن هر کارگر برای کارهای مختلف زیاد' },
            why: { en: 'Specialization is about focusing on what you do best, not doing everything.', es: 'La especialización es enfocarse en lo que mejor haces, no hacerlo todo.', fa: 'تخصص یعنی تمرکز روی کاری که بهتر بلدی، نه انجام دادن همه کار.' } }
        ]
      }
    },
    {
      x: 25, y: 16,
      remember: { ep: '7.2', t: { en: 'Hello! My cousin Ms. Park is a city planner. She says you found her red flag at the river mouth. A city there can trade by river and by sea, just like our port!', es: '¡Hola! Mi prima la Sra. Park es planificadora de ciudades. Dice que encontraste su bandera roja en la desembocadura del río. ¡Una ciudad allí puede comerciar por el río y por el mar, igual que nuestro puerto!', fa: 'سلام! دخترخاله‌ام خانم پارک طراح شهر است. او می‌گوید تو بیرق سرخ او را در دهانهٔ دریا پیدا کردی. یک شهر در آن جا می‌تواند از راه دریا و بحر تجارت کند، درست مثل بندر ما!' } },
      name: { en: 'Min-jun', es: 'Min-jun', fa: 'مین‌جون' },
      role: { en: 'Crane operator at the port', es: 'Operador de grúa del puerto', fa: 'کارگر جرثقیل در بندر' },
      look: { skin: 1, hair: '#202020', shirt: '#e67e22', pants: '#2b3a55' },
      lines: [
        { en: 'My crane lifts [[container|containers]]: steel boxes that go by ship, train and truck, unopened.', es: 'Mi grúa sube [[container|contenedores]]: cajas de acero que van en barco, tren y camión, sin abrirse.', fa: 'جرثقیل من [[container|کانتینرها]] را بالا می‌کند: صندوق‌های فولادی که بسته با کشتی، ریل و لاری می‌روند.' },
        { en: 'The biggest ships carry thousands at once! A phone sails the Pacific for weeks.', es: '¡Los barcos más grandes llevan miles a la vez! Un teléfono navega por el Pacífico durante semanas.', fa: 'بزرگ‌ترین کشتی‌ها هزاران کانتینر را یکجا می‌برند! یک مبایل هفته‌ها در بحر آرام سفر می‌کند.' },
        { en: 'Then a warehouse, a store, you. If one link breaks, the whole chain feels it.', es: 'Luego un almacén, una tienda y tú. Si se rompe un eslabón, toda la cadena lo siente.', fa: 'بعد گدام، دکان، و تو. اگر یک حلقه بشکند، تمام زنجیر آن را حس می‌کند.' },
        { en: 'In 2021, nearly finished cars waited for one missing chip. Prices rose, even in Virginia!', es: 'En 2021, carros casi terminados esperaban por un chip que faltaba. ¡Los precios subieron, hasta en Virginia!', fa: 'در سال ۲۰۲۱، موترهای تقریباً تکمیل‌شده برای یک چِپ کم منتظر ماندند. قیمت‌ها بالا رفت، حتی در ویرجینیا!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'In 2021, many nearly finished cars sat waiting in parking lots. Why?', es: 'En 2021, muchos carros casi terminados esperaban en estacionamientos. ¿Por qué?', fa: 'در سال ۲۰۲۱، بسیاری از موترهای تقریباً تکمیل‌شده در پارکینگ‌ها منتظر ماندند. چرا؟' },
        choices: [
          { ok: true, t: { en: 'One small chip was missing', es: 'Faltaba un chip pequeño', fa: 'یک چِپ کوچک کم بود' },
            why: { en: 'A car cannot be finished without its chips. One missing part stopped the whole chain.', es: 'Un carro no se puede terminar sin sus chips. Una pieza que faltaba detuvo toda la cadena.', fa: 'موتر بدون چِپ‌هایش تکمیل نمی‌شود. یک پرزهٔ کم تمام زنجیر را ایستاد کرد.' } },
          { t: { en: 'Steel ran out around the world', es: 'Se acabó el acero en todo el mundo', fa: 'فولاد در تمام دنیا تمام شد' },
            why: { en: 'The cars had their steel bodies. What they were missing was chips.', es: 'Los carros tenían su carrocería de acero. Lo que les faltaba eran chips.', fa: 'موترها بدنهٔ فولادی داشتند. چیزی که کم داشتند چِپ بود.' } },
          { t: { en: 'People stopped buying cars', es: 'La gente dejó de comprar carros', fa: 'مردم دیگر موتر نخریدند' },
            why: { en: 'People still wanted cars, so prices went up. The cars could not be finished.', es: 'La gente seguía queriendo carros, por eso los precios subieron. Los carros no se podían terminar.', fa: 'مردم هنوز موتر می‌خواستند، پس قیمت‌ها بالا رفت. موترها تکمیل نمی‌شدند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 6, text: { en: 'MINE · [[raw material|Raw materials]] start here. Copper, lithium and cobalt come from mines in Chile, Australia and the Congo.', es: 'MINA · Las [[raw material|materias primas]] empiezan aquí. El cobre, el litio y el cobalto vienen de minas en Chile, Australia y el Congo.', fa: 'معدن · [[raw material|مواد خام]] از اینجا شروع می‌شوند. مس، لیتیم و کوبالت از معدن‌های چیلی، آسترالیا و کانگو می‌آیند.' } },
    { x: 25, y: 14, text: { en: 'PORT · Ships, trains and trucks all carry the same [[container|containers]]. Goods change ride, but the box stays closed.',
      es: 'PUERTO · Barcos, trenes y camiones llevan los mismos [[container|contenedores]]. Los productos cambian de transporte, pero la caja sigue cerrada.',
      fa: 'بندر · کشتی، ریل و لاری همه همان [[container|کانتینرها]] را می‌برند. کالا وسیلهٔ سفر را عوض می‌کند، اما صندوق بسته می‌ماند.' } }
  ],

  /* the quest: Grandpa Ganbold at the mine (gold !) -> Rizal the train driver -> trade with Ms. Lan at the assembly factories -> back to Ganbold */
  quest: {
    stat: 'mov',
    title: { en: 'A Phone for Grandpa', es: 'Un teléfono para el abuelo', fa: 'یک مبایل برای پدرکلان' },
    giver: {
      x: 9, y: 6,
      name: { en: 'Grandpa Ganbold', es: 'Abuelo Ganbold', fa: 'پدرکلان گانبولد' },
      role: { en: 'Retired miner', es: 'Minero jubilado', fa: 'کارگر متقاعد معدن' },
      look: { skin: 3, hair: '#cfc8bc', shirt: '#5b6e3a', pants: '#3a3226', hat: '#8a6a3a' },
      lines: [
        { en: 'Hello! My granddaughter lives in the port city. I want a phone to call her.', es: '¡Hola! Mi nieta vive en la ciudad del puerto. Quiero un teléfono para llamarla.', fa: 'سلام! نواسه‌ام در شهر بندری زندگی می‌کند. یک مبایل می‌خواهم تا به او زنگ بزنم.' },
        { en: 'Our town has no phone factory. Rizal, the train driver, knows every stop. Ask him!', es: 'Nuestro pueblo no tiene fábrica de teléfonos. Rizal, el conductor del tren, conoce cada parada. ¡Pregúntale!', fa: 'شهرک ما فابریکهٔ مبایل ندارد. ریزال، رانندهٔ ریل، هر ایستگاه را می‌شناسد. از او بپرس!' }
      ],
      wait: { en: 'Rizal is east of here. Follow the railway east to the chip factory fence.', es: 'Rizal está al este. Sigue la vía del tren al este hasta la cerca de la fábrica de chips.', fa: 'ریزال در شرق اینجا است. خط ریل را به شرق دنبال کن تا جنگلهٔ فابریکهٔ چِپ.' },
      thanks: { en: 'A phone! Now I can call my granddaughter. Copper from our mine helped make it!', es: '¡Un teléfono! Ahora puedo llamar a mi nieta. ¡El cobre de nuestra mina ayudó a hacerlo!', fa: 'یک مبایل! حالا می‌توانم به نواسه‌ام زنگ بزنم. مس معدن ما در ساختن آن کمک کرد!' }
    },
    contact: {
      x: 22, y: 10,
      name: { en: 'Rizal', es: 'Rizal', fa: 'ریزال' },
      role: { en: 'Train driver', es: 'Conductor del tren', fa: 'رانندهٔ ریل' },
      look: { skin: 4, hair: '#141010', shirt: '#2d5f9a', pants: '#2a2a2a', hat: '#2d5f9a' },
      lines: [
        { en: 'My train carries copper from your mine to the factories.', es: 'Mi tren lleva cobre de tu mina a las fábricas.', fa: 'ریل من مس را از معدن شما به فابریکه‌ها می‌برد.' },
        { en: 'Each place makes what it does best and trades for the rest. That is [[specialization|specialization]].', es: 'Cada lugar hace lo que mejor sabe hacer y comercia por lo demás. Eso es [[specialization|especialización]].', fa: 'هر جا چیزی را می‌سازد که بهتر بلد است و باقی را با تجارت می‌گیرد. این [[specialization|تخصص]] است.' },
        { en: 'Ms. Lan trades phones in the south-west. Bring her what your town has plenty of!', es: 'La Sra. Lan cambia teléfonos en el suroeste. ¡Llévale lo que tu pueblo tiene de sobra!', fa: 'خانم لان در جنوب غرب مبایل تبادله می‌کند. برایش چیزی ببر که شهرک شما زیاد دارد!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 14, y: 18,
        name: { en: 'Ms. Lan', es: 'Sra. Lan', fa: 'خانم لان' },
        role: { en: 'Phone factory trader', es: 'Comerciante de la fábrica de teléfonos', fa: 'تاجر فابریکهٔ مبایل' },
        look: { skin: 2, hair: '#1b1512', shirt: '#e07a3f', pants: '#34404f', style: 'bun' },
        lines: [
          { en: 'Welcome! My factory puts phones together. We need metal from many places to make them.',
            es: '¡Bienvenido! Mi fábrica arma teléfonos. Necesitamos metal de muchos lugares para hacerlos.',
            fa: 'خوش آمدی! فابریکهٔ من مبایل‌ها را اسمبل می‌کند. برای ساختن آن‌ها به فلز از جاهای زیاد ضرورت داریم.' }
        ]
      },
      q: { en: 'Your mine town wants one phone. What will you bring me for it?', es: 'Tu pueblo minero quiere un teléfono. ¿Qué me traes a cambio?', fa: 'شهرک معدنی شما یک مبایل می‌خواهد. در بدلش برایم چه می‌آوری؟' },
      choices: [
        { ok: true, at: [4, 3], icon: '🛒', t: { en: 'A cart of copper from the mine', es: 'Un carrito de cobre de la mina', fa: 'یک گادی مس از معدن' },
          why: { en: 'Copper! Your mine has plenty of it. My factory needs this [[raw material|raw material]] to make phones. Both sides win.', es: '¡Cobre! Tu mina tiene de sobra. Mi fábrica necesita esta [[raw material|materia prima]] para hacer teléfonos. Los dos ganan.', fa: 'مس! معدن شما مس زیاد دارد. فابریکهٔ من برای ساختن مبایل به این [[raw material|مادهٔ خام]] ضرورت دارد. هر دو طرف فایده می‌کنند.' } },
        { at: [12, 13], icon: '📦', t: { en: 'A box of phones from the factory', es: 'Una caja de teléfonos de la fábrica', fa: 'یک کارتن مبایل از فابریکه' },
          why: { en: 'Those phones are from my own factory! I make plenty of them. Bring me something my factory does not have.', es: '¡Esos teléfonos son de mi propia fábrica! Hago muchísimos. Tráeme algo que mi fábrica no tenga.', fa: 'این مبایل‌ها از فابریکهٔ خود من است! من زیاد می‌سازم. چیزی بیاور که فابریکهٔ من ندارد.' } },
        { at: [10, 3], icon: '⚙️', t: { en: 'The miners\' only digging machine', es: 'La única máquina de excavar de los mineros', fa: 'تنها ماشین کندن کارگران معدن' },
          why: { en: 'Without it, the miners cannot work. Then nobody digs copper! Trade what you have plenty of, not what you need.', es: 'Sin ella, los mineros no pueden trabajar. ¡Y nadie saca cobre! Cambia lo que tienes de sobra, no lo que necesitas.', fa: 'بدون آن، کارگران معدن کار کرده نمی‌توانند. بعد هیچ کس مس نمی‌کَند! چیزی را تبادله کن که زیاد داری، نه چیزی که ضرورت داری.' } }
      ],
      item: { icon: '📱', name: { en: 'A phone for Grandpa Ganbold', es: 'Un teléfono para el abuelo Ganbold', fa: 'یک مبایل برای پدرکلان گانبولد' } }
    }
  },

  scraps: [[5, 2], [17, 7], [30, 17]],
  smudges: [[9, 4], [19, 20], [8, 16]],

  challenge: {
    at: [21, 17],
    type: 'route', // in the world; the card version (order) is the fallback
    // follow the phone across the map: the mine in the north-west hills, the fenced chip factory, the assembly factories in the south-west,
    // the crane on the pier, the warehouse by the city, the market stall, and you at your house
    spots: [[7, 2], [25, 6], [6, 13], [27, 15], [25, 18], [23, 16], [15, 17]],
    stat: 'mov',
    title: { en: 'Follow the phone', es: 'Sigue al teléfono', fa: 'دنبال مبایل برو' },
    intro: { en: 'The Grump scrambled the trip a phone takes. Walk to each step on the map in order, from the ground to your hand.',
      es: 'El Gruñón revolvió el viaje que hace un teléfono. Camina a cada paso del mapa en orden, desde la tierra hasta tu mano.',
      fa: 'غرغرو سفر یک مبایل را مخلوط کرد. به ترتیب، از زمین تا دست تو، به هر قدم روی نقشه برو.' },
    items: [
      { icon: '⛏️', t: { en: 'A mine digs up metals like copper and lithium', es: 'Una mina saca metales como cobre y litio', fa: 'یک معدن فلزهایی مثل مس و لیتیم بیرون می‌کشد' } },
      { icon: '🔬', t: { en: 'A chip factory makes tiny chips (semiconductors)', es: 'Una fábrica de chips hace chips diminutos (semiconductores)', fa: 'یک فابریکهٔ چِپ چِپ‌های کوچک (نیمه‌هادی) می‌سازد' } },
      { icon: '🏭', t: { en: 'An assembly factory puts all the parts together', es: 'Una fábrica de ensamblaje junta todas las piezas', fa: 'یک فابریکه همهٔ پرزه‌ها را یکجا می‌کند' } },
      { icon: '🚢', t: { en: 'A crane loads the container onto a ship at the port', es: 'Una grúa sube el contenedor a un barco en el puerto', fa: 'جرثقیل کانتینر را در بندر روی کشتی می‌گذارد' } },
      { icon: '📦', t: { en: 'A warehouse stores the phones near your city', es: 'Un almacén guarda los teléfonos cerca de tu ciudad', fa: 'یک گدام مبایل‌ها را نزدیک شهر تو نگه می‌دارد' } },
      { icon: '🏪', t: { en: 'A store sells the phone', es: 'Una tienda vende el teléfono', fa: 'یک دکان مبایل را می‌فروشد' } },
      { icon: '📱', t: { en: 'You hold the phone in your hand', es: 'Tienes el teléfono en tu mano', fa: 'مبایل در دست توست' } }
    ],
    why: { en: 'Start in the ground and end in your hand. The parts must be made before the phone is put together, and the phone must cross the sea before a store can sell it.',
      es: 'Empieza en la tierra y termina en tu mano. Las piezas se hacen antes de armar el teléfono, y el teléfono cruza el mar antes de que una tienda lo venda.',
      fa: 'از زمین شروع کن و در دست خودت تمام کن. پرزه‌ها باید پیش از یکجا شدن مبایل ساخته شوند، و مبایل باید پیش از فروش در دکان از بحر بگذرد.' },
    success: { en: 'The supply chain runs again, and the stores are full!', es: '¡La cadena de suministro funciona otra vez y las tiendas están llenas!', fa: 'زنجیرهٔ تأمین دوباره کار می‌کند و دکان‌ها پر هستند!' }
  },

  boss: {
    at: [30, 13],
    stat: 'reg',
    need: 3,
    name: { en: 'The Tangle Grump', es: 'El Gruñón Enredado', fa: 'غرغروی گره' },
    appear: { en: 'The Tangle Grump is knotting up the ships at the end of the pier!', es: '¡El Gruñón Enredado está enredando los barcos al final del muelle!', fa: 'غرغروی گره کشتی‌ها را در آخر اسکله گره می‌زند!' },
    taunt: { en: 'Knots and knots! Pull one link, and the whole chain falls apart!', es: '¡Nudos y más nudos! ¡Jala un eslabón y toda la cadena se deshace!', fa: 'گره پشت گره! یک حلقه را بکش، تمام زنجیر از هم می‌پاشد!' },
    win: { en: 'The knots come loose, and the ships sail again. Atlas page 7.3 floats into your hands!', es: 'Los nudos se sueltan y los barcos navegan otra vez. ¡La página 7.3 del atlas cae en tus manos!', fa: 'گره‌ها باز می‌شوند و کشتی‌ها دوباره حرکت می‌کنند. صفحهٔ ۷.۳ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a supply chain?', es: '¿Qué es una cadena de suministro?', fa: 'زنجیرهٔ تأمین چیست؟' },
        choices: [{ en: 'Every step from the mine to your hand', es: 'Cada paso desde la mina hasta tu mano', fa: 'هر قدم از معدن تا دست تو' }, { en: 'A chain of stores owned by one company', es: 'Una cadena de tiendas de una sola empresa', fa: 'یک سلسله دکان که مال یک شرکت است' }, { en: 'A line of trucks waiting at a port', es: 'Una fila de camiones esperando en un puerto', fa: 'یک صف لاری که در بندر منتظر است' }, { en: 'The money a country earns from exports', es: 'El dinero que gana un país con sus exportaciones', fa: 'پولی که یک کشور از صادرات به دست می‌آورد' }], answer: 0,
        why: { en: 'From the mine to your hand, every step is a link in the supply chain.', es: 'Desde la mina hasta tu mano, cada paso es un eslabón de la cadena.', fa: 'از معدن تا دست تو، هر قدم یک حلقه در زنجیرهٔ تأمین است.' } },
      { q: { en: 'What is specialization?', es: '¿Qué es la especialización?', fa: 'تخصص چیست؟' },
        choices: [{ en: 'Making what you do best and trading for the rest', es: 'Hacer lo que mejor sabes y comerciar por lo demás', fa: 'ساختن چیزی که بهتر بلدی و گرفتن باقی با تجارت' }, { en: 'Making every part of a product inside one country', es: 'Hacer todas las piezas de un producto en un solo país', fa: 'ساختن همهٔ پرزه‌های یک کالا در یک کشور' }, { en: 'Selling a product for more than it cost', es: 'Vender un producto por más de lo que costó', fa: 'فروختن کالا به قیمتی بیشتر از مصرفش' }, { en: 'Training workers to do many different jobs', es: 'Entrenar trabajadores para muchos trabajos diferentes', fa: 'تربیه کردن کارگران برای کارهای مختلف زیاد' }], answer: 0,
        why: { en: 'Each place focuses on its best step, then trades.', es: 'Cada lugar se enfoca en su mejor paso y luego comercia.', fa: 'هر جا روی بهترین قدم خود تمرکز می‌کند، بعد تجارت می‌کند.' } },
      { q: { en: 'What is a semiconductor?', es: '¿Qué es un semiconductor?', fa: 'نیمه‌هادی چیست؟' },
        choices: [{ en: 'A tiny chip that controls electricity', es: 'Un chip diminuto que controla la electricidad', fa: 'یک چِپ کوچک که برق را کنترول می‌کند' }, { en: 'A ship that carries cars across the ocean', es: 'Un barco que lleva carros por el océano', fa: 'کشتی‌ای که موترها را از بحر می‌برد' }, { en: 'A steel box that moves goods by ship', es: 'Una caja de acero que lleva productos en barco', fa: 'یک صندوق فولادی که کالا را با کشتی می‌برد' }, { en: 'A factory that puts together finished phones', es: 'Una fábrica que arma teléfonos terminados', fa: 'فابریکه‌ای که مبایل‌های تکمیل‌شده را یکجا می‌کند' }], answer: 0,
        why: { en: 'Semiconductors are the chips that let phones, cars and computers work.', es: 'Los semiconductores son los chips que hacen funcionar teléfonos, carros y computadoras.', fa: 'نیمه‌هادی‌ها چِپ‌هایی هستند که مبایل، موتر و کمپیوتر را به کار می‌اندازند.' } },
      { q: { en: 'Where are roughly nine in ten of the world\'s most advanced chips made?', es: '¿Dónde se hacen cerca de nueve de cada diez de los chips más avanzados del mundo?', fa: 'تقریباً نُه از هر ده چِپ پیشرفتهٔ جهان کجا ساخته می‌شود؟' },
        choices: [{ en: 'Taiwan', es: 'Taiwán', fa: 'تایوان' }, { en: 'Mongolia', es: 'Mongolia', fa: 'مغولستان' }, { en: 'Chile', es: 'Chile', fa: 'چیلی' }, { en: 'Canada', es: 'Canadá', fa: 'کانادا' }], answer: 0,
        why: { en: 'Taiwan specializes in the most advanced chips.', es: 'Taiwán se especializa en los chips más avanzados.', fa: 'تایوان در پیشرفته‌ترین چِپ‌ها تخصص دارد.' } },
      { q: { en: 'What does the Netherlands add to making chips?', es: '¿Qué aportan los Países Bajos para hacer chips?', fa: 'هالند در ساختن چِپ چه کمکی می‌کند؟' },
        choices: [{ en: 'The machines that print circuits with light', es: 'Las máquinas que imprimen los circuitos con luz', fa: 'ماشین‌هایی که مدارها را با نور چاپ می‌کنند' }, { en: 'Huge amounts of memory chips', es: 'Enormes cantidades de chips de memoria', fa: 'مقدار بسیار زیاد چِپ حافظه' }, { en: 'Assembly of millions of finished phones', es: 'El ensamblaje de millones de teléfonos terminados', fa: 'یکجا کردن میلیون‌ها مبایل تکمیل‌شده' }, { en: 'Copper from big mines', es: 'Cobre de minas grandes', fa: 'مس از معدن‌های بزرگ' }], answer: 0,
        why: { en: 'Chip factories around the world use machines made in the Netherlands. South Korea is known for memory chips.', es: 'Las fábricas de chips del mundo usan máquinas hechas en los Países Bajos. Corea del Sur es conocida por los chips de memoria.', fa: 'فابریکه‌های چِپ در تمام دنیا از ماشین‌های ساخت هالند استفاده می‌کنند. کوریای جنوبی به چِپ حافظه مشهور است.' } },
      { q: { en: 'Can one country make an advanced chip completely on its own?', es: '¿Puede un solo país hacer un chip avanzado completamente solo?', fa: 'آیا یک کشور می‌تواند یک چِپ پیشرفته را کاملاً تنها بسازد؟' },
        choices: [{ en: 'No. Many countries each do one step.', es: 'No. Muchos países hacen cada uno un paso.', fa: 'نه. کشورهای زیاد هر کدام یک قدم را انجام می‌دهند.' }, { en: 'Yes. Taiwan does every step alone.', es: 'Sí. Taiwán hace cada paso solo.', fa: 'بلی. تایوان هر قدم را تنها انجام می‌دهد.' }, { en: 'Yes. Any country with a mine can.', es: 'Sí. Cualquier país con una mina puede.', fa: 'بلی. هر کشوری که معدن دارد می‌تواند.' }, { en: 'No, because chips are made only in space.', es: 'No, porque los chips solo se hacen en el espacio.', fa: 'نه، چون چِپ فقط در فضا ساخته می‌شود.' }], answer: 0,
        why: { en: 'Machines, chemicals, design and factories come from different countries.', es: 'Las máquinas, los químicos, el diseño y las fábricas vienen de diferentes países.', fa: 'ماشین‌ها، مواد کیمیایی، طرح و فابریکه‌ها از کشورهای مختلف می‌آیند.' } },
      { q: { en: 'In 2021, many nearly finished cars sat waiting in parking lots. Why?', es: 'En 2021, muchos carros casi terminados esperaban en estacionamientos. ¿Por qué?', fa: 'در سال ۲۰۲۱، بسیاری از موترهای تقریباً تکمیل‌شده در پارکینگ‌ها منتظر ماندند. چرا؟' },
        choices: [{ en: 'One small chip was missing', es: 'Faltaba un chip pequeño', fa: 'یک چِپ کوچک کم بود' }, { en: 'Steel ran out around the world', es: 'Se acabó el acero en el mundo', fa: 'فولاد در دنیا تمام شد' }, { en: 'A storm closed every port', es: 'Una tormenta cerró todos los puertos', fa: 'طوفان همهٔ بندرها را بست' }, { en: 'Car buyers had stopped shopping', es: 'Los compradores dejaron de comprar', fa: 'خریداران دیگر خرید نمی‌کردند' }], answer: 0,
        why: { en: 'One missing link in a supply chain can stop a whole product.', es: 'Un eslabón que falta en la cadena puede detener todo un producto.', fa: 'یک حلقهٔ کم در زنجیرهٔ تأمین می‌تواند تمام یک کالا را ایستاد کند.' } },
      { q: { en: 'What is a shipping container?', es: '¿Qué es un contenedor de carga?', fa: 'کانتینر باربری چیست؟' },
        choices: [{ en: 'A steel box that moves goods by ship, train and truck', es: 'Una caja de acero que lleva productos en barco, tren y camión', fa: 'یک صندوق فولادی که کالا را با کشتی، ریل و لاری می‌برد' }, { en: 'A tiny chip that controls the electricity in a phone', es: 'Un chip diminuto que controla la electricidad de un teléfono', fa: 'یک چِپ کوچک که برق مبایل را کنترول می‌کند' }, { en: 'A store near the port that sells new phones', es: 'Una tienda junto al puerto que vende teléfonos', fa: 'دکانی کنار بندر که مبایل نو می‌فروشد' }, { en: 'A mine that digs copper and lithium from hills', es: 'Una mina que saca cobre y litio de las colinas', fa: 'معدنی که مس و لیتیم را از تپه‌ها می‌کَند' }], answer: 0,
        why: { en: 'The same box can ride a ship, a train and a truck without being opened.', es: 'La misma caja puede ir en barco, tren y camión sin abrirse.', fa: 'همان صندوق بدون باز شدن می‌تواند با کشتی، ریل و لاری برود.' } }
    ]
  },

  learned: [
    { en: 'A [[supply chain|supply chain]] is every step from the mine to your hand. One phone uses parts from many countries.', es: 'Una [[supply chain|cadena de suministro]] es cada paso desde la mina hasta tu mano. Un teléfono usa piezas de muchos países.', fa: '[[supply chain|زنجیرهٔ تأمین]] هر قدم از معدن تا دست توست. یک مبایل پرزه‌هایی از کشورهای زیاد دارد.' },
    { en: 'Taiwan makes most of the world\'s most advanced [[semiconductor|chips]], and South Korea makes huge amounts of memory chips. Places use [[specialization|specialization]] and trade.', es: 'Taiwán hace la mayoría de los [[semiconductor|chips]] más avanzados del mundo y Corea del Sur hace enormes cantidades de chips de memoria. Los lugares usan la [[specialization|especialización]] y comercian.', fa: 'تایوان بیشتر پیشرفته‌ترین [[semiconductor|چِپ‌های]] جهان را می‌سازد و کوریای جنوبی مقدار بسیار زیاد چِپ حافظه. جاها از [[specialization|تخصص]] و تجارت استفاده می‌کنند.' },
    { en: '[[container|Containers]] move goods by ship, train and truck. When one link breaks, like the 2021 chip shortage, people far away feel it.', es: 'Los [[container|contenedores]] llevan productos en barco, tren y camión. Cuando se rompe un eslabón, como la falta de chips en 2021, la gente lejana lo siente.', fa: '[[container|کانتینرها]] کالا را با کشتی، ریل و لاری می‌برند. وقتی یک حلقه می‌شکند، مثل کمبود چِپ در ۲۰۲۱، مردم دور هم آن را حس می‌کنند.' }
  ],
  reflect: {
    q: { en: 'Pick something you use every day, like your phone or your shoes. Where do you think its parts came from, and how did it reach you?', es: 'Elige algo que usas todos los días, como tu teléfono o tus zapatos. ¿De dónde crees que vinieron sus piezas y cómo llegó hasta ti?', fa: 'یک چیزی را که هر روز استفاده می‌کنی انتخاب کن، مثل مبایل یا بوت‌هایت. فکر می‌کنی پرزه‌هایش از کجا آمده‌اند و چطور به تو رسیده؟' },
    starter: { en: 'Something I use every day is', es: 'Algo que uso todos los días es', fa: 'چیزی که هر روز استفاده می‌کنم' }
  }
};
