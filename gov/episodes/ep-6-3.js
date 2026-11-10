/* CIVICWALKER · Episode 6.3 · The President's Tools (Executive Orders and the President's Powers)
   Washington, DC, today. North is up. Top: Lafayette Park, then Pennsylvania Avenue and the White House fence.
   West: the Eisenhower Executive Office Building (EEOB), then West Executive Avenue running north-south.
   Middle: the West Wing (the press briefing room and a row of staff offices), the Rose Garden, then the
   residence (the White House itself). South: the South Lawn with its fountain, E Street, and the Ellipse park.
   No real President is named or shown; every example is invented, except Lincoln (1863) and Truman (1948).
   The charter stone: a problem arrives (a law already passed; agencies ask how to carry it out). The student visits
   four flags (executive order, bill, treaty, pardon), plants the flag on the right tool and backs it up. */
window.EPISODE = {
  id: '6.3',
  realm: 6,
  sol: 'GOVT',
  title: { en: 'The President\'s Tools', es: 'Las herramientas del presidente', fa: 'ابزارهای رئیس جمهور' },
  place: { en: 'The West Wing, today', es: 'El Ala Oeste, hoy', fa: 'بال غربی، امروز' },
  intro: [
    { en: 'The Grump tore the page about the President\'s tools. Now nobody knows which to use.',
      es: 'El Gruñón rompió la página sobre las herramientas del presidente. Ahora nadie sabe cuál usar.',
      fa: 'غرغرو صفحهٔ ابزارهای رئیس جمهور را پاره کرد. حالا هیچ کس نمی‌داند کدام ابزار را به کار ببرد.' },
    { en: 'Talk to the 3 people here, then fix the charter stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra de la carta.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را درست کن.' }
  ],
  weather: { sky: 'drizzle', time: 'day' },
  /* cut scenes: the White House on the world map (no timeline in this game) */
  scenes: {
    at: [-77.04, 38.90],
    start: [
      { en: 'The White House is in Washington, DC. The President lives and works here.',
        es: 'La Casa Blanca está en Washington, D. C. El presidente vive y trabaja aquí.',
        fa: 'کاخ سفید در واشنگتن دی‌سی است. رئیس جمهور اینجا زندگی و کار می‌کند.' },
      { en: 'The West Wing holds the President\'s office and many staff offices.',
        es: 'El Ala Oeste tiene la oficina del presidente y muchas oficinas del personal.',
        fa: 'بال غربی دفتر رئیس جمهور و دفترهای زیاد کارمندان را دارد.' },
      { en: 'The President leads the executive branch. It carries out the laws.',
        es: 'El presidente dirige el poder ejecutivo. Este poder hace cumplir las leyes.',
        fa: 'رئیس جمهور قوهٔ اجرائیه را رهبری می‌کند. این قوه قانون‌ها را اجرا می‌کند.' }
    ],
    page: { en: 'Lincoln\'s Emancipation Proclamation, in 1863, was an executive order.',
      es: 'La Proclamación de Emancipación de Lincoln, en 1863, fue una orden ejecutiva.',
      fa: 'اعلامیهٔ آزادی بردگان لینکن، در سال ۱۸۶۳، یک فرمان اجرایی بود.' },
    guess: {
      q: { en: 'Can the President make any rule at all with an executive order?', es: '¿Puede el presidente hacer cualquier regla con una orden ejecutiva?', fa: 'آیا رئیس جمهور با فرمان اجرایی هر قانونی را ساخته می‌تواند؟' },
      choices: [
        { t: { en: '📜 No, it has limits', es: '📜 No, tiene límites', fa: '📜 نه، حد دارد' }, ok: true },
        { t: { en: '👑 Yes, any rule at all', es: '👑 Sí, cualquier regla', fa: '👑 بله، هر قانونی' } }
      ],
      why: { en: 'An executive order must follow the Constitution and the laws. Courts can strike it down.', es: 'Una orden ejecutiva debe seguir la Constitución y las leyes. Los tribunales pueden anularla.', fa: 'فرمان اجرایی باید از قانون اساسی و قانون‌ها پیروی کند. محکمه‌ها می‌توانند آن را لغو کنند.' }
    },
    next: {
      q: { en: 'Next: the year 1803. Can the Supreme Court strike down a law of Congress?', es: 'Ahora: el año 1803. ¿Puede la Corte Suprema anular una ley del Congreso?', fa: 'بعدی: سال ۱۸۰۳. آیا ستره محکمه می‌تواند قانون کانگرس را لغو کند؟' },
      choices: [
        { t: { en: 'Yes, it can', es: 'Sí, puede', fa: 'بله، می‌تواند' }, ok: true },
        { t: { en: 'No, never', es: 'No, nunca', fa: 'نه، هرگز' } }
      ],
      why: { en: 'In Marbury v. Madison, the Court said it can strike down laws that break the Constitution.', es: 'En Marbury contra Madison, la Corte dijo que puede anular leyes que van contra la Constitución.', fa: 'در پروندهٔ ماربری علیه مدیسن، محکمه گفت می‌تواند قانون‌های خلاف قانون اساسی را لغو کند.' }
    }
  },
  /* houses: who works behind each door */
  houses: [
    { at: [5, 9], name: { en: 'Ms. Alvarez', es: 'Sra. Álvarez', fa: 'خانم الوارز' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#3a5a8a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is the Eisenhower Executive Office Building, next to the West Wing.', es: 'Este es el Edificio Eisenhower de Oficinas Ejecutivas, junto al Ala Oeste.', fa: 'این ساختمان دفترهای اجرایی آیزنهاور است، کنار بال غربی.' },
        { en: 'Many people who help the President work in this building.', es: 'Muchas personas que ayudan al presidente trabajan en este edificio.', fa: 'بسیاری از کسانی که به رئیس جمهور کمک می‌کنند در این ساختمان کار می‌کنند.' },
        { en: 'Long ago, it held the State, War and Navy Departments.', es: 'Hace mucho, aquí estaban los Departamentos de Estado, Guerra y Marina.', fa: 'خیلی پیش، وزارت خارجه، وزارت جنگ و وزارت بحریه اینجا بودند.' }
      ] },
    { at: [13, 9], name: { en: 'Mr. Park', es: 'Sr. Park', fa: 'آقای پارک' },
      look: { skin: 1, hair: '#120c08', shirt: '#2f2f2f', pants: '#4a4a4a', style: 'short' },
      lines: [
        { en: 'This is the press briefing room. I run a news camera here.', es: 'Esta es la sala de prensa. Aquí manejo una cámara de noticias.', fa: 'این اتاق خبر است. من اینجا کمرهٔ خبر را می‌چلانم.' },
        { en: 'The press secretary answers reporters\' questions for the President.', es: 'El secretario de prensa responde las preguntas de los periodistas por el presidente.', fa: 'سخنگو از طرف رئیس جمهور به سوال‌های خبرنگاران جواب می‌دهد.' },
        { en: 'Big news today: the President may [[veto|veto]], or reject, a bill.', es: 'Gran noticia hoy: el presidente quizá [[veto|vete]], o rechace, un proyecto de ley.', fa: 'خبر بزرگ امروز: شاید رئیس جمهور یک لایحه را [[veto|وتو]] یعنی رد کند.' }
      ] },
    { at: [16, 9], name: { en: 'Dana', es: 'Dana', fa: 'دانا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#8a2a3a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I work in a tiny office in this row of staff offices.', es: 'Trabajo en una oficina muy pequeña en esta fila de oficinas.', fa: 'من در یک دفتر خیلی کوچک در این ردیف دفترها کار می‌کنم.' },
        { en: 'The President picks judges and Cabinet heads. The Senate must [[confirm|confirm]] them.', es: 'El presidente elige jueces y jefes del Gabinete. El Senado debe [[confirm|confirmarlos]].', fa: 'رئیس جمهور قاضی‌ها و رئیسان کابینه را انتخاب می‌کند. سنا باید آن‌ها را [[confirm|تأیید]] کند.' },
        { en: 'The President can also [[pardon|pardon]], or forgive, a federal crime.', es: 'El presidente también puede [[pardon|indultar]], o perdonar, un delito federal.', fa: 'رئیس جمهور همچنین می‌تواند یک جرم فدرال را [[pardon|عفو]] کند.' }
      ] },
    { at: [27, 9], name: { en: 'Mr. Brooks', es: 'Sr. Brooks', fa: 'آقای بروکس' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#1a1a2a', pants: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'Welcome! I guide visitors in the White House, where the President lives.', es: '¡Bienvenido! Guío a los visitantes en la Casa Blanca, donde vive el presidente.', fa: 'خوش آمدی! من در کاخ سفید، جایی که رئیس جمهور زندگی می‌کند، رهنمای مهمان‌ها هستم.' },
        { en: 'John Adams was the first President to live here, in 1800.', es: 'John Adams fue el primer presidente que vivió aquí, en 1800.', fa: 'جان ادمز اولین رئیس جمهوری بود که در سال ۱۸۰۰ اینجا زندگی کرد.' },
        { en: 'Presidents come and go. The house belongs to the people.', es: 'Los presidentes vienen y van. La casa es del pueblo.', fa: 'رئیس جمهورها می‌آیند و می‌روند. این خانه مال مردم است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 1-3): Lafayette Park (trees T, flowers). y 4: Pennsylvania Avenue (l). y 5: the White House fence (F)
     with three gates. West: the EEOB (J over h, door 5,9), then West Executive Avenue (l, x 10).
     Middle: the West Wing (doors: press room 13,9 · staff offices 16,9), the Rose Garden (,) and the residence
     (door 27,9). South: the South Lawn with the fountain (O), E Street (y 15) and the Ellipse park (: loop). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT',
    'T..T...,,,.....T......,,,..T...T',
    'T.....T....x........T.......T..T',
    'T..T......,,,....T......,,,....T',
    'TllllllllllllllllllllllllllllllT',
    'T.........l.FFFF.FFFFFFFFFF.FFFT',
    'T.JJJJJJJJl....................T',
    'T.JJJJJJJJl.JJJJJJ,,,,,,JJJJJJJT',
    'T.JJJJJJJJl.JJJJJJ,,,,,,JJJJJJJT',
    'T.hhhdhhhhl.hdhhdh,,,,,,hhhdhhhT',
    'T.........l.......,,,,,,.......T',
    'T...T.....l..T....,,Y,,,....T..T',
    'T.........l....................T',
    'T..T......l........O...........T',
    'T.........l....................T',
    'TllllllllllllllllllllllllllllllT',
    'T.T...........::::::.........T.T',
    'T.....T.....::......::....T....T',
    'T..x........:........:.........T',
    'T.....T.....::......::....T....T',
    'T.T...........::::::.........T.T',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT'
  ],
  start: [16, 4],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [5, 13], at: [5, 16], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps south, across E Street.', es: 'Desde esta nota, camina 3 pasos al sur, cruzando la calle E.', fa: 'از این یادداشت، ۳ قدم به جنوب برو، آن طرف سرک ای.' },
      text: { en: 'A feather pen! Long ago, Presidents signed their papers with pens like this.', es: '¡Una pluma de ave! Hace mucho, los presidentes firmaban sus papeles con plumas así.', fa: 'یک قلم پَر! خیلی پیش، رئیس جمهورها با چنین قلم‌هایی کاغذهایشان را امضا می‌کردند.' } },
    { clueAt: [24, 10], at: [24, 12], decor: 'flower',
      clue: { en: 'From this note, walk 2 steps south, onto the South Lawn.', es: 'Desde esta nota, camina 2 pasos al sur, hacia el Jardín Sur.', fa: 'از این یادداشت، ۲ قدم به جنوب برو، روی چمن جنوبی.' },
      text: { en: 'A rose from the Rose Garden! Presidents give speeches and sign papers there.', es: '¡Una rosa del Jardín de las Rosas! Allí los presidentes dan discursos y firman papeles.', fa: 'یک گل گلاب از باغ گلاب! رئیس جمهورها آنجا سخنرانی می‌کنند و کاغذ امضا می‌کنند.' } }
  ],

  words: {
    'executive order': { en: 'a rule from the President telling the executive branch how to carry out laws', es: 'una regla del presidente que le dice al poder ejecutivo cómo cumplir las leyes', fa: 'دستوری از رئیس جمهور که به قوهٔ اجرائیه می‌گوید قانون‌ها را چطور اجرا کند' },
    'executive branch': { en: 'the President and the agencies that carry out the laws', es: 'el presidente y las agencias que hacen cumplir las leyes', fa: 'رئیس جمهور و اداره‌هایی که قانون‌ها را اجرا می‌کنند' },
    agency: { en: 'a part of the federal government that does one job, like parks or mail', es: 'una parte del gobierno federal que hace un trabajo, como parques o correo', fa: 'بخشی از حکومت فدرال که یک کار را انجام می‌دهد، مثل پارک‌ها یا پُست' },
    veto: { en: 'when the President says no to a bill', es: 'cuando el presidente dice que no a un proyecto de ley', fa: 'وقتی رئیس جمهور به یک لایحه «نه» می‌گوید' },
    treaty: { en: 'a written deal with another country; two-thirds of the Senate must approve it', es: 'un acuerdo escrito con otro país; dos tercios del Senado deben aprobarlo', fa: 'یک توافق نوشته‌شده با کشور دیگر؛ دو سوم سنا باید آن را تأیید کند' },
    'executive agreement': { en: 'a deal between the President and another country\'s leader; no Senate vote', es: 'un acuerdo entre el presidente y el líder de otro país; sin voto del Senado', fa: 'توافقی میان رئیس جمهور و رهبر کشور دیگر؛ بدون رأی سنا' },
    pardon: { en: 'to forgive a person for a federal crime', es: 'perdonar a una persona por un delito federal', fa: 'بخشیدن یک نفر برای یک جرم فدرال' },
    confirm: { en: 'to vote yes on a person the President picked', es: 'votar que sí a una persona que eligió el presidente', fa: 'رأی «بله» دادن به کسی که رئیس جمهور انتخاب کرده' },
    'strike down': { en: 'when a court says a rule breaks the Constitution, so it ends', es: 'cuando un tribunal dice que una regla va contra la Constitución y la anula', fa: 'وقتی محکمه می‌گوید یک قانون خلاف قانون اساسی است، پس لغو می‌شود' },
    bill: { en: 'an idea for a law; Congress must pass it', es: 'una idea para una ley; el Congreso debe aprobarla', fa: 'فکری برای یک قانون؛ کانگرس باید آن را تصویب کند' }
  },

  npcs: [
    {
      x: 14, y: 6,
      name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      role: { en: 'Press aide', es: 'Asistente de prensa', fa: 'دستیار خبری' },
      look: { skin: 3, hair: '#3a2416', shirt: '#2f6f9a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'Hello! I help the press team. Today we explain an [[executive order|executive order]].', es: '¡Hola! Ayudo al equipo de prensa. Hoy explicamos una [[executive order|orden ejecutiva]].', fa: 'سلام! من به تیم خبری کمک می‌کنم. امروز یک [[executive order|فرمان اجرایی]] را شرح می‌دهیم.' },
        { en: 'It is a rule from the President to the [[executive branch|executive branch]].', es: 'Es una regla del presidente para el [[executive branch|poder ejecutivo]].', fa: 'این دستوری از رئیس جمهور برای [[executive branch|قوهٔ اجرائیه]] است.' },
        { en: 'It tells federal [[agency|agencies]] how to carry out the laws.', es: 'Les dice a las [[agency|agencias]] federales cómo cumplir las leyes.', fa: 'به [[agency|اداره‌های]] فدرال می‌گوید قانون‌ها را چطور اجرا کنند.' },
        { en: 'It has the force of law. But it must follow the Constitution.', es: 'Tiene fuerza de ley. Pero debe seguir la Constitución.', fa: 'قدرت قانون را دارد. اما باید از قانون اساسی پیروی کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Who must follow an executive order?', es: '¿Quién debe seguir una orden ejecutiva?', fa: 'کی باید از فرمان اجرایی پیروی کند؟' },
        choices: [
          { ok: true, t: { en: 'Workers in federal agencies', es: 'Los trabajadores de agencias federales', fa: 'کارمندان اداره‌های فدرال' },
            why: { en: 'Yes. An executive order tells the executive branch, like federal agencies, how to do its job.', es: 'Sí. Una orden ejecutiva le dice al poder ejecutivo, como las agencias federales, cómo hacer su trabajo.', fa: 'بله. فرمان اجرایی به قوهٔ اجرائیه، مثل اداره‌های فدرال، می‌گوید کارش را چطور انجام دهد.' } },
          { t: { en: 'Every lawmaker in each state', es: 'Cada legislador de cada estado', fa: 'هر قانون‌ساز در هر ایالت' },
            why: { en: 'No. States make their own laws. An executive order is for the federal executive branch.', es: 'No. Los estados hacen sus propias leyes. Una orden ejecutiva es para el poder ejecutivo federal.', fa: 'نه. ایالت‌ها قانون‌های خود را می‌سازند. فرمان اجرایی برای قوهٔ اجرائیهٔ فدرال است.' } },
          { t: { en: 'Members of the House and Senate', es: 'Los miembros de la Cámara y el Senado', fa: 'اعضای مجلس نمایندگان و سنا' },
            why: { en: 'No. Congress is a separate branch. The President cannot give orders to Congress.', es: 'No. El Congreso es otro poder. El presidente no puede darle órdenes al Congreso.', fa: 'نه. کانگرس یک قوهٔ جدا است. رئیس جمهور به کانگرس دستور داده نمی‌تواند.' } }
        ]
      }
    },
    {
      x: 20, y: 6,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Reporter', es: 'Periodista', fa: 'خبرنگار' },
      look: { skin: 4, hair: '#120c08', shirt: '#c07a3a', pants: '#3a3a3a', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am a reporter. My job is to ask hard questions.', es: 'Soy periodista. Mi trabajo es hacer preguntas difíciles.', fa: 'من خبرنگار هستم. کارم پرسیدن سوال‌های سخت است.' },
        { en: 'Executive orders have limits. A court can [[strike down|strike one down]].', es: 'Las órdenes ejecutivas tienen límites. Un tribunal puede [[strike down|anular una]].', fa: 'فرمان‌های اجرایی حد دارند. محکمه می‌تواند یکی را [[strike down|لغو کند]].' },
        { en: 'Congress can pass a law to change an order.', es: 'El Congreso puede aprobar una ley para cambiar una orden.', fa: 'کانگرس می‌تواند برای تغییر یک فرمان قانون تصویب کند.' },
        { en: 'And the next President can undo it with a new order.', es: 'Y el próximo presidente puede deshacerla con otra orden.', fa: 'و رئیس جمهور بعدی می‌تواند با یک فرمان نو آن را لغو کند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'An executive order breaks the Constitution. What can happen?', es: 'Una orden ejecutiva va contra la Constitución. ¿Qué puede pasar?', fa: 'یک فرمان اجرایی خلاف قانون اساسی است. چه می‌شود؟' },
        choices: [
          { ok: true, t: { en: 'A court can strike it down', es: 'Un tribunal puede anularla', fa: 'محکمه می‌تواند آن را لغو کند' },
            why: { en: 'Yes. Courts check the President. An order that breaks the Constitution can be struck down.', es: 'Sí. Los tribunales controlan al presidente. Una orden contra la Constitución puede ser anulada.', fa: 'بله. محکمه‌ها رئیس جمهور را کنترول می‌کنند. فرمان خلاف قانون اساسی لغو شده می‌تواند.' } },
          { t: { en: 'It must stay for ten years', es: 'Debe quedarse diez años', fa: 'باید ده سال باقی بماند' },
            why: { en: 'No. There is no ten-year rule. Courts, Congress or a later President can end an order.', es: 'No. No hay regla de diez años. Los tribunales, el Congreso o otro presidente pueden terminarla.', fa: 'نه. قاعدهٔ ده سال وجود ندارد. محکمه، کانگرس یا رئیس جمهور بعدی می‌تواند آن را ختم کند.' } },
          { t: { en: 'Only the governors can end it', es: 'Solo los gobernadores la terminan', fa: 'فقط والی‌ها آن را ختم می‌کنند' },
            why: { en: 'No. Governors lead states. Federal courts decide if an order breaks the Constitution.', es: 'No. Los gobernadores dirigen estados. Los tribunales federales deciden si una orden va contra la Constitución.', fa: 'نه. والی‌ها ایالت‌ها را رهبری می‌کنند. محکمه‌های فدرال تصمیم می‌گیرند که فرمان خلاف قانون اساسی است یا نه.' } }
        ]
      }
    },
    {
      x: 7, y: 12,
      name: { en: 'Mina', es: 'Mina', fa: 'مینا' },
      role: { en: 'Staff writer', es: 'Redactora', fa: 'نویسندهٔ دفتر' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#6a4a8a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I write drafts for the President\'s team. I know every tool.', es: 'Escribo borradores para el equipo del presidente. Conozco cada herramienta.', fa: 'من برای تیم رئیس جمهور پیش‌نویس می‌نویسم. هر ابزار را می‌شناسم.' },
        { en: 'The President can ask for a new law. Only Congress can pass a [[bill|bill]].', es: 'El presidente puede pedir una ley nueva. Solo el Congreso aprueba un [[bill|proyecto de ley]].', fa: 'رئیس جمهور می‌تواند قانون نو بخواهد. فقط کانگرس [[bill|لایحه]] را تصویب می‌کند.' },
        { en: 'A [[treaty|treaty]] is a deal with another country. Two-thirds of the Senate must approve.', es: 'Un [[treaty|tratado]] es un acuerdo con otro país. Dos tercios del Senado deben aprobarlo.', fa: '[[treaty|معاهده]] توافقی با کشور دیگر است. دو سوم سنا باید آن را تأیید کند.' },
        { en: 'An [[executive agreement|executive agreement]] is a deal with a leader. No Senate vote.', es: 'Un [[executive agreement|acuerdo ejecutivo]] es un pacto con un líder. Sin voto del Senado.', fa: '[[executive agreement|توافق اجرایی]] توافقی با یک رهبر است. رأی سنا لازم نیست.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'The President makes a treaty with another country. Who must approve it?', es: 'El presidente hace un tratado con otro país. ¿Quién debe aprobarlo?', fa: 'رئیس جمهور با کشور دیگر معاهده می‌بندد. کی باید آن را تأیید کند؟' },
        choices: [
          { ok: true, t: { en: 'Two-thirds of the Senate', es: 'Dos tercios del Senado', fa: 'دو سوم سنا' },
            why: { en: 'Yes. The President makes a treaty, and two-thirds of the Senate must approve it.', es: 'Sí. El presidente hace el tratado, y dos tercios del Senado deben aprobarlo.', fa: 'بله. رئیس جمهور معاهده می‌بندد و دو سوم سنا باید آن را تأیید کند.' } },
          { t: { en: 'Half of the House members', es: 'La mitad de los miembros de la Cámara', fa: 'نیم اعضای مجلس نمایندگان' },
            why: { en: 'No. The House does not vote on treaties. The Senate does.', es: 'No. La Cámara no vota los tratados. Los vota el Senado.', fa: 'نه. مجلس نمایندگان به معاهده رأی نمی‌دهد. سنا رأی می‌دهد.' } },
          { t: { en: 'All fifty state governors', es: 'Los cincuenta gobernadores estatales', fa: 'همهٔ پنجاه والی ایالت‌ها' },
            why: { en: 'No. States do not make treaties. The Senate approves them.', es: 'No. Los estados no hacen tratados. El Senado los aprueba.', fa: 'نه. ایالت‌ها معاهده نمی‌بندند. سنا آن را تأیید می‌کند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 11, y: 2, text: { en: 'LAFAYETTE PARK · A park across the street from the White House. People gather here to speak out.', es: 'PARQUE LAFAYETTE · Un parque frente a la Casa Blanca. La gente se reúne aquí para expresarse.', fa: 'پارک لافایت · پارکی روبروی کاخ سفید. مردم اینجا جمع می‌شوند تا نظر خود را بگویند.' } },
    { x: 3, y: 18, text: { en: 'THE ELLIPSE · A big oval park south of the White House, open to everyone.', es: 'LA ELIPSE · Un gran parque ovalado al sur de la Casa Blanca, abierto a todos.', fa: 'بیضی · یک پارک بزرگ بیضی‌شکل در جنوب کاخ سفید، باز برای همه.' } }
  ],

  /* the quest: Mr. Okafor the gardener (gold !) in the Rose Garden -> Ms. Rahimi, a visiting teacher in Lafayette
     Park -> Ruth the park ranger at the Ellipse wants the one paper the President can finish alone; three papers
     lie on the map: the executive order (west lawn by E Street), a treaty (east lawn), a judge pick (South Lawn) */
  quest: {
    stat: 'pla',
    title: { en: 'The Blown-Away Papers', es: 'Los papeles que voló el viento', fa: 'کاغذهایی که باد برد' },
    giver: {
      x: 21, y: 9,
      name: { en: 'Mr. Okafor', es: 'Sr. Okafor', fa: 'آقای اوکافور' },
      role: { en: 'Gardener', es: 'Jardinero', fa: 'باغبان' },
      look: { skin: 5, hair: '#1a1008', shirt: '#4a7a3a', pants: '#5a4630', hat: '#c0a060', style: 'short' },
      lines: [
        { en: 'A signing is set for this garden today. The wind blew the papers away!', es: 'Hoy hay una firma en este jardín. ¡El viento se llevó los papeles!', fa: 'امروز در این باغ امضا است. باد کاغذها را برد!' },
        { en: 'A teacher in Lafayette Park saw them fly. Go north, across the avenue.', es: 'Una maestra en el parque Lafayette los vio volar. Ve al norte, cruzando la avenida.', fa: 'یک معلم در پارک لافایت پرواز آن‌ها را دید. به شمال برو، آن طرف سرک.' }
      ],
      wait: { en: 'The teacher is in Lafayette Park, north across Pennsylvania Avenue.', es: 'La maestra está en el parque Lafayette, al norte, cruzando la avenida Pensilvania.', fa: 'معلم در پارک لافایت است، شمال، آن طرف سرک پنسیلوانیا.' },
      thanks: { en: 'The executive order is back! Now it can be signed. Thank you!', es: '¡La orden ejecutiva volvió! Ahora se puede firmar. ¡Gracias!', fa: 'فرمان اجرایی برگشت! حالا امضا شده می‌تواند. تشکر!' }
    },
    contact: {
      x: 5, y: 2,
      name: { en: 'Ms. Rahimi', es: 'Sra. Rahimi', fa: 'خانم رحیمی' },
      role: { en: 'Visiting teacher', es: 'Maestra de visita', fa: 'معلم مهمان' },
      look: { skin: 2, hair: '#120c08', shirt: '#d9542b', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My class came to see the White House. We study the President\'s tools.', es: 'Mi clase vino a ver la Casa Blanca. Estudiamos las herramientas del presidente.', fa: 'صنف من برای دیدن کاخ سفید آمده. ما ابزارهای رئیس جمهور را می‌خوانیم.' },
        { en: 'Lincoln\'s Emancipation Proclamation, in 1863, was an executive order.', es: 'La Proclamación de Emancipación de Lincoln, en 1863, fue una orden ejecutiva.', fa: 'اعلامیهٔ آزادی بردگان لینکن، در سال ۱۸۶۳، یک فرمان اجرایی بود.' },
        { en: 'In 1948, Truman ordered an end to segregation in the armed forces.', es: 'En 1948, Truman ordenó terminar la segregación en las fuerzas armadas.', fa: 'در سال ۱۹۴۸، ترومن دستور داد جدایی نژادی در قوای مسلح ختم شود.' },
        { en: 'The papers blew far south. Ask the park ranger at the Ellipse, past E Street.', es: 'Los papeles volaron lejos al sur. Pregunta a la guardaparques en la Elipse, pasando la calle E.', fa: 'کاغذها دور به جنوب رفتند. از محافظ پارک در بیضی، آن طرف سرک ای، بپرس.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 24, y: 18,
        name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
        role: { en: 'Park ranger', es: 'Guardaparques', fa: 'محافظ پارک' },
        look: { skin: 0, hair: '#c08040', shirt: '#7a8a4a', pants: '#5a4630', hat: '#6a5a30', style: 'bun' },
        lines: [
          { en: 'Three papers blew across the lawn. They landed all around here!', es: 'Tres papeles volaron por el césped. ¡Cayeron por todos lados aquí!', fa: 'سه کاغذ از روی چمن پرواز کرد. همه طرف اینجا افتادند!' }
        ]
      },
      q: { en: 'The signing needs a paper the President finishes alone, with no vote from Congress or the Senate.', es: 'La firma necesita un papel que el presidente termina solo, sin voto del Congreso ni del Senado.', fa: 'برای امضا کاغذی لازم است که رئیس جمهور تنها تمامش کند، بدون رأی کانگرس یا سنا.' },
      choices: [
        { ok: true, at: [3, 17], icon: '📜', t: { en: 'Executive order: how agencies carry out a law', es: 'Orden ejecutiva: cómo las agencias cumplen una ley', fa: 'فرمان اجرایی: اداره‌ها قانون را چطور اجرا کنند' },
          why: { en: 'Yes! The President signs an executive order alone. It must still follow the laws.', es: '¡Sí! El presidente firma una orden ejecutiva solo. Aun así debe seguir las leyes.', fa: 'بله! رئیس جمهور فرمان اجرایی را تنها امضا می‌کند. باز هم باید از قانون‌ها پیروی کند.' } },
        { at: [29, 12], icon: '🤝', t: { en: 'Treaty: a deal with a neighbor country', es: 'Tratado: un acuerdo con un país vecino', fa: 'معاهده: توافقی با یک کشور همسایه' },
          why: { en: 'Not alone. Two-thirds of the Senate must approve a treaty.', es: 'No solo. Dos tercios del Senado deben aprobar un tratado.', fa: 'تنها نه. دو سوم سنا باید معاهده را تأیید کند.' } },
        { at: [13, 12], icon: '⚖️', t: { en: 'Judge pick: a new federal court judge', es: 'Elección de juez: un juez federal nuevo', fa: 'انتخاب قاضی: یک قاضی نو برای محکمهٔ فدرال' },
          why: { en: 'Not alone. The Senate must confirm a new federal judge.', es: 'No solo. El Senado debe confirmar a un juez federal nuevo.', fa: 'تنها نه. سنا باید قاضی نوی فدرال را تأیید کند.' } }
      ],
      item: { icon: '📜', name: { en: 'The executive order, ready to sign', es: 'La orden ejecutiva, lista para firmar', fa: 'فرمان اجرایی، آماده برای امضا' } }
    }
  },

  scraps: [[1, 1], [30, 1], [1, 20]],
  smudges: [[23, 2], [8, 19]],

  challenge: {
    at: [20, 12],
    type: 'site', // in the world; the card version (claim) is the fallback
    // a flag for each tool: the order by the West Wing, the bill toward the Capitol (east), the treaty by the old
    // State Department building (EEOB), the pardon by the Ellipse
    spots: [[12, 10], [30, 13], [8, 10], [8, 18]],
    stat: 'pla',
    title: { en: 'Pick the right tool', es: 'Elige la herramienta correcta', fa: 'ابزار درست را انتخاب کن' },
    intro: { en: 'Congress passed a law: federal buildings must save energy. Agencies ask how. Plant the flag on the right tool.',
      es: 'El Congreso aprobó una ley: los edificios federales deben ahorrar energía. Las agencias preguntan cómo. Pon la bandera en la herramienta correcta.',
      fa: 'کانگرس قانونی تصویب کرد: ساختمان‌های فدرال باید انرژی صرفه کنند. اداره‌ها می‌پرسند چطور. بیرق را روی ابزار درست بگذار.' },
    options: [
      { icon: '📜', name: { en: 'An executive order', es: 'Una orden ejecutiva', fa: 'یک فرمان اجرایی' }, desc: { en: 'A rule from the President to federal agencies', es: 'Una regla del presidente para las agencias federales', fa: 'دستوری از رئیس جمهور برای اداره‌های فدرال' },
        result: { en: 'The order tells each agency how to save energy, as the law says. Courts can still check it.', es: 'La orden le dice a cada agencia cómo ahorrar energía, como dice la ley. Los tribunales aún pueden revisarla.', fa: 'فرمان به هر اداره می‌گوید چطور انرژی صرفه کند، همان طور که قانون می‌گوید. محکمه‌ها باز هم آن را بررسی می‌کنند.' } },
      { icon: '📝', name: { en: 'A new bill', es: 'Un proyecto de ley nuevo', fa: 'یک لایحهٔ نو' }, desc: { en: 'An idea for a new law. Congress must pass it.', es: 'Una idea para una ley nueva. El Congreso debe aprobarla.', fa: 'فکری برای یک قانون نو. کانگرس باید آن را تصویب کند.' },
        result: { en: 'Congress debates for months. But the law already exists, so a new one is not needed.', es: 'El Congreso debate por meses. Pero la ley ya existe, así que no hace falta otra.', fa: 'کانگرس ماه‌ها بحث می‌کند. اما قانون از قبل هست، پس قانون نو لازم نیست.' } },
      { icon: '🤝', name: { en: 'A treaty', es: 'Un tratado', fa: 'یک معاهده' }, desc: { en: 'A deal with another country. The Senate must approve.', es: 'Un acuerdo con otro país. El Senado debe aprobarlo.', fa: 'توافقی با کشور دیگر. سنا باید آن را تأیید کند.' },
        result: { en: 'No other country is part of this problem, so a treaty does not help.', es: 'Ningún otro país es parte de este problema, así que un tratado no ayuda.', fa: 'هیچ کشور دیگری در این مشکل نیست، پس معاهده کمک نمی‌کند.' } },
      { icon: '🕊️', name: { en: 'A pardon', es: 'Un indulto', fa: 'یک عفو' }, desc: { en: 'Forgives a person for a federal crime.', es: 'Perdona a una persona por un delito federal.', fa: 'یک نفر را برای جرم فدرال می‌بخشد.' },
        result: { en: 'No one broke a law here, so there is no one to pardon.', es: 'Aquí nadie violó una ley, así que no hay a quién indultar.', fa: 'اینجا هیچ کس قانون را نشکسته، پس کسی برای عفو نیست.' } }
    ],
    kinds: [
      { id: 'job', label: { en: 'It fits this problem', es: 'Sirve para este problema', fa: 'به این مشکل می‌خورد' } },
      { id: 'rule', label: { en: 'It follows the Constitution', es: 'Sigue la Constitución', fa: 'از قانون اساسی پیروی می‌کند' } }
    ],
    reasons: [
      { kind: 'job', fits: [0], t: { en: 'The law already exists. Agencies only need steps to carry it out.', es: 'La ley ya existe. Las agencias solo necesitan pasos para cumplirla.', fa: 'قانون از قبل هست. اداره‌ها فقط قدم‌هایی برای اجرای آن لازم دارند.' },
        why: { en: 'Right job. An executive order tells agencies how to carry out a law.', es: 'Es el trabajo correcto. Una orden ejecutiva dice a las agencias cómo cumplir una ley.', fa: 'کار درست. فرمان اجرایی به اداره‌ها می‌گوید قانون را چطور اجرا کنند.' } },
      { kind: 'job', fits: [], t: { en: 'We need a brand-new law, and fast.', es: 'Necesitamos una ley totalmente nueva, y rápido.', fa: 'یک قانون کاملاً نو لازم داریم، و زود.' },
        why: { en: 'No. Congress already passed the law. Agencies only ask how to carry it out.', es: 'No. El Congreso ya aprobó la ley. Las agencias solo preguntan cómo cumplirla.', fa: 'نه. کانگرس قانون را تصویب کرده. اداره‌ها فقط می‌پرسند چطور اجرایش کنند.' } },
      { kind: 'job', fits: [], t: { en: 'Another country must agree to save energy too.', es: 'Otro país también debe aceptar ahorrar energía.', fa: 'کشور دیگر هم باید قبول کند انرژی صرفه کند.' },
        why: { en: 'No. This problem is about federal buildings at home. No other country is part of it.', es: 'No. Este problema es sobre edificios federales del país. Ningún otro país es parte.', fa: 'نه. این مشکل دربارهٔ ساختمان‌های فدرال داخل کشور است. کشور دیگری در آن نیست.' } },
      { kind: 'job', fits: [], t: { en: 'Someone broke a federal law and needs forgiving.', es: 'Alguien violó una ley federal y necesita perdón.', fa: 'کسی قانون فدرال را شکسته و بخشش لازم دارد.' },
        why: { en: 'No. Nobody broke a law. The agencies just want to know how to follow it.', es: 'No. Nadie violó una ley. Las agencias solo quieren saber cómo seguirla.', fa: 'نه. هیچ کس قانون را نشکسته. اداره‌ها فقط می‌خواهند بدانند چطور از آن پیروی کنند.' } },
      { kind: 'rule', fits: [0], t: { en: 'It must follow the law and the Constitution. Courts can check it.', es: 'Debe seguir la ley y la Constitución. Los tribunales pueden revisarla.', fa: 'باید از قانون و قانون اساسی پیروی کند. محکمه‌ها می‌توانند بررسی‌اش کنند.' },
        why: { en: 'Yes. An executive order must follow the Constitution and the laws.', es: 'Sí. Una orden ejecutiva debe seguir la Constitución y las leyes.', fa: 'بله. فرمان اجرایی باید از قانون اساسی و قانون‌ها پیروی کند.' } },
      { kind: 'rule', fits: [1], t: { en: 'Both houses of Congress must vote yes first.', es: 'Las dos cámaras del Congreso deben votar que sí primero.', fa: 'هر دو مجلس کانگرس اول باید «بله» بگویند.' },
        why: { en: 'True for a bill. But the law already exists, so a new bill is not needed.', es: 'Es cierto para un proyecto de ley. Pero la ley ya existe, así que no hace falta otro.', fa: 'برای لایحه درست است. اما قانون از قبل هست، پس لایحهٔ نو لازم نیست.' } },
      { kind: 'rule', fits: [2], t: { en: 'Two-thirds of the Senate must approve it.', es: 'Dos tercios del Senado deben aprobarlo.', fa: 'دو سوم سنا باید آن را تأیید کند.' },
        why: { en: 'True for a treaty. But this problem has no other country in it.', es: 'Es cierto para un tratado. Pero en este problema no hay otro país.', fa: 'برای معاهده درست است. اما در این مشکل کشور دیگری نیست.' } },
      { kind: 'rule', fits: [3], t: { en: 'It works only for a person who broke a federal law.', es: 'Solo sirve para una persona que violó una ley federal.', fa: 'فقط برای کسی است که قانون فدرال را شکسته.' },
        why: { en: 'True for a pardon. But no one here broke a law.', es: 'Es cierto para un indulto. Pero aquí nadie violó una ley.', fa: 'برای عفو درست است. اما اینجا هیچ کس قانون را نشکسته.' } },
      { kind: 'rule', fits: [], t: { en: 'The President can order anything at all.', es: 'El presidente puede ordenar cualquier cosa.', fa: 'رئیس جمهور می‌تواند به هر چیزی دستور بدهد.' },
        why: { en: 'No. The President\'s power has limits: the Constitution, the laws and the courts.', es: 'No. El poder del presidente tiene límites: la Constitución, las leyes y los tribunales.', fa: 'نه. قدرت رئیس جمهور حد دارد: قانون اساسی، قانون‌ها و محکمه‌ها.' } }
    ],
    mismatch: { en: 'That reason does not back up the tool you picked.', es: 'Esa razón no apoya la herramienta que elegiste.', fa: 'این دلیل از ابزاری که انتخاب کردی پشتیبانی نمی‌کند.' },
    success: { en: 'Right tool! An [[executive order|executive order]] tells agencies how to carry out a law Congress passed.', es: '¡Herramienta correcta! Una [[executive order|orden ejecutiva]] dice a las agencias cómo cumplir una ley del Congreso.', fa: 'ابزار درست! [[executive order|فرمان اجرایی]] به اداره‌ها می‌گوید قانونی را که کانگرس تصویب کرده چطور اجرا کنند.' }
  },

  boss: {
    at: [16, 18],
    stat: 'pla',
    need: 3,
    name: { en: 'The Rule-Grabbing Grump', es: 'El Gruñón Acaparareglas', fa: 'غرغروی قانون‌قاپ' },
    appear: { en: 'The Rule-Grabbing Grump is hiding in the fog over the Ellipse!', es: '¡El Gruñón Acaparareglas se esconde en la niebla sobre la Elipse!', fa: 'غرغروی قانون‌قاپ در مه بالای بیضی پنهان است!' },
    taunt: { en: 'Orders! I will order everything! No courts, no Congress, just me!', es: '¡Órdenes! ¡Lo ordenaré todo! ¡Sin tribunales, sin Congreso, solo yo!', fa: 'فرمان! به همه چیز فرمان می‌دهم! نه محکمه، نه کانگرس، فقط من!' },
    win: { en: 'The fog lifts off the Ellipse. Charter page 6.3 floats down into your hands!', es: 'La niebla se va de la Elipse. ¡La página 6.3 de la carta cae en tus manos!', fa: 'مه از روی بیضی کنار می‌رود. صفحهٔ ۶.۳ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What is an executive order?', es: '¿Qué es una orden ejecutiva?', fa: 'فرمان اجرایی چیست؟' },
        choices: [
          { en: 'A rule from the President to agencies', es: 'Una regla del presidente a las agencias', fa: 'دستوری از رئیس جمهور به اداره‌ها' },
          { en: 'A law passed by both houses', es: 'Una ley aprobada por ambas cámaras', fa: 'قانونی که هر دو مجلس تصویب کرده' },
          { en: 'A court ruling about a crime', es: 'Una decisión de un tribunal sobre un delito', fa: 'حکم محکمه دربارهٔ یک جرم' },
          { en: 'A deal the President signs with a country', es: 'Un acuerdo que el presidente firma con un país', fa: 'توافقی که رئیس جمهور با یک کشور امضا می‌کند' }],
        answer: 0,
        why: { en: 'An executive order is a rule from the President telling the executive branch how to carry out laws.', es: 'Una orden ejecutiva es una regla del presidente que dice al poder ejecutivo cómo cumplir las leyes.', fa: 'فرمان اجرایی دستوری از رئیس جمهور است که به قوهٔ اجرائیه می‌گوید قانون‌ها را چطور اجرا کند.' } },
      { q: { en: 'An executive order must follow what?', es: '¿Qué debe seguir una orden ejecutiva?', fa: 'فرمان اجرایی باید از چه پیروی کند؟' },
        choices: [
          { en: 'The Constitution and the laws', es: 'La Constitución y las leyes', fa: 'قانون اساسی و قانون‌ها' },
          { en: 'Whatever the President wants', es: 'Lo que quiera el presidente', fa: 'هر چه رئیس جمهور بخواهد' },
          { en: 'The rules of each state', es: 'Las reglas de cada estado', fa: 'قانون‌های هر ایالت' },
          { en: 'Whatever reporters say on the news', es: 'Lo que digan los periodistas en las noticias', fa: 'هر چه خبرنگاران در خبر بگویند' }],
        answer: 0,
        why: { en: 'An executive order has the force of law, but it must follow the Constitution and the laws.', es: 'Una orden ejecutiva tiene fuerza de ley, pero debe seguir la Constitución y las leyes.', fa: 'فرمان اجرایی قدرت قانون دارد، اما باید از قانون اساسی و قانون‌ها پیروی کند.' } },
      { q: { en: 'How can Congress change an executive order?', es: '¿Cómo puede el Congreso cambiar una orden ejecutiva?', fa: 'کانگرس چطور می‌تواند یک فرمان اجرایی را تغییر دهد؟' },
        choices: [
          { en: 'Pass a law to change it', es: 'Aprobar una ley para cambiarla', fa: 'قانونی برای تغییرش تصویب کند' },
          { en: 'Give the order a pardon', es: 'Darle un indulto a la orden', fa: 'فرمان را عفو کند' },
          { en: 'Sign a treaty about it', es: 'Firmar un tratado sobre ella', fa: 'دربارهٔ آن معاهده امضا کند' },
          { en: 'Hold a new national election', es: 'Hacer una nueva elección nacional', fa: 'انتخابات نوی ملی برگزار کند' }],
        answer: 0,
        why: { en: 'Congress makes the laws. It can pass a law that changes an executive order.', es: 'El Congreso hace las leyes. Puede aprobar una ley que cambie una orden ejecutiva.', fa: 'کانگرس قانون می‌سازد. می‌تواند قانونی تصویب کند که فرمان اجرایی را تغییر دهد.' } },
      { q: { en: 'What can a later President do with an old executive order?', es: '¿Qué puede hacer otro presidente después con una orden ejecutiva vieja?', fa: 'رئیس جمهور بعدی با یک فرمان اجرایی کهنه چه کرده می‌تواند؟' },
        choices: [
          { en: 'Undo it with a new order', es: 'Deshacerla con otra orden', fa: 'با فرمان نو لغوش کند' },
          { en: 'Nothing; it lasts forever', es: 'Nada; dura para siempre', fa: 'هیچ؛ برای همیشه می‌ماند' },
          { en: 'Change it only by treaty', es: 'Cambiarla solo con un tratado', fa: 'فقط با معاهده تغییرش دهد' },
          { en: 'Ask all the states to vote on it', es: 'Pedir que todos los estados voten', fa: 'از همهٔ ایالت‌ها رأی بخواهد' }],
        answer: 0,
        why: { en: 'A later President can undo an executive order with a new one.', es: 'Otro presidente después puede deshacer una orden ejecutiva con una nueva.', fa: 'رئیس جمهور بعدی می‌تواند فرمان اجرایی را با یک فرمان نو لغو کند.' } },
      { q: { en: 'Which tool needs two-thirds of the Senate to approve it?', es: '¿Qué herramienta necesita la aprobación de dos tercios del Senado?', fa: 'کدام ابزار تأیید دو سوم سنا را لازم دارد؟' },
        choices: [
          { en: 'A treaty', es: 'Un tratado', fa: 'معاهده' },
          { en: 'A pardon', es: 'Un indulto', fa: 'عفو' },
          { en: 'An executive order', es: 'Una orden ejecutiva', fa: 'فرمان اجرایی' },
          { en: 'An executive agreement', es: 'Un acuerdo ejecutivo', fa: 'توافق اجرایی' }],
        answer: 0,
        why: { en: 'The President makes a treaty, and two-thirds of the Senate must approve it. An executive agreement needs no Senate vote.', es: 'El presidente hace un tratado y dos tercios del Senado deben aprobarlo. Un acuerdo ejecutivo no necesita voto.', fa: 'رئیس جمهور معاهده می‌بندد و دو سوم سنا باید تأییدش کند. توافق اجرایی رأی سنا نمی‌خواهد.' } },
      { q: { en: 'What does a presidential pardon do?', es: '¿Qué hace un indulto presidencial?', fa: 'عفو رئیس جمهور چه می‌کند؟' },
        choices: [
          { en: 'Forgives a federal crime', es: 'Perdona un delito federal', fa: 'یک جرم فدرال را می‌بخشد' },
          { en: 'Makes a new federal law', es: 'Hace una ley federal nueva', fa: 'یک قانون فدرال نو می‌سازد' },
          { en: 'Names a new federal judge', es: 'Nombra a un juez federal nuevo', fa: 'یک قاضی فدرال نو را نام می‌برد' },
          { en: 'Ends a deal with a country', es: 'Termina un acuerdo con un país', fa: 'توافق با یک کشور را ختم می‌کند' }],
        answer: 0,
        why: { en: 'A pardon forgives a person for a federal crime.', es: 'Un indulto perdona a una persona por un delito federal.', fa: 'عفو یک نفر را برای جرم فدرال می‌بخشد.' } },
      { q: { en: 'The President picks a new Supreme Court judge. Who must confirm the judge?', es: 'El presidente elige a un juez nuevo de la Corte Suprema. ¿Quién debe confirmarlo?', fa: 'رئیس جمهور یک قاضی نو برای ستره محکمه انتخاب می‌کند. کی باید او را تأیید کند؟' },
        choices: [
          { en: 'The Senate', es: 'El Senado', fa: 'سنا' },
          { en: 'The House', es: 'La Cámara', fa: 'مجلس نمایندگان' },
          { en: 'The voters', es: 'Los votantes', fa: 'رأی‌دهندگان' },
          { en: 'The governors', es: 'Los gobernadores', fa: 'والی‌ها' }],
        answer: 0,
        why: { en: 'The Senate confirms federal judges and Cabinet heads. That is a check on the President.', es: 'El Senado confirma a los jueces federales y a los jefes del Gabinete. Es un control sobre el presidente.', fa: 'سنا قاضی‌های فدرال و رئیسان کابینه را تأیید می‌کند. این یک کنترول بالای رئیس جمهور است.' } },
      { q: { en: 'In 1863, Lincoln\'s Emancipation Proclamation was what kind of tool?', es: 'En 1863, ¿qué tipo de herramienta fue la Proclamación de Emancipación de Lincoln?', fa: 'در سال ۱۸۶۳، اعلامیهٔ آزادی بردگان لینکن چه نوع ابزاری بود؟' },
        choices: [
          { en: 'An executive order', es: 'Una orden ejecutiva', fa: 'فرمان اجرایی' },
          { en: 'A Supreme Court case', es: 'Un caso de la Corte Suprema', fa: 'یک دعوای ستره محکمه' },
          { en: 'A peace treaty', es: 'Un tratado de paz', fa: 'معاهدهٔ صلح' },
          { en: 'A federal pardon', es: 'Un indulto federal', fa: 'عفو فدرال' }],
        answer: 0,
        why: { en: 'The Emancipation Proclamation was an executive order. Later, Truman used one to end segregation in the armed forces.', es: 'La Proclamación de Emancipación fue una orden ejecutiva. Después, Truman usó una para terminar la segregación militar.', fa: 'اعلامیهٔ آزادی بردگان فرمان اجرایی بود. بعدها ترومن با یکی جدایی نژادی را در قوای مسلح ختم کرد.' } }
    ]
  },

  learned: [
    { en: 'An [[executive order|executive order]] is a rule from the President to the agencies. It must follow the Constitution and the laws.', es: 'Una [[executive order|orden ejecutiva]] es una regla del presidente a las agencias. Debe seguir la Constitución y las leyes.', fa: '[[executive order|فرمان اجرایی]] دستوری از رئیس جمهور به اداره‌ها است. باید از قانون اساسی و قانون‌ها پیروی کند.' },
    { en: 'Courts can strike an order down. Congress can change it by law. A later President can undo it.', es: 'Los tribunales pueden anular una orden. El Congreso puede cambiarla con una ley. Otro presidente puede deshacerla.', fa: 'محکمه‌ها می‌توانند فرمان را لغو کنند. کانگرس با قانون تغییرش می‌دهد. رئیس جمهور بعدی می‌تواند لغوش کند.' },
    { en: 'Other tools: ask for bills, [[veto|veto]], [[treaty|treaties]], executive agreements, [[pardon|pardons]] and picking judges.', es: 'Otras herramientas: pedir leyes, [[veto|vetar]], [[treaty|tratados]], acuerdos ejecutivos, [[pardon|indultos]] y elegir jueces.', fa: 'ابزارهای دیگر: خواستن لایحه، [[veto|وتو]]، [[treaty|معاهده]]، توافق اجرایی، [[pardon|عفو]] و انتخاب قاضی.' }
  ],
  reflect: {
    q: { en: 'If you led your school for one day, what one rule would you give? Who could check it?', es: 'Si dirigieras tu escuela por un día, ¿qué regla darías? ¿Quién podría revisarla?', fa: 'اگر یک روز رهبر مکتب خود بودی، چه یک دستور می‌دادی؟ کی می‌توانست آن را بررسی کند؟' },
    starter: { en: 'My rule would be', es: 'Mi regla sería', fa: 'دستور من این می‌بود که' }
  }
};
