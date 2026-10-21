/* WORLDWALKER · Episode 2.1 · United States and Canada (WG.3)
   Why cities sit on water: harbors, the Great Lakes, the St. Lawrence River, navigable rivers, ports.
   NW: a Great Lake with a port city and docks. NE: the lake drains into a river that runs east to the ocean (bridge north to the forest).
   SW: prairie wheat with a railway that runs north to the docks. SE: a big river running south with a barge dock. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'WG.3',
  title: { en: 'United States and Canada', es: 'Estados Unidos y Canadá', fa: 'امریکا و کانادا' },
  place: { en: 'The Great Lakes Port', es: 'El Puerto de los Grandes Lagos', fa: 'بندر جهیل‌های بزرگ' },
  intro: [
    { en: 'Welcome to the Americas! The Grump muddied the water routes. Ships and trains are stuck.', es: '¡Bienvenido a las Américas! El Gruñón ensució las rutas de agua. Los barcos y los trenes están atascados.', fa: 'به قارهٔ امریکا خوش آمدی! غرغرو راه‌های آبی را گل‌آلود کرد. کشتی‌ها و قطارها گیر مانده‌اند.' },
    { en: 'Talk to the captain, the farmer and the barge pilot. Then pick a city spot.', es: 'Habla con la capitana, el agricultor y el piloto de la barcaza. Luego elige un lugar para una ciudad.', fa: 'با کپتان، دهقان و رانندهٔ کشتی باری گپ بزن. بعد یک جا برای شهر انتخاب کن.' }
  ],

  /* 32 x 22 = 2 x 2 screens. Water is the road: every route here leads to the docks. */
  map: [
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',
    'P~~~~~~~~~~~~~~~~..P..PP.P..PP.P',
    'P~===============~....P.G......P',
    'P~================~~~~~~~~B~~~~~',
    'P~================~~~~~~~~B~~~~~',
    'P~~=====kk====~~~~~.kk.........P',
    'P.~~~~~~kk~~~~...:::::::::::::.P',
    'P.UU.J.::.....|..:.mmm.....RRR.P',
    'P.UU.J.:..RRR.|..:.........hdh.P',
    'P......:..hdh.|..:..T........T.P',
    'P..T...:..x...|..:.......~~....P',
    'P......:......|..:.......~~....P',
    'P.wwwww:wwwww.|..:....x..~~....P',
    'P.wwwww:wwwww.|..:..T....~~..T.P',
    'P.wwwww:wwwww.|..:......k~~..TTP',
    'P--------------..:::::::k~~....P',
    'P.wwwww.wwwww.,......T...bb..T.P',
    'P.wwwww.wwwww.....T......~~....P',
    'P.wwwww.wwwww.J..........~~..T.P',
    'P..T...MM.MM.............~~....P',
    'P...,..MM.MP.............~~.T..P',
    'PPPPPPPPPPPPPPPPPPPPPPPPP~~PPPPP'
  ],
  start: [7, 9],

  tools: ['axe', 'sickle'],

  /* build (FUN-PASS-2): a dock at the lake port, where the railway from the prairie meets lake water that flows east to the ocean */
  build: [
    { id: 'dock', kind: 'place', board: [16, 7], tile: 'k', ok: [[14, 5], [15, 5], [16, 5], [17, 5]], cost: { wood: 1 }, over: '~',
      name: { en: 'Dock at the lake port', es: 'Muelle en el puerto del lago', fa: 'اسکله در بندر جهیل' },
      ask: { en: 'Grain rides the train from the [[prairie|prairie]] to the lake. Ships carry it across the lake, then down the river to the Atlantic Ocean, like the Great Lakes and the St. Lawrence River. Build a dock on the lake, where the railway ends, at the east end of the lake.',
        es: 'El grano viaja en tren desde la [[prairie|pradera]] hasta el lago. Los barcos lo llevan por el lago y luego por el río hasta el océano Atlántico, como los Grandes Lagos y el río San Lorenzo. Construye un muelle en el lago, donde termina el tren, en el extremo este del lago.',
        fa: 'غله با قطار از [[prairie|دشت]] تا جهیل می‌آید. کشتی‌ها آن را از جهیل می‌گذرانند، بعد از راه دریا تا بحر اطلس می‌برند، مثل جهیل‌های بزرگ و دریای سنت لارنس. یک اسکله روی جهیل بساز، جایی که خط آهن تمام می‌شود، در سر شرقی جهیل.' },
      why: { en: 'Right where the train meets the lake! From here ships can sail east to the ocean.', es: '¡Justo donde el tren llega al lago! Desde aquí los barcos pueden ir al este, hasta el océano.', fa: 'درست جایی که قطار به جهیل می‌رسد! از این جا کشتی‌ها می‌توانند به طرف شرق تا بحر بروند.' },
      wrong: { en: 'Not here. Build the dock on the lake water where the railway ends, at the east end of the lake. That water flows east, all the way to the ocean.',
        es: 'Aquí no. Construye el muelle en el agua del lago donde termina el tren, en el extremo este del lago. Esa agua corre hacia el este, hasta el océano.',
        fa: 'این جا نه. اسکله را روی آب جهیل بساز، جایی که خط آهن تمام می‌شود، در سر شرقی جهیل. آن آب به طرف شرق تا بحر جاری است.' },
      wrongBy: [
        { x: 1, y: 12, w: 13, h: 9, t: { en: 'This is the prairie, far from the water. Ships cannot reach a farm, so the train carries the grain to the port.', es: 'Esta es la pradera, lejos del agua. Los barcos no llegan a una granja, así que el tren lleva el grano al puerto.', fa: 'این دشت است و از آب دور است. کشتی به فارم نمی‌رسد، پس قطار غله را به بندر می‌برد.' } },
        { x: 19, y: 9, w: 12, h: 12, t: { en: 'This river flows south, to the Gulf of Mexico. Ships to the Atlantic leave from the lake port.', es: 'Este río corre hacia el sur, hasta el golfo de México. Los barcos que van al Atlántico salen del puerto del lago.', fa: 'این دریا به طرف جنوب تا خلیج مکسیکو جاری است. کشتی‌هایی که به بحر اطلس می‌روند از بندر جهیل حرکت می‌کنند.' } }
      ],
      done: { en: 'The dock is ready! Train, lake and river work together: the Great Lakes and the St. Lawrence River carry ships from the middle of the continent to the Atlantic Ocean. That is why so many cities grew up on this water.',
        es: '¡El muelle está listo! El tren, el lago y el río trabajan juntos: los Grandes Lagos y el río San Lorenzo llevan barcos desde el centro del continente hasta el océano Atlántico. Por eso tantas ciudades crecieron junto a esta agua.',
        fa: 'اسکله آماده است! قطار، جهیل و دریا با هم کار می‌کنند: جهیل‌های بزرگ و دریای سنت لارنس کشتی‌ها را از وسط قاره تا بحر اطلس می‌برند. برای همین این‌قدر شهرها کنار این آب بزرگ شدند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [19, 13], at: [22, 17], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south, then 3 steps east. Something is hidden there.', es: 'Desde esta nota, camina 4 pasos al sur y luego 3 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، بعد ۳ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! Four of the five Great Lakes touch the U.S.–Canada border. A feather was here.', es: '¡Seguiste las direcciones de la brújula! Cuatro de los cinco Grandes Lagos tocan la frontera entre EE. UU. y Canadá. Aquí había una pluma.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! چهار تا از پنج جهیل بزرگ به سرحد امریکا و کانادا می‌رسند. یک پر این جا بود.' } },
    { clueAt: [15, 11], at: [24, 15], decor: 'coinold',
      clue: { en: '[[prairie|Prairie]] grain goes by train, then barge. Find the barge dock where the dirt road meets the south-flowing river.', es: 'El grano de la [[prairie|pradera]] va en tren y luego en barcaza. Busca el muelle donde el camino de tierra llega al río que corre al sur.', fa: 'غلهٔ [[prairie|دشت]] با ریل می‌رود، بعد با کشتیِ باری. اسکله را جایی پیدا کن که سرکِ خاکی به دریای جنوب‌رو می‌رسد.' },
      text: { en: 'You found the barge dock! One flat barge carries as much grain as many trucks. An old coin was here.', es: '¡Encontraste el muelle! Una barcaza plana lleva tanto grano como muchos camiones. Aquí había una moneda antigua.', fa: 'تو اسکله را پیدا کردی! یک کشتیِ باریِ هموار به اندازهٔ چندین لاری غله می‌برد. یک سکهٔ کهنه این جا بود.' } }
  ],
  // only the Compass Rose (Episode 1.3) opens the little gate by the lake
  secret: { tool: 'compass', at: [24, 1],
    text: { en: 'The Compass Rose found the hidden path! In the chest is an old map. It says the five Great Lakes hold about one fifth of all the fresh lake water on Earth.',
      es: '¡La rosa de los vientos encontró el camino escondido! En el cofre hay un mapa viejo. Dice que los cinco Grandes Lagos tienen cerca de una quinta parte del agua dulce de lagos de la Tierra.',
      fa: 'قطب‌نما راه پنهان را پیدا کرد! در صندوق یک نقشهٔ کهنه است. می‌گوید پنج جهیل بزرگ حدود یک پنجم آب شیرین جهیل‌های زمین را دارند.' } },

  words: {
    harbor: { en: 'a calm, sheltered part of the coast where large ships can dock safely', es: 'una parte tranquila y protegida de la costa donde los barcos grandes pueden atracar seguros', fa: 'بخش آرام و محفوظ ساحل که کشتی‌های بزرگ می‌توانند با امنیت لنگر بیندازند' },
    port: { en: 'a town or place where ships load and unload goods', es: 'un pueblo o lugar donde los barcos cargan y descargan productos', fa: 'شهر یا جایی که کشتی‌ها بار می‌زنند و بار خالی می‌کنند' },
    navigable: { en: 'deep and wide enough for large boats to travel on', es: 'lo bastante profundo y ancho para que pasen barcos grandes', fa: 'آن‌قدر عمیق و پهن که کشتی‌های بزرگ بتوانند در آن حرکت کنند' },
    seaway: { en: 'the St. Lawrence Seaway: a water route with locks that takes ships between the Great Lakes and the Atlantic Ocean', es: 'la Vía Marítima del San Lorenzo: una ruta de agua con esclusas que lleva barcos entre los Grandes Lagos y el océano Atlántico', fa: 'راه آبی سنت لارنس: راهی با دروازه‌های آبی که کشتی‌ها را میان جهیل‌های بزرگ و بحر اطلس می‌برد' },
    prairie: { en: 'wide, flat grassland; in Canada the flat middle of the country is called the prairies', es: 'tierra de pasto ancha y plana; en Canadá el centro plano del país se llama las praderas', fa: 'دشت پهن و هموار پر از سبزه؛ در کانادا میانهٔ هموار کشور را دشت‌ها (پریری) می‌گویند' },
    site: { en: 'the land right where a city stands: its ground, water and shape', es: 'el terreno justo donde está una ciudad: su suelo, su agua y su forma', fa: 'زمینی که شهر درست روی آن ایستاده: خاک، آب و شکل آن' },
    situation: { en: 'where a city is compared to other places, and how it connects to them', es: 'dónde está una ciudad comparada con otros lugares y cómo se conecta con ellos', fa: 'جای یک شهر در مقایسه با جاهای دیگر، و اینکه چطور به آن‌ها وصل است' },
    downstream: { en: 'the way a river flows, toward the place where it ends, like a lake or the ocean', es: 'hacia donde corre un río, rumbo al lugar donde termina, como un lago o el océano', fa: 'طرفی که دریا به آن جاری است، به سوی جایی که ختم می‌شود، مثل جهیل یا بحر' }
  },

  npcs: [
    {
      x: 20, y: 5,
      name: { en: 'Captain Marie', es: 'Capitana Marie', fa: 'کپتان ماری' },
      role: { en: 'Ship captain from Quebec', es: 'Capitana de barco de Quebec', fa: 'کپتان کشتی از کیوبک' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#22324f', pants: '#22324f' },
      lines: [
        { en: 'Bonjour! I am Marie from Quebec. Big cities grow by a [[harbor|harbor]], where ships dock.', es: '¡Bonjour! Soy Marie, de Quebec. Las grandes ciudades crecen junto a un [[harbor|puerto natural]], donde atracan los barcos.', fa: 'بونژور! من ماری از کیوبک هستم. شهرهای بزرگ کنار یک [[harbor|بندرگاه]] بزرگ می‌شوند، جایی که کشتی‌ها لنگر می‌اندازند.' },
        { en: 'The five Great Lakes, between the U.S. and Canada, work like an inland sea.', es: 'Los cinco Grandes Lagos, entre EE. UU. y Canadá, funcionan como un mar interior.', fa: 'پنج جهیل بزرگ، میان امریکا و کانادا، مثل یک بحر در وسط خشکه کار می‌کنند.' },
        { en: 'Ships carry iron ore and grain down the St. Lawrence River to the Atlantic.', es: 'Los barcos llevan mineral de hierro y granos por el río San Lorenzo hasta el Atlántico.', fa: 'کشتی‌ها سنگ آهن و غله را از راه دریای سنت لارنس تا بحر اطلس می‌برند.' },
        { en: 'Lake Superior is 180 meters above the sea. [[seaway|Seaway]] locks lower ships step by step.', es: 'El lago Superior está a 180 metros sobre el mar. Las esclusas de la [[seaway|Vía Marítima]] bajan los barcos paso a paso.', fa: 'جهیل سوپریور ۱۸۰ متر از بحر بلندتر است. دروازه‌های آبی [[seaway|راه آبی سنت لارنس]] کشتی‌ها را زینه به زینه پایین می‌برند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did so many cities grow next to harbors, lakes and rivers?', es: '¿Por qué tantas ciudades crecieron junto a puertos, lagos y ríos?', fa: 'چرا این‌قدر زیاد شهرها کنار بندرگاه، جهیل و دریا بزرگ شدند؟' },
        choices: [
          { ok: true, t: { en: 'Boats moved heavy goods more cheaply than wagons', es: 'Los barcos movían cargas pesadas más barato que las carretas', fa: 'کشتی‌ها بار سنگین را ارزان‌تر از گادی می‌بردند' },
            why: { en: 'Yes! Water was the road. One boat could carry what many wagons could not.', es: '¡Sí! El agua era el camino. Un barco llevaba lo que muchas carretas no podían.', fa: 'بله! آب همان سرک بود. یک کشتی باری را می‌برد که گادی‌های زیاد نمی‌توانستند.' } },
          { t: { en: 'Land far away from water could never be farmed', es: 'La tierra lejos del agua nunca se podía sembrar', fa: 'زمین دور از آب هرگز قابل زراعت نبود' },
            why: { en: 'The prairies are far from the sea and full of farms. The reason was moving goods.', es: 'Las praderas están lejos del mar y llenas de granjas. La razón era mover productos.', fa: 'دشت‌ها از بحر دور هستند و پر از فارم. دلیل اصلی بردن اجناس بود.' } },
          { t: { en: 'Governments ordered every town to be built at a port', es: 'Los gobiernos ordenaron construir cada pueblo en un puerto', fa: 'حکومت‌ها دستور دادند هر شهرک در بندر ساخته شود' },
            why: { en: 'Nobody ordered it. Towns grew where boats could stop, load and unload.', es: 'Nadie lo ordenó. Los pueblos crecieron donde los barcos podían parar, cargar y descargar.', fa: 'کسی دستور نداد. شهرک‌ها جایی بزرگ شدند که کشتی‌ها می‌توانستند بایستند و بار بزنند و خالی کنند.' } }
        ]
      }
    },
    {
      x: 7, y: 17,
      name: { en: 'Harpreet', es: 'Harpreet', fa: 'هرپریت' },
      role: { en: 'Wheat farmer on the prairie', es: 'Agricultor de trigo en la pradera', fa: 'دهقان گندم در دشت' },
      look: { skin: 2, hair: '#1b1410', shirt: '#e07a2a', pants: '#3a4a6a' },
      lines: [
        { en: 'Hello! Between the Rockies (west) and Appalachians (east) lies a huge flat middle.', es: '¡Hola! Entre las Rocosas (oeste) y los Apalaches (este) hay un enorme centro plano.', fa: 'سلام! میان کوه‌های راکی (غرب) و اپالاچی (شرق) یک میانهٔ هموار بسیار بزرگ است.' },
        { en: 'Great Plains in the U.S., [[prairie|prairies]] in Canada. We grow wheat, corn, soybeans.', es: 'Grandes Llanuras en EE. UU., [[prairie|praderas]] en Canadá. Sembramos trigo, maíz y soya.', fa: 'در امریکا دشت‌های بزرگ، در کانادا [[prairie|دشت‌ها (پریری)]]. ما گندم، جواری و سویا می‌کاریم.' },
        { en: 'We are far from the sea. Long ago, wagons moved grain slowly and expensively.', es: 'Estamos lejos del mar. Hace mucho, las carretas movían el grano despacio y caro.', fa: 'ما از بحر دور هستیم. در گذشته، گادی‌ها غله را آهسته و قیمت می‌بردند.' },
        { en: 'Now a truck takes it to the grain elevator, then a train to a [[port|port]].', es: 'Ahora un camión lo lleva al elevador de granos y luego un tren a un [[port|puerto]].', fa: 'حالا لاری آن را به انبار غله می‌برد، بعد قطار به یک [[port|بندر]].' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'A truck brings wheat to a grain elevator beside a railway. What happens to the wheat next?', es: 'Un camión lleva trigo a un elevador de granos junto al ferrocarril. ¿Qué pasa después con el trigo?', fa: 'یک لاری گندم را به انبار غله کنار خط آهن می‌آورد. بعد از آن به گندم چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A train hauls it to a lake or ocean port', es: 'Un tren lo lleva a un puerto de lago o de mar', fa: 'قطار آن را به یک بندر جهیل یا بحر می‌برد' },
            why: { en: 'Right. The grain keeps moving toward the water, where shipping is cheapest.', es: 'Correcto. El grano sigue avanzando hacia el agua, donde enviarlo es más barato.', fa: 'درست. غله به طرف آب پیش می‌رود، جایی که بردن آن از همه ارزان‌تر است.' } },
          { t: { en: 'It goes back to the field to be planted again', es: 'Vuelve al campo para sembrarse otra vez', fa: 'دوباره به زمین می‌رود تا کاشته شود' },
            why: { en: 'The wheat has been harvested. It is on its way to be sold.', es: 'El trigo ya se cosechó. Va camino a venderse.', fa: 'گندم درو شده است. در راه فروش است.' } },
          { t: { en: 'A big ship picks it up right at the farm', es: 'Un barco grande lo recoge en la misma granja', fa: 'یک کشتی بزرگ آن را از خود فارم می‌گیرد' },
            why: { en: 'The farm is far from the water. A train must carry it to the port first.', es: 'La granja está lejos del agua. Primero un tren debe llevarlo al puerto.', fa: 'فارم از آب دور است. اول قطار باید آن را به بندر ببرد.' } }
        ]
      }
    },
    {
      x: 24, y: 14,
      name: { en: 'Darnell', es: 'Darnell', fa: 'دارنل' },
      role: { en: 'River barge pilot', es: 'Piloto de barcaza de río', fa: 'رانندهٔ کشتی باری دریا' },
      look: { skin: 5, hair: '#120c08', shirt: '#c0392b', pants: '#2a3a5a' },
      lines: [
        { en: 'Hey! I pilot a barge. A river helps trade only if it is [[navigable|navigable]].', es: '¡Hola! Manejo una barcaza. Un río solo ayuda al comercio si es [[navigable|navegable]].', fa: 'سلام! من کشتی باری می‌رانم. دریا فقط وقتی به تجارت کمک می‌کند که [[navigable|قابل کشتیرانی]] باشد.' },
        { en: 'That means deep and wide enough for large boats, like the Mississippi River.', es: 'Eso quiere decir lo bastante profundo y ancho para barcos grandes, como el río Misisipi.', fa: 'یعنی آن‌قدر عمیق و پهن که کشتی‌های بزرگ بگذرند، مثل دریای میسی‌سی‌پی.' },
        { en: 'Barges carry farm goods to the Gulf of Mexico, far cheaper than wagons or trucks.', es: 'Las barcazas llevan productos del campo al golfo de México, mucho más barato que carretas o camiones.', fa: 'کشتی‌های باری اجناس فارم را تا خلیج مکسیکو خیلی ارزان‌تر از گادی یا لاری می‌برند.' },
        { en: 'Alexandria grew on the Potomac, as far as ocean ships reached. Its warehouses still stand.', es: 'Alexandria creció en el Potomac, hasta donde llegaban los barcos del océano. Sus almacenes siguen en pie.', fa: 'الکساندریا کنار پوتومک بزرگ شد، تا جایی که کشتی‌های بحری می‌رسیدند. گدام‌هایش هنوز ایستاده‌اند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What does navigable mean when it describes a river?', es: '¿Qué significa navegable cuando describe un río?', fa: 'وقتی می‌گوییم یک دریا قابل کشتیرانی است، یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'It is deep and wide enough for large boats', es: 'Es lo bastante profundo y ancho para barcos grandes', fa: 'آن‌قدر عمیق و پهن است که کشتی‌های بزرگ بگذرند' },
            why: { en: 'Yes. The Mississippi is navigable, so barges carry goods for hundreds of miles.', es: 'Sí. El Misisipi es navegable, así que las barcazas llevan productos por cientos de millas.', fa: 'بله. میسی‌سی‌پی قابل کشتیرانی است، پس کشتی‌های باری اجناس را صدها میل می‌برند.' } },
          { t: { en: 'It runs right beside a very large city', es: 'Pasa justo al lado de una ciudad muy grande', fa: 'درست از کنار یک شهر بسیار بزرگ می‌گذرد' },
            why: { en: 'Big cities often sit on navigable rivers, but the word describes the water itself.', es: 'Las ciudades grandes suelen estar en ríos navegables, pero la palabra describe el agua.', fa: 'شهرهای بزرگ اغلب کنار دریاهای قابل کشتیرانی هستند، اما این کلمه خود آب را توصیف می‌کند.' } },
          { t: { en: 'It is drawn and named on most world maps', es: 'Aparece dibujado y con nombre en casi todos los mapas del mundo', fa: 'در بیشتر نقشه‌های جهان کشیده شده و نام دارد' },
            why: { en: 'A name on a map tells you nothing about how deep the water is.', es: 'Un nombre en un mapa no dice nada sobre la profundidad del agua.', fa: 'نام روی نقشه چیزی دربارهٔ عمق آب نمی‌گوید.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 10, text: { en: 'CANADA FACT · Most Canadians live within 100 miles of the U.S. border. The cold north has few farms or cities.', es: 'DATO DE CANADÁ · La mayoría de los canadienses vive a menos de 100 millas de la frontera con EE. UU. El norte frío tiene pocas granjas o ciudades.', fa: 'معلومات کانادا · بیشتر مردم کانادا در ۱۰۰ میلی سرحد امریکا زندگی می‌کنند. شمال سرد فارم و شهر کم دارد.' } },
    { x: 22, y: 12, text: { en: 'THE BIG RIVER · This river is [[navigable|navigable]] for hundreds of miles. Barges carry grain down it, like the Mississippi.', es: 'EL RÍO GRANDE · Este río es [[navigable|navegable]] por cientos de millas. Las barcazas llevan granos, como en el Misisipi.', fa: 'دریای بزرگ · این دریا صدها میل [[navigable|قابل کشتیرانی]] است. کشتی‌های باری غله می‌برند، مثل میسی‌سی‌پی.' } }
  ],

  /* the quest: Nokomis (gold !) -> Wen the fisher -> find the toy canoe downstream, east of the lake -> back to Nokomis */
  quest: {
    stat: 'mov',
    title: { en: 'The Drifting Canoe', es: 'La canoa a la deriva', fa: 'قایق سرگردان' },
    giver: {
      x: 11, y: 7,
      name: { en: 'Nokomis', es: 'Nokomis', fa: 'نوکومیس' },
      role: { en: 'Canoe maker', es: 'Fabricante de canoas', fa: 'قایق‌ساز' },
      look: { skin: 3, hair: '#d8d4cc', shirt: '#2a7a6a', pants: '#3a3a3a', style: 'long' },
      lines: [
        { en: 'Boozhoo! That means hello in my language, Ojibwe.', es: '¡Boozhoo! Eso quiere decir hola en mi idioma, el ojibwe.', fa: 'بوژو! این در زبان من، اوجیبوی، یعنی سلام.' },
        { en: 'I carved a little birchbark canoe for my grandson. The Grump\'s wind blew it away!', es: 'Tallé una canoa pequeña de corteza de abedul para mi nieto. ¡El viento del Gruñón se la llevó!', fa: 'من برای نواسه‌ام یک قایق کوچک از پوست درخت توس تراشیدم. باد غرغرو آن را برد!' },
        { en: 'It fell off the dock into the lake. Wen the fisher knows how water moves.', es: 'Se cayó del muelle al lago. Wen, la pescadora, sabe cómo se mueve el agua.', fa: 'از بندر به داخل جهیل افتاد. وِن ماهیگیر می‌داند آب چطور حرکت می‌کند.' },
        { en: 'She fishes on the big river, south-east. Will you ask her where my canoe went?', es: 'Pesca en el río grande del sureste. ¿Le preguntas a dónde se fue mi canoa?', fa: 'او در دریای بزرگ جنوب شرق ماهی می‌گیرد. از او می‌پرسی که قایق من کجا رفت؟' }
      ],
      wait: { en: 'Wen is by the big river in the south-east: down and right on this map.', es: 'Wen está junto al río grande, en el sureste: abajo y a la derecha en este mapa.', fa: 'وِن کنار دریای بزرگ در جنوب شرق است: در این نقشه پایین و طرف راست.' },
      thanks: { en: 'My canoe! The water carried it east. Big ships follow that same water road. Miigwech!', es: '¡Mi canoa! El agua la llevó hacia el este. Los barcos grandes siguen ese camino de agua. ¡Miigwech!', fa: 'قایق من! آب آن را به شرق برد. کشتی‌های بزرگ هم همین راه آبی را می‌روند. میگوِچ!' }
    },
    contact: {
      x: 21, y: 18,
      name: { en: 'Wen', es: 'Wen', fa: 'وِن' },
      role: { en: 'River fisher', es: 'Pescadora de río', fa: 'ماهیگیر دریا' },
      look: { skin: 1, hair: '#1b1410', shirt: '#d98e2b', pants: '#2a3a5a', hat: '#c8a870' },
      lines: [
        { en: 'Water always flows downhill. This lake empties into a river on its east side.', es: 'El agua siempre corre hacia abajo. Este lago se vacía en un río por su lado este.', fa: 'آب همیشه به طرف پایین جاری است. این جهیل از طرف شرق خود به یک دریا می‌ریزد.' },
        { en: 'That river flows east to the ocean, like the St. Lawrence from the Great Lakes.', es: 'Ese río corre al este hasta el océano, como el San Lorenzo desde los Grandes Lagos.', fa: 'آن دریا به شرق تا بحر می‌رود، مثل سنت لارنس از جهیل‌های بزرگ.' },
        { en: 'So the canoe floated [[downstream|downstream]], to the east.', es: 'Así que la canoa flotó [[downstream|río abajo]], hacia el este.', fa: 'پس قایق به [[downstream|پایین دریا]]، به طرف شرق، رفت.' },
        { en: 'Cross the north-east bridge to the north bank. Walk two steps east by the water.', es: 'Cruza el puente del noreste hasta la orilla norte. Camina dos pasos al este junto al agua.', fa: 'از پل شمال شرق به ساحل شمالی برو. دو قدم به شرق در کنار آب برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [28, 2],
      hint: { en: 'north bank, 2 steps east of the north-east bridge', es: 'orilla norte, 2 pasos al este del puente del noreste', fa: 'ساحل شمالی، ۲ قدم شرقِ پل شمال شرق' },
      found: { en: 'There it is, in the reeds! The river carries everything [[downstream|downstream]], east to the ocean.', es: '¡Ahí está, entre las cañas! El río lleva todo [[downstream|río abajo]], hacia el este, hasta el océano.', fa: 'آنجاست، میان نی‌ها! دریا همه چیز را به [[downstream|پایین دریا]]، به طرف شرق تا بحر، می‌برد.' },
      item: { icon: '🛶', name: { en: 'The little birchbark canoe', es: 'La canoa pequeña de corteza', fa: 'قایق کوچک پوست توس' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 12]],
  smudges: [[16, 19], [28, 9]],

  challenge: {
    at: [18, 9],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag at each site: the lake shore where the river comes in, the flat prairie, a valley between mountains
    spots: [[24, 5], [13, 17], [9, 20]],
    stat: 'loc',
    title: { en: 'Where should the new city go?', es: '¿Dónde va la ciudad nueva?', fa: 'شهر تازه کجا ساخته شود؟' },
    intro: { en: 'Settlers want to build a new city. Pick a spot. Then back it up with one [[site|site]] reason (the land right there) and one [[situation|situation]] reason (how it connects to other places).',
      es: 'Unos pobladores quieren construir una ciudad nueva. Elige un lugar. Luego apóyalo con una razón de [[site|sitio]] (el terreno mismo) y una razón de [[situation|situación]] (cómo se conecta con otros lugares).',
      fa: 'چند نفر می‌خواهند یک شهر تازه بسازند. یک جا را انتخاب کن. بعد با یک دلیل [[site|مکان]] (خود زمین) و یک دلیل [[situation|موقعیت]] (پیوند با جاهای دیگر) از آن دفاع کن.' },
    options: [
      { icon: '⚓', name: { en: 'Where a river meets a Great Lake', es: 'Donde un río se une a un Gran Lago', fa: 'جایی که دریا به یک جهیل بزرگ می‌رسد' }, desc: { en: 'Flat shore, calm water, a river running to the ocean', es: 'Orilla plana, agua tranquila, un río que va al océano', fa: 'ساحل هموار، آب آرام، دریایی که تا بحر می‌رود' },
        result: { en: 'Your city grows into a giant port, like Chicago on Lake Michigan or Toronto on Lake Ontario. Ships, trains and people all meet here.', es: 'Tu ciudad crece hasta ser un puerto enorme, como Chicago en el lago Míchigan o Toronto en el lago Ontario. Aquí se juntan barcos, trenes y personas.', fa: 'شهر تو یک بندر بسیار بزرگ می‌شود، مثل شیکاگو کنار جهیل میشیگان یا تورنتو کنار جهیل انتاریو. کشتی‌ها، قطارها و مردم همه اینجا به هم می‌رسند.' } },
      { icon: '🌾', name: { en: 'On the flat prairie', es: 'En la pradera plana', fa: 'روی دشت هموار' }, desc: { en: 'Rich soil, far from big water', es: 'Tierra rica, lejos del agua grande', fa: 'خاک حاصل‌خیز، دور از آب بزرگ' },
        result: { en: 'Your city becomes a farm and railroad town. It grows, but more slowly, because its grain must ride a train to reach the water.', es: 'Tu ciudad se vuelve un pueblo de granjas y trenes. Crece, pero más despacio, porque su grano debe ir en tren para llegar al agua.', fa: 'شهر تو یک شهرک فارم و خط آهن می‌شود. بزرگ می‌شود، اما آهسته‌تر، چون غله‌اش باید با قطار به آب برسد.' } },
      { icon: '⛰️', name: { en: 'In a mountain valley', es: 'En un valle de montaña', fa: 'در یک درهٔ کوهستانی' }, desc: { en: 'Cool air, steep slopes all around', es: 'Aire fresco, laderas empinadas alrededor', fa: 'هوای سرد، شیب‌های تند در اطراف' },
        result: { en: 'Your city becomes a small mountain town. Travelers stop on the pass, but steep roads keep it small.', es: 'Tu ciudad se vuelve un pueblo pequeño de montaña. Los viajeros paran en el paso, pero los caminos empinados lo mantienen pequeño.', fa: 'شهر تو یک شهرک کوچک کوهستانی می‌شود. مسافران در کوتل توقف می‌کنند، اما راه‌های سربالا آن را کوچک نگه می‌دارد.' } }
    ],
    kinds: [
      { id: 'site', label: { en: 'Site: what the land right there is like', es: 'Sitio: cómo es el terreno mismo', fa: 'مکان: خود زمین آنجا چطور است' } },
      { id: 'situation', label: { en: 'Situation: how it connects to other places', es: 'Situación: cómo se conecta con otros lugares', fa: 'موقعیت: چطور به جاهای دیگر وصل است' } }
    ],
    reasons: [
      { kind: 'site', fits: [0], t: { en: 'Flat land on calm water, a safe harbor for ships', es: 'Tierra plana junto a agua tranquila, un puerto seguro para barcos', fa: 'زمین هموار کنار آب آرام، بندرگاه امن برای کشتی‌ها' },
        why: { en: 'Only the lakeshore spot has a harbor.', es: 'Solo el lugar junto al lago tiene un puerto natural.', fa: 'فقط جای کنار جهیل بندرگاه دارد.' } },
      { kind: 'site', fits: [1], t: { en: 'Deep, rich soil for growing wheat', es: 'Tierra profunda y rica para sembrar trigo', fa: 'خاک عمیق و حاصل‌خیز برای کاشتن گندم' },
        why: { en: 'Rich, flat farm soil fits the prairie spot, not this one.', es: 'La tierra rica y plana de cultivo es de la pradera, no de este lugar.', fa: 'خاک زراعتی هموار و حاصل‌خیز مال دشت است، نه این جا.' } },
      { kind: 'site', fits: [2], t: { en: 'Steep slopes all around that are easy to defend', es: 'Laderas empinadas alrededor, fáciles de defender', fa: 'شیب‌های تند در اطراف که دفاع از آن آسان است' },
        why: { en: 'Only the mountain valley has steep slopes all around.', es: 'Solo el valle de montaña tiene laderas empinadas alrededor.', fa: 'فقط درهٔ کوهستانی در اطراف خود شیب تند دارد.' } },
      { kind: 'site', fits: [], t: { en: 'A pretty view of the sunset', es: 'Una vista bonita del atardecer', fa: 'منظرهٔ زیبای غروب آفتاب' },
        why: { en: 'A pretty view does not feed people or move goods. Pick a reason about what the land can do.', es: 'Una vista bonita no alimenta a la gente ni mueve productos. Elige una razón sobre lo que la tierra puede dar.', fa: 'منظرهٔ زیبا مردم را سیر نمی‌کند و اجناس را نمی‌برد. دلیلی دربارهٔ کار زمین انتخاب کن.' } },
      { kind: 'situation', fits: [0], t: { en: 'Ships can cross the lakes and follow the St. Lawrence River to the Atlantic Ocean', es: 'Los barcos pueden cruzar los lagos y seguir el río San Lorenzo hasta el océano Atlántico', fa: 'کشتی‌ها می‌توانند از جهیل‌ها بگذرند و از راه دریای سنت لارنس به بحر اطلس بروند' },
        why: { en: 'Only the lakeshore spot has that water route.', es: 'Solo el lugar junto al lago tiene esa ruta de agua.', fa: 'فقط جای کنار جهیل این راه آبی را دارد.' } },
      { kind: 'situation', fits: [1], t: { en: 'A new railroad will cross the plains right through it', es: 'Un ferrocarril nuevo cruzará las llanuras justo por ahí', fa: 'یک خط آهن تازه از میان دشت درست از آنجا می‌گذرد' },
        why: { en: 'The railroad crosses the flat plains, not this spot.', es: 'El ferrocarril cruza las llanuras planas, no este lugar.', fa: 'خط آهن از دشت هموار می‌گذرد، نه از این جا.' } },
      { kind: 'situation', fits: [2], t: { en: 'It sits on the only pass through the mountains, so travelers must stop there', es: 'Está en el único paso entre las montañas, así que los viajeros deben parar allí', fa: 'روی تنها کوتل میان کوه‌ها است، پس مسافران باید آنجا توقف کنند' },
        why: { en: 'Only the mountain valley sits on the pass.', es: 'Solo el valle de montaña está en el paso.', fa: 'فقط درهٔ کوهستانی روی کوتل است.' } },
      { kind: 'situation', fits: [], t: { en: 'It is far from every road, river and town', es: 'Está lejos de todo camino, río y pueblo', fa: 'از هر سرک، دریا و شهرک دور است' },
        why: { en: 'Being far from everything is a problem, not a reason. Situation is about good links to other places.', es: 'Estar lejos de todo es un problema, no una razón. La situación trata de buenas conexiones con otros lugares.', fa: 'دور بودن از همه چیز مشکل است، نه دلیل. موقعیت یعنی پیوند خوب با جاهای دیگر.' } }
    ],
    mismatch: { en: 'That reason is not true for the spot you picked.', es: 'Esa razón no es cierta para el lugar que elegiste.', fa: 'این دلیل برای جایی که انتخاب کردی درست نیست.' },
    success: { en: 'Water was the road! Most big cities in the United States and Canada sit on a [[harbor|harbor]], a lake or a [[navigable|navigable]] river.', es: '¡El agua era el camino! La mayoría de las grandes ciudades de Estados Unidos y Canadá están en un [[harbor|puerto natural]], un lago o un río [[navigable|navegable]].', fa: 'آب همان سرک بود! بیشتر شهرهای بزرگ امریکا و کانادا کنار یک [[harbor|بندرگاه]]، یک جهیل یا یک دریای [[navigable|قابل کشتیرانی]] هستند.' }
  },

  boss: {
    at: [28, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Mud Grump', es: 'El Gruñón de Lodo', fa: 'غرغروی گل' },
    appear: { en: 'The Mud Grump is oozing in the woods east of the big river!', es: '¡El Gruñón de Lodo se arrastra en el bosque al este del río grande!', fa: 'غرغروی گل در جنگل شرق دریای بزرگ می‌خزد!' },
    taunt: { en: 'Splat! I turned every road to mud. Your goods will never move again!', es: '¡Plaf! Convertí cada camino en lodo. ¡Tus productos nunca se moverán otra vez!', fa: 'شلپ! هر سرک را گل کردم. اجناس تو دیگر هرگز حرکت نمی‌کنند!' },
    win: { en: 'The mud washes away down the river. Atlas page 2.1 floats down into your hands!', es: 'El lodo se va río abajo. ¡La página 2.1 del atlas cae en tus manos!', fa: 'گل با دریا شسته می‌شود. صفحهٔ ۲.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a harbor?', es: '¿Qué es un puerto natural?', fa: 'بندرگاه چیست؟' },
        choices: [{ en: 'A calm part of the coast where big ships dock', es: 'Una parte tranquila de la costa donde atracan barcos grandes', fa: 'بخش آرام ساحل که کشتی‌های بزرگ لنگر می‌اندازند' }, { en: 'A deep river that carries farm goods far inland', es: 'Un río profundo que lleva productos del campo tierra adentro', fa: 'دریای عمیقی که اجناس فارم را تا دور در خشکه می‌برد' }, { en: 'A flat area of rich soil for wheat and corn', es: 'Un área plana de tierra rica para trigo y maíz', fa: 'یک ساحهٔ هموار با خاک خوب برای گندم و جواری' }, { en: 'A group of five lakes with lots of fresh water', es: 'Un grupo de cinco lagos con mucha agua dulce', fa: 'گروه پنج جهیل با آب شیرین زیاد' }], answer: 0,
        why: { en: 'New York, Boston and Vancouver all grew around harbors like this.', es: 'Nueva York, Boston y Vancouver crecieron alrededor de puertos así.', fa: 'نیویارک، بوستون و ونکوور همه دور بندرگاه‌هایی مثل این بزرگ شدند.' } },
      { q: { en: 'What does navigable mean when it describes a river?', es: '¿Qué significa navegable cuando describe un río?', fa: 'قابل کشتیرانی برای یک دریا یعنی چه؟' },
        choices: [{ en: 'Deep and wide enough for large boats', es: 'Lo bastante profundo y ancho para barcos grandes', fa: 'آن‌قدر عمیق و پهن که کشتی‌های بزرگ بگذرند' }, { en: 'It runs beside a very large city', es: 'Pasa junto a una ciudad muy grande', fa: 'از کنار یک شهر بسیار بزرگ می‌گذرد' }, { en: 'It never freezes over, even in winter', es: 'Nunca se congela, ni siquiera en invierno', fa: 'هرگز یخ نمی‌زند، حتی در زمستان' }, { en: 'It is named on most maps', es: 'Tiene nombre en casi todos los mapas', fa: 'در بیشتر نقشه‌ها نام دارد' }], answer: 0,
        why: { en: 'The Mississippi is navigable, so boats carry farm goods hundreds of miles.', es: 'El Misisipi es navegable, así que los barcos llevan productos por cientos de millas.', fa: 'میسی‌سی‌پی قابل کشتیرانی است، پس کشتی‌ها اجناس فارم را صدها میل می‌برند.' } },
      { q: { en: 'In the 1700s a town stood far from any river or harbor. What problem would it most likely have?', es: 'En los años 1700 un pueblo estaba lejos de todo río o puerto. ¿Qué problema tendría seguramente?', fa: 'در سال‌های ۱۷۰۰ یک شهرک از هر دریا و بندرگاه دور بود. به احتمال زیاد چه مشکلی داشت؟' },
        choices: [{ en: 'Moving heavy goods to sell would cost a lot', es: 'Mover cargas pesadas para vender costaría mucho', fa: 'بردن بار سنگین برای فروش پول زیاد می‌خواست' }, { en: 'Its farmers would have much poorer soil', es: 'Sus agricultores tendrían tierra mucho más pobre', fa: 'دهقانانش خاک بسیار ضعیف‌تری داشتند' }, { en: 'Its winters would be much colder', es: 'Sus inviernos serían mucho más fríos', fa: 'زمستانش خیلی سردتر بود' }, { en: 'Its people would have nothing at all to drink', es: 'Su gente no tendría nada que beber', fa: 'مردمش هیچ چیزی برای نوشیدن نداشتند' }], answer: 0,
        why: { en: 'A wagon carried little and roads turned to mud. One boat did the same work for far less.', es: 'Una carreta llevaba poco y los caminos se volvían lodo. Un barco hacía el mismo trabajo por mucho menos.', fa: 'گادی بار کمی می‌برد و سرک‌ها گل می‌شد. یک کشتی همان کار را خیلی ارزان‌تر می‌کرد.' } },
      { q: { en: 'A ship carries iron ore from a port on Lake Superior out to the Atlantic Ocean. What does it pass through?', es: 'Un barco lleva mineral de hierro desde un puerto del lago Superior hasta el océano Atlántico. ¿Por dónde pasa?', fa: 'یک کشتی سنگ آهن را از بندری کنار جهیل سوپریور به بحر اطلس می‌برد. از کجا می‌گذرد؟' },
        choices: [{ en: 'A chain of locks that lower it step by step', es: 'Una cadena de esclusas que lo bajan paso a paso', fa: 'یک رشته دروازهٔ آبی که آن را زینه به زینه پایین می‌برد' }, { en: 'A tunnel under the Rocky Mountains', es: 'Un túnel bajo las Montañas Rocosas', fa: 'یک تونل زیر کوه‌های راکی' }, { en: 'A canal across the middle of the Great Plains', es: 'Un canal por el medio de las Grandes Llanuras', fa: 'یک کانال از وسط دشت‌های بزرگ' }, { en: 'A mountain pass in the Appalachians', es: 'Un paso de montaña en los Apalaches', fa: 'یک کوتل در کوه‌های اپالاچی' }], answer: 0,
        why: { en: 'Lake Superior sits about 180 meters above the sea, so the Seaway steps ships down to the ocean.', es: 'El lago Superior está a unos 180 metros sobre el mar, así que la Vía Marítima baja los barcos hasta el océano.', fa: 'جهیل سوپریور حدود ۱۸۰ متر از بحر بلندتر است، پس راه آبی کشتی‌ها را زینه به زینه تا بحر پایین می‌برد.' } },
      { q: { en: 'Almost everyone in Canada lives in a thin strip in the south. What best explains that?', es: 'Casi toda la gente de Canadá vive en una franja delgada en el sur. ¿Qué lo explica mejor?', fa: 'تقریباً همهٔ مردم کانادا در یک نوار باریک در جنوب زندگی می‌کنند. بهترین توضیح چیست؟' },
        choices: [{ en: 'The south has milder winters and better soil', es: 'El sur tiene inviernos más suaves y mejor tierra', fa: 'جنوب زمستان ملایم‌تر و خاک بهتر دارد' }, { en: 'The government moved every family out of the north', es: 'El gobierno sacó a todas las familias del norte', fa: 'حکومت همهٔ خانواده‌ها را از شمال بیرون کرد' }, { en: 'The north is covered by mountains too steep to climb', es: 'El norte está cubierto de montañas imposibles de subir', fa: 'شمال پر از کوه‌هایی است که بالا رفتن از آن‌ها ناممکن است' }, { en: 'The north of Canada belongs to the United States', es: 'El norte de Canadá pertenece a Estados Unidos', fa: 'شمال کانادا مال امریکا است' }], answer: 0,
        why: { en: 'The far north is very cold. People, ports and factories crowd into the warmer south.', es: 'El extremo norte es muy frío. La gente, los puertos y las fábricas se juntan en el sur, más cálido.', fa: 'شمال دور بسیار سرد است. مردم، بندرها و فابریکه‌ها در جنوب گرم‌تر جمع شده‌اند.' } },
      { q: { en: 'Which pair names the capital cities of the two countries?', es: '¿Qué pareja nombra las capitales de los dos países?', fa: 'کدام جفت پایتخت‌های دو کشور را نام می‌برد؟' },
        choices: [{ en: 'Washington, D.C. (United States) and Ottawa (Canada)', es: 'Washington, D.C. (Estados Unidos) y Ottawa (Canadá)', fa: 'واشنگتن دی‌سی (امریکا) و اوتاوا (کانادا)' }, { en: 'New York City (United States) and Toronto (Canada)', es: 'Nueva York (Estados Unidos) y Toronto (Canadá)', fa: 'نیویارک (امریکا) و تورنتو (کانادا)' }, { en: 'New York City (United States) and Ottawa (Canada)', es: 'Nueva York (Estados Unidos) y Ottawa (Canadá)', fa: 'نیویارک (امریکا) و اوتاوا (کانادا)' }, { en: 'Washington, D.C. (United States) and Toronto (Canada)', es: 'Washington, D.C. (Estados Unidos) y Toronto (Canadá)', fa: 'واشنگتن دی‌سی (امریکا) و تورنتو (کانادا)' }], answer: 0,
        why: { en: 'New York City and Toronto are the largest cities, not the capitals.', es: 'Nueva York y Toronto son las ciudades más grandes, no las capitales.', fa: 'نیویارک و تورنتو بزرگ‌ترین شهرها هستند، نه پایتخت.' } },
      { q: { en: 'Which two mountain chains run through both the United States and Canada?', es: '¿Qué dos cadenas de montañas pasan por Estados Unidos y Canadá?', fa: 'کدام دو رشته‌کوه از هم امریکا و هم کانادا می‌گذرند؟' },
        choices: [{ en: 'The Rockies in the west, Appalachians in the east', es: 'Las Rocosas al oeste y los Apalaches al este', fa: 'کوه‌های راکی در غرب، اپالاچی در شرق' }, { en: 'The Andes in the west and the Alps in the east', es: 'Los Andes al oeste y los Alpes al este', fa: 'اندیز در غرب و آلپ در شرق' }, { en: 'The Himalayas in the west and the Rockies in the east', es: 'El Himalaya al oeste y las Rocosas al este', fa: 'هیمالیا در غرب و راکی در شرق' }, { en: 'The Great Plains in the west and the prairies in the east', es: 'Las Grandes Llanuras al oeste y las praderas al este', fa: 'دشت‌های بزرگ در غرب و پریری در شرق' }], answer: 0,
        why: { en: 'The Rockies rise in the west and the Appalachians run along the east. The flat plains lie between them.', es: 'Las Rocosas se levantan al oeste y los Apalaches van por el este. Las llanuras están en medio.', fa: 'راکی در غرب بلند می‌شود و اپالاچی در شرق امتداد دارد. دشت‌های هموار میان آن‌هاست.' } },
      { q: { en: 'Street signs in Montreal often show French words first. What fact about Canada does this show?', es: 'Los letreros de las calles de Montreal suelen mostrar primero el francés. ¿Qué dato de Canadá muestra esto?', fa: 'تابلوهای سرک در مونترآل اغلب اول کلمه‌های فرانسوی را نشان می‌دهند. این کدام حقیقت کانادا را نشان می‌دهد؟' },
        choices: [{ en: 'Canada has two official languages', es: 'Canadá tiene dos idiomas oficiales', fa: 'کانادا دو زبان رسمی دارد' }, { en: 'Canada has a very long border with the United States', es: 'Canadá tiene una frontera muy larga con Estados Unidos', fa: 'کانادا با امریکا سرحد بسیار دراز دارد' }, { en: 'Most Canadians live near the border', es: 'La mayoría de los canadienses vive cerca de la frontera', fa: 'بیشتر مردم کانادا نزدیک سرحد زندگی می‌کنند' }, { en: 'Canada is a very large country', es: 'Canadá es un país muy grande', fa: 'کانادا کشور بسیار بزرگ است' }], answer: 0,
        why: { en: 'Most of Canada speaks English, but the province of Quebec mostly speaks French.', es: 'Casi todo Canadá habla inglés, pero la provincia de Quebec habla sobre todo francés.', fa: 'بیشتر کانادا انگلیسی گپ می‌زند، اما ولایت کیوبک بیشتر فرانسوی گپ می‌زند.' } }
    ]
  },

  learned: [
    { en: 'Most big cities in the United States and Canada sit on a [[harbor|harbor]], a lake or a [[navigable|navigable]] river, because boats moved heavy goods cheaply.', es: 'La mayoría de las grandes ciudades de Estados Unidos y Canadá están en un [[harbor|puerto natural]], un lago o un río [[navigable|navegable]], porque los barcos movían cargas pesadas a bajo costo.', fa: 'بیشتر شهرهای بزرگ امریکا و کانادا کنار [[harbor|بندرگاه]]، جهیل یا دریای [[navigable|قابل کشتیرانی]] هستند، چون کشتی‌ها بار سنگین را ارزان می‌بردند.' },
    { en: 'Ships cross the Great Lakes and follow the St. Lawrence River to the Atlantic. Barges carry farm goods down the Mississippi.', es: 'Los barcos cruzan los Grandes Lagos y siguen el río San Lorenzo hasta el Atlántico. Las barcazas llevan productos del campo por el Misisipi.', fa: 'کشتی‌ها از جهیل‌های بزرگ می‌گذرند و از راه دریای سنت لارنس به بحر اطلس می‌روند. کشتی‌های باری اجناس فارم را در میسی‌سی‌پی می‌برند.' },
    { en: 'A city\'s [[site|site]] is the land right where it stands. Its [[situation|situation]] is how it connects to other places.', es: 'El [[site|sitio]] de una ciudad es el terreno donde está. Su [[situation|situación]] es cómo se conecta con otros lugares.', fa: '[[site|مکان]] یک شهر زمینی است که روی آن ایستاده. [[situation|موقعیت]] آن این است که چطور به جاهای دیگر وصل است.' }
  ],
  reflect: {
    q: { en: 'Alexandria grew on the Potomac River. Think about where you live now, or a city where you lived before. Is it near water, a big road, a railroad or mountains? How did that help it grow?', es: 'Alexandria creció junto al río Potomac. Piensa en donde vives ahora o en una ciudad donde viviste antes. ¿Está cerca del agua, de una carretera grande, de un tren o de montañas? ¿Cómo la ayudó eso a crecer?', fa: 'الکساندریا کنار دریای پوتومک بزرگ شد. به جایی که حالا زندگی می‌کنی یا شهری که پیش‌تر در آن بودی فکر کن. آیا نزدیک آب، سرک بزرگ، خط آهن یا کوه است؟ این چطور به بزرگ شدن آن کمک کرد؟' },
    starter: { en: 'The place I am thinking of is near', es: 'El lugar en el que pienso está cerca de', fa: 'جایی که به آن فکر می‌کنم نزدیک' }
  }
};
