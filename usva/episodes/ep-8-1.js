/* TRAILWALKER · Episode 8.1 · The Cold War, China and Korea (VUS)
   Arlington, Virginia, in October 1962, during the Cuban Missile Crisis: a suburban street of new houses with TV antennas.
   North (rows 1-8): homes, the hardware store that sells shelter supplies (J, door 19,2) and the church (NE).
   Rows 4 and 9: the streets. Column 15: the cross street.
   SW: the school with its fallout-shelter sign and duck-and-cover poster, and the schoolyard ball field.
   SE: the park with a pond. In the far SE corner, behind a fence, the Pentagon seen far off (W).
   War and nuclear fear: plain, true, calm words. */
window.EPISODE = {
  id: '8.1',
  realm: 8,
  sol: 'VUS',
  title: { en: 'The Cold War, China and Korea', es: 'La Guerra Fría, China y Corea', fa: 'جنگ سرد، چین و کوریا' },
  place: { en: 'Arlington, 1962', es: 'Arlington, 1962', fa: 'آرلینگتن، ۱۹۶۲' },
  weather: { sky: 'leaves', time: 'day' },
  intro: [
    { en: 'The Grump blurred the [[cold war|Cold War]] page. People forget why everyone was afraid.',
      es: 'El Gruñón borró la página de la [[cold war|Guerra Fría]]. La gente olvida por qué todos tenían miedo.',
      fa: 'غرغرو صفحهٔ [[cold war|جنگ سرد]] را تار کرد. مردم فراموش می‌کنند چرا همه می‌ترسیدند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Arlington, Virginia, next to Washington, on the map; 1962 on the timeline */
  scenes: {
    at: [-77.10, 38.88],
    year: 1962,
    start: [
      { en: 'After World War II, the US and the Soviet Union became rivals.',
        es: 'Después de la Segunda Guerra Mundial, Estados Unidos y la Unión Soviética se volvieron rivales.',
        fa: 'بعد از جنگ جهانی دوم، امریکا و اتحاد شوروی رقیب شدند.' },
      { en: 'Their long contest, from 1947 to 1991, is called the Cold War.',
        es: 'Su larga competencia, de 1947 a 1991, se llama la Guerra Fría.',
        fa: 'رقابت درازشان، از ۱۹۴۷ تا ۱۹۹۱، جنگ سرد نام دارد.' },
      { en: 'In October 1962, the whole world feared a nuclear war.',
        es: 'En octubre de 1962, todo el mundo temía una guerra nuclear.',
        fa: 'در اکتوبر ۱۹۶۲، تمام جهان از یک جنگ اتمی می‌ترسید.' }
    ],
    page: { en: 'After 13 days, the Soviets agreed to take their missiles out of Cuba.',
      es: 'Después de 13 días, los soviéticos aceptaron sacar sus misiles de Cuba.',
      fa: 'بعد از ۱۳ روز، شوروی قبول کرد راکت‌هایش را از کیوبا بیرون کند.' },
    guess: {
      q: { en: 'The US and the Soviets were rivals for decades. Did their armies fight directly?', es: 'Estados Unidos y los soviéticos fueron rivales durante décadas. ¿Sus ejércitos pelearon directamente?', fa: 'امریکا و شوروی دهه‌ها رقیب بودند. آیا اردوهایشان مستقیم با هم جنگیدند؟' },
      choices: [
        { t: { en: 'No, not directly', es: 'No, no directamente', fa: 'نه، مستقیم نه' }, ok: true },
        { t: { en: 'Yes, many times', es: 'Sí, muchas veces', fa: 'بله، بارها' } }
      ],
      why: { en: 'They never fought each other directly. They raced in weapons and space instead.', es: 'Nunca pelearon directamente. En cambio, compitieron en armas y en el espacio.', fa: 'هرگز مستقیم با هم نجنگیدند. به جای آن، در سلاح و فضا مسابقه دادند.' }
    },
    next: {
      q: { en: 'Next: in 1963, about 250,000 people marched in Washington. Why did they march?', es: 'Ahora: en 1963, unas 250,000 personas marcharon en Washington. ¿Por qué marcharon?', fa: 'بعدی: در ۱۹۶۳، حدود ۲۵۰٬۰۰۰ نفر در واشنگتن راه‌پیمایی کردند. چرا؟' },
      choices: [
        { t: { en: 'For jobs and equal rights', es: 'Por trabajo e igualdad de derechos', fa: 'برای کار و حقوق برابر' }, ok: true },
        { t: { en: 'To end the space race', es: 'Para acabar la carrera espacial', fa: 'برای ختم مسابقهٔ فضایی' } }
      ],
      why: { en: 'The March on Washington asked for jobs, freedom and equal rights for Black Americans.', es: 'La Marcha sobre Washington pidió trabajo, libertad e igualdad de derechos para los afroamericanos.', fa: 'راه‌پیمایی واشنگتن برای امریکایی‌های سیاه‌پوست کار، آزادی و حقوق برابر خواست.' }
    }
  },
  /* houses: who lives or works behind each door */
  houses: [
    { at: [3, 2], name: { en: 'Mr. Hale', es: 'Señor Hale', fa: 'آقای هیل' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#6a5a4a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I wrote for a newspaper. In 1953, I lost my job.', es: 'Yo escribía para un periódico. En 1953 perdí mi trabajo.', fa: 'من برای یک روزنامه می‌نوشتم. در ۱۹۵۳ کارم را از دست دادم.' },
        { en: 'Someone falsely said I was a communist. There was no proof.', es: 'Alguien dijo, sin ser verdad, que yo era comunista. No había pruebas.', fa: 'کسی به دروغ گفت من کمونیست هستم. هیچ ثبوتی نبود.' },
        { en: 'This fear was the [[red scare|Red Scare]]. Senator McCarthy spread many false charges.', es: 'Ese miedo fue el [[red scare|Temor Rojo]]. El senador McCarthy hizo muchas acusaciones falsas.', fa: 'این ترس [[red scare|ترس سرخ]] بود. سناتور مک‌کارتی تهمت‌های دروغ زیادی پخش کرد.' }
      ] },
    { at: [8, 2], name: { en: 'Mrs. Chen', es: 'Señora Chen', fa: 'خانم چن' },
      look: { skin: 2, hair: '#141010', shirt: '#4a7a6a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'My family came from China. In 1949, China became communist.', es: 'Mi familia vino de China. En 1949, China se volvió comunista.', fa: 'خانواده‌ام از چین آمد. در ۱۹۴۹، چین کمونیست شد.' },
        { en: 'Mao Zedong and the Communists won a civil war there.', es: 'Mao Zedong y los comunistas ganaron una guerra civil allá.', fa: 'مائو تسه‌دونگ و کمونیست‌ها آنجا در یک جنگ داخلی پیروز شدند.' },
        { en: 'Some neighbors now look at us with fear. That is not fair.', es: 'Algunos vecinos ahora nos miran con miedo. Eso no es justo.', fa: 'بعضی همسایه‌ها حالا با ترس به ما نگاه می‌کنند. این عادلانه نیست.' }
      ] },
    { at: [19, 2], name: { en: 'Mr. Pruitt', es: 'Señor Pruitt', fa: 'آقای پروئیت' },
      look: { skin: 0, hair: '#7a4a2a', shirt: '#c84a2a', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'Shelter supplies! Canned food, water cans, radios and flashlights.', es: '¡Cosas para el refugio! Comida en lata, agua, radios y linternas.', fa: 'سامان پناهگاه! غذای قطی، قطی آب، رادیو و چراغ دستی.' },
        { en: 'Both sides built atomic bombs, then even bigger hydrogen bombs.', es: 'Los dos lados hicieron bombas atómicas, y luego bombas de hidrógeno aún más grandes.', fa: 'هر دو طرف بم اتمی ساختند، بعد بم‌های هایدروجنی بزرگ‌تر.' },
        { en: 'That is the [[arms race|arms race]]. Some families build [[fallout|fallout]] shelters.', es: 'Esa es la [[arms race|carrera armamentista]]. Algunas familias construyen refugios contra la [[fallout|lluvia radiactiva]].', fa: 'این [[arms race|مسابقهٔ تسلیحاتی]] است. بعضی خانواده‌ها برای [[fallout|گرد اتمی]] پناهگاه می‌سازند.' }
      ] },
    { at: [26, 2], name: { en: 'Pastor Green', es: 'Pastor Green', fa: 'کشیش گرین' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#1a1a2a', pants: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'This week, people fill the church to pray for peace.', es: 'Esta semana, la gente llena la iglesia para rezar por la paz.', fa: 'این هفته مردم کلیسا را پر می‌کنند تا برای صلح دعا کنند.' },
        { en: 'Missiles in Cuba could reach Washington in minutes.', es: 'Los misiles en Cuba podrían llegar a Washington en minutos.', fa: 'راکت‌های کیوبا می‌توانند در چند دقیقه به واشنگتن برسند.' },
        { en: 'We are right next to Washington and the Pentagon. People are afraid.', es: 'Estamos justo al lado de Washington y del Pentágono. La gente tiene miedo.', fa: 'ما درست کنار واشنگتن و پنتاگون هستیم. مردم می‌ترسند.' }
      ] },
    { at: [3, 7], name: { en: 'Mrs. Dalton', es: 'Señora Dalton', fa: 'خانم دالتن' },
      look: { skin: 1, hair: '#c89a5a', shirt: '#8a6a9a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My son is an Army adviser in South Vietnam.', es: 'Mi hijo es asesor del ejército en Vietnam del Sur.', fa: 'پسرم مشاور اردو در ویتنام جنوبی است.' },
        { en: 'He helps South Vietnam fight communist forces backed by the North.', es: 'Ayuda a Vietnam del Sur a pelear contra fuerzas comunistas apoyadas por el Norte.', fa: 'او به ویتنام جنوبی کمک می‌کند با نیروهای کمونیست که شمال حمایت‌شان می‌کند بجنگد.' },
        { en: 'Few people here talk about Vietnam yet. I hope it stays small.', es: 'Aquí casi nadie habla de Vietnam todavía. Espero que siga siendo pequeño.', fa: 'اینجا هنوز کم کسی دربارهٔ ویتنام گپ می‌زند. امیدوارم کوچک بماند.' }
      ] },
    { at: [8, 7], name: { en: 'Mrs. Fischer', es: 'Señora Fischer', fa: 'خانم فیشر' },
      look: { skin: 0, hair: '#e0c080', shirt: '#3a6a9a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I grew up in Berlin, Germany. After the war, the city was split.', es: 'Crecí en Berlín, Alemania. Después de la guerra, la ciudad fue dividida.', fa: 'من در برلین، آلمان، بزرگ شدم. بعد از جنگ، شهر تقسیم شد.' },
        { en: 'In 1948, the Soviets blocked West Berlin. The [[berlin airlift|Berlin Airlift]] flew in food.', es: 'En 1948, los soviéticos bloquearon Berlín Occidental. El [[berlin airlift|puente aéreo de Berlín]] llevó comida.', fa: 'در ۱۹۴۸، شوروی برلین غربی را محاصره کرد. [[berlin airlift|پل هوایی برلین]] غذا آورد.' },
        { en: 'Last year, a wall went up across Berlin. My cousins are on the other side.', es: 'El año pasado levantaron un muro en Berlín. Mis primos están del otro lado.', fa: 'سال گذشته یک دیوار در برلین ساخته شد. پسرکاکاهایم آن طرف هستند.' }
      ] },
    { at: [23, 7], name: { en: 'Mr. Lewis', es: 'Señor Lewis', fa: 'آقای لوئیس' },
      look: { skin: 4, hair: '#1a1208', shirt: '#e8e8e8', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I work at the Pentagon, the headquarters of the US military.', es: 'Trabajo en el Pentágono, la sede de las fuerzas armadas de EE. UU.', fa: 'من در پنتاگون کار می‌کنم، مرکز اردوی امریکا.' },
        { en: 'Since Monday, people there work day and night.', es: 'Desde el lunes, allí la gente trabaja de día y de noche.', fa: 'از روز دوشنبه، مردم آنجا شب و روز کار می‌کنند.' },
        { en: 'Navy ships around Cuba make a [[quarantine|quarantine]]. They stop ships carrying weapons.', es: 'Los barcos de la Marina rodean Cuba en una [[quarantine|cuarentena]]. Detienen barcos con armas.', fa: 'کشتی‌های بحری دور کیوبا یک [[quarantine|محاصره]] ساخته‌اند. کشتی‌های حامل سلاح را می‌ایستانند.' }
      ] },
    { at: [5, 12], name: { en: 'Principal Moore', es: 'Directora Moore', fa: 'مدیر مور' },
      look: { skin: 3, hair: '#3a2416', shirt: '#6a2a3a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Our students practice duck and cover. They hide under their desks.', es: 'Nuestros estudiantes practican agacharse y cubrirse. Se esconden bajo sus pupitres.', fa: 'شاگردان ما «خم شو و بپوشان» را تمرین می‌کنند. زیر میزهایشان پنهان می‌شوند.' },
        { en: 'In 1959, four Black students entered Stratford Junior High, here in Arlington.', es: 'En 1959, cuatro estudiantes negros entraron a la escuela Stratford, aquí en Arlington.', fa: 'در ۱۹۵۹، چهار شاگرد سیاه‌پوست در مکتب استراتفورد، اینجا در آرلینگتن، شامل شدند.' },
        { en: 'It was one of the first Virginia schools to end segregation.', es: 'Fue una de las primeras escuelas de Virginia en acabar con la segregación.', fa: 'این یکی از اولین مکتب‌های ویرجینیا بود که جدایی نژادی را ختم کرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: homes (doors 3,2 · 8,2 · 3,7 · 8,7). NE: the hardware store (J, door 19,2), the church (door 26,2), a home (door 23,7).
     Rows 4 and 9: streets. Column 15: the cross street.
     SW: the school (door 5,12) with the shelter sign and drill poster, a bank (J) and the ball field (:).
     SE: the park with a pond and a path (:). Far SE corner: the Pentagon (W), far off behind a fence (F). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR..QQQ.RRR.l..JJJJ..RRRRR..T',
    'T.hdh..hdh.hhh.l..JdJJ..hhdhh..T',
    'T.............xl.x.............T',
    'TllllllllllllllllllllllllllllllT',
    'T..............l...............T',
    'T.RRR..QQQ.RRR.l..QQQ.RRR.QQQ..T',
    'T.hdh..hdh.hhh.l..hhh.hdh.hhh..T',
    'T..............l...............T',
    'TllllllllllllllllllllllllllllllT',
    'T..............l...............T',
    'T.QQQQQQQ.JJJ..l..T....,...T...T',
    'T.hhhdhhh.JJJ..l..........,....T',
    'T.x......x.....l.,..~~~~.....T.T',
    'T..............l...~~~~~~T.....T',
    'T.:::::::......l....~~~~....,..T',
    'T.:.....:.T....l.T......x......T',
    'T.:.....:......l::,:::::,:.....T',
    'T.:.....:...T..l......T..FFFFFFT',
    'T.:::::::......l.....,...FWWWWWT',
    'T..............l...T.....FWWWWWT',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [14, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [17, 8], at: [17, 5], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps north, toward the hardware store.', es: 'Desde esta nota, camina 3 pasos al norte, hacia la ferretería.', fa: 'از این یادداشت، ۳ قدم به شمال، به طرف دکان ابزار برو.' },
      text: { en: 'A Civil Defense water can. Shelters stored food and water for about two weeks.', es: 'Una lata de agua de Defensa Civil. Los refugios guardaban comida y agua para unas dos semanas.', fa: 'یک قطی آب دفاع ملکی. پناهگاه‌ها غذا و آب حدود دو هفته را نگه می‌داشتند.' } },
    { clueAt: [1, 13], at: [1, 18], decor: 'gem',
      clue: { en: 'From this note, walk 5 steps south, along the west side of the ball field.', es: 'Desde esta nota, camina 5 pasos al sur, por el lado oeste del campo de pelota.', fa: 'از این یادداشت، ۵ قدم به جنوب برو، در طرف غرب میدان توپ.' },
      text: { en: 'A toy Sputnik! The real one was the size of a beach ball. It beeped from space.', es: '¡Un Sputnik de juguete! El de verdad era del tamaño de una pelota de playa. Pitaba desde el espacio.', fa: 'یک اسپوتنیک بازیچه! اصلی‌اش به اندازهٔ یک توپ ساحلی بود. از فضا بیپ بیپ می‌کرد.' } }
  ],

  words: {
    'cold war': { en: 'the long contest between the US and the Soviet Union, from 1947 to 1991', es: 'la larga competencia entre Estados Unidos y la Unión Soviética, de 1947 a 1991', fa: 'رقابت دراز میان امریکا و اتحاد شوروی، از ۱۹۴۷ تا ۱۹۹۱' },
    communism: { en: 'a system where one party rules and the government owns the businesses', es: 'un sistema donde un solo partido manda y el gobierno es dueño de los negocios', fa: 'نظامی که یک حزب حکومت می‌کند و حکومت مالک کاروبارها است' },
    capitalism: { en: 'a system where people own businesses and compete to sell things', es: 'un sistema donde las personas son dueñas de negocios y compiten para vender', fa: 'نظامی که مردم مالک کاروبار هستند و برای فروش رقابت می‌کنند' },
    'iron curtain': { en: 'the line that split free Western Europe from communist Eastern Europe', es: 'la línea que separaba la Europa Occidental libre de la Europa del Este comunista', fa: 'خطی که اروپای غربی آزاد را از اروپای شرقی کمونیست جدا می‌کرد' },
    containment: { en: 'the US plan to stop communism from spreading to more countries', es: 'el plan de Estados Unidos para que el comunismo no se extendiera a más países', fa: 'نقشهٔ امریکا برای جلوگیری از پخش شدن کمونیزم به کشورهای بیشتر' },
    'marshall plan': { en: 'US money that helped Western Europe rebuild after World War II', es: 'dinero de Estados Unidos que ayudó a Europa Occidental a reconstruirse después de la Segunda Guerra Mundial', fa: 'پول امریکا که به اروپای غربی کمک کرد بعد از جنگ جهانی دوم دوباره آباد شود' },
    'berlin airlift': { en: 'when planes flew food and coal into West Berlin, in 1948 and 1949', es: 'cuando aviones llevaron comida y carbón a Berlín Occidental, en 1948 y 1949', fa: 'وقتی طیاره‌ها در ۱۹۴۸ و ۱۹۴۹ غذا و زغال به برلین غربی بردند' },
    nato: { en: 'a group of countries that promised to defend each other, started in 1949', es: 'un grupo de países que prometieron defenderse unos a otros, creado en 1949', fa: 'گروهی از کشورها که وعده دادند از همدیگر دفاع کنند، ساخته شده در ۱۹۴۹' },
    armistice: { en: 'an agreement to stop fighting', es: 'un acuerdo para dejar de pelear', fa: 'توافق برای بس کردن جنگ' },
    'arms race': { en: 'when two sides race to build more and bigger weapons', es: 'cuando dos lados compiten por hacer más armas y más grandes', fa: 'وقتی دو طرف مسابقه می‌دهند تا سلاح بیشتر و بزرگ‌تر بسازند' },
    fallout: { en: 'dangerous dust that falls after a nuclear bomb explodes', es: 'polvo peligroso que cae después de que explota una bomba nuclear', fa: 'گرد خطرناکی که بعد از انفجار بم اتمی می‌ریزد' },
    satellite: { en: 'a machine that circles the Earth in space', es: 'una máquina que da vueltas a la Tierra en el espacio', fa: 'ماشینی که در فضا دور زمین می‌چرخد' },
    'space race': { en: 'the contest between the US and the Soviets to explore space first', es: 'la competencia entre Estados Unidos y los soviéticos por explorar el espacio primero', fa: 'رقابت امریکا و شوروی برای اول رسیدن به فضا' },
    'red scare': { en: 'a time when many Americans feared communists, and people were falsely accused', es: 'un tiempo en que muchos estadounidenses temían a los comunistas, y acusaban a gente sin razón', fa: 'زمانی که بسیاری امریکایی‌ها از کمونیست‌ها می‌ترسیدند و به مردم تهمت دروغ زده می‌شد' },
    quarantine: { en: 'here: Navy ships blocking weapons from reaching Cuba', es: 'aquí: barcos de la Marina que impedían que llegaran armas a Cuba', fa: 'اینجا: کشتی‌های بحری که نمی‌گذاشتند سلاح به کیوبا برسد' }
  },

  npcs: [
    {
      x: 6, y: 5,
      name: { en: 'Mrs. Novak', es: 'Señora Novak', fa: 'خانم نوواک' },
      role: { en: 'Seamstress from Czechoslovakia', es: 'Costurera de Checoslovaquia', fa: 'خیاط از چکوسلواکیا' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#9a4a4a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'I came from Czechoslovakia. In 1948, Communists took power there.', es: 'Vine de Checoslovaquia. En 1948, los comunistas tomaron el poder allá.', fa: 'من از چکوسلواکیا آمدم. در ۱۹۴۸ کمونیست‌ها آنجا قدرت را گرفتند.' },
        { en: 'An [[iron curtain|iron curtain]] split Europe. In the east, one party ruled.', es: 'Una [[iron curtain|cortina de hierro]] dividió Europa. En el este mandaba un solo partido.', fa: 'یک [[iron curtain|پردهٔ آهنین]] اروپا را تقسیم کرد. در شرق یک حزب حکومت می‌کرد.' },
        { en: 'The US has [[capitalism|capitalism]] and elections. The Soviets have [[communism|communism]].', es: 'Estados Unidos tiene [[capitalism|capitalismo]] y elecciones. Los soviéticos tienen [[communism|comunismo]].', fa: 'امریکا [[capitalism|سرمایه‌داری]] و انتخابات دارد. شوروی [[communism|کمونیزم]] دارد.' },
        { en: 'In 1947, the US chose [[containment|containment]]: stop communism from spreading.', es: 'En 1947, Estados Unidos eligió la [[containment|contención]]: frenar el comunismo.', fa: 'در ۱۹۴۷، امریکا [[containment|سیاست مهار]] را انتخاب کرد: جلوی پخش کمونیزم را بگیر.' },
        { en: 'The [[marshall plan|Marshall Plan]] sent money to rebuild Western Europe.', es: 'El [[marshall plan|Plan Marshall]] envió dinero para reconstruir Europa Occidental.', fa: '[[marshall plan|طرح مارشال]] پول فرستاد تا اروپای غربی دوباره آباد شود.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did the US send Marshall Plan money to Western Europe?', es: '¿Por qué Estados Unidos envió dinero del Plan Marshall a Europa Occidental?', fa: 'چرا امریکا پول طرح مارشال را به اروپای غربی فرستاد؟' },
        choices: [
          { ok: true, t: { en: 'To rebuild it so communism would not spread', es: 'Para reconstruirla y frenar el comunismo', fa: 'برای آبادی آن تا کمونیزم پخش نشود' },
            why: { en: 'Yes. Poor, hungry countries might turn to communism. Rebuilding helped keep them free.', es: 'Sí. Países pobres y con hambre podían volverse comunistas. Reconstruir ayudó a mantenerlos libres.', fa: 'بله. کشورهای فقیر و گرسنه شاید کمونیست می‌شدند. آبادی کمک کرد آزاد بمانند.' } },
          { t: { en: 'To buy land in Europe for new US states', es: 'Para comprar tierras en Europa para nuevos estados', fa: 'برای خریدن زمین در اروپا برای ایالت‌های نو' },
            why: { en: 'No. The US did not buy land. It helped Europe rebuild after the war.', es: 'No. Estados Unidos no compró tierras. Ayudó a Europa a reconstruirse después de la guerra.', fa: 'نه. امریکا زمین نخرید. به اروپا کمک کرد بعد از جنگ آباد شود.' } },
          { t: { en: 'To pay back money the US owed to Europe', es: 'Para pagar dinero que debía a Europa', fa: 'برای پس دادن قرضی که امریکا به اروپا داشت' },
            why: { en: 'No. It was help, not a debt. The US wanted to stop communism from spreading.', es: 'No. Era ayuda, no una deuda. Estados Unidos quería frenar el comunismo.', fa: 'نه. کمک بود، نه قرض. امریکا می‌خواست جلوی پخش کمونیزم را بگیرد.' } }
        ]
      }
    },
    {
      x: 29, y: 3,
      name: { en: 'Mr. Brooks', es: 'Señor Brooks', fa: 'آقای بروکس' },
      role: { en: 'Korean War veteran', es: 'Veterano de la guerra de Corea', fa: 'سرباز سابق جنگ کوریا' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#5a6a4a', pants: '#3a3a3a', style: 'short', hat: '#5a6a4a' },
      lines: [
        { en: 'I fought in Korea. In 1950, North Korea invaded South Korea.', es: 'Peleé en Corea. En 1950, Corea del Norte invadió Corea del Sur.', fa: 'من در کوریا جنگیدم. در ۱۹۵۰، کوریای شمالی به کوریای جنوبی حمله کرد.' },
        { en: 'The United Nations sent troops to help the South. Most helpers from abroad were American.', es: 'Las Naciones Unidas enviaron tropas para ayudar al Sur. La mayoría de los que llegaron de fuera eran estadounidenses.', fa: 'سازمان ملل برای کمک به جنوب عسکر فرستاد. بیشتر عسکرهای خارجی امریکایی بودند.' },
        { en: 'Then China sent a huge army to help the North.', es: 'Luego China envió un ejército enorme para ayudar al Norte.', fa: 'بعد چین یک اردوی بسیار بزرگ برای کمک به شمال فرستاد.' },
        { en: 'Black and white soldiers served together in my unit. That was new.', es: 'Soldados negros y blancos servían juntos en mi unidad. Eso era nuevo.', fa: 'سربازان سیاه‌پوست و سفیدپوست در قطعهٔ من با هم خدمت می‌کردند. این نو بود.' },
        { en: 'In 1953, an [[armistice|armistice]] stopped the fighting near the 38th parallel.', es: 'En 1953, un [[armistice|armisticio]] detuvo la pelea cerca del paralelo 38.', fa: 'در ۱۹۵۳، یک [[armistice|آتش‌بس]] جنگ را نزدیک مدار ۳۸ درجه بس کرد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why did UN and US troops go to Korea in 1950?', es: '¿Por qué las tropas de la ONU y de EE. UU. fueron a Corea en 1950?', fa: 'چرا عسکرهای ملل متحد و امریکا در ۱۹۵۰ به کوریا رفتند؟' },
        choices: [
          { ok: true, t: { en: 'North Korea invaded South Korea', es: 'Corea del Norte invadió Corea del Sur', fa: 'کوریای شمالی به جنوبی حمله کرد' },
            why: { en: 'Right. Communist North Korea attacked the South, so the UN sent help.', es: 'Correcto. La Corea del Norte comunista atacó al Sur, y la ONU mandó ayuda.', fa: 'درست. کوریای شمالی کمونیست به جنوب حمله کرد، پس ملل متحد کمک فرستاد.' } },
          { t: { en: 'South Korea attacked the United States', es: 'Corea del Sur atacó a Estados Unidos', fa: 'کوریای جنوبی به امریکا حمله کرد' },
            why: { en: 'No. South Korea was the one attacked. The North invaded it.', es: 'No. Corea del Sur fue la atacada. El Norte la invadió.', fa: 'نه. کوریای جنوبی خودش حمله دیده بود. شمال به آن حمله کرد.' } },
          { t: { en: 'Korea wanted to join the United States', es: 'Corea quería unirse a Estados Unidos', fa: 'کوریا می‌خواست با امریکا یکی شود' },
            why: { en: 'No. The troops came because the communist North invaded the South.', es: 'No. Las tropas fueron porque el Norte comunista invadió el Sur.', fa: 'نه. عسکرها آمدند چون شمال کمونیست به جنوب حمله کرد.' } }
        ]
      }
    },
    {
      x: 11, y: 14,
      name: { en: 'Miss Reyes', es: 'Señorita Reyes', fa: 'خانم ریس' },
      role: { en: 'Science teacher', es: 'Maestra de ciencias', fa: 'معلم ساینس' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#e8c84a', pants: '#3a4a6a', style: 'long' },
      lines: [
        { en: 'In 1957, the Soviets launched Sputnik, the first [[satellite|satellite]].', es: 'En 1957, los soviéticos lanzaron el Sputnik, el primer [[satellite|satélite]].', fa: 'در ۱۹۵۷، شوروی اسپوتنیک، اولین [[satellite|قمر مصنوعی]]، را به فضا فرستاد.' },
        { en: 'Americans worried. So in 1958, the US created NASA.', es: 'Los estadounidenses se preocuparon. Así que en 1958, Estados Unidos creó la NASA.', fa: 'امریکایی‌ها نگران شدند. پس در ۱۹۵۸، امریکا ناسا را ساخت.' },
        { en: 'Schools added more science and math. This is the [[space race|space race]].', es: 'Las escuelas añadieron más ciencias y matemáticas. Esta es la [[space race|carrera espacial]].', fa: 'مکتب‌ها ساینس و ریاضی بیشتر اضافه کردند. این [[space race|مسابقهٔ فضایی]] است.' },
        { en: 'This February, John Glenn flew around the Earth. My students cheered!', es: 'Este febrero, John Glenn voló alrededor de la Tierra. ¡Mis estudiantes aplaudieron!', fa: 'این فبروری، جان گلن دور زمین پرواز کرد. شاگردانم خوشی کردند!' },
        { en: 'Now Soviet missiles are in Cuba, about 90 miles from Florida.', es: 'Ahora hay misiles soviéticos en Cuba, a unas 90 millas de Florida.', fa: 'حالا راکت‌های شوروی در کیوبا هستند، حدود ۹۰ میل دور از فلوریدا.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Cuba is about 90 miles from Florida. Why did missiles there scare Americans?', es: 'Cuba está a unas 90 millas de Florida. ¿Por qué los misiles allí asustaban a la gente?', fa: 'کیوبا حدود ۹۰ میل از فلوریدا دور است. چرا راکت‌های آنجا امریکایی‌ها را ترساند؟' },
        choices: [
          { ok: true, t: { en: 'They could hit US cities very fast', es: 'Podían golpear ciudades de EE. UU. muy rápido', fa: 'می‌توانستند خیلی زود به شهرهای امریکا بزنند' },
            why: { en: 'Yes. Cuba is so close that missiles could reach many US cities in minutes.', es: 'Sí. Cuba está tan cerca que los misiles podían llegar a muchas ciudades en minutos.', fa: 'بله. کیوبا آن‌قدر نزدیک است که راکت‌ها در چند دقیقه به شهرهای زیادی می‌رسیدند.' } },
          { t: { en: 'Cuba is far away, next to Europe', es: 'Cuba está lejos, al lado de Europa', fa: 'کیوبا دور است، کنار اروپا' },
            why: { en: 'No. Cuba is an island in the Caribbean, very close to Florida.', es: 'No. Cuba es una isla del Caribe, muy cerca de Florida.', fa: 'نه. کیوبا جزیره‌ای در بحیرهٔ کارائیب است، بسیار نزدیک فلوریدا.' } },
          { t: { en: 'Missiles there could only hit fishing boats', es: 'Los misiles de allí solo podían golpear botes', fa: 'راکت‌های آنجا فقط به کشتی‌های ماهی‌گیری می‌زدند' },
            why: { en: 'No. These missiles could fly far, to cities like Washington.', es: 'No. Estos misiles podían volar lejos, hasta ciudades como Washington.', fa: 'نه. این راکت‌ها می‌توانستند دور، تا شهرهایی مثل واشنگتن، بروند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 3, text: { en: 'ARLINGTON, VIRGINIA · OCTOBER 1962 · New houses, each with a TV antenna on the roof.', es: 'ARLINGTON, VIRGINIA · OCTUBRE DE 1962 · Casas nuevas, cada una con una antena de TV en el techo.', fa: 'آرلینگتن، ویرجینیا · اکتوبر ۱۹۶۲ · خانه‌های نو، هر کدام با انتن تلویزیون روی بام.' } },
    { x: 17, y: 3, text: { en: 'HARDWARE STORE · Shelter supplies: canned food, water, radios, flashlights.', es: 'FERRETERÍA · Cosas para refugios: comida en lata, agua, radios, linternas.', fa: 'دکان ابزار · سامان پناهگاه: غذای قطی، آب، رادیو، چراغ دستی.' } },
    { x: 9, y: 13, text: { en: 'FALLOUT SHELTER · In an emergency, go to the school basement.', es: 'REFUGIO ANTIRRADIACIÓN · En una emergencia, vaya al sótano de la escuela.', fa: 'پناهگاه گرد اتمی · در وقت خطر، به تهکاوی مکتب بروید.' } },
    { x: 2, y: 13, text: { en: 'DUCK AND COVER · When you see the flash: get under your desk!', es: 'AGÁCHATE Y CÚBRETE · Si ves el destello: ¡métete bajo tu pupitre!', fa: 'خم شو و بپوشان · وقتی روشنی را دیدی: زیر میزت برو!' } },
    { x: 24, y: 16, text: { en: 'FAR OFF TO THE EAST: the Pentagon, with its five sides.', es: 'A LO LEJOS, AL ESTE: el Pentágono, con sus cinco lados.', fa: 'دور، به طرف شرق: پنتاگون، با پنج ضلعش.' } }
  ],

  /* the quest: Ana (gold !) in the park (SE) lost her notebook -> Mr. Kowalski the mail carrier (NW)
     saw the wind blow it -> find it in the north-east corner, east of the church (NE) -> back to Ana */
  quest: {
    stat: 'reg',
    title: { en: 'Ana\'s Space Notebook', es: 'El cuaderno espacial de Ana', fa: 'دفترچهٔ فضایی آنا' },
    giver: {
      x: 20, y: 18,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Student, age 10', es: 'Estudiante, 10 años', fa: 'شاگرد، ۱۰ ساله' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#4a8aca', pants: '#3a3a4a', style: 'long' },
      lines: [
        { en: 'I drew John Glenn\'s space flight in my notebook. Now it is gone!', es: 'Dibujé el vuelo espacial de John Glenn en mi cuaderno. ¡Ahora no está!', fa: 'پرواز فضایی جان گلن را در دفترچه‌ام رسم کردم. حالا گم شده!' },
        { en: 'Mr. Kowalski, the mail carrier, sees everything on our street.', es: 'El señor Kowalski, el cartero, ve todo en nuestra calle.', fa: 'آقای کووالسکی، نامه‌رسان، همه چیز را در سرک ما می‌بیند.' }
      ],
      wait: { en: 'Mr. Kowalski walks his route north of the main street, by the houses.', es: 'El señor Kowalski hace su ruta al norte de la calle principal, junto a las casas.', fa: 'آقای کووالسکی در شمال سرک عمومی، کنار خانه‌ها، نامه می‌رساند.' },
      thanks: { en: 'My notebook! My drawing of Friendship 7 is safe. Thank you!', es: '¡Mi cuaderno! Mi dibujo de la Friendship 7 está a salvo. ¡Gracias!', fa: 'دفترچه‌ام! نقاشی فرندشیپ ۷ من سالم است. تشکر!' }
    },
    contact: {
      x: 12, y: 8,
      name: { en: 'Mr. Kowalski', es: 'Señor Kowalski', fa: 'آقای کووالسکی' },
      role: { en: 'Mail carrier', es: 'Cartero', fa: 'نامه‌رسان' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#6a8aaa', pants: '#2a3a5a', style: 'short', hat: '#2a3a5a' },
      lines: [
        { en: 'Yes! The wind blew a notebook east along the street, toward the church.', es: '¡Sí! El viento llevó un cuaderno al este por la calle, hacia la iglesia.', fa: 'بله! باد یک دفترچه را در سرک به طرف شرق، به طرف کلیسا برد.' },
        { en: 'Walk past the church. Look in the far north-east corner, east of it.', es: 'Pasa la iglesia. Busca en la esquina noreste, al este de ella.', fa: 'از کلیسا بگذر. در کنج دور شمال‌شرق، شرق کلیسا، ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [30, 1],
      hint: { en: 'Look in the north-east corner, east of the church.', es: 'Busca en la esquina noreste, al este de la iglesia.', fa: 'در کنج شمال‌شرق، شرق کلیسا، ببین.' },
      found: { en: 'Found it! Ana\'s notebook. Inside: a rocket drawing, "Friendship 7, 1962."', es: '¡Aquí está! El cuaderno de Ana. Adentro: un dibujo de cohete, "Friendship 7, 1962".', fa: 'پیدا شد! دفترچهٔ آنا. داخلش: نقاشی یک راکت، «فرندشیپ ۷، ۱۹۶۲».' },
      item: { icon: '📓', name: { en: 'Ana\'s space notebook', es: 'El cuaderno espacial de Ana', fa: 'دفترچهٔ فضایی آنا' } }
    }
  },

  scraps: [[1, 1], [30, 16], [13, 20]],
  smudges: [[24, 5], [5, 17]],

  challenge: {
    at: [17, 10],
    type: 'route', // in the world; the card version (order) is the fallback
    // Marshall Plan (1948) -> NATO (1949) -> Korean War (1950) -> Sputnik (1957) -> Cuban Missile Crisis (1962)
    // -> Moon landing (1969) -> the Berlin Wall falls (1989)
    spots: [[5, 3], [13, 8], [21, 3], [29, 8], [12, 13], [17, 19], [28, 12]],
    stat: 'loc',
    title: { en: 'The Cold War in Order', es: 'La Guerra Fría en orden', fa: 'جنگ سرد به ترتیب' },
    intro: { en: 'The Grump scrambled the Cold War pages! Walk to the 7 events in order, oldest first.',
      es: '¡El Gruñón revolvió las páginas de la Guerra Fría! Camina a los 7 hechos en orden, del más antiguo al más nuevo.',
      fa: 'غرغرو صفحه‌های جنگ سرد را درهم کرد! به ترتیب به ۷ رویداد برو، از کهنه‌ترین شروع کن.' },
    items: [
      { icon: '🏗️', t: { en: 'Marshall Plan: US money rebuilds Western Europe', es: 'Plan Marshall: dinero de EE. UU. reconstruye Europa Occidental', fa: 'طرح مارشال: پول امریکا اروپای غربی را آباد می‌کند' } },
      { icon: '🤝', t: { en: 'NATO: the US and Western Europe promise to defend each other', es: 'OTAN: EE. UU. y Europa Occidental prometen defenderse', fa: 'ناتو: امریکا و اروپای غربی وعدهٔ دفاع از هم می‌دهند' } },
      { icon: '⚔️', t: { en: 'Korean War: North Korea invades South Korea', es: 'Guerra de Corea: Corea del Norte invade Corea del Sur', fa: 'جنگ کوریا: کوریای شمالی به جنوبی حمله می‌کند' } },
      { icon: '🛰️', t: { en: 'Sputnik: the Soviets launch the first satellite', es: 'Sputnik: los soviéticos lanzan el primer satélite', fa: 'اسپوتنیک: شوروی اولین قمر مصنوعی را می‌فرستد' } },
      { icon: '🚢', t: { en: 'Cuban Missile Crisis: Soviet missiles found in Cuba', es: 'Crisis de los misiles: hallan misiles soviéticos en Cuba', fa: 'بحران راکت‌های کیوبا: راکت‌های شوروی در کیوبا پیدا می‌شوند' } },
      { icon: '🌕', t: { en: 'Moon landing: American astronauts walk on the Moon', es: 'Llegada a la Luna: astronautas de EE. UU. caminan en la Luna', fa: 'رسیدن به ماه: فضانوردان امریکایی روی ماه قدم می‌زنند' } },
      { icon: '🧱', t: { en: 'The Berlin Wall falls: Germans cross freely again', es: 'Cae el Muro de Berlín: los alemanes cruzan libres otra vez', fa: 'دیوار برلین می‌افتد: آلمانی‌ها دوباره آزادانه رفت‌وآمد می‌کنند' } }
    ],
    why: { en: 'Marshall Plan 1948, NATO 1949, Korea 1950, Sputnik 1957, Cuba 1962, the Moon 1969, the Wall 1989.',
      es: 'Plan Marshall 1948, OTAN 1949, Corea 1950, Sputnik 1957, Cuba 1962, la Luna 1969, el Muro 1989.',
      fa: 'طرح مارشال ۱۹۴۸، ناتو ۱۹۴۹، کوریا ۱۹۵۰، اسپوتنیک ۱۹۵۷، کیوبا ۱۹۶۲، ماه ۱۹۶۹، دیوار ۱۹۸۹.' },
    success: { en: 'The Cold War is in order! It ended when the Soviet Union broke apart in 1991.',
      es: '¡La Guerra Fría está en orden! Terminó cuando la Unión Soviética se deshizo en 1991.',
      fa: 'جنگ سرد به ترتیب شد! وقتی اتحاد شوروی در ۱۹۹۱ از هم پاشید، تمام شد.' }
  },

  boss: {
    at: [24, 12],
    stat: 'reg',
    need: 3,
    name: { en: 'The Static Grump', es: 'El Gruñón de la Estática', fa: 'غرغروی خش‌خش' },
    appear: { en: 'The Static Grump is hiding in the fog by the park pond!', es: '¡El Gruñón de la Estática se esconde en la niebla junto al estanque del parque!', fa: 'غرغروی خش‌خش در مه کنار حوض پارک پنهان است!' },
    taunt: { en: 'Bzzzt! I fill every TV with static. Scared people forget the facts!', es: '¡Bzzzt! Lleno cada TV de estática. ¡La gente asustada olvida los hechos!', fa: 'بززززت! هر تلویزیون را پر از خش‌خش می‌کنم. مردم ترسیده حقیقت را فراموش می‌کنند!' },
    win: { en: 'The static clears. Journal page 8.1 floats down into your hands!', es: 'La estática se va. ¡La página 8.1 del diario cae en tus manos!', fa: 'خش‌خش پاک می‌شود. صفحهٔ ۸.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What was the US plan called containment?', es: '¿Qué era el plan de Estados Unidos llamado contención?', fa: 'نقشهٔ امریکا به نام «مهار» چه بود؟' },
        choices: [
          { en: 'Keep communism from spreading', es: 'Evitar que el comunismo se extienda', fa: 'جلوی پخش کمونیزم را گرفتن' },
          { en: 'Take over the Soviet Union by force', es: 'Tomar la Unión Soviética por la fuerza', fa: 'گرفتن اتحاد شوروی به زور' },
          { en: 'Stay out of all world problems', es: 'No meterse en ningún problema del mundo', fa: 'دور ماندن از همهٔ مشکلات جهان' },
          { en: 'Give US bombs to the Soviets', es: 'Darles bombas de EE. UU. a los soviéticos', fa: 'دادن بم‌های امریکا به شوروی' }],
        answer: 0,
        why: { en: 'Starting in 1947, the US worked to stop communism from spreading to more countries.', es: 'Desde 1947, Estados Unidos trabajó para que el comunismo no llegara a más países.', fa: 'از ۱۹۴۷، امریکا کار کرد تا کمونیزم به کشورهای بیشتر پخش نشود.' } },
      { q: { en: 'What did the Marshall Plan do?', es: '¿Qué hizo el Plan Marshall?', fa: 'طرح مارشال چه کرد؟' },
        choices: [
          { en: 'Rebuilt Western Europe with US money', es: 'Reconstruyó Europa Occidental con dinero de EE. UU.', fa: 'اروپای غربی را با پول امریکا آباد کرد' },
          { en: 'Sent US soldiers to fight in Korea', es: 'Mandó soldados de EE. UU. a pelear en Corea', fa: 'سربازان امریکا را به جنگ کوریا فرستاد' },
          { en: 'Put the first satellite into space', es: 'Puso el primer satélite en el espacio', fa: 'اولین قمر مصنوعی را به فضا فرستاد' },
          { en: 'Built a wall through the city of Berlin', es: 'Construyó un muro en medio de Berlín', fa: 'یک دیوار در وسط شهر برلین ساخت' }],
        answer: 0,
        why: { en: 'After World War II, US aid rebuilt Western Europe. Strong countries were less likely to turn communist.', es: 'Después de la guerra, la ayuda de EE. UU. reconstruyó Europa Occidental. Así era menos probable el comunismo.', fa: 'بعد از جنگ جهانی دوم، کمک امریکا اروپای غربی را آباد کرد. کشورهای قوی کمتر کمونیست می‌شدند.' } },
      { q: { en: 'In 1949, the US and Western Europe formed NATO. What was it?', es: 'En 1949, Estados Unidos y Europa Occidental formaron la OTAN. ¿Qué era?', fa: 'در ۱۹۴۹، امریکا و اروپای غربی ناتو را ساختند. ناتو چه بود؟' },
        choices: [
          { en: 'A promise to defend each other', es: 'Una promesa de defenderse entre sí', fa: 'وعدهٔ دفاع از همدیگر' },
          { en: 'A plan to send rockets to the Moon', es: 'Un plan para mandar cohetes a la Luna', fa: 'نقشه‌ای برای فرستادن راکت به ماه' },
          { en: 'A Soviet group of communist countries', es: 'Un grupo soviético de países comunistas', fa: 'گروه شوروی از کشورهای کمونیست' },
          { en: 'A trade deal for wheat and cotton', es: 'Un trato de comercio de trigo y algodón', fa: 'یک معاملهٔ تجارت گندم و پنبه' }],
        answer: 0,
        why: { en: 'An attack on one member counted as an attack on all. The Soviets formed the Warsaw Pact in 1955.', es: 'Un ataque a un miembro contaba como ataque a todos. Los soviéticos formaron el Pacto de Varsovia en 1955.', fa: 'حمله به یک عضو حمله به همه حساب می‌شد. شوروی در ۱۹۵۵ پیمان وارسا را ساخت.' } },
      { q: { en: 'What happened in China in 1949?', es: '¿Qué pasó en China en 1949?', fa: 'در ۱۹۴۹ در چین چه شد؟' },
        choices: [
          { en: 'Mao Zedong\'s Communists took power', es: 'Los comunistas de Mao Zedong tomaron el poder', fa: 'کمونیست‌های مائو تسه‌دونگ قدرت را گرفتند' },
          { en: 'China joined NATO with the US', es: 'China entró en la OTAN con EE. UU.', fa: 'چین با امریکا عضو ناتو شد' },
          { en: 'China sent the first person into space', es: 'China mandó a la primera persona al espacio', fa: 'چین اولین انسان را به فضا فرستاد' },
          { en: 'China became a colony of Britain', es: 'China se volvió colonia de Gran Bretaña', fa: 'چین مستعمرهٔ بریتانیا شد' }],
        answer: 0,
        why: { en: 'Mao\'s Communists won a civil war. Many Americans feared communism was spreading in Asia.', es: 'Los comunistas de Mao ganaron una guerra civil. Muchos temían que el comunismo creciera en Asia.', fa: 'کمونیست‌های مائو در جنگ داخلی پیروز شدند. بسیاری امریکایی‌ها ترسیدند کمونیزم در آسیا پخش شود.' } },
      { q: { en: 'How did the Korean War end in 1953?', es: '¿Cómo terminó la guerra de Corea en 1953?', fa: 'جنگ کوریا در ۱۹۵۳ چطور تمام شد؟' },
        choices: [
          { en: 'An armistice; Korea stayed divided', es: 'Un armisticio; Corea siguió dividida', fa: 'آتش‌بس؛ کوریا تقسیم ماند' },
          { en: 'The North took all of Korea forever', es: 'El Norte tomó toda Corea para siempre', fa: 'شمال تمام کوریا را برای همیشه گرفت' },
          { en: 'South Korea took over the North', es: 'Corea del Sur tomó el Norte', fa: 'کوریای جنوبی شمال را گرفت' },
          { en: 'Korea joined the Soviet Union', es: 'Corea se unió a la Unión Soviética', fa: 'کوریا عضو اتحاد شوروی شد' }],
        answer: 0,
        why: { en: 'Fighting stopped near the 38th parallel. Korea is still split into North and South today.', es: 'La pelea se detuvo cerca del paralelo 38. Corea sigue dividida en Norte y Sur hoy.', fa: 'جنگ نزدیک مدار ۳۸ درجه بس شد. کوریا امروز هم به شمال و جنوب تقسیم است.' } },
      { q: { en: 'What did the US do after the Soviets launched Sputnik in 1957?', es: '¿Qué hizo Estados Unidos después de que los soviéticos lanzaran el Sputnik en 1957?', fa: 'بعد از این‌که شوروی در ۱۹۵۷ اسپوتنیک را فرستاد، امریکا چه کرد؟' },
        choices: [
          { en: 'Made NASA and taught more science', es: 'Creó la NASA y enseñó más ciencias', fa: 'ناسا را ساخت و ساینس بیشتر درس داد' },
          { en: 'Stopped all of its work on rockets', es: 'Dejó todo su trabajo con cohetes', fa: 'تمام کار راکت‌سازی را بس کرد' },
          { en: 'Gave its rockets to the Soviets', es: 'Les dio sus cohetes a los soviéticos', fa: 'راکت‌هایش را به شوروی داد' },
          { en: 'Closed every school for a year', es: 'Cerró todas las escuelas por un año', fa: 'همهٔ مکتب‌ها را یک سال بست' }],
        answer: 0,
        why: { en: 'Americans feared falling behind. NASA began in 1958, and schools taught more science and math.', es: 'Los estadounidenses temían quedarse atrás. La NASA empezó en 1958 y las escuelas enseñaron más ciencias.', fa: 'امریکایی‌ها ترسیدند عقب بمانند. ناسا در ۱۹۵۸ شروع شد و مکتب‌ها ساینس و ریاضی بیشتر درس دادند.' } },
      { q: { en: 'During the Red Scare, what was McCarthyism?', es: 'Durante el Temor Rojo, ¿qué era el macartismo?', fa: 'در زمان ترس سرخ، مک‌کارتیزم چه بود؟' },
        choices: [
          { en: 'Calling people communists without proof', es: 'Llamar comunista a la gente sin pruebas', fa: 'کمونیست خواندن مردم بدون ثبوت' },
          { en: 'A plan that sent food to Europe', es: 'Un plan que mandó comida a Europa', fa: 'نقشه‌ای که به اروپا غذا فرستاد' },
          { en: 'A new way to build rockets in space', es: 'Una nueva forma de hacer cohetes en el espacio', fa: 'راه نو برای ساختن راکت در فضا' },
          { en: 'A treaty that ended the fighting in Korea', es: 'Un tratado que terminó la pelea en Corea', fa: 'پیمانی که جنگ کوریا را ختم کرد' }],
        answer: 0,
        why: { en: 'Senator McCarthy made many false charges. People lost jobs, though most had done nothing wrong.', es: 'El senador McCarthy hizo muchas acusaciones falsas. Gente perdió su trabajo sin haber hecho nada malo.', fa: 'سناتور مک‌کارتی تهمت‌های دروغ زیادی زد. مردم کار خود را از دست دادند، با این‌که کار بدی نکرده بودند.' } },
      { q: { en: 'In October 1962, what did President Kennedy do about the missiles in Cuba?', es: 'En octubre de 1962, ¿qué hizo el presidente Kennedy con los misiles en Cuba?', fa: 'در اکتوبر ۱۹۶۲، رئیس‌جمهور کندی دربارهٔ راکت‌های کیوبا چه کرد؟' },
        choices: [
          { en: 'Ordered a naval quarantine of Cuba', es: 'Ordenó una cuarentena naval de Cuba', fa: 'دستور محاصرهٔ بحری کیوبا را داد' },
          { en: 'Bombed the city of Moscow that night', es: 'Bombardeó la ciudad de Moscú esa noche', fa: 'همان شب شهر مسکو را بمباران کرد' },
          { en: 'Gave Cuba to the Soviet Union', es: 'Le dio Cuba a la Unión Soviética', fa: 'کیوبا را به اتحاد شوروی داد' },
          { en: 'Moved the Pentagon down to Florida', es: 'Llevó el Pentágono a Florida', fa: 'پنتاگون را به فلوریدا برد' }],
        answer: 0,
        why: { en: 'Navy ships blocked weapons from reaching Cuba. After 13 days, the Soviets agreed to remove the missiles.', es: 'Barcos de la Marina bloquearon las armas hacia Cuba. Después de 13 días, los soviéticos sacaron los misiles.', fa: 'کشتی‌های بحری راه سلاح به کیوبا را بستند. بعد از ۱۳ روز، شوروی قبول کرد راکت‌ها را ببرد.' } }
    ]
  },

  learned: [
    { en: 'In the [[cold war|Cold War]], the US and the Soviets competed. The US used [[containment|containment]], the [[marshall plan|Marshall Plan]] and [[nato|NATO]].', es: 'En la [[cold war|Guerra Fría]], EE. UU. y los soviéticos competían. EE. UU. usó la [[containment|contención]], el [[marshall plan|Plan Marshall]] y la [[nato|OTAN]].', fa: 'در [[cold war|جنگ سرد]]، امریکا و شوروی رقابت کردند. امریکا [[containment|سیاست مهار]]، [[marshall plan|طرح مارشال]] و [[nato|ناتو]] را به کار برد.' },
    { en: 'China became communist in 1949. The Korean War ended in an [[armistice|armistice]] in 1953. Korea is still divided.', es: 'China se volvió comunista en 1949. La guerra de Corea terminó en un [[armistice|armisticio]] en 1953. Corea sigue dividida.', fa: 'چین در ۱۹۴۹ کمونیست شد. جنگ کوریا در ۱۹۵۳ با [[armistice|آتش‌بس]] تمام شد. کوریا هنوز تقسیم است.' },
    { en: 'The [[arms race|arms race]] and [[space race|space race]] brought fear and new science. The Cold War ended in 1991.', es: 'La [[arms race|carrera armamentista]] y la [[space race|carrera espacial]] trajeron miedo y nueva ciencia. La Guerra Fría terminó en 1991.', fa: '[[arms race|مسابقهٔ تسلیحاتی]] و [[space race|مسابقهٔ فضایی]] ترس و ساینس نو آوردند. جنگ سرد در ۱۹۹۱ تمام شد.' }
  ],
  reflect: {
    q: { en: 'In 1962, many people felt afraid. What helps you stay calm when the news is scary?', es: 'En 1962, mucha gente tenía miedo. ¿Qué te ayuda a estar tranquilo cuando las noticias asustan?', fa: 'در ۱۹۶۲، بسیاری مردم می‌ترسیدند. وقتی خبرها ترسناک است، چه چیز به تو کمک می‌کند آرام بمانی؟' },
    starter: { en: 'When the news is scary, I', es: 'Cuando las noticias asustan, yo', fa: 'وقتی خبرها ترسناک است، من' }
  }
};
