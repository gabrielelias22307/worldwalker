/* TRAILWALKER · Episode 8.2 · Civil Rights and Workers' Rights (VUS)
   Washington, DC, on August 28, 1963: the March on Washington for Jobs and Freedom.
   North (rows 1-3): buses that brought marchers from many states, parked along the street (row 3).
   West: the Lincoln Memorial (D) and its steps, far away; no speaker is a character.
   Middle (rows 7-11): the Reflecting Pool (~) between two walkways, with elms (rows 5 and 13).
   East: the Washington Monument (W) on its plaza. South lawn: the first-aid tent (red, door 4,15),
   the volunteers' tent (blue, door 21,15), the water station (m, O) and the sign table (m, SE).
   Serious topic: plain, true, respectful words. The Grump's taunts are serious. */
window.EPISODE = {
  id: '8.2',
  realm: 8,
  sol: 'VUS',
  title: { en: 'The March on Washington', es: 'La Marcha sobre Washington', fa: 'راهپیمایی واشنگتن' },
  place: { en: 'Washington, 1963', es: 'Washington, 1963', fa: 'واشنگتن، ۱۹۶۳' },
  intro: [
    { en: 'The Grump blurred the [[civil rights|civil rights]] page. People forget how unfair laws changed.',
      es: 'El Gruñón borró la página de los [[civil rights|derechos civiles]]. La gente olvida cómo cambiaron las leyes injustas.',
      fa: 'غرغرو صفحهٔ [[civil rights|حقوق مدنی]] را تار کرد. مردم فراموش می‌کنند قانون‌های ناعادلانه چطور تغییر کرد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: the National Mall in Washington, DC on the map, 1963 on the timeline */
  scenes: {
    at: [-77.04, 38.889],
    year: 1963,
    start: [
      { en: 'On August 28, 1963, about 250,000 people marched in Washington, DC.',
        es: 'El 28 de agosto de 1963, unas 250,000 personas marcharon en Washington, DC.',
        fa: 'در ۲۸ اگست ۱۹۶۳، حدود ۲۵۰ هزار نفر در واشنگتن دی‌سی راهپیمایی کردند.' },
      { en: 'They came by bus, train and car from many states.',
        es: 'Llegaron en autobús, tren y carro desde muchos estados.',
        fa: 'آن‌ها با بس، ریل و موتر از ایالت‌های زیادی آمدند.' },
      { en: 'They marched for jobs and freedom for all Americans.',
        es: 'Marcharon por trabajo y libertad para todos los estadounidenses.',
        fa: 'آن‌ها برای کار و آزادی همهٔ امریکایی‌ها راهپیمایی کردند.' }
    ],
    page: { en: 'At the Lincoln Memorial, Dr. Martin Luther King Jr. said, "I have a dream."',
      es: 'En el Monumento a Lincoln, el Dr. Martin Luther King Jr. dijo: "Yo tengo un sueño".',
      fa: 'در یادبود لینکن، داکتر مارتین لوتر کینگ جونیر گفت: «من یک رؤیا دارم.»' },
    guess: {
      q: { en: 'So many people came to one place. Was the march peaceful?', es: 'Llegó muchísima gente a un solo lugar. ¿Fue pacífica la marcha?', fa: 'این‌قدر زیاد مردم به یک جا آمدند. آیا راهپیمایی آرام بود؟' },
      choices: [
        { t: { en: 'Yes, it was peaceful', es: 'Sí, fue pacífica', fa: 'بله، آرام بود' }, ok: true },
        { t: { en: 'No, it was violent', es: 'No, fue violenta', fa: 'نه، پر از خشونت بود' } }
      ],
      why: { en: 'Yes. The marchers believed in nonviolence. They sang, listened and went home in peace.', es: 'Sí. Los manifestantes creían en la no violencia. Cantaron, escucharon y volvieron a casa en paz.', fa: 'بله. راهپیمایان به عدم خشونت باور داشتند. سرود خواندند، گوش دادند و با آرامی به خانه رفتند.' }
    },
    next: {
      q: { en: 'Next: our own time. How do people remember September 11, 2001?', es: 'Ahora: nuestro propio tiempo. ¿Cómo recuerda la gente el 11 de septiembre de 2001?', fa: 'بعدی: زمان خود ما. مردم ۱۱ سپتامبر ۲۰۰۱ را چطور به یاد می‌آورند؟' },
      choices: [
        { t: { en: 'With memorials and care', es: 'Con memoriales y respeto', fa: 'با یادبودها و احترام' }, ok: true },
        { t: { en: 'They forgot it fast', es: 'Lo olvidaron pronto', fa: 'زود فراموشش کردند' } }
      ],
      why: { en: 'Memorials honor the people who died. Today we also face new challenges, like a changing climate.', es: 'Los memoriales honran a quienes murieron. Hoy también enfrentamos retos nuevos, como un clima que cambia.', fa: 'یادبودها از کسانی که جان دادند تجلیل می‌کنند. امروز با چالش‌های نو هم روبرو هستیم، مثل تغییر اقلیم.' }
    }
  },
  /* houses: who is inside each tent */
  houses: [
    { at: [4, 15], name: { en: 'Nurse Odessa', es: 'Enfermera Odessa', fa: 'نرس اودسا' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#f2f2f2', pants: '#3a4a6a', style: 'bun' },
      lines: [
        { en: 'This is a first-aid tent. It is a hot August day.', es: 'Esta es una carpa de primeros auxilios. Es un día caluroso de agosto.', fa: 'اینجا خیمهٔ کمک‌های اولیه است. یک روز گرم اگست است.' },
        { en: 'We give water and shade to tired marchers.', es: 'Damos agua y sombra a los manifestantes cansados.', fa: 'ما به راهپیمایان خسته آب و سایه می‌دهیم.' },
        { en: 'So many people, and so calm. Everyone came in peace.', es: 'Tanta gente, y tan tranquila. Todos vinieron en paz.', fa: 'این‌قدر مردم، و این‌قدر آرام. همه با صلح آمدند.' }
      ] },
    { at: [21, 15], name: { en: 'Mr. Alvarez', es: 'Señor Álvarez', fa: 'آقای الوارز' },
      look: { skin: 3, hair: '#1a1208', shirt: '#c8a060', pants: '#3a4a6a', style: 'short', hat: '#d8c890' },
      lines: [
        { en: 'I came from California. My family picks crops in the fields.', es: 'Vine de California. Mi familia cosecha en los campos.', fa: 'من از کالیفورنیا آمدم. خانواده‌ام در کشتزارها حاصل جمع می‌کنند.' },
        { en: 'Farm workers earn very little. Many labor laws leave us out.', es: 'Los trabajadores del campo ganan muy poco. Muchas leyes laborales nos dejan fuera.', fa: 'کارگران زراعتی مزد بسیار کم می‌گیرند. بسیاری از قانون‌های کار ما را شامل نمی‌کند.' },
        { en: 'Last year, César Chávez and Dolores Huerta started a farm workers\' [[union|union]].', es: 'El año pasado, César Chávez y Dolores Huerta fundaron un [[union|sindicato]] de campesinos.', fa: 'سال گذشته، سزار چاوز و دولورس هوئرتا یک [[union|اتحادیهٔ]] کارگران زراعتی ساختند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Row 2: buses (J) and a sign; row 3: the street. West: the Lincoln Memorial (D) with its steps (column 5).
     Rows 7 and 11: walkways around the Reflecting Pool (~, rows 8-10). East: the Washington Monument (W) on its plaza.
     Elms in rows 5 and 13. South: the first-aid tent (R, door 4,15), the volunteers' tent (Q, door 21,15),
     the water station (m m O, row 18) and the sign table (m, x 26-28, row 18). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..............................T',
    'T.JJJ.JJJ.JJJ.x.....JJJ.JJJ.JJJT',
    'TllllllllllllllllllllllllllllllT',
    'T..............................T',
    'T.......T..T..T..T..T..T.......T',
    'TDDDDl.........................T',
    'TDDDDllllllllllllllllllllllllllT',
    'TDDDDlll~~~~~~~~~~~~~~~~.llWWllT',
    'TDDDDlll~~~~~~~~~~~~~~~~.llWWllT',
    'TDDDDlll~~~~~~~~~~~~~~~~.llWWllT',
    'TDDDDllllllllllllllllllllllllllT',
    'TDDDDl..................x......T',
    'TT....x.T..T..T..T..T..T.....,.T',
    'T..RRR..............QQQ........T',
    'T..hdh............,.hdh........T',
    'T..............................T',
    'T..........x..................TT',
    'T...........mmO...........mmm..T',
    'T......,.......................T',
    'T.....T.........T......T.......T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 4],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [18, 12], at: [18, 16], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, past the elm trees.', es: 'Desde esta nota, camina 4 pasos al sur, más allá de los olmos.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از کنار درختان نارون بگذر.' },
      text: { en: 'A march button. It says: March on Washington for Jobs and Freedom.', es: 'Un botón de la marcha. Dice: Marcha sobre Washington por Trabajo y Libertad.', fa: 'یک نشان راهپیمایی. رویش نوشته: راهپیمایی واشنگتن برای کار و آزادی.' } },
    { clueAt: [19, 19], at: [13, 19], decor: 'flower',
      clue: { en: 'From this note, walk 6 steps west. Stop below the water station.', es: 'Desde esta nota, camina 6 pasos al oeste. Detente debajo del puesto de agua.', fa: 'از این یادداشت، ۶ قدم به غرب برو. پایین جای آب ایستاد شو.' },
      text: { en: 'Mahalia Jackson, a great gospel singer, sang for the crowd today.', es: 'Mahalia Jackson, una gran cantante de góspel, cantó hoy para la multitud.', fa: 'ماهالیا جکسن، یک خوانندهٔ بزرگ سرودهای کلیسا، امروز برای مردم خواند.' } }
  ],

  words: {
    'civil rights': { en: 'the rights every citizen should have, like equal treatment and the vote', es: 'los derechos que todo ciudadano debe tener, como trato igual y el voto', fa: 'حقوقی که هر شهروند باید داشته باشد، مثل رفتار برابر و حق رأی' },
    segregation: { en: 'keeping people apart by race, by law or by custom', es: 'separar a las personas por raza, por ley o por costumbre', fa: 'جدا نگه داشتن مردم بر اساس نژاد، با قانون یا با رسم' },
    integrate: { en: 'to open a place to people of all races together', es: 'abrir un lugar a personas de todas las razas juntas', fa: 'باز کردن یک جا برای مردم همهٔ نژادها با هم' },
    'massive resistance': { en: 'Virginia\'s plan to fight school integration, even by closing schools', es: 'el plan de Virginia para frenar la integración escolar, incluso cerrando escuelas', fa: 'نقشهٔ ویرجینیا برای مخالفت با یکجا شدن مکتب‌ها، حتی با بستن مکتب‌ها' },
    boycott: { en: 'refusing to buy or use something as a protest', es: 'negarse a comprar o usar algo como protesta', fa: 'خودداری از خریدن یا استفاده کردن چیزی برای اعتراض' },
    'sit-in': { en: 'a protest where people sit in a place and refuse to leave', es: 'una protesta en la que la gente se sienta en un lugar y no se va', fa: 'اعتراضی که مردم در یک جا می‌نشینند و نمی‌روند' },
    nonviolence: { en: 'protesting peacefully, without hitting or hurting anyone', es: 'protestar en paz, sin golpear ni lastimar a nadie', fa: 'اعتراض با آرامی، بدون زدن یا آزار رساندن به کسی' },
    union: { en: 'a group of workers who join together for fair pay and safe work', es: 'un grupo de trabajadores que se unen por pago justo y trabajo seguro', fa: 'گروهی از کارگران که برای مزد عادلانه و کار مصون یکجا می‌شوند' },
    discrimination: { en: 'treating people unfairly because of their race, sex or where they come from', es: 'tratar a las personas injustamente por su raza, sexo u origen', fa: 'رفتار ناعادلانه با مردم به خاطر نژاد، جنسیت یا جای آمدن‌شان' },
    'poll tax': { en: 'a fee some states charged people before they could vote', es: 'un pago que algunos estados cobraban antes de dejar votar', fa: 'پولی که بعضی ایالت‌ها پیش از رأی دادن از مردم می‌گرفتند' },
    'literacy test': { en: 'an unfair reading test used to stop Black citizens from voting', es: 'una prueba de lectura injusta usada para impedir votar a ciudadanos negros', fa: 'امتحان ناعادلانهٔ خواندن که برای جلوگیری از رأی دادن شهروندان سیاه‌پوست به کار می‌رفت' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Mrs. Harris', es: 'Señora Harris', fa: 'خانم هریس' },
      role: { en: 'Teacher from Virginia', es: 'Maestra de Virginia', fa: 'معلم از ویرجینیا' },
      look: { skin: 5, hair: '#1a1a1a', shirt: '#3a6a8a', pants: '#2a2a3a', style: 'bun', hat: '#8a2a3a' },
      lines: [
        { en: 'I teach in Norfolk, Virginia. We rode a bus all night to be here.', es: 'Soy maestra en Norfolk, Virginia. Viajamos en autobús toda la noche para estar aquí.', fa: 'من در نورفوک، ویرجینیا، معلم هستم. تمام شب با بس آمدیم تا اینجا باشیم.' },
        { en: 'In 1954, Brown v. Board said [[segregation|segregated]] schools broke the Constitution.', es: 'En 1954, el caso Brown contra la Junta de Educación dijo que las escuelas [[segregation|segregadas]] violaban la Constitución.', fa: 'در ۱۹۵۴، فیصلهٔ براون علیه بورد تعلیم گفت مکتب‌های [[segregation|جدا]] خلاف قانون اساسی است.' },
        { en: 'Virginia leaders fought it with [[massive resistance|Massive Resistance]]. In 1958, Norfolk closed schools.', es: 'Los líderes de Virginia lo combatieron con la [[massive resistance|Resistencia Masiva]]. En 1958, Norfolk cerró escuelas.', fa: 'رهبران ویرجینیا با [[massive resistance|مقاومت گسترده]] با آن مخالفت کردند. در ۱۹۵۸، نورفوک مکتب‌ها را بست.' },
        { en: 'Prince Edward County closed all its public schools in 1959. They are still closed.', es: 'El condado de Prince Edward cerró todas sus escuelas públicas en 1959. Siguen cerradas.', fa: 'کانتی پرنس ادوارد در ۱۹۵۹ همهٔ مکتب‌های دولتی‌اش را بست. هنوز هم بسته‌اند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Brown v. Board was a Supreme Court decision. What did it say?', es: 'Brown contra la Junta de Educación fue una decisión de la Corte Suprema. ¿Qué dijo?', fa: 'براون علیه بورد تعلیم یک فیصلهٔ ستره محکمه بود. چه گفت؟' },
        choices: [
          { ok: true, t: { en: 'Segregated schools broke the Constitution', es: 'Las escuelas segregadas violaban la Constitución', fa: 'مکتب‌های جدا خلاف قانون اساسی بود' },
            why: { en: 'Yes. The Court said separate schools for Black and white children were not equal.', es: 'Sí. La Corte dijo que las escuelas separadas para niños negros y blancos no eran iguales.', fa: 'بله. محکمه گفت مکتب‌های جدا برای اطفال سیاه‌پوست و سفیدپوست برابر نیست.' } },
          { t: { en: 'Each town must build a second school building', es: 'Cada pueblo debía construir un segundo edificio escolar', fa: 'هر شهر باید یک تعمیر دوم مکتب بسازد' },
            why: { en: 'No. Two separate schools was the problem. The Court said segregation itself was unfair.', es: 'No. Dos escuelas separadas eran el problema. La Corte dijo que la segregación era injusta.', fa: 'نه. دو مکتب جدا خودش مشکل بود. محکمه گفت جدا سازی ناعادلانه است.' } },
          { t: { en: 'Only big cities had to follow the law', es: 'Solo las ciudades grandes debían cumplir la ley', fa: 'فقط شهرهای بزرگ باید از قانون پیروی کنند' },
            why: { en: 'No. The decision was for public schools in every state, big city or small town.', es: 'No. La decisión era para las escuelas públicas de todos los estados, grandes o pequeños.', fa: 'نه. این فیصله برای مکتب‌های دولتی همهٔ ایالت‌ها بود، شهر بزرگ یا کوچک.' } }
        ]
      }
    },
    {
      x: 21, y: 6,
      name: { en: 'Mr. Kowalski', es: 'Señor Kowalski', fa: 'آقای کووالسکی' },
      role: { en: 'Union auto worker', es: 'Obrero del automóvil, sindicalista', fa: 'کارگر موترسازی و عضو اتحادیه' },
      look: { skin: 1, hair: '#7a5a3a', shirt: '#4a5a7a', pants: '#2a2a2a', style: 'short', hat: '#3a3a4a' },
      lines: [
        { en: 'I build cars in Detroit. My [[union|union]] helped pay for our buses.', es: 'Fabrico carros en Detroit. Mi [[union|sindicato]] ayudó a pagar nuestros autobuses.', fa: 'من در دیترویت موتر می‌سازم. [[union|اتحادیهٔ]] ما در پول بس‌ها کمک کرد.' },
        { en: 'Union leader A. Philip Randolph called for this March for Jobs and Freedom.', es: 'El líder sindical A. Philip Randolph convocó esta Marcha por Trabajo y Libertad.', fa: 'رهبر اتحادیه، ای. فیلیپ رندولف، مردم را به این راهپیمایی برای کار و آزادی خواند.' },
        { en: 'Many Black workers are hired last, fired first, and paid less.', es: 'A muchos trabajadores negros los contratan al final, los despiden primero y les pagan menos.', fa: 'بسیاری از کارگران سیاه‌پوست آخر استخدام، اول اخراج و کمتر مزد می‌گیرند.' },
        { en: 'In June, the Equal Pay Act said women must get equal pay for equal work.', es: 'En junio, la Ley de Igualdad Salarial dijo que las mujeres deben ganar igual por igual trabajo.', fa: 'در جون، قانون مزد برابر گفت زنان برای کار برابر باید مزد برابر بگیرند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did so many union workers come to march for civil rights?', es: '¿Por qué tantos trabajadores sindicalizados vinieron a marchar por los derechos civiles?', fa: 'چرا این‌قدر زیاد کارگران اتحادیه برای حقوق مدنی به راهپیمایی آمدند؟' },
        choices: [
          { ok: true, t: { en: 'Fair jobs and pay help all workers', es: 'Trabajos y pagos justos ayudan a todos', fa: 'کار و مزد عادلانه به همه کمک می‌کند' },
            why: { en: 'Yes. They saw jobs and freedom go together. Unfair hiring hurts everyone who works.', es: 'Sí. Vieron que el trabajo y la libertad van juntos. Contratar injustamente daña a todos.', fa: 'بله. دیدند کار و آزادی با هم است. استخدام ناعادلانه به همهٔ کارگران ضرر می‌رساند.' } },
          { t: { en: 'They wanted to close the city schools', es: 'Querían cerrar las escuelas de la ciudad', fa: 'می‌خواستند مکتب‌های شهر را ببندند' },
            why: { en: 'No. The march asked for open, integrated schools, not closed ones.', es: 'No. La marcha pedía escuelas abiertas e integradas, no cerradas.', fa: 'نه. راهپیمایی مکتب‌های باز و یکجا می‌خواست، نه بسته.' } },
          { t: { en: 'Their bosses ordered them to come', es: 'Sus jefes les ordenaron venir', fa: 'رئیس‌هایشان به آن‌ها امر کردند بیایند' },
            why: { en: 'No. Workers chose to come. Many gave up a day\'s pay to march.', es: 'No. Los trabajadores eligieron venir. Muchos perdieron un día de pago para marchar.', fa: 'نه. کارگران خودشان آمدن را انتخاب کردند. بسیاری مزد یک روز را از دست دادند.' } }
        ]
      }
    },
    {
      x: 12, y: 14,
      name: { en: 'Carol', es: 'Carol', fa: 'کارول' },
      role: { en: 'College student', es: 'Estudiante universitaria', fa: 'محصل پوهنتون' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0a020', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I study in Richmond. We protest with [[nonviolence|nonviolence]], never with fists.', es: 'Estudio en Richmond. Protestamos con [[nonviolence|no violencia]], nunca con los puños.', fa: 'من در ریچموند درس می‌خوانم. ما با [[nonviolence|عدم خشونت]] اعتراض می‌کنیم، هرگز با مشت.' },
        { en: 'In 1960, students held [[sit-in|sit-ins]] at lunch counters that served only white people.', es: 'En 1960, estudiantes hicieron [[sit-in|sentadas]] en cafeterías que solo atendían a personas blancas.', fa: 'در ۱۹۶۰، محصلان در میزهای غذاخوری که فقط به سفیدپوستان غذا می‌دادند [[sit-in|تحصن]] کردند.' },
        { en: 'In 1955, Rosa Parks would not give up her bus seat in Montgomery.', es: 'En 1955, Rosa Parks no quiso ceder su asiento en un autobús de Montgomery.', fa: 'در ۱۹۵۵، روزا پارکس چوکی‌اش را در بس مونتگمری نداد.' },
        { en: 'Black riders [[boycott|boycotted]] Montgomery\'s buses for 381 days. They won.', es: 'Los pasajeros negros hicieron un [[boycott|boicot]] a los autobuses de Montgomery por 381 días. Ganaron.', fa: 'مسافران سیاه‌پوست ۳۸۱ روز بس‌های مونتگمری را [[boycott|تحریم]] کردند. پیروز شدند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Sit-in students stayed calm, even when people yelled at them. Why?', es: 'Los estudiantes de las sentadas se quedaban tranquilos, aunque les gritaran. ¿Por qué?', fa: 'محصلان تحصن آرام ماندند، حتی وقتی مردم بر سرشان داد می‌زدند. چرا؟' },
        choices: [
          { ok: true, t: { en: 'Calm protest showed who was unfair', es: 'La protesta tranquila mostraba quién era injusto', fa: 'اعتراض آرام نشان داد چه کسی ناعادل است' },
            why: { en: 'Yes. Their calm made the cruelty easy to see. Many Americans changed their minds.', es: 'Sí. Su calma hacía ver la crueldad. Muchos estadounidenses cambiaron de opinión.', fa: 'بله. آرامی‌شان ظلم را آشکار ساخت. بسیاری از امریکایی‌ها نظرشان را تغییر دادند.' } },
          { t: { en: 'They were much too tired to stand', es: 'Estaban demasiado cansados para pararse', fa: 'خیلی خسته بودند و نمی‌توانستند ایستاد شوند' },
            why: { en: 'No. They chose calm on purpose. It took great courage and practice.', es: 'No. Eligieron la calma a propósito. Necesitaron mucho valor y práctica.', fa: 'نه. آرامی را عمداً انتخاب کردند. این کار جرئت و تمرین زیاد می‌خواست.' } },
          { t: { en: 'The police told them to sit there', es: 'La policía les dijo que se sentaran allí', fa: 'پولیس به آن‌ها گفت آنجا بنشینند' },
            why: { en: 'No. Police often arrested sit-in students. The students chose nonviolence themselves.', es: 'No. La policía muchas veces arrestaba a los estudiantes. Ellos mismos eligieron la no violencia.', fa: 'نه. پولیس اکثراً محصلان تحصن را بندی می‌کرد. خود محصلان عدم خشونت را انتخاب کردند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 2, text: { en: 'BUSES PARK HERE · Marchers came on buses and trains from many states, even California.', es: 'ESTACIONAMIENTO DE AUTOBUSES · Llegaron manifestantes en autobús y tren de muchos estados, hasta de California.', fa: 'جای ایستادن بس‌ها · راهپیمایان با بس و ریل از ایالت‌های زیادی آمدند، حتی از کالیفورنیا.' } },
    { x: 6, y: 13, text: { en: 'LINCOLN MEMORIAL · The speakers stand on the steps, far away. Loudspeakers carry their words.', es: 'MONUMENTO A LINCOLN · Los oradores están en las escaleras, lejos. Los altavoces llevan sus palabras.', fa: 'یادبود لینکن · سخنرانان دور، روی زینه‌ها ایستاده‌اند. بلندگوها حرف‌شان را می‌رساند.' } },
    { x: 24, y: 12, text: { en: 'WASHINGTON MONUMENT · Marchers gathered here this morning, then walked to the Lincoln Memorial.', es: 'MONUMENTO A WASHINGTON · Los manifestantes se reunieron aquí en la mañana y luego caminaron al Monumento a Lincoln.', fa: 'منار واشنگتن · راهپیمایان صبح اینجا جمع شدند، بعد تا یادبود لینکن پیاده رفتند.' } },
    { x: 11, y: 17, text: { en: 'WATER STATION · Free water for marchers. Stay calm, kind and peaceful.', es: 'PUESTO DE AGUA · Agua gratis para los manifestantes. Mantén la calma, la bondad y la paz.', fa: 'جای آب · آب مفت برای راهپیمایان. آرام، مهربان و صلح‌جو باش.' } }
  ],

  /* the quest: Mr. Jenkins the bus driver (gold !) by the buses (NW) -> Sister Mae the church singer (NE)
     -> the sign volunteer at the sign table (SE): carry him the sign that tells the Farmville riders' story -> back */
  quest: {
    stat: 'mov',
    title: { en: 'A Sign for Farmville', es: 'Un cartel para Farmville', fa: 'یک لوحه برای فارمویل' },
    giver: {
      x: 5, y: 1,
      name: { en: 'Mr. Jenkins', es: 'Señor Jenkins', fa: 'آقای جنکینز' },
      role: { en: 'Bus driver', es: 'Chofer de autobús', fa: 'دریور بس' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#2a4a7a', pants: '#2a2a3a', style: 'short', hat: '#2a3a5a' },
      lines: [
        { en: 'I drove a bus here from Farmville, in Prince Edward County, Virginia.', es: 'Manejé un autobús hasta aquí desde Farmville, en el condado de Prince Edward, Virginia.', fa: 'من یک بس را از فارمویل، در کانتی پرنس ادوارد ویرجینیا، تا اینجا راندم.' },
        { en: 'My riders want a sign that tells their story. Sister Mae can help.', es: 'Mis pasajeros quieren un cartel que cuente su historia. La hermana Mae puede ayudar.', fa: 'مسافرانم لوحه‌ای می‌خواهند که داستان‌شان را بگوید. خواهر می کمک می‌کند.' }
      ],
      wait: { en: 'Sister Mae is east of here, past the buses, on the grass.', es: 'La hermana Mae está al este, pasando los autobuses, en el pasto.', fa: 'خواهر می به طرف شرق، آن طرف بس‌ها، روی سبزه است.' },
      thanks: { en: 'Integrated schools now! That is our story. Thank you, friend.', es: '¡Escuelas integradas ya! Esa es nuestra historia. Gracias, amigo.', fa: 'مکتب‌های یکجا، همین حالا! این داستان ماست. تشکر، دوست من.' }
    },
    contact: {
      x: 29, y: 5,
      name: { en: 'Sister Mae', es: 'Hermana Mae', fa: 'خواهر می' },
      role: { en: 'Church singer', es: 'Cantante de iglesia', fa: 'خوانندهٔ کلیسا' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#6a2a6a', pants: '#2a2a2a', style: 'bun', hat: '#f2f2f2' },
      lines: [
        { en: 'I sing in my church choir. Today we sing "We Shall Overcome."', es: 'Canto en el coro de mi iglesia. Hoy cantamos "Venceremos".', fa: 'من در گروه سرود کلیسا می‌خوانم. امروز «ما پیروز می‌شویم» را می‌خوانیم.' },
        { en: 'Signs are at the sign table, south, past the Washington Monument.', es: 'Los carteles están en la mesa de carteles, al sur, pasando el Monumento a Washington.', fa: 'لوحه‌ها سر میز لوحه‌ها است، به طرف جنوب، آن طرف منار واشنگتن.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 27, y: 17,
        name: { en: 'Mr. Brooks', es: 'Señor Brooks', fa: 'آقای بروکس' },
        role: { en: 'Sign volunteer', es: 'Voluntario de los carteles', fa: 'رضاکار لوحه‌ها' },
        look: { skin: 2, hair: '#3a2a1a', shirt: '#f2f2f2', pants: '#4a4a4a', style: 'short' },
        lines: [
          { en: 'Each group carries signs. Each sign tells why people came today.', es: 'Cada grupo lleva carteles. Cada cartel dice por qué vino la gente hoy.', fa: 'هر گروه لوحه می‌برد. هر لوحه می‌گوید مردم امروز چرا آمدند.' }
        ]
      },
      q: { en: 'Prince Edward County closed its public schools in 1959. Which sign tells their story? Bring it.', es: 'El condado de Prince Edward cerró sus escuelas públicas en 1959. ¿Qué cartel cuenta su historia? Tráelo.', fa: 'کانتی پرنس ادوارد در ۱۹۵۹ مکتب‌های دولتی‌اش را بست. کدام لوحه داستان‌شان را می‌گوید؟ بیاورش.' },
      choices: [
        { ok: true, at: [9, 20], icon: '🪧', t: { en: 'A sign: "We march for integrated schools now!"', es: 'Un cartel: "¡Marchamos por escuelas integradas ya!"', fa: 'یک لوحه: «برای مکتب‌های یکجا راهپیمایی می‌کنیم، همین حالا!»' },
          why: { en: 'Yes! Their children have had no public school for four years. Schools are their story.', es: '¡Sí! Sus hijos llevan cuatro años sin escuela pública. Las escuelas son su historia.', fa: 'بله! اطفال‌شان چهار سال است مکتب دولتی ندارند. مکتب داستان آن‌هاست.' } },
        { at: [17, 1], icon: '🪧', t: { en: 'A sign: "We demand voting rights now!"', es: 'Un cartel: "¡Exigimos el derecho al voto ya!"', fa: 'یک لوحه: «حق رأی می‌خواهیم، همین حالا!»' },
          why: { en: 'Voting rights mattered too. But these riders came because their county closed its schools.', es: 'El derecho al voto también importaba. Pero estos pasajeros vinieron porque su condado cerró las escuelas.', fa: 'حق رأی هم مهم بود. اما این مسافران آمدند چون کانتی‌شان مکتب‌ها را بست.' } },
        { at: [30, 12], icon: '🪧', t: { en: 'A sign: "We march for jobs for all now!"', es: 'Un cartel: "¡Marchamos por trabajo para todos ya!"', fa: 'یک لوحه: «برای کار برای همه راهپیمایی می‌کنیم، همین حالا!»' },
          why: { en: 'Jobs were a big goal of the march. But closed schools are this county\'s story.', es: 'El trabajo era una gran meta de la marcha. Pero las escuelas cerradas son la historia de este condado.', fa: 'کار هدف بزرگ راهپیمایی بود. اما مکتب‌های بسته داستان این کانتی است.' } }
      ],
      item: { icon: '🪧', name: { en: 'A sign for integrated schools', es: 'Un cartel por escuelas integradas', fa: 'یک لوحه برای مکتب‌های یکجا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[24, 4], [8, 19]],

  challenge: {
    at: [15, 16],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // five colored areas on the south lawn, one for each part of life a law or court case changed
    zones: [
      { bin: 'school', x: 2, y: 17, w: 3, h: 2 },
      { bin: 'public', x: 8, y: 15, w: 3, h: 2 },
      { bin: 'vote', x: 17, y: 17, w: 3, h: 2 },
      { bin: 'family', x: 24, y: 15, w: 2, h: 2 },
      { bin: 'work', x: 27, y: 14, w: 3, h: 2 }
    ],
    stat: 'hei',
    title: { en: 'What did each law change?', es: '¿Qué cambió cada ley?', fa: 'هر قانون چه چیزی را تغییر داد؟' },
    intro: { en: 'The Grump scattered the law cards. Carry each law or court case to what it changed.',
      es: 'El Gruñón regó las tarjetas de leyes. Lleva cada ley o caso de la corte a lo que cambió.',
      fa: 'غرغرو کارت‌های قانون را پراگنده کرد. هر قانون یا فیصلهٔ محکمه را به چیزی ببر که تغییرش داد.' },
    bins: [
      { id: 'school', icon: '🏫', label: { en: 'Schools', es: 'Escuelas', fa: 'مکتب‌ها' },
        sub: { en: 'who can learn, and fair treatment at school', es: 'quién puede estudiar y trato justo en la escuela', fa: 'چه کسی درس بخواند و رفتار عادلانه در مکتب' } },
      { id: 'public', icon: '🍽️', label: { en: 'Public places & jobs', es: 'Lugares públicos y empleos', fa: 'جاهای عمومی و کار' },
        sub: { en: 'buses, restaurants, hotels, and hiring', es: 'autobuses, restaurantes, hoteles y contratación', fa: 'بس‌ها، رستورانت‌ها، هوتل‌ها و استخدام' } },
      { id: 'vote', icon: '🗳️', label: { en: 'Voting', es: 'Voto', fa: 'رأی دادن' },
        sub: { en: 'who can vote, with no unfair tests or fees', es: 'quién puede votar, sin pruebas ni pagos injustos', fa: 'چه کسی رأی بدهد، بدون امتحان یا پول ناعادلانه' } },
      { id: 'family', icon: '💍', label: { en: 'Marriage & family', es: 'Matrimonio y familia', fa: 'ازدواج و خانواده' },
        sub: { en: 'who can marry whom', es: 'quién puede casarse con quién', fa: 'چه کسی با چه کسی ازدواج کند' } },
      { id: 'work', icon: '🛠️', label: { en: 'Workers', es: 'Trabajadores', fa: 'کارگران' },
        sub: { en: 'pay and fair treatment at work', es: 'pago y trato justo en el trabajo', fa: 'مزد و رفتار عادلانه در کار' } }
    ],
    items: [
      { bin: 'school', t: { en: 'Brown v. Board of Education (1954)', es: 'Brown contra la Junta de Educación (1954)', fa: 'براون علیه بورد تعلیم (۱۹۵۴)' },
        why: { en: 'Thurgood Marshall argued this case. The Court said segregated public schools were unequal.', es: 'Thurgood Marshall defendió este caso. La Corte dijo que las escuelas públicas segregadas no eran iguales.', fa: 'تورگود مارشال از این دعوا دفاع کرد. محکمه گفت مکتب‌های دولتی جدا برابر نیستند.' } },
      { bin: 'school', t: { en: 'Title IX (1972)', es: 'Título IX (1972)', fa: 'مادهٔ نهم (۱۹۷۲)' },
        why: { en: 'Title IX banned unfair treatment of girls and women in schools, even in school sports.', es: 'El Título IX prohibió el trato injusto a niñas y mujeres en las escuelas, hasta en los deportes.', fa: 'مادهٔ نهم رفتار ناعادلانه با دختران و زنان را در مکتب‌ها منع کرد، حتی در ورزش مکتب.' } },
      { bin: 'public', t: { en: 'Civil Rights Act (1964)', es: 'Ley de Derechos Civiles (1964)', fa: 'قانون حقوق مدنی (۱۹۶۴)' },
        why: { en: 'It ended segregation in public places, like hotels and restaurants. It also banned job [[discrimination|discrimination]].', es: 'Terminó la segregación en lugares públicos, como hoteles y restaurantes. También prohibió la [[discrimination|discriminación]] en el empleo.', fa: 'جدا سازی را در جاهای عمومی، مثل هوتل و رستورانت، پایان داد. [[discrimination|تبعیض]] در کار را هم منع کرد.' } },
      { bin: 'public', t: { en: 'Browder v. Gayle (1956)', es: 'Browder contra Gayle (1956)', fa: 'براودر علیه گیل (۱۹۵۶)' },
        why: { en: 'During the Montgomery Bus Boycott, the Supreme Court ended segregated seats on Montgomery buses.', es: 'Durante el boicot de autobuses de Montgomery, la Corte Suprema terminó con los asientos segregados.', fa: 'در جریان تحریم بس‌های مونتگمری، ستره محکمه چوکی‌های جدا را در بس‌ها پایان داد.' } },
      { bin: 'vote', t: { en: 'Voting Rights Act (1965)', es: 'Ley de Derecho al Voto (1965)', fa: 'قانون حق رأی (۱۹۶۵)' },
        why: { en: 'It ended [[literacy test|literacy tests]] and sent federal officials to protect Black voters.', es: 'Terminó las [[literacy test|pruebas de alfabetización]] y envió funcionarios federales a proteger a los votantes negros.', fa: '[[literacy test|امتحان‌های سواد]] را پایان داد و مأموران فدرال را برای حفاظت رأی‌دهندگان سیاه‌پوست فرستاد.' } },
      { bin: 'vote', t: { en: '24th Amendment (1964)', es: 'Enmienda 24 (1964)', fa: 'تعدیل بیست و چهارم (۱۹۶۴)' },
        why: { en: 'It banned [[poll tax|poll taxes]] in federal elections. No one pays to vote for president.', es: 'Prohibió el [[poll tax|impuesto al voto]] en las elecciones federales. Nadie paga por votar por el presidente.', fa: '[[poll tax|مالیهٔ رأی]] را در انتخابات فدرال منع کرد. هیچ کس برای رأی به رئیس‌جمهور پول نمی‌دهد.' } },
      { bin: 'family', t: { en: 'Loving v. Virginia (1967)', es: 'Loving contra Virginia (1967)', fa: 'لاوینگ علیه ویرجینیا (۱۹۶۷)' },
        why: { en: 'Richard and Mildred Loving of Virginia won. States could no longer ban marriage between races.', es: 'Richard y Mildred Loving, de Virginia, ganaron. Los estados ya no podían prohibir el matrimonio entre razas.', fa: 'ریچارد و میلدرد لاوینگ از ویرجینیا پیروز شدند. ایالت‌ها دیگر نمی‌توانستند ازدواج میان نژادها را منع کنند.' } },
      { bin: 'work', t: { en: 'Equal Pay Act (1963)', es: 'Ley de Igualdad Salarial (1963)', fa: 'قانون مزد برابر (۱۹۶۳)' },
        why: { en: 'It said men and women doing the same job must get the same pay.', es: 'Dijo que hombres y mujeres que hacen el mismo trabajo deben recibir el mismo pago.', fa: 'گفت مردان و زنانی که یک کار را می‌کنند باید مزد یکسان بگیرند.' } }
    ],
    success: { en: 'The law cards are back in place! Marchers, lawyers and voters helped change these laws.',
      es: '¡Las tarjetas de leyes están en su lugar! Manifestantes, abogados y votantes ayudaron a cambiar estas leyes.',
      fa: 'کارت‌های قانون دوباره سر جایشان است! راهپیمایان، وکیلان و رأی‌دهندگان در تغییر این قانون‌ها کمک کردند.' }
  },

  boss: {
    at: [21, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Silent Grump', es: 'El Gruñón Silencioso', fa: 'غرغروی خاموش' },
    appear: { en: 'The Silent Grump is hiding in the fog on the south lawn.', es: 'El Gruñón Silencioso se esconde en la niebla del césped del sur.', fa: 'غرغروی خاموش در مه سبزه‌زار جنوبی پنهان است.' },
    taunt: { en: 'Unfair laws lasted for years. No one will remember who changed them.', es: 'Las leyes injustas duraron años. Nadie recordará a quienes las cambiaron.', fa: 'قانون‌های ناعادلانه سال‌ها ماند. هیچ کس کسانی را که آن‌ها را تغییر دادند به یاد نمی‌آورد.' },
    win: { en: 'The fog lifts over the Mall. Journal page 8.2 floats down into your hands.', es: 'La niebla se va del parque. La página 8.2 del diario cae en tus manos.', fa: 'مه از روی میدان کنار می‌رود. صفحهٔ ۸.۲ روزنامچه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What did Brown v. Board of Education decide in 1954?', es: '¿Qué decidió el caso Brown contra la Junta de Educación en 1954?', fa: 'فیصلهٔ براون علیه بورد تعلیم در ۱۹۵۴ چه بود؟' },
        choices: [
          { en: 'Segregated public schools were unconstitutional', es: 'Las escuelas públicas segregadas eran inconstitucionales', fa: 'مکتب‌های دولتی جدا خلاف قانون اساسی بود' },
          { en: 'Every state must build a new public college', es: 'Cada estado debía construir una universidad pública nueva', fa: 'هر ایالت باید یک پوهنتون دولتی نو بسازد' },
          { en: 'Schools could choose to stay segregated forever', es: 'Las escuelas podían seguir segregadas para siempre', fa: 'مکتب‌ها می‌توانستند برای همیشه جدا بمانند' },
          { en: 'Only private schools had to follow new rules', es: 'Solo las escuelas privadas debían seguir reglas nuevas', fa: 'فقط مکتب‌های خصوصی باید از قاعده‌های نو پیروی کنند' }],
        answer: 0,
        why: { en: 'The Supreme Court said separate schools were not equal. Thurgood Marshall argued the case.', es: 'La Corte Suprema dijo que las escuelas separadas no eran iguales. Thurgood Marshall defendió el caso.', fa: 'ستره محکمه گفت مکتب‌های جدا برابر نیستند. تورگود مارشال از این دعوا دفاع کرد.' } },
      { q: { en: 'What was Massive Resistance in Virginia?', es: '¿Qué fue la Resistencia Masiva en Virginia?', fa: 'مقاومت گسترده در ویرجینیا چه بود؟' },
        choices: [
          { en: 'Leaders closing schools rather than integrate', es: 'Líderes que cerraban escuelas en vez de integrarlas', fa: 'رهبرانی که به جای یکجا کردن، مکتب‌ها را بستند' },
          { en: 'A plan to build more schools for every child', es: 'Un plan para construir más escuelas para cada niño', fa: 'نقشه‌ای برای ساختن مکتب‌های بیشتر برای هر طفل' },
          { en: 'A march by students to open their schools', es: 'Una marcha de estudiantes para abrir sus escuelas', fa: 'راهپیمایی شاگردان برای باز کردن مکتب‌هایشان' },
          { en: 'A law that paid teachers much more money', es: 'Una ley que pagaba mucho más a los maestros', fa: 'قانونی که به معلمان پول بسیار بیشتر می‌داد' }],
        answer: 0,
        why: { en: 'Virginia leaders fought Brown v. Board. Norfolk closed schools in 1958, and Prince Edward County in 1959.', es: 'Los líderes de Virginia combatieron el caso Brown. Norfolk cerró escuelas en 1958, y Prince Edward en 1959.', fa: 'رهبران ویرجینیا با فیصلهٔ براون مخالفت کردند. نورفوک در ۱۹۵۸ و پرنس ادوارد در ۱۹۵۹ مکتب‌ها را بستند.' } },
      { q: { en: 'What started the Montgomery Bus Boycott in 1955?', es: '¿Qué empezó el boicot de autobuses de Montgomery en 1955?', fa: 'تحریم بس‌های مونتگمری در ۱۹۵۵ چطور شروع شد؟' },
        choices: [
          { en: 'Rosa Parks would not give up her bus seat', es: 'Rosa Parks no quiso ceder su asiento', fa: 'روزا پارکس چوکی‌اش را در بس نداد' },
          { en: 'The city raised bus fares for all riders', es: 'La ciudad subió el pasaje para todos', fa: 'شهر کرایهٔ بس را برای همه بالا برد' },
          { en: 'A new law said buses must stop on Sundays', es: 'Una ley nueva paró los autobuses los domingos', fa: 'یک قانون نو گفت بس‌ها یکشنبه‌ها کار نکنند' },
          { en: 'Bus drivers went on strike for higher pay', es: 'Los choferes hicieron huelga por más pago', fa: 'دریوران بس برای مزد بیشتر اعتصاب کردند' }],
        answer: 0,
        why: { en: 'Rosa Parks was arrested. Black riders stayed off the buses for 381 days, and they won.', es: 'Arrestaron a Rosa Parks. Los pasajeros negros no usaron los autobuses por 381 días, y ganaron.', fa: 'روزا پارکس بندی شد. مسافران سیاه‌پوست ۳۸۱ روز سوار بس نشدند و پیروز شدند.' } },
      { q: { en: 'Why did about 250,000 people march in Washington in 1963?', es: '¿Por qué marcharon unas 250,000 personas en Washington en 1963?', fa: 'چرا حدود ۲۵۰ هزار نفر در ۱۹۶۳ در واشنگتن راهپیمایی کردند؟' },
        choices: [
          { en: 'For jobs and freedom for all Americans', es: 'Por trabajo y libertad para todos', fa: 'برای کار و آزادی همهٔ امریکایی‌ها' },
          { en: 'To welcome soldiers home from a war', es: 'Para recibir a soldados de una guerra', fa: 'برای استقبال سربازان از جنگ' },
          { en: 'To ask for lower taxes on new cars', es: 'Para pedir menos impuestos a los carros', fa: 'برای خواستن مالیهٔ کمتر بر موترهای نو' },
          { en: 'To watch a parade for a new president', es: 'Para ver un desfile por un presidente nuevo', fa: 'برای دیدن رسم‌گذشت یک رئیس‌جمهور نو' }],
        answer: 0,
        why: { en: 'It was the March on Washington for Jobs and Freedom. Dr. King spoke of his dream there.', es: 'Fue la Marcha sobre Washington por Trabajo y Libertad. Allí el Dr. King habló de su sueño.', fa: 'این راهپیمایی واشنگتن برای کار و آزادی بود. آنجا داکتر کینگ از رؤیایش گفت.' } },
      { q: { en: 'What did the Civil Rights Act of 1964 do?', es: '¿Qué hizo la Ley de Derechos Civiles de 1964?', fa: 'قانون حقوق مدنی ۱۹۶۴ چه کرد؟' },
        choices: [
          { en: 'Banned segregation in public places and jobs', es: 'Prohibió la segregación en lugares públicos y empleos', fa: 'جدا سازی را در جاهای عمومی و کار منع کرد' },
          { en: 'Gave every worker a raise in pay each year', es: 'Dio a cada trabajador un aumento cada año', fa: 'به هر کارگر هر سال مزد بیشتر داد' },
          { en: 'Let each state keep its own segregation laws', es: 'Dejó a cada estado sus propias leyes de segregación', fa: 'گذاشت هر ایالت قانون‌های جدا سازی خود را نگه دارد' },
          { en: 'Built new highways between all big cities', es: 'Construyó carreteras nuevas entre las ciudades grandes', fa: 'سرک‌های نو میان همهٔ شهرهای بزرگ ساخت' }],
        answer: 0,
        why: { en: 'It ended segregation in hotels, restaurants and other public places. It banned job discrimination too.', es: 'Terminó la segregación en hoteles, restaurantes y otros lugares públicos. También prohibió la discriminación en el empleo.', fa: 'جدا سازی را در هوتل، رستورانت و جاهای عمومی دیگر پایان داد. تبعیض در کار را هم منع کرد.' } },
      { q: { en: 'Which two changes protected the right to vote?', es: '¿Qué dos cambios protegieron el derecho al voto?', fa: 'کدام دو تغییر از حق رأی حفاظت کرد؟' },
        choices: [
          { en: 'The 24th Amendment and Voting Rights Act', es: 'La Enmienda 24 y la Ley de Derecho al Voto', fa: 'تعدیل بیست و چهارم و قانون حق رأی' },
          { en: 'Brown v. Board and Loving v. Virginia', es: 'Brown contra la Junta y Loving contra Virginia', fa: 'براون علیه بورد و لاوینگ علیه ویرجینیا' },
          { en: 'The Equal Pay Act and Title IX of 1972', es: 'La Ley de Igualdad Salarial y el Título IX', fa: 'قانون مزد برابر و مادهٔ نهم ۱۹۷۲' },
          { en: 'Browder v. Gayle and Brown v. Board', es: 'Browder contra Gayle y Brown contra la Junta', fa: 'براودر علیه گیل و براون علیه بورد' }],
        answer: 0,
        why: { en: 'The 24th Amendment banned poll taxes. The Voting Rights Act ended literacy tests.', es: 'La Enmienda 24 prohibió el impuesto al voto. La Ley de Derecho al Voto terminó las pruebas de alfabetización.', fa: 'تعدیل بیست و چهارم مالیهٔ رأی را منع کرد. قانون حق رأی امتحان‌های سواد را پایان داد.' } },
      { q: { en: 'What did César Chávez and Dolores Huerta do?', es: '¿Qué hicieron César Chávez y Dolores Huerta?', fa: 'سزار چاوز و دولورس هوئرتا چه کردند؟' },
        choices: [
          { en: 'Led farm workers in a nonviolent union', es: 'Guiaron a campesinos en un sindicato pacífico', fa: 'کارگران زراعتی را در یک اتحادیهٔ آرام رهبری کردند' },
          { en: 'Wrote the first laws for car factories', es: 'Escribieron las primeras leyes de las fábricas', fa: 'اولین قانون‌های فابریکه‌های موتر را نوشتند' },
          { en: 'Argued Brown v. Board in the Supreme Court', es: 'Defendieron el caso Brown en la Corte Suprema', fa: 'از دعوای براون در ستره محکمه دفاع کردند' },
          { en: 'Built the buses that came to the march', es: 'Fabricaron los autobuses que vinieron a la marcha', fa: 'بس‌هایی را ساختند که به راهپیمایی آمد' }],
        answer: 0,
        why: { en: 'They built a farm workers\' union. From 1965, they led the Delano grape strike and boycott.', es: 'Formaron un sindicato de campesinos. Desde 1965, dirigieron la huelga y el boicot de la uva de Delano.', fa: 'آن‌ها اتحادیهٔ کارگران زراعتی ساختند. از ۱۹۶۵، اعتصاب و تحریم انگور دیلانو را رهبری کردند.' } },
      { q: { en: 'What did Loving v. Virginia decide in 1967?', es: '¿Qué decidió el caso Loving contra Virginia en 1967?', fa: 'فیصلهٔ لاوینگ علیه ویرجینیا در ۱۹۶۷ چه بود؟' },
        choices: [
          { en: 'States could not ban marriage between races', es: 'Los estados no podían prohibir el matrimonio entre razas', fa: 'ایالت‌ها نمی‌توانستند ازدواج میان نژادها را منع کنند' },
          { en: 'Virginia could keep its public schools closed', es: 'Virginia podía mantener cerradas sus escuelas', fa: 'ویرجینیا می‌توانست مکتب‌هایش را بسته نگه دارد' },
          { en: 'Every couple must marry inside a church', es: 'Cada pareja debía casarse en una iglesia', fa: 'هر جوره باید در کلیسا ازدواج کند' },
          { en: 'Only judges in Virginia could marry people', es: 'Solo los jueces de Virginia podían casar a la gente', fa: 'فقط قاضیان ویرجینیا می‌توانستند نکاح ببندند' }],
        answer: 0,
        why: { en: 'Richard and Mildred Loving of Virginia won. The Court struck down laws against interracial marriage.', es: 'Richard y Mildred Loving, de Virginia, ganaron. La Corte anuló las leyes contra el matrimonio interracial.', fa: 'ریچارد و میلدرد لاوینگ از ویرجینیا پیروز شدند. محکمه قانون‌های ضد ازدواج میان نژادها را لغو کرد.' } }
    ]
  },

  learned: [
    { en: 'In 1954, Brown v. Board ended legal school [[segregation|segregation]]. Virginia answered with [[massive resistance|Massive Resistance]] and closed schools.', es: 'En 1954, el caso Brown terminó la [[segregation|segregación]] escolar legal. Virginia respondió con la [[massive resistance|Resistencia Masiva]] y cerró escuelas.', fa: 'در ۱۹۵۴، فیصلهٔ براون [[segregation|جدا سازی]] قانونی مکتب‌ها را پایان داد. ویرجینیا با [[massive resistance|مقاومت گسترده]] جواب داد و مکتب‌ها را بست.' },
    { en: 'With [[boycott|boycotts]], [[sit-in|sit-ins]] and the 1963 March, people used [[nonviolence|nonviolence]] to demand jobs and freedom.', es: 'Con [[boycott|boicots]], [[sit-in|sentadas]] y la Marcha de 1963, la gente usó la [[nonviolence|no violencia]] para exigir trabajo y libertad.', fa: 'با [[boycott|تحریم‌ها]]، [[sit-in|تحصن‌ها]] و راهپیمایی ۱۹۶۳، مردم با [[nonviolence|عدم خشونت]] کار و آزادی خواستند.' },
    { en: 'New laws followed: the Civil Rights Act, the Voting Rights Act, the 24th Amendment and equal pay. [[union|Unions]] fought for workers.', es: 'Llegaron leyes nuevas: la Ley de Derechos Civiles, la Ley de Derecho al Voto, la Enmienda 24 y el pago igual. Los [[union|sindicatos]] lucharon por los trabajadores.', fa: 'قانون‌های نو آمد: قانون حقوق مدنی، قانون حق رأی، تعدیل بیست و چهارم و مزد برابر. [[union|اتحادیه‌ها]] برای کارگران مبارزه کردند.' }
  ],
  reflect: {
    q: { en: 'Marchers worked peacefully to change unfair laws. What is one unfair thing you would work to change? How?', es: 'Los manifestantes trabajaron en paz para cambiar leyes injustas. ¿Qué cosa injusta trabajarías para cambiar? ¿Cómo?', fa: 'راهپیمایان با آرامی برای تغییر قانون‌های ناعادلانه کار کردند. تو برای تغییر کدام چیز ناعادلانه کار می‌کنی؟ چطور؟' },
    starter: { en: 'One unfair thing I would work to change is', es: 'Una cosa injusta que trabajaría para cambiar es', fa: 'یک چیز ناعادلانه که برای تغییرش کار می‌کنم' }
  }
};
