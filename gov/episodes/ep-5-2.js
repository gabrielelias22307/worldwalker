/* CIVICWALKER · Episode 5.2 · How a Bill Becomes a Law (The Lawmaking Process)
   Washington, DC, the US Capitol today. North is up. The Capitol stands in the middle: the Senate chamber in the
   north wing, the Rotunda under the dome in the center, the House chamber in the south wing. North of it,
   Constitution Avenue and two Senate office buildings (committee rooms). South of it, Independence Avenue with a bus
   stop and two House office buildings (committee rooms, the offices of Representatives). West: the West Lawn and
   Pennsylvania Avenue, the street to the White House. East: the East Plaza.
   The charter stone (in the Rotunda) asks the student to walk an invented bill (safer bike lanes) through every
   stop in order: hopper, House committee, House vote, Senate committee, Senate vote, the President. */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'GOVT',
  title: { en: 'How a Bill Becomes a Law', es: 'Cómo un proyecto se vuelve ley', fa: 'لایحه چطور قانون می‌شود' },
  place: { en: 'The US Capitol, Washington, DC', es: 'El Capitolio, Washington, D. C.', fa: 'کاپیتول امریکا، واشنگتن دی‌سی' },
  intro: [
    { en: 'The Grump tore the page on how laws are made. Bills are stuck everywhere!',
      es: 'El Gruñón rompió la página sobre cómo se hacen las leyes. ¡Hay proyectos atascados por todas partes!',
      fa: 'غرغرو صفحهٔ «قانون چطور ساخته می‌شود» را پاره کرد. لایحه‌ها همه جا گیر مانده‌اند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Washington, DC on the world map (no timeline in this game) */
  scenes: {
    at: [-77.01, 38.89],
    start: [
      { en: 'The US Capitol is in Washington, DC. Congress meets here.',
        es: 'El Capitolio de EE. UU. está en Washington, D. C. Aquí se reúne el Congreso.',
        fa: 'کاپیتول امریکا در واشنگتن دی‌سی است. کانگرس اینجا جلسه می‌کند.' },
      { en: 'Congress has two houses: the House of Representatives and the Senate.',
        es: 'El Congreso tiene dos cámaras: la Cámara de Representantes y el Senado.',
        fa: 'کانگرس دو مجلس دارد: مجلس نمایندگان و سنا.' },
      { en: 'Congress makes the laws for the whole country.',
        es: 'El Congreso hace las leyes para todo el país.',
        fa: 'کانگرس قانون‌ها را برای تمام کشور می‌سازد.' }
    ],
    page: { en: 'Each year, members introduce thousands of bills. Only a few become laws.',
      es: 'Cada año, los miembros presentan miles de proyectos de ley. Solo unos pocos se vuelven leyes.',
      fa: 'هر سال، اعضا هزاران لایحه پیشنهاد می‌کنند. فقط چند تای آن قانون می‌شود.' },
    guess: {
      q: { en: 'A student has an idea for a law. Can she send it to Congress?', es: 'Una estudiante tiene una idea para una ley. ¿Puede mandarla al Congreso?', fa: 'یک شاگرد برای یک قانون فکری دارد. آیا می‌تواند آن را به کانگرس بفرستد؟' },
      choices: [
        { t: { en: '✉️ Yes, she can', es: '✉️ Sí, puede', fa: '✉️ بله، می‌تواند' }, ok: true },
        { t: { en: '🚫 No, never', es: '🚫 No, nunca', fa: '🚫 نه، هرگز' } }
      ],
      why: { en: 'Anyone can suggest an idea. A member of Congress must introduce it as a bill.', es: 'Cualquiera puede sugerir una idea. Un miembro del Congreso debe presentarla como proyecto de ley.', fa: 'هر کس می‌تواند فکری پیشنهاد کند. یک عضو کانگرس باید آن را به شکل لایحه پیش کند.' }
    },
    next: {
      q: { en: 'Next: impeachment. The House can charge a president. Who holds the trial?', es: 'Ahora: el juicio político. La Cámara puede acusar a un presidente. ¿Quién hace el juicio?', fa: 'بعدی: استیضاح. مجلس نمایندگان می‌تواند رئیس جمهور را متهم کند. محاکمه را کی می‌کند؟' },
      choices: [
        { t: { en: '🏛️ The Senate', es: '🏛️ El Senado', fa: '🏛️ سنا' }, ok: true },
        { t: { en: '🗳️ The voters', es: '🗳️ Los votantes', fa: '🗳️ رأی‌دهندگان' } }
      ],
      why: { en: 'The House charges. The Senate holds the trial. Two thirds of senators must vote to remove.', es: 'La Cámara acusa. El Senado hace el juicio. Dos tercios de los senadores deben votar para destituir.', fa: 'مجلس نمایندگان متهم می‌کند. سنا محاکمه می‌کند. دو سوم سناتورها باید برای برکناری رأی بدهند.' }
    }
  },
  /* houses (fun-pass-4): who works behind each office door; walk in and talk */
  houses: [
    { at: [5, 2], name: { en: 'Mr. Lee', es: 'Sr. Lee', fa: 'آقای لی' },
      look: { skin: 2, hair: '#1a1a1a', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is a Senate committee room. Senators study bills here.', es: 'Esta es una sala de comité del Senado. Aquí los senadores estudian proyectos.', fa: 'این اتاق کمیتهٔ سنا است. سناتورها اینجا لایحه‌ها را مطالعه می‌کنند.' },
        { en: 'At a [[hearing|hearing]], experts and citizens tell senators what they think.', es: 'En una [[hearing|audiencia]], expertos y ciudadanos les dicen a los senadores lo que piensan.', fa: 'در یک [[hearing|جلسهٔ شنیدن]]، کارشناسان و شهروندان نظر خود را به سناتورها می‌گویند.' }
      ] },
    { at: [25, 2], name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#1f3a6a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am a Senate page. I am a high school student!', es: 'Soy paje del Senado. ¡Soy estudiante de secundaria!', fa: 'من پیام‌رسان سنا هستم. شاگرد لیسه هستم!' },
        { en: 'Pages carry papers and messages for the senators.', es: 'Los pajes llevan papeles y mensajes para los senadores.', fa: 'پیام‌رسان‌ها کاغذها و پیام‌ها را برای سناتورها می‌برند.' },
        { en: 'There are 100 senators, 2 from each state.', es: 'Hay 100 senadores, 2 de cada estado.', fa: '۱۰۰ سناتور هست، از هر ایالت ۲ نفر.' }
      ] },
    { at: [5, 19], name: { en: 'Ms. Novak', es: 'Sra. Novak', fa: 'خانم نواک' },
      look: { skin: 0, hair: '#8a5a2b', shirt: '#7a2a4a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I work in the office of Representative Ruiz, from River Valley.', es: 'Trabajo en la oficina de la representante Ruiz, de River Valley.', fa: 'من در دفتر نماینده رویز، از وادی دریا، کار می‌کنم.' },
        { en: 'People from her district call, write and visit us.', es: 'La gente de su distrito nos llama, nos escribe y nos visita.', fa: 'مردم حوزهٔ او به ما زنگ می‌زنند، نامه می‌نویسند و پیش ما می‌آیند.' },
        { en: 'We read the letters and count the calls. Many voices can change a vote.', es: 'Leemos las cartas y contamos las llamadas. Muchas voces pueden cambiar un voto.', fa: 'ما نامه‌ها را می‌خوانیم و زنگ‌ها را می‌شماریم. صداهای زیاد می‌تواند یک رأی را تغییر بدهد.' }
      ] },
    { at: [25, 19], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#3a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I am a [[lobbyist|lobbyist]] for a group of bike riders.', es: 'Soy [[lobbyist|cabildero]] de un grupo de ciclistas.', fa: 'من [[lobbyist|لابی‌گر]] یک گروه بایسکل‌سواران هستم.' },
        { en: 'Lobbyists try to win lawmakers\' votes. Nurses, farmers and companies have them too.', es: 'Los cabilderos tratan de ganar los votos de los legisladores. Enfermeras, agricultores y empresas también los tienen.', fa: 'لابی‌گرها کوشش می‌کنند رأی قانون‌گذاران را به دست بیاورند. نرس‌ها، دهقانان و شرکت‌ها هم لابی‌گر دارند.' },
        { en: 'Lobbyists must register. Some people worry big money buys too much power.', es: 'Los cabilderos deben registrarse. Algunos temen que el dinero grande compre demasiado poder.', fa: 'لابی‌گرها باید نام‌نویسی کنند. بعضی مردم نگران‌اند که پول زیاد قدرت زیاد بخرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-4): two Senate office buildings (J over h, doors), Constitution Avenue (l).
     Middle (y 5-16): the Capitol (D walls, f floor). Senate chamber y 6-7, the Rotunda y 9-12 (pillars D),
     House chamber y 14-15; doors in the middle walls at x 15-16; the West Front and East Front open at y 10-11.
     West (x 1-7): the West Lawn with trees, Pennsylvania Avenue (l) at y 10, the street to the White House.
     East (x 24-30): the paved East Plaza.
     South (y 17-20): Independence Avenue with the bus stop sign (x), two House office buildings. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..JJJJJ......T.T......JJJJJ...T',
    'T..hhdhh...............hhdhh...T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T..T....DDDDDDDDDDDDDDDDllllllTT',
    'T.......DffffffffffffffDlllllllT',
    'T.T.....DffffffffffffffDlllllllT',
    'T.......DDDDDDDffDDDDDDDlllllllT',
    'T..T.Tx.DffffDffffDfffxDlllllllT',
    'TllllllllffffffffffffffflllllllT',
    'T.......fffffffffffffffflllllllT',
    'T..T.T..DffffDffffDffffDlllllllT',
    'T.......DDDDDDDffDDDDDDDlllllllT',
    'T.T.....DffffffffffffffDlllllllT',
    'T.......DffffffffffffffDlllllllT',
    'T..T....DDDDDDDDDDDDDDDDllllllTT',
    'TllllllllllllllllllllxlllllllllT',
    'T..JJJJJ......T.T......JJJJJ...T',
    'T..hhdhh...............hhdhh...T',
    'T..............................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [27, 11],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 5], at: [2, 8], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps south, on the West Lawn.', es: 'Desde esta nota, camina 3 pasos al sur, en el Jardín Oeste.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، روی چمن غربی.' },
      text: { en: 'Congress first met in this building in 1800. Lawmakers wrote with feather pens. A feather!', es: 'El Congreso se reunió por primera vez en este edificio en 1800. Escribían con plumas. ¡Una pluma!', fa: 'کانگرس اولین بار در سال ۱۸۰۰ در این ساختمان جلسه کرد. قانون‌گذاران با قلم پَر می‌نوشتند. یک پَر!' } },
    { clueAt: [29, 6], at: [29, 10], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, across the East Plaza.', es: 'Desde esta nota, camina 4 pasos al sur, por la Plaza Este.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از میدان شرقی.' },
      text: { en: 'The dome is made of iron. The Statue of Freedom stands on top. An old coin!', es: 'La cúpula es de hierro. La Estatua de la Libertad está arriba. ¡Una moneda antigua!', fa: 'گنبد از آهن ساخته شده. مجسمهٔ آزادی بالای آن ایستاده است. یک سکهٔ کهنه!' } }
  ],

  words: {
    congress: { en: 'the lawmakers of the US: the House and the Senate', es: 'los legisladores de EE. UU.: la Cámara y el Senado', fa: 'قانون‌گذاران امریکا: مجلس نمایندگان و سنا' },
    bill: { en: 'an idea for a law, written down, that lawmakers vote on', es: 'una idea para una ley, por escrito, que votan los legisladores', fa: 'فکر یک قانون، نوشته شده، که قانون‌گذاران به آن رأی می‌دهند' },
    hopper: { en: 'the wooden box in the House where a member drops a new bill', es: 'la caja de madera de la Cámara donde un miembro deja un proyecto nuevo', fa: 'صندوق چوبی در مجلس نمایندگان که عضو لایحهٔ نو را در آن می‌اندازد' },
    committee: { en: 'a small group of lawmakers who study bills on one topic', es: 'un grupo pequeño de legisladores que estudia proyectos de un tema', fa: 'یک گروه کوچک قانون‌گذاران که لایحه‌های یک موضوع را مطالعه می‌کنند' },
    hearing: { en: 'a meeting where a committee listens to experts and citizens', es: 'una reunión donde un comité escucha a expertos y ciudadanos', fa: 'جلسه‌ای که در آن کمیته به کارشناسان و شهروندان گوش می‌دهد' },
    'conference committee': { en: 'members of both houses who agree on one version of a bill', es: 'miembros de las dos cámaras que acuerdan una sola versión de un proyecto', fa: 'اعضای هر دو مجلس که روی یک نسخهٔ لایحه موافقه می‌کنند' },
    veto: { en: 'when the President says no and does not sign a bill', es: 'cuando el presidente dice que no y no firma un proyecto', fa: 'وقتی رئیس جمهور «نه» می‌گوید و لایحه را امضا نمی‌کند' },
    override: { en: 'to beat a veto with a two-thirds vote in both houses', es: 'vencer un veto con el voto de dos tercios en las dos cámaras', fa: 'شکستن ویتو با رأی دو سوم در هر دو مجلس' },
    lobbyist: { en: 'a person paid by a group to persuade lawmakers', es: 'una persona pagada por un grupo para convencer a los legisladores', fa: 'کسی که یک گروه به او پول می‌دهد تا قانون‌گذاران را قانع کند' },
    petition: { en: 'a letter that asks the government to do something', es: 'una carta que le pide algo al gobierno', fa: 'نامه‌ای که از حکومت کاری را می‌خواهد' }
  },

  npcs: [
    {
      x: 10, y: 14,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'House clerk', es: 'Secretaria de la Cámara', fa: 'منشی مجلس نمایندگان' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#7a3a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the House chamber! 435 voting members meet here.', es: '¡Bienvenido a la sala de la Cámara! Aquí se reúnen 435 miembros con voto.', fa: 'به تالار مجلس نمایندگان خوش آمدی! ۴۳۵ عضو با حق رأی اینجا جمع می‌شوند.' },
        { en: 'Anyone can suggest an idea for a law. Only a member can introduce a [[bill|bill]].', es: 'Cualquiera puede sugerir una idea para una ley. Solo un miembro puede presentar un [[bill|proyecto de ley]].', fa: 'هر کس می‌تواند فکری برای قانون پیشنهاد کند. فقط یک عضو می‌تواند [[bill|لایحه]] پیش کند.' },
        { en: 'Here, a member drops the bill in the [[hopper|hopper]], a wooden box.', es: 'Aquí, un miembro deja el proyecto en el [[hopper|buzón]], una caja de madera.', fa: 'اینجا عضو لایحه را در [[hopper|صندوق لایحه]] می‌اندازد، یک صندوق چوبی.' },
        { en: 'Bills to raise taxes must start here, in the House.', es: 'Los proyectos para subir impuestos deben empezar aquí, en la Cámara.', fa: 'لایحه‌های بلند بردن مالیات باید از اینجا، از مجلس نمایندگان، شروع شوند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who can introduce a bill in Congress?', es: '¿Quién puede presentar un proyecto de ley en el Congreso?', fa: 'کی می‌تواند در کانگرس لایحه پیش کند؟' },
        choices: [
          { ok: true, t: { en: 'Only a member of Congress', es: 'Solo un miembro del Congreso', fa: 'فقط یک عضو کانگرس' },
            why: { en: 'Yes. Anyone can suggest an idea, but only a member can introduce the bill.', es: 'Sí. Cualquiera puede sugerir una idea, pero solo un miembro puede presentar el proyecto.', fa: 'بله. هر کس می‌تواند فکری بدهد، اما فقط یک عضو می‌تواند لایحه را پیش کند.' } },
          { t: { en: 'Any citizen who writes one', es: 'Cualquier ciudadano que escriba uno', fa: 'هر شهروندی که یکی بنویسد' },
            why: { en: 'A citizen can write an idea. A member of Congress must introduce it.', es: 'Un ciudadano puede escribir una idea. Un miembro del Congreso debe presentarla.', fa: 'شهروند می‌تواند فکری بنویسد. یک عضو کانگرس باید آن را پیش کند.' } },
          { t: { en: 'Only the President of the US', es: 'Solo el presidente de EE. UU.', fa: 'فقط رئیس جمهور امریکا' },
            why: { en: 'The President can ask for laws, but cannot introduce a bill.', es: 'El presidente puede pedir leyes, pero no puede presentar un proyecto.', fa: 'رئیس جمهور می‌تواند قانون بخواهد، اما نمی‌تواند لایحه پیش کند.' } }
        ]
      }
    },
    {
      x: 17, y: 3,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیل' },
      role: { en: 'Committee staff', es: 'Personal de un comité', fa: 'کارمند کمیته' },
      look: { skin: 5, hair: '#120c08', shirt: '#c07a2a', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'Next, a bill goes to a [[committee|committee]], a small group of lawmakers.', es: 'Después, un proyecto va a un [[committee|comité]], un grupo pequeño de legisladores.', fa: 'بعد، لایحه به یک [[committee|کمیته]] می‌رود، یک گروه کوچک قانون‌گذاران.' },
        { en: 'They study it, hold [[hearing|hearings]], make changes and vote. Many bills stop here.', es: 'Lo estudian, hacen [[hearing|audiencias]], le hacen cambios y votan. Muchos proyectos se quedan aquí.', fa: 'آن را مطالعه می‌کنند، [[hearing|جلسهٔ شنیدن]] می‌گیرند، تغییر می‌دهند و رأی می‌دهند. خیلی لایحه‌ها همین‌جا می‌مانند.' },
        { en: 'Then the whole House votes. Then the Senate does the same steps.', es: 'Luego vota toda la Cámara. Después el Senado hace los mismos pasos.', fa: 'بعد تمام مجلس نمایندگان رأی می‌دهد. بعد سنا همین قدم‌ها را می‌رود.' },
        { en: 'Both houses must pass the same words. A [[conference committee|conference committee]] can fix differences.', es: 'Las dos cámaras deben aprobar el mismo texto. Un [[conference committee|comité de conferencia]] puede arreglar diferencias.', fa: 'هر دو مجلس باید عین همان متن را تصویب کنند. یک [[conference committee|کمیتهٔ مشترک]] فرق‌ها را حل می‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The House and Senate pass different versions of a bill. What can happen?', es: 'La Cámara y el Senado aprueban versiones distintas de un proyecto. ¿Qué puede pasar?', fa: 'مجلس نمایندگان و سنا نسخه‌های مختلف یک لایحه را تصویب می‌کنند. چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A conference committee fixes it', es: 'Un comité de conferencia lo arregla', fa: 'یک کمیتهٔ مشترک آن را حل می‌کند' },
            why: { en: 'Yes. Members of both houses agree on one version. Then both houses vote again.', es: 'Sí. Miembros de las dos cámaras acuerdan una versión. Luego las dos cámaras votan otra vez.', fa: 'بله. اعضای هر دو مجلس روی یک نسخه موافقه می‌کنند. بعد هر دو مجلس دوباره رأی می‌دهند.' } },
          { t: { en: 'The President picks one version', es: 'El presidente escoge una versión', fa: 'رئیس جمهور یک نسخه را می‌گزیند' },
            why: { en: 'No. Congress must pass one same version first. Then it goes to the President.', es: 'No. El Congreso primero debe aprobar una misma versión. Luego va al presidente.', fa: 'نه. کانگرس اول باید یک نسخهٔ یکسان را تصویب کند. بعد پیش رئیس جمهور می‌رود.' } },
          { t: { en: 'The longer version wins at once', es: 'La versión más larga gana de una vez', fa: 'نسخهٔ درازتر فوراً برنده می‌شود' },
            why: { en: 'No. Both houses must pass the very same words.', es: 'No. Las dos cámaras deben aprobar exactamente el mismo texto.', fa: 'نه. هر دو مجلس باید دقیقاً همان متن را تصویب کنند.' } }
        ]
      }
    },
    {
      x: 4, y: 7,
      name: { en: 'Ms. Haddad', es: 'Sra. Haddad', fa: 'خانم حداد' },
      role: { en: 'Capitol tour guide', es: 'Guía del Capitolio', fa: 'رهنمای سیر کاپیتول' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f8f8f', pants: '#2a2a3a', style: 'long', hat: '#e0c060' },
      lines: [
        { en: 'When both houses pass a bill, it goes to the President.', es: 'Cuando las dos cámaras aprueban un proyecto, va al presidente.', fa: 'وقتی هر دو مجلس یک لایحه را تصویب کنند، پیش رئیس جمهور می‌رود.' },
        { en: 'The President can sign it into law, or say no. That is a [[veto|veto]].', es: 'El presidente puede firmarlo como ley, o decir que no. Eso es un [[veto|veto]].', fa: 'رئیس جمهور می‌تواند آن را امضا کند تا قانون شود، یا «نه» بگوید. این [[veto|ویتو]] است.' },
        { en: 'Congress can [[override|override]] a veto with a two-thirds vote in both houses.', es: 'El Congreso puede [[override|anular]] un veto con el voto de dos tercios en las dos cámaras.', fa: 'کانگرس می‌تواند با رأی دو سوم در هر دو مجلس ویتو را [[override|بشکند]].' },
        { en: 'If the President waits 10 days (not Sundays) while Congress meets, it becomes law.', es: 'Si el presidente espera 10 días (sin contar domingos) mientras el Congreso se reúne, se vuelve ley.', fa: 'اگر رئیس جمهور ۱۰ روز (بدون یکشنبه‌ها) صبر کند و کانگرس در جلسه باشد، قانون می‌شود.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The President vetoes a bill. How can it still become a law?', es: 'El presidente veta un proyecto. ¿Cómo puede volverse ley de todos modos?', fa: 'رئیس جمهور یک لایحه را ویتو می‌کند. چطور هنوز می‌تواند قانون شود؟' },
        choices: [
          { ok: true, t: { en: 'Two thirds of both houses vote yes', es: 'Dos tercios de las dos cámaras votan sí', fa: 'دو سوم هر دو مجلس «بله» رأی می‌دهند' },
            why: { en: 'Yes! A two-thirds vote in the House and the Senate overrides a veto.', es: '¡Sí! El voto de dos tercios en la Cámara y en el Senado anula un veto.', fa: 'بله! رأی دو سوم در مجلس نمایندگان و سنا ویتو را می‌شکند.' } },
          { t: { en: 'Half of the House votes yes again', es: 'La mitad de la Cámara vota sí otra vez', fa: 'نیم مجلس نمایندگان دوباره «بله» می‌گوید' },
            why: { en: 'Half is not enough. It takes two thirds, in both houses.', es: 'La mitad no basta. Se necesitan dos tercios, en las dos cámaras.', fa: 'نیم کافی نیست. دو سوم لازم است، در هر دو مجلس.' } },
          { t: { en: 'The Supreme Court signs it instead', es: 'La Corte Suprema lo firma en su lugar', fa: 'دیوان عالی به جای او امضا می‌کند' },
            why: { en: 'No. Courts do not sign bills. Only Congress can override a veto.', es: 'No. Las cortes no firman proyectos. Solo el Congreso puede anular un veto.', fa: 'نه. محکمه‌ها لایحه امضا نمی‌کنند. فقط کانگرس می‌تواند ویتو را بشکند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 6, y: 9, text: { en: 'PENNSYLVANIA AVENUE · This street joins the Capitol and the White House, where the President works.', es: 'AVENIDA PENSILVANIA · Esta calle une el Capitolio con la Casa Blanca, donde trabaja el presidente.', fa: 'خیابان پنسلوانیا · این سرک کاپیتول را به کاخ سفید وصل می‌کند، جایی که رئیس جمهور کار می‌کند.' } },
    { x: 22, y: 9, text: { en: 'THE ROTUNDA · North wing: the Senate. South wing: the House of Representatives.', es: 'LA ROTONDA · Ala norte: el Senado. Ala sur: la Cámara de Representantes.', fa: 'روتوندا · بال شمالی: سنا. بال جنوبی: مجلس نمایندگان.' } },
    { x: 21, y: 17, text: { en: 'BUS STOP · Independence Avenue. House office buildings are on the south side.', es: 'PARADA DE BUS · Avenida Independencia. Los edificios de oficinas de la Cámara están al sur.', fa: 'ایستگاه بس · خیابان استقلال. ساختمان‌های دفتر مجلس نمایندگان در طرف جنوب هستند.' } }
  ],

  /* the quest: Maya (gold !) at the bus stop, south -> Ben the bike messenger on the East Plaza -> the Grump's Gust
     tore her petition letter into 3 pieces: by the House offices (south), in the Senate chamber (north wing),
     on Pennsylvania Avenue (west). Then catch the gust. */
  quest: {
    stat: 'mov',
    title: { en: 'The Blown-Away Letter', es: 'La carta que voló', fa: 'نامهٔ باد برده' },
    giver: {
      x: 22, y: 20,
      name: { en: 'Maya', es: 'Maya', fa: 'مایا' },
      role: { en: 'High school student', es: 'Estudiante de secundaria', fa: 'شاگرد لیسه' },
      look: { skin: 4, hair: '#1a1008', shirt: '#d9542b', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Help! I wrote a [[petition|petition]] letter to my Representative. I want safer bike lanes.', es: '¡Ayuda! Escribí una carta de [[petition|petición]] a mi representante. Quiero carriles de bici más seguros.', fa: 'کمک! به نماینده‌ام یک [[petition|عریضه]] نوشتم. سرک‌های امن‌تر برای بایسکل می‌خواهم.' },
        { en: 'A big gust of wind tore it into pieces! The Grump sent it.', es: '¡Una ráfaga de viento la rompió en pedazos! La mandó el Gruñón.', fa: 'یک باد تند آن را تکه تکه کرد! غرغرو آن را فرستاد.' },
        { en: 'Ben the bike messenger saw it. He is on the East Plaza.', es: 'Ben, el mensajero en bici, lo vio. Está en la Plaza Este.', fa: 'بن، پیام‌رسان بایسکل‌سوار، آن را دید. او در میدان شرقی است.' }
      ],
      wait: { en: 'Ben is on the East Plaza, east of the Capitol. Ask him where it went.', es: 'Ben está en la Plaza Este, al este del Capitolio. Pregúntale a dónde fue.', fa: 'بن در میدان شرقی، شرق کاپیتول است. از او بپرس به کجا رفت.' },
      thanks: { en: 'My whole letter! Now Representative Ruiz can read it. Thank you!', es: '¡Mi carta completa! Ahora la representante Ruiz puede leerla. ¡Gracias!', fa: 'نامهٔ کاملم! حالا نماینده رویز می‌تواند آن را بخواند. تشکر!' }
    },
    contact: {
      x: 27, y: 7,
      name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      role: { en: 'Bike messenger', es: 'Mensajero en bici', fa: 'پیام‌رسان بایسکل‌سوار' },
      look: { skin: 1, hair: '#c89a50', shirt: '#e0a020', pants: '#2a2a2a', style: 'short', hat: '#c0392b' },
      lines: [
        { en: 'I saw it! The Grump\'s Gust tore the letter into 3 pieces.', es: '¡Lo vi! La Ráfaga del Gruñón rompió la carta en 3 pedazos.', fa: 'دیدمش! باد غرغرو نامه را ۳ تکه کرد.' },
        { en: 'Citizens and [[lobbyist|lobbyists]] all try to sway lawmakers. A letter is your voice!', es: 'Ciudadanos y [[lobbyist|cabilderos]] tratan de convencer a los legisladores. ¡Una carta es tu voz!', fa: 'شهروندان و [[lobbyist|لابی‌گرها]] همه کوشش می‌کنند قانون‌گذاران را قانع کنند. نامه صدای توست!' },
        { en: 'Follow the clues to find every piece, then catch the gust!', es: 'Sigue las pistas para encontrar cada pedazo. ¡Luego atrapa la ráfaga!', fa: 'سرنخ‌ها را دنبال کن تا هر تکه را پیدا کنی، بعد باد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [27, 20],
      hops: [[4, 13], [16, 9]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'باد غرغرو' },
      taunt: { en: 'Whoosh! The Grump\'s Gust giggles: "I blew the pieces all over Capitol Hill!"', es: '¡Fiuuu! La Ráfaga del Gruñón se ríe: "¡Soplé los pedazos por toda la Colina del Capitolio!"', fa: 'ووش! باد غرغرو می‌خندد: «تکه‌ها را در تمام تپهٔ کاپیتول پراگنده کردم!»' },
      clues: [
        { t: { en: 'Piece 1 is where your Representative works: the House office buildings, south of Independence Avenue.', es: 'El pedazo 1 está donde trabaja tu representante: los edificios de oficinas de la Cámara, al sur de la Avenida Independencia.', fa: 'تکهٔ ۱ جایی است که نماینده‌ات کار می‌کند: ساختمان‌های دفتر مجلس نمایندگان، جنوب خیابان استقلال.' },
          zones: [{ x: 1, y: 18, w: 30, h: 3 }],
          noBy: [{ x: 1, y: 1, w: 30, h: 3, t: { en: 'These are Senate office buildings. Senators work here. Your Representative works in a House office.', es: 'Estos son edificios de oficinas del Senado. Aquí trabajan los senadores. Tu representante trabaja en una oficina de la Cámara.', fa: 'این‌ها ساختمان‌های دفتر سنا هستند. سناتورها اینجا کار می‌کنند. نماینده‌ات در دفتر مجلس نمایندگان کار می‌کند.' } }],
          found: { en: 'Piece 1! It was by the House offices, where Representatives work.', es: '¡El pedazo 1! Estaba junto a las oficinas de la Cámara, donde trabajan los representantes.', fa: 'تکهٔ ۱! کنار دفترهای مجلس نمایندگان بود، جایی که نماینده‌ها کار می‌کنند.' } },
        { t: { en: 'Piece 2 is in the room where the 100 senators vote, in the north wing.', es: 'El pedazo 2 está en la sala donde votan los 100 senadores, en el ala norte.', fa: 'تکهٔ ۲ در تالاری است که ۱۰۰ سناتور رأی می‌دهند، در بال شمالی.' },
          zones: [{ x: 9, y: 6, w: 14, h: 2 }],
          noBy: [{ x: 9, y: 14, w: 14, h: 2, t: { en: 'This is the House chamber, in the south wing. The Senate meets in the north wing.', es: 'Esta es la sala de la Cámara, en el ala sur. El Senado se reúne en el ala norte.', fa: 'این تالار مجلس نمایندگان است، در بال جنوبی. سنا در بال شمالی جلسه می‌کند.' } }],
          found: { en: 'Piece 2 was in the Senate chamber! Each state has 2 senators.', es: '¡El pedazo 2 estaba en la sala del Senado! Cada estado tiene 2 senadores.', fa: 'تکهٔ ۲ در تالار سنا بود! هر ایالت ۲ سناتور دارد.' } },
        { t: { en: 'Piece 3 blew down the street that joins the Capitol and the White House.', es: 'El pedazo 3 voló por la calle que une el Capitolio con la Casa Blanca.', fa: 'تکهٔ ۳ در سرکی افتاد که کاپیتول را به کاخ سفید وصل می‌کند.' },
          zones: [{ x: 1, y: 10, w: 7, h: 1 }],
          noBy: [{ x: 1, y: 17, w: 30, h: 1, t: { en: 'This is Independence Avenue. Find the street to the White House, on the west side.', es: 'Esta es la Avenida Independencia. Busca la calle a la Casa Blanca, en el lado oeste.', fa: 'این خیابان استقلال است. سرک کاخ سفید را در طرف غرب پیدا کن.' } },
            { x: 1, y: 4, w: 30, h: 1, t: { en: 'This is Constitution Avenue. Find the street to the White House, on the west side.', es: 'Esta es la Avenida Constitución. Busca la calle a la Casa Blanca, en el lado oeste.', fa: 'این خیابان قانون اساسی است. سرک کاخ سفید را در طرف غرب پیدا کن.' } }],
          found: { en: 'Piece 3, on Pennsylvania Avenue! The President works at its other end.', es: '¡El pedazo 3, en la Avenida Pensilvania! El presidente trabaja en el otro extremo.', fa: 'تکهٔ ۳، در خیابان پنسلوانیا! رئیس جمهور در آن سر سرک کار می‌کند.' } }
      ],
      win: { en: 'Caught you! The gust drops the letter. All 3 pieces fit together again!', es: '¡Te atrapé! La ráfaga suelta la carta. ¡Los 3 pedazos encajan otra vez!', fa: 'گرفتمت! باد نامه را می‌اندازد. هر ۳ تکه دوباره جور می‌شوند!' },
      item: { icon: '✉️', name: { en: 'Maya\'s petition letter', es: 'La carta de petición de Maya', fa: 'عریضهٔ مایا' } }
    }
  },

  scraps: [[1, 1], [30, 20], [22, 7]],
  smudges: [[5, 15], [28, 8]],

  challenge: {
    at: [15, 10],
    type: 'route', // in the world; the card version (order) is the fallback
    // hopper (House chamber) -> House committee (House office building, south) -> House floor vote -> Senate committee
    // (Senate office building, north) -> Senate floor vote (north wing) -> the President (Pennsylvania Avenue, west)
    spots: [[12, 15], [8, 20], [19, 14], [21, 3], [12, 6], [2, 10]],
    stat: 'pla',
    title: { en: 'Walk the bill', es: 'Lleva el proyecto', fa: 'لایحه را ببر' },
    intro: { en: 'Representative Ruiz made Maya\'s idea a bill: safer bike lanes. Walk it to each stop, in order.',
      es: 'La representante Ruiz convirtió la idea de Maya en un proyecto: carriles de bici más seguros. Llévalo a cada parada, en orden.',
      fa: 'نماینده رویز فکر مایا را لایحه ساخت: سرک‌های امن‌تر برای بایسکل. آن را به ترتیب به هر ایستگاه ببر.' },
    items: [
      { icon: '📥', t: { en: 'The hopper · a member drops the bill in this box', es: 'El buzón · un miembro deja el proyecto en esta caja', fa: 'صندوق لایحه · عضو لایحه را در این صندوق می‌اندازد' } },
      { icon: '🗂️', t: { en: 'House committee · study, hearings, changes, a vote', es: 'Comité de la Cámara · estudio, audiencias, cambios, un voto', fa: 'کمیتهٔ مجلس نمایندگان · مطالعه، جلسهٔ شنیدن، تغییر، رأی' } },
      { icon: '🗳️', t: { en: 'House floor · all the members vote', es: 'Pleno de la Cámara · votan todos los miembros', fa: 'تالار مجلس نمایندگان · همهٔ اعضا رأی می‌دهند' } },
      { icon: '🗂️', t: { en: 'Senate committee · the same steps again', es: 'Comité del Senado · los mismos pasos otra vez', fa: 'کمیتهٔ سنا · همان قدم‌ها دوباره' } },
      { icon: '🗳️', t: { en: 'Senate floor · senators vote on the same bill', es: 'Pleno del Senado · los senadores votan el mismo proyecto', fa: 'تالار سنا · سناتورها به همان لایحه رأی می‌دهند' } },
      { icon: '🖋️', t: { en: 'The President · sign it, or veto it', es: 'El presidente · lo firma o lo veta', fa: 'رئیس جمهور · امضا می‌کند یا ویتو می‌کند' } }
    ],
    why: { en: 'A bill that skips a stop dies. Order: hopper, House committee, House vote, Senate committee, Senate vote, President.',
      es: 'Un proyecto que se salta una parada muere. Orden: buzón, comité de la Cámara, voto de la Cámara, comité del Senado, voto del Senado, presidente.',
      fa: 'لایحه‌ای که از یک ایستگاه بگذرد، می‌میرد. ترتیب: صندوق، کمیتهٔ مجلس، رأی مجلس، کمیتهٔ سنا، رأی سنا، رئیس جمهور.' },
    success: { en: 'The President signed it! The safer bike lanes bill is now a law.', es: '¡El presidente lo firmó! El proyecto de carriles de bici seguros ya es ley.', fa: 'رئیس جمهور امضا کرد! لایحهٔ سرک‌های امن بایسکل حالا قانون است.' }
  },

  boss: {
    at: [28, 14],
    stat: 'pla',
    need: 3,
    name: { en: 'The Gridlock Grump', es: 'El Gruñón Atascado', fa: 'غرغروی بن‌بست' },
    appear: { en: 'The Gridlock Grump is hiding in the fog on the East Plaza!', es: '¡El Gruñón Atascado se esconde en la niebla de la Plaza Este!', fa: 'غرغروی بن‌بست در مه میدان شرقی پنهان است!' },
    taunt: { en: 'Bills? Votes? Bah! I will lose every bill in a big pile of paper!', es: '¿Proyectos? ¿Votos? ¡Bah! ¡Voy a perder cada proyecto en una montaña de papel!', fa: 'لایحه؟ رأی؟ بَه! هر لایحه را در یک کوه کاغذ گم می‌کنم!' },
    win: { en: 'The fog lifts off the Capitol. Charter page 5.2 floats down into your hands!', es: 'La niebla se va del Capitolio. ¡La página 5.2 de la carta cae en tus manos!', fa: 'مه از روی کاپیتول کنار می‌رود. صفحهٔ ۵.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Who can introduce a bill in Congress?', es: '¿Quién puede presentar un proyecto de ley en el Congreso?', fa: 'کی می‌تواند در کانگرس لایحه پیش کند؟' },
        choices: [
          { en: 'A member of Congress', es: 'Un miembro del Congreso', fa: 'یک عضو کانگرس' },
          { en: 'Any citizen who votes', es: 'Cualquier ciudadano que vota', fa: 'هر شهروندی که رأی می‌دهد' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس دیوان عالی' },
          { en: 'A state governor', es: 'Un gobernador de un estado', fa: 'والی یک ایالت' }],
        answer: 0,
        why: { en: 'Anyone can suggest an idea. Only a member of the House or Senate can introduce a bill.', es: 'Cualquiera puede sugerir una idea. Solo un miembro de la Cámara o del Senado puede presentar un proyecto.', fa: 'هر کس می‌تواند فکری بدهد. فقط عضو مجلس نمایندگان یا سنا می‌تواند لایحه پیش کند.' } },
      { q: { en: 'Bills to raise taxes must start where?', es: '¿Dónde deben empezar los proyectos para subir impuestos?', fa: 'لایحه‌های بلند بردن مالیات باید از کجا شروع شوند؟' },
        choices: [
          { en: 'The House of Representatives', es: 'La Cámara de Representantes', fa: 'مجلس نمایندگان' },
          { en: 'The Senate, with 100 members', es: 'El Senado, con 100 miembros', fa: 'سنا، با ۱۰۰ عضو' },
          { en: 'The President\'s office', es: 'La oficina del presidente', fa: 'دفتر رئیس جمهور' },
          { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' }],
        answer: 0,
        why: { en: 'The Constitution says bills to raise money, like taxes, must start in the House.', es: 'La Constitución dice que los proyectos para recaudar dinero, como los impuestos, deben empezar en la Cámara.', fa: 'قانون اساسی می‌گوید لایحه‌های جمع کردن پول، مثل مالیات، باید از مجلس نمایندگان شروع شوند.' } },
      { q: { en: 'What does a committee do with a bill?', es: '¿Qué hace un comité con un proyecto de ley?', fa: 'کمیته با یک لایحه چه می‌کند؟' },
        choices: [
          { en: 'Studies it and votes on it', es: 'Lo estudia y vota sobre él', fa: 'آن را مطالعه می‌کند و رأی می‌دهد' },
          { en: 'Signs it into law at once', es: 'Lo firma como ley de una vez', fa: 'فوراً امضا می‌کند تا قانون شود' },
          { en: 'Sends it to the Supreme Court', es: 'Lo manda a la Corte Suprema', fa: 'آن را به دیوان عالی می‌فرستد' },
          { en: 'Gives it to the President', es: 'Se lo da al presidente', fa: 'آن را به رئیس جمهور می‌دهد' }],
        answer: 0,
        why: { en: 'A committee studies the bill, holds hearings, may change it, then votes. Many bills stop there.', es: 'Un comité estudia el proyecto, hace audiencias, puede cambiarlo y luego vota. Muchos proyectos se quedan ahí.', fa: 'کمیته لایحه را مطالعه می‌کند، جلسهٔ شنیدن می‌گیرد، شاید تغییرش بدهد، بعد رأی می‌دهد. خیلی لایحه‌ها آنجا می‌مانند.' } },
      { q: { en: 'The House passed a bill. What must happen before the President gets it?', es: 'La Cámara aprobó un proyecto. ¿Qué debe pasar antes de que llegue al presidente?', fa: 'مجلس نمایندگان یک لایحه را تصویب کرد. پیش از رسیدن به رئیس جمهور چه باید شود؟' },
        choices: [
          { en: 'The Senate passes it too', es: 'El Senado también lo aprueba', fa: 'سنا هم آن را تصویب کند' },
          { en: 'Every state votes on it first', es: 'Cada estado vota primero', fa: 'اول هر ایالت به آن رأی بدهد' },
          { en: 'The courts approve it', es: 'Las cortes lo aprueban', fa: 'محکمه‌ها آن را قبول کنند' },
          { en: 'The people vote on it', es: 'El pueblo vota sobre él', fa: 'مردم به آن رأی بدهند' }],
        answer: 0,
        why: { en: 'Both houses must pass the same bill. Then it goes to the President.', es: 'Las dos cámaras deben aprobar el mismo proyecto. Luego va al presidente.', fa: 'هر دو مجلس باید همان لایحه را تصویب کنند. بعد پیش رئیس جمهور می‌رود.' } },
      { q: { en: 'The House and Senate passed different versions. Who can fix the differences?', es: 'La Cámara y el Senado aprobaron versiones distintas. ¿Quién puede arreglar las diferencias?', fa: 'مجلس نمایندگان و سنا نسخه‌های مختلف را تصویب کردند. کی فرق‌ها را حل می‌کند؟' },
        choices: [
          { en: 'A conference committee', es: 'Un comité de conferencia', fa: 'یک کمیتهٔ مشترک' },
          { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' },
          { en: 'The Vice President alone', es: 'El vicepresidente solo', fa: 'معاون رئیس جمهور به تنهایی' },
          { en: 'A group of lobbyists', es: 'Un grupo de cabilderos', fa: 'یک گروه لابی‌گرها' }],
        answer: 0,
        why: { en: 'Members of both houses meet in a conference committee and agree on one version.', es: 'Miembros de las dos cámaras se reúnen en un comité de conferencia y acuerdan una versión.', fa: 'اعضای هر دو مجلس در یک کمیتهٔ مشترک جمع می‌شوند و روی یک نسخه موافقه می‌کنند.' } },
      { q: { en: 'What is a veto?', es: '¿Qué es un veto?', fa: 'ویتو چیست؟' },
        choices: [
          { en: 'The President says no to a bill', es: 'El presidente le dice no a un proyecto', fa: 'رئیس جمهور به لایحه «نه» می‌گوید' },
          { en: 'Congress votes yes on a bill', es: 'El Congreso vota sí a un proyecto', fa: 'کانگرس به لایحه «بله» رأی می‌دهد' },
          { en: 'A judge ends a law in court', es: 'Un juez termina una ley en la corte', fa: 'قاضی در محکمه یک قانون را ختم می‌کند' },
          { en: 'A member drops a bill in the hopper', es: 'Un miembro deja un proyecto en el buzón', fa: 'عضو لایحه را در صندوق می‌اندازد' }],
        answer: 0,
        why: { en: 'A veto is when the President refuses to sign a bill. Congress can still override it.', es: 'Un veto es cuando el presidente se niega a firmar un proyecto. El Congreso aún puede anularlo.', fa: 'ویتو یعنی رئیس جمهور لایحه را امضا نمی‌کند. کانگرس هنوز می‌تواند آن را بشکند.' } },
      { q: { en: 'How can Congress override a veto?', es: '¿Cómo puede el Congreso anular un veto?', fa: 'کانگرس چطور می‌تواند ویتو را بشکند؟' },
        choices: [
          { en: 'Two thirds of both houses vote yes', es: 'Dos tercios de las dos cámaras votan sí', fa: 'دو سوم هر دو مجلس «بله» بگویند' },
          { en: 'Half of the Senate votes yes again', es: 'La mitad del Senado vota sí otra vez', fa: 'نیم سنا دوباره «بله» بگوید' },
          { en: 'The House votes yes one more time', es: 'La Cámara vota sí una vez más', fa: 'مجلس نمایندگان یک بار دیگر «بله» بگوید' },
          { en: 'The Supreme Court says it is fair', es: 'La Corte Suprema dice que es justo', fa: 'دیوان عالی بگوید عادلانه است' }],
        answer: 0,
        why: { en: 'It takes a two-thirds vote in the House AND the Senate. That is hard to do.', es: 'Se necesita el voto de dos tercios en la Cámara Y en el Senado. Eso es difícil.', fa: 'رأی دو سوم در مجلس نمایندگان و هم در سنا لازم است. این کار سخت است.' } },
      { q: { en: 'What does a lobbyist try to do?', es: '¿Qué trata de hacer un cabildero?', fa: 'لابی‌گر کوشش می‌کند چه کند؟' },
        choices: [
          { en: 'Win lawmakers\' votes', es: 'Ganar votos de legisladores', fa: 'رأی قانون‌گذاران را ببرد' },
          { en: 'Count votes in Congress', es: 'Contar votos en el Congreso', fa: 'رأی‌ها را در کانگرس بشمارد' },
          { en: 'Sign bills into law', es: 'Firmar proyectos como ley', fa: 'لایحه‌ها را امضا کند' },
          { en: 'Judge cases in court', es: 'Juzgar casos en la corte', fa: 'در محکمه قضاوت کند' }],
        answer: 0,
        why: { en: 'Lobbyists speak for groups and try to persuade lawmakers. Citizens can do this too, with letters and calls.', es: 'Los cabilderos hablan por grupos y tratan de convencer a los legisladores. Los ciudadanos también, con cartas y llamadas.', fa: 'لابی‌گرها از طرف گروه‌ها گپ می‌زنند و قانون‌گذاران را قانع می‌کنند. شهروندان هم با نامه و زنگ این کار را می‌کنند.' } }
    ]
  },

  learned: [
    { en: 'Anyone can suggest an idea, but only a member of [[congress|Congress]] can introduce a [[bill|bill]]. Tax bills start in the House.', es: 'Cualquiera puede sugerir una idea, pero solo un miembro del [[congress|Congreso]] puede presentar un [[bill|proyecto de ley]]. Los de impuestos empiezan en la Cámara.', fa: 'هر کس می‌تواند فکری بدهد، اما فقط عضو [[congress|کانگرس]] می‌تواند [[bill|لایحه]] پیش کند. لایحهٔ مالیات از مجلس نمایندگان شروع می‌شود.' },
    { en: 'A bill goes to a [[committee|committee]], then a floor vote, then the same steps in the other house.', es: 'Un proyecto va a un [[committee|comité]], luego a un voto en el pleno, y luego pasa los mismos pasos en la otra cámara.', fa: 'لایحه به [[committee|کمیته]] می‌رود، بعد به رأی تالار، بعد همان قدم‌ها در مجلس دیگر.' },
    { en: 'The President signs it or vetoes it. Congress can [[override|override]] a [[veto|veto]] with two thirds of both houses.', es: 'El presidente lo firma o lo veta. El Congreso puede [[override|anular]] un [[veto|veto]] con dos tercios de las dos cámaras.', fa: 'رئیس جمهور امضا می‌کند یا [[veto|ویتو]] می‌کند. کانگرس با دو سوم هر دو مجلس می‌تواند ویتو را [[override|بشکند]].' }
  ],
  reflect: {
    q: { en: 'What law would you ask your Representative for? Who would you ask to help you?', es: '¿Qué ley le pedirías a tu representante? ¿A quién le pedirías ayuda?', fa: 'از نماینده‌ات چه قانونی می‌خواهی؟ از کی کمک می‌خواهی؟' },
    starter: { en: 'I would ask for a law that', es: 'Yo pediría una ley que', fa: 'من قانونی می‌خواهم که' }
  }
};
