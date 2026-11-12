/* TRAILWALKER · Episode 6.2 · The Gilded Age and Inventions (VUS)
   Pittsburgh, Pennsylvania, 1892: a steel city where three rivers meet.
   The Allegheny River runs along the north edge, the Monongahela along the south edge,
   and they meet at the Point (west edge) to make the Ohio River.
   NW: a church (R roof over D stone walls, door 6,5) and the telephone office (J, door 11,5).
   NE: the railroad yard (two tracks, a station, freight stalls).
   SW: a shop with new electric lights (Q, door 6,14), a market and the riverboat dock (k, x 8).
   SE: workers' row houses (doors 18,13 and 21,13) and the steel mill (X) on the Monongahela. */
window.EPISODE = {
  id: '6.2',
  realm: 6,
  sol: 'VUS',
  title: { en: 'The Gilded Age and Inventions', es: 'La Edad Dorada y los inventos', fa: 'عصر طلاکاری و اختراع‌ها' },
  place: { en: 'Pittsburgh, 1892', es: 'Pittsburgh, 1892', fa: 'پیتسبرگ، ۱۸۹۲' },
  intro: [
    { en: 'The Grump filled Pittsburgh with smoke. People forgot how [[invention|inventions]] changed their lives.',
      es: 'El Gruñón llenó Pittsburgh de humo. La gente olvidó cómo los [[invention|inventos]] cambiaron su vida.',
      fa: 'غرغرو پیتسبرگ را پر از دود کرد. مردم فراموش کردند [[invention|اختراع‌ها]] زندگی‌شان را چطور تغییر داد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  scenes: {
    at: [-80.00, 40.44],
    year: 1892,
    start: [
      { en: 'In 1892, Pittsburgh was a busy steel city where three rivers meet.',
        es: 'En 1892, Pittsburgh era una ciudad del acero donde se juntan tres ríos.',
        fa: 'در سال ۱۸۹۲، پیتسبرگ شهر پرکار فولاد بود، جایی که سه دریا به هم می‌رسند.' },
      { en: 'New inventions, like the telephone and the electric light, were changing daily life.',
        es: 'Inventos nuevos, como el teléfono y la luz eléctrica, cambiaban la vida diaria.',
        fa: 'اختراع‌های نو، مثل تیلفون و چراغ برق، زندگی روزمره را تغییر می‌دادند.' },
      { en: 'A few owners grew very rich. Many workers had long days and low pay.',
        es: 'Unos pocos dueños se hicieron muy ricos. Muchos obreros tenían días largos y poco pago.',
        fa: 'چند مالک بسیار ثروتمند شدند. بسیاری از کارگران روزهای دراز و مزد کم داشتند.' }
    ],
    page: { en: 'Today, few steel mills are left. Pittsburgh is known for hospitals and universities.',
      es: 'Hoy quedan pocas fábricas de acero. Pittsburgh es conocida por sus hospitales y universidades.',
      fa: 'امروز فابریکه‌های فولاد کمی باقی مانده. پیتسبرگ به شفاخانه‌ها و پوهنتون‌هایش مشهور است.' },
    guess: {
      q: { en: 'In 1892, how did most families light their homes at night?', es: 'En 1892, ¿cómo iluminaban su casa de noche la mayoría de las familias?', fa: 'در سال ۱۸۹۲، بیشتر خانواده‌ها شب خانهٔ خود را چطور روشن می‌کردند؟' },
      choices: [
        { t: { en: '🕯️ Gas or oil lamps', es: '🕯️ Lámparas de gas o aceite', fa: '🕯️ چراغ گاز یا تیل' }, ok: true },
        { t: { en: '💡 Electric light bulbs', es: '💡 Focos eléctricos', fa: '💡 گروپ برق' } }
      ],
      why: { en: 'The light bulb was new. Most homes got electric power many years later.', es: 'El foco era nuevo. La mayoría de las casas tuvo electricidad muchos años después.', fa: 'گروپ برق تازه بود. بیشتر خانه‌ها سال‌ها بعد برق گرفتند.' }
    },
    next: {
      q: { en: 'Next: Chicago, 1906. A book showed dirty meat factories. What happened?', es: 'Ahora: Chicago, 1906. Un libro mostró fábricas de carne sucias. ¿Qué pasó?', fa: 'بعدی: شیکاگو، ۱۹۰۶. یک کتاب فابریکه‌های کثیف گوشت را نشان داد. چه شد؟' },
      choices: [
        { t: { en: 'New food safety laws', es: 'Nuevas leyes de comida', fa: 'قانون‌های نو برای غذا' }, ok: true },
        { t: { en: 'Nothing changed', es: 'Nada cambió', fa: 'هیچ چیز تغییر نکرد' } }
      ],
      why: { en: 'Readers were angry. In 1906, Congress passed laws to check meat and food.', es: 'Los lectores se enojaron. En 1906, el Congreso aprobó leyes para revisar la carne y la comida.', fa: 'خواننده‌ها قهر شدند. در ۱۹۰۶، کانگرس قانون‌هایی برای بررسی گوشت و غذا تصویب کرد.' }
    }
  },

  houses: [
    { at: [6, 5], name: { en: 'Mrs. Ruth Evans', es: 'Señora Ruth Evans', fa: 'خانم روت ایوانز' },
      look: { skin: 1, hair: '#8a8070', shirt: '#3a3a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Our church gives soup to families when a worker is hurt at the mill.', es: 'Nuestra iglesia da sopa a las familias cuando un obrero se lastima en la fábrica.', fa: 'کلیسای ما وقتی کارگری در فابریکه زخمی شود، به خانواده‌اش شوربا می‌دهد.' },
        { en: 'In 1892, no law makes owners pay workers who get hurt.', es: 'En 1892, ninguna ley obliga a los dueños a pagar a los obreros heridos.', fa: 'در سال ۱۸۹۲، هیچ قانونی مالکان را مجبور نمی‌کند به کارگر زخمی پول بدهند.' },
        { en: 'Mr. Carnegie gives money for libraries. Some workers wish for higher pay instead.', es: 'El señor Carnegie da dinero para bibliotecas. Algunos obreros preferirían un pago más alto.', fa: 'آقای کارنگی برای کتابخانه‌ها پول می‌دهد. بعضی کارگران به جایش مزد بیشتر می‌خواهند.' }
      ] },
    { at: [11, 5], name: { en: 'Kate Byrne', es: 'Kate Byrne', fa: 'کیت بِرن' },
      look: { skin: 1, hair: '#b0502a', shirt: '#f0f0f0', pants: '#2a2a4a', style: 'bun' },
      lines: [
        { en: 'I am a telephone operator. I connect each call by hand.', es: 'Soy operadora de teléfono. Conecto cada llamada con la mano.', fa: 'من کارمند تیلفون هستم. هر تماس را با دست وصل می‌کنم.' },
        { en: 'Most operators are young women. It is a new kind of job for us.', es: 'La mayoría de las operadoras son mujeres jóvenes. Es un trabajo nuevo para nosotras.', fa: 'بیشتر کارمندان تیلفون زنان جوان هستند. این برای ما یک نوع کار نو است.' }
      ] },
    { at: [6, 14], name: { en: 'Mr. Hughes', es: 'Señor Hughes', fa: 'آقای هیوز' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#6a2a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'My shop has electric lights! People stop at my window just to look.', es: '¡Mi tienda tiene luces eléctricas! La gente se para en mi ventana solo para mirar.', fa: 'دکان من چراغ برق دارد! مردم فقط برای تماشا کنار کلکینم می‌ایستند.' },
        { en: 'Electric light is bright and safe. It does not smoke like a gas lamp.', es: 'La luz eléctrica es brillante y segura. No echa humo como una lámpara de gas.', fa: 'چراغ برق روشن و بی‌خطر است. مثل چراغ گاز دود نمی‌کند.' }
      ] },
    { at: [18, 13], name: { en: 'Anna Novak', es: 'Anna Novak', fa: 'آنا نوواک' },
      look: { skin: 1, hair: '#d8b060', shirt: '#4a6a3a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'We came from Slovakia, in Europe. My husband works at the steel mill.', es: 'Vinimos de Eslovaquia, en Europa. Mi esposo trabaja en la fábrica de acero.', fa: 'ما از سلواکیا در اروپا آمدیم. شوهرم در فابریکهٔ فولاد کار می‌کند.' },
        { en: 'He works 12 hours a day. Some weeks he works all 7 days.', es: 'Trabaja 12 horas al día. Algunas semanas trabaja los 7 días.', fa: 'او روزی ۱۲ ساعت کار می‌کند. بعضی هفته‌ها هر ۷ روز کار می‌کند.' },
        { en: 'Our son is 12. He already sorts coal for a little pay.', es: 'Nuestro hijo tiene 12 años. Ya separa carbón por un pago pequeño.', fa: 'پسر ما ۱۲ ساله است. او همین حالا برای مزد کم زغال‌سنگ جدا می‌کند.' }
      ] },
    { at: [21, 13], name: { en: 'Grandma Hattie', es: 'Abuela Hattie', fa: 'مادرکلان هتی' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#7a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'My family moved here from Virginia to find better work.', es: 'Mi familia se mudó aquí desde Virginia para buscar mejor trabajo.', fa: 'خانوادهٔ من برای کار بهتر از ویرجینیا به اینجا آمد.' },
        { en: 'Lewis Latimer is a Black inventor. His parents escaped slavery in Virginia.', es: 'Lewis Latimer es un inventor negro. Sus padres escaparon de la esclavitud en Virginia.', fa: 'لوئیس لتیمر یک مخترع سیاه‌پوست است. پدر و مادرش از بردگی در ویرجینیا فرار کردند.' },
        { en: 'He made the thin thread inside light bulbs last much longer.', es: 'Él hizo que el hilo fino dentro de los focos durara mucho más.', fa: 'او تار باریک داخل گروپ برق را بسیار بادوام‌تر ساخت.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. Water on three sides: the Allegheny (rows 0-1), the Ohio (x 0-1) and
     the Monongahela (rows 20-21). Hills (K) on the east. Main street on row 10, Smithfield-style street on x 15. */
  map: [
    '================================',
    '=~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '=~ssssssssssssslsssssssssssssssK',
    '=~..RRRRR.JJJJ.l..mm....JJJJ.X.K',
    '=~..RRRRR.JJJJ.l........hhhh...K',
    '=~..DDdDD.hdhh.l---------------K',
    '=~....l....l...l...............K',
    '=~....l........l---------------K',
    '=~.x..l........l...............K',
    '=~....l........l.x.............K',
    '=~lllllllllllllllllllllllllllllK',
    '=~.............l......x........K',
    '=~..QQQQ.......l.RRRRRR.XXXXXX.K',
    '=~..QQQQ.mmm...l.hdhhdh:XXXXXX.K',
    '=~..hhdh.......l.......:XXXXXX.K',
    '=~....l........l.......:XXXXXX.K',
    '=~.............l.......:XXXXXX.K',
    '=~..........T..l.......::::::::K',
    '=~.T...........l...............K',
    '=~ssssssksssssslsssssssssssksssK',
    '=~~~~~~~k~~~~~~~~~~~~~~~~~~k~~~~',
    '================================'
  ],
  start: [15, 10],

  finds: [
    { clueAt: [13, 15], at: [13, 19], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south to the bank of the Monongahela River.', es: 'Desde esta nota, camina 4 pasos al sur hasta la orilla del río Monongahela.', fa: 'از این یادداشت، ۴ قدم به جنوب تا کنار دریای مونونگاهیلا برو.' },
      text: { en: 'Riverboats carried coal and steel from Pittsburgh down to the Ohio River. Here is an old coin.', es: 'Los barcos de río llevaban carbón y acero de Pittsburgh hasta el río Ohio. Aquí hay una moneda antigua.', fa: 'کشتی‌های دریایی زغال‌سنگ و فولاد را از پیتسبرگ تا دریای اوهایو می‌بردند. اینجا یک سکهٔ کهنه است.' } },
    { clueAt: [30, 11], at: [30, 15], decor: 'fossil',
      clue: { en: 'From this note, walk 4 steps south, along the east side of the steel mill.', es: 'Desde esta nota, camina 4 pasos al sur, por el lado este de la fábrica de acero.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، در طرف شرق فابریکهٔ فولاد.' },
      text: { en: 'Coal from these hills fed the mill fires. This lump of coal has a fern fossil!', es: 'El carbón de estos cerros alimentaba los hornos. ¡Este pedazo de carbón tiene un fósil de helecho!', fa: 'زغال‌سنگ این تپه‌ها آتش فابریکه را روشن نگه می‌داشت. این تکه زغال فسیل سرخس دارد!' } }
  ],

  words: {
    invention: { en: 'a new machine or idea that someone makes for the first time', es: 'una máquina o idea nueva que alguien hace por primera vez', fa: 'ماشین یا فکر نو که کسی برای بار اول می‌سازد' },
    'gilded age': { en: 'about 1870 to 1900: shiny wealth on top, hard lives below', es: 'más o menos de 1870 a 1900: riqueza brillante arriba, vidas duras abajo', fa: 'تقریباً ۱۸۷۰ تا ۱۹۰۰: ثروت براق در بالا، زندگی سخت در پایین' },
    'bessemer process': { en: 'a way to blow air through hot iron to make steel fast and cheap', es: 'una forma de soplar aire por hierro caliente para hacer acero rápido y barato', fa: 'راهی که در آهن داغ هوا می‌دمند تا فولاد را زود و ارزان بسازند' },
    monopoly: { en: 'one company controls almost all of a product, so it can set prices', es: 'una empresa controla casi todo un producto, así que puede poner los precios', fa: 'یک شرکت تقریباً تمام یک جنس را در دست دارد و قیمت را خودش تعیین می‌کند' },
    'labor union': { en: 'a group of workers who join together to ask for better pay and safer work', es: 'un grupo de obreros que se unen para pedir mejor pago y trabajo más seguro', fa: 'گروهی از کارگران که با هم یکجا می‌شوند تا مزد بهتر و کار بی‌خطرتر بخواهند' },
    strike: { en: 'when workers stop working together until owners listen to them', es: 'cuando los obreros dejan de trabajar juntos hasta que los dueños los escuchan', fa: 'وقتی کارگران با هم کار را متوقف می‌کنند تا مالکان به آن‌ها گوش بدهند' },
    'child labor': { en: 'children working long hours in mills, mines or streets instead of going to school', es: 'niños que trabajan muchas horas en fábricas, minas o calles en vez de ir a la escuela', fa: 'کار کودکان برای ساعت‌های طولانی در فابریکه، معدن یا سرک به جای رفتن به مکتب' },
    'transcontinental railroad': { en: 'the railroad that joined the east and west coasts of the U.S. in 1869', es: 'el ferrocarril que unió las costas este y oeste de EE. UU. en 1869', fa: 'خط آهنی که در سال ۱۸۶۹ سواحل شرق و غرب امریکا را به هم وصل کرد' }
  },

  npcs: [
    {
      x: 21, y: 16,
      name: { en: 'Jozef', es: 'Jozef', fa: 'یوزف' },
      role: { en: 'Steelworker', es: 'Obrero del acero', fa: 'کارگر فولاد' },
      look: { skin: 1, hair: '#5a4020', shirt: '#6a5a4a', pants: '#2a2a2a', hat: '#3a3a3a' },
      lines: [
        { en: 'I make steel. The [[bessemer process|Bessemer process]] blows air through hot iron.', es: 'Hago acero. El [[bessemer process|proceso Bessemer]] sopla aire por el hierro caliente.', fa: 'من فولاد می‌سازم. [[bessemer process|روش بِسِمِر]] در آهن داغ هوا می‌دمد.' },
        { en: 'Now steel is fast and cheap. It builds rails, bridges and tall buildings.', es: 'Ahora el acero es rápido y barato. Con él se hacen rieles, puentes y edificios altos.', fa: 'حالا فولاد زود و ارزان ساخته می‌شود. از آن ریل، پل و تعمیرهای بلند می‌سازند.' },
        { en: 'But the work is hot and dangerous. Many of us join a [[labor union|labor union]].', es: 'Pero el trabajo es caliente y peligroso. Muchos nos unimos a un [[labor union|sindicato]].', fa: 'اما کار داغ و خطرناک است. بسیاری از ما عضو [[labor union|اتحادیهٔ کارگران]] می‌شویم.' },
        { en: 'This year, workers at Homestead went on [[strike|strike]]. There was fighting. People died.', es: 'Este año, los obreros de Homestead hicieron [[strike|huelga]]. Hubo peleas. Murieron personas.', fa: 'امسال کارگران هومستد [[strike|اعتصاب]] کردند. جنگ شد. چند نفر مردند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did many steelworkers join a labor union?', es: '¿Por qué muchos obreros del acero se unieron a un sindicato?', fa: 'چرا بسیاری از کارگران فولاد عضو اتحادیهٔ کارگران شدند؟' },
        choices: [
          { ok: true, t: { en: 'To ask together for better pay and hours', es: 'Para pedir juntos mejor pago y horario', fa: 'تا با هم مزد و ساعت کار بهتر بخواهند' },
            why: { en: 'Yes! One worker alone has little power. Together, workers can ask for more.', es: '¡Sí! Un obrero solo tiene poco poder. Juntos, los obreros pueden pedir más.', fa: 'بله! یک کارگر تنها قدرت کمی دارد. کارگران با هم می‌توانند بیشتر بخواهند.' } },
          { t: { en: 'To buy the whole steel mill from its owner', es: 'Para comprarle toda la fábrica a su dueño', fa: 'تا تمام فابریکهٔ فولاد را از مالکش بخرند' },
            why: { en: 'Workers could not buy a huge mill. A union asked for fair pay and safer work.', es: 'Los obreros no podían comprar una fábrica enorme. El sindicato pedía pago justo y trabajo seguro.', fa: 'کارگران نمی‌توانستند فابریکهٔ بزرگ را بخرند. اتحادیه مزد عادلانه و کار بی‌خطر می‌خواست.' } },
          { t: { en: 'To get free train tickets out west', es: 'Para recibir boletos de tren gratis al oeste', fa: 'تا تکت مفت ریل به غرب بگیرند' },
            why: { en: 'Unions did not give train tickets. They asked owners for better pay and hours.', es: 'Los sindicatos no daban boletos de tren. Pedían a los dueños mejor pago y horario.', fa: 'اتحادیه‌ها تکت ریل نمی‌دادند. از مالکان مزد و ساعت کار بهتر می‌خواستند.' } }
        ]
      }
    },
    {
      x: 9, y: 7,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Typist', es: 'Mecanógrafa', fa: 'تایپیست' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2f6f9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I type letters on a typewriter. It is much faster than writing by hand.', es: 'Escribo cartas en una máquina de escribir. Es mucho más rápido que a mano.', fa: 'من با ماشین تایپ نامه می‌نویسم. از نوشتن با دست بسیار زودتر است.' },
        { en: 'In 1876, Alexander Graham Bell got a patent for the telephone.', es: 'En 1876, Alexander Graham Bell obtuvo la patente del teléfono.', fa: 'در سال ۱۸۷۶، الکساندر گراهام بِل حق ثبت تیلفون را گرفت.' },
        { en: 'Before, a letter took days. Now my boss talks across town in seconds.', es: 'Antes, una carta tardaba días. Ahora mi jefe habla con otro lado de la ciudad en segundos.', fa: 'پیش‌تر نامه چند روز وقت می‌گرفت. حالا رئیسم در چند ثانیه با آن سر شهر گپ می‌زند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the telephone change life?', es: '¿Cómo cambió la vida el teléfono?', fa: 'تیلفون زندگی را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'People could talk far apart, right away', es: 'La gente podía hablar de lejos, al instante', fa: 'مردم می‌توانستند از دور فوراً گپ بزنند' },
            why: { en: 'Right! A voice traveled over wires in seconds. Letters took days.', es: '¡Correcto! Una voz viajaba por cables en segundos. Las cartas tardaban días.', fa: 'درست! صدا در چند ثانیه از راه سیم می‌رفت. نامه چند روز وقت می‌گرفت.' } },
          { t: { en: 'People stopped working in big offices', es: 'La gente dejó de trabajar en oficinas grandes', fa: 'مردم دیگر در دفترهای بزرگ کار نکردند' },
            why: { en: 'Offices grew bigger, not smaller. Phones helped them do business faster.', es: 'Las oficinas crecieron, no se achicaron. Los teléfonos las ayudaron a trabajar más rápido.', fa: 'دفترها بزرگ‌تر شدند، نه کوچک‌تر. تیلفون به آن‌ها کمک کرد زودتر کار کنند.' } },
          { t: { en: 'People could see each other on a screen', es: 'La gente podía verse en una pantalla', fa: 'مردم می‌توانستند یکدیگر را روی صفحه ببینند' },
            why: { en: 'Early phones carried only voices. Screens came many years later.', es: 'Los primeros teléfonos solo llevaban voces. Las pantallas llegaron muchos años después.', fa: 'تیلفون‌های اول فقط صدا را می‌بردند. صفحه‌ها سال‌ها بعد آمدند.' } }
        ]
      }
    },
    {
      x: 22, y: 6,
      name: { en: 'Tom Riley', es: 'Tom Riley', fa: 'تام رایلی' },
      role: { en: 'Railroad brakeman', es: 'Guardafrenos del tren', fa: 'کارگر برک ریل' },
      look: { skin: 1, hair: '#a0401a', shirt: '#2a3a5a', pants: '#3a3a3a', hat: '#2a2a2a' },
      lines: [
        { en: 'My uncle came from Ireland. He helped build the [[transcontinental railroad|transcontinental railroad]].', es: 'Mi tío vino de Irlanda. Ayudó a construir el [[transcontinental railroad|ferrocarril transcontinental]].', fa: 'کاکایم از آیرلند آمد. او در ساختن [[transcontinental railroad|خط آهن سراسری]] کمک کرد.' },
        { en: 'Thousands of Chinese workers built it too. The hardest parts were through the mountains.', es: 'Miles de obreros chinos también lo construyeron. Lo más difícil fue cruzar las montañas.', fa: 'هزاران کارگر چینی هم آن را ساختند. سخت‌ترین بخش‌ها از میان کوه‌ها بود.' },
        { en: 'It was finished in 1869.', es: 'Se terminó en 1869.', fa: 'در سال ۱۸۶۹ تمام شد.' },
        { en: 'A wagon trip west took months. The train took about a week.', es: 'Un viaje al oeste en carreta tardaba meses. El tren, como una semana.', fa: 'سفر به غرب با گادی ماه‌ها طول می‌کشید. با ریل حدود یک هفته.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the transcontinental railroad change travel?', es: '¿Cómo cambió los viajes el ferrocarril transcontinental?', fa: 'خط آهن سراسری سفر را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'Coast to coast in days, not months', es: 'De costa a costa en días, no en meses', fa: 'از ساحل تا ساحل در چند روز، نه چند ماه' },
            why: { en: 'Yes! People and goods crossed the country much faster after 1869.', es: '¡Sí! Personas y mercancías cruzaban el país mucho más rápido después de 1869.', fa: 'بله! بعد از ۱۸۶۹ مردم و جنس‌ها بسیار زودتر از کشور می‌گذشتند.' } },
          { t: { en: 'Only ships could carry goods west', es: 'Solo los barcos podían llevar cosas al oeste', fa: 'فقط کشتی‌ها می‌توانستند جنس را به غرب ببرند' },
            why: { en: 'The railroad carried goods west over land. Ships were no longer the only way.', es: 'El ferrocarril llevaba mercancías al oeste por tierra. Los barcos ya no eran la única forma.', fa: 'خط آهن جنس‌ها را از راه خشکه به غرب می‌برد. کشتی دیگر تنها راه نبود.' } },
          { t: { en: 'Travel west became slower and harder', es: 'Viajar al oeste se volvió más lento y difícil', fa: 'سفر به غرب کندتر و سخت‌تر شد' },
            why: { en: 'It was the opposite. The train made the trip faster and safer.', es: 'Fue al revés. El tren hizo el viaje más rápido y seguro.', fa: 'برعکس بود. ریل سفر را زودتر و بی‌خطرتر ساخت.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 8, text: { en: 'PITTSBURGH · 1892 · The Allegheny and Monongahela rivers meet here to make the Ohio River.', es: 'PITTSBURGH · 1892 · Los ríos Allegheny y Monongahela se juntan aquí y forman el río Ohio.', fa: 'پیتسبرگ · ۱۸۹۲ · دریاهای الگنی و مونونگاهیلا اینجا به هم می‌رسند و دریای اوهایو را می‌سازند.' } },
    { x: 17, y: 9, text: { en: 'RAILROAD YARD · Trains carry coal in and steel out, to cities all over the country.', es: 'PATIO DEL FERROCARRIL · Los trenes traen carbón y se llevan acero a ciudades de todo el país.', fa: 'ایستگاه ریل · ریل‌ها زغال‌سنگ می‌آورند و فولاد را به شهرهای سراسر کشور می‌برند.' } },
    { x: 22, y: 11, text: { en: 'STEEL MILL · Smoke all day and night. People call Pittsburgh "the Smoky City."', es: 'FÁBRICA DE ACERO · Humo de día y de noche. Llaman a Pittsburgh "la Ciudad del Humo".', fa: 'فابریکهٔ فولاد · شب و روز دود. مردم پیتسبرگ را «شهر دودی» می‌گویند.' } }
  ],

  /* the quest: Nora the reporter (NW) lost her typed story -> Danny the newsboy in the rail yard (NE)
     saw it blow away -> find it on the riverbank east of the riverboat dock (SW) -> back to Nora */
  quest: {
    stat: 'loc',
    title: { en: 'The Lost News Story', es: 'La noticia perdida', fa: 'خبر گم‌شده' },
    giver: {
      x: 4, y: 7,
      name: { en: 'Nora', es: 'Nora', fa: 'نورا' },
      role: { en: 'Newspaper reporter', es: 'Reportera', fa: 'خبرنگار' },
      look: { skin: 2, hair: '#3a2416', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'bun', hat: '#2a2a2a' },
      lines: [
        { en: 'Some call rich owners "captains of industry." Others call them "robber barons."', es: 'Algunos llaman a los dueños ricos "capitanes de la industria". Otros, "barones ladrones".', fa: 'بعضی مالکان ثروتمند را «ناخدایان صنعت» می‌نامند. بعضی دیگر «اشراف دزد».' },
        { en: 'I typed a story about it. The smoky wind blew my page away!', es: 'Escribí una noticia sobre eso. ¡El viento con humo se llevó mi hoja!', fa: 'دربارهٔ آن یک خبر تایپ کردم. باد دودی ورقم را برد!' },
        { en: 'Danny the newsboy sells papers in the rail yard. Maybe he saw it.', es: 'Danny, el niño que vende periódicos, está en el patio del tren. Quizás la vio.', fa: 'دنی، بچهٔ روزنامه‌فروش، در ایستگاه ریل است. شاید آن را دیده باشد.' }
      ],
      wait: { en: 'Danny sells papers in the rail yard, east of the main street.', es: 'Danny vende periódicos en el patio del tren, al este de la calle principal.', fa: 'دنی در ایستگاه ریل، شرق سرک اصلی، روزنامه می‌فروشد.' },
      thanks: { en: 'My story! It says big companies must follow the Sherman Antitrust Act. Thank you!', es: '¡Mi noticia! Dice que las grandes empresas deben cumplir la Ley Sherman. ¡Gracias!', fa: 'خبرم! می‌گوید شرکت‌های بزرگ باید از قانون ضد انحصار شرمن پیروی کنند. تشکر!' }
    },
    contact: {
      x: 19, y: 8,
      name: { en: 'Danny', es: 'Danny', fa: 'دنی' },
      role: { en: 'Newsboy, age 11', es: 'Vendedor de periódicos, 11 años', fa: 'روزنامه‌فروش، ۱۱ ساله' },
      look: { skin: 4, hair: '#1a1008', shirt: '#7a6a4a', pants: '#3a2a1a', hat: '#5a4a3a' },
      lines: [
        { en: 'I sell papers from dawn to dark. I have no time for school.', es: 'Vendo periódicos desde el amanecer hasta la noche. No tengo tiempo para la escuela.', fa: 'از صبح زود تا تاریکی روزنامه می‌فروشم. برای مکتب وقت ندارم.' },
        { en: 'A page blew to the riverbank. Look 2 steps east of the riverboat dock.', es: 'Una hoja voló a la orilla del río. Busca 2 pasos al este del muelle.', fa: 'یک ورق به کنار دریا پرید. ۲ قدم شرقِ بندرگاه را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [10, 19],
      hint: { en: 'riverbank: 2 steps east of the riverboat dock', es: 'orilla: 2 pasos al este del muelle', fa: 'کنار دریا: ۲ قدم شرقِ بندرگاه' },
      found: { en: 'There it is, on the riverbank! Nora\'s typed page about big business.', es: '¡Ahí está, en la orilla! La hoja de Nora sobre las grandes empresas.', fa: 'آنجاست، کنار دریا! ورق تایپ‌شدهٔ نورا دربارهٔ شرکت‌های بزرگ.' },
      item: { icon: '📰', name: { en: 'Nora\'s news story', es: 'La noticia de Nora', fa: 'خبر نورا' } }
    }
  },

  scraps: [[2, 2], [30, 3], [30, 18]],
  smudges: [[20, 3], [9, 17]],

  challenge: {
    at: [13, 12],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // communication by the telephone office, light and power by the electric light shop, moving by the rail yard
    zones: [{ bin: 'talk', x: 10, y: 7, w: 4, h: 2 }, { bin: 'light', x: 2, y: 16, w: 4, h: 2 }, { bin: 'move', x: 25, y: 8, w: 4, h: 2 }],
    stat: 'pla',
    title: { en: 'How did it change life?', es: '¿Cómo cambió la vida?', fa: 'زندگی را چطور تغییر داد؟' },
    intro: { en: 'The Grump hid the inventions in smoke. Carry each card to the area it changed.',
      es: 'El Gruñón escondió los inventos en el humo. Lleva cada tarjeta al área que cambió.',
      fa: 'غرغرو اختراع‌ها را در دود پنهان کرد. هر کارت را به ساحه‌ای ببر که آن را تغییر داد.' },
    bins: [
      { id: 'talk', icon: '📞', label: { en: 'Communication', es: 'Comunicación', fa: 'ارتباط' },
        sub: { en: 'sending words and messages', es: 'enviar palabras y mensajes', fa: 'فرستادن حرف و پیام' } },
      { id: 'light', icon: '💡', label: { en: 'Light and power', es: 'Luz y energía', fa: 'روشنی و برق' },
        sub: { en: 'lighting homes and running machines', es: 'iluminar casas y mover máquinas', fa: 'روشن کردن خانه و چرخاندن ماشین' } },
      { id: 'move', icon: '🚂', label: { en: 'Moving people and goods', es: 'Mover personas y mercancías', fa: 'بردن مردم و جنس' },
        sub: { en: 'travel and shipping', es: 'viajes y transporte', fa: 'سفر و انتقال' } }
    ],
    items: [
      { bin: 'talk', icon: '☎️', t: { en: 'The telephone (Bell, 1876)', es: 'El teléfono (Bell, 1876)', fa: 'تیلفون (بِل، ۱۸۷۶)' },
        why: { en: 'The telephone carried voices over wires. People could talk across a city in seconds.', es: 'El teléfono llevaba voces por cables. La gente podía hablar de un lado a otro de la ciudad.', fa: 'تیلفون صدا را از راه سیم می‌برد. مردم در چند ثانیه در سراسر شهر گپ می‌زدند.' } },
      { bin: 'talk', icon: '⌨️', t: { en: 'The typewriter (sold from 1874)', es: 'La máquina de escribir (a la venta desde 1874)', fa: 'ماشین تایپ (از ۱۸۷۴ فروخته شد)' },
        why: { en: 'Typewriters made letters fast and easy to read. Many women got office jobs as typists.', es: 'Las máquinas de escribir hacían cartas rápidas y claras. Muchas mujeres trabajaron de mecanógrafas.', fa: 'ماشین تایپ نامه‌ها را زود و خوانا می‌ساخت. بسیاری از زنان تایپیست شدند.' } },
      { bin: 'light', icon: '💡', t: { en: 'Edison\'s light bulb (1879)', es: 'El foco de Edison (1879)', fa: 'گروپ برق ادیسون (۱۸۷۹)' },
        why: { en: 'Thomas Edison made a practical light bulb. Homes and streets could be bright at night.', es: 'Thomas Edison hizo un foco práctico. Casas y calles podían estar iluminadas de noche.', fa: 'توماس ادیسون یک گروپ کارآمد ساخت. خانه‌ها و سرک‌ها شب روشن شدند.' } },
      { bin: 'light', icon: '🧵', t: { en: 'Latimer\'s longer-lasting carbon thread', es: 'El hilo de carbón de Latimer, que dura más', fa: 'تار کاربنی بادوام لتیمر' },
        why: { en: 'Lewis Latimer improved the thin thread in bulbs. Bulbs lasted longer and cost less.', es: 'Lewis Latimer mejoró el hilo fino del foco. Los focos duraban más y costaban menos.', fa: 'لوئیس لتیمر تار باریک گروپ را بهتر ساخت. گروپ‌ها بادوام‌تر و ارزان‌تر شدند.' } },
      { bin: 'light', icon: '⚡', t: { en: 'AC electric power (Tesla and Westinghouse)', es: 'La corriente alterna (Tesla y Westinghouse)', fa: 'برق متناوب (تِسلا و وستینگهاوس)' },
        why: { en: 'This kind of electricity could travel far on wires. It powered lights and machines.', es: 'Esta clase de electricidad podía viajar lejos por cables. Movía luces y máquinas.', fa: 'این نوع برق می‌توانست از راه سیم دور برود. چراغ‌ها و ماشین‌ها را روشن و روان می‌کرد.' } },
      { bin: 'move', icon: '🛤️', t: { en: 'The transcontinental railroad (1869)', es: 'El ferrocarril transcontinental (1869)', fa: 'خط آهن سراسری (۱۸۶۹)' },
        why: { en: 'Trains joined the east and west coasts. A trip of months became about a week.', es: 'Los trenes unieron las costas este y oeste. Un viaje de meses pasó a ser de una semana.', fa: 'ریل سواحل شرق و غرب را وصل کرد. سفر چند ماهه حدود یک هفته شد.' } },
      { bin: 'move', icon: '🚃', t: { en: 'The electric streetcar (Richmond, Virginia, 1888)', es: 'El tranvía eléctrico (Richmond, Virginia, 1888)', fa: 'ترام برقی (ریچموند، ویرجینیا، ۱۸۸۸)' },
        why: { en: 'Richmond had one of the first big electric streetcar lines. Workers could live farther from work.', es: 'Richmond tuvo una de las primeras grandes líneas de tranvía eléctrico. Los obreros podían vivir más lejos.', fa: 'ریچموند یکی از اولین خط‌های بزرگ ترام برقی را داشت. کارگران می‌توانستند دورتر زندگی کنند.' } },
      { bin: 'move', icon: '🛑', t: { en: 'The train air brake (Westinghouse, 1869)', es: 'El freno de aire del tren (Westinghouse, 1869)', fa: 'برک هوایی ریل (وستینگهاوس، ۱۸۶۹)' },
        why: { en: 'Air brakes stopped long trains safely. Trains could be longer, faster and safer.', es: 'Los frenos de aire detenían trenes largos con seguridad. Los trenes podían ser más largos y rápidos.', fa: 'برک هوایی ریل‌های دراز را بی‌خطر متوقف می‌کرد. ریل‌ها درازتر، تیزتر و بی‌خطرتر شدند.' } }
    ],
    success: { en: 'The smoke clears! New inventions changed how people talked, lit their homes and traveled.', es: '¡El humo se va! Los inventos cambiaron cómo la gente hablaba, iluminaba su casa y viajaba.', fa: 'دود کنار رفت! اختراع‌های نو گپ زدن، روشن کردن خانه و سفر مردم را تغییر دادند.' }
  },

  boss: {
    at: [19, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Smoky Grump', es: 'El Gruñón Humeante', fa: 'غرغروی دودی' },
    appear: { en: 'The Smoky Grump is hiding in the smoke by the steel mill!', es: '¡El Gruñón Humeante se esconde en el humo junto a la fábrica de acero!', fa: 'غرغروی دودی در دود کنار فابریکهٔ فولاد پنهان است!' },
    taunt: { en: 'Light bulbs? Telephones? Bah! I like smoke and dark, quiet rooms.', es: '¿Focos? ¿Teléfonos? ¡Bah! Me gusta el humo y los cuartos oscuros y callados.', fa: 'گروپ برق؟ تیلفون؟ اَه! من دود و اتاق‌های تاریک و آرام را دوست دارم.' },
    win: { en: 'The smoke blows away over the rivers. Journal page 6.2 floats down into your hands!', es: 'El humo se va sobre los ríos. ¡La página 6.2 del diario cae en tus manos!', fa: 'دود از روی دریاها می‌رود. صفحهٔ ۶.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why do historians call 1870 to 1900 the "Gilded Age"?', es: '¿Por qué los historiadores llaman "Edad Dorada" a los años de 1870 a 1900?', fa: 'چرا تاریخ‌دانان سال‌های ۱۸۷۰ تا ۱۹۰۰ را «عصر طلاکاری» می‌نامند؟' },
        choices: [
          { en: 'Shiny wealth on top hid hard lives below', es: 'La riqueza brillante tapaba vidas duras abajo', fa: 'ثروت براق بالا زندگی سخت پایین را پنهان می‌کرد' },
          { en: 'Gold was found in every big city', es: 'Se encontró oro en cada ciudad grande', fa: 'در هر شهر بزرگ طلا پیدا شد' },
          { en: 'Every worker got rich from the new factory jobs', es: 'Todos los obreros se hicieron ricos en las fábricas', fa: 'هر کارگر از کارهای نو فابریکه ثروتمند شد' },
          { en: 'People painted their houses gold', es: 'La gente pintaba sus casas de dorado', fa: 'مردم خانه‌هایشان را طلایی رنگ کردند' }],
        answer: 0,
        why: { en: 'Gilded means a thin coat of gold. A few were very rich; many workers were poor.', es: 'Dorado quiere decir una capa fina de oro. Pocos eran muy ricos; muchos obreros eran pobres.', fa: 'طلاکاری یعنی یک لایهٔ نازک طلا. چند نفر بسیار ثروتمند بودند؛ بسیاری از کارگران فقیر.' } },
      { q: { en: 'Who got a patent for the telephone in 1876?', es: '¿Quién obtuvo la patente del teléfono en 1876?', fa: 'چه کسی در سال ۱۸۷۶ حق ثبت تیلفون را گرفت؟' },
        choices: [
          { en: 'Alexander Graham Bell', es: 'Alexander Graham Bell', fa: 'الکساندر گراهام بِل' },
          { en: 'Andrew Carnegie', es: 'Andrew Carnegie', fa: 'اندرو کارنگی' },
          { en: 'John D. Rockefeller', es: 'John D. Rockefeller', fa: 'جان دی. راکفلر' },
          { en: 'George Westinghouse', es: 'George Westinghouse', fa: 'جورج وستینگهاوس' }],
        answer: 0,
        why: { en: 'Bell got the telephone patent in 1876. Soon, cities were full of phone wires.', es: 'Bell obtuvo la patente en 1876. Pronto las ciudades se llenaron de cables de teléfono.', fa: 'بِل در ۱۸۷۶ حق ثبت تیلفون را گرفت. زود شهرها پر از سیم تیلفون شدند.' } },
      { q: { en: 'How did the electric light change life?', es: '¿Cómo cambió la vida la luz eléctrica?', fa: 'چراغ برق زندگی را چطور تغییر داد؟' },
        choices: [
          { en: 'People could work and read after dark', es: 'La gente podía trabajar y leer de noche', fa: 'مردم می‌توانستند بعد از تاریکی کار کنند و بخوانند' },
          { en: 'Trains could cross the country faster', es: 'Los trenes cruzaban el país más rápido', fa: 'ریل‌ها زودتر از کشور می‌گذشتند' },
          { en: 'People could talk to friends far away', es: 'La gente podía hablar con amigos lejanos', fa: 'مردم می‌توانستند با دوستان دور گپ بزنند' },
          { en: 'Factories stopped using coal and steel', es: 'Las fábricas dejaron de usar carbón y acero', fa: 'فابریکه‌ها دیگر زغال و فولاد به کار نبردند' }],
        answer: 0,
        why: { en: 'Bright, safe light let homes, shops and factories keep going at night.', es: 'Una luz brillante y segura dejó que casas, tiendas y fábricas siguieran de noche.', fa: 'روشنی بی‌خطر به خانه‌ها، دکان‌ها و فابریکه‌ها اجازه داد شب هم کار کنند.' } },
      { q: { en: 'What did the Bessemer process do?', es: '¿Qué hizo el proceso Bessemer?', fa: 'روش بِسِمِر چه کرد؟' },
        choices: [
          { en: 'Made steel fast and cheap', es: 'Hizo el acero rápido y barato', fa: 'فولاد را زود و ارزان ساخت' },
          { en: 'Sent voices over long wires', es: 'Envió voces por cables largos', fa: 'صدا را از سیم‌های دراز فرستاد' },
          { en: 'Lit up city streets at night', es: 'Iluminó las calles de noche', fa: 'سرک‌های شهر را شب روشن کرد' },
          { en: 'Pumped oil out of the ground', es: 'Sacó petróleo de la tierra', fa: 'تیل را از زمین بیرون کشید' }],
        answer: 0,
        why: { en: 'Blowing air through hot iron made steel quickly. Cheap steel built rails, bridges and tall buildings.', es: 'Soplar aire por el hierro caliente hacía acero rápido. El acero barato construyó rieles, puentes y edificios.', fa: 'دمیدن هوا در آهن داغ فولاد را زود می‌ساخت. فولاد ارزان ریل، پل و تعمیرهای بلند ساخت.' } },
      { q: { en: 'Some called Carnegie and Rockefeller "captains of industry." Others said "robber barons." Why?', es: 'Unos llamaban a Carnegie y Rockefeller "capitanes de la industria". Otros, "barones ladrones". ¿Por qué?', fa: 'بعضی کارنگی و راکفلر را «ناخدایان صنعت» می‌گفتند، بعضی «اشراف دزد». چرا؟' },
        choices: [
          { en: 'They built big companies but kept pay low', es: 'Crearon grandes empresas, pero pagaban poco', fa: 'شرکت‌های بزرگ ساختند اما مزد را کم نگه داشتند' },
          { en: 'They were sea captains who robbed ships at sea', es: 'Eran capitanes que robaban barcos en el mar', fa: 'ناخدای کشتی بودند که در بحر کشتی‌ها را دزدیدند' },
          { en: 'They were kings and queens who came from Europe', es: 'Eran reyes y reinas que vinieron de Europa', fa: 'پادشاهان و ملکه‌هایی بودند که از اروپا آمدند' },
          { en: 'They gave all their money to workers', es: 'Les dieron todo su dinero a los obreros', fa: 'تمام پول‌شان را به کارگران دادند' }],
        answer: 0,
        why: { en: 'They built huge businesses and gave to charity. But they crushed rivals and kept pay low.', es: 'Crearon negocios enormes y donaron dinero. Pero aplastaron a sus rivales y pagaban poco.', fa: 'کارهای بزرگ ساختند و خیرات دادند. اما رقیبان را از بین بردند و مزد را کم نگه داشتند.' } },
      { q: { en: 'Standard Oil controlled almost all oil refining. What is that called?', es: 'Standard Oil controlaba casi toda la refinación de petróleo. ¿Cómo se llama eso?', fa: 'شرکت استاندارد اویل تقریباً تمام تصفیهٔ تیل را در دست داشت. این را چه می‌گویند؟' },
        choices: [
          { en: 'A monopoly', es: 'Un monopolio', fa: 'انحصار' },
          { en: 'A labor union', es: 'Un sindicato', fa: 'اتحادیهٔ کارگران' },
          { en: 'A strike', es: 'Una huelga', fa: 'اعتصاب' },
          { en: 'A patent', es: 'Una patente', fa: 'حق ثبت' }],
        answer: 0,
        why: { en: 'A monopoly controls almost all of a product. It can set high prices.', es: 'Un monopolio controla casi todo un producto. Puede poner precios altos.', fa: 'انحصار یعنی تقریباً تمام یک جنس در دست یک شرکت است. می‌تواند قیمت بالا بگذارد.' } },
      { q: { en: 'What did the Sherman Antitrust Act of 1890 try to do?', es: '¿Qué intentó hacer la Ley Antimonopolio Sherman de 1890?', fa: 'قانون ضد انحصار شرمن در ۱۸۹۰ کوشش کرد چه کند؟' },
        choices: [
          { en: 'Stop monopolies that blocked fair business', es: 'Frenar monopolios que impedían el comercio justo', fa: 'جلوی انحصارهایی را بگیرد که تجارت عادلانه را بند می‌کردند' },
          { en: 'Give every worker in America an 8-hour day', es: 'Dar a cada obrero del país un día de 8 horas', fa: 'به هر کارگر امریکا روز کاری ۸ ساعته بدهد' },
          { en: 'Build a new railroad all the way to the west coast', es: 'Construir un tren nuevo hasta la costa oeste', fa: 'یک خط آهن نو تا ساحل غرب بسازد' },
          { en: 'Pay inventors for each new machine', es: 'Pagar a los inventores por cada máquina', fa: 'برای هر ماشین نو به مخترعان پول بدهد' }],
        answer: 0,
        why: { en: 'It was the first big law against monopolies and trusts. At first, it was not used much.', es: 'Fue la primera gran ley contra monopolios y trusts. Al principio, casi no se usó.', fa: 'اولین قانون بزرگ ضد انحصار و تراست بود. در اول، زیاد به کار نرفت.' } },
      { q: { en: 'Why was work hard for many factory workers in the 1890s?', es: '¿Por qué era duro el trabajo para muchos obreros en los años 1890?', fa: 'چرا در دههٔ ۱۸۹۰ کار برای بسیاری از کارگران فابریکه سخت بود؟' },
        choices: [
          { en: 'Long hours, low pay and danger', es: 'Muchas horas, poco pago y peligro', fa: 'ساعت‌های دراز، مزد کم و خطر' },
          { en: 'Short days and too many holidays', es: 'Días cortos y demasiadas vacaciones', fa: 'روزهای کوتاه و رخصتی‌های بسیار' },
          { en: 'Laws that made owners pay a lot', es: 'Leyes que hacían pagar mucho a los dueños', fa: 'قانون‌هایی که مالکان را مجبور به مزد زیاد می‌کرد' },
          { en: 'Machines that did all of the work', es: 'Máquinas que hacían todo el trabajo', fa: 'ماشین‌هایی که همهٔ کار را می‌کردند' }],
        answer: 0,
        why: { en: 'Many worked 12-hour days, even children. Workers joined unions, like the AFL in 1886, to ask for change.', es: 'Muchos trabajaban 12 horas, hasta niños. Se unieron a sindicatos, como la AFL en 1886, para pedir cambios.', fa: 'بسیاری، حتی کودکان، روزی ۱۲ ساعت کار می‌کردند. کارگران برای تغییر عضو اتحادیه‌ها، مثل AFL در ۱۸۸۶، شدند.' } }
    ]
  },

  learned: [
    { en: 'In the [[gilded age|Gilded Age]], inventions like the telephone and light bulb changed daily life.', es: 'En la [[gilded age|Edad Dorada]], inventos como el teléfono y el foco cambiaron la vida diaria.', fa: 'در [[gilded age|عصر طلاکاری]]، اختراع‌هایی مثل تیلفون و گروپ برق زندگی روزمره را تغییر دادند.' },
    { en: 'Cheap steel and railroads helped big businesses grow. Some became a [[monopoly|monopoly]].', es: 'El acero barato y los trenes ayudaron a crecer a las grandes empresas. Algunas fueron un [[monopoly|monopolio]].', fa: 'فولاد ارزان و خط آهن به رشد شرکت‌های بزرگ کمک کرد. بعضی [[monopoly|انحصار]] شدند.' },
    { en: 'Workers had long hours and low pay, and there was [[child labor|child labor]]. Many joined [[labor union|labor unions]].', es: 'Los obreros tenían muchas horas y poco pago, y había [[child labor|trabajo infantil]]. Muchos se unieron a [[labor union|sindicatos]].', fa: 'کارگران ساعت‌های دراز و مزد کم داشتند، و [[child labor|کار کودکان]] هم بود. بسیاری عضو [[labor union|اتحادیه‌های کارگران]] شدند.' }
  ],
  reflect: {
    q: { en: 'Which invention from this time do you still use today? How would your life be without it?', es: '¿Qué invento de esta época todavía usas hoy? ¿Cómo sería tu vida sin él?', fa: 'کدام اختراع این زمان را تو امروز هم به کار می‌بری؟ بدون آن زندگی‌ات چطور می‌بود؟' },
    starter: { en: 'An invention I still use is', es: 'Un invento que todavía uso es', fa: 'اختراعی که هنوز به کار می‌برم' }
  }
};
