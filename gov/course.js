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
  // one song for each realm (our own tunes, made in code like the engine's; see game/engine/music.js for how notes are written)
  songs: {
    // 1 The Old Lands: an old harp tune in D (dorian)
    realm1: { bpm: 96, lead: 'pluck',
      melody: `D5 - F5 - A5 - G5 F5 | E5 - D5 - C5 - D5 - | F5 - A5 - C6 - B5 A5 | G5 - - - . . A5 - | D6 - C6 - A5 - G5 F5 | G5 - A5 - F5 - E5 - | D5 - F5 - E5 - C5 - | D5 - - - . . . .`,
      bass: `D3 . A3 . D3 . A3 . | C3 . G3 . C3 . G3 . | F3 . C4 . F3 . C4 . | G3 . D4 . G3 . . . | D3 . A3 . D3 . A3 . | C3 . G3 . A3 . E3 . | Bb2 . F3 . C3 . G3 . | D3 . A3 . D3 . . .`,
      drums: 'k . . h s . . h' },
    // 2 Charter Hall: a fife-and-drum march in G
    realm2: { bpm: 120, lead: 'square',
      melody: `G5 - B5 - D6 - B5 G5 | A5 - F#5 - D5 - . . | G5 - A5 - B5 - C6 B5 | A5 - - - . . D5 - | E5 - G5 - B5 - A5 G5 | F#5 - A5 - D6 - C6 A5 | B5 - G5 - A5 - F#5 - | G5 - - - . . . .`,
      bass: `G2 . D3 . G2 . D3 . | D3 . A2 . D3 . A2 . | G2 . D3 . G2 . D3 . | D3 . A2 . D3 . . . | C3 . G2 . C3 . G2 . | D3 . A2 . D3 . A2 . | G2 . C3 . D3 . D2 . | G2 . D3 . G2 . . .`,
      drums: 's s s . s . s . | k . s . k s s s' },
    // 3 Liberty Commons: a gentle hymn in F
    realm3: { bpm: 92, lead: 'tri',
      melody: `F5 - - - A5 - C6 - | Bb5 - A5 - G5 - - - | A5 - - - F5 - G5 - | A5 - - - - - . . | C6 - - - Bb5 - A5 - | G5 - A5 - Bb5 - - - | A5 - G5 - F5 - E5 - | F5 - - - - - . .`,
      bass: `F3 . C4 . F3 . C4 . | Bb2 . F3 . C3 . G3 . | F3 . C4 . D3 . A3 . | F3 . C4 . F3 . . . | A2 . E3 . Bb2 . F3 . | C3 . G3 . Bb2 . F3 . | F3 . C3 . C3 . G2 . | F2 . C3 . F2 . . .`,
      drums: 'k . h . . . h . | k . h . s . h .' },
    // 4 Ballot Fair: a bouncy fair tune in C
    realm4: { bpm: 132, lead: 'square',
      melody: `C5 E5 G5 E5 C6 - G5 - | A5 F5 A5 C6 F5 - . . | G5 B5 D6 B5 G5 - F5 - | E5 - G5 - C5 - . . | C5 E5 G5 E5 C6 - G5 - | A5 C6 A5 F5 D5 - F5 - | E5 G5 F5 D5 B4 - D5 - | C5 - - - . . . .`,
      bass: `C3 G3 C3 G3 C3 G3 C3 G3 | F3 C4 F3 C4 F3 C4 F3 C4 | G3 D4 G3 D4 G3 D4 G3 D4 | C3 G3 C3 G3 C3 G3 C3 G3 | C3 G3 C3 G3 E3 G3 E3 G3 | F3 C4 F3 C4 D3 A3 D3 A3 | G3 D4 G3 D4 G2 D3 G2 D3 | C3 G3 C3 . . . . .`,
      drums: 'k h s h k h s h' },
    // 5 Capitol Hill: a brass fanfare in B flat
    realm5: { bpm: 116, lead: 'square',
      melody: `F5 - Bb5 - D6 - F6 - | D6 - - - Bb5 - . . | C6 - D6 - Eb6 - C6 - | D6 - - - F5 - . . | Bb5 - D6 - F6 - D6 - | Eb6 - C6 - A5 - F5 - | G5 - A5 - C6 - A5 - | Bb5 - - - . . . .`,
      bass: `Bb2 . F3 . Bb2 . F3 . | Bb2 . F3 . D3 . F3 . | Eb3 . Bb3 . F3 . C4 . | Bb2 . F3 . Bb2 . . . | Bb2 . F3 . D3 . F3 . | Eb3 . Bb3 . F3 . C4 . | Eb3 . Bb3 . F3 . C3 . | Bb2 . F3 . Bb2 . . .`,
      drums: 'k . s . k k s . | k . s . k . s s' },
    // 6 The Executive Mansion: a stately dance in D
    realm6: { bpm: 100, lead: 'tri',
      melody: `D5 - F#5 - A5 - D6 - | C#6 - B5 - A5 - - - | B5 - G5 - E5 - G5 - | F#5 - - - . . A5 - | D6 - C#6 - B5 - A5 - | G5 - B5 - E5 - G5 - | F#5 - E5 - D5 - C#5 - | D5 - - - . . . .`,
      bass: `D3 . A3 . D3 . A3 . | A2 . E3 . A2 . E3 . | G2 . D3 . E3 . B3 . | D3 . A3 . D3 . . . | B2 . F#3 . G2 . D3 . | E3 . B3 . A2 . E3 . | D3 . A2 . A2 . E3 . | D3 . A3 . D3 . . .`,
      drums: 'k . . . h . . . | k . . . h . s .' },
    // 7 Courthouse Heights: a careful, thinking tune in A minor
    realm7: { bpm: 104, lead: 'pluck',
      melody: `A4 - C5 - E5 - A5 - | G#5 - - - E5 - . . | F5 - E5 - D5 - C5 - | B4 - - - E5 - . . | A5 - G5 - F5 - E5 - | D5 - F5 - B4 - D5 - | C5 - B4 - A4 - G#4 - | A4 - - - . . . .`,
      bass: `A2 . E3 . A2 . E3 . | E2 . B2 . E2 . B2 . | D3 . A3 . A2 . E3 . | E2 . B2 . E2 . . . | F2 . C3 . C3 . G2 . | D3 . A2 . E2 . B2 . | A2 . E3 . E2 . B2 . | A2 . E3 . A2 . . .`,
      drums: 'k . h . s . h . | k . h . s . k .' },
    // 8 The World Harbor: a sea song in D
    realm8: { bpm: 124, lead: 'square',
      melody: `A4 - D5 - D5 - F#5 E5 | D5 - A4 - . . A4 - | B4 - E5 - E5 - G5 F#5 | E5 - - - . . A4 - | D5 - F#5 - A5 - F#5 D5 | G5 - E5 - C#5 - A4 - | B4 - D5 - E5 - C#5 - | D5 - - - . . . .`,
      bass: `D3 . A2 . D3 . A2 . | D3 . A2 . D3 . A2 . | E3 . B2 . E3 . B2 . | A2 . E3 . A2 . . . | D3 . A2 . D3 . A2 . | G2 . D3 . A2 . E3 . | G2 . D3 . A2 . E3 . | D3 . A2 . D3 . . .`,
      drums: 'k . h k s . h .' }
  },
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
