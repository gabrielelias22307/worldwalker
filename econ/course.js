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
  // one song for each realm (our own tunes, made in code like the engine's; see game/engine/music.js for how notes are written)
  songs: {
    // 1 Market Valley: a busy market-day tune in C
    realm1: { bpm: 126, lead: 'square',
      melody: `C5 - E5 G5 A5 - G5 E5 | F5 - A5 - G5 - . . | E5 - G5 C6 B5 - A5 G5 | A5 - - - G5 - . . | C5 - E5 G5 A5 - G5 E5 | F5 - D5 - E5 - C5 - | D5 - F5 - E5 - D5 - | C5 - - - . . . .`,
      bass: `C3 . G3 . C3 . G3 . | F3 . C4 . F3 . C4 . | C3 . G3 . E3 . G3 . | F3 . C4 . G3 . . . | C3 . G3 . C3 . G3 . | F3 . A3 . C3 . G3 . | G3 . D4 . G2 . D3 . | C3 . G3 . C3 . . .`,
      drums: 'k . h s k h s h' },
    // 2 Mint Town: a ticking clockwork tune in G (coins being counted)
    realm2: { bpm: 112, lead: 'pluck',
      melody: `G5 D5 G5 B5 A5 - F#5 - | G5 - D5 - B4 - . . | C5 E5 G5 C6 B5 - A5 - | G5 - - - D5 - . . | E5 G5 B5 G5 A5 - F#5 - | G5 B5 D6 B5 C6 - A5 - | B5 - G5 - A5 - F#5 - | G5 - - - . . . .`,
      bass: `G2 . D3 . G2 . D3 . | G2 . D3 . G2 . D3 . | C3 . G3 . C3 . G3 . | D3 . A3 . D3 . . . | E3 . B3 . D3 . A3 . | G2 . D3 . A2 . E3 . | D3 . A3 . D2 . A2 . | G2 . D3 . G2 . . .`,
      drums: 'c . c . c . c h' },
    // 3 Budget Bay: an easy seaside stroll in F
    realm3: { bpm: 100, lead: 'tri',
      melody: `F5 - G5 - A5 - C6 - | A5 - - - F5 - . . | G5 - A5 - Bb5 - D6 - | C6 - - - A5 - . . | F5 - A5 - C6 - A5 - | Bb5 - G5 - E5 - G5 - | F5 - E5 - D5 - E5 - | F5 - - - . . . .`,
      bass: `F2 . C3 . F3 . C3 . | F2 . C3 . A2 . C3 . | Bb2 . F3 . Bb2 . F3 . | C3 . G3 . C3 . . . | F2 . C3 . F3 . C3 . | Bb2 . F3 . C3 . G3 . | Bb2 . F3 . C3 . G2 . | F2 . C3 . F2 . . .`,
      drums: 'k . h . s . h h' },
    // 4 Paycheck Port: a cheerful work song in D
    realm4: { bpm: 120, lead: 'square',
      melody: `D5 - F#5 - A5 - A5 B5 | A5 - F#5 - D5 - . . | E5 - G5 - B5 - B5 C#6 | B5 - G5 - E5 - . . | F#5 - A5 - D6 - C#6 B5 | A5 - B5 - G5 - E5 - | F#5 - E5 - D5 - C#5 - | D5 - - - . . . .`,
      bass: `D3 . A3 . D3 . A3 . | D3 . A3 . D3 . A3 . | E3 . B3 . E3 . B3 . | A2 . E3 . A2 . . . | D3 . A3 . B2 . F#3 . | G2 . D3 . A2 . E3 . | D3 . A2 . A2 . E3 . | D3 . A3 . D3 . . .`,
      drums: 'k . s . k k s .' },
    // 5 Credit Crossing: a train-crossing shuffle in A minor
    realm5: { bpm: 132, lead: 'square',
      melody: `A4 C5 E5 A5 G5 - E5 - | F5 - D5 - E5 - . . | A4 C5 E5 A5 B5 - G#5 - | A5 - - - E5 - . . | F5 A5 C6 A5 G5 - E5 - | F5 - D5 - B4 - D5 - | C5 - B4 - A4 - G#4 - | A4 - - - . . . .`,
      bass: `A2 E3 A2 E3 A2 E3 A2 E3 | D3 A3 D3 A3 E2 B2 E2 B2 | A2 E3 A2 E3 E2 B2 E2 B2 | A2 E3 A2 E3 A2 . . . | F2 C3 F2 C3 C3 G3 C3 G3 | D3 A3 D3 A3 E2 B2 E2 B2 | A2 E3 A2 E3 E2 B2 E2 B2 | A2 E3 A2 . . . . .`,
      drums: 'k h s h k h s h' },
    // 6 Investor Peaks: a climbing mountain tune in E flat
    realm6: { bpm: 108, lead: 'tri',
      melody: `Eb5 - G5 - Bb5 - Eb6 - | D6 - Bb5 - G5 - . . | F5 - Ab5 - C6 - F6 - | Eb6 - C6 - Ab5 - . . | G5 - Bb5 - Eb6 - D6 - | C6 - Ab5 - F5 - Ab5 - | G5 - F5 - Eb5 - D5 - | Eb5 - - - . . . .`,
      bass: `Eb3 . Bb3 . Eb3 . Bb3 . | Eb3 . Bb3 . G3 . Bb3 . | F3 . C4 . F3 . C4 . | Ab2 . Eb3 . Ab2 . . . | Eb3 . Bb3 . G3 . Bb3 . | Ab2 . Eb3 . F3 . C4 . | Bb2 . F3 . Bb2 . F3 . | Eb3 . Bb3 . Eb3 . . .`,
      drums: 'k . . h s . . h | k . h . s . k .' },
    // 7 Safe Harbor: a calm lighthouse lullaby in C
    realm7: { bpm: 84, lead: 'tri',
      melody: `E5 - - - G5 - - - | F5 - E5 - D5 - - - | C5 - - - E5 - - - | D5 - - - - - . . | E5 - - - A5 - G5 - | F5 - - - E5 - D5 - | C5 - D5 - E5 - D5 - | C5 - - - - - . .`,
      bass: `C3 . G3 . C3 . G3 . | G2 . D3 . G2 . D3 . | A2 . E3 . A2 . E3 . | G2 . D3 . G2 . . . | C3 . G3 . A2 . E3 . | F2 . C3 . G2 . D3 . | F2 . C3 . G2 . D3 . | C3 . G3 . C3 . . .`,
      drums: 'k . . . h . . . | k . . . h . . .' },
    // 8 Future Fields: a hopeful, rising tune in G
    realm8: { bpm: 116, lead: 'square',
      melody: `G5 - A5 - B5 - D6 - | E6 - D6 - B5 - . . | C6 - B5 - A5 - G5 - | A5 - - - D5 - . . | G5 - B5 - D6 - G6 - | F#6 - E6 - D6 - B5 - | C6 - B5 - A5 - F#5 - | G5 - - - . . . .`,
      bass: `G2 . D3 . G2 . D3 . | C3 . G3 . E3 . B3 . | A2 . E3 . C3 . G3 . | D3 . A3 . D3 . . . | G2 . D3 . B2 . F#3 . | E3 . B3 . G2 . D3 . | C3 . G3 . D3 . A3 . | G2 . D3 . G2 . . .`,
      drums: 'k . s . k . s s' }
  },
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
