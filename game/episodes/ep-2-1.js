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
    { en: 'Christopher: "Welcome to the Americas! The Grump muddied the water routes, and now the ships and trains are stuck. Talk to the ship captain, the wheat farmer and the barge pilot. Then use the compass stone to pick the best spot for a new city."',
      es: 'Christopher: "¡Bienvenido a las Américas! El Gruñón ensució las rutas de agua y ahora los barcos y los trenes están atascados. Habla con la capitana, el agricultor de trigo y el piloto de la barcaza. Luego usa la piedra de la brújula para elegir el mejor lugar para una ciudad nueva."',
      fa: 'کریستوفر: «به قارهٔ امریکا خوش آمدی! غرغرو راه‌های آبی را گل‌آلود کرد و حالا کشتی‌ها و قطارها گیر مانده‌اند. با کپتان کشتی، دهقان گندم و رانندهٔ کشتی باری گپ بزن. بعد با سنگ قطب‌نما بهترین جا را برای یک شهر تازه انتخاب کن.»' }
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
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [19, 13], at: [22, 17], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south, then 3 steps east. Something is hidden there.', es: 'Desde esta nota, camina 4 pasos al sur y luego 3 pasos al este. Algo está escondido allí.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، بعد ۳ قدم به شرق. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! South is down and east is to the right. Four of the five Great Lakes touch the border between the United States and Canada. A bird feather was in the grass.', es: '¡Seguiste las direcciones de la brújula! El sur está abajo y el este a la derecha. Cuatro de los cinco Grandes Lagos tocan la frontera entre Estados Unidos y Canadá. Había una pluma de pájaro en el pasto.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! جنوب پایین و شرق طرف راست است. چهار تا از پنج جهیل بزرگ به سرحد امریکا و کانادا می‌رسند. یک پر پرنده در سبزه بود.' } },
    { clueAt: [15, 11], at: [24, 15], decor: 'coinold',
      clue: { en: 'Grain from the [[prairie|prairie]] rides the train, then a barge on the big river. Find the barge dock on the river that flows south. Stand on the dock square where the dirt road meets the river.', es: 'El grano de la [[prairie|pradera]] viaja en tren y luego en una barcaza por el río grande. Busca el muelle de barcazas en el río que corre hacia el sur. Párate en el cuadro del muelle donde el camino de tierra llega al río.', fa: 'غله از [[prairie|دشت]] با ریل می‌رود، بعد با یک کشتیِ باری روی دریای بزرگ. اسکلهٔ کشتی‌های باری را روی دریایی پیدا کن که به طرف جنوب می‌رود. روی خانهٔ اسکله بایست که سرکِ خاکی به دریا می‌رسد.' },
      text: { en: 'You found the barge dock! A barge is a flat boat that carries heavy loads like grain. One barge can carry as much grain as many big trucks. An old coin was between the boards.', es: '¡Encontraste el muelle de barcazas! Una barcaza es un bote plano que lleva cargas pesadas, como grano. Una sola barcaza lleva tanto grano como muchos camiones grandes. Había una moneda antigua entre las tablas.', fa: 'تو اسکلهٔ کشتی‌های باری را پیدا کردی! کشتیِ باری یک قایق هموار است که بارهای سنگین مثل غله را می‌برد. یک کشتیِ باری به اندازهٔ چندین لاری بزرگ غله می‌برد. یک سکهٔ کهنه بین تخته‌ها بود.' } }
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
        { en: 'Bonjour! I am Captain Marie, from Quebec in Canada. Look around. Most of the biggest cities in the United States and Canada sit next to water. Many sit on a [[harbor|harbor]], a calm place where big ships can dock.',
          es: '¡Bonjour! Soy la capitana Marie, de Quebec, en Canadá. Mira a tu alrededor. La mayoría de las ciudades más grandes de Estados Unidos y Canadá están junto al agua. Muchas están en un [[harbor|puerto natural]], un lugar tranquilo donde los barcos grandes pueden atracar.',
          fa: 'بونژور! من کپتان ماری از کیوبک در کانادا هستم. به اطراف نگاه کن. بیشتر شهرهای بزرگ امریکا و کانادا کنار آب هستند. بسیاری از آن‌ها روی یک [[harbor|بندرگاه]] ساخته شده‌اند، جای آرامی که کشتی‌های بزرگ می‌توانند لنگر بیندازند.' },
        { en: 'This lake is like the Great Lakes: five huge lakes between the United States and Canada. They work like an inland sea. Ships cross them loaded with iron ore and grain.',
          es: 'Este lago es como los Grandes Lagos: cinco lagos enormes entre Estados Unidos y Canadá. Funcionan como un mar en el medio del continente. Los barcos los cruzan cargados de mineral de hierro y granos.',
          fa: 'این جهیل مثل جهیل‌های بزرگ است: پنج جهیل بسیار بزرگ میان امریکا و کانادا. مثل یک بحر در وسط خشکه کار می‌کنند. کشتی‌ها پر از سنگ آهن و غله از آن‌ها می‌گذرند.' },
        { en: 'From the lakes, ships follow the St. Lawrence River out to the Atlantic Ocean. Lake Superior sits about 180 meters above the sea, so the [[seaway|Seaway]] lowers ships step by step through locks.',
          es: 'Desde los lagos, los barcos siguen el río San Lorenzo hasta el océano Atlántico. El lago Superior está a unos 180 metros sobre el mar, así que la [[seaway|Vía Marítima]] baja los barcos paso a paso con esclusas.',
          fa: 'کشتی‌ها از جهیل‌ها راه دریای سنت لارنس را تا بحر اطلس می‌گیرند. جهیل سوپریور حدود ۱۸۰ متر از بحر بلندتر است، پس [[seaway|راه آبی سنت لارنس]] کشتی‌ها را با دروازه‌های آبی زینه به زینه پایین می‌برد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did so many cities grow next to harbors, lakes and rivers?', es: '¿Por qué tantas ciudades crecieron junto a puertos, lagos y ríos?', fa: 'چرا این‌قدر زیاد شهرها کنار بندرگاه، جهیل و دریا بزرگ شدند؟' },
        choices: [
          { ok: true, t: { en: 'Boats moved heavy goods much more cheaply than wagons', es: 'Los barcos movían cargas pesadas mucho más barato que las carretas', fa: 'کشتی‌ها بار سنگین را خیلی ارزان‌تر از گادی می‌بردند' },
            why: { en: 'Yes! Water was the road. One boat could carry what many wagons could not.', es: '¡Sí! El agua era el camino. Un barco llevaba lo que muchas carretas no podían.', fa: 'بله! آب همان سرک بود. یک کشتی باری را می‌برد که گادی‌های زیاد نمی‌توانستند.' } },
          { t: { en: 'Land away from water could not be farmed', es: 'La tierra lejos del agua no se podía sembrar', fa: 'زمین دور از آب قابل زراعت نبود' },
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
        { en: 'Hello! Welcome to my farm. Between the Rocky Mountains in the west and the Appalachian Mountains in the east lies a huge flat middle. In the United States it is the Great Plains. In Canada it is the [[prairie|prairies]].',
          es: '¡Hola! Bienvenido a mi granja. Entre las Montañas Rocosas al oeste y los montes Apalaches al este hay un enorme centro plano. En Estados Unidos se llaman las Grandes Llanuras. En Canadá se llaman las [[prairie|praderas]].',
          fa: 'سلام! به فارم من خوش آمدی. میان کوه‌های راکی در غرب و کوه‌های اپالاچی در شرق یک میانهٔ هموار بسیار بزرگ است. در امریکا نامش دشت‌های بزرگ است. در کانادا نامش [[prairie|دشت‌ها (پریری)]] است.' },
        { en: 'Farmers here grow wheat, corn and soybeans on rich land. But a farm is far from the sea. Long ago, a wagon carried only a little, and roads turned to mud. Moving heavy grain over land was slow and expensive.',
          es: 'Aquí los agricultores siembran trigo, maíz y soya en tierra rica. Pero una granja está lejos del mar. Hace mucho, una carreta llevaba muy poco y los caminos se volvían lodo. Mover granos pesados por tierra era lento y caro.',
          fa: 'دهقانان اینجا روی زمین حاصل‌خیز گندم، جواری و سویا می‌کارند. اما فارم از بحر دور است. در گذشته، یک گادی بار کمی می‌برد و سرک‌ها گل می‌شد. بردن غلهٔ سنگین از راه خشکه آهسته و قیمت بود.' },
        { en: 'Today a truck brings my wheat to the grain elevator by the railway. Then a train hauls it to a [[port|port]] on a lake or on the coast. Each step moves it onto cheaper transport, and water is the cheapest of all.',
          es: 'Hoy un camión lleva mi trigo al elevador de granos junto al ferrocarril. Luego un tren lo lleva a un [[port|puerto]] en un lago o en la costa. Cada paso lo pasa a un transporte más barato, y el agua es lo más barato de todo.',
          fa: 'امروز یک لاری گندم مرا به انبار غله کنار خط آهن می‌برد. بعد قطار آن را به یک [[port|بندر]] کنار جهیل یا ساحل می‌برد. هر قدم آن را به وسیلهٔ ارزان‌تر می‌رساند، و آب از همه ارزان‌تر است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'A truck brings wheat to a grain elevator beside a railway. What happens to the wheat next?', es: 'Un camión lleva trigo a un elevador de granos junto al ferrocarril. ¿Qué pasa después con el trigo?', fa: 'یک لاری گندم را به انبار غله کنار خط آهن می‌آورد. بعد از آن به گندم چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A train hauls it to a port on a lake or on the coast', es: 'Un tren lo lleva a un puerto en un lago o en la costa', fa: 'قطار آن را به یک بندر کنار جهیل یا ساحل می‌برد' },
            why: { en: 'Right. The grain keeps moving toward the water, where shipping is cheapest.', es: 'Correcto. El grano sigue avanzando hacia el agua, donde enviarlo es más barato.', fa: 'درست. غله به طرف آب پیش می‌رود، جایی که بردن آن از همه ارزان‌تر است.' } },
          { t: { en: 'It is planted again in the field', es: 'Se vuelve a sembrar en el campo', fa: 'دوباره در زمین کاشته می‌شود' },
            why: { en: 'The wheat has been harvested. It is on its way to be sold.', es: 'El trigo ya se cosechó. Va camino a venderse.', fa: 'گندم درو شده است. در راه فروش است.' } },
          { t: { en: 'A ship picks it up right at the farm', es: 'Un barco lo recoge en la granja', fa: 'کشتی آن را از خود فارم می‌گیرد' },
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
        { en: 'Hey there! I pilot a barge on this big river. A river only helps trade if it is [[navigable|navigable]]. That means it is deep and wide enough for large boats.',
          es: '¡Hola! Yo manejo una barcaza en este río grande. Un río solo ayuda al comercio si es [[navigable|navegable]]. Eso quiere decir que es lo bastante profundo y ancho para barcos grandes.',
          fa: 'سلام! من در این دریای بزرگ کشتی باری می‌رانم. یک دریا فقط وقتی به تجارت کمک می‌کند که [[navigable|قابل کشتیرانی]] باشد. یعنی آن‌قدر عمیق و پهن باشد که کشتی‌های بزرگ از آن بگذرند.' },
        { en: 'The Mississippi River is navigable for hundreds of miles. Barges carry farm goods down it toward the Gulf of Mexico. A single boat can carry a heavy load for far less money than wagons or trucks.',
          es: 'El río Misisipi es navegable por cientos de millas. Las barcazas llevan productos del campo río abajo hacia el golfo de México. Un solo barco puede llevar una carga pesada por mucho menos dinero que carretas o camiones.',
          fa: 'دریای میسی‌سی‌پی صدها میل قابل کشتیرانی است. کشتی‌های باری اجناس فارم‌ها را از آن به طرف خلیج مکسیکو می‌برند. یک کشتی می‌تواند بار سنگین را خیلی ارزان‌تر از گادی یا لاری ببرد.' },
        { en: 'Cities grew where boats could stop, load and unload. Alexandria, Virginia grew on the Potomac River, at the point where ocean ships could still reach. Its old brick warehouses near the water still stand today.',
          es: 'Las ciudades crecieron donde los barcos podían parar, cargar y descargar. Alexandria, Virginia, creció en el río Potomac, en el punto hasta donde todavía llegaban los barcos del océano. Sus viejos almacenes de ladrillo junto al agua siguen en pie.',
          fa: 'شهرها جایی بزرگ شدند که کشتی‌ها می‌توانستند بایستند، بار بزنند و خالی کنند. الکساندریا در ویرجینیا کنار دریای پوتومک بزرگ شد، همان جایی که کشتی‌های بحری هنوز می‌رسیدند. گدام‌های خشتی کهنهٔ آن کنار آب هنوز ایستاده‌اند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What does navigable mean when it describes a river?', es: '¿Qué significa navegable cuando describe un río?', fa: 'وقتی می‌گوییم یک دریا قابل کشتیرانی است، یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'It is deep and wide enough for large boats', es: 'Es lo bastante profundo y ancho para barcos grandes', fa: 'آن‌قدر عمیق و پهن است که کشتی‌های بزرگ بگذرند' },
            why: { en: 'Yes. The Mississippi is navigable, so barges carry goods for hundreds of miles.', es: 'Sí. El Misisipi es navegable, así que las barcazas llevan productos por cientos de millas.', fa: 'بله. میسی‌سی‌پی قابل کشتیرانی است، پس کشتی‌های باری اجناس را صدها میل می‌برند.' } },
          { t: { en: 'It runs beside a very large city', es: 'Pasa junto a una ciudad muy grande', fa: 'از کنار یک شهر بسیار بزرگ می‌گذرد' },
            why: { en: 'Big cities often sit on navigable rivers, but the word describes the water itself.', es: 'Las ciudades grandes suelen estar en ríos navegables, pero la palabra describe el agua.', fa: 'شهرهای بزرگ اغلب کنار دریاهای قابل کشتیرانی هستند، اما این کلمه خود آب را توصیف می‌کند.' } },
          { t: { en: 'It is drawn and named on most maps', es: 'Aparece dibujado y con nombre en casi todos los mapas', fa: 'در بیشتر نقشه‌ها کشیده شده و نام دارد' },
            why: { en: 'A name on a map tells you nothing about how deep the water is.', es: 'Un nombre en un mapa no dice nada sobre la profundidad del agua.', fa: 'نام روی نقشه چیزی دربارهٔ عمق آب نمی‌گوید.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 10, text: { en: 'CANADA FACT · Most Canadians live within about 100 miles of the United States border. The far north is too cold for farms and big cities, so people, ports and factories crowd into the south.',
      es: 'DATO DE CANADÁ · La mayoría de los canadienses vive a menos de unas 100 millas de la frontera con Estados Unidos. El extremo norte es demasiado frío para granjas y ciudades grandes, así que la gente, los puertos y las fábricas se juntan en el sur.',
      fa: 'معلومات کانادا · بیشتر مردم کانادا در فاصلهٔ حدود ۱۰۰ میلی سرحد امریکا زندگی می‌کنند. شمال دور برای فارم و شهرهای بزرگ خیلی سرد است، پس مردم، بندرها و فابریکه‌ها در جنوب جمع شده‌اند.' } },
    { x: 22, y: 12, text: { en: 'THE BIG RIVER · This river is [[navigable|navigable]] for hundreds of miles to the south. Barges carry grain down it. The Mississippi River works the same way.',
      es: 'EL RÍO GRANDE · Este río es [[navigable|navegable]] por cientos de millas hacia el sur. Las barcazas llevan granos río abajo. El río Misisipi funciona igual.',
      fa: 'دریای بزرگ · این دریا تا صدها میل به طرف جنوب [[navigable|قابل کشتیرانی]] است. کشتی‌های باری غله را از آن می‌برند. دریای میسی‌سی‌پی هم همین‌طور است.' } }
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
        { en: 'Boozhoo! That means hello in my language, Ojibwe. I carved a little birchbark canoe for my grandson. The Grump\'s wind blew it off the dock and into the lake!',
          es: '¡Boozhoo! Eso quiere decir hola en mi idioma, el ojibwe. Tallé una canoa pequeña de corteza de abedul para mi nieto. ¡El viento del Gruñón la sacó del muelle y la tiró al lago!',
          fa: 'بوژو! این در زبان من، اوجیبوی، یعنی سلام. من برای نواسه‌ام یک قایق کوچک از پوست درخت توس تراشیدم. باد غرغرو آن را از بندر به داخل جهیل برد!' },
        { en: 'Wen the fisher knows how water moves. She fishes on the big river in the south-east. Will you ask her where my canoe went?',
          es: 'Wen, la pescadora, sabe cómo se mueve el agua. Pesca en el río grande del sureste. ¿Le preguntas a dónde se fue mi canoa?',
          fa: 'وِن ماهیگیر می‌داند آب چطور حرکت می‌کند. او در دریای بزرگ در جنوب شرق ماهی می‌گیرد. از او می‌پرسی که قایق من کجا رفت؟' }
      ],
      wait: { en: 'Wen is by the big river in the south-east. On this map south is down and east is to the right.',
        es: 'Wen está junto al río grande, en el sureste. En este mapa el sur está abajo y el este a la derecha.',
        fa: 'وِن کنار دریای بزرگ در جنوب شرق است. در این نقشه جنوب پایین و شرق طرف راست است.' },
      thanks: { en: 'My canoe! The lake water carried it east, toward the ocean. Big ships follow that same water road. Miigwech, thank you!',
        es: '¡Mi canoa! El agua del lago la llevó hacia el este, rumbo al océano. Los barcos grandes siguen ese mismo camino de agua. ¡Miigwech, gracias!',
        fa: 'قایق من! آب جهیل آن را به طرف شرق، به سوی بحر برد. کشتی‌های بزرگ هم همین راه آبی را می‌روند. میگوِچ، تشکر!' }
    },
    contact: {
      x: 21, y: 18,
      name: { en: 'Wen', es: 'Wen', fa: 'وِن' },
      role: { en: 'River fisher', es: 'Pescadora de río', fa: 'ماهیگیر دریا' },
      look: { skin: 1, hair: '#1b1410', shirt: '#d98e2b', pants: '#2a3a5a', hat: '#c8a870' },
      lines: [
        { en: 'Water always flows downhill. This lake empties into a river on its east side. That river flows east, all the way to the ocean. The St. Lawrence River does the same for the Great Lakes.',
          es: 'El agua siempre corre hacia abajo. Este lago se vacía en un río por su lado este. Ese río corre hacia el este hasta el océano. El río San Lorenzo hace lo mismo con los Grandes Lagos.',
          fa: 'آب همیشه به طرف پایین جاری است. این جهیل از طرف شرق خود به یک دریا می‌ریزد. آن دریا به طرف شرق تا بحر جاری است. دریای سنت لارنس هم برای جهیل‌های بزرگ همین کار را می‌کند.' },
        { en: 'So the canoe floated [[downstream|downstream]], to the east. Find the bridge over that river in the north-east. Cross it to the north bank. Then walk two steps east along the water.',
          es: 'Así que la canoa flotó [[downstream|río abajo]], hacia el este. Busca el puente sobre ese río en el noreste. Crúzalo hasta la orilla norte. Luego camina dos pasos al este junto al agua.',
          fa: 'پس قایق به [[downstream|پایین دریا]]، به طرف شرق، رفت. پلی را که در شمال شرق روی آن دریا است پیدا کن. از آن به ساحل شمالی برو. بعد دو قدم به طرف شرق در کنار آب راه برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [28, 2],
      hint: { en: 'north bank, 2 steps east of the north-east bridge', es: 'orilla norte, 2 pasos al este del puente del noreste', fa: 'ساحل شمالی، ۲ قدم شرقِ پل شمال شرق' },
      found: { en: 'There it is, caught in the reeds on the riverbank! The lake drains into the river, and the river carries everything [[downstream|downstream]], east to the ocean.',
        es: '¡Ahí está, atrapada entre las cañas de la orilla! El lago desagua en el río, y el río lleva todo [[downstream|río abajo]], hacia el este, hasta el océano.',
        fa: 'آنجاست، میان نی‌های کنار دریا گیر مانده! جهیل به دریا می‌ریزد و دریا همه چیز را به [[downstream|پایین دریا]]، به طرف شرق تا بحر، می‌برد.' },
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
        choices: [{ en: 'A sheltered part of the coast where large ships can dock safely', es: 'Una parte protegida de la costa donde los barcos grandes atracan seguros', fa: 'بخش محفوظ ساحل که کشتی‌های بزرگ با امنیت لنگر می‌اندازند' }, { en: 'A deep river that carries farm goods far inland', es: 'Un río profundo que lleva productos del campo tierra adentro', fa: 'دریای عمیقی که اجناس فارم را تا دور در خشکه می‌برد' }, { en: 'A flat area of rich soil for wheat and corn', es: 'Un área plana de tierra rica para trigo y maíz', fa: 'یک ساحهٔ هموار با خاک خوب برای گندم و جواری' }, { en: 'A group of five lakes with lots of fresh water', es: 'Un grupo de cinco lagos con mucha agua dulce', fa: 'گروه پنج جهیل با آب شیرین زیاد' }], answer: 0,
        why: { en: 'New York, Boston and Vancouver all grew around harbors like this.', es: 'Nueva York, Boston y Vancouver crecieron alrededor de puertos así.', fa: 'نیویارک، بوستون و ونکوور همه دور بندرگاه‌هایی مثل این بزرگ شدند.' } },
      { q: { en: 'What does navigable mean when it describes a river?', es: '¿Qué significa navegable cuando describe un río?', fa: 'قابل کشتیرانی برای یک دریا یعنی چه؟' },
        choices: [{ en: 'Deep and wide enough for large boats', es: 'Lo bastante profundo y ancho para barcos grandes', fa: 'آن‌قدر عمیق و پهن که کشتی‌های بزرگ بگذرند' }, { en: 'It runs beside a very large city', es: 'Pasa junto a una ciudad muy grande', fa: 'از کنار یک شهر بسیار بزرگ می‌گذرد' }, { en: 'It stays unfrozen all winter', es: 'No se congela en todo el invierno', fa: 'در تمام زمستان یخ نمی‌زند' }, { en: 'It is named on most maps', es: 'Tiene nombre en casi todos los mapas', fa: 'در بیشتر نقشه‌ها نام دارد' }], answer: 0,
        why: { en: 'The Mississippi is navigable, so boats carry farm goods hundreds of miles.', es: 'El Misisipi es navegable, así que los barcos llevan productos por cientos de millas.', fa: 'میسی‌سی‌پی قابل کشتیرانی است، پس کشتی‌ها اجناس فارم را صدها میل می‌برند.' } },
      { q: { en: 'In the 1700s a town stood far from any river or harbor. What problem would it most likely have?', es: 'En los años 1700 un pueblo estaba lejos de todo río o puerto. ¿Qué problema tendría seguramente?', fa: 'در سال‌های ۱۷۰۰ یک شهرک از هر دریا و بندرگاه دور بود. به احتمال زیاد چه مشکلی داشت؟' },
        choices: [{ en: 'Moving heavy goods to sell would cost a lot of money', es: 'Mover cargas pesadas para vender costaría mucho dinero', fa: 'بردن بار سنگین برای فروش پول زیاد می‌خواست' }, { en: 'Its farmers would have poorer soil', es: 'Sus agricultores tendrían tierra más pobre', fa: 'دهقانانش خاک ضعیف‌تری داشتند' }, { en: 'Its winters would be much colder', es: 'Sus inviernos serían mucho más fríos', fa: 'زمستانش خیلی سردتر بود' }, { en: 'Its people would have nothing to drink', es: 'Su gente no tendría nada que beber', fa: 'مردمش چیزی برای نوشیدن نداشتند' }], answer: 0,
        why: { en: 'A wagon carried little and roads turned to mud. One boat did the same work for far less.', es: 'Una carreta llevaba poco y los caminos se volvían lodo. Un barco hacía el mismo trabajo por mucho menos.', fa: 'گادی بار کمی می‌برد و سرک‌ها گل می‌شد. یک کشتی همان کار را خیلی ارزان‌تر می‌کرد.' } },
      { q: { en: 'A ship carries iron ore from a port on Lake Superior out to the Atlantic Ocean. What does it pass through?', es: 'Un barco lleva mineral de hierro desde un puerto del lago Superior hasta el océano Atlántico. ¿Por dónde pasa?', fa: 'یک کشتی سنگ آهن را از بندری کنار جهیل سوپریور به بحر اطلس می‌برد. از کجا می‌گذرد؟' },
        choices: [{ en: 'A chain of locks that lower it step by step', es: 'Una cadena de esclusas que lo bajan paso a paso', fa: 'یک رشته دروازهٔ آبی که آن را زینه به زینه پایین می‌برد' }, { en: 'A tunnel under the Rocky Mountains', es: 'Un túnel bajo las Montañas Rocosas', fa: 'یک تونل زیر کوه‌های راکی' }, { en: 'A canal across the middle of the Great Plains', es: 'Un canal por el medio de las Grandes Llanuras', fa: 'یک کانال از وسط دشت‌های بزرگ' }, { en: 'A mountain pass in the Appalachians', es: 'Un paso de montaña en los Apalaches', fa: 'یک کوتل در کوه‌های اپالاچی' }], answer: 0,
        why: { en: 'Lake Superior sits about 180 meters above the sea, so the Seaway steps ships down to the ocean.', es: 'El lago Superior está a unos 180 metros sobre el mar, así que la Vía Marítima baja los barcos hasta el océano.', fa: 'جهیل سوپریور حدود ۱۸۰ متر از بحر بلندتر است، پس راه آبی کشتی‌ها را زینه به زینه تا بحر پایین می‌برد.' } },
      { q: { en: 'Almost everyone in Canada lives in a thin strip in the south. What best explains that?', es: 'Casi toda la gente de Canadá vive en una franja delgada en el sur. ¿Qué lo explica mejor?', fa: 'تقریباً همهٔ مردم کانادا در یک نوار باریک در جنوب زندگی می‌کنند. بهترین توضیح چیست؟' },
        choices: [{ en: 'The south has milder winters, better soil and shipping routes', es: 'El sur tiene inviernos más suaves, mejor tierra y rutas de barcos', fa: 'جنوب زمستان ملایم‌تر، خاک بهتر و راه‌های کشتیرانی دارد' }, { en: 'The government moved every family out of the north', es: 'El gobierno sacó a todas las familias del norte', fa: 'حکومت همهٔ خانواده‌ها را از شمال بیرون کرد' }, { en: 'The north is covered by mountains too steep to climb', es: 'El norte está cubierto de montañas imposibles de subir', fa: 'شمال پر از کوه‌هایی است که بالا رفتن از آن‌ها ناممکن است' }, { en: 'The north of Canada belongs to the United States', es: 'El norte de Canadá pertenece a Estados Unidos', fa: 'شمال کانادا مال امریکا است' }], answer: 0,
        why: { en: 'The far north is very cold. People, ports and factories crowd into the warmer south.', es: 'El extremo norte es muy frío. La gente, los puertos y las fábricas se juntan en el sur, más cálido.', fa: 'شمال دور بسیار سرد است. مردم، بندرها و فابریکه‌ها در جنوب گرم‌تر جمع شده‌اند.' } },
      { q: { en: 'Which pair names the capital cities of the two countries?', es: '¿Qué pareja nombra las capitales de los dos países?', fa: 'کدام جفت پایتخت‌های دو کشور را نام می‌برد؟' },
        choices: [{ en: 'Washington, D.C. (United States) and Ottawa (Canada)', es: 'Washington, D.C. (Estados Unidos) y Ottawa (Canadá)', fa: 'واشنگتن دی‌سی (امریکا) و اوتاوا (کانادا)' }, { en: 'New York City (United States) and Toronto (Canada)', es: 'Nueva York (Estados Unidos) y Toronto (Canadá)', fa: 'نیویارک (امریکا) و تورنتو (کانادا)' }, { en: 'New York City (United States) and Ottawa (Canada)', es: 'Nueva York (Estados Unidos) y Ottawa (Canadá)', fa: 'نیویارک (امریکا) و اوتاوا (کانادا)' }, { en: 'Washington, D.C. (United States) and Toronto (Canada)', es: 'Washington, D.C. (Estados Unidos) y Toronto (Canadá)', fa: 'واشنگتن دی‌سی (امریکا) و تورنتو (کانادا)' }], answer: 0,
        why: { en: 'New York City and Toronto are the largest cities, not the capitals.', es: 'Nueva York y Toronto son las ciudades más grandes, no las capitales.', fa: 'نیویارک و تورنتو بزرگ‌ترین شهرها هستند، نه پایتخت.' } },
      { q: { en: 'Which two mountain chains run through both the United States and Canada?', es: '¿Qué dos cadenas de montañas pasan por Estados Unidos y Canadá?', fa: 'کدام دو رشته‌کوه از هم امریکا و هم کانادا می‌گذرند؟' },
        choices: [{ en: 'The Rocky Mountains in the west and the Appalachians in the east', es: 'Las Montañas Rocosas al oeste y los Apalaches al este', fa: 'کوه‌های راکی در غرب و اپالاچی در شرق' }, { en: 'The Andes in the west and the Alps in the east', es: 'Los Andes al oeste y los Alpes al este', fa: 'اندیز در غرب و آلپ در شرق' }, { en: 'The Himalayas in the west and the Rockies in the east', es: 'El Himalaya al oeste y las Rocosas al este', fa: 'هیمالیا در غرب و راکی در شرق' }, { en: 'The Great Plains in the west and the prairies in the east', es: 'Las Grandes Llanuras al oeste y las praderas al este', fa: 'دشت‌های بزرگ در غرب و پریری در شرق' }], answer: 0,
        why: { en: 'The Rockies rise in the west and the Appalachians run along the east. The flat plains lie between them.', es: 'Las Rocosas se levantan al oeste y los Apalaches van por el este. Las llanuras están en medio.', fa: 'راکی در غرب بلند می‌شود و اپالاچی در شرق امتداد دارد. دشت‌های هموار میان آن‌هاست.' } },
      { q: { en: 'Street signs in Montreal often show French words first. What fact about Canada does this show?', es: 'Los letreros de las calles de Montreal suelen mostrar primero el francés. ¿Qué dato de Canadá muestra esto?', fa: 'تابلوهای سرک در مونترآل اغلب اول کلمه‌های فرانسوی را نشان می‌دهند. این کدام حقیقت کانادا را نشان می‌دهد؟' },
        choices: [{ en: 'Canada has two official languages, English and French', es: 'Canadá tiene dos idiomas oficiales, inglés y francés', fa: 'کانادا دو زبان رسمی دارد، انگلیسی و فرانسوی' }, { en: 'Canada has a very long border with the United States', es: 'Canadá tiene una frontera muy larga con Estados Unidos', fa: 'کانادا با امریکا سرحد بسیار دراز دارد' }, { en: 'Most Canadians live near the border', es: 'La mayoría de los canadienses vive cerca de la frontera', fa: 'بیشتر مردم کانادا نزدیک سرحد زندگی می‌کنند' }, { en: 'Canada is a very large country', es: 'Canadá es un país muy grande', fa: 'کانادا کشور بسیار بزرگ است' }], answer: 0,
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
