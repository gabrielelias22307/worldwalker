/* COINWALKER · Bradlee Portfolio (game/engine/portfolio.js draws it; this file is only the content)
   A made-up Bradlee Shopping Center in Alexandria, Virginia, with 8 storefronts. Each storefront is a place to put
   money, and it grows (or shrinks) the way that kind of money does. Every finished Coinwalker episode is one year at
   Bradlee and one $100 paycheck. Each year has one piece of Bradlee News; its "why" uses the words the episodes teach
   (4.2 savings and the FDIC, 2.3 inflation, 6.1–6.3 stocks, bonds, funds, diversification, crypto, 7.1 insurance,
   7.3 retirement and the employer match). No real store names. The years follow a fixed, made-up story (not luck).

   rates: the change in buying power in one year, by kind of news (0.06 = +6%). Insurance pays the premium each year
   from its own fund; while it has the money, a storm costs insured storefronts only the deductible. */
window.WW_PORTFOLIO = {
  pay: 100, premium: 5, deductible: 0.02, match: 0.5,
  kinds: [
    { id: 'piggy', icon: '🐷', opens: null, lot: 0,
      name: { en: 'Piggy Bank Kiosk', es: 'Quiosco Alcancía', fa: 'غرفهٔ قلک' },
      what: { en: 'Cash. Safe and easy to reach, but it never grows, and when prices rise it buys less.', es: 'Efectivo. Seguro y fácil de usar, pero nunca crece, y cuando suben los precios compra menos.', fa: 'پول نقد. امن و در دسترس است، اما هرگز رشد نمی‌کند و وقتی قیمت‌ها بالا می‌روند، کمتر می‌خرد.' },
      rates: { normal: 0, inflation: -0.04, storm: 0, boom: 0, recession: 0, flop: 0, hype: 0 } },
    { id: 'savings', icon: '🏦', opens: '4.2', lot: 1,
      name: { en: 'Savings Bank', es: 'Banco de Ahorros', fa: 'بانک پس‌انداز' },
      what: { en: 'A savings account: it pays a little interest, and the FDIC insures it. Small, safe growth.', es: 'Una cuenta de ahorros: paga un poco de interés y la FDIC la asegura. Crece poco, pero segura.', fa: 'حساب پس‌انداز: کمی سود می‌دهد و FDIC آن را بیمه می‌کند. رشد کم، اما امن.' },
      rates: { normal: 0.02, inflation: -0.02, storm: 0.02, boom: 0.02, recession: 0.02, flop: 0.02, hype: 0.02 } },
    { id: 'bonds', icon: '📜', opens: '6.1', lot: 2,
      name: { en: 'Bond Office', es: 'Oficina de Bonos', fa: 'دفتر اوراق قرضه' },
      what: { en: 'Bonds: a loan you give to a company or the government. It pays you interest. Steady, small returns.', es: 'Bonos: un préstamo que le das a una empresa o al gobierno. Te paga interés. Ganancias pequeñas y estables.', fa: 'اوراق قرضه: وامی که به یک شرکت یا دولت می‌دهی. به تو سود می‌پردازد. بازده کم و ثابت.' },
      rates: { normal: 0.03, inflation: -0.02, storm: 0.03, boom: 0.02, recession: 0.03, flop: 0.03, hype: 0.03 } },
    { id: 'shop', icon: '🏪', opens: '6.1', lot: 3, storm: true,
      name: { en: 'One Shop\'s Shares', es: 'Acciones de una Tienda', fa: 'سهام یک مغازه' },
      what: { en: 'A stock: a small piece of one company, the Bradlee Bakery. It can grow a lot, or fall a lot.', es: 'Una acción: una pequeña parte de una sola empresa, la Panadería Bradlee. Puede subir mucho o bajar mucho.', fa: 'سهم: بخش کوچکی از یک شرکت، نانوایی بردلی. می‌تواند خیلی بالا برود یا خیلی پایین بیاید.' },
      rates: { normal: 0.08, inflation: 0.02, storm: -0.2, boom: 0.3, recession: -0.35, flop: -0.5, hype: 0.05 } },
    { id: 'center', icon: '🏬', opens: '6.2', lot: 4, storm: true,
      name: { en: 'The Whole Center', es: 'Todo el Centro', fa: 'کل مرکز خرید' },
      what: { en: 'An index fund: one basket with a small piece of every shop at Bradlee. One loss hurts less (diversification).', es: 'Un fondo indexado: una canasta con una pequeña parte de cada tienda de Bradlee. Una pérdida duele menos (diversificación).', fa: 'صندوق شاخصی: یک سبد با بخش کوچکی از همهٔ مغازه‌های بردلی. یک ضرر کمتر آسیب می‌زند (تنوع‌بخشی).' },
      rates: { normal: 0.06, inflation: 0.02, storm: -0.04, boom: 0.18, recession: -0.15, flop: -0.02, hype: 0.04 } },
    { id: 'crypto', icon: '💾', opens: '6.3', lot: 5,
      name: { en: 'Digital Coin Kiosk', es: 'Quiosco de Moneda Digital', fa: 'غرفهٔ سکهٔ دیجیتال' },
      what: { en: 'Crypto: digital money on a blockchain. No bank or government backs it, and the FDIC does not cover it. Wild swings.', es: 'Cripto: dinero digital en una cadena de bloques. Ningún banco ni gobierno lo respalda y la FDIC no lo cubre. Sube y baja mucho.', fa: 'رمزارز: پول دیجیتال روی بلاک‌چین. هیچ بانک یا دولتی پشتوانهٔ آن نیست و FDIC آن را پوشش نمی‌دهد. نوسان شدید.' },
      rates: { normal: 0.05, inflation: -0.1, storm: 0, boom: 0.4, recession: -0.6, flop: 0, hype: 1.2 } },
    { id: 'insurance', icon: '☂️', opens: '7.1', lot: 6, insurance: true,
      name: { en: 'Insurance Office', es: 'Oficina de Seguros', fa: 'دفتر بیمه' },
      what: { en: 'Insurance for your stores. Money here pays the premium ($5 a year). When a storm hits, you pay only the deductible.', es: 'Seguro para tus tiendas. El dinero aquí paga la prima ($5 al año). Si llega una tormenta, solo pagas el deducible.', fa: 'بیمه برای مغازه‌هایت. پول این‌جا حق بیمه را می‌پردازد (۵ دلار در سال). وقتی طوفان بیاید، فقط فرانشیز را می‌پردازی.' },
      rates: { normal: 0, inflation: 0, storm: 0, boom: 0, recession: 0, flop: 0, hype: 0 } },
    { id: 'vault', icon: '🌅', opens: '7.3', lot: 7, locked: true, matched: true, storm: true,
      name: { en: 'Retirement Vault', es: 'Bóveda de Retiro', fa: 'گاوصندوق بازنشستگی' },
      what: { en: 'A retirement account, like a 401(k) from your job: your boss adds 50 cents for each dollar you put in (the match). It grows like the whole center, but it stays locked until retirement.', es: 'Una cuenta de retiro, como un 401(k) del trabajo: tu jefe añade 50 centavos por cada dólar que pones (la contribución). Crece como todo el centro, pero queda cerrada hasta el retiro.', fa: 'حساب بازنشستگی، مثل 401(k) از محل کار: کارفرما برای هر دلاری که می‌گذاری ۵۰ سنت اضافه می‌کند (سهم کارفرما). مثل کل مرکز رشد می‌کند، اما تا بازنشستگی قفل می‌ماند.' },
      rates: { normal: 0.06, inflation: 0.02, storm: -0.04, boom: 0.18, recession: -0.15, flop: -0.02, hype: 0.04 } }
  ],
  // one news card a year, years 1–24 (a fixed, made-up story)
  years: ['normal', 'inflation', 'normal', 'storm', 'boom', 'normal', 'inflation', 'normal', 'recession', 'normal', 'boom', 'normal',
    'storm', 'normal', 'flop', 'boom', 'hype', 'recession', 'normal', 'storm', 'boom', 'normal', 'inflation', 'boom'],
  news: {
    normal: { icon: '☀️', title: { en: 'A regular year at Bradlee', es: 'Un año normal en Bradlee', fa: 'یک سال معمولی در بردلی' },
      why: { en: 'Most years are steady. Saving grows a little; investing grows a little more.', es: 'La mayoría de los años son estables. El ahorro crece un poco; la inversión crece un poco más.', fa: 'بیشتر سال‌ها آرام‌اند. پس‌انداز کمی رشد می‌کند؛ سرمایه‌گذاری کمی بیشتر.' } },
    inflation: { icon: '🛒', title: { en: 'Prices rise at the grocery store', es: 'Suben los precios en el supermercado', fa: 'قیمت‌ها در فروشگاه بالا می‌رود' },
      why: { en: 'Inflation lowers purchasing power: the same cash buys less. Money that grows faster than prices keeps up.', es: 'La inflación baja el poder de compra: el mismo efectivo compra menos. El dinero que crece más rápido que los precios no pierde.', fa: 'تورم قدرت خرید را کم می‌کند: همان پول نقد کمتر می‌خرد. پولی که سریع‌تر از قیمت‌ها رشد کند عقب نمی‌ماند.' } },
    storm: { icon: '⛈️', title: { en: 'A big storm hits King Street', es: 'Una gran tormenta llega a King Street', fa: 'طوفانی بزرگ به خیابان کینگ می‌رسد' },
      why: { en: 'Insurance transfers the cost of a big loss to the pool. Insured stores pay only the deductible; others pay the whole loss.', es: 'El seguro pasa el costo de una gran pérdida al fondo común. Las tiendas aseguradas solo pagan el deducible; las demás pagan toda la pérdida.', fa: 'بیمه هزینهٔ یک ضرر بزرگ را به صندوق مشترک منتقل می‌کند. مغازه‌های بیمه‌شده فقط فرانشیز می‌پردازند؛ بقیه کل ضرر را.' } },
    boom: { icon: '🎉', title: { en: 'Shoppers everywhere! Sales are up', es: '¡Compradores por todas partes! Suben las ventas', fa: 'همه‌جا خریدار است! فروش بالا رفته' },
      why: { en: 'In a bull market, stock prices rise. Stocks and funds grow the most; savings grow the same as always.', es: 'En un mercado alcista, los precios de las acciones suben. Las acciones y los fondos crecen más; el ahorro crece como siempre.', fa: 'در بازار صعودی، قیمت سهام بالا می‌رود. سهام و صندوق‌ها بیشترین رشد را دارند؛ پس‌انداز مثل همیشه.' } },
    recession: { icon: '📉', title: { en: 'Hard times: people buy less', es: 'Tiempos difíciles: la gente compra menos', fa: 'روزهای سخت: مردم کمتر می‌خرند' },
      why: { en: 'In a bear market, stock prices fall. Savings and bonds stay steady, and the whole center falls less than one shop. Risk and return go together.', es: 'En un mercado bajista, los precios de las acciones bajan. El ahorro y los bonos se mantienen, y todo el centro baja menos que una sola tienda. El riesgo y la ganancia van juntos.', fa: 'در بازار نزولی، قیمت سهام پایین می‌آید. پس‌انداز و اوراق قرضه ثابت می‌مانند و کل مرکز کمتر از یک مغازه پایین می‌آید. ریسک و بازده با هم‌اند.' } },
    flop: { icon: '🥖', title: { en: 'The Bradlee Bakery\'s new bread flops', es: 'El pan nuevo de la Panadería Bradlee fracasa', fa: 'نان جدید نانوایی بردلی شکست می‌خورد' },
      why: { en: 'One company can fail. Diversification spreads your money over many companies, so one loss hurts less.', es: 'Una empresa puede fracasar. La diversificación reparte tu dinero en muchas empresas, así una pérdida duele menos.', fa: 'یک شرکت می‌تواند شکست بخورد. تنوع‌بخشی پولت را میان شرکت‌های زیادی پخش می‌کند تا یک ضرر کمتر آسیب بزند.' } },
    hype: { icon: '🚀', title: { en: 'Everyone talks about a new digital coin', es: 'Todos hablan de una nueva moneda digital', fa: 'همه از یک سکهٔ دیجیتال تازه حرف می‌زنند' },
      why: { en: 'Crypto prices swing a lot (volatility). A fast jump can be followed by a crash. Risk only what you can lose.', es: 'Los precios de las cripto suben y bajan mucho (volatilidad). Una subida rápida puede terminar en una caída. Arriesga solo lo que puedes perder.', fa: 'قیمت رمزارز خیلی نوسان دارد. یک جهش سریع می‌تواند با سقوط همراه شود. فقط آن‌قدر ریسک کن که می‌توانی از دست بدهی.' } }
  },
  S: {
    title: { en: 'BRADLEE PORTFOLIO', es: 'PORTAFOLIO BRADLEE', fa: 'سبد سرمایهٔ بردلی' },
    sub: { en: 'Bradlee Shopping Center · Alexandria, Virginia', es: 'Centro Comercial Bradlee · Alexandria, Virginia', fa: 'مرکز خرید بردلی · الکساندریا، ویرجینیا' },
    madeUp: { en: 'A made-up version of the center for this game: the stores and the years are pretend.', es: 'Una versión inventada del centro para este juego: las tiendas y los años son de mentira.', fa: 'نسخه‌ای ساختگی از این مرکز برای بازی: مغازه‌ها و سال‌ها خیالی‌اند.' },
    how: { en: 'Each Coinwalker episode you finish is one year at Bradlee and a $100 paycheck. Your paycheck goes into the Piggy Bank Kiosk. Move money into the storefronts, then play more episodes and see what happens.', es: 'Cada episodio de Coinwalker que terminas es un año en Bradlee y un sueldo de $100. Tu sueldo va al Quiosco Alcancía. Pasa dinero a las tiendas, juega más episodios y mira qué pasa.', fa: 'هر قسمت Coinwalker که تمام کنی، یک سال در بردلی و یک حقوق ۱۰۰ دلاری است. حقوقت به غرفهٔ قلک می‌رود. پول را به مغازه‌ها ببر، بعد قسمت‌های بیشتری بازی کن و ببین چه می‌شود.' },
    year: { en: 'Year {y} of {n}', es: 'Año {y} de {n}', fa: 'سال {y} از {n}' },
    worth: { en: 'Net worth', es: 'Patrimonio neto', fa: 'دارایی خالص' },
    cash: { en: 'Cash to move', es: 'Efectivo para mover', fa: 'پول نقد برای جابه‌جایی' },
    putIn: { en: 'Put in', es: 'Poner', fa: 'بگذار' },
    takeOut: { en: 'Take out', es: 'Sacar', fa: 'بردار' },
    all: { en: 'All', es: 'Todo', fa: 'همه' },
    opens: { en: 'Opens after episode {e}', es: 'Abre después del episodio {e}', fa: 'بعد از قسمت {e} باز می‌شود' },
    locked: { en: 'Locked until retirement (the end of the course)', es: 'Cerrada hasta el retiro (el final del curso)', fa: 'تا بازنشستگی (پایان دوره) قفل است' },
    covered: { en: 'Your stores are insured this year', es: 'Tus tiendas están aseguradas este año', fa: 'مغازه‌هایت امسال بیمه‌اند' },
    notCovered: { en: 'Not insured: put at least $5 in to pay the premium', es: 'Sin seguro: pon al menos $5 para pagar la prima', fa: 'بیمه نیستی: دست‌کم ۵ دلار بگذار تا حق بیمه پرداخت شود' },
    newYear: { en: 'Year {y} at Bradlee', es: 'Año {y} en Bradlee', fa: 'سال {y} در بردلی' },
    paycheck: { en: '💵 Paycheck: +$100 to your Piggy Bank Kiosk', es: '💵 Sueldo: +$100 a tu Quiosco Alcancía', fa: '💵 حقوق: ۱۰۰+ دلار به غرفهٔ قلک' },
    premiumPaid: { en: '☂️ Premium paid: $5', es: '☂️ Prima pagada: $5', fa: '☂️ حق بیمه پرداخت شد: ۵ دلار' },
    matchAdd: { en: '🌅 Your boss added a match of ${m}', es: '🌅 Tu jefe añadió ${m} de contribución', fa: '🌅 کارفرما {m} دلار سهم اضافه کرد' },
    next: { en: 'Next', es: 'Siguiente', fa: 'بعدی' },
    done: { en: 'Back to Bradlee', es: 'Volver a Bradlee', fa: 'بازگشت به بردلی' },
    chart: { en: 'Your net worth, year by year', es: 'Tu patrimonio neto, año por año', fa: 'دارایی خالص تو، سال به سال' },
    noYears: { en: 'Finish a Coinwalker episode to start your first year at Bradlee.', es: 'Termina un episodio de Coinwalker para empezar tu primer año en Bradlee.', fa: 'یک قسمت Coinwalker را تمام کن تا اولین سالت در بردلی شروع شود.' },
    code: { en: 'Passport Code', es: 'Código de pasaporte', fa: 'کد گذرنامه' },
    codeHelp: { en: 'Played on another computer? Paste your Coinwalker Passport Code to bring your finished episodes here.', es: '¿Jugaste en otra computadora? Pega tu código de pasaporte de Coinwalker para traer tus episodios terminados.', fa: 'روی رایانهٔ دیگری بازی کردی؟ کد گذرنامهٔ Coinwalker را بچسبان تا قسمت‌های تمام‌شده‌ات این‌جا بیایند.' },
    codeOk: { en: 'Done! Your finished episodes are here.', es: '¡Listo! Tus episodios terminados están aquí.', fa: 'انجام شد! قسمت‌های تمام‌شده‌ات این‌جاست.' },
    codeBad: { en: 'That code does not work. Check it and try again.', es: 'Ese código no funciona. Revísalo e inténtalo otra vez.', fa: 'این کد کار نمی‌کند. آن را بررسی کن و دوباره امتحان کن.' },
    endTitle: { en: 'Retirement day at Bradlee!', es: '¡Día del retiro en Bradlee!', fa: 'روز بازنشستگی در بردلی!' },
    endYou: { en: 'Your net worth after 24 years: ${v}', es: 'Tu patrimonio neto después de 24 años: ${v}', fa: 'دارایی خالص تو پس از ۲۴ سال: {v} دلار' },
    endPiggy: { en: 'If every paycheck had stayed in the piggy bank: ${v}', es: 'Si cada sueldo se hubiera quedado en la alcancía: ${v}', fa: 'اگر همهٔ حقوق‌ها در قلک می‌ماند: {v} دلار' },
    endCenter: { en: 'If every paycheck had gone into the whole center from the start: ${v}', es: 'Si cada sueldo hubiera ido a todo el centro desde el principio: ${v}', fa: 'اگر همهٔ حقوق‌ها از اول به کل مرکز می‌رفت: {v} دلار' },
    endWhy: { en: 'Start early, spread your money out, insure against big losses, and be patient: time and compound growth do the rest.', es: 'Empieza temprano, reparte tu dinero, asegúrate contra grandes pérdidas y ten paciencia: el tiempo y el crecimiento compuesto hacen el resto.', fa: 'زود شروع کن، پولت را پخش کن، در برابر ضررهای بزرگ بیمه شو و صبور باش: زمان و رشد مرکب بقیه را انجام می‌دهند.' },
    music: { en: 'Music', es: 'Música', fa: 'موسیقی' }
  }
};
// Bradlee's own tune (music.js reads course songs): an easy shopping-center stroll in F, with a walking bass
if (window.WW_COURSE) window.WW_COURSE.songs = Object.assign(window.WW_COURSE.songs || {}, {
  bradlee: { bpm: 100, lead: 'tri',
    melody: `A5 - C6 - A5 G5 F5 - | G5 - A5 - F5 - D5 - | C5 - F5 - A5 - G5 F5 | G5 - - - - - . . |
             A5 - C6 - D6 C6 A5 - | Bb5 - A5 - G5 - E5 - | F5 - G5 - A5 G5 E5 C5 | F5 - - - - - . .`,
    bass: `F2 . A2 . C3 . A2 . | Bb2 . D3 . F3 . D3 . | F2 . A2 . C3 . F3 . | C3 . E3 . G3 . E3 . |
           F2 . A2 . C3 . A2 . | Bb2 . D3 . G2 . Bb2 . | C3 . E3 . G2 . C3 . | F2 . C3 . F2 . . .`,
    drums: 'k . h . s . h . | k . h k s . h .' },
  bradleeNews: { bpm: 140, lead: 'pluck', once: true,
    melody: 'C5 . E5 . G5 . C6 - - - . . . . . .', bass: 'C3 . . . G3 . C3 - - - . . . . . .', drums: 'k . . . s . . . k . . . . . . .' }
});
