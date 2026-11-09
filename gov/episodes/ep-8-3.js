/* CIVICWALKER · Episode 8.3 · Economy and Trade · THE FINALE
   Norfolk, Virginia, today: the Port of Virginia on the Elizabeth River. North: downtown, with the bank (J), the
   public library (U), three homes and Main Street (row 4). The path runs south from Main Street to the harbor.
   South-west: the harbor market (m stalls on light paving l), where the charter stone stands. South-east: the
   container terminal, with stacks of shipping containers (X) and two docks (k) out into the river (~, =).
   The last charter page is here: beat the Great Grump and the Great Charter is whole again. */
window.EPISODE = {
  id: '8.3',
  realm: 8,
  sol: 'GOVT',
  title: { en: 'Economy and Trade', es: 'Economía y comercio', fa: 'اقتصاد و تجارت' },
  place: { en: 'Norfolk, today', es: 'Norfolk, hoy', fa: 'نورفوک، امروز' },
  intro: [
    { en: 'The last page! The Grump hid it here, in the busy World Harbor.',
      es: '¡La última página! El Gruñón la escondió aquí, en el activo Puerto del Mundo.',
      fa: 'آخرین صفحه! غرغرو آن را اینجا، در بندر شلوغ جهان، پنهان کرد.' },
    { en: 'People forget how money and trade work. Talk to 3 people, then the stone.',
      es: 'La gente olvida cómo funcionan el dinero y el comercio. Habla con 3 personas y luego ve a la piedra.',
      fa: 'مردم فراموش می‌کنند پول و تجارت چطور کار می‌کند. با ۳ نفر گپ بزن، بعد نزد سنگ برو.' }
  ],
  /* cut scenes (fun-pass-4): Norfolk on the world map (no timeline in this game) */
  scenes: {
    at: [-76.30, 36.85],
    start: [
      { en: 'Norfolk, Virginia, is a port city on the Elizabeth River, near the Chesapeake Bay.',
        es: 'Norfolk, Virginia, es una ciudad puerto en el río Elizabeth, cerca de la bahía de Chesapeake.',
        fa: 'نورفوک، ویرجینیا، یک شهر بندری کنار دریای الیزابت، نزدیک خلیج چِساپیک است.' },
      { en: 'Giant cranes at the Port of Virginia lift steel boxes on and off ships.',
        es: 'Grúas gigantes en el Puerto de Virginia suben y bajan cajas de acero de los barcos.',
        fa: 'جرثقیل‌های بزرگ در بندر ویرجینیا صندوق‌های فولادی را بالا و پایین کشتی‌ها می‌برند.' },
      { en: 'Norfolk is also home to the world\'s largest naval base.',
        es: 'En Norfolk también está la base naval más grande del mundo.',
        fa: 'بزرگ‌ترین پایگاه نیروی بحری جهان هم در نورفوک است.' }
    ],
    page: { en: 'All 24 charter pages are home. The Great Charter is whole again!',
      es: 'Las 24 páginas de la carta volvieron a casa. ¡La Gran Carta está completa otra vez!',
      fa: 'هر ۲۴ صفحهٔ منشور به خانه برگشتند. منشور بزرگ دوباره کامل است!' },
    guess: {
      q: { en: 'Ships bring goods in from other countries. What do we call those goods?', es: 'Los barcos traen productos de otros países. ¿Cómo se llaman esos productos?', fa: 'کشتی‌ها از کشورهای دیگر جنس می‌آورند. آن جنس‌ها را چه می‌گوییم؟' },
      choices: [
        { t: { en: '📦 Imports', es: '📦 Importaciones', fa: '📦 واردات' }, ok: true },
        { t: { en: '🚢 Exports', es: '🚢 Exportaciones', fa: '🚢 صادرات' } }
      ],
      why: { en: 'Imports come in. Exports go out. The Port of Virginia handles both.', es: 'Las importaciones entran. Las exportaciones salen. El Puerto de Virginia maneja las dos.', fa: 'واردات داخل می‌آید. صادرات بیرون می‌رود. بندر ویرجینیا هر دو را اداره می‌کند.' }
    },
    next: {
      q: { en: 'Look back on all 8 realms. Where does our government get its power?', es: 'Mira atrás a los 8 reinos. ¿De dónde saca su poder nuestro gobierno?', fa: 'به هر ۸ سرزمین نگاه کن. حکومت ما قدرتش را از کجا می‌گیرد؟' },
      choices: [
        { t: { en: '🗳️ From the people', es: '🗳️ Del pueblo', fa: '🗳️ از مردم' }, ok: true },
        { t: { en: '👑 From one ruler', es: '👑 De un solo gobernante', fa: '👑 از یک حاکم' } }
      ],
      why: { en: 'From the Old Lands to the Harbor: power comes from the people, is shared, and protects rights.', es: 'De las Tierras Antiguas al Puerto: el poder viene del pueblo, se reparte y protege derechos.', fa: 'از سرزمین‌های کهن تا بندر: قدرت از مردم می‌آید، تقسیم می‌شود و از حقوق محافظت می‌کند.' }
    }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandpa Earl', es: 'Abuelo Earl', fa: 'پدرکلان ارل' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#4a6a8a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'For 40 years I built navy ships across the harbor, in Newport News.', es: 'Durante 40 años construí barcos de la marina al otro lado del puerto, en Newport News.', fa: 'چهل سال در آن طرف بندر، در نیوپورت نیوز، کشتی‌های نیروی بحری ساختم.' },
        { en: 'The government sets safety rules for workers. We wore hard hats every day.', es: 'El gobierno pone reglas de seguridad para los trabajadores. Usábamos casco todos los días.', fa: 'حکومت برای کارگران قانون‌های امنیت می‌گذارد. ما هر روز کلاه ایمنی می‌پوشیدیم.' },
        { en: 'Ships and shipbuilding still give many people jobs in Virginia.', es: 'Los barcos y la construcción de barcos todavía dan trabajo a mucha gente en Virginia.', fa: 'کشتی‌ها و کشتی‌سازی هنوز به بسیاری از مردم ویرجینیا کار می‌دهند.' }
      ] },
    { at: [16, 2], name: { en: 'Ms. Ortiz', es: 'Sra. Ortiz', fa: 'خانم اورتیز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f5f3a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'My son is a sailor in the navy. He works on a big gray ship.', es: 'Mi hijo es marinero de la marina. Trabaja en un barco gris muy grande.', fa: 'پسرم ملاح نیروی بحری است. او روی یک کشتی بزرگ خاکستری کار می‌کند.' },
        { en: 'Defense keeps the whole country safe. It is a [[public good|public good]].', es: 'La defensa protege a todo el país. Es un [[public good|bien público]].', fa: 'دفاع تمام کشور را امن نگه می‌دارد. این یک [[public good|خدمت عامه]] است.' },
        { en: 'Our [[tax|taxes]] pay for the navy, and for roads and schools too.', es: 'Nuestros [[tax|impuestos]] pagan la marina, y también las carreteras y las escuelas.', fa: '[[tax|مالیهٔ]] ما پول نیروی بحری را می‌دهد، و پول سرک‌ها و مکتب‌ها را هم.' }
      ] },
    { at: [28, 2], name: { en: 'Dev', es: 'Dev', fa: 'دِو' },
      look: { skin: 3, hair: '#120c08', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I write computer programs. Technology is a big part of Virginia\'s economy.', es: 'Escribo programas de computadora. La tecnología es una parte grande de la economía de Virginia.', fa: 'من پروگرام‌های کمپیوتر می‌نویسم. تکنالوژی بخش بزرگ اقتصاد ویرجینیا است.' },
        { en: 'When I rented this home, I signed a [[contract|contract]] with the owner.', es: 'Cuando alquilé esta casa, firmé un [[contract|contrato]] con el dueño.', fa: 'وقتی این خانه را کرایه گرفتم، با صاحبش یک [[contract|قرارداد]] امضا کردم.' },
        { en: 'The government protects property and contracts, so people can trade safely.', es: 'El gobierno protege la propiedad y los contratos, para que la gente comercie con seguridad.', fa: 'حکومت از دارایی و قراردادها محافظت می‌کند، تا مردم با امنیت تجارت کنند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): downtown Norfolk. Homes (Q/R over h, doors at x 3, 16, 28), the bank (J, x 7-11), the public
     library (U, x 21-24), Main Street (row 4), trees. The dirt path (:) runs south from Main Street to the harbor.
     South-west: the harbor market (l paving, m stalls), with the charter stone and its three levers.
     South-east: the container terminal: container stacks (X) and the waterfront walk (row 17).
     Rows 18-21: the Elizabeth River (~, deep =), with the export dock (x 20-21) and the container dock (x 25-29). */
  map: [
    'UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU',
    'U.QQQ..JJJJJ...RRR...UUUU..QQQ.U',
    'U.hdh..JJJJJ...hdh...UUUU..hdh.U',
    'U.......x...............x......U',
    'UllllllllllllllllllllllllllllllU',
    'U..............................U',
    'U..T............:........T.....U',
    'U...............:..............U',
    'U.......T.......:.......T......U',
    'U...............:..............U',
    'U...T...........:...........T..U',
    'U...............:..............U',
    'U.lllllllll.....:...XXX..XXX...U',
    'U.lmmlllmml.....:...XXX..XXX...U',
    'U.lllllllll.....:..............U',
    'U.lmmlllmml.........XXX..XXX...U',
    'U.lllllllll....................U',
    'U.......x.....x................U',
    '~~~~~~~~~~~~~~~~~~~~kk~~~kkkkk~~',
    '~~~~~~~~~~~~~~~~~~~~kk~~~~~~~~~~',
    '================================',
    '================================'
  ],
  start: [16, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 6], at: [12, 10], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, toward the harbor.', es: 'Desde esta nota, camina 4 pasos al sur, hacia el puerto.', fa: 'از این یادداشت، ۴ قدم به جنوب، به طرف بندر برو.' },
      text: { en: 'An old penny! The US Mint, part of the government, makes the country\'s coins.', es: '¡Un centavo viejo! La Casa de la Moneda, parte del gobierno, hace las monedas del país.', fa: 'یک سکهٔ کهنه! ضراب‌خانهٔ امریکا، که بخشی از حکومت است، سکه‌های کشور را می‌سازد.' } },
    { clueAt: [29, 11], at: [29, 15], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps south, past the container stacks.', es: 'Desde esta nota, camina 4 pasos al sur, junto a las pilas de contenedores.', fa: 'از این یادداشت، ۴ قدم به جنوب، از کنار کانتینرها برو.' },
      text: { en: 'A shell from the Chesapeake Bay! Ships have sailed into this harbor for hundreds of years.', es: '¡Una concha de la bahía de Chesapeake! Hace cientos de años que los barcos entran a este puerto.', fa: 'یک صدف از خلیج چِساپیک! صدها سال است که کشتی‌ها به این بندر می‌آیند.' } }
  ],

  words: {
    economy: { en: 'how people make, buy, sell and use goods and services', es: 'cómo la gente hace, compra, vende y usa bienes y servicios', fa: 'این‌که مردم چطور جنس و خدمات می‌سازند، می‌خرند، می‌فروشند و استفاده می‌کنند' },
    'traditional economy': { en: 'people make what their families always made, the old way', es: 'la gente hace lo que su familia siempre hizo, a la manera antigua', fa: 'مردم همان چیزی را می‌سازند که خانواده‌شان همیشه می‌ساخت، به راه قدیم' },
    'command economy': { en: 'the government decides what to make and how much', es: 'el gobierno decide qué hacer y cuánto', fa: 'حکومت تصمیم می‌گیرد چه چیز و چقدر ساخته شود' },
    'market economy': { en: 'buyers and sellers decide what to make and the prices', es: 'los compradores y vendedores deciden qué hacer y los precios', fa: 'خریداران و فروشندگان دربارهٔ ساختن جنس و قیمت تصمیم می‌گیرند' },
    'mixed economy': { en: 'a mostly free market, with some rules from the government', es: 'un mercado casi todo libre, con algunas reglas del gobierno', fa: 'یک بازار بیشتر آزاد، با بعضی قانون‌های حکومت' },
    'supply and demand': { en: 'how much there is to sell, and how much people want it', es: 'cuánto hay para vender y cuánto lo quiere la gente', fa: 'چقدر جنس برای فروش هست، و مردم چقدر آن را می‌خواهند' },
    import: { en: 'a good that comes in from another country', es: 'un producto que entra desde otro país', fa: 'جنسی که از کشور دیگر داخل می‌آید' },
    export: { en: 'a good that is sent out to another country', es: 'un producto que se envía a otro país', fa: 'جنسی که به کشور دیگر فرستاده می‌شود' },
    tariff: { en: 'a tax on imports; it makes imported goods cost more', es: 'un impuesto a las importaciones; hace que cuesten más', fa: 'مالیه بر واردات؛ جنس وارداتی را گران‌تر می‌کند' },
    'free trade': { en: 'trade between countries with low or no tariffs', es: 'comercio entre países con aranceles bajos o sin aranceles', fa: 'تجارت میان کشورها با تعرفهٔ کم یا بدون تعرفه' },
    'fiscal policy': { en: 'the government\'s taxing and spending, set by Congress and the President', es: 'los impuestos y gastos del gobierno, que deciden el Congreso y el presidente', fa: 'مالیه گرفتن و مصرف حکومت، که کانگرس و رئیس جمهور تعیین می‌کنند' },
    'monetary policy': { en: 'the Fed changes interest rates and the money supply', es: 'la Reserva Federal cambia las tasas de interés y la cantidad de dinero', fa: 'بانک مرکزی نرخ سود و مقدار پول را تغییر می‌دهد' },
    'federal reserve': { en: 'the Fed: the central bank of the United States', es: 'la Fed: el banco central de Estados Unidos', fa: 'فِد: بانک مرکزی امریکا' },
    'interest rate': { en: 'the extra money you pay when you borrow money', es: 'el dinero extra que pagas cuando pides prestado', fa: 'پول اضافه که وقتی قرض می‌گیری می‌پردازی' },
    'public good': { en: 'something for everyone that the government provides, like roads', es: 'algo para todos que da el gobierno, como las carreteras', fa: 'چیزی برای همه که حکومت می‌دهد، مثل سرک' },
    tax: { en: 'money people pay to the government', es: 'dinero que la gente le paga al gobierno', fa: 'پولی که مردم به حکومت می‌پردازند' },
    budget: { en: 'a plan for how money will be raised and spent', es: 'un plan de cómo se va a juntar y gastar el dinero', fa: 'پلانی برای این‌که پول چطور جمع و مصرف شود' },
    contract: { en: 'a deal that people sign and must keep', es: 'un acuerdo que la gente firma y debe cumplir', fa: 'توافقی که مردم امضا می‌کنند و باید عملی کنند' }
  },

  npcs: [
    {
      x: 10, y: 3,
      name: { en: 'Mr. Haddad', es: 'Sr. Haddad', fa: 'آقای حداد' },
      role: { en: 'Bank teller', es: 'Cajero de banco', fa: 'کارمند بانک' },
      look: { skin: 2, hair: '#1a1208', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'People save money here. When they borrow, they pay extra: [[interest rate|interest]].', es: 'La gente ahorra dinero aquí. Cuando pide prestado, paga extra: [[interest rate|interés]].', fa: 'مردم اینجا پول پس‌انداز می‌کنند. وقتی قرض می‌گیرند، پول اضافه می‌دهند: [[interest rate|سود]].' },
        { en: 'The [[federal reserve|Federal Reserve]], or the Fed, is the country\'s central bank.', es: 'La [[federal reserve|Reserva Federal]], o la Fed, es el banco central del país.', fa: '[[federal reserve|فدرال رزرو]]، یا فِد، بانک مرکزی کشور است.' },
        { en: 'The Fed changes interest rates to keep prices steady and jobs growing.', es: 'La Fed cambia las tasas de interés para mantener los precios estables y que crezcan los empleos.', fa: 'فِد نرخ سود را تغییر می‌دهد تا قیمت‌ها ثابت بمانند و کار زیاد شود.' },
        { en: 'That is [[monetary policy|monetary policy]]. Taxing and spending is [[fiscal policy|fiscal policy]]: Congress and the President.', es: 'Eso es [[monetary policy|política monetaria]]. Los impuestos y gastos son [[fiscal policy|política fiscal]]: el Congreso y el presidente.', fa: 'این [[monetary policy|سیاست پولی]] است. مالیه و مصرف [[fiscal policy|سیاست مالی]] است: کار کانگرس و رئیس جمهور.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Who changes interest rates to keep prices steady?', es: '¿Quién cambia las tasas de interés para mantener estables los precios?', fa: 'کی نرخ سود را تغییر می‌دهد تا قیمت‌ها ثابت بمانند؟' },
        choices: [
          { ok: true, t: { en: 'The Federal Reserve', es: 'La Reserva Federal', fa: 'فدرال رزرو' },
            why: { en: 'Yes! The Fed, the central bank, sets monetary policy. It changes interest rates.', es: '¡Sí! La Fed, el banco central, hace la política monetaria. Cambia las tasas de interés.', fa: 'بله! فِد، بانک مرکزی، سیاست پولی را تعیین می‌کند. نرخ سود را تغییر می‌دهد.' } },
          { t: { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' },
            why: { en: 'No. The Supreme Court decides cases about laws. It does not set interest rates.', es: 'No. La Corte Suprema decide casos sobre las leyes. No pone las tasas de interés.', fa: 'نه. دیوان عالی دربارهٔ قانون‌ها فیصله می‌کند. نرخ سود را تعیین نمی‌کند.' } },
          { t: { en: 'The state governors', es: 'Los gobernadores', fa: 'والی‌های ایالت‌ها' },
            why: { en: 'No. Governors lead the states. The Fed, the central bank, sets interest rates.', es: 'No. Los gobernadores dirigen los estados. La Fed, el banco central, pone las tasas de interés.', fa: 'نه. والی‌ها ایالت‌ها را رهبری می‌کنند. فِد، بانک مرکزی، نرخ سود را تعیین می‌کند.' } }
        ]
      }
    },
    {
      x: 22, y: 3,
      name: { en: 'Amira', es: 'Amira', fa: 'امیره' },
      role: { en: 'Student', es: 'Estudiante', fa: 'شاگرد' },
      look: { skin: 4, hair: '#120c08', shirt: '#d9542b', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'In a [[traditional economy|traditional economy]], people make what their families always made.', es: 'En una [[traditional economy|economía tradicional]], la gente hace lo que su familia siempre hizo.', fa: 'در [[traditional economy|اقتصاد سنتی]]، مردم همان چیزی را می‌سازند که خانواده‌شان همیشه می‌ساخت.' },
        { en: 'In a [[command economy|command economy]], the government decides what to make.', es: 'En una [[command economy|economía dirigida]], el gobierno decide qué se hace.', fa: 'در [[command economy|اقتصاد دستوری]]، حکومت تصمیم می‌گیرد چه چیز ساخته شود.' },
        { en: 'In a [[market economy|market economy]], buyers and sellers decide. Prices follow [[supply and demand|supply and demand]].', es: 'En una [[market economy|economía de mercado]], deciden compradores y vendedores. Los precios siguen la [[supply and demand|oferta y la demanda]].', fa: 'در [[market economy|اقتصاد بازار]]، خریداران و فروشندگان تصمیم می‌گیرند. قیمت‌ها از [[supply and demand|عرضه و تقاضا]] پیروی می‌کنند.' },
        { en: 'The US is a [[mixed economy|mixed economy]]: a mostly free market, with some government rules.', es: 'EE. UU. es una [[mixed economy|economía mixta]]: un mercado casi todo libre, con algunas reglas del gobierno.', fa: 'امریکا [[mixed economy|اقتصاد مختلط]] دارد: بازار بیشتر آزاد، با بعضی قانون‌های حکومت.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'The government decides what every factory makes. What kind of economy is this?', es: 'El gobierno decide qué hace cada fábrica. ¿Qué tipo de economía es esta?', fa: 'حکومت تصمیم می‌گیرد هر فابریکه چه بسازد. این چه نوع اقتصاد است؟' },
        choices: [
          { ok: true, t: { en: 'A command economy', es: 'Una economía dirigida', fa: 'اقتصاد دستوری' },
            why: { en: 'Right! In a command economy, the government decides what to make and how much.', es: '¡Correcto! En una economía dirigida, el gobierno decide qué se hace y cuánto.', fa: 'درست! در اقتصاد دستوری، حکومت تصمیم می‌گیرد چه چیز و چقدر ساخته شود.' } },
          { t: { en: 'A traditional economy', es: 'Una economía tradicional', fa: 'اقتصاد سنتی' },
            why: { en: 'No. In a traditional economy, people make what their families always made.', es: 'No. En una economía tradicional, la gente hace lo que su familia siempre hizo.', fa: 'نه. در اقتصاد سنتی، مردم همان چیزی را می‌سازند که خانواده‌شان همیشه می‌ساخت.' } },
          { t: { en: 'A market economy', es: 'Una economía de mercado', fa: 'اقتصاد بازار' },
            why: { en: 'No. In a market economy, buyers and sellers decide, not the government.', es: 'No. En una economía de mercado, deciden los compradores y vendedores, no el gobierno.', fa: 'نه. در اقتصاد بازار، خریداران و فروشندگان تصمیم می‌گیرند، نه حکومت.' } }
        ]
      }
    },
    {
      x: 28, y: 14,
      name: { en: 'Luis', es: 'Luis', fa: 'لوئیس' },
      role: { en: 'Crane operator', es: 'Operador de grúa', fa: 'رانندهٔ جرثقیل' },
      look: { skin: 1, hair: '#3a2416', shirt: '#e0a020', pants: '#2a3a5a', hat: '#f2c14e', style: 'short' },
      lines: [
        { en: 'I run a giant crane. I lift steel boxes on and off the ships.', es: 'Manejo una grúa gigante. Subo y bajo cajas de acero de los barcos.', fa: 'من یک جرثقیل بزرگ را می‌رانم. صندوق‌های فولادی را بالا و پایین کشتی‌ها می‌برم.' },
        { en: 'Goods that come in are [[import|imports]]. Goods we send out are [[export|exports]].', es: 'Lo que entra son [[import|importaciones]]. Lo que enviamos afuera son [[export|exportaciones]].', fa: 'جنسی که داخل می‌آید [[import|واردات]] است. جنسی که بیرون می‌فرستیم [[export|صادرات]] است.' },
        { en: 'A [[tariff|tariff]] is a tax on imports. It makes imported goods cost more.', es: 'Un [[tariff|arancel]] es un impuesto a las importaciones. Hace que cuesten más.', fa: '[[tariff|تعرفه]] مالیه بر واردات است. جنس وارداتی را گران‌تر می‌کند.' },
        { en: '[[free trade|Free trade]] deals between countries lower their tariffs.', es: 'Los acuerdos de [[free trade|libre comercio]] entre países bajan sus aranceles.', fa: 'توافق‌های [[free trade|تجارت آزاد]] میان کشورها تعرفه‌ها را کم می‌کنند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'A $100 imported jacket gets a 10% tariff. What usually happens to its price?', es: 'Una chaqueta importada de $100 recibe un arancel del 10%. ¿Qué suele pasar con su precio?', fa: 'بر یک جاکت وارداتی ۱۰۰ دالری تعرفهٔ ۱۰٪ می‌آید. معمولاً قیمتش چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'It goes up, to $110', es: 'Sube, a $110', fa: 'بالا می‌رود، ۱۱۰ دالر' },
            why: { en: 'Yes. The importer pays the $10 tax, so the price usually rises to about $110.', es: 'Sí. El importador paga el impuesto de $10, así que el precio suele subir a unos $110.', fa: 'بله. واردکننده ۱۰ دالر مالیه می‌دهد، پس قیمت معمولاً تا حدود ۱۱۰ دالر بالا می‌رود.' } },
          { t: { en: 'It goes down, to $90', es: 'Baja, a $90', fa: 'پایین می‌آید، ۹۰ دالر' },
            why: { en: 'No. A tariff is a tax that is added on, so it raises the price.', es: 'No. Un arancel es un impuesto que se suma, así que sube el precio.', fa: 'نه. تعرفه مالیه‌ای است که اضافه می‌شود، پس قیمت را بالا می‌برد.' } },
          { t: { en: 'It stays the same, $100', es: 'Se queda igual, $100', fa: 'همان ۱۰۰ دالر می‌ماند' },
            why: { en: 'Usually not. The importer pays the tax, and the price usually goes up.', es: 'Casi nunca. El importador paga el impuesto, y el precio suele subir.', fa: 'معمولاً نه. واردکننده مالیه را می‌دهد، و قیمت معمولاً بالا می‌رود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 3, text: { en: 'BANK · Save money here, or borrow it. A loan costs extra: interest.', es: 'BANCO · Aquí puedes ahorrar dinero o pedirlo prestado. Un préstamo cuesta extra: interés.', fa: 'بانک · اینجا پول پس‌انداز کن یا قرض بگیر. قرض پول اضافه دارد: سود.' } },
    { x: 24, y: 3, text: { en: 'PUBLIC LIBRARY · Free books for everyone, paid for with taxes.', es: 'BIBLIOTECA PÚBLICA · Libros gratis para todos, pagados con impuestos.', fa: 'کتابخانهٔ عامه · کتاب رایگان برای همه، با پول مالیه.' } },
    { x: 8, y: 17, text: { en: 'HARBOR MARKET · Buyers and sellers meet here. Prices follow supply and demand.', es: 'MERCADO DEL PUERTO · Aquí se encuentran compradores y vendedores. Los precios siguen la oferta y la demanda.', fa: 'بازار بندر · خریداران و فروشندگان اینجا یکجا می‌شوند. قیمت‌ها از عرضه و تقاضا پیروی می‌کنند.' } },
    { x: 14, y: 17, text: { en: 'ELIZABETH RIVER · Far away, gray navy ships. Norfolk has the world\'s largest naval base.', es: 'RÍO ELIZABETH · A lo lejos, barcos grises de la marina. Norfolk tiene la base naval más grande del mundo.', fa: 'دریای الیزابت · در دور، کشتی‌های خاکستری نیروی بحری. نورفوک بزرگ‌ترین پایگاه بحری جهان را دارد.' } }
  ],

  /* the quest: Joe the truck driver (gold !) on the road in the north-east -> Grace at the harbor market,
     south-west -> Sam on the export dock, south-east, who needs one Virginia good to export.
     The goods sit where they come from: soybeans off a farm truck on the west road, bananas just unloaded on the
     container dock, phones in the container yard. */
  quest: {
    stat: 'reg',
    title: { en: 'The Export Ship', es: 'El barco de exportación', fa: 'کشتی صادرات' },
    giver: {
      x: 27, y: 8,
      name: { en: 'Joe', es: 'Joe', fa: 'جو' },
      role: { en: 'Truck driver', es: 'Camionero', fa: 'رانندهٔ لاری' },
      look: { skin: 0, hair: '#8a5a2b', shirt: '#b8332b', pants: '#2a2a3a', hat: '#2f2f2f', style: 'short' },
      lines: [
        { en: 'I drive a truck. I carry goods between farms, stores and the port.', es: 'Manejo un camión. Llevo productos entre granjas, tiendas y el puerto.', fa: 'من لاری می‌رانم. جنس را میان کشتزارها، دکان‌ها و بندر می‌برم.' },
        { en: 'I drive on public roads. Our taxes pay for them: a [[public good|public good]].', es: 'Manejo por carreteras públicas. Nuestros impuestos las pagan: un [[public good|bien público]].', fa: 'روی سرک‌های عامه می‌رانم. مالیهٔ ما پول آن‌ها را می‌دهد: یک [[public good|خدمت عامه]].' },
        { en: 'The export ship is missing one load! Ask Grace at the harbor market, south-west.', es: '¡Al barco de exportación le falta una carga! Pregúntale a Grace en el mercado del puerto, al suroeste.', fa: 'کشتی صادرات یک بار کم دارد! از گریس در بازار بندر، جنوب غرب، بپرس.' }
      ],
      wait: { en: 'Grace sells fruit at the harbor market, south-west, by the river.', es: 'Grace vende fruta en el mercado del puerto, al suroeste, junto al río.', fa: 'گریس در بازار بندر، جنوب غرب، کنار دریا میوه می‌فروشد.' },
      thanks: { en: 'The soybeans are on board! Virginia farmers can sell to the world. Thank you!', es: '¡La soya ya está a bordo! Los granjeros de Virginia pueden vender al mundo. ¡Gracias!', fa: 'سویا بار کشتی شد! دهقانان ویرجینیا به جهان فروخته می‌توانند. تشکر!' }
    },
    contact: {
      x: 12, y: 14,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Market vendor', es: 'Vendedora del mercado', fa: 'دکاندار بازار' },
      look: { skin: 5, hair: '#1a1008', shirt: '#2f8f8f', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'When many people want my berries, I can charge more. That is demand.', es: 'Cuando mucha gente quiere mis moras, puedo cobrar más. Eso es la demanda.', fa: 'وقتی مردم زیاد توت‌هایم را بخواهند، می‌توانم قیمت را بالا ببرم. این تقاضا است.' },
        { en: 'When I have too many berries, I lower the price. That is supply.', es: 'Cuando tengo demasiadas moras, bajo el precio. Eso es la oferta.', fa: 'وقتی توت زیاد داشته باشم، قیمت را پایین می‌آورم. این عرضه است.' },
        { en: 'The export ship needs one more good, grown or made in Virginia.', es: 'Al barco de exportación le falta un producto más, cultivado o hecho en Virginia.', fa: 'کشتی صادرات یک جنس دیگر می‌خواهد، که در ویرجینیا کشت یا ساخته شده باشد.' },
        { en: 'Sam loads the export ship on the dock, south-east, past the containers.', es: 'Sam carga el barco de exportación en el muelle, al sureste, pasando los contenedores.', fa: 'سام کشتی صادرات را روی اسکله، جنوب شرق، آن طرف کانتینرها بار می‌کند.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 21, y: 17,
        name: { en: 'Sam', es: 'Sam', fa: 'سام' },
        role: { en: 'Dock loader', es: 'Cargador del muelle', fa: 'بارکش اسکله' },
        look: { skin: 3, hair: '#2a1a10', shirt: '#3a6a3a', pants: '#2a2a2a', hat: '#e07b39', style: 'short' },
        lines: [
          { en: 'This ship carries exports to other countries. One load is still missing.', es: 'Este barco lleva exportaciones a otros países. Todavía falta una carga.', fa: 'این کشتی صادرات را به کشورهای دیگر می‌برد. یک بار هنوز کم است.' }
        ]
      },
      q: { en: 'Bring me one good grown or made in Virginia, to sell to another country.', es: 'Tráeme un producto cultivado o hecho en Virginia, para vender a otro país.', fa: 'یک جنس که در ویرجینیا کشت یا ساخته شده برایم بیاور، تا به کشور دیگر فروخته شود.' },
      choices: [
        { ok: true, at: [1, 9], icon: '🌾', t: { en: 'A sack of Virginia soybeans', es: 'Un saco de soya de Virginia', fa: 'یک بوجی سویای ویرجینیا' },
          why: { en: 'Yes! Virginia farmers grow soybeans. Selling them to another country makes them an export.', es: '¡Sí! Los granjeros de Virginia cultivan soya. Venderla a otro país la convierte en exportación.', fa: 'بله! دهقانان ویرجینیا سویا کشت می‌کنند. فروختن آن به کشور دیگر آن را صادرات می‌سازد.' } },
        { at: [27, 18], icon: '🍌', t: { en: 'A crate of bananas', es: 'Una caja de bananas', fa: 'یک صندوق کیله' },
          why: { en: 'Not this one. Bananas grow in hot countries. They just came in by ship: an import.', es: 'Esta no. Las bananas crecen en países calientes. Acaban de llegar en barco: una importación.', fa: 'این نه. کیله در کشورهای گرم می‌روید. تازه با کشتی آمده: واردات است.' } },
        { at: [24, 13], icon: '📱', t: { en: 'A box of new phones', es: 'Una caja de teléfonos nuevos', fa: 'یک صندوق موبایل نو' },
          why: { en: 'No. These phones were made in another country. They came in by ship, so they are imports.', es: 'No. Estos teléfonos se hicieron en otro país. Llegaron en barco, así que son importaciones.', fa: 'نه. این موبایل‌ها در کشور دیگر ساخته شده‌اند. با کشتی آمده‌اند، پس واردات هستند.' } }
      ],
      item: { icon: '🌾', name: { en: 'Virginia soybeans', es: 'Soya de Virginia', fa: 'سویای ویرجینیا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 16]],
  smudges: [[20, 8], [6, 9]],

  challenge: {
    at: [6, 14],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // at the harbor market: the budget lever and the interest-rate lever at the north corners, the tariff lever by the river
    spots: [[2, 12], [10, 12], [6, 16]],
    stat: 'pla',
    title: { en: 'The Harbor Market Levers', es: 'Las palancas del mercado del puerto', fa: 'دسته‌های بازار بندر' },
    intro: { en: 'News: a 10% [[tariff|tariff]] on imported bikes starts today. Set who controls each lever, then set the tariff.',
      es: 'Noticia: hoy empieza un [[tariff|arancel]] del 10% a las bicicletas importadas. Pon quién controla cada palanca y luego el arancel.',
      fa: 'خبر: از امروز [[tariff|تعرفهٔ]] ۱۰٪ بر بایسکل‌های وارداتی شروع می‌شود. تعیین کن هر دسته دست کیست، بعد تعرفه را بگذار.' },
    switches: [
      { name: { en: 'Taxing and spending · the budget', es: 'Impuestos y gastos · el presupuesto', fa: 'مالیه و مصرف · بودجه' }, icon: '🏛️', start: 0,
        states: [{ en: 'The Fed sets it', es: 'La Fed lo decide', fa: 'فِد تعیین می‌کند' }, { en: 'Congress and the President set it', es: 'El Congreso y el presidente lo deciden', fa: 'کانگرس و رئیس جمهور تعیین می‌کنند' }] },
      { name: { en: 'Interest rates', es: 'Tasas de interés', fa: 'نرخ سود' }, icon: '🏦', start: 0,
        states: [{ en: 'Congress and the President set them', es: 'El Congreso y el presidente las deciden', fa: 'کانگرس و رئیس جمهور تعیین می‌کنند' }, { en: 'The Fed sets them', es: 'La Fed las decide', fa: 'فِد تعیین می‌کند' }] },
      { name: { en: 'Tariff on imported bikes', es: 'Arancel a bicicletas importadas', fa: 'تعرفه بر بایسکل وارداتی' }, icon: '🚲', start: 0,
        states: [{ en: 'No tariff', es: 'Sin arancel', fa: 'بدون تعرفه' }, { en: 'A 10% tariff', es: 'Un arancel del 10%', fa: 'تعرفهٔ ۱۰٪' }, { en: 'A 25% tariff', es: 'Un arancel del 25%', fa: 'تعرفهٔ ۲۵٪' }] }
    ],
    results: {
      '0,0,0': { ok: false, t: { en: 'The two levers are swapped! Congress and the President set the budget. The Fed sets interest rates.', es: '¡Las dos palancas están al revés! El Congreso y el presidente hacen el presupuesto. La Fed pone las tasas.', fa: 'دو دسته جابجا شده‌اند! کانگرس و رئیس جمهور بودجه را می‌سازند. فِد نرخ سود را تعیین می‌کند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200, no tariff', es: 'Bici importada: $200, sin arancel', fa: 'بایسکل وارداتی: ۲۰۰ دالر، بدون تعرفه' } }] },
      '0,0,1': { ok: false, t: { en: 'The two levers are swapped! Congress and the President set the budget. The Fed sets interest rates.', es: '¡Las dos palancas están al revés! El Congreso y el presidente hacen el presupuesto. La Fed pone las tasas.', fa: 'دو دسته جابجا شده‌اند! کانگرس و رئیس جمهور بودجه را می‌سازند. فِد نرخ سود را تعیین می‌کند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: true, t: { en: 'Imported bike: $200 → $220', es: 'Bici importada: $200 → $220', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۲۰ دالر' } }] },
      '0,0,2': { ok: false, t: { en: 'The two levers are swapped! Congress and the President set the budget. The Fed sets interest rates.', es: '¡Las dos palancas están al revés! El Congreso y el presidente hacen el presupuesto. La Fed pone las tasas.', fa: 'دو دسته جابجا شده‌اند! کانگرس و رئیس جمهور بودجه را می‌سازند. فِد نرخ سود را تعیین می‌کند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200 → $250', es: 'Bici importada: $200 → $250', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۵۰ دالر' } }] },
      '0,1,0': { ok: false, t: { en: 'The Fed does not write the budget. Congress and the President decide taxes and spending.', es: 'La Fed no hace el presupuesto. El Congreso y el presidente deciden los impuestos y gastos.', fa: 'فِد بودجه را نمی‌نویسد. کانگرس و رئیس جمهور دربارهٔ مالیه و مصرف تصمیم می‌گیرند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200, no tariff', es: 'Bici importada: $200, sin arancel', fa: 'بایسکل وارداتی: ۲۰۰ دالر، بدون تعرفه' } }] },
      '0,1,1': { ok: false, t: { en: 'The Fed does not write the budget. Congress and the President decide taxes and spending.', es: 'La Fed no hace el presupuesto. El Congreso y el presidente deciden los impuestos y gastos.', fa: 'فِد بودجه را نمی‌نویسد. کانگرس و رئیس جمهور دربارهٔ مالیه و مصرف تصمیم می‌گیرند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: true, t: { en: 'Imported bike: $200 → $220', es: 'Bici importada: $200 → $220', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۲۰ دالر' } }] },
      '0,1,2': { ok: false, t: { en: 'The Fed does not write the budget. Congress and the President decide taxes and spending.', es: 'La Fed no hace el presupuesto. El Congreso y el presidente deciden los impuestos y gastos.', fa: 'فِد بودجه را نمی‌نویسد. کانگرس و رئیس جمهور دربارهٔ مالیه و مصرف تصمیم می‌گیرند.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'Budget: the Fed?', es: 'Presupuesto: ¿la Fed?', fa: 'بودجه: فِد؟' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200 → $250', es: 'Bici importada: $200 → $250', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۵۰ دالر' } }] },
      '1,0,0': { ok: false, t: { en: 'Congress and the President do not set interest rates. The Fed, the central bank, does.', es: 'El Congreso y el presidente no ponen las tasas de interés. Lo hace la Fed, el banco central.', fa: 'کانگرس و رئیس جمهور نرخ سود را تعیین نمی‌کنند. فِد، بانک مرکزی، این کار را می‌کند.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200, no tariff', es: 'Bici importada: $200, sin arancel', fa: 'بایسکل وارداتی: ۲۰۰ دالر، بدون تعرفه' } }] },
      '1,0,1': { ok: false, t: { en: 'Congress and the President do not set interest rates. The Fed, the central bank, does.', es: 'El Congreso y el presidente no ponen las tasas de interés. Lo hace la Fed, el banco central.', fa: 'کانگرس و رئیس جمهور نرخ سود را تعیین نمی‌کنند. فِد، بانک مرکزی، این کار را می‌کند.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: true, t: { en: 'Imported bike: $200 → $220', es: 'Bici importada: $200 → $220', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۲۰ دالر' } }] },
      '1,0,2': { ok: false, t: { en: 'Congress and the President do not set interest rates. The Fed, the central bank, does.', es: 'El Congreso y el presidente no ponen las tasas de interés. Lo hace la Fed, el banco central.', fa: 'کانگرس و رئیس جمهور نرخ سود را تعیین نمی‌کنند. فِد، بانک مرکزی، این کار را می‌کند.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: false, t: { en: 'Rates: Congress?', es: 'Tasas: ¿el Congreso?', fa: 'نرخ سود: کانگرس؟' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200 → $250', es: 'Bici importada: $200 → $250', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۵۰ دالر' } }] },
      '1,1,0': { ok: false, t: { en: 'No tariff yet, so the imported bike still costs $200. The news says a 10% tariff.', es: 'Todavía no hay arancel, así que la bici importada cuesta $200. La noticia dice 10%.', fa: 'هنوز تعرفه نیست، پس بایسکل وارداتی هنوز ۲۰۰ دالر است. خبر می‌گوید تعرفهٔ ۱۰٪.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200, no tariff', es: 'Bici importada: $200, sin arancel', fa: 'بایسکل وارداتی: ۲۰۰ دالر، بدون تعرفه' } }] },
      '1,1,1': { ok: true, t: { en: 'Yes! Congress and the President set the budget. The Fed sets rates. The 10% tariff makes the bike $220.', es: '¡Sí! El Congreso y el presidente hacen el presupuesto. La Fed pone las tasas. El arancel del 10% sube la bici a $220.', fa: 'بله! کانگرس و رئیس جمهور بودجه را می‌سازند. فِد نرخ سود را تعیین می‌کند. تعرفهٔ ۱۰٪ بایسکل را ۲۲۰ دالر می‌سازد.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: true, t: { en: 'Imported bike: $200 → $220', es: 'Bici importada: $200 → $220', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۲۰ دالر' } }] },
      '1,1,2': { ok: false, t: { en: 'A 25% tariff adds $50, so the $200 bike costs $250. The news says only 10%.', es: 'Un arancel del 25% suma $50, así que la bici de $200 cuesta $250. La noticia dice solo 10%.', fa: 'تعرفهٔ ۲۵٪ پنجاه دالر اضافه می‌کند، پس بایسکل ۲۰۰ دالری ۲۵۰ دالر می‌شود. خبر فقط ۱۰٪ می‌گوید.' },
        show: [{ icon: '🏛️', ok: true, t: { en: 'Budget: Congress and President', es: 'Presupuesto: Congreso y presidente', fa: 'بودجه: کانگرس و رئیس جمهور' } }, { icon: '🏦', ok: true, t: { en: 'Rates: the Fed', es: 'Tasas: la Fed', fa: 'نرخ سود: فِد' } }, { icon: '🚲', ok: false, t: { en: 'Imported bike: $200 → $250', es: 'Bici importada: $200 → $250', fa: 'بایسکل وارداتی: از ۲۰۰ به ۲۵۰ دالر' } }] }
    },
    otherwise: { ok: false, t: { en: 'Not every lever is right yet. Try another setting.', es: 'Todavía no están bien todas las palancas. Prueba otra combinación.', fa: 'هنوز همهٔ دسته‌ها درست نیستند. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'Every lever is right! The last page glows. Beat the Grump, and the Great Charter is whole again.',
      es: '¡Todas las palancas están bien! La última página brilla. Vence al Gruñón, y la Gran Carta estará completa otra vez.',
      fa: 'همهٔ دسته‌ها درست هستند! صفحهٔ آخر می‌درخشد. غرغرو را شکست بده، و منشور بزرگ دوباره کامل می‌شود.' }
  },

  boss: {
    at: [18, 15],
    stat: 'reg',
    need: 3,
    name: { en: 'The Great Grump', es: 'El Gran Gruñón', fa: 'غرغروی بزرگ' },
    appear: { en: 'The Great Grump rises over the container yard! It is the very last one. Go!', es: '¡El Gran Gruñón aparece sobre el patio de contenedores! Es el último de todos. ¡Ve!', fa: 'غرغروی بزرگ بالای میدان کانتینرها پیدا شد! این آخرین غرغرو است. برو!' },
    taunt: { en: 'Grr! Prices, taxes, tariffs? Too much! I keep the last page, and the Charter stays torn!', es: '¡Grr! ¿Precios, impuestos, aranceles? ¡Demasiado! ¡Me quedo la última página, y la Carta sigue rota!', fa: 'غرر! قیمت، مالیه، تعرفه؟ خیلی زیاد است! صفحهٔ آخر را نگه می‌دارم، و منشور پاره می‌ماند!' },
    win: { en: 'The Great Grump bursts into light. The 24th page flies home, and the Great Charter is whole again! Thank you, Civicwalker. Now you know how your government works.',
      es: 'El Gran Gruñón estalla en luz. ¡La página 24 vuelve a casa y la Gran Carta está completa otra vez! Gracias, Caminante Cívico. Ahora sabes cómo funciona tu gobierno.',
      fa: 'غرغروی بزرگ به نور تبدیل می‌شود. صفحهٔ ۲۴ به خانه برمی‌گردد و منشور بزرگ دوباره کامل است! تشکر، رهرو مدنی. حالا می‌دانی حکومتت چطور کار می‌کند.' },
    questions: [
      { q: { en: 'What kind of economy does the United States have?', es: '¿Qué tipo de economía tiene Estados Unidos?', fa: 'امریکا چه نوع اقتصاد دارد؟' },
        choices: [
          { en: 'A mixed economy', es: 'Una economía mixta', fa: 'اقتصاد مختلط' },
          { en: 'A command economy', es: 'Una economía dirigida', fa: 'اقتصاد دستوری' },
          { en: 'A traditional economy', es: 'Una economía tradicional', fa: 'اقتصاد سنتی' },
          { en: 'A pure barter economy', es: 'Una economía solo de trueque', fa: 'اقتصاد فقط تبادلهٔ جنس' }],
        answer: 0,
        why: { en: 'The US has a mostly free market, plus some government rules. That is a mixed economy.', es: 'EE. UU. tiene un mercado casi todo libre, más algunas reglas del gobierno. Es una economía mixta.', fa: 'امریکا بازار بیشتر آزاد دارد، همراه با بعضی قانون‌های حکومت. این اقتصاد مختلط است.' } },
      { q: { en: 'In a market economy, who decides what to make and sell?', es: 'En una economía de mercado, ¿quién decide qué hacer y vender?', fa: 'در اقتصاد بازار، کی تصمیم می‌گیرد چه چیز ساخته و فروخته شود؟' },
        choices: [
          { en: 'Buyers and sellers', es: 'Compradores y vendedores', fa: 'خریداران و فروشندگان' },
          { en: 'The government alone', es: 'Solo el gobierno', fa: 'فقط حکومت' },
          { en: 'The oldest families', es: 'Las familias más antiguas', fa: 'کهن‌ترین خانواده‌ها' },
          { en: 'The central bank', es: 'El banco central', fa: 'بانک مرکزی' }],
        answer: 0,
        why: { en: 'In a market economy, buyers and sellers decide. Supply and demand set the prices.', es: 'En una economía de mercado, deciden compradores y vendedores. La oferta y la demanda ponen los precios.', fa: 'در اقتصاد بازار، خریداران و فروشندگان تصمیم می‌گیرند. عرضه و تقاضا قیمت‌ها را تعیین می‌کنند.' } },
      { q: { en: 'What is a tariff?', es: '¿Qué es un arancel?', fa: 'تعرفه چیست؟' },
        choices: [
          { en: 'A tax on imported goods', es: 'Un impuesto a los productos importados', fa: 'مالیه بر جنس وارداتی' },
          { en: 'A loan from a big bank', es: 'Un préstamo de un banco grande', fa: 'قرض از یک بانک بزرگ' },
          { en: 'A good sent to other lands', es: 'Un producto enviado a otros países', fa: 'جنسی که به کشورهای دیگر می‌رود' },
          { en: 'A safety rule for workers', es: 'Una regla de seguridad para trabajadores', fa: 'قانون امنیت برای کارگران' }],
        answer: 0,
        why: { en: 'A tariff is a tax on imports. It usually makes imported goods cost more.', es: 'Un arancel es un impuesto a las importaciones. Casi siempre hace que cuesten más.', fa: 'تعرفه مالیه بر واردات است. معمولاً جنس وارداتی را گران‌تر می‌کند.' } },
      { q: { en: 'Virginia soybeans are shipped to sell in another country. What are they?', es: 'La soya de Virginia se envía para venderla en otro país. ¿Qué es?', fa: 'سویای ویرجینیا برای فروش به کشور دیگر فرستاده می‌شود. این چیست؟' },
        choices: [
          { en: 'Exports', es: 'Exportaciones', fa: 'صادرات' },
          { en: 'Imports', es: 'Importaciones', fa: 'واردات' },
          { en: 'Tariffs', es: 'Aranceles', fa: 'تعرفه‌ها' },
          { en: 'Public goods', es: 'Bienes públicos', fa: 'خدمات عامه' }],
        answer: 0,
        why: { en: 'Exports are goods sent out to other countries. Imports are goods that come in.', es: 'Las exportaciones son productos que salen a otros países. Las importaciones son los que entran.', fa: 'صادرات جنسی است که به کشورهای دیگر می‌رود. واردات جنسی است که داخل می‌آید.' } },
      { q: { en: 'Who sets fiscal policy, the taxing and spending in the budget?', es: '¿Quién decide la política fiscal, los impuestos y gastos del presupuesto?', fa: 'کی سیاست مالی، یعنی مالیه و مصرف بودجه، را تعیین می‌کند؟' },
        choices: [
          { en: 'Congress and the President', es: 'El Congreso y el presidente', fa: 'کانگرس و رئیس جمهور' },
          { en: 'The Federal Reserve bank', es: 'El banco de la Reserva Federal', fa: 'بانک فدرال رزرو' },
          { en: 'The Supreme Court justices', es: 'Los jueces de la Corte Suprema', fa: 'قاضیان دیوان عالی' },
          { en: 'The port and its workers', es: 'El puerto y sus trabajadores', fa: 'بندر و کارگرانش' }],
        answer: 0,
        why: { en: 'Congress passes the budget and taxes, and the President signs. That is fiscal policy.', es: 'El Congreso aprueba el presupuesto y los impuestos, y el presidente firma. Eso es política fiscal.', fa: 'کانگرس بودجه و مالیه را تصویب می‌کند و رئیس جمهور امضا می‌کند. این سیاست مالی است.' } },
      { q: { en: 'What does the Federal Reserve, the Fed, do?', es: '¿Qué hace la Reserva Federal, la Fed?', fa: 'فدرال رزرو، یا فِد، چه کار می‌کند؟' },
        choices: [
          { en: 'Sets interest rates', es: 'Pone las tasas de interés', fa: 'نرخ سود را تعیین می‌کند' },
          { en: 'Writes the US budget', es: 'Escribe el presupuesto del país', fa: 'بودجهٔ امریکا را می‌نویسد' },
          { en: 'Collects income taxes', es: 'Cobra los impuestos de ingresos', fa: 'مالیهٔ عایدات را جمع می‌کند' },
          { en: 'Picks the judges', es: 'Escoge a los jueces', fa: 'قاضیان را انتخاب می‌کند' }],
        answer: 0,
        why: { en: 'The Fed is the central bank. It changes interest rates and the money supply to keep prices steady.', es: 'La Fed es el banco central. Cambia las tasas de interés y la cantidad de dinero para mantener estables los precios.', fa: 'فِد بانک مرکزی است. نرخ سود و مقدار پول را تغییر می‌دهد تا قیمت‌ها ثابت بمانند.' } },
      { q: { en: 'Which of these is a public good that the government provides?', es: '¿Cuál de estos es un bien público que da el gobierno?', fa: 'کدام یکی از این‌ها خدمت عامه است که حکومت می‌دهد؟' },
        choices: [
          { en: 'Roads and schools', es: 'Carreteras y escuelas', fa: 'سرک‌ها و مکتب‌ها' },
          { en: 'A phone in a store', es: 'Un teléfono en una tienda', fa: 'یک موبایل در دکان' },
          { en: 'Berries at a stall', es: 'Moras en un puesto', fa: 'توت در یک دکان بازار' },
          { en: 'One driver\'s truck', es: 'El camión de un chofer', fa: 'لاری یک راننده' }],
        answer: 0,
        why: { en: 'Roads, schools and defense serve everyone. Taxes pay for these public goods.', es: 'Las carreteras, las escuelas y la defensa sirven a todos. Los impuestos pagan estos bienes públicos.', fa: 'سرک‌ها، مکتب‌ها و دفاع به همه خدمت می‌کنند. مالیه پول این خدمات عامه را می‌دهد.' } },
      { q: { en: 'Which is a big part of Virginia\'s economy?', es: '¿Cuál es una parte grande de la economía de Virginia?', fa: 'کدام یکی بخش بزرگ اقتصاد ویرجینیا است؟' },
        choices: [
          { en: 'The port and shipbuilding', es: 'El puerto y la construcción de barcos', fa: 'بندر و کشتی‌سازی' },
          { en: 'Gold and silver mines', es: 'Minas de oro y plata', fa: 'معدن‌های طلا و نقره' },
          { en: 'Big banana farms', es: 'Grandes granjas de bananas', fa: 'کشتزارهای بزرگ کیله' },
          { en: 'Oil wells in the desert', es: 'Pozos de petróleo en el desierto', fa: 'چاه‌های نفت در بیابان' }],
        answer: 0,
        why: { en: 'Virginia has the port, ships and shipbuilding, the military, farms and technology. It trades with many countries.', es: 'Virginia tiene el puerto, barcos y astilleros, las fuerzas armadas, granjas y tecnología. Comercia con muchos países.', fa: 'ویرجینیا بندر، کشتی و کشتی‌سازی، نیروهای نظامی، کشتزار و تکنالوژی دارد. با کشورهای زیاد تجارت می‌کند.' } }
    ]
  },

  learned: [
    { en: 'The US has a [[mixed economy|mixed economy]]: a mostly free market, with some government rules. The government builds [[public good|public goods]] and protects contracts.', es: 'EE. UU. tiene una [[mixed economy|economía mixta]]: un mercado casi todo libre, con algunas reglas del gobierno. El gobierno da [[public good|bienes públicos]] y protege los contratos.', fa: 'امریکا [[mixed economy|اقتصاد مختلط]] دارد: بازار بیشتر آزاد، با بعضی قانون‌های حکومت. حکومت [[public good|خدمات عامه]] می‌دهد و از قراردادها محافظت می‌کند.' },
    { en: 'A [[tariff|tariff]] is a tax on [[import|imports]] that raises their price. Congress and the President set [[fiscal policy|fiscal policy]]; the Fed sets [[monetary policy|monetary policy]].', es: 'Un [[tariff|arancel]] es un impuesto a las [[import|importaciones]] que sube su precio. El Congreso y el presidente hacen la [[fiscal policy|política fiscal]]; la Fed hace la [[monetary policy|política monetaria]].', fa: '[[tariff|تعرفه]] مالیه بر [[import|واردات]] است که قیمت را بالا می‌برد. کانگرس و رئیس جمهور [[fiscal policy|سیاست مالی]] را تعیین می‌کنند؛ فِد [[monetary policy|سیاست پولی]] را.' },
    { en: 'With this last page, the Great Charter is whole again! You learned how your government works.', es: '¡Con esta última página, la Gran Carta está completa otra vez! Aprendiste cómo funciona tu gobierno.', fa: 'با این صفحهٔ آخر، منشور بزرگ دوباره کامل است! تو یاد گرفتی حکومتت چطور کار می‌کند.' }
  ],
  reflect: {
    q: { en: 'Of all the ideas on your trip, which one matters most in your life? Why?', es: 'De todas las ideas de tu viaje, ¿cuál importa más en tu vida? ¿Por qué?', fa: 'از همهٔ اندیشه‌های سفرت، کدام یکی در زندگی تو مهم‌تر است؟ چرا؟' },
    starter: { en: 'The idea that matters most in my life is', es: 'La idea que más importa en mi vida es', fa: 'اندیشه‌ای که در زندگی من مهم‌تر است' }
  }
};
