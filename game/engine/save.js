/* WORLDWALKER engine · languages, the saved hero, Passport Code, class Google Sheet */
(function () {
  const CFG = WW.CONFIG = Object.assign({
    SHEET_URL: '',          // paste the Apps Script web app URL here to turn on the class Sheet
    TEACHER_CODE: 'ATLAS',  // typed on the world map, opens every episode
    MODE: 'pages'           // 'pages' (GitHub Pages) or 'canvas' (one file uploaded to Canvas)
  }, window.WW_CONFIG || {});

  /* ---------------- episodes and tools ---------------- */
  WW.EPISODES = [
    ['1.1', 1], ['1.2', 1], ['1.3', 1], ['2.1', 2], ['2.2', 2], ['2.3', 2], ['3.1', 3], ['3.2', 3], ['3.3', 3],
    ['4.1', 4], ['4.2', 4], ['4.3', 4], ['5.1', 5], ['5.2', 5], ['5.3', 5], ['6.1', 6], ['6.2', 6], ['6.3', 6],
    ['7.1', 7], ['7.2', 7], ['7.3', 7], ['8.1', 8], ['8.2', 8], ['8.3', 8]].map(([id, realm]) => ({ id, realm }));
  WW.TOOLS = [
    { id: 'compass', ep: '1.3', icon: '🧭', name: { en: 'Compass Rose', es: 'Rosa de los vientos', fa: 'قطب‌نما' } },
    { id: 'canoe', ep: '2.3', icon: '🛶', name: { en: 'Canoe', es: 'Canoa', fa: 'قایق کوچک' } },
    { id: 'rail', ep: '3.3', icon: '🎫', name: { en: 'Rail Pass', es: 'Pase de tren', fa: 'کارت قطار' } },
    { id: 'gourd', ep: '4.3', icon: '🫙', name: { en: 'Water Gourd', es: 'Calabaza de agua', fa: 'کدوی آب' } },
    { id: 'key', ep: '5.3', icon: '🗝️', name: { en: 'Water Key', es: 'Llave del agua', fa: 'کلید آب' } },
    { id: 'cloak', ep: '6.3', icon: '🧥', name: { en: 'Monsoon Cloak', es: 'Capa del monzón', fa: 'بارانی موسمی' } },
    { id: 'seal', ep: '7.3', icon: '📜', name: { en: 'Trade Seal', es: 'Sello de comercio', fa: 'مهر تجارت' } },
    { id: 'sail', ep: '8.2', icon: '⛵', name: { en: 'Sail', es: 'Vela', fa: 'بادبان' } }];
  WW.REALMS = [null,
    { en: "Mapmaker's Valley", es: 'Valle del Cartógrafo', fa: 'درهٔ نقشه‌کش' },
    { en: 'The Americas', es: 'Las Américas', fa: 'قارهٔ امریکا' },
    { en: 'Europe, Russia & Central Asia', es: 'Europa, Rusia y Asia Central', fa: 'اروپا، روسیه و آسیای میانه' },
    { en: 'Sub-Saharan Africa', es: 'África subsahariana', fa: 'افریقای جنوب صحرا' },
    { en: 'North Africa & Southwest Asia', es: 'Norte de África y Suroeste de Asia', fa: 'شمال افریقا و جنوب غرب آسیا' },
    { en: 'South & Southeast Asia', es: 'Sur y Sureste de Asia', fa: 'جنوب و جنوب شرق آسیا' },
    { en: 'East Asia', es: 'Asia Oriental', fa: 'آسیای شرقی' },
    { en: 'Australia, the Pacific & the World', es: 'Australia, el Pacífico y el mundo', fa: 'آسترالیا، اقیانوس آرام و جهان' }];
  WW.THEMES = [
    { k: 'loc', icon: '📍', col: '#e04848', name: { en: 'Where', es: 'Dónde', fa: 'کجا' }, full: { en: 'Location', es: 'Ubicación', fa: 'موقعیت' } },
    { k: 'pla', icon: '🏞️', col: '#3fa34d', name: { en: 'What it is like', es: 'Cómo es', fa: 'چگونه است' }, full: { en: 'Place', es: 'Lugar', fa: 'مکان' } },
    { k: 'hei', icon: '🌱', col: '#d98e2b', name: { en: 'People & land', es: 'Gente y tierra', fa: 'مردم و زمین' }, full: { en: 'Human–Environment Interaction', es: 'Interacción ser humano–ambiente', fa: 'رابطهٔ انسان و محیط' } },
    { k: 'mov', icon: '🚚', col: '#2f7fd1', name: { en: 'On the move', es: 'En movimiento', fa: 'در حرکت' }, full: { en: 'Movement', es: 'Movimiento', fa: 'حرکت' } },
    { k: 'reg', icon: '🧩', col: '#8e5bd6', name: { en: 'Regions', es: 'Regiones', fa: 'منطقه‌ها' }, full: { en: 'Region', es: 'Región', fa: 'منطقه' } }];
  WW.epIndex = id => WW.EPISODES.findIndex(e => e.id === id);
  WW.epFile = id => 'ep-' + id.replace('.', '-') + '.html';

  /* ---------------- languages ---------------- */
  WW.lang = 'en';
  const langListeners = [];
  WW.onLang = fn => langListeners.push(fn);
  WW.L = t => (t == null ? '' : typeof t === 'string' || typeof t === 'number' ? String(t) : (t[WW.lang] || t.en || ''));
  WW.setLang = l => {
    WW.lang = l; WW.save.lang = l; WW.store();
    document.documentElement.lang = l === 'fa' ? 'fa' : l;
    langListeners.forEach(f => { try { f(l); } catch (e) { console.error(e); } });
  };
  WW.dir = () => (WW.lang === 'fa' ? 'rtl' : 'ltr');

  /* the game's own words */
  WW.S = {
    next: { en: 'Next', es: 'Siguiente', fa: 'بعدی' },
    back: { en: 'Back', es: 'Atrás', fa: 'برگشت' },
    close: { en: 'Close', es: 'Cerrar', fa: 'بستن' },
    easier: { en: 'Make it easier', es: 'Hazlo más fácil', fa: 'ساده‌ترش کن' },
    harder: { en: 'Show the full version', es: 'Ver la versión completa', fa: 'نسخهٔ کامل را نشان بده' },
    answer: { en: 'Answer', es: 'Responder', fa: 'جواب بده' },
    right: { en: 'Yes!', es: '¡Sí!', fa: 'بله!' },
    wrong: { en: 'Not quite.', es: 'No exactamente.', fa: 'نه کاملاً.' },
    tryAgain: { en: 'Try again', es: 'Inténtalo otra vez', fa: 'دوباره کوشش کن' },
    check: { en: 'Check', es: 'Revisar', fa: 'بررسی کن' },
    cont: { en: 'Continue', es: 'Continuar', fa: 'ادامه' },
    play: { en: 'Play', es: 'Jugar', fa: 'بازی کن' },
    start: { en: 'Start', es: 'Empezar', fa: 'شروع' },
    passport: { en: 'Passport', es: 'Pasaporte', fa: 'پاسپورت' },
    map: { en: 'World map', es: 'Mapa del mundo', fa: 'نقشهٔ جهان' },
    sound: { en: 'Sound', es: 'Sonido', fa: 'صدا' },
    music: { en: 'Music', es: 'Música', fa: 'موسیقی' },
    full: { en: 'Full screen', es: 'Pantalla completa', fa: 'تمام صفحه' },
    firstName: { en: 'First name only', es: 'Solo tu primer nombre', fa: 'فقط نام اول' },
    classCode: { en: 'Class code', es: 'Código de la clase', fa: 'کد صنف' },
    secret: { en: 'Secret number (4 digits)', es: 'Número secreto (4 dígitos)', fa: 'شمارهٔ مخفی (۴ رقم)' },
    pickLook: { en: 'Pick your look', es: 'Elige tu aspecto', fa: 'شکل خود را انتخاب کن' },
    skin: { en: 'Skin', es: 'Piel', fa: 'پوست' }, hair: { en: 'Hair', es: 'Pelo', fa: 'مو' }, hat: { en: 'Hat', es: 'Sombrero', fa: 'کلاه' },
    signIn: { en: 'Sign in to save your trip', es: 'Entra para guardar tu viaje', fa: 'برای ذخیرهٔ سفرت وارد شو' },
    haveCode: { en: 'Have a Passport Code? Paste it here', es: '¿Tienes un código de pasaporte? Pégalo aquí', fa: 'کد پاسپورت داری؟ اینجا بگذار' },
    useCode: { en: 'Use code', es: 'Usar código', fa: 'استفاده از کد' },
    badCode: { en: 'That code does not look right. Check each letter.', es: 'Ese código no parece correcto. Revisa cada letra.', fa: 'این کد درست به نظر نمی‌رسد. هر حرف را بررسی کن.' },
    codeOk: { en: 'Code accepted! Your hero is back.', es: '¡Código aceptado! Tu héroe volvió.', fa: 'کد قبول شد! قهرمانت برگشت.' },
    needName: { en: 'Type your first name to start.', es: 'Escribe tu primer nombre para empezar.', fa: 'برای شروع نام اول خود را بنویس.' },
    needPin: { en: 'The secret number must be 4 digits.', es: 'El número secreto debe tener 4 dígitos.', fa: 'شمارهٔ مخفی باید ۴ رقم باشد.' },
    welcomeBack: { en: 'Welcome back', es: 'Bienvenido de nuevo', fa: 'خوش برگشتی' },
    notYou: { en: 'Not you? Start a new hero', es: '¿No eres tú? Crea un héroe nuevo', fa: 'تو نیستی؟ قهرمان تازه بساز' },
    quest: { en: 'Quest', es: 'Misión', fa: 'مأموریت' },
    questFirst: { en: 'Christopher: "Someone here needs your help first. Look for the person with a gold ! above their head."', es: 'Christopher: "Primero alguien aquí necesita tu ayuda. Busca a la persona con un ! dorado sobre la cabeza."', fa: 'کریستوفر: «اول کسی اینجا به کمکت نیاز دارد. کسی را پیدا کن که بالای سرش یک ! طلایی است.»' },
    accept: { en: "I'll help!", es: '¡Te ayudo!', fa: 'کمک می‌کنم!' },
    newQuest: { en: 'New quest', es: 'Nueva misión', fa: 'مأموریت تازه' },
    questDone: { en: 'Quest complete!', es: '¡Misión cumplida!', fa: 'مأموریت تمام شد!' },
    qFindGiver: { en: 'find the person with !', es: 'busca a la persona con !', fa: 'کسی را با ! پیدا کن' },
    qTalkTo: { en: 'talk to', es: 'habla con', fa: 'گپ بزن با' },
    qReturn: { en: 'go back to', es: 'vuelve con', fa: 'برگرد پیش' },
    qBeat: { en: 'beat', es: 'vence a', fa: 'شکست بده' },
    qTrade: { en: 'trade with', es: 'intercambia con', fa: 'معامله کن با' },
    foundIt: { en: 'You found it!', es: '¡Lo encontraste!', fa: 'پیدایش کردی!' },
    traded: { en: 'Good trade!', es: '¡Buen intercambio!', fa: 'معاملهٔ خوب!' },
    busy: { en: 'Hello, traveler! I am busy right now. Maybe someone else here needs you first.', es: '¡Hola, viajero! Ahora estoy ocupado. Quizás alguien más aquí te necesita primero.', fa: 'سلام، مسافر! حالا مصروف هستم. شاید اول کس دیگری اینجا به تو نیاز دارد.' },
    goodLuck: { en: 'Thank you, traveler! Good luck on your journey.', es: '¡Gracias, viajero! Buena suerte en tu viaje.', fa: 'تشکر، مسافر! در سفرت موفق باشی.' },
    thanksAgain: { en: 'Thank you again for your help!', es: '¡Gracias otra vez por tu ayuda!', fa: 'باز هم از کمکت تشکر!' },
    talkTo: { en: 'Talk to everyone', es: 'Habla con todos', fa: 'با همه گپ بزن' },
    solve: { en: 'Solve the compass stone', es: 'Resuelve la piedra de la brújula', fa: 'سنگ قطب‌نما را حل کن' },
    face: { en: 'Face the Grump', es: 'Enfrenta al Gruñón', fa: 'با غرغرو روبه‌رو شو' },
    done: { en: 'Atlas page won back!', es: '¡Página del atlas recuperada!', fa: 'صفحهٔ اطلس پس گرفته شد!' },
    scraps: { en: 'Atlas scraps', es: 'Pedazos del atlas', fa: 'تکه‌های اطلس' },
    talkFirst: { en: 'Christopher: "Talk to everyone here first. Their words are the clues!"', es: 'Christopher: "Primero habla con todos aquí. ¡Sus palabras son las pistas!"', fa: 'کریستوفر: «اول با همه اینجا گپ بزن. حرف‌هایشان سرنخ است!»' },
    solveFirst: { en: 'Christopher: "The Grump is hiding. Solve the compass stone to call it out."', es: 'Christopher: "El Gruñón se esconde. Resuelve la piedra de la brújula para llamarlo."', fa: 'کریستوفر: «غرغرو پنهان است. سنگ قطب‌نما را حل کن تا بیرون بیاید.»' },
    ouch: { en: 'Ouch! The Grump got you.', es: '¡Ay! El Gruñón te tocó.', fa: 'آخ! غرغرو به تو خورد.' },
    rescued: { en: 'Christopher pulled you back to safety. Hearts refilled!', es: 'Christopher te llevó a un lugar seguro. ¡Corazones llenos!', fa: 'کریستوفر تو را به جای امن برد. قلب‌ها پر شد!' },
    shield: { en: 'Cloud shield', es: 'Escudo de nubes', fa: 'سپر ابر' },
    learned: { en: 'What you learned', es: 'Lo que aprendiste', fa: 'آنچه یاد گرفتی' },
    oneQ: { en: 'One question before you go', es: 'Una pregunta antes de irte', fa: 'یک سؤال پیش از رفتن' },
    reflectHint: { en: 'Type 1–3 sentences in English, Spanish or Dari.', es: 'Escribe 1–3 oraciones en inglés, español o dari.', fa: '۱ تا ۳ جمله به انگلیسی، هسپانوی یا دری بنویس.' },
    turnIn: { en: 'Turn in your work', es: 'Entrega tu trabajo', fa: 'کارت را تحویل بده' },
    copyWork: { en: 'Copy my work', es: 'Copiar mi trabajo', fa: 'کارم را کاپی کن' },
    download: { en: 'Download', es: 'Descargar', fa: 'دانلود' },
    copied: { en: 'Copied! Now paste it in the Canvas assignment.', es: '¡Copiado! Ahora pégalo en la tarea de Canvas.', fa: 'کاپی شد! حالا آن را در تکلیف کانواس بگذار.' },
    turnInNote: { en: 'Then paste (or upload) it in the Canvas assignment. Nothing is turned in until you do that step.', es: 'Luego pégalo (o súbelo) en la tarea de Canvas. Nada se entrega hasta que hagas ese paso.', fa: 'بعد آن را در تکلیف کانواس بگذار (یا آپلود کن). تا این کار را نکنی چیزی تحویل نمی‌شود.' },
    savedHere: { en: 'Saved on this computer ✓', es: 'Guardado en esta computadora ✓', fa: 'در این کمپیوتر ذخیره شد ✓' },
    savingSheet: { en: 'Saving to the class sheet…', es: 'Guardando en la hoja de la clase…', fa: 'ذخیره در جدول صنف…' },
    savedSheet: { en: 'Saved to the class sheet ✓', es: 'Guardado en la hoja de la clase ✓', fa: 'در جدول صنف ذخیره شد ✓' },
    sheetDown: { en: 'Could not reach the class sheet. Your Passport Code below has everything.', es: 'No se pudo llegar a la hoja de la clase. Tu código de pasaporte abajo tiene todo.', fa: 'به جدول صنف نرسیدیم. کد پاسپورت پایین همه چیز را دارد.' },
    yourCode: { en: 'Your Passport Code', es: 'Tu código de pasaporte', fa: 'کد پاسپورت تو' },
    codeHelp: { en: 'This code holds your whole hero. If your progress is ever missing, paste it on the start screen.', es: 'Este código guarda todo tu héroe. Si tu progreso falta, pégalo en la pantalla de inicio.', fa: 'این کد تمام قهرمانت را نگه می‌دارد. اگر پیشرفتت گم شد، آن را در صفحهٔ شروع بگذار.' },
    copyCode: { en: 'Copy code', es: 'Copiar código', fa: 'کاپی کد' },
    nextEp: { en: 'Next episode', es: 'Siguiente episodio', fa: 'قسمت بعدی' },
    nextCanvas: { en: 'Open the next episode from your Canvas module.', es: 'Abre el siguiente episodio desde tu módulo de Canvas.', fa: 'قسمت بعدی را از ماژول کانواس خود باز کن.' },
    stars: { en: 'Stars', es: 'Estrellas', fa: 'ستاره‌ها' },
    starWhy: { en: '★ finish the episode · ★ find all atlas scraps · ★ beat the Grump with 1 miss or less', es: '★ termina el episodio · ★ encuentra todos los pedazos · ★ vence al Gruñón con 1 error o menos', fa: '★ قسمت را تمام کن · ★ همهٔ تکه‌ها را پیدا کن · ★ غرغرو را با ۱ اشتباه یا کمتر شکست بده' },
    powers: { en: 'Five geography powers', es: 'Cinco poderes de geografía', fa: 'پنج نیروی جغرافیا' },
    bag: { en: 'Bag · one tool from each realm', es: 'Bolsa · una herramienta de cada reino', fa: 'کوله · یک ابزار از هر سرزمین' },
    stamps: { en: 'Stamps · one for every episode', es: 'Sellos · uno por cada episodio', fa: 'مهرها · یکی برای هر قسمت' },
    pages: { en: 'Atlas pages', es: 'Páginas del atlas', fa: 'صفحه‌های اطلس' },
    coins: { en: 'Coins', es: 'Monedas', fa: 'سکه‌ها' },
    gotTool: { en: 'New tool for your bag', es: 'Nueva herramienta para tu bolsa', fa: 'ابزار تازه برای کوله‌ات' },
    tapWord: { en: 'Tap a yellow word to see what it means.', es: 'Toca una palabra amarilla para ver qué significa.', fa: 'روی کلمهٔ زرد بزن تا معنایش را ببینی.' },
    clickStart: { en: 'Click the game, then use the arrow keys', es: 'Haz clic en el juego y usa las flechas', fa: 'روی بازی کلیک کن، بعد از کلیدهای جهت استفاده کن' },
    controls: { en: 'Arrow keys or WASD to walk · walk into people to talk · Space to use', es: 'Flechas o WASD para caminar · camina hacia las personas para hablar · Espacio para usar', fa: 'کلیدهای جهت یا WASD برای راه رفتن · برای گپ زدن به طرف مردم برو · Space برای استفاده' },
    pts: { en: 'points', es: 'puntos', fa: 'امتیاز' },
    goals: { en: 'To win this atlas page', es: 'Para ganar esta página del atlas', fa: 'برای بردن این صفحهٔ اطلس' },
    gTalk: { en: 'Talk to every person', es: 'Habla con cada persona', fa: 'با هر نفر گپ بزن' },
    gQuest: { en: 'Help the person with the gold !', es: 'Ayuda a la persona con el ! dorado', fa: 'به کسی که ! طلایی دارد کمک کن' },
    gStone: { en: 'Solve the glowing compass stone', es: 'Resuelve la piedra brújula que brilla', fa: 'سنگ قطب‌نمای درخشان را حل کن' },
    gBoss: { en: 'Beat the Grump in its question trial', es: 'Vence al Gruñón en su prueba de preguntas', fa: 'غرغرو را در آزمون سؤال‌هایش شکست بده' },
    gPage: { en: 'Claim the atlas page', es: 'Toma la página del atlas', fa: 'صفحهٔ اطلس را بگیر' },
    gBonus: { en: 'Bonus: pick up the 3 atlas scraps (coins and a star)', es: 'Extra: recoge los 3 pedazos del atlas (monedas y una estrella)', fa: 'جایزه: ۳ تکهٔ اطلس را جمع کن (سکه و یک ستاره)' },
    gDim: { en: 'The Grump has dimmed this land. Every goal you finish brings its color back.', es: 'El Gruñón oscureció esta tierra. Cada meta que cumples le devuelve el color.', fa: 'غرغرو این سرزمین را تیره کرده. هر هدفی که تمام کنی رنگش را برمی‌گرداند.' },
    claim: { en: 'Claim the atlas page', es: 'Toma la página del atlas', fa: 'صفحهٔ اطلس را بگیر' },
    pageAppears: { en: 'Christopher: "The Grump is gone and the land has its colors back! The atlas page is on the stone. Go and take it!"', es: 'Christopher: "¡El Gruñón se fue y la tierra recuperó sus colores! La página del atlas está sobre la piedra. ¡Ve a tomarla!"', fa: 'کریستوفر: «غرغرو رفت و رنگ‌های سرزمین برگشت! صفحهٔ اطلس روی سنگ است. برو و آن را بگیر!»' },
    grow: { en: 'How you grow', es: 'Cómo creces', fa: 'چگونه رشد می‌کنی' },
    growHow: { en: 'Answer a person: +1 · finish the quest: +2 · solve the stone: +2 · beat the Grump: +2. Each one adds to the power it is about.', es: 'Responder a una persona: +1 · terminar la misión: +2 · resolver la piedra: +2 · vencer al Gruñón: +2. Cada uno suma al poder del tema.', fa: 'جواب دادن به یک نفر: +۱ · تمام کردن مأموریت: +۲ · حل سنگ: +۲ · شکست غرغرو: +۲. هر کدام به نیروی همان موضوع اضافه می‌شود.' },
    growCoins: { en: 'Coins: answer a person +2, scrap +3, stone +5, quest +10, Grump +15. Spend 10 coins on a hint from Christopher in any trial or duel.', es: 'Monedas: responder +2, pedazo +3, piedra +5, misión +10, Gruñón +15. Gasta 10 monedas en una pista de Christopher en cualquier prueba o duelo.', fa: 'سکه: جواب +۲، تکه +۳، سنگ +۵، مأموریت +۱۰، غرغرو +۱۵. ۱۰ سکه برای یک کمک از کریستوفر در هر آزمون یا مسابقه خرج کن.' },
    lvl: { en: 'level', es: 'nivel', fa: 'سطح' },
    nextAt: { en: 'next at', es: 'siguiente en', fa: 'بعدی در' },
    maxed: { en: 'all unlocked', es: 'todo desbloqueado', fa: 'همه باز شد' },
    newPower: { en: 'New power!', es: '¡Nuevo poder!', fa: 'نیروی تازه!' },
    earned: { en: 'What you earned', es: 'Lo que ganaste', fa: 'آنچه به دست آوردی' },
    grr: [
      { en: 'GRRR! Wrong! This atlas page stays torn!', es: '¡GRRR! ¡Mal! ¡Esta página del atlas sigue rota!', fa: 'غررر! غلط! این صفحهٔ اطلس پاره می‌ماند!' },
      { en: 'HA! Is that all you know about this place?', es: '¡JA! ¿Eso es todo lo que sabes de este lugar?', fa: 'ها! همین قدر از این جا می‌دانی؟' },
      { en: 'GRRR! You will never win this page back!', es: '¡GRRR! ¡Nunca vas a recuperar esta página!', fa: 'غررر! هرگز این صفحه را پس نمی‌گیری!' }],
    furious: { en: 'The Grump is FURIOUS!', es: '¡El Gruñón está FURIOSO!', fa: 'غرغرو خیلی خشمگین است!' },
    hint: { en: 'Hint', es: 'Pista', fa: 'کمک' },
    hintFree: { en: 'free', es: 'gratis', fa: 'رایگان' },
    hintNoCoins: { en: 'You need 10 coins for a hint.', es: 'Necesitas 10 monedas para una pista.', fa: 'برای کمک ۱۰ سکه لازم داری.' },
    why_talk: { en: 'you answered', es: 'respondiste a', fa: 'جواب دادی به' },
    why_stone: { en: 'compass stone', es: 'piedra brújula', fa: 'سنگ قطب‌نما' },
    why_quest: { en: 'quest', es: 'misión', fa: 'مأموریت' },
    why_boss: { en: 'beat the Grump', es: 'venciste al Gruñón', fa: 'غرغرو را شکست دادی' },
    why_scrap: { en: 'atlas scrap', es: 'pedazo del atlas', fa: 'تکهٔ اطلس' },
    allRight: { en: 'All correct!', es: '¡Todo correcto!', fa: 'همه درست است!' },
    someWrong: { en: 'Some are in the wrong place. The red ones need to move.', es: 'Algunos están en el lugar equivocado. Los rojos deben moverse.', fa: 'بعضی در جای اشتباه هستند. سرخ‌ها باید جابجا شوند.' },
    pickItem: { en: 'Tap a card, then tap where it belongs.', es: 'Toca una tarjeta y luego toca dónde va.', fa: 'روی یک کارت بزن، بعد جایی که تعلق دارد را بزن.' },
    pickOrder: { en: 'Tap the cards in the right order.', es: 'Toca las tarjetas en el orden correcto.', fa: 'کارت‌ها را به ترتیب درست بزن.' },
    reset: { en: 'Start over', es: 'Empezar de nuevo', fa: 'از نو شروع کن' },
    choose: { en: 'Choose one', es: 'Elige uno', fa: 'یکی را انتخاب کن' },
    because: { en: 'Pick your reasons', es: 'Elige tus razones', fa: 'دلیل‌هایت را انتخاب کن' },
    episode: { en: 'Episode', es: 'Episodio', fa: 'قسمت' },
    realm: { en: 'Realm', es: 'Reino', fa: 'سرزمین' },
    teacherCode: { en: 'Teacher code', es: 'Código del maestro', fa: 'کد معلم' },
    playOffline: { en: 'Play without saving online', es: 'Jugar sin guardar en línea', fa: 'بازی بدون ذخیرهٔ آنلاین' },
    story: { en: 'The Grump tore the Great Atlas into 24 pages and blew them across the world. Places are fading from people\'s memory. You are a Worldwalker apprentice. With Christopher, your living compass, win the pages back by learning each place.', es: 'El Gruñón rompió el Gran Atlas en 24 páginas y las sopló por todo el mundo. Los lugares se borran de la memoria de la gente. Eres aprendiz de Caminante del Mundo. Con Christopher, tu brújula viva, recupera las páginas aprendiendo cada lugar.', fa: 'غرغرو اطلس بزرگ را به ۲۴ صفحه پاره کرد و آن‌ها را در سراسر جهان پراکنده ساخت. جاها از یاد مردم پاک می‌شوند. تو شاگرد جهان‌گرد هستی. با کریستوفر، قطب‌نمای زنده‌ات، با شناختن هر جا صفحه‌ها را پس بگیر.' }
  };
  WW.T = k => WW.L(WW.S[k]);
  WW.grr = () => WW.L(WW.S.grr[(Math.random() * WW.S.grr.length) | 0]);

  /* ---------------- the saved hero ---------------- */
  const KEY = 'worldwalker.save.v1';
  const blank = () => ({ v: 1, name: '', cls: '', pin: '', look: { skin: 1, hair: 0, hat: 0 }, stats: { loc: 0, pla: 0, hei: 0, mov: 0, reg: 0 }, coins: 0, spent: 0, episodes: {}, lang: 'en', sound: true, music: true, teacher: false });
  function readLocal() { try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); return s && s.v === 1 ? Object.assign(blank(), s) : null; } catch (e) { return null; } }
  WW.save = readLocal() || blank();
  if (!WW.save.stats) WW.save.stats = blank().stats;
  if (!WW.save.episodes) WW.save.episodes = {};
  WW.lang = WW.save.lang || 'en';
  WW.store = () => { try { localStorage.setItem(KEY, JSON.stringify(WW.save)); return true; } catch (e) { return false; } };
  WW.resetHero = () => { const lang = WW.save.lang; WW.save = blank(); WW.save.lang = lang; WW.store(); };
  WW.doneCount = () => Object.keys(WW.save.episodes).filter(k => WW.save.episodes[k] && WW.save.episodes[k].done).length;
  WW.hasTool = id => { const t = WW.TOOLS.find(x => x.id === id); return !!(t && WW.save.episodes[t.ep] && WW.save.episodes[t.ep].done); };
  /* ---------------- what the five powers do ----------------
     Each power unlocks a level at 3 points and another at 12. WW.tier('loc') is 0, 1 or 2. */
  WW.TIERS = [3, 12];
  WW.tier = k => WW.TIERS.filter(n => (WW.save.stats[k] || 0) >= n).length;
  WW.PERKS = {
    loc: [{ en: 'Compass arrow: an arrow points to your next goal', es: 'Flecha brújula: una flecha señala tu próxima meta', fa: 'تیر قطب‌نما: یک تیر هدف بعدی‌ات را نشان می‌دهد' },
      { en: 'Scrap finder: a second arrow points to the nearest atlas scrap', es: 'Buscador: otra flecha señala el pedazo del atlas más cercano', fa: 'تکه‌یاب: تیر دوم نزدیک‌ترین تکهٔ اطلس را نشان می‌دهد' }],
    pla: [{ en: 'Strong roots: +1 heart', es: 'Raíces fuertes: +1 corazón', fa: 'ریشهٔ قوی: +۱ قلب' },
      { en: 'Deep roots: +1 more heart', es: 'Raíces profundas: +1 corazón más', fa: 'ریشهٔ عمیق: +۱ قلب دیگر' }],
    hei: [{ en: 'Calm land: wandering Grumplings move slower', es: 'Tierra tranquila: los Gruñoncitos sueltos van más lento', fa: 'زمین آرام: غرغروهای سرگردان آهسته‌تر می‌روند' },
      { en: 'Healing scraps: each atlas scrap gives back a heart', es: 'Pedazos que curan: cada pedazo del atlas te devuelve un corazón', fa: 'تکهٔ شفابخش: هر تکهٔ اطلس یک قلب برمی‌گرداند' }],
    mov: [{ en: 'Quick feet: you walk faster', es: 'Pies rápidos: caminas más rápido', fa: 'پای تیز: تندتر راه می‌روی' },
      { en: 'Traveler: you walk faster still', es: 'Viajero: caminas aún más rápido', fa: 'مسافر: باز هم تندتر راه می‌روی' }],
    reg: [{ en: 'Region sense: 1 free hint in every trial and duel', es: 'Sentido de región: 1 pista gratis en cada prueba y duelo', fa: 'حس منطقه: ۱ کمک رایگان در هر آزمون و مسابقه' },
      { en: 'Region master: 2 free hints in every trial and duel', es: 'Maestro de regiones: 2 pistas gratis en cada prueba y duelo', fa: 'استاد منطقه: ۲ کمک رایگان در هر آزمون و مسابقه' }]
  };
  WW.heartsMax = () => 3 + WW.tier('pla');

  /* LOOK swatches (also used by the look picker) */
  WW.LOOK = {
    skin: WW.SKIN,
    hair: ['#1b1410', '#4a2c1a', '#8a5a2b', '#d8b45a', '#7a2a1f', '#6e6e6e'],
    hat: ['#d98e2b', '#2aa198', '#c0392b', '#3c6fb4', '#8e5bd6', '#3fa34d']
  };
  WW.heroPal = () => {
    const l = WW.save.look || {};
    const hat = WW.LOOK.hat[l.hat || 0];
    return Object.assign(WW.lookPal({ skin: WW.LOOK.skin[l.skin ?? 1], hair: WW.LOOK.hair[l.hair || 0], hat }), { c: '#2aa198', C: '#1f7a73', p: '#3b4a7a' });
  };

  /* ---------------- Passport Code ----------------
     15 letters/numbers: episodes done (24 bits) + five powers (5 bits each) + look (9 bits) + version (2 bits) + check (15 bits) */
  const ALPH = '0123456789ABCDEFGHJKMNPQRSTVWXYZ';
  function check15(n) { let h = 0x2a1; let x = n; for (let i = 0; i < 12; i++) { h = (h * 31 + Number(x & 31n)) & 0x7fff; x >>= 5n; } return BigInt(h); }
  WW.passportCode = (s = WW.save) => {
    let n = 0n;
    WW.EPISODES.forEach((e, i) => { if (s.episodes[e.id] && s.episodes[e.id].done) n |= 1n << BigInt(i); });
    let shift = 24n;
    WW.THEMES.forEach(t => { n |= BigInt(Math.min(31, s.stats[t.k] || 0)) << shift; shift += 5n; });
    const l = s.look || {};
    n |= BigInt((l.skin ?? 1) & 7) << 49n; n |= BigInt((l.hair || 0) & 7) << 52n; n |= BigInt((l.hat || 0) & 7) << 55n;
    n |= 1n << 58n; // version 1
    const full = (n << 15n) | check15(n);
    let out = '';
    for (let i = 0; i < 15; i++) out = ALPH[Number((full >> BigInt(i * 5)) & 31n)] + out;
    return 'WW-' + out.slice(0, 5) + '-' + out.slice(5, 10) + '-' + out.slice(10);
  };
  WW.readCode = code => {
    const c = String(code || '').toUpperCase().replace(/^WW/, '').replace(/[^0-9A-Z]/g, '').replace(/O/g, '0').replace(/[IL]/g, '1');
    if (c.length !== 15) return null;
    let full = 0n;
    for (const ch of c) { const v = ALPH.indexOf(ch); if (v < 0) return null; full = (full << 5n) | BigInt(v); }
    const n = full >> 15n;
    if ((full & 0x7fffn) !== check15(n)) return null;
    const out = { episodes: {}, stats: {}, look: {} };
    WW.EPISODES.forEach((e, i) => { if ((n >> BigInt(i)) & 1n) out.episodes[e.id] = { done: true, stars: 1 }; });
    let shift = 24n;
    WW.THEMES.forEach(t => { out.stats[t.k] = Number((n >> shift) & 31n); shift += 5n; });
    out.look = { skin: Number((n >> 49n) & 7n), hair: Number((n >> 52n) & 7n), hat: Number((n >> 55n) & 7n) };
    return out;
  };
  // never lose progress: keep the best of both
  WW.merge = other => {
    const s = WW.save;
    for (const id in other.episodes || {}) {
      const a = s.episodes[id], b = other.episodes[id];
      if (!a || (!a.done && b.done) || (b.stars || 0) > (a.stars || 0)) s.episodes[id] = Object.assign({}, a, b);
    }
    for (const k in other.stats || {}) s.stats[k] = Math.max(s.stats[k] || 0, other.stats[k] || 0);
    if (other.look && !s.name) s.look = other.look;
    // coins: keep the most ever earned and the most ever spent, so spent coins never come back
    if (other.coins != null) {
      const spent = Math.max(s.spent || 0, other.spent || 0);
      const earned = Math.max((s.coins || 0) + (s.spent || 0), (other.coins || 0) + (other.spent || 0));
      s.spent = spent; s.coins = Math.max(0, earned - spent);
    }
    WW.store();
  };

  /* ---------------- class Google Sheet ---------------- */
  WW.sheetOn = () => !!(CFG.SHEET_URL && WW.save.name && WW.save.cls && /^\d{4}$/.test(WW.save.pin || ''));
  function jsonp(url) {
    return new Promise((res, rej) => {
      const cb = 'wwcb' + Date.now(); const s = document.createElement('script');
      const done = () => { delete window[cb]; s.remove(); };
      window[cb] = d => { done(); res(d); };
      s.onerror = () => { done(); rej(new Error('jsonp')); };
      s.src = url + '&callback=' + cb; document.head.appendChild(s);
      setTimeout(() => { if (window[cb]) { done(); rej(new Error('timeout')); } }, 9000);
    });
  }
  WW.sheetLoad = async () => {
    if (!WW.sheetOn()) return { ok: false, off: true };
    const s = WW.save;
    const url = CFG.SHEET_URL + '?action=load&cls=' + encodeURIComponent(s.cls) + '&name=' + encodeURIComponent(s.name) + '&pin=' + encodeURIComponent(s.pin);
    let d;
    try { d = await (await fetch(url)).json(); } catch (e) { try { d = await jsonp(url); } catch (e2) { return { ok: false }; } }
    if (d && d.ok && d.found && d.state) {
      const st = d.state;
      WW.merge({ episodes: st.episodes || {}, stats: { loc: st.loc, pla: st.pla, hei: st.hei, mov: st.mov, reg: st.reg }, coins: +st.coins || 0, spent: +st.spent || 0, look: st.look });
    }
    return d || { ok: false };
  };
  WW.spend = n => { WW.save.coins -= n; WW.save.spent = (WW.save.spent || 0) + n; WW.store(); };
  // save the hero to the class Sheet after each goal (not only at the end), so leaving halfway loses little
  WW.sheetSync = () => { if (WW.sheetOn()) WW.sheetSave(null); };
  WW.sheetSave = async (log) => {
    if (!WW.sheetOn()) return { ok: false, off: true };
    const s = WW.save;
    const body = {
      action: 'save', cls: s.cls, name: s.name, pin: s.pin,
      state: { look: s.look, loc: s.stats.loc, pla: s.stats.pla, hei: s.stats.hei, mov: s.stats.mov, reg: s.stats.reg, heartsMax: WW.heartsMax(), coins: s.coins, spent: s.spent || 0, episodes: s.episodes, tools: WW.TOOLS.filter(t => WW.hasTool(t.id)).map(t => t.id), passport: WW.passportCode(), version: 1 },
      log
    };
    try {
      await fetch(CFG.SHEET_URL, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain' }, body: JSON.stringify(body) });
      return { ok: true };
    } catch (e) { return { ok: false }; }
  };
})();
