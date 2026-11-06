/* TIMEWALKER · the course file: the same engine as Worldwalker (game/engine), for APA World History II (1500 to today).
   Loaded before the engine. It names the game, its eras, its five powers and its tools, and swaps the engine's own
   geography words for history words in each language. Episodes live in history/episodes/. */
window.WW_COURSE = {
  id: 'timewalker', title: 'TIMEWALKER', sub: 'THE TORN CHRONICLE', saveKey: 'timewalker.save.v1', guide: 'hourglass',
  realms: [
    { en: 'The World Around 1500', es: 'El mundo hacia 1500', fa: 'جهان در حدود سال ۱۵۰۰' },
    { en: 'Exploration and Exchange', es: 'Exploración e intercambio', fa: 'کشف و داد و ستد' },
    { en: 'New Ideas', es: 'Ideas nuevas', fa: 'اندیشه‌های نو' },
    { en: 'Revolutions', es: 'Revoluciones', fa: 'انقلاب‌ها' },
    { en: 'The Industrial World', es: 'El mundo industrial', fa: 'جهان صنعتی' },
    { en: 'World War I and After', es: 'La Primera Guerra Mundial y después', fa: 'جنگ جهانی اول و پس از آن' },
    { en: 'World War II', es: 'La Segunda Guerra Mundial', fa: 'جنگ جهانی دوم' },
    { en: 'The Modern World', es: 'El mundo moderno', fa: 'جهان امروز' }],
  // the five powers: history thinking skills (same keys as Worldwalker, so saves and the Sheet work the same)
  themes: [
    { icon: '🔗', name: { en: 'Cause & effect', es: 'Causa y efecto', fa: 'علت و نتیجه' }, full: { en: 'Cause and Effect', es: 'Causa y efecto', fa: 'علت و نتیجه' } },
    { icon: '⏳', name: { en: 'Change', es: 'Cambio', fa: 'تغییر' }, full: { en: 'Change Over Time', es: 'Cambio en el tiempo', fa: 'تغییر در طول زمان' } },
    { icon: '📜', name: { en: 'Sources', es: 'Fuentes', fa: 'منابع' }, full: { en: 'Primary Sources', es: 'Fuentes primarias', fa: 'منابع اصلی' } },
    { icon: '👥', name: { en: 'Points of view', es: 'Puntos de vista', fa: 'دیدگاه‌ها' }, full: { en: 'Perspectives', es: 'Perspectivas', fa: 'دیدگاه‌ها' } },
    { icon: '🌐', name: { en: 'Connections', es: 'Conexiones', fa: 'پیوندها' }, full: { en: 'Connections', es: 'Conexiones', fa: 'پیوندها' } }],
  // the tools you earn (same ids as Worldwalker, so their secrets work the same: the sail crosses deep water, and so on).
  // 2.3 (the Atlantic slave trade) and 7.3 (the Holocaust) give no tool: nothing there is a prize
  tools: [
    { id: 'compass', ep: '1.3', icon: '🗺️', name: { en: 'Sea Chart', es: 'Carta de navegar', fa: 'نقشهٔ دریایی' } },
    { id: 'sail', ep: '2.1', icon: '⛵', name: { en: 'Ship Sail', es: 'Vela de barco', fa: 'بادبان کشتی' } },
    { id: 'canoe', ep: '1.2', icon: '🛶', name: { en: 'Canoe', es: 'Canoa', fa: 'قایق کوچک' } },
    { id: 'key', ep: '3.3', icon: '🗝️', name: { en: 'Library Key', es: 'Llave de la biblioteca', fa: 'کلید کتابخانه' } },
    { id: 'gourd', ep: '4.3', icon: '🫙', name: { en: 'Water Flask', es: 'Cantimplora', fa: 'قمقمهٔ آب' } },
    { id: 'rail', ep: '5.3', icon: '🎫', name: { en: 'Railway Ticket', es: 'Boleto de tren', fa: 'تکت قطار' } },
    { id: 'cloak', ep: '6.3', icon: '🧥', name: { en: 'Wool Coat', es: 'Abrigo de lana', fa: 'کرتی پشمی' } },
    { id: 'seal', ep: '8.1', icon: '📜', name: { en: 'Peace Seal', es: 'Sello de la paz', fa: 'مهر صلح' } }],
  // the engine's own words, swapped in order (longer ones first)
  swaps: {
    en: [['Christopher', 'Tock'], ['living compass', 'living hourglass'], ['compass stone', 'time stone'], ['Compass arrow', 'Time arrow'],
      ['Great Atlas', 'Great Chronicle'], ['Atlas pages', 'Chronicle pages'], ['atlas pages', 'chronicle pages'], ['Atlas page', 'Chronicle page'], ['atlas page', 'chronicle page'],
      ['Atlas scraps', 'Chronicle scraps'], ['atlas scraps', 'chronicle scraps'], ['atlas scrap', 'chronicle scrap'], ['the atlas', 'the chronicle'], ['Worldwalker', 'Timewalker'],
      ['Region sense', 'Big-picture sense'], ['Region master', 'Big-picture master']],
    es: [['Christopher', 'Tock'], ['brújula viva', 'reloj de arena vivo'], ['piedra de la brújula', 'piedra del tiempo'], ['piedra brújula', 'piedra del tiempo'], ['Flecha brújula', 'Flecha del tiempo'],
      ['el Gran Atlas', 'la Gran Crónica'], ['Gran Atlas', 'Gran Crónica'], ['Páginas del atlas', 'Páginas de la crónica'], ['páginas del atlas', 'páginas de la crónica'], ['Página del atlas', 'Página de la crónica'], ['página del atlas', 'página de la crónica'],
      ['Pedazos del atlas', 'Pedazos de la crónica'], ['pedazos del atlas', 'pedazos de la crónica'], ['pedazo del atlas', 'pedazo de la crónica'], ['del atlas', 'de la crónica'], ['Caminante del Mundo', 'Caminante del Tiempo']],
    fa: [['کریستوفر', 'تاک'], ['قطب‌نمای زنده', 'ساعت ریگی زنده'], ['سنگ قطب‌نما', 'سنگ زمان'], ['اطلس بزرگ', 'تاریخ‌نامهٔ بزرگ'], ['اطلس', 'تاریخ‌نامه'], ['جهان‌گرد', 'زمان‌گرد']]
  },
  S: {
    story: { en: 'The Grump tore the Great Chronicle into 24 pages and scattered them across time. People are forgetting their own history. You are a Timewalker apprentice. With Tock, your living hourglass, win the pages back by learning each moment.',
      es: 'El Gruñón rompió la Gran Crónica en 24 páginas y las esparció por el tiempo. La gente está olvidando su propia historia. Eres aprendiz de Caminante del Tiempo. Con Tock, tu reloj de arena vivo, recupera las páginas aprendiendo cada momento.',
      fa: 'غرغرو تاریخ‌نامهٔ بزرگ را به ۲۴ صفحه پاره کرد و آن‌ها را در طول زمان پراکنده ساخت. مردم تاریخ خود را فراموش می‌کنند. تو شاگرد زمان‌گرد هستی. با تاک، ساعت ریگی زنده‌ات، با یاد گرفتن هر زمان صفحه‌ها را پس بگیر.' },
    storyOne: { en: 'The Grump tore the Great Chronicle. Win back its pages, one moment at a time!', es: '¡El Gruñón rompió la Gran Crónica! Recupera sus páginas, un momento a la vez.', fa: 'غرغرو تاریخ‌نامهٔ بزرگ را پاره کرد! صفحه‌هایش را یکی یکی پس بگیر.' },
    map: { en: 'Timeline', es: 'Línea del tiempo', fa: 'خط زمان' },
    powers: { en: 'Five history powers', es: 'Cinco poderes de historia', fa: 'پنج نیروی تاریخ' },
    bag: { en: 'Bag · one tool from each era', es: 'Bolsa · una herramienta de cada época', fa: 'کوله · یک ابزار از هر دوره' },
    chrisJob: { en: 'Tock is your living hourglass: he shows the way, tells you what to do next, and trades hints for coins.', es: 'Tock es tu reloj de arena vivo: te muestra el camino, te dice qué hacer después y cambia pistas por monedas.', fa: 'تاک ساعت ریگی زندهٔ توست: راه را نشان می‌دهد، می‌گوید بعد چه کنی، و در برابر سکه کمک می‌دهد.' }
  }
};
