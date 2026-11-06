/* TIMEWALKER · Episode 7.3 · The Holocaust (WHII)
   A Holocaust memorial museum today. The people are museum guides, a historian, descendants,
   visitors and volunteers. Nothing here is a prize and no one from the past is a character.
   North (rows 1-9): the museum. Upper gallery: the Hall of Names and a timeline of panels (x),
   with the Archive and the Library (D rooms). Lower gallery: more panels, the Education Room and
   the Testimony Room. Row 10: the entrance. South: the Garden of Remembrance with two still pools.
   Hard topic (genocide): plain, true, serious words; the Grump is "The Forgetting". */
window.EPISODE = {
  id: '7.3',
  realm: 7,
  sol: 'WHII',
  title: { en: 'The Holocaust', es: 'El Holocausto', fa: 'هولوکاست' },
  place: { en: 'A memorial museum, today', es: 'Un museo memorial, hoy', fa: 'یک موزیم یادبود، امروز' },
  weather: { sky: 'clear', time: 'sunset' },
  intro: [
    { en: 'The Grump wants the world to forget the [[holocaust|Holocaust]]. We must remember.',
      es: 'El Gruñón quiere que el mundo olvide el [[holocaust|Holocausto]]. Debemos recordar.',
      fa: 'غرغرو می‌خواهد جهان [[holocaust|هولوکاست]] را فراموش کند. ما باید به یاد بیاوریم.' },
    { en: 'This is a memorial museum. Listen to the 3 guides, then visit the time stone.',
      es: 'Este es un museo memorial. Escucha a las 3 personas guía y luego ve a la piedra del tiempo.',
      fa: 'این یک موزیم یادبود است. به ۳ راهنما گوش بده، بعد پیش سنگ زمان برو.' }
  ],
  /* cut scenes: Tock shows central Europe, where the Holocaust happened; the timeline marks today */
  scenes: {
    at: [16, 51],
    year: 2025,
    yearText: { en: 'Remembering 1933–1945', es: 'Recordando 1933–1945', fa: 'یادبود ۱۹۳۳–۱۹۴۵' },
    start: [
      { en: 'From 1933 to 1945, Nazi Germany persecuted Jewish people across Europe.',
        es: 'De 1933 a 1945, la Alemania nazi persiguió a los judíos en toda Europa.',
        fa: 'از ۱۹۳۳ تا ۱۹۴۵، آلمان نازی یهودیان را در سراسر اروپا آزار و تعقیب کرد.' },
      { en: 'The Nazis and their helpers murdered six million Jews. This is the Holocaust.',
        es: 'Los nazis y sus colaboradores asesinaron a seis millones de judíos. Esto es el Holocausto.',
        fa: 'نازی‌ها و همکاران‌شان شش میلیون یهودی را کشتند. این هولوکاست است.' },
      { en: 'They also murdered Roma, disabled people and others they targeted.',
        es: 'También asesinaron a gitanos (roma), a personas con discapacidad y a otros grupos.',
        fa: 'آن‌ها رومَا (کولی‌ها)، معلولان و گروه‌های دیگر را هم کشتند.' }
    ],
    page: { en: 'Today, museums collect names, photos and letters so every person is remembered.',
      es: 'Hoy, los museos reúnen nombres, fotos y cartas para recordar a cada persona.',
      fa: 'امروز، موزیم‌ها نام‌ها، عکس‌ها و نامه‌ها را جمع می‌کنند تا هر انسان به یاد بماند.' },
    guess: {
      q: { en: 'Six million Jews were murdered. Did each one have a name and a family?', es: 'Seis millones de judíos fueron asesinados. ¿Cada uno tenía un nombre y una familia?', fa: 'شش میلیون یهودی کشته شدند. آیا هر کدام نام و خانواده داشت؟' },
      choices: [
        { t: { en: 'Yes, every one', es: 'Sí, cada uno', fa: 'بله، هر کدام' }, ok: true },
        { t: { en: 'No', es: 'No', fa: 'نه' } }
      ],
      why: { en: 'Each person had a name, a family and a life. Museums work to remember each one.', es: 'Cada persona tenía un nombre, una familia y una vida. Los museos trabajan para recordar a cada una.', fa: 'هر انسان نام، خانواده و زندگی داشت. موزیم‌ها تلاش می‌کنند هر کدام را به یاد نگه دارند.' }
    },
    next: {
      q: { en: 'Next: the Cold War. After 1945, did the world split into two sides?', es: 'Ahora: la Guerra Fría. Después de 1945, ¿el mundo se dividió en dos lados?', fa: 'بعدی: جنگ سرد. بعد از ۱۹۴۵، آیا جهان به دو طرف تقسیم شد؟' },
      choices: [
        { t: { en: 'Yes, two sides', es: 'Sí, dos lados', fa: 'بله، دو طرف' }, ok: true },
        { t: { en: 'No, it united', es: 'No, se unió', fa: 'نه، متحد شد' } }
      ],
      why: { en: 'The United States and the Soviet Union became rivals. Berlin was split in two.', es: 'Estados Unidos y la Unión Soviética se volvieron rivales. Berlín quedó dividido en dos.', fa: 'امریکا و اتحاد شوروی رقیب شدند. برلین به دو بخش تقسیم شد.' }
    }
  },
  /* houses (fun-pass-4): the rooms of the museum, and the person working in each one */
  houses: [
    { at: [3, 3], style: 6, name: { en: 'Mr. Tomasz', es: 'Señor Tomasz', fa: 'آقای توماش' },
      look: { skin: 0, hair: '#8a8a8a', shirt: '#3a4a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is the archive. We keep letters, photos and papers from 1933 to 1945.', es: 'Este es el archivo. Guardamos cartas, fotos y papeles de 1933 a 1945.', fa: 'اینجا آرشیف است. نامه‌ها، عکس‌ها و اسناد سال‌های ۱۹۳۳ تا ۱۹۴۵ را نگه می‌داریم.' },
        { en: 'Families still send us things. Each one helps tell a true story.', es: 'Las familias todavía nos mandan cosas. Cada una ayuda a contar una historia verdadera.', fa: 'خانواده‌ها هنوز چیزهایی برای ما می‌فرستند. هر کدام به گفتن یک داستان واقعی کمک می‌کند.' }
      ] },
    { at: [25, 3], style: 6, name: { en: 'Ms. Nadia', es: 'Señora Nadia', fa: 'خانم نادیه' },
      look: { skin: 3, hair: '#1a1008', shirt: '#6a4a7a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Anne Frank was a Jewish girl. She hid in Amsterdam for two years.', es: 'Ana Frank era una niña judía. Se escondió en Ámsterdam durante dos años.', fa: 'آنه فرانک یک دختر یهودی بود. دو سال در آمستردام پنهان شد.' },
        { en: 'She wrote a diary while hiding. People all over the world read it.', es: 'Escribió un diario mientras se escondía. Gente de todo el mundo lo lee.', fa: 'او در وقت پنهان شدن خاطرات نوشت. مردم سراسر جهان آن را می‌خوانند.' },
        { en: 'She was found and sent to a camp. She died there in 1945, at 15.', es: 'La encontraron y la mandaron a un campo. Murió allí en 1945, a los 15 años.', fa: 'او را پیدا کردند و به اردوگاه فرستادند. در سال ۱۹۴۵، در ۱۵ سالگی، آنجا درگذشت.' }
      ] },
    { at: [3, 8], style: 6, name: { en: 'Mr. Kwame', es: 'Señor Kwame', fa: 'آقای کوامه' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f6f5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I teach about [[upstander|upstanders]]: people who helped others in danger.', es: 'Enseño sobre las personas que [[upstander|defienden a otros]]: gente que ayudó a otros en peligro.', fa: 'من دربارهٔ [[upstander|مدافعان]] درس می‌دهم: کسانی که به دیگران در خطر کمک کردند.' },
        { en: 'In 1943, Danish people helped about 7,000 Jews escape by boat to Sweden.', es: 'En 1943, el pueblo danés ayudó a unos 7,000 judíos a huir en bote a Suecia.', fa: 'در سال ۱۹۴۳، مردم دنمارک به حدود ۷ هزار یهودی کمک کردند با قایق به سویدن فرار کنند.' },
        { en: 'In 1940, a Japanese diplomat, Chiune Sugihara, wrote visas that saved thousands of Jews.', es: 'En 1940, un diplomático japonés, Chiune Sugihara, escribió visas que salvaron a miles de judíos.', fa: 'در سال ۱۹۴۰، یک دیپلومات جاپانی، چیونه سوگیهارا، ویزه‌هایی نوشت که هزاران یهودی را نجات داد.' }
      ] },
    { at: [27, 8], style: 6, name: { en: 'Ms. Ana', es: 'Señora Ana', fa: 'خانم آنا' },
      look: { skin: 2, hair: '#4a2a1a', shirt: '#8a6a4a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'In this room, visitors watch videos of survivors telling their own stories.', es: 'En esta sala, los visitantes ven videos de sobrevivientes que cuentan sus historias.', fa: 'در این اتاق، بازدیدکنندگان ویدیوهای بازماندگان را می‌بینند که داستان خود را می‌گویند.' },
        { en: 'Many survivors asked the same thing: remember, and speak up against hate.', es: 'Muchos sobrevivientes pidieron lo mismo: recuerden y hablen contra el odio.', fa: 'بسیاری از بازماندگان یک چیز خواستند: به یاد داشته باشید و در برابر نفرت حرف بزنید.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Rows 1-4: the upper gallery (f), with the Archive (3,3) and the Library (25,3) as D rooms and timeline panels (x).
     Row 5: a wall with two openings. Rows 6-9: the lower gallery, with the Education Room (3,8) and the Testimony Room (27,8).
     Row 10: the museum's south wall and its entrance (x 15-17). Rows 11-20: the Garden of Remembrance:
     paths (: l), two still pools (~), trees and flowers. */
  map: [
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
    'WffffffffffffffffffffffffffffffW',
    'WfDDDffffxffffxffffxffffDDDffffW',
    'WfDdDfffffffffffffffffffDdDffffW',
    'WffffffffffffffffffffffffffffffW',
    'WWWWffWWWWWWWWWWWWWWWWWWWffWWWWW',
    'WffffffffffffffffffffffffffffffW',
    'WfDDDfffxfffffffffffffxfffDDDffW',
    'WfDdDfffffffffffffffffffffDdDffW',
    'WffffffffffffffffffffffffffffffW',
    'WWWWWWWWWWWWWWWfffWWWWWWWWWWWWWW',
    'TTTTTTTTTTTTTTTlllTTTTTTTTTTTTTT',
    'T.,....,.....:lll:.....,....,..T',
    'T..T......,..:..:..,......T....T',
    'T......~~~~..:..:..~~~~.......xT',
    'T......~~~~..:..:..~~~~........T',
    'T.,..........::::......,.......T',
    'T...TT......T.....T......TT....T',
    'T..,.....,........,.....,....,.T',
    'T.....T.......x.......T........T',
    'T..,........,.......,......,...T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 12],

  finds: [
    { clueAt: [26, 16], at: [28, 20], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps east, then 4 steps south.', es: 'Desde esta nota, camina 2 pasos al este y luego 4 pasos al sur.', fa: 'از این یادداشت، ۲ قدم به شرق، بعد ۴ قدم به جنوب برو.' },
      text: { en: 'Many memorial gardens plant trees to honor rescuers. Here is a pressed flower from one.', es: 'Muchos jardines memoriales plantan árboles para honrar a quienes salvaron vidas. Aquí hay una flor seca de uno.', fa: 'بسیاری از باغ‌های یادبود به احترام نجات‌دهندگان درخت می‌کارند. اینجا یک گل خشک از یکی از آن‌هاست.' } },
    { clueAt: [20, 4], at: [20, 1], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps north, toward the wall.', es: 'Desde esta nota, camina 3 pasos al norte, hacia la pared.', fa: 'از این یادداشت، ۳ قدم به شمال، به طرف دیوار برو.' },
      text: { en: 'Volunteers write every name carefully in the Book of Names. Here is a feather pen.', es: 'Los voluntarios escriben cada nombre con cuidado en el Libro de los Nombres. Aquí hay una pluma para escribir.', fa: 'داوطلبان هر نام را با دقت در کتاب نام‌ها می‌نویسند. اینجا یک قلم پَری است.' } }
  ],

  words: {
    holocaust: { en: 'Nazi Germany\'s persecution and murder of six million Jews, from 1933 to 1945', es: 'la persecución y el asesinato de seis millones de judíos por la Alemania nazi, de 1933 a 1945', fa: 'آزار و کشتن شش میلیون یهودی به دست آلمان نازی، از ۱۹۳۳ تا ۱۹۴۵' },
    persecution: { en: 'treating a group cruelly and unfairly again and again, because of who they are', es: 'tratar a un grupo con crueldad e injusticia una y otra vez, por quiénes son', fa: 'رفتار ظالمانه و ناعادلانهٔ پی‌درپی با یک گروه، به خاطر اینکه چه کسی هستند' },
    ghetto: { en: 'a crowded, closed part of a city where Nazis forced Jews to live', es: 'una parte cerrada y llena de gente de una ciudad donde los nazis obligaban a vivir a los judíos', fa: 'بخش بسته و پرازدحام یک شهر که نازی‌ها یهودیان را به زور در آن جا دادند' },
    kristallnacht: { en: 'the "Night of Broken Glass," November 9–10, 1938, when Nazi mobs attacked Jews', es: 'la «Noche de los Cristales Rotos», 9 y 10 de noviembre de 1938, cuando turbas nazis atacaron a los judíos', fa: '«شب شیشه‌های شکسته»، ۹ و ۱۰ نوامبر ۱۹۳۸، وقتی گروه‌های نازی به یهودیان حمله کردند' },
    upstander: { en: 'a person who speaks up or acts to help someone treated unfairly', es: 'una persona que habla o actúa para ayudar a alguien tratado injustamente', fa: 'کسی که برای کمک به فردی که با او ناعادلانه رفتار می‌شود، حرف می‌زند یا کاری می‌کند' },
    bystander: { en: 'a person who sees something wrong happen and does nothing', es: 'una persona que ve algo injusto y no hace nada', fa: 'کسی که کار نادرستی را می‌بیند و هیچ کاری نمی‌کند' },
    survivor: { en: 'a person who lived through the Holocaust', es: 'una persona que sobrevivió al Holocausto', fa: 'کسی که از هولوکاست زنده ماند' },
    'bear witness': { en: 'to tell the truth about what happened, so others know', es: 'contar la verdad sobre lo que pasó, para que otros lo sepan', fa: 'حقیقتِ آنچه رخ داد را گفتن، تا دیگران بدانند' }
  },

  npcs: [
    {
      x: 8, y: 4,
      name: { en: 'Amara', es: 'Amara', fa: 'آمارا' },
      role: { en: 'Museum guide', es: 'Guía del museo', fa: 'راهنمای موزیم' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2a3a5a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'Welcome. This museum tells the truth, so it never happens again.', es: 'Bienvenido. Este museo cuenta la verdad, para que nunca vuelva a pasar.', fa: 'خوش آمدی. این موزیم حقیقت را می‌گوید، تا دیگر هرگز تکرار نشود.' },
        { en: 'In 1933, the Nazis took power in Germany. They spread hate against Jews.', es: 'En 1933, los nazis tomaron el poder en Alemania. Esparcieron odio contra los judíos.', fa: 'در سال ۱۹۳۳، نازی‌ها در آلمان قدرت را گرفتند. آن‌ها نفرت از یهودیان را پخش کردند.' },
        { en: 'New laws took away Jewish people\'s jobs, schools and rights, step by step.', es: 'Leyes nuevas les quitaron a los judíos sus trabajos, escuelas y derechos, paso a paso.', fa: 'قانون‌های نو، قدم به قدم، کار، مکتب و حقوق یهودیان را گرفتند.' },
        { en: 'In 1938, on [[kristallnacht|Kristallnacht]], mobs burned synagogues and attacked Jewish homes.', es: 'En 1938, en la [[kristallnacht|Noche de los Cristales Rotos]], turbas quemaron sinagogas y atacaron casas judías.', fa: 'در سال ۱۹۳۸، در [[kristallnacht|شب شیشه‌های شکسته]]، گروه‌ها کنیسه‌ها را سوختاندند و به خانه‌های یهودیان حمله کردند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Nazi persecution of Jews begin?', es: '¿Cómo empezó la persecución nazi contra los judíos?', fa: 'آزار یهودیان به دست نازی‌ها چطور شروع شد؟' },
        choices: [
          { ok: true, t: { en: 'Step by step, with hate and unfair laws', es: 'Paso a paso, con odio y leyes injustas', fa: 'قدم به قدم، با نفرت و قانون‌های ناعادلانه' },
            why: { en: 'Yes. First came hateful words, then laws took rights away. Violence and murder followed.', es: 'Sí. Primero vinieron palabras de odio, luego leyes que quitaban derechos. Después, violencia y asesinatos.', fa: 'بله. اول حرف‌های پر از نفرت آمد، بعد قانون‌ها حقوق را گرفتند. بعد خشونت و کشتار آمد.' } },
          { t: { en: 'All at once, on a single day in 1945', es: 'De golpe, en un solo día de 1945', fa: 'یک‌باره، در یک روز در سال ۱۹۴۵' },
            why: { en: 'No. It grew over years, starting in 1933. Hate came first, then laws, then killing.', es: 'No. Creció durante años, desde 1933. Primero el odio, luego las leyes, después la matanza.', fa: 'نه. از سال ۱۹۳۳، سال به سال بیشتر شد. اول نفرت، بعد قانون‌ها، بعد کشتار.' } },
          { t: { en: 'Jewish families chose to give up their rights', es: 'Las familias judías eligieron dejar sus derechos', fa: 'خانواده‌های یهودی خودشان حقوق‌شان را ترک کردند' },
            why: { en: 'No. Nazi laws forced Jews out of jobs and schools. They had no choice.', es: 'No. Las leyes nazis sacaron a los judíos de trabajos y escuelas. No tenían opción.', fa: 'نه. قانون‌های نازی یهودیان را به زور از کار و مکتب بیرون کرد. هیچ انتخابی نداشتند.' } }
        ]
      }
    },
    {
      x: 20, y: 6,
      name: { en: 'Dr. Rahman', es: 'Dra. Rahman', fa: 'داکتر رحمان' },
      role: { en: 'Historian', es: 'Historiadora', fa: 'تاریخ‌دان' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#5a3a3a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am a historian. I study documents, photos and [[survivor|survivors\']] words.', es: 'Soy historiadora. Estudio documentos, fotos y las palabras de los [[survivor|sobrevivientes]].', fa: 'من تاریخ‌دان هستم. اسناد، عکس‌ها و سخنان [[survivor|بازماندگان]] را مطالعه می‌کنم.' },
        { en: 'The Nazis forced Jews into crowded [[ghetto|ghettos]], then sent many by train to death camps.', es: 'Los nazis obligaron a los judíos a vivir en [[ghetto|guetos]] llenos de gente, y luego mandaron a muchos en tren a campos de exterminio.', fa: 'نازی‌ها یهودیان را به زور در [[ghetto|گتوهای]] پرازدحام جا دادند، بعد بسیاری را با قطار به اردوگاه‌های مرگ فرستادند.' },
        { en: 'Six million Jews were murdered. About one and a half million were children.', es: 'Seis millones de judíos fueron asesinados. Cerca de un millón y medio eran niños.', fa: 'شش میلیون یهودی کشته شدند. حدود یک و نیم میلیون نفرشان کودک بودند.' },
        { en: 'In 1945, Allied soldiers freed the camps. Survivors told the world the truth.', es: 'En 1945, los soldados aliados liberaron los campos. Los sobrevivientes le contaron la verdad al mundo.', fa: 'در سال ۱۹۴۵، سربازان متحدین اردوگاه‌ها را آزاد کردند. بازماندگان حقیقت را به جهان گفتند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How do historians know what happened in the Holocaust?', es: '¿Cómo saben los historiadores lo que pasó en el Holocausto?', fa: 'تاریخ‌دانان از کجا می‌دانند در هولوکاست چه رخ داد؟' },
        choices: [
          { ok: true, t: { en: 'From documents, photos and survivors\' words', es: 'Por documentos, fotos y relatos de sobrevivientes', fa: 'از اسناد، عکس‌ها و سخنان بازماندگان' },
            why: { en: 'Yes. Records from that time, photos and survivors\' stories all show the truth.', es: 'Sí. Los registros de esa época, las fotos y los relatos de sobrevivientes muestran la verdad.', fa: 'بله. اسناد همان زمان، عکس‌ها و داستان‌های بازماندگان همه حقیقت را نشان می‌دهند.' } },
          { t: { en: 'From one rumor that nobody ever checked', es: 'Por un rumor que nadie revisó nunca', fa: 'از یک شایعه که هیچ کس بررسی نکرد' },
            why: { en: 'No. Historians check many sources. The Holocaust is one of the best-documented events in history.', es: 'No. Los historiadores revisan muchas fuentes. El Holocausto es uno de los hechos mejor documentados.', fa: 'نه. تاریخ‌دانان منابع زیادی را بررسی می‌کنند. هولوکاست یکی از مستندترین رویدادهای تاریخ است.' } },
          { t: { en: 'From guesses, with no proof of any kind', es: 'Por suposiciones, sin ninguna prueba', fa: 'از حدس، بدون هیچ نوع ثبوت' },
            why: { en: 'No. There is a great deal of proof: Nazi records, photos, and thousands of survivors.', es: 'No. Hay muchísimas pruebas: registros nazis, fotos y miles de sobrevivientes.', fa: 'نه. ثبوت بسیار زیاد است: اسناد خود نازی‌ها، عکس‌ها و هزاران بازمانده.' } }
        ]
      }
    },
    {
      x: 24, y: 13,
      name: { en: 'Mila', es: 'Mila', fa: 'میلا' },
      role: { en: 'Romani visitor', es: 'Visitante romaní', fa: 'بازدیدکنندهٔ رومَا' },
      look: { skin: 3, hair: '#120c08', shirt: '#2a6a8a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'I am Romani. My people are often called Roma.', es: 'Soy romaní. A mi pueblo muchas veces lo llaman roma o gitano.', fa: 'من رومانی هستم. مردم ما را اکثراً رومَا می‌نامند.' },
        { en: 'The Nazis murdered hundreds of thousands of Roma. We call it the Porajmos.', es: 'Los nazis asesinaron a cientos de miles de personas roma. Lo llamamos Porajmos.', fa: 'نازی‌ها صدها هزار نفر از رومَا را کشتند. ما آن را «پورایموس» می‌نامیم.' },
        { en: 'They also murdered disabled people. Poles, Soviet prisoners and others were targeted too.', es: 'También asesinaron a personas con discapacidad. Atacaron además a polacos, presos soviéticos y otros.', fa: 'آن‌ها معلولان را هم کشتند. پولندی‌ها، اسیران شوروی و دیگران هم هدف بودند.' },
        { en: 'My grandmother taught me: remember them, and stand up for others.', es: 'Mi abuela me enseñó: recuérdalos y defiende a los demás.', fa: 'مادرکلانم به من یاد داد: آن‌ها را به یاد داشته باش و از دیگران دفاع کن.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Besides Jews, whom else did the Nazis target?', es: 'Además de los judíos, ¿a quiénes más atacaron los nazis?', fa: 'غیر از یهودیان، نازی‌ها چه کسان دیگری را هدف گرفتند؟' },
        choices: [
          { ok: true, t: { en: 'Roma, disabled people and others', es: 'A los roma, a personas con discapacidad y a otros', fa: 'رومَا، معلولان و دیگران' },
            why: { en: 'Yes. Roma and disabled people were murdered. Many other groups were persecuted too.', es: 'Sí. Asesinaron a personas roma y con discapacidad. También persiguieron a muchos otros grupos.', fa: 'بله. رومَا و معلولان کشته شدند. گروه‌های بسیار دیگر هم آزار دیدند.' } },
          { t: { en: 'Only enemy soldiers in battle', es: 'Solo a soldados enemigos en batalla', fa: 'فقط سربازان دشمن در جنگ' },
            why: { en: 'No. The Nazis targeted ordinary people, even children, for who they were.', es: 'No. Los nazis atacaron a gente común, hasta a niños, por quiénes eran.', fa: 'نه. نازی‌ها مردم عادی، حتی کودکان را، به خاطر اینکه چه کسی بودند هدف گرفتند.' } },
          { t: { en: 'Only people who lived outside Europe', es: 'Solo a gente que vivía fuera de Europa', fa: 'فقط مردمی که بیرون از اروپا زندگی می‌کردند' },
            why: { en: 'No. The Nazis targeted people living across Europe, often their own neighbors.', es: 'No. Los nazis atacaron a gente en toda Europa, muchas veces a sus propios vecinos.', fa: 'نه. نازی‌ها مردم سراسر اروپا را، اکثراً همسایه‌های خودشان را، هدف گرفتند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 9, y: 2, text: { en: 'HALL OF NAMES · Here we read aloud the names of people murdered in the Holocaust.', es: 'SALA DE LOS NOMBRES · Aquí leemos en voz alta los nombres de las personas asesinadas en el Holocausto.', fa: 'تالار نام‌ها · اینجا نام کسانی را که در هولوکاست کشته شدند بلند می‌خوانیم.' } },
    { x: 14, y: 2, text: { en: '1933 · The Nazis take power in Germany. Jewish shops are boycotted.', es: '1933 · Los nazis toman el poder en Alemania. Se boicotean las tiendas judías.', fa: '۱۹۳۳ · نازی‌ها در آلمان قدرت را می‌گیرند. مردم را از خرید در دکان‌های یهودیان منع می‌کنند.' } },
    { x: 19, y: 2, text: { en: '1935 · The Nuremberg Laws take away Jewish people\'s rights as citizens.', es: '1935 · Las Leyes de Núremberg les quitan a los judíos sus derechos de ciudadanos.', fa: '۱۹۳۵ · قانون‌های نورنبرگ حقوق شهروندی یهودیان را می‌گیرند.' } },
    { x: 8, y: 7, text: { en: '1938 · On Kristallnacht, mobs burn synagogues and attack Jewish homes and shops.', es: '1938 · En la Noche de los Cristales Rotos, turbas queman sinagogas y atacan casas y tiendas judías.', fa: '۱۹۳۸ · در شب شیشه‌های شکسته، گروه‌ها کنیسه‌ها را می‌سوزانند و به خانه‌ها و دکان‌های یهودیان حمله می‌کنند.' } },
    { x: 22, y: 7, text: { en: '1941 to 1945 · Nazis and their helpers murder Jews in mass shootings and death camps.', es: '1941 a 1945 · Los nazis y sus colaboradores asesinan a judíos en fusilamientos masivos y campos de exterminio.', fa: '۱۹۴۱ تا ۱۹۴۵ · نازی‌ها و همکاران‌شان یهودیان را در تیرباران‌های جمعی و اردوگاه‌های مرگ می‌کشند.' } },
    { x: 30, y: 14, text: { en: 'GARDEN OF REMEMBRANCE · Please walk quietly. This is a place to think and remember.', es: 'JARDÍN DEL RECUERDO · Por favor, camina en silencio. Este es un lugar para pensar y recordar.', fa: 'باغ یادبود · لطفاً آرام قدم بزن. اینجا جای فکر کردن و به یاد آوردن است.' } },
    { x: 14, y: 19, text: { en: 'Elie Wiesel, a survivor, said: "For the dead and the living, we must [[bear witness|bear witness]]."', es: 'Elie Wiesel, un sobreviviente, dijo: «Por los muertos y por los vivos, debemos [[bear witness|dar testimonio]]».', fa: 'ایلی ویزل، یک بازمانده، گفت: «به خاطر مردگان و زندگان، باید [[bear witness|گواهی بدهیم]].»' } }
  ],

  /* the quest (keeping memory): Miriam, a descendant, in the Hall of Names (north-west)
     -> Mr. Diallo the guard in the east hall (north-east) -> find the lost name card in the garden (south-west)
     -> bring it back to Miriam, so the name returns to the Wall of Names */
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Name Card', es: 'La tarjeta con el nombre perdida', fa: 'کارت نامِ گم‌شده' },
    giver: {
      x: 11, y: 3,
      name: { en: 'Miriam', es: 'Miriam', fa: 'مریم' },
      role: { en: 'Granddaughter of a survivor', es: 'Nieta de una sobreviviente', fa: 'نواسهٔ یک بازمانده' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#3a3a5a', pants: '#2a2a2a', style: 'long' },
      lines: [
        { en: 'My grandmother survived the Holocaust. Her little sister, Hanna, did not.', es: 'Mi abuela sobrevivió al Holocausto. Su hermanita, Hanna, no sobrevivió.', fa: 'مادرکلانم از هولوکاست زنده ماند. خواهر کوچکش، هانا، زنده نماند.' },
        { en: 'Hanna\'s name card fell from the Wall of Names. Please help me find it.', es: 'La tarjeta con el nombre de Hanna se cayó del Muro de los Nombres. Por favor, ayúdame a encontrarla.', fa: 'کارت نام هانا از دیوار نام‌ها افتاد. لطفاً کمکم کن آن را پیدا کنم.' }
      ],
      wait: { en: 'Mr. Diallo, the guard, is in the east hall. Ask him about the card.', es: 'El señor Diallo, el guardia, está en la sala del este. Pregúntale por la tarjeta.', fa: 'آقای دیالو، نگهبان، در تالار شرقی است. از او دربارهٔ کارت بپرس.' },
      thanks: { en: 'Thank you. Hanna\'s name is back on the wall. Every name matters.', es: 'Gracias. El nombre de Hanna está otra vez en el muro. Cada nombre importa.', fa: 'تشکر. نام هانا دوباره روی دیوار است. هر نام مهم است.' }
    },
    contact: {
      x: 28, y: 6,
      name: { en: 'Mr. Diallo', es: 'Señor Diallo', fa: 'آقای دیالو' },
      role: { en: 'Museum guard', es: 'Guardia del museo', fa: 'نگهبان موزیم' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a2a3a', pants: '#2a2a2a', hat: '#2a2a3a' },
      lines: [
        { en: 'I keep this museum safe, and quiet for remembering.', es: 'Cuido este museo para que sea seguro y tranquilo para recordar.', fa: 'من این موزیم را امن و آرام نگه می‌دارم، برای به یاد آوردن.' },
        { en: 'The wind carried a card outside. Look south of the west pool, in the garden.', es: 'El viento se llevó una tarjeta afuera. Busca al sur del estanque del oeste, en el jardín.', fa: 'باد یک کارت را بیرون برد. در باغ، جنوب حوض غربی را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [8, 16],
      hint: { en: 'Garden: just south of the west pool', es: 'Jardín: justo al sur del estanque del oeste', fa: 'باغ: درست جنوب حوض غربی' },
      found: { en: 'You found Hanna\'s name card. You hold it with care.', es: 'Encontraste la tarjeta con el nombre de Hanna. La llevas con cuidado.', fa: 'کارت نام هانا را پیدا کردی. آن را با احتیاط نگه می‌داری.' },
      item: { icon: '🪪', name: { en: 'Hanna\'s name card', es: 'La tarjeta con el nombre de Hanna', fa: 'کارت نام هانا' } }
    }
  },

  scraps: [[1, 1], [30, 9], [1, 20]],
  smudges: [], // a memorial: nothing to fight here
  memorial: true,

  challenge: {
    at: [20, 18],
    type: 'sort',
    stat: 'reg',
    title: { en: 'Upstanders and Bystanders', es: 'Defender o mirar a otro lado', fa: 'مدافع یا تماشاچی' },
    intro: { en: 'The Grump says one person cannot help. Sort each action: does the person help, or look away?',
      es: 'El Gruñón dice que una persona no puede ayudar. Ordena cada acción: ¿la persona ayuda o mira a otro lado?',
      fa: 'غرغرو می‌گوید یک نفر نمی‌تواند کمک کند. هر کار را جدا کن: آن شخص کمک می‌کند، یا رو برمی‌گرداند؟' },
    bins: [
      { id: 'help', icon: '🤝', label: { en: 'Upstander: helps or speaks up', es: 'Defiende: ayuda o alza la voz', fa: 'مدافع: کمک می‌کند یا حرف می‌زند' },
        sub: { en: 'acts for someone treated unfairly', es: 'actúa por alguien tratado injustamente', fa: 'برای کسی که با او ناعادلانه رفتار شده کاری می‌کند' } },
      { id: 'silent', icon: '🚶', label: { en: 'Bystander: stays silent or goes along', es: 'Mira a otro lado: calla o sigue a los demás', fa: 'تماشاچی: خاموش می‌ماند یا همراهی می‌کند' },
        sub: { en: 'does nothing to help', es: 'no hace nada para ayudar', fa: 'هیچ کاری برای کمک نمی‌کند' } }
    ],
    items: [
      { bin: 'help', t: { en: 'Danish people carry Jewish families to Sweden by boat (1943)', es: 'Gente de Dinamarca lleva a familias judías a Suecia en bote (1943)', fa: 'مردم دنمارک خانواده‌های یهودی را با قایق به سویدن می‌برند (۱۹۴۳)' },
        why: { en: 'In 1943, Danish people helped about 7,000 Jews escape to safety in Sweden.', es: 'En 1943, el pueblo danés ayudó a unos 7,000 judíos a ponerse a salvo en Suecia.', fa: 'در سال ۱۹۴۳، مردم دنمارک به حدود ۷ هزار یهودی کمک کردند به جای امن در سویدن برسند.' } },
      { bin: 'help', t: { en: 'A family hides Jewish neighbors in a secret room', es: 'Una familia esconde a sus vecinos judíos en un cuarto secreto', fa: 'یک خانواده همسایه‌های یهودی را در یک اتاق مخفی پنهان می‌کند' },
        why: { en: 'Helpers hid Anne Frank\'s family for two years. Hiding people was very dangerous.', es: 'Unas personas escondieron a la familia de Ana Frank por dos años. Esconder a alguien era muy peligroso.', fa: 'کمک‌کنندگان خانوادهٔ آنه فرانک را دو سال پنهان کردند. پنهان کردن مردم بسیار خطرناک بود.' } },
      { bin: 'help', t: { en: 'Chiune Sugihara writes visas so Jewish families can escape (1940)', es: 'Chiune Sugihara escribe visas para que familias judías puedan huir (1940)', fa: 'چیونه سوگیهارا ویزه می‌نویسد تا خانواده‌های یهودی فرار کنند (۱۹۴۰)' },
        why: { en: 'This Japanese diplomat broke orders to write visas. He saved thousands of lives.', es: 'Este diplomático japonés desobedeció órdenes para escribir visas. Salvó miles de vidas.', fa: 'این دیپلومات جاپانی برخلاف امر بالادستان ویزه نوشت. او جان هزاران نفر را نجات داد.' } },
      { bin: 'help', t: { en: 'A student tells a teacher about hateful posts online', es: 'Un estudiante le cuenta a un maestro sobre mensajes de odio en internet', fa: 'یک شاگرد به معلم دربارهٔ پیام‌های پر از نفرت در انترنت می‌گوید' },
        why: { en: 'Telling a trusted adult is a safe and strong way to stand up.', es: 'Contarle a un adulto de confianza es una forma segura y fuerte de defender a otros.', fa: 'گفتن به یک بزرگ‌سال قابل اعتماد، راهی امن و قوی برای دفاع است.' } },
      { bin: 'help', t: { en: 'A classmate sits with a new student who is being teased', es: 'Un compañero se sienta con un estudiante nuevo al que molestan', fa: 'یک همصنفی کنار شاگرد نوی می‌نشیند که مسخره‌اش می‌کنند' },
        why: { en: 'Being a friend to someone left out is standing up for them.', es: 'Ser amigo de alguien que está solo es defenderlo.', fa: 'دوست شدن با کسی که تنها مانده، یعنی دفاع از او.' } },
      { bin: 'silent', t: { en: 'A neighbor sees a Jewish shop attacked and stays silent', es: 'Un vecino ve que atacan una tienda judía y se queda callado', fa: 'یک همسایه حمله به دکان یک یهودی را می‌بیند و خاموش می‌ماند' },
        why: { en: 'Silence let hate grow. Many people looked away in the 1930s.', es: 'El silencio dejó crecer el odio. Mucha gente miró a otro lado en los años 1930.', fa: 'خاموشی گذاشت نفرت بزرگ شود. در دههٔ ۱۹۳۰ بسیاری از مردم رو برگرداندند.' } },
      { bin: 'silent', t: { en: 'People hear a hateful joke and laugh along', es: 'Unas personas oyen un chiste de odio y se ríen', fa: 'مردم یک شوخی پر از نفرت را می‌شنوند و همراه می‌خندند' },
        why: { en: 'Laughing along tells the speaker that hate is OK. It is not.', es: 'Reírse le dice a quien habla que el odio está bien. No lo está.', fa: 'همراه خندیدن به گوینده می‌فهماند که نفرت درست است. درست نیست.' } },
      { bin: 'silent', t: { en: 'A student sees a classmate bullied and walks away', es: 'Un estudiante ve que acosan a un compañero y se va', fa: 'یک شاگرد می‌بیند که همصنفی‌اش آزار می‌بیند و می‌رود' },
        why: { en: 'Walking away leaves the person alone. You can get help from an adult.', es: 'Irse deja sola a esa persona. Puedes pedir ayuda a un adulto.', fa: 'رفتن آن شخص را تنها می‌گذارد. می‌توانی از یک بزرگ‌سال کمک بخواهی.' } }
    ],
    success: { en: 'Every choice matters. Upstanders saved lives then, and they protect people today.', es: 'Cada decisión importa. Quienes defendieron a otros salvaron vidas entonces, y hoy protegen a la gente.', fa: 'هر انتخاب مهم است. مدافعان آن زمان جان مردم را نجات دادند و امروز هم از مردم محافظت می‌کنند.' }
  },

  boss: {
    at: [10, 19],
    stat: 'reg',
    need: 3,
    name: { en: 'The Forgetting', es: 'El Olvido', fa: 'فراموشی' },
    appear: { en: 'A grey fog fills the quiet garden. The Forgetting wants the names to fade.', es: 'Una niebla gris llena el jardín silencioso. El Olvido quiere que los nombres se borren.', fa: 'مه خاکستری باغ آرام را پر می‌کند. فراموشی می‌خواهد نام‌ها محو شوند.' },
    taunt: { en: 'No one will remember them.', es: 'Nadie los recordará.', fa: 'هیچ کس آن‌ها را به یاد نخواهد آورد.' },
    win: { en: 'The fog lifts. The garden is quiet and clear. Chronicle page 7.3 returns to you.', es: 'La niebla se va. El jardín está tranquilo y claro. La página 7.3 de la crónica vuelve a ti.', fa: 'مه کنار می‌رود. باغ آرام و روشن است. صفحهٔ ۷.۳ تاریخ‌نامه به تو برمی‌گردد.' },
    questions: [
      { q: { en: 'What was the Holocaust?', es: '¿Qué fue el Holocausto?', fa: 'هولوکاست چه بود؟' },
        choices: [
          { en: 'The Nazi murder of six million European Jews', es: 'El asesinato nazi de seis millones de judíos de Europa', fa: 'کشتن شش میلیون یهودی اروپا به دست نازی‌ها' },
          { en: 'A war fought between Germany and Japan', es: 'Una guerra entre Alemania y Japón', fa: 'جنگی میان آلمان و جاپان' },
          { en: 'A peace treaty that ended World War II', es: 'Un tratado de paz que terminó la Segunda Guerra Mundial', fa: 'پیمان صلحی که جنگ جهانی دوم را ختم کرد' },
          { en: 'A law that gave equal rights to everyone', es: 'Una ley que dio los mismos derechos a todos', fa: 'قانونی که به همه حقوق برابر داد' }],
        answer: 0,
        why: { en: 'The Nazis and their helpers murdered six million Jews. Each one was a person with a name.', es: 'Los nazis y sus colaboradores asesinaron a seis millones de judíos. Cada uno era una persona con nombre.', fa: 'نازی‌ها و همکاران‌شان شش میلیون یهودی را کشتند. هر کدام انسانی با یک نام بود.' } },
      { q: { en: 'Besides Jews, which groups did the Nazis also target?', es: 'Además de los judíos, ¿qué grupos atacaron también los nazis?', fa: 'غیر از یهودیان، نازی‌ها کدام گروه‌ها را هم هدف گرفتند؟' },
        choices: [
          { en: 'Roma, disabled people and others', es: 'Roma, personas con discapacidad y otros', fa: 'رومَا، معلولان و دیگران' },
          { en: 'Only soldiers from enemy armies', es: 'Solo soldados de ejércitos enemigos', fa: 'فقط سربازان اردوهای دشمن' },
          { en: 'Only people who lived in Asia', es: 'Solo gente que vivía en Asia', fa: 'فقط مردمی که در آسیا زندگی می‌کردند' },
          { en: 'No other group was ever targeted', es: 'Ningún otro grupo fue atacado', fa: 'هیچ گروه دیگری هدف نبود' }],
        answer: 0,
        why: { en: 'The Nazis also murdered Roma and disabled people, and persecuted many other groups.', es: 'Los nazis también asesinaron a personas roma y con discapacidad, y persiguieron a muchos otros grupos.', fa: 'نازی‌ها رومَا و معلولان را هم کشتند و گروه‌های بسیار دیگر را آزار دادند.' } },
      { q: { en: 'What were the Nuremberg Laws of 1935?', es: '¿Qué fueron las Leyes de Núremberg de 1935?', fa: 'قانون‌های نورنبرگ سال ۱۹۳۵ چه بودند؟' },
        choices: [
          { en: 'Laws that took away Jews\' rights', es: 'Leyes que les quitaron derechos a los judíos', fa: 'قانون‌هایی که حقوق یهودیان را گرفتند' },
          { en: 'Laws that gave Jews equal rights', es: 'Leyes que les dieron igualdad a los judíos', fa: 'قانون‌هایی که به یهودیان حقوق برابر دادند' },
          { en: 'Laws that ended the war in Europe', es: 'Leyes que terminaron la guerra en Europa', fa: 'قانون‌هایی که جنگ را در اروپا ختم کردند' },
          { en: 'Laws that let all people vote freely', es: 'Leyes que dejaban votar libremente a todos', fa: 'قانون‌هایی که به همه اجازهٔ رأی آزاد دادند' }],
        answer: 0,
        why: { en: 'These laws took away Jewish people\'s citizenship and many of their rights.', es: 'Estas leyes les quitaron a los judíos la ciudadanía y muchos de sus derechos.', fa: 'این قانون‌ها شهروندی و بسیاری از حقوق یهودیان را گرفتند.' } },
      { q: { en: 'What happened on Kristallnacht in November 1938?', es: '¿Qué pasó en la Noche de los Cristales Rotos, en noviembre de 1938?', fa: 'در شب شیشه‌های شکسته، در نوامبر ۱۹۳۸، چه رخ داد؟' },
        choices: [
          { en: 'Mobs attacked synagogues, homes and Jewish shops', es: 'Turbas atacaron sinagogas, casas y tiendas judías', fa: 'گروه‌ها به کنیسه‌ها، خانه‌ها و دکان‌های یهودیان حمله کردند' },
          { en: 'Germany signed a peace deal with its neighbors', es: 'Alemania firmó la paz con sus vecinos', fa: 'آلمان با همسایه‌هایش قرارداد صلح امضا کرد' },
          { en: 'Soldiers came home from the war with medals', es: 'Los soldados volvieron de la guerra con medallas', fa: 'سربازان با مدال از جنگ به خانه برگشتند' },
          { en: 'People voted in a free and fair election', es: 'La gente votó en una elección libre y justa', fa: 'مردم در یک انتخابات آزاد و عادلانه رأی دادند' }],
        answer: 0,
        why: { en: 'Nazi mobs burned synagogues and broke Jewish shop windows. Many Jews were arrested.', es: 'Turbas nazis quemaron sinagogas y rompieron vitrinas de tiendas judías. Arrestaron a muchos judíos.', fa: 'گروه‌های نازی کنیسه‌ها را سوختاندند و شیشه‌های دکان‌های یهودیان را شکستند. بسیاری از یهودیان گرفتار شدند.' } },
      { q: { en: 'What were ghettos during the Holocaust?', es: '¿Qué eran los guetos durante el Holocausto?', fa: 'گتوها در زمان هولوکاست چه بودند؟' },
        choices: [
          { en: 'Crowded areas where Nazis forced Jews to live', es: 'Zonas llenas donde los nazis obligaban a vivir a los judíos', fa: 'جاهای پرازدحام که نازی‌ها یهودیان را به زور آنجا جا دادند' },
          { en: 'Safe towns where Jewish families chose to move', es: 'Pueblos seguros adonde las familias judías eligieron ir', fa: 'شهرهای امن که خانواده‌های یهودی خودشان به آنجا رفتند' },
          { en: 'Farms that grew extra food for the soldiers', es: 'Granjas que daban comida extra a los soldados', fa: 'فارم‌هایی که برای سربازان غذای اضافه می‌کاشتند' },
          { en: 'Schools for children from many countries', es: 'Escuelas para niños de muchos países', fa: 'مکتب‌هایی برای کودکان از کشورهای زیاد' }],
        answer: 0,
        why: { en: 'Ghettos were closed off and crowded. Food was scarce, and many people died there.', es: 'Los guetos estaban cerrados y llenos. Faltaba comida y mucha gente murió allí.', fa: 'گتوها بسته و پرازدحام بودند. غذا کم بود و بسیاری از مردم آنجا مردند.' } },
      { q: { en: 'Who wrote a diary while hiding in Amsterdam?', es: '¿Quién escribió un diario mientras se escondía en Ámsterdam?', fa: 'چه کسی در وقت پنهان شدن در آمستردام خاطرات نوشت؟' },
        choices: [
          { en: 'Anne Frank', es: 'Ana Frank', fa: 'آنه فرانک' },
          { en: 'Marie Curie', es: 'Marie Curie', fa: 'ماری کوری' },
          { en: 'Joseph Stalin', es: 'José Stalin', fa: 'جوزف ستالین' },
          { en: 'Frida Kahlo', es: 'Frida Kahlo', fa: 'فریدا کالو' }],
        answer: 0,
        why: { en: 'Anne Frank, a Jewish girl, hid for two years. She died in a camp in 1945.', es: 'Ana Frank, una niña judía, se escondió dos años. Murió en un campo en 1945.', fa: 'آنه فرانک، یک دختر یهودی، دو سال پنهان بود. در سال ۱۹۴۵ در یک اردوگاه درگذشت.' } },
      { q: { en: 'What is an upstander?', es: '¿Qué es una persona que defiende a otros?', fa: 'مدافع کیست؟' },
        choices: [
          { en: 'Someone who speaks up or helps others', es: 'Alguien que alza la voz o ayuda a otros', fa: 'کسی که حرف می‌زند یا به دیگران کمک می‌کند' },
          { en: 'Someone who watches and does nothing', es: 'Alguien que mira y no hace nada', fa: 'کسی که تماشا می‌کند و کاری نمی‌کند' },
          { en: 'Someone who joins in with the bullies', es: 'Alguien que se une a los acosadores', fa: 'کسی که با آزاردهندگان همراه می‌شود' },
          { en: 'Someone who only cares about winning', es: 'Alguien a quien solo le importa ganar', fa: 'کسی که فقط به بردن فکر می‌کند' }],
        answer: 0,
        why: { en: 'An upstander acts to help someone treated unfairly, like the rescuers in the 1940s.', es: 'Quien defiende a otros actúa para ayudar a alguien tratado injustamente, como los rescatistas de los años 1940.', fa: 'مدافع برای کمک به کسی که با او ناعادلانه رفتار می‌شود کاری می‌کند، مثل نجات‌دهندگان دههٔ ۱۹۴۰.' } },
      { q: { en: 'Why do we remember the Holocaust today?', es: '¿Por qué recordamos hoy el Holocausto?', fa: 'چرا امروز هولوکاست را به یاد می‌آوریم؟' },
        choices: [
          { en: 'To honor victims and stop hate from growing', es: 'Para honrar a las víctimas y frenar el odio', fa: 'تا به قربانیان احترام بگذاریم و جلوی نفرت را بگیریم' },
          { en: 'To blame people who are alive today for it', es: 'Para culpar de eso a la gente que vive hoy', fa: 'تا مردمی را که امروز زنده‌اند مقصر بدانیم' },
          { en: 'To learn how to win wars much faster', es: 'Para aprender a ganar guerras más rápido', fa: 'تا یاد بگیریم جنگ‌ها را زودتر ببریم' },
          { en: 'To make people afraid to visit museums', es: 'Para que la gente tenga miedo de los museos', fa: 'تا مردم از رفتن به موزیم بترسند' }],
        answer: 0,
        why: { en: 'We remember to honor each person, and to stand up against hate today.', es: 'Recordamos para honrar a cada persona y para enfrentar el odio hoy.', fa: 'به یاد می‌آوریم تا به هر انسان احترام بگذاریم و امروز در برابر نفرت بایستیم.' } }
    ]
  },

  learned: [
    { en: 'The Nazis and their helpers murdered six million Jews. This was the [[holocaust|Holocaust]].', es: 'Los nazis y sus colaboradores asesinaron a seis millones de judíos. Esto fue el [[holocaust|Holocausto]].', fa: 'نازی‌ها و همکاران‌شان شش میلیون یهودی را کشتند. این [[holocaust|هولوکاست]] بود.' },
    { en: 'Roma, disabled people and others were also targeted and murdered.', es: 'Personas roma, con discapacidad y otras también fueron perseguidas y asesinadas.', fa: 'رومَا، معلولان و دیگران هم هدف قرار گرفتند و کشته شدند.' },
    { en: '[[upstander|Upstanders]] saved lives. Remembering, and speaking up against hate, protects people today.', es: 'Quienes [[upstander|defendieron a otros]] salvaron vidas. Recordar y hablar contra el odio protege a la gente hoy.', fa: '[[upstander|مدافعان]] جان مردم را نجات دادند. به یاد آوردن و حرف زدن در برابر نفرت، امروز از مردم محافظت می‌کند.' }
  ],
  reflect: {
    q: { en: 'What can you do when you see someone treated unfairly?', es: '¿Qué puedes hacer cuando ves que tratan a alguien injustamente?', fa: 'وقتی می‌بینی با کسی ناعادلانه رفتار می‌شود، چه می‌توانی بکنی؟' },
    starter: { en: 'When I see someone treated unfairly, I can', es: 'Cuando veo que tratan a alguien injustamente, puedo', fa: 'وقتی می‌بینم با کسی ناعادلانه رفتار می‌شود، می‌توانم' }
  }
};
