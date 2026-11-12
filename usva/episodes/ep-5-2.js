/* TRAILWALKER · Episode 5.2 · The Civil War and Emancipation (VUS)
   Fort Monroe at Old Point Comfort (Hampton, Virginia), autumn 1862. Hard topic (war, slavery): plain, true, serious
   words, no gore, no jokes near suffering; the Grump's taunts are serious.
   West (x 0-10): the contraband camp, with cabins freed people built, a cornfield and the school under the big oak.
   x 11-12: Mill Creek, crossed by two bridges (rows 9 and 16).
   East (x 16-28): the stone fort inside its moat (~). The west gate (row 9) and the south gate (x 22) cross the moat.
   Inside: two brick buildings and the parade ground. x 29 and rows 16-19: the beach on the Chesapeake Bay (=). */
window.EPISODE = {
  id: '5.2',
  realm: 5,
  sol: 'VUS',
  title: { en: 'The Civil War and Emancipation', es: 'La Guerra Civil y la emancipación', fa: 'جنگ داخلی و آزادی بردگان' },
  place: { en: 'Fort Monroe, 1862', es: 'Fuerte Monroe, 1862', fa: 'قلعهٔ مونرو، ۱۸۶۲' },
  intro: [
    { en: 'The Grump blurred the Civil War page. People forgot who walked here to be free.',
      es: 'El Gruñón borró la página de la Guerra Civil. La gente olvidó quién vino aquí a ser libre.',
      fa: 'غرغرو صفحهٔ جنگ داخلی را تار کرد. مردم فراموش کردند چه کسانی برای آزادی به اینجا آمدند.' },
    { en: 'Listen to the 3 people here with care. Then fix the journal stone.',
      es: 'Escucha con atención a las 3 personas de aquí. Luego arregla la piedra del diario.',
      fa: 'به ۳ نفر اینجا با دقت گوش بده. بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Old Point Comfort on the Chesapeake Bay; 1862 on the timeline */
  scenes: {
    at: [-76.31, 37.00],
    year: 1862,
    start: [
      { en: 'In 1861, the United States split apart. The Civil War began.',
        es: 'En 1861, Estados Unidos se dividió. Empezó la Guerra Civil.',
        fa: 'در سال ۱۸۶۱، ایالات متحده دو تکه شد. جنگ داخلی شروع شد.' },
      { en: 'Virginia joined the South. But Fort Monroe, in Virginia, stayed with the Union.',
        es: 'Virginia se unió al Sur. Pero el Fuerte Monroe, en Virginia, siguió con la Unión.',
        fa: 'ویرجینیا با جنوب یکجا شد. اما قلعهٔ مونرو در ویرجینیا با اتحادیه ماند.' },
      { en: 'Thousands of enslaved people came to this fort to find freedom.',
        es: 'Miles de personas esclavizadas vinieron a este fuerte a buscar la libertad.',
        fa: 'هزاران نفر از مردمان برده برای پیدا کردن آزادی به این قلعه آمدند.' }
    ],
    page: { en: 'Today, Fort Monroe is a national monument. It honors the people who found freedom here.',
      es: 'Hoy el Fuerte Monroe es un monumento nacional. Honra a quienes encontraron la libertad aquí.',
      fa: 'امروز قلعهٔ مونرو یک یادگار ملی است. از کسانی که اینجا آزادی یافتند یاد می‌کند.' },
    guess: {
      q: { en: 'In 1861, three enslaved men escaped to this Union fort. What happened to them?', es: 'En 1861, tres hombres esclavizados huyeron a este fuerte de la Unión. ¿Qué les pasó?', fa: 'در سال ۱۸۶۱، سه مرد برده به این قلعهٔ اتحادیه فرار کردند. چه شد؟' },
      choices: [
        { t: { en: 'The general kept them safe', es: 'El general los protegió', fa: 'جنرال آن‌ها را نگه داشت' }, ok: true },
        { t: { en: 'They were sent back', es: 'Los devolvieron', fa: 'آن‌ها را پس فرستادند' } }
      ],
      why: { en: 'General Butler would not send them back. He called them "contraband of war." Thousands more came.', es: 'El general Butler no los devolvió. Los llamó "contrabando de guerra". Llegaron miles más.', fa: 'جنرال باتلر آن‌ها را پس نفرستاد. آن‌ها را «غنیمت جنگ» نامید. هزاران نفر دیگر هم آمدند.' }
    },
    next: {
      q: { en: 'Next: Richmond, 1868. After the war, was life suddenly fair for freed people?', es: 'Ahora: Richmond, 1868. Después de la guerra, ¿la vida fue justa de repente para los libres?', fa: 'بعدی: ریچموند، ۱۸۶۸. بعد از جنگ، آیا زندگی برای آزادشده‌ها ناگهان عادلانه شد؟' },
      choices: [
        { t: { en: 'No, the struggle went on', es: 'No, la lucha siguió', fa: 'نه، مبارزه ادامه یافت' }, ok: true },
        { t: { en: 'Yes, everything was fair', es: 'Sí, todo fue justo', fa: 'بله، همه چیز عادلانه شد' } }
      ],
      why: { en: 'Slavery ended in 1865. But freed people still faced unfair laws, and kept working for equal rights.', es: 'La esclavitud terminó en 1865. Pero los libres aún enfrentaron leyes injustas y siguieron luchando por la igualdad.', fa: 'بردگی در سال ۱۸۶۵ تمام شد. اما آزادشده‌ها هنوز با قانون‌های ناعادلانه روبرو بودند و برای حقوق برابر کار کردند.' }
    }
  },
  /* houses: the two cabins in the camp and the two brick buildings inside the fort */
  houses: [
    { at: [3, 3], name: { en: 'Mr. Moses', es: 'Sr. Moses', fa: 'آقای موزس' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#7a5a3a', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'Come in. We built these cabins ourselves, board by board.', es: 'Pasa. Construimos estas cabañas nosotros mismos, tabla por tabla.', fa: 'بیا داخل. این کلبه‌ها را خودمان، تخته به تخته، ساختیم.' },
        { en: 'The army hires many of us. I build roads and docks for the fort.', es: 'El ejército contrata a muchos de nosotros. Yo hago caminos y muelles para el fuerte.', fa: 'اردو بسیاری از ما را به کار می‌گیرد. من برای قلعه سرک و بندرگاه می‌سازم.' },
        { en: 'For the first time in my life, I am paid for my work.', es: 'Por primera vez en mi vida, me pagan por mi trabajo.', fa: 'برای اولین بار در زندگی‌ام، برای کارم مزد می‌گیرم.' }
      ] },
    { at: [7, 3], name: { en: 'Grandma Bess', es: 'Abuela Bess', fa: 'مادرکلان بِس' },
      look: { skin: 4, hair: '#d8d8d8', shirt: '#5a3a6a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I was enslaved near Richmond for fifty years. Now I am free.', es: 'Fui esclavizada cerca de Richmond durante cincuenta años. Ahora soy libre.', fa: 'من پنجاه سال نزدیک ریچموند برده بودم. حالا آزاد هستم.' },
        { en: 'Confederate leaders say they fight for states\' rights.', es: 'Los líderes confederados dicen que luchan por los derechos de los estados.', fa: 'رهبران کنفدراسی می‌گویند برای حقوق ایالت‌ها می‌جنگند.' },
        { en: 'But the right they wanted most was the right to keep slavery.', es: 'Pero el derecho que más querían era el de mantener la esclavitud.', fa: 'اما حقی که بیشتر از همه می‌خواستند، حق نگه داشتن برده‌ها بود.' }
      ] },
    { at: [19, 4], name: { en: 'Mrs. Kelly', es: 'Sra. Kelly', fa: 'خانم کِلی' },
      look: { skin: 0, hair: '#a04a1a', shirt: '#4a6a3a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'I came from Ireland. My husband is a soldier, and I wash clothes here.', es: 'Vine de Irlanda. Mi esposo es soldado y yo lavo ropa aquí.', fa: 'من از آیرلند آمدم. شوهرم سرباز است و من اینجا کالا می‌شویم.' },
        { en: 'Many people in western Virginia did not want to leave the Union.', es: 'Mucha gente del oeste de Virginia no quería dejar la Unión.', fa: 'بسیاری از مردم غرب ویرجینیا نمی‌خواستند از اتحادیه جدا شوند.' },
        { en: 'So they are making a new state. It will be called West Virginia.', es: 'Por eso están formando un estado nuevo. Se llamará Virginia Occidental.', fa: 'برای همین یک ایالت نو می‌سازند. نامش ویرجینیای غربی خواهد بود.' }
      ] },
    { at: [25, 4], name: { en: 'Mr. Lewis', es: 'Sr. Lewis', fa: 'آقای لوئیس' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I sort the mail. News came by boat: the Union stopped Lee at Antietam.', es: 'Yo ordeno el correo. Llegó la noticia en barco: la Unión detuvo a Lee en Antietam.', fa: 'من پُست را جدا می‌کنم. خبر با کشتی رسید: اتحادیه لی را در انتیتم متوقف کرد.' },
        { en: 'Then Lincoln said: on January 1, enslaved people in rebel states go free.', es: 'Luego Lincoln dijo: el 1 de enero, los esclavizados en los estados rebeldes serán libres.', fa: 'بعد لینکن گفت: در اول جنوری، برده‌ها در ایالت‌های شورشی آزاد می‌شوند.' },
        { en: 'Frederick Douglass writes that Black men should be allowed to fight.', es: 'Frederick Douglass escribe que a los hombres negros se les debe dejar luchar.', fa: 'فردریک داگلس می‌نویسد که باید به مردان سیاه‌پوست اجازهٔ جنگیدن داده شود.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. North-west: the contraband camp (cabins H/N, cornfield o/2). South-west: the school
     under the big oak (T). Mill Creek (~) at x 11-12 with bridges b. North-east: inside the fort walls (W), brick
     buildings (R over h) and the parade ground (l). The moat (~) rings the walls. South-east: the beach (s) and the bay (=). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTT=====',
    'T..........~~...~~~~~~~~~~~~~s==',
    'T.HHH.HHH..~~...~WWWWWWWWWWW~s==',
    'T.NdN.NdN..~~...~WRRR...RRRW~s==',
    'T.........x~~...~WhdhlllhdhW~s==',
    'T.::::::::.~~...~WlllllllllW~s==',
    'T.:..oooo..~~...~Wl.......lW~s==',
    'T.:..2222..~~...~Wl...x...lW~s==',
    'T.:..oooo..~~...~Wl.......lW~s==',
    'T.:::::::::bb:::bllllllllllW~s==',
    'T.:........~~...~Wl.......lW~s==',
    'T.:........~~...~Wl.......lW~s==',
    'T.:..TTT...~~...~Wl.......lW~s==',
    'T.:.xTTT...~~...~WlllllllllW~s==',
    'T.:........~~...~WWWWWlWWWWW~s==',
    'T.::::::...~~...~~~~~~B~~~~~~s==',
    'T......,...bb...sssssssssssssss=',
    'T.,.....,..~~sxsssssssssssssss==',
    'T..........~~sssssssssssssss~===',
    'T..........~~ss~~~~~~~~~~~~~====',
    'T..........~~~~~================',
    'TTTTTTTTTTTT~~~~================'
  ],
  start: [13, 11],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [13, 6], at: [15, 3], decor: 'shell',
      clue: { en: 'From this note, walk 2 steps east, then 3 steps north. Look near the moat.', es: 'Desde esta nota, camina 2 pasos al este y luego 3 pasos al norte. Busca cerca del foso.', fa: 'از این یادداشت، ۲ قدم به شرق برو، بعد ۳ قدم به شمال. نزدیک خندق را ببین.' },
      text: { en: 'Ships enter the Chesapeake Bay past this point. Here is a shell from the beach.', es: 'Los barcos entran a la bahía de Chesapeake pasando por esta punta. Aquí hay una concha de la playa.', fa: 'کشتی‌ها از کنار این نقطه به خلیج چیساپیک داخل می‌شوند. اینجا یک صدف از ساحل است.' } },
    { clueAt: [2, 19], at: [7, 19], decor: 'flower',
      clue: { en: 'From this note, walk 5 steps east. Look in the grass by the creek road.', es: 'Desde esta nota, camina 5 pasos al este. Busca en la hierba cerca del camino del arroyo.', fa: 'از این یادداشت، ۵ قدم به شرق برو. در علف‌های نزدیک راه جوی را ببین.' },
      text: { en: 'Freed families planted gardens near their cabins. Here is a little garden flower.', es: 'Las familias libres sembraron huertos junto a sus cabañas. Aquí hay una florecita del huerto.', fa: 'خانواده‌های آزادشده نزدیک کلبه‌هایشان باغچه کاشتند. اینجا یک گل کوچک باغچه است.' } }
  ],

  words: {
    union: { en: 'the United States side in the Civil War: the North', es: 'el lado de Estados Unidos en la Guerra Civil: el Norte', fa: 'طرف ایالات متحده در جنگ داخلی: شمال' },
    confederacy: { en: 'the 11 Southern states that left the Union to keep slavery', es: 'los 11 estados del Sur que dejaron la Unión para mantener la esclavitud', fa: '۱۱ ایالت جنوبی که برای نگه داشتن بردگی از اتحادیه جدا شدند' },
    secede: { en: 'to leave a country and try to form a new one', es: 'salir de un país e intentar formar uno nuevo', fa: 'از یک کشور جدا شدن و کوشش برای ساختن کشور نو' },
    contraband: { en: 'property taken from an enemy in war; Butler used this word for freedom seekers', es: 'bienes quitados al enemigo en la guerra; Butler usó esta palabra para quienes buscaban libertad', fa: 'مالی که در جنگ از دشمن گرفته می‌شود؛ باتلر این نام را برای آزادی‌خواهان به کار برد' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'emancipation proclamation': { en: 'Lincoln\'s order of January 1, 1863, freeing enslaved people in the rebel states', es: 'la orden de Lincoln del 1 de enero de 1863 que liberó a los esclavizados en los estados rebeldes', fa: 'فرمان لینکن در اول جنوری ۱۸۶۳ که برده‌ها را در ایالت‌های شورشی آزاد کرد' },
    moat: { en: 'a ditch full of water around a fort', es: 'una zanja llena de agua alrededor de un fuerte', fa: 'جوی پر از آب دور یک قلعه' },
    surrender: { en: 'to stop fighting and admit the other side has won', es: 'dejar de luchar y aceptar que el otro lado ganó', fa: 'دست کشیدن از جنگ و قبول کردن پیروزی طرف دیگر' }
  },

  npcs: [
    {
      x: 5, y: 5,
      name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      role: { en: 'Freedwoman', es: 'Mujer liberada', fa: 'زن آزادشده' },
      look: { skin: 4, hair: '#1a1008', shirt: '#2f6f8f', pants: '#4a3a2a', style: 'bun' },
      lines: [
        { en: 'I ran here in 1861 with my two children, at night, by boat.', es: 'Llegué aquí en 1861 con mis dos hijos, de noche, en bote.', fa: 'در سال ۱۸۶۱ با دو فرزندم، شبانه و با قایق به اینجا فرار کردم.' },
        { en: 'Three men came first: Frank Baker, Shepard Mallory and James Townsend.', es: 'Tres hombres llegaron primero: Frank Baker, Shepard Mallory y James Townsend.', fa: 'اول سه مرد آمدند: فرانک بیکر، شپرد مالوری و جیمز تاونزند.' },
        { en: 'General Butler would not send them back. He called them [[contraband|contraband of war]].', es: 'El general Butler no los devolvió. Los llamó [[contraband|contrabando de guerra]].', fa: 'جنرال باتلر آن‌ها را پس نفرستاد. آن‌ها را [[contraband|غنیمت جنگ]] نامید.' },
        { en: 'Thousands of us followed. We call this place Freedom\'s Fortress.', es: 'Miles de nosotros los seguimos. Llamamos a este lugar la Fortaleza de la Libertad.', fa: 'هزاران نفر از ما دنبال‌شان آمدیم. اینجا را قلعهٔ آزادی می‌نامیم.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did enslaved people risk so much to reach Fort Monroe?', es: '¿Por qué las personas esclavizadas arriesgaron tanto para llegar al Fuerte Monroe?', fa: 'چرا مردمان برده برای رسیدن به قلعهٔ مونرو این‌قدر خطر کردند؟' },
        choices: [
          { ok: true, t: { en: 'To be free and keep families together', es: 'Para ser libres y mantener unidas a sus familias', fa: 'برای آزاد شدن و با هم ماندن خانواده‌ها' },
            why: { en: 'Yes. At the Union fort, they would not be sent back into slavery.', es: 'Sí. En el fuerte de la Unión no los devolverían a la esclavitud.', fa: 'بله. در قلعهٔ اتحادیه، آن‌ها دوباره به بردگی فرستاده نمی‌شدند.' } },
          { t: { en: 'To join the Confederate army and fight', es: 'Para unirse al ejército confederado y luchar', fa: 'برای پیوستن به اردوی کنفدراسی و جنگیدن' },
            why: { en: 'No. The Confederacy fought to keep slavery. They ran away from it.', es: 'No. La Confederación luchaba para mantener la esclavitud. Ellos huían de ella.', fa: 'نه. کنفدراسی برای نگه داشتن بردگی می‌جنگید. آن‌ها از آن فرار کردند.' } },
          { t: { en: 'To buy cheap farmland from the army', es: 'Para comprar tierras baratas al ejército', fa: 'برای خریدن زمین ارزان از اردو' },
            why: { en: 'No. Most came with almost nothing. They came for freedom.', es: 'No. La mayoría llegó casi sin nada. Vinieron por la libertad.', fa: 'نه. بیشترشان تقریباً با دست خالی آمدند. برای آزادی آمدند.' } }
        ]
      }
    },
    {
      x: 21, y: 7,
      name: { en: 'Private Becker', es: 'Soldado Becker', fa: 'سرباز بِکر' },
      role: { en: 'Union soldier', es: 'Soldado de la Unión', fa: 'سرباز اتحادیه' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#2a3a7a', pants: '#5a7aa0', hat: '#2a3a5a', style: 'short' },
      lines: [
        { en: 'Lincoln won the election of 1860. He wanted to stop slavery from spreading west.', es: 'Lincoln ganó la elección de 1860. Quería impedir que la esclavitud se extendiera al oeste.', fa: 'لینکن در انتخابات ۱۸۶۰ برنده شد. می‌خواست جلوی پخش شدن بردگی به غرب را بگیرد.' },
        { en: 'Then eleven Southern states [[secede|seceded]]. They formed the [[confederacy|Confederacy]].', es: 'Entonces once estados del Sur se [[secede|separaron]]. Formaron la [[confederacy|Confederación]].', fa: 'بعد یازده ایالت جنوبی [[secede|جدا شدند]]. آن‌ها [[confederacy|کنفدراسی]] را ساختند.' },
        { en: 'The war began in April 1861, when Confederates fired on Fort Sumter.', es: 'La guerra empezó en abril de 1861, cuando los confederados dispararon contra el Fuerte Sumter.', fa: 'جنگ در اپریل ۱۸۶۱ شروع شد، وقتی کنفدراسی بر قلعهٔ سامتر آتش کرد.' },
        { en: 'Virginia left that April too. Richmond became the Confederate capital.', es: 'Virginia también se fue ese abril. Richmond se volvió la capital confederada.', fa: 'ویرجینیا هم در همان اپریل جدا شد. ریچموند پایتخت کنفدراسی شد.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'What was the main cause of the Civil War?', es: '¿Cuál fue la causa principal de la Guerra Civil?', fa: 'علت اصلی جنگ داخلی چه بود؟' },
        choices: [
          { ok: true, t: { en: 'Slavery, and if it would spread', es: 'La esclavitud y si se extendería', fa: 'بردگی، و این که پخش شود یا نه' },
            why: { en: 'Right. Southern states left the Union to protect slavery.', es: 'Correcto. Los estados del Sur dejaron la Unión para proteger la esclavitud.', fa: 'درست. ایالت‌های جنوبی برای حفظ بردگی از اتحادیه جدا شدند.' } },
          { t: { en: 'Taxes on tea and paper from Britain', es: 'Impuestos al té y al papel de Gran Bretaña', fa: 'مالیه بر چای و کاغذ از بریتانیا' },
            why: { en: 'The tea tax was before the American Revolution, almost 90 years earlier.', es: 'El impuesto al té fue antes de la Revolución, casi 90 años antes.', fa: 'مالیهٔ چای پیش از انقلاب امریکا بود، تقریباً ۹۰ سال پیش‌تر.' } },
          { t: { en: 'A fight with Mexico over Texas land', es: 'Una pelea con México por tierras de Texas', fa: 'جنگ با مکسیکو بر سر زمین تکزاس' },
            why: { en: 'The war with Mexico ended in 1848. The Civil War was Americans against Americans.', es: 'La guerra con México terminó en 1848. La Guerra Civil fue entre estadounidenses.', fa: 'جنگ با مکسیکو در ۱۸۴۸ تمام شد. جنگ داخلی میان خود امریکایی‌ها بود.' } }
        ]
      }
    },
    {
      x: 8, y: 12,
      name: { en: 'Miss Clara', es: 'Señorita Clara', fa: 'خانم کلارا' },
      role: { en: 'Teacher\'s helper', es: 'Ayudante de maestra', fa: 'دستیار معلم' },
      look: { skin: 3, hair: '#1a1208', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Mrs. Mary Peake started this school in 1861. She was a free Black woman.', es: 'La señora Mary Peake empezó esta escuela en 1861. Era una mujer negra libre.', fa: 'خانم مری پیک این مکتب را در سال ۱۸۶۱ شروع کرد. او یک زن سیاه‌پوست آزاد بود.' },
        { en: 'Before the war, Virginia law kept enslaved people from learning to read.', es: 'Antes de la guerra, la ley de Virginia impedía que los esclavizados aprendieran a leer.', fa: 'پیش از جنگ، قانون ویرجینیا نمی‌گذاشت برده‌ها خواندن یاد بگیرند.' },
        { en: 'Mrs. Peake became sick and died this year. We keep her school going.', es: 'La señora Peake se enfermó y murió este año. Seguimos con su escuela.', fa: 'خانم پیک امسال مریض شد و فوت کرد. ما مکتبش را ادامه می‌دهیم.' },
        { en: 'Children and grown-ups learn letters here, under this big oak tree.', es: 'Niños y adultos aprenden las letras aquí, bajo este gran roble.', fa: 'کودکان و بزرگسالان اینجا زیر این درخت بلوط بزرگ حروف یاد می‌گیرند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did freed children and adults want so much to learn to read?', es: '¿Por qué los niños y adultos libres querían tanto aprender a leer?', fa: 'چرا کودکان و بزرگسالان آزادشده این‌قدر می‌خواستند خواندن یاد بگیرند؟' },
        choices: [
          { ok: true, t: { en: 'Reading had been kept from them', es: 'Les habían negado la lectura', fa: 'خواندن را از آن‌ها گرفته بودند' },
            why: { en: 'Yes. Reading was denied to them. Now it meant more freedom and a better future.', es: 'Sí. Les negaron la lectura. Ahora significaba más libertad y un mejor futuro.', fa: 'بله. خواندن از آن‌ها گرفته شده بود. حالا یعنی آزادی بیشتر و آیندهٔ بهتر.' } },
          { t: { en: 'The army made school a strict rule', es: 'El ejército hizo de la escuela una regla', fa: 'اردو مکتب را قانون سخت کرد' },
            why: { en: 'No one forced them. Freed people chose school, even after hard work all day.', es: 'Nadie los obligó. Los libres eligieron la escuela, aun después de trabajar todo el día.', fa: 'کسی مجبورشان نکرد. آزادشده‌ها خودشان مکتب را انتخاب کردند، حتی بعد از کار سخت روز.' } },
          { t: { en: 'They had nothing else to do', es: 'No tenían nada más que hacer', fa: 'کار دیگری نداشتند' },
            why: { en: 'No. They worked hard all day. They still came to learn.', es: 'No. Trabajaban duro todo el día. Aun así venían a aprender.', fa: 'نه. تمام روز سخت کار می‌کردند. باز هم برای یاد گرفتن می‌آمدند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 22, y: 7, text: { en: 'FORT MONROE · 1862 · A stone fort with a [[moat|moat]]. It stayed in [[union|Union]] hands all war.', es: 'FUERTE MONROE · 1862 · Un fuerte de piedra con [[moat|foso]]. Quedó en manos de la [[union|Unión]] toda la guerra.', fa: 'قلعهٔ مونرو · ۱۸۶۲ · یک قلعهٔ سنگی با [[moat|خندق]]. در تمام جنگ در دست [[union|اتحادیه]] ماند.' } },
    { x: 10, y: 4, text: { en: 'CONTRABAND CAMP · Thousands of freedom seekers live and work here.', es: 'CAMPAMENTO DE CONTRABANDO · Aquí viven y trabajan miles de personas que buscan la libertad.', fa: 'اردوگاه غنیمت جنگ · هزاران آزادی‌خواه اینجا زندگی و کار می‌کنند.' } },
    { x: 4, y: 13, text: { en: 'THE SCHOOL TREE · Later, the Emancipation Proclamation was read here. Today it is called the Emancipation Oak.', es: 'EL ÁRBOL ESCUELA · Más tarde, aquí se leyó la Proclamación de Emancipación. Hoy se llama el Roble de la Emancipación.', fa: 'درخت مکتب · بعدها اعلامیهٔ آزادی بردگان اینجا خوانده شد. امروز آن را بلوط آزادی می‌نامند.' } },
    { x: 14, y: 17, text: { en: 'OLD POINT COMFORT · In 1619, the first Africans in English Virginia were brought nearby, by force.', es: 'OLD POINT COMFORT · En 1619, los primeros africanos de la Virginia inglesa fueron traídos cerca de aquí, a la fuerza.', fa: 'اولد پوینت کامفورت · در ۱۶۱۹، اولین افریقایی‌های ویرجینیای انگلیسی به زور به نزدیک اینجا آورده شدند.' } }
  ],

  /* the quest: Eli (gold !) on the beach -> Aunt Hannah the cook inside the fort -> his spelling book,
     just east of the cornfield across Mill Creek -> back to Eli */
  quest: {
    stat: 'mov',
    title: { en: 'Eli\'s Spelling Book', es: 'El libro de Eli', fa: 'کتاب املای ایلای' },
    giver: {
      x: 24, y: 17,
      name: { en: 'Eli', es: 'Eli', fa: 'ایلای' },
      role: { en: 'Student, age 10', es: 'Estudiante, 10 años', fa: 'شاگرد، ۱۰ ساله' },
      look: { skin: 5, hair: '#120c08', shirt: '#c87a2a', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'I go to the school under the big oak. I am learning to read!', es: 'Voy a la escuela bajo el gran roble. ¡Estoy aprendiendo a leer!', fa: 'من به مکتب زیر بلوط بزرگ می‌روم. خواندن یاد می‌گیرم!' },
        { en: 'But the wind took my spelling book. Aunt Hannah, the cook, saw it fly.', es: 'Pero el viento se llevó mi libro de deletreo. La tía Hannah, la cocinera, lo vio volar.', fa: 'اما باد کتاب املایم را برد. خاله هانا، آشپز، پریدنش را دید.' },
        { en: 'She cooks inside the fort. Cross the moat bridge to find her.', es: 'Ella cocina dentro del fuerte. Cruza el puente del foso para encontrarla.', fa: 'او داخل قلعه آشپزی می‌کند. از پل خندق بگذر و او را پیدا کن.' }
      ],
      wait: { en: 'Aunt Hannah is inside the fort, on the parade ground.', es: 'La tía Hannah está dentro del fuerte, en el patio de desfiles.', fa: 'خاله هانا داخل قلعه، در میدان رژه است.' },
      thanks: { en: 'My book! Tonight I will read a whole page to my mother. Thank you!', es: '¡Mi libro! Esta noche le leeré una página entera a mi mamá. ¡Gracias!', fa: 'کتابم! امشب یک صفحهٔ کامل برای مادرم می‌خوانم. تشکر!' }
    },
    contact: {
      x: 20, y: 10,
      name: { en: 'Aunt Hannah', es: 'Tía Hannah', fa: 'خاله هانا' },
      role: { en: 'Cook', es: 'Cocinera', fa: 'آشپز' },
      look: { skin: 4, hair: '#3a3a3a', shirt: '#f2f2f2', pants: '#6a2a2a', style: 'bun' },
      lines: [
        { en: 'Yes, I saw it! The wind blew a little book west, over the creek.', es: '¡Sí, lo vi! El viento llevó un librito al oeste, sobre el arroyo.', fa: 'بله، دیدمش! باد یک کتاب کوچک را به طرف غرب، از بالای جوی برد.' },
        { en: 'Cross the creek bridge, then look just east of the cornfield.', es: 'Cruza el puente del arroyo y busca justo al este del maizal.', fa: 'از پل جوی بگذر، بعد درست شرق کشتزار جواری را ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [9, 7],
      hint: { en: 'Look just east of the cornfield, west of the creek.', es: 'Busca justo al este del maizal, al oeste del arroyo.', fa: 'درست شرق کشتزار جواری، غرب جوی را ببین.' },
      found: { en: 'Found it! A spelling book, with Eli\'s name written inside in careful letters.', es: '¡Aquí está! Un libro de deletreo, con el nombre de Eli escrito con cuidado adentro.', fa: 'پیدا شد! یک کتاب املا که نام ایلای با حروف دقیق داخلش نوشته شده.' },
      item: { icon: '📘', name: { en: 'Eli\'s spelling book', es: 'El libro de deletreo de Eli', fa: 'کتاب املای ایلای' } }
    }
  },

  scraps: [[1, 1], [29, 1], [1, 20]],
  smudges: [[6, 10], [26, 18]],

  challenge: {
    at: [14, 13],
    type: 'route', // in the world; the card version (order) is the fallback
    // Fort Sumter -> First Bull Run -> Antietam -> the Emancipation Proclamation -> Gettysburg and Vicksburg -> Appomattox
    spots: [[14, 3], [3, 10], [9, 18], [20, 12], [30, 16], [18, 18]],
    stat: 'loc',
    title: { en: 'The War in Order', es: 'La guerra en orden', fa: 'جنگ به ترتیب' },
    intro: { en: 'The Grump scrambled the war news! Walk to the 6 events in order, oldest first.',
      es: '¡El Gruñón revolvió las noticias de la guerra! Camina a los 6 hechos en orden, del más antiguo al más nuevo.',
      fa: 'غرغرو خبرهای جنگ را درهم کرد! به ترتیب به ۶ رویداد برو، از کهنه‌ترین شروع کن.' },
    items: [
      { icon: '💥', t: { en: 'Fort Sumter: Confederates fire on a Union fort', es: 'Fuerte Sumter: los confederados atacan un fuerte de la Unión', fa: 'قلعهٔ سامتر: کنفدراسی بر یک قلعهٔ اتحادیه آتش می‌کند' } },
      { icon: '⚔️', t: { en: 'First Bull Run: the first big battle, in Virginia', es: 'Primera batalla de Bull Run: la primera gran batalla, en Virginia', fa: 'اولین جنگ بول ران: اولین جنگ بزرگ، در ویرجینیا' } },
      { icon: '🌾', t: { en: 'Antietam: the deadliest single day of the war', es: 'Antietam: el día más mortal de la guerra', fa: 'انتیتم: مرگبارترین روز جنگ' } },
      { icon: '📜', t: { en: 'The Emancipation Proclamation: ending slavery becomes a war aim', es: 'La Proclamación de Emancipación: acabar con la esclavitud se vuelve una meta', fa: 'اعلامیهٔ آزادی بردگان: پایان بردگی هدف جنگ می‌شود' } },
      { icon: '🔁', t: { en: 'Gettysburg and Vicksburg: the war turns toward the Union', es: 'Gettysburg y Vicksburg: la guerra se inclina hacia la Unión', fa: 'گتیزبرگ و ویکسبرگ: جنگ به سود اتحادیه می‌چرخد' } },
      { icon: '🕊️', t: { en: 'Appomattox Court House: Lee surrenders to Grant', es: 'Appomattox Court House: Lee se rinde ante Grant', fa: 'اپوماتکس کورت هاوس: لی به گرانت تسلیم می‌شود' } }
    ],
    why: { en: '1861: Fort Sumter, then Bull Run. 1862: Antietam. 1863: Emancipation, then Gettysburg and Vicksburg. 1865: Appomattox.',
      es: '1861: Fuerte Sumter y luego Bull Run. 1862: Antietam. 1863: la Emancipación, luego Gettysburg y Vicksburg. 1865: Appomattox.',
      fa: '۱۸۶۱: قلعهٔ سامتر، بعد بول ران. ۱۸۶۲: انتیتم. ۱۸۶۳: اعلامیهٔ آزادی، بعد گتیزبرگ و ویکسبرگ. ۱۸۶۵: اپوماتکس.' },
    success: { en: 'The war is in order. About 180,000 Black soldiers helped the Union win.', es: 'La guerra está en orden. Unos 180,000 soldados negros ayudaron a ganar a la Unión.', fa: 'جنگ به ترتیب شد. حدود ۱۸۰٬۰۰۰ سرباز سیاه‌پوست به پیروزی اتحادیه کمک کردند.' }
  },

  boss: {
    at: [24, 12],
    stat: 'loc',
    need: 3,
    name: { en: 'The Grim Grump', es: 'El Gruñón Sombrío', fa: 'غرغروی تاریک' },
    appear: { en: 'The Grim Grump hides in the cannon smoke inside the fort walls.', es: 'El Gruñón Sombrío se esconde en el humo de los cañones, dentro del fuerte.', fa: 'غرغروی تاریک در دود توپ‌ها، داخل دیوارهای قلعه پنهان است.' },
    taunt: { en: 'Forget the people who walked here to be free. No one will remember them.', es: 'Olvida a la gente que vino aquí a ser libre. Nadie los recordará.', fa: 'مردمی را که برای آزادی اینجا آمدند فراموش کن. هیچ کس آن‌ها را به یاد نخواهد آورد.' },
    win: { en: 'The smoke clears over the fort. Journal page 5.2 floats down into your hands.', es: 'El humo se va del fuerte. La página 5.2 del diario cae en tus manos.', fa: 'دود از روی قلعه کنار می‌رود. صفحهٔ ۵.۲ روزنامچه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What was the main cause of the Civil War?', es: '¿Cuál fue la causa principal de la Guerra Civil?', fa: 'علت اصلی جنگ داخلی چه بود؟' },
        choices: [
          { en: 'Slavery, and whether it would spread west', es: 'La esclavitud y si llegaría al oeste', fa: 'بردگی، و این که به غرب برسد یا نه' },
          { en: 'Taxes on tea and paper from Britain', es: 'Impuestos al té y al papel de Gran Bretaña', fa: 'مالیه بر چای و کاغذ از بریتانیا' },
          { en: 'A war with Mexico over Texas land', es: 'Una guerra con México por tierras de Texas', fa: 'جنگ با مکسیکو بر سر زمین تکزاس' },
          { en: 'Which state would own the Mississippi River', es: 'Qué estado sería dueño del río Misisipi', fa: 'کدام ایالت صاحب دریای میسیسیپی شود' }],
        answer: 0,
        why: { en: 'Slavery was the main cause. Southern leaders spoke of states\' rights, mostly the right to keep slavery.', es: 'La esclavitud fue la causa principal. Los líderes del Sur hablaban de derechos estatales, sobre todo el de tener esclavos.', fa: 'بردگی علت اصلی بود. رهبران جنوب از حقوق ایالت‌ها گپ می‌زدند، بیشتر حق نگه داشتن برده.' } },
      { q: { en: 'What happened after Lincoln won the election of 1860?', es: '¿Qué pasó después de que Lincoln ganó la elección de 1860?', fa: 'بعد از برنده شدن لینکن در انتخابات ۱۸۶۰ چه شد؟' },
        choices: [
          { en: 'Southern states began to leave the Union', es: 'Los estados del Sur empezaron a dejar la Unión', fa: 'ایالت‌های جنوبی از اتحادیه جدا شدن را شروع کردند' },
          { en: 'Slavery ended in every state at once', es: 'La esclavitud terminó en todos los estados de una vez', fa: 'بردگی یکباره در همهٔ ایالت‌ها تمام شد' },
          { en: 'Virginia chose Lincoln as its new governor', es: 'Virginia eligió a Lincoln como su nuevo gobernador', fa: 'ویرجینیا لینکن را والی نو خود انتخاب کرد' },
          { en: 'Britain sent its army to help the South', es: 'Gran Bretaña mandó su ejército a ayudar al Sur', fa: 'بریتانیا اردویش را برای کمک به جنوب فرستاد' }],
        answer: 0,
        why: { en: 'Eleven Southern states seceded and formed the Confederacy. Virginia left in April 1861.', es: 'Once estados del Sur se separaron y formaron la Confederación. Virginia salió en abril de 1861.', fa: 'یازده ایالت جنوبی جدا شدند و کنفدراسی را ساختند. ویرجینیا در اپریل ۱۸۶۱ جدا شد.' } },
      { q: { en: 'Which city became the capital of the Confederacy?', es: '¿Qué ciudad se volvió la capital de la Confederación?', fa: 'کدام شهر پایتخت کنفدراسی شد؟' },
        choices: [
          { en: 'Richmond, Virginia', es: 'Richmond, Virginia', fa: 'ریچموند، ویرجینیا' },
          { en: 'Washington, D.C.', es: 'Washington, D.C.', fa: 'واشنگتن دی‌سی' },
          { en: 'Hampton, Virginia', es: 'Hampton, Virginia', fa: 'همپتن، ویرجینیا' },
          { en: 'Boston, Massachusetts', es: 'Boston, Massachusetts', fa: 'بوستن، ماساچوست' }],
        answer: 0,
        why: { en: 'Richmond was the Confederate capital. Jefferson Davis, the Confederate president, led from there.', es: 'Richmond fue la capital confederada. Jefferson Davis, el presidente confederado, gobernaba desde allí.', fa: 'ریچموند پایتخت کنفدراسی بود. جفرسن دیویس، رئیس جمهور کنفدراسی، از آنجا رهبری می‌کرد.' } },
      { q: { en: 'The Union stopped Lee at Antietam in 1862. What did Lincoln do next?', es: 'La Unión detuvo a Lee en Antietam en 1862. ¿Qué hizo Lincoln después?', fa: 'اتحادیه در ۱۸۶۲ لی را در انتیتم متوقف کرد. لینکن بعد چه کرد؟' },
        choices: [
          { en: 'He announced the Emancipation Proclamation', es: 'Anunció la Proclamación de Emancipación', fa: 'اعلامیهٔ آزادی بردگان را اعلام کرد' },
          { en: 'He let the Southern states go in peace', es: 'Dejó ir en paz a los estados del Sur', fa: 'گذاشت ایالت‌های جنوبی به آرامی بروند' },
          { en: 'He moved the capital to New York City', es: 'Mudó la capital a la ciudad de Nueva York', fa: 'پایتخت را به شهر نیویارک برد' },
          { en: 'He sent every soldier home for the long winter', es: 'Mandó a todos los soldados a casa por el largo invierno', fa: 'همهٔ سربازها را برای زمستان دراز به خانه فرستاد' }],
        answer: 0,
        why: { en: 'Days after Antietam, Lincoln announced it. It took effect on January 1, 1863.', es: 'Días después de Antietam, Lincoln la anunció. Entró en vigor el 1 de enero de 1863.', fa: 'چند روز بعد از انتیتم، لینکن آن را اعلام کرد. از اول جنوری ۱۸۶۳ اجرا شد.' } },
      { q: { en: 'What did the Emancipation Proclamation do?', es: '¿Qué hizo la Proclamación de Emancipación?', fa: 'اعلامیهٔ آزادی بردگان چه کرد؟' },
        choices: [
          { en: 'Freed enslaved people in the rebel states', es: 'Liberó a los esclavizados en los estados rebeldes', fa: 'برده‌ها را در ایالت‌های شورشی آزاد کرد' },
          { en: 'Ended the war on that same day', es: 'Terminó la guerra ese mismo día', fa: 'جنگ را در همان روز تمام کرد' },
          { en: 'Gave every state the right to keep slavery', es: 'Dio a cada estado el derecho a tener esclavos', fa: 'به هر ایالت حق نگه داشتن برده را داد' },
          { en: 'Made Robert E. Lee a Union general', es: 'Hizo a Robert E. Lee general de la Unión', fa: 'رابرت ای. لی را جنرال اتحادیه ساخت' }],
        answer: 0,
        why: { en: 'It freed people in areas in rebellion, let Black men join the Union army, and made ending slavery a war aim.', es: 'Liberó a la gente en zonas rebeldes, dejó a hombres negros entrar al ejército y volvió el fin de la esclavitud una meta.', fa: 'مردم را در مناطق شورشی آزاد کرد، به مردان سیاه‌پوست اجازهٔ اردو داد و پایان بردگی را هدف جنگ ساخت.' } },
      { q: { en: 'Why were Gettysburg and Vicksburg so important in July 1863?', es: '¿Por qué fueron tan importantes Gettysburg y Vicksburg en julio de 1863?', fa: 'چرا گتیزبرگ و ویکسبرگ در جولای ۱۸۶۳ این‌قدر مهم بودند؟' },
        choices: [
          { en: 'They turned the war toward the Union', es: 'Inclinaron la guerra hacia la Unión', fa: 'جنگ را به سود اتحادیه چرخاندند' },
          { en: 'They were the first battles of the war', es: 'Fueron las primeras batallas de la guerra', fa: 'اولین جنگ‌های این جنگ بودند' },
          { en: 'They ended slavery in all of the states', es: 'Acabaron con la esclavitud en todos los estados', fa: 'بردگی را در همهٔ ایالت‌ها تمام کردند' },
          { en: 'They made Richmond the Union capital', es: 'Hicieron de Richmond la capital de la Unión', fa: 'ریچموند را پایتخت اتحادیه ساختند' }],
        answer: 0,
        why: { en: 'Lee lost at Gettysburg. Grant took Vicksburg, so the Union controlled the Mississippi River.', es: 'Lee perdió en Gettysburg. Grant tomó Vicksburg, y la Unión controló el río Misisipi.', fa: 'لی در گتیزبرگ شکست خورد. گرانت ویکسبرگ را گرفت و اتحادیه دریای میسیسیپی را در دست گرفت.' } },
      { q: { en: 'About how many Black soldiers served in the Union army?', es: '¿Más o menos cuántos soldados negros sirvieron en el ejército de la Unión?', fa: 'تقریباً چند سرباز سیاه‌پوست در اردوی اتحادیه خدمت کردند؟' },
        choices: [
          { en: 'About 180,000', es: 'Unos 180,000', fa: 'حدود ۱۸۰٬۰۰۰' },
          { en: 'About 1,800', es: 'Unos 1,800', fa: 'حدود ۱٬۸۰۰' },
          { en: 'About 18,000', es: 'Unos 18,000', fa: 'حدود ۱۸٬۰۰۰' },
          { en: 'About 1.8 million', es: 'Unos 1.8 millones', fa: 'حدود ۱.۸ میلیون' }],
        answer: 0,
        why: { en: 'After the Emancipation Proclamation, about 180,000 Black soldiers fought for the Union and for freedom.', es: 'Después de la Proclamación, unos 180,000 soldados negros lucharon por la Unión y la libertad.', fa: 'بعد از اعلامیهٔ آزادی، حدود ۱۸۰٬۰۰۰ سرباز سیاه‌پوست برای اتحادیه و آزادی جنگیدند.' } },
      { q: { en: 'Where did Lee surrender to Grant in April 1865?', es: '¿Dónde se rindió Lee ante Grant en abril de 1865?', fa: 'لی در اپریل ۱۸۶۵ در کجا به گرانت تسلیم شد؟' },
        choices: [
          { en: 'Appomattox Court House, Virginia', es: 'Appomattox Court House, en Virginia', fa: 'اپوماتکس کورت هاوس، ویرجینیا' },
          { en: 'Fort Sumter, Charleston, South Carolina', es: 'Fuerte Sumter, Charleston, Carolina del Sur', fa: 'قلعهٔ سامتر، چارلستن، کارولینای جنوبی' },
          { en: 'Vicksburg, on the Mississippi River', es: 'Vicksburg, junto al río Misisipi', fa: 'ویکسبرگ، کنار دریای میسیسیپی' },
          { en: 'Gettysburg, Pennsylvania', es: 'Gettysburg, Pensilvania', fa: 'گتیزبرگ، پنسلوانیا' }],
        answer: 0,
        why: { en: 'Lee surrendered at Appomattox Court House, Virginia. The war was almost over.', es: 'Lee se rindió en Appomattox Court House, Virginia. La guerra casi había terminado.', fa: 'لی در اپوماتکس کورت هاوس در ویرجینیا تسلیم شد. جنگ تقریباً تمام شده بود.' } }
    ]
  },

  learned: [
    { en: 'Slavery was the main cause of the Civil War. Eleven Southern states [[secede|seceded]] after Lincoln won in 1860.', es: 'La esclavitud fue la causa principal de la Guerra Civil. Once estados del Sur se [[secede|separaron]] tras la victoria de Lincoln en 1860.', fa: 'بردگی علت اصلی جنگ داخلی بود. بعد از برنده شدن لینکن در ۱۸۶۰، یازده ایالت جنوبی [[secede|جدا شدند]].' },
    { en: 'Thousands of [[enslaved|enslaved]] people escaped to Fort Monroe. They were called [[contraband|contraband]], and found freedom there.', es: 'Miles de personas [[enslaved|esclavizadas]] huyeron al Fuerte Monroe. Los llamaron [[contraband|contrabando]] y allí encontraron la libertad.', fa: 'هزاران نفر از مردمان [[enslaved|برده]] به قلعهٔ مونرو فرار کردند. آن‌ها را [[contraband|غنیمت جنگ]] نامیدند و آنجا آزادی یافتند.' },
    { en: 'The [[emancipation proclamation|Emancipation Proclamation]] made ending slavery a war aim. Lee [[surrender|surrendered]] to Grant in 1865.', es: 'La [[emancipation proclamation|Proclamación de Emancipación]] hizo del fin de la esclavitud una meta de la guerra. Lee se [[surrender|rindió]] ante Grant en 1865.', fa: '[[emancipation proclamation|اعلامیهٔ آزادی بردگان]] پایان بردگی را هدف جنگ ساخت. لی در ۱۸۶۵ به گرانت [[surrender|تسلیم شد]].' }
  ],
  reflect: {
    q: { en: 'Many people risked everything to reach Fort Monroe. What does freedom mean to you?', es: 'Muchas personas lo arriesgaron todo para llegar al Fuerte Monroe. ¿Qué significa la libertad para ti?', fa: 'بسیاری از مردم همه چیز را به خطر انداختند تا به قلعهٔ مونرو برسند. آزادی برای تو چه معنا دارد؟' },
    starter: { en: 'To me, freedom means', es: 'Para mí, la libertad significa', fa: 'برای من، آزادی یعنی' }
  }
};
