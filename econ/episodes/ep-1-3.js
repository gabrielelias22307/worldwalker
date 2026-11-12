/* COINWALKER · Episode 1.3 · The Market System: Supply and Demand
   Richmond, Virginia, today: a busy summer farmers market and food truck lot by the James River.
   North half: three houses and the market hall (J) along the north side, the paved market (l) with farm stalls (m)
   and a fountain (O). Row 11 is the street, open from west to east.
   South half: the food truck lot (m) in the south-west, Ada's lemonade stand (m) in the south-east, flowers, the bike
   path (:) on row 16, the river walk (l) on row 18 and the James River (~) with its rocks (r) along the bottom.
   People show the law of demand, the law of supply, competition, shortage, surplus and the equilibrium price;
   the ledger stone asks the student to set three levers (the day, the price, the cups made) so the market clears. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'EPF',
  title: { en: 'Supply and Demand', es: 'Oferta y demanda', fa: 'عرضه و تقاضا' },
  weather: { sky: 'heat', time: 'day' },
  place: { en: 'Richmond, summer market', es: 'Richmond, mercado de verano', fa: 'ریچموند، بازار تابستان' },
  intro: [
    { en: 'The Grump tore the page about prices. Now sellers guess, and lines get long.',
      es: 'El Gruñón rompió la página sobre los precios. Ahora los vendedores adivinan y las filas crecen.',
      fa: 'غرغرو صفحهٔ قیمت‌ها را پاره کرد. حالا فروشنده‌ها حدس می‌زنند و صف‌ها دراز می‌شوند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Richmond on the world map (no timeline in this game) */
  scenes: {
    at: [-77.43, 37.53],
    start: [
      { en: 'Richmond is the capital of Virginia. It sits on the James River.',
        es: 'Richmond es la capital de Virginia. Está junto al río James.',
        fa: 'ریچموند پایتخت ویرجینیا است. این شهر کنار دریای جیمز است.' },
      { en: 'On summer days, farmers and food trucks sell to big crowds here.',
        es: 'En los días de verano, agricultores y camiones de comida venden a mucha gente aquí.',
        fa: 'در روزهای تابستان، دهقانان و موترهای غذا اینجا به جمعیت زیاد می‌فروشند.' },
      { en: 'Buyers and sellers meet here. Together, they make a market.',
        es: 'Aquí se encuentran compradores y vendedores. Juntos forman un mercado.',
        fa: 'خریداران و فروشندگان اینجا با هم روبرو می‌شوند. با هم یک بازار می‌سازند.' }
    ],
    page: { en: 'The James River flows east across Virginia to the Chesapeake Bay.',
      es: 'El río James corre hacia el este por Virginia hasta la bahía de Chesapeake.',
      fa: 'دریای جیمز به طرف شرق از ویرجینیا می‌گذرد و به خلیج چیساپیک می‌رسد.' },
    guess: {
      q: { en: 'If lemonade gets cheaper, will people buy more or less?', es: 'Si la limonada se pone más barata, ¿la gente compra más o menos?', fa: 'اگر شربت لیمو ارزان‌تر شود، مردم بیشتر می‌خرند یا کمتر؟' },
      choices: [
        { t: { en: '📈 More cups', es: '📈 Más vasos', fa: '📈 گیلاس‌های بیشتر' }, ok: true },
        { t: { en: '📉 Fewer cups', es: '📉 Menos vasos', fa: '📉 گیلاس‌های کمتر' } }
      ],
      why: { en: 'When a price falls, people buy more. That is the law of demand.', es: 'Cuando un precio baja, la gente compra más. Esa es la ley de la demanda.', fa: 'وقتی قیمت پایین بیاید، مردم بیشتر می‌خرند. این قانون تقاضا است.' }
    },
    next: {
      q: { en: 'Next: what makes money money? Why not just trade apples for shoes?', es: 'Ahora: ¿qué hace que el dinero sea dinero? ¿Por qué no cambiar manzanas por zapatos?', fa: 'بعدی: چه چیز پول را پول می‌سازد؟ چرا سیب را با بوت عوض نکنیم؟' },
      choices: [
        { t: { en: '🤝 Both must want it', es: '🤝 Los dos deben quererlo', fa: '🤝 هر دو باید آن را بخواهند' }, ok: true },
        { t: { en: '🍎 Apples never go bad', es: '🍎 Las manzanas no se dañan', fa: '🍎 سیب هیچ وقت خراب نمی‌شود' } }
      ],
      why: { en: 'To trade, each person must want what the other has. Money makes buying easy.', es: 'Para cambiar, cada uno debe querer lo que tiene el otro. El dinero facilita comprar.', fa: 'برای عوض کردن، هر کس باید چیز دیگری را بخواهد. پول خرید را آسان می‌کند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Grandpa Walter', es: 'Abuelo Walter', fa: 'پدرکلان والتر' },
      look: { skin: 0, hair: '#d8d8d8', shirt: '#4a6a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Years ago, few people here ate avocados. Now lots of people want them.', es: 'Hace años, poca gente de aquí comía aguacate. Ahora mucha gente lo quiere.', fa: 'سال‌ها پیش، کم کسی اینجا آواکادو می‌خورد. حالا مردم زیاد آن را می‌خواهند.' },
        { en: 'Tastes changed. So the [[demand|demand]] for avocados grew.', es: 'Los gustos cambiaron. Por eso creció la [[demand|demanda]] de aguacate.', fa: 'سلیقه‌ها تغییر کرد. پس [[demand|تقاضا]] برای آواکادو زیاد شد.' },
        { en: 'Stores saw that, so they ordered more avocados.', es: 'Las tiendas lo vieron y pidieron más aguacates.', fa: 'دکان‌ها این را دیدند، پس آواکادوی بیشتر فرمایش دادند.' }
      ] },
    { at: [7, 2], name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      look: { skin: 3, hair: '#1a1008', shirt: '#2f7a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I drive a city bus. This year I got a raise.', es: 'Manejo un autobús de la ciudad. Este año me subieron el sueldo.', fa: 'من بس شهری می‌رانم. امسال معاشم زیاد شد.' },
        { en: 'With more income, I buy more fresh fruit at the market.', es: 'Con más ingresos, compro más fruta fresca en el mercado.', fa: 'با عاید بیشتر، از بازار میوهٔ تازهٔ بیشتر می‌خرم.' },
        { en: 'When people earn more, the [[demand|demand]] for many things goes up.', es: 'Cuando la gente gana más, sube la [[demand|demanda]] de muchas cosas.', fa: 'وقتی مردم بیشتر کمایی کنند، [[demand|تقاضا]] برای چیزهای زیاد بالا می‌رود.' }
      ] },
    { at: [25, 2], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#b8b8b8', shirt: '#8a6a3a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'I fixed machines at a bread bakery for 30 years.', es: 'Arreglé máquinas en una panadería durante 30 años.', fa: 'من ۳۰ سال در یک نانوایی ماشین‌ها را جور می‌کردم.' },
        { en: 'One new oven baked twice the bread in the same time.', es: 'Un horno nuevo hacía el doble de pan en el mismo tiempo.', fa: 'یک تنور نو در همان وقت دو برابر نان می‌پخت.' },
        { en: 'New machines make [[supply|supply]] go up. Sellers can make more.', es: 'Las máquinas nuevas hacen subir la [[supply|oferta]]. Los vendedores pueden hacer más.', fa: 'ماشین‌های نو [[supply|عرضه]] را بالا می‌برند. فروشنده‌ها می‌توانند بیشتر بسازند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): Grandpa Walter's and Nadia's houses (R/Q over h) in the north-west, the market hall (J), Mr. Osei's
     house in the north-east. Below: the paved market (l) with two rows of stalls (m) and the fountain (O).
     Row 11: the street (l), open from west to east.
     South: food trucks (m) in the south-west lot, Ada's lemonade stand (m) in the south-east, the bike path (:),
     the river walk (l) and the James River (~) with rocks (r). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR.QQQ..JJJJJJJJJJ...RRR....T',
    'T.hdh.hdh..JJJJJJJJJJ...hdh..T.T',
    'T..............................T',
    'T.x.llllllllllllllllllllllllll.T',
    'T...llmmlllmmlllmmlllmmlllmmll.T',
    'T...llllllllllllllllllllllllll.T',
    'T.T.llllllllllllOlllllllllllll.T',
    'T...llmmlllmmlllmmlllmmlllmmll.T',
    'T...llllllllllllllllllllllllllxT',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T..............................T',
    'T.mm..mm..mm...........mm.....xT',
    'T.llllllllll...................T',
    'T.x..T......,,,.....T.....T....T',
    'T::::::::::::::::::::::::::::::T',
    'T..,,...........,,......T......T',
    'TllllllllllllllllllllllllllllllT',
    '~~~~~r~~~~~~~~~~~~~~r~~~~~~~r~~~',
    '~~r~~~~~~~~~r~~~~~~~~~~~~~r~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ],
  start: [16, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 3], at: [13, 6], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps south, into the market.', es: 'Desde esta nota, camina 3 pasos al sur, hacia el mercado.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، داخل بازار.' },
      text: { en: 'A shiny coin! A price is a signal. It tells buyers and sellers what to do.', es: '¡Una moneda brillante! Un precio es una señal. Les dice a compradores y vendedores qué hacer.', fa: 'یک سکهٔ براق! قیمت یک نشانه است. به خریداران و فروشندگان می‌گوید چه کنند.' } },
    { clueAt: [27, 17], at: [30, 17], decor: 'shell',
      clue: { en: 'From this note, walk 3 steps east, to the end of the path.', es: 'Desde esta nota, camina 3 pasos al este, hasta el final del camino.', fa: 'از این یادداشت، ۳ قدم به شرق برو، تا آخر راه.' },
      text: { en: 'A river shell! The James River flows east, all the way to the Chesapeake Bay.', es: '¡Una concha del río! El río James corre al este, hasta la bahía de Chesapeake.', fa: 'یک صدف دریا! دریای جیمز به طرف شرق تا خلیج چیساپیک می‌رود.' } }
  ],

  words: {
    market: { en: 'any place where buyers and sellers meet to trade', es: 'cualquier lugar donde compradores y vendedores se encuentran para comerciar', fa: 'هر جایی که خریداران و فروشندگان برای خرید و فروش با هم روبرو می‌شوند' },
    demand: { en: 'how much of something buyers want and can pay for', es: 'cuánto de algo quieren y pueden pagar los compradores', fa: 'این که خریداران چقدر از یک چیز را می‌خواهند و پولش را دارند' },
    supply: { en: 'how much of something sellers make and offer to sell', es: 'cuánto de algo hacen y ofrecen vender los vendedores', fa: 'این که فروشندگان چقدر از یک چیز را می‌سازند و برای فروش می‌گذارند' },
    'law of demand': { en: 'when the price goes up, people buy less; when it falls, they buy more', es: 'cuando el precio sube, la gente compra menos; cuando baja, compra más', fa: 'وقتی قیمت بالا برود، مردم کمتر می‌خرند؛ وقتی پایین بیاید، بیشتر می‌خرند' },
    'law of supply': { en: 'when the price goes up, sellers make and sell more', es: 'cuando el precio sube, los vendedores hacen y venden más', fa: 'وقتی قیمت بالا برود، فروشندگان بیشتر می‌سازند و می‌فروشند' },
    'equilibrium price': { en: 'the price where the amount buyers want equals the amount sellers offer', es: 'el precio donde lo que quieren los compradores es igual a lo que ofrecen los vendedores', fa: 'قیمتی که در آن مقدار خواستهٔ خریداران با مقدار عرضهٔ فروشندگان برابر است' },
    shortage: { en: 'more is wanted than is for sale, often because the price is too low', es: 'se quiere más de lo que hay a la venta, a menudo porque el precio es muy bajo', fa: 'بیشتر از آنچه برای فروش است خواسته می‌شود، اکثراً چون قیمت خیلی پایین است' },
    surplus: { en: 'more is for sale than is wanted, often because the price is too high', es: 'hay más a la venta de lo que se quiere, a menudo porque el precio es muy alto', fa: 'بیشتر از آنچه خواسته می‌شود برای فروش است، اکثراً چون قیمت خیلی بلند است' },
    competition: { en: 'many sellers trying to win the same buyers', es: 'muchos vendedores que tratan de ganar a los mismos compradores', fa: 'کوشش فروشندگان زیاد برای به دست آوردن همان خریداران' },
    profit: { en: 'the money left after a seller pays all the costs', es: 'el dinero que queda después de que un vendedor paga todos los costos', fa: 'پولی که بعد از پرداخت همهٔ مصارف برای فروشنده می‌ماند' }
  },

  npcs: [
    {
      x: 8, y: 6,
      name: { en: 'Mr. Bao', es: 'Sr. Bao', fa: 'آقای بائو' },
      role: { en: 'Tomato farmer', es: 'Agricultor de tomates', fa: 'دهقان بادنجان رومی' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#c0392b', pants: '#3a4a2a', hat: '#d8b060', style: 'short' },
      lines: [
        { en: 'Hello! I grow tomatoes on a farm east of Richmond.', es: '¡Hola! Cultivo tomates en una granja al este de Richmond.', fa: 'سلام! من در یک فارم در شرق ریچموند بادنجان رومی می‌کارم.' },
        { en: 'At $4 a box, only a few people buy.', es: 'A $4 la caja, solo unas pocas personas compran.', fa: 'به قیمت ۴ دالر یک قطی، فقط چند نفر می‌خرند.' },
        { en: 'At $2 a box, many more people buy. That is the [[law of demand|law of demand]].', es: 'A $2 la caja, compra mucha más gente. Esa es la [[law of demand|ley de la demanda]].', fa: 'به قیمت ۲ دالر، مردم خیلی بیشتر می‌خرند. این [[law of demand|قانون تقاضا]] است.' },
        { en: 'Price goes up, people buy less. Price goes down, people buy more.', es: 'Si el precio sube, la gente compra menos. Si baja, compra más.', fa: 'قیمت بالا برود، مردم کمتر می‌خرند. پایین بیاید، بیشتر می‌خرند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Mr. Bao raises his tomato price. What will most buyers do?', es: 'El Sr. Bao sube el precio de sus tomates. ¿Qué hará la mayoría de los compradores?', fa: 'آقای بائو قیمت بادنجان رومی را بالا می‌برد. بیشتر خریداران چه می‌کنند؟' },
        choices: [
          { ok: true, t: { en: 'Buy fewer tomatoes', es: 'Comprar menos tomates', fa: 'بادنجان رومی کمتر بخرند' },
            why: { en: 'Yes! When the price goes up, people buy less. That is the law of demand.', es: '¡Sí! Cuando el precio sube, la gente compra menos. Esa es la ley de la demanda.', fa: 'بله! وقتی قیمت بالا برود، مردم کمتر می‌خرند. این قانون تقاضا است.' } },
          { t: { en: 'Buy more tomatoes', es: 'Comprar más tomates', fa: 'بادنجان رومی بیشتر بخرند' },
            why: { en: 'No. A higher price makes people buy less, not more.', es: 'No. Un precio más alto hace que la gente compre menos, no más.', fa: 'نه. قیمت بلندتر مردم را وادار می‌کند کمتر بخرند، نه بیشتر.' } },
          { t: { en: 'Buy the same amount', es: 'Comprar lo mismo', fa: 'همان اندازه بخرند' },
            why: { en: 'No. The price changes how much people buy. Higher price, fewer tomatoes sold.', es: 'No. El precio cambia cuánto compra la gente. Precio más alto, menos tomates vendidos.', fa: 'نه. قیمت اندازهٔ خرید مردم را تغییر می‌دهد. قیمت بلندتر، فروش کمتر.' } }
        ]
      }
    },
    {
      x: 5, y: 12,
      name: { en: 'Imani', es: 'Imani', fa: 'ایمانی' },
      role: { en: 'Food truck owner', es: 'Dueña de un camión de comida', fa: 'صاحب موتر غذا' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a02a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I sell tacos from my food truck. I am a seller.', es: 'Vendo tacos en mi camión de comida. Soy vendedora.', fa: 'من از موتر غذایم تاکو می‌فروشم. من فروشنده هستم.' },
        { en: 'When taco prices go up, I make more tacos to sell.', es: 'Cuando sube el precio de los tacos, hago más tacos para vender.', fa: 'وقتی قیمت تاکو بالا برود، تاکوی بیشتر برای فروش می‌سازم.' },
        { en: 'That is the [[law of supply|law of supply]]. A higher price means more [[profit|profit]].', es: 'Esa es la [[law of supply|ley de la oferta]]. Un precio más alto da más [[profit|ganancia]].', fa: 'این [[law of supply|قانون عرضه]] است. قیمت بلندتر یعنی [[profit|مفاد]] بیشتر.' },
        { en: 'Three trucks sell tacos here. That [[competition|competition]] keeps my price fair.', es: 'Aquí venden tacos tres camiones. Esa [[competition|competencia]] mantiene justo mi precio.', fa: 'سه موتر اینجا تاکو می‌فروشند. این [[competition|رقابت]] قیمت مرا منصفانه نگه می‌دارد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Two new taco trucks come to the lot. What will most likely happen?', es: 'Llegan dos camiones de tacos nuevos al lote. ¿Qué es lo más probable?', fa: 'دو موتر تاکوی نو به این جا می‌آیند. به احتمال زیاد چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'Taco prices go down a bit', es: 'Los tacos bajan un poco', fa: 'قیمت تاکو کمی پایین می‌آید' },
            why: { en: 'Yes! More sellers means more supply and more competition. So prices go down.', es: '¡Sí! Más vendedores dan más oferta y más competencia. Por eso bajan los precios.', fa: 'بله! فروشنده‌های بیشتر یعنی عرضه و رقابت بیشتر. پس قیمت‌ها پایین می‌آیند.' } },
          { t: { en: 'Taco prices go way up', es: 'Los tacos suben mucho', fa: 'قیمت تاکو خیلی بالا می‌رود' },
            why: { en: 'No. More sellers compete for the same buyers, so prices usually go down.', es: 'No. Más vendedores compiten por los mismos compradores, así que los precios suelen bajar.', fa: 'نه. فروشنده‌های بیشتر برای همان خریداران رقابت می‌کنند، پس قیمت‌ها اکثراً پایین می‌آیند.' } },
          { t: { en: 'Nobody buys tacos anymore', es: 'Nadie compra más tacos', fa: 'دیگر هیچ کس تاکو نمی‌خرد' },
            why: { en: 'No. Buyers still want tacos. Now they have more trucks to pick from.', es: 'No. La gente todavía quiere tacos. Ahora tiene más camiones para elegir.', fa: 'نه. خریداران هنوز تاکو می‌خواهند. حالا موترهای بیشتری برای انتخاب دارند.' } }
        ]
      }
    },
    {
      x: 22, y: 9,
      name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      role: { en: 'Student with a summer job', es: 'Estudiante con trabajo de verano', fa: 'شاگرد با کار تابستانی' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#c04a6a', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I sell strawberries here on weekends. It is my summer job.', es: 'Vendo fresas aquí los fines de semana. Es mi trabajo de verano.', fa: 'من آخر هفته‌ها اینجا توت زمینی می‌فروشم. این کار تابستانی من است.' },
        { en: 'At $6 a basket, few people bought. I had a [[surplus|surplus]] left over.', es: 'A $6 la canasta, compró poca gente. Me sobró un [[surplus|excedente]].', fa: 'به قیمت ۶ دالر یک سبد، کم کسی خرید. [[surplus|مازاد]] برایم ماند.' },
        { en: 'At $2, the line was long and I ran out. A [[shortage|shortage]]!', es: 'A $2, la fila era larga y se me acabaron. ¡Una [[shortage|escasez]]!', fa: 'به ۲ دالر، صف دراز بود و توت‌هایم تمام شد. یک [[shortage|کمبود]]!' },
        { en: 'At $4, I sold every basket. That is the [[equilibrium price|equilibrium price]].', es: 'A $4, vendí todas las canastas. Ese es el [[equilibrium price|precio de equilibrio]].', fa: 'به ۴ دالر، همهٔ سبدها را فروختم. این [[equilibrium price|قیمت تعادل]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Sam has a long line, but no berries left. What is this?', es: 'Sam tiene una fila larga, pero ya no le quedan fresas. ¿Qué es esto?', fa: 'سم صف دراز دارد، اما هیچ توت برایش نمانده. این چیست؟' },
        choices: [
          { ok: true, t: { en: 'A shortage', es: 'Una escasez', fa: 'کمبود' },
            why: { en: 'Yes! More people want berries than Sam has. The price is too low.', es: '¡Sí! Más gente quiere fresas de las que tiene Sam. El precio es muy bajo.', fa: 'بله! مردم بیشتر از آنچه سم دارد توت می‌خواهند. قیمت خیلی پایین است.' } },
          { t: { en: 'A surplus', es: 'Un excedente', fa: 'مازاد' },
            why: { en: 'No. A surplus means berries are left over. Sam has none left.', es: 'No. Un excedente es cuando sobran fresas. A Sam no le queda ninguna.', fa: 'نه. مازاد یعنی توت اضافه بماند. برای سم هیچ نمانده.' } },
          { t: { en: 'An equilibrium', es: 'Un equilibrio', fa: 'تعادل' },
            why: { en: 'No. At the equilibrium price, every basket sells and no one waits.', es: 'No. Al precio de equilibrio, se vende cada canasta y nadie espera.', fa: 'نه. در قیمت تعادل، همهٔ سبدها فروخته می‌شوند و کسی منتظر نمی‌ماند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 4, text: { en: 'SUMMER MARKET · RICHMOND, VIRGINIA · Farmers sell here and buyers shop. That makes a [[market|market]].', es: 'MERCADO DE VERANO · RICHMOND, VIRGINIA · Aquí venden los agricultores y compra la gente. Eso es un [[market|mercado]].', fa: 'بازار تابستان · ریچموند، ویرجینیا · دهقانان اینجا می‌فروشند و مردم خرید می‌کنند. این یک [[market|بازار]] است.' } },
    { x: 30, y: 9, text: { en: 'JAMES RIVER · Walk south, past the food trucks and the bike path, to the river walk.', es: 'RÍO JAMES · Camina al sur, pasando los camiones de comida y el camino de bicicletas, hasta el paseo del río.', fa: 'دریای جیمز · به جنوب برو، از کنار موترهای غذا و راه بایسکل، تا راه کنار دریا.' } },
    { x: 30, y: 13, text: { en: 'LEMONADE STAND · A price is a signal. It tells buyers to buy and sellers to make.', es: 'PUESTO DE LIMONADA · Un precio es una señal. Les dice a los compradores que compren y a los vendedores que hagan.', fa: 'غرفهٔ شربت لیمو · قیمت یک نشانه است. به خریداران می‌گوید بخرند و به فروشندگان می‌گوید بسازند.' } },
    { x: 2, y: 15, text: { en: 'BIKE PATH · This path runs along the James River. Watch out for bikes!', es: 'CAMINO DE BICICLETAS · Este camino va junto al río James. ¡Cuidado con las bicicletas!', fa: 'راه بایسکل · این راه کنار دریای جیمز می‌رود. متوجه بایسکل‌ها باش!' } }
  ],

  /* the quest: Ada at the lemonade stand (gold !, south-east) -> Mr. Kim the market manager by the market hall (north-east)
     -> the Grump's Gust tore Ada's price chart into 3 pieces, each blown to a place where supply or demand changed:
     the farm stall (bad harvest: less supply), the food truck lot (more sellers: more supply), the river walk
     (hot weather: more buyers, more demand) -> catch the last piece -> back to Ada. */
  quest: {
    stat: 'pla',
    title: { en: 'The Runaway Price Chart', es: 'La tabla de precios que voló', fa: 'جدول قیمتی که پرید' },
    giver: {
      x: 24, y: 12,
      name: { en: 'Ada', es: 'Ada', fa: 'آدا' },
      role: { en: 'Lemonade stand owner', es: 'Dueña del puesto de limonada', fa: 'صاحب غرفهٔ شربت لیمو' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#f0c020', pants: '#2a4a6a', hat: '#ffffff', style: 'long' },
      lines: [
        { en: 'Oh no! A gust of wind blew my price chart away!', es: '¡Ay, no! ¡Una ráfaga de viento se llevó mi tabla de precios!', fa: 'وای! یک تندباد جدول قیمت مرا با خود برد!' },
        { en: 'It shows how many cups people want at each price. I need it!', es: 'Muestra cuántos vasos quiere la gente a cada precio. ¡La necesito!', fa: 'نشان می‌دهد مردم به هر قیمت چند گیلاس می‌خواهند. به آن ضرورت دارم!' },
        { en: 'Mr. Kim runs the market. He saw where it blew. Ask him!', es: 'El Sr. Kim dirige el mercado. Vio a dónde voló. ¡Pregúntale!', fa: 'آقای کیم بازار را اداره می‌کند. دید که کجا پرید. از او بپرس!' }
      ],
      wait: { en: 'Mr. Kim is by the market hall, north of the street.', es: 'El Sr. Kim está junto al edificio del mercado, al norte de la calle.', fa: 'آقای کیم کنار تعمیر بازار است، شمالِ سرک.' },
      thanks: { en: 'My chart! Now I can find the price where every cup sells.', es: '¡Mi tabla! Ahora puedo encontrar el precio donde se vende cada vaso.', fa: 'جدولم! حالا می‌توانم قیمتی را پیدا کنم که همهٔ گیلاس‌ها فروخته شوند.' }
    },
    contact: {
      x: 22, y: 3,
      name: { en: 'Mr. Kim', es: 'Sr. Kim', fa: 'آقای کیم' },
      role: { en: 'Market manager', es: 'Encargado del mercado', fa: 'مدیر بازار' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#3a6a9a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I saw it! The wind tore the chart into three pieces.', es: '¡Lo vi! El viento rompió la tabla en tres pedazos.', fa: 'دیدم! باد جدول را سه تکه کرد.' },
        { en: 'Each piece blew to a place where supply or demand changed today.', es: 'Cada pedazo voló a un lugar donde hoy cambió la oferta o la demanda.', fa: 'هر تکه به جایی پرید که امروز عرضه یا تقاضا تغییر کرد.' },
        { en: 'Follow each clue. Hurry, the wind may blow the last piece away!', es: 'Sigue cada pista. ¡Rápido, el viento puede llevarse el último pedazo!', fa: 'دنبال هر سرنخ برو. عجله کن، شاید باد آخرین تکه را ببرد!' }
      ]
    },
    action: {
      type: 'chase',
      at: [29, 14],
      hops: [[14, 17], [27, 15]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'تندباد غرغرو' },
      taunt: { en: 'Whoosh! The Grump sent me. No chart, no fair prices!', es: '¡Fuuu! Me mandó el Gruñón. ¡Sin tabla, no hay precios justos!', fa: 'ووش! غرغرو مرا فرستاد. جدول نباشد، قیمت منصفانه هم نیست!' },
      clues: [
        { t: { en: 'A storm hurt the tomato crop, so fewer were picked. Piece 1 is at the farm stall, north-west.', es: 'Una tormenta dañó la cosecha de tomates y se recogieron menos. El pedazo 1 está en el puesto de la granja, al noroeste.', fa: 'توفان به حاصل بادنجان رومی زیان زد، پس کمتر چیده شد. تکهٔ ۱ نزد غرفهٔ فارم، در شمال غرب است.' },
          zones: [{ x: 5, y: 4, w: 4, h: 1 }],
          noBy: [{ x: 25, y: 4, w: 4, h: 1, t: { en: 'This stall sells soap. Storms do not hurt soap. Find the farm stall in the north-west.', es: 'Este puesto vende jabón. Las tormentas no dañan el jabón. Busca el puesto de la granja, al noroeste.', fa: 'این غرفه صابون می‌فروشد. توفان به صابون زیان نمی‌زند. غرفهٔ فارم را در شمال غرب پیدا کن.' } }],
          found: { en: 'Piece 1! A bad harvest means less [[supply|supply]]. Tomato prices go up.', es: '¡El pedazo 1! Una mala cosecha da menos [[supply|oferta]]. Los tomates suben de precio.', fa: 'تکهٔ ۱! حاصل بد یعنی [[supply|عرضهٔ]] کمتر. قیمت بادنجان رومی بالا می‌رود.' } },
        { t: { en: 'Three new taco trucks came today. More sellers! Piece 2 is in the food truck lot, south-west.', es: 'Hoy llegaron tres camiones de tacos nuevos. ¡Más vendedores! El pedazo 2 está en el lote de camiones, al suroeste.', fa: 'امروز سه موتر تاکوی نو آمد. فروشنده‌های بیشتر! تکهٔ ۲ در جای موترهای غذا، در جنوب غرب است.' },
          zones: [{ x: 2, y: 14, w: 10, h: 1 }],
          noBy: [{ x: 14, y: 12, w: 5, h: 1, t: { en: 'This is open grass. No trucks park here. The food truck lot is to the west.', es: 'Esto es pasto abierto. Aquí no se estacionan camiones. El lote de camiones está al oeste.', fa: 'اینجا سبزهٔ باز است. موترها اینجا ایستاد نمی‌کنند. جای موترهای غذا طرف غرب است.' } }],
          found: { en: 'Piece 2! More sellers means more [[supply|supply]]. Taco prices go down a bit.', es: '¡El pedazo 2! Más vendedores dan más [[supply|oferta]]. Los tacos bajan un poco.', fa: 'تکهٔ ۲! فروشنده‌های بیشتر یعنی [[supply|عرضهٔ]] بیشتر. قیمت تاکو کمی پایین می‌آید.' } },
        { t: { en: 'Hot weather brings crowds to the water. More buyers! Piece 3 is on the river walk.', es: 'El calor trae mucha gente al agua. ¡Más compradores! El pedazo 3 está en el paseo del río.', fa: 'هوای گرم جمعیت را کنار آب می‌آورد. خریداران بیشتر! تکهٔ ۳ در راه کنار دریا است.' },
          zones: [{ x: 1, y: 18, w: 30, h: 1 }],
          noBy: [{ x: 12, y: 15, w: 3, h: 1, t: { en: 'These are flowers by the bike path. Keep going south, to the walk by the river.', es: 'Estas son flores junto al camino de bicicletas. Sigue al sur, hasta el paseo del río.', fa: 'اینها گل‌های کنار راه بایسکل هستند. به جنوب ادامه بده، تا راه کنار دریا.' } }],
          found: { en: 'Piece 3! More buyers means more [[demand|demand]]. Cold drinks sell fast.', es: '¡El pedazo 3! Más compradores dan más [[demand|demanda]]. Las bebidas frías se venden rápido.', fa: 'تکهٔ ۳! خریداران بیشتر یعنی [[demand|تقاضای]] بیشتر. نوشابهٔ سرد زود فروخته می‌شود.' } }
      ],
      win: { en: 'You caught the last piece! The gust dies down. The chart is whole again.', es: '¡Atrapaste el último pedazo! La ráfaga se calma. La tabla está completa otra vez.', fa: 'آخرین تکه را گرفتی! تندباد آرام شد. جدول دوباره کامل است.' },
      item: { icon: '📈', name: { en: 'Ada\'s price chart', es: 'La tabla de precios de Ada', fa: 'جدول قیمت آدا' } }
    }
  },

  scraps: [[30, 1], [1, 9], [1, 17]],
  smudges: [[19, 6], [19, 13]],

  challenge: {
    at: [28, 12],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // three levers around Ada's lemonade stand: the day, the price, the cups made
    spots: [[21, 12], [22, 15], [26, 14]],
    stat: 'pla',
    title: { en: 'Sell every cup', es: 'Vende todos los vasos', fa: 'همهٔ گیلاس‌ها را بفروش' },
    intro: { en: 'Help Ada plan her lemonade stand. Set the day, the price and the cups made. Then test them at the stone. Sell every cup, with no one left in line!',
      es: 'Ayuda a Ada a planear su puesto de limonada. Elige el día, el precio y los vasos que hace. Luego pruébalos en la piedra. ¡Vende cada vaso, sin nadie en la fila!',
      fa: 'به آدا در برنامهٔ غرفهٔ شربت لیمو کمک کن. روز، قیمت و تعداد گیلاس‌ها را تنظیم کن. بعد نزد سنگ امتحان کن. همهٔ گیلاس‌ها را بفروش، و کسی در صف نماند!' },
    switches: [
      { name: { en: 'Day to sell', es: 'Día de venta', fa: 'روز فروش' }, icon: '🌤️', start: 1,
        states: [{ en: 'Hot Saturday (heat wave)', es: 'Sábado caluroso (ola de calor)', fa: 'شنبهٔ گرم (موج گرما)' }, { en: 'Rainy Sunday', es: 'Domingo lluvioso', fa: 'یکشنبهٔ بارانی' }] },
      { name: { en: 'Price', es: 'Precio', fa: 'قیمت' }, icon: '💲', start: 0,
        states: [{ en: '$1 a cup', es: '$1 el vaso', fa: '۱ دالر یک گیلاس' }, { en: '$2 a cup', es: '$2 el vaso', fa: '۲ دالر یک گیلاس' }, { en: '$3 a cup', es: '$3 el vaso', fa: '۳ دالر یک گیلاس' }] },
      { name: { en: 'Cups made', es: 'Vasos hechos', fa: 'گیلاس‌های ساخته شده' }, icon: '🍋', start: 0,
        states: [{ en: '20 cups', es: '20 vasos', fa: '۲۰ گیلاس' }, { en: '40 cups', es: '40 vasos', fa: '۴۰ گیلاس' }, { en: '60 cups', es: '60 vasos', fa: '۶۰ گیلاس' }] }
    ],
    // how many cups buyers want: hot day $1 80, $2 40, $3 10 · rainy day $1 30, $2 10, $3 0. Only hot, $2, 40 cups clears.
    results: {
      '0,0,0': { ok: false,
        t: { en: 'Shortage! 80 cups wanted, but only 20 made. The price is too low, so many people want a cup.', es: '¡Escasez! Quieren 80 vasos, pero solo hay 20. El precio es muy bajo, así que mucha gente quiere un vaso.', fa: 'کمبود! ۸۰ گیلاس خواسته شده، اما فقط ۲۰ ساخته شده. قیمت خیلی پایین است، پس مردم زیاد یک گیلاس می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '80 cups wanted', es: 'quieren 80 vasos', fa: '۸۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '⏳', ok: false, t: { en: '60 people left in line', es: '60 personas se quedan en la fila', fa: '۶۰ نفر در صف می‌مانند' } }] },
      '0,0,1': { ok: false,
        t: { en: 'Shortage! 80 cups wanted, but only 40 made. The price is too low, so many people want a cup.', es: '¡Escasez! Quieren 80 vasos, pero solo hay 40. El precio es muy bajo, así que mucha gente quiere un vaso.', fa: 'کمبود! ۸۰ گیلاس خواسته شده، اما فقط ۴۰ ساخته شده. قیمت خیلی پایین است، پس مردم زیاد یک گیلاس می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '80 cups wanted', es: 'quieren 80 vasos', fa: '۸۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '⏳', ok: false, t: { en: '40 people left in line', es: '40 personas se quedan en la fila', fa: '۴۰ نفر در صف می‌مانند' } }] },
      '0,0,2': { ok: false,
        t: { en: 'Shortage! 80 cups wanted, but only 60 made. The price is too low, so many people want a cup.', es: '¡Escasez! Quieren 80 vasos, pero solo hay 60. El precio es muy bajo, así que mucha gente quiere un vaso.', fa: 'کمبود! ۸۰ گیلاس خواسته شده، اما فقط ۶۰ ساخته شده. قیمت خیلی پایین است، پس مردم زیاد یک گیلاس می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '80 cups wanted', es: 'quieren 80 vasos', fa: '۸۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '⏳', ok: false, t: { en: '20 people left in line', es: '20 personas se quedan en la fila', fa: '۲۰ نفر در صف می‌مانند' } }] },
      '0,1,0': { ok: false,
        t: { en: 'Shortage! 40 cups wanted, but only 20 made. At this price, make more cups.', es: '¡Escasez! Quieren 40 vasos, pero solo hay 20. A este precio, haz más vasos.', fa: 'کمبود! ۴۰ گیلاس خواسته شده، اما فقط ۲۰ ساخته شده. به این قیمت، گیلاس‌های بیشتر بساز.' },
        show: [{ icon: '🙋', ok: false, t: { en: '40 cups wanted', es: 'quieren 40 vasos', fa: '۴۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '⏳', ok: false, t: { en: '20 people left in line', es: '20 personas se quedan en la fila', fa: '۲۰ نفر در صف می‌مانند' } }] },
      '0,1,1': { ok: true,
        t: { en: 'Hot day, $2 a cup, 40 cups made. 40 wanted, 40 sold. The market clears!', es: 'Día caluroso, $2 el vaso, 40 vasos hechos. Quieren 40 y se venden 40. ¡El mercado se equilibra!', fa: 'روز گرم، ۲ دالر یک گیلاس، ۴۰ گیلاس ساخته شد. ۴۰ خواسته شد و ۴۰ فروخته شد. بازار متعادل شد!' },
        show: [{ icon: '🙋', ok: true, t: { en: '40 cups wanted', es: 'quieren 40 vasos', fa: '۴۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: true, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '✅', ok: true, t: { en: 'every cup sold, no line', es: 'todo vendido, sin fila', fa: 'همه فروخته شد، صف نیست' } }] },
      '0,1,2': { ok: false,
        t: { en: 'Surplus! 60 cups made, but only 40 wanted. At this price, make fewer cups.', es: '¡Excedente! Hiciste 60 vasos, pero solo quieren 40. A este precio, haz menos vasos.', fa: 'مازاد! ۶۰ گیلاس ساخته شده، اما فقط ۴۰ خواسته شده. به این قیمت، گیلاس‌های کمتر بساز.' },
        show: [{ icon: '🙋', ok: false, t: { en: '40 cups wanted', es: 'quieren 40 vasos', fa: '۴۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '20 cups left over', es: 'sobran 20 vasos', fa: '۲۰ گیلاس اضافه می‌ماند' } }] },
      '0,2,0': { ok: false,
        t: { en: 'Surplus! 20 cups made, but only 10 wanted. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 20 vasos, pero solo quieren 10. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۲۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '10 cups left over', es: 'sobran 10 vasos', fa: '۱۰ گیلاس اضافه می‌ماند' } }] },
      '0,2,1': { ok: false,
        t: { en: 'Surplus! 40 cups made, but only 10 wanted. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 40 vasos, pero solo quieren 10. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۴۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '30 cups left over', es: 'sobran 30 vasos', fa: '۳۰ گیلاس اضافه می‌ماند' } }] },
      '0,2,2': { ok: false,
        t: { en: 'Surplus! 60 cups made, but only 10 wanted. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 60 vasos, pero solo quieren 10. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۶۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '50 cups left over', es: 'sobran 50 vasos', fa: '۵۰ گیلاس اضافه می‌ماند' } }] },
      '1,0,0': { ok: false,
        t: { en: 'Shortage! 30 cups wanted, but only 20 made. The price is too low, so many people want a cup.', es: '¡Escasez! Quieren 30 vasos, pero solo hay 20. El precio es muy bajo, así que mucha gente quiere un vaso.', fa: 'کمبود! ۳۰ گیلاس خواسته شده، اما فقط ۲۰ ساخته شده. قیمت خیلی پایین است، پس مردم زیاد یک گیلاس می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '30 cups wanted', es: 'quieren 30 vasos', fa: '۳۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '⏳', ok: false, t: { en: '10 people left in line', es: '10 personas se quedan en la fila', fa: '۱۰ نفر در صف می‌مانند' } }] },
      '1,0,1': { ok: false,
        t: { en: 'Surplus! 40 cups made, but only 30 wanted. On a rainy day, fewer people want cold lemonade.', es: '¡Excedente! Hiciste 40 vasos, pero solo quieren 30. En un día de lluvia, menos gente quiere limonada fría.', fa: 'مازاد! ۴۰ گیلاس ساخته شده، اما فقط ۳۰ خواسته شده. در روز بارانی، مردم کمتر شربت لیموی سرد می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '30 cups wanted', es: 'quieren 30 vasos', fa: '۳۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '10 cups left over', es: 'sobran 10 vasos', fa: '۱۰ گیلاس اضافه می‌ماند' } }] },
      '1,0,2': { ok: false,
        t: { en: 'Surplus! 60 cups made, but only 30 wanted. On a rainy day, fewer people want cold lemonade.', es: '¡Excedente! Hiciste 60 vasos, pero solo quieren 30. En un día de lluvia, menos gente quiere limonada fría.', fa: 'مازاد! ۶۰ گیلاس ساخته شده، اما فقط ۳۰ خواسته شده. در روز بارانی، مردم کمتر شربت لیموی سرد می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '30 cups wanted', es: 'quieren 30 vasos', fa: '۳۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '30 cups left over', es: 'sobran 30 vasos', fa: '۳۰ گیلاس اضافه می‌ماند' } }] },
      '1,1,0': { ok: false,
        t: { en: 'Surplus! 20 cups made, but only 10 wanted. On a rainy day, fewer people want cold lemonade.', es: '¡Excedente! Hiciste 20 vasos, pero solo quieren 10. En un día de lluvia, menos gente quiere limonada fría.', fa: 'مازاد! ۲۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. در روز بارانی، مردم کمتر شربت لیموی سرد می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '10 cups left over', es: 'sobran 10 vasos', fa: '۱۰ گیلاس اضافه می‌ماند' } }] },
      '1,1,1': { ok: false,
        t: { en: 'Surplus! 40 cups made, but only 10 wanted. On a rainy day, fewer people want cold lemonade.', es: '¡Excedente! Hiciste 40 vasos, pero solo quieren 10. En un día de lluvia, menos gente quiere limonada fría.', fa: 'مازاد! ۴۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. در روز بارانی، مردم کمتر شربت لیموی سرد می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '30 cups left over', es: 'sobran 30 vasos', fa: '۳۰ گیلاس اضافه می‌ماند' } }] },
      '1,1,2': { ok: false,
        t: { en: 'Surplus! 60 cups made, but only 10 wanted. On a rainy day, fewer people want cold lemonade.', es: '¡Excedente! Hiciste 60 vasos, pero solo quieren 10. En un día de lluvia, menos gente quiere limonada fría.', fa: 'مازاد! ۶۰ گیلاس ساخته شده، اما فقط ۱۰ خواسته شده. در روز بارانی، مردم کمتر شربت لیموی سرد می‌خواهند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '10 cups wanted', es: 'quieren 10 vasos', fa: '۱۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '50 cups left over', es: 'sobran 50 vasos', fa: '۵۰ گیلاس اضافه می‌ماند' } }] },
      '1,2,0': { ok: false,
        t: { en: 'Surplus! 20 cups made, but nobody buys. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 20 vasos, pero nadie compra. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۲۰ گیلاس ساخته شده، اما هیچ کس نمی‌خرد. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '0 cups wanted', es: 'quieren 0 vasos', fa: '۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '20 cups made', es: '20 vasos hechos', fa: '۲۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '20 cups left over', es: 'sobran 20 vasos', fa: '۲۰ گیلاس اضافه می‌ماند' } }] },
      '1,2,1': { ok: false,
        t: { en: 'Surplus! 40 cups made, but nobody buys. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 40 vasos, pero nadie compra. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۴۰ گیلاس ساخته شده، اما هیچ کس نمی‌خرد. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '0 cups wanted', es: 'quieren 0 vasos', fa: '۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '40 cups made', es: '40 vasos hechos', fa: '۴۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '40 cups left over', es: 'sobran 40 vasos', fa: '۴۰ گیلاس اضافه می‌ماند' } }] },
      '1,2,2': { ok: false,
        t: { en: 'Surplus! 60 cups made, but nobody buys. The price is too high, so few people buy.', es: '¡Excedente! Hiciste 60 vasos, pero nadie compra. El precio es muy alto, así que poca gente compra.', fa: 'مازاد! ۶۰ گیلاس ساخته شده، اما هیچ کس نمی‌خرد. قیمت خیلی بلند است، پس مردم کم می‌خرند.' },
        show: [{ icon: '🙋', ok: false, t: { en: '0 cups wanted', es: 'quieren 0 vasos', fa: '۰ گیلاس خواسته شده' } }, { icon: '🍋', ok: false, t: { en: '60 cups made', es: '60 vasos hechos', fa: '۶۰ گیلاس ساخته شده' } }, { icon: '🗑️', ok: false, t: { en: '60 cups left over', es: 'sobran 60 vasos', fa: '۶۰ گیلاس اضافه می‌ماند' } }] }
    },
    otherwise: { ok: false, t: { en: 'Not every cup sells, or a line is left. Try another setting.', es: 'No se venden todos los vasos, o queda gente en la fila. Prueba otra combinación.', fa: 'همهٔ گیلاس‌ها فروخته نمی‌شوند، یا صف می‌ماند. تنظیم دیگری را امتحان کن.' } },
    success: { en: 'Every cup sold, and no one waits! On a hot day at $2, 40 cups wanted and 40 made. That is the [[equilibrium price|equilibrium price]].',
      es: '¡Se vendió cada vaso y nadie espera! En un día caluroso a $2, quieren 40 vasos y hay 40. Ese es el [[equilibrium price|precio de equilibrio]].',
      fa: 'همهٔ گیلاس‌ها فروخته شد و کسی منتظر نیست! در روز گرم به ۲ دالر، ۴۰ گیلاس خواسته شد و ۴۰ ساخته شد. این [[equilibrium price|قیمت تعادل]] است.' }
  },

  boss: {
    at: [8, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Muddle Grump', es: 'El Gruñón Enredón', fa: 'غرغروی درهم' },
    appear: { en: 'The Muddle Grump is hiding in the fog by the river walk!', es: '¡El Gruñón Enredón se esconde en la niebla junto al paseo del río!', fa: 'غرغروی درهم در مه کنار راه دریا پنهان است!' },
    taunt: { en: 'Prices? Pick any number! Make a thousand cups! Who cares who buys?', es: '¿Precios? ¡Pon cualquier número! ¡Haz mil vasos! ¿A quién le importa quién compra?', fa: 'قیمت؟ هر عددی بگذار! هزار گیلاس بساز! کی پروا دارد کی می‌خرد؟' },
    win: { en: 'The fog lifts off the James River. Ledger page 1.3 floats down into your hands!', es: 'La niebla se va del río James. ¡La página 1.3 del libro cae en tus manos!', fa: 'مه از روی دریای جیمز کنار می‌رود. صفحهٔ ۱.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'The price of lemonade goes up. What do most buyers do?', es: 'Sube el precio de la limonada. ¿Qué hace la mayoría de los compradores?', fa: 'قیمت شربت لیمو بالا می‌رود. بیشتر خریداران چه می‌کنند؟' },
        choices: [
          { en: 'They buy less of it', es: 'Compran menos', fa: 'کمتر از آن می‌خرند' },
          { en: 'They buy more of it', es: 'Compran más', fa: 'بیشتر از آن می‌خرند' },
          { en: 'They buy the same amount', es: 'Compran lo mismo', fa: 'همان اندازه می‌خرند' },
          { en: 'They start selling it too', es: 'Empiezan a venderla también', fa: 'خودشان هم شروع به فروش می‌کنند' }],
        answer: 0,
        why: { en: 'That is the law of demand. When the price goes up, people buy less.', es: 'Esa es la ley de la demanda. Cuando el precio sube, la gente compra menos.', fa: 'این قانون تقاضا است. وقتی قیمت بالا برود، مردم کمتر می‌خرند.' } },
      { q: { en: 'The price of tacos goes up. What do most sellers do?', es: 'Sube el precio de los tacos. ¿Qué hace la mayoría de los vendedores?', fa: 'قیمت تاکو بالا می‌رود. بیشتر فروشندگان چه می‌کنند؟' },
        choices: [
          { en: 'Make and sell more tacos', es: 'Hacen y venden más tacos', fa: 'تاکوی بیشتر می‌سازند و می‌فروشند' },
          { en: 'Make and sell fewer tacos', es: 'Hacen y venden menos tacos', fa: 'تاکوی کمتر می‌سازند و می‌فروشند' },
          { en: 'Close their trucks for good', es: 'Cierran sus camiones para siempre', fa: 'موترهای خود را برای همیشه می‌بندند' },
          { en: 'Give all their tacos away', es: 'Regalan todos sus tacos', fa: 'همهٔ تاکوها را مفت می‌دهند' }],
        answer: 0,
        why: { en: 'That is the law of supply. A higher price means more profit, so sellers make more.', es: 'Esa es la ley de la oferta. Un precio más alto da más ganancia, así que hacen más.', fa: 'این قانون عرضه است. قیمت بلندتر یعنی مفاد بیشتر، پس فروشندگان بیشتر می‌سازند.' } },
      { q: { en: 'What is the equilibrium price?', es: '¿Qué es el precio de equilibrio?', fa: 'قیمت تعادل چیست؟' },
        choices: [
          { en: 'Where the amount wanted equals the amount made', es: 'Donde lo que se quiere es igual a lo que se hace', fa: 'جایی که مقدار خواسته با مقدار ساخته برابر است' },
          { en: 'The highest price any seller could ever ask', es: 'El precio más alto que un vendedor podría pedir', fa: 'بلندترین قیمتی که یک فروشنده می‌تواند بخواهد' },
          { en: 'The lowest price a buyer can find in town', es: 'El precio más bajo que un comprador encuentra', fa: 'پایین‌ترین قیمتی که خریدار در شهر پیدا می‌کند' },
          { en: 'A price that never changes from year to year', es: 'Un precio que nunca cambia de un año a otro', fa: 'قیمتی که از سالی به سال دیگر هیچ تغییر نمی‌کند' }],
        answer: 0,
        why: { en: 'At the equilibrium price, buyers want just what sellers offer. Every cup sells.', es: 'Al precio de equilibrio, los compradores quieren justo lo que ofrecen los vendedores.', fa: 'در قیمت تعادل، خریداران درست همان اندازه را می‌خواهند که فروشندگان عرضه می‌کنند.' } },
      { q: { en: 'The price is too low. More people want berries than there are. What is this?', es: 'El precio es muy bajo. Más gente quiere fresas de las que hay. ¿Qué es esto?', fa: 'قیمت خیلی پایین است. مردم بیشتر از آنچه هست توت می‌خواهند. این چیست؟' },
        choices: [
          { en: 'A shortage', es: 'Una escasez', fa: 'کمبود' },
          { en: 'A surplus', es: 'Un excedente', fa: 'مازاد' },
          { en: 'An equilibrium', es: 'Un equilibrio', fa: 'تعادل' },
          { en: 'A big profit', es: 'Una gran ganancia', fa: 'مفاد کلان' }],
        answer: 0,
        why: { en: 'A shortage means more is wanted than is for sale. A line is left waiting.', es: 'Una escasez es cuando se quiere más de lo que hay a la venta. Queda una fila.', fa: 'کمبود یعنی بیشتر از آنچه برای فروش است خواسته می‌شود. صف می‌ماند.' } },
      { q: { en: 'A seller still has 30 cups at closing time. The price was too high. What is this?', es: 'Al cerrar, a un vendedor le quedan 30 vasos. El precio era muy alto. ¿Qué es esto?', fa: 'در وقت بستن، ۳۰ گیلاس برای یک فروشنده مانده. قیمت خیلی بلند بود. این چیست؟' },
        choices: [
          { en: 'A surplus', es: 'Un excedente', fa: 'مازاد' },
          { en: 'A shortage', es: 'Una escasez', fa: 'کمبود' },
          { en: 'A long line', es: 'Una fila larga', fa: 'صف دراز' },
          { en: 'A fair trade', es: 'Un trato justo', fa: 'معاملهٔ منصفانه' }],
        answer: 0,
        why: { en: 'A surplus means more is for sale than people want. Lowering the price helps.', es: 'Un excedente es cuando hay más a la venta de lo que se quiere. Bajar el precio ayuda.', fa: 'مازاد یعنی بیشتر از خواست مردم برای فروش است. پایین آوردن قیمت کمک می‌کند.' } },
      { q: { en: 'A heat wave hits Richmond. What happens to the demand for cold lemonade?', es: 'Llega una ola de calor a Richmond. ¿Qué pasa con la demanda de limonada fría?', fa: 'موج گرما به ریچموند می‌رسد. تقاضا برای شربت لیموی سرد چه می‌شود؟' },
        choices: [
          { en: 'It goes up', es: 'Sube', fa: 'بالا می‌رود' },
          { en: 'It goes down', es: 'Baja', fa: 'پایین می‌آید' },
          { en: 'It stays the same', es: 'Se queda igual', fa: 'همان طور می‌ماند' },
          { en: 'It drops to zero', es: 'Cae a cero', fa: 'به صفر می‌رسد' }],
        answer: 0,
        why: { en: 'On hot days, more people want cold drinks. Weather can shift demand.', es: 'En días calurosos, más gente quiere bebidas frías. El clima puede cambiar la demanda.', fa: 'در روزهای گرم، مردم بیشتر نوشابهٔ سرد می‌خواهند. هوا می‌تواند تقاضا را تغییر دهد.' } },
      { q: { en: 'A storm ruins half the peach crop. What happens to the supply of peaches?', es: 'Una tormenta arruina la mitad de la cosecha de duraznos. ¿Qué pasa con la oferta?', fa: 'توفان نیم حاصل شفتالو را خراب می‌کند. عرضهٔ شفتالو چه می‌شود؟' },
        choices: [
          { en: 'It goes down', es: 'Baja', fa: 'پایین می‌آید' },
          { en: 'It goes up', es: 'Sube', fa: 'بالا می‌رود' },
          { en: 'It stays the same', es: 'Se queda igual', fa: 'همان طور می‌ماند' },
          { en: 'It doubles', es: 'Se duplica', fa: 'دو برابر می‌شود' }],
        answer: 0,
        why: { en: 'A bad harvest means fewer peaches to sell. Less supply often means higher prices.', es: 'Una mala cosecha da menos duraznos para vender. Menos oferta suele subir los precios.', fa: 'حاصل بد یعنی شفتالوی کمتر برای فروش. عرضهٔ کمتر اکثراً قیمت را بالا می‌برد.' } },
      { q: { en: 'Taco trucks earn a lot here. Why do new trucks come too?', es: 'Los camiones de tacos ganan mucho aquí. ¿Por qué llegan camiones nuevos?', fa: 'موترهای تاکو اینجا زیاد کمایی می‌کنند. چرا موترهای نو هم می‌آیند؟' },
        choices: [
          { en: 'To earn a profit too', es: 'Para ganar también', fa: 'تا آنها هم مفاد کنند' },
          { en: 'The law tells them to', es: 'La ley se lo ordena', fa: 'قانون به آنها امر می‌کند' },
          { en: 'To make tacos cost more', es: 'Para que los tacos cuesten más', fa: 'تا تاکو گران‌تر شود' },
          { en: 'To get free tacos', es: 'Para tener tacos gratis', fa: 'تا تاکوی مفت بگیرند' }],
        answer: 0,
        why: { en: 'Profit is an incentive. It pulls new sellers in, and competition grows.', es: 'La ganancia es un incentivo. Atrae a nuevos vendedores, y la competencia crece.', fa: 'مفاد یک تشویق است. فروشنده‌های نو را می‌کشد، و رقابت زیاد می‌شود.' } }
    ]
  },

  learned: [
    { en: 'The [[law of demand|law of demand]]: price up, people buy less. The [[law of supply|law of supply]]: price up, sellers make more.', es: 'La [[law of demand|ley de la demanda]]: si el precio sube, se compra menos. La [[law of supply|ley de la oferta]]: si sube, se hace más.', fa: '[[law of demand|قانون تقاضا]]: قیمت بالا، خرید کمتر. [[law of supply|قانون عرضه]]: قیمت بالا، ساخت بیشتر.' },
    { en: 'At the [[equilibrium price|equilibrium price]], wanted equals made. Too low makes a [[shortage|shortage]]; too high makes a [[surplus|surplus]].', es: 'Al [[equilibrium price|precio de equilibrio]], lo que se quiere es igual a lo que se hace. Muy bajo da [[shortage|escasez]]; muy alto, [[surplus|excedente]].', fa: 'در [[equilibrium price|قیمت تعادل]]، خواسته با ساخته برابر است. قیمت پایین [[shortage|کمبود]] می‌آورد؛ قیمت بلند [[surplus|مازاد]].' },
    { en: 'Weather, tastes, income and more buyers shift [[demand|demand]]. Harvests, machines and more sellers shift [[supply|supply]].', es: 'El clima, los gustos, los ingresos y más compradores cambian la [[demand|demanda]]. Las cosechas, las máquinas y más vendedores cambian la [[supply|oferta]].', fa: 'هوا، سلیقه، عاید و خریداران بیشتر [[demand|تقاضا]] را تغییر می‌دهند. حاصل، ماشین و فروشندگان بیشتر [[supply|عرضه]] را تغییر می‌دهند.' }
  ],
  reflect: {
    q: { en: 'Think of a snack you like. If its price doubled, would you buy more or less? Why?', es: 'Piensa en un bocadillo que te guste. Si su precio se duplicara, ¿comprarías más o menos? ¿Por qué?', fa: 'به یک خوراکی که دوست داری فکر کن. اگر قیمتش دو برابر شود، بیشتر می‌خری یا کمتر؟ چرا؟' },
    starter: { en: 'If the price doubled, I would', es: 'Si el precio se duplicara, yo', fa: 'اگر قیمت دو برابر شود، من' }
  }
};
