/* CIVICWALKER · the course file: the same engine as Worldwalker (game/engine), for APA Virginia and US Government.
   Loaded before the engine. It names the game, its realms, its five powers and its tools, and swaps the engine's own
   geography words for government words in each language. Episodes live in gov/episodes/. */
window.WW_COURSE = {
  id: 'civicwalker', name: 'Civicwalker', title: 'CIVICWALKER', sub: 'THE TORN CHARTER', saveKey: 'civicwalker.save.v1', guide: 'bell', icon: '🔔',
  realms: [
    { en: 'The Old Lands', es: 'Las Tierras Antiguas', fa: 'سرزمین‌های کهن' },
    { en: 'Charter Hall', es: 'La Sala de la Carta', fa: 'تالار منشور' },
    { en: 'Liberty Commons', es: 'La Plaza de la Libertad', fa: 'میدان آزادی' },
    { en: 'Ballot Fair', es: 'La Feria del Voto', fa: 'میلهٔ رأی' },
    { en: 'Capitol Hill', es: 'La Colina del Capitolio', fa: 'تپهٔ کاپیتول' },
    { en: 'The Executive Mansion', es: 'La Mansión Ejecutiva', fa: 'خانهٔ رئیس جمهور' },
    { en: 'Courthouse Heights', es: 'Las Alturas del Tribunal', fa: 'بلندی‌های محکمه' },
    { en: 'The World Harbor', es: 'El Puerto del Mundo', fa: 'بندر جهان' }],
  // the five powers: government thinking (same keys as Worldwalker, so saves and the Sheet work the same)
  themes: [
    { icon: '📜', name: { en: 'Founding ideas', es: 'Ideas fundadoras', fa: 'اندیشه‌های بنیادی' }, full: { en: 'Founding Ideas', es: 'Ideas fundadoras', fa: 'اندیشه‌های بنیادی' } },
    { icon: '🏛️', name: { en: 'Who has power', es: 'Quién tiene el poder', fa: 'قدرت دست کیست' }, full: { en: 'Who Has Power', es: 'Quién tiene el poder', fa: 'قدرت دست کیست' } },
    { icon: '⚖️', name: { en: 'Rights', es: 'Derechos', fa: 'حقوق' }, full: { en: 'Rights and Liberties', es: 'Derechos y libertades', fa: 'حقوق و آزادی‌ها' } },
    { icon: '🗳️', name: { en: 'Your voice', es: 'Tu voz', fa: 'صدای تو' }, full: { en: 'Your Voice', es: 'Tu voz', fa: 'صدای تو' } },
    { icon: '🌐', name: { en: 'Compare', es: 'Comparar', fa: 'مقایسه' }, full: { en: 'Compare Governments', es: 'Comparar gobiernos', fa: 'مقایسهٔ حکومت‌ها' } }],
  // the tools you earn (same ids as Worldwalker, so their secrets work the same: the sail crosses deep water, and so on).
  // 3.3 (civil rights) is a quiet episode and gives no tool: nothing there is a prize, so the key comes in 3.2
  tools: [
    { id: 'compass', ep: '1.3', icon: '🖋️', name: { en: "Founder's Pen", es: 'Pluma fundadora', fa: 'قلم بنیان‌گذار' } },
    { id: 'canoe', ep: '2.3', icon: '🛶', name: { en: 'Ferry Pass', es: 'Pase del ferry', fa: 'تکت کشتی کوچک' } },
    { id: 'key', ep: '3.2', icon: '🗝️', name: { en: 'Courthouse Key', es: 'Llave del tribunal', fa: 'کلید محکمه' } },
    { id: 'gourd', ep: '4.3', icon: '🪪', name: { en: 'Voter Card', es: 'Tarjeta de votante', fa: 'کارت رأی‌دهی' } },
    { id: 'rail', ep: '5.3', icon: '🎫', name: { en: 'Capitol Rail Pass', es: 'Pase de tren del Capitolio', fa: 'تکت قطار کاپیتول' } },
    { id: 'cloak', ep: '6.3', icon: '🧥', name: { en: 'Rain Coat', es: 'Impermeable', fa: 'بارانی' } },
    { id: 'seal', ep: '7.3', icon: '🔏', name: { en: 'Court Seal', es: 'Sello del tribunal', fa: 'مهر محکمه' } },
    { id: 'sail', ep: '8.2', icon: '⛵', name: { en: 'Harbor Sail', es: 'Vela del puerto', fa: 'بادبان بندر' } }],
  // the engine's own words, swapped in order (longer ones first)
  swaps: {
    en: [['🧭', '🔔'], ['Christopher', 'Liberty'], ['living compass', 'flying Liberty Bell'], ['compass stone', 'charter stone'], ['Compass arrow', 'Bell arrow'],
      ['Great Atlas', 'Great Charter'], ['Atlas pages', 'Charter pages'], ['atlas pages', 'charter pages'], ['Atlas page', 'Charter page'], ['atlas page', 'charter page'],
      ['Atlas scraps', 'Charter scraps'], ['atlas scraps', 'charter scraps'], ['atlas scrap', 'charter scrap'], ['the atlas', 'the charter'], ['Worldwalker', 'Civicwalker'],
      ['Region sense', 'Big-picture sense'], ['Region master', 'Big-picture master']],
    es: [['🧭', '🔔'], ['Christopher', 'Liberty'], ['brújula viva', 'Campana de la Libertad voladora'], ['piedra de la brújula', 'piedra de la carta'], ['piedra brújula', 'piedra de la carta'], ['Flecha brújula', 'Flecha de la campana'],
      ['el Gran Atlas', 'la Gran Carta'], ['Gran Atlas', 'Gran Carta'], ['Páginas del atlas', 'Páginas de la carta'], ['páginas del atlas', 'páginas de la carta'], ['Página del atlas', 'Página de la carta'], ['página del atlas', 'página de la carta'],
      ['Pedazos del atlas', 'Pedazos de la carta'], ['pedazos del atlas', 'pedazos de la carta'], ['pedazo del atlas', 'pedazo de la carta'], ['del atlas', 'de la carta'], ['Caminante del Mundo', 'Caminante Cívico']],
    fa: [['🧭', '🔔'], ['کریستوفر', 'لیبرتی'], ['قطب‌نمای زنده', 'زنگ آزادی پرنده'], ['سنگ قطب‌نما', 'سنگ منشور'], ['اطلس بزرگ', 'منشور بزرگ'], ['اطلس', 'منشور'], ['جهان‌گرد', 'رهرو مدنی']]
  },
  S: {
    story: { en: 'The Grump tore the Great Charter into 24 pages and scattered them. People are forgetting how their government works. You are a Civicwalker apprentice. With Liberty, your flying Liberty Bell, win the pages back by learning each idea.',
      es: 'El Gruñón rompió la Gran Carta en 24 páginas y las esparció. La gente está olvidando cómo funciona su gobierno. Eres aprendiz de Caminante Cívico. Con Liberty, tu Campana de la Libertad voladora, recupera las páginas aprendiendo cada idea.',
      fa: 'غرغرو منشور بزرگ را به ۲۴ صفحه پاره کرد و پراکنده ساخت. مردم فراموش می‌کنند حکومت‌شان چطور کار می‌کند. تو شاگرد رهرو مدنی هستی. با لیبرتی، زنگ آزادی پرنده‌ات، با یاد گرفتن هر اندیشه صفحه‌ها را پس بگیر.' },
    storyOne: { en: 'The Grump tore the Great Charter. Win back its pages, one idea at a time!', es: '¡El Gruñón rompió la Gran Carta! Recupera sus páginas, una idea a la vez.', fa: 'غرغرو منشور بزرگ را پاره کرد! صفحه‌هایش را یکی یکی پس بگیر.' },
    map: { en: 'Charter map', es: 'Mapa de la carta', fa: 'نقشهٔ منشور' },
    powers: { en: 'Five civic powers', es: 'Cinco poderes cívicos', fa: 'پنج نیروی مدنی' },
    bag: { en: 'Bag · one tool from each realm', es: 'Bolsa · una herramienta de cada reino', fa: 'کوله · یک ابزار از هر سرزمین' },
    chrisJob: { en: 'Liberty is your flying Liberty Bell: he shows the way, tells you what to do next, and trades hints for coins.', es: 'Liberty es tu Campana de la Libertad voladora: te muestra el camino, te dice qué hacer después y cambia pistas por monedas.', fa: 'لیبرتی زنگ آزادی پرندهٔ توست: راه را نشان می‌دهد، می‌گوید بعد چه کنی، و در برابر سکه کمک می‌دهد.' }
  }
};
