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
    { en: 'Christopher: "The Quake Grump is shaking the islands apart! Talk to the boat seller, the rice farmer and the volcano watcher. Then fix the compass stone on the little island."',
      es: 'Christopher: "¡El Gruñón Temblor está sacudiendo las islas! Habla con la vendedora del bote, la agricultora de arroz y el vigilante del volcán. Luego arregla la piedra de la brújula en la islita."',
      fa: 'کریستوفر: «غرغروی زلزله جزیره‌ها را تکان می‌دهد! با فروشندهٔ قایق، دهقان برنج و نگهبان آتشفشان گپ بزن. بعد سنگ قطب‌نما را در جزیرهٔ کوچک درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Top-left: mainland Southeast Asia (jungle j, rice q, the Mekong ~ running south to the sea).
     Top-right: open sea with a small island, reached by a wooden walkway (k), and a tiny islet.
     Bottom: two volcanic islands (V) with terraces (t) on their slopes, joined by a bridge (b);
     long north-south bridges (B) cross the water from the mainland and from the small island. */
  map: [
    'jjjjjjj~~jjjjj~~================',
    'jMM..qq~~qq..ps~=~~~~~~~~~~~~~~=',
    'jM..qqq~~qqq..s~=~~~psssp~~~~~~=',
    'j.RRR.q~~q.QQQs~=~~sss,ssp~~~~~=',
    'j.hdh..bb..hdhskkkkks,,.,ss~~~~=',
    'jj....q~~q....s~=~~ss,.,sskksp~=',
    'j,qqqqq~~qqqqqs~=~~~sps.ss~~ss~=',
    'j.qqqqq~~qqqqps~=~~~~ssss~~~~~~=',
    'jp.....~~...xss~=~~~~~~B~~~~~~~=',
    'pssss~~~~~~ssps~=~~~~~~B~~~~~~~=',
    '~~~~B~~~~~~~~~~~=~~~~~~B~~~~~~~=',
    '~~~~B~~~~~~~~~~~~~~~~~~B~~~~~~~=',
    '~psssssssssp~~~~~~~~psssssp~~~~=',
    '~sttMMVMMtts~~~~~~~ssMMVMMss~~~=',
    '~stttMMMttts~~~~~~psMMMMMMMsp~~=',
    '~s.tttttttt.s~~~~~stttMMMttts~~=',
    '~s.qqq:qqqq.sbbbbbss..ttt...ss~=',
    '~sRRR.:.QQQ.s~~~~~s.RRR..QQQ.s~=',
    '~shdh.:.hdh.s~~~~~s.hdh.xhdh.s~=',
    '~pss..:...ssp~~~~~ps.....O...p~=',
    '~~psssssssp~~~~~~~~kkspssspskk~=',
    '================================'
  ],
  start: [3, 2],

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
        { en: 'Xin chào! I sell fruit from my boat on the Mekong River. The Mekong is the longest river in Mainland Southeast Asia. It starts in the mountains of China and reaches the sea in Vietnam.',
          es: '¡Xin chào! Vendo fruta desde mi bote en el río Mekong. El Mekong es el río más largo del sudeste asiático continental. Nace en las montañas de China y llega al mar en Vietnam.',
          fa: 'سین چاو! من از قایقم در دریای میکانگ میوه می‌فروشم. میکانگ درازترین دریای خشکهٔ جنوب شرق آسیا است. از کوه‌های چین شروع می‌شود و در ویتنام به بحر می‌رسد.',
          easy: { en: 'The Mekong is the longest river in Mainland Southeast Asia. It flows from China to Vietnam.', es: 'El Mekong es el río más largo del sudeste asiático continental. Va de China a Vietnam.', fa: 'میکانگ درازترین دریای خشکهٔ جنوب شرق آسیا است. از چین تا ویتنام می‌رود.' } },
        { en: 'Southeast Asia has two parts. [[mainland southeast asia|Mainland Southeast Asia]] is joined to the rest of Asia. It has five countries: Myanmar, Thailand, Laos, Cambodia and Vietnam.',
          es: 'El sudeste asiático tiene dos partes. El [[mainland southeast asia|sudeste asiático continental]] está unido al resto de Asia. Tiene cinco países: Myanmar, Tailandia, Laos, Camboya y Vietnam.',
          fa: 'جنوب شرق آسیا دو بخش دارد. [[mainland southeast asia|خشکهٔ جنوب شرق آسیا]] به باقی آسیا وصل است. پنج کشور دارد: میانمار، تایلند، لائوس، کمبودیا و ویتنام.',
          easy: { en: 'The mainland part has five countries: Myanmar, Thailand, Laos, Cambodia and Vietnam.', es: 'La parte continental tiene cinco países: Myanmar, Tailandia, Laos, Camboya y Vietnam.', fa: 'بخش خشکه پنج کشور دارد: میانمار، تایلند، لائوس، کمبودیا و ویتنام.' } },
        { en: 'The other part is out in the sea: [[maritime southeast asia|Island (Maritime) Southeast Asia]]. Walk east on the wooden walkway, or south over the long bridge. You will see how much water lies between the islands!',
          es: 'La otra parte está en el mar: el [[maritime southeast asia|sudeste asiático insular (marítimo)]]. Camina al este por la pasarela de madera o al sur por el puente largo. ¡Verás cuánta agua hay entre las islas!',
          fa: 'بخش دیگر در بحر است: [[maritime southeast asia|جنوب شرق آسیای جزیره‌ای (بحری)]]. از راه چوبی به طرف شرق یا از پل دراز به طرف جنوب برو. می‌بینی میان جزیره‌ها چقدر آب است!',
          easy: { en: 'The other part is islands in the sea. Cross the bridge to see them.', es: 'La otra parte son islas en el mar. Cruza el puente para verlas.', fa: 'بخش دیگر جزیره‌هایی در بحر است. از پل بگذر تا آن‌ها را ببینی.' } }
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
      look: { skin: 3, hair: '#120e0a', shirt: '#3a9a5a', pants: '#6a3a2a', robe: true },
      lines: [
        { en: 'Selamat datang! Welcome to Java, one island of Indonesia. Indonesia has more than seventeen thousand islands! A big group of islands like this is an [[archipelago|archipelago]].',
          es: '¡Selamat datang! Bienvenido a Java, una isla de Indonesia. ¡Indonesia tiene más de diecisiete mil islas! Un grupo grande de islas como este es un [[archipelago|archipiélago]].',
          fa: 'سلامت داتانگ! به جاوه، یکی از جزیره‌های اندونیزیا، خوش آمدی. اندونیزیا بیش از هفده هزار جزیره دارد! گروه بزرگ جزیره‌ها مثل این را [[archipelago|مجمع‌الجزایر]] می‌گویند.',
          easy: { en: 'Indonesia has more than 17,000 islands. A big group of islands is an [[archipelago|archipelago]].', es: 'Indonesia tiene más de 17,000 islas. Un grupo grande de islas es un [[archipelago|archipiélago]].', fa: 'اندونیزیا بیش از ۱۷۰۰۰ جزیره دارد. گروه بزرگ جزیره‌ها [[archipelago|مجمع‌الجزایر]] است.' } },
        { en: 'See the volcano above my farm? Its ash fell on this land long ago. Over many years, ash breaks down into [[fertile|fertile]] soil. It is full of the minerals plants need.',
          es: '¿Ves el volcán arriba de mi granja? Su ceniza cayó sobre esta tierra hace mucho. Con muchos años, la ceniza se convierte en suelo [[fertile|fértil]]. Está lleno de los minerales que necesitan las plantas.',
          fa: 'آتشفشان بالای کشتزار مرا می‌بینی؟ خاکسترش مدت‌ها پیش روی این زمین ریخت. در طول سال‌ها، خاکستر به خاک [[fertile|حاصلخیز]] تبدیل می‌شود. پر از موادی است که گیاه لازم دارد.',
          easy: { en: 'Volcano ash turns into [[fertile|fertile]] soil. Crops grow well in it.', es: 'La ceniza del volcán se vuelve suelo [[fertile|fértil]]. Los cultivos crecen bien en él.', fa: 'خاکستر آتشفشان به خاک [[fertile|حاصلخیز]] تبدیل می‌شود. کشت در آن خوب می‌روید.' } },
        { en: 'We cut [[terrace|terraces]] into the steep slopes, like giant steps. Each step holds water, so rice can grow on the mountain. This rich soil helps feed one of the most crowded places on Earth.',
          es: 'Cortamos [[terrace|terrazas]] en las laderas empinadas, como escalones gigantes. Cada escalón guarda agua, así que el arroz puede crecer en la montaña. Este suelo rico ayuda a alimentar a uno de los lugares más poblados del planeta.',
          fa: 'ما در دامنه‌های سرازیر [[terrace|زمین‌های زینه‌ای]] می‌سازیم، مثل زینه‌های بزرگ. هر زینه آب را نگه می‌دارد، پس برنج روی کوه می‌روید. این خاک پربار کمک می‌کند یکی از پرجمعیت‌ترین جاهای زمین نان بخورد.',
          easy: { en: '[[terrace|Terraces]] are flat steps on a hill. They hold water for rice.', es: 'Las [[terrace|terrazas]] son escalones planos en un cerro. Guardan agua para el arroz.', fa: '[[terrace|زمین‌های زینه‌ای]] زینه‌های هموار روی تپه هستند. برای برنج آب نگه می‌دارند.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Java sits on the Ring of Fire, and it is very crowded. Why do so many people farm there?', es: 'Java está en el Cinturón de Fuego y tiene muchísima gente. ¿Por qué tanta gente cultiva ahí?', fa: 'جاوه روی حلقهٔ آتش است و بسیار پرجمعیت است. چرا این‌قدر مردم آن‌جا کشاورزی می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Volcanic ash makes the soil rich, so farms grow a lot of food', es: 'La ceniza volcánica hace rico el suelo, así que las granjas producen mucha comida', fa: 'خاکستر آتشفشان خاک را پربار می‌کند، پس کشتزارها غذای زیاد می‌دهند' },
            why: { en: 'Right. People weigh the danger against the good soil.', es: 'Correcto. La gente compara el peligro con el buen suelo.', fa: 'درست است. مردم خطر را با خاک خوب مقایسه می‌کنند.' } },
          { t: { en: 'The island has no volcanoes and no earthquakes', es: 'La isla no tiene volcanes ni terremotos', fa: 'جزیره هیچ آتشفشان و زلزله ندارد' },
            why: { en: 'Java has many volcanoes. It sits right on the Ring of Fire.', es: 'Java tiene muchos volcanes. Está justo en el Cinturón de Fuego.', fa: 'جاوه آتشفشان‌های زیادی دارد. درست روی حلقهٔ آتش است.' } },
          { t: { en: 'Volcano soil is poor, so land is cheap', es: 'El suelo del volcán es pobre, así que la tierra es barata', fa: 'خاک آتشفشان ضعیف است، پس زمین ارزان است' },
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
        { en: 'Mabuhay! I watch this volcano for a living. The Philippines has more than seven thousand islands. We sit on the [[ring of fire|Ring of Fire]], a band around the edge of the Pacific Ocean.',
          es: '¡Mabuhay! Mi trabajo es vigilar este volcán. Filipinas tiene más de siete mil islas. Estamos en el [[ring of fire|Cinturón de Fuego]], una franja alrededor del borde del océano Pacífico.',
          fa: 'مابوهای! کار من نگهبانی همین آتشفشان است. فیلیپین بیش از هفت هزار جزیره دارد. ما روی [[ring of fire|حلقهٔ آتش]] هستیم، کمربندی دور کنارهٔ اقیانوس آرام.',
          easy: { en: 'The Philippines has more than 7,000 islands. It is on the [[ring of fire|Ring of Fire]] around the Pacific Ocean.', es: 'Filipinas tiene más de 7,000 islas. Está en el [[ring of fire|Cinturón de Fuego]] alrededor del Pacífico.', fa: 'فیلیپین بیش از ۷۰۰۰ جزیره دارد. روی [[ring of fire|حلقهٔ آتش]] دور اقیانوس آرام است.' } },
        { en: 'The Earth\'s outer shell is broken into huge [[plate|plates]], like a cracked eggshell. Along the Ring of Fire, plates meet and grind. That shakes the ground with earthquakes and lets melted rock rise up into volcanoes.',
          es: 'La capa exterior de la Tierra está rota en enormes [[plate|placas]], como una cáscara de huevo rajada. En el Cinturón de Fuego, las placas se encuentran y se rozan. Eso sacude el suelo con terremotos y deja subir roca derretida a los volcanes.',
          fa: 'پوستهٔ بیرونی زمین به [[plate|صفحه‌های]] بزرگ شکسته است، مثل پوست تخم‌مرغ کفیده. در حلقهٔ آتش، صفحه‌ها به هم می‌رسند و به هم ساییده می‌شوند. این کار زمین را با زلزله تکان می‌دهد و سنگ ذوب‌شده را به آتشفشان‌ها بالا می‌آورد.',
          easy: { en: 'Big [[plate|plates]] of the Earth grind together here. That makes earthquakes and volcanoes.', es: 'Grandes [[plate|placas]] de la Tierra se rozan aquí. Eso causa terremotos y volcanes.', fa: '[[plate|صفحه‌های]] بزرگ زمین این‌جا به هم ساییده می‌شوند. این زلزله و آتشفشان می‌سازد.' } },
        { en: 'We cannot stop the danger, but we can make it smaller. Sensors watch the volcano day and night. Warnings move people out before an eruption, and drills teach children where to go.',
          es: 'No podemos detener el peligro, pero sí hacerlo más pequeño. Unos sensores vigilan el volcán día y noche. Las alertas sacan a la gente antes de una erupción, y los simulacros enseñan a los niños adónde ir.',
          fa: 'ما نمی‌توانیم خطر را متوقف کنیم، اما می‌توانیم آن را کوچک‌تر کنیم. دستگاه‌ها شب و روز آتشفشان را می‌پایند. هشدارها مردم را پیش از فوران بیرون می‌برند و تمرین‌ها به کودکان یاد می‌دهند کجا بروند.',
          easy: { en: 'Sensors, warnings and drills keep people safer.', es: 'Los sensores, las alertas y los simulacros protegen más a la gente.', fa: 'دستگاه‌ها، هشدارها و تمرین‌ها مردم را بیشتر در امان نگه می‌دارند.' } }
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
    { x: 12, y: 8, text: { en: 'SEA ROUTE · Ships carry rice, rubber and palm oil from Southeast Asia. Many pass through the Strait of Malacca, a narrow sea path near Singapore that links the Indian Ocean and the Pacific Ocean.',
      es: 'RUTA DEL MAR · Los barcos llevan arroz, caucho y aceite de palma del sudeste asiático. Muchos pasan por el estrecho de Malaca, un paso de mar angosto cerca de Singapur que une el océano Índico y el océano Pacífico.',
      fa: 'راه بحری · کشتی‌ها برنج، رابر و روغن نخل را از جنوب شرق آسیا می‌برند. بسیاری از تنگهٔ مالاکا می‌گذرند، یک راه باریک بحری نزدیک سنگاپور که اقیانوس هند را به اقیانوس آرام وصل می‌کند.' } },
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
        { en: 'Welcome to our little island! We have lots of fish and coconuts here. But look: only sand and palm trees. There is no flat, wet land to grow rice.',
          es: '¡Bienvenido a nuestra islita! Aquí tenemos mucho pescado y muchos cocos. Pero mira: solo arena y palmeras. No hay tierra plana y húmeda para sembrar arroz.',
          fa: 'به جزیرهٔ کوچک ما خوش آمدی! این‌جا ماهی و نارگیل زیاد داریم. اما ببین: فقط ریگ و درخت نخل است. هیچ زمین هموار و تر برای کشت برنج نیست.' },
        { en: 'The Quake Grump sank our rice boat, and the festival is soon! Lola Nena farms on the island to the south. Take the long bridge south and ask her.',
          es: '¡El Gruñón Temblor hundió nuestro bote de arroz, y la fiesta es pronto! Lola Nena cultiva en la isla del sur. Toma el puente largo hacia el sur y pregúntale.',
          fa: 'غرغروی زلزله قایق برنج ما را غرق کرد و جشن نزدیک است! لولا ننا در جزیرهٔ جنوبی کشت می‌کند. از پل دراز به طرف جنوب برو و از او بپرس.' }
      ],
      wait: { en: 'Lola Nena is on the island to the south, up on the rice [[terrace|terraces]]. Take the long bridge south.',
        es: 'Lola Nena está en la isla del sur, arriba en las [[terrace|terrazas]] de arroz. Toma el puente largo hacia el sur.',
        fa: 'لولا ننا در جزیرهٔ جنوبی، بالای [[terrace|زمین‌های زینه‌ای]] برنج است. از پل دراز به طرف جنوب برو.' },
      thanks: { en: 'Rice for the festival! Thank you! Our island has plenty of fish. The mainland has plenty of rice. Trade lets each place share what it has extra.',
        es: '¡Arroz para la fiesta! ¡Gracias! Nuestra isla tiene mucho pescado. El continente tiene mucho arroz. El comercio deja que cada lugar comparta lo que le sobra.',
        fa: 'برنج برای جشن! تشکر! جزیرهٔ ما ماهی زیاد دارد. خشکه برنج زیاد دارد. تجارت به هر جا کمک می‌کند آنچه را اضافه دارد با دیگران شریک کند.' }
    },
    contact: {
      x: 26, y: 15,
      name: { en: 'Lola Nena', es: 'Lola Nena', fa: 'لولا ننا' },
      role: { en: 'Rice terrace farmer', es: 'Agricultora de terrazas de arroz', fa: 'دهقان زمین‌های زینه‌ای برنج' },
      look: { skin: 2, hair: '#cfc8bd', shirt: '#2a8ac0', pants: '#5a3a2a', style: 'bun', hat: '#d8b060' },
      lines: [
        { en: 'We grow rice on these [[terrace|terraces]]. But the steps on the mountain are small. They grow just enough rice for our own village.',
          es: 'Cultivamos arroz en estas [[terrace|terrazas]]. Pero los escalones de la montaña son pequeños. Dan solo el arroz justo para nuestro pueblo.',
          fa: 'ما در این [[terrace|زمین‌های زینه‌ای]] برنج می‌کاریم. اما زینه‌های کوه کوچک هستند. فقط برای ده خود ما برنج کافی می‌دهند.' },
        { en: 'Big, flat river plains grow much more. Go to the rice trader by the Mekong, on the [[mainland southeast asia|mainland]] in the north-west. Offer what the little island has plenty of.',
          es: 'Las llanuras grandes y planas de los ríos dan mucho más. Ve con el comerciante de arroz junto al Mekong, en el [[mainland southeast asia|continente]], al noroeste. Ofrécele lo que la islita tiene de sobra.',
          fa: 'دشت‌های بزرگ و هموار کنار دریا خیلی بیشتر برنج می‌دهند. نزد تاجر برنج کنار میکانگ برو، در [[mainland southeast asia|خشکه]] در شمال غرب. چیزی را پیشنهاد کن که جزیرهٔ کوچک زیاد دارد.' }
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
          { en: 'The Mekong floods these flat fields every year. It leaves rich mud behind. So we grow more rice than we can eat!',
            es: 'El Mekong inunda estos campos planos cada año. Deja lodo rico. ¡Por eso cultivamos más arroz del que podemos comer!',
            fa: 'میکانگ هر سال این کشتزارهای هموار را زیر آب می‌برد. گِل پربار به جا می‌گذارد. به همین خاطر بیشتر از آنچه می‌خوریم برنج می‌کاریم!' }
        ]
      },
      q: { en: 'I will give you a big sack of rice. What will you give me for it?', es: 'Te daré un saco grande de arroz. ¿Qué me das a cambio?', fa: 'یک بوجی کلان برنج به تو می‌دهم. در عوض آن چه به من می‌دهی؟' },
      choices: [
        { ok: true, t: { en: 'Dried fish and coconuts from the little island', es: 'Pescado seco y cocos de la islita', fa: 'ماهی خشک و نارگیل از جزیرهٔ کوچک' },
          why: { en: 'Good trade! The island has plenty of fish and coconuts. The mainland has plenty of rice. Each side gives what it has extra.', es: '¡Buen trato! La isla tiene mucho pescado y cocos. El continente tiene mucho arroz. Cada lado da lo que le sobra.', fa: 'معاملهٔ خوب! جزیره ماهی و نارگیل زیاد دارد. خشکه برنج زیاد دارد. هر طرف چیزی را می‌دهد که اضافه دارد.' } },
        { t: { en: 'A sack of rice', es: 'Un saco de arroz', fa: 'یک بوجی برنج' },
          why: { en: 'I already have more rice than I need! And the island has no rice to give.', es: '¡Ya tengo más arroz del que necesito! Y la isla no tiene arroz para dar.', fa: 'من همین حالا بیشتر از ضرورتم برنج دارم! جزیره هم برنجی برای دادن ندارد.' } },
        { t: { en: 'Warm wool coats', es: 'Abrigos de lana', fa: 'کرتی‌های گرم پشمی' },
          why: { en: 'Southeast Asia is near the equator. It is hot all year, so nobody here needs wool coats.', es: 'El sudeste asiático está cerca del ecuador. Hace calor todo el año, así que aquí nadie necesita abrigos de lana.', fa: 'جنوب شرق آسیا نزدیک خط استوا است. تمام سال گرم است، پس این‌جا کسی به کرتی پشمی ضرورت ندارد.' } }
      ],
      item: { icon: '🍚', name: { en: 'A sack of Mekong rice', es: 'Un saco de arroz del Mekong', fa: 'یک بوجی برنج میکانگ' } }
    }
  },

  scraps: [[14, 1], [28, 6], [3, 20]],
  smudges: [[10, 2], [9, 15], [23, 16]],

  challenge: {
    at: [24, 4],
    type: 'sort',
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
        choices: [{ en: 'Volcanic ash makes the soil rich, so farms grow a great deal of food', es: 'La ceniza volcánica hace rico el suelo, así que las granjas producen muchísima comida', fa: 'خاکستر آتشفشان خاک را پربار می‌کند، پس کشتزارها غذای بسیار زیاد می‌دهند' }, { en: 'The island has no earthquakes and no volcanoes', es: 'La isla no tiene terremotos ni volcanes', fa: 'جزیره هیچ زلزله و آتشفشان ندارد' }, { en: 'The government makes people live near volcanoes', es: 'El gobierno obliga a la gente a vivir cerca de volcanes', fa: 'حکومت مردم را مجبور می‌کند نزدیک آتشفشان زندگی کنند' }, { en: 'Java is the only land Indonesia has', es: 'Java es la única tierra que tiene Indonesia', fa: 'جاوه تنها زمینی است که اندونیزیا دارد' }], answer: 0,
        why: { en: 'People weigh a real danger against real benefits: rich soil grows more rice.', es: 'La gente compara un peligro real con beneficios reales: el suelo rico produce más arroz.', fa: 'مردم یک خطر واقعی را با فایده‌های واقعی مقایسه می‌کنند: خاک پربار برنج بیشتر می‌دهد.' } },
      { q: { en: 'What is an archipelago?', es: '¿Qué es un archipiélago?', fa: 'مجمع‌الجزایر چیست؟' },
        choices: [{ en: 'A large group of islands close together', es: 'Un grupo grande de islas cercanas', fa: 'گروه بزرگی از جزیره‌های نزدیک به هم' }, { en: 'A band of volcanoes around an ocean', es: 'Una franja de volcanes alrededor de un océano', fa: 'کمربندی از آتشفشان دور یک اقیانوس' }, { en: 'A wind that changes with the season', es: 'Un viento que cambia con la estación', fa: 'بادی که با فصل تغییر می‌کند' }, { en: 'A high area of land with a flat top', es: 'Una zona alta de tierra con la cima plana', fa: 'یک زمین بلند با سر هموار' }], answer: 0,
        why: { en: 'Indonesia and the Philippines are both [[archipelago|archipelagos]].', es: 'Indonesia y Filipinas son [[archipelago|archipiélagos]].', fa: 'اندونیزیا و فیلیپین هر دو [[archipelago|مجمع‌الجزایر]] هستند.' } },
      { q: { en: 'How does Japan make earthquakes less dangerous?', es: '¿Cómo hace Japón que los terremotos sean menos peligrosos?', fa: 'جاپان چطور زلزله را کم‌خطرتر می‌کند؟' },
        choices: [{ en: 'It builds schools and offices that sway instead of cracking', es: 'Construye escuelas y oficinas que se mecen en vez de romperse', fa: 'مکتب‌ها و دفترهایی می‌سازد که به جای کفیدن تاب می‌خورند' }, { en: 'It moves every city away from the coast', es: 'Muda todas las ciudades lejos de la costa', fa: 'همهٔ شهرها را از ساحل دور می‌برد' }, { en: 'It stops all farming near volcanoes', es: 'Prohíbe toda la agricultura cerca de volcanes', fa: 'همهٔ کشاورزی نزدیک آتشفشان را منع می‌کند' }, { en: 'It closes its ports in the rainy season', es: 'Cierra sus puertos en la temporada de lluvias', fa: 'بندرهای خود را در فصل باران می‌بندد' }], answer: 0,
        why: { en: 'Buildings that bend and sway are less likely to fall. Warnings and drills help too.', es: 'Los edificios que se doblan y se mecen tienen menos riesgo de caerse. Las alertas y los simulacros también ayudan.', fa: 'ساختمان‌هایی که خم می‌شوند و تاب می‌خورند کمتر فرو می‌ریزند. هشدارها و تمرین‌ها هم کمک می‌کنند.' } },
      { q: { en: 'A mapmaker groups Indonesia, the Philippines and Malaysia together. What is that group called?', es: 'Un cartógrafo agrupa a Indonesia, Filipinas y Malasia. ¿Cómo se llama ese grupo?', fa: 'یک نقشه‌کش اندونیزیا، فیلیپین و مالیزیا را در یک گروه می‌گذارد. نام آن گروه چیست؟' },
        choices: [{ en: 'Maritime (Island) Southeast Asia', es: 'Sudeste asiático marítimo (insular)', fa: 'جنوب شرق آسیای بحری (جزیره‌ای)' }, { en: 'Mainland Southeast Asia', es: 'Sudeste asiático continental', fa: 'خشکهٔ جنوب شرق آسیا' }, { en: 'The Indian subcontinent', es: 'El subcontinente indio', fa: 'نیم‌قارهٔ هند' }, { en: 'The Ring of Fire', es: 'El Cinturón de Fuego', fa: 'حلقهٔ آتش' }], answer: 0,
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
