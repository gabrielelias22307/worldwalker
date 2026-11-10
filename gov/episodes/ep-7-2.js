/* CIVICWALKER · Episode 7.2 · The Court Ladder (Judicial Structures)
   Alexandria, Virginia, today. North is up. North-west: the federal courthouse (US District Court, Eastern District of
   Virginia, Alexandria Division), D walls with a courtroom (west room) and the clerk's office (east room) off one
   hallway, the way in on the south side. Across the paved square (fountain, the charter stone): the city's Virginia
   courthouse (door) and the juvenile and domestic relations court (door). King Street runs east-west through the middle.
   South-west: the law library (door), a row house (door) and a park. South-east: the train station (door), its
   platform and the tracks: trains north to Washington, DC (the US Supreme Court), south to Richmond (the 4th Circuit).
   The charter stone asks the student to walk an invented federal case up the courts in order: the trial in district
   court, the appeal filed at the clerk's office, the 4th Circuit (train south), the Supreme Court (train north). */
window.EPISODE = {
  id: '7.2',
  realm: 7,
  sol: 'GOVT',
  title: { en: 'The Court Ladder', es: 'La escalera de los tribunales', fa: 'زینهٔ محکمه‌ها' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Alexandria, today', es: 'Alexandria, hoy', fa: 'الکساندریا، امروز' },
  intro: [
    { en: 'The Grump tore the page about courts. Cases are stuck between courts!',
      es: 'El Gruñón rompió la página sobre los tribunales. ¡Los casos están atascados entre tribunales!',
      fa: 'غرغرو صفحهٔ محکمه‌ها را پاره کرد. قضیه‌ها بین محکمه‌ها گیر مانده‌اند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes (fun-pass-4): Alexandria, Virginia on the world map (no timeline in this game) */
  scenes: {
    at: [-77.06, 38.80],
    start: [
      { en: 'Alexandria is a city in northern Virginia, on the Potomac River.',
        es: 'Alexandria es una ciudad del norte de Virginia, junto al río Potomac.',
        fa: 'الکساندریا یک شهر در شمال ویرجینیا است، کنار دریای پوتومک.' },
      { en: 'It has a federal courthouse and a Virginia courthouse.',
        es: 'Tiene un tribunal federal y un tribunal de Virginia.',
        fa: 'این شهر یک محکمهٔ فدرال و یک محکمهٔ ویرجینیا دارد.' },
      { en: 'The US has two court systems: federal courts and state courts.',
        es: 'EE. UU. tiene dos sistemas de tribunales: los federales y los estatales.',
        fa: 'امریکا دو سیستم محکمه دارد: محکمه‌های فدرال و محکمه‌های ایالتی.' }
    ],
    page: { en: 'Most cases in the US are heard in state courts, not federal courts.',
      es: 'La mayoría de los casos en EE. UU. se ven en tribunales estatales, no federales.',
      fa: 'بیشتر قضیه‌ها در امریکا در محکمه‌های ایالتی دیده می‌شوند، نه فدرال.' },
    guess: {
      q: { en: 'A person loses a trial. Can a higher court look at the case?', es: 'Una persona pierde un juicio. ¿Puede un tribunal más alto ver el caso?', fa: 'یک نفر در محاکمه می‌بازد. آیا یک محکمهٔ بالاتر می‌تواند قضیه را ببیند؟' },
      choices: [
        { t: { en: '⬆️ Yes, by appeal', es: '⬆️ Sí, con una apelación', fa: '⬆️ بله، با استیناف' }, ok: true },
        { t: { en: '🚫 No, never', es: '🚫 No, nunca', fa: '🚫 نه، هرگز' } }
      ],
      why: { en: 'The losing side can appeal. A higher court checks if the law was used correctly.', es: 'El lado que pierde puede apelar. Un tribunal más alto revisa si la ley se usó bien.', fa: 'طرفی که می‌بازد می‌تواند استیناف کند. محکمهٔ بالاتر می‌بیند که قانون درست به کار رفته یا نه.' }
    },
    next: {
      q: { en: 'Next: famous cases like Miranda, Gideon and Mapp. Did they change our rights?', es: 'Ahora: casos famosos como Miranda, Gideon y Mapp. ¿Cambiaron nuestros derechos?', fa: 'بعدی: قضیه‌های مشهور مثل میراندا، گیدیان و مپ. آیا حقوق ما را تغییر دادند؟' },
      choices: [
        { t: { en: '📜 Yes, they did', es: '📜 Sí, los cambiaron', fa: '📜 بله، تغییر دادند' }, ok: true },
        { t: { en: '🚫 No, not at all', es: '🚫 No, para nada', fa: '🚫 نه، اصلاً' } }
      ],
      why: { en: 'Miranda: police must tell you your rights. Gideon: a lawyer for people who cannot pay.', es: 'Miranda: la policía debe decirte tus derechos. Gideon: un abogado para quien no puede pagar.', fa: 'میراندا: پولیس باید حقوقت را به تو بگوید. گیدیان: وکیل برای کسی که پول ندارد.' }
    }
  },
  /* houses (fun-pass-4): who works or lives behind each door; walk in and talk */
  houses: [
    { at: [22, 2], name: { en: 'Ms. Grant', es: 'Sra. Grant', fa: 'خانم گرانت' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f4f7a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'This is a Virginia court. Most US cases start in state courts like this.', es: 'Este es un tribunal de Virginia. La mayoría de los casos empieza en tribunales estatales así.', fa: 'این یک محکمهٔ ویرجینیا است. بیشتر قضیه‌های امریکا در محکمه‌های ایالتی مثل این شروع می‌شوند.' },
        { en: '[[general district court|General district court]] hears traffic and smaller cases. There is no jury.', es: 'El [[general district court|tribunal general de distrito]] ve casos de tránsito y casos pequeños. No hay jurado.', fa: '[[general district court|محکمهٔ عمومی ناحیه]] قضیه‌های ترافیکی و قضیه‌های کوچک را می‌بیند. هیئت منصفه ندارد.' },
        { en: '[[circuit court|Circuit court]] is the main trial court. It has jury trials for bigger cases.', es: 'El [[circuit court|tribunal de circuito]] es el tribunal principal de juicios. Tiene juicios con jurado para casos grandes.', fa: '[[circuit court|محکمهٔ حوزه]] محکمهٔ اصلی محاکمه است. برای قضیه‌های بزرگ‌تر محاکمه با هیئت منصفه دارد.' }
      ] },
    { at: [28, 2], name: { en: 'Mr. Amiri', es: 'Sr. Amiri', fa: 'آقای امیری' },
      look: { skin: 2, hair: '#1a1208', shirt: '#3a6a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is the [[juvenile court|juvenile and domestic relations]] court, for children and families.', es: 'Este es el [[juvenile court|tribunal de menores y relaciones domésticas]], para niños y familias.', fa: 'این [[juvenile court|محکمهٔ اطفال و روابط خانوادگی]] است، برای اطفال و خانواده‌ها.' },
        { en: 'Virginia appeals go up to the Court of Appeals of Virginia.', es: 'En Virginia, las apelaciones suben a la Corte de Apelaciones de Virginia.', fa: 'استینافِ ویرجینیا به محکمهٔ استیناف ویرجینیا بالا می‌رود.' },
        { en: 'The highest is the Supreme Court of Virginia, in Richmond.', es: 'La más alta es la Corte Suprema de Virginia, en Richmond.', fa: 'بالاترین آن دیوان عالی ویرجینیا است، در ریچموند.' }
      ] },
    { at: [4, 12], name: { en: 'Dev', es: 'Dev', fa: 'دیو' },
      look: { skin: 3, hair: '#120c08', shirt: '#c07a2a', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'I study law in this library. Cases come in two kinds.', es: 'Estudio derecho en esta biblioteca. Los casos son de dos tipos.', fa: 'من در این کتابخانه حقوق می‌خوانم. قضیه‌ها دو نوع هستند.' },
        { en: 'In a [[criminal case|criminal case]], the government says a person broke a law.', es: 'En un [[criminal case|caso penal]], el gobierno dice que una persona violó una ley.', fa: 'در یک [[criminal case|قضیهٔ جنایی]]، حکومت می‌گوید یک نفر قانون را شکسته است.' },
        { en: 'In a [[civil case|civil case]], people disagree over money, property or a promise.', es: 'En un [[civil case|caso civil]], la gente no se pone de acuerdo sobre dinero, propiedad o una promesa.', fa: 'در یک [[civil case|قضیهٔ مدنی]]، مردم سر پول، مال یا یک وعده اختلاف دارند.' }
      ] },
    { at: [10, 12], name: { en: 'Grandma Lucía', es: 'Abuela Lucía', fa: 'مادرکلان لوسیا' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Last year I served on a [[jury|jury]] in the federal courthouse.', es: 'El año pasado fui parte de un [[jury|jurado]] en el tribunal federal.', fa: 'سال گذشته در محکمهٔ فدرال عضو [[jury|هیئت منصفه]] بودم.' },
        { en: 'We listened to every [[witness|witness]]. Then we decided the facts together.', es: 'Escuchamos a cada [[witness|testigo]]. Luego decidimos juntos los hechos.', fa: 'به هر [[witness|شاهد]] گوش دادیم. بعد با هم حقیقت‌ها را فیصله کردیم.' },
        { en: 'Jurors must be citizens. Serving on a jury is a duty of citizens.', es: 'Los jurados deben ser ciudadanos. Servir en un jurado es un deber de los ciudadanos.', fa: 'اعضای هیئت منصفه باید شهروند باشند. عضویت در هیئت منصفه وظیفهٔ شهروندان است.' }
      ] },
    { at: [23, 12], name: { en: 'Ms. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 0, hair: '#2a1a10', shirt: '#7a3a8a', pants: '#2a2a3a', style: 'long', hat: '#2f4f7a' },
      lines: [
        { en: 'I sell tickets. Trains go north to Washington and south to Richmond.', es: 'Vendo boletos. Los trenes van al norte a Washington y al sur a Richmond.', fa: 'من تکت می‌فروشم. قطارها به شمال تا واشنگتن و به جنوب تا ریچموند می‌روند.' },
        { en: 'Lawyers ride south to argue appeals at the 4th Circuit, in Richmond.', es: 'Los abogados van al sur para presentar apelaciones en el Cuarto Circuito, en Richmond.', fa: 'وکیلان به جنوب می‌روند تا در حوزهٔ چهارم، در ریچموند، استیناف را دفاع کنند.' },
        { en: 'The US Supreme Court is north of here, in Washington, DC.', es: 'La Corte Suprema de EE. UU. está al norte, en Washington, D. C.', fa: 'دیوان عالی امریکا در شمال اینجا است، در واشنگتن دی‌سی.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west (x 2-12, y 1-7): the federal courthouse (D walls, f floor): the courtroom (x 3-6) and the clerk's office
     (x 8-11), joined by a hallway (y 6), the way in at x 6-8 on the south side. Sign at (3,8).
     North-east: the paved square (l) with the fountain (O) and the charter stone, the Virginia courthouse (J over h,
     door (22,2)) and the juvenile and domestic relations court (R over h, door (28,2)).
     y 9-10: King Street (l), east to west.
     South-west: the law library (door (4,12)), a row house (door (10,12)), the park (trees, flowers).
     South-east: an open plaza with the bus stop sign (18,15), the station (door (23,12)), the platform (l, x 27-29)
     and the tracks (|, x 30): the north end for Washington (sign (27,13)), the south end for Richmond (sign (27,19)). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.DDDDDDDDDDD...T..JJJJJJJ.RRR.T',
    'T.DffffDffffD......hhhdhhh.hdh.T',
    'T.DffffDffffDllllllxllllllllll.T',
    'T.DffffDffffDllllllllllllllllllT',
    'T.DffffDffffDllllllllllllllllllT',
    'T.DfffffffffDllllOlllllllllllllT',
    'T.DDDDfffDDDDllllllllllllllllllT',
    'T..x.......T..llllll..T....T...T',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.JJJJJ..RRR..T....T.JJJJJ.lll|T',
    'T.hhdhh..hdh.........hhdhh.lll|T',
    'T..........................xll|T',
    'T.,.T..,..T.,..............lll|T',
    'T...,....,........x........lll|T',
    'TT...T....,.T..............lll|T',
    'T..,......,....T.........T.lll|T',
    'T...T.,..T.................lll|T',
    'T,...T....,..T.............xll|T',
    'T......,.......T...........lll|T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 8],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [20, 7], at: [20, 4], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps north, across the square.', es: 'Desde esta nota, camina 3 pasos al norte, por la plaza.', fa: 'از این یادداشت، ۳ قدم به شمال برو، از میدان.' },
      text: { en: 'Alexandria is an old port town on the Potomac River. An old coin!', es: 'Alexandria es un viejo pueblo de puerto junto al río Potomac. ¡Una moneda antigua!', fa: 'الکساندریا یک شهر بندری کهنه کنار دریای پوتومک است. یک سکهٔ کهنه!' } },
    { clueAt: [2, 15], at: [2, 19], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps south, through the park.', es: 'Desde esta nota, camina 4 pasos al sur, por el parque.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، از میان پارک.' },
      text: { en: 'Most trials are open to the public. Anyone may come and watch. A flower!', es: 'La mayoría de los juicios son públicos. Cualquiera puede ir a verlos. ¡Una flor!', fa: 'بیشتر محاکمه‌ها برای همه باز است. هر کس می‌تواند بیاید و ببیند. یک گل!' } }
  ],

  words: {
    trial: { en: 'a court meeting where both sides show proof and a decision is made', es: 'una reunión en un tribunal donde los dos lados muestran pruebas y se decide', fa: 'جلسهٔ محکمه که هر دو طرف ثبوت نشان می‌دهند و فیصله می‌شود' },
    jury: { en: 'a group of citizens who listen at a trial and decide the facts', es: 'un grupo de ciudadanos que escucha un juicio y decide los hechos', fa: 'گروهی از شهروندان که در محاکمه گوش می‌دهند و حقیقت‌ها را فیصله می‌کنند' },
    witness: { en: 'a person who tells the court what they saw or know', es: 'una persona que le dice al tribunal lo que vio o sabe', fa: 'کسی که به محکمه می‌گوید چه دیده یا چه می‌داند' },
    appeal: { en: 'to ask a higher court to check a lower court\'s decision', es: 'pedirle a un tribunal más alto que revise la decisión de uno más bajo', fa: 'خواستن از محکمهٔ بالاتر که فیصلهٔ محکمهٔ پایین‌تر را ببیند' },
    'district court': { en: 'a federal trial court; the US has 94 of them', es: 'un tribunal federal de juicios; EE. UU. tiene 94', fa: 'محکمهٔ فدرال محاکمه؛ امریکا ۹۴ تا دارد' },
    'court of appeals': { en: 'a federal court that checks trials from district courts; the US has 13', es: 'un tribunal federal que revisa los juicios de los tribunales de distrito; EE. UU. tiene 13', fa: 'محکمهٔ فدرال که محاکمه‌های محکمه‌های ناحیه را می‌بیند؛ امریکا ۱۳ تا دارد' },
    circuit: { en: 'the area one federal court of appeals serves', es: 'la zona que atiende una corte federal de apelaciones', fa: 'ساحه‌ای که یک محکمهٔ فدرال استیناف به آن خدمت می‌کند' },
    panel: { en: 'a small group of judges who decide a case together', es: 'un grupo pequeño de jueces que deciden un caso juntos', fa: 'یک گروه کوچک قاضیان که با هم یک قضیه را فیصله می‌کنند' },
    justice: { en: 'a judge on the Supreme Court', es: 'un juez o una jueza de la Corte Suprema', fa: 'قاضی دیوان عالی' },
    'original jurisdiction': { en: 'the power to be the first court to hear a case', es: 'el poder de ser el primer tribunal que ve un caso', fa: 'صلاحیت این که اولین محکمه‌ای باشد که قضیه را می‌شنود' },
    'appellate jurisdiction': { en: 'the power to review a lower court\'s decision', es: 'el poder de revisar la decisión de un tribunal más bajo', fa: 'صلاحیت دیدن دوبارهٔ فیصلهٔ محکمهٔ پایین‌تر' },
    federal: { en: 'of the national government, for the whole country', es: 'del gobierno nacional, para todo el país', fa: 'مربوط به حکومت ملی، برای تمام کشور' },
    'criminal case': { en: 'a case where the government says a person broke a law', es: 'un caso en el que el gobierno dice que alguien violó una ley', fa: 'قضیه‌ای که حکومت می‌گوید یک نفر قانون را شکسته' },
    'civil case': { en: 'a case where people disagree over money, property or a promise', es: 'un caso en el que la gente no está de acuerdo sobre dinero, propiedad o una promesa', fa: 'قضیه‌ای که مردم سر پول، مال یا وعده اختلاف دارند' },
    'general district court': { en: 'a Virginia court for traffic and smaller cases, with no jury', es: 'un tribunal de Virginia para casos de tránsito y casos pequeños, sin jurado', fa: 'محکمهٔ ویرجینیا برای قضیه‌های ترافیکی و کوچک، بدون هیئت منصفه' },
    'circuit court': { en: 'Virginia\'s main trial court, with jury trials for bigger cases', es: 'el tribunal principal de juicios de Virginia, con jurado para casos grandes', fa: 'محکمهٔ اصلی محاکمهٔ ویرجینیا، با هیئت منصفه برای قضیه‌های بزرگ‌تر' },
    'juvenile court': { en: 'Virginia\'s juvenile and domestic relations court: cases with children and families', es: 'el tribunal de menores y relaciones domésticas de Virginia: casos de niños y familias', fa: 'محکمهٔ اطفال و روابط خانوادگی ویرجینیا: قضیه‌های اطفال و خانواده‌ها' }
  },

  npcs: [
    {
      x: 10, y: 6,
      name: { en: 'Ms. Okafor', es: 'Sra. Okafor', fa: 'خانم اوکافور' },
      role: { en: 'Federal court clerk', es: 'Secretaria del tribunal federal', fa: 'منشی محکمهٔ فدرال' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f8f8f', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Welcome to the US [[district court|District Court]] in Alexandria!', es: '¡Bienvenido al [[district court|Tribunal de Distrito]] de EE. UU. en Alexandria!', fa: 'به [[district court|محکمهٔ ناحیهٔ]] امریکا در الکساندریا خوش آمدی!' },
        { en: 'District courts are [[federal|federal]] trial courts. The US has 94 of them.', es: 'Los tribunales de distrito son tribunales [[federal|federales]] de juicios. EE. UU. tiene 94.', fa: 'محکمه‌های ناحیه محکمه‌های [[federal|فدرال]] محاکمه هستند. امریکا ۹۴ تا دارد.' },
        { en: 'At a [[trial|trial]], [[witness|witnesses]] speak and a [[jury|jury]] decides the facts.', es: 'En un [[trial|juicio]], los [[witness|testigos]] hablan y un [[jury|jurado]] decide los hechos.', fa: 'در یک [[trial|محاکمه]]، [[witness|شاهدان]] گپ می‌زنند و [[jury|هیئت منصفه]] حقیقت‌ها را فیصله می‌کند.' },
        { en: 'A case starts here. That is [[original jurisdiction|original jurisdiction]]: the first court to hear it.', es: 'Un caso empieza aquí. Eso es [[original jurisdiction|jurisdicción original]]: el primer tribunal que lo ve.', fa: 'قضیه از اینجا شروع می‌شود. این [[original jurisdiction|صلاحیت ابتدایی]] است: اولین محکمه‌ای که آن را می‌شنود.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What happens in a US district court?', es: '¿Qué pasa en un tribunal de distrito de EE. UU.?', fa: 'در محکمهٔ ناحیهٔ امریکا چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A trial, where a jury decides facts', es: 'Un juicio, donde un jurado decide los hechos', fa: 'محاکمه، که هیئت منصفه حقیقت‌ها را فیصله می‌کند' },
            why: { en: 'Yes. District courts are trial courts. Witnesses speak, and a jury decides the facts.', es: 'Sí. Los tribunales de distrito son de juicios. Los testigos hablan y un jurado decide los hechos.', fa: 'بله. محکمه‌های ناحیه محکمهٔ محاکمه هستند. شاهدان گپ می‌زنند و هیئت منصفه حقیقت‌ها را فیصله می‌کند.' } },
          { t: { en: 'Three judges review a lower trial', es: 'Tres jueces revisan un juicio de abajo', fa: 'سه قاضی یک محاکمهٔ پایین را می‌بینند' },
            why: { en: 'That is a court of appeals. A district court holds the first trial.', es: 'Eso es una corte de apelaciones. Un tribunal de distrito hace el primer juicio.', fa: 'این محکمهٔ استیناف است. محکمهٔ ناحیه اولین محاکمه را می‌کند.' } },
          { t: { en: 'Nine justices choose cases to hear', es: 'Nueve jueces escogen qué casos ver', fa: 'نُه قاضی قضیه‌ها را برای شنیدن می‌گزینند' },
            why: { en: 'That is the Supreme Court, in Washington. District courts hold trials.', es: 'Esa es la Corte Suprema, en Washington. Los tribunales de distrito hacen juicios.', fa: 'این دیوان عالی است، در واشنگتن. محکمه‌های ناحیه محاکمه می‌کنند.' } }
        ]
      }
    },
    {
      x: 28, y: 16,
      name: { en: 'Mr. Reyes', es: 'Sr. Reyes', fa: 'آقای ریس' },
      role: { en: 'Appeals lawyer', es: 'Abogado de apelaciones', fa: 'وکیل استیناف' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#1f3a6a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'My client lost his trial. Now we [[appeal|appeal]] to a higher court.', es: 'Mi cliente perdió su juicio. Ahora [[appeal|apelamos]] a un tribunal más alto.', fa: 'موکلم محاکمه‌اش را باخت. حالا به یک محکمهٔ بالاتر [[appeal|استیناف]] می‌کنیم.' },
        { en: 'Virginia is in the 4th [[circuit|Circuit]]. That court sits in Richmond, down this line.', es: 'Virginia está en el Cuarto [[circuit|Circuito]]. Esa corte está en Richmond, por esta línea.', fa: 'ویرجینیا در [[circuit|حوزهٔ]] چهارم است. آن محکمه در ریچموند است، در همین خط.' },
        { en: 'A [[panel|panel]] of judges hears it. There is no jury and no witnesses.', es: 'Un [[panel|grupo]] de jueces lo escucha. No hay jurado ni testigos.', fa: 'یک [[panel|هیئت]] قاضیان آن را می‌شنود. هیئت منصفه و شاهد نیست.' },
        { en: 'They check if the law was used correctly. That is [[appellate jurisdiction|appellate jurisdiction]].', es: 'Revisan si la ley se usó bien. Eso es [[appellate jurisdiction|jurisdicción de apelación]].', fa: 'آن‌ها می‌بینند قانون درست به کار رفته یا نه. این [[appellate jurisdiction|صلاحیت استینافی]] است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What does a federal court of appeals decide?', es: '¿Qué decide una corte federal de apelaciones?', fa: 'محکمهٔ فدرال استیناف چه چیز را فیصله می‌کند؟' },
        choices: [
          { ok: true, t: { en: 'If the law was used correctly', es: 'Si la ley se usó bien', fa: 'این که قانون درست به کار رفته' },
            why: { en: 'Yes. A panel of judges checks the trial. They decide if the law was used correctly.', es: 'Sí. Un grupo de jueces revisa el juicio. Deciden si la ley se usó bien.', fa: 'بله. یک هیئت قاضیان محاکمه را می‌بیند. فیصله می‌کنند قانون درست به کار رفته یا نه.' } },
          { t: { en: 'Which witness is telling the truth', es: 'Qué testigo dice la verdad', fa: 'کدام شاهد راست می‌گوید' },
            why: { en: 'No. The jury at the trial decides the facts. Appeals courts hear no witnesses.', es: 'No. El jurado del juicio decide los hechos. Las cortes de apelaciones no oyen testigos.', fa: 'نه. هیئت منصفه در محاکمه حقیقت‌ها را فیصله می‌کند. محکمهٔ استیناف شاهد نمی‌شنود.' } },
          { t: { en: 'What new laws the state should pass', es: 'Qué leyes nuevas debe hacer el estado', fa: 'ایالت کدام قانون‌های نو را بسازد' },
            why: { en: 'No. Lawmakers make laws. Courts decide cases about the laws.', es: 'No. Los legisladores hacen las leyes. Los tribunales deciden casos sobre las leyes.', fa: 'نه. قانون‌گذاران قانون می‌سازند. محکمه‌ها دربارهٔ قانون‌ها قضیه فیصله می‌کنند.' } }
        ]
      }
    },
    {
      x: 7, y: 14,
      name: { en: 'Ms. Farah', es: 'Sra. Farah', fa: 'خانم فرح' },
      role: { en: 'Law librarian', es: 'Bibliotecaria de derecho', fa: 'کتابدار حقوق' },
      look: { skin: 2, hair: '#3a2416', shirt: '#d9542b', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'The Supreme Court is the highest court in the US. It has 9 [[justice|justices]].', es: 'La Corte Suprema es el tribunal más alto de EE. UU. Tiene 9 [[justice|jueces]].', fa: 'دیوان عالی بالاترین محکمهٔ امریکا است. ۹ [[justice|قاضی]] دارد.' },
        { en: 'Each year, thousands of people ask it to hear their case.', es: 'Cada año, miles de personas le piden que vea su caso.', fa: 'هر سال، هزاران نفر از آن می‌خواهند قضیهٔ‌شان را بشنود.' },
        { en: 'It chooses which appeals to hear. It takes only a small share.', es: 'Escoge qué apelaciones ver. Solo acepta una parte pequeña.', fa: 'خودش می‌گزیند کدام استیناف را بشنود. فقط یک حصهٔ کوچک را قبول می‌کند.' },
        { en: 'For a few cases, like fights between two states, it is the first court.', es: 'En pocos casos, como peleas entre dos estados, es el primer tribunal.', fa: 'در چند قضیه، مثل دعوای بین دو ایالت، اولین محکمه است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How does the Supreme Court get most of its cases?', es: '¿Cómo recibe la Corte Suprema la mayoría de sus casos?', fa: 'دیوان عالی بیشتر قضیه‌هایش را چطور می‌گیرد؟' },
        choices: [
          { ok: true, t: { en: 'It picks appeals it wants to hear', es: 'Escoge las apelaciones que quiere ver', fa: 'استینافی را می‌گزیند که می‌خواهد بشنود' },
            why: { en: 'Yes. Thousands ask each year. The justices choose a small share to hear.', es: 'Sí. Miles piden cada año. Los jueces escogen una parte pequeña.', fa: 'بله. هر سال هزاران نفر می‌خواهند. قاضیان یک حصهٔ کوچک را می‌گزینند.' } },
          { t: { en: 'It must hear every case it gets', es: 'Debe ver cada caso que recibe', fa: 'باید هر قضیه‌ای را که می‌گیرد بشنود' },
            why: { en: 'No. It takes only a small share of the cases people ask it to hear.', es: 'No. Solo acepta una parte pequeña de los casos que le piden.', fa: 'نه. فقط یک حصهٔ کوچک قضیه‌هایی را که مردم می‌خواهند قبول می‌کند.' } },
          { t: { en: 'Every traffic case starts there', es: 'Cada caso de tránsito empieza allí', fa: 'هر قضیهٔ ترافیکی آنجا شروع می‌شود' },
            why: { en: 'No. In Virginia, traffic cases go to general district court, a state court.', es: 'No. En Virginia, los casos de tránsito van al tribunal general de distrito, un tribunal estatal.', fa: 'نه. در ویرجینیا، قضیه‌های ترافیکی به محکمهٔ عمومی ناحیه می‌روند، یک محکمهٔ ایالتی.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 8, text: { en: 'US DISTRICT COURT · Eastern District of Virginia · Alexandria. A federal trial court.', es: 'TRIBUNAL DE DISTRITO DE EE. UU. · Distrito Este de Virginia · Alexandria. Un tribunal federal de juicios.', fa: 'محکمهٔ ناحیهٔ امریکا · ناحیهٔ شرقی ویرجینیا · الکساندریا. یک محکمهٔ فدرال محاکمه.' } },
    { x: 19, y: 3, text: { en: 'VIRGINIA COURTHOUSE · Virginia\'s own state courts meet here, for cases about Virginia laws.', es: 'TRIBUNAL DE VIRGINIA · Aquí se reúnen los tribunales del estado, para casos de leyes de Virginia.', fa: 'محکمهٔ ویرجینیا · محکمه‌های ایالتی ویرجینیا اینجا جلسه می‌کنند، برای قضیه‌های قانون‌های ویرجینیا.' } },
    { x: 18, y: 15, text: { en: 'BUS STOP · King Street. The station is east, past the plaza.', es: 'PARADA DE BUS · Calle King. La estación está al este, pasando la plaza.', fa: 'ایستگاه بس · سرک کینگ. ایستگاه قطار در شرق است، آن طرف میدان.' } },
    { x: 27, y: 13, text: { en: 'TRAINS NORTH · to Washington, DC. The US Supreme Court is there.', es: 'TRENES AL NORTE · a Washington, D. C. Allí está la Corte Suprema de EE. UU.', fa: 'قطار به شمال · به واشنگتن دی‌سی. دیوان عالی امریکا آنجا است.' } },
    { x: 27, y: 19, text: { en: 'TRAINS SOUTH · to Richmond. The 4th Circuit, one of 13 federal courts of appeals, sits there.', es: 'TRENES AL SUR · a Richmond. Allí está el Cuarto Circuito, una de 13 cortes federales de apelaciones.', fa: 'قطار به جنوب · به ریچموند. حوزهٔ چهارم، یکی از ۱۳ محکمهٔ فدرال استیناف، آنجا است.' } }
  ],

  /* the quest: Lina (gold !) in the park, south-west -> Mr. Hale by the Virginia courthouse, north-east, across King
     Street -> find her dad's court notice by the bus stop sign, south of King Street (south-east) -> back to Lina */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Court Notice', es: 'El aviso del tribunal perdido', fa: 'اطلاعیهٔ گمشدهٔ محکمه' },
    giver: {
      x: 6, y: 18,
      name: { en: 'Lina', es: 'Lina', fa: 'لینا' },
      role: { en: 'High school student', es: 'Estudiante de secundaria', fa: 'شاگرد لیسه' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e0a020', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'My dad got a traffic ticket. He has to go to court.', es: 'Mi papá recibió una multa de tránsito. Tiene que ir al tribunal.', fa: 'پدرم جریمهٔ ترافیکی گرفت. باید به محکمه برود.' },
        { en: 'But he lost the court notice! It says which court, and when.', es: '¡Pero perdió el aviso del tribunal! Dice qué tribunal y cuándo.', fa: 'اما اطلاعیهٔ محکمه را گم کرد! در آن نوشته کدام محکمه و چه وقت.' },
        { en: 'Mr. Hale works at the Virginia courthouse, north across King Street. Ask him!', es: 'El Sr. Hale trabaja en el tribunal de Virginia, al norte, cruzando la calle King. ¡Pregúntale!', fa: 'آقای هیل در محکمهٔ ویرجینیا کار می‌کند، شمال، آن طرف سرک کینگ. از او بپرس!' }
      ],
      wait: { en: 'Mr. Hale is by the Virginia courthouse, north across King Street.', es: 'El Sr. Hale está junto al tribunal de Virginia, al norte, cruzando la calle King.', fa: 'آقای هیل کنار محکمهٔ ویرجینیا است، شمال، آن طرف سرک کینگ.' },
      thanks: { en: 'The notice! Now Dad knows where to go on Monday. Thank you!', es: '¡El aviso! Ahora papá sabe a dónde ir el lunes. ¡Gracias!', fa: 'اطلاعیه! حالا پدرم می‌داند دوشنبه کجا برود. تشکر!' }
    },
    contact: {
      x: 25, y: 4,
      name: { en: 'Mr. Hale', es: 'Sr. Hale', fa: 'آقای هیل' },
      role: { en: 'Court officer', es: 'Oficial del tribunal', fa: 'مأمور محکمه' },
      look: { skin: 0, hair: '#8a5a2b', shirt: '#3a3a5a', pants: '#2a2a2a', style: 'short', hat: '#2a2a3a' },
      lines: [
        { en: 'A traffic ticket goes to Virginia\'s [[general district court|general district court]], not a [[federal|federal]] court.', es: 'Una multa de tránsito va al [[general district court|tribunal general de distrito]] de Virginia, no a uno [[federal|federal]].', fa: 'جریمهٔ ترافیکی به [[general district court|محکمهٔ عمومی ناحیهٔ]] ویرجینیا می‌رود، نه به محکمهٔ [[federal|فدرال]].' },
        { en: 'Federal courts hear cases on the Constitution, US laws, two states, or other countries.', es: 'Los tribunales federales ven casos sobre la Constitución, leyes de EE. UU., dos estados u otros países.', fa: 'محکمه‌های فدرال قضیه‌های قانون اساسی، قانون‌های امریکا، دو ایالت یا کشورهای دیگر را می‌شنوند.' },
        { en: 'I saw a paper blow south across King Street. Look by the bus stop sign.', es: 'Vi un papel volar al sur, cruzando la calle King. Busca junto a la señal de la parada de bus.', fa: 'دیدم یک کاغذ به جنوب، آن طرف سرک کینگ، پرید. کنار تختهٔ ایستگاه بس ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [18, 16],
      hint: { en: 'Look by the bus stop sign, south of King Street', es: 'Busca junto a la parada de bus, al sur de la calle King', fa: 'کنار تختهٔ ایستگاه بس، جنوب سرک کینگ، ببین' },
      found: { en: 'The court notice! General district court, Monday at 9 AM. No jury for traffic cases.', es: '¡El aviso del tribunal! Tribunal general de distrito, lunes a las 9. Sin jurado en casos de tránsito.', fa: 'اطلاعیهٔ محکمه! محکمهٔ عمومی ناحیه، دوشنبه ساعت ۹ صبح. قضیهٔ ترافیکی هیئت منصفه ندارد.' },
      item: { icon: '📄', name: { en: 'A court notice', es: 'Un aviso del tribunal', fa: 'یک اطلاعیهٔ محکمه' } }
    }
  },

  scraps: [[1, 1], [1, 20], [30, 8]],
  smudges: [[27, 6], [10, 16]],

  challenge: {
    at: [15, 5],
    type: 'route', // in the world; the card version (order) is the fallback
    // the invented federal case goes up one court at a time: the trial (courtroom), the appeal filed (clerk's office),
    // the 4th Circuit (platform, south end: trains to Richmond), the Supreme Court (platform, north end: trains to Washington)
    spots: [[4, 3], [10, 3], [28, 19], [28, 13]],
    stat: 'pla',
    title: { en: 'Up the court ladder', es: 'Sube por los tribunales', fa: 'بالا در زینهٔ محکمه‌ها' },
    intro: { en: 'The Grump mixed up a case! Walk it up the federal courts, in order.',
      es: '¡El Gruñón revolvió un caso! Llévalo hacia arriba por los tribunales federales, en orden.',
      fa: 'غرغرو یک قضیه را درهم کرد! آن را به ترتیب در محکمه‌های فدرال بالا ببر.' },
    items: [
      { icon: '⚖️', t: { en: 'District court · the trial for a federal crime: the jury says guilty', es: 'Tribunal de distrito · el juicio por un delito federal: el jurado dice culpable', fa: 'محکمهٔ ناحیه · محاکمه برای یک جرم فدرال: هیئت منصفه می‌گوید مجرم' } },
      { icon: '📝', t: { en: 'Clerk\'s office · the lawyer files the appeal', es: 'Oficina del secretario · el abogado presenta la apelación', fa: 'دفتر منشی · وکیل درخواست استیناف را ثبت می‌کند' } },
      { icon: '🚆', t: { en: 'Train south · the 4th Circuit in Richmond: a panel checks the law', es: 'Tren al sur · el Cuarto Circuito en Richmond: un grupo de jueces revisa la ley', fa: 'قطار به جنوب · حوزهٔ چهارم در ریچموند: یک هیئت قاضیان قانون را می‌بیند' } },
      { icon: '🏛️', t: { en: 'Train north · the Supreme Court in Washington agrees to hear it', es: 'Tren al norte · la Corte Suprema en Washington acepta ver el caso', fa: 'قطار به شمال · دیوان عالی در واشنگتن قبول می‌کند آن را بشنود' } }
    ],
    why: { en: 'A case cannot skip a court. First the trial, then the appeal, the 4th Circuit, the Supreme Court.',
      es: 'Un caso no puede saltarse un tribunal. Primero el juicio, luego la apelación, el Cuarto Circuito y la Corte Suprema.',
      fa: 'قضیه نمی‌تواند از یک محکمه بگذرد. اول محاکمه، بعد استیناف، حوزهٔ چهارم، بعد دیوان عالی.' },
    success: { en: 'The Supreme Court will hear the case! It went up one court at a time.', es: '¡La Corte Suprema verá el caso! Subió un tribunal a la vez.', fa: 'دیوان عالی قضیه را می‌شنود! قضیه یکی یکی از محکمه‌ها بالا رفت.' }
  },

  boss: {
    at: [22, 18],
    stat: 'pla',
    need: 3,
    name: { en: 'The Objecting Grump', es: 'El Gruñón que Objeta', fa: 'غرغروی اعتراضی' },
    appear: { en: 'The Objecting Grump is hiding in the fog by the station!', es: '¡El Gruñón que Objeta se esconde en la niebla junto a la estación!', fa: 'غرغروی اعتراضی در مه کنار ایستگاه قطار پنهان است!' },
    taunt: { en: 'Objection! Courts? Appeals? Bah! Every case should stay stuck forever!', es: '¡Objeción! ¿Tribunales? ¿Apelaciones? ¡Bah! ¡Cada caso debe quedarse atascado para siempre!', fa: 'اعتراض دارم! محکمه؟ استیناف؟ بَه! هر قضیه باید برای همیشه گیر بماند!' },
    win: { en: 'The fog lifts off King Street. Charter page 7.2 floats down into your hands!', es: 'La niebla se va de la calle King. ¡La página 7.2 de la carta cae en tus manos!', fa: 'مه از سرک کینگ کنار می‌رود. صفحهٔ ۷.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which federal court holds trials with a jury and witnesses?', es: '¿Qué tribunal federal hace juicios con jurado y testigos?', fa: 'کدام محکمهٔ فدرال با هیئت منصفه و شاهد محاکمه می‌کند؟' },
        choices: [
          { en: 'A US district court', es: 'Un tribunal de distrito de EE. UU.', fa: 'محکمهٔ ناحیهٔ امریکا' },
          { en: 'A US court of appeals', es: 'Una corte de apelaciones de EE. UU.', fa: 'محکمهٔ استیناف امریکا' },
          { en: 'The US Supreme Court', es: 'La Corte Suprema de EE. UU.', fa: 'دیوان عالی امریکا' },
          { en: 'The Supreme Court of Virginia', es: 'La Corte Suprema de Virginia', fa: 'دیوان عالی ویرجینیا' }],
        answer: 0,
        why: { en: 'District courts are the federal trial courts. The US has 94. Juries and witnesses are there.', es: 'Los tribunales de distrito son los tribunales federales de juicios. EE. UU. tiene 94. Allí hay jurados y testigos.', fa: 'محکمه‌های ناحیه محکمه‌های فدرال محاکمه هستند. امریکا ۹۴ تا دارد. هیئت منصفه و شاهد آنجا است.' } },
      { q: { en: 'Virginia is in which federal circuit?', es: '¿En qué circuito federal está Virginia?', fa: 'ویرجینیا در کدام حوزهٔ فدرال است؟' },
        choices: [
          { en: 'The 4th Circuit, in Richmond', es: 'El Cuarto Circuito, en Richmond', fa: 'حوزهٔ چهارم، در ریچموند' },
          { en: 'The 2nd Circuit, in Norfolk', es: 'El Segundo Circuito, en Norfolk', fa: 'حوزهٔ دوم، در نورفوک' },
          { en: 'The 9th Circuit, in Alexandria', es: 'El Noveno Circuito, en Alexandria', fa: 'حوزهٔ نهم، در الکساندریا' },
          { en: 'The 13th Circuit, in Roanoke', es: 'El Circuito 13, en Roanoke', fa: 'حوزهٔ سیزدهم، در روانوک' }],
        answer: 0,
        why: { en: 'Virginia is in the 4th Circuit, one of 13 federal courts of appeals. It sits in Richmond.', es: 'Virginia está en el Cuarto Circuito, una de 13 cortes federales de apelaciones. Está en Richmond.', fa: 'ویرجینیا در حوزهٔ چهارم است، یکی از ۱۳ محکمهٔ فدرال استیناف. این محکمه در ریچموند است.' } },
      { q: { en: 'What does a court of appeals do?', es: '¿Qué hace una corte de apelaciones?', fa: 'محکمهٔ استیناف چه کار می‌کند؟' },
        choices: [
          { en: 'Checks if the law was used right', es: 'Revisa si la ley se usó bien', fa: 'می‌بیند قانون درست به کار رفته یا نه' },
          { en: 'Holds a new trial with a new jury', es: 'Hace un juicio nuevo con otro jurado', fa: 'محاکمهٔ نو با هیئت منصفهٔ نو می‌کند' },
          { en: 'Makes new laws for the whole state', es: 'Hace leyes nuevas para todo el estado', fa: 'برای تمام ایالت قانون نو می‌سازد' },
          { en: 'Picks the jury for district courts', es: 'Escoge el jurado de los tribunales de distrito', fa: 'برای محکمه‌های ناحیه هیئت منصفه می‌گزیند' }],
        answer: 0,
        why: { en: 'A panel of judges reviews the trial. No jury, no witnesses. They check how the law was used.', es: 'Un grupo de jueces revisa el juicio. Sin jurado ni testigos. Revisan cómo se usó la ley.', fa: 'یک هیئت قاضیان محاکمه را می‌بیند. بدون هیئت منصفه و شاهد. می‌بینند قانون چطور به کار رفته.' } },
      { q: { en: 'A court has original jurisdiction. What does that mean?', es: 'Un tribunal tiene jurisdicción original. ¿Qué significa eso?', fa: 'یک محکمه صلاحیت ابتدایی دارد. این یعنی چه؟' },
        choices: [
          { en: 'It is the first court to hear a case', es: 'Es el primer tribunal que ve un caso', fa: 'اولین محکمه‌ای است که قضیه را می‌شنود' },
          { en: 'It is the last court to hear a case', es: 'Es el último tribunal que ve un caso', fa: 'آخرین محکمه‌ای است که قضیه را می‌شنود' },
          { en: 'It reviews a lower court\'s decision', es: 'Revisa la decisión de un tribunal más bajo', fa: 'فیصلهٔ محکمهٔ پایین‌تر را دوباره می‌بیند' },
          { en: 'It only hears cases from other lands', es: 'Solo ve casos de otros países', fa: 'فقط قضیه‌های کشورهای دیگر را می‌شنود' }],
        answer: 0,
        why: { en: 'Original jurisdiction: the first court to hear it. Appellate jurisdiction: reviewing a lower court\'s decision.', es: 'Jurisdicción original: el primer tribunal que lo ve. Jurisdicción de apelación: revisar la decisión de uno más bajo.', fa: 'صلاحیت ابتدایی: اولین محکمه که آن را می‌شنود. صلاحیت استینافی: دیدن دوبارهٔ فیصلهٔ محکمهٔ پایین‌تر.' } },
      { q: { en: 'How many justices sit on the US Supreme Court?', es: '¿Cuántos jueces tiene la Corte Suprema de EE. UU.?', fa: 'دیوان عالی امریکا چند قاضی دارد؟' },
        choices: [
          { en: '9', es: '9', fa: '۹' },
          { en: '13', es: '13', fa: '۱۳' },
          { en: '94', es: '94', fa: '۹۴' },
          { en: '50', es: '50', fa: '۵۰' }],
        answer: 0,
        why: { en: 'The Supreme Court has 9 justices. They choose which appeals to hear, a small share of those asked.', es: 'La Corte Suprema tiene 9 jueces. Escogen qué apelaciones ver, una parte pequeña de las que piden.', fa: 'دیوان عالی ۹ قاضی دارد. آن‌ها می‌گزینند کدام استیناف را بشنوند، یک حصهٔ کوچک از درخواست‌ها.' } },
      { q: { en: 'Where are most cases in the US heard?', es: '¿Dónde se ven la mayoría de los casos en EE. UU.?', fa: 'بیشتر قضیه‌ها در امریکا کجا شنیده می‌شوند؟' },
        choices: [
          { en: 'In state courts', es: 'En tribunales estatales', fa: 'در محکمه‌های ایالتی' },
          { en: 'In federal courts', es: 'En tribunales federales', fa: 'در محکمه‌های فدرال' },
          { en: 'In the Supreme Court', es: 'En la Corte Suprema', fa: 'در دیوان عالی' },
          { en: 'In courts of appeals', es: 'En cortes de apelaciones', fa: 'در محکمه‌های استیناف' }],
        answer: 0,
        why: { en: 'Most cases are about state laws, so state courts hear them. Federal courts hear far fewer.', es: 'La mayoría de los casos son sobre leyes estatales, así que los ven tribunales estatales. Los federales ven muchos menos.', fa: 'بیشتر قضیه‌ها دربارهٔ قانون‌های ایالتی است، پس محکمه‌های ایالتی آن‌ها را می‌شنوند. محکمه‌های فدرال خیلی کمتر.' } },
      { q: { en: 'Two neighbors argue over money for a broken fence. What kind of case is it?', es: 'Dos vecinos discuten por dinero de una cerca rota. ¿Qué tipo de caso es?', fa: 'دو همسایه سر پول یک کتارهٔ شکسته دعوا دارند. این چه نوع قضیه است؟' },
        choices: [
          { en: 'A civil case', es: 'Un caso civil', fa: 'قضیهٔ مدنی' },
          { en: 'A criminal case', es: 'Un caso penal', fa: 'قضیهٔ جنایی' },
          { en: 'A federal crime', es: 'Un delito federal', fa: 'جرم فدرال' },
          { en: 'A traffic case', es: 'Un caso de tránsito', fa: 'قضیهٔ ترافیکی' }],
        answer: 0,
        why: { en: 'A civil case is a fight over money, property or a promise. In a criminal case, the government charges someone.', es: 'Un caso civil es una disputa por dinero, propiedad o una promesa. En un caso penal, el gobierno acusa a alguien.', fa: 'قضیهٔ مدنی اختلاف سر پول، مال یا وعده است. در قضیهٔ جنایی، حکومت کسی را متهم می‌کند.' } },
      { q: { en: 'In Virginia, which court is the main trial court, with jury trials?', es: 'En Virginia, ¿cuál es el tribunal principal de juicios, con jurado?', fa: 'در ویرجینیا، محکمهٔ اصلی محاکمه با هیئت منصفه کدام است؟' },
        choices: [
          { en: 'Circuit court', es: 'El tribunal de circuito', fa: 'محکمهٔ حوزه' },
          { en: 'General district court', es: 'El tribunal general de distrito', fa: 'محکمهٔ عمومی ناحیه' },
          { en: 'Court of Appeals of Virginia', es: 'La Corte de Apelaciones de Virginia', fa: 'محکمهٔ استیناف ویرجینیا' },
          { en: 'Supreme Court of Virginia', es: 'La Corte Suprema de Virginia', fa: 'دیوان عالی ویرجینیا' }],
        answer: 0,
        why: { en: 'Circuit court holds jury trials for bigger cases. General district court hears traffic and small cases, with no jury.', es: 'El tribunal de circuito hace juicios con jurado para casos grandes. El general de distrito ve tránsito y casos pequeños, sin jurado.', fa: 'محکمهٔ حوزه برای قضیه‌های بزرگ‌تر محاکمه با هیئت منصفه دارد. محکمهٔ عمومی ناحیه قضیه‌های ترافیکی و کوچک را بدون هیئت منصفه می‌شنود.' } }
    ]
  },

  learned: [
    { en: 'Federal cases go up in order: [[district court|district court]], [[court of appeals|court of appeals]], then the Supreme Court.', es: 'Los casos federales suben en orden: [[district court|tribunal de distrito]], [[court of appeals|corte de apelaciones]] y luego la Corte Suprema.', fa: 'قضیه‌های فدرال به ترتیب بالا می‌روند: [[district court|محکمهٔ ناحیه]]، [[court of appeals|محکمهٔ استیناف]]، بعد دیوان عالی.' },
    { en: 'A district court holds the [[trial|trial]]. Appeals courts check that the law was used correctly.', es: 'Un tribunal de distrito hace el [[trial|juicio]]. Las cortes de apelaciones revisan que la ley se usó bien.', fa: 'محکمهٔ ناحیه [[trial|محاکمه]] می‌کند. محکمه‌های استیناف می‌بینند قانون درست به کار رفته یا نه.' },
    { en: 'Most cases go to state courts. In Virginia, [[circuit court|circuit court]] is the main trial court.', es: 'La mayoría de los casos va a tribunales estatales. En Virginia, el [[circuit court|tribunal de circuito]] es el principal de juicios.', fa: 'بیشتر قضیه‌ها به محکمه‌های ایالتی می‌روند. در ویرجینیا، [[circuit court|محکمهٔ حوزه]] محکمهٔ اصلی محاکمه است.' }
  ],
  reflect: {
    q: { en: 'Why is it fair that a person can ask a higher court to check a trial?', es: '¿Por qué es justo que una persona pueda pedir a un tribunal más alto que revise un juicio?', fa: 'چرا عادلانه است که یک نفر بتواند از محکمهٔ بالاتر بخواهد محاکمه را ببیند؟' },
    starter: { en: 'It is fair because', es: 'Es justo porque', fa: 'عادلانه است چون' }
  }
};
