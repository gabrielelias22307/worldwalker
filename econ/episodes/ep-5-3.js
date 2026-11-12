/* COINWALKER · Episode 5.3 · Credit Scores and Mortgages
   Credit Crossing, a made-up small town, on a house-hunting Saturday.
   North half: the Crossing Homes real estate office (J) and an apartment building (U) in the north-west,
   the Credit Crossing Bank loan office (J) and a house for sale in the north-east, a sidewalk (:) along row 4,
   Ana's house and lawns below. Row 11 is Maple Street. South-west: two houses with For Sale signs and a path;
   south-east: Crossing Park with a pond (~), trees and flowers.
   People: a loan officer (credit scores), a real estate agent (mortgage, down payment, collateral),
   a bus driver choosing a 15-year or a 30-year loan. Renting and buying are shown fairly in the houses.
   The ledger stone is a survey: 5 posts, one for each part of a credit score, then 4 questions.
   This episode gives the Rail Card (course). */
window.EPISODE = {
  id: '5.3',
  realm: 5,
  sol: 'EPF',
  title: { en: 'Credit Scores and Mortgages', es: 'Puntajes de crédito e hipotecas', fa: 'نمرهٔ اعتبار و قرض خانه' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Credit Crossing, house-hunting day', es: 'Cruce del Crédito, día de buscar casa', fa: 'گذرگاه قرض، روز خانه‌یابی' },
  intro: [
    { en: 'The Grump tore the page about credit. Now people forget how home loans work.',
      es: 'El Gruñón rompió la página sobre el crédito. Ahora la gente olvida cómo funcionan los préstamos de casa.',
      fa: 'غرغرو صفحهٔ قرض را پاره کرد. حالا مردم فراموش می‌کنند قرض خانه چطور کار می‌کند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town in Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-78.9, 38.0],
    start: [
      { en: 'Credit Crossing is a made-up town. Today is house-hunting day!',
        es: 'Cruce del Crédito es un pueblo inventado. ¡Hoy es día de buscar casa!',
        fa: 'گذرگاه قرض یک شهرک خیالی است. امروز روز خانه‌یابی است!' },
      { en: 'Families walk past houses with For Sale signs.',
        es: 'Las familias pasan junto a casas con letreros de Se Vende.',
        fa: 'خانواده‌ها از کنار خانه‌هایی با لوحهٔ «برای فروش» می‌گذرند.' },
      { en: 'Most people need a loan to buy a home. It is called a mortgage.',
        es: 'Casi todos necesitan un préstamo para comprar una casa. Se llama hipoteca.',
        fa: 'بیشتر مردم برای خریدن خانه قرض لازم دارند. به آن قرض خانه می‌گویند.' }
    ],
    page: { en: 'A mortgage is often paid back over 15 or 30 years.',
      es: 'Una hipoteca muchas veces se paga en 15 o 30 años.',
      fa: 'قرض خانه اکثراً در ۱۵ یا ۳۰ سال پس داده می‌شود.' },
    guess: {
      q: { en: 'What helps a credit score the most?', es: '¿Qué ayuda más a un puntaje de crédito?', fa: 'چه چیز به نمرهٔ اعتبار از همه بیشتر کمک می‌کند؟' },
      choices: [
        { t: { en: '⏰ Paying bills on time', es: '⏰ Pagar las cuentas a tiempo', fa: '⏰ پرداخت بل‌ها سر وقت' }, ok: true },
        { t: { en: '💵 Earning a big paycheck', es: '💵 Ganar un sueldo grande', fa: '💵 گرفتن معاش کلان' } }
      ],
      why: { en: 'Paying on time counts the most. How much you earn is not part of the score.',
        es: 'Pagar a tiempo es lo que más cuenta. Lo que ganas no es parte del puntaje.',
        fa: 'پرداخت سر وقت از همه مهم‌تر است. معاش تو بخشی از نمره نیست.' }
    },
    next: {
      q: { en: 'Next: saving or investing. Which one has more risk, and more chance to grow?',
        es: 'Ahora: ahorrar o invertir. ¿Cuál tiene más riesgo y más posibilidad de crecer?',
        fa: 'بعدی: پس‌انداز یا سرمایه‌گذاری. کدام خطر بیشتر و چانس رشد بیشتر دارد؟' },
      choices: [
        { t: { en: '📈 Investing', es: '📈 Invertir', fa: '📈 سرمایه‌گذاری' }, ok: true },
        { t: { en: '🐖 Saving in a bank', es: '🐖 Ahorrar en un banco', fa: '🐖 پس‌انداز در بانک' } }
      ],
      why: { en: 'Investing can grow more, but you can lose money. Bank savings are safer and grow slowly.',
        es: 'Invertir puede crecer más, pero puedes perder dinero. Ahorrar en el banco es más seguro y crece despacio.',
        fa: 'سرمایه‌گذاری بیشتر رشد کرده می‌تواند، اما پول را از دست داده می‌توانی. پس‌انداز بانک امن‌تر است و آهسته رشد می‌کند.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [4, 2], name: { en: 'Mr. Romero', es: 'Sr. Romero', fa: 'آقای رومرو' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f6f9a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Welcome to Crossing Homes! We help people buy and rent homes.', es: '¡Bienvenido a Crossing Homes! Ayudamos a comprar y alquilar casas.', fa: 'به دفتر رهنمای کراسینگ هومز خوش آمدی! در خرید و کرایهٔ خانه کمک می‌کنیم.' },
        { en: 'Buying costs a lot at the start. Renting costs less to start.', es: 'Comprar cuesta mucho al principio. Alquilar cuesta menos al empezar.', fa: 'خریدن در شروع خیلی پول می‌خواهد. کرایه در شروع کمتر پول می‌خواهد.' },
        { en: 'Neither one is always better. It depends on your money and plans.', es: 'Ninguno es siempre mejor. Depende de tu dinero y tus planes.', fa: 'هیچ کدام همیشه بهتر نیست. به پول و پلان‌های تو بستگی دارد.' }
      ] },
    { at: [11, 3], name: { en: 'Lucía', es: 'Lucía', fa: 'لوسیا' },
      look: { skin: 2, hair: '#1a1008', shirt: '#d0603a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I [[rent|rent]] this apartment with a roommate. We split the rent.', es: '[[rent|Alquilo]] este apartamento con una compañera. Dividimos el alquiler.', fa: 'من این آپارتمان را با یک هم‌اتاق [[rent|کرایه]] کرده‌ام. کرایه را تقسیم می‌کنیم.' },
        { en: 'When the heater breaks, the owner pays to fix it.', es: 'Cuando se rompe la calefacción, el dueño paga el arreglo.', fa: 'وقتی بخاری خراب می‌شود، صاحب خانه پول جور کردنش را می‌دهد.' },
        { en: 'If I get a job in another city, I can move easily.', es: 'Si consigo trabajo en otra ciudad, me puedo mudar fácil.', fa: 'اگر در شهر دیگر کار پیدا کنم، به آسانی کوچ کرده می‌توانم.' }
      ] },
    { at: [23, 2], name: { en: 'Mrs. Novak', es: 'Sra. Novak', fa: 'خانم نوواک' },
      look: { skin: 0, hair: '#c8a060', shirt: '#4a7a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Two people asked for loans today. They earn the same pay.', es: 'Hoy dos personas pidieron préstamos. Las dos ganan el mismo sueldo.', fa: 'امروز دو نفر قرض خواستند. هر دو یک اندازه معاش می‌گیرند.' },
        { en: 'Nadia pays every bill on time. Her score is high.', es: 'Nadia paga cada cuenta a tiempo. Su puntaje es alto.', fa: 'نادیه هر بل را سر وقت می‌پردازد. نمره‌اش بلند است.' },
        { en: 'Sam often pays late. His score is low. Their pay does not count.', es: 'Sam paga tarde muchas veces. Su puntaje es bajo. El sueldo no cuenta.', fa: 'سام اکثراً دیر می‌پردازد. نمره‌اش پایین است. معاش‌شان حساب نمی‌شود.' }
      ] },
    { at: [29, 2], name: { en: 'Mr. Diallo', es: 'Sr. Diallo', fa: 'آقای دیالو' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#8a5a2a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'We are selling our house. Our 30-year mortgage is almost paid off.', es: 'Vendemos nuestra casa. Nuestra hipoteca de 30 años ya casi está pagada.', fa: 'خانهٔ خود را می‌فروشیم. قرض ۳۰ سالهٔ خانهٔ ما تقریباً تمام شده.' },
        { en: 'Each month, part of our payment was [[interest|interest]]. Part paid the loan.', es: 'Cada mes, una parte del pago era [[interest|interés]]. Otra parte pagaba el préstamo.', fa: 'هر ماه، بخشی از قسط ما [[interest|سود]] بود. بخشی قرض را پس می‌داد.' },
        { en: 'Paying for 30 years means a lot of interest in all.', es: 'Pagar durante 30 años significa mucho interés en total.', fa: 'پرداخت برای ۳۰ سال یعنی در مجموع سود زیاد.' }
      ] },
    { at: [3, 7], name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      look: { skin: 3, hair: '#3a2416', shirt: '#c04a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My [[credit limit|credit limit]] is $1,000. I owe only $100 right now.', es: 'Mi [[credit limit|límite de crédito]] es $1,000. Ahora solo debo $100.', fa: '[[credit limit|حد قرض]] من ۱٬۰۰۰ دالر است. حالا فقط ۱۰۰ دالر قرضدار هستم.' },
        { en: 'That is a small part of my limit. It helps my score.', es: 'Es una parte pequeña de mi límite. Eso ayuda a mi puntaje.', fa: 'این بخش کوچکی از حد قرض من است. به نمره‌ام کمک می‌کند.' },
        { en: 'Using all of your limit can pull your score down.', es: 'Usar todo tu límite puede bajar tu puntaje.', fa: 'استفادهٔ تمام حد قرض نمره‌ات را پایین آورده می‌تواند.' }
      ] },
    { at: [3, 14], name: { en: 'Mr. Park', es: 'Sr. Park', fa: 'آقای پارک' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#3a5a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'Owners pay the mortgage, and also house taxes and insurance.', es: 'Los dueños pagan la hipoteca, y también los impuestos y el seguro de la casa.', fa: 'صاحبان خانه قسط قرض، و همچنان مالیات و بیمهٔ خانه را می‌پردازند.' },
        { en: 'When my roof leaks, I pay to fix it myself.', es: 'Cuando mi techo gotea, yo pago el arreglo.', fa: 'وقتی بام من چکه می‌کند، خودم پول جور کردنش را می‌دهم.' },
        { en: 'Owning is a lot of work. But the home is mine.', es: 'Ser dueño da mucho trabajo. Pero la casa es mía.', fa: 'صاحب خانه بودن کار زیاد دارد. اما خانه از خودم است.' }
      ] },
    { at: [8, 14], name: { en: 'Mrs. Begum', es: 'Sra. Begum', fa: 'خانم بیگم' },
      look: { skin: 4, hair: '#a8a8a8', shirt: '#8a4ac0', pants: '#2a3a2a', style: 'bun' },
      lines: [
        { en: 'I got my first credit card many years ago.', es: 'Tuve mi primera tarjeta de crédito hace muchos años.', fa: 'اولین کارت قرض خود را سال‌ها پیش گرفتم.' },
        { en: 'A long [[credit history|credit history]] helps a score.', es: 'Un [[credit history|historial de crédito]] largo ayuda al puntaje.', fa: 'یک [[credit history|سابقهٔ قرض]] دراز به نمره کمک می‌کند.' },
        { en: 'I do not open many new cards at once. That can lower it.', es: 'No abro muchas tarjetas nuevas a la vez. Eso puede bajarlo.', fa: 'من یکباره کارت‌های نو زیاد باز نمی‌کنم. آن نمره را پایین آورده می‌تواند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: Crossing Homes, the real estate office (J, door 4,2), the apartment building (U, door 11,3),
     Ana's house (Q over h, door 3,7). North-east: the bank loan office (J, door 23,2) and Mr. Diallo's house for
     sale (R over h, door 29,2). Row 4: a sidewalk (:). Row 11: Maple Street (l).
     South-west: two houses for sale (doors 3,14 and 8,14) and a path (:). South-east: Crossing Park, a pond (~). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJ..UUUUU......JJJJJJJ.RRRT',
    'T.JJdJJ..UUUUU......JJJdJJJ.hdhT',
    'T.x.....xUUdUU.....x.......x...T',
    'T::::::::::::::::::::::::::::::T',
    'T...T.........,,,....T.....T...T',
    'T.QQQ......T...............,,..T',
    'T.hdh.................T....,,..T',
    'T......T......,,...............T',
    'T...T.........,,.....T......T..T',
    'T..............................T',
    'TllllllllllllllllllllllllllllllT',
    'T..............................T',
    'T.RRR..QQQ.......x.T.....,,,...T',
    'T.hdh..hdh..........~~~~...,,..T',
    'T....x.............~~~~~~......T',
    'T:::::::::::::......~~~~...T...T',
    'T.T..T..T....:..T..........,,..T',
    'T............:.........T.......T',
    'T..,,........:......,,.........T',
    'T..,,........:......,,....T....T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [7, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 12], at: [14, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north, across Maple Street, into the flowers.', es: 'Desde esta nota, camina 4 pasos al norte, cruzando Maple Street, hasta las flores.', fa: 'از این یادداشت، ۴ قدم به شمال برو، از سرک میپل بگذر، تا گل‌ها.' },
      text: { en: 'A lost coin! Many buyers save coin by coin for their down payment.', es: '¡Una moneda perdida! Muchos compradores ahorran moneda a moneda para su pago inicial.', fa: 'یک سکهٔ گم‌شده! بسیاری از خریداران سکه به سکه برای پیش‌پرداخت پس‌انداز می‌کنند.' } },
    { clueAt: [24, 13], at: [27, 13], decor: 'flower',
      clue: { en: 'From this note, walk 3 steps east, into the flower bed.', es: 'Desde esta nota, camina 3 pasos al este, hasta el jardín de flores.', fa: 'از این یادداشت، ۳ قدم به شرق برو، تا باغچهٔ گل.' },
      text: { en: 'A flower! Owners pay for their own garden. Renters often share a park instead.', es: '¡Una flor! Los dueños pagan su propio jardín. Los que alquilan a veces usan un parque.', fa: 'یک گل! صاحبان خانه پول باغچهٔ خود را می‌دهند. کرایه‌نشین‌ها اکثراً از پارک کار می‌گیرند.' } }
  ],

  words: {
    credit: { en: 'borrowing money now and paying it back later', es: 'pedir dinero prestado ahora y devolverlo después', fa: 'قرض گرفتن پول حالا و پس دادن آن بعداً' },
    'credit score': { en: 'a number lenders use to guess how likely you are to repay', es: 'un número que usan los prestamistas para adivinar si vas a pagar', fa: 'عددی که قرض‌دهنده‌ها برای حدس زدن پس دادن قرض تو کار می‌گیرند' },
    lender: { en: 'a bank or business that lends money', es: 'un banco o negocio que presta dinero', fa: 'بانک یا کسب و کاری که پول قرض می‌دهد' },
    interest: { en: 'the extra money you pay for borrowing', es: 'el dinero extra que pagas por pedir prestado', fa: 'پول اضافه که برای قرض گرفتن می‌پردازی' },
    'interest rate': { en: 'how much interest you pay, as a percent of the loan', es: 'cuánto interés pagas, como un porcentaje del préstamo', fa: 'اندازهٔ سود، به فیصدی از قرض' },
    mortgage: { en: 'a loan to buy a home, paid back over many years', es: 'un préstamo para comprar una casa, que se paga en muchos años', fa: 'قرضی برای خریدن خانه، که در سال‌های زیاد پس داده می‌شود' },
    'down payment': { en: 'the part of the price you pay up front', es: 'la parte del precio que pagas al principio', fa: 'بخشی از قیمت که در شروع می‌پردازی' },
    collateral: { en: 'something the lender can take if you do not pay', es: 'algo que el prestamista puede quitarte si no pagas', fa: 'چیزی که قرض‌دهنده اگر نپردازی گرفته می‌تواند' },
    foreclosure: { en: 'when the bank takes a home because the loan was not paid', es: 'cuando el banco se queda con una casa porque no se pagó el préstamo', fa: 'وقتی بانک خانه را می‌گیرد چون قرض پرداخته نشده' },
    'payment history': { en: 'your record of paying bills on time, or late', es: 'tu registro de pagar las cuentas a tiempo o tarde', fa: 'سابقهٔ پرداخت بل‌های تو، سر وقت یا دیر' },
    'credit history': { en: 'how long and how well you have used credit', es: 'cuánto tiempo y qué tan bien has usado el crédito', fa: 'این که چقدر وقت و چقدر خوب از قرض کار گرفته‌ای' },
    'credit limit': { en: 'the most you are allowed to borrow on a card', es: 'lo máximo que puedes pedir prestado con una tarjeta', fa: 'بیشترین پولی که با یک کارت قرض گرفته می‌توانی' },
    rent: { en: 'money you pay each month to live in a home you do not own', es: 'dinero que pagas cada mes para vivir en una casa que no es tuya', fa: 'پولی که هر ماه برای زندگی در خانه‌ای که از تو نیست می‌پردازی' }
  },

  npcs: [
    {
      x: 22, y: 5,
      name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      role: { en: 'Loan officer at the bank', es: 'Encargado de préstamos del banco', fa: 'کارمند قرض بانک' },
      look: { skin: 5, hair: '#1a1008', shirt: '#f0f0e8', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I am a loan officer. I help people borrow money for a home.', es: 'Soy encargado de préstamos. Ayudo a la gente a pedir dinero para una casa.', fa: 'من کارمند قرض هستم. به مردم در گرفتن قرض خانه کمک می‌کنم.' },
        { en: 'First I look at a [[credit score|credit score]]. It is a number.', es: 'Primero miro el [[credit score|puntaje de crédito]]. Es un número.', fa: 'اول به [[credit score|نمرهٔ اعتبار]] نگاه می‌کنم. این یک عدد است.' },
        { en: 'It helps a [[lender|lender]] guess how likely you are to pay back.', es: 'Ayuda al [[lender|prestamista]] a adivinar si es probable que pagues.', fa: 'به [[lender|قرض‌دهنده]] کمک می‌کند حدس بزند که قرض را پس می‌دهی یا نه.' },
        { en: 'The most common scores usually go from 300 to 850. Higher is better.', es: 'Los puntajes más comunes suelen ir de 300 a 850. Más alto es mejor.', fa: 'معمول‌ترین نمره‌ها اکثراً از ۳۰۰ تا ۸۵۰ هستند. بلندتر بهتر است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What does a credit score help a lender guess?', es: '¿Qué ayuda a adivinar un puntaje de crédito?', fa: 'نمرهٔ اعتبار به قرض‌دهنده در حدس زدن چه چیز کمک می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'How likely you are to pay back', es: 'Si es probable que pagues', fa: 'این که قرض را پس می‌دهی یا نه' },
            why: { en: 'Yes! A higher score can also mean a lower [[interest rate|interest rate]].', es: '¡Sí! Un puntaje alto también puede dar una [[interest rate|tasa de interés]] más baja.', fa: 'بله! نمرهٔ بلند همچنان [[interest rate|نرخ سود]] پایین‌تر را معنی داده می‌تواند.' } },
          { t: { en: 'How much money your job pays', es: 'Cuánto dinero te paga tu trabajo', fa: 'این که کارت چقدر معاش می‌دهد' },
            why: { en: 'No. Your income is not part of a credit score.', es: 'No. Lo que ganas no es parte del puntaje de crédito.', fa: 'نه. معاش تو بخشی از نمرهٔ اعتبار نیست.' } },
          { t: { en: 'How big a house you would like', es: 'Qué tan grande quieres tu casa', fa: 'این که چقدر خانهٔ کلان می‌خواهی' },
            why: { en: 'No. The score is about how you handle loans and bills.', es: 'No. El puntaje trata de cómo manejas préstamos y cuentas.', fa: 'نه. نمره دربارهٔ این است که با قرض و بل‌ها چطور رفتار می‌کنی.' } }
        ]
      }
    },
    {
      x: 6, y: 3,
      name: { en: 'Ms. Lin', es: 'Sra. Lin', fa: 'خانم لین' },
      role: { en: 'Real estate agent', es: 'Agente de bienes raíces', fa: 'رهنمای معاملات خانه' },
      look: { skin: 1, hair: '#120c08', shirt: '#c0392b', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I am a real estate agent. I help people find homes.', es: 'Soy agente de bienes raíces. Ayudo a la gente a encontrar casa.', fa: 'من رهنمای معاملات خانه هستم. به مردم در پیدا کردن خانه کمک می‌کنم.' },
        { en: 'Most buyers use a [[mortgage|mortgage]]. It is a loan to buy a home.', es: 'Casi todos los compradores usan una [[mortgage|hipoteca]]. Es un préstamo para comprar casa.', fa: 'بیشتر خریداران [[mortgage|قرض خانه]] می‌گیرند. قرضی برای خریدن خانه است.' },
        { en: 'First they pay part of the price. That is the [[down payment|down payment]].', es: 'Primero pagan una parte del precio. Ese es el [[down payment|pago inicial]].', fa: 'اول بخشی از قیمت را می‌پردازند. این [[down payment|پیش‌پرداخت]] است.' },
        { en: 'The house is [[collateral|collateral]]. If they stop paying, the bank can take it.', es: 'La casa es la [[collateral|garantía]]. Si dejan de pagar, el banco puede quitarla.', fa: 'خانه [[collateral|گرو]] است. اگر پرداخت را بس کنند، بانک آن را گرفته می‌تواند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why is the house called collateral for a mortgage?', es: '¿Por qué la casa es la garantía de una hipoteca?', fa: 'چرا خانه گرو قرض خانه گفته می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'The bank can take it if you stop paying', es: 'El banco puede quitarla si dejas de pagar', fa: 'اگر نپردازی، بانک آن را گرفته می‌تواند' },
            why: { en: 'Yes! When the bank takes the house, it is called [[foreclosure|foreclosure]].', es: '¡Sí! Cuando el banco se queda con la casa, se llama [[foreclosure|ejecución hipotecaria]].', fa: 'بله! وقتی بانک خانه را می‌گیرد، به آن [[foreclosure|ضبط خانه]] می‌گویند.' } },
          { t: { en: 'The bank must pay for every repair', es: 'El banco debe pagar cada arreglo', fa: 'بانک باید پول هر ترمیم را بدهد' },
            why: { en: 'No. Owners pay for their own repairs. Collateral is what the bank can take.', es: 'No. Los dueños pagan sus arreglos. La garantía es lo que el banco puede quitar.', fa: 'نه. صاحبان خانه پول ترمیم را خودشان می‌دهند. گرو چیزی است که بانک گرفته می‌تواند.' } },
          { t: { en: 'The agent keeps the house key for a year', es: 'La agente guarda la llave de la casa un año', fa: 'رهنما کلید خانه را یک سال نگه می‌دارد' },
            why: { en: 'No. The buyer gets the key. If they do not pay, the bank can take the house.', es: 'No. El comprador recibe la llave. Si no paga, el banco puede quitarle la casa.', fa: 'نه. خریدار کلید را می‌گیرد. اگر نپردازد، بانک خانه را گرفته می‌تواند.' } }
        ]
      }
    },
    {
      x: 10, y: 18,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'City bus driver', es: 'Chofer de autobús', fa: 'دریور بس شهری' },
      look: { skin: 3, hair: '#2a2a2a', shirt: '#2f5f9a', pants: '#2a2a2a', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I drive a city bus. I am buying my first home!', es: 'Manejo un autobús. ¡Estoy comprando mi primera casa!', fa: 'من دریور بس شهری هستم. اولین خانهٔ خود را می‌خرم!' },
        { en: 'A mortgage is paid over many years, often 15 or 30.', es: 'Una hipoteca se paga en muchos años, a menudo 15 o 30.', fa: 'قرض خانه در سال‌های زیاد پرداخته می‌شود، اکثراً ۱۵ یا ۳۰.' },
        { en: 'A 15-year loan has bigger monthly payments than a 30-year loan.', es: 'Un préstamo de 15 años tiene pagos mensuales más grandes que uno de 30.', fa: 'قرض ۱۵ ساله قسط‌های ماهانهٔ کلان‌تر از قرض ۳۰ ساله دارد.' },
        { en: 'But in all, you pay much less [[interest|interest]] on a 15-year loan.', es: 'Pero en total, pagas mucho menos [[interest|interés]] con el de 15 años.', fa: 'اما در مجموع، با قرض ۱۵ ساله [[interest|سود]] خیلی کمتر می‌پردازی.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Omar wants to pay much less interest in all. Which loan should he pick?', es: 'Omar quiere pagar mucho menos interés en total. ¿Qué préstamo debe elegir?', fa: 'عمر می‌خواهد در مجموع سود خیلی کمتر بپردازد. کدام قرض را انتخاب کند؟' },
        choices: [
          { ok: true, t: { en: 'The 15-year loan', es: 'El préstamo de 15 años', fa: 'قرض ۱۵ ساله' },
            why: { en: 'Yes! Each payment is bigger, but he pays much less interest in all.', es: '¡Sí! Cada pago es más grande, pero paga mucho menos interés en total.', fa: 'بله! هر قسط کلان‌تر است، اما در مجموع سود خیلی کمتر می‌پردازد.' } },
          { t: { en: 'The 30-year loan', es: 'El préstamo de 30 años', fa: 'قرض ۳۰ ساله' },
            why: { en: 'No. Its monthly payments are smaller, but 30 years of interest adds up to much more.', es: 'No. Sus pagos mensuales son menores, pero 30 años de interés suman mucho más.', fa: 'نه. قسط‌های ماهانه‌اش کوچک‌تر است، اما سود ۳۰ سال خیلی بیشتر می‌شود.' } },
          { t: { en: 'Either one, it is the same', es: 'Cualquiera, es lo mismo', fa: 'هر کدام، یکسان است' },
            why: { en: 'No. A shorter loan gives interest less time to grow, so it costs less in all.', es: 'No. Un préstamo más corto da menos tiempo al interés, así que cuesta menos en total.', fa: 'نه. قرض کوتاه‌تر به سود وقت کمتر می‌دهد، پس در مجموع کمتر خرچ دارد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 3, text: { en: 'CROSSING HOMES · Real estate office. We help you buy or rent a home.', es: 'CROSSING HOMES · Oficina de bienes raíces. Te ayudamos a comprar o alquilar casa.', fa: 'کراسینگ هومز · دفتر رهنمای معاملات. در خرید یا کرایهٔ خانه کمکت می‌کنیم.' } },
    { x: 8, y: 3, text: { en: 'MAPLE APARTMENTS · For rent. Rent is paid each month. The owner fixes the building.', es: 'APARTAMENTOS MAPLE · Se alquila. El alquiler se paga cada mes. El dueño arregla el edificio.', fa: 'آپارتمان‌های میپل · برای کرایه. کرایه هر ماه پرداخته می‌شود. صاحب ساختمان آن را ترمیم می‌کند.' } },
    { x: 19, y: 3, text: { en: 'CREDIT CROSSING BANK · Loan office. Ask here about a mortgage, a loan to buy a home.', es: 'BANCO DE CRUCE DEL CRÉDITO · Oficina de préstamos. Pregunta aquí por una hipoteca.', fa: 'بانک گذرگاه قرض · دفتر قرض. اینجا دربارهٔ قرض خانه بپرس.' } },
    { x: 27, y: 3, text: { en: 'FOR SALE · $200,000. A down payment of 20% would be $40,000.', es: 'SE VENDE · $200,000. Un pago inicial del 20% sería $40,000.', fa: 'برای فروش · ۲۰۰٬۰۰۰ دالر. پیش‌پرداخت ۲۰ فیصد می‌شود ۴۰٬۰۰۰ دالر.' } },
    { x: 5, y: 15, text: { en: 'FOR SALE · 2 houses. Talk to your bank about a loan before you shop.', es: 'SE VENDEN · 2 casas. Habla con tu banco sobre un préstamo antes de buscar.', fa: 'برای فروش · ۲ خانه. پیش از خانه‌یابی با بانک خود دربارهٔ قرض گپ بزن.' } },
    { x: 17, y: 13, text: { en: 'CROSSING PARK · Open to everyone, renters and owners alike.', es: 'PARQUE CROSSING · Abierto para todos, los que alquilan y los dueños.', fa: 'پارک کراسینگ · برای همه باز است، کرایه‌نشین‌ها و صاحبان خانه.' } }
  ],

  /* the quest: Priya the nurse (gold !) on the south side of Maple Street -> Mr. Bell the park gardener in the
     south-east -> the Grump's Paper Gust tore her house-hunting checklist into 3 pieces: by the bank loan office
     (north-east), by the apartments (north-west), by the houses for sale (south-west). Then catch the gust in the park. */
  quest: {
    stat: 'hei',
    title: { en: 'The Windblown Checklist', es: 'La lista que voló', fa: 'فهرستی که باد برد' },
    giver: {
      x: 11, y: 13,
      name: { en: 'Priya', es: 'Priya', fa: 'پریا' },
      role: { en: 'Nurse looking for a home', es: 'Enfermera que busca casa', fa: 'نرس که خانه می‌پالد' },
      look: { skin: 3, hair: '#1a1008', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'long' },
      lines: [
        { en: 'I made a checklist for buying a home. Step by step!', es: 'Hice una lista para comprar una casa. ¡Paso a paso!', fa: 'یک فهرست برای خریدن خانه ساختم. قدم به قدم!' },
        { en: 'Then a big gust of wind blew it out of my hands!', es: '¡Luego una ráfaga de viento me la quitó de las manos!', fa: 'بعد یک تندباد آن را از دستم برد!' },
        { en: 'Mr. Bell works in the park. Maybe he saw where it went.', es: 'El Sr. Bell trabaja en el parque. Tal vez vio adónde fue.', fa: 'آقای بل در پارک کار می‌کند. شاید دیده باشد کجا رفت.' }
      ],
      wait: { en: 'Mr. Bell works in Crossing Park, to the south-east.', es: 'El Sr. Bell trabaja en el parque Crossing, al sureste.', fa: 'آقای بل در پارک کراسینگ، طرف جنوب شرق، کار می‌کند.' },
      thanks: { en: 'My checklist! Get a loan ready, then shop for a home. Thank you!', es: '¡Mi lista! Prepara el préstamo y luego busca casa. ¡Gracias!', fa: 'فهرستم! اول قرض را آماده کن، بعد خانه بپال. تشکر!' }
    },
    contact: {
      x: 24, y: 18,
      name: { en: 'Mr. Bell', es: 'Sr. Bell', fa: 'آقای بل' },
      role: { en: 'Park gardener', es: 'Jardinero del parque', fa: 'باغبان پارک' },
      look: { skin: 0, hair: '#b8b8b8', shirt: '#4a7a3a', pants: '#3a2a1a', hat: '#c8a060', style: 'short' },
      lines: [
        { en: 'I was raking leaves. Then the Grump\'s Paper Gust spun past me!', es: 'Estaba juntando hojas. ¡Luego pasó girando la Ráfaga de Papel del Gruñón!', fa: 'برگ‌ها را جمع می‌کردم. بعد تندباد کاغذ غرغرو از کنارم چرخید!' },
        { en: 'It tore a checklist into 3 pieces and blew them around town.', es: 'Rompió una lista en 3 pedazos y los sopló por el pueblo.', fa: 'یک فهرست را ۳ تکه کرد و آنها را در شهرک پراکنده ساخت.' },
        { en: 'Follow the clues to each piece. Then catch the gust here!', es: 'Sigue las pistas hasta cada pedazo. ¡Luego atrapa la ráfaga aquí!', fa: 'سرنخ‌ها را تا هر تکه دنبال کن. بعد تندباد را همین‌جا بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [28, 19],
      hops: [[17, 19], [22, 17]],
      name: { en: 'The Paper Gust', es: 'La Ráfaga de Papel', fa: 'تندباد کاغذ' },
      taunt: { en: 'Whoosh! The Paper Gust spins: "Checklists? Plans? I blow them all away!"', es: '¡Fiuuu! La Ráfaga de Papel gira: "¿Listas? ¿Planes? ¡Los soplo todos!"', fa: 'ووش! تندباد کاغذ می‌چرخد: «فهرست؟ پلان؟ همه را با باد می‌برم!»' },
      clues: [
        { t: { en: 'Piece 1, "Get a loan ready": it blew to where people borrow money for a home.', es: 'Pedazo 1, "Prepara el préstamo": voló adonde la gente pide dinero para una casa.', fa: 'تکهٔ ۱، «قرض را آماده کن»: به جایی رفت که مردم برای خانه قرض می‌گیرند.' },
          zones: [{ x: 20, y: 3, w: 7, h: 1 }],
          noBy: [{ x: 1, y: 3, w: 7, h: 1, t: { en: 'This is the real estate office. Agents help you find a home. The loan comes from a lender, like the bank.', es: 'Esta es la oficina de bienes raíces. Los agentes ayudan a encontrar casa. El préstamo viene de un prestamista, como el banco.', fa: 'این دفتر رهنما است. رهنما در پیدا کردن خانه کمک می‌کند. قرض از قرض‌دهنده، مثل بانک، می‌آید.' } }],
          found: { en: 'Piece 1, by the bank loan office!', es: '¡El pedazo 1, junto a la oficina de préstamos!', fa: 'تکهٔ ۱، کنار دفتر قرض بانک!' } },
        { t: { en: 'Piece 2, "Renting or buying?": it landed where people rent, and do not own.', es: 'Pedazo 2, "¿Alquilar o comprar?": cayó donde la gente alquila y no es dueña.', fa: 'تکهٔ ۲، «کرایه یا خرید؟»: به جایی افتاد که مردم کرایه‌نشین هستند، نه صاحب.' },
          zones: [{ x: 9, y: 4, w: 5, h: 2 }],
          noBy: [{ x: 1, y: 15, w: 9, h: 1, t: { en: 'These houses are for sale. People who rent live in the apartment building, in the north.', es: 'Estas casas están a la venta. Los que alquilan viven en el edificio de apartamentos, al norte.', fa: 'این خانه‌ها برای فروش هستند. کرایه‌نشین‌ها در ساختمان آپارتمان، طرف شمال، زندگی می‌کنند.' } }],
          found: { en: 'Piece 2, by the apartments! Renting is a fair choice too.', es: '¡El pedazo 2, junto a los apartamentos! Alquilar también es una buena opción.', fa: 'تکهٔ ۲، کنار آپارتمان‌ها! کرایه هم یک انتخاب خوب است.' } },
        { t: { en: 'Piece 3, "Save a down payment": it is by houses with For Sale signs.', es: 'Pedazo 3, "Ahorra el pago inicial": está junto a casas con letreros de Se Vende.', fa: 'تکهٔ ۳، «پیش‌پرداخت را پس‌انداز کن»: کنار خانه‌هایی با لوحهٔ «برای فروش» است.' },
          zones: [{ x: 1, y: 15, w: 9, h: 1 }],
          noBy: [{ x: 9, y: 4, w: 5, h: 2, t: { en: 'People rent here, so there is no down payment. Look for houses for sale, south of Maple Street.', es: 'Aquí la gente alquila, así que no hay pago inicial. Busca casas a la venta, al sur de Maple Street.', fa: 'اینجا مردم کرایه می‌کنند، پس پیش‌پرداخت نیست. خانه‌های برای فروش را جنوب سرک میپل بپال.' } }],
          found: { en: 'Piece 3, by the houses for sale! Now catch the gust in the park!', es: '¡El pedazo 3, junto a las casas a la venta! ¡Ahora atrapa la ráfaga en el parque!', fa: 'تکهٔ ۳، کنار خانه‌های برای فروش! حالا تندباد را در پارک بگیر!' } }
      ],
      win: { en: 'Caught you! The gust stops spinning. All 3 pieces of the checklist fit together!', es: '¡Te atrapé! La ráfaga deja de girar. ¡Los 3 pedazos de la lista encajan!', fa: 'گرفتمت! تندباد از چرخیدن ایستاد. هر ۳ تکهٔ فهرست با هم جور شد!' },
      item: { icon: '📝', name: { en: 'Priya\'s home checklist', es: 'La lista de Priya para comprar casa', fa: 'فهرست خانهٔ پریا' } }
    }
  },

  scraps: [[1, 1], [30, 5], [1, 20]],
  smudges: [[12, 9], [20, 18]],

  challenge: {
    at: [22, 12],
    type: 'survey', // in the world; the card version (table) is the fallback
    // payment history by the bank, amounts owed by Ana's house, length of history by Mrs. Begum's house,
    // new credit in the north-east lawn, credit mix in the park
    spots: [[18, 5], [6, 8], [10, 15], [26, 8], [17, 15]],
    stat: 'mov',
    title: { en: 'What makes a credit score?', es: '¿Qué forma un puntaje de crédito?', fa: 'نمرهٔ اعتبار از چه ساخته می‌شود؟' },
    intro: { en: 'The Grump tore the score chart! Read the 5 posts. Then answer at the ledger stone.',
      es: '¡El Gruñón rompió la tabla del puntaje! Lee los 5 postes. Luego responde en la piedra del libro.',
      fa: 'غرغرو جدول نمره را پاره کرد! ۵ تیر را بخوان. بعد کنار سنگ دفتر حساب جواب بده.' },
    table: {
      head: [
        { en: 'Part of the score', es: 'Parte del puntaje', fa: 'بخش نمره' },
        { en: 'How much it counts', es: 'Cuánto cuenta', fa: 'چقدر حساب می‌شود' },
        { en: 'What helps', es: 'Qué ayuda', fa: 'چه کمک می‌کند' }
      ],
      rows: [
        [{ en: 'Payment history', es: 'Historial de pagos', fa: 'سابقهٔ پرداخت' }, { en: 'about 35%', es: 'cerca del 35%', fa: 'حدود ۳۵ فیصد' }, { en: 'Pay every bill on time', es: 'Paga cada cuenta a tiempo', fa: 'هر بل را سر وقت بپرداز' }],
        [{ en: 'Amounts owed', es: 'Cantidad que debes', fa: 'اندازهٔ قرض' }, { en: 'about 30%', es: 'cerca del 30%', fa: 'حدود ۳۰ فیصد' }, { en: 'Use only a small part of your limit', es: 'Usa solo una parte pequeña de tu límite', fa: 'فقط بخش کوچک حد قرض را کار بگیر' }],
        [{ en: 'Length of credit history', es: 'Tiempo de historial de crédito', fa: 'درازی سابقهٔ قرض' }, { en: 'about 15%', es: 'cerca del 15%', fa: 'حدود ۱۵ فیصد' }, { en: 'Time, and keep using credit well', es: 'El tiempo, y seguir usando bien el crédito', fa: 'وقت، و ادامهٔ استفادهٔ خوب از قرض' }],
        [{ en: 'New credit', es: 'Crédito nuevo', fa: 'قرض نو' }, { en: 'about 10%', es: 'cerca del 10%', fa: 'حدود ۱۰ فیصد' }, { en: 'Do not open many new cards at once', es: 'No abras muchas tarjetas nuevas a la vez', fa: 'یکباره کارت‌های نو زیاد باز نکن' }],
        [{ en: 'Credit mix', es: 'Tipos de crédito', fa: 'انواع قرض' }, { en: 'about 10%', es: 'cerca del 10%', fa: 'حدود ۱۰ فیصد' }, { en: 'Handle different kinds of credit well', es: 'Maneja bien distintos tipos de crédito', fa: 'با انواع مختلف قرض خوب رفتار کن' }]
      ],
      note: { en: 'The 5 parts add up to 100%. Your income, age, race and where you live do not count.', es: 'Las 5 partes suman 100%. Tus ingresos, tu edad, tu raza y dónde vives no cuentan.', fa: '۵ بخش با هم ۱۰۰ فیصد می‌شوند. معاش، سن، نژاد و جای زندگی تو حساب نمی‌شوند.' }
    },
    questions: [
      { q: { en: 'Which part counts the most in a credit score?', es: '¿Qué parte cuenta más en un puntaje de crédito?', fa: 'کدام بخش در نمرهٔ اعتبار از همه بیشتر حساب می‌شود؟' },
        choices: [{ en: 'Payment history', es: 'Historial de pagos', fa: 'سابقهٔ پرداخت' }, { en: 'Amounts owed', es: 'Cantidad que debes', fa: 'اندازهٔ قرض' }, { en: 'Credit mix', es: 'Tipos de crédito', fa: 'انواع قرض' }, { en: 'New credit', es: 'Crédito nuevo', fa: 'قرض نو' }], answer: 0,
        why: { en: 'About 35% is the biggest number in the table. Paying on time matters most.', es: 'Cerca del 35% es el número más grande de la tabla. Pagar a tiempo es lo que más importa.', fa: 'حدود ۳۵ فیصد بزرگ‌ترین عدد جدول است. پرداخت سر وقت از همه مهم‌تر است.' } },
      { q: { en: 'Payment history and amounts owed together count for about how much?', es: 'El historial de pagos y la cantidad que debes, juntos, ¿cuánto cuentan más o menos?', fa: 'سابقهٔ پرداخت و اندازهٔ قرض با هم حدود چقدر حساب می‌شوند؟' },
        choices: [{ en: 'about 65%', es: 'cerca del 65%', fa: 'حدود ۶۵ فیصد' }, { en: 'about 45%', es: 'cerca del 45%', fa: 'حدود ۴۵ فیصد' }, { en: 'about 50%', es: 'cerca del 50%', fa: 'حدود ۵۰ فیصد' }, { en: 'about 25%', es: 'cerca del 25%', fa: 'حدود ۲۵ فیصد' }], answer: 0,
        why: { en: '35% + 30% = 65%. These two parts are most of the score.', es: '35% + 30% = 65%. Estas dos partes son la mayor parte del puntaje.', fa: '۳۵ فیصد + ۳۰ فیصد = ۶۵ فیصد. این دو بخش بیشتر نمره هستند.' } },
      { q: { en: 'Which habit helps raise a credit score?', es: '¿Qué hábito ayuda a subir un puntaje de crédito?', fa: 'کدام عادت به بلند شدن نمرهٔ اعتبار کمک می‌کند؟' },
        choices: [{ en: 'Paying every bill on time', es: 'Pagar cada cuenta a tiempo', fa: 'پرداخت هر بل سر وقت' }, { en: 'Paying bills a few weeks late', es: 'Pagar las cuentas unas semanas tarde', fa: 'پرداخت بل‌ها چند هفته دیر' }, { en: 'Opening many new cards at once', es: 'Abrir muchas tarjetas nuevas a la vez', fa: 'باز کردن کارت‌های نو زیاد یکباره' }, { en: 'Using all of your credit limit', es: 'Usar todo tu límite de crédito', fa: 'استفادهٔ تمام حد قرض' }], answer: 0,
        why: { en: 'Paying on time builds a good payment history. The other habits can lower a score.', es: 'Pagar a tiempo crea un buen historial de pagos. Los otros hábitos pueden bajar el puntaje.', fa: 'پرداخت سر وقت سابقهٔ پرداخت خوب می‌سازد. عادت‌های دیگر نمره را پایین آورده می‌توانند.' } },
      { q: { en: 'Which of these is NOT counted in a credit score?', es: '¿Cuál de estos NO cuenta en un puntaje de crédito?', fa: 'کدام یکی از اینها در نمرهٔ اعتبار حساب «نمی‌شود»؟' },
        choices: [{ en: 'How much money you earn', es: 'Cuánto dinero ganas', fa: 'این که چقدر معاش داری' }, { en: 'If you pay bills on time', es: 'Si pagas tus cuentas a tiempo', fa: 'این که بل‌ها را سر وقت می‌پردازی' }, { en: 'How much you owe right now', es: 'Cuánto debes ahora', fa: 'این که حالا چقدر قرضدار هستی' }, { en: 'How long you have had credit', es: 'Cuánto tiempo has tenido crédito', fa: 'این که چند وقت قرض داشته‌ای' }], answer: 0,
        why: { en: 'The note says income does not count. Age, race and where you live do not either.', es: 'La nota dice que los ingresos no cuentan. La edad, la raza y dónde vives tampoco.', fa: 'یادداشت می‌گوید معاش حساب نمی‌شود. سن، نژاد و جای زندگی هم حساب نمی‌شوند.' } }
    ],
    success: { en: 'The score chart is whole again! Pay on time, and owe only a little.', es: '¡La tabla del puntaje está completa otra vez! Paga a tiempo y debe poco.', fa: 'جدول نمره دوباره کامل شد! سر وقت بپرداز، و کم قرضدار باش.' }
  },

  boss: {
    at: [29, 15],
    stat: 'hei',
    need: 3,
    name: { en: 'The Late-Fee Grump', es: 'El Gruñón de los Recargos', fa: 'غرغروی جریمهٔ دیرکرد' },
    appear: { en: 'The Late-Fee Grump is hiding in the fog by the park pond!', es: '¡El Gruñón de los Recargos se esconde en la niebla junto al estanque!', fa: 'غرغروی جریمهٔ دیرکرد در مه کنار حوض پارک پنهان است!' },
    taunt: { en: 'Pay on time? Boring! I pay my bills whenever I feel like it!', es: '¿Pagar a tiempo? ¡Qué aburrido! ¡Pago mis cuentas cuando se me antoja!', fa: 'سر وقت بپردازم؟ چه دلگیر! من بل‌هایم را هر وقت دلم بخواهد می‌پردازم!' },
    win: { en: 'The fog lifts off the pond. Ledger page 5.3 floats down into your hands!', es: 'La niebla se va del estanque. ¡La página 5.3 del libro cae en tus manos!', fa: 'مه از روی حوض کنار می‌رود. صفحهٔ ۵.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is a credit score?', es: '¿Qué es un puntaje de crédito?', fa: 'نمرهٔ اعتبار چیست؟' },
        choices: [
          { en: 'A number that guesses if you will repay', es: 'Un número que adivina si vas a pagar', fa: 'عددی که حدس می‌زند قرض را پس می‌دهی یا نه' },
          { en: 'A number that shows how much you earn', es: 'Un número que muestra cuánto ganas', fa: 'عددی که نشان می‌دهد چقدر معاش داری' },
          { en: 'A grade you get in a math class', es: 'Una nota que sacas en clase de matemáticas', fa: 'نمره‌ای که در صنف ریاضی می‌گیری' },
          { en: 'The price of a house in your town', es: 'El precio de una casa en tu pueblo', fa: 'قیمت یک خانه در شهرک تو' }],
        answer: 0,
        why: { en: 'A credit score is a number lenders use to guess how likely you are to repay.', es: 'Un puntaje de crédito es un número que usan los prestamistas para adivinar si vas a pagar.', fa: 'نمرهٔ اعتبار عددی است که قرض‌دهنده‌ها برای حدس پس دادن قرض تو کار می‌گیرند.' } },
      { q: { en: 'The most common credit scores usually go from what to what?', es: 'Los puntajes de crédito más comunes suelen ir ¿de cuánto a cuánto?', fa: 'معمول‌ترین نمره‌های اعتبار اکثراً از چند تا چند هستند؟' },
        choices: [
          { en: '300 to 850', es: 'De 300 a 850', fa: '۳۰۰ تا ۸۵۰' },
          { en: '0 to 100', es: 'De 0 a 100', fa: '۰ تا ۱۰۰' },
          { en: '1 to 10', es: 'De 1 a 10', fa: '۱ تا ۱۰' },
          { en: '500 to 5,000', es: 'De 500 a 5,000', fa: '۵۰۰ تا ۵٬۰۰۰' }],
        answer: 0,
        why: { en: 'The most common scores usually go from 300 to 850. Higher is better.', es: 'Los puntajes más comunes suelen ir de 300 a 850. Más alto es mejor.', fa: 'معمول‌ترین نمره‌ها اکثراً از ۳۰۰ تا ۸۵۰ هستند. بلندتر بهتر است.' } },
      { q: { en: 'Which part counts the most in a credit score?', es: '¿Qué parte cuenta más en un puntaje de crédito?', fa: 'کدام بخش در نمرهٔ اعتبار از همه بیشتر حساب می‌شود؟' },
        choices: [
          { en: 'Payment history', es: 'Historial de pagos', fa: 'سابقهٔ پرداخت' },
          { en: 'Credit mix', es: 'Tipos de crédito', fa: 'انواع قرض' },
          { en: 'New credit', es: 'Crédito nuevo', fa: 'قرض نو' },
          { en: 'Length of credit history', es: 'Tiempo de historial', fa: 'درازی سابقهٔ قرض' }],
        answer: 0,
        why: { en: 'Payment history counts for about 35%. Paying bills on time matters most.', es: 'El historial de pagos cuenta cerca del 35%. Pagar a tiempo es lo que más importa.', fa: 'سابقهٔ پرداخت حدود ۳۵ فیصد حساب می‌شود. پرداخت سر وقت از همه مهم‌تر است.' } },
      { q: { en: 'Which of these is NOT part of a credit score?', es: '¿Cuál de estos NO es parte de un puntaje de crédito?', fa: 'کدام یکی از اینها بخش نمرهٔ اعتبار «نیست»؟' },
        choices: [
          { en: 'Where you live', es: 'Dónde vives', fa: 'جای زندگی تو' },
          { en: 'Paying bills late', es: 'Pagar cuentas tarde', fa: 'پرداخت دیر بل‌ها' },
          { en: 'How much you owe', es: 'Cuánto debes', fa: 'اندازهٔ قرض تو' },
          { en: 'Opening new cards', es: 'Abrir tarjetas nuevas', fa: 'باز کردن کارت‌های نو' }],
        answer: 0,
        why: { en: 'Scores do not use where you live. Your race, age and income do not count either.', es: 'Los puntajes no usan dónde vives. Tu raza, tu edad y tus ingresos tampoco cuentan.', fa: 'نمره‌ها جای زندگی را حساب نمی‌کنند. نژاد، سن و معاش تو هم حساب نمی‌شوند.' } },
      { q: { en: 'A higher credit score can help you get what?', es: '¿Qué te puede ayudar a conseguir un puntaje de crédito más alto?', fa: 'نمرهٔ اعتبار بلندتر در گرفتن چه چیز کمک کرده می‌تواند؟' },
        choices: [
          { en: 'A lower interest rate on a loan', es: 'Una tasa de interés más baja', fa: 'نرخ سود پایین‌تر بالای قرض' },
          { en: 'A higher interest rate on a loan', es: 'Una tasa de interés más alta', fa: 'نرخ سود بلندتر بالای قرض' },
          { en: 'A free house from the bank', es: 'Una casa gratis del banco', fa: 'یک خانهٔ مفت از بانک' },
          { en: 'A bigger paycheck at your job', es: 'Un sueldo más grande en tu trabajo', fa: 'معاش کلان‌تر در کارت' }],
        answer: 0,
        why: { en: 'A high score shows less risk to the lender. So it can mean a lower interest rate.', es: 'Un puntaje alto muestra menos riesgo al prestamista. Por eso puede dar una tasa más baja.', fa: 'نمرهٔ بلند به قرض‌دهنده خطر کمتر نشان می‌دهد. پس نرخ سود پایین‌تر شده می‌تواند.' } },
      { q: { en: 'What is a down payment?', es: '¿Qué es un pago inicial?', fa: 'پیش‌پرداخت چیست؟' },
        choices: [
          { en: 'Part of the price you pay up front', es: 'Parte del precio que pagas al principio', fa: 'بخشی از قیمت که در شروع می‌پردازی' },
          { en: 'The last payment at the end of a loan', es: 'El último pago al final del préstamo', fa: 'آخرین قسط در پایان قرض' },
          { en: 'A fee for paying the bank late', es: 'Un cargo por pagarle tarde al banco', fa: 'جریمه برای دیر پرداختن به بانک' },
          { en: 'Money the bank gives you to keep', es: 'Dinero que el banco te regala', fa: 'پولی که بانک به تو می‌بخشد' }],
        answer: 0,
        why: { en: 'A down payment is paid at the start. The mortgage loan pays for the rest.', es: 'El pago inicial se paga al principio. La hipoteca paga el resto.', fa: 'پیش‌پرداخت در شروع پرداخته می‌شود. قرض خانه باقی را می‌پردازد.' } },
      { q: { en: 'A family stops paying its mortgage. What can happen?', es: 'Una familia deja de pagar su hipoteca. ¿Qué puede pasar?', fa: 'یک خانواده پرداخت قرض خانه را بس می‌کند. چه شده می‌تواند؟' },
        choices: [
          { en: 'The bank can take the house', es: 'El banco puede quitarles la casa', fa: 'بانک خانه را گرفته می‌تواند' },
          { en: 'The bank forgets about the loan', es: 'El banco se olvida del préstamo', fa: 'بانک قرض را فراموش می‌کند' },
          { en: 'The house becomes theirs for free', es: 'La casa es suya gratis', fa: 'خانه مفت از خودشان می‌شود' },
          { en: 'The interest rate drops to zero', es: 'La tasa de interés baja a cero', fa: 'نرخ سود صفر می‌شود' }],
        answer: 0,
        why: { en: 'The house is collateral. If you do not pay, the bank can take it: foreclosure.', es: 'La casa es la garantía. Si no pagas, el banco puede quitarla: ejecución hipotecaria.', fa: 'خانه گرو است. اگر نپردازی، بانک آن را گرفته می‌تواند: ضبط خانه.' } },
      { q: { en: 'Compared with a 30-year mortgage, what does a 15-year mortgage have?', es: 'Comparada con una hipoteca de 30 años, ¿qué tiene una de 15 años?', fa: 'در مقایسه با قرض خانهٔ ۳۰ ساله، قرض ۱۵ ساله چه دارد؟' },
        choices: [
          { en: 'Higher monthly payments, much less interest', es: 'Pagos mensuales más altos, mucho menos interés', fa: 'قسط ماهانهٔ بلندتر، سود خیلی کمتر' },
          { en: 'Lower monthly payments, much less interest', es: 'Pagos mensuales más bajos, mucho menos interés', fa: 'قسط ماهانهٔ پایین‌تر، سود خیلی کمتر' },
          { en: 'Higher monthly payments, much more interest', es: 'Pagos mensuales más altos, mucho más interés', fa: 'قسط ماهانهٔ بلندتر، سود خیلی بیشتر' },
          { en: 'Lower monthly payments, much more interest', es: 'Pagos mensuales más bajos, mucho más interés', fa: 'قسط ماهانهٔ پایین‌تر، سود خیلی بیشتر' }],
        answer: 0,
        why: { en: 'You pay it back in half the time, so each payment is bigger. But you pay much less interest.', es: 'Lo pagas en la mitad del tiempo, así que cada pago es mayor. Pero pagas mucho menos interés.', fa: 'آن را در نیم وقت پس می‌دهی، پس هر قسط کلان‌تر است. اما سود خیلی کمتر می‌پردازی.' } }
    ]
  },

  learned: [
    { en: 'A [[credit score|credit score]] helps lenders guess if you will repay. Paying on time counts most.', es: 'Un [[credit score|puntaje de crédito]] ayuda a los prestamistas a adivinar si pagarás. Pagar a tiempo es lo que más cuenta.', fa: '[[credit score|نمرهٔ اعتبار]] به قرض‌دهنده‌ها در حدس پس دادن قرض کمک می‌کند. پرداخت سر وقت از همه مهم‌تر است.' },
    { en: 'A [[mortgage|mortgage]] is a loan to buy a home. The house is [[collateral|collateral]].', es: 'Una [[mortgage|hipoteca]] es un préstamo para comprar casa. La casa es la [[collateral|garantía]].', fa: '[[mortgage|قرض خانه]] قرضی برای خریدن خانه است. خانه [[collateral|گرو]] است.' },
    { en: 'A 15-year loan costs more each month, but much less [[interest|interest]] in all.', es: 'Un préstamo de 15 años cuesta más cada mes, pero mucho menos [[interest|interés]] en total.', fa: 'قرض ۱۵ ساله هر ماه بیشتر خرچ دارد، اما در مجموع [[interest|سود]] خیلی کمتر.' }
  ],
  reflect: {
    q: { en: 'What is one habit that could help you build a good credit score someday?', es: '¿Qué hábito te podría ayudar a tener un buen puntaje de crédito algún día?', fa: 'کدام یک عادت روزی به تو در ساختن نمرهٔ اعتبار خوب کمک کرده می‌تواند؟' },
    starter: { en: 'One habit I could start is', es: 'Un hábito que podría empezar es', fa: 'یک عادتی که شروع کرده می‌توانم این است' }
  }
};
