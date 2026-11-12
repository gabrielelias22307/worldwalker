/* TRAILWALKER · Episode 3.1 · Creating the Constitution (VUS)
   Philadelphia, summer 1787, while the Constitutional Convention meets in secret.
   North: Chestnut Street with a print shop, a tavern and a house. In front of the State House the street is covered
   in gravel (people said it was spread there to quiet the wagons). The State House has no door on the map: the
   meetings were secret. Behind it is the walled State House yard, where the journal stone and the three levers of
   the Great Compromise stand. South: Walnut Street, the market stalls, a boarding house and a home.
   The Delaware River runs along the east side, with a small dock. */
window.EPISODE = {
  id: '3.1',
  realm: 3,
  sol: 'VUS',
  title: { en: 'Creating the Constitution', es: 'La creación de la Constitución', fa: 'ساختن قانون اساسی' },
  place: { en: 'Philadelphia, 1787', es: 'Filadelfia, 1787', fa: 'فیلادلفیا، ۱۷۸۷' },
  intro: [
    { en: 'The Grump blurred the [[constitution|Constitution]] page. People forgot how the states learned to agree.',
      es: 'El Gruñón borró la página de la [[constitution|Constitución]]. La gente olvidó cómo los estados aprendieron a ponerse de acuerdo.',
      fa: 'غرغرو صفحهٔ [[constitution|قانون اساسی]] را تار کرد. مردم فراموش کردند ایالت‌ها چطور با هم موافقه کردند.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Philadelphia on the map, 1787 on the timeline */
  scenes: {
    at: [-75.15, 39.95],
    year: 1787,
    start: [
      { en: 'After the war, the 13 states lived under the Articles of Confederation.',
        es: 'Después de la guerra, los 13 estados vivían bajo los Artículos de la Confederación.',
        fa: 'بعد از جنگ، ۱۳ ایالت زیر اساسنامهٔ کنفدراسیون زندگی می‌کردند.' },
      { en: 'The national government was weak. It could not even collect taxes.',
        es: 'El gobierno nacional era débil. Ni siquiera podía cobrar impuestos.',
        fa: 'حکومت ملی ضعیف بود. حتی نمی‌توانست مالیات جمع کند.' },
      { en: 'In May 1787, delegates met in Philadelphia to make a better plan.',
        es: 'En mayo de 1787, los delegados se reunieron en Filadelfia para hacer un plan mejor.',
        fa: 'در ماه می ۱۷۸۷، نماینده‌ها در فیلادلفیا جمع شدند تا طرح بهتری بسازند.' }
    ],
    page: { en: 'The Constitution they wrote that summer is still our plan of government today.',
      es: 'La Constitución que escribieron ese verano sigue siendo nuestro plan de gobierno hoy.',
      fa: 'قانون اساسی که آن تابستان نوشتند، امروز هم طرح حکومت ماست.' },
    guess: {
      q: { en: 'Big states and small states wanted different things. What did they do?', es: 'Los estados grandes y los pequeños querían cosas distintas. ¿Qué hicieron?', fa: 'ایالت‌های بزرگ و کوچک چیزهای مختلف می‌خواستند. چه کردند؟' },
      choices: [
        { t: { en: '🤝 Each side gave a little', es: '🤝 Cada lado cedió un poco', fa: '🤝 هر طرف کمی کوتاه آمد' }, ok: true },
        { t: { en: '🚪 Everyone went home', es: '🚪 Todos se fueron a casa', fa: '🚪 همه به خانه رفتند' } }
      ],
      why: { en: 'They made deals called compromises. Each side gave up something to get a plan.', es: 'Hicieron acuerdos llamados compromisos. Cada lado cedió algo para lograr un plan.', fa: 'آن‌ها توافق‌هایی به نام سازش کردند. هر طرف چیزی را رها کرد تا طرحی بسازند.' }
    },
    next: {
      q: { en: 'Next: New York, 1789. Which rights did the first Congress add?', es: 'Ahora: Nueva York, 1789. ¿Qué derechos agregó el primer Congreso?', fa: 'بعدی: نیویارک، ۱۷۸۹. اولین کانگرس کدام حقوق را اضافه کرد؟' },
      choices: [
        { t: { en: '📜 Free speech and religion', es: '📜 Libre expresión y religión', fa: '📜 آزادی بیان و دین' }, ok: true },
        { t: { en: '👑 A king for life', es: '👑 Un rey de por vida', fa: '👑 یک پادشاه تا آخر عمر' } }
      ],
      why: { en: 'In 1789 Congress proposed amendments. Ten became the Bill of Rights in 1791.', es: 'En 1789 el Congreso propuso enmiendas. Diez se volvieron la Carta de Derechos en 1791.', fa: 'در ۱۷۸۹ کانگرس تعدیل‌هایی پیشنهاد کرد. ده تای آن در ۱۷۹۱ منشور حقوق شد.' }
    }
  },
  /* houses: who lives behind each door */
  houses: [
    { at: [4, 2], name: { en: 'Mr. Dunbar', es: 'El señor Dunbar', fa: 'آقای دنبار' },
      look: { skin: 1, hair: '#8a8a8a', shirt: '#4a3a2a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'This is my print shop. The delegates meet in secret, so I have no news!', es: 'Esta es mi imprenta. Los delegados se reúnen en secreto, ¡así que no tengo noticias!', fa: 'این چاپخانهٔ من است. نماینده‌ها مخفی جلسه دارند، پس خبری ندارم!' },
        { en: 'When they finish, every newspaper will print their plan.', es: 'Cuando terminen, todos los periódicos imprimirán su plan.', fa: 'وقتی تمام کنند، هر روزنامه طرح‌شان را چاپ می‌کند.' },
        { en: 'Then people will argue. Some will cheer it, and some will fight it.', es: 'Entonces la gente discutirá. Algunos lo aplaudirán y otros lo atacarán.', fa: 'بعد مردم بحث می‌کنند. بعضی خوش می‌شوند و بعضی مخالفت می‌کنند.' }
      ] },
    { at: [9, 2], name: { en: 'Mrs. Flynn', es: 'La señora Flynn', fa: 'خانم فلین' },
      look: { skin: 0, hair: '#b0502a', shirt: '#2f6a4a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'Welcome to my tavern! I came here from Ireland. Delegates eat here at night.', es: '¡Bienvenido a mi taberna! Vine de Irlanda. Los delegados cenan aquí.', fa: 'به میخانهٔ من خوش آمدی! من از آیرلند آمدم. نماینده‌ها شب اینجا نان می‌خورند.' },
        { en: 'Tonight they argued: who should choose the President?', es: 'Esta noche discutieron: ¿quién debe elegir al presidente?', fa: 'امشب بحث کردند: کی باید رئیس جمهور را انتخاب کند؟' },
        { en: 'Their answer: electors from each state. Today we call it the [[electoral college|Electoral College]].', es: 'Su respuesta: electores de cada estado. Hoy lo llamamos el [[electoral college|Colegio Electoral]].', fa: 'جواب‌شان: انتخاب‌کننده‌ها از هر ایالت. امروز آن را [[electoral college|کالج انتخاباتی]] می‌گوییم.' }
      ] },
    { at: [23, 2], name: { en: 'Grandpa Elias', es: 'Abuelo Elías', fa: 'پدرکلان الیاس' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#6a4a2a', pants: '#2a3a4a', style: 'short' },
      lines: [
        { en: 'Under the [[articles of confederation|Articles]], each state gets one vote in Congress.', es: 'Bajo los [[articles of confederation|Artículos]], cada estado tiene un voto en el Congreso.', fa: 'زیر [[articles of confederation|اساسنامه]]، هر ایالت در کانگرس یک رأی دارد.' },
        { en: 'Big Virginia gets one vote. Tiny Delaware gets one vote too!', es: 'La gran Virginia tiene un voto. ¡La pequeña Delaware también tiene uno!', fa: 'ویرجینیای بزرگ یک رأی دارد. دلاویر کوچک هم یک رأی دارد!' },
        { en: 'Big states say that is not fair. Small states like it.', es: 'Los estados grandes dicen que no es justo. A los pequeños les gusta.', fa: 'ایالت‌های بزرگ می‌گویند این عادلانه نیست. ایالت‌های کوچک آن را دوست دارند.' }
      ] },
    { at: [16, 13], name: { en: 'Mrs. Moore', es: 'La señora Moore', fa: 'خانم مور' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#7a3a5a', pants: '#2a2a3a', style: 'bun' },
      lines: [
        { en: 'This is my boarding house. Delegates from far away rent rooms all summer.', es: 'Esta es mi casa de huéspedes. Delegados de lejos alquilan cuartos todo el verano.', fa: 'این مهمانخانهٔ من است. نماینده‌ها از دور تمام تابستان اتاق کرایه می‌کنند.' },
        { en: 'People say Mr. Madison of Virginia writes notes every night.', es: 'La gente dice que el señor Madison, de Virginia, escribe notas cada noche.', fa: 'مردم می‌گویند آقای مدیسن از ویرجینیا هر شب یادداشت می‌نویسد.' },
        { en: 'His notes are how we know what the delegates said.', es: 'Gracias a sus notas sabemos lo que dijeron los delegados.', fa: 'از یادداشت‌های اوست که می‌دانیم نماینده‌ها چه گفتند.' }
      ] },
    { at: [25, 13], name: { en: 'Lena', es: 'Lena', fa: 'لینا' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#3a6a9a', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'I sew coats. My brother says the new plan splits power three ways.', es: 'Yo coso abrigos. Mi hermano dice que el plan nuevo divide el poder en tres.', fa: 'من کرتی می‌دوزم. برادرم می‌گوید طرح نو قدرت را سه بخش می‌کند.' },
        { en: 'Congress makes laws. A President carries them out. Courts judge them.', es: 'El Congreso hace las leyes. Un presidente las cumple. Los tribunales las juzgan.', fa: 'کانگرس قانون می‌سازد. رئیس جمهور آن را اجرا می‌کند. محکمه‌ها قضاوت می‌کنند.' },
        { en: 'Each part can stop the others. No one gets too much power.', es: 'Cada parte puede frenar a las otras. Nadie tiene demasiado poder.', fa: 'هر بخش می‌تواند دیگران را بند کند. هیچ کس قدرت زیاد نمی‌گیرد.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     Row 3: Chestnut Street; x 11-22 is the gravel (:) in front of the State House (R over h, no door).
     Rows 6-10: the walled State House yard (W), with its gate at x 14-19. Row 11: Walnut Street, with a dock (k).
     South: market stalls (m) in the west, the boarding house (Q over h) and a home (R over h). East: the Delaware. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT~=',
    'T.RRRR..QQQ......,....RRR.....~=',
    'T.hhdh..hdh...........hdh.T...~=',
    'T.lllllllll::::::::::::llllll.~=',
    'T.........RRRRRRRRRRRR........~=',
    'T.x........hhhhhhhhhhhh.......~=',
    'T........W..............W.....~=',
    'T..T.....W..T.......T...W..T..~=',
    'T........W..............W.....~=',
    'T...,....W..T.......T...W..,..~=',
    'T........WWWWW......WWWWW.....~=',
    'T.llllllllllllllllllllllllllllk=',
    'T.mmmm.mmmm...QQQQQ.....RRR...~=',
    'T.mmmm.mmmm...hhdhh.....hdh...~=',
    'T.llllllllllllllllllllllllllll~=',
    'T.mmmm.mmmm...........,.......~=',
    'T.mmmm.mmmm.......T.......T...~=',
    'T.............................~=',
    'T..T................x.....T...~=',
    'T.............................~=',
    'T.,......T.......,......,.....~=',
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTTT~='
  ],
  start: [16, 11],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 9], at: [6, 9], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps east. Stop near the State House yard.', es: 'Desde esta nota, camina 4 pasos al este. Detente cerca del patio de la Casa del Estado.', fa: 'از این یادداشت، ۴ قدم به شرق برو. نزدیک حویلی خانهٔ ایالت ایستاد شو.' },
      text: { en: 'On September 17, 1787, 39 delegates signed the Constitution. Here is a quill pen feather.', es: 'El 17 de septiembre de 1787, 39 delegados firmaron la Constitución. Aquí hay una pluma para escribir.', fa: 'در ۱۷ سپتامبر ۱۷۸۷، ۳۹ نماینده قانون اساسی را امضا کردند. اینجا یک قلم پَری است.' } },
    { clueAt: [23, 15], at: [23, 19], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south. Look on the open ground.', es: 'Desde esta nota, camina 4 pasos al sur. Busca en el terreno abierto.', fa: 'از این یادداشت، ۴ قدم به جنوب برو. روی زمین باز را ببین.' },
      text: { en: 'Under the Articles, states printed their own money. Here is an old coin.', es: 'Bajo los Artículos, los estados imprimían su propio dinero. Aquí hay una moneda antigua.', fa: 'زیر اساسنامه، ایالت‌ها پول خود را چاپ می‌کردند. اینجا یک سکهٔ کهنه است.' } }
  ],

  words: {
    constitution: { en: 'the written plan for a government and its highest law', es: 'el plan escrito de un gobierno y su ley más alta', fa: 'طرح نوشته‌شدهٔ حکومت و بالاترین قانون آن' },
    'articles of confederation': { en: 'the first US plan of government; it made Congress weak', es: 'el primer plan de gobierno de EE. UU.; dejaba débil al Congreso', fa: 'اولین طرح حکومت امریکا؛ کانگرس را ضعیف ساخت' },
    delegate: { en: 'a person sent to speak and vote for a group', es: 'una persona enviada para hablar y votar por un grupo', fa: 'کسی که فرستاده می‌شود تا از طرف یک گروه گپ بزند و رأی بدهد' },
    compromise: { en: 'a deal where each side gives up a little to agree', es: 'un acuerdo donde cada lado cede un poco', fa: 'توافقی که در آن هر طرف کمی کوتاه می‌آید' },
    'great compromise': { en: 'the House by population, the Senate with 2 per state', es: 'la Cámara según la población; el Senado con 2 por estado', fa: 'مجلس نمایندگان به اندازهٔ نفوس؛ سنا با ۲ نفر از هر ایالت' },
    'three-fifths compromise': { en: 'counted each enslaved person as three fifths of a person, for seats and taxes', es: 'contaba a cada persona esclavizada como tres quintos de persona, para asientos e impuestos', fa: 'هر برده را برای چوکی و مالیات سه پنجم یک انسان حساب می‌کرد' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'electoral college': { en: 'electors from each state who choose the President', es: 'los electores de cada estado que eligen al presidente', fa: 'انتخاب‌کننده‌های هر ایالت که رئیس جمهور را انتخاب می‌کنند' },
    'checks and balances': { en: 'each branch can stop the others from taking too much power', es: 'cada rama puede impedir que las otras tomen demasiado poder', fa: 'هر بخش می‌تواند نگذارد بخش‌های دیگر قدرت زیاد بگیرند' },
    ratify: { en: 'to approve a plan and make it official', es: 'aprobar un plan y hacerlo oficial', fa: 'تأیید کردن یک طرح و رسمی ساختن آن' }
  },

  npcs: [
    {
      x: 8, y: 4,
      name: { en: 'Peter', es: 'Peter', fa: 'پیتر' },
      role: { en: 'State House doorkeeper', es: 'Portero de la Casa del Estado', fa: 'دربان خانهٔ ایالت' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2a3a6a', pants: '#3a3a3a', hat: '#1a1a1a' },
      lines: [
        { en: 'I guard this door. Inside, [[delegate|delegates]] from 12 states meet in secret.', es: 'Yo cuido esta puerta. Adentro, [[delegate|delegados]] de 12 estados se reúnen en secreto.', fa: 'من این دروازه را پاسبانی می‌کنم. داخل، [[delegate|نماینده‌ها]] از ۱۲ ایالت مخفی جلسه دارند.' },
        { en: 'General Washington leads the meetings. Rhode Island sent no one at all.', es: 'El general Washington dirige las reuniones. Rhode Island no mandó a nadie.', fa: 'جنرال واشنگتن جلسه‌ها را رهبری می‌کند. رود آیلند هیچ کس را نفرستاد.' },
        { en: 'The Virginia Plan gives big states more votes. New Jersey wants equal votes.', es: 'El Plan de Virginia da más votos a los estados grandes. Nueva Jersey quiere votos iguales.', fa: 'طرح ویرجینیا به ایالت‌های بزرگ رأی بیشتر می‌دهد. نیوجرسی رأی برابر می‌خواهد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did small states like New Jersey dislike the Virginia Plan?', es: '¿Por qué a los estados pequeños como Nueva Jersey no les gustó el Plan de Virginia?', fa: 'چرا ایالت‌های کوچک مثل نیوجرسی طرح ویرجینیا را دوست نداشتند؟' },
        choices: [
          { ok: true, t: { en: 'Big states would get more votes', es: 'Los estados grandes tendrían más votos', fa: 'ایالت‌های بزرگ رأی بیشتر می‌گرفتند' },
            why: { en: 'Yes. Seats by population meant big states could outvote small states every time.', es: 'Sí. Asientos según la población significaba que los grandes siempre ganarían la votación.', fa: 'بله. چوکی به اندازهٔ نفوس یعنی ایالت‌های بزرگ همیشه در رأی می‌بردند.' } },
          { t: { en: 'It had no Congress of any kind', es: 'No tenía ningún tipo de Congreso', fa: 'هیچ نوع کانگرسی نداشت' },
            why: { en: 'The Virginia Plan did have a Congress, with two houses.', es: 'El Plan de Virginia sí tenía un Congreso, con dos cámaras.', fa: 'طرح ویرجینیا کانگرس داشت، با دو مجلس.' } },
          { t: { en: 'It would make Washington a king', es: 'Haría rey a Washington', fa: 'واشنگتن را پادشاه می‌ساخت' },
            why: { en: 'No plan made anyone king. Americans had just fought a war against a king.', es: 'Ningún plan hacía rey a nadie. Los estadounidenses acababan de pelear contra un rey.', fa: 'هیچ طرحی کسی را پادشاه نمی‌ساخت. امریکایی‌ها تازه با یک پادشاه جنگیده بودند.' } }
        ]
      }
    },
    {
      x: 27, y: 4,
      name: { en: 'Daniel', es: 'Daniel', fa: 'دانیال' },
      role: { en: 'Farmer from Massachusetts', es: 'Agricultor de Massachusetts', fa: 'دهقان از ماساچوست' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#8a6a3a', pants: '#3a2a1a', hat: '#5a4a2a' },
      lines: [
        { en: 'I farm in western Massachusetts. Many farmers there owe big debts and taxes.', es: 'Cultivo en el oeste de Massachusetts. Muchos agricultores allí deben deudas e impuestos grandes.', fa: 'من در غرب ماساچوست دهقانی می‌کنم. دهقانان زیادی آنجا قرض و مالیات سنگین دارند.' },
        { en: 'In 1786, Daniel Shays led angry farmers. They closed courts to save their farms.', es: 'En 1786, Daniel Shays dirigió a agricultores enojados. Cerraron tribunales para salvar sus granjas.', fa: 'در ۱۷۸۶، دانیال شیز دهقانان خشمگین را رهبری کرد. محکمه‌ها را بستند تا زمین‌شان را نجات دهند.' },
        { en: 'Congress had no money and no army to stop it. That scared many leaders.', es: 'El Congreso no tenía dinero ni ejército para pararlo. Eso asustó a muchos líderes.', fa: 'کانگرس نه پول داشت و نه اردو تا آن را بند کند. این رهبران زیادی را ترساند.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'What problem did Shays\' Rebellion show?', es: '¿Qué problema mostró la Rebelión de Shays?', fa: 'شورش شیز کدام مشکل را نشان داد؟' },
        choices: [
          { ok: true, t: { en: 'The national government was weak', es: 'El gobierno nacional era débil', fa: 'حکومت ملی ضعیف بود' },
            why: { en: 'Yes. Congress could not tax or raise an army. Leaders wanted a stronger plan.', es: 'Sí. El Congreso no podía cobrar impuestos ni formar un ejército. Los líderes querían un plan más fuerte.', fa: 'بله. کانگرس نه مالیات گرفته می‌توانست و نه اردو ساخته می‌توانست. رهبران طرح قوی‌تری خواستند.' } },
          { t: { en: 'The national army was much too big', es: 'El ejército nacional era demasiado grande', fa: 'اردوی ملی خیلی بزرگ بود' },
            why: { en: 'There was almost no national army. That was the problem.', es: 'Casi no había ejército nacional. Ese era el problema.', fa: 'تقریباً اردوی ملی وجود نداشت. مشکل همین بود.' } },
          { t: { en: 'The king had too much power here', es: 'El rey tenía demasiado poder aquí', fa: 'پادشاه اینجا قدرت زیاد داشت' },
            why: { en: 'After independence, there was no king. The problem was a weak Congress.', es: 'Después de la independencia no había rey. El problema era un Congreso débil.', fa: 'بعد از استقلال پادشاهی نبود. مشکل یک کانگرس ضعیف بود.' } }
        ]
      }
    },
    {
      x: 21, y: 17,
      name: { en: 'Hester', es: 'Hester', fa: 'هستر' },
      role: { en: 'Member of the Free African Society', es: 'Miembro de la Sociedad Africana Libre', fa: 'عضو انجمن آزاد افریقایی' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a5a2a', pants: '#3a2a3a', style: 'bun' },
      lines: [
        { en: 'I belong to the Free African Society. Free Black people here help each other.', es: 'Soy parte de la Sociedad Africana Libre. Aquí las personas negras libres se ayudan.', fa: 'من عضو انجمن آزاد افریقایی هستم. سیاه‌پوستان آزاد اینجا به هم کمک می‌کنند.' },
        { en: 'Southern delegates wanted [[enslaved|enslaved]] people counted, for more seats. Enslaved people could not vote.', es: 'Los delegados del Sur querían contar a las personas [[enslaved|esclavizadas]] para tener más asientos. Pero ellas no podían votar.', fa: 'نماینده‌های جنوب می‌خواستند [[enslaved|برده‌ها]] حساب شوند تا چوکی بیشتر بگیرند. اما برده‌ها رأی نداشتند.' },
        { en: 'The deal counted each enslaved person as three fifths of a person. It was wrong.', es: 'El acuerdo contó a cada persona esclavizada como tres quintos de persona. Fue injusto.', fa: 'این توافق هر برده را سه پنجم یک انسان حساب کرد. این نادرست بود.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'Why did Southern delegates want enslaved people counted?', es: '¿Por qué los delegados del Sur querían contar a las personas esclavizadas?', fa: 'چرا نماینده‌های جنوب می‌خواستند برده‌ها حساب شوند؟' },
        choices: [
          { ok: true, t: { en: 'To win more seats in the House', es: 'Para ganar más asientos en la Cámara', fa: 'تا چوکی بیشتر در مجلس بگیرند' },
            why: { en: 'Yes. More people counted meant more seats and more power for slave states.', es: 'Sí. Contar más personas daba más asientos y más poder a los estados esclavistas.', fa: 'بله. حساب کردن آدم بیشتر یعنی چوکی و قدرت بیشتر برای ایالت‌های برده‌دار.' } },
          { t: { en: 'To give enslaved people a vote', es: 'Para dar el voto a los esclavizados', fa: 'تا به برده‌ها حق رأی بدهند' },
            why: { en: 'No. Enslaved people still could not vote, and the deal freed no one.', es: 'No. Las personas esclavizadas seguían sin votar, y el acuerdo no liberó a nadie.', fa: 'نه. برده‌ها باز هم رأی نداشتند و این توافق کسی را آزاد نکرد.' } },
          { t: { en: 'To pay less tax to Congress', es: 'Para pagar menos impuestos', fa: 'تا مالیات کمتر به کانگرس بدهند' },
            why: { en: 'No. Counting more people also raised their taxes. They wanted the seats.', es: 'No. Contar más personas también subía sus impuestos. Ellos querían los asientos.', fa: 'نه. حساب کردن آدم بیشتر مالیات‌شان را هم بالا می‌برد. آن‌ها چوکی می‌خواستند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 5, text: { en: 'STATE HOUSE · 1787 · People said gravel was spread on the street to quiet the wagons.', es: 'CASA DEL ESTADO · 1787 · La gente decía que echaron grava en la calle para callar las carretas.', fa: 'خانهٔ ایالت · ۱۷۸۷ · مردم می‌گفتند روی سرک جغل ریختند تا صدای گادی‌ها کم شود.' } },
    { x: 20, y: 18, text: { en: 'NOTICE · The new plan needs 9 of the 13 states to [[ratify|ratify]] it.', es: 'AVISO · El plan nuevo necesita que 9 de los 13 estados lo [[ratify|ratifiquen]].', fa: 'اعلان · طرح نو باید از طرف ۹ ایالت از ۱۳ ایالت [[ratify|تأیید]] شود.' } }
  ],

  /* the quest: Samuel, a veteran (gold !), in the north-east -> Bess by the tavern in the north-west
     -> Mrs. Weber the baker at the market: pay with money she can trust -> back to Samuel with bread */
  quest: {
    stat: 'pla',
    title: { en: 'Bread for a Soldier', es: 'Pan para un soldado', fa: 'نان برای یک سرباز' },
    giver: {
      x: 27, y: 8,
      name: { en: 'Samuel Carter', es: 'Samuel Carter', fa: 'ساموئل کارتر' },
      role: { en: 'Army veteran', es: 'Veterano del ejército', fa: 'سرباز سابق' },
      look: { skin: 5, hair: '#2a2a2a', shirt: '#2a3a7a', pants: '#e8dcc0', hat: '#1a1a2a', style: 'short' },
      lines: [
        { en: 'I fought for independence. Congress paid me in paper money.', es: 'Luché por la independencia. El Congreso me pagó con dinero de papel.', fa: 'من برای استقلال جنگیدم. کانگرس به من پول کاغذی داد.' },
        { en: 'Now that paper is worth almost nothing. My family needs bread.', es: 'Ahora ese papel casi no vale nada. Mi familia necesita pan.', fa: 'حالا آن کاغذ تقریباً هیچ ارزش ندارد. خانواده‌ام نان می‌خواهد.' },
        { en: 'Bess at the tavern knows the market. Please ask her.', es: 'Bess, de la taberna, conoce el mercado. Por favor, pregúntale.', fa: 'بِس در میخانه بازار را می‌شناسد. لطفاً از او بپرس.' }
      ],
      wait: { en: 'Bess waits on the west side, near the tavern.', es: 'Bess espera en el lado oeste, cerca de la taberna.', fa: 'بِس در طرف غرب، نزدیک میخانه منتظر است.' },
      thanks: { en: 'Fresh bread! Someday I hope the whole country has money people trust.', es: '¡Pan fresco! Ojalá algún día todo el país tenga dinero confiable.', fa: 'نان تازه! امیدوارم روزی همهٔ کشور پولی داشته باشد که مردم به آن اعتماد کنند.' }
    },
    contact: {
      x: 5, y: 8,
      name: { en: 'Bess', es: 'Bess', fa: 'بِس' },
      role: { en: 'Tavern helper', es: 'Ayudante de la taberna', fa: 'کمک‌کار میخانه' },
      look: { skin: 0, hair: '#d8a040', shirt: '#9a3a3a', pants: '#3a3a4a', style: 'long' },
      lines: [
        { en: 'Congress cannot tax, so its paper money lost value. States print their own too.', es: 'El Congreso no puede cobrar impuestos, y su dinero perdió valor. Cada estado imprime el suyo.', fa: 'کانگرس مالیات گرفته نمی‌تواند، پس پول کاغذی‌اش بی‌ارزش شد. هر ایالت پول خودش را چاپ می‌کند.' },
        { en: 'Go south to Mrs. Weber, the baker at the market. Bring money she trusts.', es: 'Ve al sur con la señora Weber, la panadera del mercado. Lleva dinero confiable.', fa: 'به جنوب نزد خانم وِبر، نانوای بازار، برو. پولی ببر که به آن اعتماد کند.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 12, y: 16,
        name: { en: 'Mrs. Weber', es: 'La señora Weber', fa: 'خانم وِبر' },
        role: { en: 'Baker from Germany', es: 'Panadera de Alemania', fa: 'نانوا از آلمان' },
        look: { skin: 0, hair: '#e0c080', shirt: '#f2f2f2', pants: '#5a3a2a', style: 'bun' },
        lines: [
          { en: 'Good bread here! But I only take money that keeps its value.', es: '¡Buen pan aquí! Pero solo acepto dinero que no pierde su valor.', fa: 'نان خوب اینجاست! اما فقط پولی می‌گیرم که ارزشش را نگه دارد.' }
        ]
      },
      q: { en: 'Bring me money I can trust. Then you get bread for the soldier.', es: 'Tráeme dinero confiable. Entonces te doy pan para el soldado.', fa: 'پولی بیاور که به آن اعتماد کنم. بعد برای سرباز نان می‌گیری.' },
      choices: [
        { ok: true, at: [30, 11], icon: '🪙', t: { en: 'A pouch of silver coins', es: 'Una bolsa de monedas de plata', fa: 'یک کیسه سکهٔ نقره' },
          why: { en: 'Yes! Silver keeps its value anywhere. Ships bring these coins to the dock.', es: '¡Sí! La plata vale en todas partes. Los barcos traen estas monedas al muelle.', fa: 'بله! نقره در هر جا ارزش دارد. کشتی‌ها این سکه‌ها را به بندر می‌آورند.' } },
        { at: [24, 5], icon: '💵', t: { en: 'A stack of Continental dollars', es: 'Un fajo de dólares continentales', fa: 'یک دسته دالر کانتیننتال' },
          why: { en: 'Congress printed too many, with no taxes behind them. People said: not worth a Continental!', es: 'El Congreso imprimió demasiados, sin impuestos detrás. La gente decía: ¡no vale ni un continental!', fa: 'کانگرس آن‌قدر زیاد چاپ کرد، بدون مالیات پشتش. مردم می‌گفتند: یک کانتیننتال هم نمی‌ارزد!' } },
        { at: [2, 17], icon: '📄', t: { en: 'A Rhode Island paper note', es: 'Un billete de papel de Rhode Island', fa: 'یک نوت کاغذی رود آیلند' },
          why: { en: 'Each state printed its own money. A Pennsylvania baker does not trust Rhode Island paper.', es: 'Cada estado imprimía su dinero. Una panadera de Pensilvania no confía en papel de Rhode Island.', fa: 'هر ایالت پول خود را چاپ می‌کرد. نانوای پنسلوانیا به کاغذ رود آیلند اعتماد ندارد.' } }
      ],
      item: { icon: '🍞', name: { en: 'A loaf of bread', es: 'Una hogaza de pan', fa: 'یک قرص نان' } }
    }
  },

  scraps: [[1, 20], [29, 1], [29, 20]],
  smudges: [[6, 19], [25, 9]],

  challenge: {
    at: [16, 8],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // in the State House yard: the House lever (west), the Senate lever (east), the who-joins lever by the State House
    spots: [[11, 8], [22, 8], [16, 6]],
    stat: 'mov',
    title: { en: 'The Great Compromise', es: 'El Gran Compromiso', fa: 'سازش بزرگ' },
    intro: { en: 'Big states want seats by population. Small states want equal seats. Set the 3 levers to the deal that kept every state in.',
      es: 'Los estados grandes quieren asientos según la población. Los pequeños quieren asientos iguales. Mueve las 3 palancas hasta el acuerdo que mantuvo a todos los estados.',
      fa: 'ایالت‌های بزرگ چوکی به اندازهٔ نفوس می‌خواهند. ایالت‌های کوچک چوکی برابر می‌خواهند. ۳ اهرم را به توافقی بگذار که همهٔ ایالت‌ها را نگه داشت.' },
    switches: [
      { name: { en: 'House of Representatives seats', es: 'Asientos de la Cámara de Representantes', fa: 'چوکی‌های مجلس نمایندگان' }, icon: '🏛️', start: 1,
        states: [{ en: 'Equal for every state', es: 'Iguales para cada estado', fa: 'برابر برای هر ایالت' }, { en: 'By population', es: 'Según la población', fa: 'به اندازهٔ نفوس' }] },
      { name: { en: 'Senate seats', es: 'Asientos del Senado', fa: 'چوکی‌های سنا' }, icon: '⚖️', start: 0,
        states: [{ en: 'By population', es: 'Según la población', fa: 'به اندازهٔ نفوس' }, { en: '2 per state', es: '2 por estado', fa: '۲ نفر از هر ایالت' }] },
      { name: { en: 'Who joins the plan', es: 'Quién se une al plan', fa: 'کی به طرح می‌پیوندد' }, icon: '🤝', start: 0,
        states: [{ en: 'Only big states', es: 'Solo los estados grandes', fa: 'فقط ایالت‌های بزرگ' }, { en: 'Big and small states', es: 'Estados grandes y pequeños', fa: 'ایالت‌های بزرگ و کوچک' }] }
    ],
    results: {
      '1,1,1': { ok: true,
        t: { en: 'The House counts people. The Senate gives every state 2 seats. Big and small states both say yes!',
          es: 'La Cámara cuenta personas. El Senado da 2 asientos a cada estado. ¡Los grandes y los pequeños dicen que sí!',
          fa: 'مجلس نمایندگان مردم را حساب می‌کند. سنا به هر ایالت ۲ چوکی می‌دهد. ایالت‌های بزرگ و کوچک هر دو بله می‌گویند!' },
        show: [{ icon: '🏙️', ok: true, t: { en: 'Big states agree', es: 'Los grandes aceptan', fa: 'بزرگ‌ها موافق‌اند' } }, { icon: '🏡', ok: true, t: { en: 'Small states agree', es: 'Los pequeños aceptan', fa: 'کوچک‌ها موافق‌اند' } }, { icon: '🇺🇸', ok: true, t: { en: 'One union', es: 'Una unión', fa: 'یک اتحاد' } }] },
      '1,0,1': { ok: false,
        t: { en: 'Both houses count people. This is the Virginia Plan. Small states say big states will always win.',
          es: 'Las dos cámaras cuentan personas. Es el Plan de Virginia. Los pequeños dicen que los grandes siempre ganarán.',
          fa: 'هر دو مجلس مردم را حساب می‌کنند. این طرح ویرجینیاست. کوچک‌ها می‌گویند بزرگ‌ها همیشه می‌برند.' },
        show: [{ icon: '🏙️', ok: true, t: { en: 'Big states agree', es: 'Los grandes aceptan', fa: 'بزرگ‌ها موافق‌اند' } }, { icon: '🏡', ok: false, t: { en: 'Small states say no', es: 'Los pequeños dicen no', fa: 'کوچک‌ها نه می‌گویند' } }, { icon: '🇺🇸', ok: false, t: { en: 'No union', es: 'No hay unión', fa: 'اتحادی نیست' } }] },
      '0,1,1': { ok: false,
        t: { en: 'Every state gets equal seats in both houses. This is the New Jersey Plan. Big states say no.',
          es: 'Cada estado tiene asientos iguales en las dos cámaras. Es el Plan de Nueva Jersey. Los grandes dicen que no.',
          fa: 'هر ایالت در هر دو مجلس چوکی برابر دارد. این طرح نیوجرسی است. بزرگ‌ها نه می‌گویند.' },
        show: [{ icon: '🏙️', ok: false, t: { en: 'Big states say no', es: 'Los grandes dicen no', fa: 'بزرگ‌ها نه می‌گویند' } }, { icon: '🏡', ok: true, t: { en: 'Small states agree', es: 'Los pequeños aceptan', fa: 'کوچک‌ها موافق‌اند' } }, { icon: '🇺🇸', ok: false, t: { en: 'No union', es: 'No hay unión', fa: 'اتحادی نیست' } }] },
      '0,0,1': { ok: false,
        t: { en: 'Backwards! The House was meant to speak for the people, so it counts people. Swap the two.',
          es: '¡Al revés! La Cámara debía hablar por el pueblo, así que cuenta personas. Cambia las dos.',
          fa: 'برعکس است! مجلس نمایندگان صدای مردم است، پس مردم را حساب می‌کند. این دو را عوض کن.' },
        show: [{ icon: '🏛️', ok: false, t: { en: 'House: equal', es: 'Cámara: iguales', fa: 'مجلس: برابر' } }, { icon: '⚖️', ok: false, t: { en: 'Senate: by people', es: 'Senado: por población', fa: 'سنا: به اندازهٔ نفوس' } }] },
      '1,1,0': { ok: false,
        t: { en: 'The plan is fair, but the small states were left out. A union needs every state.',
          es: 'El plan es justo, pero dejaron fuera a los estados pequeños. Una unión necesita a todos.',
          fa: 'طرح عادلانه است، اما ایالت‌های کوچک بیرون ماندند. اتحاد به همهٔ ایالت‌ها نیاز دارد.' },
        show: [{ icon: '🏙️', ok: true, t: { en: 'Big states agree', es: 'Los grandes aceptan', fa: 'بزرگ‌ها موافق‌اند' } }, { icon: '🏡', ok: false, t: { en: 'Small states left out', es: 'Pequeños fuera', fa: 'کوچک‌ها بیرون' } }, { icon: '🇺🇸', ok: false, t: { en: 'No union', es: 'No hay unión', fa: 'اتحادی نیست' } }] }
    },
    otherwise: { ok: false,
      t: { en: 'Only big states join. Small states like Delaware walk away. That is not a United States.',
        es: 'Solo se unen los grandes. Los pequeños como Delaware se van. Eso no son los Estados Unidos.',
        fa: 'فقط ایالت‌های بزرگ می‌پیوندند. ایالت‌های کوچک مثل دلاویر می‌روند. این ایالات متحده نیست.' },
      show: [{ icon: '🏡', ok: false, t: { en: 'Small states walk away', es: 'Los pequeños se van', fa: 'کوچک‌ها می‌روند' } }, { icon: '🇺🇸', ok: false, t: { en: 'No union', es: 'No hay unión', fa: 'اتحادی نیست' } }] },
    success: { en: 'The Great Compromise! Each side gave a little, and every state stayed in.', es: '¡El Gran Compromiso! Cada lado cedió un poco y todos los estados se quedaron.', fa: 'سازش بزرگ! هر طرف کمی کوتاه آمد و همهٔ ایالت‌ها ماندند.' }
  },

  boss: {
    at: [14, 19],
    stat: 'pla',
    need: 3,
    name: { en: 'The Stubborn Grump', es: 'El Gruñón Terco', fa: 'غرغروی لجوج' },
    appear: { en: 'The Stubborn Grump is sulking near the market. He never gives an inch!', es: '¡El Gruñón Terco está enfurruñado cerca del mercado. Nunca cede ni un poco!', fa: 'غرغروی لجوج نزدیک بازار قهر کرده. هیچ وقت کوتاه نمی‌آید!' },
    taunt: { en: 'Compromise? Never! I want it ALL my way, or nobody gets anything!', es: '¿Compromiso? ¡Jamás! ¡Lo quiero TODO a mi manera, o nadie recibe nada!', fa: 'سازش؟ هرگز! همه چیز باید به میل من باشد، وگرنه هیچ کس چیزی نمی‌گیرد!' },
    win: { en: 'The fog lifts over the State House. Journal page 3.1 floats down into your hands!', es: 'La niebla se va de la Casa del Estado. ¡La página 3.1 del diario cae en tus manos!', fa: 'مه از روی خانهٔ ایالت کنار می‌رود. صفحهٔ ۳.۱ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why did leaders want to replace the Articles of Confederation?', es: '¿Por qué los líderes querían cambiar los Artículos de la Confederación?', fa: 'چرا رهبران می‌خواستند اساسنامهٔ کنفدراسیون را عوض کنند؟' },
        choices: [
          { en: 'Congress could not tax or keep an army', es: 'El Congreso no podía cobrar impuestos ni tener ejército', fa: 'کانگرس نه مالیات می‌گرفت نه اردو داشت' },
          { en: 'The king of Britain still ruled the states', es: 'El rey de Gran Bretaña aún gobernaba los estados', fa: 'پادشاه بریتانیا هنوز بر ایالت‌ها حکومت می‌کرد' },
          { en: 'The President had far too much power', es: 'El presidente tenía demasiado poder', fa: 'رئیس جمهور قدرت بسیار زیاد داشت' },
          { en: 'The national courts were much too strict', es: 'Los tribunales nacionales eran muy estrictos', fa: 'محکمه‌های ملی خیلی سخت‌گیر بودند' }],
        answer: 0,
        why: { en: 'The Articles had no President, no national courts, no taxes and no real army.', es: 'Los Artículos no tenían presidente, ni tribunales nacionales, ni impuestos, ni ejército real.', fa: 'اساسنامه نه رئیس جمهور داشت، نه محکمهٔ ملی، نه مالیات و نه اردوی واقعی.' } },
      { q: { en: 'What was Shays\' Rebellion (1786–1787)?', es: '¿Qué fue la Rebelión de Shays (1786–1787)?', fa: 'شورش شیز (۱۷۸۶–۱۷۸۷) چه بود؟' },
        choices: [
          { en: 'Farmers in debt rose up in Massachusetts', es: 'Agricultores endeudados se alzaron en Massachusetts', fa: 'دهقانان قرضدار در ماساچوست شورش کردند' },
          { en: 'A sea battle between France and Great Britain', es: 'Una batalla naval entre Francia y Gran Bretaña', fa: 'یک جنگ بحری میان فرانسه و بریتانیا' },
          { en: 'A march for women to get the vote', es: 'Una marcha para que las mujeres votaran', fa: 'یک راهپیمایی برای حق رأی زنان' },
          { en: 'A fight between Virginia and Maryland', es: 'Una pelea entre Virginia y Maryland', fa: 'یک دعوا میان ویرجینیا و مریلند' }],
        answer: 0,
        why: { en: 'Congress could not stop it. Many leaders saw that the nation needed a stronger government.', es: 'El Congreso no pudo pararla. Muchos líderes vieron que el país necesitaba un gobierno más fuerte.', fa: 'کانگرس نتوانست آن را بند کند. رهبران زیادی دیدند که کشور حکومت قوی‌تر می‌خواهد.' } },
      { q: { en: 'Why is James Madison called the Father of the Constitution?', es: '¿Por qué llaman a James Madison el Padre de la Constitución?', fa: 'چرا جیمز مدیسن را پدر قانون اساسی می‌گویند؟' },
        choices: [
          { en: 'His Virginia Plan and ideas shaped it', es: 'Su Plan de Virginia y sus ideas le dieron forma', fa: 'طرح ویرجینیا و فکرهایش آن را شکل داد' },
          { en: 'He was the first king of America', es: 'Fue el primer rey de Estados Unidos', fa: 'او اولین پادشاه امریکا بود' },
          { en: 'He printed it in his own shop', es: 'Lo imprimió en su propia imprenta', fa: 'آن را در چاپخانهٔ خودش چاپ کرد' },
          { en: 'He was the only delegate who came at all', es: 'Fue el único delegado que llegó', fa: 'او تنها نماینده‌ای بود که آمد' }],
        answer: 0,
        why: { en: 'Madison of Virginia planned the Virginia Plan and kept careful notes of the debates.', es: 'Madison, de Virginia, preparó el Plan de Virginia y tomó notas cuidadosas de los debates.', fa: 'مدیسن از ویرجینیا طرح ویرجینیا را آماده کرد و از بحث‌ها یادداشت دقیق گرفت.' } },
      { q: { en: 'What did the Great Compromise decide?', es: '¿Qué decidió el Gran Compromiso?', fa: 'سازش بزرگ چه تصمیمی گرفت؟' },
        choices: [
          { en: 'House by population, Senate 2 per state', es: 'Cámara por población, Senado 2 por estado', fa: 'مجلس به اندازهٔ نفوس، سنا ۲ از هر ایالت' },
          { en: 'Both houses with equal seats for all', es: 'Las dos cámaras con asientos iguales', fa: 'هر دو مجلس با چوکی برابر برای همه' },
          { en: 'Only one house, chosen by the President', es: 'Una sola cámara, elegida por el presidente', fa: 'فقط یک مجلس، انتخاب رئیس جمهور' },
          { en: 'Both houses by population only', es: 'Las dos cámaras solo por población', fa: 'هر دو مجلس فقط به اندازهٔ نفوس' }],
        answer: 0,
        why: { en: 'It joined the Virginia and New Jersey plans. Big and small states each got something.', es: 'Unió los planes de Virginia y Nueva Jersey. Los grandes y los pequeños recibieron algo.', fa: 'این طرح‌های ویرجینیا و نیوجرسی را یکجا کرد. بزرگ‌ها و کوچک‌ها هر کدام چیزی گرفتند.' } },
      { q: { en: 'What did the Three-Fifths Compromise do?', es: '¿Qué hizo el Compromiso de los Tres Quintos?', fa: 'سازش سه پنجم چه کرد؟' },
        choices: [
          { en: 'Counted enslaved people as 3/5 of a person', es: 'Contó a los esclavizados como 3/5 de persona', fa: 'برده‌ها را ۳/۵ یک انسان حساب کرد' },
          { en: 'Freed three of every five enslaved people', es: 'Liberó a tres de cada cinco esclavizados', fa: 'از هر پنج برده سه نفر را آزاد کرد' },
          { en: 'Gave 3 Senate seats to every 5 states', es: 'Dio 3 asientos del Senado por cada 5 estados', fa: 'برای هر ۵ ایالت ۳ چوکی سنا داد' },
          { en: 'Let 3 of every 5 voters choose the President', es: 'Dejó que 3 de 5 votantes eligieran presidente', fa: 'گذاشت ۳ از ۵ رأی‌دهنده رئیس جمهور را انتخاب کنند' }],
        answer: 0,
        why: { en: 'It counted enslaved people for seats and taxes. It gave slave states more power and freed no one.', es: 'Contaba a los esclavizados para asientos e impuestos. Dio más poder a los estados esclavistas y no liberó a nadie.', fa: 'برده‌ها را برای چوکی و مالیات حساب کرد. به ایالت‌های برده‌دار قدرت بیشتر داد و کسی را آزاد نکرد.' } },
      { q: { en: 'What did the Constitution say about the slave trade from Africa?', es: '¿Qué dijo la Constitución sobre la trata de esclavos desde África?', fa: 'قانون اساسی دربارهٔ تجارت برده از افریقا چه گفت؟' },
        choices: [
          { en: 'Congress could not ban it until 1808', es: 'El Congreso no podía prohibirla hasta 1808', fa: 'کانگرس تا ۱۸۰۸ نمی‌توانست آن را منع کند' },
          { en: 'It ended the slave trade on day one', es: 'Terminó la trata desde el primer día', fa: 'تجارت برده را از روز اول تمام کرد' },
          { en: 'Only the Senate could buy and sell people', es: 'Solo el Senado podía comprar y vender personas', fa: 'فقط سنا می‌توانست آدم بخرد و بفروشد' },
          { en: 'Each state had to ban it in 1787', es: 'Cada estado tenía que prohibirla en 1787', fa: 'هر ایالت باید آن را در ۱۷۸۷ منع می‌کرد' }],
        answer: 0,
        why: { en: 'This deal let the cruel trade go on for 20 more years. Congress banned it in 1808.', es: 'Este acuerdo dejó seguir la cruel trata 20 años más. El Congreso la prohibió en 1808.', fa: 'این توافق گذاشت تجارت ظالمانه ۲۰ سال دیگر ادامه یابد. کانگرس آن را در ۱۸۰۸ منع کرد.' } },
      { q: { en: 'Why did the Constitution split power into three branches?', es: '¿Por qué la Constitución dividió el poder en tres ramas?', fa: 'چرا قانون اساسی قدرت را به سه بخش تقسیم کرد؟' },
        choices: [
          { en: 'So no one branch gets too much power', es: 'Para que ninguna rama tenga demasiado poder', fa: 'تا هیچ بخشی قدرت زیاد نگیرد' },
          { en: 'So each state could have its own king', es: 'Para que cada estado tuviera su propio rey', fa: 'تا هر ایالت پادشاه خود را داشته باشد' },
          { en: 'So Congress could skip all elections', es: 'Para que el Congreso no tuviera elecciones', fa: 'تا کانگرس هیچ انتخاباتی نداشته باشد' },
          { en: 'So the courts could collect all taxes', es: 'Para que los tribunales cobraran los impuestos', fa: 'تا محکمه‌ها همهٔ مالیات را بگیرند' }],
        answer: 0,
        why: { en: 'With checks and balances, each branch can stop the others from taking too much power.', es: 'Con frenos y contrapesos, cada rama puede impedir que las otras tomen demasiado poder.', fa: 'با کنترل و توازن، هر بخش می‌تواند نگذارد بخش‌های دیگر قدرت زیاد بگیرند.' } },
      { q: { en: 'Anti-Federalists feared the new plan. What did they want added?', es: 'Los antifederalistas temían el plan nuevo. ¿Qué querían agregar?', fa: 'ضد فدرالیست‌ها از طرح نو می‌ترسیدند. چه چیزی را می‌خواستند اضافه شود؟' },
        choices: [
          { en: 'A bill of rights to protect people', es: 'Una carta de derechos para proteger al pueblo', fa: 'منشور حقوق برای حفاظت مردم' },
          { en: 'A king to lead the national army', es: 'Un rey para dirigir el ejército nacional', fa: 'یک پادشاه برای رهبری اردوی ملی' },
          { en: 'More power for the President alone', es: 'Más poder solo para el presidente', fa: 'قدرت بیشتر فقط برای رئیس جمهور' },
          { en: 'Fewer states in the new union', es: 'Menos estados en la nueva unión', fa: 'ایالت‌های کمتر در اتحاد نو' }],
        answer: 0,
        why: { en: 'Federalists backed the Constitution. Anti-Federalists feared a strong government and wanted rights written down.', es: 'Los federalistas apoyaban la Constitución. Los antifederalistas temían un gobierno fuerte y querían derechos escritos.', fa: 'فدرالیست‌ها از قانون اساسی حمایت کردند. ضد فدرالیست‌ها از حکومت قوی می‌ترسیدند و حقوق نوشته‌شده می‌خواستند.' } }
    ]
  },

  learned: [
    { en: 'The [[articles of confederation|Articles]] were too weak: no taxes, no army. Shays\' Rebellion showed it.', es: 'Los [[articles of confederation|Artículos]] eran muy débiles: sin impuestos ni ejército. La Rebelión de Shays lo mostró.', fa: '[[articles of confederation|اساسنامه]] خیلی ضعیف بود: نه مالیات، نه اردو. شورش شیز این را نشان داد.' },
    { en: 'The [[great compromise|Great Compromise]]: House by population, Senate 2 per state. Enslaved people were counted as three fifths.', es: 'El [[great compromise|Gran Compromiso]]: Cámara por población, Senado 2 por estado. A los esclavizados los contaron como tres quintos.', fa: '[[great compromise|سازش بزرگ]]: مجلس به اندازهٔ نفوس، سنا ۲ از هر ایالت. برده‌ها سه پنجم حساب شدند.' },
    { en: 'Three branches share power with [[checks and balances|checks and balances]]. Then states argued about whether to [[ratify|ratify]] it.', es: 'Tres ramas comparten el poder con [[checks and balances|frenos y contrapesos]]. Luego los estados discutieron si [[ratify|ratificarla]].', fa: 'سه بخش قدرت را با [[checks and balances|کنترل و توازن]] شریک هستند. بعد ایالت‌ها بحث کردند که آن را [[ratify|تأیید]] کنند یا نه.' }
  ],
  reflect: {
    q: { en: 'Think of a time you made a deal with someone. What did each side give up?', es: 'Piensa en una vez que hiciste un acuerdo con alguien. ¿Qué cedió cada lado?', fa: 'به وقتی فکر کن که با کسی توافق کردی. هر طرف چه چیزی را رها کرد؟' },
    starter: { en: 'One time I made a deal when', es: 'Una vez hice un acuerdo cuando', fa: 'یک بار توافق کردم وقتی که' }
  }
};
