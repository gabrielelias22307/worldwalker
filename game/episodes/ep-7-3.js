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
    { en: 'Christopher: "The Grump jammed the supply chain! Phones are stuck halfway, and the stores are empty. Talk to the chip engineer, the factory line leader and the crane operator. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón trabó la cadena de suministro! Los teléfonos están atascados a medio camino y las tiendas están vacías. Habla con la ingeniera de chips, la jefa de línea de la fábrica y el operador de grúa. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو زنجیرهٔ تأمین را بند کرد! مبایل‌ها نیمه‌راه گیر مانده‌اند و دکان‌ها خالی هستند. با انجنیر چِپ، سرپرست خط فابریکه و کارگر جرثقیل گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
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

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [11, 8], at: [10, 4], decor: 'gem',
      clue: { en: 'From this note, walk 4 steps north, then 1 step west. Something is hidden there.', es: 'Desde esta nota, camina 4 pasos al norte y luego 1 paso al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۴ قدم به شمال برو، بعد ۱ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! North is up and west is to the left. A shiny gem was in the mine. Mines dig raw materials out of the ground, like the copper in the wires of a phone.', es: '¡Seguiste las direcciones de la brújula! El norte está arriba y el oeste a la izquierda. Había una gema brillante en la mina. Las minas sacan materias primas de la tierra, como el cobre de los cables de un teléfono.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! شمال بالا و غرب طرف چپ است. یک جواهر براق در معدن بود. معدن‌ها مواد خام را از زیر زمین بیرون می‌کشند، مثل مسِ داخل سیم‌های یک تلیفون.' } },
    { clueAt: [6, 20], at: [26, 9], decor: 'coinold',
      clue: { en: 'Follow the supply chain! Copper rides the train east from the mine. Find the spot where the railway stops going east and turns south. Stand on that corner square.', es: '¡Sigue la cadena de suministro! El cobre viaja en tren al este desde la mina. Busca el lugar donde la vía del tren deja de ir al este y gira al sur. Párate en ese cuadro de la esquina.', fa: 'زنجیرهٔ تأمین را دنبال کن! مس با ریل از معدن به طرف شرق می‌رود. جایی را پیدا کن که خط آهن دیگر به شرق نمی‌رود و به طرف جنوب دور می‌خورد. روی همان خانهٔ کنج بایست.' },
      text: { en: 'You found the railway corner! Trains can carry heavy loads, like copper, a long way over land. From here the train runs south to the port. An old coin was by the tracks.', es: '¡Encontraste la esquina de la vía! Los trenes pueden llevar cargas pesadas, como el cobre, muy lejos por tierra. Desde aquí el tren va al sur hasta el puerto. Había una moneda antigua junto a la vía.', fa: 'تو کنج خط آهن را پیدا کردی! ریل می‌تواند بارهای سنگین، مثل مس، را از راه خشکه تا جای دور ببرد. از این جا ریل به طرف جنوب تا بندر می‌رود. یک سکهٔ کهنه کنار خط آهن بود.' } }
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
        { en: 'Welcome to the chip factory! I make [[semiconductor|semiconductors]]. They are tiny chips that control electricity inside phones, cars and computers. Without them, your phone cannot do anything.',
          es: '¡Bienvenido a la fábrica de chips! Yo hago [[semiconductor|semiconductores]]. Son chips diminutos que controlan la electricidad dentro de teléfonos, carros y computadoras. Sin ellos, tu teléfono no puede hacer nada.',
          fa: 'به فابریکهٔ چِپ خوش آمدی! من [[semiconductor|نیمه‌هادی]] می‌سازم. این‌ها چِپ‌های بسیار کوچک هستند که برق را در داخل مبایل، موتر و کمپیوتر کنترول می‌کنند. بدون آن‌ها مبایل تو هیچ کاری کرده نمی‌تواند.' },
        { en: 'Roughly nine in ten of the world\'s most advanced chips are made in Taiwan, where I live. One new chip factory costs billions of dollars. That is far more than a normal office building!',
          es: 'Cerca de nueve de cada diez de los chips más avanzados del mundo se hacen en Taiwán, donde yo vivo. Una fábrica nueva de chips cuesta miles de millones de dólares. ¡Mucho más que un edificio de oficinas normal!',
          fa: 'تقریباً نُه از هر ده چِپ پیشرفتهٔ جهان در تایوان ساخته می‌شود، جایی که من زندگی می‌کنم. یک فابریکهٔ نو چِپ میلیاردها دالر قیمت دارد. این خیلی بیشتر از یک تعمیر عادی دفتر است!' },
        { en: 'But no country makes an advanced chip all alone. Machines from the Netherlands print the tiny circuits with light. Japan sends special pure chemicals. South Korea makes huge amounts of memory chips.',
          es: 'Pero ningún país hace un chip avanzado solo. Máquinas de los Países Bajos imprimen los circuitos diminutos con luz. Japón manda químicos especiales muy puros. Corea del Sur hace enormes cantidades de chips de memoria.',
          fa: 'اما هیچ کشوری چِپ پیشرفته را تنها نمی‌سازد. ماشین‌های هالند مدارهای بسیار کوچک را با نور چاپ می‌کنند. جاپان مواد کیمیایی خاص و بسیار پاک می‌فرستد. کوریای جنوبی مقدار بسیار زیاد چِپ حافظه می‌سازد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is a semiconductor?', es: '¿Qué es un semiconductor?', fa: 'نیمه‌هادی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A tiny chip that controls electricity inside machines', es: 'Un chip diminuto que controla la electricidad dentro de las máquinas', fa: 'یک چِپ بسیار کوچک که برق را در داخل ماشین‌ها کنترول می‌کند' },
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
        { en: 'On my line, we put phones together. This is called [[assembly|assembly]]. The screen, the battery, the camera and the chips all arrive here from different places.',
          es: 'En mi línea armamos teléfonos. Esto se llama [[assembly|ensamblaje]]. La pantalla, la batería, la cámara y los chips llegan aquí desde lugares diferentes.',
          fa: 'در خط من، مبایل‌ها را یکجا می‌کنیم. این کار [[assembly|یکجا کردن پرزه‌ها]] نام دارد. صفحه، بتری، کمره و چِپ‌ها همه از جاهای مختلف اینجا می‌رسند.' },
        { en: 'It all starts with [[raw material|raw materials]]. Mines in places like Chile, Australia and the Congo dig up metals like copper, lithium and cobalt. Then come the chips, then my factory, then the ship. All of these steps together make a [[supply chain|supply chain]].',
          es: 'Todo empieza con las [[raw material|materias primas]]. Minas en lugares como Chile, Australia y el Congo sacan metales como cobre, litio y cobalto. Luego vienen los chips, luego mi fábrica, luego el barco. Todos estos pasos juntos forman una [[supply chain|cadena de suministro]].',
          fa: 'همه چیز با [[raw material|مواد خام]] شروع می‌شود. معدن‌ها در جاهایی مثل چیلی، آسترالیا و کانگو فلزهایی مثل مس، لیتیم و کوبالت بیرون می‌کشند. بعد چِپ‌ها، بعد فابریکهٔ من، بعد کشتی. همهٔ این قدم‌ها با هم یک [[supply chain|زنجیرهٔ تأمین]] می‌سازند.' },
        { en: 'Each place does what it does best and trades for the rest. That is [[specialization|specialization]]. Our factory puts together millions of phones for [[export|export]] to other countries.',
          es: 'Cada lugar hace lo que mejor sabe hacer y comercia para conseguir lo demás. Eso es la [[specialization|especialización]]. Nuestra fábrica arma millones de teléfonos para [[export|exportar]] a otros países.',
          fa: 'هر جا کاری را می‌کند که بهتر از همه بلد است و باقی را با تجارت به دست می‌آورد. این [[specialization|تخصص]] است. فابریکهٔ ما میلیون‌ها مبایل را برای [[export|صادرات]] به کشورهای دیگر یکجا می‌کند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What is specialization?', es: '¿Qué es la especialización?', fa: 'تخصص چیست؟' },
        choices: [
          { ok: true, t: { en: 'When a place makes what it does best and trades for the rest', es: 'Cuando un lugar hace lo que mejor sabe hacer y comercia para conseguir lo demás', fa: 'وقتی یک جا چیزی را می‌سازد که بهتر بلد است و باقی را با تجارت می‌گیرد' },
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
        { en: 'I lift [[container|containers]] onto ships with my crane. A container is a big steel box. It can go by ship, by train and by truck, and nobody has to open it on the way.',
          es: 'Con mi grúa subo [[container|contenedores]] a los barcos. Un contenedor es una gran caja de acero. Puede ir en barco, en tren y en camión, y nadie tiene que abrirlo en el camino.',
          fa: 'من با جرثقیلم [[container|کانتینرها]] را روی کشتی بالا می‌کنم. کانتینر یک صندوق بزرگ فولادی است. می‌تواند با کشتی، ریل و لاری برود، و کسی در راه آن را باز نمی‌کند.' },
        { en: 'The biggest ships carry thousands of containers at once. A phone packed here may sail across the Pacific Ocean for weeks. Then it goes to a warehouse, then to a store, then to you.',
          es: 'Los barcos más grandes llevan miles de contenedores a la vez. Un teléfono empacado aquí puede navegar por el océano Pacífico durante semanas. Luego va a un almacén, luego a una tienda y luego a ti.',
          fa: 'بزرگ‌ترین کشتی‌ها هزاران کانتینر را یکجا می‌برند. مبایلی که اینجا بسته‌بندی می‌شود ممکن است هفته‌ها در بحر آرام سفر کند. بعد به گدام، بعد به دکان، بعد به دست تو می‌رسد.' },
        { en: 'When one link breaks, the whole chain feels it. In 2021, many nearly finished cars sat waiting in parking lots. Why? One small chip was missing! Car prices went up far away, even for used cars in Virginia.',
          es: 'Cuando se rompe un eslabón, toda la cadena lo siente. En 2021, muchos carros casi terminados esperaban en estacionamientos. ¿Por qué? ¡Faltaba un chip pequeño! Los precios de los carros subieron lejos de aquí, hasta los de carros usados en Virginia.',
          fa: 'وقتی یک حلقه می‌شکند، تمام زنجیر آن را حس می‌کند. در سال ۲۰۲۱، بسیاری از موترهای تقریباً تکمیل‌شده در پارکینگ‌ها منتظر ماندند. چرا؟ یک چِپ کوچک کم بود! قیمت موترها در جاهای دور بالا رفت، حتی موترهای دست دوم در ویرجینیا.' }
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
    { x: 12, y: 6, text: { en: 'MINE · [[raw material|Raw materials]] start here. Metals like copper, lithium and cobalt come from mines in many countries, like Chile, Australia and the Democratic Republic of the Congo.',
      es: 'MINA · Las [[raw material|materias primas]] empiezan aquí. Metales como el cobre, el litio y el cobalto vienen de minas en muchos países, como Chile, Australia y la República Democrática del Congo.',
      fa: 'معدن · [[raw material|مواد خام]] از اینجا شروع می‌شوند. فلزهایی مثل مس، لیتیم و کوبالت از معدن‌های کشورهای زیاد می‌آیند، مثل چیلی، آسترالیا و جمهوری دموکراتیک کانگو.' } },
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
        { en: 'Hello, young traveler! My granddaughter moved to the big city by the port. I want a phone so I can call her.',
          es: '¡Hola, joven viajero! Mi nieta se mudó a la gran ciudad junto al puerto. Quiero un teléfono para poder llamarla.',
          fa: 'سلام، مسافر جوان! نواسه‌ام به شهر بزرگ کنار بندر رفت. یک مبایل می‌خواهم تا به او زنگ بزنم.' },
        { en: 'But our mine town has no phone factory. Rizal, the train driver, knows every stop on the line. Please ask him!',
          es: 'Pero nuestro pueblo minero no tiene fábrica de teléfonos. Rizal, el conductor del tren, conoce cada parada de la línea. ¡Pregúntale, por favor!',
          fa: 'اما شهرک معدنی ما فابریکهٔ مبایل ندارد. ریزال، رانندهٔ ریل، هر ایستگاه این خط را می‌شناسد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Rizal is east of here. Follow the railway east until you see the chip factory fence.',
        es: 'Rizal está al este de aquí. Sigue la vía del tren hacia el este hasta ver la cerca de la fábrica de chips.',
        fa: 'ریزال در شرق اینجا است. خط ریل را به طرف شرق دنبال کن تا جنگلهٔ فابریکهٔ چِپ را ببینی.' },
      thanks: { en: 'A phone! Now I can call my granddaughter. And copper from our own mine helped make it. Thank you!',
        es: '¡Un teléfono! Ahora puedo llamar a mi nieta. Y el cobre de nuestra propia mina ayudó a hacerlo. ¡Gracias!',
        fa: 'یک مبایل! حالا می‌توانم به نواسه‌ام زنگ بزنم. و مس معدن خود ما در ساختن آن کمک کرد. تشکر!' }
    },
    contact: {
      x: 22, y: 10,
      name: { en: 'Rizal', es: 'Rizal', fa: 'ریزال' },
      role: { en: 'Train driver', es: 'Conductor del tren', fa: 'رانندهٔ ریل' },
      look: { skin: 4, hair: '#141010', shirt: '#2d5f9a', pants: '#2a2a2a', hat: '#2d5f9a' },
      lines: [
        { en: 'My train carries copper from your mine to the factories. Each place makes what it does best and trades for the rest. That is [[specialization|specialization]].',
          es: 'Mi tren lleva cobre de tu mina a las fábricas. Cada lugar hace lo que mejor sabe hacer y comercia para conseguir lo demás. Eso es [[specialization|especialización]].',
          fa: 'ریل من مس را از معدن شما به فابریکه‌ها می‌برد. هر جا چیزی را می‌سازد که بهتر بلد است و باقی را با تجارت به دست می‌آورد. این [[specialization|تخصص]] است.' },
        { en: 'Ms. Lan trades phones by the assembly factories in the south-west. Offer her what your mine town has plenty of!',
          es: 'La Sra. Lan cambia teléfonos junto a las fábricas de ensamblaje del suroeste. ¡Ofrécele lo que tu pueblo minero tiene de sobra!',
          fa: 'خانم لان کنار فابریکه‌های اسمبل در جنوب غرب مبایل تبادله می‌کند. به او چیزی را پیشنهاد کن که شهرک معدنی شما زیاد دارد!' }
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
      q: { en: 'Your mine town wants one phone. What will you trade me for it?', es: 'Tu pueblo minero quiere un teléfono. ¿Qué me das a cambio?', fa: 'شهرک معدنی شما یک مبایل می‌خواهد. در بدلش به من چه می‌دهی؟' },
      choices: [
        { ok: true, t: { en: 'A cart of copper from the mine', es: 'Un carrito de cobre de la mina', fa: 'یک گادی مس از معدن' },
          why: { en: 'The mine has plenty of copper. The factory needs this [[raw material|raw material]] to make phones. Both sides win.', es: 'La mina tiene cobre de sobra. La fábrica necesita esta [[raw material|materia prima]] para hacer teléfonos. Los dos ganan.', fa: 'معدن مس زیاد دارد. فابریکه برای ساختن مبایل به این [[raw material|مادهٔ خام]] ضرورت دارد. هر دو طرف فایده می‌کنند.' } },
        { t: { en: 'Bags of rice from the mine town', es: 'Sacos de arroz del pueblo minero', fa: 'بوجی‌های برنج از شهرک معدنی' },
          why: { en: 'The mine is in rocky hills with no rice fields. The town has no rice to spare.', es: 'La mina está en cerros rocosos sin arrozales. El pueblo no tiene arroz de sobra.', fa: 'معدن در تپه‌های سنگلاخ است و شالیزار ندارد. شهرک برنج اضافه ندارد.' } },
        { t: { en: 'The miners\' only digging machine', es: 'La única máquina de excavar de los mineros', fa: 'تنها ماشین کندن کارگران معدن' },
          why: { en: 'Without it, the miners cannot work. Trade what you have plenty of, not what you need.', es: 'Sin ella, los mineros no pueden trabajar. Cambia lo que tienes de sobra, no lo que necesitas.', fa: 'بدون آن، کارگران معدن کار کرده نمی‌توانند. چیزی را تبادله کن که زیاد داری، نه چیزی که ضرورت داری.' } }
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
        choices: [{ en: 'All the steps and places needed to make and deliver a product', es: 'Todos los pasos y lugares para hacer y entregar un producto', fa: 'همهٔ قدم‌ها و جاهایی که برای ساختن و رساندن یک کالا لازم است' }, { en: 'A chain of stores owned by one company', es: 'Una cadena de tiendas de una sola empresa', fa: 'یک سلسله دکان که مال یک شرکت است' }, { en: 'A line of trucks waiting at a port', es: 'Una fila de camiones esperando en un puerto', fa: 'یک صف لاری که در بندر منتظر است' }, { en: 'The money a country earns from exports', es: 'El dinero que gana un país con sus exportaciones', fa: 'پولی که یک کشور از صادرات به دست می‌آورد' }], answer: 0,
        why: { en: 'From the mine to your hand, every step is a link in the supply chain.', es: 'Desde la mina hasta tu mano, cada paso es un eslabón de la cadena.', fa: 'از معدن تا دست تو، هر قدم یک حلقه در زنجیرهٔ تأمین است.' } },
      { q: { en: 'What is specialization?', es: '¿Qué es la especialización?', fa: 'تخصص چیست؟' },
        choices: [{ en: 'When a place makes what it does best and trades for the rest', es: 'Cuando un lugar hace lo que mejor sabe hacer y comercia para lo demás', fa: 'وقتی یک جا چیزی را می‌سازد که بهتر بلد است و باقی را با تجارت می‌گیرد' }, { en: 'Making every part of a product inside one country', es: 'Hacer todas las piezas de un producto en un solo país', fa: 'ساختن همهٔ پرزه‌های یک کالا در یک کشور' }, { en: 'Selling a product for more than it cost', es: 'Vender un producto por más de lo que costó', fa: 'فروختن کالا به قیمتی بیشتر از مصرفش' }, { en: 'Training workers to do many different jobs', es: 'Entrenar trabajadores para muchos trabajos diferentes', fa: 'تربیه کردن کارگران برای کارهای مختلف زیاد' }], answer: 0,
        why: { en: 'Each place focuses on its best step, then trades.', es: 'Cada lugar se enfoca en su mejor paso y luego comercia.', fa: 'هر جا روی بهترین قدم خود تمرکز می‌کند، بعد تجارت می‌کند.' } },
      { q: { en: 'What is a semiconductor?', es: '¿Qué es un semiconductor?', fa: 'نیمه‌هادی چیست؟' },
        choices: [{ en: 'A tiny chip that controls electricity inside machines and devices', es: 'Un chip diminuto que controla la electricidad dentro de máquinas y aparatos', fa: 'یک چِپ کوچک که برق را در داخل ماشین‌ها و دستگاه‌ها کنترول می‌کند' }, { en: 'A ship that carries cars across the ocean', es: 'Un barco que lleva carros por el océano', fa: 'کشتی‌ای که موترها را از بحر می‌برد' }, { en: 'A steel box that moves goods by ship', es: 'Una caja de acero que lleva productos en barco', fa: 'یک صندوق فولادی که کالا را با کشتی می‌برد' }, { en: 'A factory that puts together finished phones', es: 'Una fábrica que arma teléfonos terminados', fa: 'فابریکه‌ای که مبایل‌های تکمیل‌شده را یکجا می‌کند' }], answer: 0,
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
        choices: [{ en: 'A steel box that moves goods by ship, train and truck', es: 'Una caja de acero que lleva productos en barco, tren y camión', fa: 'یک صندوق فولادی که کالا را با کشتی، ریل و لاری می‌برد' }, { en: 'A tiny chip inside a phone', es: 'Un chip diminuto dentro de un teléfono', fa: 'یک چِپ کوچک در داخل مبایل' }, { en: 'A store that sells phones', es: 'Una tienda que vende teléfonos', fa: 'دکانی که مبایل می‌فروشد' }, { en: 'A mine for metals', es: 'Una mina de metales', fa: 'معدن فلز' }], answer: 0,
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
