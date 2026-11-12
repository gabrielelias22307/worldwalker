/* TRAILWALKER · Episode 6.1 · Building the Nation: Immigration (VUS)
   Ellis Island, New York Harbor, 1907 (its busiest year: about a million people came through).
   North island (rows 1-8): the baggage room, the big main building with the Great Hall (registry room),
   the medical check line (railings in front of the main building) and the ferry waiting room, with the
   ferry dock reaching east toward Manhattan (tall buildings, top right).
   A walkway on the west end of the ferry basin joins the south island (rows 12-19): the hospital,
   and the barge landing on the south shore, where people from the big steamships came in.
   Across the water to the west and south-west: the Statue of Liberty (dedicated 1886) on its star-shaped fort.
   The journal stone: carry 8 reason cards to Push (the barge landing, where people arrived from the old
   country), Pull (the ferry dock to New York City, jobs and family) or Hard welcome (by the hospital). */
window.EPISODE = {
  id: '6.1',
  realm: 6,
  sol: 'VUS',
  title: { en: 'Building the Nation: Immigration', es: 'Construir la nación: la inmigración', fa: 'ساختن ملت: مهاجرت' },
  place: { en: 'Ellis Island, 1907', es: 'Isla Ellis, 1907', fa: 'جزیرهٔ الیس، ۱۹۰۷' },
  intro: [
    { en: 'The Grump blurred the page about [[immigrant|immigrants]]. Their stories are fading!',
      es: 'El Gruñón borró la página sobre los [[immigrant|inmigrantes]]. ¡Sus historias se están borrando!',
      fa: 'غرغرو صفحهٔ [[immigrant|مهاجران]] را تار کرد. داستان‌های‌شان کم‌رنگ می‌شود!' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: New York Harbor on the world map, 1907 on the timeline */
  scenes: {
    at: [-74.04, 40.70],
    year: 1907,
    start: [
      { en: 'From 1880 to 1920, more than 20 million immigrants came to the United States.',
        es: 'De 1880 a 1920, más de 20 millones de inmigrantes llegaron a Estados Unidos.',
        fa: 'از ۱۸۸۰ تا ۱۹۲۰، بیشتر از ۲۰ میلیون مهاجر به ایالات متحده آمدند.' },
      { en: 'Most of these new immigrants came from southern and eastern Europe.',
        es: 'La mayoría de estos nuevos inmigrantes venía del sur y el este de Europa.',
        fa: 'بیشتر این مهاجران نو از جنوب و شرق اروپا آمدند.' },
      { en: 'In 1907, about a million people came through Ellis Island.',
        es: 'En 1907, cerca de un millón de personas pasaron por la isla Ellis.',
        fa: 'در سال ۱۹۰۷، حدود یک میلیون نفر از جزیرهٔ الیس گذشتند.' }
    ],
    page: { en: 'Ellis Island closed in 1954. Today it is a museum about immigrants.',
      es: 'La isla Ellis cerró en 1954. Hoy es un museo sobre los inmigrantes.',
      fa: 'جزیرهٔ الیس در سال ۱۹۵۴ بسته شد. امروز موزیمی دربارهٔ مهاجران است.' },
    guess: {
      q: { en: 'Ellis Island is in New York Harbor. Which coast is that?', es: 'La isla Ellis está en el puerto de Nueva York. ¿Qué costa es?', fa: 'جزیرهٔ الیس در بندر نیویارک است. آنجا کدام ساحل است؟' },
      choices: [
        { t: { en: '🌅 The East Coast', es: '🌅 La costa este', fa: '🌅 ساحل شرقی' }, ok: true },
        { t: { en: '🌄 The West Coast', es: '🌄 La costa oeste', fa: '🌄 ساحل غربی' } }
      ],
      why: { en: 'New York is on the Atlantic, the East Coast. Ships from Europe arrived there.', es: 'Nueva York está en el Atlántico, la costa este. Allí llegaban los barcos de Europa.', fa: 'نیویارک کنار بحر اطلس، در ساحل شرقی است. کشتی‌های اروپا آنجا می‌رسیدند.' }
    },
    next: {
      q: { en: 'Next: the Gilded Age. Did the light bulb and telephone change daily life?', es: 'Ahora: la Edad Dorada. ¿El foco y el teléfono cambiaron la vida diaria?', fa: 'بعدی: عصر طلاکاری. آیا گروپ برق و تیلفون زندگی روزمره را تغییر داد؟' },
      choices: [
        { t: { en: '💡 Yes, a lot', es: '💡 Sí, mucho', fa: '💡 بله، خیلی زیاد' }, ok: true },
        { t: { en: '🕯️ No, not at all', es: '🕯️ No, para nada', fa: '🕯️ نه، هیچ' } }
      ],
      why: { en: 'Electric light and telephones changed homes, factories and cities. Let us see how!', es: 'La luz eléctrica y el teléfono cambiaron las casas, las fábricas y las ciudades. ¡Veamos cómo!', fa: 'چراغ برق و تیلفون خانه‌ها، فابریکه‌ها و شهرها را تغییر دادند. بیا ببینیم چطور!' }
    }
  },
  /* houses: who is behind each door (2 lines each) */
  houses: [
    { at: [4, 3], name: { en: 'Bridget', es: 'Bridget', fa: 'بریجیت' },
      look: { skin: 0, hair: '#b0502a', shirt: '#4a6a8a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'This is the baggage room. People leave their trunks and bundles here.', es: 'Este es el cuarto de equipaje. La gente deja aquí sus baúles y bultos.', fa: 'اینجا اتاق بکس‌ها است. مردم صندوق‌ها و بقچه‌های‌شان را اینجا می‌گذارند.' },
        { en: 'Some families carry everything they own: clothes, a quilt, a family photo.', es: 'Algunas familias traen todo lo que tienen: ropa, una colcha, una foto familiar.', fa: 'بعضی خانواده‌ها همه چیز خود را می‌آورند: کالا، یک لحاف، یک عکس خانوادگی.' }
      ] },
    { at: [11, 3], name: { en: 'Mr. Esposito', es: 'Señor Esposito', fa: 'آقای اسپوزیتو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#f2f2f2', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'This is the Great Hall, the registry room. Inspectors ask each person questions.', es: 'Este es el Gran Salón, la sala de registro. Los inspectores hacen preguntas a cada persona.', fa: 'اینجا تالار بزرگ، اتاق ثبت است. مأموران از هر نفر سؤال می‌پرسند.' },
        { en: 'I am an interpreter. We speak Italian, Polish, Greek, Yiddish and more.', es: 'Soy intérprete. Hablamos italiano, polaco, griego, ídish y más.', fa: 'من ترجمان هستم. ما ایتالیایی، پولندی، یونانی، ییدیش و زبان‌های دیگر گپ می‌زنیم.' }
      ] },
    { at: [19, 3], name: { en: 'Hanna', es: 'Hanna', fa: 'هانا' },
      look: { skin: 1, hair: '#d8b060', shirt: '#7a3a5a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I came from Poland. I am waiting for my uncle in this waiting room.', es: 'Vengo de Polonia. Espero a mi tío en esta sala de espera.', fa: 'من از پولند آمدم. در این اتاق انتظار منتظر کاکایم هستم.' },
        { en: 'He works in a steel mill in Pittsburgh. Families hug and cry here.', es: 'Él trabaja en una fábrica de acero en Pittsburgh. Aquí las familias se abrazan y lloran.', fa: 'او در یک فابریکهٔ فولاد در پیتسبرگ کار می‌کند. اینجا خانواده‌ها بغل می‌کنند و گریه می‌کنند.' }
      ] },
    { at: [15, 14], name: { en: 'Nurse Maureen', es: 'Enfermera Maureen', fa: 'نرس مورین' },
      look: { skin: 0, hair: '#5a3a20', shirt: '#f4f4f4', pants: '#f4f4f4', style: 'bun' },
      lines: [
        { en: 'My parents came from Ireland in the 1840s, when there was a famine.', es: 'Mis padres vinieron de Irlanda en la década de 1840, cuando hubo hambruna.', fa: 'پدر و مادرم در دههٔ ۱۸۴۰، وقت قحطی، از آیرلند آمدند.' },
        { en: 'Sick people rest in this hospital. Most get well and go on to new homes.', es: 'Las personas enfermas descansan en este hospital. La mayoría se cura y sigue a su nuevo hogar.', fa: 'مریض‌ها در این شفاخانه استراحت می‌کنند. بیشترشان خوب می‌شوند و به خانهٔ نو می‌روند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North island (x 2-21, rows 1-8): baggage room (QQQ/hdh), main building (R/h, the
     Great Hall), the ferry waiting room (RRR/hdh), the medical check line (railings F, row 6), the ferry dock (k)
     toward Manhattan (U/J). Ferry basin (rows 9-11) with the walkway (x 8-10) on its west end.
     South island (x 8-23, rows 12-19): the hospital, open yards and the barge landing (k, row 20).
     West: the Statue of Liberty on its star fort (W, D). */
  map: [
    '===========================UJUUJ',
    '=~TQQQ.RRRRRRRRRR.RRRT~~~~~UUJUU',
    '=~TQQQ.RRRRRRRRRR.RRRT~~~~~UJUUJ',
    '=~Thdh.hhhhdhhhhh.hdhT~~~~~JUUJU',
    '=~.llllllllllllllllll.~~~~~UUJUU',
    '=~.,...llllllll.......~~~~~JUUJU',
    '=~..x..FFFFFFFF...llllkkkk~UJUUJ',
    '=~....:........,......~~~~~~~~~~',
    '=~sssssss:.sssssssssss~~~~~~~~~~',
    '=~~~~~~~.:.~~~~~~~~~~~~~~~======',
    '=~~~~~~~.:.~~~~~~~~~~~~~~~======',
    '=~~~~~~~.:.~~~~~~~~~~~~~~~======',
    '=~~~~~~~.:ssssssssssssss~~~~~~~=',
    '=~~~~~~~.:...RRRRRR.....~~~~~~~=',
    '=~WWWW~~.:...hhdhhh.....~~~~~~~=',
    '=~WDDW~~.::::::::::::::.~~~~~~~=',
    '=~WDDW~~x.....llll......~~~~~~~=',
    '=~WWWW~~......llll......~~~~~~~=',
    '=~~~~~~~,...............~~~~~~~=',
    '=~~~~~~~ssssssssssssssss~~~~~~~=',
    '=~~~~~~~~~~~~~~~~~kkkk~~~~~~~~~=',
    '================================'
  ],
  start: [5, 7],

  /* finds: a clue note leads to a hidden spot (+3 coins and a camp decoration) */
  finds: [
    { clueAt: [2, 5], at: [2, 8], decor: 'vase',
      clue: { en: 'From this note, walk 3 steps south, onto the sandy shore.', es: 'Desde esta nota, camina 3 pasos al sur, hasta la orilla de arena.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، تا ساحل ریگی.' },
      text: { en: 'Many people came with one trunk or bundle. Here is a small vase from home.', es: 'Mucha gente llegó con un solo baúl o bulto. Aquí hay un jarrón pequeño de su tierra.', fa: 'بسیاری از مردم با یک صندوق یا بقچه آمدند. اینجا یک گلدان کوچک از وطن است.' } },
    { clueAt: [19, 12], at: [23, 13], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, then 1 step south.', es: 'Desde esta nota, camina 4 pasos al este y luego 1 paso al sur.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۱ قدم به جنوب.' },
      text: { en: 'Many immigrants crossed the ocean on the crowded lower deck of steamships. Here is a harbor shell.', es: 'Muchos inmigrantes cruzaron el océano en la cubierta baja y llena de los barcos de vapor. Aquí hay una concha del puerto.', fa: 'بسیاری از مهاجران در طبقهٔ پایین و پرازدحام کشتی‌های بخاری از بحر گذشتند. اینجا یک صدف بندر است.' } }
  ],

  words: {
    immigrant: { en: 'a person who moves to a new country to live there', es: 'una persona que se muda a otro país para vivir allí', fa: 'کسی که برای زندگی به یک کشور نو می‌رود' },
    'push factor': { en: 'a problem that makes people leave their home country', es: 'un problema que hace que la gente deje su país', fa: 'مشکلی که مردم را مجبور می‌کند وطن خود را ترک کنند' },
    'pull factor': { en: 'something good that draws people to a new country', es: 'algo bueno que atrae a la gente a un país nuevo', fa: 'چیز خوبی که مردم را به یک کشور نو می‌کشاند' },
    persecution: { en: 'hurting people again and again because of who they are or what they believe', es: 'hacer daño a la gente una y otra vez por quiénes son o por lo que creen', fa: 'آزار دادن پی‌درپی مردم به خاطر این که کی هستند یا به چه باور دارند' },
    'chinese exclusion act': { en: 'an 1882 US law that banned Chinese workers from coming to the country', es: 'una ley de EE. UU. de 1882 que prohibió la entrada de trabajadores chinos', fa: 'قانون سال ۱۸۸۲ امریکا که آمدن کارگران چینایی را منع کرد' },
    nativism: { en: 'dislike of newcomers; wanting fewer immigrants', es: 'rechazo a los recién llegados; querer menos inmigrantes', fa: 'بد دیدن تازه‌واردها؛ خواستن مهاجران کمتر' },
    tenement: { en: 'a crowded, cheap apartment building in a city', es: 'un edificio de apartamentos barato y lleno de gente en una ciudad', fa: 'یک تعمیر رهایشی ارزان و پرازدحام در شهر' },
    'settlement house': { en: 'a center in a city that helped immigrants with classes and care', es: 'un centro en la ciudad que ayudaba a los inmigrantes con clases y cuidado', fa: 'مرکزی در شهر که با درس و مراقبت به مهاجران کمک می‌کرد' },
    quota: { en: 'a limit on how many people from each country may come', es: 'un límite de cuántas personas de cada país pueden venir', fa: 'حدی برای تعداد مردمی که از هر کشور می‌توانند بیایند' },
    americanization: { en: 'helping newcomers learn English and American ways', es: 'ayudar a los recién llegados a aprender inglés y las costumbres de EE. UU.', fa: 'کمک به تازه‌واردها برای یاد گرفتن انگلیسی و رسم‌های امریکایی' }
  },

  npcs: [
    {
      x: 5, y: 5,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Mother from Italy', es: 'Madre de Italia', fa: 'مادری از ایتالیا' },
      look: { skin: 2, hair: '#1a1008', shirt: '#b03a2a', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'Buongiorno! We sailed for two weeks from Sicily, in southern Italy.', es: '¡Buongiorno! Navegamos dos semanas desde Sicilia, en el sur de Italia.', fa: 'بونجورنو! ما دو هفته از سیسیل، در جنوب ایتالیا، با کشتی آمدیم.' },
        { en: 'At home our crops failed, and there was no work. That pushed us away.', es: 'En casa se perdieron las cosechas y no había trabajo. Eso nos empujó a salir.', fa: 'در وطن حاصلات ما خراب شد و کار نبود. این ما را به رفتن مجبور کرد.' },
        { en: 'My brother is in New York. He found work building the subway.', es: 'Mi hermano está en Nueva York. Encontró trabajo construyendo el metro.', fa: 'برادرم در نیویارک است. او در ساختن ریل زیرزمینی کار پیدا کرد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Where did most new immigrants of this time come from?', es: '¿De dónde venía la mayoría de los nuevos inmigrantes de esta época?', fa: 'بیشتر مهاجران نوِ این زمان از کجا آمدند؟' },
        choices: [
          { ok: true, t: { en: 'Southern and eastern Europe', es: 'Del sur y el este de Europa', fa: 'جنوب و شرق اروپا' },
            why: { en: 'Yes! Italy, Poland, Russia and Greece sent many people. They are called new immigrants.', es: '¡Sí! De Italia, Polonia, Rusia y Grecia vino mucha gente. Se les llama nuevos inmigrantes.', fa: 'بله! از ایتالیا، پولند، روسیه و یونان مردم زیادی آمدند. آن‌ها را مهاجران نو می‌گویند.' } },
          { t: { en: 'Northern and western Europe', es: 'Del norte y el oeste de Europa', fa: 'شمال و غرب اروپا' },
            why: { en: 'That was earlier. Many Irish and German people came in the 1840s and 1850s.', es: 'Eso fue antes. Muchos irlandeses y alemanes llegaron en las décadas de 1840 y 1850.', fa: 'آن پیش‌تر بود. بسیاری از آیرلندی‌ها و آلمانی‌ها در دهه‌های ۱۸۴۰ و ۱۸۵۰ آمدند.' } },
          { t: { en: 'Australia and the Pacific', es: 'De Australia y el Pacífico', fa: 'آسترالیا و بحر آرام' },
            why: { en: 'Very few came from there. Most came from Italy, Poland, Russia and Greece.', es: 'Muy pocos vinieron de allí. La mayoría vino de Italia, Polonia, Rusia y Grecia.', fa: 'از آنجا خیلی کم آمدند. بیشترشان از ایتالیا، پولند، روسیه و یونان آمدند.' } }
        ]
      }
    },
    {
      x: 17, y: 8,
      name: { en: 'Miriam', es: 'Miriam', fa: 'مریم' },
      role: { en: 'Student from Russia', es: 'Estudiante de Rusia', fa: 'شاگردی از روسیه' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2f5f8a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'Shalom! My family is Jewish. We come from a town in the Russian Empire.', es: '¡Shalom! Mi familia es judía. Venimos de un pueblo del Imperio ruso.', fa: 'شالوم! خانوادهٔ من یهودی است. ما از یک شهر در امپراتوری روسیه می‌آییم.' },
        { en: 'Mobs attacked Jewish homes there. We were afraid for our lives.', es: 'Allí, turbas atacaron las casas judías. Temíamos por nuestra vida.', fa: 'آنجا گروه‌های خشمگین به خانه‌های یهودیان حمله کردند. ما برای جان خود می‌ترسیدیم.' },
        { en: 'Here we hope to pray in peace. My aunt saved money for our tickets.', es: 'Aquí esperamos rezar en paz. Mi tía ahorró dinero para nuestros pasajes.', fa: 'اینجا امید داریم در آرامش عبادت کنیم. خاله‌ام برای تکت‌های ما پول جمع کرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did Miriam\'s family leave the Russian Empire?', es: '¿Por qué la familia de Miriam dejó el Imperio ruso?', fa: 'چرا خانوادهٔ مریم امپراتوری روسیه را ترک کرد؟' },
        choices: [
          { ok: true, t: { en: 'To escape attacks on Jewish people', es: 'Para escapar de los ataques a los judíos', fa: 'برای فرار از حمله بر یهودیان' },
            why: { en: 'Yes. This [[persecution|persecution]] was a push factor. Many Jewish families fled to America.', es: 'Sí. Esta [[persecution|persecución]] fue un factor de expulsión. Muchas familias judías huyeron a EE. UU.', fa: 'بله. این [[persecution|آزار]] یک دلیل رفتن بود. بسیاری از خانواده‌های یهودی به امریکا فرار کردند.' } },
          { t: { en: 'To find gold in the hills of California', es: 'Para buscar oro en los cerros de California', fa: 'برای پیدا کردن طلا در تپه‌های کالیفورنیا' },
            why: { en: 'No. They were not looking for gold. They were running from danger.', es: 'No. No buscaban oro. Huían del peligro.', fa: 'نه. آن‌ها دنبال طلا نبودند. از خطر فرار می‌کردند.' } },
          { t: { en: 'Because the winters were too cold', es: 'Porque los inviernos eran muy fríos', fa: 'چون زمستان‌ها خیلی سرد بودند' },
            why: { en: 'No. The weather was not the reason. Attacks on Jewish people pushed them out.', es: 'No. El clima no fue la razón. Los ataques a los judíos los obligaron a salir.', fa: 'نه. هوا دلیل نبود. حمله بر یهودیان آن‌ها را به رفتن مجبور کرد.' } }
        ]
      }
    },
    {
      x: 20, y: 14,
      name: { en: 'Mr. Lee', es: 'Señor Lee', fa: 'آقای لی' },
      role: { en: 'Newspaper reporter', es: 'Reportero de periódico', fa: 'خبرنگار روزنامه' },
      look: { skin: 3, hair: '#120c08', shirt: '#3a4a3a', pants: '#2a2a2a', style: 'short', hat: '#2a2a2a' },
      lines: [
        { en: 'I was born in San Francisco. I write for a Chinese newspaper here.', es: 'Nací en San Francisco. Escribo para un periódico chino de aquí.', fa: 'من در سان فرانسیسکو به دنیا آمدم. برای یک روزنامهٔ چینایی اینجا می‌نویسم.' },
        { en: 'In 1882, the [[chinese exclusion act|Chinese Exclusion Act]] banned Chinese workers from coming.', es: 'En 1882, la [[chinese exclusion act|Ley de Exclusión China]] prohibió la entrada de trabajadores chinos.', fa: 'در سال ۱۸۸۲، [[chinese exclusion act|قانون منع چینایی‌ها]] آمدن کارگران چینایی را منع کرد.' },
        { en: 'It was the first US law to ban people of one nationality.', es: 'Fue la primera ley de EE. UU. que prohibió a la gente de una nacionalidad.', fa: 'این اولین قانون امریکا بود که مردم یک ملیت را منع کرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did the Chinese Exclusion Act of 1882 do?', es: '¿Qué hizo la Ley de Exclusión China de 1882?', fa: 'قانون منع چینایی‌ها در سال ۱۸۸۲ چه کرد؟' },
        choices: [
          { ok: true, t: { en: 'Banned Chinese workers from coming', es: 'Prohibió la entrada de trabajadores chinos', fa: 'آمدن کارگران چینایی را منع کرد' },
            why: { en: 'Yes. It shut out Chinese workers. The ban lasted until 1943.', es: 'Sí. Dejó fuera a los trabajadores chinos. La prohibición duró hasta 1943.', fa: 'بله. کارگران چینایی را بیرون نگه داشت. این منع تا سال ۱۹۴۳ ادامه داشت.' } },
          { t: { en: 'Gave Chinese workers free land', es: 'Dio tierra gratis a los trabajadores chinos', fa: 'به کارگران چینایی زمین مفت داد' },
            why: { en: 'No. It did the opposite. It kept Chinese workers out of the country.', es: 'No. Hizo lo contrario. Dejó a los trabajadores chinos fuera del país.', fa: 'نه. برعکس بود. کارگران چینایی را بیرون از کشور نگه داشت.' } },
          { t: { en: 'Opened Ellis Island to Chinese families', es: 'Abrió la isla Ellis a las familias chinas', fa: 'جزیرهٔ الیس را برای خانواده‌های چینایی باز کرد' },
            why: { en: 'No. It closed the door to most Chinese workers for over 60 years.', es: 'No. Cerró la puerta a la mayoría de los trabajadores chinos por más de 60 años.', fa: 'نه. دروازه را بیشتر از ۶۰ سال به روی بیشتر کارگران چینایی بست.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 4, y: 6, text: { en: 'ELLIS ISLAND · 1907 · About a million people came through this station this year.', es: 'ISLA ELLIS · 1907 · Cerca de un millón de personas pasaron por esta estación este año.', fa: 'جزیرهٔ الیس · ۱۹۰۷ · حدود یک میلیون نفر امسال از این مرکز گذشتند.' } },
    { x: 8, y: 16, text: { en: 'Look west: the Statue of Liberty, dedicated in 1886. A gift from the people of France.', es: 'Mira al oeste: la Estatua de la Libertad, inaugurada en 1886. Un regalo del pueblo de Francia.', fa: 'به غرب ببین: مجسمهٔ آزادی، افتتاح شده در ۱۸۸۶. تحفه‌ای از مردم فرانسه.' } }
  ],

  /* the quest: Stavros (gold !) on the south island -> Mrs. Daly by the hospital -> Mr. Novak by the ferry dock:
     the Grump blew his newspaper bundles all over the island; carry him the one that helps Stavros -> back to Stavros */
  quest: {
    stat: 'reg',
    title: { en: 'News in Greek', es: 'Noticias en griego', fa: 'خبر به زبان یونانی' },
    giver: {
      x: 22, y: 16,
      name: { en: 'Stavros', es: 'Stavros', fa: 'ستاوروس' },
      role: { en: 'Newcomer from Greece', es: 'Recién llegado de Grecia', fa: 'تازه‌وارد از یونان' },
      look: { skin: 2, hair: '#1a1208', shirt: '#e8e0d0', pants: '#3a3a5a', hat: '#4a3a2a' },
      lines: [
        { en: 'Yassou! I come from a small village in Greece. I just passed inspection!', es: '¡Yassou! Vengo de un pueblito de Grecia. ¡Acabo de pasar la inspección!', fa: 'یاسو! من از یک قریهٔ کوچک در یونان می‌آیم. همین حالا از معاینه گذشتم!' },
        { en: 'I know no one in New York. Where will I find Greek neighbors?', es: 'No conozco a nadie en Nueva York. ¿Dónde encontraré vecinos griegos?', fa: 'در نیویارک هیچ کس را نمی‌شناسم. همسایه‌های یونانی را کجا پیدا کنم؟' },
        { en: 'Mrs. Daly helps newcomers. Please ask her for me.', es: 'La señora Daly ayuda a los recién llegados. Por favor, pregúntale por mí.', fa: 'خانم دیلی به تازه‌واردها کمک می‌کند. لطفاً از او برایم بپرس.' }
      ],
      wait: { en: 'Mrs. Daly waits west of the hospital, on the south island.', es: 'La señora Daly espera al oeste del hospital, en la isla del sur.', fa: 'خانم دیلی در غرب شفاخانه، در جزیرهٔ جنوبی منتظر است.' },
      thanks: { en: 'A Greek newspaper! Now I can find Greek neighbors, a church and work. Thank you!', es: '¡Un periódico griego! Ahora puedo encontrar vecinos griegos, una iglesia y trabajo. ¡Gracias!', fa: 'یک روزنامهٔ یونانی! حالا می‌توانم همسایه‌های یونانی، کلیسا و کار پیدا کنم. تشکر!' }
    },
    contact: {
      x: 11, y: 17,
      name: { en: 'Mrs. Daly', es: 'Señora Daly', fa: 'خانم دیلی' },
      role: { en: 'Aid society helper', es: 'Ayudante de una sociedad de ayuda', fa: 'کمک‌کنندهٔ انجمن خیریه' },
      look: { skin: 5, hair: '#120c08', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Some people here dislike newcomers. That is called [[nativism|nativism]].', es: 'Aquí, algunas personas rechazan a los recién llegados. Eso se llama [[nativism|nativismo]].', fa: 'بعضی مردم اینجا تازه‌واردها را بد می‌بینند. این را [[nativism|بومی‌گرایی]] می‌گویند.' },
        { en: 'But immigrants help each other. Many groups print newspapers in their own language.', es: 'Pero los inmigrantes se ayudan. Muchos grupos imprimen periódicos en su propio idioma.', fa: 'اما مهاجران به یکدیگر کمک می‌کنند. گروه‌های زیادی به زبان خود روزنامه چاپ می‌کنند.' },
        { en: 'Mr. Novak sells papers by the ferry dock, on the north island.', es: 'El señor Novak vende periódicos junto al muelle del ferri, en la isla del norte.', fa: 'آقای نوواک کنار بندرگاه کشتی، در جزیرهٔ شمالی، روزنامه می‌فروشد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 17, y: 5,
        name: { en: 'Mr. Novak', es: 'Señor Novak', fa: 'آقای نوواک' },
        role: { en: 'Newspaper seller', es: 'Vendedor de periódicos', fa: 'روزنامه‌فروش' },
        look: { skin: 1, hair: '#6a4a2a', shirt: '#8a6a3a', pants: '#3a2a20', hat: '#3a3a3a' },
        lines: [
          { en: 'Oh no! The Grump blew my newspaper bundles all over the island!', es: '¡Ay, no! ¡El Gruñón voló mis paquetes de periódicos por toda la isla!', fa: 'وای! غرغرو بسته‌های روزنامه‌ام را در همهٔ جزیره پراکنده کرد!' }
        ]
      },
      q: { en: 'Stavros reads Greek. Bring me the paper that helps him find Greek neighbors.', es: 'Stavros lee griego. Tráeme el periódico que lo ayude a encontrar vecinos griegos.', fa: 'ستاوروس یونانی می‌خواند. روزنامه‌ای را بیاور که به او در پیدا کردن همسایه‌های یونانی کمک کند.' },
      choices: [
        { ok: true, at: [3, 4], icon: '📰', t: { en: 'A Greek newspaper from New York', es: 'Un periódico griego de Nueva York', fa: 'یک روزنامهٔ یونانی از نیویارک' },
          why: { en: 'Yes! Greek immigrants printed it. It lists Greek churches, shops and jobs in the city.', es: '¡Sí! Lo imprimían inmigrantes griegos. Trae iglesias, tiendas y trabajos griegos de la ciudad.', fa: 'بله! مهاجران یونانی آن را چاپ کردند. کلیساها، دکان‌ها و کارهای یونانی شهر در آن است.' } },
        { at: [13, 7], icon: '📰', t: { en: 'An Italian newspaper from New York', es: 'Un periódico italiano de Nueva York', fa: 'یک روزنامهٔ ایتالیایی از نیویارک' },
          why: { en: 'Italian immigrants made this one for Little Italy. Stavros reads Greek, not Italian.', es: 'Los inmigrantes italianos lo hacían para la Pequeña Italia. Stavros lee griego, no italiano.', fa: 'مهاجران ایتالیایی این را برای «ایتالیای کوچک» ساختند. ستاوروس یونانی می‌خواند، نه ایتالیایی.' } },
        { at: [20, 7], icon: '📰', t: { en: 'A Yiddish newspaper from New York', es: 'Un periódico en ídish de Nueva York', fa: 'یک روزنامهٔ ییدیش از نیویارک' },
          why: { en: 'Jewish immigrants read this one on the Lower East Side. Stavros needs Greek.', es: 'Los inmigrantes judíos lo leían en el Lower East Side. Stavros necesita griego.', fa: 'مهاجران یهودی این را در محلهٔ «لوور ایست ساید» می‌خواندند. ستاوروس یونانی لازم دارد.' } }
      ],
      item: { icon: '📰', name: { en: 'A Greek newspaper', es: 'Un periódico griego', fa: 'یک روزنامهٔ یونانی' } }
    }
  },

  scraps: [[17, 1], [8, 18], [21, 8]],
  smudges: [[7, 7], [19, 18]],

  challenge: {
    at: [11, 13],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // Push: the barge landing on the south shore, where people came in from the big ships (the old country behind them).
    // Pull: the ferry dock toward New York City, where jobs and families waited. Hard welcome: the yard by the hospital.
    zones: [{ bin: 'push', x: 18, y: 19, w: 4, h: 2 }, { bin: 'pull', x: 20, y: 6, w: 6, h: 1 }, { bin: 'hard', x: 14, y: 16, w: 4, h: 2 }],
    stat: 'mov',
    title: { en: 'Push or pull?', es: '¿Expulsión o atracción?', fa: 'دلیل رفتن یا دلیل آمدن؟' },
    intro: { en: 'The Grump mixed up the reasons. Carry each card to Push, Pull or Hard welcome.',
      es: 'El Gruñón mezcló las razones. Lleva cada tarjeta a Expulsión, Atracción o Bienvenida difícil.',
      fa: 'غرغرو دلیل‌ها را درهم کرد. هر کارت را به «دلیل رفتن»، «دلیل آمدن» یا «استقبال سخت» ببر.' },
    bins: [
      { id: 'push', icon: '🧳', label: { en: 'Push: reasons to leave home', es: 'Expulsión: razones para dejar su tierra', fa: 'دلیل رفتن: چرا وطن را ترک کردند' },
        sub: { en: 'problems in the old country', es: 'problemas en el país de origen', fa: 'مشکلات در کشور اصلی' } },
      { id: 'pull', icon: '🗽', label: { en: 'Pull: reasons to come to America', es: 'Atracción: razones para venir a EE. UU.', fa: 'دلیل آمدن: چرا به امریکا آمدند' },
        sub: { en: 'hopes in the new country', es: 'esperanzas en el país nuevo', fa: 'امیدها در کشور نو' } },
      { id: 'hard', icon: '🚧', label: { en: 'Hard welcome', es: 'Bienvenida difícil', fa: 'استقبال سخت' },
        sub: { en: 'troubles newcomers faced here', es: 'problemas que enfrentaron aquí', fa: 'سختی‌هایی که تازه‌واردها اینجا دیدند' } }
    ],
    items: [
      { bin: 'push', t: { en: 'Crops failed and families went hungry', es: 'Se perdieron las cosechas y las familias pasaron hambre', fa: 'حاصلات خراب شد و خانواده‌ها گرسنه ماندند' },
        why: { en: 'Hunger at home pushed people to leave. Southern Italy had many bad harvests.', es: 'El hambre en casa empujó a la gente a salir. El sur de Italia tuvo muchas malas cosechas.', fa: 'گرسنگی در وطن مردم را به رفتن مجبور کرد. جنوب ایتالیا حاصلات بد زیادی داشت.' } },
      { bin: 'push', t: { en: 'Mobs attacked Jewish towns in Russia', es: 'Turbas atacaron pueblos judíos en Rusia', fa: 'گروه‌های خشمگین بر شهرهای یهودی در روسیه حمله کردند' },
        why: { en: '[[persecution|Persecution]] pushed many Jewish families to flee for their lives.', es: 'La [[persecution|persecución]] obligó a muchas familias judías a huir para salvar su vida.', fa: '[[persecution|آزار]] بسیاری از خانواده‌های یهودی را مجبور کرد برای نجات جان خود فرار کنند.' } },
      { bin: 'push', t: { en: 'No jobs and no land to farm', es: 'No había trabajo ni tierra para sembrar', fa: 'نه کار بود، نه زمین برای کشت' },
        why: { en: 'Poverty at home is a [[push factor|push factor]]. People left to find a new start.', es: 'La pobreza en casa es un [[push factor|factor de expulsión]]. La gente salió a buscar un nuevo comienzo.', fa: 'فقر در وطن یک [[push factor|دلیل رفتن]] است. مردم برای یک شروع نو رفتند.' } },
      { bin: 'pull', t: { en: 'Jobs in factories, mines and on railroads', es: 'Trabajo en fábricas, minas y ferrocarriles', fa: 'کار در فابریکه‌ها، معدن‌ها و خط آهن' },
        why: { en: 'Jobs were a [[pull factor|pull factor]]. Immigrants built railroads and worked in mines and mills.', es: 'El trabajo era un [[pull factor|factor de atracción]]. Los inmigrantes construyeron ferrocarriles y trabajaron en minas y fábricas.', fa: 'کار یک [[pull factor|دلیل آمدن]] بود. مهاجران خط آهن ساختند و در معدن‌ها و فابریکه‌ها کار کردند.' } },
      { bin: 'pull', t: { en: 'Family members already living here', es: 'Familiares que ya vivían aquí', fa: 'اعضای خانواده که از قبل اینجا بودند' },
        why: { en: 'Relatives sent letters and money for tickets. Family pulled many people here.', es: 'Los parientes mandaban cartas y dinero para los pasajes. La familia atrajo a mucha gente.', fa: 'خویشاوندان نامه و پول تکت می‌فرستادند. خانواده مردم زیادی را به اینجا کشاند.' } },
      { bin: 'pull', t: { en: 'Freedom to pray and speak freely', es: 'Libertad para rezar y hablar sin miedo', fa: 'آزادی عبادت و گپ زدن' },
        why: { en: 'Freedom of religion and speech pulled many people, like Jewish families from Russia.', es: 'La libertad de religión y de expresión atrajo a mucha gente, como las familias judías de Rusia.', fa: 'آزادی دین و بیان مردم زیادی را کشاند، مثل خانواده‌های یهودی از روسیه.' } },
      { bin: 'hard', t: { en: 'The Chinese Exclusion Act of 1882', es: 'La Ley de Exclusión China de 1882', fa: 'قانون منع چینایی‌ها در ۱۸۸۲' },
        why: { en: 'This law banned Chinese workers from coming. It was an unfair, hard welcome.', es: 'Esta ley prohibió la entrada de trabajadores chinos. Fue una bienvenida injusta y dura.', fa: 'این قانون آمدن کارگران چینایی را منع کرد. استقبالی ناعادلانه و سخت بود.' } },
      { bin: 'hard', t: { en: 'Nativists who disliked newcomers', es: 'Nativistas que rechazaban a los recién llegados', fa: 'کسانی که تازه‌واردها را بد می‌دیدند' },
        why: { en: '[[nativism|Nativism]] means disliking newcomers. Some Americans treated immigrants unfairly.', es: 'El [[nativism|nativismo]] es rechazar a los recién llegados. Algunos estadounidenses trataron mal a los inmigrantes.', fa: '[[nativism|بومی‌گرایی]] یعنی بد دیدن تازه‌واردها. بعضی امریکایی‌ها با مهاجران بی‌انصافی کردند.' } }
    ],
    success: { en: 'The reasons are sorted! People left hard lives and hoped for better ones here.', es: '¡Las razones están en orden! La gente dejó vidas duras y esperaba algo mejor aquí.', fa: 'دلیل‌ها جدا شدند! مردم زندگی سخت را ترک کردند و اینجا امید زندگی بهتر داشتند.' }
  },

  boss: {
    at: [13, 4],
    stat: 'mov',
    need: 3,
    name: { en: 'The Grump of Closed Doors', es: 'El Gruñón de las Puertas Cerradas', fa: 'غرغروی درهای بسته' },
    appear: { en: 'The Grump of Closed Doors hides in the harbor fog!', es: '¡El Gruñón de las Puertas Cerradas se esconde en la niebla del puerto!', fa: 'غرغروی درهای بسته در مه بندر پنهان است!' },
    taunt: { en: 'So many stories! Too many to remember. I will shut this journal!', es: '¡Cuántas historias! Son demasiadas para recordar. ¡Cerraré este diario!', fa: 'این‌قدر داستان! برای به یاد آوردن خیلی زیاد است. این روزنامچه را می‌بندم!' },
    win: { en: 'The fog lifts over the harbor. Journal page 6.1 floats into your hands!', es: 'La niebla se va del puerto. ¡La página 6.1 del diario cae en tus manos!', fa: 'مه از روی بندر کنار می‌رود. صفحهٔ ۶.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a push factor?', es: '¿Qué es un factor de expulsión?', fa: 'دلیل رفتن (عامل دفع) چیست؟' },
        choices: [
          { en: 'A problem that makes people leave home', es: 'Un problema que hace que la gente deje su hogar', fa: 'مشکلی که مردم را به ترک وطن مجبور می‌کند' },
          { en: 'A reason that draws people to a new land', es: 'Una razón que atrae a la gente a otra tierra', fa: 'دلیلی که مردم را به سرزمین نو می‌کشاند' },
          { en: 'A ship that pushes boats into the harbor', es: 'Un barco que empuja botes hacia el puerto', fa: 'کشتی‌ای که قایق‌ها را به بندر تیله می‌کند' },
          { en: 'A law that lets newcomers vote', es: 'Una ley que deja votar a los recién llegados', fa: 'قانونی که به تازه‌واردها حق رأی می‌دهد' }],
        answer: 0,
        why: { en: 'Push factors, like hunger, war and persecution, make people leave home.', es: 'Los factores de expulsión, como el hambre, la guerra y la persecución, hacen que la gente se vaya.', fa: 'دلیل‌های رفتن، مثل گرسنگی، جنگ و آزار، مردم را به ترک وطن مجبور می‌کنند.' } },
      { q: { en: 'Which was a pull factor that drew immigrants to America?', es: '¿Cuál fue un factor de atracción que trajo inmigrantes a EE. UU.?', fa: 'کدام یک دلیل آمدن بود که مهاجران را به امریکا کشاند؟' },
        choices: [
          { en: 'Jobs in factories and mines', es: 'Trabajo en fábricas y minas', fa: 'کار در فابریکه‌ها و معدن‌ها' },
          { en: 'Crop failures at home', es: 'Malas cosechas en casa', fa: 'خرابی حاصلات در وطن' },
          { en: 'Attacks on their towns', es: 'Ataques a sus pueblos', fa: 'حمله بر شهرهای‌شان' },
          { en: 'Wars in their home countries', es: 'Guerras en sus países', fa: 'جنگ در کشورهای خودشان' }],
        answer: 0,
        why: { en: 'Jobs pulled people here. Crop failures, attacks and wars are push factors.', es: 'El trabajo atrajo a la gente. Las malas cosechas, los ataques y las guerras son factores de expulsión.', fa: 'کار مردم را به اینجا کشاند. خرابی حاصلات، حمله و جنگ دلیل‌های رفتن هستند.' } },
      { q: { en: 'Where was Ellis Island?', es: '¿Dónde estaba la isla Ellis?', fa: 'جزیرهٔ الیس کجا بود؟' },
        choices: [
          { en: 'In New York Harbor', es: 'En el puerto de Nueva York', fa: 'در بندر نیویارک' },
          { en: 'In San Francisco Bay', es: 'En la bahía de San Francisco', fa: 'در خلیج سان فرانسیسکو' },
          { en: 'On the Mississippi River', es: 'En el río Misisipi', fa: 'روی دریای میسیسیپی' },
          { en: 'In the Gulf of Mexico', es: 'En el golfo de México', fa: 'در خلیج مکسیکو' }],
        answer: 0,
        why: { en: 'Ellis Island opened in 1892 in New York Harbor, near the Statue of Liberty.', es: 'La isla Ellis abrió en 1892 en el puerto de Nueva York, cerca de la Estatua de la Libertad.', fa: 'جزیرهٔ الیس در سال ۱۸۹۲ در بندر نیویارک، نزدیک مجسمهٔ آزادی باز شد.' } },
      { q: { en: 'On the West Coast, where did many Asian immigrants arrive after 1910?', es: 'En la costa oeste, ¿a dónde llegaron muchos inmigrantes asiáticos después de 1910?', fa: 'در ساحل غربی، بسیاری از مهاجران آسیایی بعد از ۱۹۱۰ به کجا می‌رسیدند؟' },
        choices: [
          { en: 'Angel Island, San Francisco Bay', es: 'La isla Ángel, bahía de San Francisco', fa: 'جزیرهٔ اینجل، خلیج سان فرانسیسکو' },
          { en: 'Ellis Island, New York Harbor', es: 'La isla Ellis, puerto de Nueva York', fa: 'جزیرهٔ الیس، بندر نیویارک' },
          { en: 'Boston Harbor, Massachusetts', es: 'El puerto de Boston, Massachusetts', fa: 'بندر بوستون، ماساچوست' },
          { en: 'The Great Lakes, near Chicago', es: 'Los Grandes Lagos, cerca de Chicago', fa: 'جهیل‌های بزرگ، نزدیک شیکاگو' }],
        answer: 0,
        why: { en: 'Angel Island opened in 1910. Many Asian immigrants were held there much longer, for weeks or months.', es: 'La isla Ángel abrió en 1910. A muchos inmigrantes asiáticos los retenían allí mucho más tiempo, semanas o meses.', fa: 'جزیرهٔ اینجل در سال ۱۹۱۰ باز شد. بسیاری از مهاجران آسیایی آنجا خیلی بیشتر، هفته‌ها یا ماه‌ها، نگه داشته می‌شدند.' } },
      { q: { en: 'Why was the Chinese Exclusion Act of 1882 a big change?', es: '¿Por qué la Ley de Exclusión China de 1882 fue un gran cambio?', fa: 'چرا قانون منع چینایی‌ها در ۱۸۸۲ یک تغییر بزرگ بود؟' },
        choices: [
          { en: 'First US law to ban one nationality', es: 'Primera ley de EE. UU. que prohibió una nacionalidad', fa: 'اولین قانون امریکا که یک ملیت را منع کرد' },
          { en: 'First US law to welcome all workers', es: 'Primera ley de EE. UU. que recibió a todos los obreros', fa: 'اولین قانون امریکا که همهٔ کارگران را پذیرفت' },
          { en: 'First US law to build a new port', es: 'Primera ley de EE. UU. para construir un puerto', fa: 'اولین قانون امریکا برای ساختن یک بندر نو' },
          { en: 'First US law to make English official', es: 'Primera ley de EE. UU. que hizo oficial el inglés', fa: 'اولین قانون امریکا که انگلیسی را زبان رسمی ساخت' }],
        answer: 0,
        why: { en: 'In 1882, the US banned Chinese workers. It was the first law to ban a group by nationality.', es: 'En 1882, EE. UU. prohibió a los trabajadores chinos. Fue la primera ley que prohibió a un grupo por su nacionalidad.', fa: 'در سال ۱۸۸۲، امریکا کارگران چینایی را منع کرد. این اولین قانونی بود که یک گروه را به خاطر ملیت منع کرد.' } },
      { q: { en: 'What is nativism?', es: '¿Qué es el nativismo?', fa: 'بومی‌گرایی چیست؟' },
        choices: [
          { en: 'Dislike of newcomers', es: 'Rechazo a los recién llegados', fa: 'بد دیدن تازه‌واردها' },
          { en: 'Moving to a new country', es: 'Mudarse a un país nuevo', fa: 'رفتن به یک کشور نو' },
          { en: 'Teaching newcomers English', es: 'Enseñar inglés a los recién llegados', fa: 'یاد دادن انگلیسی به تازه‌واردها' },
          { en: 'Building homes for families', es: 'Construir casas para las familias', fa: 'ساختن خانه برای خانواده‌ها' }],
        answer: 0,
        why: { en: 'Nativists wanted fewer immigrants. In the 1920s, new laws set [[quota|quotas]], or limits.', es: 'Los nativistas querían menos inmigrantes. En los años 1920, nuevas leyes pusieron [[quota|cuotas]], o límites.', fa: 'بومی‌گرایان مهاجران کمتر می‌خواستند. در دههٔ ۱۹۲۰، قانون‌های نو [[quota|سهمیه]]، یعنی حد، گذاشتند.' } },
      { q: { en: 'Where did many immigrant families live in big cities?', es: '¿Dónde vivían muchas familias inmigrantes en las grandes ciudades?', fa: 'بسیاری از خانواده‌های مهاجر در شهرهای بزرگ کجا زندگی می‌کردند؟' },
        choices: [
          { en: 'In crowded tenements', es: 'En vecindades llenas de gente', fa: 'در تعمیرهای پرازدحام' },
          { en: 'On big farms out west', es: 'En grandes granjas del oeste', fa: 'در فارم‌های بزرگ غرب' },
          { en: 'In large stone castles', es: 'En grandes castillos de piedra', fa: 'در قلعه‌های بزرگ سنگی' },
          { en: 'In tents by the harbor', es: 'En tiendas de campaña junto al puerto', fa: 'در خیمه‌ها کنار بندر' }],
        answer: 0,
        why: { en: '[[tenement|Tenements]] were small, crowded and often dark. Families built neighborhoods with churches, synagogues and shops.', es: 'Las [[tenement|vecindades]] eran pequeñas, llenas y a menudo oscuras. Las familias formaron barrios con iglesias, sinagogas y tiendas.', fa: '[[tenement|تعمیرهای پرازدحام]] کوچک و اکثراً تاریک بودند. خانواده‌ها محله‌هایی با کلیسا، کنیسه و دکان ساختند.' } },
      { q: { en: 'What was Hull House, started by Jane Addams in 1889?', es: '¿Qué era Hull House, fundada por Jane Addams en 1889?', fa: 'هال هاوس که جین آدامز در سال ۱۸۸۹ ساخت، چه بود؟' },
        choices: [
          { en: 'A center that helped immigrants', es: 'Un centro que ayudaba a los inmigrantes', fa: 'مرکزی که به مهاجران کمک می‌کرد' },
          { en: 'A factory for railroad cars', es: 'Una fábrica de vagones de tren', fa: 'فابریکهٔ واگون‌های ریل' },
          { en: 'A station for new arrivals', es: 'Una estación para recién llegados', fa: 'مرکزی برای تازه‌واردها در بندر' },
          { en: 'A big hotel for rich visitors', es: 'Un gran hotel para visitantes ricos', fa: 'یک هوتل بزرگ برای مهمانان ثروتمند' }],
        answer: 0,
        why: { en: 'Hull House in Chicago was a [[settlement house|settlement house]]. It gave classes and child care to immigrant families.', es: 'Hull House, en Chicago, era una [[settlement house|casa de asentamiento]]. Daba clases y cuidado de niños a familias inmigrantes.', fa: 'هال هاوس در شیکاگو یک [[settlement house|خانهٔ کمک]] بود. به خانواده‌های مهاجر درس و نگهداری اطفال می‌داد.' } }
    ]
  },

  learned: [
    { en: 'From the 1880s to the 1920s, millions of new [[immigrant|immigrants]] came, mostly from southern and eastern Europe.', es: 'De los años 1880 a 1920 llegaron millones de nuevos [[immigrant|inmigrantes]], la mayoría del sur y el este de Europa.', fa: 'از دههٔ ۱۸۸۰ تا ۱۹۲۰، میلیون‌ها [[immigrant|مهاجر]] نو آمدند، بیشترشان از جنوب و شرق اروپا.' },
    { en: '[[push factor|Push factors]] like hunger and persecution made people leave. [[pull factor|Pull factors]] like jobs, family and freedom drew them here.', es: 'Los [[push factor|factores de expulsión]], como el hambre y la persecución, hicieron salir a la gente. Los [[pull factor|factores de atracción]], como el trabajo, la familia y la libertad, la trajeron aquí.', fa: '[[push factor|دلیل‌های رفتن]] مثل گرسنگی و آزار مردم را به رفتن مجبور کرد. [[pull factor|دلیل‌های آمدن]] مثل کار، خانواده و آزادی آن‌ها را به اینجا کشاند.' },
    { en: 'Many faced a hard welcome: the [[chinese exclusion act|Chinese Exclusion Act]], [[nativism|nativism]] and crowded [[tenement|tenements]]. [[settlement house|Settlement houses]] helped with [[americanization|Americanization]]. Immigrants helped build the nation.', es: 'Muchos tuvieron una bienvenida difícil: la [[chinese exclusion act|Ley de Exclusión China]], el [[nativism|nativismo]] y las [[tenement|vecindades]] llenas. Las [[settlement house|casas de asentamiento]] ayudaron con la [[americanization|americanización]]. Los inmigrantes ayudaron a construir la nación.', fa: 'بسیاری استقبال سختی دیدند: [[chinese exclusion act|قانون منع چینایی‌ها]]، [[nativism|بومی‌گرایی]] و [[tenement|تعمیرهای پرازدحام]]. [[settlement house|خانه‌های کمک]] در [[americanization|امریکایی‌سازی]] کمک کردند. مهاجران در ساختن ملت کمک کردند.' }
  ],
  reflect: {
    q: { en: 'Newcomers built neighborhoods together. How could you help a new student feel welcome?', es: 'Los recién llegados formaron barrios juntos. ¿Cómo podrías ayudar a un estudiante nuevo a sentirse bienvenido?', fa: 'تازه‌واردها با هم محله ساختند. چطور می‌توانی به یک شاگرد نو کمک کنی که احساس خوش‌آمد کند؟' },
    starter: { en: 'To help a new student feel welcome, I could', es: 'Para que un estudiante nuevo se sienta bienvenido, yo podría', fa: 'برای این که یک شاگرد نو احساس خوش‌آمد کند، من می‌توانم' }
  }
};
