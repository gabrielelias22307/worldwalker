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
    { en: 'The Grump smeared every number here! Now people think one number tells the whole story.', es: '¡El Gruñón manchó todos los números de aquí! Ahora la gente cree que un solo número cuenta toda la historia.', fa: 'غرغرو همهٔ عددهای این‌جا را خراب کرد! حالا مردم فکر می‌کنند یک عدد تمام قصه را می‌گوید.' },
    { en: 'Meet the census worker, doctor and city planner. Then fix the compass stone.', es: 'Habla con la encuestadora del censo, la doctora y la planificadora. Luego arregla la piedra de la brújula.', fa: 'با کارمند سرشماری، داکتر و برنامه‌ریز شهر گپ بزن. بعد سنگ قطب‌نما را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): where the place is on the world map, facts after Start, one fact after the page */
  scenes: {
    at: [90.4, 23.8],
    start: [
      { en: 'Welcome to Bangladesh, one of the most crowded countries in the world.',
        es: 'Bienvenido a Bangladés, uno de los países con más gente por espacio del mundo.',
        fa: 'به بنگله‌دیش خوش آمدی، یکی از پرجمعیت‌ترین کشورهای جهان.' },
      { en: 'Bangladesh is about the size of Iowa, but it has over 170 million people.',
        es: 'Bangladés es del tamaño de Iowa, pero tiene más de 170 millones de personas.',
        fa: 'بنگله‌دیش تقریباً به اندازهٔ آیووا است، اما بیشتر از ۱۷۰ میلیون نفر دارد.' },
      { en: 'In Pakistan, half of all people are younger than 21.',
        es: 'En Pakistán, la mitad de la gente tiene menos de 21 años.',
        fa: 'در پاکستان، نیمی از مردم کمتر از ۲۱ سال دارند.' }
    ],
    page: { en: 'Since 1970, life expectancy in Bangladesh grew from under 50 to over 70 years.',
      es: 'Desde 1970, la esperanza de vida en Bangladés subió de menos de 50 a más de 70 años.',
      fa: 'از سال ۱۹۷۰، اوسط عمر در بنگله‌دیش از کمتر از ۵۰ به بیشتر از ۷۰ سال رسید.' }
  },
  /* houses (fun-pass-4): who lives behind each door; walk in and talk (2 lines each) */
  houses: [
    { at: [23, 2], name: { en: 'Grandpa Rahim', es: 'Abuelo Rahim', fa: 'پدرکلان رحیم' },
      look: { skin: 4, hair: '#e8e8e8', shirt: '#e8e8d8', pants: '#4a6a3a', style: 'short' },
      lines: [
        { en: 'Come in, come in! I have farmed this land for sixty years.', es: '¡Pasa, pasa! Hace sesenta años que cultivo esta tierra.', fa: 'بیا داخل، بیا! شصت سال است که این زمین را کشت می‌کنم.' },
        { en: 'When I was young, families had six or seven kids. Now most have two.', es: 'Cuando yo era joven, las familias tenían seis o siete hijos. Ahora casi todas tienen dos.', fa: 'وقتی جوان بودم، خانواده‌ها شش یا هفت طفل داشتند. حالا بیشترشان دو طفل دارند.' }
      ] },
    { at: [18, 4], name: { en: 'Shapla', es: 'Shapla', fa: 'شاپلا' },
      look: { skin: 3, hair: '#1a1210', shirt: '#e85a8a', pants: '#4a2a4a', style: 'bun' },
      lines: [
        { en: 'Shh, the baby is asleep. She got her vaccines at the clinic today.', es: 'Shh, la bebé está dormida. Hoy le pusieron sus vacunas en la clínica.', fa: 'آرام، طفل خواب است. امروز در کلینیک واکسین‌هایش را گرفت.' },
        { en: 'Vaccines and clean water help more babies grow up healthy.', es: 'Las vacunas y el agua limpia ayudan a que más bebés crezcan sanos.', fa: 'واکسین و آب پاک کمک می‌کنند که طفل‌های بیشتری صحتمند بزرگ شوند.' }
      ] },
    { at: [27, 4], name: { en: 'Rafi', es: 'Rafi', fa: 'رفیع' },
      look: { skin: 4, hair: '#141010', shirt: '#3a6ad6', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'My big brother moved to the city for a factory job.', es: 'Mi hermano mayor se fue a la ciudad por un trabajo en una fábrica.', fa: 'برادر بزرگم برای کار در فابریکه به شهر رفت.' },
        { en: 'He sends money home every month. It pays for my school books!', es: 'Manda dinero a casa cada mes. ¡Con eso pago mis libros de la escuela!', fa: 'هر ماه به خانه پول می‌فرستد. با آن کتاب‌های مکتبم را می‌خرم!' }
      ] },
    { at: [23, 17], name: { en: 'Auntie Jharna', es: 'Tía Jharna', fa: 'خاله جرنا' },
      look: { skin: 3, hair: '#2a1a12', shirt: '#f0a030', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'Look up! We put a solar panel on our roof last year.', es: '¡Mira arriba! El año pasado pusimos un panel solar en el techo.', fa: 'بالا را ببین! پارسال یک پلیت آفتابی روی بام خود گذاشتیم.' },
        { en: 'Now the lights work at night, and my kids can do homework.', es: 'Ahora hay luz en la noche, y mis hijos pueden hacer la tarea.', fa: 'حالا شب‌ها چراغ روشن است و اولادهایم می‌توانند کارخانگی کنند.' }
      ] },
    { at: [2, 13], name: { en: 'Rina', es: 'Rina', fa: 'رینا' },
      look: { skin: 3, hair: '#1a1410', shirt: '#8e5bd6', pants: '#3a3a5a', style: 'bun' },
      lines: [
        { en: 'Hi! I sew shirts in a big factory. They sell in faraway countries.', es: '¡Hola! Coso camisas en una fábrica grande. Se venden en países lejanos.', fa: 'سلام! در یک فابریکهٔ بزرگ پیراهن می‌دوزم. آن‌ها در کشورهای دور فروخته می‌شوند.' },
        { en: 'The pay is small, but I save some for my daughter\'s school.', es: 'El sueldo es poco, pero guardo un poco para la escuela de mi hija.', fa: 'معاشم کم است، ولی کمی برای مکتب دخترم پس‌انداز می‌کنم.' }
      ] },
    { at: [6, 13], name: { en: 'Uncle Jamal', es: 'Tío Jamal', fa: 'کاکا جمال' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#2a8a5a', pants: '#4a4a3a', style: 'short', hat: '#f0f0f0' },
      lines: [
        { en: 'Phew! I pedal a rickshaw all day. City traffic is so slow!', es: '¡Uf! Pedaleo un rickshaw todo el día. ¡El tráfico de la ciudad es lentísimo!', fa: 'اوف! تمام روز ریکشا می‌رانم. ترافیک شهر خیلی آهسته است!' },
        { en: 'I came from a village. The city has more jobs, but more crowds too.', es: 'Vine de un pueblo. La ciudad tiene más trabajo, pero también más gente.', fa: 'من از قریه آمدم. شهر کار بیشتر دارد، ولی ازدحام هم بیشتر است.' }
      ] },
    { at: [10, 13], name: { en: 'Tanvir', es: 'Tanvir', fa: 'تنویر' },
      look: { skin: 3, hair: '#141010', shirt: '#f0f0f0', pants: '#2a3a6a', style: 'short' },
      lines: [
        { en: 'Sorry about the mess! I am studying for my computer exam.', es: '¡Perdón por el desorden! Estoy estudiando para mi examen de computación.', fa: 'ببخش که خانه بی‌نظم است! برای امتحان کمپیوتر درس می‌خوانم.' },
        { en: 'Our country is full of young people. Soon we all need jobs!', es: 'Nuestro país está lleno de jóvenes. ¡Pronto todos vamos a necesitar trabajo!', fa: 'کشور ما پر از جوانان است. به زودی همهٔ ما به کار ضرورت داریم!' }
      ] },
    { at: [14, 13], name: { en: 'Farzana', es: 'Farzana', fa: 'فرزانه' },
      look: { skin: 2, hair: '#2a1a12', shirt: '#2f9ed6', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I work in the glass towers now, but I grew up in this lane.', es: 'Ahora trabajo en las torres de vidrio, pero crecí en esta calle.', fa: 'حالا در برج‌های شیشه‌ای کار می‌کنم، ولی در همین کوچه بزرگ شدم.' },
        { en: 'I earn a lot. My neighbor earns little. One average hides us both.', es: 'Yo gano mucho. Mi vecina gana poco. Un solo promedio nos esconde a las dos.', fa: 'من معاش زیاد می‌گیرم. همسایه‌ام کم. یک اوسط هر دوی ما را پنهان می‌کند.' }
      ] },
    { at: [2, 18], name: { en: 'Nani Rokeya', es: 'Abuela Rokeya', fa: 'مادرکلان رقیه' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#f0f0e0', pants: '#6a4a8a', style: 'bun' },
      lines: [
        { en: 'Come sit with me, dear. When I was a girl, few girls went to school.', es: 'Ven, siéntate conmigo. Cuando yo era niña, pocas niñas iban a la escuela.', fa: 'بیا پیش من بنشین، جان. وقتی من دختر بودم، دخترهای کمی به مکتب می‌رفتند.' },
        { en: 'Now both my granddaughters go to college. One wants to be a doctor!', es: 'Ahora mis dos nietas van a la universidad. ¡Una quiere ser doctora!', fa: 'حالا هر دو نواسه‌ام به پوهنتون می‌روند. یکی می‌خواهد داکتر شود!' }
      ] },
    { at: [6, 18], name: { en: 'Nurse Mitali', es: 'Enfermera Mitali', fa: 'نرس میتالی' },
      look: { skin: 3, hair: '#1a1210', shirt: '#f4f4f4', pants: '#4a8ad6', style: 'bun' },
      lines: [
        { en: 'Shh, I just got home from the night shift at the hospital.', es: 'Shh, acabo de llegar del turno de noche en el hospital.', fa: 'آرام، تازه از نوکریوالی شب در شفاخانه به خانه آمدم.' },
        { en: 'The city has many doctors. Far villages have very few.', es: 'La ciudad tiene muchos doctores. Los pueblos lejanos tienen muy pocos.', fa: 'شهر داکتران زیاد دارد. قریه‌های دور خیلی کم دارند.' }
      ] },
    { at: [10, 18], name: { en: 'Kabir', es: 'Kabir', fa: 'کبیر' },
      look: { skin: 4, hair: '#141010', shirt: '#d6402f', pants: '#3a3a3a', style: 'short', hat: '#f0e0b0' },
      lines: [
        { en: 'Try a hot samosa! I sell them by the bus stop.', es: '¡Prueba una samosa caliente! Las vendo en la parada del bus.', fa: 'یک سمبوسهٔ گرم بخور! آن‌ها را کنار ایستگاه بس می‌فروشم.' },
        { en: 'More people in the city means more hungry customers for me!', es: '¡Más gente en la ciudad quiere decir más clientes con hambre para mí!', fa: 'مردم بیشتر در شهر یعنی مشتری‌های گرسنهٔ بیشتر برای من!' }
      ] },
    { at: [14, 18], name: { en: 'Little Nadia', es: 'Nadia', fa: 'نادیه کوچک' },
      look: { skin: 3, hair: '#1a1410', shirt: '#f0d040', pants: '#3a6a5a', style: 'long' },
      lines: [
        { en: 'Hi! Grandma, aunts, uncles and cousins all live in our house.', es: '¡Hola! La abuela, mis tías, mis tíos y mis primos viven en nuestra casa.', fa: 'سلام! مادرکلان، خاله‌ها، کاکاها و بچه‌کاکاهایم همه در خانهٔ ما زندگی می‌کنند.' },
        { en: 'Twelve people, one house! Our lane is more crowded than a whole village.', es: '¡Doce personas, una casa! Nuestra calle tiene más gente que un pueblo entero.', fa: 'دوازده نفر، یک خانه! کوچهٔ ما از یک قریهٔ کامل پرنفوس‌تر است.' }
      ] }
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
    'W...:.....................:.~~TT',
    'WRRR:QQQ:RRR:QQ..qqqqqqqq.:.~W.T',
    'Whdh:hdh:hdh:hd..qqqqqqqq.:.~~GT',
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
      text: { en: 'You found a small drum by the village road! In India, about 2 of every 3 people live in villages.', es: '¡Encontraste un tambor pequeño junto al camino del pueblo! En la India, unas 2 de cada 3 personas viven en pueblos.', fa: 'تو یک دهل کوچک کنار سرک قریه پیدا کردی! در هند، از هر ۳ نفر تقریباً ۲ نفر در قریه‌ها زندگی می‌کنند.' } },
    { clueAt: [7, 14], at: [11, 19], decor: 'vase',
      clue: { en: 'Crowded cities need lots of water. Find the only well in the old lanes. Stand just north of it.', es: 'Las ciudades llenas de gente necesitan mucha agua. Busca el único pozo de las calles viejas. Párate justo al norte.', fa: 'شهرهای پرجمعیت به آب زیاد ضرورت دارند. تنها چاه کوچه‌های کهنه را پیدا کن. درست شمالِ آن بایست.' },
      text: { en: 'In crowded lanes, many families share one well. Today, more than half the world\'s people live in cities.', es: 'En las calles llenas, muchas familias comparten un pozo. Hoy, más de la mitad de la gente del mundo vive en ciudades.', fa: 'در کوچه‌های پرجمعیت، چند فامیل از یک چاه استفاده می‌کنند. امروز بیشتر از نیمِ مردم جهان در شهرها زندگی می‌کنند.' } }
  ],
  // only the Water Key (Episode 5.3) opens the gate of the village water tank by the river in the east
  secret: { tool: 'key', at: [30, 12],
    text: { en: 'You opened the village water tank! Clean water keeps families healthy. In many villages, children walk a long way every day to carry water, so a tank or tap near home means more time for school.',
      es: '¡Abriste el tanque de agua del pueblo! El agua limpia mantiene sanas a las familias. En muchos pueblos, los niños caminan lejos cada día para cargar agua, así que un tanque o un grifo cerca de casa da más tiempo para la escuela.',
      fa: 'تو ذخیرهٔ آب قریه را باز کردی! آب پاک فامیل‌ها را صحتمند نگه می‌دارد. در بسیاری از قریه‌ها، اطفال هر روز راه درازی می‌روند تا آب بیاورند، پس یک ذخیره یا نل آب نزدیک خانه یعنی وقت بیشتر برای مکتب.' } },

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
        { en: 'Hello! I count every person for the [[census|census]]. A [[population pyramid|population pyramid]] shows each age group.', es: '¡Hola! Cuento a cada persona para el [[census|censo]]. Una [[population pyramid|pirámide de población]] muestra cada grupo de edad.', fa: 'سلام! من هر نفر را برای [[census|سرشماری]] می‌شمارم. [[population pyramid|هرم نفوس]] هر گروه سنی را نشان می‌دهد.' },
        { en: 'Children are at the bottom. A wide bottom means a country needs many new schools.', es: 'Los niños están abajo. Una base ancha significa que el país necesita muchas escuelas nuevas.', fa: 'اطفال در پایین هستند. پایین پهن یعنی کشور به مکتب‌های نو زیاد ضرورت دارد.' },
        { en: 'Old people are at the top. A wide top needs more nurses and doctors.', es: 'Las personas mayores están arriba. Una parte de arriba ancha necesita más enfermeras y doctores.', fa: 'کلان‌سالان در بالا هستند. بالای پهن به نرس و داکتر بیشتر ضرورت دارد.' },
        { en: 'My [[line graph|line graph]] shows world [[population|population]]: 2.5 billion in 1950, over 8 billion in 2022!', es: 'Mi [[line graph|gráfica de líneas]] muestra la [[population|población]] del mundo: 2,500 millones en 1950, ¡más de 8,000 millones en 2022!', fa: '[[line graph|گراف خطی]] من [[population|نفوس]] جهان را نشان می‌دهد: ۲.۵ میلیارد در ۱۹۵۰، بیشتر از ۸ میلیارد در ۲۰۲۲!' }
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
        { en: '[[life expectancy|Life expectancy]] is how long a baby born today can expect to live, on average.', es: 'La [[life expectancy|esperanza de vida]] es cuánto puede esperar vivir, en promedio, un bebé que nace hoy.', fa: '[[life expectancy|اوسط عمر]] یعنی نوزادی که امروز به دنیا می‌آید به طور اوسط چند سال زندگی می‌کند.' },
        { en: 'Clean water, good food, vaccines and nearby clinics all help people live longer.', es: 'El agua limpia, la buena comida, las vacunas y las clínicas cercanas ayudan a vivir más.', fa: 'آب پاک، غذای خوب، واکسین و کلینیک نزدیک کمک می‌کنند مردم بیشتر زندگی کنند.' },
        { en: 'Our country has one life expectancy number. But it hides a gap.', es: 'Nuestro país tiene un solo número de esperanza de vida. Pero esconde una diferencia.', fa: 'کشور ما یک عدد برای اوسط عمر دارد. اما این عدد یک فرق را پنهان می‌کند.' },
        { en: 'City people walk to the hospital. Ours is two hours away by boat and bus.', es: 'En la ciudad, la gente camina al hospital. El nuestro está a dos horas en lancha y autobús.', fa: 'مردم شهر پیاده به شفاخانه می‌روند. شفاخانهٔ ما دو ساعت با کشتی و بس دور است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which change would most likely help people in this village live longer?', es: '¿Qué cambio ayudaría más a que la gente de este pueblo viva más años?', fa: 'کدام تغییر به احتمال زیاد کمک می‌کند مردم این قریه بیشتر زندگی کنند؟' },
        choices: [
          { ok: true, t: { en: 'Clean water and a clinic every day', es: 'Agua limpia y una clínica todos los días', fa: 'آب پاک و کلینیکی که هر روز باز است' },
            why: { en: 'Clean water stops sickness, and a clinic helps sick people fast.', es: 'El agua limpia evita enfermedades y una clínica ayuda rápido a los enfermos.', fa: 'آب پاک جلوی مریضی را می‌گیرد و کلینیک به مریض‌ها زود کمک می‌کند.' } },
          { t: { en: 'A taller tower in the city', es: 'Una torre más alta en la ciudad', fa: 'یک تعمیر بلندتر در شهر' },
            why: { en: 'A tower far away does not bring health care to the village.', es: 'Una torre lejana no trae salud al pueblo.', fa: 'یک تعمیر دور، خدمات صحی را به قریه نمی‌آورد.' } },
          { t: { en: 'A new way to count all the people here', es: 'Una nueva forma de contar a toda la gente de aquí', fa: 'یک روش نو برای شمردن همهٔ مردم این‌جا' },
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
        { en: 'I plan this city. Our [[average|average]] income is high, but these old lanes are poor.', es: 'Yo planeo esta ciudad. Nuestro ingreso [[average|promedio]] es alto, pero estas calles viejas son pobres.', fa: 'من این شهر را پلان می‌کنم. عاید [[average|اوسط]] ما بلند است، اما این کوچه‌های کهنه فقیر هستند.' },
        { en: 'Nine workers earn $20,000 a year. One earns $800,000. The average is $98,000!', es: 'Nueve trabajadores ganan $20,000 al año. Uno gana $800,000. ¡El promedio es $98,000!', fa: 'نُه کارگر سالانه ۲۰٬۰۰۰ دالر می‌گیرند. یک نفر ۸۰۰٬۰۰۰ دالر می‌گیرد. اوسط ۹۸٬۰۰۰ دالر است!' },
        { en: 'Nine of the ten earn far less! One very big number pulls the average up.', es: '¡Nueve de los diez ganan mucho menos! Un número muy grande sube el promedio.', fa: 'نُه نفر از ده نفر خیلی کمتر می‌گیرند! یک عدد بسیار بزرگ اوسط را بالا می‌برد.' },
        { en: 'So ask: how is money [[distributed|distributed]]? Shared by many, or held by a few?', es: 'Entonces pregunta: ¿cómo está [[distributed|repartido]] el dinero? ¿Lo comparten muchos o lo tienen pocos?', fa: 'پس بپرس: پول چطور [[distributed|پخش شده]] است؟ میان مردم زیاد، یا دست چند نفر؟' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'A leader looks only at the city\'s average income. What is she most likely to miss?', es: 'Una líder mira solo el ingreso promedio de la ciudad. ¿Qué es lo más probable que no vea?', fa: 'یک رهبر فقط به عاید اوسط شهر نگاه می‌کند. به احتمال زیاد چه چیزی را نمی‌بیند؟' },
        choices: [
          { ok: true, t: { en: 'Neighborhoods much poorer than the average', es: 'Barrios mucho más pobres que el promedio', fa: 'محله‌هایی خیلی فقیرتر از اوسط' },
            why: { en: 'The average sits between rich and poor places and shows neither one.', es: 'El promedio queda entre los lugares ricos y pobres y no muestra ninguno.', fa: 'اوسط میان جاهای پولدار و فقیر قرار دارد و هیچ‌کدام را نشان نمی‌دهد.' } },
          { t: { en: 'How many people live in the whole city today', es: 'Cuántas personas viven hoy en toda la ciudad', fa: 'امروز چند نفر در تمام شهر زندگی می‌کنند' },
            why: { en: 'That is a different number. The average income hides the gap between neighborhoods.', es: 'Ese es otro número. El ingreso promedio esconde la diferencia entre barrios.', fa: 'آن یک عدد دیگر است. عاید اوسط فرق میان محله‌ها را پنهان می‌کند.' } },
          { t: { en: 'The name of the city', es: 'El nombre de la ciudad', fa: 'نام شهر' },
            why: { en: 'She knows the name. What the average hides is how different the neighborhoods are.', es: 'Ella sabe el nombre. Lo que el promedio esconde es qué tan diferentes son los barrios.', fa: 'او نام شهر را می‌داند. چیزی که اوسط پنهان می‌کند فرق محله‌هاست.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 13, y: 4, text: { en: 'CITY BOARD · "Our [[average|average]] income is one of the highest!" · Someone wrote below: "Average for WHO?"', es: 'TABLERO DE LA CIUDAD · "¡Nuestro ingreso [[average|promedio]] es de los más altos!" · Alguien escribió abajo: "¿Promedio de QUIÉN?"', fa: 'تختهٔ شهر · «عاید [[average|اوسط]] ما از بلندترین‌ها است!» · کسی زیرش نوشته: «اوسطِ چه کسی؟»' } },
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
        { en: 'Help! Our village filled in its [[census|census]] sheet: 120 children and 80 adults.', es: '¡Ayuda! Nuestro pueblo llenó su hoja del [[census|censo]]: 120 niños y 80 adultos.', fa: 'کمک! قریهٔ ما ورق [[census|سرشماری]] خود را پر کرد: ۱۲۰ کودک و ۸۰ بزرگسال.' },
        { en: 'The Ink Thief grabbed it and ran!', es: '¡El Ladrón de Tinta la agarró y salió corriendo!', fa: 'دزد رنگ آن را گرفت و فرار کرد!' },
        { en: 'Without the count, planners will think we are small. No one will build our classroom.', es: 'Sin el conteo, los planificadores creerán que somos pocos. Nadie construirá nuestro salón.', fa: 'بدون شمارش، برنامه‌ریزها فکر می‌کنند ما کم هستیم. هیچ کس صنف ما را نمی‌سازد.' },
        { en: 'Tuan the boat driver saw the thief. He waits by the river in the south-east.', es: 'Tuan, el lanchero, vio al ladrón. Espera junto al río, en el sureste.', fa: 'توان، قایقران، دزد را دید. او کنار دریا در جنوب شرق منتظر است.' }
      ],
      wait: { en: 'Tuan waits by the river in the south-east, near the rice fields.',
        es: 'Tuan espera junto al río en el sureste, cerca de los campos de arroz.',
        fa: 'توان کنار دریا در جنوب شرق، نزدیک کشتزارهای برنج، منتظر است.' },
      thanks: { en: 'Our census sheet! Now planners will see 120 children here. Every place must be counted.', es: '¡Nuestra hoja del censo! Ahora los planificadores verán 120 niños aquí. Hay que contar cada lugar.', fa: 'ورق سرشماری ما! حالا برنامه‌ریزها ۱۲۰ کودک را این‌جا می‌بینند. هر جا باید شمرده شود.' }
    },
    contact: {
      x: 26, y: 18,
      name: { en: 'Tuan', es: 'Tuan', fa: 'توان' },
      role: { en: 'Boat driver', es: 'Lanchero', fa: 'قایقران' },
      look: { skin: 1, hair: '#1a1612', shirt: '#c84a2a', pants: '#2a3a4a', style: 'short', hat: '#e0c070' },
      lines: [
        { en: 'I take sick people to the city hospital by boat. It is a long trip.', es: 'Llevo a los enfermos al hospital de la ciudad en mi lancha. Es un viaje largo.', fa: 'من مریض‌ها را با قایق به شفاخانهٔ شهر می‌برم. سفر درازی است.' },
        { en: 'This morning I saw the Ink Thief run west on the main road.', es: 'Esta mañana vi al Ladrón de Tinta correr al oeste por la calle principal.', fa: 'امروز صبح دیدم دزد رنگ از سرک عمومی به طرف غرب دوید.' },
        { en: 'It tore the sheet into 3 pieces and hid them in places that tell stories.', es: 'Rompió la hoja en 3 pedazos y los escondió en lugares que cuentan historias.', fa: 'ورق را سه تکه کرد و تکه‌ها را در جاهایی پنهان کرد که قصه می‌گویند.' },
        { en: 'Listen to its riddles, walk to the right places, and then catch the thief!', es: '¡Escucha sus acertijos, camina a los lugares correctos y luego atrapa al ladrón!', fa: 'به چیستان‌هایش گوش بده، به جاهای درست برو و بعد دزد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [10, 6],
      hops: [[10, 9], [3, 6]],
      name: { en: 'The Ink Thief', es: 'El Ladrón de Tinta', fa: 'دزد رنگ' },
      taunt: { en: 'Hee hee! Why count a little village? I tore the census sheet into 3 pieces. Follow my riddles!', es: '¡Ji ji! ¿Para qué contar un pueblito? Rompí la hoja del censo en 3 pedazos. ¡Sigue mis acertijos!', fa: 'هی هی! چرا یک قریهٔ کوچک را بشماری؟ ورق سرشماری را سه تکه کردم. چیستان‌هایم را دنبال کن!' },
      clues: [
        { t: { en: 'Piece 1 is where I wanted no [[census|census]]: the small village with the clinic, far from the hospital.', es: 'El pedazo 1 está donde yo no quería [[census|censo]]: el pueblo pequeño con la clínica, lejos del hospital.', fa: 'تکهٔ ۱ جایی است که نمی‌خواستم [[census|سرشماری]] شود: قریهٔ کوچک با کلینیک، دور از شفاخانه.' },
          zones: [{ x: 16, y: 1, w: 15, h: 8 }],
          noBy: [{ x: 17, y: 12, w: 8, h: 7, t: { en: 'These are rice paddies. Few people live in the fields. The village homes and the clinic are to the north.', es: 'Estos son arrozales. Poca gente vive en los campos. Las casas del pueblo y la clínica están al norte.', fa: 'این‌ها کشتزارهای برنج است. مردم کمی در کشتزارها زندگی می‌کنند. خانه‌های قریه و کلینیک در شمال است.' } },
            { x: 1, y: 1, w: 14, h: 10, t: { en: 'This is the big city. It is already counted, and its hospital is close. The thief wanted to leave out the small village.', es: 'Esta es la ciudad grande. Ya está contada, y su hospital está cerca. El ladrón quería dejar fuera al pueblo pequeño.', fa: 'این شهر بزرگ است. قبلاً شمرده شده و شفاخانه‌اش نزدیک است. دزد می‌خواست قریهٔ کوچک بیرون بماند.' } }],
          found: { en: 'Piece 1! A village not counted gets too few teachers, clinics and clean water.', es: '¡Pedazo 1! Un pueblo que no se cuenta recibe muy pocos maestros, clínicas y agua limpia.', fa: 'تکهٔ ۱! قریه‌ای که شمرده نشود معلم، کلینیک و آب پاک کافی نمی‌گیرد.' } },
        { t: { en: 'Piece 2: young people left villages for jobs. Go where [[population|population]] grows fast: the crowded city lanes.', es: 'Pedazo 2: los jóvenes dejaron los pueblos para buscar trabajo. Ve adonde la [[population|población]] crece rápido: las calles llenas de la ciudad.', fa: 'تکهٔ ۲: جوانان برای کار قریه‌ها را ترک کردند. جایی برو که [[population|نفوس]] زود زیاد می‌شود: کوچه‌های پرجمعیت شهر.' },
          zones: [{ x: 1, y: 11, w: 15, h: 10 }],
          noBy: [{ x: 1, y: 1, w: 14, h: 10, t: { en: 'These tall towers are offices, not homes. The families live in the crowded old lanes to the south.', es: 'Estas torres altas son oficinas, no casas. Las familias viven en las calles viejas y llenas, al sur.', fa: 'این تعمیرهای بلند دفتر هستند، نه خانه. فامیل‌ها در کوچه‌های کهنه و پرجمعیت جنوب زندگی می‌کنند.' } },
            { x: 17, y: 12, w: 8, h: 7, t: { en: 'The young people left these fields. Fewer people work here now. The city is where they went.', es: 'Los jóvenes dejaron estos campos. Ahora menos gente trabaja aquí. Se fueron a la ciudad.', fa: 'جوانان این کشتزارها را ترک کردند. حالا مردم کمتری این جا کار می‌کنند. آن‌ها به شهر رفتند.' } }],
          found: { en: 'Piece 2! As young people move in, the city needs more homes, buses, water, schools.', es: '¡Pedazo 2! Cuando llegan los jóvenes, la ciudad necesita más casas, autobuses, agua y escuelas.', fa: 'تکهٔ ۲! وقتی جوانان می‌آیند، شهر به خانه، بس، آب و مکتب بیشتر ضرورت دارد.' } },
        { t: { en: 'Piece 3 is by the rich offices that pull the [[average|average]] income up. Find the tall towers.', es: 'El pedazo 3 está junto a las oficinas ricas que suben el ingreso [[average|promedio]]. Busca las torres altas.', fa: 'تکهٔ ۳ کنار دفترهای پولدار است که عاید [[average|اوسط]] را بالا می‌برند. تعمیرهای بلند را پیدا کن.' },
          zones: [{ x: 1, y: 1, w: 14, h: 10 }],
          noBy: [{ x: 1, y: 11, w: 15, h: 10, t: { en: 'Most families in these lanes earn much less than the average. They do not pull it up.', es: 'La mayoría de las familias de estas calles gana mucho menos que el promedio. Ellas no lo suben.', fa: 'بیشتر فامیل‌های این کوچه‌ها خیلی کمتر از اوسط پول می‌گیرند. آن‌ها اوسط را بالا نمی‌برند.' } }],
          found: { en: 'Piece 3! A few huge incomes lift the average and hide the poor lanes.', es: '¡Pedazo 3! Unos pocos sueldos enormes suben el promedio y esconden las calles pobres.', fa: 'تکهٔ ۳! چند عاید بسیار بزرگ اوسط را بالا می‌برند و کوچه‌های فقیر را پنهان می‌کنند.' } }
      ],
      win: { en: 'Got you! The thief drops the 3 pieces and runs off. The census sheet is whole again!', es: '¡Te atrapé! El ladrón suelta los 3 pedazos y huye. ¡La hoja del censo está completa otra vez!', fa: 'گرفتمت! دزد سه تکه را می‌اندازد و فرار می‌کند. ورق سرشماری دوباره کامل است!' },
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
        choices: [{ en: 'How long a newborn can expect to live, on average', es: 'Cuánto puede esperar vivir, en promedio, un recién nacido', fa: 'یک نوزاد به طور اوسط چند سال زندگی می‌کند' }, { en: 'The share of adults who can read and write', es: 'La parte de los adultos que saben leer y escribir', fa: 'حصهٔ بزرگسالانی که خواندن و نوشتن می‌دانند' }, { en: 'The number of babies born in a country each year', es: 'El número de bebés que nacen en un país cada año', fa: 'تعداد نوزادانی که هر سال در یک کشور به دنیا می‌آیند' }, { en: 'The total money a country earns in a year', es: 'Todo el dinero que gana un país en un año', fa: 'همهٔ پولی که یک کشور در یک سال به دست می‌آورد' }], answer: 0,
        why: { en: 'Life expectancy is an average number of years for a whole group.', es: 'La esperanza de vida es un número promedio de años para todo un grupo.', fa: 'اوسط عمر یک عدد اوسط از سال‌ها برای تمام یک گروه است.' } },
      { q: { en: 'A country\'s population pyramid has a very wide bottom. What will it most likely need soon?', es: 'La pirámide de población de un país tiene una base muy ancha. ¿Qué necesitará pronto, lo más probable?', fa: 'هرم نفوس یک کشور پایین بسیار پهن دارد. به احتمال زیاد به زودی به چه ضرورت دارد؟' },
        choices: [{ en: 'Many new schools', es: 'Muchas escuelas nuevas', fa: 'مکتب‌های نو زیاد' }, { en: 'More nurses for older patients', es: 'Más enfermeras para pacientes mayores', fa: 'نرس‌های بیشتر برای مریضان کلان‌سال' }, { en: 'Fewer farms and less food', es: 'Menos granjas y menos comida', fa: 'زمین زراعتی کمتر و غذای کمتر' }, { en: 'A smaller army', es: 'Un ejército más pequeño', fa: 'یک اردوی کوچک‌تر' }], answer: 0,
        why: { en: 'A wide bottom means many children, and children need schools.', es: 'Una base ancha significa muchos niños, y los niños necesitan escuelas.', fa: 'پایین پهن یعنی اطفال زیاد، و اطفال به مکتب ضرورت دارند.' } },
      { q: { en: 'What is per capita GDP?', es: '¿Qué es el PIB per cápita?', fa: 'تولید سرانه (GDP سرانه) چیست؟' },
        choices: [{ en: 'All a country makes in a year, split by its people', es: 'Todo lo que un país produce en un año, dividido entre su gente', fa: 'همهٔ تولید یک کشور در یک سال، تقسیم بر مردمش' }, { en: 'The share of adults in a country who can read and write', es: 'La parte de los adultos de un país que saben leer y escribir', fa: 'حصهٔ بزرگسالان یک کشور که خواندن و نوشتن می‌دانند' }, { en: 'The number of years children spend in school', es: 'El número de años que los niños pasan en la escuela', fa: 'تعداد سال‌هایی که اطفال در مکتب می‌گذرانند' }, { en: 'The average number of years people live', es: 'El número promedio de años que vive la gente', fa: 'تعداد اوسط سال‌هایی که مردم زندگی می‌کنند' }], answer: 0,
        why: { en: 'Per capita means "for each person." It is the country\'s output split evenly by its people.', es: 'Per cápita significa "por cada persona". Es lo que produce el país repartido en partes iguales entre su gente.', fa: 'سرانه یعنی «برای هر نفر». تولید کشور است که برابر میان مردمش تقسیم شده.' } },
      { q: { en: 'Nine workers earn $20,000 a year and one earns $800,000. The average is $98,000. What does this show?', es: 'Nueve trabajadores ganan $20,000 al año y uno gana $800,000. El promedio es $98,000. ¿Qué muestra esto?', fa: 'نُه کارگر سالانه ۲۰٬۰۰۰ دالر و یک نفر ۸۰۰٬۰۰۰ دالر می‌گیرند. اوسط ۹۸٬۰۰۰ دالر است. این چه چیزی را نشان می‌دهد؟' },
        choices: [{ en: 'One huge wage pulls the average above most workers', es: 'Un sueldo enorme sube el promedio por encima de la mayoría', fa: 'یک معاش بسیار بزرگ اوسط را بالاتر از بیشتر کارگران می‌برد' }, { en: 'Averages are always wrong and should never be used', es: 'Los promedios siempre están mal y nunca se deben usar', fa: 'اوسط همیشه غلط است و هرگز نباید استفاده شود' }, { en: 'Every worker in that room earns about the same amount', es: 'Cada trabajador de ese cuarto gana más o menos la misma cantidad', fa: 'هر کارگر در آن اتاق تقریباً یک اندازه پول می‌گیرد' }, { en: 'Adding numbers is harder than dividing them', es: 'Sumar números es más difícil que dividirlos', fa: 'جمع کردن عددها از تقسیم سخت‌تر است' }], answer: 0,
        why: { en: 'The one big wage pulls the average up. Nine of the ten earn far less than $98,000.', es: 'El sueldo enorme sube el promedio. Nueve de los diez ganan mucho menos de $98,000.', fa: 'یک معاش بزرگ اوسط را بالا می‌برد. نُه نفر از ده نفر خیلی کمتر از ۹۸٬۰۰۰ دالر می‌گیرند.' } },
      { q: { en: 'A country has a high per capita GDP because it sells a lot of oil. What does that number prove about its schools?', es: 'Un país tiene un PIB per cápita alto porque vende mucho petróleo. ¿Qué prueba ese número sobre sus escuelas?', fa: 'یک کشور تولید سرانهٔ بلند دارد چون نفت زیاد می‌فروشد. این عدد دربارهٔ مکتب‌هایش چه چیزی را ثابت می‌کند؟' },
        choices: [{ en: 'Nothing. One number cannot tell you about schools.', es: 'Nada. Un solo número no habla de las escuelas.', fa: 'هیچ چیز. یک عدد تنها دربارهٔ مکتب‌ها چیزی نمی‌گوید.' }, { en: 'It proves that the schools there must be strong.', es: 'Prueba que las escuelas de ahí deben ser buenas.', fa: 'ثابت می‌کند که مکتب‌های آن‌جا حتماً قوی هستند.' }, { en: 'It proves that the schools there must be weak.', es: 'Prueba que las escuelas de ahí deben ser malas.', fa: 'ثابت می‌کند که مکتب‌های آن‌جا حتماً ضعیف هستند.' }, { en: 'It proves that the schools there are just average.', es: 'Prueba que las escuelas de ahí son solo regulares.', fa: 'ثابت می‌کند که مکتب‌های آن‌جا فقط متوسط هستند.' }], answer: 0,
        why: { en: 'Geographers read several numbers together, like literacy rate and life expectancy, before they judge.', es: 'Los geógrafos leen varios números juntos, como la alfabetización y la esperanza de vida, antes de juzgar.', fa: 'جغرافیه‌دان‌ها پیش از قضاوت چند عدد را با هم می‌خوانند، مثل سواد و اوسط عمر.' } },
      { q: { en: 'Which three things does the Human Development Index (HDI) put together?', es: '¿Qué tres cosas junta el Índice de Desarrollo Humano (IDH)?', fa: 'شاخص انکشاف بشری کدام سه چیز را با هم یکجا می‌کند؟' },
        choices: [{ en: 'Life expectancy, education and income', es: 'Esperanza de vida, educación e ingreso', fa: 'اوسط عمر، تعلیم و عاید' }, { en: 'Rainfall, summer heat and wind speed', es: 'Lluvia, calor del verano y velocidad del viento', fa: 'باران، گرمی تابستان و سرعت باد' }, { en: 'Big cities, paved roads and sea ports', es: 'Ciudades grandes, calles pavimentadas y puertos', fa: 'شهرهای بزرگ، سرک‌های پخته و بندرها' }, { en: 'Army size, police and the courts', es: 'Tamaño del ejército, policía y tribunales', fa: 'اندازهٔ اردو، پولیس و محکمه‌ها' }], answer: 0,
        why: { en: 'The HDI mixes how long people live, how long they go to school and how much they earn.', es: 'El IDH mezcla cuánto vive la gente, cuánto tiempo va a la escuela y cuánto gana.', fa: 'این شاخص یکجا می‌کند که مردم چند سال زندگی می‌کنند، چند سال مکتب می‌روند و چقدر عاید دارند.' } },
      { q: { en: 'Two countries have the same HDI score. Why can daily life still feel very different in them?', es: 'Dos países tienen el mismo IDH. ¿Por qué la vida diaria puede sentirse muy diferente en ellos?', fa: 'دو کشور یک نمرهٔ شاخص انکشاف بشری دارند. چرا زندگی روزمره در آن‌ها هنوز می‌تواند خیلی فرق کند؟' },
        choices: [{ en: 'The score leaves out safety, clean air and free time', es: 'El índice no cuenta la seguridad, el aire limpio ni el tiempo libre', fa: 'این نمره امنیت، هوای پاک و وقت آزاد را حساب نمی‌کند' }, { en: 'HDI scores are just picked at random every single year', es: 'Los puntajes del IDH se eligen al azar cada año, sin más', fa: 'نمره‌ها هر سال فقط تصادفی انتخاب می‌شوند' }, { en: 'The HDI counts only income and nothing else', es: 'El IDH solo cuenta el ingreso y nada más', fa: 'این شاخص فقط عاید را حساب می‌کند و دیگر هیچ' }, { en: 'One of the countries must have many more people', es: 'Uno de los países debe tener mucha más gente', fa: 'یکی از کشورها حتماً مردم خیلی بیشتر دارد' }], answer: 0,
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
