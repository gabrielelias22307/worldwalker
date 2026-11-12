/* TRAILWALKER · Episode 5.3 · After the Civil War: Abolition and Reconstruction (VUS)
   Richmond, Virginia, in 1868, three years after the fire of April 1865.
   North-west: Capitol Square, with the State Capitol (D) on its paved square (l), where Black and white delegates
   meet in the Constitutional Convention of 1867-68. North-east: Broad Street, with a church (R over h), a school for
   freed children (Q over h), a family home and the Freedmen's Bureau office (Q over h). Row 10: Main Street.
   South-west: the burned district, with rubble (r), broken walls (W) and one rebuilt shop. South-east: the market
   stalls (m). Row 16: the railroad along the river. Rows 18-21: the James River, with a wooden dock (k). */
window.EPISODE = {
  id: '5.3',
  realm: 5,
  sol: 'VUS',
  title: { en: 'Abolition and Reconstruction', es: 'Abolición y Reconstrucción', fa: 'لغو برده‌داری و بازسازی' },
  place: { en: 'Richmond, 1868', es: 'Richmond, 1868', fa: 'ریچموند، ۱۸۶۸' },
  intro: [
    { en: 'The Grump blurred the [[reconstruction|Reconstruction]] page. People are forgetting rights that were won and lost.',
      es: 'El Gruñón borró la página de la [[reconstruction|Reconstrucción]]. La gente olvida derechos que se ganaron y se perdieron.',
      fa: 'غرغرو صفحهٔ [[reconstruction|بازسازی]] را تار کرد. مردم حقوقی را که به دست آمد و از دست رفت، فراموش می‌کنند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  scenes: {
    at: [-77.43, 37.54],
    year: 1868,
    start: [
      { en: 'In April 1865, General Lee surrendered at Appomattox, Virginia. The Civil War ended.',
        es: 'En abril de 1865, el general Lee se rindió en Appomattox, Virginia. Terminó la Guerra Civil.',
        fa: 'در اپریل ۱۸۶۵، جنرال لی در اپوماتکس، ویرجینیا تسلیم شد. جنگ داخلی تمام شد.' },
      { en: 'About four million enslaved people were now free.',
        es: 'Unos cuatro millones de personas esclavizadas ya eran libres.',
        fa: 'حدود چهار میلیون انسان برده حالا آزاد بودند.' },
      { en: 'Rebuilding the nation after the war is called Reconstruction.',
        es: 'La reconstrucción del país después de la guerra se llama la Reconstrucción.',
        fa: 'دوباره ساختن کشور بعد از جنگ را «بازسازی» می‌گویند.' }
    ],
    page: { en: 'Virginia rejoined the Union in January 1870.',
      es: 'Virginia volvió a la Unión en enero de 1870.',
      fa: 'ویرجینیا در جنوری ۱۸۷۰ دوباره به اتحادیه پیوست.' },
    guess: {
      q: { en: 'Slavery ended in 1865. Did equal rights come right away?', es: 'La esclavitud terminó en 1865. ¿Llegó la igualdad de derechos enseguida?', fa: 'برده‌داری در ۱۸۶۵ تمام شد. آیا حقوق برابر فوراً آمد؟' },
      choices: [
        { t: { en: 'No, the struggle went on', es: 'No, la lucha siguió', fa: 'نه، مبارزه ادامه یافت' }, ok: true },
        { t: { en: 'Yes, all at once', es: 'Sí, todo de una vez', fa: 'بله، همه یک‌باره' } }
      ],
      why: { en: 'Slavery ended, but unfair laws and violence took many rights away. The struggle lasted many years.', es: 'La esclavitud terminó, pero leyes injustas y la violencia quitaron muchos derechos. La lucha duró muchos años.', fa: 'برده‌داری تمام شد، اما قانون‌های ناعادلانه و خشونت بسیاری از حقوق را گرفت. مبارزه سال‌ها دوام کرد.' }
    },
    next: {
      q: { en: 'Next: Ellis Island, 1907. Why did millions of people come to America?', es: 'Ahora: la isla Ellis, 1907. ¿Por qué millones de personas vinieron a Estados Unidos?', fa: 'بعدی: جزیرهٔ الیس، ۱۹۰۷. چرا میلیون‌ها نفر به امریکا آمدند؟' },
      choices: [
        { t: { en: 'Work, freedom and safety', es: 'Trabajo, libertad y seguridad', fa: 'کار، آزادی و امنیت' }, ok: true },
        { t: { en: 'Only a short visit', es: 'Solo una visita corta', fa: 'فقط یک دیدار کوتاه' } }
      ],
      why: { en: 'Many came for jobs and a better life. Others fled hunger, war or unfair treatment.', es: 'Muchos vinieron por trabajo y una vida mejor. Otros huían del hambre, la guerra o el maltrato.', fa: 'بسیاری برای کار و زندگی بهتر آمدند. دیگران از گرسنگی، جنگ یا ظلم فرار کردند.' }
    }
  },

  /* houses: who lives behind each door (church, school, a family home, the Freedmen's Bureau office) */
  houses: [
    { at: [18, 3], name: { en: 'Deacon Harris', es: 'Diácono Harris', fa: 'شماس هریس' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#2a2a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'Welcome to our church. It is the heart of our community.', es: 'Bienvenido a nuestra iglesia. Es el corazón de nuestra comunidad.', fa: 'به کلیسای ما خوش آمدی. این‌جا قلب جامعهٔ ماست.' },
        { en: 'Here we pray, we learn, and we plan how to vote.', es: 'Aquí rezamos, aprendemos y planeamos cómo votar.', fa: 'این‌جا دعا می‌کنیم، درس می‌خوانیم و برای رأی دادن پلان می‌سازیم.' },
        { en: 'We read letters aloud from families looking for loved ones sold away.', es: 'Leemos en voz alta cartas de familias que buscan a seres queridos vendidos.', fa: 'نامه‌های خانواده‌هایی را بلند می‌خوانیم که عزیزان فروخته‌شدهٔ خود را می‌پالند.' }
      ] },
    { at: [24, 3], name: { en: 'Miss Lucy', es: 'Señorita Lucy', fa: 'خانم لوسی' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a4a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Before the war, Virginia law kept enslaved people from learning to read.', es: 'Antes de la guerra, la ley de Virginia no dejaba leer a los esclavizados.', fa: 'پیش از جنگ، قانون ویرجینیا نمی‌گذاشت برده‌ها خواندن یاد بگیرند.' },
        { en: 'Now this room is full. Children come by day, grown-ups at night.', es: 'Ahora este salón está lleno. Los niños vienen de día y los adultos de noche.', fa: 'حالا این صنف پُر است. اطفال روزها می‌آیند، کلان‌سالان شب‌ها.' }
      ] },
    { at: [19, 7], name: { en: 'Mrs. Rose', es: 'Señora Rose', fa: 'خانم روز' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#2f8f8f', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'President Johnson let Southern states return fast, with few rules.', es: 'El presidente Johnson dejó volver rápido a los estados del Sur, con pocas reglas.', fa: 'رئیس جمهور جانسن گذاشت ایالت‌های جنوبی زود و با قاعده‌های کم برگردند.' },
        { en: 'Radical Republicans in Congress wanted to protect freed people\'s rights.', es: 'Los republicanos radicales del Congreso querían proteger los derechos de los libertos.', fa: 'جمهوری‌خواهان تندرو در کانگرس می‌خواستند از حقوق آزادشدگان حمایت کنند.' },
        { en: 'This year the House [[impeach|impeached]] Johnson. The Senate kept him, by one vote.', es: 'Este año la Cámara hizo [[impeach|juicio político]] a Johnson. El Senado lo dejó en su puesto por un voto.', fa: 'امسال مجلس نمایندگان جانسن را [[impeach|استیضاح]] کرد. سنا با یک رأی او را نگه داشت.' }
      ] },
    { at: [26, 7], name: { en: 'Mr. Reed', es: 'Señor Reed', fa: 'آقای رید' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#2a3a6a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'This is the [[bureau|Freedmen\'s Bureau]]. Congress made it in 1865.', es: 'Esta es la [[bureau|Oficina de Libertos]]. El Congreso la creó en 1865.', fa: 'این‌جا [[bureau|ادارهٔ آزادشدگان]] است. کانگرس آن را در ۱۸۶۵ ساخت.' },
        { en: 'We give out food, help open schools, and check work contracts.', es: 'Damos comida, ayudamos a abrir escuelas y revisamos contratos de trabajo.', fa: 'ما غذا می‌دهیم، به باز کردن مکتب‌ها کمک می‌کنیم و قراردادهای کار را می‌بینیم.' },
        { en: 'Hampton Institute opened this year near the coast, to train teachers.', es: 'Este año abrió el Instituto Hampton, cerca de la costa, para formar maestros.', fa: 'امسال انستیتوت همپتن نزدیک ساحل باز شد تا معلم تربیه کند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. See the note at the top. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..T....,...T..:...,.....,.....T',
    'T.T..DDDDDD..T..RRRRR..QQQ.....T',
    'T....DDDDDD.....hhdhh..hdh..,..T',
    'T.T..DDDDDD..T.lllllllllllllll.T',
    'T....llllll....l..........,..l.T',
    'T.Tx.llllll..T.l..RRR...QQQQ.l.T',
    'T....lllllll...l..hdh.x.hhdh.l.T',
    'T.T......l..T..lllllllllllllll.T',
    'T........l.....l..,......,.....T',
    'TllllllllllllllllllllllllllllllT',
    'T.rW.....l...r..l..mmm..mmm....T',
    'T..r.....l.RRR..l..............T',
    'T.W......l.hhh..l..mmm..mmm....T',
    'Tx..r..W.l....r.l..............T',
    'T..r..rr.l...r..lllllllllllll..T',
    'T------------------------------T',
    'Tss.ss.sss.ss..s.xsss.ss.ssss..T',
    'T~~~~~~~~~~~~~~~~~~kkk~~~~~~~~~T',
    'T~~~~~~~~~~~~~~~~~~kkk~~~~~~~~~T',
    'T~~~~~~=====~~~~~~~~~~~~~====~~T',
    '================================'
  ],
  start: [9, 13],

  finds: [
    { clueAt: [11, 5], at: [11, 1], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps north, toward the trees by the Capitol.', es: 'Desde esta nota, camina 4 pasos al norte, hacia los árboles junto al Capitolio.', fa: 'از این یادداشت، ۴ قدم به شمال برو، به طرف درختان کنار کاپیتول.' },
      text: { en: 'Virginia rejoined the Union in January 1870. Here is an old coin from that year.', es: 'Virginia volvió a la Unión en enero de 1870. Aquí hay una moneda antigua de ese año.', fa: 'ویرجینیا در جنوری ۱۸۷۰ دوباره به اتحادیه پیوست. این‌جا یک سکهٔ کهنه از همان سال است.' } },
    { clueAt: [27, 11], at: [30, 14], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps east, then 3 steps south.', es: 'Desde esta nota, camina 3 pasos al este y luego 3 pasos al sur.', fa: 'از این یادداشت، ۳ قدم به شرق برو، بعد ۳ قدم به جنوب.' },
      text: { en: 'Freed people wrote letters and ads to find lost family. Here is a quill pen feather.', es: 'Los libertos escribían cartas y anuncios para hallar a su familia perdida. Aquí hay una pluma de escribir.', fa: 'آزادشدگان برای پیدا کردن خانوادهٔ گم‌شده نامه و اعلان نوشتند. این‌جا یک پَر قلم است.' } }
  ],

  words: {
    reconstruction: { en: 'the years after the Civil War (1865 to 1877), when the nation was rebuilt', es: 'los años después de la Guerra Civil (1865 a 1877), cuando se reconstruyó el país', fa: 'سال‌های بعد از جنگ داخلی (۱۸۶۵ تا ۱۸۷۷) که کشور دوباره ساخته شد' },
    amendment: { en: 'a change or addition to the Constitution', es: 'un cambio o una parte nueva de la Constitución', fa: 'یک تغییر یا بخش تازه در قانون اساسی' },
    constitution: { en: 'the written plan of a government and its highest laws', es: 'el plan escrito de un gobierno y sus leyes más altas', fa: 'نقشهٔ نوشته‌شدهٔ حکومت و بالاترین قانون‌های آن' },
    delegate: { en: 'a person chosen to speak and vote for others at a meeting', es: 'una persona elegida para hablar y votar por otros en una reunión', fa: 'کسی که انتخاب می‌شود تا در یک جلسه از طرف دیگران گپ بزند و رأی دهد' },
    '14th amendment': { en: 'the 1868 change to the Constitution: people born here are citizens, with equal protection of the laws', es: 'el cambio de 1868 a la Constitución: quienes nacen aquí son ciudadanos y la ley los protege por igual', fa: 'تعدیل ۱۸۶۸ قانون اساسی: کسانی که این‌جا به دنیا می‌آیند شهروند هستند و قانون از همه برابر حمایت می‌کند' },
    bureau: { en: 'the Freedmen\'s Bureau: a U.S. office (1865 to 1872) that helped people freed from slavery', es: 'la Oficina de Libertos: una oficina de EE. UU. (1865 a 1872) que ayudó a las personas liberadas de la esclavitud', fa: 'ادارهٔ آزادشدگان: یک ادارهٔ امریکا (۱۸۶۵ تا ۱۸۷۲) که به آزادشدگان از برده‌داری کمک کرد' },
    sharecropping: { en: 'farming someone else\'s land and paying them with part of the crop', es: 'cultivar la tierra de otra persona y pagarle con parte de la cosecha', fa: 'بزگری: کشت زمین کس دیگر و پرداخت به او با یک حصهٔ حاصل' },
    'black codes': { en: 'laws passed in the South after the war to control freed Black people', es: 'leyes que el Sur aprobó después de la guerra para controlar a los libertos negros', fa: 'قانون‌هایی که جنوب بعد از جنگ برای کنترول سیاه‌پوستان آزادشده ساخت' },
    'ku klux klan': { en: 'a hate group that used threats and violence against Black Americans and their allies', es: 'un grupo de odio que usó amenazas y violencia contra los afroamericanos y sus aliados', fa: 'یک گروه نفرت که با تهدید و خشونت بر سیاه‌پوستان امریکا و همراهان‌شان حمله کرد' },
    'jim crow': { en: 'unfair laws, after Reconstruction, that kept Black and white people apart and took away rights', es: 'leyes injustas, después de la Reconstrucción, que separaban a negros y blancos y quitaban derechos', fa: 'قانون‌های ناعادلانه بعد از بازسازی که سیاه‌پوستان و سفیدپوستان را جدا نگه داشت و حقوق را گرفت' },
    impeach: { en: 'to charge a president or official with wrongdoing; the Senate then decides to remove or not', es: 'acusar a un presidente o funcionario de una falta; luego el Senado decide si lo destituye', fa: 'متهم کردن رئیس جمهور یا مأمور به خطا؛ بعد سنا فیصله می‌کند که برکنار شود یا نه' }
  },

  npcs: [
    {
      x: 12, y: 14,
      name: { en: 'Isaac', es: 'Isaac', fa: 'اسحاق' },
      role: { en: 'Carpenter, Union Army veteran', es: 'Carpintero, veterano del Ejército de la Unión', fa: 'نجار، سرباز سابق اردوی اتحادیه' },
      look: { skin: 5, hair: '#120c08', shirt: '#2a3a6a', pants: '#3a2a1a', hat: '#2a2a3a' },
      lines: [
        { en: 'I served in the Union Army. Now I help rebuild Richmond.', es: 'Serví en el Ejército de la Unión. Ahora ayudo a reconstruir Richmond.', fa: 'من در اردوی اتحادیه خدمت کردم. حالا در دوباره ساختن ریچموند کمک می‌کنم.' },
        { en: 'Fires burned much of downtown in April 1865, as the Confederates left.', es: 'En abril de 1865, cuando se fueron los confederados, el fuego quemó gran parte del centro.', fa: 'در اپریل ۱۸۶۵، وقتی کنفدرالی‌ها رفتند، آتش بخش بزرگ مرکز شهر را سوزاند.' },
        { en: 'On April 9, 1865, General Lee surrendered at Appomattox. The war was over.', es: 'El 9 de abril de 1865, el general Lee se rindió en Appomattox. La guerra terminó.', fa: 'در ۹ اپریل ۱۸۶۵، جنرال لی در اپوماتکس تسلیم شد. جنگ تمام شد.' },
        { en: 'Five days later, President Lincoln was shot. Many people grieved for him.', es: 'Cinco días después, le dispararon al presidente Lincoln. Mucha gente lloró por él.', fa: 'پنج روز بعد، رئیس جمهور لینکن را تیر زدند. مردم زیادی برایش غمگین شدند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'How did the Civil War end in 1865?', es: '¿Cómo terminó la Guerra Civil en 1865?', fa: 'جنگ داخلی در ۱۸۶۵ چطور تمام شد؟' },
        choices: [
          { ok: true, t: { en: 'Lee surrendered at Appomattox', es: 'Lee se rindió en Appomattox', fa: 'لی در اپوماتکس تسلیم شد' },
            why: { en: 'Yes. General Lee surrendered at Appomattox, Virginia, on April 9, 1865.', es: 'Sí. El general Lee se rindió en Appomattox, Virginia, el 9 de abril de 1865.', fa: 'بله. جنرال لی در ۹ اپریل ۱۸۶۵ در اپوماتکس، ویرجینیا تسلیم شد.' } },
          { t: { en: 'The South won at Gettysburg', es: 'El Sur ganó en Gettysburg', fa: 'جنوب در گتیزبرگ برد' },
            why: { en: 'The South lost at Gettysburg in 1863. The war ended with Lee\'s surrender.', es: 'El Sur perdió en Gettysburg en 1863. La guerra terminó con la rendición de Lee.', fa: 'جنوب در ۱۸۶۳ در گتیزبرگ باخت. جنگ با تسلیم شدن لی تمام شد.' } },
          { t: { en: 'Britain stopped the fighting', es: 'Gran Bretaña paró la pelea', fa: 'بریتانیا جنگ را بند کرد' },
            why: { en: 'Britain did not end this war. Lee surrendered to General Grant at Appomattox.', es: 'Gran Bretaña no terminó esta guerra. Lee se rindió ante el general Grant en Appomattox.', fa: 'بریتانیا این جنگ را تمام نکرد. لی در اپوماتکس به جنرال گرانت تسلیم شد.' } }
        ]
      }
    },
    {
      x: 8, y: 7,
      name: { en: 'Clara', es: 'Clara', fa: 'کلارا' },
      role: { en: 'Washerwoman', es: 'Lavandera', fa: 'کالاشوی' },
      look: { skin: 4, hair: '#120c08', shirt: '#c0392b', pants: '#3a2a3a', style: 'bun' },
      lines: [
        { en: 'I watch the convention from the gallery of the Capitol.', es: 'Miro la convención desde la galería del Capitolio.', fa: 'من جلسهٔ بزرگ را از بالاخانهٔ کاپیتول تماشا می‌کنم.' },
        { en: 'Black and white [[delegate|delegates]] are writing a new [[constitution|constitution]] for Virginia.', es: '[[delegate|Delegados]] negros y blancos escriben una nueva [[constitution|constitución]] para Virginia.', fa: '[[delegate|نمایندگان]] سیاه‌پوست و سفیدپوست یک [[constitution|قانون اساسی]] نو برای ویرجینیا می‌نویسند.' },
        { en: 'About two dozen delegates are Black men. Some were enslaved before the war.', es: 'Unos dos docenas de delegados son hombres negros. Algunos fueron esclavizados antes de la guerra.', fa: 'حدود بیست و چند نماینده مردان سیاه‌پوست هستند. بعضی پیش از جنگ برده بودند.' },
        { en: 'The [[14th amendment|14th Amendment]] says people born here are citizens.', es: 'La [[14th amendment|Enmienda 14]] dice que quienes nacen aquí son ciudadanos.', fa: '[[14th amendment|تعدیل چهاردهم]] می‌گوید کسانی که این‌جا به دنیا می‌آیند، شهروند هستند.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Clara reads the 14th Amendment, a primary source. What does it promise?', es: 'Clara lee la Enmienda 14, una fuente primaria. ¿Qué promete?', fa: 'کلارا تعدیل چهاردهم را می‌خواند، یک منبع اصلی. چه وعده می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Citizenship and equal protection', es: 'Ciudadanía y protección igual', fa: 'شهروندی و حمایت برابر' },
            why: { en: 'Yes. People born here are citizens, and states must protect everyone equally under the law.', es: 'Sí. Quienes nacen aquí son ciudadanos, y los estados deben proteger a todos por igual ante la ley.', fa: 'بله. کسانی که این‌جا به دنیا می‌آیند شهروند هستند و ایالت‌ها باید از همه برابر حمایت کنند.' } },
          { t: { en: 'Free farmland for every family', es: 'Tierra gratis para cada familia', fa: 'زمین مفت برای هر خانواده' },
            why: { en: 'No amendment gave out land. Most freed families never got land of their own.', es: 'Ninguna enmienda repartió tierras. La mayoría de las familias libertas nunca tuvo tierra propia.', fa: 'هیچ تعدیلی زمین نداد. بیشتر خانواده‌های آزادشده هرگز زمین خود را نگرفتند.' } },
          { t: { en: 'The vote for women everywhere', es: 'El voto para las mujeres en todas partes', fa: 'حق رأی زنان در همه جا' },
            why: { en: 'Women won the vote in 1920, with the 19th Amendment. That came much later.', es: 'Las mujeres ganaron el voto en 1920, con la Enmienda 19. Eso llegó mucho después.', fa: 'زنان در ۱۹۲۰ با تعدیل نزدهم حق رأی گرفتند. آن خیلی بعدتر آمد.' } }
        ]
      }
    },
    {
      x: 28, y: 8,
      name: { en: 'Moses', es: 'Moisés', fa: 'موسی' },
      role: { en: 'Farmer', es: 'Agricultor', fa: 'دهقان' },
      look: { skin: 5, hair: '#3a3a3a', shirt: '#8a7a5a', pants: '#3a3a5a', hat: '#5a3a22' },
      lines: [
        { en: 'We hoped for land of our own. Most freed families got none.', es: 'Esperábamos tener tierra propia. La mayoría de las familias libertas no recibió nada.', fa: 'امید داشتیم زمین خود را داشته باشیم. بیشتر خانواده‌های آزادشده هیچ نگرفتند.' },
        { en: 'So I [[sharecropping|sharecrop]]. I farm a landowner\'s field and pay him with crops.', es: 'Por eso trabajo en [[sharecropping|aparcería]]. Cultivo el campo de un dueño y le pago con cosecha.', fa: 'برای همین [[sharecropping|بزگری]] می‌کنم. زمین یک مالک را می‌کارم و با حاصل به او می‌پردازم.' },
        { en: 'After the war, Southern states passed [[black codes|Black Codes]] to control freed people.', es: 'Después de la guerra, los estados del Sur aprobaron [[black codes|Códigos Negros]] para controlar a los libertos.', fa: 'بعد از جنگ، ایالت‌های جنوبی [[black codes|قانون‌های سیاه]] را برای کنترول آزادشدگان ساختند.' },
        { en: 'In many places, the [[ku klux klan|Ku Klux Klan]] uses violence to stop Black voters.', es: 'En muchos lugares, el [[ku klux klan|Ku Klux Klan]] usa la violencia para frenar a los votantes negros.', fa: 'در بسیاری جاها، [[ku klux klan|کو کلاکس کلان]] با خشونت جلوی رأی‌دهندگان سیاه‌پوست را می‌گیرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What was sharecropping?', es: '¿Qué era la aparcería?', fa: 'بزگری چه بود؟' },
        choices: [
          { ok: true, t: { en: 'Paying rent with part of the crop', es: 'Pagar la renta con parte de la cosecha', fa: 'پرداخت کرایه با یک حصهٔ حاصل' },
            why: { en: 'Yes. Sharecroppers farmed a landowner\'s land and paid with crops. Many stayed in debt.', es: 'Sí. Los aparceros cultivaban la tierra de un dueño y pagaban con cosecha. Muchos seguían endeudados.', fa: 'بله. بزگرها زمین مالک را می‌کاشتند و با حاصل پرداخت می‌کردند. بسیاری قرضدار ماندند.' } },
          { t: { en: 'Selling crops at the city market', es: 'Vender cosechas en el mercado', fa: 'فروش حاصل در بازار شهر' },
            why: { en: 'Anyone could sell at a market. Sharecroppers paid for land with part of the crop.', es: 'Cualquiera podía vender en un mercado. Los aparceros pagaban la tierra con parte de la cosecha.', fa: 'هر کس می‌توانست در بازار بفروشد. بزگرها کرایهٔ زمین را با حصهٔ حاصل می‌دادند.' } },
          { t: { en: 'Owning a big farm with paid workers', es: 'Tener una finca grande con peones pagados', fa: 'داشتن یک فارم بزرگ با کارگران مزدور' },
            why: { en: 'Sharecroppers did not own the land. They farmed someone else\'s field.', es: 'Los aparceros no eran dueños de la tierra. Cultivaban el campo de otra persona.', fa: 'بزگرها مالک زمین نبودند. زمین کس دیگر را می‌کاشتند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 6, text: { en: 'VIRGINIA STATE CAPITOL · 1868 · Black and white delegates meet here to write a new state constitution.', es: 'CAPITOLIO DE VIRGINIA · 1868 · Delegados negros y blancos se reúnen aquí para escribir una nueva constitución.', fa: 'کاپیتول ایالت ویرجینیا · ۱۸۶۸ · نمایندگان سیاه‌پوست و سفیدپوست این‌جا قانون اساسی نو می‌نویسند.' } },
    { x: 1, y: 14, text: { en: 'BURNED DISTRICT · Fires in April 1865 destroyed much of downtown. Richmond is rebuilding.', es: 'DISTRITO QUEMADO · Los incendios de abril de 1865 destruyeron gran parte del centro. Richmond se reconstruye.', fa: 'ناحیهٔ سوخته · آتش اپریل ۱۸۶۵ بخش بزرگ مرکز شهر را ویران کرد. ریچموند دوباره ساخته می‌شود.' } },
    { x: 22, y: 7, text: { en: 'FREEDMEN\'S BUREAU · Food, schools, and help with fair work contracts.', es: 'OFICINA DE LIBERTOS · Comida, escuelas y ayuda con contratos de trabajo justos.', fa: 'ادارهٔ آزادشدگان · غذا، مکتب و کمک برای قراردادهای کار عادلانه.' } },
    { x: 17, y: 17, text: { en: 'JAMES RIVER · Boats and trains bring goods to Richmond\'s market again.', es: 'RÍO JAMES · Barcos y trenes traen otra vez mercancías al mercado de Richmond.', fa: 'دریای جیمز · کشتی‌ها و قطارها دوباره جنس به بازار ریچموند می‌آورند.' } }
  ],

  /* the quest: Martha (gold !) at the market, south-east -> Elijah the newspaper boy by the Capitol, north-west
     -> chase the Grump's Gust: take each blown paper where it belongs on Broad Street (the Bureau, the church, the school)
     -> the gust shows itself, hops, and is caught on the riverbank, south-west -> back to Martha */
  quest: {
    stat: 'hei',
    title: { en: 'Martha\'s Family Papers', es: 'Los papeles de Martha', fa: 'کاغذهای خانوادهٔ مارتا' },
    giver: {
      x: 22, y: 12,
      name: { en: 'Martha', es: 'Martha', fa: 'مارتا' },
      role: { en: 'Seamstress', es: 'Costurera', fa: 'خیاط' },
      look: { skin: 4, hair: '#1a1008', shirt: '#e0a020', pants: '#2a4a3a', style: 'bun' },
      lines: [
        { en: 'The wind blew my family papers out of my hands!', es: '¡El viento me arrancó de las manos los papeles de mi familia!', fa: 'باد کاغذهای خانواده‌ام را از دستم برد!' },
        { en: 'My work contract, a family letter, and my son\'s reading lesson.', es: 'Mi contrato de trabajo, una carta de la familia y la lección de lectura de mi hijo.', fa: 'قرارداد کارم، یک نامهٔ خانوادگی و درس خواندن پسرم.' },
        { en: 'Elijah the newspaper boy saw them fly. He sells papers by the Capitol.', es: 'Elijah, el niño de los periódicos, los vio volar. Vende periódicos junto al Capitolio.', fa: 'الیجا، پسر روزنامه‌فروش، پرواز آن‌ها را دید. او کنار کاپیتول روزنامه می‌فروشد.' }
      ],
      wait: { en: 'Elijah sells newspapers by the Capitol, to the north-west.', es: 'Elijah vende periódicos junto al Capitolio, al noroeste.', fa: 'الیجا کنار کاپیتول، در شمال غرب، روزنامه می‌فروشد.' },
      thanks: { en: 'My papers! Proof of my work, my family and my son\'s learning.', es: '¡Mis papeles! Prueba de mi trabajo, mi familia y lo que aprende mi hijo.', fa: 'کاغذهایم! سند کارم، خانواده‌ام و درس پسرم.' }
    },
    contact: {
      x: 11, y: 8,
      name: { en: 'Elijah', es: 'Elijah', fa: 'الیجا' },
      role: { en: 'Newspaper boy', es: 'Vendedor de periódicos', fa: 'پسر روزنامه‌فروش' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8e0d0', pants: '#3a3a3a', hat: '#5a3a22' },
      lines: [
        { en: 'Newspapers! I saw papers fly east over Broad Street!', es: '¡Periódicos! ¡Vi papeles volar al este sobre la calle Broad!', fa: 'روزنامه! دیدم کاغذها به طرف شرق از بالای سرک براد پرواز کردند!' },
        { en: 'Read each paper. Then take it to the place where it belongs.', es: 'Lee cada papel. Luego llévalo al lugar donde corresponde.', fa: 'هر کاغذ را بخوان. بعد آن را به جایی ببر که مال آن‌جاست.' }
      ]
    },
    action: {
      type: 'chase',
      at: [6, 17],
      hops: [[21, 9], [13, 14]],
      name: { en: 'The Grump\'s Gust', es: 'La Ráfaga del Gruñón', fa: 'تندباد غرغرو' },
      taunt: { en: 'The gust spins: "Papers blow away. Who will remember what they prove?"', es: 'La ráfaga gira: "Los papeles se vuelan. ¿Quién recordará lo que prueban?"', fa: 'تندباد می‌چرخد: «کاغذها پرواز می‌کنند. کی به یاد می‌آورد که چه چیزی را ثابت می‌کنند؟»' },
      clues: [
        { t: { en: 'Paper 1 is a work contract. Take it where they check that contracts are fair.', es: 'El papel 1 es un contrato de trabajo. Llévalo a donde revisan que los contratos sean justos.', fa: 'کاغذ ۱ یک قرارداد کار است. آن را به جایی ببر که عادلانه بودن قرارداد را می‌بینند.' },
          zones: [{ x: 25, y: 8, w: 3, h: 1 }],
          noBy: [
            { x: 17, y: 4, w: 3, h: 1, t: { en: 'This is the church. The Freedmen\'s Bureau checks work contracts.', es: 'Esta es la iglesia. La Oficina de Libertos revisa los contratos de trabajo.', fa: 'این کلیسا است. ادارهٔ آزادشدگان قراردادهای کار را می‌بیند.' } },
            { x: 23, y: 4, w: 3, h: 1, t: { en: 'This is the school. Contracts go to the Freedmen\'s Bureau office.', es: 'Esta es la escuela. Los contratos van a la Oficina de Libertos.', fa: 'این مکتب است. قراردادها به ادارهٔ آزادشدگان می‌روند.' } }
          ],
          found: { en: 'The Bureau checks that work contracts are fair. Here is the paper!', es: 'La Oficina revisa que los contratos sean justos. ¡Aquí está el papel!', fa: 'اداره می‌بیند که قرارداد کار عادلانه باشد. کاغذ این‌جاست!' } },
        { t: { en: 'Paper 2: a mother\'s letter, looking for a son sold away. Take it where letters are read aloud.', es: 'Papel 2: la carta de una madre que busca a un hijo vendido. Llévala a donde leen cartas en voz alta.', fa: 'کاغذ ۲: نامهٔ مادری که پسر فروخته‌شده‌اش را می‌پالد. آن را به جایی ببر که نامه‌ها را بلند می‌خوانند.' },
          zones: [{ x: 17, y: 4, w: 3, h: 1 }],
          noBy: [
            { x: 25, y: 8, w: 3, h: 1, t: { en: 'This is the Bureau office. Families read such letters aloud at church.', es: 'Esta es la Oficina. Las familias leían esas cartas en voz alta en la iglesia.', fa: 'این اداره است. خانواده‌ها چنین نامه‌ها را در کلیسا بلند می‌خواندند.' } },
            { x: 23, y: 4, w: 3, h: 1, t: { en: 'This is the school. Letters like this were read aloud at church.', es: 'Esta es la escuela. Cartas como esta se leían en voz alta en la iglesia.', fa: 'این مکتب است. نامه‌هایی مثل این در کلیسا بلند خوانده می‌شد.' } }
          ],
          found: { en: 'The church reads such letters aloud. Some families found each other this way.', es: 'En la iglesia leen esas cartas en voz alta. Algunas familias se encontraron así.', fa: 'کلیسا چنین نامه‌ها را بلند می‌خواند. بعضی خانواده‌ها همین‌طور یکدیگر را پیدا کردند.' } },
        { t: { en: 'Paper 3 is a reading lesson. Take it where freed children learn to read.', es: 'El papel 3 es una lección de lectura. Llévalo a donde los niños libres aprenden a leer.', fa: 'کاغذ ۳ یک درس خواندن است. آن را به جایی ببر که اطفال آزادشده خواندن یاد می‌گیرند.' },
          zones: [{ x: 23, y: 4, w: 3, h: 1 }],
          noBy: [
            { x: 17, y: 4, w: 3, h: 1, t: { en: 'This is the church. The school is just east, on Broad Street.', es: 'Esta es la iglesia. La escuela está un poco al este, en la calle Broad.', fa: 'این کلیسا است. مکتب کمی به شرق، در سرک براد است.' } },
            { x: 25, y: 8, w: 3, h: 1, t: { en: 'This is the Bureau office. It helps schools, but lessons happen at the school.', es: 'Esta es la Oficina. Ayuda a las escuelas, pero las clases son en la escuela.', fa: 'این اداره است. به مکتب‌ها کمک می‌کند، اما درس در مکتب است.' } }
          ],
          found: { en: 'The school! Freed children and grown-ups filled schools like this one.', es: '¡La escuela! Niños y adultos libres llenaban escuelas como esta.', fa: 'مکتب! اطفال و کلان‌سالان آزادشده مکتب‌هایی مثل این را پُر کردند.' } }
      ],
      win: { en: 'Caught! The gust drops the last paper. Martha\'s family papers are safe.', es: '¡Atrapada! La ráfaga suelta el último papel. Los papeles de Martha están a salvo.', fa: 'گرفتمش! تندباد کاغذ آخر را می‌اندازد. کاغذهای خانوادهٔ مارتا امن است.' },
      item: { icon: '📜', name: { en: 'Martha\'s family papers', es: 'Los papeles de la familia de Martha', fa: 'کاغذهای خانوادهٔ مارتا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 17]],
  smudges: [[26, 14], [10, 5]],

  /* the journal stone: a timeline walked through the city, oldest first */
  challenge: {
    at: [14, 9],
    type: 'route', // in the world; the card version (order) is the fallback
    spots: [[4, 15], [21, 5], [5, 8], [29, 9], [24, 17], [14, 12]],
    stat: 'pla',
    title: { en: 'Walk the years', es: 'Recorre los años', fa: 'سال‌ها را قدم بزن' },
    intro: { en: 'The Grump scrambled the journal\'s years! Walk to the stops in time order, oldest first.',
      es: '¡El Gruñón revolvió los años del diario! Camina a las paradas en orden de tiempo, de la más antigua a la más nueva.',
      fa: 'غرغرو سال‌های روزنامچه را درهم کرد! به ترتیب زمان، از قدیمی‌ترین، به ایستگاه‌ها برو.' },
    items: [
      { icon: '🕊️', t: { en: '1865 · Lee surrenders at Appomattox. The Civil War ends.', es: '1865 · Lee se rinde en Appomattox. Termina la Guerra Civil.', fa: '۱۸۶۵ · لی در اپوماتکس تسلیم می‌شود. جنگ داخلی تمام می‌شود.' } },
      { icon: '⛓️', t: { en: '1865 · The 13th Amendment ends slavery in the United States.', es: '1865 · La Enmienda 13 pone fin a la esclavitud en Estados Unidos.', fa: '۱۸۶۵ · تعدیل سیزدهم برده‌داری را در امریکا ختم می‌کند.' } },
      { icon: '⚖️', t: { en: '1868 · The 14th Amendment: citizenship and equal protection of the laws', es: '1868 · La Enmienda 14: ciudadanía e igual protección de las leyes', fa: '۱۸۶۸ · تعدیل چهاردهم: شهروندی و حمایت برابر قانون' } },
      { icon: '🗳️', t: { en: '1870 · The 15th Amendment: race cannot stop a man from voting', es: '1870 · La Enmienda 15: la raza no puede impedir que un hombre vote', fa: '۱۸۷۰ · تعدیل پانزدهم: نژاد نمی‌تواند مرد را از رأی دادن باز دارد' } },
      { icon: '🚂', t: { en: '1877 · A deal ends Reconstruction. Federal troops leave the South.', es: '1877 · Un acuerdo termina la Reconstrucción. Las tropas federales salen del Sur.', fa: '۱۸۷۷ · یک معامله بازسازی را ختم می‌کند. عسکرهای فدرال جنوب را ترک می‌کنند.' } },
      { icon: '🚫', t: { en: 'After 1877 · Jim Crow laws, poll taxes and literacy tests take rights away', es: 'Después de 1877 · Leyes de Jim Crow, impuestos al voto y pruebas de lectura quitan derechos', fa: 'بعد از ۱۸۷۷ · قانون‌های جیم کرو، مالیهٔ رأی و امتحان سواد حقوق را می‌گیرند' } }
    ],
    why: { en: 'Go by the years: the war ends, then the 13th, 14th and 15th Amendments. Troops leave in 1877. Jim Crow follows.',
      es: 'Sigue los años: termina la guerra, luego las Enmiendas 13, 14 y 15. Las tropas se van en 1877. Después viene Jim Crow.',
      fa: 'به ترتیب سال‌ها: جنگ تمام می‌شود، بعد تعدیل ۱۳، ۱۴ و ۱۵. عسکرها در ۱۸۷۷ می‌روند. بعد جیم کرو می‌آید.' },
    success: { en: 'The years are in order. Rights were won, then taken away. The struggle went on.', es: 'Los años están en orden. Se ganaron derechos y luego se quitaron. La lucha siguió.', fa: 'سال‌ها به ترتیب شد. حقوق به دست آمد، بعد گرفته شد. مبارزه ادامه یافت.' }
  },

  boss: {
    at: [5, 13],
    stat: 'hei',
    need: 3,
    name: { en: 'The Grump of Broken Promises', es: 'El Gruñón de las Promesas Rotas', fa: 'غرغروی وعده‌های شکسته' },
    appear: { en: 'The Grump hides in the old smoke of the burned district.', es: 'El Gruñón se esconde en el humo viejo del distrito quemado.', fa: 'غرغرو در دود کهنهٔ ناحیهٔ سوخته پنهان است.' },
    taunt: { en: 'Rights were promised, then taken away. Why remember any of it?', es: 'Prometieron derechos y luego los quitaron. ¿Para qué recordar algo de eso?', fa: 'حقوق وعده داده شد و بعد گرفته شد. چرا هیچ کدامش را به یاد بیاوری؟' },
    win: { en: 'The smoke clears. Journal page 5.3 floats down into your hands.', es: 'El humo se va. La página 5.3 del diario cae en tus manos.', fa: 'دود کنار می‌رود. صفحهٔ ۵.۳ روزنامچه به دستت می‌افتد.' },
    questions: [
      { q: { en: 'What did the 13th Amendment do in 1865?', es: '¿Qué hizo la Enmienda 13 en 1865?', fa: 'تعدیل سیزدهم در ۱۸۶۵ چه کرد؟' },
        choices: [
          { en: 'Ended slavery in the nation', es: 'Terminó la esclavitud en el país', fa: 'برده‌داری را در کشور ختم کرد' },
          { en: 'Gave all women the vote', es: 'Dio el voto a todas las mujeres', fa: 'به همهٔ زنان حق رأی داد' },
          { en: 'Made Richmond the capital', es: 'Hizo a Richmond la capital', fa: 'ریچموند را پایتخت ساخت' },
          { en: 'Ended a war with Mexico', es: 'Terminó una guerra con México', fa: 'یک جنگ با مکسیکو را ختم کرد' }],
        answer: 0,
        why: { en: 'The 13th Amendment ended slavery everywhere in the United States.', es: 'La Enmienda 13 terminó con la esclavitud en todo Estados Unidos.', fa: 'تعدیل سیزدهم برده‌داری را در همه جای امریکا ختم کرد.' } },
      { q: { en: 'What did the 14th Amendment (1868) promise?', es: '¿Qué prometió la Enmienda 14 (1868)?', fa: 'تعدیل چهاردهم (۱۸۶۸) چه وعده داد؟' },
        choices: [
          { en: 'Citizenship and equal protection', es: 'Ciudadanía y protección igual', fa: 'شهروندی و حمایت برابر' },
          { en: 'Free farmland for each family', es: 'Tierra gratis para cada familia', fa: 'زمین مفت برای هر خانواده' },
          { en: 'A new capital for the nation', es: 'Una nueva capital para el país', fa: 'یک پایتخت نو برای کشور' },
          { en: 'Free trains for soldiers going home', es: 'Trenes gratis para soldados que vuelven', fa: 'قطار مفت برای عسکرهایی که خانه می‌روند' }],
        answer: 0,
        why: { en: 'People born in the U.S. are citizens. States must protect everyone equally under the law.', es: 'Quienes nacen en EE. UU. son ciudadanos. Los estados deben proteger a todos por igual ante la ley.', fa: 'کسانی که در امریکا به دنیا می‌آیند شهروند هستند. ایالت‌ها باید از همه برابر حمایت کنند.' } },
      { q: { en: 'What did the 15th Amendment (1870) say about voting?', es: '¿Qué dijo la Enmienda 15 (1870) sobre el voto?', fa: 'تعدیل پانزدهم (۱۸۷۰) دربارهٔ رأی دادن چه گفت؟' },
        choices: [
          { en: 'Race cannot stop a man from voting', es: 'La raza no puede impedir que un hombre vote', fa: 'نژاد نمی‌تواند مرد را از رأی باز دارد' },
          { en: 'Only men who own land may vote', es: 'Solo votan los hombres con tierras', fa: 'فقط مردان زمین‌دار رأی می‌دهند' },
          { en: 'Women and men may vote in every state', es: 'Mujeres y hombres votan en cada estado', fa: 'زنان و مردان در هر ایالت رأی می‌دهند' },
          { en: 'Each state may pick voters by any rule', es: 'Cada estado elige votantes como quiera', fa: 'هر ایالت با هر قاعده رأی‌دهنده انتخاب کند' }],
        answer: 0,
        why: { en: 'It protected Black men\'s right to vote. Women of every race still could not vote.', es: 'Protegió el derecho al voto de los hombres negros. Las mujeres de toda raza aún no podían votar.', fa: 'از حق رأی مردان سیاه‌پوست حمایت کرد. زنان هیچ نژادی هنوز رأی نداشتند.' } },
      { q: { en: 'What did the Freedmen\'s Bureau do?', es: '¿Qué hizo la Oficina de Libertos?', fa: 'ادارهٔ آزادشدگان چه کرد؟' },
        choices: [
          { en: 'Gave food and opened schools', es: 'Dio comida y abrió escuelas', fa: 'غذا داد و مکتب باز کرد' },
          { en: 'Trained Confederate soldiers', es: 'Entrenó a soldados confederados', fa: 'عسکرهای کنفدرالی را تربیه کرد' },
          { en: 'Sold land to railroad owners', es: 'Vendió tierras a dueños de trenes', fa: 'زمین را به مالکان ریل فروخت' },
          { en: 'Collected taxes from farmers', es: 'Cobró impuestos a los granjeros', fa: 'از دهقانان مالیه گرفت' }],
        answer: 0,
        why: { en: 'Congress made the Bureau in 1865. It gave food, opened schools and checked work contracts.', es: 'El Congreso creó la Oficina en 1865. Dio comida, abrió escuelas y revisó contratos de trabajo.', fa: 'کانگرس اداره را در ۱۸۶۵ ساخت. غذا داد، مکتب باز کرد و قراردادهای کار را دید.' } },
      { q: { en: 'During Reconstruction, what did many Black Americans do for the first time?', es: 'Durante la Reconstrucción, ¿qué hicieron muchos afroamericanos por primera vez?', fa: 'در دوران بازسازی، بسیاری از سیاه‌پوستان امریکا برای اولین بار چه کردند؟' },
        choices: [
          { en: 'Voted and served in Congress', es: 'Votaron y sirvieron en el Congreso', fa: 'رأی دادند و در کانگرس خدمت کردند' },
          { en: 'Sailed away to start a country', es: 'Se fueron en barco a fundar un país', fa: 'با کشتی رفتند تا کشوری بسازند' },
          { en: 'Ran the Bureau in Washington', es: 'Dirigieron la Oficina en Washington', fa: 'اداره را در واشنگتن اداره کردند' },
          { en: 'Wrote the U.S. Constitution', es: 'Escribieron la Constitución de EE. UU.', fa: 'قانون اساسی امریکا را نوشتند' }],
        answer: 0,
        why: { en: 'Black men voted. Some served in Congress, in state legislatures and in Virginia\'s convention.', es: 'Los hombres negros votaron. Algunos sirvieron en el Congreso, en legislaturas estatales y en la convención de Virginia.', fa: 'مردان سیاه‌پوست رأی دادند. بعضی در کانگرس، مجلس‌های ایالتی و جلسهٔ بزرگ ویرجینیا خدمت کردند.' } },
      { q: { en: 'What was sharecropping?', es: '¿Qué era la aparcería?', fa: 'بزگری چه بود؟' },
        choices: [
          { en: 'Paying rent with part of the crop', es: 'Pagar la renta con parte de la cosecha', fa: 'پرداخت کرایه با حصهٔ حاصل' },
          { en: 'Selling crops at the city market', es: 'Vender cosechas en el mercado', fa: 'فروش حاصل در بازار شهر' },
          { en: 'Owning a big farm with paid workers', es: 'Tener una finca grande con peones', fa: 'داشتن فارم بزرگ با کارگران' },
          { en: 'Sharing farm tools with neighbors', es: 'Compartir herramientas con vecinos', fa: 'شریک کردن افزار کشت با همسایه‌ها' }],
        answer: 0,
        why: { en: 'Sharecroppers farmed a landowner\'s land and paid with crops. Many fell into debt and stayed poor.', es: 'Los aparceros cultivaban la tierra de un dueño y pagaban con cosecha. Muchos se endeudaron y siguieron pobres.', fa: 'بزگرها زمین مالک را می‌کاشتند و با حاصل پرداخت می‌کردند. بسیاری قرضدار و فقیر ماندند.' } },
      { q: { en: 'What ended Reconstruction in 1877?', es: '¿Qué terminó la Reconstrucción en 1877?', fa: 'چه چیزی بازسازی را در ۱۸۷۷ ختم کرد؟' },
        choices: [
          { en: 'Federal troops left the South', es: 'Las tropas federales salieron del Sur', fa: 'عسکرهای فدرال جنوب را ترک کردند' },
          { en: 'The 15th Amendment was passed', es: 'Se aprobó la Enmienda 15', fa: 'تعدیل پانزدهم تصویب شد' },
          { en: 'Virginia left the Union again', es: 'Virginia dejó otra vez la Unión', fa: 'ویرجینیا دوباره از اتحادیه جدا شد' },
          { en: 'The Bureau grew much larger', es: 'La Oficina creció mucho más', fa: 'اداره خیلی بزرگ‌تر شد' }],
        answer: 0,
        why: { en: 'In the Compromise of 1877, federal troops left the South. Freed people lost much protection.', es: 'Con el Compromiso de 1877, las tropas federales salieron del Sur. Los libertos perdieron mucha protección.', fa: 'با سازش ۱۸۷۷، عسکرهای فدرال جنوب را ترک کردند. آزادشدگان حمایت زیادی را از دست دادند.' } },
      { q: { en: 'Under Jim Crow, how did Southern states stop Black men from voting?', es: 'Bajo Jim Crow, ¿cómo impedían los estados del Sur que los hombres negros votaran?', fa: 'در دوران جیم کرو، ایالت‌های جنوبی چطور جلوی رأی دادن مردان سیاه‌پوست را گرفتند؟' },
        choices: [
          { en: 'Poll taxes and literacy tests', es: 'Impuestos al voto y pruebas de lectura', fa: 'مالیهٔ رأی و امتحان سواد' },
          { en: 'A new amendment for voting', es: 'Una nueva enmienda sobre el voto', fa: 'یک تعدیل نو برای رأی' },
          { en: 'Free rides to the voting place', es: 'Viajes gratis al lugar de votación', fa: 'سواری مفت تا جای رأی دادن' },
          { en: 'Longer hours at the polls', es: 'Más horas para votar', fa: 'ساعت‌های بیشتر برای رأی' }],
        answer: 0,
        why: { en: 'Poll taxes cost money. Literacy tests were unfair reading tests. Both kept many Black men from voting.', es: 'Los impuestos al voto costaban dinero. Las pruebas de lectura eran injustas. Ambos impidieron votar a muchos hombres negros.', fa: 'مالیهٔ رأی پول می‌خواست. امتحان سواد ناعادلانه بود. هر دو بسیاری از مردان سیاه‌پوست را از رأی باز داشت.' } }
    ]
  },

  learned: [
    { en: 'The Civil War ended in 1865. The 13th, 14th and 15th [[amendment|Amendments]] ended slavery, made citizens and protected Black men\'s vote.', es: 'La Guerra Civil terminó en 1865. Las [[amendment|Enmiendas]] 13, 14 y 15 acabaron con la esclavitud, hicieron ciudadanos y protegieron el voto de los hombres negros.', fa: 'جنگ داخلی در ۱۸۶۵ تمام شد. [[amendment|تعدیل‌های]] ۱۳، ۱۴ و ۱۵ برده‌داری را ختم کردند، شهروند ساختند و از رأی مردان سیاه‌پوست حمایت کردند.' },
    { en: 'During [[reconstruction|Reconstruction]], the [[bureau|Freedmen\'s Bureau]] opened schools. Black Americans voted and served in Congress and state legislatures.', es: 'Durante la [[reconstruction|Reconstrucción]], la [[bureau|Oficina de Libertos]] abrió escuelas. Los afroamericanos votaron y sirvieron en el Congreso y en legislaturas estatales.', fa: 'در دوران [[reconstruction|بازسازی]]، [[bureau|ادارهٔ آزادشدگان]] مکتب باز کرد. سیاه‌پوستان امریکا رأی دادند و در کانگرس و مجلس‌های ایالتی خدمت کردند.' },
    { en: 'In 1877, federal troops left the South. [[jim crow|Jim Crow]] laws, poll taxes and literacy tests took rights away.', es: 'En 1877, las tropas federales salieron del Sur. Las leyes de [[jim crow|Jim Crow]], los impuestos al voto y las pruebas de lectura quitaron derechos.', fa: 'در ۱۸۷۷، عسکرهای فدرال جنوب را ترک کردند. قانون‌های [[jim crow|جیم کرو]]، مالیهٔ رأی و امتحان سواد حقوق را گرفتند.' }
  ],
  reflect: {
    q: { en: 'The 14th Amendment promises equal protection of the laws. Why does that promise matter today?', es: 'La Enmienda 14 promete igual protección de las leyes. ¿Por qué importa esa promesa hoy?', fa: 'تعدیل چهاردهم حمایت برابر قانون را وعده می‌دهد. چرا این وعده امروز مهم است؟' },
    starter: { en: 'That promise matters today because', es: 'Esa promesa importa hoy porque', fa: 'این وعده امروز مهم است، چون' }
  }
};
