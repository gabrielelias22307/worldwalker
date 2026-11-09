/* CIVICWALKER · Episode 4.2 · Left, Center, Right (Party Ideologies)
   Maple Ford, a MADE-UP small town in Virginia, at the fall fair (same town as 4.1). North half: Main Street (paved)
   runs east-west through the fair stalls, with houses in both corners, the library and the bakery between them, a
   well, and a wheat field at the east end. South half: the town square. Three paved land bands cross it from west
   to east: the left band, the center band and the right band of the political spectrum, with grass between them.
   The charter stone asks the student to carry each neighbor's idea to where US government textbooks place it:
   liberal (left), moderate (center) or conservative (right). The right answer is only WHERE the textbook puts an
   idea, never which idea is better. The ideas are balanced: two for each band, on the same town-sized topics. */
window.EPISODE = {
  id: '4.2',
  realm: 4,
  sol: 'GOVT',
  title: { en: 'Left, Center, Right', es: 'Izquierda, centro, derecha', fa: 'چپ، میانه، راست' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Maple Ford, the town square', es: 'Maple Ford, la plaza del pueblo', fa: 'میپل فورد، میدان شهر' },
  intro: [
    { en: 'The Grump tore the page about ideas on government. Now neighbors only shout!',
      es: 'El Gruñón rompió la página sobre las ideas del gobierno. ¡Ahora los vecinos solo gritan!',
      fa: 'غرغرو صفحهٔ «فکرها دربارهٔ حکومت» را پاره کرد. حالا همسایه‌ها فقط چیغ می‌زنند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: Maple Ford is made up; the dot sits in central Virginia (no timeline in this game) */
  scenes: {
    at: [-78.5, 37.8],
    start: [
      { en: 'Maple Ford is a small, made-up town in Virginia.',
        es: 'Maple Ford es un pueblo pequeño e inventado de Virginia.',
        fa: 'میپل فورد یک شهر کوچک و خیالی در ویرجینیا است.' },
      { en: 'Every fall, neighbors meet at the fair in the town square.',
        es: 'Cada otoño, los vecinos se reúnen en la feria de la plaza del pueblo.',
        fa: 'هر خزان، همسایه‌ها در میلهٔ میدان شهر جمع می‌شوند.' },
      { en: 'Today they share their ideas about what the town should do.',
        es: 'Hoy comparten sus ideas sobre lo que el pueblo debe hacer.',
        fa: 'امروز آنها فکرهای خود را دربارهٔ کار شهر با هم شریک می‌سازند.' }
    ],
    page: { en: 'Liberal, moderate and conservative are places on the political spectrum, from left to right.',
      es: 'Liberal, moderado y conservador son lugares en el espectro político, de izquierda a derecha.',
      fa: 'لیبرال، میانه‌رو و محافظه‌کار جاهایی روی طیف سیاسی هستند، از چپ به راست.' },
    guess: {
      q: { en: 'Can good neighbors disagree about what government should do?', es: '¿Pueden los buenos vecinos no estar de acuerdo sobre lo que debe hacer el gobierno?', fa: 'آیا همسایه‌های خوب می‌توانند دربارهٔ کار حکومت هم‌نظر نباشند؟' },
      choices: [
        { t: { en: '🤝 Yes, they can', es: '🤝 Sí, pueden', fa: '🤝 بله، می‌توانند' }, ok: true },
        { t: { en: '🙅 No, never', es: '🙅 No, nunca', fa: '🙅 نه، هرگز' } }
      ],
      why: { en: 'Yes. People often disagree about government. Listening helps everyone understand each other.', es: 'Sí. La gente muchas veces no está de acuerdo sobre el gobierno. Escuchar ayuda a entenderse.', fa: 'بله. مردم اکثراً دربارهٔ حکومت هم‌نظر نیستند. گوش دادن کمک می‌کند همدیگر را بفهمند.' }
    },
    next: {
      q: { en: 'Next: election night! Who finally chooses the US president?', es: 'Ahora: ¡la noche de elecciones! ¿Quién elige al final al presidente de EE. UU.?', fa: 'بعدی: شب انتخابات! در آخر کی رئیس جمهور امریکا را انتخاب می‌کند؟' },
      choices: [
        { t: { en: 'The Electoral College', es: 'El Colegio Electoral', fa: 'کالج انتخاباتی' }, ok: true },
        { t: { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'ستره محکمه' } }
      ],
      why: { en: 'First primaries, then the general election. Then electors vote: a winner needs 270 of 538.', es: 'Primero las primarias, luego la elección general. Después votan los electores: se necesitan 270 de 538.', fa: 'اول انتخابات مقدماتی، بعد انتخابات عمومی. بعد انتخاب‌کنندگان رأی می‌دهند: برنده ۲۷۰ از ۵۳۸ لازم دارد.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk. West house: a liberal idea. East house: a
     conservative idea. The bakery: a moderate idea. All about the same pool, all said kindly. */
  houses: [
    { at: [3, 2], name: { en: 'Ms. Ines', es: 'Sra. Inés', fa: 'خانم اینس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a7ac0', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I think the town should pay for a new public pool.', es: 'Creo que el pueblo debe pagar una piscina pública nueva.', fa: 'فکر می‌کنم شهر باید پول یک حوض آب‌بازی عمومی نو را بدهد.' },
        { en: 'Then every family could swim all summer, even if money is tight.', es: 'Así cada familia podría nadar todo el verano, aunque tenga poco dinero.', fa: 'آن وقت هر فامیل تمام تابستان آب‌بازی کرده می‌تواند، حتی اگر پولش کم باشد.' },
        { en: 'Textbooks call an idea like mine [[liberal|liberal]]. Thanks for listening!', es: 'Los libros de texto llaman [[liberal|liberal]] a una idea como la mía. ¡Gracias por escuchar!', fa: 'کتاب‌های درسی فکری مثل فکر مرا [[liberal|لیبرال]] می‌گویند. تشکر که گوش دادی!' }
      ] },
    { at: [10, 2], name: { en: 'Mr. Haddad', es: 'Sr. Haddad', fa: 'آقای حداد' },
      look: { skin: 3, hair: '#1a1208', shirt: '#6a4a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'The two biggest [[political party|political parties]] in the US are Democrats and Republicans.', es: 'Los dos [[political party|partidos políticos]] más grandes de EE. UU. son los demócratas y los republicanos.', fa: 'دو [[political party|حزب سیاسی]] بزرگ امریکا دموکرات‌ها و جمهوری‌خواهان هستند.' },
        { en: 'Today, Democrats are generally seen as more liberal, Republicans as more conservative.', es: 'Hoy, a los demócratas se les ve como más liberales, y a los republicanos como más conservadores.', fa: 'امروز، دموکرات‌ها معمولاً لیبرال‌تر و جمهوری‌خواهان محافظه‌کارتر دیده می‌شوند.' },
        { en: 'But every party has members all along the spectrum.', es: 'Pero cada partido tiene miembros a lo largo de todo el espectro.', fa: 'اما هر حزب در تمام طول طیف عضو دارد.' }
      ] },
    { at: [21, 2], name: { en: 'Pilar', es: 'Pilar', fa: 'پیلار' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#e0a040', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Welcome to my bakery! Try a warm apple muffin.', es: '¡Bienvenido a mi panadería! Prueba un panecillo de manzana calientito.', fa: 'به نانوایی من خوش آمدی! یک کیک سیب گرم را بچش.' },
        { en: 'For the pool, maybe the town pays half and a business pays half.', es: 'Para la piscina, tal vez el pueblo paga la mitad y una empresa la otra mitad.', fa: 'برای حوض آب‌بازی، شاید شهر نیمش را بدهد و یک کاروبار نیم دیگرش را.' },
        { en: 'A little of both sides. Textbooks call that [[moderate|moderate]].', es: 'Un poco de cada lado. Los libros de texto lo llaman [[moderate|moderado]].', fa: 'کمی از هر دو طرف. کتاب‌های درسی آن را [[moderate|میانه‌رو]] می‌گویند.' }
      ] },
    { at: [28, 2], name: { en: 'Mr. Boone', es: 'Sr. Boone', fa: 'آقای بون' },
      look: { skin: 0, hair: '#8a6a3a', shirt: '#c0392b', pants: '#3a3a2a', hat: '#8a6a3a', style: 'short' },
      lines: [
        { en: 'I think a business should build the new pool, not the town.', es: 'Creo que una empresa debe construir la piscina nueva, no el pueblo.', fa: 'فکر می‌کنم یک کاروبار باید حوض آب‌بازی نو را بسازد، نه شهر.' },
        { en: 'Then taxes stay low, and families keep more of their own money.', es: 'Así los impuestos siguen bajos, y las familias guardan más de su propio dinero.', fa: 'آن وقت مالیات کم می‌ماند، و فامیل‌ها پول بیشتری از خودشان نگه می‌دارند.' },
        { en: 'Textbooks call an idea like mine [[conservative|conservative]]. Thanks for listening!', es: 'Los libros de texto llaman [[conservative|conservadora]] a una idea como la mía. ¡Gracias por escuchar!', fa: 'کتاب‌های درسی فکری مثل فکر مرا [[conservative|محافظه‌کار]] می‌گویند. تشکر که گوش دادی!' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): houses (R over h) in the corners, the library and the bakery (Q over h) between them;
     fair stalls (m) on both sides of Main Street (l, y 5-6); the town well (O); a wheat field (w) at the east end.
     South (y 11-21): the town square. Three paved land bands (l), west to east: the left band (x 3-8), the center
     band (x 13-18) and the right band (x 23-28), with grass and trees between them. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR...QQQQQ......QQQQQ...RRR.T',
    'T.hdh...hhdhh......hhdhh...hdh.T',
    'T..............................T',
    'T..mm..mm...T........T..mm..mm.T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T..mm..mm......O.......mm..mm..T',
    'T.x...................T..wwwww.T',
    'T...T......TT.........T..wwwww.T',
    'T..............................T',
    'T.....T.................T......T',
    'T..llllll....llllll....llllll..T',
    'T..llllll....llllll....llllll..T',
    'T..llllll....llllll....llllll..T',
    'T..llllll.T..llllll..T.llllll..T',
    'T..llllll....llllll....llllll..T',
    'T..llllll....llllll....llllll..T',
    'T..llllll....llllll....llllll..T',
    'T.........x..........x.........T',
    'T..............................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [1, 4], at: [1, 10], decor: 'coinold',
      clue: { en: 'From this note, walk 6 steps south, along the west edge of the fair.', es: 'Desde esta nota, camina 6 pasos al sur, por el borde oeste de la feria.', fa: 'از این یادداشت، ۶ قدم به جنوب برو، کنار لب غربی میله.' },
      text: { en: 'An old button from an election! People wear buttons to show which ideas they support.', es: '¡Un botón viejo de una elección! La gente usa botones para mostrar qué ideas apoya.', fa: 'یک دکمهٔ کهنه از یک انتخابات! مردم دکمه می‌زنند تا نشان بدهند از کدام فکرها حمایت می‌کنند.' } },
    { clueAt: [30, 12], at: [30, 18], decor: 'flower',
      clue: { en: 'From this note, walk 6 steps south, along the east edge of the square.', es: 'Desde esta nota, camina 6 pasos al sur, por el borde este de la plaza.', fa: 'از این یادداشت، ۶ قدم به جنوب برو، کنار لب شرقی میدان.' },
      text: { en: 'A ribbon from the fair! Neighbors with very different ideas still enjoy the fair together.', es: '¡Una cinta de la feria! Vecinos con ideas muy distintas igual disfrutan juntos de la feria.', fa: 'یک فیتهٔ میله! همسایه‌هایی با فکرهای خیلی مختلف باز هم با هم از میله لذت می‌برند.' } }
  ],

  words: {
    ideology: { en: 'a set of ideas about what government should do', es: 'un conjunto de ideas sobre lo que debe hacer el gobierno', fa: 'مجموعه‌ای از فکرها دربارهٔ کاری که حکومت باید بکند' },
    'political spectrum': { en: 'a line that shows ideas about government, from left to right', es: 'una línea que muestra las ideas sobre el gobierno, de izquierda a derecha', fa: 'خطی که فکرها دربارهٔ حکومت را از چپ به راست نشان می‌دهد' },
    liberal: { en: 'on the left: favors a bigger role for government in solving social and money problems', es: 'a la izquierda: prefiere un papel más grande del gobierno para resolver problemas sociales y de dinero', fa: 'در چپ: نقش بزرگ‌تر حکومت را برای حل مشکلات اجتماعی و پولی می‌خواهد' },
    conservative: { en: 'on the right: favors a smaller role for government, lower taxes, fewer rules and old traditions', es: 'a la derecha: prefiere un papel más pequeño del gobierno, menos impuestos, menos reglas y las tradiciones', fa: 'در راست: نقش کوچک‌تر حکومت، مالیات کمتر، مقررات کمتر و رسم‌های قدیمی را می‌خواهد' },
    moderate: { en: 'in the center: holds some ideas from each side', es: 'en el centro: tiene algunas ideas de cada lado', fa: 'در میانه: بعضی فکرها را از هر دو طرف دارد' },
    compromise: { en: 'a deal where each side gives a little', es: 'un acuerdo donde cada lado cede un poco', fa: 'توافقی که در آن هر طرف کمی کوتاه می‌آید' },
    regulation: { en: 'a rule the government makes for businesses', es: 'una regla que el gobierno hace para las empresas', fa: 'قانونی که حکومت برای کاروبارها می‌سازد' },
    'political party': { en: 'a group of people who share ideas and try to win elections', es: 'un grupo de personas que comparten ideas y tratan de ganar elecciones', fa: 'گروهی از مردم که فکرهای مشترک دارند و می‌کوشند در انتخابات برنده شوند' },
    tax: { en: 'money people pay to the government for things like roads and schools', es: 'dinero que la gente paga al gobierno para cosas como calles y escuelas', fa: 'پولی که مردم برای چیزهایی مثل سرک و مکتب به حکومت می‌دهند' }
  },

  npcs: [
    {
      x: 5, y: 9,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 2, hair: '#1a1008', shirt: '#2f8f8f', pants: '#2a3a5a', hat: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Welcome to the Maple Ford fall fair! I drive the town bus.', es: '¡Bienvenido a la feria de otoño de Maple Ford! Manejo el autobús del pueblo.', fa: 'به میلهٔ خزانی میپل فورد خوش آمدی! من بس شهر را می‌رانم.' },
        { en: 'Every neighbor has ideas about what the town should do.', es: 'Cada vecino tiene ideas sobre lo que el pueblo debe hacer.', fa: 'هر همسایه دربارهٔ کاری که شهر باید بکند فکرهایی دارد.' },
        { en: 'A set of ideas about government is called an [[ideology|ideology]].', es: 'Un conjunto de ideas sobre el gobierno se llama [[ideology|ideología]].', fa: 'مجموعه‌ای از فکرها دربارهٔ حکومت را [[ideology|ایدیولوژی]] می‌گویند.' },
        { en: 'We line up these ideas from left to right on the [[political spectrum|political spectrum]].', es: 'Ordenamos estas ideas de izquierda a derecha en el [[political spectrum|espectro político]].', fa: 'ما این فکرها را از چپ به راست روی [[political spectrum|طیف سیاسی]] می‌چینیم.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What is an ideology?', es: '¿Qué es una ideología?', fa: 'ایدیولوژی چیست؟' },
        choices: [
          { ok: true, t: { en: 'A set of ideas about government', es: 'Un conjunto de ideas sobre el gobierno', fa: 'مجموعه‌ای از فکرها دربارهٔ حکومت' },
            why: { en: 'Yes! An ideology is a set of ideas about what government should do.', es: '¡Sí! Una ideología es un conjunto de ideas sobre lo que debe hacer el gobierno.', fa: 'بله! ایدیولوژی مجموعه‌ای از فکرها دربارهٔ کاری است که حکومت باید بکند.' } },
          { t: { en: 'A list of the town\'s laws', es: 'Una lista de las leyes del pueblo', fa: 'فهرست قانون‌های شهر' },
            why: { en: 'No. Laws are rules a government makes. An ideology is a set of ideas.', es: 'No. Las leyes son reglas que hace un gobierno. Una ideología es un conjunto de ideas.', fa: 'نه. قانون‌ها قاعده‌هایی هستند که حکومت می‌سازد. ایدیولوژی مجموعه‌ای از فکرهاست.' } },
          { t: { en: 'A group that runs in elections', es: 'Un grupo que compite en elecciones', fa: 'گروهی که در انتخابات شرکت می‌کند' },
            why: { en: 'No. That is a political party. An ideology is a set of ideas about government.', es: 'No. Eso es un partido político. Una ideología es un conjunto de ideas sobre el gobierno.', fa: 'نه. آن حزب سیاسی است. ایدیولوژی مجموعه‌ای از فکرها دربارهٔ حکومت است.' } }
        ]
      }
    },
    {
      x: 20, y: 8,
      name: { en: 'Mr. Lund', es: 'Sr. Lund', fa: 'آقای لوند' },
      role: { en: 'Government teacher', es: 'Maestro de gobierno', fa: 'معلم مضمون حکومت' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#5a8a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: '[[liberal|Liberals]], on the left, often want a bigger role for government.', es: 'Los [[liberal|liberales]], a la izquierda, muchas veces quieren un papel más grande del gobierno.', fa: '[[liberal|لیبرال‌ها]]، در چپ، اکثراً نقش بزرگ‌تری برای حکومت می‌خواهند.' },
        { en: 'They may want more town programs and more rules for business.', es: 'Pueden querer más programas del pueblo y más reglas para las empresas.', fa: 'شاید برنامه‌های بیشتر شهر و مقررات بیشتر برای کاروبار بخواهند.' },
        { en: '[[conservative|Conservatives]], on the right, often want a smaller role for government.', es: 'Los [[conservative|conservadores]], a la derecha, muchas veces quieren un papel más pequeño del gobierno.', fa: '[[conservative|محافظه‌کاران]]، در راست، اکثراً نقش کوچک‌تری برای حکومت می‌خواهند.' },
        { en: 'They may want lower taxes, fewer rules, and to keep traditions.', es: 'Pueden querer menos impuestos, menos reglas y mantener las tradiciones.', fa: 'شاید مالیات کمتر، مقررات کمتر و نگه داشتن رسم‌ها را بخواهند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Textbooks say liberals and conservatives mostly differ about what?', es: 'Según los libros de texto, ¿en qué se diferencian sobre todo los liberales y los conservadores?', fa: 'به گفتهٔ کتاب‌های درسی، لیبرال‌ها و محافظه‌کاران بیشتر در چه چیز فرق دارند؟' },
        choices: [
          { ok: true, t: { en: 'How big a role government should have', es: 'Qué tan grande debe ser el papel del gobierno', fa: 'نقش حکومت چقدر بزرگ باشد' },
            why: { en: 'Yes! Liberals often want a bigger role for government. Conservatives often want a smaller one.', es: '¡Sí! Los liberales suelen querer un papel más grande del gobierno. Los conservadores, uno más pequeño.', fa: 'بله! لیبرال‌ها اکثراً نقش بزرگ‌تر حکومت را می‌خواهند. محافظه‌کاران نقش کوچک‌تر را.' } },
          { t: { en: 'Whether people should be able to vote', es: 'Si la gente debe poder votar', fa: 'اینکه مردم حق رأی داشته باشند یا نه' },
            why: { en: 'No. Liberals and conservatives both vote. They differ about how big government\'s role should be.', es: 'No. Los liberales y los conservadores votan. Se diferencian en qué tan grande debe ser el gobierno.', fa: 'نه. لیبرال‌ها و محافظه‌کاران هر دو رأی می‌دهند. فرق‌شان در اندازهٔ نقش حکومت است.' } },
          { t: { en: 'Which town has the best fall fair', es: 'Qué pueblo tiene la mejor feria', fa: 'کدام شهر بهترین میلهٔ خزانی را دارد' },
            why: { en: 'No, that is just for fun! They differ about how big government\'s role should be.', es: '¡No, eso es solo por diversión! Se diferencian en qué tan grande debe ser el gobierno.', fa: 'نه، آن فقط برای سرگرمی است! فرق‌شان در اندازهٔ نقش حکومت است.' } }
        ]
      }
    },
    {
      x: 11, y: 17,
      name: { en: 'Ms. Abebe', es: 'Sra. Abebe', fa: 'خانم ابیبی' },
      role: { en: 'Town Talk host', es: 'Anfitriona de la Charla del Pueblo', fa: 'میزبان گپ شهر' },
      look: { skin: 5, hair: '#120c08', shirt: '#8e5bd6', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I host Town Talk here in the square. Everyone gets a turn.', es: 'Dirijo la Charla del Pueblo aquí en la plaza. Todos tienen su turno.', fa: 'من گپ شهر را اینجا در میدان میزبانی می‌کنم. هر کس نوبت دارد.' },
        { en: 'In the center are [[moderate|moderates]]. They hold some ideas from each side.', es: 'En el centro están los [[moderate|moderados]]. Tienen algunas ideas de cada lado.', fa: 'در میانه [[moderate|میانه‌روها]] هستند. آنها بعضی فکرها را از هر دو طرف دارند.' },
        { en: 'Moderates often look for a [[compromise|compromise]], a deal where each side gives a little.', es: 'Los moderados muchas veces buscan un [[compromise|acuerdo]] donde cada lado cede un poco.', fa: 'میانه‌روها اکثراً دنبال [[compromise|سازش]] هستند، توافقی که هر طرف کمی کوتاه بیاید.' },
        { en: 'Most Americans are moderate or near the center of the spectrum.', es: 'La mayoría de los estadounidenses son moderados o están cerca del centro.', fa: 'بیشتر امریکایی‌ها میانه‌رو یا نزدیک به میانهٔ طیف هستند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Where are most Americans on the political spectrum?', es: '¿Dónde están la mayoría de los estadounidenses en el espectro político?', fa: 'بیشتر امریکایی‌ها در کجای طیف سیاسی هستند؟' },
        choices: [
          { ok: true, t: { en: 'Moderate, near the center', es: 'Moderados, cerca del centro', fa: 'میانه‌رو، نزدیک میانه' },
            why: { en: 'Yes! Most Americans are moderate or near the center, with some ideas from each side.', es: '¡Sí! La mayoría son moderados o están cerca del centro, con ideas de cada lado.', fa: 'بله! بیشتر امریکایی‌ها میانه‌رو یا نزدیک میانه هستند، با فکرهایی از هر دو طرف.' } },
          { t: { en: 'Far out on the left side', es: 'Muy lejos, a la izquierda', fa: 'خیلی دور، در طرف چپ' },
            why: { en: 'No. Some people are far to the left, but most Americans are near the center.', es: 'No. Algunas personas están muy a la izquierda, pero la mayoría está cerca del centro.', fa: 'نه. بعضی‌ها خیلی چپ هستند، اما بیشتر امریکایی‌ها نزدیک میانه‌اند.' } },
          { t: { en: 'Far out on the right side', es: 'Muy lejos, a la derecha', fa: 'خیلی دور، در طرف راست' },
            why: { en: 'No. Some people are far to the right, but most Americans are near the center.', es: 'No. Algunas personas están muy a la derecha, pero la mayoría está cerca del centro.', fa: 'نه. بعضی‌ها خیلی راست هستند، اما بیشتر امریکایی‌ها نزدیک میانه‌اند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 8, text: { en: 'MAPLE FORD FALL FAIR · Food, games and neighbors. All ideas are welcome here!', es: 'FERIA DE OTOÑO DE MAPLE FORD · Comida, juegos y vecinos. ¡Aquí todas las ideas son bienvenidas!', fa: 'میلهٔ خزانی میپل فورد · خوراک، بازی و همسایه‌ها. اینجا همهٔ فکرها خوش آمدند!' } },
    { x: 10, y: 19, text: { en: 'TOWN TALK · One person speaks. Everyone else listens. Then the next person speaks.', es: 'CHARLA DEL PUEBLO · Una persona habla. Los demás escuchan. Luego habla la siguiente.', fa: 'گپ شهر · یک نفر گپ می‌زند. دیگران گوش می‌دهند. بعد نفر بعدی گپ می‌زند.' } },
    { x: 21, y: 19, text: { en: 'THE SPECTRUM · West band: left. Middle band: center. East band: right.', es: 'EL ESPECTRO · Franja oeste: izquierda. Franja del medio: centro. Franja este: derecha.', fa: 'طیف · نوار غربی: چپ. نوار میانی: میانه. نوار شرقی: راست.' } }
  ],

  /* the quest: Mr. Ortiz (gold !) in the south-east corner of the square -> Lily the face painter at the west end
     of the fair, north-west -> find the talking stick in the wheat field at the east end of the fair, north-east
     -> back to Mr. Ortiz. The talking stick: whoever holds it speaks, everyone else listens. */
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Talking Stick', es: 'El bastón de la palabra perdido', fa: 'چوب گپ گمشده' },
    giver: {
      x: 26, y: 20,
      name: { en: 'Mr. Ortiz', es: 'Sr. Ortiz', fa: 'آقای اورتیز' },
      role: { en: 'Fair organizer', es: 'Organizador de la feria', fa: 'برگزارکنندهٔ میله' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#d9542b', pants: '#3a3a3a', hat: '#e0a020', style: 'short' },
      lines: [
        { en: 'At Town Talk, the person holding the talking stick speaks. Others listen.', es: 'En la Charla del Pueblo, habla quien tiene el bastón de la palabra. Los demás escuchan.', fa: 'در گپ شهر، کسی که چوب گپ را در دست دارد گپ می‌زند. دیگران گوش می‌دهند.' },
        { en: 'The stick is gone! Now everyone shouts at once. Can you find it?', es: '¡El bastón desapareció! Ahora todos gritan a la vez. ¿Puedes encontrarlo?', fa: 'چوب گم شده! حالا همه یک‌جا چیغ می‌زنند. می‌توانی آن را پیدا کنی؟' }
      ],
      wait: { en: 'Ask Lily, the face painter, at the west end of the fair.', es: 'Pregúntale a Lily, la pintora de caras, en el extremo oeste de la feria.', fa: 'از لیلی، رنگ‌کار روی، در آخر غربی میله بپرس.' },
      thanks: { en: 'The talking stick! Now one person speaks, and everyone listens. Thank you!', es: '¡El bastón de la palabra! Ahora una persona habla y todos escuchan. ¡Gracias!', fa: 'چوب گپ! حالا یک نفر گپ می‌زند و همه گوش می‌دهند. تشکر!' }
    },
    contact: {
      x: 6, y: 3,
      name: { en: 'Lily', es: 'Lily', fa: 'لیلی' },
      role: { en: 'Face painter', es: 'Pintora de caras', fa: 'رنگ‌کار روی' },
      look: { skin: 4, hair: '#120c08', shirt: '#f2c14e', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'Some kids played with the talking stick by my table.', es: 'Unos niños jugaron con el bastón de la palabra junto a mi mesa.', fa: 'چند طفل کنار میز من با چوب گپ بازی کردند.' },
        { en: 'They ran east down Main Street, to the wheat field past the fair.', es: 'Corrieron al este por la calle principal, hasta el campo de trigo después de la feria.', fa: 'آنها از سرک عمومی به طرف شرق دویدند، تا کشتزار گندم بعد از میله.' }
      ]
    },
    action: {
      type: 'find',
      at: [27, 9],
      hint: { en: 'Look in the wheat field, at the east end of the fair', es: 'Busca en el campo de trigo, al extremo este de la feria', fa: 'در کشتزار گندم، در آخر شرقی میله ببین' },
      found: { en: 'The talking stick! The kids left it in the wheat field.', es: '¡El bastón de la palabra! Los niños lo dejaron en el campo de trigo.', fa: 'چوب گپ! طفل‌ها آن را در کشتزار گندم گذاشته بودند.' },
      item: { icon: '🪵', name: { en: 'The talking stick', es: 'El bastón de la palabra', fa: 'چوب گپ' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[18, 3], [27, 11]],

  challenge: {
    at: [16, 11],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // three land bands across the square, west to east: left, center, right. The center band crosses the screen
    // edge, so it is two rectangles (one label on each screen). The bins are listed center, left, right only so the
    // area colors come out yellow (center), blue (left) and red (right), the colors most charts of the spectrum use.
    zones: [{ bin: 'lib', x: 3, y: 13, w: 6, h: 5 }, { bin: 'mod', x: 13, y: 13, w: 3, h: 5 }, { bin: 'mod', x: 16, y: 13, w: 3, h: 5 },
      { bin: 'con', x: 23, y: 13, w: 6, h: 5 }],
    stat: 'reg',
    title: { en: 'Where does this idea go?', es: '¿Dónde va esta idea?', fa: 'این فکر کجا می‌رود؟' },
    intro: { en: 'Carry each idea to where textbooks place it: left, center or right. No idea is wrong!',
      es: 'Lleva cada idea a donde la ponen los libros de texto: izquierda, centro o derecha. ¡Ninguna idea es mala!',
      fa: 'هر فکر را به جایی ببر که کتاب‌های درسی می‌گذارند: چپ، میانه یا راست. هیچ فکری بد نیست!' },
    bins: [
      { id: 'lib', color: '#2bb3a3', icon: '⬅️', label: { en: 'Liberal · left', es: 'Liberal · izquierda', fa: 'لیبرال · چپ' }, sub: { en: 'a bigger role for government', es: 'un papel más grande del gobierno', fa: 'نقش بزرگ‌تر حکومت' } },
      { id: 'mod', color: '#f2c14e', icon: '🤝', label: { en: 'Moderate · center', es: 'Moderado · centro', fa: 'میانه‌رو · میانه' }, sub: { en: 'some of each side; a compromise', es: 'un poco de cada lado; un acuerdo', fa: 'کمی از هر طرف؛ سازش' } },
      { id: 'con', color: '#d98e2b', icon: '➡️', label: { en: 'Conservative · right', es: 'Conservador · derecha', fa: 'محافظه‌کار · راست' }, sub: { en: 'a smaller role for government', es: 'un papel más pequeño del gobierno', fa: 'نقش کوچک‌تر حکومت' } }
    ],
    items: [
      { bin: 'lib', t: { en: '"The town should pay for a new bus line."', es: '«El pueblo debe pagar una nueva ruta de autobús».', fa: '«شهر باید پول یک خط نو بس را بدهد.»' },
        why: { en: 'Textbooks call this [[liberal|liberal]]: the town government takes a bigger role in solving a problem.', es: 'Los libros de texto lo llaman [[liberal|liberal]]: el gobierno del pueblo toma un papel más grande.', fa: 'کتاب‌های درسی این را [[liberal|لیبرال]] می‌گویند: حکومت شهر در حل یک مشکل نقش بزرگ‌تر می‌گیرد.' } },
      { bin: 'lib', t: { en: '"Add new safety rules for the shops on Main Street."', es: '«Hay que poner nuevas reglas de seguridad para las tiendas de la calle principal».', fa: '«برای دکان‌های سرک عمومی مقررات نو ایمنی بگذارید.»' },
        why: { en: 'Textbooks call this liberal: more government [[regulation|regulation]] of business, to keep people safe.', es: 'Los libros de texto lo llaman liberal: más [[regulation|regulación]] del gobierno a las empresas, para cuidar a la gente.', fa: 'کتاب‌های درسی این را لیبرال می‌گویند: [[regulation|مقررات]] بیشتر حکومت بر کاروبار، برای امنیت مردم.' } },
      { bin: 'con', t: { en: '"Keep taxes low and let a business run the bus line."', es: '«Mantengan bajos los impuestos y que una empresa maneje la ruta de autobús».', fa: '«مالیات را کم نگه دارید و بگذارید یک کاروبار خط بس را بچلاند.»' },
        why: { en: 'Textbooks call this [[conservative|conservative]]: lower [[tax|taxes]] and a smaller role for government.', es: 'Los libros de texto lo llaman [[conservative|conservador]]: menos [[tax|impuestos]] y un papel más pequeño del gobierno.', fa: 'کتاب‌های درسی این را [[conservative|محافظه‌کار]] می‌گویند: [[tax|مالیات]] کمتر و نقش کوچک‌تر حکومت.' } },
      { bin: 'con', t: { en: '"Cut some rules so it is easier to open a shop."', es: '«Quiten algunas reglas para que sea más fácil abrir una tienda».', fa: '«بعضی مقررات را کم کنید تا باز کردن دکان آسان‌تر شود.»' },
        why: { en: 'Textbooks call this conservative: less government regulation, so businesses can start and grow.', es: 'Los libros de texto lo llaman conservador: menos regulación del gobierno, para que las empresas empiecen y crezcan.', fa: 'کتاب‌های درسی این را محافظه‌کار می‌گویند: مقررات کمتر حکومت، تا کاروبارها شروع شوند و رشد کنند.' } },
      { bin: 'mod', t: { en: '"The town and a business can share the bus line."', es: '«El pueblo y una empresa pueden compartir la ruta de autobús».', fa: '«شهر و یک کاروبار می‌توانند خط بس را با هم شریک باشند.»' },
        why: { en: 'Textbooks call this [[moderate|moderate]]: a little of each side, a [[compromise|compromise]].', es: 'Los libros de texto lo llaman [[moderate|moderado]]: un poco de cada lado, un [[compromise|acuerdo]].', fa: 'کتاب‌های درسی این را [[moderate|میانه‌رو]] می‌گویند: کمی از هر طرف، یک [[compromise|سازش]].' } },
      { bin: 'mod', t: { en: '"Keep the safety rules, but make the forms shorter."', es: '«Mantengan las reglas de seguridad, pero hagan los formularios más cortos».', fa: '«مقررات ایمنی را نگه دارید، اما فورم‌ها را کوتاه‌تر بسازید.»' },
        why: { en: 'Textbooks call this moderate: it keeps some rules and cuts some, a middle path.', es: 'Los libros de texto lo llaman moderado: guarda algunas reglas y quita otras, un camino del medio.', fa: 'کتاب‌های درسی این را میانه‌رو می‌گویند: بعضی مقررات را نگه می‌دارد و بعضی را کم می‌کند، راه میانه.' } }
    ],
    success: { en: 'Every idea is in its place on the spectrum. And nobody had to shout!', es: 'Cada idea está en su lugar en el espectro. ¡Y nadie tuvo que gritar!', fa: 'هر فکر در جای خودش روی طیف است. و هیچ کس مجبور نشد چیغ بزند!' }
  },

  boss: {
    at: [3, 20],
    stat: 'mov',
    need: 3,
    name: { en: 'The Shouty Grump', es: 'El Gruñón Gritón', fa: 'غرغروی چیغ‌زن' },
    appear: { en: 'The Shouty Grump is hiding in the fog at the corner of the square!', es: '¡El Gruñón Gritón se esconde en la niebla en la esquina de la plaza!', fa: 'غرغروی چیغ‌زن در مه، در کنج میدان پنهان است!' },
    taunt: { en: 'Pick a side and shout! Who needs listening? Bah!', es: '¡Elige un lado y grita! ¿Quién necesita escuchar? ¡Bah!', fa: 'یک طرف را بگیر و چیغ بزن! گوش دادن به چه درد می‌خورد؟ بَه!' },
    win: { en: 'The fog lifts off the square. Charter page 4.2 floats down into your hands!', es: 'La niebla se va de la plaza. ¡La página 4.2 de la carta cae en tus manos!', fa: 'مه از روی میدان کنار می‌رود. صفحهٔ ۴.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is an ideology?', es: '¿Qué es una ideología?', fa: 'ایدیولوژی چیست؟' },
        choices: [
          { en: 'A set of ideas about government', es: 'Un conjunto de ideas sobre el gobierno', fa: 'مجموعه‌ای از فکرها دربارهٔ حکومت' },
          { en: 'A rule passed by the town council', es: 'Una regla que aprueba el concejo', fa: 'قانونی که شورای شهر تصویب می‌کند' },
          { en: 'A group that tries to win elections', es: 'Un grupo que quiere ganar elecciones', fa: 'گروهی که می‌کوشد در انتخابات ببرد' },
          { en: 'A vote taken on election day', es: 'Un voto del día de elecciones', fa: 'رأیی که روز انتخابات داده می‌شود' }],
        answer: 0,
        why: { en: 'An ideology is a set of ideas about what government should do.', es: 'Una ideología es un conjunto de ideas sobre lo que debe hacer el gobierno.', fa: 'ایدیولوژی مجموعه‌ای از فکرها دربارهٔ کاری است که حکومت باید بکند.' } },
      { q: { en: 'On the political spectrum, what is the order from left to right?', es: 'En el espectro político, ¿cuál es el orden de izquierda a derecha?', fa: 'روی طیف سیاسی، ترتیب از چپ به راست چیست؟' },
        choices: [
          { en: 'Liberal, moderate, conservative', es: 'Liberal, moderado, conservador', fa: 'لیبرال، میانه‌رو، محافظه‌کار' },
          { en: 'Conservative, moderate, liberal', es: 'Conservador, moderado, liberal', fa: 'محافظه‌کار، میانه‌رو، لیبرال' },
          { en: 'Moderate, liberal, conservative', es: 'Moderado, liberal, conservador', fa: 'میانه‌رو، لیبرال، محافظه‌کار' },
          { en: 'Liberal, conservative, moderate', es: 'Liberal, conservador, moderado', fa: 'لیبرال، محافظه‌کار، میانه‌رو' }],
        answer: 0,
        why: { en: 'Liberals are on the left, moderates in the center, and conservatives on the right.', es: 'Los liberales están a la izquierda, los moderados en el centro y los conservadores a la derecha.', fa: 'لیبرال‌ها در چپ، میانه‌روها در میانه و محافظه‌کاران در راست هستند.' } },
      { q: { en: 'Textbooks say liberals and conservatives mostly differ about what?', es: 'Según los libros de texto, ¿en qué se diferencian sobre todo liberales y conservadores?', fa: 'به گفتهٔ کتاب‌های درسی، لیبرال‌ها و محافظه‌کاران بیشتر در چه فرق دارند؟' },
        choices: [
          { en: 'How big government\'s role should be', es: 'Qué tan grande debe ser el gobierno', fa: 'نقش حکومت چقدر بزرگ باشد' },
          { en: 'Whether people should vote at all', es: 'Si la gente debe votar o no', fa: 'اینکه مردم اصلاً رأی بدهند یا نه' },
          { en: 'Which language the town should speak', es: 'Qué idioma debe hablar el pueblo', fa: 'شهر به کدام زبان گپ بزند' },
          { en: 'Which day the fair should open', es: 'Qué día debe abrir la feria', fa: 'میله کدام روز باز شود' }],
        answer: 0,
        why: { en: 'Liberals often want a bigger role for government. Conservatives often want a smaller role.', es: 'Los liberales suelen querer un papel más grande del gobierno. Los conservadores, uno más pequeño.', fa: 'لیبرال‌ها اکثراً نقش بزرگ‌تر حکومت را می‌خواهند. محافظه‌کاران نقش کوچک‌تر را.' } },
      { q: { en: 'A neighbor wants more town programs and more rules for business. Where do textbooks place this?', es: 'Un vecino quiere más programas del pueblo y más reglas para las empresas. ¿Dónde lo ponen los libros?', fa: 'یک همسایه برنامه‌های بیشتر شهر و مقررات بیشتر برای کاروبار می‌خواهد. کتاب‌ها این را کجا می‌گذارند؟' },
        choices: [
          { en: 'Liberal, on the left', es: 'Liberal, a la izquierda', fa: 'لیبرال، در چپ' },
          { en: 'Conservative, on the right', es: 'Conservador, a la derecha', fa: 'محافظه‌کار، در راست' },
          { en: 'Moderate, in the center', es: 'Moderado, en el centro', fa: 'میانه‌رو، در میانه' },
          { en: 'Not on the spectrum', es: 'Fuera del espectro', fa: 'بیرون از طیف' }],
        answer: 0,
        why: { en: 'More government programs and more regulation of business are liberal ideas in textbooks.', es: 'Más programas del gobierno y más regulación de las empresas son ideas liberales en los libros.', fa: 'برنامه‌های بیشتر حکومت و مقررات بیشتر بر کاروبار در کتاب‌ها فکرهای لیبرال هستند.' } },
      { q: { en: 'A neighbor wants lower taxes and fewer rules for business. Where do textbooks place this?', es: 'Un vecino quiere menos impuestos y menos reglas para las empresas. ¿Dónde lo ponen los libros?', fa: 'یک همسایه مالیات کمتر و مقررات کمتر برای کاروبار می‌خواهد. کتاب‌ها این را کجا می‌گذارند؟' },
        choices: [
          { en: 'Conservative, on the right', es: 'Conservador, a la derecha', fa: 'محافظه‌کار، در راست' },
          { en: 'Liberal, on the left', es: 'Liberal, a la izquierda', fa: 'لیبرال، در چپ' },
          { en: 'Moderate, in the center', es: 'Moderado, en el centro', fa: 'میانه‌رو، در میانه' },
          { en: 'Not on the spectrum', es: 'Fuera del espectro', fa: 'بیرون از طیف' }],
        answer: 0,
        why: { en: 'Lower taxes and less regulation of business are conservative ideas in textbooks.', es: 'Menos impuestos y menos regulación de las empresas son ideas conservadoras en los libros.', fa: 'مالیات کمتر و مقررات کمتر بر کاروبار در کتاب‌ها فکرهای محافظه‌کار هستند.' } },
      { q: { en: 'What do moderates often look for?', es: '¿Qué buscan muchas veces los moderados?', fa: 'میانه‌روها اکثراً دنبال چه هستند؟' },
        choices: [
          { en: 'A compromise between sides', es: 'Un acuerdo entre los lados', fa: 'سازش میان دو طرف' },
          { en: 'Only the ideas on the left', es: 'Solo las ideas de la izquierda', fa: 'فقط فکرهای طرف چپ' },
          { en: 'Only the ideas on the right', es: 'Solo las ideas de la derecha', fa: 'فقط فکرهای طرف راست' },
          { en: 'No government at all', es: 'Ningún gobierno', fa: 'هیچ حکومتی نباشد' }],
        answer: 0,
        why: { en: 'Moderates hold some ideas from each side and often look for a compromise.', es: 'Los moderados tienen ideas de cada lado y muchas veces buscan un acuerdo.', fa: 'میانه‌روها بعضی فکرها را از هر طرف دارند و اکثراً دنبال سازش هستند.' } },
      { q: { en: 'Where are most Americans on the political spectrum?', es: '¿Dónde están la mayoría de los estadounidenses en el espectro político?', fa: 'بیشتر امریکایی‌ها در کجای طیف سیاسی هستند؟' },
        choices: [
          { en: 'Moderate, near the center', es: 'Moderados, cerca del centro', fa: 'میانه‌رو، نزدیک میانه' },
          { en: 'Far out on the left side', es: 'Muy lejos, a la izquierda', fa: 'خیلی دور، در طرف چپ' },
          { en: 'Far out on the right side', es: 'Muy lejos, a la derecha', fa: 'خیلی دور، در طرف راست' },
          { en: 'Off the spectrum entirely', es: 'Totalmente fuera del espectro', fa: 'کاملاً بیرون از طیف' }],
        answer: 0,
        why: { en: 'Most Americans are moderate or near the center, with some ideas from each side.', es: 'La mayoría de los estadounidenses son moderados o están cerca del centro.', fa: 'بیشتر امریکایی‌ها میانه‌رو یا نزدیک میانه هستند، با فکرهایی از هر دو طرف.' } },
      { q: { en: 'Which is true about political parties and ideology?', es: '¿Qué es cierto sobre los partidos políticos y la ideología?', fa: 'کدام یکی دربارهٔ حزب‌های سیاسی و ایدیولوژی درست است؟' },
        choices: [
          { en: 'Each party has members with many ideas', es: 'Cada partido tiene miembros con muchas ideas', fa: 'هر حزب اعضایی با فکرهای گوناگون دارد' },
          { en: 'Every member of a party thinks the same', es: 'Todos los miembros de un partido piensan igual', fa: 'همهٔ اعضای یک حزب یک‌رقم فکر می‌کنند' },
          { en: 'Parties have no ideas about government', es: 'Los partidos no tienen ideas sobre el gobierno', fa: 'حزب‌ها هیچ فکری دربارهٔ حکومت ندارند' },
          { en: 'A party may have only one member', es: 'Un partido solo puede tener un miembro', fa: 'یک حزب فقط یک عضو داشته می‌تواند' }],
        answer: 0,
        why: { en: 'A party leans one way, but its members are spread all along the spectrum.', es: 'Un partido se inclina hacia un lado, pero sus miembros están a lo largo de todo el espectro.', fa: 'یک حزب به یک طرف میل دارد، اما اعضایش در تمام طول طیف پخش هستند.' } }
    ]
  },

  learned: [
    { en: 'An [[ideology|ideology]] is a set of ideas about government. The spectrum runs from left to right.', es: 'Una [[ideology|ideología]] es un conjunto de ideas sobre el gobierno. El espectro va de izquierda a derecha.', fa: '[[ideology|ایدیولوژی]] مجموعه‌ای از فکرها دربارهٔ حکومت است. طیف از چپ به راست می‌رود.' },
    { en: 'Liberals favor a bigger role for government. Conservatives favor a smaller role, lower taxes and fewer rules.', es: 'Los liberales prefieren un gobierno con un papel más grande. Los conservadores, uno más pequeño, menos impuestos y menos reglas.', fa: 'لیبرال‌ها نقش بزرگ‌تر حکومت را می‌خواهند. محافظه‌کاران نقش کوچک‌تر، مالیات کمتر و مقررات کمتر را.' },
    { en: 'Moderates hold some of each and seek [[compromise|compromise]]. Most Americans are near the center.', es: 'Los moderados tienen un poco de cada lado y buscan un [[compromise|acuerdo]]. La mayoría está cerca del centro.', fa: 'میانه‌روها کمی از هر طرف دارند و دنبال [[compromise|سازش]] هستند. بیشتر امریکایی‌ها نزدیک میانه‌اند.' }
  ],
  reflect: {
    q: { en: 'Think of a choice your town or school must make. What might each side say?', es: 'Piensa en una decisión que tu pueblo o escuela debe tomar. ¿Qué diría cada lado?', fa: 'به یک تصمیم فکر کن که شهر یا مکتب تو باید بگیرد. هر طرف چه خواهد گفت؟' },
    starter: { en: 'One side might say', es: 'Un lado podría decir', fa: 'یک طرف شاید بگوید' }
  }
};
