/* COINWALKER · Episode 1.2 · Economic Systems (who decides: tradition, the government, the market, or a mix?)
   Four Winds Harbor: a MADE-UP harbor town on a trade fair day. Traders from four made-up lands meet here.
   North-west: Westwind (traditional): huts (H over N), family farm soil (o), a fish pond (~) with a little dock.
   North-east: Northwind (command): the planning office and the state offices (J), the state bike factory (X),
   a paved parade yard (l). Row 10 is the harbor road (:) running east to the dock (k) on the sea.
   South-west: Southwind (mixed): the public clinic (Q), a private bakery (R), the park with flowers (,) and the fountain (O).
   South-east: Eastwind (market): rows of private stalls (m), a paved market floor (l), a juice shop (R) by the water.
   A dirt path (:) runs north to south through the middle of the fair.
   The ledger stone asks the student to carry each situation card to Traditional, Command, Market or Mixed. */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'EPF',
  title: { en: 'Who Decides? Economic Systems', es: '¿Quién decide? Los sistemas económicos', fa: 'کی تصمیم می‌گیرد؟ سیستم‌های اقتصادی' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Four Winds Harbor, trade fair day', es: 'Puerto de los Cuatro Vientos, día de feria', fa: 'بندر چهار باد، روز نمایشگاه تجارت' },
  intro: [
    { en: 'Four Winds Harbor is a made-up place. The Grump tore its page about who decides.',
      es: 'El Puerto de los Cuatro Vientos es un lugar inventado. El Gruñón rompió su página sobre quién decide.',
      fa: 'بندر چهار باد یک جای خیالی است. غرغرو صفحهٔ «کی تصمیم می‌گیرد» را پاره کرد.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up harbor near the Atlantic coast on the world map (no timeline in this game) */
  scenes: {
    at: [-76.3, 36.9],
    start: [
      { en: 'Four Winds Harbor is a made-up town by the sea. It is not real.',
        es: 'El Puerto de los Cuatro Vientos es un pueblo inventado junto al mar. No es real.',
        fa: 'بندر چهار باد یک شهرک خیالی کنار بحر است. واقعی نیست.' },
      { en: 'Today, traders from four made-up lands meet here for a big fair.',
        es: 'Hoy, comerciantes de cuatro tierras inventadas se reúnen aquí para una gran feria.',
        fa: 'امروز تاجران چهار سرزمین خیالی برای یک نمایشگاه بزرگ اینجا جمع می‌شوند.' },
      { en: 'Each land answers the same 3 money questions in its own way.',
        es: 'Cada tierra responde las mismas 3 preguntas de dinero a su manera.',
        fa: 'هر سرزمین به همان ۳ سوال پولی به شیوهٔ خودش جواب می‌دهد.' }
    ],
    page: { en: 'Most countries in the world today have mixed economies.',
      es: 'Hoy, la mayoría de los países del mundo tienen economías mixtas.',
      fa: 'امروز بیشتر کشورهای جهان اقتصاد مختلط دارند.' },
    guess: {
      q: { en: 'Do all countries decide what to make in the same way?', es: '¿Todos los países deciden qué producir de la misma manera?', fa: 'آیا همهٔ کشورها به یک شیوه تصمیم می‌گیرند چه بسازند؟' },
      choices: [
        { t: { en: '🌍 No, in different ways', es: '🌍 No, de maneras distintas', fa: '🌍 نه، به شیوه‌های مختلف' }, ok: true },
        { t: { en: '🟰 Yes, all the same way', es: '🟰 Sí, todos igual', fa: '🟰 بله، همه یک‌رقم' } }
      ],
      why: { en: 'Customs, the government, the market, or a mix can decide. Each country chooses its way.', es: 'Pueden decidir las costumbres, el gobierno, el mercado o una mezcla. Cada país elige su forma.', fa: 'رسم و رواج، حکومت، بازار یا یک ترکیب تصمیم گرفته می‌تواند. هر کشور راه خود را دارد.' }
    },
    next: {
      q: { en: 'Next: when a price goes up, do sellers want to sell more or less?', es: 'Ahora: cuando un precio sube, ¿los vendedores quieren vender más o menos?', fa: 'بعدی: وقتی قیمت بالا می‌رود، فروشنده‌ها می‌خواهند بیشتر بفروشند یا کمتر؟' },
      choices: [
        { t: { en: '📈 More', es: '📈 Más', fa: '📈 بیشتر' }, ok: true },
        { t: { en: '📉 Less', es: '📉 Menos', fa: '📉 کمتر' } }
      ],
      why: { en: 'A higher price means more money for each sale. So sellers want to sell more.', es: 'Un precio más alto da más dinero por cada venta. Por eso los vendedores quieren vender más.', fa: 'قیمت بلندتر یعنی پول بیشتر برای هر فروش. پس فروشنده‌ها می‌خواهند بیشتر بفروشند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 3], name: { en: 'Grandma Nayeli', es: 'Abuela Nayeli', fa: 'مادرکلان نایلی' },
      look: { skin: 3, hair: '#d8d8d8', shirt: '#b0402a', pants: '#3a2a1a', style: 'long' },
      lines: [
        { en: 'My mother taught me to weave. Now I teach my granddaughter.', es: 'Mi madre me enseñó a tejer. Ahora yo le enseño a mi nieta.', fa: 'مادرم به من بافتن یاد داد. حالا من به نواسه‌ام یاد می‌دهم.' },
        { en: 'In Westwind, jobs pass down from parents to children.', es: 'En Viento del Oeste, los oficios pasan de padres a hijos.', fa: 'در باد غرب، کارها از پدر و مادر به فرزندان می‌رسد.' },
        { en: 'Our old ways are wise. They help us live well with the land.', es: 'Nuestras costumbres antiguas son sabias. Nos ayudan a vivir bien con la tierra.', fa: 'رسم‌های قدیمی ما پر از دانایی است. کمک می‌کنند با زمین خوب زندگی کنیم.' }
      ] },
    { at: [8, 4], name: { en: 'Tupa', es: 'Tupa', fa: 'توپا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#4a7a5a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I fish and hunt with my uncles, the way we always have.', es: 'Pesco y cazo con mis tíos, como siempre lo hemos hecho.', fa: 'من با کاکاهایم ماهی می‌گیرم و شکار می‌کنم، همان‌طور که همیشه کرده‌ایم.' },
        { en: 'Who gets the fish? Our custom says every family gets a fair share.', es: '¿Quién recibe el pescado? Nuestra costumbre dice que cada familia recibe su parte.', fa: 'ماهی به کی می‌رسد؟ رسم ما می‌گوید هر خانواده سهم عادلانه می‌گیرد.' },
        { en: 'New tools come slowly here. Our elders like to keep the old ways.', es: 'Aquí las herramientas nuevas llegan despacio. Los mayores quieren las costumbres de antes.', fa: 'ابزار نو اینجا آهسته می‌آید. بزرگان ما رسم‌های قدیمی را نگه می‌دارند.' }
      ] },
    { at: [21, 2], name: { en: 'Mr. Dorin', es: 'Sr. Dorin', fa: 'آقای دورین' },
      look: { skin: 1, hair: '#6a6a6a', shirt: '#5a6a8a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I work in the planning office. We write a plan for every year.', es: 'Trabajo en la oficina de planes. Escribimos un plan para cada año.', fa: 'من در دفتر پلان کار می‌کنم. ما برای هر سال یک پلان می‌نویسیم.' },
        { en: 'This year: 2,000 bikes and 5,000 coats. Every factory must follow it.', es: 'Este año: 2,000 bicicletas y 5,000 abrigos. Cada fábrica debe cumplirlo.', fa: 'امسال: ۲۰۰۰ بایسکل و ۵۰۰۰ کرتی. هر فابریکه باید از آن پیروی کند.' },
        { en: 'One year we forgot boots. That winter, the stores had none.', es: 'Un año olvidamos las botas. Ese invierno, las tiendas no tenían.', fa: 'یک سال موزه را فراموش کردیم. آن زمستان، دکان‌ها هیچ موزه نداشتند.' }
      ] },
    { at: [3, 13], name: { en: 'Dr. Asha', es: 'Dra. Asha', fa: 'داکتر آشا' },
      look: { skin: 2, hair: '#1a1008', shirt: '#f0f0f0', pants: '#3a5a7a', style: 'bun' },
      lines: [
        { en: 'This is a public clinic in Southwind. Taxes help pay for it.', es: 'Esta es una clínica pública en Viento del Sur. Los impuestos ayudan a pagarla.', fa: 'این یک کلینیک دولتی در باد جنوب است. مالیات به پرداخت آن کمک می‌کند.' },
        { en: 'Southwind has a [[mixed economy|mixed economy]]. Most businesses are private.', es: 'Viento del Sur tiene una [[mixed economy|economía mixta]]. Casi todos los negocios son privados.', fa: 'باد جنوب [[mixed economy|اقتصاد مختلط]] دارد. بیشتر کسب و کارها شخصی هستند.' },
        { en: 'The government adds some rules and services, like clinics and schools.', es: 'El gobierno agrega algunas reglas y servicios, como clínicas y escuelas.', fa: 'حکومت بعضی قانون‌ها و خدمات را اضافه می‌کند، مثل کلینیک و مکتب.' }
      ] },
    { at: [8, 13], name: { en: 'Mr. Ruiz', es: 'Sr. Ruiz', fa: 'آقای رویز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#e8e0c8', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'I own this bakery. I choose what to bake and what to charge.', es: 'Soy dueño de esta panadería. Yo elijo qué hornear y cuánto cobrar.', fa: 'این نانوایی از من است. خودم انتخاب می‌کنم چه بپزم و چند بفروشم.' },
        { en: 'But I must follow food safety rules. The government checks my kitchen.', es: 'Pero debo seguir las reglas de higiene. El gobierno revisa mi cocina.', fa: 'اما باید از قانون‌های صحت خوراک پیروی کنم. حکومت آشپزخانه‌ام را بررسی می‌کند.' },
        { en: 'The United States is mixed like this. So are most countries.', es: 'Estados Unidos es mixto así. Y también la mayoría de los países.', fa: 'امریکا هم این‌طور مختلط است. بیشتر کشورها هم همین‌طور.' }
      ] },
    { at: [22, 18], name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      look: { skin: 5, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I opened this juice shop. If people like it, I make a profit.', es: 'Abrí esta tienda de jugos. Si a la gente le gusta, gano dinero.', fa: 'این دکان جوس را باز کردم. اگر مردم خوش‌شان بیاید، فایده می‌کنم.' },
        { en: 'Markets bring choice and new ideas. Sellers work hard to win buyers.', es: 'Los mercados traen opciones e ideas nuevas. Los vendedores se esfuerzan por ganar clientes.', fa: 'بازار انتخاب و اندیشه‌های نو می‌آورد. فروشنده‌ها برای جلب خریدار زحمت می‌کشند.' },
        { en: 'But some people cannot pay. A market alone can leave them behind.', es: 'Pero algunas personas no pueden pagar. Un mercado solo puede dejarlas atrás.', fa: 'اما بعضی مردم پول داده نمی‌توانند. بازار تنها ممکن است آنها را عقب بگذارد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: Westwind (traditional) huts, farm soil and a fish pond with a dock.
     North-east: Northwind (command) planning office and state offices (J), the state factory (X), the parade yard (l).
     Row 10: the harbor road (:) east to the dock (k). A north-south path (:) runs down column 15.
     South-west: Southwind (mixed) clinic (Q), bakery (R), the park (,) with the fountain (O).
     South-east: Eastwind (market) stalls (m), the market floor (l), Lena's juice shop (R), a dock on the sea. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~~',
    'T.............T:T..JJJJJ.XXX.~~~',
    'T.HHH..........:...JJdJJ.XXX.~~~',
    'T.NdN..HHH.....:.............~~~',
    'T......NdN.....:..lllllllll..~~~',
    'T.oooo.........:..lllllllll..~~~',
    'T.oooo.~~~.....:..lllllllll..~~~',
    'T.oooo.~~~k....:..lllllllll..~~~',
    'T......~~~.....:.............~~~',
    'T..x...........:..x..........~~~',
    'T::::::::::::::::::::::::::::kk~',
    'T..............:.............~~~',
    'T.QQQ..RRR.....:..mm..mm..mm.~~~',
    'T.hdh..hdh.....:.............~~~',
    'T..............:..lllllllll..~~~',
    'T.,,,,,........:..lllllllll..~~~',
    'T.,,,,,..O.....:..lllllllll..~~~',
    'T.,,,,,........:..mm.RRR.....k~~',
    'T..............:.....hdh.....~~~',
    'T..x...........:.x...........~~~',
    'T.T..........T.:.T.........T.~~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~'
  ],
  start: [15, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [6, 9], at: [6, 5], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps north, next to the family farm.', es: 'Desde esta nota, camina 4 pasos al norte, junto a la granja familiar.', fa: 'از این یادداشت، ۴ قدم به شمال برو، کنار فارم خانوادگی.' },
      text: { en: 'A small drum! In Westwind, old songs teach children how to fish and farm.', es: '¡Un tambor pequeño! En Viento del Oeste, canciones antiguas enseñan a los niños a pescar y sembrar.', fa: 'یک دهل کوچک! در باد غرب، آهنگ‌های قدیمی به کودکان ماهیگیری و دهقانی یاد می‌دهند.' } },
    { clueAt: [12, 14], at: [12, 18], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps south, toward the trees.', es: 'Desde esta nota, camina 4 pasos al sur, hacia los árboles.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، به طرف درختان.' },
      text: { en: 'A shell! Long ago, some peoples used small shells as money.', es: '¡Una concha! Hace mucho tiempo, algunos pueblos usaban conchas pequeñas como dinero.', fa: 'یک صدف! در زمان‌های قدیم، بعضی مردم از صدف‌های کوچک به حیث پول کار می‌گرفتند.' } }
  ],

  words: {
    'traditional economy': { en: 'customs and the past decide what, how and for whom', es: 'las costumbres y el pasado deciden qué, cómo y para quién', fa: 'رسم و رواج و گذشته تصمیم می‌گیرند چه، چطور و برای کی' },
    custom: { en: 'a way of doing things that people have followed for a long time', es: 'una forma de hacer las cosas que la gente sigue desde hace mucho', fa: 'یک شیوهٔ کار که مردم از زمان‌های دراز پیروی کرده‌اند' },
    'command economy': { en: 'the government decides what, how and for whom', es: 'el gobierno decide qué, cómo y para quién', fa: 'حکومت تصمیم می‌گیرد چه، چطور و برای کی' },
    shortage: { en: 'when there is not enough of something for the people who want it', es: 'cuando no hay suficiente de algo para la gente que lo quiere', fa: 'وقتی از یک چیز برای مردمی که آن را می‌خواهند بس نیست' },
    'market economy': { en: 'buyers and sellers decide what, how and for whom', es: 'los compradores y vendedores deciden qué, cómo y para quién', fa: 'خریداران و فروشنده‌ها تصمیم می‌گیرند چه، چطور و برای کی' },
    'private property': { en: 'things that people (not the government) own and control', es: 'cosas que las personas (no el gobierno) poseen y controlan', fa: 'چیزهایی که مردم (نه حکومت) مالک آن هستند' },
    profit: { en: 'the money left after a business pays its costs', es: 'el dinero que queda después de que un negocio paga sus costos', fa: 'پولی که بعد از پرداخت مصارف کسب و کار باقی می‌ماند' },
    competition: { en: 'sellers trying to win the same buyers', es: 'vendedores que tratan de ganar a los mismos compradores', fa: 'کوشش فروشنده‌ها برای جلب همان خریداران' },
    'voluntary exchange': { en: 'buying and selling because both people want to, not because they must', es: 'comprar y vender porque las dos personas quieren, no porque deben', fa: 'خرید و فروش چون هر دو نفر می‌خواهند، نه چون مجبور هستند' },
    'mixed economy': { en: 'mostly market, with some government rules and services', es: 'casi todo es mercado, con algunas reglas y servicios del gobierno', fa: 'بیشتر بازار، با بعضی قانون‌ها و خدمات حکومت' }
  },

  npcs: [
    {
      x: 11, y: 8,
      name: { en: 'Kaya', es: 'Kaya', fa: 'کایا' },
      role: { en: 'Fisher from Westwind', es: 'Pescadora de Viento del Oeste', fa: 'ماهیگیر از باد غرب' },
      look: { skin: 4, hair: '#1a1008', shirt: '#3a7aa0', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'I am from Westwind. We fish and farm, like our grandparents did.', es: 'Soy de Viento del Oeste. Pescamos y sembramos como nuestros abuelos.', fa: 'من از باد غرب هستم. مثل پدرکلان‌هایمان ماهی می‌گیریم و دهقانی می‌کنیم.' },
        { en: 'We have a [[traditional economy|traditional economy]]. [[custom|Customs]] and the past decide.', es: 'Tenemos una [[traditional economy|economía tradicional]]. Las [[custom|costumbres]] y el pasado deciden.', fa: 'ما [[traditional economy|اقتصاد سنتی]] داریم. [[custom|رسم و رواج]] و گذشته تصمیم می‌گیرند.' },
        { en: 'My mother was a fisher, so I am a fisher too.', es: 'Mi madre era pescadora, así que yo también soy pescadora.', fa: 'مادرم ماهیگیر بود، پس من هم ماهیگیر هستم.' },
        { en: 'Life is stable, and everyone knows their job. But change comes slowly.', es: 'La vida es estable y todos saben su trabajo. Pero los cambios llegan despacio.', fa: 'زندگی آرام و ثابت است و هر کس کارش را می‌داند. اما تغییر آهسته می‌آید.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'In a traditional economy, what decides what people make?', es: 'En una economía tradicional, ¿qué decide lo que la gente produce?', fa: 'در اقتصاد سنتی، چه چیز تصمیم می‌گیرد مردم چه بسازند؟' },
        choices: [
          { ok: true, t: { en: 'Customs and the ways of the past', es: 'Las costumbres y las formas del pasado', fa: 'رسم و رواج و شیوه‌های گذشته' },
            why: { en: 'Yes! People make what their families always made, the way they always made it.', es: '¡Sí! La gente produce lo que su familia siempre hizo, como siempre lo hizo.', fa: 'بله! مردم همان چیزی را می‌سازند که خانواده‌شان همیشه ساخته، به همان شیوه.' } },
          { t: { en: 'A yearly plan from the government', es: 'Un plan anual del gobierno', fa: 'یک پلان سالانه از حکومت' },
            why: { en: 'No. A government plan is a command economy. In Westwind, customs decide.', es: 'No. Un plan del gobierno es una economía dirigida. En Viento del Oeste deciden las costumbres.', fa: 'نه. پلان حکومت اقتصاد دستوری است. در باد غرب، رسم و رواج تصمیم می‌گیرد.' } },
          { t: { en: 'Prices set by buyers and sellers', es: 'Precios que ponen compradores y vendedores', fa: 'قیمتی که خریدار و فروشنده می‌گذارند' },
            why: { en: 'No. Buyers and sellers decide in a market economy. Here, the past decides.', es: 'No. Compradores y vendedores deciden en una economía de mercado. Aquí decide el pasado.', fa: 'نه. خریدار و فروشنده در اقتصاد بازار تصمیم می‌گیرند. اینجا گذشته تصمیم می‌گیرد.' } }
        ]
      }
    },
    {
      x: 23, y: 8,
      name: { en: 'Mira', es: 'Mira', fa: 'میرا' },
      role: { en: 'Factory worker from Northwind', es: 'Obrera de Viento del Norte', fa: 'کارگر فابریکه از باد شمال' },
      look: { skin: 1, hair: '#6a3a1a', shirt: '#7a7a7a', pants: '#2a3a4a', style: 'bun' },
      lines: [
        { en: 'I build bikes in a Northwind factory. The government owns it.', es: 'Armo bicicletas en una fábrica de Viento del Norte. Es del gobierno.', fa: 'من در یک فابریکهٔ باد شمال بایسکل می‌سازم. مالک آن حکومت است.' },
        { en: 'In a [[command economy|command economy]], the government decides what, how and for whom.', es: 'En una [[command economy|economía dirigida]], el gobierno decide qué, cómo y para quién.', fa: 'در [[command economy|اقتصاد دستوری]]، حکومت تصمیم می‌گیرد چه، چطور و برای کی.' },
        { en: 'Real examples: the Soviet Union in the past, and North Korea today.', es: 'Ejemplos reales: la Unión Soviética en el pasado y Corea del Norte hoy.', fa: 'مثال‌های واقعی: اتحاد شوروی در گذشته، و کوریای شمالی امروز.' },
        { en: 'A plan can move fast. But choice is small, and [[shortage|shortages]] happen.', es: 'Un plan puede avanzar rápido. Pero hay poca opción y hay [[shortage|escasez]].', fa: 'پلان می‌تواند تیز پیش برود. اما انتخاب کم است و [[shortage|کمبود]] پیش می‌آید.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'In a command economy, who decides what the factories make?', es: 'En una economía dirigida, ¿quién decide qué producen las fábricas?', fa: 'در اقتصاد دستوری، کی تصمیم می‌گیرد فابریکه‌ها چه بسازند؟' },
        choices: [
          { ok: true, t: { en: 'The government, with its plan', es: 'El gobierno, con su plan', fa: 'حکومت، با پلان خودش' },
            why: { en: 'Yes! The government owns most businesses and plans what they make.', es: '¡Sí! El gobierno es dueño de casi todos los negocios y planea qué producen.', fa: 'بله! حکومت مالک بیشتر کسب و کارها است و پلان می‌کند چه بسازند.' } },
          { t: { en: 'Each buyer, with their money', es: 'Cada comprador, con su dinero', fa: 'هر خریدار، با پول خودش' },
            why: { en: 'No. Buyers decide in a market economy. In Northwind, the plan decides.', es: 'No. Los compradores deciden en una economía de mercado. En Viento del Norte decide el plan.', fa: 'نه. خریداران در اقتصاد بازار تصمیم می‌گیرند. در باد شمال، پلان تصمیم می‌گیرد.' } },
          { t: { en: 'Old customs from the past', es: 'Costumbres antiguas del pasado', fa: 'رسم‌های قدیمی گذشته' },
            why: { en: 'No. Customs decide in a traditional economy. Here, the government decides.', es: 'No. Las costumbres deciden en una economía tradicional. Aquí decide el gobierno.', fa: 'نه. رسم و رواج در اقتصاد سنتی تصمیم می‌گیرد. اینجا حکومت تصمیم می‌گیرد.' } }
        ]
      }
    },
    {
      x: 22, y: 13,
      name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      role: { en: 'Shoe seller from Eastwind', es: 'Vendedor de zapatos de Viento del Este', fa: 'بوت‌فروش از باد شرق' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a8a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I sell shoes in Eastwind, a [[market economy|market economy]]. Buyers and sellers decide.', es: 'Vendo zapatos en Viento del Este, una [[market economy|economía de mercado]]. Deciden compradores y vendedores.', fa: 'من در باد شرق بوت می‌فروشم، یک [[market economy|اقتصاد بازار]]. خریدار و فروشنده تصمیم می‌گیرند.' },
        { en: 'I own my stall. That is [[private property|private property]]. I keep my [[profit|profit]].', es: 'El puesto es mío. Eso es [[private property|propiedad privada]]. Me quedo con mi [[profit|ganancia]].', fa: 'غرفه‌ام از خودم است. این [[private property|ملکیت شخصی]] است. [[profit|فایده‌ام]] از خودم است.' },
        { en: 'The seller next door sells shoes too. Our [[competition|competition]] keeps prices low.', es: 'El vecino también vende zapatos. Nuestra [[competition|competencia]] mantiene los precios bajos.', fa: 'فروشندهٔ بغل هم بوت می‌فروشد. [[competition|رقابت]] ما قیمت‌ها را پایین نگه می‌دارد.' },
        { en: 'No one must buy from me. That is [[voluntary exchange|voluntary exchange]].', es: 'Nadie está obligado a comprarme. Eso es [[voluntary exchange|intercambio voluntario]].', fa: 'هیچ کس مجبور نیست از من بخرد. این [[voluntary exchange|تبادلهٔ داوطلبانه]] است.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Two shoe sellers compete for buyers. What usually happens?', es: 'Dos vendedores de zapatos compiten por los compradores. ¿Qué pasa casi siempre?', fa: 'دو بوت‌فروش برای خریداران رقابت می‌کنند. اکثراً چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Better shoes and lower prices', es: 'Mejores zapatos y precios más bajos', fa: 'بوت بهتر و قیمت پایین‌تر' },
            why: { en: 'Yes! Each seller tries to win buyers, so shoes get better and cheaper.', es: '¡Sí! Cada vendedor quiere ganar clientes, así que los zapatos mejoran y bajan de precio.', fa: 'بله! هر فروشنده می‌خواهد خریدار جلب کند، پس بوت بهتر و ارزان‌تر می‌شود.' } },
          { t: { en: 'Fewer shoes and longer lines', es: 'Menos zapatos y filas más largas', fa: 'بوت کمتر و صف درازتر' },
            why: { en: 'No. Long lines and few goods are signs of a shortage, more common with a plan.', es: 'No. Filas largas y pocos bienes son señales de escasez, más común con un plan.', fa: 'نه. صف دراز و کالای کم نشانهٔ کمبود است که با پلان بیشتر پیش می‌آید.' } },
          { t: { en: 'The government sets one price', es: 'El gobierno pone un solo precio', fa: 'حکومت یک قیمت می‌گذارد' },
            why: { en: 'No. In a market economy, sellers set their own prices.', es: 'No. En una economía de mercado, cada vendedor pone sus propios precios.', fa: 'نه. در اقتصاد بازار، فروشنده‌ها قیمت خود را می‌گذارند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 9, text: { en: 'WESTWIND · A traditional economy. Customs and the past decide.', es: 'VIENTO DEL OESTE · Una economía tradicional. Deciden las costumbres y el pasado.', fa: 'باد غرب · یک اقتصاد سنتی. رسم و رواج و گذشته تصمیم می‌گیرند.' } },
    { x: 18, y: 9, text: { en: 'NORTHWIND · A command economy. The government plan decides.', es: 'VIENTO DEL NORTE · Una economía dirigida. Decide el plan del gobierno.', fa: 'باد شمال · یک اقتصاد دستوری. پلان حکومت تصمیم می‌گیرد.' } },
    { x: 3, y: 19, text: { en: 'SOUTHWIND · A mixed economy. Mostly market, plus some government rules and services.', es: 'VIENTO DEL SUR · Una economía mixta. Casi todo mercado, más reglas y servicios del gobierno.', fa: 'باد جنوب · یک اقتصاد مختلط. بیشتر بازار، با بعضی قانون‌ها و خدمات حکومت.' } },
    { x: 17, y: 19, text: { en: 'EASTWIND · A market economy. Buyers and sellers decide. No real country is purely market.', es: 'VIENTO DEL ESTE · Una economía de mercado. Deciden compradores y vendedores. Ningún país real es solo mercado.', fa: 'باد شرق · یک اقتصاد بازار. خریدار و فروشنده تصمیم می‌گیرند. هیچ کشور واقعی تنها بازار نیست.' } }
  ],

  /* the quest: Ms. Okafor the food safety inspector (gold !) in Southwind, south-west -> Jun the weather watcher
     in Northwind, north-east -> find her checklist in Westwind, north of the first hut (north-west) -> back to Ms. Okafor. */
  quest: {
    stat: 'reg',
    title: { en: 'The Lost Safety Checklist', es: 'La lista de seguridad perdida', fa: 'فهرست گمشدهٔ صحت' },
    giver: {
      x: 11, y: 12,
      name: { en: 'Ms. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      role: { en: 'Food safety inspector', es: 'Inspectora de higiene', fa: 'بازرس صحت خوراک' },
      look: { skin: 5, hair: '#1a1008', shirt: '#3a5aa0', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I check that the food at the fair is safe. Southwind pays me.', es: 'Reviso que la comida de la feria sea segura. Viento del Sur me paga.', fa: 'من بررسی می‌کنم که خوراک نمایشگاه صحی باشد. باد جنوب معاشم را می‌دهد.' },
        { en: 'The wind took my checklist! The stalls cannot open without it.', es: '¡El viento se llevó mi lista! Los puestos no pueden abrir sin ella.', fa: 'باد فهرستم را برد! غرفه‌ها بدون آن باز شده نمی‌توانند.' },
        { en: 'Jun watches the wind in Northwind. Ask him!', es: 'Jun observa el viento en Viento del Norte. ¡Pregúntale!', fa: 'جون در باد شمال باد را تماشا می‌کند. از او بپرس!' }
      ],
      wait: { en: 'Jun watches the wind in Northwind, in the north-east of the fair.', es: 'Jun observa el viento en Viento del Norte, al noreste de la feria.', fa: 'جون در باد شمال، در شمال شرق نمایشگاه، باد را تماشا می‌کند.' },
      thanks: { en: 'My checklist! Private stalls and public safety rules. That is a mixed economy.', es: '¡Mi lista! Puestos privados y reglas públicas de seguridad. Eso es una economía mixta.', fa: 'فهرستم! غرفه‌های شخصی و قانون‌های صحت دولتی. این اقتصاد مختلط است.' }
    },
    contact: {
      x: 17, y: 3,
      name: { en: 'Jun', es: 'Jun', fa: 'جون' },
      role: { en: 'Harbor weather watcher', es: 'Observador del clima del puerto', fa: 'نگهبان هوای بندر' },
      look: { skin: 1, hair: '#120c08', shirt: '#c0a040', pants: '#3a3a3a', hat: '#2a4a7a', style: 'short' },
      lines: [
        { en: 'I watch the weather for the harbor. Today the wind blows west.', es: 'Observo el clima para el puerto. Hoy el viento sopla hacia el oeste.', fa: 'من هوای بندر را تماشا می‌کنم. امروز باد به طرف غرب می‌وزد.' },
        { en: 'Your list flew west to Westwind. Look just north of the first hut.', es: 'Tu lista voló al oeste, a Viento del Oeste. Busca justo al norte de la primera choza.', fa: 'فهرستت به غرب، به باد غرب پرید. درست شمال اولین کلبه را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [3, 1],
      hint: { en: 'Look north of the first hut in Westwind, in the north-west', es: 'Busca al norte de la primera choza de Viento del Oeste, en el noroeste', fa: 'شمال اولین کلبهٔ باد غرب، در شمال غرب، را ببین' },
      found: { en: 'The checklist! It was caught on the trees behind the hut.', es: '¡La lista! Estaba atrapada en los árboles detrás de la choza.', fa: 'فهرست! در درختان پشت کلبه گیر مانده بود.' },
      item: { icon: '📋', name: { en: 'A food safety checklist', es: 'Una lista de higiene', fa: 'یک فهرست صحت خوراک' } }
    }
  },

  scraps: [[13, 1], [28, 1], [1, 20]],
  smudges: [[12, 3], [20, 20]],

  challenge: {
    at: [12, 11],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each system, in its own land: Traditional on the Westwind farm, Command on the Northwind
    // parade yard, Mixed in the Southwind park, Market on the Eastwind market floor
    zones: [{ bin: 'trad', x: 2, y: 5, w: 4, h: 3 }, { bin: 'command', x: 19, y: 5, w: 7, h: 2 },
      { bin: 'market', x: 19, y: 15, w: 7, h: 2 }, { bin: 'mixed', x: 2, y: 15, w: 5, h: 2 }],
    stat: 'loc',
    title: { en: 'Who decides here?', es: '¿Quién decide aquí?', fa: 'اینجا کی تصمیم می‌گیرد؟' },
    intro: { en: 'Each card shows how a land decides. Carry it to Traditional, Command, Market or Mixed.',
      es: 'Cada tarjeta muestra cómo decide una tierra. Llévala a Tradicional, Dirigida, De mercado o Mixta.',
      fa: 'هر کارت نشان می‌دهد یک سرزمین چطور تصمیم می‌گیرد. آن را به سنتی، دستوری، بازار یا مختلط ببر.' },
    bins: [
      { id: 'trad', icon: '🎣', label: { en: 'Traditional', es: 'Tradicional', fa: 'سنتی' }, sub: { en: 'customs and the past decide', es: 'deciden las costumbres y el pasado', fa: 'رسم و رواج و گذشته تصمیم می‌گیرند' } },
      { id: 'command', icon: '🏛️', label: { en: 'Command', es: 'Dirigida', fa: 'دستوری' }, sub: { en: 'the government decides', es: 'decide el gobierno', fa: 'حکومت تصمیم می‌گیرد' } },
      { id: 'market', icon: '🛒', label: { en: 'Market', es: 'De mercado', fa: 'بازار' }, sub: { en: 'buyers and sellers decide', es: 'deciden compradores y vendedores', fa: 'خریدار و فروشنده تصمیم می‌گیرند' } },
      { id: 'mixed', icon: '🔀', label: { en: 'Mixed', es: 'Mixta', fa: 'مختلط' }, sub: { en: 'mostly market, some government', es: 'casi todo mercado, algo de gobierno', fa: 'بیشتر بازار، کمی حکومت' } }
    ],
    items: [
      { bin: 'trad', t: { en: 'A family fishes the same way their grandparents did', es: 'Una familia pesca igual que sus abuelos', fa: 'یک خانواده مثل پدرکلان‌هایش ماهی می‌گیرد' },
        why: { en: 'The past decides how they work. That is a [[traditional economy|traditional economy]].', es: 'El pasado decide cómo trabajan. Eso es una [[traditional economy|economía tradicional]].', fa: 'گذشته تصمیم می‌گیرد چطور کار کنند. این [[traditional economy|اقتصاد سنتی]] است.' } },
      { bin: 'trad', t: { en: 'A girl learns to weave from her mother, as custom says', es: 'Una niña aprende a tejer de su madre, como dice la costumbre', fa: 'یک دختر به حکم رسم، بافتن را از مادرش یاد می‌گیرد' },
        why: { en: 'Jobs pass down from parents to children. [[custom|Custom]] decides. That is traditional.', es: 'Los oficios pasan de padres a hijos. Decide la [[custom|costumbre]]. Eso es tradicional.', fa: 'کارها از پدر و مادر به فرزندان می‌رسد. [[custom|رسم]] تصمیم می‌گیرد. این سنتی است.' } },
      { bin: 'command', t: { en: 'A government plan says the factory makes 500 bikes', es: 'Un plan del gobierno dice que la fábrica hace 500 bicicletas', fa: 'پلان حکومت می‌گوید فابریکه ۵۰۰ بایسکل بسازد' },
        why: { en: 'The government decides what to make. That is a [[command economy|command economy]].', es: 'El gobierno decide qué producir. Eso es una [[command economy|economía dirigida]].', fa: 'حکومت تصمیم می‌گیرد چه ساخته شود. این [[command economy|اقتصاد دستوری]] است.' } },
      { bin: 'command', t: { en: 'The state owns all the stores and sets every price', es: 'El Estado es dueño de todas las tiendas y pone cada precio', fa: 'دولت مالک همهٔ دکان‌ها است و هر قیمت را می‌گذارد' },
        why: { en: 'The government owns the businesses and sets prices. That is command.', es: 'El gobierno es dueño de los negocios y pone los precios. Eso es dirigida.', fa: 'حکومت مالک کسب و کارها است و قیمت می‌گذارد. این دستوری است.' } },
      { bin: 'market', t: { en: 'A shop owner picks her own prices to make a profit', es: 'Una dueña de tienda elige sus precios para ganar dinero', fa: 'یک دکاندار قیمت‌هایش را خودش برای فایده می‌گذارد' },
        why: { en: 'Sellers decide, and they keep their [[profit|profit]]. That is a [[market economy|market economy]].', es: 'Deciden los vendedores y se quedan con su [[profit|ganancia]]. Eso es una [[market economy|economía de mercado]].', fa: 'فروشنده تصمیم می‌گیرد و [[profit|فایده]] را نگه می‌دارد. این [[market economy|اقتصاد بازار]] است.' } },
      { bin: 'market', t: { en: 'Two juice stands compete, so both cut their prices', es: 'Dos puestos de jugo compiten, así que los dos bajan precios', fa: 'دو غرفهٔ جوس رقابت می‌کنند، پس هر دو قیمت را کم می‌کنند' },
        why: { en: 'Buyers and sellers decide the price. [[competition|Competition]] is part of a market economy.', es: 'Compradores y vendedores deciden el precio. La [[competition|competencia]] es parte del mercado.', fa: 'خریدار و فروشنده قیمت را تعیین می‌کنند. [[competition|رقابت]] بخشی از اقتصاد بازار است.' } },
      { bin: 'mixed', t: { en: 'Most shops are private, but the government runs public schools', es: 'Casi todas las tiendas son privadas, pero el gobierno tiene escuelas públicas', fa: 'بیشتر دکان‌ها شخصی هستند، اما حکومت مکتب‌های دولتی را اداره می‌کند' },
        why: { en: 'Mostly market, plus some government services. That is a [[mixed economy|mixed economy]].', es: 'Casi todo mercado, más algunos servicios del gobierno. Eso es una [[mixed economy|economía mixta]].', fa: 'بیشتر بازار، با بعضی خدمات حکومت. این [[mixed economy|اقتصاد مختلط]] است.' } },
      { bin: 'mixed', t: { en: 'Businesses are free, but must follow food safety rules', es: 'Los negocios son libres, pero deben seguir reglas de higiene', fa: 'کسب و کارها آزاد هستند، اما باید قانون صحت خوراک را رعایت کنند' },
        why: { en: 'Free businesses with some government rules make a mix. The US works this way.', es: 'Negocios libres con algunas reglas del gobierno forman una mezcla. EE. UU. funciona así.', fa: 'کسب و کار آزاد با بعضی قانون‌های حکومت یک ترکیب است. امریکا این‌طور است.' } }
    ],
    success: { en: 'Every card is home! Customs, the government, the market, or a mix can decide.', es: '¡Cada tarjeta está en su lugar! Pueden decidir las costumbres, el gobierno, el mercado o una mezcla.', fa: 'هر کارت به جای خود رسید! رسم، حکومت، بازار یا یک ترکیب تصمیم گرفته می‌تواند.' }
  },

  boss: {
    at: [28, 18],
    stat: 'reg',
    need: 3,
    name: { en: 'The Bossy Grump', es: 'El Gruñón Mandón', fa: 'غرغروی زورگو' },
    appear: { en: 'The Bossy Grump is hiding in the sea fog by the harbor!', es: '¡El Gruñón Mandón se esconde en la niebla del mar, junto al puerto!', fa: 'غرغروی زورگو در مه بحر کنار بندر پنهان است!' },
    taunt: { en: 'I decide EVERYTHING! What you make, how you make it, and who gets it. ME!', es: '¡Yo lo decido TODO! Qué haces, cómo lo haces y quién lo recibe. ¡YO!', fa: 'من همه چیز را تصمیم می‌گیرم! چه بسازی، چطور بسازی، و به کی برسد. من!' },
    win: { en: 'The sea fog lifts. Ledger page 1.2 floats down into your hands!', es: 'La niebla del mar se va. ¡La página 1.2 del libro cae en tus manos!', fa: 'مه بحر کنار می‌رود. صفحهٔ ۱.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Every economy must answer 3 questions. What are they?', es: 'Toda economía debe responder 3 preguntas. ¿Cuáles son?', fa: 'هر اقتصاد باید به ۳ سوال جواب بدهد. آنها کدام‌ها هستند؟' },
        choices: [
          { en: 'What to make, how, and for whom', es: 'Qué producir, cómo y para quién', fa: 'چه بسازد، چطور، و برای کی' },
          { en: 'When to work, where, and with whom', es: 'Cuándo trabajar, dónde y con quién', fa: 'چه وقت کار کند، کجا، و با کی' },
          { en: 'Who is rich, who is poor, and why', es: 'Quién es rico, quién es pobre y por qué', fa: 'کی ثروتمند است، کی فقیر، و چرا' },
          { en: 'How much to save, spend, and give', es: 'Cuánto ahorrar, gastar y regalar', fa: 'چقدر پس‌انداز کند، خرچ کند، و ببخشد' }],
        answer: 0,
        why: { en: 'Every society must answer: what to make, how to make it, and for whom.', es: 'Toda sociedad debe responder: qué producir, cómo producirlo y para quién.', fa: 'هر جامعه باید جواب بدهد: چه بسازد، چطور بسازد، و برای کی.' } },
      { q: { en: 'In a traditional economy, what mostly decides what people make?', es: 'En una economía tradicional, ¿qué decide casi siempre lo que la gente produce?', fa: 'در اقتصاد سنتی، بیشتر چه چیز تصمیم می‌گیرد مردم چه بسازند؟' },
        choices: [
          { en: 'Customs and the ways of the past', es: 'Las costumbres y las formas del pasado', fa: 'رسم و رواج و شیوه‌های گذشته' },
          { en: 'A yearly plan from the government', es: 'Un plan anual del gobierno', fa: 'یک پلان سالانه از حکومت' },
          { en: 'Buyers and sellers, through prices', es: 'Compradores y vendedores, con los precios', fa: 'خریدار و فروشنده، از راه قیمت' },
          { en: 'A vote by all the workers each year', es: 'Un voto de todos los obreros cada año', fa: 'رأی همهٔ کارگران در هر سال' }],
        answer: 0,
        why: { en: 'In a traditional economy, customs and the past decide. Roles often pass down in families.', es: 'En una economía tradicional deciden las costumbres y el pasado. Los oficios pasan en las familias.', fa: 'در اقتصاد سنتی، رسم و رواج و گذشته تصمیم می‌گیرند. کارها اکثراً در خانواده می‌ماند.' } },
      { q: { en: 'In a command economy, who decides what, how and for whom?', es: 'En una economía dirigida, ¿quién decide qué, cómo y para quién?', fa: 'در اقتصاد دستوری، کی تصمیم می‌گیرد چه، چطور و برای کی؟' },
        choices: [
          { en: 'The government', es: 'El gobierno', fa: 'حکومت' },
          { en: 'Buyers and sellers', es: 'Compradores y vendedores', fa: 'خریدار و فروشنده' },
          { en: 'Elders and customs', es: 'Los mayores y las costumbres', fa: 'بزرگان و رسم‌ها' },
          { en: 'Each worker alone', es: 'Cada obrero solo', fa: 'هر کارگر به تنهایی' }],
        answer: 0,
        why: { en: 'In a command economy, the government decides and owns most businesses.', es: 'En una economía dirigida, el gobierno decide y es dueño de casi todos los negocios.', fa: 'در اقتصاد دستوری، حکومت تصمیم می‌گیرد و مالک بیشتر کسب و کارها است.' } },
      { q: { en: 'Which country has a command economy today?', es: '¿Qué país tiene hoy una economía dirigida?', fa: 'کدام کشور امروز اقتصاد دستوری دارد؟' },
        choices: [
          { en: 'North Korea', es: 'Corea del Norte', fa: 'کوریای شمالی' },
          { en: 'South Korea', es: 'Corea del Sur', fa: 'کوریای جنوبی' },
          { en: 'Switzerland', es: 'Suiza', fa: 'سویس' },
          { en: 'New Zealand', es: 'Nueva Zelanda', fa: 'زیلاند نو' }],
        answer: 0,
        why: { en: 'North Korea has a command economy today. The Soviet Union had one in the past.', es: 'Corea del Norte tiene hoy una economía dirigida. La Unión Soviética tuvo una en el pasado.', fa: 'کوریای شمالی امروز اقتصاد دستوری دارد. اتحاد شوروی در گذشته داشت.' } },
      { q: { en: 'In a market economy, who mostly decides what gets made?', es: 'En una economía de mercado, ¿quién decide casi siempre qué se produce?', fa: 'در اقتصاد بازار، بیشتر کی تصمیم می‌گیرد چه ساخته شود؟' },
        choices: [
          { en: 'Buyers and sellers', es: 'Compradores y vendedores', fa: 'خریدار و فروشنده' },
          { en: 'The government plan', es: 'El plan del gobierno', fa: 'پلان حکومت' },
          { en: 'The village elders', es: 'Los mayores del pueblo', fa: 'بزرگان قریه' },
          { en: 'One single company', es: 'Una sola empresa', fa: 'فقط یک شرکت' }],
        answer: 0,
        why: { en: 'In a market economy, buyers and sellers decide, through voluntary exchange and prices.', es: 'En una economía de mercado deciden compradores y vendedores, con intercambio voluntario y precios.', fa: 'در اقتصاد بازار، خریدار و فروشنده از راه تبادلهٔ داوطلبانه و قیمت تصمیم می‌گیرند.' } },
      { q: { en: 'What kind of economy does the United States have?', es: '¿Qué tipo de economía tiene Estados Unidos?', fa: 'امریکا چه نوع اقتصاد دارد؟' },
        choices: [
          { en: 'Mixed: market plus some government', es: 'Mixta: mercado y algo de gobierno', fa: 'مختلط: بازار با کمی حکومت' },
          { en: 'Pure market, with no government rules', es: 'Solo mercado, sin reglas del gobierno', fa: 'تنها بازار، بدون قانون حکومت' },
          { en: 'Command: the government owns it all', es: 'Dirigida: el gobierno es dueño de todo', fa: 'دستوری: حکومت مالک همه چیز است' },
          { en: 'Traditional: customs decide it all', es: 'Tradicional: las costumbres deciden todo', fa: 'سنتی: رسم و رواج همه را تصمیم می‌گیرد' }],
        answer: 0,
        why: { en: 'The US is mostly market, with some government rules and services. Like most countries, it is mixed.', es: 'EE. UU. es casi todo mercado, con algunas reglas y servicios del gobierno. Es mixta, como casi todos.', fa: 'امریکا بیشتر بازار است، با بعضی قانون‌ها و خدمات حکومت. مثل بیشتر کشورها، مختلط است.' } },
      { q: { en: 'What is one weakness of a command economy?', es: '¿Cuál es una debilidad de una economía dirigida?', fa: 'یک ضعف اقتصاد دستوری چیست؟' },
        choices: [
          { en: 'Shortages and little choice', es: 'Escasez y pocas opciones', fa: 'کمبود و انتخاب کم' },
          { en: 'Too many kinds of goods', es: 'Demasiados tipos de bienes', fa: 'انواع بسیار زیاد کالا' },
          { en: 'Prices that change daily', es: 'Precios que cambian cada día', fa: 'قیمت‌هایی که هر روز تغییر می‌کند' },
          { en: 'Nobody ever makes a plan', es: 'Nadie hace nunca un plan', fa: 'هیچ کس هیچ وقت پلان نمی‌کند' }],
        answer: 0,
        why: { en: 'A plan can move fast, but plans often guess wrong. Then come shortages and little choice.', es: 'Un plan puede ir rápido, pero a menudo se equivoca. Entonces hay escasez y pocas opciones.', fa: 'پلان تیز پیش می‌رود، اما اکثراً اشتباه می‌کند. بعد کمبود و انتخاب کم پیش می‌آید.' } },
      { q: { en: 'What is one weakness of a market economy?', es: '¿Cuál es una debilidad de una economía de mercado?', fa: 'یک ضعف اقتصاد بازار چیست؟' },
        choices: [
          { en: 'Some people can be left behind', es: 'Algunas personas pueden quedar atrás', fa: 'بعضی مردم ممکن است عقب بمانند' },
          { en: 'There are never any new ideas', es: 'Nunca hay ideas nuevas', fa: 'هیچ وقت اندیشهٔ نو نیست' },
          { en: 'The government sets all prices', es: 'El gobierno pone todos los precios', fa: 'حکومت همهٔ قیمت‌ها را می‌گذارد' },
          { en: 'Old customs stop all changes', es: 'Las costumbres frenan todo cambio', fa: 'رسم‌های کهنه جلوی هر تغییر را می‌گیرند' }],
        answer: 0,
        why: { en: 'Markets bring choice and new ideas. But people who cannot pay can be left behind.', es: 'Los mercados traen opciones e ideas nuevas. Pero quien no puede pagar puede quedar atrás.', fa: 'بازار انتخاب و اندیشهٔ نو می‌آورد. اما کسی که پول ندارد ممکن است عقب بماند.' } }
    ]
  },

  learned: [
    { en: 'Every economy answers 3 questions: what to make, how, and for whom.', es: 'Toda economía responde 3 preguntas: qué producir, cómo y para quién.', fa: 'هر اقتصاد به ۳ سوال جواب می‌دهد: چه بسازد، چطور، و برای کی.' },
    { en: 'Traditional: customs decide. Command: the government decides. Market: buyers and sellers decide.', es: 'Tradicional: deciden las costumbres. Dirigida: decide el gobierno. De mercado: deciden compradores y vendedores.', fa: 'سنتی: رسم تصمیم می‌گیرد. دستوری: حکومت تصمیم می‌گیرد. بازار: خریدار و فروشنده تصمیم می‌گیرند.' },
    { en: 'Most countries, like the US, have a [[mixed economy|mixed economy]].', es: 'La mayoría de los países, como EE. UU., tienen una [[mixed economy|economía mixta]].', fa: 'بیشتر کشورها، مثل امریکا، [[mixed economy|اقتصاد مختلط]] دارند.' }
  ],
  reflect: {
    q: { en: 'Think of a snack you like. Who decided to make it, and who sets its price?', es: 'Piensa en un bocadillo que te gusta. ¿Quién decidió hacerlo y quién pone su precio?', fa: 'به یک خوراکی که دوست داری فکر کن. کی تصمیم گرفت آن را بسازد، و کی قیمتش را می‌گذارد؟' },
    starter: { en: 'The snack I like is made by', es: 'El bocadillo que me gusta lo hace', fa: 'خوراکی که دوست دارم را ... می‌سازد' }
  }
};
