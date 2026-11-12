/* TRAILWALKER · Episode 7.2 · The Roaring Twenties and the Great Depression (VUS)
   Harlem, New York City, in December 1933. Lenox Avenue runs north to south down the middle (x 15-16);
   135th Street (row 5) and a cross street (row 16) run east to west.
   NW: the 135th Street library (a center of the Harlem Renaissance) and an apartment building.
   NE: a closed bank, the radio shop and its stall, another apartment building.
   SW: a quiet jazz club and a small snowy park. SE: the church with its soup kitchen and the bread line.
   The journal stone is a survey: four posts compare 1925 with 1933 (jobs, banks, stocks, daily life). */
window.EPISODE = {
  id: '7.2',
  realm: 7,
  sol: 'VUS',
  title: { en: 'The Twenties and the Depression', es: 'Los años veinte y la Depresión', fa: 'دههٔ بیست و رکود بزرگ' },
  place: { en: 'Harlem, 1933', es: 'Harlem, 1933', fa: 'هارلم، ۱۹۳۳' },
  intro: [
    { en: 'The Grump blurred the [[depression|Depression]] page. People forgot how fast life changed.',
      es: 'El Gruñón borró la página de la [[depression|Depresión]]. La gente olvidó qué tan rápido cambió la vida.',
      fa: 'غرغرو صفحهٔ [[depression|رکود بزرگ]] را تار کرد. مردم فراموش کردند زندگی چقدر زود تغییر کرد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  weather: { sky: 'snow', time: 'day' },
  scenes: {
    at: [-73.94, 40.81],
    year: 1933,
    start: [
      { en: 'In the 1920s, many Americans bought cars, radios and movie tickets.',
        es: 'En los años veinte, muchos estadounidenses compraron carros, radios y boletos de cine.',
        fa: 'در دههٔ ۱۹۲۰، بسیاری از امریکایی‌ها موتر، رادیو و تکت سینما خریدند.' },
      { en: 'In October 1929, the stock market crashed. The Great Depression began.',
        es: 'En octubre de 1929, la bolsa de valores se desplomó. Empezó la Gran Depresión.',
        fa: 'در اکتوبر ۱۹۲۹، بازار سهام سقوط کرد. رکود بزرگ شروع شد.' },
      { en: 'By 1933, about 1 in 4 workers had no job.',
        es: 'Para 1933, cerca de 1 de cada 4 trabajadores no tenía empleo.',
        fa: 'تا سال ۱۹۳۳، حدود ۱ از هر ۴ کارگر کار نداشت.' }
    ],
    page: { en: 'In 1933, President Franklin D. Roosevelt began the New Deal.',
      es: 'En 1933, el presidente Franklin D. Roosevelt empezó el Nuevo Trato.',
      fa: 'در سال ۱۹۳۳، رئیس‌جمهور فرانکلین روزولت «معاملهٔ نو» را شروع کرد.' },
    guess: {
      q: { en: 'In 1925, Harlem\'s jazz clubs were full. What was life like by 1933?', es: 'En 1925, los clubes de jazz de Harlem estaban llenos. ¿Cómo era la vida en 1933?', fa: 'در سال ۱۹۲۵، کلپ‌های جاز هارلم پر بود. تا ۱۹۳۳ زندگی چطور بود؟' },
      choices: [
        { t: { en: '📉 Many lost jobs', es: '📉 Muchos sin trabajo', fa: '📉 بسیاری بیکار شدند' }, ok: true },
        { t: { en: '📈 Everyone got richer', es: '📈 Todos más ricos', fa: '📈 همه پولدارتر شدند' } }
      ],
      why: { en: 'After the 1929 crash, banks and factories closed. Millions of people lost jobs and savings.', es: 'Después del desplome de 1929, cerraron bancos y fábricas. Millones perdieron su trabajo y sus ahorros.', fa: 'بعد از سقوط ۱۹۲۹، بانک‌ها و فابریکه‌ها بسته شدند. میلیون‌ها نفر کار و پس‌انداز خود را از دست دادند.' }
    },
    next: {
      q: { en: 'Next: December 7, 1941. What pulled the US into World War II?', es: 'Ahora: 7 de diciembre de 1941. ¿Qué metió a EE. UU. en la Segunda Guerra Mundial?', fa: 'بعدی: ۷ دسمبر ۱۹۴۱. چه چیز امریکا را به جنگ جهانی دوم کشاند؟' },
      choices: [
        { t: { en: 'An attack on Pearl Harbor', es: 'Un ataque a Pearl Harbor', fa: 'حمله بر پرل هاربر' }, ok: true },
        { t: { en: 'A fight with Canada', es: 'Una pelea con Canadá', fa: 'جنگ با کانادا' } }
      ],
      why: { en: 'Japan attacked the US Navy base at Pearl Harbor, Hawaii. The next day, the US declared war.', es: 'Japón atacó la base naval de EE. UU. en Pearl Harbor, Hawái. Al día siguiente, EE. UU. declaró la guerra.', fa: 'جاپان بر پایگاه بحری امریکا در پرل هاربر، هاوایی حمله کرد. فردای آن، امریکا اعلان جنگ کرد.' }
    }
  },

  /* houses: who lives or works behind each door (2-3 lines each) */
  houses: [
    { at: [5, 2], name: { en: 'Clara', es: 'Clara', fa: 'کلارا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a8ac0', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Shh! I am reading poems by Langston Hughes.', es: '¡Shh! Estoy leyendo poemas de Langston Hughes.', fa: 'آهسته! شعرهای لنگستن هیوز را می‌خوانم.' },
        { en: 'He writes about jazz, hard work and dreams in Harlem.', es: 'Él escribe sobre el jazz, el trabajo duro y los sueños en Harlem.', fa: 'او دربارهٔ جاز، کار سخت و آرزوها در هارلم می‌نویسد.' },
        { en: 'This library also keeps a big collection of Black history books.', es: 'Esta biblioteca también guarda una gran colección de libros de historia negra.', fa: 'این کتابخانه یک مجموعهٔ بزرگ کتاب‌های تاریخ سیاه‌پوستان هم دارد.' }
      ] },
    { at: [3, 8], name: { en: 'Mr. Amos Hill', es: 'Señor Amos Hill', fa: 'آقای ایموس هیل' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#7a5a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I came north from Georgia in 1919, in the [[great migration|Great Migration]].', es: 'Vine al norte desde Georgia en 1919, en la [[great migration|Gran Migración]].', fa: 'من در سال ۱۹۱۹ در [[great migration|مهاجرت بزرگ]] از جورجیا به شمال آمدم.' },
        { en: 'Jim Crow laws and violence pushed many Black families out of the South.', es: 'Las leyes de Jim Crow y la violencia sacaron del Sur a muchas familias negras.', fa: 'قانون‌های جیم کرو و خشونت بسیاری از خانواده‌های سیاه‌پوست را از جنوب بیرون راند.' },
        { en: 'In the 1920s, the KKK grew again. Millions joined it to spread hate.', es: 'En los años veinte, el KKK creció otra vez. Millones se unieron para esparcir odio.', fa: 'در دههٔ ۱۹۲۰، کو کلوکس کلان دوباره بزرگ شد. میلیون‌ها نفر برای پخش نفرت با آن یکجا شدند.' }
      ] },
    { at: [27, 2], name: { en: 'Señora Rivera', es: 'Señora Rivera', fa: 'خانم ریورا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#c0504a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'My family came from Puerto Rico. We are US citizens since 1917.', es: 'Mi familia vino de Puerto Rico. Somos ciudadanos de EE. UU. desde 1917.', fa: 'خانوادهٔ من از پورتوریکو آمد. ما از سال ۱۹۱۷ تبعهٔ امریکا هستیم.' },
        { en: 'After 1919, a Red Scare made many people fear immigrants and new ideas.', es: 'Después de 1919, el Miedo Rojo hizo que muchos temieran a los inmigrantes y las ideas nuevas.', fa: 'بعد از ۱۹۱۹، «ترس سرخ» بسیاری را از مهاجران و فکرهای نو ترساند.' },
        { en: 'A 1924 law set [[quota|quotas]]. Far fewer people from Europe and Asia could come.', es: 'Una ley de 1924 puso [[quota|cuotas]]. Muchas menos personas de Europa y Asia pudieron venir.', fa: 'یک قانون در ۱۹۲۴ [[quota|سهمیه]] گذاشت. مردم خیلی کمتری از اروپا و آسیا توانستند بیایند.' }
      ] },
    { at: [10, 14], name: { en: 'Earl', es: 'Earl', fa: 'ارل' },
      look: { skin: 5, hair: '#120c08', shirt: '#f2f2f2', pants: '#1a1a1a', hat: '#2a2a2a' },
      lines: [
        { en: 'In 1925, this club was full every night. Jazz played until morning!', es: 'En 1925, este club se llenaba cada noche. ¡El jazz sonaba hasta la mañana!', fa: 'در سال ۱۹۲۵، این کلپ هر شب پر بود. جاز تا صبح نواخته می‌شد!' },
        { en: 'Duke Ellington and Louis Armstrong made Harlem jazz famous.', es: 'Duke Ellington y Louis Armstrong hicieron famoso el jazz de Harlem.', fa: 'دیوک الینگتن و لویی آرمسترانگ جاز هارلم را مشهور ساختند.' },
        { en: '[[prohibition|Prohibition]] ends this month. But few people can pay to come in.', es: 'La [[prohibition|Prohibición]] termina este mes. Pero poca gente puede pagar para entrar.', fa: '[[prohibition|منع الکول]] همین ماه تمام می‌شود. اما کم کسی پول دارد که داخل بیاید.' }
      ] },
    { at: [22, 14], name: { en: 'Mother Bessie', es: 'Mamá Bessie', fa: 'مادر بسی' },
      look: { skin: 4, hair: '#bdbdbd', shirt: '#8a3a6a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Our church serves free soup and bread every morning.', es: 'Nuestra iglesia da sopa y pan gratis cada mañana.', fa: 'کلیسای ما هر صبح شوربا و نان مفت می‌دهد.' },
        { en: 'My grandson joined the new CCC. He plants trees and sends money home.', es: 'Mi nieto entró al nuevo CCC. Planta árboles y manda dinero a casa.', fa: 'نواسه‌ام با سی‌سی‌سی نو یکجا شد. درخت می‌کارد و پول به خانه می‌فرستد.' },
        { en: 'New Deal help is coming. But Black workers often get less of it.', es: 'La ayuda del Nuevo Trato está llegando. Pero los trabajadores negros a menudo reciben menos.', fa: 'کمک «معاملهٔ نو» می‌رسد. اما کارگران سیاه‌پوست اکثراً کمتر می‌گیرند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Lenox Avenue (l) runs north-south at x 15-16; 135th Street is row 5, a cross street row 16.
     W = the library and the closed bank (stone), J = flat-roof apartment buildings, the radio shop and the jazz club,
     R/h = the church, m = the radio stall, n = snow, T = street trees. Tall buildings (U) close the edges. */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
    'U.WWWWWWW..T.T.ll..WWWW..JJJJJ.U',
    'U.WWWdWWW......ll..WWWW..JJdJJ.U',
    'U......x....n..ll...x..........U',
    'U.T............ll.......T......U',
    'UllllllllllllllllllllllllllllllU',
    'U............x.ll..............U',
    'U.JJJJ.........ll...JJJJ.....T.U',
    'U.JdJJ.........ll...JJJJ.......U',
    'U..............ll...mmm........U',
    'U...n.....T....ll..............U',
    'U..............ll.n......n.T...U',
    'U..T..T........ll..............U',
    'U.....T.JJJJJ..ll..RRRRRRR.....U',
    'U.T.....JJdJJ..ll..hhhdhhh..x..U',
    'U..............ll..............U',
    'UllllllllllllllllllllllllllllllU',
    'U..............ll..............U',
    'U..T...T..n....ll....T....T....U',
    'U...n.T....T...ll.......n...,..U',
    'U.T..n...n...,.ll......n.......U',
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU'
  ],
  start: [16, 11],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [29, 10], at: [29, 18], decor: 'drum',
      clue: { en: 'From this note, walk 8 steps south. Cross the street and stop near the corner.', es: 'Desde esta nota, camina 8 pasos al sur. Cruza la calle y detente cerca de la esquina.', fa: 'از این یادداشت، ۸ قدم به جنوب برو. از سرک بگذر و نزدیک کنج بایست.' },
      text: { en: 'A jazz drumstick! Jazz began in New Orleans. It came north with the Great Migration.', es: '¡Una baqueta de jazz! El jazz nació en Nueva Orleans. Llegó al norte con la Gran Migración.', fa: 'یک چوب دُهل جاز! جاز در نیو اورلینز شروع شد. با مهاجرت بزرگ به شمال آمد.' } },
    { clueAt: [7, 10], at: [2, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps west, then 1 step north. Look by the apartment door.', es: 'Desde esta nota, camina 5 pasos al oeste y luego 1 paso al norte. Busca junto a la puerta.', fa: 'از این یادداشت، ۵ قدم به غرب برو، بعد ۱ قدم به شمال. کنار دروازهٔ آپارتمان را ببین.' },
      text: { en: 'An old nickel. In 1933, many families had to count every single coin.', es: 'Una moneda vieja de cinco centavos. En 1933, muchas familias contaban cada moneda.', fa: 'یک سکهٔ کهنهٔ پنج سنتی. در ۱۹۳۳، بسیاری از خانواده‌ها هر سکه را حساب می‌کردند.' } }
  ],

  words: {
    'harlem renaissance': { en: 'a time in the 1920s when Black art, music and writing grew in Harlem', es: 'una época de los años veinte en que el arte, la música y la escritura negras crecieron en Harlem', fa: 'زمانی در دههٔ ۱۹۲۰ که هنر، موسیقی و نوشته‌های سیاه‌پوستان در هارلم رشد کرد' },
    'great migration': { en: 'when millions of Black Americans moved from the South to cities in the North and West', es: 'cuando millones de afroestadounidenses se mudaron del Sur a ciudades del Norte y el Oeste', fa: 'وقتی میلیون‌ها امریکایی سیاه‌پوست از جنوب به شهرهای شمال و غرب کوچ کردند' },
    credit: { en: 'buying something now and paying for it a little at a time later', es: 'comprar algo ahora y pagarlo poco a poco después', fa: 'چیزی را حالا خریدن و پولش را بعداً کم‌کم دادن' },
    'stock market': { en: 'a place where people buy and sell small shares of companies', es: 'un lugar donde la gente compra y vende partes pequeñas de empresas', fa: 'جایی که مردم سهم‌های کوچک شرکت‌ها را می‌خرند و می‌فروشند' },
    margin: { en: 'buying stocks with money borrowed from a bank or broker', es: 'comprar acciones con dinero prestado por un banco o corredor', fa: 'خریدن سهام با پولی که از بانک یا دلال قرض گرفته شده' },
    depression: { en: 'a long time when businesses fail and many people lose their jobs', es: 'un tiempo largo en que fracasan los negocios y mucha gente pierde su trabajo', fa: 'یک وقت دراز که کسب‌وکارها ناکام می‌شوند و بسیاری از مردم کار خود را از دست می‌دهند' },
    'bread line': { en: 'a line of hungry people waiting for free food', es: 'una fila de personas con hambre que esperan comida gratis', fa: 'صف مردم گرسنه که برای غذای مفت منتظر هستند' },
    'new deal': { en: 'President Franklin D. Roosevelt\'s programs to fight the Great Depression', es: 'los programas del presidente Franklin D. Roosevelt para combatir la Gran Depresión', fa: 'برنامه‌های رئیس‌جمهور فرانکلین روزولت برای مبارزه با رکود بزرگ' },
    'fireside chat': { en: 'a radio talk by President Roosevelt to the whole country', es: 'una charla por radio del presidente Roosevelt a todo el país', fa: 'گپ رادیویی رئیس‌جمهور روزولت با تمام کشور' },
    prohibition: { en: 'the years 1920 to 1933, when making and selling alcohol was against the law', es: 'los años de 1920 a 1933, cuando hacer y vender alcohol estaba prohibido por ley', fa: 'سال‌های ۱۹۲۰ تا ۱۹۳۳، وقتی ساختن و فروختن الکول خلاف قانون بود' },
    quota: { en: 'a set limit on how many people may come in', es: 'un límite fijo de cuántas personas pueden entrar', fa: 'یک حد معین برای اینکه چند نفر می‌توانند داخل شوند' }
  },

  npcs: [
    {
      x: 9, y: 3,
      name: { en: 'Mrs. Odessa Greene', es: 'Señora Odessa Greene', fa: 'خانم اودسا گرین' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#2f6f6a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome to the 135th Street library! Writers and artists meet here.', es: '¡Bienvenido a la biblioteca de la calle 135! Aquí se reúnen escritores y artistas.', fa: 'به کتابخانهٔ سرک ۱۳۵ خوش آمدی! نویسنده‌ها و هنرمندان اینجا جمع می‌شوند.' },
        { en: 'In the 1920s, Black art, music and writing grew in Harlem.', es: 'En los años veinte, el arte, la música y la escritura negras crecieron en Harlem.', fa: 'در دههٔ ۱۹۲۰، هنر، موسیقی و نوشته‌های سیاه‌پوستان در هارلم رشد کرد.' },
        { en: 'People call it the [[harlem renaissance|Harlem Renaissance]].', es: 'La gente lo llama el [[harlem renaissance|Renacimiento de Harlem]].', fa: 'مردم آن را [[harlem renaissance|رنسانس هارلم]] می‌نامند.' },
        { en: 'Langston Hughes and Zora Neale Hurston wrote about Black life.', es: 'Langston Hughes y Zora Neale Hurston escribieron sobre la vida negra.', fa: 'لنگستن هیوز و زورا نیل هرستن دربارهٔ زندگی سیاه‌پوستان نوشتند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is a primary source from the Harlem Renaissance?', es: '¿Cuál es una fuente primaria del Renacimiento de Harlem?', fa: 'کدام یک منبع اصلی از رنسانس هارلم است؟' },
        choices: [
          { ok: true, t: { en: 'A poem by Langston Hughes', es: 'Un poema de Langston Hughes', fa: 'شعری از لنگستن هیوز' },
            why: { en: 'Yes! Hughes wrote it in that time. A source made then is a primary source.', es: '¡Sí! Hughes lo escribió en esa época. Una fuente hecha entonces es una fuente primaria.', fa: 'بله! هیوز آن را در همان زمان نوشت. منبعی که آن وقت ساخته شده، منبع اصلی است.' } },
          { t: { en: 'A movie about Harlem from 1995', es: 'Una película sobre Harlem de 1995', fa: 'فلمی دربارهٔ هارلم از ۱۹۹۵' },
            why: { en: 'That movie was made much later. It looks back, so it is not a primary source.', es: 'Esa película se hizo mucho después. Mira hacia atrás, así que no es fuente primaria.', fa: 'آن فلم خیلی بعدتر ساخته شد. به گذشته نگاه می‌کند، پس منبع اصلی نیست.' } },
          { t: { en: 'A history textbook from today', es: 'Un libro de historia de hoy', fa: 'یک کتاب درسی تاریخ از امروز' },
            why: { en: 'A textbook is written much later. It explains the past, but it is not from that time.', es: 'Un libro de texto se escribe mucho después. Explica el pasado, pero no es de esa época.', fa: 'کتاب درسی خیلی بعدتر نوشته می‌شود. گذشته را شرح می‌دهد، اما از آن زمان نیست.' } }
        ]
      }
    },
    {
      x: 23, y: 9,
      name: { en: 'Mrs. Ruth Adams', es: 'Señora Ruth Adams', fa: 'خانم روث ادمز' },
      role: { en: 'Radio shop owner', es: 'Dueña de la tienda de radios', fa: 'صاحب دکان رادیو' },
      look: { skin: 3, hair: '#4a2a1a', shirt: '#d0a040', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'In 1925, everyone wanted a radio! Many bought one on [[credit|credit]].', es: '¡En 1925, todos querían un radio! Muchos lo compraron a [[credit|crédito]].', fa: 'در ۱۹۲۵، همه رادیو می‌خواستند! بسیاری آن را به [[credit|قرض]] خریدند.' },
        { en: 'Credit means you buy now and pay a little each month.', es: 'Crédito quiere decir que compras ahora y pagas un poco cada mes.', fa: 'قرض یعنی حالا می‌خری و هر ماه کمی پول می‌دهی.' },
        { en: 'Now few people buy. But all listen to President Roosevelt\'s [[fireside chat|fireside chats]].', es: 'Ahora pocos compran. Pero todos escuchan las [[fireside chat|charlas junto a la chimenea]] del presidente Roosevelt.', fa: 'حالا کم کسی می‌خرد. اما همه [[fireside chat|گپ‌های کنار آتشدان]] رئیس‌جمهور روزولت را می‌شنوند.' },
        { en: 'Some say his [[new deal|New Deal]] does too much. Others say not enough.', es: 'Algunos dicen que su [[new deal|Nuevo Trato]] hace demasiado. Otros dicen que no basta.', fa: 'بعضی می‌گویند [[new deal|معاملهٔ نو]] او زیاد کار می‌کند. دیگران می‌گویند کافی نیست.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did buying change in Harlem from 1925 to 1933?', es: '¿Cómo cambiaron las compras en Harlem de 1925 a 1933?', fa: 'خرید کردن در هارلم از ۱۹۲۵ تا ۱۹۳۳ چطور تغییر کرد؟' },
        choices: [
          { ok: true, t: { en: 'People had less money to spend', es: 'La gente tenía menos dinero para gastar', fa: 'مردم پول کمتری برای خرج داشتند' },
            why: { en: 'Right. Many lost jobs and savings, so they bought much less.', es: 'Correcto. Muchos perdieron trabajo y ahorros, así que compraban mucho menos.', fa: 'درست. بسیاری کار و پس‌انداز خود را از دست دادند، پس خیلی کمتر خریدند.' } },
          { t: { en: 'People bought many more new cars', es: 'La gente compraba muchos más carros nuevos', fa: 'مردم موترهای نو خیلی بیشتر خریدند' },
            why: { en: 'Car sales boomed in the 1920s. By 1933, few people could buy one.', es: 'La venta de carros creció en los años veinte. En 1933, pocos podían comprar uno.', fa: 'فروش موتر در دههٔ ۱۹۲۰ زیاد بود. تا ۱۹۳۳، کم کسی می‌توانست موتر بخرد.' } },
          { t: { en: 'Nobody bought on credit in 1925', es: 'Nadie compraba a crédito en 1925', fa: 'در ۱۹۲۵ هیچ کس به قرض نمی‌خرید' },
            why: { en: 'Many people bought on credit in 1925. That added a lot of debt.', es: 'Mucha gente compraba a crédito en 1925. Eso sumó muchas deudas.', fa: 'در ۱۹۲۵ بسیاری به قرض می‌خریدند. این قرض زیادی جمع کرد.' } }
        ]
      }
    },
    {
      x: 24, y: 15,
      name: { en: 'Walter Brooks', es: 'Walter Brooks', fa: 'والتر بروکس' },
      role: { en: 'Bricklayer, out of work', es: 'Albañil sin trabajo', fa: 'خشت‌کار بیکار' },
      look: { skin: 5, hair: '#1a1208', shirt: '#5a5a6a', pants: '#3a2a1a', hat: '#4a3a2a' },
      lines: [
        { en: 'I am waiting in the [[bread line|bread line]]. The church gives free soup.', es: 'Estoy esperando en la [[bread line|fila del pan]]. La iglesia da sopa gratis.', fa: 'در [[bread line|صف نان]] منتظرم. کلیسا شوربای مفت می‌دهد.' },
        { en: 'In the 1920s, many bought stocks on [[margin|margin]], with borrowed money.', es: 'En los años veinte, muchos compraron acciones a [[margin|margen]], con dinero prestado.', fa: 'در دههٔ ۱۹۲۰، بسیاری سهام را با [[margin|پول قرضی]] خریدند.' },
        { en: 'In October 1929, the [[stock market|stock market]] crashed. People could not pay back loans.', es: 'En octubre de 1929, la [[stock market|bolsa de valores]] se desplomó. La gente no pudo pagar sus préstamos.', fa: 'در اکتوبر ۱۹۲۹، [[stock market|بازار سهام]] سقوط کرد. مردم نتوانستند قرض‌ها را پس بدهند.' },
        { en: 'Banks failed. Builders stopped building. I lost my job and my savings.', es: 'Los bancos quebraron. Se dejó de construir. Perdí mi trabajo y mis ahorros.', fa: 'بانک‌ها ورشکست شدند. ساختمان‌سازی ایستاد. کار و پس‌اندازم را از دست دادم.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did many families lose their savings after 1929?', es: '¿Por qué muchas familias perdieron sus ahorros después de 1929?', fa: 'چرا بعد از ۱۹۲۹ بسیاری از خانواده‌ها پس‌انداز خود را از دست دادند؟' },
        choices: [
          { ok: true, t: { en: 'Their banks failed and closed', es: 'Sus bancos quebraron y cerraron', fa: 'بانک‌های‌شان ورشکست و بسته شد' },
            why: { en: 'Yes. Thousands of banks failed. Savings were not protected yet, so people lost them.', es: 'Sí. Miles de bancos quebraron. Los ahorros aún no estaban protegidos, y se perdieron.', fa: 'بله. هزاران بانک ورشکست شد. پس‌اندازها هنوز محافظت نمی‌شد، پس از دست رفت.' } },
          { t: { en: 'They spent it all on radios', es: 'Lo gastaron todo en radios', fa: 'همه را خرج رادیو کردند' },
            why: { en: 'Some bought radios, but that is not why savings vanished. Bank failures were the cause.', es: 'Algunos compraron radios, pero no por eso se perdieron los ahorros. La causa fue la quiebra de bancos.', fa: 'بعضی رادیو خریدند، اما پس‌انداز به این خاطر نرفت. علتش ورشکست شدن بانک‌ها بود.' } },
          { t: { en: 'The government took the money', es: 'El gobierno se quedó con el dinero', fa: 'حکومت پول را گرفت' },
            why: { en: 'The government did not take it. The banks failed and could not pay people back.', es: 'El gobierno no lo tomó. Los bancos quebraron y no pudieron devolver el dinero.', fa: 'حکومت آن را نگرفت. بانک‌ها ورشکست شدند و نتوانستند پول مردم را پس بدهند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 3, text: { en: '135TH STREET LIBRARY · A center of the [[harlem renaissance|Harlem Renaissance]]. Writers and readers meet here.', es: 'BIBLIOTECA DE LA CALLE 135 · Un centro del [[harlem renaissance|Renacimiento de Harlem]]. Aquí se reúnen escritores y lectores.', fa: 'کتابخانهٔ سرک ۱۳۵ · یک مرکز [[harlem renaissance|رنسانس هارلم]]. نویسنده‌ها و خواننده‌ها اینجا جمع می‌شوند.' } },
    { x: 20, y: 3, text: { en: 'BANK · CLOSED. This bank failed in 1931. Its savers lost their money.', es: 'BANCO · CERRADO. Este banco quebró en 1931. Sus ahorradores perdieron su dinero.', fa: 'بانک · بسته. این بانک در ۱۹۳۱ ورشکست شد. پس‌اندازکنندگانش پول خود را از دست دادند.' } },
    { x: 28, y: 14, text: { en: 'SOUP KITCHEN · Free soup and bread every morning. Some days the line goes around the block.', es: 'COMEDOR · Sopa y pan gratis cada mañana. Algunos días la fila da la vuelta a la cuadra.', fa: 'آشخانهٔ خیریه · هر صبح شوربا و نان مفت. بعضی روزها صف دور تمام بلاک می‌رسد.' } },
    { x: 13, y: 6, text: { en: 'LENOX AVENUE AND 135TH STREET · HARLEM, NEW YORK CITY · 1933', es: 'AVENIDA LENOX Y CALLE 135 · HARLEM, CIUDAD DE NUEVA YORK · 1933', fa: 'سرک لینوکس و سرک ۱۳۵ · هارلم، شهر نیویارک · ۱۹۳۳' } }
  ],

  /* the quest: Lily (gold !) by the jazz club in the SW -> Sam the newsboy at Lenox and 135th (NE)
     -> her poem, blown west along 135th Street, between two trees east of the library (NW) -> back to Lily */
  quest: {
    stat: 'reg',
    title: { en: 'A Poem in the Wind', es: 'Un poema en el viento', fa: 'شعری در باد' },
    giver: {
      x: 6, y: 15,
      name: { en: 'Lily Carter', es: 'Lily Carter', fa: 'لیلی کارتر' },
      role: { en: 'Student poet', es: 'Estudiante y poeta', fa: 'شاگرد شاعر' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#5a2a4a', style: 'long' },
      lines: [
        { en: 'Help! I wrote a poem for poetry night at the library.', es: '¡Ayuda! Escribí un poema para la noche de poesía de la biblioteca.', fa: 'کمک! برای شب شعر کتابخانه یک شعر نوشتم.' },
        { en: 'The cold wind tore it from my hand. Sam the newsboy saw it!', es: 'El viento frío me lo arrancó de la mano. ¡Sam, el vendedor de periódicos, lo vio!', fa: 'باد سرد آن را از دستم ربود. سام اخبارفروش آن را دید!' }
      ],
      wait: { en: 'Sam sells newspapers at the corner of Lenox Avenue and 135th Street.', es: 'Sam vende periódicos en la esquina de la avenida Lenox y la calle 135.', fa: 'سام در کنج سرک لینوکس و سرک ۱۳۵ اخبار می‌فروشد.' },
      thanks: { en: 'My poem! Now I can read it at the library tonight. Thank you!', es: '¡Mi poema! Ahora puedo leerlo en la biblioteca esta noche. ¡Gracias!', fa: 'شعرم! حالا امشب می‌توانم آن را در کتابخانه بخوانم. تشکر!' }
    },
    contact: {
      x: 18, y: 6,
      name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      role: { en: 'Newsboy', es: 'Vendedor de periódicos', fa: 'اخبارفروش' },
      look: { skin: 3, hair: '#3a2416', shirt: '#7a4a2a', pants: '#2a3a5a', hat: '#5a5a5a' },
      lines: [
        { en: 'Paper! Paper! Today\'s news is all about the New Deal.', es: '¡Periódico! ¡Periódico! Las noticias de hoy son sobre el Nuevo Trato.', fa: 'اخبار! اخبار! خبر امروز همه دربارهٔ «معاملهٔ نو» است.' },
        { en: 'A page flew west. It landed between two trees, east of the library.', es: 'Una hoja voló al oeste. Cayó entre dos árboles, al este de la biblioteca.', fa: 'یک ورق به غرب پرید. میان دو درخت، شرق کتابخانه افتاد.' }
      ]
    },
    action: {
      type: 'find',
      at: [12, 1],
      hint: { en: 'North of 135th Street: between two trees, east of the library', es: 'Al norte de la calle 135: entre dos árboles, al este de la biblioteca', fa: 'شمال سرک ۱۳۵: میان دو درخت، شرق کتابخانه' },
      found: { en: 'You found Lily\'s poem! It is about hope on Lenox Avenue.', es: '¡Encontraste el poema de Lily! Habla de la esperanza en la avenida Lenox.', fa: 'شعر لیلی را پیدا کردی! دربارهٔ امید در سرک لینوکس است.' },
      item: { icon: '📝', name: { en: 'Lily\'s poem', es: 'El poema de Lily', fa: 'شعر لیلی' } }
    }
  },

  scraps: [[1, 20], [30, 1], [30, 20]],
  smudges: [[9, 19], [27, 8]],

  challenge: {
    at: [19, 19],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one post per row: jobs by the bread line, banks by the closed bank, stocks by the newsstand corner, daily life by the jazz club
    spots: [[26, 15], [22, 3], [13, 8], [12, 15]],
    stat: 'pla',
    title: { en: 'Then and now: 1925 and 1933', es: 'Antes y ahora: 1925 y 1933', fa: 'آن وقت و حالا: ۱۹۲۵ و ۱۹۳۳' },
    intro: { en: 'The Grump mixed up the years! Read the four posts. Compare 1925 with 1933. Then answer.',
      es: '¡El Gruñón revolvió los años! Lee los cuatro postes. Compara 1925 con 1933. Luego responde.',
      fa: 'غرغرو سال‌ها را به هم زد! چهار تخته را بخوان. ۱۹۲۵ را با ۱۹۳۳ مقایسه کن. بعد جواب بده.' },
    table: {
      head: [
        { en: 'What we look at', es: 'Qué miramos', fa: 'چه چیز را می‌بینیم' },
        { en: '1925 (good times)', es: '1925 (buenos tiempos)', fa: '۱۹۲۵ (وقت خوب)' },
        { en: '1933 (the Depression)', es: '1933 (la Depresión)', fa: '۱۹۳۳ (رکود بزرگ)' }
      ],
      rows: [
        [{ en: 'Jobs', es: 'Empleos', fa: 'کار' },
          { en: 'About 3 in 100 workers had no job', es: 'Cerca de 3 de cada 100 trabajadores no tenían empleo', fa: 'حدود ۳ از هر ۱۰۰ کارگر کار نداشت' },
          { en: 'About 1 in 4 workers had no job', es: 'Cerca de 1 de cada 4 trabajadores no tenía empleo', fa: 'حدود ۱ از هر ۴ کارگر کار نداشت' }],
        [{ en: 'Banks', es: 'Bancos', fa: 'بانک‌ها' },
          { en: 'Most banks open; many people borrow and buy on credit', es: 'La mayoría de los bancos abiertos; mucha gente pide prestado y compra a crédito', fa: 'بیشتر بانک‌ها باز؛ بسیاری قرض می‌گیرند و به قرض می‌خرند' },
          { en: 'Thousands of banks failed since 1930; many families lost their savings', es: 'Miles de bancos quebraron desde 1930; muchas familias perdieron sus ahorros', fa: 'از ۱۹۳۰ هزاران بانک ورشکست شد؛ بسیاری از خانواده‌ها پس‌انداز خود را از دست دادند' }],
        [{ en: 'Stock market', es: 'Bolsa de valores', fa: 'بازار سهام' },
          { en: 'Prices going up; many buy stocks with borrowed money', es: 'Los precios suben; muchos compran acciones con dinero prestado', fa: 'قیمت‌ها بالا می‌رود؛ بسیاری با پول قرضی سهام می‌خرند' },
          { en: 'Prices still far below 1929', es: 'Los precios siguen muy por debajo de 1929', fa: 'قیمت‌ها هنوز خیلی پایین‌تر از ۱۹۲۹ است' }],
        [{ en: 'Work and fun', es: 'Trabajo y diversión', fa: 'کار و تفریح' },
          { en: 'Building and factory jobs; jazz clubs, movies, new cars and radios', es: 'Trabajos en construcción y fábricas; clubes de jazz, cine, carros y radios nuevos', fa: 'کار در ساختمان‌سازی و فابریکه؛ کلپ جاز، سینما، موتر و رادیوی نو' },
          { en: 'People look for any work; bread lines; free radio and library', es: 'La gente busca cualquier trabajo; filas del pan; radio y biblioteca gratis', fa: 'مردم هر کاری را می‌پالند؛ صف نان؛ رادیو و کتابخانهٔ مفت' }]
      ],
      note: { en: 'Rounded numbers for the whole United States. From 1929 to 1932, stock prices fell almost 90%.', es: 'Números redondeados para todo Estados Unidos. De 1929 a 1932, los precios de las acciones cayeron casi 90%.', fa: 'عددها برای تمام امریکا گرد شده‌اند. از ۱۹۲۹ تا ۱۹۳۲، قیمت سهام تقریباً ۹۰ فیصد پایین آمد.' }
    },
    questions: [
      { q: { en: 'Look at the Jobs row. How did jobs change from 1925 to 1933?', es: 'Mira la fila de Empleos. ¿Cómo cambiaron los empleos de 1925 a 1933?', fa: 'ردیف کار را ببین. کار از ۱۹۲۵ تا ۱۹۳۳ چطور تغییر کرد؟' },
        choices: [{ en: 'Many more people had no job', es: 'Mucha más gente no tenía empleo', fa: 'مردم خیلی بیشتری بیکار بودند' }, { en: 'Almost everyone found a new job', es: 'Casi todos encontraron un empleo nuevo', fa: 'تقریباً همه کار نو پیدا کردند' }, { en: 'Jobs did not change at all', es: 'Los empleos no cambiaron nada', fa: 'کار هیچ تغییر نکرد' }], answer: 0,
        why: { en: 'About 3 in 100 had no job in 1925. About 1 in 4 had none in 1933.', es: 'En 1925, cerca de 3 de cada 100 no tenían empleo. En 1933, cerca de 1 de cada 4.', fa: 'در ۱۹۲۵ حدود ۳ از هر ۱۰۰ بیکار بودند. در ۱۹۳۳ حدود ۱ از هر ۴.' } },
      { q: { en: 'Look at the Banks row. Why did a bank failure hurt families so much?', es: 'Mira la fila de Bancos. ¿Por qué la quiebra de un banco dañaba tanto a las familias?', fa: 'ردیف بانک‌ها را ببین. چرا ورشکست شدن بانک به خانواده‌ها این‌قدر ضرر زد؟' },
        choices: [{ en: 'They could lose all their savings', es: 'Podían perder todos sus ahorros', fa: 'ممکن بود همهٔ پس‌انداز خود را از دست بدهند' }, { en: 'They had to pay more for radios', es: 'Tenían que pagar más por los radios', fa: 'باید برای رادیو پول بیشتر می‌دادند' }, { en: 'They could not go to the movies', es: 'No podían ir al cine', fa: 'نمی‌توانستند به سینما بروند' }], answer: 0,
        why: { en: 'Before the FDIC, savings in a failed bank were often lost for good.', es: 'Antes de la FDIC, los ahorros en un banco quebrado muchas veces se perdían para siempre.', fa: 'پیش از اف‌دی‌آی‌سی، پس‌انداز در بانک ورشکسته اکثراً برای همیشه از دست می‌رفت.' } },
      { q: { en: 'In 1925, many bought stocks with borrowed money. What happened when prices crashed?', es: 'En 1925, muchos compraron acciones con dinero prestado. ¿Qué pasó cuando los precios cayeron?', fa: 'در ۱۹۲۵، بسیاری با پول قرضی سهام خریدند. وقتی قیمت‌ها سقوط کرد چه شد؟' },
        choices: [{ en: 'They could not pay back their loans', es: 'No pudieron pagar sus préstamos', fa: 'نتوانستند قرض‌های خود را پس بدهند' }, { en: 'They all became much richer', es: 'Todos se hicieron mucho más ricos', fa: 'همه خیلی پولدارتر شدند' }, { en: 'Banks gave them free money', es: 'Los bancos les dieron dinero gratis', fa: 'بانک‌ها به آن‌ها پول مفت دادند' }], answer: 0,
        why: { en: 'Their stocks were worth little, but the loans stayed. Unpaid loans helped banks fail.', es: 'Sus acciones valían poco, pero las deudas seguían. Los préstamos sin pagar hicieron quebrar bancos.', fa: 'سهام‌شان ارزش کمی داشت، اما قرض باقی ماند. قرض‌های پس‌نداده به ورشکست شدن بانک‌ها کمک کرد.' } },
      { q: { en: 'Fewer people had jobs, so they bought less. What happened next?', es: 'Menos gente tenía empleo, así que compraba menos. ¿Qué pasó después?', fa: 'مردم کمتری کار داشتند، پس کمتر خریدند. بعد چه شد؟' },
        choices: [{ en: 'Factories sold less and cut more jobs', es: 'Las fábricas vendieron menos y cortaron más empleos', fa: 'فابریکه‌ها کمتر فروختند و کارگران بیشتری را بیکار کردند' }, { en: 'Factories hired many more workers', es: 'Las fábricas contrataron a muchos más trabajadores', fa: 'فابریکه‌ها کارگران خیلی بیشتری گرفتند' }, { en: 'Stores ran out of things to sell', es: 'Las tiendas se quedaron sin cosas que vender', fa: 'دکان‌ها چیزی برای فروش نداشتند' }], answer: 0,
        why: { en: 'Less buying meant less selling, so more workers lost jobs. The cycle kept going.', es: 'Menos compras significaban menos ventas, así que más trabajadores perdían su empleo. El ciclo seguía.', fa: 'خرید کمتر یعنی فروش کمتر، پس کارگران بیشتری بیکار شدند. این دور ادامه داشت.' } }
    ],
    success: { en: 'The years are clear again! Life in 1933 was very different from 1925.', es: '¡Los años están claros otra vez! La vida en 1933 era muy distinta a la de 1925.', fa: 'سال‌ها دوباره روشن شد! زندگی در ۱۹۳۳ با ۱۹۲۵ خیلی فرق داشت.' }
  },

  boss: {
    at: [5, 18],
    stat: 'loc',
    need: 3,
    name: { en: 'The Gloomy Grump', es: 'El Gruñón Sombrío', fa: 'غرغروی دلگیر' },
    appear: { en: 'The Gloomy Grump is hiding in the snowy little park in the southwest!', es: '¡El Gruñón Sombrío se esconde en el parquecito nevado del suroeste!', fa: 'غرغروی دلگیر در پارک کوچک برفی جنوب غرب پنهان است!' },
    taunt: { en: 'Boom, crash! I mixed up the Twenties and the Thirties. Good luck!', es: '¡Bum, crash! Revolví los años veinte y los treinta. ¡Buena suerte!', fa: 'بوم، شَرَق! دههٔ بیست و سی را به هم زدم. موفق باشی!' },
    win: { en: 'The gloom lifts over Lenox Avenue. Journal page 7.2 floats down into your hands!', es: 'La tristeza se va de la avenida Lenox. ¡La página 7.2 del diario cae en tus manos!', fa: 'دلگیری از سرک لینوکس دور می‌شود. صفحهٔ ۷.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What did the 19th Amendment do in 1920?', es: '¿Qué hizo la Enmienda 19 en 1920?', fa: 'ترمیم نزدهم در ۱۹۲۰ چه کرد؟' },
        choices: [
          { en: 'Gave women the right to vote', es: 'Dio a las mujeres el derecho al voto', fa: 'به زنان حق رأی داد' },
          { en: 'Made selling alcohol illegal', es: 'Prohibió vender alcohol', fa: 'فروش الکول را غیرقانونی ساخت' },
          { en: 'Set quotas on new immigrants', es: 'Puso cuotas a los inmigrantes nuevos', fa: 'برای مهاجران نو سهمیه گذاشت' },
          { en: 'Protected savings in all banks', es: 'Protegió los ahorros en todos los bancos', fa: 'پس‌انداز همهٔ بانک‌ها را محافظت کرد' }],
        answer: 0,
        why: { en: 'The 19th Amendment gave women across the country the right to vote in 1920.', es: 'La Enmienda 19 dio a las mujeres de todo el país el derecho al voto en 1920.', fa: 'ترمیم نزدهم در ۱۹۲۰ به زنان سراسر کشور حق رأی داد.' } },
      { q: { en: 'What was Prohibition?', es: '¿Qué fue la Prohibición?', fa: 'منع الکول چه بود؟' },
        choices: [
          { en: 'A ban on making and selling alcohol', es: 'Una ley contra hacer y vender alcohol', fa: 'منع ساختن و فروختن الکول' },
          { en: 'A ban on playing jazz in clubs', es: 'Una ley contra tocar jazz en clubes', fa: 'منع نواختن جاز در کلپ‌ها' },
          { en: 'A law that limited buying on credit', es: 'Una ley que limitaba comprar a crédito', fa: 'قانونی که خرید قرضی را محدود کرد' },
          { en: 'A program that gave jobs to youth', es: 'Un programa que daba empleo a jóvenes', fa: 'برنامه‌ای که به جوانان کار داد' }],
        answer: 0,
        why: { en: 'The 18th Amendment banned alcohol from 1920. The 21st Amendment ended Prohibition in 1933.', es: 'La Enmienda 18 prohibió el alcohol desde 1920. La Enmienda 21 terminó la Prohibición en 1933.', fa: 'ترمیم هجدهم از ۱۹۲۰ الکول را منع کرد. ترمیم بیست و یکم در ۱۹۳۳ آن را تمام کرد.' } },
      { q: { en: 'What was the Harlem Renaissance?', es: '¿Qué fue el Renacimiento de Harlem?', fa: 'رنسانس هارلم چه بود؟' },
        choices: [
          { en: 'A rise of Black art, music and writing', es: 'Un auge del arte, la música y la escritura negras', fa: 'رشد هنر، موسیقی و نوشتهٔ سیاه‌پوستان' },
          { en: 'A plan to build new banks in New York', es: 'Un plan para construir bancos nuevos en Nueva York', fa: 'نقشه‌ای برای ساختن بانک‌های نو در نیویارک' },
          { en: 'A law that limited new immigrants', es: 'Una ley que limitaba a los inmigrantes nuevos', fa: 'قانونی که مهاجران نو را محدود کرد' },
          { en: 'A big stock sale on Wall Street', es: 'Una gran venta de acciones en Wall Street', fa: 'فروش بزرگ سهام در وال استریت' }],
        answer: 0,
        why: { en: 'In the 1920s, writers like Langston Hughes and musicians like Duke Ellington made Harlem famous.', es: 'En los años veinte, escritores como Langston Hughes y músicos como Duke Ellington hicieron famoso a Harlem.', fa: 'در دههٔ ۱۹۲۰، نویسندگانی مثل لنگستن هیوز و نوازندگانی مثل دیوک الینگتن هارلم را مشهور ساختند.' } },
      { q: { en: 'What did the 1924 immigration law do?', es: '¿Qué hizo la ley de inmigración de 1924?', fa: 'قانون مهاجرت ۱۹۲۴ چه کرد؟' },
        choices: [
          { en: 'Set quotas so fewer immigrants could come', es: 'Puso cuotas para que vinieran menos inmigrantes', fa: 'سهمیه گذاشت تا مهاجران کمتری بیایند' },
          { en: 'Opened the borders to everyone who came', es: 'Abrió las fronteras a todos los que llegaban', fa: 'سرحدها را برای همه باز کرد' },
          { en: 'Gave free farmland to every immigrant', es: 'Dio tierra gratis a cada inmigrante', fa: 'به هر مهاجر زمین زراعتی مفت داد' },
          { en: 'Let only immigrants vote in elections', es: 'Dejó votar solo a los inmigrantes', fa: 'فقط به مهاجران اجازهٔ رأی داد' }],
        answer: 0,
        why: { en: 'The 1924 law set quotas. Far fewer people from Southern and Eastern Europe and Asia could come.', es: 'La ley de 1924 puso cuotas. Muchas menos personas del sur y este de Europa y de Asia pudieron venir.', fa: 'قانون ۱۹۲۴ سهمیه گذاشت. مردم خیلی کمتری از جنوب و شرق اروپا و آسیا توانستند بیایند.' } },
      { q: { en: 'Which was one cause of the stock market crash in 1929?', es: '¿Cuál fue una causa del desplome de la bolsa en 1929?', fa: 'کدام یک از علت‌های سقوط بازار سهام در ۱۹۲۹ بود؟' },
        choices: [
          { en: 'Buying stocks with borrowed money', es: 'Comprar acciones con dinero prestado', fa: 'خریدن سهام با پول قرضی' },
          { en: 'Women winning the right to vote', es: 'Que las mujeres ganaran el derecho al voto', fa: 'به دست آوردن حق رأی برای زنان' },
          { en: 'Too many families saving money', es: 'Demasiadas familias ahorrando dinero', fa: 'خانواده‌های زیادی که پول پس‌انداز کردند' },
          { en: 'The New Deal spending too much', es: 'Que el Nuevo Trato gastara demasiado', fa: 'خرج زیاد «معاملهٔ نو»' }],
        answer: 0,
        why: { en: 'Buying on margin, too much debt and making more than people could buy all led to the crash.', es: 'Comprar a margen, las muchas deudas y producir más de lo que se podía comprar causaron el desplome.', fa: 'خرید با پول قرضی، قرض زیاد و تولید بیشتر از توان خرید مردم، همه به سقوط رساند.' } },
      { q: { en: 'By 1933, about how many American workers had no job?', es: 'Para 1933, ¿cuántos trabajadores estadounidenses no tenían empleo, más o menos?', fa: 'تا ۱۹۳۳، تقریباً چند کارگر امریکایی کار نداشتند؟' },
        choices: [
          { en: 'About 1 in 4', es: 'Cerca de 1 de cada 4', fa: 'حدود ۱ از هر ۴' },
          { en: 'About 1 in 100', es: 'Cerca de 1 de cada 100', fa: 'حدود ۱ از هر ۱۰۰' },
          { en: 'About 3 in 4', es: 'Cerca de 3 de cada 4', fa: 'حدود ۳ از هر ۴' },
          { en: 'Almost nobody', es: 'Casi nadie', fa: 'تقریباً هیچ کس' }],
        answer: 0,
        why: { en: 'About 1 in 4 workers had no job. Many waited in bread lines. Some lived in shacks called Hoovervilles.', es: 'Cerca de 1 de cada 4 no tenía empleo. Muchos hacían fila por pan. Algunos vivían en chozas llamadas Hoovervilles.', fa: 'حدود ۱ از هر ۴ کارگر بیکار بود. بسیاری در صف نان ایستادند. بعضی در کلبه‌هایی به نام هوورویل زندگی کردند.' } },
      { q: { en: 'What was the Dust Bowl?', es: '¿Qué fue el Dust Bowl?', fa: '«کاسهٔ گرد و خاک» چه بود؟' },
        choices: [
          { en: 'Drought and dust storms on the Plains', es: 'Sequía y tormentas de polvo en las Llanuras', fa: 'خشکسالی و طوفان خاک در دشت‌ها' },
          { en: 'A popular dance in Harlem clubs', es: 'Un baile popular en los clubes de Harlem', fa: 'یک رقص مشهور در کلپ‌های هارلم' },
          { en: 'A New York bank that failed in 1929', es: 'Un banco de Nueva York que quebró en 1929', fa: 'یک بانک نیویارک که در ۱۹۲۹ ورشکست شد' },
          { en: 'A New Deal program to plant trees', es: 'Un programa del Nuevo Trato para plantar árboles', fa: 'یک برنامهٔ «معاملهٔ نو» برای درخت‌کاری' }],
        answer: 0,
        why: { en: 'In the 1930s, drought and dust storms ruined farms on the Great Plains. Many families moved west.', es: 'En los años treinta, la sequía y el polvo arruinaron granjas en las Grandes Llanuras. Muchas familias se fueron al oeste.', fa: 'در دههٔ ۱۹۳۰، خشکسالی و طوفان خاک فارم‌های دشت‌های بزرگ را خراب کرد. بسیاری از خانواده‌ها به غرب رفتند.' } },
      { q: { en: 'Which New Deal program protects the money people keep in banks?', es: '¿Qué programa del Nuevo Trato protege el dinero que la gente guarda en el banco?', fa: 'کدام برنامهٔ «معاملهٔ نو» پولی را که مردم در بانک می‌گذارند محافظت می‌کند؟' },
        choices: [
          { en: 'The FDIC, from 1933', es: 'La FDIC, de 1933', fa: 'اف‌دی‌آی‌سی، از ۱۹۳۳' },
          { en: 'The CCC, from 1933', es: 'El CCC, de 1933', fa: 'سی‌سی‌سی، از ۱۹۳۳' },
          { en: 'The WPA, from 1935', es: 'La WPA, de 1935', fa: 'دبلیو‌پی‌ای، از ۱۹۳۵' },
          { en: 'Social Security, from 1935', es: 'El Seguro Social, de 1935', fa: 'تأمین اجتماعی، از ۱۹۳۵' }],
        answer: 0,
        why: { en: 'The FDIC protects bank savings. The CCC and WPA gave jobs. Social Security helps older people.', es: 'La FDIC protege los ahorros. El CCC y la WPA dieron empleos. El Seguro Social ayuda a los mayores.', fa: 'اف‌دی‌آی‌سی پس‌انداز بانکی را محافظت می‌کند. سی‌سی‌سی و دبلیو‌پی‌ای کار دادند. تأمین اجتماعی به کلان‌سالان کمک می‌کند.' } }
    ]
  },

  learned: [
    { en: 'In the 1920s, people bought cars, radios and movie tickets, often on [[credit|credit]]. Black art and jazz grew in the [[harlem renaissance|Harlem Renaissance]].', es: 'En los años veinte, la gente compró carros, radios y boletos de cine, muchas veces a [[credit|crédito]]. El arte negro y el jazz crecieron en el [[harlem renaissance|Renacimiento de Harlem]].', fa: 'در دههٔ ۱۹۲۰، مردم موتر، رادیو و تکت سینما خریدند، اکثراً به [[credit|قرض]]. هنر سیاه‌پوستان و جاز در [[harlem renaissance|رنسانس هارلم]] رشد کرد.' },
    { en: 'The 1929 crash, too much debt and bank failures led to the [[depression|Great Depression]]. By 1933, about 1 in 4 workers had no job.', es: 'El desplome de 1929, las muchas deudas y la quiebra de bancos llevaron a la [[depression|Gran Depresión]]. Para 1933, cerca de 1 de cada 4 trabajadores no tenía empleo.', fa: 'سقوط ۱۹۲۹، قرض زیاد و ورشکست شدن بانک‌ها به [[depression|رکود بزرگ]] رساند. تا ۱۹۳۳، حدود ۱ از هر ۴ کارگر بیکار بود.' },
    { en: 'Roosevelt\'s [[new deal|New Deal]] brought relief, recovery and reform: the CCC, FDIC, WPA and Social Security. People disagreed about how big it should be.', es: 'El [[new deal|Nuevo Trato]] de Roosevelt trajo alivio, recuperación y reforma: el CCC, la FDIC, la WPA y el Seguro Social. La gente no estaba de acuerdo sobre su tamaño.', fa: '[[new deal|معاملهٔ نو]] روزولت کمک، بهبود و اصلاح آورد: سی‌سی‌سی، اف‌دی‌آی‌سی، دبلیو‌پی‌ای و تأمین اجتماعی. مردم دربارهٔ بزرگی آن هم‌نظر نبودند.' }
  ],
  reflect: {
    q: { en: 'In hard times, how do families and neighbors help each other? Give one example.', es: 'En tiempos difíciles, ¿cómo se ayudan las familias y los vecinos? Da un ejemplo.', fa: 'در وقت‌های سخت، خانواده‌ها و همسایه‌ها چطور به همدیگر کمک می‌کنند؟ یک مثال بده.' },
    starter: { en: 'In hard times, people help each other by', es: 'En tiempos difíciles, la gente se ayuda', fa: 'در وقت‌های سخت، مردم به همدیگر کمک می‌کنند با' }
  }
};
