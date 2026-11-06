/* TIMEWALKER · Episode 5.1 · The Industrial Revolution (WHII)
   Manchester, England, in 1840: "Cottonopolis", the first great factory city.
   North-west: two cotton mills (X) and the engine house (J). North-east: workers' row houses, the mill owner's
   big house, a Sunday school and the street pump (O). Row 13: a canal (~) with two bridges (B); the coal wharf
   (k) is on its north bank. South-east: Liverpool Road railway station (J). Row 18: the railway to Liverpool,
   with farm fields beyond it (people left farms like these to work in the mills). */
window.EPISODE = {
  id: '5.1',
  realm: 5,
  sol: 'WHII',
  title: { en: 'The Industrial Revolution', es: 'La Revolución Industrial', fa: 'انقلاب صنعتی' },
  place: { en: 'Manchester, 1840', es: 'Mánchester, 1840', fa: 'منچستر، ۱۸۴۰' },
  weather: { sky: 'drizzle', time: 'day' },
  intro: [
    { en: 'The Grump blurred the [[industrial revolution|Industrial Revolution]] page. People forgot how machines changed work.',
      es: 'El Gruñón borró la página de la [[industrial revolution|Revolución Industrial]]. La gente olvidó cómo las máquinas cambiaron el trabajo.',
      fa: 'غرغرو صفحهٔ [[industrial revolution|انقلاب صنعتی]] را تار کرد. مردم فراموش کردند ماشین‌ها کار را چطور تغییر دادند.' },
    { en: 'Talk to the 3 people here, then fix the time stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del tiempo.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ زمان را درست کن.' }
  ],
  /* cut scenes: Manchester on the world map, 1840 on the timeline */
  scenes: {
    at: [-2.2, 53.5],
    year: 1840,
    start: [
      { en: 'Around 1750, people in Britain began to make goods with machines.',
        es: 'Hacia 1750, la gente de Gran Bretaña empezó a fabricar cosas con máquinas.',
        fa: 'در حدود سال ۱۷۵۰، مردم بریتانیا شروع کردند اجناس را با ماشین بسازند.' },
      { en: 'Steam engines burned coal and ran huge cloth factories, called mills.',
        es: 'Las máquinas de vapor quemaban carbón y movían enormes fábricas de tela.',
        fa: 'ماشین‌های بخار ذغال سنگ می‌سوختاندند و فابریکه‌های بزرگ تکه را می‌چرخاندند.' },
      { en: 'Manchester had so many cotton mills that people called it Cottonopolis.',
        es: 'Mánchester tenía tantas fábricas de algodón que la llamaban Cottonópolis.',
        fa: 'منچستر آن‌قدر فابریکهٔ پخته داشت که مردم آن را «شهر پخته» می‌گفتند.' }
    ],
    page: { en: 'Britain was first. Soon Belgium, Germany, the United States and Japan built factories too.',
      es: 'Gran Bretaña fue la primera. Pronto Bélgica, Alemania, Estados Unidos y Japón también hicieron fábricas.',
      fa: 'بریتانیا اول بود. زود بلجیم، آلمان، امریکا و جاپان هم فابریکه ساختند.' },
    guess: {
      q: { en: 'Before the mills, where did most people make cloth?', es: 'Antes de las fábricas, ¿dónde hacía tela la mayoría de la gente?', fa: 'پیش از فابریکه‌ها، بیشتر مردم تکه را در کجا می‌ساختند؟' },
      choices: [
        { t: { en: '🏠 At home, by hand', es: '🏠 En casa, a mano', fa: '🏠 در خانه، با دست' }, ok: true },
        { t: { en: '🏭 In giant factories', es: '🏭 En fábricas gigantes', fa: '🏭 در فابریکه‌های بزرگ' } }
      ],
      why: { en: 'Families spun and wove at home. Mill machines made cloth much faster.', es: 'Las familias hilaban y tejían en casa. Las máquinas de las fábricas hacían tela mucho más rápido.', fa: 'خانواده‌ها در خانه نخ می‌ریسیدند و تکه می‌بافتند. ماشین‌های فابریکه خیلی تیزتر تکه ساختند.' }
    },
    next: {
      q: { en: 'Next: nationalism. Before 1871, was Germany one country?', es: 'Ahora: el nacionalismo. Antes de 1871, ¿Alemania era un solo país?', fa: 'بعدی: ملی‌گرایی. پیش از ۱۸۷۱، آیا آلمان یک کشور بود؟' },
      choices: [
        { t: { en: 'No, many small states', es: 'No, muchos estados pequeños', fa: 'نه، چندین ایالت کوچک' }, ok: true },
        { t: { en: 'Yes, one country', es: 'Sí, un solo país', fa: 'بله، یک کشور' } }
      ],
      why: { en: 'Germans lived in dozens of separate states. In 1871 they joined into one empire.', es: 'Los alemanes vivían en decenas de estados separados. En 1871 se unieron en un imperio.', fa: 'آلمانی‌ها در ده‌ها ایالت جدا زندگی می‌کردند. در ۱۸۷۱ یک امپراتوری شدند.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [18, 2], name: { en: 'Mrs. Brennan', es: 'Señora Brennan', fa: 'خانم برنن' },
      look: { skin: 0, hair: '#8a3a1a', shirt: '#4a6a3a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'We came from Ireland. Many Irish families moved here for mill work.', es: 'Venimos de Irlanda. Muchas familias irlandesas vinieron aquí a trabajar en las fábricas.', fa: 'ما از آیرلند آمدیم. خانواده‌های زیاد آیرلندی برای کار فابریکه اینجا آمدند.' },
        { en: 'Ten of us share two small rooms. The whole street shares one water pump.', es: 'Diez personas compartimos dos cuartos pequeños. Toda la calle comparte una bomba de agua.', fa: 'ده نفر در دو اتاق کوچک زندگی می‌کنیم. تمام کوچه یک نل آب دارد.' }
      ] },
    { at: [22, 2], name: { en: 'Grandpa Joseph', es: 'Abuelo Joseph', fa: 'پدرکلان جوزف' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#7a6a50', pants: '#3a3020', style: 'short' },
      lines: [
        { en: 'I am a handloom weaver. I wove cloth at home for thirty years.', es: 'Soy tejedor de telar manual. Tejí tela en casa durante treinta años.', fa: 'من بافندهٔ دستی هستم. سی سال در خانه تکه بافتم.' },
        { en: 'Now power looms in the mills weave much faster. My pay keeps falling.', es: 'Ahora los telares mecánicos de las fábricas tejen mucho más rápido. Mi pago sigue bajando.', fa: 'حالا ماشین‌های بافندگی فابریکه خیلی تیزتر می‌بافند. مزد من کم و کمتر می‌شود.' }
      ] },
    { at: [28, 2], name: { en: 'Mr. Pratt', es: 'Señor Pratt', fa: 'آقای پرت' },
      look: { skin: 1, hair: '#5a4030', shirt: '#2a2a3a', pants: '#1a1a24', hat: '#1a1a1a' },
      lines: [
        { en: 'I own two mills. Our cloth sells all over the world, even in India.', es: 'Soy dueño de dos fábricas. Nuestra tela se vende en todo el mundo, hasta en la India.', fa: 'من مالک دو فابریکه هستم. تکهٔ ما در همهٔ جهان فروخته می‌شود، حتی در هند.' },
        { en: 'I say long hours keep prices low. My workers say the hours are too long.', es: 'Yo digo que las jornadas largas bajan los precios. Mis obreros dicen que son demasiado largas.', fa: 'من می‌گویم ساعت‌های دراز قیمت را پایین نگه می‌دارد. کارگرانم می‌گویند ساعت‌ها بسیار دراز است.' }
      ] },
    { at: [20, 7], name: { en: 'Miss Ada', es: 'Señorita Ada', fa: 'خانم آدا' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'This is a Sunday school. On Sundays, mill children come here to learn reading.', es: 'Esta es una escuela dominical. Los domingos, los niños de las fábricas vienen a aprender a leer.', fa: 'این مکتب روز یکشنبه است. روزهای یکشنبه اطفال فابریکه برای یاد گرفتن خواندن می‌آیند.' },
        { en: 'A new law says young mill children must also have school every day.', es: 'Una ley nueva dice que los niños pequeños de las fábricas también deben ir a la escuela cada día.', fa: 'یک قانون نو می‌گوید اطفال خوردسال فابریکه باید هر روز مکتب هم بروند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     NW: the mills (X), the mill yard and the engine house (J). NE: row houses (R over h), the owner's house (Q over h),
     the Sunday school and the pump (O). Row 13: the canal (~) with bridges (B) at x 15 and x 24; the wharf (k) above it.
     SW: market stalls (m). SE: the railway station (J). Row 18: the railway; wheat fields (w) beyond it. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'W.XXXXX..XXXXX.l.RRRRRRR..QQQQQW',
    'W.XXXXX..XXXXX.l.hdhhhdh..hhdhhW',
    'W.XXXXX..XXXXX.l...............W',
    'W..............llllllllllllllllW',
    'W.x............l..........O....W',
    'W.JJ...........l...RRRR........W',
    'W.JJ...........l...hdhh........W',
    'W..............l...............W',
    'W::::::::::::::l:::::::::::::::W',
    'W..............l...............W',
    'W.x............l...............W',
    'W..kkkkkkkk....l...............W',
    'W~~~~~~~~~~~~~~B~~~~~~~~B~~~~~~W',
    'W..............l..x.....:......W',
    'W.mmm..mmm.....l..JJJJJ...TT...W',
    'W..............l..JJJJJ...TT...W',
    'W..............l...............W',
    'W------------------------------W',
    'W.www..www.......,....www..www.W',
    'W.www..www..,.........www..www.W',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [17, 17],

  /* finds: a clue note on the map leads to a hidden spot */
  finds: [
    { clueAt: [12, 14], at: [12, 19], decor: 'fossil',
      clue: { en: 'From this note, walk 5 steps south. Cross the railway and stop.', es: 'Desde esta nota, camina 5 pasos al sur. Cruza el ferrocarril y para.', fa: 'از این یادداشت، ۵ قدم به جنوب برو. از خط آهن بگذر و بایست.' },
      text: { en: 'Coal formed from plants that died millions of years ago. Here is a leaf fossil in coal.', es: 'El carbón se formó de plantas que murieron hace millones de años. Aquí hay un fósil de hoja en carbón.', fa: 'ذغال سنگ از نبات‌هایی ساخته شد که میلیون‌ها سال پیش مردند. اینجا فسیل یک برگ در ذغال است.' } },
    { clueAt: [29, 3], at: [26, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps west, then 1 step south. Look by the water pump.', es: 'Desde esta nota, camina 3 pasos al oeste y luego 1 paso al sur. Busca junto a la bomba de agua.', fa: 'از این یادداشت، ۳ قدم به غرب و بعد ۱ قدم به جنوب برو. کنار نل آب را ببین.' },
      text: { en: 'Mill children earned only a few shillings a week. Here is an old British penny.', es: 'Los niños de las fábricas ganaban solo unos chelines por semana. Aquí hay un penique británico antiguo.', fa: 'اطفال فابریکه در هفته فقط چند شیلینگ مزد می‌گرفتند. اینجا یک پنی کهنهٔ بریتانیایی است.' } }
  ],

  words: {
    'industrial revolution': { en: 'the big change, starting around 1750, from making goods by hand to making them with machines', es: 'el gran cambio, desde 1750 más o menos, de hacer cosas a mano a hacerlas con máquinas', fa: 'تغییر بزرگ، از حدود سال ۱۷۵۰، از ساختن اجناس با دست به ساختن آن‌ها با ماشین' },
    mill: { en: 'a big factory with machines, here for spinning cotton thread and weaving cloth', es: 'una fábrica grande con máquinas; aquí, para hilar algodón y tejer tela', fa: 'یک فابریکهٔ بزرگ با ماشین‌ها؛ اینجا برای ریسیدن نخ پخته و بافتن تکه' },
    'steam engine': { en: 'a machine that burns coal to boil water; the steam pushes parts that turn other machines', es: 'una máquina que quema carbón para hervir agua; el vapor mueve piezas que hacen girar otras máquinas', fa: 'ماشینی که ذغال می‌سوزاند تا آب را بجوشاند؛ بخار پرزه‌هایی را حرکت می‌دهد که ماشین‌های دیگر را می‌چرخاند' },
    urbanization: { en: 'people moving from farms and villages into cities', es: 'gente que se muda del campo y de los pueblos a las ciudades', fa: 'کوچ مردم از قریه‌ها و زمین‌های زراعتی به شهرها' },
    'raw material': { en: 'something from nature, like cotton or coal, that factories use to make goods', es: 'algo de la naturaleza, como algodón o carbón, que las fábricas usan para hacer productos', fa: 'چیزی از طبیعت، مثل پخته یا ذغال، که فابریکه‌ها برای ساختن اجناس به کار می‌برند' },
    'child labor': { en: 'children doing hard, long jobs for pay, often instead of going to school', es: 'niños que hacen trabajos duros y largos por pago, muchas veces en vez de ir a la escuela', fa: 'کار سخت و دراز اطفال برای مزد، اکثراً به جای رفتن به مکتب' },
    union: { en: 'a group of workers who join together to ask for fair pay and safer work', es: 'un grupo de trabajadores que se unen para pedir pago justo y trabajo más seguro', fa: 'گروهی از کارگران که با هم یکجا می‌شوند تا مزد عادلانه و کار امن‌تر بخواهند' },
    chartists: { en: 'British workers, around 1840, who asked for the right to vote for all men', es: 'trabajadores británicos, hacia 1840, que pedían el derecho al voto para todos los hombres', fa: 'کارگران بریتانیایی، در حدود ۱۸۴۰، که حق رأی را برای همهٔ مردان می‌خواستند' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 4, y: 7,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Engine man', es: 'Maquinista', fa: 'ماشین‌چی' },
      look: { skin: 1, hair: '#2a1a10', shirt: '#5a5a5a', pants: '#2a2a2a', hat: '#3a3a3a' },
      lines: [
        { en: 'I run the mill\'s [[steam engine|steam engine]]. It burns coal all day long.', es: 'Yo manejo la [[steam engine|máquina de vapor]] de la fábrica. Quema carbón todo el día.', fa: 'من [[steam engine|ماشین بخار]] فابریکه را می‌چلانم. تمام روز ذغال سنگ می‌سوزاند.' },
        { en: 'James Watt made steam engines much better, about seventy years ago.', es: 'James Watt mejoró mucho las máquinas de vapor, hace unos setenta años.', fa: 'جیمز وات حدود هفتاد سال پیش ماشین‌های بخار را خیلی بهتر ساخت.' },
        { en: 'Now one engine turns hundreds of spinning machines at once.', es: 'Ahora una sola máquina mueve cientos de máquinas de hilar a la vez.', fa: 'حالا یک ماشین بخار صدها ماشین ریسندگی را یکجا می‌چرخاند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What powered most mills in Manchester in 1840?', es: '¿Qué movía la mayoría de las fábricas de Mánchester en 1840?', fa: 'در ۱۸۴۰ بیشتر فابریکه‌های منچستر با چه چیزی کار می‌کردند؟' },
        choices: [
          { ok: true, t: { en: 'Steam engines that burned coal', es: 'Máquinas de vapor que quemaban carbón', fa: 'ماشین‌های بخار که ذغال می‌سوزاندند' },
            why: { en: 'Yes! Burning coal made steam, and steam turned the machines.', es: '¡Sí! El carbón hacía vapor, y el vapor movía las máquinas.', fa: 'بله! سوختن ذغال بخار می‌ساخت و بخار ماشین‌ها را می‌چرخاند.' } },
          { t: { en: 'Horses walking around in circles', es: 'Caballos que caminaban en círculos', fa: 'اسپ‌هایی که دور می‌زدند' },
            why: { en: 'Horses were too weak for big mills. Steam engines were far stronger.', es: 'Los caballos eran muy débiles para fábricas grandes. Las máquinas de vapor eran mucho más fuertes.', fa: 'اسپ برای فابریکهٔ بزرگ کمزور بود. ماشین بخار خیلی قوی‌تر بود.' } },
          { t: { en: 'Electric power from the city', es: 'Electricidad de la ciudad', fa: 'برق شهر' },
            why: { en: 'Cities had no electric power yet in 1840. That came about forty years later.', es: 'En 1840 las ciudades aún no tenían electricidad. Llegó unos cuarenta años después.', fa: 'در ۱۸۴۰ شهرها هنوز برق نداشتند. برق حدود چهل سال بعد آمد.' } }
        ]
      }
    },
    {
      x: 24, y: 6,
      name: { en: 'Mary', es: 'Mary', fa: 'مری' },
      role: { en: 'Mill worker, age 14', es: 'Obrera, 14 años', fa: 'کارگر فابریکه، ۱۴ ساله' },
      look: { skin: 0, hair: '#c08040', shirt: '#8a7a6a', pants: '#4a3a3a', style: 'long' },
      lines: [
        { en: 'I am Mary. I work in a cotton [[mill|mill]]. I started when I was nine.', es: 'Soy Mary. Trabajo en una [[mill|fábrica]] de algodón. Empecé a los nueve años.', fa: 'من مری هستم. در یک [[mill|فابریکهٔ]] پخته کار می‌کنم. از نُه سالگی شروع کردم.' },
        { en: 'I am a piecer. I tie broken threads while the machines keep running.', es: 'Soy anudadora. Ato los hilos rotos mientras las máquinas siguen andando.', fa: 'من گره‌زن هستم. وقتی ماشین‌ها کار می‌کنند، تارهای کنده را گره می‌زنم.' },
        { en: 'I work twelve hours a day. The air is full of cotton dust.', es: 'Trabajo doce horas al día. El aire está lleno de polvo de algodón.', fa: 'روزی دوازده ساعت کار می‌کنم. هوا پر از گرد پخته است.' },
        { en: 'My family needs my pay. Many children work, too. This is [[child labor|child labor]].', es: 'Mi familia necesita mi pago. Muchos niños trabajan también. Esto es el [[child labor|trabajo infantil]].', fa: 'خانواده‌ام به مزد من ضرورت دارد. اطفال زیاد دیگر هم کار می‌کنند. این [[child labor|کار اطفال]] است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did mill owners hire so many children?', es: '¿Por qué los dueños de las fábricas contrataban a tantos niños?', fa: 'چرا مالکان فابریکه این‌قدر زیاد طفل را به کار می‌گرفتند؟' },
        choices: [
          { ok: true, t: { en: 'They could pay children less money', es: 'Podían pagarles menos a los niños', fa: 'به اطفال مزد کمتر می‌دادند' },
            why: { en: 'Yes. Children cost less, and small hands reached into machines. It was dangerous work.', es: 'Sí. Los niños costaban menos y sus manos pequeñas llegaban dentro de las máquinas. Era peligroso.', fa: 'بله. اطفال ارزان‌تر بودند و دست‌های کوچک‌شان به داخل ماشین می‌رسید. کار خطرناک بود.' } },
          { t: { en: 'Children liked mill work more than play', es: 'A los niños les gustaba más trabajar que jugar', fa: 'اطفال کار فابریکه را از بازی بیشتر دوست داشتند' },
            why: { en: 'Children worked because their families needed money, not because they liked it.', es: 'Los niños trabajaban porque sus familias necesitaban dinero, no porque les gustara.', fa: 'اطفال کار می‌کردند چون خانواده‌شان به پول ضرورت داشت، نه چون خوش‌شان می‌آمد.' } },
          { t: { en: 'A law said every child had to work', es: 'Una ley decía que todo niño debía trabajar', fa: 'قانون می‌گفت هر طفل باید کار کند' },
            why: { en: 'No law made children work. New laws began to limit their hours instead.', es: 'Ninguna ley obligaba a los niños a trabajar. Las leyes nuevas empezaron a limitar sus horas.', fa: 'هیچ قانونی اطفال را مجبور به کار نمی‌کرد. قانون‌های نو ساعت کارشان را کم کردند.' } }
        ]
      }
    },
    {
      x: 20, y: 17,
      name: { en: 'Hannah', es: 'Hannah', fa: 'هانا' },
      role: { en: 'Printer', es: 'Impresora', fa: 'چاپگر' },
      look: { skin: 1, hair: '#3a2416', shirt: '#2a5a7a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I print papers for the [[chartists|Chartists]]. We want every working man to vote.', es: 'Imprimo papeles para los [[chartists|cartistas]]. Queremos que todo hombre trabajador pueda votar.', fa: 'من برای [[chartists|چارتیست‌ها]] کاغذ چاپ می‌کنم. می‌خواهیم هر مرد کارگر رأی بدهد.' },
        { en: 'Today only men who own property can vote. Most workers cannot.', es: 'Hoy solo votan los hombres con propiedades. La mayoría de los obreros no puede.', fa: 'امروز فقط مردانی که ملک دارند رأی می‌دهند. بیشتر کارگران نمی‌توانند.' },
        { en: 'Workers also join a [[union|union]] to ask for fair pay and shorter hours.', es: 'Los obreros también se unen a un [[union|sindicato]] para pedir pago justo y menos horas.', fa: 'کارگران به [[union|اتحادیهٔ کارگری]] هم می‌پیوندند تا مزد عادلانه و ساعت کمتر بخواهند.' },
        { en: 'Some women ask a hard question: why not women, too?', es: 'Algunas mujeres hacen una pregunta difícil: ¿y por qué no las mujeres también?', fa: 'بعضی زنان یک سوال سخت می‌پرسند: چرا زنان نه؟' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did the Chartists want?', es: '¿Qué querían los cartistas?', fa: 'چارتیست‌ها چه می‌خواستند؟' },
        choices: [
          { ok: true, t: { en: 'The vote for all working men', es: 'El voto para todos los hombres obreros', fa: 'حق رأی برای همهٔ مردان کارگر' },
            why: { en: 'Right. They sent huge letters to Parliament, signed by millions of people.', es: 'Correcto. Mandaron cartas enormes al Parlamento, firmadas por millones de personas.', fa: 'درست. آن‌ها نامه‌های بزرگی با امضای میلیون‌ها نفر به پارلمان فرستادند.' } },
          { t: { en: 'Longer working days in the mills', es: 'Jornadas más largas en las fábricas', fa: 'روزهای کاری درازتر در فابریکه‌ها' },
            why: { en: 'Workers wanted shorter days, not longer ones.', es: 'Los obreros querían jornadas más cortas, no más largas.', fa: 'کارگران روزهای کوتاه‌تر می‌خواستند، نه درازتر.' } },
          { t: { en: 'To smash all of the machines', es: 'Romper todas las máquinas', fa: 'شکستن همهٔ ماشین‌ها' },
            why: { en: 'That was the Luddites, years earlier. The Chartists wanted the vote, a peaceful change.', es: 'Eso fueron los luditas, años antes. Los cartistas querían el voto, un cambio pacífico.', fa: 'این کار لودایت‌ها بود، سال‌ها پیش. چارتیست‌ها حق رأی می‌خواستند، یک تغییر آرام.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'MANCHESTER · 1840 · Cottonopolis. Its cotton mills dress people all over the world.', es: 'MÁNCHESTER · 1840 · Cottonópolis. Sus fábricas de algodón visten a gente de todo el mundo.', fa: 'منچستر · ۱۸۴۰ · شهر پخته. فابریکه‌های پختهٔ آن برای مردم همهٔ جهان تکه می‌سازند.' } },
    { x: 2, y: 11, text: { en: 'BRIDGEWATER CANAL · Barges bring coal to the city from the mines at Worsley.', es: 'CANAL DE BRIDGEWATER · Las barcazas traen carbón a la ciudad desde las minas de Worsley.', fa: 'کانال بریج‌واتر · کشتی‌های باری ذغال سنگ را از معدن‌های ورسلی به شهر می‌آورند.' } },
    { x: 18, y: 14, text: { en: 'LIVERPOOL ROAD STATION · Since 1830, trains run from here to the port of Liverpool.', es: 'ESTACIÓN DE LIVERPOOL ROAD · Desde 1830, los trenes van de aquí al puerto de Liverpool.', fa: 'ایستگاه لیورپول رود · از ۱۸۳۰، ریل از اینجا تا بندر لیورپول می‌رود.' } }
  ],

  /* the quest: Mr. Hughes the mill manager (NW) -> Ellen on the canal towpath (SE)
     -> Ned at the coal wharf (SW): carry him the fuel a steam engine burns -> back to Mr. Hughes */
  quest: {
    stat: 'loc',
    title: { en: 'Coal for the Engine', es: 'Carbón para la máquina', fa: 'ذغال برای ماشین' },
    giver: {
      x: 11, y: 5,
      name: { en: 'Mr. Hughes', es: 'Señor Hughes', fa: 'آقای هیوز' },
      role: { en: 'Mill manager', es: 'Gerente de la fábrica', fa: 'مدیر فابریکه' },
      look: { skin: 1, hair: '#6a5a4a', shirt: '#3a3a5a', pants: '#2a2a2a', hat: '#2a2a2a' },
      lines: [
        { en: 'Trouble! The steam engine is slowing down. Soon every machine will stop.', es: '¡Problemas! La máquina de vapor va más lenta. Pronto se pararán todas las máquinas.', fa: 'مشکل! ماشین بخار آهسته می‌شود. زود همهٔ ماشین‌ها از کار می‌مانند.' },
        { en: 'The engine needs fuel, and the barge is late.', es: 'La máquina necesita combustible, y la barcaza llega tarde.', fa: 'ماشین به سوخت ضرورت دارد و کشتی باری دیر کرده.' },
        { en: 'Ellen works on the canal boats. Find her by the east bridge.', es: 'Ellen trabaja en las barcazas del canal. Búscala junto al puente del este.', fa: 'الن در کشتی‌های کانال کار می‌کند. او را کنار پل شرقی پیدا کن.' }
      ],
      wait: { en: 'Ellen is south of the canal, by the east bridge.', es: 'Ellen está al sur del canal, junto al puente del este.', fa: 'الن جنوب کانال، کنار پل شرقی است.' },
      thanks: { en: 'Coal! Thomas can feed the engine. Steam turns every machine again. Thank you!', es: '¡Carbón! Thomas puede alimentar la máquina. El vapor mueve todo otra vez. ¡Gracias!', fa: 'ذغال! توماس به ماشین سوخت می‌دهد. بخار دوباره همه را می‌چرخاند. تشکر!' }
    },
    contact: {
      x: 27, y: 14,
      name: { en: 'Ellen', es: 'Ellen', fa: 'الن' },
      role: { en: 'Canal boat worker', es: 'Barquera del canal', fa: 'کارگر کشتی کانال' },
      look: { skin: 2, hair: '#1a1208', shirt: '#9a5a2a', pants: '#2a3a4a', hat: '#5a3a22' },
      lines: [
        { en: 'Our barge came up the canal from the coal mines at Worsley.', es: 'Nuestra barcaza subió por el canal desde las minas de carbón de Worsley.', fa: 'کشتی باری ما از معدن‌های ذغال ورسلی از راه کانال آمد.' },
        { en: 'Cross the canal and walk west to the wharf. Ask Ned, the merchant.', es: 'Cruza el canal y camina al oeste hasta el muelle. Pregúntale a Ned, el comerciante.', fa: 'از کانال بگذر و به غرب تا بندرگاه برو. از ند سوداگر بپرس.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 7, y: 11,
        name: { en: 'Ned', es: 'Ned', fa: 'ند' },
        role: { en: 'Wharf merchant', es: 'Comerciante del muelle', fa: 'سوداگر بندرگاه' },
        look: { skin: 1, hair: '#4a3a2a', shirt: '#6a3a2a', pants: '#2a2a2a', hat: '#4a4a4a' },
        lines: [
          { en: 'Goods from near and far land on my wharf, by barge and by train.', es: 'A mi muelle llegan cosas de cerca y de lejos, en barcaza y en tren.', fa: 'اجناس از نزدیک و دور با کشتی و ریل به بندرگاه من می‌رسند.' }
        ]
      },
      q: { en: 'Which good does a steam engine burn? Find it on the wharf and bring it here.', es: '¿Qué cosa quema una máquina de vapor? Búscala en el muelle y tráela aquí.', fa: 'ماشین بخار کدام جنس را می‌سوزاند؟ آن را در بندرگاه پیدا کن و اینجا بیاور.' },
      choices: [
        { ok: true, at: [4, 12], icon: '🪨', t: { en: 'A sack of coal', es: 'Un saco de carbón', fa: 'یک بوجی ذغال سنگ' },
          why: { en: 'Yes! Britain had lots of coal. Burning it boils water, and the steam turns the machines.', es: '¡Sí! Gran Bretaña tenía mucho carbón. Al quemarlo hierve el agua, y el vapor mueve las máquinas.', fa: 'بله! بریتانیا ذغال زیاد داشت. سوختن آن آب را می‌جوشاند و بخار ماشین‌ها را می‌چرخاند.' } },
        { at: [9, 12], icon: '📦', t: { en: 'A bale of raw cotton', es: 'Una paca de algodón crudo', fa: 'یک بندل پختهٔ خام' },
          why: { en: 'The mill spins cotton; it does not burn it. Most came from the US South, grown by enslaved people.', es: 'La fábrica hila el algodón; no lo quema. Casi todo venía del sur de EE. UU., cultivado por personas esclavizadas.', fa: 'فابریکه پخته را می‌ریسد، نمی‌سوزاند. بیشتر آن از جنوب امریکا می‌آمد و مردم برده آن را می‌کاشتند.' } },
        { at: [12, 16], icon: '🪵', t: { en: 'A bundle of firewood', es: 'Un atado de leña', fa: 'یک بسته هیزم' },
          why: { en: 'Britain had cut down most of its forests. Coal burns hotter and longer than wood.', es: 'Gran Bretaña había talado casi todos sus bosques. El carbón arde más caliente y más tiempo que la leña.', fa: 'بریتانیا بیشتر جنگل‌هایش را بریده بود. ذغال سنگ از هیزم گرم‌تر و درازتر می‌سوزد.' } }
      ],
      item: { icon: '🪨', name: { en: 'A sack of coal', es: 'Un saco de carbón', fa: 'یک بوجی ذغال سنگ' } }
    }
  },

  scraps: [[1, 1], [30, 3], [1, 20]],
  smudges: [[9, 16], [22, 9]],

  /* the time stone: a survey of the Factory Act of 1833. One post per row, by the mill gates */
  challenge: {
    at: [28, 17],
    type: 'survey', // in the world; the card version (table) is the fallback
    spots: [[4, 4], [7, 4], [10, 4], [13, 4]],
    stat: 'hei',
    title: { en: 'The Factory Act of 1833', es: 'La Ley de Fábricas de 1833', fa: 'قانون فابریکه‌های ۱۸۳۳' },
    intro: { en: 'The Grump smudged the new law posted at the mill gates. Read each post, then answer at the stone.',
      es: 'El Gruñón manchó la ley nueva pegada en las puertas de la fábrica. Lee cada poste y responde en la piedra.',
      fa: 'غرغرو قانون نو را که در دروازه‌های فابریکه نصب بود، خراب کرد. هر لوحه را بخوان، بعد کنار سنگ جواب بده.' },
    table: {
      head: [
        { en: 'Age', es: 'Edad', fa: 'سن' },
        { en: 'Work in a cloth mill?', es: '¿Trabajar en una fábrica de tela?', fa: 'کار در فابریکهٔ تکه؟' },
        { en: 'Most hours a day', es: 'Máximo de horas al día', fa: 'بیشترین ساعت در روز' },
        { en: 'School each day', es: 'Escuela cada día', fa: 'مکتب در هر روز' }
      ],
      rows: [
        [{ en: 'Under 9', es: 'Menos de 9', fa: 'کمتر از ۹' }, { en: 'Not allowed', es: 'Prohibido', fa: 'اجازه نیست' }, { en: 'none', es: 'ninguna', fa: 'هیچ' }, { en: 'none', es: 'ninguna', fa: 'هیچ' }],
        [{ en: '9 to 12', es: '9 a 12', fa: '۹ تا ۱۲' }, { en: 'Allowed', es: 'Permitido', fa: 'اجازه است' }, { en: '9 hours', es: '9 horas', fa: '۹ ساعت' }, { en: '2 hours', es: '2 horas', fa: '۲ ساعت' }],
        [{ en: '13 to 17', es: '13 a 17', fa: '۱۳ تا ۱۷' }, { en: 'Allowed', es: 'Permitido', fa: 'اجازه است' }, { en: '12 hours', es: '12 horas', fa: '۱۲ ساعت' }, { en: 'none', es: 'ninguna', fa: 'هیچ' }],
        [{ en: '18 and older', es: '18 o más', fa: '۱۸ و بالاتر' }, { en: 'Allowed', es: 'Permitido', fa: 'اجازه است' }, { en: 'no limit', es: 'sin límite', fa: 'بی‌حد' }, { en: 'none', es: 'ninguna', fa: 'هیچ' }]
      ],
      note: { en: 'Britain, 1833. Before this law, many children worked 12 to 16 hours a day. Only 4 inspectors checked every mill.',
        es: 'Gran Bretaña, 1833. Antes de esta ley, muchos niños trabajaban de 12 a 16 horas al día. Solo 4 inspectores revisaban todas las fábricas.',
        fa: 'بریتانیا، ۱۸۳۳. پیش از این قانون، اطفال زیاد روزی ۱۲ تا ۱۶ ساعت کار می‌کردند. فقط ۴ مفتش همهٔ فابریکه‌ها را می‌دیدند.' }
    },
    questions: [
      { q: { en: 'A boy is 10 years old. How long may he work each day?', es: 'Un niño tiene 10 años. ¿Cuánto puede trabajar cada día?', fa: 'یک پسر ۱۰ ساله است. هر روز چقدر می‌تواند کار کند؟' },
        choices: [{ en: '9 hours', es: '9 horas', fa: '۹ ساعت' }, { en: '12 hours', es: '12 horas', fa: '۱۲ ساعت' }, { en: 'no limit', es: 'sin límite', fa: 'بی‌حد' }, { en: '2 hours', es: '2 horas', fa: '۲ ساعت' }], answer: 0,
        why: { en: 'Ten is in the row "9 to 12". That row says 9 hours, plus 2 hours of school.', es: 'Diez está en la fila "9 a 12". Esa fila dice 9 horas, más 2 horas de escuela.', fa: 'ده در ردیف «۹ تا ۱۲» است. آن ردیف ۹ ساعت کار و ۲ ساعت مکتب می‌گوید.' } },
      { q: { en: 'Who could not work in a cloth mill at all?', es: '¿Quién no podía trabajar en una fábrica de tela?', fa: 'چه کسی اصلاً نمی‌توانست در فابریکهٔ تکه کار کند؟' },
        choices: [{ en: 'Children under 9', es: 'Los niños menores de 9', fa: 'اطفال کمتر از ۹ سال' }, { en: 'Teens from 13 to 17', es: 'Los jóvenes de 13 a 17', fa: 'نوجوانان ۱۳ تا ۱۷ ساله' }, { en: 'Adults 18 and older', es: 'Los adultos de 18 o más', fa: 'بزرگسالان ۱۸ و بالاتر' }, { en: 'Children from 9 to 12', es: 'Los niños de 9 a 12', fa: 'اطفال ۹ تا ۱۲ ساله' }], answer: 0,
        why: { en: 'The first row says "Not allowed" for children under 9.', es: 'La primera fila dice "Prohibido" para los niños menores de 9.', fa: 'ردیف اول برای اطفال کمتر از ۹ سال «اجازه نیست» می‌گوید.' } },
      { q: { en: 'Which group had no limit on its hours?', es: '¿Qué grupo no tenía límite de horas?', fa: 'کدام گروه برای ساعت کار حد نداشت؟' },
        choices: [{ en: 'Adults 18 and older', es: 'Los adultos de 18 o más', fa: 'بزرگسالان ۱۸ و بالاتر' }, { en: 'Teens from 13 to 17', es: 'Los jóvenes de 13 a 17', fa: 'نوجوانان ۱۳ تا ۱۷ ساله' }, { en: 'Children from 9 to 12', es: 'Los niños de 9 a 12', fa: 'اطفال ۹ تا ۱۲ ساله' }, { en: 'Children under 9', es: 'Los niños menores de 9', fa: 'اطفال کمتر از ۹ سال' }], answer: 0,
        why: { en: 'The last row says "no limit". Adults often worked 12 hours or more.', es: 'La última fila dice "sin límite". Los adultos muchas veces trabajaban 12 horas o más.', fa: 'ردیف آخر «بی‌حد» می‌گوید. بزرگسالان اکثراً ۱۲ ساعت یا بیشتر کار می‌کردند.' } },
      { q: { en: 'Why did Parliament pass this law?', es: '¿Por qué el Parlamento aprobó esta ley?', fa: 'چرا پارلمان این قانون را تصویب کرد؟' },
        choices: [{ en: 'People said long hours hurt children', es: 'La gente decía que las jornadas largas dañaban a los niños', fa: 'مردم گفتند ساعت‌های دراز به اطفال ضرر می‌زند' }, { en: 'Mill owners wanted more young workers', es: 'Los dueños querían más obreros jóvenes', fa: 'مالکان فابریکه کارگران جوان بیشتر می‌خواستند' }, { en: 'Children asked to work even longer', es: 'Los niños pidieron trabajar aún más', fa: 'اطفال خواستند بیشتر کار کنند' }, { en: 'The mills had no more work to do', es: 'Las fábricas ya no tenían trabajo', fa: 'فابریکه‌ها دیگر کاری نداشتند' }], answer: 0,
        why: { en: 'Workers, doctors and reformers spoke out. They said long days hurt children\'s health and learning.', es: 'Obreros, médicos y reformistas alzaron la voz. Dijeron que los días largos dañaban la salud y el estudio de los niños.', fa: 'کارگران، داکتران و اصلاح‌گران صدا بلند کردند. گفتند روزهای دراز به صحت و درس اطفال ضرر می‌زند.' } }
    ],
    success: { en: 'The law is clear again! Slowly, new laws made factory work safer for children.', es: '¡La ley se lee otra vez! Poco a poco, leyes nuevas hicieron el trabajo más seguro para los niños.', fa: 'قانون دوباره روشن شد! آهسته آهسته، قانون‌های نو کار فابریکه را برای اطفال امن‌تر ساختند.' }
  },

  boss: {
    at: [28, 8],
    stat: 'loc',
    need: 3,
    name: { en: 'The Soot Grump', es: 'El Gruñón del Hollín', fa: 'غرغروی دوده' },
    appear: { en: 'The Soot Grump is hiding in the smoke over the row houses!', es: '¡El Gruñón del Hollín se esconde en el humo sobre las casas obreras!', fa: 'غرغروی دوده در دود بالای خانه‌های کارگران پنهان است!' },
    taunt: { en: 'Cough! I covered this city in soot. Who remembers how it all began?', es: '¡Cof! Cubrí esta ciudad de hollín. ¿Quién recuerda cómo empezó todo?', fa: 'اوهو! این شهر را با دوده پوشاندم. کی یادش است همه چیز چطور شروع شد؟' },
    win: { en: 'The smoke clears. Chronicle page 5.1 floats down into your hands!', es: 'El humo se va. ¡La página 5.1 de la crónica cae en tus manos!', fa: 'دود کنار می‌رود. صفحهٔ ۵.۱ تاریخ‌نامه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Where did the Industrial Revolution begin?', es: '¿Dónde empezó la Revolución Industrial?', fa: 'انقلاب صنعتی در کجا شروع شد؟' },
        choices: [
          { en: 'Britain', es: 'Gran Bretaña', fa: 'بریتانیا' },
          { en: 'China', es: 'China', fa: 'چین' },
          { en: 'Ethiopia', es: 'Etiopía', fa: 'ایتوپیا' },
          { en: 'Mexico', es: 'México', fa: 'مکسیکو' }],
        answer: 0,
        why: { en: 'It began in Britain around 1750. Later it spread to Europe, the United States and Japan.', es: 'Empezó en Gran Bretaña hacia 1750. Después se extendió a Europa, Estados Unidos y Japón.', fa: 'در حدود ۱۷۵۰ در بریتانیا شروع شد. بعد به اروپا، امریکا و جاپان رسید.' } },
      { q: { en: 'Why did it begin in Britain?', es: '¿Por qué empezó en Gran Bretaña?', fa: 'چرا در بریتانیا شروع شد؟' },
        choices: [
          { en: 'It had coal, iron, rivers and many ports', es: 'Tenía carbón, hierro, ríos y muchos puertos', fa: 'ذغال، آهن، دریا و بندرهای زیاد داشت' },
          { en: 'It had the most people of any country', es: 'Tenía más gente que cualquier otro país', fa: 'از هر کشور دیگر مردم بیشتر داشت' },
          { en: 'It had no farms, so all people were free', es: 'No tenía granjas, así que todos estaban libres', fa: 'زمین زراعتی نداشت، پس همه آزاد بودند' },
          { en: 'It was the warmest country in Europe', es: 'Era el país más cálido de Europa', fa: 'گرم‌ترین کشور اروپا بود' }],
        answer: 0,
        why: { en: 'Coal and iron built and ran the machines. Rivers, canals and ports moved goods.', es: 'El carbón y el hierro hacían y movían las máquinas. Ríos, canales y puertos movían las mercancías.', fa: 'ذغال و آهن ماشین‌ها را ساختند و چلاندند. دریاها، کانال‌ها و بندرها اجناس را بردند.' } },
      { q: { en: 'Which industry used factory machines first, in a big way?', es: '¿Qué industria usó primero máquinas de fábrica, en grande?', fa: 'کدام صنعت اول به طور گسترده از ماشین فابریکه کار گرفت؟' },
        choices: [
          { en: 'Making cotton cloth', es: 'Hacer tela de algodón', fa: 'ساختن تکهٔ پخته' },
          { en: 'Building wooden boats', es: 'Hacer botes de madera', fa: 'ساختن قایق چوبی' },
          { en: 'Making glass windows', es: 'Hacer ventanas de vidrio', fa: 'ساختن کلکین شیشه‌ای' },
          { en: 'Printing maps', es: 'Imprimir mapas', fa: 'چاپ نقشه' }],
        answer: 0,
        why: { en: 'Textiles came first. Spinning and weaving machines made cotton cloth fast and cheap.', es: 'Los textiles fueron primero. Las máquinas de hilar y tejer hacían tela rápida y barata.', fa: 'تکه‌بافی اول بود. ماشین‌های ریسندگی و بافندگی تکهٔ پخته را تیز و ارزان ساختند.' } },
      { q: { en: 'What did James Watt make much better?', es: '¿Qué mejoró mucho James Watt?', fa: 'جیمز وات چه چیزی را خیلی بهتر ساخت؟' },
        choices: [
          { en: 'The steam engine', es: 'La máquina de vapor', fa: 'ماشین بخار' },
          { en: 'The printing press', es: 'La imprenta', fa: 'ماشین چاپ' },
          { en: 'The sailing ship', es: 'El barco de vela', fa: 'کشتی بادبانی' },
          { en: 'The water well', es: 'El pozo de agua', fa: 'چاه آب' }],
        answer: 0,
        why: { en: 'Watt\'s engine used much less coal. Steam then powered mills, trains and ships.', es: 'La máquina de Watt usaba mucho menos carbón. Luego el vapor movió fábricas, trenes y barcos.', fa: 'ماشین وات ذغال خیلی کمتر مصرف می‌کرد. بعد بخار فابریکه، ریل و کشتی را چلاند.' } },
      { q: { en: 'What is urbanization?', es: '¿Qué es la urbanización?', fa: 'شهرنشینی چیست؟' },
        choices: [
          { en: 'People moving from farms into cities', es: 'Gente que se muda del campo a la ciudad', fa: 'کوچ مردم از قریه به شهر' },
          { en: 'People moving from cities to farms', es: 'Gente que se muda de la ciudad al campo', fa: 'کوچ مردم از شهر به قریه' },
          { en: 'Cities building walls around them', es: 'Ciudades que construyen murallas', fa: 'شهرهایی که دیوار دور خود می‌سازند' },
          { en: 'Farmers growing cotton for the mills', es: 'Granjeros que siembran algodón para fábricas', fa: 'دهقانانی که برای فابریکه پخته می‌کارند' }],
        answer: 0,
        why: { en: 'Mill jobs pulled people into cities. Manchester grew fast, with crowded homes and dirty water.', es: 'Los trabajos atrajeron gente a las ciudades. Mánchester creció rápido, con casas llenas y agua sucia.', fa: 'کار فابریکه مردم را به شهرها کشاند. منچستر زود بزرگ شد، با خانه‌های پرجمعیت و آب کثیف.' } },
      { q: { en: 'Where did most of Manchester\'s raw cotton come from in 1840?', es: '¿De dónde venía casi todo el algodón crudo de Mánchester en 1840?', fa: 'در ۱۸۴۰ بیشتر پختهٔ خام منچستر از کجا می‌آمد؟' },
        choices: [
          { en: 'The US South, grown by enslaved people', es: 'El sur de EE. UU., cultivado por esclavizados', fa: 'جنوب امریکا، کاشتهٔ مردم برده' },
          { en: 'Small farms right next to Manchester', es: 'Granjas pequeñas junto a Mánchester', fa: 'زمین‌های زراعتی کوچک کنار منچستر' },
          { en: 'The cold forests of Norway', es: 'Los bosques fríos de Noruega', fa: 'جنگل‌های سرد ناروی' },
          { en: 'The coal mines at Worsley, by canal', es: 'Las minas de Worsley, por el canal', fa: 'معدن‌های ذغال ورسلی، از راه کانال' }],
        answer: 0,
        why: { en: 'Most came from the American South. Enslaved African Americans were forced to grow and pick it.', es: 'Casi todo venía del sur de Estados Unidos. Obligaban a afroamericanos esclavizados a sembrarlo y cosecharlo.', fa: 'بیشتر آن از جنوب امریکا می‌آمد. افریقایی‌تبارهای برده به زور آن را می‌کاشتند و می‌چیدند.' } },
      { q: { en: 'How did workers try to make their lives better?', es: '¿Cómo intentaron los obreros mejorar su vida?', fa: 'کارگران چطور کوشش کردند زندگی‌شان را بهتر کنند؟' },
        choices: [
          { en: 'They formed unions and asked for the vote', es: 'Formaron sindicatos y pidieron el voto', fa: 'اتحادیه ساختند و حق رأی خواستند' },
          { en: 'They all moved back to their old farms', es: 'Todos volvieron a sus viejas granjas', fa: 'همه به زمین‌های کهنهٔ خود برگشتند' },
          { en: 'They stopped wearing any cotton cloth', es: 'Dejaron de usar tela de algodón', fa: 'دیگر هیچ تکهٔ پخته نپوشیدند' },
          { en: 'They asked to work more hours for less', es: 'Pidieron trabajar más horas por menos', fa: 'خواستند ساعت بیشتر با مزد کمتر کار کنند' }],
        answer: 0,
        why: { en: 'Unions asked for fair pay and shorter hours. The Chartists asked for the vote.', es: 'Los sindicatos pedían pago justo y menos horas. Los cartistas pedían el voto.', fa: 'اتحادیه‌ها مزد عادلانه و ساعت کمتر خواستند. چارتیست‌ها حق رأی خواستند.' } },
      { q: { en: 'What did the Factory Act of 1833 do?', es: '¿Qué hizo la Ley de Fábricas de 1833?', fa: 'قانون فابریکه‌های ۱۸۳۳ چه کرد؟' },
        choices: [
          { en: 'It limited children\'s hours in mills', es: 'Limitó las horas de los niños', fa: 'ساعت کار اطفال را محدود کرد' },
          { en: 'It gave every worker the vote', es: 'Les dio el voto a todos los obreros', fa: 'به هر کارگر حق رأی داد' },
          { en: 'It closed all the mills in Britain', es: 'Cerró todas las fábricas británicas', fa: 'همهٔ فابریکه‌های بریتانیا را بست' },
          { en: 'It built the first railway line', es: 'Construyó el primer ferrocarril', fa: 'اولین خط آهن را ساخت' }],
        answer: 0,
        why: { en: 'It banned mill work under age 9 and limited hours for older children.', es: 'Prohibió el trabajo en fábricas antes de los 9 años y limitó las horas de los mayores.', fa: 'کار فابریکه را برای کمتر از ۹ سال منع کرد و ساعت اطفال بزرگ‌تر را محدود کرد.' } }
    ]
  },

  learned: [
    { en: 'The [[industrial revolution|Industrial Revolution]] began in Britain around 1750. Coal and [[steam engine|steam engines]] powered new machines.', es: 'La [[industrial revolution|Revolución Industrial]] empezó en Gran Bretaña hacia 1750. El carbón y las [[steam engine|máquinas de vapor]] movían las máquinas nuevas.', fa: '[[industrial revolution|انقلاب صنعتی]] در حدود ۱۷۵۰ در بریتانیا شروع شد. ذغال و [[steam engine|ماشین بخار]] ماشین‌های نو را چلاندند.' },
    { en: 'People left farms to work in factory cities. This is [[urbanization|urbanization]].', es: 'La gente dejó el campo para trabajar en ciudades con fábricas. Esto es la [[urbanization|urbanización]].', fa: 'مردم زمین‌های زراعتی را ترک کردند تا در شهرهای فابریکه‌دار کار کنند. این [[urbanization|شهرنشینی]] است.' },
    { en: 'Work was long and hard, even for children. [[union|Unions]], the [[chartists|Chartists]] and new laws pushed for change.', es: 'El trabajo era largo y duro, aun para los niños. Los [[union|sindicatos]], los [[chartists|cartistas]] y leyes nuevas lucharon por el cambio.', fa: 'کار دراز و سخت بود، حتی برای اطفال. [[union|اتحادیه‌ها]]، [[chartists|چارتیست‌ها]] و قانون‌های نو برای تغییر کوشیدند.' }
  ],
  reflect: {
    q: { en: 'Which machine makes your life easier today? How would your day change without it?', es: '¿Qué máquina te hace la vida más fácil hoy? ¿Cómo cambiaría tu día sin ella?', fa: 'کدام ماشین امروز زندگی تو را آسان‌تر می‌سازد؟ بدون آن روزت چطور تغییر می‌کرد؟' },
    starter: { en: 'A machine I use every day is', es: 'Una máquina que uso todos los días es', fa: 'ماشینی که هر روز به کار می‌برم' }
  }
};
