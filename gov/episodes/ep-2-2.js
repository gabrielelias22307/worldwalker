/* CIVICWALKER · Episode 2.2 · The Bill of Rights
   Richmond, Virginia, June 1788. North: Shockoe Hill, where the Virginia Ratifying Convention meets in the new
   Academy building, with a paved square in front, a print shop (north-west), a meeting house (north-east) and the
   town green where the militia drills. The edge of the hill drops to Main Street, across the middle.
   South of it: the courthouse and the jail (west), the market stalls (middle), a tavern and a family home (east).
   The James River runs along the south edge, with a small dock.
   The charter stone asks the student to carry each town problem to the amendment that protects it:
   the 1st by the print shop, the 2nd on the militia green, the 4th at the family home, the 5th and 6th at the
   courthouse steps, the 8th at the jail. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'GOVT',
  title: { en: 'The Bill of Rights', es: 'La Carta de Derechos', fa: 'منشور حقوق' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Richmond, 1788', es: 'Richmond, 1788', fa: 'ریچموند، ۱۷۸۸' },
  intro: [
    { en: 'The Grump tore the page about our rights. Now people forget what protects them!',
      es: 'El Gruñón rompió la página sobre nuestros derechos. ¡Ahora la gente olvida qué los protege!',
      fa: 'غرغرو صفحهٔ حقوق ما را پاره کرد. حالا مردم فراموش می‌کنند چه چیز از آنها محافظت می‌کند!' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  /* cut scenes: Richmond on the world map (no timeline in this game) */
  scenes: {
    at: [-77.43, 37.54],
    start: [
      { en: 'In June 1788, Virginia leaders met in Richmond for a big vote.',
        es: 'En junio de 1788, los líderes de Virginia se reunieron en Richmond para una gran votación.',
        fa: 'در ماه جون ۱۷۸۸، رهبران ویرجینیا برای یک رأی‌گیری بزرگ در ریچموند جمع شدند.' },
      { en: 'They met on Shockoe Hill, in a new building called the Academy.',
        es: 'Se reunieron en la colina Shockoe, en un edificio nuevo llamado la Academia.',
        fa: 'آنها روی تپهٔ شاکو، در یک ساختمان نو به نام «اکادمی» جمع شدند.' },
      { en: 'Would Virginia ratify, or accept, the new US Constitution?',
        es: '¿Iba Virginia a ratificar, o aceptar, la nueva Constitución de EE. UU.?',
        fa: 'آیا ویرجینیا قانون اساسی نوی امریکا را تصویب، یعنی قبول، می‌کرد؟' }
    ],
    page: { en: 'Virginia said yes, 89 to 79. Then James Madison wrote the Bill of Rights.',
      es: 'Virginia dijo que sí, 89 a 79. Luego James Madison escribió la Carta de Derechos.',
      fa: 'ویرجینیا با ۸۹ رأی در برابر ۷۹ بله گفت. بعد جیمز مدیسن منشور حقوق را نوشت.' },
    guess: {
      q: { en: 'Do you think Virginia voted yes or no on the Constitution?', es: '¿Crees que Virginia votó sí o no a la Constitución?', fa: 'فکر می‌کنی ویرجینیا به قانون اساسی بله گفت یا نه؟' },
      choices: [
        { t: { en: '✅ Yes, but just barely', es: '✅ Sí, pero por poco', fa: '✅ بله، اما به سختی' }, ok: true },
        { t: { en: '❌ No, it lost', es: '❌ No, perdió', fa: '❌ نه، رد شد' } }
      ],
      why: { en: 'Virginia voted yes, 89 to 79, on June 25, 1788. It also asked for amendments.', es: 'Virginia votó que sí, 89 a 79, el 25 de junio de 1788. También pidió enmiendas.', fa: 'ویرجینیا در ۲۵ جون ۱۷۸۸ با ۸۹ در برابر ۷۹ بله گفت. متمم‌ها را هم خواست.' }
    },
    next: {
      q: { en: 'Next: federalism. Does the nation hold every power, or do states have some?', es: 'Ahora: el federalismo. ¿La nación tiene todo el poder, o los estados tienen algo?', fa: 'بعدی: فدرالیزم. آیا همهٔ قدرت دست حکومت ملی است، یا ایالت‌ها هم قدرت دارند؟' },
      choices: [
        { t: { en: 'States have some too', es: 'Los estados también', fa: 'ایالت‌ها هم دارند' }, ok: true },
        { t: { en: 'The nation has all', es: 'La nación tiene todo', fa: 'همه دست حکومت ملی' } }
      ],
      why: { en: 'Some powers belong to the nation, some to the states, and some to both.', es: 'Algunos poderes son de la nación, otros de los estados y otros de los dos.', fa: 'بعضی قدرت‌ها مال حکومت ملی، بعضی مال ایالت‌ها و بعضی مال هر دو است.' }
    }
  },
  /* houses: who works or lives behind each door; walk in and talk */
  houses: [
    { at: [3, 2], name: { en: 'Mrs. Hale', es: 'Sra. Hale', fa: 'خانم هیل' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#6a4a8a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'I am a printer. My newspaper prints letters for and against the Constitution.', es: 'Soy impresora. Mi periódico publica cartas a favor y en contra de la Constitución.', fa: 'من چاپ‌کار هستم. اخبار من نامه‌های موافق و مخالف قانون اساسی را چاپ می‌کند.' },
        { en: 'Some people fear a strong government could close a newspaper it dislikes.', es: 'Algunos temen que un gobierno fuerte cierre un periódico que no le gusta.', fa: 'بعضی مردم می‌ترسند یک حکومت قوی اخباری را که دوست ندارد بسته کند.' },
        { en: 'That is why they want a written promise: a free press.', es: 'Por eso quieren una promesa escrita: una prensa libre.', fa: 'برای همین یک وعدهٔ نوشته‌شده می‌خواهند: مطبوعات آزاد.' }
      ] },
    { at: [16, 3], name: { en: 'Mr. Lewis', es: 'Sr. Lewis', fa: 'آقای لوئیس' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#2f5f9a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I keep the door of the Academy. The [[convention|convention]] meets in here.', es: 'Cuido la puerta de la Academia. La [[convention|convención]] se reúne aquí.', fa: 'من دروازه‌بان اکادمی هستم. [[convention|کنوانسیون]] اینجا جلسه می‌کند.' },
        { en: 'The delegates are all white men. Only men who owned land could vote for them.', es: 'Los delegados son todos hombres blancos. Solo los dueños de tierras podían votar por ellos.', fa: 'همهٔ نماینده‌ها مردان سفیدپوست هستند. فقط مردان صاحب زمین به آنها رأی داده می‌توانستند.' },
        { en: 'About 4 in 10 people in Virginia are enslaved. These rights do not protect them.', es: 'Unas 4 de cada 10 personas en Virginia están esclavizadas. Estos derechos no las protegen.', fa: 'تقریباً ۴ از هر ۱۰ نفر در ویرجینیا برده هستند. این حقوق از آنها محافظت نمی‌کند.' }
      ] },
    { at: [27, 2], name: { en: 'Brother Amos', es: 'Hermano Amos', fa: 'برادر آموس' },
      look: { skin: 4, hair: '#1a1208', shirt: '#2a2a2a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'Years ago, some preachers in Virginia were put in jail for preaching.', es: 'Hace años, algunos predicadores en Virginia fueron a la cárcel por predicar.', fa: 'سال‌ها پیش، بعضی واعظان در ویرجینیا برای موعظه کردن زندانی شدند.' },
        { en: 'In 1786, Virginia passed Thomas Jefferson\'s Statute for Religious Freedom.', es: 'En 1786, Virginia aprobó el Estatuto de Libertad Religiosa de Thomas Jefferson.', fa: 'در سال ۱۷۸۶، ویرجینیا قانون آزادی دینی تامس جفرسن را تصویب کرد.' },
        { en: 'Now no one here can be forced to support a church.', es: 'Ahora aquí nadie puede ser obligado a apoyar una iglesia.', fa: 'حالا اینجا هیچ کس مجبور نیست از یک کلیسا حمایت کند.' }
      ] },
    { at: [5, 13], name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      look: { skin: 0, hair: '#3a2416', shirt: '#2a2a2a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I am the court clerk. In this courthouse, a [[jury|jury]] decides many cases.', es: 'Soy el secretario del tribunal. En este tribunal, un [[jury|jurado]] decide muchos casos.', fa: 'من منشی محکمه هستم. در این محکمه، [[jury|هیئت منصفه]] در بسیاری از دعواها تصمیم می‌گیرد.' },
        { en: 'A jury is a group of ordinary people from the town.', es: 'Un jurado es un grupo de personas comunes del pueblo.', fa: 'هیئت منصفه یک گروه از مردم عادی همان شهر است.' },
        { en: 'People want a promise of fair trials in the new Constitution too.', es: 'La gente quiere una promesa de juicios justos en la nueva Constitución también.', fa: 'مردم در قانون اساسی نو هم وعدهٔ محاکمهٔ عادلانه را می‌خواهند.' }
      ] },
    { at: [11, 13], name: { en: 'Mr. Pike', es: 'Sr. Pike', fa: 'آقای پایک' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#5a4630', pants: '#2a2a2a', hat: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I am the jailer. People wait here before their trial.', es: 'Soy el carcelero. La gente espera aquí antes de su juicio.', fa: 'من زندان‌بان هستم. مردم پیش از محاکمه اینجا منتظر می‌مانند.' },
        { en: 'Some pay [[bail|bail]] to go home and wait there instead.', es: 'Algunos pagan [[bail|fianza]] para ir a casa y esperar allí.', fa: 'بعضی [[bail|ضمانت]] می‌پردازند تا به خانه بروند و آنجا منتظر بمانند.' },
        { en: 'England\'s 1689 Bill of Rights banned cruel and unusual punishments. We want that too.', es: 'La Carta de Derechos inglesa de 1689 prohibió castigos crueles e inusuales. Queremos eso.', fa: 'منشور حقوق انگلستان در ۱۶۸۹ جزای ظالمانه و غیرعادی را منع کرد. ما هم این را می‌خواهیم.' }
      ] },
    { at: [24, 13], name: { en: 'Mrs. Bell', es: 'Sra. Bell', fa: 'خانم بِل' },
      look: { skin: 5, hair: '#1a1008', shirt: '#c0392b', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I run this tavern. Every night, my guests argue about the Constitution!', es: 'Tengo esta taberna. ¡Cada noche, mis clientes discuten sobre la Constitución!', fa: 'من این مهمانخانه را اداره می‌کنم. هر شب مهمانانم دربارهٔ قانون اساسی بحث می‌کنند!' },
        { en: '[[federalist|Federalists]] say it makes one strong, united nation.', es: 'Los [[federalist|federalistas]] dicen que forma una nación fuerte y unida.', fa: '[[federalist|فدرالیست‌ها]] می‌گویند این یک ملت قوی و متحد می‌سازد.' },
        { en: '[[anti-federalist|Anti-Federalists]] fear the national government will get too much power.', es: 'Los [[anti-federalist|antifederalistas]] temen que el gobierno nacional tenga demasiado poder.', fa: '[[anti-federalist|ضد فدرالیست‌ها]] می‌ترسند حکومت ملی قدرت خیلی زیاد بگیرد.' }
      ] },
    { at: [28, 13], name: { en: 'Mrs. Ross', es: 'Sra. Ross', fa: 'خانم راس' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f8f8f', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Under British rule, officers could search homes with no good reason.', es: 'Bajo el gobierno británico, los oficiales podían registrar casas sin una buena razón.', fa: 'در زمان حکومت انگلیس، مأموران بدون دلیل خوب خانه‌ها را تلاشی می‌کردند.' },
        { en: 'My father\'s home was searched like that. He never forgot it.', es: 'Así registraron la casa de mi padre. Él nunca lo olvidó.', fa: 'خانهٔ پدرم همین‌طور تلاشی شد. او هیچ وقت فراموش نکرد.' },
        { en: 'We want a rule: no search without a good reason and a [[warrant|warrant]].', es: 'Queremos una regla: ningún registro sin una buena razón y una [[warrant|orden]].', fa: 'ما یک قانون می‌خواهیم: هیچ تلاشی بدون دلیل خوب و [[warrant|حکم تلاشی]] نباشد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-8): Shockoe Hill. The Academy (R roof over h wall, door at 16,3) with its paved square (l) in front;
     the print shop (R over h, north-west), the meeting house (Q over h, north-east), the town green to the east.
     y 9: the edge of the hill (K) with three ways down. y 10-11: Main Street (l) across the whole map.
     South (y 12-16): the courthouse (Q) and the jail (R) in the west, the market stalls (m) in the middle,
     the tavern and a family home (R) in the east. y 17: the riverbank (s). y 18-21: the James River (~), a dock (k). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T.RRR......RRRRRRRRRR.....QQQ..T',
    'T.hdh......RRRRRRRRRR.....hdh..T',
    'T..........hhhhhdhhhh..........T',
    'T....T.....llllllllll.....T....T',
    'T..x.......llllllllll..........T',
    'T.T........llllllllll.......T..T',
    'T.....T....llllllllll...x......T',
    'T..T.........llllll......T.....T',
    'TKKKKK...KKKK.llllll.KKKK...KKKT',
    'TllllllllllllllllllllllllllllllT',
    'TllllllllllllllllllllllllllllllT',
    'T.QQQQQQQ.RRR..........RRR.RRR.T',
    'T.hhhdhhh.hdh..........hdh.hdh.T',
    'T........x.....................T',
    'T.............mm..mm...........T',
    'T..T.....................T.....T',
    'TssssssssssssssssssssssssssssssT',
    '~~~~~~~~~~~~~~~kk~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    '================================'
  ],
  start: [16, 11],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [12, 8], at: [8, 8], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps west, along the edge of the hill.', es: 'Desde esta nota, camina 4 pasos al oeste, por el borde de la colina.', fa: 'از این یادداشت، ۴ قدم به غرب برو، کنار لب تپه.' },
      text: { en: 'A Spanish silver dollar! In 1788, many Virginians paid with Spanish coins.', es: '¡Un dólar español de plata! En 1788, muchos en Virginia pagaban con monedas españolas.', fa: 'یک دالر نقره‌ای هسپانیایی! در ۱۷۸۸، بسیاری در ویرجینیا با سکهٔ هسپانیایی پول می‌دادند.' } },
    { clueAt: [20, 16], at: [24, 16], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, along the river.', es: 'Desde esta nota, camina 4 pasos al este, junto al río.', fa: 'از این یادداشت، ۴ قدم به شرق برو، کنار دریا.' },
      text: { en: 'A river shell! Boats carried tobacco down the James River from Richmond.', es: '¡Una concha de río! Los barcos llevaban tabaco por el río James desde Richmond.', fa: 'یک صدف دریایی! کشتی‌ها از ریچموند تنباکو را در دریای جیمز پایین می‌بردند.' } }
  ],

  words: {
    convention: { en: 'a big meeting of leaders chosen to decide something important', es: 'una gran reunión de líderes elegidos para decidir algo importante', fa: 'یک جلسهٔ بزرگ رهبران انتخاب‌شده برای تصمیم دربارهٔ یک کار مهم' },
    ratify: { en: 'to vote to accept a plan or a law', es: 'votar para aceptar un plan o una ley', fa: 'رأی دادن برای قبول کردن یک نقشه یا قانون' },
    federalist: { en: 'a person who wanted the new Constitution and a strong nation', es: 'una persona que quería la nueva Constitución y una nación fuerte', fa: 'کسی که قانون اساسی نو و یک ملت قوی را می‌خواست' },
    'anti-federalist': { en: 'a person who feared the new Constitution gave the nation too much power', es: 'una persona que temía que la nueva Constitución diera demasiado poder a la nación', fa: 'کسی که می‌ترسید قانون اساسی نو به حکومت ملی قدرت زیاد بدهد' },
    amendment: { en: 'a change or addition to the Constitution', es: 'un cambio o una adición a la Constitución', fa: 'یک تغییر یا افزوده به قانون اساسی' },
    'bill of rights': { en: 'the first 10 amendments; they protect people\'s rights', es: 'las primeras 10 enmiendas; protegen los derechos de la gente', fa: '۱۰ متمم اول؛ از حقوق مردم محافظت می‌کنند' },
    petition: { en: 'a written request to the government, often signed by many people', es: 'un pedido escrito al gobierno, muchas veces firmado por muchas personas', fa: 'یک درخواست نوشته‌شده به حکومت، اکثراً با امضای بسیاری از مردم' },
    warrant: { en: 'a paper from a judge that allows a search or an arrest', es: 'un papel de un juez que permite un registro o un arresto', fa: 'کاغذی از قاضی که اجازهٔ تلاشی یا گرفتاری را می‌دهد' },
    jury: { en: 'a group of ordinary citizens who decide a case in court', es: 'un grupo de ciudadanos comunes que deciden un caso en el tribunal', fa: 'یک گروه از شهروندان عادی که در محکمه دربارهٔ یک دعوا تصمیم می‌گیرند' },
    'due process': { en: 'the government must follow fair rules before it punishes anyone', es: 'el gobierno debe seguir reglas justas antes de castigar a alguien', fa: 'حکومت باید پیش از جزا دادن هر کس قانون‌های عادلانه را رعایت کند' },
    'double jeopardy': { en: 'being put on trial twice for the same crime', es: 'ser juzgado dos veces por el mismo delito', fa: 'دو بار محاکمه شدن برای یک جرم' },
    bail: { en: 'money paid so a person can leave jail while waiting for trial', es: 'dinero que se paga para salir de la cárcel mientras se espera el juicio', fa: 'پولی که پرداخته می‌شود تا یک نفر تا وقت محاکمه از زندان بیرون باشد' }
  },

  npcs: [
    {
      x: 8, y: 7,
      name: { en: 'Sam', es: 'Sam', fa: 'سام' },
      role: { en: 'Convention clerk', es: 'Secretario de la convención', fa: 'منشی کنوانسیون' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#e8dcc0', pants: '#3a3a4a', style: 'short' },
      lines: [
        { en: 'I write down every word said in the Academy. My hand is tired!', es: 'Escribo cada palabra que se dice en la Academia. ¡Tengo la mano cansada!', fa: 'من هر کلمه‌ای را که در اکادمی گفته می‌شود می‌نویسم. دستم خسته شده!' },
        { en: 'George Mason and Patrick Henry are against the new Constitution.', es: 'George Mason y Patrick Henry están en contra de la nueva Constitución.', fa: 'جورج میسن و پاتریک هنری مخالف قانون اساسی نو هستند.' },
        { en: 'They say it has no [[bill of rights|bill of rights]] and makes the nation too strong.', es: 'Dicen que no tiene una [[bill of rights|carta de derechos]] y hace a la nación muy fuerte.', fa: 'آنها می‌گویند [[bill of rights|منشور حقوق]] ندارد و حکومت ملی را خیلی قوی می‌سازد.' },
        { en: 'James Madison is for it. On June 25, Virginia will [[ratify|ratify]] it, 89 to 79.', es: 'James Madison está a favor. El 25 de junio, Virginia la [[ratify|ratificará]], 89 a 79.', fa: 'جیمز مدیسن موافق است. در ۲۵ جون، ویرجینیا آن را با ۸۹ در برابر ۷۹ [[ratify|تصویب]] می‌کند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why were George Mason and Patrick Henry against the new Constitution?', es: '¿Por qué George Mason y Patrick Henry estaban en contra de la nueva Constitución?', fa: 'چرا جورج میسن و پاتریک هنری مخالف قانون اساسی نو بودند؟' },
        choices: [
          { ok: true, t: { en: 'It had no list of rights', es: 'No tenía una lista de derechos', fa: 'فهرست حقوق نداشت' },
            why: { en: 'Yes! They wanted rights written down, and they feared a national government that was too strong.', es: '¡Sí! Querían los derechos por escrito y temían un gobierno nacional demasiado fuerte.', fa: 'بله! آنها حقوق نوشته‌شده می‌خواستند و از یک حکومت ملی خیلی قوی می‌ترسیدند.' } },
          { t: { en: 'It made George Washington king', es: 'Hacía rey a George Washington', fa: 'جورج واشنگتن را پادشاه می‌ساخت' },
            why: { en: 'No. The Constitution has no king. They worried about missing rights.', es: 'No. La Constitución no tiene rey. Les preocupaba que faltaran los derechos.', fa: 'نه. قانون اساسی پادشاه ندارد. آنها نگران نبودن حقوق بودند.' } },
          { t: { en: 'It gave the states too much power', es: 'Daba demasiado poder a los estados', fa: 'به ایالت‌ها قدرت خیلی زیاد می‌داد' },
            why: { en: 'It was the opposite. They feared the national government would be too strong.', es: 'Era al revés. Temían que el gobierno nacional fuera demasiado fuerte.', fa: 'برعکس بود. آنها می‌ترسیدند حکومت ملی خیلی قوی شود.' } }
        ]
      }
    },
    {
      x: 21, y: 8,
      name: { en: 'Ms. Grace', es: 'Sra. Grace', fa: 'خانم گریس' },
      role: { en: 'Schoolteacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 4, hair: '#120c08', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'Virginia said yes, but it asked for [[amendment|amendments]]. An amendment is a change.', es: 'Virginia dijo que sí, pero pidió [[amendment|enmiendas]]. Una enmienda es un cambio.', fa: 'ویرجینیا بله گفت، اما [[amendment|متمم‌ها]] را خواست. متمم یعنی یک تغییر.' },
        { en: 'Later, James Madison wrote the amendments. Congress sent them to the states in 1789.', es: 'Después, James Madison escribió las enmiendas. El Congreso las envió a los estados en 1789.', fa: 'بعداً جیمز مدیسن متمم‌ها را نوشت. کانگرس در ۱۷۸۹ آنها را به ایالت‌ها فرستاد.' },
        { en: 'He used George Mason\'s Virginia Declaration of Rights, from 1776, as a model.', es: 'Usó como modelo la Declaración de Derechos de Virginia, de George Mason, de 1776.', fa: 'او اعلامیهٔ حقوق ویرجینیا از جورج میسن، از سال ۱۷۷۶، را نمونه گرفت.' },
        { en: 'In 1791, the first 10 amendments became law: the Bill of Rights.', es: 'En 1791, las primeras 10 enmiendas se hicieron ley: la Carta de Derechos.', fa: 'در ۱۷۹۱، ۱۰ متمم اول قانون شد: منشور حقوق.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'How many amendments are in the Bill of Rights?', es: '¿Cuántas enmiendas hay en la Carta de Derechos?', fa: 'در منشور حقوق چند متمم است؟' },
        choices: [
          { ok: true, t: { en: '10 amendments', es: '10 enmiendas', fa: '۱۰ متمم' },
            why: { en: 'Right! The Bill of Rights is the first 10 amendments, ratified in 1791.', es: '¡Correcto! La Carta de Derechos son las primeras 10 enmiendas, ratificadas en 1791.', fa: 'درست! منشور حقوق ۱۰ متمم اول است که در ۱۷۹۱ تصویب شد.' } },
          { t: { en: '27 amendments', es: '27 enmiendas', fa: '۲۷ متمم' },
            why: { en: 'The Constitution has 27 amendments today. Only the first 10 are the Bill of Rights.', es: 'Hoy la Constitución tiene 27 enmiendas. Solo las primeras 10 son la Carta de Derechos.', fa: 'قانون اساسی امروز ۲۷ متمم دارد. فقط ۱۰ متمم اول منشور حقوق است.' } },
          { t: { en: '3 amendments', es: '3 enmiendas', fa: '۳ متمم' },
            why: { en: 'No. The Bill of Rights has 10 amendments, not 3.', es: 'No. La Carta de Derechos tiene 10 enmiendas, no 3.', fa: 'نه. منشور حقوق ۱۰ متمم دارد، نه ۳.' } }
        ]
      }
    },
    {
      x: 13, y: 14,
      name: { en: 'Lucy', es: 'Lucy', fa: 'لوسی' },
      role: { en: 'Court messenger', es: 'Mensajera del tribunal', fa: 'پیام‌رسان محکمه' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#f2c14e', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'Many rights in the Bill of Rights protect people accused of a crime.', es: 'Muchos derechos de la Carta de Derechos protegen a las personas acusadas de un delito.', fa: 'بسیاری از حقوق در منشور حقوق از کسانی که متهم به جرم هستند محافظت می‌کند.' },
        { en: 'The 5th Amendment: you do not have to speak against yourself.', es: 'La Quinta Enmienda: no tienes que hablar en tu propia contra.', fa: 'متمم پنجم: لازم نیست علیه خودت گپ بزنی.' },
        { en: 'The 6th: a speedy, public trial, a lawyer and a [[jury|jury]].', es: 'La Sexta: un juicio rápido y público, un abogado y un [[jury|jurado]].', fa: 'متمم ششم: محاکمهٔ زود و علنی، یک وکیل و [[jury|هیئت منصفه]].' },
        { en: 'The 8th: no cruel and unusual punishment, and no [[bail|bail]] that is too high.', es: 'La Octava: ningún castigo cruel e inusual, y ninguna [[bail|fianza]] demasiado alta.', fa: 'متمم هشتم: هیچ جزای ظالمانه و غیرعادی، و هیچ [[bail|ضمانت]] خیلی بلند نباشد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Which amendment promises a speedy trial, a lawyer and a jury?', es: '¿Qué enmienda promete un juicio rápido, un abogado y un jurado?', fa: 'کدام متمم وعدهٔ محاکمهٔ زود، وکیل و هیئت منصفه را می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'The 6th Amendment', es: 'La Sexta Enmienda', fa: 'متمم ششم' },
            why: { en: 'Yes! The 6th Amendment gives a speedy, public trial, a lawyer and a jury.', es: '¡Sí! La Sexta Enmienda da un juicio rápido y público, un abogado y un jurado.', fa: 'بله! متمم ششم محاکمهٔ زود و علنی، وکیل و هیئت منصفه می‌دهد.' } },
          { t: { en: 'The 2nd Amendment', es: 'La Segunda Enmienda', fa: 'متمم دوم' },
            why: { en: 'No. The 2nd Amendment is about the right to keep and bear arms.', es: 'No. La Segunda Enmienda trata del derecho a tener y portar armas.', fa: 'نه. متمم دوم دربارهٔ حق نگه داشتن و حمل سلاح است.' } },
          { t: { en: 'The 4th Amendment', es: 'La Cuarta Enmienda', fa: 'متمم چهارم' },
            why: { en: 'No. The 4th Amendment stops unreasonable searches of your home and things.', es: 'No. La Cuarta Enmienda impide registros sin razón de tu casa y tus cosas.', fa: 'نه. متمم چهارم جلوی تلاشی بی‌دلیل خانه و چیزهایت را می‌گیرد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 3, y: 5, text: { en: 'SHOCKOE HILL · RICHMOND · JUNE 1788 · Virginia\'s convention meets in the new Academy.', es: 'COLINA SHOCKOE · RICHMOND · JUNIO DE 1788 · La convención de Virginia se reúne en la nueva Academia.', fa: 'تپهٔ شاکو · ریچموند · جون ۱۷۸۸ · کنوانسیون ویرجینیا در اکادمی نو جلسه می‌کند.' } },
    { x: 24, y: 7, text: { en: 'THE TOWN GREEN · Citizen soldiers, called the militia, train here.', es: 'EL PRADO DEL PUEBLO · Aquí entrenan los soldados ciudadanos, llamados la milicia.', fa: 'سبزه‌زار شهر · سربازان شهروند، که ملیشه نام دارند، اینجا تمرین می‌کنند.' } },
    { x: 9, y: 14, text: { en: 'WEST: COURTHOUSE AND JAIL · EAST: MARKET, TAVERN · SOUTH: THE JAMES RIVER', es: 'OESTE: TRIBUNAL Y CÁRCEL · ESTE: MERCADO, TABERNA · SUR: EL RÍO JAMES', fa: 'غرب: محکمه و زندان · شرق: بازار، مهمانخانه · جنوب: دریای جیمز' } }
  ],

  /* the quest: Ned the newsboy (gold !) at the market, south-east -> Peg the baker on the hill, north-east
     -> find the bundle of newspapers by the print shop, north-west -> back to Ned */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Newspapers', es: 'Los periódicos perdidos', fa: 'اخبارهای گمشده' },
    giver: {
      x: 21, y: 14,
      name: { en: 'Ned', es: 'Ned', fa: 'نِد' },
      role: { en: 'Newsboy', es: 'Vendedor de periódicos', fa: 'اخبارفروش' },
      look: { skin: 0, hair: '#c08a3a', shirt: '#d9542b', pants: '#3a2a1a', hat: '#5a4630', style: 'short' },
      lines: [
        { en: 'I sell the newspaper. Today it tells what people say about the vote!', es: 'Vendo el periódico. ¡Hoy cuenta lo que la gente dice de la votación!', fa: 'من اخبار می‌فروشم. امروز می‌گوید مردم دربارهٔ رأی‌گیری چه می‌گویند!' },
        { en: 'But the wind took my whole bundle. Can you help me find it?', es: 'Pero el viento se llevó todo mi paquete. ¿Me ayudas a encontrarlo?', fa: 'اما باد تمام بستهٔ مرا برد. کمکم می‌کنی آن را پیدا کنم؟' }
      ],
      wait: { en: 'Ask Peg the baker, up on the hill to the north-east.', es: 'Pregúntale a Peg, la panadera, arriba en la colina, al noreste.', fa: 'از پِگ نانوا بپرس، بالای تپه، در شمال شرق.' },
      thanks: { en: 'My newspapers! Now everyone can read and decide for themselves. Thank you!', es: '¡Mis periódicos! Ahora todos pueden leer y decidir por sí mismos. ¡Gracias!', fa: 'اخبارهایم! حالا همه می‌توانند بخوانند و خودشان تصمیم بگیرند. تشکر!' }
    },
    contact: {
      x: 29, y: 4,
      name: { en: 'Peg', es: 'Peg', fa: 'پِگ' },
      role: { en: 'Baker', es: 'Panadera', fa: 'نانوا' },
      look: { skin: 5, hair: '#1a1008', shirt: '#e8e0d0', pants: '#5a3a2a', style: 'long' },
      lines: [
        { en: 'A free press lets people read and argue about their government.', es: 'Una prensa libre deja que la gente lea y discuta sobre su gobierno.', fa: 'مطبوعات آزاد به مردم اجازه می‌دهد دربارهٔ حکومت‌شان بخوانند و بحث کنند.' },
        { en: 'I saw papers fly west across the hill, past the Academy.', es: 'Vi papeles volar al oeste por la colina, pasando la Academia.', fa: 'دیدم کاغذها به طرف غرب از روی تپه، از کنار اکادمی، پرواز کردند.' },
        { en: 'They landed by the print shop, in the far north-west corner.', es: 'Cayeron junto a la imprenta, en la esquina del noroeste.', fa: 'آنها کنار چاپخانه، در کنج دور شمال غرب، افتادند.' }
      ]
    },
    action: {
      type: 'find',
      at: [1, 4],
      hint: { en: 'Look by the print shop, in the north-west corner', es: 'Busca junto a la imprenta, en la esquina del noroeste', fa: 'کنار چاپخانه، در کنج شمال غرب، ببین' },
      found: { en: 'The bundle of newspapers! It was caught in the grass by the print shop.', es: '¡El paquete de periódicos! Estaba atrapado en el pasto junto a la imprenta.', fa: 'بستهٔ اخبارها! در سبزه کنار چاپخانه گیر مانده بود.' },
      item: { icon: '📰', name: { en: 'A bundle of newspapers', es: 'Un paquete de periódicos', fa: 'یک بستهٔ اخبار' } }
    }
  },

  scraps: [[1, 1], [30, 1], [30, 16]],
  smudges: [[26, 8], [12, 16]],

  challenge: {
    at: [15, 6],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // the 1st by the print shop, the 2nd on the militia green, the 4th at the family home,
    // the 5th and 6th at the two sides of the courthouse steps, the 8th at the jail
    zones: [{ bin: 'a1', x: 6, y: 4, w: 4, h: 2 }, { bin: 'a2', x: 23, y: 5, w: 4, h: 2 }, { bin: 'a4', x: 27, y: 14, w: 4, h: 2 },
      { bin: 'a5', x: 2, y: 14, w: 3, h: 2 }, { bin: 'a6', x: 6, y: 14, w: 3, h: 2 }, { bin: 'a8', x: 10, y: 14, w: 3, h: 2 }],
    stat: 'hei',
    title: { en: 'Which right protects it?', es: '¿Qué derecho lo protege?', fa: 'کدام حق از آن محافظت می‌کند؟' },
    intro: { en: 'Carry each town problem to the amendment that protects the person.',
      es: 'Lleva cada problema del pueblo a la enmienda que protege a la persona.',
      fa: 'هر مشکل شهر را پیش متممی ببر که از آن شخص محافظت می‌کند.' },
    bins: [
      { id: 'a1', icon: '🗣️', label: { en: '1st Amendment', es: 'Primera Enmienda', fa: 'متمم اول' }, sub: { en: 'speech, religion, press, assembly, petition', es: 'expresión, religión, prensa, reunión, petición', fa: 'بیان، دین، مطبوعات، اجتماع، عریضه' } },
      { id: 'a2', icon: '🛡️', label: { en: '2nd Amendment', es: 'Segunda Enmienda', fa: 'متمم دوم' }, sub: { en: 'the right to keep and bear arms', es: 'el derecho a tener y portar armas', fa: 'حق نگه داشتن و حمل سلاح' } },
      { id: 'a4', icon: '🏠', label: { en: '4th Amendment', es: 'Cuarta Enmienda', fa: 'متمم چهارم' }, sub: { en: 'no unreasonable searches; warrants', es: 'ningún registro sin razón; órdenes', fa: 'هیچ تلاشی بی‌دلیل؛ حکم تلاشی' } },
      { id: 'a5', icon: '🤐', label: { en: '5th Amendment', es: 'Quinta Enmienda', fa: 'متمم پنجم' }, sub: { en: 'no speaking against yourself; no trial twice', es: 'no hablar en tu contra; no dos juicios', fa: 'لازم نیست علیه خودت گپ بزنی؛ دو بار محاکمه نه' } },
      { id: 'a6', icon: '⚖️', label: { en: '6th Amendment', es: 'Sexta Enmienda', fa: 'متمم ششم' }, sub: { en: 'a speedy public trial, a lawyer, a jury', es: 'juicio rápido y público, abogado, jurado', fa: 'محاکمهٔ زود و علنی، وکیل، هیئت منصفه' } },
      { id: 'a8', icon: '⛓️', label: { en: '8th Amendment', es: 'Octava Enmienda', fa: 'متمم هشتم' }, sub: { en: 'no cruel punishment; no bail too high', es: 'ningún castigo cruel; ninguna fianza muy alta', fa: 'جزای ظالمانه نه؛ ضمانت خیلی بلند نه' } }
    ],
    items: [
      { bin: 'a1', t: { en: 'A shopkeeper is told to stop saying the town tax is unfair.', es: 'Le dicen a un tendero que deje de decir que el impuesto es injusto.', fa: 'به یک دکاندار می‌گویند دیگر نگوید مالیات شهر ناعادلانه است.' },
        why: { en: 'The 1st Amendment protects free speech, even speech against the government.', es: 'La Primera Enmienda protege la libertad de expresión, incluso contra el gobierno.', fa: 'متمم اول از آزادی بیان محافظت می‌کند، حتی گپ زدن علیه حکومت.' } },
      { bin: 'a1', t: { en: 'A town rule says every family must go to one church.', es: 'Una regla del pueblo dice que cada familia debe ir a una sola iglesia.', fa: 'یک قانون شهر می‌گوید هر خانواده باید به یک کلیسای مشخص برود.' },
        why: { en: 'The 1st Amendment protects freedom of religion. Government cannot choose your faith.', es: 'La Primera Enmienda protege la libertad de religión. El gobierno no elige tu fe.', fa: 'متمم اول از آزادی دین محافظت می‌کند. حکومت دین تو را انتخاب نمی‌کند.' } },
      { bin: 'a2', t: { en: 'Ana, a farmer, wants to keep a hunting rifle in her home.', es: 'Ana, una agricultora, quiere tener un rifle de caza en su casa.', fa: 'آنا، یک دهقان، می‌خواهد یک تفنگ شکاری در خانه‌اش نگه دارد.' },
        why: { en: 'The 2nd Amendment protects the right of the people to keep and bear arms.', es: 'La Segunda Enmienda protege el derecho del pueblo a tener y portar armas.', fa: 'متمم دوم از حق مردم برای نگه داشتن و حمل سلاح محافظت می‌کند.' } },
      { bin: 'a4', t: { en: 'Officers want to search a family\'s house with no warrant and no reason.', es: 'Unos oficiales quieren registrar una casa sin orden y sin razón.', fa: 'مأموران می‌خواهند خانهٔ یک خانواده را بدون حکم و بدون دلیل تلاشی کنند.' },
        why: { en: 'The 4th Amendment stops unreasonable searches. Officers usually need a [[warrant|warrant]] from a judge.', es: 'La Cuarta Enmienda impide registros sin razón. Casi siempre se necesita una [[warrant|orden]] de un juez.', fa: 'متمم چهارم جلوی تلاشی بی‌دلیل را می‌گیرد. معمولاً [[warrant|حکم تلاشی]] از قاضی لازم است.' } },
      { bin: 'a5', t: { en: 'A man on trial does not want to answer questions that hurt his own case.', es: 'Un hombre en juicio no quiere responder preguntas que dañan su propio caso.', fa: 'مردی در محاکمه نمی‌خواهد به سوال‌هایی جواب بدهد که به ضرر خودش است.' },
        why: { en: 'The 5th Amendment says you do not have to be a witness against yourself.', es: 'La Quinta Enmienda dice que no tienes que ser testigo en tu propia contra.', fa: 'متمم پنجم می‌گوید لازم نیست علیه خودت شاهد باشی.' } },
      { bin: 'a5', t: { en: 'A woman was found not guilty. Now the town wants to try her again.', es: 'Una mujer fue declarada inocente. Ahora el pueblo quiere juzgarla otra vez.', fa: 'یک زن بی‌گناه شناخته شد. حالا شهر می‌خواهد او را دوباره محاکمه کند.' },
        why: { en: 'The 5th Amendment bans [[double jeopardy|double jeopardy]]: no second trial for the same crime.', es: 'La Quinta Enmienda prohíbe el [[double jeopardy|doble juicio]]: no hay otro juicio por el mismo delito.', fa: 'متمم پنجم [[double jeopardy|دو بار محاکمه]] را منع می‌کند: برای یک جرم محاکمهٔ دوم نیست.' } },
      { bin: 'a6', t: { en: 'A man has waited in jail two years, with no trial and no lawyer.', es: 'Un hombre lleva dos años en la cárcel, sin juicio y sin abogado.', fa: 'مردی دو سال در زندان منتظر مانده، بدون محاکمه و بدون وکیل.' },
        why: { en: 'The 6th Amendment promises a speedy, public trial, a lawyer and a jury.', es: 'La Sexta Enmienda promete un juicio rápido y público, un abogado y un jurado.', fa: 'متمم ششم وعدهٔ محاکمهٔ زود و علنی، وکیل و هیئت منصفه را می‌دهد.' } },
      { bin: 'a8', t: { en: 'For stealing one apple, a judge sets bail so high no one could pay.', es: 'Por robar una manzana, un juez pone una fianza tan alta que nadie puede pagar.', fa: 'برای دزدیدن یک سیب، قاضی ضمانت را آنقدر بلند می‌گذارد که هیچ کس پرداخته نمی‌تواند.' },
        why: { en: 'The 8th Amendment bans bail that is too high and cruel and unusual punishment.', es: 'La Octava Enmienda prohíbe fianzas demasiado altas y castigos crueles e inusuales.', fa: 'متمم هشتم ضمانت خیلی بلند و جزای ظالمانه و غیرعادی را منع می‌کند.' } }
    ],
    success: { en: 'Every problem found its right! Now the town knows what protects it.', es: '¡Cada problema encontró su derecho! Ahora el pueblo sabe qué lo protege.', fa: 'هر مشکل حق خودش را پیدا کرد! حالا شهر می‌داند چه چیز از آن محافظت می‌کند.' }
  },

  boss: {
    at: [22, 17],
    stat: 'hei',
    need: 3,
    name: { en: 'The Shushing Grump', es: 'El Gruñón Silenciador', fa: 'غرغروی خاموش‌کن' },
    appear: { en: 'The Shushing Grump is hiding in the fog by the James River!', es: '¡El Gruñón Silenciador se esconde en la niebla junto al río James!', fa: 'غرغروی خاموش‌کن در مه کنار دریای جیمز پنهان است!' },
    taunt: { en: 'Rights? Shhh! No speaking, no newspapers, no lawyers. Just do what I say!', es: '¿Derechos? ¡Shhh! Nada de hablar, ni periódicos, ni abogados. ¡Solo haz lo que digo!', fa: 'حقوق؟ هیس! نه گپ، نه اخبار، نه وکیل. فقط هر چه می‌گویم بکن!' },
    win: { en: 'The fog lifts off the river. Charter page 2.2 floats down into your hands!', es: 'La niebla se va del río. ¡La página 2.2 de la carta cae en tus manos!', fa: 'مه از روی دریا کنار می‌رود. صفحهٔ ۲.۲ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which two Virginians spoke against the Constitution because it had no bill of rights?', es: '¿Qué dos virginianos hablaron contra la Constitución porque no tenía carta de derechos?', fa: 'کدام دو نفر ویرجینیایی مخالف قانون اساسی بودند، چون منشور حقوق نداشت؟' },
        choices: [
          { en: 'George Mason and Patrick Henry', es: 'George Mason y Patrick Henry', fa: 'جورج میسن و پاتریک هنری' },
          { en: 'James Madison and John Marshall', es: 'James Madison y John Marshall', fa: 'جیمز مدیسن و جان مارشال' },
          { en: 'The British king and his army', es: 'El rey británico y su ejército', fa: 'پادشاه انگلیس و اردویش' },
          { en: 'Two printers from the market', es: 'Dos impresores del mercado', fa: 'دو چاپ‌کار از بازار' }],
        answer: 0,
        why: { en: 'Mason and Henry were Anti-Federalists. Madison and Marshall were Federalists who supported it.', es: 'Mason y Henry eran antifederalistas. Madison y Marshall eran federalistas que la apoyaban.', fa: 'میسن و هنری ضد فدرالیست بودند. مدیسن و مارشال فدرالیست و موافق آن بودند.' } },
      { q: { en: 'How did Virginia vote on the Constitution in June 1788?', es: '¿Cómo votó Virginia sobre la Constitución en junio de 1788?', fa: 'ویرجینیا در جون ۱۷۸۸ به قانون اساسی چطور رأی داد؟' },
        choices: [
          { en: 'Yes, 89 to 79', es: 'Sí, 89 a 79', fa: 'بله، ۸۹ در برابر ۷۹' },
          { en: 'No, 79 to 89', es: 'No, 79 a 89', fa: 'نه، ۷۹ در برابر ۸۹' },
          { en: 'Yes, every vote', es: 'Sí, todos los votos', fa: 'بله، همهٔ رأی‌ها' },
          { en: 'No vote at all', es: 'No hubo votación', fa: 'هیچ رأی‌گیری نشد' }],
        answer: 0,
        why: { en: 'Virginia ratified it on June 25, 1788, by 89 to 79. It was close!', es: 'Virginia la ratificó el 25 de junio de 1788, 89 a 79. ¡Fue muy reñido!', fa: 'ویرجینیا در ۲۵ جون ۱۷۸۸ با ۸۹ در برابر ۷۹ آن را تصویب کرد. خیلی نزدیک بود!' } },
      { q: { en: 'What are the first 10 amendments to the Constitution called?', es: '¿Cómo se llaman las primeras 10 enmiendas de la Constitución?', fa: '۱۰ متمم اول قانون اساسی چه نام دارند؟' },
        choices: [
          { en: 'The Bill of Rights', es: 'La Carta de Derechos', fa: 'منشور حقوق' },
          { en: 'The Articles of Confederation', es: 'Los Artículos de la Confederación', fa: 'مواد کنفدراسیون' },
          { en: 'The Declaration of Independence', es: 'La Declaración de Independencia', fa: 'اعلامیهٔ استقلال' },
          { en: 'The Supremacy Clause', es: 'La Cláusula de Supremacía', fa: 'مادهٔ برتری' }],
        answer: 0,
        why: { en: 'The first 10 amendments are the Bill of Rights. They were ratified in 1791.', es: 'Las primeras 10 enmiendas son la Carta de Derechos. Se ratificaron en 1791.', fa: '۱۰ متمم اول منشور حقوق است. در ۱۷۹۱ تصویب شدند.' } },
      { q: { en: 'Which Virginia paper from 1776 was a model for the Bill of Rights?', es: '¿Qué documento de Virginia de 1776 fue un modelo para la Carta de Derechos?', fa: 'کدام سند ویرجینیا از سال ۱۷۷۶ نمونهٔ منشور حقوق بود؟' },
        choices: [
          { en: 'Mason\'s Declaration of Rights', es: 'La Declaración de Derechos de Mason', fa: 'اعلامیهٔ حقوق میسن' },
          { en: 'The Articles of Confederation', es: 'Los Artículos de la Confederación', fa: 'مواد کنفدراسیون' },
          { en: 'The Treaty of Paris of 1783', es: 'El Tratado de París de 1783', fa: 'معاهدهٔ پاریس در ۱۷۸۳' },
          { en: 'A letter from the British king', es: 'Una carta del rey británico', fa: 'یک نامه از پادشاه انگلیس' }],
        answer: 0,
        why: { en: 'George Mason wrote the Virginia Declaration of Rights in 1776. Madison used it as a model.', es: 'George Mason escribió la Declaración de Derechos de Virginia en 1776. Madison la usó de modelo.', fa: 'جورج میسن اعلامیهٔ حقوق ویرجینیا را در ۱۷۷۶ نوشت. مدیسن آن را نمونه گرفت.' } },
      { q: { en: 'Which freedoms does the 1st Amendment protect?', es: '¿Qué libertades protege la Primera Enmienda?', fa: 'متمم اول از کدام آزادی‌ها محافظت می‌کند؟' },
        choices: [
          { en: 'Speech, religion, press, assembly, petition', es: 'Expresión, religión, prensa, reunión, petición', fa: 'بیان، دین، مطبوعات، اجتماع، عریضه' },
          { en: 'A speedy trial, a lawyer and a jury', es: 'Un juicio rápido, un abogado y un jurado', fa: 'محاکمهٔ زود، وکیل و هیئت منصفه' },
          { en: 'No searches of a home without a warrant', es: 'Ningún registro de una casa sin orden', fa: 'هیچ تلاشی خانه بدون حکم تلاشی' },
          { en: 'No cruel punishment and no huge bail', es: 'Ningún castigo cruel ni fianza enorme', fa: 'نه جزای ظالمانه و نه ضمانت خیلی بلند' }],
        answer: 0,
        why: { en: 'The 1st Amendment protects speech, religion, the press, assembly and [[petition|petition]].', es: 'La Primera Enmienda protege la expresión, la religión, la prensa, la reunión y la [[petition|petición]].', fa: 'متمم اول از بیان، دین، مطبوعات، اجتماع و [[petition|عریضه]] محافظت می‌کند.' } },
      { q: { en: 'Officers want to search your home. Which amendment says they usually need a warrant?', es: 'Unos oficiales quieren registrar tu casa. ¿Qué enmienda dice que casi siempre necesitan una orden?', fa: 'مأموران می‌خواهند خانه‌ات را تلاشی کنند. کدام متمم می‌گوید معمولاً حکم تلاشی لازم دارند؟' },
        choices: [
          { en: 'The 4th Amendment', es: 'La Cuarta Enmienda', fa: 'متمم چهارم' },
          { en: 'The 1st Amendment', es: 'La Primera Enmienda', fa: 'متمم اول' },
          { en: 'The 2nd Amendment', es: 'La Segunda Enmienda', fa: 'متمم دوم' },
          { en: 'The 8th Amendment', es: 'La Octava Enmienda', fa: 'متمم هشتم' }],
        answer: 0,
        why: { en: 'The 4th Amendment protects you from unreasonable searches and seizures of your home and things.', es: 'La Cuarta Enmienda te protege de registros y confiscaciones sin razón de tu casa y tus cosas.', fa: 'متمم چهارم تو را از تلاشی و ضبط بی‌دلیل خانه و چیزهایت محافظت می‌کند.' } },
      { q: { en: 'A person is found not guilty. Can they be tried again for the same crime?', es: 'Una persona es declarada inocente. ¿Pueden juzgarla otra vez por el mismo delito?', fa: 'یک نفر بی‌گناه شناخته شد. آیا می‌شود او را برای همان جرم دوباره محاکمه کرد؟' },
        choices: [
          { en: 'No, the 5th Amendment bans it', es: 'No, la Quinta Enmienda lo prohíbe', fa: 'نه، متمم پنجم آن را منع می‌کند' },
          { en: 'Yes, if the judge wants to', es: 'Sí, si el juez quiere', fa: 'بله، اگر قاضی بخواهد' },
          { en: 'Yes, but only one year later', es: 'Sí, pero solo un año después', fa: 'بله، اما فقط یک سال بعد' },
          { en: 'No, the 2nd Amendment bans it', es: 'No, la Segunda Enmienda lo prohíbe', fa: 'نه، متمم دوم آن را منع می‌کند' }],
        answer: 0,
        why: { en: 'The 5th Amendment bans double jeopardy. It also gives [[due process|due process]]: fair rules before punishment.', es: 'La Quinta Enmienda prohíbe el doble juicio. También da el [[due process|debido proceso]]: reglas justas antes de castigar.', fa: 'متمم پنجم دو بار محاکمه را منع می‌کند. [[due process|روند عادلانهٔ قانونی]] را هم می‌دهد.' } },
      { q: { en: 'Which amendment bans cruel and unusual punishment and bail that is too high?', es: '¿Qué enmienda prohíbe los castigos crueles e inusuales y las fianzas muy altas?', fa: 'کدام متمم جزای ظالمانه و غیرعادی و ضمانت خیلی بلند را منع می‌کند؟' },
        choices: [
          { en: 'The 8th Amendment', es: 'La Octava Enmienda', fa: 'متمم هشتم' },
          { en: 'The 6th Amendment', es: 'La Sexta Enmienda', fa: 'متمم ششم' },
          { en: 'The 4th Amendment', es: 'La Cuarta Enmienda', fa: 'متمم چهارم' },
          { en: 'The 1st Amendment', es: 'La Primera Enmienda', fa: 'متمم اول' }],
        answer: 0,
        why: { en: 'The 8th Amendment bans cruel and unusual punishment, too-high bail and too-high fines.', es: 'La Octava Enmienda prohíbe castigos crueles e inusuales, fianzas y multas demasiado altas.', fa: 'متمم هشتم جزای ظالمانه و غیرعادی، ضمانت و جریمهٔ خیلی بلند را منع می‌کند.' } }
    ]
  },

  learned: [
    { en: 'In 1788, Virginia voted yes on the Constitution, 89 to 79, and asked for [[amendment|amendments]].', es: 'En 1788, Virginia votó que sí a la Constitución, 89 a 79, y pidió [[amendment|enmiendas]].', fa: 'در ۱۷۸۸، ویرجینیا با ۸۹ در برابر ۷۹ به قانون اساسی بله گفت و [[amendment|متمم‌ها]] را خواست.' },
    { en: 'James Madison wrote the [[bill of rights|Bill of Rights]], the first 10 amendments, ratified in 1791.', es: 'James Madison escribió la [[bill of rights|Carta de Derechos]], las primeras 10 enmiendas, ratificadas en 1791.', fa: 'جیمز مدیسن [[bill of rights|منشور حقوق]] را نوشت، ۱۰ متمم اول، که در ۱۷۹۱ تصویب شد.' },
    { en: 'It protects speech, religion and the press, and fair trials for people accused of crimes.', es: 'Protege la expresión, la religión y la prensa, y juicios justos para los acusados de delitos.', fa: 'از بیان، دین و مطبوعات، و محاکمهٔ عادلانه برای متهمان جرم محافظت می‌کند.' }
  ],
  reflect: {
    q: { en: 'Which right in the Bill of Rights matters most in your own life? Why?', es: '¿Qué derecho de la Carta de Derechos importa más en tu vida? ¿Por qué?', fa: 'کدام حق در منشور حقوق در زندگی خودت از همه مهم‌تر است؟ چرا؟' },
    starter: { en: 'The right that matters most to me is', es: 'El derecho que más me importa es', fa: 'حقی که برای من از همه مهم‌تر است' }
  }
};
