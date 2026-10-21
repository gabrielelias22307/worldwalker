/* WORLDWALKER · Episode 6.3 · Population and Development (WG.12)
   South & Southeast Asia. A crowded city of towers and old lanes, joined by a road to a quiet farming village.
   The land teaches: one average number sits between very different places. Earns the Monsoon Cloak (engine). */
window.EPISODE = {
  id: '6.3',
  realm: 6,
  sol: 'WG.12',
  title: { en: 'Population and Development', es: 'Población y desarrollo', fa: 'نفوس و انکشاف' },
  place: { en: 'Monsoon Crossroads', es: 'Cruce del Monzón', fa: 'چهارراه موسمی' },
  intro: [
    { en: 'Christopher: "The Grump smeared every number in Monsoon Crossroads! Now people think one number tells the whole story. Talk to the census worker, the doctor and the city planner. Then fix the compass stone."',
      es: 'Christopher: "¡El Gruñón manchó todos los números del Cruce del Monzón! Ahora la gente cree que un solo número cuenta toda la historia. Habla con la encuestadora del censo, la doctora y la planificadora de la ciudad. Luego arregla la piedra de la brújula."',
      fa: 'کریستوفر: «غرغرو همهٔ عددهای چهارراه موسمی را خراب کرد! حالا مردم فکر می‌کنند یک عدد تمام قصه را می‌گوید. با کارمند سرشماری، داکتر و برنامه‌ریز شهر گپ بزن. بعد سنگ قطب‌نما را درست کن.»' }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West: the city. Tall towers (north) and crowded old lanes (south).
     East: the village. Houses, a well, a clinic, rice paddies and a river.
     One road joins them. */
  map: [
    'UUUUUUUUUUUUUUUUTTpTTTTpTTTTpTTT',
    'Ullllllllllllll...,...RRR...p..T',
    'UlUUlUUlUUlUUll.......hdh......T',
    'UlUUlUUlUUlUUll..QQQ......RRR..T',
    'Ullllllllllllxl..hdh..O...hdh.,T',
    'U:::::::::::::::::::::::::::::.T',
    'UllllllllllllJJ...1o2o..x.:....T',
    'UlUUlUUlJJlUlll..o1o2o....:..p.T',
    'UlUUlUUlJJlUlll...........:..,.T',
    'Ullllllllllllll.Tp...,....:...TT',
    'Ulll:llllllll.............:....T',
    'W...:.....................:.~~~T',
    'WRRR:QQQ:RRR:QQ..qqqqqqqq.:.~~.T',
    'Whdh:hdh:hdh:hd..qqqqqqqq.:.~~~T',
    'W...:...:...:....qqqqqqqq.:.~~,T',
    'W.mm:mm.:.mm:.............::bb.T',
    'W...:...:...:....qqqq.RRR...~~.T',
    'WQQQ:RRR:QQQ:RR..qqqq.hdh...~~.T',
    'Whdh:hdh:hdh:hd..qqqq.......~~.T',
    'W........................T..~~.T',
    'W..,.......O.......,.....p..~~.T',
    'WWWWWWWWWWWWWWWWTTTTTTTTTTTT~~TT'
  ],
  start: [2, 5],

  tools: ['axe', 'sickle'],
  /* build: a school in the village, close to the homes, so children can walk there every day (schools help development) */
  build: [
    { id: 'school', kind: 'place', board: [21, 11], tile: 'h', ok: [[22, 9, 'R'], [23, 9, 'R'], [24, 9, 'R'], [22, 10], [23, 10], [24, 10]], cost: { wood: 1 },
      name: { en: 'A village school', es: 'Una escuela para el pueblo', fa: 'یک مکتب برای قریه' },
      ask: { en: 'The village has no school. The nearest one is in the city, too far to walk. Build a school in the middle of the village, between the homes in the north and the south. Put the roof on top and the walls below.',
        es: 'El pueblo no tiene escuela. La más cercana está en la ciudad, demasiado lejos para ir caminando. Construye una escuela en el medio del pueblo, entre las casas del norte y las del sur. Pon el techo arriba y las paredes abajo.',
        fa: 'قریه مکتب ندارد. نزدیک‌ترین مکتب در شهر است و پیاده رفتن تا آن جا خیلی دور است. یک مکتب در وسط قریه، میان خانه‌های شمال و جنوب بساز. بام را بالا و دیوارها را پایین بگذار.' },
      why: { en: 'Good: close to the homes. Children can walk here.', es: 'Bien: cerca de las casas. Los niños pueden venir caminando.', fa: 'خوب: نزدیک خانه‌ها. اطفال می‌توانند پیاده این جا بیایند.' },
      wrong: { en: 'Not here. The school goes in the middle of the village, between the homes, where children from all the homes can walk to it.', es: 'Aquí no. La escuela va en el medio del pueblo, entre las casas, donde los niños de todas las casas pueden llegar caminando.', fa: 'این جا نه. مکتب در وسط قریه، میان خانه‌ها می‌رود، جایی که اطفال همهٔ خانه‌ها پیاده به آن برسند.' },
      wrongBy: [
        { x: 1, y: 1, w: 14, h: 20, t: { en: 'This is the city, far from the village homes. It is too far for the village children to walk every day.', es: 'Esto es la ciudad, lejos de las casas del pueblo. Está demasiado lejos para que los niños del pueblo caminen cada día.', fa: 'این جا شهر است، دور از خانه‌های قریه. برای اطفال قریه خیلی دور است که هر روز پیاده بیایند.' } },
        { x: 27, y: 11, w: 4, h: 10, t: { en: 'This is the edge of the village, by the river. It is too far to walk every day for most children.', es: 'Esto es la orilla del pueblo, junto al río. Está demasiado lejos para que la mayoría de los niños caminen cada día.', fa: 'این جا کنار قریه، پهلوی دریا است. برای بیشتر اطفال خیلی دور است که هر روز پیاده بیایند.' } }
      ],
      done: { en: 'The village has a school, and every child can walk to it. When more children go to school, they can get better jobs and stay healthier. That is [[development|development]].',
        es: 'El pueblo tiene escuela, y todos los niños pueden llegar caminando. Cuando más niños van a la escuela, pueden tener mejores trabajos y más salud. Eso es [[development|desarrollo]].',
        fa: 'قریه مکتب دارد و هر طفل می‌تواند پیاده به آن برود. وقتی اطفال بیشتر به مکتب می‌روند، کارهای بهتر پیدا می‌کنند و صحتمندتر می‌مانند. این [[development|انکشاف]] است.' } }
  ],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [29, 2], at: [27, 6], decor: 'drum',
      clue: { en: 'From this note, walk 4 steps south, then 2 steps west. Something is hidden there.', es: 'Desde esta nota, camina 4 pasos al sur y luego 2 pasos al oeste. Algo está escondido allí.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، بعد ۲ قدم به غرب. چیزی آن جا پنهان است.' },
      text: { en: 'You followed compass directions! South is down and west is to the left. A small drum was hiding by the village road. In India, about 2 of every 3 people live in villages, not in cities.', es: '¡Seguiste las direcciones de la brújula! El sur está abajo y el oeste a la izquierda. Un tambor pequeño estaba escondido junto al camino del pueblo. En la India, unas 2 de cada 3 personas viven en pueblos, no en ciudades.', fa: 'تو جهت‌های قطب‌نما را دنبال کردی! جنوب پایین و غرب طرف چپ است. یک دهل کوچک کنار سرک قریه پنهان بود. در هند، از هر ۳ نفر تقریباً ۲ نفر در قریه‌ها زندگی می‌کنند، نه در شهرها.' } },
    { clueAt: [7, 14], at: [11, 19], decor: 'vase',
      clue: { en: 'Crowded cities need lots of water. Find the only well in the old city lanes. Stand on the square just north of it.', es: 'Las ciudades llenas de gente necesitan mucha agua. Busca el único pozo en los callejones viejos de la ciudad. Párate en el cuadro justo al norte del pozo.', fa: 'شهرهای پرجمعیت به آب زیاد ضرورت دارند. تنها چاه را در کوچه‌های کهنهٔ شهر پیدا کن. روی خانه‌ای که درست شمالِ آن است بایست.' },
      text: { en: 'You found the city well! In crowded old neighborhoods, many families often share one well or water tap. An old clay vase was by the well. Today more than half of all people in the world live in cities.', es: '¡Encontraste el pozo de la ciudad! En los barrios viejos y llenos de gente, muchas familias a menudo comparten un pozo o un grifo. Había un jarrón viejo de barro junto al pozo. Hoy más de la mitad de las personas del mundo viven en ciudades.', fa: 'تو چاه شهر را پیدا کردی! در محله‌های کهنه و پرجمعیت، اکثراً چند فامیل از یک چاه یا یک نل آب استفاده می‌کنند. یک گلدان کهنهٔ گلی کنار چاه بود. امروز بیشتر از نیمِ مردم جهان در شهرها زندگی می‌کنند.' } }
  ],
  // only the canoe (Episode 2.3) reaches the little river bank in the east
  secret: { tool: 'canoe', at: [30, 12],
    text: { en: 'The canoe found the hidden river bank! Afghanistan is more than four times bigger than Bangladesh. But Bangladesh has about four times as many people.',
      es: '¡La canoa encontró la orilla escondida! Afganistán es más de cuatro veces más grande que Bangladés. Pero Bangladés tiene unas cuatro veces más gente.',
      fa: 'قایق کوچک کنارهٔ پنهان دریا را پیدا کرد! افغانستان بیشتر از چهار برابر بنگله‌دیش بزرگ است. اما بنگله‌دیش حدود چهار برابر مردم بیشتر دارد.' } },

  words: {
    population: { en: 'all the people who live in one place', es: 'todas las personas que viven en un lugar', fa: 'همهٔ مردمی که در یک جا زندگی می‌کنند' },
    census: { en: 'a count of all the people in a country, done every few years', es: 'un conteo de todas las personas de un país, hecho cada pocos años', fa: 'شمارش همهٔ مردم یک کشور که هر چند سال یک بار انجام می‌شود' },
    'population pyramid': { en: 'a graph that shows how many people are in each age group, split by male and female', es: 'una gráfica que muestra cuántas personas hay en cada grupo de edad, separadas en hombres y mujeres', fa: 'گرافی که نشان می‌دهد در هر گروه سنی چند نفر هستند، جدا برای مردان و زنان' },
    'line graph': { en: 'a graph that shows how one number changes over time', es: 'una gráfica que muestra cómo cambia un número con el tiempo', fa: 'گرافی که نشان می‌دهد یک عدد با گذشت زمان چطور تغییر می‌کند' },
    'life expectancy': { en: 'how long a person born today can expect to live, on average', es: 'cuánto tiempo puede esperar vivir, en promedio, una persona que nace hoy', fa: 'اینکه یک نفر که امروز به دنیا می‌آید به طور اوسط چند سال زندگی می‌کند' },
    average: { en: 'one number that stands for a whole group: add all the numbers, then divide by how many there are', es: 'un número que representa a todo un grupo: sumas todos los números y divides entre cuántos son', fa: 'یک عدد که نمایندهٔ تمام یک گروه است: همهٔ عددها را جمع کن، بعد بر تعداد آن‌ها تقسیم کن' },
    'per capita gdp': { en: 'everything a country produces in a year, divided by its number of people (income per person)', es: 'todo lo que un país produce en un año, dividido entre su número de personas (ingreso por persona)', fa: 'همهٔ چیزهایی که یک کشور در یک سال تولید می‌کند، تقسیم بر تعداد مردمش (عاید هر نفر)' },
    hdi: { en: 'Human Development Index: one score made from life expectancy, education and income', es: 'Índice de Desarrollo Humano: una puntuación hecha con la esperanza de vida, la educación y el ingreso', fa: 'شاخص انکشاف بشری: یک نمره که از اوسط عمر، تعلیم و عاید ساخته می‌شود' },
    development: { en: 'how much a country has grown in health, schooling, jobs and income', es: 'cuánto ha crecido un país en salud, escuelas, trabajos e ingresos', fa: 'اینکه یک کشور در صحت، تعلیم، کار و عاید چقدر پیشرفت کرده است' },
    'standard of living': { en: 'what money can buy, like food and housing', es: 'lo que el dinero puede comprar, como comida y vivienda', fa: 'چیزهایی که با پول خریده می‌شود، مثل غذا و خانه' },
    'quality of life': { en: 'how life feels day to day: safety, clean air, free time', es: 'cómo se siente la vida cada día: seguridad, aire limpio, tiempo libre', fa: 'اینکه زندگی هر روز چطور است: امنیت، هوای پاک، وقت آزاد' },
    distributed: { en: 'spread across the people in a group', es: 'repartido entre las personas de un grupo', fa: 'پخش شده میان مردم یک گروه' }
  },

  npcs: [
    {
      x: 7, y: 4,
      name: { en: 'Ananya', es: 'Ananya', fa: 'اننیا' },
      role: { en: 'Census worker', es: 'Encuestadora del censo', fa: 'کارمند سرشماری' },
      look: { skin: 3, hair: '#1b1410', shirt: '#d6762f', pants: '#3a2f5a' },
      lines: [
        { en: 'Hello! I work on the [[census|census]]. I count every person in the country. Then I turn the numbers into pictures. One picture is a [[population pyramid|population pyramid]]. It shows how many people are in each age group.',
          es: '¡Hola! Trabajo en el [[census|censo]]. Cuento a cada persona del país. Luego convierto los números en dibujos. Un dibujo es una [[population pyramid|pirámide de población]]. Muestra cuántas personas hay en cada grupo de edad.',
          fa: 'سلام! من در [[census|سرشماری]] کار می‌کنم. هر نفر کشور را می‌شمارم. بعد عددها را به تصویر تبدیل می‌کنم. یک تصویر [[population pyramid|هرم نفوس]] است. نشان می‌دهد در هر گروه سنی چند نفر هستند.' },
        { en: 'Children are at the bottom of the pyramid. Old people are at the top. A wide bottom means many babies and children. That country will need many new schools soon. A wide top means many older people. That country needs more nurses and doctors.',
          es: 'Los niños están abajo en la pirámide. Las personas mayores están arriba. Una base ancha significa muchos bebés y niños. Ese país necesitará muchas escuelas nuevas pronto. Una parte de arriba ancha significa muchas personas mayores. Ese país necesita más enfermeras y doctores.',
          fa: 'اطفال در پایین هرم هستند. کلان‌سالان در بالا هستند. پایین پهن یعنی نوزادان و اطفال زیاد. آن کشور به زودی به مکتب‌های نو زیاد ضرورت دارد. بالای پهن یعنی کلان‌سالان زیاد. آن کشور به نرس و داکتر بیشتر ضرورت دارد.' },
        { en: 'A [[line graph|line graph]] shows change over time. The line for world [[population|population]] climbs and climbs. In 1950 there were about 2.5 billion people. In 2022 there were more than 8 billion!',
          es: 'Una [[line graph|gráfica de líneas]] muestra el cambio con el tiempo. La línea de la [[population|población]] del mundo sube y sube. En 1950 había unos 2,500 millones de personas. ¡En 2022 había más de 8,000 millones!',
          fa: '[[line graph|گراف خطی]] تغییر را با گذشت زمان نشان می‌دهد. خط [[population|نفوس]] جهان بالا و بالا می‌رود. در سال ۱۹۵۰ حدود ۲.۵ میلیارد نفر بودند. در سال ۲۰۲۲ بیشتر از ۸ میلیارد نفر شدند!' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'A country\'s population pyramid has a very wide bottom. What will it most likely need soon?', es: 'La pirámide de población de un país tiene una base muy ancha. ¿Qué necesitará pronto, lo más probable?', fa: 'هرم نفوس یک کشور پایین بسیار پهن دارد. به احتمال زیاد به زودی به چه ضرورت دارد؟' },
        choices: [
          { ok: true, t: { en: 'Many new schools', es: 'Muchas escuelas nuevas', fa: 'مکتب‌های نو زیاد' },
            why: { en: 'A wide bottom means many children. Children need schools.', es: 'Una base ancha significa muchos niños. Los niños necesitan escuelas.', fa: 'پایین پهن یعنی اطفال زیاد. اطفال به مکتب ضرورت دارند.' } },
          { t: { en: 'More homes for older people', es: 'Más casas para personas mayores', fa: 'خانه‌های بیشتر برای کلان‌سالان' },
            why: { en: 'Older people are at the top. A wide bottom is about children.', es: 'Las personas mayores están arriba. Una base ancha habla de niños.', fa: 'کلان‌سالان در بالا هستند. پایین پهن دربارهٔ اطفال است.' } },
          { t: { en: 'Fewer farms and less food', es: 'Menos granjas y menos comida', fa: 'زمین زراعتی کمتر و غذای کمتر' },
            why: { en: 'More children means the country needs more food, not less.', es: 'Más niños significa que el país necesita más comida, no menos.', fa: 'اطفال بیشتر یعنی کشور به غذای بیشتر ضرورت دارد، نه کمتر.' } }
        ]
      }
    },
    {
      x: 25, y: 4,
      name: { en: 'Dr. Nusrat', es: 'Dra. Nusrat', fa: 'داکتر نصرت' },
      role: { en: 'Doctor at the village clinic', es: 'Doctora de la clínica del pueblo', fa: 'داکتر کلینیک قریه' },
      look: { skin: 3, hair: '#120d0a', shirt: '#f4f4f4', pants: '#2f6fd6', robe: true },
      lines: [
        { en: 'Welcome to our village clinic. [[life expectancy|Life expectancy]] is how long a baby born today can expect to live, on average. Clean water, good food, vaccines and nearby clinics all help people live longer.',
          es: 'Bienvenido a la clínica del pueblo. La [[life expectancy|esperanza de vida]] es cuánto puede esperar vivir, en promedio, un bebé que nace hoy. El agua limpia, la buena comida, las vacunas y las clínicas cercanas ayudan a vivir más.',
          fa: 'به کلینیک قریهٔ ما خوش آمدی. [[life expectancy|اوسط عمر]] یعنی نوزادی که امروز به دنیا می‌آید به طور اوسط چند سال زندگی می‌کند. آب پاک، غذای خوب، واکسین و کلینیک نزدیک کمک می‌کنند مردم بیشتر زندگی کنند.' },
        { en: 'Our country has one life expectancy number. But it hides a gap. In the big city, the hospital is a short walk away. Here in the village, the nearest hospital is two hours away by boat and bus.',
          es: 'Nuestro país tiene un solo número de esperanza de vida. Pero ese número esconde una diferencia. En la ciudad grande, el hospital está a pocos pasos. Aquí en el pueblo, el hospital más cercano está a dos horas en lancha y autobús.',
          fa: 'کشور ما یک عدد برای اوسط عمر دارد. اما این عدد یک فرق را پنهان می‌کند. در شهر بزرگ، شفاخانه چند قدم دور است. اینجا در قریه، نزدیک‌ترین شفاخانه دو ساعت با کشتی و بس فاصله دارد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which change would most likely help people in this village live longer?', es: '¿Qué cambio ayudaría más a que la gente de este pueblo viva más años?', fa: 'کدام تغییر به احتمال زیاد کمک می‌کند مردم این قریه بیشتر زندگی کنند؟' },
        choices: [
          { ok: true, t: { en: 'Clean water and a clinic open every day', es: 'Agua limpia y una clínica abierta todos los días', fa: 'آب پاک و کلینیکی که هر روز باز باشد' },
            why: { en: 'Clean water stops sickness, and a clinic helps sick people fast.', es: 'El agua limpia evita enfermedades y una clínica ayuda rápido a los enfermos.', fa: 'آب پاک جلوی مریضی را می‌گیرد و کلینیک به مریض‌ها زود کمک می‌کند.' } },
          { t: { en: 'A taller tower in the city', es: 'Una torre más alta en la ciudad', fa: 'یک تعمیر بلندتر در شهر' },
            why: { en: 'A tower far away does not bring health care to the village.', es: 'Una torre lejana no trae salud al pueblo.', fa: 'یک تعمیر دور، خدمات صحی را به قریه نمی‌آورد.' } },
          { t: { en: 'A new way to count the people', es: 'Una nueva forma de contar a la gente', fa: 'یک روش نو برای شمردن مردم' },
            why: { en: 'Counting people helps us plan, but it does not make anyone healthier by itself.', es: 'Contar a la gente ayuda a planear, pero por sí solo no hace a nadie más sano.', fa: 'شمردن مردم برای برنامه کمک می‌کند، اما به تنهایی کسی را صحتمند نمی‌سازد.' } }
        ]
      }
    },
    {
      x: 10, y: 16,
      name: { en: 'Maricel', es: 'Maricel', fa: 'ماریسل' },
      role: { en: 'City planner', es: 'Planificadora de la ciudad', fa: 'برنامه‌ریز شهر' },
      look: { skin: 2, hair: '#2a1a12', shirt: '#2f9e8f', pants: '#2b2b3a' },
      lines: [
        { en: 'I plan roads, water pipes and schools for this city. People tell me, "Our city\'s [[average|average]] income is high!" But look around. The towers up north are full of rich offices. These old lanes are full of families who earn much less.',
          es: 'Yo planeo calles, tubos de agua y escuelas para esta ciudad. La gente me dice: "¡El ingreso [[average|promedio]] de nuestra ciudad es alto!" Pero mira a tu alrededor. Las torres del norte están llenas de oficinas ricas. Estas calles viejas están llenas de familias que ganan mucho menos.',
          fa: 'من برای این شهر سرک، نل آب و مکتب پلان می‌کنم. مردم می‌گویند: «عاید [[average|اوسط]] شهر ما بلند است!» اما به اطراف ببین. تعمیرهای بلند شمال پر از دفترهای پولدار است. این کوچه‌های کهنه پر از فامیل‌هایی است که خیلی کمتر پول می‌گیرند.' },
        { en: 'Here is the trick. Nine workers earn $20,000 a year. One worker earns $800,000. The average is $98,000! That sounds great. But nine of the ten workers earn far less. One very big number pulls the average up.',
          es: 'Este es el truco. Nueve trabajadores ganan $20,000 al año. Un trabajador gana $800,000. ¡El promedio es $98,000! Suena muy bien. Pero nueve de los diez ganan mucho menos. Un número muy grande sube el promedio.',
          fa: 'فریب اینجاست. نُه کارگر سالانه ۲۰٬۰۰۰ دالر می‌گیرند. یک کارگر ۸۰۰٬۰۰۰ دالر می‌گیرد. اوسط ۹۸٬۰۰۰ دالر می‌شود! خوب معلوم می‌شود. اما نُه نفر از ده نفر خیلی کمتر می‌گیرند. یک عدد بسیار بزرگ اوسط را بالا می‌برد.' },
        { en: 'So a good geographer asks a second question: how is the money [[distributed|distributed]]? Is it shared by many people, or held by a few?',
          es: 'Por eso un buen geógrafo hace una segunda pregunta: ¿cómo está [[distributed|repartido]] el dinero? ¿Lo comparten muchas personas o lo tienen unas pocas?',
          fa: 'پس یک جغرافیه‌دان خوب سوال دوم را می‌پرسد: پول چطور [[distributed|پخش شده]] است؟ میان مردم زیاد تقسیم شده، یا دست چند نفر است؟' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'A leader looks only at the city\'s average income. What is she most likely to miss?', es: 'Una líder mira solo el ingreso promedio de la ciudad. ¿Qué es lo más probable que no vea?', fa: 'یک رهبر فقط به عاید اوسط شهر نگاه می‌کند. به احتمال زیاد چه چیزی را نمی‌بیند؟' },
        choices: [
          { ok: true, t: { en: 'Neighborhoods that are much poorer than the average', es: 'Barrios mucho más pobres que el promedio', fa: 'محله‌هایی که خیلی فقیرتر از اوسط هستند' },
            why: { en: 'The average sits between rich and poor places and shows neither one.', es: 'El promedio queda entre los lugares ricos y pobres y no muestra ninguno.', fa: 'اوسط میان جاهای پولدار و فقیر قرار دارد و هیچ‌کدام را نشان نمی‌دهد.' } },
          { t: { en: 'How many people live in the city', es: 'Cuántas personas viven en la ciudad', fa: 'چند نفر در شهر زندگی می‌کنند' },
            why: { en: 'That is a different number. The average income hides the gap between neighborhoods.', es: 'Ese es otro número. El ingreso promedio esconde la diferencia entre barrios.', fa: 'آن یک عدد دیگر است. عاید اوسط فرق میان محله‌ها را پنهان می‌کند.' } },
          { t: { en: 'The name of the city', es: 'El nombre de la ciudad', fa: 'نام شهر' },
            why: { en: 'She knows the name. What the average hides is how different the neighborhoods are.', es: 'Ella sabe el nombre. Lo que el promedio esconde es qué tan diferentes son los barrios.', fa: 'او نام شهر را می‌داند. چیزی که اوسط پنهان می‌کند فرق محله‌هاست.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 13, y: 4, text: { en: 'CITY BOARD · "Our [[average|average]] income is one of the highest in the land!" · Someone wrote below in small letters: "Average for WHO?"',
      es: 'TABLERO DE LA CIUDAD · "¡Nuestro ingreso [[average|promedio]] es uno de los más altos del país!" · Alguien escribió abajo en letras pequeñas: "¿Promedio de QUIÉN?"',
      fa: 'تختهٔ شهر · «عاید [[average|اوسط]] ما یکی از بلندترین‌ها در کشور است!» · کسی زیرش با حرف‌های کوچک نوشته: «اوسطِ چه کسی؟»' } },
    { x: 24, y: 6, text: { en: 'VILLAGE BOARD · Clinic open 3 days a week · Nearest hospital: 2 hours by boat and bus · School: 1 hour walk',
      es: 'TABLERO DEL PUEBLO · Clínica abierta 3 días a la semana · Hospital más cercano: 2 horas en lancha y autobús · Escuela: 1 hora a pie',
      fa: 'تختهٔ قریه · کلینیک ۳ روز در هفته باز است · نزدیک‌ترین شفاخانه: ۲ ساعت با کشتی و بس · مکتب: ۱ ساعت پیاده' } }
  ],

  /* the quest: Teacher Karim (gold !) -> Tuan the boat driver -> follow the Ink Thief's riddles to the village, the crowded lanes and the towers, then catch it -> back to Karim */
  quest: {
    stat: 'reg',
    title: { en: 'The Missing Village Count', es: 'El conteo perdido del pueblo', fa: 'شمارش گم‌شدهٔ قریه' },
    giver: {
      x: 20, y: 2,
      name: { en: 'Teacher Karim', es: 'Maestro Karim', fa: 'معلم کریم' },
      role: { en: 'Village schoolteacher', es: 'Maestro del pueblo', fa: 'معلم مکتب قریه' },
      look: { skin: 4, hair: '#141010', shirt: '#f0f0e8', pants: '#4a5a3a', style: 'short' },
      lines: [
        { en: 'Help! Our village filled in its [[census|census]] sheet. It counts every person here: 120 children and 80 adults. The Ink Thief grabbed it and ran!',
          es: '¡Ayuda! Nuestro pueblo llenó su hoja del [[census|censo]]. Cuenta a cada persona de aquí: 120 niños y 80 adultos. ¡El Ladrón de Tinta la agarró y salió corriendo!',
          fa: 'کمک! قریهٔ ما ورق [[census|سرشماری]] خود را پر کرد. هر نفر این‌جا را می‌شمارد: ۱۲۰ کودک و ۸۰ بزرگسال. دزد رنگ آن را گرفت و فرار کرد!' },
        { en: 'Without the count, the planners will think our village is small. Then no one will build the new classroom we need. Tuan the boat driver saw the thief. He waits by the river in the south-east.',
          es: 'Sin el conteo, los planificadores van a creer que nuestro pueblo es pequeño. Entonces nadie va a construir el salón nuevo que necesitamos. Tuan, el lanchero, vio al ladrón. Espera junto al río, en el sureste.',
          fa: 'بدون این شمارش، برنامه‌ریزها فکر می‌کنند قریهٔ ما کوچک است. آن وقت هیچ کس صنف تازه‌ای را که ضرورت داریم نمی‌سازد. توان، قایقران، دزد را دید. او کنار دریا در جنوب شرق منتظر است.' }
      ],
      wait: { en: 'Tuan waits by the river in the south-east, near the rice fields.',
        es: 'Tuan espera junto al río en el sureste, cerca de los campos de arroz.',
        fa: 'توان کنار دریا در جنوب شرق، نزدیک کشتزارهای برنج، منتظر است.' },
      thanks: { en: 'Our census sheet! Now the planners will see 120 children here, not zero. Every place must be counted, or its needs stay hidden.',
        es: '¡Nuestra hoja del censo! Ahora los planificadores verán 120 niños aquí, no cero. Hay que contar cada lugar, o sus necesidades se quedan escondidas.',
        fa: 'ورق سرشماری ما! حالا برنامه‌ریزها ۱۲۰ کودک را این‌جا می‌بینند، نه صفر. هر جا باید شمرده شود، وگرنه ضرورت‌هایش پنهان می‌ماند.' }
    },
    contact: {
      x: 26, y: 18,
      name: { en: 'Tuan', es: 'Tuan', fa: 'توان' },
      role: { en: 'Boat driver', es: 'Lanchero', fa: 'قایقران' },
      look: { skin: 1, hair: '#1a1612', shirt: '#c84a2a', pants: '#2a3a4a', style: 'short', hat: '#e0c070' },
      lines: [
        { en: 'I take sick people to the city hospital by boat. It is a long trip. This morning I saw the Ink Thief run west on the main road. It held a paper full of numbers.',
          es: 'Llevo a los enfermos al hospital de la ciudad en mi lancha. Es un viaje largo. Esta mañana vi al Ladrón de Tinta correr al oeste por la calle principal. Llevaba un papel lleno de números.',
          fa: 'من مریض‌ها را با قایق به شفاخانهٔ شهر می‌برم. سفر درازی است. امروز صبح دیدم دزد رنگ از سرک عمومی به طرف غرب دوید. یک ورق پر از عدد در دستش بود.' },
        { en: 'Then it tore the sheet into 3 pieces and hid them! Each piece is in a place that tells a story about people and numbers. Listen to its riddles and walk to the right place. Then catch the thief!',
          es: '¡Después rompió la hoja en 3 pedazos y los escondió! Cada pedazo está en un lugar que cuenta algo sobre la gente y los números. Escucha sus acertijos y camina al lugar correcto. ¡Después atrapa al ladrón!',
          fa: 'بعد ورق را سه تکه کرد و تکه‌ها را پنهان کرد! هر تکه در جایی است که دربارهٔ مردم و عددها چیزی می‌گوید. به چیستان‌هایش گوش بده و به جای درست برو. بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [10, 6],
      hops: [[10, 9], [3, 6]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'The Ink Thief laughs: "Hee hee! Why count a little village? I tore the census sheet into 3 pieces and hid them. Follow my riddles, if you can!"',
        es: 'El Ladrón de Tinta se ríe: "¡Ji ji! ¿Para qué contar un pueblito? Rompí la hoja del censo en 3 pedazos y los escondí. ¡Sigue mis acertijos, si puedes!"',
        fa: 'دزد رنگ می‌خندد: «هی هی! چرا یک قریهٔ کوچک را بشماری؟ ورق سرشماری را سه تکه کردم و پنهان کردم. اگر می‌توانی، چیستان‌هایم را دنبال کن!»' },
      clues: [
        { t: { en: 'Piece 1 is in the place I wanted to leave out of the [[census|census]]: the small village with the clinic, far from the city hospital.',
            es: 'El pedazo 1 está en el lugar que yo quería dejar fuera del [[census|censo]]: el pueblo pequeño con la clínica, lejos del hospital de la ciudad.',
            fa: 'تکهٔ ۱ در جایی است که می‌خواستم از [[census|سرشماری]] بیرون بماند: قریهٔ کوچک با کلینیک، دور از شفاخانهٔ شهر.' },
          zones: [{ x: 16, y: 1, w: 15, h: 8 }],
          noBy: [{ x: 17, y: 12, w: 8, h: 7, t: { en: 'These are rice paddies. Few people live in the fields. The village homes and the clinic are to the north.', es: 'Estos son arrozales. Poca gente vive en los campos. Las casas del pueblo y la clínica están al norte.', fa: 'این‌ها کشتزارهای برنج است. مردم کمی در کشتزارها زندگی می‌کنند. خانه‌های قریه و کلینیک در شمال است.' } },
            { x: 1, y: 1, w: 14, h: 10, t: { en: 'This is the big city. It is already counted, and its hospital is close. The thief wanted to leave out the small village.', es: 'Esta es la ciudad grande. Ya está contada, y su hospital está cerca. El ladrón quería dejar fuera al pueblo pequeño.', fa: 'این شهر بزرگ است. قبلاً شمرده شده و شفاخانه‌اش نزدیک است. دزد می‌خواست قریهٔ کوچک بیرون بماند.' } }],
          found: { en: 'Piece 1 was in the village! If a village is not counted, planners do not send it enough teachers, clinics or clean water. Its needs stay hidden.', es: '¡El pedazo 1 estaba en el pueblo! Si un pueblo no se cuenta, los planificadores no le mandan suficientes maestros, clínicas ni agua limpia. Sus necesidades quedan escondidas.', fa: 'تکهٔ ۱ در قریه بود! اگر یک قریه شمرده نشود، برنامه‌ریزها به آن معلم، کلینیک و آب پاک کافی نمی‌فرستند. ضرورت‌هایش پنهان می‌ماند.' } },
        { t: { en: 'Piece 2: many young people left the villages to find jobs. Go where the [[population|population]] grows fast: the crowded city lanes, full of homes side by side.',
            es: 'Pedazo 2: muchos jóvenes dejaron los pueblos para buscar trabajo. Ve adonde la [[population|población]] crece rápido: las calles llenas de la ciudad, con casas una al lado de otra.',
            fa: 'تکهٔ ۲: بسیاری از جوانان قریه‌ها را برای پیدا کردن کار ترک کردند. جایی برو که [[population|نفوس]] زود زیاد می‌شود: کوچه‌های پرجمعیت شهر، پر از خانه‌های پهلوی هم.' },
          zones: [{ x: 1, y: 11, w: 15, h: 10 }],
          noBy: [{ x: 1, y: 1, w: 14, h: 10, t: { en: 'These tall towers are offices, not homes. The families live in the crowded old lanes to the south.', es: 'Estas torres altas son oficinas, no casas. Las familias viven en las calles viejas y llenas, al sur.', fa: 'این تعمیرهای بلند دفتر هستند، نه خانه. فامیل‌ها در کوچه‌های کهنه و پرجمعیت جنوب زندگی می‌کنند.' } },
            { x: 17, y: 12, w: 8, h: 7, t: { en: 'The young people left these fields. Fewer people work here now. The city is where they went.', es: 'Los jóvenes dejaron estos campos. Ahora menos gente trabaja aquí. Se fueron a la ciudad.', fa: 'جوانان این کشتزارها را ترک کردند. حالا مردم کمتری این جا کار می‌کنند. آن‌ها به شهر رفتند.' } }],
          found: { en: 'Piece 2 was in the old lanes! When young people move here, the city grows. A growing city needs more homes, buses, water and schools.', es: '¡El pedazo 2 estaba en las calles viejas! Cuando los jóvenes se mudan aquí, la ciudad crece. Una ciudad que crece necesita más casas, autobuses, agua y escuelas.', fa: 'تکهٔ ۲ در کوچه‌های کهنه بود! وقتی جوانان این جا می‌آیند، شهر بزرگ می‌شود. شهری که بزرگ می‌شود به خانه، بس، آب و مکتب بیشتر ضرورت دارد.' } },
        { t: { en: 'Piece 3 is where the big pay is: the rich offices that pull the city\'s [[average|average]] income up. Find the tall towers.',
            es: 'El pedazo 3 está donde están los sueldos grandes: las oficinas ricas que suben el ingreso [[average|promedio]] de la ciudad. Busca las torres altas.',
            fa: 'تکهٔ ۳ جایی است که معاش‌های بزرگ است: دفترهای پولدار که عاید [[average|اوسط]] شهر را بالا می‌برند. تعمیرهای بلند را پیدا کن.' },
          zones: [{ x: 1, y: 1, w: 14, h: 10 }],
          noBy: [{ x: 1, y: 11, w: 15, h: 10, t: { en: 'Most families in these lanes earn much less than the average. They do not pull it up.', es: 'La mayoría de las familias de estas calles gana mucho menos que el promedio. Ellas no lo suben.', fa: 'بیشتر فامیل‌های این کوچه‌ها خیلی کمتر از اوسط پول می‌گیرند. آن‌ها اوسط را بالا نمی‌برند.' } }],
          found: { en: 'Piece 3 was by the towers! A few very big incomes here pull the average up. So the average hides the poorer lanes just to the south.', es: '¡El pedazo 3 estaba junto a las torres! Unos pocos ingresos muy grandes aquí suben el promedio. Así el promedio esconde las calles más pobres, justo al sur.', fa: 'تکهٔ ۳ کنار تعمیرهای بلند بود! چند عاید بسیار بزرگ این جا اوسط را بالا می‌برد. پس اوسط کوچه‌های فقیرتر را که درست در جنوب است پنهان می‌کند.' } }
      ],
      win: { en: 'Got you! The Ink Thief gives back the pieces and runs off in a puff of ink. All 3 pieces fit together: the census sheet is whole again, and every number is still there!',
        es: '¡Te atrapé! El Ladrón de Tinta devuelve los pedazos y huye en una nube de tinta. Los 3 pedazos encajan: la hoja del censo está completa otra vez, ¡y todos los números siguen ahí!',
        fa: 'گرفتمت! دزد رنگ تکه‌ها را پس می‌دهد و در یک ابر سیاهی فرار می‌کند. هر سه تکه با هم جور می‌شوند: ورق سرشماری دوباره کامل است و همهٔ عددها سر جایشان هستند!' },
      item: { icon: '📋', name: { en: 'The village census sheet', es: 'La hoja del censo del pueblo', fa: 'ورق سرشماری قریه' } }
    }
  },

  scraps: [[14, 8], [30, 19], [1, 20]],
  smudges: [[20, 9], [12, 14], [21, 16]],

  challenge: {
    at: [24, 15],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per country: India at the edge of the busy market town, Bangladesh by the river (it is a land of river deltas), Vietnam in the rice paddies, Singapore among the tall city buildings
    spots: [[14, 15], [27, 12], [21, 13], [12, 9]],
    stat: 'reg',
    title: { en: 'Read the numbers, find what they hide', es: 'Lee los números y descubre lo que esconden', fa: 'عددها را بخوان، آنچه پنهان می‌کنند را پیدا کن' },
    intro: { en: 'The Grump says one number tells everything. Read this table about four countries in South and Southeast Asia. Then answer the questions.',
      es: 'El Gruñón dice que un número lo dice todo. Lee esta tabla sobre cuatro países del sur y sudeste de Asia. Luego responde las preguntas.',
      fa: 'غرغرو می‌گوید یک عدد همه چیز را می‌گوید. این جدول دربارهٔ چهار کشور جنوب و جنوب شرق آسیا را بخوان. بعد به سوال‌ها جواب بده.' },
    table: {
      head: [
        { en: 'Country', es: 'País', fa: 'کشور' },
        { en: '[[life expectancy|Life expectancy]]', es: '[[life expectancy|Esperanza de vida]]', fa: '[[life expectancy|اوسط عمر]]' },
        { en: '[[population|Population]]', es: '[[population|Población]]', fa: '[[population|نفوس]]' },
        { en: 'Income per person ([[per capita gdp|per capita GDP]])', es: 'Ingreso por persona ([[per capita gdp|PIB per cápita]])', fa: 'عاید هر نفر ([[per capita gdp|تولید سرانه]])' }
      ],
      rows: [
        [{ en: 'India', es: 'India', fa: 'هند' }, { en: 'about 72 years', es: 'unos 72 años', fa: 'حدود ۷۲ سال' }, { en: 'about 1.4 billion', es: 'unos 1,400 millones', fa: 'حدود ۱.۴ میلیارد' }, { en: 'about $2,500', es: 'unos $2,500', fa: 'حدود ۲٬۵۰۰ دالر' }],
        [{ en: 'Bangladesh', es: 'Bangladés', fa: 'بنگله‌دیش' }, { en: 'about 74 years', es: 'unos 74 años', fa: 'حدود ۷۴ سال' }, { en: 'about 170 million', es: 'unos 170 millones', fa: 'حدود ۱۷۰ میلیون' }, { en: 'about $2,500', es: 'unos $2,500', fa: 'حدود ۲٬۵۰۰ دالر' }],
        [{ en: 'Vietnam', es: 'Vietnam', fa: 'ویتنام' }, { en: 'about 75 years', es: 'unos 75 años', fa: 'حدود ۷۵ سال' }, { en: 'about 100 million', es: 'unos 100 millones', fa: 'حدود ۱۰۰ میلیون' }, { en: 'about $4,300', es: 'unos $4,300', fa: 'حدود ۴٬۳۰۰ دالر' }],
        [{ en: 'Singapore', es: 'Singapur', fa: 'سنگاپور' }, { en: 'about 83 years', es: 'unos 83 años', fa: 'حدود ۸۳ سال' }, { en: 'about 6 million', es: 'unos 6 millones', fa: 'حدود ۶ میلیون' }, { en: 'about $85,000', es: 'unos $85,000', fa: 'حدود ۸۵٬۰۰۰ دالر' }]
      ],
      note: { en: 'Numbers are rounded, about 2023. Income is in US dollars per person per year.', es: 'Los números están redondeados, de alrededor de 2023. El ingreso está en dólares estadounidenses por persona al año.', fa: 'عددها گرد شده‌اند، حدود سال ۲۰۲۳. عاید به دالر امریکایی برای هر نفر در یک سال است.' }
    },
    questions: [
      { q: { en: 'Which country in the table has the longest life expectancy?', es: '¿Qué país de la tabla tiene la esperanza de vida más larga?', fa: 'کدام کشور در جدول بلندترین اوسط عمر را دارد؟' },
        choices: [{ en: 'Singapore', es: 'Singapur', fa: 'سنگاپور' }, { en: 'India', es: 'India', fa: 'هند' }, { en: 'Bangladesh', es: 'Bangladés', fa: 'بنگله‌دیش' }, { en: 'Vietnam', es: 'Vietnam', fa: 'ویتنام' }], answer: 0,
        why: { en: 'Singapore has about 83 years. That is the biggest number in that column.', es: 'Singapur tiene unos 83 años. Es el número más grande de esa columna.', fa: 'سنگاپور حدود ۸۳ سال دارد. این بزرگ‌ترین عدد در آن ستون است.' } },
      { q: { en: 'Look at income and life expectancy together. What pattern do you see in this table?', es: 'Mira juntos el ingreso y la esperanza de vida. ¿Qué patrón ves en esta tabla?', fa: 'عاید و اوسط عمر را با هم ببین. در این جدول چه نمونه‌ای می‌بینی؟' },
        choices: [{ en: 'Countries with more income per person tend to have longer lives', es: 'Los países con más ingreso por persona suelen tener vidas más largas', fa: 'کشورهایی که عاید هر نفر بیشتر دارند معمولاً عمر بلندتر دارند' }, { en: 'Countries with more people always have longer lives', es: 'Los países con más gente siempre tienen vidas más largas', fa: 'کشورهایی که مردم بیشتر دارند همیشه عمر بلندتر دارند' }, { en: 'Income and life expectancy have nothing in common', es: 'El ingreso y la esperanza de vida no tienen nada en común', fa: 'عاید و اوسط عمر هیچ ربطی به هم ندارند' }, { en: 'The smallest country has the shortest lives', es: 'El país más pequeño tiene las vidas más cortas', fa: 'کوچک‌ترین کشور کوتاه‌ترین عمر را دارد' }], answer: 0,
        why: { en: 'Singapore has the most income and the longest lives. Money can pay for clinics, clean water and food. It is a pattern, not a rule for every person.', es: 'Singapur tiene el mayor ingreso y las vidas más largas. El dinero puede pagar clínicas, agua limpia y comida. Es un patrón, no una regla para cada persona.', fa: 'سنگاپور بیشترین عاید و بلندترین عمر را دارد. پول می‌تواند کلینیک، آب پاک و غذا بخرد. این یک نمونه است، نه قانونی برای هر نفر.' } },
      { q: { en: 'Vietnam\'s income per person is about $4,300. Does every person in Vietnam earn about $4,300 a year?', es: 'El ingreso por persona de Vietnam es de unos $4,300. ¿Cada persona en Vietnam gana unos $4,300 al año?', fa: 'عاید هر نفر در ویتنام حدود ۴٬۳۰۰ دالر است. آیا هر نفر در ویتنام سالانه حدود ۴٬۳۰۰ دالر پول می‌گیرد؟' },
        choices: [{ en: 'No. It is an average. Some people earn much more and many earn less.', es: 'No. Es un promedio. Algunas personas ganan mucho más y muchas ganan menos.', fa: 'نه. این یک اوسط است. بعضی‌ها خیلی بیشتر و بسیاری کمتر می‌گیرند.' }, { en: 'Yes. Everyone in the country earns the same.', es: 'Sí. Todos en el país ganan lo mismo.', fa: 'بلی. همه در کشور یک‌قدر پول می‌گیرند.' }, { en: 'Yes, but only the children.', es: 'Sí, pero solo los niños.', fa: 'بلی، اما فقط اطفال.' }, { en: 'No. Nobody in Vietnam has a job.', es: 'No. Nadie en Vietnam tiene trabajo.', fa: 'نه. هیچ‌کس در ویتنام کار ندارد.' }], answer: 0,
        why: { en: 'Income per person is the whole country\'s income divided by all its people. It hides how the money is spread out.', es: 'El ingreso por persona es el ingreso de todo el país dividido entre toda su gente. Esconde cómo está repartido el dinero.', fa: 'عاید هر نفر، عاید تمام کشور تقسیم بر همهٔ مردم آن است. پنهان می‌کند که پول چطور پخش شده است.' } },
      { q: { en: 'India\'s life expectancy is about 72 years. Dr. Nusrat says people in some city neighborhoods live much longer than people in some far villages. How can both be true?', es: 'La esperanza de vida de India es de unos 72 años. La Dra. Nusrat dice que la gente de algunos barrios de la ciudad vive mucho más que la gente de algunos pueblos lejanos. ¿Cómo pueden ser ciertas las dos cosas?', fa: 'اوسط عمر در هند حدود ۷۲ سال است. داکتر نصرت می‌گوید مردم بعضی محله‌های شهر خیلی بیشتر از مردم بعضی قریه‌های دور زندگی می‌کنند. چطور هر دو درست است؟' },
        choices: [{ en: '72 is the average of everyone, so it hides the gap between places', es: '72 es el promedio de todos, así que esconde la diferencia entre lugares', fa: '۷۲ اوسط همه است، پس فرق میان جاها را پنهان می‌کند' }, { en: 'The table must be wrong', es: 'La tabla debe estar mal', fa: 'جدول حتماً غلط است' }, { en: 'Everyone in India lives exactly 72 years', es: 'Todos en India viven exactamente 72 años', fa: 'همه در هند دقیقاً ۷۲ سال زندگی می‌کنند' }, { en: 'Villages are not counted in a census', es: 'Los pueblos no se cuentan en un censo', fa: 'قریه‌ها در سرشماری شمرده نمی‌شوند' }], answer: 0,
        why: { en: 'Longer lives in some places and shorter lives in others can add up to one average. Always ask what an average hides.', es: 'Vidas más largas en unos lugares y más cortas en otros pueden dar un solo promedio. Pregunta siempre qué esconde un promedio.', fa: 'عمر بلندتر در بعضی جاها و کوتاه‌تر در جاهای دیگر با هم یک اوسط می‌سازند. همیشه بپرس اوسط چه چیزی را پنهان می‌کند.' } }
    ],
    success: { en: 'The numbers are clear again, and now you know what they hide!', es: '¡Los números están claros otra vez, y ahora sabes lo que esconden!', fa: 'عددها دوباره روشن شدند، و حالا می‌دانی چه چیزی را پنهان می‌کنند!' }
  },

  boss: {
    at: [6, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Average Grump', es: 'El Gruñón del Promedio', fa: 'غرغروی اوسط' },
    appear: { en: 'The Average Grump is hiding in the old lanes in the south-west!', es: '¡El Gruñón del Promedio se esconde en las calles viejas del suroeste!', fa: 'غرغروی اوسط در کوچه‌های کهنهٔ جنوب غرب پنهان است!' },
    taunt: { en: 'Ha! One number is all you need. Who cares about the people behind it?', es: '¡Ja! Un número es todo lo que necesitas. ¿A quién le importa la gente detrás de él?', fa: 'ها! یک عدد بس است. مردمِ پشت آن به چه درد می‌خورند؟' },
    win: { en: 'The Grump breaks into a thousand small numbers, one for every person. Atlas page 6.3 floats into your hands!', es: 'El Gruñón se rompe en mil números pequeños, uno por cada persona. ¡La página 6.3 del atlas cae en tus manos!', fa: 'غرغرو به هزار عدد کوچک تقسیم می‌شود، یکی برای هر نفر. صفحهٔ ۶.۳ اطلس به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What does a population pyramid show?', es: '¿Qué muestra una pirámide de población?', fa: 'هرم نفوس چه چیزی را نشان می‌دهد؟' },
        choices: [{ en: 'How many people are in each age group', es: 'Cuántas personas hay en cada grupo de edad', fa: 'در هر گروه سنی چند نفر هستند' }, { en: 'How much a country produces in a year', es: 'Cuánto produce un país en un año', fa: 'یک کشور در یک سال چقدر تولید می‌کند' }, { en: 'Where the cities are on a map', es: 'Dónde están las ciudades en un mapa', fa: 'شهرها در نقشه کجا هستند' }, { en: 'How much rain falls in each season', es: 'Cuánta lluvia cae en cada estación', fa: 'در هر فصل چقدر باران می‌بارد' }], answer: 0,
        why: { en: 'A population pyramid shows each age group, young at the bottom and old at the top.', es: 'Una pirámide de población muestra cada grupo de edad: jóvenes abajo y mayores arriba.', fa: 'هرم نفوس هر گروه سنی را نشان می‌دهد: جوانان پایین و کلان‌سالان بالا.' } },
      { q: { en: 'What is life expectancy?', es: '¿Qué es la esperanza de vida?', fa: 'اوسط عمر چیست؟' },
        choices: [{ en: 'How long a person born today can expect to live, on average', es: 'Cuánto puede esperar vivir, en promedio, una persona que nace hoy', fa: 'یک نفر که امروز به دنیا می‌آید به طور اوسط چند سال زندگی می‌کند' }, { en: 'The share of adults who can read and write', es: 'La parte de los adultos que saben leer y escribir', fa: 'حصهٔ بزرگسالانی که خواندن و نوشتن می‌دانند' }, { en: 'The number of babies born each year', es: 'El número de bebés que nacen cada año', fa: 'تعداد نوزادانی که هر سال به دنیا می‌آیند' }, { en: 'The total money a country earns in a year', es: 'Todo el dinero que gana un país en un año', fa: 'همهٔ پولی که یک کشور در یک سال به دست می‌آورد' }], answer: 0,
        why: { en: 'Life expectancy is an average number of years for a whole group.', es: 'La esperanza de vida es un número promedio de años para todo un grupo.', fa: 'اوسط عمر یک عدد اوسط از سال‌ها برای تمام یک گروه است.' } },
      { q: { en: 'A country\'s population pyramid has a very wide bottom. What will it most likely need soon?', es: 'La pirámide de población de un país tiene una base muy ancha. ¿Qué necesitará pronto, lo más probable?', fa: 'هرم نفوس یک کشور پایین بسیار پهن دارد. به احتمال زیاد به زودی به چه ضرورت دارد؟' },
        choices: [{ en: 'Many new schools', es: 'Muchas escuelas nuevas', fa: 'مکتب‌های نو زیاد' }, { en: 'More nurses for older patients', es: 'Más enfermeras para pacientes mayores', fa: 'نرس‌های بیشتر برای مریضان کلان‌سال' }, { en: 'Fewer farms and less food', es: 'Menos granjas y menos comida', fa: 'زمین زراعتی کمتر و غذای کمتر' }, { en: 'A smaller army', es: 'Un ejército más pequeño', fa: 'یک اردوی کوچک‌تر' }], answer: 0,
        why: { en: 'A wide bottom means many children, and children need schools.', es: 'Una base ancha significa muchos niños, y los niños necesitan escuelas.', fa: 'پایین پهن یعنی اطفال زیاد، و اطفال به مکتب ضرورت دارند.' } },
      { q: { en: 'What is per capita GDP?', es: '¿Qué es el PIB per cápita?', fa: 'تولید سرانه (GDP سرانه) چیست؟' },
        choices: [{ en: 'Everything a country produces in a year, divided by its number of people', es: 'Todo lo que un país produce en un año, dividido entre su número de personas', fa: 'همهٔ تولید یک کشور در یک سال، تقسیم بر تعداد مردمش' }, { en: 'The share of adults who can read and write', es: 'La parte de los adultos que saben leer y escribir', fa: 'حصهٔ بزرگسالانی که خواندن و نوشتن می‌دانند' }, { en: 'The number of years children spend in school', es: 'El número de años que los niños pasan en la escuela', fa: 'تعداد سال‌هایی که اطفال در مکتب می‌گذرانند' }, { en: 'The average number of years people live', es: 'El número promedio de años que vive la gente', fa: 'تعداد اوسط سال‌هایی که مردم زندگی می‌کنند' }], answer: 0,
        why: { en: 'Per capita means "for each person." It is the country\'s output split evenly by its people.', es: 'Per cápita significa "por cada persona". Es lo que produce el país repartido en partes iguales entre su gente.', fa: 'سرانه یعنی «برای هر نفر». تولید کشور است که برابر میان مردمش تقسیم شده.' } },
      { q: { en: 'Nine workers earn $20,000 a year and one earns $800,000. The average is $98,000. What does this show?', es: 'Nueve trabajadores ganan $20,000 al año y uno gana $800,000. El promedio es $98,000. ¿Qué muestra esto?', fa: 'نُه کارگر سالانه ۲۰٬۰۰۰ دالر و یک نفر ۸۰۰٬۰۰۰ دالر می‌گیرند. اوسط ۹۸٬۰۰۰ دالر است. این چه چیزی را نشان می‌دهد؟' },
        choices: [{ en: 'One very large number can pull an average away from most of the group', es: 'Un número muy grande puede alejar el promedio de la mayoría del grupo', fa: 'یک عدد بسیار بزرگ می‌تواند اوسط را از بیشتر گروه دور کند' }, { en: 'Averages are always wrong and should never be used', es: 'Los promedios siempre están mal y nunca se deben usar', fa: 'اوسط همیشه غلط است و هرگز نباید استفاده شود' }, { en: 'Every worker in that room earns about the same', es: 'Cada trabajador de ese cuarto gana más o menos lo mismo', fa: 'هر کارگر در آن اتاق تقریباً یک‌قدر پول می‌گیرد' }, { en: 'Adding numbers is harder than dividing them', es: 'Sumar números es más difícil que dividirlos', fa: 'جمع کردن عددها از تقسیم سخت‌تر است' }], answer: 0,
        why: { en: 'The one big wage pulls the average up. Nine of the ten earn far less than $98,000.', es: 'El sueldo enorme sube el promedio. Nueve de los diez ganan mucho menos de $98,000.', fa: 'یک معاش بزرگ اوسط را بالا می‌برد. نُه نفر از ده نفر خیلی کمتر از ۹۸٬۰۰۰ دالر می‌گیرند.' } },
      { q: { en: 'A country has a high per capita GDP because it sells a lot of oil. What does that number prove about its schools?', es: 'Un país tiene un PIB per cápita alto porque vende mucho petróleo. ¿Qué prueba ese número sobre sus escuelas?', fa: 'یک کشور تولید سرانهٔ بلند دارد چون نفت زیاد می‌فروشد. این عدد دربارهٔ مکتب‌هایش چه چیزی را ثابت می‌کند؟' },
        choices: [{ en: 'Nothing. One number alone cannot tell you about the schools.', es: 'Nada. Un solo número no te dice nada de las escuelas.', fa: 'هیچ چیز. یک عدد به تنهایی دربارهٔ مکتب‌ها چیزی نمی‌گوید.' }, { en: 'It proves the schools are strong.', es: 'Prueba que las escuelas son buenas.', fa: 'ثابت می‌کند مکتب‌ها قوی هستند.' }, { en: 'It proves the schools are weak.', es: 'Prueba que las escuelas son malas.', fa: 'ثابت می‌کند مکتب‌ها ضعیف هستند.' }, { en: 'It proves the schools are average.', es: 'Prueba que las escuelas son regulares.', fa: 'ثابت می‌کند مکتب‌ها متوسط هستند.' }], answer: 0,
        why: { en: 'Geographers read several numbers together, like literacy rate and life expectancy, before they judge.', es: 'Los geógrafos leen varios números juntos, como la alfabetización y la esperanza de vida, antes de juzgar.', fa: 'جغرافیه‌دان‌ها پیش از قضاوت چند عدد را با هم می‌خوانند، مثل سواد و اوسط عمر.' } },
      { q: { en: 'Which three things does the Human Development Index (HDI) put together?', es: '¿Qué tres cosas junta el Índice de Desarrollo Humano (IDH)?', fa: 'شاخص انکشاف بشری کدام سه چیز را با هم یکجا می‌کند؟' },
        choices: [{ en: 'Life expectancy, education and income', es: 'Esperanza de vida, educación e ingreso', fa: 'اوسط عمر، تعلیم و عاید' }, { en: 'Rain, heat and wind', es: 'Lluvia, calor y viento', fa: 'باران، گرمی و باد' }, { en: 'Cities, roads and ports', es: 'Ciudades, calles y puertos', fa: 'شهرها، سرک‌ها و بندرها' }, { en: 'Army, police and courts', es: 'Ejército, policía y tribunales', fa: 'اردو، پولیس و محکمه‌ها' }], answer: 0,
        why: { en: 'The HDI mixes how long people live, how long they go to school and how much they earn.', es: 'El IDH mezcla cuánto vive la gente, cuánto tiempo va a la escuela y cuánto gana.', fa: 'این شاخص یکجا می‌کند که مردم چند سال زندگی می‌کنند، چند سال مکتب می‌روند و چقدر عاید دارند.' } },
      { q: { en: 'Two countries have the same HDI score. Why can daily life still feel very different in them?', es: 'Dos países tienen el mismo IDH. ¿Por qué la vida diaria puede sentirse muy diferente en ellos?', fa: 'دو کشور یک نمرهٔ شاخص انکشاف بشری دارند. چرا زندگی روزمره در آن‌ها هنوز می‌تواند خیلی فرق کند؟' },
        choices: [{ en: 'Safety, clean air and free time are not counted in the score', es: 'La seguridad, el aire limpio y el tiempo libre no se cuentan en el índice', fa: 'امنیت، هوای پاک و وقت آزاد در این نمره حساب نمی‌شوند' }, { en: 'HDI scores are picked at random each year', es: 'Los puntajes del IDH se eligen al azar cada año', fa: 'نمره‌ها هر سال تصادفی انتخاب می‌شوند' }, { en: 'The HDI counts income only', es: 'El IDH solo cuenta el ingreso', fa: 'این شاخص فقط عاید را حساب می‌کند' }, { en: 'One country must have more people', es: 'Un país debe tener más gente', fa: 'یک کشور حتماً مردم بیشتر دارد' }], answer: 0,
        why: { en: 'Standard of living is what money buys. Quality of life is how life feels, and the HDI does not count all of it.', es: 'El nivel de vida es lo que compra el dinero. La calidad de vida es cómo se siente la vida, y el IDH no lo cuenta todo.', fa: 'سطح زندگی چیزی است که پول می‌خرد. کیفیت زندگی این است که زندگی چطور حس می‌شود، و این شاخص همه را حساب نمی‌کند.' } }
    ]
  },

  learned: [
    { en: 'A [[population pyramid|population pyramid]] shows each age group. A wide bottom means many children and a need for schools.', es: 'Una [[population pyramid|pirámide de población]] muestra cada grupo de edad. Una base ancha significa muchos niños y la necesidad de escuelas.', fa: '[[population pyramid|هرم نفوس]] هر گروه سنی را نشان می‌دهد. پایین پهن یعنی اطفال زیاد و ضرورت به مکتب.' },
    { en: '[[life expectancy|Life expectancy]], literacy and [[per capita gdp|per capita GDP]] help compare countries. The [[hdi|HDI]] puts health, school and income into one score.', es: 'La [[life expectancy|esperanza de vida]], la alfabetización y el [[per capita gdp|PIB per cápita]] ayudan a comparar países. El [[hdi|IDH]] junta salud, escuela e ingreso en un solo puntaje.', fa: '[[life expectancy|اوسط عمر]]، سواد و [[per capita gdp|تولید سرانه]] برای مقایسهٔ کشورها کمک می‌کنند. [[hdi|شاخص انکشاف بشری]] صحت، تعلیم و عاید را در یک نمره یکجا می‌کند.' },
    { en: 'An [[average|average]] can hide big differences, like rich towers and poor lanes in one city, or a city and a far village in one country.', es: 'Un [[average|promedio]] puede esconder grandes diferencias, como torres ricas y calles pobres en una ciudad, o una ciudad y un pueblo lejano en un país.', fa: '[[average|اوسط]] می‌تواند فرق‌های بزرگ را پنهان کند، مثل تعمیرهای پولدار و کوچه‌های فقیر در یک شهر، یا یک شهر و یک قریهٔ دور در یک کشور.' }
  ],
  reflect: {
    q: { en: 'Think about your own city or the place you came from. What is one difference that an average number about that place might hide?', es: 'Piensa en tu ciudad o en el lugar de donde vienes. ¿Qué diferencia podría esconder un número promedio sobre ese lugar?', fa: 'به شهر خودت یا جایی که از آن آمده‌ای فکر کن. یک عدد اوسط دربارهٔ آن جا چه فرقی را ممکن است پنهان کند؟' },
    starter: { en: 'An average about my city might hide', es: 'Un promedio sobre mi ciudad podría esconder', fa: 'یک اوسط دربارهٔ شهر من ممکن است پنهان کند که' }
  }
};
