/* COINWALKER · Episode 2.3 · Inflation and the CPI (inflation, purchasing power, deflation, the Consumer Price Index)
   Mint Town, a MADE-UP town, today. Every price here is a made-up example price, not real data.
   North half: Mint Town Grocery (J) in the north-west, the diner (R) and the library (Q) along Main Street (l).
   South of Main Street: a little park with a fountain (O), an apartment (R over h) and the bus stop with its shelter (m).
   Row 15 is Elm Street. Above it: the gas station (J), the cinema (U) and two homes. South of Elm Street: the town park.
   Price-tag posts (the survey) stand by the grocery, the cinema and the bus stop: one item each, with its example
   price in 1990, 2005 and 2020. The ledger stone asks which price rose most, what $3 bought then and now, and
   what the CPI measures. */
window.EPISODE = {
  id: '2.3',
  realm: 2,
  sol: 'EPF',
  title: { en: 'Inflation and the CPI', es: 'La inflación y el IPC', fa: 'تورم و شاخص قیمت‌ها' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Mint Town Grocery, today', es: 'Tienda de Mint Town, hoy', fa: 'بقالی شهر مینت، امروز' },
  intro: [
    { en: 'The Grump tore the page about prices. Now people forget why prices rise.',
      es: 'El Gruñón rompió la página sobre los precios. Ahora la gente olvida por qué suben.',
      fa: 'غرغرو صفحهٔ قیمت‌ها را پاره کرد. حالا مردم فراموش می‌کنند چرا قیمت‌ها بالا می‌روند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: a made-up town in Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-77.43, 37.54],
    start: [
      { en: 'Mint Town is a made-up town. Its grocery store is made up too.',
        es: 'Mint Town es un pueblo inventado. Su tienda también es inventada.',
        fa: 'شهر مینت یک شهر ساختگی است. بقالی آن هم ساختگی است.' },
      { en: 'Old price tags from different years hang on the store wall.',
        es: 'En la pared de la tienda cuelgan etiquetas de precios de otros años.',
        fa: 'برچسپ‌های قیمت از سال‌های مختلف بر دیوار دکان آویزان هستند.' },
      { en: 'The tags show that prices change over time.',
        es: 'Las etiquetas muestran que los precios cambian con el tiempo.',
        fa: 'این برچسپ‌ها نشان می‌دهند که قیمت‌ها با گذشت وقت تغییر می‌کنند.' }
    ],
    page: { en: 'In the US, a government agency measures the CPI every month.',
      es: 'En EE. UU., una agencia del gobierno mide el IPC cada mes.',
      fa: 'در امریکا، یک ادارهٔ دولتی شاخص قیمت‌ها را هر ماه اندازه می‌گیرد.' },
    guess: {
      q: { en: 'Will $10 buy more or less in 20 years?', es: '¿$10 comprarán más o menos dentro de 20 años?', fa: 'آیا ۱۰ دالر بعد از ۲۰ سال بیشتر می‌خرد یا کمتر؟' },
      choices: [
        { t: { en: '📉 Less, most likely', es: '📉 Menos, lo más seguro', fa: '📉 کمتر، به احتمال زیاد' }, ok: true },
        { t: { en: '📈 More, for sure', es: '📈 Más, seguro', fa: '📈 بیشتر، حتماً' } }
      ],
      why: { en: 'Prices usually rise over time. So the same $10 will most likely buy less.', es: 'Los precios suelen subir con el tiempo. Así que los mismos $10 seguramente comprarán menos.', fa: 'قیمت‌ها معمولاً با گذشت وقت بالا می‌روند. پس همان ۱۰ دالر به احتمال زیاد کمتر می‌خرد.' }
    },
    next: {
      q: { en: 'Next: you get your first paycheck. How do you plan where it goes?', es: 'Ahora: recibes tu primer sueldo. ¿Cómo planeas a dónde va?', fa: 'بعدی: اولین معاشت را می‌گیری. چطور برنامه می‌ریزی که به کجا برود؟' },
      choices: [
        { t: { en: '📝 Make a budget first', es: '📝 Primero hago un presupuesto', fa: '📝 اول یک بودجه می‌سازم' }, ok: true },
        { t: { en: '🛍️ Spend it, then see', es: '🛍️ Lo gasto y luego veo', fa: '🛍️ خرجش می‌کنم، بعد می‌بینم' } }
      ],
      why: { en: 'A budget is a plan for your money. It shows where each dollar will go.', es: 'Un presupuesto es un plan para tu dinero. Muestra a dónde irá cada dólar.', fa: 'بودجه یک برنامه برای پول توست. نشان می‌دهد هر دالر به کجا می‌رود.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [6, 3], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#1a1008', shirt: '#2f7a4a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I run this grocery store. Last year, flour and truck fuel cost more.', es: 'Yo manejo esta tienda. El año pasado, la harina y el combustible costaron más.', fa: 'من این بقالی را اداره می‌کنم. سال گذشته، آرد و تیل موتر گران‌تر شد.' },
        { en: 'My costs went up, so I had to raise my bread price.', es: 'Mis costos subieron, así que tuve que subir el precio del pan.', fa: 'مصرف‌های من بالا رفت، پس مجبور شدم قیمت نان را بالا ببرم.' },
        { en: 'When costs to make things rise, that is [[cost-push|cost-push]] inflation.', es: 'Cuando sube el costo de producir, es inflación de [[cost-push|costos]].', fa: 'وقتی هزینهٔ ساختن چیزها بالا می‌رود، این تورم [[cost-push|فشار هزینه]] است.' }
      ] },
    { at: [15, 3], name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#f0f0e8', pants: '#3a3a3a', hat: '#ffffff', style: 'short' },
      lines: [
        { en: 'I cook at the diner. Last summer, a big fair came to town.', es: 'Cocino en el restaurante. El verano pasado vino una gran feria al pueblo.', fa: 'من در رستورانت آشپزی می‌کنم. تابستان گذشته، یک میلهٔ بزرگ به شهر آمد.' },
        { en: 'Crowds had lots of money to spend, but we had only so much food.', es: 'La gente tenía mucho dinero para gastar, pero teníamos poca comida.', fa: 'مردم پول زیاد برای خرج داشتند، اما خوراک ما محدود بود.' },
        { en: 'Too much money chasing too few goods is [[demand-pull|demand-pull]] inflation.', es: 'Mucho dinero tras pocos bienes es inflación de [[demand-pull|demanda]].', fa: 'پول زیاد به دنبال کالای کم، تورم [[demand-pull|کشش تقاضا]] است.' }
      ] },
    { at: [25, 3], name: { en: 'Mrs. Novak', es: 'Sra. Novak', fa: 'خانم نوواک' },
      look: { skin: 0, hair: '#c8c8c8', shirt: '#5a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I am the librarian. History shows how bad inflation can get.', es: 'Soy la bibliotecaria. La historia muestra lo grave que puede ser la inflación.', fa: 'من کتابدار هستم. تاریخ نشان می‌دهد تورم چقدر بد شده می‌تواند.' },
        { en: 'In Germany in 1923, prices rose so fast that money became almost worthless.', es: 'En Alemania en 1923, los precios subieron tan rápido que el dinero casi no valía nada.', fa: 'در آلمان در سال ۱۹۲۳، قیمت‌ها آنقدر تیز بالا رفت که پول تقریباً بی‌ارزش شد.' },
        { en: 'It happened in Zimbabwe in 2008 too. That is called [[hyperinflation|hyperinflation]].', es: 'También pasó en Zimbabue en 2008. Eso se llama [[hyperinflation|hiperinflación]].', fa: 'در زیمبابوی هم در سال ۲۰۰۸ چنین شد. به این [[hyperinflation|تورم بسیار شدید]] می‌گویند.' }
      ] },
    { at: [4, 13], name: { en: 'Kwame', es: 'Kwame', fa: 'کوامی' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0392b', pants: '#2a3a5a', hat: '#c0392b', style: 'short' },
      lines: [
        { en: 'I work at the gas station. Gas prices go up and down a lot.', es: 'Trabajo en la gasolinera. El precio de la gasolina sube y baja mucho.', fa: 'من در تیل‌فروشی کار می‌کنم. قیمت تیل زیاد بالا و پایین می‌رود.' },
        { en: 'But one price going up is not inflation by itself.', es: 'Pero que suba un solo precio no es inflación.', fa: 'اما بالا رفتن یک قیمت به تنهایی تورم نیست.' },
        { en: 'Inflation is when MOST prices rise, over a long time.', es: 'La inflación es cuando suben la MAYORÍA de los precios, por mucho tiempo.', fa: 'تورم وقتی است که «بیشتر» قیمت‌ها برای مدت طولانی بالا بروند.' }
      ] },
    { at: [12, 14], name: { en: 'Nadia', es: 'Nadia', fa: 'نادیه' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#8a2a5a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I sell tickets at the cinema. Our prices have changed a lot.', es: 'Vendo boletos en el cine. Nuestros precios han cambiado mucho.', fa: 'من در سینما تکت می‌فروشم. قیمت‌های ما خیلی تغییر کرده.' },
        { en: 'Read the price-tag post outside. It shows our example prices by year.', es: 'Lee el poste de precios de afuera. Muestra nuestros precios de ejemplo por año.', fa: 'تختهٔ قیمت بیرون را بخوان. قیمت‌های نمونهٔ ما را سال به سال نشان می‌دهد.' }
      ] },
    { at: [22, 13], name: { en: 'Mr. Park', es: 'Sr. Park', fa: 'آقای پارک' },
      look: { skin: 1, hair: '#d0d0d0', shirt: '#4a6a8a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I taught math for years. Sometimes most prices fall. That is [[deflation|deflation]].', es: 'Enseñé matemáticas por años. A veces casi todos los precios bajan. Eso es [[deflation|deflación]].', fa: 'سال‌ها ریاضی درس دادم. گاهی بیشتر قیمت‌ها پایین می‌آیند. این [[deflation|کاهش عمومی قیمت‌ها]] است.' },
        { en: 'It sounds nice, but people wait to buy. Then stores sell less.', es: 'Suena bien, pero la gente espera para comprar. Luego las tiendas venden menos.', fa: 'خوب به نظر می‌رسد، اما مردم برای خرید صبر می‌کنند. بعد دکان‌ها کمتر می‌فروشند.' },
        { en: 'When stores sell less, some workers can lose their jobs.', es: 'Cuando las tiendas venden menos, algunos trabajadores pueden perder su empleo.', fa: 'وقتی دکان‌ها کمتر بفروشند، بعضی کارگران کار خود را از دست داده می‌توانند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-10): Mint Town Grocery (J over h, door 6,3), the diner (R, door 15,3), the library (Q, door 25,3).
     Rows 4-5: Main Street (l). South of it: the apartment (R over h, west), the park with flowers (,) and a
     fountain (O), the bus stop sign (x) and shelter (mm) in the east.
     South (y 11-21): the gas station (J, door 4,13), the cinema (U, door 12,14), two homes (Q and R; the Q home has a door).
     Row 15: Elm Street (l). South of it: the town park, trees (T) and flowers (,). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.JJJJJJJJJ..RRRRR....QQQQQQQ..T',
    'T.JJJJJJJJJ..RRRRR....QQQQQQQ..T',
    'T.hhhhdhhhh..hhdhh....hhhdhhh..T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.x............................T',
    'T........T,,,,,,,T.......x.....T',
    'T.RRR....,,,,O,,,........mm....T',
    'T.hhh....,,,,,,,,..............T',
    'T........T,,,,,,,T.............T',
    'T..............................T',
    'T.JJJJJ...UUUUUU.....QQQ..RRR..T',
    'T.hhdhh...UUUUUU.....hdh..hhh..T',
    'T.........hhdhhh...............T',
    'TllllllllllllllllllllllllllllllT',
    'T...................x..........T',
    'T..T......T.........,,,.....T..T',
    'T..................,,,,,.......T',
    'T....T.......T.........T.......T',
    'T..............................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [10, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 11], at: [6, 11], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, along the gas station.', es: 'Desde esta nota, camina 4 pasos al este, junto a la gasolinera.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار تیل‌فروشی.' },
      text: { en: 'An old coin! When prices rise, the same coin buys less than before.', es: '¡Una moneda antigua! Cuando suben los precios, la misma moneda compra menos que antes.', fa: 'یک سکهٔ قدیمی! وقتی قیمت‌ها بالا بروند، همان سکه کمتر از پیش می‌خرد.' } },
    { clueAt: [29, 11], at: [29, 14], decor: 'vase',
      clue: { en: 'From this note, walk 3 steps south, past the red-roof home.', es: 'Desde esta nota, camina 3 pasos al sur, junto a la casa de techo rojo.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، از کنار خانهٔ بام سرخ.' },
      text: { en: 'An old cookie jar for cash! Cash in a jar loses value when prices rise.', es: '¡Un viejo frasco para guardar billetes! El efectivo en un frasco pierde valor si suben los precios.', fa: 'یک قطی کهنهٔ پول! پول نقد در قطی وقتی قیمت‌ها بالا بروند ارزش خود را از دست می‌دهد.' } }
  ],

  words: {
    inflation: { en: 'a general rise in prices over time', es: 'una subida general de los precios con el tiempo', fa: 'بالا رفتن عمومی قیمت‌ها با گذشت وقت' },
    'purchasing power': { en: 'how much your money can buy', es: 'cuánto puede comprar tu dinero', fa: 'این که پولت چقدر چیز خریده می‌تواند' },
    deflation: { en: 'a general fall in prices over time', es: 'una bajada general de los precios con el tiempo', fa: 'پایین آمدن عمومی قیمت‌ها با گذشت وقت' },
    cpi: { en: 'the Consumer Price Index: tracks the price of a basket of things people buy', es: 'el Índice de Precios al Consumidor: sigue el precio de una canasta de cosas que la gente compra', fa: 'شاخص قیمت مصرف‌کننده: قیمت یک سبد از چیزهایی را که مردم می‌خرند دنبال می‌کند' },
    basket: { en: 'a list of goods and services people often buy', es: 'una lista de bienes y servicios que la gente compra seguido', fa: 'فهرستی از کالا و خدماتی که مردم اکثراً می‌خرند' },
    'demand-pull': { en: 'inflation when too much money chases too few goods', es: 'inflación cuando mucho dinero busca pocos bienes', fa: 'تورمی که پول زیاد به دنبال کالای کم باشد' },
    'cost-push': { en: 'inflation when the costs to make things go up', es: 'inflación cuando suben los costos de producir', fa: 'تورمی که هزینهٔ ساختن چیزها بالا برود' },
    hyperinflation: { en: 'prices rise so fast that money becomes almost worthless', es: 'los precios suben tan rápido que el dinero casi no vale nada', fa: 'قیمت‌ها آنقدر تیز بالا می‌روند که پول تقریباً بی‌ارزش می‌شود' },
    'fixed income': { en: 'money that stays the same each month, even when prices rise', es: 'dinero que es igual cada mes, aunque suban los precios', fa: 'پولی که هر ماه یکسان می‌ماند، حتی وقتی قیمت‌ها بالا بروند' },
    fed: { en: 'the Federal Reserve, the central bank of the United States', es: 'la Reserva Federal, el banco central de Estados Unidos', fa: 'فدرال ریزرو، بانک مرکزی ایالات متحدهٔ امریکا' }
  },

  npcs: [
    {
      x: 8, y: 7,
      name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      role: { en: 'Grocery cashier', es: 'Cajera de la tienda', fa: 'صندوق‌دار بقالی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f7a4a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Hi! Our store keeps old price tags on the wall. They are example prices.', es: '¡Hola! La tienda guarda etiquetas viejas en la pared. Son precios de ejemplo.', fa: 'سلام! دکان ما برچسپ‌های کهنهٔ قیمت را بر دیوار نگه می‌دارد. قیمت‌های نمونه هستند.' },
        { en: 'In 1990, a loaf of bread was $1 here. In 2020, it was $3.', es: 'En 1990, un pan costaba $1 aquí. En 2020, costaba $3.', fa: 'در سال ۱۹۹۰، یک نان اینجا ۱ دالر بود. در سال ۲۰۲۰، ۳ دالر بود.' },
        { en: 'Most prices rise over time. That is [[inflation|inflation]].', es: 'Casi todos los precios suben con el tiempo. Eso es [[inflation|inflación]].', fa: 'بیشتر قیمت‌ها با گذشت وقت بالا می‌روند. این [[inflation|تورم]] است.' },
        { en: 'So each dollar buys less. Its [[purchasing power|purchasing power]] goes down.', es: 'Así cada dólar compra menos. Su [[purchasing power|poder adquisitivo]] baja.', fa: 'پس هر دالر کمتر می‌خرد. [[purchasing power|قدرت خرید]] آن پایین می‌آید.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Bread went from $1 to $3. What happened to the purchasing power of $1?', es: 'El pan pasó de $1 a $3. ¿Qué pasó con el poder adquisitivo de $1?', fa: 'نان از ۱ دالر به ۳ دالر رسید. قدرت خرید ۱ دالر چه شد؟' },
        choices: [
          { ok: true, t: { en: 'It fell: $1 buys less bread', es: 'Bajó: $1 compra menos pan', fa: 'پایین آمد: ۱ دالر نان کمتر می‌خرد' },
            why: { en: 'Yes! In 1990, $1 bought a whole loaf. In 2020, it bought only a third.', es: '¡Sí! En 1990, $1 compraba un pan entero. En 2020, solo un tercio.', fa: 'بله! در ۱۹۹۰، ۱ دالر یک نان کامل می‌خرید. در ۲۰۲۰، فقط یک سوم.' } },
          { t: { en: 'It rose: $1 buys more bread', es: 'Subió: $1 compra más pan', fa: 'بالا رفت: ۱ دالر نان بیشتر می‌خرد' },
            why: { en: 'No. The price went up, so the same $1 buys less bread, not more.', es: 'No. El precio subió, así que el mismo $1 compra menos pan, no más.', fa: 'نه. قیمت بالا رفت، پس همان ۱ دالر نان کمتر می‌خرد، نه بیشتر.' } },
          { t: { en: 'Nothing: $1 is always $1', es: 'Nada: $1 siempre es $1', fa: 'هیچ: ۱ دالر همیشه ۱ دالر است' },
            why: { en: 'A dollar bill stays the same, but what it can buy changes.', es: 'El billete de $1 es igual, pero lo que puede comprar cambia.', fa: 'نوت ۱ دالری همان است، اما چیزی که خریده می‌تواند تغییر می‌کند.' } }
        ]
      }
    },
    {
      x: 20, y: 7,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیال' },
      role: { en: 'Student who works at the library', es: 'Estudiante que trabaja en la biblioteca', fa: 'شاگردی که در کتابخانه کار می‌کند' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I shelve books at the library. I read a lot about prices.', es: 'Acomodo libros en la biblioteca. Leo mucho sobre precios.', fa: 'من در کتابخانه کتاب‌ها را در الماری می‌گذارم. دربارهٔ قیمت‌ها زیاد می‌خوانم.' },
        { en: 'The [[cpi|Consumer Price Index]], or CPI, tracks prices of a [[basket|basket]].', es: 'El [[cpi|Índice de Precios al Consumidor]], o IPC, sigue los precios de una [[basket|canasta]].', fa: '[[cpi|شاخص قیمت مصرف‌کننده]] قیمت‌های یک [[basket|سبد]] را دنبال می‌کند.' },
        { en: 'The basket holds things people often buy: food, rent, gas, bus rides.', es: 'La canasta tiene cosas que la gente compra seguido: comida, renta, gasolina, bus.', fa: 'این سبد چیزهایی دارد که مردم اکثراً می‌خرند: خوراک، کرایه، تیل، بس.' },
        { en: 'A government agency, the Bureau of Labor Statistics, measures it.', es: 'Una agencia del gobierno, la Oficina de Estadísticas Laborales, lo mide.', fa: 'یک ادارهٔ دولتی، به نام ادارهٔ آمار کار، آن را اندازه می‌گیرد.' },
        { en: 'The [[fed|Fed]] tries to keep inflation low: about 2% a year.', es: 'La [[fed|Reserva Federal]] trata de mantener baja la inflación: cerca del 2% al año.', fa: '[[fed|فدرال ریزرو]] می‌کوشد تورم را پایین نگه دارد: حدود ۲٪ در سال.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What does the Consumer Price Index (CPI) track?', es: '¿Qué sigue el Índice de Precios al Consumidor (IPC)?', fa: 'شاخص قیمت مصرف‌کننده چه چیز را دنبال می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Prices of a basket people buy', es: 'Precios de una canasta que se compra', fa: 'قیمت سبدی که مردم می‌خرند' },
            why: { en: 'Yes! The CPI tracks the price of a basket of goods and services.', es: '¡Sí! El IPC sigue el precio de una canasta de bienes y servicios.', fa: 'بله! این شاخص قیمت یک سبد از کالا و خدمات را دنبال می‌کند.' } },
          { t: { en: 'How many stores each town has', es: 'Cuántas tiendas tiene cada pueblo', fa: 'هر شهر چند دکان دارد' },
            why: { en: 'No. The CPI is about prices, not about how many stores there are.', es: 'No. El IPC trata de precios, no de cuántas tiendas hay.', fa: 'نه. این شاخص دربارهٔ قیمت‌هاست، نه تعداد دکان‌ها.' } },
          { t: { en: 'How much cash the banks hold', es: 'Cuánto efectivo tienen los bancos', fa: 'بانک‌ها چقدر پول نقد دارند' },
            why: { en: 'No. The CPI tracks the prices people pay for things they often buy.', es: 'No. El IPC sigue los precios que la gente paga por lo que compra seguido.', fa: 'نه. این شاخص قیمت چیزهایی را دنبال می‌کند که مردم اکثراً می‌خرند.' } }
        ]
      }
    },
    {
      x: 10, y: 18,
      name: { en: 'Mr. Rahimi', es: 'Sr. Rahimi', fa: 'آقای رحیمی' },
      role: { en: 'Retired mail carrier', es: 'Cartero jubilado', fa: 'پسته‌رسان متقاعد' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#6a5a3a', pants: '#3a3a2a', hat: '#4a4a4a', style: 'short' },
      lines: [
        { en: 'I carried mail for 30 years. Now I am retired.', es: 'Repartí cartas por 30 años. Ahora estoy jubilado.', fa: '۳۰ سال پسته رساندم. حالا متقاعد هستم.' },
        { en: 'My pension check is the same every month. It is a [[fixed income|fixed income]].', es: 'Mi pensión es igual cada mes. Es un [[fixed income|ingreso fijo]].', fa: 'تقاعد من هر ماه یکسان است. این یک [[fixed income|عاید ثابت]] است.' },
        { en: 'But prices keep rising. So each year, my check buys a little less.', es: 'Pero los precios siguen subiendo. Cada año mi pensión compra un poco menos.', fa: 'اما قیمت‌ها بالا می‌روند. پس هر سال تقاعدم کمی کمتر می‌خرد.' },
        { en: 'Cash hidden at home loses value too. Inflation hurts savers with cash.', es: 'El efectivo guardado en casa también pierde valor. La inflación daña a quien ahorra en efectivo.', fa: 'پول نقد پنهان در خانه هم ارزش از دست می‌دهد. تورم به پس‌انداز نقدی زیان می‌رساند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Prices rise, but Mr. Rahimi gets the same check. What happens?', es: 'Los precios suben, pero el Sr. Rahimi recibe la misma pensión. ¿Qué pasa?', fa: 'قیمت‌ها بالا می‌روند، اما آقای رحیمی همان پول را می‌گیرد. چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'He can buy less each year', es: 'Puede comprar menos cada año', fa: 'هر سال کمتر خریده می‌تواند' },
            why: { en: 'Yes! On a fixed income, rising prices mean the same money buys less.', es: '¡Sí! Con un ingreso fijo, si suben los precios, el mismo dinero compra menos.', fa: 'بله! با عاید ثابت، بالا رفتن قیمت‌ها یعنی همان پول کمتر می‌خرد.' } },
          { t: { en: 'He can buy more each year', es: 'Puede comprar más cada año', fa: 'هر سال بیشتر خریده می‌تواند' },
            why: { en: 'No. His money stays the same while prices go up. He buys less.', es: 'No. Su dinero es igual mientras los precios suben. Compra menos.', fa: 'نه. پولش یکسان می‌ماند و قیمت‌ها بالا می‌روند. کمتر می‌خرد.' } },
          { t: { en: 'His check grows with prices', es: 'Su pensión sube con los precios', fa: 'تقاعدش با قیمت‌ها زیاد می‌شود' },
            why: { en: 'No. He said his check is the same every month. That is a fixed income.', es: 'No. Él dijo que su pensión es igual cada mes. Es un ingreso fijo.', fa: 'نه. او گفت تقاعدش هر ماه یکسان است. این عاید ثابت است.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 6, text: { en: 'WELCOME TO MINT TOWN · A made-up town. All prices here are example prices.', es: 'BIENVENIDO A MINT TOWN · Un pueblo inventado. Todos los precios aquí son de ejemplo.', fa: 'به شهر مینت خوش آمدی · یک شهر ساختگی. همهٔ قیمت‌های اینجا نمونه هستند.' } },
    { x: 25, y: 7, text: { en: 'BUS STOP · Elm Street is south. The cinema and the park are there.', es: 'PARADA DE BUS · Elm Street está al sur. Allí están el cine y el parque.', fa: 'ایستگاه بس · سرک ایلم در جنوب است. سینما و پارک آنجا هستند.' } },
    { x: 20, y: 16, text: { en: 'PRICE HISTORY · Inflation is normal when it is slow. Very fast inflation hurts everyone.', es: 'HISTORIA DE PRECIOS · La inflación lenta es normal. La inflación muy rápida daña a todos.', fa: 'تاریخچهٔ قیمت · تورم آهسته عادی است. تورم بسیار تیز به همه زیان می‌رساند.' } }
  ],

  /* the quest: Mrs. Alvarez the diner owner (gold !) on Main Street, north-west -> Luis the bus driver at the bus stop,
     north-east -> find her old 1990 menu just south of the tree below the flowers in the town park, south-east -> back. */
  quest: {
    stat: 'hei',
    title: { en: 'The Old Diner Menu', es: 'El menú viejo del restaurante', fa: 'مینوی کهنهٔ رستورانت' },
    giver: {
      x: 14, y: 6,
      name: { en: 'Mrs. Alvarez', es: 'Sra. Alvarez', fa: 'خانم الوارز' },
      role: { en: 'Diner owner', es: 'Dueña del restaurante', fa: 'صاحب رستورانت' },
      look: { skin: 2, hair: '#3a2416', shirt: '#e07a2a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I run the diner. I keep our old 1990 menu on the wall.', es: 'Tengo el restaurante. Guardo nuestro menú viejo de 1990 en la pared.', fa: 'من رستورانت را اداره می‌کنم. مینوی کهنهٔ ۱۹۹۰ را بر دیوار نگه می‌دارم.' },
        { en: 'The wind blew it away! Luis the bus driver saw it fly.', es: '¡El viento se lo llevó! Luis, el chofer del bus, lo vio volar.', fa: 'باد آن را برد! لوئیس، دریور بس، دید که پرواز کرد.' },
        { en: 'Luis is at the bus stop, east on Main Street. Ask him!', es: 'Luis está en la parada, al este de Main Street. ¡Pregúntale!', fa: 'لوئیس در ایستگاه بس، طرف شرق سرک اصلی است. از او بپرس!' }
      ],
      wait: { en: 'Luis is at the bus stop, east on Main Street.', es: 'Luis está en la parada de bus, al este de Main Street.', fa: 'لوئیس در ایستگاه بس، طرف شرق سرک اصلی است.' },
      thanks: { en: 'My menu! A burger was $2 in 1990. Now it is $8. Same burger!', es: '¡Mi menú! Una hamburguesa costaba $2 en 1990. Ahora cuesta $8. ¡La misma!', fa: 'مینوی من! یک برگر در ۱۹۹۰، ۲ دالر بود. حالا ۸ دالر است. همان برگر!' }
    },
    contact: {
      x: 24, y: 9,
      name: { en: 'Luis', es: 'Luis', fa: 'لوئیس' },
      role: { en: 'Bus driver', es: 'Chofer de bus', fa: 'دریور بس' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#3a6a9a', pants: '#2a2a3a', hat: '#2a4a7a', style: 'short' },
      lines: [
        { en: 'The bus fare was $1 for years. Now it is $2.', es: 'El pasaje del bus costó $1 por años. Ahora cuesta $2.', fa: 'کرایهٔ بس سال‌ها ۱ دالر بود. حالا ۲ دالر است.' },
        { en: 'I saw the menu! The wind took it south, across Elm Street.', es: '¡Vi el menú! El viento lo llevó al sur, cruzando Elm Street.', fa: 'مینو را دیدم! باد آن را به جنوب برد، آن طرف سرک ایلم.' },
        { en: 'It landed just south of the tree below the flowers, in the park.', es: 'Cayó justo al sur del árbol que está bajo las flores, en el parque.', fa: 'درست در جنوب درختی افتاد که زیر گل‌ها در پارک است.' }
      ]
    },
    action: {
      type: 'find',
      at: [23, 20],
      hint: { en: 'just south of the tree below the flowers', es: 'justo al sur del árbol bajo las flores', fa: 'درست جنوب درخت زیر گل‌ها' },
      found: { en: 'The old menu! Its prices look tiny next to today\'s prices.', es: '¡El menú viejo! Sus precios se ven pequeños junto a los de hoy.', fa: 'مینوی کهنه! قیمت‌هایش در کنار قیمت‌های امروز خیلی کم به نظر می‌رسند.' },
      item: { icon: '📜', name: { en: 'The 1990 diner menu', es: 'El menú de 1990', fa: 'مینوی ۱۹۹۰ رستورانت' } }
    }
  },

  scraps: [[30, 1], [1, 20], [30, 20]],
  smudges: [[12, 9], [18, 19]],

  challenge: {
    at: [7, 19],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one price-tag post per item: bread and milk outside the grocery, the movie ticket by the cinema, the bus fare at the bus stop
    spots: [[9, 4], [3, 4], [16, 14], [28, 8]],
    stat: 'pla',
    title: { en: 'The price-tag posts', es: 'Los postes de precios', fa: 'تخته‌های قیمت' },
    intro: { en: 'The Grump mixed up the price tags! Read each post. Then answer the questions.',
      es: '¡El Gruñón revolvió las etiquetas! Lee cada poste. Luego responde las preguntas.',
      fa: 'غرغرو برچسپ‌های قیمت را خراب کرد! هر تخته را بخوان. بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Item', es: 'Cosa', fa: 'چیز' },
        { en: '1990', es: '1990', fa: '۱۹۹۰' },
        { en: '2005', es: '2005', fa: '۲۰۰۵' },
        { en: '2020', es: '2020', fa: '۲۰۲۰' }
      ],
      rows: [
        [{ en: 'A loaf of bread', es: 'Un pan', fa: 'یک نان' }, '$1', '$2', '$3'],
        [{ en: 'A gallon of milk', es: 'Un galón de leche', fa: 'یک گیلن شیر' }, '$2', '$3', '$4'],
        [{ en: 'A movie ticket', es: 'Un boleto de cine', fa: 'یک تکت سینما' }, '$3', '$6', '$12'],
        [{ en: 'A bus fare', es: 'Un pasaje de bus', fa: 'یک کرایهٔ بس' }, '$1', '$1', '$2']
      ],
      note: { en: 'Example prices from a made-up store. They are not real data.', es: 'Precios de ejemplo de una tienda inventada. No son datos reales.', fa: 'قیمت‌های نمونه از یک دکان ساختگی. اینها معلومات واقعی نیستند.' }
    },
    questions: [
      { q: { en: 'From 1990 to 2020, which price went up the most?', es: 'De 1990 a 2020, ¿qué precio subió más?', fa: 'از ۱۹۹۰ تا ۲۰۲۰، قیمت کدام چیز از همه بیشتر بالا رفت؟' },
        choices: [{ en: 'The movie ticket', es: 'El boleto de cine', fa: 'تکت سینما' }, { en: 'The loaf of bread', es: 'El pan', fa: 'نان' }, { en: 'The gallon of milk', es: 'El galón de leche', fa: 'گیلن شیر' }, { en: 'The bus fare', es: 'El pasaje de bus', fa: 'کرایهٔ بس' }], answer: 0,
        why: { en: 'The ticket went from $3 to $12. That is up $9, or 4 times as much.', es: 'El boleto pasó de $3 a $12. Subió $9, o sea 4 veces más.', fa: 'تکت از ۳ دالر به ۱۲ دالر رسید. یعنی ۹ دالر بالا رفت، ۴ برابر.' } },
      { q: { en: 'In 1990, $3 bought 3 loaves of bread. How many does $3 buy in 2020?', es: 'En 1990, $3 compraban 3 panes. ¿Cuántos compran $3 en 2020?', fa: 'در ۱۹۹۰، ۳ دالر ۳ نان می‌خرید. در ۲۰۲۰، ۳ دالر چند نان می‌خرد؟' },
        choices: [{ en: '1 loaf', es: '1 pan', fa: '۱ نان' }, { en: '3 loaves', es: '3 panes', fa: '۳ نان' }, { en: '6 loaves', es: '6 panes', fa: '۶ نان' }, { en: '2 loaves', es: '2 panes', fa: '۲ نان' }], answer: 0,
        why: { en: 'A loaf costs $3 in 2020, so $3 buys just 1. Purchasing power went down.', es: 'Un pan cuesta $3 en 2020, así que $3 compran solo 1. El poder adquisitivo bajó.', fa: 'در ۲۰۲۰ یک نان ۳ دالر است، پس ۳ دالر فقط ۱ نان می‌خرد. قدرت خرید پایین آمد.' } },
      { q: { en: 'Which price stayed the same from 1990 to 2005?', es: '¿Qué precio fue igual de 1990 a 2005?', fa: 'قیمت کدام چیز از ۱۹۹۰ تا ۲۰۰۵ یکسان ماند؟' },
        choices: [{ en: 'The bus fare', es: 'El pasaje de bus', fa: 'کرایهٔ بس' }, { en: 'The loaf of bread', es: 'El pan', fa: 'نان' }, { en: 'The gallon of milk', es: 'El galón de leche', fa: 'گیلن شیر' }, { en: 'The movie ticket', es: 'El boleto de cine', fa: 'تکت سینما' }], answer: 0,
        why: { en: 'The bus fare was $1 in 1990 and still $1 in 2005. Then it rose to $2.', es: 'El pasaje costaba $1 en 1990 y todavía $1 en 2005. Luego subió a $2.', fa: 'کرایهٔ بس در ۱۹۹۰، ۱ دالر و در ۲۰۰۵ هنوز ۱ دالر بود. بعد به ۲ دالر رسید.' } },
      { q: { en: 'The CPI tracks prices like these. What does it measure?', es: 'El IPC sigue precios como estos. ¿Qué mide?', fa: 'شاخص قیمت‌ها قیمت‌هایی مثل اینها را دنبال می‌کند. چه چیز را اندازه می‌گیرد؟' },
        choices: [{ en: 'The price of a basket of things people buy', es: 'El precio de una canasta de cosas que se compran', fa: 'قیمت سبدی از چیزهایی که مردم می‌خرند' }, { en: 'The price of one movie ticket only', es: 'Solo el precio de un boleto de cine', fa: 'فقط قیمت یک تکت سینما' }, { en: 'How many people work at each store', es: 'Cuánta gente trabaja en cada tienda', fa: 'چند نفر در هر دکان کار می‌کنند' }, { en: 'How much money each bank keeps safe', es: 'Cuánto dinero guarda cada banco', fa: 'هر بانک چقدر پول نگه می‌دارد' }], answer: 0,
        why: { en: 'The CPI follows the price of a whole basket of goods and services, not one item.', es: 'El IPC sigue el precio de toda una canasta de bienes y servicios, no de una sola cosa.', fa: 'این شاخص قیمت یک سبد کامل از کالا و خدمات را دنبال می‌کند، نه یک چیز.' } }
    ],
    success: { en: 'The price tags are clear again! Prices rose over the years.', es: '¡Las etiquetas vuelven a estar claras! Los precios subieron con los años.', fa: 'برچسپ‌های قیمت دوباره روشن شدند! قیمت‌ها با گذشت سال‌ها بالا رفتند.' }
  },

  boss: {
    at: [27, 18],
    stat: 'hei',
    need: 3,
    name: { en: 'The Price-Hike Grump', es: 'El Gruñón Sube-Precios', fa: 'غرغروی گران‌کن' },
    appear: { en: 'The Price-Hike Grump is hiding in the fog by the town park!', es: '¡El Gruñón Sube-Precios se esconde en la niebla junto al parque!', fa: 'غرغروی گران‌کن در مه کنار پارک شهر پنهان است!' },
    taunt: { en: 'Ha! I stuck new price tags on everything. Now your coins buy almost nothing!', es: '¡Ja! Puse etiquetas nuevas en todo. ¡Ahora tus monedas casi no compran nada!', fa: 'ها! بر همه چیز برچسپ قیمت نو چسپاندم. حالا سکه‌هایت تقریباً هیچ نمی‌خرند!' },
    win: { en: 'The fog lifts off the park. Ledger page 2.3 floats down into your hands!', es: 'La niebla se va del parque. ¡La página 2.3 del libro cae en tus manos!', fa: 'مه از روی پارک کنار می‌رود. صفحهٔ ۲.۳ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is inflation?', es: '¿Qué es la inflación?', fa: 'تورم چیست؟' },
        choices: [
          { en: 'A general rise in prices over time', es: 'Una subida general de precios con el tiempo', fa: 'بالا رفتن عمومی قیمت‌ها با گذشت وقت' },
          { en: 'A sale where one store cuts prices', es: 'Una oferta en la que una tienda baja precios', fa: 'حراجی که یک دکان قیمت‌ها را کم می‌کند' },
          { en: 'The price of gas on a single day', es: 'El precio de la gasolina en un solo día', fa: 'قیمت تیل در یک روز' },
          { en: 'Money you save in a bank account', es: 'El dinero que ahorras en una cuenta', fa: 'پولی که در حساب بانکی پس‌انداز می‌کنی' }],
        answer: 0,
        why: { en: 'Inflation means most prices rise over a long time, not just one price on one day.', es: 'La inflación es que la mayoría de los precios suben por mucho tiempo, no uno en un día.', fa: 'تورم یعنی بیشتر قیمت‌ها برای مدت طولانی بالا بروند، نه یک قیمت در یک روز.' } },
      { q: { en: 'Prices rise, but your pay stays the same. Your purchasing power...', es: 'Los precios suben, pero tu pago es igual. Tu poder adquisitivo...', fa: 'قیمت‌ها بالا می‌روند، اما معاشت یکسان است. قدرت خریدت...' },
        choices: [
          { en: 'Goes down', es: 'Baja', fa: 'پایین می‌آید' },
          { en: 'Goes up', es: 'Sube', fa: 'بالا می‌رود' },
          { en: 'Doubles', es: 'Se duplica', fa: 'دو برابر می‌شود' },
          { en: 'Stays the same', es: 'Sigue igual', fa: 'یکسان می‌ماند' }],
        answer: 0,
        why: { en: 'Purchasing power is how much your money can buy. With higher prices, it buys less.', es: 'El poder adquisitivo es cuánto compra tu dinero. Con precios más altos, compra menos.', fa: 'قدرت خرید یعنی پولت چقدر می‌خرد. با قیمت‌های بلندتر، کمتر می‌خرد.' } },
      { q: { en: 'What does the CPI track?', es: '¿Qué sigue el IPC?', fa: 'شاخص قیمت مصرف‌کننده چه را دنبال می‌کند؟' },
        choices: [
          { en: 'Prices of a basket of goods and services', es: 'Los precios de una canasta de bienes y servicios', fa: 'قیمت‌های یک سبد از کالا و خدمات' },
          { en: 'The number of jobs in each big city', es: 'El número de empleos en cada ciudad grande', fa: 'تعداد کارها در هر شهر بزرگ' },
          { en: 'How much cash one family has at home', es: 'Cuánto efectivo tiene una familia en casa', fa: 'یک خانواده چقدر پول نقد در خانه دارد' },
          { en: 'The price of one loaf of bread only', es: 'Solo el precio de un pan', fa: 'فقط قیمت یک نان' }],
        answer: 0,
        why: { en: 'The CPI follows the price of a basket of things people often buy, like food and rent.', es: 'El IPC sigue el precio de una canasta de cosas que se compran seguido, como comida y renta.', fa: 'این شاخص قیمت سبدی از چیزهایی را دنبال می‌کند که مردم اکثراً می‌خرند، مثل خوراک و کرایه.' } },
      { q: { en: 'Who measures the CPI in the United States?', es: '¿Quién mide el IPC en Estados Unidos?', fa: 'در امریکا کی شاخص قیمت مصرف‌کننده را اندازه می‌گیرد؟' },
        choices: [
          { en: 'A government agency', es: 'Una agencia del gobierno', fa: 'یک ادارهٔ دولتی' },
          { en: 'Each grocery store', es: 'Cada tienda de comida', fa: 'هر بقالی' },
          { en: 'A movie theater', es: 'Un cine', fa: 'یک سینما' },
          { en: 'Each bus driver', es: 'Cada chofer de bus', fa: 'هر دریور بس' }],
        answer: 0,
        why: { en: 'The Bureau of Labor Statistics, a government agency, measures the CPI.', es: 'La Oficina de Estadísticas Laborales, una agencia del gobierno, mide el IPC.', fa: 'ادارهٔ آمار کار، یک ادارهٔ دولتی، این شاخص را اندازه می‌گیرد.' } },
      { q: { en: 'Too much money chasing too few goods. What kind of inflation is this?', es: 'Mucho dinero tras pocos bienes. ¿Qué tipo de inflación es?', fa: 'پول زیاد به دنبال کالای کم. این کدام نوع تورم است؟' },
        choices: [
          { en: 'Demand-pull', es: 'De demanda', fa: 'کشش تقاضا' },
          { en: 'Cost-push', es: 'De costos', fa: 'فشار هزینه' },
          { en: 'Deflation', es: 'Deflación', fa: 'کاهش قیمت‌ها' },
          { en: 'A price tag', es: 'Una etiqueta', fa: 'برچسپ قیمت' }],
        answer: 0,
        why: { en: 'When buyers want more than there is, prices are pulled up. That is demand-pull.', es: 'Si los compradores quieren más de lo que hay, los precios suben. Es inflación de demanda.', fa: 'وقتی خریداران بیشتر از آنچه هست بخواهند، قیمت‌ها بالا کشیده می‌شوند. این کشش تقاضاست.' } },
      { q: { en: 'Flour and fuel cost more, so a baker raises bread prices. What is this?', es: 'La harina y el combustible cuestan más, y el panadero sube el pan. ¿Qué es?', fa: 'آرد و تیل گران شد، پس نانوا قیمت نان را بالا برد. این چیست؟' },
        choices: [
          { en: 'Cost-push inflation', es: 'Inflación de costos', fa: 'تورم فشار هزینه' },
          { en: 'Demand-pull inflation', es: 'Inflación de demanda', fa: 'تورم کشش تقاضا' },
          { en: 'Deflation', es: 'Deflación', fa: 'کاهش عمومی قیمت‌ها' },
          { en: 'A fixed income', es: 'Un ingreso fijo', fa: 'عاید ثابت' }],
        answer: 0,
        why: { en: 'The costs to make bread went up, and they pushed the price up. That is cost-push.', es: 'Subieron los costos de hacer pan y empujaron el precio. Eso es inflación de costos.', fa: 'هزینهٔ ساختن نان بالا رفت و قیمت را بالا برد. این فشار هزینه است.' } },
      { q: { en: 'The Fed tries to keep inflation low. About how much a year?', es: 'La Reserva Federal trata de mantener baja la inflación. ¿Cuánto al año, más o menos?', fa: 'فدرال ریزرو می‌کوشد تورم را پایین نگه دارد. حدود چند فیصد در سال؟' },
        choices: [
          { en: 'About 2%', es: 'Cerca del 2%', fa: 'حدود ۲٪' },
          { en: 'About 20%', es: 'Cerca del 20%', fa: 'حدود ۲۰٪' },
          { en: 'About 50%', es: 'Cerca del 50%', fa: 'حدود ۵۰٪' },
          { en: 'About 90%', es: 'Cerca del 90%', fa: 'حدود ۹۰٪' }],
        answer: 0,
        why: { en: 'The Fed aims for about 2% a year. Slow, steady inflation is easier to plan for.', es: 'La Reserva Federal busca cerca del 2% al año. Es más fácil planear con inflación lenta.', fa: 'فدرال ریزرو حدود ۲٪ در سال را هدف می‌گیرد. برنامه‌ریزی با تورم آهسته آسان‌تر است.' } },
      { q: { en: 'Germany in 1923 and Zimbabwe in 2008 had prices rise extremely fast. What is that?', es: 'En Alemania en 1923 y Zimbabue en 2008 los precios subieron muy rápido. ¿Qué es eso?', fa: 'در آلمان ۱۹۲۳ و زیمبابوی ۲۰۰۸ قیمت‌ها بسیار تیز بالا رفت. این چیست؟' },
        choices: [
          { en: 'Hyperinflation', es: 'Hiperinflación', fa: 'تورم بسیار شدید' },
          { en: 'Slow deflation', es: 'Deflación lenta', fa: 'کاهش آهستهٔ قیمت‌ها' },
          { en: 'A careful budget', es: 'Un presupuesto cuidadoso', fa: 'یک بودجهٔ دقیق' },
          { en: 'A huge store sale', es: 'Una gran oferta', fa: 'یک حراج بزرگ دکان' }],
        answer: 0,
        why: { en: 'In hyperinflation, prices rise so fast that money becomes almost worthless.', es: 'En la hiperinflación, los precios suben tan rápido que el dinero casi no vale nada.', fa: 'در تورم بسیار شدید، قیمت‌ها آنقدر تیز بالا می‌روند که پول تقریباً بی‌ارزش می‌شود.' } }
    ]
  },

  learned: [
    { en: '[[inflation|Inflation]] is a general rise in prices. It lowers [[purchasing power|purchasing power]].', es: 'La [[inflation|inflación]] es una subida general de precios. Baja el [[purchasing power|poder adquisitivo]].', fa: '[[inflation|تورم]] بالا رفتن عمومی قیمت‌هاست. [[purchasing power|قدرت خرید]] را پایین می‌آورد.' },
    { en: 'The [[cpi|CPI]] tracks the price of a [[basket|basket]] of things people often buy.', es: 'El [[cpi|IPC]] sigue el precio de una [[basket|canasta]] de cosas que la gente compra seguido.', fa: '[[cpi|شاخص قیمت مصرف‌کننده]] قیمت یک [[basket|سبد]] از چیزهایی را که مردم اکثراً می‌خرند دنبال می‌کند.' },
    { en: 'The [[fed|Fed]] aims for about 2% inflation a year. Very fast inflation hurts everyone.', es: 'La [[fed|Reserva Federal]] busca cerca del 2% de inflación al año. La inflación muy rápida daña a todos.', fa: '[[fed|فدرال ریزرو]] حدود ۲٪ تورم در سال را هدف می‌گیرد. تورم بسیار تیز به همه زیان می‌رساند.' }
  ],
  reflect: {
    q: { en: 'Think of something you buy often. Has its price gone up? How can you plan for that?', es: 'Piensa en algo que compras seguido. ¿Subió su precio? ¿Cómo puedes planear para eso?', fa: 'به چیزی فکر کن که اکثراً می‌خری. آیا قیمتش بالا رفته؟ چطور برایش برنامه‌ریزی کرده می‌توانی؟' },
    starter: { en: 'Something I buy often is', es: 'Algo que compro seguido es', fa: 'چیزی که من اکثراً می‌خرم ... است' }
  }
};
