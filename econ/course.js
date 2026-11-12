/* COINWALKER · the course file: the same engine as Worldwalker (game/engine), for APA Economics and Personal Finance.
   Loaded before the engine. It names the game, its realms, its five powers and its tools, and swaps the engine's own
   geography words for money words in each language. Episodes live in econ/episodes/. */
window.WW_COURSE = {
  id: 'coinwalker', name: 'Coinwalker', title: 'COINWALKER', sub: 'THE TORN LEDGER', saveKey: 'coinwalker.save.v1', guide: 'pig', icon: '🐷',
  realms: [
    { en: 'Market Valley', es: 'El Valle del Mercado', fa: 'درهٔ بازار' },
    { en: 'Mint Town', es: 'La Ciudad de la Moneda', fa: 'شهر ضرابخانه' },
    { en: 'Budget Bay', es: 'La Bahía del Presupuesto', fa: 'خلیج بودجه' },
    { en: 'Paycheck Port', es: 'El Puerto del Sueldo', fa: 'بندر معاش' },
    { en: 'Credit Crossing', es: 'El Cruce del Crédito', fa: 'گذرگاه قرض' },
    { en: 'Investor Peaks', es: 'Las Cumbres de la Inversión', fa: 'قله‌های سرمایه‌گذاری' },
    { en: 'Safe Harbor', es: 'El Puerto Seguro', fa: 'بندر امن' },
    { en: 'Future Fields', es: 'Los Campos del Futuro', fa: 'کشتزارهای آینده' }],
  // the five powers: money thinking (same keys as Worldwalker, so saves and the Sheet work the same)
  themes: [
    { icon: '💡', name: { en: 'Choices', es: 'Decisiones', fa: 'انتخاب‌ها' }, full: { en: 'Smart Choices', es: 'Decisiones inteligentes', fa: 'انتخاب‌های هوشیارانه' } },
    { icon: '💵', name: { en: 'Money smarts', es: 'Saber de dinero', fa: 'دانش پول' }, full: { en: 'Money Smarts', es: 'Saber de dinero', fa: 'دانش پول' } },
    { icon: '📊', name: { en: 'Planning', es: 'Planear', fa: 'برنامه‌ریزی' }, full: { en: 'Planning Ahead', es: 'Planear el futuro', fa: 'برنامه‌ریزی برای آینده' } },
    { icon: '🛡️', name: { en: 'Protection', es: 'Protección', fa: 'محافظت' }, full: { en: 'Protecting Your Money', es: 'Proteger tu dinero', fa: 'محافظت از پول تو' } },
    { icon: '🌱', name: { en: 'Growth', es: 'Crecimiento', fa: 'رشد' }, full: { en: 'Growing Your Money', es: 'Hacer crecer tu dinero', fa: 'رشد دادن پول تو' } }],
  // the tools you earn (same ids as Worldwalker, so their secrets work the same: the sail crosses deep water, and so on)
  tools: [
    { id: 'compass', ep: '1.3', icon: '🧮', name: { en: 'Abacus', es: 'Ábaco', fa: 'چرتکه' } },
    { id: 'canoe', ep: '2.3', icon: '🛶', name: { en: 'Ferry Token', es: 'Ficha del ferry', fa: 'ژتون کشتی کوچک' } },
    { id: 'key', ep: '3.3', icon: '🗝️', name: { en: 'Safe Key', es: 'Llave de la caja fuerte', fa: 'کلید صندوق' } },
    { id: 'gourd', ep: '4.3', icon: '👛', name: { en: 'Coin Purse', es: 'Monedero', fa: 'کیسهٔ سکه' } },
    { id: 'rail', ep: '5.3', icon: '🎫', name: { en: 'Rail Card', es: 'Tarjeta de tren', fa: 'کارت قطار' } },
    { id: 'cloak', ep: '6.3', icon: '🧥', name: { en: 'Rain Coat', es: 'Impermeable', fa: 'بارانی' } },
    { id: 'seal', ep: '7.3', icon: '☂️', name: { en: 'Big Umbrella', es: 'Paraguas grande', fa: 'چتر بزرگ' } },
    { id: 'sail', ep: '8.2', icon: '⛵', name: { en: 'Harbor Sail', es: 'Vela del puerto', fa: 'بادبان بندر' } }],
  // the engine's own words, swapped in order (longer ones first)
  swaps: {
    en: [['🧭', '🐷'], ['Christopher', 'Copper'], ['living compass', 'flying piggy bank'], ['compass stone', 'ledger stone'], ['Compass arrow', 'Coin arrow'],
      ['Great Atlas', 'Great Ledger'], ['Atlas pages', 'Ledger pages'], ['atlas pages', 'ledger pages'], ['Atlas page', 'Ledger page'], ['atlas page', 'ledger page'],
      ['Atlas scraps', 'Ledger scraps'], ['atlas scraps', 'ledger scraps'], ['atlas scrap', 'ledger scrap'], ['the atlas', 'the ledger'], ['Worldwalker', 'Coinwalker'],
      ['Region sense', 'Big-picture sense'], ['Region master', 'Big-picture master']],
    es: [['🧭', '🐷'], ['Christopher', 'Copper'], ['brújula viva', 'alcancía voladora'], ['piedra de la brújula', 'piedra del libro'], ['piedra brújula', 'piedra del libro'], ['Flecha brújula', 'Flecha de moneda'],
      ['el Gran Atlas', 'el Gran Libro de Cuentas'], ['Gran Atlas', 'Gran Libro de Cuentas'], ['Páginas del atlas', 'Páginas del libro'], ['páginas del atlas', 'páginas del libro'], ['Página del atlas', 'Página del libro'], ['página del atlas', 'página del libro'],
      ['Pedazos del atlas', 'Pedazos del libro'], ['pedazos del atlas', 'pedazos del libro'], ['pedazo del atlas', 'pedazo del libro'], ['del atlas', 'del libro'], ['Caminante del Mundo', 'Caminante de la Moneda']],
    fa: [['🧭', '🐷'], ['کریستوفر', 'کاپر'], ['قطب‌نمای زنده', 'قلک پرنده'], ['سنگ قطب‌نما', 'سنگ دفتر حساب'], ['اطلس بزرگ', 'دفتر حساب بزرگ'], ['اطلس', 'دفتر حساب'], ['جهان‌گرد', 'رهرو سکه']]
  },
  S: {
    story: { en: 'The Grump tore the Great Ledger into 24 pages and scattered them. People are forgetting how money works. You are a Coinwalker apprentice. With Copper, your flying piggy bank, win the pages back by learning each idea.',
      es: 'El Gruñón rompió el Gran Libro de Cuentas en 24 páginas y las esparció. La gente está olvidando cómo funciona el dinero. Eres aprendiz de Caminante de la Moneda. Con Copper, tu alcancía voladora, recupera las páginas aprendiendo cada idea.',
      fa: 'غرغرو دفتر حساب بزرگ را به ۲۴ صفحه پاره کرد و پراکنده ساخت. مردم فراموش می‌کنند پول چطور کار می‌کند. تو شاگرد رهرو سکه هستی. با کاپر، قلک پرنده‌ات، با یاد گرفتن هر اندیشه صفحه‌ها را پس بگیر.' },
    storyOne: { en: 'The Grump tore the Great Ledger. Win back its pages, one idea at a time!', es: '¡El Gruñón rompió el Gran Libro de Cuentas! Recupera sus páginas, una idea a la vez.', fa: 'غرغرو دفتر حساب بزرگ را پاره کرد! صفحه‌هایش را یکی یکی پس بگیر.' },
    map: { en: 'Ledger map', es: 'Mapa del libro', fa: 'نقشهٔ دفتر حساب' },
    powers: { en: 'Five money powers', es: 'Cinco poderes del dinero', fa: 'پنج نیروی پول' },
    bag: { en: 'Bag · one tool from each realm', es: 'Bolsa · una herramienta de cada reino', fa: 'کوله · یک ابزار از هر سرزمین' },
    chrisJob: { en: 'Copper is your flying piggy bank: he shows the way, tells you what to do next, and trades hints for coins.', es: 'Copper es tu alcancía voladora: te muestra el camino, te dice qué hacer después y cambia pistas por monedas.', fa: 'کاپر قلک پرندهٔ توست: راه را نشان می‌دهد، می‌گوید بعد چه کنی، و در برابر سکه کمک می‌دهد.' }
  }
};
