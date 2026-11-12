/* COINWALKER · Episode 1.1 · What Is Economics? (basic economic concepts)
   Alexandria, Virginia, today: the Saturday farmers market on Market Square in Old Town.
   North half: City Hall (J) along the north side, the paved square (l) with market stalls (m) and the fountain (O),
   a house in the north-east corner. Row 11 is King Street, running east to the Potomac River (~) and a small dock (k).
   South of King Street: a row of shops (the bakery, the bike repair shop, a small workshop, a row house), a little
   community orchard (T over farm soil o) in the south-west, a taco stand (m) and the waterfront park in the south-east.
   People show scarcity, opportunity cost, needs and wants; the ledger stone asks the student to carry each resource
   card to Land, Labor, Capital or Entrepreneurship. */
window.EPISODE = {
  id: '1.1',
  realm: 1,
  sol: 'EPF',
  title: { en: 'What Is Economics?', es: '¿Qué es la economía?', fa: 'اقتصاد چیست؟' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Alexandria, Saturday market', es: 'Alexandria, mercado del sábado', fa: 'الکساندریا، بازار روز شنبه' },
  intro: [
    { en: 'The Grump tore the page about choices. Now people forget why they must choose.',
      es: 'El Gruñón rompió la página sobre las decisiones. Ahora la gente olvida por qué debe elegir.',
      fa: 'غرغرو صفحهٔ انتخاب‌ها را پاره کرد. حالا مردم فراموش می‌کنند چرا باید انتخاب کنند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Alexandria on the world map (no timeline in this game) */
  scenes: {
    at: [-77.043, 38.805],
    start: [
      { en: 'Alexandria is an old city in Virginia, on the Potomac River.',
        es: 'Alexandria es una ciudad antigua de Virginia, junto al río Potomac.',
        fa: 'الکساندریا یک شهر قدیمی در ویرجینیا است، کنار دریای پوتومک.' },
      { en: 'On Saturday mornings, farmers sell food on Market Square.',
        es: 'Los sábados por la mañana, los agricultores venden comida en Market Square.',
        fa: 'صبح‌های شنبه، دهقانان در میدان بازار خوراکی می‌فروشند.' },
      { en: 'Every seller and every shopper here has to make choices.',
        es: 'Cada vendedor y cada comprador de aquí tiene que tomar decisiones.',
        fa: 'هر فروشنده و هر خریدار اینجا باید انتخاب کند.' }
    ],
    page: { en: 'The word economics comes from an old Greek word about running a home.',
      es: 'La palabra economía viene de una antigua palabra griega sobre cómo llevar una casa.',
      fa: 'کلمهٔ اقتصاد در زبان انگلیسی از یک کلمهٔ قدیمی یونانی دربارهٔ ادارهٔ خانه می‌آید.' },
    guess: {
      q: { en: 'Can anyone have everything they want?', es: '¿Alguien puede tener todo lo que quiere?', fa: 'آیا کسی می‌تواند هر چیزی را که می‌خواهد داشته باشد؟' },
      choices: [
        { t: { en: '🙅 No, never', es: '🙅 No, nunca', fa: '🙅 نه، هرگز' }, ok: true },
        { t: { en: '🙋 Yes, if they try', es: '🙋 Sí, si se esfuerzan', fa: '🙋 بله، اگر کوشش کنند' } }
      ],
      why: { en: 'Wants have no end, but time, money and things run out. So everyone must choose.', es: 'Los deseos no tienen fin, pero el tiempo, el dinero y las cosas se acaban. Por eso todos eligen.', fa: 'خواهش‌ها پایان ندارند، اما وقت، پول و چیزها تمام می‌شوند. پس همه باید انتخاب کنند.' }
    },
    next: {
      q: { en: 'Next: who decides what gets made? Tradition, the government, the market, or a mix?', es: 'Ahora: ¿quién decide qué se produce? ¿La tradición, el gobierno, el mercado o una mezcla?', fa: 'بعدی: کی تصمیم می‌گیرد چه ساخته شود؟ رسم و رواج، حکومت، بازار، یا یک ترکیب؟' },
      choices: [
        { t: { en: '🔀 Most countries use a mix', es: '🔀 Casi todos los países usan una mezcla', fa: '🔀 بیشتر کشورها یک ترکیب دارند' }, ok: true },
        { t: { en: '👤 One person decides it all', es: '👤 Una persona lo decide todo', fa: '👤 یک نفر همه را تصمیم می‌گیرد' } }
      ],
      why: { en: 'Most countries mix them. In the US, the market decides a lot, and the government some.', es: 'Casi todos los países los mezclan. En EE. UU., el mercado decide mucho y el gobierno algo.', fa: 'بیشتر کشورها آنها را ترکیب می‌کنند. در امریکا بازار زیاد تصمیم می‌گیرد و حکومت کمی.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [25, 2], name: { en: 'Joy', es: 'Joy', fa: 'جوی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#c04a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I cut hair in my home salon. A haircut is a [[services|service]].', es: 'Corto el pelo en el salón de mi casa. Un corte de pelo es un [[services|servicio]].', fa: 'من در سالون خانه‌ام موی مردم را کوتاه می‌کنم. کوتاه کردن مو یک [[services|خدمت]] است.' },
        { en: 'A service is work that someone does for you.', es: 'Un servicio es un trabajo que alguien hace por ti.', fa: 'خدمت کاری است که کسی برای تو انجام می‌دهد.' },
        { en: 'Peaches and bread are [[goods|goods]]. You can touch goods.', es: 'Los duraznos y el pan son [[goods|bienes]]. Los bienes se pueden tocar.', fa: 'شفتالو و نان [[goods|کالا]] هستند. کالا را می‌توانی لمس کنی.' }
      ] },
    { at: [3, 13], name: { en: 'Mr. Haddad', es: 'Sr. Haddad', fa: 'آقای حداد' },
      look: { skin: 2, hair: '#2a2a2a', shirt: '#f0f0e8', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'Welcome to my bakery! At noon, all my bread is half price.', es: '¡Bienvenido a mi panadería! Al mediodía, todo mi pan cuesta la mitad.', fa: 'به نانوایی من خوش آمدی! چاشت، همهٔ نان‌هایم نصف قیمت است.' },
        { en: 'That is an [[incentive|incentive]]. It pushes people to buy before I close.', es: 'Eso es un [[incentive|incentivo]]. Empuja a la gente a comprar antes de que cierre.', fa: 'این یک [[incentive|تشویق]] است. مردم را وادار می‌کند پیش از بسته شدن دکان بخرند.' },
        { en: 'So less bread goes to waste. And my oven is my [[capital|capital]].', es: 'Así se tira menos pan. Y mi horno es mi [[capital|capital]].', fa: 'پس نان کمتری ضایع می‌شود. و تنورم [[capital|سرمایهٔ]] من است.' }
      ] },
    { at: [8, 13], name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      look: { skin: 4, hair: '#120c08', shirt: '#2f6f4a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I fix bikes. My skill and my hard work are [[labor|labor]].', es: 'Arreglo bicicletas. Mi habilidad y mi trabajo duro son [[labor|trabajo]].', fa: 'من بایسکل جور می‌کنم. مهارت و زحمت من [[labor|نیروی کار]] است.' },
        { en: 'My wrenches, my pump and this shop are [[capital|capital]].', es: 'Mis llaves, mi bomba y este taller son [[capital|capital]].', fa: 'آچارها، پمپ و این دکان من [[capital|سرمایه]] هستند.' },
        { en: 'Here, capital is not money. It is tools, machines and buildings.', es: 'Aquí, capital no es dinero. Son herramientas, máquinas y edificios.', fa: 'اینجا سرمایه پول نیست. ابزار، ماشین و ساختمان است.' }
      ] },
    { at: [13, 13], name: { en: 'Mr. Okoro', es: 'Sr. Okoro', fa: 'آقای اوکورو' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#8a5a2a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I make wooden chairs. Every maker must answer 3 big questions.', es: 'Hago sillas de madera. Todo productor debe responder 3 grandes preguntas.', fa: 'من چوکی چوبی می‌سازم. هر سازنده باید به ۳ سوال بزرگ جواب بدهد.' },
        { en: 'What should I make? And how should I make it?', es: '¿Qué debo hacer? ¿Y cómo lo debo hacer?', fa: 'چه چیز بسازم؟ و چطور آن را بسازم؟' },
        { en: 'And for whom? Who will buy and use my chairs?', es: '¿Y para quién? ¿Quién va a comprar y usar mis sillas?', fa: 'و برای کی؟ کی چوکی‌هایم را می‌خرد و کار می‌گیرد؟' }
      ] },
    { at: [18, 13], name: { en: 'Carmen', es: 'Carmen', fa: 'کارمن' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Last year I opened the taco stand on King Street.', es: 'El año pasado abrí el puesto de tacos en King Street.', fa: 'سال گذشته غرفهٔ تاکو را در سرک کینگ باز کردم.' },
        { en: 'I used my savings. It was a risk. I could lose it all.', es: 'Usé mis ahorros. Fue un riesgo. Podía perderlo todo.', fa: 'از پس‌اندازم کار گرفتم. خطر بود. می‌توانستم همه را از دست بدهم.' },
        { en: 'I brought land, labor and capital together. I am an [[entrepreneur|entrepreneur]].', es: 'Junté tierra, trabajo y capital. Soy [[entrepreneur|emprendedora]].', fa: 'زمین، نیروی کار و سرمایه را یکجا کردم. من یک [[entrepreneur|کارآفرین]] هستم.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): City Hall (J) on the north side, Market Square (l) with stalls (m) and the fountain (O),
     a house (Q over h) in the north-east. The Potomac River (~) runs down the east edge.
     Row 11: King Street (l), from the west end to a dock (k) on the river.
     South: shops (R/Q over h): the bakery, the bike shop, the workshop, Carmen's row house.
     South-west: the community orchard (T rows over farm soil o). South-east: the taco stand (m), the waterfront park
     with flowers (,) and a dock (k). A dirt path (:) runs through the south. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~',
    'T.JJJJJJJJJJJJJJJJJ.....QQQ..~~~',
    'T.JJJJJJJJJJJJJJJJJ.....hdh..~~~',
    'T...llllllllllllllllllll.....~~~',
    'T...lmmllllllllllllllmml.....~~~',
    'T.x.llllllllllllllllllll..T..~~~',
    'T...llllllllllOlllllllll.....~~~',
    'T...lmmllllllllllllllmml.....~~~',
    'T.T.llllllllllllllllllll.T...~~~',
    'T...llllllllllllllllllll..x..~~~',
    'T.T........................T.~~~',
    'Tllllllllllllllllllllllllllllk~~',
    'T.RRR..RRR..QQQ..RRR.......,,~~~',
    'T.hdh..hdh..hdh..hdh.......,,~~~',
    'T............................~~~',
    'T.TTT.TTT...:::::::::::::....~~~',
    'T.ooo.ooo...:...........,,...~~~',
    'T.ooo.ooo...:..mm.......,,...kk~',
    'T.TTT.TTT...:...........,,...~~~',
    'T...........::::::::::::.....~~~',
    'T..T..x............T......T..~~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~'
  ],
  start: [15, 4],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [10, 3], at: [10, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps south, across the market square.', es: 'Desde esta nota, camina 5 pasos al sur, por la plaza del mercado.', fa: 'از این یادداشت، ۵ قدم به جنوب برو، از میان میدان بازار.' },
      text: { en: 'An old coin! Before coins, people often traded goods, like eggs for cloth.', es: '¡Una moneda antigua! Antes de las monedas, la gente cambiaba bienes, como huevos por tela.', fa: 'یک سکهٔ قدیمی! پیش از سکه، مردم اکثراً کالا را عوض می‌کردند، مثل تخم در بدل تکه.' } },
    { clueAt: [21, 20], at: [25, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the river.', es: 'Desde esta nota, camina 4 pasos al este, hacia el río.', fa: 'از این یادداشت، ۴ قدم به شرق برو، به طرف دریا.' },
      text: { en: 'A river shell! The river gives water and fish. Gifts of nature are called land.', es: '¡Una concha del río! El río da agua y peces. Los regalos de la naturaleza se llaman tierra.', fa: 'یک صدف دریا! دریا آب و ماهی می‌دهد. به داده‌های طبیعت «زمین» می‌گویند.' } }
  ],

  words: {
    economics: { en: 'how people use scarce resources to meet their needs and wants', es: 'cómo la gente usa recursos escasos para cubrir sus necesidades y deseos', fa: 'این که مردم چطور از منابع کم برای رفع ضرورت‌ها و خواهش‌های خود کار می‌گیرند' },
    scarcity: { en: 'wants have no end, but resources are limited', es: 'los deseos no tienen fin, pero los recursos son limitados', fa: 'خواهش‌ها پایان ندارند، اما منابع محدود هستند' },
    resources: { en: 'the things we use to make goods and services', es: 'las cosas que usamos para hacer bienes y servicios', fa: 'چیزهایی که برای ساختن کالا و خدمات کار می‌گیریم' },
    'opportunity cost': { en: 'the next best thing you give up when you choose', es: 'la siguiente mejor cosa a la que renuncias al elegir', fa: 'بهترین چیز بعدی که هنگام انتخاب از دست می‌دهی' },
    'trade-off': { en: 'getting one thing means giving up another', es: 'conseguir una cosa significa renunciar a otra', fa: 'به دست آوردن یک چیز یعنی از دست دادن چیز دیگر' },
    need: { en: 'something you must have to live and be safe, like food', es: 'algo que debes tener para vivir y estar a salvo, como la comida', fa: 'چیزی که برای زنده ماندن و امن بودن لازم داری، مثل خوراک' },
    want: { en: 'something nice to have, but you can live without it', es: 'algo bonito de tener, pero puedes vivir sin eso', fa: 'چیزی که داشتنش خوب است، اما بدون آن زندگی کرده می‌توانی' },
    goods: { en: 'things you can touch, like bread or a bike', es: 'cosas que puedes tocar, como el pan o una bicicleta', fa: 'چیزهایی که لمس کرده می‌توانی، مثل نان یا بایسکل' },
    services: { en: 'work that someone does for you, like a haircut', es: 'trabajo que alguien hace por ti, como un corte de pelo', fa: 'کاری که کسی برایت انجام می‌دهد، مثل کوتاه کردن مو' },
    'factors of production': { en: 'the 4 resources used to make things: land, labor, capital, entrepreneurship', es: 'los 4 recursos para producir: tierra, trabajo, capital y emprendimiento', fa: '۴ منبع برای ساختن چیزها: زمین، نیروی کار، سرمایه و کارآفرینی' },
    land: { en: 'gifts of nature: soil, water, trees, fish', es: 'regalos de la naturaleza: suelo, agua, árboles, peces', fa: 'داده‌های طبیعت: خاک، آب، درخت، ماهی' },
    labor: { en: 'the work and skills of people', es: 'el trabajo y las habilidades de las personas', fa: 'کار و مهارت مردم' },
    capital: { en: 'tools, machines and buildings used to make other things (not money)', es: 'herramientas, máquinas y edificios para hacer otras cosas (no es dinero)', fa: 'ابزار، ماشین و ساختمان برای ساختن چیزهای دیگر (نه پول)' },
    entrepreneur: { en: 'a person who takes a risk to start a business', es: 'una persona que se arriesga para empezar un negocio', fa: 'کسی که خطر می‌کند تا یک کسب و کار را شروع کند' },
    incentive: { en: 'a reward (or a cost) that pushes people to choose something', es: 'un premio (o un costo) que empuja a la gente a elegir algo', fa: 'یک جایزه (یا یک هزینه) که مردم را به انتخاب چیزی وادار می‌کند' }
  },

  npcs: [
    {
      x: 20, y: 7,
      name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      role: { en: 'Peach farmer', es: 'Agricultora de duraznos', fa: 'دهقان شفتالو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e0803a', pants: '#3a4a2a', hat: '#d8b060', style: 'long' },
      lines: [
        { en: 'Good morning! Fresh peaches from my farm, picked yesterday.', es: '¡Buenos días! Duraznos frescos de mi granja, recogidos ayer.', fa: 'صبح بخیر! شفتالوی تازه از فارم من، دیروز چیده شده.' },
        { en: 'I have only 3 boxes left. Everyone wants peaches today!', es: 'Solo me quedan 3 cajas. ¡Hoy todos quieren duraznos!', fa: 'فقط ۳ قطی برایم مانده. امروز همه شفتالو می‌خواهند!' },
        { en: 'People want more than there is. That is called [[scarcity|scarcity]].', es: 'La gente quiere más de lo que hay. Eso se llama [[scarcity|escasez]].', fa: 'مردم بیشتر از آنچه هست می‌خواهند. به این [[scarcity|کمبود]] می‌گویند.' },
        { en: '[[economics|Economics]] is how people use scarce things to meet needs and wants.', es: 'La [[economics|economía]] es cómo la gente usa cosas escasas para cubrir necesidades y deseos.', fa: '[[economics|اقتصاد]] یعنی مردم چطور از چیزهای کم برای ضرورت‌ها و خواهش‌ها کار می‌گیرند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What does scarcity mean?', es: '¿Qué significa escasez?', fa: 'کمبود یعنی چه؟' },
        choices: [
          { ok: true, t: { en: 'Wants are bigger than what we have', es: 'Los deseos son más que lo que tenemos', fa: 'خواهش‌ها بیشتر از داشته‌های ما هستند' },
            why: { en: 'Yes! Wants have no end, but resources are limited. So we must choose.', es: '¡Sí! Los deseos no tienen fin, pero los recursos son limitados. Por eso elegimos.', fa: 'بله! خواهش‌ها پایان ندارند، اما منابع محدود هستند. پس باید انتخاب کنیم.' } },
          { t: { en: 'Every store has too much to sell', es: 'Cada tienda tiene demasiado para vender', fa: 'هر دکان چیز زیادی برای فروش دارد' },
            why: { en: 'No. Rosa has only 3 boxes, and many people want them. That is scarcity.', es: 'No. Rosa tiene solo 3 cajas y mucha gente las quiere. Eso es escasez.', fa: 'نه. روزا فقط ۳ قطی دارد و مردم زیاد آنها را می‌خواهند. این کمبود است.' } },
          { t: { en: 'Money is the only thing people want', es: 'El dinero es lo único que la gente quiere', fa: 'پول تنها چیزی است که مردم می‌خواهند' },
            why: { en: 'No. People want many things. Scarcity means there is never enough for all wants.', es: 'No. La gente quiere muchas cosas. Escasez es que nunca hay suficiente para todos los deseos.', fa: 'نه. مردم چیزهای زیاد می‌خواهند. کمبود یعنی هیچ وقت برای همهٔ خواهش‌ها بس نیست.' } }
        ]
      }
    },
    {
      x: 6, y: 14,
      name: { en: 'Diego', es: 'Diego', fa: 'دیگو' },
      role: { en: 'Student with a part-time job', es: 'Estudiante con trabajo de medio tiempo', fa: 'شاگرد با کار نیمه‌وقت' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I help at the bike shop on Saturdays.', es: 'Los sábados ayudo en el taller de bicicletas.', fa: 'روزهای شنبه در دکان بایسکل کمک می‌کنم.' },
        { en: 'Today I had three choices: work, a soccer game, or sleep late.', es: 'Hoy tenía tres opciones: trabajar, un partido de fútbol o dormir tarde.', fa: 'امروز سه انتخاب داشتم: کار، یک مسابقهٔ فوتبال، یا تا ناوقت خواب.' },
        { en: 'I picked work. My next best choice was the soccer game.', es: 'Elegí trabajar. Mi siguiente mejor opción era el partido de fútbol.', fa: 'کار را انتخاب کردم. بهترین انتخاب بعدی‌ام مسابقهٔ فوتبال بود.' },
        { en: 'The game is my [[opportunity cost|opportunity cost]]. Every choice is a [[trade-off|trade-off]].', es: 'El partido es mi [[opportunity cost|costo de oportunidad]]. Cada decisión es una [[trade-off|disyuntiva]].', fa: 'مسابقه [[opportunity cost|هزینهٔ فرصت]] من است. هر انتخاب یک [[trade-off|بده‌بستان]] است.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Diego chose to work. What was his opportunity cost?', es: 'Diego eligió trabajar. ¿Cuál fue su costo de oportunidad?', fa: 'دیگو کار را انتخاب کرد. هزینهٔ فرصت او چه بود؟' },
        choices: [
          { ok: true, t: { en: 'The soccer game', es: 'El partido de fútbol', fa: 'مسابقهٔ فوتبال' },
            why: { en: 'Yes! The game was his next best choice. That is what he gave up.', es: '¡Sí! El partido era su siguiente mejor opción. A eso renunció.', fa: 'بله! مسابقه بهترین انتخاب بعدی او بود. همان را از دست داد.' } },
          { t: { en: 'The money he earned', es: 'El dinero que ganó', fa: 'پولی که کمایی کرد' },
            why: { en: 'No. The money is what he got. Opportunity cost is what he gave up.', es: 'No. El dinero es lo que ganó. El costo de oportunidad es a lo que renunció.', fa: 'نه. پول چیزی است که به دست آورد. هزینهٔ فرصت چیزی است که از دست داد.' } },
          { t: { en: 'The game and the nap', es: 'El partido y la siesta', fa: 'مسابقه و خواب' },
            why: { en: 'Not both. Opportunity cost is only the NEXT best choice: the soccer game.', es: 'No las dos. El costo de oportunidad es solo la SIGUIENTE mejor opción: el partido.', fa: 'نه هر دو. هزینهٔ فرصت فقط بهترین انتخاب «بعدی» است: مسابقهٔ فوتبال.' } }
        ]
      }
    },
    {
      x: 17, y: 20,
      name: { en: 'Fatima', es: 'Fátima', fa: 'فاطمه' },
      role: { en: 'Nurse', es: 'Enfermera', fa: 'نرس' },
      look: { skin: 1, hair: '#1a1008', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'bun' },
      lines: [
        { en: 'I am a nurse. I shop here after my night shift.', es: 'Soy enfermera. Compro aquí después de mi turno de noche.', fa: 'من نرس هستم. بعد از نوبت شب اینجا خرید می‌کنم.' },
        { en: 'First I buy what I [[need|need]], like eggs and bread.', es: 'Primero compro lo que [[need|necesito]], como huevos y pan.', fa: 'اول چیزی را می‌خرم که [[need|ضرورت]] دارم، مثل تخم و نان.' },
        { en: 'If money is left, I buy a [[want|want]], like flowers.', es: 'Si me sobra dinero, compro un [[want|deseo]], como flores.', fa: 'اگر پول بماند، یک [[want|خواهش]] می‌خرم، مثل گل.' },
        { en: 'Needs keep us alive and safe. Wants are just nice to have.', es: 'Las necesidades nos mantienen vivos y seguros. Los deseos solo son bonitos.', fa: 'ضرورت‌ها ما را زنده و امن نگه می‌دارند. خواهش‌ها فقط خوب هستند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which of these is a need?', es: '¿Cuál de estas cosas es una necesidad?', fa: 'کدام یکی از اینها ضرورت است؟' },
        choices: [
          { ok: true, t: { en: 'Healthy food to eat', es: 'Comida sana para comer', fa: 'خوراک صحی برای خوردن' },
            why: { en: 'Yes! We need food to live. That makes it a need.', es: '¡Sí! Necesitamos comida para vivir. Por eso es una necesidad.', fa: 'بله! برای زنده ماندن به خوراک ضرورت داریم. پس ضرورت است.' } },
          { t: { en: 'Fresh flowers for the table', es: 'Flores frescas para la mesa', fa: 'گل تازه برای میز' },
            why: { en: 'Flowers are nice, but you can live without them. They are a want.', es: 'Las flores son bonitas, pero puedes vivir sin ellas. Son un deseo.', fa: 'گل خوب است، اما بدون آن زندگی کرده می‌توانی. یک خواهش است.' } },
          { t: { en: 'A newer phone with games', es: 'Un teléfono nuevo con juegos', fa: 'یک تیلفون نو با بازی' },
            why: { en: 'A newer phone is fun, but you can live without it. It is a want.', es: 'Un teléfono nuevo es divertido, pero puedes vivir sin él. Es un deseo.', fa: 'تیلفون نو جالب است، اما بدون آن زندگی کرده می‌توانی. یک خواهش است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'MARKET SQUARE · ALEXANDRIA, VIRGINIA · Saturday farmers market, by City Hall.', es: 'MARKET SQUARE · ALEXANDRIA, VIRGINIA · Mercado de agricultores del sábado, junto a la Alcaldía.', fa: 'میدان بازار · الکساندریا، ویرجینیا · بازار دهقانان روز شنبه، کنار شاروالی.' } },
    { x: 26, y: 9, text: { en: 'KING STREET · Walk south to King Street. It runs east to the Potomac River.', es: 'KING STREET · Camina al sur hasta King Street. Va al este, hasta el río Potomac.', fa: 'سرک کینگ · به جنوب تا سرک کینگ برو. این سرک به شرق تا دریای پوتومک می‌رود.' } },
    { x: 6, y: 20, text: { en: 'COMMUNITY ORCHARD · Soil, sun and rain are natural resources. In economics, they are land.', es: 'HUERTO DEL BARRIO · El suelo, el sol y la lluvia son recursos naturales. En economía, son tierra.', fa: 'باغ محله · خاک، آفتاب و باران منابع طبیعی هستند. در اقتصاد، اینها «زمین» هستند.' } }
  ],

  /* the quest: Tomás the pie seller (gold !) on the west side of the square -> Mei the flower seller on the east side
     -> carry the right good to Ruth the apple farmer by the river, south-east -> back to Tomás.
     Ruth can trade her last apples for only one thing: the tire she needs, not the honey (her next best choice). */
  quest: {
    stat: 'loc',
    title: { en: 'The Last Basket of Apples', es: 'La última canasta de manzanas', fa: 'آخرین سبد سیب' },
    giver: {
      x: 7, y: 4,
      name: { en: 'Tomás', es: 'Tomás', fa: 'توماس' },
      role: { en: 'Pie seller', es: 'Vendedor de pasteles', fa: 'فروشندهٔ کیک میوه' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#c0392b', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I sell apple pies. But I just ran out of apples!', es: 'Vendo pasteles de manzana. ¡Pero se me acabaron las manzanas!', fa: 'من کیک سیب می‌فروشم. اما سیب‌هایم همین حالا تمام شد!' },
        { en: 'Ruth the farmer has the last basket. She will trade it for one thing.', es: 'Ruth, la agricultora, tiene la última canasta. La cambia por una sola cosa.', fa: 'روت دهقان آخرین سبد را دارد. آن را در بدل یک چیز عوض می‌کند.' },
        { en: 'Mei sells flowers on the east side of the square. Ask her!', es: 'Mei vende flores en el lado este de la plaza. ¡Pregúntale!', fa: 'می در طرف شرق میدان گل می‌فروشد. از او بپرس!' }
      ],
      wait: { en: 'Mei sells flowers on the east side of the market square.', es: 'Mei vende flores en el lado este de la plaza del mercado.', fa: 'می در طرف شرق میدان بازار گل می‌فروشد.' },
      thanks: { en: 'Apples! Ruth gave up her apples to get a tire. That is a trade-off.', es: '¡Manzanas! Ruth dejó sus manzanas para tener una llanta. Eso es una disyuntiva.', fa: 'سیب! روت سیب‌هایش را داد تا تایر بگیرد. این یک بده‌بستان است.' }
    },
    contact: {
      x: 24, y: 6,
      name: { en: 'Mei', es: 'Mei', fa: 'می' },
      role: { en: 'Flower seller', es: 'Vendedora de flores', fa: 'گل‌فروش' },
      look: { skin: 1, hair: '#120c08', shirt: '#8a4ac0', pants: '#2a3a2a', style: 'bun' },
      lines: [
        { en: 'Ruth rides her bike to the market. This morning her tire went flat!', es: 'Ruth viene al mercado en bicicleta. ¡Esta mañana se le ponchó la llanta!', fa: 'روت با بایسکل به بازار می‌آید. امروز صبح تایرش پنچر شد!' },
        { en: 'She wants honey too. But honey can wait. The tire cannot.', es: 'También quiere miel. Pero la miel puede esperar. La llanta no.', fa: 'او عسل هم می‌خواهد. اما عسل صبر کرده می‌تواند. تایر نمی‌تواند.' },
        { en: 'Ruth is by the river. Bring her what she needs most!', es: 'Ruth está junto al río. ¡Llévale lo que más necesita!', fa: 'روت کنار دریا است. چیزی را که بیشتر ضرورت دارد برایش ببر!' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 23, y: 12,
        name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
        role: { en: 'Apple farmer', es: 'Agricultora de manzanas', fa: 'دهقان سیب' },
        look: { skin: 0, hair: '#b8b8b8', shirt: '#4a7a3a', pants: '#3a2a1a', hat: '#c8a060', style: 'short' },
        lines: [
          { en: 'I grow apples on my farm. This is my last basket.', es: 'Cultivo manzanas en mi granja. Esta es mi última canasta.', fa: 'من در فارمم سیب می‌کارم. این آخرین سبد من است.' },
          { en: 'I can trade it for only one thing. I must ride home today!', es: 'Solo puedo cambiarla por una cosa. ¡Hoy tengo que volver a casa en bici!', fa: 'فقط در بدل یک چیز عوضش کرده می‌توانم. امروز باید با بایسکل خانه بروم!' }
        ]
      },
      q: { en: 'Ruth can get only one thing for her apples. Which should you bring her?', es: 'Ruth puede recibir solo una cosa por sus manzanas. ¿Cuál le llevas?', fa: 'روت در بدل سیب‌هایش فقط یک چیز گرفته می‌تواند. کدام را برایش می‌بری؟' },
      choices: [
        { ok: true, at: [10, 17], icon: '🛞', t: { en: 'A bike tire', es: 'Una llanta de bicicleta', fa: 'یک تایر بایسکل' },
          why: { en: 'Good trade! She needs it to get home. The honey was her opportunity cost.', es: '¡Buen trato! La necesita para volver a casa. La miel fue su costo de oportunidad.', fa: 'معاملهٔ خوب! برای رفتن به خانه به آن ضرورت دارد. عسل هزینهٔ فرصت او بود.' } },
        { at: [7, 7], icon: '🍯', t: { en: 'A jar of honey', es: 'Un frasco de miel', fa: 'یک بوتل عسل' },
          why: { en: 'Honey is her second choice. It can wait. Without a tire, she cannot ride home.', es: 'La miel es su segunda opción. Puede esperar. Sin llanta, no puede volver en bici.', fa: 'عسل انتخاب دوم اوست. صبر کرده می‌تواند. بدون تایر، با بایسکل خانه رفته نمی‌تواند.' } },
        { at: [25, 9], icon: '💐', t: { en: 'A bunch of flowers', es: 'Un ramo de flores', fa: 'یک دسته گل' },
          why: { en: 'Flowers are nice, but Ruth did not ask for them. Bring what she needs most.', es: 'Las flores son bonitas, pero Ruth no las pidió. Llévale lo que más necesita.', fa: 'گل خوب است، اما روت آن را نخواسته. چیزی را ببر که بیشتر ضرورت دارد.' } }
      ],
      item: { icon: '🍎', name: { en: 'A basket of apples', es: 'Una canasta de manzanas', fa: 'یک سبد سیب' } }
    }
  },

  scraps: [[28, 1], [1, 20], [28, 19]],
  smudges: [[12, 8], [22, 18]],

  challenge: {
    at: [14, 19],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each resource: land on the orchard soil, labor by the bike shop,
    // capital by the workshop, entrepreneurship by Carmen's taco stand
    zones: [{ bin: 'land', x: 2, y: 16, w: 3, h: 2 }, { bin: 'labor', x: 9, y: 14, w: 3, h: 1 },
      { bin: 'capital', x: 14, y: 14, w: 4, h: 1 }, { bin: 'entre', x: 18, y: 16, w: 3, h: 2 }],
    stat: 'loc',
    title: { en: 'Which resource is it?', es: '¿Qué recurso es?', fa: 'کدام منبع است؟' },
    intro: { en: 'Everything at the market is made with 4 [[factors of production|resources]]. Carry each card to its group.',
      es: 'Todo en el mercado se hace con 4 [[factors of production|recursos]]. Lleva cada tarjeta a su grupo.',
      fa: 'همه چیز در بازار با ۴ [[factors of production|منبع]] ساخته می‌شود. هر کارت را پیش گروهش ببر.' },
    bins: [
      { id: 'land', icon: '🌳', label: { en: 'Land', es: 'Tierra', fa: 'زمین' }, sub: { en: 'gifts of nature', es: 'regalos de la naturaleza', fa: 'داده‌های طبیعت' } },
      { id: 'labor', icon: '💪', label: { en: 'Labor', es: 'Trabajo', fa: 'نیروی کار' }, sub: { en: 'people\'s work and skills', es: 'el trabajo y las habilidades de la gente', fa: 'کار و مهارت مردم' } },
      { id: 'capital', icon: '🛠️', label: { en: 'Capital', es: 'Capital', fa: 'سرمایه' }, sub: { en: 'tools, machines, buildings', es: 'herramientas, máquinas, edificios', fa: 'ابزار، ماشین، ساختمان' } },
      { id: 'entre', icon: '💡', label: { en: 'Entrepreneurship', es: 'Emprendimiento', fa: 'کارآفرینی' }, sub: { en: 'taking a risk to start a business', es: 'arriesgarse para empezar un negocio', fa: 'خطر کردن برای شروع کسب و کار' } }
    ],
    items: [
      { bin: 'land', t: { en: 'Rich soil in an apple orchard', es: 'Suelo rico en un huerto de manzanas', fa: 'خاک خوب در یک باغ سیب' },
        why: { en: 'Soil comes from nature. Natural resources are [[land|land]].', es: 'El suelo viene de la naturaleza. Los recursos naturales son [[land|tierra]].', fa: 'خاک از طبیعت می‌آید. منابع طبیعی [[land|زمین]] هستند.' } },
      { bin: 'land', t: { en: 'Water from the Potomac River', es: 'Agua del río Potomac', fa: 'آب دریای پوتومک' },
        why: { en: 'River water is a gift of nature. In economics, it counts as [[land|land]].', es: 'El agua del río es un regalo de la naturaleza. En economía, cuenta como [[land|tierra]].', fa: 'آب دریا دادهٔ طبیعت است. در اقتصاد، [[land|زمین]] حساب می‌شود.' } },
      { bin: 'labor', t: { en: 'A farmer picking peaches', es: 'Una agricultora que recoge duraznos', fa: 'یک دهقان که شفتالو می‌چیند' },
        why: { en: 'Picking fruit is human work. Human work is [[labor|labor]].', es: 'Recoger fruta es trabajo humano. El trabajo humano es [[labor|trabajo]].', fa: 'چیدن میوه کار انسان است. کار انسان [[labor|نیروی کار]] است.' } },
      { bin: 'labor', t: { en: 'A bike mechanic\'s skill', es: 'La habilidad de una mecánica de bicicletas', fa: 'مهارت یک مستری بایسکل' },
        why: { en: 'A skill is what a person knows how to do. Skills are part of [[labor|labor]].', es: 'Una habilidad es lo que una persona sabe hacer. Es parte del [[labor|trabajo]].', fa: 'مهارت چیزی است که یک نفر بلد است. مهارت بخشی از [[labor|نیروی کار]] است.' } },
      { bin: 'capital', t: { en: 'A baker\'s oven', es: 'El horno de un panadero', fa: 'تنور یک نانوا' },
        why: { en: 'The oven is a machine that makes bread. Tools and machines are [[capital|capital]].', es: 'El horno es una máquina que hace pan. Las herramientas y máquinas son [[capital|capital]].', fa: 'تنور ماشینی است که نان می‌سازد. ابزار و ماشین [[capital|سرمایه]] هستند.' } },
      { bin: 'capital', t: { en: 'A sewing machine', es: 'Una máquina de coser', fa: 'یک ماشین خیاطی' },
        why: { en: 'A sewing machine helps make clothes. It is a tool, so it is [[capital|capital]].', es: 'Una máquina de coser ayuda a hacer ropa. Es una herramienta: es [[capital|capital]].', fa: 'ماشین خیاطی در ساختن لباس کمک می‌کند. ابزار است، پس [[capital|سرمایه]] است.' } },
      { bin: 'capital', t: { en: 'A delivery truck', es: 'Un camión de reparto', fa: 'یک موتر باربری' },
        why: { en: 'The truck carries food to market. It is a machine for work, so it is [[capital|capital]].', es: 'El camión lleva comida al mercado. Es una máquina para trabajar: es [[capital|capital]].', fa: 'موتر خوراک را به بازار می‌برد. ماشینی برای کار است، پس [[capital|سرمایه]] است.' } },
      { bin: 'entre', t: { en: 'The woman who opened the taco stand', es: 'La mujer que abrió el puesto de tacos', fa: 'زنی که غرفهٔ تاکو را باز کرد' },
        why: { en: 'Carmen took a risk to start a business. She is an [[entrepreneur|entrepreneur]].', es: 'Carmen se arriesgó para empezar un negocio. Es una [[entrepreneur|emprendedora]].', fa: 'کارمن خطر کرد تا یک کسب و کار را شروع کند. او [[entrepreneur|کارآفرین]] است.' } }
    ],
    success: { en: 'Every card is in the right group! Land, labor, capital and entrepreneurship make things.', es: '¡Cada tarjeta está en su grupo! La tierra, el trabajo, el capital y el emprendimiento producen cosas.', fa: 'هر کارت در گروه درست است! زمین، نیروی کار، سرمایه و کارآفرینی چیزها را می‌سازند.' }
  },

  boss: {
    at: [27, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Greedy Grump', es: 'El Gruñón Glotón', fa: 'غرغروی حریص' },
    appear: { en: 'The Greedy Grump is hiding in the fog by the river!', es: '¡El Gruñón Glotón se esconde en la niebla junto al río!', fa: 'غرغروی حریص در مه کنار دریا پنهان است!' },
    taunt: { en: 'Why choose? I want EVERYTHING! All the peaches, all the pies, right NOW!', es: '¿Por qué elegir? ¡Lo quiero TODO! ¡Todos los duraznos, todos los pasteles, AHORA!', fa: 'چرا انتخاب کنم؟ من همه چیز را می‌خواهم! همهٔ شفتالوها، همهٔ کیک‌ها، همین حالا!' },
    win: { en: 'The fog lifts off the river. Ledger page 1.1 floats down into your hands!', es: 'La niebla se va del río. ¡La página 1.1 del libro cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۱.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is economics?', es: '¿Qué es la economía?', fa: 'اقتصاد چیست؟' },
        choices: [
          { en: 'How people use scarce things to meet wants', es: 'Cómo la gente usa cosas escasas para sus deseos', fa: 'این که مردم چطور از چیزهای کم برای خواهش‌ها کار می‌گیرند' },
          { en: 'How to count coins very fast at a store', es: 'Cómo contar monedas muy rápido en una tienda', fa: 'این که چطور سکه‌ها را در دکان خیلی تیز بشماری' },
          { en: 'How to get every single thing you want', es: 'Cómo conseguir cada cosa que quieres', fa: 'این که چطور هر چیزی را که می‌خواهی به دست بیاوری' },
          { en: 'How to make a store bigger every year', es: 'Cómo hacer una tienda más grande cada año', fa: 'این که چطور یک دکان را هر سال کلان‌تر بسازی' }],
        answer: 0,
        why: { en: 'Economics is how people use scarce resources to meet their needs and wants.', es: 'La economía es cómo la gente usa recursos escasos para cubrir sus necesidades y deseos.', fa: 'اقتصاد یعنی مردم چطور از منابع کم برای ضرورت‌ها و خواهش‌های خود کار می‌گیرند.' } },
      { q: { en: 'Why must everyone make choices?', es: '¿Por qué todos tienen que elegir?', fa: 'چرا همه باید انتخاب کنند؟' },
        choices: [
          { en: 'Wants have no end, but resources do', es: 'Los deseos no tienen fin, pero los recursos sí', fa: 'خواهش‌ها پایان ندارند، اما منابع دارند' },
          { en: 'Stores are open only on Saturday mornings', es: 'Las tiendas abren solo los sábados en la mañana', fa: 'دکان‌ها فقط صبح‌های شنبه باز هستند' },
          { en: 'Prices change with the weather each day', es: 'Los precios cambian con el clima cada día', fa: 'قیمت‌ها هر روز با هوا تغییر می‌کنند' },
          { en: 'People only ever want one thing at a time', es: 'La gente solo quiere una cosa a la vez', fa: 'مردم همیشه فقط یک چیز را در یک وقت می‌خواهند' }],
        answer: 0,
        why: { en: 'That is scarcity. We cannot have everything, so we must choose.', es: 'Eso es escasez. No podemos tenerlo todo, así que debemos elegir.', fa: 'این کمبود است. همه چیز را داشته نمی‌توانیم، پس باید انتخاب کنیم.' } },
      { q: { en: 'Maya picks work. A movie was her next best choice. What is her opportunity cost?', es: 'Maya elige trabajar. Una película era su siguiente mejor opción. ¿Cuál es su costo de oportunidad?', fa: 'مایا کار را انتخاب می‌کند. فلم بهترین انتخاب بعدی‌اش بود. هزینهٔ فرصت او چیست؟' },
        choices: [
          { en: 'The movie', es: 'La película', fa: 'فلم' },
          { en: 'The money she earns', es: 'El dinero que gana', fa: 'پولی که کمایی می‌کند' },
          { en: 'The movie and a nap', es: 'La película y una siesta', fa: 'فلم و یک خواب' },
          { en: 'Nothing at all', es: 'Nada de nada', fa: 'هیچ چیز' }],
        answer: 0,
        why: { en: 'Opportunity cost is the next best thing you give up. For Maya, that was the movie.', es: 'El costo de oportunidad es la siguiente mejor cosa a la que renuncias. Para Maya, la película.', fa: 'هزینهٔ فرصت بهترین چیز بعدی است که از دست می‌دهی. برای مایا، آن فلم بود.' } },
      { q: { en: 'In economics, which of these is capital?', es: 'En economía, ¿cuál de estos es capital?', fa: 'در اقتصاد، کدام یکی از اینها سرمایه است؟' },
        choices: [
          { en: 'A baker\'s oven', es: 'El horno de un panadero', fa: 'تنور یک نانوا' },
          { en: 'A $20 bill in a wallet', es: 'Un billete de $20 en una cartera', fa: 'یک نوت ۲۰ دالری در بکس پول' },
          { en: 'A river full of fish', es: 'Un río lleno de peces', fa: 'یک دریای پر از ماهی' },
          { en: 'A cook\'s cooking skill', es: 'La habilidad de una cocinera', fa: 'مهارت یک آشپز' }],
        answer: 0,
        why: { en: 'Capital is tools, machines and buildings used to make goods. Here, money is not capital.', es: 'El capital son herramientas, máquinas y edificios para producir. Aquí, el dinero no es capital.', fa: 'سرمایه ابزار، ماشین و ساختمان برای ساختن کالا است. اینجا پول سرمایه نیست.' } },
      { q: { en: 'Who is an entrepreneur?', es: '¿Quién es un emprendedor?', fa: 'کارآفرین کیست؟' },
        choices: [
          { en: 'A woman who risks her savings to open a shop', es: 'Una mujer que arriesga sus ahorros para abrir una tienda', fa: 'زنی که پس‌اندازش را برای باز کردن دکان به خطر می‌اندازد' },
          { en: 'A clerk who is paid each week by her boss', es: 'Una empleada a la que su jefe le paga cada semana', fa: 'کارمندی که هر هفته از رئیسش معاش می‌گیرد' },
          { en: 'A shopper who buys bread every Saturday', es: 'Un comprador que compra pan cada sábado', fa: 'خریداری که هر شنبه نان می‌خرد' },
          { en: 'A field of rich, dark soil on a farm', es: 'Un campo de suelo rico y oscuro en una granja', fa: 'یک زمین با خاک خوب و تاریک در فارم' }],
        answer: 0,
        why: { en: 'An entrepreneur takes a risk to start a business, and brings land, labor and capital together.', es: 'Un emprendedor se arriesga para empezar un negocio y junta tierra, trabajo y capital.', fa: 'کارآفرین خطر می‌کند تا کسب و کار را شروع کند و زمین، کار و سرمایه را یکجا می‌کند.' } },
      { q: { en: 'The bakery sells bread at half price at noon. What is that?', es: 'La panadería vende el pan a mitad de precio al mediodía. ¿Qué es eso?', fa: 'نانوایی چاشت نان را نصف قیمت می‌فروشد. این چیست؟' },
        choices: [
          { en: 'An incentive', es: 'Un incentivo', fa: 'یک تشویق' },
          { en: 'A scarcity', es: 'Una escasez', fa: 'یک کمبود' },
          { en: 'An opportunity cost', es: 'Un costo de oportunidad', fa: 'یک هزینهٔ فرصت' },
          { en: 'A factor of production', es: 'Un factor de producción', fa: 'یک عامل تولید' }],
        answer: 0,
        why: { en: 'An incentive is a reward that pushes people to choose. Cheap bread pushes shoppers to buy.', es: 'Un incentivo es un premio que empuja a elegir. El pan barato empuja a comprar.', fa: 'تشویق جایزه‌ای است که مردم را به انتخاب وادار می‌کند. نان ارزان خریداران را به خرید وادار می‌کند.' } },
      { q: { en: 'Every economy must answer: what to make, how to make it, and what else?', es: 'Toda economía debe responder: qué producir, cómo producirlo y ¿qué más?', fa: 'هر اقتصاد باید جواب بدهد: چه بسازد، چطور بسازد، و دیگر چه؟' },
        choices: [
          { en: 'For whom to make it', es: 'Para quién producirlo', fa: 'برای کی بسازد' },
          { en: 'Where to hide it all', es: 'Dónde esconderlo todo', fa: 'همه را کجا پنهان کند' },
          { en: 'When to stop working', es: 'Cuándo dejar de trabajar', fa: 'چه وقت کار را بس کند' },
          { en: 'Why people like it', es: 'Por qué le gusta a la gente', fa: 'چرا مردم آن را دوست دارند' }],
        answer: 0,
        why: { en: 'The 3 basic questions are: what to produce, how to produce it, and for whom.', es: 'Las 3 preguntas básicas son: qué producir, cómo producirlo y para quién.', fa: '۳ سوال اساسی اینها هستند: چه تولید شود، چطور تولید شود، و برای کی.' } },
      { q: { en: 'Which of these is a service, not a good?', es: '¿Cuál de estos es un servicio, no un bien?', fa: 'کدام یکی از اینها خدمت است، نه کالا؟' },
        choices: [
          { en: 'A haircut at a salon', es: 'Un corte de pelo en un salón', fa: 'کوتاه کردن مو در سالون' },
          { en: 'A box of fresh peaches', es: 'Una caja de duraznos frescos', fa: 'یک قطی شفتالوی تازه' },
          { en: 'A loaf of warm bread', es: 'Un pan caliente', fa: 'یک نان گرم' },
          { en: 'A new bike tire', es: 'Una llanta nueva de bicicleta', fa: 'یک تایر نو بایسکل' }],
        answer: 0,
        why: { en: 'A service is work someone does for you. Goods are things you can touch.', es: 'Un servicio es un trabajo que alguien hace por ti. Los bienes se pueden tocar.', fa: 'خدمت کاری است که کسی برایت انجام می‌دهد. کالا چیزی است که لمس کرده می‌توانی.' } }
    ]
  },

  learned: [
    { en: '[[economics|Economics]] is how people use scarce resources to meet needs and wants.', es: 'La [[economics|economía]] es cómo la gente usa recursos escasos para cubrir necesidades y deseos.', fa: '[[economics|اقتصاد]] یعنی مردم چطور از منابع کم برای ضرورت‌ها و خواهش‌ها کار می‌گیرند.' },
    { en: 'Every choice has an [[opportunity cost|opportunity cost]]: the next best thing you give up.', es: 'Cada decisión tiene un [[opportunity cost|costo de oportunidad]]: la siguiente mejor cosa a la que renuncias.', fa: 'هر انتخاب یک [[opportunity cost|هزینهٔ فرصت]] دارد: بهترین چیز بعدی که از دست می‌دهی.' },
    { en: 'Things are made with land, labor, [[capital|capital]] and entrepreneurship.', es: 'Las cosas se hacen con tierra, trabajo, [[capital|capital]] y emprendimiento.', fa: 'چیزها با زمین، نیروی کار، [[capital|سرمایه]] و کارآفرینی ساخته می‌شوند.' }
  ],
  reflect: {
    q: { en: 'Think of a choice you made this week. What did you pick, and what was your next best choice?', es: 'Piensa en una decisión que tomaste esta semana. ¿Qué elegiste y cuál era tu siguiente mejor opción?', fa: 'به یک انتخاب این هفته‌ات فکر کن. چه را انتخاب کردی، و بهترین انتخاب بعدی‌ات چه بود؟' },
    starter: { en: 'This week I chose', es: 'Esta semana elegí', fa: 'این هفته من ... را انتخاب کردم' }
  }
};
