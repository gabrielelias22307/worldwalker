/* COINWALKER · Episode 7.2 · Insurance Scenarios (a closer look at the kinds of insurance)
   Safe Harbor, a MADE-UP coastal town in Virginia, on a normal busy day.
   North-west: a home on a hill (Q over h), inside a ring of hills (K), with a dirt path down to Main Street.
   North-east: the insurance office (R over h) and the library (J, no door). The harbor (~) runs down the east edge.
   Row 11: Main Street (l), from the west end to a dock (k) on the harbor.
   South-west: the apartment building (Q over h, wide) and the clinic (R over h).
   South-east: the car repair shop (R over h), flowers by the water and a long dock (k) into the harbor.
   People show health, auto and renters insurance; the houses show homeowners, life and disability insurance.
   The ledger stone asks the student to carry 8 problem cards to Health, Auto, Renters, Homeowners or Life. */
window.EPISODE = {
  id: '7.2',
  realm: 7,
  sol: 'EPF',
  title: { en: 'Insurance Scenarios', es: 'Casos de seguros', fa: 'نمونه‌های بیمه' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Safe Harbor, Main Street', es: 'El Puerto Seguro, calle principal', fa: 'بندر امن، سرک اصلی' },
  intro: [
    { en: 'The Grump tore the page about kinds of insurance. Now people forget what each covers.',
      es: 'El Gruñón rompió la página sobre los tipos de seguro. Ahora la gente olvida qué cubre cada uno.',
      fa: 'غرغرو صفحهٔ انواع بیمه را پاره کرد. حالا مردم فراموش می‌کنند هر کدام چه چیز را می‌پوشاند.' },
    { en: 'Talk to the 3 people here, then fix the ledger stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del libro.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ دفتر حساب را درست کن.' }
  ],
  /* cut scenes: Safe Harbor is made up; the map points to the Virginia coast */
  scenes: {
    at: [-76.1, 37.0],
    start: [
      { en: 'Safe Harbor is a made-up town on the coast of Virginia.',
        es: 'El Puerto Seguro es un pueblo inventado en la costa de Virginia.',
        fa: 'بندر امن یک شهرک ساختگی در ساحل ویرجینیا است.' },
      { en: 'Today is a normal, busy day on Main Street.',
        es: 'Hoy es un día normal y ocupado en la calle principal.',
        fa: 'امروز یک روز عادی و پرکار در سرک اصلی است.' },
      { en: 'Bad luck can come to anyone. Insurance helps pay when it does.',
        es: 'La mala suerte le puede llegar a cualquiera. El seguro ayuda a pagar.',
        fa: 'بدبختی به هر کسی رسیده می‌تواند. بیمه در پرداخت کمک می‌کند.' }
    ],
    page: { en: 'Insurance works because many people pay in, and only a few need help.',
      es: 'El seguro funciona porque muchas personas pagan, y solo unas pocas necesitan ayuda.',
      fa: 'بیمه کار می‌کند چون مردم زیاد پول می‌دهند، و فقط چند نفر به کمک ضرورت دارند.' },
    guess: {
      q: { en: 'Does one insurance plan cover every kind of problem?', es: '¿Un solo seguro cubre todo tipo de problema?', fa: 'آیا یک بیمه همه نوع مشکل را می‌پوشاند؟' },
      choices: [
        { t: { en: '🧩 No, each kind covers different things', es: '🧩 No, cada tipo cubre cosas distintas', fa: '🧩 نه، هر نوع چیزهای جدا را می‌پوشاند' }, ok: true },
        { t: { en: '☂️ Yes, one plan covers it all', es: '☂️ Sí, un seguro lo cubre todo', fa: '☂️ بله، یک بیمه همه را می‌پوشاند' } }
      ],
      why: { en: 'Each kind covers its own problems. Car insurance does not pay the doctor.', es: 'Cada tipo cubre sus propios problemas. El seguro de auto no le paga al médico.', fa: 'هر نوع مشکل‌های خود را می‌پوشاند. بیمهٔ موتر پول داکتر را نمی‌دهد.' }
    },
    next: {
      q: { en: 'Next: retirement. Why start saving at 18 instead of 40?', es: 'Ahora: la jubilación. ¿Por qué empezar a ahorrar a los 18 y no a los 40?', fa: 'بعدی: تقاعد. چرا پس‌انداز را در ۱۸ سالگی شروع کنیم، نه در ۴۰ سالگی؟' },
      choices: [
        { t: { en: '🌱 The money has more years to grow', es: '🌱 El dinero tiene más años para crecer', fa: '🌱 پول سال‌های بیشتری برای رشد دارد' }, ok: true },
        { t: { en: '🛒 Prices go down when you get old', es: '🛒 Los precios bajan cuando eres mayor', fa: '🛒 قیمت‌ها وقتی پیر شوی پایین می‌آیند' } }
      ],
      why: { en: 'Money saved at 18 has 22 more years to grow than money saved at 40.', es: 'El dinero ahorrado a los 18 tiene 22 años más para crecer que el ahorrado a los 40.', fa: 'پولی که در ۱۸ سالگی پس‌انداز شود، ۲۲ سال بیشتر از پول ۴۰ سالگی رشد می‌کند.' }
    }
  },
  /* houses: who lives or works behind each door; walk in and talk */
  houses: [
    { at: [7, 4], name: { en: 'Mrs. Park', es: 'Sra. Park', fa: 'خانم پارک' },
      look: { skin: 1, hair: '#c8c8c8', shirt: '#4a7ab0', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'I own this house on the hill. I have [[homeowners insurance|homeowners insurance]].', es: 'Soy dueña de esta casa en la colina. Tengo [[homeowners insurance|seguro de vivienda]].', fa: 'من مالک این خانه روی تپه هستم. [[homeowners insurance|بیمهٔ خانه]] دارم.' },
        { en: 'It pays to fix my house after a fire or a storm.', es: 'Paga para arreglar mi casa después de un incendio o una tormenta.', fa: 'بعد از آتش‌سوزی یا طوفان، پول ترمیم خانه‌ام را می‌دهد.' },
        { en: 'It also covers my things inside, like my bed and my table.', es: 'También cubre mis cosas de adentro, como mi cama y mi mesa.', fa: 'چیزهای داخل خانه‌ام را هم می‌پوشاند، مثل بستر و میزم.' },
        { en: 'But floods are different. They usually need separate [[flood insurance|flood insurance]].', es: 'Pero las inundaciones son distintas. Casi siempre necesitan un [[flood insurance|seguro contra inundaciones]] aparte.', fa: 'اما سیلاب فرق دارد. معمولاً یک [[flood insurance|بیمهٔ سیلاب]] جدا لازم است.' }
      ] },
    { at: [19, 4], name: { en: 'Ms. Bello', es: 'Sra. Bello', fa: 'خانم بلو' },
      look: { skin: 5, hair: '#1a1008', shirt: '#8a3a5a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'I am an insurance agent. Today I explain [[life insurance|life insurance]].', es: 'Soy agente de seguros. Hoy explico el [[life insurance|seguro de vida]].', fa: 'من نمایندهٔ بیمه هستم. امروز [[life insurance|بیمهٔ زندگی]] را توضیح می‌دهم.' },
        { en: 'It pays money to a family if the person dies.', es: 'Le paga dinero a la familia si la persona muere.', fa: 'اگر آن شخص بمیرد، به خانواده‌اش پول می‌دهد.' },
        { en: '[[term life|Term life]] covers a set time, like 20 years. It costs less.', es: 'El [[term life|seguro a término]] cubre un tiempo fijo, como 20 años. Cuesta menos.', fa: '[[term life|بیمهٔ زندگی مدت‌دار]] یک وقت معین را می‌پوشاند، مثل ۲۰ سال. ارزان‌تر است.' },
        { en: '[[whole life|Whole life]] lasts your whole life. It costs more.', es: 'El [[whole life|seguro de vida entera]] dura toda tu vida. Cuesta más.', fa: '[[whole life|بیمهٔ تمام عمر]] تا آخر عمرت دوام دارد. گران‌تر است.' }
      ] },
    { at: [4, 13], name: { en: 'Mr. Grant', es: 'Sr. Grant', fa: 'آقای گرانت' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#d08a2a', pants: '#3a4a5a', style: 'short' },
      lines: [
        { en: 'I build houses. Last year I hurt my back and could not work.', es: 'Construyo casas. El año pasado me lastimé la espalda y no pude trabajar.', fa: 'من خانه می‌سازم. سال گذشته کمرم زخمی شد و کار کرده نمی‌توانستم.' },
        { en: 'My [[disability insurance|disability insurance]] paid me part of my pay.', es: 'Mi [[disability insurance|seguro por discapacidad]] me pagó parte de mi sueldo.', fa: '[[disability insurance|بیمهٔ ناتوانی]] من یک بخش معاشم را داد.' },
        { en: 'It helped me pay my rent until my back got better.', es: 'Me ayudó a pagar la renta hasta que mi espalda mejoró.', fa: 'در پرداخت کرایهٔ خانه کمکم کرد تا کمرم خوب شد.' }
      ] },
    { at: [11, 13], name: { en: 'Dr. Nwosu', es: 'Dra. Nwosu', fa: 'داکتر نووسو' },
      look: { skin: 4, hair: '#120c08', shirt: '#f0f0e8', pants: '#3a5a7a', style: 'short' },
      lines: [
        { en: '[[health insurance|Health insurance]] helps pay for doctor visits, the hospital and medicine.', es: 'El [[health insurance|seguro médico]] ayuda a pagar las consultas, el hospital y las medicinas.', fa: '[[health insurance|بیمهٔ صحی]] در پرداخت داکتر، شفاخانه و دوا کمک می‌کند.' },
        { en: 'Many people get their health insurance through their job.', es: 'Mucha gente recibe su seguro médico por medio de su trabajo.', fa: 'مردم زیاد بیمهٔ صحی خود را از راه وظیفهٔ خود می‌گیرند.' },
        { en: 'Young people can often stay on a parent\'s plan until age 26.', es: 'Los jóvenes a menudo pueden seguir en el seguro de un padre hasta los 26 años.', fa: 'جوانان اکثراً می‌توانند تا ۲۶ سالگی در بیمهٔ پدر یا مادر بمانند.' }
      ] },
    { at: [19, 13], name: { en: 'Gus', es: 'Gus', fa: 'گاس' },
      look: { skin: 0, hair: '#8a5a2a', shirt: '#3a5a3a', pants: '#2a2a2a', hat: '#c03a2a', style: 'short' },
      lines: [
        { en: 'A deer ran into this car on a dark road.', es: 'Un venado chocó contra este carro en un camino oscuro.', fa: 'یک آهو در یک سرک تاریک به این موتر خورد.' },
        { en: '[[comprehensive|Comprehensive]] coverage pays for deer, theft and storms.', es: 'La cobertura [[comprehensive|amplia]] paga por venados, robos y tormentas.', fa: 'بیمهٔ [[comprehensive|همه‌جانبه]] پول آهو، دزدی و طوفان را می‌دهد.' },
        { en: 'This owner has it. So her insurance pays for most of the fix.', es: 'Esta dueña la tiene. Así que su seguro paga casi todo el arreglo.', fa: 'مالک این موتر آن را دارد. پس بیمه‌اش بیشتر پول ترمیم را می‌دهد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North-west: a ring of hills (K) with Mrs. Park's house (Q over h) on top; a dirt path (:) leads down.
     North-east: the insurance office (R over h), the library (J). The harbor (~) on the east edge.
     Row 11: Main Street (l), to a dock (k) on the harbor.
     South-west: the apartment building (QQQQQ over hhdhh) and the clinic (R over h).
     South-east: the car repair shop (R over h), flowers (,) by the water, a long dock (k) into the harbor. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~',
    'T............................~~~',
    'T.KKKKKKKKK............JJJJ..~~~',
    'T.K...QQQ.K.......RRR..JJJJ..~~~',
    'T.K...hdh.K.......hdh..JJJJ..~~~',
    'T.K.......K..............x...~~~',
    'T.KKKK.KKKK..................~~~',
    'T.....:..............T.......~~~',
    'T.x...:......................~~~',
    'T.....:......................~~~',
    'T.T...:.....T..........T.....~~~',
    'Tlllllllllllllllllllllllllllkk~~',
    'T.QQQQQ...RRR.....RRR......,,~~~',
    'T.hhdhh...hdh.....hdh......,,~~~',
    'T............................~~~',
    'T............................~~~',
    'T.....................x......kk~',
    'T.T..........T...............~~~',
    'T...................T........~~~',
    'T...,,,......................~~~',
    'T............................~~~',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~~'
  ],
  start: [12, 9],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [14, 3], at: [14, 7], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, toward Main Street.', es: 'Desde esta nota, camina 4 pasos al sur, hacia la calle principal.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، به طرف سرک اصلی.' },
      text: { en: 'An old coin! Long ago, ship owners shared money so one lost ship ruined no one.', es: '¡Una moneda antigua! Hace mucho, los dueños de barcos juntaban dinero para cubrir un barco perdido.', fa: 'یک سکهٔ قدیمی! در گذشته، مالکان کشتی پول جمع می‌کردند تا یک کشتی گمشده کسی را خراب نکند.' } },
    { clueAt: [18, 20], at: [22, 20], decor: 'shell',
      clue: { en: 'From this note, walk 4 steps east, toward the harbor.', es: 'Desde esta nota, camina 4 pasos al este, hacia el puerto.', fa: 'از این یادداشت، ۴ قدم به شرق برو، به طرف بندر.' },
      text: { en: 'A seashell! Storms can flood towns by the sea. Flood insurance is usually separate.', es: '¡Una concha! Las tormentas pueden inundar pueblos junto al mar. El seguro contra inundaciones casi siempre va aparte.', fa: 'یک صدف! طوفان شهرهای کنار بحر را زیر آب برده می‌تواند. بیمهٔ سیلاب معمولاً جدا است.' } }
  ],

  words: {
    insurance: { en: 'a plan: you pay a little often, and it pays big costs if bad luck comes', es: 'un plan: pagas poco y seguido, y paga costos grandes si llega la mala suerte', fa: 'یک پلان: کم کم پول می‌دهی، و اگر بدبختی بیاید خرچ‌های کلان را می‌دهد' },
    'health insurance': { en: 'insurance that helps pay for doctors, the hospital and medicine', es: 'seguro que ayuda a pagar médicos, el hospital y las medicinas', fa: 'بیمه‌ای که در پرداخت داکتر، شفاخانه و دوا کمک می‌کند' },
    medicaid: { en: 'a government health program for people with low income', es: 'un programa de salud del gobierno para personas con pocos ingresos', fa: 'یک برنامهٔ صحی حکومت برای مردم کم‌درآمد' },
    medicare: { en: 'a government health program, mostly for people 65 and older', es: 'un programa de salud del gobierno, sobre todo para personas de 65 años o más', fa: 'یک برنامهٔ صحی حکومت، بیشتر برای مردم ۶۵ ساله و بالاتر' },
    'auto insurance': { en: 'insurance for a car and its driver', es: 'seguro para un carro y quien lo maneja', fa: 'بیمه برای یک موتر و راننده‌اش' },
    liability: { en: 'car insurance that pays for damage or injury you cause to others', es: 'seguro de auto que paga los daños o heridas que causas a otros', fa: 'بیمهٔ موتر که پول خسارت یا زخمی را که به دیگران می‌رسانی می‌دهد' },
    collision: { en: 'car insurance that pays to fix your own car after a crash', es: 'seguro de auto que paga para arreglar tu propio carro después de un choque', fa: 'بیمهٔ موتر که بعد از تصادم پول ترمیم موتر خودت را می‌دهد' },
    comprehensive: { en: 'car insurance for theft, storms, fire or hitting a deer', es: 'seguro de auto para robos, tormentas, incendios o chocar con un venado', fa: 'بیمهٔ موتر برای دزدی، طوفان، آتش یا خوردن به آهو' },
    'renters insurance': { en: 'insurance for your things in a place you rent', es: 'seguro para tus cosas en un lugar que rentas', fa: 'بیمه برای چیزهای تو در جایی که کرایه گرفته‌ای' },
    'homeowners insurance': { en: 'insurance for a house you own and the things in it', es: 'seguro para una casa que es tuya y las cosas que tiene', fa: 'بیمه برای خانه‌ای که مالکش هستی و چیزهای داخل آن' },
    'flood insurance': { en: 'separate insurance for damage from floods', es: 'seguro aparte para los daños por inundaciones', fa: 'بیمهٔ جدا برای خسارت سیلاب' },
    'life insurance': { en: 'insurance that pays money to your family if you die', es: 'seguro que le paga dinero a tu familia si mueres', fa: 'بیمه‌ای که اگر بمیری به خانواده‌ات پول می‌دهد' },
    'term life': { en: 'life insurance for a set number of years; it costs less', es: 'seguro de vida por un número fijo de años; cuesta menos', fa: 'بیمهٔ زندگی برای چند سال معین؛ ارزان‌تر است' },
    'whole life': { en: 'life insurance that lasts your whole life; it costs more', es: 'seguro de vida que dura toda tu vida; cuesta más', fa: 'بیمهٔ زندگی که تا آخر عمر دوام دارد؛ گران‌تر است' },
    'disability insurance': { en: 'insurance that pays part of your pay if you cannot work', es: 'seguro que paga parte de tu sueldo si no puedes trabajar', fa: 'بیمه‌ای که اگر کار کرده نتوانی یک بخش معاشت را می‌دهد' },
    landlord: { en: 'the person who owns a home and rents it to you', es: 'la persona dueña de una vivienda que te la renta', fa: 'کسی که مالک خانه است و آن را به تو کرایه می‌دهد' }
  },

  npcs: [
    {
      x: 14, y: 15,
      name: { en: 'Amara', es: 'Amara', fa: 'امارا' },
      role: { en: 'Nurse at the clinic', es: 'Enfermera de la clínica', fa: 'نرس کلینیک' },
      look: { skin: 5, hair: '#1a1008', shirt: '#3a9aa0', pants: '#3a9aa0', style: 'bun' },
      lines: [
        { en: 'I am a nurse. A hospital visit can cost a lot of money.', es: 'Soy enfermera. Una visita al hospital puede costar mucho dinero.', fa: 'من نرس هستم. رفتن به شفاخانه پول زیاد خرچ برمی‌دارد.' },
        { en: '[[health insurance|Health insurance]] helps pay for doctors, the hospital and medicine.', es: 'El [[health insurance|seguro médico]] ayuda a pagar médicos, el hospital y las medicinas.', fa: '[[health insurance|بیمهٔ صحی]] در پرداخت داکتر، شفاخانه و دوا کمک می‌کند.' },
        { en: '[[medicaid|Medicaid]] is a government program. It helps people with low income.', es: '[[medicaid|Medicaid]] es un programa del gobierno. Ayuda a personas con pocos ingresos.', fa: '[[medicaid|مدیکید]] یک برنامهٔ حکومت است. به مردم کم‌درآمد کمک می‌کند.' },
        { en: '[[medicare|Medicare]] is a government program too. It is mostly for people 65 and older.', es: '[[medicare|Medicare]] también es del gobierno. Es sobre todo para personas de 65 años o más.', fa: '[[medicare|مدیکر]] هم برنامهٔ حکومت است. بیشتر برای مردم ۶۵ ساله و بالاتر است.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What are Medicaid and Medicare?', es: '¿Qué son Medicaid y Medicare?', fa: 'مدیکید و مدیکر چه هستند؟' },
        choices: [
          { ok: true, t: { en: 'Health programs run by the government', es: 'Programas de salud del gobierno', fa: 'برنامه‌های صحی حکومت' },
            why: { en: 'Yes! Medicaid helps people with low income. Medicare is mostly for people 65 and older.', es: '¡Sí! Medicaid ayuda a personas con pocos ingresos. Medicare es sobre todo para mayores de 65.', fa: 'بله! مدیکید به مردم کم‌درآمد کمک می‌کند. مدیکر بیشتر برای مردم ۶۵ ساله و بالاتر است.' } },
          { t: { en: 'Car plans sold at the repair shop', es: 'Seguros de auto del taller', fa: 'بیمه‌های موتر در ورکشاپ' },
            why: { en: 'No. Medicaid and Medicare are about health care, not cars. The government runs them.', es: 'No. Medicaid y Medicare son de salud, no de carros. Los maneja el gobierno.', fa: 'نه. مدیکید و مدیکر دربارهٔ صحت هستند، نه موتر. حکومت آنها را اداره می‌کند.' } },
          { t: { en: 'Savings accounts at a big bank', es: 'Cuentas de ahorro de un banco', fa: 'حساب‌های پس‌انداز در بانک' },
            why: { en: 'No. They are not bank accounts. They are government programs that help pay for health care.', es: 'No. No son cuentas de banco. Son programas del gobierno que ayudan a pagar la salud.', fa: 'نه. حساب بانکی نیستند. برنامه‌های حکومت هستند که در پرداخت صحت کمک می‌کنند.' } }
        ]
      }
    },
    {
      x: 23, y: 14,
      name: { en: 'Sam', es: 'Sam', fa: 'سم' },
      role: { en: 'Car mechanic', es: 'Mecánico de carros', fa: 'مستری موتر' },
      look: { skin: 2, hair: '#2a2a2a', shirt: '#2f5f9a', pants: '#2a2a3a', hat: '#2f5f9a', style: 'short' },
      lines: [
        { en: 'I fix cars after crashes. [[auto insurance|Car insurance]] pays for a lot of my work.', es: 'Arreglo carros después de choques. El [[auto insurance|seguro de auto]] paga mucho de mi trabajo.', fa: 'من موترها را بعد از تصادم ترمیم می‌کنم. [[auto insurance|بیمهٔ موتر]] پول زیاد کارم را می‌دهد.' },
        { en: 'Virginia requires drivers to have car insurance.', es: 'Virginia exige que los conductores tengan seguro de auto.', fa: 'ویرجینیا از راننده‌ها می‌خواهد که بیمهٔ موتر داشته باشند.' },
        { en: '[[liability|Liability]] pays for damage or injury you cause to other people.', es: 'La [[liability|responsabilidad civil]] paga los daños o heridas que causas a otras personas.', fa: 'بیمهٔ [[liability|مسئولیت]] پول خسارت یا زخمی را که به دیگران می‌رسانی می‌دهد.' },
        { en: '[[collision|Collision]] pays to fix your own car after a crash.', es: 'La cobertura de [[collision|choque]] paga para arreglar tu propio carro.', fa: 'بیمهٔ [[collision|تصادم]] پول ترمیم موتر خودت را بعد از تصادم می‌دهد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Kim hits another car. Which part of her car insurance pays for the other car?', es: 'Kim choca contra otro carro. ¿Qué parte de su seguro paga el otro carro?', fa: 'کیم به موتر دیگری می‌خورد. کدام بخش بیمه‌اش پول موتر دیگر را می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Liability', es: 'Responsabilidad civil', fa: 'مسئولیت' },
            why: { en: 'Yes! Liability pays for damage you cause to other people and their things.', es: '¡Sí! La responsabilidad civil paga los daños que causas a otros y a sus cosas.', fa: 'بله! بیمهٔ مسئولیت پول خسارتی را می‌دهد که به دیگران و چیزهایشان می‌رسانی.' } },
          { t: { en: 'Collision', es: 'Choque', fa: 'تصادم' },
            why: { en: 'Not this time. Collision fixes Kim\'s OWN car. Liability pays for the other car.', es: 'Esta vez no. Choque arregla el carro PROPIO de Kim. La responsabilidad civil paga el otro.', fa: 'این بار نه. بیمهٔ تصادم موتر «خود» کیم را ترمیم می‌کند. مسئولیت پول موتر دیگر را می‌دهد.' } },
          { t: { en: 'Comprehensive', es: 'Cobertura amplia', fa: 'همه‌جانبه' },
            why: { en: 'No. Comprehensive is for theft, storms and deer. Damage to others is liability.', es: 'No. La cobertura amplia es para robos, tormentas y venados. El daño a otros es responsabilidad civil.', fa: 'نه. همه‌جانبه برای دزدی، طوفان و آهو است. خسارت به دیگران بیمهٔ مسئولیت است.' } }
        ]
      }
    },
    {
      x: 22, y: 8,
      name: { en: 'Jada', es: 'Jada', fa: 'جادا' },
      role: { en: 'College student who rents', es: 'Estudiante que renta', fa: 'محصل که کرایه‌نشین است' },
      look: { skin: 4, hair: '#1a1008', shirt: '#c04a8a', pants: '#2a3a5a', style: 'long' },
      lines: [
        { en: 'I rent an apartment on Main Street with a roommate.', es: 'Rento un apartamento en la calle principal con una compañera.', fa: 'من با یک هم‌اتاقی یک اپارتمان در سرک اصلی کرایه کرده‌ام.' },
        { en: 'My [[landlord|landlord]] has insurance. But it covers the building, not my things.', es: 'Mi [[landlord|casero]] tiene seguro. Pero cubre el edificio, no mis cosas.', fa: '[[landlord|صاحب خانه]] من بیمه دارد. اما ساختمان را می‌پوشاند، نه چیزهای مرا.' },
        { en: 'So I have [[renters insurance|renters insurance]]. It covers my laptop, clothes and bike.', es: 'Por eso tengo [[renters insurance|seguro de inquilino]]. Cubre mi laptop, mi ropa y mi bici.', fa: 'پس من [[renters insurance|بیمهٔ کرایه‌نشین]] دارم. لپ‌تاپ، لباس و بایسکلم را می‌پوشاند.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'A thief takes Jada\'s laptop from her apartment. What pays for a new one?', es: 'Un ladrón se lleva la laptop de Jada de su apartamento. ¿Qué paga una nueva?', fa: 'یک دزد لپ‌تاپ جادا را از اپارتمانش می‌برد. پول لپ‌تاپ نو را چه می‌دهد؟' },
        choices: [
          { ok: true, t: { en: 'Her renters insurance', es: 'Su seguro de inquilino', fa: 'بیمهٔ کرایه‌نشین خودش' },
            why: { en: 'Yes! Renters insurance covers your things in a place you rent.', es: '¡Sí! El seguro de inquilino cubre tus cosas en el lugar que rentas.', fa: 'بله! بیمهٔ کرایه‌نشین چیزهای تو را در جایی که کرایه گرفته‌ای می‌پوشاند.' } },
          { t: { en: 'The landlord\'s insurance', es: 'El seguro del casero', fa: 'بیمهٔ صاحب خانه' },
            why: { en: 'No. The landlord\'s insurance covers the building, not the renter\'s things.', es: 'No. El seguro del casero cubre el edificio, no las cosas del inquilino.', fa: 'نه. بیمهٔ صاحب خانه ساختمان را می‌پوشاند، نه چیزهای کرایه‌نشین را.' } },
          { t: { en: 'Her health insurance', es: 'Su seguro médico', fa: 'بیمهٔ صحی خودش' },
            why: { en: 'No. Health insurance pays for doctors and medicine, not a stolen laptop.', es: 'No. El seguro médico paga médicos y medicinas, no una laptop robada.', fa: 'نه. بیمهٔ صحی پول داکتر و دوا را می‌دهد، نه لپ‌تاپ دزدی‌شده.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 8, text: { en: 'SAFE HARBOR · a made-up town · Up this path: a home on the hill.', es: 'EL PUERTO SEGURO · un pueblo inventado · Por este camino: una casa en la colina.', fa: 'بندر امن · یک شهرک ساختگی · از این راه بالا: یک خانه روی تپه.' } },
    { x: 25, y: 5, text: { en: 'LIBRARY · Free books on money. Next door: the insurance office.', es: 'BIBLIOTECA · Libros gratis sobre el dinero. Al lado: la oficina de seguros.', fa: 'کتابخانه · کتاب‌های مفت دربارهٔ پول. پهلویش: دفتر بیمه.' } },
    { x: 22, y: 16, text: { en: 'CAR REPAIR · Liability helps others. Collision fixes your car. Comprehensive: theft, storms, deer.', es: 'TALLER · Responsabilidad civil: daños a otros. Choque: tu carro. Cobertura amplia: robo, tormenta, venado.', fa: 'ورکشاپ موتر · مسئولیت: خسارت دیگران. تصادم: موتر خودت. همه‌جانبه: دزدی، طوفان، آهو.' } }
  ],

  /* the quest: Omar the delivery driver (gold !) at the foot of the hill, north-west -> Lena by the library, north-east
     -> find his insurance card at the end of the long dock in the harbor, south-east -> back to Omar */
  quest: {
    stat: 'mov',
    title: { en: 'The Lost Insurance Card', es: 'La tarjeta de seguro perdida', fa: 'کارت گمشدهٔ بیمه' },
    giver: {
      x: 4, y: 9,
      name: { en: 'Omar', es: 'Omar', fa: 'عمر' },
      role: { en: 'Delivery driver', es: 'Repartidor', fa: 'رانندهٔ رساندن غذا' },
      look: { skin: 2, hair: '#1a1208', shirt: '#e07a2a', pants: '#2a2a2a', hat: '#e07a2a', style: 'short' },
      lines: [
        { en: 'I deliver food in my car. But I lost my insurance card!', es: 'Reparto comida en mi carro. ¡Pero perdí mi tarjeta de seguro!', fa: 'من با موترم غذا می‌رسانم. اما کارت بیمه‌ام را گم کرده‌ام!' },
        { en: 'The card shows that I have car insurance. I need it back.', es: 'La tarjeta muestra que tengo seguro de auto. La necesito.', fa: 'این کارت نشان می‌دهد که بیمهٔ موتر دارم. به آن ضرورت دارم.' },
        { en: 'Lena by the library saw it fly away. Please ask her!', es: 'Lena, junto a la biblioteca, la vio volar. ¡Pregúntale, por favor!', fa: 'لنا کنار کتابخانه دید که پرواز کرد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Lena is by the library, on the north-east side of town.', es: 'Lena está junto a la biblioteca, en el noreste del pueblo.', fa: 'لنا کنار کتابخانه است، در شمال شرق شهرک.' },
      thanks: { en: 'My card! Now I can drive to work. Virginia requires car insurance.', es: '¡Mi tarjeta! Ya puedo manejar al trabajo. Virginia exige seguro de auto.', fa: 'کارتم! حالا می‌توانم تا کار موتر برانم. ویرجینیا بیمهٔ موتر را لازم می‌داند.' }
    },
    contact: {
      x: 24, y: 6,
      name: { en: 'Lena', es: 'Lena', fa: 'لنا' },
      role: { en: 'Librarian', es: 'Bibliotecaria', fa: 'کتابدار' },
      look: { skin: 0, hair: '#d8b060', shirt: '#4a7a3a', pants: '#3a3a3a', style: 'bun' },
      lines: [
        { en: 'Yes! A small white card flew past me in the wind.', es: '¡Sí! Una tarjetita blanca pasó volando con el viento.', fa: 'بله! یک کارت کوچک سفید با باد از پیشم گذشت.' },
        { en: 'It blew east and south, across Main Street to the harbor.', es: 'Voló al este y al sur, cruzando la calle principal hasta el puerto.', fa: 'باد آن را به شرق و جنوب برد، از سرک اصلی تا بندر.' },
        { en: 'Look at the far end of the long dock, south of Main Street.', es: 'Busca en la punta del muelle largo, al sur de la calle principal.', fa: 'در آخر اسکلهٔ دراز، جنوب سرک اصلی، ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [30, 16],
      hint: { en: 'Look at the end of the long dock in the harbor', es: 'Busca en la punta del muelle largo del puerto', fa: 'در آخر اسکلهٔ دراز در بندر ببین' },
      found: { en: 'Omar\'s insurance card! It was stuck on the end of the dock.', es: '¡La tarjeta de seguro de Omar! Estaba atorada en la punta del muelle.', fa: 'کارت بیمهٔ عمر! در آخر اسکله گیر مانده بود.' },
      item: { icon: '🪪', name: { en: 'A car insurance card', es: 'Una tarjeta de seguro de auto', fa: 'یک کارت بیمهٔ موتر' } }
    }
  },

  scraps: [[3, 4], [28, 1], [1, 20]],
  smudges: [[10, 17], [26, 8]],

  challenge: {
    at: [8, 19],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // one marked area for each kind of insurance, by the place it fits: health by the clinic, renters by the apartments,
    // auto by the car repair shop, homeowners below the home on the hill, life by the insurance office
    zones: [{ bin: 'health', x: 10, y: 15, w: 3, h: 2 }, { bin: 'renters', x: 2, y: 15, w: 3, h: 2 },
      { bin: 'auto', x: 18, y: 15, w: 3, h: 2 }, { bin: 'home', x: 8, y: 7, w: 3, h: 2 },
      { bin: 'life', x: 18, y: 6, w: 3, h: 2 }],
    stat: 'mov',
    title: { en: 'Which insurance pays?', es: '¿Qué seguro paga?', fa: 'کدام بیمه می‌پردازد؟' },
    intro: { en: 'Bad luck hit Safe Harbor! Carry each problem card to the [[insurance|insurance]] that pays.',
      es: '¡La mala suerte llegó al Puerto Seguro! Lleva cada problema al [[insurance|seguro]] que paga.',
      fa: 'بدبختی به بندر امن رسید! هر کارت مشکل را پیش [[insurance|بیمه‌ای]] ببر که می‌پردازد.' },
    bins: [
      { id: 'health', icon: '🩺', label: { en: 'Health', es: 'Médico', fa: 'صحی' }, sub: { en: 'doctors, hospital, medicine', es: 'médicos, hospital, medicinas', fa: 'داکتر، شفاخانه، دوا' } },
      { id: 'auto', icon: '🚗', label: { en: 'Auto', es: 'Auto', fa: 'موتر' }, sub: { en: 'cars and drivers', es: 'carros y conductores', fa: 'موتر و راننده' } },
      { id: 'renters', icon: '🏢', label: { en: 'Renters', es: 'Inquilino', fa: 'کرایه‌نشین' }, sub: { en: 'your things in a rented home', es: 'tus cosas en una vivienda rentada', fa: 'چیزهای تو در خانهٔ کرایی' } },
      { id: 'home', icon: '🏠', label: { en: 'Homeowners', es: 'Vivienda', fa: 'خانه' }, sub: { en: 'a house you own', es: 'una casa que es tuya', fa: 'خانه‌ای که مالکش هستی' } },
      { id: 'life', icon: '💐', label: { en: 'Life', es: 'Vida', fa: 'زندگی' }, sub: { en: 'money for family after a death', es: 'dinero para la familia tras una muerte', fa: 'پول برای خانواده بعد از مرگ' } }
    ],
    items: [
      { bin: 'renters', icon: '💻', t: { en: 'A thief takes Mia\'s laptop from her apartment', es: 'Un ladrón se lleva la laptop de Mía de su apartamento', fa: 'یک دزد لپ‌تاپ میا را از اپارتمانش می‌برد' },
        why: { en: 'Mia rents. Her things are covered by [[renters insurance|renters insurance]], not the landlord\'s plan.', es: 'Mía renta. Sus cosas las cubre el [[renters insurance|seguro de inquilino]], no el del casero.', fa: 'میا کرایه‌نشین است. چیزهایش را [[renters insurance|بیمهٔ کرایه‌نشین]] می‌پوشاند، نه بیمهٔ صاحب خانه.' } },
      { bin: 'renters', icon: '🔥', t: { en: 'Smoke ruins the clothes in Jin\'s rented apartment', es: 'El humo arruina la ropa en el apartamento que renta Jin', fa: 'دود لباس‌های جین را در اپارتمان کرایی‌اش خراب می‌کند' },
        why: { en: 'Jin\'s clothes are his things in a rented home. That is [[renters insurance|renters insurance]].', es: 'La ropa de Jin son sus cosas en una vivienda rentada. Eso es [[renters insurance|seguro de inquilino]].', fa: 'لباس‌های جین چیزهای او در خانهٔ کرایی هستند. این [[renters insurance|بیمهٔ کرایه‌نشین]] است.' } },
      { bin: 'auto', icon: '🚙', t: { en: 'Leo backs his car into a neighbor\'s fence', es: 'Leo choca su carro de reversa contra la cerca de un vecino', fa: 'لیو موترش را عقب می‌برد و به کتارهٔ همسایه می‌خورد' },
        why: { en: 'Leo caused damage to someone else\'s things with his car. His car [[liability|liability]] pays.', es: 'Leo dañó con su carro algo de otra persona. Paga la [[liability|responsabilidad civil]] de su auto.', fa: 'لیو با موترش به چیز کس دیگر خسارت رساند. بیمهٔ [[liability|مسئولیت]] موترش می‌پردازد.' } },
      { bin: 'auto', icon: '🌳', t: { en: 'A storm drops a tree on Ana\'s car', es: 'Una tormenta tumba un árbol sobre el carro de Ana', fa: 'طوفان یک درخت را روی موتر انا می‌اندازد' },
        why: { en: 'Storm damage to a car is car insurance. The [[comprehensive|comprehensive]] part pays.', es: 'El daño de una tormenta a un carro es seguro de auto. Paga la cobertura [[comprehensive|amplia]].', fa: 'خسارت طوفان به موتر کار بیمهٔ موتر است. بخش [[comprehensive|همه‌جانبه]] می‌پردازد.' } },
      { bin: 'health', icon: '🦴', t: { en: 'Tom breaks his arm playing soccer', es: 'Tom se rompe el brazo jugando fútbol', fa: 'تام هنگام فوتبال دستش را می‌شکند' },
        why: { en: 'A broken arm needs a doctor and maybe the hospital. That is [[health insurance|health insurance]].', es: 'Un brazo roto necesita médico y quizás hospital. Eso es [[health insurance|seguro médico]].', fa: 'دست شکسته به داکتر و شاید شفاخانه ضرورت دارد. این [[health insurance|بیمهٔ صحی]] است.' } },
      { bin: 'health', icon: '💊', t: { en: 'Sara needs medicine for her asthma every month', es: 'Sara necesita medicina para el asma cada mes', fa: 'سارا هر ماه به دوای نفس‌تنگی ضرورت دارد' },
        why: { en: 'Medicine is a health cost. [[health insurance|Health insurance]] helps pay for it.', es: 'La medicina es un gasto de salud. El [[health insurance|seguro médico]] ayuda a pagarla.', fa: 'دوا خرچ صحی است. [[health insurance|بیمهٔ صحی]] در پرداخت آن کمک می‌کند.' } },
      { bin: 'home', icon: '🏚️', t: { en: 'A kitchen fire burns part of the Lees\' own house', es: 'Un incendio en la cocina quema parte de la casa de los Lee', fa: 'آتش آشپزخانه یک بخش خانهٔ خود خانوادهٔ لی را می‌سوزاند' },
        why: { en: 'The Lees own their house. A fire is covered by [[homeowners insurance|homeowners insurance]].', es: 'Los Lee son dueños de su casa. Un incendio lo cubre el [[homeowners insurance|seguro de vivienda]].', fa: 'خانوادهٔ لی مالک خانهٔ خود هستند. آتش‌سوزی را [[homeowners insurance|بیمهٔ خانه]] می‌پوشاند.' } },
      { bin: 'life', icon: '🕊️', t: { en: 'Mr. Diaz dies. His children still need food and rent', es: 'El Sr. Díaz muere. Sus hijos aún necesitan comida y renta', fa: 'آقای دیاز می‌میرد. فرزندانش هنوز به غذا و کرایه ضرورت دارند' },
        why: { en: '[[life insurance|Life insurance]] pays money to the family when the person dies.', es: 'El [[life insurance|seguro de vida]] le paga dinero a la familia cuando la persona muere.', fa: '[[life insurance|بیمهٔ زندگی]] وقتی آن شخص بمیرد، به خانواده‌اش پول می‌دهد.' } }
    ],
    success: { en: 'Every problem found its insurance! Each kind covers its own risks.', es: '¡Cada problema encontró su seguro! Cada tipo cubre sus propios riesgos.', fa: 'هر مشکل بیمهٔ خود را پیدا کرد! هر نوع خطرهای خود را می‌پوشاند.' }
  },

  boss: {
    at: [25, 18],
    stat: 'mov',
    need: 3,
    name: { en: 'The Risky Grump', es: 'El Gruñón Arriesgado', fa: 'غرغروی خطرپسند' },
    appear: { en: 'The Risky Grump is hiding in the sea fog by the harbor!', es: '¡El Gruñón Arriesgado se esconde en la niebla del mar junto al puerto!', fa: 'غرغروی خطرپسند در مه بحر کنار بندر پنهان است!' },
    taunt: { en: 'Insurance? Bah! Nothing bad ever happens to ME! ...Hey, who sank my boat?', es: '¿Seguro? ¡Bah! ¡A MÍ nunca me pasa nada malo! ...Oigan, ¿quién hundió mi barco?', fa: 'بیمه؟ هه! به «من» هیچ وقت بدی نمی‌رسد! ...آهای، کی کشتی‌ام را غرق کرد؟' },
    win: { en: 'The sea fog lifts. Ledger page 7.2 floats down into your hands!', es: 'La niebla del mar se va. ¡La página 7.2 del libro cae en tus manos!', fa: 'مه بحر کنار می‌رود. صفحهٔ ۷.۲ دفتر حساب به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What does health insurance help pay for?', es: '¿Qué ayuda a pagar el seguro médico?', fa: 'بیمهٔ صحی در پرداخت چه چیز کمک می‌کند؟' },
        choices: [
          { en: 'Doctors, the hospital and medicine', es: 'Médicos, el hospital y medicinas', fa: 'داکتر، شفاخانه و دوا' },
          { en: 'Fixing a car after a crash', es: 'Arreglar un carro tras un choque', fa: 'ترمیم موتر بعد از تصادم' },
          { en: 'A laptop stolen from a home', es: 'Una laptop robada de una casa', fa: 'لپ‌تاپ دزدی‌شده از خانه' },
          { en: 'A roof hurt by a big storm', es: 'Un techo dañado por una tormenta', fa: 'بامی که طوفان خراب کرده' }],
        answer: 0,
        why: { en: 'Health insurance helps pay for doctor visits, the hospital and medicine.', es: 'El seguro médico ayuda a pagar consultas, el hospital y las medicinas.', fa: 'بیمهٔ صحی در پرداخت داکتر، شفاخانه و دوا کمک می‌کند.' } },
      { q: { en: 'Who runs Medicaid and Medicare?', es: '¿Quién maneja Medicaid y Medicare?', fa: 'مدیکید و مدیکر را کی اداره می‌کند؟' },
        choices: [
          { en: 'The government', es: 'El gobierno', fa: 'حکومت' },
          { en: 'A car repair shop', es: 'Un taller de carros', fa: 'یک ورکشاپ موتر' },
          { en: 'Each landlord', es: 'Cada casero', fa: 'هر صاحب خانه' },
          { en: 'The town library', es: 'La biblioteca', fa: 'کتابخانهٔ شهرک' }],
        answer: 0,
        why: { en: 'They are government programs. Medicaid helps people with low income; Medicare is mostly for people 65 and older.', es: 'Son programas del gobierno. Medicaid ayuda con pocos ingresos; Medicare, sobre todo a mayores de 65.', fa: 'برنامه‌های حکومت هستند. مدیکید برای کم‌درآمدها؛ مدیکر بیشتر برای ۶۵ ساله‌ها و بالاتر.' } },
      { q: { en: 'Leo\'s car hits another car. Which coverage pays for the other car?', es: 'El carro de Leo choca contra otro. ¿Qué cobertura paga el otro carro?', fa: 'موتر لیو به موتر دیگری می‌خورد. کدام بیمه پول موتر دیگر را می‌دهد؟' },
        choices: [
          { en: 'Liability', es: 'Responsabilidad civil', fa: 'مسئولیت' },
          { en: 'Collision', es: 'Choque', fa: 'تصادم' },
          { en: 'Comprehensive', es: 'Cobertura amplia', fa: 'همه‌جانبه' },
          { en: 'Renters', es: 'Inquilino', fa: 'کرایه‌نشین' }],
        answer: 0,
        why: { en: 'Liability pays for damage you cause to others. Collision fixes your own car.', es: 'La responsabilidad civil paga el daño que causas a otros. Choque arregla tu propio carro.', fa: 'مسئولیت پول خسارتی را می‌دهد که به دیگران می‌رسانی. تصادم موتر خودت را ترمیم می‌کند.' } },
      { q: { en: 'A deer runs into Ana\'s car on a dark road. Which coverage helps?', es: 'Un venado choca con el carro de Ana en un camino oscuro. ¿Qué cobertura ayuda?', fa: 'یک آهو در سرک تاریک به موتر انا می‌خورد. کدام بیمه کمک می‌کند؟' },
        choices: [
          { en: 'Comprehensive', es: 'Cobertura amplia', fa: 'همه‌جانبه' },
          { en: 'Liability', es: 'Responsabilidad civil', fa: 'مسئولیت' },
          { en: 'Life insurance', es: 'Seguro de vida', fa: 'بیمهٔ زندگی' },
          { en: 'Health insurance', es: 'Seguro médico', fa: 'بیمهٔ صحی' }],
        answer: 0,
        why: { en: 'Comprehensive covers theft, storms and hitting a deer.', es: 'La cobertura amplia cubre robos, tormentas y chocar con un venado.', fa: 'همه‌جانبه دزدی، طوفان و خوردن به آهو را می‌پوشاند.' } },
      { q: { en: 'A thief takes Jada\'s bike from her apartment. Whose insurance pays?', es: 'Un ladrón se lleva la bici de Jada de su apartamento. ¿Qué seguro paga?', fa: 'یک دزد بایسکل جادا را از اپارتمانش می‌برد. بیمهٔ کی می‌پردازد؟' },
        choices: [
          { en: 'Jada\'s renters insurance', es: 'El seguro de inquilino de Jada', fa: 'بیمهٔ کرایه‌نشین جادا' },
          { en: 'The landlord\'s insurance', es: 'El seguro del casero', fa: 'بیمهٔ صاحب خانه' },
          { en: 'Jada\'s health insurance', es: 'El seguro médico de Jada', fa: 'بیمهٔ صحی جادا' },
          { en: 'The town\'s car insurance', es: 'El seguro de auto del pueblo', fa: 'بیمهٔ موتر شهرک' }],
        answer: 0,
        why: { en: 'The landlord\'s insurance covers the building. Renters insurance covers the renter\'s things.', es: 'El seguro del casero cubre el edificio. El seguro de inquilino cubre las cosas del inquilino.', fa: 'بیمهٔ صاحب خانه ساختمان را می‌پوشاند. بیمهٔ کرایه‌نشین چیزهای کرایه‌نشین را.' } },
      { q: { en: 'A river floods Mrs. Park\'s house. What does she usually need?', es: 'Un río inunda la casa de la Sra. Park. ¿Qué necesita casi siempre?', fa: 'دریا خانهٔ خانم پارک را زیر آب می‌برد. معمولاً به چه ضرورت دارد؟' },
        choices: [
          { en: 'Separate flood insurance', es: 'Un seguro aparte contra inundaciones', fa: 'بیمهٔ جدای سیلاب' },
          { en: 'Her car\'s comprehensive', es: 'La cobertura amplia de su carro', fa: 'بیمهٔ همه‌جانبهٔ موترش' },
          { en: 'Her disability insurance', es: 'Su seguro por discapacidad', fa: 'بیمهٔ ناتوانی‌اش' },
          { en: 'Her term life insurance', es: 'Su seguro de vida a término', fa: 'بیمهٔ زندگی مدت‌دارش' }],
        answer: 0,
        why: { en: 'Homeowners insurance usually does not cover floods. Flood insurance is separate.', es: 'El seguro de vivienda casi nunca cubre inundaciones. El seguro contra inundaciones va aparte.', fa: 'بیمهٔ خانه معمولاً سیلاب را نمی‌پوشاند. بیمهٔ سیلاب جدا است.' } },
      { q: { en: 'What does life insurance do?', es: '¿Qué hace el seguro de vida?', fa: 'بیمهٔ زندگی چه کار می‌کند؟' },
        choices: [
          { en: 'Pays the family if a person dies', es: 'Le paga a la familia si alguien muere', fa: 'اگر کسی بمیرد به خانواده‌اش می‌پردازد' },
          { en: 'Pays to fix a house after a fire', es: 'Paga para arreglar una casa tras un incendio', fa: 'بعد از آتش پول ترمیم خانه را می‌دهد' },
          { en: 'Pays for a doctor visit each year', es: 'Paga una consulta médica cada año', fa: 'هر سال پول رفتن به داکتر را می‌دهد' },
          { en: 'Pays for a stolen bike or laptop', es: 'Paga una bici o laptop robada', fa: 'پول بایسکل یا لپ‌تاپ دزدی‌شده را می‌دهد' }],
        answer: 0,
        why: { en: 'Life insurance pays money to the family. Term life lasts a set time; whole life lasts your whole life.', es: 'El seguro de vida paga a la familia. A término dura un tiempo fijo; vida entera, toda la vida.', fa: 'بیمهٔ زندگی به خانواده پول می‌دهد. مدت‌دار وقت معین دارد؛ تمام عمر تا آخر عمر.' } },
      { q: { en: 'Mr. Grant hurt his back and cannot work. Which insurance replaces part of his pay?', es: 'El Sr. Grant se lastimó la espalda y no puede trabajar. ¿Qué seguro reemplaza parte de su sueldo?', fa: 'کمر آقای گرانت زخمی شده و کار کرده نمی‌تواند. کدام بیمه یک بخش معاشش را می‌دهد؟' },
        choices: [
          { en: 'Disability', es: 'Discapacidad', fa: 'ناتوانی' },
          { en: 'Homeowners', es: 'Vivienda', fa: 'خانه' },
          { en: 'Collision', es: 'Choque', fa: 'تصادم' },
          { en: 'Renters', es: 'Inquilino', fa: 'کرایه‌نشین' }],
        answer: 0,
        why: { en: 'Disability insurance replaces part of your income when you cannot work.', es: 'El seguro por discapacidad reemplaza parte de tu ingreso cuando no puedes trabajar.', fa: 'بیمهٔ ناتوانی وقتی کار کرده نتوانی، یک بخش درآمدت را می‌دهد.' } }
    ]
  },

  learned: [
    { en: '[[health insurance|Health insurance]] pays for doctors and medicine. Medicaid and Medicare are government programs.', es: 'El [[health insurance|seguro médico]] paga médicos y medicinas. Medicaid y Medicare son del gobierno.', fa: '[[health insurance|بیمهٔ صحی]] پول داکتر و دوا را می‌دهد. مدیکید و مدیکر برنامه‌های حکومت هستند.' },
    { en: 'Car insurance has [[liability|liability]], collision and comprehensive. Virginia requires drivers to have it.', es: 'El seguro de auto tiene [[liability|responsabilidad civil]], choque y cobertura amplia. Virginia lo exige.', fa: 'بیمهٔ موتر [[liability|مسئولیت]]، تصادم و همه‌جانبه دارد. ویرجینیا آن را از راننده‌ها می‌خواهد.' },
    { en: 'Renters, homeowners, life and [[disability insurance|disability insurance]] each cover different risks.', es: 'Los seguros de inquilino, de vivienda, de vida y por [[disability insurance|discapacidad]] cubren riesgos distintos.', fa: 'بیمهٔ کرایه‌نشین، خانه، زندگی و [[disability insurance|ناتوانی]] هر کدام خطرهای جدا را می‌پوشانند.' }
  ],
  reflect: {
    q: { en: 'Imagine you rent your first apartment at age 20. Which insurance would you get first, and why?', es: 'Imagina que rentas tu primer apartamento a los 20 años. ¿Qué seguro tendrías primero y por qué?', fa: 'فکر کن در ۲۰ سالگی اولین اپارتمانت را کرایه می‌گیری. اول کدام بیمه را می‌گیری، و چرا؟' },
    starter: { en: 'First I would get', es: 'Primero tendría', fa: 'اول من ... را می‌گیرم' }
  }
};
