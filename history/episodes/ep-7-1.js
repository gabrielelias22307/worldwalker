/* TIMEWALKER · Episode 7.1 · The Rise of Dictators (WHII)
   Berlin, Germany, in May 1933, a few months after Hitler became chancellor.
   North (rows 1-9): homes, a long city street (row 4), the City Library and Opera Square (x 20-26),
   where Nazi students burned books on May 10, 1933. South-west: the big park with its pond.
   South-east: factories closed since the Great Depression, a bakery and a print shop.
   Hard topic (dictatorship, hate): plain, true words; the Grump is "The Forgetting". */
window.EPISODE = {
  id: '7.1',
  realm: 7,
  sol: 'WHII',
  title: { en: 'The Rise of Dictators', es: 'El ascenso de los dictadores', fa: 'به قدرت رسیدن دیکتاتورها' },
  place: { en: 'Berlin, 1933', es: 'Berlín, 1933', fa: 'برلین، ۱۹۳۳' },
  weather: { sky: 'drizzle', time: 'day' },
  intro: [
    { en: 'The Grump blurred the page about [[dictator|dictators]]. People forgot how freedom was lost.',
      es: 'El Gruñón borró la página sobre los [[dictator|dictadores]]. La gente olvidó cómo se perdió la libertad.',
      fa: 'غرغرو صفحهٔ [[dictator|دیکتاتورها]] را تار کرد. مردم فراموش کردند که آزادی چطور از دست رفت.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  scenes: {
    at: [13.4, 52.5],
    year: 1933,
    start: [
      { en: 'After World War I, Germany was poor, angry and in debt.',
        es: 'Después de la Primera Guerra Mundial, Alemania estaba pobre, enojada y endeudada.',
        fa: 'بعد از جنگ جهانی اول، آلمان فقیر، خشمگین و قرض‌دار بود.' },
      { en: 'The Great Depression left millions of people without jobs.',
        es: 'La Gran Depresión dejó a millones de personas sin trabajo.',
        fa: 'رکود بزرگ میلیون‌ها نفر را بی‌کار ساخت.' },
      { en: 'In January 1933, Adolf Hitler became the head of Germany\'s government.',
        es: 'En enero de 1933, Adolf Hitler se convirtió en jefe del gobierno de Alemania.',
        fa: 'در جنوری ۱۹۳۳، آدولف هتلر رئیس حکومت آلمان شد.' }
    ],
    page: { en: 'In the 1930s, dictators also ruled Italy and the Soviet Union.',
      es: 'En los años 1930, también había dictadores en Italia y en la Unión Soviética.',
      fa: 'در دههٔ ۱۹۳۰، در ایتالیا و اتحاد شوروی هم دیکتاتورها حکومت می‌کردند.' },
    guess: {
      q: { en: 'Hard times came to Germany. Could that help a dictator win support?', es: 'Llegaron tiempos difíciles a Alemania. ¿Eso podía ayudar a un dictador a ganar apoyo?', fa: 'روزهای سخت به آلمان آمد. آیا این می‌توانست به یک دیکتاتور کمک کند که طرفدار پیدا کند؟' },
      choices: [
        { t: { en: 'Yes, it could', es: 'Sí, podía', fa: 'بله، می‌توانست' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'Scared, hungry people may trust a leader who promises jobs. Some lose their freedom that way.', es: 'La gente asustada y con hambre puede confiar en un líder que promete trabajo. Así se puede perder la libertad.', fa: 'مردم ترسیده و گرسنه شاید به رهبری اعتماد کنند که وعدهٔ کار می‌دهد. گاهی آزادی این‌طور از دست می‌رود.' }
    },
    next: {
      q: { en: 'Next: World War II. Who built ships and planes at home?', es: 'Ahora: la Segunda Guerra Mundial. ¿Quién construyó barcos y aviones en casa?', fa: 'بعدی: جنگ جهانی دوم. چه کسی در وطن کشتی و طیاره ساخت؟' },
      choices: [
        { t: { en: 'Many women', es: 'Muchas mujeres', fa: 'بسیاری از زنان' }, ok: true },
        { t: { en: 'No one at all', es: 'Nadie', fa: 'هیچ کس' } }
      ],
      why: { en: 'Millions of women took factory jobs. At home, everyone helped the war effort.', es: 'Millones de mujeres trabajaron en fábricas. En casa, todos ayudaron en la guerra.', fa: 'میلیون‌ها زن در فابریکه‌ها کار گرفتند. در وطن، همه در کارهای جنگ کمک کردند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door */
  houses: [
    { at: [3, 2], style: 3, name: { en: 'Ernst', es: 'Ernst', fa: 'ارنست' },
      look: { skin: 1, hair: '#b8b0a0', shirt: '#4a5a4a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I fought in World War I. Germany lost the war in 1918.', es: 'Luché en la Primera Guerra Mundial. Alemania perdió la guerra en 1918.', fa: 'من در جنگ جهانی اول جنگیدم. آلمان در سال ۱۹۱۸ جنگ را باخت.' },
        { en: 'In 1919, the [[treaty of versailles|Treaty of Versailles]] made Germany pay huge sums.', es: 'En 1919, el [[treaty of versailles|Tratado de Versalles]] obligó a Alemania a pagar sumas enormes.', fa: 'در سال ۱۹۱۹، [[treaty of versailles|پیمان ورسای]] آلمان را مجبور کرد پول بسیار زیاد بپردازد.' },
        { en: 'Many Germans felt angry and ashamed. Hitler used that anger.', es: 'Muchos alemanes se sentían enojados y avergonzados. Hitler usó ese enojo.', fa: 'بسیاری از آلمانی‌ها خشمگین و شرمنده بودند. هتلر از این خشم استفاده کرد.' }
      ] },
    { at: [9, 2], style: 3, name: { en: 'Aiko', es: 'Aiko', fa: 'آیکو' },
      look: { skin: 2, hair: '#141010', shirt: '#7a3a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I came from Tokyo, Japan, to study music in Berlin.', es: 'Vine de Tokio, Japón, para estudiar música en Berlín.', fa: 'من از توکیو، جاپان، برای خواندن موسیقی به برلین آمدم.' },
        { en: 'At home, army leaders are taking more and more power.', es: 'En mi país, los jefes del ejército tienen cada vez más poder.', fa: 'در وطنم، رهبران اردو روز به روز قدرت بیشتر می‌گیرند.' },
        { en: 'In 1931, Japan\'s army invaded Manchuria, a part of China.', es: 'En 1931, el ejército de Japón invadió Manchuria, una parte de China.', fa: 'در سال ۱۹۳۱، اردوی جاپان به منچوری، بخشی از چین، حمله کرد.' }
      ] },
    { at: [3, 7], style: 3, name: { en: 'Frau Schulz', es: 'Señora Schulz', fa: 'خانم شولتس' },
      look: { skin: 0, hair: '#7a5a3a', shirt: '#3a5a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I teach at the school down the street.', es: 'Soy maestra en la escuela de esta calle.', fa: 'من در مکتب همین سرک درس می‌دهم.' },
        { en: 'In April, a new law fired Jewish teachers. My friend lost her job.', es: 'En abril, una ley nueva despidió a los maestros judíos. Mi amiga perdió su trabajo.', fa: 'در ماه اپریل، یک قانون نو معلمان یهودی را از کار برکنار کرد. دوستم کارش را از دست داد.' },
        { en: 'Now children must learn to praise Hitler in class.', es: 'Ahora los niños deben aprender a alabar a Hitler en clase.', fa: 'حالا شاگردان باید در صنف ستایش هتلر را یاد بگیرند.' }
      ] },
    { at: [22, 17], style: 3, name: { en: 'Mr. Levi', es: 'Señor Levi', fa: 'آقای لِوی' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#f0ece0', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Welcome to my bakery. My family has baked bread here for 40 years.', es: 'Bienvenido a mi panadería. Mi familia hace pan aquí desde hace 40 años.', fa: 'به نانوایی من خوش آمدی. خانواده‌ام ۴۰ سال است اینجا نان می‌پزد.' },
        { en: 'On April 1, Nazi guards stood outside Jewish shops, like mine.', es: 'El 1 de abril, guardias nazis se pararon frente a las tiendas judías, como la mía.', fa: 'در اول اپریل، نگهبانان نازی جلوی دکان‌های یهودیان، مثل دکان من، ایستادند.' },
        { en: 'They told people not to buy from Jews. Some neighbors came anyway.', es: 'Le decían a la gente que no comprara a los judíos. Algunos vecinos vinieron igual.', fa: 'به مردم گفتند از یهودیان خرید نکنند. بعضی همسایه‌ها باز هم آمدند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: homes (R/Q over h). North-east: the City Library (J) and Opera Square (l, x 20-26).
     Row 4: the main street. Column 15/16: the street south to the park and the factories.
     South-west: the big park (T) with a pond (~). South-east: closed factories (X), a bakery and a print shop (J). */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
    'U.RRR...QQQ....l...JJJJJJJJJJJ.U',
    'U.hdh...hdh....l...JJJJJJJJJJJ.U',
    'U....x.........l...x...........U',
    'UllllllllllllllllllllllllllllllU',
    'U..............l....lllllll....U',
    'U.RRR..........l....lxlxlll....U',
    'U.hdh..........l....lllllll....U',
    'U..............l....lllllll....U',
    'U..T.......T...l...............U',
    'U..............l...............U',
    'T.....T.....T..l..XXXX...XXXX..U',
    'T..T......T....l..XXXX...XXXX..U',
    'T.....~~~~.....l..XXXX...XXXX..U',
    'T..T..~~~~..T..l...............U',
    'T...............lllllllllllllllU',
    'T..T....T....T..l....RRR..JJJ..U',
    'T......TTT......l....hdh..JJJ..U',
    'T..,.....,..T...l..............U',
    'T....T......,...l...x..........U',
    'T..,.....T......l..............U',
    'TTTTTTTTTTTTTTTTUUUUUUUUUUUUUUUU'
  ],
  start: [12, 5],

  finds: [
    { clueAt: [17, 5], at: [17, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, along the edge of the square.', es: 'Desde esta nota, camina 3 pasos al sur, por el borde de la plaza.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، کنار میدان.' },
      text: { en: 'In 1923, German money lost its value. People needed piles of bills for bread.', es: 'En 1923, el dinero alemán perdió su valor. Hacían falta montones de billetes para comprar pan.', fa: 'در سال ۱۹۲۳، پول آلمان ارزشش را از دست داد. برای یک نان، یک دسته پول لازم بود.' } },
    { clueAt: [12, 12], at: [11, 16], decor: 'flower',
      clue: { en: 'From this note, walk 1 step west, then 4 steps south, through the park.', es: 'Desde esta nota, camina 1 paso al oeste y luego 4 pasos al sur, por el parque.', fa: 'از این یادداشت، ۱ قدم به غرب، بعد ۴ قدم به جنوب از میان پارک برو.' },
      text: { en: 'Berlin\'s big park has many linden trees. Here is a pressed linden flower.', es: 'El gran parque de Berlín tiene muchos tilos. Aquí hay una flor de tilo seca.', fa: 'پارک بزرگ برلین درختان زیزفون زیادی دارد. اینجا یک گل خشک زیزفون است.' } }
  ],

  words: {
    dictator: { en: 'a ruler with total power; people cannot vote him out or speak against him', es: 'un gobernante con todo el poder; la gente no puede quitarlo con votos ni criticarlo', fa: 'حاکمی با قدرت کامل؛ مردم نمی‌توانند با رأی او را برکنار کنند یا علیه او حرف بزنند' },
    democracy: { en: 'a government where people choose their leaders in free votes', es: 'un gobierno en el que la gente elige a sus líderes con votos libres', fa: 'حکومتی که مردم رهبران خود را با رأی آزاد انتخاب می‌کنند' },
    propaganda: { en: 'messages that show only one side, to control what people think', es: 'mensajes que muestran un solo lado, para controlar lo que la gente piensa', fa: 'پیام‌هایی که فقط یک طرف را نشان می‌دهند تا فکر مردم را کنترول کنند' },
    fascism: { en: 'rule by one strong leader and one party, with no free speech', es: 'gobierno de un líder fuerte y un solo partido, sin libertad de expresión', fa: 'حکومت یک رهبر قوی و یک حزب، بدون آزادی بیان' },
    'great depression': { en: 'a time in the 1930s when businesses failed and millions lost their jobs', es: 'una época de los años 1930 en que los negocios quebraron y millones perdieron su trabajo', fa: 'زمانی در دههٔ ۱۹۳۰ که کاروبارها ورشکست شدند و میلیون‌ها نفر بی‌کار شدند' },
    'treaty of versailles': { en: 'the 1919 peace treaty that ended World War I with Germany', es: 'el tratado de paz de 1919 que terminó la Primera Guerra Mundial con Alemania', fa: 'پیمان صلح سال ۱۹۱۹ که جنگ جهانی اول را با آلمان پایان داد' },
    'free press': { en: 'newspapers that may print the truth, even when leaders do not like it', es: 'periódicos que pueden publicar la verdad, aunque a los líderes no les guste', fa: 'روزنامه‌هایی که می‌توانند حقیقت را چاپ کنند، حتی اگر رهبران خوش نداشته باشند' }
  },

  npcs: [
    {
      x: 23, y: 14,
      name: { en: 'Karl', es: 'Karl', fa: 'کارل' },
      role: { en: 'Factory worker', es: 'Obrero de fábrica', fa: 'کارگر فابریکه' },
      look: { skin: 1, hair: '#5a3a20', shirt: '#6a6a5a', pants: '#2a2a3a', hat: '#3a3a3a' },
      lines: [
        { en: 'The [[great depression|Great Depression]] began in 1929. I lost my factory job in 1931.', es: 'La [[great depression|Gran Depresión]] empezó en 1929. Perdí mi trabajo en la fábrica en 1931.', fa: '[[great depression|رکود بزرگ]] در سال ۱۹۲۹ شروع شد. من در سال ۱۹۳۱ کارم را در فابریکه از دست دادم.' },
        { en: 'By 1932, about six million Germans had no work.', es: 'En 1932, unos seis millones de alemanes no tenían trabajo.', fa: 'تا سال ۱۹۳۲، حدود شش میلیون آلمانی بی‌کار بودند.' },
        { en: 'Hitler promised jobs and pride. Many hungry people believed him.', es: 'Hitler prometió trabajo y orgullo. Mucha gente con hambre le creyó.', fa: 'هتلر وعدهٔ کار و غرور داد. بسیاری از مردم گرسنه حرفش را باور کردند.' },
        { en: 'He also blamed Jewish people for our problems. That was a cruel lie.', es: 'También culpó a los judíos de nuestros problemas. Era una mentira cruel.', fa: 'او یهودیان را هم مقصر مشکلات ما دانست. این یک دروغ ظالمانه بود.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did many Germans listen to Hitler in the early 1930s?', es: '¿Por qué muchos alemanes escucharon a Hitler a comienzos de los años 1930?', fa: 'چرا در اوایل دههٔ ۱۹۳۰ بسیاری از آلمانی‌ها به هتلر گوش دادند؟' },
        choices: [
          { ok: true, t: { en: 'They had no jobs and wanted hope', es: 'No tenían trabajo y querían esperanza', fa: 'بی‌کار بودند و امید می‌خواستند' },
            why: { en: 'Yes. Hard times made people scared. Hitler promised jobs and pride.', es: 'Sí. Los tiempos difíciles asustaron a la gente. Hitler prometió trabajo y orgullo.', fa: 'بله. روزهای سخت مردم را ترساند. هتلر وعدهٔ کار و غرور داد.' } },
          { t: { en: 'Germany had just won World War I', es: 'Alemania acababa de ganar la guerra', fa: 'آلمان تازه جنگ جهانی اول را برده بود' },
            why: { en: 'No. Germany lost World War I. Many Germans felt angry about it.', es: 'No. Alemania perdió la Primera Guerra Mundial. Muchos alemanes estaban enojados por eso.', fa: 'نه. آلمان جنگ جهانی اول را باخت. بسیاری از آلمانی‌ها از این خشمگین بودند.' } },
          { t: { en: 'Most Germans were rich and happy', es: 'Casi todos los alemanes eran ricos y felices', fa: 'بیشتر آلمانی‌ها ثروتمند و خوشحال بودند' },
            why: { en: 'No. The Great Depression made millions of Germans poor.', es: 'No. La Gran Depresión dejó pobres a millones de alemanes.', fa: 'نه. رکود بزرگ میلیون‌ها آلمانی را فقیر ساخت.' } }
        ]
      }
    },
    {
      x: 28, y: 8,
      name: { en: 'Greta', es: 'Greta', fa: 'گرتا' },
      role: { en: 'Newspaper printer', es: 'Impresora de periódicos', fa: 'چاپ‌کار روزنامه' },
      look: { skin: 0, hair: '#c89a4a', shirt: '#2a3a5a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I print a newspaper. This spring, the Nazis closed many newspapers.', es: 'Imprimo un periódico. Esta primavera, los nazis cerraron muchos periódicos.', fa: 'من روزنامه چاپ می‌کنم. این بهار، نازی‌ها بسیاری از روزنامه‌ها را بستند.' },
        { en: 'Now papers may print only what the Nazis like. This is [[propaganda|propaganda]].', es: 'Ahora solo se puede imprimir lo que les gusta a los nazis. Esto es [[propaganda|propaganda]].', fa: 'حالا روزنامه‌ها فقط چیزی را چاپ می‌کنند که نازی‌ها می‌پسندند. این [[propaganda|تبلیغات یک‌طرفه]] است.' },
        { en: 'A [[dictator|dictator]] controls the news, the schools, the police and the courts.', es: 'Un [[dictator|dictador]] controla las noticias, las escuelas, la policía y los jueces.', fa: 'یک [[dictator|دیکتاتور]] خبرها، مکتب‌ها، پولیس و محکمه‌ها را در دست دارد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why do dictators control newspapers and radio?', es: '¿Por qué los dictadores controlan los periódicos y la radio?', fa: 'چرا دیکتاتورها روزنامه‌ها و رادیو را کنترول می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'So people hear only their side', es: 'Para que la gente oiga solo su lado', fa: 'تا مردم فقط حرف آن‌ها را بشنوند' },
            why: { en: 'Yes. Propaganda hides the truth, so people cannot question the leader.', es: 'Sí. La propaganda esconde la verdad, y así la gente no puede cuestionar al líder.', fa: 'بله. تبلیغات یک‌طرفه حقیقت را پنهان می‌کند تا مردم از رهبر سؤال نکنند.' } },
          { t: { en: 'So every side can be heard', es: 'Para que se oigan todos los lados', fa: 'تا حرف همهٔ طرف‌ها شنیده شود' },
            why: { en: 'No. Dictators close papers that disagree. Only their side is heard.', es: 'No. Los dictadores cierran los periódicos que no están de acuerdo. Solo se oye su lado.', fa: 'نه. دیکتاتورها روزنامه‌های مخالف را می‌بندند. فقط حرف خودشان شنیده می‌شود.' } },
          { t: { en: 'So people can vote more often', es: 'Para que la gente vote más seguido', fa: 'تا مردم بیشتر رأی بدهند' },
            why: { en: 'No. Dictators end free elections. They do not let people choose.', es: 'No. Los dictadores terminan con las elecciones libres. No dejan que la gente elija.', fa: 'نه. دیکتاتورها انتخابات آزاد را از بین می‌برند. نمی‌گذارند مردم انتخاب کنند.' } }
        ]
      }
    },
    {
      x: 10, y: 8,
      name: { en: 'Lorenzo', es: 'Lorenzo', fa: 'لورنزو' },
      role: { en: 'Café waiter from Italy', es: 'Mesero italiano de café', fa: 'گارسون کافه از ایتالیا' },
      look: { skin: 2, hair: '#1a1208', shirt: '#f2f2f2', pants: '#1a1a1a', style: 'short' },
      lines: [
        { en: 'Buongiorno! I came here from Italy. I serve coffee at this café.', es: '¡Buongiorno! Vine de Italia. Sirvo café en este café.', fa: 'بونجورنو! من از ایتالیا آمده‌ام. در این کافه قهوه می‌دهم.' },
        { en: 'In 1922, Benito Mussolini took power in Italy. He started [[fascism|fascism]].', es: 'En 1922, Benito Mussolini tomó el poder en Italia. Él inició el [[fascism|fascismo]].', fa: 'در سال ۱۹۲۲، بنیتو موسولینی در ایتالیا قدرت را گرفت. او [[fascism|فاشیزم]] را شروع کرد.' },
        { en: 'In the Soviet Union, Joseph Stalin rules by fear. Millions are sent to prison camps.', es: 'En la Unión Soviética, José Stalin gobierna con miedo. Envía a millones a campos de prisión.', fa: 'در اتحاد شوروی، جوزف ستالین با ترس حکومت می‌کند. میلیون‌ها نفر به اردوگاه‌های زندان فرستاده می‌شوند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What did Mussolini, Stalin and Hitler have in common?', es: '¿Qué tenían en común Mussolini, Stalin y Hitler?', fa: 'موسولینی، ستالین و هتلر چه چیز مشترک داشتند؟' },
        choices: [
          { ok: true, t: { en: 'Each one ruled with total power', es: 'Cada uno gobernó con todo el poder', fa: 'هر کدام با قدرت کامل حکومت کردند' },
            why: { en: 'Yes. All three were dictators. They allowed no other parties and used fear.', es: 'Sí. Los tres fueron dictadores. No permitían otros partidos y usaban el miedo.', fa: 'بله. هر سه دیکتاتور بودند. حزب دیگری را اجازه نمی‌دادند و از ترس کار می‌گرفتند.' } },
          { t: { en: 'Each one won fair, free elections', es: 'Cada uno ganó elecciones justas y libres', fa: 'هر کدام در انتخابات آزاد و عادلانه بردند' },
            why: { en: 'No. They jailed their rivals and ended free elections.', es: 'No. Encarcelaron a sus rivales y terminaron con las elecciones libres.', fa: 'نه. آن‌ها رقیبان خود را زندانی کردند و انتخابات آزاد را از بین بردند.' } },
          { t: { en: 'Each one ruled the same country', es: 'Cada uno gobernó el mismo país', fa: 'هر کدام بر یک کشور حکومت کردند' },
            why: { en: 'No. Mussolini ruled Italy, Stalin the Soviet Union, and Hitler Germany.', es: 'No. Mussolini gobernó Italia; Stalin, la Unión Soviética; y Hitler, Alemania.', fa: 'نه. موسولینی بر ایتالیا، ستالین بر اتحاد شوروی و هتلر بر آلمان حکومت کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 5, y: 3, text: { en: 'BERLIN · 1933 · Germany\'s capital. In January, Hitler became chancellor, the head of government.', es: 'BERLÍN · 1933 · La capital de Alemania. En enero, Hitler llegó a canciller, el jefe del gobierno.', fa: 'برلین · ۱۹۳۳ · پایتخت آلمان. در جنوری، هتلر صدراعظم، یعنی رئیس حکومت، شد.' } },
    { x: 19, y: 3, text: { en: 'CITY LIBRARY · Books, newspapers and maps for everyone in Berlin.', es: 'BIBLIOTECA DE LA CIUDAD · Libros, periódicos y mapas para todos en Berlín.', fa: 'کتابخانهٔ شهر · کتاب، روزنامه و نقشه برای همهٔ مردم برلین.' } },
    { x: 23, y: 6, text: { en: 'OPERA SQUARE · On May 10, 1933, Nazi students burned thousands of books here.', es: 'PLAZA DE LA ÓPERA · El 10 de mayo de 1933, estudiantes nazis quemaron miles de libros aquí.', fa: 'میدان اوپرا · در ۱۰ می ۱۹۳۳، محصلان نازی هزاران کتاب را اینجا سوختاندند.' } },
    { x: 21, y: 6, text: { en: 'The poet Heinrich Heine wrote in 1821: "Where they burn books, they will in the end burn people."', es: 'El poeta Heinrich Heine escribió en 1821: «Donde se queman libros, al final se quema a personas».', fa: 'شاعر، هاینریش هاینه، در ۱۸۲۱ نوشت: «جایی که کتاب می‌سوزانند، در آخر انسان هم می‌سوزانند.»' } },
    { x: 20, y: 19, text: { en: 'FACTORIES · Closed since the Depression. Workers wait here, hoping for any job.', es: 'FÁBRICAS · Cerradas desde la Depresión. Los obreros esperan aquí cualquier trabajo.', fa: 'فابریکه‌ها · از زمان رکود بسته‌اند. کارگران اینجا به امید هر کاری منتظرند.' } }
  ],

  /* the quest: Frau Weber the librarian (north-east) -> Paul the student by the factories (south-east)
     -> find the hidden book of poems in the park (south-west) -> back to Frau Weber */
  quest: {
    stat: 'mov',
    title: { en: 'Save a Banned Book', es: 'Salva un libro prohibido', fa: 'یک کتاب ممنوع را نجات بده' },
    giver: {
      x: 21, y: 3,
      name: { en: 'Frau Weber', es: 'Señora Weber', fa: 'خانم وِبر' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 0, hair: '#9a9a9a', shirt: '#5a3a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'The Nazis want to burn books they do not like.', es: 'Los nazis quieren quemar los libros que no les gustan.', fa: 'نازی‌ها می‌خواهند کتاب‌هایی را که خوش ندارند بسوزانند.' },
        { en: 'My student Paul saved one book and hid it. Please find Paul.', es: 'Mi estudiante Paul salvó un libro y lo escondió. Por favor, busca a Paul.', fa: 'شاگردم پاول یک کتاب را نجات داد و پنهان کرد. لطفاً پاول را پیدا کن.' }
      ],
      wait: { en: 'Paul waits near the closed factories, south of here.', es: 'Paul espera cerca de las fábricas cerradas, al sur de aquí.', fa: 'پاول نزدیک فابریکه‌های بسته، جنوب اینجا، منتظر است.' },
      thanks: { en: 'The poems are safe. Books keep ideas alive, even in dark times.', es: 'Los poemas están a salvo. Los libros mantienen vivas las ideas, aun en tiempos oscuros.', fa: 'شعرها در امان هستند. کتاب‌ها اندیشه‌ها را زنده نگه می‌دارند، حتی در روزهای تاریک.' }
    },
    contact: {
      x: 25, y: 19,
      name: { en: 'Paul', es: 'Paul', fa: 'پاول' },
      role: { en: 'Student', es: 'Estudiante', fa: 'محصل' },
      look: { skin: 1, hair: '#3a2416', shirt: '#8a6a3a', pants: '#2a3a5a', hat: '#2a2a2a' },
      lines: [
        { en: 'I saved a book of poems by Heinrich Heine. The Nazis banned his books.', es: 'Salvé un libro de poemas de Heinrich Heine. Los nazis prohibieron sus libros.', fa: 'من یک کتاب شعر هاینریش هاینه را نجات دادم. نازی‌ها کتاب‌هایش را ممنوع کردند.' },
        { en: 'In the west park, walk south from the pond. Look just south of three trees.', es: 'En el parque del oeste, ve al sur desde el estanque. Está justo al sur de tres árboles.', fa: 'در پارک غربی، از جهیل کوچک به جنوب برو. درست جنوب سه درخت است.' }
      ]
    },
    action: {
      type: 'find',
      at: [8, 18],
      hint: { en: 'West park: south of the pond, just south of three trees', es: 'Parque del oeste: al sur del estanque, justo al sur de tres árboles', fa: 'پارک غربی: جنوب جهیل کوچک، درست جنوب سه درخت' },
      found: { en: 'You found the book! Heine\'s poems are safe with you.', es: '¡Encontraste el libro! Los poemas de Heine están a salvo contigo.', fa: 'کتاب را پیدا کردی! شعرهای هاینه نزد تو در امان است.' },
      item: { icon: '📕', name: { en: 'Poems by Heinrich Heine', es: 'Poemas de Heinrich Heine', fa: 'شعرهای هاینریش هاینه' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 20]],
  smudges: [[4, 19], [29, 12]],

  challenge: {
    at: [23, 8],
    type: 'order',
    stat: 'pla',
    title: { en: 'The Road to War', es: 'El camino a la guerra', fa: 'راه به سوی جنگ' },
    intro: { en: 'The Grump mixed up the years. Put the events in order, from first to last.',
      es: 'El Gruñón revolvió los años. Pon los sucesos en orden, del primero al último.',
      fa: 'غرغرو سال‌ها را به هم زد. رویدادها را از اول تا آخر به ترتیب بگذار.' },
    items: [
      { icon: '📜', t: { en: 'Germany signs the Treaty of Versailles', es: 'Alemania firma el Tratado de Versalles', fa: 'آلمان پیمان ورسای را امضا می‌کند' } },
      { icon: '🏛️', t: { en: 'Mussolini takes power in Italy', es: 'Mussolini toma el poder en Italia', fa: 'موسولینی در ایتالیا قدرت را می‌گیرد' } },
      { icon: '📉', t: { en: 'The Great Depression begins', es: 'Empieza la Gran Depresión', fa: 'رکود بزرگ شروع می‌شود' } },
      { icon: '🗺️', t: { en: 'Japan\'s army invades Manchuria, in China', es: 'El ejército de Japón invade Manchuria, en China', fa: 'اردوی جاپان به منچوری در چین حمله می‌کند' } },
      { icon: '📰', t: { en: 'Hitler becomes head of Germany\'s government', es: 'Hitler llega a jefe del gobierno de Alemania', fa: 'هتلر رئیس حکومت آلمان می‌شود' } },
      { icon: '⚠️', t: { en: 'Germany invades Poland, and World War II begins', es: 'Alemania invade Polonia y empieza la Segunda Guerra Mundial', fa: 'آلمان به پولند حمله می‌کند و جنگ جهانی دوم شروع می‌شود' } }
    ],
    why: { en: 'Not quite. Ernst, Lorenzo, Karl, Aiko and the city sign told you the years.', es: 'Todavía no. Ernst, Lorenzo, Karl, Aiko y el letrero de la ciudad te dijeron los años.', fa: 'هنوز نه. ارنست، لورنزو، کارل، آیکو و تابلوی شهر سال‌ها را به تو گفتند.' },
    success: { en: 'The years are in order again. Hard times helped dictators rise, and war followed.', es: 'Los años están en orden otra vez. Los tiempos difíciles ayudaron a los dictadores, y luego vino la guerra.', fa: 'سال‌ها دوباره به ترتیب شدند. روزهای سخت به دیکتاتورها کمک کرد، و بعد جنگ آمد.' }
  },

  boss: {
    at: [7, 9],
    stat: 'loc',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'A cold grey fog rolls down the street. The Forgetting is here.', es: 'Una niebla gris y fría baja por la calle. El Olvido está aquí.', fa: 'مه خاکستری و سرد در سرک پایین می‌آید. فراموشی اینجاست.' },
    taunt: { en: 'Freedom is lost quietly. No one will remember how it happened.', es: 'La libertad se pierde en silencio. Nadie recordará cómo pasó.', fa: 'آزادی آرام آرام از دست می‌رود. هیچ کس به یاد نخواهد داشت که چطور شد.' },
    win: { en: 'The fog lifts from the street. Chronicle page 7.1 returns to your hands.', es: 'La niebla se va de la calle. La página 7.1 de la crónica vuelve a tus manos.', fa: 'مه از سرک کنار می‌رود. صفحهٔ ۷.۱ تاریخ‌نامه به دستت برمی‌گردد.' },
    questions: [
      { q: { en: 'What is a dictator?', es: '¿Qué es un dictador?', fa: 'دیکتاتور کیست؟' },
        choices: [
          { en: 'A ruler with total power who allows no opposition', es: 'Un gobernante con todo el poder que no permite oposición', fa: 'حاکمی با قدرت کامل که هیچ مخالفی را اجازه نمی‌دهد' },
          { en: 'A leader the people choose in free elections', es: 'Un líder que la gente elige en elecciones libres', fa: 'رهبری که مردم در انتخابات آزاد انتخاب می‌کنند' },
          { en: 'A judge who checks that new laws are fair', es: 'Un juez que revisa que las leyes nuevas sean justas', fa: 'قاضی‌ای که می‌بیند قانون‌های نو عادلانه باشند' },
          { en: 'A king who must share power with a parliament', es: 'Un rey que debe compartir el poder con un parlamento', fa: 'پادشاهی که باید قدرت را با پارلمان شریک کند' }],
        answer: 0,
        why: { en: 'A dictator has total power. People cannot vote them out or speak against them.', es: 'Un dictador tiene todo el poder. La gente no puede quitarlo con votos ni criticarlo.', fa: 'دیکتاتور قدرت کامل دارد. مردم نمی‌توانند با رأی او را برکنار کنند یا علیه او حرف بزنند.' } },
      { q: { en: 'Which problems helped dictators rise after World War I?', es: '¿Qué problemas ayudaron a los dictadores a subir después de la Primera Guerra Mundial?', fa: 'کدام مشکلات بعد از جنگ جهانی اول به بالا آمدن دیکتاتورها کمک کرد؟' },
        choices: [
          { en: 'Lost jobs, hunger and anger after the war', es: 'Trabajos perdidos, hambre y enojo tras la guerra', fa: 'بی‌کاری، گرسنگی و خشم بعد از جنگ' },
          { en: 'Too much food and too many new jobs', es: 'Demasiada comida y muchos trabajos nuevos', fa: 'غذای خیلی زیاد و کارهای نو بسیار' },
          { en: 'Peace and fair treaties for every country', es: 'Paz y tratados justos para todos los países', fa: 'صلح و پیمان‌های عادلانه برای همهٔ کشورها' },
          { en: 'Strong free newspapers in every country', es: 'Periódicos libres y fuertes en todos los países', fa: 'روزنامه‌های آزاد و قوی در همهٔ کشورها' }],
        answer: 0,
        why: { en: 'Hard times made people scared. Dictators promised jobs, order and pride.', es: 'Los tiempos difíciles asustaron a la gente. Los dictadores prometieron trabajo, orden y orgullo.', fa: 'روزهای سخت مردم را ترساند. دیکتاتورها وعدهٔ کار، نظم و غرور دادند.' } },
      { q: { en: 'Who took power in Italy in 1922 and started fascism?', es: '¿Quién tomó el poder en Italia en 1922 e inició el fascismo?', fa: 'چه کسی در سال ۱۹۲۲ در ایتالیا قدرت را گرفت و فاشیزم را شروع کرد؟' },
        choices: [
          { en: 'Benito Mussolini', es: 'Benito Mussolini', fa: 'بنیتو موسولینی' },
          { en: 'Joseph Stalin', es: 'José Stalin', fa: 'جوزف ستالین' },
          { en: 'Winston Churchill', es: 'Winston Churchill', fa: 'وینستون چرچیل' },
          { en: 'Franklin Roosevelt', es: 'Franklin Roosevelt', fa: 'فرانکلین روزولت' }],
        answer: 0,
        why: { en: 'Mussolini ruled Italy as a fascist dictator. Stalin ruled the Soviet Union.', es: 'Mussolini gobernó Italia como dictador fascista. Stalin gobernó la Unión Soviética.', fa: 'موسولینی مثل یک دیکتاتور فاشیست بر ایتالیا حکومت کرد. ستالین بر اتحاد شوروی حکومت کرد.' } },
      { q: { en: 'How did Joseph Stalin rule the Soviet Union?', es: '¿Cómo gobernó José Stalin la Unión Soviética?', fa: 'جوزف ستالین چطور بر اتحاد شوروی حکومت کرد؟' },
        choices: [
          { en: 'By fear, with prison camps for millions', es: 'Con miedo, con campos de prisión para millones', fa: 'با ترس، با اردوگاه زندان برای میلیون‌ها نفر' },
          { en: 'By free votes held every single year', es: 'Con votos libres todos los años', fa: 'با رأی آزاد در هر سال' },
          { en: 'By sharing power with many other parties', es: 'Compartiendo el poder con muchos otros partidos', fa: 'با شریک ساختن قدرت با حزب‌های دیگر' },
          { en: 'By letting newspapers say what they want', es: 'Dejando que los periódicos dijeran lo que querían', fa: 'با گذاشتن روزنامه‌ها که هر چه می‌خواهند بنویسند' }],
        answer: 0,
        why: { en: 'Stalin was a dictator. He sent millions of people to prison camps.', es: 'Stalin fue un dictador. Envió a millones de personas a campos de prisión.', fa: 'ستالین دیکتاتور بود. او میلیون‌ها نفر را به اردوگاه‌های زندان فرستاد.' } },
      { q: { en: 'What did Japan\'s army do in 1931?', es: '¿Qué hizo el ejército de Japón en 1931?', fa: 'اردوی جاپان در سال ۱۹۳۱ چه کرد؟' },
        choices: [
          { en: 'It invaded Manchuria, a part of China', es: 'Invadió Manchuria, una parte de China', fa: 'به منچوری، بخشی از چین، حمله کرد' },
          { en: 'It made peace with all its neighbors', es: 'Hizo la paz con todos sus vecinos', fa: 'با همهٔ همسایه‌هایش صلح کرد' },
          { en: 'It gave all its colonies their freedom', es: 'Les dio la libertad a todas sus colonias', fa: 'به همهٔ مستعمره‌هایش آزادی داد' },
          { en: 'It joined a league to stop all wars', es: 'Se unió a una liga para parar las guerras', fa: 'به یک اتحادیه برای ختم جنگ‌ها پیوست' }],
        answer: 0,
        why: { en: 'Japan\'s army took Manchuria in 1931. Military leaders gained more and more power.', es: 'El ejército de Japón tomó Manchuria en 1931. Los jefes militares ganaron cada vez más poder.', fa: 'اردوی جاپان در سال ۱۹۳۱ منچوری را گرفت. رهبران نظامی روز به روز قدرت بیشتر گرفتند.' } },
      { q: { en: 'What is propaganda?', es: '¿Qué es la propaganda?', fa: 'تبلیغات یک‌طرفه چیست؟' },
        choices: [
          { en: 'One-sided messages that push a leader\'s ideas', es: 'Mensajes de un solo lado que empujan las ideas de un líder', fa: 'پیام‌های یک‌طرفه که اندیشه‌های رهبر را پیش می‌برند' },
          { en: 'Fair news that shows every side of a story', es: 'Noticias justas que muestran todos los lados', fa: 'خبر عادلانه که همهٔ طرف‌های یک قصه را نشان می‌دهد' },
          { en: 'A secret vote held to choose a new leader', es: 'Un voto secreto para elegir a un líder nuevo', fa: 'رأی پنهانی برای انتخاب یک رهبر نو' },
          { en: 'A law that protects people\'s right to speak', es: 'Una ley que protege el derecho a hablar', fa: 'قانونی که حق حرف زدن مردم را حفظ می‌کند' }],
        answer: 0,
        why: { en: 'Propaganda uses posters, radio and news so people believe only one side.', es: 'La propaganda usa carteles, radio y noticias para que la gente crea un solo lado.', fa: 'تبلیغات یک‌طرفه از پوستر، رادیو و خبر کار می‌گیرد تا مردم فقط یک طرف را باور کنند.' } },
      { q: { en: 'Whom did Hitler falsely blame for Germany\'s problems?', es: '¿A quiénes culpó Hitler, con mentiras, de los problemas de Alemania?', fa: 'هتلر به دروغ چه کسانی را مقصر مشکلات آلمان دانست؟' },
        choices: [
          { en: 'Jewish people', es: 'A los judíos', fa: 'یهودیان' },
          { en: 'Soldiers in his army', es: 'A los soldados de su ejército', fa: 'سربازان اردوی خودش' },
          { en: 'Members of his party', es: 'A los miembros de su partido', fa: 'اعضای حزب خودش' },
          { en: 'The people of Italy', es: 'A la gente de Italia', fa: 'مردم ایتالیا' }],
        answer: 0,
        why: { en: 'It was a lie. Nazi hate against Jews led to unfair laws, and later to the Holocaust.', es: 'Era una mentira. El odio nazi contra los judíos llevó a leyes injustas y luego al Holocausto.', fa: 'این دروغ بود. نفرت نازی‌ها از یهودیان به قانون‌های ناعادلانه و بعد به هولوکاست رسید.' } },
      { q: { en: 'Why did the Treaty of Versailles anger many Germans?', es: '¿Por qué el Tratado de Versalles enojó a muchos alemanes?', fa: 'چرا پیمان ورسای بسیاری از آلمانی‌ها را خشمگین کرد؟' },
        choices: [
          { en: 'Germany had to pay huge sums and lose land', es: 'Alemania tuvo que pagar sumas enormes y perder tierras', fa: 'آلمان باید پول بسیار زیاد می‌داد و زمین از دست می‌داد' },
          { en: 'Germany got new land and many new colonies', es: 'Alemania recibió tierras y muchas colonias nuevas', fa: 'آلمان زمین نو و مستعمره‌های نو زیاد گرفت' },
          { en: 'Germany was allowed a much bigger army', es: 'A Alemania le permitieron un ejército más grande', fa: 'به آلمان اجازهٔ یک اردوی خیلی بزرگ‌تر داده شد' },
          { en: 'Germany was asked to lead the whole world', es: 'Le pidieron a Alemania que guiara al mundo', fa: 'از آلمان خواسته شد رهبر همهٔ جهان شود' }],
        answer: 0,
        why: { en: 'The 1919 treaty blamed Germany for the war. Germany had to pay and give up land.', es: 'El tratado de 1919 culpó a Alemania de la guerra. Tuvo que pagar y entregar tierras.', fa: 'پیمان ۱۹۱۹ آلمان را مقصر جنگ دانست. آلمان باید پول می‌داد و زمین واگذار می‌کرد.' } }
    ]
  },

  learned: [
    { en: 'After World War I and the [[great depression|Great Depression]], many people were poor and afraid.', es: 'Después de la Primera Guerra Mundial y la [[great depression|Gran Depresión]], mucha gente era pobre y tenía miedo.', fa: 'بعد از جنگ جهانی اول و [[great depression|رکود بزرگ]]، بسیاری از مردم فقیر و ترسیده بودند.' },
    { en: '[[dictator|Dictators]] took power: Mussolini in Italy, Stalin in the Soviet Union and Hitler in Germany. Japan\'s army grew strong.', es: 'Los [[dictator|dictadores]] tomaron el poder: Mussolini en Italia, Stalin en la Unión Soviética y Hitler en Alemania. El ejército de Japón se hizo fuerte.', fa: '[[dictator|دیکتاتورها]] قدرت را گرفتند: موسولینی در ایتالیا، ستالین در اتحاد شوروی و هتلر در آلمان. اردوی جاپان قوی شد.' },
    { en: 'Dictators used [[propaganda|propaganda]], fear and hate. They ended the [[free press|free press]] and took away rights.', es: 'Los dictadores usaron [[propaganda|propaganda]], miedo y odio. Acabaron con la [[free press|prensa libre]] y quitaron derechos.', fa: 'دیکتاتورها از [[propaganda|تبلیغات یک‌طرفه]]، ترس و نفرت کار گرفتند. [[free press|مطبوعات آزاد]] را از بین بردند و حقوق مردم را گرفتند.' }
  ],
  reflect: {
    q: { en: 'Why is it important that people can speak, read and vote freely?', es: '¿Por qué es importante que la gente pueda hablar, leer y votar libremente?', fa: 'چرا مهم است که مردم بتوانند آزادانه حرف بزنند، بخوانند و رأی بدهند؟' },
    starter: { en: 'Freedom to speak and read matters because', es: 'La libertad de hablar y leer importa porque', fa: 'آزادی حرف زدن و خواندن مهم است، چون' }
  }
};
