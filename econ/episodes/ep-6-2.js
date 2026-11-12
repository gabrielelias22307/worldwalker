/* COINWALKER · Episode 6.2 · Investing Strategies (stocks, bonds, funds, diversification, fees, time)
   New York City, today: Wall Street at the south tip of Manhattan.
   North half: Broadway runs down the west edge. Wall Street (rows 8-10) runs east to the East River (~) and a pier (k).
   North of Wall Street: an office tower, Nassau Street, Federal Hall with its columns (D) and the Washington statue (O)
   on its steps, another office tower, and a subway entrance (F railings). A river walk runs along the east edge.
   South half: the New York Stock Exchange (D, columns and a giant flag) at the corner of Wall Street and Broad Street,
   a food cart (m) on Broad Street, an apartment building, the bronze bull (r) on Broadway at the north tip of
   Bowling Green (a little fenced park, F), and a small plaza with trees in the south-east.
   People show stocks, bonds, diversification and index funds; the ledger stone asks the student to set 3 levers
   so Leo's long-term basket is spread out, has some bonds, and has low fees. */
window.EPISODE = {
  id: '6.2',
  realm: 6,
  sol: 'EPF',
  title: { en: 'Investing Strategies', es: 'Estrategias para invertir', fa: 'راه‌های سرمایه‌گذاری' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Wall Street, New York', es: 'Wall Street, Nueva York', fa: 'وال استریت، نیویارک' },
  intro: [
    { en: 'The Grump tore the page about investing. Now people chase hot tips.',
      es: 'El Gruñón rompió la página sobre invertir. Ahora la gente persigue «datos calientes».',
      fa: 'غرغرو صفحهٔ سرمایه‌گذاری را پاره کرد. حالا مردم دنبال «خبرهای داغ» می‌دوند.' },
    { en: 'Talk to the 4 people here, then fix the ledger stone.',
      es: 'Habla con las 4 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۴ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: New York on the world map (no timeline in this game) */
  scenes: {
    at: [-74.011, 40.706],
    start: [
      { en: 'New York is the biggest city in the United States.',
        es: 'Nueva York es la ciudad más grande de Estados Unidos.',
        fa: 'نیویارک بزرگ‌ترین شهر امریکا است.' },
      { en: 'Wall Street is a narrow street at the south tip of Manhattan.',
        es: 'Wall Street es una calle angosta en la punta sur de Manhattan.',
        fa: 'وال استریت یک سرک تنگ در نوک جنوبی منهتن است.' },
      { en: 'Here, people buy and sell small pieces of companies.',
        es: 'Aquí, la gente compra y vende pedacitos de empresas.',
        fa: 'اینجا مردم تکه‌های کوچک شرکت‌ها را می‌خرند و می‌فروشند.' }
    ],
    page: { en: 'In 1792, traders on Wall Street signed a deal. It started the stock exchange.',
      es: 'En 1792, unos comerciantes de Wall Street firmaron un acuerdo. Así empezó la bolsa de valores.',
      fa: 'در سال ۱۷۹۲، تاجران در وال استریت یک قرارداد امضا کردند. بورس سهام از همانجا شروع شد.' },
    guess: {
      q: { en: 'Do stock prices always go up?', es: '¿Los precios de las acciones siempre suben?', fa: 'آیا قیمت سهام همیشه بالا می‌رود؟' },
      choices: [
        { t: { en: '📉 No, up and down', es: '📉 No, suben y bajan', fa: '📉 نه، بالا و پایین' }, ok: true },
        { t: { en: '📈 Yes, every day', es: '📈 Sí, todos los días', fa: '📈 بله، هر روز' } }
      ],
      why: { en: 'Prices go up and down every day. Over many years, they have often grown.', es: 'Los precios suben y bajan cada día. En muchos años, muchas veces han crecido.', fa: 'قیمت‌ها هر روز بالا و پایین می‌روند. در سال‌های زیاد، اکثراً رشد کرده‌اند.' }
    },
    next: {
      q: { en: 'Next: crypto. Why do many people call it risky?', es: 'Ahora: las criptomonedas. ¿Por qué mucha gente dice que son riesgosas?', fa: 'بعدی: کریپتو. چرا مردم زیاد می‌گویند خطرناک است؟' },
      choices: [
        { t: { en: '🎢 Its price swings wildly', es: '🎢 Su precio cambia muchísimo', fa: '🎢 قیمتش بسیار بالا و پایین می‌شود' }, ok: true },
        { t: { en: '🏛️ The government backs it', es: '🏛️ El gobierno lo respalda', fa: '🏛️ حکومت پشتیبانش است' } }
      ],
      why: { en: 'Crypto prices can jump and crash fast. No government backs it. You can lose it all.', es: 'El precio de las criptomonedas puede subir y caer rápido. Ningún gobierno las respalda. Puedes perderlo todo.', fa: 'قیمت کریپتو می‌تواند تیز بالا برود و سقوط کند. هیچ حکومتی پشتیبانش نیست. می‌توانی همه را از دست بدهی.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [6, 7], name: { en: 'Ms. Ibarra', es: 'Sra. Ibarra', fa: 'خانم ایبارا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f6f9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I drive a city bus. I save in an [[etf|ETF]].', es: 'Manejo un autobús de la ciudad. Ahorro en un [[etf|ETF]].', fa: 'من سرویس شهری می‌رانم. در یک [[etf|صندوق قابل معامله (ETF)]] پس‌انداز می‌کنم.' },
        { en: 'An ETF is a basket of many stocks or bonds.', es: 'Un ETF es una canasta de muchas acciones o bonos.', fa: 'ETF یک سبد از سهام یا اوراق قرضهٔ زیاد است.' },
        { en: 'You buy and sell it during the day, just like one stock.', es: 'Lo compras y lo vendes durante el día, igual que una acción.', fa: 'آن را در طول روز می‌خری و می‌فروشی، درست مثل یک سهم.' }
      ] },
    { at: [18, 7], name: { en: 'Ranger Cole', es: 'Guardaparques Cole', fa: 'نگهبان پارک کول' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a7a4a', pants: '#4a3a2a', hat: '#8a6a3a', style: 'short' },
      lines: [
        { en: 'This is Federal Hall. Washington became the first President here in 1789.', es: 'Este es Federal Hall. Aquí Washington se hizo el primer presidente en 1789.', fa: 'اینجا فدرال هال است. واشنگتن در سال ۱۷۸۹ اینجا اولین رئیس جمهور شد.' },
        { en: 'His statue stands on the steps outside.', es: 'Su estatua está en las escaleras de afuera.', fa: 'مجسمهٔ او روی زینه‌های بیرون ایستاده است.' },
        { en: 'Wall Street is named for a wall the Dutch built here in the 1600s.', es: 'Wall Street se llama así por un muro que los holandeses hicieron aquí en el siglo XVII.', fa: 'وال استریت به نام دیواری است که هالندی‌ها در قرن هفدهم اینجا ساختند.' }
      ] },
    { at: [8, 15], name: { en: 'Ms. Adeyemi', es: 'Sra. Adeyemi', fa: 'خانم ادیمی' },
      look: { skin: 5, hair: '#120c08', shirt: '#3a4a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I work on the trading floor of the stock exchange.', es: 'Trabajo en el piso de operaciones de la bolsa de valores.', fa: 'من در تالار معاملهٔ بورس سهام کار می‌کنم.' },
        { en: 'A bull pushes its horns up. In a [[bull market|bull market]], prices rise.', es: 'Un toro levanta sus cuernos. En un [[bull market|mercado alcista]], los precios suben.', fa: 'گاو شاخ‌هایش را بالا می‌زند. در [[bull market|بازار رو به بالا]]، قیمت‌ها بالا می‌روند.' },
        { en: 'A bear swipes its paws down. In a [[bear market|bear market]], prices fall.', es: 'Un oso baja sus garras. En un [[bear market|mercado bajista]], los precios caen.', fa: 'خرس پنجه‌هایش را پایین می‌زند. در [[bear market|بازار رو به پایین]]، قیمت‌ها پایین می‌آیند.' }
      ] },
    { at: [22, 15], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#f0f0e8', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I cook at night. I save in a [[mutual fund|mutual fund]].', es: 'Cocino de noche. Ahorro en un [[mutual fund|fondo mutuo]].', fa: 'من شب‌ها آشپزی می‌کنم. در یک [[mutual fund|صندوق مشترک]] پس‌انداز می‌کنم.' },
        { en: 'It pools money from many people to buy many stocks and bonds.', es: 'Junta el dinero de mucha gente para comprar muchas acciones y bonos.', fa: 'پول مردم زیاد را یکجا می‌کند تا سهام و اوراق قرضهٔ زیاد بخرد.' },
        { en: 'It charges a [[fee|fee]]. A 1% fee on $1,000 is $10 a year.', es: 'Cobra una [[fee|comisión]]. Una comisión del 1% sobre $1,000 es $10 al año.', fa: 'یک [[fee|فیس]] می‌گیرد. فیس ۱٪ بر ۱۰۰۰ دالر، سالانه ۱۰ دالر است.' },
        { en: 'Low fees leave more money to grow.', es: 'Las comisiones bajas dejan más dinero para crecer.', fa: 'فیس کم پول بیشتری را برای رشد می‌گذارد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): Broadway (l) down the west edge, an office tower (U) with a door, Nassau Street (l),
     Federal Hall (D, columns) with the Washington statue (O) on its steps, another tower, the subway entrance (F)
     on the sidewalk, and the river walk (l) by the East River (~). Rows 8-10: Wall Street, ending at a pier (k).
     South (y 11-21): the New York Stock Exchange (D) at Wall and Broad Street, Broad Street (l) with a food cart (m),
     an apartment building (U), a cross street (row 16), the bronze bull (r) on Broadway, Bowling Green park
     (fence F, flowers, trees) in the south-west and a small plaza with trees in the south-east. */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUU~~~',
    'UllUUUUUUUUUlUUUUUUUlUUUUUUll~~~',
    'UllUUUUUUUUUlUUUUUUUlUUUUUUll~~~',
    'UllUUUUUUUUUlDDDDDDDlUUUUUUll~~~',
    'UllUUUUUUUUUlDDDDDDDlUUUUUUll~~~',
    'UllUUUUUUUUUlDDDDDDDlUUUUUUll~~~',
    'UllUUUUUUUUUlDDDDDDDlUUUUUUll~~~',
    'UllUUUdUUUUUlDDDDDdDlUUdUUUll~~~',
    'UllxllllllllllllOllllllllFFll~~~',
    'Ullllllllllllllllllllllllllllkk~',
    'Ullllllllllllllllllllllllllllkk~',
    'UlllDDDDDDDDDDxllllUUUUUUUUll~~~',
    'UlllDDDDDDDDDDlllllUUUUUUUUll~~~',
    'UlllDDDDDDDDDDllmllUUUUUUUUll~~~',
    'UlllDDDDDDDDDDlllllUUUUUUUUll~~~',
    'UlllDDDDdDDDDDlllllUUUdUUUUll~~~',
    'Ulllxllllllllllllllllllllllll~~~',
    'UllrFFF..FFFllllllTx......Tll~~~',
    'UlllF,,..,,Fllllll.........ll~~~',
    'UlllFT....TFllllll..,...,..ll~~~',
    'UlllF,,TT,,FllllllT.......Tll~~~',
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUU~~~'
  ],
  start: [5, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [3, 9], at: [8, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 5 steps east along Wall Street.', es: 'Desde esta nota, camina 5 pasos al este por Wall Street.', fa: 'از این یادداشت، ۵ قدم به شرق در امتداد وال استریت برو.' },
      text: { en: 'An old stock paper! Long ago, owners got a paper that showed their shares.', es: '¡Un papel antiguo de acciones! Antes, los dueños recibían un papel que mostraba sus acciones.', fa: 'یک کاغذ قدیمی سهام! در گذشته، مالکان کاغذی می‌گرفتند که سهم‌هایشان را نشان می‌داد.' } },
    { clueAt: [28, 12], at: [28, 16], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south along the river walk.', es: 'Desde esta nota, camina 4 pasos al sur por el paseo del río.', fa: 'از این یادداشت، ۴ قدم به جنوب در امتداد راه کنار دریا برو.' },
      text: { en: 'A gull feather! Wall Street runs east to the East River.', es: '¡Una pluma de gaviota! Wall Street va al este hasta el East River.', fa: 'یک پر مرغ دریایی! وال استریت به شرق تا دریای ایست ریور می‌رود.' } }
  ],

  words: {
    stock: { en: 'a small piece of a company that you can own (also called a share)', es: 'un pedacito de una empresa que puedes tener (también se llama acción)', fa: 'یک تکهٔ کوچک یک شرکت که مالکش شده می‌توانی (سهم هم می‌گویند)' },
    dividend: { en: 'part of a company\'s profit, paid to the people who own its stock', es: 'parte de la ganancia de una empresa, pagada a los dueños de sus acciones', fa: 'بخشی از مفاد شرکت که به صاحبان سهامش پرداخته می‌شود' },
    bond: { en: 'a loan you give to a company or a government; it pays you interest', es: 'un préstamo que le das a una empresa o a un gobierno; te paga interés', fa: 'قرضی که به یک شرکت یا حکومت می‌دهی؛ به تو سود می‌پردازد' },
    interest: { en: 'money paid for the use of money that was lent', es: 'dinero que se paga por usar dinero prestado', fa: 'پولی که برای کار گرفتن از پول قرض داده‌شده پرداخته می‌شود' },
    risk: { en: 'the chance that you could lose money', es: 'la posibilidad de perder dinero', fa: 'احتمال این که پول را از دست بدهی' },
    diversification: { en: 'spreading your money over many investments, so one loss hurts less', es: 'repartir tu dinero en muchas inversiones, para que una pérdida duela menos', fa: 'پخش کردن پولت در سرمایه‌گذاری‌های زیاد، تا یک ضرر کمتر صدمه بزند' },
    'mutual fund': { en: 'a fund that pools money from many people to buy many stocks or bonds', es: 'un fondo que junta dinero de mucha gente para comprar muchas acciones o bonos', fa: 'صندوقی که پول مردم زیاد را یکجا می‌کند تا سهام یا اوراق قرضهٔ زیاد بخرد' },
    'index fund': { en: 'a fund that buys every company on a market list, like 500 big companies', es: 'un fondo que compra todas las empresas de una lista del mercado, como 500 empresas grandes', fa: 'صندوقی که همهٔ شرکت‌های یک فهرست بازار را می‌خرد، مثل ۵۰۰ شرکت بزرگ' },
    etf: { en: 'a basket of many stocks or bonds that you buy and sell like one stock', es: 'una canasta de muchas acciones o bonos que compras y vendes como una acción', fa: 'سبدی از سهام یا اوراق قرضهٔ زیاد که مثل یک سهم خرید و فروش می‌شود' },
    'bull market': { en: 'a time when prices on the stock market rise for a long time', es: 'un tiempo en que los precios de la bolsa suben por mucho tiempo', fa: 'وقتی که قیمت‌ها در بازار سهام برای مدت دراز بالا می‌روند' },
    'bear market': { en: 'a time when prices on the stock market fall for a long time', es: 'un tiempo en que los precios de la bolsa bajan por mucho tiempo', fa: 'وقتی که قیمت‌ها در بازار سهام برای مدت دراز پایین می‌آیند' },
    fee: { en: 'money you pay for a service, like running a fund', es: 'dinero que pagas por un servicio, como manejar un fondo', fa: 'پولی که برای یک خدمت می‌پردازی، مثل ادارهٔ یک صندوق' },
    'treasury bill': { en: 'a short loan to the US government; the government backs it', es: 'un préstamo corto al gobierno de EE. UU.; el gobierno lo respalda', fa: 'یک قرض کوتاه به حکومت امریکا؛ حکومت پشتیبان آن است' },
    cd: { en: 'a bank account where you leave money for a set time and earn set interest', es: 'una cuenta del banco donde dejas dinero por un tiempo fijo y ganas un interés fijo', fa: 'حساب بانکی که پول را برای وقت معین می‌گذاری و سود معین می‌گیری' }
  },

  npcs: [
    {
      x: 14, y: 13,
      name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      role: { en: 'Tour guide', es: 'Guía de turistas', fa: 'رهنمای سیاحان' },
      look: { skin: 1, hair: '#8a5a2a', shirt: '#e0603a', pants: '#2a3a5a', hat: '#e0603a', style: 'long' },
      lines: [
        { en: 'Welcome to Wall Street! That building is the New York Stock Exchange.', es: '¡Bienvenidos a Wall Street! Ese edificio es la Bolsa de Valores de Nueva York.', fa: 'به وال استریت خوش آمدید! آن ساختمان بورس سهام نیویارک است.' },
        { en: 'People buy [[stock|stocks]] here. A share is a small piece of a company.', es: 'Aquí la gente compra [[stock|acciones]]. Una acción es un pedacito de una empresa.', fa: 'مردم اینجا [[stock|سهام]] می‌خرند. یک سهم تکهٔ کوچک یک شرکت است.' },
        { en: 'If the company grows, the price can grow. Some pay [[dividend|dividends]] too.', es: 'Si la empresa crece, el precio puede crecer. Algunas también pagan [[dividend|dividendos]].', fa: 'اگر شرکت رشد کند، قیمت هم رشد کرده می‌تواند. بعضی [[dividend|سود سهام]] هم می‌دهند.' },
        { en: 'But prices go up and down every day. Nothing is sure.', es: 'Pero los precios suben y bajan cada día. Nada es seguro.', fa: 'اما قیمت‌ها هر روز بالا و پایین می‌روند. هیچ چیز یقینی نیست.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What do you own when you buy a share of stock?', es: '¿Qué tienes cuando compras una acción?', fa: 'وقتی یک سهم می‌خری، مالک چه می‌شوی؟' },
        choices: [
          { ok: true, t: { en: 'A small piece of a company', es: 'Un pedacito de una empresa', fa: 'تکهٔ کوچک یک شرکت' },
            why: { en: 'Yes! A share makes you a part owner. You can earn if the company grows.', es: '¡Sí! Una acción te hace dueño de una parte. Puedes ganar si la empresa crece.', fa: 'بله! یک سهم تو را مالک یک بخش می‌سازد. اگر شرکت رشد کند، کمایی می‌کنی.' } },
          { t: { en: 'A loan the company pays back', es: 'Un préstamo que la empresa devuelve', fa: 'قرضی که شرکت پس می‌دهد' },
            why: { en: 'No. A loan you give is a bond. A share is a piece of the company.', es: 'No. Un préstamo que das es un bono. Una acción es un pedazo de la empresa.', fa: 'نه. قرضی که می‌دهی اوراق قرضه است. سهم یک تکهٔ شرکت است.' } },
          { t: { en: 'A promise of money each month', es: 'Una promesa de dinero cada mes', fa: 'وعدهٔ پول در هر ماه' },
            why: { en: 'No. Stocks promise nothing. Prices go up and down, and some pay no dividends.', es: 'No. Las acciones no prometen nada. Los precios suben y bajan, y algunas no pagan dividendos.', fa: 'نه. سهام هیچ وعده‌ای نمی‌دهد. قیمت بالا و پایین می‌رود و بعضی سود سهام نمی‌دهند.' } }
        ]
      }
    },
    {
      x: 18, y: 13,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Food cart owner', es: 'Dueño de un carrito de comida', fa: 'صاحب کراچی خوراک' },
      look: { skin: 5, hair: '#1a1008', shirt: '#f0c040', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'I sell hot coffee and cold lemonade from my cart.', es: 'Vendo café caliente y limonada fría en mi carrito.', fa: 'من از کراچی‌ام قهوهٔ گرم و لیموناد سرد می‌فروشم.' },
        { en: 'On cold days, coffee sells. On hot days, lemonade sells.', es: 'Los días fríos se vende el café. Los días calurosos, la limonada.', fa: 'در روزهای سرد قهوه فروش می‌رود. در روزهای گرم لیموناد.' },
        { en: 'If I sold only one drink, one bad week could sink me.', es: 'Si vendiera una sola bebida, una mala semana me podría hundir.', fa: 'اگر فقط یک نوشیدنی می‌فروختم، یک هفتهٔ بد مرا غرق می‌کرد.' },
        { en: 'That is [[diversification|diversification]]: don\'t put all your eggs in one basket.', es: 'Eso es [[diversification|diversificación]]: no pongas todos los huevos en una canasta.', fa: 'این [[diversification|تنوع]] است: همهٔ تخم‌ها را در یک سبد نگذار.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why does Kofi sell both coffee and lemonade?', es: '¿Por qué Kofi vende café y también limonada?', fa: 'چرا کوفی هم قهوه و هم لیموناد می‌فروشد؟' },
        choices: [
          { ok: true, t: { en: 'So one bad week can\'t sink him', es: 'Para que una mala semana no lo hunda', fa: 'تا یک هفتهٔ بد او را غرق نکند' },
            why: { en: 'Yes! When one drink sells badly, the other can still sell. That is diversification.', es: '¡Sí! Si una bebida se vende mal, la otra puede venderse. Eso es diversificación.', fa: 'بله! وقتی یک نوشیدنی کم فروش شود، دیگری فروش می‌رود. این تنوع است.' } },
          { t: { en: 'Two drinks are cheaper to make', es: 'Dos bebidas son más baratas de hacer', fa: 'ساختن دو نوشیدنی ارزان‌تر است' },
            why: { en: 'No. Two drinks cost more to make. He sells both to spread his risk.', es: 'No. Dos bebidas cuestan más. Vende las dos para repartir su riesgo.', fa: 'نه. دو نوشیدنی گران‌تر تمام می‌شود. هر دو را می‌فروشد تا خطر را پخش کند.' } },
          { t: { en: 'The city makes every cart sell two', es: 'La ciudad obliga a vender dos', fa: 'شهر هر کراچی را مجبور به دو نوع می‌کند' },
            why: { en: 'No. That is his own choice. One drink for hot days, one for cold days.', es: 'No. Es su propia decisión. Una bebida para días calurosos y otra para días fríos.', fa: 'نه. این انتخاب خودش است. یک نوشیدنی برای روز گرم، یکی برای روز سرد.' } }
        ]
      }
    },
    {
      x: 22, y: 9,
      name: { en: 'Mateo', es: 'Mateo', fa: 'متیو' },
      role: { en: 'Student intern', es: 'Estudiante en prácticas', fa: 'محصل کارآموز' },
      look: { skin: 3, hair: '#1a1208', shirt: '#4a8a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I\'m a college student. I intern at an office on this street.', es: 'Soy estudiante universitario. Hago prácticas en una oficina de esta calle.', fa: 'من محصل پوهنتون هستم. در یک دفتر در این سرک کارآموزی می‌کنم.' },
        { en: 'A [[bond|bond]] is a loan to a company or a government.', es: 'Un [[bond|bono]] es un préstamo a una empresa o a un gobierno.', fa: '[[bond|اوراق قرضه]] یک قرض به یک شرکت یا یک حکومت است.' },
        { en: 'They pay you [[interest|interest]], then pay the loan back. Less [[risk|risk]], less growth.', es: 'Te pagan [[interest|interés]] y luego devuelven el préstamo. Menos [[risk|riesgo]], menos crecimiento.', fa: 'به تو [[interest|سود]] می‌دهند، بعد قرض را پس می‌دهند. [[risk|خطر]] کمتر، رشد کمتر.' },
        { en: 'Safest of all: [[treasury bill|Treasury bills]] and US savings bonds. The government backs them.', es: 'Lo más seguro: las [[treasury bill|letras del Tesoro]] y los bonos de ahorro de EE. UU. El gobierno los respalda.', fa: 'از همه امن‌تر: [[treasury bill|اسناد خزانه]] و اوراق پس‌انداز امریکا. حکومت پشتیبان آنهاست.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Mateo buys a $100 bond from a city. What does the city do?', es: 'Mateo compra un bono de $100 a una ciudad. ¿Qué hace la ciudad?', fa: 'متیو از یک شهر اوراق قرضهٔ ۱۰۰ دالری می‌خرد. شهر چه می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Pays interest, then pays back $100', es: 'Paga interés y luego devuelve $100', fa: 'سود می‌دهد، بعد ۱۰۰ دالر را پس می‌دهد' },
            why: { en: 'Yes! A bond is a loan. The city pays interest, then returns the $100.', es: '¡Sí! Un bono es un préstamo. La ciudad paga interés y luego devuelve los $100.', fa: 'بله! اوراق قرضه یک قرض است. شهر سود می‌دهد، بعد ۱۰۰ دالر را پس می‌دهد.' } },
          { t: { en: 'Gives him a small part of the city', es: 'Le da una parte pequeña de la ciudad', fa: 'یک بخش کوچک شهر را به او می‌دهد' },
            why: { en: 'No. A bond is a loan, not a piece of anything. He gets interest.', es: 'No. Un bono es un préstamo, no un pedazo de algo. Él recibe interés.', fa: 'نه. اوراق قرضه قرض است، نه تکهٔ چیزی. او سود می‌گیرد.' } },
          { t: { en: 'Keeps the $100 and pays nothing', es: 'Se queda con los $100 y no paga nada', fa: '۱۰۰ دالر را نگه می‌دارد و هیچ نمی‌پردازد' },
            why: { en: 'No. A bond is a promise. The city pays interest and returns the loan.', es: 'No. Un bono es una promesa. La ciudad paga interés y devuelve el préstamo.', fa: 'نه. اوراق قرضه یک وعده است. شهر سود می‌دهد و قرض را پس می‌دهد.' } }
        ]
      }
    },
    {
      x: 20, y: 18,
      name: { en: 'Mrs. Nguyen', es: 'Sra. Nguyen', fa: 'خانم نگوین' },
      role: { en: 'Retired teacher', es: 'Maestra jubilada', fa: 'معلم متقاعد' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#9a4a7a', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'I taught math for 30 years. Now I am retired.', es: 'Enseñé matemáticas por 30 años. Ahora estoy jubilada.', fa: 'من ۳۰ سال ریاضی درس دادم. حالا متقاعد هستم.' },
        { en: 'Every month, I put a little money in an [[index fund|index fund]].', es: 'Cada mes pongo un poco de dinero en un [[index fund|fondo indexado]].', fa: 'هر ماه کمی پول در یک [[index fund|صندوق شاخص]] می‌گذارم.' },
        { en: 'It follows a whole market list, like 500 big companies.', es: 'Sigue toda una lista del mercado, como 500 empresas grandes.', fa: 'یک فهرست کامل بازار را دنبال می‌کند، مثل ۵۰۰ شرکت بزرگ.' },
        { en: 'Some years it fell. I did not sell. Over time, it grew.', es: 'Algunos años bajó. No vendí. Con el tiempo, creció.', fa: 'بعضی سال‌ها پایین آمد. نفروختم. با گذشت وقت، رشد کرد.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'What does an index fund do?', es: '¿Qué hace un fondo indexado?', fa: 'صندوق شاخص چه می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Follows a whole list of companies', es: 'Sigue toda una lista de empresas', fa: 'یک فهرست کامل شرکت‌ها را دنبال می‌کند' },
            why: { en: 'Yes! It buys every company on a market list. That spreads the risk.', es: '¡Sí! Compra todas las empresas de una lista del mercado. Así reparte el riesgo.', fa: 'بله! همهٔ شرکت‌های یک فهرست بازار را می‌خرد. این خطر را پخش می‌کند.' } },
          { t: { en: 'Picks one hot company to buy', es: 'Escoge una empresa de moda', fa: 'یک شرکت داغ را برای خرید انتخاب می‌کند' },
            why: { en: 'No. One company is risky. An index fund holds many companies.', es: 'No. Una sola empresa es riesgosa. Un fondo indexado tiene muchas empresas.', fa: 'نه. یک شرکت خطرناک است. صندوق شاخص شرکت‌های زیاد دارد.' } },
          { t: { en: 'Promises it will never lose money', es: 'Promete que nunca perderá dinero', fa: 'وعده می‌دهد که هرگز ضرر نکند' },
            why: { en: 'No. It can fall in a bear market. Mrs. Nguyen waited, and it grew.', es: 'No. Puede bajar en un mercado bajista. La Sra. Nguyen esperó y creció.', fa: 'نه. در بازار رو به پایین پایین می‌آید. خانم نگوین صبر کرد و رشد کرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 8, text: { en: 'WALL STREET · NEW YORK CITY · Walk east to the East River, or south down Broadway.', es: 'WALL STREET · NUEVA YORK · Camina al este hasta el East River, o al sur por Broadway.', fa: 'وال استریت · شهر نیویارک · به شرق تا دریای ایست ریور برو، یا به جنوب در برادوی.' } },
    { x: 14, y: 11, text: { en: 'NEW YORK STOCK EXCHANGE · Founded in 1792. Look for the giant flag on its columns.', es: 'BOLSA DE VALORES DE NUEVA YORK · Fundada en 1792. Busca la bandera gigante en sus columnas.', fa: 'بورس سهام نیویارک · در سال ۱۷۹۲ تأسیس شد. بیرق بزرگ را روی ستون‌هایش ببین.' } },
    { x: 4, y: 16, text: { en: 'THE BRONZE BULL · A bull charges up. When prices rise, people call it a bull market.', es: 'EL TORO DE BRONCE · Un toro embiste hacia arriba. Cuando los precios suben, se dice mercado alcista.', fa: 'گاو برنجی · گاو به طرف بالا حمله می‌کند. وقتی قیمت‌ها بالا بروند، می‌گویند بازار رو به بالا.' } },
    { x: 19, y: 17, text: { en: 'SAFER PLACES TO SAVE · Bank [[cd|CDs]], US savings bonds, Treasury bills. Less risk, slower growth.', es: 'LUGARES MÁS SEGUROS PARA AHORRAR · [[cd|CD]] del banco, bonos de ahorro, letras del Tesoro. Menos riesgo, crecen más lento.', fa: 'جاهای امن‌تر برای پس‌انداز · [[cd|سپردهٔ مدت‌دار]] بانک، اوراق پس‌انداز، اسناد خزانه. خطر کمتر، رشد آهسته‌تر.' } }
  ],

  /* the quest: Leo the delivery rider (gold !) on Wall Street in the north-west -> Ana the street sweeper on the river
     walk in the north-east -> find Leo's notebook by the bronze bull, south down Broadway -> back to Leo. */
  quest: {
    stat: 'reg',
    title: { en: 'Leo\'s Lost Plan', es: 'El plan perdido de Leo', fa: 'برنامهٔ گمشدهٔ لیو' },
    giver: {
      x: 10, y: 8,
      name: { en: 'Leo', es: 'Leo', fa: 'لیو' },
      role: { en: 'Bike delivery rider', es: 'Repartidor en bicicleta', fa: 'رسانندهٔ بایسکل‌سوار' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e04a4a', pants: '#2a2a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am 22. I just got my first paycheck. I want to invest!', es: 'Tengo 22 años. Acabo de recibir mi primer sueldo. ¡Quiero invertir!', fa: 'من ۲۲ ساله هستم. تازه اولین معاشم را گرفتم. می‌خواهم سرمایه‌گذاری کنم!' },
        { en: 'I wrote my plan in a notebook. Now it is gone!', es: 'Escribí mi plan en una libreta. ¡Ahora no está!', fa: 'برنامه‌ام را در یک کتابچه نوشتم. حالا گم شده!' },
        { en: 'Ask Ana. She sweeps the river walk at the east end.', es: 'Pregúntale a Ana. Barre el paseo del río, al final del este.', fa: 'از آنا بپرس. او راه کنار دریا را در آخر شرقی جارو می‌کند.' }
      ],
      wait: { en: 'Ana sweeps the river walk, at the east end of Wall Street.', es: 'Ana barre el paseo del río, al final este de Wall Street.', fa: 'آنا راه کنار دریا را، در آخر شرقی وال استریت، جارو می‌کند.' },
      thanks: { en: 'My plan! Spread it out, keep fees low, and wait. Thank you!', es: '¡Mi plan! Repartir, pagar comisiones bajas y esperar. ¡Gracias!', fa: 'برنامه‌ام! پخش کن، فیس را کم نگه دار، و صبر کن. تشکر!' }
    },
    contact: {
      x: 27, y: 4,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Street sweeper', es: 'Barrendera', fa: 'جاروکش سرک' },
      look: { skin: 2, hair: '#3a2416', shirt: '#f08a2a', pants: '#3a4a5a', hat: '#f08a2a', style: 'long' },
      lines: [
        { en: 'A stranger yelled a "hot tip" at Leo. Leo ran after him.', es: 'Un desconocido le gritó un «dato caliente» a Leo. Leo corrió tras él.', fa: 'یک بیگانه به لیو یک «خبر داغ» داد زد. لیو دنبالش دوید.' },
        { en: 'His notebook fell. The wind blew it west along Wall Street.', es: 'Se le cayó la libreta. El viento la llevó al oeste por Wall Street.', fa: 'کتابچه‌اش افتاد. باد آن را به غرب در امتداد وال استریت برد.' },
        { en: 'Then it blew south down Broadway, to the bronze bull. Look there!', es: 'Luego voló al sur por Broadway, hasta el toro de bronce. ¡Busca allí!', fa: 'بعد به جنوب در برادوی تا گاو برنجی رفت. آنجا ببین!' }
      ]
    },
    action: {
      type: 'find',
      at: [2, 17],
      hint: { en: 'Look by the bronze bull, south down Broadway', es: 'Busca junto al toro de bronce, al sur por Broadway', fa: 'کنار گاو برنجی، به جنوب در برادوی، ببین' },
      found: { en: 'Leo\'s notebook, by the bull! It says: many companies, low fees, wait.', es: '¡La libreta de Leo, junto al toro! Dice: muchas empresas, comisiones bajas, esperar.', fa: 'کتابچهٔ لیو، کنار گاو! نوشته: شرکت‌های زیاد، فیس کم، صبر.' },
      item: { icon: '📓', name: { en: 'Leo\'s savings plan', es: 'El plan de ahorro de Leo', fa: 'برنامهٔ پس‌انداز لیو' } }
    }
  },

  scraps: [[12, 1], [28, 1], [1, 20]],
  smudges: [[27, 13], [13, 19]],

  challenge: {
    at: [20, 10],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the stocks lever by the stock exchange, the bonds lever by Federal Hall (a government building),
    // the plan lever in the quiet plaza, far from the stranger's hot tips
    spots: [[14, 15], [14, 8], [24, 19]],
    stat: 'reg',
    title: { en: 'Build Leo\'s basket', es: 'Arma la canasta de Leo', fa: 'سبد لیو را بساز' },
    intro: { en: 'Leo is 22. He won\'t touch this money for 40 years. Set the 3 levers for a basket that grows safely.',
      es: 'Leo tiene 22 años. No tocará este dinero en 40 años. Pon las 3 palancas para una canasta que crezca segura.',
      fa: 'لیو ۲۲ ساله است. این پول را ۴۰ سال دست نمی‌زند. ۳ دسته را برای سبدی تنظیم کن که با امنیت رشد کند.' },
    switches: [
      { name: { en: 'Stocks in the basket', es: 'Acciones en la canasta', fa: 'سهام در سبد' }, icon: '📈', start: 0,
        states: [{ en: 'One company', es: 'Una sola empresa', fa: 'یک شرکت' }, { en: 'Many companies', es: 'Muchas empresas', fa: 'شرکت‌های زیاد' }] },
      { name: { en: 'Bonds in the basket', es: 'Bonos en la canasta', fa: 'اوراق قرضه در سبد' }, icon: '🧾', start: 0,
        states: [{ en: 'No bonds', es: 'Sin bonos', fa: 'بدون اوراق قرضه' }, { en: 'Some bonds', es: 'Algunos bonos', fa: 'کمی اوراق قرضه' }] },
      { name: { en: 'How Leo invests', es: 'Cómo invierte Leo', fa: 'لیو چطور سرمایه‌گذاری می‌کند' }, icon: '🛒', start: 0,
        states: [{ en: 'A stranger\'s hot tip', es: 'El dato caliente de un desconocido', fa: 'خبر داغ یک بیگانه' }, { en: 'Low fees, hold for years', es: 'Comisiones bajas, guardar años', fa: 'فیس کم، نگه داشتن برای سال‌ها' }, { en: 'High fees, trade a lot', es: 'Comisiones altas, vender y comprar mucho', fa: 'فیس زیاد، خرید و فروش زیاد' }] }
    ],
    results: {}, // filled in just below: every one of the 12 settings says what is wrong with it
    otherwise: { ok: false, t: { en: 'This basket is too risky for Leo. Try another setting.', es: 'Esta canasta es muy riesgosa para Leo. Prueba otra combinación.', fa: 'این سبد برای لیو بسیار خطرناک است. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'Many companies, some bonds, low fees and time. Leo\'s basket can grow, and one bad day won\'t sink it.',
      es: 'Muchas empresas, algunos bonos, comisiones bajas y tiempo. La canasta de Leo puede crecer, y un mal día no la hundirá.',
      fa: 'شرکت‌های زیاد، کمی اوراق قرضه، فیس کم و وقت. سبد لیو رشد کرده می‌تواند و یک روز بد آن را غرق نمی‌کند.' }
  },

  boss: {
    at: [26, 19],
    stat: 'reg',
    need: 3,
    name: { en: 'The Hot-Tip Grump', es: 'El Gruñón del Dato Caliente', fa: 'غرغروی خبر داغ' },
    appear: { en: 'The Hot-Tip Grump is hiding in the fog of the little plaza!', es: '¡El Gruñón del Dato Caliente se esconde en la niebla de la placita!', fa: 'غرغروی خبر داغ در مه میدان کوچک پنهان است!' },
    taunt: { en: 'Psst! Put ALL your money in one stock. It can only go up!', es: '¡Psst! Pon TODO tu dinero en una sola acción. ¡Solo puede subir!', fa: 'پسس! همهٔ پولت را در یک سهم بگذار. فقط بالا می‌رود!' },
    win: { en: 'The fog lifts off Wall Street. Ledger page 6.2 floats down into your hands!', es: 'La niebla se va de Wall Street. ¡La página 6.2 del libro cae en tus manos!', fa: 'مه از وال استریت کنار می‌رود. صفحهٔ ۶.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a share of stock?', es: '¿Qué es una acción?', fa: 'یک سهم چیست؟' },
        choices: [
          { en: 'A small piece of a company', es: 'Un pedacito de una empresa', fa: 'تکهٔ کوچک یک شرکت' },
          { en: 'A loan you give to a city', es: 'Un préstamo que le das a una ciudad', fa: 'قرضی که به یک شهر می‌دهی' },
          { en: 'A bank account with set interest', es: 'Una cuenta del banco con interés fijo', fa: 'یک حساب بانکی با سود معین' },
          { en: 'A fee you pay every year', es: 'Una comisión que pagas cada año', fa: 'فیسی که هر سال می‌پردازی' }],
        answer: 0,
        why: { en: 'A share makes you a part owner of a company. Its price goes up and down.', es: 'Una acción te hace dueño de una parte de una empresa. Su precio sube y baja.', fa: 'یک سهم تو را مالک بخشی از یک شرکت می‌سازد. قیمتش بالا و پایین می‌رود.' } },
      { q: { en: 'What is a bond?', es: '¿Qué es un bono?', fa: 'اوراق قرضه چیست؟' },
        choices: [
          { en: 'A loan to a company or government', es: 'Un préstamo a una empresa o gobierno', fa: 'قرض به یک شرکت یا حکومت' },
          { en: 'A small piece of one big company', es: 'Un pedacito de una empresa grande', fa: 'تکهٔ کوچک یک شرکت بزرگ' },
          { en: 'A basket of many different stocks', es: 'Una canasta de muchas acciones', fa: 'سبدی از سهام گوناگون' },
          { en: 'A coin made by a computer', es: 'Una moneda hecha por una computadora', fa: 'سکه‌ای که کمپیوتر می‌سازد' }],
        answer: 0,
        why: { en: 'A bond is a loan. The borrower pays you interest, then pays the loan back.', es: 'Un bono es un préstamo. Quien lo recibe te paga interés y luego lo devuelve.', fa: 'اوراق قرضه قرض است. قرض‌گیرنده به تو سود می‌دهد، بعد قرض را پس می‌دهد.' } },
      { q: { en: 'Usually, how are bonds different from stocks?', es: 'Por lo general, ¿en qué se diferencian los bonos de las acciones?', fa: 'معمولاً اوراق قرضه با سهام چه فرق دارد؟' },
        choices: [
          { en: 'Lower risk, but lower growth', es: 'Menos riesgo, pero menos crecimiento', fa: 'خطر کمتر، اما رشد کمتر' },
          { en: 'Higher risk and higher growth', es: 'Más riesgo y más crecimiento', fa: 'خطر بیشتر و رشد بیشتر' },
          { en: 'No risk and no growth at all', es: 'Nada de riesgo y nada de crecimiento', fa: 'هیچ خطر و هیچ رشد' },
          { en: 'The same risk and the same growth', es: 'El mismo riesgo y el mismo crecimiento', fa: 'همان خطر و همان رشد' }],
        answer: 0,
        why: { en: 'Bonds are usually safer than stocks. But over many years, they usually grow less.', es: 'Los bonos suelen ser más seguros que las acciones. Pero en muchos años suelen crecer menos.', fa: 'اوراق قرضه معمولاً از سهام امن‌تر است. اما در سال‌های زیاد معمولاً کمتر رشد می‌کند.' } },
      { q: { en: 'What does "don\'t put all your eggs in one basket" mean?', es: '¿Qué significa «no pongas todos los huevos en una canasta»?', fa: '«همهٔ تخم‌ها را در یک سبد نگذار» یعنی چه؟' },
        choices: [
          { en: 'Spread money over many investments', es: 'Reparte el dinero en muchas inversiones', fa: 'پول را در سرمایه‌گذاری‌های زیاد پخش کن' },
          { en: 'Keep all your money in one stock', es: 'Pon todo tu dinero en una acción', fa: 'همهٔ پولت را در یک سهم نگه دار' },
          { en: 'Buy only what a stranger tells you', es: 'Compra solo lo que diga un desconocido', fa: 'فقط چیزی را بخر که بیگانه می‌گوید' },
          { en: 'Sell everything when prices fall', es: 'Vende todo cuando bajen los precios', fa: 'وقتی قیمت پایین آمد، همه را بفروش' }],
        answer: 0,
        why: { en: 'That is diversification. If one investment falls, the others can still hold up.', es: 'Eso es diversificación. Si una inversión baja, las otras pueden aguantar.', fa: 'این تنوع است. اگر یک سرمایه‌گذاری پایین بیاید، بقیه پابرجا می‌مانند.' } },
      { q: { en: 'What does an index fund do?', es: '¿Qué hace un fondo indexado?', fa: 'صندوق شاخص چه می‌کند؟' },
        choices: [
          { en: 'Follows a whole list of companies', es: 'Sigue toda una lista de empresas', fa: 'یک فهرست کامل شرکت‌ها را دنبال می‌کند' },
          { en: 'Buys one company the owner likes', es: 'Compra una empresa que le gusta al dueño', fa: 'یک شرکتی را می‌خرد که مالک خوشش می‌آید' },
          { en: 'Promises to never lose any money', es: 'Promete nunca perder dinero', fa: 'وعده می‌دهد که هرگز پول از دست ندهد' },
          { en: 'Lends money to one small town', es: 'Le presta dinero a un pueblo pequeño', fa: 'به یک شهرک کوچک پول قرض می‌دهد' }],
        answer: 0,
        why: { en: 'An index fund buys every company on a market list, like 500 big companies.', es: 'Un fondo indexado compra todas las empresas de una lista, como 500 empresas grandes.', fa: 'صندوق شاخص همهٔ شرکت‌های یک فهرست بازار را می‌خرد، مثل ۵۰۰ شرکت بزرگ.' } },
      { q: { en: 'Stock prices fall for a long time. What is that called?', es: 'Los precios de las acciones bajan por mucho tiempo. ¿Cómo se llama eso?', fa: 'قیمت سهام برای مدت دراز پایین می‌آید. نامش چیست؟' },
        choices: [
          { en: 'A bear market', es: 'Un mercado bajista', fa: 'بازار رو به پایین' },
          { en: 'A bull market', es: 'Un mercado alcista', fa: 'بازار رو به بالا' },
          { en: 'A hot tip', es: 'Un dato caliente', fa: 'یک خبر داغ' },
          { en: 'A dividend', es: 'Un dividendo', fa: 'سود سهام' }],
        answer: 0,
        why: { en: 'A bear swipes down, so a falling market is a bear market. A bull market rises.', es: 'El oso ataca hacia abajo: un mercado que cae es bajista. Un mercado alcista sube.', fa: 'خرس به پایین پنجه می‌زند، پس بازار رو به پایین «خرسی» است. بازار گاوی بالا می‌رود.' } },
      { q: { en: 'Which of these is backed by the US government?', es: '¿Cuál de estos está respaldado por el gobierno de EE. UU.?', fa: 'کدام یکی از اینها پشتیبانی حکومت امریکا را دارد؟' },
        choices: [
          { en: 'A Treasury bill', es: 'Una letra del Tesoro', fa: 'اسناد خزانه' },
          { en: 'A stranger\'s hot tip', es: 'El dato de un desconocido', fa: 'خبر داغ یک بیگانه' },
          { en: 'One company\'s stock', es: 'La acción de una empresa', fa: 'سهم یک شرکت' },
          { en: 'A new crypto coin', es: 'Una criptomoneda nueva', fa: 'یک سکهٔ نو کریپتو' }],
        answer: 0,
        why: { en: 'Treasury bills and US savings bonds are loans to the government. It backs them.', es: 'Las letras del Tesoro y los bonos de ahorro son préstamos al gobierno. Él los respalda.', fa: 'اسناد خزانه و اوراق پس‌انداز امریکا قرض به حکومت است. حکومت پشتیبان آنهاست.' } },
      { q: { en: 'Same stocks. Fund A charges $5 a year, Fund B $40. Which leaves more to grow?', es: 'Mismas acciones. El fondo A cobra $5 al año y el B $40. ¿Cuál deja más para crecer?', fa: 'همان سهام. صندوق A سالانه ۵ دالر فیس می‌گیرد، صندوق B ۴۰ دالر. کدام پول بیشتری برای رشد می‌گذارد؟' },
        choices: [
          { en: 'Fund A, with the $5 fee', es: 'El fondo A, con $5 de comisión', fa: 'صندوق A، با فیس ۵ دالر' },
          { en: 'Fund B, with the $40 fee', es: 'El fondo B, con $40 de comisión', fa: 'صندوق B، با فیس ۴۰ دالر' },
          { en: 'Both leave exactly the same', es: 'Los dos dejan lo mismo', fa: 'هر دو به یک اندازه می‌گذارند' },
          { en: 'Neither, fees do not matter', es: 'Ninguno, las comisiones no importan', fa: 'هیچ کدام، فیس مهم نیست' }],
        answer: 0,
        why: { en: 'Fund A costs $35 less each year. Low fees leave more money to grow.', es: 'El fondo A cuesta $35 menos cada año. Las comisiones bajas dejan más dinero para crecer.', fa: 'صندوق A هر سال ۳۵ دالر کمتر خرچ دارد. فیس کم پول بیشتری برای رشد می‌گذارد.' } }
    ]
  },

  learned: [
    { en: 'A [[stock|stock]] is a piece of a company. A [[bond|bond]] is a loan.', es: 'Una [[stock|acción]] es un pedazo de una empresa. Un [[bond|bono]] es un préstamo.', fa: '[[stock|سهم]] تکهٔ یک شرکت است. [[bond|اوراق قرضه]] یک قرض است.' },
    { en: '[[diversification|Diversification]] spreads your money, so one loss hurts less.', es: 'La [[diversification|diversificación]] reparte tu dinero, así una pérdida duele menos.', fa: '[[diversification|تنوع]] پولت را پخش می‌کند، تا یک ضرر کمتر صدمه بزند.' },
    { en: 'Low [[fee|fees]] and patience help money grow over many years.', es: 'Las [[fee|comisiones]] bajas y la paciencia ayudan a que el dinero crezca en muchos años.', fa: '[[fee|فیس]] کم و صبر به رشد پول در سال‌های زیاد کمک می‌کنند.' }
  ],
  reflect: {
    q: { en: 'Someone tells you a "hot tip" to get rich fast. What would you say, and why?', es: 'Alguien te da un «dato caliente» para hacerte rico rápido. ¿Qué le dirías y por qué?', fa: 'کسی به تو یک «خبر داغ» برای زود پولدار شدن می‌دهد. چه می‌گویی، و چرا؟' },
    starter: { en: 'I would say', es: 'Yo le diría', fa: 'من می‌گفتم' }
  }
};

/* the 12 lever settings: only many companies + some bonds + low fees held for years works. Every other setting names
   the first wrong lever and why (and says how many more are wrong); the chips show which levers are right. */
(function () {
  var ch = window.EPISODE.challenge, right = [1, 1, 1];
  var why = [
    [{ en: 'One company is risky. If it fails, Leo could lose most of his money.', es: 'Una sola empresa es riesgosa. Si quiebra, Leo podría perder casi todo su dinero.', fa: 'یک شرکت خطرناک است. اگر ورشکست شود، لیو بیشتر پولش را از دست می‌دهد.' },
      null],
    [{ en: 'No bonds means no cushion. In a bear market, the whole basket falls hard.', es: 'Sin bonos no hay colchón. En un mercado bajista, toda la canasta cae fuerte.', fa: 'بدون اوراق قرضه، هیچ بالشتی نیست. در بازار رو به پایین، همهٔ سبد سخت پایین می‌آید.' },
      null],
    [{ en: 'A stranger\'s hot tip is a gamble. Get-rich-quick plans often lose money.', es: 'El dato de un desconocido es una apuesta. Los planes para hacerse rico rápido suelen perder dinero.', fa: 'خبر داغ یک بیگانه قمار است. برنامه‌های زود پولدار شدن اکثراً ضرر می‌کنند.' },
      null,
      { en: 'High fees eat the growth. Trading a lot adds costs, and selling in a fall locks in losses.', es: 'Las comisiones altas se comen el crecimiento. Comprar y vender mucho cuesta más, y vender en una caída asegura la pérdida.', fa: 'فیس زیاد رشد را می‌خورد. خرید و فروش زیاد خرچ دارد، و فروختن در وقت سقوط ضرر را قطعی می‌کند.' }]
  ];
  var more = [null,
    { en: 'One more lever is wrong too.', es: 'Otra palanca también está mal.', fa: 'یک دستهٔ دیگر هم غلط است.' },
    { en: 'Two more levers are wrong too.', es: 'Otras dos palancas también están mal.', fa: 'دو دستهٔ دیگر هم غلط است.' }];
  var label = [{ en: 'Stocks', es: 'Acciones', fa: 'سهام' }, { en: 'Bonds', es: 'Bonos', fa: 'اوراق قرضه' }, { en: 'Plan', es: 'Plan', fa: 'برنامه' }];
  var done = { en: 'Many companies, some bonds, low fees, held for years. A basket built to grow!', es: 'Muchas empresas, algunos bonos, comisiones bajas, por muchos años. ¡Una canasta hecha para crecer!', fa: 'شرکت‌های زیاد، کمی اوراق قرضه، فیس کم، برای سال‌ها. سبدی که برای رشد ساخته شده!' };
  var langs = ['en', 'es', 'fa'];
  for (var a = 0; a < 2; a++) for (var b = 0; b < 2; b++) for (var c = 0; c < 3; c++) {
    var s = [a, b, c], wrong = [0, 1, 2].filter(function (i) { return s[i] !== right[i]; });
    var show = ch.switches.map(function (sw, i) {
      var t = {}; langs.forEach(function (l) { t[l] = label[i][l] + ': ' + sw.states[s[i]][l]; });
      return { icon: sw.icon, ok: s[i] === right[i], t: t };
    });
    var t = done;
    if (wrong.length) {
      var first = why[wrong[0]][s[wrong[0]]], extra = more[wrong.length - 1];
      t = {}; langs.forEach(function (l) { t[l] = first[l] + (extra ? ' ' + extra[l] : ''); });
    }
    ch.results[s.join(',')] = { ok: !wrong.length, t: t, show: show };
  }
})();
