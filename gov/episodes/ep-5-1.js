/* CIVICWALKER · Episode 5.1 · Two Houses of Congress (Structure and Powers of Congress)
   Washington, DC, Capitol Hill today, outside and around the Capitol (5.2 is set inside it). North is up.
   The Capitol stands in the middle-east: the Senate wing to the north (the Senate gallery door), the center under
   the dome, the House wing to the south (the House gallery door). Its West Front and steps (a paved terrace) face
   west, down the hill to the Reflecting Pool. North-west: a food cart square. South-west: a museum.
   East: the Library of Congress. South: Independence Avenue.
   Six survey posts around the hill each give one row of the House-and-Senate table; the charter stone asks
   questions only the table answers. Quest: a Virginia civics teacher lost her box of pocket Constitutions. */
window.EPISODE = {
  id: '5.1',
  realm: 5,
  sol: 'GOVT',
  title: { en: 'Two Houses of Congress', es: 'Las dos cámaras del Congreso', fa: 'دو مجلس کانگرس' },
  weather: { sky: 'petals', time: 'day' },
  place: { en: 'Capitol Hill, today', es: 'Capitol Hill, hoy', fa: 'تپهٔ کاپیتول، امروز' },
  intro: [
    { en: 'The Grump tore the page about Congress. People mix up the House and Senate!',
      es: 'El Gruñón rompió la página sobre el Congreso. ¡La gente confunde la Cámara y el Senado!',
      fa: 'غرغرو صفحهٔ کانگرس را پاره کرد. مردم مجلس نمایندگان و سنا را با هم گم می‌کنند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Washington, DC on the world map (no timeline in this game) */
  scenes: {
    at: [-77.01, 38.89],
    start: [
      { en: 'Washington, DC is the capital city of the United States.',
        es: 'Washington, D. C. es la ciudad capital de Estados Unidos.',
        fa: 'واشنگتن دی‌سی پایتخت ایالات متحدهٔ امریکا است.' },
      { en: 'Congress meets in the Capitol, on a hill called Capitol Hill.',
        es: 'El Congreso se reúne en el Capitolio, en una colina llamada Capitol Hill.',
        fa: 'کانگرس در کاپیتول جلسه می‌کند، روی تپه‌ای به نام تپهٔ کاپیتول.' },
      { en: 'Article I of the Constitution creates Congress and lists its powers.',
        es: 'El Artículo I de la Constitución crea el Congreso y nombra sus poderes.',
        fa: 'مادهٔ اول قانون اساسی کانگرس را می‌سازد و قدرت‌هایش را نام می‌برد.' }
    ],
    page: { en: 'The House has 435 voting members. The Senate has 100.',
      es: 'La Cámara tiene 435 miembros con voto. El Senado tiene 100.',
      fa: 'مجلس نمایندگان ۴۳۵ عضو با حق رأی دارد. سنا ۱۰۰ عضو دارد.' },
    guess: {
      q: { en: 'Do big states and small states get the same number of senators?', es: '¿Los estados grandes y los pequeños tienen el mismo número de senadores?', fa: 'آیا ایالت‌های بزرگ و کوچک به یک اندازه سناتور دارند؟' },
      choices: [
        { t: { en: '🟰 Yes, 2 each', es: '🟰 Sí, 2 cada uno', fa: '🟰 بله، هر کدام ۲' }, ok: true },
        { t: { en: '📈 No, big get more', es: '📈 No, los grandes más', fa: '📈 نه، بزرگ‌ها بیشتر' } }
      ],
      why: { en: 'Every state gets 2 senators. In the House, states with more people get more seats.', es: 'Cada estado tiene 2 senadores. En la Cámara, los estados con más gente tienen más asientos.', fa: 'هر ایالت ۲ سناتور دارد. در مجلس نمایندگان، ایالت‌های پرنفوس‌تر چوکی بیشتر دارند.' }
    },
    next: {
      q: { en: 'Next: how a bill becomes a law. Where does a House bill start?', es: 'Ahora: cómo un proyecto se vuelve ley. ¿Dónde empieza un proyecto en la Cámara?', fa: 'بعدی: لایحه چطور قانون می‌شود. لایحهٔ مجلس نمایندگان از کجا شروع می‌شود؟' },
      choices: [
        { t: { en: '📥 In the hopper', es: '📥 En la caja hopper', fa: '📥 در صندوق هاپر' }, ok: true },
        { t: { en: '✍️ At the White House', es: '✍️ En la Casa Blanca', fa: '✍️ در قصر سفید' } }
      ],
      why: { en: 'A House member drops the bill into a wooden box called the hopper. Then a committee studies it.', es: 'Un miembro de la Cámara pone el proyecto en una caja de madera llamada hopper. Luego lo estudia un comité.', fa: 'یک عضو مجلس لایحه را در یک صندوق چوبی به نام هاپر می‌اندازد. بعد یک کمیته آن را مطالعه می‌کند.' }
    }
  },
  /* houses (fun-pass-4): who works behind each door; walk in and talk */
  houses: [
    { at: [21, 4], name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 2, hair: '#1a1a1a', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'This door leads up to the Senate gallery. Visitors watch from there.', es: 'Esta puerta sube a la galería del Senado. Los visitantes miran desde allí.', fa: 'این دروازه به بالکن سنا می‌رود. مهمانان از آنجا تماشا می‌کنند.' },
        { en: 'You need a gallery pass. Your senator\'s office can give you one.', es: 'Necesitas un pase para la galería. La oficina de tu senador te lo puede dar.', fa: 'تو کارت بالکن لازم داری. دفتر سناتورت می‌تواند یکی به تو بدهد.' },
        { en: 'Look down. The Vice President may sit in the big chair up front.', es: 'Mira abajo. El vicepresidente puede sentarse en la silla grande del frente.', fa: 'پایین را ببین. معاون رئیس جمهور ممکن است روی چوکی بزرگ پیش رو بنشیند.' }
      ] },
    { at: [21, 17], name: { en: 'Mr. Diaz', es: 'Sr. Díaz', fa: 'آقای دیاز' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#7a2a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'This way to the House gallery. You can watch the House at work.', es: 'Por aquí se va a la galería de la Cámara. Puedes ver a la Cámara trabajar.', fa: 'از این راه به بالکن مجلس نمایندگان برو. کار مجلس را تماشا کن.' },
        { en: 'Members vote with a card in a small box at their seats.', es: 'Los miembros votan con una tarjeta en una cajita junto a sus asientos.', fa: 'اعضا با یک کارت در یک صندوق کوچک کنار چوکی‌شان رأی می‌دهند.' },
        { en: 'A big board on the wall shows how each member voted.', es: 'Un tablero grande en la pared muestra cómo votó cada miembro.', fa: 'یک تختهٔ بزرگ روی دیوار نشان می‌دهد هر عضو چطور رأی داد.' }
      ] },
    { at: [28, 12], name: { en: 'Mr. Chen', es: 'Sr. Chen', fa: 'آقای چن' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#3a6a5a', pants: '#3a3a3a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'Welcome to the reading room of the Library of Congress.', es: 'Bienvenido a la sala de lectura de la Biblioteca del Congreso.', fa: 'به اتاق مطالعهٔ کتابخانهٔ کانگرس خوش آمدی.' },
        { en: 'Congress started this library in 1800, to help it study and make laws.', es: 'El Congreso creó esta biblioteca en 1800, para estudiar y hacer leyes.', fa: 'کانگرس این کتابخانه را در سال ۱۸۰۰ ساخت تا مطالعه کند و قانون بسازد.' },
        { en: 'Today, anyone 16 or older can get a reader card here.', es: 'Hoy, cualquier persona de 16 años o más puede sacar una tarjeta de lector.', fa: 'امروز، هر کس ۱۶ ساله یا بزرگ‌تر می‌تواند اینجا کارت خواننده بگیرد.' }
      ] },
    { at: [5, 17], name: { en: 'Grandma Rosa', es: 'Abuela Rosa', fa: 'مادرکلان روزا' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I help visitors in this museum. Congress first met in the Capitol in 1800.', es: 'Ayudo a los visitantes de este museo. El Congreso se reunió por primera vez en el Capitolio en 1800.', fa: 'من در این موزیم به مهمانان کمک می‌کنم. کانگرس اولین بار در سال ۱۸۰۰ در کاپیتول جلسه کرد.' },
        { en: 'Back then, only some men could vote. Women and enslaved people could not.', es: 'En esa época, solo algunos hombres podían votar. Las mujeres y los esclavizados no.', fa: 'آن زمان، فقط بعضی مردان رأی داده می‌توانستند. زنان و بردگان نمی‌توانستند.' },
        { en: 'Until 1913, state lawmakers picked senators. Now the voters elect them.', es: 'Hasta 1913, los legisladores estatales escogían a los senadores. Ahora los eligen los votantes.', fa: 'تا سال ۱۹۱۳، قانون‌گذاران ایالت سناتورها را انتخاب می‌کردند. حالا رأی‌دهندگان آنها را انتخاب می‌کنند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (y 1-4): the food cart square (l) with food carts (m) and a sign.
     West (y 7-11): the Reflecting Pool (~) with a paved walk (l) all around it.
     Middle-east: the Capitol (D). Senate wing y 2-4 with the Senate gallery door (21,4); the center y 7-13 under the
     dome; House wing y 15-17 with the House gallery door (21,17). Paved plazas (l) at y 5-6 and y 14.
     The West Front terrace and steps (l, x 14-16) face west toward the pool; its sign at (14,9).
     East: a path (:) and the Library of Congress (J, door at 28,12). South-west: the museum (J, door at 5,17).
     South: Independence Avenue (l, y 19). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.llllllllllll...T.............T',
    'T.lmmllmmllmml....DDDDDDD......T',
    'T.llllllllllll....DDDDDDD..T...T',
    'T.lllllllxllll....DDDdDDD......T',
    'T.........T...llllllllllll.....T',
    'T..T..........llllllllllll..T..T',
    'T.lllllllllll.lllDDDDDDDDD::...T',
    'T.l~~~~~~~~~l.lllDDDDDDDDD:....T',
    'T.l~~~~~~~~~l.xllDDDDDDDDD:....T',
    'T.l~~~~~~~~~l.lllDDDDDDDDD:JJJJT',
    'T.lllllllllll.lllDDDDDDDDD:JJJJT',
    'T.............lllDDDDDDDDD:JdJJT',
    'T..T...T......lllDDDDDDDDD:::::T',
    'T.............llllllllllll.....T',
    'T..JJJJJJ.....llllDDDDDDD......T',
    'T..JJJJJJ.........DDDDDDD......T',
    'T..JJdJJJ.........DDDdDDD......T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T....T.....T.......T.....T.....T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [8, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 7], at: [2, 12], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps south, along the west side of the Reflecting Pool.', es: 'Desde esta nota, camina 5 pasos al sur, por el lado oeste del Estanque Reflectante.', fa: 'از این یادداشت، ۵ قدم به جنوب برو، از طرف غرب حوض آینه.' },
      text: { en: 'A shiny coin! Article I gives Congress the power to coin money.', es: '¡Una moneda brillante! El Artículo I le da al Congreso el poder de hacer monedas.', fa: 'یک سکهٔ براق! مادهٔ اول به کانگرس قدرت سکه زدن را می‌دهد.' } },
    { clueAt: [17, 18], at: [17, 20], decor: 'feather',
      clue: { en: 'From this note, walk 2 steps south, across Independence Avenue.', es: 'Desde esta nota, camina 2 pasos al sur, cruzando la avenida Independence.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، آن طرف سرک ایندیپندنس.' },
      text: { en: 'A feather pen! Long ago, members of Congress wrote with pens like this.', es: '¡Una pluma de ave! Hace mucho, los miembros del Congreso escribían con plumas así.', fa: 'یک قلم پَر! خیلی پیش، اعضای کانگرس با قلم‌هایی مثل این می‌نوشتند.' } }
  ],

  words: {
    congress: { en: 'the part of the US government that makes the laws', es: 'la parte del gobierno de EE. UU. que hace las leyes', fa: 'بخشی از حکومت امریکا که قانون می‌سازد' },
    bicameral: { en: 'having two houses, or two parts, that make laws', es: 'que tiene dos cámaras, o dos partes, que hacen leyes', fa: 'داشتن دو مجلس، یا دو بخش، که قانون می‌سازند' },
    census: { en: 'a count of every person in the country, every 10 years', es: 'un conteo de todas las personas del país, cada 10 años', fa: 'شمارش همهٔ مردم کشور، هر ۱۰ سال یک بار' },
    term: { en: 'the number of years a person serves before the next election', es: 'los años que una persona sirve antes de la próxima elección', fa: 'تعداد سال‌هایی که یک نفر تا انتخابات بعدی کار می‌کند' },
    speaker: { en: 'the leader of the House, chosen by its members', es: 'el líder de la Cámara, elegido por sus miembros', fa: 'رهبر مجلس نمایندگان، که اعضایش او را انتخاب می‌کنند' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده میان کشورها' },
    impeach: { en: 'to charge an official with a serious wrong act', es: 'acusar a un funcionario de una falta grave', fa: 'متهم کردن یک مأمور دولت به یک کار بد جدی' },
    'expressed powers': { en: 'powers written out in the Constitution, like coining money', es: 'poderes escritos en la Constitución, como hacer monedas', fa: 'قدرت‌هایی که در قانون اساسی نوشته شده، مثل سکه زدن' },
    'implied powers': { en: 'powers not written out, but needed to do the written jobs', es: 'poderes no escritos, pero necesarios para hacer los trabajos escritos', fa: 'قدرت‌هایی که نوشته نشده، اما برای کارهای نوشته‌شده لازم است' },
    'elastic clause': { en: 'the Necessary and Proper Clause; it stretches the powers of Congress', es: 'la cláusula necesaria y apropiada; estira los poderes del Congreso', fa: 'بند «لازم و مناسب»؛ قدرت‌های کانگرس را کش می‌کند' }
  },

  npcs: [
    {
      x: 15, y: 11,
      name: { en: 'Marisol', es: 'Marisol', fa: 'ماریسول' },
      role: { en: 'Tour guide', es: 'Guía turística', fa: 'رهنمای سیاحان' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2f8f8f', pants: '#2a2a3a', hat: '#1f3a6a', style: 'long' },
      lines: [
        { en: 'Welcome to the West Front of the Capitol! [[congress|Congress]] works inside.', es: '¡Bienvenido al Frente Oeste del Capitolio! El [[congress|Congreso]] trabaja adentro.', fa: 'به روی غربی کاپیتول خوش آمدی! [[congress|کانگرس]] داخل آن کار می‌کند.' },
        { en: 'Article I of the Constitution creates Congress. It has two parts.', es: 'El Artículo I de la Constitución crea el Congreso. Tiene dos partes.', fa: 'مادهٔ اول قانون اساسی کانگرس را می‌سازد. کانگرس دو بخش دارد.' },
        { en: 'The House meets in the south wing. The Senate meets in the north wing.', es: 'La Cámara se reúne en el ala sur. El Senado se reúne en el ala norte.', fa: 'مجلس نمایندگان در بال جنوبی جلسه می‌کند. سنا در بال شمالی.' },
        { en: 'Two houses means Congress is [[bicameral|bicameral]]. A bill must pass both.', es: 'Dos cámaras: el Congreso es [[bicameral|bicameral]]. Un proyecto debe pasar las dos.', fa: 'دو مجلس یعنی کانگرس [[bicameral|دو مجلسی]] است. لایحه باید از هر دو بگذرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why do we say Congress is bicameral?', es: '¿Por qué decimos que el Congreso es bicameral?', fa: 'چرا می‌گوییم کانگرس دو مجلسی است؟' },
        choices: [
          { ok: true, t: { en: 'It has two houses', es: 'Tiene dos cámaras', fa: 'دو مجلس دارد' },
            why: { en: 'Yes! Congress has two houses: the House of Representatives and the Senate.', es: '¡Sí! El Congreso tiene dos cámaras: la Cámara de Representantes y el Senado.', fa: 'بله! کانگرس دو مجلس دارد: مجلس نمایندگان و سنا.' } },
          { t: { en: 'It meets twice a year', es: 'Se reúne dos veces al año', fa: 'سال دو بار جلسه می‌کند' },
            why: { en: 'No. Bicameral means two houses. Congress meets many days each year.', es: 'No. Bicameral significa dos cámaras. El Congreso se reúne muchos días cada año.', fa: 'نه. دو مجلسی یعنی دو مجلس. کانگرس هر سال روزهای زیاد جلسه می‌کند.' } },
          { t: { en: 'It has two leaders', es: 'Tiene dos líderes', fa: 'دو رهبر دارد' },
            why: { en: 'Not quite. Bicameral means two houses, the House and the Senate.', es: 'No exactamente. Bicameral significa dos cámaras: la Cámara y el Senado.', fa: 'نه دقیقاً. دو مجلسی یعنی دو مجلس: مجلس نمایندگان و سنا.' } }
        ]
      }
    },
    {
      x: 6, y: 5,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Student from Virginia', es: 'Estudiante de Virginia', fa: 'شاگرد از ویرجینیا' },
      look: { skin: 2, hair: '#120c08', shirt: '#d9542b', pants: '#2a4a6a', style: 'short' },
      lines: [
        { en: 'My class came here by bus from Alexandria, Virginia!', es: '¡Mi clase vino en autobús desde Alexandria, Virginia!', fa: 'صنف ما با سرویس از الکساندریا، ویرجینیا اینجا آمد!' },
        { en: 'In the House, states with more people get more seats.', es: 'En la Cámara, los estados con más gente tienen más asientos.', fa: 'در مجلس نمایندگان، ایالت‌های پرنفوس‌تر چوکی بیشتر دارند.' },
        { en: 'A [[census|census]] counts everyone every 10 years. Then the seats can change.', es: 'Un [[census|censo]] cuenta a todos cada 10 años. Luego los asientos pueden cambiar.', fa: 'یک [[census|سرشماری]] هر ۱۰ سال همه را می‌شمارد. بعد چوکی‌ها تغییر کرده می‌توانند.' },
        { en: 'Virginia has 11 representatives. But every state gets just 2 senators.', es: 'Virginia tiene 11 representantes. Pero cada estado tiene solo 2 senadores.', fa: 'ویرجینیا ۱۱ نماینده دارد. اما هر ایالت فقط ۲ سناتور دارد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Virginia has 11 representatives in the House. How many senators does it have?', es: 'Virginia tiene 11 representantes en la Cámara. ¿Cuántos senadores tiene?', fa: 'ویرجینیا در مجلس نمایندگان ۱۱ نماینده دارد. چند سناتور دارد؟' },
        choices: [
          { ok: true, t: { en: '2, like every state', es: '2, como cada estado', fa: '۲، مثل هر ایالت' },
            why: { en: 'Right! Every state, big or small, has 2 senators.', es: '¡Correcto! Cada estado, grande o pequeño, tiene 2 senadores.', fa: 'درست! هر ایالت، بزرگ یا کوچک، ۲ سناتور دارد.' } },
          { t: { en: '11, like the House', es: '11, como en la Cámara', fa: '۱۱، مثل مجلس نمایندگان' },
            why: { en: 'No. House seats depend on population. Senate seats do not: 2 per state.', es: 'No. Los asientos de la Cámara dependen de la población. Los del Senado no: 2 por estado.', fa: 'نه. چوکی‌های مجلس نمایندگان به نفوس بسته است. چوکی‌های سنا نه: ۲ برای هر ایالت.' } },
          { t: { en: '4, for its big size', es: '4, por su gran tamaño', fa: '۴، به خاطر بزرگی‌اش' },
            why: { en: 'No. Size and people do not matter in the Senate. Each state has 2.', es: 'No. El tamaño y la gente no importan en el Senado. Cada estado tiene 2.', fa: 'نه. بزرگی و نفوس در سنا مهم نیست. هر ایالت ۲ دارد.' } }
        ]
      }
    },
    {
      x: 29, y: 13,
      name: { en: 'Ms. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e0c060', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Article I, Section 8 lists the powers of Congress.', es: 'El Artículo I, Sección 8, nombra los poderes del Congreso.', fa: 'مادهٔ اول، بخش ۸، قدرت‌های کانگرس را نام می‌برد.' },
        { en: 'Congress can tax, borrow, coin money and regulate trade.', es: 'El Congreso puede cobrar impuestos, pedir préstamos, hacer monedas y regular el comercio.', fa: 'کانگرس می‌تواند مالیات بگیرد، قرض کند، سکه بزند و تجارت را تنظیم کند.' },
        { en: 'It can declare war and raise armies. These are [[expressed powers|expressed powers]].', es: 'Puede declarar la guerra y formar ejércitos. Son [[expressed powers|poderes expresos]].', fa: 'می‌تواند اعلان جنگ کند و اردو بسازد. اینها [[expressed powers|قدرت‌های نوشته‌شده]] است.' },
        { en: 'The [[elastic clause|Necessary and Proper Clause]] stretches them into [[implied powers|implied powers]].', es: 'La [[elastic clause|cláusula necesaria y apropiada]] los estira en [[implied powers|poderes implícitos]].', fa: '[[elastic clause|بند لازم و مناسب]] آنها را به [[implied powers|قدرت‌های ضمنی]] کش می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which part of the Constitution gives Congress its implied powers?', es: '¿Qué parte de la Constitución le da al Congreso sus poderes implícitos?', fa: 'کدام بخش قانون اساسی به کانگرس قدرت‌های ضمنی می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'The Necessary and Proper Clause', es: 'La cláusula necesaria y apropiada', fa: 'بند لازم و مناسب' },
            why: { en: 'Yes! It lets Congress make laws needed to carry out its listed powers.', es: '¡Sí! Deja al Congreso hacer leyes necesarias para cumplir sus poderes escritos.', fa: 'بله! به کانگرس اجازه می‌دهد قانون‌های لازم برای کارهای نوشته‌شده‌اش بسازد.' } },
          { t: { en: 'The clause about the census', es: 'La cláusula sobre el censo', fa: 'بند مربوط به سرشماری' },
            why: { en: 'No. The census counts people for House seats. The elastic clause gives implied powers.', es: 'No. El censo cuenta a la gente para los asientos de la Cámara. La cláusula elástica da poderes implícitos.', fa: 'نه. سرشماری مردم را برای چوکی‌های مجلس می‌شمارد. بند کشدار قدرت ضمنی می‌دهد.' } },
          { t: { en: "The President's oath of office", es: 'El juramento del presidente', fa: 'سوگند رئیس جمهور' },
            why: { en: "No. The oath is the President's promise. Congress gets implied powers from the elastic clause.", es: 'No. El juramento es la promesa del presidente. El Congreso recibe poderes implícitos de la cláusula elástica.', fa: 'نه. سوگند وعدهٔ رئیس جمهور است. کانگرس قدرت ضمنی را از بند کشدار می‌گیرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 4, text: { en: 'FOOD CART SQUARE · CAPITOL HILL · Lunch for visitors, workers and school groups.', es: 'PLAZA DE CARRITOS DE COMIDA · CAPITOL HILL · Almuerzo para visitantes, trabajadores y grupos escolares.', fa: 'میدان کراچی‌های غذا · تپهٔ کاپیتول · نان چاشت برای مهمانان، کارگران و گروه‌های مکتب.' } },
    { x: 14, y: 9, text: { en: 'WEST FRONT · US CAPITOL · Senate in the north wing, House in the south wing.', es: 'FRENTE OESTE · CAPITOLIO · El Senado en el ala norte, la Cámara en el ala sur.', fa: 'روی غربی · کاپیتول امریکا · سنا در بال شمالی، مجلس نمایندگان در بال جنوبی.' } }
  ],

  /* the quest: Ms. Rahimi (gold !) on the plaza east of the Senate wing -> Beto the cook in the food cart square
     (north-west) -> find the box of pocket Constitutions by the museum, south-west -> back to Ms. Rahimi */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Constitutions', es: 'Las constituciones perdidas', fa: 'قانون‌های اساسی گمشده' },
    giver: {
      x: 27, y: 5,
      name: { en: 'Ms. Rahimi', es: 'Sra. Rahimi', fa: 'خانم رحیمی' },
      role: { en: 'Civics teacher', es: 'Maestra de educación cívica', fa: 'معلم مدنیات' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a6a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I brought pocket Constitutions, so my class can read Article I here.', es: 'Traje constituciones de bolsillo para que mi clase lea aquí el Artículo I.', fa: 'من قانون اساسی‌های جیبی آوردم تا صنفم اینجا مادهٔ اول را بخواند.' },
        { en: 'We ate lunch at the food carts. Now the box is gone!', es: 'Almorzamos en los carritos de comida. ¡Ahora la caja no está!', fa: 'ما نان چاشت را کنار کراچی‌های غذا خوردیم. حالا صندوق گم شده!' },
        { en: 'Please ask Beto, the cook at the food carts.', es: 'Por favor, pregúntale a Beto, el cocinero de los carritos.', fa: 'لطفاً از بیتو، آشپز کراچی‌های غذا، بپرس.' }
      ],
      wait: { en: 'Beto cooks at a food cart in the square, far to the north-west.', es: 'Beto cocina en un carrito de la plaza, lejos al noroeste.', fa: 'بیتو در یک کراچی غذا در میدان، دور در شمال غرب، آشپزی می‌کند.' },
      thanks: { en: 'Our Constitutions! Now we can read Article I together. Thank you!', es: '¡Nuestras constituciones! Ahora podemos leer juntos el Artículo I. ¡Gracias!', fa: 'قانون اساسی‌های ما! حالا با هم مادهٔ اول را خوانده می‌توانیم. تشکر!' }
    },
    contact: {
      x: 11, y: 3,
      name: { en: 'Beto', es: 'Beto', fa: 'بیتو' },
      role: { en: 'Food cart cook', es: 'Cocinero de carrito', fa: 'آشپز کراچی غذا' },
      look: { skin: 3, hair: '#1a1008', shirt: '#e8e0d0', pants: '#3a2a1a', hat: '#c03a2a', style: 'short' },
      lines: [
        { en: 'A little boy carried a box away. He wanted to help.', es: 'Un niño se llevó una caja. Quería ayudar.', fa: 'یک پسر کوچک یک صندوق را برد. می‌خواست کمک کند.' },
        { en: 'He walked south, past the Reflecting Pool. Look west of the museum door.', es: 'Caminó al sur, pasando el Estanque Reflectante. Busca al oeste de la puerta del museo.', fa: 'او به جنوب رفت، از کنار حوض آینه. غرب دروازهٔ موزیم را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [2, 18],
      hint: { en: 'Go south past the pool. Look west of the museum door', es: 'Ve al sur, pasa el estanque. Busca al oeste de la puerta del museo', fa: 'به جنوب برو، از حوض بگذر. غرب دروازهٔ موزیم را ببین' },
      found: { en: 'The box of pocket Constitutions! The boy left it by the museum corner.', es: '¡La caja de constituciones de bolsillo! El niño la dejó en la esquina del museo.', fa: 'صندوق قانون اساسی‌های جیبی! پسر آن را کنار کنج موزیم گذاشته بود.' },
      item: { icon: '📘', name: { en: 'A box of pocket Constitutions', es: 'Una caja de constituciones de bolsillo', fa: 'یک صندوق قانون اساسی جیبی' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 20]],
  smudges: [[9, 13], [23, 20]],

  challenge: {
    at: [12, 13],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per table row, all around the hill: by the Senate wing, west lawn, north-east lawn,
    // east lawn, south by Independence Avenue, and by the House wing
    spots: [[16, 5], [2, 13], [24, 1], [30, 8], [16, 18], [26, 15]],
    stat: 'pla',
    title: { en: 'House or Senate?', es: '¿Cámara o Senado?', fa: 'مجلس نمایندگان یا سنا؟' },
    intro: { en: 'The Grump mixed up the facts about the two houses! Read every post. Then answer.',
      es: '¡El Gruñón mezcló los datos de las dos cámaras! Lee cada poste. Luego responde.',
      fa: 'غرغرو معلومات دو مجلس را مخلوط کرد! هر تیر را بخوان. بعد جواب بده.' },
    table: {
      head: [
        { en: 'Fact', es: 'Dato', fa: 'معلومات' },
        { en: 'House of Representatives', es: 'Cámara de Representantes', fa: 'مجلس نمایندگان' },
        { en: 'Senate', es: 'Senado', fa: 'سنا' }
      ],
      rows: [
        [{ en: 'Members', es: 'Miembros', fa: 'اعضا' },
          { en: '435 voting members; seats by state population', es: '435 miembros con voto; asientos según la población del estado', fa: '۴۳۵ عضو با حق رأی؛ چوکی‌ها به اندازهٔ نفوس ایالت' },
          { en: '100 members; 2 from each state', es: '100 miembros; 2 de cada estado', fa: '۱۰۰ عضو؛ از هر ایالت ۲ نفر' }],
        [{ en: 'Term', es: 'Mandato', fa: 'دورهٔ کار' },
          { en: '2 years', es: '2 años', fa: '۲ سال' },
          { en: '6 years; about 1/3 elected every 2 years', es: '6 años; cerca de 1/3 se elige cada 2 años', fa: '۶ سال؛ تقریباً یک سوم هر ۲ سال انتخاب می‌شوند' }],
        [{ en: 'Age', es: 'Edad', fa: 'سن' },
          { en: 'at least 25 years old', es: 'al menos 25 años', fa: 'دست کم ۲۵ ساله' },
          { en: 'at least 30 years old', es: 'al menos 30 años', fa: 'دست کم ۳۰ ساله' }],
        [{ en: 'US citizen for', es: 'Ciudadano de EE. UU. por', fa: 'شهروند امریکا برای' },
          { en: 'at least 7 years', es: 'al menos 7 años', fa: 'دست کم ۷ سال' },
          { en: 'at least 9 years', es: 'al menos 9 años', fa: 'دست کم ۹ سال' }],
        [{ en: 'Leader', es: 'Líder', fa: 'رهبر' },
          { en: 'the Speaker of the House', es: 'el Presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'the Vice President (votes only to break a tie); the President pro tempore when the VP is away', es: 'el vicepresidente (vota solo para romper un empate); el presidente pro tempore cuando el vicepresidente no está', fa: 'معاون رئیس جمهور (فقط برای شکستن رأی برابر رأی می‌دهد)؛ رئیس موقت سنا وقتی معاون نیست' }],
        [{ en: 'Only this house', es: 'Solo esta cámara', fa: 'فقط این مجلس' },
          { en: 'starts tax bills; impeaches (charges) officials', es: 'empieza los proyectos de impuestos; acusa a funcionarios (juicio político)', fa: 'لایحه‌های مالیات را شروع می‌کند؛ مأموران را استیضاح (متهم) می‌کند' },
          { en: 'approves treaties (2/3 vote); confirms judges and top officials; holds impeachment trials', es: 'aprueba tratados (voto de 2/3); confirma jueces y altos funcionarios; hace los juicios políticos', fa: 'معاهده‌ها را تأیید می‌کند (رأی دو سوم)؛ قاضی‌ها و مأموران بلند را تأیید می‌کند؛ محاکمهٔ استیضاح را انجام می‌دهد' }]
      ],
      note: { en: 'Members of both houses must live in the state they serve. Both houses must pass every bill, and both must vote to declare war.', es: 'Los miembros de las dos cámaras deben vivir en el estado que representan. Las dos cámaras deben aprobar cada proyecto, y las dos deben votar para declarar la guerra.', fa: 'اعضای هر دو مجلس باید در ایالتی زندگی کنند که نماینده‌اش هستند. هر دو مجلس باید هر لایحه را تصویب کنند، و هر دو باید برای اعلان جنگ رأی بدهند.' }
    },
    questions: [
      { q: { en: 'Who must be at least 30 years old?', es: '¿Quién debe tener al menos 30 años?', fa: 'کی باید دست کم ۳۰ ساله باشد؟' },
        choices: [{ en: 'A senator', es: 'Un senador', fa: 'یک سناتور' }, { en: 'A representative', es: 'Un representante', fa: 'یک نماینده' }, { en: 'Every voter', es: 'Cada votante', fa: 'هر رأی‌دهنده' }, { en: 'A House clerk', es: 'Un secretario de la Cámara', fa: 'یک کاتب مجلس' }], answer: 0,
        why: { en: 'The Age row says a senator must be at least 30. A representative must be 25.', es: 'La fila Edad dice que un senador debe tener al menos 30. Un representante, 25.', fa: 'ردیف سن می‌گوید سناتور باید دست کم ۳۰ ساله باشد. نماینده ۲۵ ساله.' } },
      { q: { en: 'How long is one term in the House?', es: '¿Cuánto dura un mandato en la Cámara?', fa: 'یک دورهٔ کار در مجلس نمایندگان چقدر است؟' },
        choices: [{ en: '2 years', es: '2 años', fa: '۲ سال' }, { en: '6 years', es: '6 años', fa: '۶ سال' }, { en: '4 years', es: '4 años', fa: '۴ سال' }, { en: '9 years', es: '9 años', fa: '۹ سال' }], answer: 0,
        why: { en: 'The Term row says 2 years for the House. Senators serve 6 years.', es: 'La fila Mandato dice 2 años para la Cámara. Los senadores sirven 6 años.', fa: 'ردیف دورهٔ کار برای مجلس نمایندگان ۲ سال می‌گوید. سناتورها ۶ سال کار می‌کنند.' } },
      { q: { en: 'The Senate has a tie vote. Who can break the tie?', es: 'El Senado tiene un empate. ¿Quién puede romper el empate?', fa: 'در سنا رأی‌ها برابر است. کی می‌تواند آن را بشکند؟' },
        choices: [{ en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' }, { en: 'The Speaker of the House', es: 'El Presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' }, { en: 'The President pro tempore', es: 'El presidente pro tempore', fa: 'رئیس موقت سنا' }, { en: 'The oldest senator', es: 'El senador más viejo', fa: 'پیرترین سناتور' }], answer: 0,
        why: { en: 'The Leader row says the Vice President leads the Senate and votes only to break a tie.', es: 'La fila Líder dice que el vicepresidente dirige el Senado y vota solo para romper un empate.', fa: 'ردیف رهبر می‌گوید معاون رئیس جمهور سنا را رهبری می‌کند و فقط برای شکستن رأی برابر رأی می‌دهد.' } },
      { q: { en: 'The US signs a treaty with another country. Who must approve it?', es: 'EE. UU. firma un tratado con otro país. ¿Quién debe aprobarlo?', fa: 'امریکا با یک کشور دیگر معاهده امضا می‌کند. کی باید آن را تأیید کند؟' },
        choices: [{ en: 'The Senate, by a 2/3 vote', es: 'El Senado, con 2/3 de los votos', fa: 'سنا، با رأی دو سوم' }, { en: 'The House, by a 2/3 vote', es: 'La Cámara, con 2/3 de los votos', fa: 'مجلس نمایندگان، با رأی دو سوم' }, { en: 'The Senate, by half plus one', es: 'El Senado, con la mitad más uno', fa: 'سنا، با نصف به اضافهٔ یک' }, { en: 'Both houses, by a 3/4 vote', es: 'Las dos cámaras, con 3/4', fa: 'هر دو مجلس، با رأی سه چهارم' }], answer: 0,
        why: { en: 'The last row says only the Senate approves treaties, with a 2/3 vote.', es: 'La última fila dice que solo el Senado aprueba tratados, con 2/3 de los votos.', fa: 'ردیف آخر می‌گوید فقط سنا معاهده‌ها را با رأی دو سوم تأیید می‌کند.' } }
    ],
    success: { en: 'The House and the Senate facts are back in order!', es: '¡Los datos de la Cámara y el Senado vuelven a estar en orden!', fa: 'معلومات مجلس نمایندگان و سنا دوباره منظم شد!' }
  },

  boss: {
    at: [28, 17],
    stat: 'pla',
    need: 3,
    name: { en: 'The Gavel Grump', es: 'El Gruñón del Mazo', fa: 'غرغروی چکش' },
    appear: { en: 'The Gavel Grump is hiding in the fog by the Library of Congress!', es: '¡El Gruñón del Mazo se esconde en la niebla junto a la Biblioteca del Congreso!', fa: 'غرغروی چکش در مه کنار کتابخانهٔ کانگرس پنهان است!' },
    taunt: { en: 'Two houses? Bah! One house is plenty, and I will be its only member!', es: '¿Dos cámaras? ¡Bah! Una basta, ¡y yo seré su único miembro!', fa: 'دو مجلس؟ بَه! یک مجلس بس است، و من تنها عضوش می‌شوم!' },
    win: { en: 'The fog rolls off the hill. Charter page 5.1 floats down into your hands!', es: 'La niebla se va de la colina. ¡La página 5.1 de la carta cae en tus manos!', fa: 'مه از روی تپه کنار می‌رود. صفحهٔ ۵.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Congress has two houses. What is the word for this?', es: 'El Congreso tiene dos cámaras. ¿Cuál es la palabra para esto?', fa: 'کانگرس دو مجلس دارد. کلمهٔ این چیست؟' },
        choices: [
          { en: 'Bicameral', es: 'Bicameral', fa: 'دو مجلسی' },
          { en: 'Unicameral', es: 'Unicameral', fa: 'یک مجلسی' },
          { en: 'Federal', es: 'Federal', fa: 'فدرال' },
          { en: 'Elastic', es: 'Elástico', fa: 'کشدار' }],
        answer: 0,
        why: { en: 'Bi means two. Congress is bicameral: the House of Representatives and the Senate.', es: 'Bi significa dos. El Congreso es bicameral: la Cámara de Representantes y el Senado.', fa: '«بی» یعنی دو. کانگرس دو مجلسی است: مجلس نمایندگان و سنا.' } },
      { q: { en: 'How many voting members are in the House of Representatives?', es: '¿Cuántos miembros con voto tiene la Cámara de Representantes?', fa: 'مجلس نمایندگان چند عضو با حق رأی دارد؟' },
        choices: [
          { en: '435', es: '435', fa: '۴۳۵' },
          { en: '100', es: '100', fa: '۱۰۰' },
          { en: '538', es: '538', fa: '۵۳۸' },
          { en: '50', es: '50', fa: '۵۰' }],
        answer: 0,
        why: { en: 'The House has 435 voting members. The Senate has 100, 2 from each of the 50 states.', es: 'La Cámara tiene 435 miembros con voto. El Senado tiene 100, 2 de cada uno de los 50 estados.', fa: 'مجلس نمایندگان ۴۳۵ عضو با حق رأی دارد. سنا ۱۰۰ عضو دارد، از هر ۵۰ ایالت ۲ نفر.' } },
      { q: { en: 'Why does California have more representatives than Virginia?', es: '¿Por qué California tiene más representantes que Virginia?', fa: 'چرا کالیفرنیا از ویرجینیا نمایندهٔ بیشتر دارد؟' },
        choices: [
          { en: 'It has more people', es: 'Tiene más gente', fa: 'نفوس بیشتر دارد' },
          { en: 'It has more land', es: 'Tiene más tierra', fa: 'زمین بیشتر دارد' },
          { en: 'It joined the US first', es: 'Se unió primero a EE. UU.', fa: 'اول به امریکا پیوست' },
          { en: 'Its senators chose it', es: 'Sus senadores lo eligieron', fa: 'سناتورهایش انتخاب کردند' }],
        answer: 0,
        why: { en: 'House seats follow population. The census counts people every 10 years to share the seats.', es: 'Los asientos de la Cámara siguen la población. El censo cuenta a la gente cada 10 años para repartirlos.', fa: 'چوکی‌های مجلس نمایندگان به نفوس بسته است. سرشماری هر ۱۰ سال مردم را برای تقسیم چوکی‌ها می‌شمارد.' } },
      { q: { en: 'How long is one term for a senator?', es: '¿Cuánto dura un mandato de un senador?', fa: 'یک دورهٔ کار سناتور چقدر است؟' },
        choices: [
          { en: '6 years', es: '6 años', fa: '۶ سال' },
          { en: '2 years', es: '2 años', fa: '۲ سال' },
          { en: '4 years', es: '4 años', fa: '۴ سال' },
          { en: 'For life', es: 'De por vida', fa: 'تمام عمر' }],
        answer: 0,
        why: { en: 'Senators serve 6 years. About one third of the Senate is elected every 2 years.', es: 'Los senadores sirven 6 años. Cerca de un tercio del Senado se elige cada 2 años.', fa: 'سناتورها ۶ سال کار می‌کنند. تقریباً یک سوم سنا هر ۲ سال انتخاب می‌شود.' } },
      { q: { en: 'Who is the President of the Senate?', es: '¿Quién es el presidente del Senado?', fa: 'رئیس سنا کیست؟' },
        choices: [
          { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' },
          { en: 'The Speaker of the House', es: 'El Presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس محکمهٔ عالی' },
          { en: 'The oldest senator', es: 'El senador más viejo', fa: 'پیرترین سناتور' }],
        answer: 0,
        why: { en: 'The Vice President is President of the Senate and votes only to break a tie.', es: 'El vicepresidente es el presidente del Senado y vota solo para romper un empate.', fa: 'معاون رئیس جمهور رئیس سنا است و فقط برای شکستن رأی برابر رأی می‌دهد.' } },
      { q: { en: 'Which house must start every tax bill?', es: '¿Qué cámara debe empezar cada proyecto de impuestos?', fa: 'کدام مجلس باید هر لایحهٔ مالیات را شروع کند؟' },
        choices: [
          { en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' },
          { en: 'The Senate', es: 'El Senado', fa: 'سنا' },
          { en: 'Both at once', es: 'Las dos a la vez', fa: 'هر دو با هم' },
          { en: 'Neither one', es: 'Ninguna de las dos', fa: 'هیچ کدام' }],
        answer: 0,
        why: { en: 'Tax bills must start in the House. Its members face the voters every 2 years.', es: 'Los proyectos de impuestos deben empezar en la Cámara. Sus miembros enfrentan a los votantes cada 2 años.', fa: 'لایحه‌های مالیات باید در مجلس نمایندگان شروع شوند. اعضایش هر ۲ سال پیش رأی‌دهندگان می‌روند.' } },
      { q: { en: 'How does the United States declare war?', es: '¿Cómo declara la guerra Estados Unidos?', fa: 'امریکا چطور اعلان جنگ می‌کند؟' },
        choices: [
          { en: 'Both houses vote for it', es: 'Las dos cámaras lo votan', fa: 'هر دو مجلس به آن رأی می‌دهند' },
          { en: 'Only the Senate votes', es: 'Solo vota el Senado', fa: 'فقط سنا رأی می‌دهد' },
          { en: 'Only the House votes', es: 'Solo vota la Cámara', fa: 'فقط مجلس نمایندگان رأی می‌دهد' },
          { en: 'The courts decide it', es: 'Lo deciden las cortes', fa: 'محکمه‌ها تصمیم می‌گیرند' }],
        answer: 0,
        why: { en: 'Article I gives Congress the power to declare war. Both the House and the Senate must vote.', es: 'El Artículo I le da al Congreso el poder de declarar la guerra. La Cámara y el Senado deben votar.', fa: 'مادهٔ اول قدرت اعلان جنگ را به کانگرس می‌دهد. هم مجلس نمایندگان و هم سنا باید رأی بدهند.' } },
      { q: { en: 'Article I lists powers like taxing and coining money. What are they called?', es: 'El Artículo I nombra poderes como cobrar impuestos y hacer monedas. ¿Cómo se llaman?', fa: 'مادهٔ اول قدرت‌هایی مثل مالیات گرفتن و سکه زدن را نام می‌برد. نام آنها چیست؟' },
        choices: [
          { en: 'Expressed powers', es: 'Poderes expresos', fa: 'قدرت‌های نوشته‌شده' },
          { en: 'Implied powers', es: 'Poderes implícitos', fa: 'قدرت‌های ضمنی' },
          { en: 'Reserved powers', es: 'Poderes reservados', fa: 'قدرت‌های ذخیره' },
          { en: 'Royal powers', es: 'Poderes reales', fa: 'قدرت‌های شاهی' }],
        answer: 0,
        why: { en: 'Powers written out in Article I, Section 8 are expressed powers. The elastic clause adds implied powers.', es: 'Los poderes escritos en el Artículo I, Sección 8, son expresos. La cláusula elástica añade los implícitos.', fa: 'قدرت‌های نوشته‌شده در مادهٔ اول، بخش ۸، قدرت‌های نوشته‌شده‌اند. بند کشدار قدرت‌های ضمنی را اضافه می‌کند.' } }
    ]
  },

  learned: [
    { en: 'Article I creates [[congress|Congress]]. It is [[bicameral|bicameral]]: the House and the Senate.', es: 'El Artículo I crea el [[congress|Congreso]]. Es [[bicameral|bicameral]]: la Cámara y el Senado.', fa: 'مادهٔ اول [[congress|کانگرس]] را می‌سازد. کانگرس [[bicameral|دو مجلسی]] است: مجلس نمایندگان و سنا.' },
    { en: 'House: 435 members by population, 2-year terms. Senate: 100 members, 6-year terms.', es: 'Cámara: 435 miembros según la población, mandatos de 2 años. Senado: 100 miembros, mandatos de 6 años.', fa: 'مجلس نمایندگان: ۴۳۵ عضو به اندازهٔ نفوس، دورهٔ ۲ ساله. سنا: ۱۰۰ عضو، دورهٔ ۶ ساله.' },
    { en: 'Congress has [[expressed powers|expressed powers]], and the [[elastic clause|elastic clause]] gives [[implied powers|implied powers]].', es: 'El Congreso tiene [[expressed powers|poderes expresos]], y la [[elastic clause|cláusula elástica]] le da [[implied powers|poderes implícitos]].', fa: 'کانگرس [[expressed powers|قدرت‌های نوشته‌شده]] دارد، و [[elastic clause|بند کشدار]] [[implied powers|قدرت‌های ضمنی]] می‌دهد.' }
  ],
  reflect: {
    q: { en: 'Virginia has 11 representatives and 2 senators. What would you ask them to work on?', es: 'Virginia tiene 11 representantes y 2 senadores. ¿En qué les pedirías que trabajen?', fa: 'ویرجینیا ۱۱ نماینده و ۲ سناتور دارد. از آنها می‌خواهی روی چه کار کنند؟' },
    starter: { en: 'I would ask my members of Congress to', es: 'Les pediría a mis miembros del Congreso que', fa: 'از اعضای کانگرس خود می‌خواهم که' }
  }
};
