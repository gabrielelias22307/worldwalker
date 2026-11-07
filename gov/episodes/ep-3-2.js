/* CIVICWALKER · Episode 3.2 · Free Speech at School (Civil Liberties in Practice)
   Des Moines, Iowa, December 1965. A snowy neighborhood. Two plowed streets run east-west (y 8 and y 15) and one
   runs north-south (x 15). North-west: the high school. North-east: the junior high and a home. South-west: the
   library and the church, a home below. South-east: the newspaper office and a park with a frozen pond.
   Real students of the Tinker case (Mary Beth Tinker, John Tinker, Christopher Eckhardt) are only MENTIONED.
   The charter stone: visit three flags (three possible rulings), then plant the flag on the ruling the
   First Amendment and the proof support, and back it up with reasons. */
window.EPISODE = {
  id: '3.2',
  realm: 3,
  sol: 'GOVT',
  title: { en: 'Free Speech at School', es: 'Libertad de expresión en la escuela', fa: 'آزادی بیان در مکتب' },
  place: { en: 'Des Moines, 1965', es: 'Des Moines, 1965', fa: 'دی موین، ۱۹۶۵' },
  weather: { sky: 'snow' },
  intro: [
    { en: 'The Grump tore the page about free speech. Now people think students have none.',
      es: 'El Gruñón rompió la página sobre la libertad de expresión. Ahora creen que los estudiantes no la tienen.',
      fa: 'غرغرو صفحهٔ آزادی بیان را پاره کرد. حالا مردم فکر می‌کنند شاگردان هیچ آزادی ندارند.' },
    { en: 'Talk to the 3 people here, gather proof, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí, junta pruebas y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، ثبوت جمع کن، بعد سنگ منشور را درست کن.' }
  ],
  scenes: {
    at: [-93.61, 41.59],
    start: [
      { en: 'In 1965, the United States was fighting a war in Vietnam.',
        es: 'En 1965, Estados Unidos estaba en una guerra en Vietnam.',
        fa: 'در سال ۱۹۶۵، امریکا در ویتنام جنگ می‌کرد.' },
      { en: 'Many Americans argued about the war. Some wanted it to stop.',
        es: 'Muchos estadounidenses discutían sobre la guerra. Algunos querían que terminara.',
        fa: 'بسیاری از امریکایی‌ها دربارهٔ جنگ بحث می‌کردند. بعضی می‌خواستند جنگ ختم شود.' },
      { en: 'In Des Moines, Iowa, a few students made a quiet plan.',
        es: 'En Des Moines, Iowa, unos pocos estudiantes hicieron un plan tranquilo.',
        fa: 'در دی موین، ایالت آیووا، چند شاگرد یک نقشهٔ آرام کشیدند.' }
    ],
    page: { en: 'In 1969, the Supreme Court ruled 7 to 2 for the students.',
      es: 'En 1969, la Corte Suprema falló 7 a 2 a favor de los estudiantes.',
      fa: 'در سال ۱۹۶۹، ستره محکمه با ۷ رأی در برابر ۲ به نفع شاگردان حکم کرد.' },
    guess: {
      q: { en: 'Do you think students have free speech at school?', es: '¿Crees que los estudiantes tienen libertad de expresión en la escuela?', fa: 'فکر می‌کنی شاگردان در مکتب آزادی بیان دارند؟' },
      choices: [
        { t: { en: '🗣️ Yes, with some limits', es: '🗣️ Sí, con algunos límites', fa: '🗣️ بله، با چند حد' }, ok: true },
        { t: { en: '🤐 No, none at all', es: '🤐 No, ninguna', fa: '🤐 نه، هیچ' } }
      ],
      why: { en: 'Students keep free speech at school. But a school may stop speech that truly disrupts class.', es: 'Los estudiantes conservan la libertad de expresión en la escuela. Pero se puede frenar lo que de verdad interrumpe la clase.', fa: 'شاگردان در مکتب آزادی بیان دارند. اما مکتب می‌تواند گپی را که واقعاً درس را برهم می‌زند منع کند.' }
    },
    next: {
      q: { en: 'Next: Farmville, Virginia, 1951. Students left an unequal school. Was that about civil rights?', es: 'Ahora: Farmville, Virginia, 1951. Unos estudiantes dejaron una escuela desigual. ¿Era sobre derechos civiles?', fa: 'بعدی: فارمویل، ویرجینیا، ۱۹۵۱. شاگردان از یک مکتب نابرابر بیرون رفتند. آیا این دربارهٔ حقوق مدنی بود؟' },
      choices: [
        { t: { en: 'Yes, equal treatment', es: 'Sí, trato igual', fa: 'بله، رفتار برابر' }, ok: true },
        { t: { en: 'No, a sports game', es: 'No, un partido', fa: 'نه، یک مسابقهٔ ورزشی' } }
      ],
      why: { en: 'Black students had a crowded, poor school. They asked for fair and equal treatment: civil rights.', es: 'Los estudiantes negros tenían una escuela llena y pobre. Pidieron trato justo e igual: derechos civiles.', fa: 'شاگردان سیاه‌پوست یک مکتب پرازدحام و فقیر داشتند. رفتار عادلانه و برابر خواستند: حقوق مدنی.' }
    }
  },

  houses: [
    { at: [6, 4], name: { en: 'Gary', es: 'Gary', fa: 'گری' },
      look: { skin: 0, hair: '#c89a50', shirt: '#2a4a8a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am a senior here. My cousin is a soldier in Vietnam.', es: 'Estoy en último año aquí. Mi primo es soldado en Vietnam.', fa: 'من شاگرد صنف آخر اینجا هستم. پسر کاکایم سرباز در ویتنام است.' },
        { en: 'The armbands made me upset. I think they hurt the soldiers.', es: 'Los brazaletes me molestaron. Creo que lastiman a los soldados.', fa: 'بازوبندها مرا ناراحت کرد. فکر می‌کنم به سربازان بی‌احترامی است.' },
        { en: 'But I can say that out loud too. That is free speech.', es: 'Pero yo también puedo decirlo en voz alta. Eso es libertad de expresión.', fa: 'اما من هم می‌توانم این را بلند بگویم. این آزادی بیان است.' }
      ] },
    { at: [21, 4], name: { en: 'Mr. Pratt', es: 'Señor Pratt', fa: 'آقای پرت' },
      look: { skin: 4, hair: '#2a2a2a', shirt: '#6a7a5a', pants: '#3a3a3a', hat: '#4a4a6a', style: 'short' },
      lines: [
        { en: 'I am the janitor. I sweep these halls every day.', es: 'Soy el conserje. Barro estos pasillos todos los días.', fa: 'من خادم مکتب هستم. هر روز این دهلیزها را جارو می‌کنم.' },
        { en: 'The armband day was quiet. No fights, no broken windows.', es: 'El día de los brazaletes fue tranquilo. Sin peleas ni ventanas rotas.', fa: 'روز بازوبندها آرام بود. نه جنگ شد، نه کلکینی شکست.' }
      ] },
    { at: [28, 3], name: { en: 'Grandpa Walt', es: 'Abuelo Walt', fa: 'پدرکلان والت' },
      look: { skin: 1, hair: '#e0e0e0', shirt: '#7a3a2a', pants: '#3a3020', style: 'short' },
      lines: [
        { en: 'I was a soldier long ago, in World War II.', es: 'Fui soldado hace mucho, en la Segunda Guerra Mundial.', fa: 'من خیلی پیش در جنگ جهانی دوم سرباز بودم.' },
        { en: 'I do not agree with those armbands.', es: 'No estoy de acuerdo con esos brazaletes.', fa: 'من با آن بازوبندها موافق نیستم.' },
        { en: 'But free speech protects ideas I do not like, too.', es: 'Pero la libertad de expresión protege también las ideas que no me gustan.', fa: 'اما آزادی بیان از اندیشه‌هایی که خوشم نمی‌آید هم محافظت می‌کند.' }
      ] },
    { at: [4, 12], name: { en: 'Rosa', es: 'Rosa', fa: 'روزا' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#c05a7a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I help at the library after school.', es: 'Ayudo en la biblioteca después de clases.', fa: 'من بعد از مکتب در کتابخانه کمک می‌کنم.' },
        { en: 'Here is the [[bill of rights|Bill of Rights]], the first ten amendments.', es: 'Aquí está la [[bill of rights|Carta de Derechos]], las primeras diez enmiendas.', fa: 'این [[bill of rights|منشور حقوق]] است، ده متمم اول.' },
        { en: 'It was added to the Constitution in 1791.', es: 'Se agregó a la Constitución en 1791.', fa: 'در سال ۱۷۹۱ به قانون اساسی اضافه شد.' }
      ] },
    { at: [11, 12], name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      look: { skin: 2, hair: '#8a5a3a', shirt: '#3a6a5a', pants: '#4a3a3a', style: 'bun' },
      lines: [
        { en: 'Our church is collecting winter coats for families.', es: 'Nuestra iglesia junta abrigos de invierno para las familias.', fa: 'کلیسای ما برای خانواده‌ها کالای زمستانی جمع می‌کند.' },
        { en: 'Some people here pray for peace. Some pray for the soldiers.', es: 'Algunos aquí rezan por la paz. Otros rezan por los soldados.', fa: 'بعضی اینجا برای صلح دعا می‌کنند. بعضی برای سربازان دعا می‌کنند.' },
        { en: 'The First Amendment protects [[religion|freedom of religion]] for all of us.', es: 'La Primera Enmienda protege la [[religion|libertad de religión]] de todos.', fa: 'متمم اول [[religion|آزادی دین]] را برای همهٔ ما حفظ می‌کند.' }
      ] },
    { at: [20, 12], name: { en: 'Ed', es: 'Ed', fa: 'اد' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e8e0d0', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I set the type for the newspaper. We print the armband story.', es: 'Armo las letras del periódico. Imprimimos la noticia de los brazaletes.', fa: 'من حروف روزنامه را می‌چینم. ما خبر بازوبندها را چاپ می‌کنیم.' },
        { en: 'That is [[press|freedom of the press]].', es: 'Eso es la [[press|libertad de prensa]].', fa: 'این [[press|آزادی مطبوعات]] است.' },
        { en: 'The government cannot tell us what to print.', es: 'El gobierno no puede decirnos qué imprimir.', fa: 'حکومت نمی‌تواند به ما بگوید چه چاپ کنیم.' }
      ] },
    { at: [4, 18], name: { en: 'Mrs. Bauer', es: 'Señora Bauer', fa: 'خانم باوئر' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#8a6aaa', pants: '#3a3a4a', style: 'bun' },
      lines: [
        { en: 'Rights come in two kinds. Let me explain.', es: 'Hay dos tipos de derechos. Te explico.', fa: 'حقوق دو نوع است. بگذار توضیح بدهم.' },
        { en: '[[civil liberties|Civil liberties]] are freedoms, like speech. The government cannot take them.', es: 'Las [[civil liberties|libertades civiles]] son libertades, como hablar. El gobierno no puede quitarlas.', fa: '[[civil liberties|آزادی‌های مدنی]] آزادی‌ها هستند، مثل بیان. حکومت نمی‌تواند آن‌ها را بگیرد.' },
        { en: '[[civil rights|Civil rights]] mean fair and equal treatment for every person.', es: 'Los [[civil rights|derechos civiles]] son trato justo e igual para cada persona.', fa: '[[civil rights|حقوق مدنی]] یعنی رفتار عادلانه و برابر با هر نفر.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Streets (l) run east-west at y 8 and y 15 and north-south at x 15. Snow (n) everywhere else, pines (P) on the edge.
     NW: the high school (J roof over h wall, door 6,4). NE: the junior high (Q, door 21,4) and a home (R, door 28,3).
     SW: the library (J, door 4,12), the church (R roof over D stone walls, door 11,12), a home (Q, door 4,18).
     SE: the newspaper office (J, door 20,12) and a park with a frozen pond (i). */
  map: [
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP',
    'PnnnnnnnnnnnnnnlnnnnnnnnnnnnnnnP',
    'PnJJJJJJJJJnTnnlnnQQQQQQQQnRRRnP',
    'PnJJJJJJJJJnnnnlnnQQQQQQQQnhdhnP',
    'PnhhhhdhhhhnnnnlnnhhhdhhhhnnlnnP',
    'PnnnnnlnnnnnnPnlnnnnnlnnnnnnnnnP',
    'PnnnnnlnnnnxnnnlnTnnnlnnnnnnnnPP',
    'PPnnnnlnnnnnnnnlnnnnnlnnnnnnnnnP',
    'PllllllllllllllllllllllllllllllP',
    'PnnnnnnnnRRRRRnlnnnnnnnnnnnnnnnP',
    'PnJJJJJJnRRRRRnlnnJJJJJPnnnnnPnP',
    'PnJJJJJJnDDDDDnlnnJJJJJnnnnnnnnP',
    'PPhhdhhhnDDdDDnlnnhhdhhnnnnnnnnP',
    'PnnnlnnnnnnlnxnlnnnnlnnnnnTnnTnP',
    'PnnnlnnnnnnlnnnlnnnnlnnnnnnnnnnP',
    'PllllllllllllllllllllllllllllllP',
    'PnnnnnnnnnnnnnnlnnnnnnnnnnnnnnnP',
    'PnnQQQnnnnnnnPnlnnnnnnnniiiinnPP',
    'PnnhdhnnnnnnnnnlnnnnnnniiiiiinnP',
    'PnnnlnnnnnnnnPnlnnnnnnnniiiinnnP',
    'PPnnnnnTnnnnnnnlnnnnnnPnnnnnnnnP',
    'PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP'
  ],
  start: [15, 9],

  finds: [
    { clueAt: [12, 4], at: [12, 7], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps south, toward the main street.', es: 'Desde esta nota, camina 3 pasos al sur, hacia la calle principal.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، به طرف سرک اصلی.' },
      text: { en: 'A student lost this pen. Students wrote letters to the newspaper about the war.', es: 'Un estudiante perdió esta pluma. Los estudiantes escribían cartas al periódico sobre la guerra.', fa: 'یک شاگرد این قلم را گم کرد. شاگردان دربارهٔ جنگ به روزنامه نامه می‌نوشتند.' } },
    { clueAt: [17, 20], at: [21, 20], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps east, along the south edge of the park.', es: 'Desde esta nota, camina 4 pasos al este, por el borde sur del parque.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار جنوب پارک.' },
      text: { en: 'A holiday card with a dried flower. It says: Peace on earth.', es: 'Una tarjeta de fiestas con una flor seca. Dice: Paz en la tierra.', fa: 'یک کارت تبریکی با یک گل خشک. رویش نوشته: صلح روی زمین.' } }
  ],

  words: {
    'civil liberties': { en: 'basic freedoms the government cannot take away, like free speech', es: 'libertades básicas que el gobierno no puede quitar, como la libre expresión', fa: 'آزادی‌های اساسی که حکومت نمی‌تواند بگیرد، مثل آزادی بیان' },
    'civil rights': { en: 'the right to fair and equal treatment for every person', es: 'el derecho a un trato justo e igual para cada persona', fa: 'حق رفتار عادلانه و برابر برای هر نفر' },
    'first amendment': { en: 'the part of the Constitution that protects religion, speech, press, assembly and petition', es: 'la parte de la Constitución que protege religión, expresión, prensa, reunión y petición', fa: 'بخشی از قانون اساسی که دین، بیان، مطبوعات، اجتماع و عریضه را حفظ می‌کند' },
    'bill of rights': { en: 'the first ten amendments to the Constitution; they list our freedoms', es: 'las primeras diez enmiendas de la Constitución; nombran nuestras libertades', fa: 'ده متمم اول قانون اساسی؛ آزادی‌های ما را نام می‌برد' },
    'symbolic speech': { en: 'a message shown without words, like an armband or a sign', es: 'un mensaje sin palabras, como un brazalete o un cartel', fa: 'پیامی بدون کلمه، مثل یک بازوبند یا یک نشان' },
    mourn: { en: 'to show sadness for people who died', es: 'mostrar tristeza por personas que murieron', fa: 'غم خود را برای کسانی که مرده‌اند نشان دادن' },
    truce: { en: 'an agreement to stop fighting for a while', es: 'un acuerdo para dejar de pelear por un tiempo', fa: 'توافق برای بند کردن جنگ برای مدتی' },
    disrupt: { en: 'to stop or badly break up class or school work', es: 'detener o interrumpir mucho la clase o el trabajo escolar', fa: 'درس یا کار مکتب را بند کردن یا سخت برهم زدن' },
    suspend: { en: 'to send a student home from school for a time', es: 'mandar a un estudiante a casa por un tiempo', fa: 'یک شاگرد را برای مدتی از مکتب به خانه فرستادن' },
    'supreme court': { en: 'the highest court in the United States', es: 'el tribunal más alto de Estados Unidos', fa: 'بالاترین محکمه در امریکا' },
    press: { en: 'newspapers and other news; they may print news freely', es: 'los periódicos y otras noticias; pueden publicar con libertad', fa: 'روزنامه‌ها و خبرهای دیگر؛ آزادانه خبر چاپ می‌کنند' },
    religion: { en: 'what people believe about God and how they pray', es: 'lo que la gente cree sobre Dios y cómo reza', fa: 'آنچه مردم دربارهٔ خدا باور دارند و چطور دعا می‌کنند' }
  },

  npcs: [
    {
      x: 9, y: 6,
      name: { en: 'Mr. Haller', es: 'Señor Haller', fa: 'آقای هالر' },
      role: { en: 'Teacher', es: 'Maestro', fa: 'معلم' },
      look: { skin: 1, hair: '#6a5a4a', shirt: '#4a5a7a', pants: '#2a2a2a', hat: '#5a3a2a', style: 'short' },
      lines: [
        { en: 'I teach history at this high school.', es: 'Enseño historia en esta escuela secundaria.', fa: 'من در این لیسه تاریخ درس می‌دهم.' },
        { en: 'School leaders heard some students planned to wear black armbands.', es: 'Los líderes escolares supieron que unos estudiantes usarían brazaletes negros.', fa: 'مسئولان مکتب شنیدند که چند شاگرد می‌خواهند بازوبند سیاه ببندند.' },
        { en: 'So they made a rule: no black armbands at school.', es: 'Entonces hicieron una regla: nada de brazaletes negros en la escuela.', fa: 'پس یک قانون ساختند: در مکتب بازوبند سیاه نباشد.' },
        { en: 'They feared fights and trouble in class. Their job is to keep order.', es: 'Temían peleas y problemas en clase. Su trabajo es mantener el orden.', fa: 'از جنگ و بی‌نظمی در صنف می‌ترسیدند. کار آن‌ها نگه داشتن نظم است.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Why did the school leaders ban the armbands?', es: '¿Por qué los líderes escolares prohibieron los brazaletes?', fa: 'چرا مسئولان مکتب بازوبندها را منع کردند؟' },
        choices: [
          { ok: true, t: { en: 'They feared fights and trouble', es: 'Temían peleas y problemas', fa: 'از جنگ و بی‌نظمی می‌ترسیدند' },
            why: { en: 'Yes. They wanted to keep order. Later, the Supreme Court asked if real trouble happened.', es: 'Sí. Querían mantener el orden. Después, la Corte Suprema preguntó si hubo problemas de verdad.', fa: 'بله. می‌خواستند نظم را نگه دارند. بعداً ستره محکمه پرسید آیا واقعاً مشکلی پیش آمد.' } },
          { t: { en: 'Armbands cost the school money', es: 'Los brazaletes le costaban dinero', fa: 'بازوبندها برای مکتب پول خرچ داشت' },
            why: { en: 'No. Students made their own armbands. The leaders were worried about trouble.', es: 'No. Los estudiantes hacían sus propios brazaletes. A los líderes les preocupaban los problemas.', fa: 'نه. شاگردان خودشان بازوبند ساختند. مسئولان از بی‌نظمی نگران بودند.' } },
          { t: { en: 'The Constitution bans armbands', es: 'La Constitución prohíbe brazaletes', fa: 'قانون اساسی بازوبند را منع می‌کند' },
            why: { en: 'No. The Constitution says nothing about armbands. It protects free speech.', es: 'No. La Constitución no dice nada de brazaletes. Protege la libertad de expresión.', fa: 'نه. قانون اساسی دربارهٔ بازوبند چیزی نمی‌گوید. از آزادی بیان محافظت می‌کند.' } }
        ]
      }
    },
    {
      x: 23, y: 6,
      name: { en: 'Linda', es: 'Linda', fa: 'لیندا' },
      role: { en: 'Junior high student', es: 'Estudiante de secundaria', fa: 'شاگرد متوسطه' },
      look: { skin: 2, hair: '#3a2416', shirt: '#d9542b', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'Mary Beth Tinker is in my class. She is 13.', es: 'Mary Beth Tinker está en mi clase. Tiene 13 años.', fa: 'مری بث تینکر هم‌صنفی من است. ۱۳ ساله است.' },
        { en: 'In December, she wore a black armband to school.', es: 'En diciembre, llevó un brazalete negro a la escuela.', fa: 'در ماه دسمبر، او با یک بازوبند سیاه به مکتب آمد.' },
        { en: 'It was to [[mourn|mourn]] the dead of the Vietnam War and ask for a [[truce|truce]].', es: 'Era para [[mourn|guardar luto]] por los muertos de la guerra de Vietnam y pedir una [[truce|tregua]].', fa: 'برای [[mourn|سوگواری]] کشته‌شدگان جنگ ویتنام و خواستن [[truce|آتش‌بس]] بود.' },
        { en: 'She said no words. But she was [[suspend|sent home]].', es: 'No dijo ni una palabra. Pero la [[suspend|mandaron a casa]].', fa: 'هیچ گپی نزد. اما او را [[suspend|به خانه فرستادند]].' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'An armband says something without words. What is that called?', es: 'Un brazalete dice algo sin palabras. ¿Cómo se llama eso?', fa: 'یک بازوبند بدون کلمه چیزی می‌گوید. نام آن چیست؟' },
        choices: [
          { ok: true, t: { en: 'Symbolic speech', es: 'Expresión simbólica', fa: 'بیان نمادین' },
            why: { en: 'Yes! [[symbolic speech|Symbolic speech]] is a message without words. The First Amendment protects it too.', es: '¡Sí! La [[symbolic speech|expresión simbólica]] es un mensaje sin palabras. La Primera Enmienda también la protege.', fa: 'بله! [[symbolic speech|بیان نمادین]] پیامی بدون کلمه است. متمم اول از آن هم محافظت می‌کند.' } },
          { t: { en: 'A school uniform', es: 'Un uniforme escolar', fa: 'یونیفورم مکتب' },
            why: { en: 'No. A uniform is what a school asks you to wear. The armband was her own message.', es: 'No. Un uniforme es lo que la escuela pide usar. El brazalete era su propio mensaje.', fa: 'نه. یونیفورم چیزی است که مکتب می‌خواهد بپوشی. بازوبند پیام خود او بود.' } },
          { t: { en: 'A spoken threat', es: 'Una amenaza hablada', fa: 'یک تهدید زبانی' },
            why: { en: 'No. The armband was silent and peaceful. It did not threaten anyone.', es: 'No. El brazalete era callado y pacífico. No amenazaba a nadie.', fa: 'نه. بازوبند خاموش و آرام بود. هیچ کس را تهدید نکرد.' } }
        ]
      }
    },
    {
      x: 7, y: 14,
      name: { en: 'Mrs. Lindqvist', es: 'Señora Lindqvist', fa: 'خانم لیندکویست' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 0, hair: '#b0a090', shirt: '#2f8f8f', pants: '#4a3a3a', style: 'bun' },
      lines: [
        { en: 'Come in from the snow! Let us look up your rights.', es: '¡Entra, que hay nieve! Busquemos tus derechos.', fa: 'از برف بیا داخل! بیا حقوقت را پیدا کنیم.' },
        { en: '[[civil liberties|Civil liberties]] are freedoms the government cannot take away.', es: 'Las [[civil liberties|libertades civiles]] son libertades que el gobierno no puede quitar.', fa: '[[civil liberties|آزادی‌های مدنی]] آزادی‌هایی هستند که حکومت نمی‌تواند بگیرد.' },
        { en: 'The [[first amendment|First Amendment]] protects religion, speech, press, assembly and petition.', es: 'La [[first amendment|Primera Enmienda]] protege religión, expresión, prensa, reunión y petición.', fa: '[[first amendment|متمم اول]] دین، بیان، مطبوعات، اجتماع و عریضه را حفظ می‌کند.' },
        { en: 'Free speech has limits. A real threat to hurt someone is not protected.', es: 'La libre expresión tiene límites. Una amenaza real de hacer daño no está protegida.', fa: 'آزادی بیان حد دارد. تهدید واقعی برای آزار کسی محافظت نمی‌شود.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which one is a civil liberty, a freedom the government cannot take away?', es: '¿Cuál es una libertad civil, una libertad que el gobierno no puede quitar?', fa: 'کدام یکی آزادی مدنی است، آزادی‌ای که حکومت نمی‌تواند بگیرد؟' },
        choices: [
          { ok: true, t: { en: 'Freedom to speak your mind', es: 'Libertad de decir lo que piensas', fa: 'آزادی گفتن نظر خودت' },
            why: { en: 'Yes. Free speech is a civil liberty. The First Amendment protects it.', es: 'Sí. La libre expresión es una libertad civil. La Primera Enmienda la protege.', fa: 'بله. آزادی بیان یک آزادی مدنی است. متمم اول از آن محافظت می‌کند.' } },
          { t: { en: 'Equal pay at the same job', es: 'Igual pago en el mismo trabajo', fa: 'معاش برابر در یک وظیفه' },
            why: { en: 'That is a civil right: fair and equal treatment. A civil liberty is a freedom.', es: 'Eso es un derecho civil: trato justo e igual. Una libertad civil es una libertad.', fa: 'این حق مدنی است: رفتار عادلانه و برابر. آزادی مدنی یک آزادی است.' } },
          { t: { en: 'A free bus ride to school', es: 'Un viaje gratis en bus a la escuela', fa: 'سفر مفت با بس تا مکتب' },
            why: { en: 'No. A bus ride is a service. A civil liberty is a freedom, like speech.', es: 'No. Un viaje en bus es un servicio. Una libertad civil es una libertad, como hablar.', fa: 'نه. سفر با بس یک خدمت است. آزادی مدنی یک آزادی است، مثل بیان.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 6, text: { en: 'HIGH SCHOOL · DES MOINES, IOWA · DECEMBER 1965 · Snow day? No, school is open!', es: 'ESCUELA SECUNDARIA · DES MOINES, IOWA · DICIEMBRE DE 1965 · ¿Día de nieve? ¡No, hay clases!', fa: 'لیسه · دی موین، آیووا · دسمبر ۱۹۶۵ · روز برفی؟ نه، مکتب باز است!' } },
    { x: 13, y: 13, text: { en: 'PUBLIC LIBRARY · CHURCH · Read the Bill of Rights inside, free for everyone.', es: 'BIBLIOTECA PÚBLICA · IGLESIA · Lee la Carta de Derechos adentro, gratis para todos.', fa: 'کتابخانهٔ عمومی · کلیسا · منشور حقوق را داخل بخوان، برای همه مفت.' } }
  ],

  /* the quest: Dale the reporter (gold !) by the newspaper office, south-east -> Mrs. Novak, a parent, by her home
     in the north-east -> find the notebook at the west end of the south street, south-west -> back to Dale */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Notebook', es: 'La libreta perdida', fa: 'کتابچهٔ گمشده' },
    giver: {
      x: 22, y: 13,
      name: { en: 'Dale', es: 'Dale', fa: 'دیل' },
      role: { en: 'Reporter', es: 'Reportero', fa: 'خبرنگار' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a7a5a', pants: '#3a3a3a', hat: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I write for the newspaper. The wind took my notebook!', es: 'Escribo para el periódico. ¡El viento se llevó mi libreta!', fa: 'من برای روزنامه می‌نویسم. باد کتابچه‌ام را برد!' },
        { en: 'It has the exact school rule in it. Ask Mrs. Novak. She saw it fly.', es: 'Tiene la regla exacta de la escuela. Pregúntale a la señora Novak. Ella la vio volar.', fa: 'قانون دقیق مکتب در آن است. از خانم نواک بپرس. او پرواز آن را دید.' }
      ],
      wait: { en: 'Mrs. Novak lives in the north-east, by the junior high.', es: 'La señora Novak vive al noreste, junto a la secundaria.', fa: 'خانم نواک در شمال شرق، کنار مکتب متوسطه زندگی می‌کند.' },
      thanks: { en: 'My notes! Campaign buttons were allowed. Only black armbands were banned.', es: '¡Mis notas! Los botones de campaña estaban permitidos. Solo se prohibieron los brazaletes negros.', fa: 'یادداشت‌هایم! نشان‌های کمپاین اجازه بود. فقط بازوبند سیاه منع شد.' }
    },
    contact: {
      x: 29, y: 4,
      name: { en: 'Mrs. Novak', es: 'Señora Novak', fa: 'خانم نواک' },
      role: { en: 'Parent', es: 'Madre', fa: 'مادر' },
      look: { skin: 4, hair: '#1a1008', shirt: '#b04a4a', pants: '#2a2a3a', hat: '#e8e0d0', style: 'long' },
      lines: [
        { en: 'My son wore an armband too. I am proud, but I worry.', es: 'Mi hijo también llevó un brazalete. Estoy orgullosa, pero me preocupo.', fa: 'پسرم هم بازوبند بست. افتخار می‌کنم، اما نگرانم.' },
        { en: 'I saw papers fly west along the south street. Look past the library.', es: 'Vi papeles volar al oeste por la calle del sur. Busca más allá de la biblioteca.', fa: 'دیدم کاغذها در سرک جنوبی به طرف غرب پرواز کردند. آن طرف کتابخانه ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [2, 16],
      hint: { en: 'Look at the west end of the south street, past the library', es: 'Busca en el extremo oeste de la calle del sur, después de la biblioteca', fa: 'در آخر غربی سرک جنوبی، آن طرف کتابخانه ببین' },
      found: { en: 'The notebook, half buried in snow! It lists the exact school rule.', es: '¡La libreta, medio enterrada en la nieve! Tiene la regla exacta de la escuela.', fa: 'کتابچه، نیمه زیر برف! قانون دقیق مکتب در آن نوشته است.' },
      item: { icon: '📓', name: { en: 'The reporter\'s notebook', es: 'La libreta del reportero', fa: 'کتابچهٔ خبرنگار' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 20]],
  smudges: [[6, 19], [25, 9]],

  challenge: {
    at: [27, 11],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each possible ruling: by the high school, between the library and the church, by the junior high
    spots: [[3, 6], [8, 13], [25, 5]],
    stat: 'hei',
    title: { en: 'Plant the flag on the ruling', es: 'Pon la bandera en el fallo', fa: 'بیرق را روی حکم بگذار' },
    intro: { en: 'The case reaches the [[supreme court|Supreme Court]]. Visit each flag. Pick the right ruling, then give two reasons.',
      es: 'El caso llega a la [[supreme court|Corte Suprema]]. Visita cada bandera. Elige el fallo correcto y da dos razones.',
      fa: 'این قضیه به [[supreme court|ستره محکمه]] می‌رسد. به هر بیرق سر بزن. حکم درست را انتخاب کن، بعد دو دلیل بده.' },
    options: [
      { icon: '⛔', name: { en: 'The school may ban any speech it dislikes', es: 'La escuela puede prohibir lo que no le guste', fa: 'مکتب هر گپی را که خوشش نیاید منع کند' },
        desc: { en: 'School leaders decide what students may say.', es: 'Los líderes escolares deciden qué pueden decir los estudiantes.', fa: 'مسئولان مکتب تصمیم می‌گیرند شاگردان چه بگویند.' },
        result: { en: 'Then students lose free speech at the school door. The Court did not rule this way.', es: 'Entonces los estudiantes pierden la libertad de expresión en la puerta. La Corte no falló así.', fa: 'آن وقت شاگردان آزادی بیان را دم دروازهٔ مکتب از دست می‌دهند. محکمه این‌طور حکم نکرد.' } },
      { icon: '⚖️', name: { en: 'Students keep free speech, unless it disrupts school', es: 'Los estudiantes tienen libre expresión, salvo si interrumpe', fa: 'شاگردان آزادی بیان دارند، مگر درس برهم بخورد' },
        desc: { en: 'Quiet messages are allowed. Real disruption can be stopped.', es: 'Los mensajes tranquilos se permiten. Lo que de verdad interrumpe se puede frenar.', fa: 'پیام آرام اجازه است. برهم زدن واقعی را می‌شود منع کرد.' },
        result: { en: 'This is the real ruling! In 1969 the Court ruled 7 to 2 for the students.', es: '¡Este es el fallo real! En 1969 la Corte falló 7 a 2 a favor de los estudiantes.', fa: 'این حکم واقعی است! در ۱۹۶۹ محکمه با ۷ در برابر ۲ به نفع شاگردان حکم کرد.' } },
      { icon: '📢', name: { en: 'Students may say anything at school, even threats', es: 'Los estudiantes pueden decir todo, hasta amenazas', fa: 'شاگردان هر چیز بگویند، حتی تهدید' },
        desc: { en: 'No limits at all on what students say.', es: 'Ningún límite a lo que dicen los estudiantes.', fa: 'هیچ حدی برای گپ شاگردان نیست.' },
        result: { en: 'Then a student could threaten others. Free speech has limits, so the Court did not say this.', es: 'Entonces un estudiante podría amenazar a otros. La libre expresión tiene límites, así que la Corte no dijo esto.', fa: 'آن وقت یک شاگرد می‌توانست دیگران را تهدید کند. آزادی بیان حد دارد، پس محکمه این را نگفت.' } }
    ],
    kinds: [
      { id: 'law', label: { en: 'What the First Amendment says', es: 'Lo que dice la Primera Enmienda', fa: 'آنچه متمم اول می‌گوید' } },
      { id: 'proof', label: { en: 'Proof from Des Moines', es: 'Pruebas de Des Moines', fa: 'ثبوت از دی موین' } }
    ],
    reasons: [
      { kind: 'law', fits: [1], t: { en: 'Free speech is a right, and students are people too.', es: 'La libre expresión es un derecho, y los estudiantes también son personas.', fa: 'آزادی بیان یک حق است، و شاگردان هم انسان هستند.' },
        why: { en: 'Yes. Students do not lose their rights at the schoolhouse gate.', es: 'Sí. Los estudiantes no pierden sus derechos en la puerta de la escuela.', fa: 'بله. شاگردان حقوق خود را دم دروازهٔ مکتب از دست نمی‌دهند.' } },
      { kind: 'law', fits: [0, 1], t: { en: 'Schools need some order so students can learn.', es: 'Las escuelas necesitan orden para que los estudiantes aprendan.', fa: 'مکتب‌ها کمی نظم لازم دارند تا شاگردان یاد بگیرند.' },
        why: { en: 'True. That is why schools may stop speech that really disrupts class.', es: 'Cierto. Por eso las escuelas pueden frenar lo que de verdad interrumpe la clase.', fa: 'درست. به همین خاطر مکتب می‌تواند گپی را که واقعاً درس را برهم بزند منع کند.' } },
      { kind: 'law', fits: [], t: { en: 'Free speech protects every word, even real threats.', es: 'La libre expresión protege toda palabra, hasta amenazas reales.', fa: 'آزادی بیان از هر کلمه محافظت می‌کند، حتی تهدید واقعی.' },
        why: { en: 'No. A real threat to hurt someone is not protected. Free speech has limits.', es: 'No. Una amenaza real de hacer daño no está protegida. La libre expresión tiene límites.', fa: 'نه. تهدید واقعی برای آزار کسی محافظت نمی‌شود. آزادی بیان حد دارد.' } },
      { kind: 'law', fits: [], t: { en: 'Rights only begin when a person turns 18.', es: 'Los derechos empiezan solo a los 18 años.', fa: 'حقوق فقط وقتی شروع می‌شود که کسی ۱۸ ساله شود.' },
        why: { en: 'No. The Court said students have constitutional rights too.', es: 'No. La Corte dijo que los estudiantes también tienen derechos de la Constitución.', fa: 'نه. محکمه گفت شاگردان هم حقوق قانون اساسی دارند.' } },
      { kind: 'proof', fits: [1], t: { en: 'The armbands were quiet. Classes went on without trouble.', es: 'Los brazaletes eran callados. Las clases siguieron sin problemas.', fa: 'بازوبندها خاموش بودند. درس‌ها بدون مشکل ادامه یافت.' },
        why: { en: 'Right. There was no real disruption, so the ban went too far.', es: 'Correcto. No hubo una interrupción real, así que la prohibición fue demasiado lejos.', fa: 'درست. هیچ برهم زدن واقعی نبود، پس منع کردن زیاده‌روی بود.' } },
      { kind: 'proof', fits: [1], t: { en: 'Campaign buttons were allowed. Only black armbands were banned.', es: 'Los botones de campaña se permitían. Solo se prohibieron los brazaletes negros.', fa: 'نشان‌های کمپاین اجازه بود. فقط بازوبند سیاه منع شد.' },
        why: { en: 'Yes. The rule stopped just one opinion, the one against the war.', es: 'Sí. La regla frenó solo una opinión, la que estaba contra la guerra.', fa: 'بله. این قانون فقط یک نظر را منع کرد، نظر ضد جنگ را.' } },
      { kind: 'proof', fits: [], t: { en: 'Leaders feared the armbands might start fights.', es: 'Los líderes temían que los brazaletes causaran peleas.', fa: 'مسئولان می‌ترسیدند بازوبندها جنگ بیندازد.' },
        why: { en: 'That fear was real. But the Court said fear alone is not enough.', es: 'Ese miedo era real. Pero la Corte dijo que el miedo solo no basta.', fa: 'این ترس واقعی بود. اما محکمه گفت فقط ترس کافی نیست.' } },
      { kind: 'proof', fits: [], t: { en: 'The students shouted and stopped every class.', es: 'Los estudiantes gritaron y detuvieron cada clase.', fa: 'شاگردان چیغ زدند و هر درس را بند کردند.' },
        why: { en: 'No. That did not happen. The armbands made no sound at all.', es: 'No. Eso no pasó. Los brazaletes no hacían ningún ruido.', fa: 'نه. این اتفاق نیفتاد. بازوبندها هیچ صدایی نداشتند.' } }
    ],
    mismatch: { en: 'That reason does not back up the ruling you picked.', es: 'Esa razón no apoya el fallo que elegiste.', fa: 'این دلیل از حکمی که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'That is the ruling! Students keep their rights at school, unless their speech truly disrupts it.', es: '¡Ese es el fallo! Los estudiantes conservan sus derechos en la escuela, salvo si su expresión de verdad interrumpe.', fa: 'حکم همین است! شاگردان در مکتب حقوق خود را دارند، مگر گپ‌شان واقعاً درس را برهم بزند.' }
  },

  boss: {
    at: [29, 19],
    stat: 'hei',
    need: 3,
    name: { en: 'The Hush Grump', es: 'El Gruñón del Silencio', fa: 'غرغروی خاموش‌کن' },
    appear: { en: 'The Hush Grump is hiding in the snow fog by the frozen pond!', es: '¡El Gruñón del Silencio se esconde en la niebla de nieve junto al estanque helado!', fa: 'غرغروی خاموش‌کن در مه برفی کنار حوض یخ‌زده پنهان است!' },
    taunt: { en: 'Shh! No armbands, no buttons, no words! Everybody hush!', es: '¡Shh! ¡Nada de brazaletes, ni botones, ni palabras! ¡Todos a callar!', fa: 'هیس! نه بازوبند، نه نشان، نه کلمه! همه خاموش!' },
    win: { en: 'The snow fog melts away. Charter page 3.2 floats down into your hands!', es: 'La niebla de nieve se derrite. ¡La página 3.2 de la carta cae en tus manos!', fa: 'مه برفی آب می‌شود. صفحهٔ ۳.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What are civil liberties?', es: '¿Qué son las libertades civiles?', fa: 'آزادی‌های مدنی چیست؟' },
        choices: [
          { en: 'Freedoms the government cannot take away', es: 'Libertades que el gobierno no puede quitar', fa: 'آزادی‌هایی که حکومت نمی‌تواند بگیرد' },
          { en: 'Jobs the government gives to citizens', es: 'Trabajos que el gobierno da a los ciudadanos', fa: 'وظیفه‌هایی که حکومت به شهروندان می‌دهد' },
          { en: 'Rules that each school makes for students', es: 'Reglas que cada escuela hace para estudiantes', fa: 'قانون‌هایی که هر مکتب برای شاگردان می‌سازد' },
          { en: 'Taxes that every family must pay', es: 'Impuestos que cada familia debe pagar', fa: 'مالیه‌ای که هر خانواده باید بپردازد' }],
        answer: 0,
        why: { en: 'Civil liberties are basic freedoms, like speech and religion. The government cannot take them away.', es: 'Las libertades civiles son libertades básicas, como la expresión y la religión. El gobierno no puede quitarlas.', fa: 'آزادی‌های مدنی آزادی‌های اساسی هستند، مثل بیان و دین. حکومت نمی‌تواند آن‌ها را بگیرد.' } },
      { q: { en: 'Which amendment protects freedom of speech?', es: '¿Qué enmienda protege la libertad de expresión?', fa: 'کدام متمم از آزادی بیان محافظت می‌کند؟' },
        choices: [
          { en: 'The First Amendment', es: 'La Primera Enmienda', fa: 'متمم اول' },
          { en: 'The Fifth Amendment', es: 'La Quinta Enmienda', fa: 'متمم پنجم' },
          { en: 'The Tenth Amendment', es: 'La Décima Enmienda', fa: 'متمم دهم' },
          { en: 'The Second Amendment', es: 'La Segunda Enmienda', fa: 'متمم دوم' }],
        answer: 0,
        why: { en: 'The First Amendment protects religion, speech, press, assembly and petition.', es: 'La Primera Enmienda protege religión, expresión, prensa, reunión y petición.', fa: 'متمم اول دین، بیان، مطبوعات، اجتماع و عریضه را حفظ می‌کند.' } },
      { q: { en: 'Why did the students wear black armbands in December 1965?', es: '¿Por qué los estudiantes usaron brazaletes negros en diciembre de 1965?', fa: 'چرا شاگردان در دسمبر ۱۹۶۵ بازوبند سیاه بستند؟' },
        choices: [
          { en: 'To mourn the war dead and ask for a truce', es: 'Por los muertos de la guerra y pedir una tregua', fa: 'برای سوگ کشته‌های جنگ و خواستن آتش‌بس' },
          { en: 'To cheer for their school basketball team', es: 'Para animar a su equipo de básquetbol', fa: 'برای تشویق تیم باسکتبال مکتب‌شان' },
          { en: 'To protest a new school lunch rule', es: 'Para protestar por una regla del almuerzo', fa: 'برای اعتراض به قانون تازهٔ نان چاشت' },
          { en: 'To show they were in the same club', es: 'Para mostrar que eran del mismo club', fa: 'برای نشان دادن اینکه عضو یک کلب بودند' }],
        answer: 0,
        why: { en: 'They mourned the dead of the Vietnam War and supported a truce, a pause in the fighting.', es: 'Guardaban luto por los muertos de la guerra de Vietnam y apoyaban una tregua, una pausa en la lucha.', fa: 'آن‌ها برای کشته‌شدگان جنگ ویتنام سوگواری کردند و از آتش‌بس، یعنی توقف جنگ، حمایت کردند.' } },
      { q: { en: 'What did the Supreme Court decide in Tinker v. Des Moines?', es: '¿Qué decidió la Corte Suprema en Tinker contra Des Moines?', fa: 'ستره محکمه در قضیهٔ تینکر علیه دی موین چه حکم کرد؟' },
        choices: [
          { en: 'Students keep free speech at school', es: 'Los estudiantes tienen libre expresión en la escuela', fa: 'شاگردان در مکتب آزادی بیان دارند' },
          { en: 'Schools may ban any speech at all', es: 'Las escuelas pueden prohibir cualquier expresión', fa: 'مکتب‌ها می‌توانند هر گپی را منع کنند' },
          { en: 'Only adults have the right to free speech', es: 'Solo los adultos tienen libre expresión', fa: 'فقط بزرگسالان حق آزادی بیان دارند' },
          { en: 'Armbands are against the Constitution', es: 'Los brazaletes van contra la Constitución', fa: 'بازوبند مخالف قانون اساسی است' }],
        answer: 0,
        why: { en: 'The Court said students do not shed their rights at the schoolhouse gate.', es: 'La Corte dijo que los estudiantes no dejan sus derechos en la puerta de la escuela.', fa: 'محکمه گفت شاگردان حقوق خود را دم دروازهٔ مکتب از دست نمی‌دهند.' } },
      { q: { en: 'How did the nine justices vote in 1969?', es: '¿Cómo votaron los nueve jueces en 1969?', fa: 'نُه قاضی در ۱۹۶۹ چطور رأی دادند؟' },
        choices: [
          { en: '7 to 2 for the students', es: '7 a 2 por los estudiantes', fa: '۷ در برابر ۲ به نفع شاگردان' },
          { en: '9 to 0 for the students', es: '9 a 0 por los estudiantes', fa: '۹ در برابر ۰ به نفع شاگردان' },
          { en: '5 to 4 for the school', es: '5 a 4 por la escuela', fa: '۵ در برابر ۴ به نفع مکتب' },
          { en: '6 to 3 for the school', es: '6 a 3 por la escuela', fa: '۶ در برابر ۳ به نفع مکتب' }],
        answer: 0,
        why: { en: 'Seven justices sided with the students. Two sided with the school.', es: 'Siete jueces apoyaron a los estudiantes. Dos apoyaron a la escuela.', fa: 'هفت قاضی طرف شاگردان را گرفتند. دو قاضی طرف مکتب را گرفتند.' } },
      { q: { en: 'After Tinker, when may a school limit student speech?', es: 'Después de Tinker, ¿cuándo puede una escuela limitar la expresión?', fa: 'بعد از تینکر، مکتب چه وقت می‌تواند گپ شاگردان را محدود کند؟' },
        choices: [
          { en: 'When it would substantially disrupt school', es: 'Cuando interrumpiría mucho la escuela', fa: 'وقتی مکتب را به‌طور جدی برهم بزند' },
          { en: 'When a teacher does not agree with it', es: 'Cuando un maestro no está de acuerdo', fa: 'وقتی یک معلم با آن موافق نباشد' },
          { en: 'When it is about a war or the news', es: 'Cuando trata de una guerra o noticias', fa: 'وقتی دربارهٔ جنگ یا خبرها باشد' },
          { en: 'Whenever one parent writes to complain', es: 'Cuando un padre escribe para quejarse', fa: 'هر وقت یک والد شکایت بنویسد' }],
        answer: 0,
        why: { en: 'A school may stop speech that would substantially disrupt school, not just speech it dislikes.', es: 'Una escuela puede frenar lo que interrumpiría mucho, no solo lo que no le gusta.', fa: 'مکتب می‌تواند گپی را منع کند که درس را جدی برهم بزند، نه فقط چیزی که خوشش نمی‌آید.' } },
      { q: { en: 'A silent black armband is an example of what?', es: 'Un brazalete negro y callado, ¿es un ejemplo de qué?', fa: 'یک بازوبند سیاه و خاموش نمونهٔ چیست؟' },
        choices: [
          { en: 'Symbolic speech', es: 'Expresión simbólica', fa: 'بیان نمادین' },
          { en: 'Freedom of the press', es: 'Libertad de prensa', fa: 'آزادی مطبوعات' },
          { en: 'The right to vote', es: 'El derecho al voto', fa: 'حق رأی' },
          { en: 'Freedom of religion', es: 'Libertad de religión', fa: 'آزادی دین' }],
        answer: 0,
        why: { en: 'Symbolic speech shows a message without words. The First Amendment protects it.', es: 'La expresión simbólica muestra un mensaje sin palabras. La Primera Enmienda la protege.', fa: 'بیان نمادین پیامی را بدون کلمه نشان می‌دهد. متمم اول از آن محافظت می‌کند.' } },
      { q: { en: 'Which kind of speech is NOT protected by the First Amendment?', es: '¿Qué tipo de expresión NO protege la Primera Enmienda?', fa: 'کدام نوع گپ را متمم اول محافظت نمی‌کند؟' },
        choices: [
          { en: 'A real threat to hurt someone', es: 'Una amenaza real de hacer daño', fa: 'تهدید واقعی برای آزار کسی' },
          { en: 'A sign that says Peace on earth', es: 'Un cartel que dice Paz en la tierra', fa: 'لوحه‌ای که رویش صلح روی زمین نوشته' },
          { en: 'A letter to the local newspaper', es: 'Una carta al periódico local', fa: 'یک نامه به روزنامهٔ محلی' },
          { en: 'A speech against a city law', es: 'Un discurso contra una ley de la ciudad', fa: 'یک سخنرانی ضد قانون شهر' }],
        answer: 0,
        why: { en: 'Free speech has limits. A real threat puts people in danger, so it is not protected.', es: 'La libre expresión tiene límites. Una amenaza real pone en peligro a la gente, así que no se protege.', fa: 'آزادی بیان حد دارد. تهدید واقعی مردم را در خطر می‌اندازد، پس محافظت نمی‌شود.' } }
    ]
  },

  learned: [
    { en: '[[civil liberties|Civil liberties]] are freedoms the government cannot take away, like free speech.', es: 'Las [[civil liberties|libertades civiles]] son libertades que el gobierno no puede quitar, como la libre expresión.', fa: '[[civil liberties|آزادی‌های مدنی]] آزادی‌هایی هستند که حکومت نمی‌تواند بگیرد، مثل آزادی بیان.' },
    { en: 'In Tinker v. Des Moines (1969), the Court said students keep free speech at school.', es: 'En Tinker contra Des Moines (1969), la Corte dijo que los estudiantes tienen libre expresión en la escuela.', fa: 'در قضیهٔ تینکر علیه دی موین (۱۹۶۹)، محکمه گفت شاگردان در مکتب آزادی بیان دارند.' },
    { en: 'A school may limit speech that would [[disrupt|substantially disrupt]] school. Real threats are not protected.', es: 'Una escuela puede limitar lo que [[disrupt|interrumpiría mucho]] la escuela. Las amenazas reales no se protegen.', fa: 'مکتب می‌تواند گپی را که درس را [[disrupt|جدی برهم بزند]] محدود کند. تهدید واقعی محافظت نمی‌شود.' }
  ],
  reflect: {
    q: { en: 'What message do you care about? How could you share it at school without disrupting class?', es: '¿Qué mensaje te importa? ¿Cómo podrías compartirlo en la escuela sin interrumpir la clase?', fa: 'کدام پیام برایت مهم است؟ چطور می‌توانی آن را در مکتب بدون برهم زدن درس بگویی؟' },
    starter: { en: 'A message I care about is', es: 'Un mensaje que me importa es', fa: 'پیامی که برایم مهم است این است:' }
  }
};
