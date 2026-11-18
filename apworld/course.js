/* HISTORYWALKER · AP World History: Modern, Units 1-4 (c. 1200-1750). The same engine as Worldwalker (game/engine),
   with the HD look (hd: true, game/engine/hd.js) and the whole game in one file (tools/build-one.js).
   English only, at AP level. Episodes live in apworld/episodes/ (one per AP topic: 1.1 ... 4.8). */
window.WW_COURSE = {
  id: 'historywalker', title: 'HISTORYWALKER', name: 'HistoryWalker', sub: 'AP WORLD · 1200–1750', saveKey: 'historywalker.save.v1', guide: 'owl', guideSmall: true, icon: '🦉', hd: true, recall: true, reflectCheck: true, village: true, bossNeed: 5, langs: ['en'], readingScale: 2,
  credit: 'Lessons adapted from the World History Project (OER Project) AP World History course on Khan Academy, CC BY-NC 4.0. Game by Gabriel Elias, Alexandria City High School.',
  episodes: [['1.1', 1], ['1.2', 1], ['1.3', 1], ['1.4', 1], ['1.5', 1], ['1.6', 1], ['1.7', 1], ['2.1', 2], ['2.2', 2], ['2.3', 2], ['2.4', 2], ['2.5', 2], ['2.6', 2], ['2.7', 2],
    ['3.1', 3], ['3.2', 3], ['3.3', 3], ['3.4', 3], ['4.1', 4], ['4.2', 4], ['4.3', 4], ['4.4', 4], ['4.5', 4], ['4.6', 4], ['4.7', 4], ['4.8', 4]],
  realms: [
    { en: 'Unit 1 · The Global Tapestry' },
    { en: 'Unit 2 · Networks of Exchange' },
    { en: 'Unit 3 · Land-Based Empires' },
    { en: 'Unit 4 · Transoceanic Interconnections' }],
  // the five powers: history thinking skills (same keys as Worldwalker, so saves and the Sheet work the same)
  themes: [
    { icon: '🔗', name: { en: 'Causation' }, full: { en: 'Causation' } },
    { icon: '⏳', name: { en: 'Continuity & change' }, full: { en: 'Continuity and Change' } },
    { icon: '⚖️', name: { en: 'Comparison' }, full: { en: 'Comparison' } },
    { icon: '📜', name: { en: 'Sourcing' }, full: { en: 'Sourcing and Situation' } },
    { icon: '🌐', name: { en: 'Context' }, full: { en: 'Contextualization' } }],
  // the tools you earn (same ids as Worldwalker, so their secrets work the same: the sail crosses deep water, and so on).
  // 2.3 (the Atlantic slave trade) and 7.3 (the Holocaust) give no tool: nothing there is a prize
  tools: [], // no tools to earn: every episode stands on its own
  swaps: {
    en: [['Grumplings', 'shades'], ['Grumpling', 'shade'], ["Grump's helpers", "Void's shades"], ['The Grump is FURIOUS!', 'The Void is ENRAGED!'], ['Grump', 'Void'], ['Christopher', 'Quill'], ['living compass', 'scholar owl'], ['compass stone', 'time stone'], ['Compass arrow', 'Time arrow'],
      ['Great Atlas', 'Great Chronicle'], ['Atlas pages', 'Chronicle pages'], ['atlas pages', 'chronicle pages'], ['Atlas page', 'Chronicle page'], ['atlas page', 'chronicle page'],
      ['Atlas scraps', 'Chronicle scraps'], ['atlas scraps', 'chronicle scraps'], ['atlas scrap', 'chronicle scrap'], ['the atlas', 'the chronicle'], ['Worldwalker', 'HistoryWalker'],
      ['Region sense', 'Big-picture sense'], ['Region master', 'Big-picture master']],
    es: [['Christopher', 'Tock'], ['brújula viva', 'reloj de arena vivo'], ['piedra de la brújula', 'piedra del tiempo'], ['piedra brújula', 'piedra del tiempo'], ['Flecha brújula', 'Flecha del tiempo'],
      ['el Gran Atlas', 'la Gran Crónica'], ['Gran Atlas', 'Gran Crónica'], ['Páginas del atlas', 'Páginas de la crónica'], ['páginas del atlas', 'páginas de la crónica'], ['Página del atlas', 'Página de la crónica'], ['página del atlas', 'página de la crónica'],
      ['Pedazos del atlas', 'Pedazos de la crónica'], ['pedazos del atlas', 'pedazos de la crónica'], ['pedazo del atlas', 'pedazo de la crónica'], ['del atlas', 'de la crónica'], ['Caminante del Mundo', 'Caminante del Tiempo']],
    fa: [['کریستوفر', 'تاک'], ['قطب‌نمای زنده', 'ساعت ریگی زنده'], ['سنگ قطب‌نما', 'سنگ زمان'], ['اطلس بزرگ', 'تاریخ‌نامهٔ بزرگ'], ['اطلس', 'تاریخ‌نامه'], ['جهان‌گرد', 'زمان‌گرد']]
  },
  // the Village of Ages (village.js): one calm tune in F major that grows fuller with each era the village reaches
  songs: {
    village1: { bpm: 88, lead: 'pluck',
      melody: `F5 - A5 - C6 - A5 G5 | F5 - - - C5 - D5 - | E5 - G5 - Bb5 - A5 G5 | A5 - - - - - . . |
               F5 - A5 - C6 - D6 C6 | Bb5 - A5 - G5 - F5 - | G5 - A5 - G5 E5 C5 E5 | F5 - - - - - . .`,
      bass: `F3 - - - C3 - - - | F3 - - - Bb2 - - - | C3 - - - G2 - - - | F3 - - - - - - - |
             F3 - - - A2 - - - | Bb2 - - - D3 - - - | C3 - - - E3 - - - | F3 - - - - - - -`, drums: '' },
    village2: { bpm: 92, lead: 'pluck',
      melody: `F5 - A5 - C6 - A5 G5 | F5 - - - C5 - D5 - | E5 - G5 - Bb5 - A5 G5 | A5 - - - - - . . |
               F5 - A5 - C6 - D6 C6 | Bb5 - A5 - G5 - F5 - | G5 - A5 - G5 E5 C5 E5 | F5 - - - - - . .`,
      bass: `F3 . C4 . F3 . C4 . | F3 . C4 . Bb2 . F3 . | C3 . G3 . C3 . G3 . | F3 . C4 . F3 . A3 . |
             F3 . C4 . F3 . C4 . | Bb2 . F3 . Bb2 . D3 . | C3 . G3 . C3 . E3 . | F3 . C4 . F3 . . .`,
      drums: 'c . . c . . c . | c . . c . h c .' },
    village3: { bpm: 96, lead: 'tri',
      melody: `F5 - A5 - C6 - A5 G5 | F5 - - - C5 - D5 - | E5 - G5 - Bb5 - A5 G5 | A5 - - - - - C6 - |
               F5 - A5 - C6 - D6 C6 | Bb5 - A5 - G5 - F5 - | G5 - A5 - G5 E5 C5 E5 | F5 - - - - - . .`,
      bass: `F3 . C4 . F3 . C4 . | F3 . C4 . Bb2 . F3 . | C3 . G3 . C3 . G3 . | F3 . C4 . F3 . A3 . |
             F3 . C4 . F3 . C4 . | Bb2 . F3 . Bb2 . D3 . | C3 . G3 . C3 . E3 . | F3 . C4 . F3 . . .`,
      drums: 'k . h c s . h . | k . h c s h h .' },
    village4: { bpm: 104, lead: 'square',
      melody: `F5 - A5 - C6 - A5 G5 | F5 - - - C5 - D5 - | E5 - G5 - Bb5 - A5 G5 | A5 - - - C6 - D6 - |
               F6 - E6 - D6 - C6 A5 | Bb5 - A5 - G5 - F5 - | G5 - A5 - G5 E5 C5 E5 | F5 - - - - - . .`,
      bass: `F2 F3 F2 F3 F2 F3 F2 F3 | F2 F3 F2 F3 Bb2 Bb3 Bb2 Bb3 | C3 C4 C3 C4 C3 C4 C3 C4 | F2 F3 F2 F3 F2 F3 F2 F3 |
             F2 F3 F2 F3 F2 F3 F2 F3 | Bb2 Bb3 Bb2 Bb3 D3 D4 D3 D4 | C3 C4 C3 C4 C3 C4 C3 C4 | F2 F3 F2 F3 F2 F3 F2 F3`,
      drums: 'k h c h s h c h | k h c k s h c h' },
    research: { bpm: 150, lead: 'tri', once: true,
      melody: 'C5 F5 A5 C6 - - A5 C6 F6 - - - - - - .', bass: 'F3 . C4 . F3 - - . C3 . F3 - - - - .', drums: 'k . . . s . . . k . s . k s k .' }
  },
  S: {
    scrapTip: { en: 'Psst! {n} chronicle scraps are hidden in this place, often off the main road. Each one gives coins, and finding them all earns a star.' },
    rc_claim: { en: 'A claim: answer the question in a full sentence.' },
    rc_evidence: { en: 'Evidence: say why, or what shows it (because…, for example…).' },
    rc_fact: { en: 'A specific fact: a name, place, date or number from this episode.' },
    rc_short: { en: 'Write your answer first: at least 2 full sentences, with a claim, evidence and a specific fact.' },
    story: { en: 'The Void tore the Great Chronicle into 26 pages and scattered them across the world, from 1200 to 1750. People are forgetting how their states rose, traded and believed. You are a HistoryWalker. With Quill, your scholar owl, win the pages back by learning each place and time.' },
    storyOne: { en: 'The Void tore the Great Chronicle. Win back its pages, one place and time at a time!' },
    map: { en: 'World map', es: 'Mapa', fa: 'نقشه' },
    powers: { en: 'Five history powers', es: 'Cinco poderes de historia', fa: 'پنج نیروی تاریخ' },
    bag: { en: 'Bag · one tool from each era', es: 'Bolsa · una herramienta de cada época', fa: 'کوله · یک ابزار از هر دوره' },
    chrisJob: { en: 'Quill is your scholar owl: he shows the way, tells you what to do next, and trades hints for coins.', es: 'Tock es tu reloj de arena vivo: te muestra el camino, te dice qué hacer después y cambia pistas por monedas.', fa: 'تاک ساعت ریگی زندهٔ توست: راه را نشان می‌دهد، می‌گوید بعد چه کنی، و در برابر سکه کمک می‌دهد.' }
  }
};
