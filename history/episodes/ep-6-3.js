/* TIMEWALKER · Episode 6.3 · The Great Depression (WHII)
   Chicago, winter 1932, three years after the stock market crash.
   NW: a closed steel mill (X), the rail yard (railway, row 6) and a coal pile (r).
   NE: downtown, with tall buildings (U), a closed bank (J with a door) and a small plaza; Lake Michigan on the east edge.
   SW: a neighborhood of houses and a church soup kitchen. SE: a shack camp (a "Hooverville", H over N) and a park.
   Many points of view: a Polish steelworker, a German-born baker, a Mexican American mother, a Black railway porter. */
window.EPISODE = {
  id: '6.3',
  realm: 6,
  sol: 'WHII',
  title: { en: 'The Great Depression', es: 'La Gran Depresión', fa: 'رکود بزرگ' },
  place: { en: 'Chicago, USA, 1932', es: 'Chicago, EE. UU., 1932', fa: 'شیکاگو، امریکا، ۱۹۳۲' },
  weather: { sky: 'snow' },
  intro: [
    { en: 'The Grump blurred the [[great depression|Great Depression]] page. People forgot how hard times spread.',
      es: 'El Gruñón borró la página de la [[great depression|Gran Depresión]]. La gente olvidó cómo se extendieron los tiempos duros.',
      fa: 'غرغرو صفحهٔ [[great depression|رکود بزرگ]] را تار کرد. مردم فراموش کردند روزهای سخت چطور پخش شد.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Chicago on the world map, 1932 on the timeline */
  scenes: {
    at: [-87.6, 41.9],
    year: 1932,
    start: [
      { en: 'In October 1929, prices on the US stock market crashed.',
        es: 'En octubre de 1929, los precios de la bolsa de Estados Unidos se desplomaron.',
        fa: 'در اکتوبر ۱۹۲۹، قیمت‌ها در بازار سهام امریکا سقوط کرد.' },
      { en: 'Banks closed, factories shut, and millions of people lost their jobs.',
        es: 'Cerraron bancos y fábricas, y millones de personas perdieron su trabajo.',
        fa: 'بانک‌ها و فابریکه‌ها بسته شدند و میلیون‌ها نفر کار خود را از دست دادند.' },
      { en: 'This hard time is called the Great Depression. It spread around the world.',
        es: 'Esta época dura se llama la Gran Depresión. Se extendió por todo el mundo.',
        fa: 'این دورهٔ سخت رکود بزرگ نام دارد. در سراسر جهان پخش شد.' }
    ],
    page: { en: 'In 1933, the New Deal began. The US government made jobs for millions.',
      es: 'En 1933 empezó el Nuevo Trato. El gobierno de Estados Unidos creó trabajos para millones.',
      fa: 'در ۱۹۳۳، برنامهٔ نیو دیل شروع شد. حکومت امریکا برای میلیون‌ها نفر کار ساخت.' },
    guess: {
      q: { en: 'In 1932, could people who lost their jobs find new ones fast?', es: 'En 1932, ¿la gente que perdía su trabajo encontraba otro rápido?', fa: 'در ۱۹۳۲، آیا کسانی که کار خود را از دست دادند زود کار تازه پیدا می‌کردند؟' },
      choices: [
        { t: { en: 'No, jobs were scarce', es: 'No, había pocos trabajos', fa: 'نه، کار کم بود' }, ok: true },
        { t: { en: 'Yes, very fast', es: 'Sí, muy rápido', fa: 'بله، خیلی زود' } }
      ],
      why: { en: 'Factories and stores were closing. In 1932, about 1 in 4 US workers had no job.', es: 'Fábricas y tiendas cerraban. En 1932, cerca de 1 de cada 4 trabajadores en EE. UU. no tenía empleo.', fa: 'فابریکه‌ها و دکان‌ها بسته می‌شدند. در ۱۹۳۲ از هر ۴ کارگر امریکایی حدود ۱ نفر بیکار بود.' }
    },
    next: {
      q: { en: 'Next: the rise of dictators. Can hunger and fear help a cruel leader?', es: 'Ahora: el ascenso de los dictadores. ¿El hambre y el miedo pueden ayudar a un líder cruel?', fa: 'بعدی: به قدرت رسیدن دیکتاتورها. آیا گرسنگی و ترس به یک رهبر ظالم کمک می‌کند؟' },
      choices: [
        { t: { en: 'Yes, they can', es: 'Sí, pueden', fa: 'بله، می‌توانند' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'In the 1930s, leaders like Hitler used people\'s fear and anger to gain total power.', es: 'En los años 30, líderes como Hitler usaron el miedo y el enojo de la gente para tener todo el poder.', fa: 'در دههٔ ۱۹۳۰، رهبرانی مثل هیتلر از ترس و خشم مردم استفاده کردند تا قدرت کامل بگیرند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [3, 13], name: { en: 'Mr. Willis', es: 'Sr. Willis', fa: 'آقای ویلیس' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#f2f2f2', pants: '#1a1a2a', style: 'short', hat: '#1a1a2a' },
      lines: [
        { en: 'I am a porter on the trains. I carry bags and make beds.', es: 'Soy maletero en los trenes. Llevo maletas y hago camas.', fa: 'من حمال قطار هستم. بکس‌ها را می‌برم و بستر جور می‌کنم.' },
        { en: 'Black workers are often the last hired and the first fired.', es: 'A los trabajadores negros muchas veces los contratan al final y los despiden primero.', fa: 'کارگران سیاه‌پوست اکثراً آخر از همه استخدام و اول از همه اخراج می‌شوند.' }
      ] },
    { at: [9, 13], name: { en: 'Pastor Green', es: 'Pastor Green', fa: 'کشیش گرین' },
      look: { skin: 4, hair: '#a8a8a8', shirt: '#2a2a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is our church soup kitchen. Hundreds come here every day.', es: 'Este es el comedor de nuestra iglesia. Cientos vienen aquí cada día.', fa: 'این آشخانهٔ خیریهٔ کلیسای ماست. هر روز صدها نفر اینجا می‌آیند.' },
        { en: 'Some had good jobs before the crash. Now they wait in line for soup.', es: 'Algunos tenían buenos trabajos antes de la caída. Ahora hacen fila por sopa.', fa: 'بعضی پیش از سقوط کار خوب داشتند. حالا برای شوربا در قطار می‌ایستند.' }
      ] },
    { at: [3, 18], name: { en: 'Mrs. Kowalski', es: 'Sra. Kowalski', fa: 'خانم کووالسکی' },
      look: { skin: 1, hair: '#c8a060', shirt: '#5a6a4a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'We could not pay the rent, so we share this house with my sister.', es: 'No pudimos pagar la renta, así que vivimos con mi hermana.', fa: 'نتوانستیم کرایه بدهیم، پس با خواهرم در این خانه زندگی می‌کنیم.' },
        { en: 'I sew clothes at night to earn a few cents.', es: 'Coso ropa de noche para ganar unos centavos.', fa: 'شب‌ها لباس می‌دوزم تا چند سنت پیدا کنم.' }
      ] },
    { at: [25, 2], name: { en: 'Mr. Price', es: 'Sr. Price', fa: 'آقای پرایس' },
      look: { skin: 1, hair: '#5a5a5a', shirt: '#3a4a6a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I was a clerk in this bank. It closed its doors last month.', es: 'Era empleado de este banco. Cerró sus puertas el mes pasado.', fa: 'من کارمند این بانک بودم. ماه گذشته درهایش را بست.' },
        { en: 'We had lent the savings out. When everyone came at once, the money was gone.', es: 'Habíamos prestado los ahorros. Cuando todos vinieron a la vez, ya no había dinero.', fa: 'پس‌اندازها را قرض داده بودیم. وقتی همه یکجا آمدند، پولی نماند.' }
      ] },
    { at: [18, 14], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#6a4a3a', pants: '#3a3a3a', style: 'short', hat: '#4a3a2a' },
      lines: [
        { en: 'I was a carpenter. I lost my house when I could not pay the bank.', es: 'Era carpintero. Perdí mi casa cuando no pude pagarle al banco.', fa: 'من نجار بودم. وقتی نتوانستم پول بانک را بدهم، خانه‌ام را از دست دادم.' },
        { en: 'I built this shack from boxes and tin. People call these camps Hoovervilles.', es: 'Hice esta choza con cajas y lata. La gente llama a estos campos Hoovervilles.', fa: 'این کلبه را از قطی و حلبی ساختم. مردم این اردوگاه‌ها را هوورویل می‌نامند.' }
      ] },
    { at: [23, 14], name: { en: 'Clara', es: 'Clara', fa: 'کلارا' },
      look: { skin: 3, hair: '#1a1208', shirt: '#7a3a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My husband rode the trains west to look for farm work.', es: 'Mi esposo se fue en los trenes al oeste a buscar trabajo en el campo.', fa: 'شوهرم با قطارها به غرب رفت تا کار فارم پیدا کند.' },
        { en: 'He writes that there is no work there either.', es: 'Me escribe que allá tampoco hay trabajo.', fa: 'او می‌نویسد که آنجا هم کار نیست.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW (x 0-15, y 0-10): the closed steel mill (X), the rail yard (row 6), a coal pile (r).
     NE (x 16-31, y 0-10): downtown. Tall buildings (U), the closed bank (J, door at x 25), a plaza (l).
     SW (x 0-15, y 11-21): the neighborhood (R over h) and the church soup kitchen (door at x 9).
     SE (x 16-31, y 11-21): the shack camp (H over N) and a park (l).
     x 28-31: the shore of Lake Michigan (sand, then water). */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWW~==',
    'W.XXXX...XXXX..WUU.UUU..JJJ.s~==',
    'W.XXXX...XXXX..WUU.UUU..JdJ.s~==',
    'W..:........:...............s~==',
    'W:::::::::::::::::::::::::::s~==',
    'W..............W.UUU..llll..s~==',
    'W-------------.W.UUU..lxll..s~==',
    'W...........x..W......llll..s~==',
    'W.rr...........W............s~==',
    'W..........................,s~==',
    'W...:..........W....:.......s~==',
    'W...:..........W....:.......s~==',
    'W.RRR...RRRR...W............s~==',
    'W.hdh...hdhh...W.HHH..HHH...s~==',
    'W...:....:.......NdN..NdN...s~==',
    'W::::::::::::::.............s~==',
    'W..............W..T.......x.s~==',
    'W.RRR....T..T..W....llllll..s~==',
    'W.hdh..........W............s~==',
    'W..............W..T......T..s~==',
    'W.....,........W............s~==',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWW~=='
  ],
  start: [5, 16],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 20], at: [14, 16], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north. Look near the street corner.', es: 'Desde esta nota, camina 4 pasos al norte. Busca cerca de la esquina.', fa: 'از این یادداشت، ۴ قدم به شمال برو. نزدیک کنج سرک را ببین.' },
      text: { en: 'A 5-cent coin. Jobless men sold apples on city corners for 5 cents each.', es: 'Una moneda de 5 centavos. Hombres sin trabajo vendían manzanas en las esquinas a 5 centavos.', fa: 'یک سکهٔ ۵ سنتی. مردان بیکار در کنج سرک‌های شهر هر سیب را ۵ سنت می‌فروختند.' } },
    { clueAt: [16, 20], at: [16, 13], decor: 'feather',
      clue: { en: 'From this note, walk 7 steps north, toward the shacks.', es: 'Desde esta nota, camina 7 pasos al norte, hacia las chozas.', fa: 'از این یادداشت، ۷ قدم به شمال برو، به طرف کلبه‌ها.' },
      text: { en: 'A letter from Oklahoma: "No rain again. Dust storms blow our soil away."', es: 'Una carta de Oklahoma: "Otra vez sin lluvia. Las tormentas de polvo se llevan nuestra tierra."', fa: 'یک نامه از اوکلاهوما: «باز باران نبارید. توفان‌های خاک، خاک ما را می‌برند.»' } }
  ],

  words: {
    'great depression': { en: 'the hard years after 1929, when businesses failed and millions lost jobs', es: 'los años duros después de 1929, cuando fracasaron negocios y millones perdieron su trabajo', fa: 'سال‌های سخت بعد از ۱۹۲۹، وقتی کسب و کارها ورشکست شدند و میلیون‌ها نفر بیکار شدند' },
    'stock market': { en: 'a place where people buy and sell small shares of companies', es: 'un lugar donde la gente compra y vende partes pequeñas de empresas', fa: 'جایی که مردم سهم‌های کوچک شرکت‌ها را می‌خرند و می‌فروشند' },
    savings: { en: 'money people keep for later, often in a bank', es: 'dinero que la gente guarda para después, muchas veces en un banco', fa: 'پولی که مردم برای بعد نگه می‌دارند، اکثراً در بانک' },
    unemployed: { en: 'without a job, but wanting one', es: 'sin trabajo, pero queriendo uno', fa: 'بیکار، اما در جستجوی کار' },
    hooverville: { en: 'a camp of shacks built by people who lost their homes, named after President Hoover', es: 'un campo de chozas hecho por gente que perdió su casa, llamado así por el presidente Hoover', fa: 'اردوگاهی از کلبه‌ها که مردم بی‌خانه ساختند، به نام رئیس‌جمهور هوور' },
    barter: { en: 'trading goods or work for other goods, without money', es: 'cambiar cosas o trabajo por otras cosas, sin dinero', fa: 'عوض کردن جنس یا کار با جنس دیگر، بدون پول' },
    loan: { en: 'money that is lent and must be paid back', es: 'dinero que se presta y se debe devolver', fa: 'پولی که قرض داده می‌شود و باید پس داده شود' },
    'new deal': { en: 'President Roosevelt\'s programs, from 1933, that made jobs and helped people', es: 'los programas del presidente Roosevelt, desde 1933, que crearon trabajos y ayudaron a la gente', fa: 'برنامه‌های رئیس‌جمهور روزولت از ۱۹۳۳ که کار ساختند و به مردم کمک کردند' }
  },

  npcs: [
    {
      x: 6, y: 3,
      name: { en: 'Joe Nowak', es: 'Joe Nowak', fa: 'جو نواک' },
      role: { en: 'Steelworker', es: 'Obrero del acero', fa: 'کارگر فولاد' },
      look: { skin: 1, hair: '#7a5a3a', shirt: '#4a5a6a', pants: '#2a2a3a', style: 'short', hat: '#3a3a3a' },
      lines: [
        { en: 'My parents came from Poland. I worked in this steel mill for ten years.', es: 'Mis padres vinieron de Polonia. Trabajé en esta acería diez años.', fa: 'پدر و مادرم از پولند آمدند. ده سال در این فابریکهٔ فولاد کار کردم.' },
        { en: 'People stopped buying cars and buildings. So the mill needed less steel.', es: 'La gente dejó de comprar autos y edificios. Así que la acería necesitó menos acero.', fa: 'مردم دیگر موتر و ساختمان نخریدند. پس فابریکه به فولاد کمتر نیاز داشت.' },
        { en: 'The mill closed. Now about 1 in 4 workers is [[unemployed|unemployed]], like me.', es: 'La acería cerró. Ahora cerca de 1 de cada 4 trabajadores está [[unemployed|desempleado]], como yo.', fa: 'فابریکه بسته شد. حالا از هر ۴ کارگر حدود ۱ نفر مثل من [[unemployed|بیکار]] است.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did so many factories close after 1929?', es: '¿Por qué cerraron tantas fábricas después de 1929?', fa: 'چرا بعد از ۱۹۲۹ این‌قدر زیاد فابریکه‌ها بسته شدند؟' },
        choices: [
          { ok: true, t: { en: 'People had less money, so they bought less', es: 'La gente tenía menos dinero y compraba menos', fa: 'مردم پول کمتر داشتند، پس کمتر خریدند' },
            why: { en: 'Yes. With less buying, factories sold less, so they cut jobs. Then people had even less money.', es: 'Sí. Con menos compras, las fábricas vendían menos y despedían gente. Entonces había aún menos dinero.', fa: 'بله. با خرید کمتر، فابریکه‌ها کمتر فروختند و کارگران را اخراج کردند. بعد مردم پول کمتری داشتند.' } },
          { t: { en: 'The government ordered every factory to close', es: 'El gobierno ordenó cerrar todas las fábricas', fa: 'حکومت دستور داد همهٔ فابریکه‌ها بسته شوند' },
            why: { en: 'No law closed them. Factories closed because people stopped buying.', es: 'Ninguna ley las cerró. Cerraron porque la gente dejó de comprar.', fa: 'هیچ قانونی آن‌ها را نبست. چون مردم خرید را بس کردند، بسته شدند.' } },
          { t: { en: 'All the workers left to become farmers', es: 'Todos los obreros se fueron a ser agricultores', fa: 'همهٔ کارگران رفتند تا دهقان شوند' },
            why: { en: 'Workers wanted to keep their jobs. Farmers were having hard times too.', es: 'Los obreros querían conservar su trabajo. Los agricultores también pasaban tiempos duros.', fa: 'کارگران می‌خواستند کارشان را نگه دارند. دهقانان هم روزهای سختی داشتند.' } }
        ]
      }
    },
    {
      x: 12, y: 18,
      name: { en: 'Gertrude', es: 'Gertrude', fa: 'گرترود' },
      role: { en: 'Baker from Germany', es: 'Panadera de Alemania', fa: 'نانوای آلمانی' },
      look: { skin: 1, hair: '#d8c8a0', shirt: '#f2f2f2', pants: '#4a3a3a', style: 'bun' },
      lines: [
        { en: 'I came from Germany in 1923. My sister still lives in Berlin.', es: 'Vine de Alemania en 1923. Mi hermana todavía vive en Berlín.', fa: 'من در ۱۹۲۳ از آلمان آمدم. خواهرم هنوز در برلین زندگی می‌کند.' },
        { en: 'After the crash, American banks wanted their [[loan|loans]] to Germany paid back.', es: 'Después de la caída, los bancos estadounidenses quisieron que Alemania pagara sus [[loan|préstamos]].', fa: 'بعد از سقوط، بانک‌های امریکایی خواستند آلمان [[loan|قرض‌هایشان]] را پس بدهد.' },
        { en: 'Now 6 million Germans have no work. Some listen to a man named Hitler.', es: 'Ahora 6 millones de alemanes no tienen trabajo. Algunos escuchan a un hombre llamado Hitler.', fa: 'حالا ۶ میلیون آلمانی کار ندارند. بعضی به مردی به نام هیتلر گوش می‌دهند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'How did the crash in the United States hurt Germany?', es: '¿Cómo dañó a Alemania la caída de Estados Unidos?', fa: 'سقوط در امریکا چطور به آلمان زیان رساند؟' },
        choices: [
          { ok: true, t: { en: 'US banks asked for their loans back', es: 'Los bancos de EE. UU. pidieron sus préstamos', fa: 'بانک‌های امریکا قرض‌شان را پس خواستند' },
            why: { en: 'Yes. German businesses had lived on US loans. Without them, many closed.', es: 'Sí. Los negocios alemanes vivían de préstamos de EE. UU. Sin ellos, muchos cerraron.', fa: 'بله. کسب و کار آلمان با قرض امریکا می‌چرخید. بدون آن، بسیاری بسته شدند.' } },
          { t: { en: 'American soldiers took over German mills', es: 'Soldados estadounidenses tomaron fábricas alemanas', fa: 'سربازان امریکایی فابریکه‌های آلمان را گرفتند' },
            why: { en: 'There was no army. Money linked the two countries: loans and trade.', es: 'No hubo ejército. El dinero unía a los dos países: préstamos y comercio.', fa: 'لشکری نبود. پول دو کشور را به هم وصل می‌کرد: قرض و تجارت.' } },
          { t: { en: 'Germany had to send all its bread away', es: 'Alemania tuvo que mandar todo su pan fuera', fa: 'آلمان مجبور شد همهٔ نانش را بفرستد' },
            why: { en: 'Bread was not the link. Banks and trade carried the crash across the ocean.', es: 'El pan no era la conexión. Los bancos y el comercio llevaron la caída al otro lado del mar.', fa: 'نان پیوند نبود. بانک‌ها و تجارت سقوط را از بحر گذراندند.' } }
        ]
      }
    },
    {
      x: 22, y: 17,
      name: { en: 'Rosa Morales', es: 'Rosa Morales', fa: 'روزا مورالس' },
      role: { en: 'Mother and factory worker', es: 'Madre y obrera', fa: 'مادر و کارگر' },
      look: { skin: 3, hair: '#120c08', shirt: '#2f8f8f', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'My family came from Mexico. We have lived in Chicago for ten years.', es: 'Mi familia vino de México. Vivimos en Chicago desde hace diez años.', fa: 'خانوادهٔ من از مکسیکو آمد. ده سال است در شیکاگو زندگی می‌کنیم.' },
        { en: 'Now some leaders say Mexicans take American jobs. That is not fair.', es: 'Ahora algunos líderes dicen que los mexicanos quitan trabajos. Eso no es justo.', fa: 'حالا بعضی رهبران می‌گویند مکسیکویی‌ها کار امریکایی‌ها را می‌گیرند. این انصاف نیست.' },
        { en: 'Many families like mine are pushed to leave. Some children were born here!', es: 'A muchas familias como la mía las presionan para irse. ¡Algunos niños nacieron aquí!', fa: 'بسیاری از خانواده‌های مثل ما مجبور به رفتن می‌شوند. بعضی اطفال اینجا به دنیا آمده‌اند!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why were many Mexican American families pushed to leave in the 1930s?', es: '¿Por qué presionaron a muchas familias mexicoamericanas a irse en los años 30?', fa: 'چرا در دههٔ ۱۹۳۰ بسیاری از خانواده‌های مکسیکویی-امریکایی مجبور به رفتن شدند؟' },
        choices: [
          { ok: true, t: { en: 'Some people unfairly blamed them for job losses', es: 'Algunos los culparon injustamente por la falta de trabajo', fa: 'بعضی‌ها ناحق آن‌ها را مقصر بیکاری دانستند' },
            why: { en: 'Yes. In hard times, some blamed newcomers. Many US citizens were sent away too.', es: 'Sí. En tiempos duros, algunos culparon a los recién llegados. También expulsaron a muchos ciudadanos.', fa: 'بله. در روزهای سخت، بعضی‌ها تازه‌واردان را مقصر دانستند. بسیاری از شهروندان امریکا هم فرستاده شدند.' } },
          { t: { en: 'They had all asked to move back to Mexico', es: 'Todos habían pedido volver a México', fa: 'همه خودشان خواسته بودند به مکسیکو برگردند' },
            why: { en: 'Some chose to go, but many were pushed out by pressure and fear.', es: 'Algunos eligieron irse, pero a muchos los sacaron la presión y el miedo.', fa: 'بعضی خودشان رفتند، اما بسیاری با فشار و ترس بیرون رانده شدند.' } },
          { t: { en: 'Chicago had more jobs than it had workers', es: 'Chicago tenía más trabajos que trabajadores', fa: 'شیکاگو از کارگر بیشتر کار داشت' },
            why: { en: 'It was the opposite. Jobs were scarce, and that fear was turned on them.', es: 'Fue lo contrario. Había pocos trabajos, y ese miedo se volvió contra ellos.', fa: 'برعکس بود. کار کم بود و آن ترس بر ضد آن‌ها به کار رفت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 12, y: 7, text: { en: 'STEEL MILL · CLOSED · No workers wanted.', es: 'ACERÍA · CERRADA · No se buscan trabajadores.', fa: 'فابریکهٔ فولاد · بسته · کارگر لازم نیست.' } },
    { x: 23, y: 6, text: { en: 'CHICAGO · 1932 · Downtown banks. Many have closed since the [[stock market|stock market]] crash of 1929.', es: 'CHICAGO · 1932 · Bancos del centro. Muchos cerraron desde la caída de la [[stock market|bolsa]] en 1929.', fa: 'شیکاگو · ۱۹۳۲ · بانک‌های مرکز شهر. بسیاری از زمان سقوط [[stock market|بازار سهام]] در ۱۹۲۹ بسته شده‌اند.' } },
    { x: 26, y: 16, text: { en: 'A [[hooverville|HOOVERVILLE]] · People who lost their homes built these shacks by the lake.', es: 'UN [[hooverville|HOOVERVILLE]] · Gente que perdió su casa construyó estas chozas junto al lago.', fa: 'یک [[hooverville|هوورویل]] · مردمی که خانه‌شان را از دست دادند این کلبه‌ها را کنار جهیل ساختند.' } }
  ],

  /* the quest: Mae at the soup kitchen (gold !) -> Walt the newsboy by the bank downtown
     -> Hendrik the farmer at the rail yard: no one has cash, so he barters his potatoes for something real -> back to Mae */
  quest: {
    stat: 'pla',
    title: { en: 'Soup for the Line', es: 'Sopa para la fila', fa: 'شوربا برای قطار' },
    giver: {
      x: 11, y: 15,
      name: { en: 'Mae', es: 'Mae', fa: 'می' },
      role: { en: 'Soup kitchen helper', es: 'Ayudante del comedor', fa: 'کمک‌کار آشخانهٔ خیریه' },
      look: { skin: 4, hair: '#1a1008', shirt: '#c06a2a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'Hundreds of hungry people wait in our soup line. Our pot is empty!', es: 'Cientos de personas con hambre esperan en nuestra fila. ¡La olla está vacía!', fa: 'صدها نفر گرسنه در قطار شوربای ما منتظرند. دیگ ما خالی است!' },
        { en: 'Walt the newsboy knows everyone. He sells papers by the bank.', es: 'Walt, el voceador, conoce a todos. Vende periódicos junto al banco.', fa: 'والت روزنامه‌فروش همه را می‌شناسد. او کنار بانک روزنامه می‌فروشد.' }
      ],
      wait: { en: 'Walt sells papers by the bank, downtown, to the north-east.', es: 'Walt vende periódicos junto al banco, en el centro, al noreste.', fa: 'والت کنار بانک، در مرکز شهر، طرف شمال شرق روزنامه می‌فروشد.' },
      thanks: { en: 'Potatoes! We can feed the whole line tonight. Thank you!', es: '¡Papas! Esta noche podemos dar de comer a toda la fila. ¡Gracias!', fa: 'کچالو! امشب می‌توانیم به همهٔ قطار غذا بدهیم. تشکر!' }
    },
    contact: {
      x: 27, y: 4,
      name: { en: 'Walt', es: 'Walt', fa: 'والت' },
      role: { en: 'Newsboy', es: 'Voceador de periódicos', fa: 'روزنامه‌فروش' },
      look: { skin: 2, hair: '#a05a2a', shirt: '#6a6a5a', pants: '#3a3a3a', style: 'short', hat: '#5a5a4a' },
      lines: [
        { en: 'Extra! Another bank closed today. People lost their [[savings|savings]].', es: '¡Extra! Otro banco cerró hoy. La gente perdió sus [[savings|ahorros]].', fa: 'خبر تازه! امروز یک بانک دیگر بسته شد. مردم [[savings|پس‌انداز]] خود را از دست دادند.' },
        { en: 'Farmer Hendrik has potatoes, but no one has cash. He will [[barter|barter]].', es: 'El granjero Hendrik tiene papas, pero nadie tiene dinero. Él hará [[barter|trueque]].', fa: 'دهقان هندریک کچالو دارد، اما کسی پول نقد ندارد. او [[barter|معاوضه]] می‌کند.' },
        { en: 'Find Hendrik at the rail yard, west of here, by the closed mill.', es: 'Busca a Hendrik en el patio del tren, al oeste, junto a la acería cerrada.', fa: 'هندریک را در میدان قطار، طرف غرب، کنار فابریکهٔ بسته پیدا کن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 8, y: 9,
        name: { en: 'Hendrik', es: 'Hendrik', fa: 'هندریک' },
        role: { en: 'Farmer', es: 'Granjero', fa: 'دهقان' },
        look: { skin: 1, hair: '#d8c070', shirt: '#3a5a8a', pants: '#4a3a2a', style: 'short', hat: '#c8a860' },
        lines: [
          { en: 'Crop prices fell so low that selling my potatoes does not pay.', es: 'Los precios bajaron tanto que vender mis papas no deja ganancia.', fa: 'قیمت حاصلات آن‌قدر پایین آمد که فروش کچالوهایم فایده ندارد.' }
        ]
      },
      q: { en: 'No one has cash. I will trade my potatoes for something my family can really use.', es: 'Nadie tiene dinero. Cambio mis papas por algo que mi familia de verdad pueda usar.', fa: 'کسی پول نقد ندارد. کچالوهایم را با چیزی عوض می‌کنم که خانواده‌ام واقعاً به کار ببرد.' },
      choices: [
        { ok: true, at: [2, 9], icon: '🪨', t: { en: 'A sack of coal', es: 'Un saco de carbón', fa: 'یک بوجی زغال سنگ' },
          why: { en: 'Yes! Coal heats a farmhouse in winter. In hard times, real goods mattered more than paper.', es: '¡Sí! El carbón calienta una casa en invierno. En tiempos duros, las cosas reales valían más que el papel.', fa: 'بله! زغال سنگ خانهٔ فارم را در زمستان گرم می‌کند. در روزهای سخت، جنس واقعی از کاغذ با ارزش‌تر بود.' } },
        { at: [18, 8], icon: '📜', t: { en: 'A stock certificate', es: 'Un certificado de acciones', fa: 'یک سند سهام' },
          why: { en: 'After the 1929 crash, many stocks were worth very little. Hendrik cannot heat a house with it.', es: 'Después de la caída de 1929, muchas acciones valían muy poco. Hendrik no puede calentar su casa con eso.', fa: 'بعد از سقوط ۱۹۲۹، بسیاری از سهام ارزش کمی داشتند. هندریک با آن خانه را گرم نمی‌کند.' } },
        { at: [27, 3], icon: '📒', t: { en: 'A bankbook from a closed bank', es: 'Una libreta de un banco cerrado', fa: 'کتابچهٔ یک بانک بسته' },
          why: { en: 'This bank failed, so the savings in this book are gone. Thousands of banks closed.', es: 'Este banco quebró, así que los ahorros de esta libreta se perdieron. Cerraron miles de bancos.', fa: 'این بانک ورشکست شد، پس پس‌انداز این کتابچه از بین رفت. هزاران بانک بسته شدند.' } }
      ],
      item: { icon: '🥔', name: { en: 'A sack of potatoes', es: 'Un saco de papas', fa: 'یک بوجی کچالو' } }
    }
  },

  scraps: [[1, 1], [14, 1], [27, 20]],
  smudges: [[10, 5], [24, 12]],

  challenge: {
    at: [20, 19],
    type: 'table',
    stat: 'hei',
    title: { en: 'Read the hard years', es: 'Lee los años difíciles', fa: 'سال‌های سخت را بخوان' },
    intro: { en: 'The Grump says the crash was only one bad day. Read this table about the United States. Then answer.',
      es: 'El Gruñón dice que la caída fue solo un mal día. Lee esta tabla sobre Estados Unidos. Luego responde.',
      fa: 'غرغرو می‌گوید سقوط فقط یک روز بد بود. این جدول دربارهٔ امریکا را بخوان. بعد جواب بده.' },
    table: {
      head: [
        { en: 'Year', es: 'Año', fa: 'سال' },
        { en: 'Workers with no job', es: 'Trabajadores sin empleo', fa: 'کارگران بیکار' },
        { en: 'Banks that closed that year', es: 'Bancos que cerraron ese año', fa: 'بانک‌هایی که آن سال بسته شدند' }
      ],
      rows: [
        ['1929', { en: 'about 3 in 100', es: 'unos 3 de cada 100', fa: 'حدود ۳ از ۱۰۰' }, { en: 'about 650', es: 'unos 650', fa: 'حدود ۶۵۰' }],
        ['1930', { en: 'about 9 in 100', es: 'unos 9 de cada 100', fa: 'حدود ۹ از ۱۰۰' }, { en: 'about 1,350', es: 'unos 1,350', fa: 'حدود ۱٬۳۵۰' }],
        ['1931', { en: 'about 16 in 100', es: 'unos 16 de cada 100', fa: 'حدود ۱۶ از ۱۰۰' }, { en: 'about 2,300', es: 'unos 2,300', fa: 'حدود ۲٬۳۰۰' }],
        ['1932', { en: 'about 24 in 100', es: 'unos 24 de cada 100', fa: 'حدود ۲۴ از ۱۰۰' }, { en: 'about 1,450', es: 'unos 1,450', fa: 'حدود ۱٬۴۵۰' }]
      ],
      note: { en: 'Numbers are rounded. They are for the United States only.', es: 'Los números están redondeados. Son solo de Estados Unidos.', fa: 'عددها گرد شده‌اند. فقط مربوط به امریکا هستند.' }
    },
    questions: [
      { q: { en: 'In which year did the most banks close?', es: '¿En qué año cerraron más bancos?', fa: 'در کدام سال بیشترین بانک‌ها بسته شدند؟' },
        choices: [{ en: '1931', es: '1931', fa: '۱۹۳۱' }, { en: '1929', es: '1929', fa: '۱۹۲۹' }, { en: '1930', es: '1930', fa: '۱۹۳۰' }, { en: '1932', es: '1932', fa: '۱۹۳۲' }], answer: 0,
        why: { en: 'About 2,300 banks closed in 1931. That is the biggest number in that column.', es: 'Unos 2,300 bancos cerraron en 1931. Es el número más grande de esa columna.', fa: 'در ۱۹۳۱ حدود ۲٬۳۰۰ بانک بسته شد. این بزرگ‌ترین عدد آن ستون است.' } },
      { q: { en: 'How did the number of workers with no job change from 1929 to 1932?', es: '¿Cómo cambió el número de trabajadores sin empleo de 1929 a 1932?', fa: 'تعداد کارگران بیکار از ۱۹۲۹ تا ۱۹۳۲ چطور تغییر کرد؟' },
        choices: [
          { en: 'It went up every year, to about 1 in 4', es: 'Subió cada año, hasta 1 de cada 4', fa: 'هر سال بالا رفت، تا حدود ۱ از ۴' },
          { en: 'It went down every year, to almost 0', es: 'Bajó cada año, hasta casi 0', fa: 'هر سال پایین آمد، تا تقریباً صفر' },
          { en: 'It stayed the same, about 3 in 100', es: 'Siguió igual, unos 3 de cada 100', fa: 'یکسان ماند، حدود ۳ از ۱۰۰' },
          { en: 'It went up once, then fell in 1931', es: 'Subió una vez y luego bajó en 1931', fa: 'یک بار بالا رفت، بعد در ۱۹۳۱ پایین آمد' }], answer: 0,
        why: { en: '3, then 9, then 16, then 24 in 100. About 24 in 100 is nearly 1 in 4 workers.', es: '3, luego 9, luego 16, luego 24 de cada 100. 24 de cada 100 es casi 1 de cada 4.', fa: '۳، بعد ۹، بعد ۱۶، بعد ۲۴ از ۱۰۰. حدود ۲۴ از ۱۰۰ تقریباً ۱ از ۴ کارگر است.' } },
      { q: { en: 'The table shows a crash in 1929. Was it only one bad day?', es: 'La tabla muestra una caída en 1929. ¿Fue solo un mal día?', fa: 'جدول سقوط ۱۹۲۹ را نشان می‌دهد. آیا فقط یک روز بد بود؟' },
        choices: [
          { en: 'No, hard times grew worse for years', es: 'No, los tiempos duros empeoraron por años', fa: 'نه، روزهای سخت سال‌ها بدتر شد' },
          { en: 'Yes, everything was fine by 1930', es: 'Sí, todo estaba bien en 1930', fa: 'بله، تا ۱۹۳۰ همه چیز خوب شد' },
          { en: 'Yes, banks stopped closing after 1929', es: 'Sí, los bancos dejaron de cerrar en 1929', fa: 'بله، بعد از ۱۹۲۹ بانک‌ها دیگر بسته نشدند' },
          { en: 'The table cannot tell us anything', es: 'La tabla no nos dice nada', fa: 'جدول هیچ چیز به ما نمی‌گوید' }], answer: 0,
        why: { en: 'Jobs kept disappearing and banks kept closing every year after the crash. The Grump was wrong.', es: 'Cada año después de la caída se perdían trabajos y cerraban bancos. El Gruñón se equivocó.', fa: 'هر سال بعد از سقوط کارها از بین رفت و بانک‌ها بسته شدند. غرغرو اشتباه کرد.' } },
      { q: { en: 'The table shows only the US. Did the Depression stay in the US?', es: 'La tabla muestra solo EE. UU. ¿La Depresión se quedó en EE. UU.?', fa: 'جدول فقط امریکا را نشان می‌دهد. آیا رکود فقط در امریکا ماند؟' },
        choices: [
          { en: 'No, Germany and many lands were hit too', es: 'No, también golpeó a Alemania y otros países', fa: 'نه، آلمان و کشورهای زیاد هم زیان دیدند' },
          { en: 'Yes, other countries grew richer than ever', es: 'Sí, otros países se hicieron más ricos', fa: 'بله، کشورهای دیگر ثروتمندتر از همیشه شدند' },
          { en: 'Yes, the rest of the world did not trade', es: 'Sí, el resto del mundo no comerciaba', fa: 'بله، باقی جهان تجارت نمی‌کرد' },
          { en: 'No, but it only reached Canada', es: 'No, pero solo llegó a Canadá', fa: 'نه، اما فقط به کانادا رسید' }], answer: 0,
        why: { en: 'Loans and trade linked the world. Gertrude said 6 million Germans had no work.', es: 'Los préstamos y el comercio unían al mundo. Gertrude dijo que 6 millones de alemanes no tenían trabajo.', fa: 'قرض و تجارت جهان را به هم وصل می‌کرد. گرترود گفت ۶ میلیون آلمانی کار نداشتند.' } }
    ],
    success: { en: 'The numbers are clear again. The hard times lasted for years, not one day.', es: 'Los números están claros otra vez. Los tiempos duros duraron años, no un día.', fa: 'عددها دوباره روشن شدند. روزهای سخت سال‌ها طول کشید، نه یک روز.' }
  },

  boss: {
    at: [26, 9],
    stat: 'loc',
    need: 3,
    name: { en: 'The Panic Grump', es: 'El Gruñón del Pánico', fa: 'غرغروی وحشت' },
    appear: { en: 'The Panic Grump is hiding downtown, near the closed bank!', es: '¡El Gruñón del Pánico se esconde en el centro, cerca del banco cerrado!', fa: 'غرغروی وحشت در مرکز شهر، نزدیک بانک بسته پنهان است!' },
    taunt: { en: 'Panic! Grab your money and trust no one!', es: '¡Pánico! ¡Agarra tu dinero y no confíes en nadie!', fa: 'وحشت! پولت را بگیر و به هیچ‌کس اعتماد نکن!' },
    win: { en: 'Calm comes back to the city. Chronicle page 6.3 floats down into your hands!', es: 'La calma vuelve a la ciudad. ¡La página 6.3 de la crónica cae en tus manos!', fa: 'آرامش به شهر برمی‌گردد. صفحهٔ ۶.۳ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What happened in October 1929?', es: '¿Qué pasó en octubre de 1929?', fa: 'در اکتوبر ۱۹۲۹ چه شد؟' },
        choices: [
          { en: 'The US stock market crashed', es: 'Se desplomó la bolsa de EE. UU.', fa: 'بازار سهام امریکا سقوط کرد' },
          { en: 'World War I came to an end', es: 'Terminó la Primera Guerra Mundial', fa: 'جنگ جهانی اول تمام شد' },
          { en: 'The New Deal gave out new jobs', es: 'El Nuevo Trato dio trabajos nuevos', fa: 'نیو دیل کارهای تازه داد' },
          { en: 'Chicago built its first steel mill', es: 'Chicago hizo su primera acería', fa: 'شیکاگو اولین فابریکهٔ فولاد را ساخت' }],
        answer: 0,
        why: { en: 'Stock prices fell fast in October 1929. Many people lost the money they had put in.', es: 'Los precios de las acciones cayeron rápido en octubre de 1929. Mucha gente perdió su dinero.', fa: 'قیمت سهام در اکتوبر ۱۹۲۹ زود پایین آمد. بسیاری پولی را که گذاشته بودند از دست دادند.' } },
      { q: { en: 'Why did so many banks close?', es: '¿Por qué cerraron tantos bancos?', fa: 'چرا این‌قدر زیاد بانک‌ها بسته شدند؟' },
        choices: [
          { en: 'Everyone wanted savings back at once', es: 'Todos querían sus ahorros a la vez', fa: 'همه یکجا پس‌اندازشان را خواستند' },
          { en: 'The banks had far too much cash in the vaults', es: 'Los bancos tenían demasiado dinero en sus bóvedas', fa: 'بانک‌ها در خزانه پول نقد خیلی زیاد داشتند' },
          { en: 'The banks moved away to Canada', es: 'Los bancos se mudaron a Canadá', fa: 'بانک‌ها به کانادا رفتند' },
          { en: 'People liked to keep cash in shoes', es: 'A la gente le gustaba guardar dinero en zapatos', fa: 'مردم دوست داشتند پول را در بوت نگه دارند' }],
        answer: 0,
        why: { en: 'Banks lend out most savings. When scared people all came at once, banks ran out and closed.', es: 'Los bancos prestan casi todos los ahorros. Cuando todos llegaron asustados a la vez, se quedaron sin dinero.', fa: 'بانک‌ها بیشتر پس‌اندازها را قرض می‌دهند. وقتی مردم ترسیده یکجا آمدند، پول تمام شد و بانک بسته شد.' } },
      { q: { en: 'About how many US workers had no job in 1932?', es: '¿Cuántos trabajadores de EE. UU. no tenían empleo en 1932?', fa: 'در ۱۹۳۲ تقریباً چند کارگر امریکایی بیکار بودند؟' },
        choices: [
          { en: 'About 1 in 4', es: 'Cerca de 1 de cada 4', fa: 'حدود ۱ از ۴' },
          { en: 'About 1 in 100', es: 'Cerca de 1 de cada 100', fa: 'حدود ۱ از ۱۰۰' },
          { en: 'Nearly all of them', es: 'Casi todos', fa: 'تقریباً همه' },
          { en: 'None of them', es: 'Ninguno', fa: 'هیچ‌کدام' }],
        answer: 0,
        why: { en: 'About 24 in 100 workers had no job. That is almost 1 in 4.', es: 'Unos 24 de cada 100 trabajadores no tenían empleo. Es casi 1 de cada 4.', fa: 'حدود ۲۴ از ۱۰۰ کارگر بیکار بودند. این تقریباً ۱ از ۴ است.' } },
      { q: { en: 'What was a Hooverville?', es: '¿Qué era un Hooverville?', fa: 'هوورویل چه بود؟' },
        choices: [
          { en: 'A camp of shacks for people with no home', es: 'Un campo de chozas para gente sin casa', fa: 'اردوگاه کلبه‌ها برای مردم بی‌خانه' },
          { en: 'A fancy new hotel for rich bankers', es: 'Un hotel nuevo y lujoso para banqueros', fa: 'یک هوتل نو و مجلل برای بانکداران' },
          { en: 'A big farm owned by the president', es: 'Una gran finca del presidente', fa: 'یک فارم بزرگ مال رئیس‌جمهور' },
          { en: 'A factory that made cars, trucks and tractors', es: 'Una fábrica de autos, camiones y tractores', fa: 'فابریکه‌ای که موتر، لاری و تراکتور می‌ساخت' }],
        answer: 0,
        why: { en: 'People who lost their homes built shacks. They named the camps after President Hoover, in anger.', es: 'La gente que perdió su casa hizo chozas. Llamaron a los campos como el presidente Hoover, con enojo.', fa: 'مردمی که خانه‌شان را از دست دادند کلبه ساختند. با خشم، اردوگاه‌ها را به نام رئیس‌جمهور هوور نامیدند.' } },
      { q: { en: 'Why did many farmers suffer in the 1930s?', es: '¿Por qué sufrieron muchos agricultores en los años 30?', fa: 'چرا بسیاری از دهقانان در دههٔ ۱۹۳۰ رنج کشیدند؟' },
        choices: [
          { en: 'Low crop prices, and drought on the Plains', es: 'Precios bajos y sequía en las llanuras', fa: 'قیمت کم حاصلات و خشکسالی در دشت‌ها' },
          { en: 'Crop prices were far too high to sell', es: 'Los precios eran muy altos para vender', fa: 'قیمت حاصلات برای فروش خیلی بالا بود' },
          { en: 'There was too much rain every year', es: 'Llovía demasiado cada año', fa: 'هر سال باران خیلی زیاد می‌بارید' },
          { en: 'Cities stopped eating bread and meat', es: 'Las ciudades dejaron de comer pan y carne', fa: 'شهرها دیگر نان و گوشت نخوردند' }],
        answer: 0,
        why: { en: 'Prices fell so low that farming did not pay. Then drought and dust storms hit the Great Plains.', es: 'Los precios bajaron tanto que sembrar no dejaba ganancia. Luego la sequía y el polvo azotaron las Grandes Llanuras.', fa: 'قیمت‌ها آن‌قدر پایین آمد که کشت فایده نداشت. بعد خشکسالی و توفان خاک به دشت‌های بزرگ رسید.' } },
      { q: { en: 'How did the Depression spread to other countries?', es: '¿Cómo llegó la Depresión a otros países?', fa: 'رکود چطور به کشورهای دیگر رسید؟' },
        choices: [
          { en: 'Through loans and world trade', es: 'Por los préstamos y el comercio mundial', fa: 'از راه قرض و تجارت جهانی' },
          { en: 'Through a war with Mexico', es: 'Por una guerra con México', fa: 'از راه جنگ با مکسیکو' },
          { en: 'Through a sickness carried on ships', es: 'Por una enfermedad que llevaban los barcos', fa: 'از راه مریضی‌ای که کشتی‌ها می‌بردند' },
          { en: 'It did not spread at all', es: 'No se extendió para nada', fa: 'اصلاً پخش نشد' }],
        answer: 0,
        why: { en: 'US banks called back loans, and countries bought less from each other. World trade shrank.', es: 'Los bancos de EE. UU. pidieron sus préstamos, y los países se compraban menos. El comercio mundial se achicó.', fa: 'بانک‌های امریکا قرض‌ها را پس خواستند و کشورها از هم کمتر خریدند. تجارت جهانی کوچک شد.' } },
      { q: { en: 'From 1933, what did President Roosevelt\'s New Deal do?', es: 'Desde 1933, ¿qué hizo el Nuevo Trato del presidente Roosevelt?', fa: 'از ۱۹۳۳، نیو دیل رئیس‌جمهور روزولت چه کرد؟' },
        choices: [
          { en: 'It made jobs and helped people', es: 'Creó trabajos y ayudó a la gente', fa: 'کار ساخت و به مردم کمک کرد' },
          { en: 'It closed all of the banks forever', es: 'Cerró todos los bancos para siempre', fa: 'همهٔ بانک‌ها را برای همیشه بست' },
          { en: 'It ended all trade with Europe', es: 'Terminó todo el comercio con Europa', fa: 'تمام تجارت با اروپا را بس کرد' },
          { en: 'It sent all the workers to farms', es: 'Mandó a todos los obreros al campo', fa: 'همهٔ کارگران را به فارم فرستاد' }],
        answer: 0,
        why: { en: 'The [[new deal|New Deal]] paid people to build roads, parks and dams. It also made banks safer.', es: 'El [[new deal|Nuevo Trato]] pagó a la gente por hacer caminos, parques y represas. También hizo más seguros los bancos.', fa: '[[new deal|نیو دیل]] به مردم پول داد تا سرک، پارک و بند بسازند. بانک‌ها را هم امن‌تر ساخت.' } },
      { q: { en: 'How did the Depression help dictators rise?', es: '¿Cómo ayudó la Depresión a que subieran dictadores?', fa: 'رکود چطور به بالا آمدن دیکتاتورها کمک کرد؟' },
        choices: [
          { en: 'Hungry, scared people wanted a strong leader', es: 'La gente con hambre y miedo quería un líder fuerte', fa: 'مردم گرسنه و ترسیده رهبر قوی می‌خواستند' },
          { en: 'Every country had more jobs than workers', es: 'Todos los países tenían más trabajos que obreros', fa: 'هر کشور از کارگر بیشتر کار داشت' },
          { en: 'Dictators gave away all of their money', es: 'Los dictadores regalaron todo su dinero', fa: 'دیکتاتورها همهٔ پول خود را بخشیدند' },
          { en: 'People voted to end all of the schools', es: 'La gente votó por cerrar todas las escuelas', fa: 'مردم رأی دادند همهٔ مکتب‌ها بسته شوند' }],
        answer: 0,
        why: { en: 'In Germany, millions had no work. Hitler promised jobs and blamed others, and many followed him.', es: 'En Alemania, millones no tenían trabajo. Hitler prometió empleo y culpó a otros, y muchos lo siguieron.', fa: 'در آلمان، میلیون‌ها نفر کار نداشتند. هیتلر وعدهٔ کار داد و دیگران را مقصر دانست، و بسیاری از او پیروی کردند.' } }
    ]
  },

  learned: [
    { en: 'The [[stock market|stock market]] crashed in 1929. Banks failed, and people lost their [[savings|savings]].', es: 'La [[stock market|bolsa]] se desplomó en 1929. Los bancos quebraron y la gente perdió sus [[savings|ahorros]].', fa: '[[stock market|بازار سهام]] در ۱۹۲۹ سقوط کرد. بانک‌ها ورشکست شدند و مردم [[savings|پس‌انداز]] خود را از دست دادند.' },
    { en: 'In the [[great depression|Great Depression]], about 1 in 4 US workers was [[unemployed|unemployed]]. It spread around the world.', es: 'En la [[great depression|Gran Depresión]], cerca de 1 de cada 4 trabajadores de EE. UU. estaba [[unemployed|desempleado]]. Se extendió por el mundo.', fa: 'در [[great depression|رکود بزرگ]]، از هر ۴ کارگر امریکایی حدود ۱ نفر [[unemployed|بیکار]] بود. در سراسر جهان پخش شد.' },
    { en: 'The [[new deal|New Deal]] made jobs in the US. In Germany, hard times helped Hitler rise.', es: 'El [[new deal|Nuevo Trato]] creó trabajos en EE. UU. En Alemania, los tiempos duros ayudaron a subir a Hitler.', fa: '[[new deal|نیو دیل]] در امریکا کار ساخت. در آلمان، روزهای سخت به بالا آمدن هیتلر کمک کرد.' }
  ],
  reflect: {
    q: { en: 'In hard times, how can neighbors help each other, like the soup kitchen did?', es: 'En tiempos difíciles, ¿cómo pueden ayudarse los vecinos, como lo hizo el comedor?', fa: 'در روزهای سخت، همسایه‌ها چطور می‌توانند به هم کمک کنند، مثل آشخانهٔ خیریه؟' },
    starter: { en: 'Neighbors can help each other by', es: 'Los vecinos pueden ayudarse', fa: 'همسایه‌ها می‌توانند به هم کمک کنند با' }
  }
};
