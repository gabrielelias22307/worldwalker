/* TRAILWALKER · Episode 1.2 · The Colonies' Geography (VUS)
   Philadelphia, 1750: the busy port on the west bank of the Delaware River.
   West side: brick houses (R/Q over h) along Mulberry Street (row 4, today Arch Street), the Quaker meeting house,
   High Street (rows 9-11, today Market Street) with its market stalls in the middle of the street,
   and Chestnut Street (row 16). South-west: the printer's and mapmaker's shops, and a green.
   East side: Front Street on the quay (x 24-25), then the Delaware River (~ and =).
   Three wharves (k) reach into the river: the north wharf (rows 2-3) for New England ships, the middle wharf
   (rows 9-10) for Middle Colony ships and the south wharf (rows 17-18) for Southern ships.
   The journal stone: carry each card to the right wharf. */
window.EPISODE = {
  id: '1.2',
  realm: 1,
  sol: 'VUS',
  title: { en: 'The Colonies\' Geography', es: 'La geografía de las colonias', fa: 'جغرافیای مستعمره‌ها' },
  weather: { sky: 'clear', time: 'day' },
  place: { en: 'Philadelphia, 1750', es: 'Filadelfia, 1750', fa: 'فیلادلفیا، ۱۷۵۰' },
  intro: [
    { en: 'The Grump blurred the [[colony|colonies]] page. Now people mix up north, middle and south!',
      es: 'El Gruñón borró la página de las [[colony|colonias]]. ¡Ahora la gente confunde el norte, el centro y el sur!',
      fa: 'غرغرو صفحهٔ [[colony|مستعمره‌ها]] را تار کرد. حالا مردم شمال، میانه و جنوب را درهم و برهم می‌کنند!' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Philadelphia on the map, 1750 on the timeline */
  scenes: {
    at: [-75.14, 39.95],
    year: 1750,
    start: [
      { en: 'By 1750, Britain had 13 colonies along the Atlantic coast.',
        es: 'Para 1750, Gran Bretaña tenía 13 colonias en la costa del Atlántico.',
        fa: 'تا سال ۱۷۵۰، بریتانیا ۱۳ مستعمره در ساحل بحر اطلس داشت.' },
      { en: 'Native nations had lived on this land for thousands of years.',
        es: 'Las naciones indígenas vivían en esta tierra desde hacía miles de años.',
        fa: 'ملت‌های بومی هزاران سال در این سرزمین زندگی کرده بودند.' },
      { en: 'Philadelphia was a busy port on the Delaware River.',
        es: 'Filadelfia era un puerto muy activo en el río Delaware.',
        fa: 'فیلادلفیا یک بندر پرکار کنار دریای دلاویر بود.' }
    ],
    page: { en: 'Today, Philadelphia is still a big port on the Delaware River.',
      es: 'Hoy, Filadelfia sigue siendo un gran puerto en el río Delaware.',
      fa: 'امروز هم فیلادلفیا یک بندر بزرگ کنار دریای دلاویر است.' },
    guess: {
      q: { en: 'Which region had the coldest, longest winters?', es: '¿Qué región tenía los inviernos más fríos y largos?', fa: 'کدام منطقه سردترین و درازترین زمستان‌ها را داشت؟' },
      choices: [
        { t: { en: '❄️ New England', es: '❄️ Nueva Inglaterra', fa: '❄️ نیو انگلند' }, ok: true },
        { t: { en: '☀️ Southern Colonies', es: '☀️ Colonias del Sur', fa: '☀️ مستعمره‌های جنوبی' } }
      ],
      why: { en: 'New England was farthest north. Its winters were long and cold, and the soil was rocky.', es: 'Nueva Inglaterra estaba más al norte. Sus inviernos eran largos y fríos, y la tierra era rocosa.', fa: 'نیو انگلند از همه شمالی‌تر بود. زمستان‌هایش دراز و سرد و خاکش سنگلاخ بود.' }
    },
    next: {
      q: { en: 'Next: self-government. How did colonists start governing themselves?', es: 'Ahora: el autogobierno. ¿Cómo empezaron los colonos a gobernarse solos?', fa: 'بعدی: خودگردانی. مهاجران چطور شروع به حکومت بر خود کردند؟' },
      choices: [
        { t: { en: '🗳️ Assemblies and town meetings', es: '🗳️ Asambleas y reuniones', fa: '🗳️ مجلس‌ها و جلسه‌های شهر' }, ok: true },
        { t: { en: '👑 The king decided everything', es: '👑 El rey decidía todo', fa: '👑 پادشاه همه را تصمیم می‌گرفت' } }
      ],
      why: { en: 'Virginia\'s House of Burgesses first met in 1619. New England towns held town meetings.', es: 'La Cámara de los Burgueses de Virginia se reunió en 1619. Los pueblos de Nueva Inglaterra hacían reuniones.', fa: 'مجلس برگس‌های ویرجینیا اول در ۱۶۱۹ جمع شد. شهرهای نیو انگلند جلسهٔ شهر داشتند.' }
    }
  },
  /* houses: who lives behind each door (2-3 lines each) */
  houses: [
    { at: [11, 2], name: { en: 'Friend Hannah', es: 'La amiga Hannah', fa: 'دوست هانا' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#8a8a7a', pants: '#4a4a44', style: 'bun' },
      lines: [
        { en: 'Welcome to our meeting house. We are [[quaker|Quakers]], also called Friends.', es: 'Bienvenido a nuestra casa de reunión. Somos [[quaker|cuáqueros]], también llamados Amigos.', fa: 'به خانهٔ جلسهٔ ما خوش آمدی. ما [[quaker|کویکر]] هستیم، ما را «دوستان» هم می‌گویند.' },
        { en: 'In our meeting, anyone may stand and speak. Women speak too.', es: 'En nuestra reunión, cualquiera puede pararse y hablar. Las mujeres también.', fa: 'در جلسهٔ ما، هر کس می‌تواند بایستد و گپ بزند. زن‌ها هم گپ می‌زنند.' },
        { en: 'William Penn, a Quaker, made Pennsylvania a place of [[religious freedom|religious freedom]].', es: 'William Penn, un cuáquero, hizo de Pensilvania un lugar de [[religious freedom|libertad religiosa]].', fa: 'ویلیام پن، که کویکر بود، پنسلوانیا را جای [[religious freedom|آزادی دین]] ساخت.' }
      ] },
    { at: [18, 2], name: { en: 'Elizabeth', es: 'Elizabeth', fa: 'الیزابت' },
      look: { skin: 2, hair: '#3a2416', shirt: '#2f6f8f', pants: '#3a3a4a', style: 'long' },
      lines: [
        { en: 'I teach children to read. I also teach them whose land this was.', es: 'Enseño a leer a los niños. También les enseño de quién era esta tierra.', fa: 'من به کودکان خواندن یاد می‌دهم. یاد می‌دهم این زمین از کی بود.' },
        { en: 'The Lenape people lived here first. This is their homeland.', es: 'El pueblo lenape vivió aquí primero. Esta es su tierra natal.', fa: 'مردم لناپی اول اینجا زندگی می‌کردند. اینجا وطن آن‌هاست.' },
        { en: 'In 1737, a tricky deal took much of their land. Many moved west.', es: 'En 1737, un trato tramposo les quitó mucha tierra. Muchos se fueron al oeste.', fa: 'در ۱۷۳۷، یک معاملهٔ فریب‌کارانه زمین زیادشان را گرفت. بسیاری به غرب رفتند.' }
      ] },
    { at: [6, 6], name: { en: 'Grace', es: 'Grace', fa: 'گریس' },
      look: { skin: 5, hair: '#120c08', shirt: '#c8a040', pants: '#5a3a2a', style: 'bun' },
      lines: [
        { en: 'Smell that? I bake bread with flour from Pennsylvania wheat farms.', es: '¿Hueles eso? Hago pan con harina de las granjas de trigo de Pensilvania.', fa: 'بویش را حس می‌کنی؟ با آرد فارم‌های گندم پنسلوانیا نان می‌پزم.' },
        { en: 'Ships carry our flour and bread far away, even to the West Indies.', es: 'Los barcos llevan nuestra harina y pan lejos, hasta las Antillas.', fa: 'کشتی‌ها آرد و نان ما را به جاهای دور، حتی جزایر هند غربی، می‌برند.' }
      ] },
    { at: [4, 14], name: { en: 'Owen', es: 'Owen', fa: 'اوون' },
      look: { skin: 1, hair: '#a05a2a', shirt: '#e8e0d0', pants: '#3a2a1a', style: 'short' },
      lines: [
        { en: 'This is a print shop. We print newspapers, almanacs and maps.', es: 'Esta es una imprenta. Imprimimos periódicos, almanaques y mapas.', fa: 'این چاپخانه است. ما روزنامه، جنتری و نقشه چاپ می‌کنیم.' },
        { en: 'Our newspaper prints news and ship arrivals from all 13 colonies.', es: 'Nuestro periódico publica noticias y llegadas de barcos de las 13 colonias.', fa: 'روزنامهٔ ما خبرها و رسیدن کشتی‌ها از هر ۱۳ مستعمره را چاپ می‌کند.' }
      ] },
    { at: [10, 14], name: { en: 'Jonas', es: 'Jonas', fa: 'یوناس' },
      look: { skin: 2, hair: '#d8d8d8', shirt: '#4a6a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I draw maps. My map shows 13 colonies along the Atlantic coast.', es: 'Dibujo mapas. Mi mapa muestra 13 colonias en la costa del Atlántico.', fa: 'من نقشه می‌کشم. نقشه‌ام ۱۳ مستعمره را در ساحل بحر اطلس نشان می‌دهد.' },
        { en: 'New Hampshire is farthest north. Georgia is farthest south.', es: 'New Hampshire está más al norte. Georgia está más al sur.', fa: 'نیوهمپشایر از همه شمالی‌تر است. جورجیا از همه جنوبی‌تر است.' },
        { en: 'Native nations like the Powhatan and Cherokee lived on these lands first.', es: 'Naciones indígenas como los powhatan y los cherokee vivían primero en estas tierras.', fa: 'ملت‌های بومی مثل پوهاتان و چروکی اول در این زمین‌ها زندگی می‌کردند.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens. x 24-25 is Front Street on the quay; the Delaware River is east of it. */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTT~=====',
    'T,.RRR...QQQQQ...RRR....ll~=====',
    'T..hhh...hhdhh...hdh..x.llkkkk==',
    'T..........:......:.....llkkkk==',
    'T:::::::::::::::::::::::ll~=====',
    'T.TT.RRR......QQQ.......ll~=====',
    'T.TT.hdh......hhh..,....ll~=====',
    'T.....:..,..............ll~=====',
    'T.,....x...............xll~=====',
    'Tlllllllllllllllllllllllllkkkk==',
    'Tlllmmmlmmmlmmmlmmmlllllllkkkk==',
    'Tlllllllllllllllllllllllll~=====',
    'T.,......x..............ll~=====',
    'T.RRRR...QQQ....RRR.....ll~=====',
    'T.hhdh...hdh....hhh.....ll~=====',
    'T...:.....:.............ll~=====',
    'T:::::::::::::::::::::::ll~=====',
    'T..TT........,..........llkkkk==',
    'T..T..,..........,......llkkkk==',
    'T.,..........,.........xll~=====',
    'T......,......,.....,...ll~=====',
    'TTTTTTTTTTTTTTTTTTTTTTTTTT~====='
  ],
  start: [20, 12],

  /* finds: a clue note leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [2, 12], at: [6, 15], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps east, then 3 steps south.', es: 'Desde esta nota, camina 4 pasos al este y luego 3 pasos al sur.', fa: 'از این یادداشت، ۴ قدم به شرق برو، بعد ۳ قدم به جنوب.' },
      text: { en: 'Colonists used many kinds of coins, even Spanish silver dollars. Here is an old one.', es: 'Los colonos usaban muchas monedas, hasta dólares españoles de plata. Aquí hay uno antiguo.', fa: 'مهاجران سکه‌های گوناگون به کار می‌بردند، حتی دالر نقره‌ای هسپانوی. اینجا یکی کهنه است.' } },
    { clueAt: [14, 18], at: [14, 13], decor: 'shell',
      clue: { en: 'From this note, walk 5 steps north, toward High Street.', es: 'Desde esta nota, camina 5 pasos al norte, hacia la calle High.', fa: 'از این یادداشت، ۵ قدم به شمال برو، به طرف سرک های.' },
      text: { en: 'The Lenape made wampum beads from shells. Wampum belts marked agreements. Here is a shell.', es: 'Los lenape hacían cuentas de wampum con conchas. Los cinturones de wampum marcaban acuerdos. Aquí hay una concha.', fa: 'لناپی‌ها از صدف دانه‌های وامپوم می‌ساختند. کمربند وامپوم نشان توافق بود. اینجا یک صدف است.' } }
  ],

  words: {
    colony: { en: 'a land ruled by a faraway country', es: 'una tierra gobernada por un país lejano', fa: 'سرزمینی که یک کشور دور بر آن حکومت می‌کند' },
    region: { en: 'an area whose places share things, like weather, land or ways of life', es: 'un área cuyos lugares comparten cosas, como el clima, la tierra o la forma de vivir', fa: 'ساحه‌ای که جاهایش چیزهای مشترک دارند، مثل هوا، زمین یا طرز زندگی' },
    'growing season': { en: 'the part of the year when it is warm enough for crops to grow', es: 'la parte del año con suficiente calor para que crezcan los cultivos', fa: 'بخشی از سال که هوا برای روییدن حاصلات به اندازهٔ کافی گرم است' },
    breadbasket: { en: 'a place that grows lots of grain, like wheat, for bread', es: 'un lugar que produce mucho grano, como el trigo, para hacer pan', fa: 'جایی که دانهٔ زیاد، مثل گندم، برای نان می‌روید' },
    plantation: { en: 'a huge farm that grows one crop to sell, often with forced labor', es: 'una finca enorme que siembra un solo cultivo para vender, muchas veces con trabajo forzado', fa: 'یک فارم بسیار بزرگ که یک حاصل را برای فروش می‌کارد، اکثراً با کار اجباری' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' },
    'triangular trade': { en: 'ships trading in a triangle: the colonies, Africa and the West Indies', es: 'barcos que comerciaban en un triángulo: las colonias, África y las Antillas', fa: 'کشتی‌هایی که در یک مثلث تجارت می‌کردند: مستعمره‌ها، افریقا و جزایر هند غربی' },
    quaker: { en: 'a member of a Christian group that believes in peace and equal worth', es: 'miembro de un grupo cristiano que cree en la paz y en el mismo valor de todos', fa: 'عضو یک گروه مسیحی که به صلح و برابری همه باور دارد' },
    'religious freedom': { en: 'the right to follow any religion, or none', es: 'el derecho a seguir cualquier religión, o ninguna', fa: 'حق پیروی از هر دین، یا هیچ دین' },
    'town meeting': { en: 'a meeting where people of a town talk and vote on local matters', es: 'una reunión donde la gente de un pueblo habla y vota sobre sus asuntos', fa: 'جلسه‌ای که مردم یک شهر در آن دربارهٔ کارهای محلی گپ می‌زنند و رأی می‌دهند' },
    indigo: { en: 'a plant used to make blue dye for cloth', es: 'una planta que se usa para hacer tinte azul para tela', fa: 'نباتی که از آن رنگ آبی برای تکه می‌سازند' }
  },

  npcs: [
    {
      x: 21, y: 5,
      name: { en: 'Ezra', es: 'Ezra', fa: 'عزرا' },
      role: { en: 'Sailor from Boston', es: 'Marinero de Boston', fa: 'ملاح از بوستون' },
      look: { skin: 1, hair: '#c89a5a', shirt: '#2f4f7a', pants: '#e0d8c0', hat: '#2a2a3a', style: 'short' },
      lines: [
        { en: 'I sailed here from Boston, in Massachusetts. That is New England.', es: 'Navegué hasta aquí desde Boston, en Massachusetts. Eso es Nueva Inglaterra.', fa: 'من از بوستون در ماساچوست به اینجا آمدم. آنجا نیو انگلند است.' },
        { en: 'Our soil is thin and rocky. Winters are long and cold. Farms are small.', es: 'Nuestra tierra es delgada y rocosa. Los inviernos son largos y fríos. Las granjas son pequeñas.', fa: 'خاک ما کم و سنگلاخ است. زمستان‌ها دراز و سرد است. فارم‌ها کوچک‌اند.' },
        { en: 'But we have thick forests and a rich sea. So we fish and build ships.', es: 'Pero tenemos bosques espesos y un mar rico. Así que pescamos y hacemos barcos.', fa: 'اما جنگل‌های انبوه و بحر پر از ماهی داریم. پس ماهی می‌گیریم و کشتی می‌سازیم.' },
        { en: 'Our towns decide things together at [[town meeting|town meetings]].', es: 'Nuestros pueblos deciden juntos en [[town meeting|reuniones del pueblo]].', fa: 'شهرهای ما در [[town meeting|جلسه‌های شهر]] با هم تصمیم می‌گیرند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why did many New Englanders fish and build ships?', es: '¿Por qué muchos en Nueva Inglaterra pescaban y hacían barcos?', fa: 'چرا بسیاری از مردم نیو انگلند ماهی می‌گرفتند و کشتی می‌ساختند؟' },
        choices: [
          { ok: true, t: { en: 'Poor soil, but forests and the sea', es: 'Tierra pobre, pero bosques y mar', fa: 'خاک ضعیف، اما جنگل و بحر' },
            why: { en: 'Yes! Rocky soil made farming hard. Forests gave wood for ships, and the sea gave fish.', es: '¡Sí! La tierra rocosa hacía difícil sembrar. Los bosques daban madera y el mar, pescado.', fa: 'بله! خاک سنگلاخ دهقانی را سخت می‌کرد. جنگل چوب کشتی و بحر ماهی می‌داد.' } },
          { t: { en: 'Long hot summers for growing rice', es: 'Veranos largos y calurosos para el arroz', fa: 'تابستان‌های دراز و گرم برای برنج' },
            why: { en: 'New England summers are short. Rice grew in the warm Southern Colonies.', es: 'Los veranos de Nueva Inglaterra son cortos. El arroz crecía en el cálido Sur.', fa: 'تابستان نیو انگلند کوتاه است. برنج در مستعمره‌های گرم جنوبی می‌رویید.' } },
          { t: { en: 'Rich flat land for huge wheat farms', es: 'Tierra plana y rica para grandes trigales', fa: 'زمین هموار و حاصلخیز برای فارم گندم' },
            why: { en: 'That was the Middle Colonies. New England soil was thin and rocky.', es: 'Eso eran las Colonias del Centro. La tierra de Nueva Inglaterra era rocosa.', fa: 'آن مستعمره‌های میانه بود. خاک نیو انگلند کم و سنگلاخ بود.' } }
        ]
      }
    },
    {
      x: 13, y: 11,
      name: { en: 'Anna', es: 'Anna', fa: 'آنا' },
      role: { en: 'Wheat farmer', es: 'Agricultora de trigo', fa: 'دهقان گندم' },
      look: { skin: 0, hair: '#d8b060', shirt: '#7a3a2a', pants: '#3a4a2a', style: 'bun' },
      lines: [
        { en: 'Guten Tag! I came from Germany. Now I farm in Pennsylvania.', es: '¡Guten Tag! Vine de Alemania. Ahora cultivo en Pensilvania.', fa: 'گوتن تاگ! من از آلمان آمدم. حالا در پنسلوانیا دهقانی می‌کنم.' },
        { en: 'The Middle Colonies have rich soil, many rivers and mild weather.', es: 'Las Colonias del Centro tienen tierra rica, muchos ríos y clima templado.', fa: 'مستعمره‌های میانه خاک حاصلخیز، دریاهای زیاد و هوای معتدل دارند.' },
        { en: 'We grow so much wheat, people call us the [[breadbasket|breadbasket]].', es: 'Sembramos tanto trigo que nos llaman el [[breadbasket|granero]].', fa: 'این‌قدر گندم می‌کاریم که ما را [[breadbasket|سبد نان]] می‌گویند.' },
        { en: 'Here, people of many faiths and lands live side by side.', es: 'Aquí, gente de muchas religiones y países vive lado a lado.', fa: 'اینجا مردم از دین‌ها و کشورهای زیاد کنار هم زندگی می‌کنند.' }
      ],
      ask: {
        stat: 'reg',
        q: { en: 'Why were the Middle Colonies called the breadbasket?', es: '¿Por qué a las Colonias del Centro las llamaban el granero?', fa: 'چرا مستعمره‌های میانه را «سبد نان» می‌گفتند؟' },
        choices: [
          { ok: true, t: { en: 'They grew lots of wheat and grain', es: 'Sembraban mucho trigo y grano', fa: 'گندم و دانهٔ زیاد می‌کاشتند' },
            why: { en: 'Right! Rich soil grew so much wheat that they sold flour to other places.', es: '¡Correcto! La tierra rica daba tanto trigo que vendían harina a otros lugares.', fa: 'درست! خاک حاصلخیز این‌قدر گندم می‌داد که آرد را به جاهای دیگر می‌فروختند.' } },
          { t: { en: 'They caught the most fish and cod', es: 'Pescaban más peces y bacalao', fa: 'بیشترین ماهی و کاد را می‌گرفتند' },
            why: { en: 'Fishing was big in New England. The Middle Colonies were known for wheat.', es: 'La pesca era importante en Nueva Inglaterra. El Centro era famoso por el trigo.', fa: 'ماهی‌گیری در نیو انگلند مهم بود. مستعمره‌های میانه به گندم مشهور بودند.' } },
          { t: { en: 'They grew tobacco on plantations', es: 'Sembraban tabaco en plantaciones', fa: 'تنباکو را در کشتزارهای بزرگ می‌کاشتند' },
            why: { en: 'Tobacco plantations were in the Southern Colonies. The Middle Colonies grew wheat.', es: 'Las plantaciones de tabaco estaban en el Sur. El Centro sembraba trigo.', fa: 'کشتزارهای تنباکو در مستعمره‌های جنوبی بود. میانه گندم می‌کاشت.' } }
        ]
      }
    },
    {
      x: 21, y: 17,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Free Black sailor', es: 'Marinero negro libre', fa: 'ملاح سیاه‌پوست آزاد' },
      look: { skin: 5, hair: '#120c08', shirt: '#e8e0d0', pants: '#2a3a5a', hat: '#6a2a2a', style: 'short' },
      lines: [
        { en: 'My ship came from Charles Town, in South Carolina.', es: 'Mi barco vino de Charles Town, en Carolina del Sur.', fa: 'کشتی من از چارلز تاون در کارولینای جنوبی آمد.' },
        { en: 'The South has rich soil and a long [[growing season|growing season]].', es: 'El Sur tiene tierra rica y una larga [[growing season|temporada de cultivo]].', fa: 'جنوب خاک حاصلخیز و [[growing season|فصل کشت]] دراز دارد.' },
        { en: 'Big [[plantation|plantations]] grow tobacco, rice and [[indigo|indigo]] to sell. There are small farms too.', es: 'Grandes [[plantation|plantaciones]] siembran tabaco, arroz y [[indigo|añil]] para vender. También hay granjas pequeñas.', fa: '[[plantation|کشتزارهای بزرگ]] تنباکو، برنج و [[indigo|نیل]] برای فروش می‌کارند. فارم‌های کوچک هم هست.' },
        { en: '[[enslaved|Enslaved]] Africans are forced to do that work. I am free; many are not.', es: 'Africanos [[enslaved|esclavizados]] son obligados a hacer ese trabajo. Yo soy libre; muchos no.', fa: 'افریقایی‌های [[enslaved|برده]] به زور این کار را می‌کنند. من آزادم؛ بسیاری آزاد نیستند.' }
      ],
      ask: {
        stat: 'loc',
        q: { en: 'Who did most of the hard work on Southern plantations?', es: '¿Quién hacía la mayor parte del trabajo duro en las plantaciones del Sur?', fa: 'بیشتر کار سخت کشتزارهای بزرگ جنوب را کی می‌کرد؟' },
        choices: [
          { ok: true, t: { en: 'Enslaved Africans, forced to work', es: 'Africanos esclavizados, a la fuerza', fa: 'افریقایی‌های برده، به زور' },
            why: { en: 'Yes. They were forced to work for no pay. It was cruel and deeply wrong.', es: 'Sí. Los obligaban a trabajar sin pago. Fue cruel y muy injusto.', fa: 'بله. آن‌ها را به زور و بی‌مزد به کار وامی‌داشتند. این ظالمانه و بسیار نادرست بود.' } },
          { t: { en: 'Quaker families from Pennsylvania', es: 'Familias cuáqueras de Pensilvania', fa: 'خانواده‌های کویکر از پنسلوانیا' },
            why: { en: 'Quakers lived mostly in Pennsylvania. Plantation work was forced on enslaved Africans.', es: 'Los cuáqueros vivían sobre todo en Pensilvania. El trabajo forzado caía sobre africanos esclavizados.', fa: 'کویکرها بیشتر در پنسلوانیا بودند. کار کشتزار به زور بر افریقایی‌های برده تحمیل می‌شد.' } },
          { t: { en: 'Sailors from New England ships', es: 'Marineros de barcos de Nueva Inglaterra', fa: 'ملاحان کشتی‌های نیو انگلند' },
            why: { en: 'Sailors worked at sea. On plantations, enslaved Africans were forced to work.', es: 'Los marineros trabajaban en el mar. En las plantaciones, obligaban a africanos esclavizados.', fa: 'ملاحان در بحر کار می‌کردند. در کشتزارها افریقایی‌های برده به زور کار می‌کردند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 7, y: 8, text: { en: 'PHILADELPHIA · 1750 · Capital of Pennsylvania, a Middle Colony, on Lenape homeland.', es: 'FILADELFIA · 1750 · Capital de Pensilvania, una Colonia del Centro, en tierra natal lenape.', fa: 'فیلادلفیا · ۱۷۵۰ · پایتخت پنسلوانیا، یک مستعمرهٔ میانه، در وطن لناپی‌ها.' } },
    { x: 9, y: 12, text: { en: 'HIGH STREET MARKET · Goods from all 13 colonies are sold here.', es: 'MERCADO DE LA CALLE HIGH · Aquí se venden cosas de las 13 colonias.', fa: 'بازار سرک های · اینجا جنس‌های هر ۱۳ مستعمره فروخته می‌شود.' } },
    { x: 22, y: 2, text: { en: 'NORTH WHARF · Ships from New England: fish, lumber and new ships.', es: 'MUELLE NORTE · Barcos de Nueva Inglaterra: pescado, madera y barcos nuevos.', fa: 'بندرگاه شمالی · کشتی‌های نیو انگلند: ماهی، چوب و کشتی‌های نو.' } },
    { x: 23, y: 8, text: { en: 'MIDDLE WHARF · Ships of the Middle Colonies: wheat, flour and grain.', es: 'MUELLE CENTRAL · Barcos de las Colonias del Centro: trigo, harina y grano.', fa: 'بندرگاه میانه · کشتی‌های مستعمره‌های میانه: گندم، آرد و دانه.' } },
    { x: 23, y: 19, text: { en: 'SOUTH WHARF · Ships from the Southern Colonies: tobacco, rice and indigo.', es: 'MUELLE SUR · Barcos de las Colonias del Sur: tabaco, arroz y añil.', fa: 'بندرگاه جنوبی · کشتی‌های مستعمره‌های جنوبی: تنباکو، برنج و نیل.' } }
  ],

  /* the quest: Martha (gold !) by the mapmaker's shop -> Peter the newspaper boy on the north-west side
     -> the lost map, where Mulberry Street meets the river, 3 steps north -> back to Martha */
  quest: {
    stat: 'hei',
    title: { en: 'The Lost Colony Map', es: 'El mapa perdido de las colonias', fa: 'نقشهٔ گمشدهٔ مستعمره‌ها' },
    giver: {
      x: 12, y: 15,
      name: { en: 'Martha', es: 'Martha', fa: 'مارتا' },
      role: { en: 'Mapmaker\'s daughter', es: 'Hija del cartógrafo', fa: 'دختر نقشه‌کش' },
      look: { skin: 2, hair: '#5a3a1a', shirt: '#8a4a8a', pants: '#3a3a4a', style: 'long' },
      lines: [
        { en: 'Oh no! The wind took my new map of the 13 colonies!', es: '¡Ay, no! ¡El viento se llevó mi mapa nuevo de las 13 colonias!', fa: 'وای! باد نقشهٔ نوی ۱۳ مستعمرهٔ مرا برد!' },
        { en: 'Peter sells newspapers north of High Street. Maybe he saw it fly.', es: 'Peter vende periódicos al norte de la calle High. Tal vez lo vio volar.', fa: 'پیتر در شمال سرک های روزنامه می‌فروشد. شاید دید که پرید.' }
      ],
      wait: { en: 'Peter is north of High Street, on the west side of town.', es: 'Peter está al norte de la calle High, en el lado oeste.', fa: 'پیتر در شمال سرک های، در طرف غرب شهر است.' },
      thanks: { en: 'My map! Now people can see all 3 regions again. Thank you!', es: '¡Mi mapa! Ahora la gente puede ver otra vez las 3 regiones. ¡Gracias!', fa: 'نقشه‌ام! حالا مردم دوباره هر ۳ منطقه را می‌بینند. تشکر!' }
    },
    contact: {
      x: 3, y: 7,
      name: { en: 'Peter', es: 'Peter', fa: 'پیتر' },
      role: { en: 'Newspaper boy', es: 'Vendedor de periódicos', fa: 'پسر روزنامه‌فروش' },
      look: { skin: 3, hair: '#2a1a10', shirt: '#c8b890', pants: '#4a3a2a', hat: '#5a4a3a', style: 'short' },
      lines: [
        { en: 'News! News from all 13 colonies! Oh, a map? I saw it fly east.', es: '¡Noticias de las 13 colonias! ¿Un mapa? Lo vi volar al este.', fa: 'خبر! خبر از هر ۱۳ مستعمره! نقشه؟ دیدم که به شرق پرید.' },
        { en: 'Walk east on Mulberry Street to the river. Then go 3 steps north.', es: 'Camina al este por la calle Mulberry hasta el río. Luego da 3 pasos al norte.', fa: 'در سرک مالبری به شرق تا دریا برو. بعد ۳ قدم به شمال برو.' }
      ]
    },
    action: {
      type: 'find',
      at: [25, 1],
      hint: { en: 'east on Mulberry Street to the river, then 3 steps north', es: 'al este por la calle Mulberry hasta el río, luego 3 pasos al norte', fa: 'در سرک مالبری به شرق تا دریا، بعد ۳ قدم به شمال' },
      found: { en: 'There it is, caught by the river! A map of the 13 colonies, north to south.', es: '¡Ahí está, junto al río! Un mapa de las 13 colonias, de norte a sur.', fa: 'آنجاست، کنار دریا گیر مانده! نقشهٔ ۱۳ مستعمره، از شمال تا جنوب.' },
      item: { icon: '🗺️', name: { en: 'Martha\'s colony map', es: 'El mapa de Martha', fa: 'نقشهٔ مارتا' } }
    }
  },

  scraps: [[1, 1], [1, 20], [20, 1]],
  smudges: [[12, 7], [19, 20]],

  challenge: {
    at: [23, 12],
    type: 'carry', // in the world; the card version (sort) is the fallback
    // each region's ships use one wharf: New England to the north wharf, the Middle Colonies to the middle one, the South to the south one
    zones: [{ bin: 'ne', x: 26, y: 2, w: 4, h: 2 }, { bin: 'mid', x: 26, y: 9, w: 4, h: 2 }, { bin: 'south', x: 26, y: 17, w: 4, h: 2 }],
    stat: 'reg',
    title: { en: 'Which region?', es: '¿Qué región?', fa: 'کدام منطقه؟' },
    intro: { en: 'The Grump mixed up the ship lists! Carry each card to the right wharf: north, middle or south.',
      es: '¡El Gruñón revolvió las listas de los barcos! Lleva cada tarjeta al muelle correcto: norte, centro o sur.',
      fa: 'غرغرو فهرست کشتی‌ها را درهم و برهم کرد! هر کارت را به بندرگاه درست ببر: شمال، میانه یا جنوب.' },
    bins: [
      { id: 'ne', icon: '🐟', label: { en: 'New England', es: 'Nueva Inglaterra', fa: 'نیو انگلند' },
        sub: { en: 'north: rocky soil, cold, forests and the sea', es: 'norte: tierra rocosa, frío, bosques y mar', fa: 'شمال: خاک سنگلاخ، سرما، جنگل و بحر' } },
      { id: 'mid', icon: '🌾', label: { en: 'Middle Colonies', es: 'Colonias del Centro', fa: 'مستعمره‌های میانه' },
        sub: { en: 'middle: rich soil, rivers, wheat', es: 'centro: tierra rica, ríos, trigo', fa: 'میانه: خاک حاصلخیز، دریاها، گندم' } },
      { id: 'south', icon: '☀️', label: { en: 'Southern Colonies', es: 'Colonias del Sur', fa: 'مستعمره‌های جنوبی' },
        sub: { en: 'south: warm, long growing season', es: 'sur: cálido, larga temporada de cultivo', fa: 'جنوب: گرم، فصل کشت دراز' } }
    ],
    items: [
      { bin: 'ne', t: { en: 'Massachusetts', es: 'Massachusetts', fa: 'ماساچوست' },
        why: { en: 'Massachusetts is in New England, with New Hampshire, Rhode Island and Connecticut.', es: 'Massachusetts está en Nueva Inglaterra, con New Hampshire, Rhode Island y Connecticut.', fa: 'ماساچوست در نیو انگلند است، با نیوهمپشایر، رود آیلند و کنتیکت.' } },
      { bin: 'ne', t: { en: 'Rocky soil and long, cold winters', es: 'Tierra rocosa e inviernos largos y fríos', fa: 'خاک سنگلاخ و زمستان‌های دراز و سرد' },
        why: { en: 'New England is farthest north. Thin, rocky soil meant small farms.', es: 'Nueva Inglaterra está más al norte. La tierra rocosa daba granjas pequeñas.', fa: 'نیو انگلند از همه شمالی‌تر است. خاک سنگلاخ یعنی فارم‌های کوچک.' } },
      { bin: 'ne', t: { en: 'Fishing and building ships', es: 'Pesca y construcción de barcos', fa: 'ماهی‌گیری و کشتی‌سازی' },
        why: { en: 'New England forests gave wood for ships, and the sea was full of cod.', es: 'Los bosques de Nueva Inglaterra daban madera para barcos, y el mar tenía mucho bacalao.', fa: 'جنگل‌های نیو انگلند چوب کشتی می‌داد و بحر پر از ماهی کاد بود.' } },
      { bin: 'mid', t: { en: 'Pennsylvania', es: 'Pensilvania', fa: 'پنسلوانیا' },
        why: { en: 'Pennsylvania is a Middle Colony, with New York, New Jersey and Delaware.', es: 'Pensilvania es una Colonia del Centro, con Nueva York, Nueva Jersey y Delaware.', fa: 'پنسلوانیا یک مستعمرهٔ میانه است، با نیویارک، نیوجرسی و دلاویر.' } },
      { bin: 'mid', t: { en: 'New York', es: 'Nueva York', fa: 'نیویارک' },
        why: { en: 'New York is a Middle Colony, between New England and the South.', es: 'Nueva York es una Colonia del Centro, entre Nueva Inglaterra y el Sur.', fa: 'نیویارک یک مستعمرهٔ میانه است، میان نیو انگلند و جنوب.' } },
      { bin: 'mid', t: { en: 'Wheat fields: the breadbasket', es: 'Campos de trigo: el granero', fa: 'کشتزار گندم: سبد نان' },
        why: { en: 'Rich soil grew so much wheat that the Middle Colonies were the breadbasket.', es: 'La tierra rica daba tanto trigo que las Colonias del Centro eran el granero.', fa: 'خاک حاصلخیز این‌قدر گندم داد که مستعمره‌های میانه سبد نان شدند.' } },
      { bin: 'south', t: { en: 'Virginia', es: 'Virginia', fa: 'ویرجینیا' },
        why: { en: 'Virginia is a Southern Colony, with Maryland, North and South Carolina, and Georgia.', es: 'Virginia es una Colonia del Sur, con Maryland, Carolina del Norte, Carolina del Sur y Georgia.', fa: 'ویرجینیا یک مستعمرهٔ جنوبی است، با مریلند، کارولینای شمالی و جنوبی و جورجیا.' } },
      { bin: 'south', t: { en: 'Plantations of tobacco, rice and indigo', es: 'Plantaciones de tabaco, arroz y añil', fa: 'کشتزارهای بزرگ تنباکو، برنج و نیل' },
        why: { en: 'A long growing season made big plantations. Enslaved Africans were forced to do the work.', es: 'La larga temporada de cultivo permitió grandes plantaciones. Obligaban a africanos esclavizados a trabajar.', fa: 'فصل کشت دراز کشتزارهای بزرگ ساخت. افریقایی‌های برده به زور در آن کار می‌کردند.' } }
    ],
    success: { en: 'Every ship list is right again! North, middle and south each have their own way of life.', es: '¡Todas las listas de barcos están bien! El norte, el centro y el sur tienen su propia forma de vivir.', fa: 'همهٔ فهرست‌های کشتی دوباره درست شد! شمال، میانه و جنوب هر کدام طرز زندگی خود را دارند.' }
  },

  boss: {
    at: [8, 18],
    stat: 'reg',
    need: 3,
    name: { en: 'The Muddle Grump', es: 'El Gruñón Enredón', fa: 'غرغروی درهم و برهمکار' },
    appear: { en: 'The Muddle Grump is hiding in the fog on the green!', es: '¡El Gruñón Enredón se esconde en la niebla del parque!', fa: 'غرغروی درهم و برهمکار در مه روی سبزه‌زار پنهان است!' },
    taunt: { en: 'North, middle, south, who cares? I mixed up every colony on the map!', es: 'Norte, centro, sur, ¿a quién le importa? ¡Revolví todas las colonias del mapa!', fa: 'شمال، میانه، جنوب، کی پروا دارد؟ همهٔ مستعمره‌های نقشه را درهم و برهم کردم!' },
    win: { en: 'The fog lifts over the Delaware. Journal page 1.2 floats down into your hands!', es: 'La niebla se va del Delaware. ¡La página 1.2 del diario cae en tus manos!', fa: 'مه از روی دلاویر کنار می‌رود. صفحهٔ ۱.۲ روزنامچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'Which colonies were in New England?', es: '¿Qué colonias estaban en Nueva Inglaterra?', fa: 'کدام مستعمره‌ها در نیو انگلند بودند؟' },
        choices: [
          { en: 'Massachusetts, New Hampshire, Rhode Island, Connecticut', es: 'Massachusetts, New Hampshire, Rhode Island, Connecticut', fa: 'ماساچوست، نیوهمپشایر، رود آیلند، کنتیکت' },
          { en: 'New York, New Jersey, Pennsylvania and Delaware', es: 'Nueva York, Nueva Jersey, Pensilvania y Delaware', fa: 'نیویارک، نیوجرسی، پنسلوانیا و دلاویر' },
          { en: 'Maryland, Virginia, North Carolina and Georgia', es: 'Maryland, Virginia, Carolina del Norte y Georgia', fa: 'مریلند، ویرجینیا، کارولینای شمالی و جورجیا' },
          { en: 'New Jersey, North Carolina, South Carolina, Delaware', es: 'Nueva Jersey, Carolina del Norte, Carolina del Sur, Delaware', fa: 'نیوجرسی، کارولینای شمالی، کارولینای جنوبی، دلاویر' }],
        answer: 0,
        why: { en: 'New England was the 4 northern colonies: Massachusetts, New Hampshire, Rhode Island and Connecticut.', es: 'Nueva Inglaterra eran las 4 colonias del norte: Massachusetts, New Hampshire, Rhode Island y Connecticut.', fa: 'نیو انگلند ۴ مستعمرهٔ شمالی بود: ماساچوست، نیوهمپشایر، رود آیلند و کنتیکت.' } },
      { q: { en: 'New England had rocky soil and cold winters. How did many people earn a living?', es: 'Nueva Inglaterra tenía tierra rocosa e inviernos fríos. ¿Cómo se ganaba la vida mucha gente?', fa: 'نیو انگلند خاک سنگلاخ و زمستان سرد داشت. بسیاری از مردم چطور نان پیدا می‌کردند؟' },
        choices: [
          { en: 'Fishing, shipbuilding and trade', es: 'Pesca, barcos y comercio', fa: 'ماهی‌گیری، کشتی‌سازی و تجارت' },
          { en: 'Big tobacco and rice plantations', es: 'Grandes plantaciones de tabaco y arroz', fa: 'کشتزارهای بزرگ تنباکو و برنج' },
          { en: 'Huge wheat farms on flat land', es: 'Enormes trigales en tierra plana', fa: 'فارم‌های بزرگ گندم در زمین هموار' },
          { en: 'Mining gold in the mountains', es: 'Sacando oro de las montañas', fa: 'استخراج طلا در کوه‌ها' }],
        answer: 0,
        why: { en: 'Farming was hard, so people used the forests and the sea: fish, ships and trade.', es: 'Sembrar era difícil, así que usaban los bosques y el mar: pesca, barcos y comercio.', fa: 'دهقانی سخت بود، پس مردم از جنگل و بحر کار گرفتند: ماهی، کشتی و تجارت.' } },
      { q: { en: 'Why were the Middle Colonies called the breadbasket?', es: '¿Por qué a las Colonias del Centro las llamaban el granero?', fa: 'چرا مستعمره‌های میانه را «سبد نان» می‌گفتند؟' },
        choices: [
          { en: 'They grew lots of wheat and grain', es: 'Sembraban mucho trigo y grano', fa: 'گندم و دانهٔ زیاد می‌کاشتند' },
          { en: 'They baked all of England\'s bread', es: 'Horneaban todo el pan de Inglaterra', fa: 'همهٔ نان انگلستان را می‌پختند' },
          { en: 'They grew the most rice and indigo', es: 'Sembraban más arroz y añil', fa: 'بیشترین برنج و نیل را می‌کاشتند' },
          { en: 'They made baskets from their forests', es: 'Hacían canastas con sus bosques', fa: 'از جنگل‌هایشان سبد می‌ساختند' }],
        answer: 0,
        why: { en: 'Rich soil, rivers and mild weather grew lots of wheat. Ships carried their flour away.', es: 'La tierra rica, los ríos y el clima templado daban mucho trigo. Los barcos llevaban la harina.', fa: 'خاک حاصلخیز، دریاها و هوای معتدل گندم زیاد داد. کشتی‌ها آردشان را بردند.' } },
      { q: { en: 'Which colony did the Quaker William Penn start, with religious freedom?', es: '¿Qué colonia fundó el cuáquero William Penn, con libertad religiosa?', fa: 'ویلیام پن کویکر کدام مستعمره را با آزادی دین ساخت؟' },
        choices: [
          { en: 'Pennsylvania', es: 'Pensilvania', fa: 'پنسلوانیا' },
          { en: 'Virginia', es: 'Virginia', fa: 'ویرجینیا' },
          { en: 'Georgia', es: 'Georgia', fa: 'جورجیا' },
          { en: 'Massachusetts', es: 'Massachusetts', fa: 'ماساچوست' }],
        answer: 0,
        why: { en: 'Penn started Pennsylvania. People of many faiths could worship freely there.', es: 'Penn fundó Pensilvania. Allí gente de muchas religiones podía rezar con libertad.', fa: 'پن پنسلوانیا را ساخت. آنجا مردم از دین‌های زیاد آزادانه عبادت می‌کردند.' } },
      { q: { en: 'Why could the Southern Colonies grow tobacco, rice and indigo?', es: '¿Por qué las Colonias del Sur podían sembrar tabaco, arroz y añil?', fa: 'چرا مستعمره‌های جنوبی می‌توانستند تنباکو، برنج و نیل بکارند؟' },
        choices: [
          { en: 'Warm weather and a long growing season', es: 'Clima cálido y larga temporada de cultivo', fa: 'هوای گرم و فصل کشت دراز' },
          { en: 'Rocky soil and very cold winters', es: 'Tierra rocosa e inviernos muy fríos', fa: 'خاک سنگلاخ و زمستان‌های بسیار سرد' },
          { en: 'Thick forests and many fishing harbors', es: 'Bosques espesos y muchos puertos de pesca', fa: 'جنگل‌های انبوه و بندرهای ماهی‌گیری زیاد' },
          { en: 'Snowy mountains next to every farm', es: 'Montañas nevadas junto a cada granja', fa: 'کوه‌های برفی کنار هر فارم' }],
        answer: 0,
        why: { en: 'The South was warm, with rich soil and a long growing season for these crops.', es: 'El Sur era cálido, con tierra rica y una larga temporada de cultivo.', fa: 'جنوب گرم بود، با خاک حاصلخیز و فصل کشت دراز برای این حاصلات.' } },
      { q: { en: 'Who was forced to do most of the work on Southern plantations?', es: '¿A quiénes obligaban a hacer casi todo el trabajo en las plantaciones del Sur?', fa: 'کی به زور بیشتر کار کشتزارهای بزرگ جنوب را می‌کرد؟' },
        choices: [
          { en: 'Enslaved Africans', es: 'Africanos esclavizados', fa: 'افریقایی‌های برده' },
          { en: 'Paid workers from England', es: 'Trabajadores pagados de Inglaterra', fa: 'کارگران بامزد از انگلستان' },
          { en: 'Quaker farmers', es: 'Granjeros cuáqueros', fa: 'دهقانان کویکر' },
          { en: 'Sailors from Boston', es: 'Marineros de Boston', fa: 'ملاحان بوستون' }],
        answer: 0,
        why: { en: 'Enslaved Africans were forced to work for no pay. Their families could be sold apart.', es: 'Obligaban a africanos esclavizados a trabajar sin pago. Podían vender a sus familias por separado.', fa: 'افریقایی‌های برده به زور و بی‌مزد کار می‌کردند. خانواده‌هایشان را جدا جدا می‌فروختند.' } },
      { q: { en: 'What was the triangular trade?', es: '¿Qué fue el comercio triangular?', fa: 'تجارت مثلثی چه بود؟' },
        choices: [
          { en: 'Atlantic trade linking the colonies, Africa and the West Indies', es: 'Comercio atlántico entre las colonias, África y las Antillas', fa: 'تجارت بحر اطلس میان مستعمره‌ها، افریقا و جزایر هند غربی' },
          { en: 'A market with three stalls on High Street in Philadelphia', es: 'Un mercado con tres puestos en la calle High de Filadelfia', fa: 'بازاری با سه دکان در سرک های فیلادلفیا' },
          { en: 'A treaty that split the land into three equal colonies', es: 'Un tratado que dividió la tierra en tres colonias iguales', fa: 'معاهده‌ای که زمین را به سه مستعمرهٔ برابر تقسیم کرد' },
          { en: 'A ship race from Boston to Charles Town, then back', es: 'Una carrera de barcos de Boston a Charles Town y de vuelta', fa: 'مسابقهٔ کشتی از بوستون تا چارلز تاون و برگشت' }],
        answer: 0,
        why: { en: 'Ships carried rum to Africa, enslaved Africans to the West Indies, and sugar back. Millions suffered.', es: 'Los barcos llevaban ron a África, africanos esclavizados a las Antillas, y azúcar de vuelta. Millones sufrieron.', fa: 'کشتی‌ها رم به افریقا، افریقایی‌های برده به جزایر هند غربی و شکر را برمی‌گرداندند. میلیون‌ها رنج کشیدند.' } },
      { q: { en: 'Who lived on the land of Pennsylvania before the colonists came?', es: '¿Quién vivía en la tierra de Pensilvania antes de que llegaran los colonos?', fa: 'پیش از آمدن مهاجران، کی در زمین پنسلوانیا زندگی می‌کرد؟' },
        choices: [
          { en: 'The Lenape people', es: 'El pueblo lenape', fa: 'مردم لناپی' },
          { en: 'Farmers from Germany', es: 'Granjeros de Alemania', fa: 'دهقانان آلمانی' },
          { en: 'No one at all', es: 'Nadie', fa: 'هیچ کس' },
          { en: 'Spanish soldiers', es: 'Soldados españoles', fa: 'عسکرهای هسپانوی' }],
        answer: 0,
        why: { en: 'The Lenape lived here for thousands of years. Native nations lived across all 13 colonies.', es: 'Los lenape vivieron aquí miles de años. Había naciones indígenas en las 13 colonias.', fa: 'لناپی‌ها هزاران سال اینجا زندگی کردند. ملت‌های بومی در سراسر ۱۳ مستعمره بودند.' } }
    ]
  },

  learned: [
    { en: 'The 13 colonies formed 3 [[region|regions]]: New England, the Middle Colonies and the Southern Colonies.', es: 'Las 13 colonias formaban 3 [[region|regiones]]: Nueva Inglaterra, las Colonias del Centro y las Colonias del Sur.', fa: '۱۳ مستعمره ۳ [[region|منطقه]] داشتند: نیو انگلند، مستعمره‌های میانه و مستعمره‌های جنوبی.' },
    { en: 'Geography shaped life: fish and ships in the north, wheat in the middle, plantations in the south.', es: 'La geografía marcó la vida: pesca y barcos en el norte, trigo en el centro, plantaciones en el sur.', fa: 'جغرافیا زندگی را شکل داد: ماهی و کشتی در شمال، گندم در میانه، کشتزارهای بزرگ در جنوب.' },
    { en: 'Plantations used the forced labor of [[enslaved|enslaved]] Africans. Native nations lived on all this land first.', es: 'Las plantaciones usaban el trabajo forzado de africanos [[enslaved|esclavizados]]. Las naciones indígenas vivían primero en toda esta tierra.', fa: 'کشتزارهای بزرگ از کار اجباری افریقایی‌های [[enslaved|برده]] کار می‌گرفتند. ملت‌های بومی اول در همهٔ این زمین زندگی می‌کردند.' }
  ],
  reflect: {
    q: { en: 'How do the land and weather where you live shape people\'s jobs or food?', es: '¿Cómo influyen la tierra y el clima de donde vives en los trabajos o la comida?', fa: 'زمین و هوای جایی که زندگی می‌کنی چطور بر کار یا غذای مردم اثر دارد؟' },
    starter: { en: 'Where I live, the land and weather', es: 'Donde vivo, la tierra y el clima', fa: 'جایی که من زندگی می‌کنم، زمین و هوا' }
  }
};
