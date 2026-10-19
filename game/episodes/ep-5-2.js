/* WORLDWALKER · Episode 5.2 · Culture and Cultural Diffusion — Iran and the UAE (WG.8, WG.14)
   Top half: the old bazaar town of Kashan (Iran) with a Persian garden. Middle: the water of the Gulf with two crossings.
   Bottom half: Dubai (UAE) — the old dhow harbor, wind-tower houses and a market on the left, glass towers on the right. */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'WG.8, WG.14',
  title: { en: 'Culture and Cultural Diffusion', es: 'Cultura y difusión cultural', fa: 'فرهنگ و پخش فرهنگی' },
  place: { en: 'Kashan and Dubai', es: 'Kashán y Dubái', fa: 'کاشان و دبی' },
  intro: [
    { en: 'Christopher: "The Wall Grump put up walls across the water! Now ideas cannot travel, and the word map is scrambled. Talk to the tea seller, the gardener and the city guide. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón Muro levantó muros sobre el agua! Ahora las ideas no pueden viajar y el mapa de palabras está revuelto. Habla con el vendedor de té, la jardinera y la guía de la ciudad. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغروی دیوار روی آب دیوار ساخت! حالا فکرها نمی‌توانند سفر کنند و نقشهٔ کلمه‌ها به هم خورده است. با چای‌فروش، باغبان و رهنمای شهر گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Rows 1-8: Kashan, Iran — flat-roof houses (J), the covered bazaar lane (f) with stalls (m), a courtyard well (O),
               and a walled Persian garden split in four by water channels.
     Rows 9-11: the Gulf, with two crossings (B) and a small dhow pier (k).
     Rows 12-20: Dubai, UAE — old wind-tower houses (J), a market, a road, and glass towers (U). */
  map: [
    'MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM',
    'MsJJJssJJJssJJJssWWWWWWWWWWWWWsM',
    'MsJJJssJJJssJJJssWT,,,,~,,,,TWsM',
    'MssssssssssssssssW,,T,,~,,T,,WsM',
    'MsmmmsmmmmsmmmmssW~B~~~~~~~B~WsM',
    'M:::::::::::::::::::,,,b,,,,,WsM',
    'MsmmmsmmmmsmmmmssW,,T,,~,,T,,WsM',
    'Mssssssssssss:sssWT,,,,~,,,,TWsM',
    'MsJJJs,O,sJJJ:sssWWWWWWWWWWWWWsM',
    '~~~~~~~~~~~~~B~~~~~~~~~~~~~~~~B~',
    '=============B================B=',
    '~~~kk~~~~~~~~B~~~~~~~~~~~~~~~~B~',
    'psssssssssxssssssssssssssssssssp',
    'psJJJsJJJssmmmsssUUsUUsUUsUUsssp',
    'psJJJsJJJssssssssUUsUUsUUsUUsssp',
    'pssssssssssmmmsssssssssssssssssp',
    'p:::::::::::::::::::::::::::::sp',
    'psmmsmmsmmsssssssUUsmmmmsUUUsssp',
    'pssssssssssssssssUUssssssUUUsxsp',
    'pssssssssssssssssUUssssssUUUsssp',
    'ppsspsssssssspssssspssssssspsssp',
    'pppppppppppppppppppppppppppppppp'
  ],
  start: [4, 16],

  words: {
    culture: { en: 'the way of life a group of people shares: food, language, clothes, buildings, beliefs and games', es: 'la forma de vida que comparte un grupo de personas: comida, idioma, ropa, edificios, creencias y juegos', fa: 'شیوهٔ زندگی که یک گروه مردم با هم دارند: غذا، زبان، لباس، ساختمان، باورها و بازی‌ها' },
    'culture trait': { en: 'one piece of a culture, like a food, a word, a game or a way of building', es: 'una parte de una cultura, como una comida, una palabra, un juego o una forma de construir', fa: 'یک جزء فرهنگ، مثل یک غذا، یک کلمه، یک بازی یا یک شیوهٔ ساختمان‌سازی' },
    'cultural diffusion': { en: 'the spread of a culture trait from one group of people to another', es: 'la propagación de un rasgo cultural de un grupo de personas a otro', fa: 'پخش شدن یک ویژگی فرهنگی از یک گروه مردم به گروه دیگر' },
    'silk road': { en: 'old trade routes that linked China and Europe across deserts and mountains', es: 'antiguas rutas de comercio que unían China y Europa a través de desiertos y montañas', fa: 'راه‌های کهنهٔ تجارتی که چین را از راه بیابان‌ها و کوه‌ها به اروپا وصل می‌کرد' },
    'trade route': { en: 'a path that traders use again and again to carry goods', es: 'un camino que los comerciantes usan una y otra vez para llevar mercancías', fa: 'راهی که تاجران بارها برای بردن کالا از آن استفاده می‌کنند' },
    qanat: { en: 'a long tunnel under the ground that carries water from the mountains to dry land (in Afghanistan: karez)', es: 'un túnel largo bajo la tierra que lleva agua de las montañas a la tierra seca (en Afganistán: karez)', fa: 'تونل درازی زیر زمین که آب را از کوه‌ها به زمین خشک می‌برد (در ایران: قنات)' },
    windcatcher: { en: 'a tall tower on a roof that catches the wind and sends cool air down into the house', es: 'una torre alta en el techo que atrapa el viento y manda aire fresco hacia dentro de la casa', fa: 'برج بلندی روی بام که باد را می‌گیرد و هوای سرد را به داخل خانه می‌فرستد' },
    'cultural landscape': { en: 'everything people have built on the land: buildings, signs, shops, streets and houses of worship', es: 'todo lo que la gente ha construido sobre la tierra: edificios, letreros, tiendas, calles y lugares de culto', fa: 'هر چیزی که مردم روی زمین ساخته‌اند: ساختمان‌ها، تابلوها، دکان‌ها، سرک‌ها و عبادتگاه‌ها' },
    institution: { en: 'an organized part of a culture, like a school, a court or a place of worship', es: 'una parte organizada de una cultura, como una escuela, un tribunal o un lugar de culto', fa: 'یک بخش منظم فرهنگ، مثل مکتب، محکمه یا عبادتگاه' },
    'cultural identity': { en: 'your feeling of belonging to a cultural group; you can have more than one', es: 'tu sentido de pertenecer a un grupo cultural; puedes tener más de uno', fa: 'احساس تعلق تو به یک گروه فرهنگی؛ می‌توانی بیش از یکی داشته باشی' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Reza', es: 'Reza', fa: 'رضا' },
      role: { en: 'Tea seller in the bazaar', es: 'Vendedor de té en el bazar', fa: 'چای‌فروش در بازار' },
      look: { skin: 1, hair: '#2a1d14', shirt: '#7a4a2a', pants: '#3a3a44' },
      lines: [
        { en: 'Salaam! Welcome to the old bazaar of Kashan, in Iran. Look around: carpets, spices, tea and music. All of it is [[culture|culture]]. Culture is the way of life a group of people shares.',
          es: '¡Salam! Bienvenido al viejo bazar de Kashán, en Irán. Mira a tu alrededor: alfombras, especias, té y música. Todo eso es [[culture|cultura]]. La cultura es la forma de vida que comparte un grupo de personas.',
          fa: 'سلام! به بازار کهنهٔ کاشان در ایران خوش آمدی. به اطراف نگاه کن: قالین، ادویه، چای و موسیقی. همهٔ این‌ها [[culture|فرهنگ]] است. فرهنگ شیوهٔ زندگی است که یک گروه مردم با هم دارند.',
          easy: { en: 'Hi! Food, music, clothes and buildings are all part of [[culture|culture]]. Culture is a group\'s way of life.', es: '¡Hola! La comida, la música, la ropa y los edificios son parte de la [[culture|cultura]]. La cultura es la forma de vida de un grupo.', fa: 'سلام! غذا، موسیقی، لباس و ساختمان همه بخشی از [[culture|فرهنگ]] هستند. فرهنگ شیوهٔ زندگی یک گروه است.' } },
        { en: 'Each piece of a culture is a [[culture trait|culture trait]]. A food, a word or a game can be a trait. Traits do not stay home. Tea first grew in China. Traders carried it west on the [[silk road|Silk Road]].',
          es: 'Cada parte de una cultura es un [[culture trait|rasgo cultural]]. Una comida, una palabra o un juego pueden ser un rasgo. Los rasgos no se quedan en casa. El té creció primero en China. Los comerciantes lo llevaron al oeste por la [[silk road|Ruta de la Seda]].',
          fa: 'هر جزء فرهنگ یک [[culture trait|ویژگی فرهنگی]] است. یک غذا، یک کلمه یا یک بازی می‌تواند یک ویژگی باشد. ویژگی‌ها در خانه نمی‌مانند. چای اول در چین سبز شد. تاجران آن را از [[silk road|راه ابریشم]] به غرب آوردند.',
          easy: { en: 'One piece of culture is a [[culture trait|culture trait]]. Tea came from China. Traders carried it here.', es: 'Una parte de la cultura es un [[culture trait|rasgo cultural]]. El té vino de China. Los comerciantes lo trajeron aquí.', fa: 'یک جزء فرهنگ [[culture trait|ویژگی فرهنگی]] است. چای از چین آمد. تاجران آن را این‌جا آوردند.' } },
        { en: 'When a trait spreads from one group to another, it is [[cultural diffusion|cultural diffusion]]. It only needs people to meet, trade or travel. Chess began in India. Traders carried it to Persia, and then to Europe.',
          es: 'Cuando un rasgo pasa de un grupo a otro, es [[cultural diffusion|difusión cultural]]. Solo hace falta que la gente se encuentre, comercie o viaje. El ajedrez empezó en la India. Los comerciantes lo llevaron a Persia y luego a Europa.',
          fa: 'وقتی یک ویژگی از یک گروه به گروه دیگر پخش می‌شود، آن را [[cultural diffusion|پخش فرهنگی]] می‌گوییم. فقط لازم است مردم همدیگر را ببینند، تجارت کنند یا سفر کنند. شطرنج در هند شروع شد. تاجران آن را به فارس و بعد به اروپا بردند.',
          easy: { en: 'A trait that spreads to new people = [[cultural diffusion|cultural diffusion]]. Chess went from India to Persia to Europe.', es: 'Un rasgo que llega a gente nueva = [[cultural diffusion|difusión cultural]]. El ajedrez fue de la India a Persia y a Europa.', fa: 'ویژگی‌ای که به مردم تازه می‌رسد = [[cultural diffusion|پخش فرهنگی]]. شطرنج از هند به فارس و به اروپا رفت.' } }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is cultural diffusion?', es: '¿Qué es la difusión cultural?', fa: 'پخش فرهنگی چیست؟' },
        choices: [
          { ok: true, t: { en: 'The spread of a culture trait from one group to another', es: 'La propagación de un rasgo cultural de un grupo a otro', fa: 'پخش شدن یک ویژگی فرهنگی از یک گروه به گروه دیگر' },
            why: { en: 'Yes. Tea and chess spread when people met and traded.', es: 'Sí. El té y el ajedrez se propagaron cuando la gente se encontró y comerció.', fa: 'بلی. چای و شطرنج وقتی پخش شدند که مردم همدیگر را دیدند و تجارت کردند.' } },
          { t: { en: 'A group keeping its culture exactly the same forever', es: 'Un grupo que mantiene su cultura igual para siempre', fa: 'گروهی که فرهنگ خود را برای همیشه بدون تغییر نگه می‌دارد' },
            why: { en: 'Diffusion is about change and spreading, not staying the same.', es: 'La difusión trata de cambiar y propagarse, no de quedarse igual.', fa: 'پخش فرهنگی دربارهٔ تغییر و پخش شدن است، نه یکسان ماندن.' } },
          { t: { en: 'A law that stops new foods from coming in', es: 'Una ley que impide la llegada de comidas nuevas', fa: 'قانونی که نمی‌گذارد غذاهای تازه بیایند' },
            why: { en: 'Diffusion needs no law or permission. It only needs people to meet.', es: 'La difusión no necesita leyes ni permiso. Solo necesita que la gente se encuentre.', fa: 'پخش فرهنگی به قانون یا اجازه نیاز ندارد. فقط لازم است مردم همدیگر را ببینند.' } }
        ]
      }
    },
    {
      x: 24, y: 6,
      name: { en: 'Shirin', es: 'Shirin', fa: 'شیرین' },
      role: { en: 'Gardener of the Persian garden', es: 'Jardinera del jardín persa', fa: 'باغبان باغ ایرانی' },
      look: { skin: 2, hair: '#1e1612', shirt: '#2f8a5a', pants: '#35304a', robe: true },
      lines: [
        { en: 'This is a Persian garden. Water channels cut it into four parts. But Kashan sits next to a dry desert. Where does the water come from? Across Iran, people dug a [[qanat|qanat]]: a long tunnel under the ground that brings water from the mountains.',
          es: 'Este es un jardín persa. Canales de agua lo dividen en cuatro partes. Pero Kashán está junto a un desierto seco. ¿De dónde viene el agua? En todo Irán, la gente cavó un [[qanat|qanat]]: un túnel largo bajo la tierra que trae agua de las montañas.',
          fa: 'این یک باغ ایرانی است. جوی‌های آب آن را چهار بخش می‌کنند. اما کاشان کنار یک بیابان خشک است. آب از کجا می‌آید؟ در سراسر ایران مردم [[qanat|کاریز]] کندند: تونل درازی زیر زمین که آب را از کوه‌ها می‌آورد.',
          easy: { en: 'This garden is in a dry land. A [[qanat|qanat]] is a tunnel under the ground. It brings water from the mountains.', es: 'Este jardín está en una tierra seca. Un [[qanat|qanat]] es un túnel bajo la tierra. Trae agua de las montañas.', fa: 'این باغ در یک زمین خشک است. [[qanat|کاریز]] یک تونل زیر زمین است. آب را از کوه‌ها می‌آورد.' } },
        { en: 'Qanats are very old. The idea spread from Iran to many dry lands. In Afghanistan people call them karez! Even the English word "paradise" comes from an old Persian word for a walled garden like this one.',
          es: 'Los qanats son muy antiguos. La idea pasó de Irán a muchas tierras secas. ¡En Afganistán los llaman karez! Hasta la palabra "paraíso" viene de una palabra persa antigua para un jardín con muros como este.',
          fa: 'کاریزها خیلی کهنه هستند. این فکر از ایران به بسیاری از سرزمین‌های خشک پخش شد. در ایران به آن قنات می‌گویند و در افغانستان کاریز! حتی کلمهٔ انگلیسی «پارادایس» (بهشت) از یک کلمهٔ کهنهٔ فارسی برای باغ دیوارداری مثل همین باغ آمده است.',
          easy: { en: 'The qanat idea spread to many dry lands. In Afghanistan it is called karez. The word "paradise" comes from Persian too.', es: 'La idea del qanat llegó a muchas tierras secas. En Afganistán se llama karez. La palabra "paraíso" también viene del persa.', fa: 'فکر کاریز به بسیاری از سرزمین‌های خشک رسید. در ایران قنات می‌گویند. کلمهٔ «پارادایس» هم از فارسی آمده است.' } }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did people in dry parts of Iran dig qanats?', es: '¿Por qué la gente de las partes secas de Irán cavó qanats?', fa: 'چرا مردم در بخش‌های خشک ایران کاریز کندند؟' },
        choices: [
          { ok: true, t: { en: 'To bring water from the mountains to their towns and farms', es: 'Para traer agua de las montañas a sus pueblos y granjas', fa: 'تا آب را از کوه‌ها به شهرها و کشتزارهای خود بیاورند' },
            why: { en: 'Right. People changed the land so they could live in a dry place.', es: 'Correcto. La gente cambió la tierra para poder vivir en un lugar seco.', fa: 'درست است. مردم زمین را تغییر دادند تا بتوانند در یک جای خشک زندگی کنند.' } },
          { t: { en: 'To hide from the wind', es: 'Para esconderse del viento', fa: 'تا از باد پنهان شوند' },
            why: { en: 'A qanat carries water, not people.', es: 'Un qanat lleva agua, no personas.', fa: 'کاریز آب را می‌برد، نه مردم را.' } },
          { t: { en: 'To make roads for camels', es: 'Para hacer caminos para los camellos', fa: 'تا برای شترها راه بسازند' },
            why: { en: 'The tunnel is under the ground and full of water. It is not a road.', es: 'El túnel está bajo la tierra y lleno de agua. No es un camino.', fa: 'تونل زیر زمین و پر از آب است. سرک نیست.' } }
        ]
      }
    },
    {
      x: 22, y: 15,
      name: { en: 'Hessa', es: 'Hessa', fa: 'حصه' },
      role: { en: 'City guide in Dubai', es: 'Guía de la ciudad en Dubái', fa: 'رهنمای شهر در دبی' },
      look: { skin: 3, hair: '#120d0a', shirt: '#2a5fae', pants: '#1f2a44', robe: true },
      lines: [
        { en: 'Welcome to Dubai, in the United Arab Emirates! You can read a street like a page. Everything people built on the land is the [[cultural landscape|cultural landscape]]: towers, shops, signs and houses of worship.',
          es: '¡Bienvenido a Dubái, en los Emiratos Árabes Unidos! Puedes leer una calle como una página. Todo lo que la gente construyó sobre la tierra es el [[cultural landscape|paisaje cultural]]: torres, tiendas, letreros y lugares de culto.',
          fa: 'به دبی در امارات متحدهٔ عربی خوش آمدی! می‌توانی یک سرک را مثل یک صفحه بخوانی. هر چیزی که مردم روی زمین ساخته‌اند [[cultural landscape|منظرهٔ فرهنگی]] است: برج‌ها، دکان‌ها، تابلوها و عبادتگاه‌ها.',
          easy: { en: 'Buildings, shops and signs that people made are the [[cultural landscape|cultural landscape]]. You can read them like a book.', es: 'Los edificios, tiendas y letreros que hizo la gente son el [[cultural landscape|paisaje cultural]]. Puedes leerlos como un libro.', fa: 'ساختمان‌ها، دکان‌ها و تابلوهایی که مردم ساخته‌اند [[cultural landscape|منظرهٔ فرهنگی]] است. می‌توانی آن‌ها را مثل کتاب بخوانی.' } },
        { en: 'Look at the signs. Most are in Arabic and English. Most people who live in Dubai were born in other countries, like India, Pakistan and the Philippines. So you see their languages and foods here too.',
          es: 'Mira los letreros. La mayoría están en árabe e inglés. La mayoría de la gente que vive en Dubái nació en otros países, como la India, Pakistán y Filipinas. Por eso también ves sus idiomas y sus comidas aquí.',
          fa: 'به تابلوها نگاه کن. بیشتر آن‌ها به عربی و انگلیسی هستند. بیشتر مردمی که در دبی زندگی می‌کنند در کشورهای دیگر مثل هند، پاکستان و فیلیپین به دنیا آمده‌اند. پس زبان‌ها و غذاهای آن‌ها را هم این‌جا می‌بینی.',
          easy: { en: 'Signs here are in Arabic and English. Many people came from other countries, so you see many languages.', es: 'Aquí los letreros están en árabe e inglés. Mucha gente vino de otros países, así que ves muchos idiomas.', fa: 'تابلوهای این‌جا به عربی و انگلیسی هستند. مردم زیادی از کشورهای دیگر آمده‌اند، پس زبان‌های زیادی می‌بینی.' } },
        { en: 'Old Dubai has houses with tall [[windcatcher|windcatchers]] on the roof. Traders from Iran built many of them over 100 years ago. They carried the idea across the water. That is cultural diffusion you can touch!',
          es: 'El Dubái antiguo tiene casas con [[windcatcher|torres de viento]] altas en el techo. Comerciantes de Irán construyeron muchas hace más de 100 años. Llevaron la idea a través del agua. ¡Es difusión cultural que puedes tocar!',
          fa: 'دبی کهنه خانه‌هایی با [[windcatcher|بادگیر]] بلند روی بام دارد. تاجران ایرانی بسیاری از آن‌ها را بیش از ۱۰۰ سال پیش ساختند. آن‌ها این فکر را از آن طرف آب آوردند. این پخش فرهنگی است که می‌توانی لمسش کنی!',
          easy: { en: 'Traders from Iran built houses with [[windcatcher|windcatchers]] here long ago. The idea crossed the water.', es: 'Comerciantes de Irán construyeron aquí casas con [[windcatcher|torres de viento]] hace mucho. La idea cruzó el agua.', fa: 'تاجران ایرانی مدت‌ها پیش این‌جا خانه‌هایی با [[windcatcher|بادگیر]] ساختند. این فکر از آب گذشت.' } }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The shop signs on one street are in Arabic, English, Urdu and Tagalog. What does that tell you?', es: 'Los letreros de una calle están en árabe, inglés, urdu y tagalo. ¿Qué te dice eso?', fa: 'تابلوهای دکان‌ها در یک سرک به عربی، انگلیسی، اردو و تاگالوگ هستند. این به تو چه می‌گوید؟' },
        choices: [
          { ok: true, t: { en: 'People from many cultures live and shop on that street', es: 'Gente de muchas culturas vive y compra en esa calle', fa: 'مردمی از فرهنگ‌های زیاد در آن سرک زندگی و خرید می‌کنند' },
            why: { en: 'Yes. The languages on signs show who uses the street.', es: 'Sí. Los idiomas de los letreros muestran quién usa la calle.', fa: 'بلی. زبان تابلوها نشان می‌دهد چه کسانی از آن سرک استفاده می‌کنند.' } },
          { t: { en: 'The street was built in one day', es: 'La calle se construyó en un día', fa: 'آن سرک در یک روز ساخته شد' },
            why: { en: 'Signs show who shops there, not how fast it was built.', es: 'Los letreros muestran quién compra ahí, no qué tan rápido se construyó.', fa: 'تابلوها نشان می‌دهند چه کسی آن‌جا خرید می‌کند، نه این‌که چقدر زود ساخته شد.' } },
          { t: { en: 'Nobody lives near that street', es: 'Nadie vive cerca de esa calle', fa: 'هیچ کس نزدیک آن سرک زندگی نمی‌کند' },
            why: { en: 'Shops put up signs for the people who come there.', es: 'Las tiendas ponen letreros para la gente que llega ahí.', fa: 'دکان‌ها برای مردمی که آن‌جا می‌آیند تابلو می‌گذارند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 10, y: 12, text: { en: 'DHOW HARBOR · Wooden boats called dhows have sailed between Iran and the UAE for hundreds of years. They carry spices, cloth and rice. A [[trade route|trade route]] carries new ideas along with the goods.',
      es: 'PUERTO DE DHOWS · Los barcos de madera llamados dhows navegan entre Irán y los Emiratos desde hace cientos de años. Llevan especias, tela y arroz. Una [[trade route|ruta comercial]] lleva ideas nuevas junto con las mercancías.',
      fa: 'بندر جهازهای چوبی · کشتی‌های چوبی به نام «داو» صدها سال است که میان ایران و امارات سفر می‌کنند. ادویه، تکه و برنج می‌برند. یک [[trade route|راه تجارتی]] همراه کالاها فکرهای تازه را هم می‌برد.' } },
    { x: 29, y: 18, text: { en: 'FOOD STREET · Pizza from Italy · tacos from Mexico · biryani from South Asia · sushi from Japan · tea from China. One street, food from all over the world.',
      es: 'CALLE DE COMIDA · Pizza de Italia · tacos de México · biryani del sur de Asia · sushi de Japón · té de China. Una sola calle, comida de todo el mundo.',
      fa: 'سرک غذا · پیتزا از ایتالیا · تاکو از مکزیک · بریانی از جنوب آسیا · سوشی از جاپان · چای از چین. یک سرک، غذا از سراسر جهان.' } }
  ],

  /* the quest: Priya the sweet maker in Dubai (gold !) -> Babak the rose picker in the Persian garden -> trade for rosewater in the Kashan bazaar -> back to Priya */
  quest: {
    stat: 'mov',
    title: { en: 'Rosewater from Kashan', es: 'Agua de rosas de Kashán', fa: 'گلاب کاشان' },
    giver: {
      x: 8, y: 19,
      name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      role: { en: 'Sweet maker in old Dubai', es: 'Pastelera en el Dubái antiguo', fa: 'شیرینی‌پز در دبی کهنه' },
      look: { skin: 3, hair: '#140e0a', shirt: '#e0457b', pants: '#4a2a5a', style: 'long' },
      lines: [
        { en: 'Hello! My family came to Dubai from India. I make sweets called gulab jamun. But the Grump\'s wall stopped the boats, and I have no rosewater left!',
          es: '¡Hola! Mi familia llegó a Dubái desde la India. Hago unos dulces llamados gulab jamun. ¡Pero el muro del Gruñón detuvo los barcos y ya no tengo agua de rosas!',
          fa: 'سلام! خانوادهٔ من از هند به دبی آمد. من شیرینی‌ای به نام گلاب جامن می‌پزم. اما دیوار غرغرو کشتی‌ها را بند کرد و دیگر گلاب ندارم!' },
        { en: 'The best rosewater comes from Kashan, across the water in Iran. Please take my basket of goods from the harbor. Babak, who picks roses in the Persian garden, can help you.',
          es: 'La mejor agua de rosas viene de Kashán, al otro lado del agua, en Irán. Por favor, lleva mi canasta con productos del puerto. Babak, que recoge rosas en el jardín persa, te puede ayudar.',
          fa: 'بهترین گلاب از کاشان می‌آید، آن طرف آب در ایران. لطفاً سبد کالاهای بندر مرا با خود ببر. بابک، که در باغ ایرانی گل می‌چیند، می‌تواند کمکت کند.' }
      ],
      wait: { en: 'Cross the water to the north. The Persian garden is in the north-east, behind a wall.',
        es: 'Cruza el agua hacia el norte. El jardín persa está en el noreste, detrás de un muro.',
        fa: 'از آب به طرف شمال بگذر. باغ ایرانی در شمال شرق است، پشت یک دیوار.' },
      thanks: { en: 'Rosewater from Kashan! Thank you! Did you know? "Gulab" means rosewater. It comes from Persian: "gol" is rose and "ab" is water. The word crossed the sea with the [[trade route|traders]].',
        es: '¡Agua de rosas de Kashán! ¡Gracias! ¿Sabías? "Gulab" significa agua de rosas. Viene del persa: "gol" es rosa y "ab" es agua. La palabra cruzó el mar con los comerciantes, por una [[trade route|ruta comercial]].',
        fa: 'گلاب کاشان! تشکر! می‌دانستی؟ کلمهٔ «گلاب» در زبان هندی هم هست. از فارسی آمده: «گل» و «آب». این کلمه همراه تاجران از یک [[trade route|راه تجارتی]] از بحر گذشت.' }
    },
    contact: {
      x: 21, y: 7,
      name: { en: 'Babak', es: 'Babak', fa: 'بابک' },
      role: { en: 'Rose picker in the Persian garden', es: 'Recolector de rosas del jardín persa', fa: 'گل‌چین در باغ ایرانی' },
      look: { skin: 1, hair: '#3a2a1e', shirt: '#c94a5a', pants: '#3a4a3a', hat: '#d8c9a0' },
      lines: [
        { en: 'Every spring we pick pink roses near Kashan. We boil the petals to make rosewater. People in many countries use it in sweets.',
          es: 'Cada primavera recogemos rosas rosadas cerca de Kashán. Hervimos los pétalos para hacer agua de rosas. Gente de muchos países la usa en dulces.',
          fa: 'هر بهار ما نزدیک کاشان گل گلابی می‌چینیم. برگ‌های گل را می‌جوشانیم تا گلاب بسازیم. مردم در کشورهای زیاد از آن در شیرینی استفاده می‌کنند.' },
        { en: 'Hamid sells our rosewater in the bazaar, at the east end of the stalls. He only trades for things Kashan does not have. Remember: Kashan is far from the sea.',
          es: 'Hamid vende nuestra agua de rosas en el bazar, al final de los puestos, del lado este. Solo cambia cosas que Kashán no tiene. Recuerda: Kashán está lejos del mar.',
          fa: 'حمید گلاب ما را در بازار می‌فروشد، در آخر دکان‌ها طرف شرق. او فقط چیزهایی را می‌گیرد که کاشان ندارد. یادت باشد: کاشان از بحر دور است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 15, y: 6,
        name: { en: 'Hamid', es: 'Hamid', fa: 'حمید' },
        role: { en: 'Rosewater seller', es: 'Vendedor de agua de rosas', fa: 'گلاب‌فروش' },
        look: { skin: 2, hair: '#9a948a', shirt: '#4a6a8a', pants: '#2a2a30', robe: true },
        lines: [
          { en: 'Rosewater, the best in Iran! A trade is fair when each side gets something it does not have at home.',
            es: '¡Agua de rosas, la mejor de Irán! Un cambio es justo cuando cada lado recibe algo que no tiene en casa.',
            fa: 'گلاب، بهترین گلاب ایران! یک معامله وقتی عادلانه است که هر طرف چیزی بگیرد که در خانه ندارد.' }
        ]
      },
      q: { en: 'What will you give Hamid for a bottle of rosewater?', es: '¿Qué le das a Hamid por una botella de agua de rosas?', fa: 'برای یک بوتل گلاب به حمید چه می‌دهی؟' },
      choices: [
        { ok: true, t: { en: 'Pearls and dried fish from the Gulf', es: 'Perlas y pescado seco del golfo', fa: 'مروارید و ماهی خشک از خلیج' },
          why: { en: 'Yes! Kashan is far from the sea, so sea goods are rare here. Dubai has plenty of them.', es: '¡Sí! Kashán está lejos del mar, así que aquí casi no hay productos del mar. Dubái tiene muchos.', fa: 'بلی! کاشان از بحر دور است، پس چیزهای بحری این‌جا کم است. دبی از آن‌ها زیاد دارد.' } },
        { t: { en: 'A handwoven carpet', es: 'Una alfombra tejida a mano', fa: 'یک قالین دست‌باف' },
          why: { en: 'Kashan is famous for its own carpets. The bazaar is full of them.', es: 'Kashán es famosa por sus propias alfombras. El bazar está lleno de ellas.', fa: 'کاشان به خاطر قالین‌های خودش مشهور است. بازار پر از قالین است.' } },
        { t: { en: 'A bag of desert sand', es: 'Una bolsa de arena del desierto', fa: 'یک خلته ریگ بیابان' },
          why: { en: 'Kashan sits next to a desert. There is sand everywhere here!', es: 'Kashán está junto a un desierto. ¡Aquí hay arena por todas partes!', fa: 'کاشان کنار یک بیابان است. این‌جا همه جا ریگ است!' } }
      ],
      item: { icon: '🌹', name: { en: 'Bottle of Kashan rosewater', es: 'Botella de agua de rosas de Kashán', fa: 'بوتل گلاب کاشان' } }
    }
  },

  scraps: [[15, 1], [20, 2], [3, 11]],
  smudges: [[7, 3], [20, 20], [22, 5]],

  challenge: {
    at: [13, 18],
    type: 'sort',
    stat: 'reg',
    title: { en: 'Words that traveled', es: 'Palabras que viajaron', fa: 'کلمه‌هایی که سفر کردند' },
    intro: { en: 'The Grump scrambled the word map! Every English word on these cards traveled from far away. Sort each word. Did it come into English from Arabic, or from Persian (Farsi and Dari)?',
      es: '¡El Gruñón revolvió el mapa de palabras! Cada palabra inglesa de estas tarjetas viajó desde lejos. Ordena cada palabra. ¿Llegó al inglés desde el árabe o desde el persa (farsi y dari)?',
      fa: 'غرغرو نقشهٔ کلمه‌ها را به هم زد! هر کلمهٔ انگلیسی روی این کارت‌ها از جای دور سفر کرده است. هر کلمه را جدا کن. آیا از عربی به انگلیسی آمده یا از فارسی (فارسی ایران و دری)؟' },
    bins: [
      { id: 'ar', icon: '📘', label: { en: 'From Arabic', es: 'Del árabe', fa: 'از عربی' }, sub: { en: 'spoken in the UAE and many other countries', es: 'se habla en los Emiratos y muchos otros países', fa: 'در امارات و بسیاری کشورهای دیگر گپ زده می‌شود' } },
      { id: 'fa', icon: '📗', label: { en: 'From Persian', es: 'Del persa', fa: 'از فارسی' }, sub: { en: 'spoken in Iran, Afghanistan (Dari) and Tajikistan', es: 'se habla en Irán, Afganistán (dari) y Tayikistán', fa: 'در ایران، افغانستان (دری) و تاجیکستان گپ زده می‌شود' } }
    ],
    items: [
      { bin: 'ar', t: { en: 'algebra', es: 'algebra (álgebra)', fa: 'algebra (الجبر)' }, why: { en: '"Algebra" comes from the Arabic "al-jabr". It was in the name of a math book written in Baghdad more than 1,000 years ago.', es: '"Algebra" viene del árabe "al-jabr". Estaba en el nombre de un libro de matemáticas escrito en Bagdad hace más de 1,000 años.', fa: '«الجبرا» از کلمهٔ عربی «الجبر» آمده است. این کلمه در نام یک کتاب ریاضی بود که بیش از ۱۰۰۰ سال پیش در بغداد نوشته شد.' } },
      { bin: 'ar', t: { en: 'coffee', es: 'coffee (café)', fa: 'coffee (قهوه)' }, why: { en: '"Coffee" comes from the Arabic "qahwa". Traders carried the drink and its name from Yemen to Turkey and then to Europe.', es: '"Coffee" viene del árabe "qahwa". Los comerciantes llevaron la bebida y su nombre de Yemen a Turquía y luego a Europa.', fa: '«کافی» از کلمهٔ عربی «قهوه» آمده است. تاجران این نوشیدنی و نامش را از یمن به ترکیه و بعد به اروپا بردند.' } },
      { bin: 'ar', t: { en: 'cotton', es: 'cotton (algodón)', fa: 'cotton (پنبه)' }, why: { en: '"Cotton" comes from the Arabic "qutn". Traders sold cotton cloth around the Mediterranean, and the word went with it.', es: '"Cotton" viene del árabe "qutn". Los comerciantes vendían tela de algodón alrededor del Mediterráneo y la palabra viajó con ella.', fa: '«کاتن» از کلمهٔ عربی «قطن» آمده است. تاجران تکهٔ پنبه‌ای را دور بحیرهٔ مدیترانه فروختند و کلمه هم با آن رفت.' } },
      { bin: 'ar', t: { en: 'giraffe', es: 'giraffe (jirafa)', fa: 'giraffe (زرافه)' }, why: { en: '"Giraffe" comes from the Arabic "zarafa". The name traveled through Italy into English.', es: '"Giraffe" viene del árabe "zarafa". El nombre pasó por Italia y llegó al inglés.', fa: '«جیراف» از کلمهٔ عربی «زرافه» آمده است. این نام از راه ایتالیا به انگلیسی رسید.' } },
      { bin: 'fa', t: { en: 'bazaar', es: 'bazaar (bazar)', fa: 'bazaar (بازار)' }, why: { en: '"Bazaar" comes from the Persian "bazar", a market. You still say bazar in Dari and Farsi today.', es: '"Bazaar" viene del persa "bazar", un mercado. Hoy todavía se dice bazar en dari y en farsi.', fa: '«بازار» از کلمهٔ فارسی «بازار» آمده است. امروز هم در دری و فارسی «بازار» می‌گوییم.' } },
      { bin: 'fa', t: { en: 'caravan', es: 'caravan (caravana)', fa: 'caravan (کاروان)' }, why: { en: '"Caravan" comes from the Persian "karvan", a group of traders who travel together, like on the Silk Road.', es: '"Caravan" viene del persa "karvan", un grupo de comerciantes que viajan juntos, como en la Ruta de la Seda.', fa: '«کاراوان» از کلمهٔ فارسی «کاروان» آمده است: گروهی از تاجران که با هم سفر می‌کنند، مثل راه ابریشم.' } },
      { bin: 'fa', t: { en: 'pajamas', es: 'pajamas (pijama)', fa: 'pajamas (پای‌جامه)' }, why: { en: '"Pajamas" comes from the Persian "pay" (leg) and "jama" (clothing). The word traveled through India into English.', es: '"Pajamas" viene del persa "pay" (pierna) y "jama" (ropa). La palabra pasó por la India y llegó al inglés.', fa: '«پاجامه» از «پای» و «جامه» در فارسی آمده است. این کلمه از راه هند به انگلیسی رسید.' } },
      { bin: 'fa', t: { en: 'paradise', es: 'paradise (paraíso)', fa: 'paradise (پردیس)' }, why: { en: '"Paradise" comes from an old Persian word for a walled garden. It traveled through Greek into English.', es: '"Paradise" viene de una palabra persa antigua para un jardín con muros. Pasó por el griego y llegó al inglés.', fa: '«پارادایس» از یک کلمهٔ کهنهٔ فارسی برای باغ دیواردار آمده است (پردیس). از راه یونانی به انگلیسی رسید.' } }
    ],
    success: { en: 'The word map is clear again. Words travel with people, just like food and games!', es: '¡El mapa de palabras vuelve a estar claro! Las palabras viajan con la gente, igual que la comida y los juegos.', fa: 'نقشهٔ کلمه‌ها دوباره روشن شد. کلمه‌ها مثل غذا و بازی همراه مردم سفر می‌کنند!' }
  },

  boss: {
    at: [24, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Wall Grump', es: 'El Gruñón Muro', fa: 'غرغروی دیوار' },
    appear: { en: 'The Wall Grump is hiding between the glass towers of Dubai!', es: '¡El Gruñón Muro se esconde entre las torres de vidrio de Dubái!', fa: 'غرغروی دیوار میان برج‌های شیشه‌ای دبی پنهان است!' },
    taunt: { en: 'Hmph! Ideas should stay home. I will stop every word and every recipe at the wall!', es: '¡Bah! Las ideas deben quedarse en casa. ¡Detendré cada palabra y cada receta en el muro!', fa: 'هه! فکرها باید در خانه بمانند. هر کلمه و هر دستور پخت را پشت دیوار نگه می‌دارم!' },
    win: { en: 'The wall crumbles. Ideas fly free, and atlas page 5.2 lands in your hands!', es: 'El muro se derrumba. Las ideas vuelan libres, ¡y la página 5.2 del atlas cae en tus manos!', fa: 'دیوار فرو می‌ریزد. فکرها آزاد پرواز می‌کنند و صفحهٔ ۵.۲ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is cultural diffusion?', es: '¿Qué es la difusión cultural?', fa: 'پخش فرهنگی چیست؟' },
        choices: [{ en: 'The spread of a culture trait from one group to another', es: 'La propagación de un rasgo cultural de un grupo a otro', fa: 'پخش شدن یک ویژگی فرهنگی از یک گروه به گروه دیگر' }, { en: 'Two cultures fighting over land', es: 'Dos culturas peleando por tierra', fa: 'جنگ دو فرهنگ بر سر زمین' }, { en: 'A culture that never changes', es: 'Una cultura que nunca cambia', fa: 'فرهنگی که هرگز تغییر نمی‌کند' }, { en: 'People moving from a village to a city', es: 'Gente que se muda de un pueblo a una ciudad', fa: 'رفتن مردم از قریه به شهر' }], answer: 0,
        why: { en: 'Cultural diffusion is when a food, word, game or idea spreads to a new group of people.', es: 'La difusión cultural es cuando una comida, palabra, juego o idea llega a un nuevo grupo de personas.', fa: 'پخش فرهنگی یعنی یک غذا، کلمه، بازی یا فکر به یک گروه تازهٔ مردم برسد.' } },
      { q: { en: 'Chess began in which place?', es: '¿Dónde empezó el ajedrez?', fa: 'شطرنج در کجا شروع شد؟' },
        choices: [{ en: 'India', es: 'La India', fa: 'هند' }, { en: 'Brazil', es: 'Brasil', fa: 'برازیل' }, { en: 'England', es: 'Inglaterra', fa: 'انگلستان' }, { en: 'Japan', es: 'Japón', fa: 'جاپان' }], answer: 0,
        why: { en: 'Chess began in India. Traders carried it to Persia, and then to Europe.', es: 'El ajedrez empezó en la India. Los comerciantes lo llevaron a Persia y luego a Europa.', fa: 'شطرنج در هند شروع شد. تاجران آن را به فارس و بعد به اروپا بردند.' } },
      { q: { en: 'Where did people first grow and drink coffee?', es: '¿Dónde se cultivó y se bebió café por primera vez?', fa: 'مردم اول در کجا قهوه کشت کردند و نوشیدند؟' },
        choices: [{ en: 'Ethiopia and Yemen', es: 'Etiopía y Yemen', fa: 'ایتوپیا و یمن' }, { en: 'France and Spain', es: 'Francia y España', fa: 'فرانسه و هسپانیه' }, { en: 'Canada', es: 'Canadá', fa: 'کانادا' }, { en: 'Australia', es: 'Australia', fa: 'آسترالیا' }], answer: 0,
        why: { en: 'Coffee came from Ethiopia and Yemen. Traders carried it across the world.', es: 'El café vino de Etiopía y Yemen. Los comerciantes lo llevaron por todo el mundo.', fa: 'قهوه از ایتوپیا و یمن آمد. تاجران آن را به سراسر جهان بردند.' } },
      { q: { en: 'The digits 0 to 9 were developed in ___. Arabic-speaking scholars carried them to Europe.', es: 'Los dígitos del 0 al 9 se desarrollaron en ___. Sabios que hablaban árabe los llevaron a Europa.', fa: 'رقم‌های ۰ تا ۹ در ___ ساخته شدند. دانشمندان عربی‌زبان آن‌ها را به اروپا بردند.' },
        choices: [{ en: 'India', es: 'la India', fa: 'هند' }, { en: 'Italy', es: 'Italia', fa: 'ایتالیا' }, { en: 'Mexico', es: 'México', fa: 'مکزیک' }, { en: 'Russia', es: 'Rusia', fa: 'روسیه' }], answer: 0,
        why: { en: 'The digits came from India. Arabic-speaking scholars passed them on to Europe.', es: 'Los dígitos vinieron de la India. Sabios que hablaban árabe los pasaron a Europa.', fa: 'رقم‌ها از هند آمدند. دانشمندان عربی‌زبان آن‌ها را به اروپا رساندند.' } },
      { q: { en: 'What is a cultural landscape?', es: '¿Qué es un paisaje cultural?', fa: 'منظرهٔ فرهنگی چیست؟' },
        choices: [{ en: 'Everything people built on the land: buildings, signs, shops', es: 'Todo lo que la gente construyó sobre la tierra: edificios, letreros, tiendas', fa: 'هر چیزی که مردم روی زمین ساخته‌اند: ساختمان، تابلو، دکان' }, { en: 'The rivers and hills that nature made', es: 'Los ríos y cerros que hizo la naturaleza', fa: 'دریاها و تپه‌هایی که طبیعت ساخته' }, { en: 'The weather of a place', es: 'El clima de un lugar', fa: 'هوای یک جا' }, { en: 'A painting of a forest', es: 'Una pintura de un bosque', fa: 'نقاشی یک جنگل' }], answer: 0,
        why: { en: 'Nature made the hills and rivers. People made the cultural landscape on top.', es: 'La naturaleza hizo los cerros y los ríos. La gente hizo encima el paisaje cultural.', fa: 'طبیعت تپه‌ها و دریاها را ساخت. مردم منظرهٔ فرهنگی را روی آن ساختند.' } },
      { q: { en: 'Which one is an institution?', es: '¿Cuál es una institución?', fa: 'کدام یک نهاد است؟' },
        choices: [{ en: 'A school', es: 'Una escuela', fa: 'مکتب' }, { en: 'A mountain', es: 'Una montaña', fa: 'کوه' }, { en: 'A cup of tea', es: 'Una taza de té', fa: 'یک پیاله چای' }, { en: 'A sunny day', es: 'Un día soleado', fa: 'یک روز آفتابی' }], answer: 0,
        why: { en: 'An [[institution|institution]] is an organized part of a culture, like a school, a court or a place of worship.', es: 'Una [[institution|institución]] es una parte organizada de una cultura, como una escuela, un tribunal o un lugar de culto.', fa: '[[institution|نهاد]] یک بخش منظم فرهنگ است، مثل مکتب، محکمه یا عبادتگاه.' } },
      { q: { en: 'How did phones and the internet change cultural diffusion?', es: '¿Cómo cambiaron los teléfonos e internet la difusión cultural?', fa: 'تیلفون و انترنت پخش فرهنگی را چطور تغییر دادند؟' },
        choices: [{ en: 'A song or recipe can travel around the world in one day', es: 'Una canción o receta puede dar la vuelta al mundo en un día', fa: 'یک آهنگ یا دستور پخت در یک روز دور جهان سفر می‌کند' }, { en: 'Ideas now take months to travel by camel', es: 'Ahora las ideas tardan meses en viajar en camello', fa: 'حالا فکرها ماه‌ها با شتر سفر می‌کنند' }, { en: 'Ideas stopped spreading', es: 'Las ideas dejaron de propagarse', fa: 'فکرها دیگر پخش نمی‌شوند' }, { en: 'Only food can spread now', es: 'Ahora solo la comida se puede propagar', fa: 'حالا فقط غذا پخش می‌شود' }], answer: 0,
        why: { en: 'Old diffusion took months by camel or ship. Today an idea can cross the world in a single day.', es: 'Antes la difusión tardaba meses en camello o barco. Hoy una idea puede cruzar el mundo en un solo día.', fa: 'پخش فرهنگی قدیم با شتر یا کشتی ماه‌ها طول می‌کشید. امروز یک فکر در یک روز از جهان می‌گذرد.' } },
      { q: { en: 'An Afghan family in Virginia eats pizza and also celebrates Nowruz. What does this show?', es: 'Una familia afgana en Virginia come pizza y también celebra Nowruz. ¿Qué muestra esto?', fa: 'یک خانوادهٔ افغان در ویرجینیا پیتزا می‌خورد و نوروز را هم جشن می‌گیرد. این چه چیزی را نشان می‌دهد؟' },
        choices: [{ en: 'People can add new traits and still keep their own culture', es: 'La gente puede sumar rasgos nuevos y aun así mantener su cultura', fa: 'مردم می‌توانند ویژگی‌های تازه اضافه کنند و فرهنگ خود را هم نگه دارند' }, { en: 'The family has lost its culture', es: 'La familia perdió su cultura', fa: 'خانواده فرهنگ خود را از دست داده است' }, { en: 'Pizza is an Afghan food', es: 'La pizza es una comida afgana', fa: 'پیتزا غذای افغانی است' }, { en: 'Nowruz began in Italy', es: 'Nowruz empezó en Italia', fa: 'نوروز در ایتالیا شروع شد' }], answer: 0,
        why: { en: 'Diffusion adds new threads. It does not erase a family\'s [[cultural identity|cultural identity]]. People can carry more than one.', es: 'La difusión suma hilos nuevos. No borra la [[cultural identity|identidad cultural]] de una familia. La gente puede tener más de una.', fa: 'پخش فرهنگی تارهای تازه اضافه می‌کند. [[cultural identity|هویت فرهنگی]] خانواده را پاک نمی‌کند. مردم می‌توانند بیش از یکی داشته باشند.' } }
    ]
  },

  learned: [
    { en: '[[culture|Culture]] is a group\'s way of life. Each piece of it, like a food, a word or a game, is a [[culture trait|culture trait]].', es: 'La [[culture|cultura]] es la forma de vida de un grupo. Cada parte, como una comida, una palabra o un juego, es un [[culture trait|rasgo cultural]].', fa: '[[culture|فرهنگ]] شیوهٔ زندگی یک گروه است. هر جزء آن، مثل یک غذا، یک کلمه یا یک بازی، یک [[culture trait|ویژگی فرهنگی]] است.' },
    { en: '[[cultural diffusion|Cultural diffusion]] spreads traits when people meet, trade and travel: tea, chess, qanats, and words like bazaar and algebra.', es: 'La [[cultural diffusion|difusión cultural]] propaga rasgos cuando la gente se encuentra, comercia y viaja: el té, el ajedrez, los qanats y palabras como bazar y álgebra.', fa: '[[cultural diffusion|پخش فرهنگی]] وقتی مردم همدیگر را می‌بینند، تجارت و سفر می‌کنند ویژگی‌ها را پخش می‌کند: چای، شطرنج، کاریز و کلمه‌هایی مثل بازار و الجبر.' },
    { en: 'You can read the [[cultural landscape|cultural landscape]] of a street. Adding new traits does not erase a culture\'s identity.', es: 'Puedes leer el [[cultural landscape|paisaje cultural]] de una calle. Sumar rasgos nuevos no borra la identidad de una cultura.', fa: 'می‌توانی [[cultural landscape|منظرهٔ فرهنگی]] یک سرک را بخوانی. اضافه کردن ویژگی‌های تازه هویت یک فرهنگ را پاک نمی‌کند.' }
  ],
  reflect: {
    q: { en: 'Think of one food, word, game or song in your life that came from another place. How do you think it traveled to you?', es: 'Piensa en una comida, palabra, juego o canción de tu vida que vino de otro lugar. ¿Cómo crees que viajó hasta ti?', fa: 'به یک غذا، کلمه، بازی یا آهنگ در زندگی خود فکر کن که از جای دیگری آمده است. فکر می‌کنی چطور تا تو سفر کرده است؟' },
    starter: { en: 'One thing in my life that traveled from another place is', es: 'Una cosa en mi vida que viajó desde otro lugar es', fa: 'یک چیز در زندگی من که از جای دیگری سفر کرده است' }
  }
};
