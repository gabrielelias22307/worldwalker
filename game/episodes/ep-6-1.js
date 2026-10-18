/* WORLDWALKER · Episode 6.1 · South Asia — the Monsoon (WG.9)
   North to south the land teaches the region: the snowy Himalaya, tea terraces in the hills,
   the Ganges starting as melted ice and flowing east across a plain of rice paddies,
   then turning south to build a delta (with mangroves) on the Bay of Bengal. Boss: the Storm Smudge (mockup 08). */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'WG.9',
  title: { en: 'South Asia: The Monsoon', es: 'Asia del Sur: el monzón', fa: 'جنوب آسیا: باد موسمی' },
  place: { en: 'The Ganges Plain', es: 'La llanura del Ganges', fa: 'دشت گنگا' },
  intro: [
    { en: 'Pip: "The Storm Smudge scrambled the monsoon winds! Now farmers do not know when to plant. Talk to the tea farmer, the rice farmer and the fisher. Then fix the compass stone."',
      es: 'Pip: "¡El Borrón Tormenta revolvió los vientos del monzón! Ahora los agricultores no saben cuándo sembrar. Habla con el agricultor de té, la agricultora de arroz y el pescador. Luego arregla la piedra de la brújula."',
      fa: 'پیپ: «لکهٔ طوفان بادهای موسمی را به هم زد! حالا دهقانان نمی‌دانند چه وقت بکارند. با دهقان چای، دهقان برنج و ماهیگیر گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Rows 0-2: the Himalaya (A, M). Rows 3-4: tea terraces (t). The Ganges (~) starts in the ice at the top,
     runs south, then east along row 7 across the plain of rice paddies (q) and villages,
     then south (cols 26-27) through mangroves (j) into the Bay of Bengal. Rows 17-21: beach, fishing docks (k), sea. */
  map: [
    'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAAAAA~AAAAAAAAAAAAAAAAAAAAAAAAA',
    'AAMMn.~.nMMMAAMMMMAAAMMMMAAAMMAA',
    'AMtt..~..tttt..MMtttt..tttt..MMA',
    'Mttt..b..ttt.....ttt.....ttt...M',
    'M.....~.....,.....QQQ..RRR....,M',
    'M..T..~...T.......hdh..hdh..T..M',
    'M.....~~~~~~~~~~~b~~~~~~~~~~...M',
    'Tqqqq.qqqq.qqqq.qqqqq.qqq.~~...j',
    'Tqqqq.qqqq.qqqq.qqqqq.qqq.~~.O.j',
    'T....:....:...x:.....:...:~~...j',
    'Tqqqq:qqqq.qqqq.qqqqq:qqq.~~...j',
    'T....:..RRR...QQQ....:....~~j..j',
    'T.p..:..hdh...hdh....:....bbj..j',
    'T....:::::::::::::::::....~~jj.j',
    'Tqqqqq.qqqqq.p.qqqqq......~~jjjj',
    'Tqqqqq.qqqqq...qqqqq..p.x.~~jj.j',
    'Tpssssspsssssspssssssspss~~~~ssj',
    'Tssskksssssssssssskksssss~~~~kkj',
    '~~~~kk~~~~~~~~~~~~kk~~~~~~~~~kk~',
    '================================',
    '================================'
  ],
  start: [10, 5],

  words: {
    monsoon: { en: 'a wind that changes direction with the season: wet from the ocean in summer, dry from the land in winter', es: 'un viento que cambia de dirección con la estación: húmedo desde el océano en verano, seco desde la tierra en invierno', fa: 'بادی که با فصل جهتش را تغییر می‌دهد: در تابستان از اقیانوس و مرطوب، در زمستان از خشکه و خشک' },
    himalaya: { en: 'the tallest mountains on Earth, along the north edge of South Asia', es: 'las montañas más altas de la Tierra, en el borde norte de Asia del Sur', fa: 'بلندترین کوه‌های زمین، در کنار شمالی جنوب آسیا' },
    'indian plate': { en: 'a huge, slow-moving piece of the Earth\'s outer shell that carries India and pushes into Asia', es: 'un enorme pedazo de la capa exterior de la Tierra que se mueve despacio, lleva a la India y empuja contra Asia', fa: 'یک تکهٔ بزرگ پوستهٔ زمین که آهسته حرکت می‌کند، هند را با خود دارد و به آسیا فشار می‌آورد' },
    subcontinent: { en: 'a huge piece of land that sticks out from the rest of a continent', es: 'un enorme pedazo de tierra que sobresale del resto de un continente', fa: 'یک تکهٔ بزرگ خشکه که از باقی یک قاره بیرون زده است' },
    delta: { en: 'flat land built where a river drops soil near the sea', es: 'tierra plana que se forma donde un río deja tierra cerca del mar', fa: 'زمین همواری که در جایی ساخته می‌شود که دریا نزدیک بحر خاک را می‌گذارد' },
    'wet season': { en: 'the months when most of the year\'s rain falls', es: 'los meses en que cae la mayor parte de la lluvia del año', fa: 'ماه‌هایی که بیشتر باران سال در آن می‌بارد' },
    'dry season': { en: 'the months when very little rain falls', es: 'los meses en que llueve muy poco', fa: 'ماه‌هایی که باران بسیار کم می‌بارد' },
    downstream: { en: 'the way a river flows: from where it starts in the hills toward the sea', es: 'hacia donde corre un río: desde donde nace en los cerros hacia el mar', fa: 'طرفی که دریا جریان دارد: از جای شروعش در کوه‌ها به سوی بحر' },
    drought: { en: 'a long time with too little rain, so crops and wells dry out', es: 'un tiempo largo con muy poca lluvia, así que los cultivos y los pozos se secan', fa: 'مدت درازی با باران بسیار کم، که کشت و چاه‌ها خشک می‌شوند' }
  },

  npcs: [
    {
      x: 8, y: 4,
      name: { en: 'Pemba', es: 'Pemba', fa: 'پمبا' },
      role: { en: 'Tea farmer in the hills', es: 'Agricultor de té en los cerros', fa: 'دهقان چای در تپه‌ها' },
      look: { skin: 2, hair: '#1a1410', shirt: '#c0392b', pants: '#2f3a4f' },
      lines: [
        { en: 'Namaste! Behind me are the [[himalaya|Himalaya]], the tallest mountains on Earth. They formed because the [[indian plate|Indian Plate]] is slowly pushing into the rest of Asia. It is still pushing today!',
          es: '¡Namasté! Detrás de mí está el [[himalaya|Himalaya]], las montañas más altas de la Tierra. Se formaron porque la [[indian plate|placa india]] empuja despacio contra el resto de Asia. ¡Todavía sigue empujando!',
          fa: 'نمستی! پشت سر من [[himalaya|هیمالیا]] است، بلندترین کوه‌های زمین. این کوه‌ها ساخته شدند چون [[indian plate|صفحهٔ هند]] آهسته به باقی آسیا فشار می‌آورد. هنوز هم فشار می‌آورد!',
          easy: { en: 'The [[himalaya|Himalaya]] are the tallest mountains. The [[indian plate|Indian Plate]] pushed into Asia and lifted them up.', es: 'El [[himalaya|Himalaya]] tiene las montañas más altas. La [[indian plate|placa india]] empujó contra Asia y las levantó.', fa: '[[himalaya|هیمالیا]] بلندترین کوه‌ها است. [[indian plate|صفحهٔ هند]] به آسیا فشار آورد و آن‌ها را بلند کرد.' } },
        { en: 'Look at a map. South Asia sticks out from the rest of Asia into the ocean. That is why it is called a [[subcontinent|subcontinent]]. India is by far its biggest country, in land and in people.',
          es: 'Mira un mapa. Asia del Sur sobresale del resto de Asia hacia el océano. Por eso se llama un [[subcontinent|subcontinente]]. La India es por mucho su país más grande, en tierra y en gente.',
          fa: 'به نقشه نگاه کن. جنوب آسیا از باقی آسیا به طرف اقیانوس بیرون زده است. به همین خاطر آن را [[subcontinent|نیم‌قاره]] می‌گویند. هند از نگاه زمین و مردم بزرگ‌ترین کشور آن است.',
          easy: { en: 'South Asia sticks out from Asia. It is a [[subcontinent|subcontinent]]. India is its biggest country.', es: 'Asia del Sur sobresale de Asia. Es un [[subcontinent|subcontinente]]. La India es su país más grande.', fa: 'جنوب آسیا از آسیا بیرون زده است. یک [[subcontinent|نیم‌قاره]] است. هند بزرگ‌ترین کشور آن است.' } },
        { en: 'Snow and ice up here melt into rivers. The Ganges River starts at a glacier in these mountains. It flows across the plain below and out to the sea.',
          es: 'La nieve y el hielo de aquí arriba se derriten y forman ríos. El río Ganges nace en un glaciar de estas montañas. Corre por la llanura de abajo y sale al mar.',
          fa: 'برف و یخ این بالا آب می‌شوند و دریا می‌سازند. دریای گنگا از یک یخچال در همین کوه‌ها شروع می‌شود. از دشت پایین می‌گذرد و به بحر می‌رسد.',
          easy: { en: 'Melting ice makes the Ganges River. It flows down to the plain and the sea.', es: 'El hielo que se derrite forma el río Ganges. Baja a la llanura y al mar.', fa: 'یخ آب‌شده دریای گنگا را می‌سازد. به دشت و بحر می‌رود.' } }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why do geographers call South Asia a subcontinent?', es: '¿Por qué los geógrafos llaman subcontinente a Asia del Sur?', fa: 'چرا جغرافیه‌دانان جنوب آسیا را نیم‌قاره می‌گویند؟' },
        choices: [
          { ok: true, t: { en: 'It is a huge piece of land that sticks out from the rest of Asia', es: 'Es un enorme pedazo de tierra que sobresale del resto de Asia', fa: 'یک تکهٔ بزرگ خشکه است که از باقی آسیا بیرون زده' },
            why: { en: 'Yes. It is big like a continent, but it is part of Asia.', es: 'Sí. Es grande como un continente, pero es parte de Asia.', fa: 'بلی. مثل یک قاره بزرگ است، اما بخشی از آسیا است.' } },
          { t: { en: 'It is a group of islands', es: 'Es un grupo de islas', fa: 'یک گروه جزیره است' },
            why: { en: 'A group of islands is an archipelago. South Asia is mostly one big piece of land.', es: 'Un grupo de islas es un archipiélago. Asia del Sur es casi toda un solo pedazo de tierra.', fa: 'گروه جزیره‌ها مجمع‌الجزایر است. جنوب آسیا بیشتر یک تکهٔ بزرگ خشکه است.' } },
          { t: { en: 'It is under the sea', es: 'Está bajo el mar', fa: 'زیر بحر است' },
            why: { en: '"Sub" here does not mean under water. South Asia is dry land.', es: '"Sub" aquí no significa bajo el agua. Asia del Sur es tierra firme.', fa: '«نیم» این‌جا به معنای زیر آب نیست. جنوب آسیا خشکه است.' } }
        ]
      }
    },
    {
      x: 6, y: 15,
      name: { en: 'Lakshmi', es: 'Lakshmi', fa: 'لکشمی' },
      role: { en: 'Rice farmer', es: 'Agricultora de arroz', fa: 'دهقان برنج' },
      look: { skin: 4, hair: '#120c08', shirt: '#e08a1e', pants: '#7a2a5a', robe: true },
      lines: [
        { en: 'Hello! My family grows rice on the Ganges plain. Rice needs lots of water. So we wait for the [[monsoon|monsoon]]. It is a wind that changes direction with the seasons.',
          es: '¡Hola! Mi familia cultiva arroz en la llanura del Ganges. El arroz necesita mucha agua. Por eso esperamos el [[monsoon|monzón]]. Es un viento que cambia de dirección con las estaciones.',
          fa: 'سلام! خانوادهٔ من در دشت گنگا برنج کشت می‌کند. برنج آب زیاد می‌خواهد. پس ما منتظر [[monsoon|باد موسمی]] می‌مانیم. این بادی است که با فصل‌ها جهتش را تغییر می‌دهد.',
          easy: { en: 'I grow rice. Rice needs lots of water. We wait for the [[monsoon|monsoon]] wind.', es: 'Yo cultivo arroz. El arroz necesita mucha agua. Esperamos el viento del [[monsoon|monzón]].', fa: 'من برنج کشت می‌کنم. برنج آب زیاد می‌خواهد. ما منتظر [[monsoon|باد موسمی]] می‌مانیم.' } },
        { en: 'Most of the whole year\'s rain falls in just a few months, from about June to September. That is the [[wet season|wet season]]. We plant rice so the young plants get that heavy rain. Wells and ponds fill up too.',
          es: 'Casi toda la lluvia del año cae en solo unos meses, más o menos de junio a septiembre. Esa es la [[wet season|temporada de lluvias]]. Sembramos el arroz para que las plantas jóvenes reciban esa lluvia fuerte. Los pozos y estanques también se llenan.',
          fa: 'بیشتر باران تمام سال فقط در چند ماه می‌بارد، تقریباً از جون تا سپتامبر. این [[wet season|فصل بارانی]] است. ما برنج را طوری می‌کاریم که نهال‌های جوان آن باران زیاد را بگیرند. چاه‌ها و حوض‌ها هم پر می‌شوند.',
          easy: { en: 'Most rain falls from about June to September. We plant rice then.', es: 'Casi toda la lluvia cae de junio a septiembre. Ahí sembramos el arroz.', fa: 'بیشتر باران از جون تا سپتامبر می‌بارد. ما همان وقت برنج می‌کاریم.' } },
        { en: 'The monsoon can hurt us in two ways. If the rain comes late or weak, crops dry out. That is a [[drought|drought]], and food gets expensive. If the rain comes too strong, rivers flood our fields and roads.',
          es: 'El monzón nos puede hacer daño de dos formas. Si la lluvia llega tarde o débil, los cultivos se secan. Eso es una [[drought|sequía]], y la comida se pone cara. Si la lluvia llega muy fuerte, los ríos inundan los campos y los caminos.',
          fa: 'باد موسمی از دو راه به ما ضرر می‌زند. اگر باران دیر یا کم بیاید، کشت‌ها خشک می‌شوند. این [[drought|خشکسالی]] است و غذا گران می‌شود. اگر باران بسیار زیاد بیاید، دریاها کشتزارها و سرک‌ها را زیر آب می‌برند.',
          easy: { en: 'Too little rain = [[drought|drought]]. Too much rain = floods.', es: 'Muy poca lluvia = [[drought|sequía]]. Demasiada lluvia = inundaciones.', fa: 'باران خیلی کم = [[drought|خشکسالی]]. باران خیلی زیاد = سیلاب.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why does Lakshmi watch the monsoon news so closely?', es: '¿Por qué Lakshmi sigue tan de cerca las noticias del monzón?', fa: 'چرا لکشمی خبرهای باد موسمی را با دقت دنبال می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'The timing of the rain decides when to plant', es: 'El momento de la lluvia decide cuándo sembrar', fa: 'وقت آمدن باران تعیین می‌کند چه وقت بکارد' },
            why: { en: 'Right. Rice must get the heavy rain while it is young.', es: 'Correcto. El arroz debe recibir la lluvia fuerte mientras es joven.', fa: 'درست است. برنج باید وقتی جوان است باران زیاد بگیرد.' } },
          { t: { en: 'The wind tells her which language to speak', es: 'El viento le dice qué idioma hablar', fa: 'باد به او می‌گوید به کدام زبان گپ بزند' },
            why: { en: 'Wind does not change language. It changes the rain.', es: 'El viento no cambia el idioma. Cambia la lluvia.', fa: 'باد زبان را تغییر نمی‌دهد. باران را تغییر می‌دهد.' } },
          { t: { en: 'It rains the same amount every month', es: 'Llueve lo mismo todos los meses', fa: 'هر ماه به یک اندازه باران می‌بارد' },
            why: { en: 'No. Most of the rain falls in just a few months.', es: 'No. Casi toda la lluvia cae en solo unos meses.', fa: 'نه. بیشتر باران فقط در چند ماه می‌بارد.' } }
        ]
      }
    },
    {
      x: 20, y: 18,
      name: { en: 'Rahim', es: 'Rahim', fa: 'رحیم' },
      role: { en: 'Fisher on the Bay of Bengal', es: 'Pescador del golfo de Bengala', fa: 'ماهیگیر خلیج بنگال' },
      look: { skin: 5, hair: '#0e0a08', shirt: '#2a8a7a', pants: '#3a3a3a' },
      lines: [
        { en: 'Salaam! I fish in the Bay of Bengal, where the Ganges reaches the sea. The river drops soil here and builds a huge, flat [[delta|delta]]. Dhaka, the capital of Bangladesh, sits on this delta.',
          es: '¡Salam! Pesco en el golfo de Bengala, donde el Ganges llega al mar. El río deja tierra aquí y forma un [[delta|delta]] enorme y plano. Daca, la capital de Bangladés, está en este delta.',
          fa: 'سلام! من در خلیج بنگال ماهی می‌گیرم، جایی که گنگا به بحر می‌رسد. دریا این‌جا خاک می‌گذارد و یک [[delta|دلتای]] بزرگ و هموار می‌سازد. داکه، پایتخت بنگله‌دیش، روی همین دلتا است.',
          easy: { en: 'The Ganges drops soil by the sea. It makes flat land called a [[delta|delta]].', es: 'El Ganges deja tierra junto al mar. Forma tierra plana llamada [[delta|delta]].', fa: 'گنگا کنار بحر خاک می‌گذارد. زمین هموار به نام [[delta|دلتا]] می‌سازد.' } },
        { en: 'In summer, the land heats up faster than the ocean. So wet wind blows in from the ocean, from the southwest. It brings months of heavy rain.',
          es: 'En verano, la tierra se calienta más rápido que el océano. Por eso un viento húmedo sopla desde el océano, desde el suroeste. Trae meses de lluvia fuerte.',
          fa: 'در تابستان، خشکه زودتر از اقیانوس گرم می‌شود. پس باد مرطوب از اقیانوس، از جنوب غرب، می‌وزد. چند ماه باران زیاد می‌آورد.',
          easy: { en: 'Summer: wind from the ocean. It brings heavy rain.', es: 'Verano: viento desde el océano. Trae lluvia fuerte.', fa: 'تابستان: باد از اقیانوس. باران زیاد می‌آورد.' } },
        { en: 'In winter, the wind turns around. It blows from the land, from the northeast, out toward the sea. The air is dry. That is the [[dry season|dry season]]. I can fish on calm water.',
          es: 'En invierno, el viento da la vuelta. Sopla desde la tierra, desde el noreste, hacia el mar. El aire es seco. Esa es la [[dry season|temporada seca]]. Puedo pescar en agua tranquila.',
          fa: 'در زمستان، باد برمی‌گردد. از خشکه، از شمال شرق، به طرف بحر می‌وزد. هوا خشک است. این [[dry season|فصل خشک]] است. می‌توانم روی آب آرام ماهی بگیرم.',
          easy: { en: 'Winter: wind from the land. The air is dry. That is the [[dry season|dry season]].', es: 'Invierno: viento desde la tierra. El aire es seco. Esa es la [[dry season|temporada seca]].', fa: 'زمستان: باد از خشکه. هوا خشک است. این [[dry season|فصل خشک]] است.' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'In summer, where does the monsoon wind blow from?', es: 'En verano, ¿desde dónde sopla el viento del monzón?', fa: 'در تابستان، باد موسمی از کجا می‌وزد؟' },
        choices: [
          { ok: true, t: { en: 'From the ocean in toward the land', es: 'Desde el océano hacia la tierra', fa: 'از اقیانوس به طرف خشکه' },
            why: { en: 'Yes. The ocean wind carries wet air, so heavy rain falls on the land.', es: 'Sí. El viento del océano lleva aire húmedo, así que cae lluvia fuerte sobre la tierra.', fa: 'بلی. باد اقیانوس هوای مرطوب می‌آورد، پس روی خشکه باران زیاد می‌بارد.' } },
          { t: { en: 'From the land out toward the sea', es: 'Desde la tierra hacia el mar', fa: 'از خشکه به طرف بحر' },
            why: { en: 'That is the winter monsoon. It is dry.', es: 'Ese es el monzón de invierno. Es seco.', fa: 'این باد موسمی زمستان است. خشک است.' } },
          { t: { en: 'From the desert toward the mountains', es: 'Desde el desierto hacia las montañas', fa: 'از ریگستان به طرف کوه‌ها' },
            why: { en: 'Desert air is dry. The rain comes on wind from the ocean.', es: 'El aire del desierto es seco. La lluvia llega con el viento del océano.', fa: 'هوای ریگستان خشک است. باران با باد اقیانوس می‌آید.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 10, text: { en: 'GANGES RIVER · It starts as melting ice in the Himalaya. It flows east across this plain and then south to the Bay of Bengal. Millions of farmers use its water.',
      es: 'RÍO GANGES · Nace del hielo que se derrite en el Himalaya. Corre al este por esta llanura y luego al sur hasta el golfo de Bengala. Millones de agricultores usan su agua.',
      fa: 'دریای گنگا · از یخ آب‌شدهٔ هیمالیا شروع می‌شود. از این دشت به طرف شرق و بعد به طرف جنوب تا خلیج بنگال می‌رود. میلیون‌ها دهقان از آب آن استفاده می‌کنند.' } },
    { x: 24, y: 16, text: { en: 'WIND ARROWS · Summer: ocean ➜ land, wet. Winter: land ➜ ocean, dry. The monsoon wind turns around with the season.',
      es: 'FLECHAS DEL VIENTO · Verano: océano ➜ tierra, húmedo. Invierno: tierra ➜ océano, seco. El viento del monzón da la vuelta con la estación.',
      fa: 'تیرهای باد · تابستان: اقیانوس ⬅ خشکه، مرطوب. زمستان: خشکه ⬅ اقیانوس، خشک. باد موسمی با فصل برمی‌گردد.' } }
  ],

  /* the quest: Nani Kamala (gold !) -> Arjun the duck herder -> follow the Ganges downstream to find the rain gauge -> back to Kamala */
  quest: {
    stat: 'mov',
    title: { en: "Nani's Rain Gauge", es: 'El pluviómetro de la abuela', fa: 'باران‌سنج مادرکلان' },
    giver: {
      x: 27, y: 5,
      name: { en: 'Nani Kamala', es: 'Abuela Kamala', fa: 'مادرکلان کمالا' },
      role: { en: 'Rain keeper of the village', es: 'Guardiana de la lluvia del pueblo', fa: 'نگهبان باران ده' },
      look: { skin: 3, hair: '#d9d6d0', shirt: '#7a3e9a', pants: '#4a3a2a', robe: true, style: 'bun' },
      lines: [
        { en: 'Oh, hello! Every day I measure the rain in a glass jar with lines on it. It is my rain gauge. The farmers ask me when the [[monsoon|monsoon]] rain has really come.',
          es: '¡Ay, hola! Cada día mido la lluvia en un frasco de vidrio con rayas. Es mi pluviómetro. Los agricultores me preguntan cuándo llegó de verdad la lluvia del [[monsoon|monzón]].',
          fa: 'آه، سلام! هر روز باران را در یک مرتبان شیشه‌ای خط‌دار اندازه می‌کنم. این باران‌سنج من است. دهقانان از من می‌پرسند که باران [[monsoon|باد موسمی]] واقعاً کی آمده است.' },
        { en: 'The Storm Smudge blew it into the river! Arjun herds his ducks in the south-west, by the rice fields. He sees everything on the water. Please ask him.',
          es: '¡El Borrón Tormenta lo tiró al río! Arjun cuida sus patos en el suroeste, junto a los campos de arroz. Él ve todo lo que pasa en el agua. Por favor, pregúntale.',
          fa: 'لکهٔ طوفان آن را به دریا انداخت! ارجن مرغابی‌هایش را در جنوب غرب، کنار کشتزارهای برنج، می‌چراند. او همه چیز را روی آب می‌بیند. لطفاً از او بپرس.' }
      ],
      wait: { en: 'Arjun is in the south-west, by the rice fields. South is down. West is to the left.',
        es: 'Arjun está en el suroeste, junto a los campos de arroz. El sur está abajo. El oeste está a la izquierda.',
        fa: 'ارجن در جنوب غرب، کنار کشتزارهای برنج است. جنوب پایین است. غرب طرف چپ است.' },
      thanks: { en: 'My rain gauge! Now I can tell the farmers when the [[wet season|wet season]] starts. And you learned something too: a river always carries things [[downstream|downstream]], toward the sea.',
        es: '¡Mi pluviómetro! Ahora puedo decirles a los agricultores cuándo empieza la [[wet season|temporada de lluvias]]. Y tú también aprendiste algo: un río siempre lleva las cosas [[downstream|río abajo]], hacia el mar.',
        fa: 'باران‌سنج من! حالا می‌توانم به دهقانان بگویم [[wet season|فصل بارانی]] کی شروع می‌شود. تو هم چیزی یاد گرفتی: دریا همیشه چیزها را به [[downstream|پایین دریا]]، به سوی بحر، می‌برد.' }
    },
    contact: {
      x: 3, y: 12,
      name: { en: 'Arjun', es: 'Arjun', fa: 'ارجن' },
      role: { en: 'Duck herder', es: 'Pastor de patos', fa: 'چوپان مرغابی' },
      look: { skin: 5, hair: '#0e0a08', shirt: '#3a7ac0', pants: '#d8cfa8', style: 'short' },
      lines: [
        { en: 'Yes, I saw a glass jar float by! The Ganges carried it [[downstream|downstream]]. That means it went the same way the water flows, toward the sea.',
          es: '¡Sí, vi pasar flotando un frasco de vidrio! El Ganges lo llevó [[downstream|río abajo]]. Eso quiere decir que fue hacia donde corre el agua, hacia el mar.',
          fa: 'بلی، دیدم یک مرتبان شیشه‌ای روی آب می‌رفت! گنگا آن را به [[downstream|پایین دریا]] برد. یعنی همان طرفی رفت که آب جریان دارد، به سوی بحر.' },
        { en: 'Follow the river east across the rice plain. Then it turns south toward the sea. Walk south along its west bank to the bridge. Do not cross. Take one more step south.',
          es: 'Sigue el río hacia el este por la llanura de arroz. Luego gira al sur, hacia el mar. Camina al sur por su orilla oeste hasta el puente. No lo cruces. Da un paso más al sur.',
          fa: 'دریا را به طرف شرق از دشت برنج دنبال کن. بعد به طرف جنوب، به سوی بحر، دور می‌خورد. از کنار غربی آن به طرف جنوب تا پل برو. از پل نگذر. یک قدم دیگر به جنوب برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [25, 14],
      hint: { en: 'west bank, 1 step south of the bridge where the river flows south', es: 'orilla oeste, 1 paso al sur del puente donde el río va al sur', fa: 'کنار غربی، ۱ قدم جنوبِ پلی که دریا آن‌جا به جنوب می‌رود' },
      found: { en: 'There it is, stuck in the mud on the riverbank! The river carried the jar [[downstream|downstream]]: first east, then south toward the Bay of Bengal.',
        es: '¡Ahí está, atorado en el lodo de la orilla! El río llevó el frasco [[downstream|río abajo]]: primero al este y luego al sur, hacia el golfo de Bengala.',
        fa: 'آنجاست، در گِل کنار دریا گیر مانده! دریا مرتبان را به [[downstream|پایین دریا]] برد: اول به طرف شرق، بعد به طرف جنوب، به سوی خلیج بنگال.' },
      item: { icon: '🧪', name: { en: "Nani's rain gauge", es: 'El pluviómetro de la abuela', fa: 'باران‌سنج مادرکلان' } }
    }
  },

  scraps: [[2, 4], [30, 4], [30, 12]],
  smudges: [[13, 9], [17, 15]],

  challenge: {
    at: [22, 5],
    type: 'sort',
    style: 'bands',
    stat: 'pla',
    title: { en: 'Summer monsoon or winter monsoon?', es: '¿Monzón de verano o monzón de invierno?', fa: 'باد موسمی تابستان یا زمستان؟' },
    intro: { en: 'The Smudge mixed up the seasons on the village calendar. Sort each card. Does it belong to the summer monsoon or the winter monsoon?',
      es: 'El Borrón mezcló las estaciones en el calendario del pueblo. Ordena cada tarjeta. ¿Es del monzón de verano o del monzón de invierno?',
      fa: 'لکه فصل‌های تقویم ده را به هم زد. هر کارت را جدا کن. مربوط به باد موسمی تابستان است یا باد موسمی زمستان؟' },
    bins: [
      { id: 'summer', icon: '🌧️', tile: 'q', label: { en: 'Summer monsoon', es: 'Monzón de verano', fa: 'باد موسمی تابستان' }, sub: { en: 'about June to September', es: 'más o menos de junio a septiembre', fa: 'تقریباً جون تا سپتامبر' } },
      { id: 'winter', icon: '☀️', tile: 'g', label: { en: 'Winter monsoon', es: 'Monzón de invierno', fa: 'باد موسمی زمستان' }, sub: { en: 'the cooler, dry months', es: 'los meses más frescos y secos', fa: 'ماه‌های سردتر و خشک' } }
    ],
    items: [
      { bin: 'summer', t: { en: 'Wind blows from the ocean to the land', es: 'El viento sopla del océano a la tierra', fa: 'باد از اقیانوس به خشکه می‌وزد' }, why: { en: 'Ocean wind is the summer monsoon. It carries wet air.', es: 'El viento del océano es el monzón de verano. Lleva aire húmedo.', fa: 'باد اقیانوس باد موسمی تابستان است. هوای مرطوب می‌آورد.' } },
      { bin: 'summer', t: { en: 'Wind from the southwest', es: 'Viento del suroeste', fa: 'باد از جنوب غرب' }, why: { en: 'In summer the wet wind comes from the southwest, off the ocean.', es: 'En verano el viento húmedo viene del suroeste, desde el océano.', fa: 'در تابستان باد مرطوب از جنوب غرب، از طرف اقیانوس، می‌آید.' } },
      { bin: 'summer', t: { en: 'Heavy rain for weeks and weeks', es: 'Lluvia fuerte por semanas y semanas', fa: 'باران زیاد برای هفته‌ها' }, why: { en: 'Most of the year\'s rain falls in the summer monsoon.', es: 'Casi toda la lluvia del año cae en el monzón de verano.', fa: 'بیشتر باران سال در باد موسمی تابستان می‌بارد.' } },
      { bin: 'summer', t: { en: 'Farmers plant young rice in wet fields', es: 'Los agricultores siembran arroz joven en campos mojados', fa: 'دهقانان نهال برنج را در کشتزار تر می‌کارند' }, why: { en: 'Rice is planted so the young plants get the heavy summer rain.', es: 'El arroz se siembra para que las plantas jóvenes reciban la lluvia fuerte del verano.', fa: 'برنج طوری کاشته می‌شود که نهال‌های جوان باران زیاد تابستان را بگیرند.' } },
      { bin: 'summer', t: { en: 'Rivers rise, and floods can happen', es: 'Los ríos crecen y puede haber inundaciones', fa: 'دریاها بالا می‌آیند و سیلاب ممکن است' }, why: { en: 'Too much summer rain makes rivers spill over their banks.', es: 'Demasiada lluvia de verano hace que los ríos se desborden.', fa: 'باران زیاد تابستان دریاها را از کناره‌هایشان بیرون می‌ریزد.' } },
      { bin: 'winter', t: { en: 'Wind blows from the land out to the sea', es: 'El viento sopla de la tierra hacia el mar', fa: 'باد از خشکه به طرف بحر می‌وزد' }, why: { en: 'Land wind is the winter monsoon. It carries dry air.', es: 'El viento de la tierra es el monzón de invierno. Lleva aire seco.', fa: 'باد خشکه باد موسمی زمستان است. هوای خشک می‌آورد.' } },
      { bin: 'winter', t: { en: 'Wind from the northeast', es: 'Viento del noreste', fa: 'باد از شمال شرق' }, why: { en: 'In winter the wind turns around and comes from the northeast, over the land.', es: 'En invierno el viento da la vuelta y viene del noreste, sobre la tierra.', fa: 'در زمستان باد برمی‌گردد و از شمال شرق، از روی خشکه، می‌آید.' } },
      { bin: 'winter', t: { en: 'Dry, dusty, sunny days', es: 'Días secos, con polvo y sol', fa: 'روزهای خشک، گردآلود و آفتابی' }, why: { en: 'Dry land wind means little rain for most of South Asia.', es: 'El viento seco de la tierra significa poca lluvia en casi toda Asia del Sur.', fa: 'باد خشک خشکه یعنی باران کم برای بیشتر جنوب آسیا.' } },
      { bin: 'winter', t: { en: 'Water saved from the rains has to last', es: 'El agua guardada de las lluvias tiene que alcanzar', fa: 'آبی که از باران‌ها ذخیره شده باید کفایت کند' }, why: { en: 'With little rain, people use water saved in wells and ponds. If it runs out, there is drought.', es: 'Con poca lluvia, la gente usa el agua guardada en pozos y estanques. Si se acaba, hay sequía.', fa: 'با باران کم، مردم از آب ذخیره در چاه‌ها و حوض‌ها استفاده می‌کنند. اگر تمام شود، خشکسالی می‌آید.' } }
    ],
    success: { en: 'The calendar is right again. Wet wind from the ocean in summer, dry wind from the land in winter!', es: '¡El calendario vuelve a estar bien! Viento húmedo del océano en verano, viento seco de la tierra en invierno.', fa: 'تقویم دوباره درست شد. باد مرطوب از اقیانوس در تابستان، باد خشک از خشکه در زمستان!' }
  },

  boss: {
    at: [10, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Storm Smudge', es: 'El Borrón Tormenta', fa: 'لکهٔ طوفان' },
    appear: { en: 'The Storm Smudge is rising over the beach by the Bay of Bengal!', es: '¡El Borrón Tormenta se levanta sobre la playa del golfo de Bengala!', fa: 'لکهٔ طوفان بالای ساحل خلیج بنگال بلند می‌شود!' },
    taunt: { en: 'Whoosh! I mixed up the winds. Rain in winter, dust in summer! Nobody will know when to plant!', es: '¡Fiuuu! Revolví los vientos. ¡Lluvia en invierno, polvo en verano! ¡Nadie sabrá cuándo sembrar!', fa: 'ووووش! بادها را به هم زدم. باران در زمستان، گرد و خاک در تابستان! هیچ کس نمی‌داند چه وقت بکارد!' },
    win: { en: 'The cloud shield breaks. Gentle rain falls on the rice, and atlas page 6.1 drops into your hands!', es: 'El escudo de nubes se rompe. Una lluvia suave cae sobre el arroz, ¡y la página 6.1 del atlas cae en tus manos!', fa: 'سپر ابر می‌شکند. باران آرام روی برنج می‌بارد و صفحهٔ ۶.۱ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'In summer, the monsoon wind blows from the ___ toward the land. What does it bring?', es: 'En verano, el viento del monzón sopla desde ___ hacia la tierra. ¿Qué trae?', fa: 'در تابستان، باد موسمی از ___ به سوی خشکی می‌وزد. با خود چه می‌آورد؟' },
        choices: [{ en: 'ocean — it brings heavy rain', es: 'el océano — trae lluvias fuertes', fa: 'اقیانوس — باران زیاد می‌آورد' }, { en: 'mountains — it brings snow', es: 'las montañas — trae nieve', fa: 'کوه‌ها — برف می‌آورد' }, { en: 'desert — it brings dust', es: 'el desierto — trae polvo', fa: 'ریگستان — گرد و خاک می‌آورد' }, { en: 'North Pole — it brings cold air', es: 'el Polo Norte — trae aire frío', fa: 'قطب شمال — هوای سرد می‌آورد' }], answer: 0,
        why: { en: 'The summer monsoon blows from the ocean, so it carries wet air and heavy rain.', es: 'El monzón de verano sopla desde el océano, así que lleva aire húmedo y lluvia fuerte.', fa: 'باد موسمی تابستان از اقیانوس می‌وزد، پس هوای مرطوب و باران زیاد می‌آورد.' } },
      { q: { en: 'What is a monsoon?', es: '¿Qué es un monzón?', fa: 'باد موسمی چیست؟' },
        choices: [{ en: 'A wind that changes direction with the season', es: 'Un viento que cambia de dirección con la estación', fa: 'بادی که با فصل جهتش را تغییر می‌دهد' }, { en: 'A wide river that floods each spring', es: 'Un río ancho que se desborda cada primavera', fa: 'یک دریای پهن که هر بهار سیلاب می‌شود' }, { en: 'A tall mountain range in northern India', es: 'Una cordillera alta en el norte de la India', fa: 'یک سلسله‌کوه بلند در شمال هند' }, { en: 'A dry season when no rain falls at all', es: 'Una temporada seca en que no llueve nada', fa: 'یک فصل خشک که هیچ باران نمی‌بارد' }], answer: 0,
        why: { en: 'A [[monsoon|monsoon]] is a wind. It blows from the ocean in summer and from the land in winter.', es: 'Un [[monsoon|monzón]] es un viento. Sopla desde el océano en verano y desde la tierra en invierno.', fa: '[[monsoon|باد موسمی]] یک باد است. در تابستان از اقیانوس و در زمستان از خشکه می‌وزد.' } },
      { q: { en: 'Most of South Asia\'s rain for the whole year falls ___.', es: 'Casi toda la lluvia del año en Asia del Sur cae ___.', fa: 'بیشتر باران تمام سال در جنوب آسیا ___ می‌بارد.' },
        choices: [{ en: 'in just a few months', es: 'en solo unos meses', fa: 'فقط در چند ماه' }, { en: 'evenly in all twelve months', es: 'igual en los doce meses', fa: 'به یک اندازه در هر دوازده ماه' }, { en: 'mostly in winter', es: 'casi toda en invierno', fa: 'بیشتر در زمستان' }, { en: 'only at night', es: 'solo de noche', fa: 'فقط در شب' }], answer: 0,
        why: { en: 'The summer monsoon brings most of the year\'s rain in a few months. The rest of the year is dry.', es: 'El monzón de verano trae casi toda la lluvia del año en unos meses. El resto del año es seco.', fa: 'باد موسمی تابستان بیشتر باران سال را در چند ماه می‌آورد. باقی سال خشک است.' } },
      { q: { en: 'A farmer in India watches the monsoon news closely. Why?', es: 'Un agricultor de la India sigue de cerca las noticias del monzón. ¿Por qué?', fa: 'یک دهقان در هند خبرهای باد موسمی را با دقت دنبال می‌کند. چرا؟' },
        choices: [{ en: 'The timing of the rain decides when to plant', es: 'El momento de la lluvia decide cuándo sembrar', fa: 'وقت باران تعیین می‌کند چه وقت بکارد' }, { en: 'The wind tells him which crops sell for the most money', es: 'El viento le dice qué cultivos se venden más caros', fa: 'باد به او می‌گوید کدام کشت گران‌تر فروخته می‌شود' }, { en: 'The rain decides which language the family speaks', es: 'La lluvia decide qué idioma habla la familia', fa: 'باران تعیین می‌کند خانواده به کدام زبان گپ بزند' }, { en: 'The wind brings cooler air for the animals', es: 'El viento trae aire más fresco para los animales', fa: 'باد برای حیوانات هوای سردتر می‌آورد' }], answer: 0,
        why: { en: 'Rice must be planted so the young plants get the heavy rain.', es: 'El arroz se debe sembrar para que las plantas jóvenes reciban la lluvia fuerte.', fa: 'برنج باید طوری کاشته شود که نهال‌های جوان باران زیاد را بگیرند.' } },
      { q: { en: 'One year the monsoon rain comes late and weak. What is the most likely problem?', es: 'Un año la lluvia del monzón llega tarde y débil. ¿Cuál es el problema más probable?', fa: 'یک سال باران موسمی دیر و کم می‌آید. محتمل‌ترین مشکل چیست؟' },
        choices: [{ en: 'Crops dry out, and food gets expensive', es: 'Los cultivos se secan y la comida se pone cara', fa: 'کشت‌ها خشک می‌شوند و غذا گران می‌شود' }, { en: 'Rivers flood the roads', es: 'Los ríos inundan los caminos', fa: 'دریاها سرک‌ها را زیر آب می‌برند' }, { en: 'The Himalaya grow taller', es: 'El Himalaya crece más', fa: 'هیمالیا بلندتر می‌شود' }, { en: 'Snow falls on the rice', es: 'Cae nieve sobre el arroz', fa: 'روی برنج برف می‌بارد' }], answer: 0,
        why: { en: 'Weak rain brings [[drought|drought]]. Floods come when the rain is too strong, not too weak.', es: 'La lluvia débil trae [[drought|sequía]]. Las inundaciones llegan cuando la lluvia es muy fuerte, no débil.', fa: 'باران کم [[drought|خشکسالی]] می‌آورد. سیلاب وقتی می‌آید که باران خیلی زیاد باشد، نه کم.' } },
      { q: { en: 'Geographers call South Asia a subcontinent. What does that mean?', es: 'Los geógrafos llaman subcontinente a Asia del Sur. ¿Qué significa?', fa: 'جغرافیه‌دانان جنوب آسیا را نیم‌قاره می‌گویند. یعنی چه؟' },
        choices: [{ en: 'A huge landmass that juts out from the rest of a continent', es: 'Una enorme masa de tierra que sobresale del resto de un continente', fa: 'خشکهٔ بزرگی که از باقی یک قاره بیرون زده است' }, { en: 'A group of islands close together', es: 'Un grupo de islas cercanas', fa: 'گروهی از جزیره‌های نزدیک به هم' }, { en: 'A flat area built by a river', es: 'Una zona plana formada por un río', fa: 'زمین همواری که دریا ساخته است' }, { en: 'A wind that changes with the season', es: 'Un viento que cambia con la estación', fa: 'بادی که با فصل تغییر می‌کند' }], answer: 0,
        why: { en: 'South Asia sticks out from the rest of Asia, so it is a [[subcontinent|subcontinent]].', es: 'Asia del Sur sobresale del resto de Asia, así que es un [[subcontinent|subcontinente]].', fa: 'جنوب آسیا از باقی آسیا بیرون زده است، پس یک [[subcontinent|نیم‌قاره]] است.' } },
      { q: { en: 'How did the Himalaya form?', es: '¿Cómo se formó el Himalaya?', fa: 'هیمالیا چطور ساخته شد؟' },
        choices: [{ en: 'The Indian Plate is slowly pushing into the rest of Asia', es: 'La placa india empuja despacio contra el resto de Asia', fa: 'صفحهٔ هند آهسته به باقی آسیا فشار می‌آورد' }, { en: 'A huge flood piled up sand', es: 'Una gran inundación amontonó arena', fa: 'یک سیلاب بزرگ ریگ را روی هم انباشت' }, { en: 'Wind blew snow into a pile', es: 'El viento amontonó nieve', fa: 'باد برف را روی هم جمع کرد' }, { en: 'People built them long ago', es: 'La gente las construyó hace mucho', fa: 'مردم آن‌ها را مدت‌ها پیش ساختند' }], answer: 0,
        why: { en: 'The [[indian plate|Indian Plate]] pushes into Asia and lifts the land into the tallest mountains on Earth.', es: 'La [[indian plate|placa india]] empuja contra Asia y levanta la tierra en las montañas más altas del planeta.', fa: '[[indian plate|صفحهٔ هند]] به آسیا فشار می‌آورد و زمین را به بلندترین کوه‌های زمین بالا می‌برد.' } },
      { q: { en: 'Dhaka is the capital of Bangladesh. It sits on which delta?', es: 'Daca es la capital de Bangladés. ¿En qué delta está?', fa: 'داکه پایتخت بنگله‌دیش است. روی کدام دلتا قرار دارد؟' },
        choices: [{ en: 'The Ganges delta', es: 'El delta del Ganges', fa: 'دلتای گنگا' }, { en: 'The Nile delta', es: 'El delta del Nilo', fa: 'دلتای نیل' }, { en: 'The Mekong delta', es: 'El delta del Mekong', fa: 'دلتای میکانگ' }, { en: 'The Indus delta', es: 'El delta del Indo', fa: 'دلتای سند' }], answer: 0,
        why: { en: 'The Ganges drops soil near the Bay of Bengal and builds the delta where Dhaka sits.', es: 'El Ganges deja tierra cerca del golfo de Bengala y forma el delta donde está Daca.', fa: 'گنگا نزدیک خلیج بنگال خاک می‌گذارد و دلتایی می‌سازد که داکه روی آن است.' } }
    ]
  },

  learned: [
    { en: 'A [[monsoon|monsoon]] is a wind that changes direction with the season: wet from the ocean in summer, dry from the land in winter.', es: 'Un [[monsoon|monzón]] es un viento que cambia de dirección con la estación: húmedo desde el océano en verano, seco desde la tierra en invierno.', fa: '[[monsoon|باد موسمی]] بادی است که با فصل جهتش را تغییر می‌دهد: در تابستان از اقیانوس و مرطوب، در زمستان از خشکه و خشک.' },
    { en: 'Most of the year\'s rain falls in a few months. Farmers plant rice with the rain. Too little rain brings [[drought|drought]]; too much brings floods.', es: 'Casi toda la lluvia del año cae en unos meses. Los agricultores siembran arroz con la lluvia. Muy poca lluvia trae [[drought|sequía]]; demasiada trae inundaciones.', fa: 'بیشتر باران سال در چند ماه می‌بارد. دهقانان با باران برنج می‌کارند. باران کم [[drought|خشکسالی]] می‌آورد و باران زیاد سیلاب.' },
    { en: 'South Asia is a [[subcontinent|subcontinent]]. The [[himalaya|Himalaya]] rose as the Indian Plate pushed into Asia, and the Ganges carries their melted ice to a huge [[delta|delta]].', es: 'Asia del Sur es un [[subcontinent|subcontinente]]. El [[himalaya|Himalaya]] se levantó cuando la placa india empujó contra Asia, y el Ganges lleva su hielo derretido hasta un enorme [[delta|delta]].', fa: 'جنوب آسیا یک [[subcontinent|نیم‌قاره]] است. [[himalaya|هیمالیا]] وقتی بلند شد که صفحهٔ هند به آسیا فشار آورد، و گنگا یخ آب‌شدهٔ آن را تا یک [[delta|دلتای]] بزرگ می‌برد.' }
  ],
  reflect: {
    q: { en: 'The monsoon decides when farmers plant. What season or weather changes your plans where you live now, or where you lived before?', es: 'El monzón decide cuándo siembran los agricultores. ¿Qué estación o clima cambia tus planes donde vives ahora, o donde vivías antes?', fa: 'باد موسمی تعیین می‌کند دهقانان چه وقت بکارند. کدام فصل یا هوا برنامه‌های تو را در جایی که حالا زندگی می‌کنی، یا پیش‌تر زندگی می‌کردی، تغییر می‌دهد؟' },
    starter: { en: 'One season that changes my plans is', es: 'Una estación que cambia mis planes es', fa: 'فصلی که برنامه‌های مرا تغییر می‌دهد' }
  }
};
