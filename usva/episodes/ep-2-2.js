/* TRAILWALKER · Episode 2.2 · Declaring Independence (VUS)
   Boston, Massachusetts, the morning after the Boston Tea Party (December 17, 1773).
   The harbor is on the east (x 25-31). Long Wharf runs east from the end of King Street (row 5);
   Griffin's Wharf, where the three tea ships were tied up, is in the south-east (rows 17-18).
   North-west: the print shop and the Town House at the head of King Street (where the Boston Massacre
   happened in 1770). The main street runs north-south (x 11) past the Old South Meeting House.
   North-east: the tavern, a family home, the market. South-west: homes and the edge of Boston Common.
   South-east: a soldier's family home and the waterfront street to Griffin's Wharf.
   The journal stone: walk the road to independence, 1765 -> 1776, in order. */
window.EPISODE = {
  id: '2.2',
  realm: 2,
  sol: 'VUS',
  title: { en: 'Declaring Independence', es: 'Declarar la independencia', fa: 'اعلام استقلال' },
  weather: { sky: 'snow', time: 'day' },
  place: { en: 'Boston, 1773', es: 'Boston, 1773', fa: 'بوستون، ۱۷۷۳' },
  intro: [
    { en: 'The Grump blurred this journal page. Boston is forgetting why people wanted [[independence|independence]].',
      es: 'El Gruñón borró esta página del diario. Boston está olvidando por qué la gente quería la [[independence|independencia]].',
      fa: 'غرغرو این صفحهٔ روزنامچه را تار کرد. بوستون فراموش می‌کند چرا مردم [[independence|استقلال]] می‌خواستند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Boston Harbor on the map, 1773 on the timeline */
  scenes: {
    at: [-71.05, 42.355],
    year: 1773,
    start: [
      { en: 'It is December 1773. Boston is a busy port in Massachusetts.',
        es: 'Es diciembre de 1773. Boston es un puerto muy activo en Massachusetts.',
        fa: 'دسامبر ۱۷۷۳ است. بوستون یک بندر پرکار در ماساچوست است.' },
      { en: 'Britain taxed the 13 colonies, but colonists had no vote in Parliament.',
        es: 'Gran Bretaña cobraba impuestos a las 13 colonias, pero los colonos no votaban en el Parlamento.',
        fa: 'بریتانیا از ۱۳ مستعمره مالیه می‌گرفت، اما مردم مستعمره‌ها در پارلمان رأی نداشتند.' },
      { en: 'Last night, Patriots dumped British tea into Boston Harbor.',
        es: 'Anoche, los patriotas tiraron té británico al puerto de Boston.',
        fa: 'دیشب، وطن‌پرستان چای بریتانیایی را در بندر بوستون ریختند.' }
    ],
    page: { en: 'Today, you can still visit the Old South Meeting House in Boston.',
      es: 'Hoy todavía puedes visitar la Old South Meeting House en Boston.',
      fa: 'امروز هم می‌توانی از خانهٔ جلسهٔ اولد ساوت در بوستون دیدن کنی.' },
    guess: {
      q: { en: 'Colonists said: "No taxation without representation." What did they want?', es: 'Los colonos decían: "No hay impuestos sin representación". ¿Qué querían?', fa: 'مردم مستعمره‌ها می‌گفتند: «مالیه بدون نماینده نه.» چه می‌خواستند؟' },
      choices: [
        { t: { en: '🗳️ A say in taxes', es: '🗳️ Opinar sobre los impuestos', fa: '🗳️ حق رأی در مالیه' }, ok: true },
        { t: { en: '💰 Higher taxes for all', es: '💰 Más impuestos para todos', fa: '💰 مالیهٔ بیشتر برای همه' } }
      ],
      why: { en: 'They wanted a vote on their own taxes. They had no members in Parliament.', es: 'Querían votar sobre sus propios impuestos. No tenían miembros en el Parlamento.', fa: 'می‌خواستند دربارهٔ مالیهٔ خود رأی بدهند. در پارلمان هیچ نماینده نداشتند.' }
    },
    next: {
      q: { en: 'Next: Yorktown, 1781. Where did the last big battle of the war happen?', es: 'Ahora: Yorktown, 1781. ¿Dónde fue la última gran batalla de la guerra?', fa: 'بعدی: یورک‌تاون، ۱۷۸۱. آخرین جنگ بزرگ این جنگ کجا شد؟' },
      choices: [
        { t: { en: 'In Virginia', es: 'En Virginia', fa: 'در ویرجینیا' }, ok: true },
        { t: { en: 'In Boston', es: 'En Boston', fa: 'در بوستون' } }
      ],
      why: { en: 'The British army gave up at Yorktown, Virginia, in 1781. The big fighting ended there.', es: 'El ejército británico se rindió en Yorktown, Virginia, en 1781. Allí terminó la gran lucha.', fa: 'اردوی بریتانیا در سال ۱۷۸۱ در یورک‌تاون، ویرجینیا، تسلیم شد. جنگ بزرگ آنجا تمام شد.' }
    }
  },
  /* houses: who lives or works behind each door (2 lines each) */
  houses: [
    { at: [3, 2], name: { en: 'Mr. Hale', es: 'Señor Hale', fa: 'آقای هیل' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#e8dcc0', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I print a newspaper. In 1765, the Stamp Act taxed every page.', es: 'Imprimo un periódico. En 1765, la Ley del Timbre cobraba impuesto por cada hoja.', fa: 'من روزنامه چاپ می‌کنم. در سال ۱۷۶۵، قانون تمبر از هر ورق مالیه می‌گرفت.' },
        { en: 'Colonists protested and stopped buying British goods. Parliament ended that tax in 1766.', es: 'Los colonos protestaron y dejaron de comprar productos británicos. El Parlamento quitó ese impuesto en 1766.', fa: 'مردم اعتراض کردند و جنس بریتانیایی نخریدند. پارلمان در ۱۷۶۶ آن مالیه را برداشت.' }
      ] },
    { at: [19, 2], name: { en: 'Mrs. Kerr', es: 'Señora Kerr', fa: 'خانم کر' },
      look: { skin: 1, hair: '#a04a20', shirt: '#4a6a3a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I run this tavern. The [[sons of liberty|Sons of Liberty]] meet here to plan.', es: 'Atiendo esta taberna. Los [[sons of liberty|Hijos de la Libertad]] se reúnen aquí para hacer planes.', fa: 'من این مهمانخانه را می‌گردانم. [[sons of liberty|پسران آزادی]] اینجا جمع می‌شوند و نقشه می‌کشند.' },
        { en: 'Samuel Adams is one of their leaders. He writes letters to every colony.', es: 'Samuel Adams es uno de sus líderes. Escribe cartas a todas las colonias.', fa: 'ساموئل آدامز یکی از رهبران آن‌هاست. او به همهٔ مستعمره‌ها نامه می‌نویسد.' }
      ] },
    { at: [20, 8], name: { en: 'The Moore family', es: 'La familia Moore', fa: 'خانوادهٔ مور' },
      look: { skin: 2, hair: '#3a2416', shirt: '#7a6a4a', pants: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'We are not Patriots or Loyalists. We just want peace and work.', es: 'No somos patriotas ni leales al rey. Solo queremos paz y trabajo.', fa: 'ما نه وطن‌پرست هستیم نه وفادار به شاه. فقط صلح و کار می‌خواهیم.' },
        { en: 'Many families wait to see what happens. A war would hurt us all.', es: 'Muchas familias esperan a ver qué pasa. Una guerra nos dañaría a todos.', fa: 'بسیاری از خانواده‌ها منتظرند ببینند چه می‌شود. جنگ به همهٔ ما ضرر می‌زند.' }
      ] },
    { at: [13, 9], name: { en: 'Mr. Eliot', es: 'Señor Eliot', fa: 'آقای الیوت' },
      look: { skin: 1, hair: '#d8d8d8', shirt: '#2a2a2a', pants: '#2a2a2a', robe: true, style: 'short' },
      lines: [
        { en: 'This is the Old South Meeting House. Yesterday, thousands of people met here.', es: 'Esta es la Old South Meeting House. Ayer se reunieron aquí miles de personas.', fa: 'اینجا خانهٔ جلسهٔ اولد ساوت است. دیروز هزاران نفر اینجا جمع شدند.' },
        { en: 'The governor would not send the tea ships away. That night, the tea went overboard.', es: 'El gobernador no quiso mandar lejos los barcos del té. Esa noche, el té fue al agua.', fa: 'والی کشتی‌های چای را پس نفرستاد. همان شب، چای به آب ریخته شد.' }
      ] },
    { at: [3, 12], name: { en: 'Mrs. Lydia Wood', es: 'Señora Lydia Wood', fa: 'خانم لیدیا وود' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#8a4a6a', pants: '#3a2a3a', style: 'bun' },
      lines: [
        { en: 'I spin my own cloth now. I will not buy British cloth.', es: 'Ahora hilo mi propia tela. No compraré tela británica.', fa: 'حالا تکهٔ خود را می‌ریسم. تکهٔ بریتانیایی نمی‌خرم.' },
        { en: 'Women called the [[daughters of liberty|Daughters of Liberty]] help with the [[boycott|boycott]].', es: 'Mujeres llamadas [[daughters of liberty|Hijas de la Libertad]] ayudan con el [[boycott|boicot]].', fa: 'زنانی به نام [[daughters of liberty|دختران آزادی]] در [[boycott|تحریم]] کمک می‌کنند.' }
      ] },
    { at: [7, 12], name: { en: 'Phoebe', es: 'Phoebe', fa: 'فیبی' },
      look: { skin: 5, hair: '#120c08', shirt: '#6a5a8a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'I am [[enslaved|enslaved]] in this house. I cannot leave, and I earn no pay.', es: 'Estoy [[enslaved|esclavizada]] en esta casa. No puedo irme y no recibo pago.', fa: 'من در این خانه [[enslaved|برده]] هستم. نمی‌توانم بروم و هیچ مزد نمی‌گیرم.' },
        { en: 'People here shout "liberty." This year, enslaved people asked lawmakers for freedom too.', es: 'Aquí la gente grita "libertad". Este año, personas esclavizadas también pidieron libertad a los legisladores.', fa: 'مردم اینجا «آزادی» فریاد می‌زنند. امسال برده‌ها هم از قانون‌گذاران آزادی خواستند.' }
      ] },
    { at: [18, 16], name: { en: 'Mrs. Ann Carter', es: 'Señora Ann Carter', fa: 'خانم اَن کارتر' },
      look: { skin: 0, hair: '#c8a060', shirt: '#a02a2a', pants: '#2a2a3a', style: 'long' },
      lines: [
        { en: 'My husband is a British soldier. He serves at the fort on Castle Island.', es: 'Mi esposo es soldado británico. Sirve en el fuerte de Castle Island.', fa: 'شوهرم سرباز بریتانیایی است. در قلعهٔ جزیرهٔ کسل خدمت می‌کند.' },
        { en: 'After the shooting in 1770, the soldiers had to leave the town.', es: 'Después de los disparos de 1770, los soldados tuvieron que salir del pueblo.', fa: 'بعد از تیراندازی سال ۱۷۷۰، سربازها مجبور شدند از شهر بیرون بروند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West edge: trees (Boston Common in the south-west). East (x 25-31): Boston Harbor (~ near the shore, = deep).
     x 24: the waterfront street. x 11: the main street. Row 5: King Street, then Long Wharf (k) into the harbor.
     Row 13: a cross street. Rows 17-18: the path and Griffin's Wharf (k), where the tea ships were tied up.
     Print shop (3,2), Town House (Q over h, x 2-5), tavern (19,2), the Moore home (20,8), Old South (13,9),
     homes (3,12) and (7,12), the Carter home (18,16). Market stalls (m) at row 10. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTT~======',
    'T.RRR......l......RRR...:~======',
    'T.hdh......l......hdh...:~======',
    'T..::::::::l............:~======',
    'T.QQQQ.....l....x.......:~======',
    'T.hhhhllllllllllllllllllkkkkkkk=',
    'Tx.....x...l............:~======',
    'T..........l.......QQQ..:~======',
    'T..........lRRR....hdh..:~======',
    'T..........lhdh.........:~======',
    'T..........l...mmm......:~======',
    'T.RRR.QQQ..l............:~======',
    'T.hdh.hdh..l............:~======',
    'Tllllllllllllllllllllllll~======',
    'T..........l............:~======',
    'TT.T.T.....l.....RRR....:~======',
    'T.T..T.....l.....hdh..x.:~======',
    'T....T.....l:::::::::::::kkkkk==',
    'T.T.T......l............:kkkkk==',
    'T.,....,...l............:~======',
    'T..T.......l...,........:~======',
    'TTTTTTTTTTTTTTTTTTTTTTTTT~======'
  ],
  start: [13, 15],

  /* finds: a clue note leads to a hidden spot (+3 coins and a camp decoration) */
  finds: [
    { clueAt: [14, 3], at: [17, 7], decor: 'feather',
      clue: { en: 'From this note, walk 3 steps east, then 4 steps south.', es: 'Desde esta nota, camina 3 pasos al este y luego 4 pasos al sur.', fa: 'از این یادداشت، ۳ قدم به شرق برو، بعد ۴ قدم به جنوب.' },
      text: { en: 'A quill pen! In 1776, Thomas Jefferson wrote the Declaration of Independence with one.', es: '¡Una pluma de ave! En 1776, Thomas Jefferson escribió la Declaración de Independencia con una.', fa: 'یک قلم پَر! در ۱۷۷۶، توماس جفرسن اعلامیهٔ استقلال را با چنین قلمی نوشت.' } },
    { clueAt: [7, 19], at: [7, 15], decor: 'flower',
      clue: { en: 'From this note, walk 4 steps north, near the trees of the Common.', es: 'Desde esta nota, camina 4 pasos al norte, cerca de los árboles del parque.', fa: 'از این یادداشت، ۴ قدم به شمال برو، نزدیک درختان باغ عمومی.' },
      text: { en: 'The Sons of Liberty met under a big elm tree. People called it the Liberty Tree.', es: 'Los Hijos de la Libertad se reunían bajo un gran olmo. Lo llamaban el Árbol de la Libertad.', fa: 'پسران آزادی زیر یک درخت بزرگ نارون جمع می‌شدند. آن را درخت آزادی می‌گفتند.' } }
  ],

  words: {
    independence: { en: 'being free to rule yourselves, not ruled by another country', es: 'ser libres para gobernarse, sin que otro país mande', fa: 'آزاد بودن برای حکومت بر خود، نه زیر حکم کشور دیگر' },
    tax: { en: 'money people must pay to the government', es: 'dinero que la gente debe pagar al gobierno', fa: 'پولی که مردم باید به حکومت بپردازند' },
    parliament: { en: 'the group that makes the laws for Britain', es: 'el grupo que hace las leyes de Gran Bretaña', fa: 'گروهی که برای بریتانیا قانون می‌سازد' },
    'taxation without representation': { en: 'being taxed by lawmakers you did not vote for', es: 'pagar impuestos que ponen legisladores por los que no votaste', fa: 'مالیه دادن به قانون‌گذارانی که به آن‌ها رأی نداده‌ای' },
    boycott: { en: 'refusing to buy something to show you disagree', es: 'negarse a comprar algo para mostrar desacuerdo', fa: 'نخریدن چیزی برای نشان دادن مخالفت' },
    'sons of liberty': { en: 'a secret Patriot group that fought British taxes', es: 'un grupo patriota secreto que luchaba contra los impuestos británicos', fa: 'یک گروه پنهانی وطن‌پرستان که با مالیهٔ بریتانیا مبارزه می‌کرد' },
    'daughters of liberty': { en: 'Patriot women who made their own cloth and goods during boycotts', es: 'mujeres patriotas que hacían su propia tela y productos durante los boicots', fa: 'زنان وطن‌پرست که هنگام تحریم، تکه و جنس خود را می‌ساختند' },
    patriot: { en: 'a colonist who wanted to resist Britain, and later to be free', es: 'un colono que quería resistir a Gran Bretaña y luego ser libre', fa: 'مستعمره‌نشینی که می‌خواست در برابر بریتانیا بایستد و بعد آزاد شود' },
    loyalist: { en: 'a colonist who stayed loyal to the British king', es: 'un colono que siguió leal al rey británico', fa: 'مستعمره‌نشینی که به شاه بریتانیا وفادار ماند' },
    massacre: { en: 'the killing of people who cannot defend themselves', es: 'la matanza de personas que no pueden defenderse', fa: 'کشتن مردمی که نمی‌توانند از خود دفاع کنند' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'natural rights': { en: 'rights every person is born with, like life and liberty', es: 'derechos con los que nace toda persona, como la vida y la libertad', fa: 'حقوقی که هر انسان با آن به دنیا می‌آید، مثل زندگی و آزادی' },
    'consent of the governed': { en: 'a government gets its power from the people it rules', es: 'un gobierno recibe su poder del pueblo que gobierna', fa: 'حکومت قدرت خود را از مردمی می‌گیرد که بر آن‌ها حکومت می‌کند' }
  },

  npcs: [
    {
      x: 7, y: 2,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Shoemaker', es: 'Zapatero', fa: 'موچی' },
      look: { skin: 1, hair: '#4a2a1a', shirt: '#6a4a2a', pants: '#2a2a2a', hat: '#2a2a2a' },
      lines: [
        { en: 'Good morning! I am a shoemaker, and a [[patriot|Patriot]].', es: '¡Buenos días! Soy zapatero y soy [[patriot|patriota]].', fa: 'صبح بخیر! من موچی هستم، و یک [[patriot|وطن‌پرست]].' },
        { en: 'Britain won the French and Indian War in 1763. That war cost a lot.', es: 'Gran Bretaña ganó la guerra franco-india en 1763. Esa guerra costó mucho.', fa: 'بریتانیا در ۱۷۶۳ جنگ فرانسه و سرخ‌پوستان را برد. آن جنگ خیلی خرچ داشت.' },
        { en: 'So [[parliament|Parliament]] [[tax|taxed]] us: the Stamp Act in 1765, the Townshend Acts in 1767.', es: 'Así que el [[parliament|Parlamento]] nos puso [[tax|impuestos]]: la Ley del Timbre en 1765 y las Leyes Townshend en 1767.', fa: 'پس [[parliament|پارلمان]] از ما [[tax|مالیه]] گرفت: قانون تمبر در ۱۷۶۵، قوانین تاونزند در ۱۷۶۷.' },
        { en: 'But we have no vote in Parliament. No [[taxation without representation|taxation without representation]]!', es: 'Pero no votamos en el Parlamento. ¡No a los [[taxation without representation|impuestos sin representación]]!', fa: 'اما ما در پارلمان رأی نداریم. [[taxation without representation|مالیه بدون نماینده]] نه!' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Why were many colonists angry about the new British taxes?', es: '¿Por qué muchos colonos estaban enojados por los nuevos impuestos británicos?', fa: 'چرا بسیاری از مردم مستعمره‌ها از مالیه‌های نو بریتانیا قهر بودند؟' },
        choices: [
          { ok: true, t: { en: 'They had no vote in Parliament', es: 'No votaban en el Parlamento', fa: 'در پارلمان رأی نداشتند' },
            why: { en: 'Yes. Lawmakers far away taxed them, and they had no say.', es: 'Sí. Legisladores lejanos les ponían impuestos, y ellos no tenían voz.', fa: 'بله. قانون‌گذاران دور از آن‌ها مالیه می‌گرفتند و آن‌ها هیچ نظری نداشتند.' } },
          { t: { en: 'The taxes paid for new schools', es: 'Los impuestos pagaban escuelas nuevas', fa: 'مالیه پول مکتب‌های نو بود' },
            why: { en: 'No. Britain used the taxes to pay war debts and soldiers.', es: 'No. Gran Bretaña usaba los impuestos para pagar deudas de guerra y soldados.', fa: 'نه. بریتانیا با مالیه قرض جنگ و معاش سربازها را می‌پرداخت.' } },
          { t: { en: 'France wrote the tax laws', es: 'Francia escribía las leyes', fa: 'فرانسه قانون مالیه را نوشت' },
            why: { en: 'No. Britain\'s Parliament wrote the tax laws. France lost the war in 1763.', es: 'No. El Parlamento británico escribía las leyes. Francia perdió la guerra en 1763.', fa: 'نه. پارلمان بریتانیا قانون مالیه را نوشت. فرانسه در ۱۷۶۳ جنگ را باخت.' } }
        ]
      }
    },
    {
      x: 17, y: 6,
      name: { en: 'Amos', es: 'Amos', fa: 'آموس' },
      role: { en: 'Sailor', es: 'Marinero', fa: 'ملاح' },
      look: { skin: 5, hair: '#120c08', shirt: '#2f5f9a', pants: '#e8e0d0', hat: '#1a1a2a' },
      lines: [
        { en: 'I am a sailor, and a free Black man. Listen to this story.', es: 'Soy marinero y soy un hombre negro libre. Escucha esta historia.', fa: 'من ملاح هستم، یک مرد سیاه‌پوست آزاد. این داستان را بشنو.' },
        { en: 'On March 5, 1770, a crowd yelled at British soldiers on King Street.', es: 'El 5 de marzo de 1770, una multitud les gritó a soldados británicos en King Street.', fa: 'در ۵ مارچ ۱۷۷۰، گروهی از مردم در سرک کینگ بر سربازان بریتانیایی فریاد زدند.' },
        { en: 'The soldiers fired. Five colonists died. Patriots called it the [[massacre|Boston Massacre]].', es: 'Los soldados dispararon. Murieron cinco colonos. Los patriotas lo llamaron la [[massacre|Masacre de Boston]].', fa: 'سربازها شلیک کردند. پنج نفر مردند. وطن‌پرستان آن را [[massacre|کشتار بوستون]] نامیدند.' },
        { en: 'Crispus Attucks died first. He was a sailor of African and Native descent.', es: 'Crispus Attucks murió primero. Era un marinero de origen africano e indígena.', fa: 'کریسپوس اتکس اول مرد. او ملاحی با ریشهٔ افریقایی و بومی بود.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Five people died. Why did Patriots call it a "massacre"?', es: 'Murieron cinco personas. ¿Por qué los patriotas lo llamaron "masacre"?', fa: 'پنج نفر مردند. چرا وطن‌پرستان آن را «کشتار» نامیدند؟' },
        choices: [
          { ok: true, t: { en: 'To turn more people against Britain', es: 'Para poner a más gente contra Gran Bretaña', fa: 'تا مردم بیشتر ضد بریتانیا شوند' },
            why: { en: 'Yes. A strong word and a famous picture by Paul Revere spread anger in all the colonies.', es: 'Sí. Una palabra fuerte y un famoso grabado de Paul Revere esparcieron el enojo por las colonias.', fa: 'بله. یک کلمهٔ سخت و یک تصویر مشهور از پال ریویر خشم را در همهٔ مستعمره‌ها پخش کرد.' } },
          { t: { en: 'Because hundreds of people were killed', es: 'Porque mataron a cientos de personas', fa: 'چون صدها نفر کشته شدند' },
            why: { en: 'No. Five people died. That was terrible, but it was not hundreds.', es: 'No. Murieron cinco personas. Fue terrible, pero no fueron cientos.', fa: 'نه. پنج نفر مردند. وحشتناک بود، اما صدها نفر نبود.' } },
          { t: { en: 'Because the king ordered the shooting', es: 'Porque el rey ordenó disparar', fa: 'چون شاه دستور شلیک داد' },
            why: { en: 'No. The king gave no such order. A court later found most soldiers not guilty.', es: 'No. El rey no dio esa orden. Después, un tribunal declaró inocentes a la mayoría de los soldados.', fa: 'نه. شاه چنین دستوری نداد. بعداً محکمه بیشتر سربازها را بی‌گناه دانست.' } }
        ]
      }
    },
    {
      x: 21, y: 14,
      name: { en: 'Mrs. Margaret Lowell', es: 'Señora Margaret Lowell', fa: 'خانم مارگرت لوول' },
      role: { en: 'Shopkeeper', es: 'Tendera', fa: 'دوکاندار' },
      look: { skin: 0, hair: '#6a4a2a', shirt: '#2a4a7a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I am a [[loyalist|Loyalist]]. I am loyal to King George III.', es: 'Soy [[loyalist|leal al rey]]. Soy leal al rey Jorge III.', fa: 'من [[loyalist|وفادار به شاه]] هستم. به شاه جورج سوم وفادارم.' },
        { en: 'Last night, men threw 342 chests of tea into the harbor.', es: 'Anoche, unos hombres tiraron 342 cajas de té al puerto.', fa: 'دیشب، چند مرد ۳۴۲ صندوق چای را در بندر انداختند.' },
        { en: 'The Tea Act let one British company sell cheap tea here. The tax stayed.', es: 'La Ley del Té dejó que una compañía británica vendiera té barato aquí. El impuesto siguió.', fa: 'قانون چای به یک شرکت بریتانیایی اجازه داد اینجا چای ارزان بفروشد. مالیه ماند.' },
        { en: 'But that tea was someone\'s property. Breaking the law is wrong, I think.', es: 'Pero ese té era propiedad de alguien. Romper la ley está mal, creo yo.', fa: 'اما آن چای مال کسی بود. به نظر من قانون‌شکنی نادرست است.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'How did many Loyalists see the Boston Tea Party?', es: '¿Cómo veían muchos leales al rey el Motín del Té de Boston?', fa: 'بسیاری از وفاداران به شاه، مهمانی چای بوستون را چطور می‌دیدند؟' },
        choices: [
          { ok: true, t: { en: 'As a crime against property', es: 'Como un delito contra la propiedad', fa: 'جرمی ضد مال مردم' },
            why: { en: 'Yes. Loyalists said the tea belonged to someone. They wanted order and the king\'s law.', es: 'Sí. Decían que el té tenía dueño. Querían orden y la ley del rey.', fa: 'بله. وفاداران می‌گفتند چای صاحب داشت. آن‌ها نظم و قانون شاه را می‌خواستند.' } },
          { t: { en: 'As a brave and fair protest', es: 'Como una protesta valiente y justa', fa: 'یک اعتراض شجاعانه و درست' },
            why: { en: 'That is how many Patriots saw it. Loyalists saw it another way.', es: 'Así lo veían muchos patriotas. Los leales al rey lo veían de otra forma.', fa: 'بسیاری از وطن‌پرستان این‌طور می‌دیدند. وفاداران به شاه طور دیگر می‌دیدند.' } },
          { t: { en: 'As a plan made by the king', es: 'Como un plan hecho por el rey', fa: 'نقشه‌ای که شاه کشید' },
            why: { en: 'No. The king did not plan it. He was very angry about it.', es: 'No. El rey no lo planeó. Se enojó mucho por eso.', fa: 'نه. شاه آن را نقشه نکشید. از آن خیلی قهر شد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 1, y: 6, text: { en: 'TOWN HOUSE · Massachusetts lawmakers and the British governor meet here.', es: 'TOWN HOUSE · Aquí se reúnen los legisladores de Massachusetts y el gobernador británico.', fa: 'تاون هاوس · قانون‌گذاران ماساچوست و والی بریتانیایی اینجا جلسه می‌کنند.' } },
    { x: 7, y: 6, text: { en: 'KING STREET · Here, on March 5, 1770, British soldiers shot five colonists.', es: 'KING STREET · Aquí, el 5 de marzo de 1770, soldados británicos mataron a cinco colonos.', fa: 'سرک کینگ · اینجا در ۵ مارچ ۱۷۷۰، سربازان بریتانیایی پنج نفر را با تیر کشتند.' } },
    { x: 16, y: 4, text: { en: 'LONG WHARF · Ships from Britain and the Caribbean unload goods here.', es: 'LONG WHARF · Aquí descargan los barcos de Gran Bretaña y del Caribe.', fa: 'بندرگاه لانگ · کشتی‌های بریتانیا و کارائیب اینجا جنس خالی می‌کنند.' } },
    { x: 22, y: 16, text: { en: 'GRIFFIN\'S WHARF · Three tea ships were tied up here: Dartmouth, Eleanor and Beaver.', es: 'GRIFFIN\'S WHARF · Aquí estaban amarrados tres barcos de té: Dartmouth, Eleanor y Beaver.', fa: 'بندرگاه گریفین · سه کشتی چای اینجا بسته بودند: دارتموث، الینور و بیور.' } }
  ],

  /* the quest: Sarah, the printer's daughter (gold !, north-west) -> Ben the apprentice by the waterfront
     (north-east) -> the end of Griffin's Wharf (south-east): a piece of a broken tea chest -> back to Sarah */
  quest: {
    stat: 'loc',
    title: { en: 'Proof for the Newspaper', es: 'Pruebas para el periódico', fa: 'ثبوت برای روزنامه' },
    giver: {
      x: 7, y: 8,
      name: { en: 'Sarah', es: 'Sarah', fa: 'سارا' },
      role: { en: 'Printer\'s daughter', es: 'Hija del impresor', fa: 'دختر چاپگر' },
      look: { skin: 1, hair: '#8a4a20', shirt: '#e8dcc0', pants: '#5a2a2a', style: 'long' },
      lines: [
        { en: 'I help my father print the newspaper. Big news happened last night!', es: 'Ayudo a mi papá a imprimir el periódico. ¡Anoche pasó algo muy grande!', fa: 'من به پدرم در چاپ روزنامه کمک می‌کنم. دیشب خبر بزرگی شد!' },
        { en: 'Men dumped the tea into the harbor. I need proof for our story.', es: 'Unos hombres tiraron el té al puerto. Necesito pruebas para nuestra noticia.', fa: 'چند مرد چای را در بندر ریختند. برای خبر خود ثبوت لازم دارم.' },
        { en: 'Ben the apprentice saw it all. Find him near the waterfront.', es: 'Ben, el aprendiz, lo vio todo. Búscalo cerca del muelle.', fa: 'بن شاگرد همه را دید. او را نزدیک ساحل بندر پیدا کن.' }
      ],
      wait: { en: 'Ben waits on the east side of town, near the waterfront street.', es: 'Ben espera en el lado este del pueblo, cerca de la calle del muelle.', fa: 'بن در طرف شرق شهر، نزدیک سرک ساحل منتظر است.' },
      thanks: { en: 'A piece of a tea chest! Now our readers will know it is true.', es: '¡Un pedazo de una caja de té! Ahora los lectores sabrán que es verdad.', fa: 'یک تکه از صندوق چای! حالا خوانندگان ما می‌دانند که راست است.' }
    },
    contact: {
      x: 22, y: 10,
      name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      role: { en: 'Carpenter\'s apprentice', es: 'Aprendiz de carpintero', fa: 'شاگرد نجار' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#7a5a3a', pants: '#2a3a5a', hat: '#5a3a1a' },
      lines: [
        { en: 'I was there! Many men painted their faces, so no one knew them.', es: '¡Yo estuve allí! Muchos hombres se pintaron la cara para que nadie los reconociera.', fa: 'من آنجا بودم! بسیاری از مردها رویشان را رنگ کردند تا کسی نشناسد.' },
        { en: 'They broke open the chests and dumped the tea. They took nothing else.', es: 'Rompieron las cajas y tiraron el té. No se llevaron nada más.', fa: 'صندوق‌ها را شکستند و چای را ریختند. هیچ چیز دیگر نبردند.' },
        { en: 'Walk south on the waterfront street to Griffin\'s Wharf. Go east to its end.', es: 'Camina al sur por la calle del muelle hasta Griffin\'s Wharf. Ve al este hasta el final.', fa: 'در سرک ساحل به جنوب تا بندرگاه گریفین برو. بعد به شرق تا آخرش برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [29, 17],
      hint: { en: 'south on the waterfront street, then east to the end of Griffin\'s Wharf', es: 'al sur por la calle del muelle, luego al este hasta el final de Griffin\'s Wharf', fa: 'به جنوب در سرک ساحل، بعد به شرق تا آخر بندرگاه گریفین' },
      found: { en: 'Here, at the end of the wharf! Tea leaves still float in the cold water.', es: '¡Aquí, al final del muelle! Las hojas de té todavía flotan en el agua fría.', fa: 'اینجا، در آخر بندرگاه! برگ‌های چای هنوز روی آب سرد شناورند.' },
      item: { icon: '📦', name: { en: 'A piece of a tea chest', es: 'Un pedazo de caja de té', fa: 'یک تکه از صندوق چای' } }
    }
  },

  scraps: [[1, 1], [23, 20], [1, 20]],
  smudges: [[16, 2], [19, 12]],

  /* the journal stone in the world: walk the road to independence, 1765 -> 1776, in order.
     Stops: the print shop (Stamp Act), King Street (Massacre), Griffin's Wharf (Tea Party),
     Long Wharf (the port closed), the Common (troops march out to Lexington and Concord),
     the Town House (where the Declaration was read aloud in Boston in July 1776). */
  challenge: {
    at: [14, 12],
    type: 'route',
    stat: 'loc',
    title: { en: 'Walk the road to independence', es: 'Recorre el camino a la independencia', fa: 'راه استقلال را بپیما' },
    intro: { en: 'The Grump scrambled the events! Walk to the 6 stops in order, oldest first.',
      es: '¡El Gruñón revolvió los hechos! Camina a las 6 paradas en orden, de la más antigua a la más nueva.',
      fa: 'غرغرو رویدادها را درهم کرد! به ترتیب به ۶ ایستگاه برو، از کهنه‌ترین شروع کن.' },
    items: [
      { icon: '📜', t: { en: 'Stamp Act, 1765 · a tax on printed paper', es: 'Ley del Timbre, 1765 · un impuesto al papel impreso', fa: 'قانون تمبر، ۱۷۶۵ · مالیه بر کاغذ چاپی' } },
      { icon: '🕯️', t: { en: 'Boston Massacre, 1770 · soldiers kill five colonists', es: 'Masacre de Boston, 1770 · soldados matan a cinco colonos', fa: 'کشتار بوستون، ۱۷۷۰ · سربازها پنج نفر را می‌کشند' } },
      { icon: '🍵', t: { en: 'Boston Tea Party, 1773 · tea dumped in the harbor', es: 'Motín del Té, 1773 · tiran el té al puerto', fa: 'مهمانی چای بوستون، ۱۷۷۳ · چای در بندر ریخته می‌شود' } },
      { icon: '⛓️', t: { en: 'Intolerable Acts, 1774 · Britain closes Boston\'s port', es: 'Leyes Intolerables, 1774 · Gran Bretaña cierra el puerto de Boston', fa: 'قوانین تحمل‌ناپذیر، ۱۷۷۴ · بریتانیا بندر بوستون را می‌بندد' } },
      { icon: '🥁', t: { en: 'Lexington and Concord, 1775 · the first battles of the war', es: 'Lexington y Concord, 1775 · las primeras batallas de la guerra', fa: 'لکسینگتن و کانکورد، ۱۷۷۵ · اولین جنگ‌های این جنگ' } },
      { icon: '🔔', t: { en: 'Declaration of Independence, 1776 · written mainly by Thomas Jefferson', es: 'Declaración de Independencia, 1776 · escrita sobre todo por Thomas Jefferson', fa: 'اعلامیهٔ استقلال، ۱۷۷۶ · بیشترش را توماس جفرسن نوشت' } }
    ],
    spots: [[5, 2], [9, 6], [27, 18], [30, 5], [3, 17], [4, 6]],
    why: { en: 'Check the years: 1765, 1770, 1773, 1774, 1775, 1776. Each event led to the next one.',
      es: 'Mira los años: 1765, 1770, 1773, 1774, 1775, 1776. Cada hecho llevó al siguiente.',
      fa: 'سال‌ها را ببین: ۱۷۶۵، ۱۷۷۰، ۱۷۷۳، ۱۷۷۴، ۱۷۷۵، ۱۷۷۶. هر رویداد به رویداد بعدی انجامید.' },
    success: { en: 'The road is in order! Each cause led to an effect, all the way to 1776.', es: '¡El camino está en orden! Cada causa llevó a un efecto, hasta 1776.', fa: 'راه به ترتیب شد! هر علت به یک نتیجه رسید، تا سال ۱۷۷۶.' }
  },

  boss: {
    at: [20, 19],
    stat: 'mov',
    need: 3,
    name: { en: 'The Tea-Stained Grump', es: 'El Gruñón Manchado de Té', fa: 'غرغروی چای‌خورده' },
    appear: { en: 'The Tea-Stained Grump is hiding in the fog near Griffin\'s Wharf!', es: '¡El Gruñón Manchado de Té se esconde en la niebla cerca de Griffin\'s Wharf!', fa: 'غرغروی چای‌خورده در مه نزدیک بندرگاه گریفین پنهان است!' },
    taunt: { en: 'Taxes, tea, meetings... so boring! Forget it all and keep quiet!', es: 'Impuestos, té, reuniones... ¡qué aburrido! ¡Olvídalo todo y quédate callado!', fa: 'مالیه، چای، جلسه... چه خسته‌کن! همه را فراموش کن و چُپ باش!' },
    win: { en: 'The fog lifts over the harbor. Journal page 2.2 floats down into your hands!', es: 'La niebla se va del puerto. ¡La página 2.2 del diario cae en tus manos!', fa: 'مه از روی بندر کنار می‌رود. صفحهٔ ۲.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'What did the Stamp Act of 1765 tax?', es: '¿Qué gravaba la Ley del Timbre de 1765?', fa: 'قانون تمبر سال ۱۷۶۵ بر چه مالیه می‌گرفت؟' },
        choices: [
          { en: 'Printed paper, like newspapers', es: 'El papel impreso, como los periódicos', fa: 'کاغذ چاپی، مثل روزنامه' },
          { en: 'Only tea, sugar and coffee', es: 'Solo el té, el azúcar y el café', fa: 'فقط چای، شکر و قهوه' },
          { en: 'Land that Native nations owned', es: 'Tierras de las naciones indígenas', fa: 'زمین‌های ملت‌های بومی' },
          { en: 'Every ship that sailed to France', es: 'Cada barco que iba a Francia', fa: 'هر کشتی که به فرانسه می‌رفت' }],
        answer: 0,
        why: { en: 'It taxed newspapers, legal papers and even playing cards. Colonists protested, and it ended in 1766.', es: 'Gravaba periódicos, documentos legales y hasta naipes. Los colonos protestaron y terminó en 1766.', fa: 'بر روزنامه، اسناد قانونی و حتی پاسور مالیه می‌گرفت. مردم اعتراض کردند و در ۱۷۶۶ تمام شد.' } },
      { q: { en: 'What happened at the Boston Massacre in 1770?', es: '¿Qué pasó en la Masacre de Boston en 1770?', fa: 'در کشتار بوستون در سال ۱۷۷۰ چه شد؟' },
        choices: [
          { en: 'Soldiers shot into a crowd', es: 'Soldados dispararon a una multitud', fa: 'سربازها به جمعیت شلیک کردند' },
          { en: 'Patriots dumped tea in the sea', es: 'Patriotas tiraron té al mar', fa: 'وطن‌پرستان چای را در بحر ریختند' },
          { en: 'The first battle of the war', es: 'La primera batalla de la guerra', fa: 'اولین جنگ این جنگ شروع شد' },
          { en: 'A fire burned King Street', es: 'Un incendio quemó King Street', fa: 'آتش سرک کینگ را سوزاند' }],
        answer: 0,
        why: { en: 'British soldiers fired into an angry crowd on King Street. Five colonists died, including Crispus Attucks.', es: 'Soldados británicos dispararon a una multitud enojada en King Street. Murieron cinco colonos, entre ellos Crispus Attucks.', fa: 'سربازان بریتانیایی در سرک کینگ به جمعیت قهرآلود شلیک کردند. پنج نفر، از جمله کریسپوس اتکس، مردند.' } },
      { q: { en: 'Why did Patriots dump the tea on December 16, 1773?', es: '¿Por qué los patriotas tiraron el té el 16 de diciembre de 1773?', fa: 'چرا وطن‌پرستان در ۱۶ دسامبر ۱۷۷۳ چای را ریختند؟' },
        choices: [
          { en: 'To protest the British tax on tea', es: 'Para protestar contra el impuesto británico al té', fa: 'برای اعتراض به مالیهٔ بریتانیا بر چای' },
          { en: 'The tea had gone bad on the ships', es: 'El té se había echado a perder en los barcos', fa: 'چای در کشتی‌ها خراب شده بود' },
          { en: 'King George asked them to do it', es: 'El rey Jorge les pidió hacerlo', fa: 'شاه جورج از آن‌ها خواست' },
          { en: 'To make room for more ships', es: 'Para hacer espacio para más barcos', fa: 'برای جای کشتی‌های بیشتر' }],
        answer: 0,
        why: { en: 'They would not pay a tax set by Parliament. So they dumped 342 chests of tea.', es: 'No querían pagar un impuesto del Parlamento. Por eso tiraron 342 cajas de té.', fa: 'نمی‌خواستند مالیهٔ پارلمان را بدهند. پس ۳۴۲ صندوق چای را ریختند.' } },
      { q: { en: 'How did Britain punish Boston in 1774?', es: '¿Cómo castigó Gran Bretaña a Boston en 1774?', fa: 'بریتانیا در سال ۱۷۷۴ بوستون را چطور جزا داد؟' },
        choices: [
          { en: 'It closed Boston\'s port', es: 'Cerró el puerto de Boston', fa: 'بندر بوستون را بست' },
          { en: 'It gave Boston more votes', es: 'Le dio a Boston más votos', fa: 'به بوستون رأی بیشتر داد' },
          { en: 'It ended the tax on tea', es: 'Quitó el impuesto al té', fa: 'مالیهٔ چای را برداشت' },
          { en: 'It sent all soldiers home', es: 'Mandó a casa a todos los soldados', fa: 'همهٔ سربازها را به خانه فرستاد' }],
        answer: 0,
        why: { en: 'Britain closed the port until the tea was paid for. Colonists called these laws the Intolerable Acts.', es: 'Gran Bretaña cerró el puerto hasta que pagaran el té. Los colonos llamaron a estas leyes las Leyes Intolerables.', fa: 'بریتانیا بندر را بست تا پول چای داده شود. مردم این قوانین را قوانین تحمل‌ناپذیر نامیدند.' } },
      { q: { en: 'Where were the first battles of the war, in April 1775?', es: '¿Dónde fueron las primeras batallas de la guerra, en abril de 1775?', fa: 'اولین جنگ‌های این جنگ در اپریل ۱۷۷۵ کجا شد؟' },
        choices: [
          { en: 'Lexington and Concord', es: 'Lexington y Concord', fa: 'لکسینگتن و کانکورد' },
          { en: 'Yorktown, Virginia', es: 'Yorktown, Virginia', fa: 'یورک‌تاون، ویرجینیا' },
          { en: 'Griffin\'s Wharf, Boston', es: 'Griffin\'s Wharf, Boston', fa: 'بندرگاه گریفین، بوستون' },
          { en: 'New York City', es: 'La ciudad de Nueva York', fa: 'شهر نیویارک' }],
        answer: 0,
        why: { en: 'British soldiers marched to take colonists\' weapons. Colonists fought them at Lexington and Concord, Massachusetts.', es: 'Soldados británicos marcharon para quitar las armas a los colonos. Los colonos pelearon en Lexington y Concord, Massachusetts.', fa: 'سربازان بریتانیایی رفتند تا سلاح مردم را بگیرند. مردم در لکسینگتن و کانکورد، ماساچوست با آن‌ها جنگیدند.' } },
      { q: { en: 'Who wrote most of the Declaration of Independence?', es: '¿Quién escribió la mayor parte de la Declaración de Independencia?', fa: 'بیشتر اعلامیهٔ استقلال را کی نوشت؟' },
        choices: [
          { en: 'Thomas Jefferson', es: 'Thomas Jefferson', fa: 'توماس جفرسن' },
          { en: 'Samuel Adams', es: 'Samuel Adams', fa: 'ساموئل آدامز' },
          { en: 'Thomas Paine', es: 'Thomas Paine', fa: 'توماس پین' },
          { en: 'King George III', es: 'El rey Jorge III', fa: 'شاه جورج سوم' }],
        answer: 0,
        why: { en: 'Jefferson of Virginia wrote most of it. Congress approved it on July 4, 1776. Paine wrote Common Sense.', es: 'Jefferson, de Virginia, escribió la mayor parte. El Congreso la aprobó el 4 de julio de 1776. Paine escribió Sentido común.', fa: 'جفرسن از ویرجینیا بیشترش را نوشت. کانگرس آن را در ۴ جولای ۱۷۷۶ قبول کرد. پین «عقل سلیم» را نوشت.' } },
      { q: { en: 'What big idea is in the Declaration of Independence?', es: '¿Qué gran idea está en la Declaración de Independencia?', fa: 'کدام فکر بزرگ در اعلامیهٔ استقلال است؟' },
        choices: [
          { en: 'People have rights no ruler can take', es: 'La gente tiene derechos que ningún gobernante puede quitar', fa: 'مردم حقوقی دارند که هیچ حاکم نمی‌گیرد' },
          { en: 'Kings get their power from God alone', es: 'Los reyes reciben su poder solo de Dios', fa: 'شاهان قدرت را فقط از خدا می‌گیرند' },
          { en: 'Only rich men should make the laws', es: 'Solo los hombres ricos deben hacer las leyes', fa: 'فقط مردان پولدار باید قانون بسازند' },
          { en: 'Colonies must always obey Britain', es: 'Las colonias siempre deben obedecer a Gran Bretaña', fa: 'مستعمره‌ها همیشه باید از بریتانیا اطاعت کنند' }],
        answer: 0,
        why: { en: 'It names natural rights: life, liberty and the pursuit of happiness. Government needs the consent of the governed.', es: 'Nombra derechos naturales: la vida, la libertad y la búsqueda de la felicidad. El gobierno necesita el consentimiento del pueblo.', fa: 'حقوق طبیعی را نام می‌برد: زندگی، آزادی و جستجوی خوشبختی. حکومت به رضایت مردم نیاز دارد.' } },
      { q: { en: 'The Declaration says "all men are created equal." Who was left out then?', es: 'La Declaración dice "todos los hombres son creados iguales". ¿A quién dejaba fuera entonces?', fa: 'اعلامیه می‌گوید «همهٔ انسان‌ها برابر آفریده شده‌اند.» آن زمان چه کسانی بیرون ماندند؟' },
        choices: [
          { en: 'Enslaved people and women', es: 'A las personas esclavizadas y a las mujeres', fa: 'برده‌ها و زنان' },
          { en: 'Farmers and shopkeepers', es: 'A los agricultores y los tenderos', fa: 'دهقانان و دوکانداران' },
          { en: 'Everyone born in Boston', es: 'A todos los nacidos en Boston', fa: 'همهٔ کسانی که در بوستون زاده شدند' },
          { en: 'White men who owned land', es: 'A los hombres blancos con tierras', fa: 'مردان سفیدپوست زمین‌دار' }],
        answer: 0,
        why: { en: 'Those words did not then include enslaved people or women. People fought for equal rights for many years.', es: 'Esas palabras no incluían entonces a las personas esclavizadas ni a las mujeres. La gente luchó muchos años por la igualdad.', fa: 'آن کلمات در آن زمان برده‌ها و زنان را شامل نمی‌شد. مردم سال‌ها برای حقوق برابر مبارزه کردند.' } }
    ]
  },

  learned: [
    { en: 'After 1763, Britain [[tax|taxed]] the colonies. Colonists said: no [[taxation without representation|taxation without representation]].', es: 'Después de 1763, Gran Bretaña puso [[tax|impuestos]] a las colonias. Los colonos dijeron: no a los [[taxation without representation|impuestos sin representación]].', fa: 'بعد از ۱۷۶۳، بریتانیا از مستعمره‌ها [[tax|مالیه]] گرفت. مردم گفتند: [[taxation without representation|مالیه بدون نماینده]] نه.' },
    { en: 'The Boston Massacre, the Tea Party and the Intolerable Acts led to war at Lexington and Concord in 1775.', es: 'La Masacre de Boston, el Motín del Té y las Leyes Intolerables llevaron a la guerra en Lexington y Concord en 1775.', fa: 'کشتار بوستون، مهمانی چای و قوانین تحمل‌ناپذیر به جنگ در لکسینگتن و کانکورد در ۱۷۷۵ انجامید.' },
    { en: 'On July 4, 1776, the Declaration named [[natural rights|natural rights]] and the [[consent of the governed|consent of the governed]]. Its "all men are created equal" left out [[enslaved|enslaved]] people and women.', es: 'El 4 de julio de 1776, la Declaración nombró los [[natural rights|derechos naturales]] y el [[consent of the governed|consentimiento de los gobernados]]. Su "todos los hombres son creados iguales" dejó fuera a las personas [[enslaved|esclavizadas]] y a las mujeres.', fa: 'در ۴ جولای ۱۷۷۶، اعلامیه از [[natural rights|حقوق طبیعی]] و [[consent of the governed|رضایت مردم]] نام برد. «همه برابر آفریده شده‌اند» آن زمان [[enslaved|برده‌ها]] و زنان را بیرون گذاشت.' }
  ],
  reflect: {
    q: { en: 'Patriots, Loyalists and neutral people saw the same events in different ways. When have you seen one event two ways?', es: 'Los patriotas, los leales al rey y los neutrales vieron los mismos hechos de formas distintas. ¿Cuándo viste un hecho de dos maneras?', fa: 'وطن‌پرستان، وفاداران به شاه و مردم بی‌طرف یک رویداد را به شکل‌های مختلف دیدند. تو کی یک رویداد را از دو طرف دیده‌ای؟' },
    starter: { en: 'One time, people saw the same thing differently when', es: 'Una vez, la gente vio lo mismo de forma distinta cuando', fa: 'یک بار، مردم یک چیز را به شکل‌های مختلف دیدند وقتی که' }
  }
};
