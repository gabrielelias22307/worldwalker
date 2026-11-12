/* TRAILWALKER · Episode 3.3 · The First Presidents (Washington and Adams) (VUS)
   Mount Vernon, Virginia, 1797. George Washington has just come home after two terms as President.
   East edge (x 25-31): the Potomac River, with the sandy shore and the wharf (row 16).
   Middle: the mansion (seen from outside only, x 18-22, rows 7-10) with its paved piazza facing the river,
   the bowling green to the west, the upper (flower) garden to the north and the lower (vegetable) garden to the south.
   North lane (row 3): the quarters, the spinning house and the blacksmith shop, where enslaved people lived and worked.
   West: wheat fields (north) and corn rows (south). South-east: the hired gardener's house.
   The survey posts hold a table that compares Washington and Adams. */
window.EPISODE = {
  id: '3.3',
  realm: 3,
  sol: 'VUS',
  title: { en: 'The First Presidents', es: 'Los primeros presidentes', fa: 'اولین رئیس‌جمهورها' },
  weather: { sky: 'clear', time: 'sunset' },
  place: { en: 'Mount Vernon, 1797', es: 'Mount Vernon, 1797', fa: 'مونت ورنن، ۱۷۹۷' },
  intro: [
    { en: 'The Grump blurred the journal page about the first two Presidents.',
      es: 'El Gruñón borró la página del diario sobre los dos primeros presidentes.',
      fa: 'غرغرو صفحهٔ روزنامچه دربارهٔ دو رئیس‌جمهور اول را تار کرد.' },
    { en: 'Talk to the 3 people here, then fix the journal stone.',
      es: 'Habla con las 3 personas de aquí y luego arregla la piedra del diario.',
      fa: 'با ۳ نفر اینجا گپ بزن، بعد سنگ روزنامچه را درست کن.' }
  ],
  /* cut scenes: Mount Vernon on the Potomac, 1797 on the timeline */
  scenes: {
    at: [-77.09, 38.71],
    year: 1797,
    start: [
      { en: 'In 1789, George Washington became the first President of the United States.',
        es: 'En 1789, George Washington fue el primer presidente de los Estados Unidos.',
        fa: 'در سال ۱۷۸۹، جورج واشنگتن اولین رئیس‌جمهور ایالات متحده شد.' },
      { en: 'He served two terms. In 1797, John Adams became President.',
        es: 'Gobernó dos períodos. En 1797, John Adams fue presidente.',
        fa: 'او دو دوره خدمت کرد. در سال ۱۷۹۷، جان آدامز رئیس‌جمهور شد.' },
      { en: 'Washington went home to Mount Vernon, his farm in Virginia.',
        es: 'Washington volvió a Mount Vernon, su finca en Virginia.',
        fa: 'واشنگتن به مونت ورنن، فارم خودش در ویرجینیا، برگشت.' }
    ],
    page: { en: 'In 1799, his will freed the people he enslaved, after Martha\'s death.',
      es: 'En 1799, su testamento liberó a las personas que él esclavizaba, tras la muerte de Martha.',
      fa: 'در سال ۱۷۹۹، وصیت‌نامهٔ او مردمی را که برده کرده بود، بعد از مرگ مارتا آزاد کرد.' },
    guess: {
      q: { en: 'Washington could have stayed President longer. What do you think he did?', es: 'Washington pudo seguir más tiempo de presidente. ¿Qué crees que hizo?', fa: 'واشنگتن می‌توانست بیشتر رئیس‌جمهور بماند. فکر می‌کنی چه کرد؟' },
      choices: [
        { t: { en: '🏡 Went home after 2 terms', es: '🏡 Se fue a casa tras 2 períodos', fa: '🏡 بعد از ۲ دوره به خانه رفت' }, ok: true },
        { t: { en: '👑 Stayed President for life', es: '👑 Fue presidente de por vida', fa: '👑 تا آخر عمر رئیس‌جمهور ماند' } }
      ],
      why: { en: 'He stepped down after two terms. Presidents followed his example for about 140 years.', es: 'Dejó el cargo tras dos períodos. Los presidentes siguieron su ejemplo unos 140 años.', fa: 'او بعد از دو دوره کنار رفت. رئیس‌جمهورها حدود ۱۴۰ سال از این نمونه پیروی کردند.' }
    },
    next: {
      q: { en: 'Next: 1803. How did the United States double in size?', es: 'Ahora: 1803. ¿Cómo duplicó su tamaño Estados Unidos?', fa: 'بعدی: ۱۸۰۳. ایالات متحده چطور دو برابر بزرگ شد؟' },
      choices: [
        { t: { en: '💵 It bought land from France', es: '💵 Compró tierras a Francia', fa: '💵 از فرانسه زمین خرید' }, ok: true },
        { t: { en: '⚔️ It beat Spain in war', es: '⚔️ Ganó una guerra a España', fa: '⚔️ در جنگ با هسپانیه برد' } }
      ],
      why: { en: 'In 1803, the US bought Louisiana from France. Native nations already lived on that land.', es: 'En 1803, EE. UU. compró Luisiana a Francia. Las naciones indígenas ya vivían en esa tierra.', fa: 'در سال ۱۸۰۳، امریکا لوئیزیانا را از فرانسه خرید. ملت‌های بومی از قبل در آن زمین زندگی می‌کردند.' }
    }
  },
  /* houses: who lives behind each door; walk in and talk */
  houses: [
    { at: [11, 2], name: { en: 'Grandma Nell', es: 'Abuela Nell', fa: 'مادرکلان نِل' },
      look: { skin: 5, hair: '#d8d8d8', shirt: '#8a6a4a', pants: '#3a2a20', style: 'bun' },
      lines: [
        { en: 'This is the quarters. My family sleeps in this one room.', es: 'Estas son las viviendas. Mi familia duerme en este solo cuarto.', fa: 'اینجا جای زندگی ماست. خانواده‌ام در همین یک اتاق می‌خوابند.' },
        { en: 'My grandchildren live on another farm. I see them on Sundays.', es: 'Mis nietos viven en otra finca. Los veo los domingos.', fa: 'نواسه‌هایم در فارم دیگری زندگی می‌کنند. روزهای یکشنبه آن‌ها را می‌بینم.' },
        { en: 'At night I tend my own garden and chickens. I sell the eggs.', es: 'De noche cuido mi propio huerto y mis gallinas. Vendo los huevos.', fa: 'شب‌ها از باغچه و مرغ‌های خودم نگهداری می‌کنم. تخم‌ها را می‌فروشم.' }
      ] },
    { at: [16, 2], name: { en: 'Lydia', es: 'Lydia', fa: 'لیدیا' },
      look: { skin: 4, hair: '#1a1008', shirt: '#c0a070', pants: '#4a3a2a', style: 'long' },
      lines: [
        { en: 'This is the spinning house. We spin wool and flax into thread.', es: 'Esta es la casa de hilar. Hilamos lana y lino.', fa: 'اینجا خانهٔ ریسندگی است. ما پشم و کتان را تار می‌ریسیم.' },
        { en: 'Our thread becomes cloth for everyone on the farm.', es: 'Nuestro hilo se vuelve tela para todos en la finca.', fa: 'تار ما برای همهٔ مردم فارم تکه می‌شود.' },
        { en: 'It is skilled work. But we are [[enslaved|enslaved]], so we get no pay.', es: 'Es un trabajo de habilidad. Pero estamos [[enslaved|esclavizadas]] y no nos pagan.', fa: 'این کار مهارت می‌خواهد. اما ما [[enslaved|برده]] هستیم، پس مزد نمی‌گیریم.' }
      ] },
    { at: [21, 2], name: { en: 'Simon', es: 'Simón', fa: 'سایمن' },
      look: { skin: 5, hair: '#120c08', shirt: '#5a4a3a', pants: '#2a2a2a', style: 'short' },
      lines: [
        { en: 'I am the blacksmith. I make nails, hinges and plow parts.', es: 'Soy el herrero. Hago clavos, bisagras y piezas de arado.', fa: 'من آهنگر هستم. میخ، قبضه و پرزه‌های قلبه می‌سازم.' },
        { en: 'It took me years to learn this skill.', es: 'Me tomó años aprender este oficio.', fa: 'سال‌ها طول کشید تا این مهارت را یاد بگیرم.' },
        { en: 'My work earns money for this farm. None of it is mine.', es: 'Mi trabajo gana dinero para esta finca. Nada es para mí.', fa: 'کار من برای این فارم پول می‌آورد. هیچ‌کدامش مال من نیست.' }
      ] },
    { at: [21, 18], name: { en: 'Mr. Duncan', es: 'Señor Duncan', fa: 'آقای دانکن' },
      look: { skin: 0, hair: '#b0602a', shirt: '#4a6a3a', pants: '#3a3a2a', style: 'short', hat: '#5a4a2a' },
      lines: [
        { en: 'I came from Scotland. I am a paid gardener here.', es: 'Vine de Escocia. Soy jardinero con sueldo aquí.', fa: 'من از اسکاتلند آمدم. اینجا باغبان مزدبگیر هستم.' },
        { en: 'If I want, I can quit and leave. I am free.', es: 'Si quiero, puedo renunciar e irme. Soy libre.', fa: 'اگر بخواهم، می‌توانم کار را رها کنم و بروم. من آزاد هستم.' },
        { en: 'The enslaved workers beside me cannot leave. That is the big difference.', es: 'Los trabajadores esclavizados a mi lado no pueden irse. Esa es la gran diferencia.', fa: 'کارگران برده کنار من نمی‌توانند بروند. فرق بزرگ همین است.' }
      ] }
  ],

  /* 32 x 22 = 2 x 2 screens.
     West (x 1-7): wheat (w) in the north, corn rows (2 over 1) in the south.
     North lane (row 3): the quarters (11,2), the spinning house (16,2) and the blacksmith shop (21,2).
     Upper garden (fenced F, x 9-15, rows 4-7, gate at 12,7); lower garden (x 9-15, rows 12-15, gate at 12,12).
     The bowling green (rows 8-11) leads east to the mansion (R roof over h walls, no door) and its piazza (l).
     Row 16: the lane to the wharf (k) on the Potomac (~ shallow, = deep). The gardener's house is at (21,18). */
  map: [
    'TTTTTTTTTTTTTTTTTTTTTTTTTs~~====',
    'Twwwwww...RRR..QQQ..RRR..s~~====',
    'Twwwwww...hdh..hdh..hdh..s~~====',
    'Twwwwww.:::::::::::::::..s~~====',
    'Twwwwww.:FFFFFFF.........s~~====',
    'T.......:F,1,1,F.........s~~====',
    'T.x.....:F,2,2,F.........s~~====',
    'T.......:FFF,FFF..RRRRR..s~~====',
    'T.......::::::::::RRRRRl.s~~====',
    'T.......:.........hhhhhl.s~~====',
    'T.......:.......x.hhhhhl.s~~====',
    'T.......::::::::::lllll..s~~====',
    'T2222...:FFF,FFF.........s~~====',
    'T1111...:F2o2o2F.........s~~====',
    'T2222...:Fo1o1oF.........s~~====',
    'T1111...:FFFFFFF.........s~~====',
    'T2222...:::::::::::::::::skkk===',
    'T1111...:...........RRR..s~~====',
    'T2222...:...........hdh..s~~====',
    'T.......:................s~~====',
    'T,......:.....,..........s~~====',
    'TTTTTTTTTTTTTTTTTTTTTTTTTs~~===='
  ],
  start: [9, 10],

  /* finds: a clue note on the map leads to a hidden spot (+3 coins and a decoration for the camp) */
  finds: [
    { clueAt: [7, 13], at: [7, 17], decor: 'coinold',
      clue: { en: 'From this note, walk 4 steps south, along the edge of the corn.', es: 'Desde esta nota, camina 4 pasos al sur, por el borde del maíz.', fa: 'از این یادداشت، ۴ قدم به جنوب برو، کنار کشتزار جواری.' },
      text: { en: 'The US Mint in Philadelphia made its first coins in 1793. Here is an old penny.', es: 'La Casa de Moneda de Filadelfia hizo sus primeras monedas en 1793. Aquí hay un centavo antiguo.', fa: 'ضرابخانهٔ امریکا در فلادلفیا اولین سکه‌هایش را در ۱۷۹۳ ساخت. اینجا یک سکهٔ کهنه است.' } },
    { clueAt: [24, 14], at: [25, 19], decor: 'shell',
      clue: { en: 'From this note, walk 1 step east to the shore, then 5 steps south.', es: 'Desde esta nota, camina 1 paso al este hasta la orilla y luego 5 pasos al sur.', fa: 'از این یادداشت، ۱ قدم به شرق تا ساحل برو، بعد ۵ قدم به جنوب.' },
      text: { en: 'Each spring, enslaved fishermen caught herring and shad in the Potomac. Here is a river shell.', es: 'Cada primavera, pescadores esclavizados pescaban arenques y sábalos en el Potomac. Aquí hay una concha de río.', fa: 'هر بهار، ماهی‌گیران برده در دریای پوتومک ماهی می‌گرفتند. اینجا یک صدف دریایی است.' } }
  ],

  words: {
    precedent: { en: 'an example that people follow later', es: 'un ejemplo que la gente sigue después', fa: 'نمونه‌ای که مردم بعداً از آن پیروی می‌کنند' },
    cabinet: { en: 'the President\'s team of advisers; each one leads a department', es: 'el equipo de consejeros del presidente; cada uno dirige un departamento', fa: 'گروه مشاوران رئیس‌جمهور؛ هر کدام یک وزارت را رهبری می‌کند' },
    neutral: { en: 'not taking either side in a war', es: 'que no toma ningún lado en una guerra', fa: 'طرف هیچ‌کس را در جنگ نگرفتن' },
    rebellion: { en: 'people fighting against their own government', es: 'gente que lucha contra su propio gobierno', fa: 'جنگیدن مردم علیه حکومت خودشان' },
    'farewell address': { en: 'Washington\'s goodbye letter to the nation, printed in 1796', es: 'la carta de despedida de Washington a la nación, impresa en 1796', fa: 'نامهٔ خداحافظی واشنگتن به ملت که در ۱۷۹۶ چاپ شد' },
    'political party': { en: 'a group that shares ideas and works to win elections', es: 'un grupo que comparte ideas y trabaja para ganar elecciones', fa: 'گروهی که فکرهای مشترک دارد و برای بردن انتخابات کار می‌کند' },
    sedition: { en: 'words or acts that stir people up against the government', es: 'palabras o actos que animan a la gente contra el gobierno', fa: 'گفته یا کاری که مردم را علیه حکومت تحریک می‌کند' },
    enslaved: { en: 'forced to work for no pay and kept as someone\'s property', es: 'obligado a trabajar sin pago y tratado como propiedad de otra persona', fa: 'مجبور به کار بی‌مزد و مثل مال کس دیگری نگه داشته شده' }
  },

  npcs: [
    {
      x: 18, y: 4,
      name: { en: 'Ruth', es: 'Ruth', fa: 'روت' },
      role: { en: 'Seamstress', es: 'Costurera', fa: 'خیاط' },
      look: { skin: 4, hair: '#1a1008', shirt: '#6a3a5a', pants: '#3a2a2a', style: 'bun' },
      lines: [
        { en: 'I sew clothes for the house. I was born here at Mount Vernon.', es: 'Coso la ropa de la casa. Nací aquí, en Mount Vernon.', fa: 'من برای خانه لباس می‌دوزم. در همین مونت ورنن به دنیا آمدم.' },
        { en: 'Hundreds of us live and work here. We are [[enslaved|enslaved]]. We are not free.', es: 'Cientos de nosotros vivimos y trabajamos aquí. Estamos [[enslaved|esclavizados]]. No somos libres.', fa: 'صدها نفر از ما اینجا زندگی و کار می‌کنیم. ما [[enslaved|برده]] هستیم. آزاد نیستیم.' },
        { en: 'In 1796, Ona Judge escaped from the President\'s house in Philadelphia.', es: 'En 1796, Ona Judge escapó de la casa del presidente en Filadelfia.', fa: 'در سال ۱۷۹۶، اونا جاج از خانهٔ رئیس‌جمهور در فلادلفیا فرار کرد.' },
        { en: 'She was a seamstress, like me. She chose freedom.', es: 'Ella era costurera, como yo. Eligió la libertad.', fa: 'او هم مثل من خیاط بود. آزادی را انتخاب کرد.' }
      ],
      ask: {
        stat: 'mov',
        q: { en: 'What did Ona Judge do in 1796 to be free?', es: '¿Qué hizo Ona Judge en 1796 para ser libre?', fa: 'اونا جاج در سال ۱۷۹۶ برای آزاد شدن چه کرد؟' },
        choices: [
          { ok: true, t: { en: 'She escaped', es: 'Escapó', fa: 'فرار کرد' },
            why: { en: 'Yes. She escaped from the President\'s house and lived free in New Hampshire.', es: 'Sí. Escapó de la casa del presidente y vivió libre en New Hampshire.', fa: 'بله. او از خانهٔ رئیس‌جمهور فرار کرد و در نیوهمپشایر آزاد زندگی کرد.' } },
          { t: { en: 'She voted', es: 'Votó', fa: 'رأی داد' },
            why: { en: 'Enslaved people could not vote. Ona Judge escaped to be free.', es: 'Las personas esclavizadas no podían votar. Ona Judge escapó para ser libre.', fa: 'بردگان حق رأی نداشتند. اونا جاج برای آزادی فرار کرد.' } },
          { t: { en: 'She got paid', es: 'Le pagaron', fa: 'مزد گرفت' },
            why: { en: 'Enslaved people got no pay. Ona Judge escaped to be free.', es: 'A las personas esclavizadas no les pagaban. Ona Judge escapó para ser libre.', fa: 'بردگان مزد نمی‌گرفتند. اونا جاج برای آزادی فرار کرد.' } }
        ]
      }
    },
    {
      x: 20, y: 13,
      name: { en: 'Thomas', es: 'Thomas', fa: 'توماس' },
      role: { en: 'Printer from Alexandria', es: 'Impresor de Alexandria', fa: 'چاپگر از الکساندریا' },
      look: { skin: 1, hair: '#5a3a1a', shirt: '#e8e0d0', pants: '#2a2a3a', style: 'short', hat: '#1a1a1a' },
      lines: [
        { en: 'I print a newspaper in Alexandria. I came to see this famous farm.', es: 'Imprimo un periódico en Alexandria. Vine a ver esta finca famosa.', fa: 'من در الکساندریا روزنامه چاپ می‌کنم. آمدم این فارم مشهور را ببینم.' },
        { en: 'In 1796, Washington\'s [[farewell address|Farewell Address]] was printed in newspapers.', es: 'En 1796, el [[farewell address|Discurso de Despedida]] de Washington salió en los periódicos.', fa: 'در سال ۱۷۹۶، [[farewell address|پیام خداحافظی]] واشنگتن در روزنامه‌ها چاپ شد.' },
        { en: 'He warned against [[political party|political parties]]. He said they divide the nation.', es: 'Advirtió contra los [[political party|partidos políticos]]. Dijo que dividen a la nación.', fa: 'او دربارهٔ [[political party|حزب‌های سیاسی]] هشدار داد. گفت آن‌ها ملت را جدا می‌کنند.' },
        { en: 'He also warned against permanent alliances with other nations.', es: 'También advirtió contra alianzas permanentes con otras naciones.', fa: 'او دربارهٔ پیمان‌های همیشگی با کشورهای دیگر هم هشدار داد.' }
      ],
      ask: {
        stat: 'hei',
        q: { en: 'Read the source. What did the Farewell Address warn against?', es: 'Lee la fuente. ¿Contra qué advirtió el Discurso de Despedida?', fa: 'منبع را بخوان. پیام خداحافظی دربارهٔ چه هشدار داد؟' },
        choices: [
          { ok: true, t: { en: 'Political parties', es: 'Los partidos políticos', fa: 'حزب‌های سیاسی' },
            why: { en: 'Right! Washington feared parties would split Americans into angry sides.', es: '¡Correcto! Washington temía que los partidos dividieran a los estadounidenses en bandos enojados.', fa: 'درست! واشنگتن می‌ترسید حزب‌ها امریکایی‌ها را به گروه‌های قهر تقسیم کنند.' } },
          { t: { en: 'Printing newspapers', es: 'Imprimir periódicos', fa: 'چاپ روزنامه' },
            why: { en: 'The address itself was printed in newspapers. It warned against parties.', es: 'El discurso mismo salió en los periódicos. Advirtió contra los partidos.', fa: 'خود پیام در روزنامه‌ها چاپ شد. دربارهٔ حزب‌ها هشدار داد.' } },
          { t: { en: 'Farming wheat', es: 'Sembrar trigo', fa: 'کشت گندم' },
            why: { en: 'Washington grew wheat himself. The address warned against parties.', es: 'Washington mismo sembraba trigo. El discurso advirtió contra los partidos.', fa: 'واشنگتن خودش گندم می‌کاشت. پیام دربارهٔ حزب‌ها هشدار داد.' } }
        ]
      }
    },
    {
      x: 28, y: 16,
      name: { en: 'Captain Moore', es: 'Capitán Moore', fa: 'کپتان مور' },
      role: { en: 'Ship captain', es: 'Capitán de barco', fa: 'کپتان کشتی' },
      look: { skin: 2, hair: '#3a2a1a', shirt: '#2f4f8a', pants: '#2a2a2a', style: 'short', hat: '#1a1a2a' },
      lines: [
        { en: 'My ship carries flour and fish from this wharf to other ports.', es: 'Mi barco lleva harina y pescado de este muelle a otros puertos.', fa: 'کشتی من آرد و ماهی را از این بندرگاه به بندرهای دیگر می‌برد.' },
        { en: 'In 1793, Britain and France went to war.', es: 'En 1793, Gran Bretaña y Francia entraron en guerra.', fa: 'در سال ۱۷۹۳، برتانیه و فرانسه با هم جنگ کردند.' },
        { en: 'Washington said the United States would stay [[neutral|neutral]].', es: 'Washington dijo que Estados Unidos se mantendría [[neutral|neutral]].', fa: 'واشنگتن گفت ایالات متحده [[neutral|بی‌طرف]] می‌ماند.' },
        { en: 'Now French ships seize our ships at sea. President Adams wants peace.', es: 'Ahora barcos franceses atrapan nuestros barcos en el mar. El presidente Adams quiere paz.', fa: 'حالا کشتی‌های فرانسوی کشتی‌های ما را در بحر می‌گیرند. رئیس‌جمهور آدامز صلح می‌خواهد.' }
      ],
      ask: {
        stat: 'pla',
        q: { en: 'Britain and France went to war in 1793. What did Washington choose?', es: 'Gran Bretaña y Francia entraron en guerra en 1793. ¿Qué eligió Washington?', fa: 'برتانیه و فرانسه در ۱۷۹۳ جنگ کردند. واشنگتن چه را انتخاب کرد؟' },
        choices: [
          { ok: true, t: { en: 'To stay neutral', es: 'Quedarse neutral', fa: 'بی‌طرف ماندن' },
            why: { en: 'Yes! His Proclamation of Neutrality (1793) kept the young nation out of the war.', es: '¡Sí! Su Proclamación de Neutralidad (1793) mantuvo a la joven nación fuera de la guerra.', fa: 'بله! اعلامیهٔ بی‌طرفی او (۱۷۹۳) کشور جوان را از جنگ دور نگه داشت.' } },
          { t: { en: 'To help France', es: 'Ayudar a Francia', fa: 'کمک به فرانسه' },
            why: { en: 'France had helped in the Revolution, but Washington stayed out of this war.', es: 'Francia había ayudado en la Revolución, pero Washington no entró en esta guerra.', fa: 'فرانسه در انقلاب کمک کرده بود، اما واشنگتن از این جنگ دور ماند.' } },
          { t: { en: 'To help Britain', es: 'Ayudar a Gran Bretaña', fa: 'کمک به برتانیه' },
            why: { en: 'The nation was young and weak. Washington stayed out of the war.', es: 'La nación era joven y débil. Washington no entró en la guerra.', fa: 'کشور جوان و ضعیف بود. واشنگتن از جنگ دور ماند.' } }
        ]
      }
    }
  ],

  signs: [
    { x: 2, y: 6, text: { en: 'MOUNT VERNON · 1797 · George Washington\'s farm on the Potomac River, in Virginia.', es: 'MOUNT VERNON · 1797 · La finca de George Washington junto al río Potomac, en Virginia.', fa: 'مونت ورنن · ۱۷۹۷ · فارم جورج واشنگتن کنار دریای پوتومک، در ویرجینیا.' } },
    { x: 16, y: 10, text: { en: 'THE MANSION · Washington came home here in March 1797, after eight years as President.', es: 'LA MANSIÓN · Washington volvió aquí en marzo de 1797, tras ocho años de presidente.', fa: 'خانهٔ بزرگ · واشنگتن در مارچ ۱۷۹۷، بعد از هشت سال ریاست جمهوری، اینجا برگشت.' } }
  ],

  /* the quest: Jacob, a farmer from western Pennsylvania (gold !) in the south-west lane
     -> Ben the fisherman on the river shore (south-east) -> find the tax receipt in the north-west wheat field
     -> back to Jacob. It teaches the Whiskey Rebellion: the federal government enforced its law. */
  quest: {
    stat: 'pla',
    title: { en: 'The Lost Tax Receipt', es: 'El recibo de impuestos perdido', fa: 'رسید گمشدهٔ مالیات' },
    giver: {
      x: 10, y: 19,
      name: { en: 'Jacob', es: 'Jacob', fa: 'جیکب' },
      role: { en: 'Farmer from Pennsylvania', es: 'Granjero de Pensilvania', fa: 'دهقان از پنسلوانیا' },
      look: { skin: 1, hair: '#6a4a2a', shirt: '#7a5a3a', pants: '#3a3a2a', style: 'short', hat: '#4a3a2a' },
      lines: [
        { en: 'I came from western Pennsylvania to sell rye. I lost my tax receipt!', es: 'Vine del oeste de Pensilvania a vender centeno. ¡Perdí mi recibo de impuestos!', fa: 'از غرب پنسلوانیا آمدم تا جودر بفروشم. رسید مالیاتم گم شد!' },
        { en: 'In 1794, farmers there fought the whiskey tax. It was the Whiskey [[rebellion|Rebellion]].', es: 'En 1794, los granjeros de allí lucharon contra el impuesto al whiskey. Fue la [[rebellion|Rebelión]] del Whiskey.', fa: 'در ۱۷۹۴، دهقانان آنجا علیه مالیات ویسکی جنگیدند. این [[rebellion|شورش]] ویسکی بود.' },
        { en: 'Washington sent an army, and the fighting stopped. Now we pay the tax.', es: 'Washington mandó un ejército y la lucha paró. Ahora pagamos el impuesto.', fa: 'واشنگتن یک لشکر فرستاد و جنگ تمام شد. حالا ما مالیات می‌دهیم.' },
        { en: 'Ben the fisherman saw the wind take my paper. Please ask him!', es: 'Ben, el pescador, vio al viento llevarse mi papel. ¡Pregúntale, por favor!', fa: 'بن ماهی‌گیر دید که باد کاغذم را برد. لطفاً از او بپرس!' }
      ],
      wait: { en: 'Ben is on the river shore, east of the mansion, north of the wharf.', es: 'Ben está en la orilla del río, al este de la mansión, al norte del muelle.', fa: 'بن کنار دریا است، شرق خانهٔ بزرگ، شمال بندرگاه.' },
      thanks: { en: 'My receipt! Washington showed the law must be obeyed. Thank you!', es: '¡Mi recibo! Washington mostró que la ley se debe cumplir. ¡Gracias!', fa: 'رسیدم! واشنگتن نشان داد که باید از قانون پیروی کرد. تشکر!' }
    },
    contact: {
      x: 25, y: 13,
      name: { en: 'Ben', es: 'Ben', fa: 'بن' },
      role: { en: 'Fisherman', es: 'Pescador', fa: 'ماهی‌گیر' },
      look: { skin: 5, hair: '#120c08', shirt: '#8a8a7a', pants: '#3a3a2a', style: 'short', hat: '#6a5a3a' },
      lines: [
        { en: 'I fish the Potomac every spring and mend the nets all year.', es: 'Pesco en el Potomac cada primavera y arreglo las redes todo el año.', fa: 'هر بهار در دریای پوتومک ماهی می‌گیرم و تمام سال جال‌ها را ترمیم می‌کنم.' },
        { en: 'The fish are sold, but I am paid nothing. I am enslaved.', es: 'El pescado se vende, pero a mí no me pagan nada. Estoy esclavizado.', fa: 'ماهی‌ها فروخته می‌شوند، اما به من هیچ مزدی نمی‌دهند. من برده هستم.' },
        { en: 'The wind blew a paper far west. Look in the wheat, north of the sign.', es: 'El viento llevó un papel lejos al oeste. Busca en el trigo, al norte del letrero.', fa: 'باد یک کاغذ را دور به غرب برد. در گندم، شمال تابلو، ببین.' }
      ]
    },
    action: {
      type: 'find',
      at: [2, 2],
      hint: { en: 'Look in the west wheat field, north of the sign post', es: 'Busca en el trigal del oeste, al norte del letrero', fa: 'در کشتزار گندم غربی، شمال تابلو، ببین' },
      found: { en: 'The tax receipt! It was caught on the wheat stalks.', es: '¡El recibo de impuestos! Estaba atrapado en las espigas de trigo.', fa: 'رسید مالیات! به ساقه‌های گندم گیر کرده بود.' },
      item: { icon: '📄', name: { en: 'A tax receipt', es: 'Un recibo de impuestos', fa: 'یک رسید مالیات' } }
    }
  },

  scraps: [[1, 20], [24, 1], [24, 20]],
  smudges: [[9, 20], [19, 5]],

  challenge: {
    at: [13, 10],
    type: 'survey', // in the world; the card version (table) is the fallback
    // one survey post per row: years by the wheat, party by the north lane, big event on the south lawn,
    // the warning or law by the corn, and how it ended down by the river
    spots: [[6, 9], [22, 5], [17, 13], [12, 18], [24, 18]],
    stat: 'hei',
    title: { en: 'Two Presidents side by side', es: 'Dos presidentes lado a lado', fa: 'دو رئیس‌جمهور کنار هم' },
    intro: { en: 'The Grump mixed up the journal table! Read each post. Then answer at the stone.',
      es: '¡El Gruñón revolvió la tabla del diario! Lee cada poste. Luego responde en la piedra.',
      fa: 'غرغرو جدول کتابچه را به هم زد! هر تیر را بخوان. بعد کنار سنگ جواب بده.' },
    table: {
      head: [
        { en: 'Fact', es: 'Dato', fa: 'معلومات' },
        { en: 'George Washington', es: 'George Washington', fa: 'جورج واشنگتن' },
        { en: 'John Adams', es: 'John Adams', fa: 'جان آدامز' }
      ],
      rows: [
        [{ en: 'Years as President', es: 'Años de presidente', fa: 'سال‌های ریاست' }, { en: '1789–1797', es: '1789–1797', fa: '۱۷۸۹–۱۷۹۷' }, { en: '1797–1801', es: '1797–1801', fa: '۱۷۹۷–۱۸۰۱' }],
        [{ en: 'Political party', es: 'Partido político', fa: 'حزب سیاسی' }, { en: 'No party', es: 'Ningún partido', fa: 'بدون حزب' }, { en: 'Federalist', es: 'Federalista', fa: 'فدرالیست' }],
        [{ en: 'A big event', es: 'Un gran suceso', fa: 'یک رویداد بزرگ' }, { en: 'Whiskey Rebellion, 1794', es: 'Rebelión del Whiskey, 1794', fa: 'شورش ویسکی، ۱۷۹۴' }, { en: 'XYZ Affair and Quasi-War with France', es: 'Asunto XYZ y Cuasi Guerra con Francia', fa: 'ماجرای XYZ و جنگ اعلان‌نشده با فرانسه' }],
        [{ en: 'A warning or a law', es: 'Una advertencia o una ley', fa: 'یک هشدار یا یک قانون' }, { en: 'Farewell Address: beware of parties', es: 'Discurso de Despedida: cuidado con los partidos', fa: 'پیام خداحافظی: از حزب‌ها بپرهیزید' }, { en: 'Alien and Sedition Acts, 1798', es: 'Leyes de Extranjería y Sedición, 1798', fa: 'قانون‌های بیگانگان و فتنه، ۱۷۹۸' }],
        [{ en: 'How it ended', es: 'Cómo terminó', fa: 'چطور تمام شد' }, { en: 'Chose to go home after 2 terms', es: 'Decidió irse a casa tras 2 períodos', fa: 'خودش بعد از ۲ دوره به خانه رفت' }, { en: 'Lost the election of 1800 to Jefferson', es: 'Perdió la elección de 1800 ante Jefferson', fa: 'در انتخابات ۱۸۰۰ به جفرسن باخت' }]
      ],
      note: { en: 'In 1801, Adams handed power to Jefferson in peace. Some called it the Revolution of 1800.', es: 'En 1801, Adams entregó el poder a Jefferson en paz. Algunos lo llamaron la Revolución de 1800.', fa: 'در ۱۸۰۱، آدامز قدرت را با صلح به جفرسن سپرد. بعضی آن را انقلاب ۱۸۰۰ نامیدند.' }
    },
    questions: [
      { q: { en: 'Which President served longer?', es: '¿Qué presidente gobernó más tiempo?', fa: 'کدام رئیس‌جمهور مدت بیشتری خدمت کرد؟' },
        choices: [{ en: 'George Washington', es: 'George Washington', fa: 'جورج واشنگتن' }, { en: 'John Adams', es: 'John Adams', fa: 'جان آدامز' }, { en: 'They served the same', es: 'Gobernaron lo mismo', fa: 'هر دو یک اندازه' }, { en: 'Neither one served', es: 'Ninguno gobernó', fa: 'هیچ‌کدام خدمت نکرد' }], answer: 0,
        why: { en: 'Washington served 8 years, from 1789 to 1797. Adams served 4 years.', es: 'Washington gobernó 8 años, de 1789 a 1797. Adams gobernó 4 años.', fa: 'واشنگتن ۸ سال، از ۱۷۸۹ تا ۱۷۹۷، خدمت کرد. آدامز ۴ سال خدمت کرد.' } },
      { q: { en: 'Which President belonged to a political party?', es: '¿Qué presidente pertenecía a un partido político?', fa: 'کدام رئیس‌جمهور عضو یک حزب سیاسی بود؟' },
        choices: [{ en: 'John Adams', es: 'John Adams', fa: 'جان آدامز' }, { en: 'George Washington', es: 'George Washington', fa: 'جورج واشنگتن' }, { en: 'Both of them', es: 'Los dos', fa: 'هر دو' }, { en: 'Neither of them', es: 'Ninguno', fa: 'هیچ‌کدام' }], answer: 0,
        why: { en: 'The table says Adams was a Federalist. Washington had no party.', es: 'La tabla dice que Adams era federalista. Washington no tenía partido.', fa: 'جدول می‌گوید آدامز فدرالیست بود. واشنگتن حزب نداشت.' } },
      { q: { en: 'Which President signed laws that limited speech against the government?', es: '¿Qué presidente firmó leyes que limitaban hablar contra el gobierno?', fa: 'کدام رئیس‌جمهور قانون‌هایی امضا کرد که گپ زدن علیه حکومت را محدود کرد؟' },
        choices: [{ en: 'John Adams', es: 'John Adams', fa: 'جان آدامز' }, { en: 'George Washington', es: 'George Washington', fa: 'جورج واشنگتن' }, { en: 'Thomas Jefferson', es: 'Thomas Jefferson', fa: 'توماس جفرسن' }, { en: 'James Madison', es: 'James Madison', fa: 'جیمز مدیسن' }], answer: 0,
        why: { en: 'Adams signed the Alien and Sedition Acts in 1798.', es: 'Adams firmó las Leyes de Extranjería y Sedición en 1798.', fa: 'آدامز در ۱۷۹۸ قانون‌های بیگانگان و فتنه را امضا کرد.' } },
      { q: { en: 'How did Adams\'s time as President end?', es: '¿Cómo terminó el tiempo de Adams como presidente?', fa: 'دورهٔ ریاست آدامز چطور تمام شد؟' },
        choices: [{ en: 'He lost an election', es: 'Perdió una elección', fa: 'در انتخابات باخت' }, { en: 'He won a third term', es: 'Ganó un tercer período', fa: 'دورهٔ سوم را برد' }, { en: 'Congress removed him', es: 'El Congreso lo sacó', fa: 'کانگرس او را برکنار کرد' }, { en: 'He left for France', es: 'Se fue a Francia', fa: 'به فرانسه رفت' }], answer: 0,
        why: { en: 'Adams lost the election of 1800 to Jefferson. Then he left in peace.', es: 'Adams perdió la elección de 1800 ante Jefferson. Luego se fue en paz.', fa: 'آدامز در انتخابات ۱۸۰۰ به جفرسن باخت. بعد با صلح رفت.' } }
    ],
    success: { en: 'The journal table is clear again! Two Presidents, side by side.', es: '¡La tabla del diario está clara otra vez! Dos presidentes, lado a lado.', fa: 'جدول کتابچه دوباره روشن شد! دو رئیس‌جمهور، کنار هم.' }
  },

  boss: {
    at: [22, 15],
    stat: 'pla',
    need: 3,
    name: { en: 'The Party Grump', es: 'El Gruñón Partidista', fa: 'غرغروی حزبی' },
    appear: { en: 'The Party Grump is shouting on the lawn south of the mansion!', es: '¡El Gruñón Partidista grita en el césped al sur de la mansión!', fa: 'غرغروی حزبی روی چمن جنوب خانهٔ بزرگ داد می‌زند!' },
    taunt: { en: 'Pick a side and shout louder! Who needs rules for Presidents?', es: '¡Elige un bando y grita más fuerte! ¿Quién necesita reglas para los presidentes?', fa: 'یک طرف را بگیر و بلندتر داد بزن! کی برای رئیس‌جمهور قاعده می‌خواهد؟' },
    win: { en: 'The shouting stops. Journal page 3.3 floats down into your hands!', es: 'Los gritos paran. ¡La página 3.3 del diario cae en tus manos!', fa: 'داد و فریاد تمام می‌شود. صفحهٔ ۳.۳ کتابچه به دستت می‌افتد!' },
    questions: [
      { q: { en: 'In Washington\'s Cabinet, what did Alexander Hamilton lead?', es: 'En el Gabinete de Washington, ¿qué dirigía Alexander Hamilton?', fa: 'در کابینهٔ واشنگتن، الکساندر همیلتن چه را رهبری می‌کرد؟' },
        choices: [
          { en: 'The Treasury', es: 'El Tesoro', fa: 'خزانه' },
          { en: 'The army', es: 'El ejército', fa: 'اردو' },
          { en: 'The Supreme Court', es: 'La Corte Suprema', fa: 'دادگاه عالی' },
          { en: 'The State Department', es: 'El Departamento de Estado', fa: 'وزارت خارجه' }],
        answer: 0,
        why: { en: 'Hamilton led the Treasury, the nation\'s money. Jefferson was Secretary of State.', es: 'Hamilton dirigía el Tesoro, el dinero de la nación. Jefferson era secretario de Estado.', fa: 'همیلتن خزانه، یعنی پول کشور، را رهبری می‌کرد. جفرسن وزیر خارجه بود.' } },
      { q: { en: 'Washington stepped down after two terms. Why did this matter?', es: 'Washington dejó el cargo tras dos períodos. ¿Por qué importó?', fa: 'واشنگتن بعد از دو دوره کنار رفت. چرا این مهم بود؟' },
        choices: [
          { en: 'It set a precedent', es: 'Sentó un precedente', fa: 'یک نمونه برای بعد شد' },
          { en: 'It made him a king', es: 'Lo hizo rey', fa: 'او را پادشاه ساخت' },
          { en: 'It ended all elections', es: 'Acabó con las elecciones', fa: 'همهٔ انتخابات را ختم کرد' },
          { en: 'It started a new war', es: 'Empezó una guerra nueva', fa: 'یک جنگ نو را شروع کرد' }],
        answer: 0,
        why: { en: 'Later Presidents followed his example. A precedent is an example others follow.', es: 'Los presidentes después siguieron su ejemplo. Un precedente es un ejemplo que otros siguen.', fa: 'رئیس‌جمهورهای بعدی از او پیروی کردند. نمونه‌ای شد که دیگران دنبالش کردند.' } },
      { q: { en: 'What did the Whiskey Rebellion of 1794 show?', es: '¿Qué mostró la Rebelión del Whiskey de 1794?', fa: 'شورش ویسکی در ۱۷۹۴ چه را نشان داد؟' },
        choices: [
          { en: 'The government could enforce its laws', es: 'El gobierno podía hacer cumplir sus leyes', fa: 'حکومت می‌توانست قانونش را اجرا کند' },
          { en: 'Farmers never had to pay any taxes', es: 'Los granjeros nunca tenían que pagar impuestos', fa: 'دهقانان هرگز مالیات نمی‌دادند' },
          { en: 'Each state needed its own President', es: 'Cada estado necesitaba su propio presidente', fa: 'هر ایالت رئیس‌جمهور خودش را می‌خواست' },
          { en: 'The President had no power at all', es: 'El presidente no tenía ningún poder', fa: 'رئیس‌جمهور هیچ قدرتی نداشت' }],
        answer: 0,
        why: { en: 'Washington sent an army, and the rebels stopped. Federal law was obeyed.', es: 'Washington mandó un ejército y los rebeldes pararon. Se cumplió la ley federal.', fa: 'واشنگتن لشکر فرستاد و شورشیان دست کشیدند. از قانون فدرال پیروی شد.' } },
      { q: { en: 'What did the Proclamation of Neutrality (1793) say?', es: '¿Qué decía la Proclamación de Neutralidad (1793)?', fa: 'اعلامیهٔ بی‌طرفی (۱۷۹۳) چه می‌گفت؟' },
        choices: [
          { en: 'Stay out of Europe\'s war', es: 'No entrar en la guerra de Europa', fa: 'از جنگ اروپا دور بمانیم' },
          { en: 'Join France in its war', es: 'Unirse a Francia en su guerra', fa: 'با فرانسه در جنگ یکجا شویم' },
          { en: 'Join Britain against France', es: 'Unirse a Gran Bretaña contra Francia', fa: 'با برتانیه علیه فرانسه یکجا شویم' },
          { en: 'Stop all trade with Europe', es: 'Parar todo comercio con Europa', fa: 'همهٔ تجارت با اروپا را بند کنیم' }],
        answer: 0,
        why: { en: 'The young nation stayed neutral. It did not take a side between Britain and France.', es: 'La joven nación se quedó neutral. No tomó partido entre Gran Bretaña y Francia.', fa: 'کشور جوان بی‌طرف ماند. میان برتانیه و فرانسه طرف هیچ‌کدام را نگرفت.' } },
      { q: { en: 'What did Washington warn against in his Farewell Address?', es: '¿Contra qué advirtió Washington en su Discurso de Despedida?', fa: 'واشنگتن در پیام خداحافظی‌اش دربارهٔ چه هشدار داد؟' },
        choices: [
          { en: 'Parties and permanent alliances', es: 'Partidos y alianzas permanentes', fa: 'حزب‌ها و پیمان‌های همیشگی' },
          { en: 'New roads and new schools', es: 'Caminos nuevos y escuelas nuevas', fa: 'سرک‌های نو و مکتب‌های نو' },
          { en: 'Elections every four years', es: 'Elecciones cada cuatro años', fa: 'انتخابات هر چهار سال' },
          { en: 'Any trade with other nations', es: 'Todo comercio con otras naciones', fa: 'هر تجارتی با کشورهای دیگر' }],
        answer: 0,
        why: { en: 'He feared parties would divide Americans and alliances would drag them into wars.', es: 'Temía que los partidos dividieran al país y las alianzas lo metieran en guerras.', fa: 'او می‌ترسید حزب‌ها مردم را جدا کنند و پیمان‌ها کشور را به جنگ بکشانند.' } },
      { q: { en: 'The Sedition Act of 1798 punished people for what?', es: '¿Por qué castigaba a la gente la Ley de Sedición de 1798?', fa: 'قانون فتنهٔ ۱۷۹۸ مردم را برای چه جزا می‌داد؟' },
        choices: [
          { en: 'Writing against the leaders', es: 'Escribir contra los líderes', fa: 'نوشتن علیه رهبران' },
          { en: 'Growing wheat, not tobacco', es: 'Sembrar trigo y no tabaco', fa: 'کشت گندم به جای تنباکو' },
          { en: 'Voting in an election', es: 'Votar en una elección', fa: 'رأی دادن در انتخابات' },
          { en: 'Moving west to new land', es: 'Mudarse al oeste a tierras nuevas', fa: 'کوچ کردن به زمین‌های نو در غرب' }],
        answer: 0,
        why: { en: 'It limited speech. Some newspaper printers who criticized Adams went to jail.', es: 'Limitaba la libertad de expresión. Algunos impresores que criticaron a Adams fueron a la cárcel.', fa: 'آزادی بیان را محدود کرد. بعضی چاپگرهای روزنامه که از آدامز انتقاد کردند، زندانی شدند.' } },
      { q: { en: 'Madison and Jefferson wrote the Virginia and Kentucky Resolutions. What did they argue?', es: 'Madison y Jefferson escribieron las Resoluciones de Virginia y Kentucky. ¿Qué argumentaban?', fa: 'مدیسن و جفرسن قطعنامه‌های ویرجینیا و کنتاکی را نوشتند. چه می‌گفتند؟' },
        choices: [
          { en: 'States could judge such laws', es: 'Los estados podían juzgar esas leyes', fa: 'ایالت‌ها می‌توانند این قانون‌ها را قضاوت کنند' },
          { en: 'The President should rule for life', es: 'El presidente debía gobernar de por vida', fa: 'رئیس‌جمهور باید تا آخر عمر حکومت کند' },
          { en: 'Congress should close newspapers', es: 'El Congreso debía cerrar periódicos', fa: 'کانگرس باید روزنامه‌ها را بند کند' },
          { en: 'Virginia should join Britain again', es: 'Virginia debía volver a Gran Bretaña', fa: 'ویرجینیا باید دوباره با برتانیه یکجا شود' }],
        answer: 0,
        why: { en: 'They said the Alien and Sedition Acts broke the Constitution, and states could judge them.', es: 'Dijeron que esas leyes violaban la Constitución y que los estados podían juzgarlas.', fa: 'گفتند این قانون‌ها قانون اساسی را شکستند و ایالت‌ها می‌توانند آن‌ها را قضاوت کنند.' } },
      { q: { en: 'In 1801, Adams handed power to Jefferson. Why was this important?', es: 'En 1801, Adams entregó el poder a Jefferson. ¿Por qué fue importante?', fa: 'در ۱۸۰۱، آدامز قدرت را به جفرسن سپرد. چرا این مهم بود؟' },
        choices: [
          { en: 'Power changed hands in peace', es: 'El poder cambió de manos en paz', fa: 'قدرت با صلح دست به دست شد' },
          { en: 'Jefferson took power with an army', es: 'Jefferson tomó el poder con un ejército', fa: 'جفرسن با لشکر قدرت را گرفت' },
          { en: 'Adams stayed on as a king', es: 'Adams se quedó como rey', fa: 'آدامز به عنوان پادشاه ماند' },
          { en: 'Congress canceled the election', es: 'El Congreso canceló la elección', fa: 'کانگرس انتخابات را لغو کرد' }],
        answer: 0,
        why: { en: 'Rival parties passed power by votes, not war. Some called it the Revolution of 1800.', es: 'Partidos rivales pasaron el poder con votos, no con guerra. Algunos lo llamaron la Revolución de 1800.', fa: 'حزب‌های رقیب قدرت را با رأی سپردند، نه با جنگ. بعضی آن را انقلاب ۱۸۰۰ نامیدند.' } }
    ]
  },

  learned: [
    { en: 'Washington was the first President (1789–1797). He set [[precedent|precedents]]: a [[cabinet|Cabinet]], the title "Mr. President" and two terms.', es: 'Washington fue el primer presidente (1789–1797). Sentó [[precedent|precedentes]]: un [[cabinet|Gabinete]], el título "señor presidente" y dos períodos.', fa: 'واشنگتن اولین رئیس‌جمهور بود (۱۷۸۹–۱۷۹۷). او [[precedent|نمونه‌هایی]] گذاشت: یک [[cabinet|کابینه]]، لقب «آقای رئیس‌جمهور» و دو دوره.' },
    { en: 'He stopped the Whiskey [[rebellion|Rebellion]], kept the nation [[neutral|neutral]], and warned against [[political party|parties]] in his [[farewell address|Farewell Address]].', es: 'Detuvo la [[rebellion|Rebelión]] del Whiskey, mantuvo [[neutral|neutral]] al país y advirtió contra los [[political party|partidos]] en su [[farewell address|Discurso de Despedida]].', fa: 'او [[rebellion|شورش]] ویسکی را خاموش کرد، کشور را [[neutral|بی‌طرف]] نگه داشت و در [[farewell address|پیام خداحافظی]] دربارهٔ [[political party|حزب‌ها]] هشدار داد.' },
    { en: 'Adams signed the Alien and [[sedition|Sedition]] Acts. In 1801 he handed power to Jefferson in peace.', es: 'Adams firmó las Leyes de Extranjería y [[sedition|Sedición]]. En 1801 entregó el poder a Jefferson en paz.', fa: 'آدامز قانون‌های بیگانگان و [[sedition|فتنه]] را امضا کرد. در ۱۸۰۱ قدرت را با صلح به جفرسن سپرد.' },
    { en: 'Hundreds of [[enslaved|enslaved]] people lived and worked at Mount Vernon. His will freed the people he enslaved.', es: 'Cientos de personas [[enslaved|esclavizadas]] vivían y trabajaban en Mount Vernon. Su testamento liberó a las personas que él esclavizaba.', fa: 'صدها نفر [[enslaved|برده]] در مونت ورنن زندگی و کار می‌کردند. وصیت‌نامهٔ او مردمی را که برده کرده بود، آزاد کرد.' }
  ],
  reflect: {
    q: { en: 'Washington warned against political parties. Was he right? Give one reason.', es: 'Washington advirtió contra los partidos políticos. ¿Tenía razón? Da una razón.', fa: 'واشنگتن دربارهٔ حزب‌های سیاسی هشدار داد. آیا حق داشت؟ یک دلیل بگو.' },
    starter: { en: 'I think Washington was', es: 'Creo que Washington', fa: 'فکر می‌کنم واشنگتن' }
  }
};
