/* WORLDWALKER · Episode 6.2 · Southeast Asia — Mainland, Islands and the Ring of Fire (WG.9)
   Top-left: the mainland — the Mekong River runs south through rice paddies to the sea.
   A wooden walkway leads east to a small island; long bridges lead south to two volcanic islands
   with rice terraces (t) cut into the slopes, villages and fishing docks. Water separates every island. */
window.EPISODE = {
  id: '6.2',
  realm: 6,
  sol: 'WG.9',
  title: { en: 'Southeast Asia: Islands and the Ring of Fire', es: 'Sudeste asiático: islas y el Cinturón de Fuego', fa: 'جنوب شرق آسیا: جزیره‌ها و حلقهٔ آتش' },
  place: { en: 'The Mekong and the Islands', es: 'El Mekong y las islas', fa: 'میکانگ و جزیره‌ها' },
  intro: [
    { en: 'The Quake Grump shakes the islands! Meet the boat seller, rice farmer and volcano watcher.', es: '¡El Gruñón Temblor sacude las islas! Habla con la vendedora del bote, la agricultora de arroz y el vigilante del volcán.', fa: 'غرغروی زلزله جزیره‌ها را تکان می‌دهد! با فروشندهٔ قایق، دهقان برنج و نگهبان آتشفشان گپ بزن.' },
    { en: 'Then fix the compass stone on the little island.', es: 'Luego arregla la piedra de la brújula en la islita.', fa: 'بعد سنگ قطب‌نما را در جزیرهٔ کوچک درست کن.' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Top-left: mainland Southeast Asia (jungle j, rice q, the Mekong ~ running south to the sea).
     Top-right: open sea with a small island, reached by a wooden walkway (k), and a tiny islet.
     Bottom: two volcanic islands (V) with terraces (t) on their slopes, joined by a bridge (b);
     long north-south bridges (B) cross the water from the mainland and from the small island. */
  map: [
    'jjjjjjj~~jjjjj~~================',
    'jMM..qq~~qq..ps~=~~~~~~~~~~~~~~=',
    'jM..qqq~~qqq..s~=~~~psssp~~~s~~=',
    'j.RRR.q~~q.QQQs~=~~sss,ssp~~~~~=',
    'j.hdh..bb..hdhskkkkks,,.,ss~~~~=',
    'jj....q~~q....s~=~~ss,.,sskksp~=',
    'j,qqqqq~~qqqqqs~=~~~sps.ss~~ss~=',
    'jTqqqqq~~qqqqps~=~~~~ssss~~~~~~=',
    'jpT....~~...xss~=~~~~~~B~~~~~~~=',
    'pssss~~~~~~ssps~=~~~~~~B~~~~~~~=',
    '~~~~B~~~~~~~~~~~=~~~~~~B~~~~~~~=',
    '~~~~B~~~~~~~~~~~~~~~~~~B~~~~~~~=',
    '~psssssssssp~~~~~~~~psssssp~~~~=',
    '~sttMMVMMtts~~~~~~~ssMMVMMss~~~=',
    '~stttMMMttts~~~~~~psMMMMMMMsp~~=',
    '~s.tttttttt.s~~~~~stttMMMttts~~=',
    '~s.qqq:qqqqTsbbbbbss..ttt...ss~=',
    '~sRRR.:.QQQ.s~~~~~s.RRR..QQQ.s~=',
    '~shdh.:.hdh.s~~~~~s.hdh.xhdh.s~=',
    '~pss..:...ssp~~~~~ps.....O...p~=',
    '~~psssssssp~~~~~~~~kkspssspskk~=',
    '================================'
  ],
  start: [3, 2],

  tools: ['axe', 'sickle'],
  /* build: a new home on the island, on the safe south coast, far from the volcano (the Ring of Fire) */
  build: [
    { id: 'home', kind: 'place', board: [5, 20], tile: 'h', ok: [[7, 19, 'R'], [8, 19, 'R'], [7, 20], [8, 20]], cost: { wood: 1 },
      name: { en: 'A safe home on the island', es: 'Una casa segura en la isla', fa: 'یک خانهٔ امن در جزیره' },
      ask: { en: 'This island is on the [[ring of fire|Ring of Fire]]. The ash from the volcano makes the soil [[fertile|fertile]], so farmers grow rice on its slopes. But people build their homes far from the volcano. Build a new home on the south coast, next to the village, on the sand by the sea. Roof on top, walls below.',
        es: 'Esta isla está en el [[ring of fire|Cinturón de Fuego]]. La ceniza del volcán hace que la tierra sea [[fertile|fértil]], y por eso se cultiva arroz en sus laderas. Pero la gente construye sus casas lejos del volcán. Construye una casa nueva en la costa sur, junto al pueblo, en la arena al lado del mar. El techo arriba y las paredes abajo.',
        fa: 'این جزیره روی [[ring of fire|حلقهٔ آتش]] است. خاکستر آتشفشان خاک را [[fertile|حاصل‌خیز]] می‌سازد، پس دهقانان روی دامنه‌های آن برنج می‌کارند. اما مردم خانه‌های خود را دور از آتشفشان می‌سازند. یک خانهٔ نو در ساحل جنوب، کنار قریه، روی ریگ کنار بحر بساز. بام بالا، دیوارها پایین.' },
      why: { en: 'Good: far from the volcano, next to the village and the sea.', es: 'Bien: lejos del volcán, junto al pueblo y el mar.', fa: 'خوب: دور از آتشفشان، کنار قریه و بحر.' },
      wrong: { en: 'Not here. The new home goes on the south coast of the island, on the sand next to the village, far from the volcano.', es: 'Aquí no. La casa nueva va en la costa sur de la isla, en la arena junto al pueblo, lejos del volcán.', fa: 'این جا نه. خانهٔ نو در ساحل جنوب جزیره، روی ریگ کنار قریه، دور از آتشفشان می‌رود.' },
      wrongBy: [
        { x: 2, y: 13, w: 9, h: 3, t: { en: 'Too close to the volcano! Lava and ash reach here. Farms can be on the slopes, but homes go far away.', es: '¡Muy cerca del volcán! La lava y la ceniza llegan hasta aquí. Puede haber cultivos en las laderas, pero las casas van lejos.', fa: 'به آتشفشان خیلی نزدیک است! لاوا و خاکستر تا این جا می‌رسند. کشت می‌تواند روی دامنه باشد، اما خانه‌ها دور می‌روند.' } },
        { x: 19, y: 13, w: 10, h: 3, t: { en: 'Too close to the volcano! Lava and ash reach here. Farms can be on the slopes, but homes go far away.', es: '¡Muy cerca del volcán! La lava y la ceniza llegan hasta aquí. Puede haber cultivos en las laderas, pero las casas van lejos.', fa: 'به آتشفشان خیلی نزدیک است! لاوا و خاکستر تا این جا می‌رسند. کشت می‌تواند روی دامنه باشد، اما خانه‌ها دور می‌روند.' } }
      ],
      done: { en: 'The new home is safe, far from the volcano. Millions of people live on the Ring of Fire. The ash makes rich soil, but people must live a safe distance away.',
        es: 'La casa nueva está segura, lejos del volcán. Millones de personas viven en el Cinturón de Fuego. La ceniza da tierra rica, pero la gente debe vivir a una distancia segura.',
        fa: 'خانهٔ نو امن است، دور از آتشفشان. میلیون‌ها نفر روی حلقهٔ آتش زندگی می‌کنند. خاکستر خاک پرمایه می‌سازد، اما مردم باید در فاصلهٔ امن زندگی کنند.' } }
  ],
  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 9], at: [6, 8], decor: 'drum',
      clue: { en: 'From this note, walk 1 step north, then 4 steps east. You will reach the bank of the Mekong River.', es: 'Desde esta nota, camina 1 paso al norte y luego 4 pasos al este. Llegarás a la orilla del río Mekong.', fa: 'از این یادداشت، ۱ قدم به شمال برو، بعد ۴ قدم به شرق. به کنار دریای میکانگ می‌رسی.' },
      text: { en: 'You followed the compass! Over 2,000 years ago, people in Vietnam made bronze drums like this one.', es: '¡Seguiste la brújula! Hace más de 2,000 años, la gente de Vietnam hacía tambores de bronce como este.', fa: 'تو قطب‌نما را دنبال کردی! بیش از ۲۰۰۰ سال پیش، مردم ویتنام دهل‌های برنجی مثل این می‌ساختند.' } },
    { clueAt: [2, 12], at: [6, 15], decor: 'gem',
      clue: { en: 'Farmers grow rice on the volcano\'s slopes. Stand on the terrace square straight south of its peak.', es: 'Los agricultores cultivan arroz en las laderas del volcán. Párate en el cuadro de terraza justo al sur de su cima.', fa: 'دهقانان در دامنهٔ آتشفشان برنج می‌کارند. روی خانهٔ زینه‌ای بایست که درست جنوبِ قلهٔ آن است.' },
      text: { en: 'Volcanic ash makes rich soil, so Java\'s farmers grow rice on the slopes. A shiny volcano stone was here!', es: 'La ceniza volcánica da suelo rico, por eso los agricultores de Java cultivan arroz en las laderas. ¡Aquí había una piedra brillante del volcán!', fa: 'خاکستر آتشفشان خاک پربار می‌سازد، پس دهقانان جاوه در دامنه‌ها برنج می‌کارند. یک سنگ براق آتشفشان این‌جا بود!' } }
  ],
  // only the canoe (Episode 2.3) reaches the tiny island in the northeast sea
  secret: { tool: 'canoe', at: [28, 2],
    text: { en: 'The canoe found the tiny island! Indonesia has more active volcanoes than any other country, about 130 of them.',
      es: '¡La canoa encontró la islita! Indonesia tiene más volcanes activos que cualquier otro país, unos 130.',
      fa: 'قایق کوچک جزیرهٔ خُرد را پیدا کرد! اندونیزیا از هر کشور دیگر آتشفشان فعال بیشتر دارد، حدود ۱۳۰ آتشفشان.' } },

  words: {
    'mainland southeast asia': { en: 'the part of Southeast Asia joined to the rest of Asia: Myanmar, Thailand, Laos, Cambodia and Vietnam', es: 'la parte del sudeste asiático unida al resto de Asia: Myanmar, Tailandia, Laos, Camboya y Vietnam', fa: 'بخشی از جنوب شرق آسیا که به باقی آسیا وصل است: میانمار، تایلند، لائوس، کمبودیا و ویتنام' },
    'maritime southeast asia': { en: 'the island part of Southeast Asia, out in the sea: Indonesia, the Philippines, Singapore, Brunei, and most of Malaysia', es: 'la parte de islas del sudeste asiático, en el mar: Indonesia, Filipinas, Singapur, Brunéi y la mayor parte de Malasia', fa: 'بخش جزیره‌ای جنوب شرق آسیا در بحر: اندونیزیا، فیلیپین، سنگاپور، برونئی و بیشتر مالیزیا' },
    archipelago: { en: 'a large group of islands close together in the sea', es: 'un grupo grande de islas cercanas en el mar', fa: 'گروه بزرگی از جزیره‌های نزدیک به هم در بحر' },
    'ring of fire': { en: 'a band around the edge of the Pacific Ocean where volcanoes and earthquakes are common', es: 'una franja alrededor del borde del océano Pacífico donde son comunes los volcanes y los terremotos', fa: 'کمربندی دور کنارهٔ اقیانوس آرام که آتشفشان و زلزله در آن زیاد است' },
    plate: { en: 'one of the huge pieces of the Earth\'s hard outer shell; plates move very slowly', es: 'uno de los enormes pedazos de la capa dura exterior de la Tierra; las placas se mueven muy despacio', fa: 'یکی از تکه‌های بزرگ پوستهٔ سخت زمین؛ این تکه‌ها بسیار آهسته حرکت می‌کنند' },
    fertile: { en: 'full of the minerals plants need, so crops grow well', es: 'lleno de los minerales que necesitan las plantas, así que los cultivos crecen bien', fa: 'پر از موادی که گیاه لازم دارد، پس کشت خوب می‌روید' },
    terrace: { en: 'a flat step cut into a steep hill so crops like rice can grow there', es: 'un escalón plano cortado en un cerro empinado para que crezcan cultivos como el arroz', fa: 'یک زینهٔ هموار که در تپهٔ سرازیر کنده می‌شود تا کشتی مثل برنج در آن بروید' }
  },

  npcs: [
    {
      x: 6, y: 5,
      name: { en: 'Linh', es: 'Linh', fa: 'لین' },
      role: { en: 'Boat seller on the Mekong', es: 'Vendedora en bote del Mekong', fa: 'فروشندهٔ قایقی در میکانگ' },
      look: { skin: 1, hair: '#14100c', shirt: '#d8c040', pants: '#2a4a3a' },
      lines: [
        { en: 'Xin chào! I sell fruit from my boat on the Mekong River.', es: '¡Xin chào! Vendo fruta desde mi bote en el río Mekong.', fa: 'سین چاو! من از قایقم در دریای میکانگ میوه می‌فروشم.' },
        { en: 'It is the longest river in Mainland Southeast Asia. It runs from China to Vietnam.', es: 'Es el río más largo del sudeste asiático continental. Va desde China hasta Vietnam.', fa: 'میکانگ درازترین دریای خشکهٔ جنوب شرق آسیا است. از چین تا ویتنام می‌رود.' },
        { en: '[[mainland southeast asia|Mainland Southeast Asia]] is joined to Asia: Myanmar, Thailand, Laos, Cambodia and Vietnam.', es: 'El [[mainland southeast asia|sudeste asiático continental]] está unido a Asia: Myanmar, Tailandia, Laos, Camboya y Vietnam.', fa: '[[mainland southeast asia|خشکهٔ جنوب شرق آسیا]] به آسیا وصل است: میانمار، تایلند، لائوس، کمبودیا و ویتنام.' },
        { en: '[[maritime southeast asia|Maritime (Island) Southeast Asia]] is in the sea. Walk east, or cross the bridge south!', es: 'El [[maritime southeast asia|sudeste asiático marítimo (insular)]] está en el mar. ¡Camina al este o cruza el puente al sur!', fa: '[[maritime southeast asia|جنوب شرق آسیای بحری (جزیره‌ای)]] در بحر است. به طرف شرق برو، یا از پل به طرف جنوب!' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which river is the longest in Mainland Southeast Asia?', es: '¿Cuál es el río más largo del sudeste asiático continental?', fa: 'درازترین دریای خشکهٔ جنوب شرق آسیا کدام است؟' },
        choices: [
          { ok: true, t: { en: 'The Mekong', es: 'El Mekong', fa: 'میکانگ' },
            why: { en: 'Yes. The Mekong flows from China all the way to the sea in Vietnam.', es: 'Sí. El Mekong va desde China hasta el mar en Vietnam.', fa: 'بلی. میکانگ از چین تا بحر در ویتنام می‌رود.' } },
          { t: { en: 'The Ganges', es: 'El Ganges', fa: 'گنگا' },
            why: { en: 'The Ganges is in South Asia, not Southeast Asia.', es: 'El Ganges está en Asia del Sur, no en el sudeste asiático.', fa: 'گنگا در جنوب آسیا است، نه جنوب شرق آسیا.' } },
          { t: { en: 'The Nile', es: 'El Nilo', fa: 'نیل' },
            why: { en: 'The Nile is in Africa.', es: 'El Nilo está en África.', fa: 'نیل در افریقا است.' } }
        ]
      }
    },
    {
      x: 2, y: 15,
      name: { en: 'Siti', es: 'Siti', fa: 'سیتی' },
      role: { en: 'Rice farmer on Java', es: 'Agricultora de arroz en Java', fa: 'دهقان برنج در جاوه' },
      remember: { ep: '6.1', t: { en: 'Hello! My friend Lakshmi grows rice by the Ganges. She wrote to me that you found Nani Kamala\'s rain gauge in the river. Now the farmers know when the monsoon rain comes. Thank you!', es: '¡Hola! Mi amiga Lakshmi cultiva arroz junto al Ganges. Me escribió que encontraste el pluviómetro de la abuela Kamala en el río. Ahora los agricultores saben cuándo llega la lluvia del monzón. ¡Gracias!', fa: 'سلام! دوستم لکشمی کنار گنگا برنج می‌کارد. او برایم نوشت که تو باران‌سنج مادرکلان کمالا را در دریا پیدا کردی. حالا دهقانان می‌دانند باران موسمی کی می‌آید. تشکر!' } },
      look: { skin: 3, hair: '#120e0a', shirt: '#3a9a5a', pants: '#6a3a2a', robe: true },
      lines: [
        { en: 'Selamat datang! Welcome to Java, an island of Indonesia.', es: '¡Selamat datang! Bienvenido a Java, una isla de Indonesia.', fa: 'سلامت داتانگ! به جاوه، یک جزیرهٔ اندونیزیا، خوش آمدی.' },
        { en: 'Indonesia has more than 17,000 islands. A big group like this is an [[archipelago|archipelago]].', es: 'Indonesia tiene más de 17,000 islas. Un grupo grande así es un [[archipelago|archipiélago]].', fa: 'اندونیزیا بیش از ۱۷۰۰۰ جزیره دارد. گروه بزرگ جزیره‌ها مثل این را [[archipelago|مجمع‌الجزایر]] می‌گویند.' },
        { en: 'Ash from the volcano above my farm makes [[fertile|fertile]] soil, full of minerals for plants.', es: 'La ceniza del volcán arriba de mi granja hace un suelo [[fertile|fértil]], lleno de minerales para las plantas.', fa: 'خاکستر آتشفشان بالای کشتزارم خاک را [[fertile|حاصلخیز]] می‌کند، پر از موادی که گیاه لازم دارد.' },
        { en: 'We cut [[terrace|terraces]], like giant steps that hold water. Rice grows here and feeds millions.', es: 'Cortamos [[terrace|terrazas]], como escalones gigantes que guardan agua. Aquí crece arroz que alimenta a millones.', fa: 'ما [[terrace|زمین‌های زینه‌ای]] می‌سازیم، مثل زینه‌های بزرگ که آب را نگه می‌دارند. برنج این‌جا میلیون‌ها نفر را نان می‌دهد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Java is on the Ring of Fire, and very crowded. Why do so many people farm there?', es: 'Java está en el Cinturón de Fuego y tiene muchísima gente. ¿Por qué tanta gente cultiva ahí?', fa: 'جاوه روی حلقهٔ آتش است و بسیار پرجمعیت است. چرا این‌قدر مردم آن‌جا کشت می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Volcanic ash makes the soil rich for growing food', es: 'La ceniza volcánica hace el suelo rico para cultivar comida', fa: 'خاکستر آتشفشان خاک را برای کشت غذا پربار می‌کند' },
            why: { en: 'Right. People weigh the danger against the good soil.', es: 'Correcto. La gente compara el peligro con el buen suelo.', fa: 'درست است. مردم خطر را با خاک خوب مقایسه می‌کنند.' } },
          { t: { en: 'The island has no volcanoes and no earthquakes', es: 'La isla no tiene volcanes ni terremotos', fa: 'جزیره هیچ آتشفشان و زلزله ندارد' },
            why: { en: 'Java has many volcanoes. It sits right on the Ring of Fire.', es: 'Java tiene muchos volcanes. Está justo en el Cinturón de Fuego.', fa: 'جاوه آتشفشان‌های زیادی دارد. درست روی حلقهٔ آتش است.' } },
          { t: { en: 'Volcano soil is poor, so the land there is very cheap', es: 'El suelo del volcán es pobre, así que la tierra ahí es muy barata', fa: 'خاک آتشفشان ضعیف است، پس زمین آن‌جا بسیار ارزان است' },
            why: { en: 'It is the opposite: volcanic soil is very fertile.', es: 'Es al revés: el suelo volcánico es muy fértil.', fa: 'برعکس است: خاک آتشفشانی بسیار حاصلخیز است.' } }
        ]
      }
    },
    {
      x: 19, y: 18,
      name: { en: 'Ramon', es: 'Ramón', fa: 'رامون' },
      role: { en: 'Volcano watcher in the Philippines', es: 'Vigilante de volcanes en Filipinas', fa: 'نگهبان آتشفشان در فیلیپین' },
      look: { skin: 2, hair: '#1c1612', shirt: '#e05a2a', pants: '#24304a' },
      lines: [
        { en: 'Mabuhay! I watch this volcano. The Philippines has more than 7,000 islands.', es: '¡Mabuhay! Yo vigilo este volcán. Filipinas tiene más de 7,000 islas.', fa: 'مابوهای! من این آتشفشان را نگهبانی می‌کنم. فیلیپین بیش از ۷۰۰۰ جزیره دارد.' },
        { en: 'We are on the [[ring of fire|Ring of Fire]]. It circles the edge of the Pacific Ocean.', es: 'Estamos en el [[ring of fire|Cinturón de Fuego]]. Rodea el borde del océano Pacífico.', fa: 'ما روی [[ring of fire|حلقهٔ آتش]] هستیم. این حلقه دور کنارهٔ اقیانوس آرام است.' },
        { en: 'Earth\'s shell is broken into huge [[plate|plates]]. Where they grind, we get earthquakes and volcanoes.', es: 'La capa de la Tierra está rota en enormes [[plate|placas]]. Donde se rozan, hay terremotos y volcanes.', fa: 'پوستهٔ زمین به [[plate|صفحه‌های]] بزرگ شکسته است. جایی که به هم ساییده می‌شوند، زلزله و آتشفشان است.' },
        { en: 'Sensors watch day and night. Before an eruption, warnings and drills show where to go.', es: 'Unos sensores vigilan día y noche. Antes de una erupción, las alertas y los simulacros muestran adónde ir.', fa: 'دستگاه‌ها شب و روز می‌پایند. پیش از فوران، هشدارها و تمرین‌ها نشان می‌دهند کجا بروند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Where is the Ring of Fire?', es: '¿Dónde está el Cinturón de Fuego?', fa: 'حلقهٔ آتش کجاست؟' },
        choices: [
          { ok: true, t: { en: 'Around the edge of the Pacific Ocean', es: 'Alrededor del borde del océano Pacífico', fa: 'دور کنارهٔ اقیانوس آرام' },
            why: { en: 'Yes. Indonesia, the Philippines, Japan, Chile and Mexico are all on it.', es: 'Sí. Indonesia, Filipinas, Japón, Chile y México están en él.', fa: 'بلی. اندونیزیا، فیلیپین، جاپان، چیلی و مکزیک همه روی آن هستند.' } },
          { t: { en: 'Across the middle of the Indian Ocean', es: 'En el medio del océano Índico', fa: 'در وسط اقیانوس هند' },
            why: { en: 'The Ring of Fire circles the Pacific, not the Indian Ocean.', es: 'El Cinturón de Fuego rodea el Pacífico, no el Índico.', fa: 'حلقهٔ آتش دور اقیانوس آرام است، نه اقیانوس هند.' } },
          { t: { en: 'Under the coldest part of the Arctic', es: 'Bajo la parte más fría del Ártico', fa: 'زیر سردترین بخش قطب شمال' },
            why: { en: 'The Ring of Fire is a band around the Pacific Ocean.', es: 'El Cinturón de Fuego es una franja alrededor del Pacífico.', fa: 'حلقهٔ آتش کمربندی دور اقیانوس آرام است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 8, text: { en: 'SEA ROUTE · Ships carry rice, rubber and palm oil through the Strait of Malacca, between the Indian and Pacific Oceans.', es: 'RUTA DEL MAR · Los barcos llevan arroz, caucho y aceite de palma por el estrecho de Malaca, entre el océano Índico y el Pacífico.', fa: 'راه بحری · کشتی‌ها برنج، رابر و روغن نخل را از تنگهٔ مالاکا، میان اقیانوس هند و اقیانوس آرام، می‌برند.' } },
    { x: 24, y: 18, text: { en: 'VOLCANO SAFETY · Green = calm. Yellow = watch closely. Red = leave now. Know your way out, and practice it with your family.',
      es: 'SEGURIDAD DEL VOLCÁN · Verde = calma. Amarillo = vigilar de cerca. Rojo = salir ya. Conoce tu camino de salida y practícalo con tu familia.',
      fa: 'ایمنی آتشفشان · سبز = آرام. زرد = با دقت بپا. سرخ = همین حالا برو. راه بیرون رفتن خود را بدان و با خانواده‌ات تمرین کن.' } }
  ],

  /* the quest: Ibu Dewi (gold !) -> Lola Nena on the terraces -> trade the island's fish and coconuts for Mekong rice -> back to Dewi */
  quest: {
    stat: 'mov',
    title: { en: 'Rice for the Island', es: 'Arroz para la isla', fa: 'برنج برای جزیره' },
    giver: {
      x: 21, y: 3,
      name: { en: 'Ibu Dewi', es: 'Doña Dewi', fa: 'بی‌بی دیوی' },
      role: { en: 'Cook on the little island', es: 'Cocinera de la islita', fa: 'آشپز جزیرهٔ کوچک' },
      look: { skin: 4, hair: '#16100c', shirt: '#e0607a', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'Welcome to our little island! We have lots of fish and coconuts.', es: '¡Bienvenido a nuestra islita! Tenemos mucho pescado y muchos cocos.', fa: 'به جزیرهٔ کوچک ما خوش آمدی! ما ماهی و نارگیل زیاد داریم.' },
        { en: 'But there is only sand and palm trees. No flat, wet land for rice.', es: 'Pero solo hay arena y palmeras. No hay tierra plana y húmeda para el arroz.', fa: 'اما فقط ریگ و درخت نخل است. هیچ زمین هموار و تر برای برنج نیست.' },
        { en: 'The Quake Grump sank our rice boat, and the festival is soon!', es: '¡El Gruñón Temblor hundió nuestro bote de arroz, y la fiesta es pronto!', fa: 'غرغروی زلزله قایق برنج ما را غرق کرد و جشن نزدیک است!' },
        { en: 'Ask Lola Nena, who farms the island to the south. Take the long bridge!', es: 'Pregúntale a Lola Nena, que cultiva en la isla del sur. ¡Toma el puente largo!', fa: 'از لولا ننا بپرس که در جزیرهٔ جنوبی کشت می‌کند. از پل دراز برو!' }
      ],
      wait: { en: 'Lola Nena is on the rice [[terrace|terraces]], south across the long bridge.', es: 'Lola Nena está en las [[terrace|terrazas]] de arroz, al sur, cruzando el puente largo.', fa: 'لولا ننا روی [[terrace|زمین‌های زینه‌ای]] برنج است، جنوب، آن طرف پل دراز.' },
      thanks: { en: 'Thank you! We have extra fish, the mainland has extra rice. Trade lets us share.', es: '¡Gracias! Nosotros tenemos pescado de sobra y el continente tiene arroz de sobra. El comercio nos deja compartir.', fa: 'تشکر! ما ماهی اضافه داریم، خشکه برنج اضافه دارد. تجارت به ما کمک می‌کند شریک کنیم.' }
    },
    contact: {
      x: 26, y: 15,
      name: { en: 'Lola Nena', es: 'Lola Nena', fa: 'لولا ننا' },
      role: { en: 'Rice terrace farmer', es: 'Agricultora de terrazas de arroz', fa: 'دهقان زمین‌های زینه‌ای برنج' },
      look: { skin: 2, hair: '#cfc8bd', shirt: '#2a8ac0', pants: '#5a3a2a', style: 'bun', hat: '#d8b060' },
      lines: [
        { en: 'We grow rice on these [[terrace|terraces]]. But the steps on the mountain are small.', es: 'Cultivamos arroz en estas [[terrace|terrazas]]. Pero los escalones de la montaña son pequeños.', fa: 'ما در این [[terrace|زمین‌های زینه‌ای]] برنج می‌کاریم. اما زینه‌های کوه کوچک هستند.' },
        { en: 'They grow just enough rice for our village. Flat river plains grow much more.', es: 'Dan solo el arroz justo para nuestro pueblo. Las llanuras planas de los ríos dan mucho más.', fa: 'فقط برای قریهٔ ما برنج کافی می‌دهند. دشت‌های هموار کنار دریا خیلی بیشتر می‌دهند.' },
        { en: 'Find the Mekong rice trader on the [[mainland southeast asia|mainland]], north-west. Offer what your island has extra.', es: 'Busca al comerciante de arroz del Mekong en el [[mainland southeast asia|continente]], al noroeste. Ofrécele lo que le sobra a tu isla.', fa: 'تاجر برنج میکانگ را در [[mainland southeast asia|خشکه]]، شمال غرب، پیدا کن. چیزی را پیشنهاد کن که جزیره‌ات اضافه دارد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 11, y: 6,
        name: { en: 'Uncle Bao', es: 'Don Bao', fa: 'کاکا بائو' },
        role: { en: 'Rice trader on the Mekong', es: 'Comerciante de arroz del Mekong', fa: 'تاجر برنج میکانگ' },
        look: { skin: 1, hair: '#2a2420', shirt: '#3a6a3a', pants: '#2a2a2a', style: 'short', hat: '#d8c890' },
        lines: [
          { en: 'The Mekong floods these flat fields every year. It leaves rich mud behind.', es: 'El Mekong inunda estos campos planos cada año. Deja lodo rico.', fa: 'میکانگ هر سال این کشتزارهای هموار را زیر آب می‌برد. گِل پربار به جا می‌گذارد.' },
          { en: 'So we grow more rice than we can eat!', es: '¡Por eso cultivamos más arroz del que podemos comer!', fa: 'به همین خاطر بیشتر از آنچه می‌خوریم برنج می‌کاریم!' }
        ]
      },
      q: { en: 'I will give you a big sack of rice. What will you bring me for it?', es: 'Te daré un saco grande de arroz. ¿Qué me traes a cambio?', fa: 'یک بوجی کلان برنج به تو می‌دهم. در عوض آن چه برایم می‌آوری؟' },
      choices: [
        { ok: true, at: [21, 7], icon: '🐟', t: { en: 'Dried fish and coconuts from the little island', es: 'Pescado seco y cocos de la islita', fa: 'ماهی خشک و نارگیل از جزیرهٔ کوچک' },
          why: { en: 'Good trade! Your little island has plenty of fish and coconuts. My Mekong fields have plenty of rice. Each side gives what it has extra.', es: '¡Buen trato! Tu islita tiene mucho pescado y cocos. Mis campos del Mekong tienen mucho arroz. Cada lado da lo que le sobra.', fa: 'معاملهٔ خوب! جزیرهٔ کوچک شما ماهی و نارگیل زیاد دارد. کشتزارهای میکانگ من برنج زیاد دارد. هر طرف چیزی را می‌دهد که اضافه دارد.' } },
        { at: [10, 8], icon: '🍚', t: { en: 'A sack of rice from the Mekong fields', es: 'Un saco de arroz de los campos del Mekong', fa: 'یک بوجی برنج از کشتزارهای میکانگ' },
          why: { en: 'That rice is from my own fields! I already have more rice than I need.', es: '¡Ese arroz es de mis propios campos! Ya tengo más arroz del que necesito.', fa: 'این برنج از کشتزارهای خود من است! من همین حالا بیشتر از ضرورتم برنج دارم.' } },
        { at: [20, 15], icon: '🌾', t: { en: 'A basket of rice from the terraces', es: 'Una canasta de arroz de las terrazas', fa: 'یک سبد برنج از زمین‌های زینه‌ای' },
          why: { en: 'That rice feeds Lola Nena\'s village. The small [[terrace|terraces]] grow just enough for them. And I have plenty of rice! Bring what your island has extra.', es: 'Ese arroz alimenta al pueblo de Lola Nena. Las [[terrace|terrazas]] pequeñas dan solo lo justo para ellos. ¡Y yo tengo mucho arroz! Trae lo que a tu isla le sobra.', fa: 'این برنج نان ده لولا ننا است. [[terrace|زمین‌های زینه‌ای]] کوچک فقط برای خودشان کافی می‌دهند. و من برنج زیاد دارم! چیزی را بیاور که جزیره‌ات اضافه دارد.' } }
      ],
      item: { icon: '🍚', name: { en: 'A sack of Mekong rice', es: 'Un saco de arroz del Mekong', fa: 'یک بوجی برنج میکانگ' } }
    }
  },

  scraps: [[14, 1], [28, 6], [3, 20]],
  smudges: [[10, 2], [9, 15], [23, 16]],

  challenge: {
    at: [24, 4],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // mainland cards go to the rice fields on the mainland, by the Mekong; island cards go to two different islands out in the sea
    zones: [{ bin: 'main', x: 2, y: 6, w: 5, h: 2 }, { bin: 'isle', x: 24, y: 5, w: 2, h: 2 }, { bin: 'isle', x: 24, y: 12, w: 2, h: 1 }],
    style: 'bands',
    stat: 'reg',
    title: { en: 'Mainland or islands?', es: '¿Continente o islas?', fa: 'خشکه یا جزیره؟' },
    intro: { en: 'The Grump shook the country names loose! Sort each country. Is it on the mainland, joined to Asia, or is it an island country out in the sea? (Malaysia is not here because it is both: part is on the mainland and part is on the island of Borneo.)',
      es: '¡El Gruñón soltó los nombres de los países! Ordena cada país. ¿Está en el continente, unido a Asia, o es un país de islas en el mar? (Malasia no está aquí porque es las dos cosas: una parte está en el continente y otra en la isla de Borneo.)',
      fa: 'غرغرو نام کشورها را تکان داد و جدا کرد! هر کشور را جدا کن. آیا روی خشکه و وصل به آسیا است، یا یک کشور جزیره‌ای در بحر است؟ (مالیزیا این‌جا نیست چون هر دو است: یک بخش آن روی خشکه و بخش دیگر در جزیرهٔ بورنئو است.)' },
    bins: [
      { id: 'main', icon: '🏞️', tile: 'q', label: { en: 'Mainland Southeast Asia', es: 'Sudeste asiático continental', fa: 'خشکهٔ جنوب شرق آسیا' }, sub: { en: 'joined to the rest of Asia', es: 'unido al resto de Asia', fa: 'وصل به باقی آسیا' } },
      { id: 'isle', icon: '🏝️', tile: 'p', label: { en: 'Island (Maritime) Southeast Asia', es: 'Sudeste asiático insular (marítimo)', fa: 'جنوب شرق آسیای جزیره‌ای' }, sub: { en: 'out in the sea', es: 'en el mar', fa: 'در بحر' } }
    ],
    items: [
      { bin: 'main', t: { en: 'Vietnam', es: 'Vietnam', fa: 'ویتنام' }, why: { en: 'Vietnam is on the mainland, along the east coast. The Mekong reaches the sea there.', es: 'Vietnam está en el continente, en la costa este. El Mekong llega al mar ahí.', fa: 'ویتنام روی خشکه، در کنار ساحل شرقی است. میکانگ آن‌جا به بحر می‌رسد.' } },
      { bin: 'main', t: { en: 'Thailand', es: 'Tailandia', fa: 'تایلند' }, why: { en: 'Thailand is in the middle of the mainland.', es: 'Tailandia está en el medio del continente.', fa: 'تایلند در وسط خشکه است.' } },
      { bin: 'main', t: { en: 'Laos', es: 'Laos', fa: 'لائوس' }, why: { en: 'Laos has no coast at all. It is the only Southeast Asian country with no sea.', es: 'Laos no tiene costa. Es el único país del sudeste asiático sin mar.', fa: 'لائوس هیچ ساحلی ندارد. تنها کشور جنوب شرق آسیا است که بحر ندارد.' } },
      { bin: 'main', t: { en: 'Cambodia', es: 'Camboya', fa: 'کمبودیا' }, why: { en: 'Cambodia is on the mainland. The Mekong flows right through it.', es: 'Camboya está en el continente. El Mekong pasa por en medio.', fa: 'کمبودیا روی خشکه است. میکانگ از میان آن می‌گذرد.' } },
      { bin: 'main', t: { en: 'Myanmar', es: 'Myanmar', fa: 'میانمار' }, why: { en: 'Myanmar is the farthest west on the mainland, next to India and Bangladesh.', es: 'Myanmar es el país más al oeste del continente, junto a la India y Bangladés.', fa: 'میانمار غربی‌ترین کشور خشکه است، کنار هند و بنگله‌دیش.' } },
      { bin: 'isle', t: { en: 'Indonesia', es: 'Indonesia', fa: 'اندونیزیا' }, why: { en: 'Indonesia is an archipelago of more than 17,000 islands.', es: 'Indonesia es un archipiélago de más de 17,000 islas.', fa: 'اندونیزیا مجمع‌الجزایری با بیش از ۱۷۰۰۰ جزیره است.' } },
      { bin: 'isle', t: { en: 'The Philippines', es: 'Filipinas', fa: 'فیلیپین' }, why: { en: 'The Philippines is made of more than 7,000 islands.', es: 'Filipinas está formada por más de 7,000 islas.', fa: 'فیلیپین از بیش از ۷۰۰۰ جزیره ساخته شده است.' } },
      { bin: 'isle', t: { en: 'Singapore', es: 'Singapur', fa: 'سنگاپور' }, why: { en: 'Singapore is a small island country at the tip of the Malay Peninsula. It is not part of the mainland.', es: 'Singapur es un país isla pequeño en la punta de la península malaya. No es parte del continente.', fa: 'سنگاپور یک کشور جزیره‌ای کوچک در نوک شبه‌جزیرهٔ مالایا است. بخشی از خشکه نیست.' } },
      { bin: 'isle', t: { en: 'Brunei', es: 'Brunéi', fa: 'برونئی' }, why: { en: 'Brunei is on the island of Borneo.', es: 'Brunéi está en la isla de Borneo.', fa: 'برونئی در جزیرهٔ بورنئو است.' } }
    ],
    success: { en: 'The map holds still again: five countries on the mainland, and island countries out across the sea!', es: '¡El mapa vuelve a estar quieto: cinco países en el continente y países de islas en el mar!', fa: 'نقشه دوباره آرام شد: پنج کشور روی خشکه و کشورهای جزیره‌ای در بحر!' }
  },

  boss: {
    at: [27, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Quake Grump', es: 'El Gruñón Temblor', fa: 'غرغروی زلزله' },
    appear: { en: 'The Quake Grump is shaking the town under the volcano!', es: '¡El Gruñón Temblor está sacudiendo el pueblo bajo el volcán!', fa: 'غرغروی زلزله شهر زیر آتشفشان را تکان می‌دهد!' },
    taunt: { en: 'Rumble rumble! I will shake every island loose and mix up the whole map!', es: '¡Brrrum brrrum! ¡Voy a soltar cada isla y revolver todo el mapa!', fa: 'غُرّ غُرّ! هر جزیره را تکان می‌دهم و تمام نقشه را به هم می‌زنم!' },
    win: { en: 'The shaking stops. The islands settle back in place, and atlas page 6.2 lands in your hands!', es: 'El temblor se detiene. Las islas vuelven a su lugar, ¡y la página 6.2 del atlas cae en tus manos!', fa: 'لرزش می‌ایستد. جزیره‌ها سر جایشان برمی‌گردند و صفحهٔ ۶.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Where is the Ring of Fire?', es: '¿Dónde está el Cinturón de Fuego?', fa: 'حلقهٔ آتش کجاست؟' },
        choices: [{ en: 'Around the edge of the Pacific Ocean', es: 'Alrededor del borde del océano Pacífico', fa: 'دور کنارهٔ اقیانوس آرام' }, { en: 'Across the middle of the Indian Ocean', es: 'En el medio del océano Índico', fa: 'در وسط اقیانوس هند' }, { en: 'Along the equator in Central Africa', es: 'En el ecuador, en África central', fa: 'در امتداد خط استوا در افریقای مرکزی' }, { en: 'Under the coldest part of the Arctic', es: 'Bajo la parte más fría del Ártico', fa: 'زیر سردترین بخش قطب شمال' }], answer: 0,
        why: { en: 'The [[ring of fire|Ring of Fire]] is a band of volcanoes and earthquakes around the Pacific Ocean.', es: 'El [[ring of fire|Cinturón de Fuego]] es una franja de volcanes y terremotos alrededor del Pacífico.', fa: '[[ring of fire|حلقهٔ آتش]] کمربندی از آتشفشان و زلزله دور اقیانوس آرام است.' } },
      { q: { en: 'Which five countries make up Mainland Southeast Asia?', es: '¿Qué cinco países forman el sudeste asiático continental?', fa: 'کدام پنج کشور خشکهٔ جنوب شرق آسیا را می‌سازند؟' },
        choices: [{ en: 'Myanmar, Thailand, Laos, Cambodia and Vietnam', es: 'Myanmar, Tailandia, Laos, Camboya y Vietnam', fa: 'میانمار، تایلند، لائوس، کمبودیا و ویتنام' }, { en: 'Indonesia, the Philippines, Malaysia, Singapore and Brunei', es: 'Indonesia, Filipinas, Malasia, Singapur y Brunéi', fa: 'اندونیزیا، فیلیپین، مالیزیا، سنگاپور و برونئی' }, { en: 'India, Pakistan, Bangladesh, Nepal and Bhutan', es: 'India, Pakistán, Bangladés, Nepal y Bután', fa: 'هند، پاکستان، بنگله‌دیش، نیپال و بوتان' }, { en: 'China, Japan, Korea, Mongolia and Taiwan', es: 'China, Japón, Corea, Mongolia y Taiwán', fa: 'چین، جاپان، کوریا، مغولستان و تایوان' }], answer: 0,
        why: { en: 'Those five are joined to the rest of Asia. The second list is mostly island countries.', es: 'Esos cinco están unidos al resto de Asia. La segunda lista es casi toda de países de islas.', fa: 'این پنج کشور به باقی آسیا وصل هستند. فهرست دوم بیشتر کشورهای جزیره‌ای است.' } },
      { q: { en: 'Is Singapore part of Mainland Southeast Asia?', es: '¿Singapur es parte del sudeste asiático continental?', fa: 'آیا سنگاپور بخشی از خشکهٔ جنوب شرق آسیا است؟' },
        choices: [{ en: 'No. It is a small island country.', es: 'No. Es un país isla pequeño.', fa: 'نه. یک کشور جزیره‌ای کوچک است.' }, { en: 'Yes. It is next to Laos.', es: 'Sí. Está junto a Laos.', fa: 'بلی. کنار لائوس است.' }, { en: 'Yes. It is the biggest mainland country.', es: 'Sí. Es el país continental más grande.', fa: 'بلی. بزرگ‌ترین کشور خشکه است.' }, { en: 'No. It is in South Asia.', es: 'No. Está en Asia del Sur.', fa: 'نه. در جنوب آسیا است.' }], answer: 0,
        why: { en: 'Singapore is an island at the tip of the Malay Peninsula, by the Strait of Malacca.', es: 'Singapur es una isla en la punta de la península malaya, junto al estrecho de Malaca.', fa: 'سنگاپور جزیره‌ای در نوک شبه‌جزیرهٔ مالایا، کنار تنگهٔ مالاکا است.' } },
      { q: { en: 'What does fertile soil mean?', es: '¿Qué significa suelo fértil?', fa: 'خاک حاصلخیز یعنی چه؟' },
        choices: [{ en: 'Soil full of the minerals plants need', es: 'Suelo lleno de los minerales que necesitan las plantas', fa: 'خاکی پر از موادی که گیاه لازم دارد' }, { en: 'Soil that is very dry and full of sand', es: 'Suelo muy seco y lleno de arena', fa: 'خاکی که بسیار خشک و پر از ریگ است' }, { en: 'Soil washed away by floods', es: 'Suelo que se llevaron las inundaciones', fa: 'خاکی که سیلاب برده است' }, { en: 'Soil that stays frozen most of the year', es: 'Suelo que está congelado casi todo el año', fa: 'خاکی که بیشتر سال یخ‌زده است' }], answer: 0,
        why: { en: '[[fertile|Fertile]] soil helps crops grow well. Volcanic ash makes soil fertile.', es: 'El suelo [[fertile|fértil]] ayuda a que los cultivos crezcan bien. La ceniza volcánica lo hace fértil.', fa: 'خاک [[fertile|حاصلخیز]] به خوب روییدن کشت کمک می‌کند. خاکستر آتشفشان خاک را حاصلخیز می‌کند.' } },
      { q: { en: 'Java is very crowded and full of volcanoes. Why do so many people farm there?', es: 'Java tiene mucha gente y muchos volcanes. ¿Por qué tanta gente cultiva ahí?', fa: 'جاوه بسیار پرجمعیت و پر از آتشفشان است. چرا این‌قدر مردم آن‌جا کشاورزی می‌کنند؟' },
        choices: [{ en: 'Volcanic ash makes the soil rich for growing food', es: 'La ceniza volcánica hace el suelo rico para cultivar comida', fa: 'خاکستر آتشفشان خاک را برای کشت غذا پربار می‌کند' }, { en: 'The island has no earthquakes and no volcanoes', es: 'La isla no tiene terremotos ni volcanes', fa: 'جزیره هیچ زلزله و آتشفشان ندارد' }, { en: 'The government makes people live near the volcanoes', es: 'El gobierno obliga a la gente a vivir cerca de los volcanes', fa: 'حکومت مردم را مجبور می‌کند نزدیک آتشفشان‌ها زندگی کنند' }, { en: 'Java is the only land Indonesia has', es: 'Java es la única tierra que tiene Indonesia', fa: 'جاوه تنها زمینی است که اندونیزیا دارد' }], answer: 0,
        why: { en: 'People weigh a real danger against real benefits: rich soil grows more rice.', es: 'La gente compara un peligro real con beneficios reales: el suelo rico produce más arroz.', fa: 'مردم یک خطر واقعی را با فایده‌های واقعی مقایسه می‌کنند: خاک پربار برنج بیشتر می‌دهد.' } },
      { q: { en: 'What is an archipelago?', es: '¿Qué es un archipiélago?', fa: 'مجمع‌الجزایر چیست؟' },
        choices: [{ en: 'A large group of islands close together', es: 'Un grupo grande de islas cercanas', fa: 'گروه بزرگی از جزیره‌های نزدیک به هم' }, { en: 'A band of volcanoes around an ocean', es: 'Una franja de volcanes alrededor de un océano', fa: 'کمربندی از آتشفشان دور یک اقیانوس' }, { en: 'A wind that changes with the season', es: 'Un viento que cambia con la estación', fa: 'بادی که با فصل تغییر می‌کند' }, { en: 'A high, wide area of land with a flat top', es: 'Una zona alta y ancha de tierra con la cima plana', fa: 'یک زمین بلند و پهن با سر هموار' }], answer: 0,
        why: { en: 'Indonesia and the Philippines are both [[archipelago|archipelagos]].', es: 'Indonesia y Filipinas son [[archipelago|archipiélagos]].', fa: 'اندونیزیا و فیلیپین هر دو [[archipelago|مجمع‌الجزایر]] هستند.' } },
      { q: { en: 'How does Japan make earthquakes less dangerous?', es: '¿Cómo hace Japón que los terremotos sean menos peligrosos?', fa: 'جاپان چطور زلزله را کم‌خطرتر می‌کند؟' },
        choices: [{ en: 'Its buildings sway in a quake instead of cracking', es: 'Sus edificios se mecen en un terremoto en vez de romperse', fa: 'ساختمان‌هایش در زلزله به جای کفیدن تاب می‌خورند' }, { en: 'It moves every big city far away from the coast', es: 'Muda todas las ciudades grandes lejos de la costa', fa: 'همهٔ شهرهای بزرگ را از ساحل دور می‌برد' }, { en: 'It stops all farming on the slopes of volcanoes', es: 'Prohíbe toda la agricultura en las laderas de los volcanes', fa: 'همهٔ کشت را در دامنهٔ آتشفشان‌ها منع می‌کند' }, { en: 'It closes its ports in the rainy season', es: 'Cierra sus puertos en la temporada de lluvias', fa: 'بندرهای خود را در فصل باران می‌بندد' }], answer: 0,
        why: { en: 'Buildings that bend and sway are less likely to fall. Warnings and drills help too.', es: 'Los edificios que se doblan y se mecen tienen menos riesgo de caerse. Las alertas y los simulacros también ayudan.', fa: 'ساختمان‌هایی که خم می‌شوند و تاب می‌خورند کمتر فرو می‌ریزند. هشدارها و تمرین‌ها هم کمک می‌کنند.' } },
      { q: { en: 'A mapmaker groups Indonesia, the Philippines and Malaysia together. What is that group called?', es: 'Un cartógrafo agrupa a Indonesia, Filipinas y Malasia. ¿Cómo se llama ese grupo?', fa: 'یک نقشه‌کش اندونیزیا، فیلیپین و مالیزیا را در یک گروه می‌گذارد. نام آن گروه چیست؟' },
        choices: [{ en: 'Maritime (Island) Southeast Asia', es: 'Sudeste asiático marítimo (insular)', fa: 'جنوب شرق آسیای بحری (جزیره‌ای)' }, { en: 'Mainland Southeast Asia, joined to Asia', es: 'Sudeste asiático continental, unido a Asia', fa: 'خشکهٔ جنوب شرق آسیا، وصل به آسیا' }, { en: 'The Indian subcontinent of South Asia', es: 'El subcontinente indio, en Asia del Sur', fa: 'نیم‌قارهٔ هند در جنوب آسیا' }, { en: 'The Ring of Fire', es: 'El Cinturón de Fuego', fa: 'حلقهٔ آتش' }], answer: 0,
        why: { en: '"Maritime" means "of the sea". Malaysia has land on the mainland and on Borneo, but mapmakers often put it in this group.', es: '"Marítimo" significa "del mar". Malasia tiene tierra en el continente y en Borneo, pero los cartógrafos suelen ponerla en este grupo.', fa: '«بحری» یعنی «مربوط به بحر». مالیزیا هم روی خشکه و هم در بورنئو زمین دارد، اما نقشه‌کش‌ها اکثراً آن را در همین گروه می‌گذارند.' } }
    ]
  },

  learned: [
    { en: '[[mainland southeast asia|Mainland Southeast Asia]] is joined to Asia: Myanmar, Thailand, Laos, Cambodia and Vietnam. The Mekong is its longest river.', es: 'El [[mainland southeast asia|sudeste asiático continental]] está unido a Asia: Myanmar, Tailandia, Laos, Camboya y Vietnam. El Mekong es su río más largo.', fa: '[[mainland southeast asia|خشکهٔ جنوب شرق آسیا]] به آسیا وصل است: میانمار، تایلند، لائوس، کمبودیا و ویتنام. میکانگ درازترین دریای آن است.' },
    { en: 'Island Southeast Asia is made of [[archipelago|archipelagos]]: Indonesia has more than 17,000 islands, and the Philippines has more than 7,000.', es: 'El sudeste asiático insular está hecho de [[archipelago|archipiélagos]]: Indonesia tiene más de 17,000 islas y Filipinas más de 7,000.', fa: 'جنوب شرق آسیای جزیره‌ای از [[archipelago|مجمع‌الجزایر]] ساخته شده است: اندونیزیا بیش از ۱۷۰۰۰ جزیره و فیلیپین بیش از ۷۰۰۰ جزیره دارد.' },
    { en: 'The [[ring of fire|Ring of Fire]] brings volcanoes and earthquakes, but volcanic ash makes [[fertile|fertile]] soil. People farm [[terrace|terraces]] and plan to stay safe.', es: 'El [[ring of fire|Cinturón de Fuego]] trae volcanes y terremotos, pero la ceniza volcánica hace el suelo [[fertile|fértil]]. La gente cultiva en [[terrace|terrazas]] y se prepara para estar a salvo.', fa: '[[ring of fire|حلقهٔ آتش]] آتشفشان و زلزله می‌آورد، اما خاکستر آتشفشان خاک را [[fertile|حاصلخیز]] می‌کند. مردم در [[terrace|زمین‌های زینه‌ای]] کشت می‌کنند و برای در امان ماندن برنامه می‌ریزند.' }
  ],
  reflect: {
    q: { en: 'Would you live near a volcano if its soil grew lots of food? What good things and what dangers would you weigh?', es: '¿Vivirías cerca de un volcán si su suelo diera mucha comida? ¿Qué cosas buenas y qué peligros compararías?', fa: 'آیا نزدیک یک آتشفشان زندگی می‌کردی اگر خاکش غذای زیاد می‌داد؟ کدام چیزهای خوب و کدام خطرها را مقایسه می‌کردی؟' },
    starter: { en: 'I would choose to live', es: 'Yo elegiría vivir', fa: 'من انتخاب می‌کردم که' }
  }
};
