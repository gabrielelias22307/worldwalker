/* WORLDWALKER · Episode 3.1 · Europe (WG.5)
   A port coast on the North Sea, a peninsula with bays on both sides, the Rhine flowing north from the Alps,
   and the Alps as a wall along the south. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'WG.5',
  title: { en: 'Europe', es: 'Europa', fa: 'اروپا' },
  place: { en: 'Peninsula Coast', es: 'Costa de las Penínsulas', fa: 'ساحل شبه‌جزیره‌ها' },
  intro: [
    { en: 'Pip: "The Smudge froze the weather charts on Peninsula Coast! Nobody knows why the harbor is not frozen. Talk to the ferry captain, the barge skipper and the mountain guide. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón congeló los mapas del tiempo en la Costa de las Penínsulas! Nadie sabe por qué el puerto no está congelado. Habla con la capitana del ferri, el patrón de la barcaza y el guía de montaña. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکه نقشه‌های هوا را در ساحل شبه‌جزیره‌ها یخ زد! هیچ کس نمی‌داند چرا بندر یخ نزده است. با کپتان کشتی، ناخدای کشتی باری و رهنمای کوه گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22. North: the sea and a port town. West: a peninsula with a bay on each side.
     East: the Rhine flows north from the Alps to the sea, with barge quays and two bridges. South: the Alps, with one snowy pass. */
  map: [
    '================================',
    '=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~=',
    '=~~~~kk~~~~kk~~~~~~~~~~~~~~~~~~=',
    '==~sssssssssssssssssss~~sssssssT',
    '==~sRRR..QQQ..RRR.....~~QQQ.RRRT',
    '==~shdh..hhd..hdh.....~~hdh.hdhT',
    '==~s::::::::::::::::::bb::::::.T',
    '==~s..mm........:.....~~.......T',
    '==~s~~~~s....T..:.....~~..QQQQ.T',
    '==~~~~~~~s......:.mm.k~~k.hdhh.T',
    '==~~~~~~~s......:....k~~k......T',
    '==~sssssss......:....k~~k....T.T',
    '==~k............:..P..~~...T...T',
    '==~k.x..........:.....~~.......T',
    '==~sssssss::::::::::::bb:::::..T',
    '==~~~~~~~~s.....:.www.~~.wwwww.T',
    '==~~~~~~~~s.T...:.www.~~.wwwww.T',
    '==~~~~~~~~s..x:::....n~~n......T',
    '==~s~~~~~s.PMnnnnPMnPMiiMnPMnPMT',
    '==AAAAAAAAAAAAnnAAAAAAAAAAAAAAAA',
    '==AAAAAAAAAAAAnnAAAAAAAAAAAAAAAA',
    '==AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
  ],
  start: [8, 7],

  words: {
    peninsula: { en: 'land with water on three sides', es: 'tierra con agua por tres lados', fa: 'خشکه‌ای که از سه طرف آب دارد' },
    fjord: { en: 'a long, narrow strip of sea between tall cliffs, carved by glaciers', es: 'una franja de mar larga y angosta entre acantilados altos, tallada por glaciares', fa: 'نوار دراز و باریک بحر میان صخره‌های بلند که یخچال‌ها کنده‌اند' },
    strait: { en: 'a narrow strip of water that joins two larger seas', es: 'una franja angosta de agua que une dos mares más grandes', fa: 'نوار باریک آب که دو بحر بزرگ‌تر را به هم وصل می‌کند' },
    'north atlantic drift': { en: 'a warm ocean current that carries mild water across the Atlantic to western Europe', es: 'una corriente marina cálida que lleva agua templada por el Atlántico hasta el oeste de Europa', fa: 'یک جریان گرم بحری که آب معتدل را از اقیانوس اطلس به غرب اروپا می‌برد' },
    navigable: { en: 'deep and wide enough for big cargo boats', es: 'bastante profundo y ancho para barcos grandes de carga', fa: 'آن‌قدر عمیق و پهن که کشتی‌های بزرگ باری بتوانند بروند' },
    'natural barrier': { en: 'a landform, like a mountain range, that makes travel slow, costly or dangerous', es: 'una forma de relieve, como una cordillera, que hace el viaje lento, caro o peligroso', fa: 'شکلی از زمین، مثل سلسله‌کوه، که سفر را کند، گران یا خطرناک می‌کند' }
  },

  npcs: [
    {
      x: 4, y: 12,
      name: { en: 'Captain Ingrid', es: 'Capitana Ingrid', fa: 'کپتان اینگرید' },
      role: { en: 'Ferry captain', es: 'Capitana de ferri', fa: 'کپتان کشتی مسافربری' },
      look: { skin: 0, hair: '#e3c26b', shirt: '#1f4e8c', pants: '#22324f' },
      lines: [
        { en: 'Look around you! There is water on three sides. This land is a [[peninsula|peninsula]]. Spain, Italy, Greece and Norway are peninsulas too. That is why almost nowhere in Europe is far from the sea.',
          es: '¡Mira a tu alrededor! Hay agua por tres lados. Esta tierra es una [[peninsula|península]]. España, Italia, Grecia y Noruega también son penínsulas. Por eso casi ningún lugar de Europa está lejos del mar.',
          fa: 'به اطراف نگاه کن! از سه طرف آب است. این خشکه یک [[peninsula|شبه‌جزیره]] است. اسپانیا، ایتالیا، یونان و ناروی هم شبه‌جزیره هستند. به همین دلیل تقریباً هیچ جای اروپا از بحر دور نیست.',
          easy: { en: 'Water on three sides = a [[peninsula|peninsula]]. Europe has many. Most places in Europe are close to the sea.', es: 'Agua por tres lados = una [[peninsula|península]]. Europa tiene muchas. Casi todo en Europa está cerca del mar.', fa: 'آب از سه طرف = [[peninsula|شبه‌جزیره]]. اروپا تعداد زیادی دارد. بیشتر جاهای اروپا نزدیک بحر هستند.' } },
        { en: 'I grew up in Norway. Long ago, thick glaciers carved deep, narrow inlets into its rock. A [[fjord|fjord]] is a long strip of sea between tall cliffs. Ferries use fjords like roads between towns.',
          es: 'Crecí en Noruega. Hace mucho tiempo, glaciares gruesos tallaron entradas de mar hondas y angostas en la roca. Un [[fjord|fiordo]] es una franja de mar entre acantilados altos. Los ferris usan los fiordos como caminos entre pueblos.',
          fa: 'من در ناروی بزرگ شدم. خیلی وقت پیش، یخچال‌های ضخیم شکاف‌های عمیق و باریک در سنگ آن کندند. [[fjord|فیورد]] نوار دراز بحر میان صخره‌های بلند است. کشتی‌ها از فیوردها مثل سرک میان شهرها استفاده می‌کنند.',
          easy: { en: 'Glaciers cut long, narrow inlets in Norway. Each one is a [[fjord|fjord]]. Boats use them like roads.', es: 'Los glaciares cortaron entradas largas y angostas en Noruega. Cada una es un [[fjord|fiordo]]. Los barcos las usan como caminos.', fa: 'یخچال‌ها در ناروی شکاف‌های دراز و باریک کندند. هر کدام یک [[fjord|فیورد]] است. کشتی‌ها از آن‌ها مثل سرک استفاده می‌کنند.' } },
        { en: 'Norway is far north, but its harbors stay open in winter. A warm ocean current, the [[north atlantic drift|North Atlantic Drift]], brings mild water across the Atlantic. Winds carry that mild air over western Europe.',
          es: 'Noruega está muy al norte, pero sus puertos siguen abiertos en invierno. Una corriente marina cálida, la [[north atlantic drift|Deriva del Atlántico Norte]], trae agua templada por el Atlántico. Los vientos llevan ese aire templado sobre el oeste de Europa.',
          fa: 'ناروی خیلی شمال است، اما بندرهایش در زمستان باز می‌مانند. یک جریان گرم بحری به نام [[north atlantic drift|جریان گرم اطلس شمالی]] آب معتدل را از اقیانوس اطلس می‌آورد. بادها آن هوای معتدل را به غرب اروپا می‌برند.',
          easy: { en: 'A warm sea current, the [[north atlantic drift|North Atlantic Drift]], keeps western Europe\'s winters mild.', es: 'Una corriente cálida, la [[north atlantic drift|Deriva del Atlántico Norte]], hace que los inviernos del oeste de Europa sean templados.', fa: 'یک جریان گرم بحری به نام [[north atlantic drift|جریان گرم اطلس شمالی]] زمستان غرب اروپا را معتدل نگه می‌دارد.' } }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Italy, Spain, Greece and Norway all sit on the same kind of landform. What is it?', es: 'Italia, España, Grecia y Noruega están en el mismo tipo de relieve. ¿Cuál es?', fa: 'ایتالیا، اسپانیا، یونان و ناروی همه روی یک نوع شکل زمین هستند. آن چیست؟' },
        choices: [
          { ok: true, t: { en: 'A peninsula', es: 'Una península', fa: 'شبه‌جزیره' },
            why: { en: 'Each one is land with water on most of its sides, joined to the mainland.', es: 'Cada una es tierra con agua en casi todos sus lados, unida al continente.', fa: 'هر کدام خشکه‌ای است که بیشتر طرف‌هایش آب است و به خشکهٔ بزرگ وصل است.' } },
          { t: { en: 'An island', es: 'Una isla', fa: 'جزیره' },
            why: { en: 'An island has water on every side. These lands are joined to the mainland.', es: 'Una isla tiene agua por todos lados. Estas tierras están unidas al continente.', fa: 'جزیره از همه طرف آب دارد. این خشکه‌ها به خشکهٔ بزرگ وصل هستند.' } },
          { t: { en: 'A mountain range', es: 'Una cordillera', fa: 'سلسله‌کوه' },
            why: { en: 'A range is a line of mountains, not a shape of coast.', es: 'Una cordillera es una fila de montañas, no una forma de costa.', fa: 'سلسله‌کوه یک ردیف کوه است، نه شکل ساحل.' } }
        ]
      }
    },
    {
      x: 20, y: 10,
      name: { en: 'Youssef', es: 'Youssef', fa: 'یوسف' },
      role: { en: 'River barge skipper', es: 'Patrón de barcaza de río', fa: 'ناخدای کشتی باری دریا' },
      look: { skin: 3, hair: '#1b1410', shirt: '#c0392b', pants: '#2b2b3a' },
      lines: [
        { en: 'My barge carries coal, grain and steel on the Rhine. The Rhine flows north from the Alps to the North Sea. It is [[navigable|navigable]], which means it is deep enough for big cargo boats.',
          es: 'Mi barcaza lleva carbón, granos y acero por el Rin. El Rin corre hacia el norte, desde los Alpes hasta el mar del Norte. Es [[navigable|navegable]]: es bastante profundo para barcos grandes de carga.',
          fa: 'کشتی باری من زغال‌سنگ، غله و فولاد را روی دریای راین می‌برد. راین از کوه‌های الپ به طرف شمال تا بحر شمال جاری است. راین [[navigable|قابل کشتیرانی]] است، یعنی برای کشتی‌های بزرگ باری به اندازهٔ کافی عمیق است.',
          easy: { en: 'I carry coal and grain on the Rhine. Big boats can use it. It is [[navigable|navigable]].', es: 'Llevo carbón y granos por el Rin. Los barcos grandes pueden usarlo. Es [[navigable|navegable]].', fa: 'من زغال‌سنگ و غله را روی راین می‌برم. کشتی‌های بزرگ می‌توانند در آن بروند. [[navigable|قابل کشتیرانی]] است.' } },
        { en: 'The Danube flows the other way, east. It starts in Germany, passes about ten countries and ends in the Black Sea. Vienna and Budapest grew on its banks. In Europe, rivers join countries together.',
          es: 'El Danubio corre hacia el otro lado, al este. Nace en Alemania, pasa por unos diez países y termina en el mar Negro. Viena y Budapest crecieron en sus orillas. En Europa, los ríos unen a los países.',
          fa: 'دریای دانوب به طرف دیگر، یعنی شرق، جاری است. از آلمان شروع می‌شود، از حدود ده کشور می‌گذرد و به بحیرهٔ سیاه می‌ریزد. ویانا و بوداپست کنار آن بزرگ شدند. در اروپا دریاها کشورها را به هم وصل می‌کنند.',
          easy: { en: 'The Danube flows east through about ten countries to the Black Sea. Rivers join countries together.', es: 'El Danubio corre al este por unos diez países hasta el mar Negro. Los ríos unen a los países.', fa: 'دانوب از حدود ده کشور به طرف شرق تا بحیرهٔ سیاه می‌رود. دریاها کشورها را به هم وصل می‌کنند.' } },
        { en: 'People dug canals to link one river to the next. A load can cross most of Europe without leaving the water. Moving heavy goods by boat costs much less than carrying them over land.',
          es: 'La gente cavó canales para unir un río con otro. Una carga puede cruzar casi toda Europa sin salir del agua. Mover cosas pesadas en barco cuesta mucho menos que llevarlas por tierra.',
          fa: 'مردم کانال کندند تا یک دریا را به دریای دیگر وصل کنند. یک بار می‌تواند بیشتر اروپا را بدون بیرون آمدن از آب طی کند. بردن بار سنگین با کشتی خیلی ارزان‌تر از بردن آن از راه خشکه است.',
          easy: { en: 'Canals join the rivers. Boats carry heavy goods for less money than trucks.', es: 'Los canales unen los ríos. Los barcos llevan cosas pesadas por menos dinero que los camiones.', fa: 'کانال‌ها دریاها را وصل می‌کنند. کشتی‌ها بار سنگین را ارزان‌تر از موترهای باری می‌برند.' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do people ship heavy grain on the Rhine instead of carrying it over land?', es: '¿Por qué la gente lleva granos pesados por el Rin en vez de llevarlos por tierra?', fa: 'چرا مردم غلهٔ سنگین را با کشتی روی راین می‌برند و نه از راه خشکه؟' },
        choices: [
          { ok: true, t: { en: 'Boats on a navigable river move heavy goods for less money', es: 'Los barcos en un río navegable mueven cosas pesadas por menos dinero', fa: 'کشتی‌ها روی دریای قابل کشتیرانی بار سنگین را ارزان‌تر می‌برند' },
            why: { en: 'A navigable river is a road of water. Heavy loads are cheap to move by boat.', es: 'Un río navegable es un camino de agua. Mover cargas pesadas en barco es barato.', fa: 'دریای قابل کشتیرانی یک سرک آبی است. بردن بار سنگین با کشتی ارزان است.' } },
          { t: { en: 'The Rhine flows into the Black Sea', es: 'El Rin desemboca en el mar Negro', fa: 'راین به بحیرهٔ سیاه می‌ریزد' },
            why: { en: 'The Rhine flows north to the North Sea. The Danube is the one that reaches the Black Sea.', es: 'El Rin corre al norte, hasta el mar del Norte. El Danubio es el que llega al mar Negro.', fa: 'راین به طرف شمال تا بحر شمال می‌رود. دانوب است که به بحیرهٔ سیاه می‌رسد.' } },
          { t: { en: 'Europe has no roads', es: 'Europa no tiene caminos', fa: 'اروپا سرک ندارد' },
            why: { en: 'Europe has many roads. Boats are simply cheaper for heavy loads.', es: 'Europa tiene muchos caminos. Los barcos solo son más baratos para cargas pesadas.', fa: 'اروپا سرک‌های زیادی دارد. فقط کشتی برای بار سنگین ارزان‌تر است.' } }
        ]
      }
    },
    {
      x: 27, y: 17,
      name: { en: 'Lukas', es: 'Lukas', fa: 'لوکاس' },
      role: { en: 'Mountain guide', es: 'Guía de montaña', fa: 'رهنمای کوه' },
      look: { skin: 1, hair: '#6b4a2a', shirt: '#3fa34d', pants: '#4a3a2a' },
      lines: [
        { en: 'Behind me stand the Alps. Before tunnels and modern roads, people crossed them on foot through narrow passes. Snow closed those passes for months every winter.',
          es: 'Detrás de mí están los Alpes. Antes de los túneles y las carreteras modernas, la gente los cruzaba a pie por pasos angostos. La nieve cerraba esos pasos por meses cada invierno.',
          fa: 'پشت سر من کوه‌های الپ هستند. پیش از تونل‌ها و سرک‌های امروزی، مردم از راه درّه‌های باریک پیاده از آن‌ها می‌گذشتند. برف هر زمستان آن راه‌ها را برای چند ماه می‌بست.',
          easy: { en: 'These are the Alps. Long ago, people walked over them. Snow closed the way in winter.', es: 'Estos son los Alpes. Hace mucho, la gente los cruzaba caminando. La nieve cerraba el paso en invierno.', fa: 'این‌ها کوه‌های الپ هستند. خیلی وقت پیش مردم پیاده از آن‌ها می‌گذشتند. برف در زمستان راه را می‌بست.' } },
        { en: 'A landform that makes travel slow, costly or dangerous is a [[natural barrier|natural barrier]]. The Alps are one. The Pyrenees, between Spain and France, are another.',
          es: 'Una forma de relieve que hace el viaje lento, caro o peligroso es una [[natural barrier|barrera natural]]. Los Alpes son una. Los Pirineos, entre España y Francia, son otra.',
          fa: 'شکلی از زمین که سفر را کند، گران یا خطرناک می‌کند [[natural barrier|مانع طبیعی]] نام دارد. کوه‌های الپ یکی از آن‌هاست. کوه‌های پیرنه، میان اسپانیا و فرانسه، یکی دیگر است.',
          easy: { en: 'Mountains that make travel hard are a [[natural barrier|natural barrier]]. The Alps and the Pyrenees are barriers.', es: 'Las montañas que hacen difícil viajar son una [[natural barrier|barrera natural]]. Los Alpes y los Pirineos son barreras.', fa: 'کوه‌هایی که سفر را سخت می‌کنند [[natural barrier|مانع طبیعی]] هستند. الپ و پیرنه مانع هستند.' } },
        { en: 'Mountains kept people apart. So languages, laws and customs often changed at the mountains. But north of the Alps, the flat North European Plain is easy to cross.',
          es: 'Las montañas separaban a la gente. Por eso los idiomas, las leyes y las costumbres muchas veces cambiaban en las montañas. Pero al norte de los Alpes, la llanura del norte de Europa es plana y fácil de cruzar.',
          fa: 'کوه‌ها مردم را از هم جدا نگه داشتند. به همین دلیل زبان‌ها، قانون‌ها و رسم‌ها اکثراً در کنار کوه‌ها تغییر می‌کردند. اما شمال الپ، دشت شمال اروپا هموار است و گذشتن از آن آسان است.',
          easy: { en: 'Mountains kept people apart, so languages changed there. The plain in the north is flat and easy to cross.', es: 'Las montañas separaban a la gente, así que los idiomas cambiaban allí. La llanura del norte es plana y fácil de cruzar.', fa: 'کوه‌ها مردم را جدا نگه داشتند، پس زبان‌ها آنجا تغییر کردند. دشت شمال هموار و آسان برای گذشتن است.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How did the Alps change life for the people on each side?', es: '¿Cómo cambiaron los Alpes la vida de la gente de cada lado?', fa: 'کوه‌های الپ زندگی مردم هر دو طرف را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They kept people apart, so languages and customs often changed there', es: 'Separaban a la gente, así que los idiomas y las costumbres muchas veces cambiaban allí', fa: 'مردم را جدا نگه داشتند، پس زبان‌ها و رسم‌ها اکثراً آنجا تغییر کردند' },
            why: { en: 'People on each side traded less and met less, so each side kept its own ways.', es: 'La gente de cada lado comerciaba y se veía menos, así que cada lado guardó sus costumbres.', fa: 'مردم هر طرف کمتر تجارت می‌کردند و کمتر یکدیگر را می‌دیدند، پس هر طرف رسم خودش را نگه داشت.' } },
          { t: { en: 'They made everyone speak one language', es: 'Hicieron que todos hablaran un solo idioma', fa: 'باعث شدند همه به یک زبان گپ بزنند' },
            why: { en: 'A barrier keeps people apart. That makes more differences, not fewer.', es: 'Una barrera separa a la gente. Eso crea más diferencias, no menos.', fa: 'مانع مردم را جدا می‌کند. این تفاوت بیشتر می‌سازد، نه کمتر.' } },
          { t: { en: 'They made trade across them fast and cheap', es: 'Hicieron que el comercio entre ellos fuera rápido y barato', fa: 'تجارت از روی آن‌ها را تیز و ارزان کردند' },
            why: { en: 'Narrow passes and winter snow made crossing slow and costly.', es: 'Los pasos angostos y la nieve del invierno hacían el cruce lento y caro.', fa: 'راه‌های باریک و برف زمستان گذشتن را کند و گران می‌کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 5, y: 13, text: { en: 'PENINSULA POINT · Water on three sides! Far to the south, the [[strait|Strait]] of Gibraltar joins the Atlantic to the Mediterranean. Only about 8 miles of water lie between Spain and Morocco there.',
      es: 'PUNTA DE LA PENÍNSULA · ¡Agua por tres lados! Muy al sur, el [[strait|estrecho]] de Gibraltar une el Atlántico con el Mediterráneo. Allí solo hay unas 8 millas de agua entre España y Marruecos.',
      fa: 'نوک شبه‌جزیره · از سه طرف آب! دور در جنوب، [[strait|تنگهٔ]] جبل‌الطارق اقیانوس اطلس را به بحیرهٔ مدیترانه وصل می‌کند. آنجا میان اسپانیا و مراکش فقط حدود ۸ میل آب است.' } },
    { x: 13, y: 17, text: { en: 'ALPINE PASS · Closed by snow in winter. Long ago, traders waited for summer to cross the mountains.',
      es: 'PASO ALPINO · Cerrado por la nieve en invierno. Hace mucho tiempo, los comerciantes esperaban el verano para cruzar las montañas.',
      fa: 'درّهٔ الپ · در زمستان با برف بسته است. خیلی وقت پیش، تاجران تا تابستان صبر می‌کردند تا از کوه‌ها بگذرند.' } }
  ],

  scraps: [[3, 7], [30, 17], [15, 20]],
  smudges: [[13, 15], [19, 8]],

  challenge: {
    at: [12, 8],
    type: 'table',
    stat: 'pla',
    title: { en: 'Same latitude, different winter', es: 'Misma latitud, otro invierno', fa: 'عرض یکسان، زمستان متفاوت' },
    intro: { en: 'The Smudge froze the weather charts! Read the table. London and Calgary are the same distance from the equator. Why are their winters so different?',
      es: '¡El Borrón congeló los mapas del tiempo! Lee la tabla. Londres y Calgary están a la misma distancia del ecuador. ¿Por qué sus inviernos son tan diferentes?',
      fa: 'لکه نقشه‌های هوا را یخ زد! جدول را بخوان. لندن و کلگری به یک اندازه از خط استوا دور هستند. چرا زمستان‌شان این‌قدر فرق دارد؟' },
    table: {
      head: [
        { en: 'City', es: 'Ciudad', fa: 'شهر' },
        { en: 'Where it is', es: 'Dónde está', fa: 'کجاست' },
        { en: 'Latitude', es: 'Latitud', fa: 'عرض جغرافیایی' },
        { en: 'Average January temperature', es: 'Temperatura promedio en enero', fa: 'اوسط گرمی هوا در جنوری' }
      ],
      rows: [
        [{ en: 'London, UK', es: 'Londres, Reino Unido', fa: 'لندن، بریتانیا' }, { en: 'western Europe, near the Atlantic', es: 'oeste de Europa, cerca del Atlántico', fa: 'غرب اروپا، نزدیک اقیانوس اطلس' }, { en: '51°N', es: '51°N', fa: '۵۱ درجه شمالی' }, { en: 'about 5 °C (41 °F)', es: 'unos 5 °C (41 °F)', fa: 'حدود ۵ درجهٔ سانتی‌گراد' }],
        [{ en: 'Calgary, Canada', es: 'Calgary, Canadá', fa: 'کلگری، کانادا' }, { en: 'inside North America, far from the ocean', es: 'en el interior de América del Norte, lejos del océano', fa: 'داخل امریکای شمالی، دور از اقیانوس' }, { en: '51°N', es: '51°N', fa: '۵۱ درجه شمالی' }, { en: 'about −7 °C (19 °F)', es: 'unos −7 °C (19 °F)', fa: 'حدود منفی ۷ درجهٔ سانتی‌گراد' }],
        [{ en: 'Moscow, Russia', es: 'Moscú, Rusia', fa: 'مسکو، روسیه' }, { en: 'eastern Europe, far inland', es: 'este de Europa, muy lejos del mar', fa: 'شرق اروپا، خیلی دور از بحر' }, { en: '56°N', es: '56°N', fa: '۵۶ درجه شمالی' }, { en: 'about −6 °C (21 °F)', es: 'unos −6 °C (21 °F)', fa: 'حدود منفی ۶ درجهٔ سانتی‌گراد' }]
      ],
      note: { en: 'Rounded averages. A bigger latitude number means farther north.', es: 'Promedios redondeados. Un número de latitud más grande significa más al norte.', fa: 'اوسط‌ها گرد شده‌اند. عدد بزرگ‌تر عرض جغرافیایی یعنی شمال‌تر.' }
    },
    questions: [
      { q: { en: 'London and Calgary are at the same latitude. Which one is warmer in January?', es: 'Londres y Calgary están en la misma latitud. ¿Cuál es más cálida en enero?', fa: 'لندن و کلگری در یک عرض جغرافیایی هستند. کدام یک در جنوری گرم‌تر است؟' },
        choices: [{ en: 'London, by about 12 °C', es: 'Londres, por unos 12 °C', fa: 'لندن، حدود ۱۲ درجه' }, { en: 'Calgary, by about 12 °C', es: 'Calgary, por unos 12 °C', fa: 'کلگری، حدود ۱۲ درجه' }, { en: 'They are the same', es: 'Son iguales', fa: 'هر دو یکسان هستند' }], answer: 0,
        why: { en: 'London is about 5 °C. Calgary is about −7 °C. That is a difference of about 12 degrees.', es: 'Londres tiene unos 5 °C. Calgary tiene unos −7 °C. La diferencia es de unos 12 grados.', fa: 'لندن حدود ۵ درجه است. کلگری حدود منفی ۷ درجه است. فرق حدود ۱۲ درجه است.' } },
      { q: { en: 'What keeps London mild in winter?', es: '¿Qué hace que Londres sea templada en invierno?', fa: 'چه چیز لندن را در زمستان معتدل نگه می‌دارد؟' },
        choices: [{ en: 'The warm North Atlantic Drift and winds from the ocean', es: 'La cálida Deriva del Atlántico Norte y los vientos del océano', fa: 'جریان گرم اطلس شمالی و بادهای اقیانوس' }, { en: 'London is closer to the equator', es: 'Londres está más cerca del ecuador', fa: 'لندن به خط استوا نزدیک‌تر است' }, { en: 'Tall mountains block the cold', es: 'Montañas altas detienen el frío', fa: 'کوه‌های بلند جلوی سرما را می‌گیرند' }], answer: 0,
        why: { en: 'Both cities are at 51°N, so latitude is not the reason. The warm current and ocean winds are.', es: 'Las dos ciudades están a 51°N, así que la latitud no es la razón. La corriente cálida y los vientos del océano sí.', fa: 'هر دو شهر در ۵۱ درجه شمالی هستند، پس عرض جغرافیایی دلیل نیست. جریان گرم و بادهای اقیانوس دلیل هستند.' } },
      { q: { en: 'Moscow is in Europe too, but its January is cold like Calgary\'s. Why?', es: 'Moscú también está en Europa, pero su enero es frío como el de Calgary. ¿Por qué?', fa: 'مسکو هم در اروپا است، اما جنوری آن مثل کلگری سرد است. چرا؟' },
        choices: [{ en: 'It is far inland, away from the mild ocean air', es: 'Está muy lejos del mar, lejos del aire templado del océano', fa: 'خیلی دور از بحر است، دور از هوای معتدل اقیانوس' }, { en: 'It is right next to the Atlantic', es: 'Está justo al lado del Atlántico', fa: 'درست کنار اقیانوس اطلس است' }, { en: 'It is on the equator', es: 'Está en el ecuador', fa: 'روی خط استوا است' }], answer: 0,
        why: { en: 'The mild air from the Atlantic grows weaker the farther inland you go.', es: 'El aire templado del Atlántico se debilita mientras más lejos del mar vas.', fa: 'هوای معتدل اطلس هر چه از بحر دورتر بروی ضعیف‌تر می‌شود.' } },
      { q: { en: 'Norway\'s harbors stay open all winter, but parts of the Baltic Sea freeze. What best explains this?', es: 'Los puertos de Noruega siguen abiertos todo el invierno, pero partes del mar Báltico se congelan. ¿Qué lo explica mejor?', fa: 'بندرهای ناروی تمام زمستان باز می‌مانند، اما بخش‌هایی از بحیرهٔ بالتیک یخ می‌زند. چه چیز این را بهتر توضیح می‌دهد؟' },
        choices: [{ en: 'The warm current reaches Norway\'s Atlantic coast', es: 'La corriente cálida llega a la costa atlántica de Noruega', fa: 'جریان گرم به ساحل اطلس ناروی می‌رسد' }, { en: 'Norway is near the equator', es: 'Noruega está cerca del ecuador', fa: 'ناروی نزدیک خط استوا است' }, { en: 'The Baltic Sea is much deeper', es: 'El mar Báltico es mucho más profundo', fa: 'بحیرهٔ بالتیک خیلی عمیق‌تر است' }], answer: 0,
        why: { en: 'The North Atlantic Drift carries mild water up Norway\'s coast. It does not reach far into the Baltic.', es: 'La Deriva del Atlántico Norte lleva agua templada por la costa de Noruega. No entra mucho en el Báltico.', fa: 'جریان گرم اطلس شمالی آب معتدل را در امتداد ساحل ناروی می‌برد. زیاد به بالتیک نمی‌رسد.' } }
    ],
    success: { en: 'The weather charts thaw! The ocean keeps western Europe mild.', es: '¡Los mapas del tiempo se descongelan! El océano hace templado el oeste de Europa.', fa: 'نقشه‌های هوا آب شدند! اقیانوس غرب اروپا را معتدل نگه می‌دارد.' }
  },

  boss: {
    at: [14, 18],
    stat: 'reg',
    need: 3,
    name: { en: 'The Frost Smudge', es: 'El Borrón de Escarcha', fa: 'لکهٔ یخبندان' },
    appear: { en: 'The Frost Smudge is hiding in the snowy Alpine pass!', es: '¡El Borrón de Escarcha se esconde en el paso nevado de los Alpes!', fa: 'لکهٔ یخبندان در درّهٔ برفی الپ پنهان است!' },
    taunt: { en: 'Brrr! I froze every map of Europe. Can you still tell sea from mountain?', es: '¡Brrr! Congelé todos los mapas de Europa. ¿Todavía distingues el mar de la montaña?', fa: 'بررر! همهٔ نقشه‌های اروپا را یخ زدم. هنوز بحر را از کوه فرق می‌کنی؟' },
    win: { en: 'The frost melts away. Atlas page 3.1 floats down into your hands!', es: 'La escarcha se derrite. ¡La página 3.1 del atlas cae en tus manos!', fa: 'یخبندان آب می‌شود. صفحهٔ ۳.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Italy, Spain, Greece and Norway all sit on which landform?', es: 'Italia, España, Grecia y Noruega están en ¿qué forma de relieve?', fa: 'ایتالیا، اسپانیا، یونان و ناروی روی کدام شکل زمین هستند؟' },
        choices: [{ en: 'A peninsula', es: 'Una península', fa: 'شبه‌جزیره' }, { en: 'An island', es: 'Una isla', fa: 'جزیره' }, { en: 'A river delta', es: 'Un delta de río', fa: 'دلتای دریا' }, { en: 'A mountain range', es: 'Una cordillera', fa: 'سلسله‌کوه' }], answer: 0,
        why: { en: 'Each one is land with water on most of its sides.', es: 'Cada una es tierra con agua en casi todos sus lados.', fa: 'هر کدام خشکه‌ای است که بیشتر طرف‌هایش آب است.' } },
      { q: { en: 'Why is almost nowhere in Europe far from the sea?', es: '¿Por qué casi ningún lugar de Europa está lejos del mar?', fa: 'چرا تقریباً هیچ جای اروپا از بحر دور نیست؟' },
        choices: [{ en: 'Its coast is long and full of bays and peninsulas', es: 'Su costa es larga y llena de bahías y penínsulas', fa: 'ساحلش دراز و پر از خلیج و شبه‌جزیره است' }, { en: 'Every country in Europe is an island', es: 'Todos los países de Europa son islas', fa: 'همهٔ کشورهای اروپا جزیره هستند' }, { en: 'Europe is the biggest continent', es: 'Europa es el continente más grande', fa: 'اروپا بزرگ‌ترین قاره است' }, { en: 'Europe has no mountains', es: 'Europa no tiene montañas', fa: 'اروپا کوه ندارد' }], answer: 0,
        why: { en: 'A long, broken coastline brings the sea close to most places.', es: 'Una costa larga y quebrada acerca el mar a casi todos los lugares.', fa: 'ساحل دراز و پرپیچ بحر را به بیشتر جاها نزدیک می‌کند.' } },
      { q: { en: 'Which mountains stand between Spain and France?', es: '¿Qué montañas están entre España y Francia?', fa: 'کدام کوه‌ها میان اسپانیا و فرانسه هستند؟' },
        choices: [{ en: 'The Pyrenees', es: 'Los Pirineos', fa: 'کوه‌های پیرنه' }, { en: 'The Alps', es: 'Los Alpes', fa: 'کوه‌های الپ' }, { en: 'The Carpathians', es: 'Los Cárpatos', fa: 'کوه‌های کارپات' }, { en: 'The Apennines', es: 'Los Apeninos', fa: 'کوه‌های آپنین' }], answer: 0,
        why: { en: 'The Pyrenees stand on the border between Spain and France.', es: 'Los Pirineos están en la frontera entre España y Francia.', fa: 'کوه‌های پیرنه در سرحد میان اسپانیا و فرانسه هستند.' } },
      { q: { en: 'The Alps were slow and dangerous to cross for hundreds of years. That makes them a...', es: 'Los Alpes fueron lentos y peligrosos de cruzar por cientos de años. Eso los hace una...', fa: 'گذشتن از کوه‌های الپ صدها سال کند و خطرناک بود. پس الپ یک ... است.' },
        choices: [{ en: 'natural barrier', es: 'barrera natural', fa: 'مانع طبیعی' }, { en: 'navigable river', es: 'río navegable', fa: 'دریای قابل کشتیرانی' }, { en: 'warm current', es: 'corriente cálida', fa: 'جریان گرم' }, { en: 'capital city', es: 'ciudad capital', fa: 'پایتخت' }], answer: 0,
        why: { en: 'A natural barrier is a landform that makes travel hard.', es: 'Una barrera natural es una forma de relieve que hace difícil viajar.', fa: 'مانع طبیعی شکلی از زمین است که سفر را سخت می‌کند.' } },
      { q: { en: 'Where does the Danube River end?', es: '¿Dónde termina el río Danubio?', fa: 'دریای دانوب کجا تمام می‌شود؟' },
        choices: [{ en: 'In the Black Sea', es: 'En el mar Negro', fa: 'در بحیرهٔ سیاه' }, { en: 'In the North Sea', es: 'En el mar del Norte', fa: 'در بحر شمال' }, { en: 'In the Atlantic Ocean', es: 'En el océano Atlántico', fa: 'در اقیانوس اطلس' }, { en: 'In the Mediterranean Sea', es: 'En el mar Mediterráneo', fa: 'در بحیرهٔ مدیترانه' }], answer: 0,
        why: { en: 'The Danube flows east through about ten countries to the Black Sea.', es: 'El Danubio corre al este por unos diez países hasta el mar Negro.', fa: 'دانوب از حدود ده کشور به طرف شرق تا بحیرهٔ سیاه می‌رود.' } },
      { q: { en: 'Rotterdam is one of Europe\'s busiest ports. Why is it in that spot?', es: 'Róterdam es uno de los puertos más activos de Europa. ¿Por qué está en ese lugar?', fa: 'روتردام یکی از پرکارترین بندرهای اروپا است. چرا در آن جا است؟' },
        choices: [{ en: 'It sits where the Rhine meets the sea', es: 'Está donde el Rin llega al mar', fa: 'جایی است که راین به بحر می‌رسد' }, { en: 'It sits on the Black Sea', es: 'Está en el mar Negro', fa: 'کنار بحیرهٔ سیاه است' }, { en: 'It sits high in the Alps', es: 'Está en lo alto de los Alpes', fa: 'بالای کوه‌های الپ است' }, { en: 'It sits beside the Danube', es: 'Está junto al Danubio', fa: 'کنار دانوب است' }], answer: 0,
        why: { en: 'Cargo comes down the Rhine by barge and leaves by ship for the world.', es: 'La carga baja por el Rin en barcazas y sale en barcos hacia el mundo.', fa: 'بار با کشتی‌های باری از راین پایین می‌آید و با کشتی‌های بزرگ به دنیا می‌رود.' } },
      { q: { en: 'What keeps the winters of western Europe mild?', es: '¿Qué hace templados los inviernos del oeste de Europa?', fa: 'چه چیز زمستان‌های غرب اروپا را معتدل نگه می‌دارد؟' },
        choices: [{ en: 'The North Atlantic Drift, a warm ocean current', es: 'La Deriva del Atlántico Norte, una corriente marina cálida', fa: 'جریان گرم اطلس شمالی، یک جریان گرم بحری' }, { en: 'The Alps, which block warm air', es: 'Los Alpes, que bloquean el aire cálido', fa: 'کوه‌های الپ که هوای گرم را بند می‌کنند' }, { en: 'Being close to the equator', es: 'Estar cerca del ecuador', fa: 'نزدیک بودن به خط استوا' }, { en: 'Ice from the North Pole', es: 'El hielo del Polo Norte', fa: 'یخ قطب شمال' }], answer: 0,
        why: { en: 'The warm current and ocean winds bring mild air to western Europe.', es: 'La corriente cálida y los vientos del océano traen aire templado al oeste de Europa.', fa: 'جریان گرم و بادهای اقیانوس هوای معتدل را به غرب اروپا می‌آورند.' } },
      { q: { en: 'What carved the deep fjords along Norway\'s coast?', es: '¿Qué talló los fiordos profundos de la costa de Noruega?', fa: 'چه چیز فیوردهای عمیق ساحل ناروی را کند؟' },
        choices: [{ en: 'Glaciers', es: 'Los glaciares', fa: 'یخچال‌ها' }, { en: 'Volcanoes', es: 'Los volcanes', fa: 'آتشفشان‌ها' }, { en: 'Ships', es: 'Los barcos', fa: 'کشتی‌ها' }, { en: 'Wind from the desert', es: 'El viento del desierto', fa: 'باد صحرا' }], answer: 0,
        why: { en: 'Thick glaciers cut the fjords long ago. The coast still shows the shape.', es: 'Glaciares gruesos tallaron los fiordos hace mucho. La costa todavía muestra la forma.', fa: 'یخچال‌های ضخیم فیوردها را خیلی وقت پیش کندند. ساحل هنوز آن شکل را نشان می‌دهد.' } }
    ]
  },

  learned: [
    { en: 'Europe is full of [[peninsula|peninsulas]], so almost nowhere is far from the sea. Glaciers carved Norway\'s [[fjord|fjords]].', es: 'Europa está llena de [[peninsula|penínsulas]], así que casi ningún lugar está lejos del mar. Los glaciares tallaron los [[fjord|fiordos]] de Noruega.', fa: 'اروپا پر از [[peninsula|شبه‌جزیره]] است، پس تقریباً هیچ جا از بحر دور نیست. یخچال‌ها [[fjord|فیوردهای]] ناروی را کندند.' },
    { en: '[[navigable|Navigable]] rivers like the Rhine and the Danube are roads of water. The Alps and the Pyrenees are [[natural barrier|natural barriers]].', es: 'Los ríos [[navigable|navegables]] como el Rin y el Danubio son caminos de agua. Los Alpes y los Pirineos son [[natural barrier|barreras naturales]].', fa: 'دریاهای [[navigable|قابل کشتیرانی]] مثل راین و دانوب سرک‌های آبی هستند. الپ و پیرنه [[natural barrier|مانع طبیعی]] هستند.' },
    { en: 'The warm [[north atlantic drift|North Atlantic Drift]] keeps western Europe\'s winters much milder than places at the same latitude in North America.', es: 'La cálida [[north atlantic drift|Deriva del Atlántico Norte]] hace los inviernos del oeste de Europa mucho más templados que en lugares de la misma latitud en América del Norte.', fa: '[[north atlantic drift|جریان گرم اطلس شمالی]] زمستان‌های غرب اروپا را خیلی معتدل‌تر از جاهای هم‌عرض در امریکای شمالی نگه می‌دارد.' }
  ],
  reflect: {
    q: { en: 'Think about a river, a highway or a hill near where you live. Does it bring people together, or keep them apart? How?', es: 'Piensa en un río, una carretera o una colina cerca de donde vives. ¿Une a la gente o la separa? ¿Cómo?', fa: 'به یک دریا، شاهراه یا تپه نزدیک جایی که زندگی می‌کنی فکر کن. آیا مردم را به هم نزدیک می‌کند یا جدا نگه می‌دارد؟ چطور؟' },
    starter: { en: 'Near where I live, the', es: 'Cerca de donde vivo, el', fa: 'نزدیک جایی که زندگی می‌کنم،' }
  }
};
