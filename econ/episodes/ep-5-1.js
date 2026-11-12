/* COINWALKER · Episode 5.1 · Introduction to Credit and the 5 Cs
   Credit Crossing: a MADE-UP small town where a railroad crosses a river. Not a real town.
   North: the train station (J) and its platform, a diner (house), the railroad (row 4) on a bridge over the river (~),
   the furniture store (house) on the east bank. Row 11 is Main Street, crossing the river on a bridge.
   South-west: Crossing Community Bank (made-up; the loan office, house), the bike shop (house) and Bank Square (paving)
   where the ledger stone asks the student to carry facts about Lena to the 5 Cs.
   South-east, across the river: the used-car lot (stalls m stand for parked cars).
   People show credit, principal and interest, installment and revolving credit, secured and unsecured loans. */
window.EPISODE = {
  id: '5.1',
  realm: 5,
  sol: 'EPF',
  title: { en: 'Introduction to Credit', es: 'Introducción al crédito', fa: 'آشنایی با قرض' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Credit Crossing, Main Street', es: 'Cruce del Crédito, calle principal', fa: 'گذرگاه قرض، سرک عمومی' },
  intro: [
    { en: 'The Grump tore the page about borrowing. Now nobody here knows how loans work.',
      es: 'El Gruñón rompió la página sobre pedir prestado. Ahora nadie aquí sabe cómo funcionan los préstamos.',
      fa: 'غرغرو صفحهٔ قرض گرفتن را پاره کرد. حالا هیچ کس اینجا نمی‌داند قرض چطور کار می‌کند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town placed in the Virginia hills (no timeline in this game) */
  scenes: {
    at: [-78.9, 38.0],
    start: [
      { en: 'Credit Crossing is a small, made-up town where a railroad crosses a river.',
        es: 'Cruce del Crédito es un pueblo pequeño e inventado donde un tren cruza un río.',
        fa: 'گذرگاه قرض یک شهرک کوچک و خیالی است که در آن ریل از دریا می‌گذرد.' },
      { en: 'People here borrow money for cars, bikes, sofas and new tools.',
        es: 'Aquí la gente pide dinero prestado para carros, bicicletas, sofás y herramientas.',
        fa: 'مردم اینجا برای موتر، بایسکل، کوچ و ابزار نو پول قرض می‌گیرند.' },
      { en: 'Before a loan, the lender asks: will this person pay it back?',
        es: 'Antes de un préstamo, el prestamista pregunta: ¿esta persona lo va a pagar?',
        fa: 'پیش از قرض، قرض‌دهنده می‌پرسد: آیا این شخص آن را پس می‌دهد؟' }
    ],
    page: { en: 'Thousands of years ago, people already wrote down loans on clay tablets.',
      es: 'Hace miles de años, la gente ya anotaba préstamos en tablillas de barro.',
      fa: 'هزاران سال پیش، مردم قرض‌ها را روی لوحه‌های گلی می‌نوشتند.' },
    guess: {
      q: { en: 'Is borrowing money free?', es: '¿Pedir dinero prestado es gratis?', fa: 'آیا قرض گرفتن پول مفت است؟' },
      choices: [
        { t: { en: '💸 No, it usually costs extra', es: '💸 No, casi siempre cuesta más', fa: '💸 نه، معمولاً اضافه خرچ دارد' }, ok: true },
        { t: { en: '🎁 Yes, it costs nothing', es: '🎁 Sí, no cuesta nada', fa: '🎁 بله، هیچ خرچ ندارد' } }
      ],
      why: { en: 'Most loans charge interest. You pay back more than you borrowed.', es: 'Casi todos los préstamos cobran interés. Devuelves más de lo que pediste.', fa: 'بیشتر قرض‌ها سود می‌گیرند. بیشتر از آنچه قرض گرفتی پس می‌دهی.' }
    },
    next: {
      q: { en: 'Next: how do you start a credit history when you have none?', es: 'Ahora: ¿cómo empiezas un historial de crédito si no tienes ninguno?', fa: 'بعدی: وقتی هیچ سابقهٔ قرض نداری، چطور آن را شروع می‌کنی؟' },
      choices: [
        { t: { en: '🌱 Start small, pay on time', es: '🌱 Empieza con poco y paga a tiempo', fa: '🌱 کم شروع کن و سر وقت بپرداز' }, ok: true },
        { t: { en: '🙈 Borrow a lot at once', es: '🙈 Pide mucho de una sola vez', fa: '🙈 یکباره زیاد قرض بگیر' } }
      ],
      why: { en: 'A small loan or card, paid on time every month, starts a good record.', es: 'Un préstamo o tarjeta pequeña, pagada a tiempo cada mes, empieza un buen historial.', fa: 'یک قرض یا کارت کوچک که هر ماه سر وقت پرداخته شود، سابقهٔ خوب می‌سازد.' }
    }
  },
  /* houses: who is behind each door; walk in and talk */
  houses: [
    { at: [14, 2], name: { en: 'Pat', es: 'Pat', fa: 'پت' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#f0f0e8', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'I own this diner. Last year I borrowed money for a new grill.', es: 'Soy dueña de este restaurante. El año pasado pedí prestado para una parrilla nueva.', fa: 'من صاحب این رستورانت هستم. سال گذشته برای یک منقل نو پول قرض گرفتم.' },
        { en: 'The bank asked: what is the loan for, and how much?', es: 'El banco preguntó: ¿para qué es el préstamo y de cuánto es?', fa: 'بانک پرسید: قرض برای چیست و چقدر است؟' },
        { en: 'They also looked at the economy. Those are the [[conditions|conditions]].', es: 'También miraron la economía. Esas son las [[conditions|condiciones]].', fa: 'آنها به اقتصاد هم نگاه کردند. اینها [[conditions|شرایط]] هستند.' }
      ] },
    { at: [26, 2], name: { en: 'Mrs. Ito', es: 'Sra. Ito', fa: 'خانم ایتو' },
      look: { skin: 1, hair: '#1a1008', shirt: '#7a4a9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'On our sofa plan, you pay $55 a month for 12 months.', es: 'Con nuestro plan del sofá, pagas $55 al mes por 12 meses.', fa: 'در طرح کوچ ما، ۱۲ ماه هر ماه ۵۵ دالر می‌پردازی.' },
        { en: '$55 times 12 is $660. The sofa price is $600.', es: '$55 por 12 son $660. El precio del sofá es $600.', fa: '۵۵ ضرب ۱۲ می‌شود ۶۶۰ دالر. قیمت کوچ ۶۰۰ دالر است.' },
        { en: 'So the extra $60 is the [[interest|interest]]. Credit has a cost.', es: 'Así que los $60 de más son el [[interest|interés]]. El crédito tiene un costo.', fa: 'پس ۶۰ دالر اضافه [[interest|سود]] است. قرض هزینه دارد.' }
      ] },
    { at: [4, 13], name: { en: 'Mr. Lee', es: 'Sr. Lee', fa: 'آقای لی' },
      look: { skin: 1, hair: '#2a2a2a', shirt: '#2a4a7a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Banks often show interest as an [[apr|APR]]: a yearly percent.', es: 'Los bancos muchas veces muestran el interés como [[apr|APR]]: un porcentaje al año.', fa: 'بانک‌ها اکثراً سود را به شکل [[apr|APR]] نشان می‌دهند: یک فیصدی سالانه.' },
        { en: 'Compare APRs. A lower APR means the loan costs less.', es: 'Compara las APR. Una APR más baja significa que el préstamo cuesta menos.', fa: 'APR ها را مقایسه کن. APR کمتر یعنی قرض ارزان‌تر است.' },
        { en: 'Before we lend, we check 5 things. We call them the [[5 cs|5 Cs]].', es: 'Antes de prestar, revisamos 5 cosas. Las llamamos las [[5 cs|5 C]].', fa: 'پیش از قرض دادن، ۵ چیز را می‌بینیم. به آنها [[5 cs|۵ C]] می‌گوییم.' }
      ] },
    { at: [10, 13], name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0392b', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: '[[character|Character]] is your record of paying bills on time.', es: 'El [[character|carácter]] es tu historial de pagar las cuentas a tiempo.', fa: '[[character|شخصیت]] سابقهٔ تو در پرداخت بل‌ها سر وقت است.' },
        { en: 'That record is in your [[credit report|credit report]]. Lenders read it.', es: 'Ese historial está en tu [[credit report|reporte de crédito]]. Los prestamistas lo leen.', fa: 'این سابقه در [[credit report|گزارش قرض]] تو است. قرض‌دهنده‌ها آن را می‌خوانند.' },
        { en: 'In credit, [[capital|capital]] means your savings and the things you own.', es: 'En el crédito, el [[capital|capital]] son tus ahorros y las cosas que tienes.', fa: 'در قرض، [[capital|سرمایه]] یعنی پس‌انداز و چیزهایی که داری.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): the train station (J) with its platform (l) and sign, the diner (R over h), the railroad (row 4)
     crossing the river (~, x 20-21) on a bridge (b), the furniture store (Q over h) on the east bank.
     Row 11: Main Street (l), crossing the river on a bridge.
     South-west: Crossing Community Bank (the loan office) and the bike shop, with Bank Square (l) below them.
     South-east: the used-car lot (l, with parked cars drawn as stalls m) and its sign. */
  map: [
    'TTTTTTTTTTTTTTTTTTTT~~TTTTTTTTTT',
    'T.JJJJJJJJ...RRR....~~..QQQQQ..T',
    'T.JJJJJJJJ...hdh....~~..hhdhh..T',
    'T.llllllx...........~~.........T',
    'T-------------------bb---------T',
    'T...................~~.........T',
    'T..T.....,,......T..~~...,,,...T',
    'T...................~~.........T',
    'T.....T.............~~..T......T',
    'T..,,......T......T.~~.......x.T',
    'T...................~~.........T',
    'TlllllllllllllllllllbblllllllllT',
    'T.RRRRR..RRR.....T..~~.........T',
    'T.hhdhh..hdh........~~.llllllllT',
    'T.................T.~~.lmlmlmllT',
    'T.llllllllllllx.....~~.llllllllT',
    'T.llllllllllll...T..~~.llllllllT',
    'T.llllllllllll......~~.lmlmlmllT',
    'T.llllllllllll......~~.llllllllT',
    'T.llllllllllll....,,~~....x....T',
    'T...T......T......,,~~.........T',
    'TTTTTTTTTTTTTTTTTTTT~~TTTTTTTTTT'
  ],
  start: [5, 6],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [3, 9], at: [3, 5], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north, toward the railroad.', es: 'Desde esta nota, camina 4 pasos al norte, hacia el tren.', fa: 'از این یادداشت، ۴ قدم به شمال برو، به طرف ریل.' },
      text: { en: 'An old coin! A loan is paid back in small parts, coin by coin.', es: '¡Una moneda antigua! Un préstamo se paga en partes pequeñas, moneda a moneda.', fa: 'یک سکهٔ قدیمی! قرض کم کم پس داده می‌شود، سکه به سکه.' } },
    { clueAt: [16, 16], at: [16, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps south, along the river.', es: 'Desde esta nota, camina 4 pasos al sur, junto al río.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، کنار دریا.' },
      text: { en: 'A river shell! A bridge links two sides. Credit links a lender and a borrower.', es: '¡Una concha del río! Un puente une dos lados. El crédito une al prestamista y al prestatario.', fa: 'یک صدف دریا! پل دو طرف را وصل می‌کند. قرض، قرض‌دهنده و قرض‌گیرنده را وصل می‌کند.' } }
  ],

  words: {
    credit: { en: 'borrowing money now and paying it back later, usually with interest', es: 'pedir dinero prestado ahora y devolverlo después, casi siempre con interés', fa: 'قرض گرفتن پول حالا و پس دادن آن بعداً، معمولاً با سود' },
    borrower: { en: 'the person who gets the money and must pay it back', es: 'la persona que recibe el dinero y debe devolverlo', fa: 'کسی که پول را می‌گیرد و باید آن را پس بدهد' },
    lender: { en: 'the person or bank that gives the money', es: 'la persona o el banco que da el dinero', fa: 'شخص یا بانکی که پول را می‌دهد' },
    principal: { en: 'the amount of money you borrow', es: 'la cantidad de dinero que pides prestada', fa: 'مقدار پولی که قرض می‌گیری' },
    interest: { en: 'the cost of borrowing: the extra money you pay back', es: 'el costo de pedir prestado: el dinero extra que devuelves', fa: 'هزینهٔ قرض گرفتن: پول اضافه‌ای که پس می‌دهی' },
    apr: { en: 'annual percentage rate: the yearly cost of a loan, as a percent', es: 'tasa de porcentaje anual: el costo de un préstamo al año, en porcentaje', fa: 'نرخ فیصدی سالانه: هزینهٔ سالانهٔ قرض، به فیصد' },
    'installment credit': { en: 'a loan with fixed payments for a set time, like a car loan', es: 'un préstamo con pagos fijos por un tiempo fijo, como un préstamo de carro', fa: 'قرضی با قسط‌های ثابت برای یک مدت معین، مثل قرض موتر' },
    'revolving credit': { en: 'credit you can borrow, repay and borrow again, up to a limit', es: 'crédito que puedes usar, pagar y volver a usar, hasta un límite', fa: 'قرضی که می‌گیری، پس می‌دهی و دوباره می‌گیری، تا یک حد' },
    'secured loan': { en: 'a loan backed by collateral', es: 'un préstamo respaldado por una garantía', fa: 'قرضی که پشتوانهٔ آن گرو است' },
    'unsecured loan': { en: 'a loan with no collateral behind it', es: 'un préstamo sin ninguna garantía', fa: 'قرضی که هیچ گرو ندارد' },
    collateral: { en: 'something of value the lender can take if you do not pay', es: 'algo de valor que el prestamista puede quitarte si no pagas', fa: 'چیز قیمتی که اگر نپردازی، قرض‌دهنده می‌تواند بگیرد' },
    '5 cs': { en: 'what lenders check: character, capacity, capital, collateral, conditions', es: 'lo que revisan los prestamistas: carácter, capacidad, capital, garantía, condiciones', fa: 'چیزهایی که قرض‌دهنده می‌بیند: شخصیت، توان، سرمایه، گرو، شرایط' },
    character: { en: 'your history of paying bills on time', es: 'tu historial de pagar las cuentas a tiempo', fa: 'سابقهٔ تو در پرداخت بل‌ها سر وقت' },
    capacity: { en: 'having enough income to repay: your debt compared to your income', es: 'tener ingresos para pagar: tus deudas comparadas con tus ingresos', fa: 'داشتن عاید کافی برای پس دادن: قرض تو در برابر عایدت' },
    capital: { en: 'in credit: your savings and the things of value you own', es: 'en el crédito: tus ahorros y las cosas de valor que tienes', fa: 'در قرض: پس‌انداز و چیزهای قیمتی که داری' },
    conditions: { en: 'the loan\'s purpose and amount, and how the economy is doing', es: 'para qué es el préstamo, de cuánto es y cómo va la economía', fa: 'هدف و مقدار قرض، و حال اقتصاد' },
    'credit report': { en: 'a record of how you have paid your loans and bills', es: 'un registro de cómo has pagado tus préstamos y cuentas', fa: 'سابقه‌ای از این که قرض‌ها و بل‌هایت را چطور پرداخته‌ای' }
  },

  npcs: [
    {
      x: 7, y: 14,
      name: { en: 'Hana', es: 'Hana', fa: 'هانا' },
      role: { en: 'Loan officer', es: 'Oficial de préstamos', fa: 'کارمند قرض' },
      look: { skin: 3, hair: '#1a1008', shirt: '#2a6a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Welcome to Crossing Community Bank! I am a loan officer.', es: '¡Bienvenido al Banco Comunitario Cruce! Soy oficial de préstamos.', fa: 'به بانک محلی گذرگاه خوش آمدی! من کارمند قرض هستم.' },
        { en: '[[credit|Credit]] is borrowing money now and paying it back later.', es: 'El [[credit|crédito]] es pedir dinero prestado ahora y devolverlo después.', fa: '[[credit|قرض]] یعنی پول را حالا بگیری و بعداً پس بدهی.' },
        { en: 'The [[borrower|borrower]] gets the money. The [[lender|lender]], like this bank, gives it.', es: 'El [[borrower|prestatario]] recibe el dinero. El [[lender|prestamista]], como este banco, lo da.', fa: '[[borrower|قرض‌گیرنده]] پول را می‌گیرد. [[lender|قرض‌دهنده]]، مثل این بانک، آن را می‌دهد.' },
        { en: 'Borrow $500, pay back $550. The $500 is the [[principal|principal]]. The $50 is [[interest|interest]].', es: 'Pides $500 y devuelves $550. Los $500 son el [[principal|principal]]. Los $50 son [[interest|interés]].', fa: '۵۰۰ دالر قرض بگیر، ۵۵۰ پس بده. ۵۰۰ دالر [[principal|اصل پول]] است. ۵۰ دالر [[interest|سود]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Jon borrows $800. He pays back $880 in all. How much is the interest?', es: 'Jon pide $800. Devuelve $880 en total. ¿Cuánto es el interés?', fa: 'جان ۸۰۰ دالر قرض می‌گیرد. در کل ۸۸۰ دالر پس می‌دهد. سود چقدر است؟' },
        choices: [
          { ok: true, t: { en: '$80', es: '$80', fa: '۸۰ دالر' },
            why: { en: 'Yes! $880 minus $800 is $80. The interest is the extra money.', es: '¡Sí! $880 menos $800 son $80. El interés es el dinero extra.', fa: 'بله! ۸۸۰ منفی ۸۰۰ می‌شود ۸۰. سود همان پول اضافه است.' } },
          { t: { en: '$880', es: '$880', fa: '۸۸۰ دالر' },
            why: { en: 'No. $880 is all he pays back. Take away the $800 he borrowed.', es: 'No. $880 es todo lo que devuelve. Quítale los $800 que pidió.', fa: 'نه. ۸۸۰ دالر همهٔ پولی است که پس می‌دهد. ۸۰۰ دالر قرض را کم کن.' } },
          { t: { en: '$800', es: '$800', fa: '۸۰۰ دالر' },
            why: { en: 'No. $800 is the principal, the amount he borrowed. Interest is the extra $80.', es: 'No. $800 es el principal, lo que pidió. El interés son los $80 extra.', fa: 'نه. ۸۰۰ دالر اصل پول است، یعنی مقدار قرض. سود ۸۰ دالر اضافه است.' } }
        ]
      }
    },
    {
      x: 24, y: 7,
      name: { en: 'Kofi', es: 'Kofi', fa: 'کوفی' },
      role: { en: 'Furniture seller', es: 'Vendedor de muebles', fa: 'فروشندهٔ فرنیچر' },
      look: { skin: 5, hair: '#120c08', shirt: '#d08a2a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'This sofa is $600. Or you can pay $55 a month for 12 months.', es: 'Este sofá cuesta $600. O puedes pagar $55 al mes por 12 meses.', fa: 'این کوچ ۶۰۰ دالر است. یا ۱۲ ماه هر ماه ۵۵ دالر بپرداز.' },
        { en: 'Fixed payments for a set time are [[installment credit|installment credit]]. A car loan is too.', es: 'Pagos fijos por un tiempo fijo son [[installment credit|crédito a plazos]]. Un préstamo de carro también.', fa: 'قسط ثابت برای یک مدت معین [[installment credit|قرض قسطی]] است. قرض موتر هم همین‌طور.' },
        { en: 'A credit card is [[revolving credit|revolving credit]]: borrow, repay, borrow again, up to a limit.', es: 'Una tarjeta de crédito es [[revolving credit|crédito rotativo]]: usas, pagas y vuelves a usar, hasta un límite.', fa: 'کارت اعتباری [[revolving credit|قرض چرخشی]] است: بگیر، پس بده، دوباره بگیر، تا یک حد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Which one is revolving credit?', es: '¿Cuál es crédito rotativo?', fa: 'کدام یکی قرض چرخشی است؟' },
        choices: [
          { ok: true, t: { en: 'A credit card with a $500 limit', es: 'Una tarjeta de crédito con límite de $500', fa: 'یک کارت اعتباری با حد ۵۰۰ دالر' },
            why: { en: 'Yes! You can borrow, repay and borrow again, up to $500.', es: '¡Sí! Puedes usarla, pagarla y volver a usarla, hasta $500.', fa: 'بله! می‌توانی بگیری، پس بدهی و دوباره بگیری، تا ۵۰۰ دالر.' } },
          { t: { en: 'A car loan with 36 equal payments', es: 'Un préstamo de carro con 36 pagos iguales', fa: 'قرض موتر با ۳۶ قسط برابر' },
            why: { en: 'No. Fixed payments for a set time make it installment credit.', es: 'No. Pagos fijos por un tiempo fijo lo hacen crédito a plazos.', fa: 'نه. قسط ثابت برای مدت معین آن را قرض قسطی می‌سازد.' } },
          { t: { en: 'A sofa plan with 12 equal payments', es: 'Un plan del sofá con 12 pagos iguales', fa: 'طرح کوچ با ۱۲ قسط برابر' },
            why: { en: 'No. 12 fixed payments, then it is done. That is installment credit.', es: 'No. 12 pagos fijos y se acaba. Eso es crédito a plazos.', fa: 'نه. ۱۲ قسط ثابت، بعد تمام می‌شود. این قرض قسطی است.' } }
        ]
      }
    },
    {
      x: 24, y: 20,
      name: { en: 'Dee', es: 'Dee', fa: 'دی' },
      role: { en: 'Car mechanic', es: 'Mecánica de carros', fa: 'مستری موتر' },
      look: { skin: 2, hair: '#3a2416', shirt: '#4a5a6a', pants: '#2a2a2a', hat: '#c04a2a', style: 'bun' },
      lines: [
        { en: 'I fix the cars on this lot before they are sold.', es: 'Arreglo los carros de este lote antes de venderlos.', fa: 'من موترهای این پارکینگ را پیش از فروش جور می‌کنم.' },
        { en: 'Most car loans are [[secured loan|secured loans]]. The car backs the loan.', es: 'Casi todos los préstamos de carro son [[secured loan|préstamos con garantía]]. El carro respalda el préstamo.', fa: 'بیشتر قرض‌های موتر [[secured loan|قرض با گرو]] هستند. موتر پشتوانهٔ قرض است.' },
        { en: 'Stop paying, and the lender can take the car. It is [[collateral|collateral]].', es: 'Si dejas de pagar, el prestamista puede quitarte el carro. Es la [[collateral|garantía]].', fa: 'اگر پرداخت را بس کنی، قرض‌دهنده موتر را می‌گیرد. موتر [[collateral|گرو]] است.' },
        { en: 'A loan with no collateral is [[unsecured loan|unsecured]]. Most credit cards are unsecured.', es: 'Un préstamo sin garantía es [[unsecured loan|sin garantía]]. Casi todas las tarjetas son así.', fa: 'قرض بدون گرو [[unsecured loan|بی‌گرو]] است. بیشتر کارت‌های اعتباری بی‌گرو هستند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Which loan is a secured loan?', es: '¿Cuál préstamo tiene garantía?', fa: 'کدام قرض، قرض با گرو است؟' },
        choices: [
          { ok: true, t: { en: 'A car loan backed by the car', es: 'Un préstamo de carro respaldado por el carro', fa: 'قرض موتر که موتر پشتوانهٔ آن است' },
            why: { en: 'Yes! The car is collateral. The lender can take it if you stop paying.', es: '¡Sí! El carro es la garantía. El prestamista puede quitarlo si no pagas.', fa: 'بله! موتر گرو است. اگر نپردازی، قرض‌دهنده آن را می‌گیرد.' } },
          { t: { en: 'A credit card with no collateral', es: 'Una tarjeta de crédito sin garantía', fa: 'کارت اعتباری بدون هیچ گرو' },
            why: { en: 'No. Nothing backs it, so it is unsecured.', es: 'No. Nada lo respalda, así que no tiene garantía.', fa: 'نه. هیچ چیز پشتوانهٔ آن نیست، پس بی‌گرو است.' } },
          { t: { en: 'A small loan backed by nothing', es: 'Un préstamo pequeño sin nada detrás', fa: 'قرض کوچک بدون هیچ پشتوانه' },
            why: { en: 'No. With no collateral behind it, a loan is unsecured.', es: 'No. Sin garantía detrás, un préstamo no está asegurado.', fa: 'نه. قرضی که گرو ندارد، بی‌گرو است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 8, y: 3, text: { en: 'CREDIT CROSSING STATION · Here the railroad crosses the river. Main Street is to the south.', es: 'ESTACIÓN CRUCE DEL CRÉDITO · Aquí el tren cruza el río. La calle principal está al sur.', fa: 'ایستگاه گذرگاه قرض · اینجا ریل از دریا می‌گذرد. سرک عمومی در جنوب است.' } },
    { x: 29, y: 9, text: { en: 'FURNITURE STORE · Buy now, pay later? First add up every payment.', es: 'TIENDA DE MUEBLES · ¿Compra ahora y paga después? Primero suma todos los pagos.', fa: 'دکان فرنیچر · حالا بخر، بعداً بپرداز؟ اول همهٔ قسط‌ها را جمع کن.' } },
    { x: 14, y: 15, text: { en: 'THE 5 Cs OF CREDIT · Character, Capacity, Capital, Collateral, Conditions. Lenders check all 5.', es: 'LAS 5 C DEL CRÉDITO · Carácter, Capacidad, Capital, Garantía, Condiciones. Se revisan las 5.', fa: '۵ C قرض · شخصیت، توان، سرمایه، گرو، شرایط. قرض‌دهنده هر ۵ را می‌بیند.' } },
    { x: 26, y: 19, text: { en: 'USED CAR LOT · Most car loans are secured. The car is the collateral.', es: 'LOTE DE CARROS USADOS · Casi todos los préstamos de carro tienen garantía: el carro.', fa: 'موترهای دست دوم · بیشتر قرض‌های موتر با گرو هستند. موتر گرو است.' } }
  ],

  /* the quest: Amara the waitress (gold !) by the diner, north-west -> Mr. Bell outside the bike shop, south-west
     -> carry the right paper to Mr. Osei at the used-car lot, south-east -> back to Amara.
     Mr. Osei wants proof she can make the $200 monthly payment (capacity): her pay stubs, not a photo or a card offer. */
  quest: {
    stat: 'pla',
    title: { en: 'Amara\'s First Car Loan', es: 'El primer préstamo de carro de Amara', fa: 'اولین قرض موتر آمارا' },
    giver: {
      x: 12, y: 7,
      name: { en: 'Amara', es: 'Amara', fa: 'آمارا' },
      role: { en: 'Diner waitress', es: 'Mesera del restaurante', fa: 'گارسون رستورانت' },
      look: { skin: 4, hair: '#120c08', shirt: '#e05a7a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I got a new job far away. I need a used car to get there.', es: 'Conseguí un trabajo nuevo lejos. Necesito un carro usado para llegar.', fa: 'یک کار نو در جای دور پیدا کردم. برای رفتن به یک موتر دست دوم ضرورت دارم.' },
        { en: 'The car lot will lend me the money. But first they check me.', es: 'El lote de carros me prestará el dinero. Pero primero me revisan.', fa: 'پارکینگ موتر به من پول قرض می‌دهد. اما اول مرا بررسی می‌کنند.' },
        { en: 'Mr. Bell, outside the bike shop, got a car loan last year. Ask him!', es: 'El Sr. Bell, afuera de la tienda de bicicletas, sacó un préstamo de carro. ¡Pregúntale!', fa: 'آقای بل، بیرون دکان بایسکل، سال گذشته قرض موتر گرفت. از او بپرس!' }
      ],
      wait: { en: 'Mr. Bell is outside the bike shop, on Main Street to the south.', es: 'El Sr. Bell está afuera de la tienda de bicicletas, en la calle principal, al sur.', fa: 'آقای بل بیرون دکان بایسکل است، در سرک عمومی به طرف جنوب.' },
      thanks: { en: 'Car keys! It is a secured loan. If I stop paying, they take the car.', es: '¡Las llaves! Es un préstamo con garantía. Si dejo de pagar, se llevan el carro.', fa: 'کلید موتر! این قرض با گرو است. اگر نپردازم، موتر را می‌گیرند.' }
    },
    contact: {
      x: 13, y: 14,
      name: { en: 'Mr. Bell', es: 'Sr. Bell', fa: 'آقای بل' },
      role: { en: 'Bike shop owner', es: 'Dueño de la tienda de bicicletas', fa: 'صاحب دکان بایسکل' },
      look: { skin: 0, hair: '#b8b8b8', shirt: '#3a7a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Lenders ask: can you pay every month? That is [[capacity|capacity]].', es: 'Los prestamistas preguntan: ¿puedes pagar cada mes? Eso es [[capacity|capacidad]].', fa: 'قرض‌دهنده‌ها می‌پرسند: آیا هر ماه پرداخته می‌توانی؟ این [[capacity|توان]] است.' },
        { en: 'Amara earns $1,600 a month. Her car payment is $200.', es: 'Amara gana $1,600 al mes. Su pago del carro es de $200.', fa: 'آمارا ماهانه ۱۶۰۰ دالر معاش دارد. قسط موترش ۲۰۰ دالر است.' },
        { en: 'Bring Mr. Osei, at the car lot, proof of what Amara earns.', es: 'Llévale al Sr. Osei, en el lote de carros, una prueba de lo que gana Amara.', fa: 'برای آقای اوسی، در پارکینگ موتر، ثبوت معاش آمارا را ببر.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 27, y: 16,
        name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
        role: { en: 'Car lot manager', es: 'Gerente del lote de carros', fa: 'مدیر پارکینگ موتر' },
        look: { skin: 5, hair: '#2a2a2a', shirt: '#f0f0e8', pants: '#2a3a5a', style: 'short' },
        lines: [
          { en: 'I sell used cars. Many buyers pay with a car loan.', es: 'Vendo carros usados. Muchos compradores pagan con un préstamo.', fa: 'من موتر دست دوم می‌فروشم. بسیاری از خریداران با قرض موتر می‌پردازند.' },
          { en: 'Before I lend, I must know the buyer can pay each month.', es: 'Antes de prestar, debo saber que el comprador puede pagar cada mes.', fa: 'پیش از قرض دادن، باید بدانم خریدار هر ماه پرداخته می‌تواند.' }
        ]
      },
      q: { en: 'Amara\'s loan is $200 a month. What shows she can pay it?', es: 'El préstamo de Amara es de $200 al mes. ¿Qué muestra que puede pagarlo?', fa: 'قرض آمارا ماهانه ۲۰۰ دالر است. چه چیز نشان می‌دهد که پرداخته می‌تواند؟' },
      choices: [
        { ok: true, at: [12, 3], icon: '🧾', t: { en: 'Amara\'s pay stubs', es: 'Los talones de pago de Amara', fa: 'رسیدهای معاش آمارا' },
          why: { en: 'Yes! She earns $1,600 a month, so $200 fits. That is capacity.', es: '¡Sí! Gana $1,600 al mes, así que $200 le alcanza. Eso es capacidad.', fa: 'بله! ماهانه ۱۶۰۰ دالر دارد، پس ۲۰۰ دالر را پرداخته می‌تواند. این توان است.' } },
        { at: [29, 13], icon: '📷', t: { en: 'A photo of the car', es: 'Una foto del carro', fa: 'یک عکس موتر' },
          why: { en: 'Wanting a car does not show she can pay. I need proof of income.', es: 'Querer un carro no muestra que puede pagar. Necesito prueba de ingresos.', fa: 'خواستن موتر نشان نمی‌دهد که پرداخته می‌تواند. ثبوت عاید لازم است.' } },
        { at: [29, 5], icon: '💳', t: { en: 'A store card offer', es: 'Una oferta de tarjeta de tienda', fa: 'پیشنهاد کارت یک دکان' },
          why: { en: 'A new card means more debt, not more income. It does not help.', es: 'Una tarjeta nueva es más deuda, no más ingresos. No ayuda.', fa: 'کارت نو یعنی قرض بیشتر، نه عاید بیشتر. کمک نمی‌کند.' } }
      ],
      item: { icon: '🔑', name: { en: 'The car keys', es: 'Las llaves del carro', fa: 'کلید موتر' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 20]],
  smudges: [[9, 8], [18, 16]],

  challenge: {
    at: [11, 18],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each C on Bank Square, in front of the loan office
    zones: [{ bin: 'character', x: 2, y: 16, w: 3, h: 1 }, { bin: 'capacity', x: 6, y: 16, w: 3, h: 1 },
      { bin: 'capital', x: 10, y: 16, w: 3, h: 1 }, { bin: 'collateral', x: 2, y: 18, w: 3, h: 1 },
      { bin: 'conditions', x: 6, y: 18, w: 3, h: 1 }],
    stat: 'mov',
    title: { en: 'The 5 Cs of Credit', es: 'Las 5 C del crédito', fa: '۵ C قرض' },
    intro: { en: 'Lena wants a loan. Carry each fact about her to one of the [[5 cs|5 Cs]].',
      es: 'Lena quiere un préstamo. Lleva cada dato sobre ella a una de las [[5 cs|5 C]].',
      fa: 'لینا قرض می‌خواهد. هر خبر دربارهٔ او را پیش یکی از [[5 cs|۵ C]] ببر.' },
    bins: [
      { id: 'character', icon: '🤝', label: { en: 'Character', es: 'Carácter', fa: 'شخصیت' }, sub: { en: 'pays bills on time', es: 'paga sus cuentas a tiempo', fa: 'بل‌ها را سر وقت می‌پردازد' } },
      { id: 'capacity', icon: '💵', label: { en: 'Capacity', es: 'Capacidad', fa: 'توان' }, sub: { en: 'enough income to repay', es: 'ingresos para pagar', fa: 'عاید کافی برای پس دادن' } },
      { id: 'capital', icon: '🏦', label: { en: 'Capital', es: 'Capital', fa: 'سرمایه' }, sub: { en: 'savings and things you own', es: 'ahorros y cosas que tienes', fa: 'پس‌انداز و داشته‌ها' } },
      { id: 'collateral', icon: '🚗', label: { en: 'Collateral', es: 'Garantía', fa: 'گرو' }, sub: { en: 'something the lender can take', es: 'algo que el prestamista puede quitar', fa: 'چیزی که قرض‌دهنده می‌گیرد' } },
      { id: 'conditions', icon: '🌤️', label: { en: 'Conditions', es: 'Condiciones', fa: 'شرایط' }, sub: { en: 'purpose, amount, economy', es: 'para qué, cuánto, la economía', fa: 'هدف، مقدار، اقتصاد' } }
    ],
    items: [
      { bin: 'character', t: { en: 'Pays her phone bill on time every month', es: 'Paga su cuenta del teléfono a tiempo cada mes', fa: 'بل تیلفونش را هر ماه سر وقت می‌پردازد' },
        why: { en: 'Paying bills on time shows good [[character|character]]. She keeps her promises.', es: 'Pagar a tiempo muestra buen [[character|carácter]]. Ella cumple sus promesas.', fa: 'پرداخت بل‌ها سر وقت [[character|شخصیت]] خوب را نشان می‌دهد. او به وعده‌اش وفا می‌کند.' } },
      { bin: 'character', t: { en: 'Her credit report shows no late payments', es: 'Su reporte de crédito no tiene pagos tarde', fa: 'گزارش قرض او هیچ پرداخت ناوقت ندارد' },
        why: { en: 'A credit report is her paying history. That is [[character|character]].', es: 'El reporte de crédito es su historial de pagos. Eso es [[character|carácter]].', fa: 'گزارش قرض سابقهٔ پرداخت اوست. این [[character|شخصیت]] است.' } },
      { bin: 'capacity', t: { en: 'Earns $1,600 a month at her job', es: 'Gana $1,600 al mes en su trabajo', fa: 'از کارش ماهانه ۱۶۰۰ دالر معاش می‌گیرد' },
        why: { en: 'Income shows she can make the payments. That is [[capacity|capacity]].', es: 'Los ingresos muestran que puede hacer los pagos. Eso es [[capacity|capacidad]].', fa: 'عاید نشان می‌دهد که قسط‌ها را پرداخته می‌تواند. این [[capacity|توان]] است.' } },
      { bin: 'capacity', t: { en: 'Her other debt payments are $200 a month', es: 'Sus otros pagos de deudas son $200 al mes', fa: 'قسط‌های دیگر قرضش ماهانه ۲۰۰ دالر است' },
        why: { en: 'Debt compared to income is [[capacity|capacity]]. $200 out of $1,600 is small.', es: 'La deuda comparada con los ingresos es [[capacity|capacidad]]. $200 de $1,600 es poco.', fa: 'قرض در برابر عاید [[capacity|توان]] است. ۲۰۰ از ۱۶۰۰ دالر کم است.' } },
      { bin: 'capital', t: { en: 'Has $2,000 in savings', es: 'Tiene $2,000 ahorrados', fa: '۲۰۰۰ دالر پس‌انداز دارد' },
        why: { en: 'Savings are [[capital|capital]]. They help if her income stops for a while.', es: 'Los ahorros son [[capital|capital]]. Ayudan si sus ingresos paran un tiempo.', fa: 'پس‌انداز [[capital|سرمایه]] است. اگر عایدش مدتی بند شود، کمک می‌کند.' } },
      { bin: 'collateral', t: { en: 'Offers her paid-off car as a promise', es: 'Ofrece su carro ya pagado como promesa', fa: 'موتر پرداخت‌شدهٔ خود را گرو می‌گذارد' },
        why: { en: 'If she stops paying, the lender can take the car. That is [[collateral|collateral]].', es: 'Si deja de pagar, el prestamista puede quitarle el carro. Eso es [[collateral|garantía]].', fa: 'اگر نپردازد، قرض‌دهنده موتر را می‌گیرد. این [[collateral|گرو]] است.' } },
      { bin: 'conditions', t: { en: 'The loan is for a work truck when jobs are growing', es: 'El préstamo es para un camión de trabajo cuando crecen los empleos', fa: 'قرض برای موتر کاری است، وقتی کارها زیاد می‌شوند' },
        why: { en: 'The purpose and the economy are [[conditions|conditions]]. More jobs help people repay.', es: 'El propósito y la economía son [[conditions|condiciones]]. Más empleos ayudan a pagar.', fa: 'هدف و حال اقتصاد [[conditions|شرایط]] هستند. کار بیشتر به پس دادن کمک می‌کند.' } },
      { bin: 'conditions', t: { en: 'She asks for $8,000, the truck\'s exact price', es: 'Pide $8,000, el precio exacto del camión', fa: '۸۰۰۰ دالر می‌خواهد، درست قیمت موتر کاری' },
        why: { en: 'The loan amount is part of [[conditions|conditions]]. She asks only for what she needs.', es: 'La cantidad del préstamo es parte de las [[conditions|condiciones]]. Pide solo lo que necesita.', fa: 'مقدار قرض بخشی از [[conditions|شرایط]] است. او فقط به اندازهٔ ضرورت می‌خواهد.' } }
    ],
    success: { en: 'Every fact found its C! Lenders use all 5 Cs to decide.', es: '¡Cada dato encontró su C! Los prestamistas usan las 5 C para decidir.', fa: 'هر خبر C خود را پیدا کرد! قرض‌دهنده‌ها با هر ۵ C تصمیم می‌گیرند.' }
  },

  boss: {
    at: [17, 8],
    stat: 'mov',
    need: 3,
    name: { en: 'The IOU Grump', es: 'El Gruñón del Pagaré', fa: 'غرغروی قرض‌دار' },
    appear: { en: 'The IOU Grump is hiding in the fog by the railroad bridge!', es: '¡El Gruñón del Pagaré se esconde en la niebla junto al puente del tren!', fa: 'غرغروی قرض‌دار در مه کنار پل ریل پنهان است!' },
    taunt: { en: 'Borrow, borrow, borrow! Paying it back? That is for other people!', es: '¡Pedir, pedir, pedir! ¿Devolverlo? ¡Eso es para otros!', fa: 'قرض، قرض، قرض! پس دادن؟ آن کار دیگران است!' },
    win: { en: 'The fog lifts off the bridge. Ledger page 5.1 floats down into your hands!', es: 'La niebla se va del puente. ¡La página 5.1 del libro cae en tus manos!', fa: 'مه از روی پل کنار می‌رود. صفحهٔ ۵.۱ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is credit?', es: '¿Qué es el crédito?', fa: 'قرض چیست؟' },
        choices: [
          { en: 'Borrowing now and paying back later', es: 'Pedir prestado ahora y pagar después', fa: 'حالا گرفتن و بعداً پس دادن' },
          { en: 'Money you earn at a part-time job', es: 'Dinero que ganas en un trabajo de medio tiempo', fa: 'پولی که از کار نیمه‌وقت کمایی می‌کنی' },
          { en: 'Money a store gives you as a gift', es: 'Dinero que una tienda te regala', fa: 'پولی که دکان به تو تحفه می‌دهد' },
          { en: 'Coins you save in a jar at home', es: 'Monedas que guardas en un frasco en casa', fa: 'سکه‌هایی که در خانه در یک بوتل جمع می‌کنی' }],
        answer: 0,
        why: { en: 'Credit is borrowing money now and paying it back later, usually with interest.', es: 'El crédito es pedir dinero ahora y devolverlo después, casi siempre con interés.', fa: 'قرض یعنی پول را حالا بگیری و بعداً پس بدهی، معمولاً با سود.' } },
      { q: { en: 'Ana borrows $1,000 and pays back $1,100 in all. What is the interest?', es: 'Ana pide $1,000 y devuelve $1,100 en total. ¿Cuál es el interés?', fa: 'آنا ۱۰۰۰ دالر قرض می‌گیرد و در کل ۱۱۰۰ دالر پس می‌دهد. سود چقدر است؟' },
        choices: [
          { en: '$100', es: '$100', fa: '۱۰۰ دالر' },
          { en: '$1,000', es: '$1,000', fa: '۱۰۰۰ دالر' },
          { en: '$1,100', es: '$1,100', fa: '۱۱۰۰ دالر' },
          { en: '$2,100', es: '$2,100', fa: '۲۱۰۰ دالر' }],
        answer: 0,
        why: { en: '$1,100 minus $1,000 is $100. The $1,000 is the principal. The $100 is interest.', es: '$1,100 menos $1,000 son $100. Los $1,000 son el principal. Los $100 son interés.', fa: '۱۱۰۰ منفی ۱۰۰۰ می‌شود ۱۰۰. ۱۰۰۰ دالر اصل پول است. ۱۰۰ دالر سود است.' } },
      { q: { en: 'Two loans are for the same amount. Which one costs less?', es: 'Dos préstamos son por la misma cantidad. ¿Cuál cuesta menos?', fa: 'دو قرض به یک اندازه هستند. کدام یکی ارزان‌تر است؟' },
        choices: [
          { en: 'The loan with an 8% APR', es: 'El préstamo con APR de 8%', fa: 'قرض با APR هشت فیصد' },
          { en: 'The loan with a 20% APR', es: 'El préstamo con APR de 20%', fa: 'قرض با APR بیست فیصد' },
          { en: 'They always cost the same', es: 'Siempre cuestan lo mismo', fa: 'همیشه یک قدر خرچ دارند' },
          { en: 'The one with the bigger sign', es: 'El que tiene el letrero más grande', fa: 'آن که لوحهٔ کلان‌تر دارد' }],
        answer: 0,
        why: { en: 'APR is the yearly cost of borrowing. A lower APR means you pay less interest.', es: 'La APR es el costo anual de pedir prestado. Una APR más baja significa menos interés.', fa: 'APR هزینهٔ سالانهٔ قرض است. APR کمتر یعنی سود کمتر می‌پردازی.' } },
      { q: { en: 'Which one is installment credit?', es: '¿Cuál es crédito a plazos?', fa: 'کدام یکی قرض قسطی است؟' },
        choices: [
          { en: 'A car loan with 48 equal payments', es: 'Un préstamo de carro con 48 pagos iguales', fa: 'قرض موتر با ۴۸ قسط برابر' },
          { en: 'A credit card you use again and again', es: 'Una tarjeta que usas una y otra vez', fa: 'کارت اعتباری که بارها از آن کار می‌گیری' },
          { en: 'A gift card from a good friend', es: 'Una tarjeta de regalo de un buen amigo', fa: 'کارت تحفه از یک دوست خوب' },
          { en: 'A savings account at the bank', es: 'Una cuenta de ahorros en el banco', fa: 'حساب پس‌انداز در بانک' }],
        answer: 0,
        why: { en: 'Installment credit has fixed payments for a set time. A credit card is revolving credit.', es: 'El crédito a plazos tiene pagos fijos por un tiempo fijo. La tarjeta es crédito rotativo.', fa: 'قرض قسطی قسط ثابت برای مدت معین دارد. کارت اعتباری قرض چرخشی است.' } },
      { q: { en: 'What makes a loan a secured loan?', es: '¿Qué hace que un préstamo tenga garantía?', fa: 'چه چیز یک قرض را قرض با گرو می‌سازد؟' },
        choices: [
          { en: 'It is backed by collateral', es: 'Está respaldado por una garantía', fa: 'گرو پشتوانهٔ آن است' },
          { en: 'It has a very low APR', es: 'Tiene una APR muy baja', fa: 'APR آن خیلی کم است' },
          { en: 'It comes from a big bank', es: 'Viene de un banco grande', fa: 'از یک بانک کلان است' },
          { en: 'It is paid back in a week', es: 'Se paga en una semana', fa: 'در یک هفته پس داده می‌شود' }],
        answer: 0,
        why: { en: 'Collateral backs a secured loan. If you stop paying, the lender can take it.', es: 'La garantía respalda el préstamo. Si dejas de pagar, el prestamista puede quitarla.', fa: 'گرو پشتوانهٔ قرض است. اگر نپردازی، قرض‌دهنده آن را می‌گیرد.' } },
      { q: { en: 'Which C asks: do you earn enough income to repay?', es: '¿Qué C pregunta: ganas suficiente para pagar?', fa: 'کدام C می‌پرسد: آیا عاید کافی برای پس دادن داری؟' },
        choices: [
          { en: 'Capacity', es: 'Capacidad', fa: 'توان' },
          { en: 'Character', es: 'Carácter', fa: 'شخصیت' },
          { en: 'Collateral', es: 'Garantía', fa: 'گرو' },
          { en: 'Conditions', es: 'Condiciones', fa: 'شرایط' }],
        answer: 0,
        why: { en: 'Capacity is enough income to repay. Lenders compare your debt to your income.', es: 'La capacidad es tener ingresos para pagar. Comparan tu deuda con tus ingresos.', fa: 'توان یعنی عاید کافی برای پس دادن. قرض تو را با عایدت مقایسه می‌کنند.' } },
      { q: { en: 'A lender reads your credit report to see if you pay on time. Which C?', es: 'Un prestamista lee tu reporte de crédito para ver si pagas a tiempo. ¿Qué C es?', fa: 'قرض‌دهنده گزارش قرض تو را می‌خواند تا ببیند سر وقت می‌پردازی. کدام C؟' },
        choices: [
          { en: 'Character', es: 'Carácter', fa: 'شخصیت' },
          { en: 'Capital', es: 'Capital', fa: 'سرمایه' },
          { en: 'Capacity', es: 'Capacidad', fa: 'توان' },
          { en: 'Conditions', es: 'Condiciones', fa: 'شرایط' }],
        answer: 0,
        why: { en: 'Character is your history of paying bills on time. The credit report shows it.', es: 'El carácter es tu historial de pagar a tiempo. El reporte de crédito lo muestra.', fa: 'شخصیت سابقهٔ پرداخت بل‌ها سر وقت است. گزارش قرض آن را نشان می‌دهد.' } },
      { q: { en: 'Lena has $2,000 in savings. Which C is that?', es: 'Lena tiene $2,000 ahorrados. ¿Qué C es?', fa: 'لینا ۲۰۰۰ دالر پس‌انداز دارد. این کدام C است؟' },
        choices: [
          { en: 'Capital', es: 'Capital', fa: 'سرمایه' },
          { en: 'Collateral', es: 'Garantía', fa: 'گرو' },
          { en: 'Character', es: 'Carácter', fa: 'شخصیت' },
          { en: 'Conditions', es: 'Condiciones', fa: 'شرایط' }],
        answer: 0,
        why: { en: 'Capital is the savings and things of value you have. It helps if income stops.', es: 'El capital son tus ahorros y cosas de valor. Ayuda si los ingresos paran.', fa: 'سرمایه پس‌انداز و چیزهای قیمتی توست. اگر عاید بند شود، کمک می‌کند.' } }
    ]
  },

  learned: [
    { en: '[[credit|Credit]] is borrowing now and paying back later, usually with [[interest|interest]].', es: 'El [[credit|crédito]] es pedir prestado ahora y pagar después, casi siempre con [[interest|interés]].', fa: '[[credit|قرض]] یعنی حالا گرفتن و بعداً پس دادن، معمولاً با [[interest|سود]].' },
    { en: 'Installment credit has fixed payments. Revolving credit lets you borrow again, up to a limit.', es: 'El crédito a plazos tiene pagos fijos. El crédito rotativo deja volver a usar, hasta un límite.', fa: 'قرض قسطی قسط ثابت دارد. قرض چرخشی اجازه می‌دهد دوباره بگیری، تا یک حد.' },
    { en: 'Lenders check the [[5 cs|5 Cs]]: character, capacity, capital, collateral and conditions.', es: 'Los prestamistas revisan las [[5 cs|5 C]]: carácter, capacidad, capital, garantía y condiciones.', fa: 'قرض‌دهنده‌ها [[5 cs|۵ C]] را می‌بینند: شخصیت، توان، سرمایه، گرو و شرایط.' }
  ],
  reflect: {
    q: { en: 'Someday you may want a loan for a car or school. How can you show good character?', es: 'Algún día quizás quieras un préstamo para un carro o estudios. ¿Cómo puedes mostrar buen carácter?', fa: 'شاید روزی برای موتر یا درس قرض بخواهی. چطور می‌توانی شخصیت خوب نشان بدهی؟' },
    starter: { en: 'I can show good character by', es: 'Puedo mostrar buen carácter si', fa: 'من می‌توانم شخصیت خوب را این‌طور نشان بدهم:' }
  }
};
