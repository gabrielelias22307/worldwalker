/* WORLDWALKER · Episode 8.1 · Australia and the Pacific (WG.11)
   West to east the land teaches the lesson: the dry red Outback, the green coast with the big city,
   then open ocean with a high volcanic island and a low ring-shaped atoll far out at sea. */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'WG.11',
  title: { en: 'Australia and the Pacific', es: 'Australia y el Pacífico', fa: 'آسترالیا و اقیانوس آرام' },
  place: { en: 'Harbor City and the Far Islands', es: 'Ciudad del Puerto y las Islas Lejanas', fa: 'شهر بندر و جزیره‌های دور' },
  intro: [
    { en: 'Christopher: "The Grump rolled across the last realm! Now the Outback, the coast and the islands are all mixed up. Talk to the ranger, the ferry captain and the reef scientist. Then fix the compass stone in the Outback town."',
      es: 'Christopher: "¡El Gruñón pasó por el último reino! Ahora el Outback, la costa y las islas están todos mezclados. Habla con el guardaparques, la capitana del ferry y la científica del arrecife. Luego arregla la piedra de la brújula en el pueblo del Outback."',
      fa: 'کریستوفر: «غرغرو از آخرین سرزمین گذشت! حالا اوت‌بک، ساحل و جزیره‌ها همه با هم مخلوط شده‌اند. با محافظ پارک، کپتان کشتی و دانشمند صخرهٔ مرجانی گپ بزن. بعد سنگ قطب‌نما را در قریهٔ اوت‌بک درست کن.»' }
  ],

  /* 48 x 22 tiles = 3 x 2 screens.
     West: the dry Outback (sand, dry grass, rocks, a big red rock like Uluru, one small town far from everything).
     Middle: the coast, where the rain falls and the city stands by the beach and harbor.
     East: open ocean. A long ferry dock reaches a high volcanic island, and a second dock reaches a low atoll. */
  map: [
    'rrrrrrrrrrrrrrrrTTTTTTTTTTTTpppp================',
    'rsssgsssssssgsssgg.......T..ss~~~~~~~ssssss~~~~=',
    'rssasssssssssgssg..UU:UU:UU.ss~~~~~~ss.pp..s~~~=',
    'rssssssssssssassg..UU:UU:UU.ss~~~~~ss..KVK.ss~~=',
    'rsgssMMMMMMsssgsg..:::::::::sskkkkkkk...,..ss~~=',
    'rssssMMMMMMsssssg..UU:UU:UU.ss~~~~~ss.QQQ.pss~~=',
    'rsssssssssssgsssg..UU:UU:UU.ss~~~~~~s.hdh..s~~~=',
    'rsrssssgssssssssg.....:....xss~~~~~~sp..x.ps~~~=',
    'rssssasssssrssgsgg.,..:..T..ss~~~~~~~sskss~~~~~=',
    'rsgsssssssssssssg.....:.....ss~~~~~~~~~k~~~~~~~=',
    'rssssssgsssassssgg....:...,.ss~~~~~~~~~k~~~~~~~=',
    'rsssssssssssssgsg.....:.....ss~~~~~~~~~k~~~~~~~=',
    'rsasssgsssssssssg.ww..:..ww.ss~~~~~~~~~k~~~~~~~=',
    'rssssRRRssssassgg.ww..:..ww.ss~~~~~~pssssssp~~~=',
    'rsgsshdhsOsssssgg.....:..ww.ss~~~~~psss~~sssp~~=',
    'rss::::::::::::::::::::.....ss~~~~~ss~~~~~~ss~~=',
    'rsssssssssssgssgg.....,..T..ss~~~~~ss~~s~~~ss~~=',
    'rsssssssrssssgsgg.ww...QQQ..ss~~~~~ss~~~~~~ss~~=',
    'rsgsssasssssssggg.ww...hdh..ss~~~~~psss~~sssp~~=',
    'rssssssssgssrsgggg.........sss~~~~~~pssssssp~~~=',
    'rsssrsssssssssggggg..T.....ss~~~~~~~~~~~~~~~~~~=',
    'rrrrrrrrrrrrrrrrTTTTTTTTTTTpp~~~================'
  ],
  start: [22, 10],

  tools: ['axe', 'sickle'],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 16], at: [10, 14], decor: 'fossil',
      clue: { en: 'Use the map key: find the well in the little Outback town. Stand on the square just east of the well.', es: 'Usa la leyenda: busca el pozo del pueblito del Outback. Párate en el cuadro que está justo al este del pozo.', fa: 'از راهنمای نقشه استفاده کن: چاه را در قریهٔ کوچک اوت‌بک پیدا کن. روی خانه‌ای بایست که درست به طرف شرقِ چاه است.' },
      text: { en: 'You read the map key! Water is precious in the dry Outback. Many farms pump it up from deep under the ground, from the Great Artesian Basin. It is one of the largest stores of underground water in the world. A fossil was lying by the well.', es: '¡Leíste la leyenda! El agua es muy valiosa en el Outback seco. Muchas granjas la sacan con bombas desde muy abajo de la tierra, de la Gran Cuenca Artesiana. Es una de las reservas de agua subterránea más grandes del mundo. Había un fósil junto al pozo.', fa: 'تو راهنمای نقشه را خواندی! آب در اوت‌بک خشک بسیار قیمتی است. بسیاری از فارم‌ها آب را با پمپ از عمق زیر زمین بیرون می‌کشند، از حوزهٔ بزرگ آرتزین. این یکی از بزرگ‌ترین ذخیره‌های آب زیرزمینی در جهان است. یک فسیل کنار چاه افتاده بود.' } },
    { clueAt: [41, 14], at: [43, 18], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east, then 4 steps south. Something is hidden there.', es: 'Desde esta nota, camina 2 pasos al este y luego 4 pasos al sur. Algo está escondido allí.', fa: 'از این یادداشت، ۲ قدم به شرق برو، بعد ۴ قدم به جنوب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! East is to the right and south is down. You walked along the ring of the atoll, next to the calm lagoon. A sea shell was in the sand.', es: '¡Seguiste las direcciones de la brújula! El este está a la derecha y el sur abajo. Caminaste por el anillo del atolón, junto a la laguna tranquila. Había una concha en la arena.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! شرق طرف راست و جنوب پایین است. تو روی حلقهٔ اتول، کنار آب آرام وسط آن، راه رفتی. یک صدف در ریگ بود.' } }
  ],
  // only the Canoe (Episode 2.3) paddles across the atoll's lagoon to the tiny island in the middle
  secret: { tool: 'canoe', at: [39, 16],
    text: { en: 'Your canoe crossed the calm lagoon to a tiny island! The note in the chest says the highest land in Tuvalu is less than 5 meters above the sea.',
      es: '¡Tu canoa cruzó la laguna tranquila hasta una isla pequeñita! La nota del cofre dice que la tierra más alta de Tuvalu está a menos de 5 metros sobre el mar.',
      fa: 'قایق کوچک تو از آب آرام وسط اتول گذشت و به یک جزیرهٔ خیلی کوچک رسید! یادداشت داخل صندوق می‌گوید بلندترین جای تووالو کمتر از ۵ متر از سطح بحر بلند است.' } },

  words: {
    coast: { en: 'the land along the edge of the sea', es: 'la tierra a la orilla del mar', fa: 'زمین کنار بحر' },
    outback: { en: 'the huge, dry middle of Australia, where very few people live', es: 'el enorme centro seco de Australia, donde vive muy poca gente', fa: 'میانهٔ بزرگ و خشک آسترالیا که مردم بسیار کم در آن زندگی می‌کنند' },
    harbor: { en: 'a calm place on the coast where ships can stop safely', es: 'un lugar tranquilo en la costa donde los barcos pueden parar seguros', fa: 'جای آرام در ساحل که کشتی‌ها می‌توانند با امنیت بایستند' },
    capital: { en: 'the city where a country\'s government works', es: 'la ciudad donde trabaja el gobierno de un país', fa: 'شهری که حکومت یک کشور در آن کار می‌کند' },
    export: { en: 'something a country sells to other countries', es: 'algo que un país vende a otros países', fa: 'چیزی که یک کشور به کشورهای دیگر می‌فروشد' },
    atoll: { en: 'a ring-shaped island or reef built around a sunken volcano, with a calm lagoon in the middle', es: 'una isla o arrecife en forma de anillo, construido alrededor de un volcán hundido, con una laguna tranquila en el medio', fa: 'جزیره یا صخرهٔ حلقه‌مانند که دور یک آتشفشان غرق‌شده ساخته شده و در وسطش آب آرام است' },
    'high island': { en: 'an island made by a volcano, with hills, streams and deep soil', es: 'una isla hecha por un volcán, con cerros, arroyos y tierra profunda', fa: 'جزیره‌ای که آتشفشان ساخته، با تپه، جوی و خاک عمیق' },
    'coral reef': { en: 'a long wall under the sea built by tiny animals called coral. Many fish live there', es: 'una larga pared bajo el mar construida por animales muy pequeños llamados corales. Allí viven muchos peces', fa: 'دیوار درازی زیر بحر که جانوران بسیار کوچک به نام مرجان آن را می‌سازند. ماهی‌های زیادی آنجا زندگی می‌کنند' },
    tourism: { en: 'the business of visitors who come to see a place and spend money there', es: 'el negocio de los visitantes que vienen a conocer un lugar y gastan dinero allí', fa: 'کار و بار مهمانانی که برای دیدن یک جا می‌آیند و آنجا پول خرج می‌کنند' },
    wayfinding: { en: 'finding your way across the ocean by reading the stars, waves, clouds and birds', es: 'encontrar el camino en el océano leyendo las estrellas, las olas, las nubes y los pájaros', fa: 'پیدا کردن راه در بحر با خواندن ستاره‌ها، موج‌ها، ابرها و پرنده‌ها' },
    remote: { en: 'very far away from other places and big cities', es: 'muy lejos de otros lugares y de las ciudades grandes', fa: 'بسیار دور از جاهای دیگر و شهرهای بزرگ' }
  },

  npcs: [
    {
      x: 21, y: 9,
      name: { en: 'Captain Chloe Tran', es: 'Capitana Chloe Tran', fa: 'کپتان کلوی ترَن' },
      role: { en: 'Harbor ferry captain', es: 'Capitana del ferry del puerto', fa: 'کپتان کشتی مسافربری بندر' },
      look: { skin: 1, hair: '#1b1410', shirt: '#2f6fd6', pants: '#22324f' },
      lines: [
        { en: 'Welcome to Harbor City! It is like Sydney, the biggest city in Australia. Sydney is built around a huge natural [[harbor|harbor]] on the [[coast|coast]]. Every day my ferry carries people to work across the water.',
          es: '¡Bienvenido a Ciudad del Puerto! Es como Sídney, la ciudad más grande de Australia. Sídney está construida alrededor de un enorme [[harbor|puerto]] natural en la [[coast|costa]]. Cada día mi ferry lleva gente al trabajo por el agua.',
          fa: 'به شهر بندر خوش آمدی! این شهر مثل سیدنی است، بزرگ‌ترین شهر آسترالیا. سیدنی دور یک [[harbor|بندر]] طبیعی بسیار بزرگ در [[coast|ساحل]] ساخته شده. هر روز کشتی من مردم را از روی آب به کار می‌برد.' },
        { en: 'More than 8 out of 10 Australians live near the coast. Why? The coast gets more rain. The middle of the country, the [[outback|Outback]], is very dry. Farming is hard there, so very few people live there.',
          es: 'Más de 8 de cada 10 australianos viven cerca de la costa. ¿Por qué? La costa recibe más lluvia. El centro del país, el [[outback|Outback]], es muy seco. Es difícil cultivar allí, así que vive muy poca gente.',
          fa: 'بیشتر از ۸ نفر از هر ۱۰ نفر آسترالیایی نزدیک ساحل زندگی می‌کنند. چرا؟ ساحل باران بیشتر دارد. میانهٔ کشور، یعنی [[outback|اوت‌بک]]، بسیار خشک است. دهقانی آنجا سخت است، پس مردم بسیار کم آنجا زندگی می‌کنند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Where do most Australians live?', es: '¿Dónde vive la mayoría de los australianos?', fa: 'بیشتر آسترالیایی‌ها کجا زندگی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'In cities near the coast', es: 'En ciudades cerca de la costa', fa: 'در شهرهای نزدیک ساحل' },
            why: { en: 'The coast gets more rain, so the big cities grew there.', es: 'La costa recibe más lluvia, por eso las ciudades grandes crecieron allí.', fa: 'ساحل باران بیشتر دارد، پس شهرهای بزرگ آنجا ساخته شدند.' } },
          { t: { en: 'In the middle of the Outback', es: 'En el centro del Outback', fa: 'در وسط اوت‌بک' },
            why: { en: 'The Outback is very dry. Only a few people live there.', es: 'El Outback es muy seco. Solo vive poca gente allí.', fa: 'اوت‌بک بسیار خشک است. فقط چند نفر آنجا زندگی می‌کنند.' } },
          { t: { en: 'On small islands far out at sea', es: 'En islas pequeñas lejos en el mar', fa: 'در جزیره‌های کوچک دور در بحر' },
            why: { en: 'Most Australians live on the mainland, in coastal cities.', es: 'La mayoría de los australianos vive en el continente, en ciudades de la costa.', fa: 'بیشتر آسترالیایی‌ها در خشکهٔ اصلی و در شهرهای ساحلی زندگی می‌کنند.' } }
        ]
      }
    },
    {
      x: 8, y: 7,
      name: { en: 'Ranger Jarrah Williams', es: 'Guardaparques Jarrah Williams', fa: 'محافظ پارک جَرا ویلیامز' },
      role: { en: 'Aboriginal park ranger', es: 'Guardaparques aborigen', fa: 'محافظ پارک از مردم بومی آسترالیا' },
      look: { skin: 5, hair: '#1b1410', shirt: '#7a8a3a', pants: '#5a4630', hat: '#6b4a2a' },
      lines: [
        { en: 'G\'day! I am a ranger. I look after this land with my community. That giant red rock is like Uluru. Aboriginal Australians have lived here for tens of thousands of years. Uluru is a sacred place, so visitors may not climb it.',
          es: '¡Hola! Soy guardaparques. Cuido esta tierra con mi comunidad. Esa enorme roca roja es como Uluru. Los aborígenes australianos han vivido aquí por decenas de miles de años. Uluru es un lugar sagrado, por eso los visitantes no pueden escalarlo.',
          fa: 'سلام! من محافظ پارک هستم. با مردم خود از این زمین مراقبت می‌کنم. آن سنگ سرخ بسیار بزرگ مثل اولورو است. مردم بومی آسترالیا ده‌ها هزار سال اینجا زندگی کرده‌اند. اولورو یک جای مقدس است، پس مهمانان اجازه ندارند از آن بالا شوند.' },
        { en: 'Australia is the driest continent where people live. Out here in the [[outback|Outback]], towns are small and [[remote|remote]]. A hospital can be hundreds of kilometers away. So doctors fly out to sick people in small planes.',
          es: 'Australia es el continente habitado más seco. Aquí en el [[outback|Outback]], los pueblos son pequeños y [[remote|remotos]]. Un hospital puede estar a cientos de kilómetros. Por eso los doctores vuelan a ver a los enfermos en avionetas.',
          fa: 'آسترالیا خشک‌ترین قاره‌ای است که مردم در آن زندگی می‌کنند. اینجا در [[outback|اوت‌بک]]، قریه‌ها کوچک و [[remote|دورافتاده]] هستند. شفاخانه شاید صدها کیلومتر دور باشد. برای همین داکترها با طیاره‌های کوچک نزد مریضان پرواز می‌کنند.' },
        { en: 'This dry land is still rich. Big mines in Western Australia dig iron ore. Ships carry it to steel mills in East Asia, mostly in China. Iron ore is one of Australia\'s biggest [[export|exports]].',
          es: 'Esta tierra seca igual es rica. Grandes minas en Australia Occidental sacan mineral de hierro. Los barcos lo llevan a fábricas de acero en Asia Oriental, sobre todo en China. El mineral de hierro es una de las mayores [[export|exportaciones]] de Australia.',
          fa: 'این زمین خشک باز هم ثروتمند است. معدن‌های بزرگ در غرب آسترالیا سنگ آهن بیرون می‌کشند. کشتی‌ها آن را به فابریکه‌های فولاد در آسیای شرقی، بیشتر در چین، می‌برند. سنگ آهن یکی از بزرگ‌ترین [[export|صادرات]] آسترالیا است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What is the Outback like?', es: '¿Cómo es el Outback?', fa: 'اوت‌بک چگونه است؟' },
        choices: [
          { ok: true, t: { en: 'Very dry, with few people and towns far apart', es: 'Muy seco, con poca gente y pueblos muy separados', fa: 'بسیار خشک، با مردم کم و قریه‌های دور از هم' },
            why: { en: 'Little rain falls there, so only small towns can grow.', es: 'Allí llueve poco, así que solo crecen pueblos pequeños.', fa: 'آنجا باران کم می‌بارد، پس فقط قریه‌های کوچک ساخته می‌شوند.' } },
          { t: { en: 'Wet and full of big crowded cities', es: 'Húmedo y lleno de ciudades grandes y llenas de gente', fa: 'مرطوب و پر از شهرهای بزرگ و پرجمعیت' },
            why: { en: 'The big cities are on the coast. The Outback is dry and empty.', es: 'Las ciudades grandes están en la costa. El Outback es seco y vacío.', fa: 'شهرهای بزرگ در ساحل هستند. اوت‌بک خشک و خالی است.' } },
          { t: { en: 'Covered in snow most of the year', es: 'Cubierto de nieve casi todo el año', fa: 'بیشتر سال پوشیده از برف' },
            why: { en: 'The Outback is hot and dry desert and scrub, not snow.', es: 'El Outback es desierto caliente y seco, con arbustos, no nieve.', fa: 'اوت‌بک ریگستان گرم و خشک با بوته‌ها است، نه برف.' } }
        ]
      }
    },
    {
      x: 36, y: 18,
      name: { en: 'Malia Teo', es: 'Malia Teo', fa: 'مالیا تئو' },
      role: { en: 'Reef scientist from Tuvalu', es: 'Científica del arrecife de Tuvalu', fa: 'دانشمند صخرهٔ مرجانی از تووالو' },
      look: { skin: 3, hair: '#1b1410', shirt: '#1aa39a', pants: '#2b4a6b' },
      lines: [
        { en: 'Talofa! My home is an [[atoll|atoll]], like the islands of Tuvalu. It is a ring of low coral land around a calm lagoon. The island you crossed is a [[high island|high island]]. A volcano made it, so it has hills and deep soil. Our soil is thin and sandy.',
          es: '¡Talofa! Mi hogar es un [[atoll|atolón]], como las islas de Tuvalu. Es un anillo de tierra baja de coral alrededor de una laguna tranquila. La isla que cruzaste es una [[high island|isla alta]]. La hizo un volcán, por eso tiene cerros y tierra profunda. Nuestra tierra es delgada y arenosa.',
          fa: 'تالوفا! خانهٔ من یک [[atoll|اتول]] است، مثل جزیره‌های تووالو. یک حلقه از زمین پست مرجانی دور یک آب آرام است. جزیره‌ای که از آن گذشتی یک [[high island|جزیرهٔ بلند]] است. آتشفشان آن را ساخته، پس تپه و خاک عمیق دارد. خاک ما نازک و ریگی است.' },
        { en: 'I study the [[coral reef|coral reef]]. Tiny animals called coral build it. The reef is a home for fish, and it breaks big waves before they hit land. But when the sea gets too warm, coral turns white and can die.',
          es: 'Yo estudio el [[coral reef|arrecife de coral]]. Lo construyen animales muy pequeños llamados corales. El arrecife es el hogar de los peces y rompe las olas grandes antes de que lleguen a la tierra. Pero cuando el mar se calienta demasiado, el coral se pone blanco y puede morir.',
          fa: 'من [[coral reef|صخرهٔ مرجانی]] را مطالعه می‌کنم. جانوران بسیار کوچکی به نام مرجان آن را می‌سازند. این صخره خانهٔ ماهی‌ها است و موج‌های بزرگ را پیش از رسیدن به خشکه می‌شکند. اما وقتی بحر بیش از حد گرم شود، مرجان سفید می‌شود و ممکن است بمیرد.' },
        { en: 'Rising seas are a real danger for atoll nations like Tuvalu and Kiribati. Our land is only a few meters above the waves. One strong storm can push salt water across the whole island. Our leaders ask bigger countries to help slow the rising seas.',
          es: 'El mar que sube es un peligro real para países de atolones como Tuvalu y Kiribati. Nuestra tierra está solo unos pocos metros sobre las olas. Una tormenta fuerte puede empujar agua salada por toda la isla. Nuestros líderes piden a los países más grandes que ayuden a frenar la subida del mar.',
          fa: 'بالا آمدن آب بحر برای کشورهای اتولی مثل تووالو و کیریباتی خطر واقعی است. زمین ما فقط چند متر بالاتر از موج‌ها است. یک توفان قوی می‌تواند آب شور را روی تمام جزیره ببرد. رهبران ما از کشورهای بزرگ‌تر می‌خواهند که در کند کردن بالا آمدن بحر کمک کنند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why are rising seas so dangerous for atoll nations like Tuvalu?', es: '¿Por qué el mar que sube es tan peligroso para países de atolones como Tuvalu?', fa: 'چرا بالا آمدن بحر برای کشورهای اتولی مثل تووالو این‌قدر خطرناک است؟' },
        choices: [
          { ok: true, t: { en: 'Their land sits only a few meters above the ocean', es: 'Su tierra está solo unos pocos metros sobre el océano', fa: 'زمین آن‌ها فقط چند متر بالاتر از بحر است' },
            why: { en: 'Low land floods easily. A little more sea can cover a lot of island.', es: 'La tierra baja se inunda fácilmente. Un poco más de mar puede cubrir mucha isla.', fa: 'زمین پست زود زیر آب می‌رود. کمی آب بیشتر بحر می‌تواند بخش بزرگی از جزیره را بپوشاند.' } },
          { t: { en: 'They are too far from the equator', es: 'Están demasiado lejos del ecuador', fa: 'آن‌ها از خط استوا بسیار دور هستند' },
            why: { en: 'Tuvalu is close to the equator. The danger is how low the land is.', es: 'Tuvalu está cerca del ecuador. El peligro es lo baja que es la tierra.', fa: 'تووالو نزدیک خط استوا است. خطر از پست بودن زمین است.' } },
          { t: { en: 'Their tall mountains block the rain', es: 'Sus montañas altas bloquean la lluvia', fa: 'کوه‌های بلند آن‌ها جلوی باران را می‌گیرند' },
            why: { en: 'Atolls have no mountains at all. They are flat and low.', es: 'Los atolones no tienen montañas. Son planos y bajos.', fa: 'اتول‌ها هیچ کوهی ندارند. هموار و پست هستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 27, y: 7, text: { en: 'HARBOR CITY · Sydney is Australia\'s biggest city, but it is not the [[capital|capital]]. The capital is Canberra, a planned city inland. Leaders chose it as a middle choice between the rival cities Sydney and Melbourne.',
      es: 'CIUDAD DEL PUERTO · Sídney es la ciudad más grande de Australia, pero no es la [[capital|capital]]. La capital es Canberra, una ciudad planeada tierra adentro. Los líderes la eligieron como punto medio entre las ciudades rivales Sídney y Melbourne.',
      fa: 'شهر بندر · سیدنی بزرگ‌ترین شهر آسترالیا است، اما [[capital|پایتخت]] نیست. پایتخت کانبرا است، یک شهر برنامه‌ریزی‌شده دور از ساحل. رهبران آن را به عنوان راه میانه بین دو شهر رقیب، سیدنی و ملبورن، انتخاب کردند.' } },
    { x: 40, y: 7, text: { en: 'READING THE OCEAN · Pacific islands are in three groups: Melanesia, Micronesia and Polynesia. Long ago, Pacific sailors crossed the ocean with no compass. They read the stars, waves, clouds and birds. This is called [[wayfinding|wayfinding]]. In 1976 the canoe Hōkūleʻa sailed about 2,400 miles (3,900 km) from Hawaii to Tahiti this way.',
      es: 'LEER EL OCÉANO · Las islas del Pacífico están en tres grupos: Melanesia, Micronesia y Polinesia. Hace mucho tiempo, los navegantes del Pacífico cruzaban el océano sin brújula. Leían las estrellas, las olas, las nubes y los pájaros. Esto se llama [[wayfinding|navegación tradicional]]. En 1976 la canoa Hōkūleʻa navegó unas 2,400 millas (3,900 km) de Hawái a Tahití de esta forma.',
      fa: 'خواندن بحر · جزیره‌های اقیانوس آرام سه گروه هستند: ملانزی، میکرونزی و پولینزی. در زمان‌های قدیم، ملاحان اقیانوس آرام بدون قطب‌نما از بحر می‌گذشتند. آن‌ها ستاره‌ها، موج‌ها، ابرها و پرنده‌ها را می‌خواندند. این را [[wayfinding|راه‌یابی]] می‌گویند. در سال ۱۹۷۶ قایق هوکوله این‌طور حدود ۳۹۰۰ کیلومتر از هاوایی تا تاهیتی رفت.' } }
  ],

  /* the quest: Dr. Priya Nair (gold !) -> Tess the cattle worker in the Outback town -> find the medicine bag by a landmark -> back to Priya */
  quest: {
    stat: 'mov',
    title: { en: 'The Flying Doctor\'s Bag', es: 'El maletín de la doctora voladora', fa: 'بکس داکتر پرنده' },
    giver: {
      x: 27, y: 9,
      name: { en: 'Dr. Priya Nair', es: 'Dra. Priya Nair', fa: 'داکتر پریا نایر' },
      role: { en: 'Flying Doctor', es: 'Doctora voladora', fa: 'داکتر پرنده' },
      look: { skin: 3, hair: '#1b1410', shirt: '#e8eef5', pants: '#2b3a5a', style: 'bun' },
      lines: [
        { en: 'Help! I am a Flying Doctor. I fly my small plane from Harbor City to sick people in the [[outback|Outback]]. Towns there are very far apart.',
          es: '¡Ayuda! Soy doctora voladora. Vuelo en mi avioneta desde Ciudad del Puerto para ver a enfermos en el [[outback|Outback]]. Allí los pueblos están muy lejos unos de otros.',
          fa: 'کمک! من داکتر پرنده هستم. با طیارهٔ کوچکم از شهر بندر نزد مریضان در [[outback|اوت‌بک]] پرواز می‌کنم. قریه‌های آنجا از هم بسیار دور هستند.' },
        { en: 'The Grump\'s wind shook my plane, and my medicine bag fell out! Tess saw where it landed. She is in the little Outback town, far to the south-west. Will you ask her?',
          es: '¡El viento del Gruñón sacudió mi avioneta y se cayó mi maletín de medicinas! Tess vio dónde cayó. Está en el pueblito del Outback, lejos hacia el suroeste. ¿Le preguntas?',
          fa: 'باد غرغرو طیاره‌ام را تکان داد و بکس دواهایم افتاد! تِس دید که کجا افتاد. او در قریهٔ کوچک اوت‌بک است، دور به طرف جنوب غرب. از او می‌پرسی؟' }
      ],
      wait: { en: 'Tess is in the little Outback town. Go west, then south. Look for the houses by the long road.',
        es: 'Tess está en el pueblito del Outback. Ve al oeste y luego al sur. Busca las casas junto al camino largo.',
        fa: 'تِس در قریهٔ کوچک اوت‌بک است. به غرب برو، بعد به جنوب. خانه‌های کنار سرک دراز را پیدا کن.' },
      thanks: { en: 'My bag! Now I can fly the medicine to a [[remote|remote]] farm. Out there, the nearest hospital is hundreds of kilometers away. Thank you!',
        es: '¡Mi maletín! Ahora puedo llevar las medicinas volando a una granja [[remote|remota]]. Allá, el hospital más cercano está a cientos de kilómetros. ¡Gracias!',
        fa: 'بکس من! حالا می‌توانم دواها را با طیاره به یک فارم [[remote|دورافتاده]] ببرم. آنجا نزدیک‌ترین شفاخانه صدها کیلومتر دور است. تشکر!' }
    },
    contact: {
      x: 4, y: 16,
      name: { en: 'Tess O\'Brien', es: 'Tess O\'Brien', fa: 'تِس اوبرایِن' },
      role: { en: 'Cattle station worker', es: 'Trabajadora de una estancia ganadera', fa: 'کارگر فارم گاوداری' },
      look: { skin: 0, hair: '#b5502a', shirt: '#4a7a9a', pants: '#5a4630', style: 'long', hat: '#8a6a3a' },
      lines: [
        { en: 'Yes, I saw the bag fall! Out here in the [[outback|Outback]], there are no street names. We give directions by big landmarks, like rocks and creeks.',
          es: '¡Sí, vi caer el maletín! Aquí en el [[outback|Outback]] no hay nombres de calles. Damos direcciones con lugares grandes que todos conocen, como rocas y arroyos.',
          fa: 'بله، دیدم که بکس افتاد! اینجا در [[outback|اوت‌بک]] نام سرک وجود ندارد. ما با نشانه‌های بزرگ، مثل سنگ‌ها و جوی‌ها، راه را نشان می‌دهیم.' },
        { en: 'Walk north to the big red rock. Go around to its north-east corner, at the top right. The bag is lying in the red sand there.',
          es: 'Camina al norte hasta la gran roca roja. Rodéala hasta su esquina noreste, arriba a la derecha. El maletín está allí, en la arena roja.',
          fa: 'به شمال تا سنگ سرخ بزرگ برو. دور آن تا گوشهٔ شمال شرقی‌اش برو، یعنی بالا طرف راست. بکس آنجا در ریگ سرخ افتاده است.' }
      ]
    },
    action: {
      type: 'find',
      at: [11, 3],
      hint: { en: 'north-east corner of the big red rock', es: 'esquina noreste de la gran roca roja', fa: 'گوشهٔ شمال شرقیِ سنگ سرخ بزرگ' },
      found: { en: 'There it is, in the red sand by the rock! You found it with a landmark and a direction. No address needed.',
        es: '¡Ahí está, en la arena roja junto a la roca! Lo encontraste con un lugar conocido y un punto cardinal. No necesitaste ninguna dirección de calle.',
        fa: 'آنجاست، در ریگ سرخ کنار سنگ! تو آن را با یک نشانه و یک جهت پیدا کردی. به آدرس هیچ ضرورت نبود.' },
      item: { icon: '🩺', name: { en: 'The medicine bag', es: 'El maletín de medicinas', fa: 'بکس دواها' } }
    }
  },

  scraps: [[1, 1], [44, 16], [28, 1]],
  smudges: [[6, 19], [20, 13], [8, 3]],

  challenge: {
    at: [10, 17],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per place in the table: Sydney on the harbor coast, Alice Springs deep in the dry Outback, Fiji on the high volcano island, Tuvalu on the far side of the low atoll
    spots: [[28, 12], [4, 10], [43, 3], [41, 19]],
    stat: 'loc',
    title: { en: 'Near or far?', es: '¿Cerca o lejos?', fa: 'نزدیک یا دور؟' },
    intro: { en: 'The Grump smeared the travel notes of this town. Read the table about four real places. Then answer the questions.',
      es: 'El Gruñón manchó las notas de viaje de este pueblo. Lee la tabla sobre cuatro lugares reales. Luego responde las preguntas.',
      fa: 'غرغرو یادداشت‌های سفر این قریه را خراب کرد. جدول دربارهٔ چهار جای واقعی را بخوان. بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Place', es: 'Lugar', fa: 'جا' },
        { en: 'Coast or inland?', es: '¿Costa o interior?', fa: 'ساحل یا داخل خشکه؟' },
        { en: 'People (about)', es: 'Habitantes (aprox.)', fa: 'نفوس (تقریباً)' },
        { en: 'Rain in a year (about)', es: 'Lluvia al año (aprox.)', fa: 'باران در یک سال (تقریباً)' },
        { en: 'Distance from Sydney (about)', es: 'Distancia desde Sídney (aprox.)', fa: 'فاصله از سیدنی (تقریباً)' }
      ],
      rows: [
        [ { en: 'Sydney, Australia', es: 'Sídney, Australia', fa: 'سیدنی، آسترالیا' }, { en: 'Coast', es: 'Costa', fa: 'ساحل' }, { en: '5 million', es: '5 millones', fa: '۵ میلیون' }, { en: '1,200 mm', es: '1,200 mm', fa: '۱۲۰۰ ملی‌متر' }, { en: '0 (start here)', es: '0 (empieza aquí)', fa: '۰ (از اینجا شروع کن)' } ],
        [ { en: 'Alice Springs, Australia', es: 'Alice Springs, Australia', fa: 'الیس اسپرینگز، آسترالیا' }, { en: 'Inland (Outback)', es: 'Interior (Outback)', fa: 'داخل خشکه (اوت‌بک)' }, { en: '25,000', es: '25,000', fa: '۲۵ هزار' }, { en: '300 mm', es: '300 mm', fa: '۳۰۰ ملی‌متر' }, { en: '2,000 km', es: '2,000 km', fa: '۲۰۰۰ کیلومتر' } ],
        [ { en: 'Fiji (high islands)', es: 'Fiyi (islas altas)', fa: 'فیجی (جزیره‌های بلند)' }, { en: 'Islands in the ocean', es: 'Islas en el océano', fa: 'جزیره در بحر' }, { en: '900,000', es: '900,000', fa: '۹۰۰ هزار' }, { en: '3,000 mm', es: '3,000 mm', fa: '۳۰۰۰ ملی‌متر' }, { en: '3,200 km', es: '3,200 km', fa: '۳۲۰۰ کیلومتر' } ],
        [ { en: 'Tuvalu (atolls)', es: 'Tuvalu (atolones)', fa: 'تووالو (اتول‌ها)' }, { en: 'Islands in the ocean', es: 'Islas en el océano', fa: 'جزیره در بحر' }, { en: '11,000', es: '11,000', fa: '۱۱ هزار' }, { en: '3,500 mm', es: '3,500 mm', fa: '۳۵۰۰ ملی‌متر' }, { en: '4,000 km', es: '4,000 km', fa: '۴۰۰۰ کیلومتر' } ]
      ],
      note: { en: 'Numbers are rounded. Rain for Fiji is in the capital, Suva. Rain for Tuvalu is on Funafuti. Distances are straight lines on the map.',
        es: 'Los números están redondeados. La lluvia de Fiyi es de la capital, Suva. La lluvia de Tuvalu es de Funafuti. Las distancias son líneas rectas en el mapa.',
        fa: 'عددها گرد شده‌اند. باران فیجی از پایتخت آن، سووا، است. باران تووالو از فونافوتی است. فاصله‌ها خط راست روی نقشه هستند.' }
    },
    questions: [
      { q: { en: 'Which place gets the least rain?', es: '¿Qué lugar recibe menos lluvia?', fa: 'کدام جا کمترین باران را دارد؟' },
        choices: [{ en: 'Alice Springs', es: 'Alice Springs', fa: 'الیس اسپرینگز' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }, { en: 'Fiji', es: 'Fiyi', fa: 'فیجی' }, { en: 'Tuvalu', es: 'Tuvalu', fa: 'تووالو' }], answer: 0,
        why: { en: 'About 300 mm is the smallest number. Alice Springs is in the dry Outback.', es: 'Unos 300 mm es el número más pequeño. Alice Springs está en el Outback seco.', fa: 'حدود ۳۰۰ ملی‌متر کوچک‌ترین عدد است. الیس اسپرینگز در اوت‌بک خشک است.' } },
      { q: { en: 'Sydney has far more people than Alice Springs. Which facts in the table help explain why?', es: 'Sídney tiene muchos más habitantes que Alice Springs. ¿Qué datos de la tabla ayudan a explicar por qué?', fa: 'سیدنی خیلی بیشتر از الیس اسپرینگز نفوس دارد. کدام معلومات جدول دلیلش را نشان می‌دهد؟' },
        choices: [{ en: 'Sydney is on the coast and gets about 4 times more rain', es: 'Sídney está en la costa y recibe unas 4 veces más lluvia', fa: 'سیدنی در ساحل است و حدود ۴ برابر باران بیشتر دارد' }, { en: 'Sydney is far from the ocean', es: 'Sídney está lejos del océano', fa: 'سیدنی از بحر دور است' }, { en: 'Alice Springs gets more rain than Sydney', es: 'Alice Springs recibe más lluvia que Sídney', fa: 'الیس اسپرینگز از سیدنی باران بیشتر دارد' }, { en: 'Alice Springs is an island', es: 'Alice Springs es una isla', fa: 'الیس اسپرینگز یک جزیره است' }], answer: 0,
        why: { en: 'Water and the coast pull people in. 1,200 mm is about 4 times 300 mm.', es: 'El agua y la costa atraen a la gente. 1,200 mm es unas 4 veces 300 mm.', fa: 'آب و ساحل مردم را جذب می‌کند. ۱۲۰۰ ملی‌متر حدود ۴ برابر ۳۰۰ ملی‌متر است.' } },
      { q: { en: 'Which place is the farthest from Sydney and has the fewest people?', es: '¿Qué lugar está más lejos de Sídney y tiene menos habitantes?', fa: 'کدام جا از سیدنی دورتر است و کمترین نفوس را دارد؟' },
        choices: [{ en: 'Tuvalu', es: 'Tuvalu', fa: 'تووالو' }, { en: 'Fiji', es: 'Fiyi', fa: 'فیجی' }, { en: 'Alice Springs', es: 'Alice Springs', fa: 'الیس اسپرینگز' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }], answer: 0,
        why: { en: 'Tuvalu is about 4,000 km away and has only about 11,000 people.', es: 'Tuvalu está a unos 4,000 km y tiene solo unos 11,000 habitantes.', fa: 'تووالو حدود ۴۰۰۰ کیلومتر دور است و فقط حدود ۱۱ هزار نفوس دارد.' } },
      { q: { en: 'A ship carries rice and fuel from Sydney to a store in Tuvalu. Why will these goods likely cost more there?', es: 'Un barco lleva arroz y combustible de Sídney a una tienda en Tuvalu. ¿Por qué estas cosas probablemente costarán más allí?', fa: 'یک کشتی برنج و تیل را از سیدنی به یک دکان در تووالو می‌برد. چرا این چیزها احتمالاً آنجا گران‌تر هستند؟' },
        choices: [{ en: 'The ship travels very far for a small load', es: 'El barco viaja muy lejos para llevar una carga pequeña', fa: 'کشتی برای یک بار کوچک راه بسیار دور می‌رود' }, { en: 'Tuvalu gets too little rain', es: 'En Tuvalu llueve muy poco', fa: 'تووالو باران بسیار کم دارد' }, { en: 'Tuvalu has more people than Sydney', es: 'Tuvalu tiene más habitantes que Sídney', fa: 'تووالو از سیدنی نفوس بیشتر دارد' }, { en: 'Stores in Tuvalu are inland', es: 'Las tiendas de Tuvalu están en el interior', fa: 'دکان‌های تووالو داخل خشکه هستند' }], answer: 0,
        why: { en: 'Distance costs money. A long trip for a few buyers makes each thing cost more.', es: 'La distancia cuesta dinero. Un viaje largo para pocos compradores hace que cada cosa cueste más.', fa: 'فاصله پول می‌خواهد. یک سفر دراز برای خریداران کم، هر چیز را گران‌تر می‌کند.' } }
    ],
    success: { en: 'The travel notes are clear again! Water and distance shape where people live in this realm.', es: '¡Las notas de viaje están claras otra vez! El agua y la distancia deciden dónde vive la gente en este reino.', fa: 'یادداشت‌های سفر دوباره روشن شدند! آب و فاصله تعیین می‌کنند که مردم در این سرزمین کجا زندگی کنند.' }
  },

  boss: {
    at: [41, 6],
    stat: 'pla',
    need: 3,
    name: { en: 'The Tide Grump', es: 'El Gruñón de la Marea', fa: 'غرغروی مد بحر' },
    appear: { en: 'The Tide Grump is hiding on the high island across the long dock!', es: '¡El Gruñón de la Marea se esconde en la isla alta, al otro lado del muelle largo!', fa: 'غرغروی مد بحر در جزیرهٔ بلند، آن طرف اسکلهٔ دراز، پنهان است!' },
    taunt: { en: 'Splash! I washed away the map of the Pacific. Islands, reefs, deserts... who can tell them apart now?', es: '¡Splash! Borré el mapa del Pacífico con agua. Islas, arrecifes, desiertos... ¿quién puede distinguirlos ahora?', fa: 'شَلَپ! نقشهٔ اقیانوس آرام را با آب شستم. جزیره‌ها، صخره‌ها، ریگستان‌ها... حالا کی می‌تواند آن‌ها را از هم جدا کند؟' },
    win: { en: 'The tide goes out. Atlas page 8.1 floats up from the water and into your hands!', es: 'La marea baja. ¡La página 8.1 del atlas sale del agua y llega a tus manos!', fa: 'آب بحر پس می‌رود. صفحهٔ ۸.۱ اطلس از آب بیرون می‌آید و به دستت می‌رسد!' },
    questions: [
      { q: { en: 'What is an atoll?', es: '¿Qué es un atolón?', fa: 'اتول چیست؟' },
        choices: [{ en: 'A ring-shaped island or reef built around a sunken volcano', es: 'Una isla o arrecife en forma de anillo alrededor de un volcán hundido', fa: 'جزیره یا صخرهٔ حلقه‌مانند دور یک آتشفشان غرق‌شده' }, { en: 'A tall volcano rising straight out of the sea', es: 'Un volcán alto que sale directo del mar', fa: 'آتشفشان بلندی که مستقیم از بحر بالا آمده' }, { en: 'A deep channel between two islands', es: 'Un canal profundo entre dos islas', fa: 'یک آبراه عمیق بین دو جزیره' }, { en: 'A dry plain in the middle of a continent', es: 'Una llanura seca en el centro de un continente', fa: 'یک دشت خشک در وسط یک قاره' }], answer: 0,
        why: { en: 'An atoll is a low ring of coral land with a calm lagoon in the middle.', es: 'Un atolón es un anillo bajo de tierra de coral con una laguna tranquila en el medio.', fa: 'اتول یک حلقهٔ پست از زمین مرجانی است که در وسطش آب آرام است.' } },
      { q: { en: 'What are the three groups of Pacific islands called?', es: '¿Cómo se llaman los tres grupos de islas del Pacífico?', fa: 'سه گروه جزیره‌های اقیانوس آرام چه نام دارند؟' },
        choices: [{ en: 'Melanesia, Micronesia and Polynesia', es: 'Melanesia, Micronesia y Polinesia', fa: 'ملانزی، میکرونزی و پولینزی' }, { en: 'Indonesia, Micronesia and Australia', es: 'Indonesia, Micronesia y Australia', fa: 'اندونزیا، میکرونزی و آسترالیا' }, { en: 'Polynesia, Tasmania and Melanesia', es: 'Polinesia, Tasmania y Melanesia', fa: 'پولینزی، تاسمانیا و ملانزی' }, { en: 'Hawaii, Fiji and Papua New Guinea', es: 'Hawái, Fiyi y Papúa Nueva Guinea', fa: 'هاوایی، فیجی و پاپوا گینهٔ نو' }], answer: 0,
        why: { en: 'Melanesia is in the southwest, Micronesia is to the north, and Polynesia is a huge triangle from Hawaii to New Zealand.', es: 'Melanesia está al suroeste, Micronesia al norte y Polinesia es un enorme triángulo de Hawái a Nueva Zelanda.', fa: 'ملانزی در جنوب غرب، میکرونزی در شمال و پولینزی یک مثلث بزرگ از هاوایی تا زیلاند نو است.' } },
      { q: { en: 'Australia is the ___ continent where people live.', es: 'Australia es el continente habitado más ___.', fa: 'آسترالیا ___ قاره‌ای است که مردم در آن زندگی می‌کنند.' },
        choices: [{ en: 'driest', es: 'seco', fa: 'خشک‌ترین' }, { en: 'wettest', es: 'lluvioso', fa: 'مرطوب‌ترین' }, { en: 'coldest', es: 'frío', fa: 'سردترین' }, { en: 'most crowded', es: 'poblado', fa: 'پرجمعیت‌ترین' }], answer: 0,
        why: { en: 'Much of the middle of Australia gets very little rain most years.', es: 'Gran parte del centro de Australia recibe muy poca lluvia casi todos los años.', fa: 'بخش بزرگی از میانهٔ آسترالیا بیشتر سال‌ها باران بسیار کم دارد.' } },
      { q: { en: 'How is a high island different from a low island?', es: '¿En qué se diferencia una isla alta de una isla baja?', fa: 'جزیرهٔ بلند با جزیرهٔ پست چه فرقی دارد؟' },
        choices: [{ en: 'A volcano built it, so it has hills, streams and deep soil', es: 'La hizo un volcán, así que tiene cerros, arroyos y tierra profunda', fa: 'آتشفشان آن را ساخته، پس تپه، جوی و خاک عمیق دارد' }, { en: 'It always has more tourists', es: 'Siempre tiene más turistas', fa: 'همیشه سیاحان بیشتر دارد' }, { en: 'It sits closer to the equator', es: 'Está más cerca del ecuador', fa: 'به خط استوا نزدیک‌تر است' }, { en: 'It sits farther north', es: 'Está más al norte', fa: 'بیشتر به طرف شمال است' }], answer: 0,
        why: { en: 'High islands come from volcanoes. Low islands, like atolls, have thin sandy soil and few streams.', es: 'Las islas altas vienen de volcanes. Las islas bajas, como los atolones, tienen tierra delgada y arenosa y pocos arroyos.', fa: 'جزیره‌های بلند از آتشفشان ساخته می‌شوند. جزیره‌های پست، مثل اتول‌ها، خاک نازک ریگی و جوی‌های کم دارند.' } },
      { q: { en: 'Which city is Australia\'s capital?', es: '¿Cuál es la capital de Australia?', fa: 'پایتخت آسترالیا کدام شهر است؟' },
        choices: [{ en: 'Canberra', es: 'Canberra', fa: 'کانبرا' }, { en: 'Sydney', es: 'Sídney', fa: 'سیدنی' }, { en: 'Melbourne', es: 'Melbourne', fa: 'ملبورن' }, { en: 'Perth', es: 'Perth', fa: 'پرت' }], answer: 0,
        why: { en: 'Sydney is the biggest city, but Canberra, a planned inland city, is the capital.', es: 'Sídney es la ciudad más grande, pero Canberra, una ciudad planeada en el interior, es la capital.', fa: 'سیدنی بزرگ‌ترین شهر است، اما کانبرا، یک شهر برنامه‌ریزی‌شده در داخل خشکه، پایتخت است.' } },
      { q: { en: 'Where does most of Australia\'s iron ore go?', es: '¿A dónde va la mayor parte del mineral de hierro de Australia?', fa: 'بیشتر سنگ آهن آسترالیا به کجا می‌رود؟' },
        choices: [{ en: 'To steel mills in East Asia, mostly China', es: 'A fábricas de acero en Asia Oriental, sobre todo China', fa: 'به فابریکه‌های فولاد در آسیای شرقی، بیشتر چین' }, { en: 'To countries in Europe', es: 'A países de Europa', fa: 'به کشورهای اروپا' }, { en: 'It all stays in the Outback', es: 'Todo se queda en el Outback', fa: 'همه‌اش در اوت‌بک می‌ماند' }, { en: 'To small Pacific islands', es: 'A pequeñas islas del Pacífico', fa: 'به جزیره‌های کوچک اقیانوس آرام' }], answer: 0,
        why: { en: 'Ships carry iron ore across the ocean to East Asia. China buys much of it to make steel.', es: 'Los barcos llevan el mineral de hierro por el océano a Asia Oriental. China compra mucho para hacer acero.', fa: 'کشتی‌ها سنگ آهن را از بحر به آسیای شرقی می‌برند. چین بخش زیادی از آن را برای ساختن فولاد می‌خرد.' } },
      { q: { en: 'Many Pacific islands sell just one or two things, like fish or dried coconut. Why is that a risk?', es: 'Muchas islas del Pacífico venden solo una o dos cosas, como pescado o coco seco. ¿Por qué es un riesgo?', fa: 'بسیاری از جزیره‌های اقیانوس آرام فقط یک یا دو چیز می‌فروشند، مثل ماهی یا نارگیل خشک. چرا این خطر دارد؟' },
        choices: [{ en: 'If the price of that one thing drops, the whole island feels it', es: 'Si baja el precio de esa cosa, toda la isla lo siente', fa: 'اگر قیمت همان یک چیز پایین بیاید، تمام جزیره ضرر می‌بیند' }, { en: 'One product is harder to load onto a ship', es: 'Un solo producto es más difícil de subir a un barco', fa: 'بار کردن یک جنس در کشتی سخت‌تر است' }, { en: 'Buyers get bored of the same product', es: 'Los compradores se aburren del mismo producto', fa: 'خریداران از یک جنس خسته می‌شوند' }, { en: 'Fish cannot travel on ships', es: 'El pescado no puede viajar en barco', fa: 'ماهی را نمی‌شود با کشتی برد' }], answer: 0,
        why: { en: 'When an island depends on one thing, a low price means many people lose money. That is why many islands also turn to [[tourism|tourism]].', es: 'Cuando una isla depende de una sola cosa, un precio bajo hace que mucha gente pierda dinero. Por eso muchas islas también recurren al [[tourism|turismo]].', fa: 'وقتی یک جزیره به یک چیز وابسته است، قیمت پایین یعنی بسیاری از مردم پول از دست می‌دهند. برای همین بسیاری از جزیره‌ها به [[tourism|سیاحت]] هم رو می‌آورند.' } },
      { q: { en: 'How did Pacific sailors cross the ocean long ago, with no compass?', es: '¿Cómo cruzaban el océano los navegantes del Pacífico hace mucho tiempo, sin brújula?', fa: 'ملاحان اقیانوس آرام در زمان‌های قدیم بدون قطب‌نما چطور از بحر می‌گذشتند؟' },
        choices: [{ en: 'They read the stars, waves, clouds and birds', es: 'Leían las estrellas, las olas, las nubes y los pájaros', fa: 'ستاره‌ها، موج‌ها، ابرها و پرنده‌ها را می‌خواندند' }, { en: 'They followed roads on the sea floor', es: 'Seguían caminos en el fondo del mar', fa: 'سرک‌های کف بحر را دنبال می‌کردند' }, { en: 'They only sailed where they could see land', es: 'Solo navegaban donde podían ver tierra', fa: 'فقط جایی می‌رفتند که خشکه را می‌دیدند' }, { en: 'They waited for a big ship to pull them', es: 'Esperaban que un barco grande los jalara', fa: 'منتظر می‌ماندند تا کشتی بزرگی آن‌ها را بکشد' }], answer: 0,
        why: { en: 'That skill is called [[wayfinding|wayfinding]]. The canoe Hōkūleʻa used it to sail from Hawaii to Tahiti in 1976.', es: 'Esa habilidad se llama [[wayfinding|navegación tradicional]]. La canoa Hōkūleʻa la usó para ir de Hawái a Tahití en 1976.', fa: 'این مهارت [[wayfinding|راه‌یابی]] نام دارد. قایق هوکوله در سال ۱۹۷۶ با آن از هاوایی تا تاهیتی رفت.' } }
    ]
  },

  learned: [
    { en: 'Most Australians live in cities on the rainy [[coast|coast]]. The dry [[outback|Outback]] in the middle has few people and [[remote|remote]] towns.', es: 'La mayoría de los australianos vive en ciudades de la [[coast|costa]] lluviosa. El [[outback|Outback]] seco del centro tiene poca gente y pueblos [[remote|remotos]].', fa: 'بیشتر آسترالیایی‌ها در شهرهای [[coast|ساحل]] پرباران زندگی می‌کنند. [[outback|اوت‌بک]] خشک در میانه مردم کم و قریه‌های [[remote|دورافتاده]] دارد.' },
    { en: 'A [[high island|high island]] is made by a volcano. An [[atoll|atoll]] is a low ring of coral, so rising seas are a real danger there.', es: 'Una [[high island|isla alta]] la hace un volcán. Un [[atoll|atolón]] es un anillo bajo de coral, por eso el mar que sube es un peligro real allí.', fa: '[[high island|جزیرهٔ بلند]] را آتشفشان می‌سازد. [[atoll|اتول]] یک حلقهٔ پست مرجانی است، پس بالا آمدن بحر آنجا خطر واقعی است.' },
    { en: 'Pacific islands are far apart. Distance makes goods cost more, and the ocean shapes jobs like fishing, [[tourism|tourism]] and shipping.', es: 'Las islas del Pacífico están muy lejos unas de otras. La distancia hace que las cosas cuesten más, y el océano da forma a trabajos como la pesca, el [[tourism|turismo]] y el transporte en barco.', fa: 'جزیره‌های اقیانوس آرام از هم دور هستند. فاصله اجناس را گران‌تر می‌کند و بحر کارهایی مثل ماهیگیری، [[tourism|سیاحت]] و کشتیرانی را شکل می‌دهد.' }
  ],
  reflect: {
    q: { en: 'Water and distance shape life in Australia and the Pacific. How do water or distance shape life where you live, or where your family comes from?', es: 'El agua y la distancia dan forma a la vida en Australia y el Pacífico. ¿Cómo dan forma el agua o la distancia a la vida donde vives, o de donde viene tu familia?', fa: 'آب و فاصله زندگی را در آسترالیا و اقیانوس آرام شکل می‌دهند. آب یا فاصله چطور زندگی را در جایی که تو زندگی می‌کنی، یا جایی که خانواده‌ات از آنجا آمده، شکل می‌دهد؟' },
    starter: { en: 'Where I live, water or distance changes life because', es: 'Donde vivo, el agua o la distancia cambian la vida porque', fa: 'در جایی که من زندگی می‌کنم، آب یا فاصله زندگی را تغییر می‌دهد، چون' }
  }
};
