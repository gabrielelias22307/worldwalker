/* CIVICWALKER · Episode 2.1 · The Constitution
   Philadelphia, September 1787, just after the Constitutional Convention. North: High Street with its long market
   stalls in the middle, a print shop, a tavern and houses. Chestnut Street runs east to west across the middle.
   South of it stands the State House (no door: all summer the doors were shut and the work was secret), and behind
   it the walled State House yard. The Delaware River runs along the east side. South-west: houses and a schoolyard.
   The charter stone asks the student to pull the levers of checks and balances so a bill becomes law fairly. */
window.EPISODE = {
  id: '2.1',
  realm: 2,
  sol: 'GOVT',
  title: { en: 'The Constitution', es: 'La Constitución', fa: 'قانون اساسی' },
  weather: { sky: 'heat', time: 'day' },
  place: { en: 'Philadelphia, 1787', es: 'Filadelfia, 1787', fa: 'فیلادلفیا، ۱۷۸۷' },
  intro: [
    { en: 'The Grump tore the page about the Constitution. Now people forget who checks whom.',
      es: 'El Gruñón rompió la página de la Constitución. Ahora la gente olvida quién controla a quién.',
      fa: 'غرغرو صفحهٔ قانون اساسی را پاره کرد. حالا مردم فراموش می‌کنند کی بر کی نظارت می‌کند.' },
    { en: 'Talk to the 3 people, then fix the charter stone in the State House yard.',
      es: 'Habla con las 3 personas y luego arregla la piedra de la carta en el patio.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ منشور را در حویلی تالار ایالتی درست کن.' }
  ],
  scenes: {
    at: [-75.15, 39.95],
    start: [
      { en: 'In the summer of 1787, delegates met in the State House in Philadelphia.',
        es: 'En el verano de 1787, los delegados se reunieron en la Casa del Estado de Filadelfia.',
        fa: 'در تابستان ۱۷۸۷، نماینده‌ها در تالار ایالتی فیلادلفیا جمع شدند.' },
      { en: 'They came to fix a weak government. Instead, they wrote a whole new plan.',
        es: 'Vinieron a arreglar un gobierno débil. En cambio, escribieron un plan totalmente nuevo.',
        fa: 'آن‌ها آمدند تا یک حکومت ضعیف را درست کنند. اما یک طرح کاملاً نو نوشتند.' },
      { en: 'On September 17, 1787, 39 delegates signed the new Constitution.',
        es: 'El 17 de septiembre de 1787, 39 delegados firmaron la nueva Constitución.',
        fa: 'در ۱۷ سپتامبر ۱۷۸۷، ۳۹ نماینده قانون اساسی نو را امضا کردند.' }
    ],
    page: { en: 'The US Constitution is the oldest written national constitution still in use.',
      es: 'La Constitución de EE. UU. es la constitución nacional escrita más antigua que aún se usa.',
      fa: 'قانون اساسی امریکا کهنه‌ترین قانون اساسی نوشته‌شدهٔ ملی است که هنوز کار می‌کند.' },
    guess: {
      q: { en: 'All summer, guards kept the State House doors shut. Why?', es: 'Todo el verano, unos guardias mantuvieron cerradas las puertas. ¿Por qué?', fa: 'تمام تابستان، نگهبانان دروازه‌های تالار ایالتی را بسته نگه داشتند. چرا؟' },
      choices: [
        { t: { en: '🤫 To keep talks secret', es: '🤫 Para guardar el secreto', fa: '🤫 تا گپ‌ها پنهان بماند' }, ok: true },
        { t: { en: '❄️ To keep warm', es: '❄️ Para no tener frío', fa: '❄️ تا گرم بمانند' } }
      ],
      why: { en: 'The work was secret, so delegates could argue freely and change their minds.', es: 'El trabajo era secreto, para que los delegados discutieran con libertad y cambiaran de idea.', fa: 'کار پنهانی بود، تا نماینده‌ها آزادانه بحث کنند و فکر خود را عوض کنند.' }
    },
    next: {
      q: { en: 'Next: Virginia votes in 1788. What did George Mason and Patrick Henry want?', es: 'Ahora: Virginia vota en 1788. ¿Qué querían George Mason y Patrick Henry?', fa: 'بعدی: ویرجینیا در ۱۷۸۸ رأی می‌دهد. جورج میسن و پاتریک هنری چه می‌خواستند؟' },
      choices: [
        { t: { en: '📜 A list of rights', es: '📜 Una lista de derechos', fa: '📜 فهرست حقوق' }, ok: true },
        { t: { en: '👑 A king', es: '👑 Un rey', fa: '👑 یک پادشاه' } }
      ],
      why: { en: 'They feared a strong national government. They wanted a list of rights to protect people.', es: 'Temían un gobierno nacional fuerte. Querían una lista de derechos para proteger a la gente.', fa: 'آن‌ها از یک حکومت ملی قوی می‌ترسیدند. فهرست حقوق می‌خواستند تا از مردم محافظت شود.' }
    }
  },
  houses: [
    { at: [3, 2], name: { en: 'Widow Hall', es: 'La viuda Hall', fa: 'بیوه هال' },
      look: { skin: 0, hair: '#8a8070', shirt: '#4a5a7a', pants: '#2a2a2a', style: 'bun', hat: '#f0ece0' },
      lines: [
        { en: 'My husband taught me to print. Now I run this print shop.', es: 'Mi esposo me enseñó a imprimir. Ahora yo dirijo esta imprenta.', fa: 'شوهرم چاپ کردن را به من یاد داد. حالا من این چاپخانه را می‌گردانم.' },
        { en: 'We print newspapers, so people know what their government does.', es: 'Imprimimos periódicos, para que la gente sepa qué hace su gobierno.', fa: 'ما روزنامه چاپ می‌کنیم، تا مردم بدانند حکومت‌شان چه می‌کند.' },
        { en: 'All summer, we had no news from the State House at all!', es: '¡Todo el verano no tuvimos ni una noticia de la Casa del Estado!', fa: 'تمام تابستان، هیچ خبری از تالار ایالتی نداشتیم!' }
      ] },
    { at: [8, 2], name: { en: 'Mr. Reilly', es: 'El señor Reilly', fa: 'آقای رایلی' },
      look: { skin: 1, hair: '#a04a20', shirt: '#e8dcc0', pants: '#4a3a2a', style: 'short' },
      lines: [
        { en: 'Welcome to my tavern! Delegates ate here all summer.', es: '¡Bienvenido a mi taberna! Los delegados comieron aquí todo el verano.', fa: 'به مهمانخانهٔ من خوش آمدی! نماینده‌ها تمام تابستان اینجا غذا خوردند.' },
        { en: 'Fifty-five delegates came from 12 states. Rhode Island sent nobody.', es: 'Vinieron cincuenta y cinco delegados de 12 estados. Rhode Island no mandó a nadie.', fa: 'پنجاه و پنج نماینده از ۱۲ ایالت آمدند. رود آیلند هیچ کس را نفرستاد.' },
        { en: 'Even at dinner, they would not tell me one secret!', es: '¡Ni en la cena me contaron un solo secreto!', fa: 'حتی سر نان شب، یک راز هم به من نگفتند!' }
      ] },
    { at: [18, 2], name: { en: 'Hannah', es: 'Hannah', fa: 'هانا' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a2a5a', pants: '#2a2a3a', style: 'bun', hat: '#f0e8d8' },
      lines: [
        { en: 'I am a free Black woman. I sew dresses for a living.', es: 'Soy una mujer negra libre. Coso vestidos para ganarme la vida.', fa: 'من یک زن سیاه‌پوست آزاد هستم. برای زندگی لباس می‌دوزم.' },
        { en: 'In 1780, Pennsylvania passed a law to slowly end slavery here.', es: 'En 1780, Pensilvania aprobó una ley para terminar poco a poco la esclavitud aquí.', fa: 'در ۱۷۸۰، پنسیلوانیا قانونی ساخت تا برده‌داری را آهسته آهسته اینجا ختم کند.' },
        { en: 'But the new Constitution protects slavery. That breaks my heart.', es: 'Pero la nueva Constitución protege la esclavitud. Eso me rompe el corazón.', fa: 'اما قانون اساسی نو از برده‌داری محافظت می‌کند. این دلم را می‌شکند.' }
      ] },
    { at: [3, 13], name: { en: 'Grandpa Klaus', es: 'Abuelo Klaus', fa: 'پدرکلان کلاوس' },
      look: { skin: 0, hair: '#e0e0e0', shirt: '#5a7a3a', pants: '#3a3a3a', style: 'short' },
      lines: [
        { en: 'I came from Germany. Here, the nation and my state share power.', es: 'Vine de Alemania. Aquí, la nación y mi estado comparten el poder.', fa: 'من از آلمان آمدم. اینجا، کشور و ایالت من قدرت را شریک دارند.' },
        { en: 'That is [[federalism|federalism]]. The nation makes money; my state runs its own courts.', es: 'Eso es el [[federalism|federalismo]]. La nación hace el dinero; mi estado tiene sus propios tribunales.', fa: 'این [[federalism|فدرالیسم]] است. کشور پول می‌سازد؛ ایالت من محکمه‌های خود را دارد.' },
        { en: 'And no leader is above the law. That is [[limited government|limited government]].', es: 'Y ningún líder está por encima de la ley. Eso es [[limited government|gobierno limitado]].', fa: 'و هیچ رهبری بالاتر از قانون نیست. این [[limited government|حکومت محدود]] است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     North (y 0-8): High Street, the market stalls (m) down the middle, a print shop, a tavern and Hannah's house.
     y 9: Chestnut Street. y 10-11: the State House (R over h), with no door: the work inside was secret.
     South-east: the State House yard, walled on the west (W) with a gate on the path at (15,16).
     South-west: houses, a well (O), Grandpa Klaus's house and the schoolyard. East edge: the Delaware River. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTTTTT~~=',
    'T.RRR..QQQ..T...TRRR....T...,~~=',
    'T.hdh..hdh.......hdh.........~~=',
    'T.lllllllllllllllllllllllllll~~=',
    'T.l.mmmm..mmmm..mmmm..mmmm.l.~~=',
    'T.l.mmmm..mmmm..mmmm..mmmm.l.~~=',
    'T.lllllllllllllllllllllllllll~~=',
    'T.x..T....T...,..T...T....T..~~=',
    'T.....,......x.......,.......~~=',
    'Tlllllllllllllllllllllllllllll~=',
    'T...T...:.......RRRRRRRRRR...,~=',
    'T.......:...T...hhhhhhhhhh....~=',
    'T.QQQ...:.......:::::::::::...~=',
    'T.hdh...:.....TW....:.....:.T.~=',
    'T.......:......W.T..:..T..:...~=',
    'T.T.....:...O..W....:.....:...~=',
    'T.......::::::::::::::::::::..~=',
    'T.......:......W....:.....:...~=',
    'T.......:...,..W.T..:..T..:...~=',
    'T.,.....:......W....:.....:...~=',
    'T...........T..W..............~=',
    'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW'
  ],
  start: [7, 8],

  finds: [
    { clueAt: [6, 11], at: [6, 15], decor: 'feather',
      clue: { en: 'From this note, walk 4 steps south. Look near the well.', es: 'Desde esta nota, camina 4 pasos al sur. Busca cerca del pozo.', fa: 'از این یادداشت، ۴ قدم به جنوب برو. نزدیک چاه را ببین.' },
      text: { en: 'A feather pen! The delegates wrote the Constitution by hand, with pens like this.', es: '¡Una pluma! Los delegados escribieron la Constitución a mano, con plumas como esta.', fa: 'یک قلم پَر! نماینده‌ها قانون اساسی را با دست و با قلم‌هایی مثل این نوشتند.' } },
    { clueAt: [25, 19], at: [28, 19], decor: 'coinold',
      clue: { en: 'From this note, walk 3 steps east, toward the river.', es: 'Desde esta nota, camina 3 pasos al este, hacia el río.', fa: 'از این یادداشت، ۳ قدم به شرق برو، به طرف دریا.' },
      text: { en: 'An old coin! Under the Articles, each state could print its own money.', es: '¡Una moneda vieja! Con los Artículos, cada estado podía imprimir su propio dinero.', fa: 'یک سکهٔ کهنه! زیر اساسنامهٔ کنفدراسیون، هر ایالت می‌توانست پول خود را چاپ کند.' } }
  ],

  words: {
    'articles of confederation': { en: 'the first US plan of government, used from 1781 to 1789', es: 'el primer plan de gobierno de EE. UU., usado de 1781 a 1789', fa: 'اولین طرح حکومت امریکا، از ۱۷۸۱ تا ۱۷۸۹' },
    constitution: { en: 'the written plan for a government and its highest law', es: 'el plan escrito de un gobierno y su ley más alta', fa: 'طرح نوشته‌شدهٔ حکومت و بالاترین قانون آن' },
    delegate: { en: 'a person sent to speak and vote for a group', es: 'una persona enviada para hablar y votar por un grupo', fa: 'کسی که فرستاده می‌شود تا از طرف یک گروه گپ بزند و رأی بدهد' },
    branch: { en: 'one part of the government, with its own job', es: 'una parte del gobierno, con su propio trabajo', fa: 'یک بخش حکومت، با کار خودش' },
    'separation of powers': { en: 'splitting power into three branches: make laws, carry them out, judge them', es: 'dividir el poder en tres ramas: hacer leyes, cumplirlas y juzgarlas', fa: 'تقسیم قدرت به سه بخش: ساختن قانون، اجرای آن، و قضاوت آن' },
    'checks and balances': { en: 'each branch can stop the others from taking too much power', es: 'cada rama puede impedir que las otras tomen demasiado poder', fa: 'هر بخش می‌تواند نگذارد بخش‌های دیگر قدرت زیاد بگیرند' },
    veto: { en: 'when the President says no to a bill', es: 'cuando el presidente dice que no a un proyecto de ley', fa: 'وقتی رئیس جمهور به یک طرح قانون «نه» می‌گوید' },
    override: { en: 'Congress beats a veto: two thirds of both houses vote yes', es: 'el Congreso vence un veto: dos tercios de ambas cámaras votan sí', fa: 'کانگرس وتو را می‌شکند: دو سوم هر دو مجلس «بله» می‌گویند' },
    'popular sovereignty': { en: 'the government gets its power from the people', es: 'el gobierno recibe su poder del pueblo', fa: 'حکومت قدرت خود را از مردم می‌گیرد' },
    'limited government': { en: 'the government has only the powers the people give it; leaders follow the law', es: 'el gobierno solo tiene los poderes que le da el pueblo; los líderes siguen la ley', fa: 'حکومت فقط قدرتی را دارد که مردم به آن می‌دهند؛ رهبران از قانون پیروی می‌کنند' },
    federalism: { en: 'power is shared between the nation and the states', es: 'el poder se comparte entre la nación y los estados', fa: 'قدرت میان کشور و ایالت‌ها شریک است' },
    compromise: { en: 'each side gives up a little to agree', es: 'cada lado cede un poco para ponerse de acuerdo', fa: 'هر طرف کمی کوتاه می‌آید تا موافقه کنند' },
    'great compromise': { en: 'the House by population, the Senate with 2 per state', es: 'la Cámara según la población; el Senado con 2 por estado', fa: 'مجلس نمایندگان به اندازهٔ نفوس؛ سنا با ۲ نفر از هر ایالت' },
    'three-fifths compromise': { en: 'counted each enslaved person as three fifths of a person, for seats', es: 'contaba a cada persona esclavizada como tres quintos de persona, para los asientos', fa: 'هر برده را برای چوکی‌ها سه پنجم یک انسان حساب می‌کرد' }
  },

  npcs: [
    {
      x: 9, y: 5,
      name: { en: 'Peggy', es: 'Peggy', fa: 'پگی' },
      role: { en: 'Market seller', es: 'Vendedora del mercado', fa: 'فروشندهٔ بازار' },
      look: { skin: 1, hair: '#6a3a1a', shirt: '#c07a3a', pants: '#3a3a5a', style: 'long', hat: '#f0ece0' },
      lines: [
        { en: 'Since 1781, the [[articles of confederation|Articles of Confederation]] have been our plan of government.', es: 'Desde 1781, los [[articles of confederation|Artículos de la Confederación]] son nuestro plan de gobierno.', fa: 'از ۱۷۸۱، [[articles of confederation|اساسنامهٔ کنفدراسیون]] طرح حکومت ما بوده است.' },
        { en: 'Under them, Congress cannot collect taxes. It must beg the states for money.', es: 'Con ellos, el Congreso no puede cobrar impuestos. Tiene que pedir dinero a los estados.', fa: 'زیر آن، کانگرس مالیات گرفته نمی‌تواند. باید از ایالت‌ها پول خواهش کند.' },
        { en: 'There is no President and no national court. Each state acts alone.', es: 'No hay presidente ni tribunal nacional. Cada estado actúa solo.', fa: 'رئیس جمهور و محکمهٔ ملی وجود ندارد. هر ایالت تنها کار می‌کند.' },
        { en: 'Last winter, poor farmers in Massachusetts rose up. Congress had no army to help.', es: 'El invierno pasado, granjeros pobres de Massachusetts se rebelaron. El Congreso no tenía ejército para ayudar.', fa: 'زمستان گذشته، دهقانان فقیر در ماساچوست شورش کردند. کانگرس اردویی برای کمک نداشت.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Why was the government under the Articles of Confederation too weak?', es: '¿Por qué era muy débil el gobierno de los Artículos de la Confederación?', fa: 'چرا حکومت زیر اساسنامهٔ کنفدراسیون خیلی ضعیف بود؟' },
        choices: [
          { ok: true, t: { en: 'Congress could not collect taxes', es: 'El Congreso no podía cobrar impuestos', fa: 'کانگرس مالیات گرفته نمی‌توانست' },
            why: { en: 'Yes. With no taxes, Congress had no money to pay debts or an army.', es: 'Sí. Sin impuestos, el Congreso no tenía dinero para pagar deudas ni un ejército.', fa: 'بله. بدون مالیات، کانگرس پولی برای پرداخت قرض یا اردو نداشت.' } },
          { t: { en: 'A king had all the power', es: 'Un rey tenía todo el poder', fa: 'یک پادشاه همهٔ قدرت را داشت' },
            why: { en: 'No. There was no king, and not even a President. The states held most power.', es: 'No. No había rey, ni siquiera presidente. Los estados tenían casi todo el poder.', fa: 'نه. پادشاهی نبود، حتی رئیس جمهور هم نبود. بیشتر قدرت دست ایالت‌ها بود.' } },
          { t: { en: 'The courts ran the whole nation', es: 'Los tribunales dirigían toda la nación', fa: 'محکمه‌ها همهٔ کشور را اداره می‌کردند' },
            why: { en: 'No. The Articles had no national courts at all.', es: 'No. Los Artículos no tenían ningún tribunal nacional.', fa: 'نه. اساسنامهٔ کنفدراسیون اصلاً محکمهٔ ملی نداشت.' } }
        ]
      }
    },
    {
      x: 20, y: 8,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'State House doorkeeper', es: 'Portero de la Casa del Estado', fa: 'دربان تالار ایالتی' },
      look: { skin: 3, hair: '#1a1208', shirt: '#2f4f7a', pants: '#e8e0d0', hat: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'All summer, I guarded these doors. The talks inside were secret.', es: 'Todo el verano cuidé estas puertas. Las reuniones de adentro eran secretas.', fa: 'تمام تابستان، از این دروازه‌ها نگهبانی کردم. گپ‌های داخل پنهانی بود.' },
        { en: 'George Washington led the meetings. James Madison took careful notes.', es: 'George Washington dirigió las reuniones. James Madison tomó notas con cuidado.', fa: 'جورج واشنگتن جلسه‌ها را رهبری کرد. جیمز مدیسن با دقت یادداشت گرفت.' },
        { en: 'The new plan splits power into three parts: [[separation of powers|separation of powers]].', es: 'El nuevo plan divide el poder en tres partes: [[separation of powers|separación de poderes]].', fa: 'طرح نو قدرت را به سه بخش تقسیم می‌کند: [[separation of powers|جدایی قدرت‌ها]].' },
        { en: 'Congress makes the laws. The President carries them out. Courts judge them.', es: 'El Congreso hace las leyes. El presidente las cumple. Los tribunales las juzgan.', fa: 'کانگرس قانون می‌سازد. رئیس جمهور آن را اجرا می‌کند. محکمه‌ها آن را قضاوت می‌کنند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'In the new plan, what is the job of the courts?', es: 'En el nuevo plan, ¿cuál es el trabajo de los tribunales?', fa: 'در طرح نو، کار محکمه‌ها چیست؟' },
        choices: [
          { ok: true, t: { en: 'To judge the laws and cases', es: 'Juzgar las leyes y los casos', fa: 'قضاوت قانون‌ها و دعواها' },
            why: { en: 'Right! The courts are the judicial branch. They judge what laws mean.', es: '¡Correcto! Los tribunales son la rama judicial. Juzgan qué significan las leyes.', fa: 'درست! محکمه‌ها بخش قضایی هستند. قضاوت می‌کنند قانون‌ها چه معنی دارند.' } },
          { t: { en: 'To write and pass new laws', es: 'Escribir y aprobar leyes nuevas', fa: 'نوشتن و تصویب قانون‌های نو' },
            why: { en: 'No. Making laws is the job of Congress, the legislative branch.', es: 'No. Hacer leyes es el trabajo del Congreso, la rama legislativa.', fa: 'نه. ساختن قانون کار کانگرس، بخش قانون‌گذاری، است.' } },
          { t: { en: 'To lead the army and the nation', es: 'Dirigir el ejército y la nación', fa: 'رهبری اردو و کشور' },
            why: { en: 'No. The President leads the army and carries out the laws.', es: 'No. El presidente dirige el ejército y hace cumplir las leyes.', fa: 'نه. رئیس جمهور اردو را رهبری می‌کند و قانون را اجرا می‌کند.' } }
        ]
      }
    },
    {
      x: 18, y: 19,
      name: { en: 'Lydia', es: 'Lydia', fa: 'لیدیا' },
      role: { en: 'Newspaper writer', es: 'Escritora de periódico', fa: 'نویسندهٔ روزنامه' },
      look: { skin: 2, hair: '#2a1a10', shirt: '#2f8f6a', pants: '#3a2a20', style: 'long' },
      lines: [
        { en: 'Big states wanted seats by population. Small states wanted equal seats.', es: 'Los estados grandes querían asientos según la población. Los pequeños querían asientos iguales.', fa: 'ایالت‌های بزرگ چوکی به اندازهٔ نفوس می‌خواستند. ایالت‌های کوچک چوکی برابر می‌خواستند.' },
        { en: 'The [[great compromise|Great Compromise]]: the House by population, the Senate 2 per state.', es: 'El [[great compromise|Gran Compromiso]]: la Cámara según la población; el Senado, 2 por estado.', fa: '[[great compromise|سازش بزرگ]]: مجلس نمایندگان به اندازهٔ نفوس؛ سنا ۲ نفر از هر ایالت.' },
        { en: 'Then they argued about enslaved people. Southern states wanted them counted for seats.', es: 'Luego discutieron sobre las personas esclavizadas. Los estados del sur querían contarlas para tener asientos.', fa: 'بعد دربارهٔ بردگان بحث کردند. ایالت‌های جنوبی می‌خواستند آن‌ها برای چوکی حساب شوند.' },
        { en: 'The [[three-fifths compromise|Three-Fifths Compromise]] counted each enslaved person as three fifths of a person.', es: 'El [[three-fifths compromise|Compromiso de los Tres Quintos]] contó a cada persona esclavizada como tres quintos de persona.', fa: '[[three-fifths compromise|سازش سه پنجم]] هر برده را سه پنجم یک انسان حساب کرد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Under the Great Compromise, how many senators does each state get?', es: 'Con el Gran Compromiso, ¿cuántos senadores tiene cada estado?', fa: 'زیر سازش بزرگ، هر ایالت چند سناتور دارد؟' },
        choices: [
          { ok: true, t: { en: 'Two for every state', es: 'Dos por cada estado', fa: 'دو نفر برای هر ایالت' },
            why: { en: 'Yes. Every state gets 2 senators. In the House, bigger states get more seats.', es: 'Sí. Cada estado tiene 2 senadores. En la Cámara, los estados grandes tienen más asientos.', fa: 'بله. هر ایالت ۲ سناتور دارد. در مجلس نمایندگان، ایالت‌های بزرگ چوکی بیشتر دارند.' } },
          { t: { en: 'More for big states', es: 'Más para los grandes', fa: 'بیشتر برای بزرگ‌ها' },
            why: { en: 'That is the House, by population. In the Senate, each state gets 2.', es: 'Esa es la Cámara, según la población. En el Senado, cada estado tiene 2.', fa: 'این مجلس نمایندگان است، به اندازهٔ نفوس. در سنا، هر ایالت ۲ نفر دارد.' } },
          { t: { en: 'One for every city', es: 'Uno por cada ciudad', fa: 'یکی برای هر شهر' },
            why: { en: 'No. Senators speak for a whole state, and each state gets 2.', es: 'No. Los senadores hablan por todo un estado, y cada estado tiene 2.', fa: 'نه. سناتورها از طرف یک ایالت کامل گپ می‌زنند، و هر ایالت ۲ نفر دارد.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 7, text: { en: 'HIGH STREET MARKET · PHILADELPHIA · 1787 · The biggest city in the United States.', es: 'MERCADO DE HIGH STREET · FILADELFIA · 1787 · La ciudad más grande de Estados Unidos.', fa: 'بازار سرک های · فیلادلفیا · ۱۷۸۷ · بزرگ‌ترین شهر ایالات متحده.' } },
    { x: 13, y: 8, text: { en: 'THE STATE HOUSE · Across Chestnut Street · Here the Constitution was written, behind closed doors.', es: 'LA CASA DEL ESTADO · Al otro lado de Chestnut Street · Aquí se escribió la Constitución, a puertas cerradas.', fa: 'تالار ایالتی · آن طرف سرک چستنات · قانون اساسی اینجا پشت دروازه‌های بسته نوشته شد.' } }
  ],

  /* the quest: Jonas the printer (gold !) by the print shop -> Sarah the teacher, south of Chestnut Street
     -> trade with Esther the type maker by the river: bring what shows the people's power -> back to Jonas */
  quest: {
    stat: 'loc',
    title: { en: 'We the People', es: 'Nosotros, el Pueblo', fa: 'ما مردم' },
    giver: {
      x: 5, y: 2,
      name: { en: 'Jonas', es: 'Jonás', fa: 'یوناس' },
      role: { en: 'Printer', es: 'Impresor', fa: 'چاپگر' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#e8e0d0', pants: '#3a3a3a', hat: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'I will print the new Constitution! Its first words are big: We the People.', es: '¡Voy a imprimir la nueva Constitución! Sus primeras palabras son grandes: Nosotros, el Pueblo.', fa: 'من قانون اساسی نو را چاپ می‌کنم! کلمه‌های اولش بزرگ است: ما مردم.' },
        { en: 'But the Grump stole my metal letters! Ask Sarah the teacher, south of Chestnut Street.', es: '¡Pero el Gruñón se robó mis letras de metal! Pregúntale a Sarah, la maestra, al sur de Chestnut.', fa: 'اما غرغرو حرف‌های فلزی‌ام را دزدید! از سارهٔ معلم بپرس، جنوب سرک چستنات.' }
      ],
      wait: { en: 'Sarah teaches south of Chestnut Street, near the schoolyard path.', es: 'Sarah enseña al sur de Chestnut Street, cerca del camino de la escuela.', fa: 'ساره در جنوب سرک چستنات، نزدیک راه مکتب، درس می‌دهد.' },
      thanks: { en: 'We the People! The government gets its power from the people. Thank you!', es: '¡Nosotros, el Pueblo! El gobierno recibe su poder del pueblo. ¡Gracias!', fa: 'ما مردم! حکومت قدرت خود را از مردم می‌گیرد. تشکر!' }
    },
    contact: {
      x: 10, y: 14,
      name: { en: 'Sarah', es: 'Sarah', fa: 'ساره' },
      role: { en: 'Teacher', es: 'Maestra', fa: 'معلم' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a4a8a', pants: '#2a3a5a', style: 'bun' },
      lines: [
        { en: 'We the People means the people give the government its power.', es: 'Nosotros, el Pueblo, quiere decir que el pueblo le da el poder al gobierno.', fa: '«ما مردم» یعنی مردم به حکومت قدرت می‌دهند.' },
        { en: 'That is [[popular sovereignty|popular sovereignty]]. Not a king, not the rich: the people.', es: 'Eso es la [[popular sovereignty|soberanía popular]]. Ni un rey ni los ricos: el pueblo.', fa: 'این [[popular sovereignty|حاکمیت مردم]] است. نه پادشاه، نه پولدارها: مردم.' },
        { en: 'Esther makes letters by the river, north-east. Bring her what shows the people\'s power.', es: 'Esther hace letras junto al río, al noreste. Llévale lo que muestra el poder del pueblo.', fa: 'استر کنار دریا، در شمال شرق، حرف می‌سازد. چیزی برایش ببر که قدرت مردم را نشان دهد.' }
      ]
    },
    action: {
      type: 'trade',
      trader: {
        x: 28, y: 8,
        name: { en: 'Esther', es: 'Esther', fa: 'استر' },
        role: { en: 'Type maker', es: 'Fundidora de letras', fa: 'حرف‌ساز' },
        look: { skin: 2, hair: '#3a2416', shirt: '#7a2a2a', pants: '#2a2a2a', style: 'long' },
        lines: [
          { en: 'I make metal letters for printers. I have a set: We the People.', es: 'Hago letras de metal para impresores. Tengo un juego: Nosotros, el Pueblo.', fa: 'من برای چاپگرها حرف فلزی می‌سازم. یک دسته دارم: ما مردم.' }
        ]
      },
      q: { en: 'Bring me something that shows where a government\'s power comes from. Then the letters are yours!', es: 'Tráeme algo que muestre de dónde viene el poder de un gobierno. ¡Y las letras son tuyas!', fa: 'چیزی برایم بیاور که نشان دهد قدرت حکومت از کجا می‌آید. بعد حرف‌ها از تو!' },
      choices: [
        { ok: true, at: [13, 19], icon: '🗳️', t: { en: 'A box of ballots from a town vote', es: 'Una caja de votos de una votación del pueblo', fa: 'یک صندوق رأی از رأی‌گیری شهر' },
          why: { en: 'Yes! People vote, and that gives the government its power. Back then, mostly white men with property voted.', es: '¡Sí! La gente vota, y eso le da poder al gobierno. Entonces votaban sobre todo hombres blancos con tierras.', fa: 'بله! مردم رأی می‌دهند و این به حکومت قدرت می‌دهد. آن وقت بیشتر مردان سفیدپوست ملک‌دار رأی می‌دادند.' } },
        { at: [25, 7], icon: '👑', t: { en: 'A gold crown for a new king', es: 'Una corona de oro para un rey nuevo', fa: 'یک تاج طلایی برای یک پادشاه نو' },
          why: { en: 'No king! Americans fought a war to be free of one. Power comes from the people.', es: '¡Nada de reyes! Los estadounidenses lucharon para librarse de uno. El poder viene del pueblo.', fa: 'پادشاه نه! امریکایی‌ها جنگیدند تا از پادشاه آزاد شوند. قدرت از مردم می‌آید.' } },
        { at: [14, 7], icon: '💰', t: { en: 'A bag of coins from a rich man', es: 'Una bolsa de monedas de un hombre rico', fa: 'یک کیسهٔ سکه از یک مرد پولدار' },
          why: { en: 'No. Money does not give a government its power. The people do.', es: 'No. El dinero no le da su poder a un gobierno. Se lo da el pueblo.', fa: 'نه. پول به حکومت قدرت نمی‌دهد. مردم می‌دهند.' } }
      ],
      item: { icon: '🔤', name: { en: 'Metal letters: We the People', es: 'Letras de metal: Nosotros, el Pueblo', fa: 'حرف‌های فلزی: ما مردم' } }
    }
  },

  scraps: [[1, 1], [1, 20], [29, 20]],
  smudges: [[11, 8], [22, 7]],

  challenge: {
    at: [21, 18],
    type: 'levers', // in the world; the card version (combo) is the fallback
    // in the State House yard: the Congress lever and the second-vote lever by the building, the court lever by the river
    spots: [[18, 14], [24, 14], [28, 18]],
    stat: 'pla',
    title: { en: 'How a Bill Becomes Law', es: 'Cómo un proyecto se vuelve ley', fa: 'طرح قانون چطور قانون می‌شود' },
    intro: { en: 'Congress wants a new law. The President says: I will [[veto|veto]] it! Set the 3 levers so the bill becomes law the way the Constitution allows.',
      es: 'El Congreso quiere una ley nueva. El presidente dice: ¡la voy a [[veto|vetar]]! Mueve las 3 palancas para que el proyecto sea ley como lo permite la Constitución.',
      fa: 'کانگرس یک قانون نو می‌خواهد. رئیس جمهور می‌گوید: آن را [[veto|وتو]] می‌کنم! ۳ دسته را طوری بگذار که طرح، به راهی که قانون اساسی اجازه می‌دهد، قانون شود.' },
    switches: [
      { name: { en: 'Congress · first vote', es: 'Congreso · primera votación', fa: 'کانگرس · رأی اول' }, icon: '🏛️', start: 0,
        states: [{ en: 'Only the House votes yes', es: 'Solo la Cámara vota sí', fa: 'فقط مجلس نمایندگان بله می‌گوید' }, { en: 'House and Senate vote yes', es: 'La Cámara y el Senado votan sí', fa: 'مجلس نمایندگان و سنا بله می‌گویند' }] },
      { name: { en: 'Congress · vote again after the veto', es: 'Congreso · votar otra vez tras el veto', fa: 'کانگرس · رأی دوباره بعد از وتو' }, icon: '🔁', start: 0,
        states: [{ en: 'No second vote', es: 'No hay segunda votación', fa: 'رأی دوم نیست' }, { en: 'Over half of each house votes yes', es: 'Más de la mitad de cada cámara vota sí', fa: 'بیشتر از نصف هر مجلس بله می‌گوید' }, { en: 'Two thirds of each house vote yes', es: 'Dos tercios de cada cámara votan sí', fa: 'دو سوم هر مجلس بله می‌گویند' }] },
      { name: { en: 'A court checks the law', es: 'Un tribunal revisa la ley', fa: 'محکمه قانون را بررسی می‌کند' }, icon: '⚖️', start: 0,
        states: [{ en: 'It breaks the Constitution', es: 'Va contra la Constitución', fa: 'خلاف قانون اساسی است' }, { en: 'It follows the Constitution', es: 'Sigue la Constitución', fa: 'مطابق قانون اساسی است' }] }
    ],
    results: {
      '0,0,0': { ok: false, t: { en: 'Only the House voted yes. A bill must pass both the House and the Senate.', es: 'Solo la Cámara votó sí. Un proyecto debe pasar por la Cámara y el Senado.', fa: 'فقط مجلس نمایندگان بله گفت. طرح باید از هر دو، مجلس نمایندگان و سنا، بگذرد.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '0,0,1': { ok: false, t: { en: 'Only the House voted yes. A bill must pass both the House and the Senate.', es: 'Solo la Cámara votó sí. Un proyecto debe pasar por la Cámara y el Senado.', fa: 'فقط مجلس نمایندگان بله گفت. طرح باید از هر دو، مجلس نمایندگان و سنا، بگذرد.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '0,1,0': { ok: false, t: { en: 'The Senate never passed it. Both houses must pass a bill before anything else.', es: 'El Senado nunca lo aprobó. Las dos cámaras deben aprobar el proyecto antes que nada.', fa: 'سنا هیچ وقت آن را تصویب نکرد. اول هر دو مجلس باید طرح را تصویب کنند.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '0,1,1': { ok: false, t: { en: 'The Senate never passed it. Both houses must pass a bill before anything else.', es: 'El Senado nunca lo aprobó. Las dos cámaras deben aprobar el proyecto antes que nada.', fa: 'سنا هیچ وقت آن را تصویب نکرد. اول هر دو مجلس باید طرح را تصویب کنند.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '0,2,0': { ok: false, t: { en: 'A second vote cannot help yet. First the Senate must pass the bill too.', es: 'Una segunda votación todavía no ayuda. Primero el Senado también debe aprobar el proyecto.', fa: 'رأی دوم هنوز کمک نمی‌کند. اول سنا هم باید طرح را تصویب کند.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '0,2,1': { ok: false, t: { en: 'A second vote cannot help yet. First the Senate must pass the bill too.', es: 'Una segunda votación todavía no ayuda. Primero el Senado también debe aprobar el proyecto.', fa: 'رأی دوم هنوز کمک نمی‌کند. اول سنا هم باید طرح را تصویب کند.' },
        show: [{ t: { en: 'House: yes', es: 'Cámara: sí', fa: 'مجلس نمایندگان: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Senate: no vote', es: 'Senado: sin voto', fa: 'سنا: رأی نداد' }, ok: false, icon: '🏛️' }] },
      '1,0,0': { ok: false, t: { en: 'Congress passed it, but the President vetoed it. With no second vote, the bill dies.', es: 'El Congreso lo aprobó, pero el presidente lo vetó. Sin segunda votación, el proyecto muere.', fa: 'کانگرس آن را تصویب کرد، اما رئیس جمهور وتو کرد. بدون رأی دوم، طرح از بین می‌رود.' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'The veto stands', es: 'El veto se mantiene', fa: 'وتو باقی می‌ماند' }, ok: false, icon: '✋' }] },
      '1,0,1': { ok: false, t: { en: 'The veto stopped the bill. It never became law, so no court can check it.', es: 'El veto detuvo el proyecto. Nunca fue ley, así que ningún tribunal puede revisarlo.', fa: 'وتو طرح را بند کرد. هیچ وقت قانون نشد، پس هیچ محکمه‌ای آن را بررسی نمی‌کند.' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'The veto stands', es: 'El veto se mantiene', fa: 'وتو باقی می‌ماند' }, ok: false, icon: '✋' }] },
      '1,1,0': { ok: false, t: { en: 'Over half is not enough. To beat a veto, two thirds of each house must vote yes.', es: 'Más de la mitad no basta. Para vencer un veto, deben votar sí dos tercios de cada cámara.', fa: 'بیشتر از نصف کافی نیست. برای شکستن وتو، دو سوم هر مجلس باید بله بگویند.' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Too few votes: the veto stands', es: 'Pocos votos: el veto se mantiene', fa: 'رأی کم: وتو باقی می‌ماند' }, ok: false, icon: '✋' }] },
      '1,1,1': { ok: false, t: { en: 'Over half is not enough. To beat a veto, two thirds of each house must vote yes.', es: 'Más de la mitad no basta. Para vencer un veto, deben votar sí dos tercios de cada cámara.', fa: 'بیشتر از نصف کافی نیست. برای شکستن وتو، دو سوم هر مجلس باید بله بگویند.' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Too few votes: the veto stands', es: 'Pocos votos: el veto se mantiene', fa: 'رأی کم: وتو باقی می‌ماند' }, ok: false, icon: '✋' }] },
      '1,2,0': { ok: false, t: { en: 'Congress beat the veto! But the court found it breaks the Constitution, so it cannot stand.', es: '¡El Congreso venció el veto! Pero el tribunal vio que va contra la Constitución, así que no vale.', fa: 'کانگرس وتو را شکست! اما محکمه دید که خلاف قانون اساسی است، پس باقی نمی‌ماند.' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Veto beaten', es: 'Veto vencido', fa: 'وتو شکست' }, ok: true, icon: '🔁' }, { t: { en: 'Court: it breaks the Constitution', es: 'Tribunal: va contra la Constitución', fa: 'محکمه: خلاف قانون اساسی' }, ok: false, icon: '⚖️' }] },
      '1,2,1': { ok: true, t: { en: 'Both houses passed it, two thirds beat the veto, and it follows the Constitution. It is law!', es: 'Las dos cámaras lo aprobaron, dos tercios vencieron el veto y sigue la Constitución. ¡Es ley!', fa: 'هر دو مجلس تصویب کردند، دو سوم وتو را شکستند، و مطابق قانون اساسی است. قانون شد!' },
        show: [{ t: { en: 'House and Senate: yes', es: 'Cámara y Senado: sí', fa: 'هر دو مجلس: بله' }, ok: true, icon: '🏛️' }, { t: { en: 'Veto beaten', es: 'Veto vencido', fa: 'وتو شکست' }, ok: true, icon: '🔁' }, { t: { en: 'Court: it follows the Constitution', es: 'Tribunal: sigue la Constitución', fa: 'محکمه: مطابق قانون اساسی' }, ok: true, icon: '⚖️' }] }
    },
    otherwise: { ok: false, t: { en: 'The bill is not a law yet. Try another setting.', es: 'El proyecto todavía no es ley. Prueba otra combinación.', fa: 'طرح هنوز قانون نشده. یک تنظیم دیگر را امتحان کن.' } },
    success: { en: 'The bill is law! Each branch can check the others, so no branch gets too much power. That is [[checks and balances|checks and balances]].',
      es: '¡El proyecto es ley! Cada rama puede controlar a las otras, así ninguna tiene demasiado poder. Eso son los [[checks and balances|pesos y contrapesos]].',
      fa: 'طرح قانون شد! هر بخش بر بخش‌های دیگر نظارت می‌کند، پس هیچ بخشی قدرت زیاد نمی‌گیرد. این [[checks and balances|نظارت و توازن]] است.' }
  },

  boss: {
    at: [4, 17],
    stat: 'loc',
    need: 3,
    name: { en: 'The Power-Grab Grump', es: 'El Gruñón Acaparador', fa: 'غرغروی قدرت‌خور' },
    appear: { en: 'The Power-Grab Grump is hiding in the fog by the schoolyard, south-west!', es: '¡El Gruñón Acaparador se esconde en la niebla junto a la escuela, al suroeste!', fa: 'غرغروی قدرت‌خور در مه کنار حویلی مکتب، در جنوب غرب، پنهان است!' },
    taunt: { en: 'Three branches? Bah! Give ALL the power to me, and nobody checks me!', es: '¿Tres ramas? ¡Bah! ¡Denme TODO el poder, y que nadie me controle!', fa: 'سه بخش؟ بَه! همهٔ قدرت را به من بدهید، و هیچ کس بر من نظارت نکند!' },
    win: { en: 'The fog lifts over Philadelphia. Charter page 2.1 floats down into your hands!', es: 'La niebla se va de Filadelfia. ¡La página 2.1 de la carta cae en tus manos!', fa: 'مه از روی فیلادلفیا کنار می‌رود. صفحهٔ ۲.۱ منشور به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Why was the government under the Articles of Confederation too weak?', es: '¿Por qué era muy débil el gobierno de los Artículos de la Confederación?', fa: 'چرا حکومت زیر اساسنامهٔ کنفدراسیون خیلی ضعیف بود؟' },
        choices: [
          { en: 'Congress could not collect taxes', es: 'El Congreso no podía cobrar impuestos', fa: 'کانگرس مالیات گرفته نمی‌توانست' },
          { en: 'The President had too much power', es: 'El presidente tenía demasiado poder', fa: 'رئیس جمهور قدرت خیلی زیاد داشت' },
          { en: 'The national courts ran every state', es: 'Los tribunales nacionales dirigían cada estado', fa: 'محکمه‌های ملی هر ایالت را اداره می‌کردند' },
          { en: 'A king still ruled from Britain', es: 'Un rey todavía gobernaba desde Gran Bretaña', fa: 'یک پادشاه هنوز از بریتانیا حکومت می‌کرد' }],
        answer: 0,
        why: { en: 'Congress could not tax. There was no President and no national court. States held most power.', es: 'El Congreso no podía cobrar impuestos. No había presidente ni tribunal nacional. Los estados tenían casi todo el poder.', fa: 'کانگرس مالیات گرفته نمی‌توانست. رئیس جمهور و محکمهٔ ملی نبود. بیشتر قدرت دست ایالت‌ها بود.' } },
      { q: { en: 'The Constitution splits power into three branches. What is this idea called?', es: 'La Constitución divide el poder en tres ramas. ¿Cómo se llama esta idea?', fa: 'قانون اساسی قدرت را به سه بخش تقسیم می‌کند. نام این اندیشه چیست؟' },
        choices: [
          { en: 'Separation of powers', es: 'Separación de poderes', fa: 'جدایی قدرت‌ها' },
          { en: 'Popular sovereignty', es: 'Soberanía popular', fa: 'حاکمیت مردم' },
          { en: 'Direct democracy', es: 'Democracia directa', fa: 'دموکراسی مستقیم' },
          { en: 'Absolute monarchy', es: 'Monarquía absoluta', fa: 'پادشاهی مطلق' }],
        answer: 0,
        why: { en: 'Separation of powers: Congress makes laws, the President carries them out, courts judge them.', es: 'Separación de poderes: el Congreso hace las leyes, el presidente las cumple, los tribunales las juzgan.', fa: 'جدایی قدرت‌ها: کانگرس قانون می‌سازد، رئیس جمهور اجرا می‌کند، محکمه‌ها قضاوت می‌کنند.' } },
      { q: { en: 'Which branch carries out the laws?', es: '¿Qué rama hace cumplir las leyes?', fa: 'کدام بخش قانون‌ها را اجرا می‌کند؟' },
        choices: [
          { en: 'The executive, led by the President', es: 'La ejecutiva, dirigida por el presidente', fa: 'بخش اجرایی، به رهبری رئیس جمهور' },
          { en: 'The legislative, made up of Congress', es: 'La legislativa, formada por el Congreso', fa: 'بخش قانون‌گذاری، یعنی کانگرس' },
          { en: 'The judicial, made up of the courts', es: 'La judicial, formada por los tribunales', fa: 'بخش قضایی، یعنی محکمه‌ها' },
          { en: 'The states, led by their governors', es: 'Los estados, dirigidos por sus gobernadores', fa: 'ایالت‌ها، به رهبری والی‌های‌شان' }],
        answer: 0,
        why: { en: 'The President leads the executive branch, which carries out the laws Congress makes.', es: 'El presidente dirige la rama ejecutiva, que hace cumplir las leyes que hace el Congreso.', fa: 'رئیس جمهور بخش اجرایی را رهبری می‌کند، که قانون‌های کانگرس را اجرا می‌کند.' } },
      { q: { en: 'The President vetoes a bill. How can Congress still make it a law?', es: 'El presidente veta un proyecto. ¿Cómo puede el Congreso hacerlo ley de todos modos?', fa: 'رئیس جمهور یک طرح را وتو می‌کند. کانگرس چطور باز هم آن را قانون می‌سازد؟' },
        choices: [
          { en: 'Two thirds of both houses vote yes', es: 'Dos tercios de ambas cámaras votan sí', fa: 'دو سوم هر دو مجلس بله می‌گویند' },
          { en: 'Just over half of the House votes yes', es: 'Poco más de la mitad de la Cámara vota sí', fa: 'کمی بیشتر از نصف مجلس نمایندگان بله می‌گویند' },
          { en: 'The Senate asks the states to vote', es: 'El Senado pide a los estados que voten', fa: 'سنا از ایالت‌ها می‌خواهد رأی بدهند' },
          { en: 'It can never become a law', es: 'Nunca puede llegar a ser ley', fa: 'هیچ وقت قانون شده نمی‌تواند' }],
        answer: 0,
        why: { en: 'Two thirds of the House and two thirds of the Senate can override a veto.', es: 'Dos tercios de la Cámara y dos tercios del Senado pueden anular un veto.', fa: 'دو سوم مجلس نمایندگان و دو سوم سنا می‌توانند وتو را بشکنند.' } },
      { q: { en: 'What does limited government mean?', es: '¿Qué significa gobierno limitado?', fa: 'حکومت محدود یعنی چه؟' },
        choices: [
          { en: 'Leaders must follow the law too', es: 'Los líderes también deben seguir la ley', fa: 'رهبران هم باید از قانون پیروی کنند' },
          { en: 'The government has very few workers', es: 'El gobierno tiene muy pocos trabajadores', fa: 'حکومت کارمندان خیلی کم دارد' },
          { en: 'Only a few people may vote at all', es: 'Solo unas pocas personas pueden votar', fa: 'فقط چند نفر رأی داده می‌توانند' },
          { en: 'The President may stay for life', es: 'El presidente puede quedarse de por vida', fa: 'رئیس جمهور تا آخر عمر می‌ماند' }],
        answer: 0,
        why: { en: 'In a limited government, leaders have only the powers the Constitution gives. Nobody is above the law.', es: 'En un gobierno limitado, los líderes solo tienen los poderes que da la Constitución. Nadie está sobre la ley.', fa: 'در حکومت محدود، رهبران فقط قدرتی را دارند که قانون اساسی می‌دهد. هیچ کس بالاتر از قانون نیست.' } },
      { q: { en: 'What did the Great Compromise decide?', es: '¿Qué decidió el Gran Compromiso?', fa: 'سازش بزرگ چه تصمیمی گرفت؟' },
        choices: [
          { en: 'House by population, Senate 2 per state', es: 'Cámara por población, Senado 2 por estado', fa: 'مجلس به اندازهٔ نفوس، سنا ۲ نفر از هر ایالت' },
          { en: 'House 2 per state, Senate by population', es: 'Cámara 2 por estado, Senado por población', fa: 'مجلس ۲ نفر از هر ایالت، سنا به اندازهٔ نفوس' },
          { en: 'One vote for each state, as before', es: 'Un voto por cada estado, como antes', fa: 'یک رأی برای هر ایالت، مثل پیش' },
          { en: 'No Congress, only a strong President', es: 'Sin Congreso, solo un presidente fuerte', fa: 'کانگرس نه، فقط یک رئیس جمهور قوی' }],
        answer: 0,
        why: { en: 'Big states got seats by population in the House. Small states got 2 equal seats in the Senate.', es: 'Los estados grandes tuvieron asientos por población en la Cámara. Los pequeños, 2 asientos iguales en el Senado.', fa: 'ایالت‌های بزرگ در مجلس نمایندگان به اندازهٔ نفوس چوکی گرفتند. ایالت‌های کوچک در سنا ۲ چوکی برابر گرفتند.' } },
      { q: { en: 'What did the Three-Fifths Compromise do?', es: '¿Qué hizo el Compromiso de los Tres Quintos?', fa: 'سازش سه پنجم چه کرد؟' },
        choices: [
          { en: 'Counted enslaved people as 3/5 for seats', es: 'Contó a los esclavizados como 3/5 para asientos', fa: 'بردگان را برای چوکی ۳/۵ حساب کرد' },
          { en: 'Set the Senate at 3 per state', es: 'Puso 3 senadores por cada estado', fa: 'برای هر ایالت ۳ سناتور گذاشت' },
          { en: 'Ended slavery in 3 of 5 states', es: 'Acabó con la esclavitud en 3 de 5 estados', fa: 'برده‌داری را در ۳ از ۵ ایالت ختم کرد' },
          { en: 'Let 3 of 5 voters pick the President', es: 'Dejó que 3 de 5 votantes eligieran al presidente', fa: 'گذاشت ۳ از ۵ رأی‌دهنده رئیس جمهور را بگزینند' }],
        answer: 0,
        why: { en: 'Each enslaved person counted as three fifths of a person for House seats. The Constitution protected slavery.', es: 'Cada persona esclavizada contaba como tres quintos para asientos en la Cámara. La Constitución protegió la esclavitud.', fa: 'هر برده برای چوکی‌های مجلس سه پنجم یک انسان حساب شد. قانون اساسی از برده‌داری محافظت کرد.' } },
      { q: { en: 'The Constitution begins "We the People." Which idea does this show?', es: 'La Constitución empieza con "Nosotros, el Pueblo". ¿Qué idea muestra esto?', fa: 'قانون اساسی با «ما مردم» شروع می‌شود. این کدام اندیشه را نشان می‌دهد؟' },
        choices: [
          { en: 'Popular sovereignty', es: 'Soberanía popular', fa: 'حاکمیت مردم' },
          { en: 'Rule by a king', es: 'Gobierno de un rey', fa: 'حکومت یک پادشاه' },
          { en: 'Rule by the rich', es: 'Gobierno de los ricos', fa: 'حکومت پولدارها' },
          { en: 'Checks on the courts', es: 'Control de los tribunales', fa: 'نظارت بر محکمه‌ها' }],
        answer: 0,
        why: { en: 'Popular sovereignty means the government gets its power from the people.', es: 'Soberanía popular significa que el gobierno recibe su poder del pueblo.', fa: 'حاکمیت مردم یعنی حکومت قدرت خود را از مردم می‌گیرد.' } }
    ]
  },

  learned: [
    { en: 'The [[articles of confederation|Articles of Confederation]] were too weak: Congress could not tax, and there was no President or national court.', es: 'Los [[articles of confederation|Artículos de la Confederación]] eran muy débiles: el Congreso no podía cobrar impuestos y no había presidente ni tribunal nacional.', fa: '[[articles of confederation|اساسنامهٔ کنفدراسیون]] خیلی ضعیف بود: کانگرس مالیات گرفته نمی‌توانست، و رئیس جمهور و محکمهٔ ملی نبود.' },
    { en: 'The [[constitution|Constitution]] splits power into three branches. With [[checks and balances|checks and balances]], each branch can stop the others.', es: 'La [[constitution|Constitución]] divide el poder en tres ramas. Con los [[checks and balances|pesos y contrapesos]], cada rama puede frenar a las otras.', fa: '[[constitution|قانون اساسی]] قدرت را به سه بخش تقسیم می‌کند. با [[checks and balances|نظارت و توازن]]، هر بخش می‌تواند بخش‌های دیگر را بند کند.' },
    { en: 'The [[great compromise|Great Compromise]] made the House and Senate. The Three-Fifths Compromise counted enslaved people as 3/5, and the Constitution protected slavery.', es: 'El [[great compromise|Gran Compromiso]] creó la Cámara y el Senado. El de los Tres Quintos contó a los esclavizados como 3/5, y la Constitución protegió la esclavitud.', fa: '[[great compromise|سازش بزرگ]] مجلس نمایندگان و سنا را ساخت. سازش سه پنجم بردگان را ۳/۵ حساب کرد، و قانون اساسی از برده‌داری محافظت کرد.' }
  ],
  reflect: {
    q: { en: 'Think of a rule at school or at home. If it were unfair, who could check it?', es: 'Piensa en una regla de la escuela o de la casa. Si fuera injusta, ¿quién podría controlarla?', fa: 'به یک قانون در مکتب یا خانه فکر کن. اگر ناعادلانه باشد، کی می‌تواند بر آن نظارت کند؟' },
    starter: { en: 'If a rule were unfair, the person who could check it is', es: 'Si una regla fuera injusta, la persona que podría controlarla es', fa: 'اگر یک قانون ناعادلانه باشد، کسی که می‌تواند بر آن نظارت کند ... است' }
  }
};
