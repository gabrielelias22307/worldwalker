/* WORLDWALKER · Episode 4.3 · Resources, Economy and Trade (WG.7)
   South Africa. The map follows the trade chain: a mine (top-left), Johannesburg (bottom-left),
   a railway east past sugarcane fields, and the port of Durban on the Indian Ocean (right).
   Finishing this episode earns the Water Gourd (set in the engine). See docs/EPISODE-FORMAT.md */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'WG.7',
  title: { en: 'Resources, Economy and Trade', es: 'Recursos, economía y comercio', fa: 'منابع، اقتصاد و تجارت' },
  place: { en: 'From the Mine to Durban', es: 'De la mina a Durban', fa: 'از معدن تا دوربان' },
  intro: [
    { en: 'The Grump broke South Africa\'s trade chain! Ore is stuck. Ships wait at the port.',
      es: '¡El Gruñón rompió la cadena de comercio de Sudáfrica! El mineral está atascado. Los barcos esperan en el puerto.',
      fa: 'غرغرو زنجیر تجارت افریقای جنوبی را شکست! سنگ معدنی گیر مانده. کشتی‌ها در بندر منتظر هستند.' },
    { en: 'Talk to the engineer, the banker and the crane driver. Then fix the compass stone.',
      es: 'Habla con la ingeniera, el banquero y la operadora de grúa. Luego arregla la piedra de la brújula.',
      fa: 'با انجنیر، کارمند بانک و رانندهٔ جرثقیل گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [28.0, -26.2],
    start: [
      { en: 'Welcome to Johannesburg, South Africa. The city grew up around gold mines.',
        es: 'Bienvenido a Johannesburgo, Sudáfrica. La ciudad creció alrededor de minas de oro.',
        fa: 'به ژوهانسبرگ در افریقای جنوبی خوش آمدی. این شهر دور معدن‌های طلا بزرگ شد.' },
      { en: 'Some gold mines here go more than two miles under the ground.',
        es: 'Algunas minas de oro aquí bajan más de tres kilómetros bajo tierra.',
        fa: 'بعضی معدن‌های طلای اینجا بیشتر از سه کیلومتر زیر زمین می‌روند.' },
      { en: 'South Africa mines most of the world\'s platinum.',
        es: 'Sudáfrica saca la mayor parte del platino del mundo.',
        fa: 'افریقای جنوبی بیشتر پلاتین جهان را استخراج می‌کند.' }
    ],
    page: { en: 'Durban is one of the busiest ports in Africa.',
      es: 'Durban es uno de los puertos con más trabajo de África.',
      fa: 'دوربان یکی از پرکارترین بندرهای افریقا است.' }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [6, 10], name: { en: 'Grandpa Bongani', es: 'Abuelo Bongani', fa: 'پدرکلان بونگانی' },
      look: { skin: 5, hair: '#d0d0d0', shirt: '#3a5a8a', pants: '#2a2a2a', style: 'short', hat: '#5a4a3a' },
      lines: [
        { en: 'Sit, sit! I worked in the gold mines for many years.', es: '¡Siéntate, siéntate! Trabajé en las minas de oro por muchos años.', fa: 'بنشین، بنشین! من سال‌ها در معدن‌های طلا کار کردم.' },
        { en: 'Deep down, the rock is hot. We needed big fans to cool the air.', es: 'Muy abajo, la roca está caliente. Necesitábamos ventiladores grandes para enfriar el aire.', fa: 'در عمق زمین سنگ داغ است. برای خنک کردن هوا پکه‌های کلان لازم داشتیم.' }
      ] },
    { at: [11, 10], name: { en: 'Mama Lerato', es: 'Mamá Lerato', fa: 'ماما لراتو' },
      look: { skin: 4, hair: '#1a1a1a', shirt: '#2f9a8a', pants: '#5a2a4a', style: 'long' },
      lines: [
        { en: 'Dumela! That means hello in Sesotho. Grab a blanket, the nights are cold.', es: '¡Dumela! Significa hola en sesotho. Toma una cobija, las noches son frías.', fa: 'دومیلا! به زبان سوتو یعنی سلام. کمپل بگیر، شب‌ها سرد است.' },
        { en: 'Our city sits high up, on a plateau. Winter nights can bring frost.', es: 'Nuestra ciudad está en lo alto, sobre una meseta. En invierno, las noches pueden traer escarcha.', fa: 'شهر ما بلند، روی یک فلات است. شب‌های زمستان گاهی یخبندان می‌شود.' }
      ] },
    { at: [15, 10], name: { en: 'Kagiso', es: 'Kagiso', fa: 'کاگیسو' },
      look: { skin: 3, hair: '#202020', shirt: '#f08a24', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'Hi! I just got home from my shift. I build cars at a factory.', es: '¡Hola! Acabo de llegar de mi turno. Armo carros en una fábrica.', fa: 'سلام! تازه از نوبت کارم آمدم. من در یک فابریکه موتر می‌سازم.' },
        { en: 'Trains take our cars to the port. Ships carry many to Europe.', es: 'Los trenes llevan nuestros carros al puerto. Los barcos llevan muchos a Europa.', fa: 'قطارها موترهای ما را به بندر می‌برند. کشتی‌ها بسیاری را به اروپا می‌برند.' }
      ] }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Mine top-left, city bottom-left, railway across the top and down the east, port and ocean on the right. */
  map: [
    'KKKKKKKKKKKKKKKKTTTTTTTTTTTT~===',
    'K::::rr::::r:K...........K.T~===',
    'K:rr:::::XX:r:...eeeeee.K.G.~XX=',
    'K::::::r:XX:::...eeeeee..K..~XX=',
    'K:::rr:::::::r...eeeeee.....~ss=',
    'K:r::::::r::::.............T~ss=',
    'K:::::::::::::.....K........kss=',
    'K...----------.-----------..~===',
    'K.......x................|..~===',
    'K....RRR..QQQ.RRReeeeee...K.~===',
    'K....hdh..hdh.hdheeeeee.....~===',
    'K.UU.:.UU..:JJJ.........:|~~~===',
    'K.UUT:.UUT.:JJJ..XXX..Tx:|~~~===',
    'K:::::::::::::::.XXX....:|kkkk==',
    'K.JJ.:.JJJ.:UU..........:.~~~===',
    'K.JJ.:.JJJ.:UU..::::::::::~~~===',
    'KT..T:....T:..T.........:|~~~===',
    'K:::::::::::::::........:-kkkk==',
    'K.UU.:.UU..:.UU..XXX....:.~~~===',
    'K.UU.:.UU..:.UU..XXX.T..:.~~~===',
    'K....:T...T:....T.......:.kkkk==',
    'KKKKKKKKKKKKKKKKTTTTTTTTTT======'
  ],
  start: [2, 9],

  tools: ['axe', 'sickle'],
  /* build (FUN-PASS-2): lay the missing rails so the line links the mine to the port of Durban */
  build: [
    { id: 'railway', kind: 'place', board: [23, 10], tile: '|', ok: [[14, 7, '-'], [25, 9], [25, 10], [25, 14], [25, 15]], cost: { wood: 1 },
      name: { en: 'The railway to Durban', es: 'El tren a Durban', fa: 'خط آهن تا دوربان' },
      ask: { en: 'The Grump pulled rails out of the railway! The [[mineral|minerals]] from the mine must get to the [[port|port]] of Durban, so ships can [[export|export]] them. Follow the tracks east, then south. Lay a new rail in each gap, so the line runs from the mine all the way to the docks.',
        es: '¡El Gruñón arrancó rieles de la vía del tren! Los [[mineral|minerales]] de la mina tienen que llegar al [[port|puerto]] de Durban, para que los barcos los [[export|exporten]]. Sigue la vía al este y luego al sur. Pon un riel nuevo en cada hueco, para que la línea vaya desde la mina hasta los muelles.',
        fa: 'غرغرو ریل‌ها را از خط آهن کشید! [[mineral|معدنیات]] از معدن باید به [[port|بندر]] دوربان برسند تا کشتی‌ها آن‌ها را [[export|صادر]] کنند. خط را به طرف شرق، بعد جنوب دنبال کن. در هر شکاف یک ریل نو بگذار تا خط از معدن تا بندر برسد.' },
      why: { en: 'The rail fits! The line is one step closer to the port.', es: '¡El riel encaja! La línea está un paso más cerca del puerto.', fa: 'ریل جا افتاد! خط یک قدم به بندر نزدیک‌تر شد.' },
      wrong: { en: 'This rail does not join the line. A train can only go where the tracks connect. Put the rails in the gaps between the mine and the docks.', es: 'Este riel no se une a la línea. Un tren solo puede ir donde la vía está unida. Pon los rieles en los huecos entre la mina y los muelles.', fa: 'این ریل به خط وصل نمی‌شود. قطار فقط جایی می‌رود که خط وصل باشد. ریل‌ها را در شکاف‌های بین معدن و بندر بگذار.' },
      wrongBy: [
        { x: 1, y: 11, w: 23, h: 10, t: { en: 'This is the city, not the railway line. The minerals must go to the port on the coast. Fill the gaps in the tracks to the east.', es: 'Esto es la ciudad, no la vía del tren. Los minerales tienen que ir al puerto en la costa. Llena los huecos de la vía, al este.', fa: 'این شهر است، نه خط آهن. معدنیات باید به بندر در ساحل بروند. شکاف‌های خط را در شرق پر کن.' } }
      ],
      done: { en: 'The railway is whole again! Trains carry the minerals from the mine to Durban. Then ships export them to other countries, and South Africa earns money from trade.', es: '¡La vía del tren está completa otra vez! Los trenes llevan los minerales de la mina a Durban. Luego los barcos los exportan a otros países, y Sudáfrica gana dinero con el comercio.', fa: 'خط آهن دوباره کامل شد! قطارها معدنیات را از معدن به دوربان می‌برند. بعد کشتی‌ها آن‌ها را به کشورهای دیگر صادر می‌کنند و افریقای جنوبی از تجارت پول به دست می‌آورد.' } }
  ],
  finds: [
    { clueAt: [6, 6], at: [8, 2], decor: 'gem',
      clue: { en: 'From this note, walk 4 steps north, then 2 steps east. Look near the mine.', es: 'Desde esta nota, camina 4 pasos al norte y luego 2 pasos al este. Busca cerca de la mina.', fa: 'از این یادداشت، ۴ قدم به شمال برو، بعد ۲ قدم به شرق. نزدیک معدن را ببین.' },
      text: { en: 'North is up, east is right! A gem! The biggest diamond ever, the Cullinan, came from here.', es: '¡El norte arriba, el este a la derecha! ¡Una gema! El diamante más grande, el Cullinan, salió de aquí.', fa: 'شمال بالا، شرق راست! یک سنگ قیمتی! بزرگ‌ترین الماس، کالینان، از این‌جا بیرون آمد.' } },
    { clueAt: [23, 9], at: [26, 17], decor: 'coinold',
      clue: { en: 'Follow the railway east, then south, then east to a dock. Stand at the end of the tracks.', es: 'Sigue la vía del tren al este, luego al sur, luego al este hasta un muelle. Párate al final de las vías.', fa: 'خط ریل را به شرق، بعد جنوب، بعد شرق تا یک اسکله دنبال کن. در آخر خط ریل بایست.' },
      text: { en: 'Here goods go from train to ship. An old gold coin! South Africa made Krugerrand coins from 1967.', es: 'Aquí los productos pasan del tren al barco. ¡Una moneda de oro! Sudáfrica hace monedas Krugerrand desde 1967.', fa: 'این‌جا جنس از ریل به کشتی می‌رود. یک سکهٔ طلا! افریقای جنوبی از ۱۹۶۷ سکهٔ کروگررند می‌سازد.' } }
  ],
  // only the Rail Pass (Episode 3.3) opens the old rail gate in the north-east hills
  secret: { tool: 'rail', at: [26, 1],
    text: { en: 'The Rail Pass opened the old rail gate! In the chest is a miner\'s note. It says South Africa digs up more platinum than any other country on Earth.',
      es: '¡El pase de tren abrió la vieja puerta del ferrocarril! En el cofre hay una nota de un minero. Dice que Sudáfrica saca más platino que cualquier otro país de la Tierra.',
      fa: 'کارت قطار دروازهٔ کهنهٔ خط آهن را باز کرد! در صندوق یادداشت یک معدن‌کار است. می‌گوید افریقای جنوبی از هر کشور دیگر روی زمین بیشتر پلاتین استخراج می‌کند.' } },

  words: {
    mineral: { en: 'a solid material found naturally in rock, like gold or chrome', es: 'un material sólido que se encuentra en la roca, como el oro o el cromo', fa: 'مادهٔ سختی که به طور طبیعی در سنگ پیدا می‌شود، مثل طلا یا کروم' },
    'natural resource': { en: 'something from nature that people use, like water, soil, trees or minerals', es: 'algo de la naturaleza que la gente usa, como agua, tierra, árboles o minerales', fa: 'چیزی از طبیعت که مردم از آن استفاده می‌کنند، مثل آب، خاک، درخت یا معدنیات' },
    'raw material': { en: 'something in its natural form, before a factory changes it', es: 'algo en su forma natural, antes de que una fábrica lo cambie', fa: 'چیزی به شکل طبیعی خودش، پیش از آن‌که فابریکه آن را تغییر دهد' },
    'finished product': { en: 'a thing that is ready to use, like a phone, a car or a pot', es: 'una cosa lista para usar, como un teléfono, un carro o una olla', fa: 'چیزی که آمادهٔ استفاده است، مثل موبایل، موتر یا دیگ' },
    'cash crop': { en: 'a crop grown mostly to sell, not to eat at home', es: 'un cultivo que se siembra más que nada para vender, no para comer en casa', fa: 'کشتی که بیشتر برای فروش است، نه برای خوردن در خانه' },
    export: { en: 'a good that is sold and sent to another country', es: 'un producto que se vende y se envía a otro país', fa: 'جنسی که فروخته و به کشور دیگر فرستاده می‌شود' },
    import: { en: 'a good that is bought and brought in from another country', es: 'un producto que se compra y se trae de otro país', fa: 'جنسی که از کشور دیگر خریده و آورده می‌شود' },
    port: { en: 'a place on the coast where ships load and unload goods', es: 'un lugar en la costa donde los barcos cargan y descargan mercancías', fa: 'جایی در ساحل که کشتی‌ها بار را بار می‌کنند و خالی می‌کنند' }
  },

  npcs: [
    {
      x: 7, y: 4,
      name: { en: 'Thandiwe', es: 'Thandiwe', fa: 'تاندیوه' },
      role: { en: 'Mining engineer', es: 'Ingeniera de minas', fa: 'انجنیر معدن' },
      look: { skin: 4, hair: '#1b1410', shirt: '#f39c12', pants: '#2c3e50' },
      lines: [
        { en: 'Sawubona! I am Thandiwe. Our gold, platinum and chrome are [[natural resource|natural resources]].',
          es: '¡Sawubona! Soy Thandiwe. Nuestro oro, platino y cromo son [[natural resource|recursos naturales]].',
          fa: 'ساوبونا! من تاندیوه هستم. طلا، پلاتین و کروم ما [[natural resource|منابع طبیعی]] هستند.' },
        { en: 'These [[mineral|minerals]] lie in the ground. Gold was found here in 1886.',
          es: 'Estos [[mineral|minerales]] están bajo la tierra. Aquí se encontró oro en 1886.',
          fa: 'این [[mineral|معدنیات]] در زیر زمین هستند. در سال ۱۸۸۶ این‌جا طلا پیدا شد.' },
        { en: 'Thousands came, and Johannesburg grew fast. Its Zulu name, eGoli, means "place of gold."',
          es: 'Llegaron miles, y Johannesburgo creció rápido. Su nombre en zulú, eGoli, significa "lugar del oro".',
          fa: 'هزاران نفر آمدند و ژوهانسبرگ زود بزرگ شد. نام زولوی آن، اِگولی، یعنی «جای طلا».' },
        { en: 'We have most of the world\'s platinum, for cleaner engines. Chrome keeps steel from rust.',
          es: 'Tenemos casi todo el platino del mundo, para motores más limpios. El cromo protege el acero del óxido.',
          fa: 'بیشتر پلاتین جهان پیش ما است، برای انجن‌های پاک‌تر. کروم فولاد را از زنگ نگه می‌دارد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did Johannesburg grow so fast?', es: '¿Por qué Johannesburgo creció tan rápido?', fa: 'چرا ژوهانسبرگ این‌قدر زود بزرگ شد؟' },
        choices: [
          { ok: true, t: { en: 'Gold was found there, so miners came', es: 'Allí se encontró oro, y llegaron mineros', fa: 'آن‌جا طلا پیدا شد، پس کارگران معدن آمدند' },
            why: { en: 'A natural resource pulled people in, and a city grew around it.', es: 'Un recurso natural atrajo a la gente, y una ciudad creció a su alrededor.', fa: 'یک منبع طبیعی مردم را کشاند و شهری دور آن ساخته شد.' } },
          { t: { en: 'It sits beside a busy ocean port', es: 'Está junto a un puerto muy activo del océano', fa: 'کنار یک بندر پرکار بحر است' },
            why: { en: 'Johannesburg is far inland. Durban is the port.', es: 'Johannesburgo está lejos del mar. Durban es el puerto.', fa: 'ژوهانسبرگ از بحر دور است. بندر، دوربان است.' } },
          { t: { en: 'It was built for rice farming by a big river', es: 'Se construyó para cultivar arroz junto a un río grande', fa: 'برای کشت شالی کنار یک دریای بزرگ ساخته شد' },
            why: { en: 'Johannesburg did not grow from farming. It grew from gold.', es: 'Johannesburgo no creció por la agricultura. Creció por el oro.', fa: 'ژوهانسبرگ از کشت و کار بزرگ نشد. از طلا بزرگ شد.' } }
        ]
      }
    },
    {
      x: 8, y: 16,
      name: { en: 'Sipho', es: 'Sipho', fa: 'سیپو' },
      role: { en: 'Bank worker in Johannesburg', es: 'Empleado de banco en Johannesburgo', fa: 'کارمند بانک در ژوهانسبرگ' },
      look: { skin: 5, hair: '#111111', shirt: '#3e5c9a', pants: '#222222' },
      lines: [
        { en: 'Hello! I am Sipho, a banker. Gold built Johannesburg. Now it is a banking center.',
          es: '¡Hola! Soy Sipho, banquero. El oro construyó Johannesburgo. Ahora es un centro de bancos.',
          fa: 'سلام! من سیپو، کارمند بانک هستم. طلا ژوهانسبرگ را ساخت. حالا مرکز بانک‌ها است.' },
        { en: '[[raw material|Raw materials]] earn some money. [[finished product|Finished products]], often made abroad, earn the most.',
          es: 'Las [[raw material|materias primas]] dan algo de dinero. Los [[finished product|productos terminados]], muchas veces hechos afuera, dan más.',
          fa: '[[raw material|مواد خام]] کمی پول می‌آورد. [[finished product|جنس آماده]]، که اکثراً در خارج ساخته می‌شود، بیشترین پول را می‌آورد.' },
        { en: 'Ghana and Ivory Coast sell cocoa, a [[cash crop|cash crop]]. Ethiopia and Kenya sell coffee.',
          es: 'Ghana y Costa de Marfil venden cacao, un [[cash crop|cultivo comercial]]. Etiopía y Kenia venden café.',
          fa: 'گانا و ساحل عاج کاکائو می‌فروشند، یک [[cash crop|کشت تجارتی]]. ایتوپیا و کینیا قهوه می‌فروشند.' },
        { en: 'If the world price of that crop falls, the whole country earns less.',
          es: 'Si el precio mundial de ese cultivo baja, todo el país gana menos.',
          fa: 'اگر قیمت جهانی آن کشت پایین بیاید، تمام کشور کمتر پول می‌گیرد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why is it risky for a country to sell mostly one product?', es: '¿Por qué es arriesgado que un país venda casi solo un producto?', fa: 'چرا برای یک کشور خطرناک است که بیشتر فقط یک جنس بفروشد؟' },
        choices: [
          { ok: true, t: { en: 'If its price falls, everyone earns less', es: 'Si su precio baja, todos ganan menos', fa: 'اگر قیمتش پایین بیاید، همه کمتر پول می‌گیرند' },
            why: { en: 'With only one product, one bad price hurts everyone at once.', es: 'Con un solo producto, un mal precio hace daño a todos a la vez.', fa: 'با یک جنس، یک قیمت بد به همه یک‌باره ضرر می‌زند.' } },
          { t: { en: 'That product will soon stop growing there', es: 'Ese producto pronto dejará de crecer allí', fa: 'آن جنس به زودی دیگر آن‌جا نمی‌روید' },
            why: { en: 'The crop still grows. The risk is the price, not the plant.', es: 'El cultivo sigue creciendo. El riesgo es el precio, no la planta.', fa: 'کشت هنوز می‌روید. خطر از قیمت است، نه از نبات.' } },
          { t: { en: 'Other countries are not allowed to buy it', es: 'Otros países no pueden comprarlo', fa: 'کشورهای دیگر اجازه ندارند آن را بخرند' },
            why: { en: 'Other countries do buy it. The problem is that the price can change.', es: 'Otros países sí lo compran. El problema es que el precio puede cambiar.', fa: 'کشورهای دیگر آن را می‌خرند. مشکل این است که قیمت می‌تواند تغییر کند.' } }
        ]
      }
    },
    {
      x: 27, y: 13,
      name: { en: 'Ayanda', es: 'Ayanda', fa: 'آیاندا' },
      role: { en: 'Crane operator at the port of Durban', es: 'Operadora de grúa en el puerto de Durban', fa: 'رانندهٔ جرثقیل در بندر دوربان' },
      look: { skin: 3, hair: '#2b1d14', shirt: '#16a085', pants: '#2c3e50' },
      lines: [
        { en: 'Welcome to Durban, on the Indian Ocean! I am Ayanda. I drive a giant crane.',
          es: '¡Bienvenido a Durban, en el océano Índico! Soy Ayanda. Manejo una grúa gigante.',
          fa: 'به دوربان در کنار بحر هند خوش آمدی! من آیاندا هستم. یک جرثقیل بسیار بزرگ را می‌رانم.' },
        { en: 'Durban is a busy [[port|port]]. Trains bring ore, sugar, fruit and cars to my crane.',
          es: 'Durban es un [[port|puerto]] muy activo. Los trenes traen mineral, azúcar, fruta y carros a mi grúa.',
          fa: 'دوربان یک [[port|بندر]] پرکار است. قطارها سنگ معدنی، بوره، میوه و موتر را به جرثقیل من می‌آورند.' },
        { en: 'I load them onto ships. Those are [[export|exports]]: goods sold to other countries.',
          es: 'Yo los subo a los barcos. Esas son [[export|exportaciones]]: productos que se venden a otros países.',
          fa: 'من آن‌ها را به کشتی بار می‌کنم. این‌ها [[export|صادرات]] هستند: جنس‌هایی که به کشورهای دیگر فروخته می‌شوند.' },
        { en: 'Ships bring in phones, machines and medicine: [[import|imports]]. Ports connect countries to the world.',
          es: 'Los barcos traen teléfonos, máquinas y medicinas: [[import|importaciones]]. Los puertos conectan a los países con el mundo.',
          fa: 'کشتی‌ها موبایل، ماشین و دوا می‌آورند: [[import|واردات]]. بندرها کشورها را به جهان وصل می‌کنند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is an export?', es: '¿Qué es una exportación?', fa: 'صادرات چیست؟' },
        choices: [
          { ok: true, t: { en: 'A good sold and sent to another country', es: 'Un producto que se vende y se envía a otro país', fa: 'جنسی که فروخته و به کشور دیگر فرستاده می‌شود' },
            why: { en: 'Exports go out. Imports come in.', es: 'Las exportaciones salen. Las importaciones entran.', fa: 'صادرات بیرون می‌رود. واردات داخل می‌آید.' } },
          { t: { en: 'A good that is bought from another country', es: 'Un producto que se compra a otro país', fa: 'جنسی که از کشور دیگر خریده می‌شود' },
            why: { en: 'That is an import. It comes in.', es: 'Esa es una importación. Entra al país.', fa: 'این واردات است. داخل می‌آید.' } },
          { t: { en: 'A good that never leaves the farm', es: 'Un producto que nunca sale de la granja', fa: 'جنسی که هرگز از کشتزار بیرون نمی‌رود' },
            why: { en: 'An export travels to another country.', es: 'Una exportación viaja a otro país.', fa: 'صادرات به کشور دیگر سفر می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 8, text: { en: 'eGOLI · JOHANNESBURG · Gold was found here in 1886. A mining camp grew into a huge African city.',
      es: 'eGOLI · JOHANNESBURGO · Aquí se encontró oro en 1886. Un campamento minero se volvió una enorme ciudad africana.',
      fa: 'اِگولی · ژوهانسبرگ · در سال ۱۸۸۶ این‌جا طلا پیدا شد. یک کمپ معدن به یک شهر بزرگ افریقایی تبدیل شد.' } },
    { x: 23, y: 12, text: { en: 'PORT OF DURBAN ⚓ · Indian Ocean · Ships sail to Asia, Europe and the Americas. Sugarcane grows nearby.',
      es: 'PUERTO DE DURBAN ⚓ · Océano Índico · Los barcos van a Asia, Europa y América. Cerca crece caña de azúcar.',
      fa: 'بندر دوربان ⚓ · بحر هند · کشتی‌ها به آسیا، اروپا و امریکا می‌روند. نزدیک این‌جا نیشکر می‌روید.' } }
  ],

  /* the quest: Nomvula the cane farmer (gold !) -> Johan the train driver -> trade sugar for a water pump at the port -> back to Nomvula */
  quest: {
    stat: 'mov',
    title: { en: 'Sugar for a Water Pump', es: 'Azúcar por una bomba de agua', fa: 'بوره در بدل پمپ آب' },
    giver: {
      x: 23, y: 4,
      name: { en: 'Nomvula', es: 'Nomvula', fa: 'نومولا' },
      role: { en: 'Sugarcane farmer', es: 'Agricultora de caña de azúcar', fa: 'دهقان نیشکر' },
      look: { skin: 5, hair: '#1b1410', shirt: '#27ae60', pants: '#5d4037', style: 'bun' },
      lines: [
        { en: 'Sawubona! I am Nomvula. I grow sugarcane on these green hills near Durban.',
          es: '¡Sawubona! Soy Nomvula. Cultivo caña de azúcar en estas colinas verdes cerca de Durban.',
          fa: 'ساوبونا! من نومولا هستم. روی این تپه‌های سبز نزدیک دوربان نیشکر می‌کارم.' },
        { en: 'Rain and warm weather help cane grow. We grow more sugar than we eat.',
          es: 'La lluvia y el calor ayudan a la caña. Cultivamos más azúcar de la que comemos.',
          fa: 'باران و هوای گرم به نیشکر کمک می‌کند. ما بیشتر از خوراک خود بوره داریم.' },
        { en: 'But our water pump broke, and new pumps come in on ships.',
          es: 'Pero nuestra bomba de agua se rompió, y las bombas nuevas llegan en barco.',
          fa: 'اما پمپ آب ما خراب شد، و پمپ‌های نو با کشتی می‌آیند.' },
        { en: 'Johan drives trains, west of here. He knows the port traders. Please ask him!',
          es: 'Johan maneja trenes, al oeste de aquí. Conoce a los comerciantes del puerto. ¡Pregúntale, por favor!',
          fa: 'یوهان در غرب این‌جا قطار می‌راند. او تاجران بندر را می‌شناسد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Johan works by the railway, west of here. Follow the tracks west.',
        es: 'Johan trabaja junto a la vía del tren, al oeste de aquí. Sigue las vías hacia el oeste.',
        fa: 'یوهان کنار خط آهن در غرب این‌جا کار می‌کند. خط آهن را به طرف غرب دنبال کن.' },
      thanks: { en: 'A new pump! Sugar went out, an [[export|export]]. A pump came in, an [[import|import]]. Trade!',
        es: '¡Una bomba nueva! Salió azúcar, una [[export|exportación]]. Entró una bomba, una [[import|importación]]. ¡Comercio!',
        fa: 'پمپ نو! بوره بیرون رفت، یک [[export|صادرات]]. پمپ داخل آمد، یک [[import|واردات]]. تجارت!' }
    },
    contact: {
      x: 12, y: 8,
      name: { en: 'Johan', es: 'Johan', fa: 'یوهان' },
      role: { en: 'Train driver', es: 'Maquinista de tren', fa: 'رانندهٔ قطار' },
      look: { skin: 0, hair: '#c8a165', shirt: '#2c3e50', pants: '#34495e', hat: '#7f8c8d' },
      lines: [
        { en: 'Hi, I am Johan. My train carries ore, fruit and sugar east to the [[port|port]].',
          es: 'Hola, soy Johan. Mi tren lleva mineral, fruta y azúcar al este, hasta el [[port|puerto]].',
          fa: 'سلام، من یوهان هستم. قطار من سنگ معدنی، میوه و بوره را به شرق تا [[port|بندر]] می‌برد.' },
        { en: 'Mei Lin sells water pumps by the south warehouses, near the docks.',
          es: 'Mei Lin vende bombas de agua junto a las bodegas del sur, cerca de los muelles.',
          fa: 'می‌لین کنار گدام‌های جنوبی، نزدیک اسکله‌ها، پمپ آب می‌فروشد.' },
        { en: 'Offer her something this land has a lot of, and her country needs.',
          es: 'Ofrécele algo que esta tierra tiene de sobra y que su país necesita.',
          fa: 'به او چیزی پیشنهاد کن که این سرزمین زیاد دارد و کشورش ضرورت دارد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 22, y: 18,
        name: { en: 'Mei Lin', es: 'Mei Lin', fa: 'می‌لین' },
        role: { en: 'Ship trader from China', es: 'Comerciante de barco de China', fa: 'تاجر کشتی از چین' },
        look: { skin: 1, hair: '#111111', shirt: '#d35400', pants: '#2c3e50', style: 'long' },
        lines: [
          { en: 'Ni hao means hello in Chinese! My ship brings pumps and machines from China.',
            es: '¡Ni hao quiere decir hola en chino! Mi barco trae bombas y máquinas de China.',
            fa: 'نی هاو به زبان چینی یعنی سلام! کشتی من پمپ و ماشین از چین می‌آورد.' },
          { en: 'I take South African goods back home.',
            es: 'Me llevo productos de Sudáfrica a mi país.',
            fa: 'جنس‌های افریقای جنوبی را به وطنم می‌برم.' }
        ]
      },
      q: { en: 'What will you trade me for one water pump?', es: '¿Qué me das a cambio de una bomba de agua?', fa: 'در بدل یک پمپ آب به من چه می‌دهی؟' },
      choices: [
        { ok: true, at: [20, 3], icon: '🪨', t: { en: 'A sack of sugar from Nomvula\'s farm', es: 'Un saco de azúcar de la finca de Nomvula', fa: 'یک بوجی بوره از کشتزار نومولا' },
          why: { en: 'Good trade! The warm, rainy hills near Durban grow lots of sugarcane. Sugar is an [[export|export]] here, and my country needs more than it grows.',
            es: '¡Buen trato! Las colinas cálidas y lluviosas cerca de Durban dan mucha caña de azúcar. El azúcar es una [[export|exportación]] de aquí, y mi país necesita más de la que produce.',
            fa: 'معاملهٔ خوب! تپه‌های گرم و بارانی نزدیک دوربان نیشکر زیاد می‌دهند. بوره این‌جا [[export|صادرات]] است و کشور من بیشتر از آن‌چه تولید می‌کند به آن نیاز دارد.' } },
        { at: [25, 19], icon: '🪨', t: { en: 'A bag of rice', es: 'Una bolsa de arroz', fa: 'یک خلطه برنج' },
          why: { en: 'This rice just came off a ship! South Africa grows very little rice. It buys rice from other countries, so rice is an [[import|import]] here. Do not trade away what you have to buy.',
            es: '¡Este arroz acaba de bajar de un barco! Sudáfrica cultiva muy poco arroz. Lo compra a otros países, así que aquí el arroz es una [[import|importación]]. No cambies lo que tienes que comprar.',
            fa: 'این برنج همین حالا از کشتی پایین شده! افریقای جنوبی برنج بسیار کم می‌کارد. برنج را از کشورهای دیگر می‌خرد، پس برنج این‌جا [[import|واردات]] است. چیزی را که خودت می‌خری، در بدل چیز دیگر نده.' } },
        { at: [25, 18], icon: '📱', t: { en: 'A new phone', es: 'Un teléfono nuevo', fa: 'یک موبایل نو' },
          why: { en: 'This phone just came off a ship! Most phones here come in on ships, just like my pumps. I want something this land makes a lot of.',
            es: '¡Este teléfono acaba de bajar de un barco! Casi todos los teléfonos de aquí llegan en barco, igual que mis bombas. Yo quiero algo que esta tierra produce en abundancia.',
            fa: 'این موبایل همین حالا از کشتی پایین شده! بیشتر موبایل‌های این‌جا با کشتی می‌آیند، درست مثل پمپ‌های من. من چیزی می‌خواهم که این سرزمین زیاد تولید می‌کند.' } }
      ],
      item: { icon: '⚙️', name: { en: 'A new water pump', es: 'Una bomba de agua nueva', fa: 'یک پمپ آب نو' } }
    }
  },

  scraps: [[1, 1], [16, 1], [13, 20]],
  smudges: [[14, 4], [20, 14], [24, 6]],

  challenge: {
    at: [20, 8],
    type: 'route', // in the world; the card version (order) is the fallback
    // mine pit -> processing plant -> along the rail -> Durban cranes -> end of the pier (ship) -> steel factory -> city store
    spots: [[3, 3], [11, 3], [14, 8], [28, 17], [29, 20], [29, 4], [10, 14]],
    stat: 'mov',
    title: { en: 'From the mine to your kitchen', es: 'De la mina a tu cocina', fa: 'از معدن تا آشپزخانهٔ تو' },
    intro: { en: 'The Grump scattered the trade chain! Chrome ore leaves a mine in South Africa and ends up far away. Walk to each step on the map in the right order, from first to last.',
      es: '¡El Gruñón desarmó la cadena de comercio! El mineral de cromo sale de una mina en Sudáfrica y termina muy lejos. Camina a cada paso del mapa en el orden correcto, del primero al último.',
      fa: 'غرغرو زنجیر تجارت را پراگنده کرد! سنگ کروم از یک معدن در افریقای جنوبی بیرون می‌آید و به جای دور می‌رسد. به ترتیب درست، از اول تا آخر، به هر قدم روی نقشه برو.' },
    items: [
      { icon: '⛏️', t: { en: 'Miners dig chrome ore from deep in the ground', es: 'Mineros sacan mineral de cromo de lo profundo de la tierra', fa: 'معدن‌کاران سنگ کروم را از عمق زمین بیرون می‌کنند' } },
      { icon: '🏭', t: { en: 'A processing plant crushes the rock and pulls out the ore', es: 'Una planta de procesamiento tritura la roca y saca el mineral', fa: 'یک کارخانهٔ پروسس سنگ را میده می‌کند و سنگ معدنی را جدا می‌کند' } },
      { icon: '🚆', t: { en: 'A train carries the ore to the coast', es: 'Un tren lleva el mineral a la costa', fa: 'قطار سنگ معدنی را به ساحل می‌برد' } },
      { icon: '⚓', t: { en: 'Cranes at the port of Durban load it onto a ship', es: 'Las grúas del puerto de Durban lo suben a un barco', fa: 'جرثقیل‌های بندر دوربان آن را در کشتی بار می‌کنند' } },
      { icon: '🚢', t: { en: 'The ship crosses the ocean to another country, like China', es: 'El barco cruza el océano hasta otro país, como China', fa: 'کشتی از اقیانوس به یک کشور دیگر، مثل چین، می‌رود' } },
      { icon: '🔥', t: { en: 'A steel factory there mixes the chrome into shiny steel', es: 'Allí una fábrica de acero mezcla el cromo para hacer acero brillante', fa: 'در آن‌جا یک فابریکهٔ فولاد کروم را با فولاد براق مخلوط می‌کند' } },
      { icon: '🛒', t: { en: 'A store sells a steel pot that does not rust', es: 'Una tienda vende una olla de acero que no se oxida', fa: 'یک دوکان دیگ فولادی می‌فروشد که زنگ نمی‌زند' } }
    ],
    why: { en: 'Follow the ore: first it is dug up, then cleaned, then moved by train and ship, then made into something new, then sold. The finished pot is worth much more than the rock.',
      es: 'Sigue el mineral: primero se saca, luego se limpia, luego viaja en tren y en barco, luego se convierte en algo nuevo y al final se vende. La olla terminada vale mucho más que la roca.',
      fa: 'دنبال سنگ معدنی برو: اول کنده می‌شود، بعد پاک می‌شود، بعد با قطار و کشتی می‌رود، بعد به چیز تازه تبدیل می‌شود، بعد فروخته می‌شود. دیگ آماده خیلی قیمتی‌تر از سنگ است.' },
    success: { en: 'The trade chain is fixed! Each step adds work, and each step adds value.', es: '¡La cadena de comercio está arreglada! Cada paso suma trabajo y cada paso suma valor.', fa: 'زنجیر تجارت درست شد! هر قدم کار اضافه می‌کند و هر قدم ارزش اضافه می‌کند.' }
  },

  boss: {
    at: [21, 16],
    stat: 'hei',
    need: 3,
    name: { en: 'The Rust Grump', es: 'El Gruñón de Óxido', fa: 'غرغروی زنگ' },
    appear: { en: 'The Rust Grump is lurking by the warehouses near the port!', es: '¡El Gruñón de Óxido acecha junto a las bodegas cerca del puerto!', fa: 'غرغروی زنگ کنار گدام‌های نزدیک بندر کمین کرده است!' },
    taunt: { en: 'Creak! I rusted the trains and jammed the cranes. Who will carry the ore now?', es: '¡Crac! Oxidé los trenes y trabé las grúas. ¿Quién llevará el mineral ahora?', fa: 'غِژ! قطارها را زنگ زدم و جرثقیل‌ها را بند کردم. حالا کی سنگ معدنی را می‌برد؟' },
    win: { en: 'The rust flakes away. Atlas page 4.3 floats down into your hands!', es: 'El óxido se cae. ¡La página 4.3 del atlas cae en tus manos!', fa: 'زنگ ریخته می‌شود. صفحهٔ ۴.۳ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Johannesburg grew up around…', es: 'Johannesburgo creció alrededor de…', fa: 'ژوهانسبرگ دور … بزرگ شد.' },
        choices: [{ en: 'gold mining', es: 'la minería de oro', fa: 'معدن طلا' }, { en: 'cocoa farms', es: 'granjas de cacao', fa: 'کشتزارهای کاکائو' }, { en: 'an ocean port', es: 'un puerto del océano', fa: 'یک بندر بحری' }, { en: 'oil wells at sea', es: 'pozos de petróleo en el mar', fa: 'چاه‌های نفت در بحر' }], answer: 0,
        why: { en: 'Gold was found there in 1886. Its Zulu name, eGoli, means "place of gold."', es: 'Allí se encontró oro en 1886. Su nombre en zulú, eGoli, significa "lugar del oro".', fa: 'در سال ۱۸۸۶ آن‌جا طلا پیدا شد. نام زولوی آن، اِگولی، یعنی «جای طلا».' } },
      { q: { en: 'South Africa is known for mining which metals?', es: '¿Sudáfrica es conocida por sacar qué metales?', fa: 'افریقای جنوبی به استخراج کدام فلزها مشهور است؟' },
        choices: [{ en: 'Gold and platinum', es: 'Oro y platino', fa: 'طلا و پلاتین' }, { en: 'Cocoa and coffee', es: 'Cacao y café', fa: 'کاکائو و قهوه' }, { en: 'Rice and tea', es: 'Arroz y té', fa: 'برنج و چای' }, { en: 'Sand and salt', es: 'Arena y sal', fa: 'ریگ و نمک' }], answer: 0,
        why: { en: 'South Africa mines huge amounts of gold, and it has most of the world\'s platinum.', es: 'Sudáfrica saca muchísimo oro y tiene la mayor parte del platino del mundo.', fa: 'افریقای جنوبی طلای بسیار زیاد استخراج می‌کند و بیشتر پلاتین جهان را دارد.' } },
      { q: { en: 'What is a cash crop?', es: '¿Qué es un cultivo comercial?', fa: 'کشت تجارتی چیست؟' },
        choices: [{ en: 'A crop grown mostly to sell', es: 'Un cultivo que se siembra más que nada para vender', fa: 'کشتی که بیشتر برای فروش است' }, { en: 'A crop a family grows only to eat', es: 'Un cultivo que una familia siembra solo para comer', fa: 'کشتی که خانواده فقط برای خوردن می‌کارد' }, { en: 'A crop that grows in the desert', es: 'Un cultivo que crece en el desierto', fa: 'کشتی که در بیابان می‌روید' }, { en: 'Money printed by a farm', es: 'Dinero que imprime una granja', fa: 'پولی که یک کشتزار چاپ می‌کند' }], answer: 0,
        why: { en: 'A cash crop, like cocoa or coffee, is grown to sell, not to eat at home.', es: 'Un cultivo comercial, como el cacao o el café, se siembra para vender, no para comer en casa.', fa: 'کشت تجارتی، مثل کاکائو یا قهوه، برای فروش کاشته می‌شود، نه برای خوردن در خانه.' } },
      { q: { en: 'Cocoa is a major cash crop in which countries?', es: '¿En qué países el cacao es un cultivo comercial importante?', fa: 'کاکائو در کدام کشورها کشت تجارتی مهم است؟' },
        choices: [{ en: 'Ghana and Ivory Coast', es: 'Ghana y Costa de Marfil', fa: 'گانا و ساحل عاج' }, { en: 'Ethiopia and Kenya', es: 'Etiopía y Kenia', fa: 'ایتوپیا و کینیا' }, { en: 'Botswana and Zambia', es: 'Botsuana y Zambia', fa: 'بوتسوانا و زامبیا' }, { en: 'Saudi Arabia and Türkiye', es: 'Arabia Saudita y Turquía', fa: 'عربستان سعودی و ترکیه' }], answer: 0,
        why: { en: 'Ghana and Ivory Coast grow cocoa. Ethiopia and Kenya are known for coffee.', es: 'Ghana y Costa de Marfil cultivan cacao. Etiopía y Kenia son conocidas por el café.', fa: 'گانا و ساحل عاج کاکائو می‌کارند. ایتوپیا و کینیا به قهوه مشهور هستند.' } },
      { q: { en: 'Why can a country rich in minerals still have many poor people?', es: '¿Por qué un país rico en minerales todavía puede tener mucha gente pobre?', fa: 'چرا کشوری که معدنیات زیاد دارد باز هم مردم فقیر زیاد دارد؟' },
        choices: [{ en: 'The big money is in finished products made abroad', es: 'El gran dinero está en productos terminados hechos afuera', fa: 'پول اصلی در جنس آماده‌ای است که در خارج ساخته می‌شود' }, { en: 'Minerals are worth nothing at all to anyone', es: 'Los minerales no valen nada para nadie', fa: 'معدنیات برای هیچ‌کس هیچ ارزشی ندارند' }, { en: 'Nobody in the whole world wants to buy minerals', es: 'Nadie en todo el mundo quiere comprar minerales', fa: 'هیچ‌کس در تمام جهان نمی‌خواهد معدنیات بخرد' }, { en: 'Mining makes it rain much more on the land', es: 'La minería hace que llueva mucho más en la tierra', fa: 'معدن‌کاری باران زمین را خیلی بیشتر می‌کند' }], answer: 0,
        why: { en: 'Selling raw rock earns less than making and selling the finished product.', es: 'Vender roca sin procesar da menos que hacer y vender el producto terminado.', fa: 'فروختن سنگ خام کمتر از ساختن و فروختن جنس آماده پول می‌آورد.' } },
      { q: { en: 'What is an import?', es: '¿Qué es una importación?', fa: 'واردات چیست؟' },
        choices: [{ en: 'A good bought from another country', es: 'Un producto que se compra a otro país', fa: 'جنسی که از کشور دیگر خریده می‌شود' }, { en: 'A good sold and sent to another country', es: 'Un producto que se vende y se envía a otro país', fa: 'جنسی که فروخته و به کشور دیگر فرستاده می‌شود' }, { en: 'A mineral that stays in the ground', es: 'Un mineral que se queda en la tierra', fa: 'معدنی که در زیر زمین می‌ماند' }, { en: 'A train that never leaves the mine', es: 'Un tren que nunca sale de la mina', fa: 'قطاری که هرگز از معدن بیرون نمی‌رود' }], answer: 0,
        why: { en: 'Imports come in from other countries. Exports go out.', es: 'Las importaciones entran desde otros países. Las exportaciones salen.', fa: 'واردات از کشورهای دیگر داخل می‌آید. صادرات بیرون می‌رود.' } },
      { q: { en: 'Why is a port like Durban important to South Africa?', es: '¿Por qué un puerto como Durban es importante para Sudáfrica?', fa: 'چرا بندری مثل دوربان برای افریقای جنوبی مهم است؟' },
        choices: [{ en: 'Ships carry exports out and imports in', es: 'Los barcos sacan exportaciones y traen importaciones', fa: 'کشتی‌ها صادرات را بیرون و واردات را داخل می‌برند' }, { en: 'It is where South Africa first found gold', es: 'Es donde Sudáfrica encontró oro por primera vez', fa: 'جایی است که افریقای جنوبی اول بار طلا یافت' }, { en: 'It is the highest city in Africa', es: 'Es la ciudad más alta de África', fa: 'بلندترین شهر افریقا است' }, { en: 'Trains cannot reach it', es: 'Los trenes no pueden llegar', fa: 'قطار به آن‌جا نمی‌رسد' }], answer: 0,
        why: { en: 'A port connects a country to the world by sea.', es: 'Un puerto conecta a un país con el mundo por mar.', fa: 'بندر یک کشور را از راه بحر به جهان وصل می‌کند.' } },
      { q: { en: 'Why does a steel pot sell for much more than the chrome ore inside it?', es: '¿Por qué una olla de acero se vende por mucho más que el mineral de cromo que tiene?', fa: 'چرا یک دیگ فولادی خیلی قیمتی‌تر از سنگ کرومی است که در آن به کار رفته؟' },
        choices: [{ en: 'Work turned the ore into something useful', es: 'El trabajo convirtió el mineral en algo útil', fa: 'کار، سنگ را به چیز مفید تبدیل کرد' }, { en: 'The pot is much heavier than the ore inside', es: 'La olla pesa mucho más que el mineral que tiene', fa: 'دیگ خیلی سنگین‌تر از سنگ داخل آن است' }, { en: 'Ore is free for anyone to dig up', es: 'Sacar mineral es gratis para todos', fa: 'کندن سنگ معدنی برای همه مفت است' }, { en: 'Stores pay nothing for pots', es: 'Las tiendas no pagan nada por las ollas', fa: 'دوکان‌ها برای دیگ هیچ پول نمی‌دهند' }], answer: 0,
        why: { en: 'Each step in the chain adds work and value. The finished product is worth the most.', es: 'Cada paso de la cadena suma trabajo y valor. El producto terminado es el que más vale.', fa: 'هر قدم زنجیر کار و ارزش اضافه می‌کند. جنس آماده از همه قیمتی‌تر است.' } }
    ]
  },

  learned: [
    { en: 'South Africa mines gold, platinum and chrome. Johannesburg grew up around gold mining after 1886.', es: 'Sudáfrica saca oro, platino y cromo. Johannesburgo creció alrededor de la minería de oro después de 1886.', fa: 'افریقای جنوبی طلا، پلاتین و کروم استخراج می‌کند. ژوهانسبرگ بعد از ۱۸۸۶ دور معدن طلا بزرگ شد.' },
    { en: '[[raw material|Raw materials]] travel by train to a [[port|port]] like Durban, then by ship to factories far away. Value grows at each step.', es: 'Las [[raw material|materias primas]] viajan en tren a un [[port|puerto]] como Durban, y luego en barco a fábricas lejanas. El valor crece en cada paso.', fa: '[[raw material|مواد خام]] با قطار به [[port|بندری]] مثل دوربان می‌روند، بعد با کشتی به فابریکه‌های دور. ارزش در هر قدم بیشتر می‌شود.' },
    { en: 'A [[cash crop|cash crop]] like cocoa or coffee is grown to sell. Selling mostly one product is risky when its price falls.', es: 'Un [[cash crop|cultivo comercial]] como el cacao o el café se siembra para vender. Vender casi solo un producto es arriesgado cuando su precio baja.', fa: '[[cash crop|کشت تجارتی]] مثل کاکائو یا قهوه برای فروش کاشته می‌شود. فروختن بیشتر یک جنس وقتی قیمتش پایین بیاید خطرناک است.' }
  ],
  reflect: {
    q: { en: 'Pick one thing you use every day, like a phone, shoes or a cooking pot. Where do you think its materials started? How many steps did it take to reach you?', es: 'Elige una cosa que usas todos los días, como un teléfono, unos zapatos o una olla. ¿Dónde crees que empezaron sus materiales? ¿Cuántos pasos dio para llegar a ti?', fa: 'یک چیزی را که هر روز استفاده می‌کنی انتخاب کن، مثل موبایل، بوت یا دیگ. فکر می‌کنی مواد آن از کجا شروع شد؟ چند قدم طول کشید تا به تو برسد؟' },
    starter: { en: 'One thing I use every day is', es: 'Una cosa que uso todos los días es', fa: 'یک چیزی که من هر روز استفاده می‌کنم' }
  }
};
