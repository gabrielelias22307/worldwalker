/* CIVICWALKER · Episode 7.3 · Judicial Cases and Legacies (landmark Supreme Court cases)
   Washington, DC, today. North half: the Supreme Court building (D, marble), with its plaza (l) and two fountains (O)
   on the west side, facing First Street (the street on the west edge) and the Capitol grounds (the park, far west).
   East: Second Street and the row houses of Capitol Hill. Across the middle runs East Capitol Street.
   South: the Library of Congress (J over h, door on its south side), a garden, the bus stop on First Street.
   The charter stone asks the student to carry each case card to the right it protects. */
window.EPISODE = {
  id: '7.3',
  realm: 7,
  sol: 'GOVT',
  title: { en: 'Cases That Changed Rights', es: 'Casos que cambiaron los derechos', fa: 'دعواهایی که حقوق را تغییر دادند' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'The Supreme Court, today', es: 'La Corte Suprema, hoy', fa: 'ستره محکمه، امروز' },
  intro: [
    { en: 'The Grump tore the page about famous court cases. People forget their rights!',
      es: 'El Gruñón rompió la página de los casos famosos. ¡La gente olvida sus derechos!',
      fa: 'غرغرو صفحهٔ دعواهای مشهور محکمه را پاره کرد. مردم حقوق خود را فراموش می‌کنند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-77.004, 38.891],
    start: [
      { en: 'The Supreme Court is the highest court in the United States.',
        es: 'La Corte Suprema es el tribunal más alto de Estados Unidos.',
        fa: 'ستره محکمه بالاترین محکمه در امریکا است.' },
      { en: 'Its white marble building stands in Washington, DC, across from the Capitol.',
        es: 'Su edificio de mármol blanco está en Washington, DC, frente al Capitolio.',
        fa: 'ساختمان مرمر سفید آن در واشنگتن دی سی، روبروی کاپیتول است.' },
      { en: 'Over its front doors are carved the words: Equal Justice Under Law.',
        es: 'Sobre sus puertas están grabadas las palabras: Justicia igual bajo la ley.',
        fa: 'بالای دروازه‌های آن این کلمه‌ها کنده شده: عدالت برابر زیر قانون.' }
    ],
    page: { en: 'A ruling of the Court can change rights for the whole country.',
      es: 'Una decisión de la Corte puede cambiar los derechos de todo el país.',
      fa: 'یک حکم ستره محکمه می‌تواند حقوق تمام کشور را تغییر دهد.' },
    guess: {
      q: { en: 'How many justices sit on the Supreme Court?', es: '¿Cuántos jueces tiene la Corte Suprema?', fa: 'ستره محکمه چند قاضی دارد؟' },
      choices: [
        { t: { en: '⚖️ Nine', es: '⚖️ Nueve', fa: '⚖️ نُه' }, ok: true },
        { t: { en: '⚖️ Twelve', es: '⚖️ Doce', fa: '⚖️ دوازده' } }
      ],
      why: { en: 'There are nine justices. Congress set that number in 1869.', es: 'Hay nueve jueces. El Congreso fijó ese número en 1869.', fa: 'نُه قاضی هست. کانگرس این تعداد را در ۱۸۶۹ تعیین کرد.' }
    },
    next: {
      q: { en: 'Next: London. In Britain, who chooses the leader, the Prime Minister?', es: 'Ahora: Londres. En Gran Bretaña, ¿quién elige al líder, el Primer Ministro?', fa: 'بعدی: لندن. در بریتانیا، کی رهبر، یعنی صدراعظم، را انتخاب می‌کند؟' },
      choices: [
        { t: { en: 'The lawmakers in Parliament', es: 'Los legisladores del Parlamento', fa: 'قانون‌سازان در پارلمان' }, ok: true },
        { t: { en: 'All voters, in one vote', es: 'Todos los votantes, en una votación', fa: 'همهٔ رأی‌دهندگان، در یک رأی‌گیری' } }
      ],
      why: { en: 'Voters elect Parliament. The leader of the biggest party in Parliament usually becomes Prime Minister.', es: 'Los votantes eligen el Parlamento. El líder del partido más grande allí casi siempre es Primer Ministro.', fa: 'مردم پارلمان را انتخاب می‌کنند. رهبر بزرگ‌ترین حزب پارلمان معمولاً صدراعظم می‌شود.' }
    }
  },
  /* houses: three row houses on Capitol Hill (east) and the Library of Congress (south) */
  houses: [
    { at: [28, 2], name: { en: 'Grandma June', es: 'Abuela June', fa: 'مادرکلان جون' },
      look: { skin: 5, hair: '#e0e0e0', shirt: '#8a4fa3', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'I grew up right here in Washington, DC.', es: 'Crecí aquí mismo, en Washington, DC.', fa: 'من همین‌جا در واشنگتن دی سی کلان شدم.' },
        { en: 'When I was small, Black and white children had separate schools.', es: 'Cuando era niña, los niños negros y blancos tenían escuelas separadas.', fa: 'وقتی خورد بودم، کودکان سیاه‌پوست و سفیدپوست مکتب‌های جدا داشتند.' },
        { en: 'In 1954, the Court said that was wrong. Our schools began to change.', es: 'En 1954, la Corte dijo que eso estaba mal. Nuestras escuelas empezaron a cambiar.', fa: 'در ۱۹۵۴، ستره محکمه گفت این غلط است. مکتب‌های ما شروع به تغییر کردند.' }
      ] },
    { at: [28, 7], name: { en: 'Mr. Kim', es: 'Sr. Kim', fa: 'آقای کیم' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I write for a newspaper. The 1st Amendment protects a free press.', es: 'Escribo para un periódico. La Primera Enmienda protege la libertad de prensa.', fa: 'من برای یک روزنامه می‌نویسم. متمم اول از آزادی مطبوعات محافظت می‌کند.' },
        { en: 'In 1971, the government tried to stop papers from printing secret war reports.', es: 'En 1971, el gobierno quiso impedir que los periódicos publicaran informes secretos de guerra.', fa: 'در ۱۹۷۱، حکومت خواست جلوی چاپ گزارش‌های پنهانی جنگ را در روزنامه‌ها بگیرد.' },
        { en: 'The Court said no. The newspapers could print them.', es: 'La Corte dijo que no. Los periódicos podían publicarlos.', fa: 'ستره محکمه گفت نه. روزنامه‌ها می‌توانستند آن‌ها را چاپ کنند.' }
      ] },
    { at: [28, 13], name: { en: 'Dani', es: 'Dani', fa: 'دانی' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#d9542b', pants: '#2a4a3a', style: 'long' },
      lines: [
        { en: 'My mom is a public defender. That is a free lawyer.', es: 'Mi mamá es defensora pública. Es una abogada gratis.', fa: 'مادرم وکیل مدافع دولتی است. یعنی یک وکیل مجانی.' },
        { en: 'She helps people accused of crimes who cannot pay a lawyer.', es: 'Ayuda a personas acusadas de delitos que no pueden pagar un abogado.', fa: 'او به کسانی کمک می‌کند که متهم به جرم هستند و پول وکیل ندارند.' },
        { en: 'She says a man named Gideon made a free lawyer a right.', es: 'Dice que un hombre llamado Gideon hizo del abogado gratis un derecho.', fa: 'او می‌گوید مردی به نام گیدیون وکیل مجانی را یک حق ساخت.' }
      ] },
    { at: [16, 16], name: { en: 'Mr. Ade', es: 'Sr. Ade', fa: 'آقای آده' },
      look: { skin: 4, hair: '#120c08', shirt: '#e0c060', pants: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'I come to this reading room to study old court cases.', es: 'Vengo a esta sala de lectura a estudiar casos viejos de la Corte.', fa: 'من به این اتاق مطالعه می‌آیم تا دعواهای قدیم محکمه را بخوانم.' },
        { en: 'Each ruling has a majority opinion. It explains the decision.', es: 'Cada decisión tiene una opinión de la mayoría. Explica la decisión.', fa: 'هر حکم یک نظر اکثریت دارد. آن تصمیم را توضیح می‌دهد.' },
        { en: 'I read the dissents too. Sometimes a dissent wins, years later.', es: 'También leo los votos en contra. A veces uno gana, años después.', fa: 'نظرهای مخالف را هم می‌خوانم. گاهی یک نظر مخالف، سال‌ها بعد، برنده می‌شود.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North is up.
     x 1-2: the Capitol grounds (park). x 3-4: First Street. y 2-8: the plaza (l) with two fountains (O), then the
     Supreme Court building (D), x 15-24. x 25-26: Second Street. x 27-30: row houses (R over h).
     y 10-11: East Capitol Street. South: the bus stop sign (x) on First Street, the Library of Congress (J over h,
     door at 16,16), a garden, and a row house in the south-east. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.Tll..T....T.......,,...llRRR.T',
    'T..lllOllllllllDDDDDDDDDDllhdh.T',
    'TT.lllllllllllxDDDDDDDDDDll....T',
    'T..lllllllllllxDDDDDDDDDDll....T',
    'T..lllllllllllllDDDDDDDDDll....T',
    'T.TlllllllllllllDDDDDDDDDllRRR.T',
    'T..lllllllllllllDDDDDDDDDllhdh.T',
    'T..lllOllllllllDDDDDDDDDDll....T',
    'TT.ll..T.....T....T....T.ll..T.T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T..ll....................llRRR.T',
    'TT.llx....JJJJJJJJJJJJJ..llhdh.T',
    'T..ll.....JJJJJJJJJJJJJ..ll....T',
    'T.Tll.....JJJJJJJJJJJJJ..ll....T',
    'T..ll.....hhhhhhdhhhhhh..ll....T',
    'TT.ll..........................T',
    'T..ll..T........,,,............T',
    'T..ll....T...........T.........T',
    'T..ll..........................T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [8, 5],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 9], at: [20, 12], decor: 'gem',
      clue: { en: 'From this note, walk 3 steps south, across East Capitol Street.', es: 'Desde esta nota, camina 3 pasos al sur, cruzando East Capitol Street.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، آن طرف سرک ایست کاپیتول.' },
      text: { en: 'A chip of white marble! The Court building opened in 1935. Before, the Court met inside the Capitol.', es: '¡Un trocito de mármol blanco! El edificio abrió en 1935. Antes, la Corte se reunía en el Capitolio.', fa: 'یک تکهٔ مرمر سفید! این ساختمان در ۱۹۳۵ باز شد. پیش از آن، محکمه در کاپیتول جلسه می‌کرد.' } },
    { clueAt: [9, 20], at: [5, 20], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps west, toward First Street.', es: 'Desde esta nota, camina 4 pasos al oeste, hacia First Street.', fa: 'از این یادداشت، ۴ قدم به غرب برو، طرف سرک فرست.' },
      text: { en: 'An old quill pen! The Library of Congress is one of the biggest libraries in the world.', es: '¡Una vieja pluma de ave! La Biblioteca del Congreso es una de las más grandes del mundo.', fa: 'یک قلم پَر کهنه! کتابخانهٔ کانگرس یکی از بزرگ‌ترین کتابخانه‌های جهان است.' } }
  ],

  words: {
    justice: { en: 'one of the nine judges of the Supreme Court', es: 'uno de los nueve jueces de la Corte Suprema', fa: 'یکی از نُه قاضی ستره محکمه' },
    'majority opinion': { en: 'the written decision of most of the justices, and their reasons', es: 'la decisión escrita de la mayoría de los jueces, con sus razones', fa: 'تصمیم نوشته‌شدهٔ بیشتر قاضی‌ها، با دلیل‌های آن‌ها' },
    dissent: { en: 'a written opinion by justices who disagree with the majority', es: 'una opinión escrita de los jueces que no están de acuerdo con la mayoría', fa: 'نظر نوشته‌شدهٔ قاضی‌هایی که با اکثریت موافق نیستند' },
    precedent: { en: 'an earlier ruling that courts follow in similar cases', es: 'una decisión anterior que los tribunales siguen en casos parecidos', fa: 'یک حکم قبلی که محکمه‌ها در دعواهای مشابه از آن پیروی می‌کنند' },
    overturn: { en: 'to cancel an earlier ruling with a new one', es: 'anular una decisión anterior con una nueva', fa: 'لغو کردن یک حکم قبلی با یک حکم نو' },
    warrant: { en: 'a paper from a judge that allows a search or an arrest', es: 'un papel de un juez que permite un registro o un arresto', fa: 'کاغذی از قاضی که اجازهٔ تلاشی یا گرفتاری را می‌دهد' },
    evidence: { en: 'things that help prove what happened, like a photo or a weapon', es: 'cosas que ayudan a probar lo que pasó, como una foto o un arma', fa: 'چیزهایی که کمک می‌کنند ثابت شود چه شده، مثل عکس یا سلاح' },
    'public defender': { en: 'a lawyer paid by the government for people who cannot pay', es: 'un abogado pagado por el gobierno para quien no puede pagar', fa: 'وکیلی که حکومت پولش را می‌دهد، برای کسانی که پول ندارند' },
    'symbolic speech': { en: 'showing an idea with an action or a thing, not words', es: 'mostrar una idea con una acción o un objeto, no con palabras', fa: 'نشان دادن یک فکر با یک کار یا یک چیز، نه با کلمه' },
    segregation: { en: 'keeping people apart by race, by law or by custom', es: 'separar a las personas por su raza, por ley o por costumbre', fa: 'جدا نگه داشتن مردم به خاطر نژاد، با قانون یا با رسم' },
    'equal protection': { en: 'the 14th Amendment: the law must treat all people equally', es: 'la Enmienda 14: la ley debe tratar a todas las personas por igual', fa: 'متمم چهاردهم: قانون باید با همهٔ مردم برابر رفتار کند' }
  },

  npcs: [
    {
      x: 10, y: 4,
      name: { en: 'Ms. Ruiz', es: 'Sra. Ruiz', fa: 'خانم رویز' },
      role: { en: 'Tour guide', es: 'Guía de turistas', fa: 'رهنمای سیاحان' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f8f8f', pants: '#2a2a3a', hat: '#e0a020', style: 'bun' },
      lines: [
        { en: 'Welcome to the Supreme Court! Nine [[justice|justices]] decide cases here.', es: '¡Bienvenidos a la Corte Suprema! Aquí nueve [[justice|jueces]] deciden casos.', fa: 'به ستره محکمه خوش آمدید! اینجا نُه [[justice|قاضی]] در دعواها تصمیم می‌گیرند.' },
        { en: 'Each justice votes. The side with the most votes wins.', es: 'Cada juez vota. El lado con más votos gana.', fa: 'هر قاضی رأی می‌دهد. طرفی که رأی بیشتر دارد برنده است.' },
        { en: 'The winning side writes the [[majority opinion|majority opinion]], with its reasons.', es: 'El lado ganador escribe la [[majority opinion|opinión de la mayoría]], con sus razones.', fa: 'طرف برنده [[majority opinion|نظر اکثریت]] را با دلیل‌هایش می‌نویسد.' },
        { en: 'Justices who disagree can write a [[dissent|dissent]]. It explains why.', es: 'Los jueces que no están de acuerdo pueden escribir un [[dissent|voto en contra]].', fa: 'قاضی‌هایی که موافق نیستند می‌توانند [[dissent|نظر مخالف]] بنویسند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Five justices agree, and four do not. What can the four write?', es: 'Cinco jueces están de acuerdo y cuatro no. ¿Qué pueden escribir los cuatro?', fa: 'پنج قاضی موافق‌اند و چهار نفر نه. آن چهار نفر چه می‌توانند بنویسند؟' },
        choices: [
          { ok: true, t: { en: 'A dissent, with their reasons', es: 'Un voto en contra, con sus razones', fa: 'نظر مخالف، با دلیل‌های خود' },
            why: { en: 'Yes! A dissent explains why some justices disagree. Later courts can read it.', es: '¡Sí! Un voto en contra explica por qué algunos jueces no están de acuerdo.', fa: 'بله! نظر مخالف می‌گوید چرا بعضی قاضی‌ها موافق نیستند. محکمه‌های بعدی آن را می‌خوانند.' } },
          { t: { en: 'A veto, to stop the ruling', es: 'Un veto, para frenar la decisión', fa: 'ویتو، برای بند کردن حکم' },
            why: { en: 'No. Justices do not veto. The majority wins, and the ruling stands.', es: 'No. Los jueces no vetan. La mayoría gana y la decisión queda.', fa: 'نه. قاضی‌ها ویتو نمی‌کنند. اکثریت برنده است و حکم می‌ماند.' } },
          { t: { en: 'A new law to replace the ruling', es: 'Una ley nueva para cambiar la decisión', fa: 'یک قانون نو به جای حکم' },
            why: { en: 'No. Congress makes laws. Justices write opinions about cases.', es: 'No. El Congreso hace las leyes. Los jueces escriben opiniones sobre casos.', fa: 'نه. کانگرس قانون می‌سازد. قاضی‌ها دربارهٔ دعواها نظر می‌نویسند.' } }
        ]
      }
    },
    {
      x: 22, y: 9,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Court reporter', es: 'Reportera de la Corte', fa: 'خبرنگار محکمه' },
      look: { skin: 0, hair: '#c8a060', shirt: '#a33a3a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'I write news about the cases decided here.', es: 'Escribo noticias sobre los casos que se deciden aquí.', fa: 'من دربارهٔ دعواهایی که اینجا حل می‌شوند خبر می‌نویسم.' },
        { en: 'My favorite is Miranda v. Arizona, from 1966.', es: 'Mi favorito es Miranda contra Arizona, de 1966.', fa: 'دعوای دلخواه من میراندا علیه ایالت اریزونا است، از ۱۹۶۶.' },
        { en: 'Police questioned Ernesto Miranda. Nobody told him his rights.', es: 'La policía interrogó a Ernesto Miranda. Nadie le dijo sus derechos.', fa: 'پولیس از ارنستو میراندا سوال کرد. کسی حقوقش را به او نگفت.' },
        { en: 'Now police must say: you can stay silent and have a lawyer.', es: 'Ahora la policía debe decir: puedes callarte y tener un abogado.', fa: 'حالا پولیس باید بگوید: می‌توانی خاموش بمانی و وکیل داشته باشی.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Police arrest a woman. Before they question her, what must they tell her?', es: 'La policía arresta a una mujer. Antes de interrogarla, ¿qué debe decirle?', fa: 'پولیس یک زن را گرفتار می‌کند. پیش از سوال کردن، باید به او چه بگوید؟' },
        choices: [
          { ok: true, t: { en: 'She may stay silent and get a lawyer', es: 'Puede callarse y tener un abogado', fa: 'می‌تواند خاموش بماند و وکیل بگیرد' },
            why: { en: 'Yes! Since Miranda, police must tell suspects these rights before questioning.', es: '¡Sí! Desde Miranda, la policía debe decir estos derechos antes de interrogar.', fa: 'بله! از زمان میراندا، پولیس باید پیش از سوال این حقوق را بگوید.' } },
          { t: { en: 'She must answer every question right away', es: 'Debe contestar todas las preguntas enseguida', fa: 'باید فوراً به هر سوال جواب بدهد' },
            why: { en: 'No. The 5th Amendment says you do not have to speak against yourself.', es: 'No. La Quinta Enmienda dice que no tienes que hablar en tu contra.', fa: 'نه. متمم پنجم می‌گوید لازم نیست علیه خودت گپ بزنی.' } },
          { t: { en: 'She will never see a judge or a jury', es: 'Nunca verá a un juez ni a un jurado', fa: 'هرگز قاضی یا هیئت منصفه را نمی‌بیند' },
            why: { en: 'No. People accused of crimes have the right to a fair trial.', es: 'No. Las personas acusadas tienen derecho a un juicio justo.', fa: 'نه. کسانی که متهم هستند حق محاکمهٔ عادلانه دارند.' } }
        ]
      }
    },
    {
      x: 7, y: 15,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Law student', es: 'Estudiante de derecho', fa: 'محصل حقوق' },
      look: { skin: 3, hair: '#120c08', shirt: '#4a7a3a', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'In law school, we study [[precedent|precedent]]: earlier rulings that courts follow.', es: 'En la facultad de derecho estudiamos el [[precedent|precedente]]: decisiones anteriores que se siguen.', fa: 'در پوهنځی حقوق، [[precedent|سابقهٔ قضایی]] را می‌خوانیم: حکم‌های قبلی که محکمه‌ها پیروی می‌کنند.' },
        { en: 'Lawyers call it stare decisis. It means: stand by what was decided.', es: 'Los abogados lo llaman stare decisis. Significa: respetar lo ya decidido.', fa: 'وکیل‌ها آن را «ستاره دسیسیس» می‌گویند. یعنی: به تصمیم قبلی پابند باش.' },
        { en: 'But the Court can [[overturn|overturn]] its own old rulings.', es: 'Pero la Corte puede [[overturn|anular]] sus propias decisiones viejas.', fa: 'اما ستره محکمه می‌تواند حکم‌های قدیم خودش را [[overturn|لغو کند]].' },
        { en: 'In 1954, Brown v. Board overturned Plessy v. Ferguson, from 1896.', es: 'En 1954, Brown contra la Junta anuló Plessy contra Ferguson, de 1896.', fa: 'در ۱۹۵۴، دعوای براون حکم پلسی علیه فرگوسن از ۱۸۹۶ را لغو کرد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'In 1954, Brown v. Board of Education overturned an older case. Which one?', es: 'En 1954, Brown contra la Junta de Educación anuló un caso viejo. ¿Cuál?', fa: 'در ۱۹۵۴، دعوای براون علیه بورد تعلیمات یک دعوای قدیم را لغو کرد. کدام؟' },
        choices: [
          { ok: true, t: { en: 'Plessy v. Ferguson, 1896', es: 'Plessy contra Ferguson, 1896', fa: 'پلسی علیه فرگوسن، ۱۸۹۶' },
            why: { en: 'Yes! Plessy allowed "separate but equal." Brown said separate schools are not equal.', es: '¡Sí! Plessy permitía "separados pero iguales". Brown dijo que las escuelas separadas no son iguales.', fa: 'بله! پلسی «جدا اما برابر» را اجازه می‌داد. براون گفت مکتب‌های جدا برابر نیستند.' } },
          { t: { en: 'Miranda v. Arizona, 1966', es: 'Miranda contra Arizona, 1966', fa: 'میراندا علیه اریزونا، ۱۹۶۶' },
            why: { en: 'No. Miranda came 12 years after Brown. A ruling cannot overturn a later one.', es: 'No. Miranda llegó 12 años después de Brown. No se puede anular un caso futuro.', fa: 'نه. میراندا ۱۲ سال بعد از براون آمد. حکم نمی‌تواند حکم بعدی را لغو کند.' } },
          { t: { en: 'Tinker v. Des Moines, 1969', es: 'Tinker contra Des Moines, 1969', fa: 'تینکر علیه دی موین، ۱۹۶۹' },
            why: { en: 'No. Tinker came after Brown, and it was about student speech.', es: 'No. Tinker llegó después de Brown y trataba de la expresión de los estudiantes.', fa: 'نه. تینکر بعد از براون آمد و دربارهٔ آزادی بیان شاگردان بود.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 14, y: 3, text: { en: 'THE SUPREME COURT · Over the doors: EQUAL JUSTICE UNDER LAW.', es: 'LA CORTE SUPREMA · Sobre las puertas: JUSTICIA IGUAL BAJO LA LEY.', fa: 'ستره محکمه · بالای دروازه‌ها: عدالت برابر زیر قانون.' } },
    { x: 14, y: 4, text: { en: 'Visitors may sit in and watch a case. The courtroom is open to the public.', es: 'Los visitantes pueden entrar a ver un caso. La sala está abierta al público.', fa: 'بازدیدکنندگان می‌توانند بنشینند و یک دعوا را ببینند. اتاق محکمه برای مردم باز است.' } },
    { x: 5, y: 13, text: { en: 'BUS STOP · First Street · Library of Congress and the Supreme Court.', es: 'PARADA DE BUS · First Street · Biblioteca del Congreso y Corte Suprema.', fa: 'ایستگاه بس · سرک فرست · کتابخانهٔ کانگرس و ستره محکمه.' } }
  ],

  /* the quest: Ana (gold !) on the plaza -> Ms. Park the librarian, south across East Capitol Street
     -> trade with Mr. Diallo at the bus stop on First Street: bring him a pencil -> back to Ana */
  quest: {
    stat: 'hei',
    title: { en: 'Gideon\'s Pencil Letter', es: 'La carta a lápiz de Gideon', fa: 'نامهٔ پنسلی گیدیون' },
    giver: {
      x: 12, y: 8,
      name: { en: 'Ana', es: 'Ana', fa: 'آنا' },
      role: { en: 'Visiting mom', es: 'Mamá de visita', fa: 'مادر مهمان' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#d98a2b', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'We came from Texas to see the Court! My son loves one case.', es: '¡Vinimos de Texas a ver la Corte! Mi hijo ama un caso.', fa: 'ما از تکزاس آمدیم تا ستره محکمه را ببینیم! پسرم یک دعوا را خیلی دوست دارد.' },
        { en: 'It is Gideon. He wants a copy of Gideon\'s letter to the Court.', es: 'Es el de Gideon. Quiere una copia de la carta de Gideon a la Corte.', fa: 'دعوای گیدیون. او یک کاپی از نامهٔ گیدیون به ستره محکمه می‌خواهد.' },
        { en: 'Please ask the librarian at the Library of Congress.', es: 'Por favor, pregúntale a la bibliotecaria de la Biblioteca del Congreso.', fa: 'لطفاً از کتابدار کتابخانهٔ کانگرس بپرس.' }
      ],
      wait: { en: 'The librarian is by the Library of Congress, south across East Capitol Street.', es: 'La bibliotecaria está junto a la Biblioteca, al sur, cruzando East Capitol Street.', fa: 'کتابدار کنار کتابخانهٔ کانگرس است، در جنوب، آن طرف سرک ایست کاپیتول.' },
      thanks: { en: 'Gideon\'s letter! My son will love it. Thank you, friend!', es: '¡La carta de Gideon! A mi hijo le va a encantar. ¡Gracias, amigo!', fa: 'نامهٔ گیدیون! پسرم خیلی خوش می‌شود. تشکر، دوست من!' }
    },
    contact: {
      x: 19, y: 17,
      name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 1, hair: '#1a1a1a', shirt: '#6a4a8a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Gideon wrote to the Court from a Florida prison. Our copies are gone today.', es: 'Gideon escribió a la Corte desde una cárcel de Florida. Hoy no quedan copias.', fa: 'گیدیون از یک زندان در فلوریدا به ستره محکمه نامه نوشت. امروز کاپی‌های ما تمام شده.' },
        { en: 'A teacher with spare copies waits at the bus stop, west on First Street.', es: 'Un maestro con copias extra espera en la parada de bus, al oeste, en First Street.', fa: 'یک معلم با کاپی‌های اضافه در ایستگاه بس، در غرب، در سرک فرست منتظر است.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 5, y: 14,
        name: { en: 'Mr. Diallo', es: 'Sr. Diallo', fa: 'آقای دیالو' },
        role: { en: 'Teacher', es: 'Maestro', fa: 'معلم' },
        look: { skin: 5, hair: '#120c08', shirt: '#2f5f9a', pants: '#2a2a2a', style: 'short' },
        lines: [
          { en: 'Hello! I am making a class display about Gideon.', es: '¡Hola! Estoy haciendo una exhibición para mi clase sobre Gideon.', fa: 'سلام! من برای صنفم یک نمایشگاه دربارهٔ گیدیون می‌سازم.' },
          { en: 'I have a spare copy of his letter. But my display needs one more thing.', es: 'Tengo una copia extra de su carta. Pero a mi exhibición le falta algo.', fa: 'یک کاپی اضافه از نامه‌اش دارم. اما نمایشگاهم یک چیز دیگر کم دارد.' }
        ]
      },
      q: { en: 'Bring me what Gideon used to write his letter in prison. Then the copy is yours!', es: 'Tráeme lo que Gideon usó para escribir su carta en la cárcel. ¡Y la copia es tuya!', fa: 'چیزی را بیاور که گیدیون در زندان با آن نامه‌اش را نوشت. بعد کاپی مال توست!' },
      choices: [
        { ok: true, at: [12, 19], icon: '✏️', t: { en: 'A plain pencil', es: 'Un lápiz sencillo', fa: 'یک پنسل ساده' },
          why: { en: 'Yes! Gideon wrote to the Court by hand, in pencil, on prison paper.', es: '¡Sí! Gideon escribió a la Corte a mano, con lápiz, en papel de la cárcel.', fa: 'بله! گیدیون با دست، با پنسل، روی کاغذ زندان به ستره محکمه نوشت.' } },
        { at: [30, 8], icon: '🖊️', t: { en: 'A lawyer\'s fancy pen', es: 'La pluma elegante de un abogado', fa: 'قلم قیمتی یک وکیل' },
          why: { en: 'No. Gideon had no lawyer and no money. He wrote with a pencil.', es: 'No. Gideon no tenía abogado ni dinero. Escribió con un lápiz.', fa: 'نه. گیدیون نه وکیل داشت نه پول. او با پنسل نوشت.' } },
        { at: [24, 13], icon: '💻', t: { en: 'A small laptop computer', es: 'Una computadora portátil', fa: 'یک کمپیوتر کوچک' },
          why: { en: 'No. That was long ago. Prisoners had no computers. Gideon wrote in pencil.', es: 'No. Eso fue hace mucho. Los presos no tenían computadoras. Gideon usó un lápiz.', fa: 'نه. آن زمان خیلی پیش بود. زندانی‌ها کمپیوتر نداشتند. گیدیون با پنسل نوشت.' } }
      ],
      item: { icon: '📜', name: { en: 'A copy of Gideon\'s pencil letter', es: 'Una copia de la carta a lápiz de Gideon', fa: 'یک کاپی نامهٔ پنسلی گیدیون' } }
    }
  },

  scraps: [[1, 1], [30, 20], [1, 20]],
  smudges: [[20, 1], [22, 19]],

  challenge: {
    at: [9, 12],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // equal protection under the words over the doors; speech on the plaza; searches by the homes;
    // questioning on the street; a lawyer by the library
    zones: [{ bin: 'equal', x: 12, y: 5, w: 3, h: 2 }, { bin: 'speech', x: 4, y: 5, w: 3, h: 2 },
      { bin: 'search', x: 29, y: 3, w: 2, h: 3 }, { bin: 'questioned', x: 17, y: 10, w: 3, h: 2 },
      { bin: 'lawyer', x: 10, y: 17, w: 3, h: 2 }],
    stat: 'hei',
    title: { en: 'Which right?', es: '¿Qué derecho?', fa: 'کدام حق؟' },
    intro: { en: 'Carry each case card to the right it protects.',
      es: 'Lleva cada tarjeta de caso al derecho que protege.',
      fa: 'هر کارت دعوا را پیش حقی ببر که از آن محافظت می‌کند.' },
    bins: [
      { id: 'search', icon: '🔍', label: { en: '4th · searches', es: '4.ª · registros', fa: 'چهارم · تلاشی' }, sub: { en: 'no unreasonable searches', es: 'no a registros sin razón', fa: 'تلاشی بی‌دلیل ممنوع' } },
      { id: 'questioned', icon: '🚓', label: { en: '5th & 6th · rights when questioned', es: '5.ª y 6.ª · derechos al ser interrogado', fa: 'پنجم و ششم · حقوق هنگام سوال پولیس' }, sub: { en: 'stay silent, ask for a lawyer', es: 'callarse, pedir un abogado', fa: 'خاموش ماندن، خواستن وکیل' } },
      { id: 'lawyer', icon: '💼', label: { en: '6th · a lawyer', es: '6.ª · un abogado', fa: 'ششم · وکیل' }, sub: { en: 'a lawyer at trial, even if you cannot pay', es: 'un abogado en el juicio, aunque no puedas pagar', fa: 'وکیل در محاکمه، حتی اگر پول نداشته باشی' } },
      { id: 'speech', icon: '🗣️', label: { en: '1st · speech', es: '1.ª · expresión', fa: 'اول · آزادی بیان' }, sub: { en: 'share your ideas freely', es: 'compartir tus ideas con libertad', fa: 'فکرهایت را آزادانه بگو' } },
      { id: 'equal', icon: '🤝', label: { en: '14th · equal protection', es: '14.ª · protección igual', fa: 'چهاردهم · حمایت برابر' }, sub: { en: 'the law treats all people equally', es: 'la ley trata a todos por igual', fa: 'قانون با همه برابر رفتار می‌کند' } }
    ],
    items: [
      { bin: 'search', t: { en: 'Mapp v. Ohio, 1961: police searched a home with no real warrant.', es: 'Mapp contra Ohio, 1961: la policía registró una casa sin una orden real.', fa: 'مپ علیه اوهایو، ۱۹۶۱: پولیس بدون حکم واقعی یک خانه را تلاشی کرد.' },
        why: { en: 'Mapp is a 4th Amendment case. [[evidence|Evidence]] from an illegal search cannot be used in court.', es: 'Mapp es un caso de la Cuarta Enmienda. Las [[evidence|pruebas]] de un registro ilegal no sirven en el juicio.', fa: 'مپ دعوای متمم چهارم است. [[evidence|مدرک]] از تلاشی غیرقانونی در محکمه استفاده نمی‌شود.' } },
      { bin: 'search', t: { en: 'Today: police want to search an apartment. Usually a judge must sign a warrant first.', es: 'Hoy: la policía quiere registrar un apartamento. Casi siempre un juez debe firmar una orden.', fa: 'امروز: پولیس می‌خواهد یک آپارتمان را تلاشی کند. معمولاً اول قاضی باید حکم امضا کند.' },
        why: { en: 'This is about searching a home. The 4th Amendment usually needs a [[warrant|warrant]].', es: 'Esto trata de registrar una casa. La Cuarta Enmienda casi siempre pide una [[warrant|orden]].', fa: 'این دربارهٔ تلاشی خانه است. متمم چهارم معمولاً [[warrant|حکم تلاشی]] می‌خواهد.' } },
      { bin: 'questioned', t: { en: 'Miranda v. Arizona, 1966: police questioned a man without telling him his rights.', es: 'Miranda contra Arizona, 1966: la policía interrogó a un hombre sin decirle sus derechos.', fa: 'میراندا علیه اریزونا، ۱۹۶۶: پولیس از یک مرد سوال کرد و حقوقش را نگفت.' },
        why: { en: 'Miranda is about police questioning. Police must first say: stay silent, get a lawyer.', es: 'Miranda trata del interrogatorio. Primero la policía debe decir: puedes callarte y tener abogado.', fa: 'میراندا دربارهٔ سوال پولیس است. پولیس اول باید بگوید: خاموش بمان، وکیل بگیر.' } },
      { bin: 'questioned', t: { en: 'Today: an officer arrests a teen and says, "You have the right to remain silent."', es: 'Hoy: un policía arresta a un joven y dice: "Tienes derecho a guardar silencio".', fa: 'امروز: یک پولیس یک نوجوان را گرفتار می‌کند و می‌گوید: «حق داری خاموش بمانی.»' },
        why: { en: 'These are the Miranda warnings, read before police questioning. That is the 5th and 6th.', es: 'Estas son las advertencias Miranda, antes del interrogatorio. Es la Quinta y la Sexta.', fa: 'این هشدارهای میراندا است، پیش از سوال پولیس. این متمم پنجم و ششم است.' } },
      { bin: 'lawyer', t: { en: 'Gideon v. Wainwright, 1963: a poor man asked for a lawyer at his trial. The answer was no.', es: 'Gideon contra Wainwright, 1963: un hombre pobre pidió un abogado en su juicio. Le dijeron que no.', fa: 'گیدیون علیه وین‌رایت، ۱۹۶۳: یک مرد فقیر در محاکمه‌اش وکیل خواست. جواب نه بود.' },
        why: { en: 'Gideon is a 6th Amendment case. If you cannot pay, the court gives you a lawyer.', es: 'Gideon es un caso de la Sexta Enmienda. Si no puedes pagar, el tribunal te da un abogado.', fa: 'گیدیون دعوای متمم ششم است. اگر پول نداری، محکمه به تو وکیل می‌دهد.' } },
      { bin: 'speech', t: { en: 'Tinker v. Des Moines, 1969: students wore black armbands to school to protest a war.', es: 'Tinker contra Des Moines, 1969: estudiantes llevaron brazaletes negros para protestar contra una guerra.', fa: 'تینکر علیه دی موین، ۱۹۶۹: شاگردان بازوبند سیاه به مکتب بستند تا علیه یک جنگ اعتراض کنند.' },
        why: { en: 'Tinker is a 1st Amendment case. A quiet armband is [[symbolic speech|symbolic speech]], and students keep that right.', es: 'Tinker es un caso de la Primera Enmienda. Un brazalete es [[symbolic speech|expresión simbólica]], y los estudiantes la tienen.', fa: 'تینکر دعوای متمم اول است. بازوبند [[symbolic speech|بیان نمادین]] است و شاگردان این حق را دارند.' } },
      { bin: 'speech', t: { en: 'Today: a student writes to the city newspaper about a closed park.', es: 'Hoy: una estudiante escribe al periódico de la ciudad sobre un parque cerrado.', fa: 'امروز: یک شاگرد دربارهٔ یک پارک بسته به روزنامهٔ شهر نامه می‌نویسد.' },
        why: { en: 'Sharing your ideas in a newspaper is free speech and a free press: the 1st Amendment.', es: 'Compartir tus ideas en un periódico es libertad de expresión y de prensa: la Primera Enmienda.', fa: 'گفتن فکرهایت در روزنامه آزادی بیان و مطبوعات است: متمم اول.' } },
      { bin: 'equal', t: { en: 'Brown v. Board of Education, 1954: Black children had to go to separate schools.', es: 'Brown contra la Junta de Educación, 1954: los niños negros debían ir a escuelas separadas.', fa: 'براون علیه بورد تعلیمات، ۱۹۵۴: کودکان سیاه‌پوست مجبور بودند به مکتب‌های جدا بروند.' },
        why: { en: 'Brown is a 14th Amendment case. School [[segregation|segregation]] broke [[equal protection|equal protection]] of the law.', es: 'Brown es un caso de la Enmienda 14. La [[segregation|segregación]] escolar violaba la [[equal protection|protección igual]].', fa: 'براون دعوای متمم چهاردهم است. [[segregation|جدایی نژادی]] در مکتب [[equal protection|حمایت برابر]] را می‌شکست.' } }
    ],
    success: { en: 'Every case is with its right! The Court protects these rights for everyone.', es: '¡Cada caso está con su derecho! La Corte protege estos derechos para todos.', fa: 'هر دعوا کنار حق خودش است! ستره محکمه این حقوق را برای همه حفظ می‌کند.' }
  },

  boss: {
    at: [28, 18],
    stat: 'hei',
    need: 3,
    name: { en: 'The Hush Grump', es: 'El Gruñón Silenciador', fa: 'غرغروی خاموش‌کن' },
    appear: { en: 'The Hush Grump is hiding in the fog behind the row houses!', es: '¡El Gruñón Silenciador se esconde en la niebla detrás de las casas!', fa: 'غرغروی خاموش‌کن در مه پشت خانه‌ها پنهان است!' },
    taunt: { en: 'Rights? Shh! No lawyers, no armbands, no warnings. Everybody hush!', es: '¿Derechos? ¡Shh! Sin abogados, sin brazaletes, sin advertencias. ¡Todos callados!', fa: 'حقوق؟ هیس! نه وکیل، نه بازوبند، نه هشدار. همه خاموش!' },
    win: { en: 'The fog lifts over Capitol Hill. Charter page 7.3 floats down into your hands!', es: 'La niebla se va de Capitol Hill. ¡La página 7.3 de la carta cae en tus manos!', fa: 'مه از روی تپهٔ کاپیتول کنار می‌رود. صفحهٔ ۷.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Mapp v. Ohio: what happens to evidence from an illegal search?', es: 'Mapp contra Ohio: ¿qué pasa con las pruebas de un registro ilegal?', fa: 'مپ علیه اوهایو: مدرکی که از تلاشی غیرقانونی آمده چه می‌شود؟' },
        choices: [
          { en: 'It cannot be used in court', es: 'No se puede usar en el juicio', fa: 'در محکمه استفاده نمی‌شود' },
          { en: 'It goes straight to the jury', es: 'Va directo al jurado', fa: 'سیده به هیئت منصفه می‌رود' },
          { en: 'It counts twice in court', es: 'Cuenta doble en el juicio', fa: 'در محکمه دو بار حساب می‌شود' },
          { en: 'It is sent to Congress', es: 'Se manda al Congreso', fa: 'به کانگرس فرستاده می‌شود' }],
        answer: 0,
        why: { en: 'Under the 4th Amendment, evidence from an illegal search cannot be used. This is the exclusionary rule.', es: 'Por la Cuarta Enmienda, las pruebas de un registro ilegal no se usan. Es la regla de exclusión.', fa: 'طبق متمم چهارم، مدرک تلاشی غیرقانونی استفاده نمی‌شود. این «قاعدهٔ کنار گذاشتن» است.' } },
      { q: { en: 'Gideon v. Wainwright: what did the Court decide?', es: 'Gideon contra Wainwright: ¿qué decidió la Corte?', fa: 'گیدیون علیه وین‌رایت: ستره محکمه چه تصمیم گرفت؟' },
        choices: [
          { en: 'A poor person accused gets a free lawyer', es: 'Un acusado pobre recibe un abogado gratis', fa: 'متهم فقیر وکیل مجانی می‌گیرد' },
          { en: 'Each person accused must be their own lawyer', es: 'Cada acusado debe ser su propio abogado', fa: 'هر متهم باید وکیل خودش باشد' },
          { en: 'Only rich people may have lawyers', es: 'Solo los ricos pueden tener abogado', fa: 'فقط پولدارها وکیل داشته می‌توانند' },
          { en: 'Police must pick the lawyer for you', es: 'La policía debe escoger tu abogado', fa: 'پولیس باید وکیلت را انتخاب کند' }],
        answer: 0,
        why: { en: 'Under the 6th Amendment, a person accused of a serious crime who cannot pay gets a free lawyer.', es: 'Por la Sexta Enmienda, quien es acusado de un delito grave y no puede pagar recibe abogado gratis.', fa: 'طبق متمم ششم، متهم جرم جدی که پول ندارد وکیل مجانی می‌گیرد.' } },
      { q: { en: 'How did Clarence Gideon get his case to the Supreme Court?', es: '¿Cómo llevó Clarence Gideon su caso a la Corte Suprema?', fa: 'کلارنس گیدیون چطور دعوایش را به ستره محکمه رساند؟' },
        choices: [
          { en: 'He wrote a letter in pencil from prison', es: 'Escribió una carta a lápiz desde la cárcel', fa: 'از زندان با پنسل نامه نوشت' },
          { en: 'He paid a big team of famous city lawyers', es: 'Pagó a un gran equipo de abogados famosos de la ciudad', fa: 'به یک گروه وکیل‌های مشهور شهر پول داد' },
          { en: 'He won a vote in Congress', es: 'Ganó una votación en el Congreso', fa: 'در کانگرس رأی برد' },
          { en: 'He asked the President to send it', es: 'Le pidió al Presidente que lo mandara', fa: 'از رئیس جمهور خواست آن را بفرستد' }],
        answer: 0,
        why: { en: 'Gideon had no money. He wrote to the Court by hand, in pencil, from a Florida prison.', es: 'Gideon no tenía dinero. Escribió a la Corte a mano, con lápiz, desde una cárcel de Florida.', fa: 'گیدیون پول نداشت. از یک زندان در فلوریدا با دست و پنسل به ستره محکمه نوشت.' } },
      { q: { en: 'Miranda v. Arizona: what must police do before they question a suspect?', es: 'Miranda contra Arizona: ¿qué debe hacer la policía antes de interrogar a un sospechoso?', fa: 'میراندا علیه اریزونا: پولیس پیش از سوال کردن از مظنون چه باید بکند؟' },
        choices: [
          { en: 'Tell the suspect their rights', es: 'Decirle sus derechos', fa: 'حقوقش را به او بگوید' },
          { en: 'Call the suspect\'s school', es: 'Llamar a su escuela', fa: 'به مکتبش زنگ بزند' },
          { en: 'Get a vote from the jury first', es: 'Pedir primero un voto del jurado', fa: 'اول از هیئت منصفه رأی بگیرد' },
          { en: 'Search the suspect\'s home first', es: 'Registrar primero su casa', fa: 'اول خانه‌اش را تلاشی کند' }],
        answer: 0,
        why: { en: 'Police must say: you can stay silent, and you can have a lawyer. That comes from the 5th and 6th.', es: 'La policía debe decir: puedes callarte y tener un abogado. Viene de la Quinta y la Sexta.', fa: 'پولیس باید بگوید: می‌توانی خاموش بمانی و وکیل داشته باشی. این از متمم پنجم و ششم است.' } },
      { q: { en: 'Tinker v. Des Moines: students wore black armbands to protest a war. What did the Court say?', es: 'Tinker contra Des Moines: estudiantes usaron brazaletes negros contra una guerra. ¿Qué dijo la Corte?', fa: 'تینکر علیه دی موین: شاگردان علیه یک جنگ بازوبند سیاه بستند. ستره محکمه چه گفت؟' },
        choices: [
          { en: 'Students keep free speech at school', es: 'Los estudiantes tienen libre expresión en la escuela', fa: 'شاگردان در مکتب آزادی بیان دارند' },
          { en: 'Students lose all their rights at school', es: 'Los estudiantes pierden todos sus derechos en la escuela', fa: 'شاگردان در مکتب همهٔ حقوق خود را از دست می‌دهند' },
          { en: 'Only teachers may protest a war', es: 'Solo los maestros pueden protestar', fa: 'فقط معلم‌ها اعتراض کرده می‌توانند' },
          { en: 'Armbands are only for soldiers', es: 'Los brazaletes son solo para soldados', fa: 'بازوبند فقط برای عسکرها است' }],
        answer: 0,
        why: { en: 'The 1st Amendment protects symbolic speech. A quiet armband did not stop classes, so students could wear it.', es: 'La Primera Enmienda protege la expresión simbólica. El brazalete no paraba las clases, así que podían usarlo.', fa: 'متمم اول از بیان نمادین محافظت می‌کند. بازوبند درس را بند نکرد، پس شاگردان می‌توانستند آن را ببندند.' } },
      { q: { en: 'Brown v. Board of Education, 1954: what did the Court decide?', es: 'Brown contra la Junta de Educación, 1954: ¿qué decidió la Corte?', fa: 'براون علیه بورد تعلیمات، ۱۹۵۴: ستره محکمه چه تصمیم گرفت؟' },
        choices: [
          { en: 'School segregation is unconstitutional', es: 'Separar escuelas por raza es inconstitucional', fa: 'جدایی نژادی در مکتب خلاف قانون اساسی است' },
          { en: 'Separate schools are fair if they are equal', es: 'Las escuelas separadas son justas si son iguales', fa: 'مکتب‌های جدا اگر برابر باشند عادلانه‌اند' },
          { en: 'Each state may choose for itself', es: 'Cada estado puede decidir solo', fa: 'هر ایالت خودش انتخاب کند' },
          { en: 'Only private schools must change', es: 'Solo las escuelas privadas deben cambiar', fa: 'فقط مکتب‌های خصوصی باید تغییر کنند' }],
        answer: 0,
        why: { en: 'Brown said separate public schools are not equal. This broke the 14th Amendment\'s equal protection.', es: 'Brown dijo que las escuelas públicas separadas no son iguales. Violaba la protección igual de la Enmienda 14.', fa: 'براون گفت مکتب‌های دولتی جدا برابر نیستند. این حمایت برابر متمم چهاردهم را می‌شکست.' } },
      { q: { en: 'What is a dissent?', es: '¿Qué es un voto en contra?', fa: 'نظر مخالف چیست؟' },
        choices: [
          { en: 'An opinion by justices who disagree', es: 'Una opinión de jueces que no están de acuerdo', fa: 'نظر قاضی‌هایی که موافق نیستند' },
          { en: 'A law passed by both houses', es: 'Una ley aprobada por las dos cámaras', fa: 'قانونی که هر دو مجلس تصویب کردند' },
          { en: 'The President saying no to a law', es: 'El Presidente diciendo no a una ley', fa: 'نه گفتن رئیس جمهور به یک قانون' },
          { en: 'The ruling that all nine justices sign', es: 'La decisión que firman los nueve jueces', fa: 'حکمی که هر نُه قاضی امضا می‌کنند' }],
        answer: 0,
        why: { en: 'The majority opinion decides the case. A dissent explains why some justices disagree.', es: 'La opinión de la mayoría decide el caso. Un voto en contra explica por qué algunos no están de acuerdo.', fa: 'نظر اکثریت دعوا را فیصله می‌کند. نظر مخالف می‌گوید چرا بعضی قاضی‌ها موافق نیستند.' } },
      { q: { en: 'What is precedent?', es: '¿Qué es el precedente?', fa: 'سابقهٔ قضایی چیست؟' },
        choices: [
          { en: 'An earlier ruling courts follow', es: 'Una decisión anterior que se sigue', fa: 'حکم قبلی که محکمه‌ها پیروی می‌کنند' },
          { en: 'A new law from the states', es: 'Una ley nueva de los estados', fa: 'یک قانون نو از ایالت‌ها' },
          { en: 'The first day of a trial', es: 'El primer día de un juicio', fa: 'روز اول یک محاکمه' },
          { en: 'The oldest justice now on the Court', es: 'El juez más viejo de la Corte hoy', fa: 'پیرترین قاضی امروز ستره محکمه' }],
        answer: 0,
        why: { en: 'Courts follow earlier rulings in similar cases. But the Court can overturn one, as Brown overturned Plessy.', es: 'Los tribunales siguen decisiones anteriores. Pero la Corte puede anular una, como Brown anuló Plessy.', fa: 'محکمه‌ها از حکم‌های قبلی پیروی می‌کنند. اما ستره محکمه می‌تواند یکی را لغو کند، مثل براون که پلسی را لغو کرد.' } }
    ]
  },

  learned: [
    { en: 'Mapp, Miranda and Gideon protect people accused of crimes: searches, questioning and a lawyer.', es: 'Mapp, Miranda y Gideon protegen a los acusados: registros, interrogatorios y un abogado.', fa: 'مپ، میراندا و گیدیون از متهمان محافظت می‌کنند: تلاشی، سوال پولیس و وکیل.' },
    { en: 'Tinker protects student speech. Brown ended school [[segregation|segregation]] under [[equal protection|equal protection]].', es: 'Tinker protege la expresión de los estudiantes. Brown terminó la [[segregation|segregación]] escolar por la [[equal protection|protección igual]].', fa: 'تینکر از بیان شاگردان محافظت می‌کند. براون با [[equal protection|حمایت برابر]] به [[segregation|جدایی نژادی]] مکتب‌ها پایان داد.' },
    { en: 'Nine justices decide by majority. Courts follow [[precedent|precedent]], but the Court can [[overturn|overturn]] old rulings.', es: 'Nueve jueces deciden por mayoría. Se sigue el [[precedent|precedente]], pero la Corte puede [[overturn|anular]] decisiones viejas.', fa: 'نُه قاضی با اکثریت تصمیم می‌گیرند. [[precedent|سابقهٔ قضایی]] پیروی می‌شود، اما ستره محکمه می‌تواند حکم‌های کهنه را [[overturn|لغو کند]].' }
  ],
  reflect: {
    q: { en: 'Which of these cases protects you most in your life today? Why?', es: '¿Cuál de estos casos te protege más en tu vida de hoy? ¿Por qué?', fa: 'کدام یکی از این دعواها امروز بیشتر از همه از تو در زندگی‌ات محافظت می‌کند؟ چرا؟' },
    starter: { en: 'The case that protects me most is', es: 'El caso que más me protege es', fa: 'دعوایی که بیشتر از همه از من محافظت می‌کند' }
  }
};
