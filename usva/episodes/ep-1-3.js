/* TRAILWALKER · Episode 1.3 · Self-Government and the Great Awakening (VUS)
   Boston, Massachusetts, in the fall of 1740. West (x 0-15): Boston Common (top), town land with trees where
   cows grazed and where a traveling preacher drew huge crowds this fall; below it a church (meetinghouse),
   the schoolhouse and a path. East (x 16-26): King Street with the town meeting hall and a print shop (top),
   then warehouses, market stalls and Long Wharf (row 15) running out into Boston Harbor (x 27-31).
   The journal stone asks the student to walk the roots of self-government in time order. */
window.EPISODE = {
  id: '1.3',
  realm: 1,
  sol: 'VUS',
  title: { en: 'Self-Government and the Great Awakening', es: 'El autogobierno y el Gran Despertar', fa: 'خودگردانی و بیداری بزرگ' },
  weather: { sky: 'leaves', time: 'day' },
  place: { en: 'Boston, 1740', es: 'Boston, 1740', fa: 'بوستون، ۱۷۴۰' },
  intro: [
    { en: 'The Grump blurred the page about [[self-government|self-government]]. People forgot who makes their rules.',
      es: 'El Gruñón borró la página sobre el [[self-government|autogobierno]]. La gente olvidó quién hace sus reglas.',
      fa: 'غرغرو صفحهٔ [[self-government|خودگردانی]] را تار کرد. مردم فراموش کردند کی قانون‌هایشان را می‌سازد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Boston on the map, 1740 on the timeline */
  scenes: {
    at: [-71.06, 42.36],
    year: 1740,
    start: [
      { en: 'In 1740, Boston is a busy port town in Massachusetts.',
        es: 'En 1740, Boston es un puerto muy activo de Massachusetts.',
        fa: 'در سال ۱۷۴۰، بوستون یک شهر بندری پرکار در ماساچوست است.' },
      { en: 'Here, voters meet at town meetings to make their own town rules.',
        es: 'Aquí, los votantes se reúnen en asambleas para hacer sus propias reglas.',
        fa: 'اینجا رأی‌دهنده‌ها در جلسهٔ شهر جمع می‌شوند و قانون‌های شهر را خودشان می‌سازند.' },
      { en: 'This fall, a traveling preacher draws huge crowds on Boston Common.',
        es: 'Este otoño, un predicador viajero reúne multitudes enormes en el parque Boston Common.',
        fa: 'این خزان، یک واعظ سیار جمعیت بسیار بزرگ را در میدان بوستون کامن جمع می‌کند.' }
    ],
    page: { en: 'Many small New England towns still hold town meetings today.',
      es: 'Muchos pueblos pequeños de Nueva Inglaterra todavía hacen asambleas del pueblo hoy.',
      fa: 'بسیاری از شهرهای کوچک نیوانگلند امروز هم جلسهٔ شهر دارند.' },
    guess: {
      q: { en: 'At a town meeting, who made the town rules?', es: 'En una asamblea del pueblo, ¿quién hacía las reglas?', fa: 'در جلسهٔ شهر، کی قانون‌های شهر را می‌ساخت؟' },
      choices: [
        { t: { en: '🙋 The town voters', es: '🙋 Los votantes del pueblo', fa: '🙋 رأی‌دهنده‌های شهر' }, ok: true },
        { t: { en: '👑 The king', es: '👑 El rey', fa: '👑 پادشاه' } }
      ],
      why: { en: 'Voters met, talked and voted together. That is direct democracy.', es: 'Los votantes se reunían, hablaban y votaban juntos. Eso es democracia directa.', fa: 'رأی‌دهنده‌ها جمع می‌شدند، گپ می‌زدند و با هم رأی می‌دادند. این دموکراسی مستقیم است.' }
    },
    next: {
      q: { en: 'Next: John Locke said people have natural rights. Which ones?', es: 'Ahora: John Locke dijo que las personas tienen derechos naturales. ¿Cuáles?', fa: 'بعدی: جان لاک گفت مردم حقوق طبیعی دارند. کدام‌ها؟' },
      choices: [
        { t: { en: 'Life, liberty and property', es: 'Vida, libertad y propiedad', fa: 'زندگی، آزادی و ملکیت' }, ok: true },
        { t: { en: 'Gold, ships and land', es: 'Oro, barcos y tierras', fa: 'طلا، کشتی و زمین' } }
      ],
      why: { en: 'Locke said every person is born with these rights. Governments should protect them.', es: 'Locke dijo que toda persona nace con estos derechos. Los gobiernos deben protegerlos.', fa: 'لاک گفت هر انسان با این حقوق به دنیا می‌آید. حکومت‌ها باید از آن‌ها نگهداری کنند.' }
    }
  },

  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [20, 3], name: { en: 'Mr. Avery', es: 'Sr. Avery', fa: 'آقای ایوری' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#3a3a5a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am the town clerk. I write down every vote at town meeting.', es: 'Soy el secretario del pueblo. Escribo cada voto de la asamblea.', fa: 'من کاتب شهر هستم. هر رأی جلسهٔ شهر را می‌نویسم.' },
        { en: 'Voters choose town leaders. They vote on roads, schools and town taxes.', es: 'Los votantes eligen a los líderes del pueblo. Votan sobre calles, escuelas e impuestos.', fa: 'رأی‌دهنده‌ها رهبران شهر را انتخاب می‌کنند. دربارهٔ سرک، مکتب و مالیهٔ شهر رأی می‌دهند.' },
        { en: 'The English Bill of Rights, from 1689, says Parliament must agree to taxes.', es: 'La Declaración de Derechos inglesa, de 1689, dice que el Parlamento debe aprobar los impuestos.', fa: 'منشور حقوق انگلیس، از سال ۱۶۸۹، می‌گوید پارلمان باید با مالیه موافقه کند.' }
      ] },
    { at: [25, 3], name: { en: 'Widow Bell', es: 'La viuda Bell', fa: 'بیوه بِل' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#4a2a2a', pants: '#2a2a2a', style: 'bun' },
      lines: [
        { en: 'I have run this print shop since my husband died.', es: 'Dirijo esta imprenta desde que murió mi esposo.', fa: 'از وقتی شوهرم مُرد، این چاپخانه را خودم اداره می‌کنم.' },
        { en: 'Newspapers in many colonies tell about the preacher and his crowds.', es: 'Los periódicos de muchas colonias hablan del predicador y sus multitudes.', fa: 'روزنامه‌های بسیاری از مستعمره‌ها دربارهٔ واعظ و جمعیتش می‌نویسند.' }
      ] },
    { at: [4, 13], name: { en: 'Martha', es: 'Marta', fa: 'مارتا' },
      look: { skin: 2, hair: '#3a2416', shirt: '#5a6a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Our church is arguing! Some love the new, exciting preaching. Some do not.', es: '¡Nuestra iglesia discute! A unos les encanta la prédica nueva y emocionante. A otros no.', fa: 'کلیسای ما بحث دارد! بعضی وعظ نو و پرشور را دوست دارند. بعضی نه.' },
        { en: 'Some families left. They started a new church of their own.', es: 'Algunas familias se fueron. Empezaron una iglesia nueva propia.', fa: 'بعضی خانواده‌ها رفتند. آن‌ها کلیسای نوی خودشان را شروع کردند.' }
      ] },
    { at: [11, 13], name: { en: 'Caleb', es: 'Caleb', fa: 'کالب' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#8a5a2a', pants: '#3a3a2a', style: 'short' },
      lines: [
        { en: 'At school I learn to read, write and count.', es: 'En la escuela aprendo a leer, escribir y contar.', fa: 'در مکتب خواندن، نوشتن و حساب یاد می‌گیرم.' },
        { en: 'My teacher says reading helps people know the law and the Bible.', es: 'Mi maestro dice que leer ayuda a conocer la ley y la Biblia.', fa: 'معلمم می‌گوید خواندن به مردم کمک می‌کند قانون و انجیل را بشناسند.' }
      ] },
    { at: [22, 18], name: { en: 'Marie', es: 'Marie', fa: 'ماری' },
      look: { skin: 1, hair: '#1a1208', shirt: '#2f6f5a', pants: '#3a2a3a', style: 'long' },
      lines: [
        { en: 'My family came from France. We are Huguenots, French Protestants.', es: 'Mi familia vino de Francia. Somos hugonotes, protestantes franceses.', fa: 'خانوادهٔ من از فرانسه آمد. ما هوگنو هستیم، پروتستان‌های فرانسوی.' },
        { en: 'We left because the French king did not let us worship freely.', es: 'Nos fuimos porque el rey de Francia no nos dejaba practicar nuestra fe.', fa: 'ما رفتیم چون پادشاه فرانسه نمی‌گذاشت آزادانه عبادت کنیم.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Top-left: Boston Common (trees, grass, a path east to King Street on rows 4 and 9).
     Bottom-left: the church (Q roof, door 4,13), the schoolhouse (R roof, door 11,13), a path on row 16.
     Top-right: King Street (l): the town meeting hall (door 20,3), the print shop (door 25,3), a well, market stalls.
     Bottom-right: warehouses (J), stalls, a house (door 22,18) and Long Wharf (k, row 15) out into the harbor. */
  map: [
    'TTTTTTTTTTTTTTTTWWWWWWWWWWW~~~==',
    'T..,......T....Tl.........,~~~==',
    'T....T.........Tl.RRRRR.QQQ~~~==',
    'T.......,......Tl.hhdhh.hdh~~~==',
    'T:::::::::::::::lllllllllll~~~==',
    'T.x.....,....T.Tl.x........~~~==',
    'T....,.........Tl.....O....~~~==',
    'T..T......,....Tl..........~~~==',
    'T.......T......Tl..mmm.....~~~==',
    'T,.............:l..........~~~==',
    'T.......:......Tl..........~~~==',
    'T.......:......Tl.....JJJ..~~~==',
    'T.QQQQQ.:.RRR..Tl.mm..JJJ..~~~==',
    'T.hhdhh.:.hdh..Tl.........s~~~==',
    'T.......:......Tl..,......s~~~==',
    'T.......:......Tllllllllllkkkkk=',
    'T:::::::::::::::::........s~~~==',
    'T..TT......,...Tl....RRR..s~~~==',
    'T..............Tl....hdh..s~~~==',
    'T....,.....T...Tl.........s~~~==',
    'T.,.......,....Tl...,.....s~~~==',
    'TTTTTTTTTTTTTTTTWWWWWWWWWWW~~~=='
  ],
  start: [8, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [17, 13], at: [21, 13], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east. Look near the warehouses.', es: 'Desde esta nota, camina 4 pasos al este. Busca cerca de los almacenes.', fa: 'از این یادداشت، ۴ قدم به شرق برو. نزدیک گدام‌ها را ببین.' },
      text: { en: 'Massachusetts voters elected their own lawmakers, who voted on colony taxes. Here is an old coin.', es: 'Los votantes de Massachusetts elegían a sus legisladores, que votaban los impuestos. Aquí hay una moneda antigua.', fa: 'رأی‌دهنده‌های ماساچوست قانون‌گذاران خود را انتخاب می‌کردند که به مالیه رأی می‌دادند. اینجا یک سکهٔ کهنه است.' } },
    { clueAt: [13, 10], at: [13, 7], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps north, onto the Common.', es: 'Desde esta nota, camina 3 pasos al norte, hacia el Common.', fa: 'از این یادداشت، ۳ قدم به شمال برو، به میدان کامن.' },
      text: { en: 'Colonists wrote laws and letters with feather pens called quills. Here is one.', es: 'Los colonos escribían leyes y cartas con plumas de ave. Aquí hay una.', fa: 'مهاجران قانون‌ها و نامه‌ها را با قلم پَر می‌نوشتند. اینجا یکی است.' } }
  ],

  words: {
    'self-government': { en: 'people making their own laws and choosing their own leaders', es: 'cuando la gente hace sus propias leyes y elige a sus líderes', fa: 'وقتی مردم قانون‌های خود را می‌سازند و رهبران خود را انتخاب می‌کنند' },
    'magna carta': { en: 'an English paper from 1215 that said even the king must obey the law', es: 'un documento inglés de 1215 que dijo que hasta el rey debe obedecer la ley', fa: 'یک سند انگلیسی از سال ۱۲۱۵ که گفت حتی پادشاه باید از قانون پیروی کند' },
    'house of burgesses': { en: 'Virginia\'s lawmaking group from 1619; voters elected its members', es: 'el grupo que hacía las leyes de Virginia desde 1619; los votantes elegían a sus miembros', fa: 'گروه قانون‌گذار ویرجینیا از سال ۱۶۱۹؛ رأی‌دهنده‌ها اعضای آن را انتخاب می‌کردند' },
    'mayflower compact': { en: 'a promise the Pilgrims signed in 1620 to make and obey fair laws', es: 'una promesa que firmaron los peregrinos en 1620 para hacer y obedecer leyes justas', fa: 'پیمانی که زائران در ۱۶۲۰ امضا کردند تا قانون‌های عادلانه بسازند و از آن پیروی کنند' },
    'town meeting': { en: 'a meeting where a town\'s voters decide town rules together', es: 'una reunión donde los votantes de un pueblo deciden juntos las reglas', fa: 'جلسه‌ای که رأی‌دهنده‌های یک شهر با هم قانون‌های شهر را تصمیم می‌گیرند' },
    'direct democracy': { en: 'when voters decide laws themselves, not through leaders', es: 'cuando los votantes deciden las leyes ellos mismos, no por medio de líderes', fa: 'وقتی رأی‌دهنده‌ها خودشان دربارهٔ قانون تصمیم می‌گیرند، نه از راه رهبران' },
    'great awakening': { en: 'a religious revival in the colonies in the 1730s and 1740s', es: 'un renacer religioso en las colonias en las décadas de 1730 y 1740', fa: 'یک بیداری دینی در مستعمره‌ها در دهه‌های ۱۷۳۰ و ۱۷۴۰' },
    revival: { en: 'a time when many people grow excited about their faith again', es: 'un tiempo en que mucha gente se entusiasma otra vez con su fe', fa: 'زمانی که بسیاری از مردم دوباره به ایمان خود پرشور می‌شوند' },
    legislature: { en: 'a group of people chosen to make laws', es: 'un grupo de personas elegidas para hacer leyes', fa: 'گروهی از مردم که برای ساختن قانون انتخاب شده‌اند' }
  },

  npcs: [
    {
      x: 18, y: 6,
      name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#e8dcc0', pants: '#6a3a2a', style: 'bun' },
      lines: [
        { en: 'Fresh bread! Boston has held [[town meeting|town meetings]] since the 1630s.', es: '¡Pan fresco! Boston hace [[town meeting|asambleas del pueblo]] desde la década de 1630.', fa: 'نان تازه! بوستون از دههٔ ۱۶۳۰ [[town meeting|جلسهٔ شهر]] دارد.' },
        { en: 'Voters meet in the hall and decide town rules together.', es: 'Los votantes se reúnen en la sala y deciden juntos las reglas.', fa: 'رأی‌دهنده‌ها در تالار جمع می‌شوند و با هم قانون‌های شهر را تصمیم می‌گیرند.' },
        { en: 'That is [[direct democracy|direct democracy]]. The colony also has an elected [[legislature|legislature]].', es: 'Eso es [[direct democracy|democracia directa]]. La colonia también tiene una [[legislature|asamblea legislativa]] elegida.', fa: 'این [[direct democracy|دموکراسی مستقیم]] است. مستعمره یک [[legislature|مجلس قانون‌گذاری]] انتخابی هم دارد.' },
        { en: 'But I cannot vote. Usually only white men who own property can.', es: 'Pero yo no puedo votar. Casi siempre solo votan hombres blancos con propiedades.', fa: 'اما من رأی داده نمی‌توانم. معمولاً فقط مردان سفیدپوست صاحب ملکیت رأی می‌دهند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Who could usually vote in the colonies?', es: '¿Quién podía votar casi siempre en las colonias?', fa: 'در مستعمره‌ها معمولاً کی رأی داده می‌توانست؟' },
        choices: [
          { ok: true, t: { en: 'White men who owned property', es: 'Hombres blancos con propiedades', fa: 'مردان سفیدپوست صاحب ملکیت' },
            why: { en: 'Right. Women, enslaved people, Native people and most poor men could not vote.', es: 'Correcto. Las mujeres, las personas esclavizadas, los indígenas y casi todos los pobres no votaban.', fa: 'درست. زنان، بردگان، مردم بومی و بیشتر مردان فقیر رأی داده نمی‌توانستند.' } },
          { t: { en: 'Every adult who lived in town', es: 'Todo adulto que vivía en el pueblo', fa: 'هر بزرگسالی که در شهر زندگی می‌کرد' },
            why: { en: 'No. Ruth lives in town, but women could not vote. Many men could not either.', es: 'No. Ruth vive en el pueblo, pero las mujeres no votaban. Muchos hombres tampoco.', fa: 'نه. روت در شهر زندگی می‌کند، اما زنان رأی نمی‌دادند. بسیاری از مردان هم نه.' } },
          { t: { en: 'Only the ministers of churches', es: 'Solo los ministros de las iglesias', fa: 'فقط کشیش‌های کلیساها' },
            why: { en: 'No. Many men voted, not only ministers. But they had to be white and own property.', es: 'No. Votaban muchos hombres, no solo ministros. Pero tenían que ser blancos y tener propiedades.', fa: 'نه. بسیاری از مردان رأی می‌دادند، نه فقط کشیش‌ها. اما باید سفیدپوست و صاحب ملکیت می‌بودند.' } }
        ]
      }
    },
    {
      x: 13, y: 15,
      name: { en: 'Mr. Cole', es: 'Sr. Cole', fa: 'آقای کول' },
      role: { en: 'Schoolmaster', es: 'Maestro de escuela', fa: 'معلم مکتب' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#2a2a2a', pants: '#2a2a2a', style: 'short', hat: '#1a1a1a' },
      lines: [
        { en: 'In 1215, English nobles made King John accept the [[magna carta|Magna Carta]].', es: 'En 1215, los nobles ingleses obligaron al rey Juan a aceptar la [[magna carta|Carta Magna]].', fa: 'در سال ۱۲۱۵، اشراف انگلیس شاه جان را مجبور کردند [[magna carta|مگنا کارتا]] را قبول کند.' },
        { en: 'It said even the king must obey the law.', es: 'Decía que hasta el rey debe obedecer la ley.', fa: 'می‌گفت حتی پادشاه باید از قانون پیروی کند.' },
        { en: 'In 1619, Virginia began the [[house of burgesses|House of Burgesses]]. Voters elected its lawmakers.', es: 'En 1619, Virginia creó la [[house of burgesses|Cámara de los Burgueses]]. Los votantes elegían a sus legisladores.', fa: 'در سال ۱۶۱۹، ویرجینیا [[house of burgesses|مجلس برجس‌ها]] را شروع کرد. رأی‌دهنده‌ها قانون‌گذارانش را انتخاب کردند.' },
        { en: 'In 1620, the Pilgrims signed the [[mayflower compact|Mayflower Compact]]. They promised to obey fair laws.', es: 'En 1620, los peregrinos firmaron el [[mayflower compact|Pacto del Mayflower]]. Prometieron obedecer leyes justas.', fa: 'در سال ۱۶۲۰، زائران [[mayflower compact|پیمان می‌فلاور]] را امضا کردند. وعده دادند از قانون عادلانه پیروی کنند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was the House of Burgesses, started in 1619?', es: '¿Qué fue la Cámara de los Burgueses, creada en 1619?', fa: 'مجلس برجس‌ها که در ۱۶۱۹ شروع شد، چه بود؟' },
        choices: [
          { ok: true, t: { en: 'The first elected lawmakers in the colonies', es: 'Los primeros legisladores elegidos en las colonias', fa: 'اولین قانون‌گذاران انتخابی در مستعمره‌ها' },
            why: { en: 'Yes! Virginia voters chose burgesses to make laws. It was the first in the colonies.', es: '¡Sí! Los votantes de Virginia elegían burgueses para hacer leyes. Fue la primera en las colonias.', fa: 'بله! رأی‌دهنده‌های ویرجینیا برجس‌ها را برای ساختن قانون انتخاب کردند. اولین در مستعمره‌ها بود.' } },
          { t: { en: 'A big church where the Pilgrims prayed', es: 'Una iglesia grande donde rezaban los peregrinos', fa: 'یک کلیسای بزرگ که زائران در آن دعا می‌کردند' },
            why: { en: 'No. It was not a church. It was a group that made laws in Virginia.', es: 'No. No era una iglesia. Era un grupo que hacía leyes en Virginia.', fa: 'نه. کلیسا نبود. گروهی بود که در ویرجینیا قانون می‌ساخت.' } },
          { t: { en: 'The castle of the king in London', es: 'El castillo del rey en Londres', fa: 'قصر پادشاه در لندن' },
            why: { en: 'No. It met in Jamestown, Virginia. Its members were elected by voters.', es: 'No. Se reunía en Jamestown, Virginia. Los votantes elegían a sus miembros.', fa: 'نه. در جیمزتاون، ویرجینیا جلسه می‌کرد. رأی‌دهنده‌ها اعضایش را انتخاب می‌کردند.' } }
        ]
      }
    },
    {
      x: 6, y: 6,
      name: { en: 'Dinah', es: 'Dinah', fa: 'داینا' },
      role: { en: 'Free Black seamstress', es: 'Costurera negra libre', fa: 'خیاط سیاه‌پوست آزاد' },
      look: { skin: 5, hair: '#120c08', shirt: '#7a4a8a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'This fall, a traveling preacher spoke to huge crowds right here.', es: 'Este otoño, un predicador viajero habló a multitudes enormes aquí mismo.', fa: 'این خزان، یک واعظ سیار درست همین‌جا برای جمعیت بسیار بزرگ وعظ کرد.' },
        { en: 'People call it the [[great awakening|Great Awakening]], a [[revival|revival]] of faith.', es: 'La gente lo llama el [[great awakening|Gran Despertar]], un [[revival|renacer]] de la fe.', fa: 'مردم آن را [[great awakening|بیداری بزرگ]] می‌گویند، یک [[revival|بیداری دوبارهٔ]] ایمان.' },
        { en: 'Preachers say all are equal before God. Yet many Black Bostonians are enslaved.', es: 'Los predicadores dicen que todos son iguales ante Dios. Pero muchos negros de Boston están esclavizados.', fa: 'واعظان می‌گویند همه پیش خدا برابرند. اما بسیاری از سیاه‌پوستان بوستون برده هستند.' },
        { en: 'Now people feel free to choose their church and question their leaders.', es: 'Ahora la gente se siente libre de elegir su iglesia y cuestionar a sus líderes.', fa: 'حالا مردم خود را آزاد حس می‌کنند کلیسایشان را انتخاب کنند و از رهبران سؤال کنند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Great Awakening change people?', es: '¿Cómo cambió el Gran Despertar a la gente?', fa: 'بیداری بزرگ مردم را چطور تغییر داد؟' },
        choices: [
          { ok: true, t: { en: 'They felt free to question leaders', es: 'Se sintieron libres de cuestionar a los líderes', fa: 'آزاد شدند از رهبران سؤال کنند' },
            why: { en: 'Yes. People chose their own churches. They learned they could question people in power.', es: 'Sí. La gente eligió sus propias iglesias. Aprendió que podía cuestionar a los poderosos.', fa: 'بله. مردم کلیسای خود را انتخاب کردند. یاد گرفتند که از صاحبان قدرت سؤال کنند.' } },
          { t: { en: 'They stopped going to any church', es: 'Dejaron de ir a toda iglesia', fa: 'دیگر به هیچ کلیسا نرفتند' },
            why: { en: 'No. Crowds grew bigger, and new churches opened. Faith became stronger.', es: 'No. Las multitudes crecieron y se abrieron iglesias nuevas. La fe se hizo más fuerte.', fa: 'نه. جمعیت‌ها بزرگ‌تر شدند و کلیساهای نو باز شدند. ایمان قوی‌تر شد.' } },
          { t: { en: 'They obeyed the king even more', es: 'Obedecieron al rey aún más', fa: 'از پادشاه بیشتر اطاعت کردند' },
            why: { en: 'No. The revival taught people to think for themselves, not to obey more.', es: 'No. El renacer enseñó a la gente a pensar por sí misma, no a obedecer más.', fa: 'نه. این بیداری به مردم یاد داد خودشان فکر کنند، نه این‌که بیشتر اطاعت کنند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'BOSTON COMMON · 1740 · Town land for cows and soldiers. This fall, crowds came to hear a preacher.', es: 'BOSTON COMMON · 1740 · Tierra del pueblo para vacas y soldados. Este otoño vinieron multitudes a oír a un predicador.', fa: 'بوستون کامن · ۱۷۴۰ · زمین شهر برای گاوها و عسکرها. این خزان مردم زیاد برای شنیدن یک واعظ آمدند.' } },
    { x: 18, y: 5, text: { en: 'KING STREET · BOSTON · Voters meet in the town meeting hall. Long Wharf is to the southeast.', es: 'CALLE DEL REY · BOSTON · Los votantes se reúnen en la sala de asambleas. El muelle largo está al sureste.', fa: 'سرک شاه · بوستون · رأی‌دهنده‌ها در تالار جلسهٔ شهر جمع می‌شوند. بندرگاه دراز در جنوب شرق است.' } }
  ],

  /* the quest: Hannah the printer's helper (gold !) on King Street -> Mercy the basket maker south of the Common
     -> the Grump's Gust tore the town meeting notice into 3 pieces: the hall where voters meet (top-right),
     the Common where the preacher's crowds stood (top-left), Long Wharf where ships carry news (bottom-right)
     -> catch the gust -> back to Hannah */
  quest: {
    stat: 'hei',
    title: { en: 'The Flying Notice', es: 'El aviso que voló', fa: 'اعلانی که پرید' },
    giver: {
      x: 23, y: 5,
      name: { en: 'Hannah', es: 'Hannah', fa: 'هانا' },
      role: { en: 'Printer\'s helper', es: 'Ayudante de imprenta', fa: 'کمک‌کار چاپخانه' },
      look: { skin: 1, hair: '#a05a2a', shirt: '#f2f2f2', pants: '#2a4a6a', style: 'long' },
      lines: [
        { en: 'Oh no! A gust of wind grabbed the notice I just printed!', es: '¡Ay, no! ¡Una ráfaga de viento se llevó el aviso que acabo de imprimir!', fa: 'وای! یک تندباد اعلانی را که تازه چاپ کرده بودم، با خود برد!' },
        { en: 'It tells voters when the town meeting is, and what they will vote on.', es: 'Dice a los votantes cuándo es la asamblea y sobre qué votarán.', fa: 'به رأی‌دهنده‌ها می‌گوید جلسهٔ شهر چه وقت است و به چه رأی می‌دهند.' },
        { en: 'Mercy sells baskets south of the Common. Maybe she saw it!', es: 'Mercy vende canastas al sur del Common. ¡Tal vez lo vio!', fa: 'مِرسی در جنوب میدان کامن سبد می‌فروشد. شاید او دیده باشد!' }
      ],
      wait: { en: 'Mercy is in the southwest, below the Common, near the school.', es: 'Mercy está en el suroeste, debajo del Common, cerca de la escuela.', fa: 'مِرسی در جنوب غرب است، پایین میدان کامن، نزدیک مکتب.' },
      thanks: { en: 'The notice is whole! Now the voters will know when to meet. Thank you!', es: '¡El aviso está completo! Ahora los votantes sabrán cuándo reunirse. ¡Gracias!', fa: 'اعلان کامل شد! حالا رأی‌دهنده‌ها می‌دانند چه وقت جمع شوند. تشکر!' }
    },
    contact: {
      x: 13, y: 18,
      name: { en: 'Mercy', es: 'Mercy', fa: 'مِرسی' },
      role: { en: 'Massachusett basket maker', es: 'Cestera massachusett', fa: 'سبدباف ماساچوست' },
      look: { skin: 4, hair: '#120c08', shirt: '#8a6a3a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'My people, the Massachusett, lived on this land long before Boston.', es: 'Mi pueblo, los massachusett, vivía en esta tierra mucho antes de Boston.', fa: 'مردم من، ماساچوست‌ها، خیلی پیش از بوستون در این سرزمین زندگی می‌کردند.' },
        { en: 'Yes, I saw it! The wind tore a paper into three pieces.', es: '¡Sí, lo vi! El viento rompió un papel en tres pedazos.', fa: 'بله، دیدم! باد یک کاغذ را سه تکه کرد.' },
        { en: 'Follow the clues to each piece. Then catch that wind!', es: 'Sigue las pistas hasta cada pedazo. ¡Luego atrapa a ese viento!', fa: 'سرنخ‌ها را تا هر تکه دنبال کن. بعد آن باد را بگیر!' }
      ]
    },
    action: {
      type: 'chase',
      at: [17, 10],
      hops: [[24, 13], [24, 9]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'تندباد غرغرو' },
      taunt: { en: 'Whoosh! The Grump sent me. No notice, no town meeting!', es: '¡Fuuu! Me mandó el Gruñón. ¡Sin aviso, no hay asamblea!', fa: 'ووش! غرغرو مرا فرستاد. اعلان نباشد، جلسهٔ شهر هم نیست!' },
      clues: [
        { t: { en: 'Piece 1 blew to the hall where voters meet and decide town rules together.', es: 'El pedazo 1 voló a la sala donde los votantes se reúnen y deciden juntos.', fa: 'تکهٔ ۱ به تالاری پرید که رأی‌دهنده‌ها جمع می‌شوند و با هم تصمیم می‌گیرند.' },
          zones: [{ x: 17, y: 4, w: 6, h: 1 }],
          noBy: [
            { x: 24, y: 4, w: 3, h: 1, t: { en: 'This is the print shop. Voters meet in the bigger hall, just to the west.', es: 'Esta es la imprenta. Los votantes se reúnen en la sala grande, un poco al oeste.', fa: 'این چاپخانه است. رأی‌دهنده‌ها در تالار بزرگ‌تر، کمی به طرف غرب جمع می‌شوند.' } },
            { x: 1, y: 14, w: 7, h: 1, t: { en: 'This is a church. Town votes happen in the town meeting hall on King Street.', es: 'Esta es una iglesia. Las votaciones son en la sala de asambleas de la Calle del Rey.', fa: 'این کلیسا است. رأی‌گیری شهر در تالار جلسهٔ شهر در سرک شاه است.' } }],
          found: { en: 'Piece 1! At town meeting, voters make town rules themselves.', es: '¡El pedazo 1! En la asamblea, los votantes hacen las reglas ellos mismos.', fa: 'تکهٔ ۱! در جلسهٔ شهر، رأی‌دهنده‌ها خودشان قانون شهر را می‌سازند.' } },
        { t: { en: 'Piece 2 blew to the open land where thousands stood outside to hear the preacher.', es: 'El pedazo 2 voló al campo abierto donde miles escucharon al predicador afuera.', fa: 'تکهٔ ۲ به زمین بازی پرید که هزاران نفر بیرون ایستادند تا وعظ واعظ را بشنوند.' },
          zones: [{ x: 1, y: 5, w: 14, h: 4 }],
          noBy: [
            { x: 17, y: 9, w: 10, h: 2, t: { en: 'This is King Street, full of shops. The crowds stood on the Common, to the west.', es: 'Esta es la Calle del Rey, llena de tiendas. La gente estuvo en el Common, al oeste.', fa: 'این سرک شاه است، پر از دکان. جمعیت در میدان کامن، به طرف غرب ایستاده بود.' } }],
          found: { en: 'Piece 2! The Common held huge crowds during the Great Awakening.', es: '¡El pedazo 2! El Common se llenó de gente durante el Gran Despertar.', fa: 'تکهٔ ۲! در زمان بیداری بزرگ، میدان کامن پر از مردم بود.' } },
        { t: { en: 'Piece 3 blew to the long dock, where ships carry newspapers to other colonies.', es: 'El pedazo 3 voló al muelle largo, donde los barcos llevan periódicos a otras colonias.', fa: 'تکهٔ ۳ به بندرگاه دراز پرید، جایی که کشتی‌ها روزنامه را به مستعمره‌های دیگر می‌برند.' },
          zones: [{ x: 26, y: 15, w: 4, h: 1 }],
          noBy: [
            { x: 17, y: 11, w: 4, h: 2, t: { en: 'These are market stalls. Walk east to the long dock out in the harbor.', es: 'Estos son puestos del mercado. Camina al este hasta el muelle largo del puerto.', fa: 'این‌ها غرفه‌های بازار هستند. به شرق برو، تا بندرگاه دراز در بندر.' } }],
          found: { en: 'Piece 3! Ships spread news and new ideas from colony to colony.', es: '¡El pedazo 3! Los barcos llevaban noticias e ideas de colonia en colonia.', fa: 'تکهٔ ۳! کشتی‌ها خبر و فکرهای نو را از مستعمره به مستعمره می‌بردند.' } }
      ],
      win: { en: 'You caught the last gust! The wind dies down. The notice is whole again.', es: '¡Atrapaste la última ráfaga! El viento se calma. El aviso está completo otra vez.', fa: 'آخرین تندباد را گرفتی! باد آرام شد. اعلان دوباره کامل است.' },
      item: { icon: '📜', name: { en: 'Hannah\'s town meeting notice', es: 'El aviso de asamblea de Hannah', fa: 'اعلان جلسهٔ شهر هانا' } }
    }
  },

  scraps: [[1, 1], [26, 1], [1, 20]],
  smudges: [[10, 3], [19, 19]],

  challenge: {
    at: [7, 20],
    type: 'route', // in the world; the card version (order) is the fallback
    // the roots of self-government in time order, scattered over the town:
    // Magna Carta (King Street), House of Burgesses (by the school), Mayflower (end of Long Wharf),
    // town meetings (by the hall), the Great Awakening (on the Common)
    spots: [[24, 10], [3, 19], [30, 15], [21, 5], [11, 6]],
    stat: 'pla',
    title: { en: 'Roots of self-government', es: 'Las raíces del autogobierno', fa: 'ریشه‌های خودگردانی' },
    intro: { en: 'The Grump mixed up the journal! Walk to the 5 stops in time order, oldest first.',
      es: '¡El Gruñón revolvió el diario! Camina a las 5 paradas en orden de tiempo, de la más antigua a la más nueva.',
      fa: 'غرغرو روزنامچه را به هم زد! به ترتیب زمان به ۵ ایستگاه برو، از کهنه‌ترین شروع کن.' },
    items: [
      { icon: '👑', t: { en: 'Magna Carta: the king must obey the law', es: 'Carta Magna: el rey debe obedecer la ley', fa: 'مگنا کارتا: پادشاه باید از قانون پیروی کند' } },
      { icon: '🏛️', t: { en: 'Virginia\'s House of Burgesses meets', es: 'Se reúne la Cámara de los Burgueses de Virginia', fa: 'مجلس برجس‌های ویرجینیا جلسه می‌کند' } },
      { icon: '⛵', t: { en: 'The Pilgrims sign the Mayflower Compact', es: 'Los peregrinos firman el Pacto del Mayflower', fa: 'زائران پیمان می‌فلاور را امضا می‌کنند' } },
      { icon: '🏘️', t: { en: 'New England towns hold town meetings', es: 'Los pueblos de Nueva Inglaterra hacen asambleas', fa: 'شهرهای نیوانگلند جلسهٔ شهر برگزار می‌کنند' } },
      { icon: '⛪', t: { en: 'The Great Awakening fills the Common', es: 'El Gran Despertar llena el Common', fa: 'بیداری بزرگ میدان کامن را پر می‌کند' } }
    ],
    why: { en: 'Check the years: Magna Carta 1215, House of Burgesses 1619, Mayflower Compact 1620, town meetings 1630s, Great Awakening 1740s.',
      es: 'Mira los años: Carta Magna 1215, Cámara de los Burgueses 1619, Pacto del Mayflower 1620, asambleas 1630, Gran Despertar 1740.',
      fa: 'سال‌ها را ببین: مگنا کارتا ۱۲۱۵، مجلس برجس‌ها ۱۶۱۹، پیمان می‌فلاور ۱۶۲۰، جلسهٔ شهر دههٔ ۱۶۳۰، بیداری بزرگ دههٔ ۱۷۴۰.' },
    success: { en: 'The roots are in order! Step by step, people learned to govern themselves.', es: '¡Las raíces están en orden! Paso a paso, la gente aprendió a gobernarse.', fa: 'ریشه‌ها به ترتیب شدند! قدم به قدم، مردم یاد گرفتند خودشان حکومت کنند.' }
  },

  boss: {
    at: [7, 2],
    stat: 'hei',
    need: 3,
    name: { en: 'The Bossy Grump', es: 'El Gruñón Mandón', fa: 'غرغروی زورگو' },
    appear: { en: 'The Bossy Grump is hiding in the fog on Boston Common!', es: '¡El Gruñón Mandón se esconde en la niebla del Boston Common!', fa: 'غرغروی زورگو در مه میدان بوستون کامن پنهان است!' },
    taunt: { en: 'Votes? Meetings? Ha! I make ALL the rules around here!', es: '¿Votos? ¿Asambleas? ¡Ja! ¡Aquí YO hago TODAS las reglas!', fa: 'رأی؟ جلسه؟ ها! اینجا همهٔ قانون‌ها را من می‌سازم!' },
    win: { en: 'The fog lifts over Boston. Journal page 1.3 floats down into your hands!', es: 'La niebla se va de Boston. ¡La página 1.3 del diario cae en tus manos!', fa: 'مه از روی بوستون کنار می‌رود. صفحهٔ ۱.۳ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What did the Magna Carta of 1215 say about the king?', es: '¿Qué decía la Carta Magna de 1215 sobre el rey?', fa: 'مگنا کارتای ۱۲۱۵ دربارهٔ پادشاه چه می‌گفت؟' },
        choices: [
          { en: 'He must obey the law too', es: 'Él también debe obedecer la ley', fa: 'او هم باید از قانون پیروی کند' },
          { en: 'He could make any law he liked', es: 'Podía hacer cualquier ley que quisiera', fa: 'هر قانونی که بخواهد ساخته می‌تواند' },
          { en: 'He must move to the colonies', es: 'Debía mudarse a las colonias', fa: 'باید به مستعمره‌ها کوچ کند' },
          { en: 'He must be chosen by voters', es: 'Debían elegirlo los votantes', fa: 'رأی‌دهنده‌ها باید او را انتخاب کنند' }],
        answer: 0,
        why: { en: 'King John had to accept that the law was above him. Colonists remembered this idea.', es: 'El rey Juan tuvo que aceptar que la ley estaba sobre él. Los colonos recordaron esta idea.', fa: 'شاه جان مجبور شد قبول کند که قانون بالاتر از اوست. مهاجران این فکر را به یاد داشتند.' } },
      { q: { en: 'Why was Virginia\'s House of Burgesses important?', es: '¿Por qué fue importante la Cámara de los Burgueses de Virginia?', fa: 'چرا مجلس برجس‌های ویرجینیا مهم بود؟' },
        choices: [
          { en: 'It was the first elected lawmaking body in the colonies', es: 'Fue el primer grupo de legisladores elegidos en las colonias', fa: 'اولین گروه قانون‌گذار انتخابی در مستعمره‌ها بود' },
          { en: 'It was the very first school for children in the colonies', es: 'Fue la primera escuela para niños en todas las colonias', fa: 'اولین مکتب برای اطفال در همهٔ مستعمره‌ها بود' },
          { en: 'It was a palace the king of England built in the colonies', es: 'Fue un palacio que el rey de Inglaterra construyó en las colonias', fa: 'قصری بود که پادشاه انگلیس در مستعمره‌ها ساخت' },
          { en: 'It was the first church the Pilgrims built in the colonies', es: 'Fue la primera iglesia que los peregrinos construyeron allí', fa: 'اولین کلیسایی بود که زائران در مستعمره‌ها ساختند' }],
        answer: 0,
        why: { en: 'In 1619, Virginia voters elected burgesses to make laws. It was the first in the colonies.', es: 'En 1619, los votantes de Virginia eligieron burgueses para hacer leyes. Fue la primera en las colonias.', fa: 'در سال ۱۶۱۹، رأی‌دهنده‌های ویرجینیا برجس‌ها را برای ساختن قانون انتخاب کردند. اولین در مستعمره‌ها بود.' } },
      { q: { en: 'In the Mayflower Compact of 1620, what did the Pilgrims agree to do?', es: 'En el Pacto del Mayflower de 1620, ¿qué acordaron los peregrinos?', fa: 'در پیمان می‌فلاور سال ۱۶۲۰، زائران به چه کاری موافقه کردند؟' },
        choices: [
          { en: 'Make and obey fair laws together', es: 'Hacer y obedecer juntos leyes justas', fa: 'با هم قانون عادلانه بسازند و پیروی کنند' },
          { en: 'Obey only the captain of the ship', es: 'Obedecer solo al capitán del barco', fa: 'فقط از کپتان کشتی اطاعت کنند' },
          { en: 'Never make any laws at all', es: 'No hacer nunca ninguna ley', fa: 'هرگز هیچ قانونی نسازند' },
          { en: 'Sail back to England in one year', es: 'Volver a Inglaterra en un año', fa: 'بعد از یک سال به انگلیس برگردند' }],
        answer: 0,
        why: { en: 'The Mayflower Compact was a promise to make fair laws for the good of all, and obey them.', es: 'El Pacto del Mayflower fue una promesa de hacer leyes justas para el bien de todos y obedecerlas.', fa: 'پیمان می‌فلاور وعده‌ای بود که برای خیر همه قانون عادلانه بسازند و از آن پیروی کنند.' } },
      { q: { en: 'At a New England town meeting, who voted on the town rules?', es: 'En una asamblea de Nueva Inglaterra, ¿quién votaba las reglas del pueblo?', fa: 'در جلسهٔ شهر نیوانگلند، کی به قانون‌های شهر رأی می‌داد؟' },
        choices: [
          { en: 'The town voters, face to face', es: 'Los votantes del pueblo, cara a cara', fa: 'رأی‌دهنده‌های شهر، روبه‌رو' },
          { en: 'The king, by letter from London', es: 'El rey, por carta desde Londres', fa: 'پادشاه، با نامه از لندن' },
          { en: 'One governor, all by himself', es: 'Un gobernador, él solo', fa: 'یک والی، به تنهایی' },
          { en: 'Ship captains down at the harbor', es: 'Los capitanes de barco del puerto', fa: 'کپتان‌های کشتی در بندر' }],
        answer: 0,
        why: { en: 'Voters met and decided together. That is direct democracy.', es: 'Los votantes se reunían y decidían juntos. Eso es democracia directa.', fa: 'رأی‌دهنده‌ها جمع می‌شدند و با هم تصمیم می‌گرفتند. این دموکراسی مستقیم است.' } },
      { q: { en: 'In most colonies, who was usually allowed to vote?', es: 'En la mayoría de las colonias, ¿quién podía votar casi siempre?', fa: 'در بیشتر مستعمره‌ها، معمولاً کی اجازهٔ رأی داشت؟' },
        choices: [
          { en: 'White men who owned property', es: 'Hombres blancos con propiedades', fa: 'مردان سفیدپوست صاحب ملکیت' },
          { en: 'All adults, both men and women', es: 'Todos los adultos, hombres y mujeres', fa: 'همهٔ بزرگسالان، مرد و زن' },
          { en: 'Anyone over twelve years old', es: 'Cualquiera mayor de doce años', fa: 'هر کسی بالاتر از دوازده سال' },
          { en: 'Only people born in England', es: 'Solo los nacidos en Inglaterra', fa: 'فقط کسانی که در انگلیس زاده شدند' }],
        answer: 0,
        why: { en: 'Women, enslaved people, Native people and most poor men were usually left out.', es: 'Las mujeres, las personas esclavizadas, los indígenas y casi todos los pobres quedaban fuera.', fa: 'زنان، بردگان، مردم بومی و بیشتر مردان فقیر معمولاً بیرون می‌ماندند.' } },
      { q: { en: 'What was the Great Awakening of the 1730s and 1740s?', es: '¿Qué fue el Gran Despertar de las décadas de 1730 y 1740?', fa: 'بیداری بزرگ دهه‌های ۱۷۳۰ و ۱۷۴۰ چه بود؟' },
        choices: [
          { en: 'A religious revival in the colonies', es: 'Un renacer religioso en las colonias', fa: 'یک بیداری دینی در مستعمره‌ها' },
          { en: 'A war between France and England', es: 'Una guerra entre Francia e Inglaterra', fa: 'یک جنگ میان فرانسه و انگلیس' },
          { en: 'A new tax on paper and on tea', es: 'Un impuesto nuevo al papel y al té', fa: 'یک مالیهٔ نو بر کاغذ و چای' },
          { en: 'A huge storm that hit Boston', es: 'Una tormenta enorme que golpeó Boston', fa: 'یک توفان بزرگ که به بوستون خورد' }],
        answer: 0,
        why: { en: 'Traveling preachers drew huge crowds. Many people felt their faith come alive again.', es: 'Los predicadores viajeros reunían multitudes. Mucha gente sintió que su fe revivía.', fa: 'واعظان سیار جمعیت بزرگ جمع می‌کردند. بسیاری حس کردند ایمان‌شان دوباره زنده شد.' } },
      { q: { en: 'Who was a famous traveling preacher of the Great Awakening?', es: '¿Quién fue un famoso predicador viajero del Gran Despertar?', fa: 'کی یک واعظ سیار مشهور بیداری بزرگ بود؟' },
        choices: [
          { en: 'George Whitefield', es: 'George Whitefield', fa: 'جورج وایتفیلد' },
          { en: 'King John of England', es: 'El rey Juan de Inglaterra', fa: 'شاه جان انگلیس' },
          { en: 'Captain John Smith', es: 'El capitán John Smith', fa: 'کپتان جان اسمیت' },
          { en: 'Christopher Columbus', es: 'Cristóbal Colón', fa: 'کریستوفر کلمبوس' }],
        answer: 0,
        why: { en: 'George Whitefield preached all over the colonies. Jonathan Edwards was another famous preacher.', es: 'George Whitefield predicó por todas las colonias. Jonathan Edwards fue otro predicador famoso.', fa: 'جورج وایتفیلد در همهٔ مستعمره‌ها وعظ کرد. جاناتان ادواردز واعظ مشهور دیگری بود.' } },
      { q: { en: 'How did the Great Awakening help lead toward the American Revolution?', es: '¿Cómo ayudó el Gran Despertar a llevar a la Revolución estadounidense?', fa: 'بیداری بزرگ چطور به رسیدن انقلاب امریکا کمک کرد؟' },
        choices: [
          { en: 'People learned to question leaders', es: 'La gente aprendió a cuestionar a los líderes', fa: 'مردم یاد گرفتند از رهبران سؤال کنند' },
          { en: 'People stopped reading newspapers', es: 'La gente dejó de leer periódicos', fa: 'مردم دیگر روزنامه نخواندند' },
          { en: 'People wanted a much stronger king', es: 'La gente quería un rey más fuerte', fa: 'مردم یک پادشاه قوی‌تر می‌خواستند' },
          { en: 'People moved back to England', es: 'La gente regresó a Inglaterra', fa: 'مردم به انگلیس برگشتند' }],
        answer: 0,
        why: { en: 'If you could question a minister, you could question a king. That idea grew.', es: 'Si podías cuestionar a un ministro, podías cuestionar a un rey. Esa idea creció.', fa: 'اگر از یک کشیش سؤال کرده می‌توانستی، از پادشاه هم می‌توانستی. این فکر بزرگ شد.' } }
    ]
  },

  learned: [
    { en: 'Colonists built [[self-government|self-government]] on English ideas, like the [[magna carta|Magna Carta]] and the English Bill of Rights.', es: 'Los colonos construyeron el [[self-government|autogobierno]] con ideas inglesas, como la [[magna carta|Carta Magna]] y la Declaración de Derechos.', fa: 'مهاجران [[self-government|خودگردانی]] را بر فکرهای انگلیسی بنا کردند، مثل [[magna carta|مگنا کارتا]] و منشور حقوق انگلیس.' },
    { en: 'The [[house of burgesses|House of Burgesses]], the [[mayflower compact|Mayflower Compact]] and [[town meeting|town meetings]] let colonists make laws. Usually only white men with property voted.', es: 'La [[house of burgesses|Cámara de los Burgueses]], el [[mayflower compact|Pacto del Mayflower]] y las [[town meeting|asambleas]] dejaron a los colonos hacer leyes. Casi siempre solo votaban hombres blancos con propiedades.', fa: '[[house of burgesses|مجلس برجس‌ها]]، [[mayflower compact|پیمان می‌فلاور]] و [[town meeting|جلسهٔ شهر]] به مهاجران اجازه دادند قانون بسازند. معمولاً فقط مردان سفیدپوست صاحب ملکیت رأی می‌دادند.' },
    { en: 'The [[great awakening|Great Awakening]] taught people to question leaders. This helped lead toward the Revolution.', es: 'El [[great awakening|Gran Despertar]] enseñó a la gente a cuestionar a los líderes. Esto ayudó a llevar a la Revolución.', fa: '[[great awakening|بیداری بزرگ]] به مردم یاد داد از رهبران سؤال کنند. این به رسیدن انقلاب کمک کرد.' }
  ],
  reflect: {
    q: { en: 'Where do you get a say in the rules: at home, at school or in your town?', es: '¿Dónde tienes voz en las reglas: en casa, en la escuela o en tu ciudad?', fa: 'در کجا در قانون‌ها نظر داری: در خانه، در مکتب یا در شهرت؟' },
    starter: { en: 'One place I get a say is', es: 'Un lugar donde tengo voz es', fa: 'یک جایی که من نظر دارم' }
  }
};
