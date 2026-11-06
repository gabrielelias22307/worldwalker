/* TIMEWALKER · Episode 4.1 · The Enlightenment (WHII)
   Paris around 1750. North half (rows 1-8): the Right Bank, with tall houses, a salon, the street along the river,
   a small garden and the bookstalls on the river bank. Rows 9-10: the river Seine, with two bridges (x 7 and x 24).
   South half (rows 11-20): the Left Bank and the Latin Quarter, with the Café Procope, the University of Paris,
   a print shop and a little market. */
window.EPISODE = {
  id: '4.1',
  realm: 4,
  sol: 'WHII',
  title: { en: 'The Enlightenment', es: 'La Ilustración', fa: 'عصر روشنگری' },
  place: { en: 'Paris, 1750', es: 'París, 1750', fa: 'پاریس، ۱۷۵۰' },
  weather: { sky: 'leaves', time: 'day' },
  intro: [
    { en: 'The Grump blurred the [[enlightenment|Enlightenment]] page. People forgot where ideas about rights came from.',
      es: 'El Gruñón borró la página de la [[enlightenment|Ilustración]]. La gente olvidó de dónde vienen las ideas sobre los derechos.',
      fa: 'غرغرو صفحهٔ [[enlightenment|عصر روشنگری]] را تار کرد. مردم فراموش کردند اندیشه‌های حقوق از کجا آمده‌اند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Paris on the world map, 1750 on the timeline */
  scenes: {
    at: [2.35, 48.86],
    year: 1750,
    start: [
      { en: 'In the 1700s, writers in Europe asked new questions about power.',
        es: 'En los años 1700, escritores de Europa hicieron preguntas nuevas sobre el poder.',
        fa: 'در قرن هجدهم، نویسندگان اروپا دربارهٔ قدرت سوال‌های نو پرسیدند.' },
      { en: 'They used [[reason|reason]] to think about rights, laws and freedom.',
        es: 'Usaron la [[reason|razón]] para pensar en los derechos, las leyes y la libertad.',
        fa: 'آن‌ها با [[reason|عقل]] دربارهٔ حقوق، قانون و آزادی فکر کردند.' },
      { en: 'Historians call this time the Enlightenment.',
        es: 'Los historiadores llaman a esta época la Ilustración.',
        fa: 'تاریخ‌دانان این زمان را عصر روشنگری می‌نامند.' }
    ],
    page: { en: 'In 1751, the first book of the Encyclopedia came out in Paris.',
      es: 'En 1751, salió en París el primer tomo de la Enciclopedia.',
      fa: 'در سال ۱۷۵۱، اولین جلد دایرة‌المعارف در پاریس چاپ شد.' },
    guess: {
      q: { en: 'Some thinkers said people are born with rights. Who gives those rights?', es: 'Algunos pensadores dijeron que nacemos con derechos. ¿Quién da esos derechos?', fa: 'بعضی اندیشمندان گفتند انسان با حقوق به دنیا می‌آید. این حقوق را کی می‌دهد؟' },
      choices: [
        { t: { en: '🌱 Every person has them', es: '🌱 Todos nacen con ellos', fa: '🌱 هر انسان آن‌ها را دارد' }, ok: true },
        { t: { en: '👑 Only the king', es: '👑 Solo el rey', fa: '👑 فقط پادشاه' } }
      ],
      why: { en: 'John Locke said every person is born with rights. No king gives them.', es: 'John Locke dijo que toda persona nace con derechos. Ningún rey los da.', fa: 'جان لاک گفت هر انسان با حقوق به دنیا می‌آید. هیچ پادشاهی آن‌ها را نمی‌دهد.' }
    },
    next: {
      q: { en: 'Next: revolutions in America and France. Did these ideas reach them?', es: 'Ahora: las revoluciones de América y Francia. ¿Llegaron allí estas ideas?', fa: 'بعدی: انقلاب‌های امریکا و فرانسه. آیا این اندیشه‌ها به آنجا رسید؟' },
      choices: [
        { t: { en: '📜 Yes, people read them', es: '📜 Sí, la gente las leyó', fa: '📜 بله، مردم آن‌ها را خواندند' }, ok: true },
        { t: { en: '🙈 No, nobody read them', es: '🙈 No, nadie las leyó', fa: '🙈 نه، هیچ کس نخواند' } }
      ],
      why: { en: 'Leaders in America and France read Locke and Montesquieu. Their ideas shaped new governments.', es: 'Los líderes de América y Francia leyeron a Locke y Montesquieu. Sus ideas formaron gobiernos nuevos.', fa: 'رهبران امریکا و فرانسه لاک و مونتسکیو را خواندند. اندیشه‌های آن‌ها حکومت‌های نو ساخت.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk (2 lines each). Paris rooms use the realm 1 look. */
  houses: [
    { at: [4, 2], style: 1, name: { en: 'Monsieur Hubert', es: 'Monsieur Hubert', fa: 'موسیو اوبر' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#3a4a6a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I teach the children of a rich family. Today we read Voltaire.', es: 'Enseño a los niños de una familia rica. Hoy leemos a Voltaire.', fa: 'من به فرزندان یک خانوادهٔ ثروتمند درس می‌دهم. امروز ولتر می‌خوانیم.' },
        { en: 'Voltaire praises the Chinese thinker Confucius and his ideas about wise rulers.', es: 'Voltaire alaba al pensador chino Confucio y sus ideas sobre los gobernantes sabios.', fa: 'ولتر از کنفوسیوس، اندیشمند چینی، و اندیشه‌هایش دربارهٔ حاکمان دانا تعریف می‌کند.' }
      ] },
    { at: [21, 2], style: 1, name: { en: 'Madame Colette', es: 'Madame Colette', fa: 'مادام کولت' },
      look: { skin: 0, hair: '#e8e0d0', shirt: '#9a4a7a', pants: '#5a2a4a', style: 'bun' },
      lines: [
        { en: 'Writers and artists meet in my [[salon|salon]] every week.', es: 'Escritores y artistas se reúnen en mi [[salon|salón]] cada semana.', fa: 'نویسندگان و هنرمندان هر هفته در [[salon|محفل]] من جمع می‌شوند.' },
        { en: 'We talk about books, science and fair laws. Women lead many salons.', es: 'Hablamos de libros, ciencia y leyes justas. Muchas mujeres dirigen salones.', fa: 'دربارهٔ کتاب، علم و قانون عادلانه گپ می‌زنیم. بسیاری از محفل‌ها را زنان اداره می‌کنند.' }
      ] },
    { at: [4, 14], style: 1, name: { en: 'Paolo', es: 'Paolo', fa: 'پائولو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#f2f2f2', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'Welcome to the Café Procope! It opened in 1686.', es: '¡Bienvenido al Café Procope! Abrió en 1686.', fa: 'به قهوه‌خانهٔ پروکوپ خوش آمدی! در سال ۱۶۸۶ باز شد.' },
        { en: 'Writers argue here over coffee. Coffee came to Paris from the Ottoman Empire.', es: 'Aquí los escritores discuten tomando café. El café llegó a París desde el Imperio otomano.', fa: 'نویسندگان اینجا با قهوه بحث می‌کنند. قهوه از امپراتوری عثمانی به پاریس آمد.' }
      ] },
    { at: [20, 14], style: 1, name: { en: 'Nicole', es: 'Nicole', fa: 'نیکول' },
      look: { skin: 1, hair: '#6a3a1a', shirt: '#5a7a4a', pants: '#3a3a2a', style: 'long' },
      lines: [
        { en: 'I set metal letters one by one, to print each page.', es: 'Pongo letras de metal una por una para imprimir cada página.', fa: 'حرف‌های فلزی را یکی یکی می‌چینم تا هر صفحه چاپ شود.' },
        { en: 'Printing makes books cheaper, so new ideas spread fast across Europe.', es: 'La imprenta hace los libros más baratos, así que las ideas nuevas corren rápido por Europa.', fa: 'چاپ کتاب‌ها را ارزان‌تر می‌کند، پس اندیشه‌های نو زود در اروپا پخش می‌شوند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (rows 1-8): the Right Bank. Houses (R/Q over h), the street (l), a fountain (O), a small garden (T),
     the bookstalls (m) on the river bank (row 7) and the path along the river (row 8).
     Rows 9-10: the Seine (~) with two bridges (B) at x 7 and x 24.
     South (rows 11-20): the Left Bank. The Café Procope (x 2-5), the University of Paris (D), the print shop (x 19-21),
     a house, the streets of the Latin Quarter and a small market (m). */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W..RRR...QQQ........RRR..QQQ...W',
    'W..hdh...hhh........hdh..hhh...W',
    'W.............,................W',
    'Wxllllllllllllllllllllllllllll.W',
    'W......l.....,..........l......W',
    'W.TT.T.l..O.............l.T..T.W',
    'W.T....l.mmmm.......mmmml......W',
    'W..lllllllllllllllllllllllll...W',
    '~~~~~~~B~~~~~~~~~~~~~~~~B~~~~~~~',
    '~~~~~~~B~~~~~~~~~~~~~~~~B~~~~~~~',
    'W..lllllllllllllllllllllllll...W',
    'W......l........l.......l......W',
    'W.QQQQ.l.DDDDD..l..RRR..l..QQQ.W',
    'W.hhdh.l.DDDDD..l..hdh..l..hhh.W',
    'W......l........l.......l......W',
    'W..lllllllllllllllllllllllll...W',
    'W..T.....x.....,.........T.....W',
    'W.,...T.......T.....m.m....,...W',
    'W......................T.......W',
    'W..T.........,...........T.....W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [16, 19],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [29, 5], at: [29, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, to the river bank.', es: 'Desde esta nota, camina 3 pasos al sur, hasta la orilla del río.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، تا کنار دریا.' },
      text: { en: 'A silver coin with the face of King Louis XV. He ruled France from 1715 to 1774.', es: 'Una moneda de plata con la cara del rey Luis XV. Gobernó Francia de 1715 a 1774.', fa: 'یک سکهٔ نقره با چهرهٔ پادشاه لویی پانزدهم. او از ۱۷۱۵ تا ۱۷۷۴ بر فرانسه حکومت کرد.' } },
    { clueAt: [8, 19], at: [13, 20], decor: 'feather',
      clue: { en: 'From this note, walk 5 steps east, then 1 step south.', es: 'Desde esta nota, camina 5 pasos al este y luego 1 paso al sur.', fa: 'از این یادداشت، ۵ قدم به شرق برو، بعد ۱ قدم به جنوب.' },
      text: { en: 'A goose feather pen, called a quill. Writers dipped quills in ink to write their books.', es: 'Una pluma de ganso para escribir. Los escritores la mojaban en tinta para escribir sus libros.', fa: 'یک قلم از پَر غاز. نویسندگان آن را در رنگ می‌زدند و کتاب‌هایشان را می‌نوشتند.' } }
  ],

  words: {
    enlightenment: { en: 'a time in the 1700s when thinkers used reason to question old ideas about power', es: 'una época de los años 1700 en que los pensadores usaron la razón para cuestionar ideas viejas sobre el poder', fa: 'زمانی در قرن هجدهم که اندیشمندان با عقل اندیشه‌های کهنه دربارهٔ قدرت را زیر سوال بردند' },
    reason: { en: 'careful, clear thinking to find what is true', es: 'pensar con cuidado y claridad para encontrar la verdad', fa: 'فکر کردن دقیق و روشن برای پیدا کردن حقیقت' },
    'natural rights': { en: 'rights every person is born with: life, liberty and property', es: 'derechos con los que nace toda persona: la vida, la libertad y la propiedad', fa: 'حقوقی که هر انسان با آن به دنیا می‌آید: زندگی، آزادی و دارایی' },
    'separation of powers': { en: 'splitting government into parts, so no one person or group holds all the power', es: 'dividir el gobierno en partes, para que ninguna persona o grupo tenga todo el poder', fa: 'تقسیم حکومت به چند بخش، تا هیچ کس یا گروهی همهٔ قدرت را نداشته باشد' },
    'social contract': { en: 'the idea that people agree to a government, and it must serve them', es: 'la idea de que la gente acepta un gobierno, y ese gobierno debe servirle', fa: 'این اندیشه که مردم یک حکومت را قبول می‌کنند و آن حکومت باید به مردم خدمت کند' },
    salon: { en: 'a meeting in a home where people talk about books and ideas', es: 'una reunión en una casa donde la gente habla de libros e ideas', fa: 'جمع شدن در یک خانه برای گپ زدن دربارهٔ کتاب و اندیشه' },
    censor: { en: 'a person who checks books and bans the ones rulers do not like', es: 'una persona que revisa los libros y prohíbe los que no les gustan a los gobernantes', fa: 'کسی که کتاب‌ها را بررسی می‌کند و آن‌هایی را که حاکمان نمی‌پسندند منع می‌کند' },
    'absolute monarch': { en: 'a king or queen whose power has no limits', es: 'un rey o una reina cuyo poder no tiene límites', fa: 'پادشاه یا ملکه‌ای که قدرتش هیچ حدی ندارد' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 19, y: 7,
      name: { en: 'Jeanne', es: 'Jeanne', fa: 'ژان' },
      role: { en: 'Bookseller', es: 'Librera', fa: 'کتاب‌فروش' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#2f6f5a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Books for sale! I sell books here by the river Seine.', es: '¡Libros a la venta! Vendo libros aquí junto al río Sena.', fa: 'کتاب برای فروش! من اینجا کنار دریای سن کتاب می‌فروشم.' },
        { en: 'This book is by John Locke, an English writer. It is from 1690.', es: 'Este libro es de John Locke, un escritor inglés. Es de 1690.', fa: 'این کتاب از جان لاک، یک نویسندهٔ انگلیسی است. از سال ۱۶۹۰ است.' },
        { en: 'He said all people are born with [[natural rights|natural rights]]: life, liberty and property.', es: 'Dijo que todos nacemos con [[natural rights|derechos naturales]]: la vida, la libertad y la propiedad.', fa: 'او گفت همهٔ مردم با [[natural rights|حقوق طبیعی]] به دنیا می‌آیند: زندگی، آزادی و دارایی.' },
        { en: 'If a government takes those rights away, people may change the government.', es: 'Si un gobierno quita esos derechos, la gente puede cambiar el gobierno.', fa: 'اگر حکومتی این حقوق را بگیرد، مردم می‌توانند آن حکومت را تغییر دهند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'What did Locke say all people are born with?', es: '¿Con qué dijo Locke que nacen todas las personas?', fa: 'لاک گفت همهٔ مردم با چه چیز به دنیا می‌آیند؟' },
        choices: [
          { ok: true, t: { en: 'Rights to life, liberty and property', es: 'Derechos a la vida, la libertad y la propiedad', fa: 'حق زندگی، آزادی و دارایی' },
            why: { en: 'Right! Locke called them natural rights. No king gives them, and no king may take them.', es: '¡Correcto! Locke los llamó derechos naturales. Ningún rey los da, y ningún rey puede quitarlos.', fa: 'درست! لاک آن‌ها را حقوق طبیعی نامید. هیچ پادشاهی آن‌ها را نمی‌دهد و نمی‌تواند بگیرد.' } },
          { t: { en: 'A duty to obey every order of the king', es: 'El deber de obedecer cada orden del rey', fa: 'وظیفهٔ اطاعت از هر فرمان پادشاه' },
            why: { en: 'Locke said the opposite. A government must protect rights, or people may change it.', es: 'Locke dijo lo contrario. Un gobierno debe proteger los derechos, o la gente puede cambiarlo.', fa: 'لاک برعکس گفت. حکومت باید از حقوق نگهداری کند، وگرنه مردم می‌توانند آن را تغییر دهند.' } },
          { t: { en: 'Land and gold given to them by the church', es: 'Tierras y oro que les da la iglesia', fa: 'زمین و طلایی که کلیسا به آن‌ها می‌دهد' },
            why: { en: 'Locke wrote about rights every person has from birth, not gifts from the church.', es: 'Locke escribió sobre derechos que toda persona tiene al nacer, no regalos de la iglesia.', fa: 'لاک دربارهٔ حقوقی نوشت که هر کس از تولد دارد، نه بخشش کلیسا.' } }
        ]
      }
    },
    {
      x: 14, y: 15,
      name: { en: 'Antoine', es: 'Antoine', fa: 'آنتوان' },
      role: { en: 'Law student', es: 'Estudiante de derecho', fa: 'محصل حقوق' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2a3a6a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I study law at the university. My favorite writer is Montesquieu.', es: 'Estudio derecho en la universidad. Mi escritor favorito es Montesquieu.', fa: 'من در پوهنتون حقوق می‌خوانم. نویسندهٔ دلخواهم مونتسکیو است.' },
        { en: 'In 1748, he wrote that government power should be split into three parts.', es: 'En 1748, escribió que el poder del gobierno debe dividirse en tres partes.', fa: 'او در سال ۱۷۴۸ نوشت که قدرت حکومت باید به سه بخش تقسیم شود.' },
        { en: 'One part makes laws, one carries them out, and one judges.', es: 'Una parte hace las leyes, otra las cumple y otra juzga.', fa: 'یک بخش قانون می‌سازد، یک بخش آن را اجرا می‌کند و یک بخش قضاوت می‌کند.' },
        { en: 'This is the [[separation of powers|separation of powers]]. No one person holds all the power.', es: 'Esto es la [[separation of powers|separación de poderes]]. Nadie tiene todo el poder.', fa: 'این [[separation of powers|تفکیک قوا]] است. هیچ کس همهٔ قدرت را ندارد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did Montesquieu want to split power into three parts?', es: '¿Por qué Montesquieu quería dividir el poder en tres partes?', fa: 'چرا مونتسکیو می‌خواست قدرت را به سه بخش تقسیم کند؟' },
        choices: [
          { ok: true, t: { en: 'So no one person holds all the power', es: 'Para que nadie tenga todo el poder', fa: 'تا هیچ کس همهٔ قدرت را نداشته باشد' },
            why: { en: 'Yes. Each part can check the others. The United States later used this idea.', es: 'Sí. Cada parte puede vigilar a las otras. Después, Estados Unidos usó esta idea.', fa: 'بله. هر بخش می‌تواند بخش‌های دیگر را کنترول کند. بعدها ایالات متحده از این اندیشه کار گرفت.' } },
          { t: { en: 'So the king could rule faster alone', es: 'Para que el rey gobernara solo y más rápido', fa: 'تا پادشاه تنها و تیزتر حکومت کند' },
            why: { en: 'Montesquieu wanted the opposite. One ruler with all the power can treat people unfairly.', es: 'Montesquieu quería lo contrario. Un gobernante con todo el poder puede tratar mal a la gente.', fa: 'مونتسکیو برعکس می‌خواست. حاکمی که همهٔ قدرت را دارد می‌تواند با مردم بی‌انصافی کند.' } },
          { t: { en: 'So the church could write all the laws', es: 'Para que la iglesia escribiera todas las leyes', fa: 'تا کلیسا همهٔ قانون‌ها را بنویسد' },
            why: { en: 'Montesquieu wanted three parts of government to share power, not one group.', es: 'Montesquieu quería que tres partes del gobierno compartieran el poder, no un solo grupo.', fa: 'مونتسکیو می‌خواست سه بخش حکومت قدرت را شریک باشند، نه یک گروه.' } }
        ]
      }
    },
    {
      x: 4, y: 6,
      name: { en: 'Suzanne', es: 'Suzanne', fa: 'سوزان' },
      role: { en: 'Seamstress', es: 'Costurera', fa: 'خیاط' },
      look: { skin: 4, hair: '#120c08', shirt: '#c8643a', pants: '#3a2a4a', style: 'long' },
      lines: [
        { en: 'I sew dresses for rich ladies. I hear them talk about freedom.', es: 'Coso vestidos para señoras ricas. Las oigo hablar de libertad.', fa: 'من برای خانم‌های ثروتمند لباس می‌دوزم. می‌شنوم که از آزادی گپ می‌زنند.' },
        { en: 'Writers say all men are born free. But what about women?', es: 'Los escritores dicen que todos los hombres nacen libres. ¿Y las mujeres?', fa: 'نویسندگان می‌گویند همهٔ مردان آزاد به دنیا می‌آیند. پس زنان چه؟' },
        { en: 'And France keeps [[enslaved|enslaved]] people in its colonies. They are left out too.', es: 'Y Francia tiene personas [[enslaved|esclavizadas]] en sus colonias. A ellas también las dejan fuera.', fa: 'و فرانسه در مستعمره‌هایش مردم [[enslaved|برده]] دارد. آن‌ها هم بیرون مانده‌اند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who was often left out when writers talked about rights?', es: '¿A quiénes dejaban fuera muchas veces cuando los escritores hablaban de derechos?', fa: 'وقتی نویسندگان از حقوق گپ می‌زدند، اکثراً کی‌ها بیرون می‌ماندند؟' },
        choices: [
          { ok: true, t: { en: 'Women and enslaved people', es: 'Las mujeres y las personas esclavizadas', fa: 'زنان و مردم برده' },
            why: { en: 'Yes. Most writers meant only free men. Women and enslaved people had to fight for their rights.', es: 'Sí. Casi todos pensaban solo en hombres libres. Las mujeres y los esclavizados lucharon por sus derechos.', fa: 'بله. بیشتر نویسندگان فقط مردان آزاد را در نظر داشتند. زنان و برده‌ها برای حقوق خود جنگیدند.' } },
          { t: { en: 'Kings and rich nobles', es: 'Los reyes y los nobles ricos', fa: 'پادشاهان و اشراف ثروتمند' },
            why: { en: 'Kings and nobles already had power and rights. The people left out had the least power.', es: 'Los reyes y los nobles ya tenían poder y derechos. Los que quedaban fuera tenían menos poder.', fa: 'پادشاهان و اشراف از قبل قدرت و حقوق داشتند. کسانی که بیرون ماندند کمترین قدرت را داشتند.' } },
          { t: { en: 'Writers and booksellers', es: 'Los escritores y los libreros', fa: 'نویسندگان و کتاب‌فروشان' },
            why: { en: 'Writers and booksellers were often free men. Women and enslaved people were the ones left out.', es: 'Los escritores y libreros solían ser hombres libres. Las mujeres y los esclavizados quedaban fuera.', fa: 'نویسندگان و کتاب‌فروشان اکثراً مردان آزاد بودند. زنان و برده‌ها بیرون می‌ماندند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 4, text: { en: 'PARIS · 1750 · King Louis XV is an [[absolute monarch|absolute monarch]]. His word is law.', es: 'PARÍS · 1750 · El rey Luis XV es un [[absolute monarch|monarca absoluto]]. Su palabra es ley.', fa: 'پاریس · ۱۷۵۰ · پادشاه لویی پانزدهم یک [[absolute monarch|پادشاه مطلق]] است. حرف او قانون است.' } },
    { x: 9, y: 17, text: { en: 'THE LATIN QUARTER · Students from all over Europe study at the University of Paris.', es: 'EL BARRIO LATINO · Estudiantes de toda Europa estudian en la Universidad de París.', fa: 'محلهٔ لاتین · محصلان از سراسر اروپا در پوهنتون پاریس درس می‌خوانند.' } }
  ],

  /* the quest: Lucas the printer (gold !) by his shop on the Left Bank -> Margot at the Café Procope (south-west)
     -> the banned book, hidden under the bookstalls on the north bank, 2 steps east of the west bridge -> back to Lucas */
  quest: {
    stat: 'reg',
    title: { en: 'The Hidden Book', es: 'El libro escondido', fa: 'کتاب پنهان' },
    giver: {
      x: 22, y: 15,
      name: { en: 'Lucas', es: 'Lucas', fa: 'لوکاس' },
      role: { en: 'Printer', es: 'Impresor', fa: 'چاپگر' },
      look: { skin: 1, hair: '#3a2416', shirt: '#e8dcc0', pants: '#4a3a2a', hat: '#2a2a2a' },
      lines: [
        { en: 'I print books. But the king\'s [[censor|censors]] ban books that question him.', es: 'Imprimo libros. Pero los [[censor|censores]] del rey prohíben los libros que lo cuestionan.', fa: 'من کتاب چاپ می‌کنم. اما [[censor|سانسورچی‌های]] پادشاه کتاب‌هایی را که از او انتقاد کنند منع می‌کنند.' },
        { en: 'In 1734, Paris burned a book by Voltaire. My helper Margot hid my copy.', es: 'En 1734, París quemó un libro de Voltaire. Mi ayudante Margot escondió mi copia.', fa: 'در سال ۱۷۳۴، پاریس یک کتاب ولتر را سوزاند. همکارم مارگو نسخهٔ مرا پنهان کرد.' },
        { en: 'Please ask Margot where it is. She works at the café.', es: 'Por favor, pregúntale a Margot dónde está. Trabaja en el café.', fa: 'لطفاً از مارگو بپرس کجاست. او در قهوه‌خانه کار می‌کند.' }
      ],
      wait: { en: 'Margot works at the Café Procope, on the west side of the Latin Quarter.', es: 'Margot trabaja en el Café Procope, al oeste del Barrio Latino.', fa: 'مارگو در قهوه‌خانهٔ پروکوپ، در غرب محلهٔ لاتین کار می‌کند.' },
      thanks: { en: 'My copy of Voltaire\'s book! Ideas should be free to share. Thank you!', es: '¡Mi copia del libro de Voltaire! Las ideas deben ser libres. ¡Gracias!', fa: 'نسخهٔ کتاب ولتر من! اندیشه‌ها باید آزادانه پخش شوند. تشکر!' }
    },
    contact: {
      x: 6, y: 15,
      name: { en: 'Margot', es: 'Margot', fa: 'مارگو' },
      role: { en: 'Café server', es: 'Mesera del café', fa: 'کارگر قهوه‌خانه' },
      look: { skin: 2, hair: '#8a4a20', shirt: '#7a2a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Yes, I hid the book. The censors were searching every shop.', es: 'Sí, escondí el libro. Los censores revisaban todas las tiendas.', fa: 'بله، کتاب را پنهان کردم. سانسورچی‌ها هر دکان را می‌گشتند.' },
        { en: 'It is under the bookstalls on the north bank of the river.', es: 'Está debajo de los puestos de libros, en la orilla norte del río.', fa: 'زیر دکان‌های کتاب، در ساحل شمالی دریا است.' },
        { en: 'Cross the west bridge. From its north end, walk 2 steps east.', es: 'Cruza el puente del oeste. Desde su punta norte, camina 2 pasos al este.', fa: 'از پل غربی بگذر. از سر شمالی آن، ۲ قدم به شرق برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [9, 8],
      hint: { en: 'north bank: from the west bridge, 2 steps east', es: 'orilla norte: desde el puente del oeste, 2 pasos al este', fa: 'ساحل شمالی: از پل غربی، ۲ قدم به شرق' },
      found: { en: 'Here it is, under the bookstall! Many people read banned books in secret.', es: '¡Aquí está, bajo el puesto de libros! Mucha gente leía libros prohibidos en secreto.', fa: 'اینجاست، زیر دکان کتاب! بسیاری از مردم کتاب‌های منع‌شده را پنهانی می‌خواندند.' },
      item: { icon: '📕', name: { en: 'Voltaire\'s banned book', es: 'El libro prohibido de Voltaire', fa: 'کتاب منع‌شدهٔ ولتر' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 12]],
  smudges: [[13, 5], [10, 19]],

  challenge: {
    at: [28, 18],
    type: 'table',
    stat: 'hei',
    title: { en: 'What did the thinkers write?', es: '¿Qué escribieron los pensadores?', fa: 'اندیشمندان چه نوشتند؟' },
    intro: { en: 'The Grump smudged the thinkers\' words. Read the table, then answer the questions.',
      es: 'El Gruñón manchó las palabras de los pensadores. Lee la tabla y luego responde las preguntas.',
      fa: 'غرغرو حرف‌های اندیشمندان را لکه‌دار کرد. جدول را بخوان، بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Thinker', es: 'Pensador', fa: 'اندیشمند' },
        { en: 'Year', es: 'Año', fa: 'سال' },
        { en: 'What he wrote, in simple words', es: 'Lo que escribió, en palabras sencillas', fa: 'آنچه نوشت، به زبان ساده' }
      ],
      rows: [
        [{ en: 'John Locke (England)', es: 'John Locke (Inglaterra)', fa: 'جان لاک (انگلستان)' }, '1690',
          { en: '"No one should harm another in life, health, liberty or property."', es: '"Nadie debe dañar a otro en su vida, salud, libertad o propiedad."', fa: '«هیچ کس نباید به زندگی، صحت، آزادی یا دارایی دیگری آسیب برساند.»' }],
        [{ en: 'Montesquieu (France)', es: 'Montesquieu (Francia)', fa: 'مونتسکیو (فرانسه)' }, '1748',
          { en: '"If one person makes the laws and carries them out, there is no liberty."', es: '"Si una sola persona hace las leyes y las cumple, no hay libertad."', fa: '«اگر یک نفر هم قانون بسازد و هم اجرا کند، آزادی نیست.»' }],
        [{ en: 'Rousseau (Geneva)', es: 'Rousseau (Ginebra)', fa: 'روسو (ژنو)' }, '1762',
          { en: '"Man is born free, and everywhere he is in chains."', es: '"El hombre nace libre, y en todas partes está encadenado."', fa: '«انسان آزاد به دنیا می‌آید، و همه جا در زنجیر است.»' }],
        [{ en: 'Voltaire (France)', es: 'Voltaire (Francia)', fa: 'ولتر (فرانسه)' }, '1763',
          { en: '"People should be free to follow their own religion."', es: '"La gente debe ser libre de seguir su propia religión."', fa: '«مردم باید در پیروی از دین خود آزاد باشند.»' }]
      ],
      note: { en: 'The words are made simpler. The year is when the book came out.', es: 'Las palabras están simplificadas. El año es cuando salió el libro.', fa: 'حرف‌ها ساده شده‌اند. سال، زمان چاپ کتاب است.' }
    },
    questions: [
      { q: { en: 'Which thinker warned about one person holding too much power?', es: '¿Qué pensador advirtió sobre una sola persona con demasiado poder?', fa: 'کدام اندیشمند از قدرت زیاد در دست یک نفر هشدار داد؟' },
        choices: [{ en: 'Montesquieu', es: 'Montesquieu', fa: 'مونتسکیو' }, { en: 'Rousseau', es: 'Rousseau', fa: 'روسو' }, { en: 'Voltaire', es: 'Voltaire', fa: 'ولتر' }], answer: 0,
        why: { en: 'Montesquieu said there is no liberty if one person makes the laws and carries them out.', es: 'Montesquieu dijo que no hay libertad si una sola persona hace las leyes y las cumple.', fa: 'مونتسکیو گفت اگر یک نفر هم قانون بسازد و هم اجرا کند، آزادی نیست.' } },
      { q: { en: 'Which book in the table came out first?', es: '¿Qué libro de la tabla salió primero?', fa: 'کدام کتاب جدول اول چاپ شد؟' },
        choices: [{ en: 'Locke\'s, in 1690', es: 'El de Locke, en 1690', fa: 'کتاب لاک، در ۱۶۹۰' }, { en: 'Rousseau\'s, in 1762', es: 'El de Rousseau, en 1762', fa: 'کتاب روسو، در ۱۷۶۲' }, { en: 'Voltaire\'s, in 1763', es: 'El de Voltaire, en 1763', fa: 'کتاب ولتر، در ۱۷۶۳' }], answer: 0,
        why: { en: '1690 is the smallest year, so Locke wrote first. The others read his ideas.', es: '1690 es el año más antiguo, así que Locke escribió primero. Los otros leyeron sus ideas.', fa: '۱۶۹۰ کوچک‌ترین سال است، پس لاک اول نوشت. دیگران اندیشه‌های او را خواندند.' } },
      { q: { en: 'Rousseau wrote that people are "in chains." What did he mean?', es: 'Rousseau escribió que la gente está "encadenada". ¿Qué quiso decir?', fa: 'روسو نوشت مردم «در زنجیر» هستند. منظورش چه بود؟' },
        choices: [{ en: 'Unfair rulers and laws took their freedom', es: 'Gobernantes y leyes injustas les quitaron la libertad', fa: 'حاکمان و قانون‌های ناعادلانه آزادی‌شان را گرفتند' }, { en: 'Everyone in Paris wore real iron chains', es: 'Todos en París llevaban cadenas de hierro de verdad', fa: 'همه در پاریس زنجیر آهنی واقعی داشتند' }, { en: 'People wanted kings more than freedom', es: 'La gente quería reyes más que libertad', fa: 'مردم پادشاه را بیشتر از آزادی می‌خواستند' }], answer: 0,
        why: { en: 'People are born free, Rousseau said, but unfair governments hold them down.', es: 'Rousseau dijo que nacemos libres, pero los gobiernos injustos nos oprimen.', fa: 'روسو گفت انسان آزاد به دنیا می‌آید، اما حکومت‌های ناعادلانه او را در فشار نگه می‌دارند.' } },
      { q: { en: 'Voltaire\'s line is about which freedom?', es: '¿De qué libertad habla la frase de Voltaire?', fa: 'حرف ولتر دربارهٔ کدام آزادی است؟' },
        choices: [{ en: 'Freedom of religion', es: 'La libertad de religión', fa: 'آزادی دین' }, { en: 'Freedom to own land', es: 'La libertad de tener tierras', fa: 'آزادی داشتن زمین' }, { en: 'Freedom from taxes', es: 'La libertad de no pagar impuestos', fa: 'آزادی از مالیات' }], answer: 0,
        why: { en: 'Voltaire said no one should be punished for their religion. He also fought for free speech.', es: 'Voltaire dijo que nadie debe ser castigado por su religión. También luchó por la libertad de expresión.', fa: 'ولتر گفت هیچ کس نباید به خاطر دینش جزا ببیند. او برای آزادی بیان هم مبارزه کرد.' } }
    ],
    success: { en: 'The thinkers\' words are clear again! Soon their ideas will change the world.', es: '¡Las palabras de los pensadores se ven otra vez! Pronto sus ideas cambiarán el mundo.', fa: 'حرف‌های اندیشمندان دوباره روشن شد! به زودی اندیشه‌هایشان جهان را تغییر می‌دهد.' }
  },

  boss: {
    at: [3, 7],
    stat: 'loc',
    need: 3,
    name: { en: 'The Gloom Grump', es: 'El Gruñón Sombrío', fa: 'غرغروی تاریک' },
    appear: { en: 'The Gloom Grump is hiding in the shadows of the little garden!', es: '¡El Gruñón Sombrío se esconde en las sombras del jardincito!', fa: 'غرغروی تاریک در سایهٔ باغچهٔ کوچک پنهان است!' },
    taunt: { en: 'Why think? Just obey the king. Questions only cause trouble!', es: '¿Para qué pensar? Obedece al rey. ¡Las preguntas solo traen problemas!', fa: 'چرا فکر کنی؟ فقط از پادشاه اطاعت کن. سوال فقط دردسر می‌آورد!' },
    win: { en: 'Light fills the streets of Paris. Chronicle page 4.1 floats down into your hands!', es: 'La luz llena las calles de París. ¡La página 4.1 de la crónica cae en tus manos!', fa: 'روشنی کوچه‌های پاریس را پر می‌کند. صفحهٔ ۴.۱ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was the Enlightenment?', es: '¿Qué fue la Ilustración?', fa: 'عصر روشنگری چه بود؟' },
        choices: [
          { en: 'A time when thinkers used reason to question old ideas', es: 'Una época en que los pensadores usaron la razón para cuestionar ideas viejas', fa: 'زمانی که اندیشمندان با عقل اندیشه‌های کهنه را زیر سوال بردند' },
          { en: 'A long war between France and England over colonies', es: 'Una larga guerra entre Francia e Inglaterra por las colonias', fa: 'یک جنگ دراز میان فرانسه و انگلستان بر سر مستعمره‌ها' },
          { en: 'A new kind of oil lamp that lit the streets of Paris', es: 'Un nuevo tipo de lámpara de aceite para las calles de París', fa: 'یک نوع چراغ تیلی نو که کوچه‌های پاریس را روشن کرد' },
          { en: 'A law that let the king rule with no limits at all', es: 'Una ley que dejaba al rey gobernar sin ningún límite', fa: 'قانونی که به پادشاه اجازه داد بی هیچ حدی حکومت کند' }],
        answer: 0,
        why: { en: 'Enlightenment thinkers used reason to ask: what makes a government fair? What rights do people have?', es: 'Los pensadores de la Ilustración usaron la razón para preguntar: ¿qué hace justo a un gobierno? ¿Qué derechos tenemos?', fa: 'اندیشمندان روشنگری با عقل پرسیدند: چه چیز حکومت را عادلانه می‌سازد؟ مردم چه حقوقی دارند؟' } },
      { q: { en: 'Which rights did John Locke say every person is born with?', es: '¿Con qué derechos dijo John Locke que nace toda persona?', fa: 'جان لاک گفت هر انسان با کدام حقوق به دنیا می‌آید؟' },
        choices: [
          { en: 'Life, liberty and property', es: 'La vida, la libertad y la propiedad', fa: 'زندگی، آزادی و دارایی' },
          { en: 'Land, gold and a horse', es: 'Tierra, oro y un caballo', fa: 'زمین، طلا و یک اسپ' },
          { en: 'Food, school and a job', es: 'Comida, escuela y trabajo', fa: 'غذا، مکتب و کار' },
          { en: 'Only the rights the king gives', es: 'Solo los derechos que da el rey', fa: 'فقط حقوقی که پادشاه می‌دهد' }],
        answer: 0,
        why: { en: 'Locke called them natural rights. A government should protect them.', es: 'Locke los llamó derechos naturales. Un gobierno debe protegerlos.', fa: 'لاک آن‌ها را حقوق طبیعی نامید. حکومت باید از آن‌ها نگهداری کند.' } },
      { q: { en: 'What is the separation of powers?', es: '¿Qué es la separación de poderes?', fa: 'تفکیک قوا چیست؟' },
        choices: [
          { en: 'Government split into parts that check each other', es: 'Un gobierno dividido en partes que se vigilan entre sí', fa: 'حکومتی که به چند بخش تقسیم شده و هر بخش دیگری را کنترول می‌کند' },
          { en: 'One ruler who makes, runs and judges every law', es: 'Un gobernante que hace, cumple y juzga todas las leyes', fa: 'یک حاکم که هر قانون را می‌سازد، اجرا می‌کند و قضاوت می‌کند' },
          { en: 'A wall that keeps the rich and poor parts of a city apart', es: 'Un muro que separa las partes ricas y pobres de una ciudad', fa: 'دیواری که بخش‌های ثروتمند و فقیر شهر را جدا می‌کند' },
          { en: 'The church and the king sharing all the land', es: 'La iglesia y el rey repartiéndose toda la tierra', fa: 'کلیسا و پادشاه که همهٔ زمین را میان خود تقسیم کنند' }],
        answer: 0,
        why: { en: 'Montesquieu said one part makes laws, one carries them out, and one judges.', es: 'Montesquieu dijo que una parte hace las leyes, otra las cumple y otra juzga.', fa: 'مونتسکیو گفت یک بخش قانون می‌سازد، یک بخش اجرا می‌کند و یک بخش قضاوت می‌کند.' } },
      { q: { en: 'What did Voltaire fight for?', es: '¿Por qué luchó Voltaire?', fa: 'ولتر برای چه مبارزه کرد؟' },
        choices: [
          { en: 'Freedom of speech and freedom of religion', es: 'La libertad de expresión y la libertad de religión', fa: 'آزادی بیان و آزادی دین' },
          { en: 'More power for the kings and the church', es: 'Más poder para los reyes y la iglesia', fa: 'قدرت بیشتر برای پادشاهان و کلیسا' },
          { en: 'Higher taxes for poor farmers in France', es: 'Impuestos más altos para los campesinos pobres de Francia', fa: 'مالیات بیشتر برای دهقانان فقیر فرانسه' },
          { en: 'Closing all of the cafés and salons in Paris', es: 'Cerrar todos los cafés y salones de París', fa: 'بستن همهٔ قهوه‌خانه‌ها و محفل‌های پاریس' }],
        answer: 0,
        why: { en: 'Voltaire wrote against unfair trials and against punishing people for their beliefs.', es: 'Voltaire escribió contra los juicios injustos y contra castigar a la gente por sus creencias.', fa: 'ولتر علیه محکمه‌های ناعادلانه و جزا دادن مردم به خاطر باورهایشان نوشت.' } },
      { q: { en: 'Rousseau wrote about the social contract. What is it?', es: 'Rousseau escribió sobre el contrato social. ¿Qué es?', fa: 'روسو دربارهٔ قرارداد اجتماعی نوشت. آن چیست؟' },
        choices: [
          { en: 'People agree to a government that serves them', es: 'La gente acepta un gobierno que la sirve', fa: 'مردم حکومتی را قبول می‌کنند که به آن‌ها خدمت کند' },
          { en: 'A deal that makes the king the owner of all people', es: 'Un trato que hace al rey dueño de todas las personas', fa: 'معامله‌ای که پادشاه را مالک همهٔ مردم می‌سازد' },
          { en: 'A paper that sells farmland to rich nobles', es: 'Un papel que vende tierras de cultivo a nobles ricos', fa: 'سندی که زمین‌های زراعتی را به اشراف ثروتمند می‌فروشد' },
          { en: 'A promise to never change any old law', es: 'Una promesa de nunca cambiar ninguna ley vieja', fa: 'وعده‌ای که هیچ قانون کهنه هرگز تغییر نکند' }],
        answer: 0,
        why: { en: 'Rousseau said power comes from the people. A government must serve the people who agree to it.', es: 'Rousseau dijo que el poder viene del pueblo. Un gobierno debe servir a la gente que lo acepta.', fa: 'روسو گفت قدرت از مردم می‌آید. حکومت باید به مردمی خدمت کند که آن را قبول کرده‌اند.' } },
      { q: { en: 'Where did people in Paris meet to talk about new ideas?', es: '¿Dónde se reunía la gente de París para hablar de ideas nuevas?', fa: 'مردم پاریس برای گپ زدن دربارهٔ اندیشه‌های نو کجا جمع می‌شدند؟' },
        choices: [
          { en: 'In salons and cafés', es: 'En salones y cafés', fa: 'در محفل‌ها و قهوه‌خانه‌ها' },
          { en: 'In the king\'s prisons', es: 'En las cárceles del rey', fa: 'در زندان‌های پادشاه' },
          { en: 'On ships at sea', es: 'En barcos en el mar', fa: 'در کشتی‌ها روی بحر' },
          { en: 'Inside army forts', es: 'Dentro de fuertes del ejército', fa: 'داخل قلعه‌های عسکری' }],
        answer: 0,
        why: { en: 'Writers met in salons, often led by women, and in cafés. They argued about books and ideas.', es: 'Los escritores se reunían en salones, muchas veces dirigidos por mujeres, y en cafés. Discutían libros e ideas.', fa: 'نویسندگان در محفل‌ها، که اکثراً زنان اداره می‌کردند، و در قهوه‌خانه‌ها جمع می‌شدند و دربارهٔ کتاب بحث می‌کردند.' } },
      { q: { en: 'Which writer said girls deserve the same education as boys?', es: '¿Qué escritora dijo que las niñas merecen la misma educación que los niños?', fa: 'کدام نویسنده گفت دختران سزاوار همان آموزشی هستند که پسران دارند؟' },
        choices: [
          { en: 'Mary Wollstonecraft', es: 'Mary Wollstonecraft', fa: 'مری وولستون‌کرافت' },
          { en: 'King Louis XV', es: 'El rey Luis XV', fa: 'پادشاه لویی پانزدهم' },
          { en: 'Christopher Columbus', es: 'Cristóbal Colón', fa: 'کریستوفر کلمبوس' },
          { en: 'John Locke', es: 'John Locke', fa: 'جان لاک' }],
        answer: 0,
        why: { en: 'In 1792, Mary Wollstonecraft wrote that girls should learn like boys. Many people disagreed then.', es: 'En 1792, Mary Wollstonecraft escribió que las niñas deben aprender como los niños. Mucha gente no estaba de acuerdo.', fa: 'در سال ۱۷۹۲، مری وولستون‌کرافت نوشت دختران باید مثل پسران درس بخوانند. آن وقت بسیاری مخالف بودند.' } },
      { q: { en: 'How did Enlightenment ideas change the world?', es: '¿Cómo cambiaron el mundo las ideas de la Ilustración?', fa: 'اندیشه‌های روشنگری جهان را چطور تغییر دادند؟' },
        choices: [
          { en: 'They inspired revolutions in America and France', es: 'Inspiraron revoluciones en América y Francia', fa: 'الهام‌بخش انقلاب‌های امریکا و فرانسه شدند' },
          { en: 'They made kings stronger in every country in Europe', es: 'Hicieron más fuertes a los reyes en todos los países de Europa', fa: 'پادشاهان را در همهٔ کشورهای اروپا قوی‌تر ساختند' },
          { en: 'They ended all the wars in Europe for 100 years', es: 'Terminaron todas las guerras de Europa por 100 años', fa: 'همهٔ جنگ‌های اروپا را برای ۱۰۰ سال تمام کردند' },
          { en: 'They stopped people from reading books', es: 'Impidieron que la gente leyera libros', fa: 'مردم را از خواندن کتاب منع کردند' }],
        answer: 0,
        why: { en: 'Leaders in America, France and Latin America used these ideas about rights to fight for change.', es: 'Líderes de América, Francia y América Latina usaron estas ideas sobre los derechos para luchar por el cambio.', fa: 'رهبران امریکا، فرانسه و امریکای لاتین از این اندیشه‌های حقوق برای مبارزه به خاطر تغییر کار گرفتند.' } }
    ]
  },

  learned: [
    { en: 'The [[enlightenment|Enlightenment]] was a time when thinkers used [[reason|reason]] to question kings and old ideas.', es: 'La [[enlightenment|Ilustración]] fue una época en que los pensadores usaron la [[reason|razón]] para cuestionar a los reyes y las ideas viejas.', fa: '[[enlightenment|عصر روشنگری]] زمانی بود که اندیشمندان با [[reason|عقل]] پادشاهان و اندیشه‌های کهنه را زیر سوال بردند.' },
    { en: 'Locke wrote about [[natural rights|natural rights]]. Montesquieu wrote about the [[separation of powers|separation of powers]].', es: 'Locke escribió sobre los [[natural rights|derechos naturales]]. Montesquieu escribió sobre la [[separation of powers|separación de poderes]].', fa: 'لاک دربارهٔ [[natural rights|حقوق طبیعی]] نوشت. مونتسکیو دربارهٔ [[separation of powers|تفکیک قوا]] نوشت.' },
    { en: 'Voltaire fought for free speech and religion. Rousseau wrote about the [[social contract|social contract]].', es: 'Voltaire luchó por la libertad de expresión y de religión. Rousseau escribió sobre el [[social contract|contrato social]].', fa: 'ولتر برای آزادی بیان و دین مبارزه کرد. روسو دربارهٔ [[social contract|قرارداد اجتماعی]] نوشت.' }
  ],
  reflect: {
    q: { en: 'Which right matters most to you? Why should a government protect it?', es: '¿Qué derecho es el más importante para ti? ¿Por qué debe protegerlo un gobierno?', fa: 'کدام حق برای تو از همه مهم‌تر است؟ چرا حکومت باید از آن نگهداری کند؟' },
    starter: { en: 'The right that matters most to me is', es: 'El derecho más importante para mí es', fa: 'حقی که برای من از همه مهم‌تر است' }
  }
};
