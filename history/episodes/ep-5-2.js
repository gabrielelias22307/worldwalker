/* TIMEWALKER · Episode 5.2 · Nationalism: Italy and Germany unite (WHII)
   Two capitals in 1871, with the Alps between them.
   North half: Berlin, the new capital of the German Empire. Unter den Linden (the paved avenue, row 5) with
   linden trees (T), the Brandenburg Gate (the stone pillars at x 12), houses and the railway station (J).
   Rows 9-11: the Alps (A, M), crossed by one pass (x 13-14). Row 12: Rome's old city wall with the Porta Pia gate,
   where Italian soldiers entered Rome in 1870. South half: Rome, the new capital of Italy. The Tiber river (~) with a
   bridge (b) and the river docks (k), the Quirinal Palace (Q over h) on its square (l), a fountain (O) and the
   Colosseum (D, open on the south side). */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'WHII',
  title: { en: 'Nationalism', es: 'El nacionalismo', fa: 'ملی‌گرایی' },
  place: { en: 'Berlin and Rome, 1871', es: 'Berlín y Roma, 1871', fa: 'برلین و روم، ۱۸۷۱' },
  intro: [
    { en: 'The Grump tore the [[nationalism|nationalism]] page. People forgot how Italy and Germany became nations.',
      es: 'El Gruñón rompió la página del [[nationalism|nacionalismo]]. La gente olvidó cómo Italia y Alemania se hicieron naciones.',
      fa: 'غرغرو صفحهٔ [[nationalism|ملی‌گرایی]] را پاره کرد. مردم فراموش کردند ایتالیا و آلمان چطور ملت شدند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: the Alps between Germany and Italy on the world map, 1871 on the timeline */
  scenes: {
    at: [11, 47],
    year: 1871,
    start: [
      { en: 'In 1850, Italy and Germany were not countries. Each was many small states.',
        es: 'En 1850, Italia y Alemania no eran países. Cada una era muchos estados pequeños.',
        fa: 'در ۱۸۵۰، ایتالیا و آلمان کشور نبودند. هر کدام چندین ایالت کوچک بود.' },
      { en: 'Many people wanted one nation for everyone who shared a language and history.',
        es: 'Mucha gente quería una nación para todos los que compartían idioma e historia.',
        fa: 'مردم زیاد یک ملت برای همهٔ کسانی می‌خواستند که زبان و تاریخ مشترک داشتند.' },
      { en: 'By 1871, both Italy and Germany were united nations.',
        es: 'Para 1871, Italia y Alemania ya eran naciones unidas.',
        fa: 'تا سال ۱۸۷۱، ایتالیا و آلمان هر دو ملت‌های متحد شدند.' }
    ],
    page: { en: 'Soon the new Germany had more coal, steel and railways than almost anyone.',
      es: 'Pronto la nueva Alemania tuvo más carbón, acero y trenes que casi nadie.',
      fa: 'زود آلمان نو از تقریباً همه بیشتر ذغال، فولاد و خط آهن داشت.' },
    guess: {
      q: { en: 'Before 1861, was Italy one country?', es: 'Antes de 1861, ¿Italia era un solo país?', fa: 'پیش از ۱۸۶۱، آیا ایتالیا یک کشور بود؟' },
      choices: [
        { t: { en: '🧩 No, many states', es: '🧩 No, muchos estados', fa: '🧩 نه، چندین ایالت' }, ok: true },
        { t: { en: '🗺️ Yes, one country', es: '🗺️ Sí, un solo país', fa: '🗺️ بله، یک کشور' } }
      ],
      why: { en: 'Italy was split into many states. Austria ruled some, and the Pope ruled Rome.', es: 'Italia estaba dividida en muchos estados. Austria gobernaba algunos y el Papa gobernaba Roma.', fa: 'ایتالیا به چندین ایالت تقسیم بود. اتریش بر بعضی حکومت می‌کرد و پاپ بر روم.' }
    },
    next: {
      q: { en: 'Next: imperialism. Did Africans choose to be ruled by Europe?', es: 'Ahora: el imperialismo. ¿Los africanos eligieron ser gobernados por Europa?', fa: 'بعدی: امپریالیزم. آیا افریقایی‌ها خودشان حکومت اروپا را انتخاب کردند؟' },
      choices: [
        { t: { en: 'No, it was forced', es: 'No, fue a la fuerza', fa: 'نه، به زور بود' }, ok: true },
        { t: { en: 'Yes, they chose it', es: 'Sí, lo eligieron', fa: 'بله، خودشان خواستند' } }
      ],
      why: { en: 'European armies took most of Africa by force. Many Africans fought back.', es: 'Los ejércitos europeos tomaron casi toda África a la fuerza. Muchos africanos resistieron.', fa: 'لشکرهای اروپایی بیشتر افریقا را به زور گرفتند. افریقایی‌های زیاد مقاومت کردند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [4, 2], name: { en: 'Frau Weber', es: 'Señora Weber', fa: 'خانم وِبر' },
      look: { skin: 0, hair: '#b08a50', shirt: '#6a3a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I bake bread. My son marched to France with the Prussian army.', es: 'Hago pan. Mi hijo marchó a Francia con el ejército prusiano.', fa: 'من نان می‌پزم. پسرم با لشکر پروس به فرانسه رفت.' },
        { en: 'He came home. But many families on this street lost a son in that war.', es: 'Él volvió a casa. Pero muchas familias de esta calle perdieron un hijo en esa guerra.', fa: 'او به خانه برگشت. اما خانواده‌های زیاد این کوچه در آن جنگ پسر خود را از دست دادند.' }
      ] },
    { at: [25, 2], name: { en: 'Mr. Levi', es: 'Señor Levi', fa: 'آقای لوی' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#2a3a5a', pants: '#2a2a2a', hat: '#1a1a1a' },
      lines: [
        { en: 'I sell books. In the new empire, Jews like me have equal rights by law.', es: 'Vendo libros. En el nuevo imperio, los judíos como yo tenemos los mismos derechos por ley.', fa: 'من کتاب می‌فروشم. در امپراتوری نو، یهودیان مثل من به حکم قانون حق برابر دارند.' },
        { en: 'I hope this new nation keeps room for everyone.', es: 'Espero que esta nación nueva tenga lugar para todos.', fa: 'امیدوارم این ملت نو برای همه جا داشته باشد.' }
      ] },
    { at: [3, 15], name: { en: 'Signora Concetta', es: 'Señora Concetta', fa: 'خانم کونچتا' },
      look: { skin: 3, hair: '#1a1008', shirt: '#2a6a5a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'I came from Sicily. At home I speak Sicilian, not the Italian of books.', es: 'Vine a Roma desde Sicilia. En casa hablo siciliano, no el italiano de los libros.', fa: 'من از سیسیل به روم آمدم. در خانه سیسیلی گپ می‌زنم، نه ایتالیایی کتاب‌ها.' },
        { en: 'A leader said: "We have made Italy. Now we must make Italians."', es: 'Un líder dijo: "Hemos hecho Italia. Ahora debemos hacer a los italianos".', fa: 'یک رهبر گفت: «ما ایتالیا را ساختیم. حالا باید ایتالیایی‌ها را بسازیم.»' }
      ] },
    { at: [16, 16], name: { en: 'Giulia', es: 'Giulia', fa: 'جولیا' },
      look: { skin: 2, hair: '#3a2416', shirt: '#f2f2f2', pants: '#5a2a2a', style: 'bun' },
      lines: [
        { en: 'I cook in the Quirinal Palace. The king moved in this year, 1871.', es: 'Cocino en el Palacio del Quirinal. El rey se mudó aquí este año, 1871.', fa: 'من در قصر کوئیرینال آشپزی می‌کنم. پادشاه امسال، ۱۸۷۱، به اینجا آمد.' },
        { en: 'Before 1870, this palace belonged to the Pope. Rome was his city.', es: 'Antes de 1870, este palacio era del Papa. Roma era su ciudad.', fa: 'پیش از ۱۸۷۰، این قصر مال پاپ بود. روم شهر او بود.' }
      ] },
    { at: [3, 19], name: { en: 'Father Tommaso', es: 'Padre Tommaso', fa: 'پدر توماسو' },
      look: { skin: 2, hair: '#6a6a6a', shirt: '#1a1a1a', pants: '#1a1a1a', robe: true, style: 'short' },
      lines: [
        { en: 'For over a thousand years, the Pope ruled Rome and the lands around it.', es: 'Durante más de mil años, el Papa gobernó Roma y las tierras de alrededor.', fa: 'بیش از هزار سال، پاپ بر روم و زمین‌های اطراف آن حکومت کرد.' },
        { en: 'Now the Pope stays inside the Vatican. He does not accept the new kingdom.', es: 'Ahora el Papa se queda en el Vaticano. No acepta el nuevo reino.', fa: 'حالا پاپ داخل واتیکان می‌ماند. او پادشاهی نو را قبول ندارد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North: Berlin. Rows 9-11: the Alps with one pass (x 13-14).
     Row 12: Rome's wall with the Porta Pia gate. South: Rome. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.RRRR..QQQ......RRRR..QQQQ....W',
    'W.hhdh..hhh......hhhh..hhdh....W',
    'W...........W..................W',
    'W.T.T.T.T.T.W.T.T.T.T..........W',
    'WllllllllllllllllllllllllllllllW',
    'W.T.T.T.T.T.W.T.T.T.T...JJJJ...W',
    'W...........W...........JJJJ...W',
    'W.x................------------W',
    'WAAAAAMMMMMMM::MMMMMMMMMAAAAAAAW',
    'WAAAAMMMMMMMM::MMMMMMMMMMAAAAAAW',
    'WMMMMMMMMMMMM::MMMMMMMMMMMMMMMMW',
    'WWWWWWWWWWWWW..WWWWWWWWWWWWWWWWW',
    'W.......~~...::................W',
    'W.RRR...~~..llllllllll..DDDDD..W',
    'W.hdh...~~..l.QQQQQ.l...D...D..W',
    'W.......bb..l.hhdhh.l...D...D..W',
    'W.......~~..lllllllll...DD.DD..W',
    'W.RRR...~~k.......O.........x..W',
    'W.hdh...~~k....................W',
    'W.......~~.....,......,........W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [20, 19],

  finds: [
    { clueAt: [17, 3], at: [22, 4], decor: 'flower',
      clue: { en: 'From this note, walk 5 steps east, then 1 step south. Look under the open sky.', es: 'Desde esta nota, camina 5 pasos al este y luego 1 paso al sur. Busca bajo el cielo abierto.', fa: 'از این یادداشت، ۵ قدم به شرق و بعد ۱ قدم به جنوب برو. زیر آسمان باز را ببین.' },
      text: { en: 'Linden trees line this avenue, Unter den Linden. Here is a dried linden flower.', es: 'Los tilos bordean esta avenida, Unter den Linden. Aquí hay una flor de tilo seca.', fa: 'درختان زیرفون دو طرف این خیابان، اونتر دن لیندن، هستند. اینجا یک گل خشک زیرفون است.' } },
    { clueAt: [12, 20], at: [10, 18], decor: 'coinold',
      clue: { en: 'From this note, walk north and west to the river docks. Stand on the lower dock.', es: 'Desde esta nota, camina al norte y al oeste hasta el muelle del río. Párate en el muelle de abajo.', fa: 'از این یادداشت، به شمال و غرب تا بندرگاه دریا برو. روی بندرگاه پایینی بایست.' },
      text: { en: 'In 1862 the new kingdom made one money for all Italy: the lira. Here is an old coin.', es: 'En 1862 el nuevo reino hizo una sola moneda para toda Italia: la lira. Aquí hay una moneda antigua.', fa: 'در ۱۸۶۲ پادشاهی نو یک پول برای همهٔ ایتالیا ساخت: لیره. اینجا یک سکهٔ کهنه است.' } }
  ],

  words: {
    nationalism: { en: 'strong pride in your nation, and the wish for people who share a language and history to rule themselves', es: 'orgullo fuerte por tu nación y el deseo de que la gente que comparte idioma e historia se gobierne sola', fa: 'افتخار قوی به ملت خود، و آرزوی اینکه مردمی که زبان و تاریخ مشترک دارند خودشان حکومت کنند' },
    unification: { en: 'joining many small states into one country', es: 'unir muchos estados pequeños en un solo país', fa: 'یکجا کردن چندین ایالت کوچک در یک کشور' },
    empire: { en: 'a large state ruled by one ruler, an emperor; Germany\'s emperor was called the Kaiser', es: 'un estado grande gobernado por un emperador; al de Alemania lo llamaban el Káiser', fa: 'یک دولت بزرگ زیر حکم یک امپراتور؛ امپراتور آلمان را قیصر می‌گفتند' },
    capital: { en: 'the city where a country\'s government and leaders work', es: 'la ciudad donde trabajan el gobierno y los líderes de un país', fa: 'شهری که حکومت و رهبران یک کشور در آن کار می‌کنند' },
    minority: { en: 'a smaller group in a country, with a different language, religion or culture', es: 'un grupo más pequeño en un país, con otro idioma, religión o cultura', fa: 'یک گروه کوچک‌تر در یک کشور، با زبان، دین یا فرهنگ دیگر' },
    volunteer: { en: 'a person who chooses to help or fight without being forced', es: 'una persona que elige ayudar o luchar sin que la obliguen', fa: 'کسی که بدون اجبار، خودش کمک یا جنگ را انتخاب می‌کند' }
  },

  npcs: [
    {
      x: 6, y: 7,
      name: { en: 'Greta', es: 'Greta', fa: 'گرتا' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 0, hair: '#d8b060', shirt: '#3a5a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to Berlin! In January 1871, the German [[empire|Empire]] was announced.', es: '¡Bienvenido a Berlín! En enero de 1871 se anunció el [[empire|Imperio]] alemán.', fa: 'به برلین خوش آمدی! در جنوری ۱۸۷۱، [[empire|امپراتوری]] آلمان اعلام شد.' },
        { en: 'Before that, Germans lived in many states, like Bavaria, Saxony and Prussia.', es: 'Antes, los alemanes vivían en muchos estados, como Baviera, Sajonia y Prusia.', fa: 'پیش از آن، آلمانی‌ها در چندین ایالت مثل باواریا، زاکسن و پروس زندگی می‌کردند.' },
        { en: 'Prussia\'s leader, Otto von Bismarck, won wars with Denmark, Austria and France.', es: 'El líder de Prusia, Otto von Bismarck, ganó guerras contra Dinamarca, Austria y Francia.', fa: 'رهبر پروس، اوتو فون بیسمارک، در جنگ با دنمارک، اتریش و فرانسه برنده شد.' },
        { en: 'He beat Austria in 1866 and France in 1870. He said: "by iron and blood."', es: 'Venció a Austria en 1866 y a Francia en 1870. Dijo: "con hierro y sangre".', fa: 'او در ۱۸۶۶ اتریش و در ۱۸۷۰ فرانسه را شکست داد. گفت: «با آهن و خون.»' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Bismarck said great questions are decided "by iron and blood." What did he mean?', es: 'Bismarck dijo que las grandes cuestiones se deciden "con hierro y sangre". ¿Qué quiso decir?', fa: 'بیسمارک گفت مسئله‌های بزرگ «با آهن و خون» حل می‌شوند. منظورش چه بود؟' },
        choices: [
          { ok: true, t: { en: 'By war and weapons, not speeches', es: 'Con guerra y armas, no con discursos', fa: 'با جنگ و سلاح، نه با سخنرانی' },
            why: { en: 'Yes. Iron means weapons, and blood means soldiers. He used war to unite Germany.', es: 'Sí. Hierro son las armas y sangre son los soldados. Usó la guerra para unir Alemania.', fa: 'بله. آهن یعنی سلاح و خون یعنی سربازان. او با جنگ آلمان را متحد کرد.' } },
          { t: { en: 'By building iron railways for all', es: 'Con ferrocarriles de hierro para todos', fa: 'با ساختن خط آهن برای همه' },
            why: { en: 'Germany did build railways, but this saying was about war, not trains.', es: 'Alemania sí construyó trenes, pero esta frase hablaba de la guerra, no de trenes.', fa: 'آلمان خط آهن ساخت، اما این گفته دربارهٔ جنگ بود، نه ریل.' } },
          { t: { en: 'By votes in a big, free election', es: 'Con votos en una gran elección libre', fa: 'با رأی در یک انتخابات بزرگ و آزاد' },
            why: { en: 'Bismarck said speeches and votes would NOT decide it. He chose war.', es: 'Bismarck dijo que los discursos y los votos NO lo decidirían. Eligió la guerra.', fa: 'بیسمارک گفت سخنرانی و رأی آن را حل نمی‌کند. او جنگ را انتخاب کرد.' } }
        ]
      }
    },
    {
      x: 20, y: 7,
      name: { en: 'Jan', es: 'Jan', fa: 'یان' },
      role: { en: 'Railway worker', es: 'Ferroviario', fa: 'کارگر خط آهن' },
      look: { skin: 1, hair: '#e3c26b', shirt: '#7a4a2a', pants: '#2b3a4a', hat: '#4a4a4a' },
      lines: [
        { en: 'Dzień dobry! That is hello in Polish. I fix tracks for the railway.', es: '¡Dzień dobry! Así se dice hola en polaco. Arreglo las vías del tren.', fa: 'جین دوبری! این در زبان پولندی یعنی سلام. من خط آهن را ترمیم می‌کنم.' },
        { en: '[[nationalism|Nationalism]] means people who share a language and history want one nation.', es: 'El [[nationalism|nacionalismo]] es cuando gente con el mismo idioma e historia quiere una nación.', fa: '[[nationalism|ملی‌گرایی]] یعنی مردمی که زبان و تاریخ مشترک دارند یک ملت می‌خواهند.' },
        { en: 'But I am Polish. Many Poles live in Prussia. We are a [[minority|minority]] here.', es: 'Pero yo soy polaco. Muchos polacos viven en Prusia. Aquí somos una [[minority|minoría]].', fa: 'اما من پولندی هستم. پولندی‌های زیاد در پروس زندگی می‌کنند. ما اینجا [[minority|اقلیت]] هستیم.' },
        { en: 'Some leaders want everyone here to be German. I feel left out.', es: 'Algunos líderes quieren que todos aquí sean alemanes. Me siento excluido.', fa: 'بعضی رهبران می‌خواهند همه اینجا آلمانی باشند. من خود را بیرون‌مانده حس می‌کنم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did some Poles in the new Germany feel left out?', es: '¿Por qué algunos polacos de la nueva Alemania se sentían excluidos?', fa: 'چرا بعضی پولندی‌ها در آلمان نو خود را بیرون‌مانده حس می‌کردند؟' },
        choices: [
          { ok: true, t: { en: 'The nation was built on German language', es: 'La nación se basaba en el idioma alemán', fa: 'ملت بر پایهٔ زبان آلمانی ساخته شد' },
            why: { en: 'Yes. A nation built on one language can push aside people who speak another.', es: 'Sí. Una nación basada en un idioma puede dejar de lado a quienes hablan otro.', fa: 'بله. ملتی که بر یک زبان ساخته شود، کسانی را که زبان دیگر دارند کنار می‌زند.' } },
          { t: { en: 'They were not allowed to work at all', es: 'No los dejaban trabajar para nada', fa: 'اصلاً اجازهٔ کار نداشتند' },
            why: { en: 'Jan has a job on the railway. The problem was language and belonging.', es: 'Jan tiene trabajo en el tren. El problema era el idioma y la pertenencia.', fa: 'یان در خط آهن کار دارد. مشکل زبان و تعلق بود.' } },
          { t: { en: 'Poland had just won a war with Germany', es: 'Polonia acababa de ganarle una guerra a Alemania', fa: 'پولند تازه جنگی را از آلمان برده بود' },
            why: { en: 'There was no Polish state in 1871. Its lands were ruled by Prussia, Russia and Austria.', es: 'En 1871 no había estado polaco. Sus tierras las gobernaban Prusia, Rusia y Austria.', fa: 'در ۱۸۷۱ دولت پولند وجود نداشت. پروس، روسیه و اتریش بر زمین‌هایش حکومت می‌کردند.' } }
        ]
      }
    },
    {
      x: 22, y: 19,
      name: { en: 'Lorenzo', es: 'Lorenzo', fa: 'لورنزو' },
      role: { en: 'Old Red Shirt', es: 'Viejo camisa roja', fa: 'پیراهن‌سرخ پیر' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#c0392b', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'Buongiorno! In 1860, I sailed south with Garibaldi and his Red Shirts.', es: '¡Buongiorno! En 1860 navegué al sur con Garibaldi y sus camisas rojas.', fa: 'بونجورنو! در ۱۸۶۰، با گاریبالدی و پیراهن‌سرخ‌هایش به جنوب رفتم.' },
        { en: 'We were about a thousand [[volunteer|volunteers]]. We won Sicily and Naples.', es: 'Éramos unos mil [[volunteer|voluntarios]]. Ganamos Sicilia y Nápoles.', fa: 'ما حدود هزار [[volunteer|داوطلب]] بودیم. سیسیل و ناپل را گرفتیم.' },
        { en: 'Garibaldi gave those lands to the king. In 1861, Italy became a kingdom.', es: 'Garibaldi le dio esas tierras al rey. En 1861, Italia se hizo un reino.', fa: 'گاریبالدی آن زمین‌ها را به پادشاه داد. در ۱۸۶۱، ایتالیا پادشاهی شد.' },
        { en: 'Venice joined in 1866. Rome joined last, in 1870. Now it is our [[capital|capital]].', es: 'Venecia se unió en 1866. Roma se unió al final, en 1870. Ahora es nuestra [[capital|capital]].', fa: 'ونیز در ۱۸۶۶ پیوست. روم در آخر، در ۱۸۷۰، پیوست. حالا [[capital|پایتخت]] ماست.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which city joined Italy last and then became its capital?', es: '¿Qué ciudad se unió a Italia al final y luego fue su capital?', fa: 'کدام شهر در آخر به ایتالیا پیوست و بعد پایتخت آن شد؟' },
        choices: [
          { ok: true, t: { en: 'Rome', es: 'Roma', fa: 'روم' },
            why: { en: 'Yes. Italian soldiers entered Rome in 1870. In 1871 it became the capital.', es: 'Sí. Los soldados italianos entraron en Roma en 1870. En 1871 fue la capital.', fa: 'بله. سربازان ایتالیایی در ۱۸۷۰ وارد روم شدند. در ۱۸۷۱ پایتخت شد.' } },
          { t: { en: 'Venice', es: 'Venecia', fa: 'ونیز' },
            why: { en: 'Venice joined in 1866, after Austria lost a war. Rome came later.', es: 'Venecia se unió en 1866, cuando Austria perdió una guerra. Roma vino después.', fa: 'ونیز در ۱۸۶۶، بعد از شکست اتریش، پیوست. روم بعدتر آمد.' } },
          { t: { en: 'Naples', es: 'Nápoles', fa: 'ناپل' },
            why: { en: 'Garibaldi\'s Red Shirts won Naples in 1860, early on. Rome joined last.', es: 'Los camisas rojas de Garibaldi ganaron Nápoles en 1860, al principio. Roma fue la última.', fa: 'پیراهن‌سرخ‌های گاریبالدی ناپل را در ۱۸۶۰، در اول کار، گرفتند. روم آخر پیوست.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 8, text: { en: 'BERLIN · 1871 · The capital of the new German Empire. Its emperor is Wilhelm I.', es: 'BERLÍN · 1871 · La capital del nuevo Imperio alemán. Su emperador es Guillermo I.', fa: 'برلین · ۱۸۷۱ · پایتخت امپراتوری نو آلمان. امپراتور آن ویلهلم اول است.' } },
    { x: 28, y: 18, text: { en: 'ROME · 1871 · The new capital of the Kingdom of Italy. Soldiers came in by the Porta Pia, 1870.', es: 'ROMA · 1871 · La nueva capital del Reino de Italia. Los soldados entraron por la Porta Pia, 1870.', fa: 'روم · ۱۸۷۱ · پایتخت نو پادشاهی ایتالیا. سربازان در ۱۸۷۰ از دروازهٔ پورتا پیا آمدند.' } }
  ],

  /* the quest: Maestra Bianca (SW, west of the river) -> Pietro the newspaper boy by the city gate (SE)
     -> chase: the Ink Thief's three pieces (the river docks, the palace square, Berlin's gate) -> caught in Berlin */
  quest: {
    stat: 'reg',
    title: { en: 'The Torn Map of Italy', es: 'El mapa roto de Italia', fa: 'نقشهٔ پاره‌شدهٔ ایتالیا' },
    giver: {
      x: 5, y: 17,
      name: { en: 'Maestra Bianca', es: 'Maestra Bianca', fa: 'معلم بیانکا' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2a7a4a', pants: '#3a2a2a', style: 'long' },
      lines: [
        { en: 'Help! I made a big map of the new Italy for my school.', es: '¡Ayuda! Hice un mapa grande de la nueva Italia para mi escuela.', fa: 'کمک! برای مکتبم یک نقشهٔ بزرگ ایتالیای نو ساختم.' },
        { en: 'The Ink Thief tore it to pieces! Pietro the newspaper boy saw it.', es: '¡El Ladrón de Tinta lo rompió en pedazos! Pietro, el niño de los periódicos, lo vio.', fa: 'دزد رنگ آن را تکه تکه کرد! پیترو، پسر روزنامه‌فروش، آن را دید.' },
        { en: 'Cross the bridge east. Pietro sells papers by the city gate.', es: 'Cruza el puente hacia el este. Pietro vende periódicos junto a la puerta de la ciudad.', fa: 'از پل به شرق بگذر. پیترو کنار دروازهٔ شهر روزنامه می‌فروشد.' }
      ],
      wait: { en: 'Pietro is by the city gate, east of the river.', es: 'Pietro está junto a la puerta de la ciudad, al este del río.', fa: 'پیترو کنار دروازهٔ شهر، شرق دریا است.' },
      thanks: { en: 'My map is whole! Italy is one country now, from the Alps to Sicily.', es: '¡Mi mapa está completo! Italia ya es un país, de los Alpes a Sicilia.', fa: 'نقشه‌ام کامل شد! ایتالیا حالا یک کشور است، از الپ تا سیسیل.' }
    },
    contact: {
      x: 20, y: 13,
      name: { en: 'Pietro', es: 'Pietro', fa: 'پیترو' },
      role: { en: 'Newspaper boy', es: 'Vendedor de periódicos', fa: 'پسر روزنامه‌فروش' },
      look: { skin: 3, hair: '#1a1208', shirt: '#e0c080', pants: '#3a3a3a', hat: '#5a3a22' },
      lines: [
        { en: 'News! People say Mazzini was the soul, Cavour the brain, and Garibaldi the sword.', es: '¡Noticias! Dicen que Mazzini fue el alma, Cavour el cerebro y Garibaldi la espada.', fa: 'خبر! مردم می‌گویند مازینی روح، کاوور مغز و گاریبالدی شمشیر بود.' },
        { en: 'I saw the Ink Thief! It hid the 3 pieces of the map.', es: '¡Vi al Ladrón de Tinta! Escondió los 3 pedazos del mapa.', fa: 'دزد رنگ را دیدم! سه تکهٔ نقشه را پنهان کرد.' },
        { en: 'Follow its riddles about how Italy was made. Then catch it!', es: 'Sigue sus acertijos sobre cómo se hizo Italia. ¡Después atrápalo!', fa: 'چیستان‌هایش را دربارهٔ ساخته شدن ایتالیا دنبال کن. بعد آن را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 4],
      hops: [[15, 3], [22, 3]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief cackles: "One Italy? I tore it back into pieces! Follow my riddles!"',
        es: 'El Ladrón de Tinta se ríe: "¿Una Italia? ¡La volví a romper en pedazos! ¡Sigue mis acertijos!"',
        fa: 'دزد رنگ می‌خندد: «یک ایتالیا؟ دوباره تکه تکه‌اش کردم! چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1: Garibaldi\'s Red Shirts traveled by ship. Look on Rome\'s river docks.',
            es: 'Pedazo 1: Los camisas rojas de Garibaldi viajaron en barco. Busca en el muelle del río de Roma.',
            fa: 'تکهٔ ۱: پیراهن‌سرخ‌های گاریبالدی با کشتی سفر کردند. در بندرگاه دریای روم ببین.' },
          zones: [{ x: 10, y: 17, w: 2, h: 3 }],
          noBy: [{ x: 25, y: 15, w: 3, h: 3, t: { en: 'This is the Colosseum, from ancient Rome. No ship can land here. Look by the river.', es: 'Este es el Coliseo, de la antigua Roma. Ningún barco llega aquí. Busca junto al río.', fa: 'این کولوسئوم از روم باستان است. کشتی اینجا نمی‌رسد. کنار دریا را ببین.' } }],
          found: { en: 'Piece 1, on the docks! The Red Shirts sailed to Sicily in 1860.', es: '¡El pedazo 1, en el muelle! Los camisas rojas navegaron a Sicilia en 1860.', fa: 'تکهٔ ۱ در بندرگاه! پیراهن‌سرخ‌ها در ۱۸۶۰ به سیسیل رفتند.' } },
        { t: { en: 'Piece 2: The king now lives in Rome, the new capital. Look on his palace square.',
            es: 'Pedazo 2: El rey ahora vive en Roma, la nueva capital. Busca en la plaza de su palacio.',
            fa: 'تکهٔ ۲: پادشاه حالا در روم، پایتخت نو، زندگی می‌کند. در میدان قصرش ببین.' },
          zones: [{ x: 12, y: 17, w: 9, h: 2 }],
          noBy: [{ x: 10, y: 17, w: 2, h: 3, t: { en: 'These docks are for boats. The king lives in the palace by the big square.', es: 'Este muelle es para barcos. El rey vive en el palacio junto a la plaza grande.', fa: 'این بندرگاه برای کشتی است. پادشاه در قصر کنار میدان بزرگ زندگی می‌کند.' } }],
          found: { en: 'Piece 2, by the palace! King Victor Emmanuel II moved to Rome in 1871.', es: '¡El pedazo 2, junto al palacio! El rey Víctor Manuel II se mudó a Roma en 1871.', fa: 'تکهٔ ۲ کنار قصر! پادشاه ویکتور امانوئل دوم در ۱۸۷۱ به روم آمد.' } },
        { t: { en: 'Piece 3 blew north over the Alps, to Germany\'s new capital. Look by its great gate.',
            es: 'El pedazo 3 voló al norte, sobre los Alpes, a la nueva capital de Alemania. Busca junto a su gran puerta.',
            fa: 'تکهٔ ۳ به شمال، از روی الپ، به پایتخت نو آلمان پرید. کنار دروازهٔ بزرگش ببین.' },
          zones: [{ x: 10, y: 3, w: 5, h: 5 }],
          noBy: [{ x: 12, y: 17, w: 9, h: 2, t: { en: 'This is Rome, Italy\'s capital. Germany\'s capital, Berlin, is north of the Alps.', es: 'Esto es Roma, la capital de Italia. La capital de Alemania, Berlín, está al norte de los Alpes.', fa: 'این روم، پایتخت ایتالیا است. پایتخت آلمان، برلین، شمال الپ است.' } }],
          found: { en: 'Piece 3, by the Brandenburg Gate! Germany united in the same years as Italy.', es: '¡El pedazo 3, junto a la Puerta de Brandeburgo! Alemania se unió en los mismos años que Italia.', fa: 'تکهٔ ۳ کنار دروازهٔ براندنبورگ! آلمان در همان سال‌های ایتالیا متحد شد.' } }
      ],
      win: { en: 'Got you! The Ink Thief drops the pieces and runs. The map of Italy is whole again.',
        es: '¡Te atrapé! El Ladrón de Tinta suelta los pedazos y huye. El mapa de Italia está completo otra vez.',
        fa: 'گرفتمت! دزد رنگ تکه‌ها را می‌اندازد و فرار می‌کند. نقشهٔ ایتالیا دوباره کامل است.' },
      item: { icon: '🗺️', name: { en: 'Bianca\'s map of Italy', es: 'El mapa de Italia de Bianca', fa: 'نقشهٔ ایتالیای بیانکا' } }
    }
  },

  scraps: [[1, 1], [26, 16], [1, 13]],
  smudges: [[6, 13], [27, 3]],

  /* the time stone: a timeline walked on the map. Stops in Rome and Berlin, oldest first */
  challenge: {
    at: [3, 7],
    type: 'route', // in the world; the card version (order) is the fallback
    spots: [[11, 20], [21, 15], [28, 7], [16, 13], [9, 3]],
    stat: 'pla',
    title: { en: 'Two Nations Are Born', es: 'Nacen dos naciones', fa: 'دو ملت به دنیا می‌آیند' },
    intro: { en: 'The Grump mixed up the timeline! Walk to the 5 events in order, oldest first.',
      es: '¡El Gruñón revolvió la línea del tiempo! Camina a los 5 hechos en orden, del más antiguo al más nuevo.',
      fa: 'غرغرو خط زمان را درهم کرد! به ترتیب به ۵ رویداد برو، از کهنه‌ترین شروع کن.' },
    items: [
      { icon: '⛵', t: { en: 'Garibaldi\'s Red Shirts win Sicily and Naples', es: 'Los camisas rojas de Garibaldi ganan Sicilia y Nápoles', fa: 'پیراهن‌سرخ‌های گاریبالدی سیسیل و ناپل را می‌گیرند' } },
      { icon: '👑', t: { en: 'The Kingdom of Italy is born', es: 'Nace el Reino de Italia', fa: 'پادشاهی ایتالیا به وجود می‌آید' } },
      { icon: '⚔️', t: { en: 'Prussia defeats Austria in a short war', es: 'Prusia vence a Austria en una guerra corta', fa: 'پروس در یک جنگ کوتاه اتریش را شکست می‌دهد' } },
      { icon: '🏛️', t: { en: 'Italian soldiers enter Rome by the Porta Pia', es: 'Soldados italianos entran en Roma por la Porta Pia', fa: 'سربازان ایتالیایی از پورتا پیا وارد روم می‌شوند' } },
      { icon: '🦅', t: { en: 'The German Empire is announced', es: 'Se anuncia el Imperio alemán', fa: 'امپراتوری آلمان اعلام می‌شود' } }
    ],
    why: { en: '1860: Garibaldi wins the south. 1861: the Kingdom of Italy. 1866: Prussia beats Austria. 1870: Rome. January 1871: the German Empire.',
      es: '1860: Garibaldi gana el sur. 1861: el Reino de Italia. 1866: Prusia vence a Austria. 1870: Roma. Enero de 1871: el Imperio alemán.',
      fa: '۱۸۶۰: گاریبالدی جنوب را می‌گیرد. ۱۸۶۱: پادشاهی ایتالیا. ۱۸۶۶: پروس اتریش را شکست می‌دهد. ۱۸۷۰: روم. جنوری ۱۸۷۱: امپراتوری آلمان.' },
    success: { en: 'The timeline is right again! In just eleven years, two new nations were born.', es: '¡La línea del tiempo está bien otra vez! En solo once años nacieron dos naciones nuevas.', fa: 'خط زمان دوباره درست شد! فقط در یازده سال، دو ملت نو به دنیا آمدند.' }
  },

  boss: {
    at: [25, 20],
    stat: 'reg',
    need: 3,
    name: { en: 'The Border Grump', es: 'El Gruñón de las Fronteras', fa: 'غرغروی سرحدها' },
    appear: { en: 'The Border Grump is hiding behind the old walls of the Colosseum!', es: '¡El Gruñón de las Fronteras se esconde tras los viejos muros del Coliseo!', fa: 'غرغروی سرحدها پشت دیوارهای کهنهٔ کولوسئوم پنهان است!' },
    taunt: { en: 'I love borders! I will split these lands back into tiny pieces!', es: '¡Me encantan las fronteras! ¡Partiré estas tierras otra vez en pedacitos!', fa: 'من سرحد را دوست دارم! این سرزمین‌ها را دوباره تکه‌های کوچک می‌کنم!' },
    win: { en: 'The borders fade away. Chronicle page 5.2 floats down into your hands!', es: 'Las fronteras se borran. ¡La página 5.2 de la crónica cae en tus manos!', fa: 'سرحدها محو می‌شوند. صفحهٔ ۵.۲ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is nationalism?', es: '¿Qué es el nacionalismo?', fa: 'ملی‌گرایی چیست؟' },
        choices: [
          { en: 'Pride in a nation, and wanting it to rule itself', es: 'Orgullo por una nación y querer que se gobierne sola', fa: 'افتخار به ملت و خواستن حکومت خودش' },
          { en: 'A plan to share all land and money equally', es: 'Un plan para repartir tierras y dinero por igual', fa: 'نقشه‌ای برای تقسیم برابر زمین و پول' },
          { en: 'Rule by one king who has total power over all', es: 'El gobierno de un rey con todo el poder', fa: 'حکومت یک پادشاه با قدرت کامل بر همه' },
          { en: 'Trade between faraway lands by ship and rail', es: 'Comercio entre tierras lejanas por barco y tren', fa: 'تجارت میان سرزمین‌های دور با کشتی و ریل' }],
        answer: 0,
        why: { en: 'Nationalism joins people who share a language, history and land into one nation.', es: 'El nacionalismo une en una nación a la gente con el mismo idioma, historia y tierra.', fa: 'ملی‌گرایی مردمی را که زبان، تاریخ و سرزمین مشترک دارند، در یک ملت یکجا می‌کند.' } },
      { q: { en: 'Who led the Red Shirts and won southern Italy?', es: '¿Quién dirigió a los camisas rojas y ganó el sur de Italia?', fa: 'کی پیراهن‌سرخ‌ها را رهبری کرد و جنوب ایتالیا را گرفت؟' },
        choices: [
          { en: 'Giuseppe Garibaldi', es: 'Giuseppe Garibaldi', fa: 'جوزپه گاریبالدی' },
          { en: 'Otto von Bismarck', es: 'Otto von Bismarck', fa: 'اوتو فون بیسمارک' },
          { en: 'Giuseppe Mazzini', es: 'Giuseppe Mazzini', fa: 'جوزپه مازینی' },
          { en: 'Count Camillo di Cavour', es: 'El conde Camillo di Cavour', fa: 'کنت کامیلو دی کاوور' }],
        answer: 0,
        why: { en: 'Garibaldi and about a thousand volunteers won Sicily and Naples in 1860.', es: 'Garibaldi y unos mil voluntarios ganaron Sicilia y Nápoles en 1860.', fa: 'گاریبالدی و حدود هزار داوطلب در ۱۸۶۰ سیسیل و ناپل را گرفتند.' } },
      { q: { en: 'Which leader united Germany "by iron and blood"?', es: '¿Qué líder unió Alemania "con hierro y sangre"?', fa: 'کدام رهبر آلمان را «با آهن و خون» متحد کرد؟' },
        choices: [
          { en: 'Otto von Bismarck', es: 'Otto von Bismarck', fa: 'اوتو فون بیسمارک' },
          { en: 'Camillo di Cavour', es: 'Camillo di Cavour', fa: 'کامیلو دی کاوور' },
          { en: 'Napoleon Bonaparte', es: 'Napoleón Bonaparte', fa: 'ناپلئون بناپارت' },
          { en: 'Giuseppe Garibaldi', es: 'Giuseppe Garibaldi', fa: 'جوزپه گاریبالدی' }],
        answer: 0,
        why: { en: 'Bismarck led Prussia. He won three wars, then joined the German states.', es: 'Bismarck dirigía Prusia. Ganó tres guerras y luego unió los estados alemanes.', fa: 'بیسمارک رهبر پروس بود. سه جنگ را برد و بعد ایالت‌های آلمانی را یکجا کرد.' } },
      { q: { en: 'Which German state led the way to unification?', es: '¿Qué estado alemán guió la unificación?', fa: 'کدام ایالت آلمانی راه اتحاد را رهبری کرد؟' },
        choices: [
          { en: 'Prussia', es: 'Prusia', fa: 'پروس' },
          { en: 'Bavaria', es: 'Baviera', fa: 'باواریا' },
          { en: 'Austria', es: 'Austria', fa: 'اتریش' },
          { en: 'Saxony', es: 'Sajonia', fa: 'زاکسن' }],
        answer: 0,
        why: { en: 'Prussia had the strongest army and industry. Its king became the German emperor.', es: 'Prusia tenía el ejército y la industria más fuertes. Su rey fue el emperador alemán.', fa: 'پروس قوی‌ترین لشکر و صنعت را داشت. پادشاهش امپراتور آلمان شد.' } },
      { q: { en: 'Where was the German Empire announced in January 1871?', es: '¿Dónde se anunció el Imperio alemán en enero de 1871?', fa: 'امپراتوری آلمان در جنوری ۱۸۷۱ در کجا اعلام شد؟' },
        choices: [
          { en: 'In the palace of Versailles, France', es: 'En el palacio de Versalles, Francia', fa: 'در قصر ورسای، فرانسه' },
          { en: 'In the Colosseum in Rome, Italy', es: 'En el Coliseo de Roma, Italia', fa: 'در کولوسئوم روم، ایتالیا' },
          { en: 'In the city of Vienna, Austria', es: 'En la ciudad de Viena, Austria', fa: 'در شهر ویانا، اتریش' },
          { en: 'On a ship far out in the cold North Sea', es: 'En un barco lejos, en el frío mar del Norte', fa: 'روی کشتی، دور در بحر سرد شمال' }],
        answer: 0,
        why: { en: 'Prussia had just beaten France. Wilhelm I was named emperor in Versailles\' Hall of Mirrors.', es: 'Prusia acababa de vencer a Francia. Guillermo I fue nombrado emperador en el Salón de los Espejos de Versalles.', fa: 'پروس تازه فرانسه را شکست داده بود. ویلهلم اول در تالار آینه‌های ورسای امپراتور اعلام شد.' } },
      { q: { en: 'Which city became Italy\'s capital in 1871?', es: '¿Qué ciudad fue la capital de Italia en 1871?', fa: 'کدام شهر در ۱۸۷۱ پایتخت ایتالیا شد؟' },
        choices: [
          { en: 'Rome', es: 'Roma', fa: 'روم' },
          { en: 'Florence', es: 'Florencia', fa: 'فلورانس' },
          { en: 'Venice', es: 'Venecia', fa: 'ونیز' },
          { en: 'Naples', es: 'Nápoles', fa: 'ناپل' }],
        answer: 0,
        why: { en: 'Turin and then Florence were capitals first. Rome became the capital after 1870.', es: 'Turín y luego Florencia fueron capitales primero. Roma fue la capital después de 1870.', fa: 'اول تورین و بعد فلورانس پایتخت بودند. روم بعد از ۱۸۷۰ پایتخت شد.' } },
      { q: { en: 'What did Count Cavour do for Italy?', es: '¿Qué hizo el conde de Cavour por Italia?', fa: 'کنت کاوور برای ایتالیا چه کرد؟' },
        choices: [
          { en: 'He made smart deals and alliances', es: 'Hizo acuerdos y alianzas inteligentes', fa: 'قرارداد و پیمان‌های هوشیارانه بست' },
          { en: 'He led a thousand Red Shirts', es: 'Dirigió a mil camisas rojas', fa: 'هزار پیراهن‌سرخ را رهبری کرد' },
          { en: 'He ruled Rome as its Pope', es: 'Gobernó Roma como Papa', fa: 'به حیث پاپ بر روم حکومت کرد' },
          { en: 'He was crowned the Kaiser of Germany', es: 'Fue coronado káiser de Alemania', fa: 'به حیث قیصر آلمان تاج گذاشت' }],
        answer: 0,
        why: { en: 'Cavour, the "brain," led Piedmont-Sardinia. He used deals, like one with France, to grow it.', es: 'Cavour, el "cerebro", dirigía Piamonte-Cerdeña. Usó acuerdos, como uno con Francia, para hacerlo crecer.', fa: 'کاوور، «مغز»، رهبر پیه‌مونت-ساردینیا بود. با قراردادها، مثل یکی با فرانسه، آن را بزرگ کرد.' } },
      { q: { en: 'How did nationalism also cause problems?', es: '¿Cómo causó problemas también el nacionalismo?', fa: 'ملی‌گرایی چطور مشکل هم ساخت؟' },
        choices: [
          { en: 'Minorities felt left out, and rivals grew', es: 'Las minorías se sentían excluidas y crecían rivales', fa: 'اقلیت‌ها بیرون ماندند و رقابت بزرگ شد' },
          { en: 'Every language in Europe disappeared', es: 'Desaparecieron todos los idiomas de Europa', fa: 'همهٔ زبان‌های اروپا از بین رفتند' },
          { en: 'All the trains in Europe stopped running', es: 'Todos los trenes de Europa se pararon', fa: 'همهٔ ریل‌های اروپا از کار ماندند' },
          { en: 'Nobody wanted to live in big cities', es: 'Nadie quería vivir en ciudades grandes', fa: 'هیچ کس نمی‌خواست در شهر بزرگ زندگی کند' }],
        answer: 0,
        why: { en: 'Groups like the Poles felt pushed aside. Rivalry between strong nations helped lead to World War I.', es: 'Grupos como los polacos se sentían apartados. La rivalidad entre naciones fuertes ayudó a causar la Primera Guerra Mundial.', fa: 'گروه‌هایی مثل پولندی‌ها کنار زده شدند. رقابت میان ملت‌های قوی به جنگ جهانی اول کمک کرد.' } }
    ]
  },

  learned: [
    { en: '[[nationalism|Nationalism]] is pride in a shared language, history and land, and the wish to be one nation.', es: 'El [[nationalism|nacionalismo]] es orgullo por un idioma, una historia y una tierra comunes, y el deseo de ser una nación.', fa: '[[nationalism|ملی‌گرایی]] افتخار به زبان، تاریخ و سرزمین مشترک، و آرزوی یک ملت شدن است.' },
    { en: 'Mazzini, Cavour and Garibaldi helped unite Italy. Rome became its [[capital|capital]] in 1871.', es: 'Mazzini, Cavour y Garibaldi ayudaron a unir Italia. Roma fue su [[capital|capital]] en 1871.', fa: 'مازینی، کاوور و گاریبالدی به اتحاد ایتالیا کمک کردند. روم در ۱۸۷۱ [[capital|پایتخت]] آن شد.' },
    { en: 'Bismarck united Germany through war. The German [[empire|Empire]] began in 1871, but some [[minority|minorities]] felt left out.', es: 'Bismarck unió Alemania con guerras. El [[empire|Imperio]] alemán empezó en 1871, pero algunas [[minority|minorías]] se sintieron excluidas.', fa: 'بیسمارک با جنگ آلمان را متحد کرد. [[empire|امپراتوری]] آلمان در ۱۸۷۱ شروع شد، اما بعضی [[minority|اقلیت‌ها]] بیرون ماندند.' }
  ],
  reflect: {
    q: { en: 'What makes a group of people feel like one nation? Where do you feel you belong?', es: '¿Qué hace que un grupo de personas se sienta una nación? ¿Dónde sientes que perteneces?', fa: 'چه چیزی یک گروه مردم را مثل یک ملت می‌سازد؟ تو خود را به کجا متعلق می‌دانی؟' },
    starter: { en: 'I feel I belong when', es: 'Siento que pertenezco cuando', fa: 'من وقتی احساس تعلق می‌کنم که' }
  }
};
