/* CIVICWALKER · Episode 1.1 · Who Rules Here? (Introduction to Government)
   Ancient Athens, about 430 BCE. North half: the agora (market square), paved, with market stalls, a fountain,
   the long stoa (a columned hall) along the north side and two houses. South-west: the Pnyx, the hill where
   citizens met to vote. South-east: the Acropolis hill with its temple on top (the gate is on the west side).
   Between them the road runs south out of the agora to the city wall. Travelers from other lands tell how they
   are ruled; the charter stone asks the student to sort towns by WHO holds power. */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'GOVT',
  title: { en: 'Who Rules Here?', es: '¿Quién gobierna aquí?', fa: 'اینجا کی حکومت می‌کند؟' },
  place: { en: 'Athens, 430 BCE', es: 'Atenas, 430 a. C.', fa: 'آتن، ۴۳۰ پیش از میلاد' },
  intro: [
    { en: 'The Grump tore the page about who rules. Now people forget how governments differ.',
      es: 'El Gruñón rompió la página sobre quién gobierna. Ahora la gente olvida cómo son los gobiernos.',
      fa: 'غرغرو صفحهٔ «کی حکومت می‌کند» را پاره کرد. حالا مردم فرق حکومت‌ها را فراموش می‌کنند.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Athens on the world map (no timeline in this game) */
  scenes: {
    at: [23.73, 37.98],
    start: [
      { en: 'About 2,400 years ago, Athens was a strong city in Greece.',
        es: 'Hace unos 2,400 años, Atenas era una ciudad fuerte de Grecia.',
        fa: 'حدود ۲۴۰۰ سال پیش، آتن یک شهر قوی در یونان بود.' },
      { en: 'Its market square was the agora. People shopped, talked and argued there.',
        es: 'Su plaza del mercado era el ágora. Allí la gente compraba, hablaba y discutía.',
        fa: 'میدان بازار آن آگورا بود. مردم آنجا خرید می‌کردند، گپ می‌زدند و بحث می‌کردند.' },
      { en: 'In Athens, citizens voted on laws themselves. It was an early democracy.',
        es: 'En Atenas, los ciudadanos votaban las leyes ellos mismos. Fue una democracia temprana.',
        fa: 'در آتن، شهروندان خودشان به قانون‌ها رأی می‌دادند. این یک دموکراسی ابتدایی بود.' }
    ],
    page: { en: 'Democracy is a Greek word: demos means people, kratos means power.',
      es: 'Democracia es una palabra griega: demos es pueblo y kratos es poder.',
      fa: 'دموکراسی یک کلمهٔ یونانی است: «دموس» یعنی مردم و «کراتوس» یعنی قدرت.' },
    guess: {
      q: { en: 'Who do you think made the laws in Athens?', es: '¿Quién crees que hacía las leyes en Atenas?', fa: 'فکر می‌کنی در آتن کی قانون‌ها را می‌ساخت؟' },
      choices: [
        { t: { en: '🗳️ The citizens', es: '🗳️ Los ciudadanos', fa: '🗳️ شهروندان' }, ok: true },
        { t: { en: '👑 One king', es: '👑 Un rey', fa: '👑 یک پادشاه' } }
      ],
      why: { en: 'Citizen men met and voted on laws themselves. But many people could not vote.', es: 'Los hombres ciudadanos se reunían y votaban las leyes. Pero mucha gente no podía votar.', fa: 'مردان شهروند جمع می‌شدند و به قانون‌ها رأی می‌دادند. اما بسیاری از مردم حق رأی نداشتند.' }
    },
    next: {
      q: { en: 'Next: Hobbes, Locke and Montesquieu. Did they think government power comes from the people?', es: 'Ahora: Hobbes, Locke y Montesquieu. ¿Pensaban que el poder del gobierno viene del pueblo?', fa: 'بعدی: هابز، لاک و مونتسکیو. آیا فکر می‌کردند قدرت حکومت از مردم می‌آید؟' },
      choices: [
        { t: { en: 'Yes, from the people', es: 'Sí, del pueblo', fa: 'بله، از مردم' }, ok: true },
        { t: { en: 'No, only from kings', es: 'No, solo de los reyes', fa: 'نه، فقط از پادشاه' } }
      ],
      why: { en: 'Hobbes and Locke said people agree to give a government power. Montesquieu said split that power.', es: 'Hobbes y Locke dijeron que la gente acepta darle poder a un gobierno. Montesquieu dijo que hay que dividir ese poder.', fa: 'هابز و لاک گفتند مردم قبول می‌کنند به حکومت قدرت بدهند. مونتسکیو گفت آن قدرت باید تقسیم شود.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandpa Philon', es: 'Abuelo Filón', fa: 'پدرکلان فیلون' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#e8dcc0', pants: '#5a4630', robe: true, style: 'short' },
      lines: [
        { en: 'My grandfather told me about the tyrants of old Athens.', es: 'Mi abuelo me contó de los tiranos de la vieja Atenas.', fa: 'پدرکلانم از ظالمان آتن قدیم برایم قصه کرد.' },
        { en: 'A tyrant was one man who took power by force.', es: 'Un tirano era un hombre que tomaba el poder por la fuerza.', fa: 'ظالم یک مرد بود که قدرت را به زور گرفت.' },
        { en: 'Nobody could vote him out. Now our citizens vote for themselves.', es: 'Nadie podía sacarlo con el voto. Ahora nuestros ciudadanos votan por sí mismos.', fa: 'هیچ کس نمی‌توانست با رأی او را بردارد. حالا شهروندان ما خودشان رأی می‌دهند.' }
      ] },
    { at: [27, 2], name: { en: 'Melissa', es: 'Melisa', fa: 'ملیسا' },
      look: { skin: 1, hair: '#3a2416', shirt: '#8a2a3a', pants: '#2a2a3a', robe: true, style: 'bun' },
      lines: [
        { en: 'I come from Corinth. I live and work in Athens now.', es: 'Vengo de Corinto. Ahora vivo y trabajo en Atenas.', fa: 'من از کورینت آمده‌ام. حالا در آتن زندگی و کار می‌کنم.' },
        { en: 'I am a foreigner here, so I cannot vote in the Assembly.', es: 'Aquí soy extranjera, así que no puedo votar en la Asamblea.', fa: 'من اینجا خارجی هستم، پس در مجلس رأی داده نمی‌توانم.' },
        { en: 'In Corinth, a few rich families make the rules. That is an [[oligarchy|oligarchy]].', es: 'En Corinto, unas pocas familias ricas hacen las reglas. Eso es una [[oligarchy|oligarquía]].', fa: 'در کورینت، چند خانوادهٔ پولدار قانون می‌سازند. این [[oligarchy|الیگارشی]] است.' }
      ] },
    { at: [12, 19], name: { en: 'Sosias', es: 'Sosias', fa: 'سوسیاس' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f5f9a', pants: '#3a2a1a', hat: '#8a6a3a', style: 'short' },
      lines: [
        { en: 'I am a sailor. Last spring I sailed to Sparta.', es: 'Soy marinero. La primavera pasada navegué a Esparta.', fa: 'من ملاح هستم. بهار گذشته با کشتی به اسپارت رفتم.' },
        { en: 'Sparta has two kings, from two old royal families.', es: 'Esparta tiene dos reyes, de dos antiguas familias reales.', fa: 'اسپارت دو پادشاه دارد، از دو خانوادهٔ شاهی قدیمی.' },
        { en: 'But a small council of old men makes many big choices.', es: 'Pero un pequeño consejo de ancianos toma muchas decisiones importantes.', fa: 'اما یک شورای کوچک از مردان پیر بسیاری از تصمیم‌های بزرگ را می‌گیرد.' }
      ] },
    { at: [18, 19], name: { en: 'Nefer', es: 'Nefer', fa: 'نفر' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0c060', pants: '#2a5a8a', style: 'long' },
      lines: [
        { en: 'I am a traveler from Egypt, across the sea to the south.', es: 'Soy viajera de Egipto, al otro lado del mar, hacia el sur.', fa: 'من مسافری از مصر هستم، آن طرف بحر، در جنوب.' },
        { en: 'Long ago, people saw our pharaoh as a god on earth.', es: 'Hace mucho, la gente veía a nuestro faraón como un dios en la tierra.', fa: 'خیلی پیش، مردم فرعون ما را مثل یک خدا روی زمین می‌دیدند.' },
        { en: 'Rule in the name of a god is called a [[theocracy|theocracy]].', es: 'Gobernar en nombre de un dios se llama [[theocracy|teocracia]].', fa: 'حکومت به نام یک خدا [[theocracy|حکومت دینی]] نام دارد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the agora (l) with market stalls (m), the fountain (O), the long stoa (J) on the north side,
     houses (R/Q over h) in both corners, olive trees (T).
     South-west: the Pnyx (K hills around a flat top, the speakers' rock r), open to the east.
     South-east: the Acropolis (K hills), its temple (D) on top, the gate at (21,16) on the west side.
     The road (:) runs south from the agora between the hills to the city wall (W). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR...JJJJJJJJJJJJJJJJ..QQQ..T',
    'T.hdh...JJJJJJJJJJJJJJJJ..hdh..T',
    'T....lllllllllllllllllllll...T.T',
    'T....lllllllllllllllllllll.....T',
    'T..O.llmmlllllllllllllmmll..T..T',
    'T....lllllllllllllllllllll.....T',
    'T.x..lllllllllllllllllllll.....T',
    'T....llmmlllllllllllllmmll.....T',
    'T.TT.lllllllllllllllllllll.TT..T',
    'T.....T........:.......T.......T',
    'T........x...T.:....T..........T',
    'T.KKKKKKKKK....:.....KKKKKKKKKKT',
    'T.K.......K....:.....K...DDDD.KT',
    'T.K.r.....K....:.....K...DDDD.KT',
    'T.K.......::::::.....K........KT',
    'T.K.......K....:::::::........KT',
    'T.K.......K....:.....K........KT',
    'T.KKKKKKKKKRRR.:.RRR.K........KT',
    'T..........hdh.:.hdh.KKKKKKKKKKT',
    'TT....T..T.....:.............T.T',
    'TWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWT'
  ],
  start: [15, 4],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [6, 3], at: [6, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps south. Look next to the market stalls.', es: 'Desde esta nota, camina 5 pasos al sur. Busca junto a los puestos del mercado.', fa: 'از این یادداشت، ۵ قدم به جنوب برو. کنار دکان‌های بازار را ببین.' },
      text: { en: 'Athens made silver coins with an owl, the bird of the goddess Athena. Here is one!', es: 'Atenas hacía monedas de plata con un búho, el ave de la diosa Atenea. ¡Aquí hay una!', fa: 'آتن سکه‌های نقره‌ای با نقش جغد می‌ساخت، پرندهٔ الههٔ آتنا. اینجا یکی است!' } },
    { clueAt: [19, 20], at: [23, 20], decor: 'vase',
      clue: { en: 'From this note, walk 4 steps east, along the city wall.', es: 'Desde esta nota, camina 4 pasos al este, junto a la muralla de la ciudad.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار دیوار شهر.' },
      text: { en: 'Greek potters painted vases with black and red people on them. Here is a small one.', es: 'Los alfareros griegos pintaban jarrones con personas negras y rojas. Aquí hay uno pequeño.', fa: 'کلال‌های یونانی روی گلدان‌ها آدم‌های سیاه و سرخ رنگ می‌کردند. اینجا یک گلدان کوچک است.' } }
  ],

  words: {
    government: { en: 'the people and rules that run a city or a country', es: 'las personas y reglas que dirigen una ciudad o un país', fa: 'مردم و قانون‌هایی که یک شهر یا کشور را اداره می‌کنند' },
    citizen: { en: 'a full member of a city or country, with rights', es: 'un miembro pleno de una ciudad o un país, con derechos', fa: 'عضو کامل یک شهر یا کشور، با حقوق' },
    assembly: { en: 'a big meeting where citizens talk and vote on laws', es: 'una gran reunión donde los ciudadanos hablan y votan las leyes', fa: 'یک جلسهٔ بزرگ که شهروندان در آن گپ می‌زنند و به قانون‌ها رأی می‌دهند' },
    democracy: { en: 'rule by the people, who vote', es: 'gobierno del pueblo, que vota', fa: 'حکومت مردم، که رأی می‌دهند' },
    'direct democracy': { en: 'the people vote on each law themselves', es: 'el pueblo vota cada ley por sí mismo', fa: 'مردم خودشان به هر قانون رأی می‌دهند' },
    'representative democracy': { en: 'the people elect leaders who make laws for them', es: 'el pueblo elige líderes que hacen las leyes por ellos', fa: 'مردم رهبرانی را انتخاب می‌کنند که برایشان قانون بسازند' },
    republic: { en: 'a country with no king, where people elect their leaders', es: 'un país sin rey, donde la gente elige a sus líderes', fa: 'کشوری بدون پادشاه، که مردم رهبران خود را انتخاب می‌کنند' },
    monarchy: { en: 'rule by a king or queen; power passes down in one family', es: 'gobierno de un rey o una reina; el poder pasa dentro de una familia', fa: 'حکومت پادشاه یا ملکه؛ قدرت در یک خانواده دست به دست می‌شود' },
    autocracy: { en: 'rule by one person with total power', es: 'gobierno de una sola persona con todo el poder', fa: 'حکومت یک نفر با همهٔ قدرت' },
    oligarchy: { en: 'rule by a small group of people', es: 'gobierno de un grupo pequeño de personas', fa: 'حکومت یک گروه کوچک از مردم' },
    theocracy: { en: 'rule by religious leaders, in the name of a god', es: 'gobierno de líderes religiosos, en nombre de un dios', fa: 'حکومت رهبران دینی، به نام یک خدا' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Kleo', es: 'Cleo', fa: 'کلئو' },
      role: { en: 'Weaver', es: 'Tejedora', fa: 'بافنده' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#2f8f8f', pants: '#7a3a2a', robe: true, style: 'long' },
      lines: [
        { en: 'Welcome to the agora, the market square of Athens!', es: '¡Bienvenido al ágora, la plaza del mercado de Atenas!', fa: 'به آگورا، میدان بازار آتن، خوش آمدی!' },
        { en: 'Here, [[citizen|citizens]] meet in the [[assembly|Assembly]] and vote on laws themselves.', es: 'Aquí, los [[citizen|ciudadanos]] se reúnen en la [[assembly|Asamblea]] y votan las leyes ellos mismos.', fa: 'اینجا [[citizen|شهروندان]] در [[assembly|مجلس]] جمع می‌شوند و خودشان به قانون‌ها رأی می‌دهند.' },
        { en: 'But only citizen men can vote. Women, enslaved people and foreigners cannot.', es: 'Pero solo los hombres ciudadanos pueden votar. Las mujeres, los esclavizados y los extranjeros no.', fa: 'اما فقط مردان شهروند رأی داده می‌توانند. زنان، بردگان و خارجی‌ها نمی‌توانند.' },
        { en: 'I am a woman, so I have no vote. Is that fair? I wonder.', es: 'Soy mujer, así que no tengo voto. ¿Es justo? Me lo pregunto.', fa: 'من زن هستم، پس حق رأی ندارم. آیا این عادلانه است؟ فکر می‌کنم.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'In Athens in 430 BCE, who could vote in the Assembly?', es: 'En Atenas en el año 430 a. C., ¿quién podía votar en la Asamblea?', fa: 'در آتن در سال ۴۳۰ پیش از میلاد، کی در مجلس رأی داده می‌توانست؟' },
        choices: [
          { ok: true, t: { en: 'Only citizen men', es: 'Solo los hombres ciudadanos', fa: 'فقط مردان شهروند' },
            why: { en: 'Yes. Only citizen men could vote. Women, enslaved people and foreigners were left out.', es: 'Sí. Solo los hombres ciudadanos votaban. Las mujeres, los esclavizados y los extranjeros quedaban fuera.', fa: 'بله. فقط مردان شهروند رأی می‌دادند. زنان، بردگان و خارجی‌ها کنار گذاشته شده بودند.' } },
          { t: { en: 'Every adult in the city', es: 'Todos los adultos de la ciudad', fa: 'همهٔ بزرگسالان شهر' },
            why: { en: 'Not in Athens. Women, enslaved people and foreigners could not vote.', es: 'En Atenas no. Las mujeres, los esclavizados y los extranjeros no podían votar.', fa: 'در آتن نه. زنان، بردگان و خارجی‌ها رأی داده نمی‌توانستند.' } },
          { t: { en: 'Only the priests and the rich', es: 'Solo los sacerdotes y los ricos', fa: 'فقط روحانیان و پولدارها' },
            why: { en: 'No. Poor citizen men could vote too. Priests and the rich did not rule alone.', es: 'No. Los hombres ciudadanos pobres también votaban. Los sacerdotes y los ricos no gobernaban solos.', fa: 'نه. مردان شهروند فقیر هم رأی می‌دادند. روحانیان و پولدارها تنها حکومت نمی‌کردند.' } }
        ]
      }
    },
    {
      x: 24, y: 6,
      name: { en: 'Arta', es: 'Arta', fa: 'آرتا' },
      role: { en: 'Trader from Persia', es: 'Comerciante de Persia', fa: 'سوداگر فارسی' },
      look: { skin: 3, hair: '#120c08', shirt: '#6a4a8a', pants: '#3a2a20', hat: '#e0a020', style: 'short' },
      lines: [
        { en: 'I sell fine cloth from Persia, a huge empire to the east.', es: 'Vendo tela fina de Persia, un imperio enorme hacia el este.', fa: 'من تکهٔ اعلی از فارس می‌فروشم، یک امپراتوری بزرگ در شرق.' },
        { en: 'In Persia, one great king rules over many lands and peoples.', es: 'En Persia, un gran rey gobierna muchas tierras y pueblos.', fa: 'در فارس، یک پادشاه بزرگ بر سرزمین‌ها و مردمان زیادی حکومت می‌کند.' },
        { en: 'When he dies, his son becomes king. Power stays in one family.', es: 'Cuando él muere, su hijo se vuelve rey. El poder se queda en una familia.', fa: 'وقتی او بمیرد، پسرش پادشاه می‌شود. قدرت در یک خانواده می‌ماند.' },
        { en: 'That is a [[monarchy|monarchy]]. Nobody votes for the king.', es: 'Eso es una [[monarchy|monarquía]]. Nadie vota por el rey.', fa: 'این [[monarchy|پادشاهی]] است. هیچ کس به پادشاه رأی نمی‌دهد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'In a monarchy, how does a person usually become the ruler?', es: 'En una monarquía, ¿cómo llega alguien a ser el gobernante, casi siempre?', fa: 'در پادشاهی، معمولاً یک نفر چطور حاکم می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Born into the royal family', es: 'Nace en la familia real', fa: 'در خانوادهٔ شاهی به دنیا می‌آید' },
            why: { en: 'Right! In a monarchy, power passes down in one royal family, often from parent to child.', es: '¡Correcto! En una monarquía, el poder pasa dentro de una familia real, muchas veces de padres a hijos.', fa: 'درست! در پادشاهی، قدرت در یک خانوادهٔ شاهی دست به دست می‌شود، اکثراً از پدر به فرزند.' } },
          { t: { en: 'Chosen by a vote of the people', es: 'Lo elige el voto del pueblo', fa: 'با رأی مردم انتخاب می‌شود' },
            why: { en: 'That is how a democracy picks leaders. In a monarchy, the ruler is born to the job.', es: 'Así elige líderes una democracia. En una monarquía, el gobernante nace para el puesto.', fa: 'دموکراسی این‌طور رهبر انتخاب می‌کند. در پادشاهی، حاکم برای این کار به دنیا می‌آید.' } },
          { t: { en: 'Picked by a small group of priests', es: 'Lo escoge un pequeño grupo de sacerdotes', fa: 'یک گروه کوچک روحانیان او را می‌گزینند' },
            why: { en: 'No. Rule by religious leaders is a theocracy. A monarch gets power from the royal family.', es: 'No. El gobierno de líderes religiosos es una teocracia. Un monarca recibe el poder de su familia real.', fa: 'نه. حکومت رهبران دینی حکومت دینی است. پادشاه قدرت را از خانوادهٔ شاهی می‌گیرد.' } }
        ]
      }
    },
    {
      x: 12, y: 13,
      name: { en: 'Nikos', es: 'Nikos', fa: 'نیکوس' },
      role: { en: 'Student', es: 'Estudiante', fa: 'شاگرد' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#d9542b', pants: '#2a4a3a', style: 'short' },
      lines: [
        { en: 'My teacher asked me a big question today.', es: 'Mi maestro me hizo una gran pregunta hoy.', fa: 'امروز معلمم یک سوال بزرگ از من پرسید.' },
        { en: 'Why do people make a [[government|government]] at all?', es: '¿Por qué la gente forma un [[government|gobierno]]?', fa: 'چرا مردم اصلاً یک [[government|حکومت]] می‌سازند؟' },
        { en: 'Without rules, who stops fights or keeps the roads safe?', es: 'Sin reglas, ¿quién detiene las peleas o cuida los caminos?', fa: 'بدون قانون، کی جنگ‌ها را ختم کند یا سرک‌ها را امن نگه دارد؟' },
        { en: 'A government keeps order and safety, settles fights, and builds things for all.', es: 'Un gobierno mantiene el orden y la seguridad, resuelve peleas y construye cosas para todos.', fa: 'حکومت نظم و امنیت را نگه می‌دارد، جنگ‌ها را حل می‌کند و برای همه چیز می‌سازد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Which is a reason people form a government?', es: '¿Cuál es una razón por la que la gente forma un gobierno?', fa: 'کدام یکی دلیلی است که مردم حکومت می‌سازند؟' },
        choices: [
          { ok: true, t: { en: 'To keep order and safety', es: 'Para mantener el orden y la seguridad', fa: 'برای نگه داشتن نظم و امنیت' },
            why: { en: 'Yes! Governments keep order, protect people, settle fights and give services like roads.', es: '¡Sí! Los gobiernos mantienen el orden, protegen a la gente, resuelven peleas y dan servicios como caminos.', fa: 'بله! حکومت‌ها نظم را نگه می‌دارند، از مردم محافظت می‌کنند، جنگ‌ها را حل می‌کنند و خدمات مثل سرک می‌دهند.' } },
          { t: { en: 'To make every person rich', es: 'Para hacer rica a cada persona', fa: 'برای پولدار ساختن هر نفر' },
            why: { en: 'No government can make everyone rich. Its main jobs are order, safety and services.', es: 'Ningún gobierno puede hacer ricos a todos. Sus tareas principales son el orden, la seguridad y los servicios.', fa: 'هیچ حکومتی همه را پولدار ساخته نمی‌تواند. کارهای اصلی آن نظم، امنیت و خدمات است.' } },
          { t: { en: 'To stop all trade and travel', es: 'Para detener todo el comercio y los viajes', fa: 'برای بند کردن همهٔ تجارت و سفر' },
            why: { en: 'No. A government often keeps roads and markets safe, so trade and travel can grow.', es: 'No. Un gobierno muchas veces cuida los caminos y mercados, para que crezcan el comercio y los viajes.', fa: 'نه. حکومت اکثراً سرک‌ها و بازارها را امن نگه می‌دارد تا تجارت و سفر زیاد شود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 7, text: { en: 'THE AGORA · ATHENS · 430 BCE · The market square, where people shop, talk and argue.', es: 'EL ÁGORA · ATENAS · 430 a. C. · La plaza del mercado, donde la gente compra, habla y discute.', fa: 'آگورا · آتن · ۴۳۰ پیش از میلاد · میدان بازار، جایی که مردم خرید می‌کنند، گپ می‌زنند و بحث می‌کنند.' } },
    { x: 9, y: 11, text: { en: 'THE PNYX · Citizens of Athens meet on this hill to vote on laws.', es: 'LA PNYX · Los ciudadanos de Atenas se reúnen en esta colina para votar las leyes.', fa: 'پنیکس · شهروندان آتن روی این تپه جمع می‌شوند تا به قانون‌ها رأی بدهند.' } }
  ],

  /* the quest: Lykos the potter (gold !) by the east houses -> Ione at the fountain, west side of the agora
     -> find the basket of voting shards on the Pnyx, the hill where citizens vote -> back to Lykos */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Voting Shards', es: 'Los pedazos de voto perdidos', fa: 'تکه‌های گمشدهٔ رأی' },
    giver: {
      x: 29, y: 7,
      name: { en: 'Lykos', es: 'Licos', fa: 'لیکوس' },
      role: { en: 'Potter', es: 'Alfarero', fa: 'کلال' },
      look: { skin: 0, hair: '#5a3a1a', shirt: '#c07a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I sell broken pot pieces, called shards. Citizens scratch a name to send someone away.', es: 'Vendo pedazos de ollas rotas. Los ciudadanos escriben un nombre para expulsar a alguien.', fa: 'من تکه‌های کوزهٔ شکسته می‌فروشم. شهروندان رویش یک نام می‌نویسند تا کسی را از شهر بیرون کنند.' },
        { en: 'My basket of shards is gone, and the vote is today!', es: '¡Mi canasta de pedazos desapareció, y la votación es hoy!', fa: 'سبد تکه‌هایم گم شده، و رأی‌گیری امروز است!' },
        { en: 'Ask Ione at the fountain. She sees everything.', es: 'Pregúntale a Ione en la fuente. Ella lo ve todo.', fa: 'از ایونه کنار چشمه بپرس. او همه چیز را می‌بیند.' }
      ],
      wait: { en: 'Ione fills her water jar at the fountain, on the west side of the agora.', es: 'Ione llena su cántaro en la fuente, en el lado oeste del ágora.', fa: 'ایونه کوزهٔ آبش را کنار چشمه، در طرف غرب آگورا، پر می‌کند.' },
      thanks: { en: 'My shards! Now the citizens can vote. Thank you, friend!', es: '¡Mis pedazos! Ahora los ciudadanos pueden votar. ¡Gracias, amigo!', fa: 'تکه‌هایم! حالا شهروندان رأی داده می‌توانند. تشکر، دوست من!' }
    },
    contact: {
      x: 4, y: 6,
      name: { en: 'Ione', es: 'Ione', fa: 'ایونه' },
      role: { en: 'Water carrier', es: 'Aguadora', fa: 'آب‌کش' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e8e0d0', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'A boy took the basket to help. He went where the citizens vote.', es: 'Un niño se llevó la canasta para ayudar. Fue a donde votan los ciudadanos.', fa: 'یک پسر برای کمک سبد را برد. او به جایی رفت که شهروندان رأی می‌دهند.' },
        { en: 'Citizens vote on the Pnyx hill. Go south, then west into the hill.', es: 'Los ciudadanos votan en la colina Pnyx. Ve al sur y luego al oeste, a la colina.', fa: 'شهروندان روی تپهٔ پنیکس رأی می‌دهند. به جنوب برو، بعد به غرب داخل تپه.' }
      ]
    },
    action: {
      type: 'find',
      at: [7, 16],
      hint: { en: 'Look on the Pnyx, the hill where citizens vote', es: 'Busca en la Pnyx, la colina donde votan los ciudadanos', fa: 'روی پنیکس، تپه‌ای که شهروندان رأی می‌دهند، ببین' },
      found: { en: 'The basket of shards! The boy left it by the speakers\' rock on the Pnyx.', es: '¡La canasta de pedazos! El niño la dejó junto a la roca de los oradores en la Pnyx.', fa: 'سبد تکه‌ها! پسر آن را کنار سنگ سخنرانان روی پنیکس گذاشته بود.' },
      item: { icon: '🏺', name: { en: 'A basket of voting shards', es: 'Una canasta de pedazos para votar', fa: 'یک سبد تکه‌های رأی' } }
    }
  },

  scraps: [[1, 1], [30, 4], [29, 18]],
  smudges: [[20, 7], [5, 19]],

  challenge: {
    at: [17, 13],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each group: the people by the Pnyx, religious leaders by the temple, the others along the road
    zones: [{ bin: 'one', x: 17, y: 11, w: 3, h: 2 }, { bin: 'royal', x: 18, y: 14, w: 3, h: 2 }, { bin: 'few', x: 16, y: 17, w: 5, h: 1 },
      { bin: 'god', x: 22, y: 13, w: 3, h: 2 }, { bin: 'people', x: 12, y: 16, w: 3, h: 2 }],
    stat: 'reg',
    title: { en: 'Who rules here?', es: '¿Quién gobierna aquí?', fa: 'اینجا کی حکومت می‌کند؟' },
    intro: { en: 'Travelers tell how their towns are ruled. Carry each card to the group that holds power.',
      es: 'Los viajeros cuentan cómo se gobiernan sus pueblos. Lleva cada tarjeta al grupo que tiene el poder.',
      fa: 'مسافران می‌گویند شهرهایشان چطور اداره می‌شود. هر کارت را پیش گروهی ببر که قدرت دارد.' },
    bins: [
      { id: 'one', icon: '🗡️', label: { en: 'One ruler', es: 'Un solo gobernante', fa: 'یک حاکم' }, sub: { en: 'one person has all the power', es: 'una persona tiene todo el poder', fa: 'یک نفر همهٔ قدرت را دارد' } },
      { id: 'royal', icon: '👑', label: { en: 'A royal family', es: 'Una familia real', fa: 'یک خانوادهٔ شاهی' }, sub: { en: 'a king or queen; power passes down', es: 'un rey o una reina; el poder se hereda', fa: 'پادشاه یا ملکه؛ قدرت به ارث می‌رسد' } },
      { id: 'few', icon: '💰', label: { en: 'A few', es: 'Unos pocos', fa: 'چند نفر' }, sub: { en: 'a small group rules', es: 'un grupo pequeño gobierna', fa: 'یک گروه کوچک حکومت می‌کند' } },
      { id: 'god', icon: '🙏', label: { en: 'Religious leaders', es: 'Líderes religiosos', fa: 'رهبران دینی' }, sub: { en: 'they rule in the name of a god', es: 'gobiernan en nombre de un dios', fa: 'به نام یک خدا حکومت می‌کنند' } },
      { id: 'people', icon: '🗳️', label: { en: 'The people', es: 'El pueblo', fa: 'مردم' }, sub: { en: 'citizens vote', es: 'los ciudadanos votan', fa: 'شهروندان رأی می‌دهند' } }
    ],
    items: [
      { bin: 'one', t: { en: 'Ironhill: a general took power by force. Nobody can vote him out.', es: 'Cerro de Hierro: un general tomó el poder por la fuerza. Nadie puede sacarlo con el voto.', fa: 'تپهٔ آهن: یک جنرال قدرت را به زور گرفت. هیچ کس با رأی او را برداشته نمی‌تواند.' },
        why: { en: 'In Ironhill, one man holds all the power. That is an [[autocracy|autocracy]].', es: 'En Cerro de Hierro, un hombre tiene todo el poder. Eso es una [[autocracy|autocracia]].', fa: 'در تپهٔ آهن، یک مرد همهٔ قدرت را دارد. این [[autocracy|حکومت مطلقهٔ یک نفر]] است.' } },
      { bin: 'royal', t: { en: 'Persia: when the king dies, his son will be the next king.', es: 'Persia: cuando el rey muere, su hijo será el próximo rey.', fa: 'فارس: وقتی پادشاه بمیرد، پسرش پادشاه بعدی می‌شود.' },
        why: { en: 'In Persia, power passes down in one royal family. That is a [[monarchy|monarchy]].', es: 'En Persia, el poder pasa dentro de una familia real. Eso es una [[monarchy|monarquía]].', fa: 'در فارس، قدرت در یک خانوادهٔ شاهی دست به دست می‌شود. این [[monarchy|پادشاهی]] است.' } },
      { bin: 'few', t: { en: 'Corinth: a few rich families make all the rules.', es: 'Corinto: unas pocas familias ricas hacen todas las reglas.', fa: 'کورینت: چند خانوادهٔ پولدار همهٔ قانون‌ها را می‌سازند.' },
        why: { en: 'In Corinth, a small group holds the power. That is an [[oligarchy|oligarchy]].', es: 'En Corinto, un grupo pequeño tiene el poder. Eso es una [[oligarchy|oligarquía]].', fa: 'در کورینت، یک گروه کوچک قدرت دارد. این [[oligarchy|الیگارشی]] است.' } },
      { bin: 'god', t: { en: 'Templeton: the priests make the laws in the name of their god.', es: 'Villatemplo: los sacerdotes hacen las leyes en nombre de su dios.', fa: 'شهر معبد: روحانیان به نام خدای خود قانون می‌سازند.' },
        why: { en: 'In Templeton, religious leaders rule for their god. That is a [[theocracy|theocracy]].', es: 'En Villatemplo, los líderes religiosos gobiernan por su dios. Eso es una [[theocracy|teocracia]].', fa: 'در شهر معبد، رهبران دینی به نام خدایشان حکومت می‌کنند. این [[theocracy|حکومت دینی]] است.' } },
      { bin: 'people', t: { en: 'Athens: citizens meet on a hill and vote on each law.', es: 'Atenas: los ciudadanos se reúnen en una colina y votan cada ley.', fa: 'آتن: شهروندان روی یک تپه جمع می‌شوند و به هر قانون رأی می‌دهند.' },
        why: { en: 'In Athens, the citizens vote on laws themselves. That is a [[direct democracy|direct democracy]].', es: 'En Atenas, los ciudadanos votan las leyes ellos mismos. Eso es una [[direct democracy|democracia directa]].', fa: 'در آتن، شهروندان خودشان به قانون‌ها رأی می‌دهند. این [[direct democracy|دموکراسی مستقیم]] است.' } },
      { bin: 'people', t: { en: 'Riverton: people elect leaders who make the laws for them.', es: 'Villarrío: la gente elige líderes que hacen las leyes por ellos.', fa: 'شهر دریا: مردم رهبرانی را انتخاب می‌کنند که برایشان قانون بسازند.' },
        why: { en: 'In Riverton, the people choose their lawmakers. That is a [[representative democracy|representative democracy]], like the US.', es: 'En Villarrío, el pueblo elige a quienes hacen las leyes. Eso es una [[representative democracy|democracia representativa]], como EE. UU.', fa: 'در شهر دریا، مردم قانون‌سازان خود را انتخاب می‌کنند. این [[representative democracy|دموکراسی نمایندگی]] است، مثل امریکا.' } }
    ],
    success: { en: 'Every town is in the right group! Now you can tell who holds power.', es: '¡Cada pueblo está en el grupo correcto! Ahora sabes quién tiene el poder.', fa: 'هر شهر در گروه درست است! حالا می‌دانی قدرت دست کیست.' }
  },

  boss: {
    at: [27, 16],
    stat: 'pla',
    need: 3,
    name: { en: 'The Bossy Grump', es: 'El Gruñón Mandón', fa: 'غرغروی زورگو' },
    appear: { en: 'The Bossy Grump is hiding in the fog on top of the Acropolis!', es: '¡El Gruñón Mandón se esconde en la niebla sobre la Acrópolis!', fa: 'غرغروی زورگو در مه بالای اکروپولیس پنهان است!' },
    taunt: { en: 'Votes? Rules? Bah! I want to be the boss of everyone, and nobody votes!', es: '¿Votos? ¿Reglas? ¡Bah! ¡Quiero ser el jefe de todos, y nadie vota!', fa: 'رأی؟ قانون؟ بَه! می‌خواهم رئیس همه باشم، و هیچ کس رأی ندهد!' },
    win: { en: 'The fog lifts off the hill. Charter page 1.1 floats down into your hands!', es: 'La niebla se va de la colina. ¡La página 1.1 de la carta cae en tus manos!', fa: 'مه از روی تپه کنار می‌رود. صفحهٔ ۱.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'In an autocracy, who holds the power?', es: 'En una autocracia, ¿quién tiene el poder?', fa: 'در حکومت مطلقهٔ یک نفر، قدرت دست کیست؟' },
        choices: [
          { en: 'One ruler, with all power', es: 'Un gobernante, con todo el poder', fa: 'یک حاکم، با همهٔ قدرت' },
          { en: 'All the citizens together', es: 'Todos los ciudadanos juntos', fa: 'همهٔ شهروندان با هم' },
          { en: 'A council of priests', es: 'Un consejo de sacerdotes', fa: 'یک شورای روحانیان' },
          { en: 'Two kings and the elders', es: 'Dos reyes y los ancianos', fa: 'دو پادشاه و ریش‌سفیدان' }],
        answer: 0,
        why: { en: 'In an autocracy, one person holds all the power. The people cannot vote the ruler out.', es: 'En una autocracia, una persona tiene todo el poder. El pueblo no puede sacar al gobernante con el voto.', fa: 'در حکومت مطلقهٔ یک نفر، یک نفر همهٔ قدرت را دارد. مردم نمی‌توانند با رأی حاکم را بردارند.' } },
      { q: { en: 'What is a monarchy?', es: '¿Qué es una monarquía?', fa: 'پادشاهی چیست؟' },
        choices: [
          { en: 'A king or queen from one family rules', es: 'Gobierna un rey o una reina de una familia', fa: 'پادشاه یا ملکه از یک خانواده حکومت می‌کند' },
          { en: 'Citizens vote on every law together', es: 'Los ciudadanos votan juntos cada ley', fa: 'شهروندان با هم به هر قانون رأی می‌دهند' },
          { en: 'A few rich families make all the rules', es: 'Unas pocas familias ricas hacen todas las reglas', fa: 'چند خانوادهٔ پولدار همهٔ قانون‌ها را می‌سازند' },
          { en: 'Priests rule in the name of a god', es: 'Los sacerdotes gobiernan en nombre de un dios', fa: 'روحانیان به نام یک خدا حکومت می‌کنند' }],
        answer: 0,
        why: { en: 'In a monarchy, a king or queen rules, and power passes down in one royal family.', es: 'En una monarquía gobierna un rey o una reina, y el poder pasa dentro de una familia real.', fa: 'در پادشاهی، پادشاه یا ملکه حکومت می‌کند و قدرت در یک خانوادهٔ شاهی دست به دست می‌شود.' } },
      { q: { en: 'How is a limited monarchy different from an absolute monarchy?', es: '¿En qué se diferencia una monarquía limitada de una monarquía absoluta?', fa: 'پادشاهی محدود با پادشاهی مطلق چه فرق دارد؟' },
        choices: [
          { en: 'The monarch must follow the laws', es: 'El monarca debe seguir las leyes', fa: 'پادشاه باید از قانون پیروی کند' },
          { en: 'The monarch is chosen by a vote', es: 'El monarca es elegido por voto', fa: 'پادشاه با رأی انتخاب می‌شود' },
          { en: 'The monarch rules many more lands', es: 'El monarca gobierna muchas más tierras', fa: 'پادشاه بر سرزمین‌های بیشتر حکومت می‌کند' },
          { en: 'The monarch shares power with the priests', es: 'El monarca comparte el poder con los sacerdotes', fa: 'پادشاه قدرت را با روحانیان شریک می‌سازد' }],
        answer: 0,
        why: { en: 'An absolute monarch has all the power. A limited, or constitutional, monarch must follow laws and share power.', es: 'Un monarca absoluto tiene todo el poder. Un monarca limitado, o constitucional, debe seguir leyes y compartir el poder.', fa: 'پادشاه مطلق همهٔ قدرت را دارد. پادشاه محدود، یا مشروطه، باید از قانون پیروی کند و قدرت را شریک سازد.' } },
      { q: { en: 'A small group of rich families runs a city. What is this called?', es: 'Un grupo pequeño de familias ricas dirige una ciudad. ¿Cómo se llama esto?', fa: 'یک گروه کوچک از خانواده‌های پولدار یک شهر را اداره می‌کند. نام این چیست؟' },
        choices: [
          { en: 'Oligarchy', es: 'Oligarquía', fa: 'الیگارشی' },
          { en: 'Democracy', es: 'Democracia', fa: 'دموکراسی' },
          { en: 'Theocracy', es: 'Teocracia', fa: 'حکومت دینی' },
          { en: 'Monarchy', es: 'Monarquía', fa: 'پادشاهی' }],
        answer: 0,
        why: { en: 'Oligarchy means rule by a few. In Corinth, a few rich families held the power.', es: 'Oligarquía significa gobierno de unos pocos. En Corinto, unas pocas familias ricas tenían el poder.', fa: 'الیگارشی یعنی حکومت چند نفر. در کورینت، چند خانوادهٔ پولدار قدرت داشتند.' } },
      { q: { en: 'In a theocracy, who rules?', es: 'En una teocracia, ¿quién gobierna?', fa: 'در حکومت دینی، کی حکومت می‌کند؟' },
        choices: [
          { en: 'Religious leaders who speak for a god', es: 'Líderes religiosos que hablan por un dios', fa: 'رهبران دینی که از طرف یک خدا گپ می‌زنند' },
          { en: 'Citizens who vote together on a hill', es: 'Ciudadanos que votan juntos en una colina', fa: 'شهروندانی که با هم روی یک تپه رأی می‌دهند' },
          { en: 'A general who took the power by force', es: 'Un general que tomó el poder por la fuerza', fa: 'یک جنرال که قدرت را به زور گرفت' },
          { en: 'The oldest son of the last king', es: 'El hijo mayor del último rey', fa: 'پسر بزرگ پادشاه قبلی' }],
        answer: 0,
        why: { en: 'In a theocracy, religious leaders rule, and the laws come from their religion.', es: 'En una teocracia gobiernan líderes religiosos, y las leyes vienen de su religión.', fa: 'در حکومت دینی، رهبران دینی حکومت می‌کنند و قانون‌ها از دین‌شان می‌آید.' } },
      { q: { en: 'In Athens, citizens voted on each law themselves. What kind of democracy is that?', es: 'En Atenas, los ciudadanos votaban cada ley ellos mismos. ¿Qué tipo de democracia es esa?', fa: 'در آتن، شهروندان خودشان به هر قانون رأی می‌دادند. این چه نوع دموکراسی است؟' },
        choices: [
          { en: 'Direct democracy', es: 'Democracia directa', fa: 'دموکراسی مستقیم' },
          { en: 'Representative democracy', es: 'Democracia representativa', fa: 'دموکراسی نمایندگی' },
          { en: 'Limited monarchy', es: 'Monarquía limitada', fa: 'پادشاهی محدود' },
          { en: 'Oligarchy', es: 'Oligarquía', fa: 'الیگارشی' }],
        answer: 0,
        why: { en: 'In a direct democracy, the people vote on each law themselves, like the citizens of Athens.', es: 'En una democracia directa, el pueblo vota cada ley por sí mismo, como los ciudadanos de Atenas.', fa: 'در دموکراسی مستقیم، مردم خودشان به هر قانون رأی می‌دهند، مثل شهروندان آتن.' } },
      { q: { en: 'Who could NOT vote in ancient Athens?', es: '¿Quiénes NO podían votar en la antigua Atenas?', fa: 'در آتن قدیم کی‌ها رأی داده نمی‌توانستند؟' },
        choices: [
          { en: 'Women, enslaved people and foreigners', es: 'Las mujeres, los esclavizados y los extranjeros', fa: 'زنان، بردگان و خارجی‌ها' },
          { en: 'Citizen men from poor families', es: 'Hombres ciudadanos de familias pobres', fa: 'مردان شهروند از خانواده‌های فقیر' },
          { en: 'Citizen farmers, potters and sailors', es: 'Agricultores, alfareros y marineros ciudadanos', fa: 'دهقانان، کلال‌ها و ملاحان شهروند' },
          { en: 'Citizen men who were born in Athens', es: 'Hombres ciudadanos nacidos en Atenas', fa: 'مردان شهروندی که در آتن به دنیا آمدند' }],
        answer: 0,
        why: { en: 'Only citizen men could vote. Women, enslaved people and foreigners had no vote. Many people were left out.', es: 'Solo los hombres ciudadanos votaban. Las mujeres, los esclavizados y los extranjeros no. Mucha gente quedaba fuera.', fa: 'فقط مردان شهروند رأی می‌دادند. زنان، بردگان و خارجی‌ها حق رأی نداشتند. بسیاری از مردم کنار ماندند.' } },
      { q: { en: 'The United States is a [[republic|republic]]. What kind of democracy is it?', es: 'Estados Unidos es una [[republic|república]]. ¿Qué tipo de democracia es?', fa: 'امریکا یک [[republic|جمهوری]] است. چه نوع دموکراسی است؟' },
        choices: [
          { en: 'Representative democracy', es: 'Democracia representativa', fa: 'دموکراسی نمایندگی' },
          { en: 'Direct democracy, like Athens', es: 'Democracia directa, como Atenas', fa: 'دموکراسی مستقیم، مثل آتن' },
          { en: 'An absolute monarchy', es: 'Una monarquía absoluta', fa: 'یک پادشاهی مطلق' },
          { en: 'A theocracy with priests', es: 'Una teocracia con sacerdotes', fa: 'یک حکومت دینی با روحانیان' }],
        answer: 0,
        why: { en: 'In a republic, people elect representatives to make laws for them. The US is a representative democracy.', es: 'En una república, la gente elige representantes que hacen las leyes. EE. UU. es una democracia representativa.', fa: 'در جمهوری، مردم نماینده‌هایی را انتخاب می‌کنند که برایشان قانون بسازند. امریکا دموکراسی نمایندگی است.' } }
    ]
  },

  learned: [
    { en: 'People form a [[government|government]] to keep order and safety, settle fights and give services.', es: 'La gente forma un [[government|gobierno]] para mantener el orden y la seguridad, resolver peleas y dar servicios.', fa: 'مردم [[government|حکومت]] می‌سازند تا نظم و امنیت را نگه دارند، جنگ‌ها را حل کنند و خدمات بدهند.' },
    { en: 'Power can belong to one ruler, a royal family, a few people, or religious leaders.', es: 'El poder puede ser de un gobernante, una familia real, unas pocas personas o líderes religiosos.', fa: 'قدرت می‌تواند دست یک حاکم، یک خانوادهٔ شاهی، چند نفر یا رهبران دینی باشد.' },
    { en: 'In a [[democracy|democracy]], the people hold power. The US is a [[representative democracy|representative democracy]].', es: 'En una [[democracy|democracia]], el pueblo tiene el poder. EE. UU. es una [[representative democracy|democracia representativa]].', fa: 'در [[democracy|دموکراسی]]، قدرت دست مردم است. امریکا یک [[representative democracy|دموکراسی نمایندگی]] است.' }
  ],
  reflect: {
    q: { en: 'Think of a group you belong to: a family, a team or a class. Who makes the rules, and how?', es: 'Piensa en un grupo al que perteneces: una familia, un equipo o una clase. ¿Quién hace las reglas y cómo?', fa: 'به گروهی فکر کن که عضو آن هستی: یک خانواده، یک تیم یا یک صنف. کی قانون‌ها را می‌سازد، و چطور؟' },
    starter: { en: 'In my group, the rules are made by', es: 'En mi grupo, las reglas las hace', fa: 'در گروه من، قانون‌ها را ... می‌سازد' }
  }
};
