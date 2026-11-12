/* TRAILWALKER · the course file: the same engine as Worldwalker (game/engine), for APA Virginia and US History.
   Loaded before the engine. It names the game, its realms, its five powers and its tools, and swaps the engine's own
   geography words for history words in each language. Episodes live in usva/episodes/. */
window.WW_COURSE = {
  id: 'trailwalker', name: 'Trailwalker', title: 'TRAILWALKER', sub: 'THE TORN JOURNAL', saveKey: 'trailwalker.save.v1', guide: 'lantern', icon: '🏮',
  realms: [
    { en: 'New World Shores', es: 'Las Costas del Nuevo Mundo', fa: 'سواحل دنیای نو' },
    { en: 'Liberty Road', es: 'El Camino de la Libertad', fa: 'راه آزادی' },
    { en: "Founders' Hall", es: 'La Sala de los Fundadores', fa: 'تالار بنیان‌گذاران' },
    { en: 'The Frontier', es: 'La Frontera', fa: 'سرحد' },
    { en: 'The Divided House', es: 'La Casa Dividida', fa: 'خانهٔ جدا شده' },
    { en: 'Iron Cities', es: 'Las Ciudades de Hierro', fa: 'شهرهای آهن' },
    { en: 'The Stormy Century', es: 'El Siglo Tormentoso', fa: 'قرن طوفانی' },
    { en: 'Modern Horizon', es: 'El Horizonte Moderno', fa: 'افق امروز' }],
  // the five powers: history thinking (same keys as Worldwalker, so saves and the Sheet work the same)
  themes: [
    { icon: '🔗', name: { en: 'Cause & effect', es: 'Causa y efecto', fa: 'علت و نتیجه' }, full: { en: 'Cause and Effect', es: 'Causa y efecto', fa: 'علت و نتیجه' } },
    { icon: '⏳', name: { en: 'Change', es: 'Cambio', fa: 'تغییر' }, full: { en: 'Change Over Time', es: 'Cambio en el tiempo', fa: 'تغییر در طول زمان' } },
    { icon: '📜', name: { en: 'Sources', es: 'Fuentes', fa: 'منابع' }, full: { en: 'Primary Sources', es: 'Fuentes primarias', fa: 'منابع اصلی' } },
    { icon: '👥', name: { en: 'Points of view', es: 'Puntos de vista', fa: 'دیدگاه‌ها' }, full: { en: 'Perspectives', es: 'Perspectivas', fa: 'دیدگاه‌ها' } },
    { icon: '🗺️', name: { en: 'Places', es: 'Lugares', fa: 'مکان‌ها' }, full: { en: 'Places and Maps', es: 'Lugares y mapas', fa: 'مکان‌ها و نقشه‌ها' } }],
  // the tools you earn (same ids as Worldwalker, so their secrets work the same: the sail crosses deep water, and so on).
  // 4.3 (Indian Removal) and 8.3 (the finale, with the Pentagon Memorial) are quiet episodes and give no tool
  tools: [
    { id: 'compass', ep: '1.3', icon: '🧭', name: { en: "Surveyor's Compass", es: 'Brújula de agrimensor', fa: 'قطب‌نمای نقشه‌بردار' } },
    { id: 'canoe', ep: '2.3', icon: '🛶', name: { en: 'River Canoe', es: 'Canoa de río', fa: 'قایق دریایی' } },
    { id: 'key', ep: '3.3', icon: '🗝️', name: { en: 'Archive Key', es: 'Llave del archivo', fa: 'کلید آرشیف' } },
    { id: 'gourd', ep: '4.2', icon: '🫙', name: { en: 'Water Canteen', es: 'Cantimplora', fa: 'قمقمهٔ آب' } },
    { id: 'rail', ep: '5.3', icon: '🎫', name: { en: 'Railroad Ticket', es: 'Boleto de tren', fa: 'تکت ریل' } },
    { id: 'cloak', ep: '6.3', icon: '🧥', name: { en: 'Wool Coat', es: 'Abrigo de lana', fa: 'کرتی پشمی' } },
    { id: 'seal', ep: '7.3', icon: '📻', name: { en: 'Pocket Radio', es: 'Radio de bolsillo', fa: 'رادیوی جیبی' } },
    { id: 'sail', ep: '8.2', icon: '⛵', name: { en: 'Harbor Sail', es: 'Vela del puerto', fa: 'بادبان بندر' } }],
  // one song for each realm (our own tunes, made in code like the engine's; see game/engine/music.js for how notes are written)
  songs: {
    // 1 New World Shores: a sea-breeze tune in D (dorian)
    realm1: { bpm: 104, lead: 'pluck',
      melody: `D5 - E5 F5 A5 - G5 - | F5 - E5 - D5 - . . | C5 - D5 E5 G5 - F5 - | E5 - - - C5 - . . | D5 - F5 A5 C6 - A5 - | G5 - F5 - E5 - C5 - | D5 - E5 - C5 - A4 - | D5 - - - . . . .`,
      bass: `D3 . A3 . D3 . A3 . | Bb2 . F3 . Bb2 . F3 . | C3 . G3 . C3 . G3 . | A2 . E3 . A2 . . . | D3 . A3 . F3 . C4 . | C3 . G3 . A2 . E3 . | Bb2 . F3 . A2 . E3 . | D3 . A3 . D3 . . .`,
      drums: 'k . . h s . h .' },
    // 2 Liberty Road: a fife march in F
    realm2: { bpm: 124, lead: 'square',
      melody: `F5 - A5 - C6 - A5 F5 | G5 - E5 - C5 - . . | F5 - G5 - A5 - Bb5 A5 | G5 - - - . . C5 - | D5 - F5 - A5 - G5 F5 | E5 - G5 - C6 - Bb5 G5 | A5 - F5 - G5 - E5 - | F5 - - - . . . .`,
      bass: `F2 . C3 . F2 . C3 . | C3 . G2 . C3 . G2 . | F2 . C3 . F2 . C3 . | C3 . G2 . C3 . . . | Bb2 . F3 . Bb2 . F3 . | C3 . G2 . C3 . G2 . | F2 . Bb2 . C3 . C2 . | F2 . C3 . F2 . . .`,
      drums: 's s s . s . s . | k . s . k s s s' },
    // 3 Founders' Hall: a stately minuet in G
    realm3: { bpm: 100, lead: 'tri',
      melody: `G5 - B5 - D6 - G5 - | F#5 - A5 - D5 - - - | E5 - G5 - C6 - B5 - | A5 - - - . . D5 - | G5 - B5 - D6 - C6 - | B5 - A5 - G5 - E5 - | D5 - G5 - F#5 - A5 - | G5 - - - . . . .`,
      bass: `G2 . D3 . G2 . D3 . | D3 . A3 . D3 . A3 . | C3 . G3 . E3 . B3 . | D3 . A3 . D3 . . . | G2 . D3 . E3 . B3 . | C3 . G3 . E3 . B3 . | D3 . A3 . D2 . A2 . | G2 . D3 . G2 . . .`,
      drums: 'k . . . h . . . | k . . . h . s .' },
    // 4 The Frontier: a river-boat fiddle tune in A
    realm4: { bpm: 132, lead: 'square',
      melody: `A4 C#5 E5 A5 E5 - C#5 - | D5 F#5 A5 F#5 E5 - . . | A4 C#5 E5 A5 B5 - G#5 - | A5 - - - E5 - . . | F#5 A5 D6 A5 C#6 - A5 - | B5 G#5 E5 G#5 A5 - F#5 - | E5 - C#5 - B4 - G#4 - | A4 - - - . . . .`,
      bass: `A2 E3 A2 E3 A2 E3 A2 E3 | D3 A3 D3 A3 A2 E3 A2 E3 | A2 E3 A2 E3 E2 B2 E2 B2 | A2 E3 A2 E3 A2 . . . | D3 A3 D3 A3 A2 E3 A2 E3 | E2 B2 E2 B2 D3 A3 D3 A3 | A2 E3 A2 E3 E2 B2 E2 B2 | A2 E3 A2 . . . . .`,
      drums: 'k h s h k h s h' },
    // 5 The Divided House: a slow, serious hymn in E minor
    realm5: { bpm: 80, lead: 'tri',
      melody: `E5 - - - G5 - - - | F#5 - E5 - D5 - - - | E5 - - - B4 - - - | E5 - - - - - . . | G5 - - - A5 - B5 - | A5 - G5 - F#5 - - - | E5 - D5 - B4 - D5 - | E5 - - - - - . .`,
      bass: `E2 . B2 . E2 . B2 . | D3 . A2 . D3 . A2 . | C3 . G2 . B2 . F#2 . | E2 . B2 . E2 . . . | C3 . G2 . D3 . A2 . | D3 . A2 . B2 . F#2 . | C3 . G2 . B2 . F#2 . | E2 . B2 . E2 . . .`,
      drums: 'k . . . . . . . | k . . . s . . .' },
    // 6 Iron Cities: a busy factory rag in C
    realm6: { bpm: 128, lead: 'square',
      melody: `C5 E5 G5 E5 A5 G5 E5 C5 | D5 F5 A5 F5 G5 - . . | E5 G5 C6 G5 A5 G5 E5 C5 | D5 - G5 - C5 - . . | C5 E5 G5 E5 A5 G5 E5 C5 | F5 A5 C6 A5 G5 E5 C5 E5 | D5 F5 E5 D5 B4 - D5 - | C5 - - - . . . .`,
      bass: `C3 G3 C3 G3 A2 E3 A2 E3 | D3 A3 D3 A3 G2 D3 G2 D3 | C3 G3 C3 G3 A2 E3 A2 E3 | D3 A3 G2 D3 C3 . . . | C3 G3 C3 G3 A2 E3 A2 E3 | F3 C4 F3 C4 C3 G3 C3 G3 | G2 D3 G2 D3 G2 D3 G2 D3 | C3 G3 C3 . . . . .`,
      drums: 'k h s h k k s h' },
    // 7 The Stormy Century: a swing tune in B flat
    realm7: { bpm: 120, lead: 'square',
      melody: `Bb4 - D5 F5 Bb5 - A5 F5 | G5 - Eb5 - C5 - . . | D5 - F5 Bb5 D6 - C6 Bb5 | A5 - - - F5 - . . | Bb5 - A5 G5 F5 - D5 - | Eb5 - G5 - C6 - A5 - | Bb5 - F5 - D5 - C5 - | Bb4 - - - . . . .`,
      bass: `Bb2 . F3 . Bb2 . F3 . | Eb3 . Bb3 . C3 . G3 . | Bb2 . F3 . Bb2 . F3 . | F2 . C3 . F2 . . . | Bb2 . F3 . G2 . D3 . | Eb3 . Bb3 . F3 . C4 . | Bb2 . F3 . F2 . C3 . | Bb2 . F3 . Bb2 . . .`,
      drums: 'k . s h k h s h' },
    // 8 Modern Horizon: a hopeful, wide tune in E flat
    realm8: { bpm: 108, lead: 'tri',
      melody: `Eb5 - G5 - Bb5 - Eb6 - | D6 - C6 - Bb5 - . . | Ab5 - C6 - Eb6 - D6 - | C6 - - - Bb5 - . . | G5 - Bb5 - Eb6 - F6 - | G6 - F6 - Eb6 - C6 - | Bb5 - Ab5 - G5 - F5 - | Eb5 - - - . . . .`,
      bass: `Eb3 . Bb3 . Eb3 . Bb3 . | Bb2 . F3 . Bb2 . F3 . | Ab2 . Eb3 . Ab2 . Eb3 . | F3 . C4 . Bb2 . . . | Eb3 . Bb3 . C3 . G3 . | Ab2 . Eb3 . Ab2 . Eb3 . | Bb2 . F3 . Bb2 . F3 . | Eb3 . Bb3 . Eb3 . . .`,
      drums: 'k . . h s . . h | k . h . s . k .' }
  },
  // the engine's own words, swapped in order (longer ones first)
  swaps: {
    en: [['🧭', '🏮'], ['Christopher', 'Beacon'], ['living compass', 'flying lantern'], ['compass stone', 'journal stone'], ['Compass arrow', 'Lantern arrow'],
      ['Great Atlas', 'Great Journal'], ['Atlas pages', 'Journal pages'], ['atlas pages', 'journal pages'], ['Atlas page', 'Journal page'], ['atlas page', 'journal page'],
      ['Atlas scraps', 'Journal scraps'], ['atlas scraps', 'journal scraps'], ['atlas scrap', 'journal scrap'], ['the atlas', 'the journal'], ['Worldwalker', 'Trailwalker'],
      ['Region sense', 'Big-picture sense'], ['Region master', 'Big-picture master']],
    es: [['🧭', '🏮'], ['Christopher', 'Beacon'], ['brújula viva', 'farol volador'], ['piedra de la brújula', 'piedra del diario'], ['piedra brújula', 'piedra del diario'], ['Flecha brújula', 'Flecha del farol'],
      ['el Gran Atlas', 'el Gran Diario'], ['Gran Atlas', 'Gran Diario'], ['Páginas del atlas', 'Páginas del diario'], ['páginas del atlas', 'páginas del diario'], ['Página del atlas', 'Página del diario'], ['página del atlas', 'página del diario'],
      ['Pedazos del atlas', 'Pedazos del diario'], ['pedazos del atlas', 'pedazos del diario'], ['pedazo del atlas', 'pedazo del diario'], ['del atlas', 'del diario'], ['Caminante del Mundo', 'Caminante del Sendero']],
    fa: [['🧭', '🏮'], ['کریستوفر', 'بیکن'], ['قطب‌نمای زنده', 'فانوس پرنده'], ['سنگ قطب‌نما', 'سنگ روزنامچه'], ['اطلس بزرگ', 'روزنامچهٔ بزرگ'], ['اطلس', 'روزنامچه'], ['جهان‌گرد', 'رهرو راه']]
  },
  S: {
    story: { en: 'The Grump tore the Great Journal into 24 pages and scattered them across American history. People are forgetting their own story. You are a Trailwalker apprentice. With Beacon, your flying lantern, win the pages back by learning each moment.',
      es: 'El Gruñón rompió el Gran Diario en 24 páginas y las esparció por la historia de Estados Unidos. La gente está olvidando su propia historia. Eres aprendiz de Caminante del Sendero. Con Beacon, tu farol volador, recupera las páginas aprendiendo cada momento.',
      fa: 'غرغرو روزنامچهٔ بزرگ را به ۲۴ صفحه پاره کرد و در تاریخ امریکا پراکنده ساخت. مردم داستان خود را فراموش می‌کنند. تو شاگرد رهرو راه هستی. با بیکن، فانوس پرنده‌ات، با یاد گرفتن هر زمان صفحه‌ها را پس بگیر.' },
    storyOne: { en: 'The Grump tore the Great Journal. Win back its pages, one moment at a time!', es: '¡El Gruñón rompió el Gran Diario! Recupera sus páginas, un momento a la vez.', fa: 'غرغرو روزنامچهٔ بزرگ را پاره کرد! صفحه‌هایش را یکی یکی پس بگیر.' },
    map: { en: 'Trail map', es: 'Mapa del sendero', fa: 'نقشهٔ راه' },
    powers: { en: 'Five history powers', es: 'Cinco poderes de historia', fa: 'پنج نیروی تاریخ' },
    bag: { en: 'Bag · one tool from each realm', es: 'Bolsa · una herramienta de cada reino', fa: 'کوله · یک ابزار از هر سرزمین' },
    chrisJob: { en: 'Beacon is your flying lantern: he shows the way, tells you what to do next, and trades hints for coins.', es: 'Beacon es tu farol volador: te muestra el camino, te dice qué hacer después y cambia pistas por monedas.', fa: 'بیکن فانوس پرندهٔ توست: راه را نشان می‌دهد، می‌گوید بعد چه کنی، و در برابر سکه کمک می‌دهد.' }
  }
};
