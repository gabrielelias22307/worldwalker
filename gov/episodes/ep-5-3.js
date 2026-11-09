/* CIVICWALKER · Episode 5.3 · The Role of Congress (more than making laws)
   Washington, DC, today: the congressional office buildings and hearing rooms across from the Capitol. North is up.
   North-west: a Senate office building with a hearing room inside (the dais where senators sit, the witness table,
   the press table). North-east: the Capitol and its plaza. Between them and the south half runs the avenue (l).
   South-west: a House office building, a row of office doors over a long hallway. South-east: a small park with a
   fountain and the entrance to the Metro (the train under the city).
   The charter stone (on the Capitol plaza) asks the student to set 3 levers so impeachment works the way the
   Constitution says: the House charges, the Senate holds the trial, two thirds of senators present must vote to remove. */
window.EPISODE = {
  id: '5.3',
  realm: 5,
  sol: 'GOVT',
  title: { en: 'The Role of Congress', es: 'El papel del Congreso', fa: 'نقش کانگرس' },
  place: { en: 'Capitol Hill hearing rooms, today', es: 'Salas de audiencias del Capitolio, hoy', fa: 'تالارهای جلسه در تپهٔ کاپیتول، امروز' },
  intro: [
    { en: 'The Grump tore the page about the big jobs of Congress. Now nobody checks anybody!',
      es: 'El Gruñón rompió la página sobre los grandes trabajos del Congreso. ¡Ahora nadie controla a nadie!',
      fa: 'غرغرو صفحهٔ کارهای بزرگ کانگرس را پاره کرد. حالا هیچ کس بر هیچ کس نظارت نمی‌کند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Washington, DC on the world map (no timeline in this game) */
  scenes: {
    at: [-77.01, 38.89],
    start: [
      { en: 'Big office buildings for Congress stand across the street from the Capitol.',
        es: 'Grandes edificios de oficinas del Congreso están frente al Capitolio.',
        fa: 'ساختمان‌های بزرگ دفتر کانگرس آن طرف سرک، روبروی کاپیتول، هستند.' },
      { en: 'Senators and Representatives work here, with their staff.',
        es: 'Aquí trabajan los senadores y los representantes, con su personal.',
        fa: 'سناتورها و نماینده‌ها با کارمندان خود اینجا کار می‌کنند.' },
      { en: 'Congress makes laws. But it has other big jobs too.',
        es: 'El Congreso hace leyes. Pero también tiene otros trabajos grandes.',
        fa: 'کانگرس قانون می‌سازد. اما کارهای بزرگ دیگر هم دارد.' }
    ],
    page: { en: 'In 1868, Andrew Johnson was the first President impeached. The Senate did not remove him.',
      es: 'En 1868, Andrew Johnson fue el primer presidente acusado en juicio político. El Senado no lo destituyó.',
      fa: 'در سال ۱۸۶۸، اندرو جانسون اولین رئیس جمهوری بود که استیضاح شد. سنا او را برکنار نکرد.' },
    guess: {
      q: { en: 'Can Congress ask the government\'s agencies hard questions in public?', es: '¿Puede el Congreso hacerles preguntas difíciles a las agencias del gobierno en público?', fa: 'آیا کانگرس می‌تواند از اداره‌های حکومت پیش مردم سوال‌های سخت بپرسد؟' },
      choices: [
        { t: { en: '🎤 Yes, at hearings', es: '🎤 Sí, en audiencias', fa: '🎤 بله، در جلسه‌ها' }, ok: true },
        { t: { en: '🚫 No, never', es: '🚫 No, nunca', fa: '🚫 نه، هرگز' } }
      ],
      why: { en: 'Yes. Committees hold hearings and call witnesses. This checks the executive branch.', es: 'Sí. Los comités hacen audiencias y llaman testigos. Así controlan al poder ejecutivo.', fa: 'بله. کمیته‌ها جلسهٔ شنیدن می‌گیرند و شاهدان را می‌خواهند. این بر قوهٔ اجرائیه نظارت می‌کند.' }
    },
    next: {
      q: { en: 'Next: the President has many jobs. Who leads the army and navy?', es: 'Ahora: el presidente tiene muchos trabajos. ¿Quién dirige el ejército y la marina?', fa: 'بعدی: رئیس جمهور کارهای زیادی دارد. کی اردو و نیروی بحری را رهبری می‌کند؟' },
      choices: [
        { t: { en: '🎖️ The President', es: '🎖️ El presidente', fa: '🎖️ رئیس جمهور' }, ok: true },
        { t: { en: '🏛️ The Senate', es: '🏛️ El Senado', fa: '🏛️ سنا' } }
      ],
      why: { en: 'The President is Commander in Chief of the military, and also the Chief Diplomat.', es: 'El presidente es el comandante en jefe de las fuerzas armadas, y también el jefe de la diplomacia.', fa: 'رئیس جمهور قوماندان اعلای قوای مسلح است، و رهبر دیپلوماسی هم است.' }
    }
  },
  /* houses (fun-pass-4): who works behind each office door in the House office building; walk in and talk */
  houses: [
    { at: [2, 13], name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      look: { skin: 1, hair: '#c89a50', shirt: '#2f6f9a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am a summer intern for a Representative. I answer the phone!', es: 'Soy pasante de verano de un representante. ¡Contesto el teléfono!', fa: 'من کارآموز تابستانی یک نماینده هستم. به تیلفون جواب می‌دهم!' },
        { en: 'The House has 435 voting members. Each one serves 2 years.', es: 'La Cámara tiene 435 miembros con voto. Cada uno sirve 2 años.', fa: 'مجلس نمایندگان ۴۳۵ عضو با حق رأی دارد. هر کدام ۲ سال کار می‌کنند.' },
        { en: 'Senators serve 6 years. There are 100 of them, 2 from each state.', es: 'Los senadores sirven 6 años. Hay 100, 2 de cada estado.', fa: 'سناتورها ۶ سال کار می‌کنند. ۱۰۰ نفر هستند، از هر ایالت ۲ نفر.' }
      ] },
    { at: [5, 13], name: { en: 'Mr. Osei', es: 'Sr. Osei', fa: 'آقای اوسی' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8e0d0', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'I study other countries. The President makes [[treaty|treaties]] with them.', es: 'Yo estudio otros países. El presidente hace [[treaty|tratados]] con ellos.', fa: 'من دربارهٔ کشورهای دیگر مطالعه می‌کنم. رئیس جمهور با آن‌ها [[treaty|معاهده]] می‌بندد.' },
        { en: 'But a treaty needs the Senate. Two thirds of senators present must say yes.', es: 'Pero un tratado necesita al Senado. Dos tercios de los senadores presentes deben decir sí.', fa: 'اما معاهده به سنا ضرورت دارد. دو سوم سناتورهای حاضر باید «بله» بگویند.' },
        { en: 'The House does not vote on treaties. That job belongs to the Senate.', es: 'La Cámara no vota los tratados. Ese trabajo es del Senado.', fa: 'مجلس نمایندگان به معاهده‌ها رأی نمی‌دهد. این کار سنا است.' }
      ] },
    { at: [8, 13], name: { en: 'Ms. Chen', es: 'Sra. Chen', fa: 'خانم چن' },
      look: { skin: 2, hair: '#1a1a1a', shirt: '#8a2a3a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'The President picks judges, ambassadors and the heads of departments.', es: 'El presidente escoge jueces, embajadores y jefes de departamentos.', fa: 'رئیس جمهور قاضی‌ها، سفیرها و رئیسان وزارت‌ها را انتخاب می‌کند.' },
        { en: 'The Senate must [[confirm|confirm]] them with a vote. The House does not.', es: 'El Senado debe [[confirm|confirmarlos]] con un voto. La Cámara no.', fa: 'سنا باید با رأی آن‌ها را [[confirm|تأیید]] کند. مجلس نمایندگان نه.' },
        { en: 'Often a Senate committee first holds a [[hearing|hearing]] to ask them questions.', es: 'Muchas veces, primero un comité del Senado hace una [[hearing|audiencia]] para hacerles preguntas.', fa: 'اکثراً اول یک کمیتهٔ سنا [[hearing|جلسهٔ شنیدن]] می‌گیرد تا از آن‌ها سوال بپرسد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (x 1-14, y 1-9): the Senate office building (D walls, f floor) with the hearing room inside: the dais
     (m, y 2) where senators sit, the witness table (m, y 5), the press table (m, x 2). Its door opens south at x 7-8.
     North-east: the Capitol (D, x 19-28, y 1-5) and its paved plaza (l, y 6-9).
     y 10-11: the avenue (l) across the whole map.
     South-west: the House office building, offices (J over h, doors at x 2, 5, 8) over the hallway (f, y 14-16).
     South-east: a small park, paths (:), flowers, the fountain (O) and the Metro entrance sign (x at 29, 12). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'TDDDDDDDDDDDDDD..T.DDDDDDDDDD.TT',
    'TDffmmmmmmmmffD....DDDDDDDDDD..T',
    'TDffffffffffffD....DDDDDDDDDD..T',
    'TDffffffffffffD..T.DDDDDDDDDD..T',
    'TDmfffmmmmffffD....DDDDDDDDDD..T',
    'TDmfffffffffffD..lllllllllllll.T',
    'TDffffffffffffD..lllllllllllll.T',
    'TDffffffffffffD..lllllllllllll.T',
    'TDDDDDDffDDDDDDx.lllllllllllll.T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'TJJJJJJJJJJJ....,,..T....T..x..T',
    'Thdhhdhhdhhhx...,T....:....T,..T',
    'Tfffffffffff......,....:....,..T',
    'Tfffffffffff.....T..,,.:.,,...TT',
    'Tfffffffffff....::::::.O.:::::.T',
    'TDDDDDDDDDDD.T...T..,,.:.,,...TT',
    'T..T....T.........,....:....,..T',
    'T...............,T....:....T,..T',
    'T.T....T....T...,,..T..:..T..,.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [15, 11],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [28, 7], at: [28, 9], decor: 'coinold',
      clue: { en: 'From this note, walk 2 steps south, across the Capitol plaza.', es: 'Desde esta nota, camina 2 pasos al sur, por la plaza del Capitolio.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، از میدان کاپیتول.' },
      text: { en: 'The Constitution lets Congress coin money and set taxes. An old coin!', es: 'La Constitución deja que el Congreso haga monedas y ponga impuestos. ¡Una moneda antigua!', fa: 'قانون اساسی به کانگرس اجازه می‌دهد سکه بسازد و مالیات بگذارد. یک سکهٔ کهنه!' } },
    { clueAt: [18, 12], at: [18, 14], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps south, into the flowers of the park.', es: 'Desde esta nota, camina 2 pasos al sur, hasta las flores del parque.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، تا گل‌های پارک.' },
      text: { en: 'Staff eat lunch in this park. Some write to people from home here. A flower!', es: 'El personal almuerza en este parque. Algunos escriben aquí a la gente de su estado. ¡Una flor!', fa: 'کارمندان در این پارک نان چاشت می‌خورند. بعضی اینجا به مردم حوزهٔ خود نامه می‌نویسند. یک گل!' } }
  ],

  words: {
    congress: { en: 'the lawmakers of the US: the House and the Senate', es: 'los legisladores de EE. UU.: la Cámara y el Senado', fa: 'قانون‌گذاران امریکا: مجلس نمایندگان و سنا' },
    oversight: { en: 'when Congress checks the work of the executive branch', es: 'cuando el Congreso revisa el trabajo del poder ejecutivo', fa: 'وقتی کانگرس کار قوهٔ اجرائیه را بررسی می‌کند' },
    hearing: { en: 'a meeting where a committee asks people questions', es: 'una reunión donde un comité le hace preguntas a la gente', fa: 'جلسه‌ای که در آن کمیته از مردم سوال می‌پرسد' },
    witness: { en: 'a person called to answer questions and tell what they know', es: 'una persona llamada para responder preguntas y contar lo que sabe', fa: 'کسی که خواسته می‌شود تا به سوال‌ها جواب بدهد و آنچه می‌داند بگوید' },
    'power of the purse': { en: 'the power of Congress to decide how the government spends money', es: 'el poder del Congreso para decidir cómo gasta dinero el gobierno', fa: 'اختیار کانگرس که تصمیم بگیرد حکومت پول را چطور مصرف کند' },
    confirm: { en: 'to vote yes on a person the President picked for a job', es: 'votar sí por una persona que el presidente escogió para un puesto', fa: 'به کسی که رئیس جمهور برای یک کار انتخاب کرده «بله» رأی دادن' },
    treaty: { en: 'a written agreement between countries', es: 'un acuerdo escrito entre países', fa: 'یک توافق نوشته‌شده میان کشورها' },
    impeachment: { en: 'when the House charges an official with serious wrongdoing', es: 'cuando la Cámara acusa a un funcionario de una falta grave', fa: 'وقتی مجلس نمایندگان یک مقام را به کار بد جدی متهم می‌کند' },
    trial: { en: 'a hearing that decides if someone is guilty', es: 'un proceso que decide si alguien es culpable', fa: 'محاکمه‌ای که تصمیم می‌گیرد کسی گناهکار است یا نه' },
    casework: { en: 'when lawmakers\' staff help people from home with a federal agency', es: 'cuando el personal de un legislador ayuda a la gente de su zona con una agencia federal', fa: 'وقتی کارمندان قانون‌گذار به مردم حوزه در کار با یک ادارهٔ فدرال کمک می‌کنند' },
    constituent: { en: 'a person who lives in a lawmaker\'s state or district', es: 'una persona que vive en el estado o distrito de un legislador', fa: 'کسی که در ایالت یا حوزهٔ یک قانون‌گذار زندگی می‌کند' }
  },

  npcs: [
    {
      x: 8, y: 3,
      name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      role: { en: 'Hearing room clerk', es: 'Secretaria de la sala de audiencias', fa: 'منشی تالار جلسه' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'This is a Senate hearing room. Senators sit up on the dais.', es: 'Esta es una sala de audiencias del Senado. Los senadores se sientan en el estrado.', fa: 'این تالار جلسهٔ سنا است. سناتورها بالای سکو می‌نشینند.' },
        { en: 'Congress checks the work of the executive branch. That job is called [[oversight|oversight]].', es: 'El Congreso revisa el trabajo del poder ejecutivo. Ese trabajo se llama [[oversight|supervisión]].', fa: 'کانگرس کار قوهٔ اجرائیه را بررسی می‌کند. نام این کار [[oversight|نظارت]] است.' },
        { en: 'Committees hold [[hearing|hearings]] and investigations. They can call [[witness|witnesses]] to answer.', es: 'Los comités hacen [[hearing|audiencias]] e investigaciones. Pueden llamar [[witness|testigos]] para responder.', fa: 'کمیته‌ها [[hearing|جلسهٔ شنیدن]] و تحقیق می‌کنند. می‌توانند [[witness|شاهدان]] را برای جواب دادن بخواهند.' },
        { en: 'Reporters sit at the press table, so the public learns what happens.', es: 'Los periodistas se sientan en la mesa de prensa, así el público sabe qué pasa.', fa: 'خبرنگاران پشت میز رسانه‌ها می‌نشینند، تا مردم بدانند چه می‌شود.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'A committee calls the head of an agency to answer questions. What is Congress doing?', es: 'Un comité llama al jefe de una agencia para responder preguntas. ¿Qué hace el Congreso?', fa: 'یک کمیته رئیس یک اداره را برای جواب دادن به سوال‌ها می‌خواهد. کانگرس چه می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'Oversight of the executive', es: 'Supervisa al poder ejecutivo', fa: 'نظارت بر قوهٔ اجرائیه' },
            why: { en: 'Yes. Hearings and investigations let Congress check the executive branch.', es: 'Sí. Las audiencias e investigaciones dejan que el Congreso controle al poder ejecutivo.', fa: 'بله. جلسه‌ها و تحقیق‌ها به کانگرس اجازه می‌دهند بر قوهٔ اجرائیه نظارت کند.' } },
          { t: { en: 'Holding a criminal trial', es: 'Hace un juicio penal', fa: 'محاکمهٔ جنایی می‌کند' },
            why: { en: 'No. A hearing is not a trial. It asks questions to learn the facts.', es: 'No. Una audiencia no es un juicio. Hace preguntas para conocer los hechos.', fa: 'نه. جلسهٔ شنیدن محاکمه نیست. سوال می‌پرسد تا حقیقت را بداند.' } },
          { t: { en: 'Picking a new agency head', es: 'Escoge un nuevo jefe de agencia', fa: 'رئیس نو برای اداره انتخاب می‌کند' },
            why: { en: 'No. The President picks agency heads. Here Congress is checking the agency\'s work.', es: 'No. El presidente escoge a los jefes de agencias. Aquí el Congreso revisa el trabajo de la agencia.', fa: 'نه. رئیس جمهور رئیسان اداره‌ها را انتخاب می‌کند. اینجا کانگرس کار اداره را بررسی می‌کند.' } }
        ]
      }
    },
    {
      x: 10, y: 15,
      name: { en: 'Mr. Díaz', es: 'Sr. Díaz', fa: 'آقای دیاز' },
      role: { en: 'Budget staff', es: 'Personal de presupuesto', fa: 'کارمند بودجه' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#3a6a3a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I work on the federal budget. Congress holds the [[power of the purse|power of the purse]].', es: 'Trabajo en el presupuesto federal. El Congreso tiene el [[power of the purse|poder de la bolsa]].', fa: 'من روی بودجهٔ فدرال کار می‌کنم. کانگرس [[power of the purse|اختیار بودجه]] را دارد.' },
        { en: 'All federal spending must be approved by Congress.', es: 'Todo gasto federal debe ser aprobado por el Congreso.', fa: 'هر مصرف پول فدرال باید از طرف کانگرس تأیید شود.' },
        { en: 'The President can ask for money. Only Congress can approve the spending.', es: 'El presidente puede pedir dinero. Solo el Congreso puede aprobar el gasto.', fa: 'رئیس جمهور می‌تواند پول بخواهد. فقط کانگرس می‌تواند مصرف آن را تأیید کند.' },
        { en: 'Money is a strong check. No money, no program!', es: 'El dinero es un control fuerte. ¡Sin dinero, no hay programa!', fa: 'پول یک نظارت قوی است. پول نباشد، برنامه هم نیست!' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The army needs money for new trucks. Who must approve the spending?', es: 'El ejército necesita dinero para camiones nuevos. ¿Quién debe aprobar el gasto?', fa: 'اردو برای موترهای نو پول ضرورت دارد. کی باید این مصرف را تأیید کند؟' },
        choices: [
          { ok: true, t: { en: 'Congress, with a vote', es: 'El Congreso, con un voto', fa: 'کانگرس، با رأی' },
            why: { en: 'Yes. That is the power of the purse. All federal spending needs Congress.', es: 'Sí. Ese es el poder de la bolsa. Todo gasto federal necesita al Congreso.', fa: 'بله. این اختیار بودجه است. هر مصرف فدرال به کانگرس ضرورت دارد.' } },
          { t: { en: 'The top army general', es: 'El general más alto', fa: 'بلندترین جنرال اردو' },
            why: { en: 'No. Generals can ask for money, but Congress decides on spending.', es: 'No. Los generales pueden pedir dinero, pero el Congreso decide el gasto.', fa: 'نه. جنرال‌ها می‌توانند پول بخواهند، اما کانگرس دربارهٔ مصرف تصمیم می‌گیرد.' } },
          { t: { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' },
            why: { en: 'No. Courts decide cases. They do not approve spending.', es: 'No. Las cortes deciden casos. No aprueban gastos.', fa: 'نه. محکمه‌ها دعواها را فیصله می‌کنند. مصرف پول را تأیید نمی‌کنند.' } }
        ]
      }
    },
    {
      x: 18, y: 7,
      name: { en: 'Mrs. Brooks', es: 'Sra. Brooks', fa: 'خانم بروکس' },
      role: { en: 'History teacher on a field trip', es: 'Maestra de historia de excursión', fa: 'معلم تاریخ در سفر مکتب' },
      look: { skin: 0, hair: '#8a5a2b', shirt: '#7a3a8a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My class came to learn about [[impeachment|impeachment]]. It is a check on officials.', es: 'Mi clase vino a aprender sobre el [[impeachment|juicio político]]. Es un control sobre los funcionarios.', fa: 'صنف من آمده تا دربارهٔ [[impeachment|استیضاح]] یاد بگیرد. این یک نظارت بر مقام‌ها است.' },
        { en: 'First the House votes to impeach, to charge. A simple majority is enough.', es: 'Primero la Cámara vota para acusar. Basta una mayoría simple.', fa: 'اول مجلس نمایندگان برای استیضاح، یعنی متهم کردن، رأی می‌دهد. اکثریت ساده کافی است.' },
        { en: 'Then the Senate holds the [[trial|trial]]. For a President, the Chief Justice presides.', es: 'Luego el Senado hace el [[trial|juicio]]. Si es un presidente, dirige el presidente de la Corte Suprema.', fa: 'بعد سنا [[trial|محاکمه]] می‌کند. برای رئیس جمهور، رئیس دیوان عالی جلسه را اداره می‌کند.' },
        { en: 'Two thirds of senators present must vote to remove. Impeachment alone removes nobody.', es: 'Dos tercios de los senadores presentes deben votar para destituir. La acusación sola no destituye a nadie.', fa: 'دو سوم سناتورهای حاضر باید برای برکناری رأی بدهند. استیضاح به تنهایی کسی را برکنار نمی‌کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The House votes to impeach an official. What happens next?', es: 'La Cámara vota para acusar a un funcionario. ¿Qué pasa después?', fa: 'مجلس نمایندگان برای استیضاح یک مقام رأی می‌دهد. بعد چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'The Senate holds a trial', es: 'El Senado hace un juicio', fa: 'سنا محاکمه می‌کند' },
            why: { en: 'Yes. The House charges, then the Senate holds the trial and votes.', es: 'Sí. La Cámara acusa, luego el Senado hace el juicio y vota.', fa: 'بله. مجلس نمایندگان متهم می‌کند، بعد سنا محاکمه می‌کند و رأی می‌دهد.' } },
          { t: { en: 'The official leaves office at once', es: 'El funcionario se va de una vez', fa: 'آن مقام فوراً از کار می‌رود' },
            why: { en: 'No. Impeachment is only the charge. Only a Senate vote can remove the official.', es: 'No. El juicio político es solo la acusación. Solo un voto del Senado puede destituir.', fa: 'نه. استیضاح فقط اتهام است. فقط رأی سنا می‌تواند آن مقام را برکنار کند.' } },
          { t: { en: 'The voters hold a new election', es: 'Los votantes hacen una elección', fa: 'رأی‌دهندگان انتخابات نو می‌کنند' },
            why: { en: 'No. There is no special election. The Senate holds a trial.', es: 'No. No hay una elección especial. El Senado hace un juicio.', fa: 'نه. انتخابات خاص نیست. سنا محاکمه می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 15, y: 9, text: { en: 'SENATE OFFICE BUILDING · Hearing room inside. Committees ask witnesses questions here.', es: 'EDIFICIO DE OFICINAS DEL SENADO · Sala de audiencias adentro. Aquí los comités interrogan a testigos.', fa: 'ساختمان دفتر سنا · تالار جلسه در داخل. کمیته‌ها اینجا از شاهدان سوال می‌پرسند.' } },
    { x: 12, y: 13, text: { en: 'HOUSE OFFICE BUILDING · Offices of Representatives and their staff.', es: 'EDIFICIO DE OFICINAS DE LA CÁMARA · Oficinas de los representantes y su personal.', fa: 'ساختمان دفتر مجلس نمایندگان · دفترهای نماینده‌ها و کارمندان‌شان.' } },
    { x: 28, y: 12, text: { en: 'METRO ↓ · Trains under the city. Many people who work for Congress ride them.', es: 'METRO ↓ · Trenes bajo la ciudad. Mucha gente que trabaja para el Congreso los usa.', fa: 'مترو ↓ · قطارهای زیر شهر. بسیاری از کسانی که برای کانگرس کار می‌کنند سوار آن می‌شوند.' } }
  ],

  /* the quest: Tomás the caseworker (gold !) in the House office hallway -> Wanda at the Metro entrance in the park
     -> the Grump's Paper Whirl tore Mr. Karimi's letter into 3 pieces: the Senate hearing room (north-west), the
     Capitol plaza (north-east), back in the House office hallway (south-west). Then catch the whirl. */
  quest: {
    stat: 'mov',
    title: { en: 'The Paper Whirl', es: 'El remolino de papel', fa: 'گردباد کاغذ' },
    giver: {
      x: 4, y: 15,
      name: { en: 'Tomás', es: 'Tomás', fa: 'توماس' },
      role: { en: 'Caseworker for Representative Ruiz', es: 'Trabajador de casos de la representante Ruiz', fa: 'کارمند کمک به مردم، دفتر نماینده رویز' },
      look: { skin: 3, hair: '#1a1008', shirt: '#c07a2a', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'I help [[constituent|constituents]], people from Representative Ruiz\'s district.', es: 'Ayudo a los [[constituent|electores]], la gente del distrito de la representante Ruiz.', fa: 'من به [[constituent|مردم حوزه]] کمک می‌کنم، مردم حوزهٔ نماینده رویز.' },
        { en: 'Mr. Karimi\'s Social Security checks stopped. I wrote the agency a letter for him.', es: 'Los cheques del Seguro Social del Sr. Karimi se detuvieron. Le escribí una carta a la agencia por él.', fa: 'چک‌های تأمین اجتماعی آقای کریمی قطع شد. برایش به آن اداره نامه نوشتم.' },
        { en: 'Then a wind blew it away! Wanda at the Metro saw it.', es: '¡Luego un viento se la llevó! Wanda, en el Metro, lo vio.', fa: 'بعد باد آن را برد! واندا در مترو آن را دید.' }
      ],
      wait: { en: 'Wanda works at the Metro entrance, in the park to the south-east.', es: 'Wanda trabaja en la entrada del Metro, en el parque al sureste.', fa: 'واندا در دروازهٔ مترو، در پارک طرف جنوب شرق، کار می‌کند.' },
      thanks: { en: 'The letter is whole! Helping people like Mr. Karimi is called [[casework|casework]].', es: '¡La carta está completa! Ayudar a gente como el Sr. Karimi se llama [[casework|trabajo de casos]].', fa: 'نامه کامل شد! کمک به کسانی مثل آقای کریمی [[casework|کار برای مردم حوزه]] نام دارد.' }
    },
    contact: {
      x: 29, y: 13,
      name: { en: 'Wanda', es: 'Wanda', fa: 'واندا' },
      role: { en: 'Metro station worker', es: 'Trabajadora de la estación del Metro', fa: 'کارمند ایستگاه مترو' },
      look: { skin: 4, hair: '#2a1a10', shirt: '#c0392b', pants: '#2a2a2a', style: 'long', hat: '#2a2a3a' },
      lines: [
        { en: 'Trains push wind up these stairs. A whirl of paper flew out!', es: 'Los trenes empujan viento por estas escaleras. ¡Salió volando un remolino de papel!', fa: 'قطارها باد را از این زینه‌ها بالا می‌کنند. یک گردباد کاغذ بیرون پرید!' },
        { en: 'It was the Grump\'s Paper Whirl. It tore the letter into 3 pieces.', es: 'Era el Remolino de Papel del Gruñón. Rompió la carta en 3 pedazos.', fa: 'آن گردباد کاغذ غرغرو بود. نامه را ۳ تکه کرد.' },
        { en: 'Follow the clues to each piece. Then catch the whirl!', es: 'Sigue las pistas hasta cada pedazo. ¡Luego atrapa el remolino!', fa: 'سرنخ‌ها را تا هر تکه دنبال کن. بعد گردباد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [6, 19],
      hops: [[26, 8], [20, 18]],
      name: { en: 'The Grump\'s Paper Whirl', es: 'El Remolino de Papel del Gruñón', fa: 'گردباد کاغذ غرغرو' },
      taunt: { en: 'Swish! The Paper Whirl spins: "Letters, files, forms! Who reads them anyway?"', es: '¡Fiuuu! El Remolino de Papel gira: "¡Cartas, archivos, formularios! ¿Quién los lee?"', fa: 'ووش! گردباد کاغذ می‌چرخد: «نامه، دوسیه، فورم! اصلاً کی این‌ها را می‌خواند؟»' },
      clues: [
        { t: { en: 'Piece 1 blew into the room where a committee asks witnesses questions.', es: 'El pedazo 1 voló a la sala donde un comité les hace preguntas a los testigos.', fa: 'تکهٔ ۱ به تالاری رفت که در آن کمیته از شاهدان سوال می‌پرسد.' },
          zones: [{ x: 2, y: 3, w: 12, h: 6 }],
          noBy: [{ x: 1, y: 14, w: 11, h: 3, t: { en: 'This is an office hallway. Witnesses answer questions in the hearing room, north-west.', es: 'Este es un pasillo de oficinas. Los testigos responden en la sala de audiencias, al noroeste.', fa: 'این دهلیز دفترها است. شاهدان در تالار جلسه، طرف شمال غرب، جواب می‌دهند.' } }],
          found: { en: 'Piece 1, under the witness table in the hearing room!', es: '¡El pedazo 1, debajo de la mesa de testigos en la sala de audiencias!', fa: 'تکهٔ ۱، زیر میز شاهدان در تالار جلسه!' } },
        { t: { en: 'Piece 2 flew to the building where the House impeaches and the Senate holds trials.', es: 'El pedazo 2 voló al edificio donde la Cámara acusa y el Senado hace juicios.', fa: 'تکهٔ ۲ به ساختمانی رفت که مجلس نمایندگان استیضاح می‌کند و سنا محاکمه.' },
          zones: [{ x: 17, y: 6, w: 13, h: 4 }],
          noBy: [{ x: 16, y: 12, w: 15, h: 9, t: { en: 'This is a park. The House and the Senate meet in the Capitol, north-east.', es: 'Esto es un parque. La Cámara y el Senado se reúnen en el Capitolio, al noreste.', fa: 'این یک پارک است. مجلس نمایندگان و سنا در کاپیتول، طرف شمال شرق، جلسه می‌کنند.' } }],
          found: { en: 'Piece 2, on the Capitol plaza! Both houses meet inside.', es: '¡El pedazo 2, en la plaza del Capitolio! Las dos cámaras se reúnen adentro.', fa: 'تکهٔ ۲، در میدان کاپیتول! هر دو مجلس داخل آن جلسه می‌کنند.' } },
        { t: { en: 'Piece 3 blew back to the building where Representatives have their offices.', es: 'El pedazo 3 volvió al edificio donde los representantes tienen sus oficinas.', fa: 'تکهٔ ۳ دوباره به ساختمانی رفت که نماینده‌ها دفترهای خود را دارند.' },
          zones: [{ x: 1, y: 14, w: 11, h: 3 }],
          noBy: [{ x: 2, y: 3, w: 12, h: 6, t: { en: 'This is a Senate hearing room. Representatives have offices in the House building, south-west.', es: 'Esta es una sala del Senado. Los representantes tienen oficinas en el edificio de la Cámara, al suroeste.', fa: 'این تالار جلسهٔ سنا است. نماینده‌ها در ساختمان مجلس نمایندگان، جنوب غرب، دفتر دارند.' } }],
          found: { en: 'Piece 3, in the House office hallway! Now catch the whirl!', es: '¡El pedazo 3, en el pasillo de la Cámara! ¡Ahora atrapa el remolino!', fa: 'تکهٔ ۳، در دهلیز دفترهای مجلس نمایندگان! حالا گردباد را بگیر!' } }
      ],
      win: { en: 'Caught you! The whirl stops spinning. All 3 pieces of the letter fit together!', es: '¡Te atrapé! El remolino deja de girar. ¡Los 3 pedazos de la carta encajan!', fa: 'گرفتمت! گردباد از چرخیدن ایستاد. هر ۳ تکهٔ نامه با هم جور شد!' },
      item: { icon: '📄', name: { en: 'Mr. Karimi\'s letter', es: 'La carta del Sr. Karimi', fa: 'نامهٔ آقای کریمی' } }
    }
  },

  scraps: [[13, 2], [30, 2], [1, 19]],
  smudges: [[22, 19], [9, 19]],

  challenge: {
    at: [23, 8],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // the charges lever by the House office building, the trial lever by the Senate wing of the Capitol,
    // the votes lever in the Senate hearing room
    spots: [[13, 14], [18, 3], [12, 7]],
    stat: 'pla',
    title: { en: 'Who removes an official?', es: '¿Quién destituye a un funcionario?', fa: 'کی یک مقام را برکنار می‌کند؟' },
    intro: { en: 'The Grump mixed up [[impeachment|impeachment]]! Set the 3 levers the way the Constitution says. Only then can an official be removed.',
      es: '¡El Gruñón revolvió el [[impeachment|juicio político]]! Pon las 3 palancas como dice la Constitución. Solo así se puede destituir a un funcionario.',
      fa: 'غرغرو [[impeachment|استیضاح]] را خراب کرد! ۳ دسته را طوری بگذار که قانون اساسی می‌گوید. فقط آن وقت یک مقام برکنار می‌شود.' },
    switches: [
      { name: { en: 'Who brings the charges?', es: '¿Quién acusa?', fa: 'کی اتهام می‌آورد؟' }, icon: '📜', start: 1,
        states: [{ en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' }, { en: 'The Senate', es: 'El Senado', fa: 'سنا' }, { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' }] },
      { name: { en: 'Who holds the trial?', es: '¿Quién hace el juicio?', fa: 'کی محاکمه می‌کند؟' }, icon: '⚖️', start: 0,
        states: [{ en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' }, { en: 'The Senate', es: 'El Senado', fa: 'سنا' }, { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' }] },
      { name: { en: 'Senate votes needed to remove', es: 'Votos del Senado para destituir', fa: 'رأی سنا برای برکناری' }, icon: '🗳️', start: 0,
        states: [{ en: 'Half of senators present', es: 'La mitad de los senadores presentes', fa: 'نیم سناتورهای حاضر' }, { en: 'Two thirds of senators present', es: 'Dos tercios de los senadores presentes', fa: 'دو سوم سناتورهای حاضر' }, { en: 'Every senator', es: 'Todos los senadores', fa: 'همهٔ سناتورها' }] }
    ],
    results: {}, // filled in just below: every one of the 27 settings says what is wrong with it
    otherwise: { ok: false, t: { en: 'The official is not removed. Try another setting.', es: 'El funcionario no es destituido. Prueba otra combinación.', fa: 'آن مقام برکنار نشد. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'That is the Constitution\'s way! The House charges, the Senate judges, and two thirds must agree to remove.',
      es: '¡Así lo dice la Constitución! La Cámara acusa, el Senado juzga y dos tercios deben estar de acuerdo para destituir.',
      fa: 'راه قانون اساسی همین است! مجلس نمایندگان متهم می‌کند، سنا قضاوت می‌کند، و دو سوم باید برای برکناری موافق باشند.' }
  },

  boss: {
    at: [26, 18],
    stat: 'pla',
    need: 3,
    name: { en: 'The No-Checks Grump', es: 'El Gruñón Sin Controles', fa: 'غرغروی بی‌نظارت' },
    appear: { en: 'The No-Checks Grump is hiding in the fog of the little park!', es: '¡El Gruñón Sin Controles se esconde en la niebla del parquecito!', fa: 'غرغروی بی‌نظارت در مه پارک کوچک پنهان است!' },
    taunt: { en: 'Hearings? Budgets? Bah! Let everyone spend and do whatever they like!', es: '¿Audiencias? ¿Presupuestos? ¡Bah! ¡Que todos gasten y hagan lo que quieran!', fa: 'جلسه؟ بودجه؟ بَه! بگذار هر کس هر قدر بخواهد مصرف کند و هر کار بخواهد بکند!' },
    win: { en: 'The fog lifts off Capitol Hill. Charter page 5.3 floats down into your hands!', es: 'La niebla se va de la Colina del Capitolio. ¡La página 5.3 de la carta cae en tus manos!', fa: 'مه از تپهٔ کاپیتول کنار می‌رود. صفحهٔ ۵.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is congressional oversight?', es: '¿Qué es la supervisión del Congreso?', fa: 'نظارت کانگرس چیست؟' },
        choices: [
          { en: 'Checking the executive branch', es: 'Revisar al poder ejecutivo', fa: 'بررسی کار قوهٔ اجرائیه' },
          { en: 'Writing the rules for the courts', es: 'Escribir las reglas de las cortes', fa: 'نوشتن قاعده‌های محکمه‌ها' },
          { en: 'Counting votes after an election', es: 'Contar votos tras una elección', fa: 'شمردن رأی‌ها بعد از انتخابات' },
          { en: 'Choosing judges for the states', es: 'Escoger jueces para los estados', fa: 'انتخاب قاضی برای ایالت‌ها' }],
        answer: 0,
        why: { en: 'Oversight means Congress checks the executive branch, with hearings, investigations and witnesses.', es: 'Supervisión significa que el Congreso revisa al poder ejecutivo, con audiencias, investigaciones y testigos.', fa: 'نظارت یعنی کانگرس با جلسه، تحقیق و شاهد کار قوهٔ اجرائیه را بررسی می‌کند.' } },
      { q: { en: 'Who must approve all federal spending?', es: '¿Quién debe aprobar todo el gasto federal?', fa: 'کی باید هر مصرف پول فدرال را تأیید کند؟' },
        choices: [
          { en: 'Congress', es: 'El Congreso', fa: 'کانگرس' },
          { en: 'The President alone', es: 'El presidente solo', fa: 'رئیس جمهور به تنهایی' },
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس دیوان عالی' },
          { en: 'The state governors', es: 'Los gobernadores', fa: 'والیان ایالت‌ها' }],
        answer: 0,
        why: { en: 'This is the power of the purse. The President can ask, but Congress must approve.', es: 'Es el poder de la bolsa. El presidente puede pedir, pero el Congreso debe aprobar.', fa: 'این اختیار بودجه است. رئیس جمهور می‌تواند بخواهد، اما کانگرس باید تأیید کند.' } },
      { q: { en: 'The President picks a new Supreme Court justice. Who must confirm the choice?', es: 'El presidente escoge un nuevo juez de la Corte Suprema. ¿Quién debe confirmarlo?', fa: 'رئیس جمهور یک قاضی نو برای دیوان عالی انتخاب می‌کند. کی باید او را تأیید کند؟' },
        choices: [
          { en: 'The Senate', es: 'El Senado', fa: 'سنا' },
          { en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' },
          { en: 'The other justices', es: 'Los otros jueces', fa: 'قاضی‌های دیگر' },
          { en: 'The voters', es: 'Los votantes', fa: 'رأی‌دهندگان' }],
        answer: 0,
        why: { en: 'The Senate confirms judges, ambassadors and department heads. The House has no vote on them.', es: 'El Senado confirma jueces, embajadores y jefes de departamentos. La Cámara no vota en eso.', fa: 'سنا قاضی‌ها، سفیرها و رئیسان وزارت‌ها را تأیید می‌کند. مجلس نمایندگان به آن‌ها رأی نمی‌دهد.' } },
      { q: { en: 'How many senators must approve a treaty?', es: '¿Cuántos senadores deben aprobar un tratado?', fa: 'چند سناتور باید یک معاهده را تأیید کنند؟' },
        choices: [
          { en: 'Two thirds of those present', es: 'Dos tercios de los presentes', fa: 'دو سوم حاضران' },
          { en: 'Just over half of the senators', es: 'Apenas más de la mitad de los senadores', fa: 'کمی بیشتر از نیم سناتورها' },
          { en: 'Every one of the 100 senators', es: 'Cada uno de los 100 senadores', fa: 'هر کدام از ۱۰۰ سناتور' },
          { en: 'Only the ten oldest senators', es: 'Solo los diez senadores mayores', fa: 'فقط ده سناتور پیرتر' }],
        answer: 0,
        why: { en: 'The President makes treaties, but two thirds of senators present must approve them.', es: 'El presidente hace tratados, pero dos tercios de los senadores presentes deben aprobarlos.', fa: 'رئیس جمهور معاهده می‌بندد، اما دو سوم سناتورهای حاضر باید آن را تأیید کنند.' } },
      { q: { en: 'Who has the power to impeach, or charge, an official?', es: '¿Quién tiene el poder de acusar a un funcionario en un juicio político?', fa: 'کی اختیار دارد یک مقام را استیضاح، یعنی متهم، کند؟' },
        choices: [
          { en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' },
          { en: 'The Senate', es: 'El Senado', fa: 'سنا' },
          { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دیوان عالی' },
          { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' }],
        answer: 0,
        why: { en: 'The House of Representatives impeaches by a simple majority vote. Then the Senate holds the trial.', es: 'La Cámara de Representantes acusa por mayoría simple. Luego el Senado hace el juicio.', fa: 'مجلس نمایندگان با اکثریت ساده استیضاح می‌کند. بعد سنا محاکمه می‌کند.' } },
      { q: { en: 'The House impeaches a President. What happens right away?', es: 'La Cámara acusa a un presidente. ¿Qué pasa enseguida?', fa: 'مجلس نمایندگان رئیس جمهور را استیضاح می‌کند. فوراً چه می‌شود؟' },
        choices: [
          { en: 'Stays until the Senate votes', es: 'Sigue hasta que vote el Senado', fa: 'تا رأی سنا سر کار می‌ماند' },
          { en: 'Must leave office that day', es: 'Debe irse ese mismo día', fa: 'باید همان روز از کار برود' },
          { en: 'Goes straight to jail', es: 'Va directo a la cárcel', fa: 'مستقیم به زندان می‌رود' },
          { en: 'The Vice President takes over', es: 'El vicepresidente toma el mando', fa: 'معاون رئیس جمهور جایش را می‌گیرد' }],
        answer: 0,
        why: { en: 'Impeachment is only the charge. No President has ever been removed by the Senate.', es: 'El juicio político es solo la acusación. El Senado nunca ha destituido a un presidente.', fa: 'استیضاح فقط اتهام است. سنا هیچ وقت یک رئیس جمهور را برکنار نکرده است.' } },
      { q: { en: 'Who presides over the Senate trial of a President?', es: '¿Quién dirige el juicio de un presidente en el Senado?', fa: 'کی محاکمهٔ رئیس جمهور را در سنا اداره می‌کند؟' },
        choices: [
          { en: 'The Chief Justice', es: 'El presidente de la Corte Suprema', fa: 'رئیس دیوان عالی' },
          { en: 'The Vice President', es: 'El vicepresidente', fa: 'معاون رئیس جمهور' },
          { en: 'The oldest senator', es: 'El senador de más edad', fa: 'پیرترین سناتور' },
          { en: 'The Speaker of the House', es: 'El presidente de la Cámara', fa: 'رئیس مجلس نمایندگان' }],
        answer: 0,
        why: { en: 'The Chief Justice of the Supreme Court presides when a President is on trial.', es: 'El presidente de la Corte Suprema dirige cuando un presidente está en juicio.', fa: 'وقتی رئیس جمهور محاکمه می‌شود، رئیس دیوان عالی جلسه را اداره می‌کند.' } },
      { q: { en: 'A Representative\'s staff help a woman get her lost passport. What is this called?', es: 'El personal de un representante ayuda a una mujer con su pasaporte perdido. ¿Cómo se llama esto?', fa: 'کارمندان یک نماینده به یک خانم کمک می‌کنند پاسپورت گمشده‌اش را بگیرد. نام این چیست؟' },
        choices: [
          { en: 'Casework', es: 'Trabajo de casos', fa: 'کار برای مردم حوزه' },
          { en: 'Oversight', es: 'Supervisión', fa: 'نظارت' },
          { en: 'A treaty', es: 'Un tratado', fa: 'معاهده' },
          { en: 'Lobbying', es: 'Cabildeo', fa: 'لابی‌گری' }],
        answer: 0,
        why: { en: 'Casework is helping constituents with problems at federal agencies. It is part of representing people.', es: 'El trabajo de casos es ayudar a los electores con agencias federales. Es parte de representar a la gente.', fa: 'کار برای مردم حوزه یعنی کمک به آن‌ها در اداره‌های فدرال. این بخشی از نمایندگی مردم است.' } }
    ]
  },

  learned: [
    { en: '[[congress|Congress]] does more than make laws. It checks the executive branch with [[oversight|oversight]], and holds the [[power of the purse|power of the purse]].', es: 'El [[congress|Congreso]] hace más que leyes. Revisa al poder ejecutivo con la [[oversight|supervisión]] y tiene el [[power of the purse|poder de la bolsa]].', fa: '[[congress|کانگرس]] بیشتر از قانون ساختن کار می‌کند. با [[oversight|نظارت]] قوهٔ اجرائیه را بررسی می‌کند و [[power of the purse|اختیار بودجه]] را دارد.' },
    { en: 'The Senate [[confirm|confirms]] the President\'s picks and approves [[treaty|treaties]] (two thirds). Staff help [[constituent|constituents]] with [[casework|casework]].', es: 'El Senado [[confirm|confirma]] a quienes escoge el presidente y aprueba [[treaty|tratados]] (dos tercios). El personal ayuda a los [[constituent|electores]] con el [[casework|trabajo de casos]].', fa: 'سنا انتخاب‌های رئیس جمهور را [[confirm|تأیید]] می‌کند و [[treaty|معاهده‌ها]] را (با دو سوم) قبول می‌کند. کارمندان با [[casework|کار برای مردم حوزه]] به [[constituent|مردم حوزه]] کمک می‌کنند.' },
    { en: 'The House [[impeachment|impeaches]]. The Senate holds the [[trial|trial]], and two thirds of senators present must vote to remove.', es: 'La Cámara [[impeachment|acusa]]. El Senado hace el [[trial|juicio]], y dos tercios de los senadores presentes deben votar para destituir.', fa: 'مجلس نمایندگان [[impeachment|استیضاح]] می‌کند. سنا [[trial|محاکمه]] می‌کند، و دو سوم سناتورهای حاضر باید برای برکناری رأی بدهند.' }
  ],
  reflect: {
    q: { en: 'If you had a problem with a federal agency, would you ask your lawmaker\'s office for help? Why?', es: 'Si tuvieras un problema con una agencia federal, ¿pedirías ayuda a la oficina de tu legislador? ¿Por qué?', fa: 'اگر با یک ادارهٔ فدرال مشکل داشتی، از دفتر قانون‌گذارت کمک می‌خواستی؟ چرا؟' },
    starter: { en: 'I would ask for help because', es: 'Pediría ayuda porque', fa: 'من کمک می‌خواستم، چون' }
  }
};

/* the 27 lever settings: only House + Senate + two thirds removes an official. Every other setting names the first
   wrong lever and why (and says how many more are wrong); the chips show which levers are right. */
(function () {
  var ch = window.EPISODE.challenge, right = [0, 1, 1];
  var why = [
    [null,
      { en: 'The Senate does not bring the charges. The House impeaches, by a simple majority vote.', es: 'El Senado no acusa. La Cámara presenta los cargos, por mayoría simple.', fa: 'سنا اتهام نمی‌آورد. مجلس نمایندگان با اکثریت ساده استیضاح می‌کند.' },
      { en: 'Courts do not impeach. The House of Representatives brings the charges.', es: 'Las cortes no acusan en un juicio político. La Cámara de Representantes presenta los cargos.', fa: 'محکمه‌ها استیضاح نمی‌کنند. مجلس نمایندگان اتهام می‌آورد.' }],
    [{ en: 'The House brings the charges, so it is not the judge too. The Senate holds the trial.', es: 'La Cámara acusa, así que no es también el juez. El Senado hace el juicio.', fa: 'مجلس نمایندگان متهم می‌کند، پس قاضی هم نیست. سنا محاکمه می‌کند.' },
      null,
      { en: 'The Supreme Court does not hold the trial. The Senate does. For a President, the Chief Justice presides.', es: 'La Corte Suprema no hace el juicio. Lo hace el Senado. Para un presidente, dirige el presidente de la Corte.', fa: 'دیوان عالی محاکمه نمی‌کند. سنا می‌کند. برای رئیس جمهور، رئیس دیوان عالی جلسه را اداره می‌کند.' }],
    [{ en: 'Half is too few. Removing an official is serious, so two thirds of senators present must agree.', es: 'La mitad es muy poco. Destituir es algo serio, así que deben estar de acuerdo dos tercios de los presentes.', fa: 'نیم کم است. برکناری کار جدی است، پس دو سوم سناتورهای حاضر باید موافق باشند.' },
      null,
      { en: 'Every senator is too many. The Constitution asks for two thirds of senators present.', es: 'Todos los senadores son demasiados. La Constitución pide dos tercios de los senadores presentes.', fa: 'همهٔ سناتورها زیاد است. قانون اساسی دو سوم سناتورهای حاضر را می‌خواهد.' }]
  ];
  var more = [null,
    { en: 'One more lever is wrong too.', es: 'Otra palanca también está mal.', fa: 'یک دستهٔ دیگر هم غلط است.' },
    { en: 'Two more levers are wrong too.', es: 'Otras dos palancas también están mal.', fa: 'دو دستهٔ دیگر هم غلط است.' }];
  var label = [{ en: 'Charges', es: 'Acusa', fa: 'اتهام' }, { en: 'Trial', es: 'Juicio', fa: 'محاکمه' }, { en: 'To remove', es: 'Para destituir', fa: 'برای برکناری' }];
  var done = { en: 'The House charged, the Senate held the trial, and two thirds voted to remove. The official is removed.', es: 'La Cámara acusó, el Senado hizo el juicio y dos tercios votaron para destituir. El funcionario es destituido.', fa: 'مجلس نمایندگان متهم کرد، سنا محاکمه کرد، و دو سوم برای برکناری رأی دادند. آن مقام برکنار شد.' };
  var langs = ['en', 'es', 'fa'];
  for (var a = 0; a < 3; a++) for (var b = 0; b < 3; b++) for (var c = 0; c < 3; c++) {
    var s = [a, b, c], wrong = [0, 1, 2].filter(function (i) { return s[i] !== right[i]; });
    var show = ch.switches.map(function (sw, i) {
      var t = {}; langs.forEach(function (l) { t[l] = label[i][l] + ': ' + sw.states[s[i]][l]; });
      return { icon: sw.icon, ok: s[i] === right[i], t: t };
    });
    var t = done;
    if (wrong.length) {
      var first = why[wrong[0]][s[wrong[0]]], extra = more[wrong.length - 1];
      t = {}; langs.forEach(function (l) { t[l] = first[l] + (extra ? ' ' + extra[l] : ''); });
    }
    ch.results[s.join(',')] = { ok: !wrong.length, t: t, show: show };
  }
})();
