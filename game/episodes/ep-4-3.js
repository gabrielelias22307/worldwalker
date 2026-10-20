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
    { en: 'Christopher: "The Grump broke the trade chain in South Africa! Ore is stuck at the mine and ships wait at the port. Talk to the engineer, the bank worker and the crane driver. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón rompió la cadena de comercio en Sudáfrica! El mineral está atascado en la mina y los barcos esperan en el puerto. Habla con la ingeniera, el empleado del banco y la operadora de grúa. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو زنجیر تجارت را در افریقای جنوبی شکست! سنگ معدنی در معدن مانده و کشتی‌ها در بندر انتظار می‌کشند. با انجنیر، کارمند بانک و راننده جرثقیل گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 tiles = 2 x 2 screens. Mine top-left, city bottom-left, railway across the top and down the east, port and ocean on the right. */
  map: [
    'KKKKKKKKKKKKKKKKTTTTTTTTTTTT~===',
    'K::::rr::::r:K.............T~===',
    'K:rr:::::XX:r:...eeeeee.K...~===',
    'K::::::r:XX:::...eeeeee..K..~===',
    'K:::rr:::::::r...eeeeee.....~===',
    'K:r::::::r::::.............T~===',
    'K:::::::::::::.....K........~===',
    'K...----------------------..~===',
    'K.......x................|..~===',
    'K................eeeeee..|K.~===',
    'K................eeeeee..|..~===',
    'K.UU.:.UU..:JJJ.........:|~~~===',
    'K.UUT:.UUT.:JJJ..XXX..Tx:|~~~===',
    'K:::::::::::::::.XXX....:|kkkk==',
    'K.JJ.:.JJJ.:UU..........:|~~~===',
    'K.JJ.:.JJJ.:UU..::::::::::~~~===',
    'KT..T:....T:..T.........:|~~~===',
    'K:::::::::::::::........:-kkkk==',
    'K.UU.:.UU..:.UU..XXX....:.~~~===',
    'K.UU.:.UU..:.UU..XXX.T..:.~~~===',
    'K....:T...T:....T.......:.kkkk==',
    'KKKKKKKKKKKKKKKKTTTTTTTTTT======'
  ],
  start: [2, 9],

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
        { en: 'Sawubona! That means hello in Zulu. I am Thandiwe, a mining engineer. The ground in South Africa holds valuable [[mineral|minerals]], like gold, platinum and chrome. They are [[natural resource|natural resources]].',
          es: '¡Sawubona! Así se dice hola en zulú. Soy Thandiwe, ingeniera de minas. La tierra de Sudáfrica guarda [[mineral|minerales]] valiosos, como oro, platino y cromo. Son [[natural resource|recursos naturales]].',
          fa: 'ساوبونا! این به زبان زولو یعنی سلام. من تاندیوه هستم، انجنیر معدن. زمین افریقای جنوبی [[mineral|معدنیات]] قیمتی دارد، مثل طلا، پلاتین و کروم. این‌ها [[natural resource|منابع طبیعی]] هستند.' },
        { en: 'In 1886, people found gold right here. Thousands came to dig, and a city grew up fast around the mines. That city is Johannesburg. Its Zulu name, eGoli, means "place of gold."',
          es: 'En 1886, la gente encontró oro justo aquí. Miles vinieron a excavar, y una ciudad creció rápido alrededor de las minas. Esa ciudad es Johannesburgo. Su nombre en zulú, eGoli, significa "lugar del oro".',
          fa: 'در سال ۱۸۸۶ مردم درست همین‌جا طلا پیدا کردند. هزاران نفر برای کندن آمدند و یک شهر به زودی دور معدن‌ها ساخته شد. آن شهر ژوهانسبرگ است. نام زولوی آن، اِگولی، یعنی «جای طلا».' },
        { en: 'South Africa also has most of the world\'s platinum. Car factories use it in parts that clean the smoke from engines. We mine chrome too. Chrome keeps steel shiny, so steel pots and spoons do not rust.',
          es: 'Sudáfrica también tiene la mayor parte del platino del mundo. Las fábricas de carros lo usan en piezas que limpian el humo de los motores. También sacamos cromo. El cromo mantiene el acero brillante, así las ollas y cucharas de acero no se oxidan.',
          fa: 'افریقای جنوبی بیشتر پلاتین جهان را هم دارد. فابریکه‌های موتر از آن در پرزه‌هایی استفاده می‌کنند که دود انجن را پاک می‌کند. ما کروم هم استخراج می‌کنیم. کروم فولاد را براق نگه می‌دارد، پس دیگ و قاشق فولادی زنگ نمی‌زنند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did Johannesburg grow so fast?', es: '¿Por qué Johannesburgo creció tan rápido?', fa: 'چرا ژوهانسبرگ این‌قدر زود بزرگ شد؟' },
        choices: [
          { ok: true, t: { en: 'Gold was found there in 1886, and people came to work in the mines', es: 'Allí se encontró oro en 1886, y la gente llegó a trabajar en las minas', fa: 'در سال ۱۸۸۶ آن‌جا طلا پیدا شد و مردم برای کار در معدن آمدند' },
            why: { en: 'A natural resource pulled people in, and a city grew around it.', es: 'Un recurso natural atrajo a la gente, y una ciudad creció a su alrededor.', fa: 'یک منبع طبیعی مردم را کشاند و شهری دور آن ساخته شد.' } },
          { t: { en: 'It sits on a busy ocean port', es: 'Está en un puerto muy activo del océano', fa: 'کنار یک بندر پرکار بحر است' },
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
        { en: 'Hello! I am Sipho. I work at a bank in Johannesburg. The city started with gold. Now it is a big center for banking and trade in Africa.',
          es: '¡Hola! Soy Sipho. Trabajo en un banco en Johannesburgo. La ciudad empezó con el oro. Ahora es un gran centro de bancos y comercio en África.',
          fa: 'سلام! من سیپو هستم. در یک بانک در ژوهانسبرگ کار می‌کنم. این شهر با طلا شروع شد. حالا یک مرکز بزرگ بانک و تجارت در افریقا است.' },
        { en: 'Here is the hard part. Selling [[raw material|raw materials]] earns some money. But the most money is made where they become [[finished product|finished products]], like phones and cars. Many of those are made in other countries and [[import|imported]].',
          es: 'Aquí viene lo difícil. Vender [[raw material|materias primas]] da algo de dinero. Pero el mayor dinero se gana donde se convierten en [[finished product|productos terminados]], como teléfonos y carros. Muchos de esos se hacen en otros países y se [[import|importan]].',
          fa: 'قسمت سخت این است. فروختن [[raw material|مواد خام]] کمی پول می‌آورد. اما بیشترین پول جایی به دست می‌آید که این مواد به [[finished product|جنس آماده]]، مثل موبایل و موتر، تبدیل می‌شوند. بسیاری از آن‌ها در کشورهای دیگر ساخته و [[import|وارد]] می‌شوند.' },
        { en: 'Other countries sell a [[cash crop|cash crop]], a crop grown mostly to sell. Ghana and Ivory Coast sell cocoa. Ethiopia and Kenya sell coffee. If the world price of that one crop falls, the whole country feels it.',
          es: 'Otros países venden un [[cash crop|cultivo comercial]], un cultivo que se siembra más que nada para vender. Ghana y Costa de Marfil venden cacao. Etiopía y Kenia venden café. Si el precio mundial de ese cultivo baja, todo el país lo siente.',
          fa: 'کشورهای دیگر یک [[cash crop|کشت تجارتی]] می‌فروشند، یعنی کشتی که بیشتر برای فروش است. گانا و ساحل عاج کاکائو می‌فروشند. ایتوپیا و کینیا قهوه می‌فروشند. اگر قیمت جهانی همان یک کشت پایین بیاید، تمام کشور آن را حس می‌کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why is it risky for a country to sell mostly one product?', es: '¿Por qué es arriesgado que un país venda casi solo un producto?', fa: 'چرا برای یک کشور خطرناک است که بیشتر فقط یک جنس بفروشد؟' },
        choices: [
          { ok: true, t: { en: 'If its world price drops, farmers and the government both earn less', es: 'Si su precio mundial baja, los agricultores y el gobierno ganan menos', fa: 'اگر قیمت جهانی آن پایین بیاید، هم دهقانان و هم دولت کمتر پول می‌گیرند' },
            why: { en: 'With only one product, one bad price hurts everyone at once.', es: 'Con un solo producto, un mal precio hace daño a todos a la vez.', fa: 'با یک جنس، یک قیمت بد به همه یک‌باره ضرر می‌زند.' } },
          { t: { en: 'That product will soon stop growing', es: 'Ese producto pronto dejará de crecer', fa: 'آن جنس به زودی دیگر نمی‌روید' },
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
        { en: 'Welcome to Durban, on the Indian Ocean! I am Ayanda. I drive one of the giant cranes at this [[port|port]]. It is one of the busiest ports in Africa.',
          es: '¡Bienvenido a Durban, en el océano Índico! Soy Ayanda. Manejo una de las grúas gigantes de este [[port|puerto]]. Es uno de los puertos más activos de África.',
          fa: 'به دوربان، کنار اقیانوس هند، خوش آمدی! من آیاندا هستم. یکی از جرثقیل‌های بزرگ این [[port|بندر]] را می‌رانم. این یکی از پرکارترین بندرهای افریقا است.' },
        { en: 'Trains bring ore, sugar, fruit and new cars to the docks. My crane loads them onto ships. Those are [[export|exports]]: goods sold and sent to other countries.',
          es: 'Los trenes traen mineral, azúcar, fruta y carros nuevos a los muelles. Mi grúa los sube a los barcos. Esas son [[export|exportaciones]]: productos que se venden y se envían a otros países.',
          fa: 'قطارها سنگ معدنی، بوره، میوه و موترهای نو را به لنگرگاه می‌آورند. جرثقیل من آن‌ها را در کشتی بار می‌کند. این‌ها [[export|صادرات]] هستند: جنس‌هایی که فروخته و به کشورهای دیگر فرستاده می‌شوند.' },
        { en: 'Ships also bring things in, like phones, machines and medicine. Those are [[import|imports]]. A port connects a whole country to the world.',
          es: 'Los barcos también traen cosas, como teléfonos, máquinas y medicinas. Esas son [[import|importaciones]]. Un puerto conecta a todo un país con el mundo.',
          fa: 'کشتی‌ها چیزهایی هم با خود می‌آورند، مثل موبایل، ماشین‌آلات و دوا. این‌ها [[import|واردات]] هستند. یک بندر تمام کشور را به جهان وصل می‌کند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is an export?', es: '¿Qué es una exportación?', fa: 'صادرات چیست؟' },
        choices: [
          { ok: true, t: { en: 'A good that is sold and sent to another country', es: 'Un producto que se vende y se envía a otro país', fa: 'جنسی که فروخته و به کشور دیگر فرستاده می‌شود' },
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
    { x: 8, y: 8, text: { en: 'eGOLI · JOHANNESBURG · Gold was found here in 1886. A small mining camp grew into one of the biggest cities in Africa.',
      es: 'eGOLI · JOHANNESBURGO · Aquí se encontró oro en 1886. Un pequeño campamento minero se volvió una de las ciudades más grandes de África.',
      fa: 'اِگولی · ژوهانسبرگ · در سال ۱۸۸۶ این‌جا طلا پیدا شد. یک کمپ کوچک معدن به یکی از بزرگ‌ترین شهرهای افریقا تبدیل شد.' } },
    { x: 23, y: 12, text: { en: 'PORT OF DURBAN ⚓ · Indian Ocean · Ships leave here for Asia, Europe and the Americas. Sugarcane grows on the green hills nearby.',
      es: 'PUERTO DE DURBAN ⚓ · Océano Índico · De aquí salen barcos a Asia, Europa y las Américas. En las colinas verdes de cerca crece la caña de azúcar.',
      fa: 'بندر دوربان ⚓ · اقیانوس هند · کشتی‌ها از این‌جا به آسیا، اروپا و امریکا می‌روند. نیشکر روی تپه‌های سبز نزدیک می‌روید.' } }
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
        { en: 'Sawubona! I am Nomvula. I grow sugarcane on these green hills near Durban. The rain and warm weather here are good for cane. We grow more sugar than we can eat.',
          es: '¡Sawubona! Soy Nomvula. Cultivo caña de azúcar en estas colinas verdes cerca de Durban. La lluvia y el clima cálido de aquí son buenos para la caña. Producimos más azúcar de la que podemos comer.',
          fa: 'ساوبونا! من نومولا هستم. روی این تپه‌های سبز نزدیک دوربان نیشکر می‌کارم. باران و هوای گرم این‌جا برای نیشکر خوب است. ما بیشتر از آن‌چه می‌خوریم بوره تولید می‌کنیم.' },
        { en: 'But our water pump broke, and new pumps come in on ships. Johan drives the trains, west of here. He knows the traders at the port. Will you ask him?',
          es: 'Pero nuestra bomba de agua se rompió, y las bombas nuevas llegan en barco. Johan maneja los trenes, al oeste de aquí. Conoce a los comerciantes del puerto. ¿Le preguntas?',
          fa: 'اما پمپ آب ما خراب شد و پمپ‌های نو با کشتی می‌آیند. یوهان در غرب این‌جا قطار می‌راند. او تاجران بندر را می‌شناسد. از او می‌پرسی؟' }
      ],
      wait: { en: 'Johan works by the railway, west of here. Follow the tracks west.',
        es: 'Johan trabaja junto a la vía del tren, al oeste de aquí. Sigue las vías hacia el oeste.',
        fa: 'یوهان کنار خط آهن در غرب این‌جا کار می‌کند. خط آهن را به طرف غرب دنبال کن.' },
      thanks: { en: 'A new water pump! Now our fields can drink again. We sent out sugar, our [[export|export]]. We got a pump, an [[import|import]]. That is trade!',
        es: '¡Una bomba de agua nueva! Ahora nuestros campos pueden beber otra vez. Mandamos azúcar, nuestra [[export|exportación]]. Recibimos una bomba, una [[import|importación]]. ¡Eso es comercio!',
        fa: 'یک پمپ آب نو! حالا کشتزارهای ما دوباره آب می‌خورند. ما بوره را فرستادیم، که [[export|صادرات]] ما است. یک پمپ گرفتیم، که [[import|واردات]] است. این تجارت است!' }
    },
    contact: {
      x: 12, y: 8,
      name: { en: 'Johan', es: 'Johan', fa: 'یوهان' },
      role: { en: 'Train driver', es: 'Maquinista de tren', fa: 'رانندهٔ قطار' },
      look: { skin: 0, hair: '#c8a165', shirt: '#2c3e50', pants: '#34495e', hat: '#7f8c8d' },
      lines: [
        { en: 'Hi, I am Johan. I drive trains on this railway. Every day my train carries ore, fruit and sugar east to the [[port|port]] of Durban.',
          es: 'Hola, soy Johan. Manejo trenes en esta vía. Cada día mi tren lleva mineral, fruta y azúcar al este, al [[port|puerto]] de Durban.',
          fa: 'سلام، من یوهان هستم. در این خط آهن قطار می‌رانم. هر روز قطار من سنگ معدنی، میوه و بوره را به طرف شرق، به [[port|بندر]] دوربان می‌برد.' },
        { en: 'A ship trader named Mei Lin waits by the south warehouses, near the docks. She sells water pumps. Offer her something this land has a lot of, and her country needs.',
          es: 'Una comerciante de barco llamada Mei Lin espera junto a las bodegas del sur, cerca de los muelles. Ella vende bombas de agua. Ofrécele algo que esta tierra tiene en abundancia y que su país necesita.',
          fa: 'یک تاجر کشتی به نام می‌لین کنار گدام‌های جنوبی، نزدیک لنگرگاه، انتظار می‌کشد. او پمپ آب می‌فروشد. چیزی به او پیشنهاد کن که این سرزمین زیاد دارد و کشور او به آن نیاز دارد.' }
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
          { en: 'Ni hao! That means hello in Chinese. My ship brings water pumps and machines from factories in China. I take South African goods back home.',
            es: '¡Ni hao! Así se dice hola en chino. Mi barco trae bombas de agua y máquinas de fábricas de China. Llevo productos de Sudáfrica de vuelta a casa.',
            fa: 'نی هاو! این به زبان چینی یعنی سلام. کشتی من پمپ آب و ماشین‌آلات را از فابریکه‌های چین می‌آورد. من جنس‌های افریقای جنوبی را به کشورم می‌برم.' }
        ]
      },
      q: { en: 'What will you trade me for one water pump?', es: '¿Qué me das a cambio de una bomba de agua?', fa: 'در بدل یک پمپ آب به من چه می‌دهی؟' },
      choices: [
        { ok: true, t: { en: 'A sack of sugar from Nomvula\'s farm', es: 'Un saco de azúcar de la finca de Nomvula', fa: 'یک بوجی بوره از کشتزار نومولا' },
          why: { en: 'Good trade! The warm, rainy hills near Durban grow lots of sugarcane. Sugar is an [[export|export]] here, and my country needs more than it grows.',
            es: '¡Buen trato! Las colinas cálidas y lluviosas cerca de Durban dan mucha caña de azúcar. El azúcar es una [[export|exportación]] de aquí, y mi país necesita más de la que produce.',
            fa: 'معاملهٔ خوب! تپه‌های گرم و بارانی نزدیک دوربان نیشکر زیاد می‌دهند. بوره این‌جا [[export|صادرات]] است و کشور من بیشتر از آن‌چه تولید می‌کند به آن نیاز دارد.' } },
        { t: { en: 'A bag of rice', es: 'Una bolsa de arroz', fa: 'یک خلطه برنج' },
          why: { en: 'South Africa grows very little rice. It buys rice from other countries, so rice is an [[import|import]] here. Do not trade away what you have to buy.',
            es: 'Sudáfrica cultiva muy poco arroz. Lo compra a otros países, así que aquí el arroz es una [[import|importación]]. No cambies lo que tienes que comprar.',
            fa: 'افریقای جنوبی برنج بسیار کم می‌کارد. برنج را از کشورهای دیگر می‌خرد، پس برنج این‌جا [[import|واردات]] است. چیزی را که خودت می‌خری، در بدل چیز دیگر نده.' } },
        { t: { en: 'A new phone', es: 'Un teléfono nuevo', fa: 'یک موبایل نو' },
          why: { en: 'Most phones here come in on ships, just like my pumps. I want something this land makes a lot of.',
            es: 'Casi todos los teléfonos de aquí llegan en barco, igual que mis bombas. Yo quiero algo que esta tierra produce en abundancia.',
            fa: 'بیشتر موبایل‌های این‌جا با کشتی می‌آیند، درست مثل پمپ‌های من. من چیزی می‌خواهم که این سرزمین زیاد تولید می‌کند.' } }
      ],
      item: { icon: '⚙️', name: { en: 'A new water pump', es: 'Una bomba de agua nueva', fa: 'یک پمپ آب نو' } }
    }
  },

  scraps: [[1, 1], [16, 1], [13, 20]],
  smudges: [[14, 4], [20, 14], [24, 6]],

  challenge: {
    at: [20, 8],
    type: 'order',
    stat: 'mov',
    title: { en: 'From the mine to your kitchen', es: 'De la mina a tu cocina', fa: 'از معدن تا آشپزخانهٔ تو' },
    intro: { en: 'The Grump scattered the trade chain! Chrome ore leaves a mine in South Africa and ends up far away. Tap the steps in the right order, from first to last.',
      es: '¡El Gruñón desarmó la cadena de comercio! El mineral de cromo sale de una mina en Sudáfrica y termina muy lejos. Toca los pasos en el orden correcto, del primero al último.',
      fa: 'غرغرو زنجیر تجارت را پراگنده کرد! سنگ کروم از یک معدن در افریقای جنوبی بیرون می‌آید و به جای دور می‌رسد. قدم‌ها را به ترتیب درست، از اول تا آخر، لمس کن.' },
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
        choices: [{ en: 'Most money is made where raw materials become finished products, often in other countries', es: 'El mayor dinero se gana donde las materias primas se vuelven productos terminados, muchas veces en otros países', fa: 'بیشترین پول جایی به دست می‌آید که مواد خام به جنس آماده تبدیل می‌شوند، اکثراً در کشورهای دیگر' }, { en: 'Minerals have no value at all', es: 'Los minerales no valen nada', fa: 'معدنیات هیچ ارزشی ندارند' }, { en: 'Nobody in the world buys minerals', es: 'Nadie en el mundo compra minerales', fa: 'هیچ‌کس در جهان معدنیات نمی‌خرد' }, { en: 'Mines make the land rich in rain', es: 'Las minas hacen que llueva más', fa: 'معدن‌ها باران را بیشتر می‌کنند' }], answer: 0,
        why: { en: 'Selling raw rock earns less than making and selling the finished product.', es: 'Vender roca sin procesar da menos que hacer y vender el producto terminado.', fa: 'فروختن سنگ خام کمتر از ساختن و فروختن جنس آماده پول می‌آورد.' } },
      { q: { en: 'What is an import?', es: '¿Qué es una importación?', fa: 'واردات چیست؟' },
        choices: [{ en: 'A good bought and brought in from another country', es: 'Un producto que se compra y se trae de otro país', fa: 'جنسی که از کشور دیگر خریده و آورده می‌شود' }, { en: 'A good sold and sent to another country', es: 'Un producto que se vende y se envía a otro país', fa: 'جنسی که فروخته و به کشور دیگر فرستاده می‌شود' }, { en: 'A mineral that stays in the ground', es: 'Un mineral que se queda en la tierra', fa: 'معدنی که در زیر زمین می‌ماند' }, { en: 'A train that never leaves the mine', es: 'Un tren que nunca sale de la mina', fa: 'قطاری که هرگز از معدن بیرون نمی‌رود' }], answer: 0,
        why: { en: 'Imports come in from other countries. Exports go out.', es: 'Las importaciones entran desde otros países. Las exportaciones salen.', fa: 'واردات از کشورهای دیگر داخل می‌آید. صادرات بیرون می‌رود.' } },
      { q: { en: 'Why is a port like Durban important to South Africa?', es: '¿Por qué un puerto como Durban es importante para Sudáfrica?', fa: 'چرا بندری مثل دوربان برای افریقای جنوبی مهم است؟' },
        choices: [{ en: 'Ships carry exports out and imports in', es: 'Los barcos sacan exportaciones y traen importaciones', fa: 'کشتی‌ها صادرات را بیرون و واردات را داخل می‌برند' }, { en: 'It is where gold was first found', es: 'Es donde se encontró oro por primera vez', fa: 'جایی است که اول بار طلا پیدا شد' }, { en: 'It is the highest city in Africa', es: 'Es la ciudad más alta de África', fa: 'بلندترین شهر افریقا است' }, { en: 'Trains cannot reach it', es: 'Los trenes no pueden llegar', fa: 'قطار به آن‌جا نمی‌رسد' }], answer: 0,
        why: { en: 'A port connects a country to the world by sea.', es: 'Un puerto conecta a un país con el mundo por mar.', fa: 'بندر یک کشور را از راه بحر به جهان وصل می‌کند.' } },
      { q: { en: 'Why does a steel pot sell for much more than the chrome ore inside it?', es: '¿Por qué una olla de acero se vende por mucho más que el mineral de cromo que tiene?', fa: 'چرا یک دیگ فولادی خیلی قیمتی‌تر از سنگ کرومی است که در آن به کار رفته؟' },
        choices: [{ en: 'Workers and factories added work to turn the ore into something people use', es: 'Trabajadores y fábricas pusieron trabajo para convertir el mineral en algo que la gente usa', fa: 'کارگران و فابریکه‌ها کار کردند تا سنگ را به چیزی تبدیل کنند که مردم استفاده می‌کنند' }, { en: 'The pot is heavier than the ore', es: 'La olla pesa más que el mineral', fa: 'دیگ از سنگ سنگین‌تر است' }, { en: 'Ore is free to dig up', es: 'Sacar mineral es gratis', fa: 'کندن سنگ معدنی مفت است' }, { en: 'Stores pay nothing for pots', es: 'Las tiendas no pagan nada por las ollas', fa: 'دوکان‌ها برای دیگ هیچ پول نمی‌دهند' }], answer: 0,
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
