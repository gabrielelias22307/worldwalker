/* CIVICWALKER · Episode 4.3 · Election Night (Participation and Elections)
   Maple Ford, a made-up small town in Virginia, on election night. North-west: the town hall (a polling place) and the
   small voter registration office beside it. North-east: the Maple Ford News office. South-west: the high school gym
   (a second polling place) with a bake-sale table. South-east: the town park with the bandstand and the results board.
   Main Street runs east-west across the north, School Street across the south, and Center Street north-south between them.
   Four "trick boards" (one in each part of town) name campaign-ad tricks: the quest chases a flock of flyers to them.
   The mayor race is between two made-up candidates of two made-up parties, and BOTH parties' ads use tricks.
   The charter stone asks the student to walk the road to the White House: register, primary, general election,
   Electoral College. */
window.EPISODE = {
  id: '4.3',
  realm: 4,
  sol: 'GOVT',
  title: { en: 'Election Night', es: 'Noche de elecciones', fa: 'شب انتخابات' },
  place: { en: 'Maple Ford, election night', es: 'Maple Ford, noche de elecciones', fa: 'میپل فورد، شب انتخابات' },
  intro: [
    { en: 'The Grump tore the page about voting. Now people forget how elections work.',
      es: 'El Gruñón rompió la página sobre el voto. Ahora la gente olvida cómo funcionan las elecciones.',
      fa: 'غرغرو صفحهٔ رأی دادن را پاره کرد. حالا مردم فراموش می‌کنند انتخابات چطور کار می‌کند.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  weather: { sky: 'clear', time: 'night' },
  /* cut scenes: a made-up town in central Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-78.5, 37.8],
    start: [
      { en: 'Maple Ford is a small, made-up town in Virginia.',
        es: 'Maple Ford es un pueblo pequeño e inventado de Virginia.',
        fa: 'میپل فورد یک شهرک کوچک و خیالی در ویرجینیا است.' },
      { en: 'Tonight is election night. Voters choose a mayor and a President.',
        es: 'Esta noche es la noche de elecciones. Los votantes eligen alcalde y presidente.',
        fa: 'امشب شب انتخابات است. رأی‌دهندگان شاروال و رئیس جمهور را انتخاب می‌کنند.' },
      { en: 'Two parties run for mayor: the Green Leaf Party and the Blue River Party.',
        es: 'Dos partidos compiten por la alcaldía: el Partido Hoja Verde y el Partido Río Azul.',
        fa: 'دو حزب برای شاروالی رقابت می‌کنند: حزب برگ سبز و حزب دریای آبی.' }
    ],
    page: { en: 'Virginia has 13 electoral votes: 11 House members plus 2 senators.',
      es: 'Virginia tiene 13 votos electorales: 11 miembros de la Cámara más 2 senadores.',
      fa: 'ویرجینیا ۱۳ رأی انتخاباتی دارد: ۱۱ عضو مجلس نمایندگان و ۲ سناتور.' },
    guess: {
      q: { en: 'Who do you think can vote in a US election?', es: '¿Quién crees que puede votar en una elección de EE. UU.?', fa: 'فکر می‌کنی کی در انتخابات امریکا رأی داده می‌تواند؟' },
      choices: [
        { t: { en: '🪪 Citizens 18 and older', es: '🪪 Ciudadanos de 18 años o más', fa: '🪪 شهروندان ۱۸ ساله و بالاتر' }, ok: true },
        { t: { en: '👥 Anyone who lives here', es: '👥 Cualquiera que viva aquí', fa: '👥 هر کسی که اینجا زندگی می‌کند' } }
      ],
      why: { en: 'You must be a US citizen, 18 or older, and you must register first.', es: 'Debes ser ciudadano de EE. UU., tener 18 años o más y registrarte primero.', fa: 'باید شهروند امریکا باشی، ۱۸ ساله یا بالاتر، و اول ثبت نام کنی.' }
    },
    next: {
      q: { en: 'Next: Congress. How many members does the House of Representatives have?', es: 'Ahora: el Congreso. ¿Cuántos miembros tiene la Cámara de Representantes?', fa: 'بعدی: کانگرس. مجلس نمایندگان چند عضو دارد؟' },
      choices: [
        { t: { en: '435 members', es: '435 miembros', fa: '۴۳۵ عضو' }, ok: true },
        { t: { en: '100 members', es: '100 miembros', fa: '۱۰۰ عضو' } }
      ],
      why: { en: 'The House has 435 members, based on each state\'s people. The Senate has 100, two per state.', es: 'La Cámara tiene 435 miembros, según la población de cada estado. El Senado tiene 100, dos por estado.', fa: 'مجلس نمایندگان ۴۳۵ عضو دارد، به اندازهٔ مردم هر ایالت. سنا ۱۰۰ عضو دارد، دو نفر از هر ایالت.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [6, 3], name: { en: 'Mr. Moore', es: 'Sr. Moore', fa: 'آقای مور' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#3a5a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'In 1870, the 15th Amendment said race cannot stop a citizen from voting.', es: 'En 1870, la Enmienda 15 dijo que la raza no puede impedir votar a un ciudadano.', fa: 'در سال ۱۸۷۰، متمم پانزدهم گفت نژاد نمی‌تواند شهروند را از رأی دادن باز دارد.' },
        { en: 'But for many years, unfair tests and taxes still blocked many Black voters.', es: 'Pero por muchos años, pruebas y cobros injustos todavía bloqueaban a muchos votantes negros.', fa: 'اما سال‌های زیاد، امتحان‌ها و مالیه‌های ناعادلانه هنوز جلوی بسیاری از رأی‌دهندگان سیاه‌پوست را می‌گرفت.' },
        { en: 'In 1920, the 19th Amendment gave women the right to vote.', es: 'En 1920, la Enmienda 19 les dio a las mujeres el derecho a votar.', fa: 'در سال ۱۹۲۰، متمم نزدهم به زنان حق رأی داد.' }
      ] },
    { at: [20, 3], name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      look: { skin: 3, hair: '#1a1008', shirt: '#8a2a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am the editor. Campaign ads try to win your vote. Some use tricks.', es: 'Soy la editora. Los anuncios de campaña quieren tu voto. Algunos usan trucos.', fa: 'من ویراستار هستم. اعلان‌های کمپاین رأی تو را می‌خواهند. بعضی از آن‌ها چال دارند.' },
        { en: '"I am just a farmer like you!" That trick is called [[plain folks|plain folks]].', es: '"¡Soy un granjero como tú!" Ese truco se llama [[plain folks|gente común]].', fa: '«من هم مثل تو یک دهقان ساده هستم!» این چال [[plain folks|آدم عادی]] نام دارد.' },
        { en: 'An ad that shows only the good facts uses [[card stacking|card stacking]].', es: 'Un anuncio que muestra solo los datos buenos usa [[card stacking|cartas marcadas]].', fa: 'اعلانی که فقط حقیقت‌های خوب را نشان می‌دهد از [[card stacking|یک‌طرفه گفتن]] استفاده می‌کند.' }
      ] },
    { at: [6, 14], name: { en: 'Coach Dee', es: 'Entrenadora Dee', fa: 'مربی دی' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#2f8f5a', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'The school gym is a [[polling place|polling place]] too, for this side of town.', es: 'El gimnasio de la escuela también es un [[polling place|lugar de votación]], para este lado del pueblo.', fa: 'سالون ورزش مکتب هم یک [[polling place|محل رأی‌دهی]] است، برای این طرف شهر.' },
        { en: 'Each voter marks a [[ballot|ballot]] alone, in private. No one sees your choice.', es: 'Cada votante marca su [[ballot|boleta]] solo, en privado. Nadie ve lo que eliges.', fa: 'هر رأی‌دهنده [[ballot|ورقهٔ رأی]] را تنها و پنهانی پر می‌کند. هیچ کس انتخاب تو را نمی‌بیند.' },
        { en: 'Earlier this year, each party held a [[primary|primary]] here to pick its candidates.', es: 'A principios de este año, cada partido hizo aquí una [[primary|primaria]] para elegir a sus candidatos.', fa: 'اوایل امسال، هر حزب اینجا یک [[primary|انتخابات مقدماتی]] برگزار کرد تا نامزدهایش را انتخاب کند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-4): the town hall (J over h, door at 6,3), the voter registration office (no door), Center Street (l, x 15-16),
     the Maple Ford News office (door at 20,3). Main Street (l) on row 5.
     South: the high school gym (Q over h, door at 6,14) with a bake-sale table (m), School Street (l) on row 16,
     and the town park with the bandstand (Q), the results board (sign at 22,14) and a fountain (O).
     Trick boards (open ground, each with a sign): glittering words (NW), name-calling (NE), testimonial (SW), bandwagon (SE). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJJJ.JJJll.JJJJJ..T..T..T',
    'T.JJJJJJJJJ.JJJll.JJJJJ........T',
    'T.hhhhdhhhh.hhhll.hhdhh........T',
    'T.......x..x...ll..x...........T',
    'TllllllllllllllllllllllllllllllT',
    'T..............ll..............T',
    'T....x...T.....ll.....T..x.....T',
    'T..............ll..............T',
    'T.T....T......Tll....T......T..T',
    'T..............ll..............T',
    'T..............ll..............T',
    'T..QQQQQQQ.....ll....QQQ.......T',
    'T..QQQQQQQ.mm..ll....QQQ.......T',
    'T..hhhdhhhx....ll.....x........T',
    'T..............ll..............T',
    'TllllllllllllllllllllllllllllllT',
    'T..............ll..............T',
    'T..T....x......ll...O...x......T',
    'T..............ll..............T',
    'T....T....T....ll.....T....T...T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 8], at: [12, 11], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south. Look just past the line of trees.', es: 'Desde esta nota, camina 3 pasos al sur. Busca justo después de la fila de árboles.', fa: 'از این یادداشت، ۳ قدم به جنوب برو. کمی آن طرف قطار درخت‌ها را ببین.' },
      text: { en: 'An old campaign button! Long ago, voters wore buttons to show who they liked.', es: '¡Un viejo botón de campaña! Hace mucho, los votantes usaban botones para mostrar a quién apoyaban.', fa: 'یک دکمهٔ کهنهٔ کمپاین! خیلی پیش، رأی‌دهندگان دکمه می‌زدند تا نشان دهند کی را دوست دارند.' } },
    { clueAt: [29, 15], at: [29, 19], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south, toward the park corner.', es: 'Desde esta nota, camina 4 pasos al sur, hacia la esquina del parque.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، به طرف کنج پارک.' },
      text: { en: 'A feather pen! Long ago, people wrote and signed papers with pens like this.', es: '¡Una pluma de ave! Hace mucho, la gente escribía y firmaba papeles con plumas así.', fa: 'یک قلم پَر! خیلی پیش، مردم با چنین قلم‌هایی می‌نوشتند و کاغذها را امضا می‌کردند.' } }
  ],

  words: {
    citizen: { en: 'a full member of a country, with rights', es: 'un miembro pleno de un país, con derechos', fa: 'عضو کامل یک کشور، با حقوق' },
    register: { en: 'to sign up on the voter list before you vote', es: 'inscribirse en la lista de votantes antes de votar', fa: 'پیش از رأی دادن، نام خود را در فهرست رأی‌دهندگان نوشتن' },
    amendment: { en: 'a change or addition to the Constitution', es: 'un cambio o una adición a la Constitución', fa: 'یک تغییر یا افزودگی در قانون اساسی' },
    'polling place': { en: 'the building where people go to vote', es: 'el edificio donde la gente va a votar', fa: 'ساختمانی که مردم برای رأی دادن به آن می‌روند' },
    ballot: { en: 'the paper or screen where you mark your vote', es: 'el papel o la pantalla donde marcas tu voto', fa: 'کاغذ یا صفحه‌ای که رأی خود را روی آن نشانی می‌کنی' },
    party: { en: 'a group of people who share ideas and want to win elections', es: 'un grupo de personas con ideas parecidas que quiere ganar elecciones', fa: 'گروهی از مردم که فکرهای مشترک دارند و می‌خواهند انتخابات را ببرند' },
    primary: { en: 'an election where a party picks its candidate', es: 'una elección donde un partido escoge a su candidato', fa: 'انتخاباتی که در آن یک حزب نامزد خود را انتخاب می‌کند' },
    'general election': { en: 'the main election in November, between the parties\' candidates', es: 'la elección principal en noviembre, entre los candidatos de los partidos', fa: 'انتخابات اصلی در ماه نومبر، میان نامزدهای حزب‌ها' },
    'electoral college': { en: 'the group of electors from every state who choose the President', es: 'el grupo de electores de cada estado que elige al presidente', fa: 'گروه انتخاب‌کنندگان از هر ایالت که رئیس جمهور را انتخاب می‌کنند' },
    elector: { en: 'a person who casts one of a state\'s votes for President', es: 'una persona que da uno de los votos de un estado para presidente', fa: 'کسی که یکی از رأی‌های یک ایالت را برای رئیس جمهور می‌دهد' },
    turnout: { en: 'how many of the people who can vote really do vote', es: 'cuántas de las personas que pueden votar de verdad votan', fa: 'چند نفر از کسانی که حق رأی دارند واقعاً رأی می‌دهند' },
    campaign: { en: 'the work a candidate does to win votes: ads, speeches, visits', es: 'el trabajo de un candidato para ganar votos: anuncios, discursos, visitas', fa: 'کاری که یک نامزد برای بردن رأی می‌کند: اعلان، سخنرانی، دیدار' },
    bandwagon: { en: 'an ad trick: "everyone is doing it, so you should too"', es: 'un truco de anuncio: "todos lo hacen, así que tú también"', fa: 'یک چال اعلان: «همه این کار را می‌کنند، پس تو هم بکن»' },
    'name-calling': { en: 'an ad trick: calling the other side bad names', es: 'un truco de anuncio: ponerle nombres feos al otro lado', fa: 'یک چال اعلان: به طرف مقابل نام‌های بد دادن' },
    testimonial: { en: 'an ad trick: a famous person says to vote for someone', es: 'un truco de anuncio: una persona famosa dice por quién votar', fa: 'یک چال اعلان: یک آدم مشهور می‌گوید به کی رأی بدهی' },
    'glittering generalities': { en: 'an ad trick: big, nice words with no facts', es: 'un truco de anuncio: palabras grandes y bonitas sin datos', fa: 'یک چال اعلان: کلمه‌های بزرگ و زیبا بدون حقیقت' },
    'plain folks': { en: 'an ad trick: "I am just an ordinary person like you"', es: 'un truco de anuncio: "soy una persona común como tú"', fa: 'یک چال اعلان: «من هم یک آدم عادی مثل تو هستم»' },
    'card stacking': { en: 'an ad trick: showing only the facts that help one side', es: 'un truco de anuncio: mostrar solo los datos que ayudan a un lado', fa: 'یک چال اعلان: فقط حقیقت‌هایی را نشان دادن که به یک طرف کمک می‌کند' }
  },

  npcs: [
    {
      x: 4, y: 6,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Poll worker', es: 'Trabajadora electoral', fa: 'کارمند محل رأی‌دهی' },
      look: { skin: 2, hair: '#3a2416', shirt: '#c0392b', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome! Tonight the town hall is a [[polling place|polling place]].', es: '¡Bienvenido! Esta noche el ayuntamiento es un [[polling place|lugar de votación]].', fa: 'خوش آمدی! امشب شاروالی یک [[polling place|محل رأی‌دهی]] است.' },
        { en: 'To vote, you must be a US [[citizen|citizen]], 18 or older.', es: 'Para votar, debes ser [[citizen|ciudadano]] de EE. UU. y tener 18 años o más.', fa: 'برای رأی دادن، باید [[citizen|شهروند]] امریکا باشی، ۱۸ ساله یا بالاتر.' },
        { en: 'You must also [[register|register]] first. Then your name is on the voter list.', es: 'También debes [[register|registrarte]] primero. Así tu nombre está en la lista de votantes.', fa: 'اول باید [[register|ثبت نام]] هم کنی. آن وقت نامت در فهرست رأی‌دهندگان است.' },
        { en: 'The 26th [[amendment|Amendment]] set the voting age at 18, in 1971.', es: 'La [[amendment|Enmienda]] 26 fijó la edad para votar en 18 años, en 1971.', fa: '[[amendment|متمم]] بیست و ششم در سال ۱۹۷۱ سن رأی دادن را ۱۸ سال ساخت.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Mia is 18 and a US citizen. What must she do before she can vote?', es: 'Mía tiene 18 años y es ciudadana de EE. UU. ¿Qué debe hacer antes de votar?', fa: 'میا ۱۸ ساله و شهروند امریکا است. پیش از رأی دادن چه باید بکند؟' },
        choices: [
          { ok: true, t: { en: 'Register to vote', es: 'Registrarse para votar', fa: 'برای رأی ثبت نام کند' },
            why: { en: 'Yes! She must register first. Then her name is on the voter list.', es: '¡Sí! Primero debe registrarse. Así su nombre está en la lista de votantes.', fa: 'بله! اول باید ثبت نام کند. آن وقت نامش در فهرست رأی‌دهندگان است.' } },
          { t: { en: 'Join a political party', es: 'Unirse a un partido político', fa: 'عضو یک حزب سیاسی شود' },
            why: { en: 'No. You do not have to join a party to vote in November.', es: 'No. No tienes que unirte a un partido para votar en noviembre.', fa: 'نه. برای رأی دادن در نومبر لازم نیست عضو حزب شوی.' } },
          { t: { en: 'Pay a voting tax', es: 'Pagar un impuesto para votar', fa: 'مالیهٔ رأی بپردازد' },
            why: { en: 'No. Voting taxes, called poll taxes, are not allowed. Voting is free.', es: 'No. Los impuestos para votar no están permitidos. Votar es gratis.', fa: 'نه. گرفتن مالیه برای رأی اجازه نیست. رأی دادن رایگان است.' } }
        ]
      }
    },
    {
      x: 22, y: 6,
      name: { en: 'Jordan', es: 'Jordan', fa: 'جوردن' },
      role: { en: 'Reporter', es: 'Reportero', fa: 'خبرنگار' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I write for the Maple Ford News. Tonight I report the results.', es: 'Escribo para el Maple Ford News. Esta noche informo los resultados.', fa: 'من برای روزنامهٔ میپل فورد می‌نویسم. امشب نتیجه‌ها را گزارش می‌دهم.' },
        { en: 'For President, each state gets [[elector|electors]]: one for each member of Congress.', es: 'Para presidente, cada estado tiene [[elector|electores]]: uno por cada miembro del Congreso.', fa: 'برای رئیس جمهور، هر ایالت [[elector|انتخاب‌کنندگان]] دارد: یکی برای هر عضو کانگرس.' },
        { en: 'That is its House members plus 2 senators. Virginia has 13.', es: 'Son sus miembros de la Cámara más 2 senadores. Virginia tiene 13.', fa: 'یعنی اعضای مجلس نمایندگان آن به اضافهٔ ۲ سناتور. ویرجینیا ۱۳ دارد.' },
        { en: 'The [[electoral college|Electoral College]] has 538 electors. A candidate needs 270 to win.', es: 'El [[electoral college|Colegio Electoral]] tiene 538 electores. Un candidato necesita 270 para ganar.', fa: '[[electoral college|کالج انتخاباتی]] ۵۳۸ انتخاب‌کننده دارد. نامزد برای بردن ۲۷۰ رأی لازم دارد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How many electoral votes does a candidate need to become President?', es: '¿Cuántos votos electorales necesita un candidato para ser presidente?', fa: 'یک نامزد برای رئیس جمهور شدن چند رأی انتخاباتی لازم دارد؟' },
        choices: [
          { ok: true, t: { en: '270 of the 538', es: '270 de los 538', fa: '۲۷۰ از ۵۳۸' },
            why: { en: 'Right! 270 is more than half of 538. That wins the Electoral College.', es: '¡Correcto! 270 es más de la mitad de 538. Así se gana el Colegio Electoral.', fa: 'درست! ۲۷۰ بیشتر از نصف ۵۳۸ است. با آن کالج انتخاباتی برده می‌شود.' } },
          { t: { en: '435 of the 538', es: '435 de los 538', fa: '۴۳۵ از ۵۳۸' },
            why: { en: 'No. 435 is the number of House members. A candidate needs 270.', es: 'No. 435 es el número de miembros de la Cámara. Un candidato necesita 270.', fa: 'نه. ۴۳۵ تعداد اعضای مجلس نمایندگان است. نامزد ۲۷۰ لازم دارد.' } },
          { t: { en: '100 of the 538', es: '100 de los 538', fa: '۱۰۰ از ۵۳۸' },
            why: { en: 'No. 100 is the number of senators. A candidate needs 270, more than half.', es: 'No. 100 es el número de senadores. Un candidato necesita 270, más de la mitad.', fa: 'نه. ۱۰۰ تعداد سناتورها است. نامزد ۲۷۰ لازم دارد، بیشتر از نصف.' } }
        ]
      }
    },
    {
      x: 19, y: 14,
      name: { en: 'Kim', es: 'Kim', fa: 'کیم' },
      role: { en: 'First-time voter', es: 'Votante por primera vez', fa: 'رأی‌دهندهٔ بار اول' },
      look: { skin: 1, hair: '#1a1008', shirt: '#2f5f9a', pants: '#3a2a1a', style: 'bun' },
      lines: [
        { en: 'I am 18. Today I voted for the very first time!', es: 'Tengo 18 años. ¡Hoy voté por primera vez!', fa: 'من ۱۸ ساله هستم. امروز برای اولین بار رأی دادم!' },
        { en: 'Young people vote less than older people. Their [[turnout|turnout]] is lower.', es: 'Los jóvenes votan menos que los mayores. Su [[turnout|participación]] es más baja.', fa: 'جوانان کمتر از بزرگسالان رأی می‌دهند. [[turnout|اشتراک]] آن‌ها پایین‌تر است.' },
        { en: 'Many young people move a lot, or forget to register.', es: 'Muchos jóvenes se mudan mucho o se olvidan de registrarse.', fa: 'بسیاری از جوانان زیاد خانه عوض می‌کنند، یا ثبت نام را فراموش می‌کنند.' },
        { en: 'Some think one vote does not matter. But town races can be very close!', es: 'Algunos creen que un voto no importa. ¡Pero las elecciones del pueblo pueden ser muy reñidas!', fa: 'بعضی فکر می‌کنند یک رأی مهم نیست. اما رقابت‌های شهر می‌تواند خیلی نزدیک باشد!' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why do fewer young people vote than older people?', es: '¿Por qué votan menos jóvenes que personas mayores?', fa: 'چرا جوانان کمتر از بزرگسالان رأی می‌دهند؟' },
        choices: [
          { ok: true, t: { en: 'Many move often or never register', es: 'Muchos se mudan o nunca se registran', fa: 'بسیاری خانه عوض می‌کنند یا ثبت نام نمی‌کنند' },
            why: { en: 'Yes. Moving and not registering keep many young people from voting.', es: 'Sí. Mudarse y no registrarse impiden votar a muchos jóvenes.', fa: 'بله. خانه عوض کردن و ثبت نام نکردن بسیاری از جوانان را از رأی باز می‌دارد.' } },
          { t: { en: 'The law lets them vote only once', es: 'La ley los deja votar solo una vez', fa: 'قانون فقط یک بار به آن‌ها اجازهٔ رأی می‌دهد' },
            why: { en: 'No. Citizens 18 and older can vote in every election.', es: 'No. Los ciudadanos de 18 años o más pueden votar en cada elección.', fa: 'نه. شهروندان ۱۸ ساله و بالاتر در هر انتخابات رأی داده می‌توانند.' } },
          { t: { en: 'Young people must pay to vote', es: 'Los jóvenes deben pagar para votar', fa: 'جوانان باید برای رأی پول بدهند' },
            why: { en: 'No. Voting is free for every citizen, young or old.', es: 'No. Votar es gratis para todos los ciudadanos, jóvenes o mayores.', fa: 'نه. رأی دادن برای هر شهروند، جوان یا پیر، رایگان است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 4, text: { en: 'MAPLE FORD TOWN HALL · POLLING PLACE · Polls close at 7 p.m.', es: 'AYUNTAMIENTO DE MAPLE FORD · LUGAR DE VOTACIÓN · Se cierra a las 7 p. m.', fa: 'شاروالی میپل فورد · محل رأی‌دهی · ساعت ۷ شام بسته می‌شود.' } },
    { x: 11, y: 4, text: { en: 'VOTER REGISTRATION OFFICE · Sign up here. You must register before you can vote.', es: 'OFICINA DE REGISTRO DE VOTANTES · Inscríbete aquí. Debes registrarte antes de votar.', fa: 'دفتر ثبت نام رأی‌دهندگان · اینجا ثبت نام کن. پیش از رأی دادن باید ثبت نام کنی.' } },
    { x: 19, y: 4, text: { en: 'MAPLE FORD NEWS · Election night results, all night long!', es: 'MAPLE FORD NEWS · ¡Resultados de la noche de elecciones, toda la noche!', fa: 'روزنامهٔ میپل فورد · نتیجه‌های شب انتخابات، تمام شب!' } },
    { x: 10, y: 14, text: { en: 'MAPLE FORD HIGH SCHOOL GYM · POLLING PLACE · Bake sale today!', es: 'GIMNASIO DE LA ESCUELA DE MAPLE FORD · LUGAR DE VOTACIÓN · ¡Venta de pasteles hoy!', fa: 'سالون ورزش لیسهٔ میپل فورد · محل رأی‌دهی · امروز کلچه‌فروشی!' } },
    { x: 22, y: 14, text: { en: 'RESULTS BOARD · Mayor: Ana Reyes (Green Leaf) or Sam Brooks (Blue River). Still counting!', es: 'TABLERO DE RESULTADOS · Alcaldía: Ana Reyes (Hoja Verde) o Sam Brooks (Río Azul). ¡Todavía contando!', fa: 'تختهٔ نتیجه · شاروال: آنا ریس (برگ سبز) یا سام بروکس (دریای آبی). هنوز شمارش ادامه دارد!' } },
    { x: 5, y: 7, text: { en: 'TRICK BOARD · GLITTERING GENERALITIES · Big, nice words like "freedom," but no facts.', es: 'TABLERO DE TRUCOS · PALABRAS BRILLANTES · Palabras grandes y bonitas como "libertad", pero sin datos.', fa: 'تختهٔ چال · کلمه‌های زیبا و خالی · کلمه‌های بزرگ و قشنگ مثل «آزادی»، اما بدون حقیقت.' } },
    { x: 25, y: 7, text: { en: 'TRICK BOARD · NAME-CALLING · Calling the other side bad names, not talking about ideas.', es: 'TABLERO DE TRUCOS · INSULTOS · Ponerle nombres feos al otro lado, sin hablar de ideas.', fa: 'تختهٔ چال · نام بد دادن · به طرف مقابل نام‌های بد دادن، بدون گپ از فکرها.' } },
    { x: 8, y: 18, text: { en: 'TRICK BOARD · TESTIMONIAL · A famous person says, "Vote for my friend!"', es: 'TABLERO DE TRUCOS · TESTIMONIO · Una persona famosa dice: "¡Vota por mi amigo!"', fa: 'تختهٔ چال · گواهی آدم مشهور · یک آدم مشهور می‌گوید: «به دوستم رأی بده!»' } },
    { x: 24, y: 18, text: { en: 'TRICK BOARD · BANDWAGON · "Everyone is voting for her! Join the crowd!"', es: 'TABLERO DE TRUCOS · EFECTO MANADA · "¡Todos votan por ella! ¡Únete a la multitud!"', fa: 'تختهٔ چال · پیروی از جمع · «همه به او رأی می‌دهند! با جمع یکجا شو!»' } }
  ],

  /* the quest: Ines the librarian (gold !) by the gym, south-west -> Walt the mail carrier by the newspaper, north-east
     -> chase the Flyer Flock: name the trick on each flyer by walking to its trick board (two flyers from each party)
     -> the flock shows itself and is caught -> back to Ines */
  quest: {
    stat: 'mov',
    title: { en: 'The Flyer Flock', es: 'La bandada de volantes', fa: 'دستهٔ ورقه‌های اعلان' },
    giver: {
      x: 12, y: 14,
      name: { en: 'Ines', es: 'Inés', fa: 'اینس' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I run the Ad Check table. We look for tricks in campaign flyers.', es: 'Atiendo la mesa de Revisar Anuncios. Buscamos trucos en los volantes de campaña.', fa: 'من میز بررسی اعلان را می‌گردانم. در ورقه‌های کمپاین دنبال چال می‌گردیم.' },
        { en: 'The Grump blew my flyers away! Now they flap around town like birds.', es: '¡El Gruñón se llevó mis volantes con un soplido! Ahora vuelan por el pueblo como pájaros.', fa: 'غرغرو ورقه‌هایم را با پُف برد! حالا مثل پرنده‌ها در شهر می‌پرند.' },
        { en: 'Walt the mail carrier saw them. He is by the newspaper office.', es: 'Walt, el cartero, los vio. Está junto a la oficina del periódico.', fa: 'والت نامه‌رسان آن‌ها را دید. او کنار دفتر روزنامه است.' }
      ],
      wait: { en: 'Walt is near the newspaper office, north-east of here. Ask him.', es: 'Walt está cerca de la oficina del periódico, al noreste de aquí. Pregúntale.', fa: 'والت نزدیک دفتر روزنامه، شمال شرق اینجا است. از او بپرس.' },
      thanks: { en: 'My flyers! Now new voters can learn to spot the tricks. Thank you!', es: '¡Mis volantes! Ahora los nuevos votantes pueden aprender a ver los trucos. ¡Gracias!', fa: 'ورقه‌هایم! حالا رأی‌دهندگان تازه می‌توانند چال‌ها را بشناسند. تشکر!' }
    },
    contact: {
      x: 28, y: 4,
      name: { en: 'Walt', es: 'Walt', fa: 'والت' },
      role: { en: 'Mail carrier', es: 'Cartero', fa: 'نامه‌رسان' },
      look: { skin: 0, hair: '#c89a50', shirt: '#2f5f9a', pants: '#2a3a5a', style: 'short', hat: '#2f5f9a' },
      lines: [
        { en: 'Yes! A flock of flyers flew by. Each one uses an ad trick.', es: '¡Sí! Pasó volando una bandada de volantes. Cada uno usa un truco de anuncio.', fa: 'بله! یک دسته ورقهٔ اعلان از اینجا پرید. هر کدام یک چال اعلان دارد.' },
        { en: 'Both parties had flyers in the flock. Any side can use a trick.', es: 'Los dos partidos tenían volantes en la bandada. Cualquier lado puede usar un truco.', fa: 'هر دو حزب در این دسته ورقه داشتند. هر طرف می‌تواند چال بزند.' },
        { en: 'Read each flyer, then walk to the board that names its trick!', es: 'Lee cada volante y luego camina al tablero que nombra su truco.', fa: 'هر ورقه را بخوان، بعد به تخته‌ای برو که نام چال آن را دارد!' }
      ]
    },
    action: {
      type: 'chase',
      at: [2, 20],
      hops: [[29, 10], [13, 10]],
      name: { en: 'The Flyer Flock', es: 'La bandada de volantes', fa: 'دستهٔ ورقه‌ها' },
      taunt: { en: 'Flap, flap! The Flyer Flock rustles: "Catch us if you can name our tricks!"', es: '¡Flap, flap! La bandada de volantes susurra: "¡Atrápanos si sabes el nombre de nuestros trucos!"', fa: 'پَر پَر! دستهٔ ورقه‌ها خش‌خش می‌کند: «اگر نام چال‌های ما را می‌دانی، ما را بگیر!»' },
      clues: [
        { t: { en: 'A Blue River flyer says: "Everyone votes Blue River! Don\'t be left out!" Find its trick board.', es: 'Un volante del Río Azul dice: "¡Todos votan Río Azul! ¡No te quedes fuera!" Busca su tablero.', fa: 'یک ورقهٔ دریای آبی می‌گوید: «همه به دریای آبی رأی می‌دهند! عقب نمان!» تختهٔ چالش را پیدا کن.' },
          zones: [{ x: 25, y: 18, w: 3, h: 2 }],
          noBy: [
            { x: 2, y: 7, w: 3, h: 2, t: { en: 'This is the glittering words board. This flyer is not about big, nice words.', es: 'Este es el tablero de palabras brillantes. Este volante no usa palabras grandes y bonitas.', fa: 'این تختهٔ کلمه‌های زیبا است. این ورقه دربارهٔ کلمه‌های بزرگ و قشنگ نیست.' } },
            { x: 26, y: 7, w: 3, h: 2, t: { en: 'This is the name-calling board. This flyer insults no one. It says "everyone does it."', es: 'Este es el tablero de insultos. Este volante no insulta a nadie. Dice "todos lo hacen".', fa: 'این تختهٔ نام بد دادن است. این ورقه به کسی توهین نمی‌کند. می‌گوید «همه این کار را می‌کنند».' } },
            { x: 9, y: 18, w: 3, h: 2, t: { en: 'This is the testimonial board. No famous person speaks in this flyer.', es: 'Este es el tablero de testimonios. En este volante no habla ninguna persona famosa.', fa: 'این تختهٔ گواهی آدم مشهور است. در این ورقه هیچ آدم مشهوری گپ نمی‌زند.' } }
          ],
          found: { en: 'Bandwagon! It says "everyone does it," but it gives no reasons.', es: '¡Efecto manada! Dice "todos lo hacen", pero no da razones.', fa: 'پیروی از جمع! می‌گوید «همه این کار را می‌کنند»، اما دلیل نمی‌دهد.' } },
        { t: { en: 'A Green Leaf flyer says: "Sam Brooks is a lazy fool!" Find its trick board.', es: 'Un volante de Hoja Verde dice: "¡Sam Brooks es un tonto flojo!" Busca su tablero.', fa: 'یک ورقهٔ برگ سبز می‌گوید: «سام بروکس یک احمق تنبل است!» تختهٔ چالش را پیدا کن.' },
          zones: [{ x: 26, y: 7, w: 3, h: 2 }],
          noBy: [
            { x: 25, y: 18, w: 3, h: 2, t: { en: 'This is the bandwagon board. This flyer does not say "everyone does it."', es: 'Este es el tablero del efecto manada. Este volante no dice "todos lo hacen".', fa: 'این تختهٔ پیروی از جمع است. این ورقه نمی‌گوید «همه این کار را می‌کنند».' } },
            { x: 2, y: 7, w: 3, h: 2, t: { en: 'This is the glittering words board. This flyer uses a mean name, not nice words.', es: 'Este es el tablero de palabras brillantes. Este volante usa un insulto, no palabras bonitas.', fa: 'این تختهٔ کلمه‌های زیبا است. این ورقه یک نام بد دارد، نه کلمه‌های قشنگ.' } },
            { x: 9, y: 18, w: 3, h: 2, t: { en: 'This is the testimonial board. No famous person speaks in this flyer.', es: 'Este es el tablero de testimonios. En este volante no habla ninguna persona famosa.', fa: 'این تختهٔ گواهی آدم مشهور است. در این ورقه هیچ آدم مشهوری گپ نمی‌زند.' } }
          ],
          found: { en: 'Name-calling! It insults a person instead of talking about ideas.', es: '¡Insultos! Ataca a una persona en vez de hablar de ideas.', fa: 'نام بد دادن! به جای گپ از فکرها، به یک نفر توهین می‌کند.' } },
        { t: { en: 'A Blue River flyer says: "Famous singer Lola Star votes for Sam Brooks!" Find its trick board.', es: 'Un volante del Río Azul dice: "¡La cantante famosa Lola Star vota por Sam Brooks!" Busca su tablero.', fa: 'یک ورقهٔ دریای آبی می‌گوید: «لولا ستار، آوازخوان مشهور، به سام بروکس رأی می‌دهد!» تختهٔ چالش را پیدا کن.' },
          zones: [{ x: 9, y: 18, w: 3, h: 2 }],
          noBy: [
            { x: 25, y: 18, w: 3, h: 2, t: { en: 'This is the bandwagon board. This flyer is about one famous person, not everyone.', es: 'Este es el tablero del efecto manada. Este volante habla de una persona famosa, no de todos.', fa: 'این تختهٔ پیروی از جمع است. این ورقه دربارهٔ یک آدم مشهور است، نه همه.' } },
            { x: 26, y: 7, w: 3, h: 2, t: { en: 'This is the name-calling board. This flyer insults no one.', es: 'Este es el tablero de insultos. Este volante no insulta a nadie.', fa: 'این تختهٔ نام بد دادن است. این ورقه به کسی توهین نمی‌کند.' } },
            { x: 2, y: 7, w: 3, h: 2, t: { en: 'This is the glittering words board. This flyer uses a famous name, not big words.', es: 'Este es el tablero de palabras brillantes. Este volante usa un nombre famoso, no palabras grandes.', fa: 'این تختهٔ کلمه‌های زیبا است. این ورقه نام یک آدم مشهور را دارد، نه کلمه‌های بزرگ.' } }
          ],
          found: { en: 'Testimonial! A famous person likes him, but that is not a reason.', es: '¡Testimonio! A una persona famosa le gusta él, pero eso no es una razón.', fa: 'گواهی آدم مشهور! یک آدم مشهور او را دوست دارد، اما این دلیل نیست.' } },
        { t: { en: 'A Green Leaf flyer says: "Ana Reyes: Hope! Freedom! A bright future!" No facts at all.', es: 'Un volante de Hoja Verde dice: "Ana Reyes: ¡Esperanza! ¡Libertad! ¡Un futuro brillante!" Sin ningún dato.', fa: 'یک ورقهٔ برگ سبز می‌گوید: «آنا ریس: امید! آزادی! آیندهٔ روشن!» هیچ حقیقتی ندارد.' },
          zones: [{ x: 2, y: 7, w: 3, h: 2 }],
          noBy: [
            { x: 25, y: 18, w: 3, h: 2, t: { en: 'This is the bandwagon board. This flyer does not say "everyone does it."', es: 'Este es el tablero del efecto manada. Este volante no dice "todos lo hacen".', fa: 'این تختهٔ پیروی از جمع است. این ورقه نمی‌گوید «همه این کار را می‌کنند».' } },
            { x: 26, y: 7, w: 3, h: 2, t: { en: 'This is the name-calling board. This flyer insults no one. Its words are nice.', es: 'Este es el tablero de insultos. Este volante no insulta a nadie. Sus palabras son bonitas.', fa: 'این تختهٔ نام بد دادن است. این ورقه به کسی توهین نمی‌کند. کلمه‌هایش قشنگ است.' } },
            { x: 9, y: 18, w: 3, h: 2, t: { en: 'This is the testimonial board. No famous person speaks in this flyer.', es: 'Este es el tablero de testimonios. En este volante no habla ninguna persona famosa.', fa: 'این تختهٔ گواهی آدم مشهور است. در این ورقه هیچ آدم مشهوری گپ نمی‌زند.' } }
          ],
          found: { en: 'Glittering generalities! Big, nice words, but no plans and no facts.', es: '¡Palabras brillantes! Palabras grandes y bonitas, pero sin planes ni datos.', fa: 'کلمه‌های زیبا و خالی! کلمه‌های بزرگ و قشنگ، اما بدون برنامه و حقیقت.' } }
      ],
      win: { en: 'Caught! The Flyer Flock drops to the ground. Every flyer is back in the stack!', es: '¡Atrapada! La bandada de volantes cae al suelo. ¡Todos los volantes vuelven a la pila!', fa: 'گرفتمش! دستهٔ ورقه‌ها به زمین می‌افتد. همهٔ ورقه‌ها دوباره در دسته است!' },
      item: { icon: '📄', name: { en: 'A stack of campaign flyers', es: 'Una pila de volantes de campaña', fa: 'یک دسته ورقهٔ کمپاین' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[24, 10], [6, 19]],

  challenge: {
    at: [13, 7],
    type: 'route', // in the world; the card version (order) is the fallback
    // registration office (north-west) -> the gym, where the parties held their primaries (south-west)
    // -> the town hall polls in November (north-west) -> the results board by the bandstand (south-east)
    spots: [[13, 4], [8, 15], [3, 4], [23, 15]],
    stat: 'mov',
    title: { en: 'The road to the White House', es: 'El camino a la Casa Blanca', fa: 'راه کاخ سفید' },
    intro: { en: 'The Grump mixed up the election steps! Walk to each stop in order. Skip one, and no one wins.',
      es: '¡El Gruñón revolvió los pasos de la elección! Camina a cada parada en orden. Si saltas una, nadie gana.',
      fa: 'غرغرو قدم‌های انتخابات را درهم کرد! به ترتیب به هر ایستگاه برو. اگر یکی را جا بمانی، هیچ کس نمی‌برد.' },
    items: [
      { icon: '📝', t: { en: 'Register · voters sign up on the voter list', es: 'Registrarse · los votantes se inscriben en la lista', fa: 'ثبت نام · رأی‌دهندگان نام خود را در فهرست می‌نویسند' } },
      { icon: '🎟️', t: { en: 'Primary · each party picks its candidate', es: 'Primaria · cada partido escoge a su candidato', fa: 'انتخابات مقدماتی · هر حزب نامزد خود را انتخاب می‌کند' } },
      { icon: '🗳️', t: { en: 'General election · in November, voters choose', es: 'Elección general · en noviembre, los votantes eligen', fa: 'انتخابات عمومی · در نومبر، رأی‌دهندگان انتخاب می‌کنند' } },
      { icon: '🏛️', t: { en: 'Electoral College · 270 of 538 electoral votes wins', es: 'Colegio Electoral · gana con 270 de 538 votos electorales', fa: 'کالج انتخاباتی · ۲۷۰ از ۵۳۸ رأی انتخاباتی می‌برد' } }
    ],
    why: { en: 'Skip a step and no one can win. Order: register, primary, general election, then the Electoral College.',
      es: 'Si saltas un paso, nadie puede ganar. Orden: registro, primaria, elección general y luego el Colegio Electoral.',
      fa: 'اگر یک قدم را جا بمانی، هیچ کس برده نمی‌تواند. ترتیب: ثبت نام، مقدماتی، انتخابات عمومی، بعد کالج انتخاباتی.' },
    success: { en: 'The road is clear! A candidate with 270 electoral votes becomes President.', es: '¡El camino está libre! Un candidato con 270 votos electorales llega a ser presidente.', fa: 'راه باز است! نامزدی که ۲۷۰ رأی انتخاباتی دارد رئیس جمهور می‌شود.' }
  },

  boss: {
    at: [28, 13],
    stat: 'mov',
    need: 3,
    name: { en: 'The Stay-Home Grump', es: 'El Gruñón Quédate-en-Casa', fa: 'غرغروی خانه‌نشین' },
    appear: { en: 'The Stay-Home Grump is hiding in the fog behind the bandstand!', es: '¡El Gruñón Quédate-en-Casa se esconde en la niebla detrás del quiosco de música!', fa: 'غرغروی خانه‌نشین در مه پشت ستیج موسیقی پنهان است!' },
    taunt: { en: 'Votes? Bah! Stay home tonight. Let the Grump choose for everyone!', es: '¿Votos? ¡Bah! Quédate en casa esta noche. ¡Deja que el Gruñón elija por todos!', fa: 'رأی؟ بَه! امشب در خانه بمان. بگذار غرغرو برای همه انتخاب کند!' },
    win: { en: 'The fog lifts over the park. Charter page 4.3 floats down into your hands!', es: 'La niebla se va del parque. ¡La página 4.3 de la carta cae en tus manos!', fa: 'مه از روی پارک کنار می‌رود. صفحهٔ ۴.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'How old must a US citizen be to vote?', es: '¿Cuántos años debe tener un ciudadano de EE. UU. para votar?', fa: 'شهروند امریکا برای رأی دادن چند ساله باید باشد؟' },
        choices: [
          { en: '18 years old', es: '18 años', fa: '۱۸ ساله' },
          { en: '16 years old', es: '16 años', fa: '۱۶ ساله' },
          { en: '21 years old', es: '21 años', fa: '۲۱ ساله' },
          { en: '25 years old', es: '25 años', fa: '۲۵ ساله' }],
        answer: 0,
        why: { en: 'The 26th Amendment, in 1971, set the voting age at 18. Before, most states said 21.', es: 'La Enmienda 26, en 1971, fijó la edad para votar en 18. Antes, casi todos los estados decían 21.', fa: 'متمم بیست و ششم در سال ۱۹۷۱ سن رأی را ۱۸ ساخت. پیش از آن، بیشتر ایالت‌ها ۲۱ می‌گفتند.' } },
      { q: { en: 'In 1920, which amendment gave women the right to vote?', es: 'En 1920, ¿qué enmienda les dio a las mujeres el derecho a votar?', fa: 'در سال ۱۹۲۰، کدام متمم به زنان حق رأی داد؟' },
        choices: [
          { en: 'The 19th Amendment', es: 'La Enmienda 19', fa: 'متمم نزدهم' },
          { en: 'The 15th Amendment', es: 'La Enmienda 15', fa: 'متمم پانزدهم' },
          { en: 'The 26th Amendment', es: 'La Enmienda 26', fa: 'متمم بیست و ششم' },
          { en: 'The 1st Amendment', es: 'La Enmienda 1', fa: 'متمم اول' }],
        answer: 0,
        why: { en: 'The 19th Amendment, in 1920, said being a woman cannot stop a citizen from voting.', es: 'La Enmienda 19, en 1920, dijo que ser mujer no puede impedir votar a una ciudadana.', fa: 'متمم نزدهم در سال ۱۹۲۰ گفت زن بودن نمی‌تواند شهروند را از رأی باز دارد.' } },
      { q: { en: 'The 15th Amendment said a citizen cannot be stopped from voting because of...', es: 'La Enmienda 15 dijo que no se puede impedir votar a un ciudadano por...', fa: 'متمم پانزدهم گفت شهروند را نمی‌شود به خاطر ... از رأی باز داشت.' },
        choices: [
          { en: 'race or color', es: 'su raza o color', fa: 'نژاد یا رنگ پوست' },
          { en: 'age or birthday', es: 'su edad o cumpleaños', fa: 'سن یا روز تولد' },
          { en: 'job or money', es: 'su trabajo o dinero', fa: 'وظیفه یا پول' },
          { en: 'home or town', es: 'su casa o pueblo', fa: 'خانه یا شهر' }],
        answer: 0,
        why: { en: 'It passed in 1870. But unfair tests and taxes still blocked many Black voters for many years.', es: 'Se aprobó en 1870. Pero pruebas y cobros injustos bloquearon a muchos votantes negros por muchos años.', fa: 'در سال ۱۸۷۰ تصویب شد. اما امتحان‌ها و مالیه‌های ناعادلانه سال‌ها جلوی بسیاری از رأی‌دهندگان سیاه‌پوست را گرفت.' } },
      { q: { en: 'What happens in a primary election?', es: '¿Qué pasa en una elección primaria?', fa: 'در انتخابات مقدماتی چه می‌شود؟' },
        choices: [
          { en: 'A party picks its candidate', es: 'Un partido escoge a su candidato', fa: 'یک حزب نامزد خود را انتخاب می‌کند' },
          { en: 'The President takes office', es: 'El presidente asume el cargo', fa: 'رئیس جمهور کار خود را شروع می‌کند' },
          { en: 'Electors cast their votes', es: 'Los electores dan sus votos', fa: 'انتخاب‌کنندگان رأی خود را می‌دهند' },
          { en: 'Congress counts the votes', es: 'El Congreso cuenta los votos', fa: 'کانگرس رأی‌ها را می‌شمارد' }],
        answer: 0,
        why: { en: 'In a primary, voters choose who will run for each party in the general election.', es: 'En una primaria, los votantes eligen quién será el candidato de cada partido en la elección general.', fa: 'در انتخابات مقدماتی، رأی‌دهندگان انتخاب می‌کنند کی از طرف هر حزب در انتخابات عمومی نامزد شود.' } },
      { q: { en: 'In which month do voters choose the President in the general election?', es: '¿En qué mes eligen los votantes al presidente en la elección general?', fa: 'رأی‌دهندگان در کدام ماه در انتخابات عمومی رئیس جمهور را انتخاب می‌کنند؟' },
        choices: [
          { en: 'In November', es: 'En noviembre', fa: 'در نومبر' },
          { en: 'In January', es: 'En enero', fa: 'در جنوری' },
          { en: 'In July', es: 'En julio', fa: 'در جولای' },
          { en: 'In March', es: 'En marzo', fa: 'در مارچ' }],
        answer: 0,
        why: { en: 'Voters choose in November. Then each state\'s electors cast their votes in December.', es: 'Los votantes eligen en noviembre. Luego los electores de cada estado votan en diciembre.', fa: 'رأی‌دهندگان در نومبر انتخاب می‌کنند. بعد انتخاب‌کنندگان هر ایالت در دسمبر رأی می‌دهند.' } },
      { q: { en: 'How does a state get its number of electors?', es: '¿Cómo recibe un estado su número de electores?', fa: 'یک ایالت تعداد انتخاب‌کنندگان خود را چطور می‌گیرد؟' },
        choices: [
          { en: 'House seats plus 2 senators', es: 'Escaños en la Cámara más 2 senadores', fa: 'کرسی‌های مجلس به اضافهٔ ۲ سناتور' },
          { en: 'Ten electors for every state', es: 'Diez electores para cada estado', fa: 'ده انتخاب‌کننده برای هر ایالت' },
          { en: 'One elector for each city', es: 'Un elector por cada ciudad', fa: 'یک انتخاب‌کننده برای هر شهر' },
          { en: 'One for every 1,000 voters', es: 'Uno por cada 1,000 votantes', fa: 'یکی برای هر ۱۰۰۰ رأی‌دهنده' }],
        answer: 0,
        why: { en: 'Electors equal members of Congress. Virginia has 11 House members plus 2 senators: 13.', es: 'Los electores son iguales a los miembros del Congreso. Virginia tiene 11 en la Cámara más 2 senadores: 13.', fa: 'تعداد انتخاب‌کنندگان برابر اعضای کانگرس است. ویرجینیا ۱۱ عضو مجلس و ۲ سناتور دارد: ۱۳.' } },
      { q: { en: 'A Green Leaf ad says: "Famous actor Max Cole votes Green Leaf!" Which trick is this?', es: 'Un anuncio de Hoja Verde dice: "¡El actor famoso Max Cole vota Hoja Verde!" ¿Qué truco es?', fa: 'یک اعلان برگ سبز می‌گوید: «مکس کول، هنرپیشهٔ مشهور، به برگ سبز رأی می‌دهد!» این کدام چال است؟' },
        choices: [
          { en: 'Testimonial', es: 'Testimonio', fa: 'گواهی آدم مشهور' },
          { en: 'Bandwagon', es: 'Efecto manada', fa: 'پیروی از جمع' },
          { en: 'Name-calling', es: 'Insultos', fa: 'نام بد دادن' },
          { en: 'Plain folks', es: 'Gente común', fa: 'آدم عادی' }],
        answer: 0,
        why: { en: 'A testimonial uses a famous person. Being famous does not make someone right about voting.', es: 'Un testimonio usa a una persona famosa. Ser famoso no hace que alguien tenga razón sobre el voto.', fa: 'گواهی آدم مشهور از یک آدم مشهور استفاده می‌کند. مشهور بودن کسی را دربارهٔ رأی درست نمی‌سازد.' } },
      { q: { en: 'A Blue River ad shows only the good facts and hides the bad ones. Which trick?', es: 'Un anuncio del Río Azul muestra solo los datos buenos y esconde los malos. ¿Qué truco es?', fa: 'یک اعلان دریای آبی فقط حقیقت‌های خوب را نشان می‌دهد و بدها را پنهان می‌کند. کدام چال است؟' },
        choices: [
          { en: 'Card stacking', es: 'Cartas marcadas', fa: 'یک‌طرفه گفتن' },
          { en: 'Glittering generalities', es: 'Palabras brillantes', fa: 'کلمه‌های زیبا و خالی' },
          { en: 'Testimonial', es: 'Testimonio', fa: 'گواهی آدم مشهور' },
          { en: 'Bandwagon', es: 'Efecto manada', fa: 'پیروی از جمع' }],
        answer: 0,
        why: { en: 'Card stacking tells only one side. Always look for the other side\'s facts too.', es: 'Las cartas marcadas cuentan solo un lado. Busca siempre también los datos del otro lado.', fa: 'یک‌طرفه گفتن فقط یک طرف را می‌گوید. همیشه حقیقت‌های طرف دیگر را هم پیدا کن.' } }
    ]
  },

  learned: [
    { en: 'US [[citizen|citizens]] 18 and older can vote. First, they must [[register|register]].', es: 'Los [[citizen|ciudadanos]] de EE. UU. de 18 años o más pueden votar. Primero deben [[register|registrarse]].', fa: '[[citizen|شهروندان]] ۱۸ ساله و بالاتر امریکا رأی داده می‌توانند. اول باید [[register|ثبت نام]] کنند.' },
    { en: 'Parties pick candidates in a [[primary|primary]]. Voters choose in the November [[general election|general election]].', es: 'Los partidos escogen candidatos en una [[primary|primaria]]. Los votantes eligen en la [[general election|elección general]] de noviembre.', fa: 'حزب‌ها نامزدها را در [[primary|انتخابات مقدماتی]] انتخاب می‌کنند. رأی‌دهندگان در [[general election|انتخابات عمومی]] نومبر انتخاب می‌کنند.' },
    { en: 'A President needs 270 of 538 electoral votes. Check every ad for tricks!', es: 'Un presidente necesita 270 de 538 votos electorales. ¡Revisa cada anuncio en busca de trucos!', fa: 'رئیس جمهور ۲۷۰ از ۵۳۸ رأی انتخاباتی لازم دارد. هر اعلان را برای چال بررسی کن!' }
  ],
  reflect: {
    q: { en: 'You see a campaign ad online. How would you check if it uses a trick?', es: 'Ves un anuncio de campaña en internet. ¿Cómo revisarías si usa un truco?', fa: 'یک اعلان کمپاین را در انترنت می‌بینی. چطور بررسی می‌کنی که چال دارد یا نه؟' },
    starter: { en: 'First, I would ask', es: 'Primero, yo preguntaría', fa: 'اول، من می‌پرسیدم' }
  }
};
