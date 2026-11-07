/* CIVICWALKER · Episode 4.1 · What Parties Do (Political Parties)
   Maple Ford, a MADE-UP small town in central Virginia, at its fall fair before an election.
   North (y 0-9): a house (north-west), the town hall (flat roof, its paved plaza in front) and the public library
   (north-east). Main Street runs east-west across the middle. South: the fair field, fenced, with a gate in the
   middle. Two made-up local parties have booths: the Green Leaf Party (west) and the Blue River Party (east), drawn
   the same size, the same distance from the center. The stage for tonight's candidate forum is south-west, the
   bandstand south-east, and the creek with its shallow ford (the town's name) runs along the east side.
   FAIRNESS: both parties are equally kind and hard-working; no real platforms, no real politicians.
   The charter stone asks the student to carry each job card to a political party (the middle of the fair, between
   both booths) or to the government (the town hall plaza). */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'GOVT',
  title: { en: 'What Parties Do', es: 'Lo que hacen los partidos', fa: 'حزب‌ها چه می‌کنند' },
  place: { en: 'Maple Ford, election season', es: 'Maple Ford, época de elecciones', fa: 'میپل فورد، موسم انتخابات' },
  intro: [
    { en: 'The Grump tore the page about political parties. Now nobody knows what parties do!',
      es: 'El Gruñón rompió la página sobre los partidos políticos. ¡Ahora nadie sabe qué hacen los partidos!',
      fa: 'غرغرو صفحهٔ حزب‌های سیاسی را پاره کرد. حالا هیچ کس نمی‌داند حزب‌ها چه می‌کنند!' },
    { en: 'Maple Ford is a made-up town. Talk to 3 people, then fix the charter stone.',
      es: 'Maple Ford es un pueblo inventado. Habla con 3 personas y luego arregla la piedra de la carta.',
      fa: 'میپل فورد یک شهرک خیالی است. با ۳ نفر گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  weather: { sky: 'leaves', time: 'day' },
  /* cut scenes: a made-up town placed in central Virginia (no timeline in this game) */
  scenes: {
    at: [-78.5, 37.8],
    start: [
      { en: 'Maple Ford is a made-up town in Virginia. Today is its fall fair.',
        es: 'Maple Ford es un pueblo inventado de Virginia. Hoy es su feria de otoño.',
        fa: 'میپل فورد یک شهرک خیالی در ویرجینیا است. امروز میلهٔ خزانی آن است.' },
      { en: 'An election is coming soon. Two parties have booths at the fair.',
        es: 'Pronto habrá una elección. Dos partidos tienen puestos en la feria.',
        fa: 'به زودی انتخابات است. دو حزب در میله غرفه دارند.' },
      { en: 'A party is a group of people who share ideas about government.',
        es: 'Un partido es un grupo de personas que comparten ideas sobre el gobierno.',
        fa: 'حزب گروهی از مردم است که دربارهٔ حکومت فکرهای مشترک دارند.' }
    ],
    page: { en: 'George Washington warned against parties. Still, the first parties formed while he was president.',
      es: 'George Washington advirtió contra los partidos. Aun así, los primeros partidos nacieron cuando él era presidente.',
      fa: 'جورج واشنگتن از حزب‌ها هشدار داد. باز هم، اولین حزب‌ها در زمان ریاست جمهوری او ساخته شدند.' },
    guess: {
      q: { en: 'What do you think a political party wants most?', es: '¿Qué crees que quiere más un partido político?', fa: 'فکر می‌کنی یک حزب سیاسی از همه بیشتر چه می‌خواهد؟' },
      choices: [
        { t: { en: '🏆 To win elections', es: '🏆 Ganar elecciones', fa: '🏆 بردن انتخابات' }, ok: true },
        { t: { en: '💵 To collect taxes', es: '💵 Cobrar impuestos', fa: '💵 جمع کردن مالیات' } }
      ],
      why: { en: 'Parties want their candidates to win, so they can lead. Collecting taxes is the government\'s job.', es: 'Los partidos quieren que ganen sus candidatos, para poder dirigir. Cobrar impuestos es trabajo del gobierno.', fa: 'حزب‌ها می‌خواهند نامزدهایشان ببرند تا رهبری کنند. جمع کردن مالیات کار حکومت است.' }
    },
    next: {
      q: { en: 'Next: party ideas. Can ideas sit on a line, from liberal to conservative?', es: 'Ahora: las ideas de los partidos. ¿Pueden ponerse las ideas en una línea, de liberal a conservador?', fa: 'بعدی: فکرهای حزب‌ها. آیا فکرها روی یک خط، از لیبرال تا محافظه‌کار، جا می‌گیرند؟' },
      choices: [
        { t: { en: 'Yes, on a line', es: 'Sí, en una línea', fa: 'بله، روی یک خط' }, ok: true },
        { t: { en: 'No, there is no line', es: 'No, no hay ninguna línea', fa: 'نه، هیچ خطی نیست' } }
      ],
      why: { en: 'Ideas are often placed on a line: liberal, then moderate in the middle, then conservative.', es: 'Las ideas suelen ponerse en una línea: liberal, luego moderado en el medio, luego conservador.', fa: 'فکرها اکثراً روی یک خط گذاشته می‌شوند: لیبرال، بعد میانه‌رو در وسط، بعد محافظه‌کار.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandpa Joe', es: 'Abuelo Joe', fa: 'پدرکلان جو' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#9a6a3a', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'My wife votes Green Leaf. I vote Blue River.', es: 'Mi esposa vota por Hoja Verde. Yo voto por Río Azul.', fa: 'خانمم به برگ سبز رأی می‌دهد. من به دریای آبی رأی می‌دهم.' },
        { en: 'We still share a pie at every fair!', es: '¡Igual compartimos un pastel en cada feria!', fa: 'باز هم در هر میله با هم کلچه می‌خوریم!' },
        { en: 'People can disagree about ideas and still be good neighbors.', es: 'La gente puede pensar distinto y aun así ser buenos vecinos.', fa: 'مردم می‌توانند فکرهای مختلف داشته باشند و باز همسایه‌های خوب باشند.' }
      ] },
    { at: [12, 3], name: { en: 'Ms. Grant', es: 'Sra. Grant', fa: 'خانم گرانت' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a6a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the town hall. The town council makes Maple Ford\'s laws here.', es: 'Bienvenido al ayuntamiento. Aquí el concejo hace las leyes de Maple Ford.', fa: 'به شاروالی خوش آمدی. شورای شهرک اینجا قانون‌های میپل فورد را می‌سازد.' },
        { en: 'My office collects the town\'s taxes. Taxes pay for roads and the library.', es: 'Mi oficina cobra los impuestos del pueblo. Pagan las calles y la biblioteca.', fa: 'دفتر من مالیات شهرک را جمع می‌کند. مالیات پول سرک‌ها و کتابخانه را می‌دهد.' },
        { en: 'Council members come from both parties. Here, they work for the whole town.', es: 'Los concejales vienen de los dos partidos. Aquí trabajan para todo el pueblo.', fa: 'اعضای شورا از هر دو حزب هستند. اینجا برای تمام شهرک کار می‌کنند.' }
      ] },
    { at: [22, 2], name: { en: 'Bea', es: 'Bea', fa: 'بی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#2f8f5a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I help at the library. I am an [[independent|independent]] voter.', es: 'Ayudo en la biblioteca. Soy votante [[independent|independiente]].', fa: 'من در کتابخانه کمک می‌کنم. من رأی‌دهندهٔ [[independent|مستقل]] هستم.' },
        { en: 'I join no party. I read both parties\' platforms, then I choose.', es: 'No me uno a ningún partido. Leo las plataformas de los dos y luego elijo.', fa: 'عضو هیچ حزبی نیستم. مرام‌نامهٔ هر دو حزب را می‌خوانم، بعد انتخاب می‌کنم.' },
        { en: 'The library is free. Anyone can come in and read here.', es: 'La biblioteca es gratis. Cualquiera puede entrar a leer aquí.', fa: 'کتابخانه مفت است. هر کس می‌تواند بیاید و اینجا بخواند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-9): a house (R over h, north-west), the town hall (J, door at 12,3) with its plaza (l), the library
     (Q over h, north-east), trees (T) and a well (O).
     y 10-11: Main Street (l) across the whole map.
     South (y 12-20): the fair field behind a fence (F) with a gate at x 13-16. The Green Leaf booths (m, west) and the
     Blue River booths (m, east) mirror each other. The stage (k planks) is south-west, the bandstand (J) south-east.
     East: the creek (~) with its shallow ford (s) at y 17. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR...JJJJJJJJJ...QQQQQ.,.,..T',
    'T.hdh...JJJJJJJJJ...hhdhh......T',
    'T.......JJJJdJJJJ...........T..T',
    'T.x.....lllllllll.........x....T',
    'T..T....lllllllll..T.......,...T',
    'T.......lllllllll..............T',
    'T..O....lllllllll....T....T....T',
    'T.T.....lllllllll..............T',
    'TT......lllllllll.........T...TT',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.FFFFFFFFFFF....FFFFFFFFFF.~~.T',
    'T.........x.................~~.T',
    'T...mmmm............mmmm....~~.T',
    'T...mmmm............mmmm....~~.T',
    'T...........................~~.T',
    'T.kkkkkk....................ss.T',
    'T.kkkkkk.....T.......JJJ....~~.T',
    'T.kkkkkk.............JJJ....~~.T',
    'T..""""......T......."""..T.~~.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~~TT'
  ],
  start: [15, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [27, 5], at: [27, 8], decor: 'flower',
      clue: { en: 'From this note, walk 3 steps south, under the trees by the library.', es: 'Desde esta nota, camina 3 pasos al sur, bajo los árboles junto a la biblioteca.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، زیر درخت‌ها کنار کتابخانه.' },
      text: { en: 'A red maple leaf! Maple trees turn red and gold in the fall.', es: '¡Una hoja de arce roja! Los arces se ponen rojos y dorados en otoño.', fa: 'یک برگ سرخ افرا! درخت‌های افرا در خزان سرخ و طلایی می‌شوند.' } },
    { clueAt: [27, 17], at: [30, 17], decor: 'shell',
      clue: { en: 'From this note, walk 3 steps east, across the shallow ford in the creek.', es: 'Desde esta nota, camina 3 pasos al este, cruzando el vado poco hondo del arroyo.', fa: 'از این یادداشت، ۳ قدم به شرق برو، از گذرگاه کم‌عمق جوی بگذر.' },
      text: { en: 'A smooth creek stone! A ford is a shallow place to walk across water.', es: '¡Una piedra lisa del arroyo! Un vado es un lugar poco hondo para cruzar el agua.', fa: 'یک سنگ صاف جوی! گذرگاه جای کم‌عمقی است که از آب پیاده می‌گذرند.' } }
  ],

  words: {
    'political party': { en: 'a group of people who share ideas and want to win elections', es: 'un grupo de personas que comparten ideas y quieren ganar elecciones', fa: 'گروهی از مردم که فکرهای مشترک دارند و می‌خواهند انتخابات را ببرند' },
    candidate: { en: 'a person who runs in an election', es: 'una persona que se presenta a una elección', fa: 'کسی که در انتخابات نامزد می‌شود' },
    nominate: { en: 'to pick someone to run for office', es: 'escoger a alguien para que se presente a un cargo', fa: 'کسی را برای نامزد شدن به یک مقام برگزیدن' },
    platform: { en: 'a list of a party\'s goals and ideas', es: 'una lista de las metas e ideas de un partido', fa: 'فهرست هدف‌ها و فکرهای یک حزب' },
    campaign: { en: 'to work to win votes, with speeches, signs and visits', es: 'trabajar para ganar votos, con discursos, carteles y visitas', fa: 'کار کردن برای بردن رأی، با سخنرانی، لوحه و دیدار' },
    'two-party system': { en: 'two big parties win most elections', es: 'dos partidos grandes ganan la mayoría de las elecciones', fa: 'دو حزب بزرگ بیشتر انتخابات را می‌برند' },
    'third party': { en: 'a smaller party, not one of the two big ones', es: 'un partido más pequeño, que no es uno de los dos grandes', fa: 'یک حزب کوچک‌تر، که از دو حزب بزرگ نیست' },
    independent: { en: 'a voter or candidate who belongs to no party', es: 'un votante o candidato que no es de ningún partido', fa: 'رأی‌دهنده یا نامزدی که عضو هیچ حزبی نیست' },
    government: { en: 'the people and offices that make and carry out laws for all', es: 'las personas y oficinas que hacen y cumplen las leyes para todos', fa: 'مردم و دفترهایی که برای همه قانون می‌سازند و اجرا می‌کنند' }
  },

  npcs: [
    {
      x: 5, y: 16,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Green Leaf volunteer', es: 'Voluntaria de Hoja Verde', fa: 'رضاکار برگ سبز' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#3a9a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Hi! I help at the Green Leaf booth. Ben, at Blue River, is my friend.', es: '¡Hola! Ayudo en el puesto de Hoja Verde. Ben, de Río Azul, es mi amigo.', fa: 'سلام! من در غرفهٔ برگ سبز کمک می‌کنم. بن، از دریای آبی، دوست من است.' },
        { en: 'A [[political party|political party]] is a group with shared ideas about government.', es: 'Un [[political party|partido político]] es un grupo con ideas comunes sobre el gobierno.', fa: '[[political party|حزب سیاسی]] گروهی با فکرهای مشترک دربارهٔ حکومت است.' },
        { en: 'Parties find people to run. Then they [[nominate|nominate]] their [[candidate|candidates]].', es: 'Los partidos buscan personas para competir. Luego [[nominate|nominan]] a sus [[candidate|candidatos]].', fa: 'حزب‌ها کسانی را پیدا می‌کنند. بعد [[candidate|نامزدهای]] خود را [[nominate|برمی‌گزینند]].' },
        { en: 'We also write a [[platform|platform]]: a list of our goals.', es: 'También escribimos una [[platform|plataforma]]: una lista de nuestras metas.', fa: 'ما یک [[platform|مرام‌نامه]] هم می‌نویسیم: فهرست هدف‌های ما.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What is a party\'s platform?', es: '¿Qué es la plataforma de un partido?', fa: 'مرام‌نامهٔ یک حزب چیست؟' },
        choices: [
          { ok: true, t: { en: 'A list of the party\'s goals', es: 'Una lista de las metas del partido', fa: 'فهرست هدف‌های حزب' },
            why: { en: 'Yes! A platform lists what a party wants to do if it wins.', es: '¡Sí! Una plataforma dice lo que un partido quiere hacer si gana.', fa: 'بله! مرام‌نامه می‌گوید حزب اگر ببرد چه می‌خواهد بکند.' } },
          { t: { en: 'The stage where speeches happen', es: 'El escenario de los discursos', fa: 'ستیجی که سخنرانی‌ها آنجاست' },
            why: { en: 'No. It sounds like a stage, but here it means a party\'s list of goals.', es: 'No. Suena a escenario, pero aquí es la lista de metas de un partido.', fa: 'نه. شبیه ستیج است، اما اینجا یعنی فهرست هدف‌های یک حزب.' } },
          { t: { en: 'The day people go to vote', es: 'El día en que la gente vota', fa: 'روزی که مردم رأی می‌دهند' },
            why: { en: 'No. That is election day. A platform is a list of a party\'s goals.', es: 'No. Ese es el día de la elección. Una plataforma es una lista de metas.', fa: 'نه. آن روز انتخابات است. مرام‌نامه فهرست هدف‌های یک حزب است.' } }
        ]
      }
    },
    {
      x: 22, y: 16,
      name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      role: { en: 'Blue River volunteer', es: 'Voluntario de Río Azul', fa: 'رضاکار دریای آبی' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#2f6fb0', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Welcome to the Blue River booth! Ana, at Green Leaf, is my neighbor.', es: '¡Bienvenido al puesto de Río Azul! Ana, de Hoja Verde, es mi vecina.', fa: 'به غرفهٔ دریای آبی خوش آمدی! آنا، از برگ سبز، همسایهٔ من است.' },
        { en: 'Parties [[campaign|campaign]]. They give speeches, make signs and raise money.', es: 'Los partidos hacen [[campaign|campaña]]. Dan discursos, hacen carteles y juntan dinero.', fa: 'حزب‌ها [[campaign|کمپاین]] می‌کنند. سخنرانی می‌کنند، لوحه می‌سازند و پول جمع می‌کنند.' },
        { en: 'Parties tell voters about the candidates and the issues.', es: 'Los partidos informan a los votantes sobre los candidatos y los temas.', fa: 'حزب‌ها به رأی‌دهندگان دربارهٔ نامزدها و موضوع‌ها معلومات می‌دهند.' },
        { en: 'On election day, both parties help voters get to the polls.', es: 'El día de la elección, los dos partidos ayudan a la gente a ir a votar.', fa: 'روز انتخابات، هر دو حزب کمک می‌کنند رأی‌دهندگان به محل رأی‌دهی برسند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What do both parties do on election day?', es: '¿Qué hacen los dos partidos el día de la elección?', fa: 'هر دو حزب روز انتخابات چه می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Help voters get to the polls', es: 'Ayudan a la gente a ir a votar', fa: 'کمک می‌کنند مردم به رأی‌دهی بروند' },
            why: { en: 'Yes! Parties remind people to vote and help them get there.', es: '¡Sí! Los partidos recuerdan a la gente que vote y la ayudan a llegar.', fa: 'بله! حزب‌ها رأی دادن را به یاد مردم می‌آورند و کمک می‌کنند برسند.' } },
          { t: { en: 'Count all the votes themselves', es: 'Cuentan ellos mismos todos los votos', fa: 'خودشان همهٔ رأی‌ها را می‌شمارند' },
            why: { en: 'No. Election workers for the government count the votes, not the parties.', es: 'No. Los trabajadores electorales del gobierno cuentan los votos, no los partidos.', fa: 'نه. کارمندان انتخابات حکومت رأی‌ها را می‌شمارند، نه حزب‌ها.' } },
          { t: { en: 'Choose who is allowed to vote', es: 'Escogen quién puede votar', fa: 'انتخاب می‌کنند کی رأی بدهد' },
            why: { en: 'No. The law says who can vote. Parties cannot pick the voters.', es: 'No. La ley dice quién puede votar. Los partidos no escogen a los votantes.', fa: 'نه. قانون می‌گوید کی رأی داده می‌تواند. حزب‌ها رأی‌دهنده را انتخاب نمی‌کنند.' } }
        ]
      }
    },
    {
      x: 6, y: 6,
      name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      role: { en: 'Election officer', es: 'Funcionaria electoral', fa: 'کارمند انتخابات' },
      look: { skin: 0, hair: '#120c08', shirt: '#7a4a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I work for the town of Maple Ford, not for any party.', es: 'Trabajo para el pueblo de Maple Ford, no para ningún partido.', fa: 'من برای شهرک میپل فورد کار می‌کنم، نه برای هیچ حزبی.' },
        { en: 'The [[government|government]] runs the election. Its election workers count the votes.', es: 'El [[government|gobierno]] organiza la elección. Sus trabajadores electorales cuentan los votos.', fa: '[[government|حکومت]] انتخابات را اداره می‌کند. کارمندان انتخابات آن رأی‌ها را می‌شمارند.' },
        { en: 'The government also makes laws, collects taxes and enforces the laws.', es: 'El gobierno también hace leyes, cobra impuestos y hace cumplir las leyes.', fa: 'حکومت قانون هم می‌سازد، مالیات جمع می‌کند و قانون را اجرا می‌کند.' },
        { en: 'The winners join the government. Their party helps them organize and lead.', es: 'Los ganadores entran al gobierno. Su partido los ayuda a organizarse y dirigir.', fa: 'برنده‌ها وارد حکومت می‌شوند. حزب‌شان کمک می‌کند منظم شوند و رهبری کنند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which job belongs to the government, not to a party?', es: '¿Qué trabajo es del gobierno y no de un partido?', fa: 'کدام کار مال حکومت است، نه مال حزب؟' },
        choices: [
          { ok: true, t: { en: 'Running the election', es: 'Organizar la elección', fa: 'اداره کردن انتخابات' },
            why: { en: 'Right! The government runs elections fairly, for every party alike.', es: '¡Correcto! El gobierno organiza las elecciones con justicia, igual para cada partido.', fa: 'درست! حکومت انتخابات را عادلانه و برای هر حزب یکسان اداره می‌کند.' } },
          { t: { en: 'Writing a platform', es: 'Escribir una plataforma', fa: 'نوشتن مرام‌نامه' },
            why: { en: 'No. Each party writes its own platform. The government does not.', es: 'No. Cada partido escribe su propia plataforma. El gobierno no.', fa: 'نه. هر حزب مرام‌نامهٔ خودش را می‌نویسد. حکومت نمی‌نویسد.' } },
          { t: { en: 'Nominating candidates', es: 'Nominar candidatos', fa: 'برگزیدن نامزدها' },
            why: { en: 'No. Parties nominate their candidates. The government runs the election.', es: 'No. Los partidos nominan a sus candidatos. El gobierno organiza la elección.', fa: 'نه. حزب‌ها نامزدهای خود را برمی‌گزینند. حکومت انتخابات را اداره می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'WELCOME TO MAPLE FORD · A made-up Virginia town · Fall fair today, south of Main Street!', es: 'BIENVENIDO A MAPLE FORD · Un pueblo inventado de Virginia · ¡Feria de otoño hoy, al sur de Main Street!', fa: 'به میپل فورد خوش آمدی · یک شهرک خیالی در ویرجینیا · امروز میلهٔ خزانی، جنوب سرک عمومی!' } },
    { x: 26, y: 4, text: { en: 'PUBLIC LIBRARY · Free for all. Read every party\'s platform here.', es: 'BIBLIOTECA PÚBLICA · Gratis para todos. Lee aquí la plataforma de cada partido.', fa: 'کتابخانهٔ عمومی · برای همه مفت. اینجا مرام‌نامهٔ هر حزب را بخوان.' } },
    { x: 10, y: 13, text: { en: 'FALL FAIR · WEST: GREEN LEAF BOOTH · EAST: BLUE RIVER BOOTH · STAGE: SOUTH-WEST', es: 'FERIA DE OTOÑO · OESTE: PUESTO HOJA VERDE · ESTE: PUESTO RÍO AZUL · ESCENARIO: SUROESTE', fa: 'میلهٔ خزانی · غرب: غرفهٔ برگ سبز · شرق: غرفهٔ دریای آبی · ستیج: جنوب غرب' } }
  ],

  /* the quest: Kofi the stage manager (gold !) on the stage, south-west -> Mr. Diaz by the library, north-east
     -> trade with Rosa the sign painter by the creek, south-east: bring the card of the candidate in no party
     (the goods: the independent's card north-west, a third-party card by the bandstand, the election officer's card
     by the town hall) -> back to Kofi */
  quest: {
    stat: 'mov',
    title: { en: 'The Missing Name Card', es: 'La tarjeta de nombre perdida', fa: 'کارت نام گمشده' },
    giver: {
      x: 4, y: 18,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Stage manager', es: 'Encargado del escenario', fa: 'مسئول ستیج' },
      look: { skin: 5, hair: '#120c08', shirt: '#e07b39', pants: '#2a3a5a', hat: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Tonight is the candidate forum on this stage. Every candidate will speak!', es: 'Esta noche hay un foro de candidatos en este escenario. ¡Hablará cada candidato!', fa: 'امشب روی این ستیج نشست نامزدها است. هر نامزد گپ می‌زند!' },
        { en: 'But one name card is missing. Ask Mr. Diaz by the library, north-east.', es: 'Pero falta una tarjeta de nombre. Pregúntale al Sr. Díaz junto a la biblioteca, al noreste.', fa: 'اما یک کارت نام گم است. از آقای دیاز کنار کتابخانه، شمال شرق، بپرس.' }
      ],
      wait: { en: 'Mr. Diaz stands by the library, north-east, across Main Street.', es: 'El Sr. Díaz está junto a la biblioteca, al noreste, cruzando Main Street.', fa: 'آقای دیاز کنار کتابخانه، شمال شرق، آن طرف سرک عمومی ایستاده است.' },
      thanks: { en: 'Every name card is here! Voters can hear from all the candidates. Thank you!', es: '¡Están todas las tarjetas! La gente puede escuchar a todos los candidatos. ¡Gracias!', fa: 'همهٔ کارت‌های نام اینجاست! مردم از همهٔ نامزدها می‌شنوند. تشکر!' }
    },
    contact: {
      x: 23, y: 5,
      name: { en: 'Mr. Diaz', es: 'Sr. Díaz', fa: 'آقای دیاز' },
      role: { en: 'Librarian', es: 'Bibliotecario', fa: 'کتابدار' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#8a2a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'In the US, two big parties win most races: Democrats and Republicans.', es: 'En EE. UU., dos partidos grandes ganan casi todo: demócratas y republicanos.', fa: 'در امریکا، دو حزب بزرگ بیشتر انتخابات را می‌برند: دموکرات‌ها و جمهوری‌خواهان.' },
        { en: 'That is a [[two-party system|two-party system]]. Smaller ones are [[third party|third parties]].', es: 'Eso es un [[two-party system|sistema bipartidista]]. Los más pequeños son [[third party|terceros partidos]].', fa: 'این [[two-party system|نظام دو حزبی]] است. حزب‌های کوچک‌تر [[third party|حزب سوم]] هستند.' },
        { en: 'Third parties raise new issues. Some candidates join no party: [[independent|independents]].', es: 'Los terceros partidos traen temas nuevos. Algunos candidatos no tienen partido: [[independent|independientes]].', fa: 'حزب‌های سوم موضوع‌های نو می‌آورند. بعضی نامزدها عضو حزب نیستند: [[independent|مستقل‌ها]].' },
        { en: 'Rosa, by the creek in the south-east, needs help with the last name card.', es: 'Rosa, junto al arroyo en el sureste, necesita ayuda con la última tarjeta.', fa: 'روزا، کنار جوی در جنوب شرق، برای کارت نام آخر کمک می‌خواهد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 25, y: 17,
        name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
        role: { en: 'Sign painter', es: 'Pintora de carteles', fa: 'نقاش لوحه' },
        look: { skin: 3, hair: '#3a2416', shirt: '#f2c14e', pants: '#3a2a20', hat: '#c0392b', style: 'long' },
        lines: [
          { en: 'I paint name cards for the forum. The wind blew three cards away!', es: 'Pinto tarjetas de nombre para el foro. ¡El viento se llevó tres!', fa: 'من برای نشست کارت نام رنگ می‌کنم. باد سه کارت را برد!' }
        ]
      },
      q: { en: 'One card is still missing. Bring me the card of the candidate in no party.', es: 'Todavía falta una tarjeta. Tráeme la del candidato que no es de ningún partido.', fa: 'یک کارت هنوز گم است. کارت نامزدی را بیاور که عضو هیچ حزبی نیست.' },
      choices: [
        { ok: true, at: [5, 8], icon: '🪧', t: { en: 'Card: Sam Ortiz, independent', es: 'Tarjeta: Sam Ortiz, independiente', fa: 'کارت: سم اورتیز، مستقل' },
          why: { en: 'Yes! Sam is an independent. Sam runs without any party, and voters can still choose Sam.', es: '¡Sí! Sam es independiente. Se presenta sin partido, y la gente igual puede elegirlo.', fa: 'بله! سم مستقل است. بدون هیچ حزبی نامزد شده و مردم باز هم می‌توانند او را انتخاب کنند.' } },
        { at: [19, 20], icon: '🪧', t: { en: 'Card: Mia Chen, Hilltop Party', es: 'Tarjeta: Mia Chen, Partido Colina', fa: 'کارت: میا چن، حزب سر تپه' },
          why: { en: 'Not this one. Mia is in the Hilltop Party, a small [[third party|third party]]. Her card is already up.', es: 'Esta no. Mia es del Partido Colina, un [[third party|tercer partido]] pequeño. Su tarjeta ya está.', fa: 'این نه. میا عضو حزب سر تپه است، یک [[third party|حزب سوم]] کوچک. کارتش سر جایش است.' } },
        { at: [7, 4], icon: '🪧', t: { en: 'Card: Ms. Lin, election officer', es: 'Tarjeta: Sra. Lin, funcionaria electoral', fa: 'کارت: خانم لین، کارمند انتخابات' },
          why: { en: 'No. Ms. Lin works for the town government. She runs the election; she is not running.', es: 'No. La Sra. Lin trabaja para el gobierno del pueblo. Organiza la elección; no es candidata.', fa: 'نه. خانم لین برای حکومت شهرک کار می‌کند. انتخابات را اداره می‌کند؛ نامزد نیست.' } }
      ],
      item: { icon: '🪧', name: { en: 'Name card: Sam Ortiz, independent', es: 'Tarjeta: Sam Ortiz, independiente', fa: 'کارت نام: سم اورتیز، مستقل' } }
    }
  },

  scraps: [[1, 1], [30, 2], [30, 20]],
  smudges: [[20, 6], [10, 19]],

  challenge: {
    at: [19, 8],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // the party area is in the middle of the fair, between both booths (the same for both parties);
    // the government area is the town hall plaza
    zones: [{ bin: 'party', x: 11, y: 14, w: 6, h: 2 }, { bin: 'gov', x: 10, y: 5, w: 5, h: 2 }],
    stat: 'mov',
    title: { en: 'Party or government?', es: '¿Partido o gobierno?', fa: 'حزب یا حکومت؟' },
    intro: { en: 'Carry each job card to who does it: a political party, or the government.',
      es: 'Lleva cada tarjeta de trabajo a quien lo hace: un partido político o el gobierno.',
      fa: 'هر کارت کار را پیش کسی ببر که آن را انجام می‌دهد: یک حزب سیاسی، یا حکومت.' },
    bins: [
      { id: 'party', icon: '🎪', label: { en: 'A political party', es: 'Un partido político', fa: 'یک حزب سیاسی' }, sub: { en: 'a group that wants to win elections', es: 'un grupo que quiere ganar elecciones', fa: 'گروهی که می‌خواهد انتخابات را ببرد' } },
      { id: 'gov', icon: '🏛️', label: { en: 'The government', es: 'El gobierno', fa: 'حکومت' }, sub: { en: 'it makes and carries out laws for all', es: 'hace y aplica leyes para todos', fa: 'برای همه قانون می‌سازد و اجرا می‌کند' } }
    ],
    items: [
      { bin: 'party', icon: '📋', t: { en: 'Write a platform of goals', es: 'Escribir una plataforma de metas', fa: 'نوشتن مرام‌نامهٔ هدف‌ها' },
        why: { en: 'Each party writes its own [[platform|platform]], a list of what it wants to do.', es: 'Cada partido escribe su propia [[platform|plataforma]], una lista de lo que quiere hacer.', fa: 'هر حزب [[platform|مرام‌نامهٔ]] خودش را می‌نویسد، فهرست کارهایی که می‌خواهد بکند.' } },
      { bin: 'party', icon: '🙋', t: { en: 'Nominate candidates to run', es: 'Nominar candidatos', fa: 'برگزیدن نامزدها' },
        why: { en: 'Parties pick their own candidates. The government does not choose who runs for a party.', es: 'Los partidos escogen a sus candidatos. El gobierno no elige quién compite por un partido.', fa: 'حزب‌ها نامزدهای خود را برمی‌گزینند. حکومت انتخاب نمی‌کند کی از طرف حزب نامزد شود.' } },
      { bin: 'party', icon: '📣', t: { en: 'Campaign with signs and speeches', es: 'Hacer campaña con carteles y discursos', fa: 'کمپاین با لوحه و سخنرانی' },
        why: { en: 'Parties [[campaign|campaign]] to win votes. The government must stay fair to every candidate.', es: 'Los partidos hacen [[campaign|campaña]] para ganar votos. El gobierno debe ser justo con todos.', fa: 'حزب‌ها برای بردن رأی [[campaign|کمپاین]] می‌کنند. حکومت باید با هر نامزد عادل باشد.' } },
      { bin: 'party', icon: '🪙', t: { en: 'Raise money for the campaign', es: 'Juntar dinero para la campaña', fa: 'جمع کردن پول برای کمپاین' },
        why: { en: 'Parties raise money from supporters. It pays for signs, flyers and trips.', es: 'Los partidos juntan dinero de quienes los apoyan. Paga carteles, volantes y viajes.', fa: 'حزب‌ها از هواداران پول جمع می‌کنند. با آن لوحه، ورقه و سفر را می‌پردازند.' } },
      { bin: 'gov', icon: '📜', t: { en: 'Pass laws for the whole town', es: 'Aprobar leyes para todo el pueblo', fa: 'تصویب قانون برای تمام شهرک' },
        why: { en: 'Lawmakers in the government pass laws. A party alone cannot make a law.', es: 'Los legisladores del gobierno aprueban las leyes. Un partido solo no puede hacer una ley.', fa: 'قانون‌سازان حکومت قانون تصویب می‌کنند. یک حزب به تنهایی قانون ساخته نمی‌تواند.' } },
      { bin: 'gov', icon: '💵', t: { en: 'Collect taxes', es: 'Cobrar impuestos', fa: 'جمع کردن مالیات' },
        why: { en: 'Only the government can collect taxes. Taxes pay for roads, schools and libraries.', es: 'Solo el gobierno puede cobrar impuestos. Pagan calles, escuelas y bibliotecas.', fa: 'فقط حکومت می‌تواند مالیات جمع کند. مالیات پول سرک، مکتب و کتابخانه را می‌دهد.' } },
      { bin: 'gov', icon: '🗳️', t: { en: 'Run the election', es: 'Organizar la elección', fa: 'اداره کردن انتخابات' },
        why: { en: 'The government runs elections, fair for every party and every voter.', es: 'El gobierno organiza las elecciones, justas para cada partido y cada votante.', fa: 'حکومت انتخابات را اداره می‌کند، عادلانه برای هر حزب و هر رأی‌دهنده.' } },
      { bin: 'gov', icon: '🔢', t: { en: 'Count the votes', es: 'Contar los votos', fa: 'شمردن رأی‌ها' },
        why: { en: 'Election workers for the government count the votes, so the count is fair to all.', es: 'Los trabajadores electorales del gobierno cuentan los votos, para que sea justo para todos.', fa: 'کارمندان انتخابات حکومت رأی‌ها را می‌شمارند تا شمارش برای همه عادلانه باشد.' } }
    ],
    success: { en: 'Every job is in the right place! Parties try to win; the government serves everyone.', es: '¡Cada trabajo está en su lugar! Los partidos buscan ganar; el gobierno sirve a todos.', fa: 'هر کار سر جای درست است! حزب‌ها برای بردن تلاش می‌کنند؛ حکومت به همه خدمت می‌کند.' }
  },

  boss: {
    at: [17, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Party-Pooper Grump', es: 'El Gruñón Aguafiestas', fa: 'غرغروی میله‌خراب‌کن' },
    appear: { en: 'The Party-Pooper Grump is hiding in the fog by the bandstand!', es: '¡El Gruñón Aguafiestas se esconde en la niebla junto al quiosco de música!', fa: 'غرغروی میله‌خراب‌کن در مه کنار جایگاه موسیقی پنهان است!' },
    taunt: { en: 'Parties? Booths? Bah! I want one party only: MY party. And no fair!', es: '¿Partidos? ¿Puestos? ¡Bah! Quiero un solo partido: MI partido. ¡Y nada de feria!', fa: 'حزب؟ غرفه؟ بَه! فقط یک حزب می‌خواهم: حزب خودم. و هیچ میله نباشد!' },
    win: { en: 'The fog lifts off the fair. Charter page 4.1 floats down into your hands!', es: 'La niebla se va de la feria. ¡La página 4.1 de la carta cae en tus manos!', fa: 'مه از روی میله کنار می‌رود. صفحهٔ ۴.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a political party?', es: '¿Qué es un partido político?', fa: 'حزب سیاسی چیست؟' },
        choices: [
          { en: 'A group with shared ideas about government', es: 'Un grupo con ideas comunes sobre el gobierno', fa: 'گروهی با فکرهای مشترک دربارهٔ حکومت' },
          { en: 'An office of the town that collects taxes', es: 'Una oficina del pueblo que cobra impuestos', fa: 'دفتری از شهرک که مالیات جمع می‌کند' },
          { en: 'A court that settles fights over the laws', es: 'Un tribunal que resuelve peleas sobre las leyes', fa: 'محکمه‌ای که دعواهای قانونی را حل می‌کند' },
          { en: 'A team that plans the town\'s fall fair', es: 'Un equipo que planea la feria de otoño del pueblo', fa: 'تیمی که میلهٔ خزانی شهرک را آماده می‌کند' }],
        answer: 0,
        why: { en: 'A political party is a group of people who share ideas and want to win elections.', es: 'Un partido político es un grupo de personas con ideas comunes que quiere ganar elecciones.', fa: 'حزب سیاسی گروهی از مردم است که فکرهای مشترک دارند و می‌خواهند انتخابات را ببرند.' } },
      { q: { en: 'What does it mean when a party nominates someone?', es: '¿Qué quiere decir que un partido nomina a alguien?', fa: 'وقتی یک حزب کسی را برمی‌گزیند، یعنی چه؟' },
        choices: [
          { en: 'It picks them to run for office', es: 'Lo escoge para competir por un cargo', fa: 'او را برای نامزدی برمی‌گزیند' },
          { en: 'It counts all the votes for them', es: 'Cuenta todos los votos por esa persona', fa: 'همهٔ رأی‌های او را می‌شمارد' },
          { en: 'It makes them pay a tax', es: 'Le hace pagar un impuesto', fa: 'او را مجبور به دادن مالیات می‌کند' },
          { en: 'It sends them out of town', es: 'Lo manda fuera del pueblo', fa: 'او را از شهرک بیرون می‌کند' }],
        answer: 0,
        why: { en: 'To nominate is to pick a candidate. The party chooses who runs under its name.', es: 'Nominar es escoger a un candidato. El partido elige quién compite con su nombre.', fa: 'برگزیدن یعنی انتخاب نامزد. حزب انتخاب می‌کند کی به نام آن نامزد شود.' } },
      { q: { en: 'Which is a job of a political party?', es: '¿Cuál es un trabajo de un partido político?', fa: 'کدام یکی کار یک حزب سیاسی است؟' },
        choices: [
          { en: 'Campaigning for its candidates', es: 'Hacer campaña por sus candidatos', fa: 'کمپاین برای نامزدهایش' },
          { en: 'Collecting taxes from people', es: 'Cobrar impuestos a la gente', fa: 'جمع کردن مالیات از مردم' },
          { en: 'Counting votes on election day', es: 'Contar votos el día de la elección', fa: 'شمردن رأی‌ها در روز انتخابات' },
          { en: 'Enforcing the town\'s laws', es: 'Hacer cumplir las leyes del pueblo', fa: 'اجرای قانون‌های شهرک' }],
        answer: 0,
        why: { en: 'Parties campaign to win votes. Taxes, counting votes and enforcing laws are government jobs.', es: 'Los partidos hacen campaña para ganar votos. Impuestos, contar votos y hacer cumplir leyes son del gobierno.', fa: 'حزب‌ها برای رأی کمپاین می‌کنند. مالیات، شمردن رأی و اجرای قانون کار حکومت است.' } },
      { q: { en: 'Which is a job of the government, not a party?', es: '¿Cuál es un trabajo del gobierno y no de un partido?', fa: 'کدام یکی کار حکومت است، نه کار حزب؟' },
        choices: [
          { en: 'Running the election', es: 'Organizar la elección', fa: 'اداره کردن انتخابات' },
          { en: 'Writing a platform', es: 'Escribir una plataforma', fa: 'نوشتن مرام‌نامه' },
          { en: 'Raising campaign money', es: 'Juntar dinero de campaña', fa: 'جمع کردن پول کمپاین' },
          { en: 'Nominating candidates', es: 'Nominar candidatos', fa: 'برگزیدن نامزدها' }],
        answer: 0,
        why: { en: 'The government runs elections for everyone. Parties write platforms, raise money and nominate candidates.', es: 'El gobierno organiza las elecciones para todos. Los partidos escriben plataformas, juntan dinero y nominan.', fa: 'حکومت انتخابات را برای همه اداره می‌کند. حزب‌ها مرام‌نامه می‌نویسند، پول جمع می‌کنند و نامزد برمی‌گزینند.' } },
      { q: { en: 'The US has a two-party system. What does that mean?', es: 'EE. UU. tiene un sistema bipartidista. ¿Qué quiere decir eso?', fa: 'امریکا نظام دو حزبی دارد. این یعنی چه؟' },
        choices: [
          { en: 'Two big parties win most races', es: 'Dos partidos grandes ganan casi todo', fa: 'دو حزب بزرگ بیشتر انتخابات را می‌برند' },
          { en: 'The law allows only two parties', es: 'La ley permite solo dos partidos', fa: 'قانون فقط دو حزب را اجازه می‌دهد' },
          { en: 'Each state has its own two parties', es: 'Cada estado tiene sus propios dos partidos', fa: 'هر ایالت دو حزب خودش را دارد' },
          { en: 'Two people share the presidency', es: 'Dos personas comparten la presidencia', fa: 'دو نفر با هم رئیس جمهور هستند' }],
        answer: 0,
        why: { en: 'Two big parties win most races. But the law allows other parties, and independents can run too.', es: 'Dos partidos grandes ganan casi todo. Pero la ley permite otros partidos, y los independientes también compiten.', fa: 'دو حزب بزرگ بیشتر انتخابات را می‌برند. اما قانون حزب‌های دیگر را اجازه می‌دهد و مستقل‌ها هم نامزد می‌شوند.' } },
      { q: { en: 'What is a third party?', es: '¿Qué es un tercer partido?', fa: 'حزب سوم چیست؟' },
        choices: [
          { en: 'A smaller party, not one of the big two', es: 'Un partido más pequeño, no uno de los dos grandes', fa: 'یک حزب کوچک‌تر، نه یکی از دو حزب بزرگ' },
          { en: 'The third person in a family who votes', es: 'La tercera persona de una familia que vota', fa: 'نفر سوم یک خانواده که رأی می‌دهد' },
          { en: 'A party that wins only every third election', es: 'Un partido que gana solo cada tercera elección', fa: 'حزبی که فقط هر انتخابات سوم را می‌برد' },
          { en: 'A party that is run by the government', es: 'Un partido que dirige el gobierno', fa: 'حزبی که حکومت آن را اداره می‌کند' }],
        answer: 0,
        why: { en: 'A third party, or minor party, is a smaller party. It can raise new issues and change results.', es: 'Un tercer partido, o partido menor, es un partido más pequeño. Puede traer temas nuevos y cambiar resultados.', fa: 'حزب سوم، یا حزب کوچک، یک حزب کوچک‌تر است. موضوع‌های نو می‌آورد و می‌تواند نتیجه را تغییر دهد.' } },
      { q: { en: 'How can a third party matter, even if it rarely wins?', es: '¿Cómo puede importar un tercer partido, aunque casi nunca gane?', fa: 'حزب سوم چطور مهم است، حتی اگر کم ببرد؟' },
        choices: [
          { en: 'It raises issues the big parties pick up', es: 'Trae temas que los partidos grandes toman', fa: 'موضوع‌هایی می‌آورد که حزب‌های بزرگ می‌گیرند' },
          { en: 'It runs the election and counts the votes', es: 'Organiza la elección y cuenta los votos', fa: 'انتخابات را اداره می‌کند و رأی‌ها را می‌شمارد' },
          { en: 'It makes the laws for the whole nation', es: 'Hace las leyes para todo el país', fa: 'برای تمام کشور قانون می‌سازد' },
          { en: 'It chooses who is allowed to vote', es: 'Escoge quién puede votar', fa: 'انتخاب می‌کند کی اجازهٔ رأی دارد' }],
        answer: 0,
        why: { en: 'Third parties bring up new issues. Big parties may take those ideas. They can also change who wins.', es: 'Los terceros partidos traen temas nuevos. Los grandes pueden tomar esas ideas. También pueden cambiar quién gana.', fa: 'حزب‌های سوم موضوع‌های نو می‌آورند. حزب‌های بزرگ شاید آن فکرها را بگیرند. می‌توانند برنده را هم تغییر دهند.' } },
      { q: { en: 'What is an independent candidate?', es: '¿Qué es un candidato independiente?', fa: 'نامزد مستقل کیست؟' },
        choices: [
          { en: 'A candidate who belongs to no party', es: 'Un candidato que no es de ningún partido', fa: 'نامزدی که عضو هیچ حزبی نیست' },
          { en: 'A candidate picked by the government', es: 'Un candidato escogido por el gobierno', fa: 'نامزدی که حکومت او را برگزیده' },
          { en: 'A candidate from both big parties', es: 'Un candidato de los dos partidos grandes', fa: 'نامزدی از هر دو حزب بزرگ' },
          { en: 'A candidate who does not need votes', es: 'Un candidato que no necesita votos', fa: 'نامزدی که به رأی ضرورت ندارد' }],
        answer: 0,
        why: { en: 'An independent runs without a party. Voters can still choose an independent.', es: 'Un independiente compite sin partido. La gente igual puede elegir a un independiente.', fa: 'مستقل بدون حزب نامزد می‌شود. مردم باز هم می‌توانند مستقل را انتخاب کنند.' } }
    ]
  },

  learned: [
    { en: 'A [[political party|political party]] nominates candidates, writes a platform, campaigns and raises money.', es: 'Un [[political party|partido político]] nomina candidatos, escribe una plataforma, hace campaña y junta dinero.', fa: '[[political party|حزب سیاسی]] نامزد برمی‌گزیند، مرام‌نامه می‌نویسد، کمپاین می‌کند و پول جمع می‌کند.' },
    { en: 'Parties inform voters, help them get to the polls, and help winners organize the government.', es: 'Los partidos informan a los votantes, los ayudan a ir a votar y ayudan a los ganadores a organizar el gobierno.', fa: 'حزب‌ها به رأی‌دهندگان معلومات می‌دهند، کمک می‌کنند رأی بدهند و به برنده‌ها در منظم کردن حکومت کمک می‌کنند.' },
    { en: 'The US has a [[two-party system|two-party system]], with third parties and independents too. The government runs elections.', es: 'EE. UU. tiene un [[two-party system|sistema bipartidista]], con terceros partidos e independientes. El gobierno organiza las elecciones.', fa: 'امریکا [[two-party system|نظام دو حزبی]] دارد، با حزب‌های سوم و مستقل‌ها. حکومت انتخابات را اداره می‌کند.' }
  ],
  reflect: {
    q: { en: 'If you started a party at your school, what would its platform say?', es: 'Si fundaras un partido en tu escuela, ¿qué diría su plataforma?', fa: 'اگر در مکتب خود یک حزب بسازی، مرام‌نامه‌اش چه می‌گوید؟' },
    starter: { en: 'My party\'s platform would say', es: 'La plataforma de mi partido diría', fa: 'مرام‌نامهٔ حزب من می‌گوید' }
  }
};
